var s=(u,m,i)=>new Promise((o,d)=>{var p=e=>{try{a(i.next(e))}catch(t){d(t)}},l=e=>{try{a(i.throw(e))}catch(t){d(t)}},a=e=>e.done?o(e.value):Promise.resolve(e.value).then(p,l);a((i=i.apply(u,m)).next())});import{_ as C}from"./BasicTable.vue_vue_type_script_setup_true_lang-DjcSjXOl.js";import"./TableImg.vue_vue_type_style_index_0_lang-EBjD4Zt_.js";import"./componentMap-B1bvaMGz.js";import{u as h}from"./useTable-CXa3UFcV.js";import{o as c}from"./select-DRbNxclZ.js";import{d as x}from"./table-D855yrOu.js";import{t as _}from"./tree-De_Eqd4O.js";import{a as w}from"./entry/index-CVxmJzUk-1713257085139.js";import{d as b,Z as I,_ as v,k as P,u as f,l as k}from"./vue-COhTiP8A.js";import{as as R}from"./antd-5AEjVWAR.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-kUr74D1U.js";import"./FormItem.vue_vue_type_script_lang-D5sSoIqW.js";import"./helper-C_LYGFIk.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BkrzYP5o.js";import"./index-dGbg62e7.js";import"./useWindowSizeFn-D_jTp3Dp.js";import"./useForm-BDpUfa4Q.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-BRUyZDTw.js";import"./useFormItem-CieOCyoi.js";import"./onMountedOrActivated-GpUdBAv_.js";import"./useSortable-DnEvXb39.js";import"./download-BznJ7Qxt.js";import"./base64Conver-bBv-IO2K.js";import"./index-BN0qa80J.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-yQPIyucG.js";import"./copyTextToClipboard-D-nRS8bn.js";import"./index-CgdG0PB5.js";import"./index-BPN7-Qvk.js";const E={class:"p-4"},ae=b({__name:"EditCellTable",setup(u){const m=[{title:"输入框",dataIndex:"name",edit:!0,editComponentProps:{prefix:"$"},width:200},{title:"默认输入状态",dataIndex:"name7",edit:!0,editable:!0,width:200},{title:"输入框校验",dataIndex:"name1",edit:!0,editRule:!0,width:200},{title:"输入框函数校验",dataIndex:"name2",edit:!0,editRule:e=>s(this,null,function*(){return e==="2"?"不能输入该值":""}),width:200},{title:"数字输入框",dataIndex:"id",edit:!0,editRule:!0,editComponent:"InputNumber",width:200,editComponentProps:()=>({max:100,min:0}),editRender:({text:e})=>k(R,{percent:Number(e)})},{title:"下拉框",dataIndex:"name3",edit:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"}]},width:200},{title:"远程下拉",dataIndex:"name4",edit:!0,editComponent:"ApiSelect",editComponentProps:{api:c,resultField:"list",labelField:"name",valueField:"id"},width:200},{title:"远程下拉树",dataIndex:"name8",edit:!0,editComponent:"ApiTreeSelect",editRule:!1,editComponentProps:{api:_,resultField:"list"},width:200},{title:"日期选择",dataIndex:"date",edit:!0,editComponent:"DatePicker",editComponentProps:{valueFormat:"YYYY-MM-DD",format:"YYYY-MM-DD"},width:200},{title:"时间选择",dataIndex:"time",edit:!0,editComponent:"TimePicker",editComponentProps:{valueFormat:"HH:mm",format:"HH:mm"},width:200},{title:"勾选框",dataIndex:"name5",edit:!0,editComponent:"Checkbox",editValueMap:e=>e?"是":"否",width:200},{title:"开关",dataIndex:"name6",edit:!0,editComponent:"Switch",editValueMap:e=>e?"开":"关",width:200},{title:"单选框",dataIndex:"radio1",edit:!0,editComponent:"RadioGroup",editComponentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},width:200},{title:"单选按钮框",dataIndex:"radio2",edit:!0,editComponent:"RadioButtonGroup",editComponentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},width:200},{title:"远程单选框",dataIndex:"radio3",edit:!0,editComponent:"ApiRadioGroup",editComponentProps:{api:c,resultField:"list",labelField:"name",valueField:"id"},width:200}],[i]=h({title:"可编辑单元格示例",api:x,columns:m,showIndexColumn:!1,bordered:!0}),{createMessage:o}=w();function d({record:e,index:t,key:r,value:n}){return!1}function p({value:e,key:t,id:r}){return o.loading({content:`正在模拟保存${t}`,key:"_save_fake_data",duration:0}),new Promise(n=>{setTimeout(()=>{e===""?(o.error({content:"保存失败：不能为空",key:"_save_fake_data",duration:2}),n(!1)):(o.success({content:`记录${r}的${t}已保存`,key:"_save_fake_data",duration:2}),n(!0))},2e3)})}function l(re){return s(this,arguments,function*({record:e,index:t,key:r,value:n}){return yield p({id:e.id,key:r,value:n})})}function a(){}return(e,t)=>(I(),v("div",E,[P(f(C),{onRegister:f(i),onEditEnd:d,onEditCancel:a,beforeEditSubmit:l},null,8,["onRegister"])]))}});export{ae as default};