(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23edbdf3"],{"107c":function(e,t,c){var r=c("d039");e.exports=r((function(){var e=RegExp("(?<a>b)","string".charAt(5));return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"14c3":function(e,t,c){var r=c("c6b6"),n=c("9263");e.exports=function(e,t){var c=e.exec;if("function"===typeof c){var a=c.call(e,t);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return n.call(e,t)}},1799:function(e,t,c){"use strict";var r=c("7a23"),n={"aria-label":"Page navigation"},a={class:"pagination justify-content-center"},o=Object(r["createVNode"])("span",{"aria-hidden":"true"},"«",-1),i=Object(r["createVNode"])("span",{"aria-hidden":"true"},"»",-1);function s(e,t,c,s,l,d){return Object(r["openBlock"])(),Object(r["createBlock"])("nav",n,[Object(r["createVNode"])("ul",a,[Object(r["createVNode"])("li",{class:["page-item",{disabled:!c.page.has_pre}]},[Object(r["createVNode"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[1]||(t[1]=Object(r["withModifiers"])((function(t){return e.$emit("get-page",c.page.current_page-1)}),["prevent"]))},[o])],2),(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(c.page.total_pages,(function(t){return Object(r["openBlock"])(),Object(r["createBlock"])("li",{class:["page-item",{active:t===c.page.current_page}],key:t},[Object(r["createVNode"])("a",{class:"page-link",href:"#",onClick:Object(r["withModifiers"])((function(c){return e.$emit("get-page",t)}),["prevent"])},Object(r["toDisplayString"])(t),9,["onClick"])],2)})),128)),Object(r["createVNode"])("li",{class:["page-item",{disabled:!c.page.has_next}]},[Object(r["createVNode"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[2]||(t[2]=Object(r["withModifiers"])((function(t){return e.$emit("get-page",c.page.current_page+1)}),["prevent"]))},[i])],2)])])}var l={props:["page"]};l.render=s;t["a"]=l},"1dde":function(e,t,c){var r=c("d039"),n=c("b622"),a=c("2d00"),o=n("species");e.exports=function(e){return a>=51||!r((function(){var t=[],c=t.constructor={};return c[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},2532:function(e,t,c){"use strict";var r=c("23e7"),n=c("5a34"),a=c("1d80"),o=c("ab13");r({target:"String",proto:!0,forced:!o("includes")},{includes:function(e){return!!~String(a(this)).indexOf(n(e),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(e,t,c){var r=c("861d"),n=c("c6b6"),a=c("b622"),o=a("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==n(e))}},"4de4":function(e,t,c){"use strict";var r=c("23e7"),n=c("b727").filter,a=c("1dde"),o=a("filter");r({target:"Array",proto:!0,forced:!o},{filter:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},"5a34":function(e,t,c){var r=c("44e7");e.exports=function(e){if(r(e))throw TypeError("The method doesn't accept regular expressions");return e}},"5d74":function(e,t,c){"use strict";c.r(t);c("ac1f"),c("841c"),c("caad"),c("2532");var r=c("7a23"),n=Object(r["createStaticVNode"])('<div class="bg__product__banner mb-5"><div class="row d-flex justify-content-center align-items-center h-100 mx-0"><div class="col-6 col-lg-4"><div class="bg-light py-2 py-sm-4 rounded opacity__banner"><h2 class="text-center font--banner mb-0">影音商品</h2></div></div></div></div>',1),a={class:"container-lg"},o={"aria-label":"breadcrumb mb-3"},i={class:"breadcrumb"},s={class:"breadcrumb-item"},l=Object(r["createTextVNode"])("首頁"),d={class:"breadcrumb-item"},u=Object(r["createTextVNode"])("影音商品"),f=Object(r["createVNode"])("li",{class:"breadcrumb-item active","aria-current":"page"},"全部商品",-1),b={class:"container-lg"},p={class:"row"},g={class:"col-12 col-md-3 mb-4 mb-md-0"},h={class:"list-unstyled list-group position-sticky top--list d-none d-md-block"},v={class:"col-12 col-md-9"},O={class:"d-flex justify-content-end"},j={class:"input-group mb-3 w--search"},x=Object(r["createVNode"])("label",{for:"videoName"},null,-1),m={class:"row list-unstyled"},y={class:"card position-relative box--shadow"},k={key:0,class:"material-icons text-danger"},N={key:1,class:"material-icons text-white"},V={class:"badge bg-secondary text-white position-absolute top-0 start-0 zindex--cat d-flex p-2"},w={class:"mb-2"},_={class:"card-body pt-1"},B={class:"card-title text-center h5"},C={class:"card-text text-center h5 fw-bolder"},P={class:"d-flex justify-content-between"},E=Object(r["createVNode"])("span",{class:"material-icons font--sm"}," shopping_basket ",-1),I=Object(r["createTextVNode"])(" 放購物車 "),S=Object(r["createVNode"])("span",{class:"material-icons font--sm"}," settings_suggest ",-1),L=Object(r["createTextVNode"])(" 商品詳細 "),R={class:"d-flex justify-content-end"};function T(e,t,c,T,F,A){var D=Object(r["resolveComponent"])("loading"),M=Object(r["resolveComponent"])("router-link"),U=Object(r["resolveComponent"])("Pagination");return Object(r["openBlock"])(),Object(r["createBlock"])("div",null,[Object(r["createVNode"])(D,{active:F.isLoading,"onUpdate:active":t[1]||(t[1]=function(e){return F.isLoading=e}),"is-full-page":F.fullPage},null,8,["active","is-full-page"]),n,Object(r["createVNode"])("div",a,[Object(r["createVNode"])("nav",o,[Object(r["createVNode"])("ol",i,[Object(r["createVNode"])("li",s,[Object(r["createVNode"])(M,{to:"/",class:"text-secondary text-decoration-none"},{default:Object(r["withCtx"])((function(){return[l]})),_:1})]),Object(r["createVNode"])("li",d,[Object(r["createVNode"])(M,{to:"/products",class:"text-secondary text-decoration-none"},{default:Object(r["withCtx"])((function(){return[u]})),_:1})]),f])])]),Object(r["createVNode"])("div",b,[Object(r["createVNode"])("div",p,[Object(r["createVNode"])("div",g,[Object(r["createVNode"])("ul",h,[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(F.category,(function(e,t,c){return Object(r["openBlock"])(),Object(r["createBlock"])("li",{class:["list-group-item border border-dark hover--cat",{active:F.choose===t}],key:c},[Object(r["createVNode"])("a",{class:"text-decoration-none text-dark text-center mb-0 d-block",href:"#",onClick:Object(r["withModifiers"])((function(e){return A.chooseHandler(t)}),["prevent"])},Object(r["toDisplayString"])(t)+"（"+Object(r["toDisplayString"])(e)+"）",9,["onClick"])],2)})),128))])]),Object(r["createVNode"])("div",v,[Object(r["createVNode"])("div",O,[Object(r["createVNode"])("div",j,[x,Object(r["withDirectives"])(Object(r["createVNode"])("input",{type:"text",class:"form-control rounded",placeholder:"🔍  請輸入片名","aria-label":"videoName","aria-describedby":"button",id:"videoName","onUpdate:modelValue":t[2]||(t[2]=function(e){return F.search=e})},null,512),[[r["vModelText"],F.search]])])]),Object(r["createVNode"])("select",{name:"list",id:"list",onChange:t[3]||(t[3]=function(e){return A.selectHandler(e)}),class:"form-select d-md-none border-1 border-dark mb-5","aria-label":"list select"},[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(F.category,(function(e,t,c){return Object(r["openBlock"])(),Object(r["createBlock"])("option",{value:t,key:c},Object(r["toDisplayString"])(t),9,["value"])})),128))],32),Object(r["createVNode"])("ul",m,[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(A.searchProducts,(function(t){return Object(r["openBlock"])(),Object(r["createBlock"])("li",{class:"col-12 col-sm-6 col-xl-4 mb-3",key:t.id},[Object(r["createVNode"])("div",y,[Object(r["createVNode"])("button",{class:"btn bg-transparent text-white top-0 end-0 zindex--cat position-absolute border-0",onClick:function(e){return A.addFavoriteHandler(t)},type:"button"},[F.myFavorite.includes(t.id)?(Object(r["openBlock"])(),Object(r["createBlock"])("span",k,"bookmark")):(Object(r["openBlock"])(),Object(r["createBlock"])("span",N,"bookmark"))],8,["onClick"]),Object(r["createVNode"])("span",V,Object(r["toDisplayString"])(t.category),1),Object(r["createVNode"])("div",w,[Object(r["createVNode"])(M,{class:"img__card__products overflow-hidden position-relative d-block",to:"/productDetail/".concat(t.id)},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])("img",{src:t.imageUrl,class:"card-img-top img__card__products__inside",alt:"..."},null,8,["src"])]})),_:2},1032,["to"])]),Object(r["createVNode"])("div",_,[Object(r["createVNode"])("h3",B,Object(r["toDisplayString"])(t.title),1),Object(r["createVNode"])("p",C,"$"+Object(r["toDisplayString"])(t.price),1),Object(r["createVNode"])("div",P,[Object(r["createVNode"])("a",{href:"#",class:"btn btn-primary d-flex align-items-center",onClick:Object(r["withModifiers"])((function(c){return e.$emit("add-cart",t,1)}),["prevent"])},[E,I],8,["onClick"]),Object(r["createVNode"])(M,{href:"#",class:"btn btn-secondary d-flex align-items-center",to:"/productDetail/".concat(t.id)},{default:Object(r["withCtx"])((function(){return[S,L]})),_:2},1032,["to"])])])])])})),128))]),Object(r["createVNode"])("div",R,[""===F.search&&"全部商品"===F.choose?(Object(r["openBlock"])(),Object(r["createBlock"])(U,{key:0,page:F.pagination,onGetPage:A.getProducts},null,8,["page","onGetPage"])):Object(r["createCommentVNode"])("",!0)])])])])])}c("a434"),c("99af"),c("159b"),c("4de4");var F=c("1799"),A=c("7ccb"),D={save:function(e){var t=JSON.stringify(e);localStorage.setItem("favorite",t)},get:function(){return JSON.parse(localStorage.getItem("favorite"))}},M={components:{Pagination:F["a"],Loading:A["a"]},data:function(){return{products:[],category:{},choose:"全部商品",productWithPagination:[],pagination:{},search:"",buyNum:1,isLoading:!1,fullPage:!0,myFavorite:D.get()||[]}},methods:{addFavoriteHandler:function(e){this.myFavorite.includes(e.id)?this.myFavorite.splice(this.myFavorite.indexOf(e.id),1):this.myFavorite.push(e.id),D.save(this.myFavorite)},getAllProducts:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("uy_neish","/products/all");this.axios.get(t).then((function(t){e.isLoading=!1,t.data.success&&(e.products=t.data.products,e.calculateCategories())})).catch((function(e){return console.log(e)}))},getProducts:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("uy_neish","/products?page=").concat(t);this.axios.get(c).then((function(t){e.isLoading=!1,t.data.success&&(e.$emit("goto-top",!1),e.productWithPagination=t.data.products,e.pagination=t.data.pagination)})).catch((function(e){return console.log(e)}))},calculateCategories:function(){var e=this;this.category["全部商品"]=this.products.length,this.products.forEach((function(t){var c=t.category;c in e.category?e.category[c]++:e.category[c]=1}))},chooseHandler:function(e){this.choose=e},selectHandler:function(e){this.choose=e.target.value}},computed:{filterProducts:function(){var e=this;return"全部商品"===this.choose?this.productWithPagination:this.products.filter((function(t){return t.category===e.choose}))},searchProducts:function(){var e=this;return""!==this.search?this.filterProducts===this.productWithPagination?this.products.filter((function(t){return t.title.toLowerCase().includes(e.search.toLowerCase())})):this.filterProducts.filter((function(t){return t.title.toLowerCase().includes(e.search.toLowerCase())})):this.filterProducts}},created:function(){this.getAllProducts(),this.getProducts()}};M.render=T;t["default"]=M},"7ccb":function(e,t,c){"use strict";var r=c("7a23"),n=Object(r["createVNode"])("div",{class:"loadingio-spinner-ellipsis-m5cks5164gn"},[Object(r["createVNode"])("div",{class:"ldio-ujuwlnkwpj"},[Object(r["createVNode"])("div"),Object(r["createVNode"])("div"),Object(r["createVNode"])("div"),Object(r["createVNode"])("div"),Object(r["createVNode"])("div")])],-1);function a(e,t,c,a,o,i){var s=Object(r["resolveComponent"])("loading",!0);return Object(r["openBlock"])(),Object(r["createBlock"])(s,{active:e.isLoading,"onUpdate:active":t[1]||(t[1]=function(t){return e.isLoading=t}),"is-full-page":e.fullPage},{default:Object(r["withCtx"])((function(){return[n]})),_:1},8,["active","is-full-page"])}var o=c("9062"),i=c.n(o),s={components:{Loading:i.a}};s.render=a;t["a"]=s},8418:function(e,t,c){"use strict";var r=c("c04e"),n=c("9bf2"),a=c("5c6c");e.exports=function(e,t,c){var o=r(t);o in e?n.f(e,o,a(0,c)):e[o]=c}},"841c":function(e,t,c){"use strict";var r=c("d784"),n=c("825a"),a=c("1d80"),o=c("129f"),i=c("14c3");r("search",(function(e,t,c){return[function(t){var c=a(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,c):new RegExp(t)[e](String(c))},function(e){var r=c(t,this,e);if(r.done)return r.value;var a=n(this),s=String(e),l=a.lastIndex;o(l,0)||(a.lastIndex=0);var d=i(a,s);return o(a.lastIndex,l)||(a.lastIndex=l),null===d?-1:d.index}]}))},9263:function(e,t,c){"use strict";var r=c("ad6d"),n=c("9f7f"),a=c("5692"),o=c("7c73"),i=c("69f3").get,s=c("fce3"),l=c("107c"),d=RegExp.prototype.exec,u=a("native-string-replace",String.prototype.replace),f=d,b=function(){var e=/a/,t=/b*/g;return d.call(e,"a"),d.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),p=n.UNSUPPORTED_Y||n.BROKEN_CARET,g=void 0!==/()??/.exec("")[1],h=b||g||p||s||l;h&&(f=function(e){var t,c,n,a,s,l,h,v=this,O=i(v),j=O.raw;if(j)return j.lastIndex=v.lastIndex,t=f.call(j,e),v.lastIndex=j.lastIndex,t;var x=O.groups,m=p&&v.sticky,y=r.call(v),k=v.source,N=0,V=e;if(m&&(y=y.replace("y",""),-1===y.indexOf("g")&&(y+="g"),V=String(e).slice(v.lastIndex),v.lastIndex>0&&(!v.multiline||v.multiline&&"\n"!==e[v.lastIndex-1])&&(k="(?: "+k+")",V=" "+V,N++),c=new RegExp("^(?:"+k+")",y)),g&&(c=new RegExp("^"+k+"$(?!\\s)",y)),b&&(n=v.lastIndex),a=d.call(m?c:v,V),m?a?(a.input=a.input.slice(N),a[0]=a[0].slice(N),a.index=v.lastIndex,v.lastIndex+=a[0].length):v.lastIndex=0:b&&a&&(v.lastIndex=v.global?a.index+a[0].length:n),g&&a&&a.length>1&&u.call(a[0],c,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(a[s]=void 0)})),a&&x)for(a.groups=l=o(null),s=0;s<x.length;s++)h=x[s],l[h[0]]=a[h[1]];return a}),e.exports=f},"99af":function(e,t,c){"use strict";var r=c("23e7"),n=c("d039"),a=c("e8b5"),o=c("861d"),i=c("7b0b"),s=c("50c4"),l=c("8418"),d=c("65f0"),u=c("1dde"),f=c("b622"),b=c("2d00"),p=f("isConcatSpreadable"),g=9007199254740991,h="Maximum allowed index exceeded",v=b>=51||!n((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),O=u("concat"),j=function(e){if(!o(e))return!1;var t=e[p];return void 0!==t?!!t:a(e)},x=!v||!O;r({target:"Array",proto:!0,forced:x},{concat:function(e){var t,c,r,n,a,o=i(this),u=d(o,0),f=0;for(t=-1,r=arguments.length;t<r;t++)if(a=-1===t?o:arguments[t],j(a)){if(n=s(a.length),f+n>g)throw TypeError(h);for(c=0;c<n;c++,f++)c in a&&l(u,f,a[c])}else{if(f>=g)throw TypeError(h);l(u,f++,a)}return u.length=f,u}})},"9f7f":function(e,t,c){var r=c("d039"),n=function(e,t){return RegExp(e,t)};t.UNSUPPORTED_Y=r((function(){var e=n("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=n("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a434:function(e,t,c){"use strict";var r=c("23e7"),n=c("23cb"),a=c("a691"),o=c("50c4"),i=c("7b0b"),s=c("65f0"),l=c("8418"),d=c("1dde"),u=d("splice"),f=Math.max,b=Math.min,p=9007199254740991,g="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!u},{splice:function(e,t){var c,r,d,u,h,v,O=i(this),j=o(O.length),x=n(e,j),m=arguments.length;if(0===m?c=r=0:1===m?(c=0,r=j-x):(c=m-2,r=b(f(a(t),0),j-x)),j+c-r>p)throw TypeError(g);for(d=s(O,r),u=0;u<r;u++)h=x+u,h in O&&l(d,u,O[h]);if(d.length=r,c<r){for(u=x;u<j-r;u++)h=u+r,v=u+c,h in O?O[v]=O[h]:delete O[v];for(u=j;u>j-r+c;u--)delete O[u-1]}else if(c>r)for(u=j-r;u>x;u--)h=u+r-1,v=u+c-1,h in O?O[v]=O[h]:delete O[v];for(u=0;u<c;u++)O[u+x]=arguments[u+2];return O.length=j-r+c,d}})},ab13:function(e,t,c){var r=c("b622"),n=r("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(c){try{return t[n]=!1,"/./"[e](t)}catch(r){}}return!1}},ac1f:function(e,t,c){"use strict";var r=c("23e7"),n=c("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},ad6d:function(e,t,c){"use strict";var r=c("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},caad:function(e,t,c){"use strict";var r=c("23e7"),n=c("4d64").includes,a=c("44d2");r({target:"Array",proto:!0},{includes:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),a("includes")},d784:function(e,t,c){"use strict";c("ac1f");var r=c("6eeb"),n=c("9263"),a=c("d039"),o=c("b622"),i=c("9112"),s=o("species"),l=RegExp.prototype;e.exports=function(e,t,c,d){var u=o(e),f=!a((function(){var t={};return t[u]=function(){return 7},7!=""[e](t)})),b=f&&!a((function(){var t=!1,c=/a/;return"split"===e&&(c={},c.constructor={},c.constructor[s]=function(){return c},c.flags="",c[u]=/./[u]),c.exec=function(){return t=!0,null},c[u](""),!t}));if(!f||!b||c){var p=/./[u],g=t(u,""[e],(function(e,t,c,r,a){var o=t.exec;return o===n||o===l.exec?f&&!a?{done:!0,value:p.call(t,c,r)}:{done:!0,value:e.call(c,t,r)}:{done:!1}}));r(String.prototype,e,g[0]),r(l,u,g[1])}d&&i(l[u],"sham",!0)}},fce3:function(e,t,c){var r=c("d039");e.exports=r((function(){var e=RegExp(".","string".charAt(0));return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-23edbdf3.5544c80b.js.map