(function(e){function n(n){for(var r,c,a=n[0],d=n[1],f=n[2],i=0,h=[];i<a.length;i++)c=a[i],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&h.push(o[c][0]),o[c]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);l&&l(n);while(h.length)h.shift()();return u.push.apply(u,f||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,c=1;c<t.length;c++){var a=t[c];0!==o[a]&&(r=!1)}r&&(u.splice(n--,1),e=d(d.s=t[0]))}return e}var r={},c={app:0},o={app:0},u=[];function a(e){return d.p+"js/"+({}[e]||e)+"."+{"chunk-019bfd49":"4d9868f1","chunk-1776863d":"c1d8e43a","chunk-2d0c8d5d":"3338b584","chunk-2d0d36e2":"a4373222","chunk-2d0e5e97":"a27b1d70","chunk-2d0e95b6":"f3363d3a","chunk-2d2080f5":"711be6ff","chunk-2d229860":"e5f2ee16","chunk-4f9de0b4":"f2c2f4ea","chunk-52190fd3":"ed7027e4","chunk-61286236":"2c1d8d55","chunk-13e19a98":"72b91691","chunk-7b9f8564":"365efd4f","chunk-f72c5e76":"09dcab2c"}[e]+".js"}function d(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(e){var n=[],t={"chunk-7b9f8564":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-019bfd49":"31d6cfe0","chunk-1776863d":"31d6cfe0","chunk-2d0c8d5d":"31d6cfe0","chunk-2d0d36e2":"31d6cfe0","chunk-2d0e5e97":"31d6cfe0","chunk-2d0e95b6":"31d6cfe0","chunk-2d2080f5":"31d6cfe0","chunk-2d229860":"31d6cfe0","chunk-4f9de0b4":"31d6cfe0","chunk-52190fd3":"31d6cfe0","chunk-61286236":"31d6cfe0","chunk-13e19a98":"31d6cfe0","chunk-7b9f8564":"6680f48e","chunk-f72c5e76":"31d6cfe0"}[e]+".css",o=d.p+r,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var f=u[a],i=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(i===r||i===o))return n()}var h=document.getElementsByTagName("style");for(a=0;a<h.length;a++){f=h[a],i=f.getAttribute("data-href");if(i===r||i===o)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var r=n&&n.target&&n.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete c[e],l.parentNode.removeChild(l),t(u)},l.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){c[e]=0})));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var u=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=u);var f,i=document.createElement("script");i.charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.src=a(e);var h=new Error;f=function(n){i.onerror=i.onload=null,clearTimeout(l);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;h.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",h.name="ChunkLoadError",h.type=r,h.request=c,t[1](h)}o[e]=void 0}};var l=setTimeout((function(){f({type:"timeout",target:i})}),12e4);i.onerror=i.onload=f,document.head.appendChild(i)}return Promise.all(n)},d.m=e,d.c=r,d.d=function(e,n,t){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,n){if(1&n&&(e=d(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)d.d(t,r,function(n){return e[n]}.bind(null,r));return t},d.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="/prifix/dist/",d.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],i=f.push.bind(f);f.push=n,f=f.slice();for(var h=0;h<f.length;h++)n(f[h]);var l=i;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("159b"),t("b64b");var r=t("7a23");function c(e,n){var t=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createBlock"])(t)}t("bef1");const o={};o.render=c;var u=o,a=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),d=[{path:"/",component:function(){return t.e("chunk-2d229860").then(t.bind(null,"de8a"))},children:[{path:"",component:function(){return Promise.all([t.e("chunk-61286236"),t.e("chunk-7b9f8564")]).then(t.bind(null,"e42e"))}},{path:"/blog",component:function(){return t.e("chunk-2d2080f5").then(t.bind(null,"a2d2"))}},{path:"/products",component:function(){return t.e("chunk-2d0d36e2").then(t.bind(null,"5d74"))}},{path:"/cart",component:function(){return t.e("chunk-2d0c8d5d").then(t.bind(null,"5727"))}},{path:"/coupon",component:function(){return t.e("chunk-2d0e95b6").then(t.bind(null,"8cd9"))}}]},{path:"/login",component:function(){return t.e("chunk-019bfd49").then(t.bind(null,"a57f"))}},{path:"/admin",component:function(){return t.e("chunk-4f9de0b4").then(t.bind(null,"7277"))},children:[{path:"",component:function(){return t.e("chunk-52190fd3").then(t.bind(null,"a617"))}},{path:"orders",component:function(){return t.e("chunk-f72c5e76").then(t.bind(null,"57c8"))}},{path:"coupons",component:function(){return t.e("chunk-1776863d").then(t.bind(null,"0995"))}},{path:"articles",component:function(){return Promise.all([t.e("chunk-61286236"),t.e("chunk-13e19a98")]).then(t.bind(null,"0252"))}}]},{path:"/:pathMatch(.*)*",component:function(){return t.e("chunk-2d0e5e97").then(t.bind(null,"9703"))}}],f=Object(a["a"])({history:Object(a["b"])(),routes:d}),i=f,h=(t("7b17"),t("f5af")),l=t.n(h),p=(t("e829"),t("bc3a")),s=t.n(p),b=t("2106"),k=t.n(b),m=t("1344"),v=Object(m["a"])(),g=t("9062"),y=t.n(g),O=(t("e40d"),t("f9d5")),j=t.n(O),w=(t("4413"),t("7bb1")),P=t("3aa8"),E=t("cbdf"),_=t("9457");l.a.init({once:!0}),Object.keys(P["a"]).forEach((function(e){Object(w["e"])(e,P["a"][e])})),Object(w["d"])({generateMessage:Object(E["a"])({zh_TW:_}),validateOnInput:!0}),Object(E["b"])("zh_TW");var C={confirmButtonColor:"#5ABFDD",cancelButtonColor:"#ff7674"},S=Object(r["createApp"])(u);S.component("Form",w["c"]),S.component("Field",w["b"]),S.component("ErrorMessage",w["a"]),S.config.globalProperties.$bus=v,S.use(i),S.use(k.a,s.a),S.use(y.a),S.use(j.a,C),S.mount("#app")},bef1:function(e,n,t){"use strict";t("dfd1")},dfd1:function(e,n,t){}});
//# sourceMappingURL=app.0713e47b.js.map