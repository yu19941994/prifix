(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b93814f8"],{"1dde":function(e,t,c){var r=c("d039"),o=c("b622"),a=c("2d00"),n=o("species");e.exports=function(e){return a>=51||!r((function(){var t=[],c=t.constructor={};return c[n]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},2532:function(e,t,c){"use strict";var r=c("23e7"),o=c("5a34"),a=c("1d80"),n=c("ab13");r({target:"String",proto:!0,forced:!n("includes")},{includes:function(e){return!!~String(a(this)).indexOf(o(e),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(e,t,c){var r=c("861d"),o=c("c6b6"),a=c("b622"),n=a("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[n])?!!t:"RegExp"==o(e))}},"4f6b":function(e,t,c){"use strict";c.r(t);c("caad"),c("2532");var r=c("7a23"),o=Object(r["createVNode"])("div",{class:"loadingio-spinner-ellipsis-m5cks5164gn"},[Object(r["createVNode"])("div",{class:"ldio-ujuwlnkwpj"},[Object(r["createVNode"])("div"),Object(r["createVNode"])("div"),Object(r["createVNode"])("div"),Object(r["createVNode"])("div"),Object(r["createVNode"])("div")])],-1),a=Object(r["createStaticVNode"])('<div class="bg__save__banner mb-2"><div class="row d-flex justify-content-center align-items-center h-100"><div class="col-6 col-lg-4"><div class="bg-light py-2 py-sm-4 rounded opacity__banner"><h2 class="text-center font--banner mb-0">我的珍藏</h2></div></div></div></div>',1),n={class:"container py-5"},i={"aria-label":"breadcrumb mb-3"},s={class:"breadcrumb"},d={class:"breadcrumb-item"},l=Object(r["createTextVNode"])("首頁"),u=Object(r["createVNode"])("li",{class:"breadcrumb-item active","aria-current":"page"},"我的珍藏",-1),b={class:"py-5"},f={class:"bg--light box--shadow rounded p-4 mb-5"},p={class:"row d-flex list-unstyled"},v={class:"card position-relative box--shadow"},g={key:0,class:"material-icons text-danger"},h={key:1,class:"material-icons text-white"},j={class:"badge bg-warning text-white position-absolute top--10 start--10 zindex--cat d-flex"},O={class:"p-3"},m={class:"card-body pt-1"},x={class:"card-title text-center h5"},y={class:"card-text text-center h5 fw-bolder"},N={class:"d-flex justify-content-between"},V=Object(r["createVNode"])("a",{href:"#",class:"btn btn-primary d-flex align-items-center"},[Object(r["createVNode"])("span",{class:"material-icons font--sm"}," shopping_basket "),Object(r["createTextVNode"])(" 放購物車 ")],-1),k=Object(r["createVNode"])("span",{class:"material-icons font--sm"}," settings_suggest ",-1),w=Object(r["createTextVNode"])(" 商品詳細 ");function _(e,t,c,_,B,F){var S=Object(r["resolveComponent"])("loading"),C=Object(r["resolveComponent"])("router-link");return Object(r["openBlock"])(),Object(r["createBlock"])("div",null,[Object(r["createVNode"])(S,{active:B.isLoading,"onUpdate:active":t[1]||(t[1]=function(e){return B.isLoading=e}),"is-full-page":B.fullPage},{default:Object(r["withCtx"])((function(){return[o]})),_:1},8,["active","is-full-page"]),a,Object(r["createVNode"])("div",n,[Object(r["createVNode"])("nav",i,[Object(r["createVNode"])("ol",s,[Object(r["createVNode"])("li",d,[Object(r["createVNode"])(C,{to:"/",class:"text-secondary text-decoration-none"},{default:Object(r["withCtx"])((function(){return[l]})),_:1})]),u])]),Object(r["createVNode"])("div",b,[Object(r["createVNode"])("div",f,[Object(r["createVNode"])("ul",p,[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(F.filterProducts,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])("li",{class:"col-12 col-md-6 col-lg-4 mb-3",key:e.id},[Object(r["createVNode"])("div",v,[Object(r["createVNode"])("button",{class:"btn btn-dark top-0 end-0 zindex--cat position-absolute border-0",onClick:function(t){return F.addFavoriteHandler(e)}},[B.myFavorite.includes(e.id)?(Object(r["openBlock"])(),Object(r["createBlock"])("span",g,"bookmark")):(Object(r["openBlock"])(),Object(r["createBlock"])("span",h,"bookmark"))],8,["onClick"]),Object(r["createVNode"])("span",j,Object(r["toDisplayString"])(e.category),1),Object(r["createVNode"])("div",O,[Object(r["createVNode"])(C,{class:"img__card__suggest overflow-hidden position-relative d-block",to:"/productDetail/".concat(e.id)},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])("img",{src:e.imageUrl,class:"card-img-top img__card__suggest__inside",alt:"..."},null,8,["src"])]})),_:2},1032,["to"])]),Object(r["createVNode"])("div",m,[Object(r["createVNode"])("h3",x,Object(r["toDisplayString"])(e.title),1),Object(r["createVNode"])("p",y,"$"+Object(r["toDisplayString"])(e.price),1),Object(r["createVNode"])("div",N,[V,Object(r["createVNode"])(C,{href:"#",class:"btn btn-secondary d-flex align-items-center",to:"/productDetail/".concat(e.id)},{default:Object(r["withCtx"])((function(){return[k,w]})),_:2},1032,["to"])])])])])})),128))])])])])])}c("a434"),c("99af"),c("159b");var B=c("9062"),F=c.n(B),S={save:function(e){var t=JSON.stringify(e);localStorage.setItem("favorite",t)},get:function(){return JSON.parse(localStorage.getItem("favorite"))}},C={components:{Loading:F.a},data:function(){return{isLoading:!1,fullPage:!0,myFavorite:S.get()||[],products:[]}},methods:{addFavoriteHandler:function(e){console.log("favorite"),this.myFavorite.includes(e.id)?this.myFavorite.splice(this.myFavorite.indexOf(e.id),1):this.myFavorite.push(e.id),S.save(this.myFavorite)},getAllProducts:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("uy_neish","/products/all");this.axios.get(t).then((function(t){e.isLoading=!1,console.log(t),t.data.success&&(e.products=t.data.products)})).catch((function(e){return console.log(e)}))}},computed:{filterProducts:function(){var e=this,t=[];return this.products.forEach((function(c){e.myFavorite.includes(c.id)&&t.push(c)})),t}},created:function(){this.getAllProducts()}};C.render=_;t["default"]=C},"5a34":function(e,t,c){var r=c("44e7");e.exports=function(e){if(r(e))throw TypeError("The method doesn't accept regular expressions");return e}},8418:function(e,t,c){"use strict";var r=c("c04e"),o=c("9bf2"),a=c("5c6c");e.exports=function(e,t,c){var n=r(t);n in e?o.f(e,n,a(0,c)):e[n]=c}},"99af":function(e,t,c){"use strict";var r=c("23e7"),o=c("d039"),a=c("e8b5"),n=c("861d"),i=c("7b0b"),s=c("50c4"),d=c("8418"),l=c("65f0"),u=c("1dde"),b=c("b622"),f=c("2d00"),p=b("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",h=f>=51||!o((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),j=u("concat"),O=function(e){if(!n(e))return!1;var t=e[p];return void 0!==t?!!t:a(e)},m=!h||!j;r({target:"Array",proto:!0,forced:m},{concat:function(e){var t,c,r,o,a,n=i(this),u=l(n,0),b=0;for(t=-1,r=arguments.length;t<r;t++)if(a=-1===t?n:arguments[t],O(a)){if(o=s(a.length),b+o>v)throw TypeError(g);for(c=0;c<o;c++,b++)c in a&&d(u,b,a[c])}else{if(b>=v)throw TypeError(g);d(u,b++,a)}return u.length=b,u}})},a434:function(e,t,c){"use strict";var r=c("23e7"),o=c("23cb"),a=c("a691"),n=c("50c4"),i=c("7b0b"),s=c("65f0"),d=c("8418"),l=c("1dde"),u=l("splice"),b=Math.max,f=Math.min,p=9007199254740991,v="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!u},{splice:function(e,t){var c,r,l,u,g,h,j=i(this),O=n(j.length),m=o(e,O),x=arguments.length;if(0===x?c=r=0:1===x?(c=0,r=O-m):(c=x-2,r=f(b(a(t),0),O-m)),O+c-r>p)throw TypeError(v);for(l=s(j,r),u=0;u<r;u++)g=m+u,g in j&&d(l,u,j[g]);if(l.length=r,c<r){for(u=m;u<O-r;u++)g=u+r,h=u+c,g in j?j[h]=j[g]:delete j[h];for(u=O;u>O-r+c;u--)delete j[u-1]}else if(c>r)for(u=O-r;u>m;u--)g=u+r-1,h=u+c-1,g in j?j[h]=j[g]:delete j[h];for(u=0;u<c;u++)j[u+m]=arguments[u+2];return j.length=O-r+c,l}})},ab13:function(e,t,c){var r=c("b622"),o=r("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(c){try{return t[o]=!1,"/./"[e](t)}catch(r){}}return!1}},caad:function(e,t,c){"use strict";var r=c("23e7"),o=c("4d64").includes,a=c("44d2");r({target:"Array",proto:!0},{includes:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),a("includes")}}]);
//# sourceMappingURL=chunk-b93814f8.007a9ce5.js.map