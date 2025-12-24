(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Q1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var zv={exports:{}},Ju={},$v={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Da=Symbol.for("react.element"),Y1=Symbol.for("react.portal"),X1=Symbol.for("react.fragment"),J1=Symbol.for("react.strict_mode"),Z1=Symbol.for("react.profiler"),eS=Symbol.for("react.provider"),tS=Symbol.for("react.context"),nS=Symbol.for("react.forward_ref"),rS=Symbol.for("react.suspense"),iS=Symbol.for("react.memo"),sS=Symbol.for("react.lazy"),Mg=Symbol.iterator;function oS(t){return t===null||typeof t!="object"?null:(t=Mg&&t[Mg]||t["@@iterator"],typeof t=="function"?t:null)}var qv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hv=Object.assign,Wv={};function Gs(t,e,n){this.props=t,this.context=e,this.refs=Wv,this.updater=n||qv}Gs.prototype.isReactComponent={};Gs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Gs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Kv(){}Kv.prototype=Gs.prototype;function bf(t,e,n){this.props=t,this.context=e,this.refs=Wv,this.updater=n||qv}var Df=bf.prototype=new Kv;Df.constructor=bf;Hv(Df,Gs.prototype);Df.isPureReactComponent=!0;var Ug=Array.isArray,Gv=Object.prototype.hasOwnProperty,Lf={current:null},Qv={key:!0,ref:!0,__self:!0,__source:!0};function Yv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Gv.call(e,r)&&!Qv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Da,type:t,key:s,ref:o,props:i,_owner:Lf.current}}function aS(t,e){return{$$typeof:Da,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Of(t){return typeof t=="object"&&t!==null&&t.$$typeof===Da}function lS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Fg=/\/+/g;function ph(t,e){return typeof t=="object"&&t!==null&&t.key!=null?lS(""+t.key):e.toString(36)}function Ll(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Da:case Y1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ph(o,0):r,Ug(i)?(n="",t!=null&&(n=t.replace(Fg,"$&/")+"/"),Ll(i,e,n,"",function(c){return c})):i!=null&&(Of(i)&&(i=aS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Fg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ug(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+ph(s,l);o+=Ll(s,e,n,u,i)}else if(u=oS(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+ph(s,l++),o+=Ll(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ul(t,e,n){if(t==null)return t;var r=[],i=0;return Ll(t,r,"","",function(s){return e.call(n,s,i++)}),r}function uS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Et={current:null},Ol={transition:null},cS={ReactCurrentDispatcher:Et,ReactCurrentBatchConfig:Ol,ReactCurrentOwner:Lf};function Xv(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:ul,forEach:function(t,e,n){ul(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ul(t,function(){e++}),e},toArray:function(t){return ul(t,function(e){return e})||[]},only:function(t){if(!Of(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=Gs;re.Fragment=X1;re.Profiler=Z1;re.PureComponent=bf;re.StrictMode=J1;re.Suspense=rS;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cS;re.act=Xv;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Hv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Lf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Gv.call(e,u)&&!Qv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Da,type:t.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:tS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:eS,_context:t},t.Consumer=t};re.createElement=Yv;re.createFactory=function(t){var e=Yv.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:nS,render:t}};re.isValidElement=Of;re.lazy=function(t){return{$$typeof:sS,_payload:{_status:-1,_result:t},_init:uS}};re.memo=function(t,e){return{$$typeof:iS,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=Ol.transition;Ol.transition={};try{t()}finally{Ol.transition=e}};re.unstable_act=Xv;re.useCallback=function(t,e){return Et.current.useCallback(t,e)};re.useContext=function(t){return Et.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return Et.current.useDeferredValue(t)};re.useEffect=function(t,e){return Et.current.useEffect(t,e)};re.useId=function(){return Et.current.useId()};re.useImperativeHandle=function(t,e,n){return Et.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return Et.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return Et.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return Et.current.useMemo(t,e)};re.useReducer=function(t,e,n){return Et.current.useReducer(t,e,n)};re.useRef=function(t){return Et.current.useRef(t)};re.useState=function(t){return Et.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return Et.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return Et.current.useTransition()};re.version="18.3.1";$v.exports=re;var b=$v.exports;const hS=Q1(b);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dS=b,fS=Symbol.for("react.element"),pS=Symbol.for("react.fragment"),mS=Object.prototype.hasOwnProperty,gS=dS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yS={key:!0,ref:!0,__self:!0,__source:!0};function Jv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)mS.call(e,r)&&!yS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:fS,type:t,key:s,ref:o,props:i,_owner:gS.current}}Ju.Fragment=pS;Ju.jsx=Jv;Ju.jsxs=Jv;zv.exports=Ju;var g=zv.exports,ld={},Zv={exports:{}},zt={},ew={exports:{}},tw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Y){var te=$.length;$.push(Y);e:for(;0<te;){var fe=te-1>>>1,_e=$[fe];if(0<i(_e,Y))$[fe]=Y,$[te]=_e,te=fe;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Y=$[0],te=$.pop();if(te!==Y){$[0]=te;e:for(var fe=0,_e=$.length,jn=_e>>>1;fe<jn;){var gt=2*(fe+1)-1,wn=$[gt],St=gt+1,W=$[St];if(0>i(wn,te))St<_e&&0>i(W,wn)?($[fe]=W,$[St]=te,fe=St):($[fe]=wn,$[gt]=te,fe=gt);else if(St<_e&&0>i(W,te))$[fe]=W,$[St]=te,fe=St;else break e}}return Y}function i($,Y){var te=$.sortIndex-Y.sortIndex;return te!==0?te:$.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,m=3,y=!1,A=!1,R=!1,P=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I($){for(var Y=n(c);Y!==null;){if(Y.callback===null)r(c);else if(Y.startTime<=$)r(c),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(c)}}function L($){if(R=!1,I($),!A)if(n(u)!==null)A=!0,It(V);else{var Y=n(c);Y!==null&&vn(L,Y.startTime-$)}}function V($,Y){A=!1,R&&(R=!1,_(v),v=-1),y=!0;var te=m;try{for(I(Y),p=n(u);p!==null&&(!(p.expirationTime>Y)||$&&!C());){var fe=p.callback;if(typeof fe=="function"){p.callback=null,m=p.priorityLevel;var _e=fe(p.expirationTime<=Y);Y=t.unstable_now(),typeof _e=="function"?p.callback=_e:p===n(u)&&r(u),I(Y)}else r(u);p=n(u)}if(p!==null)var jn=!0;else{var gt=n(c);gt!==null&&vn(L,gt.startTime-Y),jn=!1}return jn}finally{p=null,m=te,y=!1}}var F=!1,E=null,v=-1,S=5,x=-1;function C(){return!(t.unstable_now()-x<S)}function N(){if(E!==null){var $=t.unstable_now();x=$;var Y=!0;try{Y=E(!0,$)}finally{Y?k():(F=!1,E=null)}}else F=!1}var k;if(typeof T=="function")k=function(){T(N)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,ze=ie.port2;ie.port1.onmessage=N,k=function(){ze.postMessage(null)}}else k=function(){P(N,0)};function It($){E=$,F||(F=!0,k())}function vn($,Y){v=P(function(){$(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){A||y||(A=!0,It(V))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(m){case 1:case 2:case 3:var Y=3;break;default:Y=m}var te=m;m=Y;try{return $()}finally{m=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Y){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var te=m;m=$;try{return Y()}finally{m=te}},t.unstable_scheduleCallback=function($,Y,te){var fe=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?fe+te:fe):te=fe,$){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=te+_e,$={id:d++,callback:Y,priorityLevel:$,startTime:te,expirationTime:_e,sortIndex:-1},te>fe?($.sortIndex=te,e(c,$),n(u)===null&&$===n(c)&&(R?(_(v),v=-1):R=!0,vn(L,te-fe))):($.sortIndex=_e,e(u,$),A||y||(A=!0,It(V))),$},t.unstable_shouldYield=C,t.unstable_wrapCallback=function($){var Y=m;return function(){var te=m;m=Y;try{return $.apply(this,arguments)}finally{m=te}}}})(tw);ew.exports=tw;var _S=ew.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vS=b,Bt=_S;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nw=new Set,ra={};function ji(t,e){Ps(t,e),Ps(t+"Capture",e)}function Ps(t,e){for(ra[t]=e,t=0;t<e.length;t++)nw.add(e[t])}var Zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ud=Object.prototype.hasOwnProperty,wS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jg={},Bg={};function ES(t){return ud.call(Bg,t)?!0:ud.call(jg,t)?!1:wS.test(t)?Bg[t]=!0:(jg[t]=!0,!1)}function TS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function IS(t,e,n,r){if(e===null||typeof e>"u"||TS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Tt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var it={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){it[t]=new Tt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];it[e]=new Tt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){it[t]=new Tt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){it[t]=new Tt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){it[t]=new Tt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){it[t]=new Tt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){it[t]=new Tt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){it[t]=new Tt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){it[t]=new Tt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Vf=/[\-:]([a-z])/g;function Mf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Vf,Mf);it[e]=new Tt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Vf,Mf);it[e]=new Tt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Vf,Mf);it[e]=new Tt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){it[t]=new Tt(t,1,!1,t.toLowerCase(),null,!1,!1)});it.xlinkHref=new Tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){it[t]=new Tt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Uf(t,e,n,r){var i=it.hasOwnProperty(e)?it[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(IS(e,n,i,r)&&(n=null),r||i===null?ES(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var cr=vS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,cl=Symbol.for("react.element"),is=Symbol.for("react.portal"),ss=Symbol.for("react.fragment"),Ff=Symbol.for("react.strict_mode"),cd=Symbol.for("react.profiler"),rw=Symbol.for("react.provider"),iw=Symbol.for("react.context"),jf=Symbol.for("react.forward_ref"),hd=Symbol.for("react.suspense"),dd=Symbol.for("react.suspense_list"),Bf=Symbol.for("react.memo"),Sr=Symbol.for("react.lazy"),sw=Symbol.for("react.offscreen"),zg=Symbol.iterator;function Io(t){return t===null||typeof t!="object"?null:(t=zg&&t[zg]||t["@@iterator"],typeof t=="function"?t:null)}var Ce=Object.assign,mh;function bo(t){if(mh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);mh=e&&e[1]||""}return`
`+mh+t}var gh=!1;function yh(t,e){if(!t||gh)return"";gh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{gh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?bo(t):""}function SS(t){switch(t.tag){case 5:return bo(t.type);case 16:return bo("Lazy");case 13:return bo("Suspense");case 19:return bo("SuspenseList");case 0:case 2:case 15:return t=yh(t.type,!1),t;case 11:return t=yh(t.type.render,!1),t;case 1:return t=yh(t.type,!0),t;default:return""}}function fd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ss:return"Fragment";case is:return"Portal";case cd:return"Profiler";case Ff:return"StrictMode";case hd:return"Suspense";case dd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case iw:return(t.displayName||"Context")+".Consumer";case rw:return(t._context.displayName||"Context")+".Provider";case jf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Bf:return e=t.displayName||null,e!==null?e:fd(t.type)||"Memo";case Sr:e=t._payload,t=t._init;try{return fd(t(e))}catch{}}return null}function AS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fd(e);case 8:return e===Ff?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Kr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ow(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function kS(t){var e=ow(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function hl(t){t._valueTracker||(t._valueTracker=kS(t))}function aw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ow(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function iu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function pd(t,e){var n=e.checked;return Ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function $g(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Kr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function lw(t,e){e=e.checked,e!=null&&Uf(t,"checked",e,!1)}function md(t,e){lw(t,e);var n=Kr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?gd(t,e.type,n):e.hasOwnProperty("defaultValue")&&gd(t,e.type,Kr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function qg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function gd(t,e,n){(e!=="number"||iu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Do=Array.isArray;function _s(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Kr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function yd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return Ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(Do(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Kr(n)}}function uw(t,e){var n=Kr(e.value),r=Kr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Wg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function cw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _d(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?cw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var dl,hw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(dl=dl||document.createElement("div"),dl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=dl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ia(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var $o={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xS=["Webkit","ms","Moz","O"];Object.keys($o).forEach(function(t){xS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),$o[e]=$o[t]})});function dw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||$o.hasOwnProperty(t)&&$o[t]?(""+e).trim():e+"px"}function fw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=dw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var RS=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vd(t,e){if(e){if(RS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function wd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ed=null;function zf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Td=null,vs=null,ws=null;function Kg(t){if(t=Va(t)){if(typeof Td!="function")throw Error(j(280));var e=t.stateNode;e&&(e=rc(e),Td(t.stateNode,t.type,e))}}function pw(t){vs?ws?ws.push(t):ws=[t]:vs=t}function mw(){if(vs){var t=vs,e=ws;if(ws=vs=null,Kg(t),e)for(t=0;t<e.length;t++)Kg(e[t])}}function gw(t,e){return t(e)}function yw(){}var _h=!1;function _w(t,e,n){if(_h)return t(e,n);_h=!0;try{return gw(t,e,n)}finally{_h=!1,(vs!==null||ws!==null)&&(yw(),mw())}}function sa(t,e){var n=t.stateNode;if(n===null)return null;var r=rc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var Id=!1;if(Zn)try{var So={};Object.defineProperty(So,"passive",{get:function(){Id=!0}}),window.addEventListener("test",So,So),window.removeEventListener("test",So,So)}catch{Id=!1}function CS(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var qo=!1,su=null,ou=!1,Sd=null,PS={onError:function(t){qo=!0,su=t}};function NS(t,e,n,r,i,s,o,l,u){qo=!1,su=null,CS.apply(PS,arguments)}function bS(t,e,n,r,i,s,o,l,u){if(NS.apply(this,arguments),qo){if(qo){var c=su;qo=!1,su=null}else throw Error(j(198));ou||(ou=!0,Sd=c)}}function Bi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function vw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gg(t){if(Bi(t)!==t)throw Error(j(188))}function DS(t){var e=t.alternate;if(!e){if(e=Bi(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Gg(i),t;if(s===r)return Gg(i),e;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function ww(t){return t=DS(t),t!==null?Ew(t):null}function Ew(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ew(t);if(e!==null)return e;t=t.sibling}return null}var Tw=Bt.unstable_scheduleCallback,Qg=Bt.unstable_cancelCallback,LS=Bt.unstable_shouldYield,OS=Bt.unstable_requestPaint,Me=Bt.unstable_now,VS=Bt.unstable_getCurrentPriorityLevel,$f=Bt.unstable_ImmediatePriority,Iw=Bt.unstable_UserBlockingPriority,au=Bt.unstable_NormalPriority,MS=Bt.unstable_LowPriority,Sw=Bt.unstable_IdlePriority,Zu=null,xn=null;function US(t){if(xn&&typeof xn.onCommitFiberRoot=="function")try{xn.onCommitFiberRoot(Zu,t,void 0,(t.current.flags&128)===128)}catch{}}var cn=Math.clz32?Math.clz32:BS,FS=Math.log,jS=Math.LN2;function BS(t){return t>>>=0,t===0?32:31-(FS(t)/jS|0)|0}var fl=64,pl=4194304;function Lo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function lu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Lo(l):(s&=o,s!==0&&(r=Lo(s)))}else o=n&~i,o!==0?r=Lo(o):s!==0&&(r=Lo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-cn(e),i=1<<n,r|=t[n],e&=~i;return r}function zS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $S(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-cn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=zS(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Ad(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Aw(){var t=fl;return fl<<=1,!(fl&4194240)&&(fl=64),t}function vh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function La(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-cn(e),t[e]=n}function qS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-cn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function qf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-cn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var pe=0;function kw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var xw,Hf,Rw,Cw,Pw,kd=!1,ml=[],Vr=null,Mr=null,Ur=null,oa=new Map,aa=new Map,kr=[],HS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yg(t,e){switch(t){case"focusin":case"focusout":Vr=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Ur=null;break;case"pointerover":case"pointerout":oa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":aa.delete(e.pointerId)}}function Ao(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Va(e),e!==null&&Hf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function WS(t,e,n,r,i){switch(e){case"focusin":return Vr=Ao(Vr,t,e,n,r,i),!0;case"dragenter":return Mr=Ao(Mr,t,e,n,r,i),!0;case"mouseover":return Ur=Ao(Ur,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return oa.set(s,Ao(oa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,aa.set(s,Ao(aa.get(s)||null,t,e,n,r,i)),!0}return!1}function Nw(t){var e=vi(t.target);if(e!==null){var n=Bi(e);if(n!==null){if(e=n.tag,e===13){if(e=vw(n),e!==null){t.blockedOn=e,Pw(t.priority,function(){Rw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=xd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ed=r,n.target.dispatchEvent(r),Ed=null}else return e=Va(n),e!==null&&Hf(e),t.blockedOn=n,!1;e.shift()}return!0}function Xg(t,e,n){Vl(t)&&n.delete(e)}function KS(){kd=!1,Vr!==null&&Vl(Vr)&&(Vr=null),Mr!==null&&Vl(Mr)&&(Mr=null),Ur!==null&&Vl(Ur)&&(Ur=null),oa.forEach(Xg),aa.forEach(Xg)}function ko(t,e){t.blockedOn===e&&(t.blockedOn=null,kd||(kd=!0,Bt.unstable_scheduleCallback(Bt.unstable_NormalPriority,KS)))}function la(t){function e(i){return ko(i,t)}if(0<ml.length){ko(ml[0],t);for(var n=1;n<ml.length;n++){var r=ml[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Vr!==null&&ko(Vr,t),Mr!==null&&ko(Mr,t),Ur!==null&&ko(Ur,t),oa.forEach(e),aa.forEach(e),n=0;n<kr.length;n++)r=kr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<kr.length&&(n=kr[0],n.blockedOn===null);)Nw(n),n.blockedOn===null&&kr.shift()}var Es=cr.ReactCurrentBatchConfig,uu=!0;function GS(t,e,n,r){var i=pe,s=Es.transition;Es.transition=null;try{pe=1,Wf(t,e,n,r)}finally{pe=i,Es.transition=s}}function QS(t,e,n,r){var i=pe,s=Es.transition;Es.transition=null;try{pe=4,Wf(t,e,n,r)}finally{pe=i,Es.transition=s}}function Wf(t,e,n,r){if(uu){var i=xd(t,e,n,r);if(i===null)Ch(t,e,r,cu,n),Yg(t,r);else if(WS(i,t,e,n,r))r.stopPropagation();else if(Yg(t,r),e&4&&-1<HS.indexOf(t)){for(;i!==null;){var s=Va(i);if(s!==null&&xw(s),s=xd(t,e,n,r),s===null&&Ch(t,e,r,cu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ch(t,e,r,null,n)}}var cu=null;function xd(t,e,n,r){if(cu=null,t=zf(r),t=vi(t),t!==null)if(e=Bi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=vw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return cu=t,null}function bw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(VS()){case $f:return 1;case Iw:return 4;case au:case MS:return 16;case Sw:return 536870912;default:return 16}default:return 16}}var br=null,Kf=null,Ml=null;function Dw(){if(Ml)return Ml;var t,e=Kf,n=e.length,r,i="value"in br?br.value:br.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ml=i.slice(t,1<r?1-r:void 0)}function Ul(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function gl(){return!0}function Jg(){return!1}function $t(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?gl:Jg,this.isPropagationStopped=Jg,this}return Ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),e}var Qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gf=$t(Qs),Oa=Ce({},Qs,{view:0,detail:0}),YS=$t(Oa),wh,Eh,xo,ec=Ce({},Oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xo&&(xo&&t.type==="mousemove"?(wh=t.screenX-xo.screenX,Eh=t.screenY-xo.screenY):Eh=wh=0,xo=t),wh)},movementY:function(t){return"movementY"in t?t.movementY:Eh}}),Zg=$t(ec),XS=Ce({},ec,{dataTransfer:0}),JS=$t(XS),ZS=Ce({},Oa,{relatedTarget:0}),Th=$t(ZS),eA=Ce({},Qs,{animationName:0,elapsedTime:0,pseudoElement:0}),tA=$t(eA),nA=Ce({},Qs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),rA=$t(nA),iA=Ce({},Qs,{data:0}),ey=$t(iA),sA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},aA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=aA[t])?!!e[t]:!1}function Qf(){return lA}var uA=Ce({},Oa,{key:function(t){if(t.key){var e=sA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ul(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?oA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qf,charCode:function(t){return t.type==="keypress"?Ul(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ul(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),cA=$t(uA),hA=Ce({},ec,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ty=$t(hA),dA=Ce({},Oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qf}),fA=$t(dA),pA=Ce({},Qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),mA=$t(pA),gA=Ce({},ec,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yA=$t(gA),_A=[9,13,27,32],Yf=Zn&&"CompositionEvent"in window,Ho=null;Zn&&"documentMode"in document&&(Ho=document.documentMode);var vA=Zn&&"TextEvent"in window&&!Ho,Lw=Zn&&(!Yf||Ho&&8<Ho&&11>=Ho),ny=" ",ry=!1;function Ow(t,e){switch(t){case"keyup":return _A.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var os=!1;function wA(t,e){switch(t){case"compositionend":return Vw(e);case"keypress":return e.which!==32?null:(ry=!0,ny);case"textInput":return t=e.data,t===ny&&ry?null:t;default:return null}}function EA(t,e){if(os)return t==="compositionend"||!Yf&&Ow(t,e)?(t=Dw(),Ml=Kf=br=null,os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Lw&&e.locale!=="ko"?null:e.data;default:return null}}var TA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function iy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!TA[t.type]:e==="textarea"}function Mw(t,e,n,r){pw(r),e=hu(e,"onChange"),0<e.length&&(n=new Gf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Wo=null,ua=null;function IA(t){Gw(t,0)}function tc(t){var e=us(t);if(aw(e))return t}function SA(t,e){if(t==="change")return e}var Uw=!1;if(Zn){var Ih;if(Zn){var Sh="oninput"in document;if(!Sh){var sy=document.createElement("div");sy.setAttribute("oninput","return;"),Sh=typeof sy.oninput=="function"}Ih=Sh}else Ih=!1;Uw=Ih&&(!document.documentMode||9<document.documentMode)}function oy(){Wo&&(Wo.detachEvent("onpropertychange",Fw),ua=Wo=null)}function Fw(t){if(t.propertyName==="value"&&tc(ua)){var e=[];Mw(e,ua,t,zf(t)),_w(IA,e)}}function AA(t,e,n){t==="focusin"?(oy(),Wo=e,ua=n,Wo.attachEvent("onpropertychange",Fw)):t==="focusout"&&oy()}function kA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return tc(ua)}function xA(t,e){if(t==="click")return tc(e)}function RA(t,e){if(t==="input"||t==="change")return tc(e)}function CA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var fn=typeof Object.is=="function"?Object.is:CA;function ca(t,e){if(fn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ud.call(e,i)||!fn(t[i],e[i]))return!1}return!0}function ay(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ly(t,e){var n=ay(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ay(n)}}function jw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?jw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Bw(){for(var t=window,e=iu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=iu(t.document)}return e}function Xf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function PA(t){var e=Bw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&jw(n.ownerDocument.documentElement,n)){if(r!==null&&Xf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ly(n,s);var o=ly(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var NA=Zn&&"documentMode"in document&&11>=document.documentMode,as=null,Rd=null,Ko=null,Cd=!1;function uy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cd||as==null||as!==iu(r)||(r=as,"selectionStart"in r&&Xf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ko&&ca(Ko,r)||(Ko=r,r=hu(Rd,"onSelect"),0<r.length&&(e=new Gf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=as)))}function yl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ls={animationend:yl("Animation","AnimationEnd"),animationiteration:yl("Animation","AnimationIteration"),animationstart:yl("Animation","AnimationStart"),transitionend:yl("Transition","TransitionEnd")},Ah={},zw={};Zn&&(zw=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function nc(t){if(Ah[t])return Ah[t];if(!ls[t])return t;var e=ls[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in zw)return Ah[t]=e[n];return t}var $w=nc("animationend"),qw=nc("animationiteration"),Hw=nc("animationstart"),Ww=nc("transitionend"),Kw=new Map,cy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ti(t,e){Kw.set(t,e),ji(e,[t])}for(var kh=0;kh<cy.length;kh++){var xh=cy[kh],bA=xh.toLowerCase(),DA=xh[0].toUpperCase()+xh.slice(1);ti(bA,"on"+DA)}ti($w,"onAnimationEnd");ti(qw,"onAnimationIteration");ti(Hw,"onAnimationStart");ti("dblclick","onDoubleClick");ti("focusin","onFocus");ti("focusout","onBlur");ti(Ww,"onTransitionEnd");Ps("onMouseEnter",["mouseout","mouseover"]);Ps("onMouseLeave",["mouseout","mouseover"]);Ps("onPointerEnter",["pointerout","pointerover"]);Ps("onPointerLeave",["pointerout","pointerover"]);ji("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ji("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ji("onBeforeInput",["compositionend","keypress","textInput","paste"]);ji("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ji("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ji("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LA=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oo));function hy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,bS(r,e,void 0,t),t.currentTarget=null}function Gw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;hy(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;hy(i,l,c),s=u}}}if(ou)throw t=Sd,ou=!1,Sd=null,t}function Te(t,e){var n=e[Ld];n===void 0&&(n=e[Ld]=new Set);var r=t+"__bubble";n.has(r)||(Qw(e,t,2,!1),n.add(r))}function Rh(t,e,n){var r=0;e&&(r|=4),Qw(n,t,r,e)}var _l="_reactListening"+Math.random().toString(36).slice(2);function ha(t){if(!t[_l]){t[_l]=!0,nw.forEach(function(n){n!=="selectionchange"&&(LA.has(n)||Rh(n,!1,t),Rh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[_l]||(e[_l]=!0,Rh("selectionchange",!1,e))}}function Qw(t,e,n,r){switch(bw(e)){case 1:var i=GS;break;case 4:i=QS;break;default:i=Wf}n=i.bind(null,e,n,t),i=void 0,!Id||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ch(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=vi(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}_w(function(){var c=s,d=zf(n),p=[];e:{var m=Kw.get(t);if(m!==void 0){var y=Gf,A=t;switch(t){case"keypress":if(Ul(n)===0)break e;case"keydown":case"keyup":y=cA;break;case"focusin":A="focus",y=Th;break;case"focusout":A="blur",y=Th;break;case"beforeblur":case"afterblur":y=Th;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Zg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=JS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=fA;break;case $w:case qw:case Hw:y=tA;break;case Ww:y=mA;break;case"scroll":y=YS;break;case"wheel":y=yA;break;case"copy":case"cut":case"paste":y=rA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=ty}var R=(e&4)!==0,P=!R&&t==="scroll",_=R?m!==null?m+"Capture":null:m;R=[];for(var T=c,I;T!==null;){I=T;var L=I.stateNode;if(I.tag===5&&L!==null&&(I=L,_!==null&&(L=sa(T,_),L!=null&&R.push(da(T,L,I)))),P)break;T=T.return}0<R.length&&(m=new y(m,A,null,n,d),p.push({event:m,listeners:R}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",m&&n!==Ed&&(A=n.relatedTarget||n.fromElement)&&(vi(A)||A[er]))break e;if((y||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,y?(A=n.relatedTarget||n.toElement,y=c,A=A?vi(A):null,A!==null&&(P=Bi(A),A!==P||A.tag!==5&&A.tag!==6)&&(A=null)):(y=null,A=c),y!==A)){if(R=Zg,L="onMouseLeave",_="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(R=ty,L="onPointerLeave",_="onPointerEnter",T="pointer"),P=y==null?m:us(y),I=A==null?m:us(A),m=new R(L,T+"leave",y,n,d),m.target=P,m.relatedTarget=I,L=null,vi(d)===c&&(R=new R(_,T+"enter",A,n,d),R.target=I,R.relatedTarget=P,L=R),P=L,y&&A)t:{for(R=y,_=A,T=0,I=R;I;I=Zi(I))T++;for(I=0,L=_;L;L=Zi(L))I++;for(;0<T-I;)R=Zi(R),T--;for(;0<I-T;)_=Zi(_),I--;for(;T--;){if(R===_||_!==null&&R===_.alternate)break t;R=Zi(R),_=Zi(_)}R=null}else R=null;y!==null&&dy(p,m,y,R,!1),A!==null&&P!==null&&dy(p,P,A,R,!0)}}e:{if(m=c?us(c):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var V=SA;else if(iy(m))if(Uw)V=RA;else{V=kA;var F=AA}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(V=xA);if(V&&(V=V(t,c))){Mw(p,V,n,d);break e}F&&F(t,m,c),t==="focusout"&&(F=m._wrapperState)&&F.controlled&&m.type==="number"&&gd(m,"number",m.value)}switch(F=c?us(c):window,t){case"focusin":(iy(F)||F.contentEditable==="true")&&(as=F,Rd=c,Ko=null);break;case"focusout":Ko=Rd=as=null;break;case"mousedown":Cd=!0;break;case"contextmenu":case"mouseup":case"dragend":Cd=!1,uy(p,n,d);break;case"selectionchange":if(NA)break;case"keydown":case"keyup":uy(p,n,d)}var E;if(Yf)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else os?Ow(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(Lw&&n.locale!=="ko"&&(os||v!=="onCompositionStart"?v==="onCompositionEnd"&&os&&(E=Dw()):(br=d,Kf="value"in br?br.value:br.textContent,os=!0)),F=hu(c,v),0<F.length&&(v=new ey(v,t,null,n,d),p.push({event:v,listeners:F}),E?v.data=E:(E=Vw(n),E!==null&&(v.data=E)))),(E=vA?wA(t,n):EA(t,n))&&(c=hu(c,"onBeforeInput"),0<c.length&&(d=new ey("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=E))}Gw(p,e)})}function da(t,e,n){return{instance:t,listener:e,currentTarget:n}}function hu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=sa(t,n),s!=null&&r.unshift(da(t,s,i)),s=sa(t,e),s!=null&&r.push(da(t,s,i))),t=t.return}return r}function Zi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function dy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=sa(n,s),u!=null&&o.unshift(da(n,u,l))):i||(u=sa(n,s),u!=null&&o.push(da(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var OA=/\r\n?/g,VA=/\u0000|\uFFFD/g;function fy(t){return(typeof t=="string"?t:""+t).replace(OA,`
`).replace(VA,"")}function vl(t,e,n){if(e=fy(e),fy(t)!==e&&n)throw Error(j(425))}function du(){}var Pd=null,Nd=null;function bd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Dd=typeof setTimeout=="function"?setTimeout:void 0,MA=typeof clearTimeout=="function"?clearTimeout:void 0,py=typeof Promise=="function"?Promise:void 0,UA=typeof queueMicrotask=="function"?queueMicrotask:typeof py<"u"?function(t){return py.resolve(null).then(t).catch(FA)}:Dd;function FA(t){setTimeout(function(){throw t})}function Ph(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),la(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);la(e)}function Fr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function my(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ys=Math.random().toString(36).slice(2),kn="__reactFiber$"+Ys,fa="__reactProps$"+Ys,er="__reactContainer$"+Ys,Ld="__reactEvents$"+Ys,jA="__reactListeners$"+Ys,BA="__reactHandles$"+Ys;function vi(t){var e=t[kn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[er]||n[kn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=my(t);t!==null;){if(n=t[kn])return n;t=my(t)}return e}t=n,n=t.parentNode}return null}function Va(t){return t=t[kn]||t[er],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function us(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function rc(t){return t[fa]||null}var Od=[],cs=-1;function ni(t){return{current:t}}function Se(t){0>cs||(t.current=Od[cs],Od[cs]=null,cs--)}function we(t,e){cs++,Od[cs]=t.current,t.current=e}var Gr={},pt=ni(Gr),Pt=ni(!1),Ci=Gr;function Ns(t,e){var n=t.type.contextTypes;if(!n)return Gr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Nt(t){return t=t.childContextTypes,t!=null}function fu(){Se(Pt),Se(pt)}function gy(t,e,n){if(pt.current!==Gr)throw Error(j(168));we(pt,e),we(Pt,n)}function Yw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(j(108,AS(t)||"Unknown",i));return Ce({},n,r)}function pu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Gr,Ci=pt.current,we(pt,t),we(Pt,Pt.current),!0}function yy(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=Yw(t,e,Ci),r.__reactInternalMemoizedMergedChildContext=t,Se(Pt),Se(pt),we(pt,t)):Se(Pt),we(Pt,n)}var $n=null,ic=!1,Nh=!1;function Xw(t){$n===null?$n=[t]:$n.push(t)}function zA(t){ic=!0,Xw(t)}function ri(){if(!Nh&&$n!==null){Nh=!0;var t=0,e=pe;try{var n=$n;for(pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}$n=null,ic=!1}catch(i){throw $n!==null&&($n=$n.slice(t+1)),Tw($f,ri),i}finally{pe=e,Nh=!1}}return null}var hs=[],ds=0,mu=null,gu=0,Wt=[],Kt=0,Pi=null,qn=1,Hn="";function mi(t,e){hs[ds++]=gu,hs[ds++]=mu,mu=t,gu=e}function Jw(t,e,n){Wt[Kt++]=qn,Wt[Kt++]=Hn,Wt[Kt++]=Pi,Pi=t;var r=qn;t=Hn;var i=32-cn(r)-1;r&=~(1<<i),n+=1;var s=32-cn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,qn=1<<32-cn(e)+i|n<<i|r,Hn=s+t}else qn=1<<s|n<<i|r,Hn=t}function Jf(t){t.return!==null&&(mi(t,1),Jw(t,1,0))}function Zf(t){for(;t===mu;)mu=hs[--ds],hs[ds]=null,gu=hs[--ds],hs[ds]=null;for(;t===Pi;)Pi=Wt[--Kt],Wt[Kt]=null,Hn=Wt[--Kt],Wt[Kt]=null,qn=Wt[--Kt],Wt[Kt]=null}var jt=null,Ut=null,Ae=!1,on=null;function Zw(t,e){var n=Qt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function _y(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,jt=t,Ut=Fr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,jt=t,Ut=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Pi!==null?{id:qn,overflow:Hn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Qt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,jt=t,Ut=null,!0):!1;default:return!1}}function Vd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Md(t){if(Ae){var e=Ut;if(e){var n=e;if(!_y(t,e)){if(Vd(t))throw Error(j(418));e=Fr(n.nextSibling);var r=jt;e&&_y(t,e)?Zw(r,n):(t.flags=t.flags&-4097|2,Ae=!1,jt=t)}}else{if(Vd(t))throw Error(j(418));t.flags=t.flags&-4097|2,Ae=!1,jt=t}}}function vy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;jt=t}function wl(t){if(t!==jt)return!1;if(!Ae)return vy(t),Ae=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!bd(t.type,t.memoizedProps)),e&&(e=Ut)){if(Vd(t))throw eE(),Error(j(418));for(;e;)Zw(t,e),e=Fr(e.nextSibling)}if(vy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ut=Fr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ut=null}}else Ut=jt?Fr(t.stateNode.nextSibling):null;return!0}function eE(){for(var t=Ut;t;)t=Fr(t.nextSibling)}function bs(){Ut=jt=null,Ae=!1}function ep(t){on===null?on=[t]:on.push(t)}var $A=cr.ReactCurrentBatchConfig;function Ro(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function El(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function wy(t){var e=t._init;return e(t._payload)}function tE(t){function e(_,T){if(t){var I=_.deletions;I===null?(_.deletions=[T],_.flags|=16):I.push(T)}}function n(_,T){if(!t)return null;for(;T!==null;)e(_,T),T=T.sibling;return null}function r(_,T){for(_=new Map;T!==null;)T.key!==null?_.set(T.key,T):_.set(T.index,T),T=T.sibling;return _}function i(_,T){return _=$r(_,T),_.index=0,_.sibling=null,_}function s(_,T,I){return _.index=I,t?(I=_.alternate,I!==null?(I=I.index,I<T?(_.flags|=2,T):I):(_.flags|=2,T)):(_.flags|=1048576,T)}function o(_){return t&&_.alternate===null&&(_.flags|=2),_}function l(_,T,I,L){return T===null||T.tag!==6?(T=Uh(I,_.mode,L),T.return=_,T):(T=i(T,I),T.return=_,T)}function u(_,T,I,L){var V=I.type;return V===ss?d(_,T,I.props.children,L,I.key):T!==null&&(T.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Sr&&wy(V)===T.type)?(L=i(T,I.props),L.ref=Ro(_,T,I),L.return=_,L):(L=Hl(I.type,I.key,I.props,null,_.mode,L),L.ref=Ro(_,T,I),L.return=_,L)}function c(_,T,I,L){return T===null||T.tag!==4||T.stateNode.containerInfo!==I.containerInfo||T.stateNode.implementation!==I.implementation?(T=Fh(I,_.mode,L),T.return=_,T):(T=i(T,I.children||[]),T.return=_,T)}function d(_,T,I,L,V){return T===null||T.tag!==7?(T=Ai(I,_.mode,L,V),T.return=_,T):(T=i(T,I),T.return=_,T)}function p(_,T,I){if(typeof T=="string"&&T!==""||typeof T=="number")return T=Uh(""+T,_.mode,I),T.return=_,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case cl:return I=Hl(T.type,T.key,T.props,null,_.mode,I),I.ref=Ro(_,null,T),I.return=_,I;case is:return T=Fh(T,_.mode,I),T.return=_,T;case Sr:var L=T._init;return p(_,L(T._payload),I)}if(Do(T)||Io(T))return T=Ai(T,_.mode,I,null),T.return=_,T;El(_,T)}return null}function m(_,T,I,L){var V=T!==null?T.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return V!==null?null:l(_,T,""+I,L);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case cl:return I.key===V?u(_,T,I,L):null;case is:return I.key===V?c(_,T,I,L):null;case Sr:return V=I._init,m(_,T,V(I._payload),L)}if(Do(I)||Io(I))return V!==null?null:d(_,T,I,L,null);El(_,I)}return null}function y(_,T,I,L,V){if(typeof L=="string"&&L!==""||typeof L=="number")return _=_.get(I)||null,l(T,_,""+L,V);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case cl:return _=_.get(L.key===null?I:L.key)||null,u(T,_,L,V);case is:return _=_.get(L.key===null?I:L.key)||null,c(T,_,L,V);case Sr:var F=L._init;return y(_,T,I,F(L._payload),V)}if(Do(L)||Io(L))return _=_.get(I)||null,d(T,_,L,V,null);El(T,L)}return null}function A(_,T,I,L){for(var V=null,F=null,E=T,v=T=0,S=null;E!==null&&v<I.length;v++){E.index>v?(S=E,E=null):S=E.sibling;var x=m(_,E,I[v],L);if(x===null){E===null&&(E=S);break}t&&E&&x.alternate===null&&e(_,E),T=s(x,T,v),F===null?V=x:F.sibling=x,F=x,E=S}if(v===I.length)return n(_,E),Ae&&mi(_,v),V;if(E===null){for(;v<I.length;v++)E=p(_,I[v],L),E!==null&&(T=s(E,T,v),F===null?V=E:F.sibling=E,F=E);return Ae&&mi(_,v),V}for(E=r(_,E);v<I.length;v++)S=y(E,_,v,I[v],L),S!==null&&(t&&S.alternate!==null&&E.delete(S.key===null?v:S.key),T=s(S,T,v),F===null?V=S:F.sibling=S,F=S);return t&&E.forEach(function(C){return e(_,C)}),Ae&&mi(_,v),V}function R(_,T,I,L){var V=Io(I);if(typeof V!="function")throw Error(j(150));if(I=V.call(I),I==null)throw Error(j(151));for(var F=V=null,E=T,v=T=0,S=null,x=I.next();E!==null&&!x.done;v++,x=I.next()){E.index>v?(S=E,E=null):S=E.sibling;var C=m(_,E,x.value,L);if(C===null){E===null&&(E=S);break}t&&E&&C.alternate===null&&e(_,E),T=s(C,T,v),F===null?V=C:F.sibling=C,F=C,E=S}if(x.done)return n(_,E),Ae&&mi(_,v),V;if(E===null){for(;!x.done;v++,x=I.next())x=p(_,x.value,L),x!==null&&(T=s(x,T,v),F===null?V=x:F.sibling=x,F=x);return Ae&&mi(_,v),V}for(E=r(_,E);!x.done;v++,x=I.next())x=y(E,_,v,x.value,L),x!==null&&(t&&x.alternate!==null&&E.delete(x.key===null?v:x.key),T=s(x,T,v),F===null?V=x:F.sibling=x,F=x);return t&&E.forEach(function(N){return e(_,N)}),Ae&&mi(_,v),V}function P(_,T,I,L){if(typeof I=="object"&&I!==null&&I.type===ss&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case cl:e:{for(var V=I.key,F=T;F!==null;){if(F.key===V){if(V=I.type,V===ss){if(F.tag===7){n(_,F.sibling),T=i(F,I.props.children),T.return=_,_=T;break e}}else if(F.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Sr&&wy(V)===F.type){n(_,F.sibling),T=i(F,I.props),T.ref=Ro(_,F,I),T.return=_,_=T;break e}n(_,F);break}else e(_,F);F=F.sibling}I.type===ss?(T=Ai(I.props.children,_.mode,L,I.key),T.return=_,_=T):(L=Hl(I.type,I.key,I.props,null,_.mode,L),L.ref=Ro(_,T,I),L.return=_,_=L)}return o(_);case is:e:{for(F=I.key;T!==null;){if(T.key===F)if(T.tag===4&&T.stateNode.containerInfo===I.containerInfo&&T.stateNode.implementation===I.implementation){n(_,T.sibling),T=i(T,I.children||[]),T.return=_,_=T;break e}else{n(_,T);break}else e(_,T);T=T.sibling}T=Fh(I,_.mode,L),T.return=_,_=T}return o(_);case Sr:return F=I._init,P(_,T,F(I._payload),L)}if(Do(I))return A(_,T,I,L);if(Io(I))return R(_,T,I,L);El(_,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,T!==null&&T.tag===6?(n(_,T.sibling),T=i(T,I),T.return=_,_=T):(n(_,T),T=Uh(I,_.mode,L),T.return=_,_=T),o(_)):n(_,T)}return P}var Ds=tE(!0),nE=tE(!1),yu=ni(null),_u=null,fs=null,tp=null;function np(){tp=fs=_u=null}function rp(t){var e=yu.current;Se(yu),t._currentValue=e}function Ud(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ts(t,e){_u=t,tp=fs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ct=!0),t.firstContext=null)}function Jt(t){var e=t._currentValue;if(tp!==t)if(t={context:t,memoizedValue:e,next:null},fs===null){if(_u===null)throw Error(j(308));fs=t,_u.dependencies={lanes:0,firstContext:t}}else fs=fs.next=t;return e}var wi=null;function ip(t){wi===null?wi=[t]:wi.push(t)}function rE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ip(e)):(n.next=i.next,i.next=n),e.interleaved=n,tr(t,r)}function tr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ar=!1;function sp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function iE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function jr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,tr(t,n)}return i=r.interleaved,i===null?(e.next=e,ip(r)):(e.next=i.next,i.next=e),r.interleaved=e,tr(t,n)}function Fl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qf(t,n)}}function Ey(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function vu(t,e,n,r){var i=t.updateQueue;Ar=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,y=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var A=t,R=l;switch(m=e,y=n,R.tag){case 1:if(A=R.payload,typeof A=="function"){p=A.call(y,p,m);break e}p=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=R.payload,m=typeof A=="function"?A.call(y,p,m):A,m==null)break e;p=Ce({},p,m);break e;case 2:Ar=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else y={eventTime:y,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=y,u=p):d=d.next=y,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);bi|=o,t.lanes=o,t.memoizedState=p}}function Ty(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var Ma={},Rn=ni(Ma),pa=ni(Ma),ma=ni(Ma);function Ei(t){if(t===Ma)throw Error(j(174));return t}function op(t,e){switch(we(ma,e),we(pa,t),we(Rn,Ma),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:_d(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=_d(e,t)}Se(Rn),we(Rn,e)}function Ls(){Se(Rn),Se(pa),Se(ma)}function sE(t){Ei(ma.current);var e=Ei(Rn.current),n=_d(e,t.type);e!==n&&(we(pa,t),we(Rn,n))}function ap(t){pa.current===t&&(Se(Rn),Se(pa))}var xe=ni(0);function wu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bh=[];function lp(){for(var t=0;t<bh.length;t++)bh[t]._workInProgressVersionPrimary=null;bh.length=0}var jl=cr.ReactCurrentDispatcher,Dh=cr.ReactCurrentBatchConfig,Ni=0,Re=null,He=null,Je=null,Eu=!1,Go=!1,ga=0,qA=0;function at(){throw Error(j(321))}function up(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!fn(t[n],e[n]))return!1;return!0}function cp(t,e,n,r,i,s){if(Ni=s,Re=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,jl.current=t===null||t.memoizedState===null?GA:QA,t=n(r,i),Go){s=0;do{if(Go=!1,ga=0,25<=s)throw Error(j(301));s+=1,Je=He=null,e.updateQueue=null,jl.current=YA,t=n(r,i)}while(Go)}if(jl.current=Tu,e=He!==null&&He.next!==null,Ni=0,Je=He=Re=null,Eu=!1,e)throw Error(j(300));return t}function hp(){var t=ga!==0;return ga=0,t}function Sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?Re.memoizedState=Je=t:Je=Je.next=t,Je}function Zt(){if(He===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var e=Je===null?Re.memoizedState:Je.next;if(e!==null)Je=e,He=t;else{if(t===null)throw Error(j(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Je===null?Re.memoizedState=Je=t:Je=Je.next=t}return Je}function ya(t,e){return typeof e=="function"?e(t):e}function Lh(t){var e=Zt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=He,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((Ni&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Re.lanes|=d,bi|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,fn(r,e.memoizedState)||(Ct=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Re.lanes|=s,bi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Oh(t){var e=Zt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);fn(s,e.memoizedState)||(Ct=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function oE(){}function aE(t,e){var n=Re,r=Zt(),i=e(),s=!fn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ct=!0),r=r.queue,dp(cE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Je!==null&&Je.memoizedState.tag&1){if(n.flags|=2048,_a(9,uE.bind(null,n,r,i,e),void 0,null),Ze===null)throw Error(j(349));Ni&30||lE(n,e,i)}return i}function lE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function uE(t,e,n,r){e.value=n,e.getSnapshot=r,hE(e)&&dE(t)}function cE(t,e,n){return n(function(){hE(e)&&dE(t)})}function hE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!fn(t,n)}catch{return!0}}function dE(t){var e=tr(t,1);e!==null&&hn(e,t,1,-1)}function Iy(t){var e=Sn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:t},e.queue=t,t=t.dispatch=KA.bind(null,Re,t),[e.memoizedState,t]}function _a(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function fE(){return Zt().memoizedState}function Bl(t,e,n,r){var i=Sn();Re.flags|=t,i.memoizedState=_a(1|e,n,void 0,r===void 0?null:r)}function sc(t,e,n,r){var i=Zt();r=r===void 0?null:r;var s=void 0;if(He!==null){var o=He.memoizedState;if(s=o.destroy,r!==null&&up(r,o.deps)){i.memoizedState=_a(e,n,s,r);return}}Re.flags|=t,i.memoizedState=_a(1|e,n,s,r)}function Sy(t,e){return Bl(8390656,8,t,e)}function dp(t,e){return sc(2048,8,t,e)}function pE(t,e){return sc(4,2,t,e)}function mE(t,e){return sc(4,4,t,e)}function gE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function yE(t,e,n){return n=n!=null?n.concat([t]):null,sc(4,4,gE.bind(null,e,t),n)}function fp(){}function _E(t,e){var n=Zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&up(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function vE(t,e){var n=Zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&up(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function wE(t,e,n){return Ni&21?(fn(n,e)||(n=Aw(),Re.lanes|=n,bi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ct=!0),t.memoizedState=n)}function HA(t,e){var n=pe;pe=n!==0&&4>n?n:4,t(!0);var r=Dh.transition;Dh.transition={};try{t(!1),e()}finally{pe=n,Dh.transition=r}}function EE(){return Zt().memoizedState}function WA(t,e,n){var r=zr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},TE(t))IE(e,n);else if(n=rE(t,e,n,r),n!==null){var i=wt();hn(n,t,r,i),SE(n,e,r)}}function KA(t,e,n){var r=zr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(TE(t))IE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,fn(l,o)){var u=e.interleaved;u===null?(i.next=i,ip(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=rE(t,e,i,r),n!==null&&(i=wt(),hn(n,t,r,i),SE(n,e,r))}}function TE(t){var e=t.alternate;return t===Re||e!==null&&e===Re}function IE(t,e){Go=Eu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function SE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qf(t,n)}}var Tu={readContext:Jt,useCallback:at,useContext:at,useEffect:at,useImperativeHandle:at,useInsertionEffect:at,useLayoutEffect:at,useMemo:at,useReducer:at,useRef:at,useState:at,useDebugValue:at,useDeferredValue:at,useTransition:at,useMutableSource:at,useSyncExternalStore:at,useId:at,unstable_isNewReconciler:!1},GA={readContext:Jt,useCallback:function(t,e){return Sn().memoizedState=[t,e===void 0?null:e],t},useContext:Jt,useEffect:Sy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Bl(4194308,4,gE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Bl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Bl(4,2,t,e)},useMemo:function(t,e){var n=Sn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Sn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=WA.bind(null,Re,t),[r.memoizedState,t]},useRef:function(t){var e=Sn();return t={current:t},e.memoizedState=t},useState:Iy,useDebugValue:fp,useDeferredValue:function(t){return Sn().memoizedState=t},useTransition:function(){var t=Iy(!1),e=t[0];return t=HA.bind(null,t[1]),Sn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Re,i=Sn();if(Ae){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),Ze===null)throw Error(j(349));Ni&30||lE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Sy(cE.bind(null,r,s,t),[t]),r.flags|=2048,_a(9,uE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Sn(),e=Ze.identifierPrefix;if(Ae){var n=Hn,r=qn;n=(r&~(1<<32-cn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ga++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=qA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},QA={readContext:Jt,useCallback:_E,useContext:Jt,useEffect:dp,useImperativeHandle:yE,useInsertionEffect:pE,useLayoutEffect:mE,useMemo:vE,useReducer:Lh,useRef:fE,useState:function(){return Lh(ya)},useDebugValue:fp,useDeferredValue:function(t){var e=Zt();return wE(e,He.memoizedState,t)},useTransition:function(){var t=Lh(ya)[0],e=Zt().memoizedState;return[t,e]},useMutableSource:oE,useSyncExternalStore:aE,useId:EE,unstable_isNewReconciler:!1},YA={readContext:Jt,useCallback:_E,useContext:Jt,useEffect:dp,useImperativeHandle:yE,useInsertionEffect:pE,useLayoutEffect:mE,useMemo:vE,useReducer:Oh,useRef:fE,useState:function(){return Oh(ya)},useDebugValue:fp,useDeferredValue:function(t){var e=Zt();return He===null?e.memoizedState=t:wE(e,He.memoizedState,t)},useTransition:function(){var t=Oh(ya)[0],e=Zt().memoizedState;return[t,e]},useMutableSource:oE,useSyncExternalStore:aE,useId:EE,unstable_isNewReconciler:!1};function rn(t,e){if(t&&t.defaultProps){e=Ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Fd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var oc={isMounted:function(t){return(t=t._reactInternals)?Bi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=wt(),i=zr(t),s=Gn(r,i);s.payload=e,n!=null&&(s.callback=n),e=jr(t,s,i),e!==null&&(hn(e,t,i,r),Fl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=wt(),i=zr(t),s=Gn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=jr(t,s,i),e!==null&&(hn(e,t,i,r),Fl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=wt(),r=zr(t),i=Gn(n,r);i.tag=2,e!=null&&(i.callback=e),e=jr(t,i,r),e!==null&&(hn(e,t,r,n),Fl(e,t,r))}};function Ay(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ca(n,r)||!ca(i,s):!0}function AE(t,e,n){var r=!1,i=Gr,s=e.contextType;return typeof s=="object"&&s!==null?s=Jt(s):(i=Nt(e)?Ci:pt.current,r=e.contextTypes,s=(r=r!=null)?Ns(t,i):Gr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=oc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ky(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&oc.enqueueReplaceState(e,e.state,null)}function jd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},sp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Jt(s):(s=Nt(e)?Ci:pt.current,i.context=Ns(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Fd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&oc.enqueueReplaceState(i,i.state,null),vu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Os(t,e){try{var n="",r=e;do n+=SS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Vh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Bd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var XA=typeof WeakMap=="function"?WeakMap:Map;function kE(t,e,n){n=Gn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Su||(Su=!0,Xd=r),Bd(t,e)},n}function xE(t,e,n){n=Gn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Bd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Bd(t,e),typeof r!="function"&&(Br===null?Br=new Set([this]):Br.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function xy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new XA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=hk.bind(null,t,e,n),e.then(t,t))}function Ry(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Cy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Gn(-1,1),e.tag=2,jr(n,e,1))),n.lanes|=1),t)}var JA=cr.ReactCurrentOwner,Ct=!1;function vt(t,e,n,r){e.child=t===null?nE(e,null,n,r):Ds(e,t.child,n,r)}function Py(t,e,n,r,i){n=n.render;var s=e.ref;return Ts(e,i),r=cp(t,e,n,r,s,i),n=hp(),t!==null&&!Ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,nr(t,e,i)):(Ae&&n&&Jf(e),e.flags|=1,vt(t,e,r,i),e.child)}function Ny(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ep(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,RE(t,e,s,r,i)):(t=Hl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ca,n(o,r)&&t.ref===e.ref)return nr(t,e,i)}return e.flags|=1,t=$r(s,r),t.ref=e.ref,t.return=e,e.child=t}function RE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ca(s,r)&&t.ref===e.ref)if(Ct=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ct=!0);else return e.lanes=t.lanes,nr(t,e,i)}return zd(t,e,n,r,i)}function CE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(ms,Vt),Vt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,we(ms,Vt),Vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,we(ms,Vt),Vt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,we(ms,Vt),Vt|=r;return vt(t,e,i,n),e.child}function PE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function zd(t,e,n,r,i){var s=Nt(n)?Ci:pt.current;return s=Ns(e,s),Ts(e,i),n=cp(t,e,n,r,s,i),r=hp(),t!==null&&!Ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,nr(t,e,i)):(Ae&&r&&Jf(e),e.flags|=1,vt(t,e,n,i),e.child)}function by(t,e,n,r,i){if(Nt(n)){var s=!0;pu(e)}else s=!1;if(Ts(e,i),e.stateNode===null)zl(t,e),AE(e,n,r),jd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Jt(c):(c=Nt(n)?Ci:pt.current,c=Ns(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&ky(e,o,r,c),Ar=!1;var m=e.memoizedState;o.state=m,vu(e,r,o,i),u=e.memoizedState,l!==r||m!==u||Pt.current||Ar?(typeof d=="function"&&(Fd(e,n,d,r),u=e.memoizedState),(l=Ar||Ay(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,iE(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:rn(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Jt(u):(u=Nt(n)?Ci:pt.current,u=Ns(e,u));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&ky(e,o,r,u),Ar=!1,m=e.memoizedState,o.state=m,vu(e,r,o,i);var A=e.memoizedState;l!==p||m!==A||Pt.current||Ar?(typeof y=="function"&&(Fd(e,n,y,r),A=e.memoizedState),(c=Ar||Ay(e,n,c,r,m,A,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),o.props=r,o.state=A,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return $d(t,e,n,r,s,i)}function $d(t,e,n,r,i,s){PE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&yy(e,n,!1),nr(t,e,s);r=e.stateNode,JA.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ds(e,t.child,null,s),e.child=Ds(e,null,l,s)):vt(t,e,l,s),e.memoizedState=r.state,i&&yy(e,n,!0),e.child}function NE(t){var e=t.stateNode;e.pendingContext?gy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&gy(t,e.context,!1),op(t,e.containerInfo)}function Dy(t,e,n,r,i){return bs(),ep(i),e.flags|=256,vt(t,e,n,r),e.child}var qd={dehydrated:null,treeContext:null,retryLane:0};function Hd(t){return{baseLanes:t,cachePool:null,transitions:null}}function bE(t,e,n){var r=e.pendingProps,i=xe.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),we(xe,i&1),t===null)return Md(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=uc(o,r,0,null),t=Ai(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Hd(n),e.memoizedState=qd,t):pp(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return ZA(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=$r(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=$r(l,s):(s=Ai(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Hd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=qd,r}return s=t.child,t=s.sibling,r=$r(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function pp(t,e){return e=uc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Tl(t,e,n,r){return r!==null&&ep(r),Ds(e,t.child,null,n),t=pp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ZA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Vh(Error(j(422))),Tl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=uc({mode:"visible",children:r.children},i,0,null),s=Ai(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ds(e,t.child,null,o),e.child.memoizedState=Hd(o),e.memoizedState=qd,s);if(!(e.mode&1))return Tl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(j(419)),r=Vh(s,r,void 0),Tl(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ct||l){if(r=Ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,tr(t,i),hn(r,t,i,-1))}return wp(),r=Vh(Error(j(421))),Tl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=dk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ut=Fr(i.nextSibling),jt=e,Ae=!0,on=null,t!==null&&(Wt[Kt++]=qn,Wt[Kt++]=Hn,Wt[Kt++]=Pi,qn=t.id,Hn=t.overflow,Pi=e),e=pp(e,r.children),e.flags|=4096,e)}function Ly(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ud(t.return,e,n)}function Mh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function DE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(vt(t,e,r.children,n),r=xe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ly(t,n,e);else if(t.tag===19)Ly(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(we(xe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&wu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Mh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&wu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Mh(e,!0,n,null,s);break;case"together":Mh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function zl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function nr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),bi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=$r(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=$r(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ek(t,e,n){switch(e.tag){case 3:NE(e),bs();break;case 5:sE(e);break;case 1:Nt(e.type)&&pu(e);break;case 4:op(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;we(yu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(we(xe,xe.current&1),e.flags|=128,null):n&e.child.childLanes?bE(t,e,n):(we(xe,xe.current&1),t=nr(t,e,n),t!==null?t.sibling:null);we(xe,xe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return DE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(xe,xe.current),r)break;return null;case 22:case 23:return e.lanes=0,CE(t,e,n)}return nr(t,e,n)}var LE,Wd,OE,VE;LE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wd=function(){};OE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ei(Rn.current);var s=null;switch(n){case"input":i=pd(t,i),r=pd(t,r),s=[];break;case"select":i=Ce({},i,{value:void 0}),r=Ce({},r,{value:void 0}),s=[];break;case"textarea":i=yd(t,i),r=yd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=du)}vd(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ra.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ra.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Te("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};VE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Co(t,e){if(!Ae)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function lt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function tk(t,e,n){var r=e.pendingProps;switch(Zf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(e),null;case 1:return Nt(e.type)&&fu(),lt(e),null;case 3:return r=e.stateNode,Ls(),Se(Pt),Se(pt),lp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(wl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,on!==null&&(ef(on),on=null))),Wd(t,e),lt(e),null;case 5:ap(e);var i=Ei(ma.current);if(n=e.type,t!==null&&e.stateNode!=null)OE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return lt(e),null}if(t=Ei(Rn.current),wl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[kn]=e,r[fa]=s,t=(e.mode&1)!==0,n){case"dialog":Te("cancel",r),Te("close",r);break;case"iframe":case"object":case"embed":Te("load",r);break;case"video":case"audio":for(i=0;i<Oo.length;i++)Te(Oo[i],r);break;case"source":Te("error",r);break;case"img":case"image":case"link":Te("error",r),Te("load",r);break;case"details":Te("toggle",r);break;case"input":$g(r,s),Te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Te("invalid",r);break;case"textarea":Hg(r,s),Te("invalid",r)}vd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&vl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&vl(r.textContent,l,t),i=["children",""+l]):ra.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Te("scroll",r)}switch(n){case"input":hl(r),qg(r,s,!0);break;case"textarea":hl(r),Wg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=du)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=cw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[kn]=e,t[fa]=r,LE(t,e,!1,!1),e.stateNode=t;e:{switch(o=wd(n,r),n){case"dialog":Te("cancel",t),Te("close",t),i=r;break;case"iframe":case"object":case"embed":Te("load",t),i=r;break;case"video":case"audio":for(i=0;i<Oo.length;i++)Te(Oo[i],t);i=r;break;case"source":Te("error",t),i=r;break;case"img":case"image":case"link":Te("error",t),Te("load",t),i=r;break;case"details":Te("toggle",t),i=r;break;case"input":$g(t,r),i=pd(t,r),Te("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ce({},r,{value:void 0}),Te("invalid",t);break;case"textarea":Hg(t,r),i=yd(t,r),Te("invalid",t);break;default:i=r}vd(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?fw(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&hw(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ia(t,u):typeof u=="number"&&ia(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ra.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Te("scroll",t):u!=null&&Uf(t,s,u,o))}switch(n){case"input":hl(t),qg(t,r,!1);break;case"textarea":hl(t),Wg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Kr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?_s(t,!!r.multiple,s,!1):r.defaultValue!=null&&_s(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=du)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return lt(e),null;case 6:if(t&&e.stateNode!=null)VE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=Ei(ma.current),Ei(Rn.current),wl(e)){if(r=e.stateNode,n=e.memoizedProps,r[kn]=e,(s=r.nodeValue!==n)&&(t=jt,t!==null))switch(t.tag){case 3:vl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&vl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kn]=e,e.stateNode=r}return lt(e),null;case 13:if(Se(xe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ae&&Ut!==null&&e.mode&1&&!(e.flags&128))eE(),bs(),e.flags|=98560,s=!1;else if(s=wl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[kn]=e}else bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;lt(e),s=!1}else on!==null&&(ef(on),on=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||xe.current&1?We===0&&(We=3):wp())),e.updateQueue!==null&&(e.flags|=4),lt(e),null);case 4:return Ls(),Wd(t,e),t===null&&ha(e.stateNode.containerInfo),lt(e),null;case 10:return rp(e.type._context),lt(e),null;case 17:return Nt(e.type)&&fu(),lt(e),null;case 19:if(Se(xe),s=e.memoizedState,s===null)return lt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Co(s,!1);else{if(We!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=wu(t),o!==null){for(e.flags|=128,Co(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return we(xe,xe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Me()>Vs&&(e.flags|=128,r=!0,Co(s,!1),e.lanes=4194304)}else{if(!r)if(t=wu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Co(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ae)return lt(e),null}else 2*Me()-s.renderingStartTime>Vs&&n!==1073741824&&(e.flags|=128,r=!0,Co(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Me(),e.sibling=null,n=xe.current,we(xe,r?n&1|2:n&1),e):(lt(e),null);case 22:case 23:return vp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Vt&1073741824&&(lt(e),e.subtreeFlags&6&&(e.flags|=8192)):lt(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function nk(t,e){switch(Zf(e),e.tag){case 1:return Nt(e.type)&&fu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ls(),Se(Pt),Se(pt),lp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ap(e),null;case 13:if(Se(xe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Se(xe),null;case 4:return Ls(),null;case 10:return rp(e.type._context),null;case 22:case 23:return vp(),null;case 24:return null;default:return null}}var Il=!1,ht=!1,rk=typeof WeakSet=="function"?WeakSet:Set,H=null;function ps(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(t,e,r)}else n.current=null}function Kd(t,e,n){try{n()}catch(r){De(t,e,r)}}var Oy=!1;function ik(t,e){if(Pd=uu,t=Bw(),Xf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var y;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(y=p.firstChild)!==null;)m=p,p=y;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(y=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=y}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nd={focusedElem:t,selectionRange:n},uu=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var R=A.memoizedProps,P=A.memoizedState,_=e.stateNode,T=_.getSnapshotBeforeUpdate(e.elementType===e.type?R:rn(e.type,R),P);_.__reactInternalSnapshotBeforeUpdate=T}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(L){De(e,e.return,L)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return A=Oy,Oy=!1,A}function Qo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Kd(e,n,s)}i=i.next}while(i!==r)}}function ac(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Gd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ME(t){var e=t.alternate;e!==null&&(t.alternate=null,ME(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[kn],delete e[fa],delete e[Ld],delete e[jA],delete e[BA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function UE(t){return t.tag===5||t.tag===3||t.tag===4}function Vy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||UE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=du));else if(r!==4&&(t=t.child,t!==null))for(Qd(t,e,n),t=t.sibling;t!==null;)Qd(t,e,n),t=t.sibling}function Yd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Yd(t,e,n),t=t.sibling;t!==null;)Yd(t,e,n),t=t.sibling}var et=null,sn=!1;function Er(t,e,n){for(n=n.child;n!==null;)FE(t,e,n),n=n.sibling}function FE(t,e,n){if(xn&&typeof xn.onCommitFiberUnmount=="function")try{xn.onCommitFiberUnmount(Zu,n)}catch{}switch(n.tag){case 5:ht||ps(n,e);case 6:var r=et,i=sn;et=null,Er(t,e,n),et=r,sn=i,et!==null&&(sn?(t=et,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):et.removeChild(n.stateNode));break;case 18:et!==null&&(sn?(t=et,n=n.stateNode,t.nodeType===8?Ph(t.parentNode,n):t.nodeType===1&&Ph(t,n),la(t)):Ph(et,n.stateNode));break;case 4:r=et,i=sn,et=n.stateNode.containerInfo,sn=!0,Er(t,e,n),et=r,sn=i;break;case 0:case 11:case 14:case 15:if(!ht&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Kd(n,e,o),i=i.next}while(i!==r)}Er(t,e,n);break;case 1:if(!ht&&(ps(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){De(n,e,l)}Er(t,e,n);break;case 21:Er(t,e,n);break;case 22:n.mode&1?(ht=(r=ht)||n.memoizedState!==null,Er(t,e,n),ht=r):Er(t,e,n);break;default:Er(t,e,n)}}function My(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new rk),e.forEach(function(r){var i=fk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function nn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:et=l.stateNode,sn=!1;break e;case 3:et=l.stateNode.containerInfo,sn=!0;break e;case 4:et=l.stateNode.containerInfo,sn=!0;break e}l=l.return}if(et===null)throw Error(j(160));FE(s,o,i),et=null,sn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){De(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)jE(e,t),e=e.sibling}function jE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(nn(e,t),In(t),r&4){try{Qo(3,t,t.return),ac(3,t)}catch(R){De(t,t.return,R)}try{Qo(5,t,t.return)}catch(R){De(t,t.return,R)}}break;case 1:nn(e,t),In(t),r&512&&n!==null&&ps(n,n.return);break;case 5:if(nn(e,t),In(t),r&512&&n!==null&&ps(n,n.return),t.flags&32){var i=t.stateNode;try{ia(i,"")}catch(R){De(t,t.return,R)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&lw(i,s),wd(l,o);var c=wd(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?fw(i,p):d==="dangerouslySetInnerHTML"?hw(i,p):d==="children"?ia(i,p):Uf(i,d,p,c)}switch(l){case"input":md(i,s);break;case"textarea":uw(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?_s(i,!!s.multiple,y,!1):m!==!!s.multiple&&(s.defaultValue!=null?_s(i,!!s.multiple,s.defaultValue,!0):_s(i,!!s.multiple,s.multiple?[]:"",!1))}i[fa]=s}catch(R){De(t,t.return,R)}}break;case 6:if(nn(e,t),In(t),r&4){if(t.stateNode===null)throw Error(j(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(R){De(t,t.return,R)}}break;case 3:if(nn(e,t),In(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{la(e.containerInfo)}catch(R){De(t,t.return,R)}break;case 4:nn(e,t),In(t);break;case 13:nn(e,t),In(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(yp=Me())),r&4&&My(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(ht=(c=ht)||d,nn(e,t),ht=c):nn(e,t),In(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(H=t,d=t.child;d!==null;){for(p=H=d;H!==null;){switch(m=H,y=m.child,m.tag){case 0:case 11:case 14:case 15:Qo(4,m,m.return);break;case 1:ps(m,m.return);var A=m.stateNode;if(typeof A.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(R){De(r,n,R)}}break;case 5:ps(m,m.return);break;case 22:if(m.memoizedState!==null){Fy(p);continue}}y!==null?(y.return=m,H=y):Fy(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=dw("display",o))}catch(R){De(t,t.return,R)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(R){De(t,t.return,R)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:nn(e,t),In(t),r&4&&My(t);break;case 21:break;default:nn(e,t),In(t)}}function In(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(UE(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ia(i,""),r.flags&=-33);var s=Vy(t);Yd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Vy(t);Qd(t,l,o);break;default:throw Error(j(161))}}catch(u){De(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function sk(t,e,n){H=t,BE(t)}function BE(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Il;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ht;l=Il;var c=ht;if(Il=o,(ht=u)&&!c)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?jy(i):u!==null?(u.return=o,H=u):jy(i);for(;s!==null;)H=s,BE(s),s=s.sibling;H=i,Il=l,ht=c}Uy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):Uy(t)}}function Uy(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ht||ac(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ht)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:rn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ty(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ty(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&la(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}ht||e.flags&512&&Gd(e)}catch(m){De(e,e.return,m)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function Fy(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function jy(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ac(4,e)}catch(u){De(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){De(e,i,u)}}var s=e.return;try{Gd(e)}catch(u){De(e,s,u)}break;case 5:var o=e.return;try{Gd(e)}catch(u){De(e,o,u)}}}catch(u){De(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var ok=Math.ceil,Iu=cr.ReactCurrentDispatcher,mp=cr.ReactCurrentOwner,Yt=cr.ReactCurrentBatchConfig,ue=0,Ze=null,Fe=null,rt=0,Vt=0,ms=ni(0),We=0,va=null,bi=0,lc=0,gp=0,Yo=null,kt=null,yp=0,Vs=1/0,Bn=null,Su=!1,Xd=null,Br=null,Sl=!1,Dr=null,Au=0,Xo=0,Jd=null,$l=-1,ql=0;function wt(){return ue&6?Me():$l!==-1?$l:$l=Me()}function zr(t){return t.mode&1?ue&2&&rt!==0?rt&-rt:$A.transition!==null?(ql===0&&(ql=Aw()),ql):(t=pe,t!==0||(t=window.event,t=t===void 0?16:bw(t.type)),t):1}function hn(t,e,n,r){if(50<Xo)throw Xo=0,Jd=null,Error(j(185));La(t,n,r),(!(ue&2)||t!==Ze)&&(t===Ze&&(!(ue&2)&&(lc|=n),We===4&&xr(t,rt)),bt(t,r),n===1&&ue===0&&!(e.mode&1)&&(Vs=Me()+500,ic&&ri()))}function bt(t,e){var n=t.callbackNode;$S(t,e);var r=lu(t,t===Ze?rt:0);if(r===0)n!==null&&Qg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Qg(n),e===1)t.tag===0?zA(By.bind(null,t)):Xw(By.bind(null,t)),UA(function(){!(ue&6)&&ri()}),n=null;else{switch(kw(r)){case 1:n=$f;break;case 4:n=Iw;break;case 16:n=au;break;case 536870912:n=Sw;break;default:n=au}n=QE(n,zE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function zE(t,e){if($l=-1,ql=0,ue&6)throw Error(j(327));var n=t.callbackNode;if(Is()&&t.callbackNode!==n)return null;var r=lu(t,t===Ze?rt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ku(t,r);else{e=r;var i=ue;ue|=2;var s=qE();(Ze!==t||rt!==e)&&(Bn=null,Vs=Me()+500,Si(t,e));do try{uk();break}catch(l){$E(t,l)}while(!0);np(),Iu.current=s,ue=i,Fe!==null?e=0:(Ze=null,rt=0,e=We)}if(e!==0){if(e===2&&(i=Ad(t),i!==0&&(r=i,e=Zd(t,i))),e===1)throw n=va,Si(t,0),xr(t,r),bt(t,Me()),n;if(e===6)xr(t,r);else{if(i=t.current.alternate,!(r&30)&&!ak(i)&&(e=ku(t,r),e===2&&(s=Ad(t),s!==0&&(r=s,e=Zd(t,s))),e===1))throw n=va,Si(t,0),xr(t,r),bt(t,Me()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:gi(t,kt,Bn);break;case 3:if(xr(t,r),(r&130023424)===r&&(e=yp+500-Me(),10<e)){if(lu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){wt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Dd(gi.bind(null,t,kt,Bn),e);break}gi(t,kt,Bn);break;case 4:if(xr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-cn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ok(r/1960))-r,10<r){t.timeoutHandle=Dd(gi.bind(null,t,kt,Bn),r);break}gi(t,kt,Bn);break;case 5:gi(t,kt,Bn);break;default:throw Error(j(329))}}}return bt(t,Me()),t.callbackNode===n?zE.bind(null,t):null}function Zd(t,e){var n=Yo;return t.current.memoizedState.isDehydrated&&(Si(t,e).flags|=256),t=ku(t,e),t!==2&&(e=kt,kt=n,e!==null&&ef(e)),t}function ef(t){kt===null?kt=t:kt.push.apply(kt,t)}function ak(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!fn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xr(t,e){for(e&=~gp,e&=~lc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-cn(e),r=1<<n;t[n]=-1,e&=~r}}function By(t){if(ue&6)throw Error(j(327));Is();var e=lu(t,0);if(!(e&1))return bt(t,Me()),null;var n=ku(t,e);if(t.tag!==0&&n===2){var r=Ad(t);r!==0&&(e=r,n=Zd(t,r))}if(n===1)throw n=va,Si(t,0),xr(t,e),bt(t,Me()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,gi(t,kt,Bn),bt(t,Me()),null}function _p(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(Vs=Me()+500,ic&&ri())}}function Di(t){Dr!==null&&Dr.tag===0&&!(ue&6)&&Is();var e=ue;ue|=1;var n=Yt.transition,r=pe;try{if(Yt.transition=null,pe=1,t)return t()}finally{pe=r,Yt.transition=n,ue=e,!(ue&6)&&ri()}}function vp(){Vt=ms.current,Se(ms)}function Si(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,MA(n)),Fe!==null)for(n=Fe.return;n!==null;){var r=n;switch(Zf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fu();break;case 3:Ls(),Se(Pt),Se(pt),lp();break;case 5:ap(r);break;case 4:Ls();break;case 13:Se(xe);break;case 19:Se(xe);break;case 10:rp(r.type._context);break;case 22:case 23:vp()}n=n.return}if(Ze=t,Fe=t=$r(t.current,null),rt=Vt=e,We=0,va=null,gp=lc=bi=0,kt=Yo=null,wi!==null){for(e=0;e<wi.length;e++)if(n=wi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}wi=null}return t}function $E(t,e){do{var n=Fe;try{if(np(),jl.current=Tu,Eu){for(var r=Re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Eu=!1}if(Ni=0,Je=He=Re=null,Go=!1,ga=0,mp.current=null,n===null||n.return===null){We=1,va=e,Fe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=rt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=Ry(o);if(y!==null){y.flags&=-257,Cy(y,o,l,s,e),y.mode&1&&xy(s,c,e),e=y,u=c;var A=e.updateQueue;if(A===null){var R=new Set;R.add(u),e.updateQueue=R}else A.add(u);break e}else{if(!(e&1)){xy(s,c,e),wp();break e}u=Error(j(426))}}else if(Ae&&l.mode&1){var P=Ry(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Cy(P,o,l,s,e),ep(Os(u,l));break e}}s=u=Os(u,l),We!==4&&(We=2),Yo===null?Yo=[s]:Yo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var _=kE(s,u,e);Ey(s,_);break e;case 1:l=u;var T=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof T.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(Br===null||!Br.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var L=xE(s,l,e);Ey(s,L);break e}}s=s.return}while(s!==null)}WE(n)}catch(V){e=V,Fe===n&&n!==null&&(Fe=n=n.return);continue}break}while(!0)}function qE(){var t=Iu.current;return Iu.current=Tu,t===null?Tu:t}function wp(){(We===0||We===3||We===2)&&(We=4),Ze===null||!(bi&268435455)&&!(lc&268435455)||xr(Ze,rt)}function ku(t,e){var n=ue;ue|=2;var r=qE();(Ze!==t||rt!==e)&&(Bn=null,Si(t,e));do try{lk();break}catch(i){$E(t,i)}while(!0);if(np(),ue=n,Iu.current=r,Fe!==null)throw Error(j(261));return Ze=null,rt=0,We}function lk(){for(;Fe!==null;)HE(Fe)}function uk(){for(;Fe!==null&&!LS();)HE(Fe)}function HE(t){var e=GE(t.alternate,t,Vt);t.memoizedProps=t.pendingProps,e===null?WE(t):Fe=e,mp.current=null}function WE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=nk(n,e),n!==null){n.flags&=32767,Fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{We=6,Fe=null;return}}else if(n=tk(n,e,Vt),n!==null){Fe=n;return}if(e=e.sibling,e!==null){Fe=e;return}Fe=e=t}while(e!==null);We===0&&(We=5)}function gi(t,e,n){var r=pe,i=Yt.transition;try{Yt.transition=null,pe=1,ck(t,e,n,r)}finally{Yt.transition=i,pe=r}return null}function ck(t,e,n,r){do Is();while(Dr!==null);if(ue&6)throw Error(j(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(qS(t,s),t===Ze&&(Fe=Ze=null,rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Sl||(Sl=!0,QE(au,function(){return Is(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Yt.transition,Yt.transition=null;var o=pe;pe=1;var l=ue;ue|=4,mp.current=null,ik(t,n),jE(n,t),PA(Nd),uu=!!Pd,Nd=Pd=null,t.current=n,sk(n),OS(),ue=l,pe=o,Yt.transition=s}else t.current=n;if(Sl&&(Sl=!1,Dr=t,Au=i),s=t.pendingLanes,s===0&&(Br=null),US(n.stateNode),bt(t,Me()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Su)throw Su=!1,t=Xd,Xd=null,t;return Au&1&&t.tag!==0&&Is(),s=t.pendingLanes,s&1?t===Jd?Xo++:(Xo=0,Jd=t):Xo=0,ri(),null}function Is(){if(Dr!==null){var t=kw(Au),e=Yt.transition,n=pe;try{if(Yt.transition=null,pe=16>t?16:t,Dr===null)var r=!1;else{if(t=Dr,Dr=null,Au=0,ue&6)throw Error(j(331));var i=ue;for(ue|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(H=c;H!==null;){var d=H;switch(d.tag){case 0:case 11:case 15:Qo(8,d,s)}var p=d.child;if(p!==null)p.return=d,H=p;else for(;H!==null;){d=H;var m=d.sibling,y=d.return;if(ME(d),d===c){H=null;break}if(m!==null){m.return=y,H=m;break}H=y}}}var A=s.alternate;if(A!==null){var R=A.child;if(R!==null){A.child=null;do{var P=R.sibling;R.sibling=null,R=P}while(R!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Qo(9,s,s.return)}var _=s.sibling;if(_!==null){_.return=s.return,H=_;break e}H=s.return}}var T=t.current;for(H=T;H!==null;){o=H;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,H=I;else e:for(o=T;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ac(9,l)}}catch(V){De(l,l.return,V)}if(l===o){H=null;break e}var L=l.sibling;if(L!==null){L.return=l.return,H=L;break e}H=l.return}}if(ue=i,ri(),xn&&typeof xn.onPostCommitFiberRoot=="function")try{xn.onPostCommitFiberRoot(Zu,t)}catch{}r=!0}return r}finally{pe=n,Yt.transition=e}}return!1}function zy(t,e,n){e=Os(n,e),e=kE(t,e,1),t=jr(t,e,1),e=wt(),t!==null&&(La(t,1,e),bt(t,e))}function De(t,e,n){if(t.tag===3)zy(t,t,n);else for(;e!==null;){if(e.tag===3){zy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Br===null||!Br.has(r))){t=Os(n,t),t=xE(e,t,1),e=jr(e,t,1),t=wt(),e!==null&&(La(e,1,t),bt(e,t));break}}e=e.return}}function hk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=wt(),t.pingedLanes|=t.suspendedLanes&n,Ze===t&&(rt&n)===n&&(We===4||We===3&&(rt&130023424)===rt&&500>Me()-yp?Si(t,0):gp|=n),bt(t,e)}function KE(t,e){e===0&&(t.mode&1?(e=pl,pl<<=1,!(pl&130023424)&&(pl=4194304)):e=1);var n=wt();t=tr(t,e),t!==null&&(La(t,e,n),bt(t,n))}function dk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),KE(t,n)}function fk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),KE(t,n)}var GE;GE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Pt.current)Ct=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ct=!1,ek(t,e,n);Ct=!!(t.flags&131072)}else Ct=!1,Ae&&e.flags&1048576&&Jw(e,gu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;zl(t,e),t=e.pendingProps;var i=Ns(e,pt.current);Ts(e,n),i=cp(null,e,r,t,i,n);var s=hp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Nt(r)?(s=!0,pu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,sp(e),i.updater=oc,e.stateNode=i,i._reactInternals=e,jd(e,r,t,n),e=$d(null,e,r,!0,s,n)):(e.tag=0,Ae&&s&&Jf(e),vt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(zl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=mk(r),t=rn(r,t),i){case 0:e=zd(null,e,r,t,n);break e;case 1:e=by(null,e,r,t,n);break e;case 11:e=Py(null,e,r,t,n);break e;case 14:e=Ny(null,e,r,rn(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),zd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),by(t,e,r,i,n);case 3:e:{if(NE(e),t===null)throw Error(j(387));r=e.pendingProps,s=e.memoizedState,i=s.element,iE(t,e),vu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Os(Error(j(423)),e),e=Dy(t,e,r,n,i);break e}else if(r!==i){i=Os(Error(j(424)),e),e=Dy(t,e,r,n,i);break e}else for(Ut=Fr(e.stateNode.containerInfo.firstChild),jt=e,Ae=!0,on=null,n=nE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bs(),r===i){e=nr(t,e,n);break e}vt(t,e,r,n)}e=e.child}return e;case 5:return sE(e),t===null&&Md(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,bd(r,i)?o=null:s!==null&&bd(r,s)&&(e.flags|=32),PE(t,e),vt(t,e,o,n),e.child;case 6:return t===null&&Md(e),null;case 13:return bE(t,e,n);case 4:return op(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ds(e,null,r,n):vt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),Py(t,e,r,i,n);case 7:return vt(t,e,e.pendingProps,n),e.child;case 8:return vt(t,e,e.pendingProps.children,n),e.child;case 12:return vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,we(yu,r._currentValue),r._currentValue=o,s!==null)if(fn(s.value,o)){if(s.children===i.children&&!Pt.current){e=nr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Gn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Ud(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ud(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}vt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ts(e,n),i=Jt(i),r=r(i),e.flags|=1,vt(t,e,r,n),e.child;case 14:return r=e.type,i=rn(r,e.pendingProps),i=rn(r.type,i),Ny(t,e,r,i,n);case 15:return RE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rn(r,i),zl(t,e),e.tag=1,Nt(r)?(t=!0,pu(e)):t=!1,Ts(e,n),AE(e,r,i),jd(e,r,i,n),$d(null,e,r,!0,t,n);case 19:return DE(t,e,n);case 22:return CE(t,e,n)}throw Error(j(156,e.tag))};function QE(t,e){return Tw(t,e)}function pk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qt(t,e,n,r){return new pk(t,e,n,r)}function Ep(t){return t=t.prototype,!(!t||!t.isReactComponent)}function mk(t){if(typeof t=="function")return Ep(t)?1:0;if(t!=null){if(t=t.$$typeof,t===jf)return 11;if(t===Bf)return 14}return 2}function $r(t,e){var n=t.alternate;return n===null?(n=Qt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Hl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ep(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ss:return Ai(n.children,i,s,e);case Ff:o=8,i|=8;break;case cd:return t=Qt(12,n,e,i|2),t.elementType=cd,t.lanes=s,t;case hd:return t=Qt(13,n,e,i),t.elementType=hd,t.lanes=s,t;case dd:return t=Qt(19,n,e,i),t.elementType=dd,t.lanes=s,t;case sw:return uc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case rw:o=10;break e;case iw:o=9;break e;case jf:o=11;break e;case Bf:o=14;break e;case Sr:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=Qt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ai(t,e,n,r){return t=Qt(7,t,r,e),t.lanes=n,t}function uc(t,e,n,r){return t=Qt(22,t,r,e),t.elementType=sw,t.lanes=n,t.stateNode={isHidden:!1},t}function Uh(t,e,n){return t=Qt(6,t,null,e),t.lanes=n,t}function Fh(t,e,n){return e=Qt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function gk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vh(0),this.expirationTimes=vh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Tp(t,e,n,r,i,s,o,l,u){return t=new gk(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Qt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sp(s),t}function yk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:is,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function YE(t){if(!t)return Gr;t=t._reactInternals;e:{if(Bi(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Nt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(Nt(n))return Yw(t,n,e)}return e}function XE(t,e,n,r,i,s,o,l,u){return t=Tp(n,r,!0,t,i,s,o,l,u),t.context=YE(null),n=t.current,r=wt(),i=zr(n),s=Gn(r,i),s.callback=e??null,jr(n,s,i),t.current.lanes=i,La(t,i,r),bt(t,r),t}function cc(t,e,n,r){var i=e.current,s=wt(),o=zr(i);return n=YE(n),e.context===null?e.context=n:e.pendingContext=n,e=Gn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=jr(i,e,o),t!==null&&(hn(t,i,o,s),Fl(t,i,o)),o}function xu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $y(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ip(t,e){$y(t,e),(t=t.alternate)&&$y(t,e)}function _k(){return null}var JE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Sp(t){this._internalRoot=t}hc.prototype.render=Sp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));cc(t,e,null,null)};hc.prototype.unmount=Sp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Di(function(){cc(null,t,null,null)}),e[er]=null}};function hc(t){this._internalRoot=t}hc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Cw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<kr.length&&e!==0&&e<kr[n].priority;n++);kr.splice(n,0,t),n===0&&Nw(t)}};function Ap(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function dc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function qy(){}function vk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=xu(o);s.call(c)}}var o=XE(e,r,t,0,null,!1,!1,"",qy);return t._reactRootContainer=o,t[er]=o.current,ha(t.nodeType===8?t.parentNode:t),Di(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=xu(u);l.call(c)}}var u=Tp(t,0,!1,null,null,!1,!1,"",qy);return t._reactRootContainer=u,t[er]=u.current,ha(t.nodeType===8?t.parentNode:t),Di(function(){cc(e,u,n,r)}),u}function fc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=xu(o);l.call(u)}}cc(e,o,t,i)}else o=vk(n,e,t,i,r);return xu(o)}xw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Lo(e.pendingLanes);n!==0&&(qf(e,n|1),bt(e,Me()),!(ue&6)&&(Vs=Me()+500,ri()))}break;case 13:Di(function(){var r=tr(t,1);if(r!==null){var i=wt();hn(r,t,1,i)}}),Ip(t,1)}};Hf=function(t){if(t.tag===13){var e=tr(t,134217728);if(e!==null){var n=wt();hn(e,t,134217728,n)}Ip(t,134217728)}};Rw=function(t){if(t.tag===13){var e=zr(t),n=tr(t,e);if(n!==null){var r=wt();hn(n,t,e,r)}Ip(t,e)}};Cw=function(){return pe};Pw=function(t,e){var n=pe;try{return pe=t,e()}finally{pe=n}};Td=function(t,e,n){switch(e){case"input":if(md(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=rc(r);if(!i)throw Error(j(90));aw(r),md(r,i)}}}break;case"textarea":uw(t,n);break;case"select":e=n.value,e!=null&&_s(t,!!n.multiple,e,!1)}};gw=_p;yw=Di;var wk={usingClientEntryPoint:!1,Events:[Va,us,rc,pw,mw,_p]},Po={findFiberByHostInstance:vi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ek={bundleType:Po.bundleType,version:Po.version,rendererPackageName:Po.rendererPackageName,rendererConfig:Po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ww(t),t===null?null:t.stateNode},findFiberByHostInstance:Po.findFiberByHostInstance||_k,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Al.isDisabled&&Al.supportsFiber)try{Zu=Al.inject(Ek),xn=Al}catch{}}zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wk;zt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ap(e))throw Error(j(200));return yk(t,e,null,n)};zt.createRoot=function(t,e){if(!Ap(t))throw Error(j(299));var n=!1,r="",i=JE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Tp(t,1,!1,null,null,n,!1,r,i),t[er]=e.current,ha(t.nodeType===8?t.parentNode:t),new Sp(e)};zt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=ww(e),t=t===null?null:t.stateNode,t};zt.flushSync=function(t){return Di(t)};zt.hydrate=function(t,e,n){if(!dc(e))throw Error(j(200));return fc(null,t,e,!0,n)};zt.hydrateRoot=function(t,e,n){if(!Ap(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=JE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=XE(e,null,t,1,n??null,i,!1,s,o),t[er]=e.current,ha(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new hc(e)};zt.render=function(t,e,n){if(!dc(e))throw Error(j(200));return fc(null,t,e,!1,n)};zt.unmountComponentAtNode=function(t){if(!dc(t))throw Error(j(40));return t._reactRootContainer?(Di(function(){fc(null,null,t,!1,function(){t._reactRootContainer=null,t[er]=null})}),!0):!1};zt.unstable_batchedUpdates=_p;zt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!dc(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return fc(t,e,n,!1,r)};zt.version="18.3.1-next-f1338f8080-20240426";function ZE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ZE)}catch(t){console.error(t)}}ZE(),Zv.exports=zt;var Tk=Zv.exports,Hy=Tk;ld.createRoot=Hy.createRoot,ld.hydrateRoot=Hy.hydrateRoot;/**
 * react-router v7.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Wy="popstate";function Ik(t={}){function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return tf("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:wa(i)}return Ak(e,n,null,t)}function ke(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function en(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Sk(){return Math.random().toString(36).substring(2,10)}function Ky(t,e){return{usr:t.state,key:t.key,idx:e}}function tf(t,e,n=null,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Xs(e):e,state:n,key:e&&e.key||r||Sk()}}function wa({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Xs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function Ak(t,e,n,r={}){let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l="POP",u=null,c=d();c==null&&(c=0,o.replaceState({...o.state,idx:c},""));function d(){return(o.state||{idx:null}).idx}function p(){l="POP";let P=d(),_=P==null?null:P-c;c=P,u&&u({action:l,location:R.location,delta:_})}function m(P,_){l="PUSH";let T=tf(R.location,P,_);c=d()+1;let I=Ky(T,c),L=R.createHref(T);try{o.pushState(I,"",L)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;i.location.assign(L)}s&&u&&u({action:l,location:R.location,delta:1})}function y(P,_){l="REPLACE";let T=tf(R.location,P,_);c=d();let I=Ky(T,c),L=R.createHref(T);o.replaceState(I,"",L),s&&u&&u({action:l,location:R.location,delta:0})}function A(P){return kk(P)}let R={get action(){return l},get location(){return t(i,o)},listen(P){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Wy,p),u=P,()=>{i.removeEventListener(Wy,p),u=null}},createHref(P){return e(i,P)},createURL:A,encodeLocation(P){let _=A(P);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:m,replace:y,go(P){return o.go(P)}};return R}function kk(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),ke(n,"No window.location.(origin|href) available to create URL");let r=typeof t=="string"?t:wa(t);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function e0(t,e,n="/"){return xk(t,e,n,!1)}function xk(t,e,n,r){let i=typeof e=="string"?Xs(e):e,s=rr(i.pathname||"/",n);if(s==null)return null;let o=t0(t);Rk(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=Fk(s);l=Mk(o[u],c,r)}return l}function t0(t,e=[],n=[],r="",i=!1){let s=(o,l,u=i,c)=>{let d={relativePath:c===void 0?o.path||"":c,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};if(d.relativePath.startsWith("/")){if(!d.relativePath.startsWith(r)&&u)return;ke(d.relativePath.startsWith(r),`Absolute route path "${d.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(r.length)}let p=Qn([r,d.relativePath]),m=n.concat(d);o.children&&o.children.length>0&&(ke(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),t0(o.children,e,m,p,u)),!(o.path==null&&!o.index)&&e.push({path:p,score:Ok(p,o.index),routesMeta:m})};return t.forEach((o,l)=>{var u;if(o.path===""||!((u=o.path)!=null&&u.includes("?")))s(o,l);else for(let c of n0(o.path))s(o,l,!0,c)}),e}function n0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=n0(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function Rk(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Vk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var Ck=/^:[\w-]+$/,Pk=3,Nk=2,bk=1,Dk=10,Lk=-2,Gy=t=>t==="*";function Ok(t,e){let n=t.split("/"),r=n.length;return n.some(Gy)&&(r+=Lk),e&&(r+=Nk),n.filter(i=>!Gy(i)).reduce((i,s)=>i+(Ck.test(s)?Pk:s===""?bk:Dk),r)}function Vk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Mk(t,e,n=!1){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=Ru({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=Ru({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:Qn([s,p.pathname]),pathnameBase:$k(Qn([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=Qn([s,p.pathnameBase]))}return o}function Ru(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Uk(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,{paramName:d,isOptional:p},m)=>{if(d==="*"){let A=l[m]||"";o=s.slice(0,s.length-A.length).replace(/(.)\/+$/,"$1")}const y=l[m];return p&&!y?c[d]=void 0:c[d]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function Uk(t,e=!1,n=!0){en(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Fk(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return en(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function rr(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}var r0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jk=t=>r0.test(t);function Bk(t,e="/"){let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Xs(t):t,s;if(n)if(jk(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),en(!1,`Pathnames cannot have embedded double slashes - normalizing ${o} -> ${n}`)}n.startsWith("/")?s=Qy(n.substring(1),"/"):s=Qy(n,e)}else s=e;return{pathname:s,search:qk(r),hash:Hk(i)}}function Qy(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function jh(t,e,n,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function zk(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function kp(t){let e=zk(t);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function xp(t,e,n,r=!1){let i;typeof t=="string"?i=Xs(t):(i={...t},ke(!i.pathname||!i.pathname.includes("?"),jh("?","pathname","search",i)),ke(!i.pathname||!i.pathname.includes("#"),jh("#","pathname","hash",i)),ke(!i.search||!i.search.includes("#"),jh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=Bk(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}var Qn=t=>t.join("/").replace(/\/\/+/g,"/"),$k=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),qk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Hk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,Wk=class{constructor(t,e,n,r=!1){this.status=t,this.statusText=e||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Kk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function Gk(t){return t.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var i0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function s0(t,e){let n=t;if(typeof n!="string"||!r0.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(i0)try{let s=new URL(window.location.href),o=n.startsWith("//")?new URL(s.protocol+n):new URL(n),l=rr(o.pathname,e);o.origin===s.origin&&l!=null?n=l+o.search+o.hash:i=!0}catch{en(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var o0=["POST","PUT","PATCH","DELETE"];new Set(o0);var Qk=["GET",...o0];new Set(Qk);var Js=b.createContext(null);Js.displayName="DataRouter";var pc=b.createContext(null);pc.displayName="DataRouterState";var Yk=b.createContext(!1),a0=b.createContext({isTransitioning:!1});a0.displayName="ViewTransition";var Xk=b.createContext(new Map);Xk.displayName="Fetchers";var Jk=b.createContext(null);Jk.displayName="Await";var qt=b.createContext(null);qt.displayName="Navigation";var Ua=b.createContext(null);Ua.displayName="Location";var yn=b.createContext({outlet:null,matches:[],isDataRoute:!1});yn.displayName="Route";var Rp=b.createContext(null);Rp.displayName="RouteError";var l0="REACT_ROUTER_ERROR",Zk="REDIRECT",ex="ROUTE_ERROR_RESPONSE";function tx(t){if(t.startsWith(`${l0}:${Zk}:{`))try{let e=JSON.parse(t.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function nx(t){if(t.startsWith(`${l0}:${ex}:{`))try{let e=JSON.parse(t.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new Wk(e.status,e.statusText,e.data)}catch{}}function rx(t,{relative:e}={}){ke(Zs(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=b.useContext(qt),{hash:i,pathname:s,search:o}=Fa(t,{relative:e}),l=s;return n!=="/"&&(l=s==="/"?n:Qn([n,s])),r.createHref({pathname:l,search:o,hash:i})}function Zs(){return b.useContext(Ua)!=null}function hr(){return ke(Zs(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(Ua).location}var u0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function c0(t){b.useContext(qt).static||b.useLayoutEffect(t)}function dr(){let{isDataRoute:t}=b.useContext(yn);return t?gx():ix()}function ix(){ke(Zs(),"useNavigate() may be used only in the context of a <Router> component.");let t=b.useContext(Js),{basename:e,navigator:n}=b.useContext(qt),{matches:r}=b.useContext(yn),{pathname:i}=hr(),s=JSON.stringify(kp(r)),o=b.useRef(!1);return c0(()=>{o.current=!0}),b.useCallback((u,c={})=>{if(en(o.current,u0),!o.current)return;if(typeof u=="number"){n.go(u);return}let d=xp(u,JSON.parse(s),i,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Qn([e,d.pathname])),(c.replace?n.replace:n.push)(d,c.state,c)},[e,n,s,i,t])}b.createContext(null);function h0(){let{matches:t}=b.useContext(yn),e=t[t.length-1];return e?e.params:{}}function Fa(t,{relative:e}={}){let{matches:n}=b.useContext(yn),{pathname:r}=hr(),i=JSON.stringify(kp(n));return b.useMemo(()=>xp(t,JSON.parse(i),r,e==="path"),[t,i,r,e])}function sx(t,e){return d0(t,e)}function d0(t,e,n,r,i){var T;ke(Zs(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=b.useContext(qt),{matches:o}=b.useContext(yn),l=o[o.length-1],u=l?l.params:{},c=l?l.pathname:"/",d=l?l.pathnameBase:"/",p=l&&l.route;{let I=p&&p.path||"";p0(c,!p||I.endsWith("*")||I.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${I}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${I}"> to <Route path="${I==="/"?"*":`${I}/*`}">.`)}let m=hr(),y;if(e){let I=typeof e=="string"?Xs(e):e;ke(d==="/"||((T=I.pathname)==null?void 0:T.startsWith(d)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${I.pathname}" was given in the \`location\` prop.`),y=I}else y=m;let A=y.pathname||"/",R=A;if(d!=="/"){let I=d.replace(/^\//,"").split("/");R="/"+A.replace(/^\//,"").split("/").slice(I.length).join("/")}let P=e0(t,{pathname:R});en(p||P!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),en(P==null||P[P.length-1].route.element!==void 0||P[P.length-1].route.Component!==void 0||P[P.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=cx(P&&P.map(I=>Object.assign({},I,{params:Object.assign({},u,I.params),pathname:Qn([d,s.encodeLocation?s.encodeLocation(I.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?d:Qn([d,s.encodeLocation?s.encodeLocation(I.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:I.pathnameBase])})),o,n,r,i);return e&&_?b.createElement(Ua.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},_):_}function ox(){let t=mx(),e=Kk(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r},o=null;return console.error("Error handled by React Router default ErrorBoundary:",t),o=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:s},"ErrorBoundary")," or"," ",b.createElement("code",{style:s},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),n?b.createElement("pre",{style:i},n):null,o)}var ax=b.createElement(ox,null),f0=class extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.onError?this.props.onError(t,e):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const n=nx(t.digest);n&&(t=n)}let e=t!==void 0?b.createElement(yn.Provider,{value:this.props.routeContext},b.createElement(Rp.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?b.createElement(lx,{error:t},e):e}};f0.contextType=Yk;var Bh=new WeakMap;function lx({children:t,error:e}){let{basename:n}=b.useContext(qt);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=tx(e.digest);if(r){let i=Bh.get(e);if(i)throw i;let s=s0(r.location,n);if(i0&&!Bh.get(e))if(s.isExternal||r.reloadDocument)window.location.href=s.absoluteURL||s.to;else{const o=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(s.to,{replace:r.replace}));throw Bh.set(e,o),o}return b.createElement("meta",{httpEquiv:"refresh",content:`0;url=${s.absoluteURL||s.to}`})}}return t}function ux({routeContext:t,match:e,children:n}){let r=b.useContext(Js);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),b.createElement(yn.Provider,{value:t},n)}function cx(t,e=[],n=null,r=null,i=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,o=n==null?void 0:n.errors;if(o!=null){let d=s.findIndex(p=>p.route.id&&(o==null?void 0:o[p.route.id])!==void 0);ke(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),s=s.slice(0,Math.min(s.length,d+1))}let l=!1,u=-1;if(n)for(let d=0;d<s.length;d++){let p=s[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:m,errors:y}=n,A=p.route.loader&&!m.hasOwnProperty(p.route.id)&&(!y||y[p.route.id]===void 0);if(p.route.lazy||A){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}let c=n&&r?(d,p)=>{var m,y;r(d,{location:n.location,params:((y=(m=n.matches)==null?void 0:m[0])==null?void 0:y.params)??{},unstable_pattern:Gk(n.matches),errorInfo:p})}:void 0;return s.reduceRight((d,p,m)=>{let y,A=!1,R=null,P=null;n&&(y=o&&p.route.id?o[p.route.id]:void 0,R=p.route.errorElement||ax,l&&(u<0&&m===0?(p0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),A=!0,P=null):u===m&&(A=!0,P=p.route.hydrateFallbackElement||null)));let _=e.concat(s.slice(0,m+1)),T=()=>{let I;return y?I=R:A?I=P:p.route.Component?I=b.createElement(p.route.Component,null):p.route.element?I=p.route.element:I=d,b.createElement(ux,{match:p,routeContext:{outlet:d,matches:_,isDataRoute:n!=null},children:I})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?b.createElement(f0,{location:n.location,revalidation:n.revalidation,component:R,error:y,children:T(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:c}):T()},null)}function Cp(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function hx(t){let e=b.useContext(Js);return ke(e,Cp(t)),e}function dx(t){let e=b.useContext(pc);return ke(e,Cp(t)),e}function fx(t){let e=b.useContext(yn);return ke(e,Cp(t)),e}function Pp(t){let e=fx(t),n=e.matches[e.matches.length-1];return ke(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function px(){return Pp("useRouteId")}function mx(){var r;let t=b.useContext(Rp),e=dx("useRouteError"),n=Pp("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[n]}function gx(){let{router:t}=hx("useNavigate"),e=Pp("useNavigate"),n=b.useRef(!1);return c0(()=>{n.current=!0}),b.useCallback(async(i,s={})=>{en(n.current,u0),n.current&&(typeof i=="number"?await t.navigate(i):await t.navigate(i,{fromRouteId:e,...s}))},[t,e])}var Yy={};function p0(t,e,n){!e&&!Yy[t]&&(Yy[t]=!0,en(!1,n))}b.memo(yx);function yx({routes:t,future:e,state:n,onError:r}){return d0(t,void 0,n,r,e)}function pi({to:t,replace:e,state:n,relative:r}){ke(Zs(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i}=b.useContext(qt);en(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:s}=b.useContext(yn),{pathname:o}=hr(),l=dr(),u=xp(t,kp(s),o,r==="path"),c=JSON.stringify(u);return b.useEffect(()=>{l(JSON.parse(c),{replace:e,state:n,relative:r})},[l,c,r,e,n]),null}function Ir(t){ke(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function _x({basename:t="/",children:e=null,location:n,navigationType:r="POP",navigator:i,static:s=!1,unstable_useTransitions:o}){ke(!Zs(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=t.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:l,navigator:i,static:s,unstable_useTransitions:o,future:{}}),[l,i,s,o]);typeof n=="string"&&(n=Xs(n));let{pathname:c="/",search:d="",hash:p="",state:m=null,key:y="default"}=n,A=b.useMemo(()=>{let R=rr(c,l);return R==null?null:{location:{pathname:R,search:d,hash:p,state:m,key:y},navigationType:r}},[l,c,d,p,m,y,r]);return en(A!=null,`<Router basename="${l}"> is not able to match the URL "${c}${d}${p}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:b.createElement(qt.Provider,{value:u},b.createElement(Ua.Provider,{children:e,value:A}))}function vx({children:t,location:e}){return sx(nf(t),e)}function nf(t,e=[]){let n=[];return b.Children.forEach(t,(r,i)=>{if(!b.isValidElement(r))return;let s=[...e,i];if(r.type===b.Fragment){n.push.apply(n,nf(r.props.children,s));return}ke(r.type===Ir,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ke(!r.props.index||!r.props.children,"An index route cannot have child routes.");let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=nf(r.props.children,s)),n.push(o)}),n}var Wl="get",Kl="application/x-www-form-urlencoded";function mc(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function wx(t){return mc(t)&&t.tagName.toLowerCase()==="button"}function Ex(t){return mc(t)&&t.tagName.toLowerCase()==="form"}function Tx(t){return mc(t)&&t.tagName.toLowerCase()==="input"}function Ix(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Sx(t,e){return t.button===0&&(!e||e==="_self")&&!Ix(t)}var kl=null;function Ax(){if(kl===null)try{new FormData(document.createElement("form"),0),kl=!1}catch{kl=!0}return kl}var kx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function zh(t){return t!=null&&!kx.has(t)?(en(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Kl}"`),null):t}function xx(t,e){let n,r,i,s,o;if(Ex(t)){let l=t.getAttribute("action");r=l?rr(l,e):null,n=t.getAttribute("method")||Wl,i=zh(t.getAttribute("enctype"))||Kl,s=new FormData(t)}else if(wx(t)||Tx(t)&&(t.type==="submit"||t.type==="image")){let l=t.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=t.getAttribute("formaction")||l.getAttribute("action");if(r=u?rr(u,e):null,n=t.getAttribute("formmethod")||l.getAttribute("method")||Wl,i=zh(t.getAttribute("formenctype"))||zh(l.getAttribute("enctype"))||Kl,s=new FormData(l,t),!Ax()){let{name:c,type:d,value:p}=t;if(d==="image"){let m=c?`${c}.`:"";s.append(`${m}x`,"0"),s.append(`${m}y`,"0")}else c&&s.append(c,p)}}else{if(mc(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Wl,r=null,i=Kl,o=t}return s&&i==="text/plain"&&(o=s,s=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:s,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Np(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Rx(t,e,n){let r=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return r.pathname==="/"?r.pathname=`_root.${n}`:e&&rr(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function Cx(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Px(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function Nx(t,e,n){let r=await Promise.all(t.map(async i=>{let s=e.routes[i.route.id];if(s){let o=await Cx(s,n);return o.links?o.links():[]}return[]}));return Ox(r.flat(1).filter(Px).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Xy(t,e,n,r,i,s){let o=(u,c)=>n[c]?u.route.id!==n[c].route.id:!0,l=(u,c)=>{var d;return n[c].pathname!==u.pathname||((d=n[c].route.path)==null?void 0:d.endsWith("*"))&&n[c].params["*"]!==u.params["*"]};return s==="assets"?e.filter((u,c)=>o(u,c)||l(u,c)):s==="data"?e.filter((u,c)=>{var p;let d=r.routes[u.route.id];if(!d||!d.hasLoader)return!1;if(o(u,c)||l(u,c))return!0;if(u.route.shouldRevalidate){let m=u.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((p=n[0])==null?void 0:p.params)||{},nextUrl:new URL(t,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function bx(t,e,{includeHydrateFallback:n}={}){return Dx(t.map(r=>{let i=e.routes[r.route.id];if(!i)return[];let s=[i.module];return i.clientActionModule&&(s=s.concat(i.clientActionModule)),i.clientLoaderModule&&(s=s.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(s=s.concat(i.hydrateFallbackModule)),i.imports&&(s=s.concat(i.imports)),s}).flat(1))}function Dx(t){return[...new Set(t)]}function Lx(t){let e={},n=Object.keys(t).sort();for(let r of n)e[r]=t[r];return e}function Ox(t,e){let n=new Set;return new Set(e),t.reduce((r,i)=>{let s=JSON.stringify(Lx(i));return n.has(s)||(n.add(s),r.push({key:s,link:i})),r},[])}function m0(){let t=b.useContext(Js);return Np(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function Vx(){let t=b.useContext(pc);return Np(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var bp=b.createContext(void 0);bp.displayName="FrameworkContext";function g0(){let t=b.useContext(bp);return Np(t,"You must render this element inside a <HydratedRouter> element"),t}function Mx(t,e){let n=b.useContext(bp),[r,i]=b.useState(!1),[s,o]=b.useState(!1),{onFocus:l,onBlur:u,onMouseEnter:c,onMouseLeave:d,onTouchStart:p}=e,m=b.useRef(null);b.useEffect(()=>{if(t==="render"&&o(!0),t==="viewport"){let R=_=>{_.forEach(T=>{o(T.isIntersecting)})},P=new IntersectionObserver(R,{threshold:.5});return m.current&&P.observe(m.current),()=>{P.disconnect()}}},[t]),b.useEffect(()=>{if(r){let R=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(R)}}},[r]);let y=()=>{i(!0)},A=()=>{i(!1),o(!1)};return n?t!=="intent"?[s,m,{}]:[s,m,{onFocus:No(l,y),onBlur:No(u,A),onMouseEnter:No(c,y),onMouseLeave:No(d,A),onTouchStart:No(p,y)}]:[!1,m,{}]}function No(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function Ux({page:t,...e}){let{router:n}=m0(),r=b.useMemo(()=>e0(n.routes,t,n.basename),[n.routes,t,n.basename]);return r?b.createElement(jx,{page:t,matches:r,...e}):null}function Fx(t){let{manifest:e,routeModules:n}=g0(),[r,i]=b.useState([]);return b.useEffect(()=>{let s=!1;return Nx(t,e,n).then(o=>{s||i(o)}),()=>{s=!0}},[t,e,n]),r}function jx({page:t,matches:e,...n}){let r=hr(),{manifest:i,routeModules:s}=g0(),{basename:o}=m0(),{loaderData:l,matches:u}=Vx(),c=b.useMemo(()=>Xy(t,e,u,i,r,"data"),[t,e,u,i,r]),d=b.useMemo(()=>Xy(t,e,u,i,r,"assets"),[t,e,u,i,r]),p=b.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let A=new Set,R=!1;if(e.forEach(_=>{var I;let T=i.routes[_.route.id];!T||!T.hasLoader||(!c.some(L=>L.route.id===_.route.id)&&_.route.id in l&&((I=s[_.route.id])!=null&&I.shouldRevalidate)||T.hasClientLoader?R=!0:A.add(_.route.id))}),A.size===0)return[];let P=Rx(t,o,"data");return R&&A.size>0&&P.searchParams.set("_routes",e.filter(_=>A.has(_.route.id)).map(_=>_.route.id).join(",")),[P.pathname+P.search]},[o,l,r,i,c,e,t,s]),m=b.useMemo(()=>bx(d,i),[d,i]),y=Fx(d);return b.createElement(b.Fragment,null,p.map(A=>b.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...n})),m.map(A=>b.createElement("link",{key:A,rel:"modulepreload",href:A,...n})),y.map(({key:A,link:R})=>b.createElement("link",{key:A,nonce:n.nonce,...R})))}function Bx(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var zx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{zx&&(window.__reactRouterVersion="7.11.0")}catch{}function $x({basename:t,children:e,unstable_useTransitions:n,window:r}){let i=b.useRef();i.current==null&&(i.current=Ik({window:r,v5Compat:!0}));let s=i.current,[o,l]=b.useState({action:s.action,location:s.location}),u=b.useCallback(c=>{n===!1?l(c):b.startTransition(()=>l(c))},[n]);return b.useLayoutEffect(()=>s.listen(u),[s,u]),b.createElement(_x,{basename:t,children:e,location:o.location,navigationType:o.action,navigator:s,unstable_useTransitions:n})}var y0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_i=b.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,viewTransition:p,unstable_defaultShouldRevalidate:m,...y},A){let{basename:R,unstable_useTransitions:P}=b.useContext(qt),_=typeof c=="string"&&y0.test(c),T=s0(c,R);c=T.to;let I=rx(c,{relative:i}),[L,V,F]=Mx(r,y),E=Kx(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:p,unstable_defaultShouldRevalidate:m,unstable_useTransitions:P});function v(x){e&&e(x),x.defaultPrevented||E(x)}let S=b.createElement("a",{...y,...F,href:T.absoluteURL||I,onClick:T.isExternal||s?e:v,ref:Bx(A,V),target:u,"data-discover":!_&&n==="render"?"true":void 0});return L&&!_?b.createElement(b.Fragment,null,S,b.createElement(Ux,{page:I})):S});_i.displayName="Link";var qx=b.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:i=!1,style:s,to:o,viewTransition:l,children:u,...c},d){let p=Fa(o,{relative:c.relative}),m=hr(),y=b.useContext(pc),{navigator:A,basename:R}=b.useContext(qt),P=y!=null&&Jx(p)&&l===!0,_=A.encodeLocation?A.encodeLocation(p).pathname:p.pathname,T=m.pathname,I=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;n||(T=T.toLowerCase(),I=I?I.toLowerCase():null,_=_.toLowerCase()),I&&R&&(I=rr(I,R)||I);const L=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let V=T===_||!i&&T.startsWith(_)&&T.charAt(L)==="/",F=I!=null&&(I===_||!i&&I.startsWith(_)&&I.charAt(_.length)==="/"),E={isActive:V,isPending:F,isTransitioning:P},v=V?e:void 0,S;typeof r=="function"?S=r(E):S=[r,V?"active":null,F?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let x=typeof s=="function"?s(E):s;return b.createElement(_i,{...c,"aria-current":v,className:S,ref:d,style:x,to:o,viewTransition:l},typeof u=="function"?u(E):u)});qx.displayName="NavLink";var Hx=b.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:i,state:s,method:o=Wl,action:l,onSubmit:u,relative:c,preventScrollReset:d,viewTransition:p,unstable_defaultShouldRevalidate:m,...y},A)=>{let{unstable_useTransitions:R}=b.useContext(qt),P=Yx(),_=Xx(l,{relative:c}),T=o.toLowerCase()==="get"?"get":"post",I=typeof l=="string"&&y0.test(l),L=V=>{if(u&&u(V),V.defaultPrevented)return;V.preventDefault();let F=V.nativeEvent.submitter,E=(F==null?void 0:F.getAttribute("formmethod"))||o,v=()=>P(F||V.currentTarget,{fetcherKey:e,method:E,navigate:n,replace:i,state:s,relative:c,preventScrollReset:d,viewTransition:p,unstable_defaultShouldRevalidate:m});R&&n!==!1?b.startTransition(()=>v()):v()};return b.createElement("form",{ref:A,method:T,action:_,onSubmit:r?u:L,...y,"data-discover":!I&&t==="render"?"true":void 0})});Hx.displayName="Form";function Wx(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function _0(t){let e=b.useContext(Js);return ke(e,Wx(t)),e}function Kx(t,{target:e,replace:n,state:r,preventScrollReset:i,relative:s,viewTransition:o,unstable_defaultShouldRevalidate:l,unstable_useTransitions:u}={}){let c=dr(),d=hr(),p=Fa(t,{relative:s});return b.useCallback(m=>{if(Sx(m,e)){m.preventDefault();let y=n!==void 0?n:wa(d)===wa(p),A=()=>c(t,{replace:y,state:r,preventScrollReset:i,relative:s,viewTransition:o,unstable_defaultShouldRevalidate:l});u?b.startTransition(()=>A()):A()}},[d,c,p,n,r,e,t,i,s,o,l,u])}var Gx=0,Qx=()=>`__${String(++Gx)}__`;function Yx(){let{router:t}=_0("useSubmit"),{basename:e}=b.useContext(qt),n=px(),r=t.fetch,i=t.navigate;return b.useCallback(async(s,o={})=>{let{action:l,method:u,encType:c,formData:d,body:p}=xx(s,e);if(o.navigate===!1){let m=o.fetcherKey||Qx();await r(m,n,o.action||l,{unstable_defaultShouldRevalidate:o.unstable_defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:d,body:p,formMethod:o.method||u,formEncType:o.encType||c,flushSync:o.flushSync})}else await i(o.action||l,{unstable_defaultShouldRevalidate:o.unstable_defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:d,body:p,formMethod:o.method||u,formEncType:o.encType||c,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,i,e,n])}function Xx(t,{relative:e}={}){let{basename:n}=b.useContext(qt),r=b.useContext(yn);ke(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),s={...Fa(t||".",{relative:e})},o=hr();if(t==null){s.search=o.search;let l=new URLSearchParams(s.search),u=l.getAll("index");if(u.some(d=>d==="")){l.delete("index"),u.filter(p=>p).forEach(p=>l.append("index",p));let d=l.toString();s.search=d?`?${d}`:""}}return(!t||t===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:Qn([n,s.pathname])),wa(s)}function Jx(t,{relative:e}={}){let n=b.useContext(a0);ke(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=_0("useViewTransitionState"),i=Fa(t,{relative:e});if(!n.isTransitioning)return!1;let s=rr(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=rr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ru(i.pathname,o)!=null||Ru(i.pathname,s)!=null}const Zx=()=>{};var Jy={};/**
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
 */const v0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},eR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},w0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,y=c&63;u||(y=64,o||(m=64)),r.push(n[d],n[p],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(v0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new tR;const m=s<<2|l>>4;if(r.push(m),c!==64){const y=l<<4&240|c>>2;if(r.push(y),p!==64){const A=c<<6&192|p;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nR=function(t){const e=v0(t);return w0.encodeByteArray(e,!0)},Cu=function(t){return nR(t).replace(/\./g,"")},E0=function(t){try{return w0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function rR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const iR=()=>rR().__FIREBASE_DEFAULTS__,sR=()=>{if(typeof process>"u"||typeof Jy>"u")return;const t=Jy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},oR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&E0(t[1]);return e&&JSON.parse(e)},gc=()=>{try{return Zx()||iR()||sR()||oR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},T0=t=>{var e,n;return(n=(e=gc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},I0=t=>{const e=T0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},S0=()=>{var t;return(t=gc())==null?void 0:t.config},A0=t=>{var e;return(e=gc())==null?void 0:e[`_${t}`]};/**
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
 */class aR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function zi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Dp(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function k0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Cu(JSON.stringify(n)),Cu(JSON.stringify(o)),""].join(".")}const Jo={};function lR(){const t={prod:[],emulator:[]};for(const e of Object.keys(Jo))Jo[e]?t.emulator.push(e):t.prod.push(e);return t}function uR(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Zy=!1;function Lp(t,e){if(typeof window>"u"||typeof document>"u"||!zi(window.location.host)||Jo[t]===e||Jo[t]||Zy)return;Jo[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",s=lR().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,y){m.setAttribute("width","24"),m.setAttribute("id",y),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function c(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Zy=!0,o()},m}function d(m,y){m.setAttribute("id",y),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=uR(r),y=n("text"),A=document.getElementById(y)||document.createElement("span"),R=n("learnmore"),P=document.getElementById(R)||document.createElement("a"),_=n("preprendIcon"),T=document.getElementById(_)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const I=m.element;l(I),d(P,R);const L=c();u(T,_),I.append(T,A,P,L),document.body.appendChild(I)}s?(A.innerText="Preview backend disconnected.",T.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(T.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,A.innerText="Preview backend running in this workspace."),A.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mt())}function hR(){var e;const t=(e=gc())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function fR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mR(){const t=mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gR(){return!hR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function x0(){try{return typeof indexedDB=="object"}catch{return!1}}function R0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function yR(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const _R="FirebaseError";class _n extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=_R,Object.setPrototypeOf(this,_n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$i.prototype.create)}}class $i{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?vR(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new _n(i,l,r)}}function vR(t,e){return t.replace(wR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const wR=/\{\$([^}]+)}/g;function ER(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ir(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(e_(s)&&e_(o)){if(!ir(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function e_(t){return t!==null&&typeof t=="object"}/**
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
 */function ja(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Vo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Mo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function TR(t,e){const n=new IR(t,e);return n.subscribe.bind(n)}class IR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");SR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=$h),i.error===void 0&&(i.error=$h),i.complete===void 0&&(i.complete=$h);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function SR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $h(){}/**
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
 */function Pe(t){return t&&t._delegate?t._delegate:t}class tn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const yi="[DEFAULT]";/**
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
 */class AR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new aR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xR(e))try{this.getOrInitializeService({instanceIdentifier:yi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=yi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yi){return this.instances.has(e)}getOptions(e=yi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=yi){return this.component?this.component.multipleInstances?e:yi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kR(t){return t===yi?void 0:t}function xR(t){return t.instantiationMode==="EAGER"}/**
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
 */class RR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new AR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const CR={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},PR=se.INFO,NR={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},bR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=NR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Op{constructor(e){this.name=e,this._logLevel=PR,this._logHandler=bR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?CR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const DR=(t,e)=>e.some(n=>t instanceof n);let t_,n_;function LR(){return t_||(t_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function OR(){return n_||(n_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const C0=new WeakMap,rf=new WeakMap,P0=new WeakMap,qh=new WeakMap,Vp=new WeakMap;function VR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Yn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&C0.set(n,t)}).catch(()=>{}),Vp.set(e,t),e}function MR(t){if(rf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});rf.set(t,e)}let sf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||P0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function UR(t){sf=t(sf)}function FR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Hh(this),e,...n);return P0.set(r,e.sort?e.sort():[e]),Yn(r)}:OR().includes(t)?function(...e){return t.apply(Hh(this),e),Yn(C0.get(this))}:function(...e){return Yn(t.apply(Hh(this),e))}}function jR(t){return typeof t=="function"?FR(t):(t instanceof IDBTransaction&&MR(t),DR(t,LR())?new Proxy(t,sf):t)}function Yn(t){if(t instanceof IDBRequest)return VR(t);if(qh.has(t))return qh.get(t);const e=jR(t);return e!==t&&(qh.set(t,e),Vp.set(e,t)),e}const Hh=t=>Vp.get(t);function yc(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Yn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Yn(o.result),u.oldVersion,u.newVersion,Yn(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}function Wh(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),Yn(n).then(()=>{})}const BR=["get","getKey","getAll","getAllKeys","count"],zR=["put","add","delete","clear"],Kh=new Map;function r_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Kh.get(e))return Kh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=zR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||BR.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Kh.set(e,s),s}UR(t=>({...t,get:(e,n,r)=>r_(e,n)||t.get(e,n,r),has:(e,n)=>!!r_(e,n)||t.has(e,n)}));/**
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
 */class $R{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function qR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const of="@firebase/app",i_="0.14.6";/**
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
 */const sr=new Op("@firebase/app"),HR="@firebase/app-compat",WR="@firebase/analytics-compat",KR="@firebase/analytics",GR="@firebase/app-check-compat",QR="@firebase/app-check",YR="@firebase/auth",XR="@firebase/auth-compat",JR="@firebase/database",ZR="@firebase/data-connect",eC="@firebase/database-compat",tC="@firebase/functions",nC="@firebase/functions-compat",rC="@firebase/installations",iC="@firebase/installations-compat",sC="@firebase/messaging",oC="@firebase/messaging-compat",aC="@firebase/performance",lC="@firebase/performance-compat",uC="@firebase/remote-config",cC="@firebase/remote-config-compat",hC="@firebase/storage",dC="@firebase/storage-compat",fC="@firebase/firestore",pC="@firebase/ai",mC="@firebase/firestore-compat",gC="firebase",yC="12.6.0";/**
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
 */const af="[DEFAULT]",_C={[of]:"fire-core",[HR]:"fire-core-compat",[KR]:"fire-analytics",[WR]:"fire-analytics-compat",[QR]:"fire-app-check",[GR]:"fire-app-check-compat",[YR]:"fire-auth",[XR]:"fire-auth-compat",[JR]:"fire-rtdb",[ZR]:"fire-data-connect",[eC]:"fire-rtdb-compat",[tC]:"fire-fn",[nC]:"fire-fn-compat",[rC]:"fire-iid",[iC]:"fire-iid-compat",[sC]:"fire-fcm",[oC]:"fire-fcm-compat",[aC]:"fire-perf",[lC]:"fire-perf-compat",[uC]:"fire-rc",[cC]:"fire-rc-compat",[hC]:"fire-gcs",[dC]:"fire-gcs-compat",[fC]:"fire-fst",[mC]:"fire-fst-compat",[pC]:"fire-vertex","fire-js":"fire-js",[gC]:"fire-js-all"};/**
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
 */const Pu=new Map,vC=new Map,lf=new Map;function s_(t,e){try{t.container.addComponent(e)}catch(n){sr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function pn(t){const e=t.name;if(lf.has(e))return sr.debug(`There were multiple attempts to register component ${e}.`),!1;lf.set(e,t);for(const n of Pu.values())s_(n,t);for(const n of vC.values())s_(n,t);return!0}function qi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Mt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const wC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qr=new $i("app","Firebase",wC);/**
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
 */class EC{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qr.create("app-deleted",{appName:this._name})}}/**
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
 */const Hi=yC;function N0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:af,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw qr.create("bad-app-name",{appName:String(i)});if(n||(n=S0()),!n)throw qr.create("no-options");const s=Pu.get(i);if(s){if(ir(n,s.options)&&ir(r,s.config))return s;throw qr.create("duplicate-app",{appName:i})}const o=new RR(i);for(const u of lf.values())o.addComponent(u);const l=new EC(n,r,o);return Pu.set(i,l),l}function _c(t=af){const e=Pu.get(t);if(!e&&t===af&&S0())return N0();if(!e)throw qr.create("no-app",{appName:t});return e}function Dt(t,e,n){let r=_C[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sr.warn(o.join(" "));return}pn(new tn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const TC="firebase-heartbeat-database",IC=1,Ea="firebase-heartbeat-store";let Gh=null;function b0(){return Gh||(Gh=yc(TC,IC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ea)}catch(n){console.warn(n)}}}}).catch(t=>{throw qr.create("idb-open",{originalErrorMessage:t.message})})),Gh}async function SC(t){try{const n=(await b0()).transaction(Ea),r=await n.objectStore(Ea).get(D0(t));return await n.done,r}catch(e){if(e instanceof _n)sr.warn(e.message);else{const n=qr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});sr.warn(n.message)}}}async function o_(t,e){try{const r=(await b0()).transaction(Ea,"readwrite");await r.objectStore(Ea).put(e,D0(t)),await r.done}catch(n){if(n instanceof _n)sr.warn(n.message);else{const r=qr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});sr.warn(r.message)}}}function D0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const AC=1024,kC=30;class xC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new CC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=a_();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>kC){const o=PC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){sr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=a_(),{heartbeatsToSend:r,unsentEntries:i}=RC(this._heartbeatsCache.heartbeats),s=Cu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return sr.warn(n),""}}}function a_(){return new Date().toISOString().substring(0,10)}function RC(t,e=AC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),l_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),l_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class CC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return x0()?R0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await SC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return o_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return o_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function l_(t){return Cu(JSON.stringify({version:2,heartbeats:t})).length}function PC(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function NC(t){pn(new tn("platform-logger",e=>new $R(e),"PRIVATE")),pn(new tn("heartbeat",e=>new xC(e),"PRIVATE")),Dt(of,i_,t),Dt(of,i_,"esm2020"),Dt("fire-js","")}NC("");var bC="firebase",DC="12.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt(bC,DC,"app");function L0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const LC=L0,O0=new $i("auth","Firebase",L0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu=new Op("@firebase/auth");function OC(t,...e){Nu.logLevel<=se.WARN&&Nu.warn(`Auth (${Hi}): ${t}`,...e)}function Gl(t,...e){Nu.logLevel<=se.ERROR&&Nu.error(`Auth (${Hi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(t,...e){throw Mp(t,...e)}function Cn(t,...e){return Mp(t,...e)}function V0(t,e,n){const r={...LC(),[e]:n};return new $i("auth","Firebase",r).create(e,{appName:t.name})}function Xn(t){return V0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Mp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return O0.create(t,...e)}function X(t,e,...n){if(!t)throw Mp(e,...n)}function Wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Gl(e),new Error(e)}function or(t,e){t||Wn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function VC(){return u_()==="http:"||u_()==="https:"}function u_(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(VC()||fR()||"connection"in navigator)?navigator.onLine:!0}function UC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,n){this.shortDelay=e,this.longDelay=n,or(n>e,"Short delay should be less than long delay!"),this.isMobile=cR()||pR()}get(){return MC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(t,e){or(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],BC=new Ba(3e4,6e4);function fr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Mn(t,e,n,r,i={}){return U0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ja({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return dR()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&zi(t.emulatorConfig.host)&&(c.credentials="include"),M0.fetch()(await F0(t,t.config.apiHost,n,l),c)})}async function U0(t,e,n){t._canInitEmulator=!1;const r={...FC,...e};try{const i=new $C(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw xl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw xl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw xl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw xl(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw V0(t,d,c);mn(t,d)}}catch(i){if(i instanceof _n)throw i;mn(t,"network-request-failed",{message:String(i)})}}async function za(t,e,n,r,i={}){const s=await Mn(t,e,n,r,i);return"mfaPendingCredential"in s&&mn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function F0(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Up(t.config,i):`${t.config.apiScheme}://${i}`;return jC.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function zC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $C{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Cn(this.auth,"network-request-failed")),BC.get())})}}function xl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Cn(t,e,r);return i.customData._tokenResponse=n,i}function c_(t){return t!==void 0&&t.enterprise!==void 0}class qC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return zC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function HC(t,e){return Mn(t,"GET","/v2/recaptchaConfig",fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WC(t,e){return Mn(t,"POST","/v1/accounts:delete",e)}async function bu(t,e){return Mn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function KC(t,e=!1){const n=Pe(t),r=await n.getIdToken(e),i=Fp(r);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Zo(Qh(i.auth_time)),issuedAtTime:Zo(Qh(i.iat)),expirationTime:Zo(Qh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Qh(t){return Number(t)*1e3}function Fp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Gl("JWT malformed, contained fewer than 3 sections"),null;try{const i=E0(n);return i?JSON.parse(i):(Gl("Failed to decode base64 JWT payload"),null)}catch(i){return Gl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function h_(t){const e=Fp(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ms(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof _n&&GC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function GC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zo(this.lastLoginAt),this.creationTime=Zo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Du(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Ms(t,bu(e,{idToken:n}));X(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?j0(i.providerUserInfo):[],o=XC(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new cf(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function YC(t){const e=Pe(t);await Du(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function XC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function j0(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JC(t,e){const n=await U0(t,{},async()=>{const r=ja({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await F0(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&zi(t.emulatorConfig.host)&&(u.credentials="include"),M0.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ZC(t,e){return Mn(t,"POST","/v2/accounts:revokeToken",fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):h_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=h_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await JC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ss;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ss,this.toJSON())}_performRefresh(){return Wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class an{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new QC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new cf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ms(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return KC(this,e)}reload(){return YC(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new an({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Du(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Mt(this.auth.app))return Promise.reject(Xn(this.auth));const e=await this.getIdToken();return await Ms(this,WC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:y,providerData:A,stsTokenManager:R}=n;X(p&&R,e,"internal-error");const P=Ss.fromJSON(this.name,R);X(typeof p=="string",e,"internal-error"),Tr(r,e.name),Tr(i,e.name),X(typeof m=="boolean",e,"internal-error"),X(typeof y=="boolean",e,"internal-error"),Tr(s,e.name),Tr(o,e.name),Tr(l,e.name),Tr(u,e.name),Tr(c,e.name),Tr(d,e.name);const _=new an({uid:p,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:P,createdAt:c,lastLoginAt:d});return A&&Array.isArray(A)&&(_.providerData=A.map(T=>({...T}))),u&&(_._redirectEventId=u),_}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ss;i.updateFromServerResponse(n);const s=new an({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Du(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];X(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?j0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ss;l.updateFromIdToken(r);const u=new an({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new cf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_=new Map;function Kn(t){or(t instanceof Function,"Expected a class definition");let e=d_.get(t);return e?(or(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,d_.set(t,e),e)}/**
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
 */class B0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}B0.type="NONE";const f_=B0;/**
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
 */function Ql(t,e,n){return`firebase:${t}:${e}:${n}`}class As{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ql(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ql("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await bu(this.auth,{idToken:e}).catch(()=>{});return n?an._fromGetAccountInfoResponse(this.auth,n,e):null}return an._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new As(Kn(f_),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Kn(f_);const o=Ql(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let p;if(typeof d=="string"){const m=await bu(e,{idToken:d}).catch(()=>{});if(!m)break;p=await an._fromGetAccountInfoResponse(e,m,d)}else p=an._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new As(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new As(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(H0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(z0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(K0(e))return"Blackberry";if(G0(e))return"Webos";if($0(e))return"Safari";if((e.includes("chrome/")||q0(e))&&!e.includes("edge/"))return"Chrome";if(W0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function z0(t=mt()){return/firefox\//i.test(t)}function $0(t=mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function q0(t=mt()){return/crios\//i.test(t)}function H0(t=mt()){return/iemobile/i.test(t)}function W0(t=mt()){return/android/i.test(t)}function K0(t=mt()){return/blackberry/i.test(t)}function G0(t=mt()){return/webos/i.test(t)}function jp(t=mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eP(t=mt()){var e;return jp(t)&&!!((e=window.navigator)!=null&&e.standalone)}function tP(){return mR()&&document.documentMode===10}function Q0(t=mt()){return jp(t)||W0(t)||G0(t)||K0(t)||/windows phone/i.test(t)||H0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y0(t,e=[]){let n;switch(t){case"Browser":n=p_(mt());break;case"Worker":n=`${p_(mt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hi}/${r}`}/**
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
 */class nP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function rP(t,e={}){return Mn(t,"GET","/v2/passwordPolicy",fr(t,e))}/**
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
 */const iP=6;class sP{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??iP,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new m_(this),this.idTokenSubscription=new m_(this),this.beforeStateQueue=new nP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=O0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Kn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await As.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await bu(this,{idToken:e}),r=await an._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Mt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Du(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=UC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Mt(this.app))return Promise.reject(Xn(this));const n=e?Pe(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Mt(this.app)?Promise.reject(Xn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Mt(this.app)?Promise.reject(Xn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rP(this),n=new sP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new $i("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ZC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Kn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await As.create(this,[Kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Y0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&OC(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ii(t){return Pe(t)}class m_{constructor(e){this.auth=e,this.observer=null,this.addObserver=TR(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function aP(t){vc=t}function X0(t){return vc.loadJS(t)}function lP(){return vc.recaptchaEnterpriseScript}function uP(){return vc.gapiScript}function cP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class hP{constructor(){this.enterprise=new dP}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class dP{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const fP="recaptcha-enterprise",J0="NO_RECAPTCHA";class pP{constructor(e){this.type=fP,this.auth=ii(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{HC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new qC(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;c_(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(J0)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new hP().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&c_(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=lP();u.length!==0&&(u+=l),X0(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function g_(t,e,n,r=!1,i=!1){const s=new pP(t);let o;if(i)o=J0;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Lu(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await g_(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await g_(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mP(t,e){const n=qi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ir(s,e??{}))return i;mn(i,"already-initialized")}return n.initialize({options:e})}function gP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function yP(t,e,n){const r=ii(t);X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Z0(e),{host:o,port:l}=_P(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){X(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),X(ir(c,r.config.emulator)&&ir(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,zi(o)?(Dp(`${s}//${o}${u}`),Lp("Auth",!0)):vP()}function Z0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _P(t){const e=Z0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:y_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:y_(o)}}}function y_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function vP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wn("not implemented")}_getIdTokenResponse(e){return Wn("not implemented")}_linkToIdToken(e,n){return Wn("not implemented")}_getReauthenticationResolver(e){return Wn("not implemented")}}async function wP(t,e){return Mn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EP(t,e){return za(t,"POST","/v1/accounts:signInWithPassword",fr(t,e))}async function TP(t,e){return Mn(t,"POST","/v1/accounts:sendOobCode",fr(t,e))}async function IP(t,e){return TP(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SP(t,e){return za(t,"POST","/v1/accounts:signInWithEmailLink",fr(t,e))}async function AP(t,e){return za(t,"POST","/v1/accounts:signInWithEmailLink",fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta extends Bp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ta(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ta(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Lu(e,n,"signInWithPassword",EP);case"emailLink":return SP(e,{email:this._email,oobCode:this._password});default:mn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Lu(e,r,"signUpPassword",wP);case"emailLink":return AP(e,{idToken:n,email:this._email,oobCode:this._password});default:mn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ks(t,e){return za(t,"POST","/v1/accounts:signInWithIdp",fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kP="http://localhost";class Li extends Bp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Li(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):mn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Li(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ks(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ks(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ks(e,n)}buildRequest(){const e={requestUri:kP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ja(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function RP(t){const e=Vo(Mo(t)).link,n=e?Vo(Mo(e)).deep_link_id:null,r=Vo(Mo(t)).deep_link_id;return(r?Vo(Mo(r)).link:null)||r||n||e||t}class zp{constructor(e){const n=Vo(Mo(e)),r=n.apiKey??null,i=n.oobCode??null,s=xP(n.mode??null);X(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=RP(e);try{return new zp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(){this.providerId=eo.PROVIDER_ID}static credential(e,n){return Ta._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=zp.parseLink(n);return X(r,"argument-error"),Ta._fromEmailAndCode(e,r.code,r.tenantId)}}eo.PROVIDER_ID="password";eo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";eo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class $a extends eT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends $a{constructor(){super("facebook.com")}static credential(e){return Li._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rr.credential(e.oauthAccessToken)}catch{return null}}}Rr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends $a{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Li._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Cr.credential(n,r)}catch{return null}}}Cr.GOOGLE_SIGN_IN_METHOD="google.com";Cr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends $a{constructor(){super("github.com")}static credential(e){return Li._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pr.credential(e.oauthAccessToken)}catch{return null}}}Pr.GITHUB_SIGN_IN_METHOD="github.com";Pr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends $a{constructor(){super("twitter.com")}static credential(e,n){return Li._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Nr.credential(n,r)}catch{return null}}}Nr.TWITTER_SIGN_IN_METHOD="twitter.com";Nr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CP(t,e){return za(t,"POST","/v1/accounts:signUp",fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await an._fromIdTokenResponse(e,r,i),o=__(r);return new Oi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=__(r);return new Oi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function __(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou extends _n{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ou.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ou(e,n,r,i)}}function tT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ou._fromErrorAndOperation(t,s,e,r):s})}async function PP(t,e,n=!1){const r=await Ms(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Oi._forOperation(t,"link",r)}/**
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
 */async function NP(t,e,n=!1){const{auth:r}=t;if(Mt(r.app))return Promise.reject(Xn(r));const i="reauthenticate";try{const s=await Ms(t,tT(r,i,e,t),n);X(s.idToken,r,"internal-error");const o=Fp(s.idToken);X(o,r,"internal-error");const{sub:l}=o;return X(t.uid===l,r,"user-mismatch"),Oi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&mn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nT(t,e,n=!1){if(Mt(t.app))return Promise.reject(Xn(t));const r="signIn",i=await tT(t,r,e),s=await Oi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function bP(t,e){return nT(ii(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rT(t){const e=ii(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function DP(t,e,n){const r=ii(t);await Lu(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",IP)}async function LP(t,e,n){if(Mt(t.app))return Promise.reject(Xn(t));const r=ii(t),o=await Lu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",CP).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&rT(t),u}),l=await Oi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function OP(t,e,n){return Mt(t.app)?Promise.reject(Xn(t)):bP(Pe(t),eo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&rT(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VP(t,e){return Mn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iT(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Pe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ms(r,VP(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function MP(t,e,n,r){return Pe(t).onIdTokenChanged(e,n,r)}function UP(t,e,n){return Pe(t).beforeAuthStateChanged(e,n)}const Vu="__sak";/**
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
 */class sT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Vu,"1"),this.storage.removeItem(Vu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FP=1e3,jP=10;class oT extends sT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Q0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);tP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,jP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},FP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}oT.type="LOCAL";const BP=oT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT extends sT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}aT.type="SESSION";const lT=aT;/**
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
 */function zP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class wc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new wc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await zP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class $P{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=$p("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(){return window}function qP(t){Pn().location.href=t}/**
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
 */function uT(){return typeof Pn().WorkerGlobalScope<"u"&&typeof Pn().importScripts=="function"}async function HP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function KP(){return uT()?self:null}/**
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
 */const cT="firebaseLocalStorageDb",GP=1,Mu="firebaseLocalStorage",hT="fbase_key";class qa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ec(t,e){return t.transaction([Mu],e?"readwrite":"readonly").objectStore(Mu)}function QP(){const t=indexedDB.deleteDatabase(cT);return new qa(t).toPromise()}function hf(){const t=indexedDB.open(cT,GP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Mu,{keyPath:hT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Mu)?e(r):(r.close(),await QP(),e(await hf()))})})}async function v_(t,e,n){const r=Ec(t,!0).put({[hT]:e,value:n});return new qa(r).toPromise()}async function YP(t,e){const n=Ec(t,!1).get(e),r=await new qa(n).toPromise();return r===void 0?null:r.value}function w_(t,e){const n=Ec(t,!0).delete(e);return new qa(n).toPromise()}const XP=800,JP=3;class dT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>JP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wc._getInstance(KP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await HP(),!this.activeServiceWorker)return;this.sender=new $P(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||WP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hf();return await v_(e,Vu,"1"),await w_(e,Vu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>v_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>YP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>w_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ec(i,!1).getAll();return new qa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dT.type="LOCAL";const ZP=dT;new Ba(3e4,6e4);/**
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
 */function eN(t,e){return e?Kn(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class qp extends Bp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ks(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ks(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ks(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function tN(t){return nT(t.auth,new qp(t),t.bypassAuthState)}function nN(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),NP(n,new qp(t),t.bypassAuthState)}async function rN(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),PP(n,new qp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tN;case"linkViaPopup":case"linkViaRedirect":return rN;case"reauthViaPopup":case"reauthViaRedirect":return nN;default:mn(this.auth,"internal-error")}}resolve(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iN=new Ba(2e3,1e4);class gs extends fT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,gs.currentPopupAction&&gs.currentPopupAction.cancel(),gs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){or(this.filter.length===1,"Popup operations only handle one event");const e=$p();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,iN.get())};e()}}gs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sN="pendingRedirect",Yl=new Map;class oN extends fT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Yl.get(this.auth._key());if(!e){try{const r=await aN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Yl.set(this.auth._key(),e)}return this.bypassAuthState||Yl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function aN(t,e){const n=cN(e),r=uN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function lN(t,e){Yl.set(t._key(),e)}function uN(t){return Kn(t._redirectPersistence)}function cN(t){return Ql(sN,t.config.apiKey,t.name)}async function hN(t,e,n=!1){if(Mt(t.app))return Promise.reject(Xn(t));const r=ii(t),i=eN(r,e),o=await new oN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dN=10*60*1e3;class fN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!pT(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Cn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dN&&this.cachedEventUids.clear(),this.cachedEventUids.has(E_(e))}saveEventToCache(e){this.cachedEventUids.add(E_(e)),this.lastProcessedEventTime=Date.now()}}function E_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function pT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mN(t,e={}){return Mn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yN=/^https?/;async function _N(t){if(t.config.emulator)return;const{authorizedDomains:e}=await mN(t);for(const n of e)try{if(vN(n))return}catch{}mn(t,"unauthorized-domain")}function vN(t){const e=uf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!yN.test(n))return!1;if(gN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const wN=new Ba(3e4,6e4);function T_(){const t=Pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function EN(t){return new Promise((e,n)=>{var i,s,o;function r(){T_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{T_(),n(Cn(t,"network-request-failed"))},timeout:wN.get()})}if((s=(i=Pn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Pn().gapi)!=null&&o.load)r();else{const l=cP("iframefcb");return Pn()[l]=()=>{gapi.load?r():n(Cn(t,"network-request-failed"))},X0(`${uP()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Xl=null,e})}let Xl=null;function TN(t){return Xl=Xl||EN(t),Xl}/**
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
 */const IN=new Ba(5e3,15e3),SN="__/auth/iframe",AN="emulator/auth/iframe",kN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function RN(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Up(e,AN):`https://${t.config.authDomain}/${SN}`,r={apiKey:e.apiKey,appName:t.name,v:Hi},i=xN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ja(r).slice(1)}`}async function CN(t){const e=await TN(t),n=Pn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:RN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Cn(t,"network-request-failed"),l=Pn().setTimeout(()=>{s(o)},IN.get());function u(){Pn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const PN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},NN=500,bN=600,DN="_blank",LN="http://localhost";class I_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ON(t,e,n,r=NN,i=bN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...PN,width:r.toString(),height:i.toString(),top:s,left:o},c=mt().toLowerCase();n&&(l=q0(c)?DN:n),z0(c)&&(e=e||LN,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[y,A])=>`${m}${y}=${A},`,"");if(eP(c)&&l!=="_self")return VN(e||"",l),new I_(null);const p=window.open(e||"",l,d);X(p,t,"popup-blocked");try{p.focus()}catch{}return new I_(p)}function VN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const MN="__/auth/handler",UN="emulator/auth/handler",FN=encodeURIComponent("fac");async function S_(t,e,n,r,i,s){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Hi,eventId:i};if(e instanceof eT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ER(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof $a){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${FN}=${encodeURIComponent(u)}`:"";return`${jN(t)}?${ja(l).slice(1)}${c}`}function jN({config:t}){return t.emulator?Up(t,UN):`https://${t.authDomain}/${MN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh="webStorageSupport";class BN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lT,this._completeRedirectFn=hN,this._overrideRedirectResult=lN}async _openPopup(e,n,r,i){var o;or((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await S_(e,n,r,uf(),i);return ON(e,s,$p())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await S_(e,n,r,uf(),i);return qP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(or(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await CN(e),r=new fN(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Yh,{type:Yh},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Yh];s!==void 0&&n(!!s),mn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_N(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Q0()||$0()||jp()}}const zN=BN;var A_="@firebase/auth",k_="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function HN(t){pn(new tn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Y0(t)},c=new oP(r,i,s,u);return gP(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),pn(new tn("auth-internal",e=>{const n=ii(e.getProvider("auth").getImmediate());return(r=>new $N(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dt(A_,k_,qN(t)),Dt(A_,k_,"esm2020")}/**
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
 */const WN=5*60,KN=A0("authIdTokenMaxAge")||WN;let x_=null;const GN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>KN)return;const i=n==null?void 0:n.token;x_!==i&&(x_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function QN(t=_c()){const e=qi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=mP(t,{popupRedirectResolver:zN,persistence:[ZP,BP,lT]}),r=A0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=GN(s.toString());UP(n,o,()=>o(n.currentUser)),MP(n,l=>o(l))}}const i=T0("auth");return i&&yP(n,`http://${i}`),n}function YN(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}aP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Cn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",YN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});HN("Browser");var R_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hr,mT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,v){function S(){}S.prototype=v.prototype,E.F=v.prototype,E.prototype=new S,E.prototype.constructor=E,E.D=function(x,C,N){for(var k=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)k[ie-2]=arguments[ie];return v.prototype[C].apply(x,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,v,S){S||(S=0);const x=Array(16);if(typeof v=="string")for(var C=0;C<16;++C)x[C]=v.charCodeAt(S++)|v.charCodeAt(S++)<<8|v.charCodeAt(S++)<<16|v.charCodeAt(S++)<<24;else for(C=0;C<16;++C)x[C]=v[S++]|v[S++]<<8|v[S++]<<16|v[S++]<<24;v=E.g[0],S=E.g[1],C=E.g[2];let N=E.g[3],k;k=v+(N^S&(C^N))+x[0]+3614090360&4294967295,v=S+(k<<7&4294967295|k>>>25),k=N+(C^v&(S^C))+x[1]+3905402710&4294967295,N=v+(k<<12&4294967295|k>>>20),k=C+(S^N&(v^S))+x[2]+606105819&4294967295,C=N+(k<<17&4294967295|k>>>15),k=S+(v^C&(N^v))+x[3]+3250441966&4294967295,S=C+(k<<22&4294967295|k>>>10),k=v+(N^S&(C^N))+x[4]+4118548399&4294967295,v=S+(k<<7&4294967295|k>>>25),k=N+(C^v&(S^C))+x[5]+1200080426&4294967295,N=v+(k<<12&4294967295|k>>>20),k=C+(S^N&(v^S))+x[6]+2821735955&4294967295,C=N+(k<<17&4294967295|k>>>15),k=S+(v^C&(N^v))+x[7]+4249261313&4294967295,S=C+(k<<22&4294967295|k>>>10),k=v+(N^S&(C^N))+x[8]+1770035416&4294967295,v=S+(k<<7&4294967295|k>>>25),k=N+(C^v&(S^C))+x[9]+2336552879&4294967295,N=v+(k<<12&4294967295|k>>>20),k=C+(S^N&(v^S))+x[10]+4294925233&4294967295,C=N+(k<<17&4294967295|k>>>15),k=S+(v^C&(N^v))+x[11]+2304563134&4294967295,S=C+(k<<22&4294967295|k>>>10),k=v+(N^S&(C^N))+x[12]+1804603682&4294967295,v=S+(k<<7&4294967295|k>>>25),k=N+(C^v&(S^C))+x[13]+4254626195&4294967295,N=v+(k<<12&4294967295|k>>>20),k=C+(S^N&(v^S))+x[14]+2792965006&4294967295,C=N+(k<<17&4294967295|k>>>15),k=S+(v^C&(N^v))+x[15]+1236535329&4294967295,S=C+(k<<22&4294967295|k>>>10),k=v+(C^N&(S^C))+x[1]+4129170786&4294967295,v=S+(k<<5&4294967295|k>>>27),k=N+(S^C&(v^S))+x[6]+3225465664&4294967295,N=v+(k<<9&4294967295|k>>>23),k=C+(v^S&(N^v))+x[11]+643717713&4294967295,C=N+(k<<14&4294967295|k>>>18),k=S+(N^v&(C^N))+x[0]+3921069994&4294967295,S=C+(k<<20&4294967295|k>>>12),k=v+(C^N&(S^C))+x[5]+3593408605&4294967295,v=S+(k<<5&4294967295|k>>>27),k=N+(S^C&(v^S))+x[10]+38016083&4294967295,N=v+(k<<9&4294967295|k>>>23),k=C+(v^S&(N^v))+x[15]+3634488961&4294967295,C=N+(k<<14&4294967295|k>>>18),k=S+(N^v&(C^N))+x[4]+3889429448&4294967295,S=C+(k<<20&4294967295|k>>>12),k=v+(C^N&(S^C))+x[9]+568446438&4294967295,v=S+(k<<5&4294967295|k>>>27),k=N+(S^C&(v^S))+x[14]+3275163606&4294967295,N=v+(k<<9&4294967295|k>>>23),k=C+(v^S&(N^v))+x[3]+4107603335&4294967295,C=N+(k<<14&4294967295|k>>>18),k=S+(N^v&(C^N))+x[8]+1163531501&4294967295,S=C+(k<<20&4294967295|k>>>12),k=v+(C^N&(S^C))+x[13]+2850285829&4294967295,v=S+(k<<5&4294967295|k>>>27),k=N+(S^C&(v^S))+x[2]+4243563512&4294967295,N=v+(k<<9&4294967295|k>>>23),k=C+(v^S&(N^v))+x[7]+1735328473&4294967295,C=N+(k<<14&4294967295|k>>>18),k=S+(N^v&(C^N))+x[12]+2368359562&4294967295,S=C+(k<<20&4294967295|k>>>12),k=v+(S^C^N)+x[5]+4294588738&4294967295,v=S+(k<<4&4294967295|k>>>28),k=N+(v^S^C)+x[8]+2272392833&4294967295,N=v+(k<<11&4294967295|k>>>21),k=C+(N^v^S)+x[11]+1839030562&4294967295,C=N+(k<<16&4294967295|k>>>16),k=S+(C^N^v)+x[14]+4259657740&4294967295,S=C+(k<<23&4294967295|k>>>9),k=v+(S^C^N)+x[1]+2763975236&4294967295,v=S+(k<<4&4294967295|k>>>28),k=N+(v^S^C)+x[4]+1272893353&4294967295,N=v+(k<<11&4294967295|k>>>21),k=C+(N^v^S)+x[7]+4139469664&4294967295,C=N+(k<<16&4294967295|k>>>16),k=S+(C^N^v)+x[10]+3200236656&4294967295,S=C+(k<<23&4294967295|k>>>9),k=v+(S^C^N)+x[13]+681279174&4294967295,v=S+(k<<4&4294967295|k>>>28),k=N+(v^S^C)+x[0]+3936430074&4294967295,N=v+(k<<11&4294967295|k>>>21),k=C+(N^v^S)+x[3]+3572445317&4294967295,C=N+(k<<16&4294967295|k>>>16),k=S+(C^N^v)+x[6]+76029189&4294967295,S=C+(k<<23&4294967295|k>>>9),k=v+(S^C^N)+x[9]+3654602809&4294967295,v=S+(k<<4&4294967295|k>>>28),k=N+(v^S^C)+x[12]+3873151461&4294967295,N=v+(k<<11&4294967295|k>>>21),k=C+(N^v^S)+x[15]+530742520&4294967295,C=N+(k<<16&4294967295|k>>>16),k=S+(C^N^v)+x[2]+3299628645&4294967295,S=C+(k<<23&4294967295|k>>>9),k=v+(C^(S|~N))+x[0]+4096336452&4294967295,v=S+(k<<6&4294967295|k>>>26),k=N+(S^(v|~C))+x[7]+1126891415&4294967295,N=v+(k<<10&4294967295|k>>>22),k=C+(v^(N|~S))+x[14]+2878612391&4294967295,C=N+(k<<15&4294967295|k>>>17),k=S+(N^(C|~v))+x[5]+4237533241&4294967295,S=C+(k<<21&4294967295|k>>>11),k=v+(C^(S|~N))+x[12]+1700485571&4294967295,v=S+(k<<6&4294967295|k>>>26),k=N+(S^(v|~C))+x[3]+2399980690&4294967295,N=v+(k<<10&4294967295|k>>>22),k=C+(v^(N|~S))+x[10]+4293915773&4294967295,C=N+(k<<15&4294967295|k>>>17),k=S+(N^(C|~v))+x[1]+2240044497&4294967295,S=C+(k<<21&4294967295|k>>>11),k=v+(C^(S|~N))+x[8]+1873313359&4294967295,v=S+(k<<6&4294967295|k>>>26),k=N+(S^(v|~C))+x[15]+4264355552&4294967295,N=v+(k<<10&4294967295|k>>>22),k=C+(v^(N|~S))+x[6]+2734768916&4294967295,C=N+(k<<15&4294967295|k>>>17),k=S+(N^(C|~v))+x[13]+1309151649&4294967295,S=C+(k<<21&4294967295|k>>>11),k=v+(C^(S|~N))+x[4]+4149444226&4294967295,v=S+(k<<6&4294967295|k>>>26),k=N+(S^(v|~C))+x[11]+3174756917&4294967295,N=v+(k<<10&4294967295|k>>>22),k=C+(v^(N|~S))+x[2]+718787259&4294967295,C=N+(k<<15&4294967295|k>>>17),k=S+(N^(C|~v))+x[9]+3951481745&4294967295,E.g[0]=E.g[0]+v&4294967295,E.g[1]=E.g[1]+(C+(k<<21&4294967295|k>>>11))&4294967295,E.g[2]=E.g[2]+C&4294967295,E.g[3]=E.g[3]+N&4294967295}r.prototype.v=function(E,v){v===void 0&&(v=E.length);const S=v-this.blockSize,x=this.C;let C=this.h,N=0;for(;N<v;){if(C==0)for(;N<=S;)i(this,E,N),N+=this.blockSize;if(typeof E=="string"){for(;N<v;)if(x[C++]=E.charCodeAt(N++),C==this.blockSize){i(this,x),C=0;break}}else for(;N<v;)if(x[C++]=E[N++],C==this.blockSize){i(this,x),C=0;break}}this.h=C,this.o+=v},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var v=1;v<E.length-8;++v)E[v]=0;v=this.o*8;for(var S=E.length-8;S<E.length;++S)E[S]=v&255,v/=256;for(this.v(E),E=Array(16),v=0,S=0;S<4;++S)for(let x=0;x<32;x+=8)E[v++]=this.g[S]>>>x&255;return E};function s(E,v){var S=l;return Object.prototype.hasOwnProperty.call(S,E)?S[E]:S[E]=v(E)}function o(E,v){this.h=v;const S=[];let x=!0;for(let C=E.length-1;C>=0;C--){const N=E[C]|0;x&&N==v||(S[C]=N,x=!1)}this.g=S}var l={};function u(E){return-128<=E&&E<128?s(E,function(v){return new o([v|0],v<0?-1:0)}):new o([E|0],E<0?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return p;if(E<0)return P(c(-E));const v=[];let S=1;for(let x=0;E>=S;x++)v[x]=E/S|0,S*=4294967296;return new o(v,0)}function d(E,v){if(E.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(E.charAt(0)=="-")return P(d(E.substring(1),v));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const S=c(Math.pow(v,8));let x=p;for(let N=0;N<E.length;N+=8){var C=Math.min(8,E.length-N);const k=parseInt(E.substring(N,N+C),v);C<8?(C=c(Math.pow(v,C)),x=x.j(C).add(c(k))):(x=x.j(S),x=x.add(c(k)))}return x}var p=u(0),m=u(1),y=u(16777216);t=o.prototype,t.m=function(){if(R(this))return-P(this).m();let E=0,v=1;for(let S=0;S<this.g.length;S++){const x=this.i(S);E+=(x>=0?x:4294967296+x)*v,v*=4294967296}return E},t.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(A(this))return"0";if(R(this))return"-"+P(this).toString(E);const v=c(Math.pow(E,6));var S=this;let x="";for(;;){const C=L(S,v).g;S=_(S,C.j(v));let N=((S.g.length>0?S.g[0]:S.h)>>>0).toString(E);if(S=C,A(S))return N+x;for(;N.length<6;)N="0"+N;x=N+x}},t.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function A(E){if(E.h!=0)return!1;for(let v=0;v<E.g.length;v++)if(E.g[v]!=0)return!1;return!0}function R(E){return E.h==-1}t.l=function(E){return E=_(this,E),R(E)?-1:A(E)?0:1};function P(E){const v=E.g.length,S=[];for(let x=0;x<v;x++)S[x]=~E.g[x];return new o(S,~E.h).add(m)}t.abs=function(){return R(this)?P(this):this},t.add=function(E){const v=Math.max(this.g.length,E.g.length),S=[];let x=0;for(let C=0;C<=v;C++){let N=x+(this.i(C)&65535)+(E.i(C)&65535),k=(N>>>16)+(this.i(C)>>>16)+(E.i(C)>>>16);x=k>>>16,N&=65535,k&=65535,S[C]=k<<16|N}return new o(S,S[S.length-1]&-2147483648?-1:0)};function _(E,v){return E.add(P(v))}t.j=function(E){if(A(this)||A(E))return p;if(R(this))return R(E)?P(this).j(P(E)):P(P(this).j(E));if(R(E))return P(this.j(P(E)));if(this.l(y)<0&&E.l(y)<0)return c(this.m()*E.m());const v=this.g.length+E.g.length,S=[];for(var x=0;x<2*v;x++)S[x]=0;for(x=0;x<this.g.length;x++)for(let C=0;C<E.g.length;C++){const N=this.i(x)>>>16,k=this.i(x)&65535,ie=E.i(C)>>>16,ze=E.i(C)&65535;S[2*x+2*C]+=k*ze,T(S,2*x+2*C),S[2*x+2*C+1]+=N*ze,T(S,2*x+2*C+1),S[2*x+2*C+1]+=k*ie,T(S,2*x+2*C+1),S[2*x+2*C+2]+=N*ie,T(S,2*x+2*C+2)}for(E=0;E<v;E++)S[E]=S[2*E+1]<<16|S[2*E];for(E=v;E<2*v;E++)S[E]=0;return new o(S,0)};function T(E,v){for(;(E[v]&65535)!=E[v];)E[v+1]+=E[v]>>>16,E[v]&=65535,v++}function I(E,v){this.g=E,this.h=v}function L(E,v){if(A(v))throw Error("division by zero");if(A(E))return new I(p,p);if(R(E))return v=L(P(E),v),new I(P(v.g),P(v.h));if(R(v))return v=L(E,P(v)),new I(P(v.g),v.h);if(E.g.length>30){if(R(E)||R(v))throw Error("slowDivide_ only works with positive integers.");for(var S=m,x=v;x.l(E)<=0;)S=V(S),x=V(x);var C=F(S,1),N=F(x,1);for(x=F(x,2),S=F(S,2);!A(x);){var k=N.add(x);k.l(E)<=0&&(C=C.add(S),N=k),x=F(x,1),S=F(S,1)}return v=_(E,C.j(v)),new I(C,v)}for(C=p;E.l(v)>=0;){for(S=Math.max(1,Math.floor(E.m()/v.m())),x=Math.ceil(Math.log(S)/Math.LN2),x=x<=48?1:Math.pow(2,x-48),N=c(S),k=N.j(v);R(k)||k.l(E)>0;)S-=x,N=c(S),k=N.j(v);A(N)&&(N=m),C=C.add(N),E=_(E,k)}return new I(C,E)}t.B=function(E){return L(this,E).h},t.and=function(E){const v=Math.max(this.g.length,E.g.length),S=[];for(let x=0;x<v;x++)S[x]=this.i(x)&E.i(x);return new o(S,this.h&E.h)},t.or=function(E){const v=Math.max(this.g.length,E.g.length),S=[];for(let x=0;x<v;x++)S[x]=this.i(x)|E.i(x);return new o(S,this.h|E.h)},t.xor=function(E){const v=Math.max(this.g.length,E.g.length),S=[];for(let x=0;x<v;x++)S[x]=this.i(x)^E.i(x);return new o(S,this.h^E.h)};function V(E){const v=E.g.length+1,S=[];for(let x=0;x<v;x++)S[x]=E.i(x)<<1|E.i(x-1)>>>31;return new o(S,E.h)}function F(E,v){const S=v>>5;v%=32;const x=E.g.length-S,C=[];for(let N=0;N<x;N++)C[N]=v>0?E.i(N+S)>>>v|E.i(N+S+1)<<32-v:E.i(N+S);return new o(C,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,mT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Hr=o}).apply(typeof R_<"u"?R_:typeof self<"u"?self:typeof window<"u"?window:{});var Rl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gT,Uo,yT,Jl,df,_T,vT,wT;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Rl=="object"&&Rl];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var w=0;w<a.length-1;w++){var D=a[w];if(!(D in f))break e;f=f[D]}a=a[a.length-1],w=f[a],h=h(w),h!=w&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var f=[],w;for(w in h)Object.prototype.hasOwnProperty.call(h,w)&&f.push([w,h[w]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,f){return a.call.apply(a.bind,arguments)}function c(a,h,f){return c=u,c.apply(null,arguments)}function d(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var w=f.slice();return w.push.apply(w,arguments),a.apply(this,w)}}function p(a,h){function f(){}f.prototype=h.prototype,a.Z=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(w,D,O){for(var B=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)B[ne-2]=arguments[ne];return h.prototype[D].apply(w,B)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function y(a){const h=a.length;if(h>0){const f=Array(h);for(let w=0;w<h;w++)f[w]=a[w];return f}return[]}function A(a,h){for(let w=1;w<arguments.length;w++){const D=arguments[w];var f=typeof D;if(f=f!="object"?f:D?Array.isArray(D)?"array":f:"null",f=="array"||f=="object"&&typeof D.length=="number"){f=a.length||0;const O=D.length||0;a.length=f+O;for(let B=0;B<O;B++)a[f+B]=D[B]}else a.push(D)}}class R{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function P(a){o.setTimeout(()=>{throw a},0)}function _(){var a=E;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class T{constructor(){this.h=this.g=null}add(h,f){const w=I.get();w.set(h,f),this.h?this.h.next=w:this.g=w,this.h=w}}var I=new R(()=>new L,a=>a.reset());class L{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let V,F=!1,E=new T,v=()=>{const a=Promise.resolve(void 0);V=()=>{a.then(S)}};function S(){for(var a;a=_();){try{a.h.call(a.g)}catch(f){P(f)}var h=I;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}F=!1}function x(){this.u=this.u,this.C=this.C}x.prototype.u=!1,x.prototype.dispose=function(){this.u||(this.u=!0,this.N())},x.prototype[Symbol.dispose]=function(){this.dispose()},x.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function C(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var N=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,h),o.removeEventListener("test",f,h)}catch{}return a}();function k(a){return/^[\s\xa0]*$/.test(a)}function ie(a,h){C.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(ie,C),ie.prototype.init=function(a,h){const f=this.type=a.type,w=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ie.Z.h.call(this)},ie.prototype.h=function(){ie.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ze="closure_listenable_"+(Math.random()*1e6|0),It=0;function vn(a,h,f,w,D){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!w,this.ha=D,this.key=++It,this.da=this.fa=!1}function $(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Y(a,h,f){for(const w in a)h.call(f,a[w],w,a)}function te(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function fe(a){const h={};for(const f in a)h[f]=a[f];return h}const _e="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function jn(a,h){let f,w;for(let D=1;D<arguments.length;D++){w=arguments[D];for(f in w)a[f]=w[f];for(let O=0;O<_e.length;O++)f=_e[O],Object.prototype.hasOwnProperty.call(w,f)&&(a[f]=w[f])}}function gt(a){this.src=a,this.g={},this.h=0}gt.prototype.add=function(a,h,f,w,D){const O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);const B=St(a,h,w,D);return B>-1?(h=a[B],f||(h.fa=!1)):(h=new vn(h,this.src,O,!!w,D),h.fa=f,a.push(h)),h};function wn(a,h){const f=h.type;if(f in a.g){var w=a.g[f],D=Array.prototype.indexOf.call(w,h,void 0),O;(O=D>=0)&&Array.prototype.splice.call(w,D,1),O&&($(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function St(a,h,f,w){for(let D=0;D<a.length;++D){const O=a[D];if(!O.da&&O.listener==h&&O.capture==!!f&&O.ha==w)return D}return-1}var W="closure_lm_"+(Math.random()*1e6|0),ve={};function Qe(a,h,f,w,D){if(Array.isArray(h)){for(let O=0;O<h.length;O++)Qe(a,h[O],f,w,D);return null}return f=zm(f),a&&a[ze]?a.J(h,f,l(w)?!!w.capture:!1,D):ce(a,h,f,!1,w,D)}function ce(a,h,f,w,D,O){if(!h)throw Error("Invalid event type");const B=l(D)?!!D.capture:!!D;let ne=Qc(a);if(ne||(a[W]=ne=new gt(a)),f=ne.add(h,f,w,B,O),f.proxy)return f;if(w=Ht(),f.proxy=w,w.src=a,w.listener=f,a.addEventListener)N||(D=B),D===void 0&&(D=!1),a.addEventListener(h.toString(),w,D);else if(a.attachEvent)a.attachEvent(so(h.toString()),w);else if(a.addListener&&a.removeListener)a.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Ht(){function a(f){return h.call(a.src,a.listener,f)}const h=T1;return a}function pr(a,h,f,w,D){if(Array.isArray(h))for(var O=0;O<h.length;O++)pr(a,h[O],f,w,D);else w=l(w)?!!w.capture:!!w,f=zm(f),a&&a[ze]?(a=a.i,O=String(h).toString(),O in a.g&&(h=a.g[O],f=St(h,f,w,D),f>-1&&($(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete a.g[O],a.h--)))):a&&(a=Qc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=St(h,f,w,D)),(f=a>-1?h[a]:null)&&li(f))}function li(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[ze])wn(h.i,a);else{var f=a.type,w=a.proxy;h.removeEventListener?h.removeEventListener(f,w,a.capture):h.detachEvent?h.detachEvent(so(f),w):h.addListener&&h.removeListener&&h.removeListener(w),(f=Qc(h))?(wn(f,a),f.h==0&&(f.src=null,h[W]=null)):$(a)}}}function so(a){return a in ve?ve[a]:ve[a]="on"+a}function T1(a,h){if(a.da)a=!0;else{h=new ie(h,this);const f=a.listener,w=a.ha||a.src;a.fa&&li(a),a=f.call(w,h)}return a}function Qc(a){return a=a[W],a instanceof gt?a:null}var Yc="__closure_events_fn_"+(Math.random()*1e9>>>0);function zm(a){return typeof a=="function"?a:(a[Yc]||(a[Yc]=function(h){return a.handleEvent(h)}),a[Yc])}function ot(){x.call(this),this.i=new gt(this),this.M=this,this.G=null}p(ot,x),ot.prototype[ze]=!0,ot.prototype.removeEventListener=function(a,h,f,w){pr(this,a,h,f,w)};function yt(a,h){var f,w=a.G;if(w)for(f=[];w;w=w.G)f.push(w);if(a=a.M,w=h.type||h,typeof h=="string")h=new C(h,a);else if(h instanceof C)h.target=h.target||a;else{var D=h;h=new C(w,a),jn(h,D)}D=!0;let O,B;if(f)for(B=f.length-1;B>=0;B--)O=h.g=f[B],D=Xa(O,w,!0,h)&&D;if(O=h.g=a,D=Xa(O,w,!0,h)&&D,D=Xa(O,w,!1,h)&&D,f)for(B=0;B<f.length;B++)O=h.g=f[B],D=Xa(O,w,!1,h)&&D}ot.prototype.N=function(){if(ot.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const f=a.g[h];for(let w=0;w<f.length;w++)$(f[w]);delete a.g[h],a.h--}}this.G=null},ot.prototype.J=function(a,h,f,w){return this.i.add(String(a),h,!1,f,w)},ot.prototype.K=function(a,h,f,w){return this.i.add(String(a),h,!0,f,w)};function Xa(a,h,f,w){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let D=!0;for(let O=0;O<h.length;++O){const B=h[O];if(B&&!B.da&&B.capture==f){const ne=B.listener,$e=B.ha||B.src;B.fa&&wn(a.i,B),D=ne.call($e,w)!==!1&&D}}return D&&!w.defaultPrevented}function I1(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function $m(a){a.g=I1(()=>{a.g=null,a.i&&(a.i=!1,$m(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class S1 extends x{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:$m(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oo(a){x.call(this),this.h=a,this.g={}}p(oo,x);var qm=[];function Hm(a){Y(a.g,function(h,f){this.g.hasOwnProperty(f)&&li(h)},a),a.g={}}oo.prototype.N=function(){oo.Z.N.call(this),Hm(this)},oo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xc=o.JSON.stringify,A1=o.JSON.parse,k1=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Wm(){}function Km(){}var ao={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Jc(){C.call(this,"d")}p(Jc,C);function Zc(){C.call(this,"c")}p(Zc,C);var ui={},Gm=null;function Ja(){return Gm=Gm||new ot}ui.Ia="serverreachability";function Qm(a){C.call(this,ui.Ia,a)}p(Qm,C);function lo(a){const h=Ja();yt(h,new Qm(h))}ui.STAT_EVENT="statevent";function Ym(a,h){C.call(this,ui.STAT_EVENT,a),this.stat=h}p(Ym,C);function _t(a){const h=Ja();yt(h,new Ym(h,a))}ui.Ja="timingevent";function Xm(a,h){C.call(this,ui.Ja,a),this.size=h}p(Xm,C);function uo(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function co(){this.g=!0}co.prototype.ua=function(){this.g=!1};function x1(a,h,f,w,D,O){a.info(function(){if(a.g)if(O){var B="",ne=O.split("&");for(let ge=0;ge<ne.length;ge++){var $e=ne[ge].split("=");if($e.length>1){const Ye=$e[0];$e=$e[1];const Tn=Ye.split("_");B=Tn.length>=2&&Tn[1]=="type"?B+(Ye+"="+$e+"&"):B+(Ye+"=redacted&")}}}else B=null;else B=O;return"XMLHTTP REQ ("+w+") [attempt "+D+"]: "+h+`
`+f+`
`+B})}function R1(a,h,f,w,D,O,B){a.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+D+"]: "+h+`
`+f+`
`+O+" "+B})}function Yi(a,h,f,w){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+P1(a,f)+(w?" "+w:"")})}function C1(a,h){a.info(function(){return"TIMEOUT: "+h})}co.prototype.info=function(){};function P1(a,h){if(!a.g)return h;if(!h)return null;try{const O=JSON.parse(h);if(O){for(a=0;a<O.length;a++)if(Array.isArray(O[a])){var f=O[a];if(!(f.length<2)){var w=f[1];if(Array.isArray(w)&&!(w.length<1)){var D=w[0];if(D!="noop"&&D!="stop"&&D!="close")for(let B=1;B<w.length;B++)w[B]=""}}}}return Xc(O)}catch{return h}}var Za={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Jm={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Zm;function eh(){}p(eh,Wm),eh.prototype.g=function(){return new XMLHttpRequest},Zm=new eh;function ho(a){return encodeURIComponent(String(a))}function N1(a){var h=1;a=a.split(":");const f=[];for(;h>0&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function mr(a,h,f,w){this.j=a,this.i=h,this.l=f,this.S=w||1,this.V=new oo(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new eg}function eg(){this.i=null,this.g="",this.h=!1}var tg={},th={};function nh(a,h,f){a.M=1,a.A=tl(En(h)),a.u=f,a.R=!0,ng(a,null)}function ng(a,h){a.F=Date.now(),el(a),a.B=En(a.A);var f=a.B,w=a.S;Array.isArray(w)||(w=[String(w)]),mg(f.i,"t",w),a.C=0,f=a.j.L,a.h=new eg,a.g=Dg(a.j,f?h:null,!a.u),a.P>0&&(a.O=new S1(c(a.Y,a,a.g),a.P)),h=a.V,f=a.g,w=a.ba;var D="readystatechange";Array.isArray(D)||(D&&(qm[0]=D.toString()),D=qm);for(let O=0;O<D.length;O++){const B=Qe(f,D[O],w||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.J?fe(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),lo(),x1(a.i,a.v,a.B,a.l,a.S,a.u)}mr.prototype.ba=function(a){a=a.target;const h=this.O;h&&_r(a)==3?h.j():this.Y(a)},mr.prototype.Y=function(a){try{if(a==this.g)e:{const ne=_r(this.g),$e=this.g.ya(),ge=this.g.ca();if(!(ne<3)&&(ne!=3||this.g&&(this.h.h||this.g.la()||Tg(this.g)))){this.K||ne!=4||$e==7||($e==8||ge<=0?lo(3):lo(2)),rh(this);var h=this.g.ca();this.X=h;var f=b1(this);if(this.o=h==200,R1(this.i,this.v,this.B,this.l,this.S,ne,h),this.o){if(this.U&&!this.L){t:{if(this.g){var w,D=this.g;if((w=D.g?D.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(w)){var O=w;break t}}O=null}if(a=O)Yi(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ih(this,a);else{this.o=!1,this.m=3,_t(12),ci(this),fo(this);break e}}if(this.R){a=!0;let Ye;for(;!this.K&&this.C<f.length;)if(Ye=D1(this,f),Ye==th){ne==4&&(this.m=4,_t(14),a=!1),Yi(this.i,this.l,null,"[Incomplete Response]");break}else if(Ye==tg){this.m=4,_t(15),Yi(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else Yi(this.i,this.l,Ye,null),ih(this,Ye);if(rg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ne!=4||f.length!=0||this.h.h||(this.m=1,_t(16),a=!1),this.o=this.o&&a,!a)Yi(this.i,this.l,f,"[Invalid Chunked Response]"),ci(this),fo(this);else if(f.length>0&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.aa&&!B.P&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),dh(B),B.P=!0,_t(11))}}else Yi(this.i,this.l,f,null),ih(this,f);ne==4&&ci(this),this.o&&!this.K&&(ne==4?Cg(this.j,this):(this.o=!1,el(this)))}else K1(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,_t(12)):(this.m=0,_t(13)),ci(this),fo(this)}}}catch{}finally{}};function b1(a){if(!rg(a))return a.g.la();const h=Tg(a.g);if(h==="")return"";let f="";const w=h.length,D=_r(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return ci(a),fo(a),"";a.h.i=new o.TextDecoder}for(let O=0;O<w;O++)a.h.h=!0,f+=a.h.i.decode(h[O],{stream:!(D&&O==w-1)});return h.length=0,a.h.g+=f,a.C=0,a.h.g}function rg(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function D1(a,h){var f=a.C,w=h.indexOf(`
`,f);return w==-1?th:(f=Number(h.substring(f,w)),isNaN(f)?tg:(w+=1,w+f>h.length?th:(h=h.slice(w,w+f),a.C=w+f,h)))}mr.prototype.cancel=function(){this.K=!0,ci(this)};function el(a){a.T=Date.now()+a.H,ig(a,a.H)}function ig(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=uo(c(a.aa,a),h)}function rh(a){a.D&&(o.clearTimeout(a.D),a.D=null)}mr.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(C1(this.i,this.B),this.M!=2&&(lo(),_t(17)),ci(this),this.m=2,fo(this)):ig(this,this.T-a)};function fo(a){a.j.I==0||a.K||Cg(a.j,a)}function ci(a){rh(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Hm(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function ih(a,h){try{var f=a.j;if(f.I!=0&&(f.g==a||sh(f.h,a))){if(!a.L&&sh(f.h,a)&&f.I==3){try{var w=f.Ba.g.parse(h)}catch{w=null}if(Array.isArray(w)&&w.length==3){var D=w;if(D[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)ol(f),il(f);else break e;hh(f),_t(18)}}else f.xa=D[1],0<f.xa-f.K&&D[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=uo(c(f.Va,f),6e3));ag(f.h)<=1&&f.ta&&(f.ta=void 0)}else di(f,11)}else if((a.L||f.g==a)&&ol(f),!k(h))for(D=f.Ba.g.parse(h),h=0;h<D.length;h++){let ge=D[h];const Ye=ge[0];if(!(Ye<=f.K))if(f.K=Ye,ge=ge[1],f.I==2)if(ge[0]=="c"){f.M=ge[1],f.ba=ge[2];const Tn=ge[3];Tn!=null&&(f.ka=Tn,f.j.info("VER="+f.ka));const fi=ge[4];fi!=null&&(f.za=fi,f.j.info("SVER="+f.za));const vr=ge[5];vr!=null&&typeof vr=="number"&&vr>0&&(w=1.5*vr,f.O=w,f.j.info("backChannelRequestTimeoutMs_="+w)),w=f;const wr=a.g;if(wr){const ll=wr.g?wr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ll){var O=w.h;O.g||ll.indexOf("spdy")==-1&&ll.indexOf("quic")==-1&&ll.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(oh(O,O.h),O.h=null))}if(w.G){const fh=wr.g?wr.g.getResponseHeader("X-HTTP-Session-Id"):null;fh&&(w.wa=fh,Ee(w.J,w.G,fh))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),w=f;var B=a;if(w.na=bg(w,w.L?w.ba:null,w.W),B.L){lg(w.h,B);var ne=B,$e=w.O;$e&&(ne.H=$e),ne.D&&(rh(ne),el(ne)),w.g=B}else xg(w);f.i.length>0&&sl(f)}else ge[0]!="stop"&&ge[0]!="close"||di(f,7);else f.I==3&&(ge[0]=="stop"||ge[0]=="close"?ge[0]=="stop"?di(f,7):ch(f):ge[0]!="noop"&&f.l&&f.l.qa(ge),f.A=0)}}lo(4)}catch{}}var L1=class{constructor(a,h){this.g=a,this.map=h}};function sg(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function og(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ag(a){return a.h?1:a.g?a.g.size:0}function sh(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function oh(a,h){a.g?a.g.add(h):a.h=h}function lg(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}sg.prototype.cancel=function(){if(this.i=ug(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ug(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.G);return h}return y(a.i)}var cg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function O1(a,h){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const w=a[f].indexOf("=");let D,O=null;w>=0?(D=a[f].substring(0,w),O=a[f].substring(w+1)):D=a[f],h(D,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function gr(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof gr?(this.l=a.l,po(this,a.j),this.o=a.o,this.g=a.g,mo(this,a.u),this.h=a.h,ah(this,gg(a.i)),this.m=a.m):a&&(h=String(a).match(cg))?(this.l=!1,po(this,h[1]||"",!0),this.o=go(h[2]||""),this.g=go(h[3]||"",!0),mo(this,h[4]),this.h=go(h[5]||"",!0),ah(this,h[6]||"",!0),this.m=go(h[7]||"")):(this.l=!1,this.i=new _o(null,this.l))}gr.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(yo(h,hg,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(yo(h,hg,!0),"@"),a.push(ho(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(yo(f,f.charAt(0)=="/"?U1:M1,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",yo(f,j1)),a.join("")},gr.prototype.resolve=function(a){const h=En(this);let f=!!a.j;f?po(h,a.j):f=!!a.o,f?h.o=a.o:f=!!a.g,f?h.g=a.g:f=a.u!=null;var w=a.h;if(f)mo(h,a.u);else if(f=!!a.h){if(w.charAt(0)!="/")if(this.g&&!this.h)w="/"+w;else{var D=h.h.lastIndexOf("/");D!=-1&&(w=h.h.slice(0,D+1)+w)}if(D=w,D==".."||D==".")w="";else if(D.indexOf("./")!=-1||D.indexOf("/.")!=-1){w=D.lastIndexOf("/",0)==0,D=D.split("/");const O=[];for(let B=0;B<D.length;){const ne=D[B++];ne=="."?w&&B==D.length&&O.push(""):ne==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),w&&B==D.length&&O.push("")):(O.push(ne),w=!0)}w=O.join("/")}else w=D}return f?h.h=w:f=a.i.toString()!=="",f?ah(h,gg(a.i)):f=!!a.m,f&&(h.m=a.m),h};function En(a){return new gr(a)}function po(a,h,f){a.j=f?go(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function mo(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function ah(a,h,f){h instanceof _o?(a.i=h,B1(a.i,a.l)):(f||(h=yo(h,F1)),a.i=new _o(h,a.l))}function Ee(a,h,f){a.i.set(h,f)}function tl(a){return Ee(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function go(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function yo(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,V1),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function V1(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var hg=/[#\/\?@]/g,M1=/[#\?:]/g,U1=/[#\?]/g,F1=/[#\?@]/g,j1=/#/g;function _o(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function hi(a){a.g||(a.g=new Map,a.h=0,a.i&&O1(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=_o.prototype,t.add=function(a,h){hi(this),this.i=null,a=Xi(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function dg(a,h){hi(a),h=Xi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function fg(a,h){return hi(a),h=Xi(a,h),a.g.has(h)}t.forEach=function(a,h){hi(this),this.g.forEach(function(f,w){f.forEach(function(D){a.call(h,D,w,this)},this)},this)};function pg(a,h){hi(a);let f=[];if(typeof h=="string")fg(a,h)&&(f=f.concat(a.g.get(Xi(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)f=f.concat(a[h]);return f}t.set=function(a,h){return hi(this),this.i=null,a=Xi(this,a),fg(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=pg(this,a),a.length>0?String(a[0]):h):h};function mg(a,h,f){dg(a,h),f.length>0&&(a.i=null,a.g.set(Xi(a,h),y(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let w=0;w<h.length;w++){var f=h[w];const D=ho(f);f=pg(this,f);for(let O=0;O<f.length;O++){let B=D;f[O]!==""&&(B+="="+ho(f[O])),a.push(B)}}return this.i=a.join("&")};function gg(a){const h=new _o;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Xi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function B1(a,h){h&&!a.j&&(hi(a),a.i=null,a.g.forEach(function(f,w){const D=w.toLowerCase();w!=D&&(dg(this,w),mg(this,D,f))},a)),a.j=h}function z1(a,h){const f=new co;if(o.Image){const w=new Image;w.onload=d(yr,f,"TestLoadImage: loaded",!0,h,w),w.onerror=d(yr,f,"TestLoadImage: error",!1,h,w),w.onabort=d(yr,f,"TestLoadImage: abort",!1,h,w),w.ontimeout=d(yr,f,"TestLoadImage: timeout",!1,h,w),o.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=a}else h(!1)}function $1(a,h){const f=new co,w=new AbortController,D=setTimeout(()=>{w.abort(),yr(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:w.signal}).then(O=>{clearTimeout(D),O.ok?yr(f,"TestPingServer: ok",!0,h):yr(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),yr(f,"TestPingServer: error",!1,h)})}function yr(a,h,f,w,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),w(f)}catch{}}function q1(){this.g=new k1}function lh(a){this.i=a.Sb||null,this.h=a.ab||!1}p(lh,Wm),lh.prototype.g=function(){return new nl(this.i,this.h)};function nl(a,h){ot.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(nl,ot),t=nl.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,wo(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,vo(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,wo(this)),this.g&&(this.readyState=3,wo(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;yg(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function yg(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?vo(this):wo(this),this.readyState==3&&yg(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,vo(this))},t.Na=function(a){this.g&&(this.response=a,vo(this))},t.ga=function(){this.g&&vo(this)};function vo(a){a.readyState=4,a.l=null,a.j=null,a.B=null,wo(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function wo(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(nl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function _g(a){let h="";return Y(a,function(f,w){h+=w,h+=":",h+=f,h+=`\r
`}),h}function uh(a,h,f){e:{for(w in f){var w=!1;break e}w=!0}w||(f=_g(f),typeof a=="string"?f!=null&&ho(f):Ee(a,h,f))}function be(a){ot.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(be,ot);var H1=/^https?$/i,W1=["POST","PUT"];t=be.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,f,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Zm.g(),this.g.onreadystatechange=m(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){vg(this,O);return}if(a=f||"",f=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var D in w)f.set(D,w[D]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const O of w.keys())f.set(O,w.get(O));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),D=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(W1,h,void 0)>=0)||w||D||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,B]of f)this.g.setRequestHeader(O,B);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(O){vg(this,O)}};function vg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,wg(a),rl(a)}function wg(a){a.A||(a.A=!0,yt(a,"complete"),yt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,yt(this,"complete"),yt(this,"abort"),rl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),rl(this,!0)),be.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Eg(this):this.Xa())},t.Xa=function(){Eg(this)};function Eg(a){if(a.h&&typeof s<"u"){if(a.v&&_r(a)==4)setTimeout(a.Ca.bind(a),0);else if(yt(a,"readystatechange"),_r(a)==4){a.h=!1;try{const O=a.ca();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var w;if(w=O===0){let B=String(a.D).match(cg)[1]||null;!B&&o.self&&o.self.location&&(B=o.self.location.protocol.slice(0,-1)),w=!H1.test(B?B.toLowerCase():"")}f=w}if(f)yt(a,"complete"),yt(a,"success");else{a.o=6;try{var D=_r(a)>2?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.ca()+"]",wg(a)}}finally{rl(a)}}}}function rl(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,h||yt(a,"ready");try{f.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function _r(a){return a.g?a.g.readyState:0}t.ca=function(){try{return _r(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),A1(h)}};function Tg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function K1(a){const h={};a=(a.g&&_r(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<a.length;w++){if(k(a[w]))continue;var f=N1(a[w]);const D=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=h[D]||[];h[D]=O,O.push(f)}te(h,function(w){return w.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Eo(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Ig(a){this.za=0,this.i=[],this.j=new co,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Eo("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Eo("baseRetryDelayMs",5e3,a),this.Za=Eo("retryDelaySeedMs",1e4,a),this.Ta=Eo("forwardChannelMaxRetries",2,a),this.va=Eo("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new sg(a&&a.concurrentRequestLimit),this.Ba=new q1,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Ig.prototype,t.ka=8,t.I=1,t.connect=function(a,h,f,w){_t(0),this.W=a,this.H=h||{},f&&w!==void 0&&(this.H.OSID=f,this.H.OAID=w),this.F=this.X,this.J=bg(this,null,this.W),sl(this)};function ch(a){if(Sg(a),a.I==3){var h=a.V++,f=En(a.J);if(Ee(f,"SID",a.M),Ee(f,"RID",h),Ee(f,"TYPE","terminate"),To(a,f),h=new mr(a,a.j,h),h.M=2,h.A=tl(En(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=h.A,f=!0),f||(h.g=Dg(h.j,null),h.g.ea(h.A)),h.F=Date.now(),el(h)}Ng(a)}function il(a){a.g&&(dh(a),a.g.cancel(),a.g=null)}function Sg(a){il(a),a.v&&(o.clearTimeout(a.v),a.v=null),ol(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function sl(a){if(!og(a.h)&&!a.m){a.m=!0;var h=a.Ea;V||v(),F||(V(),F=!0),E.add(h,a),a.D=0}}function G1(a,h){return ag(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=uo(c(a.Ea,a,h),Pg(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const D=new mr(this,this.j,a);let O=this.o;if(this.U&&(O?(O=fe(O),jn(O,this.U)):O=this.U),this.u!==null||this.R||(D.J=O,O=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var w=this.i[f];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(h+=w,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=kg(this,D,h),f=En(this.J),Ee(f,"RID",a),Ee(f,"CVER",22),this.G&&Ee(f,"X-HTTP-Session-Id",this.G),To(this,f),O&&(this.R?h="headers="+ho(_g(O))+"&"+h:this.u&&uh(f,this.u,O)),oh(this.h,D),this.Ra&&Ee(f,"TYPE","init"),this.S?(Ee(f,"$req",h),Ee(f,"SID","null"),D.U=!0,nh(D,f,null)):nh(D,f,h),this.I=2}}else this.I==3&&(a?Ag(this,a):this.i.length==0||og(this.h)||Ag(this))};function Ag(a,h){var f;h?f=h.l:f=a.V++;const w=En(a.J);Ee(w,"SID",a.M),Ee(w,"RID",f),Ee(w,"AID",a.K),To(a,w),a.u&&a.o&&uh(w,a.u,a.o),f=new mr(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),h&&(a.i=h.G.concat(a.i)),h=kg(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),oh(a.h,f),nh(f,w,h)}function To(a,h){a.H&&Y(a.H,function(f,w){Ee(h,w,f)}),a.l&&Y({},function(f,w){Ee(h,w,f)})}function kg(a,h,f){f=Math.min(a.i.length,f);const w=a.l?c(a.l.Ka,a.l,a):null;e:{var D=a.i;let ne=-1;for(;;){const $e=["count="+f];ne==-1?f>0?(ne=D[0].g,$e.push("ofs="+ne)):ne=0:$e.push("ofs="+ne);let ge=!0;for(let Ye=0;Ye<f;Ye++){var O=D[Ye].g;const Tn=D[Ye].map;if(O-=ne,O<0)ne=Math.max(0,D[Ye].g-100),ge=!1;else try{O="req"+O+"_"||"";try{var B=Tn instanceof Map?Tn:Object.entries(Tn);for(const[fi,vr]of B){let wr=vr;l(vr)&&(wr=Xc(vr)),$e.push(O+fi+"="+encodeURIComponent(wr))}}catch(fi){throw $e.push(O+"type="+encodeURIComponent("_badmap")),fi}}catch{w&&w(Tn)}}if(ge){B=$e.join("&");break e}}B=void 0}return a=a.i.splice(0,f),h.G=a,B}function xg(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;V||v(),F||(V(),F=!0),E.add(h,a),a.A=0}}function hh(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=uo(c(a.Da,a),Pg(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Rg(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=uo(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,_t(10),il(this),Rg(this))};function dh(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Rg(a){a.g=new mr(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=En(a.na);Ee(h,"RID","rpc"),Ee(h,"SID",a.M),Ee(h,"AID",a.K),Ee(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Ee(h,"TO",a.ia),Ee(h,"TYPE","xmlhttp"),To(a,h),a.u&&a.o&&uh(h,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=tl(En(h)),f.u=null,f.R=!0,ng(f,a)}t.Va=function(){this.C!=null&&(this.C=null,il(this),hh(this),_t(19))};function ol(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Cg(a,h){var f=null;if(a.g==h){ol(a),dh(a),a.g=null;var w=2}else if(sh(a.h,h))f=h.G,lg(a.h,h),w=1;else return;if(a.I!=0){if(h.o)if(w==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var D=a.D;w=Ja(),yt(w,new Xm(w,f)),sl(a)}else xg(a);else if(D=h.m,D==3||D==0&&h.X>0||!(w==1&&G1(a,h)||w==2&&hh(a)))switch(f&&f.length>0&&(h=a.h,h.i=h.i.concat(f)),D){case 1:di(a,5);break;case 4:di(a,10);break;case 3:di(a,6);break;default:di(a,2)}}}function Pg(a,h){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*h}function di(a,h){if(a.j.info("Error code "+h),h==2){var f=c(a.bb,a),w=a.Ua;const D=!w;w=new gr(w||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||po(w,"https"),tl(w),D?z1(w.toString(),f):$1(w.toString(),f)}else _t(2);a.I=0,a.l&&a.l.pa(h),Ng(a),Sg(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function Ng(a){if(a.I=0,a.ja=[],a.l){const h=ug(a.h);(h.length!=0||a.i.length!=0)&&(A(a.ja,h),A(a.ja,a.i),a.h.i.length=0,y(a.i),a.i.length=0),a.l.oa()}}function bg(a,h,f){var w=f instanceof gr?En(f):new gr(f);if(w.g!="")h&&(w.g=h+"."+w.g),mo(w,w.u);else{var D=o.location;w=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;const O=new gr(null);w&&po(O,w),h&&(O.g=h),D&&mo(O,D),f&&(O.h=f),w=O}return f=a.G,h=a.wa,f&&h&&Ee(w,f,h),Ee(w,"VER",a.ka),To(a,w),w}function Dg(a,h,f){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new be(new lh({ab:f})):new be(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Lg(){}t=Lg.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function al(){}al.prototype.g=function(a,h){return new Ot(a,h)};function Ot(a,h){ot.call(this),this.g=new Ig(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!k(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!k(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Ji(this)}p(Ot,ot),Ot.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ot.prototype.close=function(){ch(this.g)},Ot.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=Xc(a),a=f);h.i.push(new L1(h.Ya++,a)),h.I==3&&sl(h)},Ot.prototype.N=function(){this.g.l=null,delete this.j,ch(this.g),delete this.g,Ot.Z.N.call(this)};function Og(a){Jc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(Og,Jc);function Vg(){Zc.call(this),this.status=1}p(Vg,Zc);function Ji(a){this.g=a}p(Ji,Lg),Ji.prototype.ra=function(){yt(this.g,"a")},Ji.prototype.qa=function(a){yt(this.g,new Og(a))},Ji.prototype.pa=function(a){yt(this.g,new Vg)},Ji.prototype.oa=function(){yt(this.g,"b")},al.prototype.createWebChannel=al.prototype.g,Ot.prototype.send=Ot.prototype.o,Ot.prototype.open=Ot.prototype.m,Ot.prototype.close=Ot.prototype.close,wT=function(){return new al},vT=function(){return Ja()},_T=ui,df={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Za.NO_ERROR=0,Za.TIMEOUT=8,Za.HTTP_ERROR=6,Jl=Za,Jm.COMPLETE="complete",yT=Jm,Km.EventType=ao,ao.OPEN="a",ao.CLOSE="b",ao.ERROR="c",ao.MESSAGE="d",ot.prototype.listen=ot.prototype.J,Uo=Km,be.prototype.listenOnce=be.prototype.K,be.prototype.getLastError=be.prototype.Ha,be.prototype.getLastErrorCode=be.prototype.ya,be.prototype.getStatus=be.prototype.ca,be.prototype.getResponseJson=be.prototype.La,be.prototype.getResponseText=be.prototype.la,be.prototype.send=be.prototype.ea,be.prototype.setWithCredentials=be.prototype.Fa,gT=be}).apply(typeof Rl<"u"?Rl:typeof self<"u"?self:typeof window<"u"?window:{});const C_="@firebase/firestore",P_="4.9.3";/**
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
 */let ct=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
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
 */let to="12.7.0";/**
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
 */const Vi=new Op("@firebase/firestore");function es(){return Vi.logLevel}function q(t,...e){if(Vi.logLevel<=se.DEBUG){const n=e.map(Hp);Vi.debug(`Firestore (${to}): ${t}`,...n)}}function ar(t,...e){if(Vi.logLevel<=se.ERROR){const n=e.map(Hp);Vi.error(`Firestore (${to}): ${t}`,...n)}}function Us(t,...e){if(Vi.logLevel<=se.WARN){const n=e.map(Hp);Vi.warn(`Firestore (${to}): ${t}`,...n)}}function Hp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function J(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,ET(t,r,n)}function ET(t,e,n){let r=`FIRESTORE (${to}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw ar(r),new Error(r)}function de(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||ET(e,i,r)}function ee(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends _n{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Jn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class TT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class XN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ct.UNAUTHENTICATED))}shutdown(){}}class JN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ZN{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){de(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Jn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Jn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Jn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(de(typeof r.accessToken=="string",31837,{l:r}),new TT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string",2055,{h:e}),new ct(e)}}class eb{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class tb{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new eb(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class N_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nb{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Mt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){de(this.o===void 0,3512);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new N_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(de(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new N_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Wp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=rb(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function ff(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return Xh(i)===Xh(s)?oe(i,s):Xh(i)?1:-1}return oe(t.length,e.length)}const ib=55296,sb=57343;function Xh(t){const e=t.charCodeAt(0);return e>=ib&&e<=sb}function Fs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const b_="__name__";class An{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&J(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return An.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof An?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=An.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return oe(e.length,n.length)}static compareSegments(e,n){const r=An.isNumericId(e),i=An.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?An.extractNumericId(e).compare(An.extractNumericId(n)):ff(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Hr.fromString(e.substring(4,e.length-2))}}class ye extends An{construct(e,n,r){return new ye(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ye(n)}static emptyPath(){return new ye([])}}const ob=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends An{construct(e,n,r){return new nt(e,n,r)}static isValidIdentifier(e){return ob.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===b_}static keyField(){return new nt([b_])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new z(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new z(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new z(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(n)}static emptyPath(){return new nt([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(ye.fromString(e))}static fromName(e){return new G(ye.fromString(e).popFirst(5))}static empty(){return new G(ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ye.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new ye(e.slice()))}}/**
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
 */function IT(t,e,n){if(!n)throw new z(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ab(t,e,n,r){if(e===!0&&r===!0)throw new z(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function D_(t){if(!G.isDocumentKey(t))throw new z(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function L_(t){if(G.isDocumentKey(t))throw new z(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ST(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Tc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J(12329,{type:typeof t})}function Lt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Tc(t);throw new z(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Be(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ha(t,e){if(!ST(t))throw new z(M.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new z(M.INVALID_ARGUMENT,n);return!0}/**
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
 */const O_=-62135596800,V_=1e6;class Ie{static now(){return Ie.fromMillis(Date.now())}static fromDate(e){return Ie.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*V_);return new Ie(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<O_)throw new z(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/V_}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ie._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ha(e,Ie._jsonSchema))return new Ie(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-O_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ie._jsonSchemaVersion="firestore/timestamp/1.0",Ie._jsonSchema={type:Be("string",Ie._jsonSchemaVersion),seconds:Be("number"),nanoseconds:Be("number")};/**
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
 */class Z{static fromTimestamp(e){return new Z(e)}static min(){return new Z(new Ie(0,0))}static max(){return new Z(new Ie(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ia=-1;function lb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(r===1e9?new Ie(n+1,0):new Ie(n,r));return new Qr(i,G.empty(),e)}function ub(t){return new Qr(t.readTime,t.key,Ia)}class Qr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Qr(Z.min(),G.empty(),Ia)}static max(){return new Qr(Z.max(),G.empty(),Ia)}}function cb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class db{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function no(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==hb)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(i=>i?U.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new U((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new U((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function fb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ro(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ic{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ic.ce=-1;/**
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
 */const Kp=-1;function Sc(t){return t==null}function Uu(t){return t===0&&1/t==-1/0}function pb(t){return typeof t=="number"&&Number.isInteger(t)&&!Uu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const AT="";function mb(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=M_(e)),e=gb(t.get(n),e);return M_(e)}function gb(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case AT:n+="";break;default:n+=s}}return n}function M_(t){return t+AT+""}/**
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
 */function U_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function si(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function kT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ne{constructor(e,n){this.comparator=e,this.root=n||tt.EMPTY}insert(e,n){return new Ne(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(e){return new Ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Cl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Cl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Cl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Cl(this.root,e,this.comparator,!0)}}class Cl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??tt.RED,this.left=i??tt.EMPTY,this.right=s??tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new tt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return tt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw J(43730,{key:this.key,value:this.value});if(this.right.isRed())throw J(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw J(27949);return e+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1;tt.EMPTY=new class{constructor(){this.size=0}get key(){throw J(57766)}get value(){throw J(16141)}get color(){throw J(16727)}get left(){throw J(29726)}get right(){throw J(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new tt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ke{constructor(e){this.comparator=e,this.data=new Ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new F_(this.data.getIterator())}getIteratorFrom(e){return new F_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ke(this.comparator);return n.data=e,n}}class F_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.fields=e,e.sort(nt.comparator)}static empty(){return new Ft([])}unionWith(e){let n=new Ke(nt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ft(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Fs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class xT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new xT("Invalid base64 string: "+s):s}}(e);return new st(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new st(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}st.EMPTY_BYTE_STRING=new st("");const yb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yr(t){if(de(!!t,39018),typeof t=="string"){let e=0;const n=yb.exec(t);if(de(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Xr(t){return typeof t=="string"?st.fromBase64String(t):st.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT="server_timestamp",CT="__type__",PT="__previous_value__",NT="__local_write_time__";function Ac(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[CT])==null?void 0:r.stringValue)===RT}function kc(t){const e=t.mapValue.fields[PT];return Ac(e)?kc(e):e}function Sa(t){const e=Yr(t.mapValue.fields[NT].timestampValue);return new Ie(e.seconds,e.nanos)}/**
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
 */class _b{constructor(e,n,r,i,s,o,l,u,c,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d}}const Fu="(default)";class Aa{constructor(e,n){this.projectId=e,this.database=n||Fu}static empty(){return new Aa("","")}get isDefaultDatabase(){return this.database===Fu}isEqual(e){return e instanceof Aa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT="__type__",vb="__max__",Pl={mapValue:{}},DT="__vector__",ju="value";function Jr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ac(t)?4:Eb(t)?9007199254740991:wb(t)?10:11:J(28295,{value:t})}function On(t,e){if(t===e)return!0;const n=Jr(t);if(n!==Jr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Sa(t).isEqual(Sa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Yr(i.timestampValue),l=Yr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Xr(i.bytesValue).isEqual(Xr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ve(i.geoPointValue.latitude)===Ve(s.geoPointValue.latitude)&&Ve(i.geoPointValue.longitude)===Ve(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ve(i.integerValue)===Ve(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ve(i.doubleValue),l=Ve(s.doubleValue);return o===l?Uu(o)===Uu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Fs(t.arrayValue.values||[],e.arrayValue.values||[],On);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(U_(o)!==U_(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!On(o[u],l[u])))return!1;return!0}(t,e);default:return J(52216,{left:t})}}function ka(t,e){return(t.values||[]).find(n=>On(n,e))!==void 0}function js(t,e){if(t===e)return 0;const n=Jr(t),r=Jr(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ve(s.integerValue||s.doubleValue),u=Ve(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return j_(t.timestampValue,e.timestampValue);case 4:return j_(Sa(t),Sa(e));case 5:return ff(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Xr(s),u=Xr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=oe(l[c],u[c]);if(d!==0)return d}return oe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=oe(Ve(s.latitude),Ve(o.latitude));return l!==0?l:oe(Ve(s.longitude),Ve(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return B_(t.arrayValue,e.arrayValue);case 10:return function(s,o){var m,y,A,R;const l=s.fields||{},u=o.fields||{},c=(m=l[ju])==null?void 0:m.arrayValue,d=(y=u[ju])==null?void 0:y.arrayValue,p=oe(((A=c==null?void 0:c.values)==null?void 0:A.length)||0,((R=d==null?void 0:d.values)==null?void 0:R.length)||0);return p!==0?p:B_(c,d)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Pl.mapValue&&o===Pl.mapValue)return 0;if(s===Pl.mapValue)return 1;if(o===Pl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=ff(u[p],d[p]);if(m!==0)return m;const y=js(l[u[p]],c[d[p]]);if(y!==0)return y}return oe(u.length,d.length)}(t.mapValue,e.mapValue);default:throw J(23264,{he:n})}}function j_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=Yr(t),r=Yr(e),i=oe(n.seconds,r.seconds);return i!==0?i:oe(n.nanos,r.nanos)}function B_(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=js(n[i],r[i]);if(s)return s}return oe(n.length,r.length)}function Bs(t){return pf(t)}function pf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Yr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Xr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=pf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${pf(n.fields[o])}`;return i+"}"}(t.mapValue):J(61005,{value:t})}function Zl(t){switch(Jr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=kc(t);return e?16+Zl(e):16;case 5:return 2*t.stringValue.length;case 6:return Xr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Zl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return si(r.fields,(s,o)=>{i+=s.length+Zl(o)}),i}(t.mapValue);default:throw J(13486,{value:t})}}function Bu(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function mf(t){return!!t&&"integerValue"in t}function Gp(t){return!!t&&"arrayValue"in t}function z_(t){return!!t&&"nullValue"in t}function $_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function eu(t){return!!t&&"mapValue"in t}function wb(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[bT])==null?void 0:r.stringValue)===DT}function ea(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return si(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ea(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ea(t.arrayValue.values[n]);return e}return{...t}}function Eb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===vb}/**
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
 */class xt{constructor(e){this.value=e}static empty(){return new xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!eu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ea(n)}setAll(e){let n=nt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=ea(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());eu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return On(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];eu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){si(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new xt(ea(this.value))}}function LT(t){const e=[];return si(t.fields,(n,r)=>{const i=new nt([n]);if(eu(r)){const s=LT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ft(e)}/**
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
 */class dt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new dt(e,0,Z.min(),Z.min(),Z.min(),xt.empty(),0)}static newFoundDocument(e,n,r,i){return new dt(e,1,n,Z.min(),r,i,0)}static newNoDocument(e,n){return new dt(e,2,n,Z.min(),Z.min(),xt.empty(),0)}static newUnknownDocument(e,n){return new dt(e,3,n,Z.min(),Z.min(),xt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class zs{constructor(e,n){this.position=e,this.inclusive=n}}function q_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=js(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function H_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!On(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class xa{constructor(e,n="asc"){this.field=e,this.dir=n}}function Tb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class OT{}class je extends OT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Sb(e,n,r):n==="array-contains"?new xb(e,r):n==="in"?new Rb(e,r):n==="not-in"?new Cb(e,r):n==="array-contains-any"?new Pb(e,r):new je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Ab(e,r):new kb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(js(n,this.value)):n!==null&&Jr(this.value)===Jr(n)&&this.matchesComparison(js(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class gn extends OT{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new gn(e,n)}matches(e){return VT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function VT(t){return t.op==="and"}function MT(t){return Ib(t)&&VT(t)}function Ib(t){for(const e of t.filters)if(e instanceof gn)return!1;return!0}function gf(t){if(t instanceof je)return t.field.canonicalString()+t.op.toString()+Bs(t.value);if(MT(t))return t.filters.map(e=>gf(e)).join(",");{const e=t.filters.map(n=>gf(n)).join(",");return`${t.op}(${e})`}}function UT(t,e){return t instanceof je?function(r,i){return i instanceof je&&r.op===i.op&&r.field.isEqual(i.field)&&On(r.value,i.value)}(t,e):t instanceof gn?function(r,i){return i instanceof gn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&UT(o,i.filters[l]),!0):!1}(t,e):void J(19439)}function FT(t){return t instanceof je?function(n){return`${n.field.canonicalString()} ${n.op} ${Bs(n.value)}`}(t):t instanceof gn?function(n){return n.op.toString()+" {"+n.getFilters().map(FT).join(" ,")+"}"}(t):"Filter"}class Sb extends je{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class Ab extends je{constructor(e,n){super(e,"in",n),this.keys=jT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class kb extends je{constructor(e,n){super(e,"not-in",n),this.keys=jT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function jT(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class xb extends je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Gp(n)&&ka(n.arrayValue,this.value)}}class Rb extends je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ka(this.value.arrayValue,n)}}class Cb extends je{constructor(e,n){super(e,"not-in",n)}matches(e){if(ka(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ka(this.value.arrayValue,n)}}class Pb extends je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Gp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ka(this.value.arrayValue,r))}}/**
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
 */class Nb{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function W_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Nb(t,e,n,r,i,s,o)}function Qp(t){const e=ee(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>gf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Sc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Bs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Bs(r)).join(",")),e.Te=n}return e.Te}function Yp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Tb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!UT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!H_(t.startAt,e.startAt)&&H_(t.endAt,e.endAt)}function yf(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class oi{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function bb(t,e,n,r,i,s,o,l){return new oi(t,e,n,r,i,s,o,l)}function xc(t){return new oi(t)}function K_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Xp(t){return t.collectionGroup!==null}function xs(t){const e=ee(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ke(nt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new xa(s,r))}),n.has(nt.keyField().canonicalString())||e.Ie.push(new xa(nt.keyField(),r))}return e.Ie}function Nn(t){const e=ee(t);return e.Ee||(e.Ee=Db(e,xs(t))),e.Ee}function Db(t,e){if(t.limitType==="F")return W_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new xa(i.field,s)});const n=t.endAt?new zs(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new zs(t.startAt.position,t.startAt.inclusive):null;return W_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function _f(t,e){const n=t.filters.concat([e]);return new oi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function vf(t,e,n){return new oi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Rc(t,e){return Yp(Nn(t),Nn(e))&&t.limitType===e.limitType}function BT(t){return`${Qp(Nn(t))}|lt:${t.limitType}`}function ts(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>FT(i)).join(", ")}]`),Sc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Bs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Bs(i)).join(",")),`Target(${r})`}(Nn(t))}; limitType=${t.limitType})`}function Cc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of xs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=q_(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,xs(r),i)||r.endAt&&!function(o,l,u){const c=q_(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,xs(r),i))}(t,e)}function Lb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function zT(t){return(e,n)=>{let r=!1;for(const i of xs(t)){const s=Ob(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Ob(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?js(u,c):J(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J(19790,{direction:t.dir})}}/**
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
 */class Wi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){si(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return kT(this.inner)}size(){return this.innerSize}}/**
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
 */const Vb=new Ne(G.comparator);function lr(){return Vb}const $T=new Ne(G.comparator);function Fo(...t){let e=$T;for(const n of t)e=e.insert(n.key,n);return e}function qT(t){let e=$T;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ti(){return ta()}function HT(){return ta()}function ta(){return new Wi(t=>t.toString(),(t,e)=>t.isEqual(e))}const Mb=new Ne(G.comparator),Ub=new Ke(G.comparator);function ae(...t){let e=Ub;for(const n of t)e=e.add(n);return e}const Fb=new Ke(oe);function jb(){return Fb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Uu(e)?"-0":e}}function WT(t){return{integerValue:""+t}}function KT(t,e){return pb(e)?WT(e):Jp(t,e)}/**
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
 */class Pc{constructor(){this._=void 0}}function Bb(t,e,n){return t instanceof Ra?function(i,s){const o={fields:{[CT]:{stringValue:RT},[NT]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ac(s)&&(s=kc(s)),s&&(o.fields[PT]=s),{mapValue:o}}(n,e):t instanceof $s?QT(t,e):t instanceof qs?YT(t,e):function(i,s){const o=GT(i,s),l=G_(o)+G_(i.Ae);return mf(o)&&mf(i.Ae)?WT(l):Jp(i.serializer,l)}(t,e)}function zb(t,e,n){return t instanceof $s?QT(t,e):t instanceof qs?YT(t,e):n}function GT(t,e){return t instanceof Ca?function(r){return mf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ra extends Pc{}class $s extends Pc{constructor(e){super(),this.elements=e}}function QT(t,e){const n=XT(e);for(const r of t.elements)n.some(i=>On(i,r))||n.push(r);return{arrayValue:{values:n}}}class qs extends Pc{constructor(e){super(),this.elements=e}}function YT(t,e){let n=XT(e);for(const r of t.elements)n=n.filter(i=>!On(i,r));return{arrayValue:{values:n}}}class Ca extends Pc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function G_(t){return Ve(t.integerValue||t.doubleValue)}function XT(t){return Gp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Nc{constructor(e,n){this.field=e,this.transform=n}}function $b(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof $s&&i instanceof $s||r instanceof qs&&i instanceof qs?Fs(r.elements,i.elements,On):r instanceof Ca&&i instanceof Ca?On(r.Ae,i.Ae):r instanceof Ra&&i instanceof Ra}(t.transform,e.transform)}class qb{constructor(e,n){this.version=e,this.transformResults=n}}class Xt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Xt}static exists(e){return new Xt(void 0,e)}static updateTime(e){return new Xt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class bc{}function JT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Zp(t.key,Xt.none()):new Wa(t.key,t.data,Xt.none());{const n=t.data,r=xt.empty();let i=new Ke(nt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ai(t.key,r,new Ft(i.toArray()),Xt.none())}}function Hb(t,e,n){t instanceof Wa?function(i,s,o){const l=i.value.clone(),u=Y_(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ai?function(i,s,o){if(!tu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Y_(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(ZT(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function na(t,e,n,r){return t instanceof Wa?function(s,o,l,u){if(!tu(s.precondition,o))return l;const c=s.value.clone(),d=X_(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ai?function(s,o,l,u){if(!tu(s.precondition,o))return l;const c=X_(s.fieldTransforms,u,o),d=o.data;return d.setAll(ZT(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return tu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Wb(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=GT(r.transform,i||null);s!=null&&(n===null&&(n=xt.empty()),n.set(r.field,s))}return n||null}function Q_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Fs(r,i,(s,o)=>$b(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Wa extends bc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ai extends bc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ZT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Y_(t,e,n){const r=new Map;de(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,zb(o,l,n[i]))}return r}function X_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Bb(s,o,e))}return r}class Zp extends bc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Kb extends bc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Gb{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Hb(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=na(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=na(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=HT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=JT(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ae())}isEqual(e){return this.batchId===e.batchId&&Fs(this.mutations,e.mutations,(n,r)=>Q_(n,r))&&Fs(this.baseMutations,e.baseMutations,(n,r)=>Q_(n,r))}}class em{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){de(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return Mb}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new em(e,n,r,i)}}/**
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
 */class Qb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Yb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ue,le;function Xb(t){switch(t){case M.OK:return J(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return J(15467,{code:t})}}function eI(t){if(t===void 0)return ar("GRPC error has no .code"),M.UNKNOWN;switch(t){case Ue.OK:return M.OK;case Ue.CANCELLED:return M.CANCELLED;case Ue.UNKNOWN:return M.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return M.INTERNAL;case Ue.UNAVAILABLE:return M.UNAVAILABLE;case Ue.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Ue.NOT_FOUND:return M.NOT_FOUND;case Ue.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Ue.ABORTED:return M.ABORTED;case Ue.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Ue.DATA_LOSS:return M.DATA_LOSS;default:return J(39323,{code:t})}}(le=Ue||(Ue={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Jb(){return new TextEncoder}/**
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
 */const Zb=new Hr([4294967295,4294967295],0);function J_(t){const e=Jb().encode(t),n=new mT;return n.update(e),new Uint8Array(n.digest())}function Z_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Hr([n,r],0),new Hr([i,s],0)]}class tm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new jo(`Invalid padding: ${n}`);if(r<0)throw new jo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new jo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new jo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Hr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Hr.fromNumber(r)));return i.compare(Zb)===1&&(i=new Hr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=J_(e),[r,i]=Z_(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new tm(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=J_(e),[r,i]=Z_(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class jo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Dc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ka.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Dc(Z.min(),i,new Ne(oe),lr(),ae())}}class Ka{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ka(r,n,ae(),ae(),ae())}}/**
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
 */class nu{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class tI{constructor(e,n){this.targetId=e,this.Ce=n}}class nI{constructor(e,n,r=st.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class ev{constructor(){this.ve=0,this.Fe=tv(),this.Me=st.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ae(),n=ae(),r=ae();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:J(38017,{changeType:s})}}),new Ka(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=tv()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,de(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class e2{constructor(e){this.Ge=e,this.ze=new Map,this.je=lr(),this.Je=Nl(),this.He=Nl(),this.Ye=new Ne(oe)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:J(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(yf(s))if(r===0){const o=new G(s.path);this.et(n,o,dt.newNoDocument(o,Z.min()))}else de(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Xr(r).toUint8Array()}catch(u){if(u instanceof xT)return Us("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new tm(o,i,s)}catch(u){return Us(u instanceof jo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&yf(l.target)){const u=new G(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,dt.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=ae();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Dc(e,n,this.Ye,this.je,r);return this.je=lr(),this.Je=Nl(),this.He=Nl(),this.Ye=new Ne(oe),i}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new ev,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Ke(oe),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Ke(oe),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new ev),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Nl(){return new Ne(G.comparator)}function tv(){return new Ne(G.comparator)}const t2={asc:"ASCENDING",desc:"DESCENDING"},n2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},r2={and:"AND",or:"OR"};class i2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function wf(t,e){return t.useProto3Json||Sc(e)?e:{value:e}}function zu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function s2(t,e){return zu(t,e.toTimestamp())}function bn(t){return de(!!t,49232),Z.fromTimestamp(function(n){const r=Yr(n);return new Ie(r.seconds,r.nanos)}(t))}function nm(t,e){return Ef(t,e).canonicalString()}function Ef(t,e){const n=function(i){return new ye(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function iI(t){const e=ye.fromString(t);return de(uI(e),10190,{key:e.toString()}),e}function Tf(t,e){return nm(t.databaseId,e.path)}function Jh(t,e){const n=iI(e);if(n.get(1)!==t.databaseId.projectId)throw new z(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(oI(n))}function sI(t,e){return nm(t.databaseId,e)}function o2(t){const e=iI(t);return e.length===4?ye.emptyPath():oI(e)}function If(t){return new ye(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function oI(t){return de(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function nv(t,e,n){return{name:Tf(t,e),fields:n.value.mapValue.fields}}function a2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:J(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(de(d===void 0||typeof d=="string",58123),st.fromBase64String(d||"")):(de(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),st.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?M.UNKNOWN:eI(c.code);return new z(d,c.message||"")}(o);n=new nI(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Jh(t,r.document.name),s=bn(r.document.updateTime),o=r.document.createTime?bn(r.document.createTime):Z.min(),l=new xt({mapValue:{fields:r.document.fields}}),u=dt.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new nu(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Jh(t,r.document),s=r.readTime?bn(r.readTime):Z.min(),o=dt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new nu([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Jh(t,r.document),s=r.removedTargetIds||[];n=new nu([],s,i,null)}else{if(!("filter"in e))return J(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Yb(i,s),l=r.targetId;n=new tI(l,o)}}return n}function l2(t,e){let n;if(e instanceof Wa)n={update:nv(t,e.key,e.value)};else if(e instanceof Zp)n={delete:Tf(t,e.key)};else if(e instanceof ai)n={update:nv(t,e.key,e.data),updateMask:y2(e.fieldMask)};else{if(!(e instanceof Kb))return J(16599,{Vt:e.type});n={verify:Tf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Ra)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof $s)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof qs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ca)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw J(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:s2(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:J(27497)}(t,e.precondition)),n}function u2(t,e){return t&&t.length>0?(de(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?bn(i.updateTime):bn(s);return o.isEqual(Z.min())&&(o=bn(s)),new qb(o,i.transformResults||[])}(n,e))):[]}function c2(t,e){return{documents:[sI(t,e.path)]}}function h2(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=sI(t,i);const s=function(c){if(c.length!==0)return lI(gn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:ns(m.field),direction:p2(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=wf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function d2(t){let e=o2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){de(r===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=aI(p);return m instanceof gn&&MT(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(A){return new xa(rs(A.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Sc(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,y=p.values||[];return new zs(y,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,y=p.values||[];return new zs(y,m)}(n.endAt)),bb(e,i,o,s,l,"F",u,c)}function f2(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function aI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=rs(n.unaryFilter.field);return je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=rs(n.unaryFilter.field);return je.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=rs(n.unaryFilter.field);return je.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=rs(n.unaryFilter.field);return je.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return J(61313);default:return J(60726)}}(t):t.fieldFilter!==void 0?function(n){return je.create(rs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return J(58110);default:return J(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return gn.create(n.compositeFilter.filters.map(r=>aI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return J(1026)}}(n.compositeFilter.op))}(t):J(30097,{filter:t})}function p2(t){return t2[t]}function m2(t){return n2[t]}function g2(t){return r2[t]}function ns(t){return{fieldPath:t.canonicalString()}}function rs(t){return nt.fromServerFormat(t.fieldPath)}function lI(t){return t instanceof je?function(n){if(n.op==="=="){if($_(n.value))return{unaryFilter:{field:ns(n.field),op:"IS_NAN"}};if(z_(n.value))return{unaryFilter:{field:ns(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if($_(n.value))return{unaryFilter:{field:ns(n.field),op:"IS_NOT_NAN"}};if(z_(n.value))return{unaryFilter:{field:ns(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ns(n.field),op:m2(n.op),value:n.value}}}(t):t instanceof gn?function(n){const r=n.getFilters().map(i=>lI(i));return r.length===1?r[0]:{compositeFilter:{op:g2(n.op),filters:r}}}(t):J(54877,{filter:t})}function y2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function uI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Lr{constructor(e,n,r,i,s=Z.min(),o=Z.min(),l=st.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class _2{constructor(e){this.yt=e}}function v2(t){const e=d2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?vf(e,e.limit,"L"):e}/**
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
 */class w2{constructor(){this.Cn=new E2}addToCollectionParentIndex(e,n){return this.Cn.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(Qr.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(Qr.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class E2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ke(ye.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ke(ye.comparator)).toArray()}}/**
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
 */const rv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},cI=41943040;class At{static withCacheSize(e){return new At(e,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */At.DEFAULT_COLLECTION_PERCENTILE=10,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,At.DEFAULT=new At(cI,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),At.DISABLED=new At(-1,0,0);/**
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
 */class Hs{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Hs(0)}static cr(){return new Hs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv="LruGarbageCollector",T2=1048576;function sv([t,e],[n,r]){const i=oe(t,n);return i===0?oe(e,r):i}class I2{constructor(e){this.Ir=e,this.buffer=new Ke(sv),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();sv(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class S2{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){q(iv,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ro(n)?q(iv,"Ignoring IndexedDB error during garbage collection: ",n):await no(n)}await this.Vr(3e5)})}}class A2{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return U.resolve(Ic.ce);const r=new I2(n);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),U.resolve(rv)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),rv):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,i,s,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),es()<=se.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),U.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function k2(t,e){return new A2(t,e)}/**
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
 */class x2{constructor(){this.changes=new Wi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class R2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class C2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&na(r.mutation,i,Ft.empty(),Ie.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ae()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ae()){const i=Ti();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Fo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ti();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ae()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=lr();const o=ta(),l=function(){return ta()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof ai)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),na(d.mutation,c,d.mutation.getFieldMask(),Ie.now())):o.set(c.key,Ft.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>l.set(c,new R2(d,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=ta();let i=new Ne((o,l)=>o-l),s=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Ft.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||ae()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=HT();d.forEach(m=>{if(!s.has(m)){const y=JT(n.get(m),r.get(m));y!==null&&p.set(m,y),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Xp(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):U.resolve(Ti());let l=Ia,u=s;return o.next(c=>U.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?U.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ae())).next(d=>({batchId:l,changes:qT(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=Fo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Fo();return this.indexManager.getCollectionParents(e,s).next(l=>U.forEach(l,u=>{const c=function(p,m){return new oi(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,dt.newInvalidDocument(d)))});let l=Fo();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&na(d.mutation,c,Ft.empty(),Ie.now()),Cc(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return U.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:bn(i.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(i){return{name:i.name,query:v2(i.bundledQuery),readTime:bn(i.readTime)}}(n)),U.resolve()}}/**
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
 */class N2{constructor(){this.overlays=new Ne(G.comparator),this.qr=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ti();return U.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const i=Ti(),s=n.length+1,o=new G(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return U.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ne((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Ti(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=Ti(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return U.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Qb(n,r));let s=this.qr.get(n);s===void 0&&(s=ae(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
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
 */class b2{constructor(){this.sessionToken=st.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
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
 */class rm{constructor(){this.Qr=new Ke(Xe.$r),this.Ur=new Ke(Xe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Xe(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new Xe(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new G(new ye([])),r=new Xe(n,e),i=new Xe(n,e+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new G(new ye([])),r=new Xe(n,e),i=new Xe(n,e+1);let s=ae();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Xe(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return G.comparator(e.key,n.key)||oe(e.Yr,n.Yr)}static Kr(e,n){return oe(e.Yr,n.Yr)||G.comparator(e.key,n.key)}}/**
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
 */class D2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Ke(Xe.$r)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Gb(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new Xe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return U.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?Kp:this.tr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Xe(n,0),i=new Xe(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const l=this.Xr(o.Yr);s.push(l)}),U.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ke(oe);return n.forEach(i=>{const s=new Xe(i,0),o=new Xe(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],l=>{r=r.add(l.Yr)})}),U.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new Xe(new G(s),0);let l=new Ke(oe);return this.Zr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Yr)),!0)},o),U.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){de(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return U.forEach(n.mutations,i=>{const s=new Xe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new Xe(n,0),i=this.Zr.firstAfterOrEqual(r);return U.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class L2{constructor(e){this.ri=e,this.docs=function(){return new Ne(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():dt.newInvalidDocument(n))}getEntries(e,n){let r=lr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():dt.newInvalidDocument(i))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=lr();const o=n.path,l=new G(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||cb(ub(d),r)<=0||(i.has(d.key)||Cc(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return U.resolve(s)}getAllFromCollectionGroup(e,n,r,i){J(9500)}ii(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new O2(this)}getSize(e){return U.resolve(this.size)}}class O2 extends x2{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class V2{constructor(e){this.persistence=e,this.si=new Wi(n=>Qp(n),Yp),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.oi=0,this._i=new rm,this.targetCount=0,this.ai=Hs.ur()}forEachTarget(e,n){return this.si.forEach((r,i)=>n(i)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),U.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Hs(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Pr(n),U.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),U.waitFor(s).next(()=>i)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),U.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this._i.containsKey(n))}}/**
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
 */class hI{constructor(e,n){this.ui={},this.overlays={},this.ci=new Ic(0),this.li=!1,this.li=!0,this.hi=new b2,this.referenceDelegate=e(this),this.Pi=new V2(this),this.indexManager=new w2,this.remoteDocumentCache=function(i){return new L2(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new _2(n),this.Ii=new P2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new N2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new D2(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new M2(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return U.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class M2 extends db{constructor(e){super(),this.currentSequenceNumber=e}}class im{constructor(e){this.persistence=e,this.Ri=new rm,this.Vi=null}static mi(e){return new im(e)}get fi(){if(this.Vi)return this.Vi;throw J(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),U.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.fi,r=>{const i=G.fromPath(r);return this.gi(e,i).next(s=>{s||n.removeEntry(i,Z.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return U.or([()=>U.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class $u{constructor(e,n){this.persistence=e,this.pi=new Wi(r=>mb(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=k2(this,n)}static mi(e,n){return new $u(e,n)}Ei(){}di(e){return U.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return U.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?U.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,s.removeEntry(o,Z.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),U.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),U.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),U.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),U.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Zl(e.data.value)),n}br(e,n,r){return U.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return U.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class sm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=i}static As(e,n){let r=ae(),i=ae();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new sm(e,n.fromCache,r,i)}}/**
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
 */class U2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class F2{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return gR()?8:fb(mt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ys(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new U2;return this.Ss(e,n,o).next(l=>{if(s.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>s.result)}bs(e,n,r,i){return r.documentReadCount<this.fs?(es()<=se.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",ts(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),U.resolve()):(es()<=se.DEBUG&&q("QueryEngine","Query:",ts(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(es()<=se.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",ts(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Nn(n))):U.resolve())}ys(e,n){if(K_(n))return U.resolve(null);let r=Nn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=vf(n,null,"F"),r=Nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ae(...s);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ds(n,l);return this.Cs(n,c,o,u.readTime)?this.ys(e,vf(n,null,"F")):this.vs(e,c,n,u)}))})))}ws(e,n,r,i){return K_(n)||i.isEqual(Z.min())?U.resolve(null):this.ps.getDocuments(e,r).next(s=>{const o=this.Ds(n,s);return this.Cs(n,o,r,i)?U.resolve(null):(es()<=se.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ts(n)),this.vs(e,o,n,lb(i,Ia)).next(l=>l))})}Ds(e,n){let r=new Ke(zT(e));return n.forEach((i,s)=>{Cc(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return es()<=se.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",ts(n)),this.ps.getDocumentsMatchingQuery(e,n,Qr.min(),r)}vs(e,n,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om="LocalStore",j2=3e8;class B2{constructor(e,n,r,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new Ne(oe),this.xs=new Wi(s=>Qp(s),Yp),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new C2(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function z2(t,e,n,r){return new B2(t,e,n,r)}async function dI(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ae();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function $2(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let y=U.resolve();return m.forEach(A=>{y=y.next(()=>d.getEntry(u,A)).next(R=>{const P=c.docVersions.get(A);de(P!==null,48541),R.version.compareTo(P)<0&&(p.applyToRemoteDocument(R,c),R.isValidDocument()&&(R.setReadTime(c.commitVersion),d.addEntry(R)))})}),y.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ae();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function fI(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function q2(t,e){const n=ee(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.Pi.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(s,d.addedDocuments,p)));let y=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(st.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,r)),i=i.insert(p,y),function(R,P,_){return R.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=j2?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(m,y,d)&&l.push(n.Pi.updateTargetData(s,y))});let u=lr(),c=ae();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(H2(s,o,e.documentUpdates).next(d=>{u=d.ks,c=d.qs})),!r.isEqual(Z.min())){const d=n.Pi.getLastRemoteSnapshotVersion(s).next(p=>n.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return U.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Ms=i,s))}function H2(t,e,n){let r=ae(),i=ae();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=lr();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Z.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q(om,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{ks:o,qs:i}})}function W2(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Kp),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function K2(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Pi.getTargetData(r,e).next(s=>s?(i=s,U.resolve(i)):n.Pi.allocateTargetId(r).next(o=>(i=new Lr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function Sf(t,e,n){const r=ee(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ro(o))throw o;q(om,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function ov(t,e,n){const r=ee(t);let i=Z.min(),s=ae();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=ee(u),m=p.xs.get(d);return m!==void 0?U.resolve(p.Ms.get(m)):p.Pi.getTargetData(c,d)}(r,o,Nn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?i:Z.min(),n?s:ae())).next(l=>(G2(r,Lb(e),l),{documents:l,Qs:s})))}function G2(t,e,n){let r=t.Os.get(e)||Z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Os.set(e,r)}class av{constructor(){this.activeTargetIds=jb()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Q2{constructor(){this.Mo=new av,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new av,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Y2{Oo(e){}shutdown(){}}/**
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
 */const lv="ConnectivityMonitor";class uv{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){q(lv,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){q(lv,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let bl=null;function Af(){return bl===null?bl=function(){return 268435456+Math.round(2147483648*Math.random())}():bl++,"0x"+bl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh="RestConnection",X2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class J2{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===Fu?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,n,r,i,s){const o=Af(),l=this.zo(e,n.toUriEncodedString());q(Zh,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,i,s);const{host:c}=new URL(l),d=zi(c);return this.Jo(e,l,u,r,d).then(p=>(q(Zh,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Us(Zh,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Ho(e,n,r,i,s,o){return this.Go(e,n,r,i,s)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+to}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,n){const r=X2[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class Z2{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const ut="WebChannelConnection";class eD extends J2{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const o=Af();return new Promise((l,u)=>{const c=new gT;c.setWithCredentials(!0),c.listenOnce(yT.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Jl.NO_ERROR:const p=c.getResponseJson();q(ut,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Jl.TIMEOUT:q(ut,`RPC '${e}' ${o} timed out`),u(new z(M.DEADLINE_EXCEEDED,"Request time out"));break;case Jl.HTTP_ERROR:const m=c.getStatus();if(q(ut,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let y=c.getResponseJson();Array.isArray(y)&&(y=y[0]);const A=y==null?void 0:y.error;if(A&&A.status&&A.message){const R=function(_){const T=_.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(T)>=0?T:M.UNKNOWN}(A.status);u(new z(R,A.message))}else u(new z(M.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new z(M.UNAVAILABLE,"Connection failed."));break;default:J(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{q(ut,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);q(ut,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",d,r,15)})}T_(e,n,r){const i=Af(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=wT(),l=vT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");q(ut,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);this.I_(p);let m=!1,y=!1;const A=new Z2({Yo:P=>{y?q(ut,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(m||(q(ut,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),q(ut,`RPC '${e}' stream ${i} sending:`,P),p.send(P))},Zo:()=>p.close()}),R=(P,_,T)=>{P.listen(_,I=>{try{T(I)}catch(L){setTimeout(()=>{throw L},0)}})};return R(p,Uo.EventType.OPEN,()=>{y||(q(ut,`RPC '${e}' stream ${i} transport opened.`),A.o_())}),R(p,Uo.EventType.CLOSE,()=>{y||(y=!0,q(ut,`RPC '${e}' stream ${i} transport closed`),A.a_(),this.E_(p))}),R(p,Uo.EventType.ERROR,P=>{y||(y=!0,Us(ut,`RPC '${e}' stream ${i} transport errored. Name:`,P.name,"Message:",P.message),A.a_(new z(M.UNAVAILABLE,"The operation could not be completed")))}),R(p,Uo.EventType.MESSAGE,P=>{var _;if(!y){const T=P.data[0];de(!!T,16349);const I=T,L=(I==null?void 0:I.error)||((_=I[0])==null?void 0:_.error);if(L){q(ut,`RPC '${e}' stream ${i} received error:`,L);const V=L.status;let F=function(S){const x=Ue[S];if(x!==void 0)return eI(x)}(V),E=L.message;F===void 0&&(F=M.INTERNAL,E="Unknown error status: "+V+" with message "+L.message),y=!0,A.a_(new z(F,E)),p.close()}else q(ut,`RPC '${e}' stream ${i} received:`,T),A.u_(T)}}),R(l,_T.STAT_EVENT,P=>{P.stat===df.PROXY?q(ut,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===df.NOPROXY&&q(ut,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.__()},0),A}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function ed(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(t){return new i2(t,!0)}/**
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
 */class pI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const cv="PersistentStream";class mI{constructor(e,n,r,i,s,o,l,u){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new pI(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(ar(n.toString()),ar("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new z(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return q(cv,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(q(cv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tD extends mI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=a2(this.serializer,e),r=function(s){if(!("targetChange"in s))return Z.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?bn(o.readTime):Z.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=If(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=yf(u)?{documents:c2(s,u)}:{query:h2(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=rI(s,o.resumeToken);const c=wf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Z.min())>0){l.readTime=zu(s,o.snapshotVersion.toTimestamp());const c=wf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=f2(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=If(this.serializer),n.removeTarget=e,this.q_(n)}}class nD extends mI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return de(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,de(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){de(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=u2(e.writeResults,e.commitTime),r=bn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=If(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>l2(this.serializer,r))};this.q_(n)}}/**
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
 */class rD{}class iD extends rD{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new z(M.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(e,Ef(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(M.UNKNOWN,s.toString())})}Ho(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,Ef(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(M.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class sD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ar(n),this.aa=!1):q("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Mi="RemoteStore";class oD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Ki(this)&&(q(Mi,"Restarting streams for network reachability change."),await async function(u){const c=ee(u);c.Ea.add(4),await Ga(c),c.Ra.set("Unknown"),c.Ea.delete(4),await Oc(c)}(this))})}),this.Ra=new sD(r,i)}}async function Oc(t){if(Ki(t))for(const e of t.da)await e(!0)}async function Ga(t){for(const e of t.da)await e(!1)}function gI(t,e){const n=ee(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),cm(n)?um(n):io(n).O_()&&lm(n,e))}function am(t,e){const n=ee(t),r=io(n);n.Ia.delete(e),r.O_()&&yI(n,e),n.Ia.size===0&&(r.O_()?r.L_():Ki(n)&&n.Ra.set("Unknown"))}function lm(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}io(t).Y_(e)}function yI(t,e){t.Va.Ue(e),io(t).Z_(e)}function um(t){t.Va=new e2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),io(t).start(),t.Ra.ua()}function cm(t){return Ki(t)&&!io(t).x_()&&t.Ia.size>0}function Ki(t){return ee(t).Ea.size===0}function _I(t){t.Va=void 0}async function aD(t){t.Ra.set("Online")}async function lD(t){t.Ia.forEach((e,n)=>{lm(t,e)})}async function uD(t,e){_I(t),cm(t)?(t.Ra.ha(e),um(t)):t.Ra.set("Unknown")}async function cD(t,e,n){if(t.Ra.set("Online"),e instanceof nI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))}(t,e)}catch(r){q(Mi,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await qu(t,r)}else if(e instanceof nu?t.Va.Ze(e):e instanceof tI?t.Va.st(e):t.Va.tt(e),!n.isEqual(Z.min()))try{const r=await fI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Va.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.Ia.get(c);d&&s.Ia.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.Ia.get(u);if(!d)return;s.Ia.set(u,d.withResumeToken(st.EMPTY_BYTE_STRING,d.snapshotVersion)),yI(s,u);const p=new Lr(d.target,u,c,d.sequenceNumber);lm(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q(Mi,"Failed to raise snapshot:",r),await qu(t,r)}}async function qu(t,e,n){if(!ro(e))throw e;t.Ea.add(1),await Ga(t),t.Ra.set("Offline"),n||(n=()=>fI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q(Mi,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Oc(t)})}function vI(t,e){return e().catch(n=>qu(t,n,e))}async function Vc(t){const e=ee(t),n=Zr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Kp;for(;hD(e);)try{const i=await W2(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,dD(e,i)}catch(i){await qu(e,i)}wI(e)&&EI(e)}function hD(t){return Ki(t)&&t.Ta.length<10}function dD(t,e){t.Ta.push(e);const n=Zr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function wI(t){return Ki(t)&&!Zr(t).x_()&&t.Ta.length>0}function EI(t){Zr(t).start()}async function fD(t){Zr(t).ra()}async function pD(t){const e=Zr(t);for(const n of t.Ta)e.ea(n.mutations)}async function mD(t,e,n){const r=t.Ta.shift(),i=em.from(r,e,n);await vI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Vc(t)}async function gD(t,e){e&&Zr(t).X_&&await async function(r,i){if(function(o){return Xb(o)&&o!==M.ABORTED}(i.code)){const s=r.Ta.shift();Zr(r).B_(),await vI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Vc(r)}}(t,e),wI(t)&&EI(t)}async function hv(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),q(Mi,"RemoteStore received new credentials");const r=Ki(n);n.Ea.add(3),await Ga(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Oc(n)}async function yD(t,e){const n=ee(t);e?(n.Ea.delete(2),await Oc(n)):e||(n.Ea.add(2),await Ga(n),n.Ra.set("Unknown"))}function io(t){return t.ma||(t.ma=function(n,r,i){const s=ee(n);return s.sa(),new tD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:aD.bind(null,t),t_:lD.bind(null,t),r_:uD.bind(null,t),H_:cD.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),cm(t)?um(t):t.Ra.set("Unknown")):(await t.ma.stop(),_I(t))})),t.ma}function Zr(t){return t.fa||(t.fa=function(n,r,i){const s=ee(n);return s.sa(),new nD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:fD.bind(null,t),r_:gD.bind(null,t),ta:pD.bind(null,t),na:mD.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await Vc(t)):(await t.fa.stop(),t.Ta.length>0&&(q(Mi,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class hm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Jn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new hm(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dm(t,e){if(ar("AsyncQueue",`${e}: ${t}`),ro(t))return new z(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Rs{static emptySet(e){return new Rs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=Fo(),this.sortedSet=new Ne(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Rs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Rs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class dv{constructor(){this.ga=new Ne(G.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):J(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ws{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ws(e,n,Rs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Rc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class _D{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class vD{constructor(){this.queries=fv(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=ee(n),s=i.queries;i.queries=fv(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new z(M.ABORTED,"Firestore shutting down"))}}function fv(){return new Wi(t=>BT(t),Rc)}async function fm(t,e){const n=ee(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new _D,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=dm(o,`Initialization of query '${ts(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&mm(n)}async function pm(t,e){const n=ee(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function wD(t,e){const n=ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&mm(n)}function ED(t,e,n){const r=ee(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function mm(t){t.Ca.forEach(e=>{e.next()})}var kf,pv;(pv=kf||(kf={})).Ma="default",pv.Cache="cache";class gm{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ws(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ws.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==kf.Cache}}/**
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
 */class TI{constructor(e){this.key=e}}class II{constructor(e){this.key=e}}class TD{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ae(),this.mutatedKeys=ae(),this.eu=zT(e),this.tu=new Rs(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new dv,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),y=Cc(this.query,p)?p:null,A=!!m&&this.mutatedKeys.has(m.key),R=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let P=!1;m&&y?m.data.isEqual(y.data)?A!==R&&(r.track({type:3,doc:y}),P=!0):this.su(m,y)||(r.track({type:2,doc:y}),P=!0,(u&&this.eu(y,u)>0||c&&this.eu(y,c)<0)&&(l=!0)):!m&&y?(r.track({type:0,doc:y}),P=!0):m&&!y&&(r.track({type:1,doc:m}),P=!0,(u||c)&&(l=!0)),P&&(y?(o=o.add(y),s=R?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,Cs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,p)=>function(y,A){const R=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J(20277,{Rt:P})}};return R(y)-R(A)}(d.type,p.type)||this.eu(d.doc,p.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Xa.size===0&&this.current&&!i?1:0,c=u!==this.Za;return this.Za=u,o.length!==0||c?{snapshot:new Ws(this.query,e.tu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new dv,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ae(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new II(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new TI(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=ae();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ws.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ym="SyncEngine";class ID{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class SD{constructor(e){this.key=e,this.hu=!1}}class AD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Wi(l=>BT(l),Rc),this.Iu=new Map,this.Eu=new Set,this.du=new Ne(G.comparator),this.Au=new Map,this.Ru=new rm,this.Vu={},this.mu=new Map,this.fu=Hs.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function kD(t,e,n=!0){const r=CI(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await SI(r,e,n,!0),i}async function xD(t,e){const n=CI(t);await SI(n,e,!0,!1)}async function SI(t,e,n,r){const i=await K2(t.localStore,Nn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await RD(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&gI(t.remoteStore,i),l}async function RD(t,e,n,r,i){t.pu=(p,m,y)=>async function(R,P,_,T){let I=P.view.ru(_);I.Cs&&(I=await ov(R.localStore,P.query,!1).then(({documents:E})=>P.view.ru(E,I)));const L=T&&T.targetChanges.get(P.targetId),V=T&&T.targetMismatches.get(P.targetId)!=null,F=P.view.applyChanges(I,R.isPrimaryClient,L,V);return gv(R,P.targetId,F.au),F.snapshot}(t,p,m,y);const s=await ov(t.localStore,e,!0),o=new TD(e,s.Qs),l=o.ru(s.documents),u=Ka.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);gv(t,n,c.au);const d=new ID(e,n,o);return t.Tu.set(e,d),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function CD(t,e,n){const r=ee(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!Rc(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Sf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&am(r.remoteStore,i.targetId),xf(r,i.targetId)}).catch(no)):(xf(r,i.targetId),await Sf(r.localStore,i.targetId,!0))}async function PD(t,e){const n=ee(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),am(n.remoteStore,r.targetId))}async function ND(t,e,n){const r=UD(t);try{const i=await function(o,l){const u=ee(o),c=Ie.now(),d=l.reduce((y,A)=>y.add(A.key),ae());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",y=>{let A=lr(),R=ae();return u.Ns.getEntries(y,d).next(P=>{A=P,A.forEach((_,T)=>{T.isValidDocument()||(R=R.add(_))})}).next(()=>u.localDocuments.getOverlayedDocuments(y,A)).next(P=>{p=P;const _=[];for(const T of l){const I=Wb(T,p.get(T.key).overlayedDocument);I!=null&&_.push(new ai(T.key,I,LT(I.value.mapValue),Xt.exists(!0)))}return u.mutationQueue.addMutationBatch(y,c,_,l)}).next(P=>{m=P;const _=P.applyToLocalDocumentSet(p,R);return u.documentOverlayCache.saveOverlays(y,P.batchId,_)})}).then(()=>({batchId:m.batchId,changes:qT(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Vu[o.currentUser.toKey()];c||(c=new Ne(oe)),c=c.insert(l,u),o.Vu[o.currentUser.toKey()]=c}(r,i.batchId,n),await Qa(r,i.changes),await Vc(r.remoteStore)}catch(i){const s=dm(i,"Failed to persist write");n.reject(s)}}async function AI(t,e){const n=ee(t);try{const r=await q2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(de(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?de(o.hu,14607):i.removedDocuments.size>0&&(de(o.hu,42227),o.hu=!1))}),await Qa(n,r,e)}catch(r){await no(r)}}function mv(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ee(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.Sa)m.va(l)&&(c=!0)}),c&&mm(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function bD(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Ne(G.comparator);o=o.insert(s,dt.newNoDocument(s,Z.min()));const l=ae().add(s),u=new Dc(Z.min(),new Map,new Ne(oe),o,l);await AI(r,u),r.du=r.du.remove(s),r.Au.delete(e),_m(r)}else await Sf(r.localStore,e,!1).then(()=>xf(r,e,n)).catch(no)}async function DD(t,e){const n=ee(t),r=e.batch.batchId;try{const i=await $2(n.localStore,e);xI(n,r,null),kI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Qa(n,i)}catch(i){await no(i)}}async function LD(t,e,n){const r=ee(t);try{const i=await function(o,l){const u=ee(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(de(p!==null,37113),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);xI(r,e,n),kI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Qa(r,i)}catch(i){await no(i)}}function kI(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function xI(t,e,n){const r=ee(t);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function xf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||RI(t,r)})}function RI(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(am(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),_m(t))}function gv(t,e,n){for(const r of n)r instanceof TI?(t.Ru.addReference(r.key,e),OD(t,r)):r instanceof II?(q(ym,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||RI(t,r.key)):J(19791,{wu:r})}function OD(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(q(ym,"New document in limbo: "+n),t.Eu.add(r),_m(t))}function _m(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new G(ye.fromString(e)),r=t.fu.next();t.Au.set(r,new SD(n)),t.du=t.du.insert(n,r),gI(t.remoteStore,new Lr(Nn(xc(n.path)),r,"TargetPurposeLimboResolution",Ic.ce))}}async function Qa(t,e,n){const r=ee(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=sm.As(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,c){const d=ee(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>U.forEach(c,m=>U.forEach(m.Es,y=>d.persistence.referenceDelegate.addReference(p,m.targetId,y)).next(()=>U.forEach(m.ds,y=>d.persistence.referenceDelegate.removeReference(p,m.targetId,y)))))}catch(p){if(!ro(p))throw p;q(om,"Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const y=d.Ms.get(m),A=y.snapshotVersion,R=y.withLastLimboFreeSnapshotVersion(A);d.Ms=d.Ms.insert(m,R)}}}(r.localStore,s))}async function VD(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){q(ym,"User change. New user:",e.toKey());const r=await dI(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new z(M.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Qa(n,r.Ls)}}function MD(t,e){const n=ee(t),r=n.Au.get(e);if(r&&r.hu)return ae().add(r.key);{let i=ae();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function CI(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=AI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=MD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bD.bind(null,e),e.Pu.H_=wD.bind(null,e.eventManager),e.Pu.yu=ED.bind(null,e.eventManager),e}function UD(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=DD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=LD.bind(null,e),e}class Hu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Lc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return z2(this.persistence,new F2,e.initialUser,this.serializer)}Cu(e){return new hI(im.mi,this.serializer)}Du(e){return new Q2}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Hu.provider={build:()=>new Hu};class FD extends Hu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){de(this.persistence.referenceDelegate instanceof $u,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new S2(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?At.withCacheSize(this.cacheSizeBytes):At.DEFAULT;return new hI(r=>$u.mi(r,n),this.serializer)}}class Rf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>mv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=VD.bind(null,this.syncEngine),await yD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new vD}()}createDatastore(e){const n=Lc(e.databaseInfo.databaseId),r=function(s){return new eD(s)}(e.databaseInfo);return function(s,o,l,u){return new iD(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new oD(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>mv(this.syncEngine,n,0),function(){return uv.v()?new uv:new Y2}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new AD(i,s,o,l,u,c);return d&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ee(i);q(Mi,"RemoteStore shutting down."),s.Ea.add(5),await Ga(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Rf.provider={build:()=>new Rf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class vm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):ar("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const ei="FirestoreClient";class jD{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ct.UNAUTHENTICATED,this.clientId=Wp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q(ei,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q(ei,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Jn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=dm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function td(t,e){t.asyncQueue.verifyOperationInProgress(),q(ei,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await dI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function yv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await BD(t);q(ei,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>hv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>hv(e.remoteStore,i)),t._onlineComponents=e}async function BD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q(ei,"Using user provided OfflineComponentProvider");try{await td(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Us("Error using user provided cache. Falling back to memory cache: "+n),await td(t,new Hu)}}else q(ei,"Using default OfflineComponentProvider"),await td(t,new FD(void 0));return t._offlineComponents}async function PI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q(ei,"Using user provided OnlineComponentProvider"),await yv(t,t._uninitializedComponentsProvider._online)):(q(ei,"Using default OnlineComponentProvider"),await yv(t,new Rf))),t._onlineComponents}function zD(t){return PI(t).then(e=>e.syncEngine)}async function Wu(t){const e=await PI(t),n=e.eventManager;return n.onListen=kD.bind(null,e.syncEngine),n.onUnlisten=CD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=xD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=PD.bind(null,e.syncEngine),n}function $D(t,e,n={}){const r=new Jn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new vm({next:m=>{d.Nu(),o.enqueueAndForget(()=>pm(s,p));const y=m.docs.has(l);!y&&m.fromCache?c.reject(new z(M.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&u&&u.source==="server"?c.reject(new z(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new gm(xc(l.path),d,{includeMetadataChanges:!0,qa:!0});return fm(s,p)}(await Wu(t),t.asyncQueue,e,n,r)),r.promise}function qD(t,e,n={}){const r=new Jn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new vm({next:m=>{d.Nu(),o.enqueueAndForget(()=>pm(s,p)),m.fromCache&&u.source==="server"?c.reject(new z(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new gm(l,d,{includeMetadataChanges:!0,qa:!0});return fm(s,p)}(await Wu(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function NI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI="firestore.googleapis.com",vv=!0;class wv{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new z(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=bI,this.ssl=vv}else this.host=e.host,this.ssl=e.ssl??vv;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=cI;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<T2)throw new z(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ab("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=NI(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Mc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wv(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new XN;switch(r.type){case"firstParty":return new tb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=_v.get(n);r&&(q("ComponentProvider","Removing Datastore"),_v.delete(n),r.terminate())}(this),Promise.resolve()}}function HD(t,e,n,r={}){var c;t=Lt(t,Mc);const i=zi(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(Dp(`https://${l}`),Lp("Firestore",!0)),s.host!==bI&&s.host!==l&&Us("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!ir(u,o)&&(t._setSettings(u),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=ct.MOCK_USER;else{d=k0(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new z(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ct(m)}t._authCredentials=new JN(new TT(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Un(this.firestore,e,this._query)}}class Oe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Oe(this.firestore,e,this._key)}toJSON(){return{type:Oe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ha(n,Oe._jsonSchema))return new Oe(e,r||null,new G(ye.fromString(n.referencePath)))}}Oe._jsonSchemaVersion="firestore/documentReference/1.0",Oe._jsonSchema={type:Be("string",Oe._jsonSchemaVersion),referencePath:Be("string")};class Wr extends Un{constructor(e,n,r){super(e,n,xc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Oe(this.firestore,null,new G(e))}withConverter(e){return new Wr(this.firestore,e,this._path)}}function me(t,e,...n){if(t=Pe(t),IT("collection","path",e),t instanceof Mc){const r=ye.fromString(e,...n);return L_(r),new Wr(t,null,r)}{if(!(t instanceof Oe||t instanceof Wr))throw new z(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ye.fromString(e,...n));return L_(r),new Wr(t.firestore,null,r)}}function he(t,e,...n){if(t=Pe(t),arguments.length===1&&(e=Wp.newId()),IT("doc","path",e),t instanceof Mc){const r=ye.fromString(e,...n);return D_(r),new Oe(t,null,new G(r))}{if(!(t instanceof Oe||t instanceof Wr))throw new z(M.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ye.fromString(e,...n));return D_(r),new Oe(t.firestore,t instanceof Wr?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev="AsyncQueue";class Tv{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new pI(this,"async_queue_retry"),this._c=()=>{const r=ed();r&&q(Ev,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=ed();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=ed();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Jn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!ro(e))throw e;q(Ev,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,ar("INTERNAL UNHANDLED ERROR: ",Iv(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=hm.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&J(47125,{Pc:Iv(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Iv(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */function Sv(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class ur extends Mc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Tv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Tv(e),this._firestoreClient=void 0,await e}}}function WD(t,e){const n=typeof t=="object"?t:_c(),r=typeof t=="string"?t:Fu,i=qi(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=I0("firestore");s&&HD(i,...s)}return i}function Uc(t){if(t._terminated)throw new z(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||KD(t),t._firestoreClient}function KD(t){var r,i,s;const e=t._freezeSettings(),n=function(l,u,c,d){return new _b(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,NI(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new jD(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gt(st.fromBase64String(e))}catch(n){throw new z(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Gt(st.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Gt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ha(e,Gt._jsonSchema))return Gt.fromBase64String(e.bytes)}}Gt._jsonSchemaVersion="firestore/bytes/1.0",Gt._jsonSchema={type:Be("string",Gt._jsonSchemaVersion),bytes:Be("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e){this._methodName=e}}/**
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
 */class Dn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Dn._jsonSchemaVersion}}static fromJSON(e){if(Ha(e,Dn._jsonSchema))return new Dn(e.latitude,e.longitude)}}Dn._jsonSchemaVersion="firestore/geoPoint/1.0",Dn._jsonSchema={type:Be("string",Dn._jsonSchemaVersion),latitude:Be("number"),longitude:Be("number")};/**
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
 */class Ln{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ln._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ha(e,Ln._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Ln(e.vectorValues);throw new z(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ln._jsonSchemaVersion="firestore/vectorValue/1.0",Ln._jsonSchema={type:Be("string",Ln._jsonSchemaVersion),vectorValues:Be("object")};/**
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
 */const GD=/^__.*__$/;class QD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ai(e,this.data,this.fieldMask,n,this.fieldTransforms):new Wa(e,this.data,n,this.fieldTransforms)}}class DI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ai(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function LI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J(40011,{Ac:t})}}class jc{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new jc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ku(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(LI(this.Ac)&&GD.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class YD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Lc(e)}Cc(e,n,r,i=!1){return new jc({Ac:e,methodName:n,Dc:r,path:nt.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ya(t){const e=t._freezeSettings(),n=Lc(t._databaseId);return new YD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function OI(t,e,n,r,i,s={}){const o=t.Cc(s.merge||s.mergeFields?2:0,e,n,i);Sm("Data must be an object, but it was:",o,r);const l=UI(r,o);let u,c;if(s.merge)u=new Ft(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=Cf(e,p,n);if(!o.contains(m))throw new z(M.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);jI(d,m)||d.push(m)}u=new Ft(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new QD(new xt(l),u,c)}class Bc extends Gi{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Bc}}function VI(t,e,n){return new jc({Ac:3,Dc:e.settings.Dc,methodName:t._methodName,fc:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class wm extends Gi{_toFieldTransform(e){return new Nc(e.path,new Ra)}isEqual(e){return e instanceof wm}}class Em extends Gi{constructor(e,n){super(e),this.vc=n}_toFieldTransform(e){const n=VI(this,e,!0),r=this.vc.map(s=>Qi(s,n)),i=new $s(r);return new Nc(e.path,i)}isEqual(e){return e instanceof Em&&ir(this.vc,e.vc)}}class Tm extends Gi{constructor(e,n){super(e),this.vc=n}_toFieldTransform(e){const n=VI(this,e,!0),r=this.vc.map(s=>Qi(s,n)),i=new qs(r);return new Nc(e.path,i)}isEqual(e){return e instanceof Tm&&ir(this.vc,e.vc)}}class Im extends Gi{constructor(e,n){super(e),this.Fc=n}_toFieldTransform(e){const n=new Ca(e.serializer,KT(e.serializer,this.Fc));return new Nc(e.path,n)}isEqual(e){return e instanceof Im&&this.Fc===e.Fc}}function XD(t,e,n,r){const i=t.Cc(1,e,n);Sm("Data must be an object, but it was:",i,r);const s=[],o=xt.empty();si(r,(u,c)=>{const d=Am(e,u,n);c=Pe(c);const p=i.yc(d);if(c instanceof Bc)s.push(d);else{const m=Qi(c,p);m!=null&&(s.push(d),o.set(d,m))}});const l=new Ft(s);return new DI(o,l,i.fieldTransforms)}function JD(t,e,n,r,i,s){const o=t.Cc(1,e,n),l=[Cf(e,r,n)],u=[i];if(s.length%2!=0)throw new z(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Cf(e,s[m])),u.push(s[m+1]);const c=[],d=xt.empty();for(let m=l.length-1;m>=0;--m)if(!jI(c,l[m])){const y=l[m];let A=u[m];A=Pe(A);const R=o.yc(y);if(A instanceof Bc)c.push(y);else{const P=Qi(A,R);P!=null&&(c.push(y),d.set(y,P))}}const p=new Ft(c);return new DI(d,p,o.fieldTransforms)}function MI(t,e,n,r=!1){return Qi(n,t.Cc(r?4:3,e))}function Qi(t,e){if(FI(t=Pe(t)))return Sm("Unsupported field value:",e,t),UI(t,e);if(t instanceof Gi)return function(r,i){if(!LI(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Qi(l,i.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Pe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return KT(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ie.fromDate(r);return{timestampValue:zu(i.serializer,s)}}if(r instanceof Ie){const s=new Ie(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:zu(i.serializer,s)}}if(r instanceof Dn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Gt)return{bytesValue:rI(i.serializer,r._byteString)};if(r instanceof Oe){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:nm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Ln)return function(o,l){return{mapValue:{fields:{[bT]:{stringValue:DT},[ju]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Sc("VectorValues must only contain numeric values.");return Jp(l.serializer,c)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${Tc(r)}`)}(t,e)}function UI(t,e){const n={};return kT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):si(t,(r,i)=>{const s=Qi(i,e.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function FI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ie||t instanceof Dn||t instanceof Gt||t instanceof Oe||t instanceof Gi||t instanceof Ln)}function Sm(t,e,n){if(!FI(n)||!ST(n)){const r=Tc(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function Cf(t,e,n){if((e=Pe(e))instanceof Fc)return e._internalPath;if(typeof e=="string")return Am(t,e);throw Ku("Field path arguments must be of type string or ",t,!1,void 0,n)}const ZD=new RegExp("[~\\*/\\[\\]]");function Am(t,e,n){if(e.search(ZD)>=0)throw Ku(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Fc(...e.split("."))._internalPath}catch{throw Ku(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ku(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new z(M.INVALID_ARGUMENT,l+t+u)}function jI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Oe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new eL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(zc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class eL extends km{data(){return super.data()}}function zc(t,e){return typeof e=="string"?Am(t,e):e instanceof Fc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xm{}class $c extends xm{}function Le(t,e,...n){let r=[];e instanceof xm&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Rm).length,l=s.filter(u=>u instanceof qc).length;if(o>1||o>0&&l>0)throw new z(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class qc extends $c{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new qc(e,n,r)}_apply(e){const n=this._parse(e);return $I(e._query,n),new Un(e.firestore,e.converter,_f(e._query,n))}_parse(e){const n=Ya(e.firestore);return function(s,o,l,u,c,d,p){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new z(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){kv(p,d);const A=[];for(const R of p)A.push(Av(u,s,R));m={arrayValue:{values:A}}}else m=Av(u,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||kv(p,d),m=MI(l,o,p,d==="in"||d==="not-in");return je.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function qe(t,e,n){const r=e,i=zc("where",t);return qc._create(i,r,n)}class Rm extends xm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Rm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:gn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)$I(o,u),o=_f(o,u)}(e._query,n),new Un(e.firestore,e.converter,_f(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Cm extends $c{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Cm(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new z(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new z(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new xa(s,o)}(e._query,this._field,this._direction);return new Un(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new oi(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function ki(t,e="asc"){const n=e,r=zc("orderBy",t);return Cm._create(r,n)}class Pm extends $c{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Pm(e,n,r)}_apply(e){const n=zI(e,this.type,this._docOrFields,this._inclusive);return new Un(e.firestore,e.converter,function(i,s){return new oi(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function tL(...t){return Pm._create("startAt",t,!0)}class Nm extends $c{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Nm(e,n,r)}_apply(e){const n=zI(e,this.type,this._docOrFields,this._inclusive);return new Un(e.firestore,e.converter,function(i,s){return new oi(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function nL(...t){return Nm._create("endAt",t,!0)}function zI(t,e,n,r){if(n[0]=Pe(n[0]),n[0]instanceof km)return function(s,o,l,u,c){if(!u)throw new z(M.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${l}().`);const d=[];for(const p of xs(s))if(p.field.isKeyField())d.push(Bu(o,u.key));else{const m=u.data.field(p.field);if(Ac(m))throw new z(M.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+p.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const y=p.field.canonicalString();throw new z(M.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${y}' (used as the orderBy) does not exist.`)}d.push(m)}return new zs(d,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Ya(t.firestore);return function(o,l,u,c,d,p){const m=o.explicitOrderBy;if(d.length>m.length)throw new z(M.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const y=[];for(let A=0;A<d.length;A++){const R=d[A];if(m[A].field.isKeyField()){if(typeof R!="string")throw new z(M.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof R}`);if(!Xp(o)&&R.indexOf("/")!==-1)throw new z(M.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${R}' contains a slash.`);const P=o.path.child(ye.fromString(R));if(!G.isDocumentKey(P))throw new z(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${P}' is not because it contains an odd number of segments.`);const _=new G(P);y.push(Bu(l,_))}else{const P=MI(u,c,R);y.push(P)}}return new zs(y,p)}(t._query,t.firestore._databaseId,i,e,n,r)}}function Av(t,e,n){if(typeof(n=Pe(n))=="string"){if(n==="")throw new z(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Xp(e)&&n.indexOf("/")!==-1)throw new z(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ye.fromString(n));if(!G.isDocumentKey(r))throw new z(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Bu(t,new G(r))}if(n instanceof Oe)return Bu(t,n._key);throw new z(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Tc(n)}.`)}function kv(t,e){if(!Array.isArray(t)||t.length===0)throw new z(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function $I(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class rL{convertValue(e,n="none"){switch(Jr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Xr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw J(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return si(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[ju].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Ve(o.doubleValue));return new Ln(n)}convertGeoPoint(e){return new Dn(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=kc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Sa(e));default:return null}}convertTimestamp(e){const n=Yr(e);return new Ie(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ye.fromString(e);de(uI(r),9688,{name:e});const i=new Aa(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||ar(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qI(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Bo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xi extends km{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ru(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(zc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=xi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}xi._jsonSchemaVersion="firestore/documentSnapshot/1.0",xi._jsonSchema={type:Be("string",xi._jsonSchemaVersion),bundleSource:Be("string","DocumentSnapshot"),bundleName:Be("string"),bundle:Be("string")};class ru extends xi{data(e={}){return super.data(e)}}class Ri{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Bo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ru(this._firestore,this._userDataWriter,r.key,r,new Bo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new ru(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Bo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new ru(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Bo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:iL(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ri._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Wp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function iL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(t){t=Lt(t,Oe);const e=Lt(t.firestore,ur);return $D(Uc(e),t._key).then(n=>HI(e,t,n))}Ri._jsonSchemaVersion="firestore/querySnapshot/1.0",Ri._jsonSchema={type:Be("string",Ri._jsonSchemaVersion),bundleSource:Be("string","QuerySnapshot"),bundleName:Be("string"),bundle:Be("string")};class bm extends rL{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Oe(this.firestore,null,n)}}function Rt(t){t=Lt(t,Un);const e=Lt(t.firestore,ur),n=Uc(e),r=new bm(e);return BI(t._query),qD(n,t._query).then(i=>new Ri(e,r,t,i))}function Ks(t,e,n){t=Lt(t,Oe);const r=Lt(t.firestore,ur),i=qI(t.converter,e);return Hc(r,[OI(Ya(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Xt.none())])}function dn(t,e,n,...r){t=Lt(t,Oe);const i=Lt(t.firestore,ur),s=Ya(i);let o;return o=typeof(e=Pe(e))=="string"||e instanceof Fc?JD(s,"updateDoc",t._key,e,n,r):XD(s,"updateDoc",t._key,e),Hc(i,[o.toMutation(t._key,Xt.exists(!0))])}function Pa(t){return Hc(Lt(t.firestore,ur),[new Zp(t._key,Xt.none())])}function zo(t,e){const n=Lt(t.firestore,ur),r=he(t),i=qI(t.converter,e);return Hc(n,[OI(Ya(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Xt.exists(!1))]).then(()=>r)}function ln(t,...e){var u,c,d;t=Pe(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Sv(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Sv(e[r])){const p=e[r];e[r]=(u=p.next)==null?void 0:u.bind(p),e[r+1]=(c=p.error)==null?void 0:c.bind(p),e[r+2]=(d=p.complete)==null?void 0:d.bind(p)}let s,o,l;if(t instanceof Oe)o=Lt(t.firestore,ur),l=xc(t._key.path),s={next:p=>{e[r]&&e[r](HI(o,t,p))},error:e[r+1],complete:e[r+2]};else{const p=Lt(t,Un);o=Lt(p.firestore,ur),l=p._query;const m=new bm(o);s={next:y=>{e[r]&&e[r](new Ri(o,m,p,y))},error:e[r+1],complete:e[r+2]},BI(t._query)}return function(m,y,A,R){const P=new vm(R),_=new gm(y,P,A);return m.asyncQueue.enqueueAndForget(async()=>fm(await Wu(m),_)),()=>{P.Nu(),m.asyncQueue.enqueueAndForget(async()=>pm(await Wu(m),_))}}(Uc(o),l,i,s)}function Hc(t,e){return function(r,i){const s=new Jn;return r.asyncQueue.enqueueAndForget(async()=>ND(await zD(r),i,s)),s.promise}(Uc(t),e)}function HI(t,e,n){const r=n.docs.get(e._key),i=new bm(t);return new xi(t,i,e._key,r,new Bo(n.hasPendingWrites,n.fromCache),e.converter)}function Or(){return new wm("serverTimestamp")}function sL(...t){return new Em("arrayUnion",t)}function oL(...t){return new Tm("arrayRemove",t)}function Pf(t){return new Im("increment",t)}(function(e,n=!0){(function(i){to=i})(Hi),pn(new tn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new ur(new ZN(r.getProvider("auth-internal")),new nb(o,r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new z(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Aa(c.options.projectId,d)}(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Dt(C_,P_,e),Dt(C_,P_,"esm2020")})();/**
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
 */const WI="firebasestorage.googleapis.com",aL="storageBucket",lL=2*60*1e3,uL=10*60*1e3;/**
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
 */class Fn extends _n{constructor(e,n,r=0){super(nd(e),`Firebase Storage: ${n} (${nd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Fn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return nd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Vn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Vn||(Vn={}));function nd(t){return"storage/"+t}function cL(){const t="An unknown error occurred, please check the error payload for server response.";return new Fn(Vn.UNKNOWN,t)}function hL(){return new Fn(Vn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function dL(){return new Fn(Vn.CANCELED,"User canceled the upload/download.")}function fL(t){return new Fn(Vn.INVALID_URL,"Invalid URL '"+t+"'.")}function pL(t){return new Fn(Vn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function xv(t){return new Fn(Vn.INVALID_ARGUMENT,t)}function KI(){return new Fn(Vn.APP_DELETED,"The Firebase app was deleted.")}function mL(t){return new Fn(Vn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class un{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=un.makeFromUrl(e,n)}catch{return new un(e,"")}if(r.path==="")return r;throw pL(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(L){L.path_=decodeURIComponent(L.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",y=new RegExp(`^https?://${p}/${d}/b/${i}/o${m}`,"i"),A={bucket:1,path:3},R=n===WI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",_=new RegExp(`^https?://${R}/${i}/${P}`,"i"),I=[{regex:l,indices:u,postModify:s},{regex:y,indices:A,postModify:c},{regex:_,indices:{bucket:1,path:2},postModify:c}];for(let L=0;L<I.length;L++){const V=I[L],F=V.regex.exec(e);if(F){const E=F[V.indices.bucket];let v=F[V.indices.path];v||(v=""),r=new un(E,v),V.postModify(r);break}}if(r==null)throw fL(e);return r}}class gL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function yL(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function d(...P){c||(c=!0,e.apply(null,P))}function p(P){i=setTimeout(()=>{i=null,t(y,u())},P)}function m(){s&&clearTimeout(s)}function y(P,..._){if(c){m();return}if(P){m(),d.call(null,P,..._);return}if(u()||o){m(),d.call(null,P,..._);return}r<64&&(r*=2);let I;l===1?(l=2,I=0):I=(r+Math.random())*1e3,p(I)}let A=!1;function R(P){A||(A=!0,m(),!c&&(i!==null?(P||(l=2),clearTimeout(i),p(0)):P||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,R(!0)},n),R}function _L(t){t(!1)}/**
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
 */function vL(t){return t!==void 0}function Rv(t,e,n,r){if(r<e)throw xv(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw xv(`Invalid value for '${t}'. Expected ${n} or less.`)}function wL(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Gu;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Gu||(Gu={}));/**
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
 */function EL(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class TL{constructor(e,n,r,i,s,o,l,u,c,d,p,m=!0,y=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=p,this.retry=m,this.isUsingEmulator=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((A,R)=>{this.resolve_=A,this.reject_=R,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Dl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===Gu.NO_ERROR,u=s.getStatus();if(!l||EL(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===Gu.ABORT;r(!1,new Dl(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Dl(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());vL(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=cL();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?KI():dL();o(u)}else{const u=hL();o(u)}};this.canceled_?n(!1,new Dl(!1,null,!0)):this.backoffId_=yL(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&_L(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Dl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function IL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function SL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function AL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function kL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function xL(t,e,n,r,i,s,o=!0,l=!1){const u=wL(t.urlParams),c=t.url+u,d=Object.assign({},t.headers);return AL(d,e),IL(d,n),SL(d,s),kL(d,r),new TL(c,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,l)}/**
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
 */function RL(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function CL(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Qu{constructor(e,n){this._service=e,n instanceof un?this._location=n:this._location=un.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Qu(e,n)}get root(){const e=new un(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return CL(this._location.path)}get storage(){return this._service}get parent(){const e=RL(this._location.path);if(e===null)return null;const n=new un(this._location.bucket,e);return new Qu(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw mL(e)}}function Cv(t,e){const n=e==null?void 0:e[aL];return n==null?null:un.makeFromBucketSpec(n,t)}function PL(t,e,n,r={}){t.host=`${e}:${n}`;const i=zi(e);i&&(Dp(`https://${t.host}/b`),Lp("Storage",!0)),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:k0(s,t.app.options.projectId))}class NL{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=WI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=lL,this._maxUploadRetryTime=uL,this._requests=new Set,i!=null?this._bucket=un.makeFromBucketSpec(i,this._host):this._bucket=Cv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=un.makeFromBucketSpec(this._url,e):this._bucket=Cv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Rv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Rv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Qu(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new gL(KI());{const o=xL(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Pv="@firebase/storage",Nv="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI="storage";function bL(t=_c(),e){t=Pe(t);const r=qi(t,GI).getImmediate({identifier:e}),i=I0("storage");return i&&DL(r,...i),r}function DL(t,e,n,r={}){PL(t,e,n,r)}function LL(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new NL(n,r,i,e,Hi)}function OL(){pn(new tn(GI,LL,"PUBLIC").setMultipleInstances(!0)),Dt(Pv,Nv,""),Dt(Pv,Nv,"esm2020")}OL();const QI="@firebase/installations",Dm="0.6.19";/**
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
 */const YI=1e4,XI=`w:${Dm}`,JI="FIS_v2",VL="https://firebaseinstallations.googleapis.com/v1",ML=60*60*1e3,UL="installations",FL="Installations";/**
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
 */const jL={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ui=new $i(UL,FL,jL);function ZI(t){return t instanceof _n&&t.code.includes("request-failed")}/**
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
 */function e1({projectId:t}){return`${VL}/projects/${t}/installations`}function t1(t){return{token:t.token,requestStatus:2,expiresIn:zL(t.expiresIn),creationTime:Date.now()}}async function n1(t,e){const r=(await e.json()).error;return Ui.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function r1({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function BL(t,{refreshToken:e}){const n=r1(t);return n.append("Authorization",$L(e)),n}async function i1(t){const e=await t();return e.status>=500&&e.status<600?t():e}function zL(t){return Number(t.replace("s","000"))}function $L(t){return`${JI} ${t}`}/**
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
 */async function qL({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=e1(t),i=r1(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:JI,appId:t.appId,sdkVersion:XI},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await i1(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:t1(c.authToken)}}else throw await n1("Create Installation",u)}/**
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
 */function s1(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function HL(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const WL=/^[cdef][\w-]{21}$/,Nf="";function KL(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=GL(t);return WL.test(n)?n:Nf}catch{return Nf}}function GL(t){return HL(t).substr(0,22)}/**
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
 */function Wc(t){return`${t.appName}!${t.appId}`}/**
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
 */const o1=new Map;function a1(t,e){const n=Wc(t);l1(n,e),QL(n,e)}function l1(t,e){const n=o1.get(t);if(n)for(const r of n)r(e)}function QL(t,e){const n=YL();n&&n.postMessage({key:t,fid:e}),XL()}let Ii=null;function YL(){return!Ii&&"BroadcastChannel"in self&&(Ii=new BroadcastChannel("[Firebase] FID Change"),Ii.onmessage=t=>{l1(t.data.key,t.data.fid)}),Ii}function XL(){o1.size===0&&Ii&&(Ii.close(),Ii=null)}/**
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
 */const JL="firebase-installations-database",ZL=1,Fi="firebase-installations-store";let rd=null;function Lm(){return rd||(rd=yc(JL,ZL,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Fi)}}})),rd}async function Yu(t,e){const n=Wc(t),i=(await Lm()).transaction(Fi,"readwrite"),s=i.objectStore(Fi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&a1(t,e.fid),e}async function u1(t){const e=Wc(t),r=(await Lm()).transaction(Fi,"readwrite");await r.objectStore(Fi).delete(e),await r.done}async function Kc(t,e){const n=Wc(t),i=(await Lm()).transaction(Fi,"readwrite"),s=i.objectStore(Fi),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&a1(t,l.fid),l}/**
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
 */async function Om(t){let e;const n=await Kc(t.appConfig,r=>{const i=eO(r),s=tO(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Nf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function eO(t){const e=t||{fid:KL(),registrationStatus:0};return c1(e)}function tO(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ui.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=nO(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:rO(t)}:{installationEntry:e}}async function nO(t,e){try{const n=await qL(t,e);return Yu(t.appConfig,n)}catch(n){throw ZI(n)&&n.customData.serverCode===409?await u1(t.appConfig):await Yu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function rO(t){let e=await bv(t.appConfig);for(;e.registrationStatus===1;)await s1(100),e=await bv(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Om(t);return r||n}return e}function bv(t){return Kc(t,e=>{if(!e)throw Ui.create("installation-not-found");return c1(e)})}function c1(t){return iO(t)?{fid:t.fid,registrationStatus:0}:t}function iO(t){return t.registrationStatus===1&&t.registrationTime+YI<Date.now()}/**
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
 */async function sO({appConfig:t,heartbeatServiceProvider:e},n){const r=oO(t,n),i=BL(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:XI,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await i1(()=>fetch(r,l));if(u.ok){const c=await u.json();return t1(c)}else throw await n1("Generate Auth Token",u)}function oO(t,{fid:e}){return`${e1(t)}/${e}/authTokens:generate`}/**
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
 */async function Vm(t,e=!1){let n;const r=await Kc(t.appConfig,s=>{if(!h1(s))throw Ui.create("not-registered");const o=s.authToken;if(!e&&uO(o))return s;if(o.requestStatus===1)return n=aO(t,e),s;{if(!navigator.onLine)throw Ui.create("app-offline");const l=hO(s);return n=lO(t,l),l}});return n?await n:r.authToken}async function aO(t,e){let n=await Dv(t.appConfig);for(;n.authToken.requestStatus===1;)await s1(100),n=await Dv(t.appConfig);const r=n.authToken;return r.requestStatus===0?Vm(t,e):r}function Dv(t){return Kc(t,e=>{if(!h1(e))throw Ui.create("not-registered");const n=e.authToken;return dO(n)?{...e,authToken:{requestStatus:0}}:e})}async function lO(t,e){try{const n=await sO(t,e),r={...e,authToken:n};return await Yu(t.appConfig,r),n}catch(n){if(ZI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await u1(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Yu(t.appConfig,r)}throw n}}function h1(t){return t!==void 0&&t.registrationStatus===2}function uO(t){return t.requestStatus===2&&!cO(t)}function cO(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+ML}function hO(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function dO(t){return t.requestStatus===1&&t.requestTime+YI<Date.now()}/**
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
 */async function fO(t){const e=t,{installationEntry:n,registrationPromise:r}=await Om(e);return r?r.catch(console.error):Vm(e).catch(console.error),n.fid}/**
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
 */async function pO(t,e=!1){const n=t;return await mO(n),(await Vm(n,e)).token}async function mO(t){const{registrationPromise:e}=await Om(t);e&&await e}/**
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
 */function gO(t){if(!t||!t.options)throw id("App Configuration");if(!t.name)throw id("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw id(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function id(t){return Ui.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1="installations",yO="installations-internal",_O=t=>{const e=t.getProvider("app").getImmediate(),n=gO(e),r=qi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},vO=t=>{const e=t.getProvider("app").getImmediate(),n=qi(e,d1).getImmediate();return{getId:()=>fO(n),getToken:i=>pO(n,i)}};function wO(){pn(new tn(d1,_O,"PUBLIC")),pn(new tn(yO,vO,"PRIVATE"))}wO();Dt(QI,Dm);Dt(QI,Dm,"esm2020");/**
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
 */const EO="/firebase-messaging-sw.js",TO="/firebase-cloud-messaging-push-scope",f1="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",IO="https://fcmregistrations.googleapis.com/v1",p1="google.c.a.c_id",SO="google.c.a.c_l",AO="google.c.a.ts",kO="google.c.a.e",Lv=1e4;var Ov;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Ov||(Ov={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var Na;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(Na||(Na={}));/**
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
 */function zn(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function xO(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
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
 */const sd="fcm_token_details_db",RO=5,Vv="fcm_token_object_Store";async function CO(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(sd))return null;let e=null;return(await yc(sd,RO,{upgrade:async(r,i,s,o)=>{if(i<2||!r.objectStoreNames.contains(Vv))return;const l=o.objectStore(Vv),u=await l.index("fcmSenderId").get(t);if(await l.clear(),!!u){if(i===2){const c=u;if(!c.auth||!c.p256dh||!c.endpoint)return;e={token:c.fcmToken,createTime:c.createTime??Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:typeof c.vapidKey=="string"?c.vapidKey:zn(c.vapidKey)}}}else if(i===3){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:zn(c.auth),p256dh:zn(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:zn(c.vapidKey)}}}else if(i===4){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:zn(c.auth),p256dh:zn(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:zn(c.vapidKey)}}}}}})).close(),await Wh(sd),await Wh("fcm_vapid_details_db"),await Wh("undefined"),PO(e)?e:null}function PO(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const NO="firebase-messaging-database",bO=1,ba="firebase-messaging-store";let od=null;function m1(){return od||(od=yc(NO,bO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ba)}}})),od}async function DO(t){const e=g1(t),r=await(await m1()).transaction(ba).objectStore(ba).get(e);if(r)return r;{const i=await CO(t.appConfig.senderId);if(i)return await Mm(t,i),i}}async function Mm(t,e){const n=g1(t),i=(await m1()).transaction(ba,"readwrite");return await i.objectStore(ba).put(e,n),await i.done,e}function g1({appConfig:t}){return t.appId}/**
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
 */const LO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},ft=new $i("messaging","Messaging",LO);/**
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
 */async function OO(t,e){const n=await Fm(t),r=y1(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(Um(t.appConfig),i)).json()}catch(o){throw ft.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw ft.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw ft.create("token-subscribe-no-token");return s.token}async function VO(t,e){const n=await Fm(t),r=y1(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${Um(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw ft.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw ft.create("token-update-failed",{errorInfo:o})}if(!s.token)throw ft.create("token-update-no-token");return s.token}async function MO(t,e){const r={method:"DELETE",headers:await Fm(t)};try{const s=await(await fetch(`${Um(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw ft.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw ft.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function Um({projectId:t}){return`${IO}/projects/${t}/registrations`}async function Fm({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function y1({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==f1&&(i.web.applicationPubKey=r),i}/**
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
 */const UO=7*24*60*60*1e3;async function FO(t){const e=await BO(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:zn(e.getKey("auth")),p256dh:zn(e.getKey("p256dh"))},r=await DO(t.firebaseDependencies);if(r){if(zO(r.subscriptionOptions,n))return Date.now()>=r.createTime+UO?jO(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await MO(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return Mv(t.firebaseDependencies,n)}else return Mv(t.firebaseDependencies,n)}async function jO(t,e){try{const n=await VO(t.firebaseDependencies,e),r={...e,token:n,createTime:Date.now()};return await Mm(t.firebaseDependencies,r),n}catch(n){throw n}}async function Mv(t,e){const r={token:await OO(t,e),createTime:Date.now(),subscriptionOptions:e};return await Mm(t,r),r.token}async function BO(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:xO(e)})}function zO(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uv(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return $O(e,t),qO(e,t),HO(e,t),e}function $O(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function qO(t,e){e.data&&(t.data=e.data)}function HO(t,e){var i,s,o,l;if(!e.fcmOptions&&!((i=e.notification)!=null&&i.click_action))return;t.fcmOptions={};const n=((s=e.fcmOptions)==null?void 0:s.link)??((o=e.notification)==null?void 0:o.click_action);n&&(t.fcmOptions.link=n);const r=(l=e.fcmOptions)==null?void 0:l.analytics_label;r&&(t.fcmOptions.analyticsLabel=r)}/**
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
 */function WO(t){return typeof t=="object"&&!!t&&p1 in t}/**
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
 */function KO(t){if(!t||!t.options)throw ad("App Configuration Object");if(!t.name)throw ad("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw ad(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function ad(t){return ft.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=KO(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QO(t){try{t.swRegistration=await navigator.serviceWorker.register(EO,{scope:TO}),t.swRegistration.update().catch(()=>{}),await YO(t.swRegistration)}catch(e){throw ft.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function YO(t){return new Promise((e,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${Lv} ms`)),Lv),i=t.installing||t.waiting;t.active?(clearTimeout(r),e()):i?i.onstatechange=s=>{var o;((o=s.target)==null?void 0:o.state)==="activated"&&(i.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XO(t,e){if(!e&&!t.swRegistration&&await QO(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw ft.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JO(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=f1)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _1(t,e){if(!navigator)throw ft.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw ft.create("permission-blocked");return await JO(t,e==null?void 0:e.vapidKey),await XO(t,e==null?void 0:e.serviceWorkerRegistration),FO(t)}/**
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
 */async function ZO(t,e,n){const r=eV(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[p1],message_name:n[SO],message_time:n[AO],message_device_time:Math.floor(Date.now()/1e3)})}function eV(t){switch(t){case Na.NOTIFICATION_CLICKED:return"notification_open";case Na.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function tV(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===Na.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(Uv(n)):t.onMessageHandler.next(Uv(n)));const r=n.data;WO(r)&&r[kO]==="1"&&await ZO(t,n.messageType,r)}const Fv="@firebase/messaging",jv="0.12.23";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nV=t=>{const e=new GO(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>tV(e,n)),e},rV=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>_1(e,r)}};function iV(){pn(new tn("messaging",nV,"PUBLIC")),pn(new tn("messaging-internal",rV,"PRIVATE")),Dt(Fv,jv),Dt(Fv,jv,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sV(){try{await R0()}catch{return!1}return typeof window<"u"&&x0()&&yR()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oV(t,e){if(!navigator)throw ft.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
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
 */function aV(t=_c()){return sV().then(e=>{if(!e)throw ft.create("unsupported-browser")},e=>{throw ft.create("indexed-db-unsupported")}),qi(Pe(t),"messaging").getImmediate()}async function lV(t,e){return t=Pe(t),_1(t,e)}function uV(t,e){return t=Pe(t),oV(t,e)}iV();const cV={apiKey:"AIzaSyDDqSudAmgIyVT7nfg_2eJM8pf7nUQ7Hmk",authDomain:"kaydol-e1326.firebaseapp.com",projectId:"kaydol-e1326",storageBucket:"kaydol-e1326.firebasestorage.app",messagingSenderId:"272409924206",appId:"1:272409924206:web:7cdc48219e710c8b678c7f",measurementId:"G-6NG7FMP6H8"},Gc=N0(cV),Q=QN(Gc),K=WD(Gc);bL(Gc);const Bv=aV(Gc);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hV=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),v1=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dV={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fV=b.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>b.createElement("svg",{ref:u,...dV,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:v1("lucide",i),...l},[...o.map(([c,d])=>b.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=(t,e)=>{const n=b.forwardRef(({className:r,...i},s)=>b.createElement(fV,{ref:s,iconNode:e,className:v1(`lucide-${hV(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pV=Ge("AtSign",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=Ge("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mV=Ge("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=Ge("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gV=Ge("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yV=Ge("LockOpen",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _V=Ge("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vV=Ge("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wV=Ge("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=Ge("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EV=Ge("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TV=Ge("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IV=Ge("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SV=Ge("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu=Ge("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AV=Ge("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=Ge("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs=Ge("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kV=Ge("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function xV(){var d,p;const[t,e]=b.useState(0),[n,r]=b.useState(!1),[i,s]=b.useState(""),[o,l]=b.useState(""),u=dr();b.useEffect(()=>{if(!Q.currentUser)return;ys(he(K,"users",Q.currentUser.uid)).then(y=>{var A;return r((A=y.data())==null?void 0:A.isAdmin)});const m=Le(me(K,"notifications"),qe("to","==",Q.currentUser.uid),qe("read","==",!1));return ln(m,y=>e(y.docs.length))},[]);const c=m=>{m.preventDefault();const y=i.trim();y&&(u(`/search?q=${encodeURIComponent(y)}`),s(""))};return g.jsx("nav",{className:"fixed top-0 left-0 right-0 z-[100] bg-black/80 backdrop-blur-2xl border-b border-white/5 px-10 py-6",children:g.jsxs("div",{className:"max-w-7xl mx-auto flex justify-between items-center gap-8",children:[g.jsx(_i,{to:"/",className:"text-white font-black tracking-[0.6em] text-lg uppercase italic flex-shrink-0",children:"ZAHID"}),g.jsxs("form",{onSubmit:c,className:"flex-1 max-w-md relative",children:[g.jsx(EV,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-white/20",size:18}),g.jsx("input",{value:i,onChange:m=>s(m.target.value),placeholder:"NODE_SEARCH (NICKNAME)",className:"w-full bg-white/5 border border-white/5 rounded-2xl py-3 pl-12 pr-4 text-[10px] font-black text-white outline-none focus:border-white/20 transition-all"}),o&&g.jsx("p",{className:"absolute left-0 -bottom-6 text-[9px] text-red-500 font-black uppercase",children:o})]}),g.jsxs("div",{className:"flex items-center gap-10",children:[g.jsx(_i,{to:"/",className:"text-white/20 hover:text-white transition-all",children:g.jsx(gV,{size:28})}),g.jsxs(_i,{to:"/notifications",className:"relative text-white/20 hover:text-white transition-all",children:[g.jsx(w1,{size:28}),t>0&&g.jsx("span",{className:"absolute -top-2 -right-2 bg-white text-black text-[10px] font-black px-1.5 py-0.5 rounded-full border-2 border-black min-w-[20px] text-center",children:t>9?"9+":t})]}),n&&g.jsx(_i,{to:"/admin",className:"text-white/20 hover:text-white transition-all",children:g.jsx(SV,{size:28})}),g.jsx(_i,{to:`/user/${(p=(d=Q.currentUser)==null?void 0:d.displayName)==null?void 0:p.replace(/^@/,"")}`,className:"text-white/20 hover:text-white transition-all",children:g.jsx(E1,{size:28})}),g.jsx("button",{onClick:()=>Q.signOut(),className:"text-red-500/40 hover:text-red-500 transition-all",children:g.jsx(vV,{size:28})})]})]})})}function RV(){return b.useEffect(()=>{if(!Q.currentUser)return;let t=!0;(async()=>{try{if(await Notification.requestPermission()!=="granted")return;const s=await lV(Bv,{vapidKey:"<YOUR_VAPID_KEY>"});s&&t&&await Ks(he(K,"users",Q.currentUser.uid,"fcmTokens",s),{token:s,createdAt:Or()})}catch(r){console.error("FCM token error",r)}})();const n=uV(Bv,r=>{try{r!=null&&r.notification&&new Notification(r.notification.title,{body:r.notification.body})}catch(i){console.error(i)}});return()=>{t=!1,n&&n()}},[]),null}function CV(){const[t,e]=b.useState([]),[n,r]=b.useState(null),[i,s]=b.useState(""),[o,l]=b.useState({show:!1,title:"",msg:"",onConfirm:null}),[u,c]=b.useState(null),[d,p]=b.useState(""),[m,y]=b.useState(""),[A,R]=b.useState({});b.useEffect(()=>{Q.currentUser&&ln(he(K,"users",Q.currentUser.uid),S=>r(S.data()));let E=null;return(async()=>{try{if(!Q.currentUser){const N=Le(me(K,"posts"),ki("timestamp","desc"));E=ln(N,k=>e(k.docs.map(ie=>({id:ie.id,...ie.data()}))));return}const x=(await Rt(Le(me(K,"follows"),qe("from","==",Q.currentUser.uid)))).docs.map(N=>N.data().to),C=[...x,Q.currentUser.uid];if(C.length>0&&C.length<=10){const N=Le(me(K,"posts"),qe("uid","in",C),ki("timestamp","desc"));E=ln(N,k=>e(k.docs.map(ie=>({id:ie.id,...ie.data()}))))}else{const N=Le(me(K,"posts"),ki("timestamp","desc"));E=ln(N,k=>{const ie=k.docs.map(ze=>({id:ze.id,...ze.data()}));x.length>0&&ie.sort((ze,It)=>{var fe,_e;const vn=x.includes(ze.uid)?0:1,$=x.includes(It.uid)?0:1;if(vn!==$)return vn-$;const Y=(fe=ze.timestamp)!=null&&fe.toDate?ze.timestamp.toDate():0;return((_e=It.timestamp)!=null&&_e.toDate?It.timestamp.toDate():0)-Y}),e(ie)})}}catch(S){console.error(S)}})(),()=>{E&&E()}},[]);const P=async(E,v,S)=>{E!==Q.currentUser.uid&&await zo(me(K,"notifications"),{to:E,from:n.nickname,type:v,postId:S,read:!1,timestamp:Or()})},_=async E=>{var S;const v=(S=E.likes)==null?void 0:S.includes(Q.currentUser.uid);await dn(he(K,"posts",E.id),{likes:v?oL(Q.currentUser.uid):sL(Q.currentUser.uid)}),v||P(E.uid,"LIKE",E.id)},T=async E=>{var x;if(!d.trim()&&!((x=A[E.id])!=null&&x.trim()))return;const v={id:Date.now().toString(),uid:Q.currentUser.uid,author:n.nickname,text:d,imageURL:A[E.id]||null},S=[...E.comments||[],v];await dn(he(K,"posts",E.id),{comments:S}),P(E.uid,"COMMENT",E.id);try{const C=/@([A-Za-z0-9_]+)/g;let N;const k=[];for(;(N=C.exec(d))!==null;){const ie=N[1].toUpperCase();k.includes(ie)||k.push(ie)}if(k.length>0)for(const ie of k)(await Rt(Le(me(K,"users"),qe("nickname","==",ie)))).forEach(async It=>{await zo(me(K,"notifications"),{to:It.id,from:n.nickname,type:"MENTION",postId:E.id,read:!1,timestamp:Or()})})}catch(C){console.error(C)}p(""),R(C=>({...C,[E.id]:""}))},I=(E,v)=>{l({show:!0,title:"EMİN MİSİNİZ?",msg:"YORUM SİLİNECEK.",onConfirm:async()=>{const S=(E.comments||[]).filter(x=>x.id!==v);await dn(he(K,"posts",E.id),{comments:S})}})},L=E=>{l({show:!0,title:"DİKKAT",msg:"VERİ SİLİNECEK. ONAYLIYOR MUSUNUZ?",onConfirm:async()=>{await Pa(he(K,"posts",E))}})},V=(n==null?void 0:n.banPostUntil)&&new Date(n.banPostUntil)>new Date,F=async()=>{if(!(!i.trim()&&!m)){if(V)return l({show:!0,title:"KISITLI",msg:"PAYLAŞIM YASAKLANDI.",onConfirm:null});if(!n)return l({show:!0,title:"HATA",msg:"KULLANICI BİLGİLERİ HENÜZ YÜKLENMEDİ.",onConfirm:null});try{const v=(await zo(me(K,"posts"),{uid:Q.currentUser.uid,author:n.nickname,authorPfp:n.photoURL,text:i,imageURL:m||null,likes:[],comments:[],mentions:[],timestamp:Or(),isAdmin:n.isAdmin})).id,S=/@([A-Za-z0-9_]+)/g;let x;const C=[];for(;(x=S.exec(i))!==null;){const N=x[1].toUpperCase();C.includes(N)||C.push(N)}if(C.length>0)for(const N of C)try{(await Rt(Le(me(K,"users"),qe("nickname","==",N)))).forEach(async ie=>{await zo(me(K,"notifications"),{to:ie.id,from:n.nickname,type:"MENTION",postId:v,read:!1,timestamp:Or()})})}catch(k){console.error(k)}s(""),y("")}catch(E){console.error(E),l({show:!0,title:"HATA",msg:"PAYLAŞIM BAŞARISIZ.",onConfirm:null})}}};return g.jsxs("div",{className:"min-h-screen bg-black pt-32 px-6 pb-20 font-mono text-white",children:[g.jsxs("div",{className:"max-w-2xl mx-auto space-y-12",children:[g.jsxs("div",{className:`bg-[#0a0a0a] border border-white/5 p-8 rounded-[3rem] relative ${V?"opacity-50":""}`,children:[V&&g.jsx("div",{className:"absolute inset-0 z-20 flex items-center justify-center bg-black/60 rounded-[3rem]",children:g.jsx(_V,{size:32})}),g.jsx("textarea",{value:i,onChange:E=>s(E.target.value),placeholder:"Veri aktar...",className:"w-full bg-transparent h-24 outline-none resize-none text-sm"}),g.jsx("input",{value:m,onChange:E=>y(E.target.value),placeholder:"Görsel URL (isteğe bağlı)",className:"w-full bg-transparent mt-3 outline-none text-xs text-white/60"}),m&&g.jsx("img",{src:m,className:"w-full mt-4 rounded-2xl object-cover"}),g.jsx("div",{className:"flex justify-end pt-4 border-t border-white/5",children:g.jsx("button",{onClick:F,className:"bg-white text-black px-10 py-3 rounded-2xl text-[10px] font-black uppercase",children:"PAYLAŞ"})})]}),t.map(E=>{var v,S,x,C;return g.jsxs("div",{className:"bg-[#0a0a0a] border border-white/5 p-8 rounded-[3.5rem] group",children:[g.jsxs("div",{className:"flex justify-between items-center mb-6",children:[g.jsxs("div",{className:"flex items-center gap-4",children:[g.jsx("img",{src:E.authorPfp,className:"w-12 h-12 rounded-2xl"}),g.jsxs("span",{className:"font-black text-xs uppercase",children:["@",E.author]})]}),(((v=Q.currentUser)==null?void 0:v.uid)===E.uid||(n==null?void 0:n.isAdmin))&&g.jsx("button",{onClick:()=>L(E.id),className:"text-white/10 hover:text-red-500 transition-all",children:g.jsx(Xu,{size:20})})]}),g.jsx("p",{className:"text-sm text-white/70 mb-8",children:E.text}),g.jsxs("div",{className:"flex gap-10 pt-6 border-t border-white/5",children:[g.jsx("button",{onClick:()=>_(E),className:`flex items-center gap-2 text-[10px] font-black ${(S=E.likes)!=null&&S.includes(Q.currentUser.uid)?"text-white":"text-white/20"}`,children:g.jsx(jm,{size:20,fill:(x=E.likes)!=null&&x.includes(Q.currentUser.uid)?"white":"none"})}),g.jsx("button",{onClick:()=>c(u===E.id?null:E.id),className:"flex items-center gap-2 text-[10px] font-black text-white/20",children:g.jsx(Bm,{size:20})})]}),u===E.id&&g.jsxs("div",{className:"mt-6 space-y-4 animate-in",children:[(C=E.comments)==null?void 0:C.map(N=>{var k;return g.jsxs("div",{className:"text-xs bg-white/5 p-4 rounded-2xl flex justify-between items-start gap-4",children:[g.jsxs("div",{children:[g.jsxs("div",{className:"opacity-30 mr-2",children:[N.author,":"]}),g.jsx("div",{children:N.text}),N.imageURL&&g.jsx("img",{src:N.imageURL,className:"mt-2 w-full rounded-lg object-cover"})]}),(((k=Q.currentUser)==null?void 0:k.uid)===N.uid||(n==null?void 0:n.isAdmin))&&g.jsx("button",{onClick:()=>I(E,N.id),className:"text-white/20 hover:text-white",children:g.jsx(Xu,{size:16})})]},N.id)}),g.jsxs("div",{className:"mt-4 space-y-2",children:[g.jsx("input",{value:d,onChange:N=>p(N.target.value),placeholder:"Yorum yaz...",className:"w-full bg-black border border-white/5 rounded-xl px-4 text-xs"}),g.jsx("input",{value:A[E.id]||"",onChange:N=>R(k=>({...k,[E.id]:N.target.value})),placeholder:"Yorum görsel URL (isteğe bağlı)",className:"w-full bg-black border border-white/5 rounded-xl px-4 text-xs"}),g.jsx("div",{className:"flex justify-end",children:g.jsx("button",{onClick:()=>T(E),className:"bg-white text-black p-3 rounded-xl",children:g.jsx(TV,{size:16})})})]})]})]},E.id)})]}),o.show&&g.jsx("div",{className:"fixed inset-0 z-[2000] flex items-center justify-center bg-black/95 backdrop-blur-md",children:g.jsxs("div",{className:"bg-[#0a0a0a] border border-white/10 p-12 rounded-[4rem] text-center max-w-sm w-full",children:[g.jsx("h2",{className:"text-white font-black text-xs mb-4",children:o.title}),g.jsx("p",{className:"text-white/30 text-[9px] mb-10",children:o.msg}),g.jsxs("div",{className:"flex gap-3",children:[o.onConfirm&&g.jsx("button",{onClick:()=>l({show:!1}),className:"flex-1 bg-white/5 py-4 rounded-2xl text-[9px] font-black",children:"İPTAL"}),g.jsx("button",{onClick:()=>{o.onConfirm&&o.onConfirm(),l({show:!1})},className:"flex-1 bg-white text-black py-4 rounded-2xl text-[9px] font-black",children:"ONAYLA"})]})]})})]})}function PV(){var gt,wn,St;const{username:t}=h0(),e=dr(),[n,r]=b.useState(null),[i,s]=b.useState([]),[o,l]=b.useState(!0),[u,c]=b.useState(!1),[d,p]=b.useState({}),[m,y]=b.useState({show:!1,title:"",msg:"",type:"info"}),[A,R]=b.useState(!1),[P,_]=b.useState(0),[T,I]=b.useState(0),[L,V]=b.useState(!1);b.useEffect(()=>{(async()=>{if(l(!0),!t){l(!1);return}try{const ve=t.replace(/^@/,"").toUpperCase(),Qe=Le(me(K,"users"),qe("nickname","==",ve)),ce=await Rt(Qe);if(ce.empty){console.log("Kullanıcı bulunamadı"),r(null),l(!1);return}const Ht={id:ce.docs[0].id,...ce.docs[0].data()};r(Ht),p(Ht);try{const pr=Le(me(K,"posts"),qe("uid","==",Ht.id),ki("timestamp","desc"));return ln(pr,li=>{s(li.docs.map(so=>({id:so.id,...so.data()}))),l(!1)},li=>{console.error(li),l(!1)})}catch(pr){console.error(pr),l(!1)}}catch(ve){console.error(ve),l(!1)}})()},[t]),b.useEffect(()=>{if(!n)return;const W=Le(me(K,"follows"),qe("to","==",n.id)),ve=ln(W,Ht=>_(Ht.docs.length)),Qe=Le(me(K,"follows"),qe("from","==",n.id)),ce=ln(Qe,Ht=>I(Ht.docs.length));if(Q.currentUser){const Ht=Le(me(K,"follows"),qe("to","==",n.id),qe("from","==",Q.currentUser.uid));Rt(Ht).then(pr=>R(!pr.empty)).catch(()=>{})}return()=>{ve(),ce()}},[n]);const F=async()=>{if(!(!Q.currentUser||!n)){V(!0);try{const W=`${Q.currentUser.uid}_${n.id}`;await Ks(he(K,"follows",W),{from:Q.currentUser.uid,to:n.id,timestamp:Or()}),await dn(he(K,"users",n.id),{followersCount:Pf(1)});const ve=await ys(he(K,"users",Q.currentUser.uid)),Qe=ve.exists()?ve.data().nickname||Q.currentUser.displayName||Q.currentUser.uid:Q.currentUser.displayName||Q.currentUser.uid;await zo(me(K,"notifications"),{to:n.id,from:Qe,type:"FOLLOW",read:!1,timestamp:Or()}),R(!0)}catch(W){console.error(W)}V(!1)}},E=async()=>{if(!(!Q.currentUser||!n)){V(!0);try{const W=`${Q.currentUser.uid}_${n.id}`;await Pa(he(K,"follows",W)),await dn(he(K,"users",n.id),{followersCount:Pf(-1)}),R(!1)}catch(W){console.error(W)}V(!1)}},v=((gt=Q.currentUser)==null?void 0:gt.uid)===(n==null?void 0:n.id);n!=null&&n.banProfileUntil&&new Date(n.banProfileUntil)>new Date;const[S,x]=b.useState([]),[C,N]=b.useState([]),[k,ie]=b.useState(!1),[ze,It]=b.useState(!1),[vn,$]=b.useState(!1);b.useEffect(()=>{Q.currentUser&&ys(he(K,"users",Q.currentUser.uid)).then(W=>{var ve;return $(((ve=W.data())==null?void 0:ve.isAdmin)||Q.currentUser.email==="info@zahid.life")}).catch(()=>{})},[]);const Y=async()=>{if(!n)return;const ve=(await Rt(Le(me(K,"follows"),qe("to","==",n.id)))).docs.map(ce=>ce.data().from),Qe=await Promise.all(ve.map(ce=>ys(he(K,"users",ce))));x(Qe.filter(ce=>ce.exists()).map(ce=>({id:ce.id,...ce.data()})))},te=async()=>{if(!n)return;const ve=(await Rt(Le(me(K,"follows"),qe("from","==",n.id)))).docs.map(ce=>ce.data().to),Qe=await Promise.all(ve.map(ce=>ys(he(K,"users",ce))));N(Qe.filter(ce=>ce.exists()).map(ce=>({id:ce.id,...ce.data()})))},fe=async()=>{if(n.showFollowers===!1&&!v&&!vn){y({show:!0,title:"GİZLİ",msg:"Bu kullanıcı takipci listesini gizli tutuyor.",type:"info"});return}await Y(),ie(!0)},_e=async()=>{await te(),It(!0)},jn=async()=>{try{const W=(d.nickname||"").trim().toUpperCase();if(!W||W.length<3)return y({show:!0,title:"HATA",msg:"NICKNAME EN AZ 3 KARAKTER OLMALI.",type:"error"});if(W!==n.nickname){const ce=Le(me(K,"users"),qe("nickname","==",W));if(!(await Rt(ce)).empty)return y({show:!0,title:"HATA",msg:"BU NICKNAME ZATEN KULLANILIYOR.",type:"error"})}const ve=Array.isArray(d.languages)?d.languages:d.languages?d.languages.split(",").map(ce=>ce.trim()).filter(Boolean):[],Qe={...d,nickname:W,languages:ve};await dn(he(K,"users",n.id),Qe);try{await iT(Q.currentUser,{displayName:W})}catch{}r({...n,...Qe}),c(!1),y({show:!0,title:"BAŞARILI",msg:"PROFİL GÜNCELLENDİ.",type:"success"})}catch(W){console.error(W),y({show:!0,title:"HATA",msg:"GÜNCELLEME BAŞARISIZ OLDU.",type:"error"})}};return o?g.jsx("div",{className:"min-h-screen bg-black flex items-center justify-center text-[10px] font-black text-white uppercase tracking-[0.5em]",children:"Veri Senkronize Ediliyor..."}):n?g.jsxs("div",{className:"min-h-screen bg-black text-white font-mono pb-40",children:[g.jsxs("div",{className:"h-80 w-full bg-[#050505] relative overflow-hidden",children:[n.banner&&g.jsx("img",{src:n.banner,className:"w-full h-full object-cover opacity-40"}),g.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black to-transparent"}),((wn=Q.currentUser)==null?void 0:wn.uid)===n.id&&!(n.banProfileUntil&&new Date(n.banProfileUntil)>new Date)&&g.jsx("button",{onClick:()=>c(!0),className:"absolute bottom-6 right-6 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl text-[9px] font-black uppercase",children:"BANNER DÜZENLE"})]}),g.jsxs("div",{className:"max-w-4xl mx-auto px-10 -mt-24 relative z-10",children:[g.jsxs("div",{className:"flex items-end gap-8 mb-20",children:[g.jsx("img",{src:n.photoURL,className:"w-40 h-40 rounded-[3rem] border-8 border-black shadow-2xl object-cover"}),g.jsxs("div",{className:"pb-4",children:[g.jsxs("h1",{className:"text-4xl font-black italic uppercase tracking-tighter",children:["@",n.nickname]}),g.jsxs("p",{className:"text-white/20 text-[10px] font-black tracking-widest mt-2 uppercase",children:["ID: ",n.id.slice(0,10)]}),g.jsxs("div",{className:"flex items-center gap-6 mt-3",children:[g.jsxs("div",{className:"text-[12px] uppercase opacity-40",children:["Takipçi: ",g.jsx("button",{onClick:fe,className:"font-black text-white ml-2 text-[14px]",children:P})]}),g.jsxs("div",{className:"text-[12px] uppercase opacity-40",children:["Takip: ",g.jsx("button",{onClick:_e,className:"font-black text-white ml-2 text-[14px]",children:T})]}),!v&&Q.currentUser&&g.jsx("button",{onClick:()=>A?E():F(),disabled:L,className:`ml-4 px-4 py-2 rounded-xl font-black ${A?"bg-white text-black":"bg-white/5 text-white"}`,children:L?"...":A?"TAKİP EDİLİYOR":"TAKİP ET"})]})]})]}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-16",children:[g.jsxs("div",{className:"space-y-10 text-[11px]",children:[g.jsxs("div",{children:[g.jsx("p",{className:"text-white/20 font-black uppercase tracking-widest mb-4 italic",children:"// BIOGRAPHY"}),g.jsx("p",{className:"leading-relaxed text-white/60 text-base",children:n.bio||"Veri girilmedi."})]}),g.jsxs("div",{children:[g.jsx("p",{className:"text-white/20 font-black uppercase tracking-widest mb-4 italic",children:"// TECH_STACK"}),g.jsx("div",{className:"flex flex-wrap gap-2",children:(St=n.languages)==null?void 0:St.map((W,ve)=>g.jsx("span",{className:"bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg uppercase font-black text-[11px]",children:W},ve))})]})]}),g.jsxs("div",{className:"md:col-span-2 space-y-10",children:[g.jsx("p",{className:"text-white/20 font-black uppercase tracking-widest italic",children:"// SIGNAL_HISTORY"}),i.map(W=>{var ve,Qe;return g.jsxs("div",{className:"bg-[#0a0a0a] border border-white/5 p-8 rounded-[3rem]",children:[g.jsx("p",{className:"text-base leading-relaxed mb-6",children:W.text}),g.jsxs("div",{className:"flex gap-6 opacity-30",children:[g.jsx(jm,{size:18})," ",((ve=W.likes)==null?void 0:ve.length)||0,g.jsx(Bm,{size:18})," ",((Qe=W.comments)==null?void 0:Qe.length)||0]})]},W.id)})]})]})]}),u&&g.jsx("div",{className:"fixed inset-0 z-[1000] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-6",children:g.jsxs("div",{className:"bg-[#0a0a0a] border border-white/10 w-full max-w-2xl rounded-[4rem] p-12",children:[g.jsxs("div",{className:"flex justify-between items-center mb-6",children:[g.jsx("h2",{className:"text-xs font-black uppercase tracking-[0.5em]",children:"PROFİL DÜZENLE"}),g.jsx("button",{onClick:()=>c(!1),children:g.jsx(Cs,{size:24})})]}),g.jsxs("div",{className:"space-y-6",children:[g.jsxs("div",{children:[g.jsx("label",{className:"text-[9px] font-black uppercase opacity-50 mb-2 block",children:"NICKNAME"}),g.jsx("input",{value:d.nickname||"",onChange:W=>p({...d,nickname:W.target.value}),placeholder:"NICKNAME",className:"w-full bg-black border border-white/5 p-4 rounded-2xl text-xs text-white outline-none"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"text-[9px] font-black uppercase opacity-50 mb-2 block",children:"PFP URL"}),g.jsx("input",{value:d.photoURL||"",onChange:W=>p({...d,photoURL:W.target.value}),placeholder:"https://...",className:"w-full bg-black border border-white/5 p-4 rounded-2xl text-xs text-white outline-none"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"text-[9px] font-black uppercase opacity-50 mb-2 block",children:"TECH STACK (virgülle ayır)"}),g.jsx("input",{value:d.languages&&Array.isArray(d.languages)?d.languages.join(", "):d.languages||"",onChange:W=>p({...d,languages:W.target.value}),placeholder:"react, node, tailwind",className:"w-full bg-black border border-white/5 p-4 rounded-2xl text-xs text-white outline-none"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"text-[9px] font-black uppercase opacity-50 mb-2 block",children:"BİO"}),g.jsx("textarea",{value:d.bio||"",onChange:W=>p({...d,bio:W.target.value}),className:"w-full bg-black border border-white/5 p-4 rounded-2xl text-xs text-white outline-none resize-none h-24"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"text-[9px] font-black uppercase opacity-50 mb-2 block",children:"BANNER URL"}),g.jsx("input",{value:d.banner||"",onChange:W=>p({...d,banner:W.target.value}),placeholder:"https://...",className:"w-full bg-black border border-white/5 p-4 rounded-2xl text-xs text-white outline-none"})]}),g.jsx("div",{children:g.jsxs("label",{className:"flex items-center gap-3 mt-3",children:[g.jsx("input",{type:"checkbox",checked:d.showFollowers!==!1,onChange:W=>p({...d,showFollowers:W.target.checked})}),g.jsx("span",{className:"text-[9px] font-black uppercase opacity-70",children:"Takipçi listesini göster"})]})}),g.jsxs("div",{className:"flex gap-3 pt-6",children:[g.jsx("button",{onClick:()=>c(!1),className:"flex-1 bg-white/5 py-4 rounded-2xl text-[9px] font-black uppercase",children:"İPTAL"}),g.jsx("button",{onClick:jn,className:"flex-1 bg-white text-black py-4 rounded-2xl text-[9px] font-black uppercase",children:"KAYDET"})]})]})]})}),m.show&&g.jsx("div",{className:"fixed inset-0 z-[2000] flex items-center justify-center bg-black/95 backdrop-blur-md",children:g.jsxs("div",{className:"bg-[#0a0a0a] border border-white/10 p-12 rounded-[4rem] text-center max-w-sm w-full",children:[g.jsx("h2",{className:"text-white font-black text-xs uppercase mb-4",children:m.title}),g.jsx("p",{className:"text-white/30 text-[9px] uppercase mb-10",children:m.msg}),g.jsx("button",{onClick:()=>y({show:!1}),className:"w-full bg-white text-black py-4 rounded-2xl text-[9px] font-black uppercase",children:"TAMAM"})]})}),k&&g.jsx("div",{className:"fixed inset-0 z-[2000] flex items-center justify-center bg-black/95 backdrop-blur-md",children:g.jsxs("div",{className:"bg-[#0a0a0a] border border-white/10 p-8 rounded-[3rem] max-w-md w-full",children:[g.jsxs("div",{className:"flex justify-between items-center mb-4",children:[g.jsx("h3",{className:"text-sm font-black uppercase",children:"TAKİPÇİLER"}),g.jsx("button",{onClick:()=>ie(!1),children:g.jsx(Cs,{size:20})})]}),g.jsxs("div",{className:"space-y-3 max-h-[60vh] overflow-auto",children:[S.length===0&&g.jsx("div",{className:"text-[9px] text-white/30",children:"Takipçi bulunamadı."}),S.map(W=>g.jsxs("div",{className:"flex items-center justify-between p-3 bg-[#0a0a0a] border border-white/5 rounded-xl",children:[g.jsxs("div",{children:[g.jsxs("div",{className:"font-black",children:["@",W.nickname]}),g.jsx("div",{className:"text-[9px] text-white/30",children:W.bio})]}),g.jsx("button",{onClick:()=>e(`/user/${W.nickname}`),className:"bg-white/5 px-3 py-2 rounded-2xl text-[9px] font-black",children:"GÖRÜNTÜLE"})]},W.id))]})]})}),ze&&g.jsx("div",{className:"fixed inset-0 z-[2000] flex items-center justify-center bg-black/95 backdrop-blur-md",children:g.jsxs("div",{className:"bg-[#0a0a0a] border border-white/10 p-8 rounded-[3rem] max-w-md w-full",children:[g.jsxs("div",{className:"flex justify-between items-center mb-4",children:[g.jsx("h3",{className:"text-sm font-black uppercase",children:"TAKİP EDİLENLER"}),g.jsx("button",{onClick:()=>It(!1),children:g.jsx(Cs,{size:20})})]}),g.jsxs("div",{className:"space-y-3 max-h-[60vh] overflow-auto",children:[C.length===0&&g.jsx("div",{className:"text-[9px] text-white/30",children:"Takip edilen kullanıcı bulunamadı."}),C.map(W=>g.jsxs("div",{className:"flex items-center justify-between p-3 bg-[#0a0a0a] border border-white/5 rounded-xl",children:[g.jsxs("div",{children:[g.jsxs("div",{className:"font-black",children:["@",W.nickname]}),g.jsx("div",{className:"text-[9px] text-white/30",children:W.bio})]}),g.jsx("button",{onClick:()=>e(`/user/${W.nickname}`),className:"bg-white/5 px-3 py-2 rounded-2xl text-[9px] font-black",children:"GÖRÜNTÜLE"})]},W.id))]})]})})]}):g.jsx("div",{className:"min-h-screen bg-black flex items-center justify-center text-red-500 font-black uppercase",children:"NODE_NOT_FOUND"})}function NV(){var P;const[t,e]=b.useState([]),[n,r]=b.useState(null),[i,s]=b.useState({}),[o,l]=b.useState({show:!1,title:"",msg:"",type:"info",onConfirm:null}),[u,c]=b.useState(24),[d,p]=b.useState({show:!1,target:null,followerNick:""}),m=dr();b.useEffect(()=>ln(me(K,"users"),_=>e(_.docs.map(T=>({id:T.id,...T.data()})))),[]);const y=async()=>{try{const _=(i.nickname||"").toUpperCase(),T=Array.isArray(i.languages)?i.languages:i.languages?i.languages.split(",").map(I=>I.trim()).filter(Boolean):[];await dn(he(K,"users",n.id),{...i,nickname:_,languages:T}),r(null),l({show:!0,title:"BAŞARILI",msg:"SİSTEM GÜNCELLENDİ.",type:"success"})}catch(_){console.error(_)}},A=_=>{if(i[_])s({...i,[_]:null});else{const T=new Date;T.setHours(T.getHours()+parseInt(u)),s({...i,[_]:T.toISOString()})}},R=_=>{l({show:!0,title:"EMİN MİSİNİZ?",msg:"KISITLAMALAR KALDIRILACAK.",type:"confirm",onConfirm:async()=>{await dn(he(K,"users",_),{banPostUntil:null,banProfileUntil:null}),l({show:!0,title:"TAMAMLANDI",msg:"ERİŞİM AÇILDI.",type:"success"})}})};return g.jsxs("div",{className:"min-h-screen bg-black pt-32 pb-20 px-10 text-white font-mono",children:[g.jsx("div",{className:"max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8",children:t.map(_=>g.jsxs("div",{className:"bg-[#0a0a0a] border border-white/5 p-8 rounded-[3rem] relative",children:[_.banner&&g.jsx("img",{src:_.banner,className:"absolute inset-0 w-full h-full object-cover opacity-20 rounded-[3rem]"}),g.jsxs("div",{className:"relative z-10",children:[g.jsxs("div",{className:"flex items-center gap-6 mb-8",children:[g.jsx("img",{src:_.photoURL,className:"w-16 h-16 rounded-2xl object-cover border-2 border-black"}),g.jsxs("div",{children:[g.jsxs("h3",{className:"text-sm font-black italic uppercase",children:["@",_.nickname]}),_.banner&&g.jsxs("p",{className:"text-[8px] text-white/40 mt-1",children:["BANNER: ",_.banner.substring(0,30),"..."]})]})]}),g.jsxs("div",{className:"flex gap-2",children:[g.jsx("button",{onClick:()=>{r(_),s(_)},className:"flex-1 bg-white/5 py-4 rounded-2xl text-[9px] font-black uppercase",children:"DÜZENLE"}),g.jsx("button",{onClick:()=>m(`/user/${_.nickname}`),className:"px-4 bg-white/5 py-4 rounded-2xl text-[9px] font-black uppercase",children:"PROFİLE GİT"}),g.jsx("button",{onClick:()=>p({show:!0,target:_,followerNick:""}),className:"px-4 bg-white/5 py-4 rounded-2xl text-[9px] font-black uppercase",children:"TAKİP EKLE"}),(_.banPostUntil||_.banProfileUntil)&&g.jsx("button",{onClick:()=>R(_.id),className:"px-5 bg-red-500/10 text-red-500 rounded-2xl",children:g.jsx(yV,{size:18})})]})]})]},_.id))}),n&&g.jsx("div",{className:"fixed inset-0 z-[1000] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-6",children:g.jsxs("div",{className:"bg-[#0a0a0a] border border-white/10 w-full max-w-4xl rounded-[4rem] p-12 overflow-y-auto max-h-[90vh]",children:[g.jsxs("div",{className:"flex justify-between items-center mb-10",children:[g.jsxs("h2",{className:"text-xs font-black uppercase tracking-[0.5em]",children:["YÖNET // ",n.nickname]}),g.jsx("button",{onClick:()=>r(null),children:g.jsx(Cs,{size:32})})]}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-10",children:[g.jsxs("div",{className:"space-y-4",children:[g.jsx("input",{value:i.nickname,onChange:_=>s({...i,nickname:_.target.value}),placeholder:"NICKNAME",className:"w-full bg-black border border-white/5 p-5 rounded-2xl text-xs text-white outline-none"}),g.jsx("input",{value:i.photoURL,onChange:_=>s({...i,photoURL:_.target.value}),placeholder:"PFP URL",className:"w-full bg-black border border-white/5 p-5 rounded-2xl text-xs text-white outline-none"}),g.jsx("input",{value:i.banner,onChange:_=>s({...i,banner:_.target.value}),placeholder:"BANNER URL",className:"w-full bg-black border border-white/5 p-5 rounded-2xl text-xs text-white outline-none"}),g.jsx("input",{value:i.languages&&Array.isArray(i.languages)?i.languages.join(", "):i.languages||"",onChange:_=>s({...i,languages:_.target.value}),placeholder:"TECH STACK (virgülle ayır)",className:"w-full bg-black border border-white/5 p-5 rounded-2xl text-xs text-white outline-none"}),g.jsx("textarea",{value:i.bio,onChange:_=>s({...i,bio:_.target.value}),placeholder:"BIO",className:"w-full bg-black border border-white/5 p-5 rounded-2xl text-xs text-white h-24 resize-none outline-none"})]}),g.jsxs("div",{className:"bg-white/5 p-8 rounded-[3rem] border border-white/5",children:[g.jsx("p",{className:"text-[9px] font-black uppercase mb-4 opacity-40",children:"SAAT GİRİŞİ"}),g.jsx("input",{type:"number",value:u,onChange:_=>c(_.target.value),className:"w-full bg-black p-4 rounded-xl mb-4 text-center font-black outline-none"}),g.jsxs("div",{className:"flex gap-2",children:[g.jsx("button",{onClick:()=>A("banPostUntil"),className:`flex-1 py-4 rounded-xl text-[9px] font-black border ${i.banPostUntil?"bg-white text-black":"border-white/10"}`,children:"POST BAN"}),g.jsx("button",{onClick:()=>A("banProfileUntil"),className:`flex-1 py-4 rounded-xl text-[9px] font-black border ${i.banProfileUntil?"bg-white text-black":"border-white/10"}`,children:"PROFIL BAN"})]})]})]}),g.jsx("button",{onClick:y,className:"w-full bg-white text-black py-6 rounded-[2.5rem] font-black text-xs uppercase mt-10",children:"KAYDET"})]})}),d.show&&g.jsx("div",{className:"fixed inset-0 z-[1000] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-6",children:g.jsxs("div",{className:"bg-[#0a0a0a] border border-white/10 w-full max-w-md rounded-[4rem] p-8",children:[g.jsxs("div",{className:"flex justify-between items-center mb-6",children:[g.jsxs("h2",{className:"text-xs font-black uppercase",children:["TAKİP EKLE // ",(P=d.target)==null?void 0:P.nickname]}),g.jsx("button",{onClick:()=>p({show:!1,target:null,followerNick:""}),children:g.jsx(Cs,{size:24})})]}),g.jsx("input",{value:d.followerNick,onChange:_=>p({...d,followerNick:_.target.value}),placeholder:"Follower nickname (ör. @NICK)",className:"w-full bg-black border border-white/5 p-4 rounded-2xl text-xs text-white outline-none mb-4"}),g.jsxs("div",{className:"flex gap-3",children:[g.jsx("button",{onClick:()=>p({show:!1,target:null,followerNick:""}),className:"flex-1 bg-white/5 py-3 rounded-2xl",children:"İPTAL"}),g.jsx("button",{onClick:async()=>{try{const _=(d.followerNick||"").replace(/^@/,"").toUpperCase(),T=await Rt(Le(me(K,"users"),qe("nickname","==",_)));if(T.empty)return l({show:!0,title:"HATA",msg:"KULLANICI BULUNAMADI."});const I={id:T.docs[0].id,...T.docs[0].data()},L=d.target,V=`${I.id}_${L.id}`;await Ks(he(K,"follows",V),{from:I.id,to:L.id,timestamp:Or()}),await dn(he(K,"users",L.id),{followersCount:Pf(1)}),l({show:!0,title:"TAMAMLANDI",msg:"TAKİP EKLENDİ."}),p({show:!1,target:null,followerNick:""})}catch(_){console.error(_),l({show:!0,title:"HATA",msg:"İŞLEM BAŞARISIZ."})}},className:"flex-1 bg-white py-3 rounded-2xl",children:"EKLE"})]})]})}),o.show&&g.jsx("div",{className:"fixed inset-0 z-[2000] flex items-center justify-center bg-black/95 backdrop-blur-md",children:g.jsxs("div",{className:"bg-[#0a0a0a] border border-white/10 p-12 rounded-[4rem] text-center max-w-sm w-full shadow-2xl",children:[o.type==="confirm"?g.jsx(AV,{className:"mx-auto mb-6",size:48}):g.jsx(mV,{className:"mx-auto mb-6",size:48}),g.jsx("h2",{className:"text-white font-black text-xs uppercase mb-4",children:o.title}),g.jsx("p",{className:"text-white/30 text-[9px] uppercase tracking-widest mb-10",children:o.msg}),g.jsxs("div",{className:"flex gap-3",children:[o.type==="confirm"&&g.jsx("button",{onClick:()=>l({show:!1}),className:"flex-1 bg-white/5 py-4 rounded-2xl text-[9px] font-black",children:"İPTAL"}),g.jsx("button",{onClick:()=>{o.onConfirm&&o.onConfirm(),l({show:!1})},className:"flex-1 bg-white text-black py-4 rounded-2xl text-[9px] font-black uppercase",children:"ONAYLA"})]})]})})]})}function bV(){const[t,e]=b.useState(!0),[n,r]=b.useState(""),[i,s]=b.useState(""),[o,l]=b.useState(""),[u,c]=b.useState(null),[d,p]=b.useState(null),m=dr(),y=async()=>{if(!n)return c("ÖNCE EMAIL ADRESİNİ GİRMELİSİN.");try{await DP(Q,n),p("ŞİFRE SIFIRLAMA BAĞLANTISI GÖNDERİLDİ.")}catch(R){c("HATA: "+R.message)}},A=async R=>{R.preventDefault(),c(null);try{if(t)await OP(Q,n,i),m("/");else{const P=o.trim().toUpperCase();if(P.length<3)return c("NICKNAME EN AZ 3 KARAKTER OLMALI.");const _=Le(me(K,"users"),qe("nickname","==",P));if(!(await Rt(_)).empty)return c("BU KOORDİNAT (NICKNAME) ZATEN BAŞKA BİR NODE'A AİT.");const I=await LP(Q,n,i);await iT(I.user,{displayName:P}),await Ks(he(K,"users",I.user.uid),{uid:I.user.uid,nickname:P,email:n,isAdmin:!1,photoURL:"https://api.dicebear.com/7.x/avataaars/svg?seed="+P,bio:"",banner:"",banPostUntil:null,banProfileUntil:null,joinedAt:new Date().toISOString()}),m("/")}}catch(P){c(P.message.toUpperCase())}};return g.jsxs("div",{className:"min-h-screen bg-black flex items-center justify-center p-6",children:[u&&g.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4",children:g.jsxs("div",{className:"bg-[#0a0a0a] border border-red-500/20 p-10 rounded-[3rem] max-w-sm w-full text-center shadow-[0_0_50px_rgba(255,0,0,0.1)]",children:[g.jsx(IV,{className:"text-red-500 mx-auto mb-6",size:48}),g.jsx("h2",{className:"text-white text-[12px] font-black uppercase tracking-widest mb-4",children:"SİSTEM HATASI"}),g.jsx("p",{className:"text-white/40 text-[10px] leading-relaxed mb-8",children:u}),g.jsx("button",{onClick:()=>c(null),className:"w-full bg-white text-black py-4 rounded-2xl font-black text-[10px] uppercase",children:"ANLAŞILDI"})]})}),d&&g.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4",children:g.jsxs("div",{className:"bg-[#0a0a0a] border border-white/10 p-10 rounded-[3rem] max-w-sm w-full text-center",children:[g.jsx(wV,{className:"text-white mx-auto mb-6",size:48}),g.jsx("p",{className:"text-white text-[10px] leading-relaxed mb-8",children:d}),g.jsx("button",{onClick:()=>p(null),className:"w-full bg-white text-black py-4 rounded-2xl font-black text-[10px] uppercase",children:"TAMAM"})]})}),g.jsxs("div",{className:"w-full max-w-[400px] space-y-8 animate-in fade-in zoom-in duration-500",children:[g.jsxs("div",{className:"text-center space-y-4",children:[g.jsx(kV,{size:48,className:"mx-auto text-white",fill:"white"}),g.jsx("h1",{className:"text-2xl font-black tracking-[0.5em] text-white uppercase",children:"ZAHID"})]}),g.jsxs("form",{onSubmit:A,className:"space-y-4",children:[!t&&g.jsx("input",{required:!0,type:"text",placeholder:"NICKNAME",value:o,onChange:R=>l(R.target.value),className:"w-full bg-[#0a0a0a] border border-white/5 p-5 rounded-2xl text-[10px] text-white font-black uppercase outline-none focus:border-white/20"}),g.jsx("input",{required:!0,type:"email",placeholder:"EMAIL",value:n,onChange:R=>r(R.target.value),className:"w-full bg-[#0a0a0a] border border-white/5 p-5 rounded-2xl text-[10px] text-white font-black uppercase outline-none focus:border-white/20"}),g.jsx("input",{required:!0,type:"password",placeholder:"PASSWORD",value:i,onChange:R=>s(R.target.value),className:"w-full bg-[#0a0a0a] border border-white/5 p-5 rounded-2xl text-[10px] text-white font-black uppercase outline-none focus:border-white/20"}),g.jsx("button",{type:"submit",className:"w-full bg-white text-black py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:invert transition-all",children:t?"ENTRY PROTOCOL":"INITIALIZE NODE"})]}),g.jsxs("div",{className:"flex flex-col items-center gap-4",children:[g.jsx("button",{onClick:()=>e(!t),className:"text-[9px] font-black text-white/20 uppercase tracking-widest hover:text-white transition-all",children:t?"CREATE NEW ACCOUNT":"BACK TO LOGIN"}),t&&g.jsx("button",{onClick:y,className:"text-[9px] font-black text-red-500/40 uppercase tracking-widest hover:text-red-500 transition-all",children:"SİFREMİ UNUTTUM"})]})]})]})}function DV(){const t=dr(),[e,n]=b.useState([]),[r,i]=b.useState({show:!1,title:"",msg:"",onConfirm:null}),[s,o]=b.useState([]);b.useEffect(()=>{if(!Q.currentUser)return;const y=Le(me(K,"notifications"),qe("to","==",Q.currentUser.uid),ki("timestamp","desc"));return ln(y,A=>{const R=A.docs.map(P=>({id:P.id,...P.data()}));n(R),A.docs.forEach(P=>{P.data().read||dn(he(K,"notifications",P.id),{read:!0})})})},[]);const l=y=>{o(A=>A.filter(R=>R.id!==y))},u=y=>{const A=Date.now(),R=5e3,P=setInterval(()=>{const T=Date.now()-A,I=Math.max(0,100-Math.floor(T/R*100));o(L=>L.map(V=>V.id===y.id?{...V,progress:I}:V))},100),_=setTimeout(()=>{clearInterval(P),l(y.id)},R);o(T=>T.map(I=>I.id===y.id?{...I,intervalId:P,timeoutId:_}:I))},c=async y=>{try{const A=he(K,"notifications",y),P=e.find(T=>T.id===y)||(await ys(A)).data();if(!P)return;await Pa(A);const _={id:y,data:P,progress:100,type:"single"};o(T=>[...T,_]),u(_)}catch(A){console.error(A)}},d=async y=>{const A=s.find(R=>R.id===y);if(A){try{A.type==="all"?await Promise.all(A.data.map(R=>Ks(he(K,"notifications",R.id),R.data))):await Ks(he(K,"notifications",y),A.data)}catch(R){console.error(R)}clearTimeout(A.timeoutId),clearInterval(A.intervalId),l(y)}},p=async()=>{try{const y=e;if(y.length===0)return;const A=y.map(V=>({id:V.id,data:V}));await Promise.all(y.map(V=>Pa(he(K,"notifications",V.id))));const P={id:"all-"+Date.now(),data:A,progress:100,type:"all"};o(V=>[...V,P]);const _=Date.now(),T=5e3,I=setInterval(()=>{const V=Date.now()-_,F=Math.max(0,100-Math.floor(V/T*100));o(E=>E.map(v=>v.id===P.id?{...v,progress:F}:v))},100),L=setTimeout(()=>{clearInterval(I),l(P.id)},T);o(V=>V.map(F=>F.id===P.id?{...F,intervalId:I,timeoutId:L}:F))}catch(y){console.error(y)}},m=()=>{i({show:!0,title:"EMİN MİSİNİZ?",msg:"TÜM BİLDİRİMLER SİLİNECEK.",onConfirm:()=>{p(),i({show:!1})}})};return g.jsxs("div",{className:"min-h-screen bg-[#0a0a0a] pt-32 px-10 text-white font-mono",children:[g.jsxs("div",{className:"max-w-2xl mx-auto",children:[g.jsxs("div",{className:"flex justify-between items-center mb-12",children:[g.jsxs("h2",{className:"text-[10px] font-black uppercase tracking-[0.5em] flex items-center gap-4 text-white/20",children:[g.jsx(w1,{size:16})," SİNYAL_GEÇMİŞİ"]}),e.length>0&&g.jsx("button",{onClick:m,className:"text-[8px] font-black text-red-500/50 hover:text-red-500 uppercase tracking-widest transition-all",children:"TÜMÜNÜ TEMİZLE"})]}),g.jsxs("div",{className:"space-y-4",children:[e.map(y=>{var A;return g.jsxs("div",{className:"bg-[#0a0a0a] border border-white/5 p-6 rounded-[2.5rem] flex items-center justify-between group",children:[g.jsxs("div",{className:"flex items-center gap-6",children:[g.jsx("div",{className:"w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center",children:y.type==="LIKE"?g.jsx(jm,{size:20,className:"text-white fill-white"}):y.type==="COMMENT"?g.jsx(Bm,{size:20,className:"text-white"}):y.type==="FOLLOW"?g.jsx(E1,{size:20,className:"text-white"}):g.jsx(pV,{size:20,className:"text-white"})}),g.jsxs("div",{children:[g.jsxs("p",{className:"text-[11px] font-black uppercase italic tracking-tighter",children:[g.jsxs("button",{onClick:()=>t(`/user/${y.from.toUpperCase()}`),className:"text-white/40 hover:text-white",children:["@",y.from]})," ",y.type==="LIKE"?"SİNYALİNİ BEĞENDİ":y.type==="COMMENT"?"SİNYALİNE YANIT VERDİ":y.type==="FOLLOW"?"SENİ TAKİP ETTİ":y.type==="MENTION"?"SENİ BAHSETTİ":"BİLDİRİM"]}),g.jsxs("p",{className:"text-[8px] text-white/10 mt-1 uppercase",children:["LOG_TIME: ",(A=y.timestamp)!=null&&A.toDate?y.timestamp.toDate().toLocaleTimeString():"—"]}),y.postId&&g.jsx("button",{onClick:()=>t(`/post/${y.postId}`),className:"mt-2 text-[8px] font-black text-white/20 hover:text-white uppercase",children:"POSTA GİT"})]})]}),g.jsx("button",{onClick:()=>i({show:!0,title:"EMİN MİSİNİZ?",msg:"BİLDİRİM SİLİNECEK.",onConfirm:()=>{c(y.id),i({show:!1})}}),className:"opacity-0 group-hover:opacity-100 text-white/10 hover:text-white transition-all",children:g.jsx(Cs,{size:18})})]},y.id)}),e.length===0&&g.jsx("div",{className:"text-center py-40 border border-dashed border-white/5 rounded-[4rem]",children:g.jsx("p",{className:"text-[10px] opacity-20 font-black uppercase tracking-widest italic",children:"Sinyal verisi bulunamadı."})})]})]}),r.show&&g.jsx("div",{className:"fixed inset-0 z-[2000] flex items-center justify-center bg-black/95 backdrop-blur-md",children:g.jsxs("div",{className:"bg-[#0a0a0a] border border-white/10 p-12 rounded-[4rem] text-center max-w-sm w-full shadow-2xl",children:[g.jsx("h2",{className:"text-white font-black text-xs uppercase mb-4",children:r.title}),g.jsx("p",{className:"text-white/30 text-[9px] uppercase tracking-widest mb-6",children:r.msg}),g.jsxs("div",{className:"flex gap-3",children:[g.jsx("button",{onClick:()=>i({show:!1}),className:"flex-1 bg-white/5 py-4 rounded-2xl text-[9px] font-black",children:"İPTAL"}),g.jsx("button",{onClick:()=>{r.onConfirm&&r.onConfirm(),i({show:!1})},className:"flex-1 bg-white text-black py-4 rounded-2xl text-[9px] font-black uppercase",children:"ONAYLA"})]})]})}),g.jsx("div",{className:"fixed bottom-6 right-6 flex flex-col gap-3 z-[3000]",children:s.map(y=>g.jsxs("div",{className:"bg-[#0a0a0a] border border-white/10 p-4 rounded-2xl shadow-lg w-[320px]",children:[g.jsxs("div",{className:"flex justify-between items-center gap-4",children:[g.jsx("div",{className:"text-[10px] font-black uppercase",children:y.type==="all"?"TÜM BİLDİRİMLER SİLİNDİ":"BİLDİRİM SİLİNDİ"}),g.jsx("div",{className:"flex items-center gap-2",children:g.jsx("button",{onClick:()=>d(y.id),className:"text-[10px] font-black bg-white/5 px-3 py-1 rounded-2xl",children:"GERİ AL"})})]}),g.jsx("div",{className:"w-full bg-white/5 h-2 rounded-full mt-3 overflow-hidden",children:g.jsx("div",{style:{width:`${y.progress}%`},className:"bg-white h-2 transition-all"})})]},y.id))})]})}function LV(){const t=hr(),e=dr(),[n,r]=b.useState(""),[i,s]=b.useState([]),[o,l]=b.useState([]),[u,c]=b.useState(!0);return b.useEffect(()=>{const d=new URLSearchParams(t.search).get("q")||"";if(r(d),!d){s([]),l([]),c(!1);return}(async()=>{c(!0);try{if(d.startsWith("@")){const m=d.replace(/^@/,"").toUpperCase(),y=Le(me(K,"users"),qe("nickname","==",m)),A=await Rt(y);s(A.docs.map(R=>({id:R.id,...R.data()}))),l([])}else{const m=d.toUpperCase();try{const R=Le(me(K,"users"),ki("nickname"),tL(m),nL(m+"")),P=await Rt(R);if(!P.empty)s(P.docs.map(_=>({id:_.id,..._.data()})));else{const T=(await Rt(Le(me(K,"users")))).docs.map(I=>({id:I.id,...I.data()})).filter(I=>I.nickname&&I.nickname.includes(d.toUpperCase())||I.displayName&&I.displayName.toLowerCase().includes(d.toLowerCase()));s(T)}}catch(R){console.error(R)}const A=(await Rt(Le(me(K,"posts"),ki("timestamp","desc")))).docs.map(R=>({id:R.id,...R.data()})).filter(R=>R.text&&R.text.toLowerCase().includes(d.toLowerCase()));l(A)}}catch(m){console.error(m)}c(!1)})()},[t.search]),g.jsx("div",{className:"min-h-screen bg-black pt-32 px-10 pb-40 font-mono text-white",children:g.jsxs("div",{className:"max-w-3xl mx-auto",children:[g.jsxs("h2",{className:"text-[10px] font-black uppercase text-white/30 mb-6",children:['Search results for "',n,'"']}),u?g.jsx("div",{children:"Loading..."}):g.jsxs(g.Fragment,{children:[g.jsxs("div",{children:[g.jsx("h3",{className:"text-[9px] font-black text-white/40 uppercase mb-3",children:"Users"}),i.length===0&&g.jsx("div",{className:"text-[9px] text-white/20 mb-6",children:"No users found"}),i.map(d=>g.jsxs("div",{className:"bg-[#0a0a0a] border border-white/5 p-4 rounded-2xl mb-3 flex items-center justify-between",children:[g.jsxs("div",{children:[g.jsxs("div",{className:"font-black",children:["@",d.nickname]}),g.jsx("div",{className:"text-[9px] text-white/30",children:d.bio})]}),g.jsx("button",{onClick:()=>e(`/user/${d.nickname}`),className:"bg-white/5 px-3 py-2 rounded-2xl font-black text-[9px]",children:"GÖRÜNTÜLE"})]},d.id))]}),g.jsxs("div",{className:"mt-8",children:[g.jsx("h3",{className:"text-[9px] font-black text-white/40 uppercase mb-3",children:"Posts"}),o.length===0&&g.jsx("div",{className:"text-[9px] text-white/20",children:"No posts found"}),o.map(d=>g.jsxs("div",{className:"bg-[#0a0a0a] border border-white/5 p-6 rounded-2xl mb-3",children:[g.jsxs("div",{className:"text-[10px] font-black",children:["@",d.author]}),g.jsx("div",{className:"text-sm text-white/70 mt-2",children:d.text}),g.jsx("div",{className:"mt-2 flex justify-end",children:g.jsx("button",{onClick:()=>e(`/post/${d.id}`),className:"bg-white/5 px-3 py-2 rounded-2xl text-[9px] font-black",children:"GÖRÜNTÜLE"})})]},d.id))]})]})]})})}function OV(){var d,p,m;const{id:t}=h0(),e=dr(),[n,r]=b.useState(null),[i,s]=b.useState(!0);b.useEffect(()=>{const y=he(K,"posts",t);return ln(y,R=>{if(!R.exists()){r(null),s(!1);return}r({id:R.id,...R.data()}),s(!1)},R=>{console.error(R),s(!1)})},[t]);const[o,l]=b.useState({show:!1,title:"",msg:"",onConfirm:null}),u=()=>{l({show:!0,title:"EMİN MİSİNİZ?",msg:"POST SİLİNECEK.",onConfirm:async()=>{await Pa(he(K,"posts",t)),e("/")}})},c=y=>{n&&l({show:!0,title:"EMİN MİSİNİZ?",msg:"YORUM SİLİNECEK.",onConfirm:async()=>{const A=(n.comments||[]).filter(R=>R.id!==y);await dn(he(K,"posts",t),{comments:A})}})};return i?g.jsx("div",{className:"min-h-screen bg-black flex items-center justify-center text-[10px] font-black text-white uppercase tracking-[0.5em]",children:"Yükleniyor..."}):n?g.jsxs("div",{className:"min-h-screen bg-black pt-32 px-6 pb-20 font-mono text-white",children:[g.jsx("div",{className:"max-w-2xl mx-auto space-y-12",children:g.jsxs("div",{className:"bg-[#0a0a0a] border border-white/5 p-8 rounded-[3.5rem]",children:[g.jsxs("div",{className:"flex justify-between items-center mb-6",children:[g.jsxs("div",{className:"flex items-center gap-4",children:[g.jsx("img",{src:n.authorPfp,className:"w-12 h-12 rounded-2xl"}),g.jsxs("span",{className:"font-black text-xs uppercase cursor-pointer",onClick:()=>e(`/user/${n.author}`),children:["@",n.author]})]}),(((d=Q.currentUser)==null?void 0:d.uid)===n.uid||Q.currentUser&&Q.currentUser.email==="info@zahid.life")&&g.jsx("button",{onClick:u,className:"text-white/10 hover:text-red-500 transition-all",children:g.jsx(Xu,{size:20})})]}),g.jsx("p",{className:"text-sm text-white/70 mb-8",children:n.text}),n.imageURL&&g.jsx("img",{src:n.imageURL,className:"w-full rounded-xl mb-6 object-cover"}),g.jsx("div",{className:"flex gap-6 opacity-30",children:g.jsx("div",{className:"flex items-center gap-2",children:((p=n.likes)==null?void 0:p.length)||0})}),g.jsx("div",{className:"mt-6 space-y-4",children:(m=n.comments)==null?void 0:m.map(y=>{var A;return g.jsxs("div",{className:"text-xs bg-white/5 p-4 rounded-2xl flex justify-between items-start gap-4",children:[g.jsxs("div",{children:[g.jsxs("div",{className:"opacity-30 mr-2",children:[y.author,":"]}),g.jsx("div",{children:y.text}),y.imageURL&&g.jsx("img",{src:y.imageURL,className:"mt-2 w-full rounded-lg object-cover"})]}),g.jsx("div",{children:(((A=Q.currentUser)==null?void 0:A.uid)===y.uid||Q.currentUser&&Q.currentUser.email==="info@zahid.life")&&g.jsx("button",{onClick:()=>c(y.id),className:"text-white/20 hover:text-white",children:g.jsx(Xu,{size:16})})})]},y.id)})})]})}),o.show&&g.jsx("div",{className:"fixed inset-0 z-[2000] flex items-center justify-center bg-black/95 backdrop-blur-md",children:g.jsxs("div",{className:"bg-[#0a0a0a] border border-white/10 p-12 rounded-[4rem] text-center max-w-sm w-full shadow-2xl",children:[g.jsx("h2",{className:"text-white font-black text-xs uppercase mb-4",children:o.title}),g.jsx("p",{className:"text-white/30 text-[9px] uppercase mb-10",children:o.msg}),g.jsxs("div",{className:"flex gap-3",children:[g.jsx("button",{onClick:()=>l({show:!1}),className:"flex-1 bg-white/5 py-4 rounded-2xl text-[9px] font-black",children:"İPTAL"}),g.jsx("button",{onClick:()=>{o.onConfirm&&o.onConfirm(),l({show:!1})},className:"flex-1 bg-white text-black py-4 rounded-2xl text-[9px] font-black uppercase",children:"ONAYLA"})]})]})})]}):g.jsx("div",{className:"min-h-screen bg-black flex items-center justify-center text-red-500 font-black uppercase",children:"POST_NOT_FOUND"})}function VV(){const[t,e]=b.useState(null),[n,r]=b.useState(!0);return b.useEffect(()=>Q.onAuthStateChanged(i=>{e(i),r(!1)}),[]),n?null:g.jsx($x,{children:g.jsxs("div",{className:"min-h-screen bg-black text-white",children:[t&&g.jsx(xV,{}),t&&g.jsx(RV,{}),g.jsxs(vx,{children:[g.jsx(Ir,{path:"/",element:t?g.jsx(CV,{}):g.jsx(pi,{to:"/auth"})}),g.jsx(Ir,{path:"/auth",element:t?g.jsx(pi,{to:"/"}):g.jsx(bV,{})}),g.jsx(Ir,{path:"/user/:username",element:t?g.jsx(PV,{}):g.jsx(pi,{to:"/auth"})}),g.jsx(Ir,{path:"/admin",element:(t==null?void 0:t.email)==="info@zahid.life"?g.jsx(NV,{}):g.jsx(pi,{to:"/"})}),g.jsx(Ir,{path:"/notifications",element:t?g.jsx(DV,{}):g.jsx(pi,{to:"/auth"})}),g.jsx(Ir,{path:"/search",element:t?g.jsx(LV,{}):g.jsx(pi,{to:"/auth"})}),g.jsx(Ir,{path:"/post/:id",element:t?g.jsx(OV,{}):g.jsx(pi,{to:"/auth"})})]})]})})}ld.createRoot(document.getElementById("root")).render(g.jsx(hS.StrictMode,{children:g.jsx(VV,{})}));
