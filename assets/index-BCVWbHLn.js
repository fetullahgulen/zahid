(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function mh(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var lc={exports:{}},ds={},ac={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jr=Symbol.for("react.element"),gh=Symbol.for("react.portal"),yh=Symbol.for("react.fragment"),vh=Symbol.for("react.strict_mode"),wh=Symbol.for("react.profiler"),_h=Symbol.for("react.provider"),Eh=Symbol.for("react.context"),Sh=Symbol.for("react.forward_ref"),kh=Symbol.for("react.suspense"),Ih=Symbol.for("react.memo"),Ch=Symbol.for("react.lazy"),Ea=Symbol.iterator;function Th(t){return t===null||typeof t!="object"?null:(t=Ea&&t[Ea]||t["@@iterator"],typeof t=="function"?t:null)}var uc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cc=Object.assign,dc={};function Hn(t,e,n){this.props=t,this.context=e,this.refs=dc,this.updater=n||uc}Hn.prototype.isReactComponent={};Hn.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Hn.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function fc(){}fc.prototype=Hn.prototype;function gl(t,e,n){this.props=t,this.context=e,this.refs=dc,this.updater=n||uc}var yl=gl.prototype=new fc;yl.constructor=gl;cc(yl,Hn.prototype);yl.isPureReactComponent=!0;var Sa=Array.isArray,hc=Object.prototype.hasOwnProperty,vl={current:null},pc={key:!0,ref:!0,__self:!0,__source:!0};function mc(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)hc.call(e,r)&&!pc.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:jr,type:t,key:s,ref:o,props:i,_owner:vl.current}}function Ph(t,e){return{$$typeof:jr,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function wl(t){return typeof t=="object"&&t!==null&&t.$$typeof===jr}function Nh(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ka=/\/+/g;function Ds(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Nh(""+t.key):e.toString(36)}function vi(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case jr:case gh:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ds(o,0):r,Sa(i)?(n="",t!=null&&(n=t.replace(ka,"$&/")+"/"),vi(i,e,n,"",function(u){return u})):i!=null&&(wl(i)&&(i=Ph(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ka,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Sa(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Ds(s,l);o+=vi(s,e,n,a,i)}else if(a=Th(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Ds(s,l++),o+=vi(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Zr(t,e,n){if(t==null)return t;var r=[],i=0;return vi(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Rh(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var de={current:null},wi={transition:null},xh={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:wi,ReactCurrentOwner:vl};function gc(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:Zr,forEach:function(t,e,n){Zr(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Zr(t,function(){e++}),e},toArray:function(t){return Zr(t,function(e){return e})||[]},only:function(t){if(!wl(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};O.Component=Hn;O.Fragment=yh;O.Profiler=wh;O.PureComponent=gl;O.StrictMode=vh;O.Suspense=kh;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xh;O.act=gc;O.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=cc({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=vl.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)hc.call(e,a)&&!pc.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:jr,type:t.type,key:i,ref:s,props:r,_owner:o}};O.createContext=function(t){return t={$$typeof:Eh,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:_h,_context:t},t.Consumer=t};O.createElement=mc;O.createFactory=function(t){var e=mc.bind(null,t);return e.type=t,e};O.createRef=function(){return{current:null}};O.forwardRef=function(t){return{$$typeof:Sh,render:t}};O.isValidElement=wl;O.lazy=function(t){return{$$typeof:Ch,_payload:{_status:-1,_result:t},_init:Rh}};O.memo=function(t,e){return{$$typeof:Ih,type:t,compare:e===void 0?null:e}};O.startTransition=function(t){var e=wi.transition;wi.transition={};try{t()}finally{wi.transition=e}};O.unstable_act=gc;O.useCallback=function(t,e){return de.current.useCallback(t,e)};O.useContext=function(t){return de.current.useContext(t)};O.useDebugValue=function(){};O.useDeferredValue=function(t){return de.current.useDeferredValue(t)};O.useEffect=function(t,e){return de.current.useEffect(t,e)};O.useId=function(){return de.current.useId()};O.useImperativeHandle=function(t,e,n){return de.current.useImperativeHandle(t,e,n)};O.useInsertionEffect=function(t,e){return de.current.useInsertionEffect(t,e)};O.useLayoutEffect=function(t,e){return de.current.useLayoutEffect(t,e)};O.useMemo=function(t,e){return de.current.useMemo(t,e)};O.useReducer=function(t,e,n){return de.current.useReducer(t,e,n)};O.useRef=function(t){return de.current.useRef(t)};O.useState=function(t){return de.current.useState(t)};O.useSyncExternalStore=function(t,e,n){return de.current.useSyncExternalStore(t,e,n)};O.useTransition=function(){return de.current.useTransition()};O.version="18.3.1";ac.exports=O;var Q=ac.exports;const Ah=mh(Q);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oh=Q,Lh=Symbol.for("react.element"),Dh=Symbol.for("react.fragment"),Mh=Object.prototype.hasOwnProperty,Uh=Oh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zh={key:!0,ref:!0,__self:!0,__source:!0};function yc(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Mh.call(e,r)&&!zh.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Lh,type:t,key:s,ref:o,props:i,_owner:Uh.current}}ds.Fragment=Dh;ds.jsx=yc;ds.jsxs=yc;lc.exports=ds;var P=lc.exports,po={},vc={exports:{}},Se={},wc={exports:{}},_c={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,R){var x=I.length;I.push(R);e:for(;0<x;){var K=x-1>>>1,X=I[K];if(0<i(X,R))I[K]=R,I[x]=X,x=K;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var R=I[0],x=I.pop();if(x!==R){I[0]=x;e:for(var K=0,X=I.length,Jr=X>>>1;K<Jr;){var Vt=2*(K+1)-1,Ls=I[Vt],Ht=Vt+1,Xr=I[Ht];if(0>i(Ls,x))Ht<X&&0>i(Xr,Ls)?(I[K]=Xr,I[Ht]=x,K=Ht):(I[K]=Ls,I[Vt]=x,K=Vt);else if(Ht<X&&0>i(Xr,x))I[K]=Xr,I[Ht]=x,K=Ht;else break e}}return R}function i(I,R){var x=I.sortIndex-R.sortIndex;return x!==0?x:I.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],p=1,m=null,d=3,y=!1,w=!1,_=!1,D=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(I){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=I)r(u),R.sortIndex=R.expirationTime,e(a,R);else break;R=n(u)}}function g(I){if(_=!1,h(I),!w)if(n(a)!==null)w=!0,As(S);else{var R=n(u);R!==null&&Os(g,R.startTime-I)}}function S(I,R){w=!1,_&&(_=!1,f(E),E=-1),y=!0;var x=d;try{for(h(R),m=n(a);m!==null&&(!(m.expirationTime>R)||I&&!xe());){var K=m.callback;if(typeof K=="function"){m.callback=null,d=m.priorityLevel;var X=K(m.expirationTime<=R);R=t.unstable_now(),typeof X=="function"?m.callback=X:m===n(a)&&r(a),h(R)}else r(a);m=n(a)}if(m!==null)var Jr=!0;else{var Vt=n(u);Vt!==null&&Os(g,Vt.startTime-R),Jr=!1}return Jr}finally{m=null,d=x,y=!1}}var C=!1,T=null,E=-1,z=5,A=-1;function xe(){return!(t.unstable_now()-A<z)}function Kn(){if(T!==null){var I=t.unstable_now();A=I;var R=!0;try{R=T(!0,I)}finally{R?Gn():(C=!1,T=null)}}else C=!1}var Gn;if(typeof c=="function")Gn=function(){c(Kn)};else if(typeof MessageChannel<"u"){var _a=new MessageChannel,ph=_a.port2;_a.port1.onmessage=Kn,Gn=function(){ph.postMessage(null)}}else Gn=function(){D(Kn,0)};function As(I){T=I,C||(C=!0,Gn())}function Os(I,R){E=D(function(){I(t.unstable_now())},R)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){w||y||(w=!0,As(S))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(I){switch(d){case 1:case 2:case 3:var R=3;break;default:R=d}var x=d;d=R;try{return I()}finally{d=x}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,R){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var x=d;d=I;try{return R()}finally{d=x}},t.unstable_scheduleCallback=function(I,R,x){var K=t.unstable_now();switch(typeof x=="object"&&x!==null?(x=x.delay,x=typeof x=="number"&&0<x?K+x:K):x=K,I){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=x+X,I={id:p++,callback:R,priorityLevel:I,startTime:x,expirationTime:X,sortIndex:-1},x>K?(I.sortIndex=x,e(u,I),n(a)===null&&I===n(u)&&(_?(f(E),E=-1):_=!0,Os(g,x-K))):(I.sortIndex=X,e(a,I),w||y||(w=!0,As(S))),I},t.unstable_shouldYield=xe,t.unstable_wrapCallback=function(I){var R=d;return function(){var x=d;d=R;try{return I.apply(this,arguments)}finally{d=x}}}})(_c);wc.exports=_c;var Fh=wc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jh=Q,Ee=Fh;function v(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ec=new Set,wr={};function sn(t,e){On(t,e),On(t+"Capture",e)}function On(t,e){for(wr[t]=e,t=0;t<e.length;t++)Ec.add(e[t])}var it=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mo=Object.prototype.hasOwnProperty,Bh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ia={},Ca={};function Vh(t){return mo.call(Ca,t)?!0:mo.call(Ia,t)?!1:Bh.test(t)?Ca[t]=!0:(Ia[t]=!0,!1)}function Hh(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function $h(t,e,n,r){if(e===null||typeof e>"u"||Hh(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function fe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){re[t]=new fe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];re[e]=new fe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){re[t]=new fe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){re[t]=new fe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){re[t]=new fe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){re[t]=new fe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){re[t]=new fe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){re[t]=new fe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){re[t]=new fe(t,5,!1,t.toLowerCase(),null,!1,!1)});var _l=/[\-:]([a-z])/g;function El(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_l,El);re[e]=new fe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_l,El);re[e]=new fe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_l,El);re[e]=new fe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){re[t]=new fe(t,1,!1,t.toLowerCase(),null,!1,!1)});re.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){re[t]=new fe(t,1,!1,t.toLowerCase(),null,!0,!0)});function Sl(t,e,n,r){var i=re.hasOwnProperty(e)?re[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&($h(e,n,i,r)&&(n=null),r||i===null?Vh(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ct=jh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ei=Symbol.for("react.element"),un=Symbol.for("react.portal"),cn=Symbol.for("react.fragment"),kl=Symbol.for("react.strict_mode"),go=Symbol.for("react.profiler"),Sc=Symbol.for("react.provider"),kc=Symbol.for("react.context"),Il=Symbol.for("react.forward_ref"),yo=Symbol.for("react.suspense"),vo=Symbol.for("react.suspense_list"),Cl=Symbol.for("react.memo"),pt=Symbol.for("react.lazy"),Ic=Symbol.for("react.offscreen"),Ta=Symbol.iterator;function Qn(t){return t===null||typeof t!="object"?null:(t=Ta&&t[Ta]||t["@@iterator"],typeof t=="function"?t:null)}var W=Object.assign,Ms;function nr(t){if(Ms===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ms=e&&e[1]||""}return`
`+Ms+t}var Us=!1;function zs(t,e){if(!t||Us)return"";Us=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Us=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?nr(t):""}function Wh(t){switch(t.tag){case 5:return nr(t.type);case 16:return nr("Lazy");case 13:return nr("Suspense");case 19:return nr("SuspenseList");case 0:case 2:case 15:return t=zs(t.type,!1),t;case 11:return t=zs(t.type.render,!1),t;case 1:return t=zs(t.type,!0),t;default:return""}}function wo(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case cn:return"Fragment";case un:return"Portal";case go:return"Profiler";case kl:return"StrictMode";case yo:return"Suspense";case vo:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case kc:return(t.displayName||"Context")+".Consumer";case Sc:return(t._context.displayName||"Context")+".Provider";case Il:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Cl:return e=t.displayName||null,e!==null?e:wo(t.type)||"Memo";case pt:e=t._payload,t=t._init;try{return wo(t(e))}catch{}}return null}function bh(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wo(e);case 8:return e===kl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Dt(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Cc(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Kh(t){var e=Cc(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ti(t){t._valueTracker||(t._valueTracker=Kh(t))}function Tc(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Cc(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Di(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _o(t,e){var n=e.checked;return W({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Pa(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Dt(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Pc(t,e){e=e.checked,e!=null&&Sl(t,"checked",e,!1)}function Eo(t,e){Pc(t,e);var n=Dt(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?So(t,e.type,n):e.hasOwnProperty("defaultValue")&&So(t,e.type,Dt(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Na(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function So(t,e,n){(e!=="number"||Di(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var rr=Array.isArray;function Sn(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Dt(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ko(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(v(91));return W({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ra(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(v(92));if(rr(n)){if(1<n.length)throw Error(v(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Dt(n)}}function Nc(t,e){var n=Dt(e.value),r=Dt(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function xa(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Rc(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Io(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Rc(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ni,xc=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ni=ni||document.createElement("div"),ni.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ni.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function _r(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ar={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gh=["Webkit","ms","Moz","O"];Object.keys(ar).forEach(function(t){Gh.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ar[e]=ar[t]})});function Ac(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ar.hasOwnProperty(t)&&ar[t]?(""+e).trim():e+"px"}function Oc(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ac(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Qh=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Co(t,e){if(e){if(Qh[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(v(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(v(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(v(61))}if(e.style!=null&&typeof e.style!="object")throw Error(v(62))}}function To(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Po=null;function Tl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var No=null,kn=null,In=null;function Aa(t){if(t=Hr(t)){if(typeof No!="function")throw Error(v(280));var e=t.stateNode;e&&(e=gs(e),No(t.stateNode,t.type,e))}}function Lc(t){kn?In?In.push(t):In=[t]:kn=t}function Dc(){if(kn){var t=kn,e=In;if(In=kn=null,Aa(t),e)for(t=0;t<e.length;t++)Aa(e[t])}}function Mc(t,e){return t(e)}function Uc(){}var Fs=!1;function zc(t,e,n){if(Fs)return t(e,n);Fs=!0;try{return Mc(t,e,n)}finally{Fs=!1,(kn!==null||In!==null)&&(Uc(),Dc())}}function Er(t,e){var n=t.stateNode;if(n===null)return null;var r=gs(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(v(231,e,typeof n));return n}var Ro=!1;if(it)try{var Yn={};Object.defineProperty(Yn,"passive",{get:function(){Ro=!0}}),window.addEventListener("test",Yn,Yn),window.removeEventListener("test",Yn,Yn)}catch{Ro=!1}function Yh(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(p){this.onError(p)}}var ur=!1,Mi=null,Ui=!1,xo=null,qh={onError:function(t){ur=!0,Mi=t}};function Jh(t,e,n,r,i,s,o,l,a){ur=!1,Mi=null,Yh.apply(qh,arguments)}function Xh(t,e,n,r,i,s,o,l,a){if(Jh.apply(this,arguments),ur){if(ur){var u=Mi;ur=!1,Mi=null}else throw Error(v(198));Ui||(Ui=!0,xo=u)}}function on(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Fc(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Oa(t){if(on(t)!==t)throw Error(v(188))}function Zh(t){var e=t.alternate;if(!e){if(e=on(t),e===null)throw Error(v(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Oa(i),t;if(s===r)return Oa(i),e;s=s.sibling}throw Error(v(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(v(189))}}if(n.alternate!==r)throw Error(v(190))}if(n.tag!==3)throw Error(v(188));return n.stateNode.current===n?t:e}function jc(t){return t=Zh(t),t!==null?Bc(t):null}function Bc(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Bc(t);if(e!==null)return e;t=t.sibling}return null}var Vc=Ee.unstable_scheduleCallback,La=Ee.unstable_cancelCallback,ep=Ee.unstable_shouldYield,tp=Ee.unstable_requestPaint,G=Ee.unstable_now,np=Ee.unstable_getCurrentPriorityLevel,Pl=Ee.unstable_ImmediatePriority,Hc=Ee.unstable_UserBlockingPriority,zi=Ee.unstable_NormalPriority,rp=Ee.unstable_LowPriority,$c=Ee.unstable_IdlePriority,fs=null,We=null;function ip(t){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(fs,t,void 0,(t.current.flags&128)===128)}catch{}}var ze=Math.clz32?Math.clz32:lp,sp=Math.log,op=Math.LN2;function lp(t){return t>>>=0,t===0?32:31-(sp(t)/op|0)|0}var ri=64,ii=4194304;function ir(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fi(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ir(l):(s&=o,s!==0&&(r=ir(s)))}else o=n&~i,o!==0?r=ir(o):s!==0&&(r=ir(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ze(e),i=1<<n,r|=t[n],e&=~i;return r}function ap(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function up(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ze(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=ap(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Ao(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Wc(){var t=ri;return ri<<=1,!(ri&4194240)&&(ri=64),t}function js(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Br(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ze(e),t[e]=n}function cp(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ze(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Nl(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ze(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var M=0;function bc(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Kc,Rl,Gc,Qc,Yc,Oo=!1,si=[],It=null,Ct=null,Tt=null,Sr=new Map,kr=new Map,gt=[],dp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Da(t,e){switch(t){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":Ct=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":Sr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":kr.delete(e.pointerId)}}function qn(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Hr(e),e!==null&&Rl(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function fp(t,e,n,r,i){switch(e){case"focusin":return It=qn(It,t,e,n,r,i),!0;case"dragenter":return Ct=qn(Ct,t,e,n,r,i),!0;case"mouseover":return Tt=qn(Tt,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Sr.set(s,qn(Sr.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,kr.set(s,qn(kr.get(s)||null,t,e,n,r,i)),!0}return!1}function qc(t){var e=Kt(t.target);if(e!==null){var n=on(e);if(n!==null){if(e=n.tag,e===13){if(e=Fc(n),e!==null){t.blockedOn=e,Yc(t.priority,function(){Gc(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _i(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Lo(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Po=r,n.target.dispatchEvent(r),Po=null}else return e=Hr(n),e!==null&&Rl(e),t.blockedOn=n,!1;e.shift()}return!0}function Ma(t,e,n){_i(t)&&n.delete(e)}function hp(){Oo=!1,It!==null&&_i(It)&&(It=null),Ct!==null&&_i(Ct)&&(Ct=null),Tt!==null&&_i(Tt)&&(Tt=null),Sr.forEach(Ma),kr.forEach(Ma)}function Jn(t,e){t.blockedOn===e&&(t.blockedOn=null,Oo||(Oo=!0,Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority,hp)))}function Ir(t){function e(i){return Jn(i,t)}if(0<si.length){Jn(si[0],t);for(var n=1;n<si.length;n++){var r=si[n];r.blockedOn===t&&(r.blockedOn=null)}}for(It!==null&&Jn(It,t),Ct!==null&&Jn(Ct,t),Tt!==null&&Jn(Tt,t),Sr.forEach(e),kr.forEach(e),n=0;n<gt.length;n++)r=gt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<gt.length&&(n=gt[0],n.blockedOn===null);)qc(n),n.blockedOn===null&&gt.shift()}var Cn=ct.ReactCurrentBatchConfig,ji=!0;function pp(t,e,n,r){var i=M,s=Cn.transition;Cn.transition=null;try{M=1,xl(t,e,n,r)}finally{M=i,Cn.transition=s}}function mp(t,e,n,r){var i=M,s=Cn.transition;Cn.transition=null;try{M=4,xl(t,e,n,r)}finally{M=i,Cn.transition=s}}function xl(t,e,n,r){if(ji){var i=Lo(t,e,n,r);if(i===null)Ys(t,e,r,Bi,n),Da(t,r);else if(fp(i,t,e,n,r))r.stopPropagation();else if(Da(t,r),e&4&&-1<dp.indexOf(t)){for(;i!==null;){var s=Hr(i);if(s!==null&&Kc(s),s=Lo(t,e,n,r),s===null&&Ys(t,e,r,Bi,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ys(t,e,r,null,n)}}var Bi=null;function Lo(t,e,n,r){if(Bi=null,t=Tl(r),t=Kt(t),t!==null)if(e=on(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Fc(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Bi=t,null}function Jc(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(np()){case Pl:return 1;case Hc:return 4;case zi:case rp:return 16;case $c:return 536870912;default:return 16}default:return 16}}var St=null,Al=null,Ei=null;function Xc(){if(Ei)return Ei;var t,e=Al,n=e.length,r,i="value"in St?St.value:St.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ei=i.slice(t,1<r?1-r:void 0)}function Si(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function oi(){return!0}function Ua(){return!1}function ke(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?oi:Ua,this.isPropagationStopped=Ua,this}return W(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oi)},persist:function(){},isPersistent:oi}),e}var $n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=ke($n),Vr=W({},$n,{view:0,detail:0}),gp=ke(Vr),Bs,Vs,Xn,hs=W({},Vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ll,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xn&&(Xn&&t.type==="mousemove"?(Bs=t.screenX-Xn.screenX,Vs=t.screenY-Xn.screenY):Vs=Bs=0,Xn=t),Bs)},movementY:function(t){return"movementY"in t?t.movementY:Vs}}),za=ke(hs),yp=W({},hs,{dataTransfer:0}),vp=ke(yp),wp=W({},Vr,{relatedTarget:0}),Hs=ke(wp),_p=W({},$n,{animationName:0,elapsedTime:0,pseudoElement:0}),Ep=ke(_p),Sp=W({},$n,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),kp=ke(Sp),Ip=W({},$n,{data:0}),Fa=ke(Ip),Cp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Np(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Pp[t])?!!e[t]:!1}function Ll(){return Np}var Rp=W({},Vr,{key:function(t){if(t.key){var e=Cp[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Si(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Tp[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ll,charCode:function(t){return t.type==="keypress"?Si(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Si(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xp=ke(Rp),Ap=W({},hs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ja=ke(Ap),Op=W({},Vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ll}),Lp=ke(Op),Dp=W({},$n,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mp=ke(Dp),Up=W({},hs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zp=ke(Up),Fp=[9,13,27,32],Dl=it&&"CompositionEvent"in window,cr=null;it&&"documentMode"in document&&(cr=document.documentMode);var jp=it&&"TextEvent"in window&&!cr,Zc=it&&(!Dl||cr&&8<cr&&11>=cr),Ba=" ",Va=!1;function ed(t,e){switch(t){case"keyup":return Fp.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function td(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var dn=!1;function Bp(t,e){switch(t){case"compositionend":return td(e);case"keypress":return e.which!==32?null:(Va=!0,Ba);case"textInput":return t=e.data,t===Ba&&Va?null:t;default:return null}}function Vp(t,e){if(dn)return t==="compositionend"||!Dl&&ed(t,e)?(t=Xc(),Ei=Al=St=null,dn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Zc&&e.locale!=="ko"?null:e.data;default:return null}}var Hp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ha(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Hp[t.type]:e==="textarea"}function nd(t,e,n,r){Lc(r),e=Vi(e,"onChange"),0<e.length&&(n=new Ol("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var dr=null,Cr=null;function $p(t){hd(t,0)}function ps(t){var e=pn(t);if(Tc(e))return t}function Wp(t,e){if(t==="change")return e}var rd=!1;if(it){var $s;if(it){var Ws="oninput"in document;if(!Ws){var $a=document.createElement("div");$a.setAttribute("oninput","return;"),Ws=typeof $a.oninput=="function"}$s=Ws}else $s=!1;rd=$s&&(!document.documentMode||9<document.documentMode)}function Wa(){dr&&(dr.detachEvent("onpropertychange",id),Cr=dr=null)}function id(t){if(t.propertyName==="value"&&ps(Cr)){var e=[];nd(e,Cr,t,Tl(t)),zc($p,e)}}function bp(t,e,n){t==="focusin"?(Wa(),dr=e,Cr=n,dr.attachEvent("onpropertychange",id)):t==="focusout"&&Wa()}function Kp(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ps(Cr)}function Gp(t,e){if(t==="click")return ps(e)}function Qp(t,e){if(t==="input"||t==="change")return ps(e)}function Yp(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var je=typeof Object.is=="function"?Object.is:Yp;function Tr(t,e){if(je(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!mo.call(e,i)||!je(t[i],e[i]))return!1}return!0}function ba(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ka(t,e){var n=ba(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ba(n)}}function sd(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?sd(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function od(){for(var t=window,e=Di();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Di(t.document)}return e}function Ml(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function qp(t){var e=od(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&sd(n.ownerDocument.documentElement,n)){if(r!==null&&Ml(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ka(n,s);var o=Ka(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Jp=it&&"documentMode"in document&&11>=document.documentMode,fn=null,Do=null,fr=null,Mo=!1;function Ga(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mo||fn==null||fn!==Di(r)||(r=fn,"selectionStart"in r&&Ml(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fr&&Tr(fr,r)||(fr=r,r=Vi(Do,"onSelect"),0<r.length&&(e=new Ol("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=fn)))}function li(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var hn={animationend:li("Animation","AnimationEnd"),animationiteration:li("Animation","AnimationIteration"),animationstart:li("Animation","AnimationStart"),transitionend:li("Transition","TransitionEnd")},bs={},ld={};it&&(ld=document.createElement("div").style,"AnimationEvent"in window||(delete hn.animationend.animation,delete hn.animationiteration.animation,delete hn.animationstart.animation),"TransitionEvent"in window||delete hn.transitionend.transition);function ms(t){if(bs[t])return bs[t];if(!hn[t])return t;var e=hn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ld)return bs[t]=e[n];return t}var ad=ms("animationend"),ud=ms("animationiteration"),cd=ms("animationstart"),dd=ms("transitionend"),fd=new Map,Qa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ut(t,e){fd.set(t,e),sn(e,[t])}for(var Ks=0;Ks<Qa.length;Ks++){var Gs=Qa[Ks],Xp=Gs.toLowerCase(),Zp=Gs[0].toUpperCase()+Gs.slice(1);Ut(Xp,"on"+Zp)}Ut(ad,"onAnimationEnd");Ut(ud,"onAnimationIteration");Ut(cd,"onAnimationStart");Ut("dblclick","onDoubleClick");Ut("focusin","onFocus");Ut("focusout","onBlur");Ut(dd,"onTransitionEnd");On("onMouseEnter",["mouseout","mouseover"]);On("onMouseLeave",["mouseout","mouseover"]);On("onPointerEnter",["pointerout","pointerover"]);On("onPointerLeave",["pointerout","pointerover"]);sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));sn("onBeforeInput",["compositionend","keypress","textInput","paste"]);sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),em=new Set("cancel close invalid load scroll toggle".split(" ").concat(sr));function Ya(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Xh(r,e,void 0,t),t.currentTarget=null}function hd(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Ya(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Ya(i,l,u),s=a}}}if(Ui)throw t=xo,Ui=!1,xo=null,t}function j(t,e){var n=e[Bo];n===void 0&&(n=e[Bo]=new Set);var r=t+"__bubble";n.has(r)||(pd(e,t,2,!1),n.add(r))}function Qs(t,e,n){var r=0;e&&(r|=4),pd(n,t,r,e)}var ai="_reactListening"+Math.random().toString(36).slice(2);function Pr(t){if(!t[ai]){t[ai]=!0,Ec.forEach(function(n){n!=="selectionchange"&&(em.has(n)||Qs(n,!1,t),Qs(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ai]||(e[ai]=!0,Qs("selectionchange",!1,e))}}function pd(t,e,n,r){switch(Jc(e)){case 1:var i=pp;break;case 4:i=mp;break;default:i=xl}n=i.bind(null,e,n,t),i=void 0,!Ro||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ys(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Kt(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}zc(function(){var u=s,p=Tl(n),m=[];e:{var d=fd.get(t);if(d!==void 0){var y=Ol,w=t;switch(t){case"keypress":if(Si(n)===0)break e;case"keydown":case"keyup":y=xp;break;case"focusin":w="focus",y=Hs;break;case"focusout":w="blur",y=Hs;break;case"beforeblur":case"afterblur":y=Hs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=za;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=vp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Lp;break;case ad:case ud:case cd:y=Ep;break;case dd:y=Mp;break;case"scroll":y=gp;break;case"wheel":y=zp;break;case"copy":case"cut":case"paste":y=kp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=ja}var _=(e&4)!==0,D=!_&&t==="scroll",f=_?d!==null?d+"Capture":null:d;_=[];for(var c=u,h;c!==null;){h=c;var g=h.stateNode;if(h.tag===5&&g!==null&&(h=g,f!==null&&(g=Er(c,f),g!=null&&_.push(Nr(c,g,h)))),D)break;c=c.return}0<_.length&&(d=new y(d,w,null,n,p),m.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",d&&n!==Po&&(w=n.relatedTarget||n.fromElement)&&(Kt(w)||w[st]))break e;if((y||d)&&(d=p.window===p?p:(d=p.ownerDocument)?d.defaultView||d.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=u,w=w?Kt(w):null,w!==null&&(D=on(w),w!==D||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=u),y!==w)){if(_=za,g="onMouseLeave",f="onMouseEnter",c="mouse",(t==="pointerout"||t==="pointerover")&&(_=ja,g="onPointerLeave",f="onPointerEnter",c="pointer"),D=y==null?d:pn(y),h=w==null?d:pn(w),d=new _(g,c+"leave",y,n,p),d.target=D,d.relatedTarget=h,g=null,Kt(p)===u&&(_=new _(f,c+"enter",w,n,p),_.target=h,_.relatedTarget=D,g=_),D=g,y&&w)t:{for(_=y,f=w,c=0,h=_;h;h=an(h))c++;for(h=0,g=f;g;g=an(g))h++;for(;0<c-h;)_=an(_),c--;for(;0<h-c;)f=an(f),h--;for(;c--;){if(_===f||f!==null&&_===f.alternate)break t;_=an(_),f=an(f)}_=null}else _=null;y!==null&&qa(m,d,y,_,!1),w!==null&&D!==null&&qa(m,D,w,_,!0)}}e:{if(d=u?pn(u):window,y=d.nodeName&&d.nodeName.toLowerCase(),y==="select"||y==="input"&&d.type==="file")var S=Wp;else if(Ha(d))if(rd)S=Qp;else{S=Kp;var C=bp}else(y=d.nodeName)&&y.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=Gp);if(S&&(S=S(t,u))){nd(m,S,n,p);break e}C&&C(t,d,u),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&So(d,"number",d.value)}switch(C=u?pn(u):window,t){case"focusin":(Ha(C)||C.contentEditable==="true")&&(fn=C,Do=u,fr=null);break;case"focusout":fr=Do=fn=null;break;case"mousedown":Mo=!0;break;case"contextmenu":case"mouseup":case"dragend":Mo=!1,Ga(m,n,p);break;case"selectionchange":if(Jp)break;case"keydown":case"keyup":Ga(m,n,p)}var T;if(Dl)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else dn?ed(t,n)&&(E="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Zc&&n.locale!=="ko"&&(dn||E!=="onCompositionStart"?E==="onCompositionEnd"&&dn&&(T=Xc()):(St=p,Al="value"in St?St.value:St.textContent,dn=!0)),C=Vi(u,E),0<C.length&&(E=new Fa(E,t,null,n,p),m.push({event:E,listeners:C}),T?E.data=T:(T=td(n),T!==null&&(E.data=T)))),(T=jp?Bp(t,n):Vp(t,n))&&(u=Vi(u,"onBeforeInput"),0<u.length&&(p=new Fa("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:u}),p.data=T))}hd(m,e)})}function Nr(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Vi(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Er(t,n),s!=null&&r.unshift(Nr(t,s,i)),s=Er(t,e),s!=null&&r.push(Nr(t,s,i))),t=t.return}return r}function an(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function qa(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Er(n,s),a!=null&&o.unshift(Nr(n,a,l))):i||(a=Er(n,s),a!=null&&o.push(Nr(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var tm=/\r\n?/g,nm=/\u0000|\uFFFD/g;function Ja(t){return(typeof t=="string"?t:""+t).replace(tm,`
`).replace(nm,"")}function ui(t,e,n){if(e=Ja(e),Ja(t)!==e&&n)throw Error(v(425))}function Hi(){}var Uo=null,zo=null;function Fo(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var jo=typeof setTimeout=="function"?setTimeout:void 0,rm=typeof clearTimeout=="function"?clearTimeout:void 0,Xa=typeof Promise=="function"?Promise:void 0,im=typeof queueMicrotask=="function"?queueMicrotask:typeof Xa<"u"?function(t){return Xa.resolve(null).then(t).catch(sm)}:jo;function sm(t){setTimeout(function(){throw t})}function qs(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ir(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ir(e)}function Pt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Za(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Wn=Math.random().toString(36).slice(2),$e="__reactFiber$"+Wn,Rr="__reactProps$"+Wn,st="__reactContainer$"+Wn,Bo="__reactEvents$"+Wn,om="__reactListeners$"+Wn,lm="__reactHandles$"+Wn;function Kt(t){var e=t[$e];if(e)return e;for(var n=t.parentNode;n;){if(e=n[st]||n[$e]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Za(t);t!==null;){if(n=t[$e])return n;t=Za(t)}return e}t=n,n=t.parentNode}return null}function Hr(t){return t=t[$e]||t[st],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function pn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(v(33))}function gs(t){return t[Rr]||null}var Vo=[],mn=-1;function zt(t){return{current:t}}function B(t){0>mn||(t.current=Vo[mn],Vo[mn]=null,mn--)}function F(t,e){mn++,Vo[mn]=t.current,t.current=e}var Mt={},le=zt(Mt),me=zt(!1),Jt=Mt;function Ln(t,e){var n=t.type.contextTypes;if(!n)return Mt;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ge(t){return t=t.childContextTypes,t!=null}function $i(){B(me),B(le)}function eu(t,e,n){if(le.current!==Mt)throw Error(v(168));F(le,e),F(me,n)}function md(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(v(108,bh(t)||"Unknown",i));return W({},n,r)}function Wi(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mt,Jt=le.current,F(le,t),F(me,me.current),!0}function tu(t,e,n){var r=t.stateNode;if(!r)throw Error(v(169));n?(t=md(t,e,Jt),r.__reactInternalMemoizedMergedChildContext=t,B(me),B(le),F(le,t)):B(me),F(me,n)}var Je=null,ys=!1,Js=!1;function gd(t){Je===null?Je=[t]:Je.push(t)}function am(t){ys=!0,gd(t)}function Ft(){if(!Js&&Je!==null){Js=!0;var t=0,e=M;try{var n=Je;for(M=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Je=null,ys=!1}catch(i){throw Je!==null&&(Je=Je.slice(t+1)),Vc(Pl,Ft),i}finally{M=e,Js=!1}}return null}var gn=[],yn=0,bi=null,Ki=0,Ie=[],Ce=0,Xt=null,Xe=1,Ze="";function $t(t,e){gn[yn++]=Ki,gn[yn++]=bi,bi=t,Ki=e}function yd(t,e,n){Ie[Ce++]=Xe,Ie[Ce++]=Ze,Ie[Ce++]=Xt,Xt=t;var r=Xe;t=Ze;var i=32-ze(r)-1;r&=~(1<<i),n+=1;var s=32-ze(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Xe=1<<32-ze(e)+i|n<<i|r,Ze=s+t}else Xe=1<<s|n<<i|r,Ze=t}function Ul(t){t.return!==null&&($t(t,1),yd(t,1,0))}function zl(t){for(;t===bi;)bi=gn[--yn],gn[yn]=null,Ki=gn[--yn],gn[yn]=null;for(;t===Xt;)Xt=Ie[--Ce],Ie[Ce]=null,Ze=Ie[--Ce],Ie[Ce]=null,Xe=Ie[--Ce],Ie[Ce]=null}var _e=null,we=null,V=!1,De=null;function vd(t,e){var n=Te(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function nu(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,_e=t,we=Pt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,_e=t,we=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Xt!==null?{id:Xe,overflow:Ze}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Te(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,_e=t,we=null,!0):!1;default:return!1}}function Ho(t){return(t.mode&1)!==0&&(t.flags&128)===0}function $o(t){if(V){var e=we;if(e){var n=e;if(!nu(t,e)){if(Ho(t))throw Error(v(418));e=Pt(n.nextSibling);var r=_e;e&&nu(t,e)?vd(r,n):(t.flags=t.flags&-4097|2,V=!1,_e=t)}}else{if(Ho(t))throw Error(v(418));t.flags=t.flags&-4097|2,V=!1,_e=t}}}function ru(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;_e=t}function ci(t){if(t!==_e)return!1;if(!V)return ru(t),V=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Fo(t.type,t.memoizedProps)),e&&(e=we)){if(Ho(t))throw wd(),Error(v(418));for(;e;)vd(t,e),e=Pt(e.nextSibling)}if(ru(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(v(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){we=Pt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}we=null}}else we=_e?Pt(t.stateNode.nextSibling):null;return!0}function wd(){for(var t=we;t;)t=Pt(t.nextSibling)}function Dn(){we=_e=null,V=!1}function Fl(t){De===null?De=[t]:De.push(t)}var um=ct.ReactCurrentBatchConfig;function Zn(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(v(309));var r=n.stateNode}if(!r)throw Error(v(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(v(284));if(!n._owner)throw Error(v(290,t))}return t}function di(t,e){throw t=Object.prototype.toString.call(e),Error(v(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function iu(t){var e=t._init;return e(t._payload)}function _d(t){function e(f,c){if(t){var h=f.deletions;h===null?(f.deletions=[c],f.flags|=16):h.push(c)}}function n(f,c){if(!t)return null;for(;c!==null;)e(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=At(f,c),f.index=0,f.sibling=null,f}function s(f,c,h){return f.index=h,t?(h=f.alternate,h!==null?(h=h.index,h<c?(f.flags|=2,c):h):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function l(f,c,h,g){return c===null||c.tag!==6?(c=io(h,f.mode,g),c.return=f,c):(c=i(c,h),c.return=f,c)}function a(f,c,h,g){var S=h.type;return S===cn?p(f,c,h.props.children,g,h.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===pt&&iu(S)===c.type)?(g=i(c,h.props),g.ref=Zn(f,c,h),g.return=f,g):(g=Ri(h.type,h.key,h.props,null,f.mode,g),g.ref=Zn(f,c,h),g.return=f,g)}function u(f,c,h,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=so(h,f.mode,g),c.return=f,c):(c=i(c,h.children||[]),c.return=f,c)}function p(f,c,h,g,S){return c===null||c.tag!==7?(c=qt(h,f.mode,g,S),c.return=f,c):(c=i(c,h),c.return=f,c)}function m(f,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=io(""+c,f.mode,h),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ei:return h=Ri(c.type,c.key,c.props,null,f.mode,h),h.ref=Zn(f,null,c),h.return=f,h;case un:return c=so(c,f.mode,h),c.return=f,c;case pt:var g=c._init;return m(f,g(c._payload),h)}if(rr(c)||Qn(c))return c=qt(c,f.mode,h,null),c.return=f,c;di(f,c)}return null}function d(f,c,h,g){var S=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:l(f,c,""+h,g);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ei:return h.key===S?a(f,c,h,g):null;case un:return h.key===S?u(f,c,h,g):null;case pt:return S=h._init,d(f,c,S(h._payload),g)}if(rr(h)||Qn(h))return S!==null?null:p(f,c,h,g,null);di(f,h)}return null}function y(f,c,h,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(h)||null,l(c,f,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ei:return f=f.get(g.key===null?h:g.key)||null,a(c,f,g,S);case un:return f=f.get(g.key===null?h:g.key)||null,u(c,f,g,S);case pt:var C=g._init;return y(f,c,h,C(g._payload),S)}if(rr(g)||Qn(g))return f=f.get(h)||null,p(c,f,g,S,null);di(c,g)}return null}function w(f,c,h,g){for(var S=null,C=null,T=c,E=c=0,z=null;T!==null&&E<h.length;E++){T.index>E?(z=T,T=null):z=T.sibling;var A=d(f,T,h[E],g);if(A===null){T===null&&(T=z);break}t&&T&&A.alternate===null&&e(f,T),c=s(A,c,E),C===null?S=A:C.sibling=A,C=A,T=z}if(E===h.length)return n(f,T),V&&$t(f,E),S;if(T===null){for(;E<h.length;E++)T=m(f,h[E],g),T!==null&&(c=s(T,c,E),C===null?S=T:C.sibling=T,C=T);return V&&$t(f,E),S}for(T=r(f,T);E<h.length;E++)z=y(T,f,E,h[E],g),z!==null&&(t&&z.alternate!==null&&T.delete(z.key===null?E:z.key),c=s(z,c,E),C===null?S=z:C.sibling=z,C=z);return t&&T.forEach(function(xe){return e(f,xe)}),V&&$t(f,E),S}function _(f,c,h,g){var S=Qn(h);if(typeof S!="function")throw Error(v(150));if(h=S.call(h),h==null)throw Error(v(151));for(var C=S=null,T=c,E=c=0,z=null,A=h.next();T!==null&&!A.done;E++,A=h.next()){T.index>E?(z=T,T=null):z=T.sibling;var xe=d(f,T,A.value,g);if(xe===null){T===null&&(T=z);break}t&&T&&xe.alternate===null&&e(f,T),c=s(xe,c,E),C===null?S=xe:C.sibling=xe,C=xe,T=z}if(A.done)return n(f,T),V&&$t(f,E),S;if(T===null){for(;!A.done;E++,A=h.next())A=m(f,A.value,g),A!==null&&(c=s(A,c,E),C===null?S=A:C.sibling=A,C=A);return V&&$t(f,E),S}for(T=r(f,T);!A.done;E++,A=h.next())A=y(T,f,E,A.value,g),A!==null&&(t&&A.alternate!==null&&T.delete(A.key===null?E:A.key),c=s(A,c,E),C===null?S=A:C.sibling=A,C=A);return t&&T.forEach(function(Kn){return e(f,Kn)}),V&&$t(f,E),S}function D(f,c,h,g){if(typeof h=="object"&&h!==null&&h.type===cn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case ei:e:{for(var S=h.key,C=c;C!==null;){if(C.key===S){if(S=h.type,S===cn){if(C.tag===7){n(f,C.sibling),c=i(C,h.props.children),c.return=f,f=c;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===pt&&iu(S)===C.type){n(f,C.sibling),c=i(C,h.props),c.ref=Zn(f,C,h),c.return=f,f=c;break e}n(f,C);break}else e(f,C);C=C.sibling}h.type===cn?(c=qt(h.props.children,f.mode,g,h.key),c.return=f,f=c):(g=Ri(h.type,h.key,h.props,null,f.mode,g),g.ref=Zn(f,c,h),g.return=f,f=g)}return o(f);case un:e:{for(C=h.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(f,c.sibling),c=i(c,h.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else e(f,c);c=c.sibling}c=so(h,f.mode,g),c.return=f,f=c}return o(f);case pt:return C=h._init,D(f,c,C(h._payload),g)}if(rr(h))return w(f,c,h,g);if(Qn(h))return _(f,c,h,g);di(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,h),c.return=f,f=c):(n(f,c),c=io(h,f.mode,g),c.return=f,f=c),o(f)):n(f,c)}return D}var Mn=_d(!0),Ed=_d(!1),Gi=zt(null),Qi=null,vn=null,jl=null;function Bl(){jl=vn=Qi=null}function Vl(t){var e=Gi.current;B(Gi),t._currentValue=e}function Wo(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Tn(t,e){Qi=t,jl=vn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pe=!0),t.firstContext=null)}function Ne(t){var e=t._currentValue;if(jl!==t)if(t={context:t,memoizedValue:e,next:null},vn===null){if(Qi===null)throw Error(v(308));vn=t,Qi.dependencies={lanes:0,firstContext:t}}else vn=vn.next=t;return e}var Gt=null;function Hl(t){Gt===null?Gt=[t]:Gt.push(t)}function Sd(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Hl(e)):(n.next=i.next,i.next=n),e.interleaved=n,ot(t,r)}function ot(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var mt=!1;function $l(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kd(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function nt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Nt(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ot(t,n)}return i=r.interleaved,i===null?(e.next=e,Hl(r)):(e.next=i.next,i.next=e),r.interleaved=e,ot(t,n)}function ki(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Nl(t,n)}}function su(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Yi(t,e,n,r){var i=t.updateQueue;mt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=u:l.next=u,p.lastBaseUpdate=a))}if(s!==null){var m=i.baseState;o=0,p=u=a=null,l=s;do{var d=l.lane,y=l.eventTime;if((r&d)===d){p!==null&&(p=p.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=t,_=l;switch(d=e,y=n,_.tag){case 1:if(w=_.payload,typeof w=="function"){m=w.call(y,m,d);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=_.payload,d=typeof w=="function"?w.call(y,m,d):w,d==null)break e;m=W({},m,d);break e;case 2:mt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[l]:d.push(l))}else y={eventTime:y,lane:d,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(u=p=y,a=m):p=p.next=y,o|=d;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;d=l,l=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(p===null&&(a=m),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);en|=o,t.lanes=o,t.memoizedState=m}}function ou(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(v(191,i));i.call(r)}}}var $r={},be=zt($r),xr=zt($r),Ar=zt($r);function Qt(t){if(t===$r)throw Error(v(174));return t}function Wl(t,e){switch(F(Ar,e),F(xr,t),F(be,$r),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Io(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Io(e,t)}B(be),F(be,e)}function Un(){B(be),B(xr),B(Ar)}function Id(t){Qt(Ar.current);var e=Qt(be.current),n=Io(e,t.type);e!==n&&(F(xr,t),F(be,n))}function bl(t){xr.current===t&&(B(be),B(xr))}var H=zt(0);function qi(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xs=[];function Kl(){for(var t=0;t<Xs.length;t++)Xs[t]._workInProgressVersionPrimary=null;Xs.length=0}var Ii=ct.ReactCurrentDispatcher,Zs=ct.ReactCurrentBatchConfig,Zt=0,$=null,q=null,Z=null,Ji=!1,hr=!1,Or=0,cm=0;function ie(){throw Error(v(321))}function Gl(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!je(t[n],e[n]))return!1;return!0}function Ql(t,e,n,r,i,s){if(Zt=s,$=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ii.current=t===null||t.memoizedState===null?pm:mm,t=n(r,i),hr){s=0;do{if(hr=!1,Or=0,25<=s)throw Error(v(301));s+=1,Z=q=null,e.updateQueue=null,Ii.current=gm,t=n(r,i)}while(hr)}if(Ii.current=Xi,e=q!==null&&q.next!==null,Zt=0,Z=q=$=null,Ji=!1,e)throw Error(v(300));return t}function Yl(){var t=Or!==0;return Or=0,t}function He(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?$.memoizedState=Z=t:Z=Z.next=t,Z}function Re(){if(q===null){var t=$.alternate;t=t!==null?t.memoizedState:null}else t=q.next;var e=Z===null?$.memoizedState:Z.next;if(e!==null)Z=e,q=t;else{if(t===null)throw Error(v(310));q=t,t={memoizedState:q.memoizedState,baseState:q.baseState,baseQueue:q.baseQueue,queue:q.queue,next:null},Z===null?$.memoizedState=Z=t:Z=Z.next=t}return Z}function Lr(t,e){return typeof e=="function"?e(t):e}function eo(t){var e=Re(),n=e.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=t;var r=q,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var p=u.lane;if((Zt&p)===p)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var m={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=m,o=r):a=a.next=m,$.lanes|=p,en|=p}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,je(r,e.memoizedState)||(pe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,$.lanes|=s,en|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function to(t){var e=Re(),n=e.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);je(s,e.memoizedState)||(pe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Cd(){}function Td(t,e){var n=$,r=Re(),i=e(),s=!je(r.memoizedState,i);if(s&&(r.memoizedState=i,pe=!0),r=r.queue,ql(Rd.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,Dr(9,Nd.bind(null,n,r,i,e),void 0,null),ee===null)throw Error(v(349));Zt&30||Pd(n,e,i)}return i}function Pd(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=$.updateQueue,e===null?(e={lastEffect:null,stores:null},$.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Nd(t,e,n,r){e.value=n,e.getSnapshot=r,xd(e)&&Ad(t)}function Rd(t,e,n){return n(function(){xd(e)&&Ad(t)})}function xd(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!je(t,n)}catch{return!0}}function Ad(t){var e=ot(t,1);e!==null&&Fe(e,t,1,-1)}function lu(t){var e=He();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lr,lastRenderedState:t},e.queue=t,t=t.dispatch=hm.bind(null,$,t),[e.memoizedState,t]}function Dr(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=$.updateQueue,e===null?(e={lastEffect:null,stores:null},$.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Od(){return Re().memoizedState}function Ci(t,e,n,r){var i=He();$.flags|=t,i.memoizedState=Dr(1|e,n,void 0,r===void 0?null:r)}function vs(t,e,n,r){var i=Re();r=r===void 0?null:r;var s=void 0;if(q!==null){var o=q.memoizedState;if(s=o.destroy,r!==null&&Gl(r,o.deps)){i.memoizedState=Dr(e,n,s,r);return}}$.flags|=t,i.memoizedState=Dr(1|e,n,s,r)}function au(t,e){return Ci(8390656,8,t,e)}function ql(t,e){return vs(2048,8,t,e)}function Ld(t,e){return vs(4,2,t,e)}function Dd(t,e){return vs(4,4,t,e)}function Md(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ud(t,e,n){return n=n!=null?n.concat([t]):null,vs(4,4,Md.bind(null,e,t),n)}function Jl(){}function zd(t,e){var n=Re();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gl(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Fd(t,e){var n=Re();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gl(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function jd(t,e,n){return Zt&21?(je(n,e)||(n=Wc(),$.lanes|=n,en|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pe=!0),t.memoizedState=n)}function dm(t,e){var n=M;M=n!==0&&4>n?n:4,t(!0);var r=Zs.transition;Zs.transition={};try{t(!1),e()}finally{M=n,Zs.transition=r}}function Bd(){return Re().memoizedState}function fm(t,e,n){var r=xt(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Vd(t))Hd(e,n);else if(n=Sd(t,e,n,r),n!==null){var i=ue();Fe(n,t,r,i),$d(n,e,r)}}function hm(t,e,n){var r=xt(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vd(t))Hd(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,je(l,o)){var a=e.interleaved;a===null?(i.next=i,Hl(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Sd(t,e,i,r),n!==null&&(i=ue(),Fe(n,t,r,i),$d(n,e,r))}}function Vd(t){var e=t.alternate;return t===$||e!==null&&e===$}function Hd(t,e){hr=Ji=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function $d(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Nl(t,n)}}var Xi={readContext:Ne,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},pm={readContext:Ne,useCallback:function(t,e){return He().memoizedState=[t,e===void 0?null:e],t},useContext:Ne,useEffect:au,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ci(4194308,4,Md.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ci(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ci(4,2,t,e)},useMemo:function(t,e){var n=He();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=He();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=fm.bind(null,$,t),[r.memoizedState,t]},useRef:function(t){var e=He();return t={current:t},e.memoizedState=t},useState:lu,useDebugValue:Jl,useDeferredValue:function(t){return He().memoizedState=t},useTransition:function(){var t=lu(!1),e=t[0];return t=dm.bind(null,t[1]),He().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=$,i=He();if(V){if(n===void 0)throw Error(v(407));n=n()}else{if(n=e(),ee===null)throw Error(v(349));Zt&30||Pd(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,au(Rd.bind(null,r,s,t),[t]),r.flags|=2048,Dr(9,Nd.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=He(),e=ee.identifierPrefix;if(V){var n=Ze,r=Xe;n=(r&~(1<<32-ze(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Or++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=cm++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},mm={readContext:Ne,useCallback:zd,useContext:Ne,useEffect:ql,useImperativeHandle:Ud,useInsertionEffect:Ld,useLayoutEffect:Dd,useMemo:Fd,useReducer:eo,useRef:Od,useState:function(){return eo(Lr)},useDebugValue:Jl,useDeferredValue:function(t){var e=Re();return jd(e,q.memoizedState,t)},useTransition:function(){var t=eo(Lr)[0],e=Re().memoizedState;return[t,e]},useMutableSource:Cd,useSyncExternalStore:Td,useId:Bd,unstable_isNewReconciler:!1},gm={readContext:Ne,useCallback:zd,useContext:Ne,useEffect:ql,useImperativeHandle:Ud,useInsertionEffect:Ld,useLayoutEffect:Dd,useMemo:Fd,useReducer:to,useRef:Od,useState:function(){return to(Lr)},useDebugValue:Jl,useDeferredValue:function(t){var e=Re();return q===null?e.memoizedState=t:jd(e,q.memoizedState,t)},useTransition:function(){var t=to(Lr)[0],e=Re().memoizedState;return[t,e]},useMutableSource:Cd,useSyncExternalStore:Td,useId:Bd,unstable_isNewReconciler:!1};function Oe(t,e){if(t&&t.defaultProps){e=W({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function bo(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:W({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ws={isMounted:function(t){return(t=t._reactInternals)?on(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ue(),i=xt(t),s=nt(r,i);s.payload=e,n!=null&&(s.callback=n),e=Nt(t,s,i),e!==null&&(Fe(e,t,i,r),ki(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ue(),i=xt(t),s=nt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Nt(t,s,i),e!==null&&(Fe(e,t,i,r),ki(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ue(),r=xt(t),i=nt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Nt(t,i,r),e!==null&&(Fe(e,t,r,n),ki(e,t,r))}};function uu(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Tr(n,r)||!Tr(i,s):!0}function Wd(t,e,n){var r=!1,i=Mt,s=e.contextType;return typeof s=="object"&&s!==null?s=Ne(s):(i=ge(e)?Jt:le.current,r=e.contextTypes,s=(r=r!=null)?Ln(t,i):Mt),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ws,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function cu(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ws.enqueueReplaceState(e,e.state,null)}function Ko(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},$l(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ne(s):(s=ge(e)?Jt:le.current,i.context=Ln(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(bo(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ws.enqueueReplaceState(i,i.state,null),Yi(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function zn(t,e){try{var n="",r=e;do n+=Wh(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function no(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Go(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ym=typeof WeakMap=="function"?WeakMap:Map;function bd(t,e,n){n=nt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){es||(es=!0,rl=r),Go(t,e)},n}function Kd(t,e,n){n=nt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Go(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Go(t,e),typeof r!="function"&&(Rt===null?Rt=new Set([this]):Rt.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function du(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ym;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Am.bind(null,t,e,n),e.then(t,t))}function fu(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function hu(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=nt(-1,1),e.tag=2,Nt(n,e,1))),n.lanes|=1),t)}var vm=ct.ReactCurrentOwner,pe=!1;function ae(t,e,n,r){e.child=t===null?Ed(e,null,n,r):Mn(e,t.child,n,r)}function pu(t,e,n,r,i){n=n.render;var s=e.ref;return Tn(e,i),r=Ql(t,e,n,r,s,i),n=Yl(),t!==null&&!pe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,lt(t,e,i)):(V&&n&&Ul(e),e.flags|=1,ae(t,e,r,i),e.child)}function mu(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!sa(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Gd(t,e,s,r,i)):(t=Ri(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Tr,n(o,r)&&t.ref===e.ref)return lt(t,e,i)}return e.flags|=1,t=At(s,r),t.ref=e.ref,t.return=e,e.child=t}function Gd(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Tr(s,r)&&t.ref===e.ref)if(pe=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(pe=!0);else return e.lanes=t.lanes,lt(t,e,i)}return Qo(t,e,n,r,i)}function Qd(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(_n,ve),ve|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,F(_n,ve),ve|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,F(_n,ve),ve|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,F(_n,ve),ve|=r;return ae(t,e,i,n),e.child}function Yd(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Qo(t,e,n,r,i){var s=ge(n)?Jt:le.current;return s=Ln(e,s),Tn(e,i),n=Ql(t,e,n,r,s,i),r=Yl(),t!==null&&!pe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,lt(t,e,i)):(V&&r&&Ul(e),e.flags|=1,ae(t,e,n,i),e.child)}function gu(t,e,n,r,i){if(ge(n)){var s=!0;Wi(e)}else s=!1;if(Tn(e,i),e.stateNode===null)Ti(t,e),Wd(e,n,r),Ko(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ne(u):(u=ge(n)?Jt:le.current,u=Ln(e,u));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&cu(e,o,r,u),mt=!1;var d=e.memoizedState;o.state=d,Yi(e,r,o,i),a=e.memoizedState,l!==r||d!==a||me.current||mt?(typeof p=="function"&&(bo(e,n,p,r),a=e.memoizedState),(l=mt||uu(e,n,l,r,d,a,u))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,kd(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:Oe(e.type,l),o.props=u,m=e.pendingProps,d=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ne(a):(a=ge(n)?Jt:le.current,a=Ln(e,a));var y=n.getDerivedStateFromProps;(p=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||d!==a)&&cu(e,o,r,a),mt=!1,d=e.memoizedState,o.state=d,Yi(e,r,o,i);var w=e.memoizedState;l!==m||d!==w||me.current||mt?(typeof y=="function"&&(bo(e,n,y,r),w=e.memoizedState),(u=mt||uu(e,n,u,r,d,w,a)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),o.props=r,o.state=w,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Yo(t,e,n,r,s,i)}function Yo(t,e,n,r,i,s){Yd(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&tu(e,n,!1),lt(t,e,s);r=e.stateNode,vm.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Mn(e,t.child,null,s),e.child=Mn(e,null,l,s)):ae(t,e,l,s),e.memoizedState=r.state,i&&tu(e,n,!0),e.child}function qd(t){var e=t.stateNode;e.pendingContext?eu(t,e.pendingContext,e.pendingContext!==e.context):e.context&&eu(t,e.context,!1),Wl(t,e.containerInfo)}function yu(t,e,n,r,i){return Dn(),Fl(i),e.flags|=256,ae(t,e,n,r),e.child}var qo={dehydrated:null,treeContext:null,retryLane:0};function Jo(t){return{baseLanes:t,cachePool:null,transitions:null}}function Jd(t,e,n){var r=e.pendingProps,i=H.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),F(H,i&1),t===null)return $o(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ss(o,r,0,null),t=qt(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Jo(n),e.memoizedState=qo,t):Xl(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return wm(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=At(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=At(l,s):(s=qt(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Jo(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=qo,r}return s=t.child,t=s.sibling,r=At(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Xl(t,e){return e=Ss({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function fi(t,e,n,r){return r!==null&&Fl(r),Mn(e,t.child,null,n),t=Xl(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function wm(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=no(Error(v(422))),fi(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ss({mode:"visible",children:r.children},i,0,null),s=qt(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Mn(e,t.child,null,o),e.child.memoizedState=Jo(o),e.memoizedState=qo,s);if(!(e.mode&1))return fi(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(v(419)),r=no(s,r,void 0),fi(t,e,o,r)}if(l=(o&t.childLanes)!==0,pe||l){if(r=ee,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ot(t,i),Fe(r,t,i,-1))}return ia(),r=no(Error(v(421))),fi(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Om.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,we=Pt(i.nextSibling),_e=e,V=!0,De=null,t!==null&&(Ie[Ce++]=Xe,Ie[Ce++]=Ze,Ie[Ce++]=Xt,Xe=t.id,Ze=t.overflow,Xt=e),e=Xl(e,r.children),e.flags|=4096,e)}function vu(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Wo(t.return,e,n)}function ro(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Xd(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ae(t,e,r.children,n),r=H.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vu(t,n,e);else if(t.tag===19)vu(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(F(H,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&qi(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ro(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&qi(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ro(e,!0,n,null,s);break;case"together":ro(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ti(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function lt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),en|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(v(153));if(e.child!==null){for(t=e.child,n=At(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=At(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function _m(t,e,n){switch(e.tag){case 3:qd(e),Dn();break;case 5:Id(e);break;case 1:ge(e.type)&&Wi(e);break;case 4:Wl(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;F(Gi,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(F(H,H.current&1),e.flags|=128,null):n&e.child.childLanes?Jd(t,e,n):(F(H,H.current&1),t=lt(t,e,n),t!==null?t.sibling:null);F(H,H.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Xd(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),F(H,H.current),r)break;return null;case 22:case 23:return e.lanes=0,Qd(t,e,n)}return lt(t,e,n)}var Zd,Xo,ef,tf;Zd=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xo=function(){};ef=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Qt(be.current);var s=null;switch(n){case"input":i=_o(t,i),r=_o(t,r),s=[];break;case"select":i=W({},i,{value:void 0}),r=W({},r,{value:void 0}),s=[];break;case"textarea":i=ko(t,i),r=ko(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Hi)}Co(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(wr.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(wr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&j("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};tf=function(t,e,n,r){n!==r&&(e.flags|=4)};function er(t,e){if(!V)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function se(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Em(t,e,n){var r=e.pendingProps;switch(zl(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(e),null;case 1:return ge(e.type)&&$i(),se(e),null;case 3:return r=e.stateNode,Un(),B(me),B(le),Kl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ci(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,De!==null&&(ol(De),De=null))),Xo(t,e),se(e),null;case 5:bl(e);var i=Qt(Ar.current);if(n=e.type,t!==null&&e.stateNode!=null)ef(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(v(166));return se(e),null}if(t=Qt(be.current),ci(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[$e]=e,r[Rr]=s,t=(e.mode&1)!==0,n){case"dialog":j("cancel",r),j("close",r);break;case"iframe":case"object":case"embed":j("load",r);break;case"video":case"audio":for(i=0;i<sr.length;i++)j(sr[i],r);break;case"source":j("error",r);break;case"img":case"image":case"link":j("error",r),j("load",r);break;case"details":j("toggle",r);break;case"input":Pa(r,s),j("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},j("invalid",r);break;case"textarea":Ra(r,s),j("invalid",r)}Co(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ui(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ui(r.textContent,l,t),i=["children",""+l]):wr.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&j("scroll",r)}switch(n){case"input":ti(r),Na(r,s,!0);break;case"textarea":ti(r),xa(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Hi)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Rc(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[$e]=e,t[Rr]=r,Zd(t,e,!1,!1),e.stateNode=t;e:{switch(o=To(n,r),n){case"dialog":j("cancel",t),j("close",t),i=r;break;case"iframe":case"object":case"embed":j("load",t),i=r;break;case"video":case"audio":for(i=0;i<sr.length;i++)j(sr[i],t);i=r;break;case"source":j("error",t),i=r;break;case"img":case"image":case"link":j("error",t),j("load",t),i=r;break;case"details":j("toggle",t),i=r;break;case"input":Pa(t,r),i=_o(t,r),j("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=W({},r,{value:void 0}),j("invalid",t);break;case"textarea":Ra(t,r),i=ko(t,r),j("invalid",t);break;default:i=r}Co(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Oc(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&xc(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&_r(t,a):typeof a=="number"&&_r(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(wr.hasOwnProperty(s)?a!=null&&s==="onScroll"&&j("scroll",t):a!=null&&Sl(t,s,a,o))}switch(n){case"input":ti(t),Na(t,r,!1);break;case"textarea":ti(t),xa(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Dt(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Sn(t,!!r.multiple,s,!1):r.defaultValue!=null&&Sn(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Hi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return se(e),null;case 6:if(t&&e.stateNode!=null)tf(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(v(166));if(n=Qt(Ar.current),Qt(be.current),ci(e)){if(r=e.stateNode,n=e.memoizedProps,r[$e]=e,(s=r.nodeValue!==n)&&(t=_e,t!==null))switch(t.tag){case 3:ui(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ui(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$e]=e,e.stateNode=r}return se(e),null;case 13:if(B(H),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(V&&we!==null&&e.mode&1&&!(e.flags&128))wd(),Dn(),e.flags|=98560,s=!1;else if(s=ci(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(v(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(v(317));s[$e]=e}else Dn(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;se(e),s=!1}else De!==null&&(ol(De),De=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||H.current&1?J===0&&(J=3):ia())),e.updateQueue!==null&&(e.flags|=4),se(e),null);case 4:return Un(),Xo(t,e),t===null&&Pr(e.stateNode.containerInfo),se(e),null;case 10:return Vl(e.type._context),se(e),null;case 17:return ge(e.type)&&$i(),se(e),null;case 19:if(B(H),s=e.memoizedState,s===null)return se(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)er(s,!1);else{if(J!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=qi(t),o!==null){for(e.flags|=128,er(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return F(H,H.current&1|2),e.child}t=t.sibling}s.tail!==null&&G()>Fn&&(e.flags|=128,r=!0,er(s,!1),e.lanes=4194304)}else{if(!r)if(t=qi(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),er(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!V)return se(e),null}else 2*G()-s.renderingStartTime>Fn&&n!==1073741824&&(e.flags|=128,r=!0,er(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=G(),e.sibling=null,n=H.current,F(H,r?n&1|2:n&1),e):(se(e),null);case 22:case 23:return ra(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ve&1073741824&&(se(e),e.subtreeFlags&6&&(e.flags|=8192)):se(e),null;case 24:return null;case 25:return null}throw Error(v(156,e.tag))}function Sm(t,e){switch(zl(e),e.tag){case 1:return ge(e.type)&&$i(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Un(),B(me),B(le),Kl(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return bl(e),null;case 13:if(B(H),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(v(340));Dn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return B(H),null;case 4:return Un(),null;case 10:return Vl(e.type._context),null;case 22:case 23:return ra(),null;case 24:return null;default:return null}}var hi=!1,oe=!1,km=typeof WeakSet=="function"?WeakSet:Set,k=null;function wn(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){b(t,e,r)}else n.current=null}function Zo(t,e,n){try{n()}catch(r){b(t,e,r)}}var wu=!1;function Im(t,e){if(Uo=ji,t=od(),Ml(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,p=0,m=t,d=null;t:for(;;){for(var y;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(a=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(y=m.firstChild)!==null;)d=m,m=y;for(;;){if(m===t)break t;if(d===n&&++u===i&&(l=o),d===s&&++p===r&&(a=o),(y=m.nextSibling)!==null)break;m=d,d=m.parentNode}m=y}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(zo={focusedElem:t,selectionRange:n},ji=!1,k=e;k!==null;)if(e=k,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,k=t;else for(;k!==null;){e=k;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var _=w.memoizedProps,D=w.memoizedState,f=e.stateNode,c=f.getSnapshotBeforeUpdate(e.elementType===e.type?_:Oe(e.type,_),D);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=e.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(g){b(e,e.return,g)}if(t=e.sibling,t!==null){t.return=e.return,k=t;break}k=e.return}return w=wu,wu=!1,w}function pr(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Zo(e,n,s)}i=i.next}while(i!==r)}}function _s(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function el(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function nf(t){var e=t.alternate;e!==null&&(t.alternate=null,nf(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$e],delete e[Rr],delete e[Bo],delete e[om],delete e[lm])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function rf(t){return t.tag===5||t.tag===3||t.tag===4}function _u(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||rf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function tl(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Hi));else if(r!==4&&(t=t.child,t!==null))for(tl(t,e,n),t=t.sibling;t!==null;)tl(t,e,n),t=t.sibling}function nl(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(nl(t,e,n),t=t.sibling;t!==null;)nl(t,e,n),t=t.sibling}var te=null,Le=!1;function ft(t,e,n){for(n=n.child;n!==null;)sf(t,e,n),n=n.sibling}function sf(t,e,n){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(fs,n)}catch{}switch(n.tag){case 5:oe||wn(n,e);case 6:var r=te,i=Le;te=null,ft(t,e,n),te=r,Le=i,te!==null&&(Le?(t=te,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Le?(t=te,n=n.stateNode,t.nodeType===8?qs(t.parentNode,n):t.nodeType===1&&qs(t,n),Ir(t)):qs(te,n.stateNode));break;case 4:r=te,i=Le,te=n.stateNode.containerInfo,Le=!0,ft(t,e,n),te=r,Le=i;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Zo(n,e,o),i=i.next}while(i!==r)}ft(t,e,n);break;case 1:if(!oe&&(wn(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){b(n,e,l)}ft(t,e,n);break;case 21:ft(t,e,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,ft(t,e,n),oe=r):ft(t,e,n);break;default:ft(t,e,n)}}function Eu(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new km),e.forEach(function(r){var i=Lm.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ae(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:te=l.stateNode,Le=!1;break e;case 3:te=l.stateNode.containerInfo,Le=!0;break e;case 4:te=l.stateNode.containerInfo,Le=!0;break e}l=l.return}if(te===null)throw Error(v(160));sf(s,o,i),te=null,Le=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){b(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)of(e,t),e=e.sibling}function of(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ae(e,t),Ve(t),r&4){try{pr(3,t,t.return),_s(3,t)}catch(_){b(t,t.return,_)}try{pr(5,t,t.return)}catch(_){b(t,t.return,_)}}break;case 1:Ae(e,t),Ve(t),r&512&&n!==null&&wn(n,n.return);break;case 5:if(Ae(e,t),Ve(t),r&512&&n!==null&&wn(n,n.return),t.flags&32){var i=t.stateNode;try{_r(i,"")}catch(_){b(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Pc(i,s),To(l,o);var u=To(l,s);for(o=0;o<a.length;o+=2){var p=a[o],m=a[o+1];p==="style"?Oc(i,m):p==="dangerouslySetInnerHTML"?xc(i,m):p==="children"?_r(i,m):Sl(i,p,m,u)}switch(l){case"input":Eo(i,s);break;case"textarea":Nc(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Sn(i,!!s.multiple,y,!1):d!==!!s.multiple&&(s.defaultValue!=null?Sn(i,!!s.multiple,s.defaultValue,!0):Sn(i,!!s.multiple,s.multiple?[]:"",!1))}i[Rr]=s}catch(_){b(t,t.return,_)}}break;case 6:if(Ae(e,t),Ve(t),r&4){if(t.stateNode===null)throw Error(v(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){b(t,t.return,_)}}break;case 3:if(Ae(e,t),Ve(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ir(e.containerInfo)}catch(_){b(t,t.return,_)}break;case 4:Ae(e,t),Ve(t);break;case 13:Ae(e,t),Ve(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ta=G())),r&4&&Eu(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(oe=(u=oe)||p,Ae(e,t),oe=u):Ae(e,t),Ve(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!p&&t.mode&1)for(k=t,p=t.child;p!==null;){for(m=k=p;k!==null;){switch(d=k,y=d.child,d.tag){case 0:case 11:case 14:case 15:pr(4,d,d.return);break;case 1:wn(d,d.return);var w=d.stateNode;if(typeof w.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(_){b(r,n,_)}}break;case 5:wn(d,d.return);break;case 22:if(d.memoizedState!==null){ku(m);continue}}y!==null?(y.return=d,k=y):ku(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{i=m.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,a=m.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Ac("display",o))}catch(_){b(t,t.return,_)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(_){b(t,t.return,_)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ae(e,t),Ve(t),r&4&&Eu(t);break;case 21:break;default:Ae(e,t),Ve(t)}}function Ve(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(rf(n)){var r=n;break e}n=n.return}throw Error(v(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(_r(i,""),r.flags&=-33);var s=_u(t);nl(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=_u(t);tl(t,l,o);break;default:throw Error(v(161))}}catch(a){b(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Cm(t,e,n){k=t,lf(t)}function lf(t,e,n){for(var r=(t.mode&1)!==0;k!==null;){var i=k,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||hi;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||oe;l=hi;var u=oe;if(hi=o,(oe=a)&&!u)for(k=i;k!==null;)o=k,a=o.child,o.tag===22&&o.memoizedState!==null?Iu(i):a!==null?(a.return=o,k=a):Iu(i);for(;s!==null;)k=s,lf(s),s=s.sibling;k=i,hi=l,oe=u}Su(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,k=s):Su(t)}}function Su(t){for(;k!==null;){var e=k;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:oe||_s(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!oe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Oe(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ou(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ou(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&Ir(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}oe||e.flags&512&&el(e)}catch(d){b(e,e.return,d)}}if(e===t){k=null;break}if(n=e.sibling,n!==null){n.return=e.return,k=n;break}k=e.return}}function ku(t){for(;k!==null;){var e=k;if(e===t){k=null;break}var n=e.sibling;if(n!==null){n.return=e.return,k=n;break}k=e.return}}function Iu(t){for(;k!==null;){var e=k;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{_s(4,e)}catch(a){b(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){b(e,i,a)}}var s=e.return;try{el(e)}catch(a){b(e,s,a)}break;case 5:var o=e.return;try{el(e)}catch(a){b(e,o,a)}}}catch(a){b(e,e.return,a)}if(e===t){k=null;break}var l=e.sibling;if(l!==null){l.return=e.return,k=l;break}k=e.return}}var Tm=Math.ceil,Zi=ct.ReactCurrentDispatcher,Zl=ct.ReactCurrentOwner,Pe=ct.ReactCurrentBatchConfig,L=0,ee=null,Y=null,ne=0,ve=0,_n=zt(0),J=0,Mr=null,en=0,Es=0,ea=0,mr=null,he=null,ta=0,Fn=1/0,qe=null,es=!1,rl=null,Rt=null,pi=!1,kt=null,ts=0,gr=0,il=null,Pi=-1,Ni=0;function ue(){return L&6?G():Pi!==-1?Pi:Pi=G()}function xt(t){return t.mode&1?L&2&&ne!==0?ne&-ne:um.transition!==null?(Ni===0&&(Ni=Wc()),Ni):(t=M,t!==0||(t=window.event,t=t===void 0?16:Jc(t.type)),t):1}function Fe(t,e,n,r){if(50<gr)throw gr=0,il=null,Error(v(185));Br(t,n,r),(!(L&2)||t!==ee)&&(t===ee&&(!(L&2)&&(Es|=n),J===4&&yt(t,ne)),ye(t,r),n===1&&L===0&&!(e.mode&1)&&(Fn=G()+500,ys&&Ft()))}function ye(t,e){var n=t.callbackNode;up(t,e);var r=Fi(t,t===ee?ne:0);if(r===0)n!==null&&La(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&La(n),e===1)t.tag===0?am(Cu.bind(null,t)):gd(Cu.bind(null,t)),im(function(){!(L&6)&&Ft()}),n=null;else{switch(bc(r)){case 1:n=Pl;break;case 4:n=Hc;break;case 16:n=zi;break;case 536870912:n=$c;break;default:n=zi}n=mf(n,af.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function af(t,e){if(Pi=-1,Ni=0,L&6)throw Error(v(327));var n=t.callbackNode;if(Pn()&&t.callbackNode!==n)return null;var r=Fi(t,t===ee?ne:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ns(t,r);else{e=r;var i=L;L|=2;var s=cf();(ee!==t||ne!==e)&&(qe=null,Fn=G()+500,Yt(t,e));do try{Rm();break}catch(l){uf(t,l)}while(!0);Bl(),Zi.current=s,L=i,Y!==null?e=0:(ee=null,ne=0,e=J)}if(e!==0){if(e===2&&(i=Ao(t),i!==0&&(r=i,e=sl(t,i))),e===1)throw n=Mr,Yt(t,0),yt(t,r),ye(t,G()),n;if(e===6)yt(t,r);else{if(i=t.current.alternate,!(r&30)&&!Pm(i)&&(e=ns(t,r),e===2&&(s=Ao(t),s!==0&&(r=s,e=sl(t,s))),e===1))throw n=Mr,Yt(t,0),yt(t,r),ye(t,G()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(v(345));case 2:Wt(t,he,qe);break;case 3:if(yt(t,r),(r&130023424)===r&&(e=ta+500-G(),10<e)){if(Fi(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ue(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=jo(Wt.bind(null,t,he,qe),e);break}Wt(t,he,qe);break;case 4:if(yt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-ze(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Tm(r/1960))-r,10<r){t.timeoutHandle=jo(Wt.bind(null,t,he,qe),r);break}Wt(t,he,qe);break;case 5:Wt(t,he,qe);break;default:throw Error(v(329))}}}return ye(t,G()),t.callbackNode===n?af.bind(null,t):null}function sl(t,e){var n=mr;return t.current.memoizedState.isDehydrated&&(Yt(t,e).flags|=256),t=ns(t,e),t!==2&&(e=he,he=n,e!==null&&ol(e)),t}function ol(t){he===null?he=t:he.push.apply(he,t)}function Pm(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!je(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function yt(t,e){for(e&=~ea,e&=~Es,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ze(e),r=1<<n;t[n]=-1,e&=~r}}function Cu(t){if(L&6)throw Error(v(327));Pn();var e=Fi(t,0);if(!(e&1))return ye(t,G()),null;var n=ns(t,e);if(t.tag!==0&&n===2){var r=Ao(t);r!==0&&(e=r,n=sl(t,r))}if(n===1)throw n=Mr,Yt(t,0),yt(t,e),ye(t,G()),n;if(n===6)throw Error(v(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Wt(t,he,qe),ye(t,G()),null}function na(t,e){var n=L;L|=1;try{return t(e)}finally{L=n,L===0&&(Fn=G()+500,ys&&Ft())}}function tn(t){kt!==null&&kt.tag===0&&!(L&6)&&Pn();var e=L;L|=1;var n=Pe.transition,r=M;try{if(Pe.transition=null,M=1,t)return t()}finally{M=r,Pe.transition=n,L=e,!(L&6)&&Ft()}}function ra(){ve=_n.current,B(_n)}function Yt(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,rm(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(zl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$i();break;case 3:Un(),B(me),B(le),Kl();break;case 5:bl(r);break;case 4:Un();break;case 13:B(H);break;case 19:B(H);break;case 10:Vl(r.type._context);break;case 22:case 23:ra()}n=n.return}if(ee=t,Y=t=At(t.current,null),ne=ve=e,J=0,Mr=null,ea=Es=en=0,he=mr=null,Gt!==null){for(e=0;e<Gt.length;e++)if(n=Gt[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Gt=null}return t}function uf(t,e){do{var n=Y;try{if(Bl(),Ii.current=Xi,Ji){for(var r=$.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ji=!1}if(Zt=0,Z=q=$=null,hr=!1,Or=0,Zl.current=null,n===null||n.return===null){J=1,Mr=e,Y=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=ne,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var d=p.alternate;d?(p.updateQueue=d.updateQueue,p.memoizedState=d.memoizedState,p.lanes=d.lanes):(p.updateQueue=null,p.memoizedState=null)}var y=fu(o);if(y!==null){y.flags&=-257,hu(y,o,l,s,e),y.mode&1&&du(s,u,e),e=y,a=u;var w=e.updateQueue;if(w===null){var _=new Set;_.add(a),e.updateQueue=_}else w.add(a);break e}else{if(!(e&1)){du(s,u,e),ia();break e}a=Error(v(426))}}else if(V&&l.mode&1){var D=fu(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),hu(D,o,l,s,e),Fl(zn(a,l));break e}}s=a=zn(a,l),J!==4&&(J=2),mr===null?mr=[s]:mr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=bd(s,a,e);su(s,f);break e;case 1:l=a;var c=s.type,h=s.stateNode;if(!(s.flags&128)&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Rt===null||!Rt.has(h)))){s.flags|=65536,e&=-e,s.lanes|=e;var g=Kd(s,l,e);su(s,g);break e}}s=s.return}while(s!==null)}ff(n)}catch(S){e=S,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(!0)}function cf(){var t=Zi.current;return Zi.current=Xi,t===null?Xi:t}function ia(){(J===0||J===3||J===2)&&(J=4),ee===null||!(en&268435455)&&!(Es&268435455)||yt(ee,ne)}function ns(t,e){var n=L;L|=2;var r=cf();(ee!==t||ne!==e)&&(qe=null,Yt(t,e));do try{Nm();break}catch(i){uf(t,i)}while(!0);if(Bl(),L=n,Zi.current=r,Y!==null)throw Error(v(261));return ee=null,ne=0,J}function Nm(){for(;Y!==null;)df(Y)}function Rm(){for(;Y!==null&&!ep();)df(Y)}function df(t){var e=pf(t.alternate,t,ve);t.memoizedProps=t.pendingProps,e===null?ff(t):Y=e,Zl.current=null}function ff(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Sm(n,e),n!==null){n.flags&=32767,Y=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{J=6,Y=null;return}}else if(n=Em(n,e,ve),n!==null){Y=n;return}if(e=e.sibling,e!==null){Y=e;return}Y=e=t}while(e!==null);J===0&&(J=5)}function Wt(t,e,n){var r=M,i=Pe.transition;try{Pe.transition=null,M=1,xm(t,e,n,r)}finally{Pe.transition=i,M=r}return null}function xm(t,e,n,r){do Pn();while(kt!==null);if(L&6)throw Error(v(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(v(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(cp(t,s),t===ee&&(Y=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||pi||(pi=!0,mf(zi,function(){return Pn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Pe.transition,Pe.transition=null;var o=M;M=1;var l=L;L|=4,Zl.current=null,Im(t,n),of(n,t),qp(zo),ji=!!Uo,zo=Uo=null,t.current=n,Cm(n),tp(),L=l,M=o,Pe.transition=s}else t.current=n;if(pi&&(pi=!1,kt=t,ts=i),s=t.pendingLanes,s===0&&(Rt=null),ip(n.stateNode),ye(t,G()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(es)throw es=!1,t=rl,rl=null,t;return ts&1&&t.tag!==0&&Pn(),s=t.pendingLanes,s&1?t===il?gr++:(gr=0,il=t):gr=0,Ft(),null}function Pn(){if(kt!==null){var t=bc(ts),e=Pe.transition,n=M;try{if(Pe.transition=null,M=16>t?16:t,kt===null)var r=!1;else{if(t=kt,kt=null,ts=0,L&6)throw Error(v(331));var i=L;for(L|=4,k=t.current;k!==null;){var s=k,o=s.child;if(k.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(k=u;k!==null;){var p=k;switch(p.tag){case 0:case 11:case 15:pr(8,p,s)}var m=p.child;if(m!==null)m.return=p,k=m;else for(;k!==null;){p=k;var d=p.sibling,y=p.return;if(nf(p),p===u){k=null;break}if(d!==null){d.return=y,k=d;break}k=y}}}var w=s.alternate;if(w!==null){var _=w.child;if(_!==null){w.child=null;do{var D=_.sibling;_.sibling=null,_=D}while(_!==null)}}k=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,k=o;else e:for(;k!==null;){if(s=k,s.flags&2048)switch(s.tag){case 0:case 11:case 15:pr(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,k=f;break e}k=s.return}}var c=t.current;for(k=c;k!==null;){o=k;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,k=h;else e:for(o=c;k!==null;){if(l=k,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:_s(9,l)}}catch(S){b(l,l.return,S)}if(l===o){k=null;break e}var g=l.sibling;if(g!==null){g.return=l.return,k=g;break e}k=l.return}}if(L=i,Ft(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(fs,t)}catch{}r=!0}return r}finally{M=n,Pe.transition=e}}return!1}function Tu(t,e,n){e=zn(n,e),e=bd(t,e,1),t=Nt(t,e,1),e=ue(),t!==null&&(Br(t,1,e),ye(t,e))}function b(t,e,n){if(t.tag===3)Tu(t,t,n);else for(;e!==null;){if(e.tag===3){Tu(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Rt===null||!Rt.has(r))){t=zn(n,t),t=Kd(e,t,1),e=Nt(e,t,1),t=ue(),e!==null&&(Br(e,1,t),ye(e,t));break}}e=e.return}}function Am(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ue(),t.pingedLanes|=t.suspendedLanes&n,ee===t&&(ne&n)===n&&(J===4||J===3&&(ne&130023424)===ne&&500>G()-ta?Yt(t,0):ea|=n),ye(t,e)}function hf(t,e){e===0&&(t.mode&1?(e=ii,ii<<=1,!(ii&130023424)&&(ii=4194304)):e=1);var n=ue();t=ot(t,e),t!==null&&(Br(t,e,n),ye(t,n))}function Om(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),hf(t,n)}function Lm(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(v(314))}r!==null&&r.delete(e),hf(t,n)}var pf;pf=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||me.current)pe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pe=!1,_m(t,e,n);pe=!!(t.flags&131072)}else pe=!1,V&&e.flags&1048576&&yd(e,Ki,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ti(t,e),t=e.pendingProps;var i=Ln(e,le.current);Tn(e,n),i=Ql(null,e,r,t,i,n);var s=Yl();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ge(r)?(s=!0,Wi(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,$l(e),i.updater=ws,e.stateNode=i,i._reactInternals=e,Ko(e,r,t,n),e=Yo(null,e,r,!0,s,n)):(e.tag=0,V&&s&&Ul(e),ae(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ti(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Mm(r),t=Oe(r,t),i){case 0:e=Qo(null,e,r,t,n);break e;case 1:e=gu(null,e,r,t,n);break e;case 11:e=pu(null,e,r,t,n);break e;case 14:e=mu(null,e,r,Oe(r.type,t),n);break e}throw Error(v(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Oe(r,i),Qo(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Oe(r,i),gu(t,e,r,i,n);case 3:e:{if(qd(e),t===null)throw Error(v(387));r=e.pendingProps,s=e.memoizedState,i=s.element,kd(t,e),Yi(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=zn(Error(v(423)),e),e=yu(t,e,r,n,i);break e}else if(r!==i){i=zn(Error(v(424)),e),e=yu(t,e,r,n,i);break e}else for(we=Pt(e.stateNode.containerInfo.firstChild),_e=e,V=!0,De=null,n=Ed(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Dn(),r===i){e=lt(t,e,n);break e}ae(t,e,r,n)}e=e.child}return e;case 5:return Id(e),t===null&&$o(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Fo(r,i)?o=null:s!==null&&Fo(r,s)&&(e.flags|=32),Yd(t,e),ae(t,e,o,n),e.child;case 6:return t===null&&$o(e),null;case 13:return Jd(t,e,n);case 4:return Wl(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Mn(e,null,r,n):ae(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Oe(r,i),pu(t,e,r,i,n);case 7:return ae(t,e,e.pendingProps,n),e.child;case 8:return ae(t,e,e.pendingProps.children,n),e.child;case 12:return ae(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,F(Gi,r._currentValue),r._currentValue=o,s!==null)if(je(s.value,o)){if(s.children===i.children&&!me.current){e=lt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=nt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?a.next=a:(a.next=p.next,p.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Wo(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(v(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Wo(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ae(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Tn(e,n),i=Ne(i),r=r(i),e.flags|=1,ae(t,e,r,n),e.child;case 14:return r=e.type,i=Oe(r,e.pendingProps),i=Oe(r.type,i),mu(t,e,r,i,n);case 15:return Gd(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Oe(r,i),Ti(t,e),e.tag=1,ge(r)?(t=!0,Wi(e)):t=!1,Tn(e,n),Wd(e,r,i),Ko(e,r,i,n),Yo(null,e,r,!0,t,n);case 19:return Xd(t,e,n);case 22:return Qd(t,e,n)}throw Error(v(156,e.tag))};function mf(t,e){return Vc(t,e)}function Dm(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(t,e,n,r){return new Dm(t,e,n,r)}function sa(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Mm(t){if(typeof t=="function")return sa(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Il)return 11;if(t===Cl)return 14}return 2}function At(t,e){var n=t.alternate;return n===null?(n=Te(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ri(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")sa(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case cn:return qt(n.children,i,s,e);case kl:o=8,i|=8;break;case go:return t=Te(12,n,e,i|2),t.elementType=go,t.lanes=s,t;case yo:return t=Te(13,n,e,i),t.elementType=yo,t.lanes=s,t;case vo:return t=Te(19,n,e,i),t.elementType=vo,t.lanes=s,t;case Ic:return Ss(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Sc:o=10;break e;case kc:o=9;break e;case Il:o=11;break e;case Cl:o=14;break e;case pt:o=16,r=null;break e}throw Error(v(130,t==null?t:typeof t,""))}return e=Te(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function qt(t,e,n,r){return t=Te(7,t,r,e),t.lanes=n,t}function Ss(t,e,n,r){return t=Te(22,t,r,e),t.elementType=Ic,t.lanes=n,t.stateNode={isHidden:!1},t}function io(t,e,n){return t=Te(6,t,null,e),t.lanes=n,t}function so(t,e,n){return e=Te(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Um(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=js(0),this.expirationTimes=js(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=js(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function oa(t,e,n,r,i,s,o,l,a){return t=new Um(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Te(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$l(s),t}function zm(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:un,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function gf(t){if(!t)return Mt;t=t._reactInternals;e:{if(on(t)!==t||t.tag!==1)throw Error(v(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ge(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(v(171))}if(t.tag===1){var n=t.type;if(ge(n))return md(t,n,e)}return e}function yf(t,e,n,r,i,s,o,l,a){return t=oa(n,r,!0,t,i,s,o,l,a),t.context=gf(null),n=t.current,r=ue(),i=xt(n),s=nt(r,i),s.callback=e??null,Nt(n,s,i),t.current.lanes=i,Br(t,i,r),ye(t,r),t}function ks(t,e,n,r){var i=e.current,s=ue(),o=xt(i);return n=gf(n),e.context===null?e.context=n:e.pendingContext=n,e=nt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Nt(i,e,o),t!==null&&(Fe(t,i,o,s),ki(t,i,o)),o}function rs(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Pu(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function la(t,e){Pu(t,e),(t=t.alternate)&&Pu(t,e)}function Fm(){return null}var vf=typeof reportError=="function"?reportError:function(t){console.error(t)};function aa(t){this._internalRoot=t}Is.prototype.render=aa.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(v(409));ks(t,e,null,null)};Is.prototype.unmount=aa.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;tn(function(){ks(null,t,null,null)}),e[st]=null}};function Is(t){this._internalRoot=t}Is.prototype.unstable_scheduleHydration=function(t){if(t){var e=Qc();t={blockedOn:null,target:t,priority:e};for(var n=0;n<gt.length&&e!==0&&e<gt[n].priority;n++);gt.splice(n,0,t),n===0&&qc(t)}};function ua(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Cs(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Nu(){}function jm(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=rs(o);s.call(u)}}var o=yf(e,r,t,0,null,!1,!1,"",Nu);return t._reactRootContainer=o,t[st]=o.current,Pr(t.nodeType===8?t.parentNode:t),tn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=rs(a);l.call(u)}}var a=oa(t,0,!1,null,null,!1,!1,"",Nu);return t._reactRootContainer=a,t[st]=a.current,Pr(t.nodeType===8?t.parentNode:t),tn(function(){ks(e,a,n,r)}),a}function Ts(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=rs(o);l.call(a)}}ks(e,o,t,i)}else o=jm(n,e,t,i,r);return rs(o)}Kc=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ir(e.pendingLanes);n!==0&&(Nl(e,n|1),ye(e,G()),!(L&6)&&(Fn=G()+500,Ft()))}break;case 13:tn(function(){var r=ot(t,1);if(r!==null){var i=ue();Fe(r,t,1,i)}}),la(t,1)}};Rl=function(t){if(t.tag===13){var e=ot(t,134217728);if(e!==null){var n=ue();Fe(e,t,134217728,n)}la(t,134217728)}};Gc=function(t){if(t.tag===13){var e=xt(t),n=ot(t,e);if(n!==null){var r=ue();Fe(n,t,e,r)}la(t,e)}};Qc=function(){return M};Yc=function(t,e){var n=M;try{return M=t,e()}finally{M=n}};No=function(t,e,n){switch(e){case"input":if(Eo(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=gs(r);if(!i)throw Error(v(90));Tc(r),Eo(r,i)}}}break;case"textarea":Nc(t,n);break;case"select":e=n.value,e!=null&&Sn(t,!!n.multiple,e,!1)}};Mc=na;Uc=tn;var Bm={usingClientEntryPoint:!1,Events:[Hr,pn,gs,Lc,Dc,na]},tr={findFiberByHostInstance:Kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vm={bundleType:tr.bundleType,version:tr.version,rendererPackageName:tr.rendererPackageName,rendererConfig:tr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ct.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=jc(t),t===null?null:t.stateNode},findFiberByHostInstance:tr.findFiberByHostInstance||Fm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mi.isDisabled&&mi.supportsFiber)try{fs=mi.inject(Vm),We=mi}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bm;Se.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ua(e))throw Error(v(200));return zm(t,e,null,n)};Se.createRoot=function(t,e){if(!ua(t))throw Error(v(299));var n=!1,r="",i=vf;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=oa(t,1,!1,null,null,n,!1,r,i),t[st]=e.current,Pr(t.nodeType===8?t.parentNode:t),new aa(e)};Se.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(v(188)):(t=Object.keys(t).join(","),Error(v(268,t)));return t=jc(e),t=t===null?null:t.stateNode,t};Se.flushSync=function(t){return tn(t)};Se.hydrate=function(t,e,n){if(!Cs(e))throw Error(v(200));return Ts(null,t,e,!0,n)};Se.hydrateRoot=function(t,e,n){if(!ua(t))throw Error(v(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=vf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=yf(e,null,t,1,n??null,i,!1,s,o),t[st]=e.current,Pr(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Is(e)};Se.render=function(t,e,n){if(!Cs(e))throw Error(v(200));return Ts(null,t,e,!1,n)};Se.unmountComponentAtNode=function(t){if(!Cs(t))throw Error(v(40));return t._reactRootContainer?(tn(function(){Ts(null,null,t,!1,function(){t._reactRootContainer=null,t[st]=null})}),!0):!1};Se.unstable_batchedUpdates=na;Se.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Cs(n))throw Error(v(200));if(t==null||t._reactInternals===void 0)throw Error(v(38));return Ts(t,e,n,!1,r)};Se.version="18.3.1-next-f1338f8080-20240426";function wf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wf)}catch(t){console.error(t)}}wf(),vc.exports=Se;var Hm=vc.exports,Ru=Hm;po.createRoot=Ru.createRoot,po.hydrateRoot=Ru.hydrateRoot;/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),_f=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Wm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=Q.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},a)=>Q.createElement("svg",{ref:a,...Wm,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:_f("lucide",i),...l},[...o.map(([u,p])=>Q.createElement(u,p)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=(t,e)=>{const n=Q.forwardRef(({className:r,...i},s)=>Q.createElement(bm,{ref:s,iconNode:e,className:_f(`lucide-${$m(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=Qe("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=Qe("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=Qe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=Qe("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=Qe("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=Qe("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=Qe("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=Qe("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=Qe("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=Qe("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),tg=()=>{};var Au={};/**
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
 */const Ef=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ng=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Sf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,p=s>>2,m=(s&3)<<4|l>>4;let d=(l&15)<<2|u>>6,y=u&63;a||(y=64,o||(d=64)),r.push(n[p],n[m],n[d],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ef(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ng(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||m==null)throw new rg;const d=s<<2|l>>4;if(r.push(d),u!==64){const y=l<<4&240|u>>2;if(r.push(y),m!==64){const w=u<<6&192|m;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ig=function(t){const e=Ef(t);return Sf.encodeByteArray(e,!0)},kf=function(t){return ig(t).replace(/\./g,"")},If=function(t){try{return Sf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function sg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const og=()=>sg().__FIREBASE_DEFAULTS__,lg=()=>{if(typeof process>"u"||typeof Au>"u")return;const t=Au.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ag=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&If(t[1]);return e&&JSON.parse(e)},ca=()=>{try{return tg()||og()||lg()||ag()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ug=t=>{var e,n;return(n=(e=ca())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Cf=()=>{var t;return(t=ca())==null?void 0:t.config},Tf=t=>{var e;return(e=ca())==null?void 0:e[`_${t}`]};/**
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
 */class cg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ps(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function dg(t){return(await fetch(t,{credentials:"include"})).ok}const yr={};function fg(){const t={prod:[],emulator:[]};for(const e of Object.keys(yr))yr[e]?t.emulator.push(e):t.prod.push(e);return t}function hg(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Ou=!1;function pg(t,e){if(typeof window>"u"||typeof document>"u"||!Ps(window.location.host)||yr[t]===e||yr[t]||Ou)return;yr[t]=e;function n(d){return`__firebase__banner__${d}`}const r="__firebase__banner",s=fg().prod.length>0;function o(){const d=document.getElementById(r);d&&d.remove()}function l(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="fixed",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function a(d,y){d.setAttribute("width","24"),d.setAttribute("id",y),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function u(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{Ou=!0,o()},d}function p(d,y){d.setAttribute("id",y),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function m(){const d=hg(r),y=n("text"),w=document.getElementById(y)||document.createElement("span"),_=n("learnmore"),D=document.getElementById(_)||document.createElement("a"),f=n("preprendIcon"),c=document.getElementById(f)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const h=d.element;l(h),p(D,_);const g=u();a(c,f),h.append(c,w,D,g),document.body.appendChild(h)}s?(w.innerText="Preview backend disconnected.",c.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ce())}function gg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function yg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function vg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wg(){const t=ce();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _g(){try{return typeof indexedDB=="object"}catch{return!1}}function Eg(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Sg="FirebaseError";class jt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Sg,Object.setPrototypeOf(this,jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wr.prototype.create)}}class Wr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?kg(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new jt(i,l,r)}}function kg(t,e){return t.replace(Ig,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Ig=/\{\$([^}]+)}/g;function Cg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function jn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Lu(s)&&Lu(o)){if(!jn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Lu(t){return t!==null&&typeof t=="object"}/**
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
 */function br(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function or(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function lr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Tg(t,e){const n=new Pg(t,e);return n.subscribe.bind(n)}class Pg{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ng(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=oo),i.error===void 0&&(i.error=oo),i.complete===void 0&&(i.complete=oo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ng(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function oo(){}/**
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
 */function Ye(t){return t&&t._delegate?t._delegate:t}class Bn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const bt="[DEFAULT]";/**
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
 */class Rg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new cg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ag(e))try{this.getOrInitializeService({instanceIdentifier:bt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=bt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bt){return this.instances.has(e)}getOptions(e=bt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xg(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=bt){return this.component?this.component.multipleInstances?e:bt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xg(t){return t===bt?void 0:t}function Ag(t){return t.instantiationMode==="EAGER"}/**
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
 */class Og{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Rg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var U;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(U||(U={}));const Lg={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},Dg=U.INFO,Mg={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},Ug=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Mg[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pf{constructor(e){this.name=e,this._logLevel=Dg,this._logHandler=Ug,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in U))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Lg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...e),this._logHandler(this,U.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...e),this._logHandler(this,U.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,U.INFO,...e),this._logHandler(this,U.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,U.WARN,...e),this._logHandler(this,U.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...e),this._logHandler(this,U.ERROR,...e)}}const zg=(t,e)=>e.some(n=>t instanceof n);let Du,Mu;function Fg(){return Du||(Du=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jg(){return Mu||(Mu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Nf=new WeakMap,ll=new WeakMap,Rf=new WeakMap,lo=new WeakMap,da=new WeakMap;function Bg(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ot(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Nf.set(n,t)}).catch(()=>{}),da.set(e,t),e}function Vg(t){if(ll.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ll.set(t,e)}let al={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ll.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Rf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ot(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Hg(t){al=t(al)}function $g(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ao(this),e,...n);return Rf.set(r,e.sort?e.sort():[e]),Ot(r)}:jg().includes(t)?function(...e){return t.apply(ao(this),e),Ot(Nf.get(this))}:function(...e){return Ot(t.apply(ao(this),e))}}function Wg(t){return typeof t=="function"?$g(t):(t instanceof IDBTransaction&&Vg(t),zg(t,Fg())?new Proxy(t,al):t)}function Ot(t){if(t instanceof IDBRequest)return Bg(t);if(lo.has(t))return lo.get(t);const e=Wg(t);return e!==t&&(lo.set(t,e),da.set(e,t)),e}const ao=t=>da.get(t);function bg(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Ot(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Ot(o.result),a.oldVersion,a.newVersion,Ot(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Kg=["get","getKey","getAll","getAllKeys","count"],Gg=["put","add","delete","clear"],uo=new Map;function Uu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(uo.get(e))return uo.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Gg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Kg.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return uo.set(e,s),s}Hg(t=>({...t,get:(e,n,r)=>Uu(e,n)||t.get(e,n,r),has:(e,n)=>!!Uu(e,n)||t.has(e,n)}));/**
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
 */class Qg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Yg(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Yg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ul="@firebase/app",zu="0.14.6";/**
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
 */const at=new Pf("@firebase/app"),qg="@firebase/app-compat",Jg="@firebase/analytics-compat",Xg="@firebase/analytics",Zg="@firebase/app-check-compat",ey="@firebase/app-check",ty="@firebase/auth",ny="@firebase/auth-compat",ry="@firebase/database",iy="@firebase/data-connect",sy="@firebase/database-compat",oy="@firebase/functions",ly="@firebase/functions-compat",ay="@firebase/installations",uy="@firebase/installations-compat",cy="@firebase/messaging",dy="@firebase/messaging-compat",fy="@firebase/performance",hy="@firebase/performance-compat",py="@firebase/remote-config",my="@firebase/remote-config-compat",gy="@firebase/storage",yy="@firebase/storage-compat",vy="@firebase/firestore",wy="@firebase/ai",_y="@firebase/firestore-compat",Ey="firebase",Sy="12.6.0";/**
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
 */const cl="[DEFAULT]",ky={[ul]:"fire-core",[qg]:"fire-core-compat",[Xg]:"fire-analytics",[Jg]:"fire-analytics-compat",[ey]:"fire-app-check",[Zg]:"fire-app-check-compat",[ty]:"fire-auth",[ny]:"fire-auth-compat",[ry]:"fire-rtdb",[iy]:"fire-data-connect",[sy]:"fire-rtdb-compat",[oy]:"fire-fn",[ly]:"fire-fn-compat",[ay]:"fire-iid",[uy]:"fire-iid-compat",[cy]:"fire-fcm",[dy]:"fire-fcm-compat",[fy]:"fire-perf",[hy]:"fire-perf-compat",[py]:"fire-rc",[my]:"fire-rc-compat",[gy]:"fire-gcs",[yy]:"fire-gcs-compat",[vy]:"fire-fst",[_y]:"fire-fst-compat",[wy]:"fire-vertex","fire-js":"fire-js",[Ey]:"fire-js-all"};/**
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
 */const is=new Map,Iy=new Map,dl=new Map;function Fu(t,e){try{t.container.addComponent(e)}catch(n){at.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ur(t){const e=t.name;if(dl.has(e))return at.debug(`There were multiple attempts to register component ${e}.`),!1;dl.set(e,t);for(const n of is.values())Fu(n,t);for(const n of Iy.values())Fu(n,t);return!0}function xf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Me(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Cy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Lt=new Wr("app","Firebase",Cy);/**
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
 */class Ty{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}/**
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
 */const Kr=Sy;function Af(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:cl,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Lt.create("bad-app-name",{appName:String(i)});if(n||(n=Cf()),!n)throw Lt.create("no-options");const s=is.get(i);if(s){if(jn(n,s.options)&&jn(r,s.config))return s;throw Lt.create("duplicate-app",{appName:i})}const o=new Og(i);for(const a of dl.values())o.addComponent(a);const l=new Ty(n,r,o);return is.set(i,l),l}function Py(t=cl){const e=is.get(t);if(!e&&t===cl&&Cf())return Af();if(!e)throw Lt.create("no-app",{appName:t});return e}function Nn(t,e,n){let r=ky[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),at.warn(o.join(" "));return}Ur(new Bn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Ny="firebase-heartbeat-database",Ry=1,zr="firebase-heartbeat-store";let co=null;function Of(){return co||(co=bg(Ny,Ry,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(zr)}catch(n){console.warn(n)}}}}).catch(t=>{throw Lt.create("idb-open",{originalErrorMessage:t.message})})),co}async function xy(t){try{const n=(await Of()).transaction(zr),r=await n.objectStore(zr).get(Lf(t));return await n.done,r}catch(e){if(e instanceof jt)at.warn(e.message);else{const n=Lt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});at.warn(n.message)}}}async function ju(t,e){try{const r=(await Of()).transaction(zr,"readwrite");await r.objectStore(zr).put(e,Lf(t)),await r.done}catch(n){if(n instanceof jt)at.warn(n.message);else{const r=Lt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});at.warn(r.message)}}}function Lf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ay=1024,Oy=30;class Ly{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new My(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Bu();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Oy){const o=Uy(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){at.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Bu(),{heartbeatsToSend:r,unsentEntries:i}=Dy(this._heartbeatsCache.heartbeats),s=kf(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return at.warn(n),""}}}function Bu(){return new Date().toISOString().substring(0,10)}function Dy(t,e=Ay){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Vu(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Vu(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class My{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _g()?Eg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await xy(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ju(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ju(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Vu(t){return kf(JSON.stringify({version:2,heartbeats:t})).length}function Uy(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function zy(t){Ur(new Bn("platform-logger",e=>new Qg(e),"PRIVATE")),Ur(new Bn("heartbeat",e=>new Ly(e),"PRIVATE")),Nn(ul,zu,t),Nn(ul,zu,"esm2020"),Nn("fire-js","")}zy("");var Fy="firebase",jy="12.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nn(Fy,jy,"app");function Df(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const By=Df,Mf=new Wr("auth","Firebase",Df());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=new Pf("@firebase/auth");function Vy(t,...e){ss.logLevel<=U.WARN&&ss.warn(`Auth (${Kr}): ${t}`,...e)}function xi(t,...e){ss.logLevel<=U.ERROR&&ss.error(`Auth (${Kr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(t,...e){throw fa(t,...e)}function Ke(t,...e){return fa(t,...e)}function Uf(t,e,n){const r={...By(),[e]:n};return new Wr("auth","Firebase",r).create(e,{appName:t.name})}function rt(t){return Uf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fa(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Mf.create(t,...e)}function N(t,e,...n){if(!t)throw fa(e,...n)}function et(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xi(e),new Error(e)}function ut(t,e){t||et(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Hy(){return Hu()==="http:"||Hu()==="https:"}function Hu(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $y(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Hy()||yg()||"connection"in navigator)?navigator.onLine:!0}function Wy(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,n){this.shortDelay=e,this.longDelay=n,ut(n>e,"Short delay should be less than long delay!"),this.isMobile=mg()||vg()}get(){return $y()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(t,e){ut(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ky=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Gy=new Gr(3e4,6e4);function Bt(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function dt(t,e,n,r,i={}){return Ff(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=br({key:t.config.apiKey,...o}).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:a,...s};return gg()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Ps(t.emulatorConfig.host)&&(u.credentials="include"),zf.fetch()(await jf(t,t.config.apiHost,n,l),u)})}async function Ff(t,e,n){t._canInitEmulator=!1;const r={...by,...e};try{const i=new Yy(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw gi(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw gi(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw gi(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw gi(t,"user-disabled",o);const p=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Uf(t,p,u);Be(t,p)}}catch(i){if(i instanceof jt)throw i;Be(t,"network-request-failed",{message:String(i)})}}async function Qr(t,e,n,r,i={}){const s=await dt(t,e,n,r,i);return"mfaPendingCredential"in s&&Be(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function jf(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?ha(t.config,i):`${t.config.apiScheme}://${i}`;return Ky.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function Qy(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Yy{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ke(this.auth,"network-request-failed")),Gy.get())})}}function gi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ke(t,e,r);return i.customData._tokenResponse=n,i}function $u(t){return t!==void 0&&t.enterprise!==void 0}class qy{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Qy(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Jy(t,e){return dt(t,"GET","/v2/recaptchaConfig",Bt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xy(t,e){return dt(t,"POST","/v1/accounts:delete",e)}async function os(t,e){return dt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Zy(t,e=!1){const n=Ye(t),r=await n.getIdToken(e),i=pa(r);N(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:vr(fo(i.auth_time)),issuedAtTime:vr(fo(i.iat)),expirationTime:vr(fo(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function fo(t){return Number(t)*1e3}function pa(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return xi("JWT malformed, contained fewer than 3 sections"),null;try{const i=If(n);return i?JSON.parse(i):(xi("Failed to decode base64 JWT payload"),null)}catch(i){return xi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Wu(t){const e=pa(t);return N(e,"internal-error"),N(typeof e.exp<"u","internal-error"),N(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof jt&&ev(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ev({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vr(this.lastLoginAt),this.creationTime=vr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ls(t){var m;const e=t.auth,n=await t.getIdToken(),r=await Vn(t,os(e,{idToken:n}));N(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(m=i.providerUserInfo)!=null&&m.length?Bf(i.providerUserInfo):[],o=rv(t.providerData,s),l=t.isAnonymous,a=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),u=l?a:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new hl(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,p)}async function nv(t){const e=Ye(t);await ls(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rv(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Bf(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iv(t,e){const n=await Ff(t,{},async()=>{const r=br({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await jf(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const a={method:"POST",headers:l,body:r};return t.emulatorConfig&&Ps(t.emulatorConfig.host)&&(a.credentials="include"),zf.fetch()(o,a)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function sv(t,e){return dt(t,"POST","/v2/accounts:revokeToken",Bt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){N(e.idToken,"internal-error"),N(typeof e.idToken<"u","internal-error"),N(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){N(e.length!==0,"internal-error");const n=Wu(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(N(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await iv(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Rn;return r&&(N(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(N(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(N(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Rn,this.toJSON())}_performRefresh(){return et("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t,e){N(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ue{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new tv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new hl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Vn(this,this.stsTokenManager.getToken(this.auth,e));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Zy(this,e)}reload(){return nv(this)}_assign(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ue({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ls(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Me(this.auth.app))return Promise.reject(rt(this.auth));const e=await this.getIdToken();return await Vn(this,Xy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,a=n._redirectEventId??void 0,u=n.createdAt??void 0,p=n.lastLoginAt??void 0,{uid:m,emailVerified:d,isAnonymous:y,providerData:w,stsTokenManager:_}=n;N(m&&_,e,"internal-error");const D=Rn.fromJSON(this.name,_);N(typeof m=="string",e,"internal-error"),ht(r,e.name),ht(i,e.name),N(typeof d=="boolean",e,"internal-error"),N(typeof y=="boolean",e,"internal-error"),ht(s,e.name),ht(o,e.name),ht(l,e.name),ht(a,e.name),ht(u,e.name),ht(p,e.name);const f=new Ue({uid:m,auth:e,email:i,emailVerified:d,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:D,createdAt:u,lastLoginAt:p});return w&&Array.isArray(w)&&(f.providerData=w.map(c=>({...c}))),a&&(f._redirectEventId=a),f}static async _fromIdTokenResponse(e,n,r=!1){const i=new Rn;i.updateFromServerResponse(n);const s=new Ue({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ls(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];N(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Bf(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Rn;l.updateFromIdToken(r);const a=new Ue({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new hl(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,u),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu=new Map;function tt(t){ut(t instanceof Function,"Expected a class definition");let e=bu.get(t);return e?(ut(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,bu.set(t,e),e)}/**
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
 */class Vf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Vf.type="NONE";const Ku=Vf;/**
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
 */function Ai(t,e,n){return`firebase:${t}:${e}:${n}`}class xn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ai(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ai("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await os(this.auth,{idToken:e}).catch(()=>{});return n?Ue._fromGetAccountInfoResponse(this.auth,n,e):null}return Ue._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new xn(tt(Ku),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||tt(Ku);const o=Ai(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const p=await u._get(o);if(p){let m;if(typeof p=="string"){const d=await os(e,{idToken:p}).catch(()=>{});if(!d)break;m=await Ue._fromGetAccountInfoResponse(e,d,p)}else m=Ue._fromJSON(e,p);u!==s&&(l=m),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new xn(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new xn(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gf(e))return"Blackberry";if(Qf(e))return"Webos";if($f(e))return"Safari";if((e.includes("chrome/")||Wf(e))&&!e.includes("edge/"))return"Chrome";if(Kf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Hf(t=ce()){return/firefox\//i.test(t)}function $f(t=ce()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Wf(t=ce()){return/crios\//i.test(t)}function bf(t=ce()){return/iemobile/i.test(t)}function Kf(t=ce()){return/android/i.test(t)}function Gf(t=ce()){return/blackberry/i.test(t)}function Qf(t=ce()){return/webos/i.test(t)}function ma(t=ce()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ov(t=ce()){var e;return ma(t)&&!!((e=window.navigator)!=null&&e.standalone)}function lv(){return wg()&&document.documentMode===10}function Yf(t=ce()){return ma(t)||Kf(t)||Qf(t)||Gf(t)||/windows phone/i.test(t)||bf(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qf(t,e=[]){let n;switch(t){case"Browser":n=Gu(ce());break;case"Worker":n=`${Gu(ce())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Kr}/${r}`}/**
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
 */class av{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function uv(t,e={}){return dt(t,"GET","/v2/passwordPolicy",Bt(t,e))}/**
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
 */const cv=6;class dv{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??cv,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qu(this),this.idTokenSubscription=new Qu(this),this.beforeStateQueue=new av(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tt(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await xn.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await os(this,{idToken:e}),r=await Ue._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Me(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ls(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Wy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Me(this.app))return Promise.reject(rt(this));const n=e?Ye(e):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&N(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Me(this.app)?Promise.reject(rt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Me(this.app)?Promise.reject(rt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await uv(this),n=new dv(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Wr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await sv(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tt(e)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await xn.create(this,[tt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(N(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Me(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Vy(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ln(t){return Ye(t)}class Qu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Tg(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ns={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function hv(t){Ns=t}function Jf(t){return Ns.loadJS(t)}function pv(){return Ns.recaptchaEnterpriseScript}function mv(){return Ns.gapiScript}function gv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class yv{constructor(){this.enterprise=new vv}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class vv{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const wv="recaptcha-enterprise",Xf="NO_RECAPTCHA";class _v{constructor(e){this.type=wv,this.auth=ln(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{Jy(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new qy(a);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;$u(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(Xf)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new yv().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&$u(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=pv();a.length!==0&&(a+=l),Jf(a).then(()=>{i(l,s,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function Yu(t,e,n,r=!1,i=!1){const s=new _v(t);let o;if(i)o=Xf;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const a=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:a,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const a=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:a,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function pl(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Yu(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Yu(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ev(t,e){const n=xf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(jn(s,e??{}))return i;Be(i,"already-initialized")}return n.initialize({options:e})}function Sv(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function kv(t,e,n){const r=ln(t);N(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Zf(e),{host:o,port:l}=Iv(e),a=l===null?"":`:${l}`,u={url:`${s}//${o}${a}/`},p=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){N(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),N(jn(u,r.config.emulator)&&jn(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,Ps(o)?(dg(`${s}//${o}${a}`),pg("Auth",!0)):Cv()}function Zf(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Iv(t){const e=Zf(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:qu(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:qu(o)}}}function qu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Cv(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return et("not implemented")}_getIdTokenResponse(e){return et("not implemented")}_linkToIdToken(e,n){return et("not implemented")}_getReauthenticationResolver(e){return et("not implemented")}}async function Tv(t,e){return dt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pv(t,e){return Qr(t,"POST","/v1/accounts:signInWithPassword",Bt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nv(t,e){return Qr(t,"POST","/v1/accounts:signInWithEmailLink",Bt(t,e))}async function Rv(t,e){return Qr(t,"POST","/v1/accounts:signInWithEmailLink",Bt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr extends ga{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Fr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Fr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pl(e,n,"signInWithPassword",Pv);case"emailLink":return Nv(e,{email:this._email,oobCode:this._password});default:Be(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pl(e,r,"signUpPassword",Tv);case"emailLink":return Rv(e,{idToken:n,email:this._email,oobCode:this._password});default:Be(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function An(t,e){return Qr(t,"POST","/v1/accounts:signInWithIdp",Bt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv="http://localhost";class nn extends ga{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new nn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Be("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new nn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return An(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,An(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,An(e,n)}buildRequest(){const e={requestUri:xv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=br(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ov(t){const e=or(lr(t)).link,n=e?or(lr(e)).deep_link_id:null,r=or(lr(t)).deep_link_id;return(r?or(lr(r)).link:null)||r||n||e||t}class ya{constructor(e){const n=or(lr(e)),r=n.apiKey??null,i=n.oobCode??null,s=Av(n.mode??null);N(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Ov(e);try{return new ya(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(){this.providerId=bn.PROVIDER_ID}static credential(e,n){return Fr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ya.parseLink(n);return N(r,"argument-error"),Fr._fromEmailAndCode(e,r.code,r.tenantId)}}bn.PROVIDER_ID="password";bn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";bn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Yr extends eh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends Yr{constructor(){super("facebook.com")}static credential(e){return nn._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch{return null}}}vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";vt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends Yr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return nn._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return wt.credential(n,r)}catch{return null}}}wt.GOOGLE_SIGN_IN_METHOD="google.com";wt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends Yr{constructor(){super("github.com")}static credential(e){return nn._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _t.credential(e.oauthAccessToken)}catch{return null}}}_t.GITHUB_SIGN_IN_METHOD="github.com";_t.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends Yr{constructor(){super("twitter.com")}static credential(e,n){return nn._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Et.credential(n,r)}catch{return null}}}Et.TWITTER_SIGN_IN_METHOD="twitter.com";Et.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lv(t,e){return Qr(t,"POST","/v1/accounts:signUp",Bt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ue._fromIdTokenResponse(e,r,i),o=Ju(r);return new rn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ju(r);return new rn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ju(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as extends jt{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,as.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new as(e,n,r,i)}}function th(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?as._fromErrorAndOperation(t,s,e,r):s})}async function Dv(t,e,n=!1){const r=await Vn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return rn._forOperation(t,"link",r)}/**
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
 */async function Mv(t,e,n=!1){const{auth:r}=t;if(Me(r.app))return Promise.reject(rt(r));const i="reauthenticate";try{const s=await Vn(t,th(r,i,e,t),n);N(s.idToken,r,"internal-error");const o=pa(s.idToken);N(o,r,"internal-error");const{sub:l}=o;return N(t.uid===l,r,"user-mismatch"),rn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Be(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nh(t,e,n=!1){if(Me(t.app))return Promise.reject(rt(t));const r="signIn",i=await th(t,r,e),s=await rn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Uv(t,e){return nh(ln(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rh(t){const e=ln(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function zv(t,e,n){if(Me(t.app))return Promise.reject(rt(t));const r=ln(t),o=await pl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Lv).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&rh(t),a}),l=await rn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function Fv(t,e,n){return Me(t.app)?Promise.reject(rt(t)):Uv(Ye(t),bn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&rh(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jv(t,e){return dt(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bv(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ye(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Vn(r,jv(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:a})=>a==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Vv(t,e,n,r){return Ye(t).onIdTokenChanged(e,n,r)}function Hv(t,e,n){return Ye(t).beforeAuthStateChanged(e,n)}function $v(t,e,n,r){return Ye(t).onAuthStateChanged(e,n,r)}function Wv(t){return Ye(t).signOut()}const us="__sak";/**
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
 */class ih{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(us,"1"),this.storage.removeItem(us),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv=1e3,Kv=10;class sh extends ih{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Yf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);lv()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Kv):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},bv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sh.type="LOCAL";const Gv=sh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh extends ih{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}oh.type="SESSION";const lh=oh;/**
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
 */function Qv(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Rs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Rs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await Qv(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Yv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=va("",20);i.port1.start();const p=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const d=m;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(d.data.response);break;default:clearTimeout(p),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return window}function qv(t){Ge().location.href=t}/**
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
 */function ah(){return typeof Ge().WorkerGlobalScope<"u"&&typeof Ge().importScripts=="function"}async function Jv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Xv(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Zv(){return ah()?self:null}/**
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
 */const uh="firebaseLocalStorageDb",e1=1,cs="firebaseLocalStorage",ch="fbase_key";class qr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xs(t,e){return t.transaction([cs],e?"readwrite":"readonly").objectStore(cs)}function t1(){const t=indexedDB.deleteDatabase(uh);return new qr(t).toPromise()}function ml(){const t=indexedDB.open(uh,e1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(cs,{keyPath:ch})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(cs)?e(r):(r.close(),await t1(),e(await ml()))})})}async function Xu(t,e,n){const r=xs(t,!0).put({[ch]:e,value:n});return new qr(r).toPromise()}async function n1(t,e){const n=xs(t,!1).get(e),r=await new qr(n).toPromise();return r===void 0?null:r.value}function Zu(t,e){const n=xs(t,!0).delete(e);return new qr(n).toPromise()}const r1=800,i1=3;class dh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ml(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>i1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ah()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rs._getInstance(Zv()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await Jv(),!this.activeServiceWorker)return;this.sender=new Yv(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Xv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ml();return await Xu(e,us,"1"),await Zu(e,us),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xu(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>n1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=xs(i,!1).getAll();return new qr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),r1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dh.type="LOCAL";const s1=dh;new Gr(3e4,6e4);/**
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
 */function o1(t,e){return e?tt(e):(N(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class wa extends ga{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return An(e,this._buildIdpRequest())}_linkToIdToken(e,n){return An(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return An(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function l1(t){return nh(t.auth,new wa(t),t.bypassAuthState)}function a1(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),Mv(n,new wa(t),t.bypassAuthState)}async function u1(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),Dv(n,new wa(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return l1;case"linkViaPopup":case"linkViaRedirect":return u1;case"reauthViaPopup":case"reauthViaRedirect":return a1;default:Be(this.auth,"internal-error")}}resolve(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c1=new Gr(2e3,1e4);class En extends fh{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,En.currentPopupAction&&En.currentPopupAction.cancel(),En.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return N(e,this.auth,"internal-error"),e}async onExecution(){ut(this.filter.length===1,"Popup operations only handle one event");const e=va();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ke(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ke(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,En.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ke(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,c1.get())};e()}}En.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1="pendingRedirect",Oi=new Map;class f1 extends fh{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Oi.get(this.auth._key());if(!e){try{const r=await h1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Oi.set(this.auth._key(),e)}return this.bypassAuthState||Oi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function h1(t,e){const n=g1(e),r=m1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function p1(t,e){Oi.set(t._key(),e)}function m1(t){return tt(t._redirectPersistence)}function g1(t){return Ai(d1,t.config.apiKey,t.name)}async function y1(t,e,n=!1){if(Me(t.app))return Promise.reject(rt(t));const r=ln(t),i=o1(r,e),o=await new f1(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1=10*60*1e3;class w1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!hh(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ke(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=v1&&this.cachedEventUids.clear(),this.cachedEventUids.has(ec(e))}saveEventToCache(e){this.cachedEventUids.add(ec(e)),this.lastProcessedEventTime=Date.now()}}function ec(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function hh({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hh(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E1(t,e={}){return dt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,k1=/^https?/;async function I1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await E1(t);for(const n of e)try{if(C1(n))return}catch{}Be(t,"unauthorized-domain")}function C1(t){const e=fl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!k1.test(n))return!1;if(S1.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const T1=new Gr(3e4,6e4);function tc(){const t=Ge().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function P1(t){return new Promise((e,n)=>{var i,s,o;function r(){tc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{tc(),n(Ke(t,"network-request-failed"))},timeout:T1.get()})}if((s=(i=Ge().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Ge().gapi)!=null&&o.load)r();else{const l=gv("iframefcb");return Ge()[l]=()=>{gapi.load?r():n(Ke(t,"network-request-failed"))},Jf(`${mv()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Li=null,e})}let Li=null;function N1(t){return Li=Li||P1(t),Li}/**
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
 */const R1=new Gr(5e3,15e3),x1="__/auth/iframe",A1="emulator/auth/iframe",O1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},L1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function D1(t){const e=t.config;N(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ha(e,A1):`https://${t.config.authDomain}/${x1}`,r={apiKey:e.apiKey,appName:t.name,v:Kr},i=L1.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${br(r).slice(1)}`}async function M1(t){const e=await N1(t),n=Ge().gapi;return N(n,t,"internal-error"),e.open({where:document.body,url:D1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:O1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ke(t,"network-request-failed"),l=Ge().setTimeout(()=>{s(o)},R1.get());function a(){Ge().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const U1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},z1=500,F1=600,j1="_blank",B1="http://localhost";class nc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function V1(t,e,n,r=z1,i=F1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a={...U1,width:r.toString(),height:i.toString(),top:s,left:o},u=ce().toLowerCase();n&&(l=Wf(u)?j1:n),Hf(u)&&(e=e||B1,a.scrollbars="yes");const p=Object.entries(a).reduce((d,[y,w])=>`${d}${y}=${w},`,"");if(ov(u)&&l!=="_self")return H1(e||"",l),new nc(null);const m=window.open(e||"",l,p);N(m,t,"popup-blocked");try{m.focus()}catch{}return new nc(m)}function H1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const $1="__/auth/handler",W1="emulator/auth/handler",b1=encodeURIComponent("fac");async function rc(t,e,n,r,i,s){N(t.config.authDomain,t,"auth-domain-config-required"),N(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Kr,eventId:i};if(e instanceof eh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Cg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof Yr){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const a=await t._getAppCheckToken(),u=a?`#${b1}=${encodeURIComponent(a)}`:"";return`${K1(t)}?${br(l).slice(1)}${u}`}function K1({config:t}){return t.emulator?ha(t,W1):`https://${t.authDomain}/${$1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho="webStorageSupport";class G1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lh,this._completeRedirectFn=y1,this._overrideRedirectResult=p1}async _openPopup(e,n,r,i){var o;ut((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await rc(e,n,r,fl(),i);return V1(e,s,va())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await rc(e,n,r,fl(),i);return qv(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ut(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await M1(e),r=new w1(e);return n.register("authEvent",i=>(N(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ho,{type:ho},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[ho];s!==void 0&&n(!!s),Be(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=I1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Yf()||$f()||ma()}}const Q1=G1;var ic="@firebase/auth",sc="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function J1(t){Ur(new Bn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;N(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qf(t)},u=new fv(r,i,s,a);return Sv(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ur(new Bn("auth-internal",e=>{const n=ln(e.getProvider("auth").getImmediate());return(r=>new Y1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nn(ic,sc,q1(t)),Nn(ic,sc,"esm2020")}/**
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
 */const X1=5*60,Z1=Tf("authIdTokenMaxAge")||X1;let oc=null;const e0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Z1)return;const i=n==null?void 0:n.token;oc!==i&&(oc=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function t0(t=Py()){const e=xf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ev(t,{popupRedirectResolver:Q1,persistence:[s1,Gv,lh]}),r=Tf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=e0(s.toString());Hv(n,o,()=>o(n.currentUser)),Vv(n,l=>o(l))}}const i=ug("auth");return i&&kv(n,`http://${i}`),n}function n0(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}hv({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ke("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",n0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});J1("Browser");const r0={apiKey:"AIzaSyDDqSudAmgIyVT7nfg_2eJM8pf7nUQ7Hmk",authDomain:"kaydol-e1326.firebaseapp.com",projectId:"kaydol-e1326",storageBucket:"kaydol-e1326.firebasestorage.app",messagingSenderId:"272409924206",appId:"1:272409924206:web:7cdc48219e710c8b678c7f",measurementId:"G-6NG7FMP6H8"},i0=Af(r0),yi=t0(i0),s0=({message:t,type:e,onClose:n})=>(Q.useEffect(()=>{const r=setTimeout(n,3e3);return()=>clearTimeout(r)},[n]),P.jsxs("div",{className:`fixed top-10 right-10 z-[10000] flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-xl border border-white/10 ${e==="success"?"bg-green-500/20 text-green-400":"bg-red-500/20 text-red-400"}`,children:[P.jsx("div",{className:`w-2 h-2 rounded-full ${e==="success"?"bg-green-400":"bg-red-400"} animate-pulse`}),P.jsx("span",{className:"text-sm font-bold tracking-wide",children:t})]}));function o0(){const[t,e]=Q.useState("dark"),[n,r]=Q.useState(0),[i,s]=Q.useState(null),[o,l]=Q.useState(!1),[a,u]=Q.useState(!0),[p,m]=Q.useState(!1),[d,y]=Q.useState(""),[w,_]=Q.useState(""),[D,f]=Q.useState(""),[c,h]=Q.useState(null),g=(E,z="success")=>h({message:E,type:z});Q.useEffect(()=>{const E=$v(yi,A=>{s(A)}),z=()=>r(window.scrollY);return window.addEventListener("scroll",z),()=>{E(),window.removeEventListener("scroll",z)}},[]);const S=async()=>{try{const E=await zv(yi,d,w);await Bv(E.user,{displayName:D}),g(`Hoş geldin, ${D}!`),l(!1)}catch(E){g(E.message,"error")}},C=async()=>{try{await Fv(yi,d,w),g("Başarıyla giriş yapıldı!"),l(!1)}catch(E){g(E.message,"error")}},T=()=>{Wv(yi),m(!1),g("Oturum kapatıldı")};return P.jsxs("main",{className:`${t==="dark"?"bg-[#050508] text-white":"bg-[#f8f9ff] text-gray-900"} min-h-screen w-full transition-colors duration-500 relative overflow-x-hidden`,children:[c&&P.jsx(s0,{message:c.message,type:c.type,onClose:()=>h(null)}),o&&P.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl",children:P.jsxs("div",{className:"bg-[#12121a] border border-white/10 w-full max-w-md rounded-[2.5rem] overflow-hidden",children:[P.jsxs("div",{className:"p-10 text-white",children:[P.jsx("h2",{className:"text-3xl font-black mb-2 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent",children:a?"Tekrar Hoş Geldin":"Aramıza Katıl"}),P.jsxs("div",{className:"space-y-4 mt-8",children:[!a&&P.jsxs("div",{className:"relative",children:[P.jsx(xu,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-gray-500",size:18}),P.jsx("input",{type:"text",placeholder:"Nickname",className:"w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-purple-500 transition-all text-white",onChange:E=>f(E.target.value)})]}),P.jsxs("div",{className:"relative",children:[P.jsx(Jm,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-gray-500",size:18}),P.jsx("input",{type:"email",placeholder:"E-posta",className:"w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-purple-500 transition-all text-white",onChange:E=>y(E.target.value)})]}),P.jsxs("div",{className:"relative",children:[P.jsx(Qm,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-gray-500",size:18}),P.jsx("input",{type:"password",placeholder:"Şifre",className:"w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-purple-500 transition-all text-white",onChange:E=>_(E.target.value)})]})]}),P.jsx("button",{onClick:a?C:S,className:"w-full mt-8 bg-purple-600 hover:bg-purple-700 text-white font-black py-4 rounded-2xl transition-all",children:a?"Giriş Yap":"Kayıt Ol"}),P.jsx("button",{onClick:()=>u(!a),className:"w-full mt-4 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-purple-400 transition-colors",children:a?"Hesabın yok mu? Kaydol":"Zaten üye misin? Giriş yap"})]}),P.jsx("button",{onClick:()=>l(!1),className:"w-full py-4 bg-white/5 text-[10px] font-black uppercase tracking-widest text-white/30",children:"Kapat"})]})}),P.jsxs("nav",{className:"fixed top-0 w-full p-6 md:p-8 z-50 flex justify-between items-center",children:[P.jsx("div",{className:"bg-black/10 dark:bg-white/5 backdrop-blur-2xl border border-white/10 px-6 py-3 rounded-full",children:P.jsxs("span",{className:"text-[12px] font-black tracking-[0.2em] uppercase",children:["ZAHID",P.jsx("span",{className:"text-purple-500",children:"."}),"DEV"]})}),P.jsxs("div",{className:"flex items-center gap-4",children:[i?P.jsxs("div",{className:"relative",children:[P.jsxs("button",{onClick:()=>m(!p),className:"flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 pl-4 pr-3 py-2 rounded-full backdrop-blur-md transition-all",children:[P.jsx("span",{className:"text-xs font-black uppercase tracking-wider",children:i.displayName||"Kullanıcı"}),P.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center",children:P.jsx(xu,{size:16,className:"text-white"})}),P.jsx(Gm,{size:14})]}),p&&P.jsxs("div",{className:"absolute right-0 mt-3 w-48 bg-[#12121a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl",children:[P.jsxs("button",{className:"w-full flex items-center gap-3 px-6 py-4 text-sm font-bold text-gray-400 hover:text-white hover:bg-white/5 transition-all",children:[P.jsx(Zm,{size:16})," Ayarlar"]}),P.jsxs("button",{onClick:T,className:"w-full flex items-center gap-3 px-6 py-4 text-sm font-bold text-red-400 hover:bg-red-500/10 transition-all border-t border-white/5",children:[P.jsx(qm,{size:16})," Çıkış Yap"]})]})]}):P.jsxs("button",{onClick:()=>{u(!0),l(!0)},className:"flex items-center gap-2 bg-purple-600 px-6 py-3 rounded-full hover:bg-purple-700 transition-all text-white",children:[P.jsx(Ym,{size:18}),P.jsx("span",{className:"text-[10px] font-black uppercase tracking-widest",children:"Giriş Yap"})]}),P.jsx("button",{onClick:()=>e(E=>E==="dark"?"light":"dark"),className:"p-3 rounded-full bg-white/5 border border-white/10 hover:scale-110 transition-transform",children:t==="dark"?P.jsx(eg,{size:20,className:"text-yellow-400"}):P.jsx(Xm,{size:20,className:"text-indigo-600"})})]})]}),P.jsxs("section",{className:"h-screen flex flex-col items-center justify-center relative",children:[P.jsxs("h1",{className:"text-[16vw] font-black tracking-tighter leading-none select-none",style:{opacity:Math.max(0,1-n/600),transform:`translateY(${-n*.1}px)`},children:["ZAHID",P.jsx("span",{className:"text-purple-600",children:"."})]}),P.jsx(Km,{size:32,className:"mt-12 animate-bounce opacity-30"})]}),P.jsx("style",{jsx:!0,global:!0,children:`
        body::-webkit-scrollbar { width: 5px; }
        body::-webkit-scrollbar-thumb { background: #9333ea; border-radius: 10px; }
      `})]})}po.createRoot(document.getElementById("root")).render(P.jsx(Ah.StrictMode,{children:P.jsx(o0,{})}));
