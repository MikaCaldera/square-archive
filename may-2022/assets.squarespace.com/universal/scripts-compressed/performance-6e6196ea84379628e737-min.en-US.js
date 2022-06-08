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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyZm9ybWFuY2UtN2Q2MjlkZmE3YmUxMTg4NTFhMGMtbWluLmVuLVVTLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsbUJBQW1CLHlCQUF5Qjs7Ozs7OztBQ2hCckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixtQkFBbUIseUJBQXlCOzs7Ozs7O0FDUHJFLHFCQUFxQixtQkFBTyxDQUFDLE1BQXFCOztBQUVsRDtBQUNBLGtCQUFrQixzQkFBc0I7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLG1CQUFtQix5QkFBeUI7Ozs7Ozs7QUN0QnJFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTSxtQkFBTyxDQUFDLE1BQVksRUFBRSxhQUFhLG9DQUFvQyxZQUFZLG1CQUFtQixLQUFLLG1CQUFtQixzRUFBc0UsU0FBUyx5QkFBeUIsb0JBQW9CLE9BQU8sY0FBYywyQ0FBMkMsbUNBQW1DLE1BQU0sU0FBUyxxQkFBcUIsa2RBQWtkLHdCQUF3Qiw2Q0FBNkMsRUFBRSw4QkFBOEIscUJBQXFCLHlEQUF5RCx3QkFBd0IsNEJBQTRCLHFCQUFxQixpR0FBaUcseUJBQXlCLFdBQVcscUJBQXFCLDJDQUEyQyx3QkFBd0Isa0ZBQWtGLEVBQUUsaVRBQWlULEtBQUssOEZBQThGLGFBQWEsd1FBQXdRLFNBQVMsR0FBRywrRUFBK0UsZ0JBQWdCLFNBQVMsMENBQTBDLHFEQUFxRCxxQ0FBcUMseUZBQXlGLEtBQUssc0VBQXNFLHNEQUFzRCw2Q0FBNkMsZ0JBQWdCLElBQUksYUFBYSxnRkFBZ0YsSUFBSSxnREFBZ0QsWUFBWSxFQUFFLFdBQVcs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T0FBTyxDQUFDNEQsb0JBQTVDO0FBQUEsUUFBUUMsU0FBUix5QkFBUUEsU0FBUjtBQUFBLFFBQXVCQyxRQUF2Qix5QkFBbUJsQyxFQUFuQjtBQUVBbUIsSUFBQUEsVUFBVSxDQUFDL0MsT0FBWCxDQUFtQnVELFVBQW5CLEdBQWdDQSxVQUFoQztBQUNBUixJQUFBQSxVQUFVLENBQUMvQyxPQUFYLENBQW1CNkQsU0FBbkIsR0FBK0JBLFNBQS9CO0FBQ0FkLElBQUFBLFVBQVUsQ0FBQy9DLE9BQVgsQ0FBbUI4RCxRQUFuQixHQUE4QkEsUUFBOUI7QUFDRDs7QUFDRCxTQUFPZixVQUFQO0FBQ0Q7O0FBRUQsU0FBU2dCLFNBQVQsR0FBcUI7QUFDbkIsTUFBSSxTQUFZL0QsT0FBaEIsRUFBeUI7QUFDdkIsUUFBTTRDLE9BQU8sR0FBR0wsZ0JBQWdCLEVBQWhDOztBQUNBLFFBQUlLLE9BQU8sS0FBSyxJQUFoQixFQUFzQjtBQUNwQjtBQUNEOztBQUNELFFBQU1HLFVBQVUsR0FBR0osbUJBQW1CLENBQUNDLE9BQUQsQ0FBdEM7QUFDQSw0QkFBYUcsVUFBYjtBQUNEO0FBQ0Y7O0FBRURnQixTQUFTLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRyYWN0LWNzcy8uLi8uLi8uLi8uLi9jb21tb24vdGVtcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9leHRyYWN0LWNzcy8uLi8uLi8uLi8uLi9jb21tb24vdGVtcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vZXh0cmFjdC1jc3MvLi4vLi4vLi4vLi4vY29tbW9uL3RlbXAvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkLmpzIiwid2VicGFjazovL2V4dHJhY3QtY3NzLy4uLy4uLy4uLy4uL2NvbW1vbi90ZW1wL25vZGVfbW9kdWxlcy9Ac3FzL3J1bS1jb2xsZWN0b3IvZGlzdC9ydW0tY29sbGVjdG9yLmpzIiwid2VicGFjazovL2V4dHJhY3QtY3NzLy4vc3JjL3NoYXJlZC91dGlscy9lcnJvci1yZXBvcnRlci9nbG9iYWwtc2VudHJ5LnRzIiwid2VicGFjazovL2V4dHJhY3QtY3NzLy4uLy4uLy4uLy4uL2NvbW1vbi90ZW1wL25vZGVfbW9kdWxlcy93ZWItdml0YWxzL2Rpc3Qvd2ViLXZpdGFscy5qcyIsIndlYnBhY2s6Ly9leHRyYWN0LWNzcy8uLi9mcm9udGVuZC9wYWNrYWdlcy9lbnVtcy9QYWdlVHlwZXMuanMiLCJ3ZWJwYWNrOi8vZXh0cmFjdC1jc3MvLi4vZnJvbnRlbmQvcGFja2FnZXMvZW51bXMvU3RhdHVzQ29uc3RhbnRzLmpzIiwid2VicGFjazovL2V4dHJhY3QtY3NzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4dHJhY3QtY3NzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leHRyYWN0LWNzcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4dHJhY3QtY3NzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXh0cmFjdC1jc3MvLi9zcmMvYXBwcy9QZXJmb3JtYW5jZS9ib290c3RyYXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4vZGVmaW5lUHJvcGVydHkuanNcIik7XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gT2JqZWN0KGFyZ3VtZW50c1tpXSkgOiB7fTtcbiAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG5cbiAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RTcHJlYWQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiLyoqISBcbiAqIEBzcXMvcnVtLWNvbGxlY3RvciB2NC4zLjAgXG4gKiBHYXRoZXIgYW5kIGRlbGl2ZXIgcmVhbC11c2VyIHBlcmZvcm1hbmNlIG1ldHJpY3MgaW4gU3F1YXJlc3BhY2UgcHJvZHVjdHMuIFxuICogXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjIgU3F1YXJlc3BhY2UsIEluYy4gXG4gKiBodHRwczovL2dpdGh1Yi5jb20vc3FzcC9ydW0tY29sbGVjdG9yLmdpdCBcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBVTkxJQ0VOU0VEIGxpY2Vuc2UgXG4gKi9cblxudmFyIGU9cmVxdWlyZShcIndlYi12aXRhbHNcIik7ZnVuY3Rpb24gdCgpe3JldHVybiB0PU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciBuPWFyZ3VtZW50c1t0XTtmb3IodmFyIHIgaW4gbilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixyKSYmKGVbcl09bltyXSl9cmV0dXJuIGV9LHQuYXBwbHkodGhpcyxhcmd1bWVudHMpfXZhciBuLHI9ZnVuY3Rpb24oZSl7cmV0dXJue2FwcDpcImFcIixkYXRhOntfX2VuY29kaW5nX2NvbmZpZ19fOmUsX19lbmNvZGluZ19rZXlfXzpcImRcIn0sZXZlbnQ6XCJlXCIscGFnZUxvYWRJZDpcInBsXCIsdHM6XCJ0XCJ9fSxvPXQoe2NvbnRleHQ6e19fZW5jb2RpbmdfY29uZmlnX186e2FjY291bnRJZDpcImFjY291bnRJZFwiLGFtcEVuYWJsZWQ6XCJhbXBFbmFibGVkXCIsYXV0aGVudGljVXJsOlwiYXV0aGVudGljVXJsXCIsY2xvbmVhYmxlOlwiY2xvbmVhYmxlXCIsY29sbGVjdGlvblR5cGU6XCJjb2xsZWN0aW9uVHlwZVwiLGNyZWF0ZWRPbjpcImNyZWF0ZWRPblwiLGRldmVsb3Blck1vZGU6XCJkZXZlbG9wZXJNb2RlXCIsaW1wZXJzb25hdGVkU2Vzc2lvbjpcImltcGVyc29uYXRlZFNlc3Npb25cIixpbkZyYW1lOlwiaW5GcmFtZVwiLGlzSHN0c0VuYWJsZWQ6XCJpc0hzdHNFbmFibGVkXCIsaXNJbnRlcm5hbDpcImlzSW50ZXJuYWxcIixsYW5ndWFnZTpcImxhbmd1YWdlXCIsbWVtYmVySWQ6XCJtZW1iZXJJZFwiLHBhZ2VUeXBlOlwicGFnZVR5cGVcIixwbGF0Zm9ybTpcInBsYXRmb3JtXCIsdGVtcGxhdGVJZDpcInRlbXBsYXRlSWRcIix0aW1lWm9uZTpcInRpbWVab25lXCIsd2Vic2l0ZUlkOlwid2Vic2l0ZUlkXCIsd2Vic2l0ZVR5cGU6XCJ3ZWJzaXRlVHlwZVwifSxfX2VuY29kaW5nX2tleV9fOlwiY3R4XCJ9LHN1cHBvcnRMZXZlbDpcInNsXCIsdmlzaWJpbGl0eVN0YXRlT25EQ0w6XCJ2c1wifSx7YW5hbHl0aWNzSWQ6XCJhaWRcIixjb25uZWN0aW9uOntfX2VuY29kaW5nX2NvbmZpZ19fOntkb3dubGluazpcImRvXCIsZWZmZWN0aXZlVHlwZTpcImVmXCIscnR0OlwicnR0XCIsc2F2ZURhdGE6XCJzZFwifSxfX2VuY29kaW5nX2tleV9fOlwiY29uXCJ9LGRlbGl2ZXJ5VHlwZTpcImR0XCIsZGlzcGxheTp7X19lbmNvZGluZ19jb25maWdfXzp7ZGV2aWNlUGl4ZWxSYXRpbzpcImRwclwiLHNjcmVlbkhlaWdodDpcInNoXCIsc2NyZWVuV2lkdGg6XCJzd1wiLHZpZXdwb3J0SGVpZ2h0OlwidmhcIix2aWV3cG9ydFdpZHRoOlwidndcIn0sX19lbmNvZGluZ19rZXlfXzpcImRpc3BcIn0saGFyZHdhcmU6e19fZW5jb2RpbmdfY29uZmlnX186e2RldmljZU1lbW9yeTpcImRtXCIsaGFyZHdhcmVDb25jdXJyZW5jeTpcImhjXCJ9LF9fZW5jb2Rpbmdfa2V5X186XCJoZHdcIn0saGFzaDpcImhcIixob3N0bmFtZTpcImhuXCIsbWFya2V0aW5nSWQ6XCJtaWRcIixtZW1iZXJJZDpcIm1lbVwiLHBhdGhuYW1lOlwicFwiLHZlcnNpb246XCJ2XCJ9LHtjdW11bGF0aXZlTGF5b3V0U2hpZnQ6XCJjbFwiLGRlY29kZWRCb2R5U2l6ZTpcImRiXCIsZG9tYWluTG9va3VwOlwiZG1sXCIsZG9tQ29udGVudExvYWRlZEV2ZW50RW5kOlwiZGVcIixkb21Db250ZW50TG9hZGVkRXZlbnRTdGFydDpcImRzXCIsZW5jb2RlZEJvZHlTaXplOlwiZWJcIixmaXJzdENvbnRlbnRmdWxQYWludDpcImZjcFwiLGZpcnN0SW5wdXREZWxheTpcImZpZFwiLGxhcmdlc3RDb250ZW50ZnVsUGFpbnQ6XCJsY3BcIixsb2FkRXZlbnRFbmQ6XCJsZVwiLGxvYWRFdmVudFN0YXJ0OlwibFwiLHRjcENvbm5lY3Rpb246XCJ0Y3BcIix0bHNDb25uZWN0aW9uOlwidGxzXCJ9KSxpPXtkdXJhdGlvbjpcImRcIixlbmRNYXJrRGV0YWlsOlwiZVwiLG1lYXN1cmVEZXRhaWw6XCJtXCIsbmFtZTpcIm5cIixzdGFydE1hcmtEZXRhaWw6XCJzXCIsc3RhcnRUaW1lOlwic3RcIn07IWZ1bmN0aW9uKGUpe2UuRWxlbWVudD1cImVsZW1lbnRcIixlLkV2ZW50PVwiZXZlbnRcIixlLkZpcnN0SW5wdXQ9XCJmaXJzdC1pbnB1dFwiLGUuTG9uZ1Rhc2s9XCJsb25ndGFza1wiLGUuTGFyZ2VzdENvbnRlbnRmdWxQYWludD1cImxhcmdlc3QtY29udGVudGZ1bC1wYWludFwiLGUuTGF5b3V0U2hpZnQ9XCJsYXlvdXQtc2hpZnRcIixlLk1hcms9XCJtYXJrXCIsZS5NZWFzdXJlPVwibWVhc3VyZVwiLGUuTmF2aWdhdGlvbj1cIm5hdmlnYXRpb25cIixlLlBhaW50PVwicGFpbnRcIixlLlJlc291cmNlPVwicmVzb3VyY2VcIn0obnx8KG49e30pKTt2YXIgYSxjPS8oaVBob25lfGlQb2R8aVBhZCkgT1MgKCgxWzAtMl0pfFsyLTldKV9cXGQrLipBcHBsZVdlYktpdCg/IS4qU2FmYXJpKS9pO2Z1bmN0aW9uIHMoZSx0KXt2YXIgbj17fTtyZXR1cm4gT2JqZWN0LmtleXModCkuZm9yRWFjaChmdW5jdGlvbihyKXt2YXIgbyxpLGEsYz10W3JdLGQ9ZVtyXXx8ZSx1PXR5cGVvZiBkLGY9XCJzdHJpbmdcIj09PXU7aWYoZnx8XCJvYmplY3RcIj09PXV8fFwidW5kZWZpbmVkXCI9PT1kKXtpZihmKW89ZCxpPVwiYm9vbGVhblwiPT10eXBlb2YoYT1jKT9hPzE6MDpcIm51bWJlclwiPT10eXBlb2YgYSYmaXNGaW5pdGUoYSk/YS50b1N0cmluZygzNik6YTtlbHNle3ZhciBsPWQuX19lbmNvZGluZ19za2lwX18scD1kLl9fZW5jb2RpbmdfY29uZmlnX18sbT1kLl9fZW5jb2RpbmdfZm5fXztpZighbCYmIXAmJiFlKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZW5jb2RpbmcgbWFwXCIpO289bD9yOmQuX19lbmNvZGluZ19rZXlfXyxpPXA/cyhwLGMpOm0/bShjKTpjfW8mJihuW1wiXCIrb109aSl9fSksbn1mdW5jdGlvbiBkKCl7aWYoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh3aW5kb3csXCJQZXJmb3JtYW5jZU9ic2VydmVyXCIpKXJldHVybiExO3RyeXt2YXIgZT1uZXcgd2luZG93LlBlcmZvcm1hbmNlT2JzZXJ2ZXIoZnVuY3Rpb24oKXtyZXR1cm4gbnVsbH0pO2Uub2JzZXJ2ZSh7ZW50cnlUeXBlczpbbi5NYXJrXX0pLGUuZGlzY29ubmVjdCgpfWNhdGNoKGUpe3JldHVybiExfXJldHVybiEwfWZ1bmN0aW9uIHUoKXt2YXIgZTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZihudWxsPT0oZT13aW5kb3cubmF2aWdhdG9yKT92b2lkIDA6ZS5zZW5kQmVhY29uKSYmIWMudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCl9dmFyIGY9W107ZnVuY3Rpb24gbCgpe2YubGVuZ3RoJiYoZnVuY3Rpb24oZSx0KXtpZighdSgpfHwhbmF2aWdhdG9yLnNlbmRCZWFjb24oZSx0KSl7dmFyIG49bmV3IFhNTEh0dHBSZXF1ZXN0O24ub3BlbihcIlBPU1RcIixlLCEwKSxuLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIixcInRleHQvcGxhaW47Y2hhcnNldD1VVEYtOFwiKSxuLnNlbmQodCl9fShcIi9hcGkvMS9wZXJmb3JtYW5jZS9yZWNvcmRzXCIsSlNPTi5zdHJpbmdpZnkoZikpLGY9W10pfWZ1bmN0aW9uIHAoZSxuKXt2YXIgcjtpZighKHI9bj9zKG4sZSk6dCh7cmF3OiEwfSxlKSkpdGhyb3cgbmV3IEVycm9yKFwiRGF0YSBpcyBlbXB0eVwiKTtmLnB1c2gocil9dmFyIG0sdixnPWZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbigpe2UmJmUuYXBwbHkodm9pZCAwLFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSl9fSx3PWZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cztyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24obixyKXt0cnl7ZS5hcHBseSh2b2lkIDAsW2Z1bmN0aW9uKGUpe24oZSl9XS5jb25jYXQoW10uc2xpY2UuY2FsbCh0KSkpfWNhdGNoKGUpe3IoZSl9fSl9fSxoPWZ1bmN0aW9uKGUpe3JldHVybiB3KHNldFRpbWVvdXQpKGUpfSx5PWZ1bmN0aW9uKCl7cmV0dXJuIHcoZnVuY3Rpb24oZSl7dmFyIHQ9ZnVuY3Rpb24gdChuKXtcInBhZ2VoaWRlXCIhPT1uLnR5cGUmJlwiaGlkZGVuXCIhPT1kb2N1bWVudC52aXNpYmlsaXR5U3RhdGV8fChlKG4pLHJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsdCwhMCkscmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBhZ2VoaWRlXCIsdCwhMCkpfTt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIix0LCEwKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBhZ2VoaWRlXCIsdCwhMCl9KSgpfSxfPWZ1bmN0aW9uKGUpe1wiY29tcGxldGVcIj09PWRvY3VtZW50LnJlYWR5U3RhdGU/d2luZG93LnNldFRpbWVvdXQoZSwwKTp3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBhZ2VzaG93XCIsZSx7b25jZTohMH0pfSxFPWZ1bmN0aW9uKGUpe3RyeXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHcoXykpLnRoZW4oZnVuY3Rpb24oKXt2YXIgdD13aW5kb3cucGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5VHlwZShuLk5hdmlnYXRpb24pWzBdLHI9bnVsbCE9dD90OmZ1bmN0aW9uKCl7dmFyIGU9e2VudHJ5VHlwZTpuLk5hdmlnYXRpb24sc3RhcnRUaW1lOjB9LHQ9cGVyZm9ybWFuY2UudGltaW5nO2Zvcih2YXIgciBpbiB0KWlmKFwibmF2aWdhdGlvblN0YXJ0XCIhPT1yJiZcInRvSlNPTlwiIT09cil7dmFyIG89TWF0aC5tYXgodFtyXS10Lm5hdmlnYXRpb25TdGFydCwwKTtlW3JdPW99cmV0dXJuIGV9KCksbz1yW2VdO2lmKCEoXCJudW1iZXJcIiE9dHlwZW9mIG98fG88MCkpcmV0dXJuIE1hdGgucm91bmQobyl9KX1jYXRjaChlKXtyZXR1cm4gUHJvbWlzZS5yZWplY3QoZSl9fSxiPWZ1bmN0aW9uKGUsdCl7aWYoXCJudW1iZXJcIj09dHlwZW9mIGUmJlwibnVtYmVyXCI9PXR5cGVvZiB0JiZlPj10KXJldHVybiBlLXR9LFM9ZnVuY3Rpb24oZSl7cmV0dXJuIFByb21pc2UuYWxsKFtFKFwiZG9tYWluTG9va3VwRW5kXCIpLEUoXCJkb21haW5Mb29rdXBTdGFydFwiKV0pLnRoZW4oZnVuY3Rpb24odCl7ZSh7ZG9tYWluTG9va3VwOmIodFswXSx0WzFdKX0pfSl9LFA9ZnVuY3Rpb24oZSl7cmV0dXJuIFByb21pc2UuYWxsKFtFKFwiY29ubmVjdEVuZFwiKSxFKFwiY29ubmVjdFN0YXJ0XCIpXSkudGhlbihmdW5jdGlvbih0KXtlKHt0Y3BDb25uZWN0aW9uOmIodFswXSx0WzFdKX0pfSl9LEw9ZnVuY3Rpb24odCl7ZS5nZXRDTFMoZnVuY3Rpb24oZSl7dmFyIG47dCh7Y3VtdWxhdGl2ZUxheW91dFNoaWZ0Om51bGwhPShuPW51bGw9PWU/dm9pZCAwOmUudmFsdWUpP246dm9pZCAwfSl9KX0sVD1mdW5jdGlvbihlKXtyZXR1cm4gRShcImRlY29kZWRCb2R5U2l6ZVwiKS50aGVuKGZ1bmN0aW9uKHQpe2Uoe2RlY29kZWRCb2R5U2l6ZTp0fSl9KX0seD1mdW5jdGlvbihlKXtyZXR1cm4gRShcImRvbUNvbnRlbnRMb2FkZWRFdmVudEVuZFwiKS50aGVuKGZ1bmN0aW9uKHQpe2Uoe2RvbUNvbnRlbnRMb2FkZWRFdmVudEVuZDp0fSl9KX0sQz1mdW5jdGlvbihlKXtyZXR1cm4gRShcImRvbUNvbnRlbnRMb2FkZWRFdmVudFN0YXJ0XCIpLnRoZW4oZnVuY3Rpb24odCl7ZSh7ZG9tQ29udGVudExvYWRlZEV2ZW50U3RhcnQ6dH0pfSl9LE09ZnVuY3Rpb24oZSl7cmV0dXJuIEUoXCJlbmNvZGVkQm9keVNpemVcIikudGhlbihmdW5jdGlvbih0KXtlKHtlbmNvZGVkQm9keVNpemU6dH0pfSl9LE49ZnVuY3Rpb24odCl7ZS5nZXRGQ1AoZnVuY3Rpb24oZSl7dCh7Zmlyc3RDb250ZW50ZnVsUGFpbnQ6ZT9NYXRoLnJvdW5kKGUudmFsdWUpOnZvaWQgMH0pfSl9LGs9ZnVuY3Rpb24odCl7ZS5nZXRGSUQoZnVuY3Rpb24oZSl7dCh7Zmlyc3RJbnB1dERlbGF5OmU/TWF0aC5yb3VuZChlLnZhbHVlKTp2b2lkIDB9KX0pfSxJPWZ1bmN0aW9uKHQpe2UuZ2V0TENQKGZ1bmN0aW9uKGUpe3Qoe2xhcmdlc3RDb250ZW50ZnVsUGFpbnQ6ZT9NYXRoLnJvdW5kKGUudmFsdWUpOnZvaWQgMH0pfSl9LE89ZnVuY3Rpb24oZSl7cmV0dXJuIEUoXCJsb2FkRXZlbnRFbmRcIikudGhlbihmdW5jdGlvbih0KXtlKHtsb2FkRXZlbnRFbmQ6dH0pfSl9LEQ9ZnVuY3Rpb24oZSl7cmV0dXJuIEUoXCJsb2FkRXZlbnRTdGFydFwiKS50aGVuKGZ1bmN0aW9uKHQpe2Uoe2xvYWRFdmVudFN0YXJ0OnR9KX0pfSxSPWZ1bmN0aW9uKGUpe3JldHVybiBFKFwicmVzcG9uc2VTdGFydFwiKS50aGVuKGZ1bmN0aW9uKHQpe2Uoe3Jlc3BvbnNlU3RhcnQ6dH0pfSl9LEI9ZnVuY3Rpb24oZSl7cmV0dXJuIFByb21pc2UuYWxsKFtFKFwiY29ubmVjdEVuZFwiKSxFKFwic2VjdXJlQ29ubmVjdGlvblN0YXJ0XCIpXSkudGhlbihmdW5jdGlvbih0KXtlKHt0bHNOZWdvdGlhdGlvbjpiKHRbMF0sdFsxXSl9KX0pfSxBPXtfX3Byb3RvX186bnVsbCxnZXREb21haW5Mb29rdXA6UyxnZXRUY3BDb25uZWN0aW9uOlAsZ2V0Q3VtdWxhdGl2ZUxheW91dFNoaWZ0OkwsZ2V0RGVjb2RlZEJvZHlTaXplOlQsZ2V0RG9tQ29udGVudExvYWRlZEV2ZW50RW5kOngsZ2V0RG9tQ29udGVudExvYWRlZEV2ZW50U3RhcnQ6QyxnZXRFbmNvZGVkQm9keVNpemU6TSxnZXRGaXJzdENvbnRlbnRmdWxQYWludDpOLGdldEZpcnN0SW5wdXREZWxheTprLGdldExhcmdlc3RDb250ZW50ZnVsUGFpbnQ6SSxnZXRMb2FkRXZlbnRFbmQ6TyxnZXRMb2FkRXZlbnRTdGFydDpELGdldFJlc3BvbnNlU3RhcnQ6UixnZXRUbHNOZWdvdGlhdGlvbjpCfTtmdW5jdGlvbiBqKGUpe09iamVjdC52YWx1ZXMoQSkuZm9yRWFjaChmdW5jdGlvbih0KXt0cnl7dmFyIG49ZnVuY3Rpb24obixyKXt0cnl7dmFyIG89UHJvbWlzZS5yZXNvbHZlKHQoZSkpLnRoZW4oZnVuY3Rpb24oKXt9KX1jYXRjaChlKXtyZXR1cm4gcihlKX1yZXR1cm4gbyYmby50aGVuP28udGhlbih2b2lkIDAscik6b30oMCxmdW5jdGlvbihlKXt2YXIgdCxuO251bGw9PSh0PXdpbmRvdyl8fG51bGw9PShuPXQuU1FVQVJFU1BBQ0VfU0VOVFJZKXx8bnVsbD09bi5jYXB0dXJlRXhjZXB0aW9ufHxuLmNhcHR1cmVFeGNlcHRpb24oZSl9KTtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG4mJm4udGhlbj9uLnRoZW4oZnVuY3Rpb24oKXt9KTp2b2lkIDApfWNhdGNoKGUpe3JldHVybiBQcm9taXNlLnJlamVjdChlKX19KX1mdW5jdGlvbiBxKGUpe3ZhciB0PW5ldyBSZWdFeHAoXCIoXnwgKVwiK2UrXCI9KFteO10rKVwiKSxuPWRvY3VtZW50LmNvb2tpZS5tYXRjaCh0KTtyZXR1cm4gbj9uWzJdOlwiXCJ9ZnVuY3Rpb24gSChlKXt2YXIgdD17fTtmb3IodmFyIG4gaW4gZSlcImZ1bmN0aW9uXCIhPXR5cGVvZiBlW25dJiYodFtuXT1lW25dKTtyZXR1cm4gdH0hZnVuY3Rpb24oZSl7ZS5CZWFjb249XCJiZWFjb25cIixlLlhIUj1cInhoclwifShtfHwobT17fSkpO3ZhciB6PWZ1bmN0aW9uKGUpe3ZhciB0PWUuc3Bhbk5hbWUsbj1lLnRyYWNlcixyPWUuc3RhcnRUaW1lLG89ZS5zcGFuQXR0cmlidXRlcyxpPXZvaWQgMD09PW8/e306bzt2b2lkIDA9PT12JiYodj1uZXcgTWFwKTt2YXIgYT1uLnN0YXJ0U3Bhbih0LHtzdGFydFRpbWU6cn0pO2Euc2V0QXR0cmlidXRlcyhpKSx2LnNldCh0LGEpfSxGPWZ1bmN0aW9uKGUpe3ZhciB0PWUuc3Bhbk5hbWUsbj1lLnNwYW5BdHRyaWJ1dGVzLHI9dm9pZCAwPT09bj97fTpuO2lmKHZvaWQgMCE9PXYmJnYuaGFzKHQpKXt2YXIgbz12LmdldCh0KTtvLnNldEF0dHJpYnV0ZXMociksby5lbmQoKSx2LmRlbGV0ZSh0KX19LFU9ZnVuY3Rpb24oZSl7dmFyIHQsbjtcImZ1bmN0aW9uXCI9PXR5cGVvZihudWxsPT0odD13aW5kb3cpfHxudWxsPT0obj10LlNRVUFSRVNQQUNFX1NFTlRSWSk/dm9pZCAwOm4uY2FwdHVyZUV4Y2VwdGlvbik/d2luZG93LlNRVUFSRVNQQUNFX1NFTlRSWS5jYXB0dXJlRXhjZXB0aW9uKGUpOmNvbnNvbGUud2FybihcIkBzcXMvcnVtLWNvbGxlY3RvcjogdXNlciB0aW1pbmcgZXhjZXB0aW9uOiBcIitlKX07ZnVuY3Rpb24gVygpe3JldHVybiBuLk1hcmsgaW4gd2luZG93LnBlcmZvcm1hbmNlJiZuLk1lYXN1cmUgaW4gd2luZG93LnBlcmZvcm1hbmNlfXZhciBYLEo9bmV3IFNldCxRPVtcInNlcnZlclRpbWluZ1wiLFwid29ya2VyVGltaW5nXCJdLFk9W1wibWVkaWEtd3d3LnNxc3BjZG4uY29tXCIsXCJpbWFnZXMuc3F1YXJlc3BhY2UtY2RuLmNvbVwiLFwic3RhdGljMS5zcXVhcmVzcGFjZS5jb21cIl0sWj1mdW5jdGlvbihjKXt0cnl7dmFyIHM9ZnVuY3Rpb24oZSl7cmV0dXJue2FwcE5hbWU6ZS5hcHBOYW1lfHxcIlwiLGNvbnRleHQ6ZS5jb250ZXh0fHx7fSxlbmFibGVkOlwiYm9vbGVhblwiIT10eXBlb2YgZS5lbmFibGVkfHxlLmVuYWJsZWQsY2FwdHVyZUV4Y2VwdGlvbjpnKGUuY2FwdHVyZUV4Y2VwdGlvbil9fShjKTtpZighcy5lbmFibGVkKXJldHVybiBQcm9taXNlLnJlc29sdmUoKTt2YXIgZj1cIlwiO3JldHVybiBQcm9taXNlLnJlc29sdmUoZnVuY3Rpb24oYyx2KXt0cnl7dmFyIGc9UHJvbWlzZS5yZXNvbHZlKG5ldyBQcm9taXNlKGZ1bmN0aW9uKGUsdCl7dmFyIG49bmV3IFhNTEh0dHBSZXF1ZXN0O24ub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7aWYobi5yZWFkeVN0YXRlPT09WE1MSHR0cFJlcXVlc3QuRE9ORSlpZigyMDA9PT1uLnN0YXR1cyl0cnl7ZShKU09OLnBhcnNlKG4ucmVzcG9uc2UpKX1jYXRjaChlKXt0KGUpfWVsc2UgMCE9PW4uc3RhdHVzJiZ0KG5ldyBFcnJvcihcIlhIUiByZXF1ZXN0IERPTkUgd2l0aCB1bmV4cGVjdGVkIHN0YXR1czogXCIrbi5zdGF0dXMpKX0sbi5vbnRpbWVvdXQ9ZnVuY3Rpb24oKXt0KG5ldyBFcnJvcihcIk1ldHJpYyBzZXR0aW5ncyByZXF1ZXN0IHRpbWVvdXRcIikpfSxuLm9wZW4oXCJHRVRcIixcIi9hcGkvMS9wZXJmb3JtYW5jZS9zZXR0aW5nc1wiLCEwKSxuLnRpbWVvdXQ9M2U0LG4uc2VuZCgpfSkpLnRoZW4oZnVuY3Rpb24oYyl7aWYoIShmPWMucGFnZUxvYWRJZCkpdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIHJlc29sdmUgcGFnZUxvYWRJZFwiKTt2YXIgdj1mdW5jdGlvbihlLHQpe3JldHVybiBmdW5jdGlvbihuLHIsbyl7cCh7YXBwOmUsZGF0YTpuLGV2ZW50OnIscGFnZUxvYWRJZDp0LHRzOkRhdGUubm93KCl9LG8pfX0ocy5hcHBOYW1lLGYpOyFmdW5jdGlvbihlLG4pe1Byb21pc2UucmVzb2x2ZShmdW5jdGlvbihlKXt0cnl7dmFyIG49ZnVuY3Rpb24oZSl7dmFyIHQsbixyLG8saSxhLGM7cmV0dXJuIHZvaWQgMD09PWUmJihlPXt9KSx7Y29udGV4dDplLGFuYWx5dGljc0lkOnEoXCJTU19BTkFMWVRJQ1NfSURcIiksbWFya2V0aW5nSWQ6cShcIlNTX01JRFwiKSxtZW1iZXJJZDpudWxsPT0odD13aW5kb3cuU3RhdGljKXx8bnVsbD09KG49dC5TUVVBUkVTUEFDRV9DT05URVhUKXx8bnVsbD09KHI9bi5hdXRoZW50aWNhdGVkQWNjb3VudCk/dm9pZCAwOnIuaWQsdmVyc2lvbjpcIjQuMy4wXCIsY29ubmVjdGlvbjp7ZG93bmxpbms6bnVsbD09KG89bmF2aWdhdG9yLmNvbm5lY3Rpb24pP3ZvaWQgMDpvLmRvd25saW5rLGVmZmVjdGl2ZVR5cGU6bnVsbD09KGk9bmF2aWdhdG9yLmNvbm5lY3Rpb24pP3ZvaWQgMDppLmVmZmVjdGl2ZVR5cGUscnR0Om51bGw9PShhPW5hdmlnYXRvci5jb25uZWN0aW9uKT92b2lkIDA6YS5ydHQsc2F2ZURhdGE6bnVsbD09KGM9bmF2aWdhdG9yLmNvbm5lY3Rpb24pP3ZvaWQgMDpjLnNhdmVEYXRhfSxkZWxpdmVyeVR5cGU6dSgpP20uQmVhY29uOm0uWEhSLGRpc3BsYXk6e2RldmljZVBpeGVsUmF0aW86d2luZG93LmRldmljZVBpeGVsUmF0aW8sc2NyZWVuSGVpZ2h0OndpbmRvdy5zY3JlZW4uaGVpZ2h0LHNjcmVlbldpZHRoOndpbmRvdy5zY3JlZW4ud2lkdGgsdmlld3BvcnRIZWlnaHQ6d2luZG93LmlubmVySGVpZ2h0LHZpZXdwb3J0V2lkdGg6d2luZG93LmlubmVyV2lkdGh9LGhhcmR3YXJlOntkZXZpY2VNZW1vcnk6bmF2aWdhdG9yLmRldmljZU1lbW9yeSxoYXJkd2FyZUNvbmN1cnJlbmN5Om5hdmlnYXRvci5oYXJkd2FyZUNvbmN1cnJlbmN5fSxoYXNoOndpbmRvdy5sb2NhdGlvbi5oYXNofHxcIlwiLGhvc3RuYW1lOndpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZXx8XCJcIixwYXRobmFtZTp3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV8fFwiL1wifX0oZSkscj17fTtyZXR1cm4gaihmdW5jdGlvbihlKXtPYmplY3QuYXNzaWduKHIsZSl9KSxQcm9taXNlLnJlc29sdmUoUHJvbWlzZS5yYWNlKFtoKDZlNCkseSgpXSkpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gdCh7fSxuLHIpfSl9Y2F0Y2goZSl7cmV0dXJuIFByb21pc2UucmVqZWN0KGUpfX0obikpLnRoZW4oZnVuY3Rpb24odCl7ZSh0LFwicGFnZV9zcGVlZFwiLHIobykpfSl9KHYscy5jb250ZXh0KSxmdW5jdGlvbihlKXtpZih3aW5kb3cuUGVyZm9ybWFuY2VNZWFzdXJlJiZ3aW5kb3cuUGVyZm9ybWFuY2VNYXJrKXt2YXIgdD1mdW5jdGlvbih0KXt0Lm1hcChIKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2lmKFwic3RyaW5nXCI9PXR5cGVvZihuPXQubmFtZSkmJlwicnVtLVwiPT09bi5zdWJzdHJpbmcoMCw0KSl7dmFyIG4sbz10Lm5hbWUrXCJ8XCIrdC5kdXJhdGlvbjtKLmhhcyhvKXx8KGUodCxcInVzZXJcIixyKGkpKSxKLmFkZChvKSl9fSl9O3Qod2luZG93LnBlcmZvcm1hbmNlLmdldEVudHJpZXNCeVR5cGUobi5NZWFzdXJlKSksZCgpP25ldyB3aW5kb3cuUGVyZm9ybWFuY2VPYnNlcnZlcihmdW5jdGlvbihlKXtyZXR1cm4gdChlLmdldEVudHJpZXMoKSl9KS5vYnNlcnZlKHtlbnRyeVR5cGVzOltuLk1lYXN1cmVdfSk6ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIixmdW5jdGlvbigpe1wiaGlkZGVuXCI9PT1kb2N1bWVudC52aXNpYmlsaXR5U3RhdGUmJnQod2luZG93LnBlcmZvcm1hbmNlLmdldEVudHJpZXNCeVR5cGUobi5NZWFzdXJlKSl9KX19KHYpLGZ1bmN0aW9uKHIpe3RyeXtpZighZCgpKXJldHVybiBQcm9taXNlLnJlc29sdmUoKTtYfHxlLmdldExDUChmdW5jdGlvbihlKXtYPW51bGw9PWU/dm9pZCAwOmUudmFsdWV9KTt2YXIgbz1uZXcgTWFwO2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbWdbZGF0YS1zcmNdXCIpLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNyY1wiKTtlIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCYmdCYmby5zZXQodCxlKX0pO3ZhciBpPWZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbihlKXt2YXIgbixyPWUucmVzb3VyY2Usbz1lLmRlbGl2ZXJNZXRyaWNzLGk9ZS5kb21JbWFnZXM7dHJ5e2lmKCEociBpbnN0YW5jZW9mIFBlcmZvcm1hbmNlUmVzb3VyY2VUaW1pbmcmJihuPXIubmFtZSxZLnNvbWUoZnVuY3Rpb24oZSl7cmV0dXJuIG4uaW5jbHVkZXMoZSl9KSkpKXJldHVybiBQcm9taXNlLnJlc29sdmUoKTt2YXIgYT1yLm5hbWUucmVwbGFjZSgvXFw/Zm9ybWF0PS4qLyxcIlwiKSxjPWkuZ2V0KGEpO3JldHVybiB2b2lkIDA9PT1jP1Byb21pc2UucmVzb2x2ZSgpOlByb21pc2UucmVzb2x2ZShmdW5jdGlvbihlLG4pe3RyeXtmb3IodmFyIHI9ZnVuY3Rpb24oZSl7dmFyIHQsbj1OdW1iZXIobnVsbD09KHQ9ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWltYWdlLXJlc29sdXRpb25cIikpP3ZvaWQgMDp0LnJlcGxhY2UoXCJ3XCIsXCJcIikpO2lmKCFOdW1iZXIuaXNOYU4obikpcmV0dXJuIG47dmFyIHI9ZS5zcmMuaW5kZXhPZihcImZvcm1hdD1cIik7aWYoLTE9PT1yKXJldHVybiBOYU47dmFyIG89ZS5zcmMuc2xpY2Uocis3KS5yZXBsYWNlKC93LiovLFwiXCIpO3JldHVybiBOdW1iZXIobyl9KG4pLG89bi5uYXR1cmFsV2lkdGgsaT1uLm5hdHVyYWxIZWlnaHQsYT1uLndpZHRoLGM9bi5oZWlnaHQscz12b2lkIDA9PT1YfHxlLnJlc3BvbnNlRW5kPFgsZD1mdW5jdGlvbihlLHQpe2lmKG51bGw9PWUpcmV0dXJue307dmFyIG4scixvPXt9LGk9T2JqZWN0LmtleXMoZSk7Zm9yKHI9MDtyPGkubGVuZ3RoO3IrKyl0LmluZGV4T2Yobj1pW3JdKT49MHx8KG9bbl09ZVtuXSk7cmV0dXJuIG99KGUudG9KU09OKCksUSksdT0wLGY9T2JqZWN0LmVudHJpZXMoZCk7dTxmLmxlbmd0aDt1Kyspe3ZhciBsPWZbdV0scD1sWzFdO1wibnVtYmVyXCI9PXR5cGVvZiBwJiYoZFtsWzBdXT1NYXRoLmZsb29yKHApKX12YXIgbT1uZXcgUHJvbWlzZShmdW5jdGlvbihlKXt2YXIgdT1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oZil7Zi5mb3JFYWNoKGZ1bmN0aW9uKGYpe2lmKGYudGFyZ2V0PT09bilyZXR1cm4gdS5kaXNjb25uZWN0KCksZSh0KHt2aXNpYmxlT25Mb2FkOmYuaXNJbnRlcnNlY3Rpbmcsb2JzZXJ2YXRpb25UaW1lOk1hdGguZmxvb3IoZi50aW1lKSxpbnRlcnNlY3Rpb25SYXRpbzpmLmludGVyc2VjdGlvblJhdGlvLHNxdWFyZXNwYWNlU2l6ZTpyLG5hdHVyYWxIZWlnaHQ6aSxuYXR1cmFsV2lkdGg6byxoZWlnaHQ6Yyx3aWR0aDphLGxvYWRlZEJlZm9yZUxDUDpzfSxkKSl9KX0pO3Uub2JzZXJ2ZShuKX0pO3JldHVybiBQcm9taXNlLnJlc29sdmUobSl9Y2F0Y2goZSl7cmV0dXJuIFByb21pc2UucmVqZWN0KGUpfX0ocixjKSkudGhlbihmdW5jdGlvbihlKXtvKGUsXCJpbWFnZVwiKX0pfWNhdGNoKGUpe3JldHVybiBQcm9taXNlLnJlamVjdChlKX19KHtyZXNvdXJjZTplLGRlbGl2ZXJNZXRyaWNzOnIsZG9tSW1hZ2VzOm99KX07cGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5VHlwZShuLlJlc291cmNlKS5mb3JFYWNoKGkpLG5ldyBQZXJmb3JtYW5jZU9ic2VydmVyKGZ1bmN0aW9uKGUpe2UuZ2V0RW50cmllcygpLmZvckVhY2goaSl9KS5vYnNlcnZlKHtlbnRyeVR5cGVzOltuLlJlc291cmNlXX0pLFByb21pc2UucmVzb2x2ZSgpfWNhdGNoKGUpe3JldHVybiBQcm9taXNlLnJlamVjdChlKX19KHYpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLGZ1bmN0aW9uKCl7YT13aW5kb3cuc2V0VGltZW91dChsLDNlNCl9KSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLGZ1bmN0aW9uKCl7XCJoaWRkZW5cIj09PWRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSYmKHdpbmRvdy5jbGVhclRpbWVvdXQoYSksbCgpKX0pfSl9Y2F0Y2goZSl7cmV0dXJuIHYoZSl9cmV0dXJuIGcmJmcudGhlbj9nLnRoZW4odm9pZCAwLHYpOmd9KDAsZnVuY3Rpb24oZSl7cy5jYXB0dXJlRXhjZXB0aW9uKGUse3BhZ2VMb2FkSWQ6ZixwYXJzZWRPcHRpb25zOnN9KX0pKX1jYXRjaChlKXtyZXR1cm4gUHJvbWlzZS5yZWplY3QoZSl9fSxHPXthY3Rpb246XCJsb2FkXCIsYWN0b3I6XCJ1c2VyXCIsZXZlbnRfb3duZXJfdGVhbTpcIndlYl9wZXJmb3JtYW5jZVwiLGV2ZW50X3NvdXJjZTpcIndlYlwiLG9iamVjdF90eXBlOlwid2Vic2l0ZVwifSxLPU9iamVjdC5mcmVlemUoe2N1bXVsYXRpdmVMYXlvdXRTaGlmdDpcImN1bXVsYXRpdmVfbGF5b3V0X3NoaWZ0XCIsZGVjb2RlZEJvZHlTaXplOlwiZGVjb2RlZF9ib2R5X3NpemVfYnl0ZXNcIixkb21Db250ZW50TG9hZGVkRXZlbnRFbmQ6XCJkb21fY29udGVudF9sb2FkZWRfZXZlbnRfZW5kX21zXCIsZG9tQ29udGVudExvYWRlZEV2ZW50U3RhcnQ6XCJkb21fY29udGVudF9sb2FkZWRfZXZlbnRfc3RhcnRfbXNcIixkb21haW5Mb29rdXA6XCJkb21haW5fbG9va3VwX21zXCIsZW5jb2RlZEJvZHlTaXplOlwiZW5jb2RlZF9ib2R5X3NpemVfYnl0ZXNcIixmaXJzdENvbnRlbnRmdWxQYWludDpcImZpcnN0X2NvbnRlbnRmdWxfcGFpbnRfbXNcIixmaXJzdElucHV0RGVsYXk6XCJmaXJzdF9pbnB1dF9kZWxheV9tc1wiLGxhcmdlc3RDb250ZW50ZnVsUGFpbnQ6XCJsYXJnZXN0X2NvbnRlbnRmdWxfcGFpbnRfbXNcIixsb2FkRXZlbnRFbmQ6XCJsb2FkX2V2ZW50X2VuZF9tc1wiLGxvYWRFdmVudFN0YXJ0OlwibG9hZF9ldmVudF9zdGFydF9tc1wiLHJlc3BvbnNlU3RhcnQ6XCJyZXNwb25zZV9zdGFydF9tc1wiLHRjcENvbm5lY3Rpb246XCJ0Y3BfY29ubmVjdGlvbl9tc1wiLHRsc05lZ290aWF0aW9uOlwidGxzX25lZ290aWF0aW9uX21zXCJ9KTtleHBvcnRzLlJVTV9QUkVGSVg9XCJydW0tXCIsZXhwb3J0cy5kZWZhdWx0PWZ1bmN0aW9uKCl7cmV0dXJuIGNvbnNvbGUud2FybihcIkBzcXMvcnVtLWNvbGxlY3RvciBkZWZhdWx0IGV4cG9ydCBpcyBkZXByZWNhdGVkLiBVc2UgbmFtZWQgZXhwb3J0IGBpbml0YCBpbnN0ZWFkLlwiKSxaLmFwcGx5KHZvaWQgMCxbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpfSxleHBvcnRzLmdldEN1bXVsYXRpdmVMYXlvdXRTaGlmdD1MLGV4cG9ydHMuZ2V0RGVjb2RlZEJvZHlTaXplPVQsZXhwb3J0cy5nZXREb21Db250ZW50TG9hZGVkRXZlbnRFbmQ9eCxleHBvcnRzLmdldERvbUNvbnRlbnRMb2FkZWRFdmVudFN0YXJ0PUMsZXhwb3J0cy5nZXREb21haW5Mb29rdXA9UyxleHBvcnRzLmdldEVuY29kZWRCb2R5U2l6ZT1NLGV4cG9ydHMuZ2V0Rmlyc3RDb250ZW50ZnVsUGFpbnQ9TixleHBvcnRzLmdldEZpcnN0SW5wdXREZWxheT1rLGV4cG9ydHMuZ2V0TGFyZ2VzdENvbnRlbnRmdWxQYWludD1JLGV4cG9ydHMuZ2V0TG9hZEV2ZW50RW5kPU8sZXhwb3J0cy5nZXRMb2FkRXZlbnRTdGFydD1ELGV4cG9ydHMuZ2V0UGVyZm9ybWFuY2VNZXRyaWNzPWosZXhwb3J0cy5nZXRSZXNwb25zZVN0YXJ0PVIsZXhwb3J0cy5nZXRUY3BDb25uZWN0aW9uPVAsZXhwb3J0cy5nZXRUbHNOZWdvdGlhdGlvbj1CLGV4cG9ydHMuaW5pdD1aLGV4cG9ydHMubWFyaz1mdW5jdGlvbihlLHQpe3ZvaWQgMD09PXQmJih0PXt9KTt0cnl7aWYoIVcoKSlyZXR1cm47dmFyIHI9XCJydW0tXCIrZTtpZih3aW5kb3cucGVyZm9ybWFuY2UuY2xlYXJNYXJrcyhyKSx3aW5kb3cucGVyZm9ybWFuY2UubWFyayhyLHtkZXRhaWw6dC5kZXRhaWwsc3RhcnRUaW1lOnQuc3RhcnRUaW1lfSksdm9pZCAwIT09dC50cmFjZXIpe3ZhciBvPXdpbmRvdy5wZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlOYW1lKHIsbi5NYXJrKS5zbGljZSgtMSk7eih7c3Bhbk5hbWU6ZSx0cmFjZXI6dC50cmFjZXIsc3RhcnRUaW1lOm9bMF0uc3RhcnRUaW1lLHNwYW5BdHRyaWJ1dGVzOnQuc3BhbkF0dHJpYnV0ZXN9KX19Y2F0Y2goZSl7VShlKX19LGV4cG9ydHMubWVhc3VyZT1mdW5jdGlvbihlLHIpe3ZvaWQgMD09PXImJihyPXtyZXF1aXJlU3RhcnQ6ITF9KTt0cnl7aWYoIShXKCkmJlwicGVyZm9ybWFuY2VcImluIHdpbmRvdyYmXCJnZXRFbnRyaWVzXCJpbiB3aW5kb3cucGVyZm9ybWFuY2UmJlwiZ2V0RW50cmllc0J5VHlwZVwiaW4gd2luZG93LnBlcmZvcm1hbmNlJiZcImdldEVudHJpZXNCeU5hbWVcImluIHdpbmRvdy5wZXJmb3JtYW5jZSkpcmV0dXJuO3ZhciBvPVwicnVtLVwiK2UsaT17ZGV0YWlsOnIuZGV0YWlsLGR1cmF0aW9uOnIuZHVyYXRpb259O2lmKGkuc3RhcnQ9dm9pZCAwPT09ci5zdGFydD9vOlwic3RyaW5nXCI9PXR5cGVvZiByLnN0YXJ0P1wicnVtLVwiK3Iuc3RhcnQ6ci5zdGFydCxpLmVuZD1cInN0cmluZ1wiPT10eXBlb2Ygci5lbmQ/XCJydW0tXCIrci5lbmQ6ci5lbmQsci5yZXF1aXJlU3RhcnQmJihcIm51bWJlclwiPT10eXBlb2YgaS5zdGFydHx8MD09PXdpbmRvdy5wZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlOYW1lKGkuc3RhcnQsbi5NYXJrKS5sZW5ndGgpKXJldHVybjtpZih2b2lkIDAhPT1yLnRyYWNlcil7dmFyIGE9dCh7bWVhc3VyZU5hbWU6b30sci5zcGFuQXR0cmlidXRlcyk7XCJudW1iZXJcIj09dHlwZW9mIGkuc3RhcnQ/KHooe3NwYW5OYW1lOm8sdHJhY2VyOnIudHJhY2VyLHN0YXJ0VGltZTppLnN0YXJ0fSksRih7c3Bhbk5hbWU6byxzcGFuQXR0cmlidXRlczphfSkpOigwPT09d2luZG93LnBlcmZvcm1hbmNlLmdldEVudHJpZXNCeU5hbWUoaS5zdGFydCxuLk1hcmspLmxlbmd0aCYmeih7c3Bhbk5hbWU6aS5zdGFydCx0cmFjZXI6ci50cmFjZXIsc3RhcnRUaW1lOjB9KSxGKHtzcGFuTmFtZTppLnN0YXJ0LHNwYW5BdHRyaWJ1dGVzOmF9KSl9IWZ1bmN0aW9uKGUsdCl7dHJ5e3dpbmRvdy5wZXJmb3JtYW5jZS5tZWFzdXJlKGUsdCl9Y2F0Y2gobyl7dmFyIG49XCJzdHJpbmdcIj09dHlwZW9mIHQuc3RhcnQ/dC5zdGFydDplLHI9XCJzdHJpbmdcIj09dHlwZW9mIHQuZW5kP3QuZW5kOnZvaWQgMDt0cnl7d2luZG93LnBlcmZvcm1hbmNlLm1lYXN1cmUoZSxuLHIpfWNhdGNoKHQpe2lmKCEodCBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbikpdGhyb3cgdDt0cnl7d2luZG93LnBlcmZvcm1hbmNlLm1lYXN1cmUoZSxcIm5hdmlnYXRpb25TdGFydFwiKX1jYXRjaCh0KXtpZighKHQgaW5zdGFuY2VvZiBET01FeGNlcHRpb24pKXRocm93IHQ7d2luZG93LnBlcmZvcm1hbmNlLm1lYXN1cmUoZSl9fX19KG8saSk7dmFyIGM9ZnVuY3Rpb24oZSl7dmFyIHQ9d2luZG93LnBlcmZvcm1hbmNlLmdldEVudHJpZXNCeU5hbWUoZSxuLk1lYXN1cmUpO3JldHVybiB0W3QubGVuZ3RoLTFdfShvKTtyZXR1cm4gY31jYXRjaChlKXtVKGUpfX0sZXhwb3J0cy50cmFja0V2ZW50c1YyRmFjdG9yeT1mdW5jdGlvbihlLHQpe3ZhciBuO3JldHVybiB2b2lkIDA9PT10JiYobj13aW5kb3cubG9jYXRpb24uaG9zdG5hbWUuc3Vic3RyKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5pbmRleE9mKFwiLlwiKSsxKSx0PS9ec3RhZ2Uuc3FzcC5uZXQvZy50ZXN0KG4pfHwvXnFhXFxkKy5zcXNwLm5ldC9nLnRlc3Qobik/XCJzdGFnaW5nXCI6LyhkZXYuc3F1YXJlc3BhY2UubmV0fGxvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMCkvZy50ZXN0KG4pP1wiZGV2XCI6XCJwcm9kXCIpLG5ldyBlKHtjdXN0b21TY2hlbWFOYW1lOlwiUGVyZm9ybWFuY2VcIixzb3VyY2VFbnZpcm9ubWVudDp0fSxHKX0sZXhwb3J0cy50cmFja0xvYWRQZXJmb3JtYW5jZT1mdW5jdGlvbihlKXt0cnl7dmFyIHQ9e307cmV0dXJuIGooZnVuY3Rpb24oZSl7T2JqZWN0LmVudHJpZXMoZSkuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgbj1lWzBdLHI9ZVsxXTtPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoSyxuKSYmKHRbS1tuXV09cil9KX0pLFByb21pc2UucmVzb2x2ZShQcm9taXNlLnJhY2UoW2goNmU0KSx5KCldKSkudGhlbihmdW5jdGlvbigpe2UodCl9KX1jYXRjaChlKXtyZXR1cm4gUHJvbWlzZS5yZWplY3QoZSl9fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJ1bS1jb2xsZWN0b3IuanMubWFwXG5cbiIsImltcG9ydCB7IEh1YiBhcyBTZW50cnkgfSBmcm9tICdAc2VudHJ5L3R5cGVzJztcblxuLyoqXG4gKiBleHBvcnRzIGNhcHR1cmUgbWV0aG9kcyBmcm9tIHRoZSBzZW50cnkvYnJvd3NlciBnbG9iYWwgY29uc3RhbnQgd2hpY2ggaXMgZGVmaW5lZCBpbiAnZXJyb3ItcmVwb3J0ZXIvaW5kZXguanMnXG4gKiBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9Ac2VudHJ5L3JlYWN0XG4gKlxuICogRElTQ0xBSU1FUjpcbiAqIGlmIHRoZSBIVE1MIHBhZ2UgZG9lcyBub3QgaW1wb3J0IHtyb2xsdXAtZXJyb3ItcmVwb3J0ZXJ9LCBTUVVBUkVTUEFDRV9TRU5UUlkgd2lsbCBiZSB1bmRlZmluZWRcbiAqIGFuZCB0aGUgJ2NhcHR1cmUnIG1ldGhvZHMgd2lsbCBsb2cgdG8gdGhlIGNvbnNvbGUsIHJlZ2FyZGxlc3Mgb2YgdGhlIGVudmlyb25tZW50XG4gKiBTZWUgJ3NyYy9tYWluL3dlYmFwcC90ZW1wbGF0ZXMtdjYvY29uZmlnL2NvbmZpZy1jb3Zlci1wYWdlLmh0bWwnIGFzIGFuIGV4YW1wbGUgb2YgYWRkaW5nIHRoZSByb2xsdXBcbiAqL1xuXG5sZXQgY2FwdHVyZU1lc3NhZ2U6IFNlbnRyeVsnY2FwdHVyZU1lc3NhZ2UnXSxcbiAgY2FwdHVyZUV4Y2VwdGlvbjogU2VudHJ5WydjYXB0dXJlRXhjZXB0aW9uJ10sXG4gIGNhcHR1cmVFdmVudDogU2VudHJ5WydjYXB0dXJlRXZlbnQnXSxcbiAgY29uZmlndXJlU2NvcGU6IFNlbnRyeVsnY29uZmlndXJlU2NvcGUnXSxcbiAgd2l0aFNjb3BlOiBTZW50cnlbJ3dpdGhTY29wZSddO1xuXG5jb25zdCBsb2dUb0NvbnNvbGUgPSAobWVzc2FnZTogYW55LCAuLi5hcmdzOiBhbnlbXSkgPT4ge1xuICBjb25zb2xlLmxvZyhgW1NlbnRyeV0gJHttZXNzYWdlfWAsIC4uLmFyZ3MpO1xuICByZXR1cm4gJ3NvbWUtZXJyb3ItaWRlbnRpZmllcic7XG59O1xuXG5sZXQgaXNTZW50cnlDb25uZWN0ZWQgPSBmYWxzZTtcblxuaWYgKHdpbmRvdy5TUVVBUkVTUEFDRV9TRU5UUlkpIHtcbiAgaXNTZW50cnlDb25uZWN0ZWQgPSB0cnVlO1xuICBjYXB0dXJlTWVzc2FnZSA9IHdpbmRvdy5TUVVBUkVTUEFDRV9TRU5UUlkuY2FwdHVyZU1lc3NhZ2U7XG4gIGNhcHR1cmVFeGNlcHRpb24gPSB3aW5kb3cuU1FVQVJFU1BBQ0VfU0VOVFJZLmNhcHR1cmVFeGNlcHRpb247XG4gIGNhcHR1cmVFdmVudCA9IHdpbmRvdy5TUVVBUkVTUEFDRV9TRU5UUlkuY2FwdHVyZUV2ZW50O1xuICBjb25maWd1cmVTY29wZSA9IHdpbmRvdy5TUVVBUkVTUEFDRV9TRU5UUlkuY29uZmlndXJlU2NvcGU7XG4gIHdpdGhTY29wZSA9IHdpbmRvdy5TUVVBUkVTUEFDRV9TRU5UUlkud2l0aFNjb3BlO1xufSBlbHNlIHtcbiAgY29uc29sZS53YXJuKCdTRU5UUlkgV0FTIF9fTk9UX18gSU5JVElBTElaRUQuIExvZ3Mgd2lsbCBiZSBmb3J3YXJkZWQgdG8gY29uc29sZSBpbnN0ZWFkLicpO1xuICBjYXB0dXJlTWVzc2FnZSA9IGxvZ1RvQ29uc29sZTtcbiAgY2FwdHVyZUV4Y2VwdGlvbiA9IGxvZ1RvQ29uc29sZTtcbiAgY2FwdHVyZUV2ZW50ID0gbG9nVG9Db25zb2xlO1xuICBjb25maWd1cmVTY29wZSA9ICgpID0+IHt9O1xuICB3aXRoU2NvcGUgPSAoKSA9PiB7fTtcbn1cblxuZXhwb3J0IHtcbiAgY2FwdHVyZU1lc3NhZ2UsXG4gIGNhcHR1cmVFeGNlcHRpb24sXG4gIGNhcHR1cmVFdmVudCxcbiAgY29uZmlndXJlU2NvcGUsXG4gIHdpdGhTY29wZSxcbiAgaXNTZW50cnlDb25uZWN0ZWQsXG59O1xuIiwidmFyIGUsdCxuLGksYT1mdW5jdGlvbihlLHQpe3JldHVybntuYW1lOmUsdmFsdWU6dm9pZCAwPT09dD8tMTp0LGRlbHRhOjAsZW50cmllczpbXSxpZDpcInYxLVwiLmNvbmNhdChEYXRlLm5vdygpLFwiLVwiKS5jb25jYXQoTWF0aC5mbG9vcig4OTk5OTk5OTk5OTk5Kk1hdGgucmFuZG9tKCkpKzFlMTIpfX0scj1mdW5jdGlvbihlLHQpe3RyeXtpZihQZXJmb3JtYW5jZU9ic2VydmVyLnN1cHBvcnRlZEVudHJ5VHlwZXMuaW5jbHVkZXMoZSkpe2lmKFwiZmlyc3QtaW5wdXRcIj09PWUmJiEoXCJQZXJmb3JtYW5jZUV2ZW50VGltaW5nXCJpbiBzZWxmKSlyZXR1cm47dmFyIG49bmV3IFBlcmZvcm1hbmNlT2JzZXJ2ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiBlLmdldEVudHJpZXMoKS5tYXAodCl9KSk7cmV0dXJuIG4ub2JzZXJ2ZSh7dHlwZTplLGJ1ZmZlcmVkOiEwfSksbn19Y2F0Y2goZSl7fX0sbz1mdW5jdGlvbihlLHQpe3ZhciBuPWZ1bmN0aW9uIG4oaSl7XCJwYWdlaGlkZVwiIT09aS50eXBlJiZcImhpZGRlblwiIT09ZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlfHwoZShpKSx0JiYocmVtb3ZlRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIixuLCEwKSxyZW1vdmVFdmVudExpc3RlbmVyKFwicGFnZWhpZGVcIixuLCEwKSkpfTthZGRFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLG4sITApLGFkZEV2ZW50TGlzdGVuZXIoXCJwYWdlaGlkZVwiLG4sITApfSxjPWZ1bmN0aW9uKGUpe2FkZEV2ZW50TGlzdGVuZXIoXCJwYWdlc2hvd1wiLChmdW5jdGlvbih0KXt0LnBlcnNpc3RlZCYmZSh0KX0pLCEwKX0sdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBXZWFrU2V0P25ldyBXZWFrU2V0Om5ldyBTZXQsZj1mdW5jdGlvbihlLHQsbil7dmFyIGk7cmV0dXJuIGZ1bmN0aW9uKCl7dC52YWx1ZT49MCYmKG58fHUuaGFzKHQpfHxcImhpZGRlblwiPT09ZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlKSYmKHQuZGVsdGE9dC52YWx1ZS0oaXx8MCksKHQuZGVsdGF8fHZvaWQgMD09PWkpJiYoaT10LnZhbHVlLGUodCkpKX19LHM9ZnVuY3Rpb24oZSx0KXt2YXIgbixpPWEoXCJDTFNcIiwwKSx1PWZ1bmN0aW9uKGUpe2UuaGFkUmVjZW50SW5wdXR8fChpLnZhbHVlKz1lLnZhbHVlLGkuZW50cmllcy5wdXNoKGUpLG4oKSl9LHM9cihcImxheW91dC1zaGlmdFwiLHUpO3MmJihuPWYoZSxpLHQpLG8oKGZ1bmN0aW9uKCl7cy50YWtlUmVjb3JkcygpLm1hcCh1KSxuKCl9KSksYygoZnVuY3Rpb24oKXtpPWEoXCJDTFNcIiwwKSxuPWYoZSxpLHQpfSkpKX0sbT0tMSxwPWZ1bmN0aW9uKCl7cmV0dXJuXCJoaWRkZW5cIj09PWRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZT8wOjEvMH0sdj1mdW5jdGlvbigpe28oKGZ1bmN0aW9uKGUpe3ZhciB0PWUudGltZVN0YW1wO209dH0pLCEwKX0sZD1mdW5jdGlvbigpe3JldHVybiBtPDAmJihtPXAoKSx2KCksYygoZnVuY3Rpb24oKXtzZXRUaW1lb3V0KChmdW5jdGlvbigpe209cCgpLHYoKX0pLDApfSkpKSx7Z2V0IHRpbWVTdGFtcCgpe3JldHVybiBtfX19LGw9ZnVuY3Rpb24oZSx0KXt2YXIgbixpPWQoKSxvPWEoXCJGQ1BcIikscz1mdW5jdGlvbihlKXtcImZpcnN0LWNvbnRlbnRmdWwtcGFpbnRcIj09PWUubmFtZSYmKHAmJnAuZGlzY29ubmVjdCgpLGUuc3RhcnRUaW1lPGkudGltZVN0YW1wJiYoby52YWx1ZT1lLnN0YXJ0VGltZSxvLmVudHJpZXMucHVzaChlKSx1LmFkZChvKSxuKCkpKX0sbT1wZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlOYW1lKFwiZmlyc3QtY29udGVudGZ1bC1wYWludFwiKVswXSxwPW0/bnVsbDpyKFwicGFpbnRcIixzKTsobXx8cCkmJihuPWYoZSxvLHQpLG0mJnMobSksYygoZnVuY3Rpb24oaSl7bz1hKFwiRkNQXCIpLG49ZihlLG8sdCkscmVxdWVzdEFuaW1hdGlvbkZyYW1lKChmdW5jdGlvbigpe3JlcXVlc3RBbmltYXRpb25GcmFtZSgoZnVuY3Rpb24oKXtvLnZhbHVlPXBlcmZvcm1hbmNlLm5vdygpLWkudGltZVN0YW1wLHUuYWRkKG8pLG4oKX0pKX0pKX0pKSl9LGg9e3Bhc3NpdmU6ITAsY2FwdHVyZTohMH0sUz1uZXcgRGF0ZSx5PWZ1bmN0aW9uKGksYSl7ZXx8KGU9YSx0PWksbj1uZXcgRGF0ZSx3KHJlbW92ZUV2ZW50TGlzdGVuZXIpLGcoKSl9LGc9ZnVuY3Rpb24oKXtpZih0Pj0wJiZ0PG4tUyl7dmFyIGE9e2VudHJ5VHlwZTpcImZpcnN0LWlucHV0XCIsbmFtZTplLnR5cGUsdGFyZ2V0OmUudGFyZ2V0LGNhbmNlbGFibGU6ZS5jYW5jZWxhYmxlLHN0YXJ0VGltZTplLnRpbWVTdGFtcCxwcm9jZXNzaW5nU3RhcnQ6ZS50aW1lU3RhbXArdH07aS5mb3JFYWNoKChmdW5jdGlvbihlKXtlKGEpfSkpLGk9W119fSxFPWZ1bmN0aW9uKGUpe2lmKGUuY2FuY2VsYWJsZSl7dmFyIHQ9KGUudGltZVN0YW1wPjFlMTI/bmV3IERhdGU6cGVyZm9ybWFuY2Uubm93KCkpLWUudGltZVN0YW1wO1wicG9pbnRlcmRvd25cIj09ZS50eXBlP2Z1bmN0aW9uKGUsdCl7dmFyIG49ZnVuY3Rpb24oKXt5KGUsdCksYSgpfSxpPWZ1bmN0aW9uKCl7YSgpfSxhPWZ1bmN0aW9uKCl7cmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLG4saCkscmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIixpLGgpfTthZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsbixoKSxhZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLGksaCl9KHQsZSk6eSh0LGUpfX0sdz1mdW5jdGlvbihlKXtbXCJtb3VzZWRvd25cIixcImtleWRvd25cIixcInRvdWNoc3RhcnRcIixcInBvaW50ZXJkb3duXCJdLmZvckVhY2goKGZ1bmN0aW9uKHQpe3JldHVybiBlKHQsRSxoKX0pKX0sTD1mdW5jdGlvbihuLHMpe3ZhciBtLHA9ZCgpLHY9YShcIkZJRFwiKSxsPWZ1bmN0aW9uKGUpe2Uuc3RhcnRUaW1lPHAudGltZVN0YW1wJiYodi52YWx1ZT1lLnByb2Nlc3NpbmdTdGFydC1lLnN0YXJ0VGltZSx2LmVudHJpZXMucHVzaChlKSx1LmFkZCh2KSxtKCkpfSxoPXIoXCJmaXJzdC1pbnB1dFwiLGwpO209ZihuLHYscyksaCYmbygoZnVuY3Rpb24oKXtoLnRha2VSZWNvcmRzKCkubWFwKGwpLGguZGlzY29ubmVjdCgpfSksITApLGgmJmMoKGZ1bmN0aW9uKCl7dmFyIHI7dj1hKFwiRklEXCIpLG09ZihuLHYscyksaT1bXSx0PS0xLGU9bnVsbCx3KGFkZEV2ZW50TGlzdGVuZXIpLHI9bCxpLnB1c2gociksZygpfSkpfSxUPWZ1bmN0aW9uKGUsdCl7dmFyIG4saT1kKCkscz1hKFwiTENQXCIpLG09ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5zdGFydFRpbWU7dDxpLnRpbWVTdGFtcCYmKHMudmFsdWU9dCxzLmVudHJpZXMucHVzaChlKSksbigpfSxwPXIoXCJsYXJnZXN0LWNvbnRlbnRmdWwtcGFpbnRcIixtKTtpZihwKXtuPWYoZSxzLHQpO3ZhciB2PWZ1bmN0aW9uKCl7dS5oYXMocyl8fChwLnRha2VSZWNvcmRzKCkubWFwKG0pLHAuZGlzY29ubmVjdCgpLHUuYWRkKHMpLG4oKSl9O1tcImtleWRvd25cIixcImNsaWNrXCJdLmZvckVhY2goKGZ1bmN0aW9uKGUpe2FkZEV2ZW50TGlzdGVuZXIoZSx2LHtvbmNlOiEwLGNhcHR1cmU6ITB9KX0pKSxvKHYsITApLGMoKGZ1bmN0aW9uKGkpe3M9YShcIkxDUFwiKSxuPWYoZSxzLHQpLHJlcXVlc3RBbmltYXRpb25GcmFtZSgoZnVuY3Rpb24oKXtyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKGZ1bmN0aW9uKCl7cy52YWx1ZT1wZXJmb3JtYW5jZS5ub3coKS1pLnRpbWVTdGFtcCx1LmFkZChzKSxuKCl9KSl9KSl9KSl9fSxiPWZ1bmN0aW9uKGUpe3ZhciB0LG49YShcIlRURkJcIik7dD1mdW5jdGlvbigpe3RyeXt2YXIgdD1wZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlUeXBlKFwibmF2aWdhdGlvblwiKVswXXx8ZnVuY3Rpb24oKXt2YXIgZT1wZXJmb3JtYW5jZS50aW1pbmcsdD17ZW50cnlUeXBlOlwibmF2aWdhdGlvblwiLHN0YXJ0VGltZTowfTtmb3IodmFyIG4gaW4gZSlcIm5hdmlnYXRpb25TdGFydFwiIT09biYmXCJ0b0pTT05cIiE9PW4mJih0W25dPU1hdGgubWF4KGVbbl0tZS5uYXZpZ2F0aW9uU3RhcnQsMCkpO3JldHVybiB0fSgpO2lmKG4udmFsdWU9bi5kZWx0YT10LnJlc3BvbnNlU3RhcnQsbi52YWx1ZTwwKXJldHVybjtuLmVudHJpZXM9W3RdLGUobil9Y2F0Y2goZSl7fX0sXCJjb21wbGV0ZVwiPT09ZG9jdW1lbnQucmVhZHlTdGF0ZT9zZXRUaW1lb3V0KHQsMCk6YWRkRXZlbnRMaXN0ZW5lcihcInBhZ2VzaG93XCIsdCl9O2V4cG9ydHtzIGFzIGdldENMUyxsIGFzIGdldEZDUCxMIGFzIGdldEZJRCxUIGFzIGdldExDUCxiIGFzIGdldFRURkJ9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxuLyogRmlsZSBnZW5lcmF0ZWQgYnkgSmF2YVNjcmlwdEVudW1Qcm9jZXNzb3IgKi9cblxuLyogRGVyaXZlZCBmcm9tIEphdmEgY2xhc3MgY29tLnNxdWFyZXNwYWNlLnY2LnV0aWxzLmVudW1zLlBhZ2VUeXBlICovXG5cbi8qIEphdmEgY2xhc3MgZGVmaW5lZCBpbiByZXBvc2l0b3J5IHNxdWFyZXNwYWNlLXY2ICovXG52YXIgUGFnZVR5cGVzO1xuXG4oZnVuY3Rpb24gKFBhZ2VUeXBlcykge1xuICBQYWdlVHlwZXNbXCJNQUlOX0NPTlRFTlRcIl0gPSAxO1xuICBQYWdlVHlwZXNbXCJDT05URU5UX0NPTExFQ1RJT05cIl0gPSAxO1xuICBQYWdlVHlwZXNbXCJQQUdFXCJdID0gMjtcbiAgUGFnZVR5cGVzW1wiU1BMQVNIX1BBR0VcIl0gPSAzO1xuICBQYWdlVHlwZXNbXCJDT05URU5UX0lURU1cIl0gPSA1MDtcbiAgUGFnZVR5cGVzW1wiTk9UX0ZPVU5EXCJdID0gMTAwO1xuICBQYWdlVHlwZXNbXCJFUlJPUlwiXSA9IDEwMTtcbiAgUGFnZVR5cGVzW1wiU0VBUkNIXCJdID0gMTAyO1xuICBQYWdlVHlwZXNbXCJMT0NLX1NDUkVFTlwiXSA9IDEwMztcbiAgUGFnZVR5cGVzW1wiUE9QVVBfT1ZFUkxBWVwiXSA9IDEwNDtcbiAgUGFnZVR5cGVzW1wiUFJPVEVDVEVEX0NPTlRFTlRcIl0gPSAxMDU7XG4gIFBhZ2VUeXBlc1tcIk1FTUJFUl9BUkVBX0FDQ0VTU19ERU5JRURcIl0gPSAxMDY7XG4gIFBhZ2VUeXBlc1tcIlNIT1dfQ0FSVFwiXSA9IDIwMDtcbiAgUGFnZVR5cGVzW1wiQ0hFQ0tPVVRcIl0gPSAyMDE7XG4gIFBhZ2VUeXBlc1tcIk9SREVSX0NPTkZJUk1FRFwiXSA9IDIwMjtcbiAgUGFnZVR5cGVzW1wiRE9OQVRFXCJdID0gMjAzO1xuICBQYWdlVHlwZXNbXCJDT05UUklCVVRJT05fQ09ORklSTUVEXCJdID0gMjA0O1xuICBQYWdlVHlwZXNbXCJDT01NRVJDRV9DQVJUX1YyXCJdID0gMjA1O1xuICBQYWdlVHlwZXNbXCJTVUJTQ1JJUFRJT05fQ09ORklSTUVEXCJdID0gMjA2O1xuICBQYWdlVHlwZXNbXCJPUkRFUl9SRUNFSVZFRFwiXSA9IDIwNztcbiAgUGFnZVR5cGVzW1wiTUVNQkVSU0hJUF9DT05GSVJNRURcIl0gPSAyMDg7XG4gIFBhZ2VUeXBlc1tcIlJFVklFV1NfUkVRVUVTVFwiXSA9IDIwOTtcbiAgUGFnZVR5cGVzW1wiTkVXU0xFVFRFUl9VTlNVQlNDUklCRVwiXSA9IDMwMDtcbiAgUGFnZVR5cGVzW1wiQ09NTUVSQ0VfRU1BSUxfUFJFVklFV1wiXSA9IDMwMTtcbn0pKFBhZ2VUeXBlcyB8fCAoUGFnZVR5cGVzID0ge30pKTtcblxudmFyIF9kZWZhdWx0ID0gUGFnZVR5cGVzO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbi8qIEZpbGUgZ2VuZXJhdGVkIGJ5IEphdmFTY3JpcHRFbnVtUHJvY2Vzc29yICovXG5cbi8qIERlcml2ZWQgZnJvbSBKYXZhIGNsYXNzIGNvbS5zcXVhcmVzcGFjZS52Ni51dGlscy5lbnVtcy5TaXRlU3RhdHVzICovXG5cbi8qIEphdmEgY2xhc3MgZGVmaW5lZCBpbiByZXBvc2l0b3J5IHNxdWFyZXNwYWNlLXY2ICovXG52YXIgU3RhdHVzQ29uc3RhbnRzO1xuXG4oZnVuY3Rpb24gKFN0YXR1c0NvbnN0YW50cykge1xuICBTdGF0dXNDb25zdGFudHNbXCJFWFBJUkVEXCJdID0gMTtcbiAgU3RhdHVzQ29uc3RhbnRzW1wiUEFTVERVRVwiXSA9IDI7XG4gIFN0YXR1c0NvbnN0YW50c1tcIlRSSUFMXCJdID0gMztcbiAgU3RhdHVzQ29uc3RhbnRzW1wiQkVUQVwiXSA9IDQ7XG4gIFN0YXR1c0NvbnN0YW50c1tcIlJFTU9WRURcIl0gPSA1O1xuICBTdGF0dXNDb25zdGFudHNbXCJJTlRFUk5BTFwiXSA9IDY7XG4gIFN0YXR1c0NvbnN0YW50c1tcIkNPTVBFRFwiXSA9IDc7XG4gIFN0YXR1c0NvbnN0YW50c1tcIlBBSURcIl0gPSA4O1xuICBTdGF0dXNDb25zdGFudHNbXCJWNV9MSU5LRURcIl0gPSAxMTtcbiAgU3RhdHVzQ29uc3RhbnRzW1wiQUNUSVZFX1BBUktJTkdfUEFHRVwiXSA9IDEyO1xuICBTdGF0dXNDb25zdGFudHNbXCJSRVNPTERcIl0gPSAxMztcbiAgU3RhdHVzQ29uc3RhbnRzW1wiUkVTT0xEX0dSQUNFX1BFUklPRFwiXSA9IDE0O1xuICBTdGF0dXNDb25zdGFudHNbXCJFTlRFUlBSSVNFXCJdID0gMTU7XG59KShTdGF0dXNDb25zdGFudHMgfHwgKFN0YXR1c0NvbnN0YW50cyA9IHt9KSk7XG5cbnZhciBfZGVmYXVsdCA9IFN0YXR1c0NvbnN0YW50cztcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBUaGlzIHNjcmlwdCB3aWxsIGJlIGluY2x1ZGVkIG9uIEFMTCB1c2VyIHNpdGVzIGFuZCAvY29uZmlnXG5cbi8vIEkgYmVsaWV2ZSB0aGlzIGlzIGFsd2F5cyBvbiBhIHBhZ2Ugd2l0aCBjb21tb24sIGFuZCBzbyBpbmhlcml0cyB0aGUgcG9seWZpbGxzLlxuLy8gYnV0IHdvZSB0byBrZWVwaW5nIHRoaXMgaW5zeW5jLlxuaW1wb3J0IHsgaW5pdCBhcyBydW1Db2xsZWN0b3IgfSBmcm9tICdAc3FzL3J1bS1jb2xsZWN0b3InO1xuaW1wb3J0IFN0YXR1c0NvbnN0YW50cyBmcm9tICdAc3FzL2VudW1zL1N0YXR1c0NvbnN0YW50cyc7XG5pbXBvcnQgUGFnZVR5cGVzIGZyb20gJ0BzcXMvZW51bXMvUGFnZVR5cGVzJztcblxuaW1wb3J0IHtcbiAgY2FwdHVyZUV4Y2VwdGlvbixcbiAgd2l0aFNjb3BlXG59IGZyb20gJ3NoYXJlZC91dGlscy9lcnJvci1yZXBvcnRlci9nbG9iYWwtc2VudHJ5JztcblxuY29uc3QgY29udGV4dCA9IHdpbmRvdy5TdGF0aWMgJiYgd2luZG93LlN0YXRpYy5TUVVBUkVTUEFDRV9DT05URVhUO1xuY29uc3QgaW5GcmFtZSA9IHdpbmRvdy50b3AgIT09IHdpbmRvdztcblxuLy8gV2hpdGVsaXN0IGFwcHJvYWNoIHRvIHJlZ2lzdGVyIGFwcCBuYW1lIGJhc2VkIG9uIFBhZ2VUeXBlcyBlbnVtIHZhbHVlcy5cbmNvbnN0IFBhZ2VUeXBlVG9BcHBOYW1lTWFwID0gT2JqZWN0LmZyZWV6ZSh7XG4gIFtQYWdlVHlwZXMuQ09NTUVSQ0VfQ0FSVF9WMl06ICdjb21tZXJjZS1jYXJ0J1xufSk7XG5cbmZ1bmN0aW9uIGlzSW5Db25maWcoKSB7XG4gIGNvbnN0IHdpbmRvd1BhdGhuYW1lID0gKHdpbmRvdy5sb2NhdGlvbiAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpIHx8ICcnO1xuICByZXR1cm4gIWluRnJhbWUgJiYgL15cXC9jb25maWcoXFwvLiopPyQvLnRlc3Qod2luZG93UGF0aG5hbWUpO1xufVxuXG4vKiogQWxsIGNvbnRleHQgdmFsdWVzIHNoYXJlZCBiZXR3ZWVuIC9jb25maWcgYW5kIHVuYXV0aGVudGljYXRlZCBzaXRlIHZpc2l0b3JzICovXG5mdW5jdGlvbiBnZXRTaGFyZWRDb250ZXh0KCkge1xuICByZXR1cm4ge1xuICAgIGluRnJhbWUsXG4gICAgdGVtcGxhdGVJZDogY29udGV4dC50ZW1wbGF0ZUlkIHx8ICcnLFxuICAgIGltcGVyc29uYXRlZFNlc3Npb246ICEhY29udGV4dC5pbXBlcnNvbmF0ZWRTZXNzaW9uLFxuICAgIHBhZ2VUeXBlOiB0eXBlb2YgY29udGV4dC5wYWdlVHlwZSA9PT0gJ251bWJlcicgPyBjb250ZXh0LnBhZ2VUeXBlIDogLTFcbiAgfTtcbn1cblxuLyoqIEFsbCBjb250ZXh0IHVuZGVyIHRoZSBgU1FVQVJFU1BBQ0VfQ09OVEVYVGAud2Vic2l0ZSBrZXkgKi9cbmZ1bmN0aW9uIGdldFdlYnNpdGVDb250ZXh0KCkge1xuICBjb25zdCB7IHdlYnNpdGUgPSB7fSB9ID0gY29udGV4dDtcblxuICByZXR1cm4ge1xuICAgIGF1dGhlbnRpY1VybDogd2Vic2l0ZS5hdXRoZW50aWNVcmwgfHwgJycsXG4gICAgY2xvbmVhYmxlOiAhIXdlYnNpdGUuY2xvbmVhYmxlLFxuICAgIGRldmVsb3Blck1vZGU6ICEhd2Vic2l0ZS5kZXZlbG9wZXJNb2RlLFxuICAgIGlzSHN0c0VuYWJsZWQ6ICEhd2Vic2l0ZS5pc0hzdHNFbmFibGVkLFxuICAgIGxhbmd1YWdlOiB3ZWJzaXRlLmxhbmd1YWdlIHx8ICcnLFxuICAgIHRpbWVab25lOiB3ZWJzaXRlLnRpbWVab25lIHx8ICcnLFxuICAgIHdlYnNpdGVJZDogd2Vic2l0ZS5pZCB8fCAnJyxcbiAgICB3ZWJzaXRlVHlwZTogd2Vic2l0ZS53ZWJzaXRlVHlwZSB8fCAtMVxuICB9O1xufVxuXG4vKiogQWxsIGNvbnRleHQgdW5kZXIgdGhlIGBTUVVBUkVTUEFDRV9DT05URVhULndlYnNpdGVTZXR0aW5nc2Aga2V5ICovXG5mdW5jdGlvbiBnZXRXZWJzaXRlU2V0dGluZ3NDb250ZXh0KCkge1xuICBjb25zdCB7IHdlYnNpdGVTZXR0aW5ncyA9IHt9IH0gPSBjb250ZXh0O1xuXG4gIHJldHVybiB7XG4gICAgYW1wRW5hYmxlZDogISF3ZWJzaXRlU2V0dGluZ3MuYW1wRW5hYmxlZFxuICB9O1xufVxuXG4vKiogQWxsIGNvbnRleHQgdW5kZXIgdGhlIGBTUVVBUkVTUEFDRV9DT05URVhULmNvbGxlY3Rpb25gIGtleSAqL1xuZnVuY3Rpb24gZ2V0Q29sbGVjdGlvbkNvbnRleHQoKSB7XG4gIGNvbnN0IHsgY29sbGVjdGlvbiA9IHt9IH0gPSBjb250ZXh0O1xuXG4gIHJldHVybiB7XG4gICAgY29sbGVjdGlvblR5cGU6IGNvbGxlY3Rpb24udHlwZSB8fCAtMVxuICB9O1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIHNpdGUgd2FzIGJ1aWx0IG9uIFNxdWFyZXNwYWNlIDhcbiAqXG4gKiA4IGN1cnJlbnRseSBkb2VzIG5vdCBzaGlwIHdpdGggYSBgdGVtcGxhdGVWZXJzaW9uYCB2YWx1ZSBpbiB0aGUgY29udGV4dCB3aGVuIG5vdCBpbiBjb25maWcgbW9kZS5cbiAqIFRoaXMgdXNlcyB0aGUgYFNFQ1RJT05fQ09OVEVYVGAgdG8gSUQgOCBzaXRlcy4gSXQgbWF5IGJlIHJlbW92YWJsZSBpbiB0aGUgZnV0dXJlLlxuICogOCBKYW4gMjAyMCBAY2VsbGlzb25cbiAqL1xuZnVuY3Rpb24gaXNVc2VyU2l0ZUVpZ2h0KCkge1xuICByZXR1cm4gd2luZG93LlNxdWFyZXNwYWNlICYmICdTRUNUSU9OX0NPTlRFWFQnIGluIHdpbmRvdy5TcXVhcmVzcGFjZTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBTcXVhcmVzcGFjZSB2ZXJzaW9uIG51bWJlciBvZiB0aGUgc2l0ZSBiZWluZyB2aWV3ZWQgb3IgZWRpdGVkXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gdGhlIHZlcnNpb24gbnVtYmVyLiByZXR1cm5zIGBudWxsYCBpZiB2ZXJzaW9uIHVua25vd25cbiAqL1xuZnVuY3Rpb24gZ2V0VmVyc2lvbk51bWJlcigpIHtcbiAgaWYgKGNvbnRleHQuaGFzT3duUHJvcGVydHkoJ3RlbXBsYXRlVmVyc2lvbicpKSB7XG4gICAgcmV0dXJuIGNvbnRleHQudGVtcGxhdGVWZXJzaW9uLnJlcGxhY2UoJy4nLCAnXycpO1xuICB9IGVsc2UgaWYgKGlzVXNlclNpdGVFaWdodCgpKSB7XG4gICAgcmV0dXJuICc4JztcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBvcHRpb25zIGZvciBpbml0aWFsaXppbmcgdGhlIFJVTSBjb2xsZWN0b3JcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmVyc2lvbiB0aGUgU3F1YXJlc3BhY2UgdmVyc2lvblxuICogQHJldHVybnMge3VuZGVmaW5lZHxPYmplY3R9IHRoZSBjb25maWcgb3IgYHVuZGVmaW5lZGAgaWYgU3F1YXJlc3BhY2UgdmVyaXNvbiBpcyB1bmtub3duXG4gKi9cbmZ1bmN0aW9uIGdldENvbGxlY3Rvck9wdGlvbnModmVyc2lvbikge1xuICBjb25zdCBpc0NvbmZpZyA9IGlzSW5Db25maWcoKTtcbiAgY29uc3QgYXBwTmFtZUZvclBhZ2VUeXBlID0gUGFnZVR5cGVUb0FwcE5hbWVNYXBbY29udGV4dC5wYWdlVHlwZV07XG4gIGNvbnN0IHJ1bU9wdGlvbnMgPSB7XG4gICAgYXBwTmFtZTpcbiAgICAgIGFwcE5hbWVGb3JQYWdlVHlwZSB8fCBgdiR7dmVyc2lvbn0tJHtpc0NvbmZpZyA/ICdjb25maWcnIDogJ3VzZXItc2l0ZXMnfWAsXG4gICAgY29udGV4dDoge1xuICAgICAgLi4uZ2V0U2hhcmVkQ29udGV4dCgpLFxuICAgICAgLi4uZ2V0V2Vic2l0ZUNvbnRleHQoKSxcbiAgICAgIC4uLmdldFdlYnNpdGVTZXR0aW5nc0NvbnRleHQoKSxcbiAgICAgIC4uLmdldENvbGxlY3Rpb25Db250ZXh0KClcbiAgICB9LFxuICAgIGNhcHR1cmVFeGNlcHRpb246IChlcnJvciwgZXh0cmFzKSA9PiB7XG4gICAgICB3aXRoU2NvcGUoc2NvcGUgPT4ge1xuICAgICAgICBzY29wZS5zZXRUYWcoJ3Byb2plY3QnLCAncnVtLWNvbGxlY3RvcicpO1xuICAgICAgICBpZiAoZXh0cmFzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzY29wZS5zZXRFeHRyYSgnZXh0cmFzJywgZXh0cmFzKTtcbiAgICAgICAgfVxuICAgICAgICBjYXB0dXJlRXhjZXB0aW9uKGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBpZiAoaXNDb25maWcpIHtcbiAgICBjb25zdCBpc0ludGVybmFsID1cbiAgICAgIGNvbnRleHQud2Vic2l0ZS5zaXRlU3RhdHVzLnZhbHVlID09PSBTdGF0dXNDb25zdGFudHMuSU5URVJOQUw7XG4gICAgY29uc3QgeyBjcmVhdGVkT24sIGlkOiBtZW1iZXJJZCB9ID0gY29udGV4dC5hdXRoZW50aWNhdGVkQWNjb3VudDtcblxuICAgIHJ1bU9wdGlvbnMuY29udGV4dC5pc0ludGVybmFsID0gaXNJbnRlcm5hbDtcbiAgICBydW1PcHRpb25zLmNvbnRleHQuY3JlYXRlZE9uID0gY3JlYXRlZE9uO1xuICAgIHJ1bU9wdGlvbnMuY29udGV4dC5tZW1iZXJJZCA9IG1lbWJlcklkO1xuICB9XG4gIHJldHVybiBydW1PcHRpb25zO1xufVxuXG5mdW5jdGlvbiBib290c3RyYXAoKSB7XG4gIGlmICghX19ERVZfXyAmJiBjb250ZXh0KSB7XG4gICAgY29uc3QgdmVyc2lvbiA9IGdldFZlcnNpb25OdW1iZXIoKTtcbiAgICBpZiAodmVyc2lvbiA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBydW1PcHRpb25zID0gZ2V0Q29sbGVjdG9yT3B0aW9ucyh2ZXJzaW9uKTtcbiAgICBydW1Db2xsZWN0b3IocnVtT3B0aW9ucyk7XG4gIH1cbn1cblxuYm9vdHN0cmFwKCk7XG4iXSwibmFtZXMiOlsiY2FwdHVyZU1lc3NhZ2UiLCJjYXB0dXJlRXhjZXB0aW9uIiwiY2FwdHVyZUV2ZW50IiwiY29uZmlndXJlU2NvcGUiLCJ3aXRoU2NvcGUiLCJsb2dUb0NvbnNvbGUiLCJtZXNzYWdlIiwiYXJncyIsImNvbnNvbGUiLCJsb2ciLCJpc1NlbnRyeUNvbm5lY3RlZCIsIndpbmRvdyIsIlNRVUFSRVNQQUNFX1NFTlRSWSIsIndhcm4iLCJjb250ZXh0IiwiU3RhdGljIiwiU1FVQVJFU1BBQ0VfQ09OVEVYVCIsImluRnJhbWUiLCJ0b3AiLCJQYWdlVHlwZVRvQXBwTmFtZU1hcCIsIk9iamVjdCIsImZyZWV6ZSIsIlBhZ2VUeXBlcyIsIkNPTU1FUkNFX0NBUlRfVjIiLCJpc0luQ29uZmlnIiwid2luZG93UGF0aG5hbWUiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwidGVzdCIsImdldFNoYXJlZENvbnRleHQiLCJ0ZW1wbGF0ZUlkIiwiaW1wZXJzb25hdGVkU2Vzc2lvbiIsInBhZ2VUeXBlIiwiZ2V0V2Vic2l0ZUNvbnRleHQiLCJ3ZWJzaXRlIiwiYXV0aGVudGljVXJsIiwiY2xvbmVhYmxlIiwiZGV2ZWxvcGVyTW9kZSIsImlzSHN0c0VuYWJsZWQiLCJsYW5ndWFnZSIsInRpbWVab25lIiwid2Vic2l0ZUlkIiwiaWQiLCJ3ZWJzaXRlVHlwZSIsImdldFdlYnNpdGVTZXR0aW5nc0NvbnRleHQiLCJ3ZWJzaXRlU2V0dGluZ3MiLCJhbXBFbmFibGVkIiwiZ2V0Q29sbGVjdGlvbkNvbnRleHQiLCJjb2xsZWN0aW9uIiwiY29sbGVjdGlvblR5cGUiLCJ0eXBlIiwiaXNVc2VyU2l0ZUVpZ2h0IiwiU3F1YXJlc3BhY2UiLCJnZXRWZXJzaW9uTnVtYmVyIiwiaGFzT3duUHJvcGVydHkiLCJ0ZW1wbGF0ZVZlcnNpb24iLCJyZXBsYWNlIiwiZ2V0Q29sbGVjdG9yT3B0aW9ucyIsInZlcnNpb24iLCJpc0NvbmZpZyIsImFwcE5hbWVGb3JQYWdlVHlwZSIsInJ1bU9wdGlvbnMiLCJhcHBOYW1lIiwiZXJyb3IiLCJleHRyYXMiLCJzY29wZSIsInNldFRhZyIsInVuZGVmaW5lZCIsInNldEV4dHJhIiwiaXNJbnRlcm5hbCIsInNpdGVTdGF0dXMiLCJ2YWx1ZSIsIlN0YXR1c0NvbnN0YW50cyIsIklOVEVSTkFMIiwiYXV0aGVudGljYXRlZEFjY291bnQiLCJjcmVhdGVkT24iLCJtZW1iZXJJZCIsImJvb3RzdHJhcCIsIl9fREVWX18iXSwic291cmNlUm9vdCI6IiJ9