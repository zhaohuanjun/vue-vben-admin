import{R as _,l as S,aZ as t,c as y}from"./entry/index-CVxmJzUk-1713257085139.js";import{P as R}from"./index-DfVVI5KB.js";import{_ as g}from"./CurrentPermissionMode.vue_vue_type_script_setup_true_lang-Cp17rYhA.js";import{d as x,c as u,a7 as T,Z as v,a8 as E,a9 as a,k as s,$ as l,G as n,a0 as i,u as e}from"./vue-COhTiP8A.js";import{at as k,Y as C}from"./antd-5AEjVWAR.js";import"./useContentViewHeight-CK7kW8GV.js";import"./useWindowSizeFn-D_jTp3Dp.js";import"./onMountedOrActivated-GpUdBAv_.js";const P={class:"mt-4"},B=x({__name:"index",setup(U){const{changeRole:p}=_(),r=S(),m=u(()=>r.getRoleList.includes(t.SUPER)),d=u(()=>r.getRoleList.includes(t.TEST));return($,o)=>{const c=T("a-button");return v(),E(e(R),{title:"前端权限示例",contentBackground:"",contentClass:"p-4",content:"由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口"},{default:a(()=>[s(g),l("p",null,[n(" 当前角色: "),l("a",null,i(e(r).getRoleList),1)]),s(e(k),{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),l("div",P,[n(" 权限切换(请先切换权限模式为前端角色权限模式): "),s(e(C),null,{default:a(()=>[s(c,{onClick:o[0]||(o[0]=f=>e(p)(e(t).SUPER)),type:m.value?"primary":"default"},{default:a(()=>[n(i(e(t).SUPER),1)]),_:1},8,["type"]),s(c,{onClick:o[1]||(o[1]=f=>e(p)(e(t).TEST)),type:d.value?"primary":"default"},{default:a(()=>[n(i(e(t).TEST),1)]),_:1},8,["type"])]),_:1})])]),_:1})}}}),D=y(B,[["__scopeId","data-v-b9f581f7"]]);export{D as default};
