(function(e){function t(t){for(var a,r,i=t[0],u=t[1],s=t[2],b=0,l=[];b<i.length;b++)r=i[b],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&l.push(c[r][0]),c[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);p&&p(t);while(l.length)l.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==c[i]&&(a=!1)}a&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},c={app:0},o=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"b93b297b"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"a3cac4da"}[e]+".css",c=u.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var s=o[i],b=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(b===a||b===c))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){s=l[i],b=s.getAttribute("data-href");if(b===a||b===c)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],p.parentNode.removeChild(p),n(o)},p.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){r[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=o);var s,b=document.createElement("script");b.charset="utf-8",b.timeout=120,u.nc&&b.setAttribute("nonce",u.nc),b.src=i(e);var l=new Error;s=function(t){b.onerror=b.onload=null,clearTimeout(p);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,n[1](l)}c[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:b})}),12e4);b.onerror=b.onload=s,document.head.appendChild(b)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/web/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],b=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=b;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"050e":function(e,t,n){"use strict";n("8aaf")},"07f2":function(e,t,n){},"124d":function(e,t,n){},1562:function(e,t,n){"use strict";n("b1bf")},"219d":function(e,t,n){},2910:function(e,t,n){},"408c":function(e,t,n){"use strict";n("219d")},"42c6":function(e,t,n){"use strict";n("9e05")},"5d0f":function(e,t,n){},"65c0":function(e,t,n){"use strict";n("07f2")},"6ed8":function(e,t,n){},"80de":function(e,t,n){},"8aaf":function(e,t,n){},"9e05":function(e,t,n){},a18a:function(e,t,n){"use strict";n("80de")},b01e:function(e,t,n){},b1bf:function(e,t,n){},b35f:function(e,t,n){"use strict";n("f5c4")},b805:function(e,t,n){"use strict";n("cb3e")},bdfb:function(e,t,n){"use strict";n("b01e")},cb3e:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={id:"nav"},c=Object(a["i"])("Home"),o=Object(a["i"])(" | "),i=Object(a["i"])("About");function u(e,t){var n=Object(a["B"])("router-link"),u=Object(a["B"])("router-view");return Object(a["t"])(),Object(a["f"])(a["a"],null,[Object(a["g"])("div",r,[Object(a["j"])(n,{to:"/"},{default:Object(a["I"])((function(){return[c]})),_:1}),o,Object(a["j"])(n,{to:"/about"},{default:Object(a["I"])((function(){return[i]})),_:1})]),Object(a["j"])(u)],64)}n("1562");var s=n("d959"),b=n.n(s);const l={},p=b()(l,[["render",u]]);var h=p,d=(n("d3b7"),n("3ca3"),n("ddb0"),{class:"home"});function O(e,t,n,r,c,o){var i=Object(a["B"])("MessageBar"),u=Object(a["B"])("App"),s=Object(a["B"])("Open"),b=Object(a["B"])("Toc"),l=Object(a["B"])("Content");return Object(a["t"])(),Object(a["f"])("div",d,[null!==e.message?(Object(a["t"])(),Object(a["d"])(i,{key:0,ref:"messageBar",message:e.message},null,8,["message"])):Object(a["e"])("",!0),Object(a["j"])(u,{ref:"app",onAppIsRunning:e.onAppIsRunning},null,8,["onAppIsRunning"]),e.appIsRunning?(Object(a["t"])(),Object(a["d"])(s,{key:1,ref:"open",onBookOpened:e.onOpenBook,workspace:e.workspace},null,8,["onBookOpened","workspace"])):Object(a["e"])("",!0),null!==e.book?(Object(a["t"])(),Object(a["d"])(b,{key:2,ref:"toc",onChapterRead:e.onChapterRead,onErrorMessage:e.onErrorMessage,book:e.book,chapterPath:e.workspace.chapterPath},null,8,["onChapterRead","onErrorMessage","book","chapterPath"])):Object(a["e"])("",!0),null!==e.chapter?(Object(a["t"])(),Object(a["d"])(l,{key:3,ref:"content",chapter:e.chapter,onVariableUpdated:e.onVariableUpdated,onVariableInitialised:e.onVariableUpdated},null,8,["chapter","onVariableUpdated","onVariableInitialised"])):Object(a["e"])("",!0)])}var j=n("d4ec"),f=n("bee2"),y=n("262e"),v=n("2caf"),k=(n("159b"),n("9ab4")),m=function(e){return Object(a["x"])("data-v-0fe8c5cc"),e=e(),Object(a["u"])(),e},g={class:"app"},w={key:0,class:"help"},P=m((function(){return Object(a["g"])("h2",null,"Getting started",-1)})),C=m((function(){return Object(a["g"])("li",null,[Object(a["i"])(" Make sure that you have Java 17 installed. You can use "),Object(a["g"])("a",{href:"https://sdkman.io/install",target:"_blank"},"SDKMAN"),Object(a["i"])(" to install Java ")],-1)})),D=m((function(){return Object(a["g"])("li",null,[Object(a["i"])(" Download the application: "),Object(a["g"])("a",{class:"download-app",href:"https://github.com/sociable-weaver/app-java-boot/releases/download/v0.9/sw-app.jar"},"sw-app.jar")],-1)})),R=m((function(){return Object(a["g"])("li",null,[Object(a["i"])(" Run the application using the following command "),Object(a["g"])("pre",null,"$ java -jar sw-app.jar"),Object(a["i"])(" You can run the application from anywhere you like and you don't have to save it in a special folder. ")],-1)})),B=Object(a["i"])(" Click "),I=Object(a["i"])(" to check if the application has started correctly. ");function S(e,t,n,r,c,o){return Object(a["t"])(),Object(a["f"])("div",g,[Object(a["g"])("h1",null,Object(a["D"])(e.message),1),e.showHelp?(Object(a["t"])(),Object(a["f"])("div",w,[P,Object(a["g"])("ol",null,[C,D,R,Object(a["g"])("li",null,[B,Object(a["g"])("a",{class:"try-app-again",href:"#",onClick:t[0]||(t[0]=function(t){return e.checkApplicationStatus()})},"here"),I])])])):Object(a["e"])("",!0)])}var _=n("bc3a"),T=n.n(_),E=T.a.create({baseURL:"http://localhost:8077",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),V=n("ce1f"),F=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){var e;return Object(j["a"])(this,n),e=t.apply(this,arguments),e.message="Sociable Weaver",e.showHelp=!1,e}return Object(f["a"])(n,[{key:"mounted",value:function(){var e=this;this.$nextTick((function(){e.checkApplicationStatus()}))}},{key:"checkApplicationStatus",value:function(){var e=this;this.isAppRunning().then((function(t){e.message=t.message,e.showHelp=t.showHelp,e.$emit("appIsRunning",t.isRunning)})).catch((function(t){e.message="Failed to check the application status (".concat(t.message,")"),e.showHelp=!1,e.$emit("appIsRunning",!1)}))}},{key:"isAppRunning",value:function(){return E.get("/api/hello").then((function(e){return e.status})).then((function(e){return 200===e?{isRunning:!0,message:"Application is running",showHelp:!1}:{isRunning:!1,message:"Application is running, but unhealthy",showHelp:!1}})).catch((function(e){if("Network Error"===e.message)return{isRunning:!1,message:"Application is not running or cannot be reached by this page",showHelp:!0};throw e}))}}]),n}(V["b"]);F=Object(k["a"])([Object(V["a"])({name:"App",emits:["appIsRunning"]})],F);var A=F;n("050e");const M=b()(A,[["render",S],["__scopeId","data-v-0fe8c5cc"]]);var U=M,N={class:"content"},x=["id"],H={key:13,class:"error"},$=Object(a["i"])(" Do not know how to renter entries of type: "),G={key:15,class:"error"},L={key:16,class:"buttons runnable"},J=["disabled","onClick"],W=["disabled","onClick"];function q(e,t,n,r,c,o){var i=Object(a["B"])("ChapterRenderer"),u=Object(a["B"])("Command"),s=Object(a["B"])("Create"),b=Object(a["B"])("DockerTagAndPush"),l=Object(a["B"])("Download"),p=Object(a["B"])("GitApplyPatch"),h=Object(a["B"])("GitCommitChanges"),d=Object(a["B"])("GitTagCurrentCommit"),O=Object(a["B"])("Markdown"),j=Object(a["B"])("Replace"),f=Object(a["B"])("Section"),y=Object(a["B"])("Subsection"),v=Object(a["B"])("Variable");return Object(a["t"])(),Object(a["f"])("div",N,[(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["A"])(e.chapter.entries,(function(t,n){return Object(a["t"])(),Object(a["f"])("div",{key:t.id,id:t.id},["chapter"===t.type?(Object(a["t"])(),Object(a["d"])(i,{key:0,entry:t},null,8,["entry"])):"command"===t.type?(Object(a["t"])(),Object(a["d"])(u,{key:1,entry:t},null,8,["entry"])):"create"===t.type?(Object(a["t"])(),Object(a["d"])(s,{key:2,entry:t},null,8,["entry"])):"docker-tag-and-push"===t.type?(Object(a["t"])(),Object(a["d"])(b,{key:3,entry:t},null,8,["entry"])):"download"===t.type?(Object(a["t"])(),Object(a["d"])(l,{key:4,entry:t},null,8,["entry"])):"git-apply-patch"===t.type?(Object(a["t"])(),Object(a["d"])(p,{key:5,entry:t},null,8,["entry"])):"git-commit-changes"===t.type?(Object(a["t"])(),Object(a["d"])(h,{key:6,entry:t},null,8,["entry"])):"git-tag-current-commit"===t.type?(Object(a["t"])(),Object(a["d"])(d,{key:7,entry:t},null,8,["entry"])):"markdown"===t.type?(Object(a["t"])(),Object(a["d"])(O,{key:8,entry:t},null,8,["entry"])):"replace"===t.type?(Object(a["t"])(),Object(a["d"])(j,{key:9,entry:t},null,8,["entry"])):"section"===t.type?(Object(a["t"])(),Object(a["d"])(f,{key:10,entry:t},null,8,["entry"])):"subsection"===t.type?(Object(a["t"])(),Object(a["d"])(y,{key:11,entry:t},null,8,["entry"])):"variable"===t.type?(Object(a["t"])(),Object(a["d"])(v,{key:12,entry:t,onVariableUpdated:e.onVariableUpdated,onVariableInitialised:e.onVariableInitialised},null,8,["entry","onVariableUpdated","onVariableInitialised"])):(Object(a["t"])(),Object(a["f"])("div",H,[$,Object(a["g"])("code",null,Object(a["D"])(t.type),1)])),t.output?(Object(a["t"])(),Object(a["f"])("pre",{key:14,class:Object(a["p"])(["output",{error:t.failed}])},Object(a["D"])(t.output),3)):Object(a["e"])("",!0),t.error?(Object(a["t"])(),Object(a["f"])("pre",G,Object(a["D"])(t.error),1)):Object(a["e"])("",!0),t.runnable?(Object(a["t"])(),Object(a["f"])("div",L,[Object(a["g"])("button",{disabled:e.disabled,onClick:function(n){return e.onRun(t)},class:"primary"},"Run",8,J),Object(a["g"])("button",{disabled:e.disabled,onClick:function(t){return e.onRunUntilHere(n)}},"Run Until Here",8,W)])):Object(a["e"])("",!0)],8,x)})),128))])}n("b0c0");function K(e,t,n,r,c,o){return Object(a["t"])(),Object(a["f"])("h2",null,Object(a["D"])(e.chapter),1)}var Y=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"chapter",get:function(){return this.entry.parameters[0]}}]),n}(V["b"]);Y=Object(k["a"])([Object(V["a"])({name:"Chapter",props:{entry:Object}})],Y);var X=Y;const z=b()(X,[["render",K]]);var Q=z;function Z(e,t,n,r,c,o){return Object(a["t"])(),Object(a["f"])("pre",null,Object(a["D"])(e.command),1)}n("99af"),n("a15b"),n("ac1f"),n("5319"),n("5b81");var ee=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"command",get:function(){var e=this,t=this.entry.workingDirectory?"".concat(this.entry.workingDirectory," "):"",n="$",a="".concat(t).concat(n," ").concat(this.entry.parameters.join("\n"));return void 0!=this.entry.variables&&void 0!=this.entry.values&&this.entry.variables.forEach((function(t){var n=e.entry.values[t];void 0!==n&&(a=a.replaceAll("${".concat(t,"}"),n))})),a}}]),n}(V["b"]);ee=Object(k["a"])([Object(V["a"])({name:"Command",props:{entry:Object}})],ee);var te=ee;n("e0db");const ne=b()(te,[["render",Z],["__scopeId","data-v-7e8e3432"]]);var ae=ne,re={class:"filePath"},ce={class:"content"};function oe(e,t,n,r,c,o){return Object(a["t"])(),Object(a["f"])(a["a"],null,[Object(a["g"])("div",re,"Create the file: "+Object(a["D"])(e.filePath)+", with the following contents",1),Object(a["g"])("pre",ce,Object(a["D"])(e.content),1)],64)}n("fb6a");var ie=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"filePath",get:function(){var e=this.entry.workingDirectory?"".concat(this.entry.workingDirectory,"/"):"";return"".concat(e).concat(this.entry.parameters[0])}},{key:"content",get:function(){return"".concat(this.entry.parameters.slice(1).join("\n"),"\n")}}]),n}(V["b"]);ie=Object(k["a"])([Object(V["a"])({name:"Create",props:{entry:Object}})],ie);var ue=ie;n("f09e");const se=b()(ue,[["render",oe],["__scopeId","data-v-5e3ed990"]]);var be=se,le={class:"command"};function pe(e,t,n,r,c,o){return Object(a["t"])(),Object(a["f"])("pre",le,Object(a["D"])(e.command),1)}var he=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"command",get:function(){var e=this.entry.workingDirectory?"".concat(this.entry.workingDirectory," "):"",t="$",n=this.entry.parameters[0],a=this.entry.parameters[1],r="".concat(e).concat(t," docker tag ").concat(n," ").concat(a,"\n");return r+="".concat(e).concat(t," docker push ").concat(a),r}}]),n}(V["b"]);he=Object(k["a"])([Object(V["a"])({name:"DockerTagAndPush",props:{entry:Object}})],he);var de=he;n("e7d8");const Oe=b()(de,[["render",pe],["__scopeId","data-v-51be87ed"]]);var je=Oe,fe={class:"download"};function ye(e,t,n,r,c,o){return Object(a["t"])(),Object(a["f"])("pre",fe,Object(a["D"])(e.command),1)}var ve=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"command",get:function(){var e=this.entry.workingDirectory?"".concat(this.entry.workingDirectory," "):"",t="$",n=this.entry.parameters[0],a=this.entry.parameters[1];return"".concat(e).concat(t," curl --location ").concat(n," --output ").concat(a)}}]),n}(V["b"]);ve=Object(k["a"])([Object(V["a"])({name:"Download",props:{entry:Object}})],ve);var ke=ve;n("a18a");const me=b()(ke,[["render",ye],["__scopeId","data-v-190c563e"]]);var ge=me,we=["innerHTML"];function Pe(e,t,n,r,c,o){return Object(a["t"])(),Object(a["f"])("div",{class:"patch",innerHTML:e.patch},null,8,we)}var Ce=n("ae7d"),De=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"patch",get:function(){var e={drawFileList:!1,fileContentToggle:!1};return Object(Ce["a"])(this.entry.parameters.join("\n"),e)}}]),n}(V["b"]);De=Object(k["a"])([Object(V["a"])({name:"GitApplyPatch",props:{entry:Object}})],De);var Re=De;n("42c6");const Be=b()(Re,[["render",Pe],["__scopeId","data-v-5e7f3d1b"]]);var Ie=Be;function Se(e,t,n,r,c,o){return Object(a["t"])(),Object(a["f"])("pre",null,Object(a["D"])(e.command),1)}var _e=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"command",get:function(){var e=this.entry.workingDirectory?"".concat(this.entry.workingDirectory," "):"",t="$",n=this.entry.parameters[0],a=this.entry.parameters.length>1&&this.entry.parameters[1],r=this.entry.pushChanges||!1,c="".concat(e).concat(t," git add .");return c+="\n".concat(e).concat(t,' git commit --message "').concat(n,'"'),a?(c+="\n".concat(e).concat(t,' git tag --annotate "').concat(a,'" --message "').concat(n,'"'),r&&(c+="\n".concat(e).concat(t,' git push --atomic origin main "').concat(a,'"'))):r&&(c+="\n".concat(e).concat(t," git push origin main")),c}}]),n}(V["b"]);_e=Object(k["a"])([Object(V["a"])({name:"GitCommitChanges",props:{entry:Object}})],_e);var Te=_e;n("408c");const Ee=b()(Te,[["render",Se],["__scopeId","data-v-1fb7ec6e"]]);var Ve=Ee;function Fe(e,t,n,r,c,o){return Object(a["t"])(),Object(a["f"])("pre",null,Object(a["D"])(e.command),1)}var Ae=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"command",get:function(){var e=this.entry.workingDirectory?"".concat(this.entry.workingDirectory," "):"",t="$",n=this.entry.parameters[0],a=this.entry.parameters.length>1&&this.entry.parameters[1],r="".concat(e).concat(t,' git tag --annotate "').concat(n,'"');return a&&(r+=' --message "'.concat(a,'"')),r}}]),n}(V["b"]);Ae=Object(k["a"])([Object(V["a"])({name:"GitTagCurrentCommit",props:{entry:Object}})],Ae);var Me=Ae;n("65c0");const Ue=b()(Me,[["render",Fe],["__scopeId","data-v-8ab522fc"]]);var Ne=Ue,xe=["innerHTML"];function He(e,t,n,r,c,o){return Object(a["t"])(),Object(a["f"])("div",{class:"markdown",innerHTML:e.html},null,8,xe)}var $e=n("c2a7"),Ge=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"html",get:function(){var e=this.entry.parameters.join("\n");return $e["a"].parse(e)}}]),n}(V["b"]);Ge=Object(k["a"])([Object(V["a"])({name:"Markdown",props:{entry:Object}})],Ge);var Le=Ge;n("b35f");const Je=b()(Le,[["render",He],["__scopeId","data-v-6353ea9c"]]);var We=Je,qe={class:"filePath"},Ke={class:"content"};function Ye(e,t,n,r,c,o){return Object(a["t"])(),Object(a["f"])(a["a"],null,[Object(a["g"])("div",qe,"Replace the file: "+Object(a["D"])(e.filePath)+", with the following contents",1),Object(a["g"])("pre",Ke,Object(a["D"])(e.content),1)],64)}var Xe=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"filePath",get:function(){var e=this.entry.workingDirectory?"".concat(this.entry.workingDirectory,"/"):"";return"".concat(e).concat(this.entry.parameters[0])}},{key:"content",get:function(){return"".concat(this.entry.parameters.slice(1).join("\n"),"\n")}}]),n}(V["b"]);Xe=Object(k["a"])([Object(V["a"])({name:"Replace",props:{entry:Object}})],Xe);var ze=Xe;n("e3fc");const Qe=b()(ze,[["render",Ye],["__scopeId","data-v-9ae4b7f4"]]);var Ze=Qe;function et(e,t,n,r,c,o){return Object(a["t"])(),Object(a["f"])("h3",null,Object(a["D"])(e.section),1)}var tt=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"section",get:function(){return this.entry.parameters[0]}}]),n}(V["b"]);tt=Object(k["a"])([Object(V["a"])({name:"Section",props:{entry:Object}})],tt);var nt=tt;const at=b()(nt,[["render",et]]);var rt=at;function ct(e,t,n,r,c,o){return Object(a["t"])(),Object(a["f"])("h4",null,Object(a["D"])(e.subsection),1)}var ot=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"subsection",get:function(){return this.entry.parameters[0]}}]),n}(V["b"]);ot=Object(k["a"])([Object(V["a"])({name:"Subsection",props:{entry:Object}})],ot);var it=ot;const ut=b()(it,[["render",ct]]);var st=ut,bt=Object(a["g"])("div",null,"Variable",-1);function lt(e,t,n,r,c,o){return Object(a["t"])(),Object(a["f"])("div",null,[bt,Object(a["g"])("label",null,Object(a["D"])(e.name),1),e.sensitive?Object(a["J"])((Object(a["t"])(),Object(a["f"])("input",{key:0,type:"password","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.value=t})},null,512)),[[a["G"],e.value]]):Object(a["J"])((Object(a["t"])(),Object(a["f"])("input",{key:1,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.value=t})},null,512)),[[a["G"],e.value]]),Object(a["g"])("button",{onClick:t[2]||(t[2]=function(){return e.onVariableSet&&e.onVariableSet.apply(e,arguments)})},"Set")])}var pt=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){var e;return Object(j["a"])(this,n),e=t.apply(this,arguments),e.value="",e}return Object(f["a"])(n,[{key:"mounted",value:function(){if(this.value=this.readDefaultValueOrEmptyFromEntry(),this.value.length>0){var e={name:this.entry.name,value:this.value};this.$emit("variableInitialised",e)}}},{key:"name",get:function(){return this.entry.name}},{key:"sensitive",get:function(){return void 0===this.entry.sensitive||this.entry.sensitive}},{key:"onVariableSet",value:function(){var e=this.readDefaultValueOrEmptyFromEntry();this.value!==e&&this.$emit("variableUpdated",{name:this.entry.name,value:this.value,previousValue:e})}},{key:"readDefaultValueOrEmptyFromEntry",value:function(){return void 0===this.entry.parameters||0==this.entry.parameters.length?"":this.entry.parameters[0]}}]),n}(V["b"]);pt=Object(k["a"])([Object(V["a"])({name:"Variable",props:{entry:Object},emits:["variableUpdated","variableInitialised"]})],pt);var ht=pt;const dt=b()(ht,[["render",lt]]);var Ot=dt,jt=(n("e9c4"),n("8030")),ft=n("cc7d"),yt=n.n(ft);function vt(e,t){return new Promise((function(n,a){try{var r=new yt.a("http://localhost:8077/ws"),c=jt["a"].over((function(){return r}));c.connect({},(function(){c.subscribe("/user/topic/run/output",(function(e){var n=JSON.parse(e.body);t(n)})),c.subscribe("/user/topic/run/outcome",(function(e){c.disconnect();var t=JSON.parse(e.body);n(t)})),c.send("/api/command/run",{},JSON.stringify(e))}))}catch(o){console.log("Failed to run command",o),a(o)}}))}var kt=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){var e;return Object(j["a"])(this,n),e=t.apply(this,arguments),e.disabled=!1,e}return Object(f["a"])(n,[{key:"onRun",value:function(e){var t=this;this.disabled=!0;var n=function(){},a=function(){return t.disabled=!1};this.run(e,n,a)}},{key:"onRunUntilHere",value:function(e){this.runNext(0,e)}},{key:"runNext",value:function(e,t){var n=this;if(e>t)this.disabled=!1;else{var a=this.chapter.entries[e];if(!0===a.runnable&&!0!==a.dryRun){this.scrollToEntry(a);var r=function(){return n.runNext(e+1,t)},c=function(){};this.run(a,r,c)}else this.runNext(e+1,t)}}},{key:"run",value:function(e,t,n){e.failed=!1,e.output="",e.error="";var a=this.createRunableEntry(e);vt(a,(function(t){return e.output+=t.content})).then((function(n){switch(n.content){case"FINISHED_AS_EXPECTED":case"FINISHED_WITH_SUPPRESSED_ERROR":t();break;default:e.failed=!0}})).catch((function(t){return e.error="Failed to run (".concat(t.meesage,")")})).finally(n)}},{key:"createRunableEntry",value:function(e){return{type:e.type,id:e.id,name:e.name,workPath:this.chapter.workPath,workingDirectory:e.workingDirectory,parameters:e.parameters,variables:e.variables,values:e.values,ignoreErrors:e.ignoreErrors,pushChanges:e.pushChanges,dryRun:e.dryRun,expectedExitValue:e.expectedExitValue,commandTimeout:e.commandTimeout}}},{key:"onVariableInitialised",value:function(e){this.$emit("variableInitialised",e)}},{key:"onVariableUpdated",value:function(e){this.$emit("variableUpdated",e)}},{key:"scrollToEntry",value:function(e){var t=document.getElementById(e.id);null!==t&&t.scrollIntoView({behavior:"auto"})}}]),n}(V["b"]);kt=Object(k["a"])([Object(V["a"])({name:"Content",props:{chapter:Object},components:{ChapterRenderer:Q,Command:ae,Create:be,DockerTagAndPush:je,Download:ge,GitApplyPatch:Ie,GitCommitChanges:Ve,GitTagCurrentCommit:Ne,Markdown:We,Replace:Ze,Section:rt,Subsection:st,Variable:Ot},emits:["variableUpdated","variableInitialised"]})],kt);var mt=kt;n("bdfb");const gt=b()(mt,[["render",q],["__scopeId","data-v-1152d1f7"]]);var wt=gt,Pt={class:"message-bar"};function Ct(e,t,n,r,c,o){return Object(a["t"])(),Object(a["f"])("div",Pt,[Object(a["g"])("div",null,Object(a["D"])(e.message),1)])}var Dt=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return n}(V["b"]);Dt=Object(k["a"])([Object(V["a"])({name:"MessageBar",props:{message:String}})],Dt);var Rt=Dt;const Bt=b()(Rt,[["render",Ct]]);var It=Bt,St=function(e){return Object(a["x"])("data-v-1e6079a4"),e=e(),Object(a["u"])(),e},_t={class:"open"},Tt={class:"openRepository"},Et=St((function(){return Object(a["g"])("h2",null,"Open repository",-1)})),Vt=St((function(){return Object(a["g"])("label",{for:"openLocal"},"Open",-1)})),Ft=St((function(){return Object(a["g"])("label",{for:"openFromFolder"},"Open from folder",-1)})),At=["disabled"],Mt=St((function(){return Object(a["g"])("label",{for:"checkout"},"Checkout from an online git repository, like GitHub or GitLab",-1)})),Ut=St((function(){return Object(a["g"])("label",{for:"pathToRepository"},"Path to repository",-1)})),Nt=["disabled"],xt=St((function(){return Object(a["g"])("label",{for:"checkoutToFolder"},"Checkout to folder",-1)})),Ht=["disabled"],$t=St((function(){return Object(a["g"])("label",{for:"createNew"},"New",-1)})),Gt=St((function(){return Object(a["g"])("label",{for:"createNewFolder"},"Open from folder",-1)})),Lt=["disabled"],Jt={class:"workspace"},Wt=St((function(){return Object(a["g"])("h2",null,"Workspace",-1)})),qt=St((function(){return Object(a["g"])("label",{for:"workspace"},"Workspace",-1)})),Kt={class:"buttons"},Yt={class:"actionMessage"};function Xt(e,t,n,r,c,o){return Object(a["t"])(),Object(a["f"])("div",_t,[Object(a["g"])("div",Tt,[Et,Object(a["g"])("div",null,[Object(a["J"])(Object(a["g"])("input",{type:"radio",id:"openLocal",value:"openLocal","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.openFrom=t})},null,512),[[a["F"],e.openFrom]]),Vt]),Object(a["g"])("div",null,[Ft,Object(a["J"])(Object(a["g"])("input",{type:"text",id:"openFromFolder","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.bookPath=t}),disabled:"openLocal"!==e.openFrom},null,8,At),[[a["G"],e.bookPath]])]),Object(a["g"])("div",null,[Object(a["J"])(Object(a["g"])("input",{type:"radio",id:"checkout",value:"checkout","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.openFrom=t})},null,512),[[a["F"],e.openFrom]]),Mt]),Object(a["g"])("div",null,[Ut,Object(a["J"])(Object(a["g"])("input",{type:"text",id:"pathToRepository","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.pathToRepository=t}),disabled:"checkout"!==e.openFrom},null,8,Nt),[[a["G"],e.pathToRepository]])]),Object(a["g"])("div",null,[xt,Object(a["J"])(Object(a["g"])("input",{type:"text",id:"checkoutToFolder","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.bookPath=t}),disabled:"checkout"!==e.openFrom},null,8,Ht),[[a["G"],e.bookPath]])]),Object(a["g"])("div",null,[Object(a["J"])(Object(a["g"])("input",{type:"radio",id:"createNew",value:"createNew","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.openFrom=t})},null,512),[[a["F"],e.openFrom]]),$t]),Object(a["g"])("div",null,[Gt,Object(a["J"])(Object(a["g"])("input",{type:"text",id:"createNewFolder","onUpdate:modelValue":t[6]||(t[6]=function(t){return e.bookPath=t}),disabled:"createNew"!==e.openFrom},null,8,Lt),[[a["G"],e.bookPath]])])]),Object(a["g"])("div",Jt,[Wt,Object(a["g"])("div",null,[qt,Object(a["J"])(Object(a["g"])("input",{type:"text",id:"workspace","onUpdate:modelValue":t[7]||(t[7]=function(t){return e.workPath=t})},null,512),[[a["G"],e.workPath]])])]),Object(a["g"])("div",Kt,["openLocal"===e.openFrom?(Object(a["t"])(),Object(a["f"])("button",{key:0,class:"open",onClick:t[8]||(t[8]=function(){return e.onOpenBook&&e.onOpenBook.apply(e,arguments)})},"Open")):Object(a["e"])("",!0),"checkout"===e.openFrom?(Object(a["t"])(),Object(a["f"])("button",{key:1,class:"open",onClick:t[9]||(t[9]=function(){return e.onCheckoutBook&&e.onCheckoutBook.apply(e,arguments)})},"Checkout and Open")):Object(a["e"])("",!0),"createNew"===e.openFrom?(Object(a["t"])(),Object(a["f"])("button",{key:2,class:"open",onClick:t[10]||(t[10]=function(){return e.onCreateBook&&e.onCreateBook.apply(e,arguments)})},"Create")):Object(a["e"])("",!0),Object(a["g"])("span",Yt,Object(a["D"])(e.actionMessage),1)])])}var zt=n("5530"),Qt=(n("498a"),function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){var e;return Object(j["a"])(this,n),e=t.apply(this,arguments),e.pathToRepository="",e.openFrom="openLocal",e.actionMessage="",e.bookPath="",e.workPath="",e}return Object(f["a"])(n,[{key:"mounted",value:function(){var e=this;this.$nextTick((function(){e.bookPath=e.workspace.bookPath,e.workPath=e.workspace.workPath,e.isBookPathSet()&&e.isWorkPathSet()&&e.handleOpenBook()}))}},{key:"onCheckoutBook",value:function(){this.actionMessage="This feature is not yet implemented"}},{key:"onCreateBook",value:function(){this.actionMessage="This feature is not yet implemented"}},{key:"onOpenBook",value:function(){this.actionMessage="",this.isBookPathSet()&&this.isWorkPathSet()?this.handleOpenBook():this.actionMessage="Please provide both the book and workspace folder paths"}},{key:"handleOpenBook",value:function(){var e=this,t=this.bookPath,n=this.workPath;this.openBook(t).then((function(a){var r=Object(zt["a"])(Object(zt["a"])({},a),{},{bookPath:t,workPath:n});e.$emit("bookOpened",r)})).catch((function(t){e.actionMessage="Failed to open working book (".concat(t.message,")")}))}},{key:"openBook",value:function(e){return E.get("/api/book/open",{params:{bookPath:e}}).then((function(e){return e.data})).then((function(e){return e}))}},{key:"isBookPathSet",value:function(){return this.isNonBlank(this.bookPath)}},{key:"isWorkPathSet",value:function(){return this.isNonBlank(this.workPath)}},{key:"isNonBlank",value:function(e){return e.trim().length>0}}]),n}(V["b"]));Qt=Object(k["a"])([Object(V["a"])({name:"Open",emits:["bookOpened"],props:{workspace:Object}})],Qt);var Zt=Qt;n("b805");const en=b()(Zt,[["render",Xt],["__scopeId","data-v-1e6079a4"]]);var tn=en,nn=(n("a4d3"),n("e01a"),{class:"toc"}),an=Object(a["g"])("h2",null,"Chapters",-1),rn=["onClick"];function cn(e,t,n,r,c,o){return Object(a["t"])(),Object(a["f"])("div",nn,[Object(a["g"])("h1",null,Object(a["D"])(e.book.title),1),Object(a["g"])("p",null,Object(a["D"])(e.book.description),1),an,(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["A"])(e.book.chapters,(function(t){return Object(a["t"])(),Object(a["f"])("div",{key:t.title},[Object(a["g"])("h3",{onClick:function(n){return e.onReadChapter(t.path)}},Object(a["D"])(t.title),9,rn),Object(a["g"])("p",null,Object(a["D"])(t.description),1)])})),128))])}var on=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"mounted",value:function(){var e=this;this.$nextTick((function(){e.chapterPath.trim().length>0&&e.onReadChapter(e.chapterPath)}))}},{key:"onReadChapter",value:function(e){var t=this;this.readChapter(this.book.bookPath,e).then((function(e){t.$emit("chapterRead",e)})).catch((function(e){var n,a;t.$emit("errorMessage","Failed to open chapter (".concat((null===e||void 0===e||null===(n=e.response)||void 0===n||null===(a=n.data)||void 0===a?void 0:a.message)||e.message,")"))}))}},{key:"readChapter",value:function(e,t){return E.get("/api/book/read-chapter",{params:{bookPath:e,chapterPath:t}}).then((function(e){return e.data})).then((function(n){return Object(zt["a"])(Object(zt["a"])({},n),{},{bookPath:e,chapterPath:t})}))}}]),n}(V["b"]);on=Object(k["a"])([Object(V["a"])({name:"Toc",emits:["chapterRead","errorMessage"],props:{book:Object,chapterPath:String}})],on);var un=on;const sn=b()(un,[["render",cn]]);var bn=sn;function ln(e,t){void 0!==e.variables&&e.variables.indexOf(t.name)>-1&&(void 0===e.values&&(e.values={}),e.values[t.name]=t.value)}var pn=function(e){Object(y["a"])(n,e);var t=Object(v["a"])(n);function n(){var e;return Object(j["a"])(this,n),e=t.apply(this,arguments),e.appIsRunning=!1,e.book=null,e.chapter=null,e.workspace={bookPath:"",workPath:"",chapterPath:""},e.message=null,e}return Object(f["a"])(n,[{key:"mounted",value:function(){this.workspace.bookPath=this.$route.params.bookPath||"",this.workspace.workPath=this.$route.params.workPath||"",this.workspace.chapterPath=this.$route.params.chapterPath||""}},{key:"onAppIsRunning",value:function(e){this.appIsRunning=e}},{key:"onOpenBook",value:function(e){this.workspace.bookPath=e.bookPath,this.workspace.workPath=e.workPath,this.$router.push({name:"Home",params:{bookPath:this.workspace.bookPath,workPath:this.workspace.workPath}}),this.book=e}},{key:"onChapterRead",value:function(e){this.workspace.chapterPath=e.chapterPath,this.$router.push({name:"Home",params:{bookPath:this.workspace.bookPath,workPath:this.workspace.workPath,chapterPath:this.workspace.chapterPath}}),this.chapter=e,this.chapter.workPath=this.workspace.workPath}},{key:"onErrorMessage",value:function(e){this.message=e}},{key:"onVariableUpdated",value:function(e){var t;null===(t=this.chapter)||void 0===t||t.entries.forEach((function(t){ln(t,e)}))}}]),n}(V["b"]);pn=Object(k["a"])([Object(V["a"])({components:{MessageBar:It,App:U,Open:tn,Toc:bn,Content:wt}})],pn);var hn=pn;const dn=b()(hn,[["render",O]]);var On=dn,jn=n("6c02"),fn=[{path:"/:bookPath?/:workPath?/:chapterPath?",name:"Home",component:On,props:!0},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],yn=Object(jn["a"])({history:Object(jn["b"])(),routes:fn}),vn=yn,kn=n("5502"),mn=Object(kn["a"])({state:{},mutations:{},actions:{},modules:{}});Object(a["c"])(h).use(mn).use(vn).mount("#app")},e0db:function(e,t,n){"use strict";n("5d0f")},e3fc:function(e,t,n){"use strict";n("6ed8")},e7d8:function(e,t,n){"use strict";n("124d")},f09e:function(e,t,n){"use strict";n("2910")},f5c4:function(e,t,n){}});
//# sourceMappingURL=app.e4e0532f.js.map