(function(t){function e(e){for(var a,i,r=e[0],c=e[1],l=e[2],u=0,v=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&v.push(s[i][0]),s[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(v.length)v.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var r=n[i];0!==s[r]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},i={app:0},s={app:0},o=[];function r(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"3fb10ba0","chunk-09127b09":"ee6d9313","chunk-1f31fc30":"8b9f6a93","chunk-21559c8e":"1468db71","chunk-cd660f9c":"e7eac16f"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1,"chunk-21559c8e":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"9402e942","chunk-09127b09":"31d6cfe0","chunk-1f31fc30":"31d6cfe0","chunk-21559c8e":"0e433876","chunk-cd660f9c":"31d6cfe0"}[t]+".css",s=c.p+a,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var l=o[r],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===s))return e()}var v=document.getElementsByTagName("style");for(r=0;r<v.length;r++){l=v[r],u=l.getAttribute("data-href");if(u===a||u===s)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete i[t],p.parentNode.removeChild(p),n(o)},p.href=s;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){i[t]=0})));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=r(t);var v=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;v.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",v.name="ChunkLoadError",v.type=a,v.request=i,n[1](v)}s[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/sidescript-frontend/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var v=0;v<l.length;v++)e(l[v]);var p=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1108:function(t,e,n){},3654:function(t,e,n){"use strict";n("caba")},3760:function(t,e,n){t.exports=n.p+"img/illust-home.ad3265c2.png"},"4ffd":function(t,e,n){t.exports=n.p+"img/logo.ce677c5d.png"},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("layout-header"),n("router-view"),n("layout-footer")],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"nav-top"},[a("div",{staticClass:"brand py-2 px-4 text-left",on:{click:function(e){return t.$router.push({name:"Home"})}}},[t._m(0),t._m(1)])]),a("div",{staticClass:"nav-right"}),a("div",{staticClass:"line-top"}),a("div",{staticClass:"line-right"}),a("div",{staticClass:"toggleable",on:{click:function(e){t.nav.active=!t.nav.active,t.setNavbar()}}},[a("icon",{attrs:{icon:"stream"}})],1),a("div",{staticClass:"nav-full-page",class:{hide:0==t.nav.active}},[a("div",{staticClass:"toggleable",on:{click:function(e){t.nav.active=!t.nav.active,t.setNavbar()}}},[a("icon",{attrs:{icon:"times"}})],1),a("div",{staticClass:"container p-4"},[a("b-row",[a("b-col",{staticClass:"py-md-5 my-md-4 position-relative",attrs:{md:"6"}},[a("img",{staticClass:"w-100 position-absolute",attrs:{src:n("d775"),id:"illust-navbar",alt:"Navbar Illustration"}})]),a("b-col",{staticClass:"py-5 my-4",attrs:{md:"6"}},[a("div",{staticClass:"menu",class:{active:"Home"==t.$route.name},on:{click:function(e){return t.moveContent("Home")}}},[a("h1",{staticClass:"menu-main"},[t._v("HOME")]),a("h1",{staticClass:"menu-shadow"},[t._v("HOME")])]),a("div",{staticClass:"menu",class:{active:"Service"==t.$route.name},on:{click:function(e){return t.moveContent("Service")}}},[a("h1",{staticClass:"menu-main"},[t._v("SERVICE")]),a("h1",{staticClass:"menu-shadow"},[t._v("SERVICE")])]),a("div",{staticClass:"menu",class:{active:"Work"==t.$route.name},on:{click:function(e){return t.moveContent("Work")}}},[a("h1",{staticClass:"menu-main"},[t._v("WORK")]),a("h1",{staticClass:"menu-shadow"},[t._v("WORK")])]),a("div",{staticClass:"menu",class:{active:"Achievement"==t.$route.name},on:{click:function(e){return t.moveContent("Achievement")}}},[a("h1",{staticClass:"menu-main"},[t._v("ACHIEVEMENT")]),a("h1",{staticClass:"menu-shadow"},[t._v("ACHIEVEMENT")])]),a("div",{staticClass:"menu",class:{active:"About"==t.$route.name},on:{click:function(e){return t.moveContent("About")}}},[a("h1",{staticClass:"menu-main"},[t._v("ABOUT US")]),a("h1",{staticClass:"menu-shadow"},[t._v("ABOUT US")])]),a("div",{staticClass:"menu",class:{active:"Contact"==t.$route.name},on:{click:function(e){return t.moveContent("Contact")}}},[a("h1",{staticClass:"menu-main"},[t._v("CONTACT")]),a("h1",{staticClass:"menu-shadow"},[t._v("CONTACT")])])])],1),a("b-row",[a("b-col",{staticClass:"text-left",attrs:{md:"12"}},[a("div",{staticClass:"icon-soc"},[a("icon",{attrs:{icon:["fab","facebook"]}})],1),a("div",{staticClass:"icon-soc"},[a("icon",{attrs:{icon:["fab","dribbble"]}})],1),a("div",{staticClass:"icon-soc"},[a("icon",{attrs:{icon:["fab","github"]}})],1),a("div",{staticClass:"icon-soc"},[a("icon",{attrs:{icon:["fab","linkedin"]}})],1),a("div",{staticClass:"icon-soc"},[a("icon",{attrs:{icon:["fab","twitter"]}})],1)])],1)],1)])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"img d-inline-block mt-md-0 mt-2"},[a("img",{staticClass:"mr-3",attrs:{src:n("4ffd"),width:"46px",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"name d-md-inline-block d-none"},[n("p",{staticClass:"mb-0"},[t._v("SIDESCRIPT")]),n("p",{staticClass:"mb-0"},[t._v("DEVELOPER")])])}],c={data(){return{nav:{active:!1}}},methods:{setNavbar(){1==this.nav.active?$("body").addClass("overflow-hidden"):$("body").removeClass("overflow-hidden")},moveContent(t){this.nav.active=!1,$("body").removeClass("overflow-hidden"),this.$router.push({name:t})}}},l=c,u=n("2877"),v=Object(u["a"])(l,o,r,!1,null,null,null),p=v.exports,d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-container",[a("b-row",[a("b-col",{staticClass:"text-left py-4",attrs:{md:"8"}},[a("img",{staticClass:"mx-2 mb-sm-0 mb-3",attrs:{src:n("4ffd"),width:"36px",alt:"Logo"}}),a("p",{staticClass:"nunito d-inline-block text-sm"},[t._v("@2021 Developed & Designed By SideScript")])])],1)],1)],1)},f=[],m={},h=Object(u["a"])(m,d,f,!1,null,null,null),b=h.exports,g={data(){return{name:""}},components:{LayoutHeader:p,LayoutFooter:b}},C=g,_=(n("cf25"),n("5c64"),Object(u["a"])(C,i,s,!1,null,null,null)),k=_.exports,y=n("9483");Object(y["a"])("/sidescript-frontend/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var w=n("8c4f"),E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("b-container",{staticClass:"text-left py-5"},[a("b-row",{staticClass:"py-5 my-5"},[a("b-col",{staticClass:"px-5",attrs:{md:"6"}},[a("h1",{staticClass:"nunito text-dark font-weight-bold",attrs:{id:"capt-home"}},[t._v(" An essential aspect of "),a("span",{staticClass:"highlight"},[t._v("Creativity")]),t._v(" is not being afraid to fail. ")]),a("b-row",{staticClass:"pt-5"},[a("b-col",{staticClass:"py-3",attrs:{sm:"6"}},[a("div",{staticClass:"feature-home",class:{active:"ai"==t.input.type}},["ai"!=t.input.type?a("div",{staticClass:"icon-service",on:{click:function(e){t.input.type="ai"}}},[a("icon",{attrs:{icon:"robot"}})],1):a("div",{staticClass:"icon-service",on:{click:function(e){t.input.type=null}}},[a("icon",{attrs:{icon:"times"}})],1),a("span",{on:{click:function(e){t.input.type="ai"}}},[t._v("Artifical Intelligence")])])]),a("b-col",{staticClass:"py-3",attrs:{sm:"6"}},[a("div",{staticClass:"feature-home",class:{active:"design"==t.input.type}},["design"!=t.input.type?a("div",{staticClass:"icon-service",on:{click:function(e){t.input.type="design"}}},[a("icon",{attrs:{icon:"pencil-ruler"}})],1):a("div",{staticClass:"icon-service",on:{click:function(e){t.input.type=null}}},[a("icon",{attrs:{icon:"times"}})],1),a("span",{on:{click:function(e){t.input.type="design"}}},[t._v("Design Illustration")])])]),a("b-col",{staticClass:"py-3",attrs:{sm:"6"}},[a("div",{staticClass:"feature-home",class:{active:"mobile"==t.input.type}},["mobile"!=t.input.type?a("div",{staticClass:"icon-service",on:{click:function(e){t.input.type="mobile"}}},[a("icon",{attrs:{icon:"mobile-alt"}})],1):a("div",{staticClass:"icon-service",on:{click:function(e){t.input.type=null}}},[a("icon",{attrs:{icon:"times"}})],1),a("span",{on:{click:function(e){t.input.type="mobile"}}},[t._v("Mobile Application")])])]),a("b-col",{staticClass:"py-3",attrs:{sm:"6"}},[a("div",{staticClass:"feature-home",class:{active:"web"==t.input.type}},["web"!=t.input.type?a("div",{staticClass:"icon-service",on:{click:function(e){t.input.type="web"}}},[a("icon",{attrs:{icon:"desktop"}})],1):a("div",{staticClass:"icon-service",on:{click:function(e){t.input.type=null}}},[a("icon",{attrs:{icon:"times"}})],1),a("span",{on:{click:function(e){t.input.type="web"}}},[t._v("Web Application")])])])],1),a("button",{staticClass:"m-button-primary btn mt-5"},[t._v("Order Now")])],1)],1)],1),a("img",{attrs:{id:"illust-home",src:n("3760"),alt:"Illustration"}})],1)},j=[],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._m(0),n("h3",[t._v("Installed CLI Plugins")]),t._m(1),n("h3",[t._v("Essential Links")]),t._m(2),n("h3",[t._v("Ecosystem")]),t._m(3)])},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),n("br"),t._v(" check out the "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",target:"_blank",rel:"noopener"}},[t._v("pwa")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[t._v("router")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha",target:"_blank",rel:"noopener"}},[t._v("unit-mocha")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],A={name:"HelloWorld",props:{msg:String}},S=A,N=(n("c3f9"),Object(u["a"])(S,x,O,!1,null,"219443b0",null)),T=N.exports,H={name:"Home",data(){return{input:{type:null}}},components:{HelloWorld:T}},I=H,P=(n("3654"),Object(u["a"])(I,E,j,!1,null,null,null)),L=P.exports;a["default"].use(w["a"]);const M=[{path:"/",name:"Home",component:L},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/service",name:"Service",component:function(){return n.e("chunk-21559c8e").then(n.bind(null,"e2f8"))}},{path:"/work",name:"Work",component:function(){return n.e("chunk-cd660f9c").then(n.bind(null,"f126"))}},{path:"/achievement",name:"Achievement",component:function(){return n.e("chunk-09127b09").then(n.bind(null,"a865"))}},{path:"/achievement",name:"Achievement",component:function(){return n.e("chunk-09127b09").then(n.bind(null,"a865"))}},{path:"/contact",name:"Contact",component:function(){return n.e("chunk-1f31fc30").then(n.bind(null,"b8fa"))}}],D=new w["a"]({mode:"history",base:"/sidescript-frontend/",routes:M});var W=D,B=n("2f62");a["default"].use(B["a"]);var F=new B["a"].Store({state:{},mutations:{},actions:{},modules:{}}),R=n("5f5b"),U=(n("f9e3"),n("2dd8"),n("bc3a")),V=n.n(U),q=n("1157"),K=n.n(q),J=n("ecee"),z=n("c074"),G=n("f2d1"),Q=n("b702"),X=n("ad3d"),Y=n("1dce"),Z=n.n(Y);window.$=K.a,J["c"].add(z["a"],G["a"],Q["a"]),a["default"].prototype.$http=V.a,a["default"].component("icon",X["a"]),a["default"].use(R["a"],Z.a),a["default"].config.productionTip=!1,new a["default"]({router:W,store:F,render:function(t){return t(k)}}).$mount("#app")},"5c64":function(t,e,n){"use strict";n("d32a")},c3f9:function(t,e,n){"use strict";n("1108")},caba:function(t,e,n){},cf25:function(t,e,n){"use strict";n("fea6")},d32a:function(t,e,n){},d775:function(t,e,n){t.exports=n.p+"img/illust-navbar.afe57bf2.png"},fea6:function(t,e,n){}});
//# sourceMappingURL=app.086293b1.js.map