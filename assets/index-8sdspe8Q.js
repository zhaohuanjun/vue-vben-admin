var b=(d,n,r)=>new Promise((c,i)=>{var m=e=>{try{l(r.next(e))}catch(a){i(a)}},f=e=>{try{l(r.throw(e))}catch(a){i(a)}},l=e=>e.done?c(e.value):Promise.resolve(e.value).then(m,f);l((r=r.apply(d,n)).next())});import{_}from"./BasicForm.vue_vue_type_script_setup_true_lang-kUr74D1U.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BkrzYP5o.js";import"./componentMap-B1bvaMGz.js";import{u as P}from"./useForm-BDpUfa4Q.js";import{_ as v}from"./PersonTable.vue_vue_type_script_setup_true_lang-D4V40ulq.js";import{P as g}from"./index-DfVVI5KB.js";import{R as u}from"./antd-5AEjVWAR.js";import{d as q,f as k,a7 as y,Z as R,a8 as x,a9 as s,k as t,G as C,u as o}from"./vue-COhTiP8A.js";import{c as S}from"./entry/index-CVxmJzUk-1713257085139.js";import"./FormItem.vue_vue_type_script_lang-D5sSoIqW.js";import"./helper-C_LYGFIk.js";import"./index-dGbg62e7.js";import"./useWindowSizeFn-D_jTp3Dp.js";import"./useFormItem-CieOCyoi.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-BRUyZDTw.js";import"./uuid-D0SLUWHI.js";import"./useSortable-DnEvXb39.js";import"./download-BznJ7Qxt.js";import"./base64Conver-bBv-IO2K.js";import"./index-BN0qa80J.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-yQPIyucG.js";import"./copyTextToClipboard-D-nRS8bn.js";import"./index-CgdG0PB5.js";import"./index-BPN7-Qvk.js";import"./BasicTable.vue_vue_type_script_setup_true_lang-DjcSjXOl.js";import"./TableImg.vue_vue_type_style_index_0_lang-EBjD4Zt_.js";import"./onMountedOrActivated-GpUdBAv_.js";import"./sortable.esm-CoO8jRpa.js";import"./useTable-CXa3UFcV.js";import"./useContentViewHeight-CK7kW8GV.js";const p=[{label:"付晓晓",value:"1"},{label:"周毛毛",value:"2"}],h=[{label:"私密",value:"1"},{label:"公开",value:"2"}],w=[{field:"f1",component:"Input",label:"仓库名",required:!0},{field:"f2",component:"Input",label:"仓库域名",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"仓库管理员",componentProps:{options:p},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"审批人",componentProps:{options:p},required:!0},{field:"f5",component:"RangePicker",label:"生效日期",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"仓库类型",componentProps:{options:h},required:!0,colProps:{offset:2}}],B=[{field:"t1",component:"Input",label:"任务名",required:!0},{field:"t2",component:"Input",label:"任务描述",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"执行人",componentProps:{options:p},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"责任人",componentProps:{options:p},required:!0},{field:"t5",component:"TimePicker",label:"生效日期",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"任务类型",componentProps:{options:h},required:!0,colProps:{offset:2}}],I=q({name:"FormHightPage",__name:"index",setup(d){const n=k(null),[r,{validate:c}]=P({layout:"vertical",baseColProps:{span:6},schemas:w,showActionButtonGroup:!1}),[i,{validate:m}]=P({layout:"vertical",baseColProps:{span:6},schemas:B,showActionButtonGroup:!1});function f(){return b(this,null,function*(){try{n.value;const[l,e]=yield Promise.all([c(),m()])}catch(l){}})}return(l,e)=>{const a=y("a-button");return R(),x(o(g),{class:"high-form",title:"高级表单",content:" 高级表单常见于一次性输入和提交大批量数据的场景。"},{rightFooter:s(()=>[t(a,{type:"primary",onClick:f},{default:s(()=>[C(" 提交 ")]),_:1})]),default:s(()=>[t(o(u),{title:"仓库管理",bordered:!1},{default:s(()=>[t(o(_),{onRegister:o(r)},null,8,["onRegister"])]),_:1}),t(o(u),{title:"任务管理",bordered:!1,class:"!mt-5"},{default:s(()=>[t(o(_),{onRegister:o(i)},null,8,["onRegister"])]),_:1}),t(o(u),{title:"成员管理",bordered:!1,class:"!mt-5"},{default:s(()=>[t(v,{ref_key:"tableRef",ref:n},null,512)]),_:1})]),_:1})}}}),ie=S(I,[["__scopeId","data-v-ddf1f53d"]]);export{ie as default};