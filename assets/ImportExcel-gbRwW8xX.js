import{I as d}from"./index-DLCJgViG.js";import{_}from"./BasicTable.vue_vue_type_script_setup_true_lang-DjcSjXOl.js";import"./TableImg.vue_vue_type_style_index_0_lang-EBjD4Zt_.js";import"./componentMap-B1bvaMGz.js";import{P as x}from"./index-DfVVI5KB.js";import{d as h,f as S,a7 as k,Z as a,a8 as l,a9 as m,k as u,u as s,G as v,_ as D,F as E,aa as I}from"./vue-COhTiP8A.js";import"./entry/index-CVxmJzUk-1713257085139.js";import"./antd-5AEjVWAR.js";import"./index-dGbg62e7.js";import"./useWindowSizeFn-D_jTp3Dp.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-kUr74D1U.js";import"./FormItem.vue_vue_type_script_lang-D5sSoIqW.js";import"./helper-C_LYGFIk.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BkrzYP5o.js";import"./useForm-BDpUfa4Q.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-BRUyZDTw.js";import"./useFormItem-CieOCyoi.js";import"./onMountedOrActivated-GpUdBAv_.js";import"./useSortable-DnEvXb39.js";import"./download-BznJ7Qxt.js";import"./base64Conver-bBv-IO2K.js";import"./index-BN0qa80J.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-yQPIyucG.js";import"./copyTextToClipboard-D-nRS8bn.js";import"./index-CgdG0PB5.js";import"./index-BPN7-Qvk.js";import"./useContentViewHeight-CK7kW8GV.js";const tt=h({__name:"ImportExcel",setup(Y){const o=S([]);function f(p){o.value=[];for(const i of p){const{header:e,results:t,meta:{sheetName:r}}=i,c=[];for(const n of e)c.push({title:n,dataIndex:n});o.value.push({title:r,dataSource:t,columns:c})}}return(p,i)=>{const e=k("a-button");return a(),l(s(x),{title:"excel数据导入示例"},{default:m(()=>[u(s(d),{onSuccess:f,dateFormat:"YYYY-MM-DD"},{default:m(()=>[u(e,{class:"m-3"},{default:m(()=>[v(" 导入Excel ")]),_:1})]),_:1}),(a(!0),D(E,null,I(o.value,(t,r)=>(a(),l(s(_),{key:r,title:t.title,columns:t.columns,dataSource:t.dataSource},null,8,["title","columns","dataSource"]))),128))]),_:1})}}});export{tt as default};