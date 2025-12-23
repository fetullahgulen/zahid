(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Eh(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var mc={exports:{}},ys={},gc={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $r=Symbol.for("react.element"),Sh=Symbol.for("react.portal"),Ih=Symbol.for("react.fragment"),Ch=Symbol.for("react.strict_mode"),Th=Symbol.for("react.profiler"),xh=Symbol.for("react.provider"),Ph=Symbol.for("react.context"),Nh=Symbol.for("react.forward_ref"),Rh=Symbol.for("react.suspense"),Ah=Symbol.for("react.memo"),Oh=Symbol.for("react.lazy"),xl=Symbol.iterator;function Lh(t){return t===null||typeof t!="object"?null:(t=xl&&t[xl]||t["@@iterator"],typeof t=="function"?t:null)}var yc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vc=Object.assign,wc={};function Gn(t,e,n){this.props=t,this.context=e,this.refs=wc,this.updater=n||yc}Gn.prototype.isReactComponent={};Gn.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Gn.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function _c(){}_c.prototype=Gn.prototype;function wa(t,e,n){this.props=t,this.context=e,this.refs=wc,this.updater=n||yc}var _a=wa.prototype=new _c;_a.constructor=wa;vc(_a,Gn.prototype);_a.isPureReactComponent=!0;var Pl=Array.isArray,kc=Object.prototype.hasOwnProperty,ka={current:null},Ec={key:!0,ref:!0,__self:!0,__source:!0};function Sc(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)kc.call(e,r)&&!Ec.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:$r,type:t,key:s,ref:o,props:i,_owner:ka.current}}function Dh(t,e){return{$$typeof:$r,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ea(t){return typeof t=="object"&&t!==null&&t.$$typeof===$r}function Mh(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Nl=/\/+/g;function js(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Mh(""+t.key):e.toString(36)}function Si(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case $r:case Sh:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+js(o,0):r,Pl(i)?(n="",t!=null&&(n=t.replace(Nl,"$&/")+"/"),Si(i,e,n,"",function(u){return u})):i!=null&&(Ea(i)&&(i=Dh(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Nl,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Pl(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+js(s,a);o+=Si(s,e,n,l,i)}else if(l=Lh(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+js(s,a++),o+=Si(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ii(t,e,n){if(t==null)return t;var r=[],i=0;return Si(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Uh(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var fe={current:null},Ii={transition:null},zh={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Ii,ReactCurrentOwner:ka};function Ic(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:ii,forEach:function(t,e,n){ii(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ii(t,function(){e++}),e},toArray:function(t){return ii(t,function(e){return e})||[]},only:function(t){if(!Ea(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};L.Component=Gn;L.Fragment=Ih;L.Profiler=Th;L.PureComponent=wa;L.StrictMode=Ch;L.Suspense=Rh;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zh;L.act=Ic;L.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=vc({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ka.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)kc.call(e,l)&&!Ec.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:$r,type:t.type,key:i,ref:s,props:r,_owner:o}};L.createContext=function(t){return t={$$typeof:Ph,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:xh,_context:t},t.Consumer=t};L.createElement=Sc;L.createFactory=function(t){var e=Sc.bind(null,t);return e.type=t,e};L.createRef=function(){return{current:null}};L.forwardRef=function(t){return{$$typeof:Nh,render:t}};L.isValidElement=Ea;L.lazy=function(t){return{$$typeof:Oh,_payload:{_status:-1,_result:t},_init:Uh}};L.memo=function(t,e){return{$$typeof:Ah,type:t,compare:e===void 0?null:e}};L.startTransition=function(t){var e=Ii.transition;Ii.transition={};try{t()}finally{Ii.transition=e}};L.unstable_act=Ic;L.useCallback=function(t,e){return fe.current.useCallback(t,e)};L.useContext=function(t){return fe.current.useContext(t)};L.useDebugValue=function(){};L.useDeferredValue=function(t){return fe.current.useDeferredValue(t)};L.useEffect=function(t,e){return fe.current.useEffect(t,e)};L.useId=function(){return fe.current.useId()};L.useImperativeHandle=function(t,e,n){return fe.current.useImperativeHandle(t,e,n)};L.useInsertionEffect=function(t,e){return fe.current.useInsertionEffect(t,e)};L.useLayoutEffect=function(t,e){return fe.current.useLayoutEffect(t,e)};L.useMemo=function(t,e){return fe.current.useMemo(t,e)};L.useReducer=function(t,e,n){return fe.current.useReducer(t,e,n)};L.useRef=function(t){return fe.current.useRef(t)};L.useState=function(t){return fe.current.useState(t)};L.useSyncExternalStore=function(t,e,n){return fe.current.useSyncExternalStore(t,e,n)};L.useTransition=function(){return fe.current.useTransition()};L.version="18.3.1";gc.exports=L;var K=gc.exports;const jh=Eh(K);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fh=K,bh=Symbol.for("react.element"),Bh=Symbol.for("react.fragment"),Vh=Object.prototype.hasOwnProperty,Hh=Fh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$h={key:!0,ref:!0,__self:!0,__source:!0};function Cc(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Vh.call(e,r)&&!$h.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:bh,type:t,key:s,ref:o,props:i,_owner:Hh.current}}ys.Fragment=Bh;ys.jsx=Cc;ys.jsxs=Cc;mc.exports=ys;var g=mc.exports,vo={},Tc={exports:{}},Te={},xc={exports:{}},Pc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,N){var R=I.length;I.push(N);e:for(;0<R;){var Q=R-1>>>1,Z=I[Q];if(0<i(Z,N))I[Q]=N,I[R]=Z,R=Q;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var N=I[0],R=I.pop();if(R!==N){I[0]=R;e:for(var Q=0,Z=I.length,ni=Z>>>1;Q<ni;){var Gt=2*(Q+1)-1,zs=I[Gt],Qt=Gt+1,ri=I[Qt];if(0>i(zs,R))Qt<Z&&0>i(ri,zs)?(I[Q]=ri,I[Qt]=R,Q=Qt):(I[Q]=zs,I[Gt]=R,Q=Gt);else if(Qt<Z&&0>i(ri,R))I[Q]=ri,I[Qt]=R,Q=Qt;else break e}}return N}function i(I,N){var R=I.sortIndex-N.sortIndex;return R!==0?R:I.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],p=1,m=null,d=3,v=!1,_=!1,k=!1,A=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(I){for(var N=n(u);N!==null;){if(N.callback===null)r(u);else if(N.startTime<=I)r(u),N.sortIndex=N.expirationTime,e(l,N);else break;N=n(u)}}function y(I){if(k=!1,h(I),!_)if(n(l)!==null)_=!0,Jn(S);else{var N=n(u);N!==null&&Xn(y,N.startTime-I)}}function S(I,N){_=!1,k&&(k=!1,f(E),E=-1),v=!0;var R=d;try{for(h(N),m=n(l);m!==null&&(!(m.expirationTime>N)||I&&!ke());){var Q=m.callback;if(typeof Q=="function"){m.callback=null,d=m.priorityLevel;var Z=Q(m.expirationTime<=N);N=t.unstable_now(),typeof Z=="function"?m.callback=Z:m===n(l)&&r(l),h(N)}else r(l);m=n(l)}if(m!==null)var ni=!0;else{var Gt=n(u);Gt!==null&&Xn(y,Gt.startTime-N),ni=!1}return ni}finally{m=null,d=R,v=!1}}var T=!1,x=null,E=-1,V=5,O=-1;function ke(){return!(t.unstable_now()-O<V)}function $t(){if(x!==null){var I=t.unstable_now();O=I;var N=!0;try{N=x(!0,I)}finally{N?Wt():(T=!1,x=null)}}else T=!1}var Wt;if(typeof c=="function")Wt=function(){c($t)};else if(typeof MessageChannel<"u"){var M=new MessageChannel,Kt=M.port2;M.port1.onmessage=$t,Wt=function(){Kt.postMessage(null)}}else Wt=function(){A($t,0)};function Jn(I){x=I,T||(T=!0,Wt())}function Xn(I,N){E=A(function(){I(t.unstable_now())},N)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){_||v||(_=!0,Jn(S))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(d){case 1:case 2:case 3:var N=3;break;default:N=d}var R=d;d=N;try{return I()}finally{d=R}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,N){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var R=d;d=I;try{return N()}finally{d=R}},t.unstable_scheduleCallback=function(I,N,R){var Q=t.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?Q+R:Q):R=Q,I){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=R+Z,I={id:p++,callback:N,priorityLevel:I,startTime:R,expirationTime:Z,sortIndex:-1},R>Q?(I.sortIndex=R,e(u,I),n(l)===null&&I===n(u)&&(k?(f(E),E=-1):k=!0,Xn(y,R-Q))):(I.sortIndex=Z,e(l,I),_||v||(_=!0,Jn(S))),I},t.unstable_shouldYield=ke,t.unstable_wrapCallback=function(I){var N=d;return function(){var R=d;d=N;try{return I.apply(this,arguments)}finally{d=R}}}})(Pc);xc.exports=Pc;var Wh=xc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kh=K,Ce=Wh;function w(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Nc=new Set,Ir={};function fn(t,e){jn(t,e),jn(t+"Capture",e)}function jn(t,e){for(Ir[t]=e,t=0;t<e.length;t++)Nc.add(e[t])}var lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wo=Object.prototype.hasOwnProperty,Gh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rl={},Al={};function Qh(t){return wo.call(Al,t)?!0:wo.call(Rl,t)?!1:Gh.test(t)?Al[t]=!0:(Rl[t]=!0,!1)}function Yh(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function qh(t,e,n,r){if(e===null||typeof e>"u"||Yh(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function he(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ie[t]=new he(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ie[e]=new he(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ie[t]=new he(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ie[t]=new he(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ie[t]=new he(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ie[t]=new he(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ie[t]=new he(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ie[t]=new he(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ie[t]=new he(t,5,!1,t.toLowerCase(),null,!1,!1)});var Sa=/[\-:]([a-z])/g;function Ia(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Sa,Ia);ie[e]=new he(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Sa,Ia);ie[e]=new he(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Sa,Ia);ie[e]=new he(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ie[t]=new he(t,1,!1,t.toLowerCase(),null,!1,!1)});ie.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ie[t]=new he(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ca(t,e,n,r){var i=ie.hasOwnProperty(e)?ie[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(qh(e,n,i,r)&&(n=null),r||i===null?Qh(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var pt=Kh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,si=Symbol.for("react.element"),mn=Symbol.for("react.portal"),gn=Symbol.for("react.fragment"),Ta=Symbol.for("react.strict_mode"),_o=Symbol.for("react.profiler"),Rc=Symbol.for("react.provider"),Ac=Symbol.for("react.context"),xa=Symbol.for("react.forward_ref"),ko=Symbol.for("react.suspense"),Eo=Symbol.for("react.suspense_list"),Pa=Symbol.for("react.memo"),vt=Symbol.for("react.lazy"),Oc=Symbol.for("react.offscreen"),Ol=Symbol.iterator;function Zn(t){return t===null||typeof t!="object"?null:(t=Ol&&t[Ol]||t["@@iterator"],typeof t=="function"?t:null)}var W=Object.assign,Fs;function ar(t){if(Fs===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Fs=e&&e[1]||""}return`
`+Fs+t}var bs=!1;function Bs(t,e){if(!t||bs)return"";bs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{bs=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ar(t):""}function Jh(t){switch(t.tag){case 5:return ar(t.type);case 16:return ar("Lazy");case 13:return ar("Suspense");case 19:return ar("SuspenseList");case 0:case 2:case 15:return t=Bs(t.type,!1),t;case 11:return t=Bs(t.type.render,!1),t;case 1:return t=Bs(t.type,!0),t;default:return""}}function So(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gn:return"Fragment";case mn:return"Portal";case _o:return"Profiler";case Ta:return"StrictMode";case ko:return"Suspense";case Eo:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ac:return(t.displayName||"Context")+".Consumer";case Rc:return(t._context.displayName||"Context")+".Provider";case xa:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Pa:return e=t.displayName||null,e!==null?e:So(t.type)||"Memo";case vt:e=t._payload,t=t._init;try{return So(t(e))}catch{}}return null}function Xh(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return So(e);case 8:return e===Ta?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function jt(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Lc(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Zh(t){var e=Lc(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function oi(t){t._valueTracker||(t._valueTracker=Zh(t))}function Dc(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Lc(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Fi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Io(t,e){var n=e.checked;return W({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ll(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=jt(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Mc(t,e){e=e.checked,e!=null&&Ca(t,"checked",e,!1)}function Co(t,e){Mc(t,e);var n=jt(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?To(t,e.type,n):e.hasOwnProperty("defaultValue")&&To(t,e.type,jt(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Dl(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function To(t,e,n){(e!=="number"||Fi(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var lr=Array.isArray;function Pn(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+jt(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function xo(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(w(91));return W({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ml(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(w(92));if(lr(n)){if(1<n.length)throw Error(w(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:jt(n)}}function Uc(t,e){var n=jt(e.value),r=jt(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ul(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function zc(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Po(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?zc(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ai,jc=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ai=ai||document.createElement("div"),ai.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ai.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Cr(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var hr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ep=["Webkit","ms","Moz","O"];Object.keys(hr).forEach(function(t){ep.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),hr[e]=hr[t]})});function Fc(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||hr.hasOwnProperty(t)&&hr[t]?(""+e).trim():e+"px"}function bc(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Fc(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var tp=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function No(t,e){if(e){if(tp[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(w(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(w(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(w(61))}if(e.style!=null&&typeof e.style!="object")throw Error(w(62))}}function Ro(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ao=null;function Na(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Oo=null,Nn=null,Rn=null;function zl(t){if(t=Gr(t)){if(typeof Oo!="function")throw Error(w(280));var e=t.stateNode;e&&(e=Es(e),Oo(t.stateNode,t.type,e))}}function Bc(t){Nn?Rn?Rn.push(t):Rn=[t]:Nn=t}function Vc(){if(Nn){var t=Nn,e=Rn;if(Rn=Nn=null,zl(t),e)for(t=0;t<e.length;t++)zl(e[t])}}function Hc(t,e){return t(e)}function $c(){}var Vs=!1;function Wc(t,e,n){if(Vs)return t(e,n);Vs=!0;try{return Hc(t,e,n)}finally{Vs=!1,(Nn!==null||Rn!==null)&&($c(),Vc())}}function Tr(t,e){var n=t.stateNode;if(n===null)return null;var r=Es(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(w(231,e,typeof n));return n}var Lo=!1;if(lt)try{var er={};Object.defineProperty(er,"passive",{get:function(){Lo=!0}}),window.addEventListener("test",er,er),window.removeEventListener("test",er,er)}catch{Lo=!1}function np(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(p){this.onError(p)}}var pr=!1,bi=null,Bi=!1,Do=null,rp={onError:function(t){pr=!0,bi=t}};function ip(t,e,n,r,i,s,o,a,l){pr=!1,bi=null,np.apply(rp,arguments)}function sp(t,e,n,r,i,s,o,a,l){if(ip.apply(this,arguments),pr){if(pr){var u=bi;pr=!1,bi=null}else throw Error(w(198));Bi||(Bi=!0,Do=u)}}function hn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Kc(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function jl(t){if(hn(t)!==t)throw Error(w(188))}function op(t){var e=t.alternate;if(!e){if(e=hn(t),e===null)throw Error(w(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return jl(i),t;if(s===r)return jl(i),e;s=s.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?t:e}function Gc(t){return t=op(t),t!==null?Qc(t):null}function Qc(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Qc(t);if(e!==null)return e;t=t.sibling}return null}var Yc=Ce.unstable_scheduleCallback,Fl=Ce.unstable_cancelCallback,ap=Ce.unstable_shouldYield,lp=Ce.unstable_requestPaint,Y=Ce.unstable_now,up=Ce.unstable_getCurrentPriorityLevel,Ra=Ce.unstable_ImmediatePriority,qc=Ce.unstable_UserBlockingPriority,Vi=Ce.unstable_NormalPriority,cp=Ce.unstable_LowPriority,Jc=Ce.unstable_IdlePriority,vs=null,Qe=null;function dp(t){if(Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(vs,t,void 0,(t.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:pp,fp=Math.log,hp=Math.LN2;function pp(t){return t>>>=0,t===0?32:31-(fp(t)/hp|0)|0}var li=64,ui=4194304;function ur(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Hi(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ur(a):(s&=o,s!==0&&(r=ur(s)))}else o=n&~i,o!==0?r=ur(o):s!==0&&(r=ur(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ve(e),i=1<<n,r|=t[n],e&=~i;return r}function mp(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gp(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ve(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=mp(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Mo(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Xc(){var t=li;return li<<=1,!(li&4194240)&&(li=64),t}function Hs(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Wr(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ve(e),t[e]=n}function yp(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ve(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Aa(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ve(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var U=0;function Zc(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ed,Oa,td,nd,rd,Uo=!1,ci=[],Pt=null,Nt=null,Rt=null,xr=new Map,Pr=new Map,_t=[],vp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bl(t,e){switch(t){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":Nt=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":xr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pr.delete(e.pointerId)}}function tr(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Gr(e),e!==null&&Oa(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function wp(t,e,n,r,i){switch(e){case"focusin":return Pt=tr(Pt,t,e,n,r,i),!0;case"dragenter":return Nt=tr(Nt,t,e,n,r,i),!0;case"mouseover":return Rt=tr(Rt,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return xr.set(s,tr(xr.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Pr.set(s,tr(Pr.get(s)||null,t,e,n,r,i)),!0}return!1}function id(t){var e=Xt(t.target);if(e!==null){var n=hn(e);if(n!==null){if(e=n.tag,e===13){if(e=Kc(n),e!==null){t.blockedOn=e,rd(t.priority,function(){td(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ci(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=zo(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ao=r,n.target.dispatchEvent(r),Ao=null}else return e=Gr(n),e!==null&&Oa(e),t.blockedOn=n,!1;e.shift()}return!0}function Bl(t,e,n){Ci(t)&&n.delete(e)}function _p(){Uo=!1,Pt!==null&&Ci(Pt)&&(Pt=null),Nt!==null&&Ci(Nt)&&(Nt=null),Rt!==null&&Ci(Rt)&&(Rt=null),xr.forEach(Bl),Pr.forEach(Bl)}function nr(t,e){t.blockedOn===e&&(t.blockedOn=null,Uo||(Uo=!0,Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority,_p)))}function Nr(t){function e(i){return nr(i,t)}if(0<ci.length){nr(ci[0],t);for(var n=1;n<ci.length;n++){var r=ci[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Pt!==null&&nr(Pt,t),Nt!==null&&nr(Nt,t),Rt!==null&&nr(Rt,t),xr.forEach(e),Pr.forEach(e),n=0;n<_t.length;n++)r=_t[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<_t.length&&(n=_t[0],n.blockedOn===null);)id(n),n.blockedOn===null&&_t.shift()}var An=pt.ReactCurrentBatchConfig,$i=!0;function kp(t,e,n,r){var i=U,s=An.transition;An.transition=null;try{U=1,La(t,e,n,r)}finally{U=i,An.transition=s}}function Ep(t,e,n,r){var i=U,s=An.transition;An.transition=null;try{U=4,La(t,e,n,r)}finally{U=i,An.transition=s}}function La(t,e,n,r){if($i){var i=zo(t,e,n,r);if(i===null)Zs(t,e,r,Wi,n),bl(t,r);else if(wp(i,t,e,n,r))r.stopPropagation();else if(bl(t,r),e&4&&-1<vp.indexOf(t)){for(;i!==null;){var s=Gr(i);if(s!==null&&ed(s),s=zo(t,e,n,r),s===null&&Zs(t,e,r,Wi,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Zs(t,e,r,null,n)}}var Wi=null;function zo(t,e,n,r){if(Wi=null,t=Na(r),t=Xt(t),t!==null)if(e=hn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Kc(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Wi=t,null}function sd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(up()){case Ra:return 1;case qc:return 4;case Vi:case cp:return 16;case Jc:return 536870912;default:return 16}default:return 16}}var Tt=null,Da=null,Ti=null;function od(){if(Ti)return Ti;var t,e=Da,n=e.length,r,i="value"in Tt?Tt.value:Tt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ti=i.slice(t,1<r?1-r:void 0)}function xi(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function di(){return!0}function Vl(){return!1}function xe(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?di:Vl,this.isPropagationStopped=Vl,this}return W(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=di)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=di)},persist:function(){},isPersistent:di}),e}var Qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ma=xe(Qn),Kr=W({},Qn,{view:0,detail:0}),Sp=xe(Kr),$s,Ws,rr,ws=W({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ua,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==rr&&(rr&&t.type==="mousemove"?($s=t.screenX-rr.screenX,Ws=t.screenY-rr.screenY):Ws=$s=0,rr=t),$s)},movementY:function(t){return"movementY"in t?t.movementY:Ws}}),Hl=xe(ws),Ip=W({},ws,{dataTransfer:0}),Cp=xe(Ip),Tp=W({},Kr,{relatedTarget:0}),Ks=xe(Tp),xp=W({},Qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Pp=xe(xp),Np=W({},Qn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Rp=xe(Np),Ap=W({},Qn,{data:0}),$l=xe(Ap),Op={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mp(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Dp[t])?!!e[t]:!1}function Ua(){return Mp}var Up=W({},Kr,{key:function(t){if(t.key){var e=Op[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Lp[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ua,charCode:function(t){return t.type==="keypress"?xi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zp=xe(Up),jp=W({},ws,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wl=xe(jp),Fp=W({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ua}),bp=xe(Fp),Bp=W({},Qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vp=xe(Bp),Hp=W({},ws,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$p=xe(Hp),Wp=[9,13,27,32],za=lt&&"CompositionEvent"in window,mr=null;lt&&"documentMode"in document&&(mr=document.documentMode);var Kp=lt&&"TextEvent"in window&&!mr,ad=lt&&(!za||mr&&8<mr&&11>=mr),Kl=" ",Gl=!1;function ld(t,e){switch(t){case"keyup":return Wp.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ud(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yn=!1;function Gp(t,e){switch(t){case"compositionend":return ud(e);case"keypress":return e.which!==32?null:(Gl=!0,Kl);case"textInput":return t=e.data,t===Kl&&Gl?null:t;default:return null}}function Qp(t,e){if(yn)return t==="compositionend"||!za&&ld(t,e)?(t=od(),Ti=Da=Tt=null,yn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ad&&e.locale!=="ko"?null:e.data;default:return null}}var Yp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ql(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Yp[t.type]:e==="textarea"}function cd(t,e,n,r){Bc(r),e=Ki(e,"onChange"),0<e.length&&(n=new Ma("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var gr=null,Rr=null;function qp(t){kd(t,0)}function _s(t){var e=_n(t);if(Dc(e))return t}function Jp(t,e){if(t==="change")return e}var dd=!1;if(lt){var Gs;if(lt){var Qs="oninput"in document;if(!Qs){var Yl=document.createElement("div");Yl.setAttribute("oninput","return;"),Qs=typeof Yl.oninput=="function"}Gs=Qs}else Gs=!1;dd=Gs&&(!document.documentMode||9<document.documentMode)}function ql(){gr&&(gr.detachEvent("onpropertychange",fd),Rr=gr=null)}function fd(t){if(t.propertyName==="value"&&_s(Rr)){var e=[];cd(e,Rr,t,Na(t)),Wc(qp,e)}}function Xp(t,e,n){t==="focusin"?(ql(),gr=e,Rr=n,gr.attachEvent("onpropertychange",fd)):t==="focusout"&&ql()}function Zp(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _s(Rr)}function em(t,e){if(t==="click")return _s(e)}function tm(t,e){if(t==="input"||t==="change")return _s(e)}function nm(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $e=typeof Object.is=="function"?Object.is:nm;function Ar(t,e){if($e(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!wo.call(e,i)||!$e(t[i],e[i]))return!1}return!0}function Jl(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xl(t,e){var n=Jl(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jl(n)}}function hd(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?hd(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function pd(){for(var t=window,e=Fi();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Fi(t.document)}return e}function ja(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function rm(t){var e=pd(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&hd(n.ownerDocument.documentElement,n)){if(r!==null&&ja(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Xl(n,s);var o=Xl(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var im=lt&&"documentMode"in document&&11>=document.documentMode,vn=null,jo=null,yr=null,Fo=!1;function Zl(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fo||vn==null||vn!==Fi(r)||(r=vn,"selectionStart"in r&&ja(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yr&&Ar(yr,r)||(yr=r,r=Ki(jo,"onSelect"),0<r.length&&(e=new Ma("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=vn)))}function fi(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var wn={animationend:fi("Animation","AnimationEnd"),animationiteration:fi("Animation","AnimationIteration"),animationstart:fi("Animation","AnimationStart"),transitionend:fi("Transition","TransitionEnd")},Ys={},md={};lt&&(md=document.createElement("div").style,"AnimationEvent"in window||(delete wn.animationend.animation,delete wn.animationiteration.animation,delete wn.animationstart.animation),"TransitionEvent"in window||delete wn.transitionend.transition);function ks(t){if(Ys[t])return Ys[t];if(!wn[t])return t;var e=wn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in md)return Ys[t]=e[n];return t}var gd=ks("animationend"),yd=ks("animationiteration"),vd=ks("animationstart"),wd=ks("transitionend"),_d=new Map,eu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bt(t,e){_d.set(t,e),fn(e,[t])}for(var qs=0;qs<eu.length;qs++){var Js=eu[qs],sm=Js.toLowerCase(),om=Js[0].toUpperCase()+Js.slice(1);bt(sm,"on"+om)}bt(gd,"onAnimationEnd");bt(yd,"onAnimationIteration");bt(vd,"onAnimationStart");bt("dblclick","onDoubleClick");bt("focusin","onFocus");bt("focusout","onBlur");bt(wd,"onTransitionEnd");jn("onMouseEnter",["mouseout","mouseover"]);jn("onMouseLeave",["mouseout","mouseover"]);jn("onPointerEnter",["pointerout","pointerover"]);jn("onPointerLeave",["pointerout","pointerover"]);fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),am=new Set("cancel close invalid load scroll toggle".split(" ").concat(cr));function tu(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,sp(r,e,void 0,t),t.currentTarget=null}function kd(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;tu(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;tu(i,a,u),s=l}}}if(Bi)throw t=Do,Bi=!1,Do=null,t}function F(t,e){var n=e[$o];n===void 0&&(n=e[$o]=new Set);var r=t+"__bubble";n.has(r)||(Ed(e,t,2,!1),n.add(r))}function Xs(t,e,n){var r=0;e&&(r|=4),Ed(n,t,r,e)}var hi="_reactListening"+Math.random().toString(36).slice(2);function Or(t){if(!t[hi]){t[hi]=!0,Nc.forEach(function(n){n!=="selectionchange"&&(am.has(n)||Xs(n,!1,t),Xs(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[hi]||(e[hi]=!0,Xs("selectionchange",!1,e))}}function Ed(t,e,n,r){switch(sd(e)){case 1:var i=kp;break;case 4:i=Ep;break;default:i=La}n=i.bind(null,e,n,t),i=void 0,!Lo||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Zs(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Xt(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Wc(function(){var u=s,p=Na(n),m=[];e:{var d=_d.get(t);if(d!==void 0){var v=Ma,_=t;switch(t){case"keypress":if(xi(n)===0)break e;case"keydown":case"keyup":v=zp;break;case"focusin":_="focus",v=Ks;break;case"focusout":_="blur",v=Ks;break;case"beforeblur":case"afterblur":v=Ks;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Hl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Cp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=bp;break;case gd:case yd:case vd:v=Pp;break;case wd:v=Vp;break;case"scroll":v=Sp;break;case"wheel":v=$p;break;case"copy":case"cut":case"paste":v=Rp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Wl}var k=(e&4)!==0,A=!k&&t==="scroll",f=k?d!==null?d+"Capture":null:d;k=[];for(var c=u,h;c!==null;){h=c;var y=h.stateNode;if(h.tag===5&&y!==null&&(h=y,f!==null&&(y=Tr(c,f),y!=null&&k.push(Lr(c,y,h)))),A)break;c=c.return}0<k.length&&(d=new v(d,_,null,n,p),m.push({event:d,listeners:k}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",d&&n!==Ao&&(_=n.relatedTarget||n.fromElement)&&(Xt(_)||_[ut]))break e;if((v||d)&&(d=p.window===p?p:(d=p.ownerDocument)?d.defaultView||d.parentWindow:window,v?(_=n.relatedTarget||n.toElement,v=u,_=_?Xt(_):null,_!==null&&(A=hn(_),_!==A||_.tag!==5&&_.tag!==6)&&(_=null)):(v=null,_=u),v!==_)){if(k=Hl,y="onMouseLeave",f="onMouseEnter",c="mouse",(t==="pointerout"||t==="pointerover")&&(k=Wl,y="onPointerLeave",f="onPointerEnter",c="pointer"),A=v==null?d:_n(v),h=_==null?d:_n(_),d=new k(y,c+"leave",v,n,p),d.target=A,d.relatedTarget=h,y=null,Xt(p)===u&&(k=new k(f,c+"enter",_,n,p),k.target=h,k.relatedTarget=A,y=k),A=y,v&&_)t:{for(k=v,f=_,c=0,h=k;h;h=pn(h))c++;for(h=0,y=f;y;y=pn(y))h++;for(;0<c-h;)k=pn(k),c--;for(;0<h-c;)f=pn(f),h--;for(;c--;){if(k===f||f!==null&&k===f.alternate)break t;k=pn(k),f=pn(f)}k=null}else k=null;v!==null&&nu(m,d,v,k,!1),_!==null&&A!==null&&nu(m,A,_,k,!0)}}e:{if(d=u?_n(u):window,v=d.nodeName&&d.nodeName.toLowerCase(),v==="select"||v==="input"&&d.type==="file")var S=Jp;else if(Ql(d))if(dd)S=tm;else{S=Zp;var T=Xp}else(v=d.nodeName)&&v.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=em);if(S&&(S=S(t,u))){cd(m,S,n,p);break e}T&&T(t,d,u),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&To(d,"number",d.value)}switch(T=u?_n(u):window,t){case"focusin":(Ql(T)||T.contentEditable==="true")&&(vn=T,jo=u,yr=null);break;case"focusout":yr=jo=vn=null;break;case"mousedown":Fo=!0;break;case"contextmenu":case"mouseup":case"dragend":Fo=!1,Zl(m,n,p);break;case"selectionchange":if(im)break;case"keydown":case"keyup":Zl(m,n,p)}var x;if(za)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else yn?ld(t,n)&&(E="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(ad&&n.locale!=="ko"&&(yn||E!=="onCompositionStart"?E==="onCompositionEnd"&&yn&&(x=od()):(Tt=p,Da="value"in Tt?Tt.value:Tt.textContent,yn=!0)),T=Ki(u,E),0<T.length&&(E=new $l(E,t,null,n,p),m.push({event:E,listeners:T}),x?E.data=x:(x=ud(n),x!==null&&(E.data=x)))),(x=Kp?Gp(t,n):Qp(t,n))&&(u=Ki(u,"onBeforeInput"),0<u.length&&(p=new $l("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:u}),p.data=x))}kd(m,e)})}function Lr(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ki(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Tr(t,n),s!=null&&r.unshift(Lr(t,s,i)),s=Tr(t,e),s!=null&&r.push(Lr(t,s,i))),t=t.return}return r}function pn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function nu(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Tr(n,s),l!=null&&o.unshift(Lr(n,l,a))):i||(l=Tr(n,s),l!=null&&o.push(Lr(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var lm=/\r\n?/g,um=/\u0000|\uFFFD/g;function ru(t){return(typeof t=="string"?t:""+t).replace(lm,`
`).replace(um,"")}function pi(t,e,n){if(e=ru(e),ru(t)!==e&&n)throw Error(w(425))}function Gi(){}var bo=null,Bo=null;function Vo(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ho=typeof setTimeout=="function"?setTimeout:void 0,cm=typeof clearTimeout=="function"?clearTimeout:void 0,iu=typeof Promise=="function"?Promise:void 0,dm=typeof queueMicrotask=="function"?queueMicrotask:typeof iu<"u"?function(t){return iu.resolve(null).then(t).catch(fm)}:Ho;function fm(t){setTimeout(function(){throw t})}function eo(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Nr(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Nr(e)}function At(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function su(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Yn=Math.random().toString(36).slice(2),Ge="__reactFiber$"+Yn,Dr="__reactProps$"+Yn,ut="__reactContainer$"+Yn,$o="__reactEvents$"+Yn,hm="__reactListeners$"+Yn,pm="__reactHandles$"+Yn;function Xt(t){var e=t[Ge];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ut]||n[Ge]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=su(t);t!==null;){if(n=t[Ge])return n;t=su(t)}return e}t=n,n=t.parentNode}return null}function Gr(t){return t=t[Ge]||t[ut],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function _n(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(w(33))}function Es(t){return t[Dr]||null}var Wo=[],kn=-1;function Bt(t){return{current:t}}function b(t){0>kn||(t.current=Wo[kn],Wo[kn]=null,kn--)}function j(t,e){kn++,Wo[kn]=t.current,t.current=e}var Ft={},le=Bt(Ft),ge=Bt(!1),rn=Ft;function Fn(t,e){var n=t.type.contextTypes;if(!n)return Ft;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ye(t){return t=t.childContextTypes,t!=null}function Qi(){b(ge),b(le)}function ou(t,e,n){if(le.current!==Ft)throw Error(w(168));j(le,e),j(ge,n)}function Sd(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(w(108,Xh(t)||"Unknown",i));return W({},n,r)}function Yi(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ft,rn=le.current,j(le,t),j(ge,ge.current),!0}function au(t,e,n){var r=t.stateNode;if(!r)throw Error(w(169));n?(t=Sd(t,e,rn),r.__reactInternalMemoizedMergedChildContext=t,b(ge),b(le),j(le,t)):b(ge),j(ge,n)}var nt=null,Ss=!1,to=!1;function Id(t){nt===null?nt=[t]:nt.push(t)}function mm(t){Ss=!0,Id(t)}function Vt(){if(!to&&nt!==null){to=!0;var t=0,e=U;try{var n=nt;for(U=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}nt=null,Ss=!1}catch(i){throw nt!==null&&(nt=nt.slice(t+1)),Yc(Ra,Vt),i}finally{U=e,to=!1}}return null}var En=[],Sn=0,qi=null,Ji=0,Pe=[],Ne=0,sn=null,rt=1,it="";function Yt(t,e){En[Sn++]=Ji,En[Sn++]=qi,qi=t,Ji=e}function Cd(t,e,n){Pe[Ne++]=rt,Pe[Ne++]=it,Pe[Ne++]=sn,sn=t;var r=rt;t=it;var i=32-Ve(r)-1;r&=~(1<<i),n+=1;var s=32-Ve(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,rt=1<<32-Ve(e)+i|n<<i|r,it=s+t}else rt=1<<s|n<<i|r,it=t}function Fa(t){t.return!==null&&(Yt(t,1),Cd(t,1,0))}function ba(t){for(;t===qi;)qi=En[--Sn],En[Sn]=null,Ji=En[--Sn],En[Sn]=null;for(;t===sn;)sn=Pe[--Ne],Pe[Ne]=null,it=Pe[--Ne],Pe[Ne]=null,rt=Pe[--Ne],Pe[Ne]=null}var Ie=null,Se=null,B=!1,be=null;function Td(t,e){var n=Ae(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function lu(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ie=t,Se=At(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ie=t,Se=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=sn!==null?{id:rt,overflow:it}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ae(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ie=t,Se=null,!0):!1;default:return!1}}function Ko(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Go(t){if(B){var e=Se;if(e){var n=e;if(!lu(t,e)){if(Ko(t))throw Error(w(418));e=At(n.nextSibling);var r=Ie;e&&lu(t,e)?Td(r,n):(t.flags=t.flags&-4097|2,B=!1,Ie=t)}}else{if(Ko(t))throw Error(w(418));t.flags=t.flags&-4097|2,B=!1,Ie=t}}}function uu(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ie=t}function mi(t){if(t!==Ie)return!1;if(!B)return uu(t),B=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Vo(t.type,t.memoizedProps)),e&&(e=Se)){if(Ko(t))throw xd(),Error(w(418));for(;e;)Td(t,e),e=At(e.nextSibling)}if(uu(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Se=At(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Se=null}}else Se=Ie?At(t.stateNode.nextSibling):null;return!0}function xd(){for(var t=Se;t;)t=At(t.nextSibling)}function bn(){Se=Ie=null,B=!1}function Ba(t){be===null?be=[t]:be.push(t)}var gm=pt.ReactCurrentBatchConfig;function ir(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,t))}return t}function gi(t,e){throw t=Object.prototype.toString.call(e),Error(w(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function cu(t){var e=t._init;return e(t._payload)}function Pd(t){function e(f,c){if(t){var h=f.deletions;h===null?(f.deletions=[c],f.flags|=16):h.push(c)}}function n(f,c){if(!t)return null;for(;c!==null;)e(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=Mt(f,c),f.index=0,f.sibling=null,f}function s(f,c,h){return f.index=h,t?(h=f.alternate,h!==null?(h=h.index,h<c?(f.flags|=2,c):h):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,c,h,y){return c===null||c.tag!==6?(c=lo(h,f.mode,y),c.return=f,c):(c=i(c,h),c.return=f,c)}function l(f,c,h,y){var S=h.type;return S===gn?p(f,c,h.props.children,y,h.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===vt&&cu(S)===c.type)?(y=i(c,h.props),y.ref=ir(f,c,h),y.return=f,y):(y=Di(h.type,h.key,h.props,null,f.mode,y),y.ref=ir(f,c,h),y.return=f,y)}function u(f,c,h,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=uo(h,f.mode,y),c.return=f,c):(c=i(c,h.children||[]),c.return=f,c)}function p(f,c,h,y,S){return c===null||c.tag!==7?(c=nn(h,f.mode,y,S),c.return=f,c):(c=i(c,h),c.return=f,c)}function m(f,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=lo(""+c,f.mode,h),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case si:return h=Di(c.type,c.key,c.props,null,f.mode,h),h.ref=ir(f,null,c),h.return=f,h;case mn:return c=uo(c,f.mode,h),c.return=f,c;case vt:var y=c._init;return m(f,y(c._payload),h)}if(lr(c)||Zn(c))return c=nn(c,f.mode,h,null),c.return=f,c;gi(f,c)}return null}function d(f,c,h,y){var S=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:a(f,c,""+h,y);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case si:return h.key===S?l(f,c,h,y):null;case mn:return h.key===S?u(f,c,h,y):null;case vt:return S=h._init,d(f,c,S(h._payload),y)}if(lr(h)||Zn(h))return S!==null?null:p(f,c,h,y,null);gi(f,h)}return null}function v(f,c,h,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(h)||null,a(c,f,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case si:return f=f.get(y.key===null?h:y.key)||null,l(c,f,y,S);case mn:return f=f.get(y.key===null?h:y.key)||null,u(c,f,y,S);case vt:var T=y._init;return v(f,c,h,T(y._payload),S)}if(lr(y)||Zn(y))return f=f.get(h)||null,p(c,f,y,S,null);gi(c,y)}return null}function _(f,c,h,y){for(var S=null,T=null,x=c,E=c=0,V=null;x!==null&&E<h.length;E++){x.index>E?(V=x,x=null):V=x.sibling;var O=d(f,x,h[E],y);if(O===null){x===null&&(x=V);break}t&&x&&O.alternate===null&&e(f,x),c=s(O,c,E),T===null?S=O:T.sibling=O,T=O,x=V}if(E===h.length)return n(f,x),B&&Yt(f,E),S;if(x===null){for(;E<h.length;E++)x=m(f,h[E],y),x!==null&&(c=s(x,c,E),T===null?S=x:T.sibling=x,T=x);return B&&Yt(f,E),S}for(x=r(f,x);E<h.length;E++)V=v(x,f,E,h[E],y),V!==null&&(t&&V.alternate!==null&&x.delete(V.key===null?E:V.key),c=s(V,c,E),T===null?S=V:T.sibling=V,T=V);return t&&x.forEach(function(ke){return e(f,ke)}),B&&Yt(f,E),S}function k(f,c,h,y){var S=Zn(h);if(typeof S!="function")throw Error(w(150));if(h=S.call(h),h==null)throw Error(w(151));for(var T=S=null,x=c,E=c=0,V=null,O=h.next();x!==null&&!O.done;E++,O=h.next()){x.index>E?(V=x,x=null):V=x.sibling;var ke=d(f,x,O.value,y);if(ke===null){x===null&&(x=V);break}t&&x&&ke.alternate===null&&e(f,x),c=s(ke,c,E),T===null?S=ke:T.sibling=ke,T=ke,x=V}if(O.done)return n(f,x),B&&Yt(f,E),S;if(x===null){for(;!O.done;E++,O=h.next())O=m(f,O.value,y),O!==null&&(c=s(O,c,E),T===null?S=O:T.sibling=O,T=O);return B&&Yt(f,E),S}for(x=r(f,x);!O.done;E++,O=h.next())O=v(x,f,E,O.value,y),O!==null&&(t&&O.alternate!==null&&x.delete(O.key===null?E:O.key),c=s(O,c,E),T===null?S=O:T.sibling=O,T=O);return t&&x.forEach(function($t){return e(f,$t)}),B&&Yt(f,E),S}function A(f,c,h,y){if(typeof h=="object"&&h!==null&&h.type===gn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case si:e:{for(var S=h.key,T=c;T!==null;){if(T.key===S){if(S=h.type,S===gn){if(T.tag===7){n(f,T.sibling),c=i(T,h.props.children),c.return=f,f=c;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===vt&&cu(S)===T.type){n(f,T.sibling),c=i(T,h.props),c.ref=ir(f,T,h),c.return=f,f=c;break e}n(f,T);break}else e(f,T);T=T.sibling}h.type===gn?(c=nn(h.props.children,f.mode,y,h.key),c.return=f,f=c):(y=Di(h.type,h.key,h.props,null,f.mode,y),y.ref=ir(f,c,h),y.return=f,f=y)}return o(f);case mn:e:{for(T=h.key;c!==null;){if(c.key===T)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(f,c.sibling),c=i(c,h.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else e(f,c);c=c.sibling}c=uo(h,f.mode,y),c.return=f,f=c}return o(f);case vt:return T=h._init,A(f,c,T(h._payload),y)}if(lr(h))return _(f,c,h,y);if(Zn(h))return k(f,c,h,y);gi(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,h),c.return=f,f=c):(n(f,c),c=lo(h,f.mode,y),c.return=f,f=c),o(f)):n(f,c)}return A}var Bn=Pd(!0),Nd=Pd(!1),Xi=Bt(null),Zi=null,In=null,Va=null;function Ha(){Va=In=Zi=null}function $a(t){var e=Xi.current;b(Xi),t._currentValue=e}function Qo(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function On(t,e){Zi=t,Va=In=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(me=!0),t.firstContext=null)}function Le(t){var e=t._currentValue;if(Va!==t)if(t={context:t,memoizedValue:e,next:null},In===null){if(Zi===null)throw Error(w(308));In=t,Zi.dependencies={lanes:0,firstContext:t}}else In=In.next=t;return e}var Zt=null;function Wa(t){Zt===null?Zt=[t]:Zt.push(t)}function Rd(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Wa(e)):(n.next=i.next,i.next=n),e.interleaved=n,ct(t,r)}function ct(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var wt=!1;function Ka(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ad(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function at(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ot(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ct(t,n)}return i=r.interleaved,i===null?(e.next=e,Wa(r)):(e.next=i.next,i.next=e),r.interleaved=e,ct(t,n)}function Pi(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Aa(t,n)}}function du(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function es(t,e,n,r){var i=t.updateQueue;wt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var p=t.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==o&&(a===null?p.firstBaseUpdate=u:a.next=u,p.lastBaseUpdate=l))}if(s!==null){var m=i.baseState;o=0,p=u=l=null,a=s;do{var d=a.lane,v=a.eventTime;if((r&d)===d){p!==null&&(p=p.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,k=a;switch(d=e,v=n,k.tag){case 1:if(_=k.payload,typeof _=="function"){m=_.call(v,m,d);break e}m=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=k.payload,d=typeof _=="function"?_.call(v,m,d):_,d==null)break e;m=W({},m,d);break e;case 2:wt=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else v={eventTime:v,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(u=p=v,l=m):p=p.next=v,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(p===null&&(l=m),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);an|=o,t.lanes=o,t.memoizedState=m}}function fu(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var Qr={},Ye=Bt(Qr),Mr=Bt(Qr),Ur=Bt(Qr);function en(t){if(t===Qr)throw Error(w(174));return t}function Ga(t,e){switch(j(Ur,e),j(Mr,t),j(Ye,Qr),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Po(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Po(e,t)}b(Ye),j(Ye,e)}function Vn(){b(Ye),b(Mr),b(Ur)}function Od(t){en(Ur.current);var e=en(Ye.current),n=Po(e,t.type);e!==n&&(j(Mr,t),j(Ye,n))}function Qa(t){Mr.current===t&&(b(Ye),b(Mr))}var H=Bt(0);function ts(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var no=[];function Ya(){for(var t=0;t<no.length;t++)no[t]._workInProgressVersionPrimary=null;no.length=0}var Ni=pt.ReactCurrentDispatcher,ro=pt.ReactCurrentBatchConfig,on=0,$=null,J=null,ee=null,ns=!1,vr=!1,zr=0,ym=0;function se(){throw Error(w(321))}function qa(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$e(t[n],e[n]))return!1;return!0}function Ja(t,e,n,r,i,s){if(on=s,$=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ni.current=t===null||t.memoizedState===null?km:Em,t=n(r,i),vr){s=0;do{if(vr=!1,zr=0,25<=s)throw Error(w(301));s+=1,ee=J=null,e.updateQueue=null,Ni.current=Sm,t=n(r,i)}while(vr)}if(Ni.current=rs,e=J!==null&&J.next!==null,on=0,ee=J=$=null,ns=!1,e)throw Error(w(300));return t}function Xa(){var t=zr!==0;return zr=0,t}function Ke(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?$.memoizedState=ee=t:ee=ee.next=t,ee}function De(){if(J===null){var t=$.alternate;t=t!==null?t.memoizedState:null}else t=J.next;var e=ee===null?$.memoizedState:ee.next;if(e!==null)ee=e,J=t;else{if(t===null)throw Error(w(310));J=t,t={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},ee===null?$.memoizedState=ee=t:ee=ee.next=t}return ee}function jr(t,e){return typeof e=="function"?e(t):e}function io(t){var e=De(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=J,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var p=u.lane;if((on&p)===p)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var m={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=m,o=r):l=l.next=m,$.lanes|=p,an|=p}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,$e(r,e.memoizedState)||(me=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,$.lanes|=s,an|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function so(t){var e=De(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);$e(s,e.memoizedState)||(me=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Ld(){}function Dd(t,e){var n=$,r=De(),i=e(),s=!$e(r.memoizedState,i);if(s&&(r.memoizedState=i,me=!0),r=r.queue,Za(zd.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,Fr(9,Ud.bind(null,n,r,i,e),void 0,null),te===null)throw Error(w(349));on&30||Md(n,e,i)}return i}function Md(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=$.updateQueue,e===null?(e={lastEffect:null,stores:null},$.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ud(t,e,n,r){e.value=n,e.getSnapshot=r,jd(e)&&Fd(t)}function zd(t,e,n){return n(function(){jd(e)&&Fd(t)})}function jd(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$e(t,n)}catch{return!0}}function Fd(t){var e=ct(t,1);e!==null&&He(e,t,1,-1)}function hu(t){var e=Ke();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jr,lastRenderedState:t},e.queue=t,t=t.dispatch=_m.bind(null,$,t),[e.memoizedState,t]}function Fr(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=$.updateQueue,e===null?(e={lastEffect:null,stores:null},$.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function bd(){return De().memoizedState}function Ri(t,e,n,r){var i=Ke();$.flags|=t,i.memoizedState=Fr(1|e,n,void 0,r===void 0?null:r)}function Is(t,e,n,r){var i=De();r=r===void 0?null:r;var s=void 0;if(J!==null){var o=J.memoizedState;if(s=o.destroy,r!==null&&qa(r,o.deps)){i.memoizedState=Fr(e,n,s,r);return}}$.flags|=t,i.memoizedState=Fr(1|e,n,s,r)}function pu(t,e){return Ri(8390656,8,t,e)}function Za(t,e){return Is(2048,8,t,e)}function Bd(t,e){return Is(4,2,t,e)}function Vd(t,e){return Is(4,4,t,e)}function Hd(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function $d(t,e,n){return n=n!=null?n.concat([t]):null,Is(4,4,Hd.bind(null,e,t),n)}function el(){}function Wd(t,e){var n=De();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qa(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Kd(t,e){var n=De();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qa(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Gd(t,e,n){return on&21?($e(n,e)||(n=Xc(),$.lanes|=n,an|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,me=!0),t.memoizedState=n)}function vm(t,e){var n=U;U=n!==0&&4>n?n:4,t(!0);var r=ro.transition;ro.transition={};try{t(!1),e()}finally{U=n,ro.transition=r}}function Qd(){return De().memoizedState}function wm(t,e,n){var r=Dt(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Yd(t))qd(e,n);else if(n=Rd(t,e,n,r),n!==null){var i=ce();He(n,t,r,i),Jd(n,e,r)}}function _m(t,e,n){var r=Dt(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yd(t))qd(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,$e(a,o)){var l=e.interleaved;l===null?(i.next=i,Wa(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Rd(t,e,i,r),n!==null&&(i=ce(),He(n,t,r,i),Jd(n,e,r))}}function Yd(t){var e=t.alternate;return t===$||e!==null&&e===$}function qd(t,e){vr=ns=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Jd(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Aa(t,n)}}var rs={readContext:Le,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},km={readContext:Le,useCallback:function(t,e){return Ke().memoizedState=[t,e===void 0?null:e],t},useContext:Le,useEffect:pu,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ri(4194308,4,Hd.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ri(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ri(4,2,t,e)},useMemo:function(t,e){var n=Ke();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ke();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=wm.bind(null,$,t),[r.memoizedState,t]},useRef:function(t){var e=Ke();return t={current:t},e.memoizedState=t},useState:hu,useDebugValue:el,useDeferredValue:function(t){return Ke().memoizedState=t},useTransition:function(){var t=hu(!1),e=t[0];return t=vm.bind(null,t[1]),Ke().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=$,i=Ke();if(B){if(n===void 0)throw Error(w(407));n=n()}else{if(n=e(),te===null)throw Error(w(349));on&30||Md(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,pu(zd.bind(null,r,s,t),[t]),r.flags|=2048,Fr(9,Ud.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ke(),e=te.identifierPrefix;if(B){var n=it,r=rt;n=(r&~(1<<32-Ve(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=zr++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ym++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Em={readContext:Le,useCallback:Wd,useContext:Le,useEffect:Za,useImperativeHandle:$d,useInsertionEffect:Bd,useLayoutEffect:Vd,useMemo:Kd,useReducer:io,useRef:bd,useState:function(){return io(jr)},useDebugValue:el,useDeferredValue:function(t){var e=De();return Gd(e,J.memoizedState,t)},useTransition:function(){var t=io(jr)[0],e=De().memoizedState;return[t,e]},useMutableSource:Ld,useSyncExternalStore:Dd,useId:Qd,unstable_isNewReconciler:!1},Sm={readContext:Le,useCallback:Wd,useContext:Le,useEffect:Za,useImperativeHandle:$d,useInsertionEffect:Bd,useLayoutEffect:Vd,useMemo:Kd,useReducer:so,useRef:bd,useState:function(){return so(jr)},useDebugValue:el,useDeferredValue:function(t){var e=De();return J===null?e.memoizedState=t:Gd(e,J.memoizedState,t)},useTransition:function(){var t=so(jr)[0],e=De().memoizedState;return[t,e]},useMutableSource:Ld,useSyncExternalStore:Dd,useId:Qd,unstable_isNewReconciler:!1};function je(t,e){if(t&&t.defaultProps){e=W({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Yo(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:W({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Cs={isMounted:function(t){return(t=t._reactInternals)?hn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ce(),i=Dt(t),s=at(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ot(t,s,i),e!==null&&(He(e,t,i,r),Pi(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ce(),i=Dt(t),s=at(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ot(t,s,i),e!==null&&(He(e,t,i,r),Pi(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ce(),r=Dt(t),i=at(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ot(t,i,r),e!==null&&(He(e,t,r,n),Pi(e,t,r))}};function mu(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ar(n,r)||!Ar(i,s):!0}function Xd(t,e,n){var r=!1,i=Ft,s=e.contextType;return typeof s=="object"&&s!==null?s=Le(s):(i=ye(e)?rn:le.current,r=e.contextTypes,s=(r=r!=null)?Fn(t,i):Ft),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Cs,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function gu(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Cs.enqueueReplaceState(e,e.state,null)}function qo(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ka(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Le(s):(s=ye(e)?rn:le.current,i.context=Fn(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Yo(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Cs.enqueueReplaceState(i,i.state,null),es(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Hn(t,e){try{var n="",r=e;do n+=Jh(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function oo(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Jo(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Im=typeof WeakMap=="function"?WeakMap:Map;function Zd(t,e,n){n=at(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ss||(ss=!0,aa=r),Jo(t,e)},n}function ef(t,e,n){n=at(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Jo(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Jo(t,e),typeof r!="function"&&(Lt===null?Lt=new Set([this]):Lt.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function yu(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Im;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=jm.bind(null,t,e,n),e.then(t,t))}function vu(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function wu(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=at(-1,1),e.tag=2,Ot(n,e,1))),n.lanes|=1),t)}var Cm=pt.ReactCurrentOwner,me=!1;function ue(t,e,n,r){e.child=t===null?Nd(e,null,n,r):Bn(e,t.child,n,r)}function _u(t,e,n,r,i){n=n.render;var s=e.ref;return On(e,i),r=Ja(t,e,n,r,s,i),n=Xa(),t!==null&&!me?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,dt(t,e,i)):(B&&n&&Fa(e),e.flags|=1,ue(t,e,r,i),e.child)}function ku(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ll(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,tf(t,e,s,r,i)):(t=Di(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ar,n(o,r)&&t.ref===e.ref)return dt(t,e,i)}return e.flags|=1,t=Mt(s,r),t.ref=e.ref,t.return=e,e.child=t}function tf(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ar(s,r)&&t.ref===e.ref)if(me=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(me=!0);else return e.lanes=t.lanes,dt(t,e,i)}return Xo(t,e,n,r,i)}function nf(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},j(Tn,Ee),Ee|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,j(Tn,Ee),Ee|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,j(Tn,Ee),Ee|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,j(Tn,Ee),Ee|=r;return ue(t,e,i,n),e.child}function rf(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Xo(t,e,n,r,i){var s=ye(n)?rn:le.current;return s=Fn(e,s),On(e,i),n=Ja(t,e,n,r,s,i),r=Xa(),t!==null&&!me?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,dt(t,e,i)):(B&&r&&Fa(e),e.flags|=1,ue(t,e,n,i),e.child)}function Eu(t,e,n,r,i){if(ye(n)){var s=!0;Yi(e)}else s=!1;if(On(e,i),e.stateNode===null)Ai(t,e),Xd(e,n,r),qo(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Le(u):(u=ye(n)?rn:le.current,u=Fn(e,u));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&gu(e,o,r,u),wt=!1;var d=e.memoizedState;o.state=d,es(e,r,o,i),l=e.memoizedState,a!==r||d!==l||ge.current||wt?(typeof p=="function"&&(Yo(e,n,p,r),l=e.memoizedState),(a=wt||mu(e,n,a,r,d,l,u))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Ad(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:je(e.type,a),o.props=u,m=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Le(l):(l=ye(n)?rn:le.current,l=Fn(e,l));var v=n.getDerivedStateFromProps;(p=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==m||d!==l)&&gu(e,o,r,l),wt=!1,d=e.memoizedState,o.state=d,es(e,r,o,i);var _=e.memoizedState;a!==m||d!==_||ge.current||wt?(typeof v=="function"&&(Yo(e,n,v,r),_=e.memoizedState),(u=wt||mu(e,n,u,r,d,_,l)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Zo(t,e,n,r,s,i)}function Zo(t,e,n,r,i,s){rf(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&au(e,n,!1),dt(t,e,s);r=e.stateNode,Cm.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Bn(e,t.child,null,s),e.child=Bn(e,null,a,s)):ue(t,e,a,s),e.memoizedState=r.state,i&&au(e,n,!0),e.child}function sf(t){var e=t.stateNode;e.pendingContext?ou(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ou(t,e.context,!1),Ga(t,e.containerInfo)}function Su(t,e,n,r,i){return bn(),Ba(i),e.flags|=256,ue(t,e,n,r),e.child}var ea={dehydrated:null,treeContext:null,retryLane:0};function ta(t){return{baseLanes:t,cachePool:null,transitions:null}}function of(t,e,n){var r=e.pendingProps,i=H.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),j(H,i&1),t===null)return Go(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ps(o,r,0,null),t=nn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ta(n),e.memoizedState=ea,t):tl(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Tm(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Mt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Mt(a,s):(s=nn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ta(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ea,r}return s=t.child,t=s.sibling,r=Mt(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function tl(t,e){return e=Ps({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function yi(t,e,n,r){return r!==null&&Ba(r),Bn(e,t.child,null,n),t=tl(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Tm(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=oo(Error(w(422))),yi(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ps({mode:"visible",children:r.children},i,0,null),s=nn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Bn(e,t.child,null,o),e.child.memoizedState=ta(o),e.memoizedState=ea,s);if(!(e.mode&1))return yi(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(w(419)),r=oo(s,r,void 0),yi(t,e,o,r)}if(a=(o&t.childLanes)!==0,me||a){if(r=te,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ct(t,i),He(r,t,i,-1))}return al(),r=oo(Error(w(421))),yi(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Fm.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Se=At(i.nextSibling),Ie=e,B=!0,be=null,t!==null&&(Pe[Ne++]=rt,Pe[Ne++]=it,Pe[Ne++]=sn,rt=t.id,it=t.overflow,sn=e),e=tl(e,r.children),e.flags|=4096,e)}function Iu(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Qo(t.return,e,n)}function ao(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function af(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ue(t,e,r.children,n),r=H.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Iu(t,n,e);else if(t.tag===19)Iu(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(j(H,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ts(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ao(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ts(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ao(e,!0,n,null,s);break;case"together":ao(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ai(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function dt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),an|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(w(153));if(e.child!==null){for(t=e.child,n=Mt(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Mt(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function xm(t,e,n){switch(e.tag){case 3:sf(e),bn();break;case 5:Od(e);break;case 1:ye(e.type)&&Yi(e);break;case 4:Ga(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;j(Xi,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(j(H,H.current&1),e.flags|=128,null):n&e.child.childLanes?of(t,e,n):(j(H,H.current&1),t=dt(t,e,n),t!==null?t.sibling:null);j(H,H.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return af(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),j(H,H.current),r)break;return null;case 22:case 23:return e.lanes=0,nf(t,e,n)}return dt(t,e,n)}var lf,na,uf,cf;lf=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};na=function(){};uf=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,en(Ye.current);var s=null;switch(n){case"input":i=Io(t,i),r=Io(t,r),s=[];break;case"select":i=W({},i,{value:void 0}),r=W({},r,{value:void 0}),s=[];break;case"textarea":i=xo(t,i),r=xo(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Gi)}No(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ir.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ir.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&F("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};cf=function(t,e,n,r){n!==r&&(e.flags|=4)};function sr(t,e){if(!B)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function oe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Pm(t,e,n){var r=e.pendingProps;switch(ba(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(e),null;case 1:return ye(e.type)&&Qi(),oe(e),null;case 3:return r=e.stateNode,Vn(),b(ge),b(le),Ya(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(mi(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,be!==null&&(ca(be),be=null))),na(t,e),oe(e),null;case 5:Qa(e);var i=en(Ur.current);if(n=e.type,t!==null&&e.stateNode!=null)uf(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(w(166));return oe(e),null}if(t=en(Ye.current),mi(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ge]=e,r[Dr]=s,t=(e.mode&1)!==0,n){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(i=0;i<cr.length;i++)F(cr[i],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":Ll(r,s),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},F("invalid",r);break;case"textarea":Ml(r,s),F("invalid",r)}No(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&pi(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&pi(r.textContent,a,t),i=["children",""+a]):Ir.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&F("scroll",r)}switch(n){case"input":oi(r),Dl(r,s,!0);break;case"textarea":oi(r),Ul(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Gi)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=zc(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ge]=e,t[Dr]=r,lf(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ro(n,r),n){case"dialog":F("cancel",t),F("close",t),i=r;break;case"iframe":case"object":case"embed":F("load",t),i=r;break;case"video":case"audio":for(i=0;i<cr.length;i++)F(cr[i],t);i=r;break;case"source":F("error",t),i=r;break;case"img":case"image":case"link":F("error",t),F("load",t),i=r;break;case"details":F("toggle",t),i=r;break;case"input":Ll(t,r),i=Io(t,r),F("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=W({},r,{value:void 0}),F("invalid",t);break;case"textarea":Ml(t,r),i=xo(t,r),F("invalid",t);break;default:i=r}No(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?bc(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&jc(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Cr(t,l):typeof l=="number"&&Cr(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ir.hasOwnProperty(s)?l!=null&&s==="onScroll"&&F("scroll",t):l!=null&&Ca(t,s,l,o))}switch(n){case"input":oi(t),Dl(t,r,!1);break;case"textarea":oi(t),Ul(t);break;case"option":r.value!=null&&t.setAttribute("value",""+jt(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Pn(t,!!r.multiple,s,!1):r.defaultValue!=null&&Pn(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Gi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return oe(e),null;case 6:if(t&&e.stateNode!=null)cf(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(w(166));if(n=en(Ur.current),en(Ye.current),mi(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ge]=e,(s=r.nodeValue!==n)&&(t=Ie,t!==null))switch(t.tag){case 3:pi(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&pi(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ge]=e,e.stateNode=r}return oe(e),null;case 13:if(b(H),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(B&&Se!==null&&e.mode&1&&!(e.flags&128))xd(),bn(),e.flags|=98560,s=!1;else if(s=mi(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(w(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[Ge]=e}else bn(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;oe(e),s=!1}else be!==null&&(ca(be),be=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||H.current&1?X===0&&(X=3):al())),e.updateQueue!==null&&(e.flags|=4),oe(e),null);case 4:return Vn(),na(t,e),t===null&&Or(e.stateNode.containerInfo),oe(e),null;case 10:return $a(e.type._context),oe(e),null;case 17:return ye(e.type)&&Qi(),oe(e),null;case 19:if(b(H),s=e.memoizedState,s===null)return oe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)sr(s,!1);else{if(X!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ts(t),o!==null){for(e.flags|=128,sr(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return j(H,H.current&1|2),e.child}t=t.sibling}s.tail!==null&&Y()>$n&&(e.flags|=128,r=!0,sr(s,!1),e.lanes=4194304)}else{if(!r)if(t=ts(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),sr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!B)return oe(e),null}else 2*Y()-s.renderingStartTime>$n&&n!==1073741824&&(e.flags|=128,r=!0,sr(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Y(),e.sibling=null,n=H.current,j(H,r?n&1|2:n&1),e):(oe(e),null);case 22:case 23:return ol(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ee&1073741824&&(oe(e),e.subtreeFlags&6&&(e.flags|=8192)):oe(e),null;case 24:return null;case 25:return null}throw Error(w(156,e.tag))}function Nm(t,e){switch(ba(e),e.tag){case 1:return ye(e.type)&&Qi(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Vn(),b(ge),b(le),Ya(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Qa(e),null;case 13:if(b(H),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(w(340));bn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return b(H),null;case 4:return Vn(),null;case 10:return $a(e.type._context),null;case 22:case 23:return ol(),null;case 24:return null;default:return null}}var vi=!1,ae=!1,Rm=typeof WeakSet=="function"?WeakSet:Set,C=null;function Cn(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(t,e,r)}else n.current=null}function ra(t,e,n){try{n()}catch(r){G(t,e,r)}}var Cu=!1;function Am(t,e){if(bo=$i,t=pd(),ja(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,p=0,m=t,d=null;t:for(;;){for(var v;m!==n||i!==0&&m.nodeType!==3||(a=o+i),m!==s||r!==0&&m.nodeType!==3||(l=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(v=m.firstChild)!==null;)d=m,m=v;for(;;){if(m===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++p===r&&(l=o),(v=m.nextSibling)!==null)break;m=d,d=m.parentNode}m=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bo={focusedElem:t,selectionRange:n},$i=!1,C=e;C!==null;)if(e=C,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,C=t;else for(;C!==null;){e=C;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var k=_.memoizedProps,A=_.memoizedState,f=e.stateNode,c=f.getSnapshotBeforeUpdate(e.elementType===e.type?k:je(e.type,k),A);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=e.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(y){G(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,C=t;break}C=e.return}return _=Cu,Cu=!1,_}function wr(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ra(e,n,s)}i=i.next}while(i!==r)}}function Ts(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ia(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function df(t){var e=t.alternate;e!==null&&(t.alternate=null,df(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ge],delete e[Dr],delete e[$o],delete e[hm],delete e[pm])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ff(t){return t.tag===5||t.tag===3||t.tag===4}function Tu(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ff(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sa(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Gi));else if(r!==4&&(t=t.child,t!==null))for(sa(t,e,n),t=t.sibling;t!==null;)sa(t,e,n),t=t.sibling}function oa(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(oa(t,e,n),t=t.sibling;t!==null;)oa(t,e,n),t=t.sibling}var ne=null,Fe=!1;function gt(t,e,n){for(n=n.child;n!==null;)hf(t,e,n),n=n.sibling}function hf(t,e,n){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(vs,n)}catch{}switch(n.tag){case 5:ae||Cn(n,e);case 6:var r=ne,i=Fe;ne=null,gt(t,e,n),ne=r,Fe=i,ne!==null&&(Fe?(t=ne,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Fe?(t=ne,n=n.stateNode,t.nodeType===8?eo(t.parentNode,n):t.nodeType===1&&eo(t,n),Nr(t)):eo(ne,n.stateNode));break;case 4:r=ne,i=Fe,ne=n.stateNode.containerInfo,Fe=!0,gt(t,e,n),ne=r,Fe=i;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ra(n,e,o),i=i.next}while(i!==r)}gt(t,e,n);break;case 1:if(!ae&&(Cn(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){G(n,e,a)}gt(t,e,n);break;case 21:gt(t,e,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,gt(t,e,n),ae=r):gt(t,e,n);break;default:gt(t,e,n)}}function xu(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Rm),e.forEach(function(r){var i=bm.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ze(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ne=a.stateNode,Fe=!1;break e;case 3:ne=a.stateNode.containerInfo,Fe=!0;break e;case 4:ne=a.stateNode.containerInfo,Fe=!0;break e}a=a.return}if(ne===null)throw Error(w(160));hf(s,o,i),ne=null,Fe=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){G(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)pf(e,t),e=e.sibling}function pf(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ze(e,t),We(t),r&4){try{wr(3,t,t.return),Ts(3,t)}catch(k){G(t,t.return,k)}try{wr(5,t,t.return)}catch(k){G(t,t.return,k)}}break;case 1:ze(e,t),We(t),r&512&&n!==null&&Cn(n,n.return);break;case 5:if(ze(e,t),We(t),r&512&&n!==null&&Cn(n,n.return),t.flags&32){var i=t.stateNode;try{Cr(i,"")}catch(k){G(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Mc(i,s),Ro(a,o);var u=Ro(a,s);for(o=0;o<l.length;o+=2){var p=l[o],m=l[o+1];p==="style"?bc(i,m):p==="dangerouslySetInnerHTML"?jc(i,m):p==="children"?Cr(i,m):Ca(i,p,m,u)}switch(a){case"input":Co(i,s);break;case"textarea":Uc(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Pn(i,!!s.multiple,v,!1):d!==!!s.multiple&&(s.defaultValue!=null?Pn(i,!!s.multiple,s.defaultValue,!0):Pn(i,!!s.multiple,s.multiple?[]:"",!1))}i[Dr]=s}catch(k){G(t,t.return,k)}}break;case 6:if(ze(e,t),We(t),r&4){if(t.stateNode===null)throw Error(w(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){G(t,t.return,k)}}break;case 3:if(ze(e,t),We(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Nr(e.containerInfo)}catch(k){G(t,t.return,k)}break;case 4:ze(e,t),We(t);break;case 13:ze(e,t),We(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(il=Y())),r&4&&xu(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(ae=(u=ae)||p,ze(e,t),ae=u):ze(e,t),We(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!p&&t.mode&1)for(C=t,p=t.child;p!==null;){for(m=C=p;C!==null;){switch(d=C,v=d.child,d.tag){case 0:case 11:case 14:case 15:wr(4,d,d.return);break;case 1:Cn(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(k){G(r,n,k)}}break;case 5:Cn(d,d.return);break;case 22:if(d.memoizedState!==null){Nu(m);continue}}v!==null?(v.return=d,C=v):Nu(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{i=m.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=m.stateNode,l=m.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Fc("display",o))}catch(k){G(t,t.return,k)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(k){G(t,t.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:ze(e,t),We(t),r&4&&xu(t);break;case 21:break;default:ze(e,t),We(t)}}function We(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ff(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Cr(i,""),r.flags&=-33);var s=Tu(t);oa(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Tu(t);sa(t,a,o);break;default:throw Error(w(161))}}catch(l){G(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Om(t,e,n){C=t,mf(t)}function mf(t,e,n){for(var r=(t.mode&1)!==0;C!==null;){var i=C,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||vi;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ae;a=vi;var u=ae;if(vi=o,(ae=l)&&!u)for(C=i;C!==null;)o=C,l=o.child,o.tag===22&&o.memoizedState!==null?Ru(i):l!==null?(l.return=o,C=l):Ru(i);for(;s!==null;)C=s,mf(s),s=s.sibling;C=i,vi=a,ae=u}Pu(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,C=s):Pu(t)}}function Pu(t){for(;C!==null;){var e=C;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ae||Ts(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ae)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:je(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&fu(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}fu(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&Nr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}ae||e.flags&512&&ia(e)}catch(d){G(e,e.return,d)}}if(e===t){C=null;break}if(n=e.sibling,n!==null){n.return=e.return,C=n;break}C=e.return}}function Nu(t){for(;C!==null;){var e=C;if(e===t){C=null;break}var n=e.sibling;if(n!==null){n.return=e.return,C=n;break}C=e.return}}function Ru(t){for(;C!==null;){var e=C;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ts(4,e)}catch(l){G(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){G(e,i,l)}}var s=e.return;try{ia(e)}catch(l){G(e,s,l)}break;case 5:var o=e.return;try{ia(e)}catch(l){G(e,o,l)}}}catch(l){G(e,e.return,l)}if(e===t){C=null;break}var a=e.sibling;if(a!==null){a.return=e.return,C=a;break}C=e.return}}var Lm=Math.ceil,is=pt.ReactCurrentDispatcher,nl=pt.ReactCurrentOwner,Oe=pt.ReactCurrentBatchConfig,D=0,te=null,q=null,re=0,Ee=0,Tn=Bt(0),X=0,br=null,an=0,xs=0,rl=0,_r=null,pe=null,il=0,$n=1/0,tt=null,ss=!1,aa=null,Lt=null,wi=!1,xt=null,os=0,kr=0,la=null,Oi=-1,Li=0;function ce(){return D&6?Y():Oi!==-1?Oi:Oi=Y()}function Dt(t){return t.mode&1?D&2&&re!==0?re&-re:gm.transition!==null?(Li===0&&(Li=Xc()),Li):(t=U,t!==0||(t=window.event,t=t===void 0?16:sd(t.type)),t):1}function He(t,e,n,r){if(50<kr)throw kr=0,la=null,Error(w(185));Wr(t,n,r),(!(D&2)||t!==te)&&(t===te&&(!(D&2)&&(xs|=n),X===4&&kt(t,re)),ve(t,r),n===1&&D===0&&!(e.mode&1)&&($n=Y()+500,Ss&&Vt()))}function ve(t,e){var n=t.callbackNode;gp(t,e);var r=Hi(t,t===te?re:0);if(r===0)n!==null&&Fl(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Fl(n),e===1)t.tag===0?mm(Au.bind(null,t)):Id(Au.bind(null,t)),dm(function(){!(D&6)&&Vt()}),n=null;else{switch(Zc(r)){case 1:n=Ra;break;case 4:n=qc;break;case 16:n=Vi;break;case 536870912:n=Jc;break;default:n=Vi}n=Sf(n,gf.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function gf(t,e){if(Oi=-1,Li=0,D&6)throw Error(w(327));var n=t.callbackNode;if(Ln()&&t.callbackNode!==n)return null;var r=Hi(t,t===te?re:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=as(t,r);else{e=r;var i=D;D|=2;var s=vf();(te!==t||re!==e)&&(tt=null,$n=Y()+500,tn(t,e));do try{Um();break}catch(a){yf(t,a)}while(!0);Ha(),is.current=s,D=i,q!==null?e=0:(te=null,re=0,e=X)}if(e!==0){if(e===2&&(i=Mo(t),i!==0&&(r=i,e=ua(t,i))),e===1)throw n=br,tn(t,0),kt(t,r),ve(t,Y()),n;if(e===6)kt(t,r);else{if(i=t.current.alternate,!(r&30)&&!Dm(i)&&(e=as(t,r),e===2&&(s=Mo(t),s!==0&&(r=s,e=ua(t,s))),e===1))throw n=br,tn(t,0),kt(t,r),ve(t,Y()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(w(345));case 2:qt(t,pe,tt);break;case 3:if(kt(t,r),(r&130023424)===r&&(e=il+500-Y(),10<e)){if(Hi(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ce(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ho(qt.bind(null,t,pe,tt),e);break}qt(t,pe,tt);break;case 4:if(kt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ve(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Lm(r/1960))-r,10<r){t.timeoutHandle=Ho(qt.bind(null,t,pe,tt),r);break}qt(t,pe,tt);break;case 5:qt(t,pe,tt);break;default:throw Error(w(329))}}}return ve(t,Y()),t.callbackNode===n?gf.bind(null,t):null}function ua(t,e){var n=_r;return t.current.memoizedState.isDehydrated&&(tn(t,e).flags|=256),t=as(t,e),t!==2&&(e=pe,pe=n,e!==null&&ca(e)),t}function ca(t){pe===null?pe=t:pe.push.apply(pe,t)}function Dm(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!$e(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function kt(t,e){for(e&=~rl,e&=~xs,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ve(e),r=1<<n;t[n]=-1,e&=~r}}function Au(t){if(D&6)throw Error(w(327));Ln();var e=Hi(t,0);if(!(e&1))return ve(t,Y()),null;var n=as(t,e);if(t.tag!==0&&n===2){var r=Mo(t);r!==0&&(e=r,n=ua(t,r))}if(n===1)throw n=br,tn(t,0),kt(t,e),ve(t,Y()),n;if(n===6)throw Error(w(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,qt(t,pe,tt),ve(t,Y()),null}function sl(t,e){var n=D;D|=1;try{return t(e)}finally{D=n,D===0&&($n=Y()+500,Ss&&Vt())}}function ln(t){xt!==null&&xt.tag===0&&!(D&6)&&Ln();var e=D;D|=1;var n=Oe.transition,r=U;try{if(Oe.transition=null,U=1,t)return t()}finally{U=r,Oe.transition=n,D=e,!(D&6)&&Vt()}}function ol(){Ee=Tn.current,b(Tn)}function tn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cm(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(ba(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qi();break;case 3:Vn(),b(ge),b(le),Ya();break;case 5:Qa(r);break;case 4:Vn();break;case 13:b(H);break;case 19:b(H);break;case 10:$a(r.type._context);break;case 22:case 23:ol()}n=n.return}if(te=t,q=t=Mt(t.current,null),re=Ee=e,X=0,br=null,rl=xs=an=0,pe=_r=null,Zt!==null){for(e=0;e<Zt.length;e++)if(n=Zt[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Zt=null}return t}function yf(t,e){do{var n=q;try{if(Ha(),Ni.current=rs,ns){for(var r=$.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ns=!1}if(on=0,ee=J=$=null,vr=!1,zr=0,nl.current=null,n===null||n.return===null){X=1,br=e,q=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=re,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,p=a,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var d=p.alternate;d?(p.updateQueue=d.updateQueue,p.memoizedState=d.memoizedState,p.lanes=d.lanes):(p.updateQueue=null,p.memoizedState=null)}var v=vu(o);if(v!==null){v.flags&=-257,wu(v,o,a,s,e),v.mode&1&&yu(s,u,e),e=v,l=u;var _=e.updateQueue;if(_===null){var k=new Set;k.add(l),e.updateQueue=k}else _.add(l);break e}else{if(!(e&1)){yu(s,u,e),al();break e}l=Error(w(426))}}else if(B&&a.mode&1){var A=vu(o);if(A!==null){!(A.flags&65536)&&(A.flags|=256),wu(A,o,a,s,e),Ba(Hn(l,a));break e}}s=l=Hn(l,a),X!==4&&(X=2),_r===null?_r=[s]:_r.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Zd(s,l,e);du(s,f);break e;case 1:a=l;var c=s.type,h=s.stateNode;if(!(s.flags&128)&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Lt===null||!Lt.has(h)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=ef(s,a,e);du(s,y);break e}}s=s.return}while(s!==null)}_f(n)}catch(S){e=S,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function vf(){var t=is.current;return is.current=rs,t===null?rs:t}function al(){(X===0||X===3||X===2)&&(X=4),te===null||!(an&268435455)&&!(xs&268435455)||kt(te,re)}function as(t,e){var n=D;D|=2;var r=vf();(te!==t||re!==e)&&(tt=null,tn(t,e));do try{Mm();break}catch(i){yf(t,i)}while(!0);if(Ha(),D=n,is.current=r,q!==null)throw Error(w(261));return te=null,re=0,X}function Mm(){for(;q!==null;)wf(q)}function Um(){for(;q!==null&&!ap();)wf(q)}function wf(t){var e=Ef(t.alternate,t,Ee);t.memoizedProps=t.pendingProps,e===null?_f(t):q=e,nl.current=null}function _f(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Nm(n,e),n!==null){n.flags&=32767,q=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{X=6,q=null;return}}else if(n=Pm(n,e,Ee),n!==null){q=n;return}if(e=e.sibling,e!==null){q=e;return}q=e=t}while(e!==null);X===0&&(X=5)}function qt(t,e,n){var r=U,i=Oe.transition;try{Oe.transition=null,U=1,zm(t,e,n,r)}finally{Oe.transition=i,U=r}return null}function zm(t,e,n,r){do Ln();while(xt!==null);if(D&6)throw Error(w(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(w(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(yp(t,s),t===te&&(q=te=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wi||(wi=!0,Sf(Vi,function(){return Ln(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Oe.transition,Oe.transition=null;var o=U;U=1;var a=D;D|=4,nl.current=null,Am(t,n),pf(n,t),rm(Bo),$i=!!bo,Bo=bo=null,t.current=n,Om(n),lp(),D=a,U=o,Oe.transition=s}else t.current=n;if(wi&&(wi=!1,xt=t,os=i),s=t.pendingLanes,s===0&&(Lt=null),dp(n.stateNode),ve(t,Y()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ss)throw ss=!1,t=aa,aa=null,t;return os&1&&t.tag!==0&&Ln(),s=t.pendingLanes,s&1?t===la?kr++:(kr=0,la=t):kr=0,Vt(),null}function Ln(){if(xt!==null){var t=Zc(os),e=Oe.transition,n=U;try{if(Oe.transition=null,U=16>t?16:t,xt===null)var r=!1;else{if(t=xt,xt=null,os=0,D&6)throw Error(w(331));var i=D;for(D|=4,C=t.current;C!==null;){var s=C,o=s.child;if(C.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(C=u;C!==null;){var p=C;switch(p.tag){case 0:case 11:case 15:wr(8,p,s)}var m=p.child;if(m!==null)m.return=p,C=m;else for(;C!==null;){p=C;var d=p.sibling,v=p.return;if(df(p),p===u){C=null;break}if(d!==null){d.return=v,C=d;break}C=v}}}var _=s.alternate;if(_!==null){var k=_.child;if(k!==null){_.child=null;do{var A=k.sibling;k.sibling=null,k=A}while(k!==null)}}C=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,C=o;else e:for(;C!==null;){if(s=C,s.flags&2048)switch(s.tag){case 0:case 11:case 15:wr(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,C=f;break e}C=s.return}}var c=t.current;for(C=c;C!==null;){o=C;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,C=h;else e:for(o=c;C!==null;){if(a=C,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ts(9,a)}}catch(S){G(a,a.return,S)}if(a===o){C=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,C=y;break e}C=a.return}}if(D=i,Vt(),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(vs,t)}catch{}r=!0}return r}finally{U=n,Oe.transition=e}}return!1}function Ou(t,e,n){e=Hn(n,e),e=Zd(t,e,1),t=Ot(t,e,1),e=ce(),t!==null&&(Wr(t,1,e),ve(t,e))}function G(t,e,n){if(t.tag===3)Ou(t,t,n);else for(;e!==null;){if(e.tag===3){Ou(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Lt===null||!Lt.has(r))){t=Hn(n,t),t=ef(e,t,1),e=Ot(e,t,1),t=ce(),e!==null&&(Wr(e,1,t),ve(e,t));break}}e=e.return}}function jm(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ce(),t.pingedLanes|=t.suspendedLanes&n,te===t&&(re&n)===n&&(X===4||X===3&&(re&130023424)===re&&500>Y()-il?tn(t,0):rl|=n),ve(t,e)}function kf(t,e){e===0&&(t.mode&1?(e=ui,ui<<=1,!(ui&130023424)&&(ui=4194304)):e=1);var n=ce();t=ct(t,e),t!==null&&(Wr(t,e,n),ve(t,n))}function Fm(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),kf(t,n)}function bm(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(e),kf(t,n)}var Ef;Ef=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ge.current)me=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return me=!1,xm(t,e,n);me=!!(t.flags&131072)}else me=!1,B&&e.flags&1048576&&Cd(e,Ji,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ai(t,e),t=e.pendingProps;var i=Fn(e,le.current);On(e,n),i=Ja(null,e,r,t,i,n);var s=Xa();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ye(r)?(s=!0,Yi(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ka(e),i.updater=Cs,e.stateNode=i,i._reactInternals=e,qo(e,r,t,n),e=Zo(null,e,r,!0,s,n)):(e.tag=0,B&&s&&Fa(e),ue(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ai(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Vm(r),t=je(r,t),i){case 0:e=Xo(null,e,r,t,n);break e;case 1:e=Eu(null,e,r,t,n);break e;case 11:e=_u(null,e,r,t,n);break e;case 14:e=ku(null,e,r,je(r.type,t),n);break e}throw Error(w(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:je(r,i),Xo(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:je(r,i),Eu(t,e,r,i,n);case 3:e:{if(sf(e),t===null)throw Error(w(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Ad(t,e),es(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Hn(Error(w(423)),e),e=Su(t,e,r,n,i);break e}else if(r!==i){i=Hn(Error(w(424)),e),e=Su(t,e,r,n,i);break e}else for(Se=At(e.stateNode.containerInfo.firstChild),Ie=e,B=!0,be=null,n=Nd(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bn(),r===i){e=dt(t,e,n);break e}ue(t,e,r,n)}e=e.child}return e;case 5:return Od(e),t===null&&Go(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Vo(r,i)?o=null:s!==null&&Vo(r,s)&&(e.flags|=32),rf(t,e),ue(t,e,o,n),e.child;case 6:return t===null&&Go(e),null;case 13:return of(t,e,n);case 4:return Ga(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Bn(e,null,r,n):ue(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:je(r,i),_u(t,e,r,i,n);case 7:return ue(t,e,e.pendingProps,n),e.child;case 8:return ue(t,e,e.pendingProps.children,n),e.child;case 12:return ue(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,j(Xi,r._currentValue),r._currentValue=o,s!==null)if($e(s.value,o)){if(s.children===i.children&&!ge.current){e=dt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=at(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?l.next=l:(l.next=p.next,p.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Qo(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(w(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Qo(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ue(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,On(e,n),i=Le(i),r=r(i),e.flags|=1,ue(t,e,r,n),e.child;case 14:return r=e.type,i=je(r,e.pendingProps),i=je(r.type,i),ku(t,e,r,i,n);case 15:return tf(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:je(r,i),Ai(t,e),e.tag=1,ye(r)?(t=!0,Yi(e)):t=!1,On(e,n),Xd(e,r,i),qo(e,r,i,n),Zo(null,e,r,!0,t,n);case 19:return af(t,e,n);case 22:return nf(t,e,n)}throw Error(w(156,e.tag))};function Sf(t,e){return Yc(t,e)}function Bm(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ae(t,e,n,r){return new Bm(t,e,n,r)}function ll(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Vm(t){if(typeof t=="function")return ll(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xa)return 11;if(t===Pa)return 14}return 2}function Mt(t,e){var n=t.alternate;return n===null?(n=Ae(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Di(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ll(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case gn:return nn(n.children,i,s,e);case Ta:o=8,i|=8;break;case _o:return t=Ae(12,n,e,i|2),t.elementType=_o,t.lanes=s,t;case ko:return t=Ae(13,n,e,i),t.elementType=ko,t.lanes=s,t;case Eo:return t=Ae(19,n,e,i),t.elementType=Eo,t.lanes=s,t;case Oc:return Ps(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Rc:o=10;break e;case Ac:o=9;break e;case xa:o=11;break e;case Pa:o=14;break e;case vt:o=16,r=null;break e}throw Error(w(130,t==null?t:typeof t,""))}return e=Ae(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function nn(t,e,n,r){return t=Ae(7,t,r,e),t.lanes=n,t}function Ps(t,e,n,r){return t=Ae(22,t,r,e),t.elementType=Oc,t.lanes=n,t.stateNode={isHidden:!1},t}function lo(t,e,n){return t=Ae(6,t,null,e),t.lanes=n,t}function uo(t,e,n){return e=Ae(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Hm(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hs(0),this.expirationTimes=Hs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ul(t,e,n,r,i,s,o,a,l){return t=new Hm(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ae(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ka(s),t}function $m(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function If(t){if(!t)return Ft;t=t._reactInternals;e:{if(hn(t)!==t||t.tag!==1)throw Error(w(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ye(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(w(171))}if(t.tag===1){var n=t.type;if(ye(n))return Sd(t,n,e)}return e}function Cf(t,e,n,r,i,s,o,a,l){return t=ul(n,r,!0,t,i,s,o,a,l),t.context=If(null),n=t.current,r=ce(),i=Dt(n),s=at(r,i),s.callback=e??null,Ot(n,s,i),t.current.lanes=i,Wr(t,i,r),ve(t,r),t}function Ns(t,e,n,r){var i=e.current,s=ce(),o=Dt(i);return n=If(n),e.context===null?e.context=n:e.pendingContext=n,e=at(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ot(i,e,o),t!==null&&(He(t,i,o,s),Pi(t,i,o)),o}function ls(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lu(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function cl(t,e){Lu(t,e),(t=t.alternate)&&Lu(t,e)}function Wm(){return null}var Tf=typeof reportError=="function"?reportError:function(t){console.error(t)};function dl(t){this._internalRoot=t}Rs.prototype.render=dl.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(w(409));Ns(t,e,null,null)};Rs.prototype.unmount=dl.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ln(function(){Ns(null,t,null,null)}),e[ut]=null}};function Rs(t){this._internalRoot=t}Rs.prototype.unstable_scheduleHydration=function(t){if(t){var e=nd();t={blockedOn:null,target:t,priority:e};for(var n=0;n<_t.length&&e!==0&&e<_t[n].priority;n++);_t.splice(n,0,t),n===0&&id(t)}};function fl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function As(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Du(){}function Km(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ls(o);s.call(u)}}var o=Cf(e,r,t,0,null,!1,!1,"",Du);return t._reactRootContainer=o,t[ut]=o.current,Or(t.nodeType===8?t.parentNode:t),ln(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ls(l);a.call(u)}}var l=ul(t,0,!1,null,null,!1,!1,"",Du);return t._reactRootContainer=l,t[ut]=l.current,Or(t.nodeType===8?t.parentNode:t),ln(function(){Ns(e,l,n,r)}),l}function Os(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ls(o);a.call(l)}}Ns(e,o,t,i)}else o=Km(n,e,t,i,r);return ls(o)}ed=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ur(e.pendingLanes);n!==0&&(Aa(e,n|1),ve(e,Y()),!(D&6)&&($n=Y()+500,Vt()))}break;case 13:ln(function(){var r=ct(t,1);if(r!==null){var i=ce();He(r,t,1,i)}}),cl(t,1)}};Oa=function(t){if(t.tag===13){var e=ct(t,134217728);if(e!==null){var n=ce();He(e,t,134217728,n)}cl(t,134217728)}};td=function(t){if(t.tag===13){var e=Dt(t),n=ct(t,e);if(n!==null){var r=ce();He(n,t,e,r)}cl(t,e)}};nd=function(){return U};rd=function(t,e){var n=U;try{return U=t,e()}finally{U=n}};Oo=function(t,e,n){switch(e){case"input":if(Co(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Es(r);if(!i)throw Error(w(90));Dc(r),Co(r,i)}}}break;case"textarea":Uc(t,n);break;case"select":e=n.value,e!=null&&Pn(t,!!n.multiple,e,!1)}};Hc=sl;$c=ln;var Gm={usingClientEntryPoint:!1,Events:[Gr,_n,Es,Bc,Vc,sl]},or={findFiberByHostInstance:Xt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qm={bundleType:or.bundleType,version:or.version,rendererPackageName:or.rendererPackageName,rendererConfig:or.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Gc(t),t===null?null:t.stateNode},findFiberByHostInstance:or.findFiberByHostInstance||Wm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_i.isDisabled&&_i.supportsFiber)try{vs=_i.inject(Qm),Qe=_i}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gm;Te.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fl(e))throw Error(w(200));return $m(t,e,null,n)};Te.createRoot=function(t,e){if(!fl(t))throw Error(w(299));var n=!1,r="",i=Tf;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ul(t,1,!1,null,null,n,!1,r,i),t[ut]=e.current,Or(t.nodeType===8?t.parentNode:t),new dl(e)};Te.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(w(188)):(t=Object.keys(t).join(","),Error(w(268,t)));return t=Gc(e),t=t===null?null:t.stateNode,t};Te.flushSync=function(t){return ln(t)};Te.hydrate=function(t,e,n){if(!As(e))throw Error(w(200));return Os(null,t,e,!0,n)};Te.hydrateRoot=function(t,e,n){if(!fl(t))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Tf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Cf(e,null,t,1,n??null,i,!1,s,o),t[ut]=e.current,Or(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Rs(e)};Te.render=function(t,e,n){if(!As(e))throw Error(w(200));return Os(null,t,e,!1,n)};Te.unmountComponentAtNode=function(t){if(!As(t))throw Error(w(40));return t._reactRootContainer?(ln(function(){Os(null,null,t,!1,function(){t._reactRootContainer=null,t[ut]=null})}),!0):!1};Te.unstable_batchedUpdates=sl;Te.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!As(n))throw Error(w(200));if(t==null||t._reactInternals===void 0)throw Error(w(38));return Os(t,e,n,!1,r)};Te.version="18.3.1-next-f1338f8080-20240426";function xf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xf)}catch(t){console.error(t)}}xf(),Tc.exports=Te;var Ym=Tc.exports,Mu=Ym;vo.createRoot=Mu.createRoot,vo.hydrateRoot=Mu.hydrateRoot;/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Pf=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Jm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=K.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...a},l)=>K.createElement("svg",{ref:l,...Jm,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Pf("lucide",i),...a},[...o.map(([u,p])=>K.createElement(u,p)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=(t,e)=>{const n=K.forwardRef(({className:r,...i},s)=>K.createElement(Xm,{ref:s,iconNode:e,className:Pf(`lucide-${qm(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=we("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=we("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=we("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=we("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=we("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=we("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=we("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=we("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=we("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=we("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=we("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=we("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=we("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=we("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),cg=()=>{};var ju={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},dg=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Rf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,p=s>>2,m=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,v=u&63;l||(v=64,o||(d=64)),r.push(n[p],n[m],n[d],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Nf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||m==null)throw new fg;const d=s<<2|a>>4;if(r.push(d),u!==64){const v=a<<4&240|u>>2;if(r.push(v),m!==64){const _=u<<6&192|m;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class fg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hg=function(t){const e=Nf(t);return Rf.encodeByteArray(e,!0)},Af=function(t){return hg(t).replace(/\./g,"")},Of=function(t){try{return Rf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg=()=>pg().__FIREBASE_DEFAULTS__,gg=()=>{if(typeof process>"u"||typeof ju>"u")return;const t=ju.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Of(t[1]);return e&&JSON.parse(e)},hl=()=>{try{return cg()||mg()||gg()||yg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vg=t=>{var e,n;return(n=(e=hl())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Lf=()=>{var t;return(t=hl())==null?void 0:t.config},Df=t=>{var e;return(e=hl())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function _g(t){return(await fetch(t,{credentials:"include"})).ok}const Er={};function kg(){const t={prod:[],emulator:[]};for(const e of Object.keys(Er))Er[e]?t.emulator.push(e):t.prod.push(e);return t}function Eg(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Fu=!1;function Sg(t,e){if(typeof window>"u"||typeof document>"u"||!Ls(window.location.host)||Er[t]===e||Er[t]||Fu)return;Er[t]=e;function n(d){return`__firebase__banner__${d}`}const r="__firebase__banner",s=kg().prod.length>0;function o(){const d=document.getElementById(r);d&&d.remove()}function a(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="fixed",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function l(d,v){d.setAttribute("width","24"),d.setAttribute("id",v),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function u(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{Fu=!0,o()},d}function p(d,v){d.setAttribute("id",v),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function m(){const d=Eg(r),v=n("text"),_=document.getElementById(v)||document.createElement("span"),k=n("learnmore"),A=document.getElementById(k)||document.createElement("a"),f=n("preprendIcon"),c=document.getElementById(f)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const h=d.element;a(h),p(A,k);const y=u();l(c,f),h.append(c,_,A,y),document.body.appendChild(h)}s?(_.innerText="Preview backend disconnected.",c.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(c.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",v)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ig(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(de())}function Cg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Tg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Pg(){const t=de();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ng(){try{return typeof indexedDB=="object"}catch{return!1}}function Rg(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag="FirebaseError";class Ht extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ag,Object.setPrototypeOf(this,Ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yr.prototype.create)}}class Yr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Og(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ht(i,a,r)}}function Og(t,e){return t.replace(Lg,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Lg=/\{\$([^}]+)}/g;function Dg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(bu(s)&&bu(o)){if(!Wn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function bu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function dr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function fr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Mg(t,e){const n=new Ug(t,e);return n.subscribe.bind(n)}class Ug{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");zg(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=co),i.error===void 0&&(i.error=co),i.complete===void 0&&(i.complete=co);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function co(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(t){return t&&t._delegate?t._delegate:t}class Kn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new wg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bg(e))try{this.getOrInitializeService({instanceIdentifier:Jt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Jt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jt){return this.instances.has(e)}getOptions(e=Jt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Fg(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Jt){return this.component?this.component.multipleInstances?e:Jt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fg(t){return t===Jt?void 0:t}function bg(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(z||(z={}));const Vg={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},Hg=z.INFO,$g={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},Wg=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=$g[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mf{constructor(e){this.name=e,this._logLevel=Hg,this._logHandler=Wg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}}const Kg=(t,e)=>e.some(n=>t instanceof n);let Bu,Vu;function Gg(){return Bu||(Bu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qg(){return Vu||(Vu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Uf=new WeakMap,da=new WeakMap,zf=new WeakMap,fo=new WeakMap,pl=new WeakMap;function Yg(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ut(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Uf.set(n,t)}).catch(()=>{}),pl.set(e,t),e}function qg(t){if(da.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});da.set(t,e)}let fa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return da.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ut(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Jg(t){fa=t(fa)}function Xg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ho(this),e,...n);return zf.set(r,e.sort?e.sort():[e]),Ut(r)}:Qg().includes(t)?function(...e){return t.apply(ho(this),e),Ut(Uf.get(this))}:function(...e){return Ut(t.apply(ho(this),e))}}function Zg(t){return typeof t=="function"?Xg(t):(t instanceof IDBTransaction&&qg(t),Kg(t,Gg())?new Proxy(t,fa):t)}function Ut(t){if(t instanceof IDBRequest)return Yg(t);if(fo.has(t))return fo.get(t);const e=Zg(t);return e!==t&&(fo.set(t,e),pl.set(e,t)),e}const ho=t=>pl.get(t);function ey(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ut(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ut(o.result),l.oldVersion,l.newVersion,Ut(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const ty=["get","getKey","getAll","getAllKeys","count"],ny=["put","add","delete","clear"],po=new Map;function Hu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(po.get(e))return po.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=ny.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ty.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return po.set(e,s),s}Jg(t=>({...t,get:(e,n,r)=>Hu(e,n)||t.get(e,n,r),has:(e,n)=>!!Hu(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(iy(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function iy(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ha="@firebase/app",$u="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft=new Mf("@firebase/app"),sy="@firebase/app-compat",oy="@firebase/analytics-compat",ay="@firebase/analytics",ly="@firebase/app-check-compat",uy="@firebase/app-check",cy="@firebase/auth",dy="@firebase/auth-compat",fy="@firebase/database",hy="@firebase/data-connect",py="@firebase/database-compat",my="@firebase/functions",gy="@firebase/functions-compat",yy="@firebase/installations",vy="@firebase/installations-compat",wy="@firebase/messaging",_y="@firebase/messaging-compat",ky="@firebase/performance",Ey="@firebase/performance-compat",Sy="@firebase/remote-config",Iy="@firebase/remote-config-compat",Cy="@firebase/storage",Ty="@firebase/storage-compat",xy="@firebase/firestore",Py="@firebase/ai",Ny="@firebase/firestore-compat",Ry="firebase",Ay="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa="[DEFAULT]",Oy={[ha]:"fire-core",[sy]:"fire-core-compat",[ay]:"fire-analytics",[oy]:"fire-analytics-compat",[uy]:"fire-app-check",[ly]:"fire-app-check-compat",[cy]:"fire-auth",[dy]:"fire-auth-compat",[fy]:"fire-rtdb",[hy]:"fire-data-connect",[py]:"fire-rtdb-compat",[my]:"fire-fn",[gy]:"fire-fn-compat",[yy]:"fire-iid",[vy]:"fire-iid-compat",[wy]:"fire-fcm",[_y]:"fire-fcm-compat",[ky]:"fire-perf",[Ey]:"fire-perf-compat",[Sy]:"fire-rc",[Iy]:"fire-rc-compat",[Cy]:"fire-gcs",[Ty]:"fire-gcs-compat",[xy]:"fire-fst",[Ny]:"fire-fst-compat",[Py]:"fire-vertex","fire-js":"fire-js",[Ry]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=new Map,Ly=new Map,ma=new Map;function Wu(t,e){try{t.container.addComponent(e)}catch(n){ft.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Br(t){const e=t.name;if(ma.has(e))return ft.debug(`There were multiple attempts to register component ${e}.`),!1;ma.set(e,t);for(const n of us.values())Wu(n,t);for(const n of Ly.values())Wu(n,t);return!0}function jf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Re(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zt=new Yr("app","Firebase",Dy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=Ay;function Ff(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:pa,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw zt.create("bad-app-name",{appName:String(i)});if(n||(n=Lf()),!n)throw zt.create("no-options");const s=us.get(i);if(s){if(Wn(n,s.options)&&Wn(r,s.config))return s;throw zt.create("duplicate-app",{appName:i})}const o=new Bg(i);for(const l of ma.values())o.addComponent(l);const a=new My(n,r,o);return us.set(i,a),a}function Uy(t=pa){const e=us.get(t);if(!e&&t===pa&&Lf())return Ff();if(!e)throw zt.create("no-app",{appName:t});return e}function Dn(t,e,n){let r=Oy[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ft.warn(o.join(" "));return}Br(new Kn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy="firebase-heartbeat-database",jy=1,Vr="firebase-heartbeat-store";let mo=null;function bf(){return mo||(mo=ey(zy,jy,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Vr)}catch(n){console.warn(n)}}}}).catch(t=>{throw zt.create("idb-open",{originalErrorMessage:t.message})})),mo}async function Fy(t){try{const n=(await bf()).transaction(Vr),r=await n.objectStore(Vr).get(Bf(t));return await n.done,r}catch(e){if(e instanceof Ht)ft.warn(e.message);else{const n=zt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ft.warn(n.message)}}}async function Ku(t,e){try{const r=(await bf()).transaction(Vr,"readwrite");await r.objectStore(Vr).put(e,Bf(t)),await r.done}catch(n){if(n instanceof Ht)ft.warn(n.message);else{const r=zt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ft.warn(r.message)}}}function Bf(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by=1024,By=30;class Vy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $y(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Gu();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>By){const o=Wy(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ft.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gu(),{heartbeatsToSend:r,unsentEntries:i}=Hy(this._heartbeatsCache.heartbeats),s=Af(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return ft.warn(n),""}}}function Gu(){return new Date().toISOString().substring(0,10)}function Hy(t,e=by){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Qu(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Qu(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $y{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ng()?Rg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Fy(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ku(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ku(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Qu(t){return Af(JSON.stringify({version:2,heartbeats:t})).length}function Wy(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(t){Br(new Kn("platform-logger",e=>new ry(e),"PRIVATE")),Br(new Kn("heartbeat",e=>new Vy(e),"PRIVATE")),Dn(ha,$u,t),Dn(ha,$u,"esm2020"),Dn("fire-js","")}Ky("");var Gy="firebase",Qy="12.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dn(Gy,Qy,"app");function Vf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Yy=Vf,Hf=new Yr("auth","Firebase",Vf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=new Mf("@firebase/auth");function qy(t,...e){cs.logLevel<=z.WARN&&cs.warn(`Auth (${Jr}): ${t}`,...e)}function Mi(t,...e){cs.logLevel<=z.ERROR&&cs.error(`Auth (${Jr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(t,...e){throw ml(t,...e)}function qe(t,...e){return ml(t,...e)}function $f(t,e,n){const r={...Yy(),[e]:n};return new Yr("auth","Firebase",r).create(e,{appName:t.name})}function Je(t){return $f(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ml(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Hf.create(t,...e)}function P(t,e,...n){if(!t)throw ml(e,...n)}function st(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Mi(e),new Error(e)}function ht(t,e){t||st(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Jy(){return Yu()==="http:"||Yu()==="https:"}function Yu(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Jy()||Tg()||"connection"in navigator)?navigator.onLine:!0}function Zy(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,n){this.shortDelay=e,this.longDelay=n,ht(n>e,"Short delay should be less than long delay!"),this.isMobile=Ig()||xg()}get(){return Xy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(t,e){ht(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;st("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;st("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;st("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],nv=new Xr(3e4,6e4);function Ze(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ue(t,e,n,r,i={}){return Kf(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=qr({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...s};return Cg()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Ls(t.emulatorConfig.host)&&(u.credentials="include"),Wf.fetch()(await Gf(t,t.config.apiHost,n,a),u)})}async function Kf(t,e,n){t._canInitEmulator=!1;const r={...ev,...e};try{const i=new iv(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ei(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ei(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ei(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ei(t,"user-disabled",o);const p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw $f(t,p,u);Me(t,p)}}catch(i){if(i instanceof Ht)throw i;Me(t,"network-request-failed",{message:String(i)})}}async function Zr(t,e,n,r,i={}){const s=await Ue(t,e,n,r,i);return"mfaPendingCredential"in s&&Me(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Gf(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?gl(t.config,i):`${t.config.apiScheme}://${i}`;return tv.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function rv(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class iv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(qe(this.auth,"network-request-failed")),nv.get())})}}function Ei(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=qe(t,e,r);return i.customData._tokenResponse=n,i}function qu(t){return t!==void 0&&t.enterprise!==void 0}class sv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return rv(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ov(t,e){return Ue(t,"GET","/v2/recaptchaConfig",Ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function av(t,e){return Ue(t,"POST","/v1/accounts:delete",e)}async function ds(t,e){return Ue(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lv(t,e=!1){const n=_e(t),r=await n.getIdToken(e),i=yl(r);P(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Sr(go(i.auth_time)),issuedAtTime:Sr(go(i.iat)),expirationTime:Sr(go(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function go(t){return Number(t)*1e3}function yl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Mi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Of(n);return i?JSON.parse(i):(Mi("Failed to decode base64 JWT payload"),null)}catch(i){return Mi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ju(t){const e=yl(t);return P(e,"internal-error"),P(typeof e.exp<"u","internal-error"),P(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function un(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ht&&uv(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function uv({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Sr(this.lastLoginAt),this.creationTime=Sr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs(t){var m;const e=t.auth,n=await t.getIdToken(),r=await un(t,ds(e,{idToken:n}));P(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(m=i.providerUserInfo)!=null&&m.length?Qf(i.providerUserInfo):[],o=fv(t.providerData,s),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),u=a?l:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new ya(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,p)}async function dv(t){const e=_e(t);await fs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fv(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Qf(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hv(t,e){const n=await Kf(t,{},async()=>{const r=qr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await Gf(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&Ls(t.emulatorConfig.host)&&(l.credentials="include"),Wf.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function pv(t,e){return Ue(t,"POST","/v2/accounts:revokeToken",Ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken<"u","internal-error"),P(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ju(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){P(e.length!==0,"internal-error");const n=Ju(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(P(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await hv(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Mn;return r&&(P(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(P(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(P(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mn,this.toJSON())}_performRefresh(){return st("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t,e){P(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Be{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new cv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ya(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await un(this,this.stsTokenManager.getToken(this.auth,e));return P(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lv(this,e)}reload(){return dv(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Be({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await fs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Re(this.auth.app))return Promise.reject(Je(this.auth));const e=await this.getIdToken();return await un(this,av(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,p=n.lastLoginAt??void 0,{uid:m,emailVerified:d,isAnonymous:v,providerData:_,stsTokenManager:k}=n;P(m&&k,e,"internal-error");const A=Mn.fromJSON(this.name,k);P(typeof m=="string",e,"internal-error"),yt(r,e.name),yt(i,e.name),P(typeof d=="boolean",e,"internal-error"),P(typeof v=="boolean",e,"internal-error"),yt(s,e.name),yt(o,e.name),yt(a,e.name),yt(l,e.name),yt(u,e.name),yt(p,e.name);const f=new Be({uid:m,auth:e,email:i,emailVerified:d,displayName:r,isAnonymous:v,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:A,createdAt:u,lastLoginAt:p});return _&&Array.isArray(_)&&(f.providerData=_.map(c=>({...c}))),l&&(f._redirectEventId=l),f}static async _fromIdTokenResponse(e,n,r=!1){const i=new Mn;i.updateFromServerResponse(n);const s=new Be({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await fs(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];P(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Qf(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Mn;a.updateFromIdToken(r);const l=new Be({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ya(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu=new Map;function ot(t){ht(t instanceof Function,"Expected a class definition");let e=Xu.get(t);return e?(ht(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xu.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Yf.type="NONE";const Zu=Yf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(t,e,n){return`firebase:${t}:${e}:${n}`}class Un{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ui(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ui("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ds(this.auth,{idToken:e}).catch(()=>{});return n?Be._fromGetAccountInfoResponse(this.auth,n,e):null}return Be._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Un(ot(Zu),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||ot(Zu);const o=Ui(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const p=await u._get(o);if(p){let m;if(typeof p=="string"){const d=await ds(e,{idToken:p}).catch(()=>{});if(!d)break;m=await Be._fromGetAccountInfoResponse(e,d,p)}else m=Be._fromJSON(e,p);u!==s&&(a=m),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Un(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Un(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(th(e))return"Blackberry";if(nh(e))return"Webos";if(Jf(e))return"Safari";if((e.includes("chrome/")||Xf(e))&&!e.includes("edge/"))return"Chrome";if(eh(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function qf(t=de()){return/firefox\//i.test(t)}function Jf(t=de()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xf(t=de()){return/crios\//i.test(t)}function Zf(t=de()){return/iemobile/i.test(t)}function eh(t=de()){return/android/i.test(t)}function th(t=de()){return/blackberry/i.test(t)}function nh(t=de()){return/webos/i.test(t)}function vl(t=de()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function mv(t=de()){var e;return vl(t)&&!!((e=window.navigator)!=null&&e.standalone)}function gv(){return Pg()&&document.documentMode===10}function rh(t=de()){return vl(t)||eh(t)||nh(t)||th(t)||/windows phone/i.test(t)||Zf(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(t,e=[]){let n;switch(t){case"Browser":n=ec(de());break;case"Worker":n=`${ec(de())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Jr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vv(t,e={}){return Ue(t,"GET","/v2/passwordPolicy",Ze(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv=6;class _v{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??wv,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tc(this),this.idTokenSubscription=new tc(this),this.beforeStateQueue=new yv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ot(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Un.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ds(this,{idToken:e}),r=await Be._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Re(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await fs(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Zy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Re(this.app))return Promise.reject(Je(this));const n=e?_e(e):null;return n&&P(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Re(this.app)?Promise.reject(Je(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Re(this.app)?Promise.reject(Je(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ot(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vv(this),n=new _v(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Yr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await pv(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ot(e)||this._popupRedirectResolver;P(n,this,"argument-error"),this.redirectPersistenceManager=await Un.create(this,[ot(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(P(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ih(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Re(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&qy(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function mt(t){return _e(t)}class tc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Mg(n=>this.observer=n)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ds={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ev(t){Ds=t}function sh(t){return Ds.loadJS(t)}function Sv(){return Ds.recaptchaEnterpriseScript}function Iv(){return Ds.gapiScript}function Cv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Tv{constructor(){this.enterprise=new xv}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class xv{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Pv="recaptcha-enterprise",oh="NO_RECAPTCHA";class Nv{constructor(e){this.type=Pv,this.auth=mt(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{ov(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new sv(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;qu(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(oh)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Tv().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&qu(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Sv();l.length!==0&&(l+=a),sh(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function nc(t,e,n,r=!1,i=!1){const s=new Nv(t);let o;if(i)o=oh;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function hs(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await nc(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await nc(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(t,e){const n=jf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Wn(s,e??{}))return i;Me(i,"already-initialized")}return n.initialize({options:e})}function Av(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ot);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ov(t,e,n){const r=mt(t);P(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=ah(e),{host:o,port:a}=Lv(e),l=a===null?"":`:${a}`,u={url:`${s}//${o}${l}/`},p=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){P(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),P(Wn(u,r.config.emulator)&&Wn(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,Ls(o)?(_g(`${s}//${o}${l}`),Sg("Auth",!0)):Dv()}function ah(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Lv(t){const e=ah(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:rc(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:rc(o)}}}function rc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Dv(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return st("not implemented")}_getIdTokenResponse(e){return st("not implemented")}_linkToIdToken(e,n){return st("not implemented")}_getReauthenticationResolver(e){return st("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lh(t,e){return Ue(t,"POST","/v1/accounts:resetPassword",Ze(t,e))}async function Mv(t,e){return Ue(t,"POST","/v1/accounts:update",e)}async function Uv(t,e){return Ue(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zv(t,e){return Zr(t,"POST","/v1/accounts:signInWithPassword",Ze(t,e))}async function jv(t,e){return Ue(t,"POST","/v1/accounts:sendOobCode",Ze(t,e))}async function Fv(t,e){return jv(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bv(t,e){return Zr(t,"POST","/v1/accounts:signInWithEmailLink",Ze(t,e))}async function Bv(t,e){return Zr(t,"POST","/v1/accounts:signInWithEmailLink",Ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends wl{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Hr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Hr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hs(e,n,"signInWithPassword",zv);case"emailLink":return bv(e,{email:this._email,oobCode:this._password});default:Me(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hs(e,r,"signUpPassword",Uv);case"emailLink":return Bv(e,{idToken:n,email:this._email,oobCode:this._password});default:Me(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zn(t,e){return Zr(t,"POST","/v1/accounts:signInWithIdp",Ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv="http://localhost";class cn extends wl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new cn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Me("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new cn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zn(e,n)}buildRequest(){const e={requestUri:Vv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hv(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $v(t){const e=dr(fr(t)).link,n=e?dr(fr(e)).deep_link_id:null,r=dr(fr(t)).deep_link_id;return(r?dr(fr(r)).link:null)||r||n||e||t}class _l{constructor(e){const n=dr(fr(e)),r=n.apiKey??null,i=n.oobCode??null,s=Hv(n.mode??null);P(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=$v(e);try{return new _l(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this.providerId=qn.PROVIDER_ID}static credential(e,n){return Hr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=_l.parseLink(n);return P(r,"argument-error"),Hr._fromEmailAndCode(e,r.code,r.tenantId)}}qn.PROVIDER_ID="password";qn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends uh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends ei{constructor(){super("facebook.com")}static credential(e){return cn._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch{return null}}}Et.FACEBOOK_SIGN_IN_METHOD="facebook.com";Et.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends ei{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return cn._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return St.credential(n,r)}catch{return null}}}St.GOOGLE_SIGN_IN_METHOD="google.com";St.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends ei{constructor(){super("github.com")}static credential(e){return cn._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return It.credential(e.oauthAccessToken)}catch{return null}}}It.GITHUB_SIGN_IN_METHOD="github.com";It.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends ei{constructor(){super("twitter.com")}static credential(e,n){return cn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ct.credential(n,r)}catch{return null}}}Ct.TWITTER_SIGN_IN_METHOD="twitter.com";Ct.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wv(t,e){return Zr(t,"POST","/v1/accounts:signUp",Ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Be._fromIdTokenResponse(e,r,i),o=ic(r);return new dn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ic(r);return new dn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ic(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps extends Ht{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ps.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ps(e,n,r,i)}}function ch(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ps._fromErrorAndOperation(t,s,e,r):s})}async function Kv(t,e,n=!1){const r=await un(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return dn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gv(t,e,n=!1){const{auth:r}=t;if(Re(r.app))return Promise.reject(Je(r));const i="reauthenticate";try{const s=await un(t,ch(r,i,e,t),n);P(s.idToken,r,"internal-error");const o=yl(s.idToken);P(o,r,"internal-error");const{sub:a}=o;return P(t.uid===a,r,"user-mismatch"),dn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Me(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dh(t,e,n=!1){if(Re(t.app))return Promise.reject(Je(t));const r="signIn",i=await ch(t,r,e),s=await dn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Qv(t,e){return dh(mt(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?El._fromServerResponse(e,n):"totpInfo"in n?Sl._fromServerResponse(e,n):Me(e,"internal-error")}}class El extends kl{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new El(n)}}class Sl extends kl{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Sl(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Il(t){const e=mt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Yv(t,e,n){const r=mt(t);await hs(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Fv)}async function qv(t,e,n){await lh(_e(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Il(t),r})}async function Jv(t,e){const n=_e(t),r=await lh(n,{oobCode:e}),i=r.requestType;switch(P(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":P(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":P(r.mfaInfo,n,"internal-error");default:P(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=kl._fromServerResponse(mt(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function Xv(t,e){const{data:n}=await Jv(_e(t),e);return n.email}async function Zv(t,e,n){if(Re(t.app))return Promise.reject(Je(t));const r=mt(t),o=await hs(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Wv).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Il(t),l}),a=await dn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function e0(t,e,n){return Re(t.app)?Promise.reject(Je(t)):Qv(_e(t),qn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Il(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t0(t,e){return Ue(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sc(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=_e(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await un(r,t0(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function n0(t,e){const n=_e(t);return Re(n.auth.app)?Promise.reject(Je(n.auth)):r0(n,e)}async function r0(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e);const o=await un(t,Mv(r,s));await t._updateTokensIfNecessary(o,!0)}function i0(t,e,n,r){return _e(t).onIdTokenChanged(e,n,r)}function s0(t,e,n){return _e(t).beforeAuthStateChanged(e,n)}function o0(t,e,n,r){return _e(t).onAuthStateChanged(e,n,r)}function a0(t){return _e(t).signOut()}const ms="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ms,"1"),this.storage.removeItem(ms),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0=1e3,u0=10;class hh extends fh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=rh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);gv()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,u0):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},l0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}hh.type="LOCAL";const c0=hh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph extends fh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ph.type="SESSION";const mh=ph;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ms(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await d0(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ms.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Cl("",20);i.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const d=m;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(p),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return window}function h0(t){Xe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(){return typeof Xe().WorkerGlobalScope<"u"&&typeof Xe().importScripts=="function"}async function p0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function m0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function g0(){return gh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh="firebaseLocalStorageDb",y0=1,gs="firebaseLocalStorage",vh="fbase_key";class ti{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Us(t,e){return t.transaction([gs],e?"readwrite":"readonly").objectStore(gs)}function v0(){const t=indexedDB.deleteDatabase(yh);return new ti(t).toPromise()}function va(){const t=indexedDB.open(yh,y0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(gs,{keyPath:vh})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(gs)?e(r):(r.close(),await v0(),e(await va()))})})}async function oc(t,e,n){const r=Us(t,!0).put({[vh]:e,value:n});return new ti(r).toPromise()}async function w0(t,e){const n=Us(t,!1).get(e),r=await new ti(n).toPromise();return r===void 0?null:r.value}function ac(t,e){const n=Us(t,!0).delete(e);return new ti(n).toPromise()}const _0=800,k0=3;class wh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await va(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>k0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ms._getInstance(g0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await p0(),!this.activeServiceWorker)return;this.sender=new f0(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||m0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await va();return await oc(e,ms,"1"),await ac(e,ms),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>oc(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>w0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ac(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Us(i,!1).getAll();return new ti(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wh.type="LOCAL";const E0=wh;new Xr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S0(t,e){return e?ot(e):(P(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl extends wl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function I0(t){return dh(t.auth,new Tl(t),t.bypassAuthState)}function C0(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),Gv(n,new Tl(t),t.bypassAuthState)}async function T0(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),Kv(n,new Tl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return I0;case"linkViaPopup":case"linkViaRedirect":return T0;case"reauthViaPopup":case"reauthViaRedirect":return C0;default:Me(this.auth,"internal-error")}}resolve(e){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0=new Xr(2e3,1e4);class xn extends _h{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,xn.currentPopupAction&&xn.currentPopupAction.cancel(),xn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){ht(this.filter.length===1,"Popup operations only handle one event");const e=Cl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,x0.get())};e()}}xn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0="pendingRedirect",zi=new Map;class N0 extends _h{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=zi.get(this.auth._key());if(!e){try{const r=await R0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}zi.set(this.auth._key(),e)}return this.bypassAuthState||zi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function R0(t,e){const n=L0(e),r=O0(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function A0(t,e){zi.set(t._key(),e)}function O0(t){return ot(t._redirectPersistence)}function L0(t){return Ui(P0,t.config.apiKey,t.name)}async function D0(t,e,n=!1){if(Re(t.app))return Promise.reject(Je(t));const r=mt(t),i=S0(r,e),o=await new N0(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0=10*60*1e3;class U0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!z0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!kh(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(qe(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=M0&&this.cachedEventUids.clear(),this.cachedEventUids.has(lc(e))}saveEventToCache(e){this.cachedEventUids.add(lc(e)),this.lastProcessedEventTime=Date.now()}}function lc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function kh({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function z0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kh(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j0(t,e={}){return Ue(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,b0=/^https?/;async function B0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await j0(t);for(const n of e)try{if(V0(n))return}catch{}Me(t,"unauthorized-domain")}function V0(t){const e=ga(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!b0.test(n))return!1;if(F0.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0=new Xr(3e4,6e4);function uc(){const t=Xe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $0(t){return new Promise((e,n)=>{var i,s,o;function r(){uc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{uc(),n(qe(t,"network-request-failed"))},timeout:H0.get()})}if((s=(i=Xe().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Xe().gapi)!=null&&o.load)r();else{const a=Cv("iframefcb");return Xe()[a]=()=>{gapi.load?r():n(qe(t,"network-request-failed"))},sh(`${Iv()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ji=null,e})}let ji=null;function W0(t){return ji=ji||$0(t),ji}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0=new Xr(5e3,15e3),G0="__/auth/iframe",Q0="emulator/auth/iframe",Y0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},q0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function J0(t){const e=t.config;P(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gl(e,Q0):`https://${t.config.authDomain}/${G0}`,r={apiKey:e.apiKey,appName:t.name,v:Jr},i=q0.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${qr(r).slice(1)}`}async function X0(t){const e=await W0(t),n=Xe().gapi;return P(n,t,"internal-error"),e.open({where:document.body,url:J0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Y0,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=qe(t,"network-request-failed"),a=Xe().setTimeout(()=>{s(o)},K0.get());function l(){Xe().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},e1=500,t1=600,n1="_blank",r1="http://localhost";class cc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function i1(t,e,n,r=e1,i=t1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...Z0,width:r.toString(),height:i.toString(),top:s,left:o},u=de().toLowerCase();n&&(a=Xf(u)?n1:n),qf(u)&&(e=e||r1,l.scrollbars="yes");const p=Object.entries(l).reduce((d,[v,_])=>`${d}${v}=${_},`,"");if(mv(u)&&a!=="_self")return s1(e||"",a),new cc(null);const m=window.open(e||"",a,p);P(m,t,"popup-blocked");try{m.focus()}catch{}return new cc(m)}function s1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1="__/auth/handler",a1="emulator/auth/handler",l1=encodeURIComponent("fac");async function dc(t,e,n,r,i,s){P(t.config.authDomain,t,"auth-domain-config-required"),P(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Jr,eventId:i};if(e instanceof uh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Dg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof ei){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const p of Object.keys(a))a[p]===void 0&&delete a[p];const l=await t._getAppCheckToken(),u=l?`#${l1}=${encodeURIComponent(l)}`:"";return`${u1(t)}?${qr(a).slice(1)}${u}`}function u1({config:t}){return t.emulator?gl(t,a1):`https://${t.authDomain}/${o1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo="webStorageSupport";class c1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mh,this._completeRedirectFn=D0,this._overrideRedirectResult=A0}async _openPopup(e,n,r,i){var o;ht((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await dc(e,n,r,ga(),i);return i1(e,s,Cl())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await dc(e,n,r,ga(),i);return h0(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ht(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await X0(e),r=new U0(e);return n.register("authEvent",i=>(P(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(yo,{type:yo},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[yo];s!==void 0&&n(!!s),Me(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=B0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return rh()||Jf()||vl()}}const d1=c1;var fc="@firebase/auth",hc="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function p1(t){Br(new Kn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;P(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ih(t)},u=new kv(r,i,s,l);return Av(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Br(new Kn("auth-internal",e=>{const n=mt(e.getProvider("auth").getImmediate());return(r=>new f1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dn(fc,hc,h1(t)),Dn(fc,hc,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1=5*60,g1=Df("authIdTokenMaxAge")||m1;let pc=null;const y1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>g1)return;const i=n==null?void 0:n.token;pc!==i&&(pc=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function v1(t=Uy()){const e=jf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Rv(t,{popupRedirectResolver:d1,persistence:[E0,c0,mh]}),r=Df("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=y1(s.toString());s0(n,o,()=>o(n.currentUser)),i0(n,a=>o(a))}}const i=vg("auth");return i&&Ov(n,`http://${i}`),n}function w1(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Ev({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=qe("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",w1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});p1("Browser");const _1={apiKey:"AIzaSyDDqSudAmgIyVT7nfg_2eJM8pf7nUQ7Hmk",authDomain:"kaydol-e1326.firebaseapp.com",projectId:"kaydol-e1326",storageBucket:"kaydol-e1326.firebasestorage.app",messagingSenderId:"272409924206",appId:"1:272409924206:web:7cdc48219e710c8b678c7f",measurementId:"G-6NG7FMP6H8"},k1=Ff(_1),et=v1(k1),E1=({message:t,type:e,onClose:n})=>(K.useEffect(()=>{const r=setTimeout(n,3e3);return()=>clearTimeout(r)},[n]),g.jsxs("div",{className:`fixed top-10 right-10 z-[10000] flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-xl border border-white/10 animate-in slide-in-from-top duration-300 ${e==="success"?"bg-green-500/20 text-green-400":"bg-red-500/20 text-red-400"}`,children:[g.jsx("div",{className:`w-2 h-2 rounded-full ${e==="success"?"bg-green-400":"bg-red-400"} animate-pulse`}),g.jsx("span",{className:"text-sm font-bold tracking-wide",children:t})]}));function S1(){const[t,e]=K.useState("dark"),[n,r]=K.useState(0),[i,s]=K.useState(null),[o,a]=K.useState(!1),[l,u]=K.useState(!1),[p,m]=K.useState("login"),[d,v]=K.useState(!1),[_,k]=K.useState(null),[A,f]=K.useState(""),[c,h]=K.useState(""),[y,S]=K.useState(""),[T,x]=K.useState(null),E=(M,Kt="success")=>x({message:M,type:Kt});K.useEffect(()=>{const M=new URLSearchParams(window.location.search),Kt=M.get("oobCode"),Jn=M.get("mode");Kt&&Jn==="resetPassword"&&Xv(et,Kt).then(()=>{k(Kt),E("Şifre sıfırlama ekranı aktif.")}).catch(()=>E("Bağlantı geçersiz veya süresi dolmuş.","error"));const Xn=o0(et,N=>s(N)),I=()=>r(window.scrollY);return window.addEventListener("scroll",I),()=>{Xn(),window.removeEventListener("scroll",I)}},[]);const V=async()=>{if(c.length<6)return E("Şifre en az 6 karakter olmalı!","error");try{await qv(et,_,c),E("Şifren güncellendi! Giriş yapabilirsin."),k(null),window.history.replaceState({},document.title,"/"),m("login"),a(!0)}catch{E("Bir hata oluştu.","error")}},O=async()=>{try{const M=await Zv(et,A,c);await sc(M.user,{displayName:y}),E(`Hoş geldin, ${y}!`),a(!1)}catch(M){E(M.message,"error")}},ke=async()=>{try{await e0(et,A,c),E("Giriş yapıldı!"),a(!1)}catch(M){E(M.message,"error")}},$t=async()=>{if(!A)return E("Lütfen e-posta adresini gir!","error");try{await Yv(et,A),E("Sıfırlama bağlantısı mail kutuna gönderildi!"),m("login")}catch{E("E-posta bulunamadı veya hatalı.","error")}},Wt=async()=>{try{y&&y!==i.displayName&&await sc(et.currentUser,{displayName:y}),A&&A!==i.email&&await n0(et.currentUser,A),E("Değişiklikler başarıyla kaydedildi!"),setTimeout(()=>u(!1),500)}catch(M){M.code==="auth/requires-recent-login"?E("Güvenlik için tekrar giriş yapmalısın.","error"):E(M.message,"error")}};return g.jsxs("main",{className:`${t==="dark"?"bg-[#050508] text-white":"bg-[#f8f9ff] text-gray-900"} min-h-screen w-full relative overflow-x-hidden transition-colors duration-500`,children:[T&&g.jsx(E1,{message:T.message,type:T.type,onClose:()=>x(null)}),_&&g.jsx("div",{className:"fixed inset-0 z-[2000] bg-[#050508] flex items-center justify-center p-6",children:g.jsxs("div",{className:"bg-[#12121a] border border-white/10 w-full max-w-md rounded-[3rem] p-12 shadow-[0_0_100px_rgba(147,51,234,0.15)]",children:[g.jsxs("div",{className:"text-center mb-8",children:[g.jsx("div",{className:"w-20 h-20 bg-purple-600/20 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-purple-500/30",children:g.jsx(Uu,{className:"text-purple-500",size:32})}),g.jsx("h2",{className:"text-3xl font-black mb-2",children:"Yeni Şifre"}),g.jsx("p",{className:"text-gray-500 text-sm font-medium",children:"Lütfen yeni şifreni belirle."})]}),g.jsx("input",{type:"password",placeholder:"Yeni Şifre",className:"w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 outline-none mb-6 focus:border-purple-500 text-white font-bold",onChange:M=>h(M.target.value)}),g.jsx("button",{onClick:V,className:"w-full bg-purple-600 py-5 rounded-2xl font-black text-lg hover:bg-purple-700 transition-all shadow-xl shadow-purple-500/20 active:scale-95",children:"Şifreyi Güncelle"})]})}),l?g.jsx("div",{className:"fixed inset-0 z-[1000] bg-inherit animate-in fade-in slide-in-from-bottom-8 duration-500 overflow-y-auto",children:g.jsxs("div",{className:"max-w-5xl mx-auto px-6 py-24",children:[g.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6",children:[g.jsxs("div",{children:[g.jsxs("h1",{className:"text-6xl font-black tracking-tighter mb-4 italic",children:["AYARLAR",g.jsx("span",{className:"text-purple-600",children:"."})]}),g.jsx("p",{className:"text-gray-500 font-bold tracking-widest text-xs uppercase opacity-60",children:"Hesap ve Profil Yönetimi"})]}),g.jsx("button",{onClick:()=>u(!1),className:"px-10 py-4 bg-white/5 border border-white/10 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all active:scale-95",children:"Geri Dön"})]}),g.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12",children:[g.jsxs("div",{className:"lg:col-span-4 space-y-3",children:[g.jsxs("div",{className:"p-6 bg-purple-600/10 border border-purple-500/20 rounded-[2rem] text-purple-400 font-black flex items-center gap-4 transition-all",children:[g.jsx(ki,{size:22})," ",g.jsx("span",{className:"text-sm tracking-widest uppercase",children:"Profil Bilgileri"})]}),g.jsxs("div",{className:"p-6 hover:bg-white/5 border border-transparent hover:border-white/10 rounded-[2rem] text-gray-500 font-black flex items-center gap-4 transition-all cursor-not-allowed opacity-40",children:[g.jsx(sg,{size:22})," ",g.jsx("span",{className:"text-sm tracking-widest uppercase",children:"Güvenlik"})]})]}),g.jsxs("div",{className:"lg:col-span-8 space-y-8",children:[g.jsxs("div",{className:"bg-[#12121a] border border-white/10 rounded-[3rem] p-10 md:p-14 space-y-10 shadow-2xl relative overflow-hidden",children:[g.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-purple-600/5 blur-[100px] rounded-full -mr-20 -mt-20"}),g.jsxs("div",{children:[g.jsx("label",{className:"text-[10px] font-black uppercase tracking-[0.3em] opacity-30 mb-4 block",children:"Görünür İsim (Nickname)"}),g.jsxs("div",{className:"relative",children:[g.jsx(ki,{className:"absolute left-6 top-1/2 -translate-y-1/2 text-gray-600",size:20}),g.jsx("input",{type:"text",defaultValue:i==null?void 0:i.displayName,className:"w-full pl-16 pr-8 py-6 rounded-[1.5rem] bg-white/5 border border-white/5 focus:border-purple-500 outline-none transition-all font-bold text-lg",onChange:M=>S(M.target.value)})]})]}),g.jsxs("div",{children:[g.jsx("label",{className:"text-[10px] font-black uppercase tracking-[0.3em] opacity-30 mb-4 block",children:"E-posta Adresi"}),g.jsxs("div",{className:"relative",children:[g.jsx(zu,{className:"absolute left-6 top-1/2 -translate-y-1/2 text-gray-600",size:20}),g.jsx("input",{type:"email",defaultValue:i==null?void 0:i.email,className:"w-full pl-16 pr-8 py-6 rounded-[1.5rem] bg-white/5 border border-white/5 focus:border-purple-500 outline-none transition-all font-bold text-lg",onChange:M=>f(M.target.value)})]})]}),g.jsxs("button",{onClick:Wt,className:"w-full bg-white text-black hover:bg-purple-600 hover:text-white py-6 rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3",children:[g.jsx(rg,{size:20})," Değişiklikleri Kaydet"]})]}),g.jsxs("div",{className:"p-10 border border-red-500/10 bg-red-500/5 rounded-[3rem] flex flex-col md:flex-row justify-between items-center gap-6",children:[g.jsxs("div",{children:[g.jsx("h3",{className:"text-red-500 font-black text-sm uppercase tracking-widest mb-1",children:"Tehlikeli Bölge"}),g.jsx("p",{className:"text-red-500/40 text-[10px] font-bold uppercase tracking-tighter",children:"Hesabı silmek tüm verilerini kalıcı olarak yok eder."})]}),g.jsxs("button",{className:"flex items-center gap-2 px-8 py-4 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white rounded-2xl transition-all text-[10px] font-black uppercase tracking-widest border border-red-500/20",children:[g.jsx(ag,{size:16})," Hesabı Sil"]})]})]})]})]})}):g.jsxs(g.Fragment,{children:[g.jsxs("nav",{className:"fixed top-0 w-full p-8 md:p-12 z-50 flex justify-between items-center",children:[g.jsxs("div",{className:"bg-black/20 dark:bg-white/5 backdrop-blur-3xl border border-white/10 px-8 py-3 rounded-full flex items-center gap-3",children:[g.jsx("div",{className:"w-2 h-2 bg-purple-500 rounded-full animate-pulse"}),g.jsxs("span",{className:"text-[11px] font-black tracking-[0.3em] uppercase",children:["ZAHID",g.jsx("span",{className:"text-purple-500",children:"."}),"LIFE"]})]}),g.jsxs("div",{className:"flex items-center gap-6",children:[i?g.jsxs("div",{className:"relative",children:[g.jsxs("button",{onClick:()=>v(!d),className:"flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-full backdrop-blur-md transition-all group",children:[g.jsx("span",{className:"text-[10px] font-black uppercase tracking-widest",children:i.displayName||"Kullanıcı"}),g.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg",children:g.jsx(ki,{size:16,className:"text-white"})})]}),d&&g.jsxs("div",{className:"absolute right-0 mt-4 w-56 bg-[#0c0c12] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200",children:[g.jsxs("button",{onClick:()=>{u(!0),v(!1)},className:"w-full flex items-center gap-4 px-8 py-5 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white hover:bg-white/5 transition-all border-b border-white/5",children:[g.jsx(ig,{size:16,className:"text-purple-500"})," Ayarlar"]}),g.jsxs("button",{onClick:()=>{a0(et),v(!1),E("Güle güle!")},className:"w-full flex items-center gap-4 px-8 py-5 text-[10px] font-black uppercase tracking-widest text-red-400 hover:bg-red-500/10 transition-all",children:[g.jsx(tg,{size:16})," Çıkış Yap"]})]})]}):g.jsx("button",{onClick:()=>{m("login"),a(!0)},className:"bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-full transition-all text-[11px] font-black uppercase tracking-widest shadow-2xl shadow-purple-500/30 active:scale-95",children:"Giriş Yap"}),g.jsx("button",{onClick:()=>e(M=>M==="dark"?"light":"dark"),className:"p-4 rounded-full bg-white/5 border border-white/10 hover:rotate-12 transition-all",children:t==="dark"?g.jsx(og,{size:20,className:"text-yellow-400"}):g.jsx(ng,{size:20,className:"text-indigo-400"})})]})]}),g.jsxs("section",{className:"h-screen flex flex-col items-center justify-center relative px-6",children:[g.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-purple-600/10 blur-[150px] rounded-full -z-10 animate-pulse"}),g.jsxs("h1",{className:"text-[18vw] font-black tracking-tighter leading-none select-none italic text-center",style:{opacity:Math.max(0,1-n/700),transform:`translateY(${-n*.2}px)`},children:["ZAHID",g.jsx("span",{className:"text-purple-600",children:"."})]}),g.jsxs("div",{className:"flex gap-4 mt-8 opacity-20",children:[g.jsx(eg,{size:20})," ",g.jsx(lg,{size:20})," ",g.jsx(ug,{size:20})]}),g.jsx(Zm,{size:32,className:"absolute bottom-12 animate-bounce opacity-20"})]}),o&&g.jsx("div",{className:"fixed inset-0 z-[2000] flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300",children:g.jsxs("div",{className:"bg-[#0c0c12] border border-white/10 w-full max-w-md rounded-[3.5rem] p-12 text-white shadow-[0_0_100px_rgba(147,51,234,0.1)]",children:[g.jsx("h2",{className:"text-4xl font-black mb-10 italic tracking-tighter",children:p==="login"?"GİRİŞ.":p==="signup"?"KAYIT.":"SIFIRLA."}),g.jsxs("div",{className:"space-y-4",children:[p==="signup"&&g.jsxs("div",{className:"relative",children:[g.jsx(ki,{className:"absolute left-6 top-1/2 -translate-y-1/2 text-gray-600",size:18}),g.jsx("input",{type:"text",placeholder:"NICKNAME",className:"w-full pl-16 pr-6 py-5 rounded-2xl bg-white/5 border border-white/5 focus:border-purple-500 text-xs font-black tracking-widest outline-none",onChange:M=>S(M.target.value)})]}),g.jsxs("div",{className:"relative",children:[g.jsx(zu,{className:"absolute left-6 top-1/2 -translate-y-1/2 text-gray-600",size:18}),g.jsx("input",{type:"email",placeholder:"E-POSTA",className:"w-full pl-16 pr-6 py-5 rounded-2xl bg-white/5 border border-white/5 focus:border-purple-500 text-xs font-black tracking-widest outline-none",onChange:M=>f(M.target.value)})]}),p!=="reset"&&g.jsxs("div",{className:"relative",children:[g.jsx(Uu,{className:"absolute left-6 top-1/2 -translate-y-1/2 text-gray-600",size:18}),g.jsx("input",{type:"password",placeholder:"ŞİFRE",className:"w-full pl-16 pr-6 py-5 rounded-2xl bg-white/5 border border-white/5 focus:border-purple-500 text-xs font-black tracking-widest outline-none",onChange:M=>h(M.target.value)})]})]}),g.jsx("button",{onClick:p==="login"?ke:p==="signup"?O:$t,className:"w-full mt-10 bg-purple-600 py-6 rounded-2xl font-black text-xs tracking-[0.3em] hover:bg-purple-700 transition-all shadow-xl shadow-purple-600/20 active:scale-95",children:p==="login"?"OTURUM AÇ":p==="signup"?"HESAP OLUŞTUR":"LINK GÖNDER"}),g.jsxs("div",{className:"mt-8 flex flex-col gap-4 text-center",children:[g.jsx("button",{onClick:()=>m(p==="login"?"signup":"login"),className:"text-[10px] font-black text-gray-500 hover:text-purple-400 uppercase tracking-[0.2em] transition-colors",children:p==="login"?"ÜYE DEĞİL MİSİN? KAYDOL":"ZATEN ÜYE MİSİN? GİRİŞ YAP"}),p==="login"&&g.jsx("button",{onClick:()=>m("reset"),className:"text-[9px] font-black text-gray-700 hover:text-white uppercase tracking-tighter",children:"Şifremi Unuttum"})]}),g.jsx("button",{onClick:()=>a(!1),className:"w-full mt-10 opacity-10 hover:opacity-100 text-[9px] font-black uppercase tracking-widest transition-opacity",children:"Vazgeç"})]})})]}),g.jsx("style",{jsx:!0,global:!0,children:`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
        body { margin: 0; font-family: 'Inter', sans-serif; overflow-x: hidden; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: #9333ea; border-radius: 10px; }
        input::placeholder { color: rgba(255,255,255,0.15); letter-spacing: 0.1em; }
      `})]})}vo.createRoot(document.getElementById("root")).render(g.jsx(jh.StrictMode,{children:g.jsx(S1,{})}));
