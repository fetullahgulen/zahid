(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function wh(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var fc={exports:{}},ms={},hc={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $r=Symbol.for("react.element"),_h=Symbol.for("react.portal"),Eh=Symbol.for("react.fragment"),Sh=Symbol.for("react.strict_mode"),kh=Symbol.for("react.profiler"),Ih=Symbol.for("react.provider"),Ch=Symbol.for("react.context"),Th=Symbol.for("react.forward_ref"),Ph=Symbol.for("react.suspense"),Nh=Symbol.for("react.memo"),Rh=Symbol.for("react.lazy"),Tl=Symbol.iterator;function Ah(t){return t===null||typeof t!="object"?null:(t=Tl&&t[Tl]||t["@@iterator"],typeof t=="function"?t:null)}var pc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mc=Object.assign,gc={};function Gn(t,e,n){this.props=t,this.context=e,this.refs=gc,this.updater=n||pc}Gn.prototype.isReactComponent={};Gn.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Gn.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function yc(){}yc.prototype=Gn.prototype;function va(t,e,n){this.props=t,this.context=e,this.refs=gc,this.updater=n||pc}var wa=va.prototype=new yc;wa.constructor=va;mc(wa,Gn.prototype);wa.isPureReactComponent=!0;var Pl=Array.isArray,vc=Object.prototype.hasOwnProperty,_a={current:null},wc={key:!0,ref:!0,__self:!0,__source:!0};function _c(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)vc.call(e,r)&&!wc.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:$r,type:t,key:s,ref:o,props:i,_owner:_a.current}}function xh(t,e){return{$$typeof:$r,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ea(t){return typeof t=="object"&&t!==null&&t.$$typeof===$r}function Oh(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Nl=/\/+/g;function zs(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Oh(""+t.key):e.toString(36)}function Ei(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case $r:case _h:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+zs(o,0):r,Pl(i)?(n="",t!=null&&(n=t.replace(Nl,"$&/")+"/"),Ei(i,e,n,"",function(u){return u})):i!=null&&(Ea(i)&&(i=xh(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Nl,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Pl(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+zs(s,a);o+=Ei(s,e,n,l,i)}else if(l=Ah(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+zs(s,a++),o+=Ei(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ri(t,e,n){if(t==null)return t;var r=[],i=0;return Ei(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Lh(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var fe={current:null},Si={transition:null},Dh={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Si,ReactCurrentOwner:_a};function Ec(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:ri,forEach:function(t,e,n){ri(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ri(t,function(){e++}),e},toArray:function(t){return ri(t,function(e){return e})||[]},only:function(t){if(!Ea(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};L.Component=Gn;L.Fragment=Eh;L.Profiler=kh;L.PureComponent=va;L.StrictMode=Sh;L.Suspense=Ph;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dh;L.act=Ec;L.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=mc({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=_a.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)vc.call(e,l)&&!wc.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:$r,type:t.type,key:i,ref:s,props:r,_owner:o}};L.createContext=function(t){return t={$$typeof:Ch,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ih,_context:t},t.Consumer=t};L.createElement=_c;L.createFactory=function(t){var e=_c.bind(null,t);return e.type=t,e};L.createRef=function(){return{current:null}};L.forwardRef=function(t){return{$$typeof:Th,render:t}};L.isValidElement=Ea;L.lazy=function(t){return{$$typeof:Rh,_payload:{_status:-1,_result:t},_init:Lh}};L.memo=function(t,e){return{$$typeof:Nh,type:t,compare:e===void 0?null:e}};L.startTransition=function(t){var e=Si.transition;Si.transition={};try{t()}finally{Si.transition=e}};L.unstable_act=Ec;L.useCallback=function(t,e){return fe.current.useCallback(t,e)};L.useContext=function(t){return fe.current.useContext(t)};L.useDebugValue=function(){};L.useDeferredValue=function(t){return fe.current.useDeferredValue(t)};L.useEffect=function(t,e){return fe.current.useEffect(t,e)};L.useId=function(){return fe.current.useId()};L.useImperativeHandle=function(t,e,n){return fe.current.useImperativeHandle(t,e,n)};L.useInsertionEffect=function(t,e){return fe.current.useInsertionEffect(t,e)};L.useLayoutEffect=function(t,e){return fe.current.useLayoutEffect(t,e)};L.useMemo=function(t,e){return fe.current.useMemo(t,e)};L.useReducer=function(t,e,n){return fe.current.useReducer(t,e,n)};L.useRef=function(t){return fe.current.useRef(t)};L.useState=function(t){return fe.current.useState(t)};L.useSyncExternalStore=function(t,e,n){return fe.current.useSyncExternalStore(t,e,n)};L.useTransition=function(){return fe.current.useTransition()};L.version="18.3.1";hc.exports=L;var K=hc.exports;const Mh=wh(K);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uh=K,zh=Symbol.for("react.element"),Fh=Symbol.for("react.fragment"),jh=Object.prototype.hasOwnProperty,Bh=Uh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vh={key:!0,ref:!0,__self:!0,__source:!0};function Sc(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)jh.call(e,r)&&!Vh.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:zh,type:t,key:s,ref:o,props:i,_owner:Bh.current}}ms.Fragment=Fh;ms.jsx=Sc;ms.jsxs=Sc;fc.exports=ms;var N=fc.exports,yo={},kc={exports:{}},Ce={},Ic={exports:{}},Cc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,R){var A=k.length;k.push(R);e:for(;0<A;){var Q=A-1>>>1,Z=k[Q];if(0<i(Z,R))k[Q]=R,k[A]=Z,A=Q;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var R=k[0],A=k.pop();if(A!==R){k[0]=A;e:for(var Q=0,Z=k.length,ti=Z>>>1;Q<ti;){var Kt=2*(Q+1)-1,Us=k[Kt],Gt=Kt+1,ni=k[Gt];if(0>i(Us,A))Gt<Z&&0>i(ni,Us)?(k[Q]=ni,k[Gt]=A,Q=Gt):(k[Q]=Us,k[Kt]=A,Q=Kt);else if(Gt<Z&&0>i(ni,A))k[Q]=ni,k[Gt]=A,Q=Gt;else break e}}return R}function i(k,R){var A=k.sortIndex-R.sortIndex;return A!==0?A:k.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],p=1,m=null,d=3,y=!1,w=!1,_=!1,x=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(k){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=k)r(u),R.sortIndex=R.expirationTime,e(l,R);else break;R=n(u)}}function g(k){if(_=!1,h(k),!w)if(n(l)!==null)w=!0,Jn(S);else{var R=n(u);R!==null&&hn(g,R.startTime-k)}}function S(k,R){w=!1,_&&(_=!1,f(E),E=-1),y=!0;var A=d;try{for(h(R),m=n(l);m!==null&&(!(m.expirationTime>R)||k&&!_e());){var Q=m.callback;if(typeof Q=="function"){m.callback=null,d=m.priorityLevel;var Z=Q(m.expirationTime<=R);R=t.unstable_now(),typeof Z=="function"?m.callback=Z:m===n(l)&&r(l),h(R)}else r(l);m=n(l)}if(m!==null)var ti=!0;else{var Kt=n(u);Kt!==null&&hn(g,Kt.startTime-R),ti=!1}return ti}finally{m=null,d=A,y=!1}}var C=!1,T=null,E=-1,H=5,O=-1;function _e(){return!(t.unstable_now()-O<H)}function $t(){if(T!==null){var k=t.unstable_now();O=k;var R=!0;try{R=T(!0,k)}finally{R?bt():(C=!1,T=null)}}else C=!1}var bt;if(typeof c=="function")bt=function(){c($t)};else if(typeof MessageChannel<"u"){var M=new MessageChannel,Wt=M.port2;M.port1.onmessage=$t,bt=function(){Wt.postMessage(null)}}else bt=function(){x($t,0)};function Jn(k){T=k,C||(C=!0,bt())}function hn(k,R){E=x(function(){k(t.unstable_now())},R)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){w||y||(w=!0,Jn(S))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(d){case 1:case 2:case 3:var R=3;break;default:R=d}var A=d;d=R;try{return k()}finally{d=A}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,R){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var A=d;d=k;try{return R()}finally{d=A}},t.unstable_scheduleCallback=function(k,R,A){var Q=t.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?Q+A:Q):A=Q,k){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=A+Z,k={id:p++,callback:R,priorityLevel:k,startTime:A,expirationTime:Z,sortIndex:-1},A>Q?(k.sortIndex=A,e(u,k),n(l)===null&&k===n(u)&&(_?(f(E),E=-1):_=!0,hn(g,A-Q))):(k.sortIndex=Z,e(l,k),w||y||(w=!0,Jn(S))),k},t.unstable_shouldYield=_e,t.unstable_wrapCallback=function(k){var R=d;return function(){var A=d;d=R;try{return k.apply(this,arguments)}finally{d=A}}}})(Cc);Ic.exports=Cc;var Hh=Ic.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $h=K,Ie=Hh;function v(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Tc=new Set,kr={};function dn(t,e){Fn(t,e),Fn(t+"Capture",e)}function Fn(t,e){for(kr[t]=e,t=0;t<e.length;t++)Tc.add(e[t])}var at=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vo=Object.prototype.hasOwnProperty,bh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rl={},Al={};function Wh(t){return vo.call(Al,t)?!0:vo.call(Rl,t)?!1:bh.test(t)?Al[t]=!0:(Rl[t]=!0,!1)}function Kh(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Gh(t,e,n,r){if(e===null||typeof e>"u"||Kh(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function he(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ie[t]=new he(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ie[e]=new he(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ie[t]=new he(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ie[t]=new he(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ie[t]=new he(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ie[t]=new he(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ie[t]=new he(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ie[t]=new he(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ie[t]=new he(t,5,!1,t.toLowerCase(),null,!1,!1)});var Sa=/[\-:]([a-z])/g;function ka(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Sa,ka);ie[e]=new he(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Sa,ka);ie[e]=new he(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Sa,ka);ie[e]=new he(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ie[t]=new he(t,1,!1,t.toLowerCase(),null,!1,!1)});ie.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ie[t]=new he(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ia(t,e,n,r){var i=ie.hasOwnProperty(e)?ie[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Gh(e,n,i,r)&&(n=null),r||i===null?Wh(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ht=$h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ii=Symbol.for("react.element"),mn=Symbol.for("react.portal"),gn=Symbol.for("react.fragment"),Ca=Symbol.for("react.strict_mode"),wo=Symbol.for("react.profiler"),Pc=Symbol.for("react.provider"),Nc=Symbol.for("react.context"),Ta=Symbol.for("react.forward_ref"),_o=Symbol.for("react.suspense"),Eo=Symbol.for("react.suspense_list"),Pa=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),Rc=Symbol.for("react.offscreen"),xl=Symbol.iterator;function Xn(t){return t===null||typeof t!="object"?null:(t=xl&&t[xl]||t["@@iterator"],typeof t=="function"?t:null)}var W=Object.assign,Fs;function or(t){if(Fs===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Fs=e&&e[1]||""}return`
`+Fs+t}var js=!1;function Bs(t,e){if(!t||js)return"";js=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{js=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?or(t):""}function Qh(t){switch(t.tag){case 5:return or(t.type);case 16:return or("Lazy");case 13:return or("Suspense");case 19:return or("SuspenseList");case 0:case 2:case 15:return t=Bs(t.type,!1),t;case 11:return t=Bs(t.type.render,!1),t;case 1:return t=Bs(t.type,!0),t;default:return""}}function So(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gn:return"Fragment";case mn:return"Portal";case wo:return"Profiler";case Ca:return"StrictMode";case _o:return"Suspense";case Eo:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Nc:return(t.displayName||"Context")+".Consumer";case Pc:return(t._context.displayName||"Context")+".Provider";case Ta:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Pa:return e=t.displayName||null,e!==null?e:So(t.type)||"Memo";case yt:e=t._payload,t=t._init;try{return So(t(e))}catch{}}return null}function Yh(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return So(e);case 8:return e===Ca?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function zt(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ac(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qh(t){var e=Ac(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function si(t){t._valueTracker||(t._valueTracker=qh(t))}function xc(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ac(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function zi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ko(t,e){var n=e.checked;return W({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ol(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=zt(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Oc(t,e){e=e.checked,e!=null&&Ia(t,"checked",e,!1)}function Io(t,e){Oc(t,e);var n=zt(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Co(t,e.type,n):e.hasOwnProperty("defaultValue")&&Co(t,e.type,zt(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ll(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Co(t,e,n){(e!=="number"||zi(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ar=Array.isArray;function Nn(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+zt(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function To(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(v(91));return W({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Dl(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(v(92));if(ar(n)){if(1<n.length)throw Error(v(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:zt(n)}}function Lc(t,e){var n=zt(e.value),r=zt(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ml(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Dc(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Po(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Dc(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var oi,Mc=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(oi=oi||document.createElement("div"),oi.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=oi.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ir(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jh=["Webkit","ms","Moz","O"];Object.keys(fr).forEach(function(t){Jh.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fr[e]=fr[t]})});function Uc(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fr.hasOwnProperty(t)&&fr[t]?(""+e).trim():e+"px"}function zc(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Uc(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Xh=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function No(t,e){if(e){if(Xh[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(v(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(v(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(v(61))}if(e.style!=null&&typeof e.style!="object")throw Error(v(62))}}function Ro(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ao=null;function Na(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xo=null,Rn=null,An=null;function Ul(t){if(t=Kr(t)){if(typeof xo!="function")throw Error(v(280));var e=t.stateNode;e&&(e=_s(e),xo(t.stateNode,t.type,e))}}function Fc(t){Rn?An?An.push(t):An=[t]:Rn=t}function jc(){if(Rn){var t=Rn,e=An;if(An=Rn=null,Ul(t),e)for(t=0;t<e.length;t++)Ul(e[t])}}function Bc(t,e){return t(e)}function Vc(){}var Vs=!1;function Hc(t,e,n){if(Vs)return t(e,n);Vs=!0;try{return Bc(t,e,n)}finally{Vs=!1,(Rn!==null||An!==null)&&(Vc(),jc())}}function Cr(t,e){var n=t.stateNode;if(n===null)return null;var r=_s(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(v(231,e,typeof n));return n}var Oo=!1;if(at)try{var Zn={};Object.defineProperty(Zn,"passive",{get:function(){Oo=!0}}),window.addEventListener("test",Zn,Zn),window.removeEventListener("test",Zn,Zn)}catch{Oo=!1}function Zh(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(p){this.onError(p)}}var hr=!1,Fi=null,ji=!1,Lo=null,ep={onError:function(t){hr=!0,Fi=t}};function tp(t,e,n,r,i,s,o,a,l){hr=!1,Fi=null,Zh.apply(ep,arguments)}function np(t,e,n,r,i,s,o,a,l){if(tp.apply(this,arguments),hr){if(hr){var u=Fi;hr=!1,Fi=null}else throw Error(v(198));ji||(ji=!0,Lo=u)}}function fn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function $c(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zl(t){if(fn(t)!==t)throw Error(v(188))}function rp(t){var e=t.alternate;if(!e){if(e=fn(t),e===null)throw Error(v(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return zl(i),t;if(s===r)return zl(i),e;s=s.sibling}throw Error(v(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(v(189))}}if(n.alternate!==r)throw Error(v(190))}if(n.tag!==3)throw Error(v(188));return n.stateNode.current===n?t:e}function bc(t){return t=rp(t),t!==null?Wc(t):null}function Wc(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Wc(t);if(e!==null)return e;t=t.sibling}return null}var Kc=Ie.unstable_scheduleCallback,Fl=Ie.unstable_cancelCallback,ip=Ie.unstable_shouldYield,sp=Ie.unstable_requestPaint,Y=Ie.unstable_now,op=Ie.unstable_getCurrentPriorityLevel,Ra=Ie.unstable_ImmediatePriority,Gc=Ie.unstable_UserBlockingPriority,Bi=Ie.unstable_NormalPriority,ap=Ie.unstable_LowPriority,Qc=Ie.unstable_IdlePriority,gs=null,Ge=null;function lp(t){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(gs,t,void 0,(t.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:dp,up=Math.log,cp=Math.LN2;function dp(t){return t>>>=0,t===0?32:31-(up(t)/cp|0)|0}var ai=64,li=4194304;function lr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vi(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=lr(a):(s&=o,s!==0&&(r=lr(s)))}else o=n&~i,o!==0?r=lr(o):s!==0&&(r=lr(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ve(e),i=1<<n,r|=t[n],e&=~i;return r}function fp(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hp(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ve(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=fp(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Do(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Yc(){var t=ai;return ai<<=1,!(ai&4194240)&&(ai=64),t}function Hs(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function br(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ve(e),t[e]=n}function pp(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ve(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Aa(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ve(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var U=0;function qc(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Jc,xa,Xc,Zc,ed,Mo=!1,ui=[],Pt=null,Nt=null,Rt=null,Tr=new Map,Pr=new Map,wt=[],mp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jl(t,e){switch(t){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":Nt=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":Tr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pr.delete(e.pointerId)}}function er(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Kr(e),e!==null&&xa(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function gp(t,e,n,r,i){switch(e){case"focusin":return Pt=er(Pt,t,e,n,r,i),!0;case"dragenter":return Nt=er(Nt,t,e,n,r,i),!0;case"mouseover":return Rt=er(Rt,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Tr.set(s,er(Tr.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Pr.set(s,er(Pr.get(s)||null,t,e,n,r,i)),!0}return!1}function td(t){var e=Jt(t.target);if(e!==null){var n=fn(e);if(n!==null){if(e=n.tag,e===13){if(e=$c(n),e!==null){t.blockedOn=e,ed(t.priority,function(){Xc(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ki(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Uo(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ao=r,n.target.dispatchEvent(r),Ao=null}else return e=Kr(n),e!==null&&xa(e),t.blockedOn=n,!1;e.shift()}return!0}function Bl(t,e,n){ki(t)&&n.delete(e)}function yp(){Mo=!1,Pt!==null&&ki(Pt)&&(Pt=null),Nt!==null&&ki(Nt)&&(Nt=null),Rt!==null&&ki(Rt)&&(Rt=null),Tr.forEach(Bl),Pr.forEach(Bl)}function tr(t,e){t.blockedOn===e&&(t.blockedOn=null,Mo||(Mo=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,yp)))}function Nr(t){function e(i){return tr(i,t)}if(0<ui.length){tr(ui[0],t);for(var n=1;n<ui.length;n++){var r=ui[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Pt!==null&&tr(Pt,t),Nt!==null&&tr(Nt,t),Rt!==null&&tr(Rt,t),Tr.forEach(e),Pr.forEach(e),n=0;n<wt.length;n++)r=wt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<wt.length&&(n=wt[0],n.blockedOn===null);)td(n),n.blockedOn===null&&wt.shift()}var xn=ht.ReactCurrentBatchConfig,Hi=!0;function vp(t,e,n,r){var i=U,s=xn.transition;xn.transition=null;try{U=1,Oa(t,e,n,r)}finally{U=i,xn.transition=s}}function wp(t,e,n,r){var i=U,s=xn.transition;xn.transition=null;try{U=4,Oa(t,e,n,r)}finally{U=i,xn.transition=s}}function Oa(t,e,n,r){if(Hi){var i=Uo(t,e,n,r);if(i===null)Xs(t,e,r,$i,n),jl(t,r);else if(gp(i,t,e,n,r))r.stopPropagation();else if(jl(t,r),e&4&&-1<mp.indexOf(t)){for(;i!==null;){var s=Kr(i);if(s!==null&&Jc(s),s=Uo(t,e,n,r),s===null&&Xs(t,e,r,$i,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Xs(t,e,r,null,n)}}var $i=null;function Uo(t,e,n,r){if($i=null,t=Na(r),t=Jt(t),t!==null)if(e=fn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=$c(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return $i=t,null}function nd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(op()){case Ra:return 1;case Gc:return 4;case Bi:case ap:return 16;case Qc:return 536870912;default:return 16}default:return 16}}var Ct=null,La=null,Ii=null;function rd(){if(Ii)return Ii;var t,e=La,n=e.length,r,i="value"in Ct?Ct.value:Ct.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ii=i.slice(t,1<r?1-r:void 0)}function Ci(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ci(){return!0}function Vl(){return!1}function Te(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ci:Vl,this.isPropagationStopped=Vl,this}return W(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ci)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ci)},persist:function(){},isPersistent:ci}),e}var Qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Da=Te(Qn),Wr=W({},Qn,{view:0,detail:0}),_p=Te(Wr),$s,bs,nr,ys=W({},Wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ma,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==nr&&(nr&&t.type==="mousemove"?($s=t.screenX-nr.screenX,bs=t.screenY-nr.screenY):bs=$s=0,nr=t),$s)},movementY:function(t){return"movementY"in t?t.movementY:bs}}),Hl=Te(ys),Ep=W({},ys,{dataTransfer:0}),Sp=Te(Ep),kp=W({},Wr,{relatedTarget:0}),Ws=Te(kp),Ip=W({},Qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Cp=Te(Ip),Tp=W({},Qn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Pp=Te(Tp),Np=W({},Qn,{data:0}),$l=Te(Np),Rp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ap={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Op(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=xp[t])?!!e[t]:!1}function Ma(){return Op}var Lp=W({},Wr,{key:function(t){if(t.key){var e=Rp[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ci(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ap[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ma,charCode:function(t){return t.type==="keypress"?Ci(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ci(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Dp=Te(Lp),Mp=W({},ys,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bl=Te(Mp),Up=W({},Wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ma}),zp=Te(Up),Fp=W({},Qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),jp=Te(Fp),Bp=W({},ys,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Vp=Te(Bp),Hp=[9,13,27,32],Ua=at&&"CompositionEvent"in window,pr=null;at&&"documentMode"in document&&(pr=document.documentMode);var $p=at&&"TextEvent"in window&&!pr,id=at&&(!Ua||pr&&8<pr&&11>=pr),Wl=" ",Kl=!1;function sd(t,e){switch(t){case"keyup":return Hp.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function od(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yn=!1;function bp(t,e){switch(t){case"compositionend":return od(e);case"keypress":return e.which!==32?null:(Kl=!0,Wl);case"textInput":return t=e.data,t===Wl&&Kl?null:t;default:return null}}function Wp(t,e){if(yn)return t==="compositionend"||!Ua&&sd(t,e)?(t=rd(),Ii=La=Ct=null,yn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return id&&e.locale!=="ko"?null:e.data;default:return null}}var Kp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gl(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Kp[t.type]:e==="textarea"}function ad(t,e,n,r){Fc(r),e=bi(e,"onChange"),0<e.length&&(n=new Da("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var mr=null,Rr=null;function Gp(t){vd(t,0)}function vs(t){var e=_n(t);if(xc(e))return t}function Qp(t,e){if(t==="change")return e}var ld=!1;if(at){var Ks;if(at){var Gs="oninput"in document;if(!Gs){var Ql=document.createElement("div");Ql.setAttribute("oninput","return;"),Gs=typeof Ql.oninput=="function"}Ks=Gs}else Ks=!1;ld=Ks&&(!document.documentMode||9<document.documentMode)}function Yl(){mr&&(mr.detachEvent("onpropertychange",ud),Rr=mr=null)}function ud(t){if(t.propertyName==="value"&&vs(Rr)){var e=[];ad(e,Rr,t,Na(t)),Hc(Gp,e)}}function Yp(t,e,n){t==="focusin"?(Yl(),mr=e,Rr=n,mr.attachEvent("onpropertychange",ud)):t==="focusout"&&Yl()}function qp(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vs(Rr)}function Jp(t,e){if(t==="click")return vs(e)}function Xp(t,e){if(t==="input"||t==="change")return vs(e)}function Zp(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $e=typeof Object.is=="function"?Object.is:Zp;function Ar(t,e){if($e(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!vo.call(e,i)||!$e(t[i],e[i]))return!1}return!0}function ql(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jl(t,e){var n=ql(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ql(n)}}function cd(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?cd(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function dd(){for(var t=window,e=zi();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=zi(t.document)}return e}function za(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function em(t){var e=dd(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&cd(n.ownerDocument.documentElement,n)){if(r!==null&&za(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Jl(n,s);var o=Jl(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var tm=at&&"documentMode"in document&&11>=document.documentMode,vn=null,zo=null,gr=null,Fo=!1;function Xl(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fo||vn==null||vn!==zi(r)||(r=vn,"selectionStart"in r&&za(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),gr&&Ar(gr,r)||(gr=r,r=bi(zo,"onSelect"),0<r.length&&(e=new Da("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=vn)))}function di(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var wn={animationend:di("Animation","AnimationEnd"),animationiteration:di("Animation","AnimationIteration"),animationstart:di("Animation","AnimationStart"),transitionend:di("Transition","TransitionEnd")},Qs={},fd={};at&&(fd=document.createElement("div").style,"AnimationEvent"in window||(delete wn.animationend.animation,delete wn.animationiteration.animation,delete wn.animationstart.animation),"TransitionEvent"in window||delete wn.transitionend.transition);function ws(t){if(Qs[t])return Qs[t];if(!wn[t])return t;var e=wn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in fd)return Qs[t]=e[n];return t}var hd=ws("animationend"),pd=ws("animationiteration"),md=ws("animationstart"),gd=ws("transitionend"),yd=new Map,Zl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jt(t,e){yd.set(t,e),dn(e,[t])}for(var Ys=0;Ys<Zl.length;Ys++){var qs=Zl[Ys],nm=qs.toLowerCase(),rm=qs[0].toUpperCase()+qs.slice(1);jt(nm,"on"+rm)}jt(hd,"onAnimationEnd");jt(pd,"onAnimationIteration");jt(md,"onAnimationStart");jt("dblclick","onDoubleClick");jt("focusin","onFocus");jt("focusout","onBlur");jt(gd,"onTransitionEnd");Fn("onMouseEnter",["mouseout","mouseover"]);Fn("onMouseLeave",["mouseout","mouseover"]);Fn("onPointerEnter",["pointerout","pointerover"]);Fn("onPointerLeave",["pointerout","pointerover"]);dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dn("onBeforeInput",["compositionend","keypress","textInput","paste"]);dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),im=new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));function eu(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,np(r,e,void 0,t),t.currentTarget=null}function vd(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;eu(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;eu(i,a,u),s=l}}}if(ji)throw t=Lo,ji=!1,Lo=null,t}function j(t,e){var n=e[$o];n===void 0&&(n=e[$o]=new Set);var r=t+"__bubble";n.has(r)||(wd(e,t,2,!1),n.add(r))}function Js(t,e,n){var r=0;e&&(r|=4),wd(n,t,r,e)}var fi="_reactListening"+Math.random().toString(36).slice(2);function xr(t){if(!t[fi]){t[fi]=!0,Tc.forEach(function(n){n!=="selectionchange"&&(im.has(n)||Js(n,!1,t),Js(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fi]||(e[fi]=!0,Js("selectionchange",!1,e))}}function wd(t,e,n,r){switch(nd(e)){case 1:var i=vp;break;case 4:i=wp;break;default:i=Oa}n=i.bind(null,e,n,t),i=void 0,!Oo||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Xs(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Jt(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Hc(function(){var u=s,p=Na(n),m=[];e:{var d=yd.get(t);if(d!==void 0){var y=Da,w=t;switch(t){case"keypress":if(Ci(n)===0)break e;case"keydown":case"keyup":y=Dp;break;case"focusin":w="focus",y=Ws;break;case"focusout":w="blur",y=Ws;break;case"beforeblur":case"afterblur":y=Ws;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Hl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Sp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=zp;break;case hd:case pd:case md:y=Cp;break;case gd:y=jp;break;case"scroll":y=_p;break;case"wheel":y=Vp;break;case"copy":case"cut":case"paste":y=Pp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=bl}var _=(e&4)!==0,x=!_&&t==="scroll",f=_?d!==null?d+"Capture":null:d;_=[];for(var c=u,h;c!==null;){h=c;var g=h.stateNode;if(h.tag===5&&g!==null&&(h=g,f!==null&&(g=Cr(c,f),g!=null&&_.push(Or(c,g,h)))),x)break;c=c.return}0<_.length&&(d=new y(d,w,null,n,p),m.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",d&&n!==Ao&&(w=n.relatedTarget||n.fromElement)&&(Jt(w)||w[lt]))break e;if((y||d)&&(d=p.window===p?p:(d=p.ownerDocument)?d.defaultView||d.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=u,w=w?Jt(w):null,w!==null&&(x=fn(w),w!==x||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=u),y!==w)){if(_=Hl,g="onMouseLeave",f="onMouseEnter",c="mouse",(t==="pointerout"||t==="pointerover")&&(_=bl,g="onPointerLeave",f="onPointerEnter",c="pointer"),x=y==null?d:_n(y),h=w==null?d:_n(w),d=new _(g,c+"leave",y,n,p),d.target=x,d.relatedTarget=h,g=null,Jt(p)===u&&(_=new _(f,c+"enter",w,n,p),_.target=h,_.relatedTarget=x,g=_),x=g,y&&w)t:{for(_=y,f=w,c=0,h=_;h;h=pn(h))c++;for(h=0,g=f;g;g=pn(g))h++;for(;0<c-h;)_=pn(_),c--;for(;0<h-c;)f=pn(f),h--;for(;c--;){if(_===f||f!==null&&_===f.alternate)break t;_=pn(_),f=pn(f)}_=null}else _=null;y!==null&&tu(m,d,y,_,!1),w!==null&&x!==null&&tu(m,x,w,_,!0)}}e:{if(d=u?_n(u):window,y=d.nodeName&&d.nodeName.toLowerCase(),y==="select"||y==="input"&&d.type==="file")var S=Qp;else if(Gl(d))if(ld)S=Xp;else{S=qp;var C=Yp}else(y=d.nodeName)&&y.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=Jp);if(S&&(S=S(t,u))){ad(m,S,n,p);break e}C&&C(t,d,u),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&Co(d,"number",d.value)}switch(C=u?_n(u):window,t){case"focusin":(Gl(C)||C.contentEditable==="true")&&(vn=C,zo=u,gr=null);break;case"focusout":gr=zo=vn=null;break;case"mousedown":Fo=!0;break;case"contextmenu":case"mouseup":case"dragend":Fo=!1,Xl(m,n,p);break;case"selectionchange":if(tm)break;case"keydown":case"keyup":Xl(m,n,p)}var T;if(Ua)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else yn?sd(t,n)&&(E="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(id&&n.locale!=="ko"&&(yn||E!=="onCompositionStart"?E==="onCompositionEnd"&&yn&&(T=rd()):(Ct=p,La="value"in Ct?Ct.value:Ct.textContent,yn=!0)),C=bi(u,E),0<C.length&&(E=new $l(E,t,null,n,p),m.push({event:E,listeners:C}),T?E.data=T:(T=od(n),T!==null&&(E.data=T)))),(T=$p?bp(t,n):Wp(t,n))&&(u=bi(u,"onBeforeInput"),0<u.length&&(p=new $l("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:u}),p.data=T))}vd(m,e)})}function Or(t,e,n){return{instance:t,listener:e,currentTarget:n}}function bi(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Cr(t,n),s!=null&&r.unshift(Or(t,s,i)),s=Cr(t,e),s!=null&&r.push(Or(t,s,i))),t=t.return}return r}function pn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function tu(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Cr(n,s),l!=null&&o.unshift(Or(n,l,a))):i||(l=Cr(n,s),l!=null&&o.push(Or(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var sm=/\r\n?/g,om=/\u0000|\uFFFD/g;function nu(t){return(typeof t=="string"?t:""+t).replace(sm,`
`).replace(om,"")}function hi(t,e,n){if(e=nu(e),nu(t)!==e&&n)throw Error(v(425))}function Wi(){}var jo=null,Bo=null;function Vo(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ho=typeof setTimeout=="function"?setTimeout:void 0,am=typeof clearTimeout=="function"?clearTimeout:void 0,ru=typeof Promise=="function"?Promise:void 0,lm=typeof queueMicrotask=="function"?queueMicrotask:typeof ru<"u"?function(t){return ru.resolve(null).then(t).catch(um)}:Ho;function um(t){setTimeout(function(){throw t})}function Zs(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Nr(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Nr(e)}function At(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function iu(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Yn=Math.random().toString(36).slice(2),Ke="__reactFiber$"+Yn,Lr="__reactProps$"+Yn,lt="__reactContainer$"+Yn,$o="__reactEvents$"+Yn,cm="__reactListeners$"+Yn,dm="__reactHandles$"+Yn;function Jt(t){var e=t[Ke];if(e)return e;for(var n=t.parentNode;n;){if(e=n[lt]||n[Ke]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=iu(t);t!==null;){if(n=t[Ke])return n;t=iu(t)}return e}t=n,n=t.parentNode}return null}function Kr(t){return t=t[Ke]||t[lt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function _n(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(v(33))}function _s(t){return t[Lr]||null}var bo=[],En=-1;function Bt(t){return{current:t}}function B(t){0>En||(t.current=bo[En],bo[En]=null,En--)}function F(t,e){En++,bo[En]=t.current,t.current=e}var Ft={},le=Bt(Ft),ge=Bt(!1),nn=Ft;function jn(t,e){var n=t.type.contextTypes;if(!n)return Ft;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ye(t){return t=t.childContextTypes,t!=null}function Ki(){B(ge),B(le)}function su(t,e,n){if(le.current!==Ft)throw Error(v(168));F(le,e),F(ge,n)}function _d(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(v(108,Yh(t)||"Unknown",i));return W({},n,r)}function Gi(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ft,nn=le.current,F(le,t),F(ge,ge.current),!0}function ou(t,e,n){var r=t.stateNode;if(!r)throw Error(v(169));n?(t=_d(t,e,nn),r.__reactInternalMemoizedMergedChildContext=t,B(ge),B(le),F(le,t)):B(ge),F(ge,n)}var tt=null,Es=!1,eo=!1;function Ed(t){tt===null?tt=[t]:tt.push(t)}function fm(t){Es=!0,Ed(t)}function Vt(){if(!eo&&tt!==null){eo=!0;var t=0,e=U;try{var n=tt;for(U=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}tt=null,Es=!1}catch(i){throw tt!==null&&(tt=tt.slice(t+1)),Kc(Ra,Vt),i}finally{U=e,eo=!1}}return null}var Sn=[],kn=0,Qi=null,Yi=0,Pe=[],Ne=0,rn=null,nt=1,rt="";function Qt(t,e){Sn[kn++]=Yi,Sn[kn++]=Qi,Qi=t,Yi=e}function Sd(t,e,n){Pe[Ne++]=nt,Pe[Ne++]=rt,Pe[Ne++]=rn,rn=t;var r=nt;t=rt;var i=32-Ve(r)-1;r&=~(1<<i),n+=1;var s=32-Ve(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,nt=1<<32-Ve(e)+i|n<<i|r,rt=s+t}else nt=1<<s|n<<i|r,rt=t}function Fa(t){t.return!==null&&(Qt(t,1),Sd(t,1,0))}function ja(t){for(;t===Qi;)Qi=Sn[--kn],Sn[kn]=null,Yi=Sn[--kn],Sn[kn]=null;for(;t===rn;)rn=Pe[--Ne],Pe[Ne]=null,rt=Pe[--Ne],Pe[Ne]=null,nt=Pe[--Ne],Pe[Ne]=null}var ke=null,Se=null,V=!1,je=null;function kd(t,e){var n=Ae(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function au(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ke=t,Se=At(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ke=t,Se=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=rn!==null?{id:nt,overflow:rt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ae(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ke=t,Se=null,!0):!1;default:return!1}}function Wo(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ko(t){if(V){var e=Se;if(e){var n=e;if(!au(t,e)){if(Wo(t))throw Error(v(418));e=At(n.nextSibling);var r=ke;e&&au(t,e)?kd(r,n):(t.flags=t.flags&-4097|2,V=!1,ke=t)}}else{if(Wo(t))throw Error(v(418));t.flags=t.flags&-4097|2,V=!1,ke=t}}}function lu(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ke=t}function pi(t){if(t!==ke)return!1;if(!V)return lu(t),V=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Vo(t.type,t.memoizedProps)),e&&(e=Se)){if(Wo(t))throw Id(),Error(v(418));for(;e;)kd(t,e),e=At(e.nextSibling)}if(lu(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(v(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Se=At(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Se=null}}else Se=ke?At(t.stateNode.nextSibling):null;return!0}function Id(){for(var t=Se;t;)t=At(t.nextSibling)}function Bn(){Se=ke=null,V=!1}function Ba(t){je===null?je=[t]:je.push(t)}var hm=ht.ReactCurrentBatchConfig;function rr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(v(309));var r=n.stateNode}if(!r)throw Error(v(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(v(284));if(!n._owner)throw Error(v(290,t))}return t}function mi(t,e){throw t=Object.prototype.toString.call(e),Error(v(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function uu(t){var e=t._init;return e(t._payload)}function Cd(t){function e(f,c){if(t){var h=f.deletions;h===null?(f.deletions=[c],f.flags|=16):h.push(c)}}function n(f,c){if(!t)return null;for(;c!==null;)e(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=Dt(f,c),f.index=0,f.sibling=null,f}function s(f,c,h){return f.index=h,t?(h=f.alternate,h!==null?(h=h.index,h<c?(f.flags|=2,c):h):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,c,h,g){return c===null||c.tag!==6?(c=ao(h,f.mode,g),c.return=f,c):(c=i(c,h),c.return=f,c)}function l(f,c,h,g){var S=h.type;return S===gn?p(f,c,h.props.children,g,h.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===yt&&uu(S)===c.type)?(g=i(c,h.props),g.ref=rr(f,c,h),g.return=f,g):(g=Oi(h.type,h.key,h.props,null,f.mode,g),g.ref=rr(f,c,h),g.return=f,g)}function u(f,c,h,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=lo(h,f.mode,g),c.return=f,c):(c=i(c,h.children||[]),c.return=f,c)}function p(f,c,h,g,S){return c===null||c.tag!==7?(c=tn(h,f.mode,g,S),c.return=f,c):(c=i(c,h),c.return=f,c)}function m(f,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ao(""+c,f.mode,h),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ii:return h=Oi(c.type,c.key,c.props,null,f.mode,h),h.ref=rr(f,null,c),h.return=f,h;case mn:return c=lo(c,f.mode,h),c.return=f,c;case yt:var g=c._init;return m(f,g(c._payload),h)}if(ar(c)||Xn(c))return c=tn(c,f.mode,h,null),c.return=f,c;mi(f,c)}return null}function d(f,c,h,g){var S=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:a(f,c,""+h,g);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ii:return h.key===S?l(f,c,h,g):null;case mn:return h.key===S?u(f,c,h,g):null;case yt:return S=h._init,d(f,c,S(h._payload),g)}if(ar(h)||Xn(h))return S!==null?null:p(f,c,h,g,null);mi(f,h)}return null}function y(f,c,h,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(h)||null,a(c,f,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ii:return f=f.get(g.key===null?h:g.key)||null,l(c,f,g,S);case mn:return f=f.get(g.key===null?h:g.key)||null,u(c,f,g,S);case yt:var C=g._init;return y(f,c,h,C(g._payload),S)}if(ar(g)||Xn(g))return f=f.get(h)||null,p(c,f,g,S,null);mi(c,g)}return null}function w(f,c,h,g){for(var S=null,C=null,T=c,E=c=0,H=null;T!==null&&E<h.length;E++){T.index>E?(H=T,T=null):H=T.sibling;var O=d(f,T,h[E],g);if(O===null){T===null&&(T=H);break}t&&T&&O.alternate===null&&e(f,T),c=s(O,c,E),C===null?S=O:C.sibling=O,C=O,T=H}if(E===h.length)return n(f,T),V&&Qt(f,E),S;if(T===null){for(;E<h.length;E++)T=m(f,h[E],g),T!==null&&(c=s(T,c,E),C===null?S=T:C.sibling=T,C=T);return V&&Qt(f,E),S}for(T=r(f,T);E<h.length;E++)H=y(T,f,E,h[E],g),H!==null&&(t&&H.alternate!==null&&T.delete(H.key===null?E:H.key),c=s(H,c,E),C===null?S=H:C.sibling=H,C=H);return t&&T.forEach(function(_e){return e(f,_e)}),V&&Qt(f,E),S}function _(f,c,h,g){var S=Xn(h);if(typeof S!="function")throw Error(v(150));if(h=S.call(h),h==null)throw Error(v(151));for(var C=S=null,T=c,E=c=0,H=null,O=h.next();T!==null&&!O.done;E++,O=h.next()){T.index>E?(H=T,T=null):H=T.sibling;var _e=d(f,T,O.value,g);if(_e===null){T===null&&(T=H);break}t&&T&&_e.alternate===null&&e(f,T),c=s(_e,c,E),C===null?S=_e:C.sibling=_e,C=_e,T=H}if(O.done)return n(f,T),V&&Qt(f,E),S;if(T===null){for(;!O.done;E++,O=h.next())O=m(f,O.value,g),O!==null&&(c=s(O,c,E),C===null?S=O:C.sibling=O,C=O);return V&&Qt(f,E),S}for(T=r(f,T);!O.done;E++,O=h.next())O=y(T,f,E,O.value,g),O!==null&&(t&&O.alternate!==null&&T.delete(O.key===null?E:O.key),c=s(O,c,E),C===null?S=O:C.sibling=O,C=O);return t&&T.forEach(function($t){return e(f,$t)}),V&&Qt(f,E),S}function x(f,c,h,g){if(typeof h=="object"&&h!==null&&h.type===gn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case ii:e:{for(var S=h.key,C=c;C!==null;){if(C.key===S){if(S=h.type,S===gn){if(C.tag===7){n(f,C.sibling),c=i(C,h.props.children),c.return=f,f=c;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===yt&&uu(S)===C.type){n(f,C.sibling),c=i(C,h.props),c.ref=rr(f,C,h),c.return=f,f=c;break e}n(f,C);break}else e(f,C);C=C.sibling}h.type===gn?(c=tn(h.props.children,f.mode,g,h.key),c.return=f,f=c):(g=Oi(h.type,h.key,h.props,null,f.mode,g),g.ref=rr(f,c,h),g.return=f,f=g)}return o(f);case mn:e:{for(C=h.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(f,c.sibling),c=i(c,h.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else e(f,c);c=c.sibling}c=lo(h,f.mode,g),c.return=f,f=c}return o(f);case yt:return C=h._init,x(f,c,C(h._payload),g)}if(ar(h))return w(f,c,h,g);if(Xn(h))return _(f,c,h,g);mi(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,h),c.return=f,f=c):(n(f,c),c=ao(h,f.mode,g),c.return=f,f=c),o(f)):n(f,c)}return x}var Vn=Cd(!0),Td=Cd(!1),qi=Bt(null),Ji=null,In=null,Va=null;function Ha(){Va=In=Ji=null}function $a(t){var e=qi.current;B(qi),t._currentValue=e}function Go(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function On(t,e){Ji=t,Va=In=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(me=!0),t.firstContext=null)}function Oe(t){var e=t._currentValue;if(Va!==t)if(t={context:t,memoizedValue:e,next:null},In===null){if(Ji===null)throw Error(v(308));In=t,Ji.dependencies={lanes:0,firstContext:t}}else In=In.next=t;return e}var Xt=null;function ba(t){Xt===null?Xt=[t]:Xt.push(t)}function Pd(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ba(e)):(n.next=i.next,i.next=n),e.interleaved=n,ut(t,r)}function ut(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var vt=!1;function Wa(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nd(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ot(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function xt(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ut(t,n)}return i=r.interleaved,i===null?(e.next=e,ba(r)):(e.next=i.next,i.next=e),r.interleaved=e,ut(t,n)}function Ti(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Aa(t,n)}}function cu(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Xi(t,e,n,r){var i=t.updateQueue;vt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var p=t.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==o&&(a===null?p.firstBaseUpdate=u:a.next=u,p.lastBaseUpdate=l))}if(s!==null){var m=i.baseState;o=0,p=u=l=null,a=s;do{var d=a.lane,y=a.eventTime;if((r&d)===d){p!==null&&(p=p.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,_=a;switch(d=e,y=n,_.tag){case 1:if(w=_.payload,typeof w=="function"){m=w.call(y,m,d);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=_.payload,d=typeof w=="function"?w.call(y,m,d):w,d==null)break e;m=W({},m,d);break e;case 2:vt=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else y={eventTime:y,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(u=p=y,l=m):p=p.next=y,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(p===null&&(l=m),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);on|=o,t.lanes=o,t.memoizedState=m}}function du(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(v(191,i));i.call(r)}}}var Gr={},Qe=Bt(Gr),Dr=Bt(Gr),Mr=Bt(Gr);function Zt(t){if(t===Gr)throw Error(v(174));return t}function Ka(t,e){switch(F(Mr,e),F(Dr,t),F(Qe,Gr),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Po(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Po(e,t)}B(Qe),F(Qe,e)}function Hn(){B(Qe),B(Dr),B(Mr)}function Rd(t){Zt(Mr.current);var e=Zt(Qe.current),n=Po(e,t.type);e!==n&&(F(Dr,t),F(Qe,n))}function Ga(t){Dr.current===t&&(B(Qe),B(Dr))}var $=Bt(0);function Zi(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var to=[];function Qa(){for(var t=0;t<to.length;t++)to[t]._workInProgressVersionPrimary=null;to.length=0}var Pi=ht.ReactCurrentDispatcher,no=ht.ReactCurrentBatchConfig,sn=0,b=null,J=null,ee=null,es=!1,yr=!1,Ur=0,pm=0;function se(){throw Error(v(321))}function Ya(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$e(t[n],e[n]))return!1;return!0}function qa(t,e,n,r,i,s){if(sn=s,b=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pi.current=t===null||t.memoizedState===null?vm:wm,t=n(r,i),yr){s=0;do{if(yr=!1,Ur=0,25<=s)throw Error(v(301));s+=1,ee=J=null,e.updateQueue=null,Pi.current=_m,t=n(r,i)}while(yr)}if(Pi.current=ts,e=J!==null&&J.next!==null,sn=0,ee=J=b=null,es=!1,e)throw Error(v(300));return t}function Ja(){var t=Ur!==0;return Ur=0,t}function We(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?b.memoizedState=ee=t:ee=ee.next=t,ee}function Le(){if(J===null){var t=b.alternate;t=t!==null?t.memoizedState:null}else t=J.next;var e=ee===null?b.memoizedState:ee.next;if(e!==null)ee=e,J=t;else{if(t===null)throw Error(v(310));J=t,t={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},ee===null?b.memoizedState=ee=t:ee=ee.next=t}return ee}function zr(t,e){return typeof e=="function"?e(t):e}function ro(t){var e=Le(),n=e.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=t;var r=J,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var p=u.lane;if((sn&p)===p)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var m={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=m,o=r):l=l.next=m,b.lanes|=p,on|=p}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,$e(r,e.memoizedState)||(me=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,b.lanes|=s,on|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function io(t){var e=Le(),n=e.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);$e(s,e.memoizedState)||(me=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Ad(){}function xd(t,e){var n=b,r=Le(),i=e(),s=!$e(r.memoizedState,i);if(s&&(r.memoizedState=i,me=!0),r=r.queue,Xa(Dd.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,Fr(9,Ld.bind(null,n,r,i,e),void 0,null),te===null)throw Error(v(349));sn&30||Od(n,e,i)}return i}function Od(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=b.updateQueue,e===null?(e={lastEffect:null,stores:null},b.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ld(t,e,n,r){e.value=n,e.getSnapshot=r,Md(e)&&Ud(t)}function Dd(t,e,n){return n(function(){Md(e)&&Ud(t)})}function Md(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$e(t,n)}catch{return!0}}function Ud(t){var e=ut(t,1);e!==null&&He(e,t,1,-1)}function fu(t){var e=We();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zr,lastRenderedState:t},e.queue=t,t=t.dispatch=ym.bind(null,b,t),[e.memoizedState,t]}function Fr(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=b.updateQueue,e===null?(e={lastEffect:null,stores:null},b.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function zd(){return Le().memoizedState}function Ni(t,e,n,r){var i=We();b.flags|=t,i.memoizedState=Fr(1|e,n,void 0,r===void 0?null:r)}function Ss(t,e,n,r){var i=Le();r=r===void 0?null:r;var s=void 0;if(J!==null){var o=J.memoizedState;if(s=o.destroy,r!==null&&Ya(r,o.deps)){i.memoizedState=Fr(e,n,s,r);return}}b.flags|=t,i.memoizedState=Fr(1|e,n,s,r)}function hu(t,e){return Ni(8390656,8,t,e)}function Xa(t,e){return Ss(2048,8,t,e)}function Fd(t,e){return Ss(4,2,t,e)}function jd(t,e){return Ss(4,4,t,e)}function Bd(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Vd(t,e,n){return n=n!=null?n.concat([t]):null,Ss(4,4,Bd.bind(null,e,t),n)}function Za(){}function Hd(t,e){var n=Le();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ya(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function $d(t,e){var n=Le();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ya(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function bd(t,e,n){return sn&21?($e(n,e)||(n=Yc(),b.lanes|=n,on|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,me=!0),t.memoizedState=n)}function mm(t,e){var n=U;U=n!==0&&4>n?n:4,t(!0);var r=no.transition;no.transition={};try{t(!1),e()}finally{U=n,no.transition=r}}function Wd(){return Le().memoizedState}function gm(t,e,n){var r=Lt(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Kd(t))Gd(e,n);else if(n=Pd(t,e,n,r),n!==null){var i=ce();He(n,t,r,i),Qd(n,e,r)}}function ym(t,e,n){var r=Lt(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Kd(t))Gd(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,$e(a,o)){var l=e.interleaved;l===null?(i.next=i,ba(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Pd(t,e,i,r),n!==null&&(i=ce(),He(n,t,r,i),Qd(n,e,r))}}function Kd(t){var e=t.alternate;return t===b||e!==null&&e===b}function Gd(t,e){yr=es=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Qd(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Aa(t,n)}}var ts={readContext:Oe,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},vm={readContext:Oe,useCallback:function(t,e){return We().memoizedState=[t,e===void 0?null:e],t},useContext:Oe,useEffect:hu,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ni(4194308,4,Bd.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ni(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ni(4,2,t,e)},useMemo:function(t,e){var n=We();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=We();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=gm.bind(null,b,t),[r.memoizedState,t]},useRef:function(t){var e=We();return t={current:t},e.memoizedState=t},useState:fu,useDebugValue:Za,useDeferredValue:function(t){return We().memoizedState=t},useTransition:function(){var t=fu(!1),e=t[0];return t=mm.bind(null,t[1]),We().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=b,i=We();if(V){if(n===void 0)throw Error(v(407));n=n()}else{if(n=e(),te===null)throw Error(v(349));sn&30||Od(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,hu(Dd.bind(null,r,s,t),[t]),r.flags|=2048,Fr(9,Ld.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=We(),e=te.identifierPrefix;if(V){var n=rt,r=nt;n=(r&~(1<<32-Ve(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ur++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=pm++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},wm={readContext:Oe,useCallback:Hd,useContext:Oe,useEffect:Xa,useImperativeHandle:Vd,useInsertionEffect:Fd,useLayoutEffect:jd,useMemo:$d,useReducer:ro,useRef:zd,useState:function(){return ro(zr)},useDebugValue:Za,useDeferredValue:function(t){var e=Le();return bd(e,J.memoizedState,t)},useTransition:function(){var t=ro(zr)[0],e=Le().memoizedState;return[t,e]},useMutableSource:Ad,useSyncExternalStore:xd,useId:Wd,unstable_isNewReconciler:!1},_m={readContext:Oe,useCallback:Hd,useContext:Oe,useEffect:Xa,useImperativeHandle:Vd,useInsertionEffect:Fd,useLayoutEffect:jd,useMemo:$d,useReducer:io,useRef:zd,useState:function(){return io(zr)},useDebugValue:Za,useDeferredValue:function(t){var e=Le();return J===null?e.memoizedState=t:bd(e,J.memoizedState,t)},useTransition:function(){var t=io(zr)[0],e=Le().memoizedState;return[t,e]},useMutableSource:Ad,useSyncExternalStore:xd,useId:Wd,unstable_isNewReconciler:!1};function ze(t,e){if(t&&t.defaultProps){e=W({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Qo(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:W({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ks={isMounted:function(t){return(t=t._reactInternals)?fn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ce(),i=Lt(t),s=ot(r,i);s.payload=e,n!=null&&(s.callback=n),e=xt(t,s,i),e!==null&&(He(e,t,i,r),Ti(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ce(),i=Lt(t),s=ot(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=xt(t,s,i),e!==null&&(He(e,t,i,r),Ti(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ce(),r=Lt(t),i=ot(n,r);i.tag=2,e!=null&&(i.callback=e),e=xt(t,i,r),e!==null&&(He(e,t,r,n),Ti(e,t,r))}};function pu(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ar(n,r)||!Ar(i,s):!0}function Yd(t,e,n){var r=!1,i=Ft,s=e.contextType;return typeof s=="object"&&s!==null?s=Oe(s):(i=ye(e)?nn:le.current,r=e.contextTypes,s=(r=r!=null)?jn(t,i):Ft),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ks,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function mu(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ks.enqueueReplaceState(e,e.state,null)}function Yo(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Wa(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Oe(s):(s=ye(e)?nn:le.current,i.context=jn(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Qo(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ks.enqueueReplaceState(i,i.state,null),Xi(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function $n(t,e){try{var n="",r=e;do n+=Qh(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function so(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function qo(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Em=typeof WeakMap=="function"?WeakMap:Map;function qd(t,e,n){n=ot(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){rs||(rs=!0,oa=r),qo(t,e)},n}function Jd(t,e,n){n=ot(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){qo(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){qo(t,e),typeof r!="function"&&(Ot===null?Ot=new Set([this]):Ot.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function gu(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Em;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Mm.bind(null,t,e,n),e.then(t,t))}function yu(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function vu(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ot(-1,1),e.tag=2,xt(n,e,1))),n.lanes|=1),t)}var Sm=ht.ReactCurrentOwner,me=!1;function ue(t,e,n,r){e.child=t===null?Td(e,null,n,r):Vn(e,t.child,n,r)}function wu(t,e,n,r,i){n=n.render;var s=e.ref;return On(e,i),r=qa(t,e,n,r,s,i),n=Ja(),t!==null&&!me?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ct(t,e,i)):(V&&n&&Fa(e),e.flags|=1,ue(t,e,r,i),e.child)}function _u(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!al(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Xd(t,e,s,r,i)):(t=Oi(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ar,n(o,r)&&t.ref===e.ref)return ct(t,e,i)}return e.flags|=1,t=Dt(s,r),t.ref=e.ref,t.return=e,e.child=t}function Xd(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ar(s,r)&&t.ref===e.ref)if(me=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(me=!0);else return e.lanes=t.lanes,ct(t,e,i)}return Jo(t,e,n,r,i)}function Zd(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(Tn,Ee),Ee|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,F(Tn,Ee),Ee|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,F(Tn,Ee),Ee|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,F(Tn,Ee),Ee|=r;return ue(t,e,i,n),e.child}function ef(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Jo(t,e,n,r,i){var s=ye(n)?nn:le.current;return s=jn(e,s),On(e,i),n=qa(t,e,n,r,s,i),r=Ja(),t!==null&&!me?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ct(t,e,i)):(V&&r&&Fa(e),e.flags|=1,ue(t,e,n,i),e.child)}function Eu(t,e,n,r,i){if(ye(n)){var s=!0;Gi(e)}else s=!1;if(On(e,i),e.stateNode===null)Ri(t,e),Yd(e,n,r),Yo(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Oe(u):(u=ye(n)?nn:le.current,u=jn(e,u));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&mu(e,o,r,u),vt=!1;var d=e.memoizedState;o.state=d,Xi(e,r,o,i),l=e.memoizedState,a!==r||d!==l||ge.current||vt?(typeof p=="function"&&(Qo(e,n,p,r),l=e.memoizedState),(a=vt||pu(e,n,a,r,d,l,u))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Nd(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:ze(e.type,a),o.props=u,m=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Oe(l):(l=ye(n)?nn:le.current,l=jn(e,l));var y=n.getDerivedStateFromProps;(p=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==m||d!==l)&&mu(e,o,r,l),vt=!1,d=e.memoizedState,o.state=d,Xi(e,r,o,i);var w=e.memoizedState;a!==m||d!==w||ge.current||vt?(typeof y=="function"&&(Qo(e,n,y,r),w=e.memoizedState),(u=vt||pu(e,n,u,r,d,w,l)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),o.props=r,o.state=w,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Xo(t,e,n,r,s,i)}function Xo(t,e,n,r,i,s){ef(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ou(e,n,!1),ct(t,e,s);r=e.stateNode,Sm.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Vn(e,t.child,null,s),e.child=Vn(e,null,a,s)):ue(t,e,a,s),e.memoizedState=r.state,i&&ou(e,n,!0),e.child}function tf(t){var e=t.stateNode;e.pendingContext?su(t,e.pendingContext,e.pendingContext!==e.context):e.context&&su(t,e.context,!1),Ka(t,e.containerInfo)}function Su(t,e,n,r,i){return Bn(),Ba(i),e.flags|=256,ue(t,e,n,r),e.child}var Zo={dehydrated:null,treeContext:null,retryLane:0};function ea(t){return{baseLanes:t,cachePool:null,transitions:null}}function nf(t,e,n){var r=e.pendingProps,i=$.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),F($,i&1),t===null)return Ko(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ts(o,r,0,null),t=tn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ea(n),e.memoizedState=Zo,t):el(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return km(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Dt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Dt(a,s):(s=tn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ea(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Zo,r}return s=t.child,t=s.sibling,r=Dt(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function el(t,e){return e=Ts({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function gi(t,e,n,r){return r!==null&&Ba(r),Vn(e,t.child,null,n),t=el(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function km(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=so(Error(v(422))),gi(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ts({mode:"visible",children:r.children},i,0,null),s=tn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Vn(e,t.child,null,o),e.child.memoizedState=ea(o),e.memoizedState=Zo,s);if(!(e.mode&1))return gi(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(v(419)),r=so(s,r,void 0),gi(t,e,o,r)}if(a=(o&t.childLanes)!==0,me||a){if(r=te,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ut(t,i),He(r,t,i,-1))}return ol(),r=so(Error(v(421))),gi(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Um.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Se=At(i.nextSibling),ke=e,V=!0,je=null,t!==null&&(Pe[Ne++]=nt,Pe[Ne++]=rt,Pe[Ne++]=rn,nt=t.id,rt=t.overflow,rn=e),e=el(e,r.children),e.flags|=4096,e)}function ku(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Go(t.return,e,n)}function oo(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function rf(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ue(t,e,r.children,n),r=$.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ku(t,n,e);else if(t.tag===19)ku(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(F($,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Zi(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),oo(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Zi(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}oo(e,!0,n,null,s);break;case"together":oo(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ri(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ct(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),on|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(v(153));if(e.child!==null){for(t=e.child,n=Dt(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Dt(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Im(t,e,n){switch(e.tag){case 3:tf(e),Bn();break;case 5:Rd(e);break;case 1:ye(e.type)&&Gi(e);break;case 4:Ka(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;F(qi,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(F($,$.current&1),e.flags|=128,null):n&e.child.childLanes?nf(t,e,n):(F($,$.current&1),t=ct(t,e,n),t!==null?t.sibling:null);F($,$.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return rf(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),F($,$.current),r)break;return null;case 22:case 23:return e.lanes=0,Zd(t,e,n)}return ct(t,e,n)}var sf,ta,of,af;sf=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ta=function(){};of=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Zt(Qe.current);var s=null;switch(n){case"input":i=ko(t,i),r=ko(t,r),s=[];break;case"select":i=W({},i,{value:void 0}),r=W({},r,{value:void 0}),s=[];break;case"textarea":i=To(t,i),r=To(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Wi)}No(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(kr.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(kr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&j("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};af=function(t,e,n,r){n!==r&&(e.flags|=4)};function ir(t,e){if(!V)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function oe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Cm(t,e,n){var r=e.pendingProps;switch(ja(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(e),null;case 1:return ye(e.type)&&Ki(),oe(e),null;case 3:return r=e.stateNode,Hn(),B(ge),B(le),Qa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(pi(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,je!==null&&(ua(je),je=null))),ta(t,e),oe(e),null;case 5:Ga(e);var i=Zt(Mr.current);if(n=e.type,t!==null&&e.stateNode!=null)of(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(v(166));return oe(e),null}if(t=Zt(Qe.current),pi(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ke]=e,r[Lr]=s,t=(e.mode&1)!==0,n){case"dialog":j("cancel",r),j("close",r);break;case"iframe":case"object":case"embed":j("load",r);break;case"video":case"audio":for(i=0;i<ur.length;i++)j(ur[i],r);break;case"source":j("error",r);break;case"img":case"image":case"link":j("error",r),j("load",r);break;case"details":j("toggle",r);break;case"input":Ol(r,s),j("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},j("invalid",r);break;case"textarea":Dl(r,s),j("invalid",r)}No(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&hi(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&hi(r.textContent,a,t),i=["children",""+a]):kr.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&j("scroll",r)}switch(n){case"input":si(r),Ll(r,s,!0);break;case"textarea":si(r),Ml(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Wi)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Dc(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ke]=e,t[Lr]=r,sf(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ro(n,r),n){case"dialog":j("cancel",t),j("close",t),i=r;break;case"iframe":case"object":case"embed":j("load",t),i=r;break;case"video":case"audio":for(i=0;i<ur.length;i++)j(ur[i],t);i=r;break;case"source":j("error",t),i=r;break;case"img":case"image":case"link":j("error",t),j("load",t),i=r;break;case"details":j("toggle",t),i=r;break;case"input":Ol(t,r),i=ko(t,r),j("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=W({},r,{value:void 0}),j("invalid",t);break;case"textarea":Dl(t,r),i=To(t,r),j("invalid",t);break;default:i=r}No(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?zc(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Mc(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ir(t,l):typeof l=="number"&&Ir(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(kr.hasOwnProperty(s)?l!=null&&s==="onScroll"&&j("scroll",t):l!=null&&Ia(t,s,l,o))}switch(n){case"input":si(t),Ll(t,r,!1);break;case"textarea":si(t),Ml(t);break;case"option":r.value!=null&&t.setAttribute("value",""+zt(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Nn(t,!!r.multiple,s,!1):r.defaultValue!=null&&Nn(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Wi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return oe(e),null;case 6:if(t&&e.stateNode!=null)af(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(v(166));if(n=Zt(Mr.current),Zt(Qe.current),pi(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ke]=e,(s=r.nodeValue!==n)&&(t=ke,t!==null))switch(t.tag){case 3:hi(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&hi(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ke]=e,e.stateNode=r}return oe(e),null;case 13:if(B($),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(V&&Se!==null&&e.mode&1&&!(e.flags&128))Id(),Bn(),e.flags|=98560,s=!1;else if(s=pi(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(v(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(v(317));s[Ke]=e}else Bn(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;oe(e),s=!1}else je!==null&&(ua(je),je=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||$.current&1?X===0&&(X=3):ol())),e.updateQueue!==null&&(e.flags|=4),oe(e),null);case 4:return Hn(),ta(t,e),t===null&&xr(e.stateNode.containerInfo),oe(e),null;case 10:return $a(e.type._context),oe(e),null;case 17:return ye(e.type)&&Ki(),oe(e),null;case 19:if(B($),s=e.memoizedState,s===null)return oe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ir(s,!1);else{if(X!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Zi(t),o!==null){for(e.flags|=128,ir(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return F($,$.current&1|2),e.child}t=t.sibling}s.tail!==null&&Y()>bn&&(e.flags|=128,r=!0,ir(s,!1),e.lanes=4194304)}else{if(!r)if(t=Zi(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ir(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!V)return oe(e),null}else 2*Y()-s.renderingStartTime>bn&&n!==1073741824&&(e.flags|=128,r=!0,ir(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Y(),e.sibling=null,n=$.current,F($,r?n&1|2:n&1),e):(oe(e),null);case 22:case 23:return sl(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ee&1073741824&&(oe(e),e.subtreeFlags&6&&(e.flags|=8192)):oe(e),null;case 24:return null;case 25:return null}throw Error(v(156,e.tag))}function Tm(t,e){switch(ja(e),e.tag){case 1:return ye(e.type)&&Ki(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Hn(),B(ge),B(le),Qa(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ga(e),null;case 13:if(B($),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(v(340));Bn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return B($),null;case 4:return Hn(),null;case 10:return $a(e.type._context),null;case 22:case 23:return sl(),null;case 24:return null;default:return null}}var yi=!1,ae=!1,Pm=typeof WeakSet=="function"?WeakSet:Set,I=null;function Cn(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(t,e,r)}else n.current=null}function na(t,e,n){try{n()}catch(r){G(t,e,r)}}var Iu=!1;function Nm(t,e){if(jo=Hi,t=dd(),za(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,p=0,m=t,d=null;t:for(;;){for(var y;m!==n||i!==0&&m.nodeType!==3||(a=o+i),m!==s||r!==0&&m.nodeType!==3||(l=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(y=m.firstChild)!==null;)d=m,m=y;for(;;){if(m===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++p===r&&(l=o),(y=m.nextSibling)!==null)break;m=d,d=m.parentNode}m=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bo={focusedElem:t,selectionRange:n},Hi=!1,I=e;I!==null;)if(e=I,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,I=t;else for(;I!==null;){e=I;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var _=w.memoizedProps,x=w.memoizedState,f=e.stateNode,c=f.getSnapshotBeforeUpdate(e.elementType===e.type?_:ze(e.type,_),x);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=e.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(g){G(e,e.return,g)}if(t=e.sibling,t!==null){t.return=e.return,I=t;break}I=e.return}return w=Iu,Iu=!1,w}function vr(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&na(e,n,s)}i=i.next}while(i!==r)}}function Is(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ra(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function lf(t){var e=t.alternate;e!==null&&(t.alternate=null,lf(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ke],delete e[Lr],delete e[$o],delete e[cm],delete e[dm])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function uf(t){return t.tag===5||t.tag===3||t.tag===4}function Cu(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||uf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ia(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Wi));else if(r!==4&&(t=t.child,t!==null))for(ia(t,e,n),t=t.sibling;t!==null;)ia(t,e,n),t=t.sibling}function sa(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(sa(t,e,n),t=t.sibling;t!==null;)sa(t,e,n),t=t.sibling}var ne=null,Fe=!1;function mt(t,e,n){for(n=n.child;n!==null;)cf(t,e,n),n=n.sibling}function cf(t,e,n){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(gs,n)}catch{}switch(n.tag){case 5:ae||Cn(n,e);case 6:var r=ne,i=Fe;ne=null,mt(t,e,n),ne=r,Fe=i,ne!==null&&(Fe?(t=ne,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Fe?(t=ne,n=n.stateNode,t.nodeType===8?Zs(t.parentNode,n):t.nodeType===1&&Zs(t,n),Nr(t)):Zs(ne,n.stateNode));break;case 4:r=ne,i=Fe,ne=n.stateNode.containerInfo,Fe=!0,mt(t,e,n),ne=r,Fe=i;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&na(n,e,o),i=i.next}while(i!==r)}mt(t,e,n);break;case 1:if(!ae&&(Cn(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){G(n,e,a)}mt(t,e,n);break;case 21:mt(t,e,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,mt(t,e,n),ae=r):mt(t,e,n);break;default:mt(t,e,n)}}function Tu(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Pm),e.forEach(function(r){var i=zm.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ue(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ne=a.stateNode,Fe=!1;break e;case 3:ne=a.stateNode.containerInfo,Fe=!0;break e;case 4:ne=a.stateNode.containerInfo,Fe=!0;break e}a=a.return}if(ne===null)throw Error(v(160));cf(s,o,i),ne=null,Fe=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){G(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)df(e,t),e=e.sibling}function df(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ue(e,t),be(t),r&4){try{vr(3,t,t.return),Is(3,t)}catch(_){G(t,t.return,_)}try{vr(5,t,t.return)}catch(_){G(t,t.return,_)}}break;case 1:Ue(e,t),be(t),r&512&&n!==null&&Cn(n,n.return);break;case 5:if(Ue(e,t),be(t),r&512&&n!==null&&Cn(n,n.return),t.flags&32){var i=t.stateNode;try{Ir(i,"")}catch(_){G(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Oc(i,s),Ro(a,o);var u=Ro(a,s);for(o=0;o<l.length;o+=2){var p=l[o],m=l[o+1];p==="style"?zc(i,m):p==="dangerouslySetInnerHTML"?Mc(i,m):p==="children"?Ir(i,m):Ia(i,p,m,u)}switch(a){case"input":Io(i,s);break;case"textarea":Lc(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Nn(i,!!s.multiple,y,!1):d!==!!s.multiple&&(s.defaultValue!=null?Nn(i,!!s.multiple,s.defaultValue,!0):Nn(i,!!s.multiple,s.multiple?[]:"",!1))}i[Lr]=s}catch(_){G(t,t.return,_)}}break;case 6:if(Ue(e,t),be(t),r&4){if(t.stateNode===null)throw Error(v(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){G(t,t.return,_)}}break;case 3:if(Ue(e,t),be(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Nr(e.containerInfo)}catch(_){G(t,t.return,_)}break;case 4:Ue(e,t),be(t);break;case 13:Ue(e,t),be(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(rl=Y())),r&4&&Tu(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(ae=(u=ae)||p,Ue(e,t),ae=u):Ue(e,t),be(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!p&&t.mode&1)for(I=t,p=t.child;p!==null;){for(m=I=p;I!==null;){switch(d=I,y=d.child,d.tag){case 0:case 11:case 14:case 15:vr(4,d,d.return);break;case 1:Cn(d,d.return);var w=d.stateNode;if(typeof w.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(_){G(r,n,_)}}break;case 5:Cn(d,d.return);break;case 22:if(d.memoizedState!==null){Nu(m);continue}}y!==null?(y.return=d,I=y):Nu(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{i=m.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=m.stateNode,l=m.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Uc("display",o))}catch(_){G(t,t.return,_)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(_){G(t,t.return,_)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ue(e,t),be(t),r&4&&Tu(t);break;case 21:break;default:Ue(e,t),be(t)}}function be(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(uf(n)){var r=n;break e}n=n.return}throw Error(v(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ir(i,""),r.flags&=-33);var s=Cu(t);sa(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Cu(t);ia(t,a,o);break;default:throw Error(v(161))}}catch(l){G(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Rm(t,e,n){I=t,ff(t)}function ff(t,e,n){for(var r=(t.mode&1)!==0;I!==null;){var i=I,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||yi;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ae;a=yi;var u=ae;if(yi=o,(ae=l)&&!u)for(I=i;I!==null;)o=I,l=o.child,o.tag===22&&o.memoizedState!==null?Ru(i):l!==null?(l.return=o,I=l):Ru(i);for(;s!==null;)I=s,ff(s),s=s.sibling;I=i,yi=a,ae=u}Pu(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,I=s):Pu(t)}}function Pu(t){for(;I!==null;){var e=I;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ae||Is(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ae)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:ze(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&du(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}du(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&Nr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}ae||e.flags&512&&ra(e)}catch(d){G(e,e.return,d)}}if(e===t){I=null;break}if(n=e.sibling,n!==null){n.return=e.return,I=n;break}I=e.return}}function Nu(t){for(;I!==null;){var e=I;if(e===t){I=null;break}var n=e.sibling;if(n!==null){n.return=e.return,I=n;break}I=e.return}}function Ru(t){for(;I!==null;){var e=I;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Is(4,e)}catch(l){G(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){G(e,i,l)}}var s=e.return;try{ra(e)}catch(l){G(e,s,l)}break;case 5:var o=e.return;try{ra(e)}catch(l){G(e,o,l)}}}catch(l){G(e,e.return,l)}if(e===t){I=null;break}var a=e.sibling;if(a!==null){a.return=e.return,I=a;break}I=e.return}}var Am=Math.ceil,ns=ht.ReactCurrentDispatcher,tl=ht.ReactCurrentOwner,xe=ht.ReactCurrentBatchConfig,D=0,te=null,q=null,re=0,Ee=0,Tn=Bt(0),X=0,jr=null,on=0,Cs=0,nl=0,wr=null,pe=null,rl=0,bn=1/0,et=null,rs=!1,oa=null,Ot=null,vi=!1,Tt=null,is=0,_r=0,aa=null,Ai=-1,xi=0;function ce(){return D&6?Y():Ai!==-1?Ai:Ai=Y()}function Lt(t){return t.mode&1?D&2&&re!==0?re&-re:hm.transition!==null?(xi===0&&(xi=Yc()),xi):(t=U,t!==0||(t=window.event,t=t===void 0?16:nd(t.type)),t):1}function He(t,e,n,r){if(50<_r)throw _r=0,aa=null,Error(v(185));br(t,n,r),(!(D&2)||t!==te)&&(t===te&&(!(D&2)&&(Cs|=n),X===4&&_t(t,re)),ve(t,r),n===1&&D===0&&!(e.mode&1)&&(bn=Y()+500,Es&&Vt()))}function ve(t,e){var n=t.callbackNode;hp(t,e);var r=Vi(t,t===te?re:0);if(r===0)n!==null&&Fl(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Fl(n),e===1)t.tag===0?fm(Au.bind(null,t)):Ed(Au.bind(null,t)),lm(function(){!(D&6)&&Vt()}),n=null;else{switch(qc(r)){case 1:n=Ra;break;case 4:n=Gc;break;case 16:n=Bi;break;case 536870912:n=Qc;break;default:n=Bi}n=_f(n,hf.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function hf(t,e){if(Ai=-1,xi=0,D&6)throw Error(v(327));var n=t.callbackNode;if(Ln()&&t.callbackNode!==n)return null;var r=Vi(t,t===te?re:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ss(t,r);else{e=r;var i=D;D|=2;var s=mf();(te!==t||re!==e)&&(et=null,bn=Y()+500,en(t,e));do try{Lm();break}catch(a){pf(t,a)}while(!0);Ha(),ns.current=s,D=i,q!==null?e=0:(te=null,re=0,e=X)}if(e!==0){if(e===2&&(i=Do(t),i!==0&&(r=i,e=la(t,i))),e===1)throw n=jr,en(t,0),_t(t,r),ve(t,Y()),n;if(e===6)_t(t,r);else{if(i=t.current.alternate,!(r&30)&&!xm(i)&&(e=ss(t,r),e===2&&(s=Do(t),s!==0&&(r=s,e=la(t,s))),e===1))throw n=jr,en(t,0),_t(t,r),ve(t,Y()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(v(345));case 2:Yt(t,pe,et);break;case 3:if(_t(t,r),(r&130023424)===r&&(e=rl+500-Y(),10<e)){if(Vi(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ce(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ho(Yt.bind(null,t,pe,et),e);break}Yt(t,pe,et);break;case 4:if(_t(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ve(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Am(r/1960))-r,10<r){t.timeoutHandle=Ho(Yt.bind(null,t,pe,et),r);break}Yt(t,pe,et);break;case 5:Yt(t,pe,et);break;default:throw Error(v(329))}}}return ve(t,Y()),t.callbackNode===n?hf.bind(null,t):null}function la(t,e){var n=wr;return t.current.memoizedState.isDehydrated&&(en(t,e).flags|=256),t=ss(t,e),t!==2&&(e=pe,pe=n,e!==null&&ua(e)),t}function ua(t){pe===null?pe=t:pe.push.apply(pe,t)}function xm(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!$e(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _t(t,e){for(e&=~nl,e&=~Cs,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ve(e),r=1<<n;t[n]=-1,e&=~r}}function Au(t){if(D&6)throw Error(v(327));Ln();var e=Vi(t,0);if(!(e&1))return ve(t,Y()),null;var n=ss(t,e);if(t.tag!==0&&n===2){var r=Do(t);r!==0&&(e=r,n=la(t,r))}if(n===1)throw n=jr,en(t,0),_t(t,e),ve(t,Y()),n;if(n===6)throw Error(v(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Yt(t,pe,et),ve(t,Y()),null}function il(t,e){var n=D;D|=1;try{return t(e)}finally{D=n,D===0&&(bn=Y()+500,Es&&Vt())}}function an(t){Tt!==null&&Tt.tag===0&&!(D&6)&&Ln();var e=D;D|=1;var n=xe.transition,r=U;try{if(xe.transition=null,U=1,t)return t()}finally{U=r,xe.transition=n,D=e,!(D&6)&&Vt()}}function sl(){Ee=Tn.current,B(Tn)}function en(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,am(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(ja(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ki();break;case 3:Hn(),B(ge),B(le),Qa();break;case 5:Ga(r);break;case 4:Hn();break;case 13:B($);break;case 19:B($);break;case 10:$a(r.type._context);break;case 22:case 23:sl()}n=n.return}if(te=t,q=t=Dt(t.current,null),re=Ee=e,X=0,jr=null,nl=Cs=on=0,pe=wr=null,Xt!==null){for(e=0;e<Xt.length;e++)if(n=Xt[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Xt=null}return t}function pf(t,e){do{var n=q;try{if(Ha(),Pi.current=ts,es){for(var r=b.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}es=!1}if(sn=0,ee=J=b=null,yr=!1,Ur=0,tl.current=null,n===null||n.return===null){X=1,jr=e,q=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=re,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,p=a,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var d=p.alternate;d?(p.updateQueue=d.updateQueue,p.memoizedState=d.memoizedState,p.lanes=d.lanes):(p.updateQueue=null,p.memoizedState=null)}var y=yu(o);if(y!==null){y.flags&=-257,vu(y,o,a,s,e),y.mode&1&&gu(s,u,e),e=y,l=u;var w=e.updateQueue;if(w===null){var _=new Set;_.add(l),e.updateQueue=_}else w.add(l);break e}else{if(!(e&1)){gu(s,u,e),ol();break e}l=Error(v(426))}}else if(V&&a.mode&1){var x=yu(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),vu(x,o,a,s,e),Ba($n(l,a));break e}}s=l=$n(l,a),X!==4&&(X=2),wr===null?wr=[s]:wr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=qd(s,l,e);cu(s,f);break e;case 1:a=l;var c=s.type,h=s.stateNode;if(!(s.flags&128)&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ot===null||!Ot.has(h)))){s.flags|=65536,e&=-e,s.lanes|=e;var g=Jd(s,a,e);cu(s,g);break e}}s=s.return}while(s!==null)}yf(n)}catch(S){e=S,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function mf(){var t=ns.current;return ns.current=ts,t===null?ts:t}function ol(){(X===0||X===3||X===2)&&(X=4),te===null||!(on&268435455)&&!(Cs&268435455)||_t(te,re)}function ss(t,e){var n=D;D|=2;var r=mf();(te!==t||re!==e)&&(et=null,en(t,e));do try{Om();break}catch(i){pf(t,i)}while(!0);if(Ha(),D=n,ns.current=r,q!==null)throw Error(v(261));return te=null,re=0,X}function Om(){for(;q!==null;)gf(q)}function Lm(){for(;q!==null&&!ip();)gf(q)}function gf(t){var e=wf(t.alternate,t,Ee);t.memoizedProps=t.pendingProps,e===null?yf(t):q=e,tl.current=null}function yf(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Tm(n,e),n!==null){n.flags&=32767,q=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{X=6,q=null;return}}else if(n=Cm(n,e,Ee),n!==null){q=n;return}if(e=e.sibling,e!==null){q=e;return}q=e=t}while(e!==null);X===0&&(X=5)}function Yt(t,e,n){var r=U,i=xe.transition;try{xe.transition=null,U=1,Dm(t,e,n,r)}finally{xe.transition=i,U=r}return null}function Dm(t,e,n,r){do Ln();while(Tt!==null);if(D&6)throw Error(v(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(v(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(pp(t,s),t===te&&(q=te=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vi||(vi=!0,_f(Bi,function(){return Ln(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=xe.transition,xe.transition=null;var o=U;U=1;var a=D;D|=4,tl.current=null,Nm(t,n),df(n,t),em(Bo),Hi=!!jo,Bo=jo=null,t.current=n,Rm(n),sp(),D=a,U=o,xe.transition=s}else t.current=n;if(vi&&(vi=!1,Tt=t,is=i),s=t.pendingLanes,s===0&&(Ot=null),lp(n.stateNode),ve(t,Y()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(rs)throw rs=!1,t=oa,oa=null,t;return is&1&&t.tag!==0&&Ln(),s=t.pendingLanes,s&1?t===aa?_r++:(_r=0,aa=t):_r=0,Vt(),null}function Ln(){if(Tt!==null){var t=qc(is),e=xe.transition,n=U;try{if(xe.transition=null,U=16>t?16:t,Tt===null)var r=!1;else{if(t=Tt,Tt=null,is=0,D&6)throw Error(v(331));var i=D;for(D|=4,I=t.current;I!==null;){var s=I,o=s.child;if(I.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(I=u;I!==null;){var p=I;switch(p.tag){case 0:case 11:case 15:vr(8,p,s)}var m=p.child;if(m!==null)m.return=p,I=m;else for(;I!==null;){p=I;var d=p.sibling,y=p.return;if(lf(p),p===u){I=null;break}if(d!==null){d.return=y,I=d;break}I=y}}}var w=s.alternate;if(w!==null){var _=w.child;if(_!==null){w.child=null;do{var x=_.sibling;_.sibling=null,_=x}while(_!==null)}}I=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,I=o;else e:for(;I!==null;){if(s=I,s.flags&2048)switch(s.tag){case 0:case 11:case 15:vr(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,I=f;break e}I=s.return}}var c=t.current;for(I=c;I!==null;){o=I;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,I=h;else e:for(o=c;I!==null;){if(a=I,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Is(9,a)}}catch(S){G(a,a.return,S)}if(a===o){I=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,I=g;break e}I=a.return}}if(D=i,Vt(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(gs,t)}catch{}r=!0}return r}finally{U=n,xe.transition=e}}return!1}function xu(t,e,n){e=$n(n,e),e=qd(t,e,1),t=xt(t,e,1),e=ce(),t!==null&&(br(t,1,e),ve(t,e))}function G(t,e,n){if(t.tag===3)xu(t,t,n);else for(;e!==null;){if(e.tag===3){xu(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ot===null||!Ot.has(r))){t=$n(n,t),t=Jd(e,t,1),e=xt(e,t,1),t=ce(),e!==null&&(br(e,1,t),ve(e,t));break}}e=e.return}}function Mm(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ce(),t.pingedLanes|=t.suspendedLanes&n,te===t&&(re&n)===n&&(X===4||X===3&&(re&130023424)===re&&500>Y()-rl?en(t,0):nl|=n),ve(t,e)}function vf(t,e){e===0&&(t.mode&1?(e=li,li<<=1,!(li&130023424)&&(li=4194304)):e=1);var n=ce();t=ut(t,e),t!==null&&(br(t,e,n),ve(t,n))}function Um(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),vf(t,n)}function zm(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(v(314))}r!==null&&r.delete(e),vf(t,n)}var wf;wf=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ge.current)me=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return me=!1,Im(t,e,n);me=!!(t.flags&131072)}else me=!1,V&&e.flags&1048576&&Sd(e,Yi,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ri(t,e),t=e.pendingProps;var i=jn(e,le.current);On(e,n),i=qa(null,e,r,t,i,n);var s=Ja();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ye(r)?(s=!0,Gi(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Wa(e),i.updater=ks,e.stateNode=i,i._reactInternals=e,Yo(e,r,t,n),e=Xo(null,e,r,!0,s,n)):(e.tag=0,V&&s&&Fa(e),ue(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ri(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=jm(r),t=ze(r,t),i){case 0:e=Jo(null,e,r,t,n);break e;case 1:e=Eu(null,e,r,t,n);break e;case 11:e=wu(null,e,r,t,n);break e;case 14:e=_u(null,e,r,ze(r.type,t),n);break e}throw Error(v(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ze(r,i),Jo(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ze(r,i),Eu(t,e,r,i,n);case 3:e:{if(tf(e),t===null)throw Error(v(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Nd(t,e),Xi(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=$n(Error(v(423)),e),e=Su(t,e,r,n,i);break e}else if(r!==i){i=$n(Error(v(424)),e),e=Su(t,e,r,n,i);break e}else for(Se=At(e.stateNode.containerInfo.firstChild),ke=e,V=!0,je=null,n=Td(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bn(),r===i){e=ct(t,e,n);break e}ue(t,e,r,n)}e=e.child}return e;case 5:return Rd(e),t===null&&Ko(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Vo(r,i)?o=null:s!==null&&Vo(r,s)&&(e.flags|=32),ef(t,e),ue(t,e,o,n),e.child;case 6:return t===null&&Ko(e),null;case 13:return nf(t,e,n);case 4:return Ka(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Vn(e,null,r,n):ue(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ze(r,i),wu(t,e,r,i,n);case 7:return ue(t,e,e.pendingProps,n),e.child;case 8:return ue(t,e,e.pendingProps.children,n),e.child;case 12:return ue(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,F(qi,r._currentValue),r._currentValue=o,s!==null)if($e(s.value,o)){if(s.children===i.children&&!ge.current){e=ct(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=ot(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?l.next=l:(l.next=p.next,p.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Go(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(v(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Go(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ue(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,On(e,n),i=Oe(i),r=r(i),e.flags|=1,ue(t,e,r,n),e.child;case 14:return r=e.type,i=ze(r,e.pendingProps),i=ze(r.type,i),_u(t,e,r,i,n);case 15:return Xd(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ze(r,i),Ri(t,e),e.tag=1,ye(r)?(t=!0,Gi(e)):t=!1,On(e,n),Yd(e,r,i),Yo(e,r,i,n),Xo(null,e,r,!0,t,n);case 19:return rf(t,e,n);case 22:return Zd(t,e,n)}throw Error(v(156,e.tag))};function _f(t,e){return Kc(t,e)}function Fm(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ae(t,e,n,r){return new Fm(t,e,n,r)}function al(t){return t=t.prototype,!(!t||!t.isReactComponent)}function jm(t){if(typeof t=="function")return al(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ta)return 11;if(t===Pa)return 14}return 2}function Dt(t,e){var n=t.alternate;return n===null?(n=Ae(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Oi(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")al(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case gn:return tn(n.children,i,s,e);case Ca:o=8,i|=8;break;case wo:return t=Ae(12,n,e,i|2),t.elementType=wo,t.lanes=s,t;case _o:return t=Ae(13,n,e,i),t.elementType=_o,t.lanes=s,t;case Eo:return t=Ae(19,n,e,i),t.elementType=Eo,t.lanes=s,t;case Rc:return Ts(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Pc:o=10;break e;case Nc:o=9;break e;case Ta:o=11;break e;case Pa:o=14;break e;case yt:o=16,r=null;break e}throw Error(v(130,t==null?t:typeof t,""))}return e=Ae(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function tn(t,e,n,r){return t=Ae(7,t,r,e),t.lanes=n,t}function Ts(t,e,n,r){return t=Ae(22,t,r,e),t.elementType=Rc,t.lanes=n,t.stateNode={isHidden:!1},t}function ao(t,e,n){return t=Ae(6,t,null,e),t.lanes=n,t}function lo(t,e,n){return e=Ae(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Bm(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hs(0),this.expirationTimes=Hs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ll(t,e,n,r,i,s,o,a,l){return t=new Bm(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ae(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wa(s),t}function Vm(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Ef(t){if(!t)return Ft;t=t._reactInternals;e:{if(fn(t)!==t||t.tag!==1)throw Error(v(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ye(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(v(171))}if(t.tag===1){var n=t.type;if(ye(n))return _d(t,n,e)}return e}function Sf(t,e,n,r,i,s,o,a,l){return t=ll(n,r,!0,t,i,s,o,a,l),t.context=Ef(null),n=t.current,r=ce(),i=Lt(n),s=ot(r,i),s.callback=e??null,xt(n,s,i),t.current.lanes=i,br(t,i,r),ve(t,r),t}function Ps(t,e,n,r){var i=e.current,s=ce(),o=Lt(i);return n=Ef(n),e.context===null?e.context=n:e.pendingContext=n,e=ot(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=xt(i,e,o),t!==null&&(He(t,i,o,s),Ti(t,i,o)),o}function os(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ou(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ul(t,e){Ou(t,e),(t=t.alternate)&&Ou(t,e)}function Hm(){return null}var kf=typeof reportError=="function"?reportError:function(t){console.error(t)};function cl(t){this._internalRoot=t}Ns.prototype.render=cl.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(v(409));Ps(t,e,null,null)};Ns.prototype.unmount=cl.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;an(function(){Ps(null,t,null,null)}),e[lt]=null}};function Ns(t){this._internalRoot=t}Ns.prototype.unstable_scheduleHydration=function(t){if(t){var e=Zc();t={blockedOn:null,target:t,priority:e};for(var n=0;n<wt.length&&e!==0&&e<wt[n].priority;n++);wt.splice(n,0,t),n===0&&td(t)}};function dl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Rs(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Lu(){}function $m(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=os(o);s.call(u)}}var o=Sf(e,r,t,0,null,!1,!1,"",Lu);return t._reactRootContainer=o,t[lt]=o.current,xr(t.nodeType===8?t.parentNode:t),an(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=os(l);a.call(u)}}var l=ll(t,0,!1,null,null,!1,!1,"",Lu);return t._reactRootContainer=l,t[lt]=l.current,xr(t.nodeType===8?t.parentNode:t),an(function(){Ps(e,l,n,r)}),l}function As(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=os(o);a.call(l)}}Ps(e,o,t,i)}else o=$m(n,e,t,i,r);return os(o)}Jc=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=lr(e.pendingLanes);n!==0&&(Aa(e,n|1),ve(e,Y()),!(D&6)&&(bn=Y()+500,Vt()))}break;case 13:an(function(){var r=ut(t,1);if(r!==null){var i=ce();He(r,t,1,i)}}),ul(t,1)}};xa=function(t){if(t.tag===13){var e=ut(t,134217728);if(e!==null){var n=ce();He(e,t,134217728,n)}ul(t,134217728)}};Xc=function(t){if(t.tag===13){var e=Lt(t),n=ut(t,e);if(n!==null){var r=ce();He(n,t,e,r)}ul(t,e)}};Zc=function(){return U};ed=function(t,e){var n=U;try{return U=t,e()}finally{U=n}};xo=function(t,e,n){switch(e){case"input":if(Io(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=_s(r);if(!i)throw Error(v(90));xc(r),Io(r,i)}}}break;case"textarea":Lc(t,n);break;case"select":e=n.value,e!=null&&Nn(t,!!n.multiple,e,!1)}};Bc=il;Vc=an;var bm={usingClientEntryPoint:!1,Events:[Kr,_n,_s,Fc,jc,il]},sr={findFiberByHostInstance:Jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Wm={bundleType:sr.bundleType,version:sr.version,rendererPackageName:sr.rendererPackageName,rendererConfig:sr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=bc(t),t===null?null:t.stateNode},findFiberByHostInstance:sr.findFiberByHostInstance||Hm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wi.isDisabled&&wi.supportsFiber)try{gs=wi.inject(Wm),Ge=wi}catch{}}Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bm;Ce.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dl(e))throw Error(v(200));return Vm(t,e,null,n)};Ce.createRoot=function(t,e){if(!dl(t))throw Error(v(299));var n=!1,r="",i=kf;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ll(t,1,!1,null,null,n,!1,r,i),t[lt]=e.current,xr(t.nodeType===8?t.parentNode:t),new cl(e)};Ce.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(v(188)):(t=Object.keys(t).join(","),Error(v(268,t)));return t=bc(e),t=t===null?null:t.stateNode,t};Ce.flushSync=function(t){return an(t)};Ce.hydrate=function(t,e,n){if(!Rs(e))throw Error(v(200));return As(null,t,e,!0,n)};Ce.hydrateRoot=function(t,e,n){if(!dl(t))throw Error(v(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=kf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Sf(e,null,t,1,n??null,i,!1,s,o),t[lt]=e.current,xr(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ns(e)};Ce.render=function(t,e,n){if(!Rs(e))throw Error(v(200));return As(null,t,e,!1,n)};Ce.unmountComponentAtNode=function(t){if(!Rs(t))throw Error(v(40));return t._reactRootContainer?(an(function(){As(null,null,t,!1,function(){t._reactRootContainer=null,t[lt]=null})}),!0):!1};Ce.unstable_batchedUpdates=il;Ce.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Rs(n))throw Error(v(200));if(t==null||t._reactInternals===void 0)throw Error(v(38));return As(t,e,n,!1,r)};Ce.version="18.3.1-next-f1338f8080-20240426";function If(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(If)}catch(t){console.error(t)}}If(),kc.exports=Ce;var Km=kc.exports,Du=Km;yo.createRoot=Du.createRoot,yo.hydrateRoot=Du.hydrateRoot;/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Cf=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Qm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=K.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...a},l)=>K.createElement("svg",{ref:l,...Qm,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Cf("lucide",i),...a},[...o.map(([u,p])=>K.createElement(u,p)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=(t,e)=>{const n=K.forwardRef(({className:r,...i},s)=>K.createElement(Ym,{ref:s,iconNode:e,className:Cf(`lucide-${Gm(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=xs("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=xs("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=xs("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=xs("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),eg=()=>{};var Mu={};/**
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
 */const Tf=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},tg=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Pf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,p=s>>2,m=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(d=64)),r.push(n[p],n[m],n[d],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Tf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||m==null)throw new ng;const d=s<<2|a>>4;if(r.push(d),u!==64){const y=a<<4&240|u>>2;if(r.push(y),m!==64){const w=u<<6&192|m;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ng extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rg=function(t){const e=Tf(t);return Pf.encodeByteArray(e,!0)},Nf=function(t){return rg(t).replace(/\./g,"")},Rf=function(t){try{return Pf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ig(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const sg=()=>ig().__FIREBASE_DEFAULTS__,og=()=>{if(typeof process>"u"||typeof Mu>"u")return;const t=Mu.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ag=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Rf(t[1]);return e&&JSON.parse(e)},fl=()=>{try{return eg()||sg()||og()||ag()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},lg=t=>{var e,n;return(n=(e=fl())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Af=()=>{var t;return(t=fl())==null?void 0:t.config},xf=t=>{var e;return(e=fl())==null?void 0:e[`_${t}`]};/**
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
 */class ug{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Os(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function cg(t){return(await fetch(t,{credentials:"include"})).ok}const Er={};function dg(){const t={prod:[],emulator:[]};for(const e of Object.keys(Er))Er[e]?t.emulator.push(e):t.prod.push(e);return t}function fg(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Uu=!1;function hg(t,e){if(typeof window>"u"||typeof document>"u"||!Os(window.location.host)||Er[t]===e||Er[t]||Uu)return;Er[t]=e;function n(d){return`__firebase__banner__${d}`}const r="__firebase__banner",s=dg().prod.length>0;function o(){const d=document.getElementById(r);d&&d.remove()}function a(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="fixed",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function l(d,y){d.setAttribute("width","24"),d.setAttribute("id",y),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function u(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{Uu=!0,o()},d}function p(d,y){d.setAttribute("id",y),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function m(){const d=fg(r),y=n("text"),w=document.getElementById(y)||document.createElement("span"),_=n("learnmore"),x=document.getElementById(_)||document.createElement("a"),f=n("preprendIcon"),c=document.getElementById(f)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const h=d.element;a(h),p(x,_);const g=u();l(c,f),h.append(c,w,x,g),document.body.appendChild(h)}s?(w.innerText="Preview backend disconnected.",c.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,w.innerText="Preview backend running in this workspace."),w.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function de(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(de())}function mg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function yg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vg(){const t=de();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wg(){try{return typeof indexedDB=="object"}catch{return!1}}function _g(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Eg="FirebaseError";class Ht extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Eg,Object.setPrototypeOf(this,Ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qr.prototype.create)}}class Qr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Sg(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ht(i,a,r)}}function Sg(t,e){return t.replace(kg,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const kg=/\{\$([^}]+)}/g;function Ig(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(zu(s)&&zu(o)){if(!Wn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function zu(t){return t!==null&&typeof t=="object"}/**
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
 */function Yr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function cr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function dr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Cg(t,e){const n=new Tg(t,e);return n.subscribe.bind(n)}class Tg{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Pg(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=uo),i.error===void 0&&(i.error=uo),i.complete===void 0&&(i.complete=uo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Pg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function uo(){}/**
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
 */function we(t){return t&&t._delegate?t._delegate:t}class Kn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const qt="[DEFAULT]";/**
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
 */class Ng{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ug;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ag(e))try{this.getOrInitializeService({instanceIdentifier:qt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qt){return this.instances.has(e)}getOptions(e=qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Rg(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qt){return this.component?this.component.multipleInstances?e:qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rg(t){return t===qt?void 0:t}function Ag(t){return t.instantiationMode==="EAGER"}/**
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
 */class xg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ng(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(z||(z={}));const Og={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},Lg=z.INFO,Dg={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},Mg=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Dg[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Of{constructor(e){this.name=e,this._logLevel=Lg,this._logHandler=Mg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Og[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}}const Ug=(t,e)=>e.some(n=>t instanceof n);let Fu,ju;function zg(){return Fu||(Fu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fg(){return ju||(ju=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lf=new WeakMap,ca=new WeakMap,Df=new WeakMap,co=new WeakMap,hl=new WeakMap;function jg(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Mt(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Lf.set(n,t)}).catch(()=>{}),hl.set(e,t),e}function Bg(t){if(ca.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ca.set(t,e)}let da={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ca.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Df.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Vg(t){da=t(da)}function Hg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(fo(this),e,...n);return Df.set(r,e.sort?e.sort():[e]),Mt(r)}:Fg().includes(t)?function(...e){return t.apply(fo(this),e),Mt(Lf.get(this))}:function(...e){return Mt(t.apply(fo(this),e))}}function $g(t){return typeof t=="function"?Hg(t):(t instanceof IDBTransaction&&Bg(t),Ug(t,zg())?new Proxy(t,da):t)}function Mt(t){if(t instanceof IDBRequest)return jg(t);if(co.has(t))return co.get(t);const e=$g(t);return e!==t&&(co.set(t,e),hl.set(e,t)),e}const fo=t=>hl.get(t);function bg(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Mt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Mt(o.result),l.oldVersion,l.newVersion,Mt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Wg=["get","getKey","getAll","getAllKeys","count"],Kg=["put","add","delete","clear"],ho=new Map;function Bu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ho.get(e))return ho.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Kg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Wg.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return ho.set(e,s),s}Vg(t=>({...t,get:(e,n,r)=>Bu(e,n)||t.get(e,n,r),has:(e,n)=>!!Bu(e,n)||t.has(e,n)}));/**
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
 */class Gg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Qg(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Qg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fa="@firebase/app",Vu="0.14.6";/**
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
 */const dt=new Of("@firebase/app"),Yg="@firebase/app-compat",qg="@firebase/analytics-compat",Jg="@firebase/analytics",Xg="@firebase/app-check-compat",Zg="@firebase/app-check",ey="@firebase/auth",ty="@firebase/auth-compat",ny="@firebase/database",ry="@firebase/data-connect",iy="@firebase/database-compat",sy="@firebase/functions",oy="@firebase/functions-compat",ay="@firebase/installations",ly="@firebase/installations-compat",uy="@firebase/messaging",cy="@firebase/messaging-compat",dy="@firebase/performance",fy="@firebase/performance-compat",hy="@firebase/remote-config",py="@firebase/remote-config-compat",my="@firebase/storage",gy="@firebase/storage-compat",yy="@firebase/firestore",vy="@firebase/ai",wy="@firebase/firestore-compat",_y="firebase",Ey="12.6.0";/**
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
 */const ha="[DEFAULT]",Sy={[fa]:"fire-core",[Yg]:"fire-core-compat",[Jg]:"fire-analytics",[qg]:"fire-analytics-compat",[Zg]:"fire-app-check",[Xg]:"fire-app-check-compat",[ey]:"fire-auth",[ty]:"fire-auth-compat",[ny]:"fire-rtdb",[ry]:"fire-data-connect",[iy]:"fire-rtdb-compat",[sy]:"fire-fn",[oy]:"fire-fn-compat",[ay]:"fire-iid",[ly]:"fire-iid-compat",[uy]:"fire-fcm",[cy]:"fire-fcm-compat",[dy]:"fire-perf",[fy]:"fire-perf-compat",[hy]:"fire-rc",[py]:"fire-rc-compat",[my]:"fire-gcs",[gy]:"fire-gcs-compat",[yy]:"fire-fst",[wy]:"fire-fst-compat",[vy]:"fire-vertex","fire-js":"fire-js",[_y]:"fire-js-all"};/**
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
 */const as=new Map,ky=new Map,pa=new Map;function Hu(t,e){try{t.container.addComponent(e)}catch(n){dt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Br(t){const e=t.name;if(pa.has(e))return dt.debug(`There were multiple attempts to register component ${e}.`),!1;pa.set(e,t);for(const n of as.values())Hu(n,t);for(const n of ky.values())Hu(n,t);return!0}function Mf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Re(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Iy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ut=new Qr("app","Firebase",Iy);/**
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
 */class Cy{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ut.create("app-deleted",{appName:this._name})}}/**
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
 */const qr=Ey;function Uf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:ha,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Ut.create("bad-app-name",{appName:String(i)});if(n||(n=Af()),!n)throw Ut.create("no-options");const s=as.get(i);if(s){if(Wn(n,s.options)&&Wn(r,s.config))return s;throw Ut.create("duplicate-app",{appName:i})}const o=new xg(i);for(const l of pa.values())o.addComponent(l);const a=new Cy(n,r,o);return as.set(i,a),a}function Ty(t=ha){const e=as.get(t);if(!e&&t===ha&&Af())return Uf();if(!e)throw Ut.create("no-app",{appName:t});return e}function Dn(t,e,n){let r=Sy[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dt.warn(o.join(" "));return}Br(new Kn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Py="firebase-heartbeat-database",Ny=1,Vr="firebase-heartbeat-store";let po=null;function zf(){return po||(po=bg(Py,Ny,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Vr)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ut.create("idb-open",{originalErrorMessage:t.message})})),po}async function Ry(t){try{const n=(await zf()).transaction(Vr),r=await n.objectStore(Vr).get(Ff(t));return await n.done,r}catch(e){if(e instanceof Ht)dt.warn(e.message);else{const n=Ut.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dt.warn(n.message)}}}async function $u(t,e){try{const r=(await zf()).transaction(Vr,"readwrite");await r.objectStore(Vr).put(e,Ff(t)),await r.done}catch(n){if(n instanceof Ht)dt.warn(n.message);else{const r=Ut.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});dt.warn(r.message)}}}function Ff(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ay=1024,xy=30;class Oy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Dy(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=bu();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>xy){const o=My(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){dt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=bu(),{heartbeatsToSend:r,unsentEntries:i}=Ly(this._heartbeatsCache.heartbeats),s=Nf(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return dt.warn(n),""}}}function bu(){return new Date().toISOString().substring(0,10)}function Ly(t,e=Ay){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Wu(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Wu(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Dy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wg()?_g().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ry(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return $u(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return $u(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Wu(t){return Nf(JSON.stringify({version:2,heartbeats:t})).length}function My(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function Uy(t){Br(new Kn("platform-logger",e=>new Gg(e),"PRIVATE")),Br(new Kn("heartbeat",e=>new Oy(e),"PRIVATE")),Dn(fa,Vu,t),Dn(fa,Vu,"esm2020"),Dn("fire-js","")}Uy("");var zy="firebase",Fy="12.7.0";/**
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
 */Dn(zy,Fy,"app");function jf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jy=jf,Bf=new Qr("auth","Firebase",jf());/**
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
 */const ls=new Of("@firebase/auth");function By(t,...e){ls.logLevel<=z.WARN&&ls.warn(`Auth (${qr}): ${t}`,...e)}function Li(t,...e){ls.logLevel<=z.ERROR&&ls.error(`Auth (${qr}): ${t}`,...e)}/**
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
 */function De(t,...e){throw pl(t,...e)}function Ye(t,...e){return pl(t,...e)}function Vf(t,e,n){const r={...jy(),[e]:n};return new Qr("auth","Firebase",r).create(e,{appName:t.name})}function qe(t){return Vf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Bf.create(t,...e)}function P(t,e,...n){if(!t)throw pl(e,...n)}function it(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Li(e),new Error(e)}function ft(t,e){t||it(e)}/**
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
 */function ma(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Vy(){return Ku()==="http:"||Ku()==="https:"}function Ku(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function Hy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vy()||gg()||"connection"in navigator)?navigator.onLine:!0}function $y(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Jr{constructor(e,n){this.shortDelay=e,this.longDelay=n,ft(n>e,"Short delay should be less than long delay!"),this.isMobile=pg()||yg()}get(){return Hy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ml(t,e){ft(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Hf{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;it("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;it("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;it("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const by={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Wy=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Ky=new Jr(3e4,6e4);function Xe(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Me(t,e,n,r,i={}){return $f(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Yr({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...s};return mg()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Os(t.emulatorConfig.host)&&(u.credentials="include"),Hf.fetch()(await bf(t,t.config.apiHost,n,a),u)})}async function $f(t,e,n){t._canInitEmulator=!1;const r={...by,...e};try{const i=new Qy(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw _i(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw _i(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw _i(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw _i(t,"user-disabled",o);const p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Vf(t,p,u);De(t,p)}}catch(i){if(i instanceof Ht)throw i;De(t,"network-request-failed",{message:String(i)})}}async function Xr(t,e,n,r,i={}){const s=await Me(t,e,n,r,i);return"mfaPendingCredential"in s&&De(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function bf(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?ml(t.config,i):`${t.config.apiScheme}://${i}`;return Wy.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function Gy(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Qy{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ye(this.auth,"network-request-failed")),Ky.get())})}}function _i(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ye(t,e,r);return i.customData._tokenResponse=n,i}function Gu(t){return t!==void 0&&t.enterprise!==void 0}class Yy{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Gy(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function qy(t,e){return Me(t,"GET","/v2/recaptchaConfig",Xe(t,e))}/**
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
 */async function Jy(t,e){return Me(t,"POST","/v1/accounts:delete",e)}async function us(t,e){return Me(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Sr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Xy(t,e=!1){const n=we(t),r=await n.getIdToken(e),i=gl(r);P(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Sr(mo(i.auth_time)),issuedAtTime:Sr(mo(i.iat)),expirationTime:Sr(mo(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function mo(t){return Number(t)*1e3}function gl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Li("JWT malformed, contained fewer than 3 sections"),null;try{const i=Rf(n);return i?JSON.parse(i):(Li("Failed to decode base64 JWT payload"),null)}catch(i){return Li("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Qu(t){const e=gl(t);return P(e,"internal-error"),P(typeof e.exp<"u","internal-error"),P(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ln(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ht&&Zy(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Zy({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ev{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ga{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Sr(this.lastLoginAt),this.creationTime=Sr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function cs(t){var m;const e=t.auth,n=await t.getIdToken(),r=await ln(t,us(e,{idToken:n}));P(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(m=i.providerUserInfo)!=null&&m.length?Wf(i.providerUserInfo):[],o=nv(t.providerData,s),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),u=a?l:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new ga(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,p)}async function tv(t){const e=we(t);await cs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nv(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Wf(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function rv(t,e){const n=await $f(t,{},async()=>{const r=Yr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await bf(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&Os(t.emulatorConfig.host)&&(l.credentials="include"),Hf.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function iv(t,e){return Me(t,"POST","/v2/accounts:revokeToken",Xe(t,e))}/**
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
 */class Mn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken<"u","internal-error"),P(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){P(e.length!==0,"internal-error");const n=Qu(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(P(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await rv(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Mn;return r&&(P(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(P(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(P(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mn,this.toJSON())}_performRefresh(){return it("not implemented")}}/**
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
 */function gt(t,e){P(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Be{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new ev(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ga(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ln(this,this.stsTokenManager.getToken(this.auth,e));return P(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Xy(this,e)}reload(){return tv(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Be({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await cs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Re(this.auth.app))return Promise.reject(qe(this.auth));const e=await this.getIdToken();return await ln(this,Jy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,p=n.lastLoginAt??void 0,{uid:m,emailVerified:d,isAnonymous:y,providerData:w,stsTokenManager:_}=n;P(m&&_,e,"internal-error");const x=Mn.fromJSON(this.name,_);P(typeof m=="string",e,"internal-error"),gt(r,e.name),gt(i,e.name),P(typeof d=="boolean",e,"internal-error"),P(typeof y=="boolean",e,"internal-error"),gt(s,e.name),gt(o,e.name),gt(a,e.name),gt(l,e.name),gt(u,e.name),gt(p,e.name);const f=new Be({uid:m,auth:e,email:i,emailVerified:d,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:x,createdAt:u,lastLoginAt:p});return w&&Array.isArray(w)&&(f.providerData=w.map(c=>({...c}))),l&&(f._redirectEventId=l),f}static async _fromIdTokenResponse(e,n,r=!1){const i=new Mn;i.updateFromServerResponse(n);const s=new Be({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await cs(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];P(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Wf(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Mn;a.updateFromIdToken(r);const l=new Be({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ga(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
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
 */const Yu=new Map;function st(t){ft(t instanceof Function,"Expected a class definition");let e=Yu.get(t);return e?(ft(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Yu.set(t,e),e)}/**
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
 */class Kf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Kf.type="NONE";const qu=Kf;/**
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
 */function Di(t,e,n){return`firebase:${t}:${e}:${n}`}class Un{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Di(this.userKey,i.apiKey,s),this.fullPersistenceKey=Di("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await us(this.auth,{idToken:e}).catch(()=>{});return n?Be._fromGetAccountInfoResponse(this.auth,n,e):null}return Be._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Un(st(qu),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||st(qu);const o=Di(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const p=await u._get(o);if(p){let m;if(typeof p=="string"){const d=await us(e,{idToken:p}).catch(()=>{});if(!d)break;m=await Be._fromGetAccountInfoResponse(e,d,p)}else m=Be._fromJSON(e,p);u!==s&&(a=m),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Un(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Un(s,e,r))}}/**
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
 */function Ju(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Gf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xf(e))return"Blackberry";if(Zf(e))return"Webos";if(Qf(e))return"Safari";if((e.includes("chrome/")||Yf(e))&&!e.includes("edge/"))return"Chrome";if(Jf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Gf(t=de()){return/firefox\//i.test(t)}function Qf(t=de()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Yf(t=de()){return/crios\//i.test(t)}function qf(t=de()){return/iemobile/i.test(t)}function Jf(t=de()){return/android/i.test(t)}function Xf(t=de()){return/blackberry/i.test(t)}function Zf(t=de()){return/webos/i.test(t)}function yl(t=de()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function sv(t=de()){var e;return yl(t)&&!!((e=window.navigator)!=null&&e.standalone)}function ov(){return vg()&&document.documentMode===10}function eh(t=de()){return yl(t)||Jf(t)||Zf(t)||Xf(t)||/windows phone/i.test(t)||qf(t)}/**
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
 */function th(t,e=[]){let n;switch(t){case"Browser":n=Ju(de());break;case"Worker":n=`${Ju(de())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${qr}/${r}`}/**
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
 */class av{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function lv(t,e={}){return Me(t,"GET","/v2/passwordPolicy",Xe(t,e))}/**
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
 */const uv=6;class cv{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??uv,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class dv{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xu(this),this.idTokenSubscription=new Xu(this),this.beforeStateQueue=new av(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=st(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Un.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await us(this,{idToken:e}),r=await Be._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Re(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await cs(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$y()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Re(this.app))return Promise.reject(qe(this));const n=e?we(e):null;return n&&P(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Re(this.app)?Promise.reject(qe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Re(this.app)?Promise.reject(qe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(st(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lv(this),n=new cv(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Qr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await iv(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&st(e)||this._popupRedirectResolver;P(n,this,"argument-error"),this.redirectPersistenceManager=await Un.create(this,[st(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(P(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=th(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Re(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&By(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function pt(t){return we(t)}class Xu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Cg(n=>this.observer=n)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ls={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fv(t){Ls=t}function nh(t){return Ls.loadJS(t)}function hv(){return Ls.recaptchaEnterpriseScript}function pv(){return Ls.gapiScript}function mv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class gv{constructor(){this.enterprise=new yv}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class yv{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const vv="recaptcha-enterprise",rh="NO_RECAPTCHA";class wv{constructor(e){this.type=vv,this.auth=pt(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{qy(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Yy(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Gu(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(rh)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new gv().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Gu(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=hv();l.length!==0&&(l+=a),nh(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Zu(t,e,n,r=!1,i=!1){const s=new wv(t);let o;if(i)o=rh;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function ds(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Zu(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Zu(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
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
 */function _v(t,e){const n=Mf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Wn(s,e??{}))return i;De(i,"already-initialized")}return n.initialize({options:e})}function Ev(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(st);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Sv(t,e,n){const r=pt(t);P(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=ih(e),{host:o,port:a}=kv(e),l=a===null?"":`:${a}`,u={url:`${s}//${o}${l}/`},p=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){P(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),P(Wn(u,r.config.emulator)&&Wn(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,Os(o)?(cg(`${s}//${o}${l}`),hg("Auth",!0)):Iv()}function ih(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function kv(t){const e=ih(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ec(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ec(o)}}}function ec(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Iv(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class vl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return it("not implemented")}_getIdTokenResponse(e){return it("not implemented")}_linkToIdToken(e,n){return it("not implemented")}_getReauthenticationResolver(e){return it("not implemented")}}/**
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
 */async function sh(t,e){return Me(t,"POST","/v1/accounts:resetPassword",Xe(t,e))}async function Cv(t,e){return Me(t,"POST","/v1/accounts:update",e)}async function Tv(t,e){return Me(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Pv(t,e){return Xr(t,"POST","/v1/accounts:signInWithPassword",Xe(t,e))}async function Nv(t,e){return Me(t,"POST","/v1/accounts:sendOobCode",Xe(t,e))}async function Rv(t,e){return Nv(t,e)}/**
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
 */async function Av(t,e){return Xr(t,"POST","/v1/accounts:signInWithEmailLink",Xe(t,e))}async function xv(t,e){return Xr(t,"POST","/v1/accounts:signInWithEmailLink",Xe(t,e))}/**
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
 */class Hr extends vl{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Hr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Hr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ds(e,n,"signInWithPassword",Pv);case"emailLink":return Av(e,{email:this._email,oobCode:this._password});default:De(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ds(e,r,"signUpPassword",Tv);case"emailLink":return xv(e,{idToken:n,email:this._email,oobCode:this._password});default:De(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function zn(t,e){return Xr(t,"POST","/v1/accounts:signInWithIdp",Xe(t,e))}/**
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
 */const Ov="http://localhost";class un extends vl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new un(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):De("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new un(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zn(e,n)}buildRequest(){const e={requestUri:Ov,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Yr(n)}return e}}/**
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
 */function Lv(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Dv(t){const e=cr(dr(t)).link,n=e?cr(dr(e)).deep_link_id:null,r=cr(dr(t)).deep_link_id;return(r?cr(dr(r)).link:null)||r||n||e||t}class wl{constructor(e){const n=cr(dr(e)),r=n.apiKey??null,i=n.oobCode??null,s=Lv(n.mode??null);P(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Dv(e);try{return new wl(n)}catch{return null}}}/**
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
 */class qn{constructor(){this.providerId=qn.PROVIDER_ID}static credential(e,n){return Hr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=wl.parseLink(n);return P(r,"argument-error"),Hr._fromEmailAndCode(e,r.code,r.tenantId)}}qn.PROVIDER_ID="password";qn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class oh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zr extends oh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Et extends Zr{constructor(){super("facebook.com")}static credential(e){return un._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch{return null}}}Et.FACEBOOK_SIGN_IN_METHOD="facebook.com";Et.PROVIDER_ID="facebook.com";/**
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
 */class St extends Zr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return un._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return St.credential(n,r)}catch{return null}}}St.GOOGLE_SIGN_IN_METHOD="google.com";St.PROVIDER_ID="google.com";/**
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
 */class kt extends Zr{constructor(){super("github.com")}static credential(e){return un._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch{return null}}}kt.GITHUB_SIGN_IN_METHOD="github.com";kt.PROVIDER_ID="github.com";/**
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
 */class It extends Zr{constructor(){super("twitter.com")}static credential(e,n){return un._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return It.credential(n,r)}catch{return null}}}It.TWITTER_SIGN_IN_METHOD="twitter.com";It.PROVIDER_ID="twitter.com";/**
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
 */async function Mv(t,e){return Xr(t,"POST","/v1/accounts:signUp",Xe(t,e))}/**
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
 */class cn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Be._fromIdTokenResponse(e,r,i),o=tc(r);return new cn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=tc(r);return new cn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function tc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class fs extends Ht{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,fs.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new fs(e,n,r,i)}}function ah(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?fs._fromErrorAndOperation(t,s,e,r):s})}async function Uv(t,e,n=!1){const r=await ln(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return cn._forOperation(t,"link",r)}/**
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
 */async function zv(t,e,n=!1){const{auth:r}=t;if(Re(r.app))return Promise.reject(qe(r));const i="reauthenticate";try{const s=await ln(t,ah(r,i,e,t),n);P(s.idToken,r,"internal-error");const o=gl(s.idToken);P(o,r,"internal-error");const{sub:a}=o;return P(t.uid===a,r,"user-mismatch"),cn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&De(r,"user-mismatch"),s}}/**
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
 */async function lh(t,e,n=!1){if(Re(t.app))return Promise.reject(qe(t));const r="signIn",i=await ah(t,r,e),s=await cn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Fv(t,e){return lh(pt(t),e)}/**
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
 */class _l{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?El._fromServerResponse(e,n):"totpInfo"in n?Sl._fromServerResponse(e,n):De(e,"internal-error")}}class El extends _l{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new El(n)}}class Sl extends _l{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Sl(n)}}/**
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
 */async function kl(t){const e=pt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function jv(t,e,n){const r=pt(t);await ds(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Rv)}async function Bv(t,e,n){await sh(we(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&kl(t),r})}async function Vv(t,e){const n=we(t),r=await sh(n,{oobCode:e}),i=r.requestType;switch(P(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":P(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":P(r.mfaInfo,n,"internal-error");default:P(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=_l._fromServerResponse(pt(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function Hv(t,e){const{data:n}=await Vv(we(t),e);return n.email}async function $v(t,e,n){if(Re(t.app))return Promise.reject(qe(t));const r=pt(t),o=await ds(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Mv).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&kl(t),l}),a=await cn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function bv(t,e,n){return Re(t.app)?Promise.reject(qe(t)):Fv(we(t),qn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&kl(t),r})}/**
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
 */async function Wv(t,e){return Me(t,"POST","/v1/accounts:update",e)}/**
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
 */async function nc(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=we(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ln(r,Wv(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Kv(t,e){const n=we(t);return Re(n.auth.app)?Promise.reject(qe(n.auth)):Gv(n,e)}async function Gv(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e);const o=await ln(t,Cv(r,s));await t._updateTokensIfNecessary(o,!0)}function Qv(t,e,n,r){return we(t).onIdTokenChanged(e,n,r)}function Yv(t,e,n){return we(t).beforeAuthStateChanged(e,n)}function qv(t,e,n,r){return we(t).onAuthStateChanged(e,n,r)}function Jv(t){return we(t).signOut()}const hs="__sak";/**
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
 */class uh{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hs,"1"),this.storage.removeItem(hs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Xv=1e3,Zv=10;class ch extends uh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=eh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);ov()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Zv):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Xv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ch.type="LOCAL";const ew=ch;/**
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
 */class dh extends uh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}dh.type="SESSION";const fh=dh;/**
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
 */function tw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ds{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ds(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await tw(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ds.receivers=[];/**
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
 */function Il(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class nw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Il("",20);i.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const d=m;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(p),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Je(){return window}function rw(t){Je().location.href=t}/**
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
 */function hh(){return typeof Je().WorkerGlobalScope<"u"&&typeof Je().importScripts=="function"}async function iw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function ow(){return hh()?self:null}/**
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
 */const ph="firebaseLocalStorageDb",aw=1,ps="firebaseLocalStorage",mh="fbase_key";class ei{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ms(t,e){return t.transaction([ps],e?"readwrite":"readonly").objectStore(ps)}function lw(){const t=indexedDB.deleteDatabase(ph);return new ei(t).toPromise()}function ya(){const t=indexedDB.open(ph,aw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ps,{keyPath:mh})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ps)?e(r):(r.close(),await lw(),e(await ya()))})})}async function rc(t,e,n){const r=Ms(t,!0).put({[mh]:e,value:n});return new ei(r).toPromise()}async function uw(t,e){const n=Ms(t,!1).get(e),r=await new ei(n).toPromise();return r===void 0?null:r.value}function ic(t,e){const n=Ms(t,!0).delete(e);return new ei(n).toPromise()}const cw=800,dw=3;class gh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ya(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>dw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ds._getInstance(ow()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await iw(),!this.activeServiceWorker)return;this.sender=new nw(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ya();return await rc(e,hs,"1"),await ic(e,hs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>rc(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>uw(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ic(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ms(i,!1).getAll();return new ei(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gh.type="LOCAL";const fw=gh;new Jr(3e4,6e4);/**
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
 */function hw(t,e){return e?st(e):(P(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Cl extends vl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function pw(t){return lh(t.auth,new Cl(t),t.bypassAuthState)}function mw(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),zv(n,new Cl(t),t.bypassAuthState)}async function gw(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),Uv(n,new Cl(t),t.bypassAuthState)}/**
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
 */class yh{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pw;case"linkViaPopup":case"linkViaRedirect":return gw;case"reauthViaPopup":case"reauthViaRedirect":return mw;default:De(this.auth,"internal-error")}}resolve(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const yw=new Jr(2e3,1e4);class Pn extends yh{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Pn.currentPopupAction&&Pn.currentPopupAction.cancel(),Pn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){ft(this.filter.length===1,"Popup operations only handle one event");const e=Il();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ye(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,yw.get())};e()}}Pn.currentPopupAction=null;/**
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
 */const vw="pendingRedirect",Mi=new Map;class ww extends yh{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Mi.get(this.auth._key());if(!e){try{const r=await _w(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Mi.set(this.auth._key(),e)}return this.bypassAuthState||Mi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _w(t,e){const n=kw(e),r=Sw(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Ew(t,e){Mi.set(t._key(),e)}function Sw(t){return st(t._redirectPersistence)}function kw(t){return Di(vw,t.config.apiKey,t.name)}async function Iw(t,e,n=!1){if(Re(t.app))return Promise.reject(qe(t));const r=pt(t),i=hw(r,e),o=await new ww(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Cw=10*60*1e3;class Tw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Pw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!vh(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ye(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Cw&&this.cachedEventUids.clear(),this.cachedEventUids.has(sc(e))}saveEventToCache(e){this.cachedEventUids.add(sc(e)),this.lastProcessedEventTime=Date.now()}}function sc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function vh({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Pw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vh(t);default:return!1}}/**
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
 */async function Nw(t,e={}){return Me(t,"GET","/v1/projects",e)}/**
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
 */const Rw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Aw=/^https?/;async function xw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Nw(t);for(const n of e)try{if(Ow(n))return}catch{}De(t,"unauthorized-domain")}function Ow(t){const e=ma(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Aw.test(n))return!1;if(Rw.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Lw=new Jr(3e4,6e4);function oc(){const t=Je().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Dw(t){return new Promise((e,n)=>{var i,s,o;function r(){oc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{oc(),n(Ye(t,"network-request-failed"))},timeout:Lw.get()})}if((s=(i=Je().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Je().gapi)!=null&&o.load)r();else{const a=mv("iframefcb");return Je()[a]=()=>{gapi.load?r():n(Ye(t,"network-request-failed"))},nh(`${pv()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ui=null,e})}let Ui=null;function Mw(t){return Ui=Ui||Dw(t),Ui}/**
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
 */const Uw=new Jr(5e3,15e3),zw="__/auth/iframe",Fw="emulator/auth/iframe",jw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Bw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vw(t){const e=t.config;P(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ml(e,Fw):`https://${t.config.authDomain}/${zw}`,r={apiKey:e.apiKey,appName:t.name,v:qr},i=Bw.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Yr(r).slice(1)}`}async function Hw(t){const e=await Mw(t),n=Je().gapi;return P(n,t,"internal-error"),e.open({where:document.body,url:Vw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jw,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ye(t,"network-request-failed"),a=Je().setTimeout(()=>{s(o)},Uw.get());function l(){Je().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const $w={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bw=500,Ww=600,Kw="_blank",Gw="http://localhost";class ac{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Qw(t,e,n,r=bw,i=Ww){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...$w,width:r.toString(),height:i.toString(),top:s,left:o},u=de().toLowerCase();n&&(a=Yf(u)?Kw:n),Gf(u)&&(e=e||Gw,l.scrollbars="yes");const p=Object.entries(l).reduce((d,[y,w])=>`${d}${y}=${w},`,"");if(sv(u)&&a!=="_self")return Yw(e||"",a),new ac(null);const m=window.open(e||"",a,p);P(m,t,"popup-blocked");try{m.focus()}catch{}return new ac(m)}function Yw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const qw="__/auth/handler",Jw="emulator/auth/handler",Xw=encodeURIComponent("fac");async function lc(t,e,n,r,i,s){P(t.config.authDomain,t,"auth-domain-config-required"),P(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:qr,eventId:i};if(e instanceof oh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ig(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof Zr){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const p of Object.keys(a))a[p]===void 0&&delete a[p];const l=await t._getAppCheckToken(),u=l?`#${Xw}=${encodeURIComponent(l)}`:"";return`${Zw(t)}?${Yr(a).slice(1)}${u}`}function Zw({config:t}){return t.emulator?ml(t,Jw):`https://${t.authDomain}/${qw}`}/**
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
 */const go="webStorageSupport";class e0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fh,this._completeRedirectFn=Iw,this._overrideRedirectResult=Ew}async _openPopup(e,n,r,i){var o;ft((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await lc(e,n,r,ma(),i);return Qw(e,s,Il())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await lc(e,n,r,ma(),i);return rw(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ft(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Hw(e),r=new Tw(e);return n.register("authEvent",i=>(P(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(go,{type:go},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[go];s!==void 0&&n(!!s),De(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=xw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return eh()||Qf()||yl()}}const t0=e0;var uc="@firebase/auth",cc="1.12.0";/**
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
 */class n0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function r0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function i0(t){Br(new Kn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;P(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:th(t)},u=new dv(r,i,s,l);return Ev(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Br(new Kn("auth-internal",e=>{const n=pt(e.getProvider("auth").getImmediate());return(r=>new n0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dn(uc,cc,r0(t)),Dn(uc,cc,"esm2020")}/**
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
 */const s0=5*60,o0=xf("authIdTokenMaxAge")||s0;let dc=null;const a0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>o0)return;const i=n==null?void 0:n.token;dc!==i&&(dc=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function l0(t=Ty()){const e=Mf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_v(t,{popupRedirectResolver:t0,persistence:[fw,ew,fh]}),r=xf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=a0(s.toString());Yv(n,o,()=>o(n.currentUser)),Qv(n,a=>o(a))}}const i=lg("auth");return i&&Sv(n,`http://${i}`),n}function u0(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}fv({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ye("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",u0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});i0("Browser");const c0={apiKey:"AIzaSyDDqSudAmgIyVT7nfg_2eJM8pf7nUQ7Hmk",authDomain:"kaydol-e1326.firebaseapp.com",projectId:"kaydol-e1326",storageBucket:"kaydol-e1326.firebasestorage.app",messagingSenderId:"272409924206",appId:"1:272409924206:web:7cdc48219e710c8b678c7f",measurementId:"G-6NG7FMP6H8"},d0=Uf(c0),Ze=l0(d0),f0=({message:t,type:e,onClose:n})=>(K.useEffect(()=>{const r=setTimeout(n,3e3);return()=>clearTimeout(r)},[n]),N.jsxs("div",{className:`fixed top-10 right-10 z-[10000] flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-xl border border-white/10 ${e==="success"?"bg-green-500/20 text-green-400":"bg-red-500/20 text-red-400"}`,children:[N.jsx("div",{className:`w-2 h-2 rounded-full ${e==="success"?"bg-green-400":"bg-red-400"} animate-pulse`}),N.jsx("span",{className:"text-sm font-bold tracking-wide",children:t})]}));function h0(){const[t,e]=K.useState("dark"),[n,r]=K.useState(0),[i,s]=K.useState(null),[o,a]=K.useState(!1),[l,u]=K.useState(!1),[p,m]=K.useState("login"),[d,y]=K.useState(!1),[w,_]=K.useState(null),[x,f]=K.useState(""),[c,h]=K.useState(""),[g,S]=K.useState(""),[C,T]=K.useState(null),E=(M,Wt="success")=>T({message:M,type:Wt});K.useEffect(()=>{const Wt=new URLSearchParams(window.location.search).get("oobCode");Wt&&Hv(Ze,Wt).then(()=>{_(Wt),E("Bağlantı doğrulandı, yeni şifreni belirleyebilirsin.")}).catch(()=>E("Geçersiz veya süresi dolmuş bağlantı.","error"));const Jn=qv(Ze,k=>s(k)),hn=()=>r(window.scrollY);return window.addEventListener("scroll",hn),()=>{Jn(),window.removeEventListener("scroll",hn)}},[]);const H=async()=>{if(c.length<6)return E("Şifre en az 6 karakter olmalı!","error");try{await Bv(Ze,w,c),E("Şifren başarıyla güncellendi! Giriş yapabilirsin."),_(null),window.history.replaceState({},document.title,"/"),m("login"),a(!0)}catch{E("Bir hata oluştu, tekrar deneyin.","error")}},O=async()=>{try{const M=await $v(Ze,x,c);await nc(M.user,{displayName:g}),E(`Hoş geldin, ${g}!`),a(!1)}catch(M){E(M.message,"error")}},_e=async()=>{try{await bv(Ze,x,c),E("Giriş yapıldı!"),a(!1)}catch(M){E(M.message,"error")}},$t=async()=>{if(!x)return E("Lütfen e-posta adresini gir!","error");try{await jv(Ze,x),E("Şifre sıfırlama bağlantısı mail kutuna gönderildi!"),m("login")}catch(M){E(M.message,"error")}},bt=async()=>{try{g&&await nc(Ze.currentUser,{displayName:g}),x&&x!==i.email&&await Kv(Ze.currentUser,x),E("Bilgiler güncellendi!"),u(!1)}catch(M){M.code==="auth/requires-recent-login"?E("Güvenlik için tekrar giriş yapmalısın.","error"):E(M.message,"error")}};return N.jsxs("main",{className:`${t==="dark"?"bg-[#050508] text-white":"bg-[#f8f9ff] text-gray-900"} min-h-screen w-full transition-colors duration-500 relative overflow-x-hidden`,children:[C&&N.jsx(f0,{message:C.message,type:C.type,onClose:()=>T(null)}),w&&N.jsx("div",{className:"fixed inset-0 z-[2000] bg-[#050508] flex items-center justify-center p-6 text-white",children:N.jsxs("div",{className:"bg-[#12121a] border border-white/10 w-full max-w-md rounded-[3rem] p-10 shadow-2xl",children:[N.jsxs("div",{className:"text-center mb-8",children:[N.jsx(Jm,{className:"text-purple-500 mx-auto mb-4",size:40}),N.jsx("h2",{className:"text-2xl font-black",children:"Yeni Şifre Belirle"})]}),N.jsx("input",{type:"password",placeholder:"Yeni Şifre",className:"w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none mb-6 focus:border-purple-500",onChange:M=>h(M.target.value)}),N.jsx("button",{onClick:H,className:"w-full bg-purple-600 py-4 rounded-2xl font-black hover:bg-purple-700 transition-all",children:"Şifreyi Güncelle"})]})}),o&&N.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl",children:N.jsxs("div",{className:"bg-[#12121a] border border-white/10 w-full max-w-md rounded-[2.5rem] p-10 text-white",children:[N.jsx("h2",{className:"text-3xl font-black mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent",children:p==="login"?"Giriş Yap":p==="signup"?"Kaydol":"Şifre Sıfırla"}),N.jsxs("div",{className:"space-y-4",children:[p==="signup"&&N.jsx("input",{type:"text",placeholder:"Nickname",className:"w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10",onChange:M=>S(M.target.value)}),N.jsx("input",{type:"email",placeholder:"E-posta",className:"w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10",onChange:M=>f(M.target.value)}),p!=="reset"&&N.jsx("input",{type:"password",placeholder:"Şifre",className:"w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10",onChange:M=>h(M.target.value)})]}),N.jsx("button",{onClick:p==="login"?_e:p==="signup"?O:$t,className:"w-full mt-8 bg-purple-600 py-4 rounded-2xl font-black",children:p==="login"?"Giriş":p==="signup"?"Kaydol":"Mail Gönder"}),N.jsxs("div",{className:"mt-4 text-center",children:[N.jsx("button",{onClick:()=>m(p==="login"?"signup":"login"),className:"text-xs text-gray-500 uppercase font-bold tracking-widest",children:p==="login"?"Hesap Oluştur":"Zaten üye misin?"}),p==="login"&&N.jsx("button",{onClick:()=>m("reset"),className:"block w-full text-[10px] text-gray-600 mt-2 uppercase",children:"Şifremi Unuttum"})]})]})}),N.jsxs("nav",{className:"fixed top-0 w-full p-8 z-50 flex justify-between items-center text-white",children:[N.jsx("div",{className:"bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 text-xs font-black tracking-widest uppercase",children:"ZAHID.DEV"}),N.jsxs("div",{className:"flex gap-4",children:[i?N.jsxs("button",{onClick:()=>y(!d),className:"bg-white/5 px-4 py-2 rounded-full border border-white/10 flex items-center gap-2",children:[N.jsx("span",{className:"text-xs font-black uppercase",children:i.displayName}),N.jsx(qm,{size:14})]}):N.jsx("button",{onClick:()=>a(!0),className:"bg-purple-600 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest",children:"Giriş Yap"}),d&&N.jsxs("div",{className:"absolute right-20 mt-14 bg-[#12121a] border border-white/10 rounded-2xl p-2 text-white",children:[N.jsxs("button",{onClick:()=>{u(!0),y(!1)},className:"flex items-center gap-2 p-3 hover:bg-white/5 rounded-xl w-full text-sm font-bold",children:[N.jsx(Zm,{size:16})," Ayarlar"]}),N.jsxs("button",{onClick:()=>Jv(Ze),className:"flex items-center gap-2 p-3 hover:bg-red-500/10 text-red-400 rounded-xl w-full text-sm font-bold border-t border-white/5",children:[N.jsx(Xm,{size:16})," Çıkış"]})]})]})]}),N.jsx("section",{className:"h-screen flex items-center justify-center",children:N.jsxs("h1",{className:"text-[15vw] font-black tracking-tighter",children:["ZAHID",N.jsx("span",{className:"text-purple-600",children:"."})]})}),l&&N.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl",children:N.jsxs("div",{className:"bg-[#12121a] border border-white/10 w-full max-w-md rounded-[2.5rem] p-10 text-white",children:[N.jsx("h2",{className:"text-2xl font-black mb-6",children:"Profil Ayarları"}),N.jsxs("div",{className:"space-y-4",children:[N.jsx("input",{type:"text",placeholder:"Yeni Nickname",className:"w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10",onChange:M=>S(M.target.value)}),N.jsx("input",{type:"email",placeholder:"Yeni E-posta",className:"w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10",onChange:M=>f(M.target.value)})]}),N.jsx("button",{onClick:bt,className:"w-full mt-8 bg-green-600 py-4 rounded-2xl font-black",children:"Kaydet"}),N.jsx("button",{onClick:()=>u(!1),className:"w-full mt-2 text-xs opacity-30",children:"Kapat"})]})}),N.jsx("style",{jsx:!0,global:!0,children:" body { background: #050508; margin: 0; font-family: sans-serif; } "})]})}yo.createRoot(document.getElementById("root")).render(N.jsx(Mh.StrictMode,{children:N.jsx(h0,{})}));
