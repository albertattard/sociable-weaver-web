(function(e){function t(t){for(var o,r,i=t[0],u=t[1],l=t[2],s=0,p=[];s<i.length;s++)r=i[s],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&p.push(c[r][0]),c[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);b&&b(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var i=n[r];0!==c[i]&&(o=!1)}o&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},c={app:0},a=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ea612390"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"27b3eaaf"}[e]+".css",c=u.p+o,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var l=a[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===o||s===c))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){l=p[i],s=l.getAttribute("data-href");if(s===o||s===c)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var o=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[e],b.parentNode.removeChild(b),n(a)},b.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){r[e]=0})));var o=c[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=c[e]=[t,n]}));t.push(o[2]=a);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e);var p=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(b);var n=c[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",p.name="ChunkLoadError",p.type=o,p.request=r,n[1](p)}c[e]=void 0}};var b=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/web/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var b=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},1562:function(e,t,n){"use strict";n("6a9f")},"24cd":function(e,t,n){},"2eeb":function(e,t,n){"use strict";n("5484")},5484:function(e,t,n){},"6a9f":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={id:"nav"},c=Object(o["i"])("Home"),a=Object(o["i"])(" | "),i=Object(o["i"])("About");function u(e,t){var n=Object(o["z"])("router-link"),u=Object(o["z"])("router-view");return Object(o["s"])(),Object(o["f"])(o["a"],null,[Object(o["g"])("div",r,[Object(o["j"])(n,{to:"/"},{default:Object(o["G"])((function(){return[c]})),_:1}),a,Object(o["j"])(n,{to:"/about"},{default:Object(o["G"])((function(){return[i]})),_:1})]),Object(o["j"])(u)],64)}n("1562");var l=n("6b0d"),s=n.n(l);const p={},b=s()(p,[["render",u]]);var f=b,d=(n("d3b7"),n("3ca3"),n("ddb0"),{class:"home"});function h(e,t,n,r,c,a){var i=Object(o["z"])("App"),u=Object(o["z"])("Open");return Object(o["s"])(),Object(o["f"])("div",d,[Object(o["j"])(i,{ref:"app",onAppIsRunning:e.onAppIsRunning},null,8,["onAppIsRunning"]),e.appIsRunning?(Object(o["s"])(),Object(o["d"])(u,{key:0})):Object(o["e"])("",!0)])}var j=n("d4ec"),O=n("bee2"),g=n("262e"),v=n("2caf"),m=n("9ab4"),y=function(e){return Object(o["w"])("data-v-386ffcf8"),e=e(),Object(o["t"])(),e},k={class:"app"},w={key:0,class:"help"},F=y((function(){return Object(o["g"])("h2",null,"Getting started",-1)})),A=y((function(){return Object(o["g"])("li",null,[Object(o["i"])(" Make sure that you have Java 17 installed. You can use "),Object(o["g"])("a",{href:"https://sdkman.io/install",target:"_blank"},"SDKMAN"),Object(o["i"])(" to install Java ")],-1)})),R=y((function(){return Object(o["g"])("li",null,[Object(o["i"])(" Download the application: "),Object(o["g"])("a",{class:"download-app",href:"https://github.com/sociable-weaver/app-java-boot/releases/download/v0.6/sw-app.jar"},"sw-app.jar")],-1)})),T=y((function(){return Object(o["g"])("li",null,[Object(o["i"])(" Run the application using the following command "),Object(o["g"])("pre",null,"$ java -jar sw-app.jar"),Object(o["i"])(" You can run the application from anywhere you like and you don't have to save it in a special folder. ")],-1)})),H=Object(o["i"])(" Click "),L=Object(o["i"])(" to check if the application has started correctly. ");function _(e,t,n,r,c,a){return Object(o["s"])(),Object(o["f"])("div",k,[Object(o["g"])("h1",null,Object(o["B"])(e.message),1),e.showHelp?(Object(o["s"])(),Object(o["f"])("div",w,[F,Object(o["g"])("ol",null,[A,R,T,Object(o["g"])("li",null,[H,Object(o["g"])("a",{class:"try-app-again",href:"#",onClick:t[0]||(t[0]=function(t){return e.checkApplicationStatus()})},"here"),L])])])):Object(o["e"])("",!0)])}var C=n("bc3a"),E=n.n(C),S=E.a.create({baseURL:"http://localhost:8077",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),I=n("ce1f"),x=function(e){Object(g["a"])(n,e);var t=Object(v["a"])(n);function n(){var e;return Object(j["a"])(this,n),e=t.apply(this,arguments),e.message="Sociable Weaver",e.showHelp=!1,e}return Object(O["a"])(n,[{key:"mounted",value:function(){var e=this;this.$nextTick((function(){e.checkApplicationStatus()}))}},{key:"checkApplicationStatus",value:function(){var e=this;this.isAppRunning().then((function(t){e.message=t.message,e.showHelp=t.showHelp,e.$emit("appIsRunning",t.isRunning)})).catch((function(t){e.message="Failed to check the application status (".concat(t.message,")"),e.showHelp=!1,e.$emit("appIsRunning",!1)}))}},{key:"isAppRunning",value:function(){return S.get("/api/hello").then((function(e){return e.status})).then((function(e){return 200===e?{isRunning:!0,message:"Application is running",showHelp:!1}:{isRunning:!1,message:"Application is running, but unhealthy",showHelp:!1}})).catch((function(e){if("Network Error"===e.message)return{isRunning:!1,message:"Application is not running or cannot be reached by this page",showHelp:!0};throw e}))}}]),n}(I["b"]);x=Object(m["a"])([Object(I["a"])({name:"App",emits:["appIsRunning"]})],x);var P=x;n("cf98");const M=s()(P,[["render",_],["__scopeId","data-v-386ffcf8"]]);var U=M,N=function(e){return Object(o["w"])("data-v-6d5c27f6"),e=e(),Object(o["t"])(),e},D={class:"open"},V={class:"openRepository"},B=N((function(){return Object(o["g"])("h2",null,"Open repository",-1)})),G=N((function(){return Object(o["g"])("label",{for:"checkout"},"Checkout from an online git repository, like GitHub or GitLab",-1)})),z=N((function(){return Object(o["g"])("label",{for:"pathToRepository"},"Path to repository",-1)})),J=["disabled"],$=N((function(){return Object(o["g"])("label",{for:"checkoutToFolder"},"Checkout to folder",-1)})),W=["disabled"],q=N((function(){return Object(o["g"])("label",{for:"openLocal"},"Open locally",-1)})),K=N((function(){return Object(o["g"])("label",{for:"openFromFolder"},"Open from folder",-1)})),Y=["disabled"],Q={class:"workspace"},X=N((function(){return Object(o["g"])("h2",null,"Workspace",-1)})),Z=N((function(){return Object(o["g"])("label",{for:"workspace"},"Workspace",-1)})),ee={class:"buttons"},te={key:0,class:"open"},ne={class:"actionMessage"};function oe(e,t,n,r,c,a){return Object(o["s"])(),Object(o["f"])("div",D,[Object(o["g"])("div",V,[B,Object(o["g"])("div",null,[Object(o["H"])(Object(o["g"])("input",{type:"radio",id:"checkout",value:"checkout","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.openFrom=t})},null,512),[[o["D"],e.openFrom]]),G]),Object(o["g"])("div",null,[z,Object(o["H"])(Object(o["g"])("input",{type:"text",id:"pathToRepository","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.pathToRepository=t}),disabled:"openLocal"===e.openFrom},null,8,J),[[o["E"],e.pathToRepository]])]),Object(o["g"])("div",null,[$,Object(o["H"])(Object(o["g"])("input",{type:"text",id:"checkoutToFolder","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.checkoutToFolder=t}),disabled:"openLocal"===e.openFrom},null,8,W),[[o["E"],e.checkoutToFolder]])]),Object(o["g"])("div",null,[Object(o["H"])(Object(o["g"])("input",{type:"radio",id:"openLocal",value:"openLocal","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.openFrom=t})},null,512),[[o["D"],e.openFrom]]),q]),Object(o["g"])("div",null,[K,Object(o["H"])(Object(o["g"])("input",{type:"text",id:"openFromFolder","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.openFromFolder=t}),disabled:"checkout"===e.openFrom},null,8,Y),[[o["E"],e.openFromFolder]])])]),Object(o["g"])("div",Q,[X,Object(o["g"])("div",null,[Z,Object(o["H"])(Object(o["g"])("input",{type:"text",id:"workspace","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.workspace=t})},null,512),[[o["E"],e.workspace]])])]),Object(o["g"])("div",ee,["checkout"===e.openFrom?(Object(o["s"])(),Object(o["f"])("button",te,"Checkout and Open")):(Object(o["s"])(),Object(o["f"])("button",{key:1,class:"open",onClick:t[6]||(t[6]=function(){return e.onOpenLocal&&e.onOpenLocal.apply(e,arguments)})},"Open")),Object(o["g"])("span",ne,Object(o["B"])(e.actionMessage),1)])])}n("498a");var re=function(e){Object(g["a"])(n,e);var t=Object(v["a"])(n);function n(){var e;return Object(j["a"])(this,n),e=t.apply(this,arguments),e.openFrom="checkout",e.pathToRepository="",e.checkoutToFolder="",e.openFromFolder="",e.workspace="",e.actionMessage="",e}return Object(O["a"])(n,[{key:"onOpenLocal",value:function(){this.actionMessage="",0!==this.openFromFolder.trim().length?this.openLocal(this.openFromFolder).then((function(e){console.log("Response",e)})).catch((function(e){console.log("Error",e)})):this.actionMessage="Please provide the folder path"}},{key:"openLocal",value:function(e){return S.get("/api/open-local",{params:{path:e}}).then((function(e){return e.data})).then((function(e){return e}))}}]),n}(I["b"]);n("2eeb");const ce=s()(re,[["render",oe],["__scopeId","data-v-6d5c27f6"]]);var ae=ce,ie=function(e){Object(g["a"])(n,e);var t=Object(v["a"])(n);function n(){var e;return Object(j["a"])(this,n),e=t.apply(this,arguments),e.appIsRunning=!1,e}return Object(O["a"])(n,[{key:"onAppIsRunning",value:function(e){this.appIsRunning=e}}]),n}(I["b"]);ie=Object(m["a"])([Object(I["a"])({components:{App:U,Open:ae}})],ie);var ue=ie;const le=s()(ue,[["render",h]]);var se=le,pe=n("6c02"),be=[{path:"/",name:"Home",component:se},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],fe=Object(pe["a"])({history:Object(pe["b"])(),routes:be}),de=fe,he=n("5502"),je=Object(he["a"])({state:{},mutations:{},actions:{},modules:{}});Object(o["c"])(f).use(je).use(de).mount("#app")},cf98:function(e,t,n){"use strict";n("24cd")}});
//# sourceMappingURL=app.6f96c1f6.js.map