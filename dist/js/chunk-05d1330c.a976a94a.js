(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05d1330c"],{"1dde":function(e,t,a){var c=a("d039"),r=a("b622"),o=a("2d00"),n=r("species");e.exports=function(e){return o>=51||!c((function(){var t=[],a=t.constructor={};return a[n]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"7ccb":function(e,t,a){"use strict";var c=a("7a23"),r=Object(c["createVNode"])("div",{class:"loadingio-spinner-ellipsis-m5cks5164gn"},[Object(c["createVNode"])("div",{class:"ldio-ujuwlnkwpj"},[Object(c["createVNode"])("div"),Object(c["createVNode"])("div"),Object(c["createVNode"])("div"),Object(c["createVNode"])("div"),Object(c["createVNode"])("div")])],-1);function o(e,t,a,o,n,l){var s=Object(c["resolveComponent"])("Loading",!0);return Object(c["openBlock"])(),Object(c["createBlock"])(s,null,{default:Object(c["withCtx"])((function(){return[r]})),_:1})}var n=a("9062"),l=a.n(n),s={components:{Loading:l.a}};s.render=o;t["a"]=s},8418:function(e,t,a){"use strict";var c=a("c04e"),r=a("9bf2"),o=a("5c6c");e.exports=function(e,t,a){var n=c(t);n in e?r.f(e,n,o(0,a)):e[n]=a}},"99af":function(e,t,a){"use strict";var c=a("23e7"),r=a("d039"),o=a("e8b5"),n=a("861d"),l=a("7b0b"),s=a("50c4"),d=a("8418"),i=a("65f0"),u=a("1dde"),b=a("b622"),m=a("2d00"),f=b("isConcatSpreadable"),p=9007199254740991,v="Maximum allowed index exceeded",j=m>=51||!r((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),V=u("concat"),O=function(e){if(!n(e))return!1;var t=e[f];return void 0!==t?!!t:o(e)},h=!j||!V;c({target:"Array",proto:!0,forced:h},{concat:function(e){var t,a,c,r,o,n=l(this),u=i(n,0),b=0;for(t=-1,c=arguments.length;t<c;t++)if(o=-1===t?n:arguments[t],O(o)){if(r=s(o.length),b+r>p)throw TypeError(v);for(a=0;a<r;a++,b++)a in o&&d(u,b,o[a])}else{if(b>=p)throw TypeError(v);d(u,b++,o)}return u.length=b,u}})},b0c0:function(e,t,a){var c=a("83ab"),r=a("9bf2").f,o=Function.prototype,n=o.toString,l=/^\s*function ([^ (]*)/,s="name";c&&!(s in o)&&r(o,s,{configurable:!0,get:function(){try{return n.call(this).match(l)[1]}catch(e){return""}}})},c699:function(e,t,a){"use strict";a.r(t);a("b0c0");var c=a("7a23"),r=Object(c["createStaticVNode"])('<div class="bg__cart__banner mb-2"><div class="row d-flex justify-content-center align-items-center h-100"><div class="col-6 col-lg-4"><div class="bg-light py-2 py-sm-4 rounded opacity__banner"><h2 class="text-center font--banner mb-0">填寫資料</h2></div></div></div></div>',1),o={class:"container py-5"},n=Object(c["createStaticVNode"])('<div class="position-relative mb-5"><ul class="list-unstyled d-flex w-100 justify-content-evenly step"><li class="d-flex flex-column align-items-center"><span class="px-3 py-2 border border-2 border-dark rounded-circle step__label bg-white">1</span><span class="p mb-0">確認商品</span></li><li class="d-flex flex-column align-items-center"><span class="px-3 py-2 border border-2 border-dark rounded-circle step__label bg-primary">2</span><span class="p mb-0">填寫資料</span></li><li class="d-flex flex-column align-items-center"><span class="px-3 py-2 border border-2 border-dark rounded-circle step__label bg-white">3</span><span class="p mb-0">付款結帳</span></li></ul></div>',1),l={class:"d-flex justify-content-center"},s={class:"w-50"},d={class:"py-5"},i={class:"bg--light box--shadow rounded p-4 mb-5"},u={class:"mb-3"},b=Object(c["createVNode"])("label",{for:"name"},"姓名",-1),m={class:"mb-3"},f=Object(c["createVNode"])("label",{for:"phone"},"電話",-1),p={class:"mb-3"},v=Object(c["createVNode"])("label",{for:"address"},"地址",-1),j={class:"mb-3"},V=Object(c["createVNode"])("label",{for:"emailUser"},"電子信箱",-1),O={class:"mb-3"},h=Object(c["createVNode"])("label",{for:"payment_method"},"付款方式",-1),N=Object(c["createVNode"])("option",{value:"credit_card"},"信用卡",-1),g=Object(c["createVNode"])("option",{value:"atm"},"ATM匯款",-1),x=Object(c["createVNode"])("option",{value:"cash"},"貨到付款",-1),y=Object(c["createVNode"])("div",{class:"mb-3"},[Object(c["createVNode"])("label",{for:"message",class:"form-label"},"留言"),Object(c["createVNode"])("textarea",{id:"message",class:"form-control",cols:"30",rows:"10"})],-1),_={class:"d-flex justify-content-between"},w=Object(c["createVNode"])("span",{class:"material-icons"},"chevron_left",-1),k=Object(c["createTextVNode"])(" 回上一步 "),C=Object(c["createVNode"])("button",{class:"btn btn-outline-dark d-flex align-items-center",type:"submit"},[Object(c["createTextVNode"])(" 送出訂單 "),Object(c["createVNode"])("span",{class:"material-icons"},"navigate_next")],-1);function L(e,t,a,L,U,$){var S=Object(c["resolveComponent"])("Loading"),q=Object(c["resolveComponent"])("Field"),B=Object(c["resolveComponent"])("ErrorMessage"),T=Object(c["resolveComponent"])("router-link"),F=Object(c["resolveComponent"])("Form",!0);return Object(c["openBlock"])(),Object(c["createBlock"])("div",null,[Object(c["createVNode"])(S,{active:U.isLoading,"onUpdate:active":t[1]||(t[1]=function(e){return U.isLoading=e}),"is-full-page":U.fullPage},null,8,["active","is-full-page"]),r,Object(c["createVNode"])("div",o,[n,Object(c["createVNode"])("div",l,[Object(c["createVNode"])("div",s,[Object(c["createVNode"])(F,{ref:"form",onSubmit:t[7]||(t[7]=function(t){return e.$emit("on-submit",U.form)})},{default:Object(c["withCtx"])((function(e){var a=e.errors;return[Object(c["createVNode"])("div",d,[Object(c["createVNode"])("div",i,[Object(c["createVNode"])("div",u,[b,Object(c["createVNode"])(q,{id:"name",name:"姓名",type:"text",class:["form-control",{"is-invalid":a["姓名"]}],placeholder:"請輸入姓名",rules:"required",modelValue:U.form.user.name,"onUpdate:modelValue":t[2]||(t[2]=function(e){return U.form.user.name=e})},null,8,["class","modelValue"]),Object(c["createVNode"])(B,{name:"姓名",class:"invalid-feedback"})]),Object(c["createVNode"])("div",m,[f,Object(c["createVNode"])(q,{id:"phone",name:"電話",type:"tel",class:["form-control",{"is-invalid":a["電話"]}],placeholder:"請輸入電話",rules:$.isPhone,modelValue:U.form.user.tel,"onUpdate:modelValue":t[3]||(t[3]=function(e){return U.form.user.tel=e})},null,8,["class","rules","modelValue"]),Object(c["createVNode"])(B,{name:"電話",class:"invalid-feedback"})]),Object(c["createVNode"])("div",p,[v,Object(c["createVNode"])(q,{id:"address",name:"地址",type:"text",class:["form-control",{"is-invalid":a["地址"]}],placeholder:"請輸入地址",rules:"required",modelValue:U.form.user.address,"onUpdate:modelValue":t[4]||(t[4]=function(e){return U.form.user.address=e})},null,8,["class","modelValue"]),Object(c["createVNode"])(B,{name:"地址",class:"invalid-feedback"})]),Object(c["createVNode"])("div",j,[V,Object(c["createVNode"])(q,{id:"emailUser",name:"電子信箱",type:"email",class:["form-control",{"is-invalid":a["電子信箱"]}],placeholder:"請輸入電子信箱",rules:"email|required",modelValue:U.form.user.email,"onUpdate:modelValue":t[5]||(t[5]=function(e){return U.form.user.email=e})},null,8,["class","modelValue"]),Object(c["createVNode"])(B,{name:"電子信箱",class:"invalid-feedback"})]),Object(c["createVNode"])("div",O,[h,Object(c["createVNode"])(q,{name:"付款方式",id:"payment_method",as:"select",class:["form-control",{"is-invalid":a["付款方式"]}],rules:"required",modelValue:U.form.payment_method,"onUpdate:modelValue":t[6]||(t[6]=function(e){return U.form.payment_method=e})},{default:Object(c["withCtx"])((function(){return[N,g,x]})),_:2},1032,["class","modelValue"]),Object(c["createVNode"])(B,{name:"付款方式",class:"invalid-feedback"})]),y]),Object(c["createVNode"])("div",_,[Object(c["createVNode"])(T,{to:"/cart",class:"btn btn-outline-dark d-flex align-items-center"},{default:Object(c["withCtx"])((function(){return[w,k]})),_:1}),C])])]})),_:1},512)])])])])}a("99af");var U=a("7ccb"),$={emits:["on-submit"],components:{Loading:U["a"]},data:function(){return{form:{user:{name:"",email:"",tel:"",address:""},message:"",payment_method:""},isLoading:!1,fullPage:!0}},methods:{isPhone:function(e){var t=/^(09)[0-9]{8}$/;return!!t.test(e)||"需為09開頭且為10碼數字"},onSubmit:function(e){var t=this;this.isLoading=!0;var a="".concat("https://vue3-course-api.hexschool.io","/api/").concat("uy_neish","/order");this.$http.post(a,{data:e}).then((function(e){t.isLoading=!1,e.data.success&&(t.$refs.form.resetForm(),t.$swal({title:"已成功建立訂單",icon:"success"}),t.$router.push({name:"paid",query:{order_id:e.data.orderId}}))})).catch((function(e){return t.$swal({title:e,icon:"error"})}))}}};$.render=L;t["default"]=$}}]);
//# sourceMappingURL=chunk-05d1330c.a976a94a.js.map