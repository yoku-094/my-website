(function(e){function t(t){for(var o,l,i=t[0],c=t[1],u=t[2],p=0,f=[];p<i.length;p++)l=i[p],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&f.push(r[l][0]),r[l]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);s&&s(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={index:0},a=[];function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/my-website"}},[e._v("Home")])],1),n("router-view")],1)},a=[],l=(n("034f"),n("2877")),i={},c=Object(l["a"])(i,r,a,!1,null,null,null),u=c.exports,s=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("el-tabs",{staticStyle:{height:"200px"},attrs:{"tab-position":e.tabPosition},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"Top",name:"first"}},[n("Top",[e._v("Top")])],1),n("el-tab-pane",{attrs:{label:"About"}},[n("About",[e._v("About")])],1),n("el-tab-pane",{attrs:{label:"Work"}},[n("Work",[e._v("Work")])],1),n("el-tab-pane",{attrs:{label:"Blog"}},[n("Blog",[e._v("Blog")])],1)],1)],1)},f=[],m=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},b=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"top"},[n("h1",[e._v("This is an top page")])])}],v={name:"Top",props:{msg:String}},h=v,d=(n("6154"),Object(l["a"])(h,m,b,!1,null,"f8881e9e",null)),_=d.exports,g=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v("This is an about page")])])}],w={name:"About",components:{}},k=w,O=Object(l["a"])(k,g,y,!1,null,null,null),x=O.exports,j=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},T=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"work"},[n("h1",[e._v("This is an work page")])])}],$={name:"Work",components:{}},E=$,P=Object(l["a"])(E,j,T,!1,null,null,null),C=P.exports,S=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},W=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"blog"},[n("h1",[e._v("This is an blog page")])])}],A={name:"Blog",components:{}},B=A,M=Object(l["a"])(B,S,W,!1,null,null,null),N=M.exports,H={name:"Home",components:{Top:_,About:x,Work:C,Blog:N},data:function(){return{imgPath:n("cf05"),tabPosition:"left",activeName:"first"}},methods:{handleClick:function(e,t){console.log(e,t)}}},J=H,q=Object(l["a"])(J,p,f,!1,null,null,null),z=q.exports;o["default"].use(s["a"]);var D=[{path:"/my-website",name:"Home",component:z},{path:"/my-website/top",name:"Top",component:_},{path:"/my-website/work",name:"Work",component:C},{path:"/my-website/about",name:"About",component:x},{path:"/my-website/blog",name:"Work",component:N}],F=new s["a"]({mode:"history",base:"",routes:D}),G=F,I=n("5c96"),K=n.n(I),L=n("c3ff"),Q=n.n(L);n("0fae");o["default"].config.productionTip=!1,o["default"].use(K.a,{locale:Q.a}),new o["default"]({router:G,render:function(e){return e(u)}}).$mount("#app")},6154:function(e,t,n){"use strict";n("8fee")},"85ec":function(e,t,n){},"8fee":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=index.e1827032.js.map