#!/bin/bash
# chkconfig: 2345 55 25
# description: bt Cloud Service

### BEGIN INIT INFO
# Provides:          bt
# Required-Start:    $all
# Required-Stop:     $all
# Default-Start:     2 3 4 5
# Default-Stop:      0 1 6
# Short-Description: starts bt
# Description:       starts the bt
### END INIT INFO

panel_init(){

        if [ -f "/etc/redhat-release" ]; then
          os_version=$(cat /etc/redhat-release | grep -E "Red Hat|CentOS" | grep -Eo '([0-9]+\.)+[0-9]+' | grep -Eo '^[0-9]')
        fi
        OPENSSL_VER=$(openssl version|grep -oE '1.0|1.1.0')
        if [ "$os_version" == "7" ] || [ "${OPENSSL_VER}" ]; then
          if [ -d /usr/local/openssl111 ]; then
            export LD_LIBRARY_PATH=/usr/local/openssl111/lib:$LD_LIBRARY_PATH
          fi
        fi

        panel_path=/www/server/panel
        pidfile=$panel_path/logs/panel.pid
        cd $panel_path
        env_path=$panel_path/pyenv/bin/python3
        if [ -f $env_path ];then
                pythonV=$panel_path/pyenv/bin/python3
                chmod -R 700 $panel_path/pyenv/bin
        else
                pythonV=/usr/bin/python
        fi
        reg="^#\!$pythonV\$"
        is_sed=$(cat $panel_path/BT-Panel|head -n 1|grep -E $reg)
        if [ "${is_sed}" = "" ];then
                sed -i "s@^#!.*@#!$pythonV@" $panel_path/BT-Panel
        fi
        is_sed=$(cat $panel_path/BT-Task|head -n 1|grep -E $reg)
        if [ "${is_sed}" = "" ];then
                sed -i "s@^#!.*@#!$pythonV@" $panel_path/BT-Task
        fi
        chmod 700 $panel_path/BT-Panel
        chmod 700 $panel_path/BT-Task
        log_file=$panel_path/logs/error.log
        task_log_file=$panel_path/logs/task.log
        # if [ -f $panel_path/data/ssl.pl ];then
        #         log_file=/dev/null
        # fi

        port=$(cat $panel_path/data/port.pl)
}
panel_init

get_panel_pids(){
        isStart=$(ps aux|grep -E '(runserver|BT-Panel)'|grep -v grep|awk '{print $2}'|xargs)
        pids=$isStart
        arr=$isStart
}

get_task_pids(){
        isStart=$(ps aux|grep -E '(task.py|BT-Task)'|grep -v grep|awk '{print $2}'|xargs)
        pids=$isStart
        arr=$isStart
}

panel_start()
{
        isStart=`ps aux|grep 'runserver:app'|grep -v grep|awk '{print $2}'`
        if [ "$isStart" != '' ];then
                kill -9 $isStart
        fi
        get_panel_pids
        if [ "$isStart" == '' ];then
                rm -f $pidfile

                echo -e "Starting Bt-Panel...\c"
                nohup $panel_path/BT-Panel >> $log_file 2>&1 &
                isStart=""
                n=0
                while [[ "$isStart" == "" ]];
                do
                        echo -e ".\c"
                        sleep 0.5
                        get_panel_pids
                        let n+=1
                        if [ $n -gt 8 ];then
                                break;
                        fi
                done
                if [ "$isStart" == '' ];then
                        panel_port_check
                        echo -e "\033[31mfailed\033[0m"
                        echo '------------------------------------------------------'
                        tail -n 20 $log_file
                        echo '------------------------------------------------------'
                        echo -e "\033[31mError: BT-Panel service startup failed.\033[0m"
                fi
                echo -e "	\033[32mdone\033[0m"
        else
                echo "Starting Bt-Panel... Bt-Panel (pid $(echo $isStart)) already running"
        fi

        get_task_pids
        if [ "$isStart" == '' ];then
                echo -e "Starting Bt-Tasks... \c"
                nohup $panel_path/BT-Task >> $task_log_file 2>&1 &
                sleep 0.2
                get_task_pids
                if [ "$isStart" == '' ];then
                        echo -e "\033[31mfailed\033[0m"
                        echo '------------------------------------------------------'
                        tail -n 20 $task_log_file
                        echo '------------------------------------------------------'
                        echo -e "\033[31mError: BT-Task service startup failed.\033[0m"
                        return;
                fi
                echo -e "	\033[32mdone\033[0m"
        else
                echo "Starting Bt-Tasks... Bt-Tasks (pid $isStart) already running"
        fi
}

panel_port_check()
{
	is_process=$(lsof -n -P -i:$port -sTCP:LISTEN|grep LISTEN|grep -v grep|awk '{print $1}'|sort|uniq|xargs)
	for pn in ${is_process[@]}
        do
          if [ "$pn" = "nginx" ];then
				/etc/init.d/nginx restart
		  fi

		  if [ "$pn" = "httpd" ];then
				/etc/init.d/httpd restart
		  fi

		  if [ "$pn" = "mysqld" ];then
				/etc/init.d/mysqld restart
		  fi

		  if [ "$pn" = "superviso" ];then
				pkill -9 superviso
				sleep 0.2
				supervisord -c /etc/supervisor/supervisord.conf
		  fi

		  if [ "$pn" = "pure-ftpd" ];then
				/etc/init.d/pure-ftpd restart
		  fi

		  if [ "$pn" = "memcached" ];then
				/etc/init.d/memcached restart
		  fi

		  if [ "$pn" = "sudo" ];then
				if [ -f /etc/init.d/redis ];then
					/etc/init.d/redis restart
				fi
		  fi

		  if [ "$pn" = "php-fpm" ];then
				php_v=(52 53 54 55 56 70 71 72 73 74);
				for pv in ${php_v[@]};
				do
					if [ -f /etc/init.d/php-fpm-${pv} ];then
						if [ -f /www/server/php/%{pv}/sbin/php-fpm ];then
							if [ -f /tmp/php-cgi-${pv}.sock ];then
								/etc/init.d/php-fpm-${pv} start
							fi
							/etc/init.d/php-fpm-${pv} restart
						fi
					fi
				done
		  fi
        done

	is_ports=$(lsof -n -P -i:$port|grep LISTEN|grep -v grep|awk '{print $2}'|xargs)
	if [ "$is_ports" != '' ];then
		kill -9 $is_ports
		sleep 1
	fi
}

stop_webserver()
{
        webserver_ctl=$panel_path/script/webserver-ctl.sh
        if [ -f $webserver_ctl ];then
                bash $webserver_ctl stop &> /dev/null
        fi
}

panel_stop()
{
        echo -e "Stopping Bt-Tasks...\c";
        get_task_pids
        arr=($pids)
        for p in ${arr[@]}
        do
                kill -9 $p
        done
        echo -e "	\033[32mdone\033[0m"

        echo -e "Stopping Bt-Panel...\c";

        get_panel_pids
        for p in ${arr[@]}
        do
                kill -9 $p &>/dev/null
        done

        if [ -f $pidfile ];then
                rm -f $pidfile
        fi

        stop_webserver

        echo -e "	\033[32mdone\033[0m"
}

panel_status()
{
        port=$(cat $panel_path/data/port.pl)
        get_panel_pids
        if [ "$isStart" != '' ];then
                echo -e "\033[32mBt-Panel (pid $(echo $isStart)) already running\033[0m"
        else
                echo -e "\033[31mBt-Panel not running\033[0m"
        fi

        get_task_pids
        if [ "$isStart" != '' ];then
                echo -e "\033[32mBt-Task (pid $isStart) already running\033[0m"
        else
                echo -e "\033[31mBt-Task not running\033[0m"
        fi
}

panel_reload()
{
	isStart=$(ps aux|grep 'runserver:app'|grep -v grep|awk '{print $2}')
  if [ "$isStart" != '' ];then
		kill -9 $isStart
		sleep 0.5
	fi
	get_panel_pids
	stop_webserver
        if [ "$isStart" != '' ];then
                get_panel_pids
                for p in ${arr[@]}
                do
                        kill -9 $p
                done
                        rm -f $pidfile
                        echo -e "Reload Bt-Panel.\c";
                        chmod 700 $panel_path/BT-Panel
                        nohup $panel_path/BT-Panel >> $log_file 2>&1 &
                        isStart=""
                        n=0
                        while [[ "$isStart" == "" ]];
                        do
                                echo -e ".\c"
                                sleep 0.5
                                get_panel_pids
                                let n+=1
                                if [ $n -gt 8 ];then
                                        break;
                                fi
                        done
                if [ "$isStart" == '' ];then
                        panel_port_check
                        echo -e "\033[31mfailed\033[0m"
                        echo '------------------------------------------------------'
                        tail -n 20 $log_file
                        echo '------------------------------------------------------'
                        echo -e "\033[31mError: BT-Panel service startup failed.\033[0m"
                        return;
                fi

                echo -e "	\033[32mdone\033[0m"
        else
                echo -e "\033[31mBt-Panel not running\033[0m"
                panel_start
        fi
}

install_used()
{
        if [ -f $panel_path/aliyun.pl ];then
                password=$(cat /dev/urandom | head -n 16 | md5sum | head -c 12)
                username=$($pythonV $panel_path/tools.py panel $password)
                echo "$password" > $panel_path/default.pl
                rm -f $panel_path/aliyun.pl
                chattr +i $panel_path/default.pl
        fi

        if [ -f $panel_path/php_mysql_auto.pl ];then
                bash $panel_path/script/mysql_auto.sh &> /dev/null
                bash $panel_path/script/php_auto.sh &> /dev/null
                rm -f $panel_path/php_mysql_auto.pl
        fi

        pip_file=/www/server/panel/pyenv/bin/pip3
        python_file=/www/server/panel/pyenv/bin/python3
        if [ -f $pip_file ];then
                is_rep=$(ls -l /usr/bin/btpip|grep pip3.)
                if [ "${is_rep}" != "" ];then
                        rm -f /usr/bin/btpip /usr/bin/btpython
                        ln -sf $pip_file /usr/bin/btpip
                        ln -sf $python_file /usr/bin/btpython
                fi
        fi

}

error_logs()
{
	tail -n 100 $log_file
}


case "$1" in
        'start')
                install_used
                panel_start
                ;;
        'stop')
                panel_stop
                ;;
        'restart')
                panel_stop
                sleep 1
                panel_start
                ;;
        'reload')
                panel_reload
                ;;
        'status')
                panel_status
                ;;
        'logs')
        		error_logs
        		;;
        'panel')
        		$pythonV $panel_path/tools.py cli $2
        		;;
        'default')
                port=$(cat $panel_path/data/port.pl)
                password=$(cat $panel_path/default.pl)
                if [ -f $panel_path/data/domain.conf ];then
                	address=$(cat $panel_path/data/domain.conf)
                fi
                auth_path=/login
                if [ -f $panel_path/data/admin_path.pl ];then
                	auth_path=$(cat $panel_path/data/admin_path.pl)
                fi
                ipv4_address=""
                ipv6_address=""
                if [ "$address" = "" ];then
                       
                        ipv4_address=$(curl -4 -sS --connect-timeout 10 -m 15 https://www.aapanel.com/api/common/getClientIP 2>&1)
                        if [ -z "${ipv4_address}" ];then
                                ipv4_address=$(curl -4 -sS --connect-timeout 10 -m 15 https://ifconfig.me 2>&1)
                                if [ -z "${ipv4_address}" ];then
                                    ipv4_address=$(curl -4 -sS --connect-timeout 10 -m 15 https://www.bt.cn/Api/getIpAddress 2>&1)
                                fi
                        fi
                        IPV4_REGEX="^([0-9]{1,3}\.){3}[0-9]{1,3}$"
                        if ! [[ $ipv4_address =~ $IPV4_REGEX ]]; then
                                ipv4_address=""
                        fi
                        
                        ipv6_address=$(curl -6 -sS --connect-timeout 10 -m 15 https://www.aapanel.com/api/common/getClientIP 2>&1)
                        # IPV6_REGEX="^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$"
                        IPV6_REGEX="^([0-9a-fA-F]{0,4}:){1,7}[0-9a-fA-F]{0,4}$"
                        if ! [[ $ipv6_address =~ $IPV6_REGEX ]]; then
                                ipv6_address=""
                        else
                            if [[ ! $ipv6_address =~ ^\[ ]]; then
                                ipv6_address="[$ipv6_address]"
                            fi
                        fi

                        if [ "$address" = "" ] && [ "$ipv4_address" = "" ] && [ "$ipv6_address" = "" ];then
                            address="SERVER_IP"
                            echo -e "\033[33mFailed to obtain Internet IP, please use the server Internet IP+PORT to access.\033[0m"
                        fi
                fi
                pool=http
                if [ -f $panel_path/data/ssl.pl ];then
                        pool=https
                fi
                if [ "$auth_path" == "/" ];then
                        auth_path=/login
                fi
                LOCAL_IP=$(ip addr | grep -E -o '[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}' | grep -E -v "^127\.|^255\.|^0\." | head -n 1)
                echo -e "=================================================================="
                echo -e "\033[32maaPanel default info!\033[0m"
                echo -e "=================================================================="
                #echo  "aaPanel Internet Address: $pool://$address:$port$auth_path"
                #echo  "aaPanel Internal Address: $pool://${LOCAL_IP}:$port$auth_path"

                if [ "${ipv6_address}" ];then
                        echo  "aaPanel Internet IPv6 Address: ${pool}://${ipv6_address}:${port}${auth_path}"
                fi
                if [ "${ipv4_address}" ];then
                        echo  "aaPanel Internet IPv4 Address: ${pool}://${ipv4_address}:${port}${auth_path}"
                fi
                if [ "${address}" ];then
                        echo  "aaPanel Internet Address: ${pool}://${address}:${port}${auth_path}"
                fi

                if [ "${address}" ];then
                    echo  "aaPanel Internal Address: ${pool}://${address}:${port}${auth_path}"
                    echo -e "\033[33mNote: After binding a Domain, access is only allowed via the Domain. \nTo unbind the Domain, use: bt 12 \033[0m"
                else
                    echo  "aaPanel Internal Address:      ${pool}://${LOCAL_IP}:${port}${auth_path}"
                fi

                echo -e `$pythonV $panel_path/tools.py username`
                echo -e "password: $password"
                echo -e "\033[33mWarning:\033[0m"
                echo -e "\033[33mIf you cannot access the panel, \033[0m"
                echo -e "\033[33mrelease the following port ($port|888|80|443|20|21) in the security group\033[0m"
                echo -e "=================================================================="
                ;;
        *)
                $pythonV $panel_path/tools.py cli $1
        ;;
esac
