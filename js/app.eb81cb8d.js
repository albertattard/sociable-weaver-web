(function(t){function e(e){for(var a,c,i=e[0],s=e[1],u=e[2],b=0,p=[];b<i.length;b++)c=i[b],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);l&&l(e);while(p.length)p.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},c={app:0},o={app:0},r=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"b9c51b74"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={about:1};c[t]?e.push(c[t]):0!==c[t]&&n[t]&&e.push(c[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"a3cac4da"}[t]+".css",o=s.p+a,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var u=r[i],b=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(b===a||b===o))return e()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){u=p[i],b=u.getAttribute("data-href");if(b===a||b===o)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var a=e&&e.target&&e.target.src||o,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete c[t],l.parentNode.removeChild(l),n(r)},l.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(l)})).then((function(){c[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=r);var u,b=document.createElement("script");b.charset="utf-8",b.timeout=120,s.nc&&b.setAttribute("nonce",s.nc),b.src=i(t);var p=new Error;u=function(e){b.onerror=b.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+a+": "+c+")",p.name="ChunkLoadError",p.type=a,p.request=c,n[1](p)}o[t]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:b})}),12e4);b.onerror=b.onload=u,document.head.appendChild(b)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/web/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],b=u.push.bind(u);u.push=e,u=u.slice();for(var p=0;p<u.length;p++)e(u[p]);var l=b;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"00e1":function(t,e,n){"use strict";n("d5ea")},"050e":function(t,e,n){"use strict";n("8aaf")},"054c":function(t,e,n){"use strict";n("d3d5")},1562:function(t,e,n){"use strict";n("b1bf")},1898:function(t,e,n){},"54ae":function(t,e,n){"use strict";n("c851")},"658c":function(t,e,n){},"7c7d":function(t,e,n){"use strict";n("1898")},"8aaf":function(t,e,n){},a5b2:function(t,e,n){},adc3:function(t,e,n){},b1bf:function(t,e,n){},b805:function(t,e,n){"use strict";n("cb3e")},b8d2:function(t,e,n){"use strict";n("658c")},bdcd:function(t,e,n){},c281:function(t,e,n){"use strict";n("bdcd")},c851:function(t,e,n){},cb3e:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),c={id:"nav"},o=Object(a["i"])("Home"),r=Object(a["i"])(" | "),i=Object(a["i"])("About");function s(t,e){var n=Object(a["A"])("router-link"),s=Object(a["A"])("router-view");return Object(a["s"])(),Object(a["f"])(a["a"],null,[Object(a["g"])("div",c,[Object(a["j"])(n,{to:"/"},{default:Object(a["H"])((function(){return[o]})),_:1}),r,Object(a["j"])(n,{to:"/about"},{default:Object(a["H"])((function(){return[i]})),_:1})]),Object(a["j"])(s)],64)}n("1562");var u=n("d959"),b=n.n(u);const p={},l=b()(p,[["render",s]]);var h=l,O=(n("d3b7"),n("3ca3"),n("ddb0"),{class:"home"});function j(t,e,n,c,o,r){var i=Object(a["A"])("MessageBar"),s=Object(a["A"])("App"),u=Object(a["A"])("Open"),b=Object(a["A"])("Toc"),p=Object(a["A"])("Content");return Object(a["s"])(),Object(a["f"])("div",O,[null!==t.message?(Object(a["s"])(),Object(a["d"])(i,{key:0,ref:"messageBar",message:t.message},null,8,["message"])):Object(a["e"])("",!0),Object(a["j"])(s,{ref:"app",onAppIsRunning:t.onAppIsRunning},null,8,["onAppIsRunning"]),t.appIsRunning?(Object(a["s"])(),Object(a["d"])(u,{key:1,ref:"open",onBookOpened:t.onOpenBook,workspace:t.workspace},null,8,["onBookOpened","workspace"])):Object(a["e"])("",!0),null!==t.book?(Object(a["s"])(),Object(a["d"])(b,{key:2,ref:"toc",onChapterRead:t.onChapterRead,onErrorMessage:t.onErrorMessage,book:t.book,chapterPath:t.workspace.chapterPath},null,8,["onChapterRead","onErrorMessage","book","chapterPath"])):Object(a["e"])("",!0),null!==t.chapter?(Object(a["s"])(),Object(a["d"])(p,{key:3,ref:"content",chapter:t.chapter},null,8,["chapter"])):Object(a["e"])("",!0)])}var d=n("d4ec"),f=n("bee2"),m=n("262e"),k=n("2caf"),y=n("9ab4"),v=function(t){return Object(a["w"])("data-v-0fe8c5cc"),t=t(),Object(a["t"])(),t},g={class:"app"},w={key:0,class:"help"},P=v((function(){return Object(a["g"])("h2",null,"Getting started",-1)})),C=v((function(){return Object(a["g"])("li",null,[Object(a["i"])(" Make sure that you have Java 17 installed. You can use "),Object(a["g"])("a",{href:"https://sdkman.io/install",target:"_blank"},"SDKMAN"),Object(a["i"])(" to install Java ")],-1)})),A=v((function(){return Object(a["g"])("li",null,[Object(a["i"])(" Download the application: "),Object(a["g"])("a",{class:"download-app",href:"https://github.com/sociable-weaver/app-java-boot/releases/download/v0.9/sw-app.jar"},"sw-app.jar")],-1)})),R=v((function(){return Object(a["g"])("li",null,[Object(a["i"])(" Run the application using the following command "),Object(a["g"])("pre",null,"$ java -jar sw-app.jar"),Object(a["i"])(" You can run the application from anywhere you like and you don't have to save it in a special folder. ")],-1)})),T=Object(a["i"])(" Click "),_=Object(a["i"])(" to check if the application has started correctly. ");function F(t,e,n,c,o,r){return Object(a["s"])(),Object(a["f"])("div",g,[Object(a["g"])("h1",null,Object(a["C"])(t.message),1),t.showHelp?(Object(a["s"])(),Object(a["f"])("div",w,[P,Object(a["g"])("ol",null,[C,A,R,Object(a["g"])("li",null,[T,Object(a["g"])("a",{class:"try-app-again",href:"#",onClick:e[0]||(e[0]=function(e){return t.checkApplicationStatus()})},"here"),_])])])):Object(a["e"])("",!0)])}var B=n("bc3a"),I=n.n(B),M=I.a.create({baseURL:"http://localhost:8077",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),S=n("ce1f"),D=function(t){Object(m["a"])(n,t);var e=Object(k["a"])(n);function n(){var t;return Object(d["a"])(this,n),t=e.apply(this,arguments),t.message="Sociable Weaver",t.showHelp=!1,t}return Object(f["a"])(n,[{key:"mounted",value:function(){var t=this;this.$nextTick((function(){t.checkApplicationStatus()}))}},{key:"checkApplicationStatus",value:function(){var t=this;this.isAppRunning().then((function(e){t.message=e.message,t.showHelp=e.showHelp,t.$emit("appIsRunning",e.isRunning)})).catch((function(e){t.message="Failed to check the application status (".concat(e.message,")"),t.showHelp=!1,t.$emit("appIsRunning",!1)}))}},{key:"isAppRunning",value:function(){return M.get("/api/hello").then((function(t){return t.status})).then((function(t){return 200===t?{isRunning:!0,message:"Application is running",showHelp:!1}:{isRunning:!1,message:"Application is running, but unhealthy",showHelp:!1}})).catch((function(t){if("Network Error"===t.message)return{isRunning:!1,message:"Application is not running or cannot be reached by this page",showHelp:!0};throw t}))}}]),n}(S["b"]);D=Object(y["a"])([Object(S["a"])({name:"App",emits:["appIsRunning"]})],D);var H=D;n("050e");const $=b()(H,[["render",F],["__scopeId","data-v-0fe8c5cc"]]);var L=$,N={class:"content"},E={key:12,class:"error"},x=Object(a["i"])(" Do not know how to renter entries of type: ");function G(t,e,n,c,o,r){var i=Object(a["A"])("ChapterRenderer"),s=Object(a["A"])("Command"),u=Object(a["A"])("Create"),b=Object(a["A"])("DockerTagAndPush"),p=Object(a["A"])("Download"),l=Object(a["A"])("GitApplyPatch"),h=Object(a["A"])("GitCommitChanges"),O=Object(a["A"])("GitTagCurrentCommit"),j=Object(a["A"])("Markdown"),d=Object(a["A"])("Replace"),f=Object(a["A"])("Section"),m=Object(a["A"])("Subsection");return Object(a["s"])(),Object(a["f"])("div",N,[(Object(a["s"])(!0),Object(a["f"])(a["a"],null,Object(a["z"])(t.chapter.entries,(function(t){return Object(a["s"])(),Object(a["f"])("div",{key:t.id},["chapter"===t.type?(Object(a["s"])(),Object(a["d"])(i,{key:0,entry:t},null,8,["entry"])):"command"===t.type?(Object(a["s"])(),Object(a["d"])(s,{key:1,entry:t},null,8,["entry"])):"create"===t.type?(Object(a["s"])(),Object(a["d"])(u,{key:2,entry:t},null,8,["entry"])):"docker-tag-and-push"===t.type?(Object(a["s"])(),Object(a["d"])(b,{key:3,entry:t},null,8,["entry"])):"download"===t.type?(Object(a["s"])(),Object(a["d"])(p,{key:4,entry:t},null,8,["entry"])):"git-apply-patch"===t.type?(Object(a["s"])(),Object(a["d"])(l,{key:5,entry:t},null,8,["entry"])):"git-commit-changes"===t.type?(Object(a["s"])(),Object(a["d"])(h,{key:6,entry:t},null,8,["entry"])):"git-tag-current-commit"===t.type?(Object(a["s"])(),Object(a["d"])(O,{key:7,entry:t},null,8,["entry"])):"markdown"===t.type?(Object(a["s"])(),Object(a["d"])(j,{key:8,entry:t},null,8,["entry"])):"replace"===t.type?(Object(a["s"])(),Object(a["d"])(d,{key:9,entry:t},null,8,["entry"])):"section"===t.type?(Object(a["s"])(),Object(a["d"])(f,{key:10,entry:t},null,8,["entry"])):"subsection"===t.type?(Object(a["s"])(),Object(a["d"])(m,{key:11,entry:t},null,8,["entry"])):(Object(a["s"])(),Object(a["f"])("div",E,[x,Object(a["g"])("code",null,Object(a["C"])(t.type),1)]))])})),128))])}function U(t,e,n,c,o,r){return Object(a["s"])(),Object(a["f"])("h2",null,Object(a["C"])(t.chapter),1)}var V=function(t){Object(m["a"])(n,t);var e=Object(k["a"])(n);function n(){var t;return Object(d["a"])(this,n),t=e.apply(this,arguments),t.chapter="",t}return Object(f["a"])(n,[{key:"mounted",value:function(){this.chapter=this.entry.parameters[0]}}]),n}(S["b"]);V=Object(y["a"])([Object(S["a"])({name:"Chapter",props:{entry:Object}})],V);var W=V;const J=b()(W,[["render",U]]);var q=J,z={class:"command"};function K(t,e,n,c,o,r){return Object(a["s"])(),Object(a["f"])("pre",z,Object(a["C"])(t.command),1)}n("99af"),n("a15b");var Y=function(t){Object(m["a"])(n,t);var e=Object(k["a"])(n);function n(){var t;return Object(d["a"])(this,n),t=e.apply(this,arguments),t.command="",t}return Object(f["a"])(n,[{key:"mounted",value:function(){var t=this.entry.workingDirectory?"".concat(this.entry.workingDirectory," "):"",e="$";this.command="".concat(t).concat(e," ").concat(this.entry.parameters.join(" "))}}]),n}(S["b"]);Y=Object(y["a"])([Object(S["a"])({name:"Command",props:{entry:Object}})],Y);var Q=Y;n("7c7d");const X=b()(Q,[["render",K],["__scopeId","data-v-69955097"]]);var Z=X,tt={class:"filePath"},et={class:"content"};function nt(t,e,n,c,o,r){return Object(a["s"])(),Object(a["f"])(a["a"],null,[Object(a["g"])("div",tt,"Create the file: "+Object(a["C"])(t.filePath)+", with the following contents",1),Object(a["g"])("pre",et,Object(a["C"])(t.content),1)],64)}n("fb6a");var at=function(t){Object(m["a"])(n,t);var e=Object(k["a"])(n);function n(){var t;return Object(d["a"])(this,n),t=e.apply(this,arguments),t.filePath="",t.content="",t}return Object(f["a"])(n,[{key:"mounted",value:function(){var t=this.entry.workingDirectory?"".concat(this.entry.workingDirectory,"/"):"";this.filePath="".concat(t).concat(this.entry.parameters[0]),this.content="".concat(this.entry.parameters.slice(1).join("\n"),"\n")}}]),n}(S["b"]);at=Object(y["a"])([Object(S["a"])({name:"Create",props:{entry:Object}})],at);var ct=at;n("00e1");const ot=b()(ct,[["render",nt],["__scopeId","data-v-a076d8da"]]);var rt=ot,it={class:"command"};function st(t,e,n,c,o,r){return Object(a["s"])(),Object(a["f"])("pre",it,Object(a["C"])(t.command),1)}var ut=function(t){Object(m["a"])(n,t);var e=Object(k["a"])(n);function n(){var t;return Object(d["a"])(this,n),t=e.apply(this,arguments),t.command="",t}return Object(f["a"])(n,[{key:"mounted",value:function(){var t=this.entry.workingDirectory?"".concat(this.entry.workingDirectory," "):"",e="$",n=this.entry.parameters[0],a=this.entry.parameters[1];this.command="".concat(t).concat(e," docker tag ").concat(n," ").concat(a,"\n"),this.command+="".concat(t).concat(e," docker push ").concat(a)}}]),n}(S["b"]);ut=Object(y["a"])([Object(S["a"])({name:"DockerTagAndPush",props:{entry:Object}})],ut);var bt=ut;n("ebc8");const pt=b()(bt,[["render",st],["__scopeId","data-v-772c1472"]]);var lt=pt,ht={class:"download"};function Ot(t,e,n,c,o,r){return Object(a["s"])(),Object(a["f"])("pre",ht,Object(a["C"])(t.command),1)}var jt=function(t){Object(m["a"])(n,t);var e=Object(k["a"])(n);function n(){var t;return Object(d["a"])(this,n),t=e.apply(this,arguments),t.command="",t}return Object(f["a"])(n,[{key:"mounted",value:function(){var t=this.entry.workingDirectory?"".concat(this.entry.workingDirectory," "):"",e="$",n=this.entry.parameters[0],a=this.entry.parameters[1];this.command="".concat(t).concat(e," curl --location ").concat(n," --output ").concat(a)}}]),n}(S["b"]);jt=Object(y["a"])([Object(S["a"])({name:"Download",props:{entry:Object}})],jt);var dt=jt;n("fbc4");const ft=b()(dt,[["render",Ot],["__scopeId","data-v-4aa81ad2"]]);var mt=ft,kt=["innerHTML"];function yt(t,e,n,c,o,r){return Object(a["s"])(),Object(a["f"])("div",{class:"patch",innerHTML:t.patch},null,8,kt)}var vt=n("ae7d"),gt=function(t){Object(m["a"])(n,t);var e=Object(k["a"])(n);function n(){var t;return Object(d["a"])(this,n),t=e.apply(this,arguments),t.patch="",t}return Object(f["a"])(n,[{key:"mounted",value:function(){var t={drawFileList:!1,fileContentToggle:!1};this.patch=Object(vt["a"])(this.entry.parameters.join("\n"),t)}}]),n}(S["b"]);gt=Object(y["a"])([Object(S["a"])({name:"GitApplyPatch",props:{entry:Object}})],gt);var wt=gt;n("054c");const Pt=b()(wt,[["render",yt],["__scopeId","data-v-53991c92"]]);var Ct=Pt;function At(t,e,n,c,o,r){return Object(a["s"])(),Object(a["f"])("pre",null,Object(a["C"])(t.command),1)}var Rt=function(t){Object(m["a"])(n,t);var e=Object(k["a"])(n);function n(){var t;return Object(d["a"])(this,n),t=e.apply(this,arguments),t.command="",t}return Object(f["a"])(n,[{key:"mounted",value:function(){var t=this.entry.workingDirectory?"".concat(this.entry.workingDirectory," "):"",e="$",n=this.entry.parameters[0],a=this.entry.parameters.length>1&&this.entry.parameters[1],c=this.entry.pushChanges||!1;this.command="".concat(t).concat(e," git add ."),this.command+="\n".concat(t).concat(e,' git commit --message "').concat(n,'"'),a?(this.command+="\n".concat(t).concat(e,' git tag --annotate "').concat(a,'" --message "').concat(n,'"'),c&&(this.command+="\n".concat(t).concat(e,' git push --atomic origin main "').concat(a,'"'))):c&&(this.command+="\n".concat(t).concat(e," git push origin main"))}}]),n}(S["b"]);Rt=Object(y["a"])([Object(S["a"])({name:"GitCommitChanges",props:{entry:Object}})],Rt);var Tt=Rt;n("b8d2");const _t=b()(Tt,[["render",At],["__scopeId","data-v-15656594"]]);var Ft=_t;function Bt(t,e,n,c,o,r){return Object(a["s"])(),Object(a["f"])("pre",null,Object(a["C"])(t.command),1)}var It=function(t){Object(m["a"])(n,t);var e=Object(k["a"])(n);function n(){var t;return Object(d["a"])(this,n),t=e.apply(this,arguments),t.command="",t}return Object(f["a"])(n,[{key:"mounted",value:function(){var t=this.entry.workingDirectory?"".concat(this.entry.workingDirectory," "):"",e="$",n=this.entry.parameters[0],a=this.entry.parameters.length>1&&this.entry.parameters[1];this.command="".concat(t).concat(e,' git tag --annotate "').concat(n,'"'),a&&(this.command+=' --message "'.concat(a,'"'))}}]),n}(S["b"]);It=Object(y["a"])([Object(S["a"])({name:"GitTagCurrentCommit",props:{entry:Object}})],It);var Mt=It;n("54ae");const St=b()(Mt,[["render",Bt],["__scopeId","data-v-13a8ad56"]]);var Dt=St,Ht=["innerHTML"];function $t(t,e,n,c,o,r){return Object(a["s"])(),Object(a["f"])("div",{class:"markdown",innerHTML:t.html},null,8,Ht)}var Lt=n("c2a7"),Nt=function(t){Object(m["a"])(n,t);var e=Object(k["a"])(n);function n(){var t;return Object(d["a"])(this,n),t=e.apply(this,arguments),t.html="",t}return Object(f["a"])(n,[{key:"mounted",value:function(){var t=this.entry.parameters.join("\n");this.html=Lt["a"].parse(t)}}]),n}(S["b"]);Nt=Object(y["a"])([Object(S["a"])({name:"Markdown",props:{entry:Object}})],Nt);var Et=Nt;const xt=b()(Et,[["render",$t]]);var Gt=xt,Ut={class:"filePath"},Vt={class:"content"};function Wt(t,e,n,c,o,r){return Object(a["s"])(),Object(a["f"])(a["a"],null,[Object(a["g"])("div",Ut,"Replace the file: "+Object(a["C"])(t.filePath)+", with the following contents",1),Object(a["g"])("pre",Vt,Object(a["C"])(t.content),1)],64)}var Jt=function(t){Object(m["a"])(n,t);var e=Object(k["a"])(n);function n(){var t;return Object(d["a"])(this,n),t=e.apply(this,arguments),t.filePath="",t.content="",t}return Object(f["a"])(n,[{key:"mounted",value:function(){var t=this.entry.workingDirectory?"".concat(this.entry.workingDirectory,"/"):"";this.filePath="".concat(t).concat(this.entry.parameters[0]),this.content="".concat(this.entry.parameters.slice(1).join("\n"),"\n")}}]),n}(S["b"]);Jt=Object(y["a"])([Object(S["a"])({name:"Replace",props:{entry:Object}})],Jt);var qt=Jt;n("fa61");const zt=b()(qt,[["render",Wt],["__scopeId","data-v-9e92373a"]]);var Kt=zt;function Yt(t,e,n,c,o,r){return Object(a["s"])(),Object(a["f"])("h3",null,Object(a["C"])(t.section),1)}var Qt=function(t){Object(m["a"])(n,t);var e=Object(k["a"])(n);function n(){var t;return Object(d["a"])(this,n),t=e.apply(this,arguments),t.section="",t}return Object(f["a"])(n,[{key:"mounted",value:function(){this.section=this.entry.parameters[0]}}]),n}(S["b"]);Qt=Object(y["a"])([Object(S["a"])({name:"Section",props:{entry:Object}})],Qt);var Xt=Qt;const Zt=b()(Xt,[["render",Yt]]);var te=Zt;function ee(t,e,n,c,o,r){return Object(a["s"])(),Object(a["f"])("h4",null,Object(a["C"])(t.subsection),1)}var ne=function(t){Object(m["a"])(n,t);var e=Object(k["a"])(n);function n(){var t;return Object(d["a"])(this,n),t=e.apply(this,arguments),t.subsection="",t}return Object(f["a"])(n,[{key:"mounted",value:function(){this.subsection=this.entry.parameters[0]}}]),n}(S["b"]);ne=Object(y["a"])([Object(S["a"])({name:"Subsection",props:{entry:Object}})],ne);var ae=ne;const ce=b()(ae,[["render",ee]]);var oe=ce,re=function(t){Object(m["a"])(n,t);var e=Object(k["a"])(n);function n(){return Object(d["a"])(this,n),e.apply(this,arguments)}return n}(S["b"]);re=Object(y["a"])([Object(S["a"])({name:"Content",props:{chapter:Object},components:{ChapterRenderer:q,Command:Z,Create:rt,DockerTagAndPush:lt,Download:mt,GitApplyPatch:Ct,GitCommitChanges:Ft,GitTagCurrentCommit:Dt,Markdown:Gt,Replace:Kt,Section:te,Subsection:oe}})],re);var ie=re;n("c281");const se=b()(ie,[["render",G],["__scopeId","data-v-0c7e59f0"]]);var ue=se,be={class:"message-bar"};function pe(t,e,n,c,o,r){return Object(a["s"])(),Object(a["f"])("div",be,[Object(a["g"])("div",null,Object(a["C"])(t.message),1)])}var le=function(t){Object(m["a"])(n,t);var e=Object(k["a"])(n);function n(){return Object(d["a"])(this,n),e.apply(this,arguments)}return n}(S["b"]);le=Object(y["a"])([Object(S["a"])({name:"MessageBar",props:{message:String}})],le);var he=le;const Oe=b()(he,[["render",pe]]);var je=Oe,de=function(t){return Object(a["w"])("data-v-1e6079a4"),t=t(),Object(a["t"])(),t},fe={class:"open"},me={class:"openRepository"},ke=de((function(){return Object(a["g"])("h2",null,"Open repository",-1)})),ye=de((function(){return Object(a["g"])("label",{for:"openLocal"},"Open",-1)})),ve=de((function(){return Object(a["g"])("label",{for:"openFromFolder"},"Open from folder",-1)})),ge=["disabled"],we=de((function(){return Object(a["g"])("label",{for:"checkout"},"Checkout from an online git repository, like GitHub or GitLab",-1)})),Pe=de((function(){return Object(a["g"])("label",{for:"pathToRepository"},"Path to repository",-1)})),Ce=["disabled"],Ae=de((function(){return Object(a["g"])("label",{for:"checkoutToFolder"},"Checkout to folder",-1)})),Re=["disabled"],Te=de((function(){return Object(a["g"])("label",{for:"createNew"},"New",-1)})),_e=de((function(){return Object(a["g"])("label",{for:"createNewFolder"},"Open from folder",-1)})),Fe=["disabled"],Be={class:"workspace"},Ie=de((function(){return Object(a["g"])("h2",null,"Workspace",-1)})),Me=de((function(){return Object(a["g"])("label",{for:"workspace"},"Workspace",-1)})),Se={class:"buttons"},De={class:"actionMessage"};function He(t,e,n,c,o,r){return Object(a["s"])(),Object(a["f"])("div",fe,[Object(a["g"])("div",me,[ke,Object(a["g"])("div",null,[Object(a["I"])(Object(a["g"])("input",{type:"radio",id:"openLocal",value:"openLocal","onUpdate:modelValue":e[0]||(e[0]=function(e){return t.openFrom=e})},null,512),[[a["E"],t.openFrom]]),ye]),Object(a["g"])("div",null,[ve,Object(a["I"])(Object(a["g"])("input",{type:"text",id:"openFromFolder","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.bookPath=e}),disabled:"openLocal"!==t.openFrom},null,8,ge),[[a["F"],t.bookPath]])]),Object(a["g"])("div",null,[Object(a["I"])(Object(a["g"])("input",{type:"radio",id:"checkout",value:"checkout","onUpdate:modelValue":e[2]||(e[2]=function(e){return t.openFrom=e})},null,512),[[a["E"],t.openFrom]]),we]),Object(a["g"])("div",null,[Pe,Object(a["I"])(Object(a["g"])("input",{type:"text",id:"pathToRepository","onUpdate:modelValue":e[3]||(e[3]=function(e){return t.pathToRepository=e}),disabled:"checkout"!==t.openFrom},null,8,Ce),[[a["F"],t.pathToRepository]])]),Object(a["g"])("div",null,[Ae,Object(a["I"])(Object(a["g"])("input",{type:"text",id:"checkoutToFolder","onUpdate:modelValue":e[4]||(e[4]=function(e){return t.bookPath=e}),disabled:"checkout"!==t.openFrom},null,8,Re),[[a["F"],t.bookPath]])]),Object(a["g"])("div",null,[Object(a["I"])(Object(a["g"])("input",{type:"radio",id:"createNew",value:"createNew","onUpdate:modelValue":e[5]||(e[5]=function(e){return t.openFrom=e})},null,512),[[a["E"],t.openFrom]]),Te]),Object(a["g"])("div",null,[_e,Object(a["I"])(Object(a["g"])("input",{type:"text",id:"createNewFolder","onUpdate:modelValue":e[6]||(e[6]=function(e){return t.bookPath=e}),disabled:"createNew"!==t.openFrom},null,8,Fe),[[a["F"],t.bookPath]])])]),Object(a["g"])("div",Be,[Ie,Object(a["g"])("div",null,[Me,Object(a["I"])(Object(a["g"])("input",{type:"text",id:"workspace","onUpdate:modelValue":e[7]||(e[7]=function(e){return t.workPath=e})},null,512),[[a["F"],t.workPath]])])]),Object(a["g"])("div",Se,["openLocal"===t.openFrom?(Object(a["s"])(),Object(a["f"])("button",{key:0,class:"open",onClick:e[8]||(e[8]=function(){return t.onOpenBook&&t.onOpenBook.apply(t,arguments)})},"Open")):Object(a["e"])("",!0),"checkout"===t.openFrom?(Object(a["s"])(),Object(a["f"])("button",{key:1,class:"open",onClick:e[9]||(e[9]=function(){return t.onCheckoutBook&&t.onCheckoutBook.apply(t,arguments)})},"Checkout and Open")):Object(a["e"])("",!0),"createNew"===t.openFrom?(Object(a["s"])(),Object(a["f"])("button",{key:2,class:"open",onClick:e[10]||(e[10]=function(){return t.onCreateBook&&t.onCreateBook.apply(t,arguments)})},"Create")):Object(a["e"])("",!0),Object(a["g"])("span",De,Object(a["C"])(t.actionMessage),1)])])}var $e=n("5530"),Le=(n("498a"),function(t){Object(m["a"])(n,t);var e=Object(k["a"])(n);function n(){var t;return Object(d["a"])(this,n),t=e.apply(this,arguments),t.pathToRepository="",t.openFrom="openLocal",t.actionMessage="",t.bookPath="",t.workPath="",t}return Object(f["a"])(n,[{key:"mounted",value:function(){var t=this;this.$nextTick((function(){t.bookPath=t.workspace.bookPath,t.workPath=t.workspace.workPath,t.isBookPathSet()&&t.isWorkPathSet()&&t.handleOpenBook()}))}},{key:"onCheckoutBook",value:function(){this.actionMessage="This feature is not yet implemented"}},{key:"onCreateBook",value:function(){this.actionMessage="This feature is not yet implemented"}},{key:"onOpenBook",value:function(){this.actionMessage="",this.isBookPathSet()&&this.isWorkPathSet()?this.handleOpenBook():this.actionMessage="Please provide both the book and workspace folder paths"}},{key:"handleOpenBook",value:function(){var t=this,e=this.bookPath,n=this.workPath;this.openBook(e).then((function(a){var c=Object($e["a"])(Object($e["a"])({},a),{},{bookPath:e,workPath:n});t.$emit("bookOpened",c)})).catch((function(e){t.actionMessage="Failed to open working book (".concat(e.message,")")}))}},{key:"openBook",value:function(t){return M.get("/api/book/open",{params:{bookPath:t}}).then((function(t){return t.data})).then((function(t){return t}))}},{key:"isBookPathSet",value:function(){return this.isNonBlank(this.bookPath)}},{key:"isWorkPathSet",value:function(){return this.isNonBlank(this.workPath)}},{key:"isNonBlank",value:function(t){return t.trim().length>0}}]),n}(S["b"]));Le=Object(y["a"])([Object(S["a"])({name:"Open",emits:["bookOpened"],props:{workspace:Object}})],Le);var Ne=Le;n("b805");const Ee=b()(Ne,[["render",He],["__scopeId","data-v-1e6079a4"]]);var xe=Ee,Ge=(n("a4d3"),n("e01a"),{class:"toc"}),Ue=Object(a["g"])("h2",null,"Chapters",-1),Ve=["onClick"];function We(t,e,n,c,o,r){return Object(a["s"])(),Object(a["f"])("div",Ge,[Object(a["g"])("h1",null,Object(a["C"])(t.book.title),1),Object(a["g"])("p",null,Object(a["C"])(t.book.description),1),Ue,(Object(a["s"])(!0),Object(a["f"])(a["a"],null,Object(a["z"])(t.book.chapters,(function(e){return Object(a["s"])(),Object(a["f"])("div",{key:e.title},[Object(a["g"])("h3",{onClick:function(n){return t.onReadChapter(e.path)}},Object(a["C"])(e.title),9,Ve),Object(a["g"])("p",null,Object(a["C"])(e.description),1)])})),128))])}var Je=function(t){Object(m["a"])(n,t);var e=Object(k["a"])(n);function n(){return Object(d["a"])(this,n),e.apply(this,arguments)}return Object(f["a"])(n,[{key:"mounted",value:function(){var t=this;this.$nextTick((function(){t.chapterPath.trim().length>0&&t.onReadChapter(t.chapterPath)}))}},{key:"onReadChapter",value:function(t){var e=this;this.readChapter(this.book.bookPath,t).then((function(t){e.$emit("chapterRead",t)})).catch((function(t){var n,a;e.$emit("errorMessage","Failed to open chapter (".concat((null===t||void 0===t||null===(n=t.response)||void 0===n||null===(a=n.data)||void 0===a?void 0:a.message)||t.message,")"))}))}},{key:"readChapter",value:function(t,e){return M.get("/api/book/read-chapter",{params:{bookPath:t,chapterPath:e}}).then((function(t){return t.data})).then((function(n){return Object($e["a"])(Object($e["a"])({},n),{},{bookPath:t,chapterPath:e})}))}}]),n}(S["b"]);Je=Object(y["a"])([Object(S["a"])({name:"Toc",emits:["chapterRead","errorMessage"],props:{book:Object,chapterPath:String}})],Je);var qe=Je;const ze=b()(qe,[["render",We]]);var Ke=ze,Ye=function(t){Object(m["a"])(n,t);var e=Object(k["a"])(n);function n(){var t;return Object(d["a"])(this,n),t=e.apply(this,arguments),t.appIsRunning=!1,t.book=null,t.chapter=null,t.workspace={bookPath:"",workPath:"",chapterPath:""},t.message=null,t}return Object(f["a"])(n,[{key:"mounted",value:function(){this.workspace.bookPath=this.$route.params.bookPath||"",this.workspace.workPath=this.$route.params.workPath||"",this.workspace.chapterPath=this.$route.params.chapterPath||""}},{key:"onAppIsRunning",value:function(t){this.appIsRunning=t}},{key:"onOpenBook",value:function(t){this.workspace.bookPath=t.bookPath,this.workspace.workPath=t.workPath,this.$router.push({name:"Home",params:{bookPath:this.workspace.bookPath,workPath:this.workspace.workPath}}),this.book=t}},{key:"onChapterRead",value:function(t){this.workspace.chapterPath=t.chapterPath,this.$router.push({name:"Home",params:{bookPath:this.workspace.bookPath,workPath:this.workspace.workPath,chapterPath:this.workspace.chapterPath}}),this.chapter=t}},{key:"onErrorMessage",value:function(t){this.message=t}}]),n}(S["b"]);Ye=Object(y["a"])([Object(S["a"])({components:{MessageBar:je,App:L,Open:xe,Toc:Ke,Content:ue}})],Ye);var Qe=Ye;const Xe=b()(Qe,[["render",j]]);var Ze=Xe,tn=n("6c02"),en=[{path:"/:bookPath?/:workPath?/:chapterPath?",name:"Home",component:Ze,props:!0},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],nn=Object(tn["a"])({history:Object(tn["b"])(),routes:en}),an=nn,cn=n("5502"),on=Object(cn["a"])({state:{},mutations:{},actions:{},modules:{}});Object(a["c"])(h).use(on).use(an).mount("#app")},d3d5:function(t,e,n){},d5ea:function(t,e,n){},e9fe:function(t,e,n){},ebc8:function(t,e,n){"use strict";n("e9fe")},fa61:function(t,e,n){"use strict";n("a5b2")},fbc4:function(t,e,n){"use strict";n("adc3")}});
//# sourceMappingURL=app.eb81cb8d.js.map