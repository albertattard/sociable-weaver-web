(function(e){function t(t){for(var a,r,i=t[0],s=t[1],u=t[2],b=0,l=[];b<i.length;b++)r=i[b],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&l.push(c[r][0]),c[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);p&&p(t);while(l.length)l.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==c[i]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},c={app:0},o=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"b9c51b74"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"a3cac4da"}[e]+".css",c=s.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],b=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(b===a||b===c))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){u=l[i],b=u.getAttribute("data-href");if(b===a||b===c)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],p.parentNode.removeChild(p),n(o)},p.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){r[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=o);var u,b=document.createElement("script");b.charset="utf-8",b.timeout=120,s.nc&&b.setAttribute("nonce",s.nc),b.src=i(e);var l=new Error;u=function(t){b.onerror=b.onload=null,clearTimeout(p);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,n[1](l)}c[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:b})}),12e4);b.onerror=b.onload=u,document.head.appendChild(b)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/web/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],b=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=b;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"050e":function(e,t,n){"use strict";n("8aaf")},"07f2":function(e,t,n){},"0f06":function(e,t,n){},"124d":function(e,t,n){},1562:function(e,t,n){"use strict";n("b1bf")},"219d":function(e,t,n){},2910:function(e,t,n){},"408c":function(e,t,n){"use strict";n("219d")},"42c6":function(e,t,n){"use strict";n("9e05")},"5d0f":function(e,t,n){},"65c0":function(e,t,n){"use strict";n("07f2")},"6ed8":function(e,t,n){},"80de":function(e,t,n){},"8aaf":function(e,t,n){},"9e05":function(e,t,n){},a18a:function(e,t,n){"use strict";n("80de")},b1bf:function(e,t,n){},b35f:function(e,t,n){"use strict";n("f5c4")},b805:function(e,t,n){"use strict";n("cb3e")},cb3e:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={id:"nav"},c=Object(a["i"])("Home"),o=Object(a["i"])(" | "),i=Object(a["i"])("About");function s(e,t){var n=Object(a["A"])("router-link"),s=Object(a["A"])("router-view");return Object(a["s"])(),Object(a["f"])(a["a"],null,[Object(a["g"])("div",r,[Object(a["j"])(n,{to:"/"},{default:Object(a["H"])((function(){return[c]})),_:1}),o,Object(a["j"])(n,{to:"/about"},{default:Object(a["H"])((function(){return[i]})),_:1})]),Object(a["j"])(s)],64)}n("1562");var u=n("d959"),b=n.n(u);const l={},p=b()(l,[["render",s]]);var h=p,O=(n("d3b7"),n("3ca3"),n("ddb0"),{class:"home"});function j(e,t,n,r,c,o){var i=Object(a["A"])("MessageBar"),s=Object(a["A"])("App"),u=Object(a["A"])("Open"),b=Object(a["A"])("Toc"),l=Object(a["A"])("Content");return Object(a["s"])(),Object(a["f"])("div",O,[null!==e.message?(Object(a["s"])(),Object(a["d"])(i,{key:0,ref:"messageBar",message:e.message},null,8,["message"])):Object(a["e"])("",!0),Object(a["j"])(s,{ref:"app",onAppIsRunning:e.onAppIsRunning},null,8,["onAppIsRunning"]),e.appIsRunning?(Object(a["s"])(),Object(a["d"])(u,{key:1,ref:"open",onBookOpened:e.onOpenBook,workspace:e.workspace},null,8,["onBookOpened","workspace"])):Object(a["e"])("",!0),null!==e.book?(Object(a["s"])(),Object(a["d"])(b,{key:2,ref:"toc",onChapterRead:e.onChapterRead,onErrorMessage:e.onErrorMessage,book:e.book,chapterPath:e.workspace.chapterPath},null,8,["onChapterRead","onErrorMessage","book","chapterPath"])):Object(a["e"])("",!0),null!==e.chapter?(Object(a["s"])(),Object(a["d"])(l,{key:3,ref:"content",chapter:e.chapter,onVariableUpdated:e.onVariableUpdated},null,8,["chapter","onVariableUpdated"])):Object(a["e"])("",!0)])}var d=n("d4ec"),f=n("bee2"),y=n("262e"),v=n("2caf"),k=(n("159b"),n("9ab4")),m=function(e){return Object(a["w"])("data-v-0fe8c5cc"),e=e(),Object(a["t"])(),e},g={class:"app"},w={key:0,class:"help"},P=m((function(){return Object(a["g"])("h2",null,"Getting started",-1)})),C=m((function(){return Object(a["g"])("li",null,[Object(a["i"])(" Make sure that you have Java 17 installed. You can use "),Object(a["g"])("a",{href:"https://sdkman.io/install",target:"_blank"},"SDKMAN"),Object(a["i"])(" to install Java ")],-1)})),A=m((function(){return Object(a["g"])("li",null,[Object(a["i"])(" Download the application: "),Object(a["g"])("a",{class:"download-app",href:"https://github.com/sociable-weaver/app-java-boot/releases/download/v0.9/sw-app.jar"},"sw-app.jar")],-1)})),R=m((function(){return Object(a["g"])("li",null,[Object(a["i"])(" Run the application using the following command "),Object(a["g"])("pre",null,"$ java -jar sw-app.jar"),Object(a["i"])(" You can run the application from anywhere you like and you don't have to save it in a special folder. ")],-1)})),F=Object(a["i"])(" Click "),_=Object(a["i"])(" to check if the application has started correctly. ");function T(e,t,n,r,c,o){return Object(a["s"])(),Object(a["f"])("div",g,[Object(a["g"])("h1",null,Object(a["C"])(e.message),1),e.showHelp?(Object(a["s"])(),Object(a["f"])("div",w,[P,Object(a["g"])("ol",null,[C,A,R,Object(a["g"])("li",null,[F,Object(a["g"])("a",{class:"try-app-again",href:"#",onClick:t[0]||(t[0]=function(t){return e.checkApplicationStatus()})},"here"),_])])])):Object(a["e"])("",!0)])}var I=n("bc3a"),S=n.n(I),B=S.a.create({baseURL:"http://localhost:8077",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),M=n("ce1f"),V=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){var e;return Object(d["a"])(this,n),e=t.apply(this,arguments),e.message="Sociable Weaver",e.showHelp=!1,e}return Object(f["a"])(n,[{key:"mounted",value:function(){var e=this;this.$nextTick((function(){e.checkApplicationStatus()}))}},{key:"checkApplicationStatus",value:function(){var e=this;this.isAppRunning().then((function(t){e.message=t.message,e.showHelp=t.showHelp,e.$emit("appIsRunning",t.isRunning)})).catch((function(t){e.message="Failed to check the application status (".concat(t.message,")"),e.showHelp=!1,e.$emit("appIsRunning",!1)}))}},{key:"isAppRunning",value:function(){return B.get("/api/hello").then((function(e){return e.status})).then((function(e){return 200===e?{isRunning:!0,message:"Application is running",showHelp:!1}:{isRunning:!1,message:"Application is running, but unhealthy",showHelp:!1}})).catch((function(e){if("Network Error"===e.message)return{isRunning:!1,message:"Application is not running or cannot be reached by this page",showHelp:!0};throw e}))}}]),n}(M["b"]);V=Object(k["a"])([Object(M["a"])({name:"App",emits:["appIsRunning"]})],V);var D=V;n("050e");const E=b()(D,[["render",T],["__scopeId","data-v-0fe8c5cc"]]);var U=E,$={class:"content"},H={key:13,class:"error"},L=Object(a["i"])(" Do not know how to renter entries of type: ");function N(e,t,n,r,c,o){var i=Object(a["A"])("ChapterRenderer"),s=Object(a["A"])("Command"),u=Object(a["A"])("Create"),b=Object(a["A"])("DockerTagAndPush"),l=Object(a["A"])("Download"),p=Object(a["A"])("GitApplyPatch"),h=Object(a["A"])("GitCommitChanges"),O=Object(a["A"])("GitTagCurrentCommit"),j=Object(a["A"])("Markdown"),d=Object(a["A"])("Replace"),f=Object(a["A"])("Section"),y=Object(a["A"])("Subsection"),v=Object(a["A"])("Variable");return Object(a["s"])(),Object(a["f"])("div",$,[(Object(a["s"])(!0),Object(a["f"])(a["a"],null,Object(a["z"])(e.chapter.entries,(function(t){return Object(a["s"])(),Object(a["f"])("div",{key:t.id},["chapter"===t.type?(Object(a["s"])(),Object(a["d"])(i,{key:0,entry:t},null,8,["entry"])):"command"===t.type?(Object(a["s"])(),Object(a["d"])(s,{key:1,entry:t},null,8,["entry"])):"create"===t.type?(Object(a["s"])(),Object(a["d"])(u,{key:2,entry:t},null,8,["entry"])):"docker-tag-and-push"===t.type?(Object(a["s"])(),Object(a["d"])(b,{key:3,entry:t},null,8,["entry"])):"download"===t.type?(Object(a["s"])(),Object(a["d"])(l,{key:4,entry:t},null,8,["entry"])):"git-apply-patch"===t.type?(Object(a["s"])(),Object(a["d"])(p,{key:5,entry:t},null,8,["entry"])):"git-commit-changes"===t.type?(Object(a["s"])(),Object(a["d"])(h,{key:6,entry:t},null,8,["entry"])):"git-tag-current-commit"===t.type?(Object(a["s"])(),Object(a["d"])(O,{key:7,entry:t},null,8,["entry"])):"markdown"===t.type?(Object(a["s"])(),Object(a["d"])(j,{key:8,entry:t},null,8,["entry"])):"replace"===t.type?(Object(a["s"])(),Object(a["d"])(d,{key:9,entry:t},null,8,["entry"])):"section"===t.type?(Object(a["s"])(),Object(a["d"])(f,{key:10,entry:t},null,8,["entry"])):"subsection"===t.type?(Object(a["s"])(),Object(a["d"])(y,{key:11,entry:t},null,8,["entry"])):"variable"===t.type?(Object(a["s"])(),Object(a["d"])(v,{key:12,entry:t,onVariableUpdated:e.onVariableUpdated},null,8,["entry","onVariableUpdated"])):(Object(a["s"])(),Object(a["f"])("div",H,[L,Object(a["g"])("code",null,Object(a["C"])(t.type),1)]))])})),128))])}function x(e,t,n,r,c,o){return Object(a["s"])(),Object(a["f"])("h2",null,Object(a["C"])(e.chapter),1)}var G=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"chapter",get:function(){return this.entry.parameters[0]}}]),n}(M["b"]);G=Object(k["a"])([Object(M["a"])({name:"Chapter",props:{entry:Object}})],G);var W=G;const J=b()(W,[["render",x]]);var q=J;function z(e,t,n,r,c,o){return Object(a["s"])(),Object(a["f"])("pre",null,Object(a["C"])(e.command),1)}n("99af"),n("a15b"),n("ac1f"),n("5319"),n("5b81");var K=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"command",get:function(){var e=this,t=this.entry.workingDirectory?"".concat(this.entry.workingDirectory," "):"",n="$",a="".concat(t).concat(n," ").concat(this.entry.parameters.join("\n"));return void 0!=this.entry.variables&&void 0!=this.entry.values&&this.entry.variables.forEach((function(t){var n=e.entry.values[t];void 0!==n&&(a=a.replaceAll("${".concat(t,"}"),n))})),a}}]),n}(M["b"]);K=Object(k["a"])([Object(M["a"])({name:"Command",props:{entry:Object}})],K);var Y=K;n("e0db");const Q=b()(Y,[["render",z],["__scopeId","data-v-7e8e3432"]]);var X=Q,Z={class:"filePath"},ee={class:"content"};function te(e,t,n,r,c,o){return Object(a["s"])(),Object(a["f"])(a["a"],null,[Object(a["g"])("div",Z,"Create the file: "+Object(a["C"])(e.filePath)+", with the following contents",1),Object(a["g"])("pre",ee,Object(a["C"])(e.content),1)],64)}n("fb6a");var ne=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"filePath",get:function(){var e=this.entry.workingDirectory?"".concat(this.entry.workingDirectory,"/"):"";return"".concat(e).concat(this.entry.parameters[0])}},{key:"content",get:function(){return"".concat(this.entry.parameters.slice(1).join("\n"),"\n")}}]),n}(M["b"]);ne=Object(k["a"])([Object(M["a"])({name:"Create",props:{entry:Object}})],ne);var ae=ne;n("f09e");const re=b()(ae,[["render",te],["__scopeId","data-v-5e3ed990"]]);var ce=re,oe={class:"command"};function ie(e,t,n,r,c,o){return Object(a["s"])(),Object(a["f"])("pre",oe,Object(a["C"])(e.command),1)}var se=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"command",get:function(){var e=this.entry.workingDirectory?"".concat(this.entry.workingDirectory," "):"",t="$",n=this.entry.parameters[0],a=this.entry.parameters[1],r="".concat(e).concat(t," docker tag ").concat(n," ").concat(a,"\n");return r+="".concat(e).concat(t," docker push ").concat(a),r}}]),n}(M["b"]);se=Object(k["a"])([Object(M["a"])({name:"DockerTagAndPush",props:{entry:Object}})],se);var ue=se;n("e7d8");const be=b()(ue,[["render",ie],["__scopeId","data-v-51be87ed"]]);var le=be,pe={class:"download"};function he(e,t,n,r,c,o){return Object(a["s"])(),Object(a["f"])("pre",pe,Object(a["C"])(e.command),1)}var Oe=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"command",get:function(){var e=this.entry.workingDirectory?"".concat(this.entry.workingDirectory," "):"",t="$",n=this.entry.parameters[0],a=this.entry.parameters[1];return"".concat(e).concat(t," curl --location ").concat(n," --output ").concat(a)}}]),n}(M["b"]);Oe=Object(k["a"])([Object(M["a"])({name:"Download",props:{entry:Object}})],Oe);var je=Oe;n("a18a");const de=b()(je,[["render",he],["__scopeId","data-v-190c563e"]]);var fe=de,ye=["innerHTML"];function ve(e,t,n,r,c,o){return Object(a["s"])(),Object(a["f"])("div",{class:"patch",innerHTML:e.patch},null,8,ye)}var ke=n("ae7d"),me=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"patch",get:function(){var e={drawFileList:!1,fileContentToggle:!1};return Object(ke["a"])(this.entry.parameters.join("\n"),e)}}]),n}(M["b"]);me=Object(k["a"])([Object(M["a"])({name:"GitApplyPatch",props:{entry:Object}})],me);var ge=me;n("42c6");const we=b()(ge,[["render",ve],["__scopeId","data-v-5e7f3d1b"]]);var Pe=we;function Ce(e,t,n,r,c,o){return Object(a["s"])(),Object(a["f"])("pre",null,Object(a["C"])(e.command),1)}var Ae=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"command",get:function(){var e=this.entry.workingDirectory?"".concat(this.entry.workingDirectory," "):"",t="$",n=this.entry.parameters[0],a=this.entry.parameters.length>1&&this.entry.parameters[1],r=this.entry.pushChanges||!1,c="".concat(e).concat(t," git add .");return c+="\n".concat(e).concat(t,' git commit --message "').concat(n,'"'),a?(c+="\n".concat(e).concat(t,' git tag --annotate "').concat(a,'" --message "').concat(n,'"'),r&&(c+="\n".concat(e).concat(t,' git push --atomic origin main "').concat(a,'"'))):r&&(c+="\n".concat(e).concat(t," git push origin main")),c}}]),n}(M["b"]);Ae=Object(k["a"])([Object(M["a"])({name:"GitCommitChanges",props:{entry:Object}})],Ae);var Re=Ae;n("408c");const Fe=b()(Re,[["render",Ce],["__scopeId","data-v-1fb7ec6e"]]);var _e=Fe;function Te(e,t,n,r,c,o){return Object(a["s"])(),Object(a["f"])("pre",null,Object(a["C"])(e.command),1)}var Ie=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"command",get:function(){var e=this.entry.workingDirectory?"".concat(this.entry.workingDirectory," "):"",t="$",n=this.entry.parameters[0],a=this.entry.parameters.length>1&&this.entry.parameters[1],r="".concat(e).concat(t,' git tag --annotate "').concat(n,'"');return a&&(r+=' --message "'.concat(a,'"')),r}}]),n}(M["b"]);Ie=Object(k["a"])([Object(M["a"])({name:"GitTagCurrentCommit",props:{entry:Object}})],Ie);var Se=Ie;n("65c0");const Be=b()(Se,[["render",Te],["__scopeId","data-v-8ab522fc"]]);var Me=Be,Ve=["innerHTML"];function De(e,t,n,r,c,o){return Object(a["s"])(),Object(a["f"])("div",{class:"markdown",innerHTML:e.html},null,8,Ve)}var Ee=n("c2a7"),Ue=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"html",get:function(){var e=this.entry.parameters.join("\n");return Ee["a"].parse(e)}}]),n}(M["b"]);Ue=Object(k["a"])([Object(M["a"])({name:"Markdown",props:{entry:Object}})],Ue);var $e=Ue;n("b35f");const He=b()($e,[["render",De],["__scopeId","data-v-6353ea9c"]]);var Le=He,Ne={class:"filePath"},xe={class:"content"};function Ge(e,t,n,r,c,o){return Object(a["s"])(),Object(a["f"])(a["a"],null,[Object(a["g"])("div",Ne,"Replace the file: "+Object(a["C"])(e.filePath)+", with the following contents",1),Object(a["g"])("pre",xe,Object(a["C"])(e.content),1)],64)}var We=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"filePath",get:function(){var e=this.entry.workingDirectory?"".concat(this.entry.workingDirectory,"/"):"";return"".concat(e).concat(this.entry.parameters[0])}},{key:"content",get:function(){return"".concat(this.entry.parameters.slice(1).join("\n"),"\n")}}]),n}(M["b"]);We=Object(k["a"])([Object(M["a"])({name:"Replace",props:{entry:Object}})],We);var Je=We;n("e3fc");const qe=b()(Je,[["render",Ge],["__scopeId","data-v-9ae4b7f4"]]);var ze=qe;function Ke(e,t,n,r,c,o){return Object(a["s"])(),Object(a["f"])("h3",null,Object(a["C"])(e.section),1)}var Ye=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"section",get:function(){return this.entry.parameters[0]}}]),n}(M["b"]);Ye=Object(k["a"])([Object(M["a"])({name:"Section",props:{entry:Object}})],Ye);var Qe=Ye;const Xe=b()(Qe,[["render",Ke]]);var Ze=Xe;function et(e,t,n,r,c,o){return Object(a["s"])(),Object(a["f"])("h4",null,Object(a["C"])(e.subsection),1)}var tt=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"subsection",get:function(){return this.entry.parameters[0]}}]),n}(M["b"]);tt=Object(k["a"])([Object(M["a"])({name:"Subsection",props:{entry:Object}})],tt);var nt=tt;const at=b()(nt,[["render",et]]);var rt=at,ct=(n("b0c0"),Object(a["g"])("div",null,"Variable",-1)),ot={for:"{{name}}-value"};function it(e,t,n,r,c,o){return Object(a["s"])(),Object(a["f"])("div",null,[ct,Object(a["g"])("label",ot,Object(a["C"])(e.name),1),e.sensitive?Object(a["I"])((Object(a["s"])(),Object(a["f"])("input",{key:0,type:"password","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.value=t}),id:"{{name}}-value"},null,512)),[[a["F"],e.value]]):Object(a["I"])((Object(a["s"])(),Object(a["f"])("input",{key:1,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.value=t}),id:"{{name}}-value"},null,512)),[[a["F"],e.value]]),Object(a["g"])("button",{onClick:t[2]||(t[2]=function(){return e.onVariableSet&&e.onVariableSet.apply(e,arguments)})},"Set")])}var st=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){var e;return Object(d["a"])(this,n),e=t.apply(this,arguments),e.value="",e}return Object(f["a"])(n,[{key:"mounted",value:function(){this.value=this.readDefaultValueOrEmptyFromEntry()}},{key:"name",get:function(){return this.entry.name}},{key:"sensitive",get:function(){return void 0===this.entry.sensitive||this.entry.sensitive}},{key:"onVariableSet",value:function(){var e=this.readDefaultValueOrEmptyFromEntry();this.value!==e&&this.$emit("variableUpdated",{name:this.entry.name,value:this.value,previousValue:e})}},{key:"readDefaultValueOrEmptyFromEntry",value:function(){return void 0===this.entry.parameters||0==this.entry.parameters.length?"":this.entry.parameters[0]}}]),n}(M["b"]);st=Object(k["a"])([Object(M["a"])({name:"Variable",props:{entry:Object},emits:["variableUpdated"]})],st);var ut=st;const bt=b()(ut,[["render",it]]);var lt=bt,pt=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"onVariableUpdated",value:function(e){this.$emit("variableUpdated",e)}}]),n}(M["b"]);pt=Object(k["a"])([Object(M["a"])({name:"Content",props:{chapter:Object},components:{ChapterRenderer:q,Command:X,Create:ce,DockerTagAndPush:le,Download:fe,GitApplyPatch:Pe,GitCommitChanges:_e,GitTagCurrentCommit:Me,Markdown:Le,Replace:ze,Section:Ze,Subsection:rt,Variable:lt},emits:["variableUpdated"]})],pt);var ht=pt;n("dde2");const Ot=b()(ht,[["render",N],["__scopeId","data-v-7b2666a4"]]);var jt=Ot,dt={class:"message-bar"};function ft(e,t,n,r,c,o){return Object(a["s"])(),Object(a["f"])("div",dt,[Object(a["g"])("div",null,Object(a["C"])(e.message),1)])}var yt=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return n}(M["b"]);yt=Object(k["a"])([Object(M["a"])({name:"MessageBar",props:{message:String}})],yt);var vt=yt;const kt=b()(vt,[["render",ft]]);var mt=kt,gt=function(e){return Object(a["w"])("data-v-1e6079a4"),e=e(),Object(a["t"])(),e},wt={class:"open"},Pt={class:"openRepository"},Ct=gt((function(){return Object(a["g"])("h2",null,"Open repository",-1)})),At=gt((function(){return Object(a["g"])("label",{for:"openLocal"},"Open",-1)})),Rt=gt((function(){return Object(a["g"])("label",{for:"openFromFolder"},"Open from folder",-1)})),Ft=["disabled"],_t=gt((function(){return Object(a["g"])("label",{for:"checkout"},"Checkout from an online git repository, like GitHub or GitLab",-1)})),Tt=gt((function(){return Object(a["g"])("label",{for:"pathToRepository"},"Path to repository",-1)})),It=["disabled"],St=gt((function(){return Object(a["g"])("label",{for:"checkoutToFolder"},"Checkout to folder",-1)})),Bt=["disabled"],Mt=gt((function(){return Object(a["g"])("label",{for:"createNew"},"New",-1)})),Vt=gt((function(){return Object(a["g"])("label",{for:"createNewFolder"},"Open from folder",-1)})),Dt=["disabled"],Et={class:"workspace"},Ut=gt((function(){return Object(a["g"])("h2",null,"Workspace",-1)})),$t=gt((function(){return Object(a["g"])("label",{for:"workspace"},"Workspace",-1)})),Ht={class:"buttons"},Lt={class:"actionMessage"};function Nt(e,t,n,r,c,o){return Object(a["s"])(),Object(a["f"])("div",wt,[Object(a["g"])("div",Pt,[Ct,Object(a["g"])("div",null,[Object(a["I"])(Object(a["g"])("input",{type:"radio",id:"openLocal",value:"openLocal","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.openFrom=t})},null,512),[[a["E"],e.openFrom]]),At]),Object(a["g"])("div",null,[Rt,Object(a["I"])(Object(a["g"])("input",{type:"text",id:"openFromFolder","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.bookPath=t}),disabled:"openLocal"!==e.openFrom},null,8,Ft),[[a["F"],e.bookPath]])]),Object(a["g"])("div",null,[Object(a["I"])(Object(a["g"])("input",{type:"radio",id:"checkout",value:"checkout","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.openFrom=t})},null,512),[[a["E"],e.openFrom]]),_t]),Object(a["g"])("div",null,[Tt,Object(a["I"])(Object(a["g"])("input",{type:"text",id:"pathToRepository","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.pathToRepository=t}),disabled:"checkout"!==e.openFrom},null,8,It),[[a["F"],e.pathToRepository]])]),Object(a["g"])("div",null,[St,Object(a["I"])(Object(a["g"])("input",{type:"text",id:"checkoutToFolder","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.bookPath=t}),disabled:"checkout"!==e.openFrom},null,8,Bt),[[a["F"],e.bookPath]])]),Object(a["g"])("div",null,[Object(a["I"])(Object(a["g"])("input",{type:"radio",id:"createNew",value:"createNew","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.openFrom=t})},null,512),[[a["E"],e.openFrom]]),Mt]),Object(a["g"])("div",null,[Vt,Object(a["I"])(Object(a["g"])("input",{type:"text",id:"createNewFolder","onUpdate:modelValue":t[6]||(t[6]=function(t){return e.bookPath=t}),disabled:"createNew"!==e.openFrom},null,8,Dt),[[a["F"],e.bookPath]])])]),Object(a["g"])("div",Et,[Ut,Object(a["g"])("div",null,[$t,Object(a["I"])(Object(a["g"])("input",{type:"text",id:"workspace","onUpdate:modelValue":t[7]||(t[7]=function(t){return e.workPath=t})},null,512),[[a["F"],e.workPath]])])]),Object(a["g"])("div",Ht,["openLocal"===e.openFrom?(Object(a["s"])(),Object(a["f"])("button",{key:0,class:"open",onClick:t[8]||(t[8]=function(){return e.onOpenBook&&e.onOpenBook.apply(e,arguments)})},"Open")):Object(a["e"])("",!0),"checkout"===e.openFrom?(Object(a["s"])(),Object(a["f"])("button",{key:1,class:"open",onClick:t[9]||(t[9]=function(){return e.onCheckoutBook&&e.onCheckoutBook.apply(e,arguments)})},"Checkout and Open")):Object(a["e"])("",!0),"createNew"===e.openFrom?(Object(a["s"])(),Object(a["f"])("button",{key:2,class:"open",onClick:t[10]||(t[10]=function(){return e.onCreateBook&&e.onCreateBook.apply(e,arguments)})},"Create")):Object(a["e"])("",!0),Object(a["g"])("span",Lt,Object(a["C"])(e.actionMessage),1)])])}var xt=n("5530"),Gt=(n("498a"),function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){var e;return Object(d["a"])(this,n),e=t.apply(this,arguments),e.pathToRepository="",e.openFrom="openLocal",e.actionMessage="",e.bookPath="",e.workPath="",e}return Object(f["a"])(n,[{key:"mounted",value:function(){var e=this;this.$nextTick((function(){e.bookPath=e.workspace.bookPath,e.workPath=e.workspace.workPath,e.isBookPathSet()&&e.isWorkPathSet()&&e.handleOpenBook()}))}},{key:"onCheckoutBook",value:function(){this.actionMessage="This feature is not yet implemented"}},{key:"onCreateBook",value:function(){this.actionMessage="This feature is not yet implemented"}},{key:"onOpenBook",value:function(){this.actionMessage="",this.isBookPathSet()&&this.isWorkPathSet()?this.handleOpenBook():this.actionMessage="Please provide both the book and workspace folder paths"}},{key:"handleOpenBook",value:function(){var e=this,t=this.bookPath,n=this.workPath;this.openBook(t).then((function(a){var r=Object(xt["a"])(Object(xt["a"])({},a),{},{bookPath:t,workPath:n});e.$emit("bookOpened",r)})).catch((function(t){e.actionMessage="Failed to open working book (".concat(t.message,")")}))}},{key:"openBook",value:function(e){return B.get("/api/book/open",{params:{bookPath:e}}).then((function(e){return e.data})).then((function(e){return e}))}},{key:"isBookPathSet",value:function(){return this.isNonBlank(this.bookPath)}},{key:"isWorkPathSet",value:function(){return this.isNonBlank(this.workPath)}},{key:"isNonBlank",value:function(e){return e.trim().length>0}}]),n}(M["b"]));Gt=Object(k["a"])([Object(M["a"])({name:"Open",emits:["bookOpened"],props:{workspace:Object}})],Gt);var Wt=Gt;n("b805");const Jt=b()(Wt,[["render",Nt],["__scopeId","data-v-1e6079a4"]]);var qt=Jt,zt=(n("a4d3"),n("e01a"),{class:"toc"}),Kt=Object(a["g"])("h2",null,"Chapters",-1),Yt=["onClick"];function Qt(e,t,n,r,c,o){return Object(a["s"])(),Object(a["f"])("div",zt,[Object(a["g"])("h1",null,Object(a["C"])(e.book.title),1),Object(a["g"])("p",null,Object(a["C"])(e.book.description),1),Kt,(Object(a["s"])(!0),Object(a["f"])(a["a"],null,Object(a["z"])(e.book.chapters,(function(t){return Object(a["s"])(),Object(a["f"])("div",{key:t.title},[Object(a["g"])("h3",{onClick:function(n){return e.onReadChapter(t.path)}},Object(a["C"])(t.title),9,Yt),Object(a["g"])("p",null,Object(a["C"])(t.description),1)])})),128))])}var Xt=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"mounted",value:function(){var e=this;this.$nextTick((function(){e.chapterPath.trim().length>0&&e.onReadChapter(e.chapterPath)}))}},{key:"onReadChapter",value:function(e){var t=this;this.readChapter(this.book.bookPath,e).then((function(e){t.$emit("chapterRead",e)})).catch((function(e){var n,a;t.$emit("errorMessage","Failed to open chapter (".concat((null===e||void 0===e||null===(n=e.response)||void 0===n||null===(a=n.data)||void 0===a?void 0:a.message)||e.message,")"))}))}},{key:"readChapter",value:function(e,t){return B.get("/api/book/read-chapter",{params:{bookPath:e,chapterPath:t}}).then((function(e){return e.data})).then((function(n){return Object(xt["a"])(Object(xt["a"])({},n),{},{bookPath:e,chapterPath:t})}))}}]),n}(M["b"]);Xt=Object(k["a"])([Object(M["a"])({name:"Toc",emits:["chapterRead","errorMessage"],props:{book:Object,chapterPath:String}})],Xt);var Zt=Xt;const en=b()(Zt,[["render",Qt]]);var tn=en;function nn(e,t){void 0!==e.variables&&e.variables.indexOf(t.name)>-1&&(void 0===e.values&&(e.values={}),e.values[t.name]=t.value)}var an=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){var e;return Object(d["a"])(this,n),e=t.apply(this,arguments),e.appIsRunning=!1,e.book=null,e.chapter=null,e.workspace={bookPath:"",workPath:"",chapterPath:""},e.message=null,e}return Object(f["a"])(n,[{key:"mounted",value:function(){this.workspace.bookPath=this.$route.params.bookPath||"",this.workspace.workPath=this.$route.params.workPath||"",this.workspace.chapterPath=this.$route.params.chapterPath||""}},{key:"onAppIsRunning",value:function(e){this.appIsRunning=e}},{key:"onOpenBook",value:function(e){this.workspace.bookPath=e.bookPath,this.workspace.workPath=e.workPath,this.$router.push({name:"Home",params:{bookPath:this.workspace.bookPath,workPath:this.workspace.workPath}}),this.book=e}},{key:"onChapterRead",value:function(e){this.workspace.chapterPath=e.chapterPath,this.$router.push({name:"Home",params:{bookPath:this.workspace.bookPath,workPath:this.workspace.workPath,chapterPath:this.workspace.chapterPath}}),this.chapter=e}},{key:"onErrorMessage",value:function(e){this.message=e}},{key:"onVariableUpdated",value:function(e){var t;null===(t=this.chapter)||void 0===t||t.entries.forEach((function(t){nn(t,e)}))}}]),n}(M["b"]);an=Object(k["a"])([Object(M["a"])({components:{MessageBar:mt,App:U,Open:qt,Toc:tn,Content:jt}})],an);var rn=an;const cn=b()(rn,[["render",j]]);var on=cn,sn=n("6c02"),un=[{path:"/:bookPath?/:workPath?/:chapterPath?",name:"Home",component:on,props:!0},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],bn=Object(sn["a"])({history:Object(sn["b"])(),routes:un}),ln=bn,pn=n("5502"),hn=Object(pn["a"])({state:{},mutations:{},actions:{},modules:{}});Object(a["c"])(h).use(hn).use(ln).mount("#app")},dde2:function(e,t,n){"use strict";n("0f06")},e0db:function(e,t,n){"use strict";n("5d0f")},e3fc:function(e,t,n){"use strict";n("6ed8")},e7d8:function(e,t,n){"use strict";n("124d")},f09e:function(e,t,n){"use strict";n("2910")},f5c4:function(e,t,n){}});
//# sourceMappingURL=app.a32c83c5.js.map