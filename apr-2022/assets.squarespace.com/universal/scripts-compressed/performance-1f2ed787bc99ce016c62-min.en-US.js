/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 931060:
/***/ (function(module) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 545563:
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 273701:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var defineProperty = __webpack_require__(931060);

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 412401:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/**! 
 * @sqs/rum-collector v4.3.0 
 * Gather and deliver real-user performance metrics in Squarespace products. 
 * 
 * Copyright (c) 2022 Squarespace, Inc. 
 * https://github.com/sqsp/rum-collector.git 
 * Licensed under the UNLICENSED license 
 */

var e=__webpack_require__(714806);function t(){return t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},t.apply(this,arguments)}var n,r=function(e){return{app:"a",data:{__encoding_config__:e,__encoding_key__:"d"},event:"e",pageLoadId:"pl",ts:"t"}},o=t({context:{__encoding_config__:{accountId:"accountId",ampEnabled:"ampEnabled",authenticUrl:"authenticUrl",cloneable:"cloneable",collectionType:"collectionType",createdOn:"createdOn",developerMode:"developerMode",impersonatedSession:"impersonatedSession",inFrame:"inFrame",isHstsEnabled:"isHstsEnabled",isInternal:"isInternal",language:"language",memberId:"memberId",pageType:"pageType",platform:"platform",templateId:"templateId",timeZone:"timeZone",websiteId:"websiteId",websiteType:"websiteType"},__encoding_key__:"ctx"},supportLevel:"sl",visibilityStateOnDCL:"vs"},{analyticsId:"aid",connection:{__encoding_config__:{downlink:"do",effectiveType:"ef",rtt:"rtt",saveData:"sd"},__encoding_key__:"con"},deliveryType:"dt",display:{__encoding_config__:{devicePixelRatio:"dpr",screenHeight:"sh",screenWidth:"sw",viewportHeight:"vh",viewportWidth:"vw"},__encoding_key__:"disp"},hardware:{__encoding_config__:{deviceMemory:"dm",hardwareConcurrency:"hc"},__encoding_key__:"hdw"},hash:"h",hostname:"hn",marketingId:"mid",memberId:"mem",pathname:"p",version:"v"},{cumulativeLayoutShift:"cl",decodedBodySize:"db",domainLookup:"dml",domContentLoadedEventEnd:"de",domContentLoadedEventStart:"ds",encodedBodySize:"eb",firstContentfulPaint:"fcp",firstInputDelay:"fid",largestContentfulPaint:"lcp",loadEventEnd:"le",loadEventStart:"l",tcpConnection:"tcp",tlsConnection:"tls"}),i={duration:"d",endMarkDetail:"e",measureDetail:"m",name:"n",startMarkDetail:"s",startTime:"st"};!function(e){e.Element="element",e.Event="event",e.FirstInput="first-input",e.LongTask="longtask",e.LargestContentfulPaint="largest-contentful-paint",e.LayoutShift="layout-shift",e.Mark="mark",e.Measure="measure",e.Navigation="navigation",e.Paint="paint",e.Resource="resource"}(n||(n={}));var a,c=/(iPhone|iPod|iPad) OS ((1[0-2])|[2-9])_\d+.*AppleWebKit(?!.*Safari)/i;function s(e,t){var n={};return Object.keys(t).forEach(function(r){var o,i,a,c=t[r],d=e[r]||e,u=typeof d,f="string"===u;if(f||"object"===u||"undefined"===d){if(f)o=d,i="boolean"==typeof(a=c)?a?1:0:"number"==typeof a&&isFinite(a)?a.toString(36):a;else{var l=d.__encoding_skip__,p=d.__encoding_config__,m=d.__encoding_fn__;if(!l&&!p&&!e)throw new Error("Invalid encoding map");o=l?r:d.__encoding_key__,i=p?s(p,c):m?m(c):c}o&&(n[""+o]=i)}}),n}function d(){if(!Object.prototype.hasOwnProperty.call(window,"PerformanceObserver"))return!1;try{var e=new window.PerformanceObserver(function(){return null});e.observe({entryTypes:[n.Mark]}),e.disconnect()}catch(e){return!1}return!0}function u(){var e;return"function"==typeof(null==(e=window.navigator)?void 0:e.sendBeacon)&&!c.test(window.navigator.userAgent)}var f=[];function l(){f.length&&(function(e,t){if(!u()||!navigator.sendBeacon(e,t)){var n=new XMLHttpRequest;n.open("POST",e,!0),n.setRequestHeader("Content-Type","text/plain;charset=UTF-8"),n.send(t)}}("/api/1/performance/records",JSON.stringify(f)),f=[])}function p(e,n){var r;if(!(r=n?s(n,e):t({raw:!0},e)))throw new Error("Data is empty");f.push(r)}var m,v,g=function(e){return function(){e&&e.apply(void 0,[].slice.call(arguments))}},w=function(e){return function(){var t=arguments;return new Promise(function(n,r){try{e.apply(void 0,[function(e){n(e)}].concat([].slice.call(t)))}catch(e){r(e)}})}},h=function(e){return w(setTimeout)(e)},y=function(){return w(function(e){var t=function t(n){"pagehide"!==n.type&&"hidden"!==document.visibilityState||(e(n),removeEventListener("visibilitychange",t,!0),removeEventListener("pagehide",t,!0))};window.addEventListener("visibilitychange",t,!0),window.addEventListener("pagehide",t,!0)})()},_=function(e){"complete"===document.readyState?window.setTimeout(e,0):window.addEventListener("pageshow",e,{once:!0})},E=function(e){try{return Promise.resolve(w(_)).then(function(){var t=window.performance.getEntriesByType(n.Navigation)[0],r=null!=t?t:function(){var e={entryType:n.Navigation,startTime:0},t=performance.timing;for(var r in t)if("navigationStart"!==r&&"toJSON"!==r){var o=Math.max(t[r]-t.navigationStart,0);e[r]=o}return e}(),o=r[e];if(!("number"!=typeof o||o<0))return Math.round(o)})}catch(e){return Promise.reject(e)}},b=function(e,t){if("number"==typeof e&&"number"==typeof t&&e>=t)return e-t},S=function(e){return Promise.all([E("domainLookupEnd"),E("domainLookupStart")]).then(function(t){e({domainLookup:b(t[0],t[1])})})},P=function(e){return Promise.all([E("connectEnd"),E("connectStart")]).then(function(t){e({tcpConnection:b(t[0],t[1])})})},L=function(t){e.getCLS(function(e){var n;t({cumulativeLayoutShift:null!=(n=null==e?void 0:e.value)?n:void 0})})},T=function(e){return E("decodedBodySize").then(function(t){e({decodedBodySize:t})})},x=function(e){return E("domContentLoadedEventEnd").then(function(t){e({domContentLoadedEventEnd:t})})},C=function(e){return E("domContentLoadedEventStart").then(function(t){e({domContentLoadedEventStart:t})})},M=function(e){return E("encodedBodySize").then(function(t){e({encodedBodySize:t})})},N=function(t){e.getFCP(function(e){t({firstContentfulPaint:e?Math.round(e.value):void 0})})},k=function(t){e.getFID(function(e){t({firstInputDelay:e?Math.round(e.value):void 0})})},I=function(t){e.getLCP(function(e){t({largestContentfulPaint:e?Math.round(e.value):void 0})})},O=function(e){return E("loadEventEnd").then(function(t){e({loadEventEnd:t})})},D=function(e){return E("loadEventStart").then(function(t){e({loadEventStart:t})})},R=function(e){return E("responseStart").then(function(t){e({responseStart:t})})},B=function(e){return Promise.all([E("connectEnd"),E("secureConnectionStart")]).then(function(t){e({tlsNegotiation:b(t[0],t[1])})})},A={__proto__:null,getDomainLookup:S,getTcpConnection:P,getCumulativeLayoutShift:L,getDecodedBodySize:T,getDomContentLoadedEventEnd:x,getDomContentLoadedEventStart:C,getEncodedBodySize:M,getFirstContentfulPaint:N,getFirstInputDelay:k,getLargestContentfulPaint:I,getLoadEventEnd:O,getLoadEventStart:D,getResponseStart:R,getTlsNegotiation:B};function j(e){Object.values(A).forEach(function(t){try{var n=function(n,r){try{var o=Promise.resolve(t(e)).then(function(){})}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(e){var t,n;null==(t=window)||null==(n=t.SQUARESPACE_SENTRY)||null==n.captureException||n.captureException(e)});return Promise.resolve(n&&n.then?n.then(function(){}):void 0)}catch(e){return Promise.reject(e)}})}function q(e){var t=new RegExp("(^| )"+e+"=([^;]+)"),n=document.cookie.match(t);return n?n[2]:""}function H(e){var t={};for(var n in e)"function"!=typeof e[n]&&(t[n]=e[n]);return t}!function(e){e.Beacon="beacon",e.XHR="xhr"}(m||(m={}));var z=function(e){var t=e.spanName,n=e.tracer,r=e.startTime,o=e.spanAttributes,i=void 0===o?{}:o;void 0===v&&(v=new Map);var a=n.startSpan(t,{startTime:r});a.setAttributes(i),v.set(t,a)},F=function(e){var t=e.spanName,n=e.spanAttributes,r=void 0===n?{}:n;if(void 0!==v&&v.has(t)){var o=v.get(t);o.setAttributes(r),o.end(),v.delete(t)}},U=function(e){var t,n;"function"==typeof(null==(t=window)||null==(n=t.SQUARESPACE_SENTRY)?void 0:n.captureException)?window.SQUARESPACE_SENTRY.captureException(e):console.warn("@sqs/rum-collector: user timing exception: "+e)};function W(){return n.Mark in window.performance&&n.Measure in window.performance}var X,J=new Set,Q=["serverTiming","workerTiming"],Y=["media-www.sqspcdn.com","images.squarespace-cdn.com","static1.squarespace.com"],Z=function(c){try{var s=function(e){return{appName:e.appName||"",context:e.context||{},enabled:"boolean"!=typeof e.enabled||e.enabled,captureException:g(e.captureException)}}(c);if(!s.enabled)return Promise.resolve();var f="";return Promise.resolve(function(c,v){try{var g=Promise.resolve(new Promise(function(e,t){var n=new XMLHttpRequest;n.onreadystatechange=function(){if(n.readyState===XMLHttpRequest.DONE)if(200===n.status)try{e(JSON.parse(n.response))}catch(e){t(e)}else 0!==n.status&&t(new Error("XHR request DONE with unexpected status: "+n.status))},n.ontimeout=function(){t(new Error("Metric settings request timeout"))},n.open("GET","/api/1/performance/settings",!0),n.timeout=3e4,n.send()})).then(function(c){if(!(f=c.pageLoadId))throw new Error("Unable to resolve pageLoadId");var v=function(e,t){return function(n,r,o){p({app:e,data:n,event:r,pageLoadId:t,ts:Date.now()},o)}}(s.appName,f);!function(e,n){Promise.resolve(function(e){try{var n=function(e){var t,n,r,o,i,a,c;return void 0===e&&(e={}),{context:e,analyticsId:q("SS_ANALYTICS_ID"),marketingId:q("SS_MID"),memberId:null==(t=window.Static)||null==(n=t.SQUARESPACE_CONTEXT)||null==(r=n.authenticatedAccount)?void 0:r.id,version:"4.3.0",connection:{downlink:null==(o=navigator.connection)?void 0:o.downlink,effectiveType:null==(i=navigator.connection)?void 0:i.effectiveType,rtt:null==(a=navigator.connection)?void 0:a.rtt,saveData:null==(c=navigator.connection)?void 0:c.saveData},deliveryType:u()?m.Beacon:m.XHR,display:{devicePixelRatio:window.devicePixelRatio,screenHeight:window.screen.height,screenWidth:window.screen.width,viewportHeight:window.innerHeight,viewportWidth:window.innerWidth},hardware:{deviceMemory:navigator.deviceMemory,hardwareConcurrency:navigator.hardwareConcurrency},hash:window.location.hash||"",hostname:window.location.hostname||"",pathname:window.location.pathname||"/"}}(e),r={};return j(function(e){Object.assign(r,e)}),Promise.resolve(Promise.race([h(6e4),y()])).then(function(){return t({},n,r)})}catch(e){return Promise.reject(e)}}(n)).then(function(t){e(t,"page_speed",r(o))})}(v,s.context),function(e){if(window.PerformanceMeasure&&window.PerformanceMark){var t=function(t){t.map(H).forEach(function(t){if("string"==typeof(n=t.name)&&"rum-"===n.substring(0,4)){var n,o=t.name+"|"+t.duration;J.has(o)||(e(t,"user",r(i)),J.add(o))}})};t(window.performance.getEntriesByType(n.Measure)),d()?new window.PerformanceObserver(function(e){return t(e.getEntries())}).observe({entryTypes:[n.Measure]}):document.addEventListener("visibilitychange",function(){"hidden"===document.visibilityState&&t(window.performance.getEntriesByType(n.Measure))})}}(v),function(r){try{if(!d())return Promise.resolve();X||e.getLCP(function(e){X=null==e?void 0:e.value});var o=new Map;document.querySelectorAll("img[data-src]").forEach(function(e){var t=e.getAttribute("data-src");e instanceof HTMLImageElement&&t&&o.set(t,e)});var i=function(e){return function(e){var n,r=e.resource,o=e.deliverMetrics,i=e.domImages;try{if(!(r instanceof PerformanceResourceTiming&&(n=r.name,Y.some(function(e){return n.includes(e)}))))return Promise.resolve();var a=r.name.replace(/\?format=.*/,""),c=i.get(a);return void 0===c?Promise.resolve():Promise.resolve(function(e,n){try{for(var r=function(e){var t,n=Number(null==(t=e.getAttribute("data-image-resolution"))?void 0:t.replace("w",""));if(!Number.isNaN(n))return n;var r=e.src.indexOf("format=");if(-1===r)return NaN;var o=e.src.slice(r+7).replace(/w.*/,"");return Number(o)}(n),o=n.naturalWidth,i=n.naturalHeight,a=n.width,c=n.height,s=void 0===X||e.responseEnd<X,d=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(o[n]=e[n]);return o}(e.toJSON(),Q),u=0,f=Object.entries(d);u<f.length;u++){var l=f[u],p=l[1];"number"==typeof p&&(d[l[0]]=Math.floor(p))}var m=new Promise(function(e){var u=new IntersectionObserver(function(f){f.forEach(function(f){if(f.target===n)return u.disconnect(),e(t({visibleOnLoad:f.isIntersecting,observationTime:Math.floor(f.time),intersectionRatio:f.intersectionRatio,squarespaceSize:r,naturalHeight:i,naturalWidth:o,height:c,width:a,loadedBeforeLCP:s},d))})});u.observe(n)});return Promise.resolve(m)}catch(e){return Promise.reject(e)}}(r,c)).then(function(e){o(e,"image")})}catch(e){return Promise.reject(e)}}({resource:e,deliverMetrics:r,domImages:o})};performance.getEntriesByType(n.Resource).forEach(i),new PerformanceObserver(function(e){e.getEntries().forEach(i)}).observe({entryTypes:[n.Resource]}),Promise.resolve()}catch(e){return Promise.reject(e)}}(v),window.addEventListener("load",function(){a=window.setTimeout(l,3e4)}),document.addEventListener("visibilitychange",function(){"hidden"===document.visibilityState&&(window.clearTimeout(a),l())})})}catch(e){return v(e)}return g&&g.then?g.then(void 0,v):g}(0,function(e){s.captureException(e,{pageLoadId:f,parsedOptions:s})}))}catch(e){return Promise.reject(e)}},G={action:"load",actor:"user",event_owner_team:"web_performance",event_source:"web",object_type:"website"},K=Object.freeze({cumulativeLayoutShift:"cumulative_layout_shift",decodedBodySize:"decoded_body_size_bytes",domContentLoadedEventEnd:"dom_content_loaded_event_end_ms",domContentLoadedEventStart:"dom_content_loaded_event_start_ms",domainLookup:"domain_lookup_ms",encodedBodySize:"encoded_body_size_bytes",firstContentfulPaint:"first_contentful_paint_ms",firstInputDelay:"first_input_delay_ms",largestContentfulPaint:"largest_contentful_paint_ms",loadEventEnd:"load_event_end_ms",loadEventStart:"load_event_start_ms",responseStart:"response_start_ms",tcpConnection:"tcp_connection_ms",tlsNegotiation:"tls_negotiation_ms"});exports.RUM_PREFIX="rum-",exports["default"]=function(){return console.warn("@sqs/rum-collector default export is deprecated. Use named export `init` instead."),Z.apply(void 0,[].slice.call(arguments))},exports.getCumulativeLayoutShift=L,exports.getDecodedBodySize=T,exports.getDomContentLoadedEventEnd=x,exports.getDomContentLoadedEventStart=C,exports.getDomainLookup=S,exports.getEncodedBodySize=M,exports.getFirstContentfulPaint=N,exports.getFirstInputDelay=k,exports.getLargestContentfulPaint=I,exports.getLoadEventEnd=O,exports.getLoadEventStart=D,exports.getPerformanceMetrics=j,exports.getResponseStart=R,exports.getTcpConnection=P,exports.getTlsNegotiation=B,exports.init=Z,exports.mark=function(e,t){void 0===t&&(t={});try{if(!W())return;var r="rum-"+e;if(window.performance.clearMarks(r),window.performance.mark(r,{detail:t.detail,startTime:t.startTime}),void 0!==t.tracer){var o=window.performance.getEntriesByName(r,n.Mark).slice(-1);z({spanName:e,tracer:t.tracer,startTime:o[0].startTime,spanAttributes:t.spanAttributes})}}catch(e){U(e)}},exports.measure=function(e,r){void 0===r&&(r={requireStart:!1});try{if(!(W()&&"performance"in window&&"getEntries"in window.performance&&"getEntriesByType"in window.performance&&"getEntriesByName"in window.performance))return;var o="rum-"+e,i={detail:r.detail,duration:r.duration};if(i.start=void 0===r.start?o:"string"==typeof r.start?"rum-"+r.start:r.start,i.end="string"==typeof r.end?"rum-"+r.end:r.end,r.requireStart&&("number"==typeof i.start||0===window.performance.getEntriesByName(i.start,n.Mark).length))return;if(void 0!==r.tracer){var a=t({measureName:o},r.spanAttributes);"number"==typeof i.start?(z({spanName:o,tracer:r.tracer,startTime:i.start}),F({spanName:o,spanAttributes:a})):(0===window.performance.getEntriesByName(i.start,n.Mark).length&&z({spanName:i.start,tracer:r.tracer,startTime:0}),F({spanName:i.start,spanAttributes:a}))}!function(e,t){try{window.performance.measure(e,t)}catch(o){var n="string"==typeof t.start?t.start:e,r="string"==typeof t.end?t.end:void 0;try{window.performance.measure(e,n,r)}catch(t){if(!(t instanceof DOMException))throw t;try{window.performance.measure(e,"navigationStart")}catch(t){if(!(t instanceof DOMException))throw t;window.performance.measure(e)}}}}(o,i);var c=function(e){var t=window.performance.getEntriesByName(e,n.Measure);return t[t.length-1]}(o);return c}catch(e){U(e)}},exports.trackEventsV2Factory=function(e,t){var n;return void 0===t&&(n=window.location.hostname.substr(window.location.hostname.indexOf(".")+1),t=/^stage.sqsp.net/g.test(n)||/^qa\d+.sqsp.net/g.test(n)?"staging":/(dev.squarespace.net|localhost|127.0.0.1|0.0.0.0)/g.test(n)?"dev":"prod"),new e({customSchemaName:"Performance",sourceEnvironment:t},G)},exports.trackLoadPerformance=function(e){try{var t={};return j(function(e){Object.entries(e).forEach(function(e){var n=e[0],r=e[1];Object.prototype.hasOwnProperty.call(K,n)&&(t[K[n]]=r)})}),Promise.resolve(Promise.race([h(6e4),y()])).then(function(){e(t)})}catch(e){return Promise.reject(e)}};
//# sourceMappingURL=rum-collector.js.map



/***/ }),

/***/ 875119:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.withScope = exports.isSentryConnected = exports.configureScope = exports.captureMessage = exports.captureException = exports.captureEvent = void 0;

/**
 * exports capture methods from the sentry/browser global constant which is defined in 'error-reporter/index.js'
 * https://www.npmjs.com/package/@sentry/react
 *
 * DISCLAIMER:
 * if the HTML page does not import {rollup-error-reporter}, SQUARESPACE_SENTRY will be undefined
 * and the 'capture' methods will log to the console, regardless of the environment
 * See 'src/main/webapp/templates-v6/config/config-cover-page.html' as an example of adding the rollup
 */
var captureMessage, captureException, captureEvent, configureScope, withScope;
exports.withScope = withScope;
exports.configureScope = configureScope;
exports.captureEvent = captureEvent;
exports.captureException = captureException;
exports.captureMessage = captureMessage;

var logToConsole = function logToConsole(message) {
  var _console;

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  (_console = console).log.apply(_console, ["[Sentry] ".concat(message)].concat(args));

  return 'some-error-identifier';
};

var isSentryConnected = false;
exports.isSentryConnected = isSentryConnected;

if (window.SQUARESPACE_SENTRY) {
  exports.isSentryConnected = isSentryConnected = true;
  exports.captureMessage = captureMessage = window.SQUARESPACE_SENTRY.captureMessage;
  exports.captureException = captureException = window.SQUARESPACE_SENTRY.captureException;
  exports.captureEvent = captureEvent = window.SQUARESPACE_SENTRY.captureEvent;
  exports.configureScope = configureScope = window.SQUARESPACE_SENTRY.configureScope;
  exports.withScope = withScope = window.SQUARESPACE_SENTRY.withScope;
} else {
  console.warn('SENTRY WAS __NOT__ INITIALIZED. Logs will be forwarded to console instead.');
  exports.captureMessage = captureMessage = logToConsole;
  exports.captureException = captureException = logToConsole;
  exports.captureEvent = captureEvent = logToConsole;

  exports.configureScope = configureScope = function configureScope() {};

  exports.withScope = withScope = function withScope() {};
}

/***/ }),

/***/ 714806:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCLS": function() { return /* binding */ s; },
/* harmony export */   "getFCP": function() { return /* binding */ l; },
/* harmony export */   "getFID": function() { return /* binding */ L; },
/* harmony export */   "getLCP": function() { return /* binding */ T; },
/* harmony export */   "getTTFB": function() { return /* binding */ b; }
/* harmony export */ });
var e,t,n,i,a=function(e,t){return{name:e,value:void 0===t?-1:t,delta:0,entries:[],id:"v1-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},r=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},o=function(e,t){var n=function n(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(e(i),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},c=function(e){addEventListener("pageshow",(function(t){t.persisted&&e(t)}),!0)},u="function"==typeof WeakSet?new WeakSet:new Set,f=function(e,t,n){var i;return function(){t.value>=0&&(n||u.has(t)||"hidden"===document.visibilityState)&&(t.delta=t.value-(i||0),(t.delta||void 0===i)&&(i=t.value,e(t)))}},s=function(e,t){var n,i=a("CLS",0),u=function(e){e.hadRecentInput||(i.value+=e.value,i.entries.push(e),n())},s=r("layout-shift",u);s&&(n=f(e,i,t),o((function(){s.takeRecords().map(u),n()})),c((function(){i=a("CLS",0),n=f(e,i,t)})))},m=-1,p=function(){return"hidden"===document.visibilityState?0:1/0},v=function(){o((function(e){var t=e.timeStamp;m=t}),!0)},d=function(){return m<0&&(m=p(),v(),c((function(){setTimeout((function(){m=p(),v()}),0)}))),{get timeStamp(){return m}}},l=function(e,t){var n,i=d(),o=a("FCP"),s=function(e){"first-contentful-paint"===e.name&&(p&&p.disconnect(),e.startTime<i.timeStamp&&(o.value=e.startTime,o.entries.push(e),u.add(o),n()))},m=performance.getEntriesByName("first-contentful-paint")[0],p=m?null:r("paint",s);(m||p)&&(n=f(e,o,t),m&&s(m),c((function(i){o=a("FCP"),n=f(e,o,t),requestAnimationFrame((function(){requestAnimationFrame((function(){o.value=performance.now()-i.timeStamp,u.add(o),n()}))}))})))},h={passive:!0,capture:!0},S=new Date,y=function(i,a){e||(e=a,t=i,n=new Date,w(removeEventListener),g())},g=function(){if(t>=0&&t<n-S){var a={entryType:"first-input",name:e.type,target:e.target,cancelable:e.cancelable,startTime:e.timeStamp,processingStart:e.timeStamp+t};i.forEach((function(e){e(a)})),i=[]}},E=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){y(e,t),a()},i=function(){a()},a=function(){removeEventListener("pointerup",n,h),removeEventListener("pointercancel",i,h)};addEventListener("pointerup",n,h),addEventListener("pointercancel",i,h)}(t,e):y(t,e)}},w=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,E,h)}))},L=function(n,s){var m,p=d(),v=a("FID"),l=function(e){e.startTime<p.timeStamp&&(v.value=e.processingStart-e.startTime,v.entries.push(e),u.add(v),m())},h=r("first-input",l);m=f(n,v,s),h&&o((function(){h.takeRecords().map(l),h.disconnect()}),!0),h&&c((function(){var r;v=a("FID"),m=f(n,v,s),i=[],t=-1,e=null,w(addEventListener),r=l,i.push(r),g()}))},T=function(e,t){var n,i=d(),s=a("LCP"),m=function(e){var t=e.startTime;t<i.timeStamp&&(s.value=t,s.entries.push(e)),n()},p=r("largest-contentful-paint",m);if(p){n=f(e,s,t);var v=function(){u.has(s)||(p.takeRecords().map(m),p.disconnect(),u.add(s),n())};["keydown","click"].forEach((function(e){addEventListener(e,v,{once:!0,capture:!0})})),o(v,!0),c((function(i){s=a("LCP"),n=f(e,s,t),requestAnimationFrame((function(){requestAnimationFrame((function(){s.value=performance.now()-i.timeStamp,u.add(s),n()}))}))}))}},b=function(e){var t,n=a("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(t[n]=Math.max(e[n]-e.navigationStart,0));return t}();if(n.value=n.delta=t.responseStart,n.value<0)return;n.entries=[t],e(n)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t)};


/***/ }),

/***/ 768918:
/***/ (function(module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

/* File generated by JavaScriptEnumProcessor */

/* Derived from Java class com.squarespace.v6.utils.enums.PageType */

/* Java class defined in repository squarespace-v6 */
var PageTypes;

(function (PageTypes) {
  PageTypes["MAIN_CONTENT"] = 1;
  PageTypes["CONTENT_COLLECTION"] = 1;
  PageTypes["PAGE"] = 2;
  PageTypes["SPLASH_PAGE"] = 3;
  PageTypes["CONTENT_ITEM"] = 50;
  PageTypes["NOT_FOUND"] = 100;
  PageTypes["ERROR"] = 101;
  PageTypes["SEARCH"] = 102;
  PageTypes["LOCK_SCREEN"] = 103;
  PageTypes["POPUP_OVERLAY"] = 104;
  PageTypes["PROTECTED_CONTENT"] = 105;
  PageTypes["MEMBER_AREA_ACCESS_DENIED"] = 106;
  PageTypes["SHOW_CART"] = 200;
  PageTypes["CHECKOUT"] = 201;
  PageTypes["ORDER_CONFIRMED"] = 202;
  PageTypes["DONATE"] = 203;
  PageTypes["CONTRIBUTION_CONFIRMED"] = 204;
  PageTypes["COMMERCE_CART_V2"] = 205;
  PageTypes["SUBSCRIPTION_CONFIRMED"] = 206;
  PageTypes["ORDER_RECEIVED"] = 207;
  PageTypes["MEMBERSHIP_CONFIRMED"] = 208;
  PageTypes["REVIEWS_REQUEST"] = 209;
  PageTypes["DIGITAL_PRODUCT_COMPOSER_PREVIEW"] = 210;
  PageTypes["NEWSLETTER_UNSUBSCRIBE"] = 300;
  PageTypes["COMMERCE_EMAIL_PREVIEW"] = 301;
})(PageTypes || (PageTypes = {}));

var _default = PageTypes;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 672325:
/***/ (function(module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

/* File generated by JavaScriptEnumProcessor */

/* Derived from Java class com.squarespace.v6.utils.enums.SiteStatus */

/* Java class defined in repository squarespace-v6 */
var StatusConstants;

(function (StatusConstants) {
  StatusConstants["EXPIRED"] = 1;
  StatusConstants["PASTDUE"] = 2;
  StatusConstants["TRIAL"] = 3;
  StatusConstants["BETA"] = 4;
  StatusConstants["REMOVED"] = 5;
  StatusConstants["INTERNAL"] = 6;
  StatusConstants["COMPED"] = 7;
  StatusConstants["PAID"] = 8;
  StatusConstants["V5_LINKED"] = 11;
  StatusConstants["ACTIVE_PARKING_PAGE"] = 12;
  StatusConstants["RESOLD"] = 13;
  StatusConstants["RESOLD_GRACE_PERIOD"] = 14;
  StatusConstants["ENTERPRISE"] = 15;
})(StatusConstants || (StatusConstants = {}));

var _default = StatusConstants;
exports["default"] = _default;
module.exports = exports.default;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";


var _interopRequireDefault = __webpack_require__(545563);

var _objectSpread2 = _interopRequireDefault(__webpack_require__(273701));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(931060));

var _rumCollector = __webpack_require__(412401);

var _StatusConstants = _interopRequireDefault(__webpack_require__(672325));

var _PageTypes = _interopRequireDefault(__webpack_require__(768918));

var _globalSentry = __webpack_require__(875119);

// This script will be included on ALL user sites and /config
// I believe this is always on a page with common, and so inherits the polyfills.
// but woe to keeping this insync.
var context = window.Static && window.Static.SQUARESPACE_CONTEXT;
var inFrame = window.top !== window; // Whitelist approach to register app name based on PageTypes enum values.

var PageTypeToAppNameMap = Object.freeze((0, _defineProperty2.default)({}, _PageTypes.default.COMMERCE_CART_V2, 'commerce-cart'));

function isInConfig() {
  var windowPathname = window.location && window.location.pathname || '';
  return !inFrame && /^\/config(\/.*)?$/.test(windowPathname);
}
/** All context values shared between /config and unauthenticated site visitors */


function getSharedContext() {
  return {
    inFrame: inFrame,
    templateId: context.templateId || '',
    impersonatedSession: !!context.impersonatedSession,
    pageType: typeof context.pageType === 'number' ? context.pageType : -1
  };
}
/** All context under the `SQUARESPACE_CONTEXT`.website key */


function getWebsiteContext() {
  var _context$website = context.website,
      website = _context$website === void 0 ? {} : _context$website;
  return {
    authenticUrl: website.authenticUrl || '',
    cloneable: !!website.cloneable,
    developerMode: !!website.developerMode,
    isHstsEnabled: !!website.isHstsEnabled,
    language: website.language || '',
    timeZone: website.timeZone || '',
    websiteId: website.id || '',
    websiteType: website.websiteType || -1
  };
}
/** All context under the `SQUARESPACE_CONTEXT.websiteSettings` key */


function getWebsiteSettingsContext() {
  var _context$websiteSetti = context.websiteSettings,
      websiteSettings = _context$websiteSetti === void 0 ? {} : _context$websiteSetti;
  return {
    ampEnabled: !!websiteSettings.ampEnabled
  };
}
/** All context under the `SQUARESPACE_CONTEXT.collection` key */


function getCollectionContext() {
  var _context$collection = context.collection,
      collection = _context$collection === void 0 ? {} : _context$collection;
  return {
    collectionType: collection.type || -1
  };
}
/**
 * Checks if a site was built on Squarespace 8
 *
 * 8 currently does not ship with a `templateVersion` value in the context when not in config mode.
 * This uses the `SECTION_CONTEXT` to ID 8 sites. It may be removable in the future.
 * 8 Jan 2020 @cellison
 */


function isUserSiteEight() {
  return window.Squarespace && 'SECTION_CONTEXT' in window.Squarespace;
}
/**
 * Gets the Squarespace version number of the site being viewed or edited
 *
 * @returns {string} the version number. returns `null` if version unknown
 */


function getVersionNumber() {
  if (context.hasOwnProperty('templateVersion')) {
    return context.templateVersion.replace('.', '_');
  } else if (isUserSiteEight()) {
    return '8';
  }

  return null;
}
/**
 * Gets the options for initializing the RUM collector
 *
 * @param {string} version the Squarespace version
 * @returns {undefined|Object} the config or `undefined` if Squarespace verison is unknown
 */


function getCollectorOptions(version) {
  var isConfig = isInConfig();
  var appNameForPageType = PageTypeToAppNameMap[context.pageType];
  var rumOptions = {
    appName: appNameForPageType || "v".concat(version, "-").concat(isConfig ? 'config' : 'user-sites'),
    context: (0, _objectSpread2.default)({}, getSharedContext(), getWebsiteContext(), getWebsiteSettingsContext(), getCollectionContext()),
    captureException: function captureException(error, extras) {
      (0, _globalSentry.withScope)(function (scope) {
        scope.setTag('project', 'rum-collector');

        if (extras !== undefined) {
          scope.setExtra('extras', extras);
        }

        (0, _globalSentry.captureException)(error);
      });
    }
  };

  if (isConfig) {
    var isInternal = context.website.siteStatus.value === _StatusConstants.default.INTERNAL;
    var _context$authenticate = context.authenticatedAccount,
        createdOn = _context$authenticate.createdOn,
        memberId = _context$authenticate.id;
    rumOptions.context.isInternal = isInternal;
    rumOptions.context.createdOn = createdOn;
    rumOptions.context.memberId = memberId;
  }

  return rumOptions;
}

function bootstrap() {
  if ( true && context) {
    var version = getVersionNumber();

    if (version === null) {
      return;
    }

    var rumOptions = getCollectorOptions(version);
    (0, _rumCollector.init)(rumOptions);
  }
}

bootstrap();
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyZm9ybWFuY2UtYWMwZmQ3ZDUzYjRlOTg4ODRmOTQtbWluLmVuLVVTLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsbUJBQW1CLHlCQUF5Qjs7Ozs7OztBQ2hCckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixtQkFBbUIseUJBQXlCOzs7Ozs7O0FDUHJFLHFCQUFxQixtQkFBTyxDQUFDLE1BQXFCOztBQUVsRDtBQUNBLGtCQUFrQixzQkFBc0I7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLG1CQUFtQix5QkFBeUI7Ozs7Ozs7QUN0QnJFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTSxtQkFBTyxDQUFDLE1BQVksRUFBRSxhQUFhLG9DQUFvQyxZQUFZLG1CQUFtQixLQUFLLG1CQUFtQixzRUFBc0UsU0FBUyx5QkFBeUIsb0JBQW9CLE9BQU8sY0FBYywyQ0FBMkMsbUNBQW1DLE1BQU0sU0FBUyxxQkFBcUIsa2RBQWtkLHdCQUF3Qiw2Q0FBNkMsRUFBRSw4QkFBOEIscUJBQXFCLHlEQUF5RCx3QkFBd0IsNEJBQTRCLHFCQUFxQixpR0FBaUcseUJBQXlCLFdBQVcscUJBQXFCLDJDQUEyQyx3QkFBd0Isa0ZBQWtGLEVBQUUsaVRBQWlULEtBQUssOEZBQThGLGFBQWEsd1FBQXdRLFNBQVMsR0FBRywrRUFBK0UsZ0JBQWdCLFNBQVMsMENBQTBDLHFEQUFxRCxxQ0FBcUMseUZBQXlGLEtBQUssc0VBQXNFLHNEQUFzRCw2Q0FBNkMsZ0JBQWdCLElBQUksYUFBYSxnRkFBZ0YsSUFBSSxnREFBZ0QsWUFBWSxFQUFFLFdBQVcs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b0MzRCxPQUFPLENBQUM0RCxvQkFBNUM7QUFBQSxRQUFRQyxTQUFSLHlCQUFRQSxTQUFSO0FBQUEsUUFBdUJDLFFBQXZCLHlCQUFtQmxDLEVBQW5CO0FBRUFtQixJQUFBQSxVQUFVLENBQUMvQyxPQUFYLENBQW1CdUQsVUFBbkIsR0FBZ0NBLFVBQWhDO0FBQ0FSLElBQUFBLFVBQVUsQ0FBQy9DLE9BQVgsQ0FBbUI2RCxTQUFuQixHQUErQkEsU0FBL0I7QUFDQWQsSUFBQUEsVUFBVSxDQUFDL0MsT0FBWCxDQUFtQjhELFFBQW5CLEdBQThCQSxRQUE5QjtBQUNEOztBQUNELFNBQU9mLFVBQVA7QUFDRDs7QUFFRCxTQUFTZ0IsU0FBVCxHQUFxQjtBQUNuQixNQUFJLFNBQVkvRCxPQUFoQixFQUF5QjtBQUN2QixRQUFNNEMsT0FBTyxHQUFHTCxnQkFBZ0IsRUFBaEM7O0FBQ0EsUUFBSUssT0FBTyxLQUFLLElBQWhCLEVBQXNCO0FBQ3BCO0FBQ0Q7O0FBQ0QsUUFBTUcsVUFBVSxHQUFHSixtQkFBbUIsQ0FBQ0MsT0FBRCxDQUF0QztBQUNBLDRCQUFhRyxVQUFiO0FBQ0Q7QUFDRjs7QUFFRGdCLFNBQVMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4dHJhY3QtY3NzLy4uLy4uLy4uLy4uL2NvbW1vbi90ZW1wL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL2V4dHJhY3QtY3NzLy4uLy4uLy4uLy4uL2NvbW1vbi90ZW1wL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9leHRyYWN0LWNzcy8uLi8uLi8uLi8uLi9jb21tb24vdGVtcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vZXh0cmFjdC1jc3MvLi4vLi4vLi4vLi4vY29tbW9uL3RlbXAvbm9kZV9tb2R1bGVzL0BzcXMvcnVtLWNvbGxlY3Rvci9kaXN0L3J1bS1jb2xsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZXh0cmFjdC1jc3MvLi9zcmMvc2hhcmVkL3V0aWxzL2Vycm9yLXJlcG9ydGVyL2dsb2JhbC1zZW50cnkudHMiLCJ3ZWJwYWNrOi8vZXh0cmFjdC1jc3MvLi4vLi4vLi4vLi4vY29tbW9uL3RlbXAvbm9kZV9tb2R1bGVzL3dlYi12aXRhbHMvZGlzdC93ZWItdml0YWxzLmpzIiwid2VicGFjazovL2V4dHJhY3QtY3NzLy4uL2Zyb250ZW5kL3BhY2thZ2VzL2VudW1zL1BhZ2VUeXBlcy5qcyIsIndlYnBhY2s6Ly9leHRyYWN0LWNzcy8uLi9mcm9udGVuZC9wYWNrYWdlcy9lbnVtcy9TdGF0dXNDb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vZXh0cmFjdC1jc3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXh0cmFjdC1jc3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4dHJhY3QtY3NzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXh0cmFjdC1jc3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leHRyYWN0LWNzcy8uL3NyYy9hcHBzL1BlcmZvcm1hbmNlL2Jvb3RzdHJhcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi9kZWZpbmVQcm9wZXJ0eS5qc1wiKTtcblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBPYmplY3QoYXJndW1lbnRzW2ldKSA6IHt9O1xuICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcblxuICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFNwcmVhZDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCIvKiohIFxuICogQHNxcy9ydW0tY29sbGVjdG9yIHY0LjMuMCBcbiAqIEdhdGhlciBhbmQgZGVsaXZlciByZWFsLXVzZXIgcGVyZm9ybWFuY2UgbWV0cmljcyBpbiBTcXVhcmVzcGFjZSBwcm9kdWN0cy4gXG4gKiBcbiAqIENvcHlyaWdodCAoYykgMjAyMiBTcXVhcmVzcGFjZSwgSW5jLiBcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zcXNwL3J1bS1jb2xsZWN0b3IuZ2l0IFxuICogTGljZW5zZWQgdW5kZXIgdGhlIFVOTElDRU5TRUQgbGljZW5zZSBcbiAqL1xuXG52YXIgZT1yZXF1aXJlKFwid2ViLXZpdGFsc1wiKTtmdW5jdGlvbiB0KCl7cmV0dXJuIHQ9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49YXJndW1lbnRzW3RdO2Zvcih2YXIgciBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLHIpJiYoZVtyXT1uW3JdKX1yZXR1cm4gZX0sdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9dmFyIG4scj1mdW5jdGlvbihlKXtyZXR1cm57YXBwOlwiYVwiLGRhdGE6e19fZW5jb2RpbmdfY29uZmlnX186ZSxfX2VuY29kaW5nX2tleV9fOlwiZFwifSxldmVudDpcImVcIixwYWdlTG9hZElkOlwicGxcIix0czpcInRcIn19LG89dCh7Y29udGV4dDp7X19lbmNvZGluZ19jb25maWdfXzp7YWNjb3VudElkOlwiYWNjb3VudElkXCIsYW1wRW5hYmxlZDpcImFtcEVuYWJsZWRcIixhdXRoZW50aWNVcmw6XCJhdXRoZW50aWNVcmxcIixjbG9uZWFibGU6XCJjbG9uZWFibGVcIixjb2xsZWN0aW9uVHlwZTpcImNvbGxlY3Rpb25UeXBlXCIsY3JlYXRlZE9uOlwiY3JlYXRlZE9uXCIsZGV2ZWxvcGVyTW9kZTpcImRldmVsb3Blck1vZGVcIixpbXBlcnNvbmF0ZWRTZXNzaW9uOlwiaW1wZXJzb25hdGVkU2Vzc2lvblwiLGluRnJhbWU6XCJpbkZyYW1lXCIsaXNIc3RzRW5hYmxlZDpcImlzSHN0c0VuYWJsZWRcIixpc0ludGVybmFsOlwiaXNJbnRlcm5hbFwiLGxhbmd1YWdlOlwibGFuZ3VhZ2VcIixtZW1iZXJJZDpcIm1lbWJlcklkXCIscGFnZVR5cGU6XCJwYWdlVHlwZVwiLHBsYXRmb3JtOlwicGxhdGZvcm1cIix0ZW1wbGF0ZUlkOlwidGVtcGxhdGVJZFwiLHRpbWVab25lOlwidGltZVpvbmVcIix3ZWJzaXRlSWQ6XCJ3ZWJzaXRlSWRcIix3ZWJzaXRlVHlwZTpcIndlYnNpdGVUeXBlXCJ9LF9fZW5jb2Rpbmdfa2V5X186XCJjdHhcIn0sc3VwcG9ydExldmVsOlwic2xcIix2aXNpYmlsaXR5U3RhdGVPbkRDTDpcInZzXCJ9LHthbmFseXRpY3NJZDpcImFpZFwiLGNvbm5lY3Rpb246e19fZW5jb2RpbmdfY29uZmlnX186e2Rvd25saW5rOlwiZG9cIixlZmZlY3RpdmVUeXBlOlwiZWZcIixydHQ6XCJydHRcIixzYXZlRGF0YTpcInNkXCJ9LF9fZW5jb2Rpbmdfa2V5X186XCJjb25cIn0sZGVsaXZlcnlUeXBlOlwiZHRcIixkaXNwbGF5OntfX2VuY29kaW5nX2NvbmZpZ19fOntkZXZpY2VQaXhlbFJhdGlvOlwiZHByXCIsc2NyZWVuSGVpZ2h0Olwic2hcIixzY3JlZW5XaWR0aDpcInN3XCIsdmlld3BvcnRIZWlnaHQ6XCJ2aFwiLHZpZXdwb3J0V2lkdGg6XCJ2d1wifSxfX2VuY29kaW5nX2tleV9fOlwiZGlzcFwifSxoYXJkd2FyZTp7X19lbmNvZGluZ19jb25maWdfXzp7ZGV2aWNlTWVtb3J5OlwiZG1cIixoYXJkd2FyZUNvbmN1cnJlbmN5OlwiaGNcIn0sX19lbmNvZGluZ19rZXlfXzpcImhkd1wifSxoYXNoOlwiaFwiLGhvc3RuYW1lOlwiaG5cIixtYXJrZXRpbmdJZDpcIm1pZFwiLG1lbWJlcklkOlwibWVtXCIscGF0aG5hbWU6XCJwXCIsdmVyc2lvbjpcInZcIn0se2N1bXVsYXRpdmVMYXlvdXRTaGlmdDpcImNsXCIsZGVjb2RlZEJvZHlTaXplOlwiZGJcIixkb21haW5Mb29rdXA6XCJkbWxcIixkb21Db250ZW50TG9hZGVkRXZlbnRFbmQ6XCJkZVwiLGRvbUNvbnRlbnRMb2FkZWRFdmVudFN0YXJ0OlwiZHNcIixlbmNvZGVkQm9keVNpemU6XCJlYlwiLGZpcnN0Q29udGVudGZ1bFBhaW50OlwiZmNwXCIsZmlyc3RJbnB1dERlbGF5OlwiZmlkXCIsbGFyZ2VzdENvbnRlbnRmdWxQYWludDpcImxjcFwiLGxvYWRFdmVudEVuZDpcImxlXCIsbG9hZEV2ZW50U3RhcnQ6XCJsXCIsdGNwQ29ubmVjdGlvbjpcInRjcFwiLHRsc0Nvbm5lY3Rpb246XCJ0bHNcIn0pLGk9e2R1cmF0aW9uOlwiZFwiLGVuZE1hcmtEZXRhaWw6XCJlXCIsbWVhc3VyZURldGFpbDpcIm1cIixuYW1lOlwiblwiLHN0YXJ0TWFya0RldGFpbDpcInNcIixzdGFydFRpbWU6XCJzdFwifTshZnVuY3Rpb24oZSl7ZS5FbGVtZW50PVwiZWxlbWVudFwiLGUuRXZlbnQ9XCJldmVudFwiLGUuRmlyc3RJbnB1dD1cImZpcnN0LWlucHV0XCIsZS5Mb25nVGFzaz1cImxvbmd0YXNrXCIsZS5MYXJnZXN0Q29udGVudGZ1bFBhaW50PVwibGFyZ2VzdC1jb250ZW50ZnVsLXBhaW50XCIsZS5MYXlvdXRTaGlmdD1cImxheW91dC1zaGlmdFwiLGUuTWFyaz1cIm1hcmtcIixlLk1lYXN1cmU9XCJtZWFzdXJlXCIsZS5OYXZpZ2F0aW9uPVwibmF2aWdhdGlvblwiLGUuUGFpbnQ9XCJwYWludFwiLGUuUmVzb3VyY2U9XCJyZXNvdXJjZVwifShufHwobj17fSkpO3ZhciBhLGM9LyhpUGhvbmV8aVBvZHxpUGFkKSBPUyAoKDFbMC0yXSl8WzItOV0pX1xcZCsuKkFwcGxlV2ViS2l0KD8hLipTYWZhcmkpL2k7ZnVuY3Rpb24gcyhlLHQpe3ZhciBuPXt9O3JldHVybiBPYmplY3Qua2V5cyh0KS5mb3JFYWNoKGZ1bmN0aW9uKHIpe3ZhciBvLGksYSxjPXRbcl0sZD1lW3JdfHxlLHU9dHlwZW9mIGQsZj1cInN0cmluZ1wiPT09dTtpZihmfHxcIm9iamVjdFwiPT09dXx8XCJ1bmRlZmluZWRcIj09PWQpe2lmKGYpbz1kLGk9XCJib29sZWFuXCI9PXR5cGVvZihhPWMpP2E/MTowOlwibnVtYmVyXCI9PXR5cGVvZiBhJiZpc0Zpbml0ZShhKT9hLnRvU3RyaW5nKDM2KTphO2Vsc2V7dmFyIGw9ZC5fX2VuY29kaW5nX3NraXBfXyxwPWQuX19lbmNvZGluZ19jb25maWdfXyxtPWQuX19lbmNvZGluZ19mbl9fO2lmKCFsJiYhcCYmIWUpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBlbmNvZGluZyBtYXBcIik7bz1sP3I6ZC5fX2VuY29kaW5nX2tleV9fLGk9cD9zKHAsYyk6bT9tKGMpOmN9byYmKG5bXCJcIitvXT1pKX19KSxufWZ1bmN0aW9uIGQoKXtpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHdpbmRvdyxcIlBlcmZvcm1hbmNlT2JzZXJ2ZXJcIikpcmV0dXJuITE7dHJ5e3ZhciBlPW5ldyB3aW5kb3cuUGVyZm9ybWFuY2VPYnNlcnZlcihmdW5jdGlvbigpe3JldHVybiBudWxsfSk7ZS5vYnNlcnZlKHtlbnRyeVR5cGVzOltuLk1hcmtdfSksZS5kaXNjb25uZWN0KCl9Y2F0Y2goZSl7cmV0dXJuITF9cmV0dXJuITB9ZnVuY3Rpb24gdSgpe3ZhciBlO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mKG51bGw9PShlPXdpbmRvdy5uYXZpZ2F0b3IpP3ZvaWQgMDplLnNlbmRCZWFjb24pJiYhYy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KX12YXIgZj1bXTtmdW5jdGlvbiBsKCl7Zi5sZW5ndGgmJihmdW5jdGlvbihlLHQpe2lmKCF1KCl8fCFuYXZpZ2F0b3Iuc2VuZEJlYWNvbihlLHQpKXt2YXIgbj1uZXcgWE1MSHR0cFJlcXVlc3Q7bi5vcGVuKFwiUE9TVFwiLGUsITApLG4uc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLFwidGV4dC9wbGFpbjtjaGFyc2V0PVVURi04XCIpLG4uc2VuZCh0KX19KFwiL2FwaS8xL3BlcmZvcm1hbmNlL3JlY29yZHNcIixKU09OLnN0cmluZ2lmeShmKSksZj1bXSl9ZnVuY3Rpb24gcChlLG4pe3ZhciByO2lmKCEocj1uP3MobixlKTp0KHtyYXc6ITB9LGUpKSl0aHJvdyBuZXcgRXJyb3IoXCJEYXRhIGlzIGVtcHR5XCIpO2YucHVzaChyKX12YXIgbSx2LGc9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKCl7ZSYmZS5hcHBseSh2b2lkIDAsW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKX19LHc9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzO3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihuLHIpe3RyeXtlLmFwcGx5KHZvaWQgMCxbZnVuY3Rpb24oZSl7bihlKX1dLmNvbmNhdChbXS5zbGljZS5jYWxsKHQpKSl9Y2F0Y2goZSl7cihlKX19KX19LGg9ZnVuY3Rpb24oZSl7cmV0dXJuIHcoc2V0VGltZW91dCkoZSl9LHk9ZnVuY3Rpb24oKXtyZXR1cm4gdyhmdW5jdGlvbihlKXt2YXIgdD1mdW5jdGlvbiB0KG4pe1wicGFnZWhpZGVcIiE9PW4udHlwZSYmXCJoaWRkZW5cIiE9PWRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZXx8KGUobikscmVtb3ZlRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIix0LCEwKSxyZW1vdmVFdmVudExpc3RlbmVyKFwicGFnZWhpZGVcIix0LCEwKSl9O3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLHQsITApLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicGFnZWhpZGVcIix0LCEwKX0pKCl9LF89ZnVuY3Rpb24oZSl7XCJjb21wbGV0ZVwiPT09ZG9jdW1lbnQucmVhZHlTdGF0ZT93aW5kb3cuc2V0VGltZW91dChlLDApOndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicGFnZXNob3dcIixlLHtvbmNlOiEwfSl9LEU9ZnVuY3Rpb24oZSl7dHJ5e3JldHVybiBQcm9taXNlLnJlc29sdmUodyhfKSkudGhlbihmdW5jdGlvbigpe3ZhciB0PXdpbmRvdy5wZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlUeXBlKG4uTmF2aWdhdGlvbilbMF0scj1udWxsIT10P3Q6ZnVuY3Rpb24oKXt2YXIgZT17ZW50cnlUeXBlOm4uTmF2aWdhdGlvbixzdGFydFRpbWU6MH0sdD1wZXJmb3JtYW5jZS50aW1pbmc7Zm9yKHZhciByIGluIHQpaWYoXCJuYXZpZ2F0aW9uU3RhcnRcIiE9PXImJlwidG9KU09OXCIhPT1yKXt2YXIgbz1NYXRoLm1heCh0W3JdLXQubmF2aWdhdGlvblN0YXJ0LDApO2Vbcl09b31yZXR1cm4gZX0oKSxvPXJbZV07aWYoIShcIm51bWJlclwiIT10eXBlb2Ygb3x8bzwwKSlyZXR1cm4gTWF0aC5yb3VuZChvKX0pfWNhdGNoKGUpe3JldHVybiBQcm9taXNlLnJlamVjdChlKX19LGI9ZnVuY3Rpb24oZSx0KXtpZihcIm51bWJlclwiPT10eXBlb2YgZSYmXCJudW1iZXJcIj09dHlwZW9mIHQmJmU+PXQpcmV0dXJuIGUtdH0sUz1mdW5jdGlvbihlKXtyZXR1cm4gUHJvbWlzZS5hbGwoW0UoXCJkb21haW5Mb29rdXBFbmRcIiksRShcImRvbWFpbkxvb2t1cFN0YXJ0XCIpXSkudGhlbihmdW5jdGlvbih0KXtlKHtkb21haW5Mb29rdXA6Yih0WzBdLHRbMV0pfSl9KX0sUD1mdW5jdGlvbihlKXtyZXR1cm4gUHJvbWlzZS5hbGwoW0UoXCJjb25uZWN0RW5kXCIpLEUoXCJjb25uZWN0U3RhcnRcIildKS50aGVuKGZ1bmN0aW9uKHQpe2Uoe3RjcENvbm5lY3Rpb246Yih0WzBdLHRbMV0pfSl9KX0sTD1mdW5jdGlvbih0KXtlLmdldENMUyhmdW5jdGlvbihlKXt2YXIgbjt0KHtjdW11bGF0aXZlTGF5b3V0U2hpZnQ6bnVsbCE9KG49bnVsbD09ZT92b2lkIDA6ZS52YWx1ZSk/bjp2b2lkIDB9KX0pfSxUPWZ1bmN0aW9uKGUpe3JldHVybiBFKFwiZGVjb2RlZEJvZHlTaXplXCIpLnRoZW4oZnVuY3Rpb24odCl7ZSh7ZGVjb2RlZEJvZHlTaXplOnR9KX0pfSx4PWZ1bmN0aW9uKGUpe3JldHVybiBFKFwiZG9tQ29udGVudExvYWRlZEV2ZW50RW5kXCIpLnRoZW4oZnVuY3Rpb24odCl7ZSh7ZG9tQ29udGVudExvYWRlZEV2ZW50RW5kOnR9KX0pfSxDPWZ1bmN0aW9uKGUpe3JldHVybiBFKFwiZG9tQ29udGVudExvYWRlZEV2ZW50U3RhcnRcIikudGhlbihmdW5jdGlvbih0KXtlKHtkb21Db250ZW50TG9hZGVkRXZlbnRTdGFydDp0fSl9KX0sTT1mdW5jdGlvbihlKXtyZXR1cm4gRShcImVuY29kZWRCb2R5U2l6ZVwiKS50aGVuKGZ1bmN0aW9uKHQpe2Uoe2VuY29kZWRCb2R5U2l6ZTp0fSl9KX0sTj1mdW5jdGlvbih0KXtlLmdldEZDUChmdW5jdGlvbihlKXt0KHtmaXJzdENvbnRlbnRmdWxQYWludDplP01hdGgucm91bmQoZS52YWx1ZSk6dm9pZCAwfSl9KX0saz1mdW5jdGlvbih0KXtlLmdldEZJRChmdW5jdGlvbihlKXt0KHtmaXJzdElucHV0RGVsYXk6ZT9NYXRoLnJvdW5kKGUudmFsdWUpOnZvaWQgMH0pfSl9LEk9ZnVuY3Rpb24odCl7ZS5nZXRMQ1AoZnVuY3Rpb24oZSl7dCh7bGFyZ2VzdENvbnRlbnRmdWxQYWludDplP01hdGgucm91bmQoZS52YWx1ZSk6dm9pZCAwfSl9KX0sTz1mdW5jdGlvbihlKXtyZXR1cm4gRShcImxvYWRFdmVudEVuZFwiKS50aGVuKGZ1bmN0aW9uKHQpe2Uoe2xvYWRFdmVudEVuZDp0fSl9KX0sRD1mdW5jdGlvbihlKXtyZXR1cm4gRShcImxvYWRFdmVudFN0YXJ0XCIpLnRoZW4oZnVuY3Rpb24odCl7ZSh7bG9hZEV2ZW50U3RhcnQ6dH0pfSl9LFI9ZnVuY3Rpb24oZSl7cmV0dXJuIEUoXCJyZXNwb25zZVN0YXJ0XCIpLnRoZW4oZnVuY3Rpb24odCl7ZSh7cmVzcG9uc2VTdGFydDp0fSl9KX0sQj1mdW5jdGlvbihlKXtyZXR1cm4gUHJvbWlzZS5hbGwoW0UoXCJjb25uZWN0RW5kXCIpLEUoXCJzZWN1cmVDb25uZWN0aW9uU3RhcnRcIildKS50aGVuKGZ1bmN0aW9uKHQpe2Uoe3Rsc05lZ290aWF0aW9uOmIodFswXSx0WzFdKX0pfSl9LEE9e19fcHJvdG9fXzpudWxsLGdldERvbWFpbkxvb2t1cDpTLGdldFRjcENvbm5lY3Rpb246UCxnZXRDdW11bGF0aXZlTGF5b3V0U2hpZnQ6TCxnZXREZWNvZGVkQm9keVNpemU6VCxnZXREb21Db250ZW50TG9hZGVkRXZlbnRFbmQ6eCxnZXREb21Db250ZW50TG9hZGVkRXZlbnRTdGFydDpDLGdldEVuY29kZWRCb2R5U2l6ZTpNLGdldEZpcnN0Q29udGVudGZ1bFBhaW50Ok4sZ2V0Rmlyc3RJbnB1dERlbGF5OmssZ2V0TGFyZ2VzdENvbnRlbnRmdWxQYWludDpJLGdldExvYWRFdmVudEVuZDpPLGdldExvYWRFdmVudFN0YXJ0OkQsZ2V0UmVzcG9uc2VTdGFydDpSLGdldFRsc05lZ290aWF0aW9uOkJ9O2Z1bmN0aW9uIGooZSl7T2JqZWN0LnZhbHVlcyhBKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3RyeXt2YXIgbj1mdW5jdGlvbihuLHIpe3RyeXt2YXIgbz1Qcm9taXNlLnJlc29sdmUodChlKSkudGhlbihmdW5jdGlvbigpe30pfWNhdGNoKGUpe3JldHVybiByKGUpfXJldHVybiBvJiZvLnRoZW4/by50aGVuKHZvaWQgMCxyKTpvfSgwLGZ1bmN0aW9uKGUpe3ZhciB0LG47bnVsbD09KHQ9d2luZG93KXx8bnVsbD09KG49dC5TUVVBUkVTUEFDRV9TRU5UUlkpfHxudWxsPT1uLmNhcHR1cmVFeGNlcHRpb258fG4uY2FwdHVyZUV4Y2VwdGlvbihlKX0pO3JldHVybiBQcm9taXNlLnJlc29sdmUobiYmbi50aGVuP24udGhlbihmdW5jdGlvbigpe30pOnZvaWQgMCl9Y2F0Y2goZSl7cmV0dXJuIFByb21pc2UucmVqZWN0KGUpfX0pfWZ1bmN0aW9uIHEoZSl7dmFyIHQ9bmV3IFJlZ0V4cChcIihefCApXCIrZStcIj0oW147XSspXCIpLG49ZG9jdW1lbnQuY29va2llLm1hdGNoKHQpO3JldHVybiBuP25bMl06XCJcIn1mdW5jdGlvbiBIKGUpe3ZhciB0PXt9O2Zvcih2YXIgbiBpbiBlKVwiZnVuY3Rpb25cIiE9dHlwZW9mIGVbbl0mJih0W25dPWVbbl0pO3JldHVybiB0fSFmdW5jdGlvbihlKXtlLkJlYWNvbj1cImJlYWNvblwiLGUuWEhSPVwieGhyXCJ9KG18fChtPXt9KSk7dmFyIHo9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5zcGFuTmFtZSxuPWUudHJhY2VyLHI9ZS5zdGFydFRpbWUsbz1lLnNwYW5BdHRyaWJ1dGVzLGk9dm9pZCAwPT09bz97fTpvO3ZvaWQgMD09PXYmJih2PW5ldyBNYXApO3ZhciBhPW4uc3RhcnRTcGFuKHQse3N0YXJ0VGltZTpyfSk7YS5zZXRBdHRyaWJ1dGVzKGkpLHYuc2V0KHQsYSl9LEY9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5zcGFuTmFtZSxuPWUuc3BhbkF0dHJpYnV0ZXMscj12b2lkIDA9PT1uP3t9Om47aWYodm9pZCAwIT09diYmdi5oYXModCkpe3ZhciBvPXYuZ2V0KHQpO28uc2V0QXR0cmlidXRlcyhyKSxvLmVuZCgpLHYuZGVsZXRlKHQpfX0sVT1mdW5jdGlvbihlKXt2YXIgdCxuO1wiZnVuY3Rpb25cIj09dHlwZW9mKG51bGw9PSh0PXdpbmRvdyl8fG51bGw9PShuPXQuU1FVQVJFU1BBQ0VfU0VOVFJZKT92b2lkIDA6bi5jYXB0dXJlRXhjZXB0aW9uKT93aW5kb3cuU1FVQVJFU1BBQ0VfU0VOVFJZLmNhcHR1cmVFeGNlcHRpb24oZSk6Y29uc29sZS53YXJuKFwiQHNxcy9ydW0tY29sbGVjdG9yOiB1c2VyIHRpbWluZyBleGNlcHRpb246IFwiK2UpfTtmdW5jdGlvbiBXKCl7cmV0dXJuIG4uTWFyayBpbiB3aW5kb3cucGVyZm9ybWFuY2UmJm4uTWVhc3VyZSBpbiB3aW5kb3cucGVyZm9ybWFuY2V9dmFyIFgsSj1uZXcgU2V0LFE9W1wic2VydmVyVGltaW5nXCIsXCJ3b3JrZXJUaW1pbmdcIl0sWT1bXCJtZWRpYS13d3cuc3FzcGNkbi5jb21cIixcImltYWdlcy5zcXVhcmVzcGFjZS1jZG4uY29tXCIsXCJzdGF0aWMxLnNxdWFyZXNwYWNlLmNvbVwiXSxaPWZ1bmN0aW9uKGMpe3RyeXt2YXIgcz1mdW5jdGlvbihlKXtyZXR1cm57YXBwTmFtZTplLmFwcE5hbWV8fFwiXCIsY29udGV4dDplLmNvbnRleHR8fHt9LGVuYWJsZWQ6XCJib29sZWFuXCIhPXR5cGVvZiBlLmVuYWJsZWR8fGUuZW5hYmxlZCxjYXB0dXJlRXhjZXB0aW9uOmcoZS5jYXB0dXJlRXhjZXB0aW9uKX19KGMpO2lmKCFzLmVuYWJsZWQpcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO3ZhciBmPVwiXCI7cmV0dXJuIFByb21pc2UucmVzb2x2ZShmdW5jdGlvbihjLHYpe3RyeXt2YXIgZz1Qcm9taXNlLnJlc29sdmUobmV3IFByb21pc2UoZnVuY3Rpb24oZSx0KXt2YXIgbj1uZXcgWE1MSHR0cFJlcXVlc3Q7bi5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtpZihuLnJlYWR5U3RhdGU9PT1YTUxIdHRwUmVxdWVzdC5ET05FKWlmKDIwMD09PW4uc3RhdHVzKXRyeXtlKEpTT04ucGFyc2Uobi5yZXNwb25zZSkpfWNhdGNoKGUpe3QoZSl9ZWxzZSAwIT09bi5zdGF0dXMmJnQobmV3IEVycm9yKFwiWEhSIHJlcXVlc3QgRE9ORSB3aXRoIHVuZXhwZWN0ZWQgc3RhdHVzOiBcIituLnN0YXR1cykpfSxuLm9udGltZW91dD1mdW5jdGlvbigpe3QobmV3IEVycm9yKFwiTWV0cmljIHNldHRpbmdzIHJlcXVlc3QgdGltZW91dFwiKSl9LG4ub3BlbihcIkdFVFwiLFwiL2FwaS8xL3BlcmZvcm1hbmNlL3NldHRpbmdzXCIsITApLG4udGltZW91dD0zZTQsbi5zZW5kKCl9KSkudGhlbihmdW5jdGlvbihjKXtpZighKGY9Yy5wYWdlTG9hZElkKSl0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gcmVzb2x2ZSBwYWdlTG9hZElkXCIpO3ZhciB2PWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKG4scixvKXtwKHthcHA6ZSxkYXRhOm4sZXZlbnQ6cixwYWdlTG9hZElkOnQsdHM6RGF0ZS5ub3coKX0sbyl9fShzLmFwcE5hbWUsZik7IWZ1bmN0aW9uKGUsbil7UHJvbWlzZS5yZXNvbHZlKGZ1bmN0aW9uKGUpe3RyeXt2YXIgbj1mdW5jdGlvbihlKXt2YXIgdCxuLHIsbyxpLGEsYztyZXR1cm4gdm9pZCAwPT09ZSYmKGU9e30pLHtjb250ZXh0OmUsYW5hbHl0aWNzSWQ6cShcIlNTX0FOQUxZVElDU19JRFwiKSxtYXJrZXRpbmdJZDpxKFwiU1NfTUlEXCIpLG1lbWJlcklkOm51bGw9PSh0PXdpbmRvdy5TdGF0aWMpfHxudWxsPT0obj10LlNRVUFSRVNQQUNFX0NPTlRFWFQpfHxudWxsPT0ocj1uLmF1dGhlbnRpY2F0ZWRBY2NvdW50KT92b2lkIDA6ci5pZCx2ZXJzaW9uOlwiNC4zLjBcIixjb25uZWN0aW9uOntkb3dubGluazpudWxsPT0obz1uYXZpZ2F0b3IuY29ubmVjdGlvbik/dm9pZCAwOm8uZG93bmxpbmssZWZmZWN0aXZlVHlwZTpudWxsPT0oaT1uYXZpZ2F0b3IuY29ubmVjdGlvbik/dm9pZCAwOmkuZWZmZWN0aXZlVHlwZSxydHQ6bnVsbD09KGE9bmF2aWdhdG9yLmNvbm5lY3Rpb24pP3ZvaWQgMDphLnJ0dCxzYXZlRGF0YTpudWxsPT0oYz1uYXZpZ2F0b3IuY29ubmVjdGlvbik/dm9pZCAwOmMuc2F2ZURhdGF9LGRlbGl2ZXJ5VHlwZTp1KCk/bS5CZWFjb246bS5YSFIsZGlzcGxheTp7ZGV2aWNlUGl4ZWxSYXRpbzp3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyxzY3JlZW5IZWlnaHQ6d2luZG93LnNjcmVlbi5oZWlnaHQsc2NyZWVuV2lkdGg6d2luZG93LnNjcmVlbi53aWR0aCx2aWV3cG9ydEhlaWdodDp3aW5kb3cuaW5uZXJIZWlnaHQsdmlld3BvcnRXaWR0aDp3aW5kb3cuaW5uZXJXaWR0aH0saGFyZHdhcmU6e2RldmljZU1lbW9yeTpuYXZpZ2F0b3IuZGV2aWNlTWVtb3J5LGhhcmR3YXJlQ29uY3VycmVuY3k6bmF2aWdhdG9yLmhhcmR3YXJlQ29uY3VycmVuY3l9LGhhc2g6d2luZG93LmxvY2F0aW9uLmhhc2h8fFwiXCIsaG9zdG5hbWU6d2luZG93LmxvY2F0aW9uLmhvc3RuYW1lfHxcIlwiLHBhdGhuYW1lOndpbmRvdy5sb2NhdGlvbi5wYXRobmFtZXx8XCIvXCJ9fShlKSxyPXt9O3JldHVybiBqKGZ1bmN0aW9uKGUpe09iamVjdC5hc3NpZ24ocixlKX0pLFByb21pc2UucmVzb2x2ZShQcm9taXNlLnJhY2UoW2goNmU0KSx5KCldKSkudGhlbihmdW5jdGlvbigpe3JldHVybiB0KHt9LG4scil9KX1jYXRjaChlKXtyZXR1cm4gUHJvbWlzZS5yZWplY3QoZSl9fShuKSkudGhlbihmdW5jdGlvbih0KXtlKHQsXCJwYWdlX3NwZWVkXCIscihvKSl9KX0odixzLmNvbnRleHQpLGZ1bmN0aW9uKGUpe2lmKHdpbmRvdy5QZXJmb3JtYW5jZU1lYXN1cmUmJndpbmRvdy5QZXJmb3JtYW5jZU1hcmspe3ZhciB0PWZ1bmN0aW9uKHQpe3QubWFwKEgpLmZvckVhY2goZnVuY3Rpb24odCl7aWYoXCJzdHJpbmdcIj09dHlwZW9mKG49dC5uYW1lKSYmXCJydW0tXCI9PT1uLnN1YnN0cmluZygwLDQpKXt2YXIgbixvPXQubmFtZStcInxcIit0LmR1cmF0aW9uO0ouaGFzKG8pfHwoZSh0LFwidXNlclwiLHIoaSkpLEouYWRkKG8pKX19KX07dCh3aW5kb3cucGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5VHlwZShuLk1lYXN1cmUpKSxkKCk/bmV3IHdpbmRvdy5QZXJmb3JtYW5jZU9ic2VydmVyKGZ1bmN0aW9uKGUpe3JldHVybiB0KGUuZ2V0RW50cmllcygpKX0pLm9ic2VydmUoe2VudHJ5VHlwZXM6W24uTWVhc3VyZV19KTpkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLGZ1bmN0aW9uKCl7XCJoaWRkZW5cIj09PWRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSYmdCh3aW5kb3cucGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5VHlwZShuLk1lYXN1cmUpKX0pfX0odiksZnVuY3Rpb24ocil7dHJ5e2lmKCFkKCkpcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1h8fGUuZ2V0TENQKGZ1bmN0aW9uKGUpe1g9bnVsbD09ZT92b2lkIDA6ZS52YWx1ZX0pO3ZhciBvPW5ldyBNYXA7ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImltZ1tkYXRhLXNyY11cIikuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD1lLmdldEF0dHJpYnV0ZShcImRhdGEtc3JjXCIpO2UgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50JiZ0JiZvLnNldCh0LGUpfSk7dmFyIGk9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciBuLHI9ZS5yZXNvdXJjZSxvPWUuZGVsaXZlck1ldHJpY3MsaT1lLmRvbUltYWdlczt0cnl7aWYoIShyIGluc3RhbmNlb2YgUGVyZm9ybWFuY2VSZXNvdXJjZVRpbWluZyYmKG49ci5uYW1lLFkuc29tZShmdW5jdGlvbihlKXtyZXR1cm4gbi5pbmNsdWRlcyhlKX0pKSkpcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO3ZhciBhPXIubmFtZS5yZXBsYWNlKC9cXD9mb3JtYXQ9LiovLFwiXCIpLGM9aS5nZXQoYSk7cmV0dXJuIHZvaWQgMD09PWM/UHJvbWlzZS5yZXNvbHZlKCk6UHJvbWlzZS5yZXNvbHZlKGZ1bmN0aW9uKGUsbil7dHJ5e2Zvcih2YXIgcj1mdW5jdGlvbihlKXt2YXIgdCxuPU51bWJlcihudWxsPT0odD1lLmdldEF0dHJpYnV0ZShcImRhdGEtaW1hZ2UtcmVzb2x1dGlvblwiKSk/dm9pZCAwOnQucmVwbGFjZShcIndcIixcIlwiKSk7aWYoIU51bWJlci5pc05hTihuKSlyZXR1cm4gbjt2YXIgcj1lLnNyYy5pbmRleE9mKFwiZm9ybWF0PVwiKTtpZigtMT09PXIpcmV0dXJuIE5hTjt2YXIgbz1lLnNyYy5zbGljZShyKzcpLnJlcGxhY2UoL3cuKi8sXCJcIik7cmV0dXJuIE51bWJlcihvKX0obiksbz1uLm5hdHVyYWxXaWR0aCxpPW4ubmF0dXJhbEhlaWdodCxhPW4ud2lkdGgsYz1uLmhlaWdodCxzPXZvaWQgMD09PVh8fGUucmVzcG9uc2VFbmQ8WCxkPWZ1bmN0aW9uKGUsdCl7aWYobnVsbD09ZSlyZXR1cm57fTt2YXIgbixyLG89e30saT1PYmplY3Qua2V5cyhlKTtmb3Iocj0wO3I8aS5sZW5ndGg7cisrKXQuaW5kZXhPZihuPWlbcl0pPj0wfHwob1tuXT1lW25dKTtyZXR1cm4gb30oZS50b0pTT04oKSxRKSx1PTAsZj1PYmplY3QuZW50cmllcyhkKTt1PGYubGVuZ3RoO3UrKyl7dmFyIGw9Zlt1XSxwPWxbMV07XCJudW1iZXJcIj09dHlwZW9mIHAmJihkW2xbMF1dPU1hdGguZmxvb3IocCkpfXZhciBtPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGUpe3ZhciB1PW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihmdW5jdGlvbihmKXtmLmZvckVhY2goZnVuY3Rpb24oZil7aWYoZi50YXJnZXQ9PT1uKXJldHVybiB1LmRpc2Nvbm5lY3QoKSxlKHQoe3Zpc2libGVPbkxvYWQ6Zi5pc0ludGVyc2VjdGluZyxvYnNlcnZhdGlvblRpbWU6TWF0aC5mbG9vcihmLnRpbWUpLGludGVyc2VjdGlvblJhdGlvOmYuaW50ZXJzZWN0aW9uUmF0aW8sc3F1YXJlc3BhY2VTaXplOnIsbmF0dXJhbEhlaWdodDppLG5hdHVyYWxXaWR0aDpvLGhlaWdodDpjLHdpZHRoOmEsbG9hZGVkQmVmb3JlTENQOnN9LGQpKX0pfSk7dS5vYnNlcnZlKG4pfSk7cmV0dXJuIFByb21pc2UucmVzb2x2ZShtKX1jYXRjaChlKXtyZXR1cm4gUHJvbWlzZS5yZWplY3QoZSl9fShyLGMpKS50aGVuKGZ1bmN0aW9uKGUpe28oZSxcImltYWdlXCIpfSl9Y2F0Y2goZSl7cmV0dXJuIFByb21pc2UucmVqZWN0KGUpfX0oe3Jlc291cmNlOmUsZGVsaXZlck1ldHJpY3M6cixkb21JbWFnZXM6b30pfTtwZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlUeXBlKG4uUmVzb3VyY2UpLmZvckVhY2goaSksbmV3IFBlcmZvcm1hbmNlT2JzZXJ2ZXIoZnVuY3Rpb24oZSl7ZS5nZXRFbnRyaWVzKCkuZm9yRWFjaChpKX0pLm9ic2VydmUoe2VudHJ5VHlwZXM6W24uUmVzb3VyY2VdfSksUHJvbWlzZS5yZXNvbHZlKCl9Y2F0Y2goZSl7cmV0dXJuIFByb21pc2UucmVqZWN0KGUpfX0odiksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsZnVuY3Rpb24oKXthPXdpbmRvdy5zZXRUaW1lb3V0KGwsM2U0KX0pLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsZnVuY3Rpb24oKXtcImhpZGRlblwiPT09ZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlJiYod2luZG93LmNsZWFyVGltZW91dChhKSxsKCkpfSl9KX1jYXRjaChlKXtyZXR1cm4gdihlKX1yZXR1cm4gZyYmZy50aGVuP2cudGhlbih2b2lkIDAsdik6Z30oMCxmdW5jdGlvbihlKXtzLmNhcHR1cmVFeGNlcHRpb24oZSx7cGFnZUxvYWRJZDpmLHBhcnNlZE9wdGlvbnM6c30pfSkpfWNhdGNoKGUpe3JldHVybiBQcm9taXNlLnJlamVjdChlKX19LEc9e2FjdGlvbjpcImxvYWRcIixhY3RvcjpcInVzZXJcIixldmVudF9vd25lcl90ZWFtOlwid2ViX3BlcmZvcm1hbmNlXCIsZXZlbnRfc291cmNlOlwid2ViXCIsb2JqZWN0X3R5cGU6XCJ3ZWJzaXRlXCJ9LEs9T2JqZWN0LmZyZWV6ZSh7Y3VtdWxhdGl2ZUxheW91dFNoaWZ0OlwiY3VtdWxhdGl2ZV9sYXlvdXRfc2hpZnRcIixkZWNvZGVkQm9keVNpemU6XCJkZWNvZGVkX2JvZHlfc2l6ZV9ieXRlc1wiLGRvbUNvbnRlbnRMb2FkZWRFdmVudEVuZDpcImRvbV9jb250ZW50X2xvYWRlZF9ldmVudF9lbmRfbXNcIixkb21Db250ZW50TG9hZGVkRXZlbnRTdGFydDpcImRvbV9jb250ZW50X2xvYWRlZF9ldmVudF9zdGFydF9tc1wiLGRvbWFpbkxvb2t1cDpcImRvbWFpbl9sb29rdXBfbXNcIixlbmNvZGVkQm9keVNpemU6XCJlbmNvZGVkX2JvZHlfc2l6ZV9ieXRlc1wiLGZpcnN0Q29udGVudGZ1bFBhaW50OlwiZmlyc3RfY29udGVudGZ1bF9wYWludF9tc1wiLGZpcnN0SW5wdXREZWxheTpcImZpcnN0X2lucHV0X2RlbGF5X21zXCIsbGFyZ2VzdENvbnRlbnRmdWxQYWludDpcImxhcmdlc3RfY29udGVudGZ1bF9wYWludF9tc1wiLGxvYWRFdmVudEVuZDpcImxvYWRfZXZlbnRfZW5kX21zXCIsbG9hZEV2ZW50U3RhcnQ6XCJsb2FkX2V2ZW50X3N0YXJ0X21zXCIscmVzcG9uc2VTdGFydDpcInJlc3BvbnNlX3N0YXJ0X21zXCIsdGNwQ29ubmVjdGlvbjpcInRjcF9jb25uZWN0aW9uX21zXCIsdGxzTmVnb3RpYXRpb246XCJ0bHNfbmVnb3RpYXRpb25fbXNcIn0pO2V4cG9ydHMuUlVNX1BSRUZJWD1cInJ1bS1cIixleHBvcnRzLmRlZmF1bHQ9ZnVuY3Rpb24oKXtyZXR1cm4gY29uc29sZS53YXJuKFwiQHNxcy9ydW0tY29sbGVjdG9yIGRlZmF1bHQgZXhwb3J0IGlzIGRlcHJlY2F0ZWQuIFVzZSBuYW1lZCBleHBvcnQgYGluaXRgIGluc3RlYWQuXCIpLFouYXBwbHkodm9pZCAwLFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSl9LGV4cG9ydHMuZ2V0Q3VtdWxhdGl2ZUxheW91dFNoaWZ0PUwsZXhwb3J0cy5nZXREZWNvZGVkQm9keVNpemU9VCxleHBvcnRzLmdldERvbUNvbnRlbnRMb2FkZWRFdmVudEVuZD14LGV4cG9ydHMuZ2V0RG9tQ29udGVudExvYWRlZEV2ZW50U3RhcnQ9QyxleHBvcnRzLmdldERvbWFpbkxvb2t1cD1TLGV4cG9ydHMuZ2V0RW5jb2RlZEJvZHlTaXplPU0sZXhwb3J0cy5nZXRGaXJzdENvbnRlbnRmdWxQYWludD1OLGV4cG9ydHMuZ2V0Rmlyc3RJbnB1dERlbGF5PWssZXhwb3J0cy5nZXRMYXJnZXN0Q29udGVudGZ1bFBhaW50PUksZXhwb3J0cy5nZXRMb2FkRXZlbnRFbmQ9TyxleHBvcnRzLmdldExvYWRFdmVudFN0YXJ0PUQsZXhwb3J0cy5nZXRQZXJmb3JtYW5jZU1ldHJpY3M9aixleHBvcnRzLmdldFJlc3BvbnNlU3RhcnQ9UixleHBvcnRzLmdldFRjcENvbm5lY3Rpb249UCxleHBvcnRzLmdldFRsc05lZ290aWF0aW9uPUIsZXhwb3J0cy5pbml0PVosZXhwb3J0cy5tYXJrPWZ1bmN0aW9uKGUsdCl7dm9pZCAwPT09dCYmKHQ9e30pO3RyeXtpZighVygpKXJldHVybjt2YXIgcj1cInJ1bS1cIitlO2lmKHdpbmRvdy5wZXJmb3JtYW5jZS5jbGVhck1hcmtzKHIpLHdpbmRvdy5wZXJmb3JtYW5jZS5tYXJrKHIse2RldGFpbDp0LmRldGFpbCxzdGFydFRpbWU6dC5zdGFydFRpbWV9KSx2b2lkIDAhPT10LnRyYWNlcil7dmFyIG89d2luZG93LnBlcmZvcm1hbmNlLmdldEVudHJpZXNCeU5hbWUocixuLk1hcmspLnNsaWNlKC0xKTt6KHtzcGFuTmFtZTplLHRyYWNlcjp0LnRyYWNlcixzdGFydFRpbWU6b1swXS5zdGFydFRpbWUsc3BhbkF0dHJpYnV0ZXM6dC5zcGFuQXR0cmlidXRlc30pfX1jYXRjaChlKXtVKGUpfX0sZXhwb3J0cy5tZWFzdXJlPWZ1bmN0aW9uKGUscil7dm9pZCAwPT09ciYmKHI9e3JlcXVpcmVTdGFydDohMX0pO3RyeXtpZighKFcoKSYmXCJwZXJmb3JtYW5jZVwiaW4gd2luZG93JiZcImdldEVudHJpZXNcImluIHdpbmRvdy5wZXJmb3JtYW5jZSYmXCJnZXRFbnRyaWVzQnlUeXBlXCJpbiB3aW5kb3cucGVyZm9ybWFuY2UmJlwiZ2V0RW50cmllc0J5TmFtZVwiaW4gd2luZG93LnBlcmZvcm1hbmNlKSlyZXR1cm47dmFyIG89XCJydW0tXCIrZSxpPXtkZXRhaWw6ci5kZXRhaWwsZHVyYXRpb246ci5kdXJhdGlvbn07aWYoaS5zdGFydD12b2lkIDA9PT1yLnN0YXJ0P286XCJzdHJpbmdcIj09dHlwZW9mIHIuc3RhcnQ/XCJydW0tXCIrci5zdGFydDpyLnN0YXJ0LGkuZW5kPVwic3RyaW5nXCI9PXR5cGVvZiByLmVuZD9cInJ1bS1cIityLmVuZDpyLmVuZCxyLnJlcXVpcmVTdGFydCYmKFwibnVtYmVyXCI9PXR5cGVvZiBpLnN0YXJ0fHwwPT09d2luZG93LnBlcmZvcm1hbmNlLmdldEVudHJpZXNCeU5hbWUoaS5zdGFydCxuLk1hcmspLmxlbmd0aCkpcmV0dXJuO2lmKHZvaWQgMCE9PXIudHJhY2VyKXt2YXIgYT10KHttZWFzdXJlTmFtZTpvfSxyLnNwYW5BdHRyaWJ1dGVzKTtcIm51bWJlclwiPT10eXBlb2YgaS5zdGFydD8oeih7c3Bhbk5hbWU6byx0cmFjZXI6ci50cmFjZXIsc3RhcnRUaW1lOmkuc3RhcnR9KSxGKHtzcGFuTmFtZTpvLHNwYW5BdHRyaWJ1dGVzOmF9KSk6KDA9PT13aW5kb3cucGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5TmFtZShpLnN0YXJ0LG4uTWFyaykubGVuZ3RoJiZ6KHtzcGFuTmFtZTppLnN0YXJ0LHRyYWNlcjpyLnRyYWNlcixzdGFydFRpbWU6MH0pLEYoe3NwYW5OYW1lOmkuc3RhcnQsc3BhbkF0dHJpYnV0ZXM6YX0pKX0hZnVuY3Rpb24oZSx0KXt0cnl7d2luZG93LnBlcmZvcm1hbmNlLm1lYXN1cmUoZSx0KX1jYXRjaChvKXt2YXIgbj1cInN0cmluZ1wiPT10eXBlb2YgdC5zdGFydD90LnN0YXJ0OmUscj1cInN0cmluZ1wiPT10eXBlb2YgdC5lbmQ/dC5lbmQ6dm9pZCAwO3RyeXt3aW5kb3cucGVyZm9ybWFuY2UubWVhc3VyZShlLG4scil9Y2F0Y2godCl7aWYoISh0IGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uKSl0aHJvdyB0O3RyeXt3aW5kb3cucGVyZm9ybWFuY2UubWVhc3VyZShlLFwibmF2aWdhdGlvblN0YXJ0XCIpfWNhdGNoKHQpe2lmKCEodCBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbikpdGhyb3cgdDt3aW5kb3cucGVyZm9ybWFuY2UubWVhc3VyZShlKX19fX0obyxpKTt2YXIgYz1mdW5jdGlvbihlKXt2YXIgdD13aW5kb3cucGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5TmFtZShlLG4uTWVhc3VyZSk7cmV0dXJuIHRbdC5sZW5ndGgtMV19KG8pO3JldHVybiBjfWNhdGNoKGUpe1UoZSl9fSxleHBvcnRzLnRyYWNrRXZlbnRzVjJGYWN0b3J5PWZ1bmN0aW9uKGUsdCl7dmFyIG47cmV0dXJuIHZvaWQgMD09PXQmJihuPXdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5zdWJzdHIod2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLmluZGV4T2YoXCIuXCIpKzEpLHQ9L15zdGFnZS5zcXNwLm5ldC9nLnRlc3Qobil8fC9ecWFcXGQrLnNxc3AubmV0L2cudGVzdChuKT9cInN0YWdpbmdcIjovKGRldi5zcXVhcmVzcGFjZS5uZXR8bG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wKS9nLnRlc3Qobik/XCJkZXZcIjpcInByb2RcIiksbmV3IGUoe2N1c3RvbVNjaGVtYU5hbWU6XCJQZXJmb3JtYW5jZVwiLHNvdXJjZUVudmlyb25tZW50OnR9LEcpfSxleHBvcnRzLnRyYWNrTG9hZFBlcmZvcm1hbmNlPWZ1bmN0aW9uKGUpe3RyeXt2YXIgdD17fTtyZXR1cm4gaihmdW5jdGlvbihlKXtPYmplY3QuZW50cmllcyhlKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciBuPWVbMF0scj1lWzFdO09iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChLLG4pJiYodFtLW25dXT1yKX0pfSksUHJvbWlzZS5yZXNvbHZlKFByb21pc2UucmFjZShbaCg2ZTQpLHkoKV0pKS50aGVuKGZ1bmN0aW9uKCl7ZSh0KX0pfWNhdGNoKGUpe3JldHVybiBQcm9taXNlLnJlamVjdChlKX19O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cnVtLWNvbGxlY3Rvci5qcy5tYXBcblxuIiwiaW1wb3J0IHsgSHViIGFzIFNlbnRyeSB9IGZyb20gJ0BzZW50cnkvdHlwZXMnO1xuXG4vKipcbiAqIGV4cG9ydHMgY2FwdHVyZSBtZXRob2RzIGZyb20gdGhlIHNlbnRyeS9icm93c2VyIGdsb2JhbCBjb25zdGFudCB3aGljaCBpcyBkZWZpbmVkIGluICdlcnJvci1yZXBvcnRlci9pbmRleC5qcydcbiAqIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL0BzZW50cnkvcmVhY3RcbiAqXG4gKiBESVNDTEFJTUVSOlxuICogaWYgdGhlIEhUTUwgcGFnZSBkb2VzIG5vdCBpbXBvcnQge3JvbGx1cC1lcnJvci1yZXBvcnRlcn0sIFNRVUFSRVNQQUNFX1NFTlRSWSB3aWxsIGJlIHVuZGVmaW5lZFxuICogYW5kIHRoZSAnY2FwdHVyZScgbWV0aG9kcyB3aWxsIGxvZyB0byB0aGUgY29uc29sZSwgcmVnYXJkbGVzcyBvZiB0aGUgZW52aXJvbm1lbnRcbiAqIFNlZSAnc3JjL21haW4vd2ViYXBwL3RlbXBsYXRlcy12Ni9jb25maWcvY29uZmlnLWNvdmVyLXBhZ2UuaHRtbCcgYXMgYW4gZXhhbXBsZSBvZiBhZGRpbmcgdGhlIHJvbGx1cFxuICovXG5cbmxldCBjYXB0dXJlTWVzc2FnZTogU2VudHJ5WydjYXB0dXJlTWVzc2FnZSddLFxuICBjYXB0dXJlRXhjZXB0aW9uOiBTZW50cnlbJ2NhcHR1cmVFeGNlcHRpb24nXSxcbiAgY2FwdHVyZUV2ZW50OiBTZW50cnlbJ2NhcHR1cmVFdmVudCddLFxuICBjb25maWd1cmVTY29wZTogU2VudHJ5Wydjb25maWd1cmVTY29wZSddLFxuICB3aXRoU2NvcGU6IFNlbnRyeVsnd2l0aFNjb3BlJ107XG5cbmNvbnN0IGxvZ1RvQ29uc29sZSA9IChtZXNzYWdlOiBhbnksIC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBbU2VudHJ5XSAke21lc3NhZ2V9YCwgLi4uYXJncyk7XG4gIHJldHVybiAnc29tZS1lcnJvci1pZGVudGlmaWVyJztcbn07XG5cbmxldCBpc1NlbnRyeUNvbm5lY3RlZCA9IGZhbHNlO1xuXG5pZiAod2luZG93LlNRVUFSRVNQQUNFX1NFTlRSWSkge1xuICBpc1NlbnRyeUNvbm5lY3RlZCA9IHRydWU7XG4gIGNhcHR1cmVNZXNzYWdlID0gd2luZG93LlNRVUFSRVNQQUNFX1NFTlRSWS5jYXB0dXJlTWVzc2FnZTtcbiAgY2FwdHVyZUV4Y2VwdGlvbiA9IHdpbmRvdy5TUVVBUkVTUEFDRV9TRU5UUlkuY2FwdHVyZUV4Y2VwdGlvbjtcbiAgY2FwdHVyZUV2ZW50ID0gd2luZG93LlNRVUFSRVNQQUNFX1NFTlRSWS5jYXB0dXJlRXZlbnQ7XG4gIGNvbmZpZ3VyZVNjb3BlID0gd2luZG93LlNRVUFSRVNQQUNFX1NFTlRSWS5jb25maWd1cmVTY29wZTtcbiAgd2l0aFNjb3BlID0gd2luZG93LlNRVUFSRVNQQUNFX1NFTlRSWS53aXRoU2NvcGU7XG59IGVsc2Uge1xuICBjb25zb2xlLndhcm4oJ1NFTlRSWSBXQVMgX19OT1RfXyBJTklUSUFMSVpFRC4gTG9ncyB3aWxsIGJlIGZvcndhcmRlZCB0byBjb25zb2xlIGluc3RlYWQuJyk7XG4gIGNhcHR1cmVNZXNzYWdlID0gbG9nVG9Db25zb2xlO1xuICBjYXB0dXJlRXhjZXB0aW9uID0gbG9nVG9Db25zb2xlO1xuICBjYXB0dXJlRXZlbnQgPSBsb2dUb0NvbnNvbGU7XG4gIGNvbmZpZ3VyZVNjb3BlID0gKCkgPT4ge307XG4gIHdpdGhTY29wZSA9ICgpID0+IHt9O1xufVxuXG5leHBvcnQge1xuICBjYXB0dXJlTWVzc2FnZSxcbiAgY2FwdHVyZUV4Y2VwdGlvbixcbiAgY2FwdHVyZUV2ZW50LFxuICBjb25maWd1cmVTY29wZSxcbiAgd2l0aFNjb3BlLFxuICBpc1NlbnRyeUNvbm5lY3RlZCxcbn07XG4iLCJ2YXIgZSx0LG4saSxhPWZ1bmN0aW9uKGUsdCl7cmV0dXJue25hbWU6ZSx2YWx1ZTp2b2lkIDA9PT10Py0xOnQsZGVsdGE6MCxlbnRyaWVzOltdLGlkOlwidjEtXCIuY29uY2F0KERhdGUubm93KCksXCItXCIpLmNvbmNhdChNYXRoLmZsb29yKDg5OTk5OTk5OTk5OTkqTWF0aC5yYW5kb20oKSkrMWUxMil9fSxyPWZ1bmN0aW9uKGUsdCl7dHJ5e2lmKFBlcmZvcm1hbmNlT2JzZXJ2ZXIuc3VwcG9ydGVkRW50cnlUeXBlcy5pbmNsdWRlcyhlKSl7aWYoXCJmaXJzdC1pbnB1dFwiPT09ZSYmIShcIlBlcmZvcm1hbmNlRXZlbnRUaW1pbmdcImluIHNlbGYpKXJldHVybjt2YXIgbj1uZXcgUGVyZm9ybWFuY2VPYnNlcnZlcigoZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0RW50cmllcygpLm1hcCh0KX0pKTtyZXR1cm4gbi5vYnNlcnZlKHt0eXBlOmUsYnVmZmVyZWQ6ITB9KSxufX1jYXRjaChlKXt9fSxvPWZ1bmN0aW9uKGUsdCl7dmFyIG49ZnVuY3Rpb24gbihpKXtcInBhZ2VoaWRlXCIhPT1pLnR5cGUmJlwiaGlkZGVuXCIhPT1kb2N1bWVudC52aXNpYmlsaXR5U3RhdGV8fChlKGkpLHQmJihyZW1vdmVFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLG4sITApLHJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwYWdlaGlkZVwiLG4sITApKSl9O2FkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsbiwhMCksYWRkRXZlbnRMaXN0ZW5lcihcInBhZ2VoaWRlXCIsbiwhMCl9LGM9ZnVuY3Rpb24oZSl7YWRkRXZlbnRMaXN0ZW5lcihcInBhZ2VzaG93XCIsKGZ1bmN0aW9uKHQpe3QucGVyc2lzdGVkJiZlKHQpfSksITApfSx1PVwiZnVuY3Rpb25cIj09dHlwZW9mIFdlYWtTZXQ/bmV3IFdlYWtTZXQ6bmV3IFNldCxmPWZ1bmN0aW9uKGUsdCxuKXt2YXIgaTtyZXR1cm4gZnVuY3Rpb24oKXt0LnZhbHVlPj0wJiYobnx8dS5oYXModCl8fFwiaGlkZGVuXCI9PT1kb2N1bWVudC52aXNpYmlsaXR5U3RhdGUpJiYodC5kZWx0YT10LnZhbHVlLShpfHwwKSwodC5kZWx0YXx8dm9pZCAwPT09aSkmJihpPXQudmFsdWUsZSh0KSkpfX0scz1mdW5jdGlvbihlLHQpe3ZhciBuLGk9YShcIkNMU1wiLDApLHU9ZnVuY3Rpb24oZSl7ZS5oYWRSZWNlbnRJbnB1dHx8KGkudmFsdWUrPWUudmFsdWUsaS5lbnRyaWVzLnB1c2goZSksbigpKX0scz1yKFwibGF5b3V0LXNoaWZ0XCIsdSk7cyYmKG49ZihlLGksdCksbygoZnVuY3Rpb24oKXtzLnRha2VSZWNvcmRzKCkubWFwKHUpLG4oKX0pKSxjKChmdW5jdGlvbigpe2k9YShcIkNMU1wiLDApLG49ZihlLGksdCl9KSkpfSxtPS0xLHA9ZnVuY3Rpb24oKXtyZXR1cm5cImhpZGRlblwiPT09ZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlPzA6MS8wfSx2PWZ1bmN0aW9uKCl7bygoZnVuY3Rpb24oZSl7dmFyIHQ9ZS50aW1lU3RhbXA7bT10fSksITApfSxkPWZ1bmN0aW9uKCl7cmV0dXJuIG08MCYmKG09cCgpLHYoKSxjKChmdW5jdGlvbigpe3NldFRpbWVvdXQoKGZ1bmN0aW9uKCl7bT1wKCksdigpfSksMCl9KSkpLHtnZXQgdGltZVN0YW1wKCl7cmV0dXJuIG19fX0sbD1mdW5jdGlvbihlLHQpe3ZhciBuLGk9ZCgpLG89YShcIkZDUFwiKSxzPWZ1bmN0aW9uKGUpe1wiZmlyc3QtY29udGVudGZ1bC1wYWludFwiPT09ZS5uYW1lJiYocCYmcC5kaXNjb25uZWN0KCksZS5zdGFydFRpbWU8aS50aW1lU3RhbXAmJihvLnZhbHVlPWUuc3RhcnRUaW1lLG8uZW50cmllcy5wdXNoKGUpLHUuYWRkKG8pLG4oKSkpfSxtPXBlcmZvcm1hbmNlLmdldEVudHJpZXNCeU5hbWUoXCJmaXJzdC1jb250ZW50ZnVsLXBhaW50XCIpWzBdLHA9bT9udWxsOnIoXCJwYWludFwiLHMpOyhtfHxwKSYmKG49ZihlLG8sdCksbSYmcyhtKSxjKChmdW5jdGlvbihpKXtvPWEoXCJGQ1BcIiksbj1mKGUsbyx0KSxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKGZ1bmN0aW9uKCl7cmVxdWVzdEFuaW1hdGlvbkZyYW1lKChmdW5jdGlvbigpe28udmFsdWU9cGVyZm9ybWFuY2Uubm93KCktaS50aW1lU3RhbXAsdS5hZGQobyksbigpfSkpfSkpfSkpKX0saD17cGFzc2l2ZTohMCxjYXB0dXJlOiEwfSxTPW5ldyBEYXRlLHk9ZnVuY3Rpb24oaSxhKXtlfHwoZT1hLHQ9aSxuPW5ldyBEYXRlLHcocmVtb3ZlRXZlbnRMaXN0ZW5lciksZygpKX0sZz1mdW5jdGlvbigpe2lmKHQ+PTAmJnQ8bi1TKXt2YXIgYT17ZW50cnlUeXBlOlwiZmlyc3QtaW5wdXRcIixuYW1lOmUudHlwZSx0YXJnZXQ6ZS50YXJnZXQsY2FuY2VsYWJsZTplLmNhbmNlbGFibGUsc3RhcnRUaW1lOmUudGltZVN0YW1wLHByb2Nlc3NpbmdTdGFydDplLnRpbWVTdGFtcCt0fTtpLmZvckVhY2goKGZ1bmN0aW9uKGUpe2UoYSl9KSksaT1bXX19LEU9ZnVuY3Rpb24oZSl7aWYoZS5jYW5jZWxhYmxlKXt2YXIgdD0oZS50aW1lU3RhbXA+MWUxMj9uZXcgRGF0ZTpwZXJmb3JtYW5jZS5ub3coKSktZS50aW1lU3RhbXA7XCJwb2ludGVyZG93blwiPT1lLnR5cGU/ZnVuY3Rpb24oZSx0KXt2YXIgbj1mdW5jdGlvbigpe3koZSx0KSxhKCl9LGk9ZnVuY3Rpb24oKXthKCl9LGE9ZnVuY3Rpb24oKXtyZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsbixoKSxyZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLGksaCl9O2FkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIixuLGgpLGFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsaSxoKX0odCxlKTp5KHQsZSl9fSx3PWZ1bmN0aW9uKGUpe1tcIm1vdXNlZG93blwiLFwia2V5ZG93blwiLFwidG91Y2hzdGFydFwiLFwicG9pbnRlcmRvd25cIl0uZm9yRWFjaCgoZnVuY3Rpb24odCl7cmV0dXJuIGUodCxFLGgpfSkpfSxMPWZ1bmN0aW9uKG4scyl7dmFyIG0scD1kKCksdj1hKFwiRklEXCIpLGw9ZnVuY3Rpb24oZSl7ZS5zdGFydFRpbWU8cC50aW1lU3RhbXAmJih2LnZhbHVlPWUucHJvY2Vzc2luZ1N0YXJ0LWUuc3RhcnRUaW1lLHYuZW50cmllcy5wdXNoKGUpLHUuYWRkKHYpLG0oKSl9LGg9cihcImZpcnN0LWlucHV0XCIsbCk7bT1mKG4sdixzKSxoJiZvKChmdW5jdGlvbigpe2gudGFrZVJlY29yZHMoKS5tYXAobCksaC5kaXNjb25uZWN0KCl9KSwhMCksaCYmYygoZnVuY3Rpb24oKXt2YXIgcjt2PWEoXCJGSURcIiksbT1mKG4sdixzKSxpPVtdLHQ9LTEsZT1udWxsLHcoYWRkRXZlbnRMaXN0ZW5lcikscj1sLGkucHVzaChyKSxnKCl9KSl9LFQ9ZnVuY3Rpb24oZSx0KXt2YXIgbixpPWQoKSxzPWEoXCJMQ1BcIiksbT1mdW5jdGlvbihlKXt2YXIgdD1lLnN0YXJ0VGltZTt0PGkudGltZVN0YW1wJiYocy52YWx1ZT10LHMuZW50cmllcy5wdXNoKGUpKSxuKCl9LHA9cihcImxhcmdlc3QtY29udGVudGZ1bC1wYWludFwiLG0pO2lmKHApe249ZihlLHMsdCk7dmFyIHY9ZnVuY3Rpb24oKXt1LmhhcyhzKXx8KHAudGFrZVJlY29yZHMoKS5tYXAobSkscC5kaXNjb25uZWN0KCksdS5hZGQocyksbigpKX07W1wia2V5ZG93blwiLFwiY2xpY2tcIl0uZm9yRWFjaCgoZnVuY3Rpb24oZSl7YWRkRXZlbnRMaXN0ZW5lcihlLHYse29uY2U6ITAsY2FwdHVyZTohMH0pfSkpLG8odiwhMCksYygoZnVuY3Rpb24oaSl7cz1hKFwiTENQXCIpLG49ZihlLHMsdCkscmVxdWVzdEFuaW1hdGlvbkZyYW1lKChmdW5jdGlvbigpe3JlcXVlc3RBbmltYXRpb25GcmFtZSgoZnVuY3Rpb24oKXtzLnZhbHVlPXBlcmZvcm1hbmNlLm5vdygpLWkudGltZVN0YW1wLHUuYWRkKHMpLG4oKX0pKX0pKX0pKX19LGI9ZnVuY3Rpb24oZSl7dmFyIHQsbj1hKFwiVFRGQlwiKTt0PWZ1bmN0aW9uKCl7dHJ5e3ZhciB0PXBlcmZvcm1hbmNlLmdldEVudHJpZXNCeVR5cGUoXCJuYXZpZ2F0aW9uXCIpWzBdfHxmdW5jdGlvbigpe3ZhciBlPXBlcmZvcm1hbmNlLnRpbWluZyx0PXtlbnRyeVR5cGU6XCJuYXZpZ2F0aW9uXCIsc3RhcnRUaW1lOjB9O2Zvcih2YXIgbiBpbiBlKVwibmF2aWdhdGlvblN0YXJ0XCIhPT1uJiZcInRvSlNPTlwiIT09biYmKHRbbl09TWF0aC5tYXgoZVtuXS1lLm5hdmlnYXRpb25TdGFydCwwKSk7cmV0dXJuIHR9KCk7aWYobi52YWx1ZT1uLmRlbHRhPXQucmVzcG9uc2VTdGFydCxuLnZhbHVlPDApcmV0dXJuO24uZW50cmllcz1bdF0sZShuKX1jYXRjaChlKXt9fSxcImNvbXBsZXRlXCI9PT1kb2N1bWVudC5yZWFkeVN0YXRlP3NldFRpbWVvdXQodCwwKTphZGRFdmVudExpc3RlbmVyKFwicGFnZXNob3dcIix0KX07ZXhwb3J0e3MgYXMgZ2V0Q0xTLGwgYXMgZ2V0RkNQLEwgYXMgZ2V0RklELFQgYXMgZ2V0TENQLGIgYXMgZ2V0VFRGQn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG4vKiBGaWxlIGdlbmVyYXRlZCBieSBKYXZhU2NyaXB0RW51bVByb2Nlc3NvciAqL1xuXG4vKiBEZXJpdmVkIGZyb20gSmF2YSBjbGFzcyBjb20uc3F1YXJlc3BhY2UudjYudXRpbHMuZW51bXMuUGFnZVR5cGUgKi9cblxuLyogSmF2YSBjbGFzcyBkZWZpbmVkIGluIHJlcG9zaXRvcnkgc3F1YXJlc3BhY2UtdjYgKi9cbnZhciBQYWdlVHlwZXM7XG5cbihmdW5jdGlvbiAoUGFnZVR5cGVzKSB7XG4gIFBhZ2VUeXBlc1tcIk1BSU5fQ09OVEVOVFwiXSA9IDE7XG4gIFBhZ2VUeXBlc1tcIkNPTlRFTlRfQ09MTEVDVElPTlwiXSA9IDE7XG4gIFBhZ2VUeXBlc1tcIlBBR0VcIl0gPSAyO1xuICBQYWdlVHlwZXNbXCJTUExBU0hfUEFHRVwiXSA9IDM7XG4gIFBhZ2VUeXBlc1tcIkNPTlRFTlRfSVRFTVwiXSA9IDUwO1xuICBQYWdlVHlwZXNbXCJOT1RfRk9VTkRcIl0gPSAxMDA7XG4gIFBhZ2VUeXBlc1tcIkVSUk9SXCJdID0gMTAxO1xuICBQYWdlVHlwZXNbXCJTRUFSQ0hcIl0gPSAxMDI7XG4gIFBhZ2VUeXBlc1tcIkxPQ0tfU0NSRUVOXCJdID0gMTAzO1xuICBQYWdlVHlwZXNbXCJQT1BVUF9PVkVSTEFZXCJdID0gMTA0O1xuICBQYWdlVHlwZXNbXCJQUk9URUNURURfQ09OVEVOVFwiXSA9IDEwNTtcbiAgUGFnZVR5cGVzW1wiTUVNQkVSX0FSRUFfQUNDRVNTX0RFTklFRFwiXSA9IDEwNjtcbiAgUGFnZVR5cGVzW1wiU0hPV19DQVJUXCJdID0gMjAwO1xuICBQYWdlVHlwZXNbXCJDSEVDS09VVFwiXSA9IDIwMTtcbiAgUGFnZVR5cGVzW1wiT1JERVJfQ09ORklSTUVEXCJdID0gMjAyO1xuICBQYWdlVHlwZXNbXCJET05BVEVcIl0gPSAyMDM7XG4gIFBhZ2VUeXBlc1tcIkNPTlRSSUJVVElPTl9DT05GSVJNRURcIl0gPSAyMDQ7XG4gIFBhZ2VUeXBlc1tcIkNPTU1FUkNFX0NBUlRfVjJcIl0gPSAyMDU7XG4gIFBhZ2VUeXBlc1tcIlNVQlNDUklQVElPTl9DT05GSVJNRURcIl0gPSAyMDY7XG4gIFBhZ2VUeXBlc1tcIk9SREVSX1JFQ0VJVkVEXCJdID0gMjA3O1xuICBQYWdlVHlwZXNbXCJNRU1CRVJTSElQX0NPTkZJUk1FRFwiXSA9IDIwODtcbiAgUGFnZVR5cGVzW1wiUkVWSUVXU19SRVFVRVNUXCJdID0gMjA5O1xuICBQYWdlVHlwZXNbXCJESUdJVEFMX1BST0RVQ1RfQ09NUE9TRVJfUFJFVklFV1wiXSA9IDIxMDtcbiAgUGFnZVR5cGVzW1wiTkVXU0xFVFRFUl9VTlNVQlNDUklCRVwiXSA9IDMwMDtcbiAgUGFnZVR5cGVzW1wiQ09NTUVSQ0VfRU1BSUxfUFJFVklFV1wiXSA9IDMwMTtcbn0pKFBhZ2VUeXBlcyB8fCAoUGFnZVR5cGVzID0ge30pKTtcblxudmFyIF9kZWZhdWx0ID0gUGFnZVR5cGVzO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbi8qIEZpbGUgZ2VuZXJhdGVkIGJ5IEphdmFTY3JpcHRFbnVtUHJvY2Vzc29yICovXG5cbi8qIERlcml2ZWQgZnJvbSBKYXZhIGNsYXNzIGNvbS5zcXVhcmVzcGFjZS52Ni51dGlscy5lbnVtcy5TaXRlU3RhdHVzICovXG5cbi8qIEphdmEgY2xhc3MgZGVmaW5lZCBpbiByZXBvc2l0b3J5IHNxdWFyZXNwYWNlLXY2ICovXG52YXIgU3RhdHVzQ29uc3RhbnRzO1xuXG4oZnVuY3Rpb24gKFN0YXR1c0NvbnN0YW50cykge1xuICBTdGF0dXNDb25zdGFudHNbXCJFWFBJUkVEXCJdID0gMTtcbiAgU3RhdHVzQ29uc3RhbnRzW1wiUEFTVERVRVwiXSA9IDI7XG4gIFN0YXR1c0NvbnN0YW50c1tcIlRSSUFMXCJdID0gMztcbiAgU3RhdHVzQ29uc3RhbnRzW1wiQkVUQVwiXSA9IDQ7XG4gIFN0YXR1c0NvbnN0YW50c1tcIlJFTU9WRURcIl0gPSA1O1xuICBTdGF0dXNDb25zdGFudHNbXCJJTlRFUk5BTFwiXSA9IDY7XG4gIFN0YXR1c0NvbnN0YW50c1tcIkNPTVBFRFwiXSA9IDc7XG4gIFN0YXR1c0NvbnN0YW50c1tcIlBBSURcIl0gPSA4O1xuICBTdGF0dXNDb25zdGFudHNbXCJWNV9MSU5LRURcIl0gPSAxMTtcbiAgU3RhdHVzQ29uc3RhbnRzW1wiQUNUSVZFX1BBUktJTkdfUEFHRVwiXSA9IDEyO1xuICBTdGF0dXNDb25zdGFudHNbXCJSRVNPTERcIl0gPSAxMztcbiAgU3RhdHVzQ29uc3RhbnRzW1wiUkVTT0xEX0dSQUNFX1BFUklPRFwiXSA9IDE0O1xuICBTdGF0dXNDb25zdGFudHNbXCJFTlRFUlBSSVNFXCJdID0gMTU7XG59KShTdGF0dXNDb25zdGFudHMgfHwgKFN0YXR1c0NvbnN0YW50cyA9IHt9KSk7XG5cbnZhciBfZGVmYXVsdCA9IFN0YXR1c0NvbnN0YW50cztcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBUaGlzIHNjcmlwdCB3aWxsIGJlIGluY2x1ZGVkIG9uIEFMTCB1c2VyIHNpdGVzIGFuZCAvY29uZmlnXG5cbi8vIEkgYmVsaWV2ZSB0aGlzIGlzIGFsd2F5cyBvbiBhIHBhZ2Ugd2l0aCBjb21tb24sIGFuZCBzbyBpbmhlcml0cyB0aGUgcG9seWZpbGxzLlxuLy8gYnV0IHdvZSB0byBrZWVwaW5nIHRoaXMgaW5zeW5jLlxuaW1wb3J0IHsgaW5pdCBhcyBydW1Db2xsZWN0b3IgfSBmcm9tICdAc3FzL3J1bS1jb2xsZWN0b3InO1xuaW1wb3J0IFN0YXR1c0NvbnN0YW50cyBmcm9tICdAc3FzL2VudW1zL1N0YXR1c0NvbnN0YW50cyc7XG5pbXBvcnQgUGFnZVR5cGVzIGZyb20gJ0BzcXMvZW51bXMvUGFnZVR5cGVzJztcblxuaW1wb3J0IHtcbiAgY2FwdHVyZUV4Y2VwdGlvbixcbiAgd2l0aFNjb3BlXG59IGZyb20gJ3NoYXJlZC91dGlscy9lcnJvci1yZXBvcnRlci9nbG9iYWwtc2VudHJ5JztcblxuY29uc3QgY29udGV4dCA9IHdpbmRvdy5TdGF0aWMgJiYgd2luZG93LlN0YXRpYy5TUVVBUkVTUEFDRV9DT05URVhUO1xuY29uc3QgaW5GcmFtZSA9IHdpbmRvdy50b3AgIT09IHdpbmRvdztcblxuLy8gV2hpdGVsaXN0IGFwcHJvYWNoIHRvIHJlZ2lzdGVyIGFwcCBuYW1lIGJhc2VkIG9uIFBhZ2VUeXBlcyBlbnVtIHZhbHVlcy5cbmNvbnN0IFBhZ2VUeXBlVG9BcHBOYW1lTWFwID0gT2JqZWN0LmZyZWV6ZSh7XG4gIFtQYWdlVHlwZXMuQ09NTUVSQ0VfQ0FSVF9WMl06ICdjb21tZXJjZS1jYXJ0J1xufSk7XG5cbmZ1bmN0aW9uIGlzSW5Db25maWcoKSB7XG4gIGNvbnN0IHdpbmRvd1BhdGhuYW1lID0gKHdpbmRvdy5sb2NhdGlvbiAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpIHx8ICcnO1xuICByZXR1cm4gIWluRnJhbWUgJiYgL15cXC9jb25maWcoXFwvLiopPyQvLnRlc3Qod2luZG93UGF0aG5hbWUpO1xufVxuXG4vKiogQWxsIGNvbnRleHQgdmFsdWVzIHNoYXJlZCBiZXR3ZWVuIC9jb25maWcgYW5kIHVuYXV0aGVudGljYXRlZCBzaXRlIHZpc2l0b3JzICovXG5mdW5jdGlvbiBnZXRTaGFyZWRDb250ZXh0KCkge1xuICByZXR1cm4ge1xuICAgIGluRnJhbWUsXG4gICAgdGVtcGxhdGVJZDogY29udGV4dC50ZW1wbGF0ZUlkIHx8ICcnLFxuICAgIGltcGVyc29uYXRlZFNlc3Npb246ICEhY29udGV4dC5pbXBlcnNvbmF0ZWRTZXNzaW9uLFxuICAgIHBhZ2VUeXBlOiB0eXBlb2YgY29udGV4dC5wYWdlVHlwZSA9PT0gJ251bWJlcicgPyBjb250ZXh0LnBhZ2VUeXBlIDogLTFcbiAgfTtcbn1cblxuLyoqIEFsbCBjb250ZXh0IHVuZGVyIHRoZSBgU1FVQVJFU1BBQ0VfQ09OVEVYVGAud2Vic2l0ZSBrZXkgKi9cbmZ1bmN0aW9uIGdldFdlYnNpdGVDb250ZXh0KCkge1xuICBjb25zdCB7IHdlYnNpdGUgPSB7fSB9ID0gY29udGV4dDtcblxuICByZXR1cm4ge1xuICAgIGF1dGhlbnRpY1VybDogd2Vic2l0ZS5hdXRoZW50aWNVcmwgfHwgJycsXG4gICAgY2xvbmVhYmxlOiAhIXdlYnNpdGUuY2xvbmVhYmxlLFxuICAgIGRldmVsb3Blck1vZGU6ICEhd2Vic2l0ZS5kZXZlbG9wZXJNb2RlLFxuICAgIGlzSHN0c0VuYWJsZWQ6ICEhd2Vic2l0ZS5pc0hzdHNFbmFibGVkLFxuICAgIGxhbmd1YWdlOiB3ZWJzaXRlLmxhbmd1YWdlIHx8ICcnLFxuICAgIHRpbWVab25lOiB3ZWJzaXRlLnRpbWVab25lIHx8ICcnLFxuICAgIHdlYnNpdGVJZDogd2Vic2l0ZS5pZCB8fCAnJyxcbiAgICB3ZWJzaXRlVHlwZTogd2Vic2l0ZS53ZWJzaXRlVHlwZSB8fCAtMVxuICB9O1xufVxuXG4vKiogQWxsIGNvbnRleHQgdW5kZXIgdGhlIGBTUVVBUkVTUEFDRV9DT05URVhULndlYnNpdGVTZXR0aW5nc2Aga2V5ICovXG5mdW5jdGlvbiBnZXRXZWJzaXRlU2V0dGluZ3NDb250ZXh0KCkge1xuICBjb25zdCB7IHdlYnNpdGVTZXR0aW5ncyA9IHt9IH0gPSBjb250ZXh0O1xuXG4gIHJldHVybiB7XG4gICAgYW1wRW5hYmxlZDogISF3ZWJzaXRlU2V0dGluZ3MuYW1wRW5hYmxlZFxuICB9O1xufVxuXG4vKiogQWxsIGNvbnRleHQgdW5kZXIgdGhlIGBTUVVBUkVTUEFDRV9DT05URVhULmNvbGxlY3Rpb25gIGtleSAqL1xuZnVuY3Rpb24gZ2V0Q29sbGVjdGlvbkNvbnRleHQoKSB7XG4gIGNvbnN0IHsgY29sbGVjdGlvbiA9IHt9IH0gPSBjb250ZXh0O1xuXG4gIHJldHVybiB7XG4gICAgY29sbGVjdGlvblR5cGU6IGNvbGxlY3Rpb24udHlwZSB8fCAtMVxuICB9O1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIHNpdGUgd2FzIGJ1aWx0IG9uIFNxdWFyZXNwYWNlIDhcbiAqXG4gKiA4IGN1cnJlbnRseSBkb2VzIG5vdCBzaGlwIHdpdGggYSBgdGVtcGxhdGVWZXJzaW9uYCB2YWx1ZSBpbiB0aGUgY29udGV4dCB3aGVuIG5vdCBpbiBjb25maWcgbW9kZS5cbiAqIFRoaXMgdXNlcyB0aGUgYFNFQ1RJT05fQ09OVEVYVGAgdG8gSUQgOCBzaXRlcy4gSXQgbWF5IGJlIHJlbW92YWJsZSBpbiB0aGUgZnV0dXJlLlxuICogOCBKYW4gMjAyMCBAY2VsbGlzb25cbiAqL1xuZnVuY3Rpb24gaXNVc2VyU2l0ZUVpZ2h0KCkge1xuICByZXR1cm4gd2luZG93LlNxdWFyZXNwYWNlICYmICdTRUNUSU9OX0NPTlRFWFQnIGluIHdpbmRvdy5TcXVhcmVzcGFjZTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBTcXVhcmVzcGFjZSB2ZXJzaW9uIG51bWJlciBvZiB0aGUgc2l0ZSBiZWluZyB2aWV3ZWQgb3IgZWRpdGVkXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gdGhlIHZlcnNpb24gbnVtYmVyLiByZXR1cm5zIGBudWxsYCBpZiB2ZXJzaW9uIHVua25vd25cbiAqL1xuZnVuY3Rpb24gZ2V0VmVyc2lvbk51bWJlcigpIHtcbiAgaWYgKGNvbnRleHQuaGFzT3duUHJvcGVydHkoJ3RlbXBsYXRlVmVyc2lvbicpKSB7XG4gICAgcmV0dXJuIGNvbnRleHQudGVtcGxhdGVWZXJzaW9uLnJlcGxhY2UoJy4nLCAnXycpO1xuICB9IGVsc2UgaWYgKGlzVXNlclNpdGVFaWdodCgpKSB7XG4gICAgcmV0dXJuICc4JztcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBvcHRpb25zIGZvciBpbml0aWFsaXppbmcgdGhlIFJVTSBjb2xsZWN0b3JcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmVyc2lvbiB0aGUgU3F1YXJlc3BhY2UgdmVyc2lvblxuICogQHJldHVybnMge3VuZGVmaW5lZHxPYmplY3R9IHRoZSBjb25maWcgb3IgYHVuZGVmaW5lZGAgaWYgU3F1YXJlc3BhY2UgdmVyaXNvbiBpcyB1bmtub3duXG4gKi9cbmZ1bmN0aW9uIGdldENvbGxlY3Rvck9wdGlvbnModmVyc2lvbikge1xuICBjb25zdCBpc0NvbmZpZyA9IGlzSW5Db25maWcoKTtcbiAgY29uc3QgYXBwTmFtZUZvclBhZ2VUeXBlID0gUGFnZVR5cGVUb0FwcE5hbWVNYXBbY29udGV4dC5wYWdlVHlwZV07XG4gIGNvbnN0IHJ1bU9wdGlvbnMgPSB7XG4gICAgYXBwTmFtZTpcbiAgICAgIGFwcE5hbWVGb3JQYWdlVHlwZSB8fCBgdiR7dmVyc2lvbn0tJHtpc0NvbmZpZyA/ICdjb25maWcnIDogJ3VzZXItc2l0ZXMnfWAsXG4gICAgY29udGV4dDoge1xuICAgICAgLi4uZ2V0U2hhcmVkQ29udGV4dCgpLFxuICAgICAgLi4uZ2V0V2Vic2l0ZUNvbnRleHQoKSxcbiAgICAgIC4uLmdldFdlYnNpdGVTZXR0aW5nc0NvbnRleHQoKSxcbiAgICAgIC4uLmdldENvbGxlY3Rpb25Db250ZXh0KClcbiAgICB9LFxuICAgIGNhcHR1cmVFeGNlcHRpb246IChlcnJvciwgZXh0cmFzKSA9PiB7XG4gICAgICB3aXRoU2NvcGUoc2NvcGUgPT4ge1xuICAgICAgICBzY29wZS5zZXRUYWcoJ3Byb2plY3QnLCAncnVtLWNvbGxlY3RvcicpO1xuICAgICAgICBpZiAoZXh0cmFzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzY29wZS5zZXRFeHRyYSgnZXh0cmFzJywgZXh0cmFzKTtcbiAgICAgICAgfVxuICAgICAgICBjYXB0dXJlRXhjZXB0aW9uKGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBpZiAoaXNDb25maWcpIHtcbiAgICBjb25zdCBpc0ludGVybmFsID1cbiAgICAgIGNvbnRleHQud2Vic2l0ZS5zaXRlU3RhdHVzLnZhbHVlID09PSBTdGF0dXNDb25zdGFudHMuSU5URVJOQUw7XG4gICAgY29uc3QgeyBjcmVhdGVkT24sIGlkOiBtZW1iZXJJZCB9ID0gY29udGV4dC5hdXRoZW50aWNhdGVkQWNjb3VudDtcblxuICAgIHJ1bU9wdGlvbnMuY29udGV4dC5pc0ludGVybmFsID0gaXNJbnRlcm5hbDtcbiAgICBydW1PcHRpb25zLmNvbnRleHQuY3JlYXRlZE9uID0gY3JlYXRlZE9uO1xuICAgIHJ1bU9wdGlvbnMuY29udGV4dC5tZW1iZXJJZCA9IG1lbWJlcklkO1xuICB9XG4gIHJldHVybiBydW1PcHRpb25zO1xufVxuXG5mdW5jdGlvbiBib290c3RyYXAoKSB7XG4gIGlmICghX19ERVZfXyAmJiBjb250ZXh0KSB7XG4gICAgY29uc3QgdmVyc2lvbiA9IGdldFZlcnNpb25OdW1iZXIoKTtcbiAgICBpZiAodmVyc2lvbiA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBydW1PcHRpb25zID0gZ2V0Q29sbGVjdG9yT3B0aW9ucyh2ZXJzaW9uKTtcbiAgICBydW1Db2xsZWN0b3IocnVtT3B0aW9ucyk7XG4gIH1cbn1cblxuYm9vdHN0cmFwKCk7XG4iXSwibmFtZXMiOlsiY2FwdHVyZU1lc3NhZ2UiLCJjYXB0dXJlRXhjZXB0aW9uIiwiY2FwdHVyZUV2ZW50IiwiY29uZmlndXJlU2NvcGUiLCJ3aXRoU2NvcGUiLCJsb2dUb0NvbnNvbGUiLCJtZXNzYWdlIiwiYXJncyIsImNvbnNvbGUiLCJsb2ciLCJpc1NlbnRyeUNvbm5lY3RlZCIsIndpbmRvdyIsIlNRVUFSRVNQQUNFX1NFTlRSWSIsIndhcm4iLCJjb250ZXh0IiwiU3RhdGljIiwiU1FVQVJFU1BBQ0VfQ09OVEVYVCIsImluRnJhbWUiLCJ0b3AiLCJQYWdlVHlwZVRvQXBwTmFtZU1hcCIsIk9iamVjdCIsImZyZWV6ZSIsIlBhZ2VUeXBlcyIsIkNPTU1FUkNFX0NBUlRfVjIiLCJpc0luQ29uZmlnIiwid2luZG93UGF0aG5hbWUiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwidGVzdCIsImdldFNoYXJlZENvbnRleHQiLCJ0ZW1wbGF0ZUlkIiwiaW1wZXJzb25hdGVkU2Vzc2lvbiIsInBhZ2VUeXBlIiwiZ2V0V2Vic2l0ZUNvbnRleHQiLCJ3ZWJzaXRlIiwiYXV0aGVudGljVXJsIiwiY2xvbmVhYmxlIiwiZGV2ZWxvcGVyTW9kZSIsImlzSHN0c0VuYWJsZWQiLCJsYW5ndWFnZSIsInRpbWVab25lIiwid2Vic2l0ZUlkIiwiaWQiLCJ3ZWJzaXRlVHlwZSIsImdldFdlYnNpdGVTZXR0aW5nc0NvbnRleHQiLCJ3ZWJzaXRlU2V0dGluZ3MiLCJhbXBFbmFibGVkIiwiZ2V0Q29sbGVjdGlvbkNvbnRleHQiLCJjb2xsZWN0aW9uIiwiY29sbGVjdGlvblR5cGUiLCJ0eXBlIiwiaXNVc2VyU2l0ZUVpZ2h0IiwiU3F1YXJlc3BhY2UiLCJnZXRWZXJzaW9uTnVtYmVyIiwiaGFzT3duUHJvcGVydHkiLCJ0ZW1wbGF0ZVZlcnNpb24iLCJyZXBsYWNlIiwiZ2V0Q29sbGVjdG9yT3B0aW9ucyIsInZlcnNpb24iLCJpc0NvbmZpZyIsImFwcE5hbWVGb3JQYWdlVHlwZSIsInJ1bU9wdGlvbnMiLCJhcHBOYW1lIiwiZXJyb3IiLCJleHRyYXMiLCJzY29wZSIsInNldFRhZyIsInVuZGVmaW5lZCIsInNldEV4dHJhIiwiaXNJbnRlcm5hbCIsInNpdGVTdGF0dXMiLCJ2YWx1ZSIsIlN0YXR1c0NvbnN0YW50cyIsIklOVEVSTkFMIiwiYXV0aGVudGljYXRlZEFjY291bnQiLCJjcmVhdGVkT24iLCJtZW1iZXJJZCIsImJvb3RzdHJhcCIsIl9fREVWX18iXSwic291cmNlUm9vdCI6IiJ9