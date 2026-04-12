(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function m0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var g0={exports:{}},ic={},_0={exports:{}},Ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var so=Symbol.for("react.element"),C1=Symbol.for("react.portal"),A1=Symbol.for("react.fragment"),R1=Symbol.for("react.strict_mode"),P1=Symbol.for("react.profiler"),L1=Symbol.for("react.provider"),N1=Symbol.for("react.context"),I1=Symbol.for("react.forward_ref"),D1=Symbol.for("react.suspense"),U1=Symbol.for("react.memo"),F1=Symbol.for("react.lazy"),Gh=Symbol.iterator;function O1(t){return t===null||typeof t!="object"?null:(t=Gh&&t[Gh]||t["@@iterator"],typeof t=="function"?t:null)}var v0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x0=Object.assign,y0={};function Qs(t,e,n){this.props=t,this.context=e,this.refs=y0,this.updater=n||v0}Qs.prototype.isReactComponent={};Qs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function S0(){}S0.prototype=Qs.prototype;function Mf(t,e,n){this.props=t,this.context=e,this.refs=y0,this.updater=n||v0}var Ef=Mf.prototype=new S0;Ef.constructor=Mf;x0(Ef,Qs.prototype);Ef.isPureReactComponent=!0;var Wh=Array.isArray,M0=Object.prototype.hasOwnProperty,wf={current:null},E0={key:!0,ref:!0,__self:!0,__source:!0};function w0(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)M0.call(e,i)&&!E0.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:so,type:t,key:s,ref:a,props:r,_owner:wf.current}}function k1(t,e){return{$$typeof:so,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Tf(t){return typeof t=="object"&&t!==null&&t.$$typeof===so}function B1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var jh=/\/+/g;function bc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?B1(""+t.key):e.toString(36)}function ol(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case so:case C1:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+bc(a,0):i,Wh(r)?(n="",t!=null&&(n=t.replace(jh,"$&/")+"/"),ol(r,e,n,"",function(c){return c})):r!=null&&(Tf(r)&&(r=k1(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(jh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Wh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+bc(s,o);a+=ol(s,e,n,l,r)}else if(l=O1(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+bc(s,o++),a+=ol(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function mo(t,e,n){if(t==null)return t;var i=[],r=0;return ol(t,i,"","",function(s){return e.call(n,s,r++)}),i}function z1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var mn={current:null},ll={transition:null},H1={ReactCurrentDispatcher:mn,ReactCurrentBatchConfig:ll,ReactCurrentOwner:wf};Ze.Children={map:mo,forEach:function(t,e,n){mo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return mo(t,function(){e++}),e},toArray:function(t){return mo(t,function(e){return e})||[]},only:function(t){if(!Tf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ze.Component=Qs;Ze.Fragment=A1;Ze.Profiler=P1;Ze.PureComponent=Mf;Ze.StrictMode=R1;Ze.Suspense=D1;Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H1;Ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=x0({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=wf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)M0.call(e,l)&&!E0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:so,type:t.type,key:r,ref:s,props:i,_owner:a}};Ze.createContext=function(t){return t={$$typeof:N1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:L1,_context:t},t.Consumer=t};Ze.createElement=w0;Ze.createFactory=function(t){var e=w0.bind(null,t);return e.type=t,e};Ze.createRef=function(){return{current:null}};Ze.forwardRef=function(t){return{$$typeof:I1,render:t}};Ze.isValidElement=Tf;Ze.lazy=function(t){return{$$typeof:F1,_payload:{_status:-1,_result:t},_init:z1}};Ze.memo=function(t,e){return{$$typeof:U1,type:t,compare:e===void 0?null:e}};Ze.startTransition=function(t){var e=ll.transition;ll.transition={};try{t()}finally{ll.transition=e}};Ze.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ze.useCallback=function(t,e){return mn.current.useCallback(t,e)};Ze.useContext=function(t){return mn.current.useContext(t)};Ze.useDebugValue=function(){};Ze.useDeferredValue=function(t){return mn.current.useDeferredValue(t)};Ze.useEffect=function(t,e){return mn.current.useEffect(t,e)};Ze.useId=function(){return mn.current.useId()};Ze.useImperativeHandle=function(t,e,n){return mn.current.useImperativeHandle(t,e,n)};Ze.useInsertionEffect=function(t,e){return mn.current.useInsertionEffect(t,e)};Ze.useLayoutEffect=function(t,e){return mn.current.useLayoutEffect(t,e)};Ze.useMemo=function(t,e){return mn.current.useMemo(t,e)};Ze.useReducer=function(t,e,n){return mn.current.useReducer(t,e,n)};Ze.useRef=function(t){return mn.current.useRef(t)};Ze.useState=function(t){return mn.current.useState(t)};Ze.useSyncExternalStore=function(t,e,n){return mn.current.useSyncExternalStore(t,e,n)};Ze.useTransition=function(){return mn.current.useTransition()};Ze.version="18.2.0";_0.exports=Ze;var De=_0.exports;const ct=m0(De);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V1=De,G1=Symbol.for("react.element"),W1=Symbol.for("react.fragment"),j1=Object.prototype.hasOwnProperty,X1=V1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$1={key:!0,ref:!0,__self:!0,__source:!0};function T0(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)j1.call(e,i)&&!$1.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:G1,type:t,key:s,ref:a,props:r,_owner:X1.current}}ic.Fragment=W1;ic.jsx=T0;ic.jsxs=T0;g0.exports=ic;var w=g0.exports,Du={},b0={exports:{}},In={},C0={exports:{}},A0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,G){var te=H.length;H.push(G);e:for(;0<te;){var ie=te-1>>>1,ae=H[ie];if(0<r(ae,G))H[ie]=G,H[te]=ae,te=ie;else break e}}function n(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var G=H[0],te=H.pop();if(te!==G){H[0]=te;e:for(var ie=0,ae=H.length,ve=ae>>>1;ie<ve;){var Xe=2*(ie+1)-1,He=H[Xe],L=Xe+1,Z=H[L];if(0>r(He,te))L<ae&&0>r(Z,He)?(H[ie]=Z,H[L]=te,ie=L):(H[ie]=He,H[Xe]=te,ie=Xe);else if(L<ae&&0>r(Z,te))H[ie]=Z,H[L]=te,ie=L;else break e}}return G}function r(H,G){var te=H.sortIndex-G.sortIndex;return te!==0?te:H.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],h=1,f=null,u=3,p=!1,_=!1,S=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(H){for(var G=n(c);G!==null;){if(G.callback===null)i(c);else if(G.startTime<=H)i(c),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(c)}}function M(H){if(S=!1,y(H),!_)if(n(l)!==null)_=!0,P(b);else{var G=n(c);G!==null&&O(M,G.startTime-H)}}function b(H,G){_=!1,S&&(S=!1,d(v),v=-1),p=!0;var te=u;try{for(y(G),f=n(l);f!==null&&(!(f.expirationTime>G)||H&&!I());){var ie=f.callback;if(typeof ie=="function"){f.callback=null,u=f.priorityLevel;var ae=ie(f.expirationTime<=G);G=t.unstable_now(),typeof ae=="function"?f.callback=ae:f===n(l)&&i(l),y(G)}else i(l);f=n(l)}if(f!==null)var ve=!0;else{var Xe=n(c);Xe!==null&&O(M,Xe.startTime-G),ve=!1}return ve}finally{f=null,u=te,p=!1}}var C=!1,R=null,v=-1,T=5,W=-1;function I(){return!(t.unstable_now()-W<T)}function V(){if(R!==null){var H=t.unstable_now();W=H;var G=!0;try{G=R(!0,H)}finally{G?U():(C=!1,R=null)}}else C=!1}var U;if(typeof m=="function")U=function(){m(V)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,F=$.port2;$.port1.onmessage=V,U=function(){F.postMessage(null)}}else U=function(){g(V,0)};function P(H){R=H,C||(C=!0,U())}function O(H,G){v=g(function(){H(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,P(b))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(H){switch(u){case 1:case 2:case 3:var G=3;break;default:G=u}var te=u;u=G;try{return H()}finally{u=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,G){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var te=u;u=H;try{return G()}finally{u=te}},t.unstable_scheduleCallback=function(H,G,te){var ie=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?ie+te:ie):te=ie,H){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=te+ae,H={id:h++,callback:G,priorityLevel:H,startTime:te,expirationTime:ae,sortIndex:-1},te>ie?(H.sortIndex=te,e(c,H),n(l)===null&&H===n(c)&&(S?(d(v),v=-1):S=!0,O(M,te-ie))):(H.sortIndex=ae,e(l,H),_||p||(_=!0,P(b))),H},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(H){var G=u;return function(){var te=u;u=G;try{return H.apply(this,arguments)}finally{u=te}}}})(A0);C0.exports=A0;var Y1=C0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R0=De,Nn=Y1;function le(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var P0=new Set,Oa={};function Zr(t,e){zs(t,e),zs(t+"Capture",e)}function zs(t,e){for(Oa[t]=e,t=0;t<e.length;t++)P0.add(e[t])}var Ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uu=Object.prototype.hasOwnProperty,q1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xh={},$h={};function K1(t){return Uu.call($h,t)?!0:Uu.call(Xh,t)?!1:q1.test(t)?$h[t]=!0:(Xh[t]=!0,!1)}function Z1(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Q1(t,e,n,i){if(e===null||typeof e>"u"||Z1(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function gn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Yt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Yt[t]=new gn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Yt[e]=new gn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Yt[t]=new gn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Yt[t]=new gn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Yt[t]=new gn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Yt[t]=new gn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Yt[t]=new gn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Yt[t]=new gn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Yt[t]=new gn(t,5,!1,t.toLowerCase(),null,!1,!1)});var bf=/[\-:]([a-z])/g;function Cf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(bf,Cf);Yt[e]=new gn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(bf,Cf);Yt[e]=new gn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(bf,Cf);Yt[e]=new gn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Yt[t]=new gn(t,1,!1,t.toLowerCase(),null,!1,!1)});Yt.xlinkHref=new gn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Yt[t]=new gn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Af(t,e,n,i){var r=Yt.hasOwnProperty(e)?Yt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Q1(e,n,r,i)&&(n=null),i||r===null?K1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Hi=R0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,go=Symbol.for("react.element"),xs=Symbol.for("react.portal"),ys=Symbol.for("react.fragment"),Rf=Symbol.for("react.strict_mode"),Fu=Symbol.for("react.profiler"),L0=Symbol.for("react.provider"),N0=Symbol.for("react.context"),Pf=Symbol.for("react.forward_ref"),Ou=Symbol.for("react.suspense"),ku=Symbol.for("react.suspense_list"),Lf=Symbol.for("react.memo"),Zi=Symbol.for("react.lazy"),I0=Symbol.for("react.offscreen"),Yh=Symbol.iterator;function sa(t){return t===null||typeof t!="object"?null:(t=Yh&&t[Yh]||t["@@iterator"],typeof t=="function"?t:null)}var wt=Object.assign,Cc;function ya(t){if(Cc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cc=e&&e[1]||""}return`
`+Cc+t}var Ac=!1;function Rc(t,e){if(!t||Ac)return"";Ac=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Ac=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ya(t):""}function J1(t){switch(t.tag){case 5:return ya(t.type);case 16:return ya("Lazy");case 13:return ya("Suspense");case 19:return ya("SuspenseList");case 0:case 2:case 15:return t=Rc(t.type,!1),t;case 11:return t=Rc(t.type.render,!1),t;case 1:return t=Rc(t.type,!0),t;default:return""}}function Bu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ys:return"Fragment";case xs:return"Portal";case Fu:return"Profiler";case Rf:return"StrictMode";case Ou:return"Suspense";case ku:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case N0:return(t.displayName||"Context")+".Consumer";case L0:return(t._context.displayName||"Context")+".Provider";case Pf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Lf:return e=t.displayName||null,e!==null?e:Bu(t.type)||"Memo";case Zi:e=t._payload,t=t._init;try{return Bu(t(e))}catch{}}return null}function ev(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bu(e);case 8:return e===Rf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function D0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function tv(t){var e=D0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _o(t){t._valueTracker||(t._valueTracker=tv(t))}function U0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=D0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Al(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function zu(t,e){var n=e.checked;return wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function qh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function F0(t,e){e=e.checked,e!=null&&Af(t,"checked",e,!1)}function Hu(t,e){F0(t,e);var n=gr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vu(t,e.type,gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Kh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vu(t,e,n){(e!=="number"||Al(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Sa=Array.isArray;function Ns(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+gr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Gu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(le(91));return wt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Zh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(le(92));if(Sa(n)){if(1<n.length)throw Error(le(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gr(n)}}function O0(t,e){var n=gr(e.value),i=gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Qh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function k0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?k0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var vo,B0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(vo=vo||document.createElement("div"),vo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=vo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ka(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ba={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nv=["Webkit","ms","Moz","O"];Object.keys(ba).forEach(function(t){nv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ba[e]=ba[t]})});function z0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ba.hasOwnProperty(t)&&ba[t]?(""+e).trim():e+"px"}function H0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=z0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var iv=wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ju(t,e){if(e){if(iv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(le(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(le(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(le(61))}if(e.style!=null&&typeof e.style!="object")throw Error(le(62))}}function Xu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $u=null;function Nf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yu=null,Is=null,Ds=null;function Jh(t){if(t=lo(t)){if(typeof Yu!="function")throw Error(le(280));var e=t.stateNode;e&&(e=lc(e),Yu(t.stateNode,t.type,e))}}function V0(t){Is?Ds?Ds.push(t):Ds=[t]:Is=t}function G0(){if(Is){var t=Is,e=Ds;if(Ds=Is=null,Jh(t),e)for(t=0;t<e.length;t++)Jh(e[t])}}function W0(t,e){return t(e)}function j0(){}var Pc=!1;function X0(t,e,n){if(Pc)return t(e,n);Pc=!0;try{return W0(t,e,n)}finally{Pc=!1,(Is!==null||Ds!==null)&&(j0(),G0())}}function Ba(t,e){var n=t.stateNode;if(n===null)return null;var i=lc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(le(231,e,typeof n));return n}var qu=!1;if(Ui)try{var aa={};Object.defineProperty(aa,"passive",{get:function(){qu=!0}}),window.addEventListener("test",aa,aa),window.removeEventListener("test",aa,aa)}catch{qu=!1}function rv(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Ca=!1,Rl=null,Pl=!1,Ku=null,sv={onError:function(t){Ca=!0,Rl=t}};function av(t,e,n,i,r,s,a,o,l){Ca=!1,Rl=null,rv.apply(sv,arguments)}function ov(t,e,n,i,r,s,a,o,l){if(av.apply(this,arguments),Ca){if(Ca){var c=Rl;Ca=!1,Rl=null}else throw Error(le(198));Pl||(Pl=!0,Ku=c)}}function Qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function $0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ep(t){if(Qr(t)!==t)throw Error(le(188))}function lv(t){var e=t.alternate;if(!e){if(e=Qr(t),e===null)throw Error(le(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return ep(r),t;if(s===i)return ep(r),e;s=s.sibling}throw Error(le(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(le(189))}}if(n.alternate!==i)throw Error(le(190))}if(n.tag!==3)throw Error(le(188));return n.stateNode.current===n?t:e}function Y0(t){return t=lv(t),t!==null?q0(t):null}function q0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=q0(t);if(e!==null)return e;t=t.sibling}return null}var K0=Nn.unstable_scheduleCallback,tp=Nn.unstable_cancelCallback,cv=Nn.unstable_shouldYield,uv=Nn.unstable_requestPaint,Pt=Nn.unstable_now,dv=Nn.unstable_getCurrentPriorityLevel,If=Nn.unstable_ImmediatePriority,Z0=Nn.unstable_UserBlockingPriority,Ll=Nn.unstable_NormalPriority,fv=Nn.unstable_LowPriority,Q0=Nn.unstable_IdlePriority,rc=null,hi=null;function hv(t){if(hi&&typeof hi.onCommitFiberRoot=="function")try{hi.onCommitFiberRoot(rc,t,void 0,(t.current.flags&128)===128)}catch{}}var ei=Math.clz32?Math.clz32:gv,pv=Math.log,mv=Math.LN2;function gv(t){return t>>>=0,t===0?32:31-(pv(t)/mv|0)|0}var xo=64,yo=4194304;function Ma(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Nl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Ma(o):(s&=a,s!==0&&(i=Ma(s)))}else a=n&~r,a!==0?i=Ma(a):s!==0&&(i=Ma(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ei(e),r=1<<n,i|=t[n],e&=~r;return i}function _v(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-ei(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=_v(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Zu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function J0(){var t=xo;return xo<<=1,!(xo&4194240)&&(xo=64),t}function Lc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ao(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ei(e),t[e]=n}function xv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ei(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Df(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ei(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ut=0;function eg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var tg,Uf,ng,ig,rg,Qu=!1,So=[],ar=null,or=null,lr=null,za=new Map,Ha=new Map,Ji=[],yv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function np(t,e){switch(t){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":za.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ha.delete(e.pointerId)}}function oa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=lo(e),e!==null&&Uf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Sv(t,e,n,i,r){switch(e){case"focusin":return ar=oa(ar,t,e,n,i,r),!0;case"dragenter":return or=oa(or,t,e,n,i,r),!0;case"mouseover":return lr=oa(lr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return za.set(s,oa(za.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ha.set(s,oa(Ha.get(s)||null,t,e,n,i,r)),!0}return!1}function sg(t){var e=kr(t.target);if(e!==null){var n=Qr(e);if(n!==null){if(e=n.tag,e===13){if(e=$0(n),e!==null){t.blockedOn=e,rg(t.priority,function(){ng(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ju(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);$u=i,n.target.dispatchEvent(i),$u=null}else return e=lo(n),e!==null&&Uf(e),t.blockedOn=n,!1;e.shift()}return!0}function ip(t,e,n){cl(t)&&n.delete(e)}function Mv(){Qu=!1,ar!==null&&cl(ar)&&(ar=null),or!==null&&cl(or)&&(or=null),lr!==null&&cl(lr)&&(lr=null),za.forEach(ip),Ha.forEach(ip)}function la(t,e){t.blockedOn===e&&(t.blockedOn=null,Qu||(Qu=!0,Nn.unstable_scheduleCallback(Nn.unstable_NormalPriority,Mv)))}function Va(t){function e(r){return la(r,t)}if(0<So.length){la(So[0],t);for(var n=1;n<So.length;n++){var i=So[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ar!==null&&la(ar,t),or!==null&&la(or,t),lr!==null&&la(lr,t),za.forEach(e),Ha.forEach(e),n=0;n<Ji.length;n++)i=Ji[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ji.length&&(n=Ji[0],n.blockedOn===null);)sg(n),n.blockedOn===null&&Ji.shift()}var Us=Hi.ReactCurrentBatchConfig,Il=!0;function Ev(t,e,n,i){var r=ut,s=Us.transition;Us.transition=null;try{ut=1,Ff(t,e,n,i)}finally{ut=r,Us.transition=s}}function wv(t,e,n,i){var r=ut,s=Us.transition;Us.transition=null;try{ut=4,Ff(t,e,n,i)}finally{ut=r,Us.transition=s}}function Ff(t,e,n,i){if(Il){var r=Ju(t,e,n,i);if(r===null)Hc(t,e,i,Dl,n),np(t,i);else if(Sv(r,t,e,n,i))i.stopPropagation();else if(np(t,i),e&4&&-1<yv.indexOf(t)){for(;r!==null;){var s=lo(r);if(s!==null&&tg(s),s=Ju(t,e,n,i),s===null&&Hc(t,e,i,Dl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Hc(t,e,i,null,n)}}var Dl=null;function Ju(t,e,n,i){if(Dl=null,t=Nf(i),t=kr(t),t!==null)if(e=Qr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=$0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Dl=t,null}function ag(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dv()){case If:return 1;case Z0:return 4;case Ll:case fv:return 16;case Q0:return 536870912;default:return 16}default:return 16}}var nr=null,Of=null,ul=null;function og(){if(ul)return ul;var t,e=Of,n=e.length,i,r="value"in nr?nr.value:nr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return ul=r.slice(t,1<i?1-i:void 0)}function dl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Mo(){return!0}function rp(){return!1}function Dn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Mo:rp,this.isPropagationStopped=rp,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Mo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Mo)},persist:function(){},isPersistent:Mo}),e}var Js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kf=Dn(Js),oo=wt({},Js,{view:0,detail:0}),Tv=Dn(oo),Nc,Ic,ca,sc=wt({},oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ca&&(ca&&t.type==="mousemove"?(Nc=t.screenX-ca.screenX,Ic=t.screenY-ca.screenY):Ic=Nc=0,ca=t),Nc)},movementY:function(t){return"movementY"in t?t.movementY:Ic}}),sp=Dn(sc),bv=wt({},sc,{dataTransfer:0}),Cv=Dn(bv),Av=wt({},oo,{relatedTarget:0}),Dc=Dn(Av),Rv=wt({},Js,{animationName:0,elapsedTime:0,pseudoElement:0}),Pv=Dn(Rv),Lv=wt({},Js,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Nv=Dn(Lv),Iv=wt({},Js,{data:0}),ap=Dn(Iv),Dv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ov(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Fv[t])?!!e[t]:!1}function Bf(){return Ov}var kv=wt({},oo,{key:function(t){if(t.key){var e=Dv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Uv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bf,charCode:function(t){return t.type==="keypress"?dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Bv=Dn(kv),zv=wt({},sc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),op=Dn(zv),Hv=wt({},oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bf}),Vv=Dn(Hv),Gv=wt({},Js,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wv=Dn(Gv),jv=wt({},sc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Xv=Dn(jv),$v=[9,13,27,32],zf=Ui&&"CompositionEvent"in window,Aa=null;Ui&&"documentMode"in document&&(Aa=document.documentMode);var Yv=Ui&&"TextEvent"in window&&!Aa,lg=Ui&&(!zf||Aa&&8<Aa&&11>=Aa),lp=String.fromCharCode(32),cp=!1;function cg(t,e){switch(t){case"keyup":return $v.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ug(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ss=!1;function qv(t,e){switch(t){case"compositionend":return ug(e);case"keypress":return e.which!==32?null:(cp=!0,lp);case"textInput":return t=e.data,t===lp&&cp?null:t;default:return null}}function Kv(t,e){if(Ss)return t==="compositionend"||!zf&&cg(t,e)?(t=og(),ul=Of=nr=null,Ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return lg&&e.locale!=="ko"?null:e.data;default:return null}}var Zv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function up(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Zv[t.type]:e==="textarea"}function dg(t,e,n,i){V0(i),e=Ul(e,"onChange"),0<e.length&&(n=new kf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ra=null,Ga=null;function Qv(t){Mg(t,0)}function ac(t){var e=ws(t);if(U0(e))return t}function Jv(t,e){if(t==="change")return e}var fg=!1;if(Ui){var Uc;if(Ui){var Fc="oninput"in document;if(!Fc){var dp=document.createElement("div");dp.setAttribute("oninput","return;"),Fc=typeof dp.oninput=="function"}Uc=Fc}else Uc=!1;fg=Uc&&(!document.documentMode||9<document.documentMode)}function fp(){Ra&&(Ra.detachEvent("onpropertychange",hg),Ga=Ra=null)}function hg(t){if(t.propertyName==="value"&&ac(Ga)){var e=[];dg(e,Ga,t,Nf(t)),X0(Qv,e)}}function ex(t,e,n){t==="focusin"?(fp(),Ra=e,Ga=n,Ra.attachEvent("onpropertychange",hg)):t==="focusout"&&fp()}function tx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ac(Ga)}function nx(t,e){if(t==="click")return ac(e)}function ix(t,e){if(t==="input"||t==="change")return ac(e)}function rx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ni=typeof Object.is=="function"?Object.is:rx;function Wa(t,e){if(ni(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Uu.call(e,r)||!ni(t[r],e[r]))return!1}return!0}function hp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pp(t,e){var n=hp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hp(n)}}function pg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?pg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function mg(){for(var t=window,e=Al();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Al(t.document)}return e}function Hf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function sx(t){var e=mg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&pg(n.ownerDocument.documentElement,n)){if(i!==null&&Hf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=pp(n,s);var a=pp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ax=Ui&&"documentMode"in document&&11>=document.documentMode,Ms=null,ed=null,Pa=null,td=!1;function mp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;td||Ms==null||Ms!==Al(i)||(i=Ms,"selectionStart"in i&&Hf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Pa&&Wa(Pa,i)||(Pa=i,i=Ul(ed,"onSelect"),0<i.length&&(e=new kf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ms)))}function Eo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Es={animationend:Eo("Animation","AnimationEnd"),animationiteration:Eo("Animation","AnimationIteration"),animationstart:Eo("Animation","AnimationStart"),transitionend:Eo("Transition","TransitionEnd")},Oc={},gg={};Ui&&(gg=document.createElement("div").style,"AnimationEvent"in window||(delete Es.animationend.animation,delete Es.animationiteration.animation,delete Es.animationstart.animation),"TransitionEvent"in window||delete Es.transitionend.transition);function oc(t){if(Oc[t])return Oc[t];if(!Es[t])return t;var e=Es[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in gg)return Oc[t]=e[n];return t}var _g=oc("animationend"),vg=oc("animationiteration"),xg=oc("animationstart"),yg=oc("transitionend"),Sg=new Map,gp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(t,e){Sg.set(t,e),Zr(e,[t])}for(var kc=0;kc<gp.length;kc++){var Bc=gp[kc],ox=Bc.toLowerCase(),lx=Bc[0].toUpperCase()+Bc.slice(1);xr(ox,"on"+lx)}xr(_g,"onAnimationEnd");xr(vg,"onAnimationIteration");xr(xg,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(yg,"onTransitionEnd");zs("onMouseEnter",["mouseout","mouseover"]);zs("onMouseLeave",["mouseout","mouseover"]);zs("onPointerEnter",["pointerout","pointerover"]);zs("onPointerLeave",["pointerout","pointerover"]);Zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ea));function _p(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,ov(i,e,void 0,t),t.currentTarget=null}function Mg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;_p(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;_p(r,o,c),s=l}}}if(Pl)throw t=Ku,Pl=!1,Ku=null,t}function gt(t,e){var n=e[ad];n===void 0&&(n=e[ad]=new Set);var i=t+"__bubble";n.has(i)||(Eg(e,t,2,!1),n.add(i))}function zc(t,e,n){var i=0;e&&(i|=4),Eg(n,t,i,e)}var wo="_reactListening"+Math.random().toString(36).slice(2);function ja(t){if(!t[wo]){t[wo]=!0,P0.forEach(function(n){n!=="selectionchange"&&(cx.has(n)||zc(n,!1,t),zc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[wo]||(e[wo]=!0,zc("selectionchange",!1,e))}}function Eg(t,e,n,i){switch(ag(e)){case 1:var r=Ev;break;case 4:r=wv;break;default:r=Ff}n=r.bind(null,e,n,t),r=void 0,!qu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Hc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=kr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}X0(function(){var c=s,h=Nf(n),f=[];e:{var u=Sg.get(t);if(u!==void 0){var p=kf,_=t;switch(t){case"keypress":if(dl(n)===0)break e;case"keydown":case"keyup":p=Bv;break;case"focusin":_="focus",p=Dc;break;case"focusout":_="blur",p=Dc;break;case"beforeblur":case"afterblur":p=Dc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Cv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Vv;break;case _g:case vg:case xg:p=Pv;break;case yg:p=Wv;break;case"scroll":p=Tv;break;case"wheel":p=Xv;break;case"copy":case"cut":case"paste":p=Nv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=op}var S=(e&4)!==0,g=!S&&t==="scroll",d=S?u!==null?u+"Capture":null:u;S=[];for(var m=c,y;m!==null;){y=m;var M=y.stateNode;if(y.tag===5&&M!==null&&(y=M,d!==null&&(M=Ba(m,d),M!=null&&S.push(Xa(m,M,y)))),g)break;m=m.return}0<S.length&&(u=new p(u,_,null,n,h),f.push({event:u,listeners:S}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",u&&n!==$u&&(_=n.relatedTarget||n.fromElement)&&(kr(_)||_[Fi]))break e;if((p||u)&&(u=h.window===h?h:(u=h.ownerDocument)?u.defaultView||u.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?kr(_):null,_!==null&&(g=Qr(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(S=sp,M="onMouseLeave",d="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(S=op,M="onPointerLeave",d="onPointerEnter",m="pointer"),g=p==null?u:ws(p),y=_==null?u:ws(_),u=new S(M,m+"leave",p,n,h),u.target=g,u.relatedTarget=y,M=null,kr(h)===c&&(S=new S(d,m+"enter",_,n,h),S.target=y,S.relatedTarget=g,M=S),g=M,p&&_)t:{for(S=p,d=_,m=0,y=S;y;y=ns(y))m++;for(y=0,M=d;M;M=ns(M))y++;for(;0<m-y;)S=ns(S),m--;for(;0<y-m;)d=ns(d),y--;for(;m--;){if(S===d||d!==null&&S===d.alternate)break t;S=ns(S),d=ns(d)}S=null}else S=null;p!==null&&vp(f,u,p,S,!1),_!==null&&g!==null&&vp(f,g,_,S,!0)}}e:{if(u=c?ws(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var b=Jv;else if(up(u))if(fg)b=ix;else{b=tx;var C=ex}else(p=u.nodeName)&&p.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(b=nx);if(b&&(b=b(t,c))){dg(f,b,n,h);break e}C&&C(t,u,c),t==="focusout"&&(C=u._wrapperState)&&C.controlled&&u.type==="number"&&Vu(u,"number",u.value)}switch(C=c?ws(c):window,t){case"focusin":(up(C)||C.contentEditable==="true")&&(Ms=C,ed=c,Pa=null);break;case"focusout":Pa=ed=Ms=null;break;case"mousedown":td=!0;break;case"contextmenu":case"mouseup":case"dragend":td=!1,mp(f,n,h);break;case"selectionchange":if(ax)break;case"keydown":case"keyup":mp(f,n,h)}var R;if(zf)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Ss?cg(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(lg&&n.locale!=="ko"&&(Ss||v!=="onCompositionStart"?v==="onCompositionEnd"&&Ss&&(R=og()):(nr=h,Of="value"in nr?nr.value:nr.textContent,Ss=!0)),C=Ul(c,v),0<C.length&&(v=new ap(v,t,null,n,h),f.push({event:v,listeners:C}),R?v.data=R:(R=ug(n),R!==null&&(v.data=R)))),(R=Yv?qv(t,n):Kv(t,n))&&(c=Ul(c,"onBeforeInput"),0<c.length&&(h=new ap("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=R))}Mg(f,e)})}function Xa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ul(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ba(t,n),s!=null&&i.unshift(Xa(t,s,r)),s=Ba(t,e),s!=null&&i.push(Xa(t,s,r))),t=t.return}return i}function ns(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function vp(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Ba(n,s),l!=null&&a.unshift(Xa(n,l,o))):r||(l=Ba(n,s),l!=null&&a.push(Xa(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var ux=/\r\n?/g,dx=/\u0000|\uFFFD/g;function xp(t){return(typeof t=="string"?t:""+t).replace(ux,`
`).replace(dx,"")}function To(t,e,n){if(e=xp(e),xp(t)!==e&&n)throw Error(le(425))}function Fl(){}var nd=null,id=null;function rd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sd=typeof setTimeout=="function"?setTimeout:void 0,fx=typeof clearTimeout=="function"?clearTimeout:void 0,yp=typeof Promise=="function"?Promise:void 0,hx=typeof queueMicrotask=="function"?queueMicrotask:typeof yp<"u"?function(t){return yp.resolve(null).then(t).catch(px)}:sd;function px(t){setTimeout(function(){throw t})}function Vc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Va(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Va(e)}function cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Sp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ea=Math.random().toString(36).slice(2),ui="__reactFiber$"+ea,$a="__reactProps$"+ea,Fi="__reactContainer$"+ea,ad="__reactEvents$"+ea,mx="__reactListeners$"+ea,gx="__reactHandles$"+ea;function kr(t){var e=t[ui];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Fi]||n[ui]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Sp(t);t!==null;){if(n=t[ui])return n;t=Sp(t)}return e}t=n,n=t.parentNode}return null}function lo(t){return t=t[ui]||t[Fi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ws(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(le(33))}function lc(t){return t[$a]||null}var od=[],Ts=-1;function yr(t){return{current:t}}function vt(t){0>Ts||(t.current=od[Ts],od[Ts]=null,Ts--)}function mt(t,e){Ts++,od[Ts]=t.current,t.current=e}var _r={},an=yr(_r),yn=yr(!1),jr=_r;function Hs(t,e){var n=t.type.contextTypes;if(!n)return _r;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Sn(t){return t=t.childContextTypes,t!=null}function Ol(){vt(yn),vt(an)}function Mp(t,e,n){if(an.current!==_r)throw Error(le(168));mt(an,e),mt(yn,n)}function wg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(le(108,ev(t)||"Unknown",r));return wt({},n,i)}function kl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_r,jr=an.current,mt(an,t),mt(yn,yn.current),!0}function Ep(t,e,n){var i=t.stateNode;if(!i)throw Error(le(169));n?(t=wg(t,e,jr),i.__reactInternalMemoizedMergedChildContext=t,vt(yn),vt(an),mt(an,t)):vt(yn),mt(yn,n)}var Ci=null,cc=!1,Gc=!1;function Tg(t){Ci===null?Ci=[t]:Ci.push(t)}function _x(t){cc=!0,Tg(t)}function Sr(){if(!Gc&&Ci!==null){Gc=!0;var t=0,e=ut;try{var n=Ci;for(ut=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ci=null,cc=!1}catch(r){throw Ci!==null&&(Ci=Ci.slice(t+1)),K0(If,Sr),r}finally{ut=e,Gc=!1}}return null}var bs=[],Cs=0,Bl=null,zl=0,Fn=[],On=0,Xr=null,Ri=1,Pi="";function Pr(t,e){bs[Cs++]=zl,bs[Cs++]=Bl,Bl=t,zl=e}function bg(t,e,n){Fn[On++]=Ri,Fn[On++]=Pi,Fn[On++]=Xr,Xr=t;var i=Ri;t=Pi;var r=32-ei(i)-1;i&=~(1<<r),n+=1;var s=32-ei(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ri=1<<32-ei(e)+r|n<<r|i,Pi=s+t}else Ri=1<<s|n<<r|i,Pi=t}function Vf(t){t.return!==null&&(Pr(t,1),bg(t,1,0))}function Gf(t){for(;t===Bl;)Bl=bs[--Cs],bs[Cs]=null,zl=bs[--Cs],bs[Cs]=null;for(;t===Xr;)Xr=Fn[--On],Fn[On]=null,Pi=Fn[--On],Fn[On]=null,Ri=Fn[--On],Fn[On]=null}var Ln=null,Pn=null,yt=!1,Zn=null;function Cg(t,e){var n=kn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function wp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ln=t,Pn=cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ln=t,Pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Xr!==null?{id:Ri,overflow:Pi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=kn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ln=t,Pn=null,!0):!1;default:return!1}}function ld(t){return(t.mode&1)!==0&&(t.flags&128)===0}function cd(t){if(yt){var e=Pn;if(e){var n=e;if(!wp(t,e)){if(ld(t))throw Error(le(418));e=cr(n.nextSibling);var i=Ln;e&&wp(t,e)?Cg(i,n):(t.flags=t.flags&-4097|2,yt=!1,Ln=t)}}else{if(ld(t))throw Error(le(418));t.flags=t.flags&-4097|2,yt=!1,Ln=t}}}function Tp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ln=t}function bo(t){if(t!==Ln)return!1;if(!yt)return Tp(t),yt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!rd(t.type,t.memoizedProps)),e&&(e=Pn)){if(ld(t))throw Ag(),Error(le(418));for(;e;)Cg(t,e),e=cr(e.nextSibling)}if(Tp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(le(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pn=cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pn=null}}else Pn=Ln?cr(t.stateNode.nextSibling):null;return!0}function Ag(){for(var t=Pn;t;)t=cr(t.nextSibling)}function Vs(){Pn=Ln=null,yt=!1}function Wf(t){Zn===null?Zn=[t]:Zn.push(t)}var vx=Hi.ReactCurrentBatchConfig;function qn(t,e){if(t&&t.defaultProps){e=wt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Hl=yr(null),Vl=null,As=null,jf=null;function Xf(){jf=As=Vl=null}function $f(t){var e=Hl.current;vt(Hl),t._currentValue=e}function ud(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Fs(t,e){Vl=t,jf=As=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(xn=!0),t.firstContext=null)}function Hn(t){var e=t._currentValue;if(jf!==t)if(t={context:t,memoizedValue:e,next:null},As===null){if(Vl===null)throw Error(le(308));As=t,Vl.dependencies={lanes:0,firstContext:t}}else As=As.next=t;return e}var Br=null;function Yf(t){Br===null?Br=[t]:Br.push(t)}function Rg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Yf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Oi(t,i)}function Oi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Qi=!1;function qf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ni(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ur(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,tt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Oi(t,n)}return r=i.interleaved,r===null?(e.next=e,Yf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Oi(t,n)}function fl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Df(t,n)}}function bp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Gl(t,e,n,i){var r=t.updateQueue;Qi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,h=c=l=null,o=s;do{var u=o.lane,p=o.eventTime;if((i&u)===u){h!==null&&(h=h.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,S=o;switch(u=e,p=n,S.tag){case 1:if(_=S.payload,typeof _=="function"){f=_.call(p,f,u);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=S.payload,u=typeof _=="function"?_.call(p,f,u):_,u==null)break e;f=wt({},f,u);break e;case 2:Qi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[o]:u.push(o))}else p={eventTime:p,lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=p,l=f):h=h.next=p,a|=u;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;u=o,o=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(1);if(h===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Yr|=a,t.lanes=a,t.memoizedState=f}}function Cp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(le(191,r));r.call(i)}}}var Lg=new R0.Component().refs;function dd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:wt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var uc={isMounted:function(t){return(t=t._reactInternals)?Qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=hn(),r=fr(t),s=Ni(i,r);s.payload=e,n!=null&&(s.callback=n),e=ur(t,s,r),e!==null&&(ti(e,t,r,i),fl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=hn(),r=fr(t),s=Ni(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ur(t,s,r),e!==null&&(ti(e,t,r,i),fl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=hn(),i=fr(t),r=Ni(n,i);r.tag=2,e!=null&&(r.callback=e),e=ur(t,r,i),e!==null&&(ti(e,t,i,n),fl(e,t,i))}};function Ap(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Wa(n,i)||!Wa(r,s):!0}function Ng(t,e,n){var i=!1,r=_r,s=e.contextType;return typeof s=="object"&&s!==null?s=Hn(s):(r=Sn(e)?jr:an.current,i=e.contextTypes,s=(i=i!=null)?Hs(t,r):_r),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=uc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Rp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&uc.enqueueReplaceState(e,e.state,null)}function fd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=Lg,qf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Hn(s):(s=Sn(e)?jr:an.current,r.context=Hs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(dd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&uc.enqueueReplaceState(r,r.state,null),Gl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ua(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(le(309));var i=n.stateNode}if(!i)throw Error(le(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;o===Lg&&(o=r.refs={}),a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(le(284));if(!n._owner)throw Error(le(290,t))}return t}function Co(t,e){throw t=Object.prototype.toString.call(e),Error(le(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Pp(t){var e=t._init;return e(t._payload)}function Ig(t){function e(d,m){if(t){var y=d.deletions;y===null?(d.deletions=[m],d.flags|=16):y.push(m)}}function n(d,m){if(!t)return null;for(;m!==null;)e(d,m),m=m.sibling;return null}function i(d,m){for(d=new Map;m!==null;)m.key!==null?d.set(m.key,m):d.set(m.index,m),m=m.sibling;return d}function r(d,m){return d=hr(d,m),d.index=0,d.sibling=null,d}function s(d,m,y){return d.index=y,t?(y=d.alternate,y!==null?(y=y.index,y<m?(d.flags|=2,m):y):(d.flags|=2,m)):(d.flags|=1048576,m)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,m,y,M){return m===null||m.tag!==6?(m=Kc(y,d.mode,M),m.return=d,m):(m=r(m,y),m.return=d,m)}function l(d,m,y,M){var b=y.type;return b===ys?h(d,m,y.props.children,M,y.key):m!==null&&(m.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Zi&&Pp(b)===m.type)?(M=r(m,y.props),M.ref=ua(d,m,y),M.return=d,M):(M=vl(y.type,y.key,y.props,null,d.mode,M),M.ref=ua(d,m,y),M.return=d,M)}function c(d,m,y,M){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=Zc(y,d.mode,M),m.return=d,m):(m=r(m,y.children||[]),m.return=d,m)}function h(d,m,y,M,b){return m===null||m.tag!==7?(m=Wr(y,d.mode,M,b),m.return=d,m):(m=r(m,y),m.return=d,m)}function f(d,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Kc(""+m,d.mode,y),m.return=d,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case go:return y=vl(m.type,m.key,m.props,null,d.mode,y),y.ref=ua(d,null,m),y.return=d,y;case xs:return m=Zc(m,d.mode,y),m.return=d,m;case Zi:var M=m._init;return f(d,M(m._payload),y)}if(Sa(m)||sa(m))return m=Wr(m,d.mode,y,null),m.return=d,m;Co(d,m)}return null}function u(d,m,y,M){var b=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return b!==null?null:o(d,m,""+y,M);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case go:return y.key===b?l(d,m,y,M):null;case xs:return y.key===b?c(d,m,y,M):null;case Zi:return b=y._init,u(d,m,b(y._payload),M)}if(Sa(y)||sa(y))return b!==null?null:h(d,m,y,M,null);Co(d,y)}return null}function p(d,m,y,M,b){if(typeof M=="string"&&M!==""||typeof M=="number")return d=d.get(y)||null,o(m,d,""+M,b);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case go:return d=d.get(M.key===null?y:M.key)||null,l(m,d,M,b);case xs:return d=d.get(M.key===null?y:M.key)||null,c(m,d,M,b);case Zi:var C=M._init;return p(d,m,y,C(M._payload),b)}if(Sa(M)||sa(M))return d=d.get(y)||null,h(m,d,M,b,null);Co(m,M)}return null}function _(d,m,y,M){for(var b=null,C=null,R=m,v=m=0,T=null;R!==null&&v<y.length;v++){R.index>v?(T=R,R=null):T=R.sibling;var W=u(d,R,y[v],M);if(W===null){R===null&&(R=T);break}t&&R&&W.alternate===null&&e(d,R),m=s(W,m,v),C===null?b=W:C.sibling=W,C=W,R=T}if(v===y.length)return n(d,R),yt&&Pr(d,v),b;if(R===null){for(;v<y.length;v++)R=f(d,y[v],M),R!==null&&(m=s(R,m,v),C===null?b=R:C.sibling=R,C=R);return yt&&Pr(d,v),b}for(R=i(d,R);v<y.length;v++)T=p(R,d,v,y[v],M),T!==null&&(t&&T.alternate!==null&&R.delete(T.key===null?v:T.key),m=s(T,m,v),C===null?b=T:C.sibling=T,C=T);return t&&R.forEach(function(I){return e(d,I)}),yt&&Pr(d,v),b}function S(d,m,y,M){var b=sa(y);if(typeof b!="function")throw Error(le(150));if(y=b.call(y),y==null)throw Error(le(151));for(var C=b=null,R=m,v=m=0,T=null,W=y.next();R!==null&&!W.done;v++,W=y.next()){R.index>v?(T=R,R=null):T=R.sibling;var I=u(d,R,W.value,M);if(I===null){R===null&&(R=T);break}t&&R&&I.alternate===null&&e(d,R),m=s(I,m,v),C===null?b=I:C.sibling=I,C=I,R=T}if(W.done)return n(d,R),yt&&Pr(d,v),b;if(R===null){for(;!W.done;v++,W=y.next())W=f(d,W.value,M),W!==null&&(m=s(W,m,v),C===null?b=W:C.sibling=W,C=W);return yt&&Pr(d,v),b}for(R=i(d,R);!W.done;v++,W=y.next())W=p(R,d,v,W.value,M),W!==null&&(t&&W.alternate!==null&&R.delete(W.key===null?v:W.key),m=s(W,m,v),C===null?b=W:C.sibling=W,C=W);return t&&R.forEach(function(V){return e(d,V)}),yt&&Pr(d,v),b}function g(d,m,y,M){if(typeof y=="object"&&y!==null&&y.type===ys&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case go:e:{for(var b=y.key,C=m;C!==null;){if(C.key===b){if(b=y.type,b===ys){if(C.tag===7){n(d,C.sibling),m=r(C,y.props.children),m.return=d,d=m;break e}}else if(C.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Zi&&Pp(b)===C.type){n(d,C.sibling),m=r(C,y.props),m.ref=ua(d,C,y),m.return=d,d=m;break e}n(d,C);break}else e(d,C);C=C.sibling}y.type===ys?(m=Wr(y.props.children,d.mode,M,y.key),m.return=d,d=m):(M=vl(y.type,y.key,y.props,null,d.mode,M),M.ref=ua(d,m,y),M.return=d,d=M)}return a(d);case xs:e:{for(C=y.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(d,m.sibling),m=r(m,y.children||[]),m.return=d,d=m;break e}else{n(d,m);break}else e(d,m);m=m.sibling}m=Zc(y,d.mode,M),m.return=d,d=m}return a(d);case Zi:return C=y._init,g(d,m,C(y._payload),M)}if(Sa(y))return _(d,m,y,M);if(sa(y))return S(d,m,y,M);Co(d,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(d,m.sibling),m=r(m,y),m.return=d,d=m):(n(d,m),m=Kc(y,d.mode,M),m.return=d,d=m),a(d)):n(d,m)}return g}var Gs=Ig(!0),Dg=Ig(!1),co={},pi=yr(co),Ya=yr(co),qa=yr(co);function zr(t){if(t===co)throw Error(le(174));return t}function Kf(t,e){switch(mt(qa,e),mt(Ya,t),mt(pi,co),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Wu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Wu(e,t)}vt(pi),mt(pi,e)}function Ws(){vt(pi),vt(Ya),vt(qa)}function Ug(t){zr(qa.current);var e=zr(pi.current),n=Wu(e,t.type);e!==n&&(mt(Ya,t),mt(pi,n))}function Zf(t){Ya.current===t&&(vt(pi),vt(Ya))}var St=yr(0);function Wl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wc=[];function Qf(){for(var t=0;t<Wc.length;t++)Wc[t]._workInProgressVersionPrimary=null;Wc.length=0}var hl=Hi.ReactCurrentDispatcher,jc=Hi.ReactCurrentBatchConfig,$r=0,Mt=null,Ut=null,Vt=null,jl=!1,La=!1,Ka=0,xx=0;function Kt(){throw Error(le(321))}function Jf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ni(t[n],e[n]))return!1;return!0}function eh(t,e,n,i,r,s){if($r=s,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,hl.current=t===null||t.memoizedState===null?Ex:wx,t=n(i,r),La){s=0;do{if(La=!1,Ka=0,25<=s)throw Error(le(301));s+=1,Vt=Ut=null,e.updateQueue=null,hl.current=Tx,t=n(i,r)}while(La)}if(hl.current=Xl,e=Ut!==null&&Ut.next!==null,$r=0,Vt=Ut=Mt=null,jl=!1,e)throw Error(le(300));return t}function th(){var t=Ka!==0;return Ka=0,t}function li(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?Mt.memoizedState=Vt=t:Vt=Vt.next=t,Vt}function Vn(){if(Ut===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=Ut.next;var e=Vt===null?Mt.memoizedState:Vt.next;if(e!==null)Vt=e,Ut=t;else{if(t===null)throw Error(le(310));Ut=t,t={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},Vt===null?Mt.memoizedState=Vt=t:Vt=Vt.next=t}return Vt}function Za(t,e){return typeof e=="function"?e(t):e}function Xc(t){var e=Vn(),n=e.queue;if(n===null)throw Error(le(311));n.lastRenderedReducer=t;var i=Ut,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var h=c.lane;if(($r&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,Mt.lanes|=h,Yr|=h}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,ni(i,e.memoizedState)||(xn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Mt.lanes|=s,Yr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function $c(t){var e=Vn(),n=e.queue;if(n===null)throw Error(le(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);ni(s,e.memoizedState)||(xn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Fg(){}function Og(t,e){var n=Mt,i=Vn(),r=e(),s=!ni(i.memoizedState,r);if(s&&(i.memoizedState=r,xn=!0),i=i.queue,nh(zg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Vt!==null&&Vt.memoizedState.tag&1){if(n.flags|=2048,Qa(9,Bg.bind(null,n,i,r,e),void 0,null),Gt===null)throw Error(le(349));$r&30||kg(n,e,r)}return r}function kg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Bg(t,e,n,i){e.value=n,e.getSnapshot=i,Hg(e)&&Vg(t)}function zg(t,e,n){return n(function(){Hg(e)&&Vg(t)})}function Hg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ni(t,n)}catch{return!0}}function Vg(t){var e=Oi(t,1);e!==null&&ti(e,t,1,-1)}function Lp(t){var e=li();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:t},e.queue=t,t=t.dispatch=Mx.bind(null,Mt,t),[e.memoizedState,t]}function Qa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Gg(){return Vn().memoizedState}function pl(t,e,n,i){var r=li();Mt.flags|=t,r.memoizedState=Qa(1|e,n,void 0,i===void 0?null:i)}function dc(t,e,n,i){var r=Vn();i=i===void 0?null:i;var s=void 0;if(Ut!==null){var a=Ut.memoizedState;if(s=a.destroy,i!==null&&Jf(i,a.deps)){r.memoizedState=Qa(e,n,s,i);return}}Mt.flags|=t,r.memoizedState=Qa(1|e,n,s,i)}function Np(t,e){return pl(8390656,8,t,e)}function nh(t,e){return dc(2048,8,t,e)}function Wg(t,e){return dc(4,2,t,e)}function jg(t,e){return dc(4,4,t,e)}function Xg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function $g(t,e,n){return n=n!=null?n.concat([t]):null,dc(4,4,Xg.bind(null,e,t),n)}function ih(){}function Yg(t,e){var n=Vn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Jf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function qg(t,e){var n=Vn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Jf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Kg(t,e,n){return $r&21?(ni(n,e)||(n=J0(),Mt.lanes|=n,Yr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,xn=!0),t.memoizedState=n)}function yx(t,e){var n=ut;ut=n!==0&&4>n?n:4,t(!0);var i=jc.transition;jc.transition={};try{t(!1),e()}finally{ut=n,jc.transition=i}}function Zg(){return Vn().memoizedState}function Sx(t,e,n){var i=fr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Qg(t))Jg(e,n);else if(n=Rg(t,e,n,i),n!==null){var r=hn();ti(n,t,i,r),e_(n,e,i)}}function Mx(t,e,n){var i=fr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qg(t))Jg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,ni(o,a)){var l=e.interleaved;l===null?(r.next=r,Yf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Rg(t,e,r,i),n!==null&&(r=hn(),ti(n,t,i,r),e_(n,e,i))}}function Qg(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function Jg(t,e){La=jl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function e_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Df(t,n)}}var Xl={readContext:Hn,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useInsertionEffect:Kt,useLayoutEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useMutableSource:Kt,useSyncExternalStore:Kt,useId:Kt,unstable_isNewReconciler:!1},Ex={readContext:Hn,useCallback:function(t,e){return li().memoizedState=[t,e===void 0?null:e],t},useContext:Hn,useEffect:Np,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,pl(4194308,4,Xg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return pl(4194308,4,t,e)},useInsertionEffect:function(t,e){return pl(4,2,t,e)},useMemo:function(t,e){var n=li();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=li();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Sx.bind(null,Mt,t),[i.memoizedState,t]},useRef:function(t){var e=li();return t={current:t},e.memoizedState=t},useState:Lp,useDebugValue:ih,useDeferredValue:function(t){return li().memoizedState=t},useTransition:function(){var t=Lp(!1),e=t[0];return t=yx.bind(null,t[1]),li().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Mt,r=li();if(yt){if(n===void 0)throw Error(le(407));n=n()}else{if(n=e(),Gt===null)throw Error(le(349));$r&30||kg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Np(zg.bind(null,i,s,t),[t]),i.flags|=2048,Qa(9,Bg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=li(),e=Gt.identifierPrefix;if(yt){var n=Pi,i=Ri;n=(i&~(1<<32-ei(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ka++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=xx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},wx={readContext:Hn,useCallback:Yg,useContext:Hn,useEffect:nh,useImperativeHandle:$g,useInsertionEffect:Wg,useLayoutEffect:jg,useMemo:qg,useReducer:Xc,useRef:Gg,useState:function(){return Xc(Za)},useDebugValue:ih,useDeferredValue:function(t){var e=Vn();return Kg(e,Ut.memoizedState,t)},useTransition:function(){var t=Xc(Za)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:Fg,useSyncExternalStore:Og,useId:Zg,unstable_isNewReconciler:!1},Tx={readContext:Hn,useCallback:Yg,useContext:Hn,useEffect:nh,useImperativeHandle:$g,useInsertionEffect:Wg,useLayoutEffect:jg,useMemo:qg,useReducer:$c,useRef:Gg,useState:function(){return $c(Za)},useDebugValue:ih,useDeferredValue:function(t){var e=Vn();return Ut===null?e.memoizedState=t:Kg(e,Ut.memoizedState,t)},useTransition:function(){var t=$c(Za)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:Fg,useSyncExternalStore:Og,useId:Zg,unstable_isNewReconciler:!1};function js(t,e){try{var n="",i=e;do n+=J1(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Yc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function hd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var bx=typeof WeakMap=="function"?WeakMap:Map;function t_(t,e,n){n=Ni(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Yl||(Yl=!0,Ed=i),hd(t,e)},n}function n_(t,e,n){n=Ni(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){hd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){hd(t,e),typeof i!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Ip(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new bx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=zx.bind(null,t,e,n),e.then(t,t))}function Dp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Up(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ni(-1,1),e.tag=2,ur(n,e,1))),n.lanes|=1),t)}var Cx=Hi.ReactCurrentOwner,xn=!1;function dn(t,e,n,i){e.child=t===null?Dg(e,null,n,i):Gs(e,t.child,n,i)}function Fp(t,e,n,i,r){n=n.render;var s=e.ref;return Fs(e,r),i=eh(t,e,n,i,s,r),n=th(),t!==null&&!xn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ki(t,e,r)):(yt&&n&&Vf(e),e.flags|=1,dn(t,e,i,r),e.child)}function Op(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!dh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,i_(t,e,s,i,r)):(t=vl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Wa,n(a,i)&&t.ref===e.ref)return ki(t,e,r)}return e.flags|=1,t=hr(s,i),t.ref=e.ref,t.return=e,e.child=t}function i_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Wa(s,i)&&t.ref===e.ref)if(xn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(xn=!0);else return e.lanes=t.lanes,ki(t,e,r)}return pd(t,e,n,i,r)}function r_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},mt(Ps,Cn),Cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,mt(Ps,Cn),Cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,mt(Ps,Cn),Cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,mt(Ps,Cn),Cn|=i;return dn(t,e,r,n),e.child}function s_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function pd(t,e,n,i,r){var s=Sn(n)?jr:an.current;return s=Hs(e,s),Fs(e,r),n=eh(t,e,n,i,s,r),i=th(),t!==null&&!xn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ki(t,e,r)):(yt&&i&&Vf(e),e.flags|=1,dn(t,e,n,r),e.child)}function kp(t,e,n,i,r){if(Sn(n)){var s=!0;kl(e)}else s=!1;if(Fs(e,r),e.stateNode===null)ml(t,e),Ng(e,n,i),fd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Hn(c):(c=Sn(n)?jr:an.current,c=Hs(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Rp(e,a,i,c),Qi=!1;var u=e.memoizedState;a.state=u,Gl(e,i,a,r),l=e.memoizedState,o!==i||u!==l||yn.current||Qi?(typeof h=="function"&&(dd(e,n,h,i),l=e.memoizedState),(o=Qi||Ap(e,n,o,i,u,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Pg(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:qn(e.type,o),a.props=c,f=e.pendingProps,u=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Hn(l):(l=Sn(n)?jr:an.current,l=Hs(e,l));var p=n.getDerivedStateFromProps;(h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||u!==l)&&Rp(e,a,i,l),Qi=!1,u=e.memoizedState,a.state=u,Gl(e,i,a,r);var _=e.memoizedState;o!==f||u!==_||yn.current||Qi?(typeof p=="function"&&(dd(e,n,p,i),_=e.memoizedState),(c=Qi||Ap(e,n,c,i,u,_,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return md(t,e,n,i,s,r)}function md(t,e,n,i,r,s){s_(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Ep(e,n,!1),ki(t,e,s);i=e.stateNode,Cx.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Gs(e,t.child,null,s),e.child=Gs(e,null,o,s)):dn(t,e,o,s),e.memoizedState=i.state,r&&Ep(e,n,!0),e.child}function a_(t){var e=t.stateNode;e.pendingContext?Mp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Mp(t,e.context,!1),Kf(t,e.containerInfo)}function Bp(t,e,n,i,r){return Vs(),Wf(r),e.flags|=256,dn(t,e,n,i),e.child}var gd={dehydrated:null,treeContext:null,retryLane:0};function _d(t){return{baseLanes:t,cachePool:null,transitions:null}}function o_(t,e,n){var i=e.pendingProps,r=St.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),mt(St,r&1),t===null)return cd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=pc(a,i,0,null),t=Wr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=_d(n),e.memoizedState=gd,t):rh(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Ax(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=hr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=hr(o,s):(s=Wr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?_d(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=gd,i}return s=t.child,t=s.sibling,i=hr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function rh(t,e){return e=pc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ao(t,e,n,i){return i!==null&&Wf(i),Gs(e,t.child,null,n),t=rh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ax(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Yc(Error(le(422))),Ao(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=pc({mode:"visible",children:i.children},r,0,null),s=Wr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Gs(e,t.child,null,a),e.child.memoizedState=_d(a),e.memoizedState=gd,s);if(!(e.mode&1))return Ao(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(le(419)),i=Yc(s,i,void 0),Ao(t,e,a,i)}if(o=(a&t.childLanes)!==0,xn||o){if(i=Gt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Oi(t,r),ti(i,t,r,-1))}return uh(),i=Yc(Error(le(421))),Ao(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Hx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Pn=cr(r.nextSibling),Ln=e,yt=!0,Zn=null,t!==null&&(Fn[On++]=Ri,Fn[On++]=Pi,Fn[On++]=Xr,Ri=t.id,Pi=t.overflow,Xr=e),e=rh(e,i.children),e.flags|=4096,e)}function zp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ud(t.return,e,n)}function qc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function l_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(dn(t,e,i.children,n),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zp(t,n,e);else if(t.tag===19)zp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(mt(St,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Wl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),qc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Wl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}qc(e,!0,n,null,s);break;case"together":qc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ml(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ki(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(le(153));if(e.child!==null){for(t=e.child,n=hr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=hr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Rx(t,e,n){switch(e.tag){case 3:a_(e),Vs();break;case 5:Ug(e);break;case 1:Sn(e.type)&&kl(e);break;case 4:Kf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;mt(Hl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(mt(St,St.current&1),e.flags|=128,null):n&e.child.childLanes?o_(t,e,n):(mt(St,St.current&1),t=ki(t,e,n),t!==null?t.sibling:null);mt(St,St.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return l_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),mt(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,r_(t,e,n)}return ki(t,e,n)}var c_,vd,u_,d_;c_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};vd=function(){};u_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,zr(pi.current);var s=null;switch(n){case"input":r=zu(t,r),i=zu(t,i),s=[];break;case"select":r=wt({},r,{value:void 0}),i=wt({},i,{value:void 0}),s=[];break;case"textarea":r=Gu(t,r),i=Gu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Fl)}ju(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Oa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Oa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&gt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};d_=function(t,e,n,i){n!==i&&(e.flags|=4)};function da(t,e){if(!yt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Px(t,e,n){var i=e.pendingProps;switch(Gf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(e),null;case 1:return Sn(e.type)&&Ol(),Zt(e),null;case 3:return i=e.stateNode,Ws(),vt(yn),vt(an),Qf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(bo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Zn!==null&&(bd(Zn),Zn=null))),vd(t,e),Zt(e),null;case 5:Zf(e);var r=zr(qa.current);if(n=e.type,t!==null&&e.stateNode!=null)u_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(le(166));return Zt(e),null}if(t=zr(pi.current),bo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ui]=e,i[$a]=s,t=(e.mode&1)!==0,n){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(r=0;r<Ea.length;r++)gt(Ea[r],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":qh(i,s),gt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},gt("invalid",i);break;case"textarea":Zh(i,s),gt("invalid",i)}ju(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&To(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&To(i.textContent,o,t),r=["children",""+o]):Oa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&gt("scroll",i)}switch(n){case"input":_o(i),Kh(i,s,!0);break;case"textarea":_o(i),Qh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Fl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=k0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ui]=e,t[$a]=i,c_(t,e,!1,!1),e.stateNode=t;e:{switch(a=Xu(n,i),n){case"dialog":gt("cancel",t),gt("close",t),r=i;break;case"iframe":case"object":case"embed":gt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ea.length;r++)gt(Ea[r],t);r=i;break;case"source":gt("error",t),r=i;break;case"img":case"image":case"link":gt("error",t),gt("load",t),r=i;break;case"details":gt("toggle",t),r=i;break;case"input":qh(t,i),r=zu(t,i),gt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=wt({},i,{value:void 0}),gt("invalid",t);break;case"textarea":Zh(t,i),r=Gu(t,i),gt("invalid",t);break;default:r=i}ju(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?H0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&B0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ka(t,l):typeof l=="number"&&ka(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Oa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&gt("scroll",t):l!=null&&Af(t,s,l,a))}switch(n){case"input":_o(t),Kh(t,i,!1);break;case"textarea":_o(t),Qh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+gr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ns(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ns(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Fl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Zt(e),null;case 6:if(t&&e.stateNode!=null)d_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(le(166));if(n=zr(qa.current),zr(pi.current),bo(e)){if(i=e.stateNode,n=e.memoizedProps,i[ui]=e,(s=i.nodeValue!==n)&&(t=Ln,t!==null))switch(t.tag){case 3:To(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&To(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ui]=e,e.stateNode=i}return Zt(e),null;case 13:if(vt(St),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(yt&&Pn!==null&&e.mode&1&&!(e.flags&128))Ag(),Vs(),e.flags|=98560,s=!1;else if(s=bo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(le(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(le(317));s[ui]=e}else Vs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Zt(e),s=!1}else Zn!==null&&(bd(Zn),Zn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||St.current&1?Ft===0&&(Ft=3):uh())),e.updateQueue!==null&&(e.flags|=4),Zt(e),null);case 4:return Ws(),vd(t,e),t===null&&ja(e.stateNode.containerInfo),Zt(e),null;case 10:return $f(e.type._context),Zt(e),null;case 17:return Sn(e.type)&&Ol(),Zt(e),null;case 19:if(vt(St),s=e.memoizedState,s===null)return Zt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)da(s,!1);else{if(Ft!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Wl(t),a!==null){for(e.flags|=128,da(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return mt(St,St.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pt()>Xs&&(e.flags|=128,i=!0,da(s,!1),e.lanes=4194304)}else{if(!i)if(t=Wl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),da(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!yt)return Zt(e),null}else 2*Pt()-s.renderingStartTime>Xs&&n!==1073741824&&(e.flags|=128,i=!0,da(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pt(),e.sibling=null,n=St.current,mt(St,i?n&1|2:n&1),e):(Zt(e),null);case 22:case 23:return ch(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Cn&1073741824&&(Zt(e),e.subtreeFlags&6&&(e.flags|=8192)):Zt(e),null;case 24:return null;case 25:return null}throw Error(le(156,e.tag))}function Lx(t,e){switch(Gf(e),e.tag){case 1:return Sn(e.type)&&Ol(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ws(),vt(yn),vt(an),Qf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Zf(e),null;case 13:if(vt(St),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(le(340));Vs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return vt(St),null;case 4:return Ws(),null;case 10:return $f(e.type._context),null;case 22:case 23:return ch(),null;case 24:return null;default:return null}}var Ro=!1,en=!1,Nx=typeof WeakSet=="function"?WeakSet:Set,Se=null;function Rs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ct(t,e,i)}else n.current=null}function xd(t,e,n){try{n()}catch(i){Ct(t,e,i)}}var Hp=!1;function Ix(t,e){if(nd=Il,t=mg(),Hf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,h=0,f=t,u=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)u=f,f=p;for(;;){if(f===t)break t;if(u===n&&++c===r&&(o=a),u===s&&++h===i&&(l=a),(p=f.nextSibling)!==null)break;f=u,u=f.parentNode}f=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(id={focusedElem:t,selectionRange:n},Il=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){e=Se;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var S=_.memoizedProps,g=_.memoizedState,d=e.stateNode,m=d.getSnapshotBeforeUpdate(e.elementType===e.type?S:qn(e.type,S),g);d.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(le(163))}}catch(M){Ct(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return _=Hp,Hp=!1,_}function Na(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&xd(e,n,s)}r=r.next}while(r!==i)}}function fc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function yd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function f_(t){var e=t.alternate;e!==null&&(t.alternate=null,f_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ui],delete e[$a],delete e[ad],delete e[mx],delete e[gx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function h_(t){return t.tag===5||t.tag===3||t.tag===4}function Vp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||h_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Fl));else if(i!==4&&(t=t.child,t!==null))for(Sd(t,e,n),t=t.sibling;t!==null;)Sd(t,e,n),t=t.sibling}function Md(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Md(t,e,n),t=t.sibling;t!==null;)Md(t,e,n),t=t.sibling}var jt=null,Kn=!1;function Wi(t,e,n){for(n=n.child;n!==null;)p_(t,e,n),n=n.sibling}function p_(t,e,n){if(hi&&typeof hi.onCommitFiberUnmount=="function")try{hi.onCommitFiberUnmount(rc,n)}catch{}switch(n.tag){case 5:en||Rs(n,e);case 6:var i=jt,r=Kn;jt=null,Wi(t,e,n),jt=i,Kn=r,jt!==null&&(Kn?(t=jt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):jt.removeChild(n.stateNode));break;case 18:jt!==null&&(Kn?(t=jt,n=n.stateNode,t.nodeType===8?Vc(t.parentNode,n):t.nodeType===1&&Vc(t,n),Va(t)):Vc(jt,n.stateNode));break;case 4:i=jt,r=Kn,jt=n.stateNode.containerInfo,Kn=!0,Wi(t,e,n),jt=i,Kn=r;break;case 0:case 11:case 14:case 15:if(!en&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&xd(n,e,a),r=r.next}while(r!==i)}Wi(t,e,n);break;case 1:if(!en&&(Rs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Ct(n,e,o)}Wi(t,e,n);break;case 21:Wi(t,e,n);break;case 22:n.mode&1?(en=(i=en)||n.memoizedState!==null,Wi(t,e,n),en=i):Wi(t,e,n);break;default:Wi(t,e,n)}}function Gp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Nx),e.forEach(function(i){var r=Vx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Wn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:jt=o.stateNode,Kn=!1;break e;case 3:jt=o.stateNode.containerInfo,Kn=!0;break e;case 4:jt=o.stateNode.containerInfo,Kn=!0;break e}o=o.return}if(jt===null)throw Error(le(160));p_(s,a,r),jt=null,Kn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Ct(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)m_(e,t),e=e.sibling}function m_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wn(e,t),si(t),i&4){try{Na(3,t,t.return),fc(3,t)}catch(S){Ct(t,t.return,S)}try{Na(5,t,t.return)}catch(S){Ct(t,t.return,S)}}break;case 1:Wn(e,t),si(t),i&512&&n!==null&&Rs(n,n.return);break;case 5:if(Wn(e,t),si(t),i&512&&n!==null&&Rs(n,n.return),t.flags&32){var r=t.stateNode;try{ka(r,"")}catch(S){Ct(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&F0(r,s),Xu(o,a);var c=Xu(o,s);for(a=0;a<l.length;a+=2){var h=l[a],f=l[a+1];h==="style"?H0(r,f):h==="dangerouslySetInnerHTML"?B0(r,f):h==="children"?ka(r,f):Af(r,h,f,c)}switch(o){case"input":Hu(r,s);break;case"textarea":O0(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ns(r,!!s.multiple,p,!1):u!==!!s.multiple&&(s.defaultValue!=null?Ns(r,!!s.multiple,s.defaultValue,!0):Ns(r,!!s.multiple,s.multiple?[]:"",!1))}r[$a]=s}catch(S){Ct(t,t.return,S)}}break;case 6:if(Wn(e,t),si(t),i&4){if(t.stateNode===null)throw Error(le(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){Ct(t,t.return,S)}}break;case 3:if(Wn(e,t),si(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Va(e.containerInfo)}catch(S){Ct(t,t.return,S)}break;case 4:Wn(e,t),si(t);break;case 13:Wn(e,t),si(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(oh=Pt())),i&4&&Gp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(en=(c=en)||h,Wn(e,t),en=c):Wn(e,t),si(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(Se=t,h=t.child;h!==null;){for(f=Se=h;Se!==null;){switch(u=Se,p=u.child,u.tag){case 0:case 11:case 14:case 15:Na(4,u,u.return);break;case 1:Rs(u,u.return);var _=u.stateNode;if(typeof _.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(S){Ct(i,n,S)}}break;case 5:Rs(u,u.return);break;case 22:if(u.memoizedState!==null){jp(f);continue}}p!==null?(p.return=u,Se=p):jp(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=z0("display",a))}catch(S){Ct(t,t.return,S)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(S){Ct(t,t.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Wn(e,t),si(t),i&4&&Gp(t);break;case 21:break;default:Wn(e,t),si(t)}}function si(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(h_(n)){var i=n;break e}n=n.return}throw Error(le(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ka(r,""),i.flags&=-33);var s=Vp(t);Md(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Vp(t);Sd(t,o,a);break;default:throw Error(le(161))}}catch(l){Ct(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Dx(t,e,n){Se=t,g_(t)}function g_(t,e,n){for(var i=(t.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Ro;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||en;o=Ro;var c=en;if(Ro=a,(en=l)&&!c)for(Se=r;Se!==null;)a=Se,l=a.child,a.tag===22&&a.memoizedState!==null?Xp(r):l!==null?(l.return=a,Se=l):Xp(r);for(;s!==null;)Se=s,g_(s),s=s.sibling;Se=r,Ro=o,en=c}Wp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):Wp(t)}}function Wp(t){for(;Se!==null;){var e=Se;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:en||fc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!en)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:qn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Cp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Cp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Va(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(le(163))}en||e.flags&512&&yd(e)}catch(u){Ct(e,e.return,u)}}if(e===t){Se=null;break}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}}function jp(t){for(;Se!==null;){var e=Se;if(e===t){Se=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Se=n;break}Se=e.return}}function Xp(t){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{fc(4,e)}catch(l){Ct(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ct(e,r,l)}}var s=e.return;try{yd(e)}catch(l){Ct(e,s,l)}break;case 5:var a=e.return;try{yd(e)}catch(l){Ct(e,a,l)}}}catch(l){Ct(e,e.return,l)}if(e===t){Se=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Se=o;break}Se=e.return}}var Ux=Math.ceil,$l=Hi.ReactCurrentDispatcher,sh=Hi.ReactCurrentOwner,Bn=Hi.ReactCurrentBatchConfig,tt=0,Gt=null,Dt=null,$t=0,Cn=0,Ps=yr(0),Ft=0,Ja=null,Yr=0,hc=0,ah=0,Ia=null,_n=null,oh=0,Xs=1/0,bi=null,Yl=!1,Ed=null,dr=null,Po=!1,ir=null,ql=0,Da=0,wd=null,gl=-1,_l=0;function hn(){return tt&6?Pt():gl!==-1?gl:gl=Pt()}function fr(t){return t.mode&1?tt&2&&$t!==0?$t&-$t:vx.transition!==null?(_l===0&&(_l=J0()),_l):(t=ut,t!==0||(t=window.event,t=t===void 0?16:ag(t.type)),t):1}function ti(t,e,n,i){if(50<Da)throw Da=0,wd=null,Error(le(185));ao(t,n,i),(!(tt&2)||t!==Gt)&&(t===Gt&&(!(tt&2)&&(hc|=n),Ft===4&&er(t,$t)),Mn(t,i),n===1&&tt===0&&!(e.mode&1)&&(Xs=Pt()+500,cc&&Sr()))}function Mn(t,e){var n=t.callbackNode;vv(t,e);var i=Nl(t,t===Gt?$t:0);if(i===0)n!==null&&tp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&tp(n),e===1)t.tag===0?_x($p.bind(null,t)):Tg($p.bind(null,t)),hx(function(){!(tt&6)&&Sr()}),n=null;else{switch(eg(i)){case 1:n=If;break;case 4:n=Z0;break;case 16:n=Ll;break;case 536870912:n=Q0;break;default:n=Ll}n=w_(n,__.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function __(t,e){if(gl=-1,_l=0,tt&6)throw Error(le(327));var n=t.callbackNode;if(Os()&&t.callbackNode!==n)return null;var i=Nl(t,t===Gt?$t:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Kl(t,i);else{e=i;var r=tt;tt|=2;var s=x_();(Gt!==t||$t!==e)&&(bi=null,Xs=Pt()+500,Gr(t,e));do try{kx();break}catch(o){v_(t,o)}while(1);Xf(),$l.current=s,tt=r,Dt!==null?e=0:(Gt=null,$t=0,e=Ft)}if(e!==0){if(e===2&&(r=Zu(t),r!==0&&(i=r,e=Td(t,r))),e===1)throw n=Ja,Gr(t,0),er(t,i),Mn(t,Pt()),n;if(e===6)er(t,i);else{if(r=t.current.alternate,!(i&30)&&!Fx(r)&&(e=Kl(t,i),e===2&&(s=Zu(t),s!==0&&(i=s,e=Td(t,s))),e===1))throw n=Ja,Gr(t,0),er(t,i),Mn(t,Pt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(le(345));case 2:Lr(t,_n,bi);break;case 3:if(er(t,i),(i&130023424)===i&&(e=oh+500-Pt(),10<e)){if(Nl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){hn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=sd(Lr.bind(null,t,_n,bi),e);break}Lr(t,_n,bi);break;case 4:if(er(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-ei(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ux(i/1960))-i,10<i){t.timeoutHandle=sd(Lr.bind(null,t,_n,bi),i);break}Lr(t,_n,bi);break;case 5:Lr(t,_n,bi);break;default:throw Error(le(329))}}}return Mn(t,Pt()),t.callbackNode===n?__.bind(null,t):null}function Td(t,e){var n=Ia;return t.current.memoizedState.isDehydrated&&(Gr(t,e).flags|=256),t=Kl(t,e),t!==2&&(e=_n,_n=n,e!==null&&bd(e)),t}function bd(t){_n===null?_n=t:_n.push.apply(_n,t)}function Fx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ni(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function er(t,e){for(e&=~ah,e&=~hc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ei(e),i=1<<n;t[n]=-1,e&=~i}}function $p(t){if(tt&6)throw Error(le(327));Os();var e=Nl(t,0);if(!(e&1))return Mn(t,Pt()),null;var n=Kl(t,e);if(t.tag!==0&&n===2){var i=Zu(t);i!==0&&(e=i,n=Td(t,i))}if(n===1)throw n=Ja,Gr(t,0),er(t,e),Mn(t,Pt()),n;if(n===6)throw Error(le(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Lr(t,_n,bi),Mn(t,Pt()),null}function lh(t,e){var n=tt;tt|=1;try{return t(e)}finally{tt=n,tt===0&&(Xs=Pt()+500,cc&&Sr())}}function qr(t){ir!==null&&ir.tag===0&&!(tt&6)&&Os();var e=tt;tt|=1;var n=Bn.transition,i=ut;try{if(Bn.transition=null,ut=1,t)return t()}finally{ut=i,Bn.transition=n,tt=e,!(tt&6)&&Sr()}}function ch(){Cn=Ps.current,vt(Ps)}function Gr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,fx(n)),Dt!==null)for(n=Dt.return;n!==null;){var i=n;switch(Gf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ol();break;case 3:Ws(),vt(yn),vt(an),Qf();break;case 5:Zf(i);break;case 4:Ws();break;case 13:vt(St);break;case 19:vt(St);break;case 10:$f(i.type._context);break;case 22:case 23:ch()}n=n.return}if(Gt=t,Dt=t=hr(t.current,null),$t=Cn=e,Ft=0,Ja=null,ah=hc=Yr=0,_n=Ia=null,Br!==null){for(e=0;e<Br.length;e++)if(n=Br[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Br=null}return t}function v_(t,e){do{var n=Dt;try{if(Xf(),hl.current=Xl,jl){for(var i=Mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}jl=!1}if($r=0,Vt=Ut=Mt=null,La=!1,Ka=0,sh.current=null,n===null||n.return===null){Ft=1,Ja=e,Dt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=$t,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=o,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var u=h.alternate;u?(h.updateQueue=u.updateQueue,h.memoizedState=u.memoizedState,h.lanes=u.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=Dp(a);if(p!==null){p.flags&=-257,Up(p,a,o,s,e),p.mode&1&&Ip(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var S=new Set;S.add(l),e.updateQueue=S}else _.add(l);break e}else{if(!(e&1)){Ip(s,c,e),uh();break e}l=Error(le(426))}}else if(yt&&o.mode&1){var g=Dp(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Up(g,a,o,s,e),Wf(js(l,o));break e}}s=l=js(l,o),Ft!==4&&(Ft=2),Ia===null?Ia=[s]:Ia.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=t_(s,l,e);bp(s,d);break e;case 1:o=l;var m=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(dr===null||!dr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=n_(s,o,e);bp(s,M);break e}}s=s.return}while(s!==null)}S_(n)}catch(b){e=b,Dt===n&&n!==null&&(Dt=n=n.return);continue}break}while(1)}function x_(){var t=$l.current;return $l.current=Xl,t===null?Xl:t}function uh(){(Ft===0||Ft===3||Ft===2)&&(Ft=4),Gt===null||!(Yr&268435455)&&!(hc&268435455)||er(Gt,$t)}function Kl(t,e){var n=tt;tt|=2;var i=x_();(Gt!==t||$t!==e)&&(bi=null,Gr(t,e));do try{Ox();break}catch(r){v_(t,r)}while(1);if(Xf(),tt=n,$l.current=i,Dt!==null)throw Error(le(261));return Gt=null,$t=0,Ft}function Ox(){for(;Dt!==null;)y_(Dt)}function kx(){for(;Dt!==null&&!cv();)y_(Dt)}function y_(t){var e=E_(t.alternate,t,Cn);t.memoizedProps=t.pendingProps,e===null?S_(t):Dt=e,sh.current=null}function S_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Lx(n,e),n!==null){n.flags&=32767,Dt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ft=6,Dt=null;return}}else if(n=Px(n,e,Cn),n!==null){Dt=n;return}if(e=e.sibling,e!==null){Dt=e;return}Dt=e=t}while(e!==null);Ft===0&&(Ft=5)}function Lr(t,e,n){var i=ut,r=Bn.transition;try{Bn.transition=null,ut=1,Bx(t,e,n,i)}finally{Bn.transition=r,ut=i}return null}function Bx(t,e,n,i){do Os();while(ir!==null);if(tt&6)throw Error(le(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(le(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(xv(t,s),t===Gt&&(Dt=Gt=null,$t=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Po||(Po=!0,w_(Ll,function(){return Os(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Bn.transition,Bn.transition=null;var a=ut;ut=1;var o=tt;tt|=4,sh.current=null,Ix(t,n),m_(n,t),sx(id),Il=!!nd,id=nd=null,t.current=n,Dx(n),uv(),tt=o,ut=a,Bn.transition=s}else t.current=n;if(Po&&(Po=!1,ir=t,ql=r),s=t.pendingLanes,s===0&&(dr=null),hv(n.stateNode),Mn(t,Pt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Yl)throw Yl=!1,t=Ed,Ed=null,t;return ql&1&&t.tag!==0&&Os(),s=t.pendingLanes,s&1?t===wd?Da++:(Da=0,wd=t):Da=0,Sr(),null}function Os(){if(ir!==null){var t=eg(ql),e=Bn.transition,n=ut;try{if(Bn.transition=null,ut=16>t?16:t,ir===null)var i=!1;else{if(t=ir,ir=null,ql=0,tt&6)throw Error(le(331));var r=tt;for(tt|=4,Se=t.current;Se!==null;){var s=Se,a=s.child;if(Se.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Se=c;Se!==null;){var h=Se;switch(h.tag){case 0:case 11:case 15:Na(8,h,s)}var f=h.child;if(f!==null)f.return=h,Se=f;else for(;Se!==null;){h=Se;var u=h.sibling,p=h.return;if(f_(h),h===c){Se=null;break}if(u!==null){u.return=p,Se=u;break}Se=p}}}var _=s.alternate;if(_!==null){var S=_.child;if(S!==null){_.child=null;do{var g=S.sibling;S.sibling=null,S=g}while(S!==null)}}Se=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Se=a;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Na(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Se=d;break e}Se=s.return}}var m=t.current;for(Se=m;Se!==null;){a=Se;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,Se=y;else e:for(a=m;Se!==null;){if(o=Se,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:fc(9,o)}}catch(b){Ct(o,o.return,b)}if(o===a){Se=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,Se=M;break e}Se=o.return}}if(tt=r,Sr(),hi&&typeof hi.onPostCommitFiberRoot=="function")try{hi.onPostCommitFiberRoot(rc,t)}catch{}i=!0}return i}finally{ut=n,Bn.transition=e}}return!1}function Yp(t,e,n){e=js(n,e),e=t_(t,e,1),t=ur(t,e,1),e=hn(),t!==null&&(ao(t,1,e),Mn(t,e))}function Ct(t,e,n){if(t.tag===3)Yp(t,t,n);else for(;e!==null;){if(e.tag===3){Yp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(dr===null||!dr.has(i))){t=js(n,t),t=n_(e,t,1),e=ur(e,t,1),t=hn(),e!==null&&(ao(e,1,t),Mn(e,t));break}}e=e.return}}function zx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=hn(),t.pingedLanes|=t.suspendedLanes&n,Gt===t&&($t&n)===n&&(Ft===4||Ft===3&&($t&130023424)===$t&&500>Pt()-oh?Gr(t,0):ah|=n),Mn(t,e)}function M_(t,e){e===0&&(t.mode&1?(e=yo,yo<<=1,!(yo&130023424)&&(yo=4194304)):e=1);var n=hn();t=Oi(t,e),t!==null&&(ao(t,e,n),Mn(t,n))}function Hx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),M_(t,n)}function Vx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(le(314))}i!==null&&i.delete(e),M_(t,n)}var E_;E_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yn.current)xn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return xn=!1,Rx(t,e,n);xn=!!(t.flags&131072)}else xn=!1,yt&&e.flags&1048576&&bg(e,zl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ml(t,e),t=e.pendingProps;var r=Hs(e,an.current);Fs(e,n),r=eh(null,e,i,t,r,n);var s=th();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Sn(i)?(s=!0,kl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,qf(e),r.updater=uc,e.stateNode=r,r._reactInternals=e,fd(e,i,t,n),e=md(null,e,i,!0,s,n)):(e.tag=0,yt&&s&&Vf(e),dn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ml(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Wx(i),t=qn(i,t),r){case 0:e=pd(null,e,i,t,n);break e;case 1:e=kp(null,e,i,t,n);break e;case 11:e=Fp(null,e,i,t,n);break e;case 14:e=Op(null,e,i,qn(i.type,t),n);break e}throw Error(le(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),pd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),kp(t,e,i,r,n);case 3:e:{if(a_(e),t===null)throw Error(le(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Pg(t,e),Gl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=js(Error(le(423)),e),e=Bp(t,e,i,n,r);break e}else if(i!==r){r=js(Error(le(424)),e),e=Bp(t,e,i,n,r);break e}else for(Pn=cr(e.stateNode.containerInfo.firstChild),Ln=e,yt=!0,Zn=null,n=Dg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vs(),i===r){e=ki(t,e,n);break e}dn(t,e,i,n)}e=e.child}return e;case 5:return Ug(e),t===null&&cd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,rd(i,r)?a=null:s!==null&&rd(i,s)&&(e.flags|=32),s_(t,e),dn(t,e,a,n),e.child;case 6:return t===null&&cd(e),null;case 13:return o_(t,e,n);case 4:return Kf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Gs(e,null,i,n):dn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),Fp(t,e,i,r,n);case 7:return dn(t,e,e.pendingProps,n),e.child;case 8:return dn(t,e,e.pendingProps.children,n),e.child;case 12:return dn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,mt(Hl,i._currentValue),i._currentValue=a,s!==null)if(ni(s.value,a)){if(s.children===r.children&&!yn.current){e=ki(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ni(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ud(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(le(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),ud(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}dn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Fs(e,n),r=Hn(r),i=i(r),e.flags|=1,dn(t,e,i,n),e.child;case 14:return i=e.type,r=qn(i,e.pendingProps),r=qn(i.type,r),Op(t,e,i,r,n);case 15:return i_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),ml(t,e),e.tag=1,Sn(i)?(t=!0,kl(e)):t=!1,Fs(e,n),Ng(e,i,r),fd(e,i,r,n),md(null,e,i,!0,t,n);case 19:return l_(t,e,n);case 22:return r_(t,e,n)}throw Error(le(156,e.tag))};function w_(t,e){return K0(t,e)}function Gx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,e,n,i){return new Gx(t,e,n,i)}function dh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Wx(t){if(typeof t=="function")return dh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Pf)return 11;if(t===Lf)return 14}return 2}function hr(t,e){var n=t.alternate;return n===null?(n=kn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function vl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")dh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ys:return Wr(n.children,r,s,e);case Rf:a=8,r|=8;break;case Fu:return t=kn(12,n,e,r|2),t.elementType=Fu,t.lanes=s,t;case Ou:return t=kn(13,n,e,r),t.elementType=Ou,t.lanes=s,t;case ku:return t=kn(19,n,e,r),t.elementType=ku,t.lanes=s,t;case I0:return pc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L0:a=10;break e;case N0:a=9;break e;case Pf:a=11;break e;case Lf:a=14;break e;case Zi:a=16,i=null;break e}throw Error(le(130,t==null?t:typeof t,""))}return e=kn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Wr(t,e,n,i){return t=kn(7,t,i,e),t.lanes=n,t}function pc(t,e,n,i){return t=kn(22,t,i,e),t.elementType=I0,t.lanes=n,t.stateNode={isHidden:!1},t}function Kc(t,e,n){return t=kn(6,t,null,e),t.lanes=n,t}function Zc(t,e,n){return e=kn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function jx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lc(0),this.expirationTimes=Lc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function fh(t,e,n,i,r,s,a,o,l){return t=new jx(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=kn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qf(s),t}function Xx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function T_(t){if(!t)return _r;t=t._reactInternals;e:{if(Qr(t)!==t||t.tag!==1)throw Error(le(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(le(171))}if(t.tag===1){var n=t.type;if(Sn(n))return wg(t,n,e)}return e}function b_(t,e,n,i,r,s,a,o,l){return t=fh(n,i,!0,t,r,s,a,o,l),t.context=T_(null),n=t.current,i=hn(),r=fr(n),s=Ni(i,r),s.callback=e??null,ur(n,s,r),t.current.lanes=r,ao(t,r,i),Mn(t,i),t}function mc(t,e,n,i){var r=e.current,s=hn(),a=fr(r);return n=T_(n),e.context===null?e.context=n:e.pendingContext=n,e=Ni(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ur(r,e,a),t!==null&&(ti(t,r,a,s),fl(t,r,a)),a}function Zl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function hh(t,e){qp(t,e),(t=t.alternate)&&qp(t,e)}function $x(){return null}var C_=typeof reportError=="function"?reportError:function(t){console.error(t)};function ph(t){this._internalRoot=t}gc.prototype.render=ph.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(le(409));mc(t,e,null,null)};gc.prototype.unmount=ph.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qr(function(){mc(null,t,null,null)}),e[Fi]=null}};function gc(t){this._internalRoot=t}gc.prototype.unstable_scheduleHydration=function(t){if(t){var e=ig();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ji.length&&e!==0&&e<Ji[n].priority;n++);Ji.splice(n,0,t),n===0&&sg(t)}};function mh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Kp(){}function Yx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Zl(a);s.call(c)}}var a=b_(e,i,t,0,null,!1,!1,"",Kp);return t._reactRootContainer=a,t[Fi]=a.current,ja(t.nodeType===8?t.parentNode:t),qr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Zl(l);o.call(c)}}var l=fh(t,0,!1,null,null,!1,!1,"",Kp);return t._reactRootContainer=l,t[Fi]=l.current,ja(t.nodeType===8?t.parentNode:t),qr(function(){mc(e,l,n,i)}),l}function vc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Zl(a);o.call(l)}}mc(e,a,t,r)}else a=Yx(n,e,t,r,i);return Zl(a)}tg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ma(e.pendingLanes);n!==0&&(Df(e,n|1),Mn(e,Pt()),!(tt&6)&&(Xs=Pt()+500,Sr()))}break;case 13:qr(function(){var i=Oi(t,1);if(i!==null){var r=hn();ti(i,t,1,r)}}),hh(t,1)}};Uf=function(t){if(t.tag===13){var e=Oi(t,134217728);if(e!==null){var n=hn();ti(e,t,134217728,n)}hh(t,134217728)}};ng=function(t){if(t.tag===13){var e=fr(t),n=Oi(t,e);if(n!==null){var i=hn();ti(n,t,e,i)}hh(t,e)}};ig=function(){return ut};rg=function(t,e){var n=ut;try{return ut=t,e()}finally{ut=n}};Yu=function(t,e,n){switch(e){case"input":if(Hu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=lc(i);if(!r)throw Error(le(90));U0(i),Hu(i,r)}}}break;case"textarea":O0(t,n);break;case"select":e=n.value,e!=null&&Ns(t,!!n.multiple,e,!1)}};W0=lh;j0=qr;var qx={usingClientEntryPoint:!1,Events:[lo,ws,lc,V0,G0,lh]},fa={findFiberByHostInstance:kr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Kx={bundleType:fa.bundleType,version:fa.version,rendererPackageName:fa.rendererPackageName,rendererConfig:fa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Y0(t),t===null?null:t.stateNode},findFiberByHostInstance:fa.findFiberByHostInstance||$x,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lo.isDisabled&&Lo.supportsFiber)try{rc=Lo.inject(Kx),hi=Lo}catch{}}In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qx;In.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mh(e))throw Error(le(200));return Xx(t,e,null,n)};In.createRoot=function(t,e){if(!mh(t))throw Error(le(299));var n=!1,i="",r=C_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=fh(t,1,!1,null,null,n,!1,i,r),t[Fi]=e.current,ja(t.nodeType===8?t.parentNode:t),new ph(e)};In.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(le(188)):(t=Object.keys(t).join(","),Error(le(268,t)));return t=Y0(e),t=t===null?null:t.stateNode,t};In.flushSync=function(t){return qr(t)};In.hydrate=function(t,e,n){if(!_c(e))throw Error(le(200));return vc(null,t,e,!0,n)};In.hydrateRoot=function(t,e,n){if(!mh(t))throw Error(le(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=C_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=b_(e,null,t,1,n??null,r,!1,s,a),t[Fi]=e.current,ja(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new gc(e)};In.render=function(t,e,n){if(!_c(e))throw Error(le(200));return vc(null,t,e,!1,n)};In.unmountComponentAtNode=function(t){if(!_c(t))throw Error(le(40));return t._reactRootContainer?(qr(function(){vc(null,null,t,!1,function(){t._reactRootContainer=null,t[Fi]=null})}),!0):!1};In.unstable_batchedUpdates=lh;In.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!_c(n))throw Error(le(200));if(t==null||t._reactInternals===void 0)throw Error(le(38));return vc(t,e,n,!1,i)};In.version="18.2.0-next-9e3b772b8-20220608";function A_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A_)}catch(t){console.error(t)}}A_(),b0.exports=In;var Zx=b0.exports,Zp=Zx;Du.createRoot=Zp.createRoot,Du.hydrateRoot=Zp.hydrateRoot;var R_={exports:{}},Qx="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Jx=Qx,e2=Jx;function P_(){}function L_(){}L_.resetWarningCache=P_;var t2=function(){function t(i,r,s,a,o,l){if(l!==e2){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:L_,resetWarningCache:P_};return n.PropTypes=n,n};R_.exports=t2();var n2=R_.exports;const _t=m0(n2);function Qp(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Jp(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Qp(Object(n),!0).forEach(function(i){N_(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Qp(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function xl(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?xl=function(e){return typeof e}:xl=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xl(t)}function N_(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i2(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function r2(t,e){if(t==null)return{};var n=i2(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function s2(t,e){return a2(t)||o2(t,e)||l2(t,e)||c2()}function a2(t){if(Array.isArray(t))return t}function o2(t,e){var n=t&&(typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"]);if(n!=null){var i=[],r=!0,s=!1,a,o;try{for(n=n.call(t);!(r=(a=n.next()).done)&&(i.push(a.value),!(e&&i.length===e));r=!0);}catch(l){s=!0,o=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(s)throw o}}return i}}function l2(t,e){if(t){if(typeof t=="string")return em(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return em(t,e)}}function em(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function c2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var on=function(e,n,i){var r=!!i,s=ct.useRef(i);ct.useEffect(function(){s.current=i},[i]),ct.useEffect(function(){if(!r||!e)return function(){};var a=function(){s.current&&s.current.apply(s,arguments)};return e.on(n,a),function(){e.off(n,a)}},[r,n,e,s])},u2=function(e){var n=ct.useRef(e);return ct.useEffect(function(){n.current=e},[e]),n.current},Ql=function(e){return e!==null&&xl(e)==="object"},tm="[object Object]",d2=function t(e,n){if(!Ql(e)||!Ql(n))return e===n;var i=Array.isArray(e),r=Array.isArray(n);if(i!==r)return!1;var s=Object.prototype.toString.call(e)===tm,a=Object.prototype.toString.call(n)===tm;if(s!==a)return!1;if(!s&&!i)return e===n;var o=Object.keys(e),l=Object.keys(n);if(o.length!==l.length)return!1;for(var c={},h=0;h<o.length;h+=1)c[o[h]]=!0;for(var f=0;f<l.length;f+=1)c[l[f]]=!0;var u=Object.keys(c);if(u.length!==o.length)return!1;var p=e,_=n,S=function(d){return t(p[d],_[d])};return u.every(S)},f2=function(e,n,i){return Ql(e)?Object.keys(e).reduce(function(r,s){var a=!Ql(n)||!d2(e[s],n[s]);return i.includes(s)?(a&&console.warn("Unsupported prop change: options.".concat(s," is not a mutable property.")),r):a?Jp(Jp({},r||{}),{},N_({},s,e[s])):r},null):null},I_=ct.createContext(null);I_.displayName="ElementsContext";var h2=function(e,n){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(n," in an <Elements> provider."));return e};_t.any,_t.object;_t.func.isRequired;var D_=ct.createContext(null);D_.displayName="CheckoutSdkContext";var p2=function(e,n){if(!e)throw new Error("Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat(n," in an <CheckoutProvider> provider."));return e},m2=ct.createContext(null);m2.displayName="CheckoutContext";_t.any,_t.shape({fetchClientSecret:_t.func.isRequired,elementsOptions:_t.object}).isRequired;var nm=function(e){var n=ct.useContext(D_),i=ct.useContext(I_);if(n&&i)throw new Error("You cannot wrap the part of your app that ".concat(e," in both <CheckoutProvider> and <Elements> providers."));return n?p2(n,e):h2(i,e)},g2=["mode"],_2=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},Lt=function(e,n){var i="".concat(_2(e),"Element"),r=function(l){var c=l.id,h=l.className,f=l.options,u=f===void 0?{}:f,p=l.onBlur,_=l.onFocus,S=l.onReady,g=l.onChange,d=l.onEscape,m=l.onClick,y=l.onLoadError,M=l.onLoaderStart,b=l.onNetworksChange,C=l.onConfirm,R=l.onCancel,v=l.onShippingAddressChange,T=l.onShippingRateChange,W=l.onSavedPaymentMethodRemove,I=l.onSavedPaymentMethodUpdate,V=nm("mounts <".concat(i,">")),U="elements"in V?V.elements:null,$="checkoutSdk"in V?V.checkoutSdk:null,F=ct.useState(null),P=s2(F,2),O=P[0],H=P[1],G=ct.useRef(null),te=ct.useRef(null);on(O,"blur",p),on(O,"focus",_),on(O,"escape",d),on(O,"click",m),on(O,"loaderror",y),on(O,"loaderstart",M),on(O,"networkschange",b),on(O,"confirm",C),on(O,"cancel",R),on(O,"shippingaddresschange",v),on(O,"shippingratechange",T),on(O,"savedpaymentmethodremove",W),on(O,"savedpaymentmethodupdate",I),on(O,"change",g);var ie;S&&(e==="expressCheckout"?ie=S:ie=function(){S(O)}),on(O,"ready",ie),ct.useLayoutEffect(function(){if(G.current===null&&te.current!==null&&(U||$)){var ve=null;if($)switch(e){case"payment":ve=$.createPaymentElement(u);break;case"address":if("mode"in u){var Xe=u.mode,He=r2(u,g2);if(Xe==="shipping")ve=$.createShippingAddressElement(He);else if(Xe==="billing")ve=$.createBillingAddressElement(He);else throw new Error("Invalid options.mode. mode must be 'billing' or 'shipping'.")}else throw new Error("You must supply options.mode. mode must be 'billing' or 'shipping'.");break;case"expressCheckout":ve=$.createExpressCheckoutElement(u);break;case"currencySelector":ve=$.createCurrencySelectorElement();break;case"taxId":ve=$.createTaxIdElement(u);break;default:throw new Error("Invalid Element type ".concat(i,". You must use either the <PaymentElement />, <AddressElement options={{mode: 'shipping'}} />, <AddressElement options={{mode: 'billing'}} />, or <ExpressCheckoutElement />."))}else U&&(ve=U.create(e,u));G.current=ve,H(ve),ve&&ve.mount(te.current)}},[U,$,u]);var ae=u2(u);return ct.useEffect(function(){if(G.current){var ve=f2(u,ae,["paymentRequest"]);ve&&"update"in G.current&&G.current.update(ve)}},[u,ae]),ct.useLayoutEffect(function(){return function(){if(G.current&&typeof G.current.destroy=="function")try{G.current.destroy(),G.current=null}catch{}}},[]),ct.createElement("div",{id:c,className:h,ref:te})},s=function(l){nm("mounts <".concat(i,">"));var c=l.id,h=l.className;return ct.createElement("div",{id:c,className:h})},a=n?s:r;return a.propTypes={id:_t.string,className:_t.string,onChange:_t.func,onBlur:_t.func,onFocus:_t.func,onReady:_t.func,onEscape:_t.func,onClick:_t.func,onLoadError:_t.func,onLoaderStart:_t.func,onNetworksChange:_t.func,onConfirm:_t.func,onCancel:_t.func,onShippingAddressChange:_t.func,onShippingRateChange:_t.func,onSavedPaymentMethodRemove:_t.func,onSavedPaymentMethodUpdate:_t.func,options:_t.object},a.displayName=i,a.__elementType=e,a},Nt=typeof window>"u",v2=ct.createContext(null);v2.displayName="EmbeddedCheckoutProviderContext";Lt("auBankAccount",Nt);var x2=Lt("card",Nt);Lt("cardNumber",Nt);Lt("cardExpiry",Nt);Lt("cardCvc",Nt);Lt("fpxBank",Nt);Lt("iban",Nt);Lt("idealBank",Nt);Lt("p24Bank",Nt);Lt("epsBank",Nt);Lt("payment",Nt);Lt("expressCheckout",Nt);Lt("currencySelector",Nt);Lt("paymentRequestButton",Nt);Lt("linkAuthentication",Nt);Lt("address",Nt);Lt("shippingAddress",Nt);Lt("paymentMethodMessaging",Nt);Lt("affirmMessage",Nt);Lt("afterpayClearpayMessage",Nt);Lt("taxId",Nt);var gh=Object.defineProperty,y2=Object.getOwnPropertyDescriptor,S2=Object.getOwnPropertyNames,M2=Object.prototype.hasOwnProperty,E2=(t,e)=>{for(var n in e)gh(t,n,{get:e[n],enumerable:!0})},w2=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of S2(e))!M2.call(t,r)&&r!==n&&gh(t,r,{get:()=>e[r],enumerable:!(i=y2(e,r))||i.enumerable});return t},T2=t=>w2(gh({},"__esModule",{value:!0}),t),im=(t,e,n)=>new Promise((i,r)=>{var s=l=>{try{o(n.next(l))}catch(c){r(c)}},a=l=>{try{o(n.throw(l))}catch(c){r(c)}},o=l=>l.done?i(l.value):Promise.resolve(l.value).then(s,a);o((n=n.apply(t,e)).next())}),U_={};E2(U_,{SubmissionError:()=>Nr,appendExtraData:()=>yl,createClient:()=>F_,getDefaultClient:()=>X2,isSubmissionError:()=>U2});var _h=T2(U_),rr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",b2=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;function C2(t){t=String(t);for(var e,n,i,r,s="",a=0,o=t.length%3;a<t.length;){if((n=t.charCodeAt(a++))>255||(i=t.charCodeAt(a++))>255||(r=t.charCodeAt(a++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");e=n<<16|i<<8|r,s+=rr.charAt(e>>18&63)+rr.charAt(e>>12&63)+rr.charAt(e>>6&63)+rr.charAt(e&63)}return o?s.slice(0,o-3)+"===".substring(o):s}function A2(t){if(t=String(t).replace(/[\t\n\f\r ]+/g,""),!b2.test(t))throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");t+="==".slice(2-(t.length&3));for(var e,n="",i,r,s=0;s<t.length;)e=rr.indexOf(t.charAt(s++))<<18|rr.indexOf(t.charAt(s++))<<12|(i=rr.indexOf(t.charAt(s++)))<<6|(r=rr.indexOf(t.charAt(s++))),n+=i===64?String.fromCharCode(e>>16&255):r===64?String.fromCharCode(e>>16&255,e>>8&255):String.fromCharCode(e>>16&255,e>>8&255,e&255);return n}var R2=()=>navigator.webdriver||!!document.documentElement.getAttribute(A2("d2ViZHJpdmVy"))||!!window.callPhantom||!!window._phantom,P2=class{constructor(){this.loadedAt=Date.now(),this.webdriver=R2()}data(){return{loadedAt:this.loadedAt,webdriver:this.webdriver}}},L2=class{constructor(t){this.kind="success",this.next=t.next}};function N2(t){return"next"in t&&typeof t.next=="string"}var I2=class{constructor(e,n){this.paymentIntentClientSecret=e,this.resubmitKey=n,this.kind="stripePluginPending"}};function D2(t){if("stripe"in t&&"resubmitKey"in t&&typeof t.resubmitKey=="string"){let{stripe:e}=t;return typeof e=="object"&&e!=null&&"paymentIntentClientSecret"in e&&typeof e.paymentIntentClientSecret=="string"}return!1}function U2(t){return t.kind==="error"}var Nr=class{constructor(...t){this.kind="error",this.formErrors=[],this.fieldErrors=new Map;var e;for(let n of t){if(!n.field){this.formErrors.push({code:n.code&&F2(n.code)?n.code:"UNSPECIFIED",message:n.message});continue}let i=(e=this.fieldErrors.get(n.field))!=null?e:[];i.push({code:n.code&&k2(n.code)?n.code:"UNSPECIFIED",message:n.message}),this.fieldErrors.set(n.field,i)}}getFormErrors(){return[...this.formErrors]}getFieldErrors(t){var e;return(e=this.fieldErrors.get(t))!=null?e:[]}getAllFieldErrors(){return Array.from(this.fieldErrors)}};function F2(t){return t in O2}var O2={BLOCKED:"BLOCKED",EMPTY:"EMPTY",FILES_TOO_BIG:"FILES_TOO_BIG",FORM_NOT_FOUND:"FORM_NOT_FOUND",INACTIVE:"INACTIVE",NO_FILE_UPLOADS:"NO_FILE_UPLOADS",PROJECT_NOT_FOUND:"PROJECT_NOT_FOUND",TOO_MANY_FILES:"TOO_MANY_FILES"};function k2(t){return t in B2}var B2={REQUIRED_FIELD_EMPTY:"REQUIRED_FIELD_EMPTY",REQUIRED_FIELD_MISSING:"REQUIRED_FIELD_MISSING",STRIPE_CLIENT_ERROR:"STRIPE_CLIENT_ERROR",STRIPE_SCA_ERROR:"STRIPE_SCA_ERROR",TYPE_EMAIL:"TYPE_EMAIL",TYPE_NUMERIC:"TYPE_NUMERIC",TYPE_TEXT:"TYPE_TEXT"};function z2(t){return"errors"in t&&Array.isArray(t.errors)&&t.errors.every(e=>typeof e.message=="string")||"error"in t&&typeof t.error=="string"}var H2="4.0.0",V2=t=>C2(JSON.stringify(t)),G2=t=>{let e=`@formspree/core@${H2}`;return t?`${t} ${e}`:e};function yl(t,e,n){t instanceof FormData?t.append(e,n):t[e]=n}function W2(t){return t!==null&&typeof t=="object"}var j2=class{constructor(t={}){this.project=t.project,this.stripe=t.stripe,typeof window<"u"&&(this.session=new P2)}submitForm(t,e){return im(this,arguments,function*(n,i,r={}){let s=r.endpoint||"https://formspree.io",a=this.project?`${s}/p/${this.project}/f/${n}`:`${s}/f/${n}`,o={Accept:"application/json","Formspree-Client":G2(r.clientName)};this.session&&(o["Formspree-Session-Data"]=V2(this.session.data())),i instanceof FormData||(o["Content-Type"]="application/json");function l(h){return im(this,null,function*(){try{let f=yield(yield fetch(a,{method:"POST",mode:"cors",body:h instanceof FormData?h:JSON.stringify(h),headers:o})).json();if(W2(f)){if(z2(f))return Array.isArray(f.errors)?new Nr(...f.errors):new Nr({message:f.error});if(D2(f))return new I2(f.stripe.paymentIntentClientSecret,f.resubmitKey);if(N2(f))return new L2({next:f.next})}return new Nr({message:"Unexpected response format"})}catch(f){let u=f instanceof Error?f.message:`Unknown error while posting to Formspree: ${JSON.stringify(f)}`;return new Nr({message:u})}})}if(this.stripe&&r.createPaymentMethod){let h=yield r.createPaymentMethod();if(h.error)return new Nr({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Error creating payment method"});yl(i,"paymentMethod",h.paymentMethod.id);let f=yield l(i);if(f.kind==="error")return f;if(f.kind==="stripePluginPending"){let u=yield this.stripe.handleCardAction(f.paymentIntentClientSecret);if(u.error)return new Nr({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Stripe SCA error"});i instanceof FormData?i.delete("paymentMethod"):delete i.paymentMethod,yl(i,"paymentIntent",u.paymentIntent.id),yl(i,"resubmitKey",f.resubmitKey);let p=yield l(i);return rm(p),p}return f}let c=yield l(i);return rm(c),c})}};function rm(t){let{kind:e}=t;if(e!=="success"&&e!=="error")throw new Error(`Unexpected submission result (kind: ${e})`)}var F_=t=>new j2(t),X2=()=>(Qc||(Qc=F_()),Qc),Qc;function sm(t){let{prefix:e,field:n,errors:i,...r}=t;if(i==null)return null;let s=n?i.getFieldErrors(n):i.getFormErrors();return s.length===0?null:ct.createElement("div",{...r},e?`${e} `:null,s.map(a=>a.message).join(", "))}var $2=De.createContext({elements:null});function Y2(){return De.useContext($2)}var q2=ct.createContext(null);function K2(){return De.useContext(q2)??{client:_h.getDefaultClient()}}var Z2="3.0.0",Q2=`@formspree/react@${Z2}`;function J2(t,e={}){let n=K2(),{client:i=n.client,extraData:r,origin:s}=e,{elements:a}=Y2(),{stripe:o}=i;return async function(l){let c=ey(l)?ty(l):l;if(typeof r=="object")for(let[u,p]of Object.entries(r)){let _;typeof p=="function"?_=await p():_=p,_!==void 0&&_h.appendExtraData(c,u,_)}let h=a==null?void 0:a.getElement(x2),f=o&&h?()=>o.createPaymentMethod({type:"card",card:h,billing_details:ny(c)}):void 0;return i.submitForm(t,c,{endpoint:s,clientName:Q2,createPaymentMethod:f})}}function ey(t){return"preventDefault"in t&&typeof t.preventDefault=="function"}function ty(t){t.preventDefault();let e=t.currentTarget;if(e.tagName!="FORM")throw new Error("submit was triggered for a non-form element");return new FormData(e)}function ny(t){let e={address:iy(t)};for(let n of["name","email","phone"]){let i=t instanceof FormData?t.get(n):t[n];i&&typeof i=="string"&&(e[n]=i)}return e}function iy(t){let e={};for(let[n,i]of[["address_line1","line1"],["address_line2","line2"],["address_city","city"],["address_country","country"],["address_state","state"],["address_postal_code","postal_code"]]){let r=t instanceof FormData?t.get(n):t[n];r&&typeof r=="string"&&(e[i]=r)}return e}function ry(t,e={}){let[n,i]=De.useState(null),[r,s]=De.useState(null),[a,o]=De.useState(!1),[l,c]=De.useState(!1);if(!t)throw new Error('You must provide a form key or hashid (e.g. useForm("myForm") or useForm("123xyz")');let h=J2(t,{client:e.client,extraData:e.data,origin:e.endpoint});return[{errors:n,result:r,submitting:a,succeeded:l},async function(f){o(!0);let u=await h(f);o(!1),_h.isSubmissionError(u)?(i(u),c(!1)):(i(null),s(u),c(!0))},function(){i(null),s(null),o(!1),c(!1)}]}function O_(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=O_(t[e]))&&(i&&(i+=" "),i+=n);else for(e in t)t[e]&&(i&&(i+=" "),i+=e);return i}function ln(){for(var t,e,n=0,i="";n<arguments.length;)(t=arguments[n++])&&(e=O_(t))&&(i&&(i+=" "),i+=e);return i}const sy="_button_1nt2b_1",am={button:sy,"button-content":"_button-content_1nt2b_18"};function ay({width:t,height:e,onClick:n,children:i}){return w.jsx("button",{className:am.button,onClick:n,style:{width:t,height:e},children:w.jsx("span",{className:am["button-content"],children:i})})}const oy="_button_dczou_1",ly="_text_dczou_11",cy="_icon_dczou_21",Jc={button:oy,text:ly,icon:cy};function ha({width:t,height:e,icon:n,children:i,color:r,backgroundColor:s,link:a,onClick:o}){const l=w.jsxs("button",{className:Jc.button,style:{width:t,height:e,backgroundColor:s,color:r},onClick:o,children:[w.jsx("div",{className:Jc.text,children:i}),w.jsx("div",{className:Jc.icon,children:n})]});return a?w.jsx("a",{href:a,target:"_blank",rel:"noreferrer",children:l}):l}const uy={"input-field":"_input-field_1u3wc_1"};function om({width:t,height:e,type:n,value:i,name:r,placeholder:s,label:a}){return w.jsxs("div",{style:{maxWidth:t},className:uy["input-field"],children:[w.jsx("label",{children:a}),w.jsx("input",{style:{height:e},type:n,value:i,name:r,placeholder:s,required:!0})]})}const dy={"text-area-field":"_text-area-field_xfy2x_1"};function fy({width:t,height:e,type:n,value:i,name:r,placeholder:s,label:a}){return w.jsxs("div",{style:{maxWidth:t},className:dy["text-area-field"],children:[w.jsx("label",{children:a}),w.jsx("textarea",{style:{height:e},type:n,value:i,name:r,placeholder:s,required:!0})]})}const hy="_button_jzvvy_7",py="_label_jzvvy_28",my="_icon_jzvvy_34",No={"submit-button":"_submit-button_jzvvy_1",button:hy,label:py,icon:my};function gy({width:t,height:e,icon:n,children:i,color:r,backgroundColor:s,disabled:a}){return w.jsx("div",{className:No["submit-button"],style:{width:t,height:e},children:w.jsxs("button",{type:"submit",className:No.button,style:{width:t,height:e,backgroundColor:s,color:r},disabled:a,children:[w.jsx("span",{className:No.label,children:i}),w.jsx("span",{className:No.icon,"aria-hidden":"true",children:n})]})})}const _y="_spinner_e6q3i_1",vy={spinner:_y,"spinner-fzua35":"_spinner-fzua35_e6q3i_1"};function xy(){return w.jsxs("div",{className:vy.spinner,children:[w.jsx("div",{}),w.jsx("div",{}),w.jsx("div",{}),w.jsx("div",{}),w.jsx("div",{}),w.jsx("div",{}),w.jsx("div",{}),w.jsx("div",{}),w.jsx("div",{}),w.jsx("div",{})]})}var k_={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},lm=ct.createContext&&ct.createContext(k_),pr=globalThis&&globalThis.__assign||function(){return pr=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},pr.apply(this,arguments)},yy=globalThis&&globalThis.__rest||function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n};function B_(t){return t&&t.map(function(e,n){return ct.createElement(e.tag,pr({key:n},e.attr),B_(e.child))})}function Bt(t){return function(e){return ct.createElement(Sy,pr({attr:pr({},t.attr)},e),B_(t.child))}}function Sy(t){var e=function(n){var i=t.attr,r=t.size,s=t.title,a=yy(t,["attr","size","title"]),o=r||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),ct.createElement("svg",pr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,a,{className:l,style:pr(pr({color:t.color||n.color},n.style),t.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),s&&ct.createElement("title",null,s),t.children)};return lm!==void 0?ct.createElement(lm.Consumer,null,function(n){return e(n)}):e(k_)}function Io(t){return Bt({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]})(t)}function My(t){return Bt({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M145.2 96l66 746.6L512 928l299.6-85.4L878.9 96H145.2zm595 177.1l-4.8 47.2-1.7 19.5H382.3l8.2 94.2h335.1l-3.3 24.3-21.2 242.2-1.7 16.2-187 51.6v.3h-1.2l-.3.1v-.1h-.1l-188.6-52L310.8 572h91.1l6.5 73.2 102.4 27.7h.4l102-27.6 11.4-118.6H510.9v-.1H306l-22.8-253.5-1.7-24.3h460.3l-1.6 24.3z"}}]})(t)}function Ey(t){return Bt({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"}}]})(t)}function cm(t){return Bt({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]})(t)}function wy(t){return Bt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18.002 2.997H5.999A3.011 3.011 0 0 0 2.997 6v12.002a3.012 3.012 0 0 0 3.002 3.001h12.003a3.012 3.012 0 0 0 3.001-3.001V6a3.012 3.012 0 0 0-3.001-3.003zm-1.64 12.647c-.152.36-.389.68-.693.927a3.594 3.594 0 0 1-1.206.614c-.49.151-1.074.229-1.75.229H7.888V6.909h5.103c.943 0 1.7.213 2.267.646.569.436.854 1.082.854 1.958 0 .528-.13.983-.389 1.357-.259.373-.63.664-1.111.868v.034c.642.135 1.137.438 1.464.912.327.473.493 1.069.493 1.789 0 .405-.078.788-.225 1.147l.02.021v.003zm-2.084-2.589c-.309-.282-.739-.419-1.297-.419H9.737v3.276h3.253c.554 0 .991-.144 1.298-.435.308-.289.464-.701.464-1.229-.005-.518-.156-.919-.464-1.193h-.014.004zm-.451-2.119c.299-.251.444-.613.444-1.084 0-.526-.131-.902-.397-1.116-.264-.214-.646-.326-1.146-.326H9.727v2.898h3.001c.436.001.81-.127 1.099-.372z"}}]})(t)}function Ty(t){return Bt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4.192 3.143h15.615l-1.42 16.034-6.404 1.812-6.369-1.813L4.192 3.143zM16.9 6.424l-9.8-.002.158 1.949 7.529.002-.189 2.02H9.66l.179 1.913h4.597l-.272 2.62-2.164.598-2.197-.603-.141-1.569h-1.94l.216 2.867L12 17.484l3.995-1.137.905-9.923z"}}]})(t)}function by(t){return Bt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"}}]})(t)}function Cy(t){return Bt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z"}}]})(t)}function Ay(t){return Bt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"}}]})(t)}function Ry(t){return Bt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"}}]})(t)}function Py(t){return Bt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M15.698 7.287 8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025 1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.031 1.031 0 0 0 0-1.457"}}]})(t)}function Ly(t){return Bt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3.112 3.645A1.5 1.5 0 0 1 4.605 2H7a.5.5 0 0 1 .5.5v.382c0 .696-.497 1.182-.872 1.469a.459.459 0 0 0-.115.118.113.113 0 0 0-.012.025L6.5 4.5v.003l.003.01c.004.01.014.028.036.053a.86.86 0 0 0 .27.194C7.09 4.9 7.51 5 8 5c.492 0 .912-.1 1.19-.24a.86.86 0 0 0 .271-.194.213.213 0 0 0 .039-.063v-.009a.112.112 0 0 0-.012-.025.459.459 0 0 0-.115-.118c-.375-.287-.872-.773-.872-1.469V2.5A.5.5 0 0 1 9 2h2.395a1.5 1.5 0 0 1 1.493 1.645L12.645 6.5h.237c.195 0 .42-.147.675-.48.21-.274.528-.52.943-.52.568 0 .947.447 1.154.862C15.877 6.807 16 7.387 16 8s-.123 1.193-.346 1.638c-.207.415-.586.862-1.154.862-.415 0-.733-.246-.943-.52-.255-.333-.48-.48-.675-.48h-.237l.243 2.855A1.5 1.5 0 0 1 11.395 14H9a.5.5 0 0 1-.5-.5v-.382c0-.696.497-1.182.872-1.469a.459.459 0 0 0 .115-.118.113.113 0 0 0 .012-.025L9.5 11.5v-.003a.214.214 0 0 0-.039-.064.859.859 0 0 0-.27-.193C8.91 11.1 8.49 11 8 11c-.491 0-.912.1-1.19.24a.859.859 0 0 0-.271.194.214.214 0 0 0-.039.063v.003l.001.006a.113.113 0 0 0 .012.025c.016.027.05.068.115.118.375.287.872.773.872 1.469v.382a.5.5 0 0 1-.5.5H4.605a1.5 1.5 0 0 1-1.493-1.645L3.356 9.5h-.238c-.195 0-.42.147-.675.48-.21.274-.528.52-.943.52-.568 0-.947-.447-1.154-.862C.123 9.193 0 8.613 0 8s.123-1.193.346-1.638C.553 5.947.932 5.5 1.5 5.5c.415 0 .733.246.943.52.255.333.48.48.675.48h.238l-.244-2.855zM4.605 3a.5.5 0 0 0-.498.55l.001.007.29 3.4A.5.5 0 0 1 3.9 7.5h-.782c-.696 0-1.182-.497-1.469-.872a.459.459 0 0 0-.118-.115.112.112 0 0 0-.025-.012L1.5 6.5h-.003a.213.213 0 0 0-.064.039.86.86 0 0 0-.193.27C1.1 7.09 1 7.51 1 8c0 .491.1.912.24 1.19.07.14.14.225.194.271a.213.213 0 0 0 .063.039H1.5l.006-.001a.112.112 0 0 0 .025-.012.459.459 0 0 0 .118-.115c.287-.375.773-.872 1.469-.872H3.9a.5.5 0 0 1 .498.542l-.29 3.408a.5.5 0 0 0 .497.55h1.878c-.048-.166-.195-.352-.463-.557-.274-.21-.52-.528-.52-.943 0-.568.447-.947.862-1.154C6.807 10.123 7.387 10 8 10s1.193.123 1.638.346c.415.207.862.586.862 1.154 0 .415-.246.733-.52.943-.268.205-.415.39-.463.557h1.878a.5.5 0 0 0 .498-.55l-.001-.007-.29-3.4A.5.5 0 0 1 12.1 8.5h.782c.696 0 1.182.497 1.469.872.05.065.091.099.118.115.013.008.021.01.025.012a.02.02 0 0 0 .006.001h.003a.214.214 0 0 0 .064-.039.86.86 0 0 0 .193-.27c.14-.28.24-.7.24-1.191 0-.492-.1-.912-.24-1.19a.86.86 0 0 0-.194-.271.215.215 0 0 0-.063-.039H14.5l-.006.001a.113.113 0 0 0-.025.012.459.459 0 0 0-.118.115c-.287.375-.773.872-1.469.872H12.1a.5.5 0 0 1-.498-.543l.29-3.407a.5.5 0 0 0-.497-.55H9.517c.048.166.195.352.463.557.274.21.52.528.52.943 0 .568-.447.947-.862 1.154C9.193 5.877 8.613 6 8 6s-1.193-.123-1.638-.346C5.947 5.447 5.5 5.068 5.5 4.5c0-.415.246-.733.52-.943.268-.205.415-.39.463-.557H4.605z"}}]})(t)}function Ny(t){return Bt({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M18 12h4"}},{tag:"path",attr:{d:"M20 10v4"}},{tag:"path",attr:{d:"M11 12h4"}},{tag:"path",attr:{d:"M13 10v4"}},{tag:"path",attr:{d:"M9 9a3 3 0 0 0 -3 -3h-.5a3.5 3.5 0 0 0 -3.5 3.5v5a3.5 3.5 0 0 0 3.5 3.5h.5a3 3 0 0 0 3 -3"}}]})(t)}function z_(t){return Bt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"}}]})(t)}function Iy(t){return Bt({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"}}]})(t)}function Dy(t){return Bt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.94631 9.31555C1.42377 9.14137 1.41965 8.86034 1.95706 8.6812L21.0433 2.31913C21.5717 2.14297 21.8748 2.43878 21.7268 2.95706L16.2736 22.0433C16.1226 22.5718 15.8179 22.5901 15.5946 22.0877L12.0002 14.0002L18.0002 6.00017L10.0002 12.0002L1.94631 9.31555Z"}}]})(t)}function Uy(t){return Bt({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"}}]})(t)}function Fy(t){return Bt({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M6.9297 13.6875c.164-.0938.375-.0352.4687.1328l.0625.1055c.4805.8515.9805 1.6601 1.5 2.4258.6133.9023 1.3047 1.8164 2.0743 2.7421a.3455.3455 0 0 1-.0391.4844l-.0742.0664c-2.543 2.2227-4.1914 2.664-4.9532 1.332-.746-1.3046-.4765-3.6718.8086-7.1093a.3437.3437 0 0 1 .1524-.1797ZM17.75 16.3008c.1836-.0313.3594.086.3945.2695l.0196.1016c.6289 3.2851.1875 4.9297-1.3243 4.9297-1.4804 0-3.3593-1.4024-5.6484-4.2032a.3271.3271 0 0 1-.0742-.2226c0-.1875.1562-.3399.3437-.3399h.1211a32.9838 32.9838 0 0 0 2.8086-.0976c1.0703-.086 2.1914-.2305 3.3594-.4375zm.871-6.9766a.3528.3528 0 0 1 .4454-.211l.1016.0352c3.2617 1.1094 4.5039 2.332 3.7187 3.6641-.7656 1.3047-2.9922 2.254-6.6836 2.8477-.082.0117-.168-.004-.2383-.047-.168-.0976-.2265-.3085-.125-.4765l.0625-.1054c.504-.8438.957-1.6836 1.3672-2.5235.4766-.9883.9297-2.0508 1.3516-3.1836zM7.797 8.3398c.082-.0117.168.004.2383.047.168.0976.2265.3085.125.4765l-.0625.1054a34.0882 34.0882 0 0 0-1.3672 2.5235c-.4766.9883-.9297 2.0508-1.3516 3.1836a.3528.3528 0 0 1-.4453.211l-.1016-.0352c-3.2617-1.1094-4.5039-2.332-3.7187-3.6641.7656-1.3047 2.9922-2.254 6.6836-2.8477Zm5.2812-3.9843c2.543-2.2227 4.1914-2.664 4.9532-1.332.746 1.3046.4765 3.6718-.8086 7.1093a.3436.3436 0 0 1-.1524.1797c-.164.0938-.375.0352-.4687-.1328l-.0625-.1055c-.4805-.8515-.9805-1.6601-1.5-2.4258-.6133-.9023-1.3047-1.8164-2.0743-2.7421a.3455.3455 0 0 1 .0391-.4844Zm-5.793-2.082c1.4805 0 3.3633 1.4023 5.6485 4.203a.3488.3488 0 0 1 .0781.2188c-.0039.1914-.1562.3438-.3476.3438l-.1172-.004a34.5835 34.5835 0 0 0-2.8086.1016c-1.0742.086-2.1953.2305-3.3633.4375a.343.343 0 0 1-.3945-.2734l-.0196-.0977c-.629-3.2851-.1876-4.9297 1.3242-4.9297Zm2.8711 5.8124h3.6875a.638.638 0 0 1 .5508.3164l1.8477 3.2188a.6437.6437 0 0 1 0 .6289l-1.8477 3.2227a.638.638 0 0 1-.5507.3164h-3.6875c-.2266 0-.4375-.1211-.547-.3164L7.7579 12.25a.6437.6437 0 0 1 0-.629l1.8516-3.2187c.1093-.1953.3203-.3164.5468-.3164Zm3.2305.793a.638.638 0 0 1 .5508.3164l1.3906 2.4258a.6437.6437 0 0 1 0 .6289l-1.3906 2.4297a.638.638 0 0 1-.5508.3164h-2.7734c-.2266 0-.4375-.1211-.5469-.3164L8.672 12.25a.6437.6437 0 0 1 0-.629l1.3945-2.4257c.1094-.1953.3203-.3164.5469-.3164Zm-.4922.8672h-1.789c-.2266 0-.4336.1172-.547.3164l-.8983 1.5586a.6437.6437 0 0 0 0 .6289l.8984 1.5625a.6317.6317 0 0 0 .5469.3164h1.789a.6317.6317 0 0 0 .547-.3164l.8983-1.5625a.6437.6437 0 0 0 0-.629l-.8984-1.5585c-.1133-.1992-.3203-.3164-.5469-.3164Zm-.4765.8281c.2265 0 .4375.1211.5468.3164l.422.7305c.1132.1953.1132.4375 0 .6289l-.422.7344c-.1093.1953-.3203.3164-.5468.3164h-.836a.6317.6317 0 0 1-.5468-.3164l-.422-.7344c-.1132-.1914-.1132-.4336 0-.629l.422-.7304a.6317.6317 0 0 1 .5468-.3164zm-.418.8164a.548.548 0 0 0-.4727.2735c-.0976.168-.0976.375 0 .5468a.5444.5444 0 0 0 .4727.2696.5444.5444 0 0 0 .4727-.2696c.0976-.1718.0976-.3789 0-.5468A.548.548 0 0 0 12 11.3906Zm-4.4219.5469h.9805M18.9805 7.75c.3906-1.8945.4765-3.3438.2226-4.3984-.1484-.629-.4218-1.1368-.8398-1.5078-.4414-.3907-1-.582-1.625-.582-1.0352 0-2.1211.4726-3.2813 1.3671-.4726.3633-.9648.8047-1.4726 1.3164-.043-.0508-.086-.1015-.1367-.1445-1.4454-1.2852-2.6602-2.082-3.6993-2.3906-.6171-.1836-1.1953-.1993-1.7226-.0235-.5586.1875-1.004.5742-1.3164 1.1172-.5156.8945-.6524 2.0742-.461 3.5274.0782.5898.2149 1.2343.4024 1.9335a1.1187 1.1187 0 0 0-.2149.047C3.008 8.621 1.711 9.2694.9258 10.0155c-.4649.4414-.7695.9375-.8828 1.4805-.1133.5781 0 1.1562.3125 1.6992.5156.8945 1.4648 1.5977 2.8164 2.1563.543.2226 1.1562.4257 1.8437.6093a1.0227 1.0227 0 0 0-.0703.2266c-.3906 1.8906-.4765 3.3438-.2226 4.3945.1484.629.4257 1.1407.8398 1.5078.4414.3907 1 .582 1.625.582 1.0352 0 2.121-.4726 3.2813-1.3632.4765-.3711.9726-.8164 1.4882-1.336a1.2 1.2 0 0 0 .1953.2266c1.4454 1.2852 2.6602 2.082 3.6993 2.3906.6172.1836 1.1953.1993 1.7226.0235.5586-.1875 1.004-.5742 1.3164-1.1172.5157-.8945.6524-2.0742.461-3.5273-.082-.6133-.2227-1.2813-.4258-2.0118a1.2248 1.2248 0 0 0 .2383-.0468c1.828-.6094 3.125-1.2578 3.9101-2.004.4649-.4413.7696-.9374.8828-1.4804.1133-.5781 0-1.1563-.3125-1.6992-.5156-.8946-1.4648-1.5977-2.8164-2.1563-.5586-.2304-1.1953-.4414-1.9062-.625a.8647.8647 0 0 0 .0586-.1953z"}}]})(t)}function Oy(t){return Bt({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"}}]})(t)}const ky="/assets/Todolist-6ec7d566.jpeg",By="/assets/GlobalShare-06bd6207.png",zy="/assets/watherapp-8459ce23.jpeg",Hy="/assets/SchoolMgmt-82f713b9.svg",Vy="/assets/MyResume2025-32f5e366.pdf",Gy="_stage_tfen0_1",Wy="_transitioning_tfen0_29",jy="_environmentTransition_tfen0_1",Xy="_bgSurface_tfen0_42",$y="_forestLeaves_tfen0_1",Yy="_desertHeat_tfen0_1",qy="_skyWinds_tfen0_1",Ky="_cityLights_tfen0_1",Zy="_oceanBg_tfen0_81",Qy="_bgShallow_tfen0_89",Jy="_bgDeep_tfen0_90",eS="_bgAbyss_tfen0_91",tS="_caustics_tfen0_121",nS="_mouseLight_tfen0_145",iS="_vignette_tfen0_154",rS="_oceanCanvas_tfen0_163",sS="_foregroundFx_tfen0_170",aS="_fxFish_tfen0_179",oS="_fishSwimL2R_tfen0_1",lS="_fxFishSvg_tfen0_193",cS="_fxDiver_tfen0_199",uS="_diverSwim_tfen0_1",dS="_fxDiverSvg_tfen0_210",fS="_fishSwimR2L_tfen0_1",hS="_fxBubble_tfen0_272",pS="_bubbleRise_tfen0_1",mS="_content_tfen0_301",gS="_section_tfen0_307",_S="_shallows_tfen0_316",vS="_deep_tfen0_320",xS="_trench_tfen0_324",yS="_sectionInner_tfen0_328",SS="_surface_tfen0_334",MS="_surfaceTop_tfen0_340",ES="_hero_tfen0_353",wS="_heroBadge_tfen0_370",TS="_heroTitle_tfen0_386",bS="_heroKicker_tfen0_393",CS="_heroSub_tfen0_409",AS="_heroActions_tfen0_417",RS="_ghostCta_tfen0_424",PS="_socialBubbles_tfen0_441",LS="_socialBubble_tfen0_441",NS="_scrollHint_tfen0_468",IS="_scrollMouse_tfen0_480",DS="_scrollDot_tfen0_1",US="_scrollText_tfen0_516",FS="_card_tfen0_523",OS="_projectsCard_tfen0_544",kS="_cardHeader_tfen0_559",BS="_projectHeadingMeta_tfen0_572",zS="_projectCounter_tfen0_580",HS="_projectHint_tfen0_581",VS="_aboutGrid_tfen0_603",GS="_aboutText_tfen0_614",WS="_skillsPanel_tfen0_615",jS="_aboutHighlights_tfen0_631",XS="_skillBubbles_tfen0_669",$S="_skillBubble_tfen0_669",YS="_skillName_tfen0_697",qS="_skillIcon_tfen0_704",KS="_html_tfen0_721",ZS="_css_tfen0_725",QS="_react_tfen0_737",JS="_express_tfen0_741",eM="_redux_tfen0_745",tM="_recoil_tfen0_749",nM="_responsive_tfen0_757",iM="_git_tfen0_761",rM="_cpp_tfen0_765",sM="_fishMessage_tfen0_773",aM="_fishFloat_tfen0_1",oM="_fish_tfen0_773",lM="_fishBubble_tfen0_819",cM="_projectGrid_tfen0_843",uM="_projectCard_tfen0_850",dM="_projectMedia_tfen0_873",fM="_projectBody_tfen0_895",hM="_projectMetaRow_tfen0_904",pM="_priorityTag_tfen0_911",mM="_priorityTagHot_tfen0_922",gM="_priorityTagMuted_tfen0_928",_M="_projectActions_tfen0_949",vM="_contactCard_tfen0_956",xM="_form_tfen0_960",yM="_inactiveForm_tfen0_1000",SM="_formActions_tfen0_1008",MM="_formToggle_tfen0_1014",EM="_success_tfen0_1021",wM="_loader_tfen0_1029",TM="_abyss_tfen0_1037",bM="_abyssText_tfen0_1041",CM="_abyssTag_tfen0_1047",AM="_titanicWrap_tfen0_1071",RM="_titanic_tfen0_1071",PM="_titanicBob_tfen0_1",LM="_sandFog_tfen0_1096",NM="_deepNav_tfen0_1109",IM="_deepBrand_tfen0_1135",DM="_deepLinks_tfen0_1150",UM="_globePulseCore_tfen0_1216",FM="_globeInfoCard_tfen0_1217",OM="_globe3D_tfen0_1237",kM="_globeRoot_tfen0_1249",BM="_globeCanvasHost_tfen0_1255",zM="_globeCanvas_tfen0_1255",HM="_globeGlow_tfen0_1266",VM="_globeInfoLayer_tfen0_1277",GM="_globePulse_tfen0_1216",WM="_cardSpread_tfen0_1",jM="_globeInfoCardActive_tfen0_1328",XM="_globeInfoCardTitle_tfen0_1336",$M="_globeInfoCardText_tfen0_1344",YM="_globeScrollTag_tfen0_1351",qM="_featuredProject_tfen0_1412",KM="_featuredGlow_tfen0_1",ZM="_featuredBadge_tfen0_1442",QM="_badgePulse_tfen0_1",JM="_inProgressBadge_tfen0_1460",e3="_viewMoreContainer_tfen0_1493",t3="_viewMoreButton_tfen0_1501",n3="_viewMoreIcon_tfen0_1556",i3="_bounce_tfen0_1",r3="_fadeInUp_tfen0_1",s3="_shimmer_tfen0_1",a3="_detailsModal_tfen0_1665",o3="_detailsContent_tfen0_1680",l3="_closeButton_tfen0_1691",c3="_detailsActions_tfen0_1721",u3="_education_tfen0_1728",d3="_educationGrid_tfen0_1732",f3="_eduCard_tfen0_1739",h3="_eduYear_tfen0_1773",p3="_eduSchool_tfen0_1791",m3="_eduField_tfen0_1797",g3="_eduDescription_tfen0_1804",_3="_experience_tfen0_1812",v3="_experienceTimeline_tfen0_1816",x3="_expCard_tfen0_1823",y3="_expHeader_tfen0_1857",S3="_expPeriod_tfen0_1871",M3="_expCompany_tfen0_1881",E3="_expHighlights_tfen0_1888",w3="_colorPickerContainer_tfen0_1912",T3="_environmentToggle_tfen0_1922",b3="_environmentFloat_tfen0_1",C3="_environmentToggleInner_tfen0_1945",A3="_environmentIcon_tfen0_1956",R3="_environmentOptions_tfen0_1966",P3="_environmentSlideIn_tfen0_1",L3="_environmentOption_tfen0_1966",N3="_active_tfen0_2015",I3="_environmentName_tfen0_2021",D3="_themeToggle_tfen0_2026",U3="_themeToggleInner_tfen0_2046",F3="_colorOptions_tfen0_2054",O3="_slideIn_tfen0_1",k3="_colorOption_tfen0_2054",B3="_environmentElements_tfen0_2102",z3="_swimHorizontal_tfen0_1",H3="_bubble_tfen0_2122",V3="_bubbleFloat_tfen0_1",G3="_bird_tfen0_2134",W3="_birdFly_tfen0_1",j3="_leaf_tfen0_2145",X3="_leafFall_tfen0_1",$3="_dust_tfen0_2157",Y3="_dustSwirl_tfen0_1",q3="_scorpion_tfen0_2168",K3="_scorpionCrawl_tfen0_1",Z3="_cactus_tfen0_2178",Q3="_cactusSway_tfen0_1",J3="_cloud_tfen0_2188",eE="_cloudFloat_tfen0_1",tE="_car_tfen0_523",nE="_carDrive_tfen0_1",iE="_plane_tfen0_2215",rE="_planeFly_tfen0_1",sE="_building_tfen0_2225",aE="_buildingGlow_tfen0_1",oE="_transitionOverlay_tfen0_2301",lE="_fadeIn_tfen0_1",cE="_transitionIcon_tfen0_2314",uE="_bounceIn_tfen0_1",dE="_transitionText_tfen0_2320",fE="_slideUp_tfen0_1",hE="_checkmark_tfen0_2350",pE="_guideBubble_tfen0_2461",mE="_themePickerMeta_tfen0_2464",gE="_palettePickerHint_tfen0_2465",_E="_themeCorePalette_tfen0_2466",vE="_heroThemeLine_tfen0_2496",xE="_heroThemeDot_tfen0_2507",yE="_themePickerEyebrow_tfen0_2520",SE="_themeCoreCode_tfen0_2521",ME="_themeOrbitNodeLabel_tfen0_2522",EE="_palettePickerTitle_tfen0_2523",wE="_guideBadge_tfen0_2525",TE="_featuredThemeGlow_tfen0_1",bE="_worldParallax_tfen0_2618",CE="_worldGlow_tfen0_2626",AE="_worldFar_tfen0_2627",RE="_worldMid_tfen0_2628",PE="_worldNear_tfen0_2629",LE="_worldTrail_tfen0_2630",NE="_platformShell_tfen0_2853",IE="_platformAura_tfen0_2859",DE="_platformFrame_tfen0_2860",UE="_platformDock_tfen0_2861",FE="_guideMessage_tfen0_2971",OE="_themePickerShell_tfen0_3049",kE="_themeOrbit_tfen0_2522",BE="_themeOrbitGlow_tfen0_3106",zE="_themeCore_tfen0_2466",HE="_themeCoreTitle_tfen0_3145",VE="_themeOrbitNode_tfen0_2522",GE="_themeOrbitNodeActive_tfen0_3174",WE="_themeOrbitNodeInner_tfen0_3177",jE="_palettePicker_tfen0_2465",XE="_palettePickerHeader_tfen0_3224",$E="_palettePickerGrid_tfen0_3231",YE="_colorOptionCore_tfen0_3255",qE="_colorOptionLabel_tfen0_3266",KE="_transitionRoute_tfen0_3291",ZE="_transitionRibbon_tfen0_3302",QE="_transitionWorldTag_tfen0_3315",JE="_transitionPayload_tfen0_3330",ew="_payloadDrag_tfen0_1",tw="_transitionPayloadLabel_tfen0_3351",nw="_transitionCourier_tfen0_3358",iw="_courierFlight_tfen0_1",rw="_transitionCourierBody_tfen0_3369",sw="_worldMonument_tfen0_3478",aw="_worldMonumentGlow_tfen0_3485",ow="_worldMonumentShape_tfen0_3486",lw="_spinSlow_tfen0_1",cw="_themePickerWrapper_tfen0_3678",uw="_themePickerButton_tfen0_3686",dw="_hiddenPickerButton_tfen0_3704",fw="_themePickerInner_tfen0_3710",hw="_themePickerPopover_tfen0_3723",B={stage:Gy,transitioning:Wy,environmentTransition:jy,bgSurface:Xy,forestLeaves:$y,desertHeat:Yy,skyWinds:qy,cityLights:Ky,oceanBg:Zy,bgShallow:Qy,bgDeep:Jy,bgAbyss:eS,caustics:tS,mouseLight:nS,vignette:iS,oceanCanvas:rS,foregroundFx:sS,fxFish:aS,fishSwimL2R:oS,fxFishSvg:lS,fxDiver:cS,diverSwim:uS,fxDiverSvg:dS,fishSwimR2L:fS,fxBubble:hS,bubbleRise:pS,content:mS,section:gS,shallows:_S,deep:vS,trench:xS,sectionInner:yS,surface:SS,surfaceTop:MS,hero:ES,heroBadge:wS,heroTitle:TS,heroKicker:bS,heroSub:CS,heroActions:AS,ghostCta:RS,socialBubbles:PS,socialBubble:LS,scrollHint:NS,scrollMouse:IS,scrollDot:DS,scrollText:US,card:FS,projectsCard:OS,cardHeader:kS,projectHeadingMeta:BS,projectCounter:zS,projectHint:HS,aboutGrid:VS,aboutText:GS,skillsPanel:WS,aboutHighlights:jS,skillBubbles:XS,skillBubble:$S,skillName:YS,skillIcon:qS,html:KS,css:ZS,"java-script":"_java-script_tfen0_729","type-script":"_type-script_tfen0_733",react:QS,express:JS,redux:eM,recoil:tM,"react-query":"_react-query_tfen0_753",responsive:nM,git:iM,cpp:rM,"problem-solving":"_problem-solving_tfen0_769",fishMessage:sM,fishFloat:aM,fish:oM,fishBubble:lM,projectGrid:cM,projectCard:uM,projectMedia:dM,projectBody:fM,projectMetaRow:hM,priorityTag:pM,priorityTagHot:mM,priorityTagMuted:gM,projectActions:_M,contactCard:vM,form:xM,inactiveForm:yM,formActions:SM,formToggle:MM,success:EM,loader:wM,abyss:TM,abyssText:bM,abyssTag:CM,titanicWrap:AM,titanic:RM,titanicBob:PM,sandFog:LM,deepNav:NM,deepBrand:IM,deepLinks:DM,globePulseCore:UM,globeInfoCard:FM,globe3D:OM,globeRoot:kM,globeCanvasHost:BM,globeCanvas:zM,globeGlow:HM,globeInfoLayer:VM,globePulse:GM,cardSpread:WM,globeInfoCardActive:jM,globeInfoCardTitle:XM,globeInfoCardText:$M,globeScrollTag:YM,featuredProject:qM,featuredGlow:KM,featuredBadge:ZM,badgePulse:QM,inProgressBadge:JM,viewMoreContainer:e3,viewMoreButton:t3,viewMoreIcon:n3,bounce:i3,fadeInUp:r3,shimmer:s3,detailsModal:a3,detailsContent:o3,closeButton:l3,detailsActions:c3,education:u3,educationGrid:d3,eduCard:f3,eduYear:h3,eduSchool:p3,eduField:m3,eduDescription:g3,experience:_3,experienceTimeline:v3,expCard:x3,expHeader:y3,expPeriod:S3,expCompany:M3,expHighlights:E3,colorPickerContainer:w3,environmentToggle:T3,environmentFloat:b3,environmentToggleInner:C3,environmentIcon:A3,environmentOptions:R3,environmentSlideIn:P3,environmentOption:L3,active:N3,environmentName:I3,themeToggle:D3,themeToggleInner:U3,colorOptions:F3,slideIn:O3,colorOption:k3,environmentElements:B3,swimHorizontal:z3,bubble:H3,bubbleFloat:V3,bird:G3,birdFly:W3,leaf:j3,leafFall:X3,dust:$3,dustSwirl:Y3,scorpion:q3,scorpionCrawl:K3,cactus:Z3,cactusSway:Q3,cloud:J3,cloudFloat:eE,car:tE,carDrive:nE,plane:iE,planeFly:rE,building:sE,buildingGlow:aE,transitionOverlay:oE,fadeIn:lE,transitionIcon:cE,bounceIn:uE,transitionText:dE,slideUp:fE,checkmark:hE,guideBubble:pE,themePickerMeta:mE,palettePickerHint:gE,themeCorePalette:_E,heroThemeLine:vE,heroThemeDot:xE,themePickerEyebrow:yE,themeCoreCode:SE,themeOrbitNodeLabel:ME,palettePickerTitle:EE,guideBadge:wE,featuredThemeGlow:TE,worldParallax:bE,worldGlow:CE,worldFar:AE,worldMid:RE,worldNear:PE,worldTrail:LE,platformShell:NE,platformAura:IE,platformFrame:DE,platformDock:UE,guideMessage:FE,themePickerShell:OE,themeOrbit:kE,themeOrbitGlow:BE,themeCore:zE,themeCoreTitle:HE,themeOrbitNode:VE,themeOrbitNodeActive:GE,themeOrbitNodeInner:WE,palettePicker:jE,palettePickerHeader:XE,palettePickerGrid:$E,colorOptionCore:YE,colorOptionLabel:qE,transitionRoute:KE,transitionRibbon:ZE,transitionWorldTag:QE,transitionPayload:JE,payloadDrag:ew,transitionPayloadLabel:tw,transitionCourier:nw,courierFlight:iw,transitionCourierBody:rw,worldMonument:sw,worldMonumentGlow:aw,worldMonumentShape:ow,"spin-slow":"_spin-slow_tfen0_3649",spinSlow:lw,"fade-in":"_fade-in_tfen0_3663",themePickerWrapper:cw,themePickerButton:uw,hiddenPickerButton:dw,themePickerInner:fw,themePickerPopover:hw,"circle-3d":"_circle-3d_tfen0_3731"};function pw(t){return Math.min(1,Math.max(0,t))}function xt(t,e){return t+Math.random()*(e-t)}function um(t){return t[Math.random()*t.length|0]}function mw(t,e,n){t.save(),t.translate(e.x,e.y),t.scale(e.dir,1),t.rotate(Math.sin(e.phase)*.08),t.globalAlpha=e.alpha,t.fillStyle=n,t.beginPath(),t.ellipse(0,0,e.size*1.8,e.size*.95,0,0,Math.PI*2),t.fill(),t.beginPath(),t.moveTo(-e.size*1.45,0),t.lineTo(-e.size*2.35,-e.size*.85),t.lineTo(-e.size*2.35,e.size*.85),t.closePath(),t.fill(),t.fillStyle="rgba(3, 15, 28, 0.7)",t.beginPath(),t.arc(e.size*.8,-e.size*.14,e.size*.18,0,Math.PI*2),t.fill(),t.restore()}function gw(t,e,n){t.save(),t.translate(e.x,e.y),t.scale(e.dir,1),t.rotate(Math.sin(e.phase)*.18),t.globalAlpha=e.alpha,t.strokeStyle=n,t.lineWidth=Math.max(1.5,e.size*.12),t.lineCap="round",t.beginPath(),t.moveTo(-e.size,0),t.quadraticCurveTo(-e.size*.4,-e.size*.95,0,0),t.quadraticCurveTo(e.size*.4,-e.size*.95,e.size,0),t.stroke(),t.restore()}function _w(t,e,n){t.save(),t.translate(e.x,e.y),t.rotate(e.rotation),t.globalAlpha=e.alpha,t.fillStyle=n,t.beginPath(),t.moveTo(0,-e.size),t.quadraticCurveTo(e.size*.95,-e.size*.3,0,e.size),t.quadraticCurveTo(-e.size*.95,-e.size*.3,0,-e.size),t.fill(),t.strokeStyle="rgba(255, 255, 255, 0.3)",t.lineWidth=1,t.beginPath(),t.moveTo(0,-e.size*.8),t.lineTo(0,e.size*.8),t.stroke(),t.restore()}function dm(t,e,n){t.save(),t.globalAlpha=e.alpha;const i=t.createRadialGradient(e.x-e.size*.35,e.y-e.size*.35,1,e.x,e.y,e.size*1.6);i.addColorStop(0,"rgba(255,255,255,0.8)"),i.addColorStop(.3,n),i.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=i,t.beginPath(),t.arc(e.x,e.y,e.size*1.6,0,Math.PI*2),t.fill(),t.restore()}function vw(t,e,n){t.save(),t.translate(e.x,e.y),t.rotate(e.rotation),t.globalAlpha=e.alpha;const i=t.createLinearGradient(-e.size*2,0,e.size*2,0);i.addColorStop(0,"rgba(255,255,255,0)"),i.addColorStop(.5,n),i.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=i,t.fillRect(-e.size*2,-e.size*.55,e.size*4,e.size*1.1),t.restore()}function xw(t,e,n){t.save(),t.globalAlpha=e.alpha,t.fillStyle=n,t.beginPath(),t.arc(e.x-e.size*.6,e.y,e.size*.7,Math.PI,Math.PI*2),t.arc(e.x,e.y-e.size*.28,e.size*.92,Math.PI,Math.PI*2),t.arc(e.x+e.size*.76,e.y,e.size*.64,Math.PI,Math.PI*2),t.closePath(),t.fill(),t.restore()}function yw(t,e,n){t.save(),t.translate(e.x,e.y),t.globalAlpha=e.alpha,t.fillStyle=n;const i=e.size*.25,r=e.size*3.2,s=e.size*.5,a=-e.size*1.6,o=-e.size*.25;t.beginPath(),t.moveTo(a+i,o),t.lineTo(a+r-i,o),t.quadraticCurveTo(a+r,o,a+r,o+i),t.lineTo(a+r,o+s-i),t.quadraticCurveTo(a+r,o+s,a+r-i,o+s),t.lineTo(a+i,o+s),t.quadraticCurveTo(a,o+s,a,o+s-i),t.lineTo(a,o+i),t.quadraticCurveTo(a,o,a+i,o),t.closePath(),t.fill(),t.globalAlpha=e.alpha*.45,t.fillRect(-e.size*5,-e.size*.07,e.size*3.6,e.size*.14),t.restore()}function Sw(t,e,n){t.save(),t.globalAlpha=e.life*.34,t.strokeStyle=n,t.lineWidth=1.5,t.beginPath(),t.arc(e.x,e.y,e.radius,0,Math.PI*2),t.stroke(),t.restore()}function Mw({progressRef:t,mouseRef:e,reducedMotion:n=!1,environment:i="sea",theme:r}){const s=De.useRef(null),a=De.useRef(0),o=De.useMemo(()=>{var u,p;const l=typeof window<"u"&&((p=(u=window.matchMedia)==null?void 0:u.call(window,"(pointer: coarse)"))==null?void 0:p.matches),c=typeof navigator<"u"?navigator.hardwareConcurrency:void 0,h=typeof c=="number"?c<=4:!1,f=n||l||h;return{moteCount:f?38:68,spriteCount:f?7:12,maxDpr:f?1.5:2}},[n]);return De.useEffect(()=>{const l=s.current;if(!l)return;const c=l.getContext("2d",{alpha:!0});if(!c)return;let h=0,f=0,u=1,p=0,_=0;const S=[],g=[],d=[],m=(r==null?void 0:r.primary)??"#7dd3fc",y=(r==null?void 0:r.secondary)??"#38bdf8",M=(r==null?void 0:r.accent)??"#f9a8d4",b=[m,y,M,"rgba(255,255,255,0.92)"];function C(){u=Math.min(o.maxDpr,window.devicePixelRatio||1),h=Math.max(1,window.innerWidth),f=Math.max(1,window.innerHeight),l.width=Math.floor(h*u),l.height=Math.floor(f*u),l.style.width=`${h}px`,l.style.height=`${f}px`,c.setTransform(u,0,0,u,0,0)}function R(U){U.kind=i==="forest"?Math.random()>.45?"leaf":"glow":i,U.x=xt(-h*.1,h*1.1),U.y=xt(-f*.2,f*1.1),U.size=i==="sky"?xt(16,38):xt(4,16),U.speed=xt(.15,.9),U.alpha=xt(.12,.35),U.drift=xt(-.5,.5),U.phase=xt(0,Math.PI*2),U.rotation=xt(0,Math.PI*2),U.color=um(b),i==="sea"&&(U.y=xt(f*.6,f*1.2),U.size=xt(3,12)),i==="desert"&&(U.size=xt(10,22),U.alpha=xt(.06,.18)),i==="city"&&(U.kind=Math.random()>.5?"rain":"glow",U.size=xt(3,10))}function v(U){U.kind=i,U.dir=Math.random()>.5?1:-1,U.x=U.dir===1?-160:h+160,U.y=xt(f*.14,f*.84),U.size=i==="city"?xt(18,30):xt(12,26),U.speed=xt(.3,1.2),U.phase=xt(0,Math.PI*2),U.alpha=xt(.18,.42),U.color=um(b),i==="sky"&&(U.y=xt(f*.1,f*.45)),i==="desert"&&(U.y=xt(f*.12,f*.48)),i==="city"&&(U.y=xt(f*.64,f*.9))}function T(){for(;S.length<o.moteCount;){const U={};R(U),S.push(U)}for(;g.length<o.spriteCount;){const U={};v(U),g.push(U)}}function W(U,$){if(c.save(),c.globalAlpha=.12+U*.12,i==="forest"){c.strokeStyle=m,c.lineWidth=1;for(let F=0;F<10;F+=1){const P=(F+1)/11*h,O=Math.sin($*6e-4+F)*18;c.beginPath(),c.moveTo(P+O,0),c.lineTo(P-O*.5,f),c.stroke()}}else if(i==="desert"){c.strokeStyle=M;for(let F=0;F<5;F+=1){c.lineWidth=1.4;const P=f*(.58+F*.08)-U*55;c.beginPath();for(let O=0;O<=24;O+=1){const H=O/24*h,G=Math.sin(O*.8+$*.001+F)*9;O===0?c.moveTo(H,P+G):c.lineTo(H,P+G)}c.stroke()}}else if(i==="sky"){c.strokeStyle=m,c.lineWidth=1;for(let F=0;F<12;F+=1){const P=f*(F/12)+Math.sin($*7e-4+F)*8;c.beginPath(),c.moveTo(-20,P),c.lineTo(h+20,P-18),c.stroke()}}else if(i==="city"){c.strokeStyle=y,c.lineWidth=1;for(let F=0;F<8;F+=1){const P=f*.72+F*22-U*44;c.beginPath(),c.moveTo(0,P),c.lineTo(h,P),c.stroke()}}else{c.strokeStyle=m,c.lineWidth=1;for(let F=0;F<10;F+=1){const P=f*(.16+F*.07)+Math.sin($*8e-4+F)*12;c.beginPath(),c.moveTo(0,P),c.quadraticCurveTo(h*.45,P+10,h,P-6),c.stroke()}}c.restore()}function I(U){a.current=U;const $=pw(t.current||0);c.clearRect(0,0,h,f),W($,U);for(let F=d.length-1;F>=0;F-=1){const P=d[F];if(P.radius+=1.6,P.life-=.02,P.life<=0){d.splice(F,1);continue}Sw(c,P,M)}for(let F=0;F<S.length;F+=1){const P=S[F];P.phase+=.02,P.rotation+=.01,i==="sea"?(P.x+=P.drift+Math.sin(P.phase)*.18,P.y-=P.speed*(.7+(1-$)*.3),P.y<-40&&R(P),dm(c,P,P.color)):i==="forest"?(P.x+=P.drift+Math.sin(P.phase)*.5,P.y+=P.speed*.8,P.y>f+60&&(R(P),P.y=-40),P.kind==="leaf"?_w(c,P,P.color):dm(c,{...P,size:P.size*.55},P.color)):i==="desert"?(P.x+=P.speed*1.4,P.y+=Math.sin(P.phase)*.15,P.x>h+80&&(R(P),P.x=-80),vw(c,P,P.color)):i==="sky"?(P.x+=P.speed*.85,P.y+=Math.sin(P.phase)*.18,P.x>h+120&&(R(P),P.x=-120,P.y=xt(f*.05,f*.55)),xw(c,P,P.color)):(P.y+=P.speed*2.4,P.y>f+40&&(R(P),P.y=-40),c.save(),c.globalAlpha=P.alpha,c.strokeStyle=P.color,c.lineWidth=1,c.beginPath(),c.moveTo(P.x,P.y),c.lineTo(P.x+P.drift*18,P.y+P.size*2.2),c.stroke(),c.restore())}for(let F=0;F<g.length;F+=1){const P=g[F];P.phase+=.018+P.speed*.004,P.x+=P.speed*P.dir,P.y+=Math.sin(P.phase)*.16,P.dir===1&&P.x>h+160&&v(P),P.dir===-1&&P.x<-160&&v(P),i==="sea"?mw(c,P,P.color):i==="forest"||i==="desert"||i==="sky"?gw(c,P,P.color):yw(c,P,P.color)}p=window.requestAnimationFrame(I)}function V(U){if(n)return;const $=a.current;if($-_<70)return;const F=U.clientX,P=U.clientY,O=e.current||{x:F,y:P};e.current={x:F,y:P};const H=F-O.x,G=P-O.y;H*H+G*G<18||(_=$,d.push({x:F,y:P,radius:0,life:1}),d.length>18&&d.shift())}return C(),T(),window.addEventListener("resize",C,{passive:!0}),window.addEventListener("mousemove",V,{passive:!0}),p=window.requestAnimationFrame(I),()=>{window.removeEventListener("resize",C),window.removeEventListener("mousemove",V),window.cancelAnimationFrame(p)}},[i,e,t,n,o,r]),w.jsx("canvas",{ref:s,className:B.oceanCanvas,"aria-hidden":"true"})}function Ew({className:t,variant:e="cyan",flipped:n=!1}){const i={cyan:{body:"#42f5e6",fin:"#00bcd4"},blue:{body:"#4aa3ff",fin:"#2b6bff"},gold:{body:"#ffd166",fin:"#f4a261"},pink:{body:"#ff7ab6",fin:"#ff4d6d"}},r=i[e]??i.cyan;return w.jsxs("svg",{className:t,viewBox:"0 0 220 140",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",style:{transform:n?"scaleX(-1)":void 0},children:[w.jsxs("defs",{children:[w.jsxs("linearGradient",{id:"fishBody",x1:"40",y1:"40",x2:"180",y2:"110",children:[w.jsx("stop",{stopColor:r.body,stopOpacity:"0.95"}),w.jsx("stop",{stopColor:r.fin,stopOpacity:"0.85",offset:"1"})]}),w.jsxs("radialGradient",{id:"fishGlow",cx:"0",cy:"0",r:"1",children:[w.jsx("stop",{stopColor:"#ffffff",stopOpacity:"0.55"}),w.jsx("stop",{stopColor:"#ffffff",stopOpacity:"0",offset:"1"})]})]}),w.jsx("path",{d:"M38 72C20 50 12 42 8 38C18 76 18 88 8 106C12 102 20 94 38 72Z",fill:r.fin,opacity:"0.85"}),w.jsx("path",{d:"M48 72C48 46 78 28 116 28C158 28 190 44 200 64C208 80 196 98 178 110C158 124 134 128 116 128C78 128 48 98 48 72Z",fill:"url(#fishBody)"}),w.jsx("path",{d:"M126 60C134 54 148 52 162 56C148 70 142 82 138 96C132 84 126 72 126 60Z",fill:r.fin,opacity:"0.55"}),w.jsx("circle",{cx:"164",cy:"66",r:"9",fill:"#08121a",opacity:"0.85"}),w.jsx("circle",{cx:"167",cy:"63",r:"3",fill:"#ffffff",opacity:"0.9"}),w.jsx("ellipse",{cx:"120",cy:"76",rx:"86",ry:"52",fill:"url(#fishGlow)",opacity:"0.18"})]})}function ww({className:t}){return w.jsxs("svg",{className:t,viewBox:"0 0 900 260",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Sunken ship silhouette",children:[w.jsxs("defs",{children:[w.jsxs("linearGradient",{id:"hull",x1:"120",y1:"40",x2:"760",y2:"220",children:[w.jsx("stop",{stopColor:"#0c1a24"}),w.jsx("stop",{stopColor:"#031019",offset:"1"})]}),w.jsxs("linearGradient",{id:"rust",x1:"220",y1:"120",x2:"640",y2:"240",children:[w.jsx("stop",{stopColor:"#c07a3c",stopOpacity:"0.0"}),w.jsx("stop",{stopColor:"#c07a3c",stopOpacity:"0.22",offset:"1"})]}),w.jsxs("radialGradient",{id:"light",cx:"0",cy:"0",r:"1",children:[w.jsx("stop",{stopColor:"#7dd3fc",stopOpacity:"0.65"}),w.jsx("stop",{stopColor:"#7dd3fc",stopOpacity:"0.0",offset:"1"})]})]}),w.jsx("path",{d:"M0 220C130 200 240 210 360 230C460 248 590 250 900 226V260H0V220Z",fill:"#02070d"}),w.jsx("path",{d:"M150 150C238 110 330 92 410 82C530 66 660 72 760 104C820 124 856 154 880 184C732 214 590 222 442 216C300 210 220 194 120 176C132 166 140 158 150 150Z",fill:"url(#hull)"}),w.jsx("path",{d:"M268 128C324 100 386 82 450 76C540 68 628 78 712 110L700 140C626 114 546 106 458 114C382 120 320 140 270 166L268 128Z",fill:"#061522",opacity:"0.95"}),w.jsx("path",{d:"M420 84C432 68 452 66 468 78L476 110L434 116L420 84Z",fill:"#081a26"}),w.jsx("path",{d:"M508 84C520 68 540 66 556 78L564 110L522 116L508 84Z",fill:"#081a26"}),w.jsx("path",{d:"M596 90C610 72 632 70 648 84L656 112L610 122L596 90Z",fill:"#081a26"}),w.jsx("path",{d:"M150 150C238 110 330 92 410 82C530 66 660 72 760 104C820 124 856 154 880 184C732 214 590 222 442 216C300 210 220 194 120 176C132 166 140 158 150 150Z",fill:"url(#rust)"}),w.jsx("ellipse",{cx:"330",cy:"170",rx:"200",ry:"90",fill:"url(#light)",opacity:"0.25"}),Array.from({length:10}).map((e,n)=>w.jsx("circle",{cx:280+n*42,cy:170+n%2*10,r:"6",fill:"#0b2433",opacity:"0.55"},n))]})}function Tw({visible:t}){return w.jsxs("nav",{className:B.deepNav,"data-visible":t?"true":"false","aria-label":"Portfolio navigation",children:[w.jsxs("a",{className:B.deepBrand,href:"#Home",children:[w.jsx(z_,{size:18}),w.jsx("span",{children:"Abirullah"})]}),w.jsxs("div",{className:B.deepLinks,children:[w.jsx("a",{href:"#Home",children:"Home"}),w.jsx("a",{href:"#About",children:"About"}),w.jsx("a",{href:"#Projects",children:"Projects"}),w.jsx("a",{href:"#Contact",children:"Contact"})]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vh="183",bw=0,fm=1,Cw=2,Sl=1,Aw=2,wa=3,vr=0,pn=1,Ai=2,Ii=0,ks=1,Dr=2,hm=3,pm=4,Rw=5,Ur=100,Pw=101,Lw=102,Nw=103,Iw=104,Dw=200,Uw=201,Fw=202,Ow=203,Cd=204,Ad=205,kw=206,Bw=207,zw=208,Hw=209,Vw=210,Gw=211,Ww=212,jw=213,Xw=214,Rd=0,Pd=1,Ld=2,$s=3,Nd=4,Id=5,Dd=6,Ud=7,xh=0,$w=1,Yw=2,mi=0,H_=1,V_=2,G_=3,yh=4,W_=5,j_=6,X_=7,$_=300,Kr=301,Ys=302,eu=303,tu=304,xc=306,Fd=1e3,Li=1001,Od=1002,Xt=1003,qw=1004,Do=1005,nn=1006,nu=1007,Hr=1008,Rn=1009,Y_=1010,q_=1011,eo=1012,Sh=1013,_i=1014,di=1015,Bi=1016,Mh=1017,Eh=1018,to=1020,K_=35902,Z_=35899,Q_=1021,J_=1022,Jn=1023,zi=1026,Vr=1027,e1=1028,wh=1029,qs=1030,Th=1031,bh=1033,Ml=33776,El=33777,wl=33778,Tl=33779,kd=35840,Bd=35841,zd=35842,Hd=35843,Vd=36196,Gd=37492,Wd=37496,jd=37488,Xd=37489,$d=37490,Yd=37491,qd=37808,Kd=37809,Zd=37810,Qd=37811,Jd=37812,ef=37813,tf=37814,nf=37815,rf=37816,sf=37817,af=37818,of=37819,lf=37820,cf=37821,uf=36492,df=36494,ff=36495,hf=36283,pf=36284,mf=36285,gf=36286,Kw=3200,Ch=0,Zw=1,tr="",fn="srgb",Ks="srgb-linear",Jl="linear",lt="srgb",is=7680,mm=519,Qw=512,Jw=513,eT=514,Ah=515,tT=516,nT=517,Rh=518,iT=519,gm=35044,_m="300 es",fi=2e3,no=2001;function rT(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ec(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function sT(){const t=ec("canvas");return t.style.display="block",t}const vm={};function xm(...t){const e="THREE."+t.shift();console.log(e,...t)}function t1(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function ke(...t){t=t1(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function it(...t){t=t1(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function tc(...t){const e=t.join(" ");e in vm||(vm[e]=!0,ke(...t))}function aT(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const oT={[Rd]:Pd,[Ld]:Dd,[Nd]:Ud,[$s]:Id,[Pd]:Rd,[Dd]:Ld,[Ud]:Nd,[Id]:$s};class ta{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ym=1234567;const Ua=Math.PI/180,io=180/Math.PI;function na(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[t&255]+Qt[t>>8&255]+Qt[t>>16&255]+Qt[t>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[n&63|128]+Qt[n>>8&255]+"-"+Qt[n>>16&255]+Qt[n>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function Ke(t,e,n){return Math.max(e,Math.min(n,t))}function Ph(t,e){return(t%e+e)%e}function lT(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function cT(t,e,n){return t!==e?(n-t)/(e-t):0}function Fa(t,e,n){return(1-n)*t+n*e}function uT(t,e,n,i){return Fa(t,e,1-Math.exp(-n*i))}function dT(t,e=1){return e-Math.abs(Ph(t,e*2)-e)}function fT(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function hT(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function pT(t,e){return t+Math.floor(Math.random()*(e-t+1))}function mT(t,e){return t+Math.random()*(e-t)}function gT(t){return t*(.5-Math.random())}function _T(t){t!==void 0&&(ym=t);let e=ym+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vT(t){return t*Ua}function xT(t){return t*io}function yT(t){return(t&t-1)===0&&t!==0}function ST(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function MT(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ET(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),h=a((e+i)/2),f=s((e-i)/2),u=a((e-i)/2),p=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":t.set(o*h,l*f,l*u,o*c);break;case"YZY":t.set(l*u,o*h,l*f,o*c);break;case"ZXZ":t.set(l*f,l*u,o*h,o*c);break;case"XZX":t.set(o*h,l*_,l*p,o*c);break;case"YXY":t.set(l*p,o*h,l*_,o*c);break;case"ZYZ":t.set(l*_,l*p,o*h,o*c);break;default:ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function vs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function cn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Uo={DEG2RAD:Ua,RAD2DEG:io,generateUUID:na,clamp:Ke,euclideanModulo:Ph,mapLinear:lT,inverseLerp:cT,lerp:Fa,damp:uT,pingpong:dT,smoothstep:fT,smootherstep:hT,randInt:pT,randFloat:mT,randFloatSpread:gT,seededRandom:_T,degToRad:vT,radToDeg:xT,isPowerOfTwo:yT,ceilPowerOfTwo:ST,floorPowerOfTwo:MT,setQuaternionFromProperEuler:ET,normalize:cn,denormalize:vs};class rt{constructor(e=0,n=0){rt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ia{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],f=i[r+3],u=s[a+0],p=s[a+1],_=s[a+2],S=s[a+3];if(f!==S||l!==u||c!==p||h!==_){let g=l*u+c*p+h*_+f*S;g<0&&(u=-u,p=-p,_=-_,S=-S,g=-g);let d=1-o;if(g<.9995){const m=Math.acos(g),y=Math.sin(m);d=Math.sin(d*m)/y,o=Math.sin(o*m)/y,l=l*d+u*o,c=c*d+p*o,h=h*d+_*o,f=f*d+S*o}else{l=l*d+u*o,c=c*d+p*o,h=h*d+_*o,f=f*d+S*o;const m=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=m,c*=m,h*=m,f*=m}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],f=s[a],u=s[a+1],p=s[a+2],_=s[a+3];return e[n]=o*_+h*f+l*p-c*u,e[n+1]=l*_+h*u+c*f-o*p,e[n+2]=c*_+h*p+o*u-l*f,e[n+3]=h*_-o*f-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),f=o(s/2),u=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=u*h*f+c*p*_,this._y=c*p*f-u*h*_,this._z=c*h*_+u*p*f,this._w=c*h*f-u*p*_;break;case"YXZ":this._x=u*h*f+c*p*_,this._y=c*p*f-u*h*_,this._z=c*h*_-u*p*f,this._w=c*h*f+u*p*_;break;case"ZXY":this._x=u*h*f-c*p*_,this._y=c*p*f+u*h*_,this._z=c*h*_+u*p*f,this._w=c*h*f-u*p*_;break;case"ZYX":this._x=u*h*f-c*p*_,this._y=c*p*f+u*h*_,this._z=c*h*_-u*p*f,this._w=c*h*f+u*p*_;break;case"YZX":this._x=u*h*f+c*p*_,this._y=c*p*f+u*h*_,this._z=c*h*_-u*p*f,this._w=c*h*f-u*p*_;break;case"XZY":this._x=u*h*f-c*p*_,this._y=c*p*f-u*h*_,this._z=c*h*_+u*p*f,this._w=c*h*f+u*p*_;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],f=n[10],u=i+o+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Sm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Sm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*h,this.y=i+l*h+o*c-s*f,this.z=r+l*f+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return iu.copy(this).projectOnVector(e),this.sub(iu)}reflect(e){return this.sub(iu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const iu=new j,Sm=new ia;class We{constructor(e,n,i,r,s,a,o,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],p=i[5],_=i[8],S=r[0],g=r[3],d=r[6],m=r[1],y=r[4],M=r[7],b=r[2],C=r[5],R=r[8];return s[0]=a*S+o*m+l*b,s[3]=a*g+o*y+l*C,s[6]=a*d+o*M+l*R,s[1]=c*S+h*m+f*b,s[4]=c*g+h*y+f*C,s[7]=c*d+h*M+f*R,s[2]=u*S+p*m+_*b,s[5]=u*g+p*y+_*C,s[8]=u*d+p*M+_*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*a*h-n*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*s,p=c*s-a*l,_=n*f+i*u+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=f*S,e[1]=(r*c-h*i)*S,e[2]=(o*i-r*a)*S,e[3]=u*S,e[4]=(h*n-r*l)*S,e[5]=(r*s-o*n)*S,e[6]=p*S,e[7]=(i*l-c*n)*S,e[8]=(a*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(ru.makeScale(e,n)),this}rotate(e){return this.premultiply(ru.makeRotation(-e)),this}translate(e,n){return this.premultiply(ru.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ru=new We,Mm=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Em=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wT(){const t={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===lt&&(r.r=Di(r.r),r.g=Di(r.g),r.b=Di(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(r.r=Bs(r.r),r.g=Bs(r.g),r.b=Bs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===tr?Jl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return tc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return tc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Ks]:{primaries:e,whitePoint:i,transfer:Jl,toXYZ:Mm,fromXYZ:Em,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:Mm,fromXYZ:Em,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),t}const et=wT();function Di(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Bs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let rs;class TT{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{rs===void 0&&(rs=ec("canvas")),rs.width=e.width,rs.height=e.height;const r=rs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=rs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ec("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Di(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Di(n[i]/255)*255):n[i]=Di(n[i]);return{data:n,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bT=0;class Lh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bT++}),this.uuid=na(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(su(r[a].image)):s.push(su(r[a]))}else s=su(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function su(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?TT.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}let CT=0;const au=new j;class rn extends ta{constructor(e=rn.DEFAULT_IMAGE,n=rn.DEFAULT_MAPPING,i=Li,r=Li,s=nn,a=Hr,o=Jn,l=Rn,c=rn.DEFAULT_ANISOTROPY,h=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:CT++}),this.uuid=na(),this.name="",this.source=new Lh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(au).x}get height(){return this.source.getSize(au).y}get depth(){return this.source.getSize(au).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){ke(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ke(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fd:e.x=e.x-Math.floor(e.x);break;case Li:e.x=e.x<0?0:1;break;case Od:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fd:e.y=e.y-Math.floor(e.y);break;case Li:e.y=e.y<0?0:1;break;case Od:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=$_;rn.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,n=0,i=0,r=1){At.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],p=l[5],_=l[9],S=l[2],g=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-S)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+S)<.1&&Math.abs(_+g)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,M=(p+1)/2,b=(d+1)/2,C=(h+u)/4,R=(f+S)/4,v=(_+g)/4;return y>M&&y>b?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=C/i,s=R/i):M>b?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=C/r,s=v/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=R/s,r=v/s),this.set(i,r,s,n),this}let m=Math.sqrt((g-_)*(g-_)+(f-S)*(f-S)+(u-h)*(u-h));return Math.abs(m)<.001&&(m=1),this.x=(g-_)/m,this.y=(f-S)/m,this.z=(u-h)/m,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this.w=Ke(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this.w=Ke(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class AT extends ta{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new rn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Lh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends AT{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class n1 extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class RT extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Et{constructor(e,n,i,r,s,a,o,l,c,h,f,u,p,_,S,g){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,h,f,u,p,_,S,g)}set(e,n,i,r,s,a,o,l,c,h,f,u,p,_,S,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=u,d[3]=p,d[7]=_,d[11]=S,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/ss.setFromMatrixColumn(e,0).length(),s=1/ss.setFromMatrixColumn(e,1).length(),a=1/ss.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=a*h,p=a*f,_=o*h,S=o*f;n[0]=l*h,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=u-S*c,n[9]=-o*l,n[2]=S-u*c,n[6]=_+p*c,n[10]=a*l}else if(e.order==="YXZ"){const u=l*h,p=l*f,_=c*h,S=c*f;n[0]=u+S*o,n[4]=_*o-p,n[8]=a*c,n[1]=a*f,n[5]=a*h,n[9]=-o,n[2]=p*o-_,n[6]=S+u*o,n[10]=a*l}else if(e.order==="ZXY"){const u=l*h,p=l*f,_=c*h,S=c*f;n[0]=u-S*o,n[4]=-a*f,n[8]=_+p*o,n[1]=p+_*o,n[5]=a*h,n[9]=S-u*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const u=a*h,p=a*f,_=o*h,S=o*f;n[0]=l*h,n[4]=_*c-p,n[8]=u*c+S,n[1]=l*f,n[5]=S*c+u,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const u=a*l,p=a*c,_=o*l,S=o*c;n[0]=l*h,n[4]=S-u*f,n[8]=_*f+p,n[1]=f,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=p*f+_,n[10]=u-S*f}else if(e.order==="XZY"){const u=a*l,p=a*c,_=o*l,S=o*c;n[0]=l*h,n[4]=-f,n[8]=c*h,n[1]=u*f+S,n[5]=a*h,n[9]=p*f-_,n[2]=_*f-p,n[6]=o*h,n[10]=S*f+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(PT,e,LT)}lookAt(e,n,i){const r=this.elements;return Tn.subVectors(e,n),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),ji.crossVectors(i,Tn),ji.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),ji.crossVectors(i,Tn)),ji.normalize(),Fo.crossVectors(Tn,ji),r[0]=ji.x,r[4]=Fo.x,r[8]=Tn.x,r[1]=ji.y,r[5]=Fo.y,r[9]=Tn.y,r[2]=ji.z,r[6]=Fo.z,r[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],p=i[13],_=i[2],S=i[6],g=i[10],d=i[14],m=i[3],y=i[7],M=i[11],b=i[15],C=r[0],R=r[4],v=r[8],T=r[12],W=r[1],I=r[5],V=r[9],U=r[13],$=r[2],F=r[6],P=r[10],O=r[14],H=r[3],G=r[7],te=r[11],ie=r[15];return s[0]=a*C+o*W+l*$+c*H,s[4]=a*R+o*I+l*F+c*G,s[8]=a*v+o*V+l*P+c*te,s[12]=a*T+o*U+l*O+c*ie,s[1]=h*C+f*W+u*$+p*H,s[5]=h*R+f*I+u*F+p*G,s[9]=h*v+f*V+u*P+p*te,s[13]=h*T+f*U+u*O+p*ie,s[2]=_*C+S*W+g*$+d*H,s[6]=_*R+S*I+g*F+d*G,s[10]=_*v+S*V+g*P+d*te,s[14]=_*T+S*U+g*O+d*ie,s[3]=m*C+y*W+M*$+b*H,s[7]=m*R+y*I+M*F+b*G,s[11]=m*v+y*V+M*P+b*te,s[15]=m*T+y*U+M*O+b*ie,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],p=e[14],_=e[3],S=e[7],g=e[11],d=e[15],m=l*p-c*u,y=o*p-c*f,M=o*u-l*f,b=a*p-c*h,C=a*u-l*h,R=a*f-o*h;return n*(S*m-g*y+d*M)-i*(_*m-g*b+d*C)+r*(_*y-S*b+d*R)-s*(_*M-S*C+g*R)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],p=e[11],_=e[12],S=e[13],g=e[14],d=e[15],m=n*o-i*a,y=n*l-r*a,M=n*c-s*a,b=i*l-r*o,C=i*c-s*o,R=r*c-s*l,v=h*S-f*_,T=h*g-u*_,W=h*d-p*_,I=f*g-u*S,V=f*d-p*S,U=u*d-p*g,$=m*U-y*V+M*I+b*W-C*T+R*v;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/$;return e[0]=(o*U-l*V+c*I)*F,e[1]=(r*V-i*U-s*I)*F,e[2]=(S*R-g*C+d*b)*F,e[3]=(u*C-f*R-p*b)*F,e[4]=(l*W-a*U-c*T)*F,e[5]=(n*U-r*W+s*T)*F,e[6]=(g*M-_*R-d*y)*F,e[7]=(h*R-u*M+p*y)*F,e[8]=(a*V-o*W+c*v)*F,e[9]=(i*W-n*V-s*v)*F,e[10]=(_*C-S*M+d*m)*F,e[11]=(f*M-h*C-p*m)*F,e[12]=(o*T-a*I-l*v)*F,e[13]=(n*I-i*T+r*v)*F,e[14]=(S*y-_*b-g*m)*F,e[15]=(h*b-f*y+u*m)*F,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,h=a+a,f=o+o,u=s*c,p=s*h,_=s*f,S=a*h,g=a*f,d=o*f,m=l*c,y=l*h,M=l*f,b=i.x,C=i.y,R=i.z;return r[0]=(1-(S+d))*b,r[1]=(p+M)*b,r[2]=(_-y)*b,r[3]=0,r[4]=(p-M)*C,r[5]=(1-(u+d))*C,r[6]=(g+m)*C,r[7]=0,r[8]=(_+y)*R,r[9]=(g-m)*R,r[10]=(1-(u+S))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let a=ss.set(r[0],r[1],r[2]).length();const o=ss.set(r[4],r[5],r[6]).length(),l=ss.set(r[8],r[9],r[10]).length();s<0&&(a=-a),jn.copy(this);const c=1/a,h=1/o,f=1/l;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=h,jn.elements[5]*=h,jn.elements[6]*=h,jn.elements[8]*=f,jn.elements[9]*=f,jn.elements[10]*=f,n.setFromRotationMatrix(jn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=fi,l=!1){const c=this.elements,h=2*s/(n-e),f=2*s/(i-r),u=(n+e)/(n-e),p=(i+r)/(i-r);let _,S;if(l)_=s/(a-s),S=a*s/(a-s);else if(o===fi)_=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===no)_=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=fi,l=!1){const c=this.elements,h=2/(n-e),f=2/(i-r),u=-(n+e)/(n-e),p=-(i+r)/(i-r);let _,S;if(l)_=1/(a-s),S=a/(a-s);else if(o===fi)_=-2/(a-s),S=-(a+s)/(a-s);else if(o===no)_=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ss=new j,jn=new Et,PT=new j(0,0,0),LT=new j(1,1,1),ji=new j,Fo=new j,Tn=new j,wm=new Et,Tm=new ia;class ii{constructor(e=0,n=0,i=0,r=ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],f=r[2],u=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return wm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Tm.setFromEuler(this),this.setFromQuaternion(Tm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ii.DEFAULT_ORDER="XYZ";class i1{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let NT=0;const bm=new j,as=new ia,Si=new Et,Oo=new j,pa=new j,IT=new j,DT=new ia,Cm=new j(1,0,0),Am=new j(0,1,0),Rm=new j(0,0,1),Pm={type:"added"},UT={type:"removed"},os={type:"childadded",child:null},ou={type:"childremoved",child:null};class sn extends ta{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:NT++}),this.uuid=na(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new j,n=new ii,i=new ia,r=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new We}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new i1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return as.setFromAxisAngle(e,n),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,n){return as.setFromAxisAngle(e,n),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(Cm,e)}rotateY(e){return this.rotateOnAxis(Am,e)}rotateZ(e){return this.rotateOnAxis(Rm,e)}translateOnAxis(e,n){return bm.copy(e).applyQuaternion(this.quaternion),this.position.add(bm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Cm,e)}translateY(e){return this.translateOnAxis(Am,e)}translateZ(e){return this.translateOnAxis(Rm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Oo.copy(e):Oo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(pa,Oo,this.up):Si.lookAt(Oo,pa,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),as.setFromRotationMatrix(Si),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pm),os.child=e,this.dispatchEvent(os),os.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(UT),ou.child=e,this.dispatchEvent(ou),ou.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pm),os.child=e,this.dispatchEvent(os),os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,e,IT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,DT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}sn.DEFAULT_UP=new j(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ls extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FT={type:"move"};class lu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const g=n.getJointPose(S,i),d=this._getHandJoint(c,S);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&u>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(FT)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ls;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const r1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},ko={h:0,s:0,l:0};function cu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ge{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=Ph(e,1),n=Ke(n,0,1),i=Ke(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=cu(a,s,e+1/3),this.g=cu(a,s,e),this.b=cu(a,s,e-1/3)}return et.colorSpaceToWorking(this,r),this}setStyle(e,n=fn){function i(s){s!==void 0&&parseFloat(s)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=fn){const i=r1[e.toLowerCase()];return i!==void 0?this.setHex(i,n):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return et.workingToColorSpace(Jt.copy(this),e),Math.round(Ke(Jt.r*255,0,255))*65536+Math.round(Ke(Jt.g*255,0,255))*256+Math.round(Ke(Jt.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.workingToColorSpace(Jt.copy(this),n);const i=Jt.r,r=Jt.g,s=Jt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=et.workingColorSpace){return et.workingToColorSpace(Jt.copy(this),n),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=fn){et.workingToColorSpace(Jt.copy(this),e);const n=Jt.r,i=Jt.g,r=Jt.b;return e!==fn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+n,Xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Xi),e.getHSL(ko);const i=Fa(Xi.h,ko.h,n),r=Fa(Xi.s,ko.s,n),s=Fa(Xi.l,ko.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new Ge;Ge.NAMES=r1;class OT extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Xn=new j,Mi=new j,uu=new j,Ei=new j,ls=new j,cs=new j,Lm=new j,du=new j,fu=new j,hu=new j,pu=new At,mu=new At,gu=new At;class Qn{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Xn.subVectors(e,n),r.cross(Xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Xn.subVectors(r,n),Mi.subVectors(i,n),uu.subVectors(e,n);const a=Xn.dot(Xn),o=Xn.dot(Mi),l=Xn.dot(uu),c=Mi.dot(Mi),h=Mi.dot(uu),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const u=1/f,p=(c*l-o*h)*u,_=(a*h-o*l)*u;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(a,Ei.y),l.addScaledVector(o,Ei.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return pu.setScalar(0),mu.setScalar(0),gu.setScalar(0),pu.fromBufferAttribute(e,n),mu.fromBufferAttribute(e,i),gu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(pu,s.x),a.addScaledVector(mu,s.y),a.addScaledVector(gu,s.z),a}static isFrontFacing(e,n,i,r){return Xn.subVectors(i,n),Mi.subVectors(e,n),Xn.cross(Mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Xn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Qn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;ls.subVectors(r,i),cs.subVectors(s,i),du.subVectors(e,i);const l=ls.dot(du),c=cs.dot(du);if(l<=0&&c<=0)return n.copy(i);fu.subVectors(e,r);const h=ls.dot(fu),f=cs.dot(fu);if(h>=0&&f<=h)return n.copy(r);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(ls,a);hu.subVectors(e,s);const p=ls.dot(hu),_=cs.dot(hu);if(_>=0&&p<=_)return n.copy(s);const S=p*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(cs,o);const g=h*_-p*f;if(g<=0&&f-h>=0&&p-_>=0)return Lm.subVectors(s,r),o=(f-h)/(f-h+(p-_)),n.copy(r).addScaledVector(Lm,o);const d=1/(g+S+u);return a=S*d,o=u*d,n.copy(i).addScaledVector(ls,a).addScaledVector(cs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class uo{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint($n.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint($n.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=$n.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$n):$n.fromBufferAttribute(s,a),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Bo.copy(i.boundingBox)),Bo.applyMatrix4(e.matrixWorld),this.union(Bo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ma),zo.subVectors(this.max,ma),us.subVectors(e.a,ma),ds.subVectors(e.b,ma),fs.subVectors(e.c,ma),$i.subVectors(ds,us),Yi.subVectors(fs,ds),wr.subVectors(us,fs);let n=[0,-$i.z,$i.y,0,-Yi.z,Yi.y,0,-wr.z,wr.y,$i.z,0,-$i.x,Yi.z,0,-Yi.x,wr.z,0,-wr.x,-$i.y,$i.x,0,-Yi.y,Yi.x,0,-wr.y,wr.x,0];return!_u(n,us,ds,fs,zo)||(n=[1,0,0,0,1,0,0,0,1],!_u(n,us,ds,fs,zo))?!1:(Ho.crossVectors($i,Yi),n=[Ho.x,Ho.y,Ho.z],_u(n,us,ds,fs,zo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wi=[new j,new j,new j,new j,new j,new j,new j,new j],$n=new j,Bo=new uo,us=new j,ds=new j,fs=new j,$i=new j,Yi=new j,wr=new j,ma=new j,zo=new j,Ho=new j,Tr=new j;function _u(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Tr.fromArray(t,s);const o=r.x*Math.abs(Tr.x)+r.y*Math.abs(Tr.y)+r.z*Math.abs(Tr.z),l=e.dot(Tr),c=n.dot(Tr),h=i.dot(Tr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const It=new j,Vo=new rt;let kT=0;class tn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kT++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=gm,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Vo.fromBufferAttribute(this,n),Vo.applyMatrix3(e),this.setXY(n,Vo.x,Vo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix3(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix4(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyNormalMatrix(e),this.setXYZ(n,It.x,It.y,It.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.transformDirection(e),this.setXYZ(n,It.x,It.y,It.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=vs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=cn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=vs(n,this.array)),n}setX(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=vs(n,this.array)),n}setY(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=vs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=vs(n,this.array)),n}setW(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array),s=cn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gm&&(e.usage=this.usage),e}}class s1 extends tn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class a1 extends tn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class zn extends tn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const BT=new uo,ga=new j,vu=new j;class yc{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):BT.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ga.subVectors(e,this.center);const n=ga.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ga,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ga.copy(e.center).add(vu)),this.expandByPoint(ga.copy(e.center).sub(vu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let zT=0;const Un=new Et,xu=new sn,hs=new j,bn=new uo,_a=new uo,Ht=new j;class En extends ta{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zT++}),this.uuid=na(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rT(e)?a1:s1)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,n,i){return Un.makeTranslation(e,n,i),this.applyMatrix4(Un),this}scale(e,n,i){return Un.makeScale(e,n,i),this.applyMatrix4(Un),this}lookAt(e){return xu.lookAt(e),xu.updateMatrix(),this.applyMatrix4(xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new zn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new uo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];bn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];_a.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(bn.min,_a.min),bn.expandByPoint(Ht),Ht.addVectors(bn.max,_a.max),bn.expandByPoint(Ht)):(bn.expandByPoint(_a.min),bn.expandByPoint(_a.max))}bn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ht));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ht.fromBufferAttribute(o,c),l&&(hs.fromBufferAttribute(e,c),Ht.add(hs)),r=Math.max(r,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new j,l[v]=new j;const c=new j,h=new j,f=new j,u=new rt,p=new rt,_=new rt,S=new j,g=new j;function d(v,T,W){c.fromBufferAttribute(i,v),h.fromBufferAttribute(i,T),f.fromBufferAttribute(i,W),u.fromBufferAttribute(s,v),p.fromBufferAttribute(s,T),_.fromBufferAttribute(s,W),h.sub(c),f.sub(c),p.sub(u),_.sub(u);const I=1/(p.x*_.y-_.x*p.y);isFinite(I)&&(S.copy(h).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(I),g.copy(f).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(I),o[v].add(S),o[T].add(S),o[W].add(S),l[v].add(g),l[T].add(g),l[W].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let v=0,T=m.length;v<T;++v){const W=m[v],I=W.start,V=W.count;for(let U=I,$=I+V;U<$;U+=3)d(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const y=new j,M=new j,b=new j,C=new j;function R(v){b.fromBufferAttribute(r,v),C.copy(b);const T=o[v];y.copy(T),y.sub(b.multiplyScalar(b.dot(T))).normalize(),M.crossVectors(C,T);const I=M.dot(l[v])<0?-1:1;a.setXYZW(v,y.x,y.y,y.z,I)}for(let v=0,T=m.length;v<T;++v){const W=m[v],I=W.start,V=W.count;for(let U=I,$=I+V;U<$;U+=3)R(e.getX(U+0)),R(e.getX(U+1)),R(e.getX(U+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new tn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new j,s=new j,a=new j,o=new j,l=new j,c=new j,h=new j,f=new j;if(e)for(let u=0,p=e.count;u<p;u+=3){const _=e.getX(u+0),S=e.getX(u+1),g=e.getX(u+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,S),a.fromBufferAttribute(n,g),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),a.fromBufferAttribute(n,u+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ht.fromBufferAttribute(e,n),Ht.normalize(),e.setXYZ(n,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let p=0,_=0;for(let S=0,g=l.length;S<g;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*h;for(let d=0;d<h;d++)u[_++]=c[p++]}return new tn(u,h,f)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new En,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],p=e(u,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let HT=0;class Jr extends ta{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:HT++}),this.uuid=na(),this.name="",this.type="Material",this.blending=ks,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cd,this.blendDst=Ad,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){ke(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ke(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(i.blending=this.blending),this.side!==vr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cd&&(i.blendSrc=this.blendSrc),this.blendDst!==Ad&&(i.blendDst=this.blendDst),this.blendEquation!==Ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(i.stencilFail=this.stencilFail),this.stencilZFail!==is&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ti=new j,yu=new j,Go=new j,qi=new j,Su=new j,Wo=new j,Mu=new j;class o1{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,n),Ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){yu.copy(e).add(n).multiplyScalar(.5),Go.copy(n).sub(e).normalize(),qi.copy(this.origin).sub(yu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Go),o=qi.dot(this.direction),l=-qi.dot(Go),c=qi.lengthSq(),h=Math.abs(1-a*a);let f,u,p,_;if(h>0)if(f=a*l-o,u=a*o-l,_=s*h,f>=0)if(u>=-_)if(u<=_){const S=1/h;f*=S,u*=S,p=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=s,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;else u<=-_?(f=Math.max(0,-(-a*s+o)),u=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+u*(u+2*l)+c):u<=_?(f=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(f=Math.max(0,-(a*s+o)),u=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+u*(u+2*l)+c);else u=a>0?-s:s,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(yu).addScaledVector(Go,u),p}intersectSphere(e,n){Ti.subVectors(e.center,this.origin);const i=Ti.dot(this.direction),r=Ti.dot(Ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,n,i,r,s){Su.subVectors(n,e),Wo.subVectors(i,e),Mu.crossVectors(Su,Wo);let a=this.direction.dot(Mu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qi.subVectors(this.origin,e);const l=o*this.direction.dot(Wo.crossVectors(qi,Wo));if(l<0)return null;const c=o*this.direction.dot(Su.cross(qi));if(c<0||l+c>a)return null;const h=-o*qi.dot(Mu);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nc extends Jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nm=new Et,br=new o1,jo=new yc,Im=new j,Xo=new j,$o=new j,Yo=new j,Eu=new j,qo=new j,Dm=new j,Ko=new j;class vn extends sn{constructor(e=new En,n=new nc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){qo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],f=s[l];h!==0&&(Eu.fromBufferAttribute(f,e),a?qo.addScaledVector(Eu,h):qo.addScaledVector(Eu.sub(n),h))}n.add(qo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jo.copy(i.boundingSphere),jo.applyMatrix4(s),br.copy(e.ray).recast(e.near),!(jo.containsPoint(br.origin)===!1&&(br.intersectSphere(jo,Im)===null||br.origin.distanceToSquared(Im)>(e.far-e.near)**2))&&(Nm.copy(s).invert(),br.copy(e.ray).applyMatrix4(Nm),!(i.boundingBox!==null&&br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,br)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=u.length;_<S;_++){const g=u[_],d=a[g.materialIndex],m=Math.max(g.start,p.start),y=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let M=m,b=y;M<b;M+=3){const C=o.getX(M),R=o.getX(M+1),v=o.getX(M+2);r=Zo(this,d,e,i,c,h,f,C,R,v),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let g=_,d=S;g<d;g+=3){const m=o.getX(g),y=o.getX(g+1),M=o.getX(g+2);r=Zo(this,a,e,i,c,h,f,m,y,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=u.length;_<S;_++){const g=u[_],d=a[g.materialIndex],m=Math.max(g.start,p.start),y=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let M=m,b=y;M<b;M+=3){const C=M,R=M+1,v=M+2;r=Zo(this,d,e,i,c,h,f,C,R,v),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let g=_,d=S;g<d;g+=3){const m=g,y=g+1,M=g+2;r=Zo(this,a,e,i,c,h,f,m,y,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function VT(t,e,n,i,r,s,a,o){let l;if(e.side===pn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===vr,o),l===null)return null;Ko.copy(o),Ko.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ko);return c<n.near||c>n.far?null:{distance:c,point:Ko.clone(),object:t}}function Zo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Xo),t.getVertexPosition(l,$o),t.getVertexPosition(c,Yo);const h=VT(t,e,n,i,Xo,$o,Yo,Dm);if(h){const f=new j;Qn.getBarycoord(Dm,Xo,$o,Yo,f),r&&(h.uv=Qn.getInterpolatedAttribute(r,o,l,c,f,new rt)),s&&(h.uv1=Qn.getInterpolatedAttribute(s,o,l,c,f,new rt)),a&&(h.normal=Qn.getInterpolatedAttribute(a,o,l,c,f,new j),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new j,materialIndex:0};Qn.getNormal(Xo,$o,Yo,u.normal),h.face=u,h.barycoord=f}return h}class GT extends rn{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Xt,h=Xt,f,u){super(null,a,o,l,c,h,r,s,f,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wu=new j,WT=new j,jT=new We;class Ir{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=wu.subVectors(i,n).cross(WT.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(wu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||jT.getNormalMatrix(e),r=this.coplanarPoint(wu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new yc,XT=new rt(.5,.5),Qo=new j;class Nh{constructor(e=new Ir,n=new Ir,i=new Ir,r=new Ir,s=new Ir,a=new Ir){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=fi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],f=s[5],u=s[6],p=s[7],_=s[8],S=s[9],g=s[10],d=s[11],m=s[12],y=s[13],M=s[14],b=s[15];if(r[0].setComponents(c-a,p-h,d-_,b-m).normalize(),r[1].setComponents(c+a,p+h,d+_,b+m).normalize(),r[2].setComponents(c+o,p+f,d+S,b+y).normalize(),r[3].setComponents(c-o,p-f,d-S,b-y).normalize(),i)r[4].setComponents(l,u,g,M).normalize(),r[5].setComponents(c-l,p-u,d-g,b-M).normalize();else if(r[4].setComponents(c-l,p-u,d-g,b-M).normalize(),n===fi)r[5].setComponents(c+l,p+u,d+g,b+M).normalize();else if(n===no)r[5].setComponents(l,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){Cr.center.set(0,0,0);const n=XT.distanceTo(e.center);return Cr.radius=.7071067811865476+n,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Qo.x=r.normal.x>0?e.max.x:e.min.x,Qo.y=r.normal.y>0?e.max.y:e.min.y,Qo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bl extends Jr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Um=new Et,_f=new o1,Jo=new yc,el=new j;class Tu extends sn{constructor(e=new En,n=new bl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Jo.copy(i.boundingSphere),Jo.applyMatrix4(r),Jo.radius+=s,e.ray.intersectsSphere(Jo)===!1)return;Um.copy(r).invert(),_f.copy(e.ray).applyMatrix4(Um);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=u,S=p;_<S;_++){const g=c.getX(_);el.fromBufferAttribute(f,g),Fm(el,g,l,r,e,n,this)}}else{const u=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let _=u,S=p;_<S;_++)el.fromBufferAttribute(f,_),Fm(el,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Fm(t,e,n,i,r,s,a){const o=_f.distanceSqToPoint(t);if(o<n){const l=new j;_f.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class l1 extends rn{constructor(e=[],n=Kr,i,r,s,a,o,l,c,h){super(e,n,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class c1 extends rn{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ro extends rn{constructor(e,n,i=_i,r,s,a,o=Xt,l=Xt,c,h=zi,f=1){if(h!==zi&&h!==Vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:f};super(u,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class $T extends ro{constructor(e,n=_i,i=Kr,r,s,a=Xt,o=Xt,l,c=zi){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,n,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class u1 extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class fo extends En{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],f=[];let u=0,p=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new zn(c,3)),this.setAttribute("normal",new zn(h,3)),this.setAttribute("uv",new zn(f,2));function _(S,g,d,m,y,M,b,C,R,v,T){const W=M/R,I=b/v,V=M/2,U=b/2,$=C/2,F=R+1,P=v+1;let O=0,H=0;const G=new j;for(let te=0;te<P;te++){const ie=te*I-U;for(let ae=0;ae<F;ae++){const ve=ae*W-V;G[S]=ve*m,G[g]=ie*y,G[d]=$,c.push(G.x,G.y,G.z),G[S]=0,G[g]=0,G[d]=C>0?1:-1,h.push(G.x,G.y,G.z),f.push(ae/R),f.push(1-te/v),O+=1}}for(let te=0;te<v;te++)for(let ie=0;ie<R;ie++){const ae=u+ie+F*te,ve=u+ie+F*(te+1),Xe=u+(ie+1)+F*(te+1),He=u+(ie+1)+F*te;l.push(ae,ve,He),l.push(ve,Xe,He),H+=6}o.addGroup(p,H,T),p+=H,u+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Sc extends En{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,f=e/o,u=n/l,p=[],_=[],S=[],g=[];for(let d=0;d<h;d++){const m=d*u-a;for(let y=0;y<c;y++){const M=y*f-s;_.push(M,-m,0),S.push(0,0,1),g.push(y/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let m=0;m<o;m++){const y=m+c*d,M=m+c*(d+1),b=m+1+c*(d+1),C=m+1+c*d;p.push(y,M,C),p.push(M,b,C)}this.setIndex(p),this.setAttribute("position",new zn(_,3)),this.setAttribute("normal",new zn(S,3)),this.setAttribute("uv",new zn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Fr extends En{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new j,u=new j,p=[],_=[],S=[],g=[];for(let d=0;d<=i;d++){const m=[],y=d/i;let M=0;d===0&&a===0?M=.5/n:d===i&&l===Math.PI&&(M=-.5/n);for(let b=0;b<=n;b++){const C=b/n;f.x=-e*Math.cos(r+C*s)*Math.sin(a+y*o),f.y=e*Math.cos(a+y*o),f.z=e*Math.sin(r+C*s)*Math.sin(a+y*o),_.push(f.x,f.y,f.z),u.copy(f).normalize(),S.push(u.x,u.y,u.z),g.push(C+M,1-y),m.push(c++)}h.push(m)}for(let d=0;d<i;d++)for(let m=0;m<n;m++){const y=h[d][m+1],M=h[d][m],b=h[d+1][m],C=h[d+1][m+1];(d!==0||a>0)&&p.push(y,M,C),(d!==i-1||l<Math.PI)&&p.push(M,b,C)}this.setIndex(p),this.setAttribute("position",new zn(_,3)),this.setAttribute("normal",new zn(S,3)),this.setAttribute("uv",new zn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Zs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function un(t){const e={};for(let n=0;n<t.length;n++){const i=Zs(t[n]);for(const r in i)e[r]=i[r]}return e}function YT(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function d1(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const qT={clone:Zs,merge:un};var KT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends Jr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=KT,this.fragmentShader=ZT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=YT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class QT extends vi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Om extends Jr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ch,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class JT extends Jr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ge(16777215),this.specular=new Ge(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ch,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=xh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class eb extends Jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tb extends Jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ih extends sn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class nb extends Ih{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const bu=new Et,km=new j,Bm=new j;class ib{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nh,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;km.setFromMatrixPosition(e.matrixWorld),n.position.copy(km),Bm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Bm),n.updateMatrixWorld(),bu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bu,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===no||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(bu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const tl=new j,nl=new ia,ai=new j;class f1 extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(tl,nl,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tl,nl,ai.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(tl,nl,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tl,nl,ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new j,zm=new rt,Hm=new rt;class An extends f1{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=io*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return io*2*Math.atan(Math.tan(Ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,n){return this.getViewBounds(e,zm,Hm),n.subVectors(Hm,zm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ua*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class rb extends ib{constructor(){super(new An(90,1,.5,500)),this.isPointLightShadow=!0}}class Vm extends Ih{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new rb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class h1 extends f1{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class sb extends Ih{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const ps=-90,ms=1;class ab extends sn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new An(ps,ms,e,n);r.layers=this.layers,this.add(r);const s=new An(ps,ms,e,n);s.layers=this.layers,this.add(s);const a=new An(ps,ms,e,n);a.layers=this.layers,this.add(a);const o=new An(ps,ms,e,n);o.layers=this.layers,this.add(o);const l=new An(ps,ms,e,n);l.layers=this.layers,this.add(l);const c=new An(ps,ms,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===no)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(f,u,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class ob extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Gm(t,e,n,i){const r=lb(i);switch(n){case Q_:return t*e;case e1:return t*e/r.components*r.byteLength;case wh:return t*e/r.components*r.byteLength;case qs:return t*e*2/r.components*r.byteLength;case Th:return t*e*2/r.components*r.byteLength;case J_:return t*e*3/r.components*r.byteLength;case Jn:return t*e*4/r.components*r.byteLength;case bh:return t*e*4/r.components*r.byteLength;case Ml:case El:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case wl:case Tl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Bd:case Hd:return Math.max(t,16)*Math.max(e,8)/4;case kd:case zd:return Math.max(t,8)*Math.max(e,8)/2;case Vd:case Gd:case jd:case Xd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Wd:case $d:case Yd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case qd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ef:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case tf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case nf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case rf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case sf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case af:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case of:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case lf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case cf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case uf:case df:case ff:return Math.ceil(t/4)*Math.ceil(e/4)*16;case hf:case pf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case mf:case gf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function lb(t){switch(t){case Rn:case Y_:return{byteLength:1,components:1};case eo:case q_:case Bi:return{byteLength:2,components:1};case Mh:case Eh:return{byteLength:2,components:4};case _i:case Sh:case di:return{byteLength:4,components:1};case K_:case Z_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vh}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function p1(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function cb(t){const e=new WeakMap;function n(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const h=l.array,f=l.updateRanges;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,h);else{f.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<f.length;p++){const _=f[u],S=f[p];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++u,f[u]=S)}f.length=u+1;for(let p=0,_=f.length;p<_;p++){const S=f[p];t.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var ub=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,db=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_b=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,xb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Eb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Tb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ab=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Pb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Lb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Nb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ib=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Db=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ub=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Fb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ob=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Gb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Wb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$b=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Qb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,nC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,iC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lC=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dC=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_C=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,SC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,MC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,EC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TC=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,AC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,RC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,IC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,DC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,UC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,FC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,OC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,BC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,HC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,GC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,XC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$C=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,YC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ZC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,QC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,JC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,iA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_A=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,xA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,EA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,AA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,PA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,LA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,DA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:ub,alphahash_pars_fragment:db,alphamap_fragment:fb,alphamap_pars_fragment:hb,alphatest_fragment:pb,alphatest_pars_fragment:mb,aomap_fragment:gb,aomap_pars_fragment:_b,batching_pars_vertex:vb,batching_vertex:xb,begin_vertex:yb,beginnormal_vertex:Sb,bsdfs:Mb,iridescence_fragment:Eb,bumpmap_pars_fragment:wb,clipping_planes_fragment:Tb,clipping_planes_pars_fragment:bb,clipping_planes_pars_vertex:Cb,clipping_planes_vertex:Ab,color_fragment:Rb,color_pars_fragment:Pb,color_pars_vertex:Lb,color_vertex:Nb,common:Ib,cube_uv_reflection_fragment:Db,defaultnormal_vertex:Ub,displacementmap_pars_vertex:Fb,displacementmap_vertex:Ob,emissivemap_fragment:kb,emissivemap_pars_fragment:Bb,colorspace_fragment:zb,colorspace_pars_fragment:Hb,envmap_fragment:Vb,envmap_common_pars_fragment:Gb,envmap_pars_fragment:Wb,envmap_pars_vertex:jb,envmap_physical_pars_fragment:nC,envmap_vertex:Xb,fog_vertex:$b,fog_pars_vertex:Yb,fog_fragment:qb,fog_pars_fragment:Kb,gradientmap_pars_fragment:Zb,lightmap_pars_fragment:Qb,lights_lambert_fragment:Jb,lights_lambert_pars_fragment:eC,lights_pars_begin:tC,lights_toon_fragment:iC,lights_toon_pars_fragment:rC,lights_phong_fragment:sC,lights_phong_pars_fragment:aC,lights_physical_fragment:oC,lights_physical_pars_fragment:lC,lights_fragment_begin:cC,lights_fragment_maps:uC,lights_fragment_end:dC,logdepthbuf_fragment:fC,logdepthbuf_pars_fragment:hC,logdepthbuf_pars_vertex:pC,logdepthbuf_vertex:mC,map_fragment:gC,map_pars_fragment:_C,map_particle_fragment:vC,map_particle_pars_fragment:xC,metalnessmap_fragment:yC,metalnessmap_pars_fragment:SC,morphinstance_vertex:MC,morphcolor_vertex:EC,morphnormal_vertex:wC,morphtarget_pars_vertex:TC,morphtarget_vertex:bC,normal_fragment_begin:CC,normal_fragment_maps:AC,normal_pars_fragment:RC,normal_pars_vertex:PC,normal_vertex:LC,normalmap_pars_fragment:NC,clearcoat_normal_fragment_begin:IC,clearcoat_normal_fragment_maps:DC,clearcoat_pars_fragment:UC,iridescence_pars_fragment:FC,opaque_fragment:OC,packing:kC,premultiplied_alpha_fragment:BC,project_vertex:zC,dithering_fragment:HC,dithering_pars_fragment:VC,roughnessmap_fragment:GC,roughnessmap_pars_fragment:WC,shadowmap_pars_fragment:jC,shadowmap_pars_vertex:XC,shadowmap_vertex:$C,shadowmask_pars_fragment:YC,skinbase_vertex:qC,skinning_pars_vertex:KC,skinning_vertex:ZC,skinnormal_vertex:QC,specularmap_fragment:JC,specularmap_pars_fragment:eA,tonemapping_fragment:tA,tonemapping_pars_fragment:nA,transmission_fragment:iA,transmission_pars_fragment:rA,uv_pars_fragment:sA,uv_pars_vertex:aA,uv_vertex:oA,worldpos_vertex:lA,background_vert:cA,background_frag:uA,backgroundCube_vert:dA,backgroundCube_frag:fA,cube_vert:hA,cube_frag:pA,depth_vert:mA,depth_frag:gA,distance_vert:_A,distance_frag:vA,equirect_vert:xA,equirect_frag:yA,linedashed_vert:SA,linedashed_frag:MA,meshbasic_vert:EA,meshbasic_frag:wA,meshlambert_vert:TA,meshlambert_frag:bA,meshmatcap_vert:CA,meshmatcap_frag:AA,meshnormal_vert:RA,meshnormal_frag:PA,meshphong_vert:LA,meshphong_frag:NA,meshphysical_vert:IA,meshphysical_frag:DA,meshtoon_vert:UA,meshtoon_frag:FA,points_vert:OA,points_frag:kA,shadow_vert:BA,shadow_frag:zA,sprite_vert:HA,sprite_frag:VA},me={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},ci={basic:{uniforms:un([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:un([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:un([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:un([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:un([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ge(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:un([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:un([me.points,me.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:un([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:un([me.common,me.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:un([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:un([me.sprite,me.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:un([me.common,me.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:un([me.lights,me.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};ci.physical={uniforms:un([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const il={r:0,b:0,g:0},Ar=new ii,GA=new Et;function WA(t,e,n,i,r,s){const a=new Ge(0);let o=r===!0?0:1,l,c,h=null,f=0,u=null;function p(m){let y=m.isScene===!0?m.background:null;if(y&&y.isTexture){const M=m.backgroundBlurriness>0;y=e.get(y,M)}return y}function _(m){let y=!1;const M=p(m);M===null?g(a,o):M&&M.isColor&&(g(M,1),y=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function S(m,y){const M=p(y);M&&(M.isCubeTexture||M.mapping===xc)?(c===void 0&&(c=new vn(new fo(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:Zs(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Ar.copy(y.backgroundRotation),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(GA.makeRotationFromEuler(Ar)),c.material.toneMapped=et.getTransfer(M.colorSpace)!==lt,(h!==M||f!==M.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,u=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new vn(new Sc(2,2),new vi({name:"BackgroundMaterial",uniforms:Zs(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=et.getTransfer(M.colorSpace)!==lt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,u=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,y){m.getRGB(il,d1(t)),n.buffers.color.setClear(il.r,il.g,il.b,y,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(m,y=1){a.set(m),o=y,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(a,o)},render:_,addToRenderList:S,dispose:d}}function jA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(I,V,U,$,F){let P=!1;const O=f(I,$,U,V);s!==O&&(s=O,c(s.object)),P=p(I,$,U,F),P&&_(I,$,U,F),F!==null&&e.update(F,t.ELEMENT_ARRAY_BUFFER),(P||a)&&(a=!1,M(I,V,U,$),F!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return t.createVertexArray()}function c(I){return t.bindVertexArray(I)}function h(I){return t.deleteVertexArray(I)}function f(I,V,U,$){const F=$.wireframe===!0;let P=i[V.id];P===void 0&&(P={},i[V.id]=P);const O=I.isInstancedMesh===!0?I.id:0;let H=P[O];H===void 0&&(H={},P[O]=H);let G=H[U.id];G===void 0&&(G={},H[U.id]=G);let te=G[F];return te===void 0&&(te=u(l()),G[F]=te),te}function u(I){const V=[],U=[],$=[];for(let F=0;F<n;F++)V[F]=0,U[F]=0,$[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:U,attributeDivisors:$,object:I,attributes:{},index:null}}function p(I,V,U,$){const F=s.attributes,P=V.attributes;let O=0;const H=U.getAttributes();for(const G in H)if(H[G].location>=0){const ie=F[G];let ae=P[G];if(ae===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&(ae=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&(ae=I.instanceColor)),ie===void 0||ie.attribute!==ae||ae&&ie.data!==ae.data)return!0;O++}return s.attributesNum!==O||s.index!==$}function _(I,V,U,$){const F={},P=V.attributes;let O=0;const H=U.getAttributes();for(const G in H)if(H[G].location>=0){let ie=P[G];ie===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&(ie=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&(ie=I.instanceColor));const ae={};ae.attribute=ie,ie&&ie.data&&(ae.data=ie.data),F[G]=ae,O++}s.attributes=F,s.attributesNum=O,s.index=$}function S(){const I=s.newAttributes;for(let V=0,U=I.length;V<U;V++)I[V]=0}function g(I){d(I,0)}function d(I,V){const U=s.newAttributes,$=s.enabledAttributes,F=s.attributeDivisors;U[I]=1,$[I]===0&&(t.enableVertexAttribArray(I),$[I]=1),F[I]!==V&&(t.vertexAttribDivisor(I,V),F[I]=V)}function m(){const I=s.newAttributes,V=s.enabledAttributes;for(let U=0,$=V.length;U<$;U++)V[U]!==I[U]&&(t.disableVertexAttribArray(U),V[U]=0)}function y(I,V,U,$,F,P,O){O===!0?t.vertexAttribIPointer(I,V,U,F,P):t.vertexAttribPointer(I,V,U,$,F,P)}function M(I,V,U,$){S();const F=$.attributes,P=U.getAttributes(),O=V.defaultAttributeValues;for(const H in P){const G=P[H];if(G.location>=0){let te=F[H];if(te===void 0&&(H==="instanceMatrix"&&I.instanceMatrix&&(te=I.instanceMatrix),H==="instanceColor"&&I.instanceColor&&(te=I.instanceColor)),te!==void 0){const ie=te.normalized,ae=te.itemSize,ve=e.get(te);if(ve===void 0)continue;const Xe=ve.buffer,He=ve.type,L=ve.bytesPerElement,Z=He===t.INT||He===t.UNSIGNED_INT||te.gpuType===Sh;if(te.isInterleavedBufferAttribute){const re=te.data,we=re.stride,pe=te.offset;if(re.isInstancedInterleavedBuffer){for(let Ne=0;Ne<G.locationSize;Ne++)d(G.location+Ne,re.meshPerAttribute);I.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ne=0;Ne<G.locationSize;Ne++)g(G.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let Ne=0;Ne<G.locationSize;Ne++)y(G.location+Ne,ae/G.locationSize,He,ie,we*L,(pe+ae/G.locationSize*Ne)*L,Z)}else{if(te.isInstancedBufferAttribute){for(let re=0;re<G.locationSize;re++)d(G.location+re,te.meshPerAttribute);I.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let re=0;re<G.locationSize;re++)g(G.location+re);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let re=0;re<G.locationSize;re++)y(G.location+re,ae/G.locationSize,He,ie,ae*L,ae/G.locationSize*re*L,Z)}}else if(O!==void 0){const ie=O[H];if(ie!==void 0)switch(ie.length){case 2:t.vertexAttrib2fv(G.location,ie);break;case 3:t.vertexAttrib3fv(G.location,ie);break;case 4:t.vertexAttrib4fv(G.location,ie);break;default:t.vertexAttrib1fv(G.location,ie)}}}}m()}function b(){T();for(const I in i){const V=i[I];for(const U in V){const $=V[U];for(const F in $){const P=$[F];for(const O in P)h(P[O].object),delete P[O];delete $[F]}}delete i[I]}}function C(I){if(i[I.id]===void 0)return;const V=i[I.id];for(const U in V){const $=V[U];for(const F in $){const P=$[F];for(const O in P)h(P[O].object),delete P[O];delete $[F]}}delete i[I.id]}function R(I){for(const V in i){const U=i[V];for(const $ in U){const F=U[$];if(F[I.id]===void 0)continue;const P=F[I.id];for(const O in P)h(P[O].object),delete P[O];delete F[I.id]}}}function v(I){for(const V in i){const U=i[V],$=I.isInstancedMesh===!0?I.id:0,F=U[$];if(F!==void 0){for(const P in F){const O=F[P];for(const H in O)h(O[H].object),delete O[H];delete F[P]}delete U[$],Object.keys(U).length===0&&delete i[V]}}}function T(){W(),a=!0,s!==r&&(s=r,c(s.object))}function W(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:W,dispose:b,releaseStatesOfGeometry:C,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:g,disableUnusedAttributes:m}}function XA(t,e,n){let i;function r(c){i=c}function s(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function a(c,h,f){f!==0&&(t.drawArraysInstanced(i,c,h,f),n.update(h,i,f))}function o(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let p=0;for(let _=0;_<f;_++)p+=h[_];n.update(p,i,1)}function l(c,h,f,u){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],h[_],u[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,f);let _=0;for(let S=0;S<f;S++)_+=h[S]*u[S];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function $A(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==Jn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const v=R===Bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Rn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==di&&!v)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(ke("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),C=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:m,maxVaryings:y,maxFragmentUniforms:M,maxSamples:b,samples:C}}function YA(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Ir,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||i!==0||r;return r=u,i=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){n=h(f,u,0)},this.setState=function(f,u,p){const _=f.clippingPlanes,S=f.clipIntersection,g=f.clipShadows,d=t.get(f);if(!r||_===null||_.length===0||s&&!g)s?h(null):c();else{const m=s?0:i,y=m*4;let M=d.clippingState||null;l.value=M,M=h(_,u,y,p);for(let b=0;b!==y;++b)M[b]=n[b];d.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,p,_){const S=f!==null?f.length:0;let g=null;if(S!==0){if(g=l.value,_!==!0||g===null){const d=p+S*4,m=u.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<d)&&(g=new Float32Array(d));for(let y=0,M=p;y!==S;++y,M+=4)a.copy(f[y]).applyMatrix4(m,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}const sr=4,Wm=[.125,.215,.35,.446,.526,.582],Or=20,qA=256,va=new h1,jm=new Ge;let Cu=null,Au=0,Ru=0,Pu=!1;const KA=new j;class Xm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=KA}=s;Cu=this._renderer.getRenderTarget(),Au=this._renderer.getActiveCubeFace(),Ru=this._renderer.getActiveMipmapLevel(),Pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ym(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Cu,Au,Ru),this._renderer.xr.enabled=Pu,e.scissorTest=!1,gs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Kr||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cu=this._renderer.getRenderTarget(),Au=this._renderer.getActiveCubeFace(),Ru=this._renderer.getActiveMipmapLevel(),Pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Bi,format:Jn,colorSpace:Ks,depthBuffer:!1},r=$m(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$m(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ZA(s)),this._blurMaterial=JA(s,e,n),this._ggxMaterial=QA(s,e,n)}return r}_compileMaterial(e){const n=new vn(new En,e);this._renderer.compile(n,va)}_sceneToCubeUV(e,n,i,r,s){const l=new An(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,p=f.toneMapping;f.getClearColor(jm),f.toneMapping=mi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new vn(new fo,new nc({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,g=S.material;let d=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,d=!0):(g.color.copy(jm),d=!0);for(let y=0;y<6;y++){const M=y%3;M===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[y],s.y,s.z)):M===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[y]));const b=this._cubeSize;gs(r,M*b,y>2?b:0,b,b),f.setRenderTarget(r),d&&f.render(S,l),f.render(e,l)}f.toneMapping=p,f.autoClear=u,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Kr||e.mapping===Ys;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ym());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;gs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,va)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=0+c*1.25,p=f*u,{_lodMax:_}=this,S=this._sizeLods[i],g=3*S*(i>_-sr?i-_+sr:0),d=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-n,gs(s,g,d,3*S,2*S),r.setRenderTarget(s),r.render(o,va),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,gs(e,g,d,3*S,2*S),r.setRenderTarget(e),r.render(o,va)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&it("blur direction must be either latitudinal or longitudinal!");const h=3,f=this._lodMeshes[r];f.material=c;const u=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Or-1),S=s/_,g=isFinite(s)?1+Math.floor(h*S):Or;g>Or&&ke(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Or}`);const d=[];let m=0;for(let R=0;R<Or;++R){const v=R/S,T=Math.exp(-v*v/2);d.push(T),R===0?m+=T:R<g&&(m+=2*T)}for(let R=0;R<d.length;R++)d[R]=d[R]/m;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=d,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:y}=this;u.dTheta.value=_,u.mipInt.value=y-i;const M=this._sizeLods[r],b=3*M*(r>y-sr?r-y+sr:0),C=4*(this._cubeSize-M);gs(n,b,C,3*M,2*M),l.setRenderTarget(n),l.render(f,va)}}function ZA(t){const e=[],n=[],i=[];let r=t;const s=t-sr+1+Wm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-sr?l=Wm[a-t+sr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,_=6,S=3,g=2,d=1,m=new Float32Array(S*_*p),y=new Float32Array(g*_*p),M=new Float32Array(d*_*p);for(let C=0;C<p;C++){const R=C%3*2/3-1,v=C>2?0:-1,T=[R,v,0,R+2/3,v,0,R+2/3,v+1,0,R,v,0,R+2/3,v+1,0,R,v+1,0];m.set(T,S*_*C),y.set(u,g*_*C);const W=[C,C,C,C,C,C];M.set(W,d*_*C)}const b=new En;b.setAttribute("position",new tn(m,S)),b.setAttribute("uv",new tn(y,g)),b.setAttribute("faceIndex",new tn(M,d)),i.push(new vn(b,null)),r>sr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function $m(t,e,n){const i=new gi(t,e,n);return i.texture.mapping=xc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function QA(t,e,n){return new vi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Mc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function JA(t,e,n){const i=new Float32Array(Or),r=new j(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:Or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Ym(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function qm(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Mc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class m1 extends gi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new l1(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new fo(5,5,5),s=new vi({name:"CubemapFromEquirect",uniforms:Zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:Ii});s.uniforms.tEquirect.value=n;const a=new vn(r,s),o=n.minFilter;return n.minFilter===Hr&&(n.minFilter=nn),new ab(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function e4(t){let e=new WeakMap,n=new WeakMap,i=null;function r(u,p=!1){return u==null?null:p?a(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===eu||p===tu)if(e.has(u)){const _=e.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const S=new m1(_.height);return S.fromEquirectangularTexture(t,u),e.set(u,S),u.addEventListener("dispose",c),o(S.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const p=u.mapping,_=p===eu||p===tu,S=p===Kr||p===Ys;if(_||S){let g=n.get(u);const d=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return i===null&&(i=new Xm(t)),g=_?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{const m=u.image;return _&&m&&m.height>0||S&&m&&l(m)?(i===null&&(i=new Xm(t)),g=_?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,p){return p===eu?u.mapping=Kr:p===tu&&(u.mapping=Ys),u}function l(u){let p=0;const _=6;for(let S=0;S<_;S++)u[S]!==void 0&&p++;return p===_}function c(u){const p=u.target;p.removeEventListener("dispose",c);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function h(u){const p=u.target;p.removeEventListener("dispose",h);const _=n.get(p);_!==void 0&&(n.delete(p),_.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function t4(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&tc("WebGLRenderer: "+i+" extension not supported."),r}}}function n4(t,e,n,i){const r={},s=new WeakMap;function a(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(f,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,n.memory.geometries++),u}function l(f){const u=f.attributes;for(const p in u)e.update(u[p],t.ARRAY_BUFFER)}function c(f){const u=[],p=f.index,_=f.attributes.position;let S=0;if(_===void 0)return;if(p!==null){const m=p.array;S=p.version;for(let y=0,M=m.length;y<M;y+=3){const b=m[y+0],C=m[y+1],R=m[y+2];u.push(b,C,C,R,R,b)}}else{const m=_.array;S=_.version;for(let y=0,M=m.length/3-1;y<M;y+=3){const b=y+0,C=y+1,R=y+2;u.push(b,C,C,R,R,b)}}const g=new(_.count>=65535?a1:s1)(u,1);g.version=S;const d=s.get(f);d&&e.remove(d),s.set(f,g)}function h(f){const u=s.get(f);if(u){const p=f.index;p!==null&&u.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function i4(t,e,n){let i;function r(u){i=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,p){t.drawElements(i,p,s,u*a),n.update(p,i,1)}function c(u,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,u*a,_),n.update(p,i,_))}function h(u,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,u,0,_);let g=0;for(let d=0;d<_;d++)g+=p[d];n.update(g,i,1)}function f(u,p,_,S){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<u.length;d++)c(u[d]/a,p[d],S[d]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,u,0,S,0,_);let d=0;for(let m=0;m<_;m++)d+=p[m]*S[m];n.update(d,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function r4(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:it("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function s4(t,e,n){const i=new WeakMap,r=new At;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==f){let W=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",W)};var p=W;u!==void 0&&u.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),S===!0&&(M=2),g===!0&&(M=3);let b=o.attributes.position.count*M,C=1;b>e.maxTextureSize&&(C=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const R=new Float32Array(b*C*4*f),v=new n1(R,b,C,f);v.type=di,v.needsUpdate=!0;const T=M*4;for(let I=0;I<f;I++){const V=d[I],U=m[I],$=y[I],F=b*C*4*I;for(let P=0;P<V.count;P++){const O=P*T;_===!0&&(r.fromBufferAttribute(V,P),R[F+O+0]=r.x,R[F+O+1]=r.y,R[F+O+2]=r.z,R[F+O+3]=0),S===!0&&(r.fromBufferAttribute(U,P),R[F+O+4]=r.x,R[F+O+5]=r.y,R[F+O+6]=r.z,R[F+O+7]=0),g===!0&&(r.fromBufferAttribute($,P),R[F+O+8]=r.x,R[F+O+9]=r.y,R[F+O+10]=r.z,R[F+O+11]=$.itemSize===4?r.w:1)}}u={count:f,texture:v,size:new rt(b,C)},i.set(o,u),o.addEventListener("dispose",W)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const S=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function a4(t,e,n,i,r){let s=new WeakMap;function a(c){const h=r.render.frame,f=c.geometry,u=e.get(c,f);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return u}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:o}}const o4={[H_]:"LINEAR_TONE_MAPPING",[V_]:"REINHARD_TONE_MAPPING",[G_]:"CINEON_TONE_MAPPING",[yh]:"ACES_FILMIC_TONE_MAPPING",[j_]:"AGX_TONE_MAPPING",[X_]:"NEUTRAL_TONE_MAPPING",[W_]:"CUSTOM_TONE_MAPPING"};function l4(t,e,n,i,r){const s=new gi(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),a=new gi(e,n,{type:Bi,depthBuffer:!1,stencilBuffer:!1}),o=new En;o.setAttribute("position",new zn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new zn([0,2,0,0,2,0],2));const l=new QT({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new vn(o,l),h=new h1(-1,1,1,-1,0,1);let f=null,u=null,p=!1,_,S=null,g=[],d=!1;this.setSize=function(m,y){s.setSize(m,y),a.setSize(m,y);for(let M=0;M<g.length;M++){const b=g[M];b.setSize&&b.setSize(m,y)}},this.setEffects=function(m){g=m,d=g.length>0&&g[0].isRenderPass===!0;const y=s.width,M=s.height;for(let b=0;b<g.length;b++){const C=g[b];C.setSize&&C.setSize(y,M)}},this.begin=function(m,y){if(p||m.toneMapping===mi&&g.length===0)return!1;if(S=y,y!==null){const M=y.width,b=y.height;(s.width!==M||s.height!==b)&&this.setSize(M,b)}return d===!1&&m.setRenderTarget(s),_=m.toneMapping,m.toneMapping=mi,!0},this.hasRenderPass=function(){return d},this.end=function(m,y){m.toneMapping=_,p=!0;let M=s,b=a;for(let C=0;C<g.length;C++){const R=g[C];if(R.enabled!==!1&&(R.render(m,b,M,y),R.needsSwap!==!1)){const v=M;M=b,b=v}}if(f!==m.outputColorSpace||u!==m.toneMapping){f=m.outputColorSpace,u=m.toneMapping,l.defines={},et.getTransfer(f)===lt&&(l.defines.SRGB_TRANSFER="");const C=o4[u];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,m.setRenderTarget(S),m.render(c,h),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const g1=new rn,vf=new ro(1,1),_1=new n1,v1=new RT,x1=new l1,Km=[],Zm=[],Qm=new Float32Array(16),Jm=new Float32Array(9),e0=new Float32Array(4);function ra(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Km[r];if(s===void 0&&(s=new Float32Array(r),Km[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ot(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ec(t,e){let n=Zm[e];n===void 0&&(n=new Int32Array(e),Zm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function c4(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function u4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2fv(this.addr,e),kt(n,e)}}function d4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ot(n,e))return;t.uniform3fv(this.addr,e),kt(n,e)}}function f4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4fv(this.addr,e),kt(n,e)}}function h4(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),kt(n,e)}else{if(Ot(n,i))return;e0.set(i),t.uniformMatrix2fv(this.addr,!1,e0),kt(n,i)}}function p4(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),kt(n,e)}else{if(Ot(n,i))return;Jm.set(i),t.uniformMatrix3fv(this.addr,!1,Jm),kt(n,i)}}function m4(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),kt(n,e)}else{if(Ot(n,i))return;Qm.set(i),t.uniformMatrix4fv(this.addr,!1,Qm),kt(n,i)}}function g4(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function _4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2iv(this.addr,e),kt(n,e)}}function v4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3iv(this.addr,e),kt(n,e)}}function x4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4iv(this.addr,e),kt(n,e)}}function y4(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function S4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2uiv(this.addr,e),kt(n,e)}}function M4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3uiv(this.addr,e),kt(n,e)}}function E4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4uiv(this.addr,e),kt(n,e)}}function w4(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(vf.compareFunction=n.isReversedDepthBuffer()?Rh:Ah,s=vf):s=g1,n.setTexture2D(e||s,r)}function T4(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||v1,r)}function b4(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||x1,r)}function C4(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||_1,r)}function A4(t){switch(t){case 5126:return c4;case 35664:return u4;case 35665:return d4;case 35666:return f4;case 35674:return h4;case 35675:return p4;case 35676:return m4;case 5124:case 35670:return g4;case 35667:case 35671:return _4;case 35668:case 35672:return v4;case 35669:case 35673:return x4;case 5125:return y4;case 36294:return S4;case 36295:return M4;case 36296:return E4;case 35678:case 36198:case 36298:case 36306:case 35682:return w4;case 35679:case 36299:case 36307:return T4;case 35680:case 36300:case 36308:case 36293:return b4;case 36289:case 36303:case 36311:case 36292:return C4}}function R4(t,e){t.uniform1fv(this.addr,e)}function P4(t,e){const n=ra(e,this.size,2);t.uniform2fv(this.addr,n)}function L4(t,e){const n=ra(e,this.size,3);t.uniform3fv(this.addr,n)}function N4(t,e){const n=ra(e,this.size,4);t.uniform4fv(this.addr,n)}function I4(t,e){const n=ra(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function D4(t,e){const n=ra(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function U4(t,e){const n=ra(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function F4(t,e){t.uniform1iv(this.addr,e)}function O4(t,e){t.uniform2iv(this.addr,e)}function k4(t,e){t.uniform3iv(this.addr,e)}function B4(t,e){t.uniform4iv(this.addr,e)}function z4(t,e){t.uniform1uiv(this.addr,e)}function H4(t,e){t.uniform2uiv(this.addr,e)}function V4(t,e){t.uniform3uiv(this.addr,e)}function G4(t,e){t.uniform4uiv(this.addr,e)}function W4(t,e,n){const i=this.cache,r=e.length,s=Ec(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=vf:a=g1;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function j4(t,e,n){const i=this.cache,r=e.length,s=Ec(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||v1,s[a])}function X4(t,e,n){const i=this.cache,r=e.length,s=Ec(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||x1,s[a])}function $4(t,e,n){const i=this.cache,r=e.length,s=Ec(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||_1,s[a])}function Y4(t){switch(t){case 5126:return R4;case 35664:return P4;case 35665:return L4;case 35666:return N4;case 35674:return I4;case 35675:return D4;case 35676:return U4;case 5124:case 35670:return F4;case 35667:case 35671:return O4;case 35668:case 35672:return k4;case 35669:case 35673:return B4;case 5125:return z4;case 36294:return H4;case 36295:return V4;case 36296:return G4;case 35678:case 36198:case 36298:case 36306:case 35682:return W4;case 35679:case 36299:case 36307:return j4;case 35680:case 36300:case 36308:case 36293:return X4;case 36289:case 36303:case 36311:case 36292:return $4}}class q4{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=A4(n.type)}}class K4{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Y4(n.type)}}class Z4{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Lu=/(\w+)(\])?(\[|\.)?/g;function t0(t,e){t.seq.push(e),t.map[e.id]=e}function Q4(t,e,n){const i=t.name,r=i.length;for(Lu.lastIndex=0;;){const s=Lu.exec(i),a=Lu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){t0(n,c===void 0?new q4(o,t,e):new K4(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new Z4(o),t0(n,f)),n=f}}}class Cl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);Q4(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function n0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const J4=37297;let eR=0;function tR(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const i0=new We;function nR(t){et._getMatrix(i0,et.workingColorSpace,t);const e=`mat3( ${i0.elements.map(n=>n.toFixed(4))} )`;switch(et.getTransfer(t)){case Jl:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function r0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+tR(t.getShaderSource(e),o)}else return s}function iR(t,e){const n=nR(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const rR={[H_]:"Linear",[V_]:"Reinhard",[G_]:"Cineon",[yh]:"ACESFilmic",[j_]:"AgX",[X_]:"Neutral",[W_]:"Custom"};function sR(t,e){const n=rR[e];return n===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const rl=new j;function aR(){et.getLuminanceCoefficients(rl);const t=rl.x.toFixed(4),e=rl.y.toFixed(4),n=rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ta).join(`
`)}function lR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function cR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Ta(t){return t!==""}function s0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function a0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uR=/^[ \t]*#include +<([\w\d./]+)>/gm;function xf(t){return t.replace(uR,fR)}const dR=new Map;function fR(t,e){let n=je[e];if(n===void 0){const i=dR.get(e);if(i!==void 0)n=je[i],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return xf(n)}const hR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function o0(t){return t.replace(hR,pR)}function pR(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function l0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const mR={[Sl]:"SHADOWMAP_TYPE_PCF",[wa]:"SHADOWMAP_TYPE_VSM"};function gR(t){return mR[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _R={[Kr]:"ENVMAP_TYPE_CUBE",[Ys]:"ENVMAP_TYPE_CUBE",[xc]:"ENVMAP_TYPE_CUBE_UV"};function vR(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":_R[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const xR={[Ys]:"ENVMAP_MODE_REFRACTION"};function yR(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":xR[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const SR={[xh]:"ENVMAP_BLENDING_MULTIPLY",[$w]:"ENVMAP_BLENDING_MIX",[Yw]:"ENVMAP_BLENDING_ADD"};function MR(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":SR[t.combine]||"ENVMAP_BLENDING_NONE"}function ER(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function wR(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=gR(n),c=vR(n),h=yR(n),f=MR(n),u=ER(n),p=oR(n),_=lR(s),S=r.createProgram();let g,d,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ta).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ta).join(`
`),d.length>0&&(d+=`
`)):(g=[l0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ta).join(`
`),d=[l0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==mi?"#define TONE_MAPPING":"",n.toneMapping!==mi?je.tonemapping_pars_fragment:"",n.toneMapping!==mi?sR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,iR("linearToOutputTexel",n.outputColorSpace),aR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ta).join(`
`)),a=xf(a),a=s0(a,n),a=a0(a,n),o=xf(o),o=s0(o,n),o=a0(o,n),a=o0(a),o=o0(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",n.glslVersion===_m?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===_m?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=m+g+a,M=m+d+o,b=n0(r,r.VERTEX_SHADER,y),C=n0(r,r.FRAGMENT_SHADER,M);r.attachShader(S,b),r.attachShader(S,C),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function R(I){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(S)||"",U=r.getShaderInfoLog(b)||"",$=r.getShaderInfoLog(C)||"",F=V.trim(),P=U.trim(),O=$.trim();let H=!0,G=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(H=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,b,C);else{const te=r0(r,b,"vertex"),ie=r0(r,C,"fragment");it("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+F+`
`+te+`
`+ie)}else F!==""?ke("WebGLProgram: Program Info Log:",F):(P===""||O==="")&&(G=!1);G&&(I.diagnostics={runnable:H,programLog:F,vertexShader:{log:P,prefix:g},fragmentShader:{log:O,prefix:d}})}r.deleteShader(b),r.deleteShader(C),v=new Cl(r,S),T=cR(r,S)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let W=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=r.getProgramParameter(S,J4)),W},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=eR++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=b,this.fragmentShader=C,this}let TR=0;class bR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new CR(e),n.set(e,i)),i}}class CR{constructor(e){this.id=TR++,this.code=e,this.usedTimes=0}}function AR(t,e,n,i,r,s){const a=new i1,o=new bR,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function S(v,T,W,I,V){const U=I.fog,$=V.geometry,F=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,P=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,O=e.get(v.envMap||F,P),H=O&&O.mapping===xc?O.image.height:null,G=p[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&ke("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const te=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ie=te!==void 0?te.length:0;let ae=0;$.morphAttributes.position!==void 0&&(ae=1),$.morphAttributes.normal!==void 0&&(ae=2),$.morphAttributes.color!==void 0&&(ae=3);let ve,Xe,He,L;if(G){const ot=ci[G];ve=ot.vertexShader,Xe=ot.fragmentShader}else ve=v.vertexShader,Xe=v.fragmentShader,o.update(v),He=o.getVertexShaderID(v),L=o.getFragmentShaderID(v);const Z=t.getRenderTarget(),re=t.state.buffers.depth.getReversed(),we=V.isInstancedMesh===!0,pe=V.isBatchedMesh===!0,Ne=!!v.map,st=!!v.matcap,Oe=!!O,$e=!!v.aoMap,Qe=!!v.lightMap,Ue=!!v.bumpMap,ze=!!v.normalMap,D=!!v.displacementMap,at=!!v.emissiveMap,Fe=!!v.metalnessMap,Je=!!v.roughnessMap,Ee=v.anisotropy>0,A=v.clearcoat>0,x=v.dispersion>0,N=v.iridescence>0,K=v.sheen>0,ee=v.transmission>0,q=Ee&&!!v.anisotropyMap,se=A&&!!v.clearcoatMap,ne=A&&!!v.clearcoatNormalMap,fe=A&&!!v.clearcoatRoughnessMap,Te=N&&!!v.iridescenceMap,oe=N&&!!v.iridescenceThicknessMap,ue=K&&!!v.sheenColorMap,be=K&&!!v.sheenRoughnessMap,Ae=!!v.specularMap,xe=!!v.specularColorMap,Ye=!!v.specularIntensityMap,k=ee&&!!v.transmissionMap,he=ee&&!!v.thicknessMap,de=!!v.gradientMap,Me=!!v.alphaMap,ce=v.alphaTest>0,J=!!v.alphaHash,Ce=!!v.extensions;let Be=mi;v.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Be=t.toneMapping);const pt={shaderID:G,shaderType:v.type,shaderName:v.name,vertexShader:ve,fragmentShader:Xe,defines:v.defines,customVertexShaderID:He,customFragmentShaderID:L,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:pe,batchingColor:pe&&V._colorsTexture!==null,instancing:we,instancingColor:we&&V.instanceColor!==null,instancingMorph:we&&V.morphTexture!==null,outputColorSpace:Z===null?t.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Ks,alphaToCoverage:!!v.alphaToCoverage,map:Ne,matcap:st,envMap:Oe,envMapMode:Oe&&O.mapping,envMapCubeUVHeight:H,aoMap:$e,lightMap:Qe,bumpMap:Ue,normalMap:ze,displacementMap:D,emissiveMap:at,normalMapObjectSpace:ze&&v.normalMapType===Zw,normalMapTangentSpace:ze&&v.normalMapType===Ch,metalnessMap:Fe,roughnessMap:Je,anisotropy:Ee,anisotropyMap:q,clearcoat:A,clearcoatMap:se,clearcoatNormalMap:ne,clearcoatRoughnessMap:fe,dispersion:x,iridescence:N,iridescenceMap:Te,iridescenceThicknessMap:oe,sheen:K,sheenColorMap:ue,sheenRoughnessMap:be,specularMap:Ae,specularColorMap:xe,specularIntensityMap:Ye,transmission:ee,transmissionMap:k,thicknessMap:he,gradientMap:de,opaque:v.transparent===!1&&v.blending===ks&&v.alphaToCoverage===!1,alphaMap:Me,alphaTest:ce,alphaHash:J,combine:v.combine,mapUv:Ne&&_(v.map.channel),aoMapUv:$e&&_(v.aoMap.channel),lightMapUv:Qe&&_(v.lightMap.channel),bumpMapUv:Ue&&_(v.bumpMap.channel),normalMapUv:ze&&_(v.normalMap.channel),displacementMapUv:D&&_(v.displacementMap.channel),emissiveMapUv:at&&_(v.emissiveMap.channel),metalnessMapUv:Fe&&_(v.metalnessMap.channel),roughnessMapUv:Je&&_(v.roughnessMap.channel),anisotropyMapUv:q&&_(v.anisotropyMap.channel),clearcoatMapUv:se&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ne&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:be&&_(v.sheenRoughnessMap.channel),specularMapUv:Ae&&_(v.specularMap.channel),specularColorMapUv:xe&&_(v.specularColorMap.channel),specularIntensityMapUv:Ye&&_(v.specularIntensityMap.channel),transmissionMapUv:k&&_(v.transmissionMap.channel),thicknessMapUv:he&&_(v.thicknessMap.channel),alphaMapUv:Me&&_(v.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(ze||Ee),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!$.attributes.uv&&(Ne||Me),fog:!!U,useFog:v.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||$.attributes.normal===void 0&&ze===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:re,skinning:V.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:ae,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&W.length>0,shadowMapType:t.shadowMap.type,toneMapping:Be,decodeVideoTexture:Ne&&v.map.isVideoTexture===!0&&et.getTransfer(v.map.colorSpace)===lt,decodeVideoTextureEmissive:at&&v.emissiveMap.isVideoTexture===!0&&et.getTransfer(v.emissiveMap.colorSpace)===lt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ai,flipSided:v.side===pn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ce&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&v.extensions.multiDraw===!0||pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return pt.vertexUv1s=l.has(1),pt.vertexUv2s=l.has(2),pt.vertexUv3s=l.has(3),l.clear(),pt}function g(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const W in v.defines)T.push(W),T.push(v.defines[W]);return v.isRawShaderMaterial===!1&&(d(T,v),m(T,v),T.push(t.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function d(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function m(v,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),v.push(a.mask)}function y(v){const T=p[v.type];let W;if(T){const I=ci[T];W=qT.clone(I.uniforms)}else W=v.uniforms;return W}function M(v,T){let W=h.get(T);return W!==void 0?++W.usedTimes:(W=new wR(t,T,v,r),c.push(W),h.set(T,W)),W}function b(v){if(--v.usedTimes===0){const T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function C(v){o.remove(v)}function R(){o.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:y,acquireProgram:M,releaseProgram:b,releaseShaderCache:C,programs:c,dispose:R}}function RR(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function PR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function c0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function u0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,_,S,g,d){let m=t[e];return m===void 0?(m={id:u.id,object:u,geometry:p,material:_,materialVariant:a(u),groupOrder:S,renderOrder:u.renderOrder,z:g,group:d},t[e]=m):(m.id=u.id,m.object=u,m.geometry=p,m.material=_,m.materialVariant=a(u),m.groupOrder=S,m.renderOrder=u.renderOrder,m.z=g,m.group=d),e++,m}function l(u,p,_,S,g,d){const m=o(u,p,_,S,g,d);_.transmission>0?i.push(m):_.transparent===!0?r.push(m):n.push(m)}function c(u,p,_,S,g,d){const m=o(u,p,_,S,g,d);_.transmission>0?i.unshift(m):_.transparent===!0?r.unshift(m):n.unshift(m)}function h(u,p){n.length>1&&n.sort(u||PR),i.length>1&&i.sort(p||c0),r.length>1&&r.sort(p||c0)}function f(){for(let u=e,p=t.length;u<p;u++){const _=t[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:h}}function LR(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new u0,t.set(i,[a])):r>=s.length?(a=new u0,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function NR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new Ge};break;case"SpotLight":n={position:new j,direction:new j,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":n={color:new Ge,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function IR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let DR=0;function UR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function FR(t){const e=new NR,n=IR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new j);const r=new j,s=new Et,a=new Et;function o(c){let h=0,f=0,u=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,_=0,S=0,g=0,d=0,m=0,y=0,M=0,b=0,C=0,R=0;c.sort(UR);for(let T=0,W=c.length;T<W;T++){const I=c[T],V=I.color,U=I.intensity,$=I.distance;let F=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===qs?F=I.shadow.map.texture:F=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=V.r*U,f+=V.g*U,u+=V.b*U;else if(I.isLightProbe){for(let P=0;P<9;P++)i.probe[P].addScaledVector(I.sh.coefficients[P],U);R++}else if(I.isDirectionalLight){const P=e.get(I);if(P.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const O=I.shadow,H=n.get(I);H.shadowIntensity=O.intensity,H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize=O.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=F,i.directionalShadowMatrix[p]=I.shadow.matrix,m++}i.directional[p]=P,p++}else if(I.isSpotLight){const P=e.get(I);P.position.setFromMatrixPosition(I.matrixWorld),P.color.copy(V).multiplyScalar(U),P.distance=$,P.coneCos=Math.cos(I.angle),P.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),P.decay=I.decay,i.spot[S]=P;const O=I.shadow;if(I.map&&(i.spotLightMap[b]=I.map,b++,O.updateMatrices(I),I.castShadow&&C++),i.spotLightMatrix[S]=O.matrix,I.castShadow){const H=n.get(I);H.shadowIntensity=O.intensity,H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize=O.mapSize,i.spotShadow[S]=H,i.spotShadowMap[S]=F,M++}S++}else if(I.isRectAreaLight){const P=e.get(I);P.color.copy(V).multiplyScalar(U),P.halfWidth.set(I.width*.5,0,0),P.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=P,g++}else if(I.isPointLight){const P=e.get(I);if(P.color.copy(I.color).multiplyScalar(I.intensity),P.distance=I.distance,P.decay=I.decay,I.castShadow){const O=I.shadow,H=n.get(I);H.shadowIntensity=O.intensity,H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize=O.mapSize,H.shadowCameraNear=O.camera.near,H.shadowCameraFar=O.camera.far,i.pointShadow[_]=H,i.pointShadowMap[_]=F,i.pointShadowMatrix[_]=I.shadow.matrix,y++}i.point[_]=P,_++}else if(I.isHemisphereLight){const P=e.get(I);P.skyColor.copy(I.color).multiplyScalar(U),P.groundColor.copy(I.groundColor).multiplyScalar(U),i.hemi[d]=P,d++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;const v=i.hash;(v.directionalLength!==p||v.pointLength!==_||v.spotLength!==S||v.rectAreaLength!==g||v.hemiLength!==d||v.numDirectionalShadows!==m||v.numPointShadows!==y||v.numSpotShadows!==M||v.numSpotMaps!==b||v.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=g,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=M+b-C,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,v.directionalLength=p,v.pointLength=_,v.spotLength=S,v.rectAreaLength=g,v.hemiLength=d,v.numDirectionalShadows=m,v.numPointShadows=y,v.numSpotShadows=M,v.numSpotMaps=b,v.numLightProbes=R,i.version=DR++)}function l(c,h){let f=0,u=0,p=0,_=0,S=0;const g=h.matrixWorldInverse;for(let d=0,m=c.length;d<m;d++){const y=c[d];if(y.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),f++}else if(y.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),p++}else if(y.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),a.identity(),s.copy(y.matrixWorld),s.premultiply(g),a.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const M=i.point[u];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){const M=i.hemi[S];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),S++}}}return{setup:o,setupView:l,state:i}}function d0(t){const e=new FR(t),n=[],i=[];function r(h){c.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function a(h){i.push(h)}function o(){e.setup(n)}function l(h){e.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function OR(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new d0(t),e.set(r,[o])):s>=a.length?(o=new d0(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const kR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,zR=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],HR=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],f0=new Et,xa=new j,Nu=new j;function VR(t,e,n){let i=new Nh;const r=new rt,s=new rt,a=new At,o=new eb,l=new tb,c={},h=n.maxTextureSize,f={[vr]:pn,[pn]:vr,[Ai]:Ai},u=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:kR,fragmentShader:BR}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const _=new En;_.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new vn(_,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sl;let d=this.type;this.render=function(C,R,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;this.type===Aw&&(ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Sl);const T=t.getRenderTarget(),W=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),V=t.state;V.setBlending(Ii),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const U=d!==this.type;U&&R.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(F=>F.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,F=C.length;$<F;$++){const P=C[$],O=P.shadow;if(O===void 0){ke("WebGLShadowMap:",P,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const H=O.getFrameExtents();r.multiply(H),s.copy(O.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/H.x),r.x=s.x*H.x,O.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/H.y),r.y=s.y*H.y,O.mapSize.y=s.y));const G=t.state.buffers.depth.getReversed();if(O.camera._reversedDepth=G,O.map===null||U===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===wa){if(P.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new gi(r.x,r.y,{format:qs,type:Bi,minFilter:nn,magFilter:nn,generateMipmaps:!1}),O.map.texture.name=P.name+".shadowMap",O.map.depthTexture=new ro(r.x,r.y,di),O.map.depthTexture.name=P.name+".shadowMapDepth",O.map.depthTexture.format=zi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Xt,O.map.depthTexture.magFilter=Xt}else P.isPointLight?(O.map=new m1(r.x),O.map.depthTexture=new $T(r.x,_i)):(O.map=new gi(r.x,r.y),O.map.depthTexture=new ro(r.x,r.y,_i)),O.map.depthTexture.name=P.name+".shadowMap",O.map.depthTexture.format=zi,this.type===Sl?(O.map.depthTexture.compareFunction=G?Rh:Ah,O.map.depthTexture.minFilter=nn,O.map.depthTexture.magFilter=nn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Xt,O.map.depthTexture.magFilter=Xt);O.camera.updateProjectionMatrix()}const te=O.map.isWebGLCubeRenderTarget?6:1;for(let ie=0;ie<te;ie++){if(O.map.isWebGLCubeRenderTarget)t.setRenderTarget(O.map,ie),t.clear();else{ie===0&&(t.setRenderTarget(O.map),t.clear());const ae=O.getViewport(ie);a.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),V.viewport(a)}if(P.isPointLight){const ae=O.camera,ve=O.matrix,Xe=P.distance||ae.far;Xe!==ae.far&&(ae.far=Xe,ae.updateProjectionMatrix()),xa.setFromMatrixPosition(P.matrixWorld),ae.position.copy(xa),Nu.copy(ae.position),Nu.add(zR[ie]),ae.up.copy(HR[ie]),ae.lookAt(Nu),ae.updateMatrixWorld(),ve.makeTranslation(-xa.x,-xa.y,-xa.z),f0.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),O._frustum.setFromProjectionMatrix(f0,ae.coordinateSystem,ae.reversedDepth)}else O.updateMatrices(P);i=O.getFrustum(),M(R,v,O.camera,P,this.type)}O.isPointLightShadow!==!0&&this.type===wa&&m(O,v),O.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(T,W,I)};function m(C,R){const v=e.update(S);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new gi(r.x,r.y,{format:qs,type:Bi})),u.uniforms.shadow_pass.value=C.map.depthTexture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(R,null,v,u,S,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(R,null,v,p,S,null)}function y(C,R,v,T){let W=null;const I=v.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)W=I;else if(W=v.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const V=W.uuid,U=R.uuid;let $=c[V];$===void 0&&($={},c[V]=$);let F=$[U];F===void 0&&(F=W.clone(),$[U]=F,R.addEventListener("dispose",b)),W=F}if(W.visible=R.visible,W.wireframe=R.wireframe,T===wa?W.side=R.shadowSide!==null?R.shadowSide:R.side:W.side=R.shadowSide!==null?R.shadowSide:f[R.side],W.alphaMap=R.alphaMap,W.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,W.map=R.map,W.clipShadows=R.clipShadows,W.clippingPlanes=R.clippingPlanes,W.clipIntersection=R.clipIntersection,W.displacementMap=R.displacementMap,W.displacementScale=R.displacementScale,W.displacementBias=R.displacementBias,W.wireframeLinewidth=R.wireframeLinewidth,W.linewidth=R.linewidth,v.isPointLight===!0&&W.isMeshDistanceMaterial===!0){const V=t.properties.get(W);V.light=v}return W}function M(C,R,v,T,W){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&W===wa)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,C.matrixWorld);const U=e.update(C),$=C.material;if(Array.isArray($)){const F=U.groups;for(let P=0,O=F.length;P<O;P++){const H=F[P],G=$[H.materialIndex];if(G&&G.visible){const te=y(C,G,T,W);C.onBeforeShadow(t,C,R,v,U,te,H),t.renderBufferDirect(v,null,U,te,C,H),C.onAfterShadow(t,C,R,v,U,te,H)}}}else if($.visible){const F=y(C,$,T,W);C.onBeforeShadow(t,C,R,v,U,F,null),t.renderBufferDirect(v,null,U,F,C,null),C.onAfterShadow(t,C,R,v,U,F,null)}}const V=C.children;for(let U=0,$=V.length;U<$;U++)M(V[U],R,v,T,W)}function b(C){C.target.removeEventListener("dispose",b);for(const v in c){const T=c[v],W=C.target.uuid;W in T&&(T[W].dispose(),delete T[W])}}}function GR(t,e){function n(){let k=!1;const he=new At;let de=null;const Me=new At(0,0,0,0);return{setMask:function(ce){de!==ce&&!k&&(t.colorMask(ce,ce,ce,ce),de=ce)},setLocked:function(ce){k=ce},setClear:function(ce,J,Ce,Be,pt){pt===!0&&(ce*=Be,J*=Be,Ce*=Be),he.set(ce,J,Ce,Be),Me.equals(he)===!1&&(t.clearColor(ce,J,Ce,Be),Me.copy(he))},reset:function(){k=!1,de=null,Me.set(-1,0,0,0)}}}function i(){let k=!1,he=!1,de=null,Me=null,ce=null;return{setReversed:function(J){if(he!==J){const Ce=e.get("EXT_clip_control");J?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),he=J;const Be=ce;ce=null,this.setClear(Be)}},getReversed:function(){return he},setTest:function(J){J?Z(t.DEPTH_TEST):re(t.DEPTH_TEST)},setMask:function(J){de!==J&&!k&&(t.depthMask(J),de=J)},setFunc:function(J){if(he&&(J=oT[J]),Me!==J){switch(J){case Rd:t.depthFunc(t.NEVER);break;case Pd:t.depthFunc(t.ALWAYS);break;case Ld:t.depthFunc(t.LESS);break;case $s:t.depthFunc(t.LEQUAL);break;case Nd:t.depthFunc(t.EQUAL);break;case Id:t.depthFunc(t.GEQUAL);break;case Dd:t.depthFunc(t.GREATER);break;case Ud:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Me=J}},setLocked:function(J){k=J},setClear:function(J){ce!==J&&(ce=J,he&&(J=1-J),t.clearDepth(J))},reset:function(){k=!1,de=null,Me=null,ce=null,he=!1}}}function r(){let k=!1,he=null,de=null,Me=null,ce=null,J=null,Ce=null,Be=null,pt=null;return{setTest:function(ot){k||(ot?Z(t.STENCIL_TEST):re(t.STENCIL_TEST))},setMask:function(ot){he!==ot&&!k&&(t.stencilMask(ot),he=ot)},setFunc:function(ot,xi,yi){(de!==ot||Me!==xi||ce!==yi)&&(t.stencilFunc(ot,xi,yi),de=ot,Me=xi,ce=yi)},setOp:function(ot,xi,yi){(J!==ot||Ce!==xi||Be!==yi)&&(t.stencilOp(ot,xi,yi),J=ot,Ce=xi,Be=yi)},setLocked:function(ot){k=ot},setClear:function(ot){pt!==ot&&(t.clearStencil(ot),pt=ot)},reset:function(){k=!1,he=null,de=null,Me=null,ce=null,J=null,Ce=null,Be=null,pt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let h={},f={},u=new WeakMap,p=[],_=null,S=!1,g=null,d=null,m=null,y=null,M=null,b=null,C=null,R=new Ge(0,0,0),v=0,T=!1,W=null,I=null,V=null,U=null,$=null;const F=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,O=0;const H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(H)[1]),P=O>=1):H.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),P=O>=2);let G=null,te={};const ie=t.getParameter(t.SCISSOR_BOX),ae=t.getParameter(t.VIEWPORT),ve=new At().fromArray(ie),Xe=new At().fromArray(ae);function He(k,he,de,Me){const ce=new Uint8Array(4),J=t.createTexture();t.bindTexture(k,J),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ce=0;Ce<de;Ce++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,Me,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(he+Ce,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return J}const L={};L[t.TEXTURE_2D]=He(t.TEXTURE_2D,t.TEXTURE_2D,1),L[t.TEXTURE_CUBE_MAP]=He(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),L[t.TEXTURE_2D_ARRAY]=He(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),L[t.TEXTURE_3D]=He(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(t.DEPTH_TEST),a.setFunc($s),Ue(!1),ze(fm),Z(t.CULL_FACE),$e(Ii);function Z(k){h[k]!==!0&&(t.enable(k),h[k]=!0)}function re(k){h[k]!==!1&&(t.disable(k),h[k]=!1)}function we(k,he){return f[k]!==he?(t.bindFramebuffer(k,he),f[k]=he,k===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=he),k===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=he),!0):!1}function pe(k,he){let de=p,Me=!1;if(k){de=u.get(he),de===void 0&&(de=[],u.set(he,de));const ce=k.textures;if(de.length!==ce.length||de[0]!==t.COLOR_ATTACHMENT0){for(let J=0,Ce=ce.length;J<Ce;J++)de[J]=t.COLOR_ATTACHMENT0+J;de.length=ce.length,Me=!0}}else de[0]!==t.BACK&&(de[0]=t.BACK,Me=!0);Me&&t.drawBuffers(de)}function Ne(k){return _!==k?(t.useProgram(k),_=k,!0):!1}const st={[Ur]:t.FUNC_ADD,[Pw]:t.FUNC_SUBTRACT,[Lw]:t.FUNC_REVERSE_SUBTRACT};st[Nw]=t.MIN,st[Iw]=t.MAX;const Oe={[Dw]:t.ZERO,[Uw]:t.ONE,[Fw]:t.SRC_COLOR,[Cd]:t.SRC_ALPHA,[Vw]:t.SRC_ALPHA_SATURATE,[zw]:t.DST_COLOR,[kw]:t.DST_ALPHA,[Ow]:t.ONE_MINUS_SRC_COLOR,[Ad]:t.ONE_MINUS_SRC_ALPHA,[Hw]:t.ONE_MINUS_DST_COLOR,[Bw]:t.ONE_MINUS_DST_ALPHA,[Gw]:t.CONSTANT_COLOR,[Ww]:t.ONE_MINUS_CONSTANT_COLOR,[jw]:t.CONSTANT_ALPHA,[Xw]:t.ONE_MINUS_CONSTANT_ALPHA};function $e(k,he,de,Me,ce,J,Ce,Be,pt,ot){if(k===Ii){S===!0&&(re(t.BLEND),S=!1);return}if(S===!1&&(Z(t.BLEND),S=!0),k!==Rw){if(k!==g||ot!==T){if((d!==Ur||M!==Ur)&&(t.blendEquation(t.FUNC_ADD),d=Ur,M=Ur),ot)switch(k){case ks:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dr:t.blendFunc(t.ONE,t.ONE);break;case hm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case pm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:it("WebGLState: Invalid blending: ",k);break}else switch(k){case ks:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case hm:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pm:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",k);break}m=null,y=null,b=null,C=null,R.set(0,0,0),v=0,g=k,T=ot}return}ce=ce||he,J=J||de,Ce=Ce||Me,(he!==d||ce!==M)&&(t.blendEquationSeparate(st[he],st[ce]),d=he,M=ce),(de!==m||Me!==y||J!==b||Ce!==C)&&(t.blendFuncSeparate(Oe[de],Oe[Me],Oe[J],Oe[Ce]),m=de,y=Me,b=J,C=Ce),(Be.equals(R)===!1||pt!==v)&&(t.blendColor(Be.r,Be.g,Be.b,pt),R.copy(Be),v=pt),g=k,T=!1}function Qe(k,he){k.side===Ai?re(t.CULL_FACE):Z(t.CULL_FACE);let de=k.side===pn;he&&(de=!de),Ue(de),k.blending===ks&&k.transparent===!1?$e(Ii):$e(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),s.setMask(k.colorWrite);const Me=k.stencilWrite;o.setTest(Me),Me&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),at(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Z(t.SAMPLE_ALPHA_TO_COVERAGE):re(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(k){W!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),W=k)}function ze(k){k!==bw?(Z(t.CULL_FACE),k!==I&&(k===fm?t.cullFace(t.BACK):k===Cw?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):re(t.CULL_FACE),I=k}function D(k){k!==V&&(P&&t.lineWidth(k),V=k)}function at(k,he,de){k?(Z(t.POLYGON_OFFSET_FILL),(U!==he||$!==de)&&(U=he,$=de,a.getReversed()&&(he=-he),t.polygonOffset(he,de))):re(t.POLYGON_OFFSET_FILL)}function Fe(k){k?Z(t.SCISSOR_TEST):re(t.SCISSOR_TEST)}function Je(k){k===void 0&&(k=t.TEXTURE0+F-1),G!==k&&(t.activeTexture(k),G=k)}function Ee(k,he,de){de===void 0&&(G===null?de=t.TEXTURE0+F-1:de=G);let Me=te[de];Me===void 0&&(Me={type:void 0,texture:void 0},te[de]=Me),(Me.type!==k||Me.texture!==he)&&(G!==de&&(t.activeTexture(de),G=de),t.bindTexture(k,he||L[k]),Me.type=k,Me.texture=he)}function A(){const k=te[G];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function x(){try{t.compressedTexImage2D(...arguments)}catch(k){it("WebGLState:",k)}}function N(){try{t.compressedTexImage3D(...arguments)}catch(k){it("WebGLState:",k)}}function K(){try{t.texSubImage2D(...arguments)}catch(k){it("WebGLState:",k)}}function ee(){try{t.texSubImage3D(...arguments)}catch(k){it("WebGLState:",k)}}function q(){try{t.compressedTexSubImage2D(...arguments)}catch(k){it("WebGLState:",k)}}function se(){try{t.compressedTexSubImage3D(...arguments)}catch(k){it("WebGLState:",k)}}function ne(){try{t.texStorage2D(...arguments)}catch(k){it("WebGLState:",k)}}function fe(){try{t.texStorage3D(...arguments)}catch(k){it("WebGLState:",k)}}function Te(){try{t.texImage2D(...arguments)}catch(k){it("WebGLState:",k)}}function oe(){try{t.texImage3D(...arguments)}catch(k){it("WebGLState:",k)}}function ue(k){ve.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),ve.copy(k))}function be(k){Xe.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),Xe.copy(k))}function Ae(k,he){let de=c.get(he);de===void 0&&(de=new WeakMap,c.set(he,de));let Me=de.get(k);Me===void 0&&(Me=t.getUniformBlockIndex(he,k.name),de.set(k,Me))}function xe(k,he){const Me=c.get(he).get(k);l.get(he)!==Me&&(t.uniformBlockBinding(he,Me,k.__bindingPointIndex),l.set(he,Me))}function Ye(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},G=null,te={},f={},u=new WeakMap,p=[],_=null,S=!1,g=null,d=null,m=null,y=null,M=null,b=null,C=null,R=new Ge(0,0,0),v=0,T=!1,W=null,I=null,V=null,U=null,$=null,ve.set(0,0,t.canvas.width,t.canvas.height),Xe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Z,disable:re,bindFramebuffer:we,drawBuffers:pe,useProgram:Ne,setBlending:$e,setMaterial:Qe,setFlipSided:Ue,setCullFace:ze,setLineWidth:D,setPolygonOffset:at,setScissorTest:Fe,activeTexture:Je,bindTexture:Ee,unbindTexture:A,compressedTexImage2D:x,compressedTexImage3D:N,texImage2D:Te,texImage3D:oe,updateUBOMapping:Ae,uniformBlockBinding:xe,texStorage2D:ne,texStorage3D:fe,texSubImage2D:K,texSubImage3D:ee,compressedTexSubImage2D:q,compressedTexSubImage3D:se,scissor:ue,viewport:be,reset:Ye}}function WR(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,h=new WeakMap;let f;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,x){return p?new OffscreenCanvas(A,x):ec("canvas")}function S(A,x,N){let K=1;const ee=Ee(A);if((ee.width>N||ee.height>N)&&(K=N/Math.max(ee.width,ee.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const q=Math.floor(K*ee.width),se=Math.floor(K*ee.height);f===void 0&&(f=_(q,se));const ne=x?_(q,se):f;return ne.width=q,ne.height=se,ne.getContext("2d").drawImage(A,0,0,q,se),ke("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+q+"x"+se+")."),ne}else return"data"in A&&ke("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),A;return A}function g(A){return A.generateMipmaps}function d(A){t.generateMipmap(A)}function m(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(A,x,N,K,ee=!1){if(A!==null){if(t[A]!==void 0)return t[A];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=x;if(x===t.RED&&(N===t.FLOAT&&(q=t.R32F),N===t.HALF_FLOAT&&(q=t.R16F),N===t.UNSIGNED_BYTE&&(q=t.R8)),x===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(q=t.R8UI),N===t.UNSIGNED_SHORT&&(q=t.R16UI),N===t.UNSIGNED_INT&&(q=t.R32UI),N===t.BYTE&&(q=t.R8I),N===t.SHORT&&(q=t.R16I),N===t.INT&&(q=t.R32I)),x===t.RG&&(N===t.FLOAT&&(q=t.RG32F),N===t.HALF_FLOAT&&(q=t.RG16F),N===t.UNSIGNED_BYTE&&(q=t.RG8)),x===t.RG_INTEGER&&(N===t.UNSIGNED_BYTE&&(q=t.RG8UI),N===t.UNSIGNED_SHORT&&(q=t.RG16UI),N===t.UNSIGNED_INT&&(q=t.RG32UI),N===t.BYTE&&(q=t.RG8I),N===t.SHORT&&(q=t.RG16I),N===t.INT&&(q=t.RG32I)),x===t.RGB_INTEGER&&(N===t.UNSIGNED_BYTE&&(q=t.RGB8UI),N===t.UNSIGNED_SHORT&&(q=t.RGB16UI),N===t.UNSIGNED_INT&&(q=t.RGB32UI),N===t.BYTE&&(q=t.RGB8I),N===t.SHORT&&(q=t.RGB16I),N===t.INT&&(q=t.RGB32I)),x===t.RGBA_INTEGER&&(N===t.UNSIGNED_BYTE&&(q=t.RGBA8UI),N===t.UNSIGNED_SHORT&&(q=t.RGBA16UI),N===t.UNSIGNED_INT&&(q=t.RGBA32UI),N===t.BYTE&&(q=t.RGBA8I),N===t.SHORT&&(q=t.RGBA16I),N===t.INT&&(q=t.RGBA32I)),x===t.RGB&&(N===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),N===t.UNSIGNED_INT_10F_11F_11F_REV&&(q=t.R11F_G11F_B10F)),x===t.RGBA){const se=ee?Jl:et.getTransfer(K);N===t.FLOAT&&(q=t.RGBA32F),N===t.HALF_FLOAT&&(q=t.RGBA16F),N===t.UNSIGNED_BYTE&&(q=se===lt?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function M(A,x){let N;return A?x===null||x===_i||x===to?N=t.DEPTH24_STENCIL8:x===di?N=t.DEPTH32F_STENCIL8:x===eo&&(N=t.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===_i||x===to?N=t.DEPTH_COMPONENT24:x===di?N=t.DEPTH_COMPONENT32F:x===eo&&(N=t.DEPTH_COMPONENT16),N}function b(A,x){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==Xt&&A.minFilter!==nn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function C(A){const x=A.target;x.removeEventListener("dispose",C),v(x),x.isVideoTexture&&h.delete(x)}function R(A){const x=A.target;x.removeEventListener("dispose",R),W(x)}function v(A){const x=i.get(A);if(x.__webglInit===void 0)return;const N=A.source,K=u.get(N);if(K){const ee=K[x.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&T(A),Object.keys(K).length===0&&u.delete(N)}i.remove(A)}function T(A){const x=i.get(A);t.deleteTexture(x.__webglTexture);const N=A.source,K=u.get(N);delete K[x.__cacheKey],a.memory.textures--}function W(A){const x=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let ee=0;ee<x.__webglFramebuffer[K].length;ee++)t.deleteFramebuffer(x.__webglFramebuffer[K][ee]);else t.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)t.deleteFramebuffer(x.__webglFramebuffer[K]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const N=A.textures;for(let K=0,ee=N.length;K<ee;K++){const q=i.get(N[K]);q.__webglTexture&&(t.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(N[K])}i.remove(A)}let I=0;function V(){I=0}function U(){const A=I;return A>=r.maxTextures&&ke("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),I+=1,A}function $(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function F(A,x){const N=i.get(A);if(A.isVideoTexture&&Fe(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&N.__version!==A.version){const K=A.image;if(K===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{L(N,A,x);return}}else A.isExternalTexture&&(N.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+x)}function P(A,x){const N=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){L(N,A,x);return}else A.isExternalTexture&&(N.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+x)}function O(A,x){const N=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){L(N,A,x);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+x)}function H(A,x){const N=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&N.__version!==A.version){Z(N,A,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+x)}const G={[Fd]:t.REPEAT,[Li]:t.CLAMP_TO_EDGE,[Od]:t.MIRRORED_REPEAT},te={[Xt]:t.NEAREST,[qw]:t.NEAREST_MIPMAP_NEAREST,[Do]:t.NEAREST_MIPMAP_LINEAR,[nn]:t.LINEAR,[nu]:t.LINEAR_MIPMAP_NEAREST,[Hr]:t.LINEAR_MIPMAP_LINEAR},ie={[Qw]:t.NEVER,[iT]:t.ALWAYS,[Jw]:t.LESS,[Ah]:t.LEQUAL,[eT]:t.EQUAL,[Rh]:t.GEQUAL,[tT]:t.GREATER,[nT]:t.NOTEQUAL};function ae(A,x){if(x.type===di&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===nn||x.magFilter===nu||x.magFilter===Do||x.magFilter===Hr||x.minFilter===nn||x.minFilter===nu||x.minFilter===Do||x.minFilter===Hr)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,G[x.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,G[x.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,G[x.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,te[x.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,te[x.minFilter]),x.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,ie[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Xt||x.minFilter!==Do&&x.minFilter!==Hr||x.type===di&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ve(A,x){let N=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",C));const K=x.source;let ee=u.get(K);ee===void 0&&(ee={},u.set(K,ee));const q=$(x);if(q!==A.__cacheKey){ee[q]===void 0&&(ee[q]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,N=!0),ee[q].usedTimes++;const se=ee[A.__cacheKey];se!==void 0&&(ee[A.__cacheKey].usedTimes--,se.usedTimes===0&&T(x)),A.__cacheKey=q,A.__webglTexture=ee[q].texture}return N}function Xe(A,x,N){return Math.floor(Math.floor(A/N)/x)}function He(A,x,N,K){const q=A.updateRanges;if(q.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,N,K,x.data);else{q.sort((oe,ue)=>oe.start-ue.start);let se=0;for(let oe=1;oe<q.length;oe++){const ue=q[se],be=q[oe],Ae=ue.start+ue.count,xe=Xe(be.start,x.width,4),Ye=Xe(ue.start,x.width,4);be.start<=Ae+1&&xe===Ye&&Xe(be.start+be.count-1,x.width,4)===xe?ue.count=Math.max(ue.count,be.start+be.count-ue.start):(++se,q[se]=be)}q.length=se+1;const ne=t.getParameter(t.UNPACK_ROW_LENGTH),fe=t.getParameter(t.UNPACK_SKIP_PIXELS),Te=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let oe=0,ue=q.length;oe<ue;oe++){const be=q[oe],Ae=Math.floor(be.start/4),xe=Math.ceil(be.count/4),Ye=Ae%x.width,k=Math.floor(Ae/x.width),he=xe,de=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ye),t.pixelStorei(t.UNPACK_SKIP_ROWS,k),n.texSubImage2D(t.TEXTURE_2D,0,Ye,k,he,de,N,K,x.data)}A.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ne),t.pixelStorei(t.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(t.UNPACK_SKIP_ROWS,Te)}}function L(A,x,N){let K=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=t.TEXTURE_3D);const ee=ve(A,x),q=x.source;n.bindTexture(K,A.__webglTexture,t.TEXTURE0+N);const se=i.get(q);if(q.version!==se.__version||ee===!0){n.activeTexture(t.TEXTURE0+N);const ne=et.getPrimaries(et.workingColorSpace),fe=x.colorSpace===tr?null:et.getPrimaries(x.colorSpace),Te=x.colorSpace===tr||ne===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let oe=S(x.image,!1,r.maxTextureSize);oe=Je(x,oe);const ue=s.convert(x.format,x.colorSpace),be=s.convert(x.type);let Ae=y(x.internalFormat,ue,be,x.colorSpace,x.isVideoTexture);ae(K,x);let xe;const Ye=x.mipmaps,k=x.isVideoTexture!==!0,he=se.__version===void 0||ee===!0,de=q.dataReady,Me=b(x,oe);if(x.isDepthTexture)Ae=M(x.format===Vr,x.type),he&&(k?n.texStorage2D(t.TEXTURE_2D,1,Ae,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,Ae,oe.width,oe.height,0,ue,be,null));else if(x.isDataTexture)if(Ye.length>0){k&&he&&n.texStorage2D(t.TEXTURE_2D,Me,Ae,Ye[0].width,Ye[0].height);for(let ce=0,J=Ye.length;ce<J;ce++)xe=Ye[ce],k?de&&n.texSubImage2D(t.TEXTURE_2D,ce,0,0,xe.width,xe.height,ue,be,xe.data):n.texImage2D(t.TEXTURE_2D,ce,Ae,xe.width,xe.height,0,ue,be,xe.data);x.generateMipmaps=!1}else k?(he&&n.texStorage2D(t.TEXTURE_2D,Me,Ae,oe.width,oe.height),de&&He(x,oe,ue,be)):n.texImage2D(t.TEXTURE_2D,0,Ae,oe.width,oe.height,0,ue,be,oe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){k&&he&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Me,Ae,Ye[0].width,Ye[0].height,oe.depth);for(let ce=0,J=Ye.length;ce<J;ce++)if(xe=Ye[ce],x.format!==Jn)if(ue!==null)if(k){if(de)if(x.layerUpdates.size>0){const Ce=Gm(xe.width,xe.height,x.format,x.type);for(const Be of x.layerUpdates){const pt=xe.data.subarray(Be*Ce/xe.data.BYTES_PER_ELEMENT,(Be+1)*Ce/xe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,Be,xe.width,xe.height,1,ue,pt)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,0,xe.width,xe.height,oe.depth,ue,xe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ce,Ae,xe.width,xe.height,oe.depth,0,xe.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?de&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,0,xe.width,xe.height,oe.depth,ue,be,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ce,Ae,xe.width,xe.height,oe.depth,0,ue,be,xe.data)}else{k&&he&&n.texStorage2D(t.TEXTURE_2D,Me,Ae,Ye[0].width,Ye[0].height);for(let ce=0,J=Ye.length;ce<J;ce++)xe=Ye[ce],x.format!==Jn?ue!==null?k?de&&n.compressedTexSubImage2D(t.TEXTURE_2D,ce,0,0,xe.width,xe.height,ue,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,ce,Ae,xe.width,xe.height,0,xe.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?de&&n.texSubImage2D(t.TEXTURE_2D,ce,0,0,xe.width,xe.height,ue,be,xe.data):n.texImage2D(t.TEXTURE_2D,ce,Ae,xe.width,xe.height,0,ue,be,xe.data)}else if(x.isDataArrayTexture)if(k){if(he&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Me,Ae,oe.width,oe.height,oe.depth),de)if(x.layerUpdates.size>0){const ce=Gm(oe.width,oe.height,x.format,x.type);for(const J of x.layerUpdates){const Ce=oe.data.subarray(J*ce/oe.data.BYTES_PER_ELEMENT,(J+1)*ce/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,J,oe.width,oe.height,1,ue,be,Ce)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ue,be,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ae,oe.width,oe.height,oe.depth,0,ue,be,oe.data);else if(x.isData3DTexture)k?(he&&n.texStorage3D(t.TEXTURE_3D,Me,Ae,oe.width,oe.height,oe.depth),de&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ue,be,oe.data)):n.texImage3D(t.TEXTURE_3D,0,Ae,oe.width,oe.height,oe.depth,0,ue,be,oe.data);else if(x.isFramebufferTexture){if(he)if(k)n.texStorage2D(t.TEXTURE_2D,Me,Ae,oe.width,oe.height);else{let ce=oe.width,J=oe.height;for(let Ce=0;Ce<Me;Ce++)n.texImage2D(t.TEXTURE_2D,Ce,Ae,ce,J,0,ue,be,null),ce>>=1,J>>=1}}else if(Ye.length>0){if(k&&he){const ce=Ee(Ye[0]);n.texStorage2D(t.TEXTURE_2D,Me,Ae,ce.width,ce.height)}for(let ce=0,J=Ye.length;ce<J;ce++)xe=Ye[ce],k?de&&n.texSubImage2D(t.TEXTURE_2D,ce,0,0,ue,be,xe):n.texImage2D(t.TEXTURE_2D,ce,Ae,ue,be,xe);x.generateMipmaps=!1}else if(k){if(he){const ce=Ee(oe);n.texStorage2D(t.TEXTURE_2D,Me,Ae,ce.width,ce.height)}de&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue,be,oe)}else n.texImage2D(t.TEXTURE_2D,0,Ae,ue,be,oe);g(x)&&d(K),se.__version=q.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Z(A,x,N){if(x.image.length!==6)return;const K=ve(A,x),ee=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+N);const q=i.get(ee);if(ee.version!==q.__version||K===!0){n.activeTexture(t.TEXTURE0+N);const se=et.getPrimaries(et.workingColorSpace),ne=x.colorSpace===tr?null:et.getPrimaries(x.colorSpace),fe=x.colorSpace===tr||se===ne?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Te=x.isCompressedTexture||x.image[0].isCompressedTexture,oe=x.image[0]&&x.image[0].isDataTexture,ue=[];for(let J=0;J<6;J++)!Te&&!oe?ue[J]=S(x.image[J],!0,r.maxCubemapSize):ue[J]=oe?x.image[J].image:x.image[J],ue[J]=Je(x,ue[J]);const be=ue[0],Ae=s.convert(x.format,x.colorSpace),xe=s.convert(x.type),Ye=y(x.internalFormat,Ae,xe,x.colorSpace),k=x.isVideoTexture!==!0,he=q.__version===void 0||K===!0,de=ee.dataReady;let Me=b(x,be);ae(t.TEXTURE_CUBE_MAP,x);let ce;if(Te){k&&he&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Me,Ye,be.width,be.height);for(let J=0;J<6;J++){ce=ue[J].mipmaps;for(let Ce=0;Ce<ce.length;Ce++){const Be=ce[Ce];x.format!==Jn?Ae!==null?k?de&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ce,0,0,Be.width,Be.height,Ae,Be.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ce,Ye,Be.width,Be.height,0,Be.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ce,0,0,Be.width,Be.height,Ae,xe,Be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ce,Ye,Be.width,Be.height,0,Ae,xe,Be.data)}}}else{if(ce=x.mipmaps,k&&he){ce.length>0&&Me++;const J=Ee(ue[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Me,Ye,J.width,J.height)}for(let J=0;J<6;J++)if(oe){k?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ue[J].width,ue[J].height,Ae,xe,ue[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ye,ue[J].width,ue[J].height,0,Ae,xe,ue[J].data);for(let Ce=0;Ce<ce.length;Ce++){const pt=ce[Ce].image[J].image;k?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ce+1,0,0,pt.width,pt.height,Ae,xe,pt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ce+1,Ye,pt.width,pt.height,0,Ae,xe,pt.data)}}else{k?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ae,xe,ue[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ye,Ae,xe,ue[J]);for(let Ce=0;Ce<ce.length;Ce++){const Be=ce[Ce];k?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ce+1,0,0,Ae,xe,Be.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ce+1,Ye,Ae,xe,Be.image[J])}}}g(x)&&d(t.TEXTURE_CUBE_MAP),q.__version=ee.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function re(A,x,N,K,ee,q){const se=s.convert(N.format,N.colorSpace),ne=s.convert(N.type),fe=y(N.internalFormat,se,ne,N.colorSpace),Te=i.get(x),oe=i.get(N);if(oe.__renderTarget=x,!Te.__hasExternalTextures){const ue=Math.max(1,x.width>>q),be=Math.max(1,x.height>>q);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,q,fe,ue,be,x.depth,0,se,ne,null):n.texImage2D(ee,q,fe,ue,be,0,se,ne,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),at(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,ee,oe.__webglTexture,0,D(x)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,ee,oe.__webglTexture,q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function we(A,x,N){if(t.bindRenderbuffer(t.RENDERBUFFER,A),x.depthBuffer){const K=x.depthTexture,ee=K&&K.isDepthTexture?K.type:null,q=M(x.stencilBuffer,ee),se=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;at(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,D(x),q,x.width,x.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,D(x),q,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,q,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,A)}else{const K=x.textures;for(let ee=0;ee<K.length;ee++){const q=K[ee],se=s.convert(q.format,q.colorSpace),ne=s.convert(q.type),fe=y(q.internalFormat,se,ne,q.colorSpace);at(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,D(x),fe,x.width,x.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,D(x),fe,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,fe,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function pe(A,x,N){const K=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(x.depthTexture);if(ee.__renderTarget=x,(!ee.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,x.depthTexture.addEventListener("dispose",C)),ee.__webglTexture===void 0){ee.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),ae(t.TEXTURE_CUBE_MAP,x.depthTexture);const Te=s.convert(x.depthTexture.format),oe=s.convert(x.depthTexture.type);let ue;x.depthTexture.format===zi?ue=t.DEPTH_COMPONENT24:x.depthTexture.format===Vr&&(ue=t.DEPTH24_STENCIL8);for(let be=0;be<6;be++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ue,x.width,x.height,0,Te,oe,null)}}else F(x.depthTexture,0);const q=ee.__webglTexture,se=D(x),ne=K?t.TEXTURE_CUBE_MAP_POSITIVE_X+N:t.TEXTURE_2D,fe=x.depthTexture.format===Vr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(x.depthTexture.format===zi)at(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,fe,ne,q,0,se):t.framebufferTexture2D(t.FRAMEBUFFER,fe,ne,q,0);else if(x.depthTexture.format===Vr)at(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,fe,ne,q,0,se):t.framebufferTexture2D(t.FRAMEBUFFER,fe,ne,q,0);else throw new Error("Unknown depthTexture format")}function Ne(A){const x=i.get(A),N=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const K=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const ee=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",ee)};K.addEventListener("dispose",ee),x.__depthDisposeCallback=ee}x.__boundDepthTexture=K}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(N)for(let K=0;K<6;K++)pe(x.__webglFramebuffer[K],A,K);else{const K=A.texture.mipmaps;K&&K.length>0?pe(x.__webglFramebuffer[0],A,0):pe(x.__webglFramebuffer,A,0)}else if(N){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=t.createRenderbuffer(),we(x.__webglDepthbuffer[K],A,!1);else{const ee=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,q)}}else{const K=A.texture.mipmaps;if(K&&K.length>0?n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),we(x.__webglDepthbuffer,A,!1);else{const ee=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,q)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function st(A,x,N){const K=i.get(A);x!==void 0&&re(K.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&Ne(A)}function Oe(A){const x=A.texture,N=i.get(A),K=i.get(x);A.addEventListener("dispose",R);const ee=A.textures,q=A.isWebGLCubeRenderTarget===!0,se=ee.length>1;if(se||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=x.version,a.memory.textures++),q){N.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[ne]=[];for(let fe=0;fe<x.mipmaps.length;fe++)N.__webglFramebuffer[ne][fe]=t.createFramebuffer()}else N.__webglFramebuffer[ne]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let ne=0;ne<x.mipmaps.length;ne++)N.__webglFramebuffer[ne]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(se)for(let ne=0,fe=ee.length;ne<fe;ne++){const Te=i.get(ee[ne]);Te.__webglTexture===void 0&&(Te.__webglTexture=t.createTexture(),a.memory.textures++)}if(A.samples>0&&at(A)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ne=0;ne<ee.length;ne++){const fe=ee[ne];N.__webglColorRenderbuffer[ne]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[ne]);const Te=s.convert(fe.format,fe.colorSpace),oe=s.convert(fe.type),ue=y(fe.internalFormat,Te,oe,fe.colorSpace,A.isXRRenderTarget===!0),be=D(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,be,ue,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ne,t.RENDERBUFFER,N.__webglColorRenderbuffer[ne])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),we(N.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(q){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),ae(t.TEXTURE_CUBE_MAP,x);for(let ne=0;ne<6;ne++)if(x.mipmaps&&x.mipmaps.length>0)for(let fe=0;fe<x.mipmaps.length;fe++)re(N.__webglFramebuffer[ne][fe],A,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,fe);else re(N.__webglFramebuffer[ne],A,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);g(x)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(se){for(let ne=0,fe=ee.length;ne<fe;ne++){const Te=ee[ne],oe=i.get(Te);let ue=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ue=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,oe.__webglTexture),ae(ue,Te),re(N.__webglFramebuffer,A,Te,t.COLOR_ATTACHMENT0+ne,ue,0),g(Te)&&d(ue)}n.unbindTexture()}else{let ne=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ne=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ne,K.__webglTexture),ae(ne,x),x.mipmaps&&x.mipmaps.length>0)for(let fe=0;fe<x.mipmaps.length;fe++)re(N.__webglFramebuffer[fe],A,x,t.COLOR_ATTACHMENT0,ne,fe);else re(N.__webglFramebuffer,A,x,t.COLOR_ATTACHMENT0,ne,0);g(x)&&d(ne),n.unbindTexture()}A.depthBuffer&&Ne(A)}function $e(A){const x=A.textures;for(let N=0,K=x.length;N<K;N++){const ee=x[N];if(g(ee)){const q=m(A),se=i.get(ee).__webglTexture;n.bindTexture(q,se),d(q),n.unbindTexture()}}}const Qe=[],Ue=[];function ze(A){if(A.samples>0){if(at(A)===!1){const x=A.textures,N=A.width,K=A.height;let ee=t.COLOR_BUFFER_BIT;const q=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=i.get(A),ne=x.length>1;if(ne)for(let Te=0;Te<x.length;Te++)n.bindFramebuffer(t.FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);const fe=A.texture.mipmaps;fe&&fe.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let Te=0;Te<x.length;Te++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),ne){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,se.__webglColorRenderbuffer[Te]);const oe=i.get(x[Te]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,oe,0)}t.blitFramebuffer(0,0,N,K,0,0,N,K,ee,t.NEAREST),l===!0&&(Qe.length=0,Ue.length=0,Qe.push(t.COLOR_ATTACHMENT0+Te),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Qe.push(q),Ue.push(q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ue)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Qe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ne)for(let Te=0;Te<x.length;Te++){n.bindFramebuffer(t.FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,se.__webglColorRenderbuffer[Te]);const oe=i.get(x[Te]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,oe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const x=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function D(A){return Math.min(r.maxSamples,A.samples)}function at(A){const x=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Fe(A){const x=a.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function Je(A,x){const N=A.colorSpace,K=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||N!==Ks&&N!==tr&&(et.getTransfer(N)===lt?(K!==Jn||ee!==Rn)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",N)),x}function Ee(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=V,this.setTexture2D=F,this.setTexture2DArray=P,this.setTexture3D=O,this.setTextureCube=H,this.rebindTextures=st,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=re,this.useMultisampledRTT=at,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function jR(t,e){function n(i,r=tr){let s;const a=et.getTransfer(r);if(i===Rn)return t.UNSIGNED_BYTE;if(i===Mh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Eh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===K_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Z_)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Y_)return t.BYTE;if(i===q_)return t.SHORT;if(i===eo)return t.UNSIGNED_SHORT;if(i===Sh)return t.INT;if(i===_i)return t.UNSIGNED_INT;if(i===di)return t.FLOAT;if(i===Bi)return t.HALF_FLOAT;if(i===Q_)return t.ALPHA;if(i===J_)return t.RGB;if(i===Jn)return t.RGBA;if(i===zi)return t.DEPTH_COMPONENT;if(i===Vr)return t.DEPTH_STENCIL;if(i===e1)return t.RED;if(i===wh)return t.RED_INTEGER;if(i===qs)return t.RG;if(i===Th)return t.RG_INTEGER;if(i===bh)return t.RGBA_INTEGER;if(i===Ml||i===El||i===wl||i===Tl)if(a===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ml)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===El)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ml)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===El)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Tl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===kd||i===Bd||i===zd||i===Hd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===kd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vd||i===Gd||i===Wd||i===jd||i===Xd||i===$d||i===Yd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Vd||i===Gd)return a===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Wd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===jd)return s.COMPRESSED_R11_EAC;if(i===Xd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===$d)return s.COMPRESSED_RG11_EAC;if(i===Yd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===qd||i===Kd||i===Zd||i===Qd||i===Jd||i===ef||i===tf||i===nf||i===rf||i===sf||i===af||i===of||i===lf||i===cf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===qd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Qd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ef)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===rf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===af)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===of)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===lf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===cf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===uf||i===df||i===ff)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===uf)return a===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===df)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ff)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hf||i===pf||i===mf||i===gf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===hf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===pf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===mf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===to?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const XR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$R=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class YR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new u1(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new vi({vertexShader:XR,fragmentShader:$R,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new vn(new Sc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qR extends ta{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,p=null,_=null;const S=typeof XRWebGLBinding<"u",g=new YR,d={},m=n.getContextAttributes();let y=null,M=null;const b=[],C=[],R=new rt;let v=null;const T=new An;T.viewport=new At;const W=new An;W.viewport=new At;const I=[T,W],V=new ob;let U=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let Z=b[L];return Z===void 0&&(Z=new lu,b[L]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(L){let Z=b[L];return Z===void 0&&(Z=new lu,b[L]=Z),Z.getGripSpace()},this.getHand=function(L){let Z=b[L];return Z===void 0&&(Z=new lu,b[L]=Z),Z.getHandSpace()};function F(L){const Z=C.indexOf(L.inputSource);if(Z===-1)return;const re=b[Z];re!==void 0&&(re.update(L.inputSource,L.frame,c||a),re.dispatchEvent({type:L.type,data:L.inputSource}))}function P(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",O);for(let L=0;L<b.length;L++){const Z=C[L];Z!==null&&(C[L]=null,b[L].disconnect(Z))}U=null,$=null,g.reset();for(const L in d)delete d[L];e.setRenderTarget(y),p=null,u=null,f=null,r=null,M=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){s=L,i.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){o=L,i.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(L){c=L},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(L){if(r=L,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",P),r.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await n.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(R),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,we=null,pe=null;m.depth&&(pe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=m.stencil?Vr:zi,we=m.stencil?to:_i);const Ne={colorFormat:n.RGBA8,depthFormat:pe,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(Ne),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new gi(u.textureWidth,u.textureHeight,{format:Jn,type:Rn,depthTexture:new ro(u.textureWidth,u.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new gi(p.framebufferWidth,p.framebufferHeight,{format:Jn,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function O(L){for(let Z=0;Z<L.removed.length;Z++){const re=L.removed[Z],we=C.indexOf(re);we>=0&&(C[we]=null,b[we].disconnect(re))}for(let Z=0;Z<L.added.length;Z++){const re=L.added[Z];let we=C.indexOf(re);if(we===-1){for(let Ne=0;Ne<b.length;Ne++)if(Ne>=C.length){C.push(re),we=Ne;break}else if(C[Ne]===null){C[Ne]=re,we=Ne;break}if(we===-1)break}const pe=b[we];pe&&pe.connect(re)}}const H=new j,G=new j;function te(L,Z,re){H.setFromMatrixPosition(Z.matrixWorld),G.setFromMatrixPosition(re.matrixWorld);const we=H.distanceTo(G),pe=Z.projectionMatrix.elements,Ne=re.projectionMatrix.elements,st=pe[14]/(pe[10]-1),Oe=pe[14]/(pe[10]+1),$e=(pe[9]+1)/pe[5],Qe=(pe[9]-1)/pe[5],Ue=(pe[8]-1)/pe[0],ze=(Ne[8]+1)/Ne[0],D=st*Ue,at=st*ze,Fe=we/(-Ue+ze),Je=Fe*-Ue;if(Z.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(Je),L.translateZ(Fe),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert(),pe[10]===-1)L.projectionMatrix.copy(Z.projectionMatrix),L.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Ee=st+Fe,A=Oe+Fe,x=D-Je,N=at+(we-Je),K=$e*Oe/A*Ee,ee=Qe*Oe/A*Ee;L.projectionMatrix.makePerspective(x,N,K,ee,Ee,A),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}}function ie(L,Z){Z===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(Z.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(r===null)return;let Z=L.near,re=L.far;g.texture!==null&&(g.depthNear>0&&(Z=g.depthNear),g.depthFar>0&&(re=g.depthFar)),V.near=W.near=T.near=Z,V.far=W.far=T.far=re,(U!==V.near||$!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),U=V.near,$=V.far),V.layers.mask=L.layers.mask|6,T.layers.mask=V.layers.mask&-5,W.layers.mask=V.layers.mask&-3;const we=L.parent,pe=V.cameras;ie(V,we);for(let Ne=0;Ne<pe.length;Ne++)ie(pe[Ne],we);pe.length===2?te(V,T,W):V.projectionMatrix.copy(T.projectionMatrix),ae(L,V,we)};function ae(L,Z,re){re===null?L.matrix.copy(Z.matrixWorld):(L.matrix.copy(re.matrixWorld),L.matrix.invert(),L.matrix.multiply(Z.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(Z.projectionMatrix),L.projectionMatrixInverse.copy(Z.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=io*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(L){l=L,u!==null&&(u.fixedFoveation=L),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=L)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(L){return d[L]};let ve=null;function Xe(L,Z){if(h=Z.getViewerPose(c||a),_=Z,h!==null){const re=h.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let we=!1;re.length!==V.cameras.length&&(V.cameras.length=0,we=!0);for(let Oe=0;Oe<re.length;Oe++){const $e=re[Oe];let Qe=null;if(p!==null)Qe=p.getViewport($e);else{const ze=f.getViewSubImage(u,$e);Qe=ze.viewport,Oe===0&&(e.setRenderTargetTextures(M,ze.colorTexture,ze.depthStencilTexture),e.setRenderTarget(M))}let Ue=I[Oe];Ue===void 0&&(Ue=new An,Ue.layers.enable(Oe),Ue.viewport=new At,I[Oe]=Ue),Ue.matrix.fromArray($e.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray($e.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Oe===0&&(V.matrix.copy(Ue.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),we===!0&&V.cameras.push(Ue)}const pe=r.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){f=i.getBinding();const Oe=f.getDepthInformation(re[0]);Oe&&Oe.isValid&&Oe.texture&&g.init(Oe,r.renderState)}if(pe&&pe.includes("camera-access")&&S){e.state.unbindTexture(),f=i.getBinding();for(let Oe=0;Oe<re.length;Oe++){const $e=re[Oe].camera;if($e){let Qe=d[$e];Qe||(Qe=new u1,d[$e]=Qe);const Ue=f.getCameraImage($e);Qe.sourceTexture=Ue}}}}for(let re=0;re<b.length;re++){const we=C[re],pe=b[re];we!==null&&pe!==void 0&&pe.update(we,Z,c||a)}ve&&ve(L,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),_=null}const He=new p1;He.setAnimationLoop(Xe),this.setAnimationLoop=function(L){ve=L},this.dispose=function(){}}}const Rr=new ii,KR=new Et;function ZR(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,d1(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,m,y,M){d.isMeshBasicMaterial?s(g,d):d.isMeshLambertMaterial?(s(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(g,d),f(g,d)):d.isMeshPhongMaterial?(s(g,d),h(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(g,d),u(g,d),d.isMeshPhysicalMaterial&&p(g,d,M)):d.isMeshMatcapMaterial?(s(g,d),_(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),S(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,m,y):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===pn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===pn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const m=e.get(d),y=m.envMap,M=m.envMapRotation;y&&(g.envMap.value=y,Rr.copy(M),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),g.envMapRotation.value.setFromMatrix4(KR.makeRotationFromEuler(Rr)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,m,y){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*m,g.scale.value=y*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function u(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,m){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===pn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,d){d.matcap&&(g.matcap.value=d.matcap)}function S(g,d){const m=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function QR(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,y){const M=y.program;i.uniformBlockBinding(m,M)}function c(m,y){let M=r[m.id];M===void 0&&(_(m),M=h(m),r[m.id]=M,m.addEventListener("dispose",g));const b=y.program;i.updateUBOMapping(m,b);const C=e.render.frame;s[m.id]!==C&&(u(m),s[m.id]=C)}function h(m){const y=f();m.__bindingPointIndex=y;const M=t.createBuffer(),b=m.__size,C=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,b,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,M),M}function f(){for(let m=0;m<o;m++)if(a.indexOf(m)===-1)return a.push(m),m;return it("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(m){const y=r[m.id],M=m.uniforms,b=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let C=0,R=M.length;C<R;C++){const v=Array.isArray(M[C])?M[C]:[M[C]];for(let T=0,W=v.length;T<W;T++){const I=v[T];if(p(I,C,T,b)===!0){const V=I.__offset,U=Array.isArray(I.value)?I.value:[I.value];let $=0;for(let F=0;F<U.length;F++){const P=U[F],O=S(P);typeof P=="number"||typeof P=="boolean"?(I.__data[0]=P,t.bufferSubData(t.UNIFORM_BUFFER,V+$,I.__data)):P.isMatrix3?(I.__data[0]=P.elements[0],I.__data[1]=P.elements[1],I.__data[2]=P.elements[2],I.__data[3]=0,I.__data[4]=P.elements[3],I.__data[5]=P.elements[4],I.__data[6]=P.elements[5],I.__data[7]=0,I.__data[8]=P.elements[6],I.__data[9]=P.elements[7],I.__data[10]=P.elements[8],I.__data[11]=0):(P.toArray(I.__data,$),$+=O.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,y,M,b){const C=m.value,R=y+"_"+M;if(b[R]===void 0)return typeof C=="number"||typeof C=="boolean"?b[R]=C:b[R]=C.clone(),!0;{const v=b[R];if(typeof C=="number"||typeof C=="boolean"){if(v!==C)return b[R]=C,!0}else if(v.equals(C)===!1)return v.copy(C),!0}return!1}function _(m){const y=m.uniforms;let M=0;const b=16;for(let R=0,v=y.length;R<v;R++){const T=Array.isArray(y[R])?y[R]:[y[R]];for(let W=0,I=T.length;W<I;W++){const V=T[W],U=Array.isArray(V.value)?V.value:[V.value];for(let $=0,F=U.length;$<F;$++){const P=U[$],O=S(P),H=M%b,G=H%O.boundary,te=H+G;M+=G,te!==0&&b-te<O.storage&&(M+=b-te),V.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=O.storage}}}const C=M%b;return C>0&&(M+=b-C),m.__size=M,m.__cache={},this}function S(m){const y={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(y.boundary=4,y.storage=4):m.isVector2?(y.boundary=8,y.storage=8):m.isVector3||m.isColor?(y.boundary=16,y.storage=12):m.isVector4?(y.boundary=16,y.storage=16):m.isMatrix3?(y.boundary=48,y.storage=48):m.isMatrix4?(y.boundary=64,y.storage=64):m.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ke("WebGLRenderer: Unsupported uniform value type.",m),y}function g(m){const y=m.target;y.removeEventListener("dispose",g);const M=a.indexOf(y.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(const m in r)t.deleteBuffer(r[m]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}const JR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let oi=null;function e5(){return oi===null&&(oi=new GT(JR,16,16,qs,Bi),oi.name="DFG_LUT",oi.minFilter=nn,oi.magFilter=nn,oi.wrapS=Li,oi.wrapT=Li,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi}class t5{constructor(e={}){const{canvas:n=sT(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Rn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const S=p,g=new Set([bh,Th,wh]),d=new Set([Rn,_i,eo,to,Mh,Eh]),m=new Uint32Array(4),y=new Int32Array(4);let M=null,b=null;const C=[],R=[];let v=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let W=!1;this._outputColorSpace=fn;let I=0,V=0,U=null,$=-1,F=null;const P=new At,O=new At;let H=null;const G=new Ge(0);let te=0,ie=n.width,ae=n.height,ve=1,Xe=null,He=null;const L=new At(0,0,ie,ae),Z=new At(0,0,ie,ae);let re=!1;const we=new Nh;let pe=!1,Ne=!1;const st=new Et,Oe=new j,$e=new At,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ue=!1;function ze(){return U===null?ve:1}let D=i;function at(E,z){return n.getContext(E,z)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${vh}`),n.addEventListener("webglcontextlost",Ce,!1),n.addEventListener("webglcontextrestored",Be,!1),n.addEventListener("webglcontextcreationerror",pt,!1),D===null){const z="webgl2";if(D=at(z,E),D===null)throw at(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw it("WebGLRenderer: "+E.message),E}let Fe,Je,Ee,A,x,N,K,ee,q,se,ne,fe,Te,oe,ue,be,Ae,xe,Ye,k,he,de,Me;function ce(){Fe=new t4(D),Fe.init(),he=new jR(D,Fe),Je=new $A(D,Fe,e,he),Ee=new GR(D,Fe),Je.reversedDepthBuffer&&u&&Ee.buffers.depth.setReversed(!0),A=new r4(D),x=new RR,N=new WR(D,Fe,Ee,x,Je,he,A),K=new e4(T),ee=new cb(D),de=new jA(D,ee),q=new n4(D,ee,A,de),se=new a4(D,q,ee,de,A),xe=new s4(D,Je,N),ue=new YA(x),ne=new AR(T,K,Fe,Je,de,ue),fe=new ZR(T,x),Te=new LR,oe=new OR(Fe),Ae=new WA(T,K,Ee,se,_,l),be=new VR(T,se,Je),Me=new QR(D,A,Je,Ee),Ye=new XA(D,Fe,A),k=new i4(D,Fe,A),A.programs=ne.programs,T.capabilities=Je,T.extensions=Fe,T.properties=x,T.renderLists=Te,T.shadowMap=be,T.state=Ee,T.info=A}ce(),S!==Rn&&(v=new l4(S,n.width,n.height,r,s));const J=new qR(T,D);this.xr=J,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Fe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Fe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(E){E!==void 0&&(ve=E,this.setSize(ie,ae,!1))},this.getSize=function(E){return E.set(ie,ae)},this.setSize=function(E,z,Q=!0){if(J.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=E,ae=z,n.width=Math.floor(E*ve),n.height=Math.floor(z*ve),Q===!0&&(n.style.width=E+"px",n.style.height=z+"px"),v!==null&&v.setSize(n.width,n.height),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(ie*ve,ae*ve).floor()},this.setDrawingBufferSize=function(E,z,Q){ie=E,ae=z,ve=Q,n.width=Math.floor(E*Q),n.height=Math.floor(z*Q),this.setViewport(0,0,E,z)},this.setEffects=function(E){if(S===Rn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let z=0;z<E.length;z++)if(E[z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(L)},this.setViewport=function(E,z,Q,Y){E.isVector4?L.set(E.x,E.y,E.z,E.w):L.set(E,z,Q,Y),Ee.viewport(P.copy(L).multiplyScalar(ve).round())},this.getScissor=function(E){return E.copy(Z)},this.setScissor=function(E,z,Q,Y){E.isVector4?Z.set(E.x,E.y,E.z,E.w):Z.set(E,z,Q,Y),Ee.scissor(O.copy(Z).multiplyScalar(ve).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(E){Ee.setScissorTest(re=E)},this.setOpaqueSort=function(E){Xe=E},this.setTransparentSort=function(E){He=E},this.getClearColor=function(E){return E.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(E=!0,z=!0,Q=!0){let Y=0;if(E){let X=!1;if(U!==null){const ge=U.texture.format;X=g.has(ge)}if(X){const ge=U.texture.type,ye=d.has(ge),_e=Ae.getClearColor(),Re=Ae.getClearAlpha(),Le=_e.r,Ve=_e.g,qe=_e.b;ye?(m[0]=Le,m[1]=Ve,m[2]=qe,m[3]=Re,D.clearBufferuiv(D.COLOR,0,m)):(y[0]=Le,y[1]=Ve,y[2]=qe,y[3]=Re,D.clearBufferiv(D.COLOR,0,y))}else Y|=D.COLOR_BUFFER_BIT}z&&(Y|=D.DEPTH_BUFFER_BIT),Q&&(Y|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&D.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ce,!1),n.removeEventListener("webglcontextrestored",Be,!1),n.removeEventListener("webglcontextcreationerror",pt,!1),Ae.dispose(),Te.dispose(),oe.dispose(),x.dispose(),K.dispose(),se.dispose(),de.dispose(),Me.dispose(),ne.dispose(),J.dispose(),J.removeEventListener("sessionstart",Uh),J.removeEventListener("sessionend",Fh),Mr.stop()};function Ce(E){E.preventDefault(),xm("WebGLRenderer: Context Lost."),W=!0}function Be(){xm("WebGLRenderer: Context Restored."),W=!1;const E=A.autoReset,z=be.enabled,Q=be.autoUpdate,Y=be.needsUpdate,X=be.type;ce(),A.autoReset=E,be.enabled=z,be.autoUpdate=Q,be.needsUpdate=Y,be.type=X}function pt(E){it("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ot(E){const z=E.target;z.removeEventListener("dispose",ot),xi(z)}function xi(E){yi(E),x.remove(E)}function yi(E){const z=x.get(E).programs;z!==void 0&&(z.forEach(function(Q){ne.releaseProgram(Q)}),E.isShaderMaterial&&ne.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,Q,Y,X,ge){z===null&&(z=Qe);const ye=X.isMesh&&X.matrixWorld.determinant()<0,_e=S1(E,z,Q,Y,X);Ee.setMaterial(Y,ye);let Re=Q.index,Le=1;if(Y.wireframe===!0){if(Re=q.getWireframeAttribute(Q),Re===void 0)return;Le=2}const Ve=Q.drawRange,qe=Q.attributes.position;let Ie=Ve.start*Le,dt=(Ve.start+Ve.count)*Le;ge!==null&&(Ie=Math.max(Ie,ge.start*Le),dt=Math.min(dt,(ge.start+ge.count)*Le)),Re!==null?(Ie=Math.max(Ie,0),dt=Math.min(dt,Re.count)):qe!=null&&(Ie=Math.max(Ie,0),dt=Math.min(dt,qe.count));const Rt=dt-Ie;if(Rt<0||Rt===1/0)return;de.setup(X,Y,_e,Q,Re);let Tt,ft=Ye;if(Re!==null&&(Tt=ee.get(Re),ft=k,ft.setIndex(Tt)),X.isMesh)Y.wireframe===!0?(Ee.setLineWidth(Y.wireframeLinewidth*ze()),ft.setMode(D.LINES)):ft.setMode(D.TRIANGLES);else if(X.isLine){let qt=Y.linewidth;qt===void 0&&(qt=1),Ee.setLineWidth(qt*ze()),X.isLineSegments?ft.setMode(D.LINES):X.isLineLoop?ft.setMode(D.LINE_LOOP):ft.setMode(D.LINE_STRIP)}else X.isPoints?ft.setMode(D.POINTS):X.isSprite&&ft.setMode(D.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)tc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))ft.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const qt=X._multiDrawStarts,Pe=X._multiDrawCounts,wn=X._multiDrawCount,nt=Re?ee.get(Re).bytesPerElement:1,Gn=x.get(Y).currentProgram.getUniforms();for(let ri=0;ri<wn;ri++)Gn.setValue(D,"_gl_DrawID",ri),ft.render(qt[ri]/nt,Pe[ri])}else if(X.isInstancedMesh)ft.renderInstances(Ie,Rt,X.count);else if(Q.isInstancedBufferGeometry){const qt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Pe=Math.min(Q.instanceCount,qt);ft.renderInstances(Ie,Rt,Pe)}else ft.render(Ie,Rt)};function Dh(E,z,Q){E.transparent===!0&&E.side===Ai&&E.forceSinglePass===!1?(E.side=pn,E.needsUpdate=!0,po(E,z,Q),E.side=vr,E.needsUpdate=!0,po(E,z,Q),E.side=Ai):po(E,z,Q)}this.compile=function(E,z,Q=null){Q===null&&(Q=E),b=oe.get(Q),b.init(z),R.push(b),Q.traverseVisible(function(X){X.isLight&&X.layers.test(z.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),E!==Q&&E.traverseVisible(function(X){X.isLight&&X.layers.test(z.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),b.setupLights();const Y=new Set;return E.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ge=X.material;if(ge)if(Array.isArray(ge))for(let ye=0;ye<ge.length;ye++){const _e=ge[ye];Dh(_e,Q,X),Y.add(_e)}else Dh(ge,Q,X),Y.add(ge)}),b=R.pop(),Y},this.compileAsync=function(E,z,Q=null){const Y=this.compile(E,z,Q);return new Promise(X=>{function ge(){if(Y.forEach(function(ye){x.get(ye).currentProgram.isReady()&&Y.delete(ye)}),Y.size===0){X(E);return}setTimeout(ge,10)}Fe.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let wc=null;function y1(E){wc&&wc(E)}function Uh(){Mr.stop()}function Fh(){Mr.start()}const Mr=new p1;Mr.setAnimationLoop(y1),typeof self<"u"&&Mr.setContext(self),this.setAnimationLoop=function(E){wc=E,J.setAnimationLoop(E),E===null?Mr.stop():Mr.start()},J.addEventListener("sessionstart",Uh),J.addEventListener("sessionend",Fh),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;const Q=J.enabled===!0&&J.isPresenting===!0,Y=v!==null&&(U===null||Q)&&v.begin(T,U);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(J.cameraAutoUpdate===!0&&J.updateCamera(z),z=J.getCamera()),E.isScene===!0&&E.onBeforeRender(T,E,z,U),b=oe.get(E,R.length),b.init(z),R.push(b),st.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),we.setFromProjectionMatrix(st,fi,z.reversedDepth),Ne=this.localClippingEnabled,pe=ue.init(this.clippingPlanes,Ne),M=Te.get(E,C.length),M.init(),C.push(M),J.enabled===!0&&J.isPresenting===!0){const ye=T.xr.getDepthSensingMesh();ye!==null&&Tc(ye,z,-1/0,T.sortObjects)}Tc(E,z,0,T.sortObjects),M.finish(),T.sortObjects===!0&&M.sort(Xe,He),Ue=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,Ue&&Ae.addToRenderList(M,E),this.info.render.frame++,pe===!0&&ue.beginShadows();const X=b.state.shadowsArray;if(be.render(X,E,z),pe===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Y&&v.hasRenderPass())===!1){const ye=M.opaque,_e=M.transmissive;if(b.setupLights(),z.isArrayCamera){const Re=z.cameras;if(_e.length>0)for(let Le=0,Ve=Re.length;Le<Ve;Le++){const qe=Re[Le];kh(ye,_e,E,qe)}Ue&&Ae.render(E);for(let Le=0,Ve=Re.length;Le<Ve;Le++){const qe=Re[Le];Oh(M,E,qe,qe.viewport)}}else _e.length>0&&kh(ye,_e,E,z),Ue&&Ae.render(E),Oh(M,E,z)}U!==null&&V===0&&(N.updateMultisampleRenderTarget(U),N.updateRenderTargetMipmap(U)),Y&&v.end(T),E.isScene===!0&&E.onAfterRender(T,E,z),de.resetDefaultState(),$=-1,F=null,R.pop(),R.length>0?(b=R[R.length-1],pe===!0&&ue.setGlobalState(T.clippingPlanes,b.state.camera)):b=null,C.pop(),C.length>0?M=C[C.length-1]:M=null};function Tc(E,z,Q,Y){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)Q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)b.pushLight(E),E.castShadow&&b.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||we.intersectsSprite(E)){Y&&$e.setFromMatrixPosition(E.matrixWorld).applyMatrix4(st);const ye=se.update(E),_e=E.material;_e.visible&&M.push(E,ye,_e,Q,$e.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||we.intersectsObject(E))){const ye=se.update(E),_e=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),$e.copy(E.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),$e.copy(ye.boundingSphere.center)),$e.applyMatrix4(E.matrixWorld).applyMatrix4(st)),Array.isArray(_e)){const Re=ye.groups;for(let Le=0,Ve=Re.length;Le<Ve;Le++){const qe=Re[Le],Ie=_e[qe.materialIndex];Ie&&Ie.visible&&M.push(E,ye,Ie,Q,$e.z,qe)}}else _e.visible&&M.push(E,ye,_e,Q,$e.z,null)}}const ge=E.children;for(let ye=0,_e=ge.length;ye<_e;ye++)Tc(ge[ye],z,Q,Y)}function Oh(E,z,Q,Y){const{opaque:X,transmissive:ge,transparent:ye}=E;b.setupLightsView(Q),pe===!0&&ue.setGlobalState(T.clippingPlanes,Q),Y&&Ee.viewport(P.copy(Y)),X.length>0&&ho(X,z,Q),ge.length>0&&ho(ge,z,Q),ye.length>0&&ho(ye,z,Q),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function kh(E,z,Q,Y){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Y.id]===void 0){const Ie=Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Y.id]=new gi(1,1,{generateMipmaps:!0,type:Ie?Bi:Rn,minFilter:Hr,samples:Je.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace})}const ge=b.state.transmissionRenderTarget[Y.id],ye=Y.viewport||P;ge.setSize(ye.z*T.transmissionResolutionScale,ye.w*T.transmissionResolutionScale);const _e=T.getRenderTarget(),Re=T.getActiveCubeFace(),Le=T.getActiveMipmapLevel();T.setRenderTarget(ge),T.getClearColor(G),te=T.getClearAlpha(),te<1&&T.setClearColor(16777215,.5),T.clear(),Ue&&Ae.render(Q);const Ve=T.toneMapping;T.toneMapping=mi;const qe=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),b.setupLightsView(Y),pe===!0&&ue.setGlobalState(T.clippingPlanes,Y),ho(E,Q,Y),N.updateMultisampleRenderTarget(ge),N.updateRenderTargetMipmap(ge),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let dt=0,Rt=z.length;dt<Rt;dt++){const Tt=z[dt],{object:ft,geometry:qt,material:Pe,group:wn}=Tt;if(Pe.side===Ai&&ft.layers.test(Y.layers)){const nt=Pe.side;Pe.side=pn,Pe.needsUpdate=!0,Bh(ft,Q,Y,qt,Pe,wn),Pe.side=nt,Pe.needsUpdate=!0,Ie=!0}}Ie===!0&&(N.updateMultisampleRenderTarget(ge),N.updateRenderTargetMipmap(ge))}T.setRenderTarget(_e,Re,Le),T.setClearColor(G,te),qe!==void 0&&(Y.viewport=qe),T.toneMapping=Ve}function ho(E,z,Q){const Y=z.isScene===!0?z.overrideMaterial:null;for(let X=0,ge=E.length;X<ge;X++){const ye=E[X],{object:_e,geometry:Re,group:Le}=ye;let Ve=ye.material;Ve.allowOverride===!0&&Y!==null&&(Ve=Y),_e.layers.test(Q.layers)&&Bh(_e,z,Q,Re,Ve,Le)}}function Bh(E,z,Q,Y,X,ge){E.onBeforeRender(T,z,Q,Y,X,ge),E.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),X.onBeforeRender(T,z,Q,Y,E,ge),X.transparent===!0&&X.side===Ai&&X.forceSinglePass===!1?(X.side=pn,X.needsUpdate=!0,T.renderBufferDirect(Q,z,Y,X,E,ge),X.side=vr,X.needsUpdate=!0,T.renderBufferDirect(Q,z,Y,X,E,ge),X.side=Ai):T.renderBufferDirect(Q,z,Y,X,E,ge),E.onAfterRender(T,z,Q,Y,X,ge)}function po(E,z,Q){z.isScene!==!0&&(z=Qe);const Y=x.get(E),X=b.state.lights,ge=b.state.shadowsArray,ye=X.state.version,_e=ne.getParameters(E,X.state,ge,z,Q),Re=ne.getProgramCacheKey(_e);let Le=Y.programs;Y.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?z.environment:null,Y.fog=z.fog;const Ve=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;Y.envMap=K.get(E.envMap||Y.environment,Ve),Y.envMapRotation=Y.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,Le===void 0&&(E.addEventListener("dispose",ot),Le=new Map,Y.programs=Le);let qe=Le.get(Re);if(qe!==void 0){if(Y.currentProgram===qe&&Y.lightsStateVersion===ye)return Hh(E,_e),qe}else _e.uniforms=ne.getUniforms(E),E.onBeforeCompile(_e,T),qe=ne.acquireProgram(_e,Re),Le.set(Re,qe),Y.uniforms=_e.uniforms;const Ie=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ie.clippingPlanes=ue.uniform),Hh(E,_e),Y.needsLights=E1(E),Y.lightsStateVersion=ye,Y.needsLights&&(Ie.ambientLightColor.value=X.state.ambient,Ie.lightProbe.value=X.state.probe,Ie.directionalLights.value=X.state.directional,Ie.directionalLightShadows.value=X.state.directionalShadow,Ie.spotLights.value=X.state.spot,Ie.spotLightShadows.value=X.state.spotShadow,Ie.rectAreaLights.value=X.state.rectArea,Ie.ltc_1.value=X.state.rectAreaLTC1,Ie.ltc_2.value=X.state.rectAreaLTC2,Ie.pointLights.value=X.state.point,Ie.pointLightShadows.value=X.state.pointShadow,Ie.hemisphereLights.value=X.state.hemi,Ie.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ie.spotLightMatrix.value=X.state.spotLightMatrix,Ie.spotLightMap.value=X.state.spotLightMap,Ie.pointShadowMatrix.value=X.state.pointShadowMatrix),Y.currentProgram=qe,Y.uniformsList=null,qe}function zh(E){if(E.uniformsList===null){const z=E.currentProgram.getUniforms();E.uniformsList=Cl.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function Hh(E,z){const Q=x.get(E);Q.outputColorSpace=z.outputColorSpace,Q.batching=z.batching,Q.batchingColor=z.batchingColor,Q.instancing=z.instancing,Q.instancingColor=z.instancingColor,Q.instancingMorph=z.instancingMorph,Q.skinning=z.skinning,Q.morphTargets=z.morphTargets,Q.morphNormals=z.morphNormals,Q.morphColors=z.morphColors,Q.morphTargetsCount=z.morphTargetsCount,Q.numClippingPlanes=z.numClippingPlanes,Q.numIntersection=z.numClipIntersection,Q.vertexAlphas=z.vertexAlphas,Q.vertexTangents=z.vertexTangents,Q.toneMapping=z.toneMapping}function S1(E,z,Q,Y,X){z.isScene!==!0&&(z=Qe),N.resetTextureUnits();const ge=z.fog,ye=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?z.environment:null,_e=U===null?T.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ks,Re=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Le=K.get(Y.envMap||ye,Re),Ve=Y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,qe=!!Q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ie=!!Q.morphAttributes.position,dt=!!Q.morphAttributes.normal,Rt=!!Q.morphAttributes.color;let Tt=mi;Y.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Tt=T.toneMapping);const ft=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,qt=ft!==void 0?ft.length:0,Pe=x.get(Y),wn=b.state.lights;if(pe===!0&&(Ne===!0||E!==F)){const zt=E===F&&Y.id===$;ue.setState(Y,E,zt)}let nt=!1;Y.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==wn.state.version||Pe.outputColorSpace!==_e||X.isBatchedMesh&&Pe.batching===!1||!X.isBatchedMesh&&Pe.batching===!0||X.isBatchedMesh&&Pe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Pe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Pe.instancing===!1||!X.isInstancedMesh&&Pe.instancing===!0||X.isSkinnedMesh&&Pe.skinning===!1||!X.isSkinnedMesh&&Pe.skinning===!0||X.isInstancedMesh&&Pe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Pe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Pe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Pe.instancingMorph===!1&&X.morphTexture!==null||Pe.envMap!==Le||Y.fog===!0&&Pe.fog!==ge||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ue.numPlanes||Pe.numIntersection!==ue.numIntersection)||Pe.vertexAlphas!==Ve||Pe.vertexTangents!==qe||Pe.morphTargets!==Ie||Pe.morphNormals!==dt||Pe.morphColors!==Rt||Pe.toneMapping!==Tt||Pe.morphTargetsCount!==qt)&&(nt=!0):(nt=!0,Pe.__version=Y.version);let Gn=Pe.currentProgram;nt===!0&&(Gn=po(Y,z,X));let ri=!1,Er=!1,es=!1;const ht=Gn.getUniforms(),Wt=Pe.uniforms;if(Ee.useProgram(Gn.program)&&(ri=!0,Er=!0,es=!0),Y.id!==$&&($=Y.id,Er=!0),ri||F!==E){Ee.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ht.setValue(D,"projectionMatrix",E.projectionMatrix),ht.setValue(D,"viewMatrix",E.matrixWorldInverse);const Gi=ht.map.cameraPosition;Gi!==void 0&&Gi.setValue(D,Oe.setFromMatrixPosition(E.matrixWorld)),Je.logarithmicDepthBuffer&&ht.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ht.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),F!==E&&(F=E,Er=!0,es=!0)}if(Pe.needsLights&&(wn.state.directionalShadowMap.length>0&&ht.setValue(D,"directionalShadowMap",wn.state.directionalShadowMap,N),wn.state.spotShadowMap.length>0&&ht.setValue(D,"spotShadowMap",wn.state.spotShadowMap,N),wn.state.pointShadowMap.length>0&&ht.setValue(D,"pointShadowMap",wn.state.pointShadowMap,N)),X.isSkinnedMesh){ht.setOptional(D,X,"bindMatrix"),ht.setOptional(D,X,"bindMatrixInverse");const zt=X.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),ht.setValue(D,"boneTexture",zt.boneTexture,N))}X.isBatchedMesh&&(ht.setOptional(D,X,"batchingTexture"),ht.setValue(D,"batchingTexture",X._matricesTexture,N),ht.setOptional(D,X,"batchingIdTexture"),ht.setValue(D,"batchingIdTexture",X._indirectTexture,N),ht.setOptional(D,X,"batchingColorTexture"),X._colorsTexture!==null&&ht.setValue(D,"batchingColorTexture",X._colorsTexture,N));const Vi=Q.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&xe.update(X,Q,Gn),(Er||Pe.receiveShadow!==X.receiveShadow)&&(Pe.receiveShadow=X.receiveShadow,ht.setValue(D,"receiveShadow",X.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&z.environment!==null&&(Wt.envMapIntensity.value=z.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=e5()),Er&&(ht.setValue(D,"toneMappingExposure",T.toneMappingExposure),Pe.needsLights&&M1(Wt,es),ge&&Y.fog===!0&&fe.refreshFogUniforms(Wt,ge),fe.refreshMaterialUniforms(Wt,Y,ve,ae,b.state.transmissionRenderTarget[E.id]),Cl.upload(D,zh(Pe),Wt,N)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Cl.upload(D,zh(Pe),Wt,N),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ht.setValue(D,"center",X.center),ht.setValue(D,"modelViewMatrix",X.modelViewMatrix),ht.setValue(D,"normalMatrix",X.normalMatrix),ht.setValue(D,"modelMatrix",X.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const zt=Y.uniformsGroups;for(let Gi=0,ts=zt.length;Gi<ts;Gi++){const Vh=zt[Gi];Me.update(Vh,Gn),Me.bind(Vh,Gn)}}return Gn}function M1(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function E1(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(E,z,Q){const Y=x.get(E);Y.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),x.get(E.texture).__webglTexture=z,x.get(E.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,z){const Q=x.get(E);Q.__webglFramebuffer=z,Q.__useDefaultFramebuffer=z===void 0};const w1=D.createFramebuffer();this.setRenderTarget=function(E,z=0,Q=0){U=E,I=z,V=Q;let Y=null,X=!1,ge=!1;if(E){const _e=x.get(E);if(_e.__useDefaultFramebuffer!==void 0){Ee.bindFramebuffer(D.FRAMEBUFFER,_e.__webglFramebuffer),P.copy(E.viewport),O.copy(E.scissor),H=E.scissorTest,Ee.viewport(P),Ee.scissor(O),Ee.setScissorTest(H),$=-1;return}else if(_e.__webglFramebuffer===void 0)N.setupRenderTarget(E);else if(_e.__hasExternalTextures)N.rebindTextures(E,x.get(E.texture).__webglTexture,x.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ve=E.depthTexture;if(_e.__boundDepthTexture!==Ve){if(Ve!==null&&x.has(Ve)&&(E.width!==Ve.image.width||E.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(E)}}const Re=E.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(ge=!0);const Le=x.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Le[z])?Y=Le[z][Q]:Y=Le[z],X=!0):E.samples>0&&N.useMultisampledRTT(E)===!1?Y=x.get(E).__webglMultisampledFramebuffer:Array.isArray(Le)?Y=Le[Q]:Y=Le,P.copy(E.viewport),O.copy(E.scissor),H=E.scissorTest}else P.copy(L).multiplyScalar(ve).floor(),O.copy(Z).multiplyScalar(ve).floor(),H=re;if(Q!==0&&(Y=w1),Ee.bindFramebuffer(D.FRAMEBUFFER,Y)&&Ee.drawBuffers(E,Y),Ee.viewport(P),Ee.scissor(O),Ee.setScissorTest(H),X){const _e=x.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,_e.__webglTexture,Q)}else if(ge){const _e=z;for(let Re=0;Re<E.textures.length;Re++){const Le=x.get(E.textures[Re]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Re,Le.__webglTexture,Q,_e)}}else if(E!==null&&Q!==0){const _e=x.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_e.__webglTexture,Q)}$=-1},this.readRenderTargetPixels=function(E,z,Q,Y,X,ge,ye,_e=0){if(!(E&&E.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=x.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ye!==void 0&&(Re=Re[ye]),Re){Ee.bindFramebuffer(D.FRAMEBUFFER,Re);try{const Le=E.textures[_e],Ve=Le.format,qe=Le.type;if(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+_e),!Je.textureFormatReadable(Ve)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(qe)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-Y&&Q>=0&&Q<=E.height-X&&D.readPixels(z,Q,Y,X,he.convert(Ve),he.convert(qe),ge)}finally{const Le=U!==null?x.get(U).__webglFramebuffer:null;Ee.bindFramebuffer(D.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(E,z,Q,Y,X,ge,ye,_e=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=x.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ye!==void 0&&(Re=Re[ye]),Re)if(z>=0&&z<=E.width-Y&&Q>=0&&Q<=E.height-X){Ee.bindFramebuffer(D.FRAMEBUFFER,Re);const Le=E.textures[_e],Ve=Le.format,qe=Le.type;if(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+_e),!Je.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ie=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ie),D.bufferData(D.PIXEL_PACK_BUFFER,ge.byteLength,D.STREAM_READ),D.readPixels(z,Q,Y,X,he.convert(Ve),he.convert(qe),0);const dt=U!==null?x.get(U).__webglFramebuffer:null;Ee.bindFramebuffer(D.FRAMEBUFFER,dt);const Rt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await aT(D,Rt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ie),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ge),D.deleteBuffer(Ie),D.deleteSync(Rt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,z=null,Q=0){const Y=Math.pow(2,-Q),X=Math.floor(E.image.width*Y),ge=Math.floor(E.image.height*Y),ye=z!==null?z.x:0,_e=z!==null?z.y:0;N.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,Q,0,0,ye,_e,X,ge),Ee.unbindTexture()};const T1=D.createFramebuffer(),b1=D.createFramebuffer();this.copyTextureToTexture=function(E,z,Q=null,Y=null,X=0,ge=0){let ye,_e,Re,Le,Ve,qe,Ie,dt,Rt;const Tt=E.isCompressedTexture?E.mipmaps[ge]:E.image;if(Q!==null)ye=Q.max.x-Q.min.x,_e=Q.max.y-Q.min.y,Re=Q.isBox3?Q.max.z-Q.min.z:1,Le=Q.min.x,Ve=Q.min.y,qe=Q.isBox3?Q.min.z:0;else{const Wt=Math.pow(2,-X);ye=Math.floor(Tt.width*Wt),_e=Math.floor(Tt.height*Wt),E.isDataArrayTexture?Re=Tt.depth:E.isData3DTexture?Re=Math.floor(Tt.depth*Wt):Re=1,Le=0,Ve=0,qe=0}Y!==null?(Ie=Y.x,dt=Y.y,Rt=Y.z):(Ie=0,dt=0,Rt=0);const ft=he.convert(z.format),qt=he.convert(z.type);let Pe;z.isData3DTexture?(N.setTexture3D(z,0),Pe=D.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(N.setTexture2DArray(z,0),Pe=D.TEXTURE_2D_ARRAY):(N.setTexture2D(z,0),Pe=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);const wn=D.getParameter(D.UNPACK_ROW_LENGTH),nt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Gn=D.getParameter(D.UNPACK_SKIP_PIXELS),ri=D.getParameter(D.UNPACK_SKIP_ROWS),Er=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Tt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Tt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Le),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ve),D.pixelStorei(D.UNPACK_SKIP_IMAGES,qe);const es=E.isDataArrayTexture||E.isData3DTexture,ht=z.isDataArrayTexture||z.isData3DTexture;if(E.isDepthTexture){const Wt=x.get(E),Vi=x.get(z),zt=x.get(Wt.__renderTarget),Gi=x.get(Vi.__renderTarget);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,zt.__webglFramebuffer),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,Gi.__webglFramebuffer);for(let ts=0;ts<Re;ts++)es&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,x.get(E).__webglTexture,X,qe+ts),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,x.get(z).__webglTexture,ge,Rt+ts)),D.blitFramebuffer(Le,Ve,ye,_e,Ie,dt,ye,_e,D.DEPTH_BUFFER_BIT,D.NEAREST);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(X!==0||E.isRenderTargetTexture||x.has(E)){const Wt=x.get(E),Vi=x.get(z);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,T1),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,b1);for(let zt=0;zt<Re;zt++)es?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Wt.__webglTexture,X,qe+zt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Wt.__webglTexture,X),ht?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Vi.__webglTexture,ge,Rt+zt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Vi.__webglTexture,ge),X!==0?D.blitFramebuffer(Le,Ve,ye,_e,Ie,dt,ye,_e,D.COLOR_BUFFER_BIT,D.NEAREST):ht?D.copyTexSubImage3D(Pe,ge,Ie,dt,Rt+zt,Le,Ve,ye,_e):D.copyTexSubImage2D(Pe,ge,Ie,dt,Le,Ve,ye,_e);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ht?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Pe,ge,Ie,dt,Rt,ye,_e,Re,ft,qt,Tt.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(Pe,ge,Ie,dt,Rt,ye,_e,Re,ft,Tt.data):D.texSubImage3D(Pe,ge,Ie,dt,Rt,ye,_e,Re,ft,qt,Tt):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ge,Ie,dt,ye,_e,ft,qt,Tt.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ge,Ie,dt,Tt.width,Tt.height,ft,Tt.data):D.texSubImage2D(D.TEXTURE_2D,ge,Ie,dt,ye,_e,ft,qt,Tt);D.pixelStorei(D.UNPACK_ROW_LENGTH,wn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,nt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Gn),D.pixelStorei(D.UNPACK_SKIP_ROWS,ri),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Er),ge===0&&z.generateMipmaps&&D.generateMipmap(Pe),Ee.unbindTexture()},this.initRenderTarget=function(E){x.get(E).__webglFramebuffer===void 0&&N.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?N.setTextureCube(E,0):E.isData3DTexture?N.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?N.setTexture2DArray(E,0):N.setTexture2D(E,0),Ee.unbindTexture()},this.resetState=function(){I=0,V=0,U=null,Ee.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),n.unpackColorSpace=et._getUnpackColorSpace()}}const Yn={home:{color:"#5beaff",angle:0,title:"Surface",text:"Intro and identity",dx:"-24vw",dy:"-18vh"},about:{color:"#ffd76b",angle:Math.PI/2,title:"About",text:"Skills and profile",dx:"24vw",dy:"-18vh"},projects:{color:"#ff8ed1",angle:Math.PI,title:"Projects",text:"Priority builds",dx:"24vw",dy:"22vh"},contact:{color:"#9cc3ff",angle:Math.PI*3/2,title:"Contact",text:"Get in touch",dx:"-24vw",dy:"22vh"}};function h0(t){return Math.min(1,Math.max(0,t))}function bt(t,e){return t+Math.random()*(e-t)}function yf(t,e,n,i){return{x:(e+180)/360*n,y:(90-t)/180*i}}function n5(t,e,n,i){if(e.length){t.beginPath();for(let r=0;r<e.length;r+=1){const[s,a]=e[r],{x:o,y:l}=yf(s,a,n,i);r===0?t.moveTo(o,l):t.lineTo(o,l)}t.closePath(),t.fill(),t.stroke()}}function i5(){const t=document.createElement("canvas"),e=2048,n=1024;t.width=e,t.height=n;const i=t.getContext("2d");if(!i)return null;const r=i.createLinearGradient(0,0,0,n);r.addColorStop(0,"#0f3762"),r.addColorStop(.45,"#1b5a8a"),r.addColorStop(1,"#0b2447"),i.fillStyle=r,i.fillRect(0,0,e,n),i.save(),i.globalAlpha=.18,i.strokeStyle="#9bd6ff",i.lineWidth=1;for(let a=-60;a<=60;a+=15){const o=yf(a,0,e,n).y;i.beginPath(),i.moveTo(0,o),i.lineTo(e,o),i.stroke()}for(let a=-180;a<=180;a+=20){const o=yf(0,a,e,n).x;i.beginPath(),i.moveTo(o,0),i.lineTo(o,n),i.stroke()}i.restore();const s=[[[72,-168],[60,-152],[50,-130],[54,-104],[50,-84],[33,-80],[18,-95],[15,-114],[27,-134],[43,-144],[60,-162]],[[11,-82],[3,-79],[-8,-76],[-20,-72],[-34,-66],[-55,-62],[-37,-50],[-18,-46],[-2,-52],[9,-63]],[[82,-73],[76,-18],[66,-20],[60,-45],[67,-63],[75,-72]],[[70,-10],[70,35],[64,65],[62,95],[58,128],[48,148],[35,140],[20,118],[8,100],[10,76],[18,56],[30,36],[42,22],[55,7],[65,-4]],[[36,-17],[31,6],[26,20],[14,31],[2,36],[-10,34],[-22,28],[-33,17],[-35,6],[-28,-4],[-14,-10],[1,-12],[18,-14],[31,-10]],[[-10,112],[-20,114],[-31,116],[-39,127],[-39,143],[-31,152],[-21,148],[-13,140],[-11,129]],[[59,-10],[59,2],[50,3],[50,-7]],[[-74,-180],[-70,-120],[-73,-60],[-71,0],[-74,60],[-70,120],[-74,180],[-84,180],[-84,-180]]];i.fillStyle="#3f8d4a",i.strokeStyle="#a5dba9",i.lineWidth=2,s.forEach(a=>n5(i,a,e,n)),i.save(),i.globalAlpha=.14;for(let a=0;a<1200;a+=1){const o=bt(0,e),l=bt(0,n),c=bt(.7,2.2);i.fillStyle="rgba(255,255,255,0.3)",i.beginPath(),i.arc(o,l,c,0,Math.PI*2),i.fill()}return i.restore(),new c1(t)}function r5(){const t=document.createElement("canvas"),e=2048,n=1024;t.width=e,t.height=n;const i=t.getContext("2d");if(!i)return null;i.clearRect(0,0,e,n);for(let r=0;r<2600;r+=1){const s=bt(0,e),a=bt(0,n),o=bt(8,26),l=bt(.03,.16),c=i.createRadialGradient(s,a,o*.15,s,a,o);c.addColorStop(0,`rgba(255,255,255,${l})`),c.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=c,i.beginPath(),i.arc(s,a,o,0,Math.PI*2),i.fill()}return new c1(t)}function s5(t){t.traverse(e=>{e.geometry&&e.geometry.dispose(),Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material&&e.material.dispose()})}function a5({progressRef:t,currentSection:e="home",className:n=""}){const i=De.useRef(null),r=De.useRef(0),s=De.useRef(e in Yn?e:"home"),[a,o]=De.useState(0);De.useEffect(()=>{s.current=e in Yn?e:"home",r.current+=1,o(h=>h+1)},[e]),De.useEffect(()=>{const h=i.current;if(!h)return;const f=new t5({antialias:!0,alpha:!0,powerPreference:"high-performance"});f.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),f.setSize(Math.max(h.clientWidth,1),Math.max(h.clientHeight,1)),f.outputColorSpace=fn,f.toneMapping=yh,f.toneMappingExposure=1.08,f.domElement.className=B.globeCanvas,h.appendChild(f.domElement);const u=i5(),p=r5();u&&(u.anisotropy=f.capabilities.getMaxAnisotropy(),u.colorSpace=fn),p&&(p.anisotropy=f.capabilities.getMaxAnisotropy(),p.colorSpace=fn);const _=new OT,S=new An(46,Math.max(h.clientWidth,1)/Math.max(h.clientHeight,1),.1,120);S.position.set(0,.2,8.8);const g=new Ls;_.add(g);const d=new sb(8707583,.34);_.add(d);const m=new Vm(6872831,1.5,60,2);m.position.set(6,4.2,9),_.add(m);const y=new Vm(16764037,.95,55,2);y.position.set(-8,-5,-7),_.add(y);const M=new nb(9431295,132624,.36);_.add(M);const b=new Om({map:u??null,roughness:.82,metalness:.08,bumpMap:u??null,bumpScale:.08,emissive:new Ge("#19355b"),emissiveIntensity:.22}),C=new vn(new Fr(2.08,96,96),b);g.add(C);const R=new vn(new Fr(2.16,64,64),new JT({map:p??null,transparent:!0,opacity:.38,depthWrite:!1,blending:Dr}));g.add(R);const v=new vn(new Fr(2.12,44,44),new nc({color:9099263,wireframe:!0,transparent:!0,opacity:.045}));g.add(v);const T=new vn(new Fr(2.42,72,72),new nc({color:7659007,transparent:!0,opacity:.2,side:pn,depthWrite:!1,blending:Dr}));g.add(T);const W=new Ls;g.add(W);const I=Object.entries(Yn),V={};I.forEach(([x,N],K)=>{const ee=K/I.length*Math.PI*2,q=new j(Math.cos(ee)*2.42,Math.sin(ee*1.7)*.34,Math.sin(ee)*2.42),se=new Om({color:new Ge(N.color),emissive:new Ge(N.color),emissiveIntensity:x===s.current?1.7:.65,roughness:.28,metalness:.12}),ne=new vn(new Fr(.13,26,26),se);ne.position.copy(q),W.add(ne),V[x]=ne});const U=900,$=new Float32Array(U*3),F=new Float32Array(U*3);for(let x=0;x<U;x+=1){const N=x*3,K=bt(11,32),ee=bt(0,Math.PI*2),q=Math.acos(bt(-1,1));$[N]=K*Math.sin(q)*Math.cos(ee),$[N+1]=K*Math.sin(q)*Math.sin(ee),$[N+2]=K*Math.cos(q);const se=bt(.68,1);F[N]=se,F[N+1]=se,F[N+2]=1}const P=new En;P.setAttribute("position",new tn($,3)),P.setAttribute("color",new tn(F,3));const O=new Tu(P,new bl({size:.03,vertexColors:!0,transparent:!0,opacity:.62,depthWrite:!1,blending:Dr}));_.add(O);const H=760,G=new Float32Array(H*3),te=new Float32Array(H*3),ie=new Float32Array(H*3),ae=new Float32Array(H);for(let x=0;x<H;x+=1){const N=x*3,K=bt(2.8,4.9),ee=bt(0,Math.PI*2),q=Math.acos(bt(-1,1)),se=K*Math.sin(q)*Math.cos(ee),ne=K*Math.sin(q)*Math.sin(ee),fe=K*Math.cos(q);G[N]=se,G[N+1]=ne,G[N+2]=fe,te[N]=se,te[N+1]=ne,te[N+2]=fe,ae[x]=bt(0,Math.PI*2);const Te=Math.random();Te<.34?(ie[N]=.42,ie[N+1]=.86,ie[N+2]=1):Te<.68?(ie[N]=1,ie[N+1]=.84,ie[N+2]=.48):(ie[N]=1,ie[N+1]=.61,ie[N+2]=.86)}const ve=new En;ve.setAttribute("position",new tn(te,3)),ve.setAttribute("color",new tn(ie,3));const Xe=new Tu(ve,new bl({size:.045,vertexColors:!0,transparent:!0,opacity:.78,depthWrite:!1,blending:Dr}));g.add(Xe);const He=260,L=new Float32Array(He*3),Z=new Float32Array(He*3),re=new Float32Array(He),we=Array.from({length:He},()=>new j);for(let x=0;x<He;x+=1){const N=x*3;L[N]=9999,L[N+1]=9999,L[N+2]=9999,Z[N]=1,Z[N+1]=1,Z[N+2]=1}const pe=new En;pe.setAttribute("position",new tn(L,3)),pe.setAttribute("color",new tn(Z,3));const Ne=new Tu(pe,new bl({size:.09,vertexColors:!0,transparent:!0,opacity:.96,depthWrite:!1,blending:Dr}));_.add(Ne);const st=new j,Oe=new Ge(Yn.home.color),$e=new Ge(Yn.home.color);function Qe(x){var ee;const N=V[x];N?st.copy(N.position):st.set(0,0,2.2);const K=new Ge(((ee=Yn[x])==null?void 0:ee.color)||"#7fe6ff");for(let q=0;q<He;q+=1){const se=q*3;L[se]=st.x,L[se+1]=st.y,L[se+2]=st.z;const ne=new j(bt(-1,1),bt(-1,1),bt(-1,1)).normalize(),fe=bt(.05,.23);we[q].copy(ne.multiplyScalar(fe)),re[q]=bt(.7,1.08),Z[se]=K.r,Z[se+1]=Math.min(1,K.g+bt(0,.2)),Z[se+2]=Math.min(1,K.b+bt(.02,.32))}pe.attributes.position.needsUpdate=!0,pe.attributes.color.needsUpdate=!0}Qe(s.current);let Ue=0,ze=performance.now(),D=r.current,at=0,Fe=0,Je=0;function Ee(x){const N=Math.min(.05,(x-ze)/1e3);ze=x;const K=s.current in Yn?s.current:"home",ee=h0((t==null?void 0:t.current)??0);Fe=Uo.damp(Fe,ee,4.6,N),r.current!==D&&(Qe(K),D=r.current);const q=Fe*Math.PI*6.8+Yn[K].angle*.12;at=Uo.damp(at,q,2.9,N),g.rotation.y=at,g.rotation.x=Math.sin(x*25e-5)*.08+Fe*.06,g.position.y=Math.sin(x*68e-5)*.18,g.rotation.z=-.18,Oe.set(Yn[K].color),$e.lerp(Oe,Math.min(1,N*2.8)),b.emissive.copy($e),b.emissiveIntensity=.16+Fe*.22,T.material.color.copy($e),T.material.opacity=.16+Fe*.1,v.rotation.y-=N*.08,v.rotation.x+=N*.06,R.rotation.y+=N*.032,R.rotation.x+=N*.004,Object.entries(V).forEach(([se,ne])=>{const fe=se===K,Te=fe?1.28+Math.sin(x*.01)*.09:1,oe=Uo.damp(ne.scale.x,Te,8,N);ne.scale.setScalar(oe),ne.material.emissiveIntensity=Uo.damp(ne.material.emissiveIntensity,fe?2:.55,8,N)}),Je+=N*(.35+Fe*.65);for(let se=0;se<H;se+=1){const ne=se*3,fe=ae[se],Te=1+Math.sin(x*.0014+fe)*.04+Fe*.15;te[ne]=G[ne]*Te+Math.cos(Je+fe)*.08,te[ne+1]=G[ne+1]*Te+Math.sin(Je*.9+fe*.7)*.08,te[ne+2]=G[ne+2]*Te+Math.sin(Je+fe*1.1)*.08}ve.attributes.position.needsUpdate=!0;for(let se=0;se<He;se+=1){const ne=re[se];if(ne<=0)continue;const fe=se*3;L[fe]+=we[se].x*(1+Fe*.9),L[fe+1]+=we[se].y*(1+Fe*.9),L[fe+2]+=we[se].z*(1+Fe*.9),we[se].multiplyScalar(.985),re[se]=ne-N*1.6;const Te=h0(re[se]);Z[fe]*=.997,Z[fe+1]*=.998,Z[fe+2]*=.999,re[se]<=0?(L[fe]=9999,L[fe+1]=9999,L[fe+2]=9999):(Z[fe]=Math.max(.14,Z[fe]*Te),Z[fe+1]=Math.max(.22,Z[fe+1]*Te),Z[fe+2]=Math.max(.3,Z[fe+2]*Te))}pe.attributes.position.needsUpdate=!0,pe.attributes.color.needsUpdate=!0,O.rotation.y+=N*.018,O.rotation.x=Math.sin(x*11e-5)*.08,f.render(_,S),Ue=window.requestAnimationFrame(Ee)}function A(){const x=Math.max(h.clientWidth,1),N=Math.max(h.clientHeight,1);f.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),f.setSize(x,N),S.aspect=x/N,S.updateProjectionMatrix()}return window.addEventListener("resize",A,{passive:!0}),Ue=window.requestAnimationFrame(Ee),()=>{window.removeEventListener("resize",A),window.cancelAnimationFrame(Ue),s5(_),f.dispose(),u==null||u.dispose(),p==null||p.dispose(),f.domElement.parentNode===h&&h.removeChild(f.domElement)}},[t]);const l=[B.globeRoot,n].filter(Boolean).join(" "),c=Yn[e]||Yn.home;return w.jsxs("div",{className:l,children:[w.jsx("div",{ref:i,className:B.globeCanvasHost,"aria-hidden":"true"}),w.jsx("div",{className:B.globeGlow,"aria-hidden":"true"}),w.jsxs("div",{className:B.globeInfoLayer,"aria-hidden":"true",children:[w.jsx("span",{className:B.globePulseCore}),w.jsxs("article",{className:`${B.globeInfoCard} ${B.globeInfoCardActive}`,style:{"--dx":c.dx,"--dy":c.dy},children:[w.jsx("h4",{className:B.globeInfoCardTitle,children:c.title}),w.jsx("p",{className:B.globeInfoCardText,children:c.text})]},`${e}-${a}`),w.jsx("div",{className:B.globeScrollTag,children:"Scroll to rotate globe"})]})]})}const mr=[{id:"sea",name:"Sea",title:"Ocean Depths",shortLabel:"SEA",icon:"SD",platform:"glass",guide:{title:"Reef Guide",text:"Scroll through reefs, bubbles, and glass decks that float like a calm underwater city."},travelCreature:"ray",travelLabel:"Reef Ray",palettes:[{id:"tideglass",name:"Tideglass",primary:"#55d7ff",secondary:"#1498d1",tertiary:"#09436b",accent:"#9ef6ff",background:"linear-gradient(135deg, #021724 0%, #0a3650 40%, #04121e 100%)",surfaceBg:"linear-gradient(to bottom, #6ee7f6 0%, #1fb7d6 28%, #0c6e9f 100%)",shallowBg:"linear-gradient(to bottom, #1aa6ca 0%, #0b6f96 58%, #08263d 100%)",deepBg:"linear-gradient(to bottom, #0a5f8a 0%, #072b43 62%, #03121d 100%)",abyssBg:"linear-gradient(to bottom, #072033 0%, #020d16 75%, #000 100%)",panelSurface:"linear-gradient(180deg, rgba(10, 54, 87, 0.64), rgba(3, 19, 34, 0.56))",panelEdge:"rgba(143, 237, 255, 0.35)",panelInset:"rgba(255, 255, 255, 0.18)",panelGlow:"rgba(69, 211, 255, 0.3)",softText:"rgba(230, 248, 255, 0.82)",strongText:"rgba(245, 252, 255, 0.98)",pickerShell:"linear-gradient(135deg, rgba(5, 34, 58, 0.92), rgba(6, 21, 34, 0.84))",sceneGlow:"rgba(90, 229, 255, 0.42)",horizon:"rgba(57, 168, 205, 0.3)",rail:"rgba(170, 247, 255, 0.3)",swatches:["#9ef6ff","#55d7ff","#0fa7d8","#0a5e92"]},{id:"moonreef",name:"Moon Reef",primary:"#7dd3fc",secondary:"#38bdf8",tertiary:"#1d4ed8",accent:"#c4f1ff",background:"linear-gradient(135deg, #06121f 0%, #102a54 42%, #050b17 100%)",surfaceBg:"linear-gradient(to bottom, #c4f1ff 0%, #60c9fb 32%, #3063d4 100%)",shallowBg:"linear-gradient(to bottom, #55b8f6 0%, #2657c7 58%, #0f2142 100%)",deepBg:"linear-gradient(to bottom, #2f5abf 0%, #14305a 64%, #071322 100%)",abyssBg:"linear-gradient(to bottom, #0e2445 0%, #07111f 74%, #000 100%)",panelSurface:"linear-gradient(180deg, rgba(12, 36, 79, 0.66), rgba(5, 14, 34, 0.6))",panelEdge:"rgba(148, 214, 255, 0.34)",panelInset:"rgba(241, 250, 255, 0.18)",panelGlow:"rgba(85, 178, 255, 0.28)",softText:"rgba(230, 240, 255, 0.84)",strongText:"rgba(248, 251, 255, 0.98)",pickerShell:"linear-gradient(135deg, rgba(8, 24, 59, 0.92), rgba(4, 15, 31, 0.82))",sceneGlow:"rgba(123, 209, 255, 0.38)",horizon:"rgba(90, 165, 255, 0.28)",rail:"rgba(208, 239, 255, 0.28)",swatches:["#d9f5ff","#8edfff","#4eb8ff","#2849b6"]},{id:"coralbloom",name:"Coral Bloom",primary:"#5eead4",secondary:"#22d3ee",tertiary:"#0f766e",accent:"#fca5a5",background:"linear-gradient(135deg, #081724 0%, #0a3144 40%, #2a1024 100%)",surfaceBg:"linear-gradient(to bottom, #91f2ee 0%, #2fd4df 32%, #146f7a 100%)",shallowBg:"linear-gradient(to bottom, #2cbfd5 0%, #146a83 60%, #2a1024 100%)",deepBg:"linear-gradient(to bottom, #135865 0%, #13263f 62%, #180917 100%)",abyssBg:"linear-gradient(to bottom, #10253a 0%, #0a0f18 74%, #000 100%)",panelSurface:"linear-gradient(180deg, rgba(8, 39, 54, 0.64), rgba(29, 9, 24, 0.58))",panelEdge:"rgba(143, 255, 228, 0.28)",panelInset:"rgba(255, 241, 241, 0.16)",panelGlow:"rgba(252, 165, 165, 0.2)",softText:"rgba(232, 251, 247, 0.84)",strongText:"rgba(248, 255, 253, 0.98)",pickerShell:"linear-gradient(135deg, rgba(8, 39, 54, 0.92), rgba(33, 8, 25, 0.82))",sceneGlow:"rgba(110, 237, 220, 0.36)",horizon:"rgba(240, 136, 136, 0.18)",rail:"rgba(232, 255, 249, 0.22)",swatches:["#9ffbf0","#5debd4","#19b6bc","#ff9f9f"]}]},{id:"forest",name:"Forest",title:"Enchanted Forest",shortLabel:"WOOD",icon:"FR",platform:"tree",guide:{title:"Canopy Guide",text:"Cards settle on tree decks and glowing branches while leaves and fireflies move with your scroll."},travelCreature:"bird",travelLabel:"Sky Bird",palettes:[{id:"mosslight",name:"Mosslight",primary:"#6ee7b7",secondary:"#16a34a",tertiary:"#14532d",accent:"#facc15",background:"linear-gradient(135deg, #08180d 0%, #163822 40%, #09140c 100%)",surfaceBg:"linear-gradient(to bottom, #a7f3d0 0%, #53c78e 30%, #22693d 100%)",shallowBg:"linear-gradient(to bottom, #4eb77b 0%, #205f39 58%, #102514 100%)",deepBg:"linear-gradient(to bottom, #275c39 0%, #122a18 62%, #08130c 100%)",abyssBg:"linear-gradient(to bottom, #132717 0%, #07100b 76%, #000 100%)",panelSurface:"linear-gradient(180deg, rgba(26, 62, 34, 0.7), rgba(8, 19, 10, 0.6))",panelEdge:"rgba(158, 255, 194, 0.3)",panelInset:"rgba(253, 255, 244, 0.15)",panelGlow:"rgba(110, 231, 183, 0.24)",softText:"rgba(233, 251, 239, 0.83)",strongText:"rgba(249, 255, 251, 0.98)",pickerShell:"linear-gradient(135deg, rgba(18, 49, 24, 0.94), rgba(8, 19, 10, 0.82))",sceneGlow:"rgba(126, 255, 198, 0.32)",horizon:"rgba(173, 255, 47, 0.16)",rail:"rgba(215, 255, 197, 0.24)",swatches:["#d8ffd1","#9af2b9","#39c970","#ffd447"]},{id:"amberfern",name:"Amber Fern",primary:"#86efac",secondary:"#65a30d",tertiary:"#365314",accent:"#fb923c",background:"linear-gradient(135deg, #12170a 0%, #294017 42%, #1b1309 100%)",surfaceBg:"linear-gradient(to bottom, #dcfce7 0%, #a3e635 28%, #4d7c0f 100%)",shallowBg:"linear-gradient(to bottom, #93c52a 0%, #51791c 56%, #24190e 100%)",deepBg:"linear-gradient(to bottom, #426719 0%, #23190f 64%, #120e08 100%)",abyssBg:"linear-gradient(to bottom, #2a1d10 0%, #120d08 74%, #000 100%)",panelSurface:"linear-gradient(180deg, rgba(40, 57, 17, 0.72), rgba(28, 18, 8, 0.6))",panelEdge:"rgba(197, 255, 149, 0.28)",panelInset:"rgba(255, 246, 224, 0.14)",panelGlow:"rgba(251, 146, 60, 0.18)",softText:"rgba(249, 249, 233, 0.84)",strongText:"rgba(255, 253, 244, 0.98)",pickerShell:"linear-gradient(135deg, rgba(51, 65, 18, 0.92), rgba(28, 18, 8, 0.82))",sceneGlow:"rgba(255, 178, 95, 0.26)",horizon:"rgba(255, 201, 87, 0.2)",rail:"rgba(250, 237, 200, 0.24)",swatches:["#fef3c7","#b7f267","#77b51d","#ffaf68"]},{id:"nightgrove",name:"Night Grove",primary:"#34d399",secondary:"#059669",tertiary:"#064e3b",accent:"#818cf8",background:"linear-gradient(135deg, #081412 0%, #0d2a2b 40%, #110c1d 100%)",surfaceBg:"linear-gradient(to bottom, #9cf9d2 0%, #30c98f 28%, #0e695c 100%)",shallowBg:"linear-gradient(to bottom, #24ad82 0%, #0b6154 58%, #181026 100%)",deepBg:"linear-gradient(to bottom, #0b5f53 0%, #1b112e 62%, #090912 100%)",abyssBg:"linear-gradient(to bottom, #12192c 0%, #070912 76%, #000 100%)",panelSurface:"linear-gradient(180deg, rgba(11, 52, 48, 0.72), rgba(13, 9, 28, 0.58))",panelEdge:"rgba(129, 242, 203, 0.28)",panelInset:"rgba(244, 244, 255, 0.14)",panelGlow:"rgba(129, 140, 248, 0.18)",softText:"rgba(232, 251, 245, 0.83)",strongText:"rgba(249, 255, 252, 0.98)",pickerShell:"linear-gradient(135deg, rgba(10, 48, 44, 0.94), rgba(14, 10, 32, 0.82))",sceneGlow:"rgba(111, 214, 255, 0.24)",horizon:"rgba(129, 140, 248, 0.18)",rail:"rgba(223, 255, 242, 0.22)",swatches:["#c3fff4","#3ae2a4","#0d8478","#a2acff"]}]},{id:"desert",name:"Desert",title:"Desert Mirage",shortLabel:"DUNE",icon:"DS",platform:"cactus",guide:{title:"Mirage Guide",text:"Content sits on cactus planks and small mesas while dunes and heat waves slide with the scroll."},travelCreature:"hawk",travelLabel:"Mesa Hawk",palettes:[{id:"goldenmirage",name:"Golden Mirage",primary:"#fbbf24",secondary:"#f97316",tertiary:"#7c2d12",accent:"#fde68a",background:"linear-gradient(135deg, #1d1206 0%, #532e0d 40%, #180b05 100%)",surfaceBg:"linear-gradient(to bottom, #fde68a 0%, #f5b52d 30%, #c96a13 100%)",shallowBg:"linear-gradient(to bottom, #f0aa28 0%, #c96f1a 58%, #50260d 100%)",deepBg:"linear-gradient(to bottom, #b75f16 0%, #4a220d 64%, #1e0d05 100%)",abyssBg:"linear-gradient(to bottom, #3a1c0c 0%, #140905 76%, #000 100%)",panelSurface:"linear-gradient(180deg, rgba(93, 52, 16, 0.72), rgba(28, 12, 6, 0.6))",panelEdge:"rgba(255, 213, 138, 0.32)",panelInset:"rgba(255, 245, 216, 0.14)",panelGlow:"rgba(251, 191, 36, 0.2)",softText:"rgba(255, 247, 230, 0.84)",strongText:"rgba(255, 251, 241, 0.98)",pickerShell:"linear-gradient(135deg, rgba(82, 45, 13, 0.92), rgba(24, 10, 5, 0.82))",sceneGlow:"rgba(255, 205, 96, 0.26)",horizon:"rgba(255, 238, 175, 0.22)",rail:"rgba(255, 225, 167, 0.28)",swatches:["#fff0b2","#f7c145","#ef7e1a","#8d3419"]},{id:"sunsetmesa",name:"Sunset Mesa",primary:"#fb923c",secondary:"#ea580c",tertiary:"#7f1d1d",accent:"#fcd34d",background:"linear-gradient(135deg, #22100b 0%, #5f2414 42%, #250f0d 100%)",surfaceBg:"linear-gradient(to bottom, #fed7aa 0%, #f98d43 28%, #dc4c11 100%)",shallowBg:"linear-gradient(to bottom, #f07b34 0%, #c84313 58%, #5a1a15 100%)",deepBg:"linear-gradient(to bottom, #ba4218 0%, #5a1a15 64%, #230d0e 100%)",abyssBg:"linear-gradient(to bottom, #451515 0%, #160709 74%, #000 100%)",panelSurface:"linear-gradient(180deg, rgba(93, 34, 17, 0.74), rgba(34, 11, 10, 0.6))",panelEdge:"rgba(255, 190, 134, 0.28)",panelInset:"rgba(255, 239, 220, 0.12)",panelGlow:"rgba(251, 146, 60, 0.2)",softText:"rgba(255, 241, 232, 0.84)",strongText:"rgba(255, 250, 246, 0.98)",pickerShell:"linear-gradient(135deg, rgba(91, 32, 18, 0.92), rgba(33, 10, 10, 0.82))",sceneGlow:"rgba(255, 132, 71, 0.24)",horizon:"rgba(255, 174, 102, 0.2)",rail:"rgba(255, 230, 196, 0.22)",swatches:["#ffe2c2","#ff9d57","#e85b19","#932233"]},{id:"oasisjade",name:"Oasis Jade",primary:"#34d399",secondary:"#14b8a6",tertiary:"#155e75",accent:"#f59e0b",background:"linear-gradient(135deg, #14110a 0%, #2d3522 38%, #102326 100%)",surfaceBg:"linear-gradient(to bottom, #d9f99d 0%, #4ade80 28%, #12938f 100%)",shallowBg:"linear-gradient(to bottom, #35c979 0%, #157c76 58%, #17353a 100%)",deepBg:"linear-gradient(to bottom, #127170 0%, #17353a 62%, #0d1718 100%)",abyssBg:"linear-gradient(to bottom, #14303a 0%, #081012 75%, #000 100%)",panelSurface:"linear-gradient(180deg, rgba(24, 64, 55, 0.72), rgba(17, 24, 19, 0.62))",panelEdge:"rgba(141, 255, 208, 0.26)",panelInset:"rgba(255, 250, 235, 0.12)",panelGlow:"rgba(52, 211, 153, 0.18)",softText:"rgba(240, 255, 241, 0.84)",strongText:"rgba(252, 255, 253, 0.98)",pickerShell:"linear-gradient(135deg, rgba(18, 60, 53, 0.92), rgba(20, 18, 11, 0.82))",sceneGlow:"rgba(72, 247, 187, 0.2)",horizon:"rgba(255, 220, 125, 0.18)",rail:"rgba(220, 255, 237, 0.2)",swatches:["#efffd4","#75f1a5","#18bba6","#ffb949"]}]},{id:"sky",name:"Sky",title:"Sky Kingdom",shortLabel:"SKY",icon:"SK",platform:"cloud",guide:{title:"Cloud Guide",text:"Cards drift on clouds and soft islands while winds, birds, and vapor make the page feel airborne."},travelCreature:"bird",travelLabel:"Wind Bird",palettes:[{id:"dawnlift",name:"Dawn Lift",primary:"#7dd3fc",secondary:"#60a5fa",tertiary:"#4338ca",accent:"#f9a8d4",background:"linear-gradient(135deg, #081220 0%, #1c3270 38%, #170f34 100%)",surfaceBg:"linear-gradient(to bottom, #dbeafe 0%, #8dd8ff 32%, #6898ff 100%)",shallowBg:"linear-gradient(to bottom, #9ddfff 0%, #709dff 56%, #322c82 100%)",deepBg:"linear-gradient(to bottom, #678ef4 0%, #342b7e 64%, #120e29 100%)",abyssBg:"linear-gradient(to bottom, #282560 0%, #0d0c18 74%, #000 100%)",panelSurface:"linear-gradient(180deg, rgba(28, 60, 117, 0.62), rgba(19, 13, 52, 0.54))",panelEdge:"rgba(212, 236, 255, 0.38)",panelInset:"rgba(255, 255, 255, 0.24)",panelGlow:"rgba(125, 211, 252, 0.24)",softText:"rgba(239, 247, 255, 0.84)",strongText:"rgba(252, 252, 255, 0.99)",pickerShell:"linear-gradient(135deg, rgba(26, 52, 110, 0.92), rgba(18, 12, 48, 0.8))",sceneGlow:"rgba(165, 229, 255, 0.34)",horizon:"rgba(255, 183, 226, 0.18)",rail:"rgba(235, 246, 255, 0.32)",swatches:["#ffffff","#b3ebff","#82adff","#f9b0da"]},{id:"sunsetdrift",name:"Sunset Drift",primary:"#f9a8d4",secondary:"#c084fc",tertiary:"#7c3aed",accent:"#fdba74",background:"linear-gradient(135deg, #170e29 0%, #412370 38%, #311126 100%)",surfaceBg:"linear-gradient(to bottom, #ffe4f4 0%, #fcb3da 28%, #b687ff 100%)",shallowBg:"linear-gradient(to bottom, #f4a1d8 0%, #af7cf7 56%, #5f308c 100%)",deepBg:"linear-gradient(to bottom, #a768ef 0%, #5d2f88 64%, #240d1f 100%)",abyssBg:"linear-gradient(to bottom, #45285f 0%, #120810 76%, #000 100%)",panelSurface:"linear-gradient(180deg, rgba(67, 34, 98, 0.62), rgba(34, 11, 28, 0.56))",panelEdge:"rgba(255, 205, 238, 0.3)",panelInset:"rgba(255, 244, 250, 0.2)",panelGlow:"rgba(249, 168, 212, 0.24)",softText:"rgba(255, 240, 248, 0.85)",strongText:"rgba(255, 250, 253, 0.99)",pickerShell:"linear-gradient(135deg, rgba(70, 34, 104, 0.92), rgba(35, 12, 30, 0.82))",sceneGlow:"rgba(255, 182, 215, 0.28)",horizon:"rgba(255, 190, 127, 0.18)",rail:"rgba(255, 230, 243, 0.28)",swatches:["#fff0f8","#f7badf","#be90ff","#ffc38c"]},{id:"auroraflow",name:"Aurora Flow",primary:"#67e8f9",secondary:"#22c55e",tertiary:"#2563eb",accent:"#e879f9",background:"linear-gradient(135deg, #071629 0%, #0f3f43 36%, #120c32 100%)",surfaceBg:"linear-gradient(to bottom, #dbfefe 0%, #6ff5e8 30%, #55c27f 100%)",shallowBg:"linear-gradient(to bottom, #74f1ee 0%, #33bb97 58%, #2051a2 100%)",deepBg:"linear-gradient(to bottom, #37ad8f 0%, #2550a4 64%, #0f1031 100%)",abyssBg:"linear-gradient(to bottom, #17316c 0%, #080916 74%, #000 100%)",panelSurface:"linear-gradient(180deg, rgba(12, 54, 66, 0.64), rgba(18, 11, 50, 0.56))",panelEdge:"rgba(162, 253, 249, 0.28)",panelInset:"rgba(250, 254, 255, 0.2)",panelGlow:"rgba(104, 232, 249, 0.22)",softText:"rgba(236, 255, 252, 0.84)",strongText:"rgba(251, 255, 255, 0.99)",pickerShell:"linear-gradient(135deg, rgba(12, 56, 66, 0.92), rgba(16, 12, 46, 0.82))",sceneGlow:"rgba(120, 249, 255, 0.28)",horizon:"rgba(232, 121, 249, 0.16)",rail:"rgba(230, 255, 251, 0.28)",swatches:["#efffff","#77f3f8","#5bd38f","#fb9cff"]}]},{id:"city",name:"City",title:"Urban Nights",shortLabel:"CITY",icon:"CT",platform:"billboard",guide:{title:"Street Guide",text:"Billboard cards, neon rails, and skyline motion make the page feel like a futuristic city walk."},travelCreature:"glider",travelLabel:"Metro Glider",palettes:[{id:"neonmetro",name:"Neon Metro",primary:"#f472b6",secondary:"#ec4899",tertiary:"#7e22ce",accent:"#22d3ee",background:"linear-gradient(135deg, #120813 0%, #38122f 38%, #090d20 100%)",surfaceBg:"linear-gradient(to bottom, #fde7f3 0%, #ff89cf 28%, #b743ff 100%)",shallowBg:"linear-gradient(to bottom, #ff73c4 0%, #b844ff 58%, #16234e 100%)",deepBg:"linear-gradient(to bottom, #af40ff 0%, #1a2456 64%, #090a19 100%)",abyssBg:"linear-gradient(to bottom, #171a40 0%, #06060f 74%, #000 100%)",panelSurface:"linear-gradient(180deg, rgba(62, 18, 60, 0.66), rgba(8, 12, 34, 0.56))",panelEdge:"rgba(255, 152, 213, 0.34)",panelInset:"rgba(255, 240, 252, 0.18)",panelGlow:"rgba(34, 211, 238, 0.2)",softText:"rgba(255, 239, 248, 0.85)",strongText:"rgba(255, 249, 253, 0.99)",pickerShell:"linear-gradient(135deg, rgba(61, 17, 59, 0.92), rgba(10, 12, 34, 0.82))",sceneGlow:"rgba(255, 102, 204, 0.28)",horizon:"rgba(34, 211, 238, 0.18)",rail:"rgba(255, 220, 244, 0.26)",swatches:["#fff0f8","#ff7ccc","#c55eff","#4aeaff"]},{id:"goldline",name:"Gold Line",primary:"#f59e0b",secondary:"#f97316",tertiary:"#9d174d",accent:"#38bdf8",background:"linear-gradient(135deg, #16100a 0%, #412113 40%, #12091d 100%)",surfaceBg:"linear-gradient(to bottom, #fff0d6 0%, #fbbf24 28%, #f97316 100%)",shallowBg:"linear-gradient(to bottom, #f7b829 0%, #f57f1f 58%, #8c1c4b 100%)",deepBg:"linear-gradient(to bottom, #df7720 0%, #8c1c4b 62%, #13091f 100%)",abyssBg:"linear-gradient(to bottom, #541a39 0%, #09060d 76%, #000 100%)",panelSurface:"linear-gradient(180deg, rgba(64, 28, 12, 0.68), rgba(18, 10, 29, 0.58))",panelEdge:"rgba(255, 209, 122, 0.3)",panelInset:"rgba(255, 247, 230, 0.16)",panelGlow:"rgba(56, 189, 248, 0.16)",softText:"rgba(255, 243, 233, 0.84)",strongText:"rgba(255, 250, 245, 0.99)",pickerShell:"linear-gradient(135deg, rgba(66, 31, 15, 0.92), rgba(19, 10, 29, 0.82))",sceneGlow:"rgba(255, 196, 92, 0.24)",horizon:"rgba(56, 189, 248, 0.16)",rail:"rgba(255, 229, 191, 0.24)",swatches:["#fff4df","#ffc245","#ff8f2b","#6adeff"]},{id:"rainglass",name:"Rain Glass",primary:"#93c5fd",secondary:"#3b82f6",tertiary:"#1e3a8a",accent:"#f472b6",background:"linear-gradient(135deg, #070d18 0%, #11284b 38%, #130d20 100%)",surfaceBg:"linear-gradient(to bottom, #ecf5ff 0%, #9dcfff 28%, #3d7ff5 100%)",shallowBg:"linear-gradient(to bottom, #91c5ff 0%, #4b7df0 58%, #282466 100%)",deepBg:"linear-gradient(to bottom, #4e6fe7 0%, #202357 64%, #0b0812 100%)",abyssBg:"linear-gradient(to bottom, #182344 0%, #07080f 74%, #000 100%)",panelSurface:"linear-gradient(180deg, rgba(14, 36, 68, 0.68), rgba(18, 11, 28, 0.56))",panelEdge:"rgba(183, 224, 255, 0.32)",panelInset:"rgba(255, 255, 255, 0.2)",panelGlow:"rgba(148, 197, 253, 0.2)",softText:"rgba(238, 245, 255, 0.85)",strongText:"rgba(252, 253, 255, 0.99)",pickerShell:"linear-gradient(135deg, rgba(15, 36, 69, 0.92), rgba(18, 11, 28, 0.82))",sceneGlow:"rgba(147, 197, 253, 0.26)",horizon:"rgba(244, 114, 182, 0.16)",rail:"rgba(232, 245, 255, 0.28)",swatches:["#f5fbff","#9fd4ff","#4f7eff","#ffa1d2"]}]}];mr[0].id;function o5(t){return mr.find(e=>e.id===t)??mr[0]}function l5(t,e){return t.palettes.find(n=>n.id===e)??t.palettes[0]}function p0(t,e){return{...t,...e}}const c5=360/mr.length;function u5({worlds:t=mr,activeWorld:e,activePalette:n,onWorldChange:i,onPaletteChange:r}){return w.jsx("aside",{className:B.colorPickerContainer,children:w.jsxs("div",{className:B.themePickerShell,style:{"--picker-primary":n.primary,"--picker-secondary":n.secondary,"--picker-tertiary":n.tertiary,"--picker-accent":n.accent,"--picker-shell":n.pickerShell},children:[w.jsxs("div",{className:B.themePickerMeta,children:[w.jsx("span",{className:B.themePickerEyebrow,children:"World Circle"}),w.jsx("strong",{children:e.title}),w.jsxs("span",{children:[n.name," palette"]})]}),w.jsxs("div",{className:B.themeOrbit,children:[w.jsx("div",{className:B.themeOrbitGlow,"aria-hidden":"true"}),w.jsxs("div",{className:B.themeCore,children:[w.jsx("span",{className:B.themeCoreCode,children:e.shortLabel}),w.jsx("strong",{className:B.themeCoreTitle,children:e.name}),w.jsx("span",{className:B.themeCorePalette,children:n.name})]}),t.map((s,a)=>{const o=s.id===e.id,l=s.palettes[0];return w.jsxs("button",{type:"button",className:`${B.themeOrbitNode} ${o?B.themeOrbitNodeActive:""}`,style:{"--orbit-angle":`${a*c5}deg`,"--node-primary":l.primary,"--node-secondary":l.secondary,"--node-accent":l.accent},onClick:()=>i(s),"aria-pressed":o,title:`Switch to ${s.title}`,children:[w.jsx("span",{className:B.themeOrbitNodeInner,children:s.icon}),w.jsx("span",{className:B.themeOrbitNodeLabel,children:s.name})]},s.id)})]}),w.jsxs("div",{className:B.palettePicker,children:[w.jsxs("div",{className:B.palettePickerHeader,children:[w.jsx("span",{className:B.palettePickerTitle,children:"Theme Colors"}),w.jsx("span",{className:B.palettePickerHint,children:"Each world has its own preset look"})]}),w.jsx("div",{className:B.palettePickerGrid,children:e.palettes.map(s=>{const a=s.id===n.id;return w.jsxs("button",{type:"button",className:`${B.colorOption} ${a?B.active:""}`,onClick:()=>r(s),"aria-pressed":a,title:`${e.name} - ${s.name}`,style:{"--swatch-a":s.swatches[0],"--swatch-b":s.swatches[1],"--swatch-c":s.swatches[2],"--swatch-d":s.swatches[3]},children:[w.jsx("span",{className:B.colorOptionCore}),w.jsx("span",{className:B.colorOptionLabel,children:s.name})]},s.id)})})]})]})})}const d5=[{name:"HTML 5",icon:w.jsx(My,{size:"22px",color:"white"}),cssName:"html"},{name:"CSS 3",icon:w.jsx(Ty,{size:"22px",color:"white"}),cssName:"css"},{name:"JavaScript",icon:w.jsx(Cy,{size:"22px",color:"white"}),cssName:"java-script"},{name:"TypeScript",icon:w.jsx(Oy,{size:"22px",color:"white"}),cssName:"type-script"},{name:"React",icon:w.jsx(z_,{size:"22px",color:"white"}),cssName:"react"},{name:"Express",icon:w.jsx(Uy,{size:"22px",color:"white"}),cssName:"express"},{name:"Bootstrap",icon:w.jsx(wy,{size:"22px",color:"white"}),cssName:"redux"},{name:"Tailwind",icon:w.jsx(Ay,{size:"22px",color:"white"}),cssName:"recoil"},{name:"React Query",icon:w.jsx(Fy,{size:"22px",color:"white"}),cssName:"react-query"},{name:"Responsive",icon:w.jsx(Iy,{size:"22px",color:"white"}),cssName:"responsive"},{name:"Git",icon:w.jsx(Py,{size:"22px",color:"white"}),cssName:"git"},{name:"C++",icon:w.jsx(Ny,{size:"22px",color:"white"}),cssName:"cpp"},{name:"Problem Solving",icon:w.jsx(Ly,{size:"22px",color:"white"}),cssName:"problem-solving"}],f5=[{name:"School Management System",description:"Architected a full-stack educational platform handling student lifecycle management, attendance tracking, grade management, and admin dashboards. Engineered scalable microservices with MongoDB and Express, crafted responsive React interfaces that dynamically adapt to different user roles (admin, teacher, student). Currently powering real-world school operations with secure authentication and role-based access control.",image:Hy,priority:!0,featured:!1,inProgress:!0,hasDetails:!0,frontendGithub:"https://github.com/abdul-samad-91/School_Management_System",backendGithub:"https://github.com/abdul-samad-91/School_Management_System_Server"},{name:"TaskMaster - Task Management App",link:"https://abirafriditaskmaster.vercel.app/",github:"https://github.com/Abirullah/To-dose-app",description:"Built an intuitive productivity powerhouse where users organize tasks, collaborate with teams, and leverage AI insights. Features include permission-based task sharing, real-time chat integration, submission tracking, and beautiful dark-mode UI that's actually enjoyable to use. Deployed on Vercel with blazing-fast load times and zero downtime.",image:ky,priority:!0,featured:!0},{name:"EchoTune - Music Streaming Platform",link:"https://echotuneapp.vercel.app/",github:"https://github.com/Abirullah/Music-Wed-FrontEnd",description:"Created a vibrant music discovery ecosystem where content creators upload tracks and listeners explore curated collections. Engineered a dual-role system with creator analytics, playlist curation, and seamless audio streaming. The UI celebrates music culture with gradient aesthetics and smooth interactions that feel like the platform understands your vibe.",image:By,priority:!0,featured:!0},{name:"Weather App",link:"https://Abirullah.github.io/React-wather-app",github:"https://github.com/Abirullah/React-wather-app",description:"Designed a clean, minimalist weather companion that integrates real-time API data to deliver accurate forecasts by city. Users get straightforward weather info without clutter, with responsive layouts that work beautifully on phones, tablets, and desktops. Sometimes simple is perfect.",image:zy,priority:!1}],h5=[{school:"IM Sciences University",degree:"Bachelor of Science",field:"Computer Science",year:"Pursuing",description:"Building strong foundations in algorithms, data structures, and software engineering principles. Learning not just to code, but to think like a computer scientist."},{school:"Hadaf Group of Colleges",degree:"Higher Secondary Certificate (HSC)",field:"Computer Science",year:"Completed",description:"Developed analytical and problem-solving skills through intensive computer science, mathematics, and programming studies, laying the groundwork for technical excellence."}],p5=[{company:"Encova Solutions",title:"MEAN Stack Developer",period:"Present",highlights:["Build responsive, pixel-perfect React interfaces that users genuinely enjoy","Design and deploy scalable Node.js/Express APIs handling thousands of requests","Architect MongoDB schemas for complex data relationships","Improve app performance, optimize bundle sizes, and ensure accessibility standards","Integrate third-party services (payments, auth, analytics)","Mentor junior developers and establish best practices for component reusability"]},{company:"Self Project",title:"MERN Stack Developer",period:"Ongoing",highlights:["Built 4+ production-ready web applications showcasing MERN stack expertise","Specialized in MERN stack (MongoDB, Express, React, Node.js) with focus on performance and user experience","Managed full project lifecycle: requirements → design → development → deployment","Architected REST APIs and integrated complex data workflows with modern patterns"]}],m5=[{id:"fxFish1",variant:"cyan",dir:"l2r",y:"16vh",scale:.85,opacity:.26,dur:"22s",delay:"-6s",z:2},{id:"fxFish2",variant:"gold",dir:"r2l",y:"26vh",scale:.7,opacity:.22,dur:"28s",delay:"-18s",z:1},{id:"fxFish3",variant:"blue",dir:"l2r",y:"42vh",scale:.62,opacity:.18,dur:"34s",delay:"-22s",z:1},{id:"fxFish4",variant:"pink",dir:"r2l",y:"64vh",scale:.8,opacity:.2,dur:"24s",delay:"-12s",z:2},{id:"fxFish5",variant:"cyan",dir:"l2r",y:"78vh",scale:.72,opacity:.16,dur:"30s",delay:"-26s",z:1},{id:"fxFish6",variant:"gold",dir:"r2l",y:"84vh",scale:.58,opacity:.14,dur:"36s",delay:"-10s",z:0}],g5=[{id:"fxB1",x:"14vw",size:"10px",drift:"-18px",opacity:.22,dur:"12s",delay:"-4s"},{id:"fxB2",x:"24vw",size:"7px",drift:"12px",opacity:.18,dur:"10s",delay:"-8s"},{id:"fxB3",x:"36vw",size:"12px",drift:"-10px",opacity:.2,dur:"14s",delay:"-2s"},{id:"fxB4",x:"52vw",size:"8px",drift:"20px",opacity:.16,dur:"11s",delay:"-6s"},{id:"fxB5",x:"66vw",size:"14px",drift:"-22px",opacity:.2,dur:"16s",delay:"-10s"},{id:"fxB6",x:"78vw",size:"9px",drift:"14px",opacity:.18,dur:"13s",delay:"-12s"},{id:"fxB7",x:"88vw",size:"7px",drift:"-16px",opacity:.14,dur:"10s",delay:"-14s"},{id:"fxB8",x:"8vw",size:"6px",drift:"10px",opacity:.12,dur:"9s",delay:"-16s"}],sl={sea:{about:"Glass reef panels and soft currents make the profile feel like it is suspended underwater.",projects:"Project cards drift like illuminated capsules between fish, bubbles, and blue light.",contact:"Send a message through the current and I will surface with a reply.",finale:"We finish the dive beside a deep-sea wreck and a quiet navigation dock."},forest:{about:"The profile grows on tree decks, branches, and mossy platforms spread through the canopy.",projects:"Projects rest on timber platforms between trunks so each card feels built into the forest.",contact:"Drop a note at the woodland outpost and I will write back from the trail.",finale:"The final stop becomes a moonlit lookout between roots and lanterns."},desert:{about:"The profile lands on cactus planks and low mesas with warm air and moving mirage light.",projects:"Projects sit on carved desert decks above dunes so the content feels anchored in the sand.",contact:"Leave a message at the canyon station and I will answer from the next ridge.",finale:"The ending scene becomes a mesa camp with dust, rails, and a quiet horizon."},sky:{about:"The profile is lifted onto cloud decks so each section feels like it is carried by the wind.",projects:"Projects float on cloud islands with vapor trails and birds moving across the scene.",contact:"Leave a signal in the clouds and I will glide back with a reply.",finale:"The last section turns into a floating dock above the clouds."},city:{about:"The profile is framed on neon billboards and rain glass panels above the avenue.",projects:"Projects stack into skyline displays with urban glow and moving traffic lines.",contact:"Send a note through the night grid and I will answer from the city lights.",finale:"The final stop becomes a rooftop deck above the skyline."}};function Sf(t){return Math.min(1,Math.max(0,t))}function _s(t,e,n){const i=Sf((n-t)/(e-t));return i*i*(3-2*i)}function _5(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}function v5(t){return t<.5?16*t*t*t*t*t:1-Math.pow(-2*t+2,5)/2}function Iu({world:t,align:e="left",sectionTitle:n,text:i}){return w.jsxs("div",{className:B.guideMessage,"data-dir":e,children:[w.jsx("div",{className:B.guideBadge,children:w.jsx("span",{children:t.icon})}),w.jsxs("div",{className:B.guideBubble,children:[w.jsx("h3",{children:n}),w.jsx("p",{children:i})]})]})}function al({section:t,children:e}){return w.jsxs("div",{className:B.platformShell,"data-section":t,children:[w.jsx("span",{className:B.platformAura,"aria-hidden":"true"}),w.jsx("span",{className:B.platformFrame,"aria-hidden":"true"}),w.jsx("span",{className:B.platformDock,"aria-hidden":"true"}),e]})}function x5(){const t=De.useRef(null),e=De.useRef(0),n=De.useRef({x:window.innerWidth*.5,y:window.innerHeight*.35}),i=De.useRef(null),r=De.useRef(null),s=De.useRef(null),a=De.useRef(!1),o=De.useRef(null),l=De.useRef(null),[c,h]=De.useState(!1),[f,u]=ry("xnjnznvd"),[p,_]=De.useState("home"),[S,g]=De.useState(()=>mr[0]),[d,m]=De.useState(()=>mr[0].palettes[0]),[y,M]=De.useState(!1),[b,C]=De.useState(null),R=De.useMemo(()=>f5.slice(0,3),[]),v=De.useMemo(()=>p0(S,d),[S,d]);De.useEffect(()=>{function L(Z){c&&o.current&&!o.current.contains(Z.target)&&l.current&&!l.current.contains(Z.target)&&h(!1)}return document.addEventListener("mousedown",L),()=>document.removeEventListener("mousedown",L)},[c]);const T=De.useMemo(()=>{var L,Z;return typeof window>"u"?!1:((Z=(L=window.matchMedia)==null?void 0:L.call(window,"(prefers-reduced-motion: reduce)"))==null?void 0:Z.matches)??!1},[]),[W,I]=De.useState(!1),V=De.useRef(null),[U,$]=De.useState(!1),F=De.useRef(null),[P,O]=De.useState(!1),H=De.useRef(null),[G,te]=De.useState(!1),ie=De.useRef(null),[ae,ve]=De.useState(null);De.useEffect(()=>{const L=t.current;if(!L)return;let Z=0,re=window.scrollY,we=n.current,pe=0;function Ne(){const ze=document.documentElement;pe=Math.max(0,ze.scrollHeight-window.innerHeight)}function st(){Z=0;const ze=pe>0?Sf(re/pe):0;e.current=ze,ze<.25?_("home"):ze<.5?_("about"):ze<.75?_("projects"):_("contact");const D=1-_s(.02,.24,ze),at=_s(.1,.34,ze)*(1-_s(.34,.56,ze)),Fe=_s(.44,.7,ze)*(1-_s(.7,.9,ze)),Je=_s(.72,.98,ze);L.style.setProperty("--surfaceA",D.toFixed(4)),L.style.setProperty("--shallowA",at.toFixed(4)),L.style.setProperty("--deepA",Fe.toFixed(4)),L.style.setProperty("--abyssA",Je.toFixed(4)),L.style.setProperty("--scrollP",ze.toFixed(5)),L.style.setProperty("--mx",`${we.x}px`),L.style.setProperty("--my",`${we.y}px`)}function Oe(){Z||(Z=window.requestAnimationFrame(st))}function $e(){re=window.scrollY,Oe()}function Qe(ze){we={x:ze.clientX,y:ze.clientY},n.current=we,Oe()}function Ue(){Ne(),re=window.scrollY,Oe()}return Ne(),window.addEventListener("scroll",$e,{passive:!0}),window.addEventListener("mousemove",Qe,{passive:!0}),window.addEventListener("resize",Ue,{passive:!0}),st(),()=>{window.removeEventListener("scroll",$e),window.removeEventListener("mousemove",Qe),window.removeEventListener("resize",Ue),window.cancelAnimationFrame(Z)}},[]),De.useEffect(()=>{const L=new Map;F.current&&L.set(F.current,$),H.current&&L.set(H.current,O),ie.current&&L.set(ie.current,te),V.current&&L.set(V.current,I);const Z=new IntersectionObserver(re=>{for(const we of re){const pe=L.get(we.target);pe&&pe(we.isIntersecting)}},{root:null,threshold:.25});for(const re of L.keys())Z.observe(re);return()=>Z.disconnect()},[]),De.useEffect(()=>{const L=t.current;if(!L)return;let Z=0;function re(){Z&&(window.cancelAnimationFrame(Z),Z=0)}function we(pe){var N,K,ee;const Ne=((N=pe.target)==null?void 0:N.nodeType)===1?pe.target:(K=pe.target)==null?void 0:K.parentElement,st=(ee=Ne==null?void 0:Ne.closest)==null?void 0:ee.call(Ne,'a[href^="#"]');if(!st||pe.defaultPrevented||pe.button&&pe.button!==0||pe.metaKey||pe.ctrlKey||pe.shiftKey||pe.altKey)return;const Oe=st.getAttribute("href");if(!Oe||Oe==="#")return;const $e=document.querySelector(Oe);if(!$e)return;pe.preventDefault();const Qe=document.documentElement,Ue=Math.max(0,Qe.scrollHeight-window.innerHeight),ze=window.scrollY+$e.getBoundingClientRect().top-12,D=Math.min(Ue,Math.max(0,ze));if(history.pushState(null,"",Oe),T){window.scrollTo(0,D);return}re();const at=window.scrollY,Fe=D-at,Je=performance.now(),Ee=Math.abs(Fe),A=Math.min(2400,Math.max(1100,Math.pow(Ee,.84)*5.6));function x(q){const se=Sf((q-Je)/A),ne=_5(se)*.6+v5(se)*.4;window.scrollTo(0,at+Fe*ne),se<1?Z=window.requestAnimationFrame(x):Z=0}Z=window.requestAnimationFrame(x)}return L.addEventListener("click",we),()=>{L.removeEventListener("click",we),re()}},[T]),De.useEffect(()=>{const L=t.current;L&&(L.style.setProperty("--theme-primary",v.primary),L.style.setProperty("--theme-secondary",v.secondary),L.style.setProperty("--theme-tertiary",v.tertiary),L.style.setProperty("--theme-accent",v.accent),L.style.setProperty("--theme-bg",v.background),L.style.setProperty("--env-surface-bg",v.surfaceBg),L.style.setProperty("--env-shallow-bg",v.shallowBg),L.style.setProperty("--env-deep-bg",v.deepBg),L.style.setProperty("--env-abyss-bg",v.abyssBg),L.style.setProperty("--panel-surface",v.panelSurface),L.style.setProperty("--panel-edge",v.panelEdge),L.style.setProperty("--panel-inset",v.panelInset),L.style.setProperty("--panel-glow",v.panelGlow),L.style.setProperty("--soft-text",v.softText),L.style.setProperty("--strong-text",v.strongText),L.style.setProperty("--scene-glow",v.sceneGlow),L.style.setProperty("--scene-horizon",v.horizon),L.style.setProperty("--platform-rail",v.rail),L.style.setProperty("--picker-shell",v.pickerShell),document.documentElement.style.setProperty("--body-bg",v.background),document.body.style.background=v.background)},[v]),De.useEffect(()=>{f.succeeded&&i.current&&i.current.querySelectorAll("input, textarea").forEach(Z=>{Z.value=""})},[f.succeeded]),De.useEffect(()=>{try{const L=o5(localStorage.getItem("portfolioWorld")),Z=l5(L,localStorage.getItem("portfolioPalette"));g(L),m(Z)}finally{a.current=!0}},[]),De.useEffect(()=>{a.current&&(localStorage.setItem("portfolioWorld",S.id),localStorage.setItem("portfolioPalette",d.id))},[d.id,S.id]),De.useEffect(()=>()=>{r.current&&window.clearTimeout(r.current),s.current&&window.clearTimeout(s.current)},[]);const Xe=L=>{m(L)},He=L=>{if(L.id===S.id)return;r.current&&window.clearTimeout(r.current),s.current&&window.clearTimeout(s.current);const Z=L.palettes[0],re=L.id==="sky"||S.id==="forest"?"bird":L.travelCreature,we=p0(L,Z);C({from:v,to:we,creature:re,payload:`${S.name} -> ${L.name}`}),M(!0),r.current=window.setTimeout(()=>{g(L),m(Z)},640),s.current=window.setTimeout(()=>{M(!1),C(null)},1800)};return w.jsxs("div",{ref:t,className:ln(B.stage,y&&B.transitioning),"data-environment":S.id,children:[b&&w.jsxs("div",{className:B.transitionOverlay,style:{"--travel-from":b.from.primary,"--travel-to":b.to.secondary},children:[w.jsxs("div",{className:B.transitionRoute,children:[w.jsx("div",{className:B.transitionWorldTag,children:b.from.name}),w.jsx("div",{className:B.transitionRibbon}),w.jsxs("div",{className:B.transitionPayload,children:[w.jsx("span",{className:B.transitionPayloadLabel,children:"Dragging the scene"}),w.jsx("strong",{children:b.payload})]}),w.jsx("div",{className:B.transitionCourier,"data-creature":b.creature,children:w.jsx("span",{className:B.transitionCourierBody})}),w.jsx("div",{className:B.transitionWorldTag,children:b.to.name})]}),w.jsx("div",{className:B.transitionText,children:b.creature==="bird"?`A bird is carrying ${b.from.name} into ${b.to.name}.`:`Traveling from ${b.from.name} to ${b.to.name}.`})]}),w.jsxs("div",{className:B.oceanBg,"aria-hidden":"true",children:[w.jsx("div",{className:B.bgSurface}),w.jsx("div",{className:B.bgShallow}),w.jsx("div",{className:B.bgDeep}),w.jsx("div",{className:B.bgAbyss}),w.jsx("div",{className:B.caustics}),w.jsx("div",{className:B.mouseLight}),w.jsx("div",{className:B.vignette})]}),w.jsxs("div",{className:B.worldParallax,"aria-hidden":"true",children:[w.jsx("div",{className:B.worldGlow}),w.jsx("div",{className:B.worldFar}),w.jsx("div",{className:B.worldMid}),w.jsx("div",{className:B.worldNear}),w.jsx("div",{className:B.worldTrail})]}),w.jsxs("div",{ref:o,className:B.themePickerWrapper,children:[w.jsx("button",{ref:l,type:"button",onClick:()=>h(L=>!L),className:ln(B.themePickerButton,c&&B.hiddenPickerButton),children:w.jsx("div",{className:B.themePickerInner,children:"🎨"})}),c&&w.jsx("div",{className:B.themePickerPopover,children:w.jsx(u5,{worlds:mr,activeWorld:S,activePalette:d,onWorldChange:He,onPaletteChange:Xe})})]}),w.jsx(Mw,{progressRef:e,mouseRef:n,reducedMotion:T,environment:S.id,theme:v}),w.jsx(a5,{progressRef:e,currentSection:p,className:B.globe3D}),w.jsxs("main",{className:B.content,children:[S.id==="sea"&&w.jsxs("div",{className:B.foregroundFx,"aria-hidden":"true",children:[g5.map(L=>w.jsx("span",{className:B.fxBubble,style:{"--x":L.x,"--s":L.size,"--drift":L.drift,"--o":L.opacity,"--dur":L.dur,"--delay":L.delay}},L.id)),m5.map(L=>w.jsx("div",{className:B.fxFish,"data-dir":L.dir,style:{"--y":L.y,"--scale":L.scale,"--o":L.opacity,"--dur":L.dur,"--delay":L.delay,"--z":L.z},children:w.jsx(Ew,{className:B.fxFishSvg,variant:L.variant,flipped:L.dir==="r2l"})},L.id))]}),w.jsx("section",{id:"Home",className:ln(B.section,B.surface),children:w.jsxs("div",{className:B.sectionInner,children:[w.jsx("div",{className:B.surfaceTop,"aria-hidden":"true"}),w.jsx(al,{section:"hero",children:w.jsxs("div",{className:B.hero,children:[w.jsxs("div",{className:B.heroBadge,children:["MEAN Stack Developer • Encova Solutions • ",S.title]}),w.jsxs("h1",{className:B.heroTitle,children:[w.jsx("span",{className:B.heroKicker,children:"HEY, I’M"})," Abirullah"]}),w.jsx("p",{className:B.heroSub,children:"I'm a full-stack developer obsessed with building beautiful, performant web experiences. I craft React frontends that users love, Node/Express backends that scale effortlessly, and MongoDB databases that keep everything organized. Currently building amazing things at Encova Solutions while staying curious and pushing boundaries every single day."}),w.jsxs("div",{className:B.heroThemeLine,children:[w.jsx("span",{className:B.heroThemeDot}),"Walking through the ",S.name.toLowerCase()," with a ",d.name," finish"]}),w.jsxs("div",{className:B.heroActions,children:[w.jsx("a",{href:Vy,download:"Abirullah_Resume.pdf",target:"_blank",rel:"noopener noreferrer",children:w.jsx(ay,{children:"Download Resume"})}),w.jsx("a",{className:B.ghostCta,href:"#About",children:"Explore World"})]}),w.jsxs("div",{className:B.socialBubbles,children:[w.jsx("a",{className:B.socialBubble,href:"https://github.com/Abirullah",target:"_blank",rel:"noreferrer",children:w.jsx(Io,{size:"22px"})}),w.jsx("a",{className:B.socialBubble,href:"https://pk.linkedin.com/in/abir-afridi-2856a02b0",target:"_blank",rel:"noreferrer",children:w.jsx(Ey,{size:"22px"})}),w.jsx("a",{className:B.socialBubble,href:"mailto:abirafridi87@gmail.com?subject=SendMail&body=Description",target:"_blank",rel:"noreferrer",children:w.jsx(by,{size:"22px"})}),w.jsx("a",{className:B.socialBubble,href:"https://www.facebook.com/share/iPpuE83eD6ymf6PE/?mibextid=qi2Omg",target:"_blank",rel:"noreferrer",children:w.jsx(Ry,{size:"22px"})})]})]})}),w.jsxs("div",{className:B.scrollHint,"aria-hidden":"true",children:[w.jsx("div",{className:B.scrollMouse}),w.jsx("div",{className:B.scrollText,children:"Scroll"})]})]})}),w.jsx("section",{id:"About",ref:F,"data-inview":U?"true":"false",className:ln(B.section,B.shallows),children:w.jsxs("div",{className:B.sectionInner,children:[w.jsx(Iu,{world:S,align:"left",sectionTitle:"About Me",text:sl[S.id].about}),w.jsx(al,{section:"about",children:w.jsxs("div",{className:B.card,children:[w.jsxs("div",{className:B.cardHeader,children:[w.jsx("h2",{children:"About"}),w.jsx("p",{children:"More about me + what I’m good at."})]}),w.jsxs("div",{className:B.aboutGrid,children:[w.jsxs("div",{className:B.aboutText,children:[w.jsx("h3",{children:"Who I am"}),w.jsxs("p",{children:["I'm a ",w.jsx("span",{children:"MERN Stack developer"})," that obsesses over clean code and stunning user experiences. Currently, I'm at ",w.jsx("span",{children:"Encova Solutions"}),", building robust React interfaces and scalable Node/Express backends that actually make a difference.",w.jsx("br",{}),w.jsx("br",{}),"Beyond shipping features, I'm passionate about understanding ",w.jsx("span",{children:"why"})," technology works, mentoring other developers, and exploring the intersection of beautiful design and solid engineering. I believe great software is invisible—it just works, and users wonder how they ever lived without it.",w.jsx("br",{}),w.jsx("br",{}),w.jsx("strong",{children:"Let's collaborate"})," on projects where performance, UX, and code quality matter."]}),w.jsxs("ul",{className:B.aboutHighlights,children:[w.jsxs("li",{children:[w.jsx("strong",{children:"Frontend Mastery:"})," React, TypeScript, Tailwind CSS, Bootstrap, responsive & accessible UI"]}),w.jsxs("li",{children:[w.jsx("strong",{children:"Backend Strength:"})," Node.js, Express, RESTful APIs, MongoDB, authentication & authorization"]}),w.jsxs("li",{children:[w.jsx("strong",{children:"Core Values:"})," Performance optimization, clean code, user-first design, continuous learning"]})]})]}),w.jsxs("div",{className:B.skillsPanel,children:[w.jsx("h3",{children:"My Skills"}),w.jsx("div",{className:B.skillBubbles,children:d5.map((L,Z)=>w.jsxs("div",{className:ln(B.skillBubble,B[L.cssName]),children:[w.jsx("div",{className:B.skillName,children:L.name}),w.jsx("div",{className:B.skillIcon,children:L.icon})]},`skill${Z}`))})]})]})]})})]})}),w.jsx("section",{className:ln(B.section,B.education),children:w.jsxs("div",{className:B.sectionInner,children:[w.jsxs("div",{className:B.cardHeader,style:{marginBottom:"32px",textAlign:"center"},children:[w.jsx("h2",{children:"Education"}),w.jsx("p",{children:"Building foundations for a lifetime of learning"})]}),w.jsx("div",{className:B.educationGrid,children:h5.map((L,Z)=>w.jsxs("article",{className:B.eduCard,children:[w.jsx("div",{className:B.eduYear,children:L.year}),w.jsx("h3",{children:L.degree}),w.jsx("p",{className:B.eduSchool,children:L.school}),w.jsx("p",{className:B.eduField,children:L.field}),w.jsx("p",{className:B.eduDescription,children:L.description})]},`edu${Z}`))})]})}),w.jsx("section",{className:ln(B.section,B.experience),children:w.jsxs("div",{className:B.sectionInner,children:[w.jsxs("div",{className:B.cardHeader,style:{marginBottom:"32px",textAlign:"center"},children:[w.jsx("h2",{children:"Professional Journey"}),w.jsx("p",{children:"Where I've learned, built, and grown"})]}),w.jsx("div",{className:B.experienceTimeline,children:p5.map((L,Z)=>w.jsxs("article",{className:B.expCard,children:[w.jsxs("div",{className:B.expHeader,children:[w.jsx("h3",{children:L.title}),w.jsx("p",{className:B.expPeriod,children:L.period})]}),w.jsx("p",{className:B.expCompany,children:L.company}),w.jsx("ul",{className:B.expHighlights,children:L.highlights.map((re,we)=>w.jsx("li",{children:re},`highlight${we}`))})]},`exp${Z}`))})]})}),w.jsx("section",{id:"Projects",ref:H,"data-inview":P?"true":"false",className:ln(B.section,B.deep),children:w.jsxs("div",{className:B.sectionInner,children:[w.jsx(Iu,{world:S,align:"right",sectionTitle:"Projects",text:sl[S.id].projects}),w.jsx(al,{section:"projects",children:w.jsxs("div",{className:ln(B.card,B.projectsCard),children:[w.jsxs("div",{className:B.cardHeader,children:[w.jsx("h2",{children:"Projects"}),w.jsx("p",{children:"All projects in one section with richer 3D-inspired cards."}),w.jsxs("div",{className:B.projectHeadingMeta,children:[w.jsxs("span",{className:B.projectCounter,children:["Showing ",R.length," projects"]}),w.jsx("span",{className:B.projectHint,children:"Priority projects are highlighted"})]})]}),w.jsx("div",{className:B.projectGrid,children:R.map((L,Z)=>w.jsxs("article",{className:ln(B.projectCard,{[B.featuredProject]:L.featured}),children:[w.jsxs("div",{className:B.projectMedia,children:[w.jsx("img",{src:L.image,alt:`${L.name} preview`,loading:"lazy"}),L.featured&&w.jsx("div",{className:B.featuredBadge,children:w.jsx("span",{children:"Featured"})}),L.inProgress&&w.jsx("div",{className:B.inProgressBadge,children:w.jsx("span",{children:"In Progress"})})]}),w.jsxs("div",{className:B.projectBody,children:[w.jsx("div",{className:B.projectMetaRow,children:w.jsx("span",{className:ln(B.priorityTag,{[B.priorityTagHot]:L.priority,[B.priorityTagMuted]:!L.priority}),children:L.priority?"Priority Project":"More Project"})}),w.jsx("h3",{children:L.name}),w.jsx("p",{children:L.description}),w.jsx("div",{className:B.projectActions,children:L.hasDetails?w.jsx(ha,{width:"155px",height:"46px",backgroundColor:v.panelGlow,color:"white",onClick:()=>ve(L),icon:w.jsx(cm,{size:"22px",color:"white"}),children:"Details"}):w.jsxs(w.Fragment,{children:[w.jsx(ha,{width:"155px",height:"46px",backgroundColor:v.panelGlow,color:"white",link:L.link,icon:w.jsx(cm,{size:"22px",color:"white"}),children:"Live Demo"}),w.jsx(ha,{width:"120px",height:"46px",backgroundColor:v.panelInset,color:"white",link:L.github,icon:w.jsx(Io,{size:"22px",color:"white"}),children:"GitHub"})]})})]})]},`project${Z}`))})]})})]})}),ae&&w.jsx("div",{className:B.detailsModal,onClick:()=>ve(null),children:w.jsxs("div",{className:B.detailsContent,onClick:L=>L.stopPropagation(),children:[w.jsx("button",{className:B.closeButton,onClick:()=>ve(null),children:"×"}),w.jsx("h2",{children:ae.name}),w.jsx("p",{children:ae.description}),w.jsxs("div",{className:B.detailsActions,children:[w.jsx(ha,{width:"160px",height:"46px",backgroundColor:v.panelGlow,color:"white",link:ae.frontendGithub,icon:w.jsx(Io,{size:"22px",color:"white"}),children:"Frontend Code"}),w.jsx(ha,{width:"160px",height:"46px",backgroundColor:v.panelInset,color:"white",link:ae.backendGithub,icon:w.jsx(Io,{size:"22px",color:"white"}),children:"Backend Code"})]})]})}),w.jsx("section",{id:"Contact",ref:ie,"data-inview":G?"true":"false",className:ln(B.section,B.trench),children:w.jsxs("div",{className:B.sectionInner,children:[w.jsx(Iu,{world:S,align:"left",sectionTitle:"Contact",text:sl[S.id].contact}),w.jsx(al,{section:"contact",children:w.jsxs("div",{className:ln(B.card,B.contactCard),children:[w.jsxs("div",{className:B.cardHeader,children:[w.jsx("h2",{children:"Contact"}),w.jsx("p",{children:"Submit the form and I’ll get back to you as soon as possible."})]}),f.succeeded&&w.jsx("p",{className:B.success,children:"Thank you! Your message has been sent successfully."}),w.jsxs("form",{ref:i,onSubmit:u,className:ln(B.form,{[B.inactiveForm]:f.submitting}),children:[w.jsx(om,{width:"900px",height:"44px",name:"name",placeholder:"Enter your name",label:"Name",type:"text",required:!0}),w.jsx(om,{width:"900px",height:"44px",name:"email",placeholder:"Enter your email",label:"Email",type:"email",required:!0}),w.jsx(sm,{prefix:"Email",field:"email",errors:f.errors}),w.jsx(fy,{width:"900px",height:"220px",name:"message",placeholder:"Write your message",label:"Message",required:!0}),w.jsx(sm,{prefix:"Message",field:"message",errors:f.errors}),w.jsx("div",{className:B.formActions,children:w.jsx(gy,{icon:w.jsx(Dy,{size:"18px",color:"white"}),width:"190px",height:"54px",color:"white",backgroundColor:v.secondary,disabled:f.submitting,children:f.submitting?"Sending...":"Submit"})}),f.submitting&&w.jsx("div",{className:B.loader,children:w.jsx(xy,{})})]})]})})]})}),w.jsx("section",{ref:V,"data-inview":W?"true":"false",className:ln(B.section,B.abyss),children:w.jsxs("div",{className:B.sectionInner,children:[w.jsxs("div",{className:B.abyssText,children:[w.jsx("div",{className:B.abyssTag,children:S.title}),w.jsx("h2",{children:"Let’s Build Your Next App"}),w.jsxs("p",{children:[sl[S.id].finale," Need a modern UI, a fast landing page, or a complete full-stack product? I build React frontends and Node/Express backends with MongoDB, and I care about speed, clarity, and a smooth user experience."]})]}),w.jsxs("div",{className:B.titanicWrap,"aria-hidden":"true",children:[S.id==="sea"?w.jsx(ww,{className:B.titanic}):w.jsxs("div",{className:B.worldMonument,"data-scene":S.id,children:[w.jsx("span",{className:B.worldMonumentGlow}),w.jsx("span",{className:B.worldMonumentShape})]}),w.jsx("div",{className:B.sandFog})]}),w.jsx(Tw,{visible:W})]})})]})]})}function y5(){return w.jsx(x5,{})}Du.createRoot(document.getElementById("root")).render(w.jsx(ct.StrictMode,{children:w.jsx(y5,{})}));
