(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function TI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var M_={exports:{}},Eu={},U_={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ea=Symbol.for("react.element"),II=Symbol.for("react.portal"),SI=Symbol.for("react.fragment"),RI=Symbol.for("react.strict_mode"),AI=Symbol.for("react.profiler"),CI=Symbol.for("react.provider"),kI=Symbol.for("react.context"),PI=Symbol.for("react.forward_ref"),xI=Symbol.for("react.suspense"),NI=Symbol.for("react.memo"),DI=Symbol.for("react.lazy"),jm=Symbol.iterator;function OI(t){return t===null||typeof t!="object"?null:(t=jm&&t[jm]||t["@@iterator"],typeof t=="function"?t:null)}var F_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j_=Object.assign,z_={};function ys(t,e,n){this.props=t,this.context=e,this.refs=z_,this.updater=n||F_}ys.prototype.isReactComponent={};ys.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ys.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function B_(){}B_.prototype=ys.prototype;function jd(t,e,n){this.props=t,this.context=e,this.refs=z_,this.updater=n||F_}var zd=jd.prototype=new B_;zd.constructor=jd;j_(zd,ys.prototype);zd.isPureReactComponent=!0;var zm=Array.isArray,$_=Object.prototype.hasOwnProperty,Bd={current:null},H_={key:!0,ref:!0,__self:!0,__source:!0};function q_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)$_.call(e,r)&&!H_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ea,type:t,key:s,ref:o,props:i,_owner:Bd.current}}function VI(t,e){return{$$typeof:ea,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function $d(t){return typeof t=="object"&&t!==null&&t.$$typeof===ea}function bI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Bm=/\/+/g;function xc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?bI(""+t.key):e.toString(36)}function rl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ea:case II:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+xc(o,0):r,zm(i)?(n="",t!=null&&(n=t.replace(Bm,"$&/")+"/"),rl(i,e,n,"",function(c){return c})):i!=null&&($d(i)&&(i=VI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Bm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",zm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+xc(s,l);o+=rl(s,e,n,u,i)}else if(u=OI(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+xc(s,l++),o+=rl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Da(t,e,n){if(t==null)return t;var r=[],i=0;return rl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function LI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ut={current:null},il={transition:null},MI={ReactCurrentDispatcher:ut,ReactCurrentBatchConfig:il,ReactCurrentOwner:Bd};function W_(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:Da,forEach:function(t,e,n){Da(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Da(t,function(){e++}),e},toArray:function(t){return Da(t,function(e){return e})||[]},only:function(t){if(!$d(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=ys;ee.Fragment=SI;ee.Profiler=AI;ee.PureComponent=jd;ee.StrictMode=RI;ee.Suspense=xI;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MI;ee.act=W_;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=j_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Bd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)$_.call(e,u)&&!H_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:ea,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:kI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:CI,_context:t},t.Consumer=t};ee.createElement=q_;ee.createFactory=function(t){var e=q_.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:PI,render:t}};ee.isValidElement=$d;ee.lazy=function(t){return{$$typeof:DI,_payload:{_status:-1,_result:t},_init:LI}};ee.memo=function(t,e){return{$$typeof:NI,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=il.transition;il.transition={};try{t()}finally{il.transition=e}};ee.unstable_act=W_;ee.useCallback=function(t,e){return ut.current.useCallback(t,e)};ee.useContext=function(t){return ut.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return ut.current.useDeferredValue(t)};ee.useEffect=function(t,e){return ut.current.useEffect(t,e)};ee.useId=function(){return ut.current.useId()};ee.useImperativeHandle=function(t,e,n){return ut.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return ut.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return ut.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return ut.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return ut.current.useReducer(t,e,n)};ee.useRef=function(t){return ut.current.useRef(t)};ee.useState=function(t){return ut.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return ut.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return ut.current.useTransition()};ee.version="18.3.1";U_.exports=ee;var D=U_.exports;const UI=TI(D);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FI=D,jI=Symbol.for("react.element"),zI=Symbol.for("react.fragment"),BI=Object.prototype.hasOwnProperty,$I=FI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,HI={key:!0,ref:!0,__self:!0,__source:!0};function G_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)BI.call(e,r)&&!HI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:jI,type:t,key:s,ref:o,props:i,_owner:$I.current}}Eu.Fragment=zI;Eu.jsx=G_;Eu.jsxs=G_;M_.exports=Eu;var O=M_.exports,_h={},K_={exports:{}},Rt={},Q_={exports:{}},Y_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Q){var J=$.length;$.push(Q);e:for(;0<J;){var me=J-1>>>1,Re=$[me];if(0<i(Re,Q))$[me]=Q,$[J]=Re,J=me;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Q=$[0],J=$.pop();if(J!==Q){$[0]=J;e:for(var me=0,Re=$.length,Fr=Re>>>1;me<Fr;){var kt=2*(me+1)-1,jr=$[kt],Mt=kt+1,zn=$[Mt];if(0>i(jr,J))Mt<Re&&0>i(zn,jr)?($[me]=zn,$[Mt]=J,me=Mt):($[me]=jr,$[kt]=J,me=kt);else if(Mt<Re&&0>i(zn,J))$[me]=zn,$[Mt]=J,me=Mt;else break e}}return Q}function i($,Q){var J=$.sortIndex-Q.sortIndex;return J!==0?J:$.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,m=3,_=!1,A=!1,k=!1,P=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T($){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=$)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function b($){if(k=!1,T($),!A)if(n(u)!==null)A=!0,ks(U);else{var Q=n(c);Q!==null&&Ps(b,Q.startTime-$)}}function U($,Q){A=!1,k&&(k=!1,w(y),y=-1),_=!0;var J=m;try{for(T(Q),p=n(u);p!==null&&(!(p.expirationTime>Q)||$&&!C());){var me=p.callback;if(typeof me=="function"){p.callback=null,m=p.priorityLevel;var Re=me(p.expirationTime<=Q);Q=t.unstable_now(),typeof Re=="function"?p.callback=Re:p===n(u)&&r(u),T(Q)}else r(u);p=n(u)}if(p!==null)var Fr=!0;else{var kt=n(c);kt!==null&&Ps(b,kt.startTime-Q),Fr=!1}return Fr}finally{p=null,m=J,_=!1}}var j=!1,E=null,y=-1,I=5,R=-1;function C(){return!(t.unstable_now()-R<I)}function x(){if(E!==null){var $=t.unstable_now();R=$;var Q=!0;try{Q=E(!0,$)}finally{Q?S():(j=!1,E=null)}}else j=!1}var S;if(typeof v=="function")S=function(){v(x)};else if(typeof MessageChannel<"u"){var Be=new MessageChannel,wn=Be.port2;Be.port1.onmessage=x,S=function(){wn.postMessage(null)}}else S=function(){P(x,0)};function ks($){E=$,j||(j=!0,S())}function Ps($,Q){y=P(function(){$(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){A||_||(A=!0,ks(U))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var J=m;m=Q;try{return $()}finally{m=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Q){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var J=m;m=$;try{return Q()}finally{m=J}},t.unstable_scheduleCallback=function($,Q,J){var me=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?me+J:me):J=me,$){case 1:var Re=-1;break;case 2:Re=250;break;case 5:Re=1073741823;break;case 4:Re=1e4;break;default:Re=5e3}return Re=J+Re,$={id:d++,callback:Q,priorityLevel:$,startTime:J,expirationTime:Re,sortIndex:-1},J>me?($.sortIndex=J,e(c,$),n(u)===null&&$===n(c)&&(k?(w(y),y=-1):k=!0,Ps(b,J-me))):($.sortIndex=Re,e(u,$),A||_||(A=!0,ks(U))),$},t.unstable_shouldYield=C,t.unstable_wrapCallback=function($){var Q=m;return function(){var J=m;m=Q;try{return $.apply(this,arguments)}finally{m=J}}}})(Y_);Q_.exports=Y_;var qI=Q_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WI=D,St=qI;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var X_=new Set,Ao={};function mi(t,e){es(t,e),es(t+"Capture",e)}function es(t,e){for(Ao[t]=e,t=0;t<e.length;t++)X_.add(e[t])}var xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vh=Object.prototype.hasOwnProperty,GI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$m={},Hm={};function KI(t){return vh.call(Hm,t)?!0:vh.call($m,t)?!1:GI.test(t)?Hm[t]=!0:($m[t]=!0,!1)}function QI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function YI(t,e,n,r){if(e===null||typeof e>"u"||QI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ct(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ge[t]=new ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ge[e]=new ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ge[t]=new ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ge[t]=new ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ge[t]=new ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ge[t]=new ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ge[t]=new ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ge[t]=new ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ge[t]=new ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var Hd=/[\-:]([a-z])/g;function qd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Hd,qd);Ge[e]=new ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Hd,qd);Ge[e]=new ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Hd,qd);Ge[e]=new ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ge[t]=new ct(t,1,!1,t.toLowerCase(),null,!1,!1)});Ge.xlinkHref=new ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ge[t]=new ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function Wd(t,e,n,r){var i=Ge.hasOwnProperty(e)?Ge[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(YI(e,n,i,r)&&(n=null),r||i===null?KI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Fn=WI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oa=Symbol.for("react.element"),xi=Symbol.for("react.portal"),Ni=Symbol.for("react.fragment"),Gd=Symbol.for("react.strict_mode"),wh=Symbol.for("react.profiler"),J_=Symbol.for("react.provider"),Z_=Symbol.for("react.context"),Kd=Symbol.for("react.forward_ref"),Eh=Symbol.for("react.suspense"),Th=Symbol.for("react.suspense_list"),Qd=Symbol.for("react.memo"),Yn=Symbol.for("react.lazy"),ev=Symbol.for("react.offscreen"),qm=Symbol.iterator;function Ws(t){return t===null||typeof t!="object"?null:(t=qm&&t[qm]||t["@@iterator"],typeof t=="function"?t:null)}var we=Object.assign,Nc;function to(t){if(Nc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Nc=e&&e[1]||""}return`
`+Nc+t}var Dc=!1;function Oc(t,e){if(!t||Dc)return"";Dc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Dc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?to(t):""}function XI(t){switch(t.tag){case 5:return to(t.type);case 16:return to("Lazy");case 13:return to("Suspense");case 19:return to("SuspenseList");case 0:case 2:case 15:return t=Oc(t.type,!1),t;case 11:return t=Oc(t.type.render,!1),t;case 1:return t=Oc(t.type,!0),t;default:return""}}function Ih(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ni:return"Fragment";case xi:return"Portal";case wh:return"Profiler";case Gd:return"StrictMode";case Eh:return"Suspense";case Th:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Z_:return(t.displayName||"Context")+".Consumer";case J_:return(t._context.displayName||"Context")+".Provider";case Kd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qd:return e=t.displayName||null,e!==null?e:Ih(t.type)||"Memo";case Yn:e=t._payload,t=t._init;try{return Ih(t(e))}catch{}}return null}function JI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ih(e);case 8:return e===Gd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function tv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ZI(t){var e=tv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Va(t){t._valueTracker||(t._valueTracker=ZI(t))}function nv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=tv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Cl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Sh(t,e){var n=e.checked;return we({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Wm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Er(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function rv(t,e){e=e.checked,e!=null&&Wd(t,"checked",e,!1)}function Rh(t,e){rv(t,e);var n=Er(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ah(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ah(t,e.type,Er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Gm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ah(t,e,n){(e!=="number"||Cl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var no=Array.isArray;function $i(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Er(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ch(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return we({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Km(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(no(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Er(n)}}function iv(t,e){var n=Er(e.value),r=Er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Qm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function sv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?sv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ba,ov=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ba=ba||document.createElement("div"),ba.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ba.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Co(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ho={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},e1=["Webkit","ms","Moz","O"];Object.keys(ho).forEach(function(t){e1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ho[e]=ho[t]})});function av(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ho.hasOwnProperty(t)&&ho[t]?(""+e).trim():e+"px"}function lv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=av(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var t1=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ph(t,e){if(e){if(t1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function xh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nh=null;function Yd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Dh=null,Hi=null,qi=null;function Ym(t){if(t=ra(t)){if(typeof Dh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Au(e),Dh(t.stateNode,t.type,e))}}function uv(t){Hi?qi?qi.push(t):qi=[t]:Hi=t}function cv(){if(Hi){var t=Hi,e=qi;if(qi=Hi=null,Ym(t),e)for(t=0;t<e.length;t++)Ym(e[t])}}function hv(t,e){return t(e)}function dv(){}var Vc=!1;function fv(t,e,n){if(Vc)return t(e,n);Vc=!0;try{return hv(t,e,n)}finally{Vc=!1,(Hi!==null||qi!==null)&&(dv(),cv())}}function ko(t,e){var n=t.stateNode;if(n===null)return null;var r=Au(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Oh=!1;if(xn)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){Oh=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{Oh=!1}function n1(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var fo=!1,kl=null,Pl=!1,Vh=null,r1={onError:function(t){fo=!0,kl=t}};function i1(t,e,n,r,i,s,o,l,u){fo=!1,kl=null,n1.apply(r1,arguments)}function s1(t,e,n,r,i,s,o,l,u){if(i1.apply(this,arguments),fo){if(fo){var c=kl;fo=!1,kl=null}else throw Error(F(198));Pl||(Pl=!0,Vh=c)}}function gi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function pv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Xm(t){if(gi(t)!==t)throw Error(F(188))}function o1(t){var e=t.alternate;if(!e){if(e=gi(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Xm(i),t;if(s===r)return Xm(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function mv(t){return t=o1(t),t!==null?gv(t):null}function gv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=gv(t);if(e!==null)return e;t=t.sibling}return null}var yv=St.unstable_scheduleCallback,Jm=St.unstable_cancelCallback,a1=St.unstable_shouldYield,l1=St.unstable_requestPaint,Ce=St.unstable_now,u1=St.unstable_getCurrentPriorityLevel,Xd=St.unstable_ImmediatePriority,_v=St.unstable_UserBlockingPriority,xl=St.unstable_NormalPriority,c1=St.unstable_LowPriority,vv=St.unstable_IdlePriority,Tu=null,sn=null;function h1(t){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(Tu,t,void 0,(t.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:p1,d1=Math.log,f1=Math.LN2;function p1(t){return t>>>=0,t===0?32:31-(d1(t)/f1|0)|0}var La=64,Ma=4194304;function ro(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Nl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ro(l):(s&=o,s!==0&&(r=ro(s)))}else o=n&~i,o!==0?r=ro(o):s!==0&&(r=ro(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ht(e),i=1<<n,r|=t[n],e&=~i;return r}function m1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function g1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ht(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=m1(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function bh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function wv(){var t=La;return La<<=1,!(La&4194240)&&(La=64),t}function bc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ta(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ht(e),t[e]=n}function y1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ht(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Jd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ht(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ae=0;function Ev(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Tv,Zd,Iv,Sv,Rv,Lh=!1,Ua=[],lr=null,ur=null,cr=null,Po=new Map,xo=new Map,Jn=[],_1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zm(t,e){switch(t){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":Po.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(e.pointerId)}}function Ks(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ra(e),e!==null&&Zd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function v1(t,e,n,r,i){switch(e){case"focusin":return lr=Ks(lr,t,e,n,r,i),!0;case"dragenter":return ur=Ks(ur,t,e,n,r,i),!0;case"mouseover":return cr=Ks(cr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Po.set(s,Ks(Po.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,xo.set(s,Ks(xo.get(s)||null,t,e,n,r,i)),!0}return!1}function Av(t){var e=Qr(t.target);if(e!==null){var n=gi(e);if(n!==null){if(e=n.tag,e===13){if(e=pv(n),e!==null){t.blockedOn=e,Rv(t.priority,function(){Iv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function sl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Mh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Nh=r,n.target.dispatchEvent(r),Nh=null}else return e=ra(n),e!==null&&Zd(e),t.blockedOn=n,!1;e.shift()}return!0}function eg(t,e,n){sl(t)&&n.delete(e)}function w1(){Lh=!1,lr!==null&&sl(lr)&&(lr=null),ur!==null&&sl(ur)&&(ur=null),cr!==null&&sl(cr)&&(cr=null),Po.forEach(eg),xo.forEach(eg)}function Qs(t,e){t.blockedOn===e&&(t.blockedOn=null,Lh||(Lh=!0,St.unstable_scheduleCallback(St.unstable_NormalPriority,w1)))}function No(t){function e(i){return Qs(i,t)}if(0<Ua.length){Qs(Ua[0],t);for(var n=1;n<Ua.length;n++){var r=Ua[n];r.blockedOn===t&&(r.blockedOn=null)}}for(lr!==null&&Qs(lr,t),ur!==null&&Qs(ur,t),cr!==null&&Qs(cr,t),Po.forEach(e),xo.forEach(e),n=0;n<Jn.length;n++)r=Jn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Jn.length&&(n=Jn[0],n.blockedOn===null);)Av(n),n.blockedOn===null&&Jn.shift()}var Wi=Fn.ReactCurrentBatchConfig,Dl=!0;function E1(t,e,n,r){var i=ae,s=Wi.transition;Wi.transition=null;try{ae=1,ef(t,e,n,r)}finally{ae=i,Wi.transition=s}}function T1(t,e,n,r){var i=ae,s=Wi.transition;Wi.transition=null;try{ae=4,ef(t,e,n,r)}finally{ae=i,Wi.transition=s}}function ef(t,e,n,r){if(Dl){var i=Mh(t,e,n,r);if(i===null)qc(t,e,r,Ol,n),Zm(t,r);else if(v1(i,t,e,n,r))r.stopPropagation();else if(Zm(t,r),e&4&&-1<_1.indexOf(t)){for(;i!==null;){var s=ra(i);if(s!==null&&Tv(s),s=Mh(t,e,n,r),s===null&&qc(t,e,r,Ol,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else qc(t,e,r,null,n)}}var Ol=null;function Mh(t,e,n,r){if(Ol=null,t=Yd(r),t=Qr(t),t!==null)if(e=gi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=pv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ol=t,null}function Cv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(u1()){case Xd:return 1;case _v:return 4;case xl:case c1:return 16;case vv:return 536870912;default:return 16}default:return 16}}var sr=null,tf=null,ol=null;function kv(){if(ol)return ol;var t,e=tf,n=e.length,r,i="value"in sr?sr.value:sr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ol=i.slice(t,1<r?1-r:void 0)}function al(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Fa(){return!0}function tg(){return!1}function At(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Fa:tg,this.isPropagationStopped=tg,this}return we(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fa)},persist:function(){},isPersistent:Fa}),e}var _s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nf=At(_s),na=we({},_s,{view:0,detail:0}),I1=At(na),Lc,Mc,Ys,Iu=we({},na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ys&&(Ys&&t.type==="mousemove"?(Lc=t.screenX-Ys.screenX,Mc=t.screenY-Ys.screenY):Mc=Lc=0,Ys=t),Lc)},movementY:function(t){return"movementY"in t?t.movementY:Mc}}),ng=At(Iu),S1=we({},Iu,{dataTransfer:0}),R1=At(S1),A1=we({},na,{relatedTarget:0}),Uc=At(A1),C1=we({},_s,{animationName:0,elapsedTime:0,pseudoElement:0}),k1=At(C1),P1=we({},_s,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),x1=At(P1),N1=we({},_s,{data:0}),rg=At(N1),D1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},O1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function b1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=V1[t])?!!e[t]:!1}function rf(){return b1}var L1=we({},na,{key:function(t){if(t.key){var e=D1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?O1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rf,charCode:function(t){return t.type==="keypress"?al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),M1=At(L1),U1=we({},Iu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ig=At(U1),F1=we({},na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rf}),j1=At(F1),z1=we({},_s,{propertyName:0,elapsedTime:0,pseudoElement:0}),B1=At(z1),$1=we({},Iu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),H1=At($1),q1=[9,13,27,32],sf=xn&&"CompositionEvent"in window,po=null;xn&&"documentMode"in document&&(po=document.documentMode);var W1=xn&&"TextEvent"in window&&!po,Pv=xn&&(!sf||po&&8<po&&11>=po),sg=" ",og=!1;function xv(t,e){switch(t){case"keyup":return q1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Di=!1;function G1(t,e){switch(t){case"compositionend":return Nv(e);case"keypress":return e.which!==32?null:(og=!0,sg);case"textInput":return t=e.data,t===sg&&og?null:t;default:return null}}function K1(t,e){if(Di)return t==="compositionend"||!sf&&xv(t,e)?(t=kv(),ol=tf=sr=null,Di=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Pv&&e.locale!=="ko"?null:e.data;default:return null}}var Q1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ag(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Q1[t.type]:e==="textarea"}function Dv(t,e,n,r){uv(r),e=Vl(e,"onChange"),0<e.length&&(n=new nf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var mo=null,Do=null;function Y1(t){$v(t,0)}function Su(t){var e=bi(t);if(nv(e))return t}function X1(t,e){if(t==="change")return e}var Ov=!1;if(xn){var Fc;if(xn){var jc="oninput"in document;if(!jc){var lg=document.createElement("div");lg.setAttribute("oninput","return;"),jc=typeof lg.oninput=="function"}Fc=jc}else Fc=!1;Ov=Fc&&(!document.documentMode||9<document.documentMode)}function ug(){mo&&(mo.detachEvent("onpropertychange",Vv),Do=mo=null)}function Vv(t){if(t.propertyName==="value"&&Su(Do)){var e=[];Dv(e,Do,t,Yd(t)),fv(Y1,e)}}function J1(t,e,n){t==="focusin"?(ug(),mo=e,Do=n,mo.attachEvent("onpropertychange",Vv)):t==="focusout"&&ug()}function Z1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Su(Do)}function eS(t,e){if(t==="click")return Su(e)}function tS(t,e){if(t==="input"||t==="change")return Su(e)}function nS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wt=typeof Object.is=="function"?Object.is:nS;function Oo(t,e){if(Wt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!vh.call(e,i)||!Wt(t[i],e[i]))return!1}return!0}function cg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hg(t,e){var n=cg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cg(n)}}function bv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?bv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Lv(){for(var t=window,e=Cl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Cl(t.document)}return e}function of(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function rS(t){var e=Lv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&bv(n.ownerDocument.documentElement,n)){if(r!==null&&of(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=hg(n,s);var o=hg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var iS=xn&&"documentMode"in document&&11>=document.documentMode,Oi=null,Uh=null,go=null,Fh=!1;function dg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fh||Oi==null||Oi!==Cl(r)||(r=Oi,"selectionStart"in r&&of(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),go&&Oo(go,r)||(go=r,r=Vl(Uh,"onSelect"),0<r.length&&(e=new nf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Oi)))}function ja(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Vi={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionend:ja("Transition","TransitionEnd")},zc={},Mv={};xn&&(Mv=document.createElement("div").style,"AnimationEvent"in window||(delete Vi.animationend.animation,delete Vi.animationiteration.animation,delete Vi.animationstart.animation),"TransitionEvent"in window||delete Vi.transitionend.transition);function Ru(t){if(zc[t])return zc[t];if(!Vi[t])return t;var e=Vi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Mv)return zc[t]=e[n];return t}var Uv=Ru("animationend"),Fv=Ru("animationiteration"),jv=Ru("animationstart"),zv=Ru("transitionend"),Bv=new Map,fg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(t,e){Bv.set(t,e),mi(e,[t])}for(var Bc=0;Bc<fg.length;Bc++){var $c=fg[Bc],sS=$c.toLowerCase(),oS=$c[0].toUpperCase()+$c.slice(1);Nr(sS,"on"+oS)}Nr(Uv,"onAnimationEnd");Nr(Fv,"onAnimationIteration");Nr(jv,"onAnimationStart");Nr("dblclick","onDoubleClick");Nr("focusin","onFocus");Nr("focusout","onBlur");Nr(zv,"onTransitionEnd");es("onMouseEnter",["mouseout","mouseover"]);es("onMouseLeave",["mouseout","mouseover"]);es("onPointerEnter",["pointerout","pointerover"]);es("onPointerLeave",["pointerout","pointerover"]);mi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mi("onBeforeInput",["compositionend","keypress","textInput","paste"]);mi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aS=new Set("cancel close invalid load scroll toggle".split(" ").concat(io));function pg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,s1(r,e,void 0,t),t.currentTarget=null}function $v(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;pg(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;pg(i,l,c),s=u}}}if(Pl)throw t=Vh,Pl=!1,Vh=null,t}function de(t,e){var n=e[Hh];n===void 0&&(n=e[Hh]=new Set);var r=t+"__bubble";n.has(r)||(Hv(e,t,2,!1),n.add(r))}function Hc(t,e,n){var r=0;e&&(r|=4),Hv(n,t,r,e)}var za="_reactListening"+Math.random().toString(36).slice(2);function Vo(t){if(!t[za]){t[za]=!0,X_.forEach(function(n){n!=="selectionchange"&&(aS.has(n)||Hc(n,!1,t),Hc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[za]||(e[za]=!0,Hc("selectionchange",!1,e))}}function Hv(t,e,n,r){switch(Cv(e)){case 1:var i=E1;break;case 4:i=T1;break;default:i=ef}n=i.bind(null,e,n,t),i=void 0,!Oh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function qc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Qr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}fv(function(){var c=s,d=Yd(n),p=[];e:{var m=Bv.get(t);if(m!==void 0){var _=nf,A=t;switch(t){case"keypress":if(al(n)===0)break e;case"keydown":case"keyup":_=M1;break;case"focusin":A="focus",_=Uc;break;case"focusout":A="blur",_=Uc;break;case"beforeblur":case"afterblur":_=Uc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=ng;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=R1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=j1;break;case Uv:case Fv:case jv:_=k1;break;case zv:_=B1;break;case"scroll":_=I1;break;case"wheel":_=H1;break;case"copy":case"cut":case"paste":_=x1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=ig}var k=(e&4)!==0,P=!k&&t==="scroll",w=k?m!==null?m+"Capture":null:m;k=[];for(var v=c,T;v!==null;){T=v;var b=T.stateNode;if(T.tag===5&&b!==null&&(T=b,w!==null&&(b=ko(v,w),b!=null&&k.push(bo(v,b,T)))),P)break;v=v.return}0<k.length&&(m=new _(m,A,null,n,d),p.push({event:m,listeners:k}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",m&&n!==Nh&&(A=n.relatedTarget||n.fromElement)&&(Qr(A)||A[Nn]))break e;if((_||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,_?(A=n.relatedTarget||n.toElement,_=c,A=A?Qr(A):null,A!==null&&(P=gi(A),A!==P||A.tag!==5&&A.tag!==6)&&(A=null)):(_=null,A=c),_!==A)){if(k=ng,b="onMouseLeave",w="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(k=ig,b="onPointerLeave",w="onPointerEnter",v="pointer"),P=_==null?m:bi(_),T=A==null?m:bi(A),m=new k(b,v+"leave",_,n,d),m.target=P,m.relatedTarget=T,b=null,Qr(d)===c&&(k=new k(w,v+"enter",A,n,d),k.target=T,k.relatedTarget=P,b=k),P=b,_&&A)t:{for(k=_,w=A,v=0,T=k;T;T=Si(T))v++;for(T=0,b=w;b;b=Si(b))T++;for(;0<v-T;)k=Si(k),v--;for(;0<T-v;)w=Si(w),T--;for(;v--;){if(k===w||w!==null&&k===w.alternate)break t;k=Si(k),w=Si(w)}k=null}else k=null;_!==null&&mg(p,m,_,k,!1),A!==null&&P!==null&&mg(p,P,A,k,!0)}}e:{if(m=c?bi(c):window,_=m.nodeName&&m.nodeName.toLowerCase(),_==="select"||_==="input"&&m.type==="file")var U=X1;else if(ag(m))if(Ov)U=tS;else{U=Z1;var j=J1}else(_=m.nodeName)&&_.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(U=eS);if(U&&(U=U(t,c))){Dv(p,U,n,d);break e}j&&j(t,m,c),t==="focusout"&&(j=m._wrapperState)&&j.controlled&&m.type==="number"&&Ah(m,"number",m.value)}switch(j=c?bi(c):window,t){case"focusin":(ag(j)||j.contentEditable==="true")&&(Oi=j,Uh=c,go=null);break;case"focusout":go=Uh=Oi=null;break;case"mousedown":Fh=!0;break;case"contextmenu":case"mouseup":case"dragend":Fh=!1,dg(p,n,d);break;case"selectionchange":if(iS)break;case"keydown":case"keyup":dg(p,n,d)}var E;if(sf)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Di?xv(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Pv&&n.locale!=="ko"&&(Di||y!=="onCompositionStart"?y==="onCompositionEnd"&&Di&&(E=kv()):(sr=d,tf="value"in sr?sr.value:sr.textContent,Di=!0)),j=Vl(c,y),0<j.length&&(y=new rg(y,t,null,n,d),p.push({event:y,listeners:j}),E?y.data=E:(E=Nv(n),E!==null&&(y.data=E)))),(E=W1?G1(t,n):K1(t,n))&&(c=Vl(c,"onBeforeInput"),0<c.length&&(d=new rg("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=E))}$v(p,e)})}function bo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Vl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ko(t,n),s!=null&&r.unshift(bo(t,s,i)),s=ko(t,e),s!=null&&r.push(bo(t,s,i))),t=t.return}return r}function Si(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function mg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=ko(n,s),u!=null&&o.unshift(bo(n,u,l))):i||(u=ko(n,s),u!=null&&o.push(bo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var lS=/\r\n?/g,uS=/\u0000|\uFFFD/g;function gg(t){return(typeof t=="string"?t:""+t).replace(lS,`
`).replace(uS,"")}function Ba(t,e,n){if(e=gg(e),gg(t)!==e&&n)throw Error(F(425))}function bl(){}var jh=null,zh=null;function Bh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $h=typeof setTimeout=="function"?setTimeout:void 0,cS=typeof clearTimeout=="function"?clearTimeout:void 0,yg=typeof Promise=="function"?Promise:void 0,hS=typeof queueMicrotask=="function"?queueMicrotask:typeof yg<"u"?function(t){return yg.resolve(null).then(t).catch(dS)}:$h;function dS(t){setTimeout(function(){throw t})}function Wc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),No(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);No(e)}function hr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function _g(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var vs=Math.random().toString(36).slice(2),rn="__reactFiber$"+vs,Lo="__reactProps$"+vs,Nn="__reactContainer$"+vs,Hh="__reactEvents$"+vs,fS="__reactListeners$"+vs,pS="__reactHandles$"+vs;function Qr(t){var e=t[rn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Nn]||n[rn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=_g(t);t!==null;){if(n=t[rn])return n;t=_g(t)}return e}t=n,n=t.parentNode}return null}function ra(t){return t=t[rn]||t[Nn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function bi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Au(t){return t[Lo]||null}var qh=[],Li=-1;function Dr(t){return{current:t}}function pe(t){0>Li||(t.current=qh[Li],qh[Li]=null,Li--)}function ce(t,e){Li++,qh[Li]=t.current,t.current=e}var Tr={},nt=Dr(Tr),mt=Dr(!1),ri=Tr;function ts(t,e){var n=t.type.contextTypes;if(!n)return Tr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function gt(t){return t=t.childContextTypes,t!=null}function Ll(){pe(mt),pe(nt)}function vg(t,e,n){if(nt.current!==Tr)throw Error(F(168));ce(nt,e),ce(mt,n)}function qv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,JI(t)||"Unknown",i));return we({},n,r)}function Ml(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Tr,ri=nt.current,ce(nt,t),ce(mt,mt.current),!0}function wg(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=qv(t,e,ri),r.__reactInternalMemoizedMergedChildContext=t,pe(mt),pe(nt),ce(nt,t)):pe(mt),ce(mt,n)}var Tn=null,Cu=!1,Gc=!1;function Wv(t){Tn===null?Tn=[t]:Tn.push(t)}function mS(t){Cu=!0,Wv(t)}function Or(){if(!Gc&&Tn!==null){Gc=!0;var t=0,e=ae;try{var n=Tn;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Tn=null,Cu=!1}catch(i){throw Tn!==null&&(Tn=Tn.slice(t+1)),yv(Xd,Or),i}finally{ae=e,Gc=!1}}return null}var Mi=[],Ui=0,Ul=null,Fl=0,Pt=[],xt=0,ii=null,In=1,Sn="";function Wr(t,e){Mi[Ui++]=Fl,Mi[Ui++]=Ul,Ul=t,Fl=e}function Gv(t,e,n){Pt[xt++]=In,Pt[xt++]=Sn,Pt[xt++]=ii,ii=t;var r=In;t=Sn;var i=32-Ht(r)-1;r&=~(1<<i),n+=1;var s=32-Ht(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,In=1<<32-Ht(e)+i|n<<i|r,Sn=s+t}else In=1<<s|n<<i|r,Sn=t}function af(t){t.return!==null&&(Wr(t,1),Gv(t,1,0))}function lf(t){for(;t===Ul;)Ul=Mi[--Ui],Mi[Ui]=null,Fl=Mi[--Ui],Mi[Ui]=null;for(;t===ii;)ii=Pt[--xt],Pt[xt]=null,Sn=Pt[--xt],Pt[xt]=null,In=Pt[--xt],Pt[xt]=null}var It=null,Et=null,ge=!1,zt=null;function Kv(t,e){var n=Dt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Eg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,It=t,Et=hr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,It=t,Et=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ii!==null?{id:In,overflow:Sn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Dt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,It=t,Et=null,!0):!1;default:return!1}}function Wh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Gh(t){if(ge){var e=Et;if(e){var n=e;if(!Eg(t,e)){if(Wh(t))throw Error(F(418));e=hr(n.nextSibling);var r=It;e&&Eg(t,e)?Kv(r,n):(t.flags=t.flags&-4097|2,ge=!1,It=t)}}else{if(Wh(t))throw Error(F(418));t.flags=t.flags&-4097|2,ge=!1,It=t}}}function Tg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;It=t}function $a(t){if(t!==It)return!1;if(!ge)return Tg(t),ge=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Bh(t.type,t.memoizedProps)),e&&(e=Et)){if(Wh(t))throw Qv(),Error(F(418));for(;e;)Kv(t,e),e=hr(e.nextSibling)}if(Tg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Et=hr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Et=null}}else Et=It?hr(t.stateNode.nextSibling):null;return!0}function Qv(){for(var t=Et;t;)t=hr(t.nextSibling)}function ns(){Et=It=null,ge=!1}function uf(t){zt===null?zt=[t]:zt.push(t)}var gS=Fn.ReactCurrentBatchConfig;function Xs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Ha(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ig(t){var e=t._init;return e(t._payload)}function Yv(t){function e(w,v){if(t){var T=w.deletions;T===null?(w.deletions=[v],w.flags|=16):T.push(v)}}function n(w,v){if(!t)return null;for(;v!==null;)e(w,v),v=v.sibling;return null}function r(w,v){for(w=new Map;v!==null;)v.key!==null?w.set(v.key,v):w.set(v.index,v),v=v.sibling;return w}function i(w,v){return w=mr(w,v),w.index=0,w.sibling=null,w}function s(w,v,T){return w.index=T,t?(T=w.alternate,T!==null?(T=T.index,T<v?(w.flags|=2,v):T):(w.flags|=2,v)):(w.flags|=1048576,v)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,v,T,b){return v===null||v.tag!==6?(v=eh(T,w.mode,b),v.return=w,v):(v=i(v,T),v.return=w,v)}function u(w,v,T,b){var U=T.type;return U===Ni?d(w,v,T.props.children,b,T.key):v!==null&&(v.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Yn&&Ig(U)===v.type)?(b=i(v,T.props),b.ref=Xs(w,v,T),b.return=w,b):(b=pl(T.type,T.key,T.props,null,w.mode,b),b.ref=Xs(w,v,T),b.return=w,b)}function c(w,v,T,b){return v===null||v.tag!==4||v.stateNode.containerInfo!==T.containerInfo||v.stateNode.implementation!==T.implementation?(v=th(T,w.mode,b),v.return=w,v):(v=i(v,T.children||[]),v.return=w,v)}function d(w,v,T,b,U){return v===null||v.tag!==7?(v=ei(T,w.mode,b,U),v.return=w,v):(v=i(v,T),v.return=w,v)}function p(w,v,T){if(typeof v=="string"&&v!==""||typeof v=="number")return v=eh(""+v,w.mode,T),v.return=w,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Oa:return T=pl(v.type,v.key,v.props,null,w.mode,T),T.ref=Xs(w,null,v),T.return=w,T;case xi:return v=th(v,w.mode,T),v.return=w,v;case Yn:var b=v._init;return p(w,b(v._payload),T)}if(no(v)||Ws(v))return v=ei(v,w.mode,T,null),v.return=w,v;Ha(w,v)}return null}function m(w,v,T,b){var U=v!==null?v.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return U!==null?null:l(w,v,""+T,b);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Oa:return T.key===U?u(w,v,T,b):null;case xi:return T.key===U?c(w,v,T,b):null;case Yn:return U=T._init,m(w,v,U(T._payload),b)}if(no(T)||Ws(T))return U!==null?null:d(w,v,T,b,null);Ha(w,T)}return null}function _(w,v,T,b,U){if(typeof b=="string"&&b!==""||typeof b=="number")return w=w.get(T)||null,l(v,w,""+b,U);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Oa:return w=w.get(b.key===null?T:b.key)||null,u(v,w,b,U);case xi:return w=w.get(b.key===null?T:b.key)||null,c(v,w,b,U);case Yn:var j=b._init;return _(w,v,T,j(b._payload),U)}if(no(b)||Ws(b))return w=w.get(T)||null,d(v,w,b,U,null);Ha(v,b)}return null}function A(w,v,T,b){for(var U=null,j=null,E=v,y=v=0,I=null;E!==null&&y<T.length;y++){E.index>y?(I=E,E=null):I=E.sibling;var R=m(w,E,T[y],b);if(R===null){E===null&&(E=I);break}t&&E&&R.alternate===null&&e(w,E),v=s(R,v,y),j===null?U=R:j.sibling=R,j=R,E=I}if(y===T.length)return n(w,E),ge&&Wr(w,y),U;if(E===null){for(;y<T.length;y++)E=p(w,T[y],b),E!==null&&(v=s(E,v,y),j===null?U=E:j.sibling=E,j=E);return ge&&Wr(w,y),U}for(E=r(w,E);y<T.length;y++)I=_(E,w,y,T[y],b),I!==null&&(t&&I.alternate!==null&&E.delete(I.key===null?y:I.key),v=s(I,v,y),j===null?U=I:j.sibling=I,j=I);return t&&E.forEach(function(C){return e(w,C)}),ge&&Wr(w,y),U}function k(w,v,T,b){var U=Ws(T);if(typeof U!="function")throw Error(F(150));if(T=U.call(T),T==null)throw Error(F(151));for(var j=U=null,E=v,y=v=0,I=null,R=T.next();E!==null&&!R.done;y++,R=T.next()){E.index>y?(I=E,E=null):I=E.sibling;var C=m(w,E,R.value,b);if(C===null){E===null&&(E=I);break}t&&E&&C.alternate===null&&e(w,E),v=s(C,v,y),j===null?U=C:j.sibling=C,j=C,E=I}if(R.done)return n(w,E),ge&&Wr(w,y),U;if(E===null){for(;!R.done;y++,R=T.next())R=p(w,R.value,b),R!==null&&(v=s(R,v,y),j===null?U=R:j.sibling=R,j=R);return ge&&Wr(w,y),U}for(E=r(w,E);!R.done;y++,R=T.next())R=_(E,w,y,R.value,b),R!==null&&(t&&R.alternate!==null&&E.delete(R.key===null?y:R.key),v=s(R,v,y),j===null?U=R:j.sibling=R,j=R);return t&&E.forEach(function(x){return e(w,x)}),ge&&Wr(w,y),U}function P(w,v,T,b){if(typeof T=="object"&&T!==null&&T.type===Ni&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case Oa:e:{for(var U=T.key,j=v;j!==null;){if(j.key===U){if(U=T.type,U===Ni){if(j.tag===7){n(w,j.sibling),v=i(j,T.props.children),v.return=w,w=v;break e}}else if(j.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Yn&&Ig(U)===j.type){n(w,j.sibling),v=i(j,T.props),v.ref=Xs(w,j,T),v.return=w,w=v;break e}n(w,j);break}else e(w,j);j=j.sibling}T.type===Ni?(v=ei(T.props.children,w.mode,b,T.key),v.return=w,w=v):(b=pl(T.type,T.key,T.props,null,w.mode,b),b.ref=Xs(w,v,T),b.return=w,w=b)}return o(w);case xi:e:{for(j=T.key;v!==null;){if(v.key===j)if(v.tag===4&&v.stateNode.containerInfo===T.containerInfo&&v.stateNode.implementation===T.implementation){n(w,v.sibling),v=i(v,T.children||[]),v.return=w,w=v;break e}else{n(w,v);break}else e(w,v);v=v.sibling}v=th(T,w.mode,b),v.return=w,w=v}return o(w);case Yn:return j=T._init,P(w,v,j(T._payload),b)}if(no(T))return A(w,v,T,b);if(Ws(T))return k(w,v,T,b);Ha(w,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,v!==null&&v.tag===6?(n(w,v.sibling),v=i(v,T),v.return=w,w=v):(n(w,v),v=eh(T,w.mode,b),v.return=w,w=v),o(w)):n(w,v)}return P}var rs=Yv(!0),Xv=Yv(!1),jl=Dr(null),zl=null,Fi=null,cf=null;function hf(){cf=Fi=zl=null}function df(t){var e=jl.current;pe(jl),t._currentValue=e}function Kh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Gi(t,e){zl=t,cf=Fi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pt=!0),t.firstContext=null)}function Vt(t){var e=t._currentValue;if(cf!==t)if(t={context:t,memoizedValue:e,next:null},Fi===null){if(zl===null)throw Error(F(308));Fi=t,zl.dependencies={lanes:0,firstContext:t}}else Fi=Fi.next=t;return e}var Yr=null;function ff(t){Yr===null?Yr=[t]:Yr.push(t)}function Jv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ff(e)):(n.next=i.next,i.next=n),e.interleaved=n,Dn(t,r)}function Dn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Xn=!1;function pf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Cn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function dr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Dn(t,n)}return i=r.interleaved,i===null?(e.next=e,ff(r)):(e.next=i.next,i.next=e),r.interleaved=e,Dn(t,n)}function ll(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Jd(t,n)}}function Sg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Bl(t,e,n,r){var i=t.updateQueue;Xn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,_=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var A=t,k=l;switch(m=e,_=n,k.tag){case 1:if(A=k.payload,typeof A=="function"){p=A.call(_,p,m);break e}p=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=k.payload,m=typeof A=="function"?A.call(_,p,m):A,m==null)break e;p=we({},p,m);break e;case 2:Xn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else _={eventTime:_,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=_,u=p):d=d.next=_,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);oi|=o,t.lanes=o,t.memoizedState=p}}function Rg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var ia={},on=Dr(ia),Mo=Dr(ia),Uo=Dr(ia);function Xr(t){if(t===ia)throw Error(F(174));return t}function mf(t,e){switch(ce(Uo,e),ce(Mo,t),ce(on,ia),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:kh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=kh(e,t)}pe(on),ce(on,e)}function is(){pe(on),pe(Mo),pe(Uo)}function ew(t){Xr(Uo.current);var e=Xr(on.current),n=kh(e,t.type);e!==n&&(ce(Mo,t),ce(on,n))}function gf(t){Mo.current===t&&(pe(on),pe(Mo))}var _e=Dr(0);function $l(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Kc=[];function yf(){for(var t=0;t<Kc.length;t++)Kc[t]._workInProgressVersionPrimary=null;Kc.length=0}var ul=Fn.ReactCurrentDispatcher,Qc=Fn.ReactCurrentBatchConfig,si=0,ve=null,Ve=null,Fe=null,Hl=!1,yo=!1,Fo=0,yS=0;function Ye(){throw Error(F(321))}function _f(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wt(t[n],e[n]))return!1;return!0}function vf(t,e,n,r,i,s){if(si=s,ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ul.current=t===null||t.memoizedState===null?ES:TS,t=n(r,i),yo){s=0;do{if(yo=!1,Fo=0,25<=s)throw Error(F(301));s+=1,Fe=Ve=null,e.updateQueue=null,ul.current=IS,t=n(r,i)}while(yo)}if(ul.current=ql,e=Ve!==null&&Ve.next!==null,si=0,Fe=Ve=ve=null,Hl=!1,e)throw Error(F(300));return t}function wf(){var t=Fo!==0;return Fo=0,t}function tn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?ve.memoizedState=Fe=t:Fe=Fe.next=t,Fe}function bt(){if(Ve===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var e=Fe===null?ve.memoizedState:Fe.next;if(e!==null)Fe=e,Ve=t;else{if(t===null)throw Error(F(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},Fe===null?ve.memoizedState=Fe=t:Fe=Fe.next=t}return Fe}function jo(t,e){return typeof e=="function"?e(t):e}function Yc(t){var e=bt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Ve,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((si&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,ve.lanes|=d,oi|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Wt(r,e.memoizedState)||(pt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ve.lanes|=s,oi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Xc(t){var e=bt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Wt(s,e.memoizedState)||(pt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function tw(){}function nw(t,e){var n=ve,r=bt(),i=e(),s=!Wt(r.memoizedState,i);if(s&&(r.memoizedState=i,pt=!0),r=r.queue,Ef(sw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,zo(9,iw.bind(null,n,r,i,e),void 0,null),je===null)throw Error(F(349));si&30||rw(n,e,i)}return i}function rw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function iw(t,e,n,r){e.value=n,e.getSnapshot=r,ow(e)&&aw(t)}function sw(t,e,n){return n(function(){ow(e)&&aw(t)})}function ow(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wt(t,n)}catch{return!0}}function aw(t){var e=Dn(t,1);e!==null&&qt(e,t,1,-1)}function Ag(t){var e=tn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jo,lastRenderedState:t},e.queue=t,t=t.dispatch=wS.bind(null,ve,t),[e.memoizedState,t]}function zo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function lw(){return bt().memoizedState}function cl(t,e,n,r){var i=tn();ve.flags|=t,i.memoizedState=zo(1|e,n,void 0,r===void 0?null:r)}function ku(t,e,n,r){var i=bt();r=r===void 0?null:r;var s=void 0;if(Ve!==null){var o=Ve.memoizedState;if(s=o.destroy,r!==null&&_f(r,o.deps)){i.memoizedState=zo(e,n,s,r);return}}ve.flags|=t,i.memoizedState=zo(1|e,n,s,r)}function Cg(t,e){return cl(8390656,8,t,e)}function Ef(t,e){return ku(2048,8,t,e)}function uw(t,e){return ku(4,2,t,e)}function cw(t,e){return ku(4,4,t,e)}function hw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function dw(t,e,n){return n=n!=null?n.concat([t]):null,ku(4,4,hw.bind(null,e,t),n)}function Tf(){}function fw(t,e){var n=bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_f(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function pw(t,e){var n=bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_f(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function mw(t,e,n){return si&21?(Wt(n,e)||(n=wv(),ve.lanes|=n,oi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pt=!0),t.memoizedState=n)}function _S(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=Qc.transition;Qc.transition={};try{t(!1),e()}finally{ae=n,Qc.transition=r}}function gw(){return bt().memoizedState}function vS(t,e,n){var r=pr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},yw(t))_w(e,n);else if(n=Jv(t,e,n,r),n!==null){var i=lt();qt(n,t,r,i),vw(n,e,r)}}function wS(t,e,n){var r=pr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(yw(t))_w(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Wt(l,o)){var u=e.interleaved;u===null?(i.next=i,ff(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Jv(t,e,i,r),n!==null&&(i=lt(),qt(n,t,r,i),vw(n,e,r))}}function yw(t){var e=t.alternate;return t===ve||e!==null&&e===ve}function _w(t,e){yo=Hl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function vw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Jd(t,n)}}var ql={readContext:Vt,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},ES={readContext:Vt,useCallback:function(t,e){return tn().memoizedState=[t,e===void 0?null:e],t},useContext:Vt,useEffect:Cg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,cl(4194308,4,hw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return cl(4194308,4,t,e)},useInsertionEffect:function(t,e){return cl(4,2,t,e)},useMemo:function(t,e){var n=tn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=tn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=vS.bind(null,ve,t),[r.memoizedState,t]},useRef:function(t){var e=tn();return t={current:t},e.memoizedState=t},useState:Ag,useDebugValue:Tf,useDeferredValue:function(t){return tn().memoizedState=t},useTransition:function(){var t=Ag(!1),e=t[0];return t=_S.bind(null,t[1]),tn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ve,i=tn();if(ge){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),je===null)throw Error(F(349));si&30||rw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Cg(sw.bind(null,r,s,t),[t]),r.flags|=2048,zo(9,iw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=tn(),e=je.identifierPrefix;if(ge){var n=Sn,r=In;n=(r&~(1<<32-Ht(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Fo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=yS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},TS={readContext:Vt,useCallback:fw,useContext:Vt,useEffect:Ef,useImperativeHandle:dw,useInsertionEffect:uw,useLayoutEffect:cw,useMemo:pw,useReducer:Yc,useRef:lw,useState:function(){return Yc(jo)},useDebugValue:Tf,useDeferredValue:function(t){var e=bt();return mw(e,Ve.memoizedState,t)},useTransition:function(){var t=Yc(jo)[0],e=bt().memoizedState;return[t,e]},useMutableSource:tw,useSyncExternalStore:nw,useId:gw,unstable_isNewReconciler:!1},IS={readContext:Vt,useCallback:fw,useContext:Vt,useEffect:Ef,useImperativeHandle:dw,useInsertionEffect:uw,useLayoutEffect:cw,useMemo:pw,useReducer:Xc,useRef:lw,useState:function(){return Xc(jo)},useDebugValue:Tf,useDeferredValue:function(t){var e=bt();return Ve===null?e.memoizedState=t:mw(e,Ve.memoizedState,t)},useTransition:function(){var t=Xc(jo)[0],e=bt().memoizedState;return[t,e]},useMutableSource:tw,useSyncExternalStore:nw,useId:gw,unstable_isNewReconciler:!1};function Ft(t,e){if(t&&t.defaultProps){e=we({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Qh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:we({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Pu={isMounted:function(t){return(t=t._reactInternals)?gi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=lt(),i=pr(t),s=Cn(r,i);s.payload=e,n!=null&&(s.callback=n),e=dr(t,s,i),e!==null&&(qt(e,t,i,r),ll(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=lt(),i=pr(t),s=Cn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=dr(t,s,i),e!==null&&(qt(e,t,i,r),ll(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=lt(),r=pr(t),i=Cn(n,r);i.tag=2,e!=null&&(i.callback=e),e=dr(t,i,r),e!==null&&(qt(e,t,r,n),ll(e,t,r))}};function kg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Oo(n,r)||!Oo(i,s):!0}function ww(t,e,n){var r=!1,i=Tr,s=e.contextType;return typeof s=="object"&&s!==null?s=Vt(s):(i=gt(e)?ri:nt.current,r=e.contextTypes,s=(r=r!=null)?ts(t,i):Tr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Pu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Pg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Pu.enqueueReplaceState(e,e.state,null)}function Yh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},pf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Vt(s):(s=gt(e)?ri:nt.current,i.context=ts(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Qh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Pu.enqueueReplaceState(i,i.state,null),Bl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ss(t,e){try{var n="",r=e;do n+=XI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Jc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Xh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var SS=typeof WeakMap=="function"?WeakMap:Map;function Ew(t,e,n){n=Cn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Gl||(Gl=!0,ad=r),Xh(t,e)},n}function Tw(t,e,n){n=Cn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Xh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Xh(t,e),typeof r!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function xg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new SS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=US.bind(null,t,e,n),e.then(t,t))}function Ng(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Dg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Cn(-1,1),e.tag=2,dr(n,e,1))),n.lanes|=1),t)}var RS=Fn.ReactCurrentOwner,pt=!1;function ot(t,e,n,r){e.child=t===null?Xv(e,null,n,r):rs(e,t.child,n,r)}function Og(t,e,n,r,i){n=n.render;var s=e.ref;return Gi(e,i),r=vf(t,e,n,r,s,i),n=wf(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,On(t,e,i)):(ge&&n&&af(e),e.flags|=1,ot(t,e,r,i),e.child)}function Vg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!xf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Iw(t,e,s,r,i)):(t=pl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Oo,n(o,r)&&t.ref===e.ref)return On(t,e,i)}return e.flags|=1,t=mr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Iw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Oo(s,r)&&t.ref===e.ref)if(pt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(pt=!0);else return e.lanes=t.lanes,On(t,e,i)}return Jh(t,e,n,r,i)}function Sw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(zi,vt),vt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(zi,vt),vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(zi,vt),vt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(zi,vt),vt|=r;return ot(t,e,i,n),e.child}function Rw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Jh(t,e,n,r,i){var s=gt(n)?ri:nt.current;return s=ts(e,s),Gi(e,i),n=vf(t,e,n,r,s,i),r=wf(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,On(t,e,i)):(ge&&r&&af(e),e.flags|=1,ot(t,e,n,i),e.child)}function bg(t,e,n,r,i){if(gt(n)){var s=!0;Ml(e)}else s=!1;if(Gi(e,i),e.stateNode===null)hl(t,e),ww(e,n,r),Yh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Vt(c):(c=gt(n)?ri:nt.current,c=ts(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Pg(e,o,r,c),Xn=!1;var m=e.memoizedState;o.state=m,Bl(e,r,o,i),u=e.memoizedState,l!==r||m!==u||mt.current||Xn?(typeof d=="function"&&(Qh(e,n,d,r),u=e.memoizedState),(l=Xn||kg(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Zv(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Ft(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Vt(u):(u=gt(n)?ri:nt.current,u=ts(e,u));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&Pg(e,o,r,u),Xn=!1,m=e.memoizedState,o.state=m,Bl(e,r,o,i);var A=e.memoizedState;l!==p||m!==A||mt.current||Xn?(typeof _=="function"&&(Qh(e,n,_,r),A=e.memoizedState),(c=Xn||kg(e,n,c,r,m,A,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),o.props=r,o.state=A,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Zh(t,e,n,r,s,i)}function Zh(t,e,n,r,i,s){Rw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&wg(e,n,!1),On(t,e,s);r=e.stateNode,RS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=rs(e,t.child,null,s),e.child=rs(e,null,l,s)):ot(t,e,l,s),e.memoizedState=r.state,i&&wg(e,n,!0),e.child}function Aw(t){var e=t.stateNode;e.pendingContext?vg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&vg(t,e.context,!1),mf(t,e.containerInfo)}function Lg(t,e,n,r,i){return ns(),uf(i),e.flags|=256,ot(t,e,n,r),e.child}var ed={dehydrated:null,treeContext:null,retryLane:0};function td(t){return{baseLanes:t,cachePool:null,transitions:null}}function Cw(t,e,n){var r=e.pendingProps,i=_e.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(_e,i&1),t===null)return Gh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Du(o,r,0,null),t=ei(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=td(n),e.memoizedState=ed,t):If(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return AS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=mr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=mr(l,s):(s=ei(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?td(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ed,r}return s=t.child,t=s.sibling,r=mr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function If(t,e){return e=Du({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function qa(t,e,n,r){return r!==null&&uf(r),rs(e,t.child,null,n),t=If(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function AS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Jc(Error(F(422))),qa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Du({mode:"visible",children:r.children},i,0,null),s=ei(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&rs(e,t.child,null,o),e.child.memoizedState=td(o),e.memoizedState=ed,s);if(!(e.mode&1))return qa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=Jc(s,r,void 0),qa(t,e,o,r)}if(l=(o&t.childLanes)!==0,pt||l){if(r=je,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Dn(t,i),qt(r,t,i,-1))}return Pf(),r=Jc(Error(F(421))),qa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=FS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Et=hr(i.nextSibling),It=e,ge=!0,zt=null,t!==null&&(Pt[xt++]=In,Pt[xt++]=Sn,Pt[xt++]=ii,In=t.id,Sn=t.overflow,ii=e),e=If(e,r.children),e.flags|=4096,e)}function Mg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Kh(t.return,e,n)}function Zc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function kw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ot(t,e,r.children,n),r=_e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mg(t,n,e);else if(t.tag===19)Mg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(_e,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&$l(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Zc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&$l(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Zc(e,!0,n,null,s);break;case"together":Zc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function hl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function On(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),oi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function CS(t,e,n){switch(e.tag){case 3:Aw(e),ns();break;case 5:ew(e);break;case 1:gt(e.type)&&Ml(e);break;case 4:mf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(jl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(_e,_e.current&1),e.flags|=128,null):n&e.child.childLanes?Cw(t,e,n):(ce(_e,_e.current&1),t=On(t,e,n),t!==null?t.sibling:null);ce(_e,_e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return kw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(_e,_e.current),r)break;return null;case 22:case 23:return e.lanes=0,Sw(t,e,n)}return On(t,e,n)}var Pw,nd,xw,Nw;Pw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nd=function(){};xw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Xr(on.current);var s=null;switch(n){case"input":i=Sh(t,i),r=Sh(t,r),s=[];break;case"select":i=we({},i,{value:void 0}),r=we({},r,{value:void 0}),s=[];break;case"textarea":i=Ch(t,i),r=Ch(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=bl)}Ph(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ao.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ao.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&de("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Nw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Js(t,e){if(!ge)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Xe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function kS(t,e,n){var r=e.pendingProps;switch(lf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(e),null;case 1:return gt(e.type)&&Ll(),Xe(e),null;case 3:return r=e.stateNode,is(),pe(mt),pe(nt),yf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&($a(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,zt!==null&&(cd(zt),zt=null))),nd(t,e),Xe(e),null;case 5:gf(e);var i=Xr(Uo.current);if(n=e.type,t!==null&&e.stateNode!=null)xw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return Xe(e),null}if(t=Xr(on.current),$a(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[rn]=e,r[Lo]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<io.length;i++)de(io[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":Wm(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":Km(r,s),de("invalid",r)}Ph(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ba(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ba(r.textContent,l,t),i=["children",""+l]):Ao.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":Va(r),Gm(r,s,!0);break;case"textarea":Va(r),Qm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=bl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=sv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[rn]=e,t[Lo]=r,Pw(t,e,!1,!1),e.stateNode=t;e:{switch(o=xh(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<io.length;i++)de(io[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":Wm(t,r),i=Sh(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=we({},r,{value:void 0}),de("invalid",t);break;case"textarea":Km(t,r),i=Ch(t,r),de("invalid",t);break;default:i=r}Ph(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?lv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ov(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Co(t,u):typeof u=="number"&&Co(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ao.hasOwnProperty(s)?u!=null&&s==="onScroll"&&de("scroll",t):u!=null&&Wd(t,s,u,o))}switch(n){case"input":Va(t),Gm(t,r,!1);break;case"textarea":Va(t),Qm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Er(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?$i(t,!!r.multiple,s,!1):r.defaultValue!=null&&$i(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=bl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xe(e),null;case 6:if(t&&e.stateNode!=null)Nw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Xr(Uo.current),Xr(on.current),$a(e)){if(r=e.stateNode,n=e.memoizedProps,r[rn]=e,(s=r.nodeValue!==n)&&(t=It,t!==null))switch(t.tag){case 3:Ba(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ba(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rn]=e,e.stateNode=r}return Xe(e),null;case 13:if(pe(_e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ge&&Et!==null&&e.mode&1&&!(e.flags&128))Qv(),ns(),e.flags|=98560,s=!1;else if(s=$a(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[rn]=e}else ns(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xe(e),s=!1}else zt!==null&&(cd(zt),zt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||_e.current&1?be===0&&(be=3):Pf())),e.updateQueue!==null&&(e.flags|=4),Xe(e),null);case 4:return is(),nd(t,e),t===null&&Vo(e.stateNode.containerInfo),Xe(e),null;case 10:return df(e.type._context),Xe(e),null;case 17:return gt(e.type)&&Ll(),Xe(e),null;case 19:if(pe(_e),s=e.memoizedState,s===null)return Xe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Js(s,!1);else{if(be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=$l(t),o!==null){for(e.flags|=128,Js(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(_e,_e.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ce()>os&&(e.flags|=128,r=!0,Js(s,!1),e.lanes=4194304)}else{if(!r)if(t=$l(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Js(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ge)return Xe(e),null}else 2*Ce()-s.renderingStartTime>os&&n!==1073741824&&(e.flags|=128,r=!0,Js(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ce(),e.sibling=null,n=_e.current,ce(_e,r?n&1|2:n&1),e):(Xe(e),null);case 22:case 23:return kf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?vt&1073741824&&(Xe(e),e.subtreeFlags&6&&(e.flags|=8192)):Xe(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function PS(t,e){switch(lf(e),e.tag){case 1:return gt(e.type)&&Ll(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return is(),pe(mt),pe(nt),yf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return gf(e),null;case 13:if(pe(_e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));ns()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(_e),null;case 4:return is(),null;case 10:return df(e.type._context),null;case 22:case 23:return kf(),null;case 24:return null;default:return null}}var Wa=!1,et=!1,xS=typeof WeakSet=="function"?WeakSet:Set,q=null;function ji(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(t,e,r)}else n.current=null}function rd(t,e,n){try{n()}catch(r){Se(t,e,r)}}var Ug=!1;function NS(t,e){if(jh=Dl,t=Lv(),of(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var _;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(_=p.firstChild)!==null;)m=p,p=_;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(_=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=_}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(zh={focusedElem:t,selectionRange:n},Dl=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var k=A.memoizedProps,P=A.memoizedState,w=e.stateNode,v=w.getSnapshotBeforeUpdate(e.elementType===e.type?k:Ft(e.type,k),P);w.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(b){Se(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return A=Ug,Ug=!1,A}function _o(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&rd(e,n,s)}i=i.next}while(i!==r)}}function xu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function id(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Dw(t){var e=t.alternate;e!==null&&(t.alternate=null,Dw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[rn],delete e[Lo],delete e[Hh],delete e[fS],delete e[pS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ow(t){return t.tag===5||t.tag===3||t.tag===4}function Fg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ow(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=bl));else if(r!==4&&(t=t.child,t!==null))for(sd(t,e,n),t=t.sibling;t!==null;)sd(t,e,n),t=t.sibling}function od(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(od(t,e,n),t=t.sibling;t!==null;)od(t,e,n),t=t.sibling}var $e=null,jt=!1;function Kn(t,e,n){for(n=n.child;n!==null;)Vw(t,e,n),n=n.sibling}function Vw(t,e,n){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(Tu,n)}catch{}switch(n.tag){case 5:et||ji(n,e);case 6:var r=$e,i=jt;$e=null,Kn(t,e,n),$e=r,jt=i,$e!==null&&(jt?(t=$e,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&(jt?(t=$e,n=n.stateNode,t.nodeType===8?Wc(t.parentNode,n):t.nodeType===1&&Wc(t,n),No(t)):Wc($e,n.stateNode));break;case 4:r=$e,i=jt,$e=n.stateNode.containerInfo,jt=!0,Kn(t,e,n),$e=r,jt=i;break;case 0:case 11:case 14:case 15:if(!et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&rd(n,e,o),i=i.next}while(i!==r)}Kn(t,e,n);break;case 1:if(!et&&(ji(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Se(n,e,l)}Kn(t,e,n);break;case 21:Kn(t,e,n);break;case 22:n.mode&1?(et=(r=et)||n.memoizedState!==null,Kn(t,e,n),et=r):Kn(t,e,n);break;default:Kn(t,e,n)}}function jg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new xS),e.forEach(function(r){var i=jS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ut(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:$e=l.stateNode,jt=!1;break e;case 3:$e=l.stateNode.containerInfo,jt=!0;break e;case 4:$e=l.stateNode.containerInfo,jt=!0;break e}l=l.return}if($e===null)throw Error(F(160));Vw(s,o,i),$e=null,jt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Se(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)bw(e,t),e=e.sibling}function bw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ut(e,t),en(t),r&4){try{_o(3,t,t.return),xu(3,t)}catch(k){Se(t,t.return,k)}try{_o(5,t,t.return)}catch(k){Se(t,t.return,k)}}break;case 1:Ut(e,t),en(t),r&512&&n!==null&&ji(n,n.return);break;case 5:if(Ut(e,t),en(t),r&512&&n!==null&&ji(n,n.return),t.flags&32){var i=t.stateNode;try{Co(i,"")}catch(k){Se(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&rv(i,s),xh(l,o);var c=xh(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?lv(i,p):d==="dangerouslySetInnerHTML"?ov(i,p):d==="children"?Co(i,p):Wd(i,d,p,c)}switch(l){case"input":Rh(i,s);break;case"textarea":iv(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?$i(i,!!s.multiple,_,!1):m!==!!s.multiple&&(s.defaultValue!=null?$i(i,!!s.multiple,s.defaultValue,!0):$i(i,!!s.multiple,s.multiple?[]:"",!1))}i[Lo]=s}catch(k){Se(t,t.return,k)}}break;case 6:if(Ut(e,t),en(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){Se(t,t.return,k)}}break;case 3:if(Ut(e,t),en(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{No(e.containerInfo)}catch(k){Se(t,t.return,k)}break;case 4:Ut(e,t),en(t);break;case 13:Ut(e,t),en(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Af=Ce())),r&4&&jg(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(et=(c=et)||d,Ut(e,t),et=c):Ut(e,t),en(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(q=t,d=t.child;d!==null;){for(p=q=d;q!==null;){switch(m=q,_=m.child,m.tag){case 0:case 11:case 14:case 15:_o(4,m,m.return);break;case 1:ji(m,m.return);var A=m.stateNode;if(typeof A.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(k){Se(r,n,k)}}break;case 5:ji(m,m.return);break;case 22:if(m.memoizedState!==null){Bg(p);continue}}_!==null?(_.return=m,q=_):Bg(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=av("display",o))}catch(k){Se(t,t.return,k)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(k){Se(t,t.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ut(e,t),en(t),r&4&&jg(t);break;case 21:break;default:Ut(e,t),en(t)}}function en(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ow(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Co(i,""),r.flags&=-33);var s=Fg(t);od(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Fg(t);sd(t,l,o);break;default:throw Error(F(161))}}catch(u){Se(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function DS(t,e,n){q=t,Lw(t)}function Lw(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Wa;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||et;l=Wa;var c=et;if(Wa=o,(et=u)&&!c)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?$g(i):u!==null?(u.return=o,q=u):$g(i);for(;s!==null;)q=s,Lw(s),s=s.sibling;q=i,Wa=l,et=c}zg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):zg(t)}}function zg(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:et||xu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!et)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ft(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Rg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Rg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&No(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}et||e.flags&512&&id(e)}catch(m){Se(e,e.return,m)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function Bg(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function $g(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xu(4,e)}catch(u){Se(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Se(e,i,u)}}var s=e.return;try{id(e)}catch(u){Se(e,s,u)}break;case 5:var o=e.return;try{id(e)}catch(u){Se(e,o,u)}}}catch(u){Se(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var OS=Math.ceil,Wl=Fn.ReactCurrentDispatcher,Sf=Fn.ReactCurrentOwner,Ot=Fn.ReactCurrentBatchConfig,se=0,je=null,xe=null,We=0,vt=0,zi=Dr(0),be=0,Bo=null,oi=0,Nu=0,Rf=0,vo=null,dt=null,Af=0,os=1/0,En=null,Gl=!1,ad=null,fr=null,Ga=!1,or=null,Kl=0,wo=0,ld=null,dl=-1,fl=0;function lt(){return se&6?Ce():dl!==-1?dl:dl=Ce()}function pr(t){return t.mode&1?se&2&&We!==0?We&-We:gS.transition!==null?(fl===0&&(fl=wv()),fl):(t=ae,t!==0||(t=window.event,t=t===void 0?16:Cv(t.type)),t):1}function qt(t,e,n,r){if(50<wo)throw wo=0,ld=null,Error(F(185));ta(t,n,r),(!(se&2)||t!==je)&&(t===je&&(!(se&2)&&(Nu|=n),be===4&&Zn(t,We)),yt(t,r),n===1&&se===0&&!(e.mode&1)&&(os=Ce()+500,Cu&&Or()))}function yt(t,e){var n=t.callbackNode;g1(t,e);var r=Nl(t,t===je?We:0);if(r===0)n!==null&&Jm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Jm(n),e===1)t.tag===0?mS(Hg.bind(null,t)):Wv(Hg.bind(null,t)),hS(function(){!(se&6)&&Or()}),n=null;else{switch(Ev(r)){case 1:n=Xd;break;case 4:n=_v;break;case 16:n=xl;break;case 536870912:n=vv;break;default:n=xl}n=Hw(n,Mw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Mw(t,e){if(dl=-1,fl=0,se&6)throw Error(F(327));var n=t.callbackNode;if(Ki()&&t.callbackNode!==n)return null;var r=Nl(t,t===je?We:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ql(t,r);else{e=r;var i=se;se|=2;var s=Fw();(je!==t||We!==e)&&(En=null,os=Ce()+500,Zr(t,e));do try{LS();break}catch(l){Uw(t,l)}while(!0);hf(),Wl.current=s,se=i,xe!==null?e=0:(je=null,We=0,e=be)}if(e!==0){if(e===2&&(i=bh(t),i!==0&&(r=i,e=ud(t,i))),e===1)throw n=Bo,Zr(t,0),Zn(t,r),yt(t,Ce()),n;if(e===6)Zn(t,r);else{if(i=t.current.alternate,!(r&30)&&!VS(i)&&(e=Ql(t,r),e===2&&(s=bh(t),s!==0&&(r=s,e=ud(t,s))),e===1))throw n=Bo,Zr(t,0),Zn(t,r),yt(t,Ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Gr(t,dt,En);break;case 3:if(Zn(t,r),(r&130023424)===r&&(e=Af+500-Ce(),10<e)){if(Nl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){lt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=$h(Gr.bind(null,t,dt,En),e);break}Gr(t,dt,En);break;case 4:if(Zn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ht(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*OS(r/1960))-r,10<r){t.timeoutHandle=$h(Gr.bind(null,t,dt,En),r);break}Gr(t,dt,En);break;case 5:Gr(t,dt,En);break;default:throw Error(F(329))}}}return yt(t,Ce()),t.callbackNode===n?Mw.bind(null,t):null}function ud(t,e){var n=vo;return t.current.memoizedState.isDehydrated&&(Zr(t,e).flags|=256),t=Ql(t,e),t!==2&&(e=dt,dt=n,e!==null&&cd(e)),t}function cd(t){dt===null?dt=t:dt.push.apply(dt,t)}function VS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Wt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zn(t,e){for(e&=~Rf,e&=~Nu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ht(e),r=1<<n;t[n]=-1,e&=~r}}function Hg(t){if(se&6)throw Error(F(327));Ki();var e=Nl(t,0);if(!(e&1))return yt(t,Ce()),null;var n=Ql(t,e);if(t.tag!==0&&n===2){var r=bh(t);r!==0&&(e=r,n=ud(t,r))}if(n===1)throw n=Bo,Zr(t,0),Zn(t,e),yt(t,Ce()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Gr(t,dt,En),yt(t,Ce()),null}function Cf(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(os=Ce()+500,Cu&&Or())}}function ai(t){or!==null&&or.tag===0&&!(se&6)&&Ki();var e=se;se|=1;var n=Ot.transition,r=ae;try{if(Ot.transition=null,ae=1,t)return t()}finally{ae=r,Ot.transition=n,se=e,!(se&6)&&Or()}}function kf(){vt=zi.current,pe(zi)}function Zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cS(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(lf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ll();break;case 3:is(),pe(mt),pe(nt),yf();break;case 5:gf(r);break;case 4:is();break;case 13:pe(_e);break;case 19:pe(_e);break;case 10:df(r.type._context);break;case 22:case 23:kf()}n=n.return}if(je=t,xe=t=mr(t.current,null),We=vt=e,be=0,Bo=null,Rf=Nu=oi=0,dt=vo=null,Yr!==null){for(e=0;e<Yr.length;e++)if(n=Yr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Yr=null}return t}function Uw(t,e){do{var n=xe;try{if(hf(),ul.current=ql,Hl){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Hl=!1}if(si=0,Fe=Ve=ve=null,yo=!1,Fo=0,Sf.current=null,n===null||n.return===null){be=1,Bo=e,xe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=We,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=Ng(o);if(_!==null){_.flags&=-257,Dg(_,o,l,s,e),_.mode&1&&xg(s,c,e),e=_,u=c;var A=e.updateQueue;if(A===null){var k=new Set;k.add(u),e.updateQueue=k}else A.add(u);break e}else{if(!(e&1)){xg(s,c,e),Pf();break e}u=Error(F(426))}}else if(ge&&l.mode&1){var P=Ng(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Dg(P,o,l,s,e),uf(ss(u,l));break e}}s=u=ss(u,l),be!==4&&(be=2),vo===null?vo=[s]:vo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=Ew(s,u,e);Sg(s,w);break e;case 1:l=u;var v=s.type,T=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(fr===null||!fr.has(T)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=Tw(s,l,e);Sg(s,b);break e}}s=s.return}while(s!==null)}zw(n)}catch(U){e=U,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(!0)}function Fw(){var t=Wl.current;return Wl.current=ql,t===null?ql:t}function Pf(){(be===0||be===3||be===2)&&(be=4),je===null||!(oi&268435455)&&!(Nu&268435455)||Zn(je,We)}function Ql(t,e){var n=se;se|=2;var r=Fw();(je!==t||We!==e)&&(En=null,Zr(t,e));do try{bS();break}catch(i){Uw(t,i)}while(!0);if(hf(),se=n,Wl.current=r,xe!==null)throw Error(F(261));return je=null,We=0,be}function bS(){for(;xe!==null;)jw(xe)}function LS(){for(;xe!==null&&!a1();)jw(xe)}function jw(t){var e=$w(t.alternate,t,vt);t.memoizedProps=t.pendingProps,e===null?zw(t):xe=e,Sf.current=null}function zw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=PS(n,e),n!==null){n.flags&=32767,xe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{be=6,xe=null;return}}else if(n=kS(n,e,vt),n!==null){xe=n;return}if(e=e.sibling,e!==null){xe=e;return}xe=e=t}while(e!==null);be===0&&(be=5)}function Gr(t,e,n){var r=ae,i=Ot.transition;try{Ot.transition=null,ae=1,MS(t,e,n,r)}finally{Ot.transition=i,ae=r}return null}function MS(t,e,n,r){do Ki();while(or!==null);if(se&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(y1(t,s),t===je&&(xe=je=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ga||(Ga=!0,Hw(xl,function(){return Ki(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ot.transition,Ot.transition=null;var o=ae;ae=1;var l=se;se|=4,Sf.current=null,NS(t,n),bw(n,t),rS(zh),Dl=!!jh,zh=jh=null,t.current=n,DS(n),l1(),se=l,ae=o,Ot.transition=s}else t.current=n;if(Ga&&(Ga=!1,or=t,Kl=i),s=t.pendingLanes,s===0&&(fr=null),h1(n.stateNode),yt(t,Ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Gl)throw Gl=!1,t=ad,ad=null,t;return Kl&1&&t.tag!==0&&Ki(),s=t.pendingLanes,s&1?t===ld?wo++:(wo=0,ld=t):wo=0,Or(),null}function Ki(){if(or!==null){var t=Ev(Kl),e=Ot.transition,n=ae;try{if(Ot.transition=null,ae=16>t?16:t,or===null)var r=!1;else{if(t=or,or=null,Kl=0,se&6)throw Error(F(331));var i=se;for(se|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(q=c;q!==null;){var d=q;switch(d.tag){case 0:case 11:case 15:_o(8,d,s)}var p=d.child;if(p!==null)p.return=d,q=p;else for(;q!==null;){d=q;var m=d.sibling,_=d.return;if(Dw(d),d===c){q=null;break}if(m!==null){m.return=_,q=m;break}q=_}}}var A=s.alternate;if(A!==null){var k=A.child;if(k!==null){A.child=null;do{var P=k.sibling;k.sibling=null,k=P}while(k!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:_o(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,q=w;break e}q=s.return}}var v=t.current;for(q=v;q!==null;){o=q;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,q=T;else e:for(o=v;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:xu(9,l)}}catch(U){Se(l,l.return,U)}if(l===o){q=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,q=b;break e}q=l.return}}if(se=i,Or(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(Tu,t)}catch{}r=!0}return r}finally{ae=n,Ot.transition=e}}return!1}function qg(t,e,n){e=ss(n,e),e=Ew(t,e,1),t=dr(t,e,1),e=lt(),t!==null&&(ta(t,1,e),yt(t,e))}function Se(t,e,n){if(t.tag===3)qg(t,t,n);else for(;e!==null;){if(e.tag===3){qg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fr===null||!fr.has(r))){t=ss(n,t),t=Tw(e,t,1),e=dr(e,t,1),t=lt(),e!==null&&(ta(e,1,t),yt(e,t));break}}e=e.return}}function US(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=lt(),t.pingedLanes|=t.suspendedLanes&n,je===t&&(We&n)===n&&(be===4||be===3&&(We&130023424)===We&&500>Ce()-Af?Zr(t,0):Rf|=n),yt(t,e)}function Bw(t,e){e===0&&(t.mode&1?(e=Ma,Ma<<=1,!(Ma&130023424)&&(Ma=4194304)):e=1);var n=lt();t=Dn(t,e),t!==null&&(ta(t,e,n),yt(t,n))}function FS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Bw(t,n)}function jS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),Bw(t,n)}var $w;$w=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mt.current)pt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pt=!1,CS(t,e,n);pt=!!(t.flags&131072)}else pt=!1,ge&&e.flags&1048576&&Gv(e,Fl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;hl(t,e),t=e.pendingProps;var i=ts(e,nt.current);Gi(e,n),i=vf(null,e,r,t,i,n);var s=wf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gt(r)?(s=!0,Ml(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,pf(e),i.updater=Pu,e.stateNode=i,i._reactInternals=e,Yh(e,r,t,n),e=Zh(null,e,r,!0,s,n)):(e.tag=0,ge&&s&&af(e),ot(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(hl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=BS(r),t=Ft(r,t),i){case 0:e=Jh(null,e,r,t,n);break e;case 1:e=bg(null,e,r,t,n);break e;case 11:e=Og(null,e,r,t,n);break e;case 14:e=Vg(null,e,r,Ft(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ft(r,i),Jh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ft(r,i),bg(t,e,r,i,n);case 3:e:{if(Aw(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Zv(t,e),Bl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ss(Error(F(423)),e),e=Lg(t,e,r,n,i);break e}else if(r!==i){i=ss(Error(F(424)),e),e=Lg(t,e,r,n,i);break e}else for(Et=hr(e.stateNode.containerInfo.firstChild),It=e,ge=!0,zt=null,n=Xv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ns(),r===i){e=On(t,e,n);break e}ot(t,e,r,n)}e=e.child}return e;case 5:return ew(e),t===null&&Gh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Bh(r,i)?o=null:s!==null&&Bh(r,s)&&(e.flags|=32),Rw(t,e),ot(t,e,o,n),e.child;case 6:return t===null&&Gh(e),null;case 13:return Cw(t,e,n);case 4:return mf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=rs(e,null,r,n):ot(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ft(r,i),Og(t,e,r,i,n);case 7:return ot(t,e,e.pendingProps,n),e.child;case 8:return ot(t,e,e.pendingProps.children,n),e.child;case 12:return ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(jl,r._currentValue),r._currentValue=o,s!==null)if(Wt(s.value,o)){if(s.children===i.children&&!mt.current){e=On(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Cn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Kh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Kh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ot(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Gi(e,n),i=Vt(i),r=r(i),e.flags|=1,ot(t,e,r,n),e.child;case 14:return r=e.type,i=Ft(r,e.pendingProps),i=Ft(r.type,i),Vg(t,e,r,i,n);case 15:return Iw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ft(r,i),hl(t,e),e.tag=1,gt(r)?(t=!0,Ml(e)):t=!1,Gi(e,n),ww(e,r,i),Yh(e,r,i,n),Zh(null,e,r,!0,t,n);case 19:return kw(t,e,n);case 22:return Sw(t,e,n)}throw Error(F(156,e.tag))};function Hw(t,e){return yv(t,e)}function zS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(t,e,n,r){return new zS(t,e,n,r)}function xf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function BS(t){if(typeof t=="function")return xf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kd)return 11;if(t===Qd)return 14}return 2}function mr(t,e){var n=t.alternate;return n===null?(n=Dt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function pl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")xf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ni:return ei(n.children,i,s,e);case Gd:o=8,i|=8;break;case wh:return t=Dt(12,n,e,i|2),t.elementType=wh,t.lanes=s,t;case Eh:return t=Dt(13,n,e,i),t.elementType=Eh,t.lanes=s,t;case Th:return t=Dt(19,n,e,i),t.elementType=Th,t.lanes=s,t;case ev:return Du(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case J_:o=10;break e;case Z_:o=9;break e;case Kd:o=11;break e;case Qd:o=14;break e;case Yn:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Dt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ei(t,e,n,r){return t=Dt(7,t,r,e),t.lanes=n,t}function Du(t,e,n,r){return t=Dt(22,t,r,e),t.elementType=ev,t.lanes=n,t.stateNode={isHidden:!1},t}function eh(t,e,n){return t=Dt(6,t,null,e),t.lanes=n,t}function th(t,e,n){return e=Dt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function $S(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bc(0),this.expirationTimes=bc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Nf(t,e,n,r,i,s,o,l,u){return t=new $S(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Dt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pf(s),t}function HS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function qw(t){if(!t)return Tr;t=t._reactInternals;e:{if(gi(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(gt(n))return qv(t,n,e)}return e}function Ww(t,e,n,r,i,s,o,l,u){return t=Nf(n,r,!0,t,i,s,o,l,u),t.context=qw(null),n=t.current,r=lt(),i=pr(n),s=Cn(r,i),s.callback=e??null,dr(n,s,i),t.current.lanes=i,ta(t,i,r),yt(t,r),t}function Ou(t,e,n,r){var i=e.current,s=lt(),o=pr(i);return n=qw(n),e.context===null?e.context=n:e.pendingContext=n,e=Cn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=dr(i,e,o),t!==null&&(qt(t,i,o,s),ll(t,i,o)),o}function Yl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Wg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Df(t,e){Wg(t,e),(t=t.alternate)&&Wg(t,e)}function qS(){return null}var Gw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Of(t){this._internalRoot=t}Vu.prototype.render=Of.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Ou(t,e,null,null)};Vu.prototype.unmount=Of.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ai(function(){Ou(null,t,null,null)}),e[Nn]=null}};function Vu(t){this._internalRoot=t}Vu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Sv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Jn.length&&e!==0&&e<Jn[n].priority;n++);Jn.splice(n,0,t),n===0&&Av(t)}};function Vf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Gg(){}function WS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Yl(o);s.call(c)}}var o=Ww(e,r,t,0,null,!1,!1,"",Gg);return t._reactRootContainer=o,t[Nn]=o.current,Vo(t.nodeType===8?t.parentNode:t),ai(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Yl(u);l.call(c)}}var u=Nf(t,0,!1,null,null,!1,!1,"",Gg);return t._reactRootContainer=u,t[Nn]=u.current,Vo(t.nodeType===8?t.parentNode:t),ai(function(){Ou(e,u,n,r)}),u}function Lu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Yl(o);l.call(u)}}Ou(e,o,t,i)}else o=WS(n,e,t,i,r);return Yl(o)}Tv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ro(e.pendingLanes);n!==0&&(Jd(e,n|1),yt(e,Ce()),!(se&6)&&(os=Ce()+500,Or()))}break;case 13:ai(function(){var r=Dn(t,1);if(r!==null){var i=lt();qt(r,t,1,i)}}),Df(t,1)}};Zd=function(t){if(t.tag===13){var e=Dn(t,134217728);if(e!==null){var n=lt();qt(e,t,134217728,n)}Df(t,134217728)}};Iv=function(t){if(t.tag===13){var e=pr(t),n=Dn(t,e);if(n!==null){var r=lt();qt(n,t,e,r)}Df(t,e)}};Sv=function(){return ae};Rv=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};Dh=function(t,e,n){switch(e){case"input":if(Rh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Au(r);if(!i)throw Error(F(90));nv(r),Rh(r,i)}}}break;case"textarea":iv(t,n);break;case"select":e=n.value,e!=null&&$i(t,!!n.multiple,e,!1)}};hv=Cf;dv=ai;var GS={usingClientEntryPoint:!1,Events:[ra,bi,Au,uv,cv,Cf]},Zs={findFiberByHostInstance:Qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},KS={bundleType:Zs.bundleType,version:Zs.version,rendererPackageName:Zs.rendererPackageName,rendererConfig:Zs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=mv(t),t===null?null:t.stateNode},findFiberByHostInstance:Zs.findFiberByHostInstance||qS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ka.isDisabled&&Ka.supportsFiber)try{Tu=Ka.inject(KS),sn=Ka}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GS;Rt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vf(e))throw Error(F(200));return HS(t,e,null,n)};Rt.createRoot=function(t,e){if(!Vf(t))throw Error(F(299));var n=!1,r="",i=Gw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Nf(t,1,!1,null,null,n,!1,r,i),t[Nn]=e.current,Vo(t.nodeType===8?t.parentNode:t),new Of(e)};Rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=mv(e),t=t===null?null:t.stateNode,t};Rt.flushSync=function(t){return ai(t)};Rt.hydrate=function(t,e,n){if(!bu(e))throw Error(F(200));return Lu(null,t,e,!0,n)};Rt.hydrateRoot=function(t,e,n){if(!Vf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Gw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Ww(e,null,t,1,n??null,i,!1,s,o),t[Nn]=e.current,Vo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Vu(e)};Rt.render=function(t,e,n){if(!bu(e))throw Error(F(200));return Lu(null,t,e,!1,n)};Rt.unmountComponentAtNode=function(t){if(!bu(t))throw Error(F(40));return t._reactRootContainer?(ai(function(){Lu(null,null,t,!1,function(){t._reactRootContainer=null,t[Nn]=null})}),!0):!1};Rt.unstable_batchedUpdates=Cf;Rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!bu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Lu(t,e,n,!1,r)};Rt.version="18.3.1-next-f1338f8080-20240426";function Kw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kw)}catch(t){console.error(t)}}Kw(),K_.exports=Rt;var QS=K_.exports,Kg=QS;_h.createRoot=Kg.createRoot,_h.hydrateRoot=Kg.hydrateRoot;/**
 * react-router v7.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Qg="popstate";function YS(t={}){function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return hd("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:$o(i)}return JS(e,n,null,t)}function ye(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Lt(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function XS(){return Math.random().toString(36).substring(2,10)}function Yg(t,e){return{usr:t.state,key:t.key,idx:e}}function hd(t,e,n=null,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?ws(e):e,state:n,key:e&&e.key||r||XS()}}function $o({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function ws(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function JS(t,e,n,r={}){let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l="POP",u=null,c=d();c==null&&(c=0,o.replaceState({...o.state,idx:c},""));function d(){return(o.state||{idx:null}).idx}function p(){l="POP";let P=d(),w=P==null?null:P-c;c=P,u&&u({action:l,location:k.location,delta:w})}function m(P,w){l="PUSH";let v=hd(k.location,P,w);c=d()+1;let T=Yg(v,c),b=k.createHref(v);try{o.pushState(T,"",b)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;i.location.assign(b)}s&&u&&u({action:l,location:k.location,delta:1})}function _(P,w){l="REPLACE";let v=hd(k.location,P,w);c=d();let T=Yg(v,c),b=k.createHref(v);o.replaceState(T,"",b),s&&u&&u({action:l,location:k.location,delta:0})}function A(P){return ZS(P)}let k={get action(){return l},get location(){return t(i,o)},listen(P){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Qg,p),u=P,()=>{i.removeEventListener(Qg,p),u=null}},createHref(P){return e(i,P)},createURL:A,encodeLocation(P){let w=A(P);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:m,replace:_,go(P){return o.go(P)}};return k}function ZS(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),ye(n,"No window.location.(origin|href) available to create URL");let r=typeof t=="string"?t:$o(t);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function Qw(t,e,n="/"){return eR(t,e,n,!1)}function eR(t,e,n,r){let i=typeof e=="string"?ws(e):e,s=Vn(i.pathname||"/",n);if(s==null)return null;let o=Yw(t);tR(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=dR(s);l=cR(o[u],c,r)}return l}function Yw(t,e=[],n=[],r="",i=!1){let s=(o,l,u=i,c)=>{let d={relativePath:c===void 0?o.path||"":c,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};if(d.relativePath.startsWith("/")){if(!d.relativePath.startsWith(r)&&u)return;ye(d.relativePath.startsWith(r),`Absolute route path "${d.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(r.length)}let p=kn([r,d.relativePath]),m=n.concat(d);o.children&&o.children.length>0&&(ye(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Yw(o.children,e,m,p,u)),!(o.path==null&&!o.index)&&e.push({path:p,score:lR(p,o.index),routesMeta:m})};return t.forEach((o,l)=>{var u;if(o.path===""||!((u=o.path)!=null&&u.includes("?")))s(o,l);else for(let c of Xw(o.path))s(o,l,!0,c)}),e}function Xw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Xw(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function tR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:uR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var nR=/^:[\w-]+$/,rR=3,iR=2,sR=1,oR=10,aR=-2,Xg=t=>t==="*";function lR(t,e){let n=t.split("/"),r=n.length;return n.some(Xg)&&(r+=aR),e&&(r+=iR),n.filter(i=>!Xg(i)).reduce((i,s)=>i+(nR.test(s)?rR:s===""?sR:oR),r)}function uR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function cR(t,e,n=!1){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=Xl({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=Xl({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:kn([s,p.pathname]),pathnameBase:gR(kn([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=kn([s,p.pathnameBase]))}return o}function Xl(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=hR(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,{paramName:d,isOptional:p},m)=>{if(d==="*"){let A=l[m]||"";o=s.slice(0,s.length-A.length).replace(/(.)\/+$/,"$1")}const _=l[m];return p&&!_?c[d]=void 0:c[d]=(_||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function hR(t,e=!1,n=!0){Lt(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function dR(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Lt(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Vn(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}var Jw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fR=t=>Jw.test(t);function pR(t,e="/"){let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ws(t):t,s;if(n)if(fR(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Lt(!1,`Pathnames cannot have embedded double slashes - normalizing ${o} -> ${n}`)}n.startsWith("/")?s=Jg(n.substring(1),"/"):s=Jg(n,e)}else s=e;return{pathname:s,search:yR(r),hash:_R(i)}}function Jg(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function nh(t,e,n,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function mR(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function bf(t){let e=mR(t);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function Lf(t,e,n,r=!1){let i;typeof t=="string"?i=ws(t):(i={...t},ye(!i.pathname||!i.pathname.includes("?"),nh("?","pathname","search",i)),ye(!i.pathname||!i.pathname.includes("#"),nh("#","pathname","hash",i)),ye(!i.search||!i.search.includes("#"),nh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=pR(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}var kn=t=>t.join("/").replace(/\/\/+/g,"/"),gR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),yR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,_R=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,vR=class{constructor(t,e,n,r=!1){this.status=t,this.statusText=e||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function wR(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function ER(t){return t.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Zw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function eE(t,e){let n=t;if(typeof n!="string"||!Jw.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Zw)try{let s=new URL(window.location.href),o=n.startsWith("//")?new URL(s.protocol+n):new URL(n),l=Vn(o.pathname,e);o.origin===s.origin&&l!=null?n=l+o.search+o.hash:i=!0}catch{Lt(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var tE=["POST","PUT","PATCH","DELETE"];new Set(tE);var TR=["GET",...tE];new Set(TR);var Es=D.createContext(null);Es.displayName="DataRouter";var Mu=D.createContext(null);Mu.displayName="DataRouterState";var IR=D.createContext(!1),nE=D.createContext({isTransitioning:!1});nE.displayName="ViewTransition";var SR=D.createContext(new Map);SR.displayName="Fetchers";var RR=D.createContext(null);RR.displayName="Await";var Ct=D.createContext(null);Ct.displayName="Navigation";var sa=D.createContext(null);sa.displayName="Location";var Qt=D.createContext({outlet:null,matches:[],isDataRoute:!1});Qt.displayName="Route";var Mf=D.createContext(null);Mf.displayName="RouteError";var rE="REACT_ROUTER_ERROR",AR="REDIRECT",CR="ROUTE_ERROR_RESPONSE";function kR(t){if(t.startsWith(`${rE}:${AR}:{`))try{let e=JSON.parse(t.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function PR(t){if(t.startsWith(`${rE}:${CR}:{`))try{let e=JSON.parse(t.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new vR(e.status,e.statusText,e.data)}catch{}}function xR(t,{relative:e}={}){ye(Ts(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=D.useContext(Ct),{hash:i,pathname:s,search:o}=oa(t,{relative:e}),l=s;return n!=="/"&&(l=s==="/"?n:kn([n,s])),r.createHref({pathname:l,search:o,hash:i})}function Ts(){return D.useContext(sa)!=null}function Vr(){return ye(Ts(),"useLocation() may be used only in the context of a <Router> component."),D.useContext(sa).location}var iE="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function sE(t){D.useContext(Ct).static||D.useLayoutEffect(t)}function oE(){let{isDataRoute:t}=D.useContext(Qt);return t?HR():NR()}function NR(){ye(Ts(),"useNavigate() may be used only in the context of a <Router> component.");let t=D.useContext(Es),{basename:e,navigator:n}=D.useContext(Ct),{matches:r}=D.useContext(Qt),{pathname:i}=Vr(),s=JSON.stringify(bf(r)),o=D.useRef(!1);return sE(()=>{o.current=!0}),D.useCallback((u,c={})=>{if(Lt(o.current,iE),!o.current)return;if(typeof u=="number"){n.go(u);return}let d=Lf(u,JSON.parse(s),i,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:kn([e,d.pathname])),(c.replace?n.replace:n.push)(d,c.state,c)},[e,n,s,i,t])}D.createContext(null);function DR(){let{matches:t}=D.useContext(Qt),e=t[t.length-1];return e?e.params:{}}function oa(t,{relative:e}={}){let{matches:n}=D.useContext(Qt),{pathname:r}=Vr(),i=JSON.stringify(bf(n));return D.useMemo(()=>Lf(t,JSON.parse(i),r,e==="path"),[t,i,r,e])}function OR(t,e){return aE(t,e)}function aE(t,e,n,r,i){var v;ye(Ts(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=D.useContext(Ct),{matches:o}=D.useContext(Qt),l=o[o.length-1],u=l?l.params:{},c=l?l.pathname:"/",d=l?l.pathnameBase:"/",p=l&&l.route;{let T=p&&p.path||"";uE(c,!p||T.endsWith("*")||T.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${T}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${T}"> to <Route path="${T==="/"?"*":`${T}/*`}">.`)}let m=Vr(),_;if(e){let T=typeof e=="string"?ws(e):e;ye(d==="/"||((v=T.pathname)==null?void 0:v.startsWith(d)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${T.pathname}" was given in the \`location\` prop.`),_=T}else _=m;let A=_.pathname||"/",k=A;if(d!=="/"){let T=d.replace(/^\//,"").split("/");k="/"+A.replace(/^\//,"").split("/").slice(T.length).join("/")}let P=Qw(t,{pathname:k});Lt(p||P!=null,`No routes matched location "${_.pathname}${_.search}${_.hash}" `),Lt(P==null||P[P.length-1].route.element!==void 0||P[P.length-1].route.Component!==void 0||P[P.length-1].route.lazy!==void 0,`Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let w=UR(P&&P.map(T=>Object.assign({},T,{params:Object.assign({},u,T.params),pathname:kn([d,s.encodeLocation?s.encodeLocation(T.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?d:kn([d,s.encodeLocation?s.encodeLocation(T.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:T.pathnameBase])})),o,n,r,i);return e&&w?D.createElement(sa.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",..._},navigationType:"POP"}},w):w}function VR(){let t=$R(),e=wR(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r},o=null;return console.error("Error handled by React Router default ErrorBoundary:",t),o=D.createElement(D.Fragment,null,D.createElement("p",null,"💿 Hey developer 👋"),D.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",D.createElement("code",{style:s},"ErrorBoundary")," or"," ",D.createElement("code",{style:s},"errorElement")," prop on your route.")),D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:i},n):null,o)}var bR=D.createElement(VR,null),lE=class extends D.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.onError?this.props.onError(t,e):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const n=PR(t.digest);n&&(t=n)}let e=t!==void 0?D.createElement(Qt.Provider,{value:this.props.routeContext},D.createElement(Mf.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?D.createElement(LR,{error:t},e):e}};lE.contextType=IR;var rh=new WeakMap;function LR({children:t,error:e}){let{basename:n}=D.useContext(Ct);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=kR(e.digest);if(r){let i=rh.get(e);if(i)throw i;let s=eE(r.location,n);if(Zw&&!rh.get(e))if(s.isExternal||r.reloadDocument)window.location.href=s.absoluteURL||s.to;else{const o=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(s.to,{replace:r.replace}));throw rh.set(e,o),o}return D.createElement("meta",{httpEquiv:"refresh",content:`0;url=${s.absoluteURL||s.to}`})}}return t}function MR({routeContext:t,match:e,children:n}){let r=D.useContext(Es);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),D.createElement(Qt.Provider,{value:t},n)}function UR(t,e=[],n=null,r=null,i=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,o=n==null?void 0:n.errors;if(o!=null){let d=s.findIndex(p=>p.route.id&&(o==null?void 0:o[p.route.id])!==void 0);ye(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),s=s.slice(0,Math.min(s.length,d+1))}let l=!1,u=-1;if(n)for(let d=0;d<s.length;d++){let p=s[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:m,errors:_}=n,A=p.route.loader&&!m.hasOwnProperty(p.route.id)&&(!_||_[p.route.id]===void 0);if(p.route.lazy||A){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}let c=n&&r?(d,p)=>{var m,_;r(d,{location:n.location,params:((_=(m=n.matches)==null?void 0:m[0])==null?void 0:_.params)??{},unstable_pattern:ER(n.matches),errorInfo:p})}:void 0;return s.reduceRight((d,p,m)=>{let _,A=!1,k=null,P=null;n&&(_=o&&p.route.id?o[p.route.id]:void 0,k=p.route.errorElement||bR,l&&(u<0&&m===0?(uE("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),A=!0,P=null):u===m&&(A=!0,P=p.route.hydrateFallbackElement||null)));let w=e.concat(s.slice(0,m+1)),v=()=>{let T;return _?T=k:A?T=P:p.route.Component?T=D.createElement(p.route.Component,null):p.route.element?T=p.route.element:T=d,D.createElement(MR,{match:p,routeContext:{outlet:d,matches:w,isDataRoute:n!=null},children:T})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?D.createElement(lE,{location:n.location,revalidation:n.revalidation,component:k,error:_,children:v(),routeContext:{outlet:null,matches:w,isDataRoute:!0},onError:c}):v()},null)}function Uf(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function FR(t){let e=D.useContext(Es);return ye(e,Uf(t)),e}function jR(t){let e=D.useContext(Mu);return ye(e,Uf(t)),e}function zR(t){let e=D.useContext(Qt);return ye(e,Uf(t)),e}function Ff(t){let e=zR(t),n=e.matches[e.matches.length-1];return ye(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function BR(){return Ff("useRouteId")}function $R(){var r;let t=D.useContext(Mf),e=jR("useRouteError"),n=Ff("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[n]}function HR(){let{router:t}=FR("useNavigate"),e=Ff("useNavigate"),n=D.useRef(!1);return sE(()=>{n.current=!0}),D.useCallback(async(i,s={})=>{Lt(n.current,iE),n.current&&(typeof i=="number"?await t.navigate(i):await t.navigate(i,{fromRouteId:e,...s}))},[t,e])}var Zg={};function uE(t,e,n){!e&&!Zg[t]&&(Zg[t]=!0,Lt(!1,n))}D.memo(qR);function qR({routes:t,future:e,state:n,onError:r}){return aE(t,void 0,n,r,e)}function ey({to:t,replace:e,state:n,relative:r}){ye(Ts(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i}=D.useContext(Ct);Lt(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:s}=D.useContext(Qt),{pathname:o}=Vr(),l=oE(),u=Lf(t,bf(s),o,r==="path"),c=JSON.stringify(u);return D.useEffect(()=>{l(JSON.parse(c),{replace:e,state:n,relative:r})},[l,c,r,e,n]),null}function Ri(t){ye(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function WR({basename:t="/",children:e=null,location:n,navigationType:r="POP",navigator:i,static:s=!1,unstable_useTransitions:o}){ye(!Ts(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=t.replace(/^\/*/,"/"),u=D.useMemo(()=>({basename:l,navigator:i,static:s,unstable_useTransitions:o,future:{}}),[l,i,s,o]);typeof n=="string"&&(n=ws(n));let{pathname:c="/",search:d="",hash:p="",state:m=null,key:_="default"}=n,A=D.useMemo(()=>{let k=Vn(c,l);return k==null?null:{location:{pathname:k,search:d,hash:p,state:m,key:_},navigationType:r}},[l,c,d,p,m,_,r]);return Lt(A!=null,`<Router basename="${l}"> is not able to match the URL "${c}${d}${p}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:D.createElement(Ct.Provider,{value:u},D.createElement(sa.Provider,{children:e,value:A}))}function GR({children:t,location:e}){return OR(dd(t),e)}function dd(t,e=[]){let n=[];return D.Children.forEach(t,(r,i)=>{if(!D.isValidElement(r))return;let s=[...e,i];if(r.type===D.Fragment){n.push.apply(n,dd(r.props.children,s));return}ye(r.type===Ri,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ye(!r.props.index||!r.props.children,"An index route cannot have child routes.");let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=dd(r.props.children,s)),n.push(o)}),n}var ml="get",gl="application/x-www-form-urlencoded";function Uu(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function KR(t){return Uu(t)&&t.tagName.toLowerCase()==="button"}function QR(t){return Uu(t)&&t.tagName.toLowerCase()==="form"}function YR(t){return Uu(t)&&t.tagName.toLowerCase()==="input"}function XR(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function JR(t,e){return t.button===0&&(!e||e==="_self")&&!XR(t)}var Qa=null;function ZR(){if(Qa===null)try{new FormData(document.createElement("form"),0),Qa=!1}catch{Qa=!0}return Qa}var eA=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ih(t){return t!=null&&!eA.has(t)?(Lt(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${gl}"`),null):t}function tA(t,e){let n,r,i,s,o;if(QR(t)){let l=t.getAttribute("action");r=l?Vn(l,e):null,n=t.getAttribute("method")||ml,i=ih(t.getAttribute("enctype"))||gl,s=new FormData(t)}else if(KR(t)||YR(t)&&(t.type==="submit"||t.type==="image")){let l=t.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=t.getAttribute("formaction")||l.getAttribute("action");if(r=u?Vn(u,e):null,n=t.getAttribute("formmethod")||l.getAttribute("method")||ml,i=ih(t.getAttribute("formenctype"))||ih(l.getAttribute("enctype"))||gl,s=new FormData(l,t),!ZR()){let{name:c,type:d,value:p}=t;if(d==="image"){let m=c?`${c}.`:"";s.append(`${m}x`,"0"),s.append(`${m}y`,"0")}else c&&s.append(c,p)}}else{if(Uu(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=ml,r=null,i=gl,o=t}return s&&i==="text/plain"&&(o=s,s=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:s,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function jf(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function nA(t,e,n){let r=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return r.pathname==="/"?r.pathname=`_root.${n}`:e&&Vn(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function rA(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function iA(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function sA(t,e,n){let r=await Promise.all(t.map(async i=>{let s=e.routes[i.route.id];if(s){let o=await rA(s,n);return o.links?o.links():[]}return[]}));return uA(r.flat(1).filter(iA).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function ty(t,e,n,r,i,s){let o=(u,c)=>n[c]?u.route.id!==n[c].route.id:!0,l=(u,c)=>{var d;return n[c].pathname!==u.pathname||((d=n[c].route.path)==null?void 0:d.endsWith("*"))&&n[c].params["*"]!==u.params["*"]};return s==="assets"?e.filter((u,c)=>o(u,c)||l(u,c)):s==="data"?e.filter((u,c)=>{var p;let d=r.routes[u.route.id];if(!d||!d.hasLoader)return!1;if(o(u,c)||l(u,c))return!0;if(u.route.shouldRevalidate){let m=u.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((p=n[0])==null?void 0:p.params)||{},nextUrl:new URL(t,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function oA(t,e,{includeHydrateFallback:n}={}){return aA(t.map(r=>{let i=e.routes[r.route.id];if(!i)return[];let s=[i.module];return i.clientActionModule&&(s=s.concat(i.clientActionModule)),i.clientLoaderModule&&(s=s.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(s=s.concat(i.hydrateFallbackModule)),i.imports&&(s=s.concat(i.imports)),s}).flat(1))}function aA(t){return[...new Set(t)]}function lA(t){let e={},n=Object.keys(t).sort();for(let r of n)e[r]=t[r];return e}function uA(t,e){let n=new Set;return new Set(e),t.reduce((r,i)=>{let s=JSON.stringify(lA(i));return n.has(s)||(n.add(s),r.push({key:s,link:i})),r},[])}function cE(){let t=D.useContext(Es);return jf(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function cA(){let t=D.useContext(Mu);return jf(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var zf=D.createContext(void 0);zf.displayName="FrameworkContext";function hE(){let t=D.useContext(zf);return jf(t,"You must render this element inside a <HydratedRouter> element"),t}function hA(t,e){let n=D.useContext(zf),[r,i]=D.useState(!1),[s,o]=D.useState(!1),{onFocus:l,onBlur:u,onMouseEnter:c,onMouseLeave:d,onTouchStart:p}=e,m=D.useRef(null);D.useEffect(()=>{if(t==="render"&&o(!0),t==="viewport"){let k=w=>{w.forEach(v=>{o(v.isIntersecting)})},P=new IntersectionObserver(k,{threshold:.5});return m.current&&P.observe(m.current),()=>{P.disconnect()}}},[t]),D.useEffect(()=>{if(r){let k=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(k)}}},[r]);let _=()=>{i(!0)},A=()=>{i(!1),o(!1)};return n?t!=="intent"?[s,m,{}]:[s,m,{onFocus:eo(l,_),onBlur:eo(u,A),onMouseEnter:eo(c,_),onMouseLeave:eo(d,A),onTouchStart:eo(p,_)}]:[!1,m,{}]}function eo(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function dA({page:t,...e}){let{router:n}=cE(),r=D.useMemo(()=>Qw(n.routes,t,n.basename),[n.routes,t,n.basename]);return r?D.createElement(pA,{page:t,matches:r,...e}):null}function fA(t){let{manifest:e,routeModules:n}=hE(),[r,i]=D.useState([]);return D.useEffect(()=>{let s=!1;return sA(t,e,n).then(o=>{s||i(o)}),()=>{s=!0}},[t,e,n]),r}function pA({page:t,matches:e,...n}){let r=Vr(),{manifest:i,routeModules:s}=hE(),{basename:o}=cE(),{loaderData:l,matches:u}=cA(),c=D.useMemo(()=>ty(t,e,u,i,r,"data"),[t,e,u,i,r]),d=D.useMemo(()=>ty(t,e,u,i,r,"assets"),[t,e,u,i,r]),p=D.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let A=new Set,k=!1;if(e.forEach(w=>{var T;let v=i.routes[w.route.id];!v||!v.hasLoader||(!c.some(b=>b.route.id===w.route.id)&&w.route.id in l&&((T=s[w.route.id])!=null&&T.shouldRevalidate)||v.hasClientLoader?k=!0:A.add(w.route.id))}),A.size===0)return[];let P=nA(t,o,"data");return k&&A.size>0&&P.searchParams.set("_routes",e.filter(w=>A.has(w.route.id)).map(w=>w.route.id).join(",")),[P.pathname+P.search]},[o,l,r,i,c,e,t,s]),m=D.useMemo(()=>oA(d,i),[d,i]),_=fA(d);return D.createElement(D.Fragment,null,p.map(A=>D.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...n})),m.map(A=>D.createElement("link",{key:A,rel:"modulepreload",href:A,...n})),_.map(({key:A,link:k})=>D.createElement("link",{key:A,nonce:n.nonce,...k})))}function mA(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var gA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{gA&&(window.__reactRouterVersion="7.11.0")}catch{}function yA({basename:t,children:e,unstable_useTransitions:n,window:r}){let i=D.useRef();i.current==null&&(i.current=YS({window:r,v5Compat:!0}));let s=i.current,[o,l]=D.useState({action:s.action,location:s.location}),u=D.useCallback(c=>{n===!1?l(c):D.startTransition(()=>l(c))},[n]);return D.useLayoutEffect(()=>s.listen(u),[s,u]),D.createElement(WR,{basename:t,children:e,location:o.location,navigationType:o.action,navigator:s,unstable_useTransitions:n})}var dE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,er=D.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,viewTransition:p,unstable_defaultShouldRevalidate:m,..._},A){let{basename:k,unstable_useTransitions:P}=D.useContext(Ct),w=typeof c=="string"&&dE.test(c),v=eE(c,k);c=v.to;let T=xR(c,{relative:i}),[b,U,j]=hA(r,_),E=EA(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:p,unstable_defaultShouldRevalidate:m,unstable_useTransitions:P});function y(R){e&&e(R),R.defaultPrevented||E(R)}let I=D.createElement("a",{..._,...j,href:v.absoluteURL||T,onClick:v.isExternal||s?e:y,ref:mA(A,U),target:u,"data-discover":!w&&n==="render"?"true":void 0});return b&&!w?D.createElement(D.Fragment,null,I,D.createElement(dA,{page:T})):I});er.displayName="Link";var _A=D.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:i=!1,style:s,to:o,viewTransition:l,children:u,...c},d){let p=oa(o,{relative:c.relative}),m=Vr(),_=D.useContext(Mu),{navigator:A,basename:k}=D.useContext(Ct),P=_!=null&&AA(p)&&l===!0,w=A.encodeLocation?A.encodeLocation(p).pathname:p.pathname,v=m.pathname,T=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;n||(v=v.toLowerCase(),T=T?T.toLowerCase():null,w=w.toLowerCase()),T&&k&&(T=Vn(T,k)||T);const b=w!=="/"&&w.endsWith("/")?w.length-1:w.length;let U=v===w||!i&&v.startsWith(w)&&v.charAt(b)==="/",j=T!=null&&(T===w||!i&&T.startsWith(w)&&T.charAt(w.length)==="/"),E={isActive:U,isPending:j,isTransitioning:P},y=U?e:void 0,I;typeof r=="function"?I=r(E):I=[r,U?"active":null,j?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let R=typeof s=="function"?s(E):s;return D.createElement(er,{...c,"aria-current":y,className:I,ref:d,style:R,to:o,viewTransition:l},typeof u=="function"?u(E):u)});_A.displayName="NavLink";var vA=D.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:i,state:s,method:o=ml,action:l,onSubmit:u,relative:c,preventScrollReset:d,viewTransition:p,unstable_defaultShouldRevalidate:m,..._},A)=>{let{unstable_useTransitions:k}=D.useContext(Ct),P=SA(),w=RA(l,{relative:c}),v=o.toLowerCase()==="get"?"get":"post",T=typeof l=="string"&&dE.test(l),b=U=>{if(u&&u(U),U.defaultPrevented)return;U.preventDefault();let j=U.nativeEvent.submitter,E=(j==null?void 0:j.getAttribute("formmethod"))||o,y=()=>P(j||U.currentTarget,{fetcherKey:e,method:E,navigate:n,replace:i,state:s,relative:c,preventScrollReset:d,viewTransition:p,unstable_defaultShouldRevalidate:m});k&&n!==!1?D.startTransition(()=>y()):y()};return D.createElement("form",{ref:A,method:v,action:w,onSubmit:r?u:b,..._,"data-discover":!T&&t==="render"?"true":void 0})});vA.displayName="Form";function wA(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function fE(t){let e=D.useContext(Es);return ye(e,wA(t)),e}function EA(t,{target:e,replace:n,state:r,preventScrollReset:i,relative:s,viewTransition:o,unstable_defaultShouldRevalidate:l,unstable_useTransitions:u}={}){let c=oE(),d=Vr(),p=oa(t,{relative:s});return D.useCallback(m=>{if(JR(m,e)){m.preventDefault();let _=n!==void 0?n:$o(d)===$o(p),A=()=>c(t,{replace:_,state:r,preventScrollReset:i,relative:s,viewTransition:o,unstable_defaultShouldRevalidate:l});u?D.startTransition(()=>A()):A()}},[d,c,p,n,r,e,t,i,s,o,l,u])}var TA=0,IA=()=>`__${String(++TA)}__`;function SA(){let{router:t}=fE("useSubmit"),{basename:e}=D.useContext(Ct),n=BR(),r=t.fetch,i=t.navigate;return D.useCallback(async(s,o={})=>{let{action:l,method:u,encType:c,formData:d,body:p}=tA(s,e);if(o.navigate===!1){let m=o.fetcherKey||IA();await r(m,n,o.action||l,{unstable_defaultShouldRevalidate:o.unstable_defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:d,body:p,formMethod:o.method||u,formEncType:o.encType||c,flushSync:o.flushSync})}else await i(o.action||l,{unstable_defaultShouldRevalidate:o.unstable_defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:d,body:p,formMethod:o.method||u,formEncType:o.encType||c,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,i,e,n])}function RA(t,{relative:e}={}){let{basename:n}=D.useContext(Ct),r=D.useContext(Qt);ye(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),s={...oa(t||".",{relative:e})},o=Vr();if(t==null){s.search=o.search;let l=new URLSearchParams(s.search),u=l.getAll("index");if(u.some(d=>d==="")){l.delete("index"),u.filter(p=>p).forEach(p=>l.append("index",p));let d=l.toString();s.search=d?`?${d}`:""}}return(!t||t===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:kn([n,s.pathname])),$o(s)}function AA(t,{relative:e}={}){let n=D.useContext(nE);ye(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=fE("useViewTransitionState"),i=oa(t,{relative:e});if(!n.isTransitioning)return!1;let s=Vn(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Vn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Xl(i.pathname,o)!=null||Xl(i.pathname,s)!=null}const CA=()=>{};var ny={};/**
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
 */const pE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},kA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},mE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,_=c&63;u||(_=64,o||(m=64)),r.push(n[d],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(pE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new PA;const m=s<<2|l>>4;if(r.push(m),c!==64){const _=l<<4&240|c>>2;if(r.push(_),p!==64){const A=c<<6&192|p;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class PA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xA=function(t){const e=pE(t);return mE.encodeByteArray(e,!0)},Jl=function(t){return xA(t).replace(/\./g,"")},gE=function(t){try{return mE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function NA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const DA=()=>NA().__FIREBASE_DEFAULTS__,OA=()=>{if(typeof process>"u"||typeof ny>"u")return;const t=ny.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},VA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&gE(t[1]);return e&&JSON.parse(e)},Fu=()=>{try{return CA()||DA()||OA()||VA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},yE=t=>{var e,n;return(n=(e=Fu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},_E=t=>{const e=yE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},vE=()=>{var t;return(t=Fu())==null?void 0:t.config},wE=t=>{var e;return(e=Fu())==null?void 0:e[`_${t}`]};/**
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
 */class bA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function yi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Bf(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function EE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Jl(JSON.stringify(n)),Jl(JSON.stringify(o)),""].join(".")}const Eo={};function LA(){const t={prod:[],emulator:[]};for(const e of Object.keys(Eo))Eo[e]?t.emulator.push(e):t.prod.push(e);return t}function MA(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let ry=!1;function $f(t,e){if(typeof window>"u"||typeof document>"u"||!yi(window.location.host)||Eo[t]===e||Eo[t]||ry)return;Eo[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",s=LA().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,_){m.setAttribute("width","24"),m.setAttribute("id",_),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function c(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{ry=!0,o()},m}function d(m,_){m.setAttribute("id",_),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=MA(r),_=n("text"),A=document.getElementById(_)||document.createElement("span"),k=n("learnmore"),P=document.getElementById(k)||document.createElement("a"),w=n("preprendIcon"),v=document.getElementById(w)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const T=m.element;l(T),d(P,k);const b=c();u(v,w),T.append(v,A,P,b),document.body.appendChild(T)}s?(A.innerText="Preview backend disconnected.",v.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(v.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,A.innerText="Preview backend running in this workspace."),A.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function UA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function FA(){var e;const t=(e=Fu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function BA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $A(){const t=rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function HA(){return!FA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function qA(){try{return typeof indexedDB=="object"}catch{return!1}}function WA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const GA="FirebaseError";class _n extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=GA,Object.setPrototypeOf(this,_n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,aa.prototype.create)}}class aa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?KA(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new _n(i,l,r)}}function KA(t,e){return t.replace(QA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const QA=/\{\$([^}]+)}/g;function YA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function li(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(iy(s)&&iy(o)){if(!li(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function iy(t){return t!==null&&typeof t=="object"}/**
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
 */function la(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function so(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function oo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function XA(t,e){const n=new JA(t,e);return n.subscribe.bind(n)}class JA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ZA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=sh),i.error===void 0&&(i.error=sh),i.complete===void 0&&(i.complete=sh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ZA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function sh(){}/**
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
 */function Ee(t){return t&&t._delegate?t._delegate:t}class Ir{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Kr="[DEFAULT]";/**
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
 */class eC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new bA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nC(e))try{this.getOrInitializeService({instanceIdentifier:Kr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Kr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kr){return this.instances.has(e)}getOptions(e=Kr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:tC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Kr){return this.component?this.component.multipleInstances?e:Kr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tC(t){return t===Kr?void 0:t}function nC(t){return t.instantiationMode==="EAGER"}/**
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
 */class rC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new eC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const iC={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},sC=te.INFO,oC={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},aC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=oC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hf{constructor(e){this.name=e,this._logLevel=sC,this._logHandler=aC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?iC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const lC=(t,e)=>e.some(n=>t instanceof n);let sy,oy;function uC(){return sy||(sy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cC(){return oy||(oy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const TE=new WeakMap,fd=new WeakMap,IE=new WeakMap,oh=new WeakMap,qf=new WeakMap;function hC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(gr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&TE.set(n,t)}).catch(()=>{}),qf.set(e,t),e}function dC(t){if(fd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});fd.set(t,e)}let pd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||IE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function fC(t){pd=t(pd)}function pC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ah(this),e,...n);return IE.set(r,e.sort?e.sort():[e]),gr(r)}:cC().includes(t)?function(...e){return t.apply(ah(this),e),gr(TE.get(this))}:function(...e){return gr(t.apply(ah(this),e))}}function mC(t){return typeof t=="function"?pC(t):(t instanceof IDBTransaction&&dC(t),lC(t,uC())?new Proxy(t,pd):t)}function gr(t){if(t instanceof IDBRequest)return hC(t);if(oh.has(t))return oh.get(t);const e=mC(t);return e!==t&&(oh.set(t,e),qf.set(e,t)),e}const ah=t=>qf.get(t);function gC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=gr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(gr(o.result),u.oldVersion,u.newVersion,gr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const yC=["get","getKey","getAll","getAllKeys","count"],_C=["put","add","delete","clear"],lh=new Map;function ay(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lh.get(e))return lh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=_C.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||yC.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return lh.set(e,s),s}fC(t=>({...t,get:(e,n,r)=>ay(e,n)||t.get(e,n,r),has:(e,n)=>!!ay(e,n)||t.has(e,n)}));/**
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
 */class vC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const md="@firebase/app",ly="0.14.6";/**
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
 */const bn=new Hf("@firebase/app"),EC="@firebase/app-compat",TC="@firebase/analytics-compat",IC="@firebase/analytics",SC="@firebase/app-check-compat",RC="@firebase/app-check",AC="@firebase/auth",CC="@firebase/auth-compat",kC="@firebase/database",PC="@firebase/data-connect",xC="@firebase/database-compat",NC="@firebase/functions",DC="@firebase/functions-compat",OC="@firebase/installations",VC="@firebase/installations-compat",bC="@firebase/messaging",LC="@firebase/messaging-compat",MC="@firebase/performance",UC="@firebase/performance-compat",FC="@firebase/remote-config",jC="@firebase/remote-config-compat",zC="@firebase/storage",BC="@firebase/storage-compat",$C="@firebase/firestore",HC="@firebase/ai",qC="@firebase/firestore-compat",WC="firebase",GC="12.6.0";/**
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
 */const gd="[DEFAULT]",KC={[md]:"fire-core",[EC]:"fire-core-compat",[IC]:"fire-analytics",[TC]:"fire-analytics-compat",[RC]:"fire-app-check",[SC]:"fire-app-check-compat",[AC]:"fire-auth",[CC]:"fire-auth-compat",[kC]:"fire-rtdb",[PC]:"fire-data-connect",[xC]:"fire-rtdb-compat",[NC]:"fire-fn",[DC]:"fire-fn-compat",[OC]:"fire-iid",[VC]:"fire-iid-compat",[bC]:"fire-fcm",[LC]:"fire-fcm-compat",[MC]:"fire-perf",[UC]:"fire-perf-compat",[FC]:"fire-rc",[jC]:"fire-rc-compat",[zC]:"fire-gcs",[BC]:"fire-gcs-compat",[$C]:"fire-fst",[qC]:"fire-fst-compat",[HC]:"fire-vertex","fire-js":"fire-js",[WC]:"fire-js-all"};/**
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
 */const Zl=new Map,QC=new Map,yd=new Map;function uy(t,e){try{t.container.addComponent(e)}catch(n){bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ui(t){const e=t.name;if(yd.has(e))return bn.debug(`There were multiple attempts to register component ${e}.`),!1;yd.set(e,t);for(const n of Zl.values())uy(n,t);for(const n of QC.values())uy(n,t);return!0}function ju(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function wt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const YC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yr=new aa("app","Firebase",YC);/**
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
 */class XC{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ir("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yr.create("app-deleted",{appName:this._name})}}/**
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
 */const _i=GC;function SE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:gd,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw yr.create("bad-app-name",{appName:String(i)});if(n||(n=vE()),!n)throw yr.create("no-options");const s=Zl.get(i);if(s){if(li(n,s.options)&&li(r,s.config))return s;throw yr.create("duplicate-app",{appName:i})}const o=new rC(i);for(const u of yd.values())o.addComponent(u);const l=new XC(n,r,o);return Zl.set(i,l),l}function Wf(t=gd){const e=Zl.get(t);if(!e&&t===gd&&vE())return SE();if(!e)throw yr.create("no-app",{appName:t});return e}function an(t,e,n){let r=KC[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bn.warn(o.join(" "));return}ui(new Ir(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const JC="firebase-heartbeat-database",ZC=1,Ho="firebase-heartbeat-store";let uh=null;function RE(){return uh||(uh=gC(JC,ZC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ho)}catch(n){console.warn(n)}}}}).catch(t=>{throw yr.create("idb-open",{originalErrorMessage:t.message})})),uh}async function ek(t){try{const n=(await RE()).transaction(Ho),r=await n.objectStore(Ho).get(AE(t));return await n.done,r}catch(e){if(e instanceof _n)bn.warn(e.message);else{const n=yr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bn.warn(n.message)}}}async function cy(t,e){try{const r=(await RE()).transaction(Ho,"readwrite");await r.objectStore(Ho).put(e,AE(t)),await r.done}catch(n){if(n instanceof _n)bn.warn(n.message);else{const r=yr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bn.warn(r.message)}}}function AE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const tk=1024,nk=30;class rk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=hy();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>nk){const o=ok(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){bn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=hy(),{heartbeatsToSend:r,unsentEntries:i}=ik(this._heartbeatsCache.heartbeats),s=Jl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return bn.warn(n),""}}}function hy(){return new Date().toISOString().substring(0,10)}function ik(t,e=tk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),dy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),dy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class sk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qA()?WA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ek(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return cy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return cy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function dy(t){return Jl(JSON.stringify({version:2,heartbeats:t})).length}function ok(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function ak(t){ui(new Ir("platform-logger",e=>new vC(e),"PRIVATE")),ui(new Ir("heartbeat",e=>new rk(e),"PRIVATE")),an(md,ly,t),an(md,ly,"esm2020"),an("fire-js","")}ak("");var lk="firebase",uk="12.7.0";/**
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
 */an(lk,uk,"app");function CE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ck=CE,kE=new aa("auth","Firebase",CE());/**
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
 */const eu=new Hf("@firebase/auth");function hk(t,...e){eu.logLevel<=te.WARN&&eu.warn(`Auth (${_i}): ${t}`,...e)}function yl(t,...e){eu.logLevel<=te.ERROR&&eu.error(`Auth (${_i}): ${t}`,...e)}/**
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
 */function Gt(t,...e){throw Gf(t,...e)}function ln(t,...e){return Gf(t,...e)}function PE(t,e,n){const r={...ck(),[e]:n};return new aa("auth","Firebase",r).create(e,{appName:t.name})}function Pn(t){return PE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Gf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return kE.create(t,...e)}function G(t,e,...n){if(!t)throw Gf(e,...n)}function Rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw yl(e),new Error(e)}function Ln(t,e){t||Rn(e)}/**
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
 */function _d(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function dk(){return fy()==="http:"||fy()==="https:"}function fy(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function fk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dk()||zA()||"connection"in navigator)?navigator.onLine:!0}function pk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ua{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ln(n>e,"Short delay should be less than long delay!"),this.isMobile=UA()||BA()}get(){return fk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Kf(t,e){Ln(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class xE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const mk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const gk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],yk=new ua(3e4,6e4);function jn(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Yt(t,e,n,r,i={}){return NE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=la({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return jA()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&yi(t.emulatorConfig.host)&&(c.credentials="include"),xE.fetch()(await DE(t,t.config.apiHost,n,l),c)})}async function NE(t,e,n){t._canInitEmulator=!1;const r={...mk,...e};try{const i=new vk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ya(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ya(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ya(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ya(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw PE(t,d,c);Gt(t,d)}}catch(i){if(i instanceof _n)throw i;Gt(t,"network-request-failed",{message:String(i)})}}async function ca(t,e,n,r,i={}){const s=await Yt(t,e,n,r,i);return"mfaPendingCredential"in s&&Gt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function DE(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Kf(t.config,i):`${t.config.apiScheme}://${i}`;return gk.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function _k(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ln(this.auth,"network-request-failed")),yk.get())})}}function Ya(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ln(t,e,r);return i.customData._tokenResponse=n,i}function py(t){return t!==void 0&&t.enterprise!==void 0}class wk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return _k(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Ek(t,e){return Yt(t,"GET","/v2/recaptchaConfig",jn(t,e))}/**
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
 */async function Tk(t,e){return Yt(t,"POST","/v1/accounts:delete",e)}async function tu(t,e){return Yt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function To(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ik(t,e=!1){const n=Ee(t),r=await n.getIdToken(e),i=Qf(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:To(ch(i.auth_time)),issuedAtTime:To(ch(i.iat)),expirationTime:To(ch(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ch(t){return Number(t)*1e3}function Qf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return yl("JWT malformed, contained fewer than 3 sections"),null;try{const i=gE(n);return i?JSON.parse(i):(yl("Failed to decode base64 JWT payload"),null)}catch(i){return yl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function my(t){const e=Qf(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ci(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof _n&&Sk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Sk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Rk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class vd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=To(this.lastLoginAt),this.creationTime=To(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function nu(t){var p;const e=t.auth,n=await t.getIdToken(),r=await ci(t,tu(e,{idToken:n}));G(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?OE(i.providerUserInfo):[],o=Ck(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new vd(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function Ak(t){const e=Ee(t);await nu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ck(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function OE(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function kk(t,e){const n=await NE(t,{},async()=>{const r=la({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await DE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&yi(t.emulatorConfig.host)&&(u.credentials="include"),xE.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Pk(t,e){return Yt(t,"POST","/v2/accounts:revokeToken",jn(t,e))}/**
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
 */class Qi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):my(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=my(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await kk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Qi;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qi,this.toJSON())}_performRefresh(){return Rn("not implemented")}}/**
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
 */function Qn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Bt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new Rk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new vd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ci(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ik(this,e)}reload(){return Ak(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Bt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await nu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wt(this.auth.app))return Promise.reject(Pn(this.auth));const e=await this.getIdToken();return await ci(this,Tk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:_,providerData:A,stsTokenManager:k}=n;G(p&&k,e,"internal-error");const P=Qi.fromJSON(this.name,k);G(typeof p=="string",e,"internal-error"),Qn(r,e.name),Qn(i,e.name),G(typeof m=="boolean",e,"internal-error"),G(typeof _=="boolean",e,"internal-error"),Qn(s,e.name),Qn(o,e.name),Qn(l,e.name),Qn(u,e.name),Qn(c,e.name),Qn(d,e.name);const w=new Bt({uid:p,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:P,createdAt:c,lastLoginAt:d});return A&&Array.isArray(A)&&(w.providerData=A.map(v=>({...v}))),u&&(w._redirectEventId=u),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new Qi;i.updateFromServerResponse(n);const s=new Bt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await nu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?OE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Qi;l.updateFromIdToken(r);const u=new Bt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new vd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const gy=new Map;function An(t){Ln(t instanceof Function,"Expected a class definition");let e=gy.get(t);return e?(Ln(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gy.set(t,e),e)}/**
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
 */class VE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}VE.type="NONE";const yy=VE;/**
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
 */function _l(t,e,n){return`firebase:${t}:${e}:${n}`}class Yi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=_l(this.userKey,i.apiKey,s),this.fullPersistenceKey=_l("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await tu(this.auth,{idToken:e}).catch(()=>{});return n?Bt._fromGetAccountInfoResponse(this.auth,n,e):null}return Bt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Yi(An(yy),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||An(yy);const o=_l(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let p;if(typeof d=="string"){const m=await tu(e,{idToken:d}).catch(()=>{});if(!m)break;p=await Bt._fromGetAccountInfoResponse(e,m,d)}else p=Bt._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Yi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Yi(s,e,r))}}/**
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
 */function _y(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(UE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jE(e))return"Blackberry";if(zE(e))return"Webos";if(LE(e))return"Safari";if((e.includes("chrome/")||ME(e))&&!e.includes("edge/"))return"Chrome";if(FE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function bE(t=rt()){return/firefox\//i.test(t)}function LE(t=rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ME(t=rt()){return/crios\//i.test(t)}function UE(t=rt()){return/iemobile/i.test(t)}function FE(t=rt()){return/android/i.test(t)}function jE(t=rt()){return/blackberry/i.test(t)}function zE(t=rt()){return/webos/i.test(t)}function Yf(t=rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function xk(t=rt()){var e;return Yf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Nk(){return $A()&&document.documentMode===10}function BE(t=rt()){return Yf(t)||FE(t)||zE(t)||jE(t)||/windows phone/i.test(t)||UE(t)}/**
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
 */function $E(t,e=[]){let n;switch(t){case"Browser":n=_y(rt());break;case"Worker":n=`${_y(rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${_i}/${r}`}/**
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
 */class Dk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Ok(t,e={}){return Yt(t,"GET","/v2/passwordPolicy",jn(t,e))}/**
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
 */const Vk=6;class bk{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Vk,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Lk{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vy(this),this.idTokenSubscription=new vy(this),this.beforeStateQueue=new Dk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=An(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Yi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await tu(this,{idToken:e}),r=await Bt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(wt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await nu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wt(this.app))return Promise.reject(Pn(this));const n=e?Ee(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wt(this.app)?Promise.reject(Pn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wt(this.app)?Promise.reject(Pn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(An(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ok(this),n=new bk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new aa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Pk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&An(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Yi.create(this,[An(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$E(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(wt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&hk(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function br(t){return Ee(t)}class vy{constructor(e){this.auth=e,this.observer=null,this.addObserver=XA(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let zu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Mk(t){zu=t}function HE(t){return zu.loadJS(t)}function Uk(){return zu.recaptchaEnterpriseScript}function Fk(){return zu.gapiScript}function jk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class zk{constructor(){this.enterprise=new Bk}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Bk{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const $k="recaptcha-enterprise",qE="NO_RECAPTCHA";class Hk{constructor(e){this.type=$k,this.auth=br(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{Ek(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new wk(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;py(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(qE)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new zk().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&py(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Uk();u.length!==0&&(u+=l),HE(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function wy(t,e,n,r=!1,i=!1){const s=new Hk(t);let o;if(i)o=qE;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function ru(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await wy(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await wy(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function qk(t,e){const n=ju(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(li(s,e??{}))return i;Gt(i,"already-initialized")}return n.initialize({options:e})}function Wk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(An);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Gk(t,e,n){const r=br(t);G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=WE(e),{host:o,port:l}=Kk(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){G(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),G(li(c,r.config.emulator)&&li(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,yi(o)?(Bf(`${s}//${o}${u}`),$f("Auth",!0)):Qk()}function WE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Kk(t){const e=WE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ey(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ey(o)}}}function Ey(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Qk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Xf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rn("not implemented")}_getIdTokenResponse(e){return Rn("not implemented")}_linkToIdToken(e,n){return Rn("not implemented")}_getReauthenticationResolver(e){return Rn("not implemented")}}async function Yk(t,e){return Yt(t,"POST","/v1/accounts:update",e)}async function Xk(t,e){return Yt(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Jk(t,e){return ca(t,"POST","/v1/accounts:signInWithPassword",jn(t,e))}async function Zk(t,e){return Yt(t,"POST","/v1/accounts:sendOobCode",jn(t,e))}async function eP(t,e){return Zk(t,e)}/**
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
 */async function tP(t,e){return ca(t,"POST","/v1/accounts:signInWithEmailLink",jn(t,e))}async function nP(t,e){return ca(t,"POST","/v1/accounts:signInWithEmailLink",jn(t,e))}/**
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
 */class qo extends Xf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new qo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new qo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ru(e,n,"signInWithPassword",Jk);case"emailLink":return tP(e,{email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ru(e,r,"signUpPassword",Xk);case"emailLink":return nP(e,{idToken:n,email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Xi(t,e){return ca(t,"POST","/v1/accounts:signInWithIdp",jn(t,e))}/**
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
 */const rP="http://localhost";class hi extends Xf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Gt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new hi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Xi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Xi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xi(e,n)}buildRequest(){const e={requestUri:rP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=la(n)}return e}}/**
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
 */function iP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function sP(t){const e=so(oo(t)).link,n=e?so(oo(e)).deep_link_id:null,r=so(oo(t)).deep_link_id;return(r?so(oo(r)).link:null)||r||n||e||t}class Jf{constructor(e){const n=so(oo(e)),r=n.apiKey??null,i=n.oobCode??null,s=iP(n.mode??null);G(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=sP(e);try{return new Jf(n)}catch{return null}}}/**
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
 */class Is{constructor(){this.providerId=Is.PROVIDER_ID}static credential(e,n){return qo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Jf.parseLink(n);return G(r,"argument-error"),qo._fromEmailAndCode(e,r.code,r.tenantId)}}Is.PROVIDER_ID="password";Is.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Is.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class GE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ha extends GE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class tr extends ha{constructor(){super("facebook.com")}static credential(e){return hi._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.FACEBOOK_SIGN_IN_METHOD="facebook.com";tr.PROVIDER_ID="facebook.com";/**
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
 */class nr extends ha{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hi._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return nr.credential(n,r)}catch{return null}}}nr.GOOGLE_SIGN_IN_METHOD="google.com";nr.PROVIDER_ID="google.com";/**
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
 */class rr extends ha{constructor(){super("github.com")}static credential(e){return hi._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rr.credential(e.oauthAccessToken)}catch{return null}}}rr.GITHUB_SIGN_IN_METHOD="github.com";rr.PROVIDER_ID="github.com";/**
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
 */class ir extends ha{constructor(){super("twitter.com")}static credential(e,n){return hi._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ir.credential(n,r)}catch{return null}}}ir.TWITTER_SIGN_IN_METHOD="twitter.com";ir.PROVIDER_ID="twitter.com";/**
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
 */async function oP(t,e){return ca(t,"POST","/v1/accounts:signUp",jn(t,e))}/**
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
 */class di{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Bt._fromIdTokenResponse(e,r,i),o=Ty(r);return new di({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ty(r);return new di({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ty(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class iu extends _n{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,iu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new iu(e,n,r,i)}}function KE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?iu._fromErrorAndOperation(t,s,e,r):s})}async function aP(t,e,n=!1){const r=await ci(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return di._forOperation(t,"link",r)}/**
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
 */async function lP(t,e,n=!1){const{auth:r}=t;if(wt(r.app))return Promise.reject(Pn(r));const i="reauthenticate";try{const s=await ci(t,KE(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=Qf(s.idToken);G(o,r,"internal-error");const{sub:l}=o;return G(t.uid===l,r,"user-mismatch"),di._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Gt(r,"user-mismatch"),s}}/**
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
 */async function QE(t,e,n=!1){if(wt(t.app))return Promise.reject(Pn(t));const r="signIn",i=await KE(t,r,e),s=await di._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function uP(t,e){return QE(br(t),e)}/**
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
 */async function YE(t){const e=br(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function cP(t,e,n){const r=br(t);await ru(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",eP)}async function hP(t,e,n){if(wt(t.app))return Promise.reject(Pn(t));const r=br(t),o=await ru(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",oP).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&YE(t),u}),l=await di._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function dP(t,e,n){return wt(t.app)?Promise.reject(Pn(t)):uP(Ee(t),Is.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&YE(t),r})}/**
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
 */async function fP(t,e){return Yt(t,"POST","/v1/accounts:update",e)}/**
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
 */async function XE(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ee(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ci(r,fP(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function pP(t,e){return mP(Ee(t),null,e)}async function mP(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};n&&(s.password=n);const o=await ci(t,Yk(r,s));await t._updateTokensIfNecessary(o,!0)}function gP(t,e,n,r){return Ee(t).onIdTokenChanged(e,n,r)}function yP(t,e,n){return Ee(t).beforeAuthStateChanged(e,n)}function _P(t,e,n,r){return Ee(t).onAuthStateChanged(e,n,r)}function vP(t){return Ee(t).signOut()}const su="__sak";/**
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
 */class JE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(su,"1"),this.storage.removeItem(su),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const wP=1e3,EP=10;class ZE extends JE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=BE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Nk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,EP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},wP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ZE.type="LOCAL";const TP=ZE;/**
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
 */class e0 extends JE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}e0.type="SESSION";const t0=e0;/**
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
 */function IP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Bu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Bu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await IP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bu.receivers=[];/**
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
 */function Zf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class SP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Zf("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function un(){return window}function RP(t){un().location.href=t}/**
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
 */function n0(){return typeof un().WorkerGlobalScope<"u"&&typeof un().importScripts=="function"}async function AP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function CP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function kP(){return n0()?self:null}/**
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
 */const r0="firebaseLocalStorageDb",PP=1,ou="firebaseLocalStorage",i0="fbase_key";class da{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $u(t,e){return t.transaction([ou],e?"readwrite":"readonly").objectStore(ou)}function xP(){const t=indexedDB.deleteDatabase(r0);return new da(t).toPromise()}function wd(){const t=indexedDB.open(r0,PP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ou,{keyPath:i0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ou)?e(r):(r.close(),await xP(),e(await wd()))})})}async function Iy(t,e,n){const r=$u(t,!0).put({[i0]:e,value:n});return new da(r).toPromise()}async function NP(t,e){const n=$u(t,!1).get(e),r=await new da(n).toPromise();return r===void 0?null:r.value}function Sy(t,e){const n=$u(t,!0).delete(e);return new da(n).toPromise()}const DP=800,OP=3;class s0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>OP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return n0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bu._getInstance(kP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await AP(),!this.activeServiceWorker)return;this.sender=new SP(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||CP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wd();return await Iy(e,su,"1"),await Sy(e,su),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Iy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>NP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Sy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=$u(i,!1).getAll();return new da(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),DP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}s0.type="LOCAL";const VP=s0;new ua(3e4,6e4);/**
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
 */function bP(t,e){return e?An(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ep extends Xf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function LP(t){return QE(t.auth,new ep(t),t.bypassAuthState)}function MP(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),lP(n,new ep(t),t.bypassAuthState)}async function UP(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),aP(n,new ep(t),t.bypassAuthState)}/**
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
 */class o0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return LP;case"linkViaPopup":case"linkViaRedirect":return UP;case"reauthViaPopup":case"reauthViaRedirect":return MP;default:Gt(this.auth,"internal-error")}}resolve(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const FP=new ua(2e3,1e4);class Bi extends o0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Bi.currentPopupAction&&Bi.currentPopupAction.cancel(),Bi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Ln(this.filter.length===1,"Popup operations only handle one event");const e=Zf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,FP.get())};e()}}Bi.currentPopupAction=null;/**
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
 */const jP="pendingRedirect",vl=new Map;class zP extends o0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=vl.get(this.auth._key());if(!e){try{const r=await BP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}vl.set(this.auth._key(),e)}return this.bypassAuthState||vl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function BP(t,e){const n=qP(e),r=HP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function $P(t,e){vl.set(t._key(),e)}function HP(t){return An(t._redirectPersistence)}function qP(t){return _l(jP,t.config.apiKey,t.name)}async function WP(t,e,n=!1){if(wt(t.app))return Promise.reject(Pn(t));const r=br(t),i=bP(r,e),o=await new zP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const GP=10*60*1e3;class KP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!QP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!a0(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(ln(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ry(e))}saveEventToCache(e){this.cachedEventUids.add(Ry(e)),this.lastProcessedEventTime=Date.now()}}function Ry(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function a0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function QP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return a0(t);default:return!1}}/**
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
 */async function YP(t,e={}){return Yt(t,"GET","/v1/projects",e)}/**
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
 */const XP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,JP=/^https?/;async function ZP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await YP(t);for(const n of e)try{if(e2(n))return}catch{}Gt(t,"unauthorized-domain")}function e2(t){const e=_d(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!JP.test(n))return!1;if(XP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const t2=new ua(3e4,6e4);function Ay(){const t=un().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function n2(t){return new Promise((e,n)=>{var i,s,o;function r(){Ay(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ay(),n(ln(t,"network-request-failed"))},timeout:t2.get()})}if((s=(i=un().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=un().gapi)!=null&&o.load)r();else{const l=jk("iframefcb");return un()[l]=()=>{gapi.load?r():n(ln(t,"network-request-failed"))},HE(`${Fk()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw wl=null,e})}let wl=null;function r2(t){return wl=wl||n2(t),wl}/**
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
 */const i2=new ua(5e3,15e3),s2="__/auth/iframe",o2="emulator/auth/iframe",a2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},l2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function u2(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Kf(e,o2):`https://${t.config.authDomain}/${s2}`,r={apiKey:e.apiKey,appName:t.name,v:_i},i=l2.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${la(r).slice(1)}`}async function c2(t){const e=await r2(t),n=un().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:u2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:a2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ln(t,"network-request-failed"),l=un().setTimeout(()=>{s(o)},i2.get());function u(){un().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const h2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},d2=500,f2=600,p2="_blank",m2="http://localhost";class Cy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function g2(t,e,n,r=d2,i=f2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...h2,width:r.toString(),height:i.toString(),top:s,left:o},c=rt().toLowerCase();n&&(l=ME(c)?p2:n),bE(c)&&(e=e||m2,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[_,A])=>`${m}${_}=${A},`,"");if(xk(c)&&l!=="_self")return y2(e||"",l),new Cy(null);const p=window.open(e||"",l,d);G(p,t,"popup-blocked");try{p.focus()}catch{}return new Cy(p)}function y2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const _2="__/auth/handler",v2="emulator/auth/handler",w2=encodeURIComponent("fac");async function ky(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:_i,eventId:i};if(e instanceof GE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",YA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof ha){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${w2}=${encodeURIComponent(u)}`:"";return`${E2(t)}?${la(l).slice(1)}${c}`}function E2({config:t}){return t.emulator?Kf(t,v2):`https://${t.authDomain}/${_2}`}/**
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
 */const hh="webStorageSupport";class T2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=t0,this._completeRedirectFn=WP,this._overrideRedirectResult=$P}async _openPopup(e,n,r,i){var o;Ln((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await ky(e,n,r,_d(),i);return g2(e,s,Zf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await ky(e,n,r,_d(),i);return RP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ln(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await c2(e),r=new KP(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(hh,{type:hh},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[hh];s!==void 0&&n(!!s),Gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ZP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return BE()||LE()||Yf()}}const I2=T2;var Py="@firebase/auth",xy="1.12.0";/**
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
 */class S2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function R2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function A2(t){ui(new Ir("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$E(t)},c=new Lk(r,i,s,u);return Wk(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ui(new Ir("auth-internal",e=>{const n=br(e.getProvider("auth").getImmediate());return(r=>new S2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(Py,xy,R2(t)),an(Py,xy,"esm2020")}/**
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
 */const C2=5*60,k2=wE("authIdTokenMaxAge")||C2;let Ny=null;const P2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>k2)return;const i=n==null?void 0:n.token;Ny!==i&&(Ny=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function x2(t=Wf()){const e=ju(t,"auth");if(e.isInitialized())return e.getImmediate();const n=qk(t,{popupRedirectResolver:I2,persistence:[VP,TP,t0]}),r=wE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=P2(s.toString());yP(n,o,()=>o(n.currentUser)),gP(n,l=>o(l))}}const i=yE("auth");return i&&Gk(n,`http://${i}`),n}function N2(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Mk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ln("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",N2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});A2("Browser");var Dy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _r,l0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function I(){}I.prototype=y.prototype,E.F=y.prototype,E.prototype=new I,E.prototype.constructor=E,E.D=function(R,C,x){for(var S=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)S[Be-2]=arguments[Be];return y.prototype[C].apply(R,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,y,I){I||(I=0);const R=Array(16);if(typeof y=="string")for(var C=0;C<16;++C)R[C]=y.charCodeAt(I++)|y.charCodeAt(I++)<<8|y.charCodeAt(I++)<<16|y.charCodeAt(I++)<<24;else for(C=0;C<16;++C)R[C]=y[I++]|y[I++]<<8|y[I++]<<16|y[I++]<<24;y=E.g[0],I=E.g[1],C=E.g[2];let x=E.g[3],S;S=y+(x^I&(C^x))+R[0]+3614090360&4294967295,y=I+(S<<7&4294967295|S>>>25),S=x+(C^y&(I^C))+R[1]+3905402710&4294967295,x=y+(S<<12&4294967295|S>>>20),S=C+(I^x&(y^I))+R[2]+606105819&4294967295,C=x+(S<<17&4294967295|S>>>15),S=I+(y^C&(x^y))+R[3]+3250441966&4294967295,I=C+(S<<22&4294967295|S>>>10),S=y+(x^I&(C^x))+R[4]+4118548399&4294967295,y=I+(S<<7&4294967295|S>>>25),S=x+(C^y&(I^C))+R[5]+1200080426&4294967295,x=y+(S<<12&4294967295|S>>>20),S=C+(I^x&(y^I))+R[6]+2821735955&4294967295,C=x+(S<<17&4294967295|S>>>15),S=I+(y^C&(x^y))+R[7]+4249261313&4294967295,I=C+(S<<22&4294967295|S>>>10),S=y+(x^I&(C^x))+R[8]+1770035416&4294967295,y=I+(S<<7&4294967295|S>>>25),S=x+(C^y&(I^C))+R[9]+2336552879&4294967295,x=y+(S<<12&4294967295|S>>>20),S=C+(I^x&(y^I))+R[10]+4294925233&4294967295,C=x+(S<<17&4294967295|S>>>15),S=I+(y^C&(x^y))+R[11]+2304563134&4294967295,I=C+(S<<22&4294967295|S>>>10),S=y+(x^I&(C^x))+R[12]+1804603682&4294967295,y=I+(S<<7&4294967295|S>>>25),S=x+(C^y&(I^C))+R[13]+4254626195&4294967295,x=y+(S<<12&4294967295|S>>>20),S=C+(I^x&(y^I))+R[14]+2792965006&4294967295,C=x+(S<<17&4294967295|S>>>15),S=I+(y^C&(x^y))+R[15]+1236535329&4294967295,I=C+(S<<22&4294967295|S>>>10),S=y+(C^x&(I^C))+R[1]+4129170786&4294967295,y=I+(S<<5&4294967295|S>>>27),S=x+(I^C&(y^I))+R[6]+3225465664&4294967295,x=y+(S<<9&4294967295|S>>>23),S=C+(y^I&(x^y))+R[11]+643717713&4294967295,C=x+(S<<14&4294967295|S>>>18),S=I+(x^y&(C^x))+R[0]+3921069994&4294967295,I=C+(S<<20&4294967295|S>>>12),S=y+(C^x&(I^C))+R[5]+3593408605&4294967295,y=I+(S<<5&4294967295|S>>>27),S=x+(I^C&(y^I))+R[10]+38016083&4294967295,x=y+(S<<9&4294967295|S>>>23),S=C+(y^I&(x^y))+R[15]+3634488961&4294967295,C=x+(S<<14&4294967295|S>>>18),S=I+(x^y&(C^x))+R[4]+3889429448&4294967295,I=C+(S<<20&4294967295|S>>>12),S=y+(C^x&(I^C))+R[9]+568446438&4294967295,y=I+(S<<5&4294967295|S>>>27),S=x+(I^C&(y^I))+R[14]+3275163606&4294967295,x=y+(S<<9&4294967295|S>>>23),S=C+(y^I&(x^y))+R[3]+4107603335&4294967295,C=x+(S<<14&4294967295|S>>>18),S=I+(x^y&(C^x))+R[8]+1163531501&4294967295,I=C+(S<<20&4294967295|S>>>12),S=y+(C^x&(I^C))+R[13]+2850285829&4294967295,y=I+(S<<5&4294967295|S>>>27),S=x+(I^C&(y^I))+R[2]+4243563512&4294967295,x=y+(S<<9&4294967295|S>>>23),S=C+(y^I&(x^y))+R[7]+1735328473&4294967295,C=x+(S<<14&4294967295|S>>>18),S=I+(x^y&(C^x))+R[12]+2368359562&4294967295,I=C+(S<<20&4294967295|S>>>12),S=y+(I^C^x)+R[5]+4294588738&4294967295,y=I+(S<<4&4294967295|S>>>28),S=x+(y^I^C)+R[8]+2272392833&4294967295,x=y+(S<<11&4294967295|S>>>21),S=C+(x^y^I)+R[11]+1839030562&4294967295,C=x+(S<<16&4294967295|S>>>16),S=I+(C^x^y)+R[14]+4259657740&4294967295,I=C+(S<<23&4294967295|S>>>9),S=y+(I^C^x)+R[1]+2763975236&4294967295,y=I+(S<<4&4294967295|S>>>28),S=x+(y^I^C)+R[4]+1272893353&4294967295,x=y+(S<<11&4294967295|S>>>21),S=C+(x^y^I)+R[7]+4139469664&4294967295,C=x+(S<<16&4294967295|S>>>16),S=I+(C^x^y)+R[10]+3200236656&4294967295,I=C+(S<<23&4294967295|S>>>9),S=y+(I^C^x)+R[13]+681279174&4294967295,y=I+(S<<4&4294967295|S>>>28),S=x+(y^I^C)+R[0]+3936430074&4294967295,x=y+(S<<11&4294967295|S>>>21),S=C+(x^y^I)+R[3]+3572445317&4294967295,C=x+(S<<16&4294967295|S>>>16),S=I+(C^x^y)+R[6]+76029189&4294967295,I=C+(S<<23&4294967295|S>>>9),S=y+(I^C^x)+R[9]+3654602809&4294967295,y=I+(S<<4&4294967295|S>>>28),S=x+(y^I^C)+R[12]+3873151461&4294967295,x=y+(S<<11&4294967295|S>>>21),S=C+(x^y^I)+R[15]+530742520&4294967295,C=x+(S<<16&4294967295|S>>>16),S=I+(C^x^y)+R[2]+3299628645&4294967295,I=C+(S<<23&4294967295|S>>>9),S=y+(C^(I|~x))+R[0]+4096336452&4294967295,y=I+(S<<6&4294967295|S>>>26),S=x+(I^(y|~C))+R[7]+1126891415&4294967295,x=y+(S<<10&4294967295|S>>>22),S=C+(y^(x|~I))+R[14]+2878612391&4294967295,C=x+(S<<15&4294967295|S>>>17),S=I+(x^(C|~y))+R[5]+4237533241&4294967295,I=C+(S<<21&4294967295|S>>>11),S=y+(C^(I|~x))+R[12]+1700485571&4294967295,y=I+(S<<6&4294967295|S>>>26),S=x+(I^(y|~C))+R[3]+2399980690&4294967295,x=y+(S<<10&4294967295|S>>>22),S=C+(y^(x|~I))+R[10]+4293915773&4294967295,C=x+(S<<15&4294967295|S>>>17),S=I+(x^(C|~y))+R[1]+2240044497&4294967295,I=C+(S<<21&4294967295|S>>>11),S=y+(C^(I|~x))+R[8]+1873313359&4294967295,y=I+(S<<6&4294967295|S>>>26),S=x+(I^(y|~C))+R[15]+4264355552&4294967295,x=y+(S<<10&4294967295|S>>>22),S=C+(y^(x|~I))+R[6]+2734768916&4294967295,C=x+(S<<15&4294967295|S>>>17),S=I+(x^(C|~y))+R[13]+1309151649&4294967295,I=C+(S<<21&4294967295|S>>>11),S=y+(C^(I|~x))+R[4]+4149444226&4294967295,y=I+(S<<6&4294967295|S>>>26),S=x+(I^(y|~C))+R[11]+3174756917&4294967295,x=y+(S<<10&4294967295|S>>>22),S=C+(y^(x|~I))+R[2]+718787259&4294967295,C=x+(S<<15&4294967295|S>>>17),S=I+(x^(C|~y))+R[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(C+(S<<21&4294967295|S>>>11))&4294967295,E.g[2]=E.g[2]+C&4294967295,E.g[3]=E.g[3]+x&4294967295}r.prototype.v=function(E,y){y===void 0&&(y=E.length);const I=y-this.blockSize,R=this.C;let C=this.h,x=0;for(;x<y;){if(C==0)for(;x<=I;)i(this,E,x),x+=this.blockSize;if(typeof E=="string"){for(;x<y;)if(R[C++]=E.charCodeAt(x++),C==this.blockSize){i(this,R),C=0;break}}else for(;x<y;)if(R[C++]=E[x++],C==this.blockSize){i(this,R),C=0;break}}this.h=C,this.o+=y},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;y=this.o*8;for(var I=E.length-8;I<E.length;++I)E[I]=y&255,y/=256;for(this.v(E),E=Array(16),y=0,I=0;I<4;++I)for(let R=0;R<32;R+=8)E[y++]=this.g[I]>>>R&255;return E};function s(E,y){var I=l;return Object.prototype.hasOwnProperty.call(I,E)?I[E]:I[E]=y(E)}function o(E,y){this.h=y;const I=[];let R=!0;for(let C=E.length-1;C>=0;C--){const x=E[C]|0;R&&x==y||(I[C]=x,R=!1)}this.g=I}var l={};function u(E){return-128<=E&&E<128?s(E,function(y){return new o([y|0],y<0?-1:0)}):new o([E|0],E<0?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return p;if(E<0)return P(c(-E));const y=[];let I=1;for(let R=0;E>=I;R++)y[R]=E/I|0,I*=4294967296;return new o(y,0)}function d(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return P(d(E.substring(1),y));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=c(Math.pow(y,8));let R=p;for(let x=0;x<E.length;x+=8){var C=Math.min(8,E.length-x);const S=parseInt(E.substring(x,x+C),y);C<8?(C=c(Math.pow(y,C)),R=R.j(C).add(c(S))):(R=R.j(I),R=R.add(c(S)))}return R}var p=u(0),m=u(1),_=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-P(this).m();let E=0,y=1;for(let I=0;I<this.g.length;I++){const R=this.i(I);E+=(R>=0?R:4294967296+R)*y,y*=4294967296}return E},t.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(A(this))return"0";if(k(this))return"-"+P(this).toString(E);const y=c(Math.pow(E,6));var I=this;let R="";for(;;){const C=b(I,y).g;I=w(I,C.j(y));let x=((I.g.length>0?I.g[0]:I.h)>>>0).toString(E);if(I=C,A(I))return x+R;for(;x.length<6;)x="0"+x;R=x+R}},t.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function A(E){if(E.h!=0)return!1;for(let y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function k(E){return E.h==-1}t.l=function(E){return E=w(this,E),k(E)?-1:A(E)?0:1};function P(E){const y=E.g.length,I=[];for(let R=0;R<y;R++)I[R]=~E.g[R];return new o(I,~E.h).add(m)}t.abs=function(){return k(this)?P(this):this},t.add=function(E){const y=Math.max(this.g.length,E.g.length),I=[];let R=0;for(let C=0;C<=y;C++){let x=R+(this.i(C)&65535)+(E.i(C)&65535),S=(x>>>16)+(this.i(C)>>>16)+(E.i(C)>>>16);R=S>>>16,x&=65535,S&=65535,I[C]=S<<16|x}return new o(I,I[I.length-1]&-2147483648?-1:0)};function w(E,y){return E.add(P(y))}t.j=function(E){if(A(this)||A(E))return p;if(k(this))return k(E)?P(this).j(P(E)):P(P(this).j(E));if(k(E))return P(this.j(P(E)));if(this.l(_)<0&&E.l(_)<0)return c(this.m()*E.m());const y=this.g.length+E.g.length,I=[];for(var R=0;R<2*y;R++)I[R]=0;for(R=0;R<this.g.length;R++)for(let C=0;C<E.g.length;C++){const x=this.i(R)>>>16,S=this.i(R)&65535,Be=E.i(C)>>>16,wn=E.i(C)&65535;I[2*R+2*C]+=S*wn,v(I,2*R+2*C),I[2*R+2*C+1]+=x*wn,v(I,2*R+2*C+1),I[2*R+2*C+1]+=S*Be,v(I,2*R+2*C+1),I[2*R+2*C+2]+=x*Be,v(I,2*R+2*C+2)}for(E=0;E<y;E++)I[E]=I[2*E+1]<<16|I[2*E];for(E=y;E<2*y;E++)I[E]=0;return new o(I,0)};function v(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function T(E,y){this.g=E,this.h=y}function b(E,y){if(A(y))throw Error("division by zero");if(A(E))return new T(p,p);if(k(E))return y=b(P(E),y),new T(P(y.g),P(y.h));if(k(y))return y=b(E,P(y)),new T(P(y.g),y.h);if(E.g.length>30){if(k(E)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var I=m,R=y;R.l(E)<=0;)I=U(I),R=U(R);var C=j(I,1),x=j(R,1);for(R=j(R,2),I=j(I,2);!A(R);){var S=x.add(R);S.l(E)<=0&&(C=C.add(I),x=S),R=j(R,1),I=j(I,1)}return y=w(E,C.j(y)),new T(C,y)}for(C=p;E.l(y)>=0;){for(I=Math.max(1,Math.floor(E.m()/y.m())),R=Math.ceil(Math.log(I)/Math.LN2),R=R<=48?1:Math.pow(2,R-48),x=c(I),S=x.j(y);k(S)||S.l(E)>0;)I-=R,x=c(I),S=x.j(y);A(x)&&(x=m),C=C.add(x),E=w(E,S)}return new T(C,E)}t.B=function(E){return b(this,E).h},t.and=function(E){const y=Math.max(this.g.length,E.g.length),I=[];for(let R=0;R<y;R++)I[R]=this.i(R)&E.i(R);return new o(I,this.h&E.h)},t.or=function(E){const y=Math.max(this.g.length,E.g.length),I=[];for(let R=0;R<y;R++)I[R]=this.i(R)|E.i(R);return new o(I,this.h|E.h)},t.xor=function(E){const y=Math.max(this.g.length,E.g.length),I=[];for(let R=0;R<y;R++)I[R]=this.i(R)^E.i(R);return new o(I,this.h^E.h)};function U(E){const y=E.g.length+1,I=[];for(let R=0;R<y;R++)I[R]=E.i(R)<<1|E.i(R-1)>>>31;return new o(I,E.h)}function j(E,y){const I=y>>5;y%=32;const R=E.g.length-I,C=[];for(let x=0;x<R;x++)C[x]=y>0?E.i(x+I)>>>y|E.i(x+I+1)<<32-y:E.i(x+I);return new o(C,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,l0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,_r=o}).apply(typeof Dy<"u"?Dy:typeof self<"u"?self:typeof window<"u"?window:{});var Xa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var u0,ao,c0,El,Ed,h0,d0,f0;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xa=="object"&&Xa];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var N=a[g];if(!(N in f))break e;f=f[N]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var f=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&f.push([g,h[g]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,f){return a.call.apply(a.bind,arguments)}function c(a,h,f){return c=u,c.apply(null,arguments)}function d(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function f(){}f.prototype=h.prototype,a.Z=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(g,N,V){for(var z=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)z[Z-2]=arguments[Z];return h.prototype[N].apply(g,z)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function _(a){const h=a.length;if(h>0){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function A(a,h){for(let g=1;g<arguments.length;g++){const N=arguments[g];var f=typeof N;if(f=f!="object"?f:N?Array.isArray(N)?"array":f:"null",f=="array"||f=="object"&&typeof N.length=="number"){f=a.length||0;const V=N.length||0;a.length=f+V;for(let z=0;z<V;z++)a[f+z]=N[z]}else a.push(N)}}class k{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function P(a){o.setTimeout(()=>{throw a},0)}function w(){var a=E;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class v{constructor(){this.h=this.g=null}add(h,f){const g=T.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var T=new k(()=>new b,a=>a.reset());class b{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let U,j=!1,E=new v,y=()=>{const a=Promise.resolve(void 0);U=()=>{a.then(I)}};function I(){for(var a;a=w();){try{a.h.call(a.g)}catch(f){P(f)}var h=T;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}j=!1}function R(){this.u=this.u,this.C=this.C}R.prototype.u=!1,R.prototype.dispose=function(){this.u||(this.u=!0,this.N())},R.prototype[Symbol.dispose]=function(){this.dispose()},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function C(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var x=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,h),o.removeEventListener("test",f,h)}catch{}return a}();function S(a){return/^[\s\xa0]*$/.test(a)}function Be(a,h){C.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(Be,C),Be.prototype.init=function(a,h){const f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Be.Z.h.call(this)},Be.prototype.h=function(){Be.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var wn="closure_listenable_"+(Math.random()*1e6|0),ks=0;function Ps(a,h,f,g,N){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=N,this.key=++ks,this.da=this.fa=!1}function $(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Q(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function J(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function me(a){const h={};for(const f in a)h[f]=a[f];return h}const Re="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Fr(a,h){let f,g;for(let N=1;N<arguments.length;N++){g=arguments[N];for(f in g)a[f]=g[f];for(let V=0;V<Re.length;V++)f=Re[V],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function kt(a){this.src=a,this.g={},this.h=0}kt.prototype.add=function(a,h,f,g,N){const V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);const z=Mt(a,h,g,N);return z>-1?(h=a[z],f||(h.fa=!1)):(h=new Ps(h,this.src,V,!!g,N),h.fa=f,a.push(h)),h};function jr(a,h){const f=h.type;if(f in a.g){var g=a.g[f],N=Array.prototype.indexOf.call(g,h,void 0),V;(V=N>=0)&&Array.prototype.splice.call(g,N,1),V&&($(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Mt(a,h,f,g){for(let N=0;N<a.length;++N){const V=a[N];if(!V.da&&V.listener==h&&V.capture==!!f&&V.ha==g)return N}return-1}var zn="closure_lm_"+(Math.random()*1e6|0),uc={};function Bp(a,h,f,g,N){if(Array.isArray(h)){for(let V=0;V<h.length;V++)Bp(a,h[V],f,g,N);return null}return f=qp(f),a&&a[wn]?a.J(h,f,l(g)?!!g.capture:!1,N):GT(a,h,f,!1,g,N)}function GT(a,h,f,g,N,V){if(!h)throw Error("Invalid event type");const z=l(N)?!!N.capture:!!N;let Z=hc(a);if(Z||(a[zn]=Z=new kt(a)),f=Z.add(h,f,g,z,V),f.proxy)return f;if(g=KT(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)x||(N=z),N===void 0&&(N=!1),a.addEventListener(h.toString(),g,N);else if(a.attachEvent)a.attachEvent(Hp(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function KT(){function a(f){return h.call(a.src,a.listener,f)}const h=QT;return a}function $p(a,h,f,g,N){if(Array.isArray(h))for(var V=0;V<h.length;V++)$p(a,h[V],f,g,N);else g=l(g)?!!g.capture:!!g,f=qp(f),a&&a[wn]?(a=a.i,V=String(h).toString(),V in a.g&&(h=a.g[V],f=Mt(h,f,g,N),f>-1&&($(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete a.g[V],a.h--)))):a&&(a=hc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Mt(h,f,g,N)),(f=a>-1?h[a]:null)&&cc(f))}function cc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[wn])jr(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(Hp(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=hc(h))?(jr(f,a),f.h==0&&(f.src=null,h[zn]=null)):$(a)}}}function Hp(a){return a in uc?uc[a]:uc[a]="on"+a}function QT(a,h){if(a.da)a=!0;else{h=new Be(h,this);const f=a.listener,g=a.ha||a.src;a.fa&&cc(a),a=f.call(g,h)}return a}function hc(a){return a=a[zn],a instanceof kt?a:null}var dc="__closure_events_fn_"+(Math.random()*1e9>>>0);function qp(a){return typeof a=="function"?a:(a[dc]||(a[dc]=function(h){return a.handleEvent(h)}),a[dc])}function Qe(){R.call(this),this.i=new kt(this),this.M=this,this.G=null}p(Qe,R),Qe.prototype[wn]=!0,Qe.prototype.removeEventListener=function(a,h,f,g){$p(this,a,h,f,g)};function it(a,h){var f,g=a.G;if(g)for(f=[];g;g=g.G)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new C(h,a);else if(h instanceof C)h.target=h.target||a;else{var N=h;h=new C(g,a),Fr(h,N)}N=!0;let V,z;if(f)for(z=f.length-1;z>=0;z--)V=h.g=f[z],N=wa(V,g,!0,h)&&N;if(V=h.g=a,N=wa(V,g,!0,h)&&N,N=wa(V,g,!1,h)&&N,f)for(z=0;z<f.length;z++)V=h.g=f[z],N=wa(V,g,!1,h)&&N}Qe.prototype.N=function(){if(Qe.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const f=a.g[h];for(let g=0;g<f.length;g++)$(f[g]);delete a.g[h],a.h--}}this.G=null},Qe.prototype.J=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},Qe.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function wa(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let N=!0;for(let V=0;V<h.length;++V){const z=h[V];if(z&&!z.da&&z.capture==f){const Z=z.listener,Oe=z.ha||z.src;z.fa&&jr(a.i,z),N=Z.call(Oe,g)!==!1&&N}}return N&&!g.defaultPrevented}function YT(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Wp(a){a.g=YT(()=>{a.g=null,a.i&&(a.i=!1,Wp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class XT extends R{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Wp(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xs(a){R.call(this),this.h=a,this.g={}}p(xs,R);var Gp=[];function Kp(a){Q(a.g,function(h,f){this.g.hasOwnProperty(f)&&cc(h)},a),a.g={}}xs.prototype.N=function(){xs.Z.N.call(this),Kp(this)},xs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var fc=o.JSON.stringify,JT=o.JSON.parse,ZT=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Qp(){}function Yp(){}var Ns={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function pc(){C.call(this,"d")}p(pc,C);function mc(){C.call(this,"c")}p(mc,C);var zr={},Xp=null;function Ea(){return Xp=Xp||new Qe}zr.Ia="serverreachability";function Jp(a){C.call(this,zr.Ia,a)}p(Jp,C);function Ds(a){const h=Ea();it(h,new Jp(h))}zr.STAT_EVENT="statevent";function Zp(a,h){C.call(this,zr.STAT_EVENT,a),this.stat=h}p(Zp,C);function st(a){const h=Ea();it(h,new Zp(h,a))}zr.Ja="timingevent";function em(a,h){C.call(this,zr.Ja,a),this.size=h}p(em,C);function Os(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Vs(){this.g=!0}Vs.prototype.ua=function(){this.g=!1};function eI(a,h,f,g,N,V){a.info(function(){if(a.g)if(V){var z="",Z=V.split("&");for(let le=0;le<Z.length;le++){var Oe=Z[le].split("=");if(Oe.length>1){const Me=Oe[0];Oe=Oe[1];const Zt=Me.split("_");z=Zt.length>=2&&Zt[1]=="type"?z+(Me+"="+Oe+"&"):z+(Me+"=redacted&")}}}else z=null;else z=V;return"XMLHTTP REQ ("+g+") [attempt "+N+"]: "+h+`
`+f+`
`+z})}function tI(a,h,f,g,N,V,z){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+N+"]: "+h+`
`+f+`
`+V+" "+z})}function Ei(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+rI(a,f)+(g?" "+g:"")})}function nI(a,h){a.info(function(){return"TIMEOUT: "+h})}Vs.prototype.info=function(){};function rI(a,h){if(!a.g)return h;if(!h)return null;try{const V=JSON.parse(h);if(V){for(a=0;a<V.length;a++)if(Array.isArray(V[a])){var f=V[a];if(!(f.length<2)){var g=f[1];if(Array.isArray(g)&&!(g.length<1)){var N=g[0];if(N!="noop"&&N!="stop"&&N!="close")for(let z=1;z<g.length;z++)g[z]=""}}}}return fc(V)}catch{return h}}var Ta={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},tm={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},nm;function gc(){}p(gc,Qp),gc.prototype.g=function(){return new XMLHttpRequest},nm=new gc;function bs(a){return encodeURIComponent(String(a))}function iI(a){var h=1;a=a.split(":");const f=[];for(;h>0&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function Bn(a,h,f,g){this.j=a,this.i=h,this.l=f,this.S=g||1,this.V=new xs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new rm}function rm(){this.i=null,this.g="",this.h=!1}var im={},yc={};function _c(a,h,f){a.M=1,a.A=Sa(Jt(h)),a.u=f,a.R=!0,sm(a,null)}function sm(a,h){a.F=Date.now(),Ia(a),a.B=Jt(a.A);var f=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),_m(f.i,"t",g),a.C=0,f=a.j.L,a.h=new rm,a.g=Lm(a.j,f?h:null,!a.u),a.P>0&&(a.O=new XT(c(a.Y,a,a.g),a.P)),h=a.V,f=a.g,g=a.ba;var N="readystatechange";Array.isArray(N)||(N&&(Gp[0]=N.toString()),N=Gp);for(let V=0;V<N.length;V++){const z=Bp(f,N[V],g||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.J?me(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Ds(),eI(a.i,a.v,a.B,a.l,a.S,a.u)}Bn.prototype.ba=function(a){a=a.target;const h=this.O;h&&qn(a)==3?h.j():this.Y(a)},Bn.prototype.Y=function(a){try{if(a==this.g)e:{const Z=qn(this.g),Oe=this.g.ya(),le=this.g.ca();if(!(Z<3)&&(Z!=3||this.g&&(this.h.h||this.g.la()||Rm(this.g)))){this.K||Z!=4||Oe==7||(Oe==8||le<=0?Ds(3):Ds(2)),vc(this);var h=this.g.ca();this.X=h;var f=sI(this);if(this.o=h==200,tI(this.i,this.v,this.B,this.l,this.S,Z,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,N=this.g;if((g=N.g?N.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(g)){var V=g;break t}}V=null}if(a=V)Ei(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,wc(this,a);else{this.o=!1,this.m=3,st(12),Br(this),Ls(this);break e}}if(this.R){a=!0;let Me;for(;!this.K&&this.C<f.length;)if(Me=oI(this,f),Me==yc){Z==4&&(this.m=4,st(14),a=!1),Ei(this.i,this.l,null,"[Incomplete Response]");break}else if(Me==im){this.m=4,st(15),Ei(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else Ei(this.i,this.l,Me,null),wc(this,Me);if(om(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Z!=4||f.length!=0||this.h.h||(this.m=1,st(16),a=!1),this.o=this.o&&a,!a)Ei(this.i,this.l,f,"[Invalid Chunked Response]"),Br(this),Ls(this);else if(f.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),kc(z),z.P=!0,st(11))}}else Ei(this.i,this.l,f,null),wc(this,f);Z==4&&Br(this),this.o&&!this.K&&(Z==4?Dm(this.j,this):(this.o=!1,Ia(this)))}else wI(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,st(12)):(this.m=0,st(13)),Br(this),Ls(this)}}}catch{}finally{}};function sI(a){if(!om(a))return a.g.la();const h=Rm(a.g);if(h==="")return"";let f="";const g=h.length,N=qn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Br(a),Ls(a),"";a.h.i=new o.TextDecoder}for(let V=0;V<g;V++)a.h.h=!0,f+=a.h.i.decode(h[V],{stream:!(N&&V==g-1)});return h.length=0,a.h.g+=f,a.C=0,a.h.g}function om(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function oI(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?yc:(f=Number(h.substring(f,g)),isNaN(f)?im:(g+=1,g+f>h.length?yc:(h=h.slice(g,g+f),a.C=g+f,h)))}Bn.prototype.cancel=function(){this.K=!0,Br(this)};function Ia(a){a.T=Date.now()+a.H,am(a,a.H)}function am(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Os(c(a.aa,a),h)}function vc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Bn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(nI(this.i,this.B),this.M!=2&&(Ds(),st(17)),Br(this),this.m=2,Ls(this)):am(this,this.T-a)};function Ls(a){a.j.I==0||a.K||Dm(a.j,a)}function Br(a){vc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Kp(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function wc(a,h){try{var f=a.j;if(f.I!=0&&(f.g==a||Ec(f.h,a))){if(!a.L&&Ec(f.h,a)&&f.I==3){try{var g=f.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var N=g;if(N[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)Pa(f),Ca(f);else break e;Cc(f),st(18)}}else f.xa=N[1],0<f.xa-f.K&&N[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Os(c(f.Va,f),6e3));cm(f.h)<=1&&f.ta&&(f.ta=void 0)}else Hr(f,11)}else if((a.L||f.g==a)&&Pa(f),!S(h))for(N=f.Ba.g.parse(h),h=0;h<N.length;h++){let le=N[h];const Me=le[0];if(!(Me<=f.K))if(f.K=Me,le=le[1],f.I==2)if(le[0]=="c"){f.M=le[1],f.ba=le[2];const Zt=le[3];Zt!=null&&(f.ka=Zt,f.j.info("VER="+f.ka));const qr=le[4];qr!=null&&(f.za=qr,f.j.info("SVER="+f.za));const Wn=le[5];Wn!=null&&typeof Wn=="number"&&Wn>0&&(g=1.5*Wn,f.O=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Gn=a.g;if(Gn){const Na=Gn.g?Gn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Na){var V=g.h;V.g||Na.indexOf("spdy")==-1&&Na.indexOf("quic")==-1&&Na.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Tc(V,V.h),V.h=null))}if(g.G){const Pc=Gn.g?Gn.g.getResponseHeader("X-HTTP-Session-Id"):null;Pc&&(g.wa=Pc,he(g.J,g.G,Pc))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),g=f;var z=a;if(g.na=bm(g,g.L?g.ba:null,g.W),z.L){hm(g.h,z);var Z=z,Oe=g.O;Oe&&(Z.H=Oe),Z.D&&(vc(Z),Ia(Z)),g.g=z}else xm(g);f.i.length>0&&ka(f)}else le[0]!="stop"&&le[0]!="close"||Hr(f,7);else f.I==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?Hr(f,7):Ac(f):le[0]!="noop"&&f.l&&f.l.qa(le),f.A=0)}}Ds(4)}catch{}}var aI=class{constructor(a,h){this.g=a,this.map=h}};function lm(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function um(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function cm(a){return a.h?1:a.g?a.g.size:0}function Ec(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Tc(a,h){a.g?a.g.add(h):a.h=h}function hm(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}lm.prototype.cancel=function(){if(this.i=dm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function dm(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.G);return h}return _(a.i)}var fm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lI(a,h){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const g=a[f].indexOf("=");let N,V=null;g>=0?(N=a[f].substring(0,g),V=a[f].substring(g+1)):N=a[f],h(N,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function $n(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof $n?(this.l=a.l,Ms(this,a.j),this.o=a.o,this.g=a.g,Us(this,a.u),this.h=a.h,Ic(this,vm(a.i)),this.m=a.m):a&&(h=String(a).match(fm))?(this.l=!1,Ms(this,h[1]||"",!0),this.o=Fs(h[2]||""),this.g=Fs(h[3]||"",!0),Us(this,h[4]),this.h=Fs(h[5]||"",!0),Ic(this,h[6]||"",!0),this.m=Fs(h[7]||"")):(this.l=!1,this.i=new zs(null,this.l))}$n.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(js(h,pm,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(js(h,pm,!0),"@"),a.push(bs(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(js(f,f.charAt(0)=="/"?hI:cI,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",js(f,fI)),a.join("")},$n.prototype.resolve=function(a){const h=Jt(this);let f=!!a.j;f?Ms(h,a.j):f=!!a.o,f?h.o=a.o:f=!!a.g,f?h.g=a.g:f=a.u!=null;var g=a.h;if(f)Us(h,a.u);else if(f=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var N=h.h.lastIndexOf("/");N!=-1&&(g=h.h.slice(0,N+1)+g)}if(N=g,N==".."||N==".")g="";else if(N.indexOf("./")!=-1||N.indexOf("/.")!=-1){g=N.lastIndexOf("/",0)==0,N=N.split("/");const V=[];for(let z=0;z<N.length;){const Z=N[z++];Z=="."?g&&z==N.length&&V.push(""):Z==".."?((V.length>1||V.length==1&&V[0]!="")&&V.pop(),g&&z==N.length&&V.push("")):(V.push(Z),g=!0)}g=V.join("/")}else g=N}return f?h.h=g:f=a.i.toString()!=="",f?Ic(h,vm(a.i)):f=!!a.m,f&&(h.m=a.m),h};function Jt(a){return new $n(a)}function Ms(a,h,f){a.j=f?Fs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Us(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Ic(a,h,f){h instanceof zs?(a.i=h,pI(a.i,a.l)):(f||(h=js(h,dI)),a.i=new zs(h,a.l))}function he(a,h,f){a.i.set(h,f)}function Sa(a){return he(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Fs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function js(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,uI),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function uI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var pm=/[#\/\?@]/g,cI=/[#\?:]/g,hI=/[#\?]/g,dI=/[#\?@]/g,fI=/#/g;function zs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function $r(a){a.g||(a.g=new Map,a.h=0,a.i&&lI(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=zs.prototype,t.add=function(a,h){$r(this),this.i=null,a=Ti(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function mm(a,h){$r(a),h=Ti(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function gm(a,h){return $r(a),h=Ti(a,h),a.g.has(h)}t.forEach=function(a,h){$r(this),this.g.forEach(function(f,g){f.forEach(function(N){a.call(h,N,g,this)},this)},this)};function ym(a,h){$r(a);let f=[];if(typeof h=="string")gm(a,h)&&(f=f.concat(a.g.get(Ti(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)f=f.concat(a[h]);return f}t.set=function(a,h){return $r(this),this.i=null,a=Ti(this,a),gm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=ym(this,a),a.length>0?String(a[0]):h):h};function _m(a,h,f){mm(a,h),f.length>0&&(a.i=null,a.g.set(Ti(a,h),_(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var f=h[g];const N=bs(f);f=ym(this,f);for(let V=0;V<f.length;V++){let z=N;f[V]!==""&&(z+="="+bs(f[V])),a.push(z)}}return this.i=a.join("&")};function vm(a){const h=new zs;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Ti(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function pI(a,h){h&&!a.j&&($r(a),a.i=null,a.g.forEach(function(f,g){const N=g.toLowerCase();g!=N&&(mm(this,g),_m(this,N,f))},a)),a.j=h}function mI(a,h){const f=new Vs;if(o.Image){const g=new Image;g.onload=d(Hn,f,"TestLoadImage: loaded",!0,h,g),g.onerror=d(Hn,f,"TestLoadImage: error",!1,h,g),g.onabort=d(Hn,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=d(Hn,f,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function gI(a,h){const f=new Vs,g=new AbortController,N=setTimeout(()=>{g.abort(),Hn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(V=>{clearTimeout(N),V.ok?Hn(f,"TestPingServer: ok",!0,h):Hn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),Hn(f,"TestPingServer: error",!1,h)})}function Hn(a,h,f,g,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),g(f)}catch{}}function yI(){this.g=new ZT}function Sc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Sc,Qp),Sc.prototype.g=function(){return new Ra(this.i,this.h)};function Ra(a,h){Qe.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Ra,Qe),t=Ra.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,$s(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Bs(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,$s(this)),this.g&&(this.readyState=3,$s(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;wm(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function wm(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Bs(this):$s(this),this.readyState==3&&wm(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Bs(this))},t.Na=function(a){this.g&&(this.response=a,Bs(this))},t.ga=function(){this.g&&Bs(this)};function Bs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,$s(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function $s(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ra.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Em(a){let h="";return Q(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function Rc(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Em(f),typeof a=="string"?f!=null&&bs(f):he(a,h,f))}function Ie(a){Qe.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Ie,Qe);var _I=/^https?$/i,vI=["POST","PUT"];t=Ie.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():nm.g(),this.g.onreadystatechange=m(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){Tm(this,V);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var N in g)f.set(N,g[N]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())f.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(V=>V.toLowerCase()=="content-type"),N=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(vI,h,void 0)>=0)||g||N||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,z]of f)this.g.setRequestHeader(V,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(V){Tm(this,V)}};function Tm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Im(a),Aa(a)}function Im(a){a.A||(a.A=!0,it(a,"complete"),it(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,it(this,"complete"),it(this,"abort"),Aa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Aa(this,!0)),Ie.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Sm(this):this.Xa())},t.Xa=function(){Sm(this)};function Sm(a){if(a.h&&typeof s<"u"){if(a.v&&qn(a)==4)setTimeout(a.Ca.bind(a),0);else if(it(a,"readystatechange"),qn(a)==4){a.h=!1;try{const V=a.ca();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=V===0){let z=String(a.D).match(fm)[1]||null;!z&&o.self&&o.self.location&&(z=o.self.location.protocol.slice(0,-1)),g=!_I.test(z?z.toLowerCase():"")}f=g}if(f)it(a,"complete"),it(a,"success");else{a.o=6;try{var N=qn(a)>2?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.ca()+"]",Im(a)}}finally{Aa(a)}}}}function Aa(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,h||it(a,"ready");try{f.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function qn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return qn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),JT(h)}};function Rm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function wI(a){const h={};a=(a.g&&qn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(S(a[g]))continue;var f=iI(a[g]);const N=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const V=h[N]||[];h[N]=V,V.push(f)}J(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Hs(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Am(a){this.za=0,this.i=[],this.j=new Vs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Hs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Hs("baseRetryDelayMs",5e3,a),this.Za=Hs("retryDelaySeedMs",1e4,a),this.Ta=Hs("forwardChannelMaxRetries",2,a),this.va=Hs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new lm(a&&a.concurrentRequestLimit),this.Ba=new yI,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Am.prototype,t.ka=8,t.I=1,t.connect=function(a,h,f,g){st(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.J=bm(this,null,this.W),ka(this)};function Ac(a){if(Cm(a),a.I==3){var h=a.V++,f=Jt(a.J);if(he(f,"SID",a.M),he(f,"RID",h),he(f,"TYPE","terminate"),qs(a,f),h=new Bn(a,a.j,h),h.M=2,h.A=Sa(Jt(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=h.A,f=!0),f||(h.g=Lm(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Ia(h)}Vm(a)}function Ca(a){a.g&&(kc(a),a.g.cancel(),a.g=null)}function Cm(a){Ca(a),a.v&&(o.clearTimeout(a.v),a.v=null),Pa(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function ka(a){if(!um(a.h)&&!a.m){a.m=!0;var h=a.Ea;U||y(),j||(U(),j=!0),E.add(h,a),a.D=0}}function EI(a,h){return cm(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Os(c(a.Ea,a,h),Om(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const N=new Bn(this,this.j,a);let V=this.o;if(this.U&&(V?(V=me(V),Fr(V,this.U)):V=this.U),this.u!==null||this.R||(N.J=V,V=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Pm(this,N,h),f=Jt(this.J),he(f,"RID",a),he(f,"CVER",22),this.G&&he(f,"X-HTTP-Session-Id",this.G),qs(this,f),V&&(this.R?h="headers="+bs(Em(V))+"&"+h:this.u&&Rc(f,this.u,V)),Tc(this.h,N),this.Ra&&he(f,"TYPE","init"),this.S?(he(f,"$req",h),he(f,"SID","null"),N.U=!0,_c(N,f,null)):_c(N,f,h),this.I=2}}else this.I==3&&(a?km(this,a):this.i.length==0||um(this.h)||km(this))};function km(a,h){var f;h?f=h.l:f=a.V++;const g=Jt(a.J);he(g,"SID",a.M),he(g,"RID",f),he(g,"AID",a.K),qs(a,g),a.u&&a.o&&Rc(g,a.u,a.o),f=new Bn(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Pm(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Tc(a.h,f),_c(f,g,h)}function qs(a,h){a.H&&Q(a.H,function(f,g){he(h,g,f)}),a.l&&Q({},function(f,g){he(h,g,f)})}function Pm(a,h,f){f=Math.min(a.i.length,f);const g=a.l?c(a.l.Ka,a.l,a):null;e:{var N=a.i;let Z=-1;for(;;){const Oe=["count="+f];Z==-1?f>0?(Z=N[0].g,Oe.push("ofs="+Z)):Z=0:Oe.push("ofs="+Z);let le=!0;for(let Me=0;Me<f;Me++){var V=N[Me].g;const Zt=N[Me].map;if(V-=Z,V<0)Z=Math.max(0,N[Me].g-100),le=!1;else try{V="req"+V+"_"||"";try{var z=Zt instanceof Map?Zt:Object.entries(Zt);for(const[qr,Wn]of z){let Gn=Wn;l(Wn)&&(Gn=fc(Wn)),Oe.push(V+qr+"="+encodeURIComponent(Gn))}}catch(qr){throw Oe.push(V+"type="+encodeURIComponent("_badmap")),qr}}catch{g&&g(Zt)}}if(le){z=Oe.join("&");break e}}z=void 0}return a=a.i.splice(0,f),h.G=a,z}function xm(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;U||y(),j||(U(),j=!0),E.add(h,a),a.A=0}}function Cc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Os(c(a.Da,a),Om(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Nm(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Os(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,st(10),Ca(this),Nm(this))};function kc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Nm(a){a.g=new Bn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Jt(a.na);he(h,"RID","rpc"),he(h,"SID",a.M),he(h,"AID",a.K),he(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&he(h,"TO",a.ia),he(h,"TYPE","xmlhttp"),qs(a,h),a.u&&a.o&&Rc(h,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=Sa(Jt(h)),f.u=null,f.R=!0,sm(f,a)}t.Va=function(){this.C!=null&&(this.C=null,Ca(this),Cc(this),st(19))};function Pa(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Dm(a,h){var f=null;if(a.g==h){Pa(a),kc(a),a.g=null;var g=2}else if(Ec(a.h,h))f=h.G,hm(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var N=a.D;g=Ea(),it(g,new em(g,f)),ka(a)}else xm(a);else if(N=h.m,N==3||N==0&&h.X>0||!(g==1&&EI(a,h)||g==2&&Cc(a)))switch(f&&f.length>0&&(h=a.h,h.i=h.i.concat(f)),N){case 1:Hr(a,5);break;case 4:Hr(a,10);break;case 3:Hr(a,6);break;default:Hr(a,2)}}}function Om(a,h){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*h}function Hr(a,h){if(a.j.info("Error code "+h),h==2){var f=c(a.bb,a),g=a.Ua;const N=!g;g=new $n(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Ms(g,"https"),Sa(g),N?mI(g.toString(),f):gI(g.toString(),f)}else st(2);a.I=0,a.l&&a.l.pa(h),Vm(a),Cm(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function Vm(a){if(a.I=0,a.ja=[],a.l){const h=dm(a.h);(h.length!=0||a.i.length!=0)&&(A(a.ja,h),A(a.ja,a.i),a.h.i.length=0,_(a.i),a.i.length=0),a.l.oa()}}function bm(a,h,f){var g=f instanceof $n?Jt(f):new $n(f);if(g.g!="")h&&(g.g=h+"."+g.g),Us(g,g.u);else{var N=o.location;g=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;const V=new $n(null);g&&Ms(V,g),h&&(V.g=h),N&&Us(V,N),f&&(V.h=f),g=V}return f=a.G,h=a.wa,f&&h&&he(g,f,h),he(g,"VER",a.ka),qs(a,g),g}function Lm(a,h,f){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Ie(new Sc({ab:f})):new Ie(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Mm(){}t=Mm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function xa(){}xa.prototype.g=function(a,h){return new _t(a,h)};function _t(a,h){Qe.call(this),this.g=new Am(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!S(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!S(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Ii(this)}p(_t,Qe),_t.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},_t.prototype.close=function(){Ac(this.g)},_t.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=fc(a),a=f);h.i.push(new aI(h.Ya++,a)),h.I==3&&ka(h)},_t.prototype.N=function(){this.g.l=null,delete this.j,Ac(this.g),delete this.g,_t.Z.N.call(this)};function Um(a){pc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(Um,pc);function Fm(){mc.call(this),this.status=1}p(Fm,mc);function Ii(a){this.g=a}p(Ii,Mm),Ii.prototype.ra=function(){it(this.g,"a")},Ii.prototype.qa=function(a){it(this.g,new Um(a))},Ii.prototype.pa=function(a){it(this.g,new Fm)},Ii.prototype.oa=function(){it(this.g,"b")},xa.prototype.createWebChannel=xa.prototype.g,_t.prototype.send=_t.prototype.o,_t.prototype.open=_t.prototype.m,_t.prototype.close=_t.prototype.close,f0=function(){return new xa},d0=function(){return Ea()},h0=zr,Ed={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ta.NO_ERROR=0,Ta.TIMEOUT=8,Ta.HTTP_ERROR=6,El=Ta,tm.COMPLETE="complete",c0=tm,Yp.EventType=Ns,Ns.OPEN="a",Ns.CLOSE="b",Ns.ERROR="c",Ns.MESSAGE="d",Qe.prototype.listen=Qe.prototype.J,ao=Yp,Ie.prototype.listenOnce=Ie.prototype.K,Ie.prototype.getLastError=Ie.prototype.Ha,Ie.prototype.getLastErrorCode=Ie.prototype.ya,Ie.prototype.getStatus=Ie.prototype.ca,Ie.prototype.getResponseJson=Ie.prototype.La,Ie.prototype.getResponseText=Ie.prototype.la,Ie.prototype.send=Ie.prototype.ea,Ie.prototype.setWithCredentials=Ie.prototype.Fa,u0=Ie}).apply(typeof Xa<"u"?Xa:typeof self<"u"?self:typeof window<"u"?window:{});const Oy="@firebase/firestore",Vy="4.9.3";/**
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
 */let Ze=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
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
 */let Ss="12.7.0";/**
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
 */const fi=new Hf("@firebase/firestore");function Ai(){return fi.logLevel}function H(t,...e){if(fi.logLevel<=te.DEBUG){const n=e.map(tp);fi.debug(`Firestore (${Ss}): ${t}`,...n)}}function Mn(t,...e){if(fi.logLevel<=te.ERROR){const n=e.map(tp);fi.error(`Firestore (${Ss}): ${t}`,...n)}}function as(t,...e){if(fi.logLevel<=te.WARN){const n=e.map(tp);fi.warn(`Firestore (${Ss}): ${t}`,...n)}}function tp(t){if(typeof t=="string")return t;try{/**
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
 */function K(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,p0(t,r,n)}function p0(t,e,n){let r=`FIRESTORE (${Ss}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Mn(r),new Error(r)}function oe(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||p0(e,i,r)}function X(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends _n{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class vr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class m0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class D2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ze.UNAUTHENTICATED))}shutdown(){}}class O2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class V2{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){oe(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new vr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new vr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new vr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string",31837,{l:r}),new m0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string",2055,{h:e}),new Ze(e)}}class b2{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class L2{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new b2(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class by{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class M2{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,wt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){oe(this.o===void 0,3512);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new by(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new by(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function U2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class np{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=U2(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function Td(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return dh(i)===dh(s)?ne(i,s):dh(i)?1:-1}return ne(t.length,e.length)}const F2=55296,j2=57343;function dh(t){const e=t.charCodeAt(0);return e>=F2&&e<=j2}function ls(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const Ly="__name__";class nn{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&K(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return nn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof nn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=nn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ne(e.length,n.length)}static compareSegments(e,n){const r=nn.isNumericId(e),i=nn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?nn.extractNumericId(e).compare(nn.extractNumericId(n)):Td(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return _r.fromString(e.substring(4,e.length-2))}}class ue extends nn{construct(e,n,r){return new ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ue(n)}static emptyPath(){return new ue([])}}const z2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends nn{construct(e,n,r){return new qe(e,n,r)}static isValidIdentifier(e){return z2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ly}static keyField(){return new qe([Ly])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new B(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new B(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qe(n)}static emptyPath(){return new qe([])}}/**
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
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(ue.fromString(e))}static fromName(e){return new W(ue.fromString(e).popFirst(5))}static empty(){return new W(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new ue(e.slice()))}}/**
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
 */function g0(t,e,n){if(!n)throw new B(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function B2(t,e,n,r){if(e===!0&&r===!0)throw new B(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function My(t){if(!W.isDocumentKey(t))throw new B(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Uy(t){if(W.isDocumentKey(t))throw new B(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function y0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Hu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K(12329,{type:typeof t})}function cn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Hu(t);throw new B(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function $2(t,e){if(e<=0)throw new B(L.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */function De(t,e){const n={typeString:t};return e&&(n.value=e),n}function fa(t,e){if(!y0(t))throw new B(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new B(L.INVALID_ARGUMENT,n);return!0}/**
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
 */const Fy=-62135596800,jy=1e6;class fe{static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*jy);return new fe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Fy)throw new B(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/jy}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:fe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(fa(e,fe._jsonSchema))return new fe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Fy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}fe._jsonSchemaVersion="firestore/timestamp/1.0",fe._jsonSchema={type:De("string",fe._jsonSchemaVersion),seconds:De("number"),nanoseconds:De("number")};/**
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
 */const Wo=-1;function H2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new fe(n+1,0):new fe(n,r));return new Sr(i,W.empty(),e)}function q2(t){return new Sr(t.readTime,t.key,Wo)}class Sr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Sr(Y.min(),W.empty(),Wo)}static max(){return new Sr(Y.max(),W.empty(),Wo)}}function W2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
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
 */const G2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class K2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Rs(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==G2)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Q2(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function As(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class qu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}qu.ce=-1;/**
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
 */const rp=-1;function Wu(t){return t==null}function au(t){return t===0&&1/t==-1/0}function Y2(t){return typeof t=="number"&&Number.isInteger(t)&&!au(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const _0="";function X2(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=zy(e)),e=J2(t.get(n),e);return zy(e)}function J2(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case _0:n+="";break;default:n+=s}}return n}function zy(t){return t+_0+""}/**
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
 */function By(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Lr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function v0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Te{constructor(e,n){this.comparator=e,this.root=n||He.EMPTY}insert(e,n){return new Te(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new Te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ja(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ja(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ja(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ja(this.root,e,this.comparator,!0)}}class Ja{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class He{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??He.RED,this.left=i??He.EMPTY,this.right=s??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new He(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return He.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw K(27949);return e+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new He(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Le{constructor(e){this.comparator=e,this.data=new Te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new $y(this.data.getIterator())}getIteratorFrom(e){return new $y(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Le)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Le(this.comparator);return n.data=e,n}}class $y{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Tt{constructor(e){this.fields=e,e.sort(qe.comparator)}static empty(){return new Tt([])}unionWith(e){let n=new Le(qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Tt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ls(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class w0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new w0("Invalid base64 string: "+s):s}}(e);return new Ke(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const Z2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rr(t){if(oe(!!t,39018),typeof t=="string"){let e=0;const n=Z2.exec(t);if(oe(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ar(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
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
 */const E0="server_timestamp",T0="__type__",I0="__previous_value__",S0="__local_write_time__";function Gu(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[T0])==null?void 0:r.stringValue)===E0}function Ku(t){const e=t.mapValue.fields[I0];return Gu(e)?Ku(e):e}function Go(t){const e=Rr(t.mapValue.fields[S0].timestampValue);return new fe(e.seconds,e.nanos)}/**
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
 */class ex{constructor(e,n,r,i,s,o,l,u,c,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d}}const lu="(default)";class Ko{constructor(e,n){this.projectId=e,this.database=n||lu}static empty(){return new Ko("","")}get isDefaultDatabase(){return this.database===lu}isEqual(e){return e instanceof Ko&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const R0="__type__",tx="__max__",Za={mapValue:{}},A0="__vector__",uu="value";function Cr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Gu(t)?4:rx(t)?9007199254740991:nx(t)?10:11:K(28295,{value:t})}function gn(t,e){if(t===e)return!0;const n=Cr(t);if(n!==Cr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Go(t).isEqual(Go(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Rr(i.timestampValue),l=Rr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ar(i.bytesValue).isEqual(Ar(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ae(i.geoPointValue.latitude)===Ae(s.geoPointValue.latitude)&&Ae(i.geoPointValue.longitude)===Ae(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ae(i.integerValue)===Ae(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ae(i.doubleValue),l=Ae(s.doubleValue);return o===l?au(o)===au(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ls(t.arrayValue.values||[],e.arrayValue.values||[],gn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(By(o)!==By(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!gn(o[u],l[u])))return!1;return!0}(t,e);default:return K(52216,{left:t})}}function Qo(t,e){return(t.values||[]).find(n=>gn(n,e))!==void 0}function us(t,e){if(t===e)return 0;const n=Cr(t),r=Cr(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ae(s.integerValue||s.doubleValue),u=Ae(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Hy(t.timestampValue,e.timestampValue);case 4:return Hy(Go(t),Go(e));case 5:return Td(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Ar(s),u=Ar(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=ne(l[c],u[c]);if(d!==0)return d}return ne(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ne(Ae(s.latitude),Ae(o.latitude));return l!==0?l:ne(Ae(s.longitude),Ae(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return qy(t.arrayValue,e.arrayValue);case 10:return function(s,o){var m,_,A,k;const l=s.fields||{},u=o.fields||{},c=(m=l[uu])==null?void 0:m.arrayValue,d=(_=u[uu])==null?void 0:_.arrayValue,p=ne(((A=c==null?void 0:c.values)==null?void 0:A.length)||0,((k=d==null?void 0:d.values)==null?void 0:k.length)||0);return p!==0?p:qy(c,d)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Za.mapValue&&o===Za.mapValue)return 0;if(s===Za.mapValue)return 1;if(o===Za.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=Td(u[p],d[p]);if(m!==0)return m;const _=us(l[u[p]],c[d[p]]);if(_!==0)return _}return ne(u.length,d.length)}(t.mapValue,e.mapValue);default:throw K(23264,{he:n})}}function Hy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=Rr(t),r=Rr(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function qy(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=us(n[i],r[i]);if(s)return s}return ne(n.length,r.length)}function cs(t){return Id(t)}function Id(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Rr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ar(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Id(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Id(n.fields[o])}`;return i+"}"}(t.mapValue):K(61005,{value:t})}function Tl(t){switch(Cr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ku(t);return e?16+Tl(e):16;case 5:return 2*t.stringValue.length;case 6:return Ar(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Tl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Lr(r.fields,(s,o)=>{i+=s.length+Tl(o)}),i}(t.mapValue);default:throw K(13486,{value:t})}}function cu(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Sd(t){return!!t&&"integerValue"in t}function ip(t){return!!t&&"arrayValue"in t}function Wy(t){return!!t&&"nullValue"in t}function Gy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Il(t){return!!t&&"mapValue"in t}function nx(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[R0])==null?void 0:r.stringValue)===A0}function Io(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Lr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Io(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Io(t.arrayValue.values[n]);return e}return{...t}}function rx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===tx}/**
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
 */class ft{constructor(e){this.value=e}static empty(){return new ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Il(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Io(n)}setAll(e){let n=qe.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Io(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Il(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return gn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Il(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Lr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ft(Io(this.value))}}function C0(t){const e=[];return Lr(t.fields,(n,r)=>{const i=new qe([n]);if(Il(r)){const s=C0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Tt(e)}/**
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
 */class tt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new tt(e,0,Y.min(),Y.min(),Y.min(),ft.empty(),0)}static newFoundDocument(e,n,r,i){return new tt(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new tt(e,2,n,Y.min(),Y.min(),ft.empty(),0)}static newUnknownDocument(e,n){return new tt(e,3,n,Y.min(),Y.min(),ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class hs{constructor(e,n){this.position=e,this.inclusive=n}}function Ky(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=us(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Qy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!gn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Yo{constructor(e,n="asc"){this.field=e,this.dir=n}}function ix(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class k0{}class Ne extends k0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ox(e,n,r):n==="array-contains"?new ux(e,r):n==="in"?new cx(e,r):n==="not-in"?new hx(e,r):n==="array-contains-any"?new dx(e,r):new Ne(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new ax(e,r):new lx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(us(n,this.value)):n!==null&&Cr(this.value)===Cr(n)&&this.matchesComparison(us(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kt extends k0{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Kt(e,n)}matches(e){return P0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function P0(t){return t.op==="and"}function x0(t){return sx(t)&&P0(t)}function sx(t){for(const e of t.filters)if(e instanceof Kt)return!1;return!0}function Rd(t){if(t instanceof Ne)return t.field.canonicalString()+t.op.toString()+cs(t.value);if(x0(t))return t.filters.map(e=>Rd(e)).join(",");{const e=t.filters.map(n=>Rd(n)).join(",");return`${t.op}(${e})`}}function N0(t,e){return t instanceof Ne?function(r,i){return i instanceof Ne&&r.op===i.op&&r.field.isEqual(i.field)&&gn(r.value,i.value)}(t,e):t instanceof Kt?function(r,i){return i instanceof Kt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&N0(o,i.filters[l]),!0):!1}(t,e):void K(19439)}function D0(t){return t instanceof Ne?function(n){return`${n.field.canonicalString()} ${n.op} ${cs(n.value)}`}(t):t instanceof Kt?function(n){return n.op.toString()+" {"+n.getFilters().map(D0).join(" ,")+"}"}(t):"Filter"}class ox extends Ne{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class ax extends Ne{constructor(e,n){super(e,"in",n),this.keys=O0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class lx extends Ne{constructor(e,n){super(e,"not-in",n),this.keys=O0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function O0(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class ux extends Ne{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ip(n)&&Qo(n.arrayValue,this.value)}}class cx extends Ne{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Qo(this.value.arrayValue,n)}}class hx extends Ne{constructor(e,n){super(e,"not-in",n)}matches(e){if(Qo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Qo(this.value.arrayValue,n)}}class dx extends Ne{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ip(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Qo(this.value.arrayValue,r))}}/**
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
 */class fx{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function Yy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new fx(t,e,n,r,i,s,o)}function sp(t){const e=X(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Rd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Wu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>cs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>cs(r)).join(",")),e.Te=n}return e.Te}function op(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ix(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!N0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Qy(t.startAt,e.startAt)&&Qy(t.endAt,e.endAt)}function Ad(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Mr{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function px(t,e,n,r,i,s,o,l){return new Mr(t,e,n,r,i,s,o,l)}function ap(t){return new Mr(t)}function Xy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function lp(t){return t.collectionGroup!==null}function Ji(t){const e=X(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Le(qe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new Yo(s,r))}),n.has(qe.keyField().canonicalString())||e.Ie.push(new Yo(qe.keyField(),r))}return e.Ie}function hn(t){const e=X(t);return e.Ee||(e.Ee=mx(e,Ji(t))),e.Ee}function mx(t,e){if(t.limitType==="F")return Yy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Yo(i.field,s)});const n=t.endAt?new hs(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new hs(t.startAt.position,t.startAt.inclusive):null;return Yy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Cd(t,e){const n=t.filters.concat([e]);return new Mr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function hu(t,e,n){return new Mr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Qu(t,e){return op(hn(t),hn(e))&&t.limitType===e.limitType}function V0(t){return`${sp(hn(t))}|lt:${t.limitType}`}function Ci(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>D0(i)).join(", ")}]`),Wu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>cs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>cs(i)).join(",")),`Target(${r})`}(hn(t))}; limitType=${t.limitType})`}function Yu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):W.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ji(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Ky(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Ji(r),i)||r.endAt&&!function(o,l,u){const c=Ky(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Ji(r),i))}(t,e)}function gx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function b0(t){return(e,n)=>{let r=!1;for(const i of Ji(t)){const s=yx(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function yx(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?us(u,c):K(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K(19790,{direction:t.dir})}}/**
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
 */class vi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Lr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return v0(this.inner)}size(){return this.innerSize}}/**
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
 */const _x=new Te(W.comparator);function Un(){return _x}const L0=new Te(W.comparator);function lo(...t){let e=L0;for(const n of t)e=e.insert(n.key,n);return e}function M0(t){let e=L0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Jr(){return So()}function U0(){return So()}function So(){return new vi(t=>t.toString(),(t,e)=>t.isEqual(e))}const vx=new Te(W.comparator),wx=new Le(W.comparator);function re(...t){let e=wx;for(const n of t)e=e.add(n);return e}const Ex=new Le(ne);function Tx(){return Ex}/**
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
 */function up(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:au(e)?"-0":e}}function F0(t){return{integerValue:""+t}}function Ix(t,e){return Y2(e)?F0(e):up(t,e)}/**
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
 */class Xu{constructor(){this._=void 0}}function Sx(t,e,n){return t instanceof du?function(i,s){const o={fields:{[T0]:{stringValue:E0},[S0]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Gu(s)&&(s=Ku(s)),s&&(o.fields[I0]=s),{mapValue:o}}(n,e):t instanceof Xo?z0(t,e):t instanceof Jo?B0(t,e):function(i,s){const o=j0(i,s),l=Jy(o)+Jy(i.Ae);return Sd(o)&&Sd(i.Ae)?F0(l):up(i.serializer,l)}(t,e)}function Rx(t,e,n){return t instanceof Xo?z0(t,e):t instanceof Jo?B0(t,e):n}function j0(t,e){return t instanceof fu?function(r){return Sd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class du extends Xu{}class Xo extends Xu{constructor(e){super(),this.elements=e}}function z0(t,e){const n=$0(e);for(const r of t.elements)n.some(i=>gn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Jo extends Xu{constructor(e){super(),this.elements=e}}function B0(t,e){let n=$0(e);for(const r of t.elements)n=n.filter(i=>!gn(i,r));return{arrayValue:{values:n}}}class fu extends Xu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Jy(t){return Ae(t.integerValue||t.doubleValue)}function $0(t){return ip(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Ax(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Xo&&i instanceof Xo||r instanceof Jo&&i instanceof Jo?ls(r.elements,i.elements,gn):r instanceof fu&&i instanceof fu?gn(r.Ae,i.Ae):r instanceof du&&i instanceof du}(t.transform,e.transform)}class Cx{constructor(e,n){this.version=e,this.transformResults=n}}class dn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new dn}static exists(e){return new dn(void 0,e)}static updateTime(e){return new dn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Sl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ju{}function H0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new W0(t.key,dn.none()):new pa(t.key,t.data,dn.none());{const n=t.data,r=ft.empty();let i=new Le(qe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ur(t.key,r,new Tt(i.toArray()),dn.none())}}function kx(t,e,n){t instanceof pa?function(i,s,o){const l=i.value.clone(),u=e_(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ur?function(i,s,o){if(!Sl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=e_(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(q0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ro(t,e,n,r){return t instanceof pa?function(s,o,l,u){if(!Sl(s.precondition,o))return l;const c=s.value.clone(),d=t_(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ur?function(s,o,l,u){if(!Sl(s.precondition,o))return l;const c=t_(s.fieldTransforms,u,o),d=o.data;return d.setAll(q0(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Sl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Px(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=j0(r.transform,i||null);s!=null&&(n===null&&(n=ft.empty()),n.set(r.field,s))}return n||null}function Zy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ls(r,i,(s,o)=>Ax(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class pa extends Ju{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ur extends Ju{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function q0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function e_(t,e,n){const r=new Map;oe(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,Rx(o,l,n[i]))}return r}function t_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Sx(s,o,e))}return r}class W0 extends Ju{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xx extends Ju{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Nx{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&kx(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ro(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ro(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=U0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=H0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&ls(this.mutations,e.mutations,(n,r)=>Zy(n,r))&&ls(this.baseMutations,e.baseMutations,(n,r)=>Zy(n,r))}}class cp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){oe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return vx}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new cp(e,n,r,i)}}/**
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
 */class Dx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Ox{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Pe,ie;function Vx(t){switch(t){case L.OK:return K(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return K(15467,{code:t})}}function G0(t){if(t===void 0)return Mn("GRPC error has no .code"),L.UNKNOWN;switch(t){case Pe.OK:return L.OK;case Pe.CANCELLED:return L.CANCELLED;case Pe.UNKNOWN:return L.UNKNOWN;case Pe.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Pe.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Pe.INTERNAL:return L.INTERNAL;case Pe.UNAVAILABLE:return L.UNAVAILABLE;case Pe.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Pe.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Pe.NOT_FOUND:return L.NOT_FOUND;case Pe.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Pe.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Pe.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Pe.ABORTED:return L.ABORTED;case Pe.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Pe.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Pe.DATA_LOSS:return L.DATA_LOSS;default:return K(39323,{code:t})}}(ie=Pe||(Pe={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function bx(){return new TextEncoder}/**
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
 */const Lx=new _r([4294967295,4294967295],0);function n_(t){const e=bx().encode(t),n=new l0;return n.update(e),new Uint8Array(n.digest())}function r_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new _r([n,r],0),new _r([i,s],0)]}class hp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new uo(`Invalid padding: ${n}`);if(r<0)throw new uo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new uo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new uo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=_r.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(_r.fromNumber(r)));return i.compare(Lx)===1&&(i=new _r([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=n_(e),[r,i]=r_(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new hp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=n_(e),[r,i]=r_(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class uo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Zu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ma.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Zu(Y.min(),i,new Te(ne),Un(),re())}}class ma{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ma(r,n,re(),re(),re())}}/**
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
 */class Rl{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class K0{constructor(e,n){this.targetId=e,this.Ce=n}}class Q0{constructor(e,n,r=Ke.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class i_{constructor(){this.ve=0,this.Fe=s_(),this.Me=Ke.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=re(),n=re(),r=re();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K(38017,{changeType:s})}}),new ma(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=s_()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,oe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Mx{constructor(e){this.Ge=e,this.ze=new Map,this.je=Un(),this.Je=el(),this.He=el(),this.Ye=new Te(ne)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:K(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Ad(s))if(r===0){const o=new W(s.path);this.et(n,o,tt.newNoDocument(o,Y.min()))}else oe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Ar(r).toUint8Array()}catch(u){if(u instanceof w0)return as("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new hp(o,i,s)}catch(u){return as(u instanceof uo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&Ad(l.target)){const u=new W(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,tt.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=re();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Zu(e,n,this.Ye,this.je,r);return this.je=Un(),this.Je=el(),this.He=el(),this.Ye=new Te(ne),i}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new i_,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Le(ne),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Le(ne),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new i_),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function el(){return new Te(W.comparator)}function s_(){return new Te(W.comparator)}const Ux={asc:"ASCENDING",desc:"DESCENDING"},Fx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},jx={and:"AND",or:"OR"};class zx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function kd(t,e){return t.useProto3Json||Wu(e)?e:{value:e}}function pu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Y0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Bx(t,e){return pu(t,e.toTimestamp())}function fn(t){return oe(!!t,49232),Y.fromTimestamp(function(n){const r=Rr(n);return new fe(r.seconds,r.nanos)}(t))}function dp(t,e){return Pd(t,e).canonicalString()}function Pd(t,e){const n=function(i){return new ue(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function X0(t){const e=ue.fromString(t);return oe(nT(e),10190,{key:e.toString()}),e}function xd(t,e){return dp(t.databaseId,e.path)}function fh(t,e){const n=X0(e);if(n.get(1)!==t.databaseId.projectId)throw new B(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(Z0(n))}function J0(t,e){return dp(t.databaseId,e)}function $x(t){const e=X0(t);return e.length===4?ue.emptyPath():Z0(e)}function Nd(t){return new ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Z0(t){return oe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function o_(t,e,n){return{name:xd(t,e),fields:n.value.mapValue.fields}}function Hx(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(oe(d===void 0||typeof d=="string",58123),Ke.fromBase64String(d||"")):(oe(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Ke.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?L.UNKNOWN:G0(c.code);return new B(d,c.message||"")}(o);n=new Q0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=fh(t,r.document.name),s=fn(r.document.updateTime),o=r.document.createTime?fn(r.document.createTime):Y.min(),l=new ft({mapValue:{fields:r.document.fields}}),u=tt.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Rl(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=fh(t,r.document),s=r.readTime?fn(r.readTime):Y.min(),o=tt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Rl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=fh(t,r.document),s=r.removedTargetIds||[];n=new Rl([],s,i,null)}else{if(!("filter"in e))return K(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Ox(i,s),l=r.targetId;n=new K0(l,o)}}return n}function qx(t,e){let n;if(e instanceof pa)n={update:o_(t,e.key,e.value)};else if(e instanceof W0)n={delete:xd(t,e.key)};else if(e instanceof Ur)n={update:o_(t,e.key,e.data),updateMask:eN(e.fieldMask)};else{if(!(e instanceof xx))return K(16599,{Vt:e.type});n={verify:xd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof du)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Xo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Jo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof fu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw K(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Bx(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K(27497)}(t,e.precondition)),n}function Wx(t,e){return t&&t.length>0?(oe(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?fn(i.updateTime):fn(s);return o.isEqual(Y.min())&&(o=fn(s)),new Cx(o,i.transformResults||[])}(n,e))):[]}function Gx(t,e){return{documents:[J0(t,e.path)]}}function Kx(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=J0(t,i);const s=function(c){if(c.length!==0)return tT(Kt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:ki(m.field),direction:Xx(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=kd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function Qx(t){let e=$x(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){oe(r===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=eT(p);return m instanceof Kt&&x0(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(A){return new Yo(Pi(A.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Wu(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,_=p.values||[];return new hs(_,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,_=p.values||[];return new hs(_,m)}(n.endAt)),px(e,i,o,s,l,"F",u,c)}function Yx(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function eT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Pi(n.unaryFilter.field);return Ne.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Pi(n.unaryFilter.field);return Ne.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Pi(n.unaryFilter.field);return Ne.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Pi(n.unaryFilter.field);return Ne.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ne.create(Pi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Kt.create(n.compositeFilter.filters.map(r=>eT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K(1026)}}(n.compositeFilter.op))}(t):K(30097,{filter:t})}function Xx(t){return Ux[t]}function Jx(t){return Fx[t]}function Zx(t){return jx[t]}function ki(t){return{fieldPath:t.canonicalString()}}function Pi(t){return qe.fromServerFormat(t.fieldPath)}function tT(t){return t instanceof Ne?function(n){if(n.op==="=="){if(Gy(n.value))return{unaryFilter:{field:ki(n.field),op:"IS_NAN"}};if(Wy(n.value))return{unaryFilter:{field:ki(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Gy(n.value))return{unaryFilter:{field:ki(n.field),op:"IS_NOT_NAN"}};if(Wy(n.value))return{unaryFilter:{field:ki(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ki(n.field),op:Jx(n.op),value:n.value}}}(t):t instanceof Kt?function(n){const r=n.getFilters().map(i=>tT(i));return r.length===1?r[0]:{compositeFilter:{op:Zx(n.op),filters:r}}}(t):K(54877,{filter:t})}function eN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function nT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ar{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=Ke.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new ar(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class tN{constructor(e){this.yt=e}}function nN(t){const e=Qx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?hu(e,e.limit,"L"):e}/**
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
 */class rN{constructor(){this.Cn=new iN}addToCollectionParentIndex(e,n){return this.Cn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Sr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Sr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class iN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Le(ue.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Le(ue.comparator)).toArray()}}/**
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
 */const a_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},rT=41943040;class ht{static withCacheSize(e){return new ht(e,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */ht.DEFAULT_COLLECTION_PERCENTILE=10,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ht.DEFAULT=new ht(rT,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ht.DISABLED=new ht(-1,0,0);/**
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
 */class ds{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new ds(0)}static cr(){return new ds(-1)}}/**
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
 */const l_="LruGarbageCollector",sN=1048576;function u_([t,e],[n,r]){const i=ne(t,n);return i===0?ne(e,r):i}class oN{constructor(e){this.Ir=e,this.buffer=new Le(u_),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();u_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class aN{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){H(l_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){As(n)?H(l_,"Ignoring IndexedDB error during garbage collection: ",n):await Rs(n)}await this.Vr(3e5)})}}class lN{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(qu.ce);const r=new oN(n);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(a_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),a_):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,i,s,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),Ai()<=te.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function uN(t,e){return new lN(t,e)}/**
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
 */class cN{constructor(){this.changes=new vi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class hN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class dN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ro(r.mutation,i,Tt.empty(),fe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=Jr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=lo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Jr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Un();const o=So(),l=function(){return So()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Ur)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Ro(d.mutation,c,d.mutation.getFieldMask(),fe.now())):o.set(c.key,Tt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>l.set(c,new hN(d,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=So();let i=new Te((o,l)=>o-l),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Tt.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||re()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=U0();d.forEach(m=>{if(!s.has(m)){const _=H0(n.get(m),r.get(m));_!==null&&p.set(m,_),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):lp(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(Jr());let l=Wo,u=s;return o.next(c=>M.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,re())).next(d=>({batchId:l,changes:M0(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let i=lo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=lo();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const c=function(p,m){return new Mr(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,tt.newInvalidDocument(d)))});let l=lo();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Ro(d.mutation,c,Tt.empty(),fe.now()),Yu(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class fN{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return M.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:fn(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(i){return{name:i.name,query:nN(i.bundledQuery),readTime:fn(i.readTime)}}(n)),M.resolve()}}/**
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
 */class pN{constructor(){this.overlays=new Te(W.comparator),this.qr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Jr();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=Jr(),s=n.length+1,o=new W(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Te((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Jr(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=Jr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return M.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Dx(n,r));let s=this.qr.get(n);s===void 0&&(s=re(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
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
 */class mN{constructor(){this.sessionToken=Ke.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class fp{constructor(){this.Qr=new Le(Ue.$r),this.Ur=new Le(Ue.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Ue(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new Ue(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new W(new ue([])),r=new Ue(n,e),i=new Ue(n,e+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new W(new ue([])),r=new Ue(n,e),i=new Ue(n,e+1);let s=re();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ue(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ue{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return W.comparator(e.key,n.key)||ne(e.Yr,n.Yr)}static Kr(e,n){return ne(e.Yr,n.Yr)||W.comparator(e.key,n.key)}}/**
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
 */class gN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Le(Ue.$r)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Nx(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new Ue(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?rp:this.tr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ue(n,0),i=new Ue(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const l=this.Xr(o.Yr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Le(ne);return n.forEach(i=>{const s=new Ue(i,0),o=new Ue(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],l=>{r=r.add(l.Yr)})}),M.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const o=new Ue(new W(s),0);let l=new Le(ne);return this.Zr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Yr)),!0)},o),M.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){oe(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return M.forEach(n.mutations,i=>{const s=new Ue(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new Ue(n,0),i=this.Zr.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class yN{constructor(e){this.ri=e,this.docs=function(){return new Te(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let r=Un();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():tt.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Un();const o=n.path,l=new W(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||W2(q2(d),r)<=0||(i.has(d.key)||Yu(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K(9500)}ii(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new _N(this)}getSize(e){return M.resolve(this.size)}}class _N extends cN{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class vN{constructor(e){this.persistence=e,this.si=new vi(n=>sp(n),op),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.oi=0,this._i=new fp,this.targetCount=0,this.ai=ds.ur()}forEachTarget(e,n){return this.si.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),M.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new ds(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Pr(n),M.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this._i.containsKey(n))}}/**
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
 */class iT{constructor(e,n){this.ui={},this.overlays={},this.ci=new qu(0),this.li=!1,this.li=!0,this.hi=new mN,this.referenceDelegate=e(this),this.Pi=new vN(this),this.indexManager=new rN,this.remoteDocumentCache=function(i){return new yN(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new tN(n),this.Ii=new fN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new pN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new gN(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new wN(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return M.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class wN extends K2{constructor(e){super(),this.currentSequenceNumber=e}}class pp{constructor(e){this.persistence=e,this.Ri=new fp,this.Vi=null}static mi(e){return new pp(e)}get fi(){if(this.Vi)return this.Vi;throw K(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.fi,r=>{const i=W.fromPath(r);return this.gi(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class mu{constructor(e,n){this.persistence=e,this.pi=new vi(r=>X2(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=uN(this,n)}static mi(e,n){return new mu(e,n)}Ei(){}di(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return M.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?M.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,s.removeEntry(o,Y.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),M.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Tl(e.data.value)),n}br(e,n,r){return M.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return M.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class mp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=i}static As(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new mp(e,n.fromCache,r,i)}}/**
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
 */class EN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class TN{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return HA()?8:Q2(rt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ys(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new EN;return this.Ss(e,n,o).next(l=>{if(s.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>s.result)}bs(e,n,r,i){return r.documentReadCount<this.fs?(Ai()<=te.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Ci(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),M.resolve()):(Ai()<=te.DEBUG&&H("QueryEngine","Query:",Ci(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(Ai()<=te.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Ci(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,hn(n))):M.resolve())}ys(e,n){if(Xy(n))return M.resolve(null);let r=hn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=hu(n,null,"F"),r=hn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ds(n,l);return this.Cs(n,c,o,u.readTime)?this.ys(e,hu(n,null,"F")):this.vs(e,c,n,u)}))})))}ws(e,n,r,i){return Xy(n)||i.isEqual(Y.min())?M.resolve(null):this.ps.getDocuments(e,r).next(s=>{const o=this.Ds(n,s);return this.Cs(n,o,r,i)?M.resolve(null):(Ai()<=te.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ci(n)),this.vs(e,o,n,H2(i,Wo)).next(l=>l))})}Ds(e,n){let r=new Le(b0(e));return n.forEach((i,s)=>{Yu(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return Ai()<=te.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Ci(n)),this.ps.getDocumentsMatchingQuery(e,n,Sr.min(),r)}vs(e,n,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const gp="LocalStore",IN=3e8;class SN{constructor(e,n,r,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new Te(ne),this.xs=new vi(s=>sp(s),op),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dN(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function RN(t,e,n,r){return new SN(t,e,n,r)}async function sT(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=re();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function AN(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let _=M.resolve();return m.forEach(A=>{_=_.next(()=>d.getEntry(u,A)).next(k=>{const P=c.docVersions.get(A);oe(P!==null,48541),k.version.compareTo(P)<0&&(p.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),d.addEntry(k)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=re();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function oT(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function CN(t,e){const n=X(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.Pi.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(s,d.addedDocuments,p)));let _=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(Ke.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),i=i.insert(p,_),function(k,P,w){return k.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=IN?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(m,_,d)&&l.push(n.Pi.updateTargetData(s,_))});let u=Un(),c=re();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(kN(s,o,e.documentUpdates).next(d=>{u=d.ks,c=d.qs})),!r.isEqual(Y.min())){const d=n.Pi.getLastRemoteSnapshotVersion(s).next(p=>n.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Ms=i,s))}function kN(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Un();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H(gp,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{ks:o,qs:i}})}function PN(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=rp),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function xN(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Pi.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.Pi.allocateTargetId(r).next(o=>(i=new ar(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function Dd(t,e,n){const r=X(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!As(o))throw o;H(gp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function c_(t,e,n){const r=X(t);let i=Y.min(),s=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=X(u),m=p.xs.get(d);return m!==void 0?M.resolve(p.Ms.get(m)):p.Pi.getTargetData(c,d)}(r,o,hn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:re())).next(l=>(NN(r,gx(e),l),{documents:l,Qs:s})))}function NN(t,e,n){let r=t.Os.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Os.set(e,r)}class h_{constructor(){this.activeTargetIds=Tx()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class DN{constructor(){this.Mo=new h_,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new h_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ON{Oo(e){}shutdown(){}}/**
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
 */const d_="ConnectivityMonitor";class f_{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){H(d_,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){H(d_,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let tl=null;function Od(){return tl===null?tl=function(){return 268435456+Math.round(2147483648*Math.random())}():tl++,"0x"+tl.toString(16)}/**
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
 */const ph="RestConnection",VN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class bN{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===lu?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,n,r,i,s){const o=Od(),l=this.zo(e,n.toUriEncodedString());H(ph,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,i,s);const{host:c}=new URL(l),d=yi(c);return this.Jo(e,l,u,r,d).then(p=>(H(ph,`Received RPC '${e}' ${o}: `,p),p),p=>{throw as(ph,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Ho(e,n,r,i,s,o){return this.Go(e,n,r,i,s)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ss}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,n){const r=VN[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class LN{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Je="WebChannelConnection";class MN extends bN{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const o=Od();return new Promise((l,u)=>{const c=new u0;c.setWithCredentials(!0),c.listenOnce(c0.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case El.NO_ERROR:const p=c.getResponseJson();H(Je,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case El.TIMEOUT:H(Je,`RPC '${e}' ${o} timed out`),u(new B(L.DEADLINE_EXCEEDED,"Request time out"));break;case El.HTTP_ERROR:const m=c.getStatus();if(H(Je,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let _=c.getResponseJson();Array.isArray(_)&&(_=_[0]);const A=_==null?void 0:_.error;if(A&&A.status&&A.message){const k=function(w){const v=w.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(v)>=0?v:L.UNKNOWN}(A.status);u(new B(k,A.message))}else u(new B(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new B(L.UNAVAILABLE,"Connection failed."));break;default:K(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{H(Je,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);H(Je,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",d,r,15)})}T_(e,n,r){const i=Od(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=f0(),l=d0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");H(Je,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);this.I_(p);let m=!1,_=!1;const A=new LN({Yo:P=>{_?H(Je,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(m||(H(Je,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),H(Je,`RPC '${e}' stream ${i} sending:`,P),p.send(P))},Zo:()=>p.close()}),k=(P,w,v)=>{P.listen(w,T=>{try{v(T)}catch(b){setTimeout(()=>{throw b},0)}})};return k(p,ao.EventType.OPEN,()=>{_||(H(Je,`RPC '${e}' stream ${i} transport opened.`),A.o_())}),k(p,ao.EventType.CLOSE,()=>{_||(_=!0,H(Je,`RPC '${e}' stream ${i} transport closed`),A.a_(),this.E_(p))}),k(p,ao.EventType.ERROR,P=>{_||(_=!0,as(Je,`RPC '${e}' stream ${i} transport errored. Name:`,P.name,"Message:",P.message),A.a_(new B(L.UNAVAILABLE,"The operation could not be completed")))}),k(p,ao.EventType.MESSAGE,P=>{var w;if(!_){const v=P.data[0];oe(!!v,16349);const T=v,b=(T==null?void 0:T.error)||((w=T[0])==null?void 0:w.error);if(b){H(Je,`RPC '${e}' stream ${i} received error:`,b);const U=b.status;let j=function(I){const R=Pe[I];if(R!==void 0)return G0(R)}(U),E=b.message;j===void 0&&(j=L.INTERNAL,E="Unknown error status: "+U+" with message "+b.message),_=!0,A.a_(new B(j,E)),p.close()}else H(Je,`RPC '${e}' stream ${i} received:`,v),A.u_(v)}}),k(l,h0.STAT_EVENT,P=>{P.stat===Ed.PROXY?H(Je,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===Ed.NOPROXY&&H(Je,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.__()},0),A}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function mh(){return typeof document<"u"?document:null}/**
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
 */function ec(t){return new zx(t,!0)}/**
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
 */class aT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const p_="PersistentStream";class lT{constructor(e,n,r,i,s,o,l,u){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new aT(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Mn(n.toString()),Mn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new B(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return H(p_,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(H(p_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class UN extends lT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=Hx(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?fn(o.readTime):Y.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Nd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Ad(u)?{documents:Gx(s,u)}:{query:Kx(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Y0(s,o.resumeToken);const c=kd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=pu(s,o.snapshotVersion.toTimestamp());const c=kd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=Yx(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Nd(this.serializer),n.removeTarget=e,this.q_(n)}}class FN extends lT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return oe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){oe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=Wx(e.writeResults,e.commitTime),r=fn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Nd(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>qx(this.serializer,r))};this.q_(n)}}/**
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
 */class jN{}class zN extends jN{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new B(L.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(e,Pd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(L.UNKNOWN,s.toString())})}Ho(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,Pd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(L.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class BN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */const pi="RemoteStore";class $N{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{wi(this)&&(H(pi,"Restarting streams for network reachability change."),await async function(u){const c=X(u);c.Ea.add(4),await ga(c),c.Ra.set("Unknown"),c.Ea.delete(4),await tc(c)}(this))})}),this.Ra=new BN(r,i)}}async function tc(t){if(wi(t))for(const e of t.da)await e(!0)}async function ga(t){for(const e of t.da)await e(!1)}function uT(t,e){const n=X(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),wp(n)?vp(n):Cs(n).O_()&&_p(n,e))}function yp(t,e){const n=X(t),r=Cs(n);n.Ia.delete(e),r.O_()&&cT(n,e),n.Ia.size===0&&(r.O_()?r.L_():wi(n)&&n.Ra.set("Unknown"))}function _p(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Cs(t).Y_(e)}function cT(t,e){t.Va.Ue(e),Cs(t).Z_(e)}function vp(t){t.Va=new Mx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Cs(t).start(),t.Ra.ua()}function wp(t){return wi(t)&&!Cs(t).x_()&&t.Ia.size>0}function wi(t){return X(t).Ea.size===0}function hT(t){t.Va=void 0}async function HN(t){t.Ra.set("Online")}async function qN(t){t.Ia.forEach((e,n)=>{_p(t,e)})}async function WN(t,e){hT(t),wp(t)?(t.Ra.ha(e),vp(t)):t.Ra.set("Unknown")}async function GN(t,e,n){if(t.Ra.set("Online"),e instanceof Q0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))}(t,e)}catch(r){H(pi,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await gu(t,r)}else if(e instanceof Rl?t.Va.Ze(e):e instanceof K0?t.Va.st(e):t.Va.tt(e),!n.isEqual(Y.min()))try{const r=await oT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Va.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.Ia.get(c);d&&s.Ia.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.Ia.get(u);if(!d)return;s.Ia.set(u,d.withResumeToken(Ke.EMPTY_BYTE_STRING,d.snapshotVersion)),cT(s,u);const p=new ar(d.target,u,c,d.sequenceNumber);_p(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H(pi,"Failed to raise snapshot:",r),await gu(t,r)}}async function gu(t,e,n){if(!As(e))throw e;t.Ea.add(1),await ga(t),t.Ra.set("Offline"),n||(n=()=>oT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H(pi,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await tc(t)})}function dT(t,e){return e().catch(n=>gu(t,n,e))}async function nc(t){const e=X(t),n=kr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:rp;for(;KN(e);)try{const i=await PN(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,QN(e,i)}catch(i){await gu(e,i)}fT(e)&&pT(e)}function KN(t){return wi(t)&&t.Ta.length<10}function QN(t,e){t.Ta.push(e);const n=kr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function fT(t){return wi(t)&&!kr(t).x_()&&t.Ta.length>0}function pT(t){kr(t).start()}async function YN(t){kr(t).ra()}async function XN(t){const e=kr(t);for(const n of t.Ta)e.ea(n.mutations)}async function JN(t,e,n){const r=t.Ta.shift(),i=cp.from(r,e,n);await dT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await nc(t)}async function ZN(t,e){e&&kr(t).X_&&await async function(r,i){if(function(o){return Vx(o)&&o!==L.ABORTED}(i.code)){const s=r.Ta.shift();kr(r).B_(),await dT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await nc(r)}}(t,e),fT(t)&&pT(t)}async function m_(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),H(pi,"RemoteStore received new credentials");const r=wi(n);n.Ea.add(3),await ga(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await tc(n)}async function eD(t,e){const n=X(t);e?(n.Ea.delete(2),await tc(n)):e||(n.Ea.add(2),await ga(n),n.Ra.set("Unknown"))}function Cs(t){return t.ma||(t.ma=function(n,r,i){const s=X(n);return s.sa(),new UN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:HN.bind(null,t),t_:qN.bind(null,t),r_:WN.bind(null,t),H_:GN.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),wp(t)?vp(t):t.Ra.set("Unknown")):(await t.ma.stop(),hT(t))})),t.ma}function kr(t){return t.fa||(t.fa=function(n,r,i){const s=X(n);return s.sa(),new FN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:YN.bind(null,t),r_:ZN.bind(null,t),ta:XN.bind(null,t),na:JN.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await nc(t)):(await t.fa.stop(),t.Ta.length>0&&(H(pi,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class Ep{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new vr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Ep(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tp(t,e){if(Mn("AsyncQueue",`${e}: ${t}`),As(t))return new B(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Zi{static emptySet(e){return new Zi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=lo(),this.sortedSet=new Te(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Zi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Zi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class g_{constructor(){this.ga=new Te(W.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):K(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class fs{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new fs(e,n,Zi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class tD{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class nD{constructor(){this.queries=y_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=X(n),s=i.queries;i.queries=y_(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new B(L.ABORTED,"Firestore shutting down"))}}function y_(){return new vi(t=>V0(t),Qu)}async function mT(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new tD,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Tp(o,`Initialization of query '${Ci(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&Ip(n)}async function gT(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function rD(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&Ip(n)}function iD(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function Ip(t){t.Ca.forEach(e=>{e.next()})}var Vd,__;(__=Vd||(Vd={})).Ma="default",__.Cache="cache";class yT{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new fs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=fs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Vd.Cache}}/**
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
 */class _T{constructor(e){this.key=e}}class vT{constructor(e){this.key=e}}class sD{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=re(),this.mutatedKeys=re(),this.eu=b0(e),this.tu=new Zi(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new g_,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),_=Yu(this.query,p)?p:null,A=!!m&&this.mutatedKeys.has(m.key),k=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let P=!1;m&&_?m.data.isEqual(_.data)?A!==k&&(r.track({type:3,doc:_}),P=!0):this.su(m,_)||(r.track({type:2,doc:_}),P=!0,(u&&this.eu(_,u)>0||c&&this.eu(_,c)<0)&&(l=!0)):!m&&_?(r.track({type:0,doc:_}),P=!0):m&&!_&&(r.track({type:1,doc:m}),P=!0,(u||c)&&(l=!0)),P&&(_?(o=o.add(_),s=k?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,Cs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,p)=>function(_,A){const k=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K(20277,{Rt:P})}};return k(_)-k(A)}(d.type,p.type)||this.eu(d.doc,p.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Xa.size===0&&this.current&&!i?1:0,c=u!==this.Za;return this.Za=u,o.length!==0||c?{snapshot:new fs(this.query,e.tu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new g_,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=re(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new vT(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new _T(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=re();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return fs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Sp="SyncEngine";class oD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class aD{constructor(e){this.key=e,this.hu=!1}}class lD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new vi(l=>V0(l),Qu),this.Iu=new Map,this.Eu=new Set,this.du=new Te(W.comparator),this.Au=new Map,this.Ru=new fp,this.Vu={},this.mu=new Map,this.fu=ds.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function uD(t,e,n=!0){const r=RT(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await wT(r,e,n,!0),i}async function cD(t,e){const n=RT(t);await wT(n,e,!0,!1)}async function wT(t,e,n,r){const i=await xN(t.localStore,hn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await hD(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&uT(t.remoteStore,i),l}async function hD(t,e,n,r,i){t.pu=(p,m,_)=>async function(k,P,w,v){let T=P.view.ru(w);T.Cs&&(T=await c_(k.localStore,P.query,!1).then(({documents:E})=>P.view.ru(E,T)));const b=v&&v.targetChanges.get(P.targetId),U=v&&v.targetMismatches.get(P.targetId)!=null,j=P.view.applyChanges(T,k.isPrimaryClient,b,U);return w_(k,P.targetId,j.au),j.snapshot}(t,p,m,_);const s=await c_(t.localStore,e,!0),o=new sD(e,s.Qs),l=o.ru(s.documents),u=ma.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);w_(t,n,c.au);const d=new oD(e,n,o);return t.Tu.set(e,d),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function dD(t,e,n){const r=X(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!Qu(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Dd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&yp(r.remoteStore,i.targetId),bd(r,i.targetId)}).catch(Rs)):(bd(r,i.targetId),await Dd(r.localStore,i.targetId,!0))}async function fD(t,e){const n=X(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),yp(n.remoteStore,r.targetId))}async function pD(t,e,n){const r=ED(t);try{const i=await function(o,l){const u=X(o),c=fe.now(),d=l.reduce((_,A)=>_.add(A.key),re());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let A=Un(),k=re();return u.Ns.getEntries(_,d).next(P=>{A=P,A.forEach((w,v)=>{v.isValidDocument()||(k=k.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,A)).next(P=>{p=P;const w=[];for(const v of l){const T=Px(v,p.get(v.key).overlayedDocument);T!=null&&w.push(new Ur(v.key,T,C0(T.value.mapValue),dn.exists(!0)))}return u.mutationQueue.addMutationBatch(_,c,w,l)}).next(P=>{m=P;const w=P.applyToLocalDocumentSet(p,k);return u.documentOverlayCache.saveOverlays(_,P.batchId,w)})}).then(()=>({batchId:m.batchId,changes:M0(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Vu[o.currentUser.toKey()];c||(c=new Te(ne)),c=c.insert(l,u),o.Vu[o.currentUser.toKey()]=c}(r,i.batchId,n),await ya(r,i.changes),await nc(r.remoteStore)}catch(i){const s=Tp(i,"Failed to persist write");n.reject(s)}}async function ET(t,e){const n=X(t);try{const r=await CN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(oe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?oe(o.hu,14607):i.removedDocuments.size>0&&(oe(o.hu,42227),o.hu=!1))}),await ya(n,r,e)}catch(r){await Rs(r)}}function v_(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.Sa)m.va(l)&&(c=!0)}),c&&Ip(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function mD(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Te(W.comparator);o=o.insert(s,tt.newNoDocument(s,Y.min()));const l=re().add(s),u=new Zu(Y.min(),new Map,new Te(ne),o,l);await ET(r,u),r.du=r.du.remove(s),r.Au.delete(e),Rp(r)}else await Dd(r.localStore,e,!1).then(()=>bd(r,e,n)).catch(Rs)}async function gD(t,e){const n=X(t),r=e.batch.batchId;try{const i=await AN(n.localStore,e);IT(n,r,null),TT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ya(n,i)}catch(i){await Rs(i)}}async function yD(t,e,n){const r=X(t);try{const i=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(oe(p!==null,37113),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);IT(r,e,n),TT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ya(r,i)}catch(i){await Rs(i)}}function TT(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function IT(t,e,n){const r=X(t);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function bd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||ST(t,r)})}function ST(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(yp(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Rp(t))}function w_(t,e,n){for(const r of n)r instanceof _T?(t.Ru.addReference(r.key,e),_D(t,r)):r instanceof vT?(H(Sp,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||ST(t,r.key)):K(19791,{wu:r})}function _D(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(H(Sp,"New document in limbo: "+n),t.Eu.add(r),Rp(t))}function Rp(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new W(ue.fromString(e)),r=t.fu.next();t.Au.set(r,new aD(n)),t.du=t.du.insert(n,r),uT(t.remoteStore,new ar(hn(ap(n.path)),r,"TargetPurposeLimboResolution",qu.ce))}}async function ya(t,e,n){const r=X(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=mp.As(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,c){const d=X(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(c,m=>M.forEach(m.Es,_=>d.persistence.referenceDelegate.addReference(p,m.targetId,_)).next(()=>M.forEach(m.ds,_=>d.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))}catch(p){if(!As(p))throw p;H(gp,"Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const _=d.Ms.get(m),A=_.snapshotVersion,k=_.withLastLimboFreeSnapshotVersion(A);d.Ms=d.Ms.insert(m,k)}}}(r.localStore,s))}async function vD(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){H(Sp,"User change. New user:",e.toKey());const r=await sT(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new B(L.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ya(n,r.Ls)}}function wD(t,e){const n=X(t),r=n.Au.get(e);if(r&&r.hu)return re().add(r.key);{let i=re();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function RT(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ET.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mD.bind(null,e),e.Pu.H_=rD.bind(null,e.eventManager),e.Pu.yu=iD.bind(null,e.eventManager),e}function ED(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=gD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yD.bind(null,e),e}class yu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ec(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return RN(this.persistence,new TN,e.initialUser,this.serializer)}Cu(e){return new iT(pp.mi,this.serializer)}Du(e){return new DN}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yu.provider={build:()=>new yu};class TD extends yu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){oe(this.persistence.referenceDelegate instanceof mu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new aN(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?ht.withCacheSize(this.cacheSizeBytes):ht.DEFAULT;return new iT(r=>mu.mi(r,n),this.serializer)}}class Ld{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>v_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=vD.bind(null,this.syncEngine),await eD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new nD}()}createDatastore(e){const n=ec(e.databaseInfo.databaseId),r=function(s){return new MN(s)}(e.databaseInfo);return function(s,o,l,u){return new zN(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new $N(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>v_(this.syncEngine,n,0),function(){return f_.v()?new f_:new ON}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new lD(i,s,o,l,u,c);return d&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=X(i);H(pi,"RemoteStore shutting down."),s.Ea.add(5),await ga(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Ld.provider={build:()=>new Ld};/**
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
 */class AT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Mn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Pr="FirestoreClient";class ID{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ze.UNAUTHENTICATED,this.clientId=np.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H(Pr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H(Pr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Tp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function gh(t,e){t.asyncQueue.verifyOperationInProgress(),H(Pr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await sT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function E_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await SD(t);H(Pr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>m_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>m_(e.remoteStore,i)),t._onlineComponents=e}async function SD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H(Pr,"Using user provided OfflineComponentProvider");try{await gh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;as("Error using user provided cache. Falling back to memory cache: "+n),await gh(t,new yu)}}else H(Pr,"Using default OfflineComponentProvider"),await gh(t,new TD(void 0));return t._offlineComponents}async function CT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H(Pr,"Using user provided OnlineComponentProvider"),await E_(t,t._uninitializedComponentsProvider._online)):(H(Pr,"Using default OnlineComponentProvider"),await E_(t,new Ld))),t._onlineComponents}function RD(t){return CT(t).then(e=>e.syncEngine)}async function Md(t){const e=await CT(t),n=e.eventManager;return n.onListen=uD.bind(null,e.syncEngine),n.onUnlisten=dD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=cD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=fD.bind(null,e.syncEngine),n}function AD(t,e,n={}){const r=new vr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new AT({next:m=>{d.Nu(),o.enqueueAndForget(()=>gT(s,p)),m.fromCache&&u.source==="server"?c.reject(new B(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new yT(l,d,{includeMetadataChanges:!0,qa:!0});return mT(s,p)}(await Md(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function kT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const T_=new Map;/**
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
 */const PT="firestore.googleapis.com",I_=!0;class S_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new B(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=PT,this.ssl=I_}else this.host=e.host,this.ssl=e.ssl??I_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=rT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<sN)throw new B(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}B2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kT(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class rc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new S_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new S_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new D2;switch(r.type){case"firstParty":return new L2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=T_.get(n);r&&(H("ComponentProvider","Removing Datastore"),T_.delete(n),r.terminate())}(this),Promise.resolve()}}function CD(t,e,n,r={}){var c;t=cn(t,rc);const i=yi(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(Bf(`https://${l}`),$f("Firestore",!0)),s.host!==PT&&s.host!==l&&as("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!li(u,o)&&(t._setSettings(u),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=Ze.MOCK_USER;else{d=EE(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new B(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ze(m)}t._authCredentials=new O2(new m0(d,p))}}/**
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
 */class Xt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Xt(this.firestore,e,this._query)}}class ke{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ke(this.firestore,e,this._key)}toJSON(){return{type:ke._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(fa(n,ke._jsonSchema))return new ke(e,r||null,new W(ue.fromString(n.referencePath)))}}ke._jsonSchemaVersion="firestore/documentReference/1.0",ke._jsonSchema={type:De("string",ke._jsonSchemaVersion),referencePath:De("string")};class wr extends Xt{constructor(e,n,r){super(e,n,ap(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ke(this.firestore,null,new W(e))}withConverter(e){return new wr(this.firestore,e,this._path)}}function ps(t,e,...n){if(t=Ee(t),g0("collection","path",e),t instanceof rc){const r=ue.fromString(e,...n);return Uy(r),new wr(t,null,r)}{if(!(t instanceof ke||t instanceof wr))throw new B(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return Uy(r),new wr(t.firestore,null,r)}}function xT(t,e,...n){if(t=Ee(t),arguments.length===1&&(e=np.newId()),g0("doc","path",e),t instanceof rc){const r=ue.fromString(e,...n);return My(r),new ke(t,null,new W(r))}{if(!(t instanceof ke||t instanceof wr))throw new B(L.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return My(r),new ke(t.firestore,t instanceof wr?t.converter:null,new W(r))}}/**
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
 */const R_="AsyncQueue";class A_{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new aT(this,"async_queue_retry"),this._c=()=>{const r=mh();r&&H(R_,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=mh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=mh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new vr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!As(e))throw e;H(R_,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Mn("INTERNAL UNHANDLED ERROR: ",C_(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=Ep.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&K(47125,{Pc:C_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function C_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */function k_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class ms extends rc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new A_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new A_(e),this._firestoreClient=void 0,await e}}}function kD(t,e){const n=typeof t=="object"?t:Wf(),r=typeof t=="string"?t:lu,i=ju(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=_E("firestore");s&&CD(i,...s)}return i}function Ap(t){if(t._terminated)throw new B(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||PD(t),t._firestoreClient}function PD(t){var r,i,s;const e=t._freezeSettings(),n=function(l,u,c,d){return new ex(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,kT(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new ID(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Nt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Nt(Ke.fromBase64String(e))}catch(n){throw new B(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Nt(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Nt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(fa(e,Nt._jsonSchema))return Nt.fromBase64String(e.bytes)}}Nt._jsonSchemaVersion="firestore/bytes/1.0",Nt._jsonSchema={type:De("string",Nt._jsonSchemaVersion),bytes:De("string")};/**
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
 */class ic{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Cp{constructor(e){this._methodName=e}}/**
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
 */class pn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:pn._jsonSchemaVersion}}static fromJSON(e){if(fa(e,pn._jsonSchema))return new pn(e.latitude,e.longitude)}}pn._jsonSchemaVersion="firestore/geoPoint/1.0",pn._jsonSchema={type:De("string",pn._jsonSchemaVersion),latitude:De("number"),longitude:De("number")};/**
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
 */class mn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:mn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(fa(e,mn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new mn(e.vectorValues);throw new B(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}mn._jsonSchemaVersion="firestore/vectorValue/1.0",mn._jsonSchema={type:De("string",mn._jsonSchemaVersion),vectorValues:De("object")};/**
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
 */const xD=/^__.*__$/;class ND{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ur(e,this.data,this.fieldMask,n,this.fieldTransforms):new pa(e,this.data,n,this.fieldTransforms)}}class NT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ur(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function DT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{Ac:t})}}class kp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new kp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return _u(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(DT(this.Ac)&&xD.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class DD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ec(e)}Cc(e,n,r,i=!1){return new kp({Ac:e,methodName:n,Dc:r,path:qe.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sc(t){const e=t._freezeSettings(),n=ec(t._databaseId);return new DD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function OD(t,e,n,r,i,s={}){const o=t.Cc(s.merge||s.mergeFields?2:0,e,n,i);Pp("Data must be an object, but it was:",o,r);const l=VT(r,o);let u,c;if(s.merge)u=new Tt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=Ud(e,p,n);if(!o.contains(m))throw new B(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);LT(d,m)||d.push(m)}u=new Tt(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new ND(new ft(l),u,c)}class oc extends Cp{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof oc}}function VD(t,e,n,r){const i=t.Cc(1,e,n);Pp("Data must be an object, but it was:",i,r);const s=[],o=ft.empty();Lr(r,(u,c)=>{const d=xp(e,u,n);c=Ee(c);const p=i.yc(d);if(c instanceof oc)s.push(d);else{const m=_a(c,p);m!=null&&(s.push(d),o.set(d,m))}});const l=new Tt(s);return new NT(o,l,i.fieldTransforms)}function bD(t,e,n,r,i,s){const o=t.Cc(1,e,n),l=[Ud(e,r,n)],u=[i];if(s.length%2!=0)throw new B(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Ud(e,s[m])),u.push(s[m+1]);const c=[],d=ft.empty();for(let m=l.length-1;m>=0;--m)if(!LT(c,l[m])){const _=l[m];let A=u[m];A=Ee(A);const k=o.yc(_);if(A instanceof oc)c.push(_);else{const P=_a(A,k);P!=null&&(c.push(_),d.set(_,P))}}const p=new Tt(c);return new NT(d,p,o.fieldTransforms)}function OT(t,e,n,r=!1){return _a(n,t.Cc(r?4:3,e))}function _a(t,e){if(bT(t=Ee(t)))return Pp("Unsupported field value:",e,t),VT(t,e);if(t instanceof Cp)return function(r,i){if(!DT(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=_a(l,i.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Ee(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ix(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=fe.fromDate(r);return{timestampValue:pu(i.serializer,s)}}if(r instanceof fe){const s=new fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:pu(i.serializer,s)}}if(r instanceof pn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Nt)return{bytesValue:Y0(i.serializer,r._byteString)};if(r instanceof ke){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:dp(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof mn)return function(o,l){return{mapValue:{fields:{[R0]:{stringValue:A0},[uu]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Sc("VectorValues must only contain numeric values.");return up(l.serializer,c)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${Hu(r)}`)}(t,e)}function VT(t,e){const n={};return v0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Lr(t,(r,i)=>{const s=_a(i,e.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function bT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof fe||t instanceof pn||t instanceof Nt||t instanceof ke||t instanceof Cp||t instanceof mn)}function Pp(t,e,n){if(!bT(n)||!y0(n)){const r=Hu(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function Ud(t,e,n){if((e=Ee(e))instanceof ic)return e._internalPath;if(typeof e=="string")return xp(t,e);throw _u("Field path arguments must be of type string or ",t,!1,void 0,n)}const LD=new RegExp("[~\\*/\\[\\]]");function xp(t,e,n){if(e.search(LD)>=0)throw _u(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ic(...e.split("."))._internalPath}catch{throw _u(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function _u(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new B(L.INVALID_ARGUMENT,l+t+u)}function LT(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Np{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new MD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ac("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class MD extends Np{data(){return super.data()}}function ac(t,e){return typeof e=="string"?xp(t,e):e instanceof ic?e._internalPath:e._delegate._internalPath}/**
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
 */function MT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Dp{}class va extends Dp{}function gs(t,e,...n){let r=[];e instanceof Dp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Op).length,l=s.filter(u=>u instanceof lc).length;if(o>1||o>0&&l>0)throw new B(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class lc extends va{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new lc(e,n,r)}_apply(e){const n=this._parse(e);return FT(e._query,n),new Xt(e.firestore,e.converter,Cd(e._query,n))}_parse(e){const n=sc(e.firestore);return function(s,o,l,u,c,d,p){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new B(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){x_(p,d);const A=[];for(const k of p)A.push(P_(u,s,k));m={arrayValue:{values:A}}}else m=P_(u,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||x_(p,d),m=OT(l,o,p,d==="in"||d==="not-in");return Ne.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function UD(t,e,n){const r=e,i=ac("where",t);return lc._create(i,r,n)}class Op extends Dp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Op(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Kt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)FT(o,u),o=Cd(o,u)}(e._query,n),new Xt(e.firestore,e.converter,Cd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Vp extends va{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Vp(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new B(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new B(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Yo(s,o)}(e._query,this._field,this._direction);return new Xt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Mr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Zo(t,e="asc"){const n=e,r=ac("orderBy",t);return Vp._create(r,n)}class bp extends va{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new bp(e,n,r)}_apply(e){return new Xt(e.firestore,e.converter,hu(e._query,this._limit,this._limitType))}}function Lp(t){return $2("limit",t),bp._create("limit",t,"F")}class Mp extends va{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Mp(e,n,r)}_apply(e){const n=UT(e,this.type,this._docOrFields,this._inclusive);return new Xt(e.firestore,e.converter,function(i,s){return new Mr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function FD(...t){return Mp._create("startAt",t,!0)}class Up extends va{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Up(e,n,r)}_apply(e){const n=UT(e,this.type,this._docOrFields,this._inclusive);return new Xt(e.firestore,e.converter,function(i,s){return new Mr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function jD(...t){return Up._create("endAt",t,!0)}function UT(t,e,n,r){if(n[0]=Ee(n[0]),n[0]instanceof Np)return function(s,o,l,u,c){if(!u)throw new B(L.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${l}().`);const d=[];for(const p of Ji(s))if(p.field.isKeyField())d.push(cu(o,u.key));else{const m=u.data.field(p.field);if(Gu(m))throw new B(L.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+p.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const _=p.field.canonicalString();throw new B(L.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${_}' (used as the orderBy) does not exist.`)}d.push(m)}return new hs(d,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=sc(t.firestore);return function(o,l,u,c,d,p){const m=o.explicitOrderBy;if(d.length>m.length)throw new B(L.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const _=[];for(let A=0;A<d.length;A++){const k=d[A];if(m[A].field.isKeyField()){if(typeof k!="string")throw new B(L.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof k}`);if(!lp(o)&&k.indexOf("/")!==-1)throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${k}' contains a slash.`);const P=o.path.child(ue.fromString(k));if(!W.isDocumentKey(P))throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${P}' is not because it contains an odd number of segments.`);const w=new W(P);_.push(cu(l,w))}else{const P=OT(u,c,k);_.push(P)}}return new hs(_,p)}(t._query,t.firestore._databaseId,i,e,n,r)}}function P_(t,e,n){if(typeof(n=Ee(n))=="string"){if(n==="")throw new B(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!lp(e)&&n.indexOf("/")!==-1)throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ue.fromString(n));if(!W.isDocumentKey(r))throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return cu(t,new W(r))}if(n instanceof ke)return cu(t,n._key);throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Hu(n)}.`)}function x_(t,e){if(!Array.isArray(t)||t.length===0)throw new B(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function FT(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class zD{convertValue(e,n="none"){switch(Cr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ar(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw K(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Lr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[uu].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Ae(o.doubleValue));return new mn(n)}convertGeoPoint(e){return new pn(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ku(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Go(e));default:return null}}convertTimestamp(e){const n=Rr(e);return new fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ue.fromString(e);oe(nT(r),9688,{name:e});const i=new Ko(r.get(1),r.get(3)),s=new W(r.popFirst(5));return i.isEqual(n)||Mn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function BD(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class co{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ti extends Np{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Al(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ac("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new B(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ti._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ti._jsonSchemaVersion="firestore/documentSnapshot/1.0",ti._jsonSchema={type:De("string",ti._jsonSchemaVersion),bundleSource:De("string","DocumentSnapshot"),bundleName:De("string"),bundle:De("string")};class Al extends ti{data(e={}){return super.data(e)}}class ni{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new co(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Al(this._firestore,this._userDataWriter,r.key,r,new co(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Al(i._firestore,i._userDataWriter,l.doc.key,l.doc,new co(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Al(i._firestore,i._userDataWriter,l.doc.key,l.doc,new co(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:$D(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new B(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ni._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=np.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function $D(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K(61501,{type:t})}}ni._jsonSchemaVersion="firestore/querySnapshot/1.0",ni._jsonSchema={type:De("string",ni._jsonSchemaVersion),bundleSource:De("string","QuerySnapshot"),bundleName:De("string"),bundle:De("string")};class Fp extends zD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Nt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ke(this.firestore,null,n)}}function jp(t){t=cn(t,Xt);const e=cn(t.firestore,ms),n=Ap(e),r=new Fp(e);return MT(t._query),AD(n,t._query).then(i=>new ni(e,r,t,i))}function HD(t,e,n){t=cn(t,ke);const r=cn(t.firestore,ms),i=BD(t.converter,e);return jT(r,[OD(sc(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,dn.none())])}function qD(t,e,n,...r){t=cn(t,ke);const i=cn(t.firestore,ms),s=sc(i);let o;return o=typeof(e=Ee(e))=="string"||e instanceof ic?bD(s,"updateDoc",t._key,e,n,r):VD(s,"updateDoc",t._key,e),jT(i,[o.toMutation(t._key,dn.exists(!0))])}function Fd(t,...e){var u,c,d;t=Ee(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||k_(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(k_(e[r])){const p=e[r];e[r]=(u=p.next)==null?void 0:u.bind(p),e[r+1]=(c=p.error)==null?void 0:c.bind(p),e[r+2]=(d=p.complete)==null?void 0:d.bind(p)}let s,o,l;if(t instanceof ke)o=cn(t.firestore,ms),l=ap(t._key.path),s={next:p=>{e[r]&&e[r](WD(o,t,p))},error:e[r+1],complete:e[r+2]};else{const p=cn(t,Xt);o=cn(p.firestore,ms),l=p._query;const m=new Fp(o);s={next:_=>{e[r]&&e[r](new ni(o,m,p,_))},error:e[r+1],complete:e[r+2]},MT(t._query)}return function(m,_,A,k){const P=new AT(k),w=new yT(_,P,A);return m.asyncQueue.enqueueAndForget(async()=>mT(await Md(m),w)),()=>{P.Nu(),m.asyncQueue.enqueueAndForget(async()=>gT(await Md(m),w))}}(Ap(o),l,i,s)}function jT(t,e){return function(r,i){const s=new vr;return r.asyncQueue.enqueueAndForget(async()=>pD(await RD(r),i,s)),s.promise}(Ap(t),e)}function WD(t,e,n){const r=n.docs.get(e._key),i=new Fp(t);return new ti(t,i,e._key,r,new co(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Ss=i})(_i),ui(new Ir("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new ms(new V2(r.getProvider("auth-internal")),new M2(o,r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new B(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ko(c.options.projectId,d)}(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),an(Oy,Vy,e),an(Oy,Vy,"esm2020")})();/**
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
 */const zT="firebasestorage.googleapis.com",GD="storageBucket",KD=2*60*1e3,QD=10*60*1e3;/**
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
 */class vn extends _n{constructor(e,n,r=0){super(yh(e),`Firebase Storage: ${n} (${yh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,vn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return yh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var yn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(yn||(yn={}));function yh(t){return"storage/"+t}function YD(){const t="An unknown error occurred, please check the error payload for server response.";return new vn(yn.UNKNOWN,t)}function XD(){return new vn(yn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function JD(){return new vn(yn.CANCELED,"User canceled the upload/download.")}function ZD(t){return new vn(yn.INVALID_URL,"Invalid URL '"+t+"'.")}function eO(t){return new vn(yn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function N_(t){return new vn(yn.INVALID_ARGUMENT,t)}function BT(){return new vn(yn.APP_DELETED,"The Firebase app was deleted.")}function tO(t){return new vn(yn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class $t{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=$t.makeFromUrl(e,n)}catch{return new $t(e,"")}if(r.path==="")return r;throw eO(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(b){b.path_=decodeURIComponent(b.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",_=new RegExp(`^https?://${p}/${d}/b/${i}/o${m}`,"i"),A={bucket:1,path:3},k=n===zT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",w=new RegExp(`^https?://${k}/${i}/${P}`,"i"),T=[{regex:l,indices:u,postModify:s},{regex:_,indices:A,postModify:c},{regex:w,indices:{bucket:1,path:2},postModify:c}];for(let b=0;b<T.length;b++){const U=T[b],j=U.regex.exec(e);if(j){const E=j[U.indices.bucket];let y=j[U.indices.path];y||(y=""),r=new $t(E,y),U.postModify(r);break}}if(r==null)throw ZD(e);return r}}class nO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function rO(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function d(...P){c||(c=!0,e.apply(null,P))}function p(P){i=setTimeout(()=>{i=null,t(_,u())},P)}function m(){s&&clearTimeout(s)}function _(P,...w){if(c){m();return}if(P){m(),d.call(null,P,...w);return}if(u()||o){m(),d.call(null,P,...w);return}r<64&&(r*=2);let T;l===1?(l=2,T=0):T=(r+Math.random())*1e3,p(T)}let A=!1;function k(P){A||(A=!0,m(),!c&&(i!==null?(P||(l=2),clearTimeout(i),p(0)):P||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,k(!0)},n),k}function iO(t){t(!1)}/**
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
 */function sO(t){return t!==void 0}function D_(t,e,n,r){if(r<e)throw N_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw N_(`Invalid value for '${t}'. Expected ${n} or less.`)}function oO(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var vu;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(vu||(vu={}));/**
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
 */function aO(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class lO{constructor(e,n,r,i,s,o,l,u,c,d,p,m=!0,_=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=p,this.retry=m,this.isUsingEmulator=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((A,k)=>{this.resolve_=A,this.reject_=k,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new nl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===vu.NO_ERROR,u=s.getStatus();if(!l||aO(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===vu.ABORT;r(!1,new nl(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new nl(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());sO(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=YD();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?BT():JD();o(u)}else{const u=XD();o(u)}};this.canceled_?n(!1,new nl(!1,null,!0)):this.backoffId_=rO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&iO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class nl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function uO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function cO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function hO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function dO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function fO(t,e,n,r,i,s,o=!0,l=!1){const u=oO(t.urlParams),c=t.url+u,d=Object.assign({},t.headers);return hO(d,e),uO(d,n),cO(d,s),dO(d,r),new lO(c,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,l)}/**
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
 */function pO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function mO(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class wu{constructor(e,n){this._service=e,n instanceof $t?this._location=n:this._location=$t.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new wu(e,n)}get root(){const e=new $t(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return mO(this._location.path)}get storage(){return this._service}get parent(){const e=pO(this._location.path);if(e===null)return null;const n=new $t(this._location.bucket,e);return new wu(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw tO(e)}}function O_(t,e){const n=e==null?void 0:e[GD];return n==null?null:$t.makeFromBucketSpec(n,t)}function gO(t,e,n,r={}){t.host=`${e}:${n}`;const i=yi(e);i&&(Bf(`https://${t.host}/b`),$f("Storage",!0)),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:EE(s,t.app.options.projectId))}class yO{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=zT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=KD,this._maxUploadRetryTime=QD,this._requests=new Set,i!=null?this._bucket=$t.makeFromBucketSpec(i,this._host):this._bucket=O_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=$t.makeFromBucketSpec(this._url,e):this._bucket=O_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){D_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){D_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(wt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new wu(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new nO(BT());{const o=fO(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const V_="@firebase/storage",b_="0.14.0";/**
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
 */const $T="storage";function _O(t=Wf(),e){t=Ee(t);const r=ju(t,$T).getImmediate({identifier:e}),i=_E("storage");return i&&vO(r,...i),r}function vO(t,e,n,r={}){gO(t,e,n,r)}function wO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new yO(n,r,i,e,_i)}function EO(){ui(new Ir($T,wO,"PUBLIC").setMultipleInstances(!0)),an(V_,b_,""),an(V_,b_,"esm2020")}EO();const TO={apiKey:"AIzaSyDDqSudAmgIyVT7nfg_2eJM8pf7nUQ7Hmk",authDomain:"kaydol-e1326.firebaseapp.com",projectId:"kaydol-e1326",storageBucket:"kaydol-e1326.firebasestorage.app",messagingSenderId:"272409924206",appId:"1:272409924206:web:7cdc48219e710c8b678c7f",measurementId:"G-6NG7FMP6H8"},zp=SE(TO),at=x2(zp),xr=kD(zp);_O(zp);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IO=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),HT=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var SO={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RO=D.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>D.createElement("svg",{ref:u,...SO,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:HT("lucide",i),...l},[...o.map(([c,d])=>D.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=(t,e)=>{const n=D.forwardRef(({className:r,...i},s)=>D.createElement(RO,{ref:s,iconNode:e,className:HT(`lucide-${IO(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AO=ze("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CO=ze("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qT=ze("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kO=ze("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PO=ze("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WT=ze("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xO=ze("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NO=ze("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DO=ze("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OO=ze("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VO=ze("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bO=ze("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LO=ze("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MO=ze("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UO=ze("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FO=ze("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jO=ze("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zO=ze("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function BO(){const[t,e]=D.useState([]),[n,r]=D.useState(!0);return D.useEffect(()=>{(async()=>{try{const s=gs(ps(xr,"users"),Zo("createdAt","desc"),Lp(9)),l=(await jp(s)).docs.map(u=>({id:u.id,...u.data()}));e(l)}catch(s){console.error("Kullanıcılar yüklenirken hata oluştu:",s)}finally{r(!1)}})()},[]),n?O.jsx("div",{className:"flex items-center justify-center min-h-[60vh]",children:O.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-t-2 border-purple-600"})}):O.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-12",children:[O.jsxs("div",{className:"text-center mb-20 space-y-4",children:[O.jsxs("div",{className:"inline-flex items-center gap-2 bg-purple-600/10 text-purple-500 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-4",children:[O.jsx(MO,{size:12,fill:"currentColor"})," Zahid.Life"]}),O.jsxs("h1",{className:"text-5xl md:text-7xl font-black italic tracking-tighter uppercase",children:["Yeni Nesil ",O.jsx("span",{className:"text-purple-600",children:"Sosyal"})," Deneyim"]}),O.jsx("p",{className:"max-w-xl mx-auto opacity-40 font-medium text-sm leading-relaxed",children:"Topluluğumuza katılan en yeni üyeleri keşfet, profillerini incele ve bağlantıda kal."})]}),O.jsxs("div",{className:"flex items-center justify-between mb-10",children:[O.jsxs("div",{className:"flex items-center gap-3",children:[O.jsx("div",{className:"p-2 bg-white/5 rounded-lg text-purple-500",children:O.jsx(jO,{size:20})}),O.jsx("h2",{className:"text-xl font-black uppercase italic tracking-tight",children:"Yeni Üyeler"})]}),O.jsx("div",{className:"h-px flex-1 bg-white/5 mx-6 hidden md:block"}),O.jsxs("span",{className:"text-[10px] font-black opacity-20 uppercase tracking-widest",children:["Toplam ",t.length," Üye"]})]}),O.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:t.map(i=>O.jsxs("div",{className:"group relative bg-[#12121a] border border-white/5 p-8 rounded-[3rem] hover:border-purple-600/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden",children:[O.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-purple-600/5 blur-[50px] group-hover:bg-purple-600/10 transition-colors"}),O.jsxs("div",{className:"relative flex flex-col items-center",children:[O.jsx("div",{className:"w-20 h-20 bg-purple-600 rounded-[2.5rem] flex items-center justify-center text-4xl font-black shadow-2xl shadow-purple-600/20 mb-6 group-hover:scale-110 transition-transform duration-500",children:i.nickname?i.nickname[0].toUpperCase():"?"}),O.jsx("h3",{className:"text-xl font-black uppercase italic tracking-tight mb-1",children:i.nickname||"İsimsiz Üye"}),O.jsxs("p",{className:"text-[10px] font-bold opacity-30 uppercase tracking-[0.2em] mb-8",children:["Katılım: ",i.createdAt?new Date(i.createdAt).toLocaleDateString():"Bilinmiyor"]}),O.jsxs(er,{to:`/user/${i.nickname}`,className:"w-full py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 group-hover:bg-purple-600 group-hover:border-purple-600 transition-all duration-300",children:["Profili Gör ",O.jsx(CO,{size:14})]})]})]},i.id))}),t.length===0&&O.jsx("div",{className:"text-center py-20 bg-white/5 rounded-[3rem] border border-dashed border-white/10",children:O.jsx("p",{className:"opacity-30 font-bold uppercase tracking-widest text-xs",children:"Henüz üye bulunamadı."})})]})}function $O(){const[t,e]=D.useState("users"),[n,r]=D.useState([]),[i,s]=D.useState([]),[o,l]=D.useState(null);return D.useEffect(()=>{const u=at.onAuthStateChanged(p=>{l((p==null?void 0:p.email)==="info@zahid.life")}),c=Fd(gs(ps(xr,"users"),Zo("createdAt","desc")),p=>{r(p.docs.map(m=>({id:m.id,...m.data()})))}),d=Fd(gs(ps(xr,"logs"),Zo("timestamp","desc")),p=>{s(p.docs.map(m=>({id:m.id,...m.data()})))});return()=>{u(),c(),d()}},[]),o===!1?O.jsxs("div",{className:"flex flex-col items-center justify-center min-h-[80vh] text-center",children:[O.jsx(bO,{size:64,className:"text-red-500 mb-4"}),O.jsx("h1",{className:"text-3xl font-black uppercase",children:"Erişim Engellendi"}),O.jsx("p",{className:"opacity-40 font-bold",children:"Bu sayfaya sadece admin erişebilir."})]}):O.jsxs("div",{className:"max-w-6xl mx-auto p-10",children:[O.jsxs("div",{className:"flex gap-4 mb-10 bg-white/5 p-1 rounded-2xl w-fit",children:[O.jsx("button",{onClick:()=>e("users"),className:`px-8 py-3 rounded-xl text-xs font-black transition-all ${t==="users"?"bg-purple-600 shadow-lg shadow-purple-600/30":"opacity-40 hover:opacity-100"}`,children:"ÜYE LİSTESİ"}),O.jsx("button",{onClick:()=>e("logs"),className:`px-8 py-3 rounded-xl text-xs font-black transition-all ${t==="logs"?"bg-purple-600 shadow-lg shadow-purple-600/30":"opacity-40 hover:opacity-100"}`,children:"SİSTEM LOGLARI"})]}),t==="users"?O.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:n.map(u=>O.jsxs("div",{className:"bg-[#12121a] border border-white/5 p-6 rounded-3xl group hover:border-purple-500 transition-all",children:[O.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[O.jsx("div",{className:"w-12 h-12 bg-purple-600/20 text-purple-500 rounded-2xl flex items-center justify-center font-black text-xl",children:u.nickname[0].toUpperCase()}),O.jsxs("div",{children:[O.jsx("h3",{className:"font-black uppercase text-sm tracking-tighter",children:u.nickname}),O.jsx("p",{className:"text-[10px] opacity-30 font-bold",children:u.email})]})]}),O.jsxs("div",{className:"pt-4 border-t border-white/5 space-y-2",children:[O.jsxs("div",{className:"flex items-center gap-2 text-[10px] font-bold opacity-40",children:[O.jsx(WT,{size:12})," Kayıt: ",new Date(u.createdAt).toLocaleString()]}),O.jsxs("div",{className:"flex items-center gap-2 text-[10px] font-bold text-purple-500",children:[O.jsx(AO,{size:12})," Durum: Aktif Üye"]})]})]},u.id))}):O.jsx("div",{className:"space-y-2",children:i.map(u=>O.jsxs("div",{className:"p-4 bg-white/5 rounded-xl flex justify-between items-center text-xs font-bold border border-white/5",children:[O.jsxs("span",{children:[u.action," - ",O.jsx("span",{className:"opacity-40",children:u.email})]}),O.jsx("span",{className:"opacity-20 font-mono",children:new Date(u.timestamp).toLocaleString()})]},u.id))})]})}function L_(){var p,m;const{username:t}=DR(),[e,n]=D.useState(null),[r,i]=D.useState(""),[s,o]=D.useState(""),[l,u]=D.useState(""),c=!t||t===((p=at.currentUser)==null?void 0:p.displayName);D.useEffect(()=>{(async()=>{var A;if(t&&t!==((A=at.currentUser)==null?void 0:A.displayName)){const k=gs(ps(xr,"users"),UD("nickname","==",t)),P=await jp(k);P.empty||n(P.docs[0].data())}else n({nickname:at.currentUser.displayName,email:at.currentUser.email,createdAt:at.currentUser.metadata.creationTime}),i(at.currentUser.displayName)})()},[t]);const d=async()=>{try{r&&(await XE(at.currentUser,{displayName:r}),await qD(xT(xr,"users",at.currentUser.uid),{nickname:r})),s&&await pP(at.currentUser,s),u("Güncellendi!"),setTimeout(()=>u(""),3e3)}catch(_){alert("Hata: "+_.message)}};return e?O.jsx("div",{className:"max-w-4xl mx-auto p-10",children:O.jsxs("div",{className:"bg-[#12121a] border border-white/5 rounded-[3.5rem] p-12 relative overflow-hidden",children:[O.jsxs("div",{className:"flex flex-col items-center mb-10",children:[O.jsx("div",{className:"w-32 h-32 bg-purple-600 rounded-[2.5rem] flex items-center justify-center text-5xl font-black mb-6 shadow-2xl",children:(m=e.nickname)==null?void 0:m[0].toUpperCase()}),O.jsx("h1",{className:"text-4xl font-black tracking-tighter uppercase italic",children:e.nickname}),O.jsxs("div",{className:"flex gap-4 mt-4 opacity-40 text-xs font-bold uppercase tracking-widest",children:[O.jsxs("span",{className:"flex items-center gap-1",children:[O.jsx(kO,{size:14})," ",new Date(e.createdAt).toLocaleDateString()]}),!t&&O.jsxs("span",{className:"flex items-center gap-1",children:[O.jsx(DO,{size:14})," ",e.email]})]})]}),c?O.jsxs("div",{className:"mt-12 pt-12 border-t border-white/5 max-w-md mx-auto",children:[O.jsxs("h3",{className:"flex items-center gap-2 text-[10px] font-black opacity-30 uppercase tracking-[0.2em] mb-8",children:[O.jsx(VO,{size:14})," Profil Ayarları"]}),O.jsxs("div",{className:"space-y-4",children:[O.jsx("input",{value:r,onChange:_=>i(_.target.value),placeholder:"Yeni Nickname",className:"w-full bg-white/5 border border-white/5 p-5 rounded-2xl outline-none focus:border-purple-600 font-bold"}),O.jsx("input",{type:"password",value:s,onChange:_=>o(_.target.value),placeholder:"Yeni Şifre",className:"w-full bg-white/5 border border-white/5 p-5 rounded-2xl outline-none focus:border-purple-600 font-bold"}),O.jsx("button",{onClick:d,className:"w-full bg-purple-600 py-5 rounded-2xl font-black text-xs uppercase tracking-widest active:scale-95 transition-all shadow-xl shadow-purple-600/20",children:"Kaydet"}),l&&O.jsxs("p",{className:"text-center text-green-500 font-bold text-xs animate-bounce flex items-center justify-center gap-2",children:[O.jsx(PO,{size:14})," ",l]})]})]}):O.jsx("div",{className:"text-center py-20 border-t border-white/5 opacity-20 font-black italic uppercase tracking-tighter",children:"Bu kullanıcı henüz bir içerik paylaşmadı."})]})}):O.jsx("div",{className:"p-20 text-center opacity-30 font-bold",children:"Yükleniyor..."})}function HO(){const[t,e]=D.useState([]);return D.useEffect(()=>{const n=gs(ps(xr,"users"),Zo("createdAt","desc"),Lp(15));return Fd(n,r=>{e(r.docs.map(i=>({id:i.id,...i.data()})))})},[]),O.jsxs("div",{className:"max-w-2xl mx-auto p-10",children:[O.jsxs("div",{className:"flex items-center gap-4 mb-10",children:[O.jsx(qT,{className:"text-purple-500",size:32}),O.jsx("h1",{className:"text-3xl font-black uppercase italic tracking-tighter",children:"Bildirimler"})]}),O.jsx("div",{className:"space-y-4",children:t.map(n=>O.jsxs("div",{className:"p-6 bg-[#12121a] border border-white/5 rounded-[2rem] flex items-center justify-between group hover:border-purple-500/50 transition-all",children:[O.jsxs("div",{className:"flex items-center gap-4",children:[O.jsx("div",{className:"w-10 h-10 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center",children:O.jsx(UO,{size:18})}),O.jsxs("div",{children:[O.jsxs("p",{className:"text-sm font-bold",children:[O.jsxs("span",{className:"text-purple-500",children:["@",n.nickname]})," aramıza katıldı."]}),O.jsx("p",{className:"text-[10px] opacity-30 font-black uppercase tracking-widest mt-1",children:"Hoş Geldin Bildirimi"})]})]}),O.jsxs("div",{className:"text-right flex flex-col items-end gap-1 opacity-20 group-hover:opacity-100 transition-opacity",children:[O.jsxs("span",{className:"text-[10px] font-black uppercase tracking-tighter flex items-center gap-1",children:[O.jsx(WT,{size:10})," ",new Date(n.createdAt).toLocaleTimeString()]}),O.jsx("span",{className:"text-[9px] font-bold",children:new Date(n.createdAt).toLocaleDateString()})]})]},n.id))})]})}function qO({onClose:t}){const[e,n]=D.useState("login"),[r,i]=D.useState(""),[s,o]=D.useState(""),[l,u]=D.useState(""),[c,d]=D.useState(""),p=async()=>{try{if(e==="login")await dP(at,r,s);else{const _=await hP(at,r,s);await XE(_.user,{displayName:l}),await HD(xT(xr,"users",_.user.uid),{uid:_.user.uid,email:r,nickname:l,createdAt:new Date().toISOString()})}t()}catch(_){d(_.message)}},m=async()=>{if(!r)return d("E-posta yazmalısın!");try{await cP(at,r),d("Şifre sıfırlama e-postası başarıyla gönderildi!")}catch(_){d(_.message)}};return O.jsx("div",{className:"fixed inset-0 z-[1000] bg-black/90 backdrop-blur-md flex items-center justify-center p-6",children:O.jsxs("div",{className:"bg-[#0c0c12] border border-white/10 p-12 rounded-[3.5rem] w-full max-w-sm relative shadow-2xl",children:[O.jsx("button",{onClick:t,className:"absolute top-8 right-8 opacity-30 hover:opacity-100",children:O.jsx(zO,{})}),O.jsx("h2",{className:"text-3xl font-black mb-8 italic uppercase tracking-tighter",children:e==="login"?"Giriş":"Kayıt"}),O.jsxs("div",{className:"space-y-3",children:[e==="signup"&&O.jsx("input",{placeholder:"NICKNAME",onChange:_=>u(_.target.value),className:"w-full bg-white/5 border border-white/5 p-4 rounded-2xl font-bold"}),O.jsx("input",{placeholder:"E-POSTA",onChange:_=>i(_.target.value),className:"w-full bg-white/5 border border-white/5 p-4 rounded-2xl font-bold"}),O.jsx("input",{type:"password",placeholder:"ŞİFRE",onChange:_=>o(_.target.value),className:"w-full bg-white/5 border border-white/5 p-4 rounded-2xl font-bold"})]}),O.jsx("button",{onClick:p,className:"w-full bg-purple-600 py-5 rounded-2xl mt-8 font-black text-xs tracking-widest uppercase",children:e==="login"?"GİRİŞ YAP":"KAYDOL"}),O.jsx("button",{onClick:()=>n(e==="login"?"signup":"login"),className:"block w-full text-center mt-6 text-[10px] font-bold opacity-30 uppercase",children:e==="login"?"Hesabın yok mu? Kaydol":"Giriş yap"}),e==="login"&&O.jsx("button",{onClick:m,className:"block w-full text-center mt-2 text-[10px] font-bold text-red-500 uppercase",children:"Şifremi Unuttum"}),c&&O.jsxs("div",{className:"absolute inset-x-6 top-1/2 -translate-y-1/2 bg-[#1a1a24] border border-purple-500 p-8 rounded-3xl shadow-3xl text-center animate-in zoom-in",children:[O.jsx(xO,{className:"mx-auto mb-4 text-purple-500",size:32}),O.jsx("p",{className:"text-sm font-semibold mb-6",children:c}),O.jsx("button",{onClick:()=>d(""),className:"bg-purple-600 px-8 py-3 rounded-xl text-xs font-bold uppercase",children:"Anladım"})]})]})})}function WO(){const[t,e]=D.useState(null),[n,r]=D.useState(!1),[i,s]=D.useState(""),[o,l]=D.useState([]),[u,c]=D.useState(!0);D.useEffect(()=>{const p=_P(at,m=>{e(m),c(!1)});return()=>p()},[]),D.useEffect(()=>{const m=setTimeout(async()=>{if(i.trim().length<1){l([]);return}try{const _=gs(ps(xr,"users"),Zo("nickname"),FD(i),jD(i+""),Lp(5)),A=await jp(_);l(A.docs.map(k=>({id:k.id,...k.data()})))}catch(_){console.error("Arama hatası:",_)}},300);return()=>clearTimeout(m)},[i]);const d=()=>{vP(at),window.location.href="/"};return u?null:O.jsx(yA,{children:O.jsxs("div",{className:"min-h-screen bg-[#0a0a0c] text-white",children:[O.jsxs("nav",{className:"fixed top-0 w-full h-20 border-b border-white/5 bg-[#0a0a0c]/80 backdrop-blur-xl z-[100] px-8 flex justify-between items-center",children:[O.jsx(er,{to:"/",className:"text-xl font-black italic tracking-tighter hover:text-purple-500 transition-all",children:"zahid.life"}),O.jsxs("div",{className:"hidden md:flex flex-1 max-w-md mx-10 relative",children:[O.jsx(OO,{className:"absolute left-4 top-1/2 -translate-y-1/2 opacity-20",size:18}),O.jsx("input",{type:"text",placeholder:"Kullanıcı ara...",value:i,onChange:p=>s(p.target.value),className:"w-full bg-white/5 border border-white/10 py-2.5 pl-12 pr-4 rounded-full outline-none focus:border-purple-600 font-bold text-sm"}),o.length>0&&O.jsx("div",{className:"absolute top-14 left-0 w-full bg-[#12121a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-[200]",children:o.map(p=>O.jsxs(er,{to:`/user/${p.nickname}`,onClick:()=>s(""),className:"flex items-center gap-3 p-4 hover:bg-white/5 border-b border-white/5 last:border-0 group",children:[O.jsx("div",{className:"w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center font-bold text-xs uppercase transition-colors group-hover:bg-purple-500",children:p.nickname?p.nickname[0]:"?"}),O.jsx("span",{className:"font-bold text-sm",children:p.nickname})]},p.id))})]}),O.jsx("div",{className:"flex items-center gap-3",children:t?O.jsxs(O.Fragment,{children:[O.jsx(er,{to:"/notifications",className:"p-2.5 bg-white/5 hover:bg-white/10 rounded-full transition-all text-white/40",children:O.jsx(qT,{size:20})}),t.email==="info@zahid.life"&&O.jsx(er,{to:"/admin",className:"p-2.5 bg-purple-600/10 text-purple-500 rounded-full border border-purple-500/20 hover:bg-purple-600/20 transition-all",children:O.jsx(LO,{size:20})}),O.jsxs(er,{to:"/profile",className:"flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:border-purple-500/50 transition-all",children:[O.jsx("span",{className:"text-[10px] font-black uppercase tracking-widest",children:t.displayName||"Profil"}),O.jsx(FO,{size:16})]}),O.jsx("button",{onClick:d,className:"p-2.5 bg-red-500/10 text-red-500 rounded-full hover:bg-red-500/20 transition-all border border-red-500/20",children:O.jsx(NO,{size:18})})]}):O.jsx("button",{onClick:()=>r(!0),className:"bg-purple-600 hover:bg-purple-700 px-6 py-2.5 rounded-full text-[10px] font-black tracking-widest uppercase transition-all shadow-lg shadow-purple-600/20 active:scale-95",children:"Giriş Yap"})})]}),O.jsx("div",{className:"pt-24 min-h-screen",children:O.jsxs(GR,{children:[O.jsx(Ri,{path:"/",element:O.jsx(BO,{})}),O.jsx(Ri,{path:"/admin",element:O.jsx($O,{})}),O.jsx(Ri,{path:"/profile",element:t?O.jsx(L_,{}):O.jsx(ey,{to:"/",replace:!0})}),O.jsx(Ri,{path:"/user/:username",element:O.jsx(L_,{})}),O.jsx(Ri,{path:"/notifications",element:t?O.jsx(HO,{}):O.jsx(ey,{to:"/",replace:!0})})]})}),n&&O.jsx(qO,{onClose:()=>r(!1)})]})})}_h.createRoot(document.getElementById("root")).render(O.jsx(UI.StrictMode,{children:O.jsx(WO,{})}));
