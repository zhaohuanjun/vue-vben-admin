import{_ as I}from"./BasicTable.vue_vue_type_script_setup_true_lang-DjcSjXOl.js";import"./TableImg.vue_vue_type_style_index_0_lang-EBjD4Zt_.js";import{a as R}from"./componentMap-B1bvaMGz.js";import{u as T}from"./useTable-CXa3UFcV.js";import{g as F}from"./system-x5S15Xlt.js";import{P as M}from"./index-DfVVI5KB.js";import{_ as V}from"./DeptTree.vue_vue_type_script_setup_true_lang-Cx1Bwh_9.js";import{b as $}from"./index-dGbg62e7.js";import{_ as E}from"./AccountModal.vue_vue_type_script_setup_true_lang-DbcCa7Sk.js";import{c as N,s as A}from"./account.data-Db2HpwTo.js";import{aO as B}from"./entry/index-CVxmJzUk-1713257085139.js";import{d as D,r as G,a7 as H,Z as l,a8 as p,a9 as e,k as o,u as n,G as d,ab as O}from"./vue-COhTiP8A.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-kUr74D1U.js";import"./FormItem.vue_vue_type_script_lang-D5sSoIqW.js";import"./helper-C_LYGFIk.js";import"./antd-5AEjVWAR.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BkrzYP5o.js";import"./useForm-BDpUfa4Q.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-BRUyZDTw.js";import"./useFormItem-CieOCyoi.js";import"./onMountedOrActivated-GpUdBAv_.js";import"./useWindowSizeFn-D_jTp3Dp.js";import"./useSortable-DnEvXb39.js";import"./download-BznJ7Qxt.js";import"./base64Conver-bBv-IO2K.js";import"./index-BN0qa80J.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-yQPIyucG.js";import"./copyTextToClipboard-D-nRS8bn.js";import"./index-CgdG0PB5.js";import"./index-BPN7-Qvk.js";import"./useContentViewHeight-CK7kW8GV.js";import"./index-DiaG62-R.js";import"./useContextMenu-vYnwa3RZ.js";const kt=D({name:"AccountManagement",__name:"index",setup(P){const u=B(),[f,{openModal:a}]=$(),s=G({}),[_,{reload:m,updateTableDataRecord:h,getSearchInfo:U}]=T({title:"账号列表",api:F,rowKey:"id",columns:N,formConfig:{labelWidth:120,schemas:A,autoSubmitOnEnter:!0},useSearchForm:!0,showTableSetting:!0,bordered:!0,handleSearchInfoFn(t){return t},actionColumn:{width:120,title:"操作",dataIndex:"action"}});function g(){a(!0,{isUpdate:!1})}function b(t){a(!0,{record:t,isUpdate:!0})}function C(t){}function x(){}function y({isUpdate:t,values:i}){t?h(i.id,i):m()}function S(t=""){s.deptId=t,m()}function k(t){u("/system/account_detail/"+t.id)}return(t,i)=>{const c=H("a-button");return l(),p(n(M),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:e(()=>[o(V,{class:"w-1/4 xl:w-1/5",onSelect:S}),o(n(I),{onRegister:n(_),class:"w-3/4 xl:w-4/5",searchInfo:s},{toolbar:e(()=>[o(c,{type:"primary",onClick:g},{default:e(()=>[d("新增账号")]),_:1}),o(c,{type:"primary",onClick:x},{default:e(()=>[d("导出账号")]),_:1})]),bodyCell:e(({column:w,record:r})=>[w.key==="action"?(l(),p(n(R),{key:0,actions:[{icon:"clarity:info-standard-line",tooltip:"查看用户详情",onClick:k.bind(null,r)},{icon:"clarity:note-edit-line",tooltip:"编辑用户资料",onClick:b.bind(null,r)},{icon:"ant-design:delete-outlined",color:"error",tooltip:"删除此账号",popConfirm:{title:"是否确认删除",placement:"left",confirm:C.bind(null,r)}}]},null,8,["actions"])):O("",!0)]),_:1},8,["onRegister","searchInfo"]),o(E,{onRegister:n(f),onSuccess:y},null,8,["onRegister"])]),_:1})}}});export{kt as default};
