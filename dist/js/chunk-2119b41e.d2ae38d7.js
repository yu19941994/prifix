(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2119b41e"],{"1dde":function(e,t,c){var r=c("d039"),o=c("b622"),a=c("2d00"),n=o("species");e.exports=function(e){return a>=51||!r((function(){var t=[],c=t.constructor={};return c[n]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"4fad":function(e,t,c){var r=c("23e7"),o=c("6f53").entries;r({target:"Object",stat:!0},{entries:function(e){return o(e)}})},"6f53":function(e,t,c){var r=c("83ab"),o=c("df75"),a=c("fc6a"),n=c("d1e7").f,s=function(e){return function(t){var c,s=a(t),l=o(s),d=l.length,i=0,b=[];while(d>i)c=l[i++],r&&!n.call(s,c)||b.push(e?[c,s[c]]:s[c]);return b}};e.exports={entries:s(!0),values:s(!1)}},7068:function(e,t,c){"use strict";c.r(t);c("b0c0");var r=c("7a23"),o=Object(r["createStaticVNode"])('<div class="bg__cart__banner mb-5"><div class="row d-flex justify-content-center align-items-center h-100"><div class="col-6 col-lg-4"><div class="bg-light py-2 py-sm-4 rounded opacity__banner"><h2 class="text-center font--banner mb-0">結帳付款</h2></div></div></div></div>',1),a={class:"container"},n=Object(r["createStaticVNode"])('<div class="position-relative mb-5"><ul class="list-unstyled d-flex w-100 justify-content-evenly step"><li class="d-flex flex-column align-items-center"><span class="px-3 py-2 border border-2 border-dark rounded-circle step__label bg-white">1</span><span class="p mb-0">確認商品</span></li><li class="d-flex flex-column align-items-center"><span class="px-3 py-2 border border-2 border-dark rounded-circle step__label bg-white">2</span><span class="p mb-0">填寫資料</span></li><li class="d-flex flex-column align-items-center"><span class="px-3 py-2 border border-2 border-dark rounded-circle step__label bg-warning">3</span><span class="p mb-0">付款結帳</span></li></ul></div>',1),s={class:"pt-3 pb-5"},l={class:"bg--light box--shadow rounded p-4 mb-5"},d={class:"row"},i={class:"col-12 col-md-6 mb-4 mb-md-0"},b={class:"table"},u=Object(r["createVNode"])("thead",null,[Object(r["createVNode"])("tr",null,[Object(r["createVNode"])("th",{scope:"col",width:"120",class:"text-center"},[Object(r["createVNode"])("h3",{class:"h4 text-center"},"購物清單")]),Object(r["createVNode"])("th",{scope:"col"}),Object(r["createVNode"])("th",{scope:"col",width:"150"}),Object(r["createVNode"])("th",{scope:"col"})])],-1),p={scope:"row",class:"text-center"},j={class:"text-center"},O={class:"text-center"},f={class:"text-center"},h={class:"col-12 col-md-6"},N={key:0,class:"table"},V=Object(r["createVNode"])("thead",null,[Object(r["createVNode"])("tr",null,[Object(r["createVNode"])("th",{scope:"col",width:"120",class:"text-center"},[Object(r["createVNode"])("h3",{class:"h4 text-center"},"訂購資訊")]),Object(r["createVNode"])("td")])],-1),g=Object(r["createVNode"])("th",{scope:"col",width:"120",class:"text-center"},"收件人姓名",-1),m=Object(r["createVNode"])("th",{scope:"col",width:"120",class:"text-center"},"收件人電話",-1),x=Object(r["createVNode"])("th",{scope:"col",width:"120",class:"text-center"},"收件人地址",-1),v=Object(r["createVNode"])("th",{scope:"col",width:"120",class:"text-center"},"電子郵件",-1),y=Object(r["createVNode"])("th",{scope:"col",width:"120",class:"text-center"},"訂購日期",-1),w=Object(r["createVNode"])("th",{scope:"col",width:"120",class:"text-center"},"付款狀態",-1),_={key:0,class:"text-danger"},k={key:1,class:"text-success"},B={key:0,class:"d-flex justify-content-between"},D=Object(r["createVNode"])("span",{class:"material-icons"},"chevron_left",-1),S=Object(r["createTextVNode"])(" 回上一步 "),C=Object(r["createTextVNode"])(" 付款結帳 "),T=Object(r["createVNode"])("span",{class:"material-icons"},"paid",-1),$={key:1,class:"d-flex justify-content-end"},q=Object(r["createVNode"])("span",{class:"material-icons"},"shopping_bag",-1),E=Object(r["createTextVNode"])(" 繼續購物 ");function F(e,t,c,F,Z,J){var M=Object(r["resolveComponent"])("router-link");return Object(r["openBlock"])(),Object(r["createBlock"])("div",null,[o,Object(r["createVNode"])("div",a,[n,Object(r["createVNode"])("div",s,[Object(r["createVNode"])("div",l,[Object(r["createVNode"])("div",d,[Object(r["createVNode"])("div",i,[Object(r["createVNode"])("table",b,[u,Object(r["createVNode"])("tbody",null,[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(Z.products,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])("tr",{key:e.id},[Object(r["createVNode"])("th",p,[Object(r["createVNode"])("img",{src:e[1].product.imageUrl,alt:"",class:"img__cart"},null,8,["src"])]),Object(r["createVNode"])("td",j,Object(r["toDisplayString"])(e[1].product.title),1),Object(r["createVNode"])("td",O,Object(r["toDisplayString"])(e[1].qty),1),Object(r["createVNode"])("td",f,"NT$"+Object(r["toDisplayString"])(e[1].total),1)])})),128))])])]),Object(r["createVNode"])("div",h,[Z.order.user?(Object(r["openBlock"])(),Object(r["createBlock"])("table",N,[V,Object(r["createVNode"])("tbody",null,[Object(r["createVNode"])("tr",null,[g,Object(r["createVNode"])("td",null,Object(r["toDisplayString"])(Z.order.user.name),1)]),Object(r["createVNode"])("tr",null,[m,Object(r["createVNode"])("td",null,Object(r["toDisplayString"])(Z.order.user.tel),1)]),Object(r["createVNode"])("tr",null,[x,Object(r["createVNode"])("td",null,Object(r["toDisplayString"])(Z.order.user.address),1)]),Object(r["createVNode"])("tr",null,[v,Object(r["createVNode"])("td",null,Object(r["toDisplayString"])(Z.order.user.email),1)]),Object(r["createVNode"])("tr",null,[y,Object(r["createVNode"])("td",null,Object(r["toDisplayString"])(J.timestampToDate(Z.order.create_at)),1)]),Object(r["createVNode"])("tr",null,[w,Object(r["createVNode"])("td",null,[!1===Z.order.is_paid?(Object(r["openBlock"])(),Object(r["createBlock"])("span",_,"未付款")):(Object(r["openBlock"])(),Object(r["createBlock"])("span",k,"已付款"))])])])])):Object(r["createCommentVNode"])("",!0)])])]),!1===Z.order.is_paid?(Object(r["openBlock"])(),Object(r["createBlock"])("div",B,[Object(r["createVNode"])(M,{to:"/form",class:"btn btn-outline-dark d-flex align-items-center"},{default:Object(r["withCtx"])((function(){return[D,S]})),_:1}),Object(r["createVNode"])("button",{class:"btn btn--warning d-flex align-items-center",onClick:t[1]||(t[1]=function(){return J.pay&&J.pay.apply(J,arguments)})},[C,T])])):Object(r["createCommentVNode"])("",!0),!0===Z.order.is_paid?(Object(r["openBlock"])(),Object(r["createBlock"])("div",$,[Object(r["createVNode"])(M,{to:"/products",class:"btn btn-primary d-flex align-items-center"},{default:Object(r["withCtx"])((function(){return[q,E]})),_:1})])):Object(r["createCommentVNode"])("",!0)])])])}c("99af"),c("159b"),c("4fad");var Z={data:function(){return{order:{},order_id:"",product_id:[],products:[]}},methods:{getOrder:function(){var e=this;console.log(this.$route);var t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("uy_neish","/order/").concat(this.$route.query.order_id);this.axios.get(t).then((function(t){e.product_id=[],e.products=[],console.log(t.data.order),e.order=t.data.order,e.order_id=e.$route.query.order_id,Object.entries(e.order.products).forEach((function(t){e.products.push(t)})),e.product_id.forEach((function(t){e.products.push(e.order.products[t])})),console.log(e.products)})).catch((function(e){return console.log(e)}))},pay:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("uy_neish","/pay/").concat(this.$route.query.order_id);this.axios.post(t).then((function(t){console.log(t),e.$swal({title:"已成功結帳",icon:"success"}),e.getOrder()})).catch((function(e){return console.log(e)}))},timestampToDate:function(e){if(e){var t=new Date(1e3*e);return"".concat(t.getFullYear(),"-").concat(this.adjustZero(t.getMonth()+1),"-").concat(this.adjustZero(t.getDate()))}},adjustZero:function(e){return e<10?"0".concat(e):"".concat(e)}},created:function(){this.getOrder()}};Z.render=F;t["default"]=Z},8418:function(e,t,c){"use strict";var r=c("c04e"),o=c("9bf2"),a=c("5c6c");e.exports=function(e,t,c){var n=r(t);n in e?o.f(e,n,a(0,c)):e[n]=c}},"99af":function(e,t,c){"use strict";var r=c("23e7"),o=c("d039"),a=c("e8b5"),n=c("861d"),s=c("7b0b"),l=c("50c4"),d=c("8418"),i=c("65f0"),b=c("1dde"),u=c("b622"),p=c("2d00"),j=u("isConcatSpreadable"),O=9007199254740991,f="Maximum allowed index exceeded",h=p>=51||!o((function(){var e=[];return e[j]=!1,e.concat()[0]!==e})),N=b("concat"),V=function(e){if(!n(e))return!1;var t=e[j];return void 0!==t?!!t:a(e)},g=!h||!N;r({target:"Array",proto:!0,forced:g},{concat:function(e){var t,c,r,o,a,n=s(this),b=i(n,0),u=0;for(t=-1,r=arguments.length;t<r;t++)if(a=-1===t?n:arguments[t],V(a)){if(o=l(a.length),u+o>O)throw TypeError(f);for(c=0;c<o;c++,u++)c in a&&d(b,u,a[c])}else{if(u>=O)throw TypeError(f);d(b,u++,a)}return b.length=u,b}})},b0c0:function(e,t,c){var r=c("83ab"),o=c("9bf2").f,a=Function.prototype,n=a.toString,s=/^\s*function ([^ (]*)/,l="name";r&&!(l in a)&&o(a,l,{configurable:!0,get:function(){try{return n.call(this).match(s)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-2119b41e.d2ae38d7.js.map