import{d as u}from"./vuedraggable.umd-BnrkY0Lp.js";import{z as f,f as g,c as h}from"./entry/index-CVxmJzUk-1713257085139.js";import{d as C,r as I,a7 as r,Z as $,_ as b,k as d,a9 as v,$ as _,G as k,a0 as y,ac as A,a1 as S}from"./vue-COhTiP8A.js";import"./antd-5AEjVWAR.js";const D=C({name:"CollapseItem",components:{draggable:u,Icon:f},props:{list:{type:[Array],default:()=>[]},handleListPush:{type:Function,default:null}},setup(e,{emit:o}){const{prefixCls:s}=g("form-design-collapse-item"),n=I({});return{prefixCls:s,state:n,handleStart:(t,a)=>{o("start",a[t.oldIndex].component)},handleAdd:t=>{},cloneItem:t=>e.handleListPush(t)}}}),B=["onDragstart","onClick"];function N(e,o,s,n,i,c){const l=r("Icon"),t=r("draggable");return $(),b("div",{class:S(e.prefixCls)},[d(t,A({tag:"ul","model-value":e.list},{group:{name:"form-draggable",pull:"clone",put:!1},sort:!1,clone:e.cloneItem,animation:180,ghostClass:"moving"},{"item-key":"type",onStart:o[0]||(o[0]=a=>e.handleStart(a,e.list)),onAdd:e.handleAdd}),{item:v(({element:a,index:p})=>[_("li",{class:"bs-box text-ellipsis",onDragstart:m=>e.$emit("add-attrs",e.list,p),onClick:m=>e.$emit("handle-list-push",a)},[d(l,{icon:a.icon},null,8,["icon"]),k(" "+y(a.label),1)],40,B)]),_:1},16,["model-value","onAdd"])],2)}const w=h(D,[["render",N],["__scopeId","data-v-9ac1f6bb"]]);export{w as default};