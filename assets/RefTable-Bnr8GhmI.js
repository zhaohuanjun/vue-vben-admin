import{_ as y}from"./BasicTable.vue_vue_type_script_setup_true_lang-DjcSjXOl.js";import"./TableImg.vue_vue_type_style_index_0_lang-EBjD4Zt_.js";import"./componentMap-B1bvaMGz.js";import{getBasicColumns as r,getBasicShortColumns as x}from"./tableData-BUwRD-hb.js";import{a as T}from"./entry/index-CVxmJzUk-1713257085139.js";import{d as L}from"./table-D855yrOu.js";import{d as B,f as K,a7 as P,Z as v,_ as A,$ as m,k as e,a9 as o,G as n,u as a}from"./vue-COhTiP8A.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-kUr74D1U.js";import"./FormItem.vue_vue_type_script_lang-D5sSoIqW.js";import"./helper-C_LYGFIk.js";import"./antd-5AEjVWAR.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BkrzYP5o.js";import"./index-dGbg62e7.js";import"./useWindowSizeFn-D_jTp3Dp.js";import"./useForm-BDpUfa4Q.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-BRUyZDTw.js";import"./useFormItem-CieOCyoi.js";import"./onMountedOrActivated-GpUdBAv_.js";import"./useSortable-DnEvXb39.js";import"./download-BznJ7Qxt.js";import"./base64Conver-bBv-IO2K.js";import"./index-BN0qa80J.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-yQPIyucG.js";import"./copyTextToClipboard-D-nRS8bn.js";import"./index-CgdG0PB5.js";import"./index-BPN7-Qvk.js";import"./select-DRbNxclZ.js";const M={class:"p-4 flex flex-col"},N={class:"mb-4"},V={class:"mb-4"},pe=B({__name:"RefTable",setup(D){const l=K(null),{createMessage:s}=T(),f=r();function i(){const c=a(l);if(!c)throw new Error("tableAction is null");return c}function u(){i().setLoading(!0),setTimeout(()=>{i().setLoading(!1)},1e3)}function p(){i().setProps({columns:x(),rowSelection:{type:"checkbox"}})}function d(){i().setProps({columns:r(),rowSelection:{type:"checkbox"}}),i().reload({page:1})}function _(){s.info("请在控制台查看！")}function g(){s.info("请在控制台查看！")}function C(){s.info("请在控制台查看！")}function k(){s.info("请在控制台查看！")}function b(){i().setPagination({current:2}),i().reload()}function w(){s.info("请在控制台查看！")}function h(){s.info("请在控制台查看！")}function R(){i().setSelectedRowKeys(["0","1","2"])}function S(){i().clearSelectedRowKeys()}return(c,E)=>{const t=P("a-button");return v(),A("div",M,[m("div",N,[e(t,{class:"mr-2",onClick:d},{default:o(()=>[n(" 还原 ")]),_:1}),e(t,{class:"mr-2",onClick:u},{default:o(()=>[n(" 开启loading ")]),_:1}),e(t,{class:"mr-2",onClick:p},{default:o(()=>[n(" 更改Columns ")]),_:1}),e(t,{class:"mr-2",onClick:_},{default:o(()=>[n(" 获取Columns ")]),_:1}),e(t,{class:"mr-2",onClick:g},{default:o(()=>[n(" 获取表格数据 ")]),_:1}),e(t,{class:"mr-2",onClick:C},{default:o(()=>[n(" 获取接口原始数据 ")]),_:1}),e(t,{class:"mr-2",onClick:b},{default:o(()=>[n(" 跳转到第2页 ")]),_:1})]),m("div",V,[e(t,{class:"mr-2",onClick:w},{default:o(()=>[n(" 获取选中行 ")]),_:1}),e(t,{class:"mr-2",onClick:h},{default:o(()=>[n(" 获取选中行Key ")]),_:1}),e(t,{class:"mr-2",onClick:R},{default:o(()=>[n(" 设置选中行 ")]),_:1}),e(t,{class:"mr-2",onClick:S},{default:o(()=>[n(" 清空选中行 ")]),_:1}),e(t,{class:"mr-2",onClick:k},{default:o(()=>[n(" 获取分页信息 ")]),_:1})]),e(a(y),{canResize:!0,title:"RefTable示例",titleHelpMessage:"使用Ref调用表格内方法",ref_key:"tableRef",ref:l,api:a(L),columns:a(f),rowKey:"id",rowSelection:{type:"checkbox"},showSelectionBar:""},null,8,["api","columns"])])}}});export{pe as default};
