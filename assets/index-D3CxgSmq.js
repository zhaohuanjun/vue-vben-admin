import{_ as h}from"./BasicTable.vue_vue_type_script_setup_true_lang-DjcSjXOl.js";import"./TableImg.vue_vue_type_style_index_0_lang-EBjD4Zt_.js";import{a as b}from"./componentMap-B1bvaMGz.js";import{u as g}from"./useTable-CXa3UFcV.js";import{c as C}from"./system-x5S15Xlt.js";import{u as k}from"./index-BxZVPq4z.js";import{_ as x,c as w,s as y}from"./RoleDrawer.vue_vue_type_script_setup_true_lang-FQpKXP6S.js";import{d as R,a7 as S,Z as n,_ as B,k as o,a9 as r,G as D,a8 as T,u as e,ab as v}from"./vue-COhTiP8A.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-kUr74D1U.js";import"./FormItem.vue_vue_type_script_lang-D5sSoIqW.js";import"./entry/index-CVxmJzUk-1713257085139.js";import"./antd-5AEjVWAR.js";import"./helper-C_LYGFIk.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BkrzYP5o.js";import"./index-dGbg62e7.js";import"./useWindowSizeFn-D_jTp3Dp.js";import"./useForm-BDpUfa4Q.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-BRUyZDTw.js";import"./useFormItem-CieOCyoi.js";import"./onMountedOrActivated-GpUdBAv_.js";import"./useSortable-DnEvXb39.js";import"./download-BznJ7Qxt.js";import"./base64Conver-bBv-IO2K.js";import"./index-BN0qa80J.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-yQPIyucG.js";import"./copyTextToClipboard-D-nRS8bn.js";import"./index-CgdG0PB5.js";import"./index-BPN7-Qvk.js";import"./index-DiaG62-R.js";import"./useContextMenu-vYnwa3RZ.js";const pe=R({name:"RoleManagement",__name:"index",setup(N){const[m,{openDrawer:i}]=k(),[s,{reload:l}]=g({title:"角色列表",api:C,columns:w,formConfig:{labelWidth:120,schemas:y},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",fixed:void 0}});function p(){i(!0,{isUpdate:!1})}function c(t){i(!0,{record:t,isUpdate:!0})}function u(t){}function d(){l()}return(t,V)=>{const f=S("a-button");return n(),B("div",null,[o(e(h),{onRegister:e(s)},{toolbar:r(()=>[o(f,{type:"primary",onClick:p},{default:r(()=>[D(" 新增角色 ")]),_:1})]),bodyCell:r(({column:_,record:a})=>[_.key==="action"?(n(),T(e(b),{key:0,actions:[{icon:"clarity:note-edit-line",onClick:c.bind(null,a)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",placement:"left",confirm:u.bind(null,a)}}]},null,8,["actions"])):v("",!0)]),_:1},8,["onRegister"]),o(x,{onRegister:e(m),onSuccess:d},null,8,["onRegister"])])}}});export{pe as default};
