(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f72c5e76"],{1799:function(e,t,a){"use strict";var o=a("7a23"),c={"aria-label":"Page navigation"},r={class:"pagination justify-content-center"},n=Object(o["createVNode"])("span",{"aria-hidden":"true"},"«",-1),i=Object(o["createVNode"])("span",{"aria-hidden":"true"},"»",-1);function d(e,t,a,d,l,s){return Object(o["openBlock"])(),Object(o["createBlock"])("nav",c,[Object(o["createVNode"])("ul",r,[Object(o["createVNode"])("li",{class:["page-item",{disabled:!a.page.has_pre}]},[Object(o["createVNode"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[1]||(t[1]=Object(o["withModifiers"])((function(t){return e.$emit("get-page",a.page.current_page-1)}),["prevent"]))},[n])],2),(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(a.page.total_pages,(function(t){return Object(o["openBlock"])(),Object(o["createBlock"])("li",{class:["page-item",{active:t===a.page.current_page}],key:t},[Object(o["createVNode"])("a",{class:"page-link",href:"#",onClick:Object(o["withModifiers"])((function(a){return e.$emit("get-page",t)}),["prevent"])},Object(o["toDisplayString"])(t),9,["onClick"])],2)})),128)),Object(o["createVNode"])("li",{class:["page-item",{disabled:!a.page.has_next}]},[Object(o["createVNode"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[2]||(t[2]=Object(o["withModifiers"])((function(t){return e.$emit("get-page",a.page.current_page+1)}),["prevent"]))},[i])],2)])])}var l={emits:["get-page"],props:["page"]};l.render=d;t["a"]=l},"1dde":function(e,t,a){var o=a("d039"),c=a("b622"),r=a("2d00"),n=c("species");e.exports=function(e){return r>=51||!o((function(){var t=[],a=t.constructor={};return a[n]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},4186:function(e,t,a){"use strict";var o=a("7a23"),c={class:"modal-dialog modal-dialog-centered"},r={class:"modal-content border-0"},n={class:"modal-header bg-danger text-white"},i={id:"delProductModalLabel",class:"modal-title"},d=Object(o["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),l={class:"modal-body"},s=Object(o["createTextVNode"])(" 是否刪除 "),u={class:"text-danger"},b=Object(o["createTextVNode"])(" (刪除後將無法恢復)。 "),p={class:"modal-footer"},O=Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function m(e,t,a,m,j,h){return Object(o["openBlock"])(),Object(o["createBlock"])("div",c,[Object(o["createVNode"])("div",r,[Object(o["createVNode"])("div",n,[Object(o["createVNode"])("h5",i,[Object(o["withDirectives"])(Object(o["createVNode"])("span",null,"刪除產品",512),[[o["vShow"],"product"===a.action]]),Object(o["withDirectives"])(Object(o["createVNode"])("span",null,"刪除全部訂單",512),[[o["vShow"],"order"===a.action&&"delAll"===a.status]]),Object(o["withDirectives"])(Object(o["createVNode"])("span",null,"刪除訂單",512),[[o["vShow"],"order"===a.action&&"delete"===a.status]]),Object(o["withDirectives"])(Object(o["createVNode"])("span",null,"刪除優惠券",512),[[o["vShow"],"coupon"===a.action]]),Object(o["withDirectives"])(Object(o["createVNode"])("span",null,"刪除文章",512),[[o["vShow"],"article"===a.action]])]),d]),Object(o["createVNode"])("div",l,[s,Object(o["withDirectives"])(Object(o["createVNode"])("strong",{class:"text-danger"},Object(o["toDisplayString"])(a.temp.title),513),[[o["vShow"],"product"===a.action]]),Object(o["withDirectives"])(Object(o["createVNode"])("strong",{class:"text-danger"},"訂單編號："+Object(o["toDisplayString"])(a.temp.num),513),[[o["vShow"],"order"===a.action&&"delete"===a.status]]),Object(o["withDirectives"])(Object(o["createVNode"])("strong",u,"全部產品",512),[[o["vShow"],"order"===a.action&&"delAll"===a.status]]),Object(o["withDirectives"])(Object(o["createVNode"])("strong",{class:"text-danger"},"優惠券："+Object(o["toDisplayString"])(a.temp.title),513),[[o["vShow"],"coupon"===a.action]]),Object(o["withDirectives"])(Object(o["createVNode"])("strong",{class:"text-danger"},"文章："+Object(o["toDisplayString"])(a.temp.title),513),[[o["vShow"],"article"===a.action]]),b]),Object(o["createVNode"])("div",p,[O,Object(o["createVNode"])("button",{type:"button",class:"btn btn-danger",onClick:t[1]||(t[1]=function(t){return e.$emit("del-item")})}," 確認刪除 ")])])])}var j={props:["temp","action","status"],emits:["del-item"]};j.render=m;t["a"]=j},"57c8":function(e,t,a){"use strict";a.r(t);a("b0c0");var o=a("7a23"),c={class:"container-fluid"},r=Object(o["createVNode"])("h2",{class:"h5 text-white mt-5"}," # 訂單列表 ",-1),n={class:"rounded bg-dark p-3 mb-5 box--shadow"},i={class:"d-flex justify-content-end mb-3"},d=Object(o["createVNode"])("span",{class:"material-icons font--sm"},"remove",-1),l=Object(o["createTextVNode"])(" 刪除全部 "),s={class:"table table-dark"},u=Object(o["createVNode"])("thead",null,[Object(o["createVNode"])("tr",{class:"table--purple"},[Object(o["createVNode"])("th",{scope:"col",width:"150"},"訂單編號"),Object(o["createVNode"])("th",{scope:"col",width:"180"},"客戶姓名"),Object(o["createVNode"])("th",{scope:"col",width:"120"},"訂單建立日期"),Object(o["createVNode"])("th",{scope:"col",width:"120"},"總價"),Object(o["createVNode"])("th",{scope:"col",width:"100"},"付款狀態"),Object(o["createVNode"])("th",{scope:"col"},"付款方式"),Object(o["createVNode"])("th",{scope:"col"},"付款日期"),Object(o["createVNode"])("th",{scope:"col",width:"180"},"編輯")])],-1),b={scope:"row"},p=Object(o["createVNode"])("span",{class:"material-icons font--sm"},"edit",-1),O=Object(o["createTextVNode"])(" 編輯 "),m=Object(o["createVNode"])("span",{class:"material-icons font--sm"},"delete",-1),j=Object(o["createTextVNode"])(" 刪除 ");function h(e,t,a,h,g,f){var v=Object(o["resolveComponent"])("Loading"),V=Object(o["resolveComponent"])("PaginationCom"),N=Object(o["resolveComponent"])("OrderModalCom");return Object(o["openBlock"])(),Object(o["createBlock"])("div",c,[Object(o["createVNode"])(v,{active:g.isLoading,"onUpdate:active":t[1]||(t[1]=function(e){return g.isLoading=e}),"is-full-page":g.fullPage},null,8,["active","is-full-page"]),r,Object(o["createVNode"])("div",n,[Object(o["createVNode"])("div",i,[Object(o["createVNode"])("button",{type:"button",class:"btn btn--purple text-white","data-bs-toggle":"modal","data-bs-target":"#orderModal",onClick:t[2]||(t[2]=function(e){return f.adjustStatus(!0)})},[d,l])]),Object(o["createVNode"])("table",s,[u,Object(o["createVNode"])("tbody",null,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(g.orders,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("tr",{key:e.id},[Object(o["createVNode"])("th",b,Object(o["toDisplayString"])(e.id),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(e.user.name),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(f.timestampToDate(e.create_at)),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(e.total),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(!0===e.is_paid?"是":"否"),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(e.payment_method),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(f.timestampToDate(e.paid_date)),1),Object(o["createVNode"])("td",null,[Object(o["createVNode"])("button",{type:"button",class:"btn btn-sm btn-light me-1","data-bs-toggle":"modal","data-bs-target":"#orderModal",onClick:function(t){return f.adjustStatus(!1,e,"put")}},[p,O],8,["onClick"]),Object(o["createVNode"])("button",{type:"button",class:"btn btn-sm btn-danger text-white","data-bs-toggle":"modal","data-bs-target":"#orderModal",onClick:function(t){return f.adjustStatus(!1,e,"del")}},[m,j],8,["onClick"])])])})),128))])]),Object(o["createVNode"])(V,{page:g.pagination,onGetPage:f.getOrder},null,8,["page","onGetPage"])]),Object(o["createVNode"])(N,{ref:"modal",onGetOrder:f.getOrder,"is-delet-all":g.isDeleteAll,status:g.status,onIsLoading:f.isLoadingHandler},null,8,["onGetOrder","is-delet-all","status","onIsLoading"])])}a("99af");var g={id:"orderModal",ref:"modal",class:"modal fade",tabindex:"-1","aria-labelledby":"orderModalLabel","aria-hidden":"true"},f={key:0,class:"modal-dialog modal-xl modal-dialog-centered"},v={class:"modal-content border-0"},V=Object(o["createVNode"])("div",{class:"modal-header bg-dark text-white"},[Object(o["createVNode"])("h5",{id:"productModalLabel",class:"modal-title"},[Object(o["createVNode"])("span",null,"編輯訂單")]),Object(o["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),N={class:"modal-body"},w={class:"row"},y={class:"form-group col-md-6"},D=Object(o["createVNode"])("label",{for:"username"},"顧客名稱",-1),k={class:"form-group col-md-6"},x=Object(o["createVNode"])("label",{for:"usertel"},"顧客電話",-1),_={class:"row"},S={class:"form-group col-md-6"},M=Object(o["createVNode"])("label",{for:"useremail"},"顧客信箱",-1),C={class:"form-group col-md-6"},T=Object(o["createVNode"])("label",{for:"useraddress"},"顧客地址",-1),B=Object(o["createVNode"])("hr",null,null,-1),L={class:"row"},$={class:"col-md-4"},A=Object(o["createVNode"])("label",{for:"is_paid"},"是否付款",-1),P={class:"input-group mb-0"},U=Object(o["createVNode"])("option",{value:"true"},"是",-1),I=Object(o["createVNode"])("option",{value:"false"},"否",-1),F={class:"col-md-4"},G=Object(o["createVNode"])("label",{for:"paid_date"},"付款日期",-1),J={class:"col-md-4"},Z=Object(o["createVNode"])("label",{for:"payment_method"},"付款方式",-1),E={class:"form-group"},H=Object(o["createVNode"])("label",{for:"total"},"訂單總額",-1),Y={class:"modal-footer"},q=Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function z(e,t,a,c,r,n){var i=Object(o["resolveComponent"])("DelModal");return Object(o["openBlock"])(),Object(o["createBlock"])("div",g,["put"===a.status?(Object(o["openBlock"])(),Object(o["createBlock"])("div",f,[Object(o["createVNode"])("div",v,[V,Object(o["createVNode"])("div",N,[Object(o["createVNode"])("div",w,[Object(o["createVNode"])("div",y,[D,Object(o["withDirectives"])(Object(o["createVNode"])("input",{id:"username",type:"text",class:"form-control",placeholder:"請輸入顧客名稱","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.tempOrder.user.name=e})},null,512),[[o["vModelText"],r.tempOrder.user.name]])]),Object(o["createVNode"])("div",k,[x,Object(o["withDirectives"])(Object(o["createVNode"])("input",{id:"usertel",type:"number",class:"form-control",placeholder:"請輸入顧客電話","onUpdate:modelValue":t[2]||(t[2]=function(e){return r.tempOrder.user.tel=e})},null,512),[[o["vModelText"],r.tempOrder.user.tel]])])]),Object(o["createVNode"])("div",_,[Object(o["createVNode"])("div",S,[M,Object(o["withDirectives"])(Object(o["createVNode"])("input",{id:"useremail",type:"text",class:"form-control",placeholder:"請輸入顧客信箱","onUpdate:modelValue":t[3]||(t[3]=function(e){return r.tempOrder.user.email=e})},null,512),[[o["vModelText"],r.tempOrder.user.email]])]),Object(o["createVNode"])("div",C,[T,Object(o["withDirectives"])(Object(o["createVNode"])("input",{id:"useraddress",type:"text",class:"form-control",placeholder:"請輸入顧客地址","onUpdate:modelValue":t[4]||(t[4]=function(e){return r.tempOrder.user.address=e})},null,512),[[o["vModelText"],r.tempOrder.user.address]])])]),B,Object(o["createVNode"])("div",L,[Object(o["createVNode"])("div",$,[A,Object(o["createVNode"])("div",P,[Object(o["withDirectives"])(Object(o["createVNode"])("select",{class:"form-select",id:"is_paid","onUpdate:modelValue":t[5]||(t[5]=function(e){return r.tempOrder.is_paid=e})},[U,I],512),[[o["vModelSelect"],r.tempOrder.is_paid]])])]),Object(o["createVNode"])("div",F,[G,Object(o["withDirectives"])(Object(o["createVNode"])("input",{id:"paid_date",type:"date",class:"form-control",placeholder:"請輸入付款方式","onUpdate:modelValue":t[6]||(t[6]=function(e){return r.tempOrder.paid_date=e})},null,512),[[o["vModelText"],r.tempOrder.paid_date]])]),Object(o["createVNode"])("div",J,[Z,Object(o["withDirectives"])(Object(o["createVNode"])("input",{id:"payment_method",type:"text",class:"form-control",placeholder:"請輸入付款方式","onUpdate:modelValue":t[7]||(t[7]=function(e){return r.tempOrder.payment_method=e})},null,512),[[o["vModelText"],r.tempOrder.payment_method]])])]),Object(o["createVNode"])("div",E,[H,Object(o["withDirectives"])(Object(o["createVNode"])("input",{id:"total",type:"number",min:"0",class:"form-control",placeholder:"請輸入訂單總額","onUpdate:modelValue":t[8]||(t[8]=function(e){return r.tempOrder.total=e})},null,512),[[o["vModelText"],r.tempOrder.total]])])]),Object(o["createVNode"])("div",Y,[q,Object(o["createVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[9]||(t[9]=function(e){return n.updateOrder(r.tempOrder)})}," 確認 ")])])])):(Object(o["openBlock"])(),Object(o["createBlock"])(i,{key:1,onDelItem:n.delOrder,temp:r.tempOrder,action:r.action,status:a.status},null,8,["onDelItem","temp","action","status"]))],512)}var K=a("7b17"),Q=a("4186"),R={props:["isDeleteAll","status"],emits:["is-loading","get-order"],components:{DelModal:Q["a"]},data:function(){return{tempOrder:{},date:new Date,action:"order"}},methods:{updateOrder:function(e){var t=this;this.$emit("is-loading",!0),console.log(e);var a="".concat("https://vue3-course-api.hexschool.io","/api/").concat("uy_neish","/admin/order/").concat(e.id);this.tempOrder.total=parseInt(this.tempOrder.total),"true"===this.tempOrder.is_paid?this.tempOrder.is_paid=!0:this.tempOrder.is_paid=!1,this.tempOrder.paid_date=this.DateToTimestamp(this.tempOrder.paid_date),this.axios.put(a,{headers:{"Access-Control-Allow-Origin":"*"},data:this.tempOrder}).then((function(e){t.$emit("is-loading",!1),e.data.success?(t.$emit("get-order"),t.modal.hide(),t.$swal({title:"成功",icon:"success"})):alert("編輯有誤")})).catch((function(e){return t.$swal({title:e.message,icon:"error"})}))},delOrder:function(){var e=this;this.$emit("is-loading",!0);var t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("uy_neish","/admin/order/").concat(this.tempOrder.id);"delAll"===this.status&&(t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("uy_neish","/admin/orders/all")),this.axios.delete(t).then((function(t){e.$emit("is-loading",!1),t.data.success&&(e.$emit("get-order"),e.modal.hide(),e.$swal({title:"刪除成功",icon:"success"}))})).catch((function(t){return e.$swal({title:t,icon:"error"})}))},DateToTimestamp:function(e){return Date.parse(e)/1e3}},mounted:function(){this.modal=new K["a"](this.$refs.modal)}};R.render=z;var W=R,X=a("1799"),ee=a("9062"),te=a.n(ee),ae={components:{OrderModalCom:W,PaginationCom:X["a"],Loading:te.a},data:function(){return{orderModal:{},orders:[],pagination:{},isDeleteAll:!1,status:"",isLoading:!1,fullPage:!0}},methods:{getOrder:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var a="".concat("https://vue3-course-api.hexschool.io","/api/").concat("uy_neish","/admin/orders?page=").concat(t);this.axios.get(a).then((function(t){e.isLoading=!1,t.data.success&&(e.orders=t.data.orders,e.pagination=t.data.pagination)})).catch((function(t){return e.$swal({title:t,icon:"error"})}))},adjustStatus:function(e,t,a){if(this.isDeleteAll=e,this.isDeleteAll?this.status="delAll":this.status="put"===a?"put":"delete",t){var o=JSON.parse(JSON.stringify(t));o.paid_date=this.timestampToDate(o.paid_date),this.$refs.modal.tempOrder=o}},timestampToDate:function(e){if(e){var t=new Date(1e3*e);return"".concat(t.getFullYear(),"-").concat(this.adjustZero(t.getMonth()+1),"-").concat(this.adjustZero(t.getDate()))}},adjustZero:function(e){return e<10?"0".concat(e):"".concat(e)},isLoadingHandler:function(e){this.isLoading=!0===e}},created:function(){this.getOrder()}};ae.render=h;t["default"]=ae},8418:function(e,t,a){"use strict";var o=a("c04e"),c=a("9bf2"),r=a("5c6c");e.exports=function(e,t,a){var n=o(t);n in e?c.f(e,n,r(0,a)):e[n]=a}},"99af":function(e,t,a){"use strict";var o=a("23e7"),c=a("d039"),r=a("e8b5"),n=a("861d"),i=a("7b0b"),d=a("50c4"),l=a("8418"),s=a("65f0"),u=a("1dde"),b=a("b622"),p=a("2d00"),O=b("isConcatSpreadable"),m=9007199254740991,j="Maximum allowed index exceeded",h=p>=51||!c((function(){var e=[];return e[O]=!1,e.concat()[0]!==e})),g=u("concat"),f=function(e){if(!n(e))return!1;var t=e[O];return void 0!==t?!!t:r(e)},v=!h||!g;o({target:"Array",proto:!0,forced:v},{concat:function(e){var t,a,o,c,r,n=i(this),u=s(n,0),b=0;for(t=-1,o=arguments.length;t<o;t++)if(r=-1===t?n:arguments[t],f(r)){if(c=d(r.length),b+c>m)throw TypeError(j);for(a=0;a<c;a++,b++)a in r&&l(u,b,r[a])}else{if(b>=m)throw TypeError(j);l(u,b++,r)}return u.length=b,u}})},b0c0:function(e,t,a){var o=a("83ab"),c=a("9bf2").f,r=Function.prototype,n=r.toString,i=/^\s*function ([^ (]*)/,d="name";o&&!(d in r)&&c(r,d,{configurable:!0,get:function(){try{return n.call(this).match(i)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-f72c5e76.4c7dd328.js.map