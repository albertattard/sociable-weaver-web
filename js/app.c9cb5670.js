(function(e){function t(t){for(var a,r,i=t[0],u=t[1],s=t[2],l=0,b=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&b.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);p&&p(t);while(b.length)b.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},o={app:0},c=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"b93b297b"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"a3cac4da"}[e]+".css",o=u.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===o))return t()}var b=document.getElementsByTagName("style");for(i=0;i<b.length;i++){s=b[i],l=s.getAttribute("data-href");if(l===a||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],p.parentNode.removeChild(p),n(c)},p.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var b=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",b.name="ChunkLoadError",b.type=a,b.request=r,n[1](b)}o[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/web/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var b=0;b<s.length;b++)t(s[b]);var p=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"07c1":function(e,t,n){"use strict";n("6184")},1562:function(e,t,n){"use strict";n("b1bf")},"1f07":function(e,t,n){},"270c":function(e,t,n){"use strict";n("1f07")},2910:function(e,t,n){},"2e33":function(e,t,n){"use strict";n("d35f")},3173:function(e,t,n){"use strict";n("f005")},4020:function(e,t,n){"use strict";n("7073")},"42c6":function(e,t,n){"use strict";n("9e05")},"53a2":function(e,t,n){},6010:function(e,t,n){"use strict";n("53a2")},6184:function(e,t,n){},7073:function(e,t,n){},7087:function(e,t,n){},"733f":function(e,t,n){"use strict";n("f83e")},"9e05":function(e,t,n){},a9b4:function(e,t,n){"use strict";n("c59c")},b1bf:function(e,t,n){},ba04:function(e,t,n){},c47f:function(e,t,n){},c59c:function(e,t,n){},c9b5:function(e,t,n){"use strict";n("7087")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={id:"nav"},o=Object(a["i"])("Home"),c=Object(a["i"])(" | "),i=Object(a["i"])("About");function u(e,t){var n=Object(a["B"])("router-link"),u=Object(a["B"])("router-view");return Object(a["t"])(),Object(a["f"])(a["a"],null,[Object(a["g"])("div",r,[Object(a["j"])(n,{to:"/"},{default:Object(a["I"])((function(){return[o]})),_:1}),c,Object(a["j"])(n,{to:"/about"},{default:Object(a["I"])((function(){return[i]})),_:1})]),Object(a["j"])(u)],64)}n("1562");var s=n("d959"),l=n.n(s);const b={},p=l()(b,[["render",u]]);var h=p,d=(n("d3b7"),n("3ca3"),n("ddb0"),{class:"home"});function O(e,t,n,r,o,c){var i=Object(a["B"])("MessageBar"),u=Object(a["B"])("App"),s=Object(a["B"])("Open"),l=Object(a["B"])("Toc"),b=Object(a["B"])("Content");return Object(a["t"])(),Object(a["f"])("div",d,[null!==e.message?(Object(a["t"])(),Object(a["d"])(i,{key:0,ref:"messageBar",message:e.message},null,8,["message"])):Object(a["e"])("",!0),Object(a["j"])(u,{ref:"app",onAppIsRunning:e.onAppIsRunning},null,8,["onAppIsRunning"]),e.appIsRunning?(Object(a["t"])(),Object(a["d"])(s,{key:1,ref:"open",onBookOpened:e.onOpenBook,workspace:e.workspace},null,8,["onBookOpened","workspace"])):Object(a["e"])("",!0),null!==e.book?(Object(a["t"])(),Object(a["d"])(l,{key:2,ref:"toc",onChapterRead:e.onChapterRead,onErrorMessage:e.onErrorMessage,book:e.book,chapterPath:e.workspace.chapterPath},null,8,["onChapterRead","onErrorMessage","book","chapterPath"])):Object(a["e"])("",!0),null!==e.chapter?(Object(a["t"])(),Object(a["d"])(b,{key:3,ref:"content",chapter:e.chapter,onVariableUpdated:e.onVariableUpdated,onVariableInitialised:e.onVariableUpdated},null,8,["chapter","onVariableUpdated","onVariableInitialised"])):Object(a["e"])("",!0)])}var j=n("d4ec"),f=n("bee2"),v=n("262e"),y=n("2caf"),k=(n("159b"),n("9ab4")),m=function(e){return Object(a["x"])("data-v-5ebb62ac"),e=e(),Object(a["u"])(),e},g={class:"app"},w={key:0,class:"help"},P=m((function(){return Object(a["g"])("h2",null,"Getting started",-1)})),C=m((function(){return Object(a["g"])("li",null,[Object(a["i"])(" Make sure that you have Java 17 installed. You can use "),Object(a["g"])("a",{href:"https://sdkman.io/install",target:"_blank"},"SDKMAN"),Object(a["i"])(" to install Java ")],-1)})),D=m((function(){return Object(a["g"])("li",null,[Object(a["i"])(" Download the application: "),Object(a["g"])("a",{class:"download-app",href:"https://github.com/sociable-weaver/app-java-boot/releases/download/v0.15/sw-app.jar"},"sw-app.jar")],-1)})),R=m((function(){return Object(a["g"])("li",null,[Object(a["i"])(" Run the application using the following command "),Object(a["g"])("pre",null,"$ java -jar sw-app.jar"),Object(a["i"])(" You can run the application from anywhere you like and you don't have to save it in a special folder. ")],-1)})),E=Object(a["i"])(" Click "),B=Object(a["i"])(" to check if the application has started correctly. ");function S(e,t,n,r,o,c){return Object(a["t"])(),Object(a["f"])("div",g,[Object(a["g"])("h1",null,Object(a["D"])(e.message),1),e.showHelp?(Object(a["t"])(),Object(a["f"])("div",w,[P,Object(a["g"])("ol",null,[C,D,R,Object(a["g"])("li",null,[E,Object(a["g"])("a",{class:"try-app-again",href:"#",onClick:t[0]||(t[0]=function(t){return e.checkApplicationStatus()})},"here"),B])])])):Object(a["e"])("",!0)])}var V=n("bc3a"),T=n.n(V),I=T.a.create({baseURL:"http://localhost:8077",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});function _(e){var t,n;return null==e||void 0===e?"Unknown error":(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message)||(null===e||void 0===e?void 0:e.message)||"Unknown error"}var F=n("ce1f"),A=function(e){Object(v["a"])(n,e);var t=Object(y["a"])(n);function n(){var e;return Object(j["a"])(this,n),e=t.apply(this,arguments),e.message="Sociable Weaver",e.showHelp=!1,e}return Object(f["a"])(n,[{key:"mounted",value:function(){var e=this;this.$nextTick((function(){e.checkApplicationStatus()}))}},{key:"checkApplicationStatus",value:function(){var e=this;this.isAppRunning().then((function(t){e.message=t.message,e.showHelp=t.showHelp,e.$emit("appIsRunning",t.isRunning)})).catch((function(t){e.message="Failed to check the application status (".concat(_(t),")"),e.showHelp=!1,e.$emit("appIsRunning",!1)}))}},{key:"isAppRunning",value:function(){return I.get("/api/hello").then((function(e){return e.status})).then((function(e){return 200===e?{isRunning:!0,message:"Application is running",showHelp:!1}:{isRunning:!1,message:"Application is running, but unhealthy",showHelp:!1}})).catch((function(e){if("Network Error"===(null===e||void 0===e?void 0:e.message))return{isRunning:!1,message:"Application is not running or cannot be reached by this page",showHelp:!0};throw e}))}}]),n}(F["b"]);A=Object(k["a"])([Object(F["a"])({name:"App",emits:["appIsRunning"]})],A);var N=A;n("733f");const U=l()(N,[["render",S],["__scopeId","data-v-5ebb62ac"]]);var x=U,M={class:"content"},H=["id"],$={key:13,class:"error",role:"error"},G=Object(a["i"])(" Do not know how to renter entries of type: "),J={key:15,class:"error"},L={key:16,class:"buttons-bar",role:"buttons-bar"},W={class:"buttons editable",role:"save-buttons"},K=["disabled","onClick"],q=["disabled","onClick"],Y={key:17,class:"buttons-bar",role:"run-buttons"},X={key:0,class:"buttons runnable"},z=["disabled","onClick"],Q=["disabled","onClick"],Z={class:"buttons editable",role:"edit-buttons"},ee=["disabled","onClick"];function te(e,t,n,r,o,c){var i=Object(a["B"])("ChapterRenderer"),u=Object(a["B"])("Command"),s=Object(a["B"])("Create"),l=Object(a["B"])("DockerTagAndPush"),b=Object(a["B"])("Download"),p=Object(a["B"])("GitApplyPatch"),h=Object(a["B"])("GitCommitChanges"),d=Object(a["B"])("GitTagCurrentCommit"),O=Object(a["B"])("Markdown"),j=Object(a["B"])("Replace"),f=Object(a["B"])("Section"),v=Object(a["B"])("Subsection"),y=Object(a["B"])("Variable");return Object(a["t"])(),Object(a["f"])("div",M,[(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["A"])(e.chapter.entries,(function(t,n){return Object(a["t"])(),Object(a["f"])("div",{key:t.id,id:t.id},["chapter"===t.type?(Object(a["t"])(),Object(a["d"])(i,{key:0,entry:t},null,8,["entry"])):"command"===t.type?(Object(a["t"])(),Object(a["d"])(u,{key:1,entry:t},null,8,["entry"])):"create"===t.type?(Object(a["t"])(),Object(a["d"])(s,{key:2,entry:t},null,8,["entry"])):"docker-tag-and-push"===t.type?(Object(a["t"])(),Object(a["d"])(l,{key:3,entry:t},null,8,["entry"])):"download"===t.type?(Object(a["t"])(),Object(a["d"])(b,{key:4,entry:t},null,8,["entry"])):"git-apply-patch"===t.type?(Object(a["t"])(),Object(a["d"])(p,{key:5,entry:t},null,8,["entry"])):"git-commit-changes"===t.type?(Object(a["t"])(),Object(a["d"])(h,{key:6,entry:t},null,8,["entry"])):"git-tag-current-commit"===t.type?(Object(a["t"])(),Object(a["d"])(d,{key:7,entry:t},null,8,["entry"])):"markdown"===t.type?(Object(a["t"])(),Object(a["d"])(O,{key:8,entry:t},null,8,["entry"])):"replace"===t.type?(Object(a["t"])(),Object(a["d"])(j,{key:9,entry:t},null,8,["entry"])):"section"===t.type?(Object(a["t"])(),Object(a["d"])(f,{key:10,entry:t},null,8,["entry"])):"subsection"===t.type?(Object(a["t"])(),Object(a["d"])(v,{key:11,entry:t},null,8,["entry"])):"variable"===t.type?(Object(a["t"])(),Object(a["d"])(y,{key:12,entry:t,onVariableUpdated:e.onVariableUpdated,onVariableInitialised:e.onVariableInitialised},null,8,["entry","onVariableUpdated","onVariableInitialised"])):(Object(a["t"])(),Object(a["f"])("div",$,[G,Object(a["g"])("code",null,Object(a["D"])(t.type),1)])),t.output?(Object(a["t"])(),Object(a["f"])("pre",{key:14,class:Object(a["p"])(["output",{error:t.failed}])},Object(a["D"])(t.output),3)):Object(a["e"])("",!0),t.error?(Object(a["t"])(),Object(a["f"])("pre",J,Object(a["D"])(t.error),1)):Object(a["e"])("",!0),!0===t.edit?(Object(a["t"])(),Object(a["f"])("div",L,[Object(a["g"])("div",W,[Object(a["g"])("button",{disabled:e.disabled,onClick:function(n){return e.onCancel(t)}},"Cancel",8,K),Object(a["g"])("button",{disabled:e.disabled,onClick:function(n){return e.onSave(t)},class:"primary",role:"save"},"Save",8,q)])])):(Object(a["t"])(),Object(a["f"])("div",Y,[t.runnable?(Object(a["t"])(),Object(a["f"])("div",X,[Object(a["g"])("button",{disabled:e.disabled,onClick:function(n){return e.onRun(t)},class:"primary"},"Run",8,z),Object(a["g"])("button",{disabled:e.disabled,onClick:function(t){return e.onRunUntilHere(n)}},"Run Until Here",8,Q)])):Object(a["e"])("",!0),Object(a["g"])("div",Z,[Object(a["g"])("button",{disabled:e.disabled,onClick:function(n){return e.onEdit(t)}},"Edit",8,ee)])]))],8,H)})),128))])}n("b0c0");var ne={key:0},ae={key:1};function re(e,t,n,r,o,c){return!0===e.entry.edit?(Object(a["t"])(),Object(a["f"])("div",ne,[Object(a["J"])(Object(a["g"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.editChapter=t}),placeholder:"Title"},null,512),[[a["G"],e.editChapter]])])):(Object(a["t"])(),Object(a["f"])("h2",ae,Object(a["D"])(e.chapter),1))}var oe;n("4de4"),n("d81d"),n("ac1f"),n("5319"),n("5b81");function ce(e,t){void 0!==e.variables&&e.variables.indexOf(t.name)>-1&&(void 0===e.values&&(e.values={}),e.values[t.name]=t.value)}function ie(e){if(void 0===e.variables||0==e.variables.length)return!0;if(void 0===e.values)return!1;var t=e.variables.map((function(t){return e.values[t]})).filter((function(e){return void 0===e||0==e.length})).length;return 0===t}function ue(e,t,n){if(void 0===e||void 0===t)return n;var a=n;return e.forEach((function(e){var n=t[e];void 0!==n&&(a=a.replaceAll("${".concat(e,"}"),n))})),a}(function(e){e[e["Changed"]=0]="Changed",e[e["NotChanged"]=1]="NotChanged",e[e["KeepEditing"]=2]="KeepEditing"})(oe||(oe={}));var se=function(e){Object(v["a"])(n,e);var t=Object(y["a"])(n);function n(){var e;return Object(j["a"])(this,n),e=t.apply(this,arguments),e.editChapter="",e}return Object(f["a"])(n,[{key:"mounted",value:function(){this.entry.onSave=this.onSave,this.editChapter=this.entry.parameters[0]}},{key:"onSave",value:function(){return this.entry.error="",0===this.editChapter.length?(this.entry.error="The chapter title cannot be empty",oe.KeepEditing):this.editChapter!==this.entry.parameters[0]?(this.entry.parameters=[this.editChapter],oe.Changed):oe.NotChanged}},{key:"chapter",get:function(){return this.entry.parameters[0]}}]),n}(F["b"]);se=Object(k["a"])([Object(F["a"])({name:"Chapter",props:{entry:Object}})],se);var le=se;n("270c");const be=l()(le,[["render",re],["__scopeId","data-v-3607711b"]]);var pe=be;function he(e,t,n,r,o,c){return Object(a["t"])(),Object(a["f"])("pre",null,Object(a["D"])(e.command),1)}n("99af"),n("a15b");var de=function(e){Object(v["a"])(n,e);var t=Object(y["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"command",get:function(){var e=this.entry.workingDirectory?"".concat(this.entry.workingDirectory," "):"",t="$",n="".concat(e).concat(t," ").concat(this.entry.parameters.join("\n"));return ue(this.entry.variables,this.entry.values,n)}}]),n}(F["b"]);de=Object(k["a"])([Object(F["a"])({name:"Command",props:{entry:Object}})],de);var Oe=de;n("eb80");const je=l()(Oe,[["render",he],["__scopeId","data-v-602d8064"]]);var fe=je,ve={class:"filePath"},ye={class:"content"};function ke(e,t,n,r,o,c){return Object(a["t"])(),Object(a["f"])(a["a"],null,[Object(a["g"])("div",ve,"Create the file: "+Object(a["D"])(e.filePath)+", with the following contents",1),Object(a["g"])("pre",ye,Object(a["D"])(e.content),1)],64)}n("fb6a");var me=function(e){Object(v["a"])(n,e);var t=Object(y["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"filePath",get:function(){var e=this.entry.workingDirectory?"".concat(this.entry.workingDirectory,"/"):"";return"".concat(e).concat(this.entry.parameters[0])}},{key:"content",get:function(){return"".concat(this.entry.parameters.slice(1).join("\n"),"\n")}}]),n}(F["b"]);me=Object(k["a"])([Object(F["a"])({name:"Create",props:{entry:Object}})],me);var ge=me;n("f09e");const we=l()(ge,[["render",ke],["__scopeId","data-v-5e3ed990"]]);var Pe=we,Ce={class:"command"};function De(e,t,n,r,o,c){return Object(a["t"])(),Object(a["f"])("pre",Ce,Object(a["D"])(e.command),1)}var Re=function(e){Object(v["a"])(n,e);var t=Object(y["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"command",get:function(){var e=this.entry.workingDirectory?"".concat(this.entry.workingDirectory," "):"",t="$",n=this.entry.parameters[0],a=this.entry.parameters[1],r="".concat(e).concat(t," docker tag ").concat(n," ").concat(a,"\n");return r+="".concat(e).concat(t," docker push ").concat(a),ue(this.entry.variables,this.entry.values,r)}}]),n}(F["b"]);Re=Object(k["a"])([Object(F["a"])({name:"DockerTagAndPush",props:{entry:Object}})],Re);var Ee=Re;n("e25f");const Be=l()(Ee,[["render",De],["__scopeId","data-v-70802509"]]);var Se=Be,Ve={class:"download"};function Te(e,t,n,r,o,c){return Object(a["t"])(),Object(a["f"])("pre",Ve,Object(a["D"])(e.command),1)}var Ie=function(e){Object(v["a"])(n,e);var t=Object(y["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"command",get:function(){var e=this.entry.workingDirectory?"".concat(this.entry.workingDirectory," "):"",t="$",n=this.entry.parameters[0],a=this.entry.parameters[1];return"".concat(e).concat(t," curl --location '").concat(n,"' --output '").concat(a,"'")}}]),n}(F["b"]);Ie=Object(k["a"])([Object(F["a"])({name:"Download",props:{entry:Object}})],Ie);var _e=Ie;n("a9b4");const Fe=l()(_e,[["render",Te],["__scopeId","data-v-667402eb"]]);var Ae=Fe,Ne=["innerHTML"];function Ue(e,t,n,r,o,c){return Object(a["t"])(),Object(a["f"])("div",{class:"patch",innerHTML:e.patch},null,8,Ne)}var xe=n("ae7d"),Me=function(e){Object(v["a"])(n,e);var t=Object(y["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"patch",get:function(){var e={drawFileList:!1,fileContentToggle:!1};return Object(xe["a"])(this.entry.parameters.join("\n"),e)}}]),n}(F["b"]);Me=Object(k["a"])([Object(F["a"])({name:"GitApplyPatch",props:{entry:Object}})],Me);var He=Me;n("42c6");const $e=l()(He,[["render",Ue],["__scopeId","data-v-5e7f3d1b"]]);var Ge=$e;function Je(e,t,n,r,o,c){return Object(a["t"])(),Object(a["f"])("pre",null,Object(a["D"])(e.command),1)}var Le=function(e){Object(v["a"])(n,e);var t=Object(y["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"command",get:function(){var e=this.entry.workingDirectory?"".concat(this.entry.workingDirectory," "):"",t="$",n="".concat(e).concat(t),a=this.entry.parameters[0],r=this.entry.parameters.length>1&&this.entry.parameters[1],o=this.entry.pushChanges||!1,c="".concat(n," git add .");return c+="\n".concat(n," git commit --message '").concat(a,"'"),r?(c+="\n".concat(n," git tag --annotate '").concat(r,"' --message '").concat(a,"'"),o&&(c+="\n".concat(n," git push --atomic origin main '").concat(r,"'"))):o&&(c+="\n".concat(n," git push origin main")),c}}]),n}(F["b"]);Le=Object(k["a"])([Object(F["a"])({name:"GitCommitChanges",props:{entry:Object}})],Le);var We=Le;n("c9b5");const Ke=l()(We,[["render",Je],["__scopeId","data-v-7abe477a"]]);var qe=Ke;function Ye(e,t,n,r,o,c){return Object(a["t"])(),Object(a["f"])("pre",null,Object(a["D"])(e.command),1)}var Xe=function(e){Object(v["a"])(n,e);var t=Object(y["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"command",get:function(){var e=this.entry.workingDirectory?"".concat(this.entry.workingDirectory," "):"",t="$",n=this.entry.parameters[0],a=this.entry.parameters.length>1&&this.entry.parameters[1],r="".concat(e).concat(t," git tag --annotate '").concat(n,"'");return a&&(r+=" --message '".concat(a,"'")),r}}]),n}(F["b"]);Xe=Object(k["a"])([Object(F["a"])({name:"GitTagCurrentCommit",props:{entry:Object}})],Xe);var ze=Xe;n("07c1");const Qe=l()(ze,[["render",Ye],["__scopeId","data-v-2a2edffc"]]);var Ze=Qe,et=["innerHTML"];function tt(e,t,n,r,o,c){return Object(a["t"])(),Object(a["f"])("div",{class:"markdown",innerHTML:e.html},null,8,et)}var nt=n("c2a7"),at=function(e){Object(v["a"])(n,e);var t=Object(y["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"html",get:function(){var e=this.entry.parameters.join("\n"),t=ue(this.entry.variables,this.entry.values,e);return nt["a"].parse(t)}}]),n}(F["b"]);at=Object(k["a"])([Object(F["a"])({name:"Markdown",props:{entry:Object}})],at);var rt=at;n("4020");const ot=l()(rt,[["render",tt],["__scopeId","data-v-9301f41e"]]);var ct=ot,it={class:"filePath"},ut=Object(a["i"])(" Replace the file: "),st=Object(a["i"])(", with the following contents "),lt={class:"content"};function bt(e,t,n,r,o,c){return Object(a["t"])(),Object(a["f"])(a["a"],null,[Object(a["g"])("div",it,[ut,Object(a["g"])("code",null,Object(a["D"])(e.filePath),1),st]),Object(a["g"])("pre",lt,Object(a["D"])(e.content),1)],64)}var pt=function(e){Object(v["a"])(n,e);var t=Object(y["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"filePath",get:function(){var e=this.entry.workingDirectory?"".concat(this.entry.workingDirectory,"/"):"";return"".concat(e).concat(this.entry.parameters[0])}},{key:"content",get:function(){return"".concat(this.entry.parameters.slice(1).join("\n"),"\n")}}]),n}(F["b"]);pt=Object(k["a"])([Object(F["a"])({name:"Replace",props:{entry:Object}})],pt);var ht=pt;n("3173");const dt=l()(ht,[["render",bt],["__scopeId","data-v-0635e78d"]]);var Ot=dt;function jt(e,t,n,r,o,c){return Object(a["t"])(),Object(a["f"])("h3",null,Object(a["D"])(e.section),1)}var ft=function(e){Object(v["a"])(n,e);var t=Object(y["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"section",get:function(){return this.entry.parameters[0]}}]),n}(F["b"]);ft=Object(k["a"])([Object(F["a"])({name:"Section",props:{entry:Object}})],ft);var vt=ft;const yt=l()(vt,[["render",jt]]);var kt=yt;function mt(e,t,n,r,o,c){return Object(a["t"])(),Object(a["f"])("h4",null,Object(a["D"])(e.subsection),1)}var gt=function(e){Object(v["a"])(n,e);var t=Object(y["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"subsection",get:function(){return this.entry.parameters[0]}}]),n}(F["b"]);gt=Object(k["a"])([Object(F["a"])({name:"Subsection",props:{entry:Object}})],gt);var wt=gt;const Pt=l()(wt,[["render",mt]]);var Ct=Pt,Dt=Object(a["g"])("div",null,"Variable",-1);function Rt(e,t,n,r,o,c){return Object(a["t"])(),Object(a["f"])("div",null,[Dt,Object(a["g"])("label",null,Object(a["D"])(e.name),1),e.sensitive?Object(a["J"])((Object(a["t"])(),Object(a["f"])("input",{key:0,type:"password","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.value=t})},null,512)),[[a["G"],e.value]]):Object(a["J"])((Object(a["t"])(),Object(a["f"])("input",{key:1,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.value=t})},null,512)),[[a["G"],e.value]]),Object(a["g"])("button",{onClick:t[2]||(t[2]=function(){return e.onVariableSet&&e.onVariableSet.apply(e,arguments)})},"Set")])}var Et=function(e){Object(v["a"])(n,e);var t=Object(y["a"])(n);function n(){var e;return Object(j["a"])(this,n),e=t.apply(this,arguments),e.value="",e}return Object(f["a"])(n,[{key:"mounted",value:function(){if(this.value=this.readDefaultValueOrEmptyFromEntry(),this.value.length>0){var e={name:this.entry.name,value:this.value};this.$emit("variableInitialised",e)}}},{key:"name",get:function(){return this.entry.name}},{key:"sensitive",get:function(){return void 0===this.entry.sensitive||this.entry.sensitive}},{key:"onVariableSet",value:function(){var e=this.readDefaultValueOrEmptyFromEntry();this.value!==e&&(this.entry.parameters=[this.value],this.$emit("variableUpdated",{name:this.entry.name,value:this.value,previousValue:e}))}},{key:"readDefaultValueOrEmptyFromEntry",value:function(){return void 0===this.entry.parameters||0==this.entry.parameters.length?"":this.entry.parameters[0]}}]),n}(F["b"]);Et=Object(k["a"])([Object(F["a"])({name:"Variable",props:{entry:Object},emits:["variableUpdated","variableInitialised"]})],Et);var Bt=Et;const St=l()(Bt,[["render",Rt]]);var Vt=St,Tt=(n("e9c4"),n("8030")),It=n("cc7d"),_t=n.n(It);function Ft(e,t){return new Promise((function(n,a){try{var r=new _t.a("http://localhost:8077/ws"),o=Tt["a"].over((function(){return r}));o.connect({},(function(){o.subscribe("/user/topic/run/output",(function(e){var n=JSON.parse(e.body);t(n)})),o.subscribe("/user/topic/run/outcome",(function(e){o.disconnect();var t=JSON.parse(e.body);n(t)})),o.send("/api/command/run",{},JSON.stringify(e))}))}catch(c){console.log("Failed to run command",c),a(c)}}))}var At=function(e){Object(v["a"])(n,e);var t=Object(y["a"])(n);function n(){var e;return Object(j["a"])(this,n),e=t.apply(this,arguments),e.disabled=!1,e}return Object(f["a"])(n,[{key:"onRun",value:function(e){var t=this;this.disabled=!0;var n=function(){},a=function(){return t.disabled=!1};this.run(e,n,a)}},{key:"onRunUntilHere",value:function(e){this.runNext(0,e)}},{key:"runNext",value:function(e,t){var n=this;if(e>t)this.disabled=!1;else{var a=this.chapter.entries[e];if(!0===a.runnable&&!0!==a.dryRun){this.scrollToEntry(a);var r=function(){return n.runNext(e+1,t)},o=function(){};this.run(a,r,o)}else this.runNext(e+1,t)}}},{key:"run",value:function(e,t,n){if(e.failed=!1,e.output="",e.error="",!1===ie(e))return e.failed=!0,void(e.error="Variables not set!!");var a=this.createRunableEntry(e);Ft(a,(function(t){return e.output+=t.content})).then((function(n){switch(n.content){case"FINISHED_AS_EXPECTED":case"FINISHED_WITH_SUPPRESSED_ERROR":t();break;default:e.failed=!0}})).catch((function(t){return e.error="Failed to run (".concat(_(t),")")})).finally(n)}},{key:"createRunableEntry",value:function(e){return{type:e.type,id:e.id,name:e.name,workPath:this.chapter.workPath,workingDirectory:e.workingDirectory,parameters:e.parameters,variables:e.variables,environmentVariables:e.environmentVariables,values:e.values,ignoreErrors:e.ignoreErrors,pushChanges:e.pushChanges,dryRun:e.dryRun,expectedExitValue:e.expectedExitValue,commandTimeout:e.commandTimeout}}},{key:"onEdit",value:function(e){e.edit=!0}},{key:"onCancel",value:function(e){e.edit=!1}},{key:"onSave",value:function(e){var t=e.onSave();switch(t){case oe.Changed:this.handleChanged(e);break;case oe.NotChanged:this.handleNotChanged(e);break}}},{key:"handleChanged",value:function(e){var t=this.createSaveEntry(e);this.saveEntry(t).then((function(t){return Object.assign(e,t)})).then((function(e){return e.edit=!1})).catch((function(t){e.error="Failed to save entry (".concat(_(t),")")}))}},{key:"handleNotChanged",value:function(e){e.edit=!1}},{key:"saveEntry",value:function(e){return I.put("/api/entry",e,{params:{bookPath:this.chapter.bookPath,chapterPath:this.chapter.chapterPath}}).then((function(e){return e.data}))}},{key:"createSaveEntry",value:function(e){return{type:e.type,id:e.id,name:e.name,workingDirectory:e.workingDirectory,parameters:e.parameters,variables:e.variables,environmentVariables:e.environmentVariables,values:e.values,ignoreErrors:e.ignoreErrors,pushChanges:e.pushChanges,dryRun:e.dryRun,visible:e.visible,sensitive:e.sensitive,expectedExitValue:e.expectedExitValue,commandTimeout:e.commandTimeout}}},{key:"onVariableInitialised",value:function(e){this.$emit("variableInitialised",e)}},{key:"onVariableUpdated",value:function(e){this.$emit("variableUpdated",e)}},{key:"scrollToEntry",value:function(e){var t=document.getElementById(e.id);null!==t&&t.scrollIntoView({behavior:"auto"})}}]),n}(F["b"]);At=Object(k["a"])([Object(F["a"])({name:"Content",props:{chapter:Object},components:{ChapterRenderer:pe,Command:fe,Create:Pe,DockerTagAndPush:Se,Download:Ae,GitApplyPatch:Ge,GitCommitChanges:qe,GitTagCurrentCommit:Ze,Markdown:ct,Replace:Ot,Section:kt,Subsection:Ct,Variable:Vt},emits:["variableUpdated","variableInitialised"]})],At);var Nt=At;n("6010");const Ut=l()(Nt,[["render",te],["__scopeId","data-v-73e4db82"]]);var xt=Ut,Mt={class:"message-bar"};function Ht(e,t,n,r,o,c){return Object(a["t"])(),Object(a["f"])("div",Mt,[Object(a["g"])("div",null,Object(a["D"])(e.message),1)])}var $t=function(e){Object(v["a"])(n,e);var t=Object(y["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return n}(F["b"]);$t=Object(k["a"])([Object(F["a"])({name:"MessageBar",props:{message:String}})],$t);var Gt=$t;const Jt=l()(Gt,[["render",Ht]]);var Lt=Jt,Wt=function(e){return Object(a["x"])("data-v-2bc2c426"),e=e(),Object(a["u"])(),e},Kt={class:"open"},qt={class:"openRepository"},Yt=Wt((function(){return Object(a["g"])("h2",null,"Open repository",-1)})),Xt=Wt((function(){return Object(a["g"])("label",{for:"openLocal"},"Open",-1)})),zt=Wt((function(){return Object(a["g"])("label",{for:"openFromFolder"},"Open from folder",-1)})),Qt=["disabled"],Zt=Wt((function(){return Object(a["g"])("label",{for:"checkout"},"Checkout from an online git repository, like GitHub or GitLab",-1)})),en=Wt((function(){return Object(a["g"])("label",{for:"pathToRepository"},"Path to repository",-1)})),tn=["disabled"],nn=Wt((function(){return Object(a["g"])("label",{for:"checkoutToFolder"},"Checkout to folder",-1)})),an=["disabled"],rn=Wt((function(){return Object(a["g"])("label",{for:"createNew"},"New",-1)})),on=Wt((function(){return Object(a["g"])("label",{for:"createNewFolder"},"Open from folder",-1)})),cn=["disabled"],un={class:"workspace"},sn=Wt((function(){return Object(a["g"])("h2",null,"Workspace",-1)})),ln=Wt((function(){return Object(a["g"])("label",{for:"workspace"},"Workspace",-1)})),bn={class:"buttons"},pn={class:"actionMessage"};function hn(e,t,n,r,o,c){return Object(a["t"])(),Object(a["f"])("div",Kt,[Object(a["g"])("div",qt,[Yt,Object(a["g"])("div",null,[Object(a["J"])(Object(a["g"])("input",{type:"radio",id:"openLocal",value:"openLocal","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.openFrom=t})},null,512),[[a["F"],e.openFrom]]),Xt]),Object(a["g"])("div",null,[zt,Object(a["J"])(Object(a["g"])("input",{type:"text",id:"openFromFolder","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.bookPath=t}),disabled:"openLocal"!==e.openFrom},null,8,Qt),[[a["G"],e.bookPath]])]),Object(a["g"])("div",null,[Object(a["J"])(Object(a["g"])("input",{type:"radio",id:"checkout",value:"checkout","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.openFrom=t})},null,512),[[a["F"],e.openFrom]]),Zt]),Object(a["g"])("div",null,[en,Object(a["J"])(Object(a["g"])("input",{type:"text",id:"pathToRepository","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.pathToRepository=t}),disabled:"checkout"!==e.openFrom},null,8,tn),[[a["G"],e.pathToRepository]])]),Object(a["g"])("div",null,[nn,Object(a["J"])(Object(a["g"])("input",{type:"text",id:"checkoutToFolder","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.bookPath=t}),disabled:"checkout"!==e.openFrom},null,8,an),[[a["G"],e.bookPath]])]),Object(a["g"])("div",null,[Object(a["J"])(Object(a["g"])("input",{type:"radio",id:"createNew",value:"createNew","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.openFrom=t})},null,512),[[a["F"],e.openFrom]]),rn]),Object(a["g"])("div",null,[on,Object(a["J"])(Object(a["g"])("input",{type:"text",id:"createNewFolder","onUpdate:modelValue":t[6]||(t[6]=function(t){return e.bookPath=t}),disabled:"createNew"!==e.openFrom},null,8,cn),[[a["G"],e.bookPath]])])]),Object(a["g"])("div",un,[sn,Object(a["g"])("div",null,[ln,Object(a["J"])(Object(a["g"])("input",{type:"text",id:"workspace","onUpdate:modelValue":t[7]||(t[7]=function(t){return e.workPath=t})},null,512),[[a["G"],e.workPath]])])]),Object(a["g"])("div",bn,["openLocal"===e.openFrom?(Object(a["t"])(),Object(a["f"])("button",{key:0,class:"open",onClick:t[8]||(t[8]=function(){return e.onOpenBook&&e.onOpenBook.apply(e,arguments)})},"Open")):Object(a["e"])("",!0),"checkout"===e.openFrom?(Object(a["t"])(),Object(a["f"])("button",{key:1,class:"open",onClick:t[9]||(t[9]=function(){return e.onCheckoutBook&&e.onCheckoutBook.apply(e,arguments)})},"Checkout and Open")):Object(a["e"])("",!0),"createNew"===e.openFrom?(Object(a["t"])(),Object(a["f"])("button",{key:2,class:"open",onClick:t[10]||(t[10]=function(){return e.onCreateBook&&e.onCreateBook.apply(e,arguments)})},"Create")):Object(a["e"])("",!0),Object(a["g"])("span",pn,Object(a["D"])(e.actionMessage),1)])])}var dn=n("5530"),On=(n("498a"),function(e){Object(v["a"])(n,e);var t=Object(y["a"])(n);function n(){var e;return Object(j["a"])(this,n),e=t.apply(this,arguments),e.pathToRepository="",e.openFrom="openLocal",e.actionMessage="",e.bookPath="",e.workPath="",e}return Object(f["a"])(n,[{key:"mounted",value:function(){var e=this;this.$nextTick((function(){e.bookPath=e.workspace.bookPath,e.workPath=e.workspace.workPath,e.isBookPathSet()&&e.isWorkPathSet()&&e.handleOpenBook()}))}},{key:"onCheckoutBook",value:function(){this.actionMessage="This feature is not yet implemented"}},{key:"onCreateBook",value:function(){this.actionMessage="This feature is not yet implemented"}},{key:"onOpenBook",value:function(){this.actionMessage="",this.isBookPathSet()&&this.isWorkPathSet()?this.handleOpenBook():this.actionMessage="Please provide both the book and workspace folder paths"}},{key:"handleOpenBook",value:function(){var e=this,t=this.bookPath,n=this.workPath;this.openBook(t).then((function(a){var r=Object(dn["a"])(Object(dn["a"])({},a),{},{bookPath:t,workPath:n});e.$emit("bookOpened",r)})).catch((function(t){e.actionMessage="Failed to open working book (".concat(_(t),")")}))}},{key:"openBook",value:function(e){return I.get("/api/book",{params:{bookPath:e}}).then((function(e){return e.data})).then((function(e){return e}))}},{key:"isBookPathSet",value:function(){return this.isNonBlank(this.bookPath)}},{key:"isWorkPathSet",value:function(){return this.isNonBlank(this.workPath)}},{key:"isNonBlank",value:function(e){return e.trim().length>0}}]),n}(F["b"]));On=Object(k["a"])([Object(F["a"])({name:"Open",emits:["bookOpened"],props:{workspace:Object}})],On);var jn=On;n("2e33");const fn=l()(jn,[["render",hn],["__scopeId","data-v-2bc2c426"]]);var vn=fn,yn=(n("a4d3"),n("e01a"),{class:"toc"}),kn=Object(a["g"])("h2",null,"Chapters",-1),mn=["onClick"];function gn(e,t,n,r,o,c){return Object(a["t"])(),Object(a["f"])("div",yn,[Object(a["g"])("h1",null,Object(a["D"])(e.book.title),1),Object(a["g"])("p",null,Object(a["D"])(e.book.description),1),kn,(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["A"])(e.book.chapters,(function(t){return Object(a["t"])(),Object(a["f"])("div",{key:t.title},[Object(a["g"])("h3",{onClick:function(n){return e.onReadChapter(t.path)}},Object(a["D"])(t.title),9,mn),Object(a["g"])("p",null,Object(a["D"])(t.description),1)])})),128))])}var wn=function(e){Object(v["a"])(n,e);var t=Object(y["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"mounted",value:function(){var e=this;this.$nextTick((function(){e.chapterPath.trim().length>0&&e.onReadChapter(e.chapterPath)}))}},{key:"onReadChapter",value:function(e){var t=this;this.readChapter(this.book.bookPath,e).then((function(e){t.$emit("chapterRead",e)})).catch((function(e){t.$emit("errorMessage","Failed to open chapter (".concat(_(e),")"))}))}},{key:"readChapter",value:function(e,t){return I.get("/api/chapter",{params:{bookPath:e,chapterPath:t}}).then((function(e){return e.data})).then((function(n){return Object(dn["a"])(Object(dn["a"])({},n),{},{bookPath:e,chapterPath:t})}))}}]),n}(F["b"]);wn=Object(k["a"])([Object(F["a"])({name:"Toc",emits:["chapterRead","errorMessage"],props:{book:Object,chapterPath:String}})],wn);var Pn=wn;const Cn=l()(Pn,[["render",gn]]);var Dn=Cn,Rn=function(e){Object(v["a"])(n,e);var t=Object(y["a"])(n);function n(){var e;return Object(j["a"])(this,n),e=t.apply(this,arguments),e.appIsRunning=!1,e.book=null,e.chapter=null,e.workspace={bookPath:"",workPath:"",chapterPath:""},e.message=null,e}return Object(f["a"])(n,[{key:"mounted",value:function(){this.workspace.bookPath=this.$route.params.bookPath||"",this.workspace.workPath=this.$route.params.workPath||"",this.workspace.chapterPath=this.$route.params.chapterPath||""}},{key:"onAppIsRunning",value:function(e){this.appIsRunning=e}},{key:"onOpenBook",value:function(e){this.workspace.bookPath=e.bookPath,this.workspace.workPath=e.workPath,this.$router.push({name:"Home",params:{bookPath:this.workspace.bookPath,workPath:this.workspace.workPath}}),this.book=e}},{key:"onChapterRead",value:function(e){this.workspace.chapterPath=e.chapterPath,this.$router.push({name:"Home",params:{bookPath:this.workspace.bookPath,workPath:this.workspace.workPath,chapterPath:this.workspace.chapterPath}}),this.chapter=e,this.chapter.workPath=this.workspace.workPath}},{key:"onErrorMessage",value:function(e){this.message=e}},{key:"onVariableUpdated",value:function(e){var t;null===(t=this.chapter)||void 0===t||t.entries.forEach((function(t){ce(t,e)}))}}]),n}(F["b"]);Rn=Object(k["a"])([Object(F["a"])({components:{MessageBar:Lt,App:x,Open:vn,Toc:Dn,Content:xt}})],Rn);var En=Rn;const Bn=l()(En,[["render",O]]);var Sn=Bn,Vn=n("6c02"),Tn=[{path:"/:bookPath?/:workPath?/:chapterPath?",name:"Home",component:Sn,props:!0},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],In=Object(Vn["a"])({history:Object(Vn["b"])(),routes:Tn}),_n=In,Fn=n("5502"),An=Object(Fn["a"])({state:{},mutations:{},actions:{},modules:{}});Object(a["c"])(h).use(An).use(_n).mount("#app")},d35f:function(e,t,n){},e25f:function(e,t,n){"use strict";n("ba04")},eb80:function(e,t,n){"use strict";n("c47f")},f005:function(e,t,n){},f09e:function(e,t,n){"use strict";n("2910")},f83e:function(e,t,n){}});
//# sourceMappingURL=app.c9cb5670.js.map