System.register(["./index-legacy96.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1732601582185","./index-legacy99.js?v=1732601582185","./page_layout-legacy.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy5.js?v=1732601582185","./index-legacy230.js?v=1732601582185","./new-legacy.js?v=1732601582185","./vue-legacy.js?v=1732601582185","./naive-legacy.js?v=1732601582185","./common-legacy.js?v=1732601582185","./__commonjsHelpers__-legacy.js?v=1732601582185","./public-legacy.js?v=1732601582185","./index-legacy97.js?v=1732601582185","./index-legacy121.js?v=1732601582185","./index-legacy.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy8.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy4.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy9.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy10.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy11.js?v=1732601582185","./site-legacy.js?v=1732601582185"],(function(e,l){"use strict";var t,n,a,o,r,s,d,_,i,u,p,c,v,j,x,m,g,w,y,f,b,h,N,$,k,C,U,q,D,E,A,I,O,P;return{setters:[e=>{t=e._},e=>{n=e._},e=>{a=e._},e=>{o=e.bI,r=e.dA,s=e.dB,d=e.f,_=e.dC,i=e.I,u=e.m,p=e.dD,c=e.j},e=>{v=e._},e=>{j=e.v},e=>{x=e.o},e=>{m=e.d,g=e.W,w=e.r,y=e.j,f=e.e,b=e.O,h=e.P,N=e.M,$=e.Y,k=e.Q,C=e.R,U=e.Z,q=e.X,D=e.ao,E=e.c},e=>{A=e.bG,I=e.ad,O=e.bL,P=e.bl},null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const l={class:"p-20px"},R={class:"w-360px"},M={class:"w-360px"},B={class:"w-200px"},F={class:"ml-10px text-default"},G={class:"w-440px"},H={class:"w-200px"},L={class:"ml-10px text-default"},Q={class:"w-150px"},S={class:"ml-10px text-default"},W={class:"w-150px"},X={class:"ml-10px text-default"},Y={class:"w-440px"},Z={class:"w-440px"};e("default",m({__name:"index",setup(e,{expose:m}){const{t:z}=g(),J=o(),K=w(null),T=w(""),V=y({project_cwd:"/www/wwwroot",project_name:"",project_script:null,project_script_two:"",port:null,run_user:"www",nodejs_version:null,project_ps:"",domains:""}),ee={project_cwd:{trigger:["blur","input"],required:!0,message:z("Node.index_28")},project_name:{trigger:["blur","input"],required:!0,message:z("Node.index_29")},project_script:{trigger:["change"],required:!0,message:z("Node.index_30")},project_script_two:{trigger:["blur","input"],required:!0,message:z("Node.index_31")},port:j(),nodejs_version:{trigger:["change"],required:!0,message:z("Node.index_32")},domains:{trigger:["blur"],validator:()=>{const e=V.domains.trim().split("\n");if(""===V.domains.trim())return!0;for(let l=0;l<e.length;l++)if(!r(e[l]))return new Error(`[${e[l]}] ${z("Node.index_82")}`);return!0}}},le=()=>{const e=V.project_cwd.split("/"),l=e[e.length-1];V.project_name=l,V.project_ps=l,T.value=V.project_cwd,ae()},te=w([]),ne=f((()=>0===te.value.length)),ae=async()=>{const{message:e}=await s({project_cwd:V.project_cwd});if(d(e)){const l=Object.keys(e).map((l=>({label:`${l} [${e[l]}]`,value:l})));V.project_script=l.length?l[0].value:"custom",l.push({label:z("Node.index_33"),value:"custom"}),te.value=l}},oe=[{label:"www",value:"www"},{label:"root",value:"root"}],re=w([]),se=e=>{V.project_ps=e};return(async()=>{const{message:e}=await _();i(e)&&e.length>0?(re.value=e.map((e=>({label:e,value:e}))),V.nodejs_version=e[0]):(re.value=[],V.nodejs_version=null,u.error({close:!0,content:z("Node.index_34"),onClose:()=>{x()}}))})(),m({onConfirm:async({hide:e})=>{await(K.value?.validate());const l=(()=>{const{project_script:e,port:l,nodejs_version:t}=V;if(null===e)throw u.error(z("Node.index_35")),new Error(z("Node.index_35"));if(null===l)throw u.error(z("Node.index_36")),new Error(z("Node.index_36"));if(null===t)throw u.error(z("Node.index_37")),new Error(z("Node.index_37"));const n=V.domains.trim()?V.domains.trim().split("\n").map((e=>e.trim())).map((e=>e.indexOf(":")>-1?e:e+":80")):[];return{project_cwd:V.project_cwd,project_name:V.project_name,project_script:"custom"===V.project_script?V.project_script_two:e,port:`${l}`,run_user:V.run_user,nodejs_version:t,project_ps:V.project_ps,domains:n,bind_extranet:n.length?1:0,is_power_on:1,max_memory_limit:4096,project_env:""}})();await p(l),J.setRefresh(!0),e()}}),(e,o)=>{const r=v,s=A,d=I,_=O,i=P,u=c,p=a,j=n,m=t;return b(),h("div",l,[N(j,{ref_key:"formRef",ref:K,model:C(V),rules:ee},{default:$((()=>[N(s,{label:e.$t("Docker.Container.index_17"),path:"project_cwd"},{default:$((()=>[k("div",R,[N(r,{value:C(V).project_cwd,"onUpdate:value":o[0]||(o[0]=e=>C(V).project_cwd=e),readonly:!0,onChange:le},null,8,["value"])])])),_:1},8,["label"]),N(s,{label:e.$t("Config.Alarm.index_43"),path:"project_name"},{default:$((()=>[k("div",M,[N(d,{value:C(V).project_name,"onUpdate:value":[o[1]||(o[1]=e=>C(V).project_name=e),se],placeholder:e.$t("Node.index_11")},null,8,["value","placeholder"])])])),_:1},8,["label"]),N(s,{label:e.$t("Node.index_12"),path:"project_script","show-feedback":!("custom"===C(V).project_script)},{default:$((()=>[k("div",B,[N(_,{value:C(V).project_script,"onUpdate:value":o[2]||(o[2]=e=>C(V).project_script=e),placeholder:e.$t("Node.index_13"),disabled:C(ne),options:C(te)},null,8,["value","placeholder","disabled","options"])]),k("div",F,"* "+U(e.$t("Node.index_14")),1)])),_:1},8,["label","show-feedback"]),"custom"===C(V).project_script?(b(),q(s,{key:0,class:"mt-8px",label:" ",path:"project_script_two"},{default:$((()=>[k("div",G,[N(r,{defaultPath:C(T),"checked-type":["file"],value:C(V).project_script_two,"onUpdate:value":o[3]||(o[3]=e=>C(V).project_script_two=e)},null,8,["defaultPath","value"])])])),_:1})):D("",!0),N(s,{label:e.$t("Docker.Container.create.index_7"),path:"port"},{default:$((()=>[k("div",H,[N(i,{value:C(V).port,"onUpdate:value":o[4]||(o[4]=e=>C(V).port=e),min:1,max:65535,"show-button":!1,placeholder:e.$t("Node.index_15")},null,8,["value","placeholder"])]),k("div",L,"* "+U(e.$t("Node.index_15")),1)])),_:1},8,["label"]),N(s,{label:e.$t("Ftp.Analysis.Index_27")},{default:$((()=>[k("div",Q,[N(_,{value:C(V).run_user,"onUpdate:value":o[5]||(o[5]=e=>C(V).run_user=e),options:oe},null,8,["value"])]),k("div",S,"* "+U(e.$t("Node.index_16")),1)])),_:1},8,["label"]),N(s,{label:"Node",path:"nodejs_version"},{default:$((()=>[k("div",W,[N(_,{value:C(V).nodejs_version,"onUpdate:value":o[6]||(o[6]=e=>C(V).nodejs_version=e),options:C(re)},null,8,["value","options"])]),k("div",X,[k("span",null,"* "+U(e.$t("Node.index_17"))+", ",1),N(u,{onClick:C(x)},{default:$((()=>[E(U(e.$t("Node.index_18")),1)])),_:1},8,["onClick"])])])),_:1}),N(s,{label:e.$t("Docker.Container.create.index_46"),path:"project_ps"},{default:$((()=>[k("div",Y,[N(d,{value:C(V).project_ps,"onUpdate:value":o[7]||(o[7]=e=>C(V).project_ps=e),placeholder:e.$t("Node.index_19")},null,8,["value","placeholder"])])])),_:1},8,["label"]),N(s,{label:e.$t("Mail.Domain.index_3"),path:"domains"},{default:$((()=>[k("div",Z,[N(p,{value:C(V).domains,"onUpdate:value":o[8]||(o[8]=e=>C(V).domains=e),rows:5},{default:$((()=>[k("p",null,U(e.$t("Node.index_20")),1),k("p",null,U(e.$t("Node.index_21")),1),k("p",null,U(e.$t("Node.index_22")),1),k("p",null,U(e.$t("Node.index_23")),1)])),_:1},8,["value"])])])),_:1},8,["label"])])),_:1},8,["model"]),N(m,{class:"mt-8px"},{default:$((()=>[k("li",null,U(e.$t("Node.index_24")),1),k("li",null,U(e.$t("Node.index_25")),1),k("li",null,U(e.$t("Node.index_26")),1),k("li",null,U(e.$t("Node.index_27")),1)])),_:1})])}}}))}}}));