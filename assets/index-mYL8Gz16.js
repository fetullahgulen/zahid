(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function p0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var N_={exports:{}},_u={},x_={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yo=Symbol.for("react.element"),m0=Symbol.for("react.portal"),g0=Symbol.for("react.fragment"),y0=Symbol.for("react.strict_mode"),_0=Symbol.for("react.profiler"),v0=Symbol.for("react.provider"),E0=Symbol.for("react.context"),w0=Symbol.for("react.forward_ref"),T0=Symbol.for("react.suspense"),I0=Symbol.for("react.memo"),S0=Symbol.for("react.lazy"),Vm=Symbol.iterator;function R0(t){return t===null||typeof t!="object"?null:(t=Vm&&t[Vm]||t["@@iterator"],typeof t=="function"?t:null)}var D_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V_=Object.assign,O_={};function hs(t,e,n){this.props=t,this.context=e,this.refs=O_,this.updater=n||D_}hs.prototype.isReactComponent={};hs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};hs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function L_(){}L_.prototype=hs.prototype;function Ld(t,e,n){this.props=t,this.context=e,this.refs=O_,this.updater=n||D_}var bd=Ld.prototype=new L_;bd.constructor=Ld;V_(bd,hs.prototype);bd.isPureReactComponent=!0;var Om=Array.isArray,b_=Object.prototype.hasOwnProperty,Md={current:null},M_={key:!0,ref:!0,__self:!0,__source:!0};function F_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)b_.call(e,r)&&!M_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Yo,type:t,key:s,ref:o,props:i,_owner:Md.current}}function A0(t,e){return{$$typeof:Yo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Fd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Yo}function C0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Lm=/\/+/g;function Ac(t,e){return typeof t=="object"&&t!==null&&t.key!=null?C0(""+t.key):e.toString(36)}function el(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Yo:case m0:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ac(o,0):r,Om(i)?(n="",t!=null&&(n=t.replace(Lm,"$&/")+"/"),el(i,e,n,"",function(c){return c})):i!=null&&(Fd(i)&&(i=A0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Lm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Om(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Ac(s,l);o+=el(s,e,n,u,i)}else if(u=R0(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Ac(s,l++),o+=el(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Pa(t,e,n){if(t==null)return t;var r=[],i=0;return el(t,r,"","",function(s){return e.call(n,s,i++)}),r}function k0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var at={current:null},tl={transition:null},P0={ReactCurrentDispatcher:at,ReactCurrentBatchConfig:tl,ReactCurrentOwner:Md};function U_(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:Pa,forEach:function(t,e,n){Pa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Pa(t,function(){e++}),e},toArray:function(t){return Pa(t,function(e){return e})||[]},only:function(t){if(!Fd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=hs;ee.Fragment=g0;ee.Profiler=_0;ee.PureComponent=Ld;ee.StrictMode=y0;ee.Suspense=T0;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P0;ee.act=U_;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=V_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Md.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)b_.call(e,u)&&!M_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Yo,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:E0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:v0,_context:t},t.Consumer=t};ee.createElement=F_;ee.createFactory=function(t){var e=F_.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:w0,render:t}};ee.isValidElement=Fd;ee.lazy=function(t){return{$$typeof:S0,_payload:{_status:-1,_result:t},_init:k0}};ee.memo=function(t,e){return{$$typeof:I0,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=tl.transition;tl.transition={};try{t()}finally{tl.transition=e}};ee.unstable_act=U_;ee.useCallback=function(t,e){return at.current.useCallback(t,e)};ee.useContext=function(t){return at.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return at.current.useDeferredValue(t)};ee.useEffect=function(t,e){return at.current.useEffect(t,e)};ee.useId=function(){return at.current.useId()};ee.useImperativeHandle=function(t,e,n){return at.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return at.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return at.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return at.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return at.current.useReducer(t,e,n)};ee.useRef=function(t){return at.current.useRef(t)};ee.useState=function(t){return at.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return at.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return at.current.useTransition()};ee.version="18.3.1";x_.exports=ee;var O=x_.exports;const N0=p0(O);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x0=O,D0=Symbol.for("react.element"),V0=Symbol.for("react.fragment"),O0=Object.prototype.hasOwnProperty,L0=x0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b0={key:!0,ref:!0,__self:!0,__source:!0};function j_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)O0.call(e,r)&&!b0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:D0,type:t,key:s,ref:o,props:i,_owner:L0.current}}_u.Fragment=V0;_u.jsx=j_;_u.jsxs=j_;N_.exports=_u;var M=N_.exports,ph={},z_={exports:{}},It={},B_={exports:{}},$_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Q){var J=$.length;$.push(Q);e:for(;0<J;){var me=J-1>>>1,Re=$[me];if(0<i(Re,Q))$[me]=Q,$[J]=Re,J=me;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Q=$[0],J=$.pop();if(J!==Q){$[0]=J;e:for(var me=0,Re=$.length,br=Re>>>1;me<br;){var Rt=2*(me+1)-1,Mr=$[Rt],bt=Rt+1,zn=$[bt];if(0>i(Mr,J))bt<Re&&0>i(zn,Mr)?($[me]=zn,$[bt]=J,me=bt):($[me]=Mr,$[Rt]=J,me=Rt);else if(bt<Re&&0>i(zn,J))$[me]=zn,$[bt]=J,me=bt;else break e}}return Q}function i($,Q){var J=$.sortIndex-Q.sortIndex;return J!==0?J:$.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,m=3,v=!1,C=!1,k=!1,P=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T($){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=$)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function V($){if(k=!1,T($),!C)if(n(u)!==null)C=!0,Ts(F);else{var Q=n(c);Q!==null&&Is(V,Q.startTime-$)}}function F($,Q){C=!1,k&&(k=!1,E(y),y=-1),v=!0;var J=m;try{for(T(Q),p=n(u);p!==null&&(!(p.expirationTime>Q)||$&&!A());){var me=p.callback;if(typeof me=="function"){p.callback=null,m=p.priorityLevel;var Re=me(p.expirationTime<=Q);Q=t.unstable_now(),typeof Re=="function"?p.callback=Re:p===n(u)&&r(u),T(Q)}else r(u);p=n(u)}if(p!==null)var br=!0;else{var Rt=n(c);Rt!==null&&Is(V,Rt.startTime-Q),br=!1}return br}finally{p=null,m=J,v=!1}}var j=!1,w=null,y=-1,I=5,R=-1;function A(){return!(t.unstable_now()-R<I)}function N(){if(w!==null){var $=t.unstable_now();R=$;var Q=!0;try{Q=w(!0,$)}finally{Q?S():(j=!1,w=null)}}else j=!1}var S;if(typeof _=="function")S=function(){_(N)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,vn=ze.port2;ze.port1.onmessage=N,S=function(){vn.postMessage(null)}}else S=function(){P(N,0)};function Ts($){w=$,j||(j=!0,S())}function Is($,Q){y=P(function(){$(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){C||v||(C=!0,Ts(F))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var J=m;m=Q;try{return $()}finally{m=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Q){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var J=m;m=$;try{return Q()}finally{m=J}},t.unstable_scheduleCallback=function($,Q,J){var me=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?me+J:me):J=me,$){case 1:var Re=-1;break;case 2:Re=250;break;case 5:Re=1073741823;break;case 4:Re=1e4;break;default:Re=5e3}return Re=J+Re,$={id:d++,callback:Q,priorityLevel:$,startTime:J,expirationTime:Re,sortIndex:-1},J>me?($.sortIndex=J,e(c,$),n(u)===null&&$===n(c)&&(k?(E(y),y=-1):k=!0,Is(V,J-me))):($.sortIndex=Re,e(u,$),C||v||(C=!0,Ts(F))),$},t.unstable_shouldYield=A,t.unstable_wrapCallback=function($){var Q=m;return function(){var J=m;m=Q;try{return $.apply(this,arguments)}finally{m=J}}}})($_);B_.exports=$_;var M0=B_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F0=O,Tt=M0;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var H_=new Set,To={};function di(t,e){Yi(t,e),Yi(t+"Capture",e)}function Yi(t,e){for(To[t]=e,t=0;t<e.length;t++)H_.add(e[t])}var Nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mh=Object.prototype.hasOwnProperty,U0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bm={},Mm={};function j0(t){return mh.call(Mm,t)?!0:mh.call(bm,t)?!1:U0.test(t)?Mm[t]=!0:(bm[t]=!0,!1)}function z0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function B0(t,e,n,r){if(e===null||typeof e>"u"||z0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function lt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qe[t]=new lt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qe[e]=new lt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qe[t]=new lt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qe[t]=new lt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qe[t]=new lt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qe[t]=new lt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qe[t]=new lt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qe[t]=new lt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qe[t]=new lt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ud=/[\-:]([a-z])/g;function jd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ud,jd);qe[e]=new lt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ud,jd);qe[e]=new lt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ud,jd);qe[e]=new lt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qe[t]=new lt(t,1,!1,t.toLowerCase(),null,!1,!1)});qe.xlinkHref=new lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qe[t]=new lt(t,1,!1,t.toLowerCase(),null,!0,!0)});function zd(t,e,n,r){var i=qe.hasOwnProperty(e)?qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(B0(e,n,i,r)&&(n=null),r||i===null?j0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Un=F0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Na=Symbol.for("react.element"),Ci=Symbol.for("react.portal"),ki=Symbol.for("react.fragment"),Bd=Symbol.for("react.strict_mode"),gh=Symbol.for("react.profiler"),W_=Symbol.for("react.provider"),q_=Symbol.for("react.context"),$d=Symbol.for("react.forward_ref"),yh=Symbol.for("react.suspense"),_h=Symbol.for("react.suspense_list"),Hd=Symbol.for("react.memo"),Yn=Symbol.for("react.lazy"),G_=Symbol.for("react.offscreen"),Fm=Symbol.iterator;function js(t){return t===null||typeof t!="object"?null:(t=Fm&&t[Fm]||t["@@iterator"],typeof t=="function"?t:null)}var Ee=Object.assign,Cc;function Qs(t){if(Cc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cc=e&&e[1]||""}return`
`+Cc+t}var kc=!1;function Pc(t,e){if(!t||kc)return"";kc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{kc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qs(t):""}function $0(t){switch(t.tag){case 5:return Qs(t.type);case 16:return Qs("Lazy");case 13:return Qs("Suspense");case 19:return Qs("SuspenseList");case 0:case 2:case 15:return t=Pc(t.type,!1),t;case 11:return t=Pc(t.type.render,!1),t;case 1:return t=Pc(t.type,!0),t;default:return""}}function vh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ki:return"Fragment";case Ci:return"Portal";case gh:return"Profiler";case Bd:return"StrictMode";case yh:return"Suspense";case _h:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case q_:return(t.displayName||"Context")+".Consumer";case W_:return(t._context.displayName||"Context")+".Provider";case $d:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Hd:return e=t.displayName||null,e!==null?e:vh(t.type)||"Memo";case Yn:e=t._payload,t=t._init;try{return vh(t(e))}catch{}}return null}function H0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vh(e);case 8:return e===Bd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function K_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function W0(t){var e=K_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function xa(t){t._valueTracker||(t._valueTracker=W0(t))}function Q_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=K_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Sl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Eh(t,e){var n=e.checked;return Ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Um(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Er(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Y_(t,e){e=e.checked,e!=null&&zd(t,"checked",e,!1)}function wh(t,e){Y_(t,e);var n=Er(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Th(t,e.type,n):e.hasOwnProperty("defaultValue")&&Th(t,e.type,Er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function jm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Th(t,e,n){(e!=="number"||Sl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ys=Array.isArray;function ji(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Er(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ih(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function zm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(Ys(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Er(n)}}function X_(t,e){var n=Er(e.value),r=Er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Bm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function J_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?J_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Da,Z_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Da=Da||document.createElement("div"),Da.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Da.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Io(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var oo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},q0=["Webkit","ms","Moz","O"];Object.keys(oo).forEach(function(t){q0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),oo[e]=oo[t]})});function ev(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||oo.hasOwnProperty(t)&&oo[t]?(""+e).trim():e+"px"}function tv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ev(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var G0=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rh(t,e){if(e){if(G0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function Ah(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ch=null;function Wd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var kh=null,zi=null,Bi=null;function $m(t){if(t=Zo(t)){if(typeof kh!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Iu(e),kh(t.stateNode,t.type,e))}}function nv(t){zi?Bi?Bi.push(t):Bi=[t]:zi=t}function rv(){if(zi){var t=zi,e=Bi;if(Bi=zi=null,$m(t),e)for(t=0;t<e.length;t++)$m(e[t])}}function iv(t,e){return t(e)}function sv(){}var Nc=!1;function ov(t,e,n){if(Nc)return t(e,n);Nc=!0;try{return iv(t,e,n)}finally{Nc=!1,(zi!==null||Bi!==null)&&(sv(),rv())}}function So(t,e){var n=t.stateNode;if(n===null)return null;var r=Iu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var Ph=!1;if(Nn)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){Ph=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{Ph=!1}function K0(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ao=!1,Rl=null,Al=!1,Nh=null,Q0={onError:function(t){ao=!0,Rl=t}};function Y0(t,e,n,r,i,s,o,l,u){ao=!1,Rl=null,K0.apply(Q0,arguments)}function X0(t,e,n,r,i,s,o,l,u){if(Y0.apply(this,arguments),ao){if(ao){var c=Rl;ao=!1,Rl=null}else throw Error(U(198));Al||(Al=!0,Nh=c)}}function fi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function av(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Hm(t){if(fi(t)!==t)throw Error(U(188))}function J0(t){var e=t.alternate;if(!e){if(e=fi(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Hm(i),t;if(s===r)return Hm(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function lv(t){return t=J0(t),t!==null?uv(t):null}function uv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=uv(t);if(e!==null)return e;t=t.sibling}return null}var cv=Tt.unstable_scheduleCallback,Wm=Tt.unstable_cancelCallback,Z0=Tt.unstable_shouldYield,e1=Tt.unstable_requestPaint,Ce=Tt.unstable_now,t1=Tt.unstable_getCurrentPriorityLevel,qd=Tt.unstable_ImmediatePriority,hv=Tt.unstable_UserBlockingPriority,Cl=Tt.unstable_NormalPriority,n1=Tt.unstable_LowPriority,dv=Tt.unstable_IdlePriority,vu=null,nn=null;function r1(t){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(vu,t,void 0,(t.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:o1,i1=Math.log,s1=Math.LN2;function o1(t){return t>>>=0,t===0?32:31-(i1(t)/s1|0)|0}var Va=64,Oa=4194304;function Xs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function kl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Xs(l):(s&=o,s!==0&&(r=Xs(s)))}else o=n&~i,o!==0?r=Xs(o):s!==0&&(r=Xs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ht(e),i=1<<n,r|=t[n],e&=~i;return r}function a1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function l1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ht(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=a1(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function xh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function fv(){var t=Va;return Va<<=1,!(Va&4194240)&&(Va=64),t}function xc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Xo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ht(e),t[e]=n}function u1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ht(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Gd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ht(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ae=0;function pv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var mv,Kd,gv,yv,_v,Dh=!1,La=[],lr=null,ur=null,cr=null,Ro=new Map,Ao=new Map,Jn=[],c1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qm(t,e){switch(t){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":Ro.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(e.pointerId)}}function Bs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Zo(e),e!==null&&Kd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function h1(t,e,n,r,i){switch(e){case"focusin":return lr=Bs(lr,t,e,n,r,i),!0;case"dragenter":return ur=Bs(ur,t,e,n,r,i),!0;case"mouseover":return cr=Bs(cr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ro.set(s,Bs(Ro.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ao.set(s,Bs(Ao.get(s)||null,t,e,n,r,i)),!0}return!1}function vv(t){var e=qr(t.target);if(e!==null){var n=fi(e);if(n!==null){if(e=n.tag,e===13){if(e=av(n),e!==null){t.blockedOn=e,_v(t.priority,function(){gv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Vh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ch=r,n.target.dispatchEvent(r),Ch=null}else return e=Zo(n),e!==null&&Kd(e),t.blockedOn=n,!1;e.shift()}return!0}function Gm(t,e,n){nl(t)&&n.delete(e)}function d1(){Dh=!1,lr!==null&&nl(lr)&&(lr=null),ur!==null&&nl(ur)&&(ur=null),cr!==null&&nl(cr)&&(cr=null),Ro.forEach(Gm),Ao.forEach(Gm)}function $s(t,e){t.blockedOn===e&&(t.blockedOn=null,Dh||(Dh=!0,Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority,d1)))}function Co(t){function e(i){return $s(i,t)}if(0<La.length){$s(La[0],t);for(var n=1;n<La.length;n++){var r=La[n];r.blockedOn===t&&(r.blockedOn=null)}}for(lr!==null&&$s(lr,t),ur!==null&&$s(ur,t),cr!==null&&$s(cr,t),Ro.forEach(e),Ao.forEach(e),n=0;n<Jn.length;n++)r=Jn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Jn.length&&(n=Jn[0],n.blockedOn===null);)vv(n),n.blockedOn===null&&Jn.shift()}var $i=Un.ReactCurrentBatchConfig,Pl=!0;function f1(t,e,n,r){var i=ae,s=$i.transition;$i.transition=null;try{ae=1,Qd(t,e,n,r)}finally{ae=i,$i.transition=s}}function p1(t,e,n,r){var i=ae,s=$i.transition;$i.transition=null;try{ae=4,Qd(t,e,n,r)}finally{ae=i,$i.transition=s}}function Qd(t,e,n,r){if(Pl){var i=Vh(t,e,n,r);if(i===null)zc(t,e,r,Nl,n),qm(t,r);else if(h1(i,t,e,n,r))r.stopPropagation();else if(qm(t,r),e&4&&-1<c1.indexOf(t)){for(;i!==null;){var s=Zo(i);if(s!==null&&mv(s),s=Vh(t,e,n,r),s===null&&zc(t,e,r,Nl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else zc(t,e,r,null,n)}}var Nl=null;function Vh(t,e,n,r){if(Nl=null,t=Wd(r),t=qr(t),t!==null)if(e=fi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=av(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Nl=t,null}function Ev(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(t1()){case qd:return 1;case hv:return 4;case Cl:case n1:return 16;case dv:return 536870912;default:return 16}default:return 16}}var sr=null,Yd=null,rl=null;function wv(){if(rl)return rl;var t,e=Yd,n=e.length,r,i="value"in sr?sr.value:sr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return rl=i.slice(t,1<r?1-r:void 0)}function il(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ba(){return!0}function Km(){return!1}function St(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ba:Km,this.isPropagationStopped=Km,this}return Ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ba)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ba)},persist:function(){},isPersistent:ba}),e}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xd=St(ds),Jo=Ee({},ds,{view:0,detail:0}),m1=St(Jo),Dc,Vc,Hs,Eu=Ee({},Jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Hs&&(Hs&&t.type==="mousemove"?(Dc=t.screenX-Hs.screenX,Vc=t.screenY-Hs.screenY):Vc=Dc=0,Hs=t),Dc)},movementY:function(t){return"movementY"in t?t.movementY:Vc}}),Qm=St(Eu),g1=Ee({},Eu,{dataTransfer:0}),y1=St(g1),_1=Ee({},Jo,{relatedTarget:0}),Oc=St(_1),v1=Ee({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),E1=St(v1),w1=Ee({},ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),T1=St(w1),I1=Ee({},ds,{data:0}),Ym=St(I1),S1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},R1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},A1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function C1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=A1[t])?!!e[t]:!1}function Jd(){return C1}var k1=Ee({},Jo,{key:function(t){if(t.key){var e=S1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?R1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jd,charCode:function(t){return t.type==="keypress"?il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),P1=St(k1),N1=Ee({},Eu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xm=St(N1),x1=Ee({},Jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jd}),D1=St(x1),V1=Ee({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),O1=St(V1),L1=Ee({},Eu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),b1=St(L1),M1=[9,13,27,32],Zd=Nn&&"CompositionEvent"in window,lo=null;Nn&&"documentMode"in document&&(lo=document.documentMode);var F1=Nn&&"TextEvent"in window&&!lo,Tv=Nn&&(!Zd||lo&&8<lo&&11>=lo),Jm=" ",Zm=!1;function Iv(t,e){switch(t){case"keyup":return M1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pi=!1;function U1(t,e){switch(t){case"compositionend":return Sv(e);case"keypress":return e.which!==32?null:(Zm=!0,Jm);case"textInput":return t=e.data,t===Jm&&Zm?null:t;default:return null}}function j1(t,e){if(Pi)return t==="compositionend"||!Zd&&Iv(t,e)?(t=wv(),rl=Yd=sr=null,Pi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Tv&&e.locale!=="ko"?null:e.data;default:return null}}var z1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!z1[t.type]:e==="textarea"}function Rv(t,e,n,r){nv(r),e=xl(e,"onChange"),0<e.length&&(n=new Xd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var uo=null,ko=null;function B1(t){bv(t,0)}function wu(t){var e=Di(t);if(Q_(e))return t}function $1(t,e){if(t==="change")return e}var Av=!1;if(Nn){var Lc;if(Nn){var bc="oninput"in document;if(!bc){var tg=document.createElement("div");tg.setAttribute("oninput","return;"),bc=typeof tg.oninput=="function"}Lc=bc}else Lc=!1;Av=Lc&&(!document.documentMode||9<document.documentMode)}function ng(){uo&&(uo.detachEvent("onpropertychange",Cv),ko=uo=null)}function Cv(t){if(t.propertyName==="value"&&wu(ko)){var e=[];Rv(e,ko,t,Wd(t)),ov(B1,e)}}function H1(t,e,n){t==="focusin"?(ng(),uo=e,ko=n,uo.attachEvent("onpropertychange",Cv)):t==="focusout"&&ng()}function W1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wu(ko)}function q1(t,e){if(t==="click")return wu(e)}function G1(t,e){if(t==="input"||t==="change")return wu(e)}function K1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qt=typeof Object.is=="function"?Object.is:K1;function Po(t,e){if(qt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!mh.call(e,i)||!qt(t[i],e[i]))return!1}return!0}function rg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ig(t,e){var n=rg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rg(n)}}function kv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?kv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Pv(){for(var t=window,e=Sl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Sl(t.document)}return e}function ef(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Q1(t){var e=Pv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&kv(n.ownerDocument.documentElement,n)){if(r!==null&&ef(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ig(n,s);var o=ig(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Y1=Nn&&"documentMode"in document&&11>=document.documentMode,Ni=null,Oh=null,co=null,Lh=!1;function sg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lh||Ni==null||Ni!==Sl(r)||(r=Ni,"selectionStart"in r&&ef(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),co&&Po(co,r)||(co=r,r=xl(Oh,"onSelect"),0<r.length&&(e=new Xd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ni)))}function Ma(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var xi={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionend:Ma("Transition","TransitionEnd")},Mc={},Nv={};Nn&&(Nv=document.createElement("div").style,"AnimationEvent"in window||(delete xi.animationend.animation,delete xi.animationiteration.animation,delete xi.animationstart.animation),"TransitionEvent"in window||delete xi.transitionend.transition);function Tu(t){if(Mc[t])return Mc[t];if(!xi[t])return t;var e=xi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Nv)return Mc[t]=e[n];return t}var xv=Tu("animationend"),Dv=Tu("animationiteration"),Vv=Tu("animationstart"),Ov=Tu("transitionend"),Lv=new Map,og="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pr(t,e){Lv.set(t,e),di(e,[t])}for(var Fc=0;Fc<og.length;Fc++){var Uc=og[Fc],X1=Uc.toLowerCase(),J1=Uc[0].toUpperCase()+Uc.slice(1);Pr(X1,"on"+J1)}Pr(xv,"onAnimationEnd");Pr(Dv,"onAnimationIteration");Pr(Vv,"onAnimationStart");Pr("dblclick","onDoubleClick");Pr("focusin","onFocus");Pr("focusout","onBlur");Pr(Ov,"onTransitionEnd");Yi("onMouseEnter",["mouseout","mouseover"]);Yi("onMouseLeave",["mouseout","mouseover"]);Yi("onPointerEnter",["pointerout","pointerover"]);Yi("onPointerLeave",["pointerout","pointerover"]);di("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));di("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));di("onBeforeInput",["compositionend","keypress","textInput","paste"]);di("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));di("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));di("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Js="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Z1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Js));function ag(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,X0(r,e,void 0,t),t.currentTarget=null}function bv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;ag(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;ag(i,l,c),s=u}}}if(Al)throw t=Nh,Al=!1,Nh=null,t}function de(t,e){var n=e[jh];n===void 0&&(n=e[jh]=new Set);var r=t+"__bubble";n.has(r)||(Mv(e,t,2,!1),n.add(r))}function jc(t,e,n){var r=0;e&&(r|=4),Mv(n,t,r,e)}var Fa="_reactListening"+Math.random().toString(36).slice(2);function No(t){if(!t[Fa]){t[Fa]=!0,H_.forEach(function(n){n!=="selectionchange"&&(Z1.has(n)||jc(n,!1,t),jc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Fa]||(e[Fa]=!0,jc("selectionchange",!1,e))}}function Mv(t,e,n,r){switch(Ev(e)){case 1:var i=f1;break;case 4:i=p1;break;default:i=Qd}n=i.bind(null,e,n,t),i=void 0,!Ph||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function zc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=qr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}ov(function(){var c=s,d=Wd(n),p=[];e:{var m=Lv.get(t);if(m!==void 0){var v=Xd,C=t;switch(t){case"keypress":if(il(n)===0)break e;case"keydown":case"keyup":v=P1;break;case"focusin":C="focus",v=Oc;break;case"focusout":C="blur",v=Oc;break;case"beforeblur":case"afterblur":v=Oc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Qm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=y1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=D1;break;case xv:case Dv:case Vv:v=E1;break;case Ov:v=O1;break;case"scroll":v=m1;break;case"wheel":v=b1;break;case"copy":case"cut":case"paste":v=T1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Xm}var k=(e&4)!==0,P=!k&&t==="scroll",E=k?m!==null?m+"Capture":null:m;k=[];for(var _=c,T;_!==null;){T=_;var V=T.stateNode;if(T.tag===5&&V!==null&&(T=V,E!==null&&(V=So(_,E),V!=null&&k.push(xo(_,V,T)))),P)break;_=_.return}0<k.length&&(m=new v(m,C,null,n,d),p.push({event:m,listeners:k}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",m&&n!==Ch&&(C=n.relatedTarget||n.fromElement)&&(qr(C)||C[xn]))break e;if((v||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,v?(C=n.relatedTarget||n.toElement,v=c,C=C?qr(C):null,C!==null&&(P=fi(C),C!==P||C.tag!==5&&C.tag!==6)&&(C=null)):(v=null,C=c),v!==C)){if(k=Qm,V="onMouseLeave",E="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(k=Xm,V="onPointerLeave",E="onPointerEnter",_="pointer"),P=v==null?m:Di(v),T=C==null?m:Di(C),m=new k(V,_+"leave",v,n,d),m.target=P,m.relatedTarget=T,V=null,qr(d)===c&&(k=new k(E,_+"enter",C,n,d),k.target=T,k.relatedTarget=P,V=k),P=V,v&&C)t:{for(k=v,E=C,_=0,T=k;T;T=Ti(T))_++;for(T=0,V=E;V;V=Ti(V))T++;for(;0<_-T;)k=Ti(k),_--;for(;0<T-_;)E=Ti(E),T--;for(;_--;){if(k===E||E!==null&&k===E.alternate)break t;k=Ti(k),E=Ti(E)}k=null}else k=null;v!==null&&lg(p,m,v,k,!1),C!==null&&P!==null&&lg(p,P,C,k,!0)}}e:{if(m=c?Di(c):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var F=$1;else if(eg(m))if(Av)F=G1;else{F=W1;var j=H1}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(F=q1);if(F&&(F=F(t,c))){Rv(p,F,n,d);break e}j&&j(t,m,c),t==="focusout"&&(j=m._wrapperState)&&j.controlled&&m.type==="number"&&Th(m,"number",m.value)}switch(j=c?Di(c):window,t){case"focusin":(eg(j)||j.contentEditable==="true")&&(Ni=j,Oh=c,co=null);break;case"focusout":co=Oh=Ni=null;break;case"mousedown":Lh=!0;break;case"contextmenu":case"mouseup":case"dragend":Lh=!1,sg(p,n,d);break;case"selectionchange":if(Y1)break;case"keydown":case"keyup":sg(p,n,d)}var w;if(Zd)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Pi?Iv(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Tv&&n.locale!=="ko"&&(Pi||y!=="onCompositionStart"?y==="onCompositionEnd"&&Pi&&(w=wv()):(sr=d,Yd="value"in sr?sr.value:sr.textContent,Pi=!0)),j=xl(c,y),0<j.length&&(y=new Ym(y,t,null,n,d),p.push({event:y,listeners:j}),w?y.data=w:(w=Sv(n),w!==null&&(y.data=w)))),(w=F1?U1(t,n):j1(t,n))&&(c=xl(c,"onBeforeInput"),0<c.length&&(d=new Ym("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=w))}bv(p,e)})}function xo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function xl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=So(t,n),s!=null&&r.unshift(xo(t,s,i)),s=So(t,e),s!=null&&r.push(xo(t,s,i))),t=t.return}return r}function Ti(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function lg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=So(n,s),u!=null&&o.unshift(xo(n,u,l))):i||(u=So(n,s),u!=null&&o.push(xo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var eS=/\r\n?/g,tS=/\u0000|\uFFFD/g;function ug(t){return(typeof t=="string"?t:""+t).replace(eS,`
`).replace(tS,"")}function Ua(t,e,n){if(e=ug(e),ug(t)!==e&&n)throw Error(U(425))}function Dl(){}var bh=null,Mh=null;function Fh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Uh=typeof setTimeout=="function"?setTimeout:void 0,nS=typeof clearTimeout=="function"?clearTimeout:void 0,cg=typeof Promise=="function"?Promise:void 0,rS=typeof queueMicrotask=="function"?queueMicrotask:typeof cg<"u"?function(t){return cg.resolve(null).then(t).catch(iS)}:Uh;function iS(t){setTimeout(function(){throw t})}function Bc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Co(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Co(e)}function hr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function hg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fs=Math.random().toString(36).slice(2),tn="__reactFiber$"+fs,Do="__reactProps$"+fs,xn="__reactContainer$"+fs,jh="__reactEvents$"+fs,sS="__reactListeners$"+fs,oS="__reactHandles$"+fs;function qr(t){var e=t[tn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xn]||n[tn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=hg(t);t!==null;){if(n=t[tn])return n;t=hg(t)}return e}t=n,n=t.parentNode}return null}function Zo(t){return t=t[tn]||t[xn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Di(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Iu(t){return t[Do]||null}var zh=[],Vi=-1;function Nr(t){return{current:t}}function pe(t){0>Vi||(t.current=zh[Vi],zh[Vi]=null,Vi--)}function ce(t,e){Vi++,zh[Vi]=t.current,t.current=e}var wr={},tt=Nr(wr),ft=Nr(!1),ei=wr;function Xi(t,e){var n=t.type.contextTypes;if(!n)return wr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function pt(t){return t=t.childContextTypes,t!=null}function Vl(){pe(ft),pe(tt)}function dg(t,e,n){if(tt.current!==wr)throw Error(U(168));ce(tt,e),ce(ft,n)}function Fv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,H0(t)||"Unknown",i));return Ee({},n,r)}function Ol(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||wr,ei=tt.current,ce(tt,t),ce(ft,ft.current),!0}function fg(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=Fv(t,e,ei),r.__reactInternalMemoizedMergedChildContext=t,pe(ft),pe(tt),ce(tt,t)):pe(ft),ce(ft,n)}var wn=null,Su=!1,$c=!1;function Uv(t){wn===null?wn=[t]:wn.push(t)}function aS(t){Su=!0,Uv(t)}function xr(){if(!$c&&wn!==null){$c=!0;var t=0,e=ae;try{var n=wn;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}wn=null,Su=!1}catch(i){throw wn!==null&&(wn=wn.slice(t+1)),cv(qd,xr),i}finally{ae=e,$c=!1}}return null}var Oi=[],Li=0,Ll=null,bl=0,At=[],Ct=0,ti=null,Tn=1,In="";function $r(t,e){Oi[Li++]=bl,Oi[Li++]=Ll,Ll=t,bl=e}function jv(t,e,n){At[Ct++]=Tn,At[Ct++]=In,At[Ct++]=ti,ti=t;var r=Tn;t=In;var i=32-Ht(r)-1;r&=~(1<<i),n+=1;var s=32-Ht(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Tn=1<<32-Ht(e)+i|n<<i|r,In=s+t}else Tn=1<<s|n<<i|r,In=t}function tf(t){t.return!==null&&($r(t,1),jv(t,1,0))}function nf(t){for(;t===Ll;)Ll=Oi[--Li],Oi[Li]=null,bl=Oi[--Li],Oi[Li]=null;for(;t===ti;)ti=At[--Ct],At[Ct]=null,In=At[--Ct],At[Ct]=null,Tn=At[--Ct],At[Ct]=null}var wt=null,vt=null,ge=!1,jt=null;function zv(t,e){var n=Pt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function pg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wt=t,vt=hr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wt=t,vt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ti!==null?{id:Tn,overflow:In}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Pt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wt=t,vt=null,!0):!1;default:return!1}}function Bh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function $h(t){if(ge){var e=vt;if(e){var n=e;if(!pg(t,e)){if(Bh(t))throw Error(U(418));e=hr(n.nextSibling);var r=wt;e&&pg(t,e)?zv(r,n):(t.flags=t.flags&-4097|2,ge=!1,wt=t)}}else{if(Bh(t))throw Error(U(418));t.flags=t.flags&-4097|2,ge=!1,wt=t}}}function mg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wt=t}function ja(t){if(t!==wt)return!1;if(!ge)return mg(t),ge=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Fh(t.type,t.memoizedProps)),e&&(e=vt)){if(Bh(t))throw Bv(),Error(U(418));for(;e;)zv(t,e),e=hr(e.nextSibling)}if(mg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vt=hr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vt=null}}else vt=wt?hr(t.stateNode.nextSibling):null;return!0}function Bv(){for(var t=vt;t;)t=hr(t.nextSibling)}function Ji(){vt=wt=null,ge=!1}function rf(t){jt===null?jt=[t]:jt.push(t)}var lS=Un.ReactCurrentBatchConfig;function Ws(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function za(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gg(t){var e=t._init;return e(t._payload)}function $v(t){function e(E,_){if(t){var T=E.deletions;T===null?(E.deletions=[_],E.flags|=16):T.push(_)}}function n(E,_){if(!t)return null;for(;_!==null;)e(E,_),_=_.sibling;return null}function r(E,_){for(E=new Map;_!==null;)_.key!==null?E.set(_.key,_):E.set(_.index,_),_=_.sibling;return E}function i(E,_){return E=mr(E,_),E.index=0,E.sibling=null,E}function s(E,_,T){return E.index=T,t?(T=E.alternate,T!==null?(T=T.index,T<_?(E.flags|=2,_):T):(E.flags|=2,_)):(E.flags|=1048576,_)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function l(E,_,T,V){return _===null||_.tag!==6?(_=Yc(T,E.mode,V),_.return=E,_):(_=i(_,T),_.return=E,_)}function u(E,_,T,V){var F=T.type;return F===ki?d(E,_,T.props.children,V,T.key):_!==null&&(_.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Yn&&gg(F)===_.type)?(V=i(_,T.props),V.ref=Ws(E,_,T),V.return=E,V):(V=hl(T.type,T.key,T.props,null,E.mode,V),V.ref=Ws(E,_,T),V.return=E,V)}function c(E,_,T,V){return _===null||_.tag!==4||_.stateNode.containerInfo!==T.containerInfo||_.stateNode.implementation!==T.implementation?(_=Xc(T,E.mode,V),_.return=E,_):(_=i(_,T.children||[]),_.return=E,_)}function d(E,_,T,V,F){return _===null||_.tag!==7?(_=Xr(T,E.mode,V,F),_.return=E,_):(_=i(_,T),_.return=E,_)}function p(E,_,T){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Yc(""+_,E.mode,T),_.return=E,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Na:return T=hl(_.type,_.key,_.props,null,E.mode,T),T.ref=Ws(E,null,_),T.return=E,T;case Ci:return _=Xc(_,E.mode,T),_.return=E,_;case Yn:var V=_._init;return p(E,V(_._payload),T)}if(Ys(_)||js(_))return _=Xr(_,E.mode,T,null),_.return=E,_;za(E,_)}return null}function m(E,_,T,V){var F=_!==null?_.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return F!==null?null:l(E,_,""+T,V);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Na:return T.key===F?u(E,_,T,V):null;case Ci:return T.key===F?c(E,_,T,V):null;case Yn:return F=T._init,m(E,_,F(T._payload),V)}if(Ys(T)||js(T))return F!==null?null:d(E,_,T,V,null);za(E,T)}return null}function v(E,_,T,V,F){if(typeof V=="string"&&V!==""||typeof V=="number")return E=E.get(T)||null,l(_,E,""+V,F);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Na:return E=E.get(V.key===null?T:V.key)||null,u(_,E,V,F);case Ci:return E=E.get(V.key===null?T:V.key)||null,c(_,E,V,F);case Yn:var j=V._init;return v(E,_,T,j(V._payload),F)}if(Ys(V)||js(V))return E=E.get(T)||null,d(_,E,V,F,null);za(_,V)}return null}function C(E,_,T,V){for(var F=null,j=null,w=_,y=_=0,I=null;w!==null&&y<T.length;y++){w.index>y?(I=w,w=null):I=w.sibling;var R=m(E,w,T[y],V);if(R===null){w===null&&(w=I);break}t&&w&&R.alternate===null&&e(E,w),_=s(R,_,y),j===null?F=R:j.sibling=R,j=R,w=I}if(y===T.length)return n(E,w),ge&&$r(E,y),F;if(w===null){for(;y<T.length;y++)w=p(E,T[y],V),w!==null&&(_=s(w,_,y),j===null?F=w:j.sibling=w,j=w);return ge&&$r(E,y),F}for(w=r(E,w);y<T.length;y++)I=v(w,E,y,T[y],V),I!==null&&(t&&I.alternate!==null&&w.delete(I.key===null?y:I.key),_=s(I,_,y),j===null?F=I:j.sibling=I,j=I);return t&&w.forEach(function(A){return e(E,A)}),ge&&$r(E,y),F}function k(E,_,T,V){var F=js(T);if(typeof F!="function")throw Error(U(150));if(T=F.call(T),T==null)throw Error(U(151));for(var j=F=null,w=_,y=_=0,I=null,R=T.next();w!==null&&!R.done;y++,R=T.next()){w.index>y?(I=w,w=null):I=w.sibling;var A=m(E,w,R.value,V);if(A===null){w===null&&(w=I);break}t&&w&&A.alternate===null&&e(E,w),_=s(A,_,y),j===null?F=A:j.sibling=A,j=A,w=I}if(R.done)return n(E,w),ge&&$r(E,y),F;if(w===null){for(;!R.done;y++,R=T.next())R=p(E,R.value,V),R!==null&&(_=s(R,_,y),j===null?F=R:j.sibling=R,j=R);return ge&&$r(E,y),F}for(w=r(E,w);!R.done;y++,R=T.next())R=v(w,E,y,R.value,V),R!==null&&(t&&R.alternate!==null&&w.delete(R.key===null?y:R.key),_=s(R,_,y),j===null?F=R:j.sibling=R,j=R);return t&&w.forEach(function(N){return e(E,N)}),ge&&$r(E,y),F}function P(E,_,T,V){if(typeof T=="object"&&T!==null&&T.type===ki&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case Na:e:{for(var F=T.key,j=_;j!==null;){if(j.key===F){if(F=T.type,F===ki){if(j.tag===7){n(E,j.sibling),_=i(j,T.props.children),_.return=E,E=_;break e}}else if(j.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Yn&&gg(F)===j.type){n(E,j.sibling),_=i(j,T.props),_.ref=Ws(E,j,T),_.return=E,E=_;break e}n(E,j);break}else e(E,j);j=j.sibling}T.type===ki?(_=Xr(T.props.children,E.mode,V,T.key),_.return=E,E=_):(V=hl(T.type,T.key,T.props,null,E.mode,V),V.ref=Ws(E,_,T),V.return=E,E=V)}return o(E);case Ci:e:{for(j=T.key;_!==null;){if(_.key===j)if(_.tag===4&&_.stateNode.containerInfo===T.containerInfo&&_.stateNode.implementation===T.implementation){n(E,_.sibling),_=i(_,T.children||[]),_.return=E,E=_;break e}else{n(E,_);break}else e(E,_);_=_.sibling}_=Xc(T,E.mode,V),_.return=E,E=_}return o(E);case Yn:return j=T._init,P(E,_,j(T._payload),V)}if(Ys(T))return C(E,_,T,V);if(js(T))return k(E,_,T,V);za(E,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,_!==null&&_.tag===6?(n(E,_.sibling),_=i(_,T),_.return=E,E=_):(n(E,_),_=Yc(T,E.mode,V),_.return=E,E=_),o(E)):n(E,_)}return P}var Zi=$v(!0),Hv=$v(!1),Ml=Nr(null),Fl=null,bi=null,sf=null;function of(){sf=bi=Fl=null}function af(t){var e=Ml.current;pe(Ml),t._currentValue=e}function Hh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Hi(t,e){Fl=t,sf=bi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(dt=!0),t.firstContext=null)}function Dt(t){var e=t._currentValue;if(sf!==t)if(t={context:t,memoizedValue:e,next:null},bi===null){if(Fl===null)throw Error(U(308));bi=t,Fl.dependencies={lanes:0,firstContext:t}}else bi=bi.next=t;return e}var Gr=null;function lf(t){Gr===null?Gr=[t]:Gr.push(t)}function Wv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,lf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Dn(t,r)}function Dn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Xn=!1;function uf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function An(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function dr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Dn(t,n)}return i=r.interleaved,i===null?(e.next=e,lf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Dn(t,n)}function sl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gd(t,n)}}function yg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ul(t,e,n,r){var i=t.updateQueue;Xn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,v=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,k=l;switch(m=e,v=n,k.tag){case 1:if(C=k.payload,typeof C=="function"){p=C.call(v,p,m);break e}p=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=k.payload,m=typeof C=="function"?C.call(v,p,m):C,m==null)break e;p=Ee({},p,m);break e;case 2:Xn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else v={eventTime:v,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=v,u=p):d=d.next=v,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ri|=o,t.lanes=o,t.memoizedState=p}}function _g(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var ea={},rn=Nr(ea),Vo=Nr(ea),Oo=Nr(ea);function Kr(t){if(t===ea)throw Error(U(174));return t}function cf(t,e){switch(ce(Oo,e),ce(Vo,t),ce(rn,ea),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Sh(e,t)}pe(rn),ce(rn,e)}function es(){pe(rn),pe(Vo),pe(Oo)}function Gv(t){Kr(Oo.current);var e=Kr(rn.current),n=Sh(e,t.type);e!==n&&(ce(Vo,t),ce(rn,n))}function hf(t){Vo.current===t&&(pe(rn),pe(Vo))}var ye=Nr(0);function jl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Hc=[];function df(){for(var t=0;t<Hc.length;t++)Hc[t]._workInProgressVersionPrimary=null;Hc.length=0}var ol=Un.ReactCurrentDispatcher,Wc=Un.ReactCurrentBatchConfig,ni=0,_e=null,Ve=null,Ue=null,zl=!1,ho=!1,Lo=0,uS=0;function Qe(){throw Error(U(321))}function ff(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qt(t[n],e[n]))return!1;return!0}function pf(t,e,n,r,i,s){if(ni=s,_e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ol.current=t===null||t.memoizedState===null?fS:pS,t=n(r,i),ho){s=0;do{if(ho=!1,Lo=0,25<=s)throw Error(U(301));s+=1,Ue=Ve=null,e.updateQueue=null,ol.current=mS,t=n(r,i)}while(ho)}if(ol.current=Bl,e=Ve!==null&&Ve.next!==null,ni=0,Ue=Ve=_e=null,zl=!1,e)throw Error(U(300));return t}function mf(){var t=Lo!==0;return Lo=0,t}function Zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?_e.memoizedState=Ue=t:Ue=Ue.next=t,Ue}function Vt(){if(Ve===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var e=Ue===null?_e.memoizedState:Ue.next;if(e!==null)Ue=e,Ve=t;else{if(t===null)throw Error(U(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},Ue===null?_e.memoizedState=Ue=t:Ue=Ue.next=t}return Ue}function bo(t,e){return typeof e=="function"?e(t):e}function qc(t){var e=Vt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Ve,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((ni&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,_e.lanes|=d,ri|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,qt(r,e.memoizedState)||(dt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,_e.lanes|=s,ri|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gc(t){var e=Vt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);qt(s,e.memoizedState)||(dt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Kv(){}function Qv(t,e){var n=_e,r=Vt(),i=e(),s=!qt(r.memoizedState,i);if(s&&(r.memoizedState=i,dt=!0),r=r.queue,gf(Jv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,Mo(9,Xv.bind(null,n,r,i,e),void 0,null),je===null)throw Error(U(349));ni&30||Yv(n,e,i)}return i}function Yv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Xv(t,e,n,r){e.value=n,e.getSnapshot=r,Zv(e)&&eE(t)}function Jv(t,e,n){return n(function(){Zv(e)&&eE(t)})}function Zv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qt(t,n)}catch{return!0}}function eE(t){var e=Dn(t,1);e!==null&&Wt(e,t,1,-1)}function vg(t){var e=Zt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bo,lastRenderedState:t},e.queue=t,t=t.dispatch=dS.bind(null,_e,t),[e.memoizedState,t]}function Mo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function tE(){return Vt().memoizedState}function al(t,e,n,r){var i=Zt();_e.flags|=t,i.memoizedState=Mo(1|e,n,void 0,r===void 0?null:r)}function Ru(t,e,n,r){var i=Vt();r=r===void 0?null:r;var s=void 0;if(Ve!==null){var o=Ve.memoizedState;if(s=o.destroy,r!==null&&ff(r,o.deps)){i.memoizedState=Mo(e,n,s,r);return}}_e.flags|=t,i.memoizedState=Mo(1|e,n,s,r)}function Eg(t,e){return al(8390656,8,t,e)}function gf(t,e){return Ru(2048,8,t,e)}function nE(t,e){return Ru(4,2,t,e)}function rE(t,e){return Ru(4,4,t,e)}function iE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function sE(t,e,n){return n=n!=null?n.concat([t]):null,Ru(4,4,iE.bind(null,e,t),n)}function yf(){}function oE(t,e){var n=Vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ff(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function aE(t,e){var n=Vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ff(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function lE(t,e,n){return ni&21?(qt(n,e)||(n=fv(),_e.lanes|=n,ri|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,dt=!0),t.memoizedState=n)}function cS(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=Wc.transition;Wc.transition={};try{t(!1),e()}finally{ae=n,Wc.transition=r}}function uE(){return Vt().memoizedState}function hS(t,e,n){var r=pr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cE(t))hE(e,n);else if(n=Wv(t,e,n,r),n!==null){var i=ot();Wt(n,t,r,i),dE(n,e,r)}}function dS(t,e,n){var r=pr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cE(t))hE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,qt(l,o)){var u=e.interleaved;u===null?(i.next=i,lf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Wv(t,e,i,r),n!==null&&(i=ot(),Wt(n,t,r,i),dE(n,e,r))}}function cE(t){var e=t.alternate;return t===_e||e!==null&&e===_e}function hE(t,e){ho=zl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function dE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gd(t,n)}}var Bl={readContext:Dt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},fS={readContext:Dt,useCallback:function(t,e){return Zt().memoizedState=[t,e===void 0?null:e],t},useContext:Dt,useEffect:Eg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,al(4194308,4,iE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return al(4194308,4,t,e)},useInsertionEffect:function(t,e){return al(4,2,t,e)},useMemo:function(t,e){var n=Zt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Zt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=hS.bind(null,_e,t),[r.memoizedState,t]},useRef:function(t){var e=Zt();return t={current:t},e.memoizedState=t},useState:vg,useDebugValue:yf,useDeferredValue:function(t){return Zt().memoizedState=t},useTransition:function(){var t=vg(!1),e=t[0];return t=cS.bind(null,t[1]),Zt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=_e,i=Zt();if(ge){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),je===null)throw Error(U(349));ni&30||Yv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Eg(Jv.bind(null,r,s,t),[t]),r.flags|=2048,Mo(9,Xv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Zt(),e=je.identifierPrefix;if(ge){var n=In,r=Tn;n=(r&~(1<<32-Ht(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Lo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=uS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},pS={readContext:Dt,useCallback:oE,useContext:Dt,useEffect:gf,useImperativeHandle:sE,useInsertionEffect:nE,useLayoutEffect:rE,useMemo:aE,useReducer:qc,useRef:tE,useState:function(){return qc(bo)},useDebugValue:yf,useDeferredValue:function(t){var e=Vt();return lE(e,Ve.memoizedState,t)},useTransition:function(){var t=qc(bo)[0],e=Vt().memoizedState;return[t,e]},useMutableSource:Kv,useSyncExternalStore:Qv,useId:uE,unstable_isNewReconciler:!1},mS={readContext:Dt,useCallback:oE,useContext:Dt,useEffect:gf,useImperativeHandle:sE,useInsertionEffect:nE,useLayoutEffect:rE,useMemo:aE,useReducer:Gc,useRef:tE,useState:function(){return Gc(bo)},useDebugValue:yf,useDeferredValue:function(t){var e=Vt();return Ve===null?e.memoizedState=t:lE(e,Ve.memoizedState,t)},useTransition:function(){var t=Gc(bo)[0],e=Vt().memoizedState;return[t,e]},useMutableSource:Kv,useSyncExternalStore:Qv,useId:uE,unstable_isNewReconciler:!1};function Ft(t,e){if(t&&t.defaultProps){e=Ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Wh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Au={isMounted:function(t){return(t=t._reactInternals)?fi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ot(),i=pr(t),s=An(r,i);s.payload=e,n!=null&&(s.callback=n),e=dr(t,s,i),e!==null&&(Wt(e,t,i,r),sl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ot(),i=pr(t),s=An(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=dr(t,s,i),e!==null&&(Wt(e,t,i,r),sl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ot(),r=pr(t),i=An(n,r);i.tag=2,e!=null&&(i.callback=e),e=dr(t,i,r),e!==null&&(Wt(e,t,r,n),sl(e,t,r))}};function wg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Po(n,r)||!Po(i,s):!0}function fE(t,e,n){var r=!1,i=wr,s=e.contextType;return typeof s=="object"&&s!==null?s=Dt(s):(i=pt(e)?ei:tt.current,r=e.contextTypes,s=(r=r!=null)?Xi(t,i):wr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Au,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Tg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Au.enqueueReplaceState(e,e.state,null)}function qh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},uf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Dt(s):(s=pt(e)?ei:tt.current,i.context=Xi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Wh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Au.enqueueReplaceState(i,i.state,null),Ul(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ts(t,e){try{var n="",r=e;do n+=$0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Kc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Gh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var gS=typeof WeakMap=="function"?WeakMap:Map;function pE(t,e,n){n=An(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Hl||(Hl=!0,rd=r),Gh(t,e)},n}function mE(t,e,n){n=An(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Gh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Gh(t,e),typeof r!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ig(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new gS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=NS.bind(null,t,e,n),e.then(t,t))}function Sg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Rg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=An(-1,1),e.tag=2,dr(n,e,1))),n.lanes|=1),t)}var yS=Un.ReactCurrentOwner,dt=!1;function st(t,e,n,r){e.child=t===null?Hv(e,null,n,r):Zi(e,t.child,n,r)}function Ag(t,e,n,r,i){n=n.render;var s=e.ref;return Hi(e,i),r=pf(t,e,n,r,s,i),n=mf(),t!==null&&!dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Vn(t,e,i)):(ge&&n&&tf(e),e.flags|=1,st(t,e,r,i),e.child)}function Cg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Rf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,gE(t,e,s,r,i)):(t=hl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Po,n(o,r)&&t.ref===e.ref)return Vn(t,e,i)}return e.flags|=1,t=mr(s,r),t.ref=e.ref,t.return=e,e.child=t}function gE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Po(s,r)&&t.ref===e.ref)if(dt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(dt=!0);else return e.lanes=t.lanes,Vn(t,e,i)}return Kh(t,e,n,r,i)}function yE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(Fi,yt),yt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(Fi,yt),yt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(Fi,yt),yt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(Fi,yt),yt|=r;return st(t,e,i,n),e.child}function _E(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Kh(t,e,n,r,i){var s=pt(n)?ei:tt.current;return s=Xi(e,s),Hi(e,i),n=pf(t,e,n,r,s,i),r=mf(),t!==null&&!dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Vn(t,e,i)):(ge&&r&&tf(e),e.flags|=1,st(t,e,n,i),e.child)}function kg(t,e,n,r,i){if(pt(n)){var s=!0;Ol(e)}else s=!1;if(Hi(e,i),e.stateNode===null)ll(t,e),fE(e,n,r),qh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Dt(c):(c=pt(n)?ei:tt.current,c=Xi(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Tg(e,o,r,c),Xn=!1;var m=e.memoizedState;o.state=m,Ul(e,r,o,i),u=e.memoizedState,l!==r||m!==u||ft.current||Xn?(typeof d=="function"&&(Wh(e,n,d,r),u=e.memoizedState),(l=Xn||wg(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,qv(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Ft(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Dt(u):(u=pt(n)?ei:tt.current,u=Xi(e,u));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&Tg(e,o,r,u),Xn=!1,m=e.memoizedState,o.state=m,Ul(e,r,o,i);var C=e.memoizedState;l!==p||m!==C||ft.current||Xn?(typeof v=="function"&&(Wh(e,n,v,r),C=e.memoizedState),(c=Xn||wg(e,n,c,r,m,C,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Qh(t,e,n,r,s,i)}function Qh(t,e,n,r,i,s){_E(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&fg(e,n,!1),Vn(t,e,s);r=e.stateNode,yS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Zi(e,t.child,null,s),e.child=Zi(e,null,l,s)):st(t,e,l,s),e.memoizedState=r.state,i&&fg(e,n,!0),e.child}function vE(t){var e=t.stateNode;e.pendingContext?dg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&dg(t,e.context,!1),cf(t,e.containerInfo)}function Pg(t,e,n,r,i){return Ji(),rf(i),e.flags|=256,st(t,e,n,r),e.child}var Yh={dehydrated:null,treeContext:null,retryLane:0};function Xh(t){return{baseLanes:t,cachePool:null,transitions:null}}function EE(t,e,n){var r=e.pendingProps,i=ye.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(ye,i&1),t===null)return $h(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Pu(o,r,0,null),t=Xr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Xh(n),e.memoizedState=Yh,t):_f(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return _S(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=mr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=mr(l,s):(s=Xr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Xh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Yh,r}return s=t.child,t=s.sibling,r=mr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function _f(t,e){return e=Pu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ba(t,e,n,r){return r!==null&&rf(r),Zi(e,t.child,null,n),t=_f(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function _S(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Kc(Error(U(422))),Ba(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Pu({mode:"visible",children:r.children},i,0,null),s=Xr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Zi(e,t.child,null,o),e.child.memoizedState=Xh(o),e.memoizedState=Yh,s);if(!(e.mode&1))return Ba(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=Kc(s,r,void 0),Ba(t,e,o,r)}if(l=(o&t.childLanes)!==0,dt||l){if(r=je,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Dn(t,i),Wt(r,t,i,-1))}return Sf(),r=Kc(Error(U(421))),Ba(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=xS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,vt=hr(i.nextSibling),wt=e,ge=!0,jt=null,t!==null&&(At[Ct++]=Tn,At[Ct++]=In,At[Ct++]=ti,Tn=t.id,In=t.overflow,ti=e),e=_f(e,r.children),e.flags|=4096,e)}function Ng(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Hh(t.return,e,n)}function Qc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function wE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(st(t,e,r.children,n),r=ye.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ng(t,n,e);else if(t.tag===19)Ng(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(ye,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&jl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Qc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&jl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Qc(e,!0,n,null,s);break;case"together":Qc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ll(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Vn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ri|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function vS(t,e,n){switch(e.tag){case 3:vE(e),Ji();break;case 5:Gv(e);break;case 1:pt(e.type)&&Ol(e);break;case 4:cf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(Ml,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(ye,ye.current&1),e.flags|=128,null):n&e.child.childLanes?EE(t,e,n):(ce(ye,ye.current&1),t=Vn(t,e,n),t!==null?t.sibling:null);ce(ye,ye.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return wE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(ye,ye.current),r)break;return null;case 22:case 23:return e.lanes=0,yE(t,e,n)}return Vn(t,e,n)}var TE,Jh,IE,SE;TE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Jh=function(){};IE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Kr(rn.current);var s=null;switch(n){case"input":i=Eh(t,i),r=Eh(t,r),s=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),s=[];break;case"textarea":i=Ih(t,i),r=Ih(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Dl)}Rh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(To.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(To.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&de("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};SE=function(t,e,n,r){n!==r&&(e.flags|=4)};function qs(t,e){if(!ge)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ye(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function ES(t,e,n){var r=e.pendingProps;switch(nf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(e),null;case 1:return pt(e.type)&&Vl(),Ye(e),null;case 3:return r=e.stateNode,es(),pe(ft),pe(tt),df(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ja(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jt!==null&&(od(jt),jt=null))),Jh(t,e),Ye(e),null;case 5:hf(e);var i=Kr(Oo.current);if(n=e.type,t!==null&&e.stateNode!=null)IE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return Ye(e),null}if(t=Kr(rn.current),ja(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[tn]=e,r[Do]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<Js.length;i++)de(Js[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":Um(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":zm(r,s),de("invalid",r)}Rh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ua(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ua(r.textContent,l,t),i=["children",""+l]):To.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":xa(r),jm(r,s,!0);break;case"textarea":xa(r),Bm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Dl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=J_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[tn]=e,t[Do]=r,TE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ah(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<Js.length;i++)de(Js[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":Um(t,r),i=Eh(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),de("invalid",t);break;case"textarea":zm(t,r),i=Ih(t,r),de("invalid",t);break;default:i=r}Rh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?tv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Z_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Io(t,u):typeof u=="number"&&Io(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(To.hasOwnProperty(s)?u!=null&&s==="onScroll"&&de("scroll",t):u!=null&&zd(t,s,u,o))}switch(n){case"input":xa(t),jm(t,r,!1);break;case"textarea":xa(t),Bm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Er(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ji(t,!!r.multiple,s,!1):r.defaultValue!=null&&ji(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Dl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ye(e),null;case 6:if(t&&e.stateNode!=null)SE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Kr(Oo.current),Kr(rn.current),ja(e)){if(r=e.stateNode,n=e.memoizedProps,r[tn]=e,(s=r.nodeValue!==n)&&(t=wt,t!==null))switch(t.tag){case 3:Ua(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ua(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tn]=e,e.stateNode=r}return Ye(e),null;case 13:if(pe(ye),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ge&&vt!==null&&e.mode&1&&!(e.flags&128))Bv(),Ji(),e.flags|=98560,s=!1;else if(s=ja(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[tn]=e}else Ji(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ye(e),s=!1}else jt!==null&&(od(jt),jt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ye.current&1?Oe===0&&(Oe=3):Sf())),e.updateQueue!==null&&(e.flags|=4),Ye(e),null);case 4:return es(),Jh(t,e),t===null&&No(e.stateNode.containerInfo),Ye(e),null;case 10:return af(e.type._context),Ye(e),null;case 17:return pt(e.type)&&Vl(),Ye(e),null;case 19:if(pe(ye),s=e.memoizedState,s===null)return Ye(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)qs(s,!1);else{if(Oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=jl(t),o!==null){for(e.flags|=128,qs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(ye,ye.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ce()>ns&&(e.flags|=128,r=!0,qs(s,!1),e.lanes=4194304)}else{if(!r)if(t=jl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),qs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ge)return Ye(e),null}else 2*Ce()-s.renderingStartTime>ns&&n!==1073741824&&(e.flags|=128,r=!0,qs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ce(),e.sibling=null,n=ye.current,ce(ye,r?n&1|2:n&1),e):(Ye(e),null);case 22:case 23:return If(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?yt&1073741824&&(Ye(e),e.subtreeFlags&6&&(e.flags|=8192)):Ye(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function wS(t,e){switch(nf(e),e.tag){case 1:return pt(e.type)&&Vl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return es(),pe(ft),pe(tt),df(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hf(e),null;case 13:if(pe(ye),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));Ji()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(ye),null;case 4:return es(),null;case 10:return af(e.type._context),null;case 22:case 23:return If(),null;case 24:return null;default:return null}}var $a=!1,Ze=!1,TS=typeof WeakSet=="function"?WeakSet:Set,W=null;function Mi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(t,e,r)}else n.current=null}function Zh(t,e,n){try{n()}catch(r){Ie(t,e,r)}}var xg=!1;function IS(t,e){if(bh=Pl,t=Pv(),ef(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var v;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(v=p.firstChild)!==null;)m=p,p=v;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(v=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=v}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mh={focusedElem:t,selectionRange:n},Pl=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var k=C.memoizedProps,P=C.memoizedState,E=e.stateNode,_=E.getSnapshotBeforeUpdate(e.elementType===e.type?k:Ft(e.type,k),P);E.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(V){Ie(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return C=xg,xg=!1,C}function fo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Zh(e,n,s)}i=i.next}while(i!==r)}}function Cu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ed(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function RE(t){var e=t.alternate;e!==null&&(t.alternate=null,RE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[tn],delete e[Do],delete e[jh],delete e[sS],delete e[oS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function AE(t){return t.tag===5||t.tag===3||t.tag===4}function Dg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||AE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function td(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Dl));else if(r!==4&&(t=t.child,t!==null))for(td(t,e,n),t=t.sibling;t!==null;)td(t,e,n),t=t.sibling}function nd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(nd(t,e,n),t=t.sibling;t!==null;)nd(t,e,n),t=t.sibling}var Be=null,Ut=!1;function Kn(t,e,n){for(n=n.child;n!==null;)CE(t,e,n),n=n.sibling}function CE(t,e,n){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(vu,n)}catch{}switch(n.tag){case 5:Ze||Mi(n,e);case 6:var r=Be,i=Ut;Be=null,Kn(t,e,n),Be=r,Ut=i,Be!==null&&(Ut?(t=Be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(Ut?(t=Be,n=n.stateNode,t.nodeType===8?Bc(t.parentNode,n):t.nodeType===1&&Bc(t,n),Co(t)):Bc(Be,n.stateNode));break;case 4:r=Be,i=Ut,Be=n.stateNode.containerInfo,Ut=!0,Kn(t,e,n),Be=r,Ut=i;break;case 0:case 11:case 14:case 15:if(!Ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Zh(n,e,o),i=i.next}while(i!==r)}Kn(t,e,n);break;case 1:if(!Ze&&(Mi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ie(n,e,l)}Kn(t,e,n);break;case 21:Kn(t,e,n);break;case 22:n.mode&1?(Ze=(r=Ze)||n.memoizedState!==null,Kn(t,e,n),Ze=r):Kn(t,e,n);break;default:Kn(t,e,n)}}function Vg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new TS),e.forEach(function(r){var i=DS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Mt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Be=l.stateNode,Ut=!1;break e;case 3:Be=l.stateNode.containerInfo,Ut=!0;break e;case 4:Be=l.stateNode.containerInfo,Ut=!0;break e}l=l.return}if(Be===null)throw Error(U(160));CE(s,o,i),Be=null,Ut=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ie(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)kE(e,t),e=e.sibling}function kE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Mt(e,t),Jt(t),r&4){try{fo(3,t,t.return),Cu(3,t)}catch(k){Ie(t,t.return,k)}try{fo(5,t,t.return)}catch(k){Ie(t,t.return,k)}}break;case 1:Mt(e,t),Jt(t),r&512&&n!==null&&Mi(n,n.return);break;case 5:if(Mt(e,t),Jt(t),r&512&&n!==null&&Mi(n,n.return),t.flags&32){var i=t.stateNode;try{Io(i,"")}catch(k){Ie(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Y_(i,s),Ah(l,o);var c=Ah(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?tv(i,p):d==="dangerouslySetInnerHTML"?Z_(i,p):d==="children"?Io(i,p):zd(i,d,p,c)}switch(l){case"input":wh(i,s);break;case"textarea":X_(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?ji(i,!!s.multiple,v,!1):m!==!!s.multiple&&(s.defaultValue!=null?ji(i,!!s.multiple,s.defaultValue,!0):ji(i,!!s.multiple,s.multiple?[]:"",!1))}i[Do]=s}catch(k){Ie(t,t.return,k)}}break;case 6:if(Mt(e,t),Jt(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){Ie(t,t.return,k)}}break;case 3:if(Mt(e,t),Jt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Co(e.containerInfo)}catch(k){Ie(t,t.return,k)}break;case 4:Mt(e,t),Jt(t);break;case 13:Mt(e,t),Jt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(wf=Ce())),r&4&&Vg(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ze=(c=Ze)||d,Mt(e,t),Ze=c):Mt(e,t),Jt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(W=t,d=t.child;d!==null;){for(p=W=d;W!==null;){switch(m=W,v=m.child,m.tag){case 0:case 11:case 14:case 15:fo(4,m,m.return);break;case 1:Mi(m,m.return);var C=m.stateNode;if(typeof C.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(k){Ie(r,n,k)}}break;case 5:Mi(m,m.return);break;case 22:if(m.memoizedState!==null){Lg(p);continue}}v!==null?(v.return=m,W=v):Lg(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=ev("display",o))}catch(k){Ie(t,t.return,k)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(k){Ie(t,t.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Mt(e,t),Jt(t),r&4&&Vg(t);break;case 21:break;default:Mt(e,t),Jt(t)}}function Jt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(AE(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Io(i,""),r.flags&=-33);var s=Dg(t);nd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Dg(t);td(t,l,o);break;default:throw Error(U(161))}}catch(u){Ie(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function SS(t,e,n){W=t,PE(t)}function PE(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||$a;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Ze;l=$a;var c=Ze;if($a=o,(Ze=u)&&!c)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?bg(i):u!==null?(u.return=o,W=u):bg(i);for(;s!==null;)W=s,PE(s),s=s.sibling;W=i,$a=l,Ze=c}Og(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):Og(t)}}function Og(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ze||Cu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ze)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ft(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_g(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_g(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Co(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}Ze||e.flags&512&&ed(e)}catch(m){Ie(e,e.return,m)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function Lg(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function bg(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Cu(4,e)}catch(u){Ie(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ie(e,i,u)}}var s=e.return;try{ed(e)}catch(u){Ie(e,s,u)}break;case 5:var o=e.return;try{ed(e)}catch(u){Ie(e,o,u)}}}catch(u){Ie(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var RS=Math.ceil,$l=Un.ReactCurrentDispatcher,vf=Un.ReactCurrentOwner,Nt=Un.ReactCurrentBatchConfig,se=0,je=null,Pe=null,We=0,yt=0,Fi=Nr(0),Oe=0,Fo=null,ri=0,ku=0,Ef=0,po=null,ct=null,wf=0,ns=1/0,En=null,Hl=!1,rd=null,fr=null,Ha=!1,or=null,Wl=0,mo=0,id=null,ul=-1,cl=0;function ot(){return se&6?Ce():ul!==-1?ul:ul=Ce()}function pr(t){return t.mode&1?se&2&&We!==0?We&-We:lS.transition!==null?(cl===0&&(cl=fv()),cl):(t=ae,t!==0||(t=window.event,t=t===void 0?16:Ev(t.type)),t):1}function Wt(t,e,n,r){if(50<mo)throw mo=0,id=null,Error(U(185));Xo(t,n,r),(!(se&2)||t!==je)&&(t===je&&(!(se&2)&&(ku|=n),Oe===4&&Zn(t,We)),mt(t,r),n===1&&se===0&&!(e.mode&1)&&(ns=Ce()+500,Su&&xr()))}function mt(t,e){var n=t.callbackNode;l1(t,e);var r=kl(t,t===je?We:0);if(r===0)n!==null&&Wm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Wm(n),e===1)t.tag===0?aS(Mg.bind(null,t)):Uv(Mg.bind(null,t)),rS(function(){!(se&6)&&xr()}),n=null;else{switch(pv(r)){case 1:n=qd;break;case 4:n=hv;break;case 16:n=Cl;break;case 536870912:n=dv;break;default:n=Cl}n=ME(n,NE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function NE(t,e){if(ul=-1,cl=0,se&6)throw Error(U(327));var n=t.callbackNode;if(Wi()&&t.callbackNode!==n)return null;var r=kl(t,t===je?We:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ql(t,r);else{e=r;var i=se;se|=2;var s=DE();(je!==t||We!==e)&&(En=null,ns=Ce()+500,Yr(t,e));do try{kS();break}catch(l){xE(t,l)}while(!0);of(),$l.current=s,se=i,Pe!==null?e=0:(je=null,We=0,e=Oe)}if(e!==0){if(e===2&&(i=xh(t),i!==0&&(r=i,e=sd(t,i))),e===1)throw n=Fo,Yr(t,0),Zn(t,r),mt(t,Ce()),n;if(e===6)Zn(t,r);else{if(i=t.current.alternate,!(r&30)&&!AS(i)&&(e=ql(t,r),e===2&&(s=xh(t),s!==0&&(r=s,e=sd(t,s))),e===1))throw n=Fo,Yr(t,0),Zn(t,r),mt(t,Ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Hr(t,ct,En);break;case 3:if(Zn(t,r),(r&130023424)===r&&(e=wf+500-Ce(),10<e)){if(kl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ot(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Uh(Hr.bind(null,t,ct,En),e);break}Hr(t,ct,En);break;case 4:if(Zn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ht(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*RS(r/1960))-r,10<r){t.timeoutHandle=Uh(Hr.bind(null,t,ct,En),r);break}Hr(t,ct,En);break;case 5:Hr(t,ct,En);break;default:throw Error(U(329))}}}return mt(t,Ce()),t.callbackNode===n?NE.bind(null,t):null}function sd(t,e){var n=po;return t.current.memoizedState.isDehydrated&&(Yr(t,e).flags|=256),t=ql(t,e),t!==2&&(e=ct,ct=n,e!==null&&od(e)),t}function od(t){ct===null?ct=t:ct.push.apply(ct,t)}function AS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!qt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zn(t,e){for(e&=~Ef,e&=~ku,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ht(e),r=1<<n;t[n]=-1,e&=~r}}function Mg(t){if(se&6)throw Error(U(327));Wi();var e=kl(t,0);if(!(e&1))return mt(t,Ce()),null;var n=ql(t,e);if(t.tag!==0&&n===2){var r=xh(t);r!==0&&(e=r,n=sd(t,r))}if(n===1)throw n=Fo,Yr(t,0),Zn(t,e),mt(t,Ce()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Hr(t,ct,En),mt(t,Ce()),null}function Tf(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(ns=Ce()+500,Su&&xr())}}function ii(t){or!==null&&or.tag===0&&!(se&6)&&Wi();var e=se;se|=1;var n=Nt.transition,r=ae;try{if(Nt.transition=null,ae=1,t)return t()}finally{ae=r,Nt.transition=n,se=e,!(se&6)&&xr()}}function If(){yt=Fi.current,pe(Fi)}function Yr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,nS(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(nf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vl();break;case 3:es(),pe(ft),pe(tt),df();break;case 5:hf(r);break;case 4:es();break;case 13:pe(ye);break;case 19:pe(ye);break;case 10:af(r.type._context);break;case 22:case 23:If()}n=n.return}if(je=t,Pe=t=mr(t.current,null),We=yt=e,Oe=0,Fo=null,Ef=ku=ri=0,ct=po=null,Gr!==null){for(e=0;e<Gr.length;e++)if(n=Gr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Gr=null}return t}function xE(t,e){do{var n=Pe;try{if(of(),ol.current=Bl,zl){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}zl=!1}if(ni=0,Ue=Ve=_e=null,ho=!1,Lo=0,vf.current=null,n===null||n.return===null){Oe=1,Fo=e,Pe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=We,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Sg(o);if(v!==null){v.flags&=-257,Rg(v,o,l,s,e),v.mode&1&&Ig(s,c,e),e=v,u=c;var C=e.updateQueue;if(C===null){var k=new Set;k.add(u),e.updateQueue=k}else C.add(u);break e}else{if(!(e&1)){Ig(s,c,e),Sf();break e}u=Error(U(426))}}else if(ge&&l.mode&1){var P=Sg(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Rg(P,o,l,s,e),rf(ts(u,l));break e}}s=u=ts(u,l),Oe!==4&&(Oe=2),po===null?po=[s]:po.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=pE(s,u,e);yg(s,E);break e;case 1:l=u;var _=s.type,T=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(fr===null||!fr.has(T)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=mE(s,l,e);yg(s,V);break e}}s=s.return}while(s!==null)}OE(n)}catch(F){e=F,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function DE(){var t=$l.current;return $l.current=Bl,t===null?Bl:t}function Sf(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),je===null||!(ri&268435455)&&!(ku&268435455)||Zn(je,We)}function ql(t,e){var n=se;se|=2;var r=DE();(je!==t||We!==e)&&(En=null,Yr(t,e));do try{CS();break}catch(i){xE(t,i)}while(!0);if(of(),se=n,$l.current=r,Pe!==null)throw Error(U(261));return je=null,We=0,Oe}function CS(){for(;Pe!==null;)VE(Pe)}function kS(){for(;Pe!==null&&!Z0();)VE(Pe)}function VE(t){var e=bE(t.alternate,t,yt);t.memoizedProps=t.pendingProps,e===null?OE(t):Pe=e,vf.current=null}function OE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=wS(n,e),n!==null){n.flags&=32767,Pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Oe=6,Pe=null;return}}else if(n=ES(n,e,yt),n!==null){Pe=n;return}if(e=e.sibling,e!==null){Pe=e;return}Pe=e=t}while(e!==null);Oe===0&&(Oe=5)}function Hr(t,e,n){var r=ae,i=Nt.transition;try{Nt.transition=null,ae=1,PS(t,e,n,r)}finally{Nt.transition=i,ae=r}return null}function PS(t,e,n,r){do Wi();while(or!==null);if(se&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(u1(t,s),t===je&&(Pe=je=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ha||(Ha=!0,ME(Cl,function(){return Wi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Nt.transition,Nt.transition=null;var o=ae;ae=1;var l=se;se|=4,vf.current=null,IS(t,n),kE(n,t),Q1(Mh),Pl=!!bh,Mh=bh=null,t.current=n,SS(n),e1(),se=l,ae=o,Nt.transition=s}else t.current=n;if(Ha&&(Ha=!1,or=t,Wl=i),s=t.pendingLanes,s===0&&(fr=null),r1(n.stateNode),mt(t,Ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Hl)throw Hl=!1,t=rd,rd=null,t;return Wl&1&&t.tag!==0&&Wi(),s=t.pendingLanes,s&1?t===id?mo++:(mo=0,id=t):mo=0,xr(),null}function Wi(){if(or!==null){var t=pv(Wl),e=Nt.transition,n=ae;try{if(Nt.transition=null,ae=16>t?16:t,or===null)var r=!1;else{if(t=or,or=null,Wl=0,se&6)throw Error(U(331));var i=se;for(se|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(W=c;W!==null;){var d=W;switch(d.tag){case 0:case 11:case 15:fo(8,d,s)}var p=d.child;if(p!==null)p.return=d,W=p;else for(;W!==null;){d=W;var m=d.sibling,v=d.return;if(RE(d),d===c){W=null;break}if(m!==null){m.return=v,W=m;break}W=v}}}var C=s.alternate;if(C!==null){var k=C.child;if(k!==null){C.child=null;do{var P=k.sibling;k.sibling=null,k=P}while(k!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:fo(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,W=E;break e}W=s.return}}var _=t.current;for(W=_;W!==null;){o=W;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,W=T;else e:for(o=_;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Cu(9,l)}}catch(F){Ie(l,l.return,F)}if(l===o){W=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,W=V;break e}W=l.return}}if(se=i,xr(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(vu,t)}catch{}r=!0}return r}finally{ae=n,Nt.transition=e}}return!1}function Fg(t,e,n){e=ts(n,e),e=pE(t,e,1),t=dr(t,e,1),e=ot(),t!==null&&(Xo(t,1,e),mt(t,e))}function Ie(t,e,n){if(t.tag===3)Fg(t,t,n);else for(;e!==null;){if(e.tag===3){Fg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fr===null||!fr.has(r))){t=ts(n,t),t=mE(e,t,1),e=dr(e,t,1),t=ot(),e!==null&&(Xo(e,1,t),mt(e,t));break}}e=e.return}}function NS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ot(),t.pingedLanes|=t.suspendedLanes&n,je===t&&(We&n)===n&&(Oe===4||Oe===3&&(We&130023424)===We&&500>Ce()-wf?Yr(t,0):Ef|=n),mt(t,e)}function LE(t,e){e===0&&(t.mode&1?(e=Oa,Oa<<=1,!(Oa&130023424)&&(Oa=4194304)):e=1);var n=ot();t=Dn(t,e),t!==null&&(Xo(t,e,n),mt(t,n))}function xS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),LE(t,n)}function DS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),LE(t,n)}var bE;bE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ft.current)dt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return dt=!1,vS(t,e,n);dt=!!(t.flags&131072)}else dt=!1,ge&&e.flags&1048576&&jv(e,bl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ll(t,e),t=e.pendingProps;var i=Xi(e,tt.current);Hi(e,n),i=pf(null,e,r,t,i,n);var s=mf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pt(r)?(s=!0,Ol(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,uf(e),i.updater=Au,e.stateNode=i,i._reactInternals=e,qh(e,r,t,n),e=Qh(null,e,r,!0,s,n)):(e.tag=0,ge&&s&&tf(e),st(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ll(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=OS(r),t=Ft(r,t),i){case 0:e=Kh(null,e,r,t,n);break e;case 1:e=kg(null,e,r,t,n);break e;case 11:e=Ag(null,e,r,t,n);break e;case 14:e=Cg(null,e,r,Ft(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ft(r,i),Kh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ft(r,i),kg(t,e,r,i,n);case 3:e:{if(vE(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,qv(t,e),Ul(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ts(Error(U(423)),e),e=Pg(t,e,r,n,i);break e}else if(r!==i){i=ts(Error(U(424)),e),e=Pg(t,e,r,n,i);break e}else for(vt=hr(e.stateNode.containerInfo.firstChild),wt=e,ge=!0,jt=null,n=Hv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ji(),r===i){e=Vn(t,e,n);break e}st(t,e,r,n)}e=e.child}return e;case 5:return Gv(e),t===null&&$h(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Fh(r,i)?o=null:s!==null&&Fh(r,s)&&(e.flags|=32),_E(t,e),st(t,e,o,n),e.child;case 6:return t===null&&$h(e),null;case 13:return EE(t,e,n);case 4:return cf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Zi(e,null,r,n):st(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ft(r,i),Ag(t,e,r,i,n);case 7:return st(t,e,e.pendingProps,n),e.child;case 8:return st(t,e,e.pendingProps.children,n),e.child;case 12:return st(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(Ml,r._currentValue),r._currentValue=o,s!==null)if(qt(s.value,o)){if(s.children===i.children&&!ft.current){e=Vn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=An(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Hh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Hh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}st(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Hi(e,n),i=Dt(i),r=r(i),e.flags|=1,st(t,e,r,n),e.child;case 14:return r=e.type,i=Ft(r,e.pendingProps),i=Ft(r.type,i),Cg(t,e,r,i,n);case 15:return gE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ft(r,i),ll(t,e),e.tag=1,pt(r)?(t=!0,Ol(e)):t=!1,Hi(e,n),fE(e,r,i),qh(e,r,i,n),Qh(null,e,r,!0,t,n);case 19:return wE(t,e,n);case 22:return yE(t,e,n)}throw Error(U(156,e.tag))};function ME(t,e){return cv(t,e)}function VS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(t,e,n,r){return new VS(t,e,n,r)}function Rf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function OS(t){if(typeof t=="function")return Rf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$d)return 11;if(t===Hd)return 14}return 2}function mr(t,e){var n=t.alternate;return n===null?(n=Pt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function hl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Rf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ki:return Xr(n.children,i,s,e);case Bd:o=8,i|=8;break;case gh:return t=Pt(12,n,e,i|2),t.elementType=gh,t.lanes=s,t;case yh:return t=Pt(13,n,e,i),t.elementType=yh,t.lanes=s,t;case _h:return t=Pt(19,n,e,i),t.elementType=_h,t.lanes=s,t;case G_:return Pu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case W_:o=10;break e;case q_:o=9;break e;case $d:o=11;break e;case Hd:o=14;break e;case Yn:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Pt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Xr(t,e,n,r){return t=Pt(7,t,r,e),t.lanes=n,t}function Pu(t,e,n,r){return t=Pt(22,t,r,e),t.elementType=G_,t.lanes=n,t.stateNode={isHidden:!1},t}function Yc(t,e,n){return t=Pt(6,t,null,e),t.lanes=n,t}function Xc(t,e,n){return e=Pt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function LS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xc(0),this.expirationTimes=xc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Af(t,e,n,r,i,s,o,l,u){return t=new LS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Pt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},uf(s),t}function bS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ci,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function FE(t){if(!t)return wr;t=t._reactInternals;e:{if(fi(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(pt(n))return Fv(t,n,e)}return e}function UE(t,e,n,r,i,s,o,l,u){return t=Af(n,r,!0,t,i,s,o,l,u),t.context=FE(null),n=t.current,r=ot(),i=pr(n),s=An(r,i),s.callback=e??null,dr(n,s,i),t.current.lanes=i,Xo(t,i,r),mt(t,r),t}function Nu(t,e,n,r){var i=e.current,s=ot(),o=pr(i);return n=FE(n),e.context===null?e.context=n:e.pendingContext=n,e=An(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=dr(i,e,o),t!==null&&(Wt(t,i,o,s),sl(t,i,o)),o}function Gl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ug(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Cf(t,e){Ug(t,e),(t=t.alternate)&&Ug(t,e)}function MS(){return null}var jE=typeof reportError=="function"?reportError:function(t){console.error(t)};function kf(t){this._internalRoot=t}xu.prototype.render=kf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Nu(t,e,null,null)};xu.prototype.unmount=kf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ii(function(){Nu(null,t,null,null)}),e[xn]=null}};function xu(t){this._internalRoot=t}xu.prototype.unstable_scheduleHydration=function(t){if(t){var e=yv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Jn.length&&e!==0&&e<Jn[n].priority;n++);Jn.splice(n,0,t),n===0&&vv(t)}};function Pf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Du(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function jg(){}function FS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Gl(o);s.call(c)}}var o=UE(e,r,t,0,null,!1,!1,"",jg);return t._reactRootContainer=o,t[xn]=o.current,No(t.nodeType===8?t.parentNode:t),ii(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Gl(u);l.call(c)}}var u=Af(t,0,!1,null,null,!1,!1,"",jg);return t._reactRootContainer=u,t[xn]=u.current,No(t.nodeType===8?t.parentNode:t),ii(function(){Nu(e,u,n,r)}),u}function Vu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Gl(o);l.call(u)}}Nu(e,o,t,i)}else o=FS(n,e,t,i,r);return Gl(o)}mv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Xs(e.pendingLanes);n!==0&&(Gd(e,n|1),mt(e,Ce()),!(se&6)&&(ns=Ce()+500,xr()))}break;case 13:ii(function(){var r=Dn(t,1);if(r!==null){var i=ot();Wt(r,t,1,i)}}),Cf(t,1)}};Kd=function(t){if(t.tag===13){var e=Dn(t,134217728);if(e!==null){var n=ot();Wt(e,t,134217728,n)}Cf(t,134217728)}};gv=function(t){if(t.tag===13){var e=pr(t),n=Dn(t,e);if(n!==null){var r=ot();Wt(n,t,e,r)}Cf(t,e)}};yv=function(){return ae};_v=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};kh=function(t,e,n){switch(e){case"input":if(wh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Iu(r);if(!i)throw Error(U(90));Q_(r),wh(r,i)}}}break;case"textarea":X_(t,n);break;case"select":e=n.value,e!=null&&ji(t,!!n.multiple,e,!1)}};iv=Tf;sv=ii;var US={usingClientEntryPoint:!1,Events:[Zo,Di,Iu,nv,rv,Tf]},Gs={findFiberByHostInstance:qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jS={bundleType:Gs.bundleType,version:Gs.version,rendererPackageName:Gs.rendererPackageName,rendererConfig:Gs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Un.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=lv(t),t===null?null:t.stateNode},findFiberByHostInstance:Gs.findFiberByHostInstance||MS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wa.isDisabled&&Wa.supportsFiber)try{vu=Wa.inject(jS),nn=Wa}catch{}}It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=US;It.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pf(e))throw Error(U(200));return bS(t,e,null,n)};It.createRoot=function(t,e){if(!Pf(t))throw Error(U(299));var n=!1,r="",i=jE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Af(t,1,!1,null,null,n,!1,r,i),t[xn]=e.current,No(t.nodeType===8?t.parentNode:t),new kf(e)};It.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=lv(e),t=t===null?null:t.stateNode,t};It.flushSync=function(t){return ii(t)};It.hydrate=function(t,e,n){if(!Du(e))throw Error(U(200));return Vu(null,t,e,!0,n)};It.hydrateRoot=function(t,e,n){if(!Pf(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=jE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=UE(e,null,t,1,n??null,i,!1,s,o),t[xn]=e.current,No(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new xu(e)};It.render=function(t,e,n){if(!Du(e))throw Error(U(200));return Vu(null,t,e,!1,n)};It.unmountComponentAtNode=function(t){if(!Du(t))throw Error(U(40));return t._reactRootContainer?(ii(function(){Vu(null,null,t,!1,function(){t._reactRootContainer=null,t[xn]=null})}),!0):!1};It.unstable_batchedUpdates=Tf;It.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Du(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return Vu(t,e,n,!1,r)};It.version="18.3.1-next-f1338f8080-20240426";function zE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zE)}catch(t){console.error(t)}}zE(),z_.exports=It;var zS=z_.exports,zg=zS;ph.createRoot=zg.createRoot,ph.hydrateRoot=zg.hydrateRoot;/**
 * react-router v7.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Bg="popstate";function BS(t={}){function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return ad("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Uo(i)}return HS(e,n,null,t)}function ve(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Gt(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function $S(){return Math.random().toString(36).substring(2,10)}function $g(t,e){return{usr:t.state,key:t.key,idx:e}}function ad(t,e,n=null,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?ps(e):e,state:n,key:e&&e.key||r||$S()}}function Uo({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function ps(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function HS(t,e,n,r={}){let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l="POP",u=null,c=d();c==null&&(c=0,o.replaceState({...o.state,idx:c},""));function d(){return(o.state||{idx:null}).idx}function p(){l="POP";let P=d(),E=P==null?null:P-c;c=P,u&&u({action:l,location:k.location,delta:E})}function m(P,E){l="PUSH";let _=ad(k.location,P,E);c=d()+1;let T=$g(_,c),V=k.createHref(_);try{o.pushState(T,"",V)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(V)}s&&u&&u({action:l,location:k.location,delta:1})}function v(P,E){l="REPLACE";let _=ad(k.location,P,E);c=d();let T=$g(_,c),V=k.createHref(_);o.replaceState(T,"",V),s&&u&&u({action:l,location:k.location,delta:0})}function C(P){return WS(P)}let k={get action(){return l},get location(){return t(i,o)},listen(P){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Bg,p),u=P,()=>{i.removeEventListener(Bg,p),u=null}},createHref(P){return e(i,P)},createURL:C,encodeLocation(P){let E=C(P);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:m,replace:v,go(P){return o.go(P)}};return k}function WS(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),ve(n,"No window.location.(origin|href) available to create URL");let r=typeof t=="string"?t:Uo(t);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function BE(t,e,n="/"){return qS(t,e,n,!1)}function qS(t,e,n,r){let i=typeof e=="string"?ps(e):e,s=On(i.pathname||"/",n);if(s==null)return null;let o=$E(t);GS(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=iR(s);l=nR(o[u],c,r)}return l}function $E(t,e=[],n=[],r="",i=!1){let s=(o,l,u=i,c)=>{let d={relativePath:c===void 0?o.path||"":c,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};if(d.relativePath.startsWith("/")){if(!d.relativePath.startsWith(r)&&u)return;ve(d.relativePath.startsWith(r),`Absolute route path "${d.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(r.length)}let p=Cn([r,d.relativePath]),m=n.concat(d);o.children&&o.children.length>0&&(ve(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),$E(o.children,e,m,p,u)),!(o.path==null&&!o.index)&&e.push({path:p,score:eR(p,o.index),routesMeta:m})};return t.forEach((o,l)=>{var u;if(o.path===""||!((u=o.path)!=null&&u.includes("?")))s(o,l);else for(let c of HE(o.path))s(o,l,!0,c)}),e}function HE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=HE(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function GS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:tR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var KS=/^:[\w-]+$/,QS=3,YS=2,XS=1,JS=10,ZS=-2,Hg=t=>t==="*";function eR(t,e){let n=t.split("/"),r=n.length;return n.some(Hg)&&(r+=ZS),e&&(r+=YS),n.filter(i=>!Hg(i)).reduce((i,s)=>i+(KS.test(s)?QS:s===""?XS:JS),r)}function tR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function nR(t,e,n=!1){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=Kl({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=Kl({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:Cn([s,p.pathname]),pathnameBase:lR(Cn([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=Cn([s,p.pathnameBase]))}return o}function Kl(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=rR(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,{paramName:d,isOptional:p},m)=>{if(d==="*"){let C=l[m]||"";o=s.slice(0,s.length-C.length).replace(/(.)\/+$/,"$1")}const v=l[m];return p&&!v?c[d]=void 0:c[d]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function rR(t,e=!1,n=!0){Gt(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function iR(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Gt(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function On(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}var WE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,sR=t=>WE.test(t);function oR(t,e="/"){let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ps(t):t,s;if(n)if(sR(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Gt(!1,`Pathnames cannot have embedded double slashes - normalizing ${o} -> ${n}`)}n.startsWith("/")?s=Wg(n.substring(1),"/"):s=Wg(n,e)}else s=e;return{pathname:s,search:uR(r),hash:cR(i)}}function Wg(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Jc(t,e,n,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function aR(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function qE(t){let e=aR(t);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function GE(t,e,n,r=!1){let i;typeof t=="string"?i=ps(t):(i={...t},ve(!i.pathname||!i.pathname.includes("?"),Jc("?","pathname","search",i)),ve(!i.pathname||!i.pathname.includes("#"),Jc("#","pathname","hash",i)),ve(!i.search||!i.search.includes("#"),Jc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=oR(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}var Cn=t=>t.join("/").replace(/\/\/+/g,"/"),lR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),uR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,cR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,hR=class{constructor(t,e,n,r=!1){this.status=t,this.statusText=e||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function dR(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function fR(t){return t.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var KE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function QE(t,e){let n=t;if(typeof n!="string"||!WE.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(KE)try{let s=new URL(window.location.href),o=n.startsWith("//")?new URL(s.protocol+n):new URL(n),l=On(o.pathname,e);o.origin===s.origin&&l!=null?n=l+o.search+o.hash:i=!0}catch{Gt(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var YE=["POST","PUT","PATCH","DELETE"];new Set(YE);var pR=["GET",...YE];new Set(pR);var ms=O.createContext(null);ms.displayName="DataRouter";var Ou=O.createContext(null);Ou.displayName="DataRouterState";var mR=O.createContext(!1),XE=O.createContext({isTransitioning:!1});XE.displayName="ViewTransition";var gR=O.createContext(new Map);gR.displayName="Fetchers";var yR=O.createContext(null);yR.displayName="Await";var Ot=O.createContext(null);Ot.displayName="Navigation";var ta=O.createContext(null);ta.displayName="Location";var mn=O.createContext({outlet:null,matches:[],isDataRoute:!1});mn.displayName="Route";var Nf=O.createContext(null);Nf.displayName="RouteError";var JE="REACT_ROUTER_ERROR",_R="REDIRECT",vR="ROUTE_ERROR_RESPONSE";function ER(t){if(t.startsWith(`${JE}:${_R}:{`))try{let e=JSON.parse(t.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function wR(t){if(t.startsWith(`${JE}:${vR}:{`))try{let e=JSON.parse(t.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new hR(e.status,e.statusText,e.data)}catch{}}function TR(t,{relative:e}={}){ve(na(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=O.useContext(Ot),{hash:i,pathname:s,search:o}=ra(t,{relative:e}),l=s;return n!=="/"&&(l=s==="/"?n:Cn([n,s])),r.createHref({pathname:l,search:o,hash:i})}function na(){return O.useContext(ta)!=null}function pi(){return ve(na(),"useLocation() may be used only in the context of a <Router> component."),O.useContext(ta).location}var ZE="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ew(t){O.useContext(Ot).static||O.useLayoutEffect(t)}function tw(){let{isDataRoute:t}=O.useContext(mn);return t?bR():IR()}function IR(){ve(na(),"useNavigate() may be used only in the context of a <Router> component.");let t=O.useContext(ms),{basename:e,navigator:n}=O.useContext(Ot),{matches:r}=O.useContext(mn),{pathname:i}=pi(),s=JSON.stringify(qE(r)),o=O.useRef(!1);return ew(()=>{o.current=!0}),O.useCallback((u,c={})=>{if(Gt(o.current,ZE),!o.current)return;if(typeof u=="number"){n.go(u);return}let d=GE(u,JSON.parse(s),i,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Cn([e,d.pathname])),(c.replace?n.replace:n.push)(d,c.state,c)},[e,n,s,i,t])}O.createContext(null);function SR(){let{matches:t}=O.useContext(mn),e=t[t.length-1];return e?e.params:{}}function ra(t,{relative:e}={}){let{matches:n}=O.useContext(mn),{pathname:r}=pi(),i=JSON.stringify(qE(n));return O.useMemo(()=>GE(t,JSON.parse(i),r,e==="path"),[t,i,r,e])}function RR(t,e){return nw(t,e)}function nw(t,e,n,r,i){var _;ve(na(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=O.useContext(Ot),{matches:o}=O.useContext(mn),l=o[o.length-1],u=l?l.params:{},c=l?l.pathname:"/",d=l?l.pathnameBase:"/",p=l&&l.route;{let T=p&&p.path||"";iw(c,!p||T.endsWith("*")||T.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${T}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${T}"> to <Route path="${T==="/"?"*":`${T}/*`}">.`)}let m=pi(),v;if(e){let T=typeof e=="string"?ps(e):e;ve(d==="/"||((_=T.pathname)==null?void 0:_.startsWith(d)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${T.pathname}" was given in the \`location\` prop.`),v=T}else v=m;let C=v.pathname||"/",k=C;if(d!=="/"){let T=d.replace(/^\//,"").split("/");k="/"+C.replace(/^\//,"").split("/").slice(T.length).join("/")}let P=BE(t,{pathname:k});Gt(p||P!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Gt(P==null||P[P.length-1].route.element!==void 0||P[P.length-1].route.Component!==void 0||P[P.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let E=NR(P&&P.map(T=>Object.assign({},T,{params:Object.assign({},u,T.params),pathname:Cn([d,s.encodeLocation?s.encodeLocation(T.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?d:Cn([d,s.encodeLocation?s.encodeLocation(T.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:T.pathnameBase])})),o,n,r,i);return e&&E?O.createElement(ta.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},E):E}function AR(){let t=LR(),e=dR(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r},o=null;return console.error("Error handled by React Router default ErrorBoundary:",t),o=O.createElement(O.Fragment,null,O.createElement("p",null,"💿 Hey developer 👋"),O.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",O.createElement("code",{style:s},"ErrorBoundary")," or"," ",O.createElement("code",{style:s},"errorElement")," prop on your route.")),O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:i},n):null,o)}var CR=O.createElement(AR,null),rw=class extends O.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.onError?this.props.onError(t,e):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const n=wR(t.digest);n&&(t=n)}let e=t!==void 0?O.createElement(mn.Provider,{value:this.props.routeContext},O.createElement(Nf.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?O.createElement(kR,{error:t},e):e}};rw.contextType=mR;var Zc=new WeakMap;function kR({children:t,error:e}){let{basename:n}=O.useContext(Ot);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=ER(e.digest);if(r){let i=Zc.get(e);if(i)throw i;let s=QE(r.location,n);if(KE&&!Zc.get(e))if(s.isExternal||r.reloadDocument)window.location.href=s.absoluteURL||s.to;else{const o=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(s.to,{replace:r.replace}));throw Zc.set(e,o),o}return O.createElement("meta",{httpEquiv:"refresh",content:`0;url=${s.absoluteURL||s.to}`})}}return t}function PR({routeContext:t,match:e,children:n}){let r=O.useContext(ms);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),O.createElement(mn.Provider,{value:t},n)}function NR(t,e=[],n=null,r=null,i=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,o=n==null?void 0:n.errors;if(o!=null){let d=s.findIndex(p=>p.route.id&&(o==null?void 0:o[p.route.id])!==void 0);ve(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),s=s.slice(0,Math.min(s.length,d+1))}let l=!1,u=-1;if(n)for(let d=0;d<s.length;d++){let p=s[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:m,errors:v}=n,C=p.route.loader&&!m.hasOwnProperty(p.route.id)&&(!v||v[p.route.id]===void 0);if(p.route.lazy||C){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}let c=n&&r?(d,p)=>{var m,v;r(d,{location:n.location,params:((v=(m=n.matches)==null?void 0:m[0])==null?void 0:v.params)??{},unstable_pattern:fR(n.matches),errorInfo:p})}:void 0;return s.reduceRight((d,p,m)=>{let v,C=!1,k=null,P=null;n&&(v=o&&p.route.id?o[p.route.id]:void 0,k=p.route.errorElement||CR,l&&(u<0&&m===0?(iw("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),C=!0,P=null):u===m&&(C=!0,P=p.route.hydrateFallbackElement||null)));let E=e.concat(s.slice(0,m+1)),_=()=>{let T;return v?T=k:C?T=P:p.route.Component?T=O.createElement(p.route.Component,null):p.route.element?T=p.route.element:T=d,O.createElement(PR,{match:p,routeContext:{outlet:d,matches:E,isDataRoute:n!=null},children:T})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?O.createElement(rw,{location:n.location,revalidation:n.revalidation,component:k,error:v,children:_(),routeContext:{outlet:null,matches:E,isDataRoute:!0},onError:c}):_()},null)}function xf(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xR(t){let e=O.useContext(ms);return ve(e,xf(t)),e}function DR(t){let e=O.useContext(Ou);return ve(e,xf(t)),e}function VR(t){let e=O.useContext(mn);return ve(e,xf(t)),e}function Df(t){let e=VR(t),n=e.matches[e.matches.length-1];return ve(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function OR(){return Df("useRouteId")}function LR(){var r;let t=O.useContext(Nf),e=DR("useRouteError"),n=Df("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[n]}function bR(){let{router:t}=xR("useNavigate"),e=Df("useNavigate"),n=O.useRef(!1);return ew(()=>{n.current=!0}),O.useCallback(async(i,s={})=>{Gt(n.current,ZE),n.current&&(typeof i=="number"?await t.navigate(i):await t.navigate(i,{fromRouteId:e,...s}))},[t,e])}var qg={};function iw(t,e,n){!e&&!qg[t]&&(qg[t]=!0,Gt(!1,n))}O.memo(MR);function MR({routes:t,future:e,state:n,onError:r}){return nw(t,void 0,n,r,e)}function Zs(t){ve(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function FR({basename:t="/",children:e=null,location:n,navigationType:r="POP",navigator:i,static:s=!1,unstable_useTransitions:o}){ve(!na(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=t.replace(/^\/*/,"/"),u=O.useMemo(()=>({basename:l,navigator:i,static:s,unstable_useTransitions:o,future:{}}),[l,i,s,o]);typeof n=="string"&&(n=ps(n));let{pathname:c="/",search:d="",hash:p="",state:m=null,key:v="default"}=n,C=O.useMemo(()=>{let k=On(c,l);return k==null?null:{location:{pathname:k,search:d,hash:p,state:m,key:v},navigationType:r}},[l,c,d,p,m,v,r]);return Gt(C!=null,`<Router basename="${l}"> is not able to match the URL "${c}${d}${p}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:O.createElement(Ot.Provider,{value:u},O.createElement(ta.Provider,{children:e,value:C}))}function UR({children:t,location:e}){return RR(ld(t),e)}function ld(t,e=[]){let n=[];return O.Children.forEach(t,(r,i)=>{if(!O.isValidElement(r))return;let s=[...e,i];if(r.type===O.Fragment){n.push.apply(n,ld(r.props.children,s));return}ve(r.type===Zs,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ve(!r.props.index||!r.props.children,"An index route cannot have child routes.");let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ld(r.props.children,s)),n.push(o)}),n}var dl="get",fl="application/x-www-form-urlencoded";function Lu(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function jR(t){return Lu(t)&&t.tagName.toLowerCase()==="button"}function zR(t){return Lu(t)&&t.tagName.toLowerCase()==="form"}function BR(t){return Lu(t)&&t.tagName.toLowerCase()==="input"}function $R(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function HR(t,e){return t.button===0&&(!e||e==="_self")&&!$R(t)}var qa=null;function WR(){if(qa===null)try{new FormData(document.createElement("form"),0),qa=!1}catch{qa=!0}return qa}var qR=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function eh(t){return t!=null&&!qR.has(t)?(Gt(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${fl}"`),null):t}function GR(t,e){let n,r,i,s,o;if(zR(t)){let l=t.getAttribute("action");r=l?On(l,e):null,n=t.getAttribute("method")||dl,i=eh(t.getAttribute("enctype"))||fl,s=new FormData(t)}else if(jR(t)||BR(t)&&(t.type==="submit"||t.type==="image")){let l=t.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=t.getAttribute("formaction")||l.getAttribute("action");if(r=u?On(u,e):null,n=t.getAttribute("formmethod")||l.getAttribute("method")||dl,i=eh(t.getAttribute("formenctype"))||eh(l.getAttribute("enctype"))||fl,s=new FormData(l,t),!WR()){let{name:c,type:d,value:p}=t;if(d==="image"){let m=c?`${c}.`:"";s.append(`${m}x`,"0"),s.append(`${m}y`,"0")}else c&&s.append(c,p)}}else{if(Lu(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=dl,r=null,i=fl,o=t}return s&&i==="text/plain"&&(o=s,s=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:s,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Vf(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function KR(t,e,n){let r=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return r.pathname==="/"?r.pathname=`_root.${n}`:e&&On(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function QR(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function YR(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function XR(t,e,n){let r=await Promise.all(t.map(async i=>{let s=e.routes[i.route.id];if(s){let o=await QR(s,n);return o.links?o.links():[]}return[]}));return tA(r.flat(1).filter(YR).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Gg(t,e,n,r,i,s){let o=(u,c)=>n[c]?u.route.id!==n[c].route.id:!0,l=(u,c)=>{var d;return n[c].pathname!==u.pathname||((d=n[c].route.path)==null?void 0:d.endsWith("*"))&&n[c].params["*"]!==u.params["*"]};return s==="assets"?e.filter((u,c)=>o(u,c)||l(u,c)):s==="data"?e.filter((u,c)=>{var p;let d=r.routes[u.route.id];if(!d||!d.hasLoader)return!1;if(o(u,c)||l(u,c))return!0;if(u.route.shouldRevalidate){let m=u.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((p=n[0])==null?void 0:p.params)||{},nextUrl:new URL(t,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function JR(t,e,{includeHydrateFallback:n}={}){return ZR(t.map(r=>{let i=e.routes[r.route.id];if(!i)return[];let s=[i.module];return i.clientActionModule&&(s=s.concat(i.clientActionModule)),i.clientLoaderModule&&(s=s.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(s=s.concat(i.hydrateFallbackModule)),i.imports&&(s=s.concat(i.imports)),s}).flat(1))}function ZR(t){return[...new Set(t)]}function eA(t){let e={},n=Object.keys(t).sort();for(let r of n)e[r]=t[r];return e}function tA(t,e){let n=new Set;return new Set(e),t.reduce((r,i)=>{let s=JSON.stringify(eA(i));return n.has(s)||(n.add(s),r.push({key:s,link:i})),r},[])}function sw(){let t=O.useContext(ms);return Vf(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function nA(){let t=O.useContext(Ou);return Vf(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Of=O.createContext(void 0);Of.displayName="FrameworkContext";function ow(){let t=O.useContext(Of);return Vf(t,"You must render this element inside a <HydratedRouter> element"),t}function rA(t,e){let n=O.useContext(Of),[r,i]=O.useState(!1),[s,o]=O.useState(!1),{onFocus:l,onBlur:u,onMouseEnter:c,onMouseLeave:d,onTouchStart:p}=e,m=O.useRef(null);O.useEffect(()=>{if(t==="render"&&o(!0),t==="viewport"){let k=E=>{E.forEach(_=>{o(_.isIntersecting)})},P=new IntersectionObserver(k,{threshold:.5});return m.current&&P.observe(m.current),()=>{P.disconnect()}}},[t]),O.useEffect(()=>{if(r){let k=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(k)}}},[r]);let v=()=>{i(!0)},C=()=>{i(!1),o(!1)};return n?t!=="intent"?[s,m,{}]:[s,m,{onFocus:Ks(l,v),onBlur:Ks(u,C),onMouseEnter:Ks(c,v),onMouseLeave:Ks(d,C),onTouchStart:Ks(p,v)}]:[!1,m,{}]}function Ks(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function iA({page:t,...e}){let{router:n}=sw(),r=O.useMemo(()=>BE(n.routes,t,n.basename),[n.routes,t,n.basename]);return r?O.createElement(oA,{page:t,matches:r,...e}):null}function sA(t){let{manifest:e,routeModules:n}=ow(),[r,i]=O.useState([]);return O.useEffect(()=>{let s=!1;return XR(t,e,n).then(o=>{s||i(o)}),()=>{s=!0}},[t,e,n]),r}function oA({page:t,matches:e,...n}){let r=pi(),{manifest:i,routeModules:s}=ow(),{basename:o}=sw(),{loaderData:l,matches:u}=nA(),c=O.useMemo(()=>Gg(t,e,u,i,r,"data"),[t,e,u,i,r]),d=O.useMemo(()=>Gg(t,e,u,i,r,"assets"),[t,e,u,i,r]),p=O.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let C=new Set,k=!1;if(e.forEach(E=>{var T;let _=i.routes[E.route.id];!_||!_.hasLoader||(!c.some(V=>V.route.id===E.route.id)&&E.route.id in l&&((T=s[E.route.id])!=null&&T.shouldRevalidate)||_.hasClientLoader?k=!0:C.add(E.route.id))}),C.size===0)return[];let P=KR(t,o,"data");return k&&C.size>0&&P.searchParams.set("_routes",e.filter(E=>C.has(E.route.id)).map(E=>E.route.id).join(",")),[P.pathname+P.search]},[o,l,r,i,c,e,t,s]),m=O.useMemo(()=>JR(d,i),[d,i]),v=sA(d);return O.createElement(O.Fragment,null,p.map(C=>O.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...n})),m.map(C=>O.createElement("link",{key:C,rel:"modulepreload",href:C,...n})),v.map(({key:C,link:k})=>O.createElement("link",{key:C,nonce:n.nonce,...k})))}function aA(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var lA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{lA&&(window.__reactRouterVersion="7.11.0")}catch{}function uA({basename:t,children:e,unstable_useTransitions:n,window:r}){let i=O.useRef();i.current==null&&(i.current=BS({window:r,v5Compat:!0}));let s=i.current,[o,l]=O.useState({action:s.action,location:s.location}),u=O.useCallback(c=>{n===!1?l(c):O.startTransition(()=>l(c))},[n]);return O.useLayoutEffect(()=>s.listen(u),[s,u]),O.createElement(FR,{basename:t,children:e,location:o.location,navigationType:o.action,navigator:s,unstable_useTransitions:n})}var aw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,er=O.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,viewTransition:p,unstable_defaultShouldRevalidate:m,...v},C){let{basename:k,unstable_useTransitions:P}=O.useContext(Ot),E=typeof c=="string"&&aw.test(c),_=QE(c,k);c=_.to;let T=TR(c,{relative:i}),[V,F,j]=rA(r,v),w=fA(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:p,unstable_defaultShouldRevalidate:m,unstable_useTransitions:P});function y(R){e&&e(R),R.defaultPrevented||w(R)}let I=O.createElement("a",{...v,...j,href:_.absoluteURL||T,onClick:_.isExternal||s?e:y,ref:aA(C,F),target:u,"data-discover":!E&&n==="render"?"true":void 0});return V&&!E?O.createElement(O.Fragment,null,I,O.createElement(iA,{page:T})):I});er.displayName="Link";var cA=O.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:i=!1,style:s,to:o,viewTransition:l,children:u,...c},d){let p=ra(o,{relative:c.relative}),m=pi(),v=O.useContext(Ou),{navigator:C,basename:k}=O.useContext(Ot),P=v!=null&&_A(p)&&l===!0,E=C.encodeLocation?C.encodeLocation(p).pathname:p.pathname,_=m.pathname,T=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;n||(_=_.toLowerCase(),T=T?T.toLowerCase():null,E=E.toLowerCase()),T&&k&&(T=On(T,k)||T);const V=E!=="/"&&E.endsWith("/")?E.length-1:E.length;let F=_===E||!i&&_.startsWith(E)&&_.charAt(V)==="/",j=T!=null&&(T===E||!i&&T.startsWith(E)&&T.charAt(E.length)==="/"),w={isActive:F,isPending:j,isTransitioning:P},y=F?e:void 0,I;typeof r=="function"?I=r(w):I=[r,F?"active":null,j?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let R=typeof s=="function"?s(w):s;return O.createElement(er,{...c,"aria-current":y,className:I,ref:d,style:R,to:o,viewTransition:l},typeof u=="function"?u(w):u)});cA.displayName="NavLink";var hA=O.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:i,state:s,method:o=dl,action:l,onSubmit:u,relative:c,preventScrollReset:d,viewTransition:p,unstable_defaultShouldRevalidate:m,...v},C)=>{let{unstable_useTransitions:k}=O.useContext(Ot),P=gA(),E=yA(l,{relative:c}),_=o.toLowerCase()==="get"?"get":"post",T=typeof l=="string"&&aw.test(l),V=F=>{if(u&&u(F),F.defaultPrevented)return;F.preventDefault();let j=F.nativeEvent.submitter,w=(j==null?void 0:j.getAttribute("formmethod"))||o,y=()=>P(j||F.currentTarget,{fetcherKey:e,method:w,navigate:n,replace:i,state:s,relative:c,preventScrollReset:d,viewTransition:p,unstable_defaultShouldRevalidate:m});k&&n!==!1?O.startTransition(()=>y()):y()};return O.createElement("form",{ref:C,method:_,action:E,onSubmit:r?u:V,...v,"data-discover":!T&&t==="render"?"true":void 0})});hA.displayName="Form";function dA(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function lw(t){let e=O.useContext(ms);return ve(e,dA(t)),e}function fA(t,{target:e,replace:n,state:r,preventScrollReset:i,relative:s,viewTransition:o,unstable_defaultShouldRevalidate:l,unstable_useTransitions:u}={}){let c=tw(),d=pi(),p=ra(t,{relative:s});return O.useCallback(m=>{if(HR(m,e)){m.preventDefault();let v=n!==void 0?n:Uo(d)===Uo(p),C=()=>c(t,{replace:v,state:r,preventScrollReset:i,relative:s,viewTransition:o,unstable_defaultShouldRevalidate:l});u?O.startTransition(()=>C()):C()}},[d,c,p,n,r,e,t,i,s,o,l,u])}var pA=0,mA=()=>`__${String(++pA)}__`;function gA(){let{router:t}=lw("useSubmit"),{basename:e}=O.useContext(Ot),n=OR(),r=t.fetch,i=t.navigate;return O.useCallback(async(s,o={})=>{let{action:l,method:u,encType:c,formData:d,body:p}=GR(s,e);if(o.navigate===!1){let m=o.fetcherKey||mA();await r(m,n,o.action||l,{unstable_defaultShouldRevalidate:o.unstable_defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:d,body:p,formMethod:o.method||u,formEncType:o.encType||c,flushSync:o.flushSync})}else await i(o.action||l,{unstable_defaultShouldRevalidate:o.unstable_defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:d,body:p,formMethod:o.method||u,formEncType:o.encType||c,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,i,e,n])}function yA(t,{relative:e}={}){let{basename:n}=O.useContext(Ot),r=O.useContext(mn);ve(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),s={...ra(t||".",{relative:e})},o=pi();if(t==null){s.search=o.search;let l=new URLSearchParams(s.search),u=l.getAll("index");if(u.some(d=>d==="")){l.delete("index"),u.filter(p=>p).forEach(p=>l.append("index",p));let d=l.toString();s.search=d?`?${d}`:""}}return(!t||t===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:Cn([n,s.pathname])),Uo(s)}function _A(t,{relative:e}={}){let n=O.useContext(XE);ve(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=lw("useViewTransitionState"),i=ra(t,{relative:e});if(!n.isTransitioning)return!1;let s=On(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=On(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Kl(i.pathname,o)!=null||Kl(i.pathname,s)!=null}const vA=()=>{};var Kg={};/**
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
 */const uw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},EA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},cw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,v=c&63;u||(v=64,o||(m=64)),r.push(n[d],n[p],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(uw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):EA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new wA;const m=s<<2|l>>4;if(r.push(m),c!==64){const v=l<<4&240|c>>2;if(r.push(v),p!==64){const C=c<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class wA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const TA=function(t){const e=uw(t);return cw.encodeByteArray(e,!0)},Ql=function(t){return TA(t).replace(/\./g,"")},hw=function(t){try{return cw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function IA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const SA=()=>IA().__FIREBASE_DEFAULTS__,RA=()=>{if(typeof process>"u"||typeof Kg>"u")return;const t=Kg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},AA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&hw(t[1]);return e&&JSON.parse(e)},bu=()=>{try{return vA()||SA()||RA()||AA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},dw=t=>{var e,n;return(n=(e=bu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},fw=t=>{const e=dw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},pw=()=>{var t;return(t=bu())==null?void 0:t.config},mw=t=>{var e;return(e=bu())==null?void 0:e[`_${t}`]};/**
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
 */class CA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function mi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Lf(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function gw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Ql(JSON.stringify(n)),Ql(JSON.stringify(o)),""].join(".")}const go={};function kA(){const t={prod:[],emulator:[]};for(const e of Object.keys(go))go[e]?t.emulator.push(e):t.prod.push(e);return t}function PA(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Qg=!1;function bf(t,e){if(typeof window>"u"||typeof document>"u"||!mi(window.location.host)||go[t]===e||go[t]||Qg)return;go[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",s=kA().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,v){m.setAttribute("width","24"),m.setAttribute("id",v),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function c(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Qg=!0,o()},m}function d(m,v){m.setAttribute("id",v),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=PA(r),v=n("text"),C=document.getElementById(v)||document.createElement("span"),k=n("learnmore"),P=document.getElementById(k)||document.createElement("a"),E=n("preprendIcon"),_=document.getElementById(E)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const T=m.element;l(T),d(P,k);const V=c();u(_,E),T.append(_,C,P,V),document.body.appendChild(T)}s?(C.innerText="Preview backend disconnected.",_.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(_.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",v)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function NA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function xA(){var e;const t=(e=bu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function DA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function VA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function OA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function LA(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function bA(){return!xA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function MA(){try{return typeof indexedDB=="object"}catch{return!1}}function FA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const UA="FirebaseError";class gn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=UA,Object.setPrototypeOf(this,gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ia.prototype.create)}}class ia{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?jA(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new gn(i,l,r)}}function jA(t,e){return t.replace(zA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const zA=/\{\$([^}]+)}/g;function BA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function si(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Yg(s)&&Yg(o)){if(!si(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Yg(t){return t!==null&&typeof t=="object"}/**
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
 */function sa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function eo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function to(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function $A(t,e){const n=new HA(t,e);return n.subscribe.bind(n)}class HA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");WA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=th),i.error===void 0&&(i.error=th),i.complete===void 0&&(i.complete=th);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function WA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function th(){}/**
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
 */function be(t){return t&&t._delegate?t._delegate:t}class Tr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Wr="[DEFAULT]";/**
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
 */class qA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new CA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(KA(e))try{this.getOrInitializeService({instanceIdentifier:Wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wr){return this.instances.has(e)}getOptions(e=Wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:GA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wr){return this.component?this.component.multipleInstances?e:Wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function GA(t){return t===Wr?void 0:t}function KA(t){return t.instantiationMode==="EAGER"}/**
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
 */class QA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const YA={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},XA=te.INFO,JA={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},ZA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=JA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mf{constructor(e){this.name=e,this._logLevel=XA,this._logHandler=ZA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?YA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const eC=(t,e)=>e.some(n=>t instanceof n);let Xg,Jg;function tC(){return Xg||(Xg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nC(){return Jg||(Jg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yw=new WeakMap,ud=new WeakMap,_w=new WeakMap,nh=new WeakMap,Ff=new WeakMap;function rC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(gr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&yw.set(n,t)}).catch(()=>{}),Ff.set(e,t),e}function iC(t){if(ud.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ud.set(t,e)}let cd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ud.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_w.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sC(t){cd=t(cd)}function oC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(rh(this),e,...n);return _w.set(r,e.sort?e.sort():[e]),gr(r)}:nC().includes(t)?function(...e){return t.apply(rh(this),e),gr(yw.get(this))}:function(...e){return gr(t.apply(rh(this),e))}}function aC(t){return typeof t=="function"?oC(t):(t instanceof IDBTransaction&&iC(t),eC(t,tC())?new Proxy(t,cd):t)}function gr(t){if(t instanceof IDBRequest)return rC(t);if(nh.has(t))return nh.get(t);const e=aC(t);return e!==t&&(nh.set(t,e),Ff.set(e,t)),e}const rh=t=>Ff.get(t);function lC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=gr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(gr(o.result),u.oldVersion,u.newVersion,gr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const uC=["get","getKey","getAll","getAllKeys","count"],cC=["put","add","delete","clear"],ih=new Map;function Zg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ih.get(e))return ih.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=cC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||uC.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return ih.set(e,s),s}sC(t=>({...t,get:(e,n,r)=>Zg(e,n)||t.get(e,n,r),has:(e,n)=>!!Zg(e,n)||t.has(e,n)}));/**
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
 */class hC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function dC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hd="@firebase/app",ey="0.14.6";/**
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
 */const Ln=new Mf("@firebase/app"),fC="@firebase/app-compat",pC="@firebase/analytics-compat",mC="@firebase/analytics",gC="@firebase/app-check-compat",yC="@firebase/app-check",_C="@firebase/auth",vC="@firebase/auth-compat",EC="@firebase/database",wC="@firebase/data-connect",TC="@firebase/database-compat",IC="@firebase/functions",SC="@firebase/functions-compat",RC="@firebase/installations",AC="@firebase/installations-compat",CC="@firebase/messaging",kC="@firebase/messaging-compat",PC="@firebase/performance",NC="@firebase/performance-compat",xC="@firebase/remote-config",DC="@firebase/remote-config-compat",VC="@firebase/storage",OC="@firebase/storage-compat",LC="@firebase/firestore",bC="@firebase/ai",MC="@firebase/firestore-compat",FC="firebase",UC="12.6.0";/**
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
 */const dd="[DEFAULT]",jC={[hd]:"fire-core",[fC]:"fire-core-compat",[mC]:"fire-analytics",[pC]:"fire-analytics-compat",[yC]:"fire-app-check",[gC]:"fire-app-check-compat",[_C]:"fire-auth",[vC]:"fire-auth-compat",[EC]:"fire-rtdb",[wC]:"fire-data-connect",[TC]:"fire-rtdb-compat",[IC]:"fire-fn",[SC]:"fire-fn-compat",[RC]:"fire-iid",[AC]:"fire-iid-compat",[CC]:"fire-fcm",[kC]:"fire-fcm-compat",[PC]:"fire-perf",[NC]:"fire-perf-compat",[xC]:"fire-rc",[DC]:"fire-rc-compat",[VC]:"fire-gcs",[OC]:"fire-gcs-compat",[LC]:"fire-fst",[MC]:"fire-fst-compat",[bC]:"fire-vertex","fire-js":"fire-js",[FC]:"fire-js-all"};/**
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
 */const Yl=new Map,zC=new Map,fd=new Map;function ty(t,e){try{t.container.addComponent(e)}catch(n){Ln.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function oi(t){const e=t.name;if(fd.has(e))return Ln.debug(`There were multiple attempts to register component ${e}.`),!1;fd.set(e,t);for(const n of Yl.values())ty(n,t);for(const n of zC.values())ty(n,t);return!0}function Mu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function _t(t){return t==null?!1:t.settings!==void 0}/**
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
 */const BC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yr=new ia("app","Firebase",BC);/**
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
 */class $C{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Tr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yr.create("app-deleted",{appName:this._name})}}/**
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
 */const gi=UC;function vw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:dd,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw yr.create("bad-app-name",{appName:String(i)});if(n||(n=pw()),!n)throw yr.create("no-options");const s=Yl.get(i);if(s){if(si(n,s.options)&&si(r,s.config))return s;throw yr.create("duplicate-app",{appName:i})}const o=new QA(i);for(const u of fd.values())o.addComponent(u);const l=new $C(n,r,o);return Yl.set(i,l),l}function Uf(t=dd){const e=Yl.get(t);if(!e&&t===dd&&pw())return vw();if(!e)throw yr.create("no-app",{appName:t});return e}function sn(t,e,n){let r=jC[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ln.warn(o.join(" "));return}oi(new Tr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const HC="firebase-heartbeat-database",WC=1,jo="firebase-heartbeat-store";let sh=null;function Ew(){return sh||(sh=lC(HC,WC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(jo)}catch(n){console.warn(n)}}}}).catch(t=>{throw yr.create("idb-open",{originalErrorMessage:t.message})})),sh}async function qC(t){try{const n=(await Ew()).transaction(jo),r=await n.objectStore(jo).get(ww(t));return await n.done,r}catch(e){if(e instanceof gn)Ln.warn(e.message);else{const n=yr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ln.warn(n.message)}}}async function ny(t,e){try{const r=(await Ew()).transaction(jo,"readwrite");await r.objectStore(jo).put(e,ww(t)),await r.done}catch(n){if(n instanceof gn)Ln.warn(n.message);else{const r=yr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ln.warn(r.message)}}}function ww(t){return`${t.name}!${t.options.appId}`}/**
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
 */const GC=1024,KC=30;class QC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new XC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ry();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>KC){const o=JC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ln.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ry(),{heartbeatsToSend:r,unsentEntries:i}=YC(this._heartbeatsCache.heartbeats),s=Ql(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Ln.warn(n),""}}}function ry(){return new Date().toISOString().substring(0,10)}function YC(t,e=GC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),iy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),iy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class XC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return MA()?FA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await qC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ny(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ny(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function iy(t){return Ql(JSON.stringify({version:2,heartbeats:t})).length}function JC(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function ZC(t){oi(new Tr("platform-logger",e=>new hC(e),"PRIVATE")),oi(new Tr("heartbeat",e=>new QC(e),"PRIVATE")),sn(hd,ey,t),sn(hd,ey,"esm2020"),sn("fire-js","")}ZC("");var ek="firebase",tk="12.7.0";/**
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
 */sn(ek,tk,"app");function Tw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nk=Tw,Iw=new ia("auth","Firebase",Tw());/**
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
 */const Xl=new Mf("@firebase/auth");function rk(t,...e){Xl.logLevel<=te.WARN&&Xl.warn(`Auth (${gi}): ${t}`,...e)}function pl(t,...e){Xl.logLevel<=te.ERROR&&Xl.error(`Auth (${gi}): ${t}`,...e)}/**
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
 */function Kt(t,...e){throw jf(t,...e)}function on(t,...e){return jf(t,...e)}function Sw(t,e,n){const r={...nk(),[e]:n};return new ia("auth","Firebase",r).create(e,{appName:t.name})}function kn(t){return Sw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Iw.create(t,...e)}function G(t,e,...n){if(!t)throw jf(e,...n)}function Sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw pl(e),new Error(e)}function bn(t,e){t||Sn(e)}/**
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
 */function pd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function ik(){return sy()==="http:"||sy()==="https:"}function sy(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function sk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ik()||VA()||"connection"in navigator)?navigator.onLine:!0}function ok(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class oa{constructor(e,n){this.shortDelay=e,this.longDelay=n,bn(n>e,"Short delay should be less than long delay!"),this.isMobile=NA()||OA()}get(){return sk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function zf(t,e){bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Rw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ak={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const lk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],uk=new oa(3e4,6e4);function jn(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function yn(t,e,n,r,i={}){return Aw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=sa({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return DA()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&mi(t.emulatorConfig.host)&&(c.credentials="include"),Rw.fetch()(await Cw(t,t.config.apiHost,n,l),c)})}async function Aw(t,e,n){t._canInitEmulator=!1;const r={...ak,...e};try{const i=new hk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ga(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ga(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ga(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ga(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Sw(t,d,c);Kt(t,d)}}catch(i){if(i instanceof gn)throw i;Kt(t,"network-request-failed",{message:String(i)})}}async function aa(t,e,n,r,i={}){const s=await yn(t,e,n,r,i);return"mfaPendingCredential"in s&&Kt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Cw(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?zf(t.config,i):`${t.config.apiScheme}://${i}`;return lk.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function ck(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(on(this.auth,"network-request-failed")),uk.get())})}}function Ga(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=on(t,e,r);return i.customData._tokenResponse=n,i}function oy(t){return t!==void 0&&t.enterprise!==void 0}class dk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ck(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function fk(t,e){return yn(t,"GET","/v2/recaptchaConfig",jn(t,e))}/**
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
 */async function pk(t,e){return yn(t,"POST","/v1/accounts:delete",e)}async function Jl(t,e){return yn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function yo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mk(t,e=!1){const n=be(t),r=await n.getIdToken(e),i=Bf(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:yo(oh(i.auth_time)),issuedAtTime:yo(oh(i.iat)),expirationTime:yo(oh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function oh(t){return Number(t)*1e3}function Bf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return pl("JWT malformed, contained fewer than 3 sections"),null;try{const i=hw(n);return i?JSON.parse(i):(pl("Failed to decode base64 JWT payload"),null)}catch(i){return pl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ay(t){const e=Bf(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function rs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof gn&&gk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function gk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class yk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class md{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=yo(this.lastLoginAt),this.creationTime=yo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Zl(t){var p;const e=t.auth,n=await t.getIdToken(),r=await rs(t,Jl(e,{idToken:n}));G(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?kw(i.providerUserInfo):[],o=vk(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new md(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function _k(t){const e=be(t);await Zl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function kw(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function Ek(t,e){const n=await Aw(t,{},async()=>{const r=sa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await Cw(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&mi(t.emulatorConfig.host)&&(u.credentials="include"),Rw.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function wk(t,e){return yn(t,"POST","/v2/accounts:revokeToken",jn(t,e))}/**
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
 */class qi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ay(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=ay(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Ek(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new qi;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qi,this.toJSON())}_performRefresh(){return Sn("not implemented")}}/**
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
 */function Qn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class zt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new yk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new md(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await rs(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return mk(this,e)}reload(){return _k(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new zt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Zl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_t(this.auth.app))return Promise.reject(kn(this.auth));const e=await this.getIdToken();return await rs(this,pk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:v,providerData:C,stsTokenManager:k}=n;G(p&&k,e,"internal-error");const P=qi.fromJSON(this.name,k);G(typeof p=="string",e,"internal-error"),Qn(r,e.name),Qn(i,e.name),G(typeof m=="boolean",e,"internal-error"),G(typeof v=="boolean",e,"internal-error"),Qn(s,e.name),Qn(o,e.name),Qn(l,e.name),Qn(u,e.name),Qn(c,e.name),Qn(d,e.name);const E=new zt({uid:p,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:v,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:P,createdAt:c,lastLoginAt:d});return C&&Array.isArray(C)&&(E.providerData=C.map(_=>({..._}))),u&&(E._redirectEventId=u),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new qi;i.updateFromServerResponse(n);const s=new zt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Zl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?kw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new qi;l.updateFromIdToken(r);const u=new zt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new md(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const ly=new Map;function Rn(t){bn(t instanceof Function,"Expected a class definition");let e=ly.get(t);return e?(bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ly.set(t,e),e)}/**
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
 */class Pw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Pw.type="NONE";const uy=Pw;/**
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
 */function ml(t,e,n){return`firebase:${t}:${e}:${n}`}class Gi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ml(this.userKey,i.apiKey,s),this.fullPersistenceKey=ml("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Jl(this.auth,{idToken:e}).catch(()=>{});return n?zt._fromGetAccountInfoResponse(this.auth,n,e):null}return zt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Gi(Rn(uy),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Rn(uy);const o=ml(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let p;if(typeof d=="string"){const m=await Jl(e,{idToken:d}).catch(()=>{});if(!m)break;p=await zt._fromGetAccountInfoResponse(e,m,d)}else p=zt._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Gi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Gi(s,e,r))}}/**
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
 */function cy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lw(e))return"Blackberry";if(bw(e))return"Webos";if(xw(e))return"Safari";if((e.includes("chrome/")||Dw(e))&&!e.includes("edge/"))return"Chrome";if(Ow(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Nw(t=nt()){return/firefox\//i.test(t)}function xw(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Dw(t=nt()){return/crios\//i.test(t)}function Vw(t=nt()){return/iemobile/i.test(t)}function Ow(t=nt()){return/android/i.test(t)}function Lw(t=nt()){return/blackberry/i.test(t)}function bw(t=nt()){return/webos/i.test(t)}function $f(t=nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Tk(t=nt()){var e;return $f(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Ik(){return LA()&&document.documentMode===10}function Mw(t=nt()){return $f(t)||Ow(t)||bw(t)||Lw(t)||/windows phone/i.test(t)||Vw(t)}/**
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
 */function Fw(t,e=[]){let n;switch(t){case"Browser":n=cy(nt());break;case"Worker":n=`${cy(nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${gi}/${r}`}/**
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
 */class Sk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Rk(t,e={}){return yn(t,"GET","/v2/passwordPolicy",jn(t,e))}/**
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
 */const Ak=6;class Ck{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Ak,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class kk{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hy(this),this.idTokenSubscription=new hy(this),this.beforeStateQueue=new Sk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Iw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Gi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Jl(this,{idToken:e}),r=await zt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(_t(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Zl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ok()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_t(this.app))return Promise.reject(kn(this));const n=e?be(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _t(this.app)?Promise.reject(kn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _t(this.app)?Promise.reject(kn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Rk(this),n=new Ck(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ia("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await wk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Gi.create(this,[Rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(_t(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&rk(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Dr(t){return be(t)}class hy{constructor(e){this.auth=e,this.observer=null,this.addObserver=$A(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Fu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Pk(t){Fu=t}function Uw(t){return Fu.loadJS(t)}function Nk(){return Fu.recaptchaEnterpriseScript}function xk(){return Fu.gapiScript}function Dk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Vk{constructor(){this.enterprise=new Ok}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Ok{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Lk="recaptcha-enterprise",jw="NO_RECAPTCHA";class bk{constructor(e){this.type=Lk,this.auth=Dr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{fk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new dk(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;oy(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(jw)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Vk().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&oy(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Nk();u.length!==0&&(u+=l),Uw(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function dy(t,e,n,r=!1,i=!1){const s=new bk(t);let o;if(i)o=jw;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function eu(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await dy(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await dy(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function Mk(t,e){const n=Mu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(si(s,e??{}))return i;Kt(i,"already-initialized")}return n.initialize({options:e})}function Fk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Uk(t,e,n){const r=Dr(t);G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=zw(e),{host:o,port:l}=jk(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){G(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),G(si(c,r.config.emulator)&&si(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,mi(o)?(Lf(`${s}//${o}${u}`),bf("Auth",!0)):zk()}function zw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jk(t){const e=zw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:fy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:fy(o)}}}function fy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function zk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Hf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Sn("not implemented")}_getIdTokenResponse(e){return Sn("not implemented")}_linkToIdToken(e,n){return Sn("not implemented")}_getReauthenticationResolver(e){return Sn("not implemented")}}async function Bk(t,e){return yn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function $k(t,e){return aa(t,"POST","/v1/accounts:signInWithPassword",jn(t,e))}async function Hk(t,e){return yn(t,"POST","/v1/accounts:sendOobCode",jn(t,e))}async function Wk(t,e){return Hk(t,e)}/**
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
 */async function qk(t,e){return aa(t,"POST","/v1/accounts:signInWithEmailLink",jn(t,e))}async function Gk(t,e){return aa(t,"POST","/v1/accounts:signInWithEmailLink",jn(t,e))}/**
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
 */class zo extends Hf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new zo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new zo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return eu(e,n,"signInWithPassword",$k);case"emailLink":return qk(e,{email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return eu(e,r,"signUpPassword",Bk);case"emailLink":return Gk(e,{idToken:n,email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ki(t,e){return aa(t,"POST","/v1/accounts:signInWithIdp",jn(t,e))}/**
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
 */const Kk="http://localhost";class ai extends Hf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ai(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new ai(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ki(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ki(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ki(e,n)}buildRequest(){const e={requestUri:Kk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=sa(n)}return e}}/**
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
 */function Qk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Yk(t){const e=eo(to(t)).link,n=e?eo(to(e)).deep_link_id:null,r=eo(to(t)).deep_link_id;return(r?eo(to(r)).link:null)||r||n||e||t}class Wf{constructor(e){const n=eo(to(e)),r=n.apiKey??null,i=n.oobCode??null,s=Qk(n.mode??null);G(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Yk(e);try{return new Wf(n)}catch{return null}}}/**
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
 */class gs{constructor(){this.providerId=gs.PROVIDER_ID}static credential(e,n){return zo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Wf.parseLink(n);return G(r,"argument-error"),zo._fromEmailAndCode(e,r.code,r.tenantId)}}gs.PROVIDER_ID="password";gs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";gs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Bw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class la extends Bw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class tr extends la{constructor(){super("facebook.com")}static credential(e){return ai._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.FACEBOOK_SIGN_IN_METHOD="facebook.com";tr.PROVIDER_ID="facebook.com";/**
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
 */class nr extends la{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ai._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return nr.credential(n,r)}catch{return null}}}nr.GOOGLE_SIGN_IN_METHOD="google.com";nr.PROVIDER_ID="google.com";/**
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
 */class rr extends la{constructor(){super("github.com")}static credential(e){return ai._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rr.credential(e.oauthAccessToken)}catch{return null}}}rr.GITHUB_SIGN_IN_METHOD="github.com";rr.PROVIDER_ID="github.com";/**
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
 */class ir extends la{constructor(){super("twitter.com")}static credential(e,n){return ai._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ir.credential(n,r)}catch{return null}}}ir.TWITTER_SIGN_IN_METHOD="twitter.com";ir.PROVIDER_ID="twitter.com";/**
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
 */async function Xk(t,e){return aa(t,"POST","/v1/accounts:signUp",jn(t,e))}/**
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
 */class li{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await zt._fromIdTokenResponse(e,r,i),o=py(r);return new li({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=py(r);return new li({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function py(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class tu extends gn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,tu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new tu(e,n,r,i)}}function $w(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?tu._fromErrorAndOperation(t,s,e,r):s})}async function Jk(t,e,n=!1){const r=await rs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return li._forOperation(t,"link",r)}/**
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
 */async function Zk(t,e,n=!1){const{auth:r}=t;if(_t(r.app))return Promise.reject(kn(r));const i="reauthenticate";try{const s=await rs(t,$w(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=Bf(s.idToken);G(o,r,"internal-error");const{sub:l}=o;return G(t.uid===l,r,"user-mismatch"),li._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Kt(r,"user-mismatch"),s}}/**
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
 */async function Hw(t,e,n=!1){if(_t(t.app))return Promise.reject(kn(t));const r="signIn",i=await $w(t,r,e),s=await li._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function eP(t,e){return Hw(Dr(t),e)}/**
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
 */async function Ww(t){const e=Dr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function tP(t,e,n){const r=Dr(t);await eu(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Wk)}async function nP(t,e,n){if(_t(t.app))return Promise.reject(kn(t));const r=Dr(t),o=await eu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Xk).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Ww(t),u}),l=await li._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function rP(t,e,n){return _t(t.app)?Promise.reject(kn(t)):eP(be(t),gs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ww(t),r})}/**
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
 */async function iP(t,e){return yn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function sP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=be(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await rs(r,iP(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function oP(t,e,n,r){return be(t).onIdTokenChanged(e,n,r)}function aP(t,e,n){return be(t).beforeAuthStateChanged(e,n)}const nu="__sak";/**
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
 */class qw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(nu,"1"),this.storage.removeItem(nu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const lP=1e3,uP=10;class Gw extends qw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Mw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Ik()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,uP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},lP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gw.type="LOCAL";const cP=Gw;/**
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
 */class Kw extends qw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Kw.type="SESSION";const Qw=Kw;/**
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
 */function hP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Uu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Uu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await hP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Uu.receivers=[];/**
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
 */function qf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class dP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=qf("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function an(){return window}function fP(t){an().location.href=t}/**
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
 */function Yw(){return typeof an().WorkerGlobalScope<"u"&&typeof an().importScripts=="function"}async function pP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function gP(){return Yw()?self:null}/**
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
 */const Xw="firebaseLocalStorageDb",yP=1,ru="firebaseLocalStorage",Jw="fbase_key";class ua{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ju(t,e){return t.transaction([ru],e?"readwrite":"readonly").objectStore(ru)}function _P(){const t=indexedDB.deleteDatabase(Xw);return new ua(t).toPromise()}function gd(){const t=indexedDB.open(Xw,yP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ru,{keyPath:Jw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ru)?e(r):(r.close(),await _P(),e(await gd()))})})}async function my(t,e,n){const r=ju(t,!0).put({[Jw]:e,value:n});return new ua(r).toPromise()}async function vP(t,e){const n=ju(t,!1).get(e),r=await new ua(n).toPromise();return r===void 0?null:r.value}function gy(t,e){const n=ju(t,!0).delete(e);return new ua(n).toPromise()}const EP=800,wP=3;class Zw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>wP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Uu._getInstance(gP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await pP(),!this.activeServiceWorker)return;this.sender=new dP(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gd();return await my(e,nu,"1"),await gy(e,nu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>my(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>vP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>gy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ju(i,!1).getAll();return new ua(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),EP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zw.type="LOCAL";const TP=Zw;new oa(3e4,6e4);/**
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
 */function IP(t,e){return e?Rn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Gf extends Hf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ki(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ki(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ki(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function SP(t){return Hw(t.auth,new Gf(t),t.bypassAuthState)}function RP(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),Zk(n,new Gf(t),t.bypassAuthState)}async function AP(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),Jk(n,new Gf(t),t.bypassAuthState)}/**
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
 */class eT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return SP;case"linkViaPopup":case"linkViaRedirect":return AP;case"reauthViaPopup":case"reauthViaRedirect":return RP;default:Kt(this.auth,"internal-error")}}resolve(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const CP=new oa(2e3,1e4);class Ui extends eT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ui.currentPopupAction&&Ui.currentPopupAction.cancel(),Ui.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){bn(this.filter.length===1,"Popup operations only handle one event");const e=qf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ui.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,CP.get())};e()}}Ui.currentPopupAction=null;/**
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
 */const kP="pendingRedirect",gl=new Map;class PP extends eT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=gl.get(this.auth._key());if(!e){try{const r=await NP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}gl.set(this.auth._key(),e)}return this.bypassAuthState||gl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NP(t,e){const n=VP(e),r=DP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function xP(t,e){gl.set(t._key(),e)}function DP(t){return Rn(t._redirectPersistence)}function VP(t){return ml(kP,t.config.apiKey,t.name)}async function OP(t,e,n=!1){if(_t(t.app))return Promise.reject(kn(t));const r=Dr(t),i=IP(r,e),o=await new PP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const LP=10*60*1e3;class bP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!MP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!tT(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(on(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=LP&&this.cachedEventUids.clear(),this.cachedEventUids.has(yy(e))}saveEventToCache(e){this.cachedEventUids.add(yy(e)),this.lastProcessedEventTime=Date.now()}}function yy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function tT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function MP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tT(t);default:return!1}}/**
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
 */async function FP(t,e={}){return yn(t,"GET","/v1/projects",e)}/**
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
 */const UP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jP=/^https?/;async function zP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await FP(t);for(const n of e)try{if(BP(n))return}catch{}Kt(t,"unauthorized-domain")}function BP(t){const e=pd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!jP.test(n))return!1;if(UP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const $P=new oa(3e4,6e4);function _y(){const t=an().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function HP(t){return new Promise((e,n)=>{var i,s,o;function r(){_y(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_y(),n(on(t,"network-request-failed"))},timeout:$P.get()})}if((s=(i=an().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=an().gapi)!=null&&o.load)r();else{const l=Dk("iframefcb");return an()[l]=()=>{gapi.load?r():n(on(t,"network-request-failed"))},Uw(`${xk()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw yl=null,e})}let yl=null;function WP(t){return yl=yl||HP(t),yl}/**
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
 */const qP=new oa(5e3,15e3),GP="__/auth/iframe",KP="emulator/auth/iframe",QP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XP(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zf(e,KP):`https://${t.config.authDomain}/${GP}`,r={apiKey:e.apiKey,appName:t.name,v:gi},i=YP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${sa(r).slice(1)}`}async function JP(t){const e=await WP(t),n=an().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:XP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=on(t,"network-request-failed"),l=an().setTimeout(()=>{s(o)},qP.get());function u(){an().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const ZP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eN=500,tN=600,nN="_blank",rN="http://localhost";class vy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iN(t,e,n,r=eN,i=tN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...ZP,width:r.toString(),height:i.toString(),top:s,left:o},c=nt().toLowerCase();n&&(l=Dw(c)?nN:n),Nw(c)&&(e=e||rN,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[v,C])=>`${m}${v}=${C},`,"");if(Tk(c)&&l!=="_self")return sN(e||"",l),new vy(null);const p=window.open(e||"",l,d);G(p,t,"popup-blocked");try{p.focus()}catch{}return new vy(p)}function sN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const oN="__/auth/handler",aN="emulator/auth/handler",lN=encodeURIComponent("fac");async function Ey(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:gi,eventId:i};if(e instanceof Bw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",BA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof la){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${lN}=${encodeURIComponent(u)}`:"";return`${uN(t)}?${sa(l).slice(1)}${c}`}function uN({config:t}){return t.emulator?zf(t,aN):`https://${t.authDomain}/${oN}`}/**
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
 */const ah="webStorageSupport";class cN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qw,this._completeRedirectFn=OP,this._overrideRedirectResult=xP}async _openPopup(e,n,r,i){var o;bn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Ey(e,n,r,pd(),i);return iN(e,s,qf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Ey(e,n,r,pd(),i);return fP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(bn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await JP(e),r=new bP(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ah,{type:ah},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[ah];s!==void 0&&n(!!s),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Mw()||xw()||$f()}}const hN=cN;var wy="@firebase/auth",Ty="1.12.0";/**
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
 */class dN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function fN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function pN(t){oi(new Tr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fw(t)},c=new kk(r,i,s,u);return Fk(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),oi(new Tr("auth-internal",e=>{const n=Dr(e.getProvider("auth").getImmediate());return(r=>new dN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sn(wy,Ty,fN(t)),sn(wy,Ty,"esm2020")}/**
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
 */const mN=5*60,gN=mw("authIdTokenMaxAge")||mN;let Iy=null;const yN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>gN)return;const i=n==null?void 0:n.token;Iy!==i&&(Iy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function _N(t=Uf()){const e=Mu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Mk(t,{popupRedirectResolver:hN,persistence:[TP,cP,Qw]}),r=mw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=yN(s.toString());aP(n,o,()=>o(n.currentUser)),oP(n,l=>o(l))}}const i=dw("auth");return i&&Uk(n,`http://${i}`),n}function vN(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Pk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=on("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",vN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});pN("Browser");var Sy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _r,nT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function I(){}I.prototype=y.prototype,w.F=y.prototype,w.prototype=new I,w.prototype.constructor=w,w.D=function(R,A,N){for(var S=Array(arguments.length-2),ze=2;ze<arguments.length;ze++)S[ze-2]=arguments[ze];return y.prototype[A].apply(R,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,y,I){I||(I=0);const R=Array(16);if(typeof y=="string")for(var A=0;A<16;++A)R[A]=y.charCodeAt(I++)|y.charCodeAt(I++)<<8|y.charCodeAt(I++)<<16|y.charCodeAt(I++)<<24;else for(A=0;A<16;++A)R[A]=y[I++]|y[I++]<<8|y[I++]<<16|y[I++]<<24;y=w.g[0],I=w.g[1],A=w.g[2];let N=w.g[3],S;S=y+(N^I&(A^N))+R[0]+3614090360&4294967295,y=I+(S<<7&4294967295|S>>>25),S=N+(A^y&(I^A))+R[1]+3905402710&4294967295,N=y+(S<<12&4294967295|S>>>20),S=A+(I^N&(y^I))+R[2]+606105819&4294967295,A=N+(S<<17&4294967295|S>>>15),S=I+(y^A&(N^y))+R[3]+3250441966&4294967295,I=A+(S<<22&4294967295|S>>>10),S=y+(N^I&(A^N))+R[4]+4118548399&4294967295,y=I+(S<<7&4294967295|S>>>25),S=N+(A^y&(I^A))+R[5]+1200080426&4294967295,N=y+(S<<12&4294967295|S>>>20),S=A+(I^N&(y^I))+R[6]+2821735955&4294967295,A=N+(S<<17&4294967295|S>>>15),S=I+(y^A&(N^y))+R[7]+4249261313&4294967295,I=A+(S<<22&4294967295|S>>>10),S=y+(N^I&(A^N))+R[8]+1770035416&4294967295,y=I+(S<<7&4294967295|S>>>25),S=N+(A^y&(I^A))+R[9]+2336552879&4294967295,N=y+(S<<12&4294967295|S>>>20),S=A+(I^N&(y^I))+R[10]+4294925233&4294967295,A=N+(S<<17&4294967295|S>>>15),S=I+(y^A&(N^y))+R[11]+2304563134&4294967295,I=A+(S<<22&4294967295|S>>>10),S=y+(N^I&(A^N))+R[12]+1804603682&4294967295,y=I+(S<<7&4294967295|S>>>25),S=N+(A^y&(I^A))+R[13]+4254626195&4294967295,N=y+(S<<12&4294967295|S>>>20),S=A+(I^N&(y^I))+R[14]+2792965006&4294967295,A=N+(S<<17&4294967295|S>>>15),S=I+(y^A&(N^y))+R[15]+1236535329&4294967295,I=A+(S<<22&4294967295|S>>>10),S=y+(A^N&(I^A))+R[1]+4129170786&4294967295,y=I+(S<<5&4294967295|S>>>27),S=N+(I^A&(y^I))+R[6]+3225465664&4294967295,N=y+(S<<9&4294967295|S>>>23),S=A+(y^I&(N^y))+R[11]+643717713&4294967295,A=N+(S<<14&4294967295|S>>>18),S=I+(N^y&(A^N))+R[0]+3921069994&4294967295,I=A+(S<<20&4294967295|S>>>12),S=y+(A^N&(I^A))+R[5]+3593408605&4294967295,y=I+(S<<5&4294967295|S>>>27),S=N+(I^A&(y^I))+R[10]+38016083&4294967295,N=y+(S<<9&4294967295|S>>>23),S=A+(y^I&(N^y))+R[15]+3634488961&4294967295,A=N+(S<<14&4294967295|S>>>18),S=I+(N^y&(A^N))+R[4]+3889429448&4294967295,I=A+(S<<20&4294967295|S>>>12),S=y+(A^N&(I^A))+R[9]+568446438&4294967295,y=I+(S<<5&4294967295|S>>>27),S=N+(I^A&(y^I))+R[14]+3275163606&4294967295,N=y+(S<<9&4294967295|S>>>23),S=A+(y^I&(N^y))+R[3]+4107603335&4294967295,A=N+(S<<14&4294967295|S>>>18),S=I+(N^y&(A^N))+R[8]+1163531501&4294967295,I=A+(S<<20&4294967295|S>>>12),S=y+(A^N&(I^A))+R[13]+2850285829&4294967295,y=I+(S<<5&4294967295|S>>>27),S=N+(I^A&(y^I))+R[2]+4243563512&4294967295,N=y+(S<<9&4294967295|S>>>23),S=A+(y^I&(N^y))+R[7]+1735328473&4294967295,A=N+(S<<14&4294967295|S>>>18),S=I+(N^y&(A^N))+R[12]+2368359562&4294967295,I=A+(S<<20&4294967295|S>>>12),S=y+(I^A^N)+R[5]+4294588738&4294967295,y=I+(S<<4&4294967295|S>>>28),S=N+(y^I^A)+R[8]+2272392833&4294967295,N=y+(S<<11&4294967295|S>>>21),S=A+(N^y^I)+R[11]+1839030562&4294967295,A=N+(S<<16&4294967295|S>>>16),S=I+(A^N^y)+R[14]+4259657740&4294967295,I=A+(S<<23&4294967295|S>>>9),S=y+(I^A^N)+R[1]+2763975236&4294967295,y=I+(S<<4&4294967295|S>>>28),S=N+(y^I^A)+R[4]+1272893353&4294967295,N=y+(S<<11&4294967295|S>>>21),S=A+(N^y^I)+R[7]+4139469664&4294967295,A=N+(S<<16&4294967295|S>>>16),S=I+(A^N^y)+R[10]+3200236656&4294967295,I=A+(S<<23&4294967295|S>>>9),S=y+(I^A^N)+R[13]+681279174&4294967295,y=I+(S<<4&4294967295|S>>>28),S=N+(y^I^A)+R[0]+3936430074&4294967295,N=y+(S<<11&4294967295|S>>>21),S=A+(N^y^I)+R[3]+3572445317&4294967295,A=N+(S<<16&4294967295|S>>>16),S=I+(A^N^y)+R[6]+76029189&4294967295,I=A+(S<<23&4294967295|S>>>9),S=y+(I^A^N)+R[9]+3654602809&4294967295,y=I+(S<<4&4294967295|S>>>28),S=N+(y^I^A)+R[12]+3873151461&4294967295,N=y+(S<<11&4294967295|S>>>21),S=A+(N^y^I)+R[15]+530742520&4294967295,A=N+(S<<16&4294967295|S>>>16),S=I+(A^N^y)+R[2]+3299628645&4294967295,I=A+(S<<23&4294967295|S>>>9),S=y+(A^(I|~N))+R[0]+4096336452&4294967295,y=I+(S<<6&4294967295|S>>>26),S=N+(I^(y|~A))+R[7]+1126891415&4294967295,N=y+(S<<10&4294967295|S>>>22),S=A+(y^(N|~I))+R[14]+2878612391&4294967295,A=N+(S<<15&4294967295|S>>>17),S=I+(N^(A|~y))+R[5]+4237533241&4294967295,I=A+(S<<21&4294967295|S>>>11),S=y+(A^(I|~N))+R[12]+1700485571&4294967295,y=I+(S<<6&4294967295|S>>>26),S=N+(I^(y|~A))+R[3]+2399980690&4294967295,N=y+(S<<10&4294967295|S>>>22),S=A+(y^(N|~I))+R[10]+4293915773&4294967295,A=N+(S<<15&4294967295|S>>>17),S=I+(N^(A|~y))+R[1]+2240044497&4294967295,I=A+(S<<21&4294967295|S>>>11),S=y+(A^(I|~N))+R[8]+1873313359&4294967295,y=I+(S<<6&4294967295|S>>>26),S=N+(I^(y|~A))+R[15]+4264355552&4294967295,N=y+(S<<10&4294967295|S>>>22),S=A+(y^(N|~I))+R[6]+2734768916&4294967295,A=N+(S<<15&4294967295|S>>>17),S=I+(N^(A|~y))+R[13]+1309151649&4294967295,I=A+(S<<21&4294967295|S>>>11),S=y+(A^(I|~N))+R[4]+4149444226&4294967295,y=I+(S<<6&4294967295|S>>>26),S=N+(I^(y|~A))+R[11]+3174756917&4294967295,N=y+(S<<10&4294967295|S>>>22),S=A+(y^(N|~I))+R[2]+718787259&4294967295,A=N+(S<<15&4294967295|S>>>17),S=I+(N^(A|~y))+R[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(A+(S<<21&4294967295|S>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+N&4294967295}r.prototype.v=function(w,y){y===void 0&&(y=w.length);const I=y-this.blockSize,R=this.C;let A=this.h,N=0;for(;N<y;){if(A==0)for(;N<=I;)i(this,w,N),N+=this.blockSize;if(typeof w=="string"){for(;N<y;)if(R[A++]=w.charCodeAt(N++),A==this.blockSize){i(this,R),A=0;break}}else for(;N<y;)if(R[A++]=w[N++],A==this.blockSize){i(this,R),A=0;break}}this.h=A,this.o+=y},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;y=this.o*8;for(var I=w.length-8;I<w.length;++I)w[I]=y&255,y/=256;for(this.v(w),w=Array(16),y=0,I=0;I<4;++I)for(let R=0;R<32;R+=8)w[y++]=this.g[I]>>>R&255;return w};function s(w,y){var I=l;return Object.prototype.hasOwnProperty.call(I,w)?I[w]:I[w]=y(w)}function o(w,y){this.h=y;const I=[];let R=!0;for(let A=w.length-1;A>=0;A--){const N=w[A]|0;R&&N==y||(I[A]=N,R=!1)}this.g=I}var l={};function u(w){return-128<=w&&w<128?s(w,function(y){return new o([y|0],y<0?-1:0)}):new o([w|0],w<0?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return p;if(w<0)return P(c(-w));const y=[];let I=1;for(let R=0;w>=I;R++)y[R]=w/I|0,I*=4294967296;return new o(y,0)}function d(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return P(d(w.substring(1),y));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=c(Math.pow(y,8));let R=p;for(let N=0;N<w.length;N+=8){var A=Math.min(8,w.length-N);const S=parseInt(w.substring(N,N+A),y);A<8?(A=c(Math.pow(y,A)),R=R.j(A).add(c(S))):(R=R.j(I),R=R.add(c(S)))}return R}var p=u(0),m=u(1),v=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-P(this).m();let w=0,y=1;for(let I=0;I<this.g.length;I++){const R=this.i(I);w+=(R>=0?R:4294967296+R)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(C(this))return"0";if(k(this))return"-"+P(this).toString(w);const y=c(Math.pow(w,6));var I=this;let R="";for(;;){const A=V(I,y).g;I=E(I,A.j(y));let N=((I.g.length>0?I.g[0]:I.h)>>>0).toString(w);if(I=A,C(I))return N+R;for(;N.length<6;)N="0"+N;R=N+R}},t.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function C(w){if(w.h!=0)return!1;for(let y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function k(w){return w.h==-1}t.l=function(w){return w=E(this,w),k(w)?-1:C(w)?0:1};function P(w){const y=w.g.length,I=[];for(let R=0;R<y;R++)I[R]=~w.g[R];return new o(I,~w.h).add(m)}t.abs=function(){return k(this)?P(this):this},t.add=function(w){const y=Math.max(this.g.length,w.g.length),I=[];let R=0;for(let A=0;A<=y;A++){let N=R+(this.i(A)&65535)+(w.i(A)&65535),S=(N>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);R=S>>>16,N&=65535,S&=65535,I[A]=S<<16|N}return new o(I,I[I.length-1]&-2147483648?-1:0)};function E(w,y){return w.add(P(y))}t.j=function(w){if(C(this)||C(w))return p;if(k(this))return k(w)?P(this).j(P(w)):P(P(this).j(w));if(k(w))return P(this.j(P(w)));if(this.l(v)<0&&w.l(v)<0)return c(this.m()*w.m());const y=this.g.length+w.g.length,I=[];for(var R=0;R<2*y;R++)I[R]=0;for(R=0;R<this.g.length;R++)for(let A=0;A<w.g.length;A++){const N=this.i(R)>>>16,S=this.i(R)&65535,ze=w.i(A)>>>16,vn=w.i(A)&65535;I[2*R+2*A]+=S*vn,_(I,2*R+2*A),I[2*R+2*A+1]+=N*vn,_(I,2*R+2*A+1),I[2*R+2*A+1]+=S*ze,_(I,2*R+2*A+1),I[2*R+2*A+2]+=N*ze,_(I,2*R+2*A+2)}for(w=0;w<y;w++)I[w]=I[2*w+1]<<16|I[2*w];for(w=y;w<2*y;w++)I[w]=0;return new o(I,0)};function _(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function T(w,y){this.g=w,this.h=y}function V(w,y){if(C(y))throw Error("division by zero");if(C(w))return new T(p,p);if(k(w))return y=V(P(w),y),new T(P(y.g),P(y.h));if(k(y))return y=V(w,P(y)),new T(P(y.g),y.h);if(w.g.length>30){if(k(w)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var I=m,R=y;R.l(w)<=0;)I=F(I),R=F(R);var A=j(I,1),N=j(R,1);for(R=j(R,2),I=j(I,2);!C(R);){var S=N.add(R);S.l(w)<=0&&(A=A.add(I),N=S),R=j(R,1),I=j(I,1)}return y=E(w,A.j(y)),new T(A,y)}for(A=p;w.l(y)>=0;){for(I=Math.max(1,Math.floor(w.m()/y.m())),R=Math.ceil(Math.log(I)/Math.LN2),R=R<=48?1:Math.pow(2,R-48),N=c(I),S=N.j(y);k(S)||S.l(w)>0;)I-=R,N=c(I),S=N.j(y);C(N)&&(N=m),A=A.add(N),w=E(w,S)}return new T(A,w)}t.B=function(w){return V(this,w).h},t.and=function(w){const y=Math.max(this.g.length,w.g.length),I=[];for(let R=0;R<y;R++)I[R]=this.i(R)&w.i(R);return new o(I,this.h&w.h)},t.or=function(w){const y=Math.max(this.g.length,w.g.length),I=[];for(let R=0;R<y;R++)I[R]=this.i(R)|w.i(R);return new o(I,this.h|w.h)},t.xor=function(w){const y=Math.max(this.g.length,w.g.length),I=[];for(let R=0;R<y;R++)I[R]=this.i(R)^w.i(R);return new o(I,this.h^w.h)};function F(w){const y=w.g.length+1,I=[];for(let R=0;R<y;R++)I[R]=w.i(R)<<1|w.i(R-1)>>>31;return new o(I,w.h)}function j(w,y){const I=y>>5;y%=32;const R=w.g.length-I,A=[];for(let N=0;N<R;N++)A[N]=y>0?w.i(N+I)>>>y|w.i(N+I+1)<<32-y:w.i(N+I);return new o(A,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,nT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,_r=o}).apply(typeof Sy<"u"?Sy:typeof self<"u"?self:typeof window<"u"?window:{});var Ka=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rT,no,iT,_l,yd,sT,oT,aT;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ka=="object"&&Ka];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var x=a[g];if(!(x in f))break e;f=f[x]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var f=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&f.push([g,h[g]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,f){return a.call.apply(a.bind,arguments)}function c(a,h,f){return c=u,c.apply(null,arguments)}function d(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function f(){}f.prototype=h.prototype,a.Z=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(g,x,D){for(var z=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)z[Z-2]=arguments[Z];return h.prototype[x].apply(g,z)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function v(a){const h=a.length;if(h>0){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function C(a,h){for(let g=1;g<arguments.length;g++){const x=arguments[g];var f=typeof x;if(f=f!="object"?f:x?Array.isArray(x)?"array":f:"null",f=="array"||f=="object"&&typeof x.length=="number"){f=a.length||0;const D=x.length||0;a.length=f+D;for(let z=0;z<D;z++)a[f+z]=x[z]}else a.push(x)}}class k{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function P(a){o.setTimeout(()=>{throw a},0)}function E(){var a=w;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class _{constructor(){this.h=this.g=null}add(h,f){const g=T.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var T=new k(()=>new V,a=>a.reset());class V{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let F,j=!1,w=new _,y=()=>{const a=Promise.resolve(void 0);F=()=>{a.then(I)}};function I(){for(var a;a=E();){try{a.h.call(a.g)}catch(f){P(f)}var h=T;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}j=!1}function R(){this.u=this.u,this.C=this.C}R.prototype.u=!1,R.prototype.dispose=function(){this.u||(this.u=!0,this.N())},R.prototype[Symbol.dispose]=function(){this.dispose()},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var N=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,h),o.removeEventListener("test",f,h)}catch{}return a}();function S(a){return/^[\s\xa0]*$/.test(a)}function ze(a,h){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(ze,A),ze.prototype.init=function(a,h){const f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ze.Z.h.call(this)},ze.prototype.h=function(){ze.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var vn="closure_listenable_"+(Math.random()*1e6|0),Ts=0;function Is(a,h,f,g,x){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=x,this.key=++Ts,this.da=this.fa=!1}function $(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Q(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function J(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function me(a){const h={};for(const f in a)h[f]=a[f];return h}const Re="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function br(a,h){let f,g;for(let x=1;x<arguments.length;x++){g=arguments[x];for(f in g)a[f]=g[f];for(let D=0;D<Re.length;D++)f=Re[D],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function Rt(a){this.src=a,this.g={},this.h=0}Rt.prototype.add=function(a,h,f,g,x){const D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);const z=bt(a,h,g,x);return z>-1?(h=a[z],f||(h.fa=!1)):(h=new Is(h,this.src,D,!!g,x),h.fa=f,a.push(h)),h};function Mr(a,h){const f=h.type;if(f in a.g){var g=a.g[f],x=Array.prototype.indexOf.call(g,h,void 0),D;(D=x>=0)&&Array.prototype.splice.call(g,x,1),D&&($(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function bt(a,h,f,g){for(let x=0;x<a.length;++x){const D=a[x];if(!D.da&&D.listener==h&&D.capture==!!f&&D.ha==g)return x}return-1}var zn="closure_lm_"+(Math.random()*1e6|0),sc={};function Lp(a,h,f,g,x){if(Array.isArray(h)){for(let D=0;D<h.length;D++)Lp(a,h[D],f,g,x);return null}return f=Fp(f),a&&a[vn]?a.J(h,f,l(g)?!!g.capture:!1,x):UI(a,h,f,!1,g,x)}function UI(a,h,f,g,x,D){if(!h)throw Error("Invalid event type");const z=l(x)?!!x.capture:!!x;let Z=ac(a);if(Z||(a[zn]=Z=new Rt(a)),f=Z.add(h,f,g,z,D),f.proxy)return f;if(g=jI(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)N||(x=z),x===void 0&&(x=!1),a.addEventListener(h.toString(),g,x);else if(a.attachEvent)a.attachEvent(Mp(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function jI(){function a(f){return h.call(a.src,a.listener,f)}const h=zI;return a}function bp(a,h,f,g,x){if(Array.isArray(h))for(var D=0;D<h.length;D++)bp(a,h[D],f,g,x);else g=l(g)?!!g.capture:!!g,f=Fp(f),a&&a[vn]?(a=a.i,D=String(h).toString(),D in a.g&&(h=a.g[D],f=bt(h,f,g,x),f>-1&&($(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete a.g[D],a.h--)))):a&&(a=ac(a))&&(h=a.g[h.toString()],a=-1,h&&(a=bt(h,f,g,x)),(f=a>-1?h[a]:null)&&oc(f))}function oc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[vn])Mr(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(Mp(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=ac(h))?(Mr(f,a),f.h==0&&(f.src=null,h[zn]=null)):$(a)}}}function Mp(a){return a in sc?sc[a]:sc[a]="on"+a}function zI(a,h){if(a.da)a=!0;else{h=new ze(h,this);const f=a.listener,g=a.ha||a.src;a.fa&&oc(a),a=f.call(g,h)}return a}function ac(a){return a=a[zn],a instanceof Rt?a:null}var lc="__closure_events_fn_"+(Math.random()*1e9>>>0);function Fp(a){return typeof a=="function"?a:(a[lc]||(a[lc]=function(h){return a.handleEvent(h)}),a[lc])}function Ke(){R.call(this),this.i=new Rt(this),this.M=this,this.G=null}p(Ke,R),Ke.prototype[vn]=!0,Ke.prototype.removeEventListener=function(a,h,f,g){bp(this,a,h,f,g)};function rt(a,h){var f,g=a.G;if(g)for(f=[];g;g=g.G)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new A(h,a);else if(h instanceof A)h.target=h.target||a;else{var x=h;h=new A(g,a),br(h,x)}x=!0;let D,z;if(f)for(z=f.length-1;z>=0;z--)D=h.g=f[z],x=ya(D,g,!0,h)&&x;if(D=h.g=a,x=ya(D,g,!0,h)&&x,x=ya(D,g,!1,h)&&x,f)for(z=0;z<f.length;z++)D=h.g=f[z],x=ya(D,g,!1,h)&&x}Ke.prototype.N=function(){if(Ke.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const f=a.g[h];for(let g=0;g<f.length;g++)$(f[g]);delete a.g[h],a.h--}}this.G=null},Ke.prototype.J=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},Ke.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function ya(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let x=!0;for(let D=0;D<h.length;++D){const z=h[D];if(z&&!z.da&&z.capture==f){const Z=z.listener,De=z.ha||z.src;z.fa&&Mr(a.i,z),x=Z.call(De,g)!==!1&&x}}return x&&!g.defaultPrevented}function BI(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Up(a){a.g=BI(()=>{a.g=null,a.i&&(a.i=!1,Up(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class $I extends R{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Up(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ss(a){R.call(this),this.h=a,this.g={}}p(Ss,R);var jp=[];function zp(a){Q(a.g,function(h,f){this.g.hasOwnProperty(f)&&oc(h)},a),a.g={}}Ss.prototype.N=function(){Ss.Z.N.call(this),zp(this)},Ss.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var uc=o.JSON.stringify,HI=o.JSON.parse,WI=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Bp(){}function $p(){}var Rs={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function cc(){A.call(this,"d")}p(cc,A);function hc(){A.call(this,"c")}p(hc,A);var Fr={},Hp=null;function _a(){return Hp=Hp||new Ke}Fr.Ia="serverreachability";function Wp(a){A.call(this,Fr.Ia,a)}p(Wp,A);function As(a){const h=_a();rt(h,new Wp(h))}Fr.STAT_EVENT="statevent";function qp(a,h){A.call(this,Fr.STAT_EVENT,a),this.stat=h}p(qp,A);function it(a){const h=_a();rt(h,new qp(h,a))}Fr.Ja="timingevent";function Gp(a,h){A.call(this,Fr.Ja,a),this.size=h}p(Gp,A);function Cs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function ks(){this.g=!0}ks.prototype.ua=function(){this.g=!1};function qI(a,h,f,g,x,D){a.info(function(){if(a.g)if(D){var z="",Z=D.split("&");for(let le=0;le<Z.length;le++){var De=Z[le].split("=");if(De.length>1){const Me=De[0];De=De[1];const Xt=Me.split("_");z=Xt.length>=2&&Xt[1]=="type"?z+(Me+"="+De+"&"):z+(Me+"=redacted&")}}}else z=null;else z=D;return"XMLHTTP REQ ("+g+") [attempt "+x+"]: "+h+`
`+f+`
`+z})}function GI(a,h,f,g,x,D,z){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+x+"]: "+h+`
`+f+`
`+D+" "+z})}function vi(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+QI(a,f)+(g?" "+g:"")})}function KI(a,h){a.info(function(){return"TIMEOUT: "+h})}ks.prototype.info=function(){};function QI(a,h){if(!a.g)return h;if(!h)return null;try{const D=JSON.parse(h);if(D){for(a=0;a<D.length;a++)if(Array.isArray(D[a])){var f=D[a];if(!(f.length<2)){var g=f[1];if(Array.isArray(g)&&!(g.length<1)){var x=g[0];if(x!="noop"&&x!="stop"&&x!="close")for(let z=1;z<g.length;z++)g[z]=""}}}}return uc(D)}catch{return h}}var va={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Kp={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Qp;function dc(){}p(dc,Bp),dc.prototype.g=function(){return new XMLHttpRequest},Qp=new dc;function Ps(a){return encodeURIComponent(String(a))}function YI(a){var h=1;a=a.split(":");const f=[];for(;h>0&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function Bn(a,h,f,g){this.j=a,this.i=h,this.l=f,this.S=g||1,this.V=new Ss(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Yp}function Yp(){this.i=null,this.g="",this.h=!1}var Xp={},fc={};function pc(a,h,f){a.M=1,a.A=wa(Yt(h)),a.u=f,a.R=!0,Jp(a,null)}function Jp(a,h){a.F=Date.now(),Ea(a),a.B=Yt(a.A);var f=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),hm(f.i,"t",g),a.C=0,f=a.j.L,a.h=new Yp,a.g=Pm(a.j,f?h:null,!a.u),a.P>0&&(a.O=new $I(c(a.Y,a,a.g),a.P)),h=a.V,f=a.g,g=a.ba;var x="readystatechange";Array.isArray(x)||(x&&(jp[0]=x.toString()),x=jp);for(let D=0;D<x.length;D++){const z=Lp(f,x[D],g||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.J?me(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),As(),qI(a.i,a.v,a.B,a.l,a.S,a.u)}Bn.prototype.ba=function(a){a=a.target;const h=this.O;h&&Wn(a)==3?h.j():this.Y(a)},Bn.prototype.Y=function(a){try{if(a==this.g)e:{const Z=Wn(this.g),De=this.g.ya(),le=this.g.ca();if(!(Z<3)&&(Z!=3||this.g&&(this.h.h||this.g.la()||_m(this.g)))){this.K||Z!=4||De==7||(De==8||le<=0?As(3):As(2)),mc(this);var h=this.g.ca();this.X=h;var f=XI(this);if(this.o=h==200,GI(this.i,this.v,this.B,this.l,this.S,Z,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,x=this.g;if((g=x.g?x.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(g)){var D=g;break t}}D=null}if(a=D)vi(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,gc(this,a);else{this.o=!1,this.m=3,it(12),Ur(this),Ns(this);break e}}if(this.R){a=!0;let Me;for(;!this.K&&this.C<f.length;)if(Me=JI(this,f),Me==fc){Z==4&&(this.m=4,it(14),a=!1),vi(this.i,this.l,null,"[Incomplete Response]");break}else if(Me==Xp){this.m=4,it(15),vi(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else vi(this.i,this.l,Me,null),gc(this,Me);if(Zp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Z!=4||f.length!=0||this.h.h||(this.m=1,it(16),a=!1),this.o=this.o&&a,!a)vi(this.i,this.l,f,"[Invalid Chunked Response]"),Ur(this),Ns(this);else if(f.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Sc(z),z.P=!0,it(11))}}else vi(this.i,this.l,f,null),gc(this,f);Z==4&&Ur(this),this.o&&!this.K&&(Z==4?Rm(this.j,this):(this.o=!1,Ea(this)))}else d0(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,it(12)):(this.m=0,it(13)),Ur(this),Ns(this)}}}catch{}finally{}};function XI(a){if(!Zp(a))return a.g.la();const h=_m(a.g);if(h==="")return"";let f="";const g=h.length,x=Wn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Ur(a),Ns(a),"";a.h.i=new o.TextDecoder}for(let D=0;D<g;D++)a.h.h=!0,f+=a.h.i.decode(h[D],{stream:!(x&&D==g-1)});return h.length=0,a.h.g+=f,a.C=0,a.h.g}function Zp(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function JI(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?fc:(f=Number(h.substring(f,g)),isNaN(f)?Xp:(g+=1,g+f>h.length?fc:(h=h.slice(g,g+f),a.C=g+f,h)))}Bn.prototype.cancel=function(){this.K=!0,Ur(this)};function Ea(a){a.T=Date.now()+a.H,em(a,a.H)}function em(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Cs(c(a.aa,a),h)}function mc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Bn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(KI(this.i,this.B),this.M!=2&&(As(),it(17)),Ur(this),this.m=2,Ns(this)):em(this,this.T-a)};function Ns(a){a.j.I==0||a.K||Rm(a.j,a)}function Ur(a){mc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,zp(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function gc(a,h){try{var f=a.j;if(f.I!=0&&(f.g==a||yc(f.h,a))){if(!a.L&&yc(f.h,a)&&f.I==3){try{var g=f.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var x=g;if(x[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)Aa(f),Sa(f);else break e;Ic(f),it(18)}}else f.xa=x[1],0<f.xa-f.K&&x[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Cs(c(f.Va,f),6e3));rm(f.h)<=1&&f.ta&&(f.ta=void 0)}else zr(f,11)}else if((a.L||f.g==a)&&Aa(f),!S(h))for(x=f.Ba.g.parse(h),h=0;h<x.length;h++){let le=x[h];const Me=le[0];if(!(Me<=f.K))if(f.K=Me,le=le[1],f.I==2)if(le[0]=="c"){f.M=le[1],f.ba=le[2];const Xt=le[3];Xt!=null&&(f.ka=Xt,f.j.info("VER="+f.ka));const Br=le[4];Br!=null&&(f.za=Br,f.j.info("SVER="+f.za));const qn=le[5];qn!=null&&typeof qn=="number"&&qn>0&&(g=1.5*qn,f.O=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Gn=a.g;if(Gn){const ka=Gn.g?Gn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ka){var D=g.h;D.g||ka.indexOf("spdy")==-1&&ka.indexOf("quic")==-1&&ka.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(_c(D,D.h),D.h=null))}if(g.G){const Rc=Gn.g?Gn.g.getResponseHeader("X-HTTP-Session-Id"):null;Rc&&(g.wa=Rc,he(g.J,g.G,Rc))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),g=f;var z=a;if(g.na=km(g,g.L?g.ba:null,g.W),z.L){im(g.h,z);var Z=z,De=g.O;De&&(Z.H=De),Z.D&&(mc(Z),Ea(Z)),g.g=z}else Im(g);f.i.length>0&&Ra(f)}else le[0]!="stop"&&le[0]!="close"||zr(f,7);else f.I==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?zr(f,7):Tc(f):le[0]!="noop"&&f.l&&f.l.qa(le),f.A=0)}}As(4)}catch{}}var ZI=class{constructor(a,h){this.g=a,this.map=h}};function tm(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function nm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function rm(a){return a.h?1:a.g?a.g.size:0}function yc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function _c(a,h){a.g?a.g.add(h):a.h=h}function im(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}tm.prototype.cancel=function(){if(this.i=sm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function sm(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.G);return h}return v(a.i)}var om=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function e0(a,h){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const g=a[f].indexOf("=");let x,D=null;g>=0?(x=a[f].substring(0,g),D=a[f].substring(g+1)):x=a[f],h(x,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function $n(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof $n?(this.l=a.l,xs(this,a.j),this.o=a.o,this.g=a.g,Ds(this,a.u),this.h=a.h,vc(this,dm(a.i)),this.m=a.m):a&&(h=String(a).match(om))?(this.l=!1,xs(this,h[1]||"",!0),this.o=Vs(h[2]||""),this.g=Vs(h[3]||"",!0),Ds(this,h[4]),this.h=Vs(h[5]||"",!0),vc(this,h[6]||"",!0),this.m=Vs(h[7]||"")):(this.l=!1,this.i=new Ls(null,this.l))}$n.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Os(h,am,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Os(h,am,!0),"@"),a.push(Ps(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Os(f,f.charAt(0)=="/"?r0:n0,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Os(f,s0)),a.join("")},$n.prototype.resolve=function(a){const h=Yt(this);let f=!!a.j;f?xs(h,a.j):f=!!a.o,f?h.o=a.o:f=!!a.g,f?h.g=a.g:f=a.u!=null;var g=a.h;if(f)Ds(h,a.u);else if(f=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var x=h.h.lastIndexOf("/");x!=-1&&(g=h.h.slice(0,x+1)+g)}if(x=g,x==".."||x==".")g="";else if(x.indexOf("./")!=-1||x.indexOf("/.")!=-1){g=x.lastIndexOf("/",0)==0,x=x.split("/");const D=[];for(let z=0;z<x.length;){const Z=x[z++];Z=="."?g&&z==x.length&&D.push(""):Z==".."?((D.length>1||D.length==1&&D[0]!="")&&D.pop(),g&&z==x.length&&D.push("")):(D.push(Z),g=!0)}g=D.join("/")}else g=x}return f?h.h=g:f=a.i.toString()!=="",f?vc(h,dm(a.i)):f=!!a.m,f&&(h.m=a.m),h};function Yt(a){return new $n(a)}function xs(a,h,f){a.j=f?Vs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ds(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function vc(a,h,f){h instanceof Ls?(a.i=h,o0(a.i,a.l)):(f||(h=Os(h,i0)),a.i=new Ls(h,a.l))}function he(a,h,f){a.i.set(h,f)}function wa(a){return he(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Vs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Os(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,t0),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function t0(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var am=/[#\/\?@]/g,n0=/[#\?:]/g,r0=/[#\?]/g,i0=/[#\?@]/g,s0=/#/g;function Ls(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function jr(a){a.g||(a.g=new Map,a.h=0,a.i&&e0(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Ls.prototype,t.add=function(a,h){jr(this),this.i=null,a=Ei(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function lm(a,h){jr(a),h=Ei(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function um(a,h){return jr(a),h=Ei(a,h),a.g.has(h)}t.forEach=function(a,h){jr(this),this.g.forEach(function(f,g){f.forEach(function(x){a.call(h,x,g,this)},this)},this)};function cm(a,h){jr(a);let f=[];if(typeof h=="string")um(a,h)&&(f=f.concat(a.g.get(Ei(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)f=f.concat(a[h]);return f}t.set=function(a,h){return jr(this),this.i=null,a=Ei(this,a),um(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=cm(this,a),a.length>0?String(a[0]):h):h};function hm(a,h,f){lm(a,h),f.length>0&&(a.i=null,a.g.set(Ei(a,h),v(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var f=h[g];const x=Ps(f);f=cm(this,f);for(let D=0;D<f.length;D++){let z=x;f[D]!==""&&(z+="="+Ps(f[D])),a.push(z)}}return this.i=a.join("&")};function dm(a){const h=new Ls;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Ei(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function o0(a,h){h&&!a.j&&(jr(a),a.i=null,a.g.forEach(function(f,g){const x=g.toLowerCase();g!=x&&(lm(this,g),hm(this,x,f))},a)),a.j=h}function a0(a,h){const f=new ks;if(o.Image){const g=new Image;g.onload=d(Hn,f,"TestLoadImage: loaded",!0,h,g),g.onerror=d(Hn,f,"TestLoadImage: error",!1,h,g),g.onabort=d(Hn,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=d(Hn,f,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function l0(a,h){const f=new ks,g=new AbortController,x=setTimeout(()=>{g.abort(),Hn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(x),D.ok?Hn(f,"TestPingServer: ok",!0,h):Hn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(x),Hn(f,"TestPingServer: error",!1,h)})}function Hn(a,h,f,g,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),g(f)}catch{}}function u0(){this.g=new WI}function Ec(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Ec,Bp),Ec.prototype.g=function(){return new Ta(this.i,this.h)};function Ta(a,h){Ke.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Ta,Ke),t=Ta.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Ms(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,bs(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ms(this)),this.g&&(this.readyState=3,Ms(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;fm(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function fm(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?bs(this):Ms(this),this.readyState==3&&fm(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,bs(this))},t.Na=function(a){this.g&&(this.response=a,bs(this))},t.ga=function(){this.g&&bs(this)};function bs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Ms(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Ms(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ta.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function pm(a){let h="";return Q(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function wc(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=pm(f),typeof a=="string"?f!=null&&Ps(f):he(a,h,f))}function Te(a){Ke.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Te,Ke);var c0=/^https?$/i,h0=["POST","PUT"];t=Te.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Qp.g(),this.g.onreadystatechange=m(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){mm(this,D);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var x in g)f.set(x,g[x]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())f.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),x=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(h0,h,void 0)>=0)||g||x||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,z]of f)this.g.setRequestHeader(D,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(D){mm(this,D)}};function mm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,gm(a),Ia(a)}function gm(a){a.A||(a.A=!0,rt(a,"complete"),rt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,rt(this,"complete"),rt(this,"abort"),Ia(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ia(this,!0)),Te.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?ym(this):this.Xa())},t.Xa=function(){ym(this)};function ym(a){if(a.h&&typeof s<"u"){if(a.v&&Wn(a)==4)setTimeout(a.Ca.bind(a),0);else if(rt(a,"readystatechange"),Wn(a)==4){a.h=!1;try{const D=a.ca();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=D===0){let z=String(a.D).match(om)[1]||null;!z&&o.self&&o.self.location&&(z=o.self.location.protocol.slice(0,-1)),g=!c0.test(z?z.toLowerCase():"")}f=g}if(f)rt(a,"complete"),rt(a,"success");else{a.o=6;try{var x=Wn(a)>2?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.ca()+"]",gm(a)}}finally{Ia(a)}}}}function Ia(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,h||rt(a,"ready");try{f.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Wn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Wn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),HI(h)}};function _m(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function d0(a){const h={};a=(a.g&&Wn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(S(a[g]))continue;var f=YI(a[g]);const x=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=h[x]||[];h[x]=D,D.push(f)}J(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fs(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function vm(a){this.za=0,this.i=[],this.j=new ks,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Fs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Fs("baseRetryDelayMs",5e3,a),this.Za=Fs("retryDelaySeedMs",1e4,a),this.Ta=Fs("forwardChannelMaxRetries",2,a),this.va=Fs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new tm(a&&a.concurrentRequestLimit),this.Ba=new u0,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=vm.prototype,t.ka=8,t.I=1,t.connect=function(a,h,f,g){it(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.J=km(this,null,this.W),Ra(this)};function Tc(a){if(Em(a),a.I==3){var h=a.V++,f=Yt(a.J);if(he(f,"SID",a.M),he(f,"RID",h),he(f,"TYPE","terminate"),Us(a,f),h=new Bn(a,a.j,h),h.M=2,h.A=wa(Yt(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=h.A,f=!0),f||(h.g=Pm(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Ea(h)}Cm(a)}function Sa(a){a.g&&(Sc(a),a.g.cancel(),a.g=null)}function Em(a){Sa(a),a.v&&(o.clearTimeout(a.v),a.v=null),Aa(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ra(a){if(!nm(a.h)&&!a.m){a.m=!0;var h=a.Ea;F||y(),j||(F(),j=!0),w.add(h,a),a.D=0}}function f0(a,h){return rm(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Cs(c(a.Ea,a,h),Am(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const x=new Bn(this,this.j,a);let D=this.o;if(this.U&&(D?(D=me(D),br(D,this.U)):D=this.U),this.u!==null||this.R||(x.J=D,D=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Tm(this,x,h),f=Yt(this.J),he(f,"RID",a),he(f,"CVER",22),this.G&&he(f,"X-HTTP-Session-Id",this.G),Us(this,f),D&&(this.R?h="headers="+Ps(pm(D))+"&"+h:this.u&&wc(f,this.u,D)),_c(this.h,x),this.Ra&&he(f,"TYPE","init"),this.S?(he(f,"$req",h),he(f,"SID","null"),x.U=!0,pc(x,f,null)):pc(x,f,h),this.I=2}}else this.I==3&&(a?wm(this,a):this.i.length==0||nm(this.h)||wm(this))};function wm(a,h){var f;h?f=h.l:f=a.V++;const g=Yt(a.J);he(g,"SID",a.M),he(g,"RID",f),he(g,"AID",a.K),Us(a,g),a.u&&a.o&&wc(g,a.u,a.o),f=new Bn(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Tm(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),_c(a.h,f),pc(f,g,h)}function Us(a,h){a.H&&Q(a.H,function(f,g){he(h,g,f)}),a.l&&Q({},function(f,g){he(h,g,f)})}function Tm(a,h,f){f=Math.min(a.i.length,f);const g=a.l?c(a.l.Ka,a.l,a):null;e:{var x=a.i;let Z=-1;for(;;){const De=["count="+f];Z==-1?f>0?(Z=x[0].g,De.push("ofs="+Z)):Z=0:De.push("ofs="+Z);let le=!0;for(let Me=0;Me<f;Me++){var D=x[Me].g;const Xt=x[Me].map;if(D-=Z,D<0)Z=Math.max(0,x[Me].g-100),le=!1;else try{D="req"+D+"_"||"";try{var z=Xt instanceof Map?Xt:Object.entries(Xt);for(const[Br,qn]of z){let Gn=qn;l(qn)&&(Gn=uc(qn)),De.push(D+Br+"="+encodeURIComponent(Gn))}}catch(Br){throw De.push(D+"type="+encodeURIComponent("_badmap")),Br}}catch{g&&g(Xt)}}if(le){z=De.join("&");break e}}z=void 0}return a=a.i.splice(0,f),h.G=a,z}function Im(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;F||y(),j||(F(),j=!0),w.add(h,a),a.A=0}}function Ic(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Cs(c(a.Da,a),Am(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Sm(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Cs(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,it(10),Sa(this),Sm(this))};function Sc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Sm(a){a.g=new Bn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Yt(a.na);he(h,"RID","rpc"),he(h,"SID",a.M),he(h,"AID",a.K),he(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&he(h,"TO",a.ia),he(h,"TYPE","xmlhttp"),Us(a,h),a.u&&a.o&&wc(h,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=wa(Yt(h)),f.u=null,f.R=!0,Jp(f,a)}t.Va=function(){this.C!=null&&(this.C=null,Sa(this),Ic(this),it(19))};function Aa(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Rm(a,h){var f=null;if(a.g==h){Aa(a),Sc(a),a.g=null;var g=2}else if(yc(a.h,h))f=h.G,im(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var x=a.D;g=_a(),rt(g,new Gp(g,f)),Ra(a)}else Im(a);else if(x=h.m,x==3||x==0&&h.X>0||!(g==1&&f0(a,h)||g==2&&Ic(a)))switch(f&&f.length>0&&(h=a.h,h.i=h.i.concat(f)),x){case 1:zr(a,5);break;case 4:zr(a,10);break;case 3:zr(a,6);break;default:zr(a,2)}}}function Am(a,h){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*h}function zr(a,h){if(a.j.info("Error code "+h),h==2){var f=c(a.bb,a),g=a.Ua;const x=!g;g=new $n(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||xs(g,"https"),wa(g),x?a0(g.toString(),f):l0(g.toString(),f)}else it(2);a.I=0,a.l&&a.l.pa(h),Cm(a),Em(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function Cm(a){if(a.I=0,a.ja=[],a.l){const h=sm(a.h);(h.length!=0||a.i.length!=0)&&(C(a.ja,h),C(a.ja,a.i),a.h.i.length=0,v(a.i),a.i.length=0),a.l.oa()}}function km(a,h,f){var g=f instanceof $n?Yt(f):new $n(f);if(g.g!="")h&&(g.g=h+"."+g.g),Ds(g,g.u);else{var x=o.location;g=x.protocol,h=h?h+"."+x.hostname:x.hostname,x=+x.port;const D=new $n(null);g&&xs(D,g),h&&(D.g=h),x&&Ds(D,x),f&&(D.h=f),g=D}return f=a.G,h=a.wa,f&&h&&he(g,f,h),he(g,"VER",a.ka),Us(a,g),g}function Pm(a,h,f){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Te(new Ec({ab:f})):new Te(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Nm(){}t=Nm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Ca(){}Ca.prototype.g=function(a,h){return new gt(a,h)};function gt(a,h){Ke.call(this),this.g=new vm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!S(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!S(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new wi(this)}p(gt,Ke),gt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},gt.prototype.close=function(){Tc(this.g)},gt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=uc(a),a=f);h.i.push(new ZI(h.Ya++,a)),h.I==3&&Ra(h)},gt.prototype.N=function(){this.g.l=null,delete this.j,Tc(this.g),delete this.g,gt.Z.N.call(this)};function xm(a){cc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(xm,cc);function Dm(){hc.call(this),this.status=1}p(Dm,hc);function wi(a){this.g=a}p(wi,Nm),wi.prototype.ra=function(){rt(this.g,"a")},wi.prototype.qa=function(a){rt(this.g,new xm(a))},wi.prototype.pa=function(a){rt(this.g,new Dm)},wi.prototype.oa=function(){rt(this.g,"b")},Ca.prototype.createWebChannel=Ca.prototype.g,gt.prototype.send=gt.prototype.o,gt.prototype.open=gt.prototype.m,gt.prototype.close=gt.prototype.close,aT=function(){return new Ca},oT=function(){return _a()},sT=Fr,yd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},va.NO_ERROR=0,va.TIMEOUT=8,va.HTTP_ERROR=6,_l=va,Kp.COMPLETE="complete",iT=Kp,$p.EventType=Rs,Rs.OPEN="a",Rs.CLOSE="b",Rs.ERROR="c",Rs.MESSAGE="d",Ke.prototype.listen=Ke.prototype.J,no=$p,Te.prototype.listenOnce=Te.prototype.K,Te.prototype.getLastError=Te.prototype.Ha,Te.prototype.getLastErrorCode=Te.prototype.ya,Te.prototype.getStatus=Te.prototype.ca,Te.prototype.getResponseJson=Te.prototype.La,Te.prototype.getResponseText=Te.prototype.la,Te.prototype.send=Te.prototype.ea,Te.prototype.setWithCredentials=Te.prototype.Fa,rT=Te}).apply(typeof Ka<"u"?Ka:typeof self<"u"?self:typeof window<"u"?window:{});const Ry="@firebase/firestore",Ay="4.9.3";/**
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
 */let Je=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Je.UNAUTHENTICATED=new Je(null),Je.GOOGLE_CREDENTIALS=new Je("google-credentials-uid"),Je.FIRST_PARTY=new Je("first-party-uid"),Je.MOCK_USER=new Je("mock-user");/**
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
 */let ys="12.7.0";/**
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
 */const ui=new Mf("@firebase/firestore");function Ii(){return ui.logLevel}function H(t,...e){if(ui.logLevel<=te.DEBUG){const n=e.map(Kf);ui.debug(`Firestore (${ys}): ${t}`,...n)}}function Mn(t,...e){if(ui.logLevel<=te.ERROR){const n=e.map(Kf);ui.error(`Firestore (${ys}): ${t}`,...n)}}function is(t,...e){if(ui.logLevel<=te.WARN){const n=e.map(Kf);ui.warn(`Firestore (${ys}): ${t}`,...n)}}function Kf(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function K(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,lT(t,r,n)}function lT(t,e,n){let r=`FIRESTORE (${ys}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Mn(r),new Error(r)}function oe(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||lT(e,i,r)}function X(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends gn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Pn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class uT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class EN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Je.UNAUTHENTICATED))}shutdown(){}}class wN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class TN{constructor(e){this.t=e,this.currentUser=Je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){oe(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Pn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Pn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Pn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string",31837,{l:r}),new uT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string",2055,{h:e}),new Je(e)}}class IN{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Je.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class SN{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new IN(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Cy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RN{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,_t(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){oe(this.o===void 0,3512);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Cy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Cy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function AN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Qf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=AN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function _d(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return lh(i)===lh(s)?ne(i,s):lh(i)?1:-1}return ne(t.length,e.length)}const CN=55296,kN=57343;function lh(t){const e=t.charCodeAt(0);return e>=CN&&e<=kN}function ss(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const ky="__name__";class en{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&K(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return en.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof en?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=en.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ne(e.length,n.length)}static compareSegments(e,n){const r=en.isNumericId(e),i=en.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?en.extractNumericId(e).compare(en.extractNumericId(n)):_d(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return _r.fromString(e.substring(4,e.length-2))}}class ue extends en{construct(e,n,r){return new ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ue(n)}static emptyPath(){return new ue([])}}const PN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends en{construct(e,n,r){return new He(e,n,r)}static isValidIdentifier(e){return PN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ky}static keyField(){return new He([ky])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new B(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new B(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new He(n)}static emptyPath(){return new He([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(ue.fromString(e))}static fromName(e){return new q(ue.fromString(e).popFirst(5))}static empty(){return new q(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new ue(e.slice()))}}/**
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
 */function cT(t,e,n){if(!n)throw new B(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function NN(t,e,n,r){if(e===!0&&r===!0)throw new B(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Py(t){if(!q.isDocumentKey(t))throw new B(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ny(t){if(q.isDocumentKey(t))throw new B(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function hT(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function zu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K(12329,{type:typeof t})}function xt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=zu(t);throw new B(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function xe(t,e){const n={typeString:t};return e&&(n.value=e),n}function ca(t,e){if(!hT(t))throw new B(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new B(L.INVALID_ARGUMENT,n);return!0}/**
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
 */const xy=-62135596800,Dy=1e6;class fe{static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Dy);return new fe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<xy)throw new B(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Dy}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:fe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ca(e,fe._jsonSchema))return new fe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-xy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}fe._jsonSchemaVersion="firestore/timestamp/1.0",fe._jsonSchema={type:xe("string",fe._jsonSchemaVersion),seconds:xe("number"),nanoseconds:xe("number")};/**
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
 */class Y{static fromTimestamp(e){return new Y(e)}static min(){return new Y(new fe(0,0))}static max(){return new Y(new fe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Bo=-1;function xN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new fe(n+1,0):new fe(n,r));return new Ir(i,q.empty(),e)}function DN(t){return new Ir(t.readTime,t.key,Bo)}class Ir{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ir(Y.min(),q.empty(),Bo)}static max(){return new Ir(Y.max(),q.empty(),Bo)}}function VN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
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
 */const ON="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class LN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function _s(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==ON)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(i=>i?b.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new b((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new b((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function bN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function vs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Bu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Bu.ce=-1;/**
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
 */const Yf=-1;function $u(t){return t==null}function iu(t){return t===0&&1/t==-1/0}function MN(t){return typeof t=="number"&&Number.isInteger(t)&&!iu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const dT="";function FN(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Vy(e)),e=UN(t.get(n),e);return Vy(e)}function UN(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case dT:n+="";break;default:n+=s}}return n}function Vy(t){return t+dT+""}/**
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
 */function Oy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Vr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function fT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class we{constructor(e,n){this.comparator=e,this.root=n||$e.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,$e.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$e.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qa(this.root,e,this.comparator,!0)}}class Qa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $e{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??$e.RED,this.left=i??$e.EMPTY,this.right=s??$e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new $e(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return $e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return $e.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw K(27949);return e+(this.isRed()?0:1)}}$e.EMPTY=null,$e.RED=!0,$e.BLACK=!1;$e.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new $e(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Le{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ly(this.data.getIterator())}getIteratorFrom(e){return new Ly(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Le)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Le(this.comparator);return n.data=e,n}}class Ly{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Et{constructor(e){this.fields=e,e.sort(He.comparator)}static empty(){return new Et([])}unionWith(e){let n=new Le(He.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Et(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ss(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class pT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new pT("Invalid base64 string: "+s):s}}(e);return new Ge(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ge(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const jN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Sr(t){if(oe(!!t,39018),typeof t=="string"){let e=0;const n=jN.exec(t);if(oe(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Rr(t){return typeof t=="string"?Ge.fromBase64String(t):Ge.fromUint8Array(t)}/**
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
 */const mT="server_timestamp",gT="__type__",yT="__previous_value__",_T="__local_write_time__";function Xf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[gT])==null?void 0:r.stringValue)===mT}function Hu(t){const e=t.mapValue.fields[yT];return Xf(e)?Hu(e):e}function $o(t){const e=Sr(t.mapValue.fields[_T].timestampValue);return new fe(e.seconds,e.nanos)}/**
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
 */class zN{constructor(e,n,r,i,s,o,l,u,c,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d}}const su="(default)";class Ho{constructor(e,n){this.projectId=e,this.database=n||su}static empty(){return new Ho("","")}get isDefaultDatabase(){return this.database===su}isEqual(e){return e instanceof Ho&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const vT="__type__",BN="__max__",Ya={mapValue:{}},ET="__vector__",ou="value";function Ar(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Xf(t)?4:HN(t)?9007199254740991:$N(t)?10:11:K(28295,{value:t})}function fn(t,e){if(t===e)return!0;const n=Ar(t);if(n!==Ar(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return $o(t).isEqual($o(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Sr(i.timestampValue),l=Sr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Rr(i.bytesValue).isEqual(Rr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ae(i.geoPointValue.latitude)===Ae(s.geoPointValue.latitude)&&Ae(i.geoPointValue.longitude)===Ae(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ae(i.integerValue)===Ae(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ae(i.doubleValue),l=Ae(s.doubleValue);return o===l?iu(o)===iu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ss(t.arrayValue.values||[],e.arrayValue.values||[],fn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Oy(o)!==Oy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!fn(o[u],l[u])))return!1;return!0}(t,e);default:return K(52216,{left:t})}}function Wo(t,e){return(t.values||[]).find(n=>fn(n,e))!==void 0}function os(t,e){if(t===e)return 0;const n=Ar(t),r=Ar(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ae(s.integerValue||s.doubleValue),u=Ae(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return by(t.timestampValue,e.timestampValue);case 4:return by($o(t),$o(e));case 5:return _d(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Rr(s),u=Rr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=ne(l[c],u[c]);if(d!==0)return d}return ne(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ne(Ae(s.latitude),Ae(o.latitude));return l!==0?l:ne(Ae(s.longitude),Ae(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return My(t.arrayValue,e.arrayValue);case 10:return function(s,o){var m,v,C,k;const l=s.fields||{},u=o.fields||{},c=(m=l[ou])==null?void 0:m.arrayValue,d=(v=u[ou])==null?void 0:v.arrayValue,p=ne(((C=c==null?void 0:c.values)==null?void 0:C.length)||0,((k=d==null?void 0:d.values)==null?void 0:k.length)||0);return p!==0?p:My(c,d)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ya.mapValue&&o===Ya.mapValue)return 0;if(s===Ya.mapValue)return 1;if(o===Ya.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=_d(u[p],d[p]);if(m!==0)return m;const v=os(l[u[p]],c[d[p]]);if(v!==0)return v}return ne(u.length,d.length)}(t.mapValue,e.mapValue);default:throw K(23264,{he:n})}}function by(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=Sr(t),r=Sr(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function My(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=os(n[i],r[i]);if(s)return s}return ne(n.length,r.length)}function as(t){return vd(t)}function vd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Sr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Rr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=vd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${vd(n.fields[o])}`;return i+"}"}(t.mapValue):K(61005,{value:t})}function vl(t){switch(Ar(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Hu(t);return e?16+vl(e):16;case 5:return 2*t.stringValue.length;case 6:return Rr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+vl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Vr(r.fields,(s,o)=>{i+=s.length+vl(o)}),i}(t.mapValue);default:throw K(13486,{value:t})}}function Fy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ed(t){return!!t&&"integerValue"in t}function Jf(t){return!!t&&"arrayValue"in t}function Uy(t){return!!t&&"nullValue"in t}function jy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function El(t){return!!t&&"mapValue"in t}function $N(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[vT])==null?void 0:r.stringValue)===ET}function _o(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Vr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=_o(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=_o(t.arrayValue.values[n]);return e}return{...t}}function HN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===BN}/**
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
 */class ht{constructor(e){this.value=e}static empty(){return new ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!El(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=_o(n)}setAll(e){let n=He.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=_o(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());El(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];El(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Vr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ht(_o(this.value))}}function wT(t){const e=[];return Vr(t.fields,(n,r)=>{const i=new He([n]);if(El(r)){const s=wT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Et(e)}/**
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
 */class et{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new et(e,0,Y.min(),Y.min(),Y.min(),ht.empty(),0)}static newFoundDocument(e,n,r,i){return new et(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new et(e,2,n,Y.min(),Y.min(),ht.empty(),0)}static newUnknownDocument(e,n){return new et(e,3,n,Y.min(),Y.min(),ht.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class au{constructor(e,n){this.position=e,this.inclusive=n}}function zy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=os(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function By(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!fn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class qo{constructor(e,n="asc"){this.field=e,this.dir=n}}function WN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class TT{}class Ne extends TT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new GN(e,n,r):n==="array-contains"?new YN(e,r):n==="in"?new XN(e,r):n==="not-in"?new JN(e,r):n==="array-contains-any"?new ZN(e,r):new Ne(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new KN(e,r):new QN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(os(n,this.value)):n!==null&&Ar(this.value)===Ar(n)&&this.matchesComparison(os(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qt extends TT{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Qt(e,n)}matches(e){return IT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function IT(t){return t.op==="and"}function ST(t){return qN(t)&&IT(t)}function qN(t){for(const e of t.filters)if(e instanceof Qt)return!1;return!0}function wd(t){if(t instanceof Ne)return t.field.canonicalString()+t.op.toString()+as(t.value);if(ST(t))return t.filters.map(e=>wd(e)).join(",");{const e=t.filters.map(n=>wd(n)).join(",");return`${t.op}(${e})`}}function RT(t,e){return t instanceof Ne?function(r,i){return i instanceof Ne&&r.op===i.op&&r.field.isEqual(i.field)&&fn(r.value,i.value)}(t,e):t instanceof Qt?function(r,i){return i instanceof Qt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&RT(o,i.filters[l]),!0):!1}(t,e):void K(19439)}function AT(t){return t instanceof Ne?function(n){return`${n.field.canonicalString()} ${n.op} ${as(n.value)}`}(t):t instanceof Qt?function(n){return n.op.toString()+" {"+n.getFilters().map(AT).join(" ,")+"}"}(t):"Filter"}class GN extends Ne{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class KN extends Ne{constructor(e,n){super(e,"in",n),this.keys=CT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class QN extends Ne{constructor(e,n){super(e,"not-in",n),this.keys=CT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function CT(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class YN extends Ne{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Jf(n)&&Wo(n.arrayValue,this.value)}}class XN extends Ne{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Wo(this.value.arrayValue,n)}}class JN extends Ne{constructor(e,n){super(e,"not-in",n)}matches(e){if(Wo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Wo(this.value.arrayValue,n)}}class ZN extends Ne{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Jf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Wo(this.value.arrayValue,r))}}/**
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
 */class ex{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function $y(t,e=null,n=[],r=[],i=null,s=null,o=null){return new ex(t,e,n,r,i,s,o)}function Zf(t){const e=X(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>wd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),$u(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>as(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>as(r)).join(",")),e.Te=n}return e.Te}function ep(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!WN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!RT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!By(t.startAt,e.startAt)&&By(t.endAt,e.endAt)}function Td(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Es{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function tx(t,e,n,r,i,s,o,l){return new Es(t,e,n,r,i,s,o,l)}function Wu(t){return new Es(t)}function Hy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function kT(t){return t.collectionGroup!==null}function vo(t){const e=X(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Le(He.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new qo(s,r))}),n.has(He.keyField().canonicalString())||e.Ie.push(new qo(He.keyField(),r))}return e.Ie}function ln(t){const e=X(t);return e.Ee||(e.Ee=nx(e,vo(t))),e.Ee}function nx(t,e){if(t.limitType==="F")return $y(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new qo(i.field,s)});const n=t.endAt?new au(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new au(t.startAt.position,t.startAt.inclusive):null;return $y(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Id(t,e){const n=t.filters.concat([e]);return new Es(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Sd(t,e,n){return new Es(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function qu(t,e){return ep(ln(t),ln(e))&&t.limitType===e.limitType}function PT(t){return`${Zf(ln(t))}|lt:${t.limitType}`}function Si(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>AT(i)).join(", ")}]`),$u(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>as(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>as(i)).join(",")),`Target(${r})`}(ln(t))}; limitType=${t.limitType})`}function Gu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of vo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=zy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,vo(r),i)||r.endAt&&!function(o,l,u){const c=zy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,vo(r),i))}(t,e)}function rx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function NT(t){return(e,n)=>{let r=!1;for(const i of vo(t)){const s=ix(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function ix(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?os(u,c):K(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K(19790,{direction:t.dir})}}/**
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
 */class yi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Vr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return fT(this.inner)}size(){return this.innerSize}}/**
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
 */const sx=new we(q.comparator);function Fn(){return sx}const xT=new we(q.comparator);function ro(...t){let e=xT;for(const n of t)e=e.insert(n.key,n);return e}function DT(t){let e=xT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Qr(){return Eo()}function VT(){return Eo()}function Eo(){return new yi(t=>t.toString(),(t,e)=>t.isEqual(e))}const ox=new we(q.comparator),ax=new Le(q.comparator);function re(...t){let e=ax;for(const n of t)e=e.add(n);return e}const lx=new Le(ne);function ux(){return lx}/**
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
 */function tp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:iu(e)?"-0":e}}function OT(t){return{integerValue:""+t}}function cx(t,e){return MN(e)?OT(e):tp(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Ku{constructor(){this._=void 0}}function hx(t,e,n){return t instanceof lu?function(i,s){const o={fields:{[gT]:{stringValue:mT},[_T]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Xf(s)&&(s=Hu(s)),s&&(o.fields[yT]=s),{mapValue:o}}(n,e):t instanceof Go?bT(t,e):t instanceof Ko?MT(t,e):function(i,s){const o=LT(i,s),l=Wy(o)+Wy(i.Ae);return Ed(o)&&Ed(i.Ae)?OT(l):tp(i.serializer,l)}(t,e)}function dx(t,e,n){return t instanceof Go?bT(t,e):t instanceof Ko?MT(t,e):n}function LT(t,e){return t instanceof uu?function(r){return Ed(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class lu extends Ku{}class Go extends Ku{constructor(e){super(),this.elements=e}}function bT(t,e){const n=FT(e);for(const r of t.elements)n.some(i=>fn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ko extends Ku{constructor(e){super(),this.elements=e}}function MT(t,e){let n=FT(e);for(const r of t.elements)n=n.filter(i=>!fn(i,r));return{arrayValue:{values:n}}}class uu extends Ku{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Wy(t){return Ae(t.integerValue||t.doubleValue)}function FT(t){return Jf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function fx(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Go&&i instanceof Go||r instanceof Ko&&i instanceof Ko?ss(r.elements,i.elements,fn):r instanceof uu&&i instanceof uu?fn(r.Ae,i.Ae):r instanceof lu&&i instanceof lu}(t.transform,e.transform)}class px{constructor(e,n){this.version=e,this.transformResults=n}}class un{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new un}static exists(e){return new un(void 0,e)}static updateTime(e){return new un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Qu{}function UT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new zT(t.key,un.none()):new ha(t.key,t.data,un.none());{const n=t.data,r=ht.empty();let i=new Le(He.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Or(t.key,r,new Et(i.toArray()),un.none())}}function mx(t,e,n){t instanceof ha?function(i,s,o){const l=i.value.clone(),u=Gy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Or?function(i,s,o){if(!wl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Gy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(jT(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function wo(t,e,n,r){return t instanceof ha?function(s,o,l,u){if(!wl(s.precondition,o))return l;const c=s.value.clone(),d=Ky(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Or?function(s,o,l,u){if(!wl(s.precondition,o))return l;const c=Ky(s.fieldTransforms,u,o),d=o.data;return d.setAll(jT(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return wl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function gx(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=LT(r.transform,i||null);s!=null&&(n===null&&(n=ht.empty()),n.set(r.field,s))}return n||null}function qy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ss(r,i,(s,o)=>fx(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ha extends Qu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Or extends Qu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function jT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Gy(t,e,n){const r=new Map;oe(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,dx(o,l,n[i]))}return r}function Ky(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,hx(s,o,e))}return r}class zT extends Qu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yx extends Qu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class _x{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&mx(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=wo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=wo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=VT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=UT(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&ss(this.mutations,e.mutations,(n,r)=>qy(n,r))&&ss(this.baseMutations,e.baseMutations,(n,r)=>qy(n,r))}}class np{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){oe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return ox}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new np(e,n,r,i)}}/**
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
 */class vx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Ex{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ke,ie;function wx(t){switch(t){case L.OK:return K(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return K(15467,{code:t})}}function BT(t){if(t===void 0)return Mn("GRPC error has no .code"),L.UNKNOWN;switch(t){case ke.OK:return L.OK;case ke.CANCELLED:return L.CANCELLED;case ke.UNKNOWN:return L.UNKNOWN;case ke.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case ke.INTERNAL:return L.INTERNAL;case ke.UNAVAILABLE:return L.UNAVAILABLE;case ke.UNAUTHENTICATED:return L.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case ke.NOT_FOUND:return L.NOT_FOUND;case ke.ALREADY_EXISTS:return L.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return L.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case ke.ABORTED:return L.ABORTED;case ke.OUT_OF_RANGE:return L.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return L.UNIMPLEMENTED;case ke.DATA_LOSS:return L.DATA_LOSS;default:return K(39323,{code:t})}}(ie=ke||(ke={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Tx(){return new TextEncoder}/**
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
 */const Ix=new _r([4294967295,4294967295],0);function Qy(t){const e=Tx().encode(t),n=new nT;return n.update(e),new Uint8Array(n.digest())}function Yy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new _r([n,r],0),new _r([i,s],0)]}class rp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new io(`Invalid padding: ${n}`);if(r<0)throw new io(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new io(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new io(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=_r.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(_r.fromNumber(r)));return i.compare(Ix)===1&&(i=new _r([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Qy(e),[r,i]=Yy(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new rp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Qy(e),[r,i]=Yy(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class io extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Yu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,da.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Yu(Y.min(),i,new we(ne),Fn(),re())}}class da{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new da(r,n,re(),re(),re())}}/**
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
 */class Tl{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class $T{constructor(e,n){this.targetId=e,this.Ce=n}}class HT{constructor(e,n,r=Ge.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Xy{constructor(){this.ve=0,this.Fe=Jy(),this.Me=Ge.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=re(),n=re(),r=re();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K(38017,{changeType:s})}}),new da(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Jy()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,oe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Sx{constructor(e){this.Ge=e,this.ze=new Map,this.je=Fn(),this.Je=Xa(),this.He=Xa(),this.Ye=new we(ne)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:K(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Td(s))if(r===0){const o=new q(s.path);this.et(n,o,et.newNoDocument(o,Y.min()))}else oe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Rr(r).toUint8Array()}catch(u){if(u instanceof pT)return is("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new rp(o,i,s)}catch(u){return is(u instanceof io?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&Td(l.target)){const u=new q(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,et.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=re();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Yu(e,n,this.Ye,this.je,r);return this.je=Fn(),this.Je=Xa(),this.He=Xa(),this.Ye=new we(ne),i}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Xy,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Le(ne),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Le(ne),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Xy),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Xa(){return new we(q.comparator)}function Jy(){return new we(q.comparator)}const Rx={asc:"ASCENDING",desc:"DESCENDING"},Ax={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Cx={and:"AND",or:"OR"};class kx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Rd(t,e){return t.useProto3Json||$u(e)?e:{value:e}}function cu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function WT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Px(t,e){return cu(t,e.toTimestamp())}function cn(t){return oe(!!t,49232),Y.fromTimestamp(function(n){const r=Sr(n);return new fe(r.seconds,r.nanos)}(t))}function ip(t,e){return Ad(t,e).canonicalString()}function Ad(t,e){const n=function(i){return new ue(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function qT(t){const e=ue.fromString(t);return oe(XT(e),10190,{key:e.toString()}),e}function Cd(t,e){return ip(t.databaseId,e.path)}function uh(t,e){const n=qT(e);if(n.get(1)!==t.databaseId.projectId)throw new B(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(KT(n))}function GT(t,e){return ip(t.databaseId,e)}function Nx(t){const e=qT(t);return e.length===4?ue.emptyPath():KT(e)}function kd(t){return new ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function KT(t){return oe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Zy(t,e,n){return{name:Cd(t,e),fields:n.value.mapValue.fields}}function xx(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(oe(d===void 0||typeof d=="string",58123),Ge.fromBase64String(d||"")):(oe(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Ge.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?L.UNKNOWN:BT(c.code);return new B(d,c.message||"")}(o);n=new HT(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=uh(t,r.document.name),s=cn(r.document.updateTime),o=r.document.createTime?cn(r.document.createTime):Y.min(),l=new ht({mapValue:{fields:r.document.fields}}),u=et.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Tl(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=uh(t,r.document),s=r.readTime?cn(r.readTime):Y.min(),o=et.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Tl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=uh(t,r.document),s=r.removedTargetIds||[];n=new Tl([],s,i,null)}else{if(!("filter"in e))return K(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Ex(i,s),l=r.targetId;n=new $T(l,o)}}return n}function Dx(t,e){let n;if(e instanceof ha)n={update:Zy(t,e.key,e.value)};else if(e instanceof zT)n={delete:Cd(t,e.key)};else if(e instanceof Or)n={update:Zy(t,e.key,e.data),updateMask:zx(e.fieldMask)};else{if(!(e instanceof yx))return K(16599,{Vt:e.type});n={verify:Cd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof lu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Go)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ko)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof uu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw K(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Px(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K(27497)}(t,e.precondition)),n}function Vx(t,e){return t&&t.length>0?(oe(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?cn(i.updateTime):cn(s);return o.isEqual(Y.min())&&(o=cn(s)),new px(o,i.transformResults||[])}(n,e))):[]}function Ox(t,e){return{documents:[GT(t,e.path)]}}function Lx(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=GT(t,i);const s=function(c){if(c.length!==0)return YT(Qt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Ri(m.field),direction:Fx(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Rd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function bx(t){let e=Nx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){oe(r===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=QT(p);return m instanceof Qt&&ST(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(C){return new qo(Ai(C.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,$u(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,v=p.values||[];return new au(v,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,v=p.values||[];return new au(v,m)}(n.endAt)),tx(e,i,o,s,l,"F",u,c)}function Mx(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function QT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ai(n.unaryFilter.field);return Ne.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ai(n.unaryFilter.field);return Ne.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ai(n.unaryFilter.field);return Ne.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ai(n.unaryFilter.field);return Ne.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ne.create(Ai(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Qt.create(n.compositeFilter.filters.map(r=>QT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K(1026)}}(n.compositeFilter.op))}(t):K(30097,{filter:t})}function Fx(t){return Rx[t]}function Ux(t){return Ax[t]}function jx(t){return Cx[t]}function Ri(t){return{fieldPath:t.canonicalString()}}function Ai(t){return He.fromServerFormat(t.fieldPath)}function YT(t){return t instanceof Ne?function(n){if(n.op==="=="){if(jy(n.value))return{unaryFilter:{field:Ri(n.field),op:"IS_NAN"}};if(Uy(n.value))return{unaryFilter:{field:Ri(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(jy(n.value))return{unaryFilter:{field:Ri(n.field),op:"IS_NOT_NAN"}};if(Uy(n.value))return{unaryFilter:{field:Ri(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ri(n.field),op:Ux(n.op),value:n.value}}}(t):t instanceof Qt?function(n){const r=n.getFilters().map(i=>YT(i));return r.length===1?r[0]:{compositeFilter:{op:jx(n.op),filters:r}}}(t):K(54877,{filter:t})}function zx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function XT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ar{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=Ge.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new ar(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Bx{constructor(e){this.yt=e}}function $x(t){const e=bx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Sd(e,e.limit,"L"):e}/**
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
 */class Hx{constructor(){this.Cn=new Wx}addToCollectionParentIndex(e,n){return this.Cn.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(Ir.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(Ir.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class Wx{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Le(ue.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Le(ue.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const e_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},JT=41943040;class ut{static withCacheSize(e){return new ut(e,ut.DEFAULT_COLLECTION_PERCENTILE,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */ut.DEFAULT_COLLECTION_PERCENTILE=10,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ut.DEFAULT=new ut(JT,ut.DEFAULT_COLLECTION_PERCENTILE,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ut.DISABLED=new ut(-1,0,0);/**
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
 */class ls{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new ls(0)}static cr(){return new ls(-1)}}/**
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
 */const t_="LruGarbageCollector",qx=1048576;function n_([t,e],[n,r]){const i=ne(t,n);return i===0?ne(e,r):i}class Gx{constructor(e){this.Ir=e,this.buffer=new Le(n_),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();n_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Kx{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){H(t_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){vs(n)?H(t_,"Ignoring IndexedDB error during garbage collection: ",n):await _s(n)}await this.Vr(3e5)})}}class Qx{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return b.resolve(Bu.ce);const r=new Gx(n);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(e_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),e_):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,i,s,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),Ii()<=te.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function Yx(t,e){return new Qx(t,e)}/**
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
 */class Xx{constructor(){this.changes=new yi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class Jx{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Zx{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&wo(r.mutation,i,Et.empty(),fe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=Qr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ro();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Qr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Fn();const o=Eo(),l=function(){return Eo()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Or)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),wo(d.mutation,c,d.mutation.getFieldMask(),fe.now())):o.set(c.key,Et.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>l.set(c,new Jx(d,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Eo();let i=new we((o,l)=>o-l),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Et.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||re()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=VT();d.forEach(m=>{if(!s.has(m)){const v=UT(n.get(m),r.get(m));v!==null&&p.set(m,v),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):kT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):b.resolve(Qr());let l=Bo,u=s;return o.next(c=>b.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?b.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,re())).next(d=>({batchId:l,changes:DT(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=ro();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ro();return this.indexManager.getCollectionParents(e,s).next(l=>b.forEach(l,u=>{const c=function(p,m){return new Es(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,et.newInvalidDocument(d)))});let l=ro();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&wo(d.mutation,c,Et.empty(),fe.now()),Gu(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class e2{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return b.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:cn(i.createTime)}}(n)),b.resolve()}getNamedQuery(e,n){return b.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(i){return{name:i.name,query:$x(i.bundledQuery),readTime:cn(i.readTime)}}(n)),b.resolve()}}/**
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
 */class t2{constructor(){this.overlays=new we(q.comparator),this.qr=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Qr();return b.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const i=Qr(),s=n.length+1,o=new q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return b.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new we((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Qr(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=Qr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return b.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new vx(n,r));let s=this.qr.get(n);s===void 0&&(s=re(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class n2{constructor(){this.sessionToken=Ge.EMPTY_BYTE_STRING}getSessionToken(e){return b.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,b.resolve()}}/**
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
 */class sp{constructor(){this.Qr=new Le(Fe.$r),this.Ur=new Le(Fe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Fe(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new Fe(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new q(new ue([])),r=new Fe(n,e),i=new Fe(n,e+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new q(new ue([])),r=new Fe(n,e),i=new Fe(n,e+1);let s=re();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Fe(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Fe{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return q.comparator(e.key,n.key)||ne(e.Yr,n.Yr)}static Kr(e,n){return ne(e.Yr,n.Yr)||q.comparator(e.key,n.key)}}/**
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
 */class r2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Le(Fe.$r)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new _x(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new Fe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return b.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?Yf:this.tr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Fe(n,0),i=new Fe(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const l=this.Xr(o.Yr);s.push(l)}),b.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Le(ne);return n.forEach(i=>{const s=new Fe(i,0),o=new Fe(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],l=>{r=r.add(l.Yr)})}),b.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new Fe(new q(s),0);let l=new Le(ne);return this.Zr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Yr)),!0)},o),b.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){oe(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return b.forEach(n.mutations,i=>{const s=new Fe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new Fe(n,0),i=this.Zr.firstAfterOrEqual(r);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class i2{constructor(e){this.ri=e,this.docs=function(){return new we(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():et.newInvalidDocument(n))}getEntries(e,n){let r=Fn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():et.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Fn();const o=n.path,l=new q(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||VN(DN(d),r)<=0||(i.has(d.key)||Gu(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return b.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K(9500)}ii(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new s2(this)}getSize(e){return b.resolve(this.size)}}class s2 extends Xx{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class o2{constructor(e){this.persistence=e,this.si=new yi(n=>Zf(n),ep),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.oi=0,this._i=new sp,this.targetCount=0,this.ai=ls.ur()}forEachTarget(e,n){return this.si.forEach((r,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),b.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new ls(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Pr(n),b.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),b.waitFor(s).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),b.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this._i.containsKey(n))}}/**
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
 */class ZT{constructor(e,n){this.ui={},this.overlays={},this.ci=new Bu(0),this.li=!1,this.li=!0,this.hi=new n2,this.referenceDelegate=e(this),this.Pi=new o2(this),this.indexManager=new Hx,this.remoteDocumentCache=function(i){return new i2(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new Bx(n),this.Ii=new e2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new t2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new r2(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new a2(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return b.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class a2 extends LN{constructor(e){super(),this.currentSequenceNumber=e}}class op{constructor(e){this.persistence=e,this.Ri=new sp,this.Vi=null}static mi(e){return new op(e)}get fi(){if(this.Vi)return this.Vi;throw K(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),b.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.fi,r=>{const i=q.fromPath(r);return this.gi(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return b.or([()=>b.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class hu{constructor(e,n){this.persistence=e,this.pi=new yi(r=>FN(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Yx(this,n)}static mi(e,n){return new hu(e,n)}Ei(){}di(e){return b.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return b.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?b.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,s.removeEntry(o,Y.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),b.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),b.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),b.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),b.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=vl(e.data.value)),n}br(e,n,r){return b.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return b.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ap{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=i}static As(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ap(e,n.fromCache,r,i)}}/**
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
 */class l2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class u2{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return bA()?8:bN(nt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ys(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new l2;return this.Ss(e,n,o).next(l=>{if(s.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>s.result)}bs(e,n,r,i){return r.documentReadCount<this.fs?(Ii()<=te.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Si(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),b.resolve()):(Ii()<=te.DEBUG&&H("QueryEngine","Query:",Si(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(Ii()<=te.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Si(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ln(n))):b.resolve())}ys(e,n){if(Hy(n))return b.resolve(null);let r=ln(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Sd(n,null,"F"),r=ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ds(n,l);return this.Cs(n,c,o,u.readTime)?this.ys(e,Sd(n,null,"F")):this.vs(e,c,n,u)}))})))}ws(e,n,r,i){return Hy(n)||i.isEqual(Y.min())?b.resolve(null):this.ps.getDocuments(e,r).next(s=>{const o=this.Ds(n,s);return this.Cs(n,o,r,i)?b.resolve(null):(Ii()<=te.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Si(n)),this.vs(e,o,n,xN(i,Bo)).next(l=>l))})}Ds(e,n){let r=new Le(NT(e));return n.forEach((i,s)=>{Gu(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return Ii()<=te.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Si(n)),this.ps.getDocumentsMatchingQuery(e,n,Ir.min(),r)}vs(e,n,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const lp="LocalStore",c2=3e8;class h2{constructor(e,n,r,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new we(ne),this.xs=new yi(s=>Zf(s),ep),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Zx(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function d2(t,e,n,r){return new h2(t,e,n,r)}async function eI(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=re();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function f2(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let v=b.resolve();return m.forEach(C=>{v=v.next(()=>d.getEntry(u,C)).next(k=>{const P=c.docVersions.get(C);oe(P!==null,48541),k.version.compareTo(P)<0&&(p.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),d.addEntry(k)))})}),v.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=re();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function tI(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function p2(t,e){const n=X(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.Pi.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(s,d.addedDocuments,p)));let v=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(Ge.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,r)),i=i.insert(p,v),function(k,P,E){return k.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=c2?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(m,v,d)&&l.push(n.Pi.updateTargetData(s,v))});let u=Fn(),c=re();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(m2(s,o,e.documentUpdates).next(d=>{u=d.ks,c=d.qs})),!r.isEqual(Y.min())){const d=n.Pi.getLastRemoteSnapshotVersion(s).next(p=>n.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return b.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Ms=i,s))}function m2(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Fn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H(lp,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{ks:o,qs:i}})}function g2(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Yf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function y2(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Pi.getTargetData(r,e).next(s=>s?(i=s,b.resolve(i)):n.Pi.allocateTargetId(r).next(o=>(i=new ar(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function Pd(t,e,n){const r=X(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!vs(o))throw o;H(lp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function r_(t,e,n){const r=X(t);let i=Y.min(),s=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=X(u),m=p.xs.get(d);return m!==void 0?b.resolve(p.Ms.get(m)):p.Pi.getTargetData(c,d)}(r,o,ln(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:re())).next(l=>(_2(r,rx(e),l),{documents:l,Qs:s})))}function _2(t,e,n){let r=t.Os.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Os.set(e,r)}class i_{constructor(){this.activeTargetIds=ux()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class v2{constructor(){this.Mo=new i_,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new i_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class E2{Oo(e){}shutdown(){}}/**
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
 */const s_="ConnectivityMonitor";class o_{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){H(s_,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){H(s_,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ja=null;function Nd(){return Ja===null?Ja=function(){return 268435456+Math.round(2147483648*Math.random())}():Ja++,"0x"+Ja.toString(16)}/**
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
 */const ch="RestConnection",w2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class T2{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===su?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,n,r,i,s){const o=Nd(),l=this.zo(e,n.toUriEncodedString());H(ch,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,i,s);const{host:c}=new URL(l),d=mi(c);return this.Jo(e,l,u,r,d).then(p=>(H(ch,`Received RPC '${e}' ${o}: `,p),p),p=>{throw is(ch,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Ho(e,n,r,i,s,o){return this.Go(e,n,r,i,s)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ys}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,n){const r=w2[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class I2{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Xe="WebChannelConnection";class S2 extends T2{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const o=Nd();return new Promise((l,u)=>{const c=new rT;c.setWithCredentials(!0),c.listenOnce(iT.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case _l.NO_ERROR:const p=c.getResponseJson();H(Xe,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case _l.TIMEOUT:H(Xe,`RPC '${e}' ${o} timed out`),u(new B(L.DEADLINE_EXCEEDED,"Request time out"));break;case _l.HTTP_ERROR:const m=c.getStatus();if(H(Xe,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let v=c.getResponseJson();Array.isArray(v)&&(v=v[0]);const C=v==null?void 0:v.error;if(C&&C.status&&C.message){const k=function(E){const _=E.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(_)>=0?_:L.UNKNOWN}(C.status);u(new B(k,C.message))}else u(new B(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new B(L.UNAVAILABLE,"Connection failed."));break;default:K(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{H(Xe,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);H(Xe,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",d,r,15)})}T_(e,n,r){const i=Nd(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=aT(),l=oT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");H(Xe,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);this.I_(p);let m=!1,v=!1;const C=new I2({Yo:P=>{v?H(Xe,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(m||(H(Xe,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),H(Xe,`RPC '${e}' stream ${i} sending:`,P),p.send(P))},Zo:()=>p.close()}),k=(P,E,_)=>{P.listen(E,T=>{try{_(T)}catch(V){setTimeout(()=>{throw V},0)}})};return k(p,no.EventType.OPEN,()=>{v||(H(Xe,`RPC '${e}' stream ${i} transport opened.`),C.o_())}),k(p,no.EventType.CLOSE,()=>{v||(v=!0,H(Xe,`RPC '${e}' stream ${i} transport closed`),C.a_(),this.E_(p))}),k(p,no.EventType.ERROR,P=>{v||(v=!0,is(Xe,`RPC '${e}' stream ${i} transport errored. Name:`,P.name,"Message:",P.message),C.a_(new B(L.UNAVAILABLE,"The operation could not be completed")))}),k(p,no.EventType.MESSAGE,P=>{var E;if(!v){const _=P.data[0];oe(!!_,16349);const T=_,V=(T==null?void 0:T.error)||((E=T[0])==null?void 0:E.error);if(V){H(Xe,`RPC '${e}' stream ${i} received error:`,V);const F=V.status;let j=function(I){const R=ke[I];if(R!==void 0)return BT(R)}(F),w=V.message;j===void 0&&(j=L.INTERNAL,w="Unknown error status: "+F+" with message "+V.message),v=!0,C.a_(new B(j,w)),p.close()}else H(Xe,`RPC '${e}' stream ${i} received:`,_),C.u_(_)}}),k(l,sT.STAT_EVENT,P=>{P.stat===yd.PROXY?H(Xe,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===yd.NOPROXY&&H(Xe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.__()},0),C}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function hh(){return typeof document<"u"?document:null}/**
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
 */function Xu(t){return new kx(t,!0)}/**
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
 */class nI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const a_="PersistentStream";class rI{constructor(e,n,r,i,s,o,l,u){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new nI(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Mn(n.toString()),Mn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new B(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return H(a_,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(H(a_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class R2 extends rI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=xx(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?cn(o.readTime):Y.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=kd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Td(u)?{documents:Ox(s,u)}:{query:Lx(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=WT(s,o.resumeToken);const c=Rd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=cu(s,o.snapshotVersion.toTimestamp());const c=Rd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=Mx(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=kd(this.serializer),n.removeTarget=e,this.q_(n)}}class A2 extends rI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return oe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){oe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=Vx(e.writeResults,e.commitTime),r=cn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=kd(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Dx(this.serializer,r))};this.q_(n)}}/**
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
 */class C2{}class k2 extends C2{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new B(L.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(e,Ad(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(L.UNKNOWN,s.toString())})}Ho(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,Ad(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(L.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class P2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Mn(n),this.aa=!1):H("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ci="RemoteStore";class N2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{_i(this)&&(H(ci,"Restarting streams for network reachability change."),await async function(u){const c=X(u);c.Ea.add(4),await fa(c),c.Ra.set("Unknown"),c.Ea.delete(4),await Ju(c)}(this))})}),this.Ra=new P2(r,i)}}async function Ju(t){if(_i(t))for(const e of t.da)await e(!0)}async function fa(t){for(const e of t.da)await e(!1)}function iI(t,e){const n=X(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),dp(n)?hp(n):ws(n).O_()&&cp(n,e))}function up(t,e){const n=X(t),r=ws(n);n.Ia.delete(e),r.O_()&&sI(n,e),n.Ia.size===0&&(r.O_()?r.L_():_i(n)&&n.Ra.set("Unknown"))}function cp(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ws(t).Y_(e)}function sI(t,e){t.Va.Ue(e),ws(t).Z_(e)}function hp(t){t.Va=new Sx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ws(t).start(),t.Ra.ua()}function dp(t){return _i(t)&&!ws(t).x_()&&t.Ia.size>0}function _i(t){return X(t).Ea.size===0}function oI(t){t.Va=void 0}async function x2(t){t.Ra.set("Online")}async function D2(t){t.Ia.forEach((e,n)=>{cp(t,e)})}async function V2(t,e){oI(t),dp(t)?(t.Ra.ha(e),hp(t)):t.Ra.set("Unknown")}async function O2(t,e,n){if(t.Ra.set("Online"),e instanceof HT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))}(t,e)}catch(r){H(ci,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await du(t,r)}else if(e instanceof Tl?t.Va.Ze(e):e instanceof $T?t.Va.st(e):t.Va.tt(e),!n.isEqual(Y.min()))try{const r=await tI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Va.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.Ia.get(c);d&&s.Ia.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.Ia.get(u);if(!d)return;s.Ia.set(u,d.withResumeToken(Ge.EMPTY_BYTE_STRING,d.snapshotVersion)),sI(s,u);const p=new ar(d.target,u,c,d.sequenceNumber);cp(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H(ci,"Failed to raise snapshot:",r),await du(t,r)}}async function du(t,e,n){if(!vs(e))throw e;t.Ea.add(1),await fa(t),t.Ra.set("Offline"),n||(n=()=>tI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H(ci,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Ju(t)})}function aI(t,e){return e().catch(n=>du(t,n,e))}async function Zu(t){const e=X(t),n=Cr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Yf;for(;L2(e);)try{const i=await g2(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,b2(e,i)}catch(i){await du(e,i)}lI(e)&&uI(e)}function L2(t){return _i(t)&&t.Ta.length<10}function b2(t,e){t.Ta.push(e);const n=Cr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function lI(t){return _i(t)&&!Cr(t).x_()&&t.Ta.length>0}function uI(t){Cr(t).start()}async function M2(t){Cr(t).ra()}async function F2(t){const e=Cr(t);for(const n of t.Ta)e.ea(n.mutations)}async function U2(t,e,n){const r=t.Ta.shift(),i=np.from(r,e,n);await aI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Zu(t)}async function j2(t,e){e&&Cr(t).X_&&await async function(r,i){if(function(o){return wx(o)&&o!==L.ABORTED}(i.code)){const s=r.Ta.shift();Cr(r).B_(),await aI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Zu(r)}}(t,e),lI(t)&&uI(t)}async function l_(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),H(ci,"RemoteStore received new credentials");const r=_i(n);n.Ea.add(3),await fa(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Ju(n)}async function z2(t,e){const n=X(t);e?(n.Ea.delete(2),await Ju(n)):e||(n.Ea.add(2),await fa(n),n.Ra.set("Unknown"))}function ws(t){return t.ma||(t.ma=function(n,r,i){const s=X(n);return s.sa(),new R2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:x2.bind(null,t),t_:D2.bind(null,t),r_:V2.bind(null,t),H_:O2.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),dp(t)?hp(t):t.Ra.set("Unknown")):(await t.ma.stop(),oI(t))})),t.ma}function Cr(t){return t.fa||(t.fa=function(n,r,i){const s=X(n);return s.sa(),new A2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:M2.bind(null,t),r_:j2.bind(null,t),ta:F2.bind(null,t),na:U2.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await Zu(t)):(await t.fa.stop(),t.Ta.length>0&&(H(ci,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class fp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Pn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new fp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pp(t,e){if(Mn("AsyncQueue",`${e}: ${t}`),vs(t))return new B(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Qi{static emptySet(e){return new Qi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=ro(),this.sortedSet=new we(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Qi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Qi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class u_{constructor(){this.ga=new we(q.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):K(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class us{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new us(e,n,Qi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class B2{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class $2{constructor(){this.queries=c_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=X(n),s=i.queries;i.queries=c_(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new B(L.ABORTED,"Firestore shutting down"))}}function c_(){return new yi(t=>PT(t),qu)}async function mp(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new B2,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=pp(o,`Initialization of query '${Si(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&yp(n)}async function gp(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function H2(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&yp(n)}function W2(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function yp(t){t.Ca.forEach(e=>{e.next()})}var xd,h_;(h_=xd||(xd={})).Ma="default",h_.Cache="cache";class _p{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new us(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=us.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==xd.Cache}}/**
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
 */class cI{constructor(e){this.key=e}}class hI{constructor(e){this.key=e}}class q2{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=re(),this.mutatedKeys=re(),this.eu=NT(e),this.tu=new Qi(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new u_,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),v=Gu(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),k=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let P=!1;m&&v?m.data.isEqual(v.data)?C!==k&&(r.track({type:3,doc:v}),P=!0):this.su(m,v)||(r.track({type:2,doc:v}),P=!0,(u&&this.eu(v,u)>0||c&&this.eu(v,c)<0)&&(l=!0)):!m&&v?(r.track({type:0,doc:v}),P=!0):m&&!v&&(r.track({type:1,doc:m}),P=!0,(u||c)&&(l=!0)),P&&(v?(o=o.add(v),s=k?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,Cs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,p)=>function(v,C){const k=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K(20277,{Rt:P})}};return k(v)-k(C)}(d.type,p.type)||this.eu(d.doc,p.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Xa.size===0&&this.current&&!i?1:0,c=u!==this.Za;return this.Za=u,o.length!==0||c?{snapshot:new us(this.query,e.tu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new u_,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=re(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new hI(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new cI(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=re();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return us.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const vp="SyncEngine";class G2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class K2{constructor(e){this.key=e,this.hu=!1}}class Q2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new yi(l=>PT(l),qu),this.Iu=new Map,this.Eu=new Set,this.du=new we(q.comparator),this.Au=new Map,this.Ru=new sp,this.Vu={},this.mu=new Map,this.fu=ls.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Y2(t,e,n=!0){const r=yI(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await dI(r,e,n,!0),i}async function X2(t,e){const n=yI(t);await dI(n,e,!0,!1)}async function dI(t,e,n,r){const i=await y2(t.localStore,ln(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await J2(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&iI(t.remoteStore,i),l}async function J2(t,e,n,r,i){t.pu=(p,m,v)=>async function(k,P,E,_){let T=P.view.ru(E);T.Cs&&(T=await r_(k.localStore,P.query,!1).then(({documents:w})=>P.view.ru(w,T)));const V=_&&_.targetChanges.get(P.targetId),F=_&&_.targetMismatches.get(P.targetId)!=null,j=P.view.applyChanges(T,k.isPrimaryClient,V,F);return f_(k,P.targetId,j.au),j.snapshot}(t,p,m,v);const s=await r_(t.localStore,e,!0),o=new q2(e,s.Qs),l=o.ru(s.documents),u=da.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);f_(t,n,c.au);const d=new G2(e,n,o);return t.Tu.set(e,d),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function Z2(t,e,n){const r=X(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!qu(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Pd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&up(r.remoteStore,i.targetId),Dd(r,i.targetId)}).catch(_s)):(Dd(r,i.targetId),await Pd(r.localStore,i.targetId,!0))}async function eD(t,e){const n=X(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),up(n.remoteStore,r.targetId))}async function tD(t,e,n){const r=lD(t);try{const i=await function(o,l){const u=X(o),c=fe.now(),d=l.reduce((v,C)=>v.add(C.key),re());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",v=>{let C=Fn(),k=re();return u.Ns.getEntries(v,d).next(P=>{C=P,C.forEach((E,_)=>{_.isValidDocument()||(k=k.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(v,C)).next(P=>{p=P;const E=[];for(const _ of l){const T=gx(_,p.get(_.key).overlayedDocument);T!=null&&E.push(new Or(_.key,T,wT(T.value.mapValue),un.exists(!0)))}return u.mutationQueue.addMutationBatch(v,c,E,l)}).next(P=>{m=P;const E=P.applyToLocalDocumentSet(p,k);return u.documentOverlayCache.saveOverlays(v,P.batchId,E)})}).then(()=>({batchId:m.batchId,changes:DT(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Vu[o.currentUser.toKey()];c||(c=new we(ne)),c=c.insert(l,u),o.Vu[o.currentUser.toKey()]=c}(r,i.batchId,n),await pa(r,i.changes),await Zu(r.remoteStore)}catch(i){const s=pp(i,"Failed to persist write");n.reject(s)}}async function fI(t,e){const n=X(t);try{const r=await p2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(oe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?oe(o.hu,14607):i.removedDocuments.size>0&&(oe(o.hu,42227),o.hu=!1))}),await pa(n,r,e)}catch(r){await _s(r)}}function d_(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.Sa)m.va(l)&&(c=!0)}),c&&yp(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function nD(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new we(q.comparator);o=o.insert(s,et.newNoDocument(s,Y.min()));const l=re().add(s),u=new Yu(Y.min(),new Map,new we(ne),o,l);await fI(r,u),r.du=r.du.remove(s),r.Au.delete(e),Ep(r)}else await Pd(r.localStore,e,!1).then(()=>Dd(r,e,n)).catch(_s)}async function rD(t,e){const n=X(t),r=e.batch.batchId;try{const i=await f2(n.localStore,e);mI(n,r,null),pI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await pa(n,i)}catch(i){await _s(i)}}async function iD(t,e,n){const r=X(t);try{const i=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(oe(p!==null,37113),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);mI(r,e,n),pI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await pa(r,i)}catch(i){await _s(i)}}function pI(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function mI(t,e,n){const r=X(t);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function Dd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||gI(t,r)})}function gI(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(up(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Ep(t))}function f_(t,e,n){for(const r of n)r instanceof cI?(t.Ru.addReference(r.key,e),sD(t,r)):r instanceof hI?(H(vp,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||gI(t,r.key)):K(19791,{wu:r})}function sD(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(H(vp,"New document in limbo: "+n),t.Eu.add(r),Ep(t))}function Ep(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new q(ue.fromString(e)),r=t.fu.next();t.Au.set(r,new K2(n)),t.du=t.du.insert(n,r),iI(t.remoteStore,new ar(ln(Wu(n.path)),r,"TargetPurposeLimboResolution",Bu.ce))}}async function pa(t,e,n){const r=X(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=ap.As(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,c){const d=X(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>b.forEach(c,m=>b.forEach(m.Es,v=>d.persistence.referenceDelegate.addReference(p,m.targetId,v)).next(()=>b.forEach(m.ds,v=>d.persistence.referenceDelegate.removeReference(p,m.targetId,v)))))}catch(p){if(!vs(p))throw p;H(lp,"Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const v=d.Ms.get(m),C=v.snapshotVersion,k=v.withLastLimboFreeSnapshotVersion(C);d.Ms=d.Ms.insert(m,k)}}}(r.localStore,s))}async function oD(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){H(vp,"User change. New user:",e.toKey());const r=await eI(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new B(L.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await pa(n,r.Ls)}}function aD(t,e){const n=X(t),r=n.Au.get(e);if(r&&r.hu)return re().add(r.key);{let i=re();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function yI(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=fI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nD.bind(null,e),e.Pu.H_=H2.bind(null,e.eventManager),e.Pu.yu=W2.bind(null,e.eventManager),e}function lD(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iD.bind(null,e),e}class fu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Xu(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return d2(this.persistence,new u2,e.initialUser,this.serializer)}Cu(e){return new ZT(op.mi,this.serializer)}Du(e){return new v2}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}fu.provider={build:()=>new fu};class uD extends fu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){oe(this.persistence.referenceDelegate instanceof hu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Kx(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?ut.withCacheSize(this.cacheSizeBytes):ut.DEFAULT;return new ZT(r=>hu.mi(r,n),this.serializer)}}class Vd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>d_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=oD.bind(null,this.syncEngine),await z2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new $2}()}createDatastore(e){const n=Xu(e.databaseInfo.databaseId),r=function(s){return new S2(s)}(e.databaseInfo);return function(s,o,l,u){return new k2(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new N2(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>d_(this.syncEngine,n,0),function(){return o_.v()?new o_:new E2}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new Q2(i,s,o,l,u,c);return d&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=X(i);H(ci,"RemoteStore shutting down."),s.Ea.add(5),await fa(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Vd.provider={build:()=>new Vd};/**
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
 *//**
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
 */class wp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Mn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const kr="FirestoreClient";class cD{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Je.UNAUTHENTICATED,this.clientId=Qf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H(kr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H(kr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=pp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function dh(t,e){t.asyncQueue.verifyOperationInProgress(),H(kr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await eI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function p_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await hD(t);H(kr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>l_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>l_(e.remoteStore,i)),t._onlineComponents=e}async function hD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H(kr,"Using user provided OfflineComponentProvider");try{await dh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;is("Error using user provided cache. Falling back to memory cache: "+n),await dh(t,new fu)}}else H(kr,"Using default OfflineComponentProvider"),await dh(t,new uD(void 0));return t._offlineComponents}async function _I(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H(kr,"Using user provided OnlineComponentProvider"),await p_(t,t._uninitializedComponentsProvider._online)):(H(kr,"Using default OnlineComponentProvider"),await p_(t,new Vd))),t._onlineComponents}function dD(t){return _I(t).then(e=>e.syncEngine)}async function pu(t){const e=await _I(t),n=e.eventManager;return n.onListen=Y2.bind(null,e.syncEngine),n.onUnlisten=Z2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=X2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=eD.bind(null,e.syncEngine),n}function fD(t,e,n={}){const r=new Pn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new wp({next:m=>{d.Nu(),o.enqueueAndForget(()=>gp(s,p));const v=m.docs.has(l);!v&&m.fromCache?c.reject(new B(L.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&m.fromCache&&u&&u.source==="server"?c.reject(new B(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new _p(Wu(l.path),d,{includeMetadataChanges:!0,qa:!0});return mp(s,p)}(await pu(t),t.asyncQueue,e,n,r)),r.promise}function pD(t,e,n={}){const r=new Pn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new wp({next:m=>{d.Nu(),o.enqueueAndForget(()=>gp(s,p)),m.fromCache&&u.source==="server"?c.reject(new B(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new _p(l,d,{includeMetadataChanges:!0,qa:!0});return mp(s,p)}(await pu(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function vI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const m_=new Map;/**
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
 */const EI="firestore.googleapis.com",g_=!0;class y_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new B(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=EI,this.ssl=g_}else this.host=e.host,this.ssl=e.ssl??g_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=JT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<qx)throw new B(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}NN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vI(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ec{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new y_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new y_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new EN;switch(r.type){case"firstParty":return new SN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=m_.get(n);r&&(H("ComponentProvider","Removing Datastore"),m_.delete(n),r.terminate())}(this),Promise.resolve()}}function mD(t,e,n,r={}){var c;t=xt(t,ec);const i=mi(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(Lf(`https://${l}`),bf("Firestore",!0)),s.host!==EI&&s.host!==l&&is("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!si(u,o)&&(t._setSettings(u),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=Je.MOCK_USER;else{d=gw(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new B(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Je(m)}t._authCredentials=new wN(new uT(d,p))}}/**
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
 */class Lr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Lr(this.firestore,e,this._query)}}class Se{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Se(this.firestore,e,this._key)}toJSON(){return{type:Se._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ca(n,Se._jsonSchema))return new Se(e,r||null,new q(ue.fromString(n.referencePath)))}}Se._jsonSchemaVersion="firestore/documentReference/1.0",Se._jsonSchema={type:xe("string",Se._jsonSchemaVersion),referencePath:xe("string")};class vr extends Lr{constructor(e,n,r){super(e,n,Wu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Se(this.firestore,null,new q(e))}withConverter(e){return new vr(this.firestore,e,this._path)}}function Tp(t,e,...n){if(t=be(t),cT("collection","path",e),t instanceof ec){const r=ue.fromString(e,...n);return Ny(r),new vr(t,null,r)}{if(!(t instanceof Se||t instanceof vr))throw new B(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return Ny(r),new vr(t.firestore,null,r)}}function Ip(t,e,...n){if(t=be(t),arguments.length===1&&(e=Qf.newId()),cT("doc","path",e),t instanceof ec){const r=ue.fromString(e,...n);return Py(r),new Se(t,null,new q(r))}{if(!(t instanceof Se||t instanceof vr))throw new B(L.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return Py(r),new Se(t.firestore,t instanceof vr?t.converter:null,new q(r))}}/**
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
 */const __="AsyncQueue";class v_{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new nI(this,"async_queue_retry"),this._c=()=>{const r=hh();r&&H(__,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=hh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=hh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Pn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!vs(e))throw e;H(__,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Mn("INTERNAL UNHANDLED ERROR: ",E_(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=fp.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&K(47125,{Pc:E_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function E_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
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
 */function w_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class hi extends ec{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new v_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new v_(e),this._firestoreClient=void 0,await e}}}function gD(t,e){const n=typeof t=="object"?t:Uf(),r=typeof t=="string"?t:su,i=Mu(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=fw("firestore");s&&mD(i,...s)}return i}function tc(t){if(t._terminated)throw new B(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||yD(t),t._firestoreClient}function yD(t){var r,i,s;const e=t._freezeSettings(),n=function(l,u,c,d){return new zN(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,vI(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new cD(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class kt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new kt(Ge.fromBase64String(e))}catch(n){throw new B(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new kt(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:kt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ca(e,kt._jsonSchema))return kt.fromBase64String(e.bytes)}}kt._jsonSchemaVersion="firestore/bytes/1.0",kt._jsonSchema={type:xe("string",kt._jsonSchemaVersion),bytes:xe("string")};/**
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
 */class nc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Sp{constructor(e){this._methodName=e}}/**
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
 */class hn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:hn._jsonSchemaVersion}}static fromJSON(e){if(ca(e,hn._jsonSchema))return new hn(e.latitude,e.longitude)}}hn._jsonSchemaVersion="firestore/geoPoint/1.0",hn._jsonSchema={type:xe("string",hn._jsonSchemaVersion),latitude:xe("number"),longitude:xe("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class dn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:dn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ca(e,dn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new dn(e.vectorValues);throw new B(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}dn._jsonSchemaVersion="firestore/vectorValue/1.0",dn._jsonSchema={type:xe("string",dn._jsonSchemaVersion),vectorValues:xe("object")};/**
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
 */const _D=/^__.*__$/;class vD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Or(e,this.data,this.fieldMask,n,this.fieldTransforms):new ha(e,this.data,n,this.fieldTransforms)}}class wI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Or(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function TI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{Ac:t})}}class Rp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Rp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return mu(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(TI(this.Ac)&&_D.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class ED{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Xu(e)}Cc(e,n,r,i=!1){return new Rp({Ac:e,methodName:n,Dc:r,path:He.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ap(t){const e=t._freezeSettings(),n=Xu(t._databaseId);return new ED(t._databaseId,!!e.ignoreUndefinedProperties,n)}function wD(t,e,n,r,i,s={}){const o=t.Cc(s.merge||s.mergeFields?2:0,e,n,i);Cp("Data must be an object, but it was:",o,r);const l=II(r,o);let u,c;if(s.merge)u=new Et(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=Od(e,p,n);if(!o.contains(m))throw new B(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);RI(d,m)||d.push(m)}u=new Et(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new vD(new ht(l),u,c)}class ma extends Sp{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ma}}function TD(t,e,n,r){const i=t.Cc(1,e,n);Cp("Data must be an object, but it was:",i,r);const s=[],o=ht.empty();Vr(r,(u,c)=>{const d=kp(e,u,n);c=be(c);const p=i.yc(d);if(c instanceof ma)s.push(d);else{const m=ga(c,p);m!=null&&(s.push(d),o.set(d,m))}});const l=new Et(s);return new wI(o,l,i.fieldTransforms)}function ID(t,e,n,r,i,s){const o=t.Cc(1,e,n),l=[Od(e,r,n)],u=[i];if(s.length%2!=0)throw new B(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Od(e,s[m])),u.push(s[m+1]);const c=[],d=ht.empty();for(let m=l.length-1;m>=0;--m)if(!RI(c,l[m])){const v=l[m];let C=u[m];C=be(C);const k=o.yc(v);if(C instanceof ma)c.push(v);else{const P=ga(C,k);P!=null&&(c.push(v),d.set(v,P))}}const p=new Et(c);return new wI(d,p,o.fieldTransforms)}function SD(t,e,n,r=!1){return ga(n,t.Cc(r?4:3,e))}function ga(t,e){if(SI(t=be(t)))return Cp("Unsupported field value:",e,t),II(t,e);if(t instanceof Sp)return function(r,i){if(!TI(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=ga(l,i.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=be(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return cx(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=fe.fromDate(r);return{timestampValue:cu(i.serializer,s)}}if(r instanceof fe){const s=new fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:cu(i.serializer,s)}}if(r instanceof hn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof kt)return{bytesValue:WT(i.serializer,r._byteString)};if(r instanceof Se){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ip(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof dn)return function(o,l){return{mapValue:{fields:{[vT]:{stringValue:ET},[ou]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Sc("VectorValues must only contain numeric values.");return tp(l.serializer,c)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${zu(r)}`)}(t,e)}function II(t,e){const n={};return fT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Vr(t,(r,i)=>{const s=ga(i,e.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function SI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof fe||t instanceof hn||t instanceof kt||t instanceof Se||t instanceof Sp||t instanceof dn)}function Cp(t,e,n){if(!SI(n)||!hT(n)){const r=zu(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function Od(t,e,n){if((e=be(e))instanceof nc)return e._internalPath;if(typeof e=="string")return kp(t,e);throw mu("Field path arguments must be of type string or ",t,!1,void 0,n)}const RD=new RegExp("[~\\*/\\[\\]]");function kp(t,e,n){if(e.search(RD)>=0)throw mu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new nc(...e.split("."))._internalPath}catch{throw mu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function mu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new B(L.INVALID_ARGUMENT,l+t+u)}function RI(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class AI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Se(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new AD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(rc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class AD extends AI{data(){return super.data()}}function rc(t,e){return typeof e=="string"?kp(t,e):e instanceof nc?e._internalPath:e._delegate._internalPath}/**
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
 */function CI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Pp{}class kI extends Pp{}function Np(t,e,...n){let r=[];e instanceof Pp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof xp).length,l=s.filter(u=>u instanceof ic).length;if(o>1||o>0&&l>0)throw new B(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class ic extends kI{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ic(e,n,r)}_apply(e){const n=this._parse(e);return NI(e._query,n),new Lr(e.firestore,e.converter,Id(e._query,n))}_parse(e){const n=Ap(e.firestore);return function(s,o,l,u,c,d,p){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new B(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){I_(p,d);const C=[];for(const k of p)C.push(T_(u,s,k));m={arrayValue:{values:C}}}else m=T_(u,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||I_(p,d),m=SD(l,o,p,d==="in"||d==="not-in");return Ne.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function CD(t,e,n){const r=e,i=rc("where",t);return ic._create(i,r,n)}class xp extends Pp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new xp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Qt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)NI(o,u),o=Id(o,u)}(e._query,n),new Lr(e.firestore,e.converter,Id(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Dp extends kI{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Dp(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new B(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new B(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new qo(s,o)}(e._query,this._field,this._direction);return new Lr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Es(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function PI(t,e="asc"){const n=e,r=rc("orderBy",t);return Dp._create(r,n)}function T_(t,e,n){if(typeof(n=be(n))=="string"){if(n==="")throw new B(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!kT(e)&&n.indexOf("/")!==-1)throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ue.fromString(n));if(!q.isDocumentKey(r))throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Fy(t,new q(r))}if(n instanceof Se)return Fy(t,n._key);throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${zu(n)}.`)}function I_(t,e){if(!Array.isArray(t)||t.length===0)throw new B(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function NI(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class kD{convertValue(e,n="none"){switch(Ar(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Rr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw K(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Vr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[ou].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Ae(o.doubleValue));return new dn(n)}convertGeoPoint(e){return new hn(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Hu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp($o(e));default:return null}}convertTimestamp(e){const n=Sr(e);return new fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ue.fromString(e);oe(XT(r),9688,{name:e});const i=new Ho(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||Mn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function PD(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class so{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Jr extends AI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Il(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(rc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new B(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Jr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Jr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Jr._jsonSchema={type:xe("string",Jr._jsonSchemaVersion),bundleSource:xe("string","DocumentSnapshot"),bundleName:xe("string"),bundle:xe("string")};class Il extends Jr{data(e={}){return super.data(e)}}class Zr{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new so(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Il(this._firestore,this._userDataWriter,r.key,r,new so(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Il(i._firestore,i._userDataWriter,l.doc.key,l.doc,new so(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Il(i._firestore,i._userDataWriter,l.doc.key,l.doc,new so(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:ND(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new B(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Zr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Qf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function ND(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K(61501,{type:t})}}/**
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
 */function xD(t){t=xt(t,Se);const e=xt(t.firestore,hi);return fD(tc(e),t._key).then(n=>VI(e,t,n))}Zr._jsonSchemaVersion="firestore/querySnapshot/1.0",Zr._jsonSchema={type:xe("string",Zr._jsonSchemaVersion),bundleSource:xe("string","QuerySnapshot"),bundleName:xe("string"),bundle:xe("string")};class Vp extends kD{constructor(e){super(),this.firestore=e}convertBytes(e){return new kt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Se(this.firestore,null,n)}}function DD(t){t=xt(t,Lr);const e=xt(t.firestore,hi),n=tc(e),r=new Vp(e);return CI(t._query),pD(n,t._query).then(i=>new Zr(e,r,t,i))}function VD(t,e,n){t=xt(t,Se);const r=xt(t.firestore,hi),i=PD(t.converter,e);return DI(r,[wD(Ap(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,un.none())])}function OD(t,e,n,...r){t=xt(t,Se);const i=xt(t.firestore,hi),s=Ap(i);let o;return o=typeof(e=be(e))=="string"||e instanceof nc?ID(s,"updateDoc",t._key,e,n,r):TD(s,"updateDoc",t._key,e),DI(i,[o.toMutation(t._key,un.exists(!0))])}function xI(t,...e){var u,c,d;t=be(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||w_(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(w_(e[r])){const p=e[r];e[r]=(u=p.next)==null?void 0:u.bind(p),e[r+1]=(c=p.error)==null?void 0:c.bind(p),e[r+2]=(d=p.complete)==null?void 0:d.bind(p)}let s,o,l;if(t instanceof Se)o=xt(t.firestore,hi),l=Wu(t._key.path),s={next:p=>{e[r]&&e[r](VI(o,t,p))},error:e[r+1],complete:e[r+2]};else{const p=xt(t,Lr);o=xt(p.firestore,hi),l=p._query;const m=new Vp(o);s={next:v=>{e[r]&&e[r](new Zr(o,m,p,v))},error:e[r+1],complete:e[r+2]},CI(t._query)}return function(m,v,C,k){const P=new wp(k),E=new _p(v,P,C);return m.asyncQueue.enqueueAndForget(async()=>mp(await pu(m),E)),()=>{P.Nu(),m.asyncQueue.enqueueAndForget(async()=>gp(await pu(m),E))}}(tc(o),l,i,s)}function DI(t,e){return function(r,i){const s=new Pn;return r.asyncQueue.enqueueAndForget(async()=>tD(await dD(r),i,s)),s.promise}(tc(t),e)}function VI(t,e,n){const r=n.docs.get(e._key),i=new Vp(t);return new Jr(t,i,e._key,r,new so(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */function LD(){return new ma("deleteField")}(function(e,n=!0){(function(i){ys=i})(gi),oi(new Tr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new hi(new TN(r.getProvider("auth-internal")),new RN(o,r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new B(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ho(c.options.projectId,d)}(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),sn(Ry,Ay,e),sn(Ry,Ay,"esm2020")})();/**
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
 */const OI="firebasestorage.googleapis.com",bD="storageBucket",MD=2*60*1e3,FD=10*60*1e3;/**
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
 */class _n extends gn{constructor(e,n,r=0){super(fh(e),`Firebase Storage: ${n} (${fh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,_n.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return fh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var pn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(pn||(pn={}));function fh(t){return"storage/"+t}function UD(){const t="An unknown error occurred, please check the error payload for server response.";return new _n(pn.UNKNOWN,t)}function jD(){return new _n(pn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function zD(){return new _n(pn.CANCELED,"User canceled the upload/download.")}function BD(t){return new _n(pn.INVALID_URL,"Invalid URL '"+t+"'.")}function $D(t){return new _n(pn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function S_(t){return new _n(pn.INVALID_ARGUMENT,t)}function LI(){return new _n(pn.APP_DELETED,"The Firebase app was deleted.")}function HD(t){return new _n(pn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Bt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Bt.makeFromUrl(e,n)}catch{return new Bt(e,"")}if(r.path==="")return r;throw $D(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(V){V.path.charAt(V.path.length-1)==="/"&&(V.path_=V.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(V){V.path_=decodeURIComponent(V.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",v=new RegExp(`^https?://${p}/${d}/b/${i}/o${m}`,"i"),C={bucket:1,path:3},k=n===OI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",E=new RegExp(`^https?://${k}/${i}/${P}`,"i"),T=[{regex:l,indices:u,postModify:s},{regex:v,indices:C,postModify:c},{regex:E,indices:{bucket:1,path:2},postModify:c}];for(let V=0;V<T.length;V++){const F=T[V],j=F.regex.exec(e);if(j){const w=j[F.indices.bucket];let y=j[F.indices.path];y||(y=""),r=new Bt(w,y),F.postModify(r);break}}if(r==null)throw BD(e);return r}}class WD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function qD(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function d(...P){c||(c=!0,e.apply(null,P))}function p(P){i=setTimeout(()=>{i=null,t(v,u())},P)}function m(){s&&clearTimeout(s)}function v(P,...E){if(c){m();return}if(P){m(),d.call(null,P,...E);return}if(u()||o){m(),d.call(null,P,...E);return}r<64&&(r*=2);let T;l===1?(l=2,T=0):T=(r+Math.random())*1e3,p(T)}let C=!1;function k(P){C||(C=!0,m(),!c&&(i!==null?(P||(l=2),clearTimeout(i),p(0)):P||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,k(!0)},n),k}function GD(t){t(!1)}/**
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
 */function KD(t){return t!==void 0}function R_(t,e,n,r){if(r<e)throw S_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw S_(`Invalid value for '${t}'. Expected ${n} or less.`)}function QD(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var gu;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(gu||(gu={}));/**
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
 */function YD(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class XD{constructor(e,n,r,i,s,o,l,u,c,d,p,m=!0,v=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=p,this.retry=m,this.isUsingEmulator=v,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((C,k)=>{this.resolve_=C,this.reject_=k,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Za(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===gu.NO_ERROR,u=s.getStatus();if(!l||YD(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===gu.ABORT;r(!1,new Za(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Za(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());KD(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=UD();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?LI():zD();o(u)}else{const u=jD();o(u)}};this.canceled_?n(!1,new Za(!1,null,!0)):this.backoffId_=qD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&GD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Za{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function JD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function ZD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function eV(t,e){e&&(t["X-Firebase-GMPID"]=e)}function tV(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function nV(t,e,n,r,i,s,o=!0,l=!1){const u=QD(t.urlParams),c=t.url+u,d=Object.assign({},t.headers);return eV(d,e),JD(d,n),ZD(d,s),tV(d,r),new XD(c,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,l)}/**
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
 */function rV(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function iV(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class yu{constructor(e,n){this._service=e,n instanceof Bt?this._location=n:this._location=Bt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new yu(e,n)}get root(){const e=new Bt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return iV(this._location.path)}get storage(){return this._service}get parent(){const e=rV(this._location.path);if(e===null)return null;const n=new Bt(this._location.bucket,e);return new yu(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw HD(e)}}function A_(t,e){const n=e==null?void 0:e[bD];return n==null?null:Bt.makeFromBucketSpec(n,t)}function sV(t,e,n,r={}){t.host=`${e}:${n}`;const i=mi(e);i&&(Lf(`https://${t.host}/b`),bf("Storage",!0)),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:gw(s,t.app.options.projectId))}class oV{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=OI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=MD,this._maxUploadRetryTime=FD,this._requests=new Set,i!=null?this._bucket=Bt.makeFromBucketSpec(i,this._host):this._bucket=A_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Bt.makeFromBucketSpec(this._url,e):this._bucket=A_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){R_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){R_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(_t(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new yu(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new WD(LI());{const o=nV(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const C_="@firebase/storage",k_="0.14.0";/**
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
 */const bI="storage";function aV(t=Uf(),e){t=be(t);const r=Mu(t,bI).getImmediate({identifier:e}),i=fw("storage");return i&&lV(r,...i),r}function lV(t,e,n,r={}){sV(t,e,n,r)}function uV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new oV(n,r,i,e,gi)}function cV(){oi(new Tr(bI,uV,"PUBLIC").setMultipleInstances(!0)),sn(C_,k_,""),sn(C_,k_,"esm2020")}cV();const hV={apiKey:"AIzaSyDDqSudAmgIyVT7nfg_2eJM8pf7nUQ7Hmk",authDomain:"kaydol-e1326.firebaseapp.com",projectId:"kaydol-e1326",storageBucket:"kaydol-e1326.firebasestorage.app",messagingSenderId:"272409924206",appId:"1:272409924206:web:7cdc48219e710c8b678c7f",measurementId:"G-6NG7FMP6H8"},Op=vw(hV),$t=_N(Op),cs=gD(Op);aV(Op);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dV=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),MI=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var fV={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pV=O.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>O.createElement("svg",{ref:u,...fV,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:MI("lucide",i),...l},[...o.map(([c,d])=>O.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=(t,e)=>{const n=O.forwardRef(({className:r,...i},s)=>O.createElement(pV,{ref:s,iconNode:e,className:MI(`lucide-${dV(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mV=Lt("AlignLeft",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}],["line",{x1:"17",x2:"3",y1:"18",y2:"18",key:"1awlsn"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gV=Lt("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P_=Lt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yV=Lt("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _V=Lt("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vV=Lt("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EV=Lt("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wV=Lt("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=Lt("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TV=Lt("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FI=Lt("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IV=Lt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function SV(){const t=tw(),e=$t.currentUser,n=async()=>{await $t.signOut(),t("/auth")};return M.jsx("nav",{className:"fixed top-0 left-0 right-0 z-[50] bg-[#0a0a0c]/80 backdrop-blur-xl border-b border-white/[0.03]",children:M.jsxs("div",{className:"max-w-7xl mx-auto px-6 h-20 flex items-center justify-between",children:[M.jsx(er,{to:"/",className:"text-sm font-black uppercase tracking-[0.5em] hover:opacity-50 transition-all",children:"zahid.life"}),M.jsxs("div",{className:"flex items-center gap-6",children:[M.jsx(er,{to:"/",className:"text-white/30 hover:text-white transition-colors",children:M.jsx(vV,{size:20})}),e?M.jsxs(M.Fragment,{children:[e.email==="info@zahid.life"&&M.jsx(er,{to:"/admin",className:"text-white/30 hover:text-white transition-colors",children:M.jsx(Qo,{size:20})}),M.jsx(er,{to:`/user/${e.displayName}`,className:"text-white/30 hover:text-white transition-colors",children:M.jsx(FI,{size:20})}),M.jsx("button",{onClick:n,className:"text-red-500/50 hover:text-red-500 transition-colors",children:M.jsx(EV,{size:20})})]}):M.jsx(er,{to:"/auth",className:"text-[10px] font-black uppercase tracking-widest bg-white text-black px-5 py-2 rounded-full hover:invert transition-all",children:"Giriş Yap"})]})]})})}function RV(){const[t,e]=O.useState([]);return O.useEffect(()=>{const n=Np(Tp(cs,"users"),PI("createdAt","desc"));return xI(n,r=>{e(r.docs.map(i=>({id:i.id,...i.data()})))})},[]),M.jsxs("div",{className:"animate-in fade-in duration-700",children:[M.jsxs("div",{className:"mb-24",children:[M.jsxs("div",{className:"flex items-center gap-3 opacity-20 mb-6",children:[M.jsx(TV,{size:16}),M.jsx("span",{className:"text-[10px] font-bold uppercase tracking-[0.5em]",children:"System.Active"})]}),M.jsxs("h1",{className:"text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8]",children:["ZAHID",M.jsx("br",{}),M.jsx("span",{className:"text-white/10",children:"COLLECTIVE"})]}),M.jsx("p",{className:"mt-8 max-w-xs text-white/30 text-xs font-bold uppercase tracking-widest border-l border-white/10 pl-6",children:"Minimalist dijital varlık topluluğu."})]}),M.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6",children:t.map(n=>{var r,i;return M.jsx(er,{to:`/user/${n.nickname}`,className:"group",children:M.jsxs("div",{className:"bg-white/[0.03] border border-white/5 p-8 rounded-[2.5rem] hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300",children:[M.jsx("div",{className:"w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-xl font-black mb-6 group-hover:scale-110 transition-transform",children:(i=(r=n.nickname)==null?void 0:r[0])==null?void 0:i.toUpperCase()}),M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx("span",{className:"text-xs font-black uppercase tracking-widest truncate",children:n.nickname}),n.email==="info@zahid.life"&&M.jsx(Qo,{size:14,className:"text-blue-500 shrink-0"})]})]})},n.id)})})]})}function AV(){var o,l;const{username:t}=SR(),[e,n]=O.useState(null),[r,i]=O.useState("none"),s=!t||t===((o=$t.currentUser)==null?void 0:o.displayName);return O.useEffect(()=>{(async()=>{var c;if(t&&t!==((c=$t.currentUser)==null?void 0:c.displayName)){const d=Np(Tp(cs,"users"),CD("nickname","==",t)),p=await DD(d);p.empty||n(p.docs[0].data())}else if($t.currentUser){const d=await xD(Ip(cs,"users",$t.currentUser.uid));d.exists()&&n(d.data())}})()},[t]),e?M.jsxs("div",{className:"max-w-5xl mx-auto flex flex-col md:flex-row bg-[#0d0d0f] border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl",children:[M.jsxs("div",{className:"w-full md:w-80 p-12 border-b md:border-b-0 md:border-r border-white/5 flex flex-col items-center shrink-0",children:[M.jsx("div",{className:"w-24 h-24 bg-white/5 rounded-[2.5rem] flex items-center justify-center text-4xl font-black mb-8",children:(l=e.nickname)==null?void 0:l[0].toUpperCase()}),M.jsxs("h2",{className:"text-2xl font-black uppercase tracking-tighter flex items-center gap-2 mb-4",children:[e.nickname,e.email==="info@zahid.life"&&M.jsx(Qo,{size:20,className:"text-blue-500"})]}),M.jsxs("p",{className:"text-sm text-white/40 text-center leading-relaxed italic px-4",children:['"',e.bio||"Sessiz üye.",'"']}),M.jsxs("div",{className:"mt-12 flex items-center gap-2 opacity-10",children:[M.jsx(gV,{size:14}),M.jsx("span",{className:"text-[10px] font-black uppercase tracking-widest",children:"EST. 2024"})]})]}),M.jsx("div",{className:"flex-1 p-12 bg-white/[0.01]",children:s?M.jsxs("div",{className:"space-y-6",children:[M.jsx("p",{className:"text-[10px] font-black opacity-20 uppercase tracking-[0.5em] mb-10",children:"Ayarlar"}),r==="none"?M.jsxs("div",{className:"grid gap-4",children:[M.jsxs("button",{onClick:()=>i("nick"),className:"w-full flex items-center justify-between p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/5",children:[M.jsxs("span",{className:"text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-4",children:[M.jsx(FI,{size:16})," Nickname"]}),M.jsx(P_,{size:16,className:"opacity-20"})]}),M.jsxs("button",{onClick:()=>i("bio"),className:"w-full flex items-center justify-between p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/5",children:[M.jsxs("span",{className:"text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-4",children:[M.jsx(mV,{size:16})," Biyografi"]}),M.jsx(P_,{size:16,className:"opacity-20"})]})]}):M.jsxs("div",{className:"space-y-6 animate-in slide-in-from-right-4",children:[M.jsx("button",{onClick:()=>i("none"),className:"text-[10px] font-black opacity-30 hover:opacity-100 uppercase transition-all",children:"← Vazgeç"}),M.jsx("div",{className:"h-[200px] flex items-center justify-center border border-dashed border-white/10 rounded-2xl opacity-20 font-black uppercase text-xs",children:"Düzenleme Alanı"})]})]}):M.jsx("div",{className:"h-full flex items-center justify-center opacity-5 select-none",children:M.jsx(Qo,{size:150,strokeWidth:1})})})]}):M.jsx("div",{className:"p-20 text-center opacity-20 uppercase font-black tracking-widest",children:"Yükleniyor..."})}function CV(){var s;const[t,e]=O.useState([]),[n,r]=O.useState(null);O.useEffect(()=>{var l;if(((l=$t.currentUser)==null?void 0:l.email)!=="info@zahid.life")return;const o=xI(Np(Tp(cs,"users"),PI("createdAt","desc")),u=>{e(u.docs.map(c=>({id:c.id,...c.data()})))});return()=>o()},[]);const i=o=>{r(o),setTimeout(()=>r(null),3e3)};return((s=$t.currentUser)==null?void 0:s.email)!=="info@zahid.life"?M.jsx("div",{className:"py-40 text-center opacity-10 font-black uppercase tracking-[1em]",children:"Unauthorized"}):M.jsxs("div",{className:"max-w-6xl mx-auto px-4",children:[n&&M.jsxs("div",{className:"fixed top-24 left-1/2 -translate-x-1/2 z-[1000] bg-white text-black px-6 py-3 rounded-2xl font-black text-[10px] tracking-widest flex items-center gap-3",children:[M.jsx(yV,{size:14})," ",n]}),M.jsxs("div",{className:"flex items-center gap-4 mb-12",children:[M.jsx(Qo,{className:"opacity-20",size:32}),M.jsx("h1",{className:"text-3xl font-black uppercase tracking-tighter",children:"Control Panel"})]}),M.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:t.map(o=>{var l,u;return M.jsxs("div",{className:"bg-[#0d0d0f] border border-white/5 p-6 rounded-[2rem]",children:[M.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[M.jsx("div",{className:"w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center font-black",children:(u=(l=o.nickname)==null?void 0:l[0])==null?void 0:u.toUpperCase()}),M.jsxs("div",{className:"min-w-0",children:[M.jsx("p",{className:"font-black text-sm uppercase truncate",children:o.nickname}),M.jsx("p",{className:"text-[9px] opacity-20 truncate",children:o.email})]})]}),M.jsxs("button",{onClick:async()=>{await OD(Ip(cs,"users",o.id),{lastNickChange:LD()}),i("Sıfırlandı")},className:"w-full bg-white/5 border border-white/5 py-3 rounded-xl text-[9px] font-black uppercase hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2",children:[M.jsx(wV,{size:12})," Reset Cooldown"]})]},o.id)})})]})}function kV({onClose:t}){const[e,n]=O.useState("login"),[r,i]=O.useState(""),[s,o]=O.useState(""),[l,u]=O.useState(""),[c,d]=O.useState(""),p=async()=>{try{if(e==="login")await rP($t,r,s);else{const v=await nP($t,r,s);await sP(v.user,{displayName:l}),await VD(Ip(cs,"users",v.user.uid),{uid:v.user.uid,email:r,nickname:l,createdAt:new Date().toISOString()})}t()}catch(v){d(v.message)}},m=async()=>{if(!r)return d("E-posta yazmalısın!");try{await tP($t,r),d("Şifre sıfırlama e-postası başarıyla gönderildi!")}catch(v){d(v.message)}};return M.jsx("div",{className:"fixed inset-0 z-[1000] bg-black/90 backdrop-blur-md flex items-center justify-center p-6",children:M.jsxs("div",{className:"bg-[#0c0c12] border border-white/10 p-12 rounded-[3.5rem] w-full max-w-sm relative shadow-2xl",children:[M.jsx("button",{onClick:t,className:"absolute top-8 right-8 opacity-30 hover:opacity-100",children:M.jsx(IV,{})}),M.jsx("h2",{className:"text-3xl font-black mb-8 italic uppercase tracking-tighter",children:e==="login"?"Giriş":"Kayıt"}),M.jsxs("div",{className:"space-y-3",children:[e==="signup"&&M.jsx("input",{placeholder:"NICKNAME",onChange:v=>u(v.target.value),className:"w-full bg-white/5 border border-white/5 p-4 rounded-2xl font-bold"}),M.jsx("input",{placeholder:"E-POSTA",onChange:v=>i(v.target.value),className:"w-full bg-white/5 border border-white/5 p-4 rounded-2xl font-bold"}),M.jsx("input",{type:"password",placeholder:"ŞİFRE",onChange:v=>o(v.target.value),className:"w-full bg-white/5 border border-white/5 p-4 rounded-2xl font-bold"})]}),M.jsx("button",{onClick:p,className:"w-full bg-purple-600 py-5 rounded-2xl mt-8 font-black text-xs tracking-widest uppercase",children:e==="login"?"GİRİŞ YAP":"KAYDOL"}),M.jsx("button",{onClick:()=>n(e==="login"?"signup":"login"),className:"block w-full text-center mt-6 text-[10px] font-bold opacity-30 uppercase",children:e==="login"?"Hesabın yok mu? Kaydol":"Giriş yap"}),e==="login"&&M.jsx("button",{onClick:m,className:"block w-full text-center mt-2 text-[10px] font-bold text-red-500 uppercase",children:"Şifremi Unuttum"}),c&&M.jsxs("div",{className:"absolute inset-x-6 top-1/2 -translate-y-1/2 bg-[#1a1a24] border border-purple-500 p-8 rounded-3xl shadow-3xl text-center animate-in zoom-in",children:[M.jsx(_V,{className:"mx-auto mb-4 text-purple-500",size:32}),M.jsx("p",{className:"text-sm font-semibold mb-6",children:c}),M.jsx("button",{onClick:()=>d(""),className:"bg-purple-600 px-8 py-3 rounded-xl text-xs font-bold uppercase",children:"Anladım"})]})]})})}function PV(){return M.jsx(uA,{children:M.jsxs("div",{className:"min-h-screen bg-[#0a0a0c] text-white",children:[M.jsx(SV,{}),M.jsx("main",{className:"pt-32 pb-20 px-6 max-w-7xl mx-auto",children:M.jsxs(UR,{children:[M.jsx(Zs,{path:"/",element:M.jsx(RV,{})}),M.jsx(Zs,{path:"/auth",element:M.jsx(kV,{})}),M.jsx(Zs,{path:"/admin",element:M.jsx(CV,{})}),M.jsx(Zs,{path:"/user/:username",element:M.jsx(AV,{})})]})})]})})}ph.createRoot(document.getElementById("root")).render(M.jsx(N0.StrictMode,{children:M.jsx(PV,{})}));
