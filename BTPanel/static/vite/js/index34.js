const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["js/index169.js?v=1753954525509","js/index102.js?v=1753954525509","js/vue.js?v=1753954525509","js/__commonjsHelpers__.js?v=1753954525509","js/naive.js?v=1753954525509","js/common.js?v=1753954525509","js/page_layout.js?v=1753954525509","js/public.js?v=1753954525509","css/public.css?v=1753954525509","css/page_layout.css?v=1753954525509","css/index19.css?v=1753954525509","js/index.vue_vue_type_script_setup_true_lang.js?v=1753954525509","js/index.vue_vue_type_script_setup_true_lang14.js?v=1753954525509","js/theme-chrome.js?v=1753954525509","js/file2.js?v=1753954525509","js/index172.js?v=1753954525509","css/index23.css?v=1753954525509","js/index.vue_vue_type_script_setup_true_lang23.js?v=1753954525509","js/index100.js?v=1753954525509","css/index17.css?v=1753954525509","js/index170.js?v=1753954525509","js/xterm-addon-canvas.js?v=1753954525509","css/xterm-addon-canvas.css?v=1753954525509","js/xterm.js?v=1753954525509","css/index73.css?v=1753954525509","js/index171.js?v=1753954525509","js/index.js?v=1753954525509","css/index99.css?v=1753954525509","js/index.vue_vue_type_script_setup_true_lang4.js?v=1753954525509","js/index.vue_vue_type_script_setup_true_lang7.js?v=1753954525509","css/index16.css?v=1753954525509"])))=>i.map(i=>d[i]);
import{i as e,a as t,v as a,e as s,m as l,c as o,O as n,_ as c,X as r,w as i,bC as u,q as p,o as d}from"./page_layout.js?v=1753954525509";import{u as m,d as _,c as v,E as f,z as k}from"./public.js?v=1753954525509";import{i as x,p as h,_ as g,k as w,r as C,aA as b,U as j,V as y,l as D,v as S,X as N,W as P,a3 as $,H as I,au as O,ag as L,ah as A,n as R,t as z,P as E,c as U,Q as J,a2 as V,j as B,a1 as q,al as H,ac as M,w as T,F as K,O as X,aj as F,I as Q}from"./vue.js?v=1753954525509";import{_ as W,c0 as G,ay as Y,D as Z,cD as ee,aq as te,aV as ae,c4 as se}from"./naive.js?v=1753954525509";import{_ as le}from"./index.vue_vue_type_script_setup_true_lang13.js?v=1753954525509";import{a as oe}from"./useModal.js?v=1753954525509";import{_ as ne}from"./index172.js?v=1753954525509";import{_ as ce}from"./index.vue_vue_type_script_setup_true_lang14.js?v=1753954525509";import"./common.js?v=1753954525509";import"./__commonjsHelpers__.js?v=1753954525509";import"./theme-chrome.js?v=1753954525509";import"./file2.js?v=1753954525509";const re=Symbol("docker-compose");function ie(){return x(re)}const ue=a=>{m({title:e.global.t("Docker.ComposeNew.index_38"),width:640,minHeight:300,footer:!0,data:a,component:g((()=>t((()=>import("./index169.js?v=1753954525509")),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]))))})},pe=(a,s)=>{m({title:e.global.t("Docker.ComposeNew.index_39",[a]),width:640,height:440,data:s,component:g((()=>t((()=>import("./index170.js?v=1753954525509")),__vite__mapDeps([20,21,22,23,6,2,3,4,5,7,8,9,24]))))})},de=s(w({__name:"menu-item-remark",props:{value:{default:""},blur:{}},setup(e){const t=e,a=C(t.value),s=C(!1),l=C(null),o=C(null),{isOutside:n}=b(l),c=()=>{a.value=t.value,s.value=!0,R((()=>{var e;null==(e=o.value)||e.focus()}))},r=async()=>{var e;try{await(null==(e=t.blur)?void 0:e.call(t,a.value))}finally{s.value=!1}};return(e,t)=>(j(),y("div",{ref_key:"remarkRef",ref:l,class:"text-desc"},[D(P("div",{class:I(["project-remark",{active:N(n)}]),onClick:O(c,["stop"])},$(e.value||e.$t("Docker.ComposeNew.index_12")),3),[[S,!N(s)]]),D(P("input",{ref_key:"inputRef",ref:o,"onUpdate:modelValue":t[0]||(t[0]=e=>A(a)?a.value=e:null),class:"project-input",onBlur:r},null,544),[[S,N(s)],[L,N(a)]])],512))}}),[["__scopeId","data-v-5787eab9"]]),me={class:"flex-1 pr-16px overflow-hidden"},_e={class:"menu-name"},ve=s(w({__name:"menu-item",props:{checked:{type:Boolean},active:{type:Boolean,default:!1},project:{}},emits:["changeChecked"],setup(t,{emit:s}){const l=s,o=z(t,"project"),{t:n}=E(),c=U((()=>{const e={text:n("Public.Status.Abnormal"),type:"warning"};switch(o.value.run_status){case"running":e.text=n("Public.Status.Running"),e.type="success";break;case"exited":e.text=n("Public.Status.Stopped"),e.type="error"}return e})),r=e=>{l("changeChecked",e,o.value.name)},i=async t=>{var s;t!==o.value.remark&&(await(s={name:o.value.name,remark:t,path:o.value.path},a.post("/mod/docker/com/edit_remark",s,{requestOptions:{loading:e.global.t("Docker.api.index_54"),successMessage:!0}})),o.value.remark=t)};return(e,t)=>{const a=W,s=G;return j(),y("div",{class:I(["menu-item",{active:e.active}])},[J(a,{checked:e.checked,onClick:O((()=>!1),["stop"]),"onUpdate:checked":r},null,8,["checked"]),J(s,{class:"ml-16px mr-10px",size:"small",type:N(c).type},{default:V((()=>[B($(N(c).text),1)])),_:1},8,["type"]),P("div",me,[P("div",_e,$(N(o).name),1),e.active||N(o).remark?(j(),q(de,{key:0,value:N(o).remark,class:"mt-2px",blur:i},null,8,["value"])):H("",!0)])],2)}}}),[["__scopeId","data-v-fcfea68c"]]),fe={class:"flex items-center p-16px"},ke=w({__name:"menu-list-batch",props:{value:{default:()=>[]},valueModifiers:{}},emits:["update:value"],setup(e){const{t:t}=E(),{projectList:a,sendSocket:s}=ie(),n=M(e,"value"),c=U({get:()=>n.value.length>0&&n.value.length===a.value.length,set(e){n.value=e?a.value.map((e=>e.name)):[]}}),r=U((()=>0===a.value.length)),i=U((()=>n.value.length>0&&n.value.length<a.value.length)),u=U((()=>0===n.value.length)),p=()=>{_({title:t("Docker.ComposeNew.index_5"),content:t("Docker.ComposeNew.index_6",[n.value.length]),onConfirm:({hide:e})=>(d(e),!1)})},d=e=>{const{close:c}=l.loading(t("Docker.ComposeNew.index_7")),r=[],i=a.value.filter((e=>n.value.includes(e.name))).map((e=>({project_name:e.name,path:e.path})));s({def_name:"batch_delete",mod_name:"docker",project_list:i,sub_mod_name:"com",ws_callback:"batch_delete"},{action:"batch_delete",callback:(a,s)=>{const l=JSON.parse(s.data),{data:n}=l;o(n)&&r.push({project_name:n.project_name,batchStatus:n.status?"success":"error",reqMsg:n.status?t("Docker.ComposeNew.index_11"):t("Docker.ComposeNew.index_8")}),-1===n&&(c(),e(),m({title:t("Docker.ComposeNew.index_9"),width:440,footer:!0,component:le,data:{title:t("Docker.ComposeNew.index_5"),data:r,status:"done",columns:[{key:"project_name",title:t("Docker.ComposeNew.index_10"),ellipsis:{tooltip:{width:"trigger"}}}]}}))}})};return(e,t)=>{const a=W,s=Y;return j(),y("div",fe,[J(a,{checked:N(c),"onUpdate:checked":t[0]||(t[0]=e=>A(c)?c.value=e:null),disabled:N(r),indeterminate:N(i)},null,8,["checked","disabled","indeterminate"]),J(s,{type:"primary",class:"ml-16px",disabled:N(u),onClick:p},{default:V((()=>[B($(e.$t("Docker.ComposeNew.index_4")),1)])),_:1},8,["disabled"])])}}}),xe={class:"project-list"},he={key:1,class:"flex-center h-280px"},ge=s(w({__name:"menu-list",setup(e){const{timestamp:t,loading:a,projectActive:s,projectList:l,refreshCompose:o}=ie(),c=C([]),r=e=>{for(const t of c.value)if(t===e)return!0;return!1},i=(e,t)=>{e?c.value.push(t):c.value=c.value.filter((e=>e!==t))};return T((()=>t.value),(()=>{c.value=[]})),(e,t)=>{const u=Z,p=n;return N(l).length>0?(j(),y(K,{key:0},[P("div",xe,[(j(!0),y(K,null,X(N(l),((e,t)=>(j(),q(ve,{key:e.id,project:e,active:t===N(s),checked:r(e.name),onClick:e=>(e=>{s.value=e,o()})(t),onChangeChecked:i},null,8,["project","active","checked","onClick"])))),128))]),J(ke,{value:N(c),"onUpdate:value":t[0]||(t[0]=e=>A(c)?c.value=e:null)},null,8,["value"])],64)):(j(),y("div",he,[J(p,{show:N(a)},{default:V((()=>[J(u)])),_:1},8,["show"])]))}}}),[["__scopeId","data-v-6a0dfdcf"]]),we={class:"p-16px"},Ce={class:"mb-12px"},be=w({__name:"menu",setup(e){const{t:a}=E(),{projectList:s,projectListAll:l,sendSocket:o,refreshCompose:n}=ie(),r=C(""),i=()=>{ue({send:o,refresh:n})},u=()=>{m({title:a("Docker.ComposeNew.index_2"),width:1e3,minHeight:200,component:g((()=>t((()=>import("./index171.js?v=1753954525509")),__vite__mapDeps([25,6,2,3,4,5,7,8,9,26,27,28,29,30]))))})},p=e=>{s.value=l.value.filter((t=>t.name.includes(e)))};return(e,t)=>{const a=Y,s=c,l=te,o=ee;return j(),q(o,{class:"w-260px h-full mr-16px"},{default:V((()=>[P("div",we,[P("div",Ce,[J(a,{type:"primary",onClick:i},{default:V((()=>[B($(e.$t("Docker.ComposeNew.index_1")),1)])),_:1}),J(a,{class:"ml-12px",onClick:u},{default:V((()=>[B($(e.$t("Docker.ComposeNew.index_2")),1)])),_:1})]),J(l,{value:N(r),"onUpdate:value":[t[0]||(t[0]=e=>A(r)?r.value=e:null),p],placeholder:e.$t("Docker.ComposeNew.index_3")},{prefix:V((()=>[J(s,{name:"search",size:"16",color:"#999"})])),_:1},8,["value","placeholder"])]),J(ge)])),_:1})}}}),je={class:"flex items-center p-16px"},ye={class:"max-w-500px mr-40px"},De={class:"mb-12px text-18px truncate"},Se={class:"flex gap-10px text-desc"},Ne=s(w({__name:"main-status",setup(e){const{t:t}=E(),{currentProject:a,projectActive:s,setProjectStatus:n,refreshCompose:c}=ie(),i=()=>{_({title:t("Docker.ComposeNew.index_17",[a.value.name]),content:t("Docker.ComposeNew.index_18"),onConfirm:()=>{pe(a.value.name,{status:"start",setProjectStatus:n})}})},u=()=>{_({title:t("Docker.ComposeNew.index_19",[a.value.name]),content:t("Docker.ComposeNew.index_20"),onConfirm:()=>{pe(a.value.name,{status:"stop",setProjectStatus:n})}})},p=()=>{_({title:t("Docker.ComposeNew.index_21",[a.value.name]),content:t("Docker.ComposeNew.index_22"),onConfirm:()=>{pe(a.value.name,{status:"restart",setProjectStatus:n})}})},d=()=>{_({title:t("Docker.ComposeNew.index_23",[a.value.name]),content:t("Docker.ComposeNew.index_24"),onConfirm:()=>{pe(a.value.name,{status:"update",setProjectStatus:n})}})},m=()=>{_({title:t("Docker.ComposeNew.index_25",[a.value.name]),content:t("Docker.ComposeNew.index_26",[a.value.name]),onConfirm:({hide:e})=>{const{close:a}=l.loading(t("Docker.ComposeNew.index_27"));return n("delete",(t=>{o(t)&&-1===t.data&&(a(),t.status?(e(),s.value=0,c(),l.success(t.msg)):l.error(t.msg))})),!1}})};return(e,t)=>{const s=Y,l=ae,o=ee;return j(),q(o,null,{default:V((()=>[P("div",je,[P("div",ye,[P("div",De,$(N(a).name),1),P("div",Se,[P("span",null,$(e.$t("Docker.ComposeNew.index_14",[N(r)(N(a).time)])),1),P("span",null,$(e.$t("Docker.ComposeNew.index_15",[N(a).container_count])),1)])]),J(l,null,{default:V((()=>["exited"===N(a).run_status?(j(),q(s,{key:0,onClick:i},{default:V((()=>[B($(e.$t("Public.Status.Start")),1)])),_:1})):H("",!0),"running"===N(a).run_status?(j(),q(s,{key:1,onClick:u},{default:V((()=>[B($(e.$t("Public.Status.Stop")),1)])),_:1})):H("",!0),"running"===N(a).run_status?(j(),q(s,{key:2,onClick:p},{default:V((()=>[B($(e.$t("Public.Status.Restart")),1)])),_:1})):H("",!0),J(s,{onClick:d},{default:V((()=>[B($(e.$t("Docker.ComposeNew.index_16")),1)])),_:1}),J(s,{class:"delete-btn",onClick:m},{default:V((()=>[B($(e.$t("Public.Btn.Delete")),1)])),_:1})])),_:1})])])),_:1})}}}),[["__scopeId","data-v-f16c3126"]]),Pe=w({__name:"main-container-status",props:{item:{}},emits:["select"],setup(e,{emit:t}){const a=t,s=z(e,"item"),{t:l}=E(),o=U((()=>{const e={text:l("Public.Status.Abnormal"),type:"warning"};switch(s.value.State){case"running":e.text=l("Public.Status.Running"),e.type="primary";break;case"exited":e.text=l("Public.Status.Stopped"),e.type="error"}return e})),n=U((()=>{switch(s.value.State){case"running":return[{label:l("Public.Status.Restart"),key:"restart"},{label:l("Public.Status.Stop"),key:"stop"},{label:l("Public.Status.Kill"),key:"kill"}];case"exited":return[{label:l("Public.Status.Start"),key:"start"}];default:return[{label:l("Public.Status.Restart"),key:"restart"},{label:l("Public.Status.Kill"),key:"kill"}]}})),c=e=>{a("select",e,s.value)};return(e,t)=>{const a=G,s=se;return j(),q(s,{options:N(n),onSelect:c},{default:V((()=>[J(a,{type:N(o).type,size:"small",class:"cursor-pointer"},{default:V((()=>[B($(N(o).text),1)])),_:1},8,["type"])])),_:1},8,["options"])}}}),$e=w({__name:"index",props:{id:{}},setup(e){const t=z(e,"id"),s=C("");return(async()=>{const{message:e}=await(l={container_id:t.value},a.post("/mod/docker/com/get_project_container_logs",l));var l;o(e)&&(s.value=e.result)})(),(e,t)=>{const a=ne;return j(),q(a,{class:"h-480px",lang:"log","font-size":12,content:N(s)},null,8,["content"])}}}),Ie={class:"h-full overflow-auto"},Oe={key:0,class:"container-list"},Le={class:"container-info"},Ae={class:"flex items-center flex-1"},Re={class:"container-name"},ze={class:"ml-4px"},Ee={class:"ml-4px"},Ue=["title"],Je={key:0,class:"container-port"},Ve={key:1,class:"flex-center h-full"},Be=s(w({__name:"main-container",setup(e){const{t:t}=E(),{timestamp:a,currentProject:s,sendSocket:l}=ie(),o=C([]),r=async(e,t)=>{await u({id:t.ID,status:e})},{loading:p,setLoading:d}=v(),_=()=>{d(!0),l({mod_name:"docker",sub_mod_name:"com",def_name:"get_project_ps",path:s.value.path,ws_callback:"get_project_ps"},{action:"get_project_ps",callback:(e,t)=>{d(!1);const a=JSON.parse(t.data),{data:s}=a;i(s)&&(s.forEach((e=>{e.ports=e.Ports.split(",").filter((e=>""!==e))})),o.value=s)}})};return T((()=>s.value.path),(()=>{o.value=[]})),T((()=>a.value),(e=>{0!==e&&_()})),_(),(e,a)=>{const s=c,l=Y,i=G,u=Z,d=n,_=ee;return j(),q(_,{class:"flex-1",title:e.$t("Docker.ComposeNew.index_29"),"content-style":{overflow:"hidden"}},{default:V((()=>[P("div",Ie,[J(d,{show:N(p),class:"h-full"},{default:V((()=>[N(o).length>0?(j(),y("div",Oe,[(j(!0),y(K,null,X(N(o),(a=>(j(),y("div",{key:a.ID,class:"container-item"},[P("div",Le,[P("div",Ae,[P("div",Re,$(a.Name),1),J(Pe,{item:a,onSelect:r},null,8,["item"])]),J(l,{onClick:e=>{var t;oe({id:(t=a).ID,status:t.State})}},{default:V((()=>[J(s,{name:"common-terminal",size:"13"}),P("span",ze,$(e.$t("Docker.ComposeNew.index_30")),1)])),_:2},1032,["onClick"]),J(l,{class:"ml-10px",onClick:e=>{var s;m({title:t("Docker.ComposeNew.index_32",[(s=a).Name]),width:720,data:{id:s.ID},component:$e})}},{default:V((()=>[J(s,{name:"base-record",size:"15"}),P("span",Ee,$(e.$t("Docker.ComposeNew.index_31")),1)])),_:2},1032,["onClick"])]),P("div",{class:"container-desc",title:a.ID},$(a.ID),9,Ue),a.ports&&a.ports.length>0?(j(),y("div",Je,[(j(!0),y(K,null,X(a.ports,(e=>(j(),q(i,{key:e,size:"small"},{default:V((()=>[B($(e),1)])),_:2},1024)))),128))])):H("",!0)])))),128))])):(j(),y("div",Ve,[J(u)]))])),_:1},8,["show"])])])),_:1},8,["title"])}}}),[["__scopeId","data-v-7c502217"]]),qe={class:"p-16px h-full"},He=w({__name:"main-logs",setup(e){const{timestamp:t,currentProject:a,sendSocket:s}=ie(),l=C(""),{loading:o,setLoading:n}=v(),c=()=>{n(!0),l.value="",s({mod_name:"docker",sub_mod_name:"com",def_name:"get_logs",path:a.value.path,ws_callback:"get_logs"},{action:"get_logs",callback:(e,t)=>{if(n(!1),t.data){const e=JSON.parse(t.data);l.value+=e.msg+"\n"}}})};return T((()=>t.value),(e=>{0!==e&&c()})),c(),(e,t)=>{const a=ne,s=ee;return j(),q(s,{class:"h-55%",title:e.$t("Docker.ComposeNew.index_28"),"content-style":{overflow:"hidden"}},{default:V((()=>[P("div",qe,[J(a,{class:"h-full",lang:"log",rows:80,"font-size":12,loading:N(o),content:N(l)},null,8,["loading","content"])])])),_:1},8,["title"])}}}),Me={class:"h-full p-16px"},Te={class:"flex items-center mb-10px"},Ke=["title"],Xe={class:"mt-16px"},Fe=s(w({__name:"main-config",setup(e){const t=F(),{t:a}=E(),{timestamp:s,currentProject:n,sendSocket:c,setProjectStatus:r}=ie(),i=C(""),u=C(""),d=()=>{p("Path",n.value.path),t.push("/files")},m=()=>{c({mod_name:"docker",sub_mod_name:"com",def_name:"get_config",path:n.value.path,ws_callback:"get_config"},{action:"get_config",callback:(e,t)=>{const a=JSON.parse(t.data).data;o(a)&&(i.value=a.config,u.value=a.env)}})};T((()=>s.value),(e=>{0!==e&&m()}));const v=()=>{_({title:a("Docker.ComposeNew.index_35"),content:a("Docker.ComposeNew.index_36"),onConfirm:({hide:e})=>{const{close:t}=l.loading(a("Docker.ComposeNew.index_37"));return c({mod_name:"docker",sub_mod_name:"com",def_name:"save_config",config:i.value,env:u.value,path:n.value.path,ws_callback:"save_config"},{action:"save_config",callback:(a,s)=>{t();const o=JSON.parse(s.data);o.status?(e(),pe(n.value.name,{status:"restart",setProjectStatus:r})):l.error(o.msg)}}),!1}})};return m(),(e,t)=>{const a=Y,s=ee;return j(),q(s,{title:e.$t("Docker.ComposeNew.index_33"),class:"w-42%"},{default:V((()=>[P("div",Me,[P("div",Te,[t[2]||(t[2]=P("span",{class:"text-14px mr-12px"},"compose.yaml",-1)),P("a",{href:"javascript:;",title:N(n).path,class:"jump-link",onClick:d},$(e.$t("Docker.ComposeNew.index_34")),9,Ke)]),J(ce,{value:N(i),"onUpdate:value":t[0]||(t[0]=e=>A(i)?i.value=e:null),"show-tips":!1,lang:"yaml",style:{height:"calc(100% - 370px)"}},null,8,["value"]),t[3]||(t[3]=P("div",{class:"flex items-center mt-16px mb-10px"},[P("span",{class:"text-14px"},".env")],-1)),J(ce,{value:N(u),"onUpdate:value":t[1]||(t[1]=e=>A(u)?u.value=e:null),height:"200","show-tips":!1},null,8,["value"]),P("div",Xe,[J(a,{type:"primary",onClick:v},{default:V((()=>[B($(e.$t("Public.Btn.Save")),1)])),_:1})])])])),_:1},8,["title"])}}}),[["__scopeId","data-v-0995c1e9"]]),Qe={class:"flex-1 flex flex-col gap-16px overflow-hidden"},We={class:"flex-1 flex gap-16px overflow-hidden"},Ge={class:"flex-1 flex flex-col gap-16px overflow-hidden"},Ye={class:"flex-center flex-col h-full"},Ze=s(w({__name:"main",setup(e){const{loading:t,projectList:a,sendSocket:s,refreshCompose:l}=ie(),o=()=>{ue({send:s,refresh:l})};return(e,s)=>{const l=Z,c=d,r=n,i=ee;return j(),y("div",Qe,[N(a).length>0?(j(),y(K,{key:0},[J(Ne),P("div",We,[P("div",Ge,[J(Be),J(He)]),J(Fe)])],64)):(j(),q(i,{key:1,class:"h-full"},{default:V((()=>[J(r,{show:N(t),class:"h-full"},{default:V((()=>[P("div",Ye,[J(l),J(c,{class:"mt-16px",onClick:o},{default:V((()=>[B($(e.$t("Docker.ComposeNew.index_13")),1)])),_:1})])])),_:1},8,["show"])])),_:1}))])}}}),[["__scopeId","data-v-540e8f70"]]),et=w({__name:"index",setup(e){const t=C(null),{height:a}=f(t),{send:s,close:l,open:o}=k("/ws_modsoc"),n=C([]),c=C([]),r=C(0),u=U((()=>n.value[r.value])),p=C(!1),d=C(0);let m=!1;const _=e=>{m=e},v=()=>{p.value=!0,s({mod_name:"docker",sub_mod_name:"com",def_name:"get_project_list",ws_callback:"get_project_list"},{action:"get_project_list",callback:(e,t)=>{p.value=!1;const a=JSON.parse(t.data);i(a.data)&&(n.value=a.data,c.value=a.data,m&&(d.value=Date.now(),_(!1)))}})};return v(),h(re,{loading:p,timestamp:d,projectList:n,projectListAll:c,projectActive:r,currentProject:u,sendSocket:s,setProjectStatus:(e,t)=>{s({mod_name:"docker",sub_mod_name:"com",def_name:e,path:u.value.path,project_name:u.value.name,ws_callback:e},{action:e,callback:(e,a)=>{const s=JSON.parse(a.data);t(s)}})},refreshCompose:()=>{l(),o(),_(!0),v()}}),(e,s)=>(j(),y("div",{ref_key:"composeRef",ref:t,class:"flex",style:Q({height:N(a)})},[J(be),J(Ze)],4))}});export{et as default};
