(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10a7e935"],{"1dde":function(e,t,o){var a=o("d039"),n=o("b622"),c=o("2d00"),r=n("species");e.exports=function(e){return c>=51||!a((function(){var t=[],o=t.constructor={};return o[r]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},8418:function(e,t,o){"use strict";var a=o("c04e"),n=o("9bf2"),c=o("5c6c");e.exports=function(e,t,o){var r=a(t);r in e?n.f(e,r,c(0,o)):e[r]=o}},"99af":function(e,t,o){"use strict";var a=o("23e7"),n=o("d039"),c=o("e8b5"),r=o("861d"),i=o("7b0b"),s=o("50c4"),l=o("8418"),d=o("65f0"),u=o("1dde"),b=o("b622"),f=o("2d00"),p=b("isConcatSpreadable"),v=9007199254740991,h="Maximum allowed index exceeded",m=f>=51||!n((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),j=u("concat"),O=function(e){if(!r(e))return!1;var t=e[p];return void 0!==t?!!t:c(e)},x=!m||!j;a({target:"Array",proto:!0,forced:x},{concat:function(e){var t,o,a,n,c,r=i(this),u=d(r,0),b=0;for(t=-1,a=arguments.length;t<a;t++)if(c=-1===t?r:arguments[t],O(c)){if(n=s(c.length),b+n>v)throw TypeError(h);for(o=0;o<n;o++,b++)o in c&&l(u,b,c[o])}else{if(b>=v)throw TypeError(h);l(u,b++,c)}return u.length=b,u}})},de8a:function(e,t,o){"use strict";o.r(t);var a=o("7a23"),n={class:"front"},c=Object(a["createVNode"])("div",{class:"loadingio-spinner-ellipsis-m5cks5164gn"},[Object(a["createVNode"])("div",{class:"ldio-ujuwlnkwpj"},[Object(a["createVNode"])("div"),Object(a["createVNode"])("div"),Object(a["createVNode"])("div"),Object(a["createVNode"])("div"),Object(a["createVNode"])("div")])],-1),r={class:"content"};function i(e,t,o,i,s,l){var d=Object(a["resolveComponent"])("loading"),u=Object(a["resolveComponent"])("Navbar"),b=Object(a["resolveComponent"])("router-view"),f=Object(a["resolveComponent"])("Footer");return Object(a["openBlock"])(),Object(a["createBlock"])("div",n,[Object(a["createVNode"])(d,{active:s.isLoading,"onUpdate:active":t[1]||(t[1]=function(e){return s.isLoading=e}),"is-full-page":s.fullPage},{default:Object(a["withCtx"])((function(){return[c]})),_:1},8,["active","is-full-page"]),Object(a["createVNode"])(u,{carts:s.carts},null,8,["carts"]),Object(a["createVNode"])("div",r,[Object(a["createVNode"])(b,{onGotoTop:l.goToTop,onAddCart:l.addCart,onGetCart:l.getCarts,carts:s.carts,"final-total":s.finalTotal,total:s.total,onOnSubmit:l.onSubmit},null,8,["onGotoTop","onAddCart","onGetCart","carts","final-total","total","onOnSubmit"]),Object(a["createVNode"])(f,{onGotoTop:l.goToTop},null,8,["onGotoTop"])])])}o("99af");var s={class:"navbar navbar-expand-lg navbar-light bg-white fix-top zindex__banner"},l={class:"container-fluid"},d=Object(a["createVNode"])("h1",{class:"px-2"},[Object(a["createVNode"])("a",{class:"navbar-brand textindent__title d-block",href:"#"})],-1),u=Object(a["createVNode"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(a["createVNode"])("span",{class:"navbar-toggler-icon"})],-1),b={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},f={class:"navbar-nav list-unstyled ms-auto d-flex align-items-center"},p={class:"nav-item px-2"},v={class:"nav-item px-2"},h={class:"nav-item px-2"},m={class:"nav-item px-2 position-relative"},j={key:0,class:"bg-danger p--circle rounded-circle text-center font--xs position-absolute end--4"};function O(e,t,o,n,c,r){var i=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(),Object(a["createBlock"])("nav",s,[Object(a["createVNode"])("div",l,[d,u,Object(a["createVNode"])("div",b,[Object(a["createVNode"])("ul",f,[Object(a["createVNode"])("li",p,[Object(a["createVNode"])(i,{to:"/products",class:"text-decoration-none"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])("span",{class:["nav__home nav-link font__menu",{active:"p"===c.choose}],onClick:t[1]||(t[1]=function(e){return c.choose="p"})},"影音商品",2)]})),_:1})]),Object(a["createVNode"])("li",v,[Object(a["createVNode"])(i,{to:"/coupon",class:"text-decoration-none"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])("span",{class:["nav__home nav-link font__menu",{active:"c"===c.choose}],onClick:t[2]||(t[2]=function(e){return c.choose="c"})},"優惠活動",2)]})),_:1})]),Object(a["createVNode"])("li",h,[Object(a["createVNode"])(i,{to:"/save",class:"nav-link text-decoration-none"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])("span",{class:["material-icons nav__home",{active:"save"===c.choose}],onClick:t[3]||(t[3]=function(e){return c.choose="save"})},"bookmark",2)]})),_:1})]),Object(a["createVNode"])("li",m,[0!==o.carts.length?(Object(a["openBlock"])(),Object(a["createBlock"])("div",j,Object(a["toDisplayString"])(o.carts.length),1)):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])(i,{to:"/cart",class:"nav-link text-decoration-none"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])("span",{class:["material-icons nav__home",{active:"cart"===c.choose}],onClick:t[4]||(t[4]=function(e){return c.choose="cart"})},"shopping_cart",2)]})),_:1})])])])])])}var x={props:["carts"],data:function(){return{choose:""}}};x.render=O;var g=x,N={class:"bg--light py-5"},V=Object(a["createVNode"])("h2",{class:"h4 text-center py-2 px-3"},"訂閱 PRIFIX ，接收最新影音及平權訊息！",-1),_={class:"row d-flex justify-content-center"},w={class:"col-8 col-md-6"},k={class:"input-group mb-3"},C=Object(a["createVNode"])("label",{for:"email"},null,-1),y=Object(a["createVNode"])("button",{class:"btn btn-primary",type:"button",id:"subscribeEmail"},"訂閱",-1),T={class:"bg--dark__100 py-3 position-relative"},S=Object(a["createVNode"])("span",{class:"material-icons text--brown"},"navigation",-1),L={class:"container-lg"},B={class:"list-unstyled d-flex justify-content-evenly"},A=Object(a["createVNode"])("span",{class:"nav__home nav-link active font__menu text-white"},"首頁",-1),F=Object(a["createVNode"])("span",{class:"nav__home nav-link font__menu text-white"},"影音商品",-1),G=Object(a["createVNode"])("span",{class:"nav__home nav-link font__menu text-white"},"優惠活動",-1),$=Object(a["createVNode"])("span",{class:"nav__home nav-link font__menu text-white"},"購物車",-1),M=Object(a["createStaticVNode"])('<ul class="list-unstyled d-flex flex-column align-items-center mb-3"><li><a href="#" class="text-decoration-none text-white font--sm">住址：台北市松山區民生東路五段184號</a></li><li><a href="tel:+026666123" class="text-decoration-none text-white font--sm">電話：02-666-6123</a></li><li><a href="mailto:prifix@gmail.com" class="text-decoration-none text-white font--sm">電子信箱：prifix@gmail.com</a></li></ul><div class="row d-flex justify-content-center"><div class="col-4"><ul class="list-unstyled d-flex justify-content-evenly"><li><a href="https://www.facebook.com/yu19941994" class="text-decoraion-none text-white font--sm btn"><span class="material-icons">facebook</span></a></li><li><a href="#" class="text-decoraion-none text-white font--sm btn"><span class="material-icons">smart_display</span></a></li><li><a href="#" class="text-decoraion-none text-white font--sm btn"><span class="material-icons">near_me</span></a></li><li><a href="#" class="text-decoraion-none text-white font--sm btn"><span class="material-icons">chat</span></a></li></ul></div></div>',2),q={class:"bg--black py-3"},E={class:"text-center text-white font--sm d-flex justify-content-center align-items-center flex-column flex-sm-row"},I=Object(a["createVNode"])("span",{class:"me-2 mb-2 mb-sm-0"},"Copyright © 2021 HsienYu 個人作業使用，無商業行為",-1),P=Object(a["createVNode"])("span",{class:"material-icons me-1"},"face",-1),J=Object(a["createVNode"])("span",null,"進入後台",-1);function z(e,t,o,n,c,r){var i=Object(a["resolveComponent"])("Field"),s=Object(a["resolveComponent"])("Form"),l=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])("div",N,[V,Object(a["createVNode"])("div",_,[Object(a["createVNode"])("div",w,[Object(a["createVNode"])(s,{ref:"form",onSubmit:r.onSubmit},{default:Object(a["withCtx"])((function(e){var t=e.errors;return[Object(a["createVNode"])("div",k,[C,Object(a["createVNode"])(i,{class:["form-control rounded",{"is-invalid":t["email"]}],placeholder:"請輸入電子信箱",id:"email",name:"email",rules:"email|required"},null,8,["class"]),y])]})),_:1},8,["onSubmit"])])])]),Object(a["createVNode"])("footer",null,[Object(a["createVNode"])("div",T,[Object(a["createVNode"])("button",{class:"btn btn--warning position-absolute bottom--10 end--10 py-1 px-2",onClick:t[1]||(t[1]=function(t){return e.$emit("goto-top",!0)})},[S]),Object(a["createVNode"])("div",L,[Object(a["createVNode"])("ul",B,[Object(a["createVNode"])("li",null,[Object(a["createVNode"])(l,{to:"/","aria-current":"page",class:"text-decoration-none"},{default:Object(a["withCtx"])((function(){return[A]})),_:1})]),Object(a["createVNode"])("li",null,[Object(a["createVNode"])(l,{to:"/products",class:"text-decoration-none"},{default:Object(a["withCtx"])((function(){return[F]})),_:1})]),Object(a["createVNode"])("li",null,[Object(a["createVNode"])(l,{to:"/coupon",class:"text-decoration-none"},{default:Object(a["withCtx"])((function(){return[G]})),_:1})]),Object(a["createVNode"])("li",null,[Object(a["createVNode"])(l,{to:"/cart",class:"text-decoration-none"},{default:Object(a["withCtx"])((function(){return[$]})),_:1})])]),M])]),Object(a["createVNode"])("div",q,[Object(a["createVNode"])("div",E,[I,Object(a["createVNode"])(l,{to:"/admin",class:"btn btn-outline-light btn-sm d-flex align-items-center"},{default:Object(a["withCtx"])((function(){return[P,J]})),_:1})])])])],64)}var D={emits:["goto-top"],methods:{onSubmit:function(){console.log("ya")}}};D.render=z;var H=D,R=o("9062"),U=o.n(R),X={components:{Navbar:g,Footer:H,Loading:U.a},data:function(){return{isLoading:!1,fullPage:!0,carts:[],finalTotal:0,total:0}},methods:{goToTop:function(e){window.scrollTo({top:0,behavior:e?"smooth":"auto"})},addCart:function(e,t){var o=this;this.isLoading=!0;var a="".concat("https://vue3-course-api.hexschool.io","/api/").concat("uy_neish","/cart");this.axios.post(a,{data:{product_id:e.id,qty:t}}).then((function(e){o.isLoading=!1,console.log(e),e.data.success&&(o.$swal({title:"成功加入購物車",icon:"success"}),o.getCarts())})).catch((function(e){return console.log(e)}))},getCarts:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("uy_neish","/cart");this.axios.get(t).then((function(t){e.isLoading=!1,console.log(t),t.data.success&&(e.carts=t.data.data.carts,e.finalTotal=t.data.data.final_total,e.total=t.data.data.total)}))},onSubmit:function(e){var t=this;this.isLoading=!0,console.log(this.form);var o="".concat("https://vue3-course-api.hexschool.io","/api/").concat("uy_neish","/order");this.$http.post(o,{data:e}).then((function(e){t.isLoading=!1,e.data.success&&(console.log(e),t.$swal({title:"已成功建立訂單",icon:"success"}),t.$router.push({name:"paid",query:{order_id:e.data.orderId}}),t.getCarts())})).catch((function(e){return console.log(e)}))}},mounted:function(){this.goToTop(!1)},created:function(){this.getCarts()}};X.render=i;t["default"]=X}}]);
//# sourceMappingURL=chunk-10a7e935.0c2ac244.js.map