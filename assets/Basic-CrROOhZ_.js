import{_ as b}from"./BasicTable.vue_vue_type_script_setup_true_lang-DjcSjXOl.js";import"./TableImg.vue_vue_type_style_index_0_lang-EBjD4Zt_.js";import"./componentMap-B1bvaMGz.js";import{getBasicData as h,getBasicColumns as k}from"./tableData-BUwRD-hb.js";import{d as B,f as t,a7 as S,Z as z,_ as x,k as e,a9 as o,G as l,a0 as s,u as m}from"./vue-COhTiP8A.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-kUr74D1U.js";import"./FormItem.vue_vue_type_script_lang-D5sSoIqW.js";import"./entry/index-CVxmJzUk-1713257085139.js";import"./antd-5AEjVWAR.js";import"./helper-C_LYGFIk.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BkrzYP5o.js";import"./index-dGbg62e7.js";import"./useWindowSizeFn-D_jTp3Dp.js";import"./useForm-BDpUfa4Q.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-BRUyZDTw.js";import"./useFormItem-CieOCyoi.js";import"./onMountedOrActivated-GpUdBAv_.js";import"./useSortable-DnEvXb39.js";import"./download-BznJ7Qxt.js";import"./base64Conver-bBv-IO2K.js";import"./index-BN0qa80J.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-yQPIyucG.js";import"./copyTextToClipboard-D-nRS8bn.js";import"./index-CgdG0PB5.js";import"./index-BPN7-Qvk.js";import"./select-DRbNxclZ.js";const R={class:"p-4"},it=B({__name:"Basic",setup(T){const a=t(!1),p=t(!1),i=t(!0),r=t(!0),u=t(!1),c=k(),d=h();function g(){a.value=!a.value}function f(){i.value=!i.value}function _(){p.value=!0,setTimeout(()=>{p.value=!1,u.value={pageSize:20}},3e3)}function v(){r.value=!r.value}function C(y){}return(y,w)=>{const n=S("a-button");return z(),x("div",R,[e(m(b),{title:"基础示例",titleHelpMessage:"温馨提醒",columns:m(c),dataSource:m(d),canResize:a.value,loading:p.value,striped:i.value,bordered:r.value,showTableSetting:"",pagination:u.value,onColumnsChange:C},{toolbar:o(()=>[e(n,{type:"primary",onClick:g},{default:o(()=>[l(s(a.value?"取消自适应":"自适应高度"),1)]),_:1}),e(n,{type:"primary",onClick:v},{default:o(()=>[l(s(r.value?"隐藏边框":"显示边框"),1)]),_:1}),e(n,{type:"primary",onClick:_},{default:o(()=>[l(" 开启loading ")]),_:1}),e(n,{type:"primary",onClick:f},{default:o(()=>[l(s(i.value?"隐藏斑马纹":"显示斑马纹"),1)]),_:1})]),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination"])])}}});export{it as default};