(function(e){function n(n){for(var c,r,a=n[0],f=n[1],h=n[2],i=0,d=[];i<a.length;i++)r=a[i],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(c in f)Object.prototype.hasOwnProperty.call(f,c)&&(e[c]=f[c]);l&&l(n);while(d.length)d.shift()();return u.push.apply(u,h||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],c=!0,r=1;r<t.length;r++){var a=t[r];0!==o[a]&&(c=!1)}c&&(u.splice(n--,1),e=f(f.s=t[0]))}return e}var c={},r={app:0},o={app:0},u=[];function a(e){return f.p+"js/"+({}[e]||e)+"."+{"chunk-060bc956":"4d767b1a","chunk-063a98f8":"52687aeb","chunk-71bb05fe":"596ec39d","chunk-0f431a43":"d6af802c","chunk-13cafc65":"ff842c65","chunk-17939072":"a6e7746d","chunk-2d0e5e97":"49ee90a7","chunk-3603f66e":"22c7cd08","chunk-43e85d94":"2aa44724","chunk-45f28a36":"b91d7886","chunk-7c9bc256":"a0bf8dd6","chunk-8a114076":"4fee480f","chunk-5bed4091":"816a14e7","chunk-613c4c72":"d97cbd92","chunk-7c48ede6":"0a3c304a","chunk-8a4848e8":"ac332428","chunk-9bbf6948":"0894acbf","chunk-d8616988":"b1b53e70","chunk-e3e89bb8":"39913378"}[e]+".js"}function f(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,f),t.l=!0,t.exports}f.e=function(e){var n=[],t={"chunk-43e85d94":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-060bc956":"31d6cfe0","chunk-063a98f8":"31d6cfe0","chunk-71bb05fe":"31d6cfe0","chunk-0f431a43":"31d6cfe0","chunk-13cafc65":"31d6cfe0","chunk-17939072":"31d6cfe0","chunk-2d0e5e97":"31d6cfe0","chunk-3603f66e":"31d6cfe0","chunk-43e85d94":"6680f48e","chunk-45f28a36":"31d6cfe0","chunk-7c9bc256":"31d6cfe0","chunk-8a114076":"31d6cfe0","chunk-5bed4091":"31d6cfe0","chunk-613c4c72":"31d6cfe0","chunk-7c48ede6":"31d6cfe0","chunk-8a4848e8":"31d6cfe0","chunk-9bbf6948":"31d6cfe0","chunk-d8616988":"31d6cfe0","chunk-e3e89bb8":"31d6cfe0"}[e]+".css",o=f.p+c,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var h=u[a],i=h.getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(i===c||i===o))return n()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){h=d[a],i=h.getAttribute("data-href");if(i===c||i===o)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var c=n&&n.target&&n.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=c,delete r[e],l.parentNode.removeChild(l),t(u)},l.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){r[e]=0})));var c=o[e];if(0!==c)if(c)n.push(c[2]);else{var u=new Promise((function(n,t){c=o[e]=[n,t]}));n.push(c[2]=u);var h,i=document.createElement("script");i.charset="utf-8",i.timeout=120,f.nc&&i.setAttribute("nonce",f.nc),i.src=a(e);var d=new Error;h=function(n){i.onerror=i.onload=null,clearTimeout(l);var t=o[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",d.name="ChunkLoadError",d.type=c,d.request=r,t[1](d)}o[e]=void 0}};var l=setTimeout((function(){h({type:"timeout",target:i})}),12e4);i.onerror=i.onload=h,document.head.appendChild(i)}return Promise.all(n)},f.m=e,f.c=c,f.d=function(e,n,t){f.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},f.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.t=function(e,n){if(1&n&&(e=f(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(f.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)f.d(t,c,function(n){return e[n]}.bind(null,c));return t},f.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return f.d(n,"a",n),n},f.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},f.p="/prifix/",f.oe=function(e){throw console.error(e),e};var h=window["webpackJsonp"]=window["webpackJsonp"]||[],i=h.push.bind(h);h.push=n,h=h.slice();for(var d=0;d<h.length;d++)n(h[d]);var l=i;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("159b"),t("b64b");var c=t("7a23");function r(e,n){var t=Object(c["resolveComponent"])("router-view");return Object(c["openBlock"])(),Object(c["createBlock"])(t)}t("bef1");const o={};o.render=r;var u=o,a=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),f=[{path:"/",component:function(){return t.e("chunk-7c48ede6").then(t.bind(null,"de8a"))},meta:{goTop:!0},children:[{path:"",component:function(){return Promise.all([t.e("chunk-43e85d94"),t.e("chunk-063a98f8"),t.e("chunk-45f28a36")]).then(t.bind(null,"e42e"))}},{path:"/products",component:function(){return t.e("chunk-0f431a43").then(t.bind(null,"5d74"))}},{path:"/productDetail/:id",component:function(){return Promise.all([t.e("chunk-43e85d94"),t.e("chunk-8a114076")]).then(t.bind(null,"593f"))}},{path:"/articleDetail/:id",component:function(){return t.e("chunk-8a4848e8").then(t.bind(null,"7642"))}},{path:"/save",component:function(){return t.e("chunk-9bbf6948").then(t.bind(null,"4f6b"))}},{path:"/cart",component:function(){return Promise.all([t.e("chunk-43e85d94"),t.e("chunk-7c9bc256")]).then(t.bind(null,"5727"))}},{path:"/form",component:function(){return t.e("chunk-060bc956").then(t.bind(null,"c699"))}},{path:"/paid",name:"paid",component:function(){return t.e("chunk-d8616988").then(t.bind(null,"7068"))}},{path:"/coupon",component:function(){return t.e("chunk-3603f66e").then(t.bind(null,"8cd9"))}}]},{path:"/login",component:function(){return t.e("chunk-13cafc65").then(t.bind(null,"a57f"))},meta:{goTop:!0}},{path:"/admin",component:function(){return t.e("chunk-e3e89bb8").then(t.bind(null,"7277"))},children:[{path:"",component:function(){return t.e("chunk-5bed4091").then(t.bind(null,"a617"))}},{path:"orders",component:function(){return t.e("chunk-17939072").then(t.bind(null,"57c8"))}},{path:"coupons",component:function(){return t.e("chunk-613c4c72").then(t.bind(null,"0995"))}},{path:"articles",component:function(){return Promise.all([t.e("chunk-063a98f8"),t.e("chunk-71bb05fe")]).then(t.bind(null,"0252"))}}]},{path:"/:pathMatch(.*)*",component:function(){return t.e("chunk-2d0e5e97").then(t.bind(null,"9703"))},meta:{goTop:!0}}],h=Object(a["a"])({history:Object(a["b"])(),routes:f});h.beforeEach((function(e){e.meta.goTop&&window.scrollTo({top:0,behavior:"auto"})}));var i=h,d=(t("7b17"),t("f5af")),l=t.n(d),p=(t("e829"),t("bc3a")),b=t.n(p),s=t("2106"),k=t.n(s),m=t("9062"),v=t.n(m),g=(t("e40d"),t("f9d5")),y=t.n(g),O=(t("4413"),t("7bb1")),j=t("3aa8"),w=t("cbdf"),P=t("9457");l.a.init({once:!0}),Object.keys(j["a"]).forEach((function(e){Object(O["e"])(e,j["a"][e])})),Object(O["d"])({generateMessage:Object(w["a"])({zh_TW:P}),validateOnInput:!0}),Object(w["b"])("zh_TW");var T={confirmButtonColor:"#5ABFDD",cancelButtonColor:"#ff7674"},E=Object(c["createApp"])(u);E.component("Form",O["c"]),E.component("Field",O["b"]),E.component("ErrorMessage",O["a"]),E.use(i),E.use(k.a,b.a),E.use(v.a),E.use(y.a,T),E.mount("#app")},7279:function(e,n,t){},bef1:function(e,n,t){"use strict";t("7279")}});
//# sourceMappingURL=app.f0888334.js.map