import{aQ as d,w as p}from"./entry/index-CVxmJzUk-1713257085139.js";import{d as r,f as c,o as f,Z as o,_ as m,ae as _,a8 as k,a9 as s,k as x,u as n,$ as C,a0 as O}from"./vue-COhTiP8A.js";import{P as h}from"./index-DfVVI5KB.js";import"./antd-5AEjVWAR.js";import"./useContentViewHeight-CK7kW8GV.js";import"./useWindowSizeFn-D_jTp3Dp.js";import"./onMountedOrActivated-GpUdBAv_.js";const w=r({__name:"ClickOutSide",emits:["mounted","clickOutside"],setup(l,{emit:e}){const t=e,a=c(null);return d(a,()=>{t("clickOutside")}),f(()=>{t("mounted")}),(i,u)=>(o(),m("div",{ref_key:"wrap",ref:a},[_(i.$slots,"default")],512))}}),v=p(w),I=r({__name:"index",setup(l){const e=c("Click");function t(){e.value="Click Out Side"}function a(){e.value="Click Inner"}return(i,u)=>(o(),k(n(h),{title:"点内外部触发事件"},{default:s(()=>[x(n(v),{onClickOutside:t,class:"flex justify-center"},{default:s(()=>[C("div",{onClick:a,class:"flex items-center justify-center w-full h-300px border-10px bg-blue-500 text-white text-24px"},O(e.value),1)]),_:1})]),_:1}))}});export{I as default};
