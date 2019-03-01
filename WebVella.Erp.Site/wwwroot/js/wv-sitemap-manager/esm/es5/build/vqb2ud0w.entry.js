import{h}from"../wv-sitemap-manager.core.js";var WvSitemapAreaModal=function(){function e(){this.area=null,this.submitResponse={message:"",errors:[]},this.modalArea=null}return e.prototype.componentWillLoad=function(){var e="wv-sitemap-manager-area-modal-backdrop";if(!document.getElementById(e)){var t=document.createElement("div");t.className="modal-backdrop show",t.id=e,document.body.appendChild(t),this.modalArea=Object.assign({},this.area),delete this.modalArea.nodes}},e.prototype.componentDidUnload=function(){var e=document.getElementById("wv-sitemap-manager-area-modal-backdrop");e&&e.remove()},e.prototype.closeModal=function(){this.wvSitemapManagerAreaModalCloseEvent.emit()},e.prototype.handleSubmit=function(e){e.preventDefault(),this.wvSitemapManagerAreaSubmittedEvent.emit(this.modalArea)},e.prototype.handleChange=function(e){var t=e.target.getAttribute("name");this.modalArea[t]=e.target.value},e.prototype.handleCheckboxChange=function(e){var t=e.target.getAttribute("name");this.modalArea[t]=e.target.checked},e.prototype.render=function(){var e=this,t="Manage area";return this.area||(t="Create area"),h("div",{class:"modal d-block"},h("div",{class:"modal-dialog modal-xl"},h("div",{class:"modal-content"},h("form",{onSubmit:function(t){return e.handleSubmit(t)}},h("div",{class:"modal-header"},h("h5",{class:"modal-title"},t)),h("div",{class:"modal-body"},h("div",{class:"alert alert-danger "+(this.submitResponse.success?"d-none":"")},this.submitResponse.message),h("div",{class:"row"},h("div",{class:"col col-sm-6"},h("div",{class:"form-group erp-field"},h("label",{class:"control-label"},"Name"),h("input",{class:"form-control",name:"name",value:this.modalArea.name,onInput:function(t){return e.handleChange(t)}}))),h("div",{class:"col col-sm-6"},h("div",{class:"form-group erp-field"},h("label",{class:"control-label"},"Label"),h("input",{class:"form-control",name:"label",value:this.modalArea.label,onInput:function(t){return e.handleChange(t)}})))),h("div",{class:"row"},h("div",{class:"col col-sm-12"},h("div",{class:"form-group erp-field"},h("label",{class:"control-label"},"Description"),h("textarea",{class:"form-control",style:{height:"60px"},name:"description",onInput:function(t){return e.handleChange(t)}},this.modalArea.description)))),h("div",{class:"row"},h("div",{class:"col col-sm-6"},h("div",{class:"form-group erp-field"},h("label",{class:"control-label"},"Weight"),h("input",{type:"number",step:1,min:1,class:"form-control",name:"weight",value:this.modalArea.weight,onInput:function(t){return e.handleChange(t)}}))),h("div",{class:"col col-sm-6"},h("div",{class:"form-group erp-field"},h("label",{class:"control-label"},"Group names"),h("div",{class:"form-control-plaintext"},h("div",{class:"form-check"},h("label",{class:"form-check-label"},h("input",{class:"form-check-input",type:"checkbox",name:"show_group_names",value:"true",checked:this.modalArea.show_group_names,onChange:function(t){return e.handleCheckboxChange(t)}})," group names are visible")))))),h("div",{class:"row"},h("div",{class:"col col-sm-6"},h("div",{class:"form-group erp-field"},h("label",{class:"control-label"},"Color"),h("input",{class:"form-control",name:"color",value:this.modalArea.color,onInput:function(t){return e.handleChange(t)}}))),h("div",{class:"col col-sm-6"},h("div",{class:"form-group erp-field"},h("label",{class:"control-label"},"Icon Class"),h("input",{class:"form-control",name:"icon_class",value:this.modalArea.icon_class,onInput:function(t){return e.handleChange(t)}})))),h("div",{class:"alert alert-info"},"Label and Description translations, and access are currently not managable")),h("div",{class:"modal-footer"},h("button",{type:"submit",class:"btn btn-green btn-sm "+(null==this.area?"":"d-none")},h("span",{class:"ti-plus"})," Create area"),h("button",{type:"submit",class:"btn btn-blue btn-sm "+(null!=this.area?"":"d-none")},h("span",{class:"ti-save"})," Save area"),h("button",{type:"button",class:"btn btn-white btn-sm ml-1",onClick:function(){return e.closeModal()}},"Close"))))))},Object.defineProperty(e,"is",{get:function(){return"wv-sitemap-area-modal"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{area:{type:"Any",attr:"area"},modalArea:{state:!0},submitResponse:{type:"Any",attr:"submit-response"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"wvSitemapManagerAreaModalCloseEvent",method:"wvSitemapManagerAreaModalCloseEvent",bubbles:!0,cancelable:!0,composed:!0},{name:"wvSitemapManagerAreaSubmittedEvent",method:"wvSitemapManagerAreaSubmittedEvent",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),e}(),bind=function(e,t){return function(){for(var a=new Array(arguments.length),n=0;n<a.length;n++)a[n]=arguments[n];return e.apply(t,a)}},isBuffer_1=function(e){return null!=e&&(isBuffer(e)||isSlowBuffer(e)||!!e._isBuffer)};function isBuffer(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function isSlowBuffer(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&isBuffer(e.slice(0,0))}var toString=Object.prototype.toString;function isArray(e){return"[object Array]"===toString.call(e)}function isArrayBuffer(e){return"[object ArrayBuffer]"===toString.call(e)}function isFormData(e){return"undefined"!=typeof FormData&&e instanceof FormData}function isArrayBufferView(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function isString(e){return"string"==typeof e}function isNumber(e){return"number"==typeof e}function isUndefined(e){return void 0===e}function isObject(e){return null!==e&&"object"==typeof e}function isDate(e){return"[object Date]"===toString.call(e)}function isFile(e){return"[object File]"===toString.call(e)}function isBlob(e){return"[object Blob]"===toString.call(e)}function isFunction(e){return"[object Function]"===toString.call(e)}function isStream(e){return isObject(e)&&isFunction(e.pipe)}function isURLSearchParams(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function trim(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function isStandardBrowserEnv(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document}function forEach(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),isArray(e))for(var a=0,n=e.length;a<n;a++)t.call(null,e[a],a,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}function merge(){var e={};function t(t,a){e[a]="object"==typeof e[a]&&"object"==typeof t?merge(e[a],t):t}for(var a=0,n=arguments.length;a<n;a++)forEach(arguments[a],t);return e}function extend(e,t,a){return forEach(t,function(t,n){e[n]=a&&"function"==typeof t?bind(t,a):t}),e}var utils={isArray:isArray,isArrayBuffer:isArrayBuffer,isBuffer:isBuffer_1,isFormData:isFormData,isArrayBufferView:isArrayBufferView,isString:isString,isNumber:isNumber,isObject:isObject,isUndefined:isUndefined,isDate:isDate,isFile:isFile,isBlob:isBlob,isFunction:isFunction,isStream:isStream,isURLSearchParams:isURLSearchParams,isStandardBrowserEnv:isStandardBrowserEnv,forEach:forEach,merge:merge,extend:extend,trim:trim},global$1="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}var cachedSetTimeout=defaultSetTimout,cachedClearTimeout=defaultClearTimeout;function runTimeout(e){if(cachedSetTimeout===setTimeout)return setTimeout(e,0);if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout)return cachedSetTimeout=setTimeout,setTimeout(e,0);try{return cachedSetTimeout(e,0)}catch(t){try{return cachedSetTimeout.call(null,e,0)}catch(t){return cachedSetTimeout.call(this,e,0)}}}function runClearTimeout(e){if(cachedClearTimeout===clearTimeout)return clearTimeout(e);if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout)return cachedClearTimeout=clearTimeout,clearTimeout(e);try{return cachedClearTimeout(e)}catch(t){try{return cachedClearTimeout.call(null,e)}catch(t){return cachedClearTimeout.call(this,e)}}}"function"==typeof global$1.setTimeout&&(cachedSetTimeout=setTimeout),"function"==typeof global$1.clearTimeout&&(cachedClearTimeout=clearTimeout);var currentQueue,queue=[],draining=!1,queueIndex=-1;function cleanUpNextTick(){draining&&currentQueue&&(draining=!1,currentQueue.length?queue=currentQueue.concat(queue):queueIndex=-1,queue.length&&drainQueue())}function drainQueue(){if(!draining){var e=runTimeout(cleanUpNextTick);draining=!0;for(var t=queue.length;t;){for(currentQueue=queue,queue=[];++queueIndex<t;)currentQueue&&currentQueue[queueIndex].run();queueIndex=-1,t=queue.length}currentQueue=null,draining=!1,runClearTimeout(e)}}function nextTick(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)t[a-1]=arguments[a];queue.push(new Item(e,t)),1!==queue.length||draining||runTimeout(drainQueue)}function Item(e,t){this.fun=e,this.array=t}Item.prototype.run=function(){this.fun.apply(null,this.array)};var title="browser",platform="browser",browser=!0,env={},argv=[],version="",versions={},release={},config={};function noop(){}var on=noop,addListener=noop,once=noop,off=noop,removeListener=noop,removeAllListeners=noop,emit=noop;function binding(e){throw new Error("process.binding is not supported")}function cwd(){return"/"}function chdir(e){throw new Error("process.chdir is not supported")}function umask(){return 0}var performance=global$1.performance||{},performanceNow=performance.now||performance.mozNow||performance.msNow||performance.oNow||performance.webkitNow||function(){return(new Date).getTime()};function hrtime(e){var t=.001*performanceNow.call(performance),a=Math.floor(t),n=Math.floor(t%1*1e9);return e&&(a-=e[0],(n-=e[1])<0&&(a--,n+=1e9)),[a,n]}var startTime=new Date;function uptime(){return(new Date-startTime)/1e3}var process={nextTick:nextTick,title:title,browser:browser,env:env,argv:argv,version:version,versions:versions,on:on,addListener:addListener,once:once,off:off,removeListener:removeListener,removeAllListeners:removeAllListeners,emit:emit,binding:binding,cwd:cwd,chdir:chdir,umask:umask,hrtime:hrtime,platform:platform,release:release,config:config,uptime:uptime},normalizeHeaderName=function(e,t){utils.forEach(e,function(a,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=a,delete e[n])})},enhanceError=function(e,t,a,n,o){return e.config=t,a&&(e.code=a),e.request=n,e.response=o,e},createError=function(e,t,a,n,o){var r=new Error(e);return enhanceError(r,t,a,n,o)},settle=function(e,t,a){var n=a.config.validateStatus;a.status&&n&&!n(a.status)?t(createError("Request failed with status code "+a.status,a.config,null,a.request,a)):e(a)};function encode(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var buildURL=function(e,t,a){if(!t)return e;var n;if(a)n=a(t);else if(utils.isURLSearchParams(t))n=t.toString();else{var o=[];utils.forEach(t,function(e,t){null!=e&&(utils.isArray(e)?t+="[]":e=[e],utils.forEach(e,function(e){utils.isDate(e)?e=e.toISOString():utils.isObject(e)&&(e=JSON.stringify(e)),o.push(encode(t)+"="+encode(e))}))}),n=o.join("&")}return n&&(e+=(-1===e.indexOf("?")?"?":"&")+n),e},ignoreDuplicateOf=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],parseHeaders=function(e){var t,a,n,o={};return e?(utils.forEach(e.split("\n"),function(e){if(n=e.indexOf(":"),t=utils.trim(e.substr(0,n)).toLowerCase(),a=utils.trim(e.substr(n+1)),t){if(o[t]&&ignoreDuplicateOf.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([a]):o[t]?o[t]+", "+a:a}}),o):o},isURLSameOrigin=utils.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),a=document.createElement("a");function n(e){var n=e;return t&&(a.setAttribute("href",n),n=a.href),a.setAttribute("href",n),{href:a.href,protocol:a.protocol?a.protocol.replace(/:$/,""):"",host:a.host,search:a.search?a.search.replace(/^\?/,""):"",hash:a.hash?a.hash.replace(/^#/,""):"",hostname:a.hostname,port:a.port,pathname:"/"===a.pathname.charAt(0)?a.pathname:"/"+a.pathname}}return e=n(window.location.href),function(t){var a=utils.isString(t)?n(t):t;return a.protocol===e.protocol&&a.host===e.host}}():function(){return!0},chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function E(){this.message="String contains an invalid character"}function btoa(e){for(var t,a,n=String(e),o="",r=0,i=chars;n.charAt(0|r)||(i="=",r%1);o+=i.charAt(63&t>>8-r%1*8)){if((a=n.charCodeAt(r+=.75))>255)throw new E;t=t<<8|a}return o}E.prototype=new Error,E.prototype.code=5,E.prototype.name="InvalidCharacterError";var btoa_1=btoa,cookies=utils.isStandardBrowserEnv()?{write:function(e,t,a,n,o,r){var i=[];i.push(e+"="+encodeURIComponent(t)),utils.isNumber(a)&&i.push("expires="+new Date(a).toGMTString()),utils.isString(n)&&i.push("path="+n),utils.isString(o)&&i.push("domain="+o),!0===r&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},btoa$1="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||btoa_1,xhr=function(e){return new Promise(function(t,a){var n=e.data,o=e.headers;utils.isFormData(n)&&delete o["Content-Type"];var r=new XMLHttpRequest,i="onreadystatechange",s=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in r||isURLSameOrigin(e.url)||(r=new window.XDomainRequest,i="onload",s=!0,r.onprogress=function(){},r.ontimeout=function(){}),e.auth&&(o.Authorization="Basic "+btoa$1((e.auth.username||"")+":"+(e.auth.password||""))),r.open(e.method.toUpperCase(),buildURL(e.url,e.params,e.paramsSerializer),!0),r.timeout=e.timeout,r[i]=function(){if(r&&(4===r.readyState||s)&&(0!==r.status||r.responseURL&&0===r.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in r?parseHeaders(r.getAllResponseHeaders()):null;settle(t,a,{data:e.responseType&&"text"!==e.responseType?r.response:r.responseText,status:1223===r.status?204:r.status,statusText:1223===r.status?"No Content":r.statusText,headers:n,config:e,request:r}),r=null}},r.onerror=function(){a(createError("Network Error",e,null,r)),r=null},r.ontimeout=function(){a(createError("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",r)),r=null},utils.isStandardBrowserEnv()){var l=cookies,c=(e.withCredentials||isURLSameOrigin(e.url))&&e.xsrfCookieName?l.read(e.xsrfCookieName):void 0;c&&(o[e.xsrfHeaderName]=c)}if("setRequestHeader"in r&&utils.forEach(o,function(e,t){void 0===n&&"content-type"===t.toLowerCase()?delete o[t]:r.setRequestHeader(t,e)}),e.withCredentials&&(r.withCredentials=!0),e.responseType)try{r.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&r.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&r.upload&&r.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){r&&(r.abort(),a(e),r=null)}),void 0===n&&(n=null),r.send(n)})},DEFAULT_CONTENT_TYPE={"Content-Type":"application/x-www-form-urlencoded"};function setContentTypeIfUnset(e,t){!utils.isUndefined(e)&&utils.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function getDefaultAdapter(){var e;return"undefined"!=typeof XMLHttpRequest?e=xhr:void 0!==process&&(e=xhr),e}var defaults={adapter:getDefaultAdapter(),transformRequest:[function(e,t){return normalizeHeaderName(t,"Content-Type"),utils.isFormData(e)||utils.isArrayBuffer(e)||utils.isBuffer(e)||utils.isStream(e)||utils.isFile(e)||utils.isBlob(e)?e:utils.isArrayBufferView(e)?e.buffer:utils.isURLSearchParams(e)?(setContentTypeIfUnset(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):utils.isObject(e)?(setContentTypeIfUnset(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};utils.forEach(["delete","get","head"],function(e){defaults.headers[e]={}}),utils.forEach(["post","put","patch"],function(e){defaults.headers[e]=utils.merge(DEFAULT_CONTENT_TYPE)});var defaults_1=defaults;function InterceptorManager(){this.handlers=[]}InterceptorManager.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},InterceptorManager.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},InterceptorManager.prototype.forEach=function(e){utils.forEach(this.handlers,function(t){null!==t&&e(t)})};var InterceptorManager_1=InterceptorManager,transformData=function(e,t,a){return utils.forEach(a,function(a){e=a(e,t)}),e},isCancel=function(e){return!(!e||!e.__CANCEL__)},isAbsoluteURL=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},combineURLs=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e};function throwIfCancellationRequested(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var dispatchRequest=function(e){return throwIfCancellationRequested(e),e.baseURL&&!isAbsoluteURL(e.url)&&(e.url=combineURLs(e.baseURL,e.url)),e.headers=e.headers||{},e.data=transformData(e.data,e.headers,e.transformRequest),e.headers=utils.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),utils.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||defaults_1.adapter)(e).then(function(t){return throwIfCancellationRequested(e),t.data=transformData(t.data,t.headers,e.transformResponse),t},function(t){return isCancel(t)||(throwIfCancellationRequested(e),t&&t.response&&(t.response.data=transformData(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})};function Axios(e){this.defaults=e,this.interceptors={request:new InterceptorManager_1,response:new InterceptorManager_1}}Axios.prototype.request=function(e){"string"==typeof e&&(e=utils.merge({url:arguments[0]},arguments[1])),(e=utils.merge(defaults_1,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[dispatchRequest,void 0],a=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)a=a.then(t.shift(),t.shift());return a},utils.forEach(["delete","get","head","options"],function(e){Axios.prototype[e]=function(t,a){return this.request(utils.merge(a||{},{method:e,url:t}))}}),utils.forEach(["post","put","patch"],function(e){Axios.prototype[e]=function(t,a,n){return this.request(utils.merge(n||{},{method:e,url:t,data:a}))}});var Axios_1=Axios;function Cancel(e){this.message=e}Cancel.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},Cancel.prototype.__CANCEL__=!0;var Cancel_1=Cancel;function CancelToken(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var a=this;e(function(e){a.reason||(a.reason=new Cancel_1(e),t(a.reason))})}CancelToken.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},CancelToken.source=function(){var e;return{token:new CancelToken(function(t){e=t}),cancel:e}};var CancelToken_1=CancelToken,spread=function(e){return function(t){return e.apply(null,t)}};function createInstance(e){var t=new Axios_1(e),a=bind(Axios_1.prototype.request,t);return utils.extend(a,Axios_1.prototype,t),utils.extend(a,t),a}var axios=createInstance(defaults_1);axios.Axios=Axios_1,axios.create=function(e){return createInstance(utils.merge(defaults_1,e))},axios.Cancel=Cancel_1,axios.CancelToken=CancelToken_1,axios.isCancel=isCancel,axios.all=function(e){return Promise.all(e)},axios.spread=spread;var axios_1=axios,default_1=axios;axios_1.default=default_1;var axios$1=axios_1,WvSitemapManager=function(){function e(){this.sitemapObj=null,this.nodePageDict=null,this.isAreaModalVisible=!1,this.managedArea=null,this.isNodeModalVisible=!1,this.managedNodeObj={areaId:null,node:null},this.apiResponse={message:"",errors:[],success:!0},this.nodeAuxData=null}return e.prototype.componentWillLoad=function(){if(this.initData){var e=JSON.parse(this.initData);this.sitemapObj=e.sitemap,this.nodePageDict=e.node_page_dict}},e.prototype.createArea=function(){this.isAreaModalVisible=!0,this.managedArea=null},e.prototype.areaManageEventHandler=function(e){this.isAreaModalVisible=!0,this.managedArea=Object.assign({},e.detail)},e.prototype.areaModalClose=function(){this.isAreaModalVisible=!1,this.managedArea=null,this.apiResponse={message:"",errors:[],success:!0}},e.prototype.areaSubmittedEventHandler=function(e){this.apiResponse={message:"",errors:[],success:!0};var t=e.detail,a=this.apiRoot+"sitemap/area";null!=t&&t.id&&(a+="/"+t.id),a+="?appId="+this.appId;var n=this,o=JSON.stringify(t);axios$1.post(a,o,{headers:{"Content-Type":"application/json;charset=UTF-8","Accept-Encoding":"gzip",Accept:"application/json"}}).then(function(e){var a=e.data;if(200!==e.status||null==a||!a.success)return n.apiResponse=Object.assign({},a),void(n.managedArea=Object.assign({},t));n.sitemapObj=Object.assign({},a.object.sitemap),n.nodePageDict=Object.assign({},a.object.node_page_dict),n.areaModalClose()}).catch(function(e){n.apiResponse=Object.assign({},{success:!1,message:e}),n.managedArea=Object.assign({},t)})},e.prototype.areaDeleteEventHandler=function(e){this.apiResponse={message:"",errors:[],success:!0};var t=this;axios$1.post(this.apiRoot+"sitemap/area/"+e.detail+"/delete?appId="+this.appId,null,{headers:{"Content-Type":"application/json","Accept-Encoding":"gzip",Accept:"application/json"}}).then(function(e){var a=e.data;200===e.status&&null!=a&&a.success?(t.sitemapObj=Object.assign({},a.object.sitemap),t.nodePageDict=Object.assign({},a.object.node_page_dict),t.areaModalClose()):alert(a.message)}).catch(function(e){alert(e.message)})},e.prototype.nodeManageEventHandler=function(e){this.isNodeModalVisible=!0,this.managedNodeObj=Object.assign({},e.detail)},e.prototype.nodeModalCloseEventHandler=function(){this.isNodeModalVisible=!1,this.managedNodeObj={areaId:null,node:null},this.apiResponse={message:"",errors:[],success:!0}},e.prototype.nodeSubmittedEventHandler=function(e){this.apiResponse={message:"",errors:[],success:!0};var t=e.detail.node,a=this.apiRoot+"sitemap/node";null!=t&&null!=t.id&&(a+="/"+t.id);var n=this;axios$1.post(a+="?appId="+this.appId+"&areaId="+e.detail.areaId,JSON.stringify(t),{headers:{"Content-Type":"application/json","Accept-Encoding":"gzip",Accept:"application/json"}}).then(function(t){var a=t.data;if(200!==t.status||null==a||!a.success)return n.apiResponse=Object.assign({},a),void(n.managedNodeObj=Object.assign({},e.detail));n.sitemapObj=Object.assign({},a.object.sitemap),n.nodePageDict=Object.assign({},a.object.node_page_dict),n.nodeModalCloseEventHandler(),n.nodeAuxDataUpdateEventHandler(null)}).catch(function(t){n.apiResponse=Object.assign({},{success:!1,message:t}),n.managedNodeObj=Object.assign({},e.detail)})},e.prototype.nodeDeleteEventHandler=function(e){this.apiResponse={message:"",errors:[],success:!0};var t=this;axios$1.post(this.apiRoot+"sitemap/node/"+e.detail+"/delete?appId="+this.appId,null,{headers:{"Content-Type":"application/json","Accept-Encoding":"gzip",Accept:"application/json"}}).then(function(e){var a=e.data;200===e.status&&null!=a&&a.success?(t.sitemapObj=Object.assign({},a.object.sitemap),t.nodePageDict=Object.assign({},a.object.node_page_dict),t.nodeModalCloseEventHandler()):alert(a.message)}).catch(function(e){alert(e.message)})},e.prototype.nodeAuxDataUpdateEventHandler=function(e){null!=e?(this.nodeAuxData=Object.assign({},{allEntities:e.detail.allEntities,nodeTypes:e.detail.nodeTypes,allPages:e.detail.allPages,nodePageDict:e.detail.nodePageDict}),this.managedNodeObj=Object.assign({},e.detail.selectedNodeObj)):(this.nodeAuxData=null,this.managedNodeObj=null)},e.prototype.render=function(){var e=this;return h("div",{id:"sitemap-manager"},h("div",{class:"btn-group btn-group-sm mb-2"},h("button",{type:"button",class:"btn btn-white",onClick:function(){return e.createArea()}},h("span",{class:"fa fa-plus go-green"})," add area")),this.sitemapObj.areas.map(function(e){return h("wv-sitemap-manager-area",{area:e})}),this.isAreaModalVisible?h("wv-sitemap-area-modal",{submitResponse:this.apiResponse,area:this.managedArea}):null,this.isNodeModalVisible?h("wv-sitemap-node-modal",{nodePageDict:this.nodePageDict,nodeAuxData:this.nodeAuxData,appId:this.appId,submitResponse:this.apiResponse,nodeObj:this.managedNodeObj,apiRoot:this.apiRoot}):null)},Object.defineProperty(e,"is",{get:function(){return"wv-sitemap-manager"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{apiResponse:{state:!0},apiRoot:{type:String,attr:"api-root"},appId:{type:String,attr:"app-id"},initData:{type:String,attr:"init-data"},isAreaModalVisible:{state:!0},isNodeModalVisible:{state:!0},managedArea:{state:!0},managedNodeObj:{state:!0},nodeAuxData:{state:!0},nodePageDict:{state:!0},sitemapObj:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"wvSitemapManagerAreaManageEvent",method:"areaManageEventHandler"},{name:"wvSitemapManagerAreaModalCloseEvent",method:"areaModalClose"},{name:"wvSitemapManagerAreaSubmittedEvent",method:"areaSubmittedEventHandler"},{name:"wvSitemapManagerAreaDeleteEvent",method:"areaDeleteEventHandler"},{name:"wvSitemapManagerNodeManageEvent",method:"nodeManageEventHandler"},{name:"wvSitemapManagerNodeModalCloseEvent",method:"nodeModalCloseEventHandler"},{name:"wvSitemapManagerNodeSubmittedEvent",method:"nodeSubmittedEventHandler"},{name:"wvSitemapManagerNodeDeleteEvent",method:"nodeDeleteEventHandler"},{name:"wvSitemapManagerNodeAuxDataUpdateEvent",method:"nodeAuxDataUpdateEventHandler"}]},enumerable:!0,configurable:!0}),e}(),WvSitemapManagerArea=function(){function e(){}return e.prototype.manageArea=function(){this.wvSitemapManagerAreaManageEvent.emit(this.area)},e.prototype.deleteArea=function(e){confirm("Are you sure?")?this.wvSitemapManagerAreaDeleteEvent.emit(this.area.id):e.preventDefault()},e.prototype.createNode=function(){this.wvSitemapManagerNodeManageEvent.emit({node:null,areaId:this.area.id})},e.prototype.manageNode=function(e){this.wvSitemapManagerNodeManageEvent.emit({node:e,areaId:this.area.id})},e.prototype.deleteNode=function(e,t){confirm("Are you sure?")?this.wvSitemapManagerNodeDeleteEvent.emit(t.id):e.preventDefault()},e.prototype.render=function(){var e=this,t=this,a="#999";this.area.color&&(a=this.area.color);var n="ti-help";return this.area.icon_class&&(n=this.area.icon_class),h("div",{class:"sitemap-area mb-3"},h("div",{class:"area-header"},h("span",{class:"icon "+n,style:{backgroundColor:a}}),h("div",{class:"label"},"(",this.area.weight,") ",this.area.label),h("div",{class:"btn-group btn-group-sm action"},h("button",{type:"button",class:"btn btn-link",onClick:function(t){return e.deleteArea(t)}},h("span",{class:"ti-trash go-red"})," delete"),h("button",{type:"button",class:"btn btn-link",onClick:function(){return e.manageArea()}},h("span",{class:"ti-settings"})," config"))),h("div",{class:"area-body "+(this.area.nodes.length>0?"":"d-none")},h("button",{type:"button",class:"btn btn-white btn-sm",onClick:function(){return e.createNode()}},h("span",{class:"fa fa-plus"})," add area node"),h("table",{class:"table table-bordered table-sm mb-0 sitemap-nodes mt-3"},h("thead",null,h("tr",null,h("th",{style:{width:"40px"}},"w."),h("th",{style:{width:"40px"}},"icon"),h("th",{style:{width:"200px"}},"name"),h("th",{style:{width:"auto"}},"label"),h("th",{style:{width:"200px"}},"group"),h("th",{style:{width:"100px"}},"type"),h("th",{style:{width:"160px"}},"action"))),h("tbody",null,this.area.nodes.map(function(e){var a="";switch(e.type){case 1:a="entity list";break;case 2:a="application";break;case 3:a="url";break;case 4:a="site"}return h("tr",null,h("td",null,e.weight),h("td",null,h("span",{class:"icon "+e.icon_class})),h("td",null,e.name),h("td",null,e.label),h("td",null,e.group_name),h("td",null,a),h("td",null,h("div",{class:"btn-group btn-group-sm action"},h("button",{type:"button",class:"btn btn-link",onClick:function(a){return t.deleteNode(a,e)}},h("span",{class:"ti-trash go-red"})," delete"),h("button",{type:"button",class:"btn btn-link",onClick:function(){return t.manageNode(e)}},h("span",{class:"ti-settings"})," config"))))})))),h("div",{class:"area-body "+(this.area.nodes.length>0?"d-none":"")},h("button",{type:"button",class:"btn btn-white btn-sm",onClick:function(){return e.createNode()}},h("span",{class:"fa fa-plus"})," add area node"),h("div",{class:"alert alert-info mt-3"},"No nodes in this area.")))},Object.defineProperty(e,"is",{get:function(){return"wv-sitemap-manager-area"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{area:{type:"Any",attr:"area"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"wvSitemapManagerAreaManageEvent",method:"wvSitemapManagerAreaManageEvent",bubbles:!0,cancelable:!0,composed:!0},{name:"wvSitemapManagerAreaDeleteEvent",method:"wvSitemapManagerAreaDeleteEvent",bubbles:!0,cancelable:!0,composed:!0},{name:"wvSitemapManagerNodeManageEvent",method:"wvSitemapManagerNodeManageEvent",bubbles:!0,cancelable:!0,composed:!0},{name:"wvSitemapManagerNodeDeleteEvent",method:"wvSitemapManagerNodeDeleteEvent",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),e}(),WvSitemapNodeModal=function(){function e(){this.nodeObj={areaId:null,node:null},this.nodePageDict=null,this.submitResponse={message:"",errors:[],success:!0},this.modalNodeObj={areaId:null,node:{},node_pages:[]}}return e.prototype.componentWillLoad=function(){var e=this,t="wv-sitemap-manager-area-modal-backdrop";if(!document.getElementById(t)){var a=document.createElement("div");a.className="modal-backdrop show",a.id=t,document.body.appendChild(a)}null==this.nodeAuxData&&this.LoadData(),this.nodeObj.node?(this.modalNodeObj.node=Object.assign({},this.nodeObj.node),this.modalNodeObj.node.pages||(this.modalNodeObj.node.pages=[])):this.modalNodeObj.node={pages:[]},this.modalNodeObj.areaId=this.nodeObj.areaId,this.nodeObj.node&&this.nodePageDict&&this.nodePageDict[this.nodeObj.node.id]&&(this.modalNodeObj.node_pages=this.nodePageDict[this.nodeObj.node.id],this.modalNodeObj.node_pages.forEach(function(t){e.modalNodeObj.node.pages.push(t.value)}))},e.prototype.componentDidUnload=function(){var e=document.getElementById("wv-sitemap-manager-area-modal-backdrop");e&&e.remove()},e.prototype.LoadData=function(){var e=this;axios$1.get(this.apiRoot+"sitemap/node/get-aux-info?appId="+this.appId,{method:"GET",headers:new Headers({"Content-Type":"application/json","Accept-Encoding":"gzip",Accept:"application/json"})}).then(function(t){var a=t.data;if(200===t.status&&null!=a&&a.success){var n={};n.allEntities=a.object.all_entities,n.nodeTypes=a.object.node_types,n.allPages=a.object.all_pages,n.nodePageDict=a.object.node_page_dict,n.selectedNodeObj=e.nodeObj,e.wvSitemapManagerNodeAuxDataUpdateEvent.emit(n)}else null!=a?alert(a.message):alert("Error: "+t.status+" - "+t.statusText)}).catch(function(e){alert(e.message)})},e.prototype.closeModal=function(){this.wvSitemapManagerNodeModalCloseEvent.emit()},e.prototype.handleSubmit=function(e){e.preventDefault(),this.wvSitemapManagerNodeSubmittedEvent.emit(this.modalNodeObj)},e.prototype.handleChange=function(e){var t=e.target.getAttribute("name");this.modalNodeObj.node[t]=e.target.value},e.prototype.handleCheckboxChange=function(e){var t=e.target.getAttribute("name");this.modalNodeObj.node[t]=e.target.checked},e.prototype.handleSelectChange=function(e){var t=e.target.getAttribute("name"),a=Object.assign({},this.modalNodeObj);a.node[t]=[];for(var n=0;n<e.target.options.length;n++){var o=e.target.options[n];o.selected&&a.node[t].push(String(o.value))}a.node[t]&&0!==a.node[t].length?1==a.node[t].length&&"pages"!=t&&(a.node[t]=a.node[t][0]):a.node[t]=null,this.modalNodeObj=a},e.prototype.render=function(){var e=this,t="Manage node";if(this.nodeObj.node||(t="Create node"),null==this.nodeAuxData)return h("div",{class:"modal d-block"},h("div",{class:"modal-dialog modal-xl"},h("div",{class:"modal-content"},h("div",{class:"modal-header"},h("h5",{class:"modal-title"},t)),h("div",{class:"modal-body",style:{minHeight:"300px"}},h("i",{class:"fas fa-spinner fa-spin go-blue"})," Loading data ..."))));this.modalNodeObj.node.type||(this.modalNodeObj.node.type=String(this.nodeAuxData.nodeTypes[0].value)),this.modalNodeObj.node.entity_id||(this.modalNodeObj.node.entity_id=String(this.nodeAuxData.allEntities[0].value));var a=[],n=[];return this.modalNodeObj.node_pages.forEach(function(e){a.push(e),n.push(e.value)}),this.nodeAuxData.allPages.forEach(function(t){(0==n.length||n.length>0&&-1===n.indexOf(t.page_id))&&(t.node_id&&t.node_id!==e.modalNodeObj.node.id||a.push({value:t.page_id,label:t.page_name}))}),h("div",{class:"modal d-block"},h("div",{class:"modal-dialog modal-lg"},h("div",{class:"modal-content"},h("form",{onSubmit:function(t){return e.handleSubmit(t)}},h("div",{class:"modal-header"},h("h5",{class:"modal-title"},t)),h("div",{class:"modal-body"},h("div",{class:"alert alert-danger "+(this.submitResponse.success?"d-none":"")},this.submitResponse.message),h("div",{class:"row"},h("div",{class:"col col-sm-6"},h("div",{class:"form-group erp-field"},h("label",{class:"control-label"},"Name"),h("input",{class:"form-control",name:"name",value:this.modalNodeObj.node.name,onInput:function(t){return e.handleChange(t)}}))),h("div",{class:"col col-sm-6"},h("div",{class:"form-group erp-field"},h("label",{class:"control-label"},"Label"),h("input",{class:"form-control",name:"label",value:this.modalNodeObj.node.label,onInput:function(t){return e.handleChange(t)}})))),h("div",{class:"row"},h("div",{class:"col col-sm-6"},h("div",{class:"form-group erp-field"},h("label",{class:"control-label"},"Icon Class"),h("input",{class:"form-control",name:"icon_class",value:this.modalNodeObj.node.icon_class,onInput:function(t){return e.handleChange(t)}}))),h("div",{class:"col col-sm-6"},h("div",{class:"form-group erp-field"},h("label",{class:"control-label"},"Weight"),h("input",{type:"number",step:1,min:1,class:"form-control",name:"weight",value:this.modalNodeObj.node.weight,onInput:function(t){return e.handleChange(t)}})))),h("div",{class:"row"},h("div",{class:"col col-sm-6"},h("div",{class:"form-group erp-field"},h("label",{class:"control-label"},"Type"),h("select",{class:"form-control",name:"type",onChange:function(t){return e.handleSelectChange(t)}},this.nodeAuxData.nodeTypes.map(function(e){return h("option",{value:e.value,selected:e.value===String(this.modalNodeObj.node.type)},e.label)}.bind(this))))),"1"===String(this.modalNodeObj.node.type)?h("div",{class:"col col-sm-6"},h("div",{class:"form-group erp-field"},h("label",{class:"control-label"},"Entity"),h("select",{class:"form-control",name:"entity_id",onChange:function(t){return e.handleSelectChange(t)}},this.nodeAuxData.allEntities.map(function(e){return h("option",{value:e.value,selected:e.value===String(this.modalNodeObj.node.entity_id)},e.label)}.bind(this))))):null,"2"===String(this.modalNodeObj.node.type)?h("div",{class:"col col-sm-6"},h("div",{class:"form-group erp-field"},h("label",{class:"control-label"},"App Pages without nodes"),h("select",{class:"form-control",multiple:!0,name:"pages",onChange:function(t){return e.handleSelectChange(t)}},a.map(function(e){var t=!1;return this.modalNodeObj.node.pages&&this.modalNodeObj.node.pages.length>0&&this.modalNodeObj.node.pages.indexOf(e.value)>-1&&(t=!0),h("option",{value:e.value,selected:t},e.label)}.bind(this))))):null,"3"===String(this.modalNodeObj.node.type)?h("div",{class:"col col-sm-6"},h("div",{class:"form-group erp-field"},h("label",{class:"control-label"},"Url"),h("input",{class:"form-control",name:"url",value:this.modalNodeObj.node.url,onInput:function(t){return e.handleChange(t)}}))):null),h("div",{class:"alert alert-info"},"Label and Description translations, and access are currently not managable")),null==this.nodeAuxData?null:h("div",{class:"modal-footer"},h("div",null,h("button",{type:"submit",class:"btn btn-green btn-sm "+(null==this.modalNodeObj.node?"":"d-none")},h("span",{class:"ti-plus"})," Create node"),h("button",{type:"submit",class:"btn btn-blue btn-sm "+(null!=this.modalNodeObj.node?"":"d-none")},h("span",{class:"ti-save"})," Save node"),h("button",{type:"button",class:"btn btn-white btn-sm ml-1",onClick:function(){return e.closeModal()}},"Close")))))))},Object.defineProperty(e,"is",{get:function(){return"wv-sitemap-node-modal"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{apiRoot:{type:String,attr:"api-root"},appId:{type:String,attr:"app-id"},modalNodeObj:{state:!0},nodeAuxData:{type:"Any",attr:"node-aux-data"},nodeObj:{type:"Any",attr:"node-obj"},nodePageDict:{type:"Any",attr:"node-page-dict"},submitResponse:{type:"Any",attr:"submit-response"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"wvSitemapManagerNodeModalCloseEvent",method:"wvSitemapManagerNodeModalCloseEvent",bubbles:!0,cancelable:!0,composed:!0},{name:"wvSitemapManagerNodeSubmittedEvent",method:"wvSitemapManagerNodeSubmittedEvent",bubbles:!0,cancelable:!0,composed:!0},{name:"wvSitemapManagerNodeAuxDataUpdateEvent",method:"wvSitemapManagerNodeAuxDataUpdateEvent",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),e}();export{WvSitemapAreaModal,WvSitemapManager,WvSitemapManagerArea,WvSitemapNodeModal};