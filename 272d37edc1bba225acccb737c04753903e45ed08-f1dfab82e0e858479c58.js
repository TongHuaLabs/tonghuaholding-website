/*! For license information please see 272d37edc1bba225acccb737c04753903e45ed08-f1dfab82e0e858479c58.js.LICENSE.txt */
(self.webpackChunktonghuaholding_website=self.webpackChunktonghuaholding_website||[]).push([[742],{1763:function(e,t,r){var n;n=function(e){return function(){var t={"./node_modules/css-mediaquery/index.js":function(e,t){"use strict";t.match=function(e,t){return s(e).some((function(e){var r=e.inverse,n="all"===e.type||t.type===e.type;if(n&&r||!n&&!r)return!1;var a=e.expressions.every((function(e){var r=e.feature,n=e.modifier,a=e.value,o=t[r];if(!o)return!1;switch(r){case"orientation":case"scan":return o.toLowerCase()===a.toLowerCase();case"width":case"height":case"device-width":case"device-height":a=u(a),o=u(o);break;case"resolution":a=l(a),o=l(o);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":a=c(a),o=c(o);break;case"grid":case"color":case"color-index":case"monochrome":a=parseInt(a,10)||1,o=parseInt(o,10)||0}switch(n){case"min":return o>=a;case"max":return o<=a;default:return o===a}}));return a&&!r||!a&&r}))},t.parse=s;var r=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,a=/^(?:(min|max)-)?(.+)/,o=/(em|rem|px|cm|mm|in|pt|pc)?$/,i=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(r),o=t[1],i=t[2],s=t[3]||"",c={};return c.inverse=!!o&&"not"===o.toLowerCase(),c.type=i?i.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],c.expressions=s.map((function(e){var t=e.match(n),r=t[1].toLowerCase().match(a);return{modifier:r[1],feature:r[2],value:t[2]}})),c}))}function c(e){var t,r=Number(e);return r||(r=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),r}function l(e){var t=parseFloat(e);switch(String(e).match(i)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function u(e){var t=parseFloat(e);switch(String(e).match(o)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=/[A-Z]/g,a=/^ms-/,o={};function i(e){return"-"+e.toLowerCase()}var s=function(e){if(o.hasOwnProperty(e))return o[e];var t=e.replace(n,i);return o[e]=a.test(t)?"-"+t:t}},"./node_modules/matchmediaquery/index.js":function(e,t,r){"use strict";var n=r("./node_modules/css-mediaquery/index.js").match,a="undefined"!=typeof window?window.matchMedia:null;function o(e,t,r){var o=this;if(a&&!r){var i=a.call(window,e);this.matches=i.matches,this.media=i.media,i.addListener(s)}else this.matches=n(e,t),this.media=e;function s(e){o.matches=e.matches,o.media=e.media}this.addListener=function(e){i&&i.addListener(e)},this.removeListener=function(e){i&&i.removeListener(e)},this.dispose=function(){i&&i.removeListener(s)}}e.exports=function(e,t,r){return new o(e,t,r)}},"./node_modules/object-assign/index.js":function(e){"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var i,s,c=a(e),l=1;l<arguments.length;l++){for(var u in i=Object(arguments[l]))r.call(i,u)&&(c[u]=i[u]);if(t){s=t(i);for(var f=0;f<s.length;f++)n.call(i,s[f])&&(c[s[f]]=i[s[f]])}}return c}},"./node_modules/prop-types/checkPropTypes.js":function(e,t,r){"use strict";var n=function(){},a=r("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),o={},i=r("./node_modules/prop-types/lib/has.js");function s(e,t,r,s,c){for(var l in e)if(i(e,l)){var u;try{if("function"!=typeof e[l]){var f=Error((s||"React class")+": "+r+" type `"+l+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[l]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw f.name="Invariant Violation",f}u=e[l](t,l,s,r,null,a)}catch(m){u=m}if(!u||u instanceof Error||n((s||"React class")+": type specification of "+r+" `"+l+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in o)){o[u.message]=!0;var d=c?c():"";n("Failed "+r+" type: "+u.message+(null!=d?d:""))}}}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(r){}},s.resetWarningCache=function(){o={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":function(e,t,r){"use strict";var n=r("./node_modules/react-is/index.js"),a=r("./node_modules/object-assign/index.js"),o=r("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),i=r("./node_modules/prop-types/lib/has.js"),s=r("./node_modules/prop-types/checkPropTypes.js"),c=function(){};function l(){return null}c=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(r){}},e.exports=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,u="<<anonymous>>",f={array:y("array"),bigint:y("bigint"),bool:y("boolean"),func:y("function"),number:y("number"),object:y("object"),string:y("string"),symbol:y("symbol"),any:p(l),arrayOf:function(e){return p((function(t,r,n,a,i){if("function"!=typeof e)return new m("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var s=t[r];if(!Array.isArray(s))return new m("Invalid "+a+" `"+i+"` of type `"+b(s)+"` supplied to `"+n+"`, expected an array.");for(var c=0;c<s.length;c++){var l=e(s,c,n,a,i+"["+c+"]",o);if(l instanceof Error)return l}return null}))},element:p((function(t,r,n,a,o){var i=t[r];return e(i)?null:new m("Invalid "+a+" `"+o+"` of type `"+b(i)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:p((function(e,t,r,a,o){var i=e[t];return n.isValidElementType(i)?null:new m("Invalid "+a+" `"+o+"` of type `"+b(i)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return p((function(t,r,n,a,o){if(!(t[r]instanceof e)){var i=e.name||u;return new m("Invalid "+a+" `"+o+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+n+"`, expected instance of `"+i+"`.")}var s;return null}))},node:p((function(e,t,r,n,a){return h(e[t])?null:new m("Invalid "+n+" `"+a+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return p((function(t,r,n,a,s){if("function"!=typeof e)return new m("Property `"+s+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var c=t[r],l=b(c);if("object"!==l)return new m("Invalid "+a+" `"+s+"` of type `"+l+"` supplied to `"+n+"`, expected an object.");for(var u in c)if(i(c,u)){var f=e(c,u,n,a,s+"."+u,o);if(f instanceof Error)return f}return null}))},oneOf:function(e){if(!Array.isArray(e))return c(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),l;function t(t,r,n,a,o){for(var i=t[r],s=0;s<e.length;s++)if(d(i,e[s]))return null;var c=JSON.stringify(e,(function(e,t){return"symbol"===x(t)?String(t):t}));return new m("Invalid "+a+" `"+o+"` of value `"+String(i)+"` supplied to `"+n+"`, expected one of "+c+".")}return p(t)},oneOfType:function(e){if(!Array.isArray(e))return c("Invalid argument supplied to oneOfType, expected an instance of array."),l;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return c("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+g(r)+" at index "+t+"."),l}return p((function(t,r,n,a,s){for(var c=[],l=0;l<e.length;l++){var u=(0,e[l])(t,r,n,a,s,o);if(null==u)return null;u.data&&i(u.data,"expectedType")&&c.push(u.data.expectedType)}return new m("Invalid "+a+" `"+s+"` supplied to `"+n+"`"+(c.length>0?", expected one of type ["+c.join(", ")+"]":"")+".")}))},shape:function(e){return p((function(t,r,n,a,i){var s=t[r],c=b(s);if("object"!==c)return new m("Invalid "+a+" `"+i+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");for(var l in e){var u=e[l];if("function"!=typeof u)return v(n,a,i,l,x(u));var f=u(s,l,n,a,i+"."+l,o);if(f)return f}return null}))},exact:function(e){return p((function(t,r,n,s,c){var l=t[r],u=b(l);if("object"!==u)return new m("Invalid "+s+" `"+c+"` of type `"+u+"` supplied to `"+n+"`, expected `object`.");var f=a({},t[r],e);for(var d in f){var p=e[d];if(i(e,d)&&"function"!=typeof p)return v(n,s,c,d,x(p));if(!p)return new m("Invalid "+s+" `"+c+"` key `"+d+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=p(l,d,n,s,c+"."+d,o);if(y)return y}return null}))}};function d(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function m(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function p(e){var r={},n=0;function a(a,i,s,l,f,d,p){if(l=l||u,d=d||s,p!==o){if(t){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}if("undefined"!=typeof console){var v=l+":"+s;!r[v]&&n<3&&(c("You are manually calling a React.PropTypes validation function for the `"+d+"` prop on `"+l+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[v]=!0,n++)}}return null==i[s]?a?null===i[s]?new m("The "+f+" `"+d+"` is marked as required in `"+l+"`, but its value is `null`."):new m("The "+f+" `"+d+"` is marked as required in `"+l+"`, but its value is `undefined`."):null:e(i,s,l,f,d)}var i=a.bind(null,!1);return i.isRequired=a.bind(null,!0),i}function y(e){return p((function(t,r,n,a,o,i){var s=t[r];return b(s)!==e?new m("Invalid "+a+" `"+o+"` of type `"+x(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function v(e,t,r,n,a){return new m((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+a+"`.")}function h(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(h);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!n)return!1;var a,o=n.call(t);if(n!==t.entries){for(;!(a=o.next()).done;)if(!h(a.value))return!1}else for(;!(a=o.next()).done;){var i=a.value;if(i&&!h(i[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function x(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function g(e){var t=x(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return m.prototype=Error.prototype,f.checkPropTypes=s,f.resetWarningCache=s.resetWarningCache,f.PropTypes=f,f}},"./node_modules/prop-types/index.js":function(e,t,r){var n=r("./node_modules/react-is/index.js");e.exports=r("./node_modules/prop-types/factoryWithTypeCheckers.js")(n.isElement,!0)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/prop-types/lib/has.js":function(e){e.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":function(e,t){"use strict";!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,d=e?Symbol.for("react.suspense"):60113,m=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,v=e?Symbol.for("react.block"):60121,h=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,x=e?Symbol.for("react.scope"):60119;function g(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var m=e.type;switch(m){case l:case u:case a:case i:case o:case d:return m;default:var v=m&&m.$$typeof;switch(v){case c:case f:case y:case p:case s:return v;default:return t}}case n:return t}}}var E=l,w=u,j=c,N=s,_=r,O=f,C=a,S=y,k=p,P=n,T=i,I=o,M=d,R=!1;function L(e){return g(e)===u}t.AsyncMode=E,t.ConcurrentMode=w,t.ContextConsumer=j,t.ContextProvider=N,t.Element=_,t.ForwardRef=O,t.Fragment=C,t.Lazy=S,t.Memo=k,t.Portal=P,t.Profiler=T,t.StrictMode=I,t.Suspense=M,t.isAsyncMode=function(e){return R||(R=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),L(e)||g(e)===l},t.isConcurrentMode=L,t.isContextConsumer=function(e){return g(e)===c},t.isContextProvider=function(e){return g(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return g(e)===f},t.isFragment=function(e){return g(e)===a},t.isLazy=function(e){return g(e)===y},t.isMemo=function(e){return g(e)===p},t.isPortal=function(e){return g(e)===n},t.isProfiler=function(e){return g(e)===i},t.isStrictMode=function(e){return g(e)===o},t.isSuspense=function(e){return g(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===u||e===i||e===o||e===d||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===p||e.$$typeof===s||e.$$typeof===c||e.$$typeof===f||e.$$typeof===h||e.$$typeof===b||e.$$typeof===x||e.$$typeof===v)},t.typeOf=g}()},"./node_modules/react-is/index.js":function(e,t,r){"use strict";e.exports=r("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":function(e,t,r){"use strict";function n(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=Object.keys(e),n=Object.keys(t),a=r.length;if(n.length!==a)return!1;for(var o=0;o<a;o++){var i=r[o];if(e[i]!==t[i]||!Object.prototype.hasOwnProperty.call(t,i))return!1}return!0}function a(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=e.length;if(t.length!==r)return!1;for(var n=0;n<r;n++)if(e[n]!==t[n])return!1;return!0}r.r(t),r.d(t,{shallowEqualArrays:function(){return a},shallowEqualObjects:function(){return n}})},"./src/Component.ts":function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=a(r("./src/useMediaQuery.ts"));t.default=function(e){var t=e.children,r=e.device,a=e.onChange,i=n(e,["children","device","onChange"]),s=(0,o.default)(i,r,a);return"function"==typeof t?t(s):s?t:null}},"./src/Context.ts":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=(0,r("react").createContext)(void 0);t.default=n},"./src/index.ts":function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var a=n(r("./src/useMediaQuery.ts"));t.useMediaQuery=a.default;var o=n(r("./src/Component.ts"));t.default=o.default;var i=n(r("./src/toQuery.ts"));t.toQuery=i.default;var s=n(r("./src/Context.ts"));t.Context=s.default},"./src/mediaQuery.ts":function(e,t,r){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},n.apply(this,arguments)},a=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=o(r("./node_modules/prop-types/index.js")),s=i.default.oneOfType([i.default.string,i.default.number]),c={all:i.default.bool,grid:i.default.bool,aural:i.default.bool,braille:i.default.bool,handheld:i.default.bool,print:i.default.bool,projection:i.default.bool,screen:i.default.bool,tty:i.default.bool,tv:i.default.bool,embossed:i.default.bool},l={orientation:i.default.oneOf(["portrait","landscape"]),scan:i.default.oneOf(["progressive","interlace"]),aspectRatio:i.default.string,deviceAspectRatio:i.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:i.default.bool,colorIndex:i.default.bool,monochrome:i.default.bool,resolution:s,type:Object.keys(c)},u=a(l,["type"]),f=n({minAspectRatio:i.default.string,maxAspectRatio:i.default.string,minDeviceAspectRatio:i.default.string,maxDeviceAspectRatio:i.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:i.default.number,maxColor:i.default.number,minColorIndex:i.default.number,maxColorIndex:i.default.number,minMonochrome:i.default.number,maxMonochrome:i.default.number,minResolution:s,maxResolution:s},u),d=n(n({},c),f);t.default={all:d,types:c,matchers:l,features:f}},"./src/toQuery.ts":function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r("./node_modules/hyphenate-style-name/index.js")),o=n(r("./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(o.default.all).forEach((function(r){var n=e[r];null!=n&&t.push(function(e,t){var r=(0,a.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?r:!1===t?"not ".concat(r):"(".concat(r,": ").concat(t,")")}(r,n))})),t.join(" and ")}},"./src/useMediaQuery.ts":function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r("react"),o=n(r("./node_modules/matchmediaquery/index.js")),i=n(r("./node_modules/hyphenate-style-name/index.js")),s=r("./node_modules/shallow-equal/dist/index.esm.js"),c=n(r("./src/toQuery.ts")),l=n(r("./src/Context.ts")),u=function(e){if(e)return Object.keys(e).reduce((function(t,r){return t[(0,i.default)(r)]=e[r],t}),{})},f=function(){var e=(0,a.useRef)(!1);return(0,a.useEffect)((function(){e.current=!0}),[]),e.current},d=function(e){var t=function(){return function(e){return e.query||(0,c.default)(e)}(e)},r=(0,a.useState)(t),n=r[0],o=r[1];return(0,a.useEffect)((function(){var e=t();n!==e&&o(e)}),[e]),n};t.default=function(e,t,r){var n=function(e){var t=(0,a.useContext)(l.default),r=function(){return u(e)||u(t)},n=(0,a.useState)(r),o=n[0],i=n[1];return(0,a.useEffect)((function(){var e=r();(0,s.shallowEqualObjects)(o,e)||i(e)}),[e,t]),o}(t),i=d(e);if(!i)throw new Error("Invalid or missing MediaQuery!");var c=function(e,t){var r=function(){return(0,o.default)(e,t||{},!!t)},n=(0,a.useState)(r),i=n[0],s=n[1],c=f();return(0,a.useEffect)((function(){if(c){var e=r();return s(e),function(){e&&e.dispose()}}}),[e,t]),i}(i,n),m=function(e){var t=(0,a.useState)(e.matches),r=t[0],n=t[1];return(0,a.useEffect)((function(){var t=function(e){n(e.matches)};return e.addListener(t),n(e.matches),function(){e.removeListener(t)}}),[e]),r}(c),p=f();return(0,a.useEffect)((function(){p&&r&&r(m)}),[m]),(0,a.useEffect)((function(){return function(){c&&c.dispose()}}),[]),m}},react:function(t){"use strict";t.exports=e}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}return n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")}()},e.exports=n(r(7294))},7467:function(e,t,r){"use strict";r.d(t,{d_:function(){return _},fy:function(){return E},z4:function(){return g},Tn:function(){return w},eu:function(){return c},_z:function(){return b},RF:function(){return N},zh:function(){return f},fE:function(){return j},vW:function(){return p}});var n=r(7294),a=r(7782),o=r(3723),i=r(9931),s=r.n(i),c=function(e){var t=e.coverImage,r=e.title,i=e.description,c=e.createdAt,l=e.href,u=e.className;return n.createElement(a.Link,{to:l||"",className:s()("group",u)},n.createElement("article",{className:"space-y-2"},n.createElement("div",{className:"!aspect-w-16 !aspect-h-9"},t&&n.createElement(o.G,{alt:r||"",image:t,className:"object-cover w-full h-full rounded-lg"})),n.createElement("div",{className:"flex items-center space-x-2"},n.createElement("div",{className:"border-l-2 border-l-primary-main rounded-md h-6"}),n.createElement("span",{className:"text-sm text-neutral-900"},c)),n.createElement("h3",{className:"text-lg font-medium text-neutral-900 line-clamp-2 group-hover:text-primary-main dealy-100"},r),n.createElement("span",{className:"line-clamp-2 text-sm text-neutral-600"},i)))},l=r(9652),u=r(1597),f=function(e){var t=e.title,r=e.createAt,o=e.pdf,i=e.className,c=(0,a.useTranslation)().t;return n.createElement("a",{href:(0,u.withPrefix)("/pdf/"+o),target:"__blank",className:s()("group p-4 flex flex-col justify-between h-40 bg-neutral-50 rounded-t-lg border-b-4 border-b-primary-main",i)},n.createElement("div",{className:"flex flex-col space-y-2"},n.createElement("span",{className:"text-sm text-neutral-500"},r),n.createElement("p",{className:"font-medium text-neutral-900 line-clamp-3 group-hover:underline"},t)),n.createElement(l.SQ,{title:c("Components.ReadMoreButton.Title"),className:"self-start"}))},d=r(2337),m=r.n(d),p=function(e){var t=e.name,r=e.profileImage,a=e.occupation,i=e.comment,c=e.className;return n.createElement("div",{className:s()("flex flex-col py-6 px-7 space-y-4 rounded-2xl bg-neutral-50",c)},n.createElement("div",{className:"flex items-center justify-between"},n.createElement("div",{className:"flex"},n.createElement("div",{className:"w-12 h-12 mr-2 p-px border border-primary-main rounded-full"},r&&n.createElement(o.G,{alt:t||"",image:r,className:"w-full h-full rounded-full border border-white"})),n.createElement("div",{className:"flex flex-col"},n.createElement("span",{className:"text-lg line-clamp-1"},t),n.createElement("span",{className:"text-xs"},a))),n.createElement(m(),{className:"w-12 h-12"})),n.createElement("p",null,i))},y=r(4925),v=["title","titleId"];var h=n.forwardRef((function(e,t){var r=e.title,a=e.titleId,o=(0,y.Z)(e,v);return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":a},o),r?n.createElement("title",{id:a},r):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"}))})),b=function(e){var t=e.occupation,r=e.description,o=e.location,i=e.contract,c=e.href,u=e.className,f=(0,a.useTranslation)().t;return n.createElement(a.Link,{to:c||""},n.createElement("article",{className:s()("p-4 h-48 flex flex-col justify-between rounded-lg border border-primary-main group",u)},n.createElement("div",{className:"flex flex-col"},n.createElement("span",{className:"font-bold line-clamp-2 text-neutral-900 group-hover:underline"},t),n.createElement("p",{className:"text-sm mt-2 text-neutral-600 line-clamp-3"},r)),n.createElement("div",{className:"flex justify-between items-center"},n.createElement("div",{className:"flex items-center space-x-4"},n.createElement("div",{className:"flex items-center space-x-0.5"},n.createElement(h,{className:"w-4 h-4 text-neutral-900"}),n.createElement("span",{className:"text-neutral-900 text-xs"},o)),n.createElement("span",{className:"w-px bg-neutral-200 h-4"}),n.createElement("span",{className:"text-neutral-900 text-xs"},i)),n.createElement(l.SQ,{title:f("Components.ReadMoreButton.Title")}))))},x=r(3231),g=function(e){var t=e.title,r=e.coverImage,a=e.createdAt,i=e.toFile,c=e.className,l=(0,x.u7)(),f=n.createElement(n.Fragment,null,r&&n.createElement("div",{className:"!aspect-w-3 !aspect-h-4"},n.createElement(o.G,{alt:t||"",image:r,className:"object-cover w-full h-full rounded-lg border border-primary-main"})),n.createElement("div",{className:"flex items-center space-x-2 mt-4"},n.createElement("div",{className:"border-l-2 border-l-primary-main rounded-md h-6"}),n.createElement("span",{className:"text-sm"},a)));return l?n.createElement("div",{className:s()("flex flex-col",c)},f,n.createElement("a",{href:(0,u.withPrefix)("/pdf/"+i),target:"__blank"},n.createElement("p",{className:"text-neutral-900 mt-2 font-medium line-clamp-2 hover:text-primary-main delay-100"},t))):n.createElement("a",{href:(0,u.withPrefix)("/pdf/"+i),target:"__blank",className:s()("flex flex-col group",c)},f,n.createElement("p",{className:"text-neutral-900 mt-2 font-medium line-clamp-2 group-hover:text-primary-main delay-100"},t))},E=function(e){var t=e.image,r=e.title,i=e.description,c=e.to,u=e.className,f=(0,a.useTranslation)().t;return n.createElement(a.Link,{to:c||"/",className:s()("py-9 px-3 flex bg-white flex-col items-center justify-between rounded-2xl text-center transition duration-300 ease-in-out hover:-translate-y-2 hover:border-primary-main hover:border",u)},n.createElement("div",{className:"flex flex-col items-center"},t&&n.createElement(o.G,{alt:r||"",image:t,className:"w-36 h-36"}),n.createElement("span",{className:"text-sm block font-medium mt-3"},r),n.createElement("span",{className:"text-xs block line-clamp-2 whitespace-pre-line mt-2"},i)),n.createElement(l.SQ,{title:f("Components.ReadMoreButton.Title")}))},w=function(e){var t=e.coverImage,r=e.title,i=e.description,c=e.createdAt,l=e.href,u=e.className;return n.createElement(a.Link,{to:l||"",className:s()("group",u)},t&&n.createElement("div",{className:"relative"},n.createElement("div",{className:"!aspect-w-16 !aspect-h-9"},n.createElement(o.G,{alt:r||"",image:t,className:"object-cover w-full h-full rounded-lg relative"}),n.createElement("div",{className:"absolute -z-10 w-full h-full rounded-lg bg-primary-main !left-1.5 !top-1.5"}))),n.createElement("p",{className:"mt-5 text-sm text-neutral-900"},c),n.createElement("h3",{className:"text-lg font-medium text-neutral-900 line-clamp-2 mt-2 group-hover:text-primary-main delay-100"},r),n.createElement("span",{className:"line-clamp-2 text-sm text-neutral-600 mt-2"},i))},j=function(e){var t=e.price,r=e.change,a=e.total,o=e.updatedAt,i=e.className;return n.createElement("div",{className:s()("flex flex-col p-10 rounded-lg bg-neutral-50 border border-neutral-50 space-y-6 opacity-90",i)},n.createElement("div",{className:"flex justify-between items-center border-b border-black pb-2"},n.createElement("span",{className:"block text-primary-main text-4xl font-bold"},"TH"),n.createElement("span",{className:"text-xs"},null==o?void 0:o.title,null==o?void 0:o.value)),n.createElement("div",{className:"flex items-center justify-between"},n.createElement("span",{className:"block"},null==t?void 0:t.title),n.createElement("span",{className:"block text-xl"},null==t?void 0:t.value)),n.createElement("div",{className:"flex items-center justify-between"},n.createElement("span",{className:"block"},null==r?void 0:r.title),n.createElement("span",{className:"block text-xl"},null==r?void 0:r.value)),n.createElement("div",{className:"flex items-center justify-between"},n.createElement("span",{className:"block"},null==a?void 0:a.title),n.createElement("span",{className:"block text-xl"},null==a?void 0:a.value)))},N=function(e){var t=e.roi,r=e.title,a=e.description,o=e.className;return n.createElement("div",{className:s()("relative flex justify-center items-center bg-neutral-100 rounded-2xl px-8 space-y-24 pb-8",o)},n.createElement("div",{className:"absolute px-6 -top-20 h-40 w-40 flex flex-col items-center justify-center text-center bg-primary-main rounded-full border-4 border-primary-surface"},n.createElement("span",{className:"block text-neutral-50 text-xl font-medium whitespace-pre-line"},t),n.createElement("span",{className:"block text-neutral-50 text-xs font-bold text-center whitespace-pre-line"},r)),n.createElement("p",{className:"text-neutral-900 text-center self-start"},a))},_=function(e){var t=e.name,r=e.occupation,a=e.profileImage,i=e.className;return n.createElement("div",{className:s()("flex flex-col",i)},a&&n.createElement("div",{className:"!aspect-w-3 !aspect-h-4"},n.createElement(o.G,{alt:t||"",image:a,className:"object-cover w-full h-full rounded-lg"})),n.createElement("span",{className:"text-neutral-900 text-lg font-bold mt-5"},t),n.createElement("p",{className:"mt-2 text-neutral-900"},r))}},3231:function(e,t,r){"use strict";r.d(t,{jk:function(){return a},u7:function(){return o}});var n=r(1763);function a(){return(0,n.useMediaQuery)({query:"(min-width: 768px)"})}function o(){return(0,n.useMediaQuery)({query:"(min-width: 1024px)"})}},2337:function(e,t,r){var n=r(7294);function a(e){return n.createElement("svg",e,n.createElement("path",{d:"M37.452 21C35.3753 21 33.3452 20.3842 31.6185 19.2304C29.8918 18.0767 28.546 16.4368 27.7513 14.5182C26.9565 12.5996 26.7486 10.4883 27.1538 8.45155C27.5589 6.41475 28.5589 4.54383 30.0274 3.07538C31.4958 1.60693 33.3668 0.606895 35.4036 0.201752C37.4404 -0.203392 39.5516 0.00453949 41.4702 0.799263C43.3888 1.59398 45.0287 2.93979 46.1824 4.66651C47.3362 6.39322 47.952 8.42329 47.952 10.5L48 12C48 17.5695 45.7875 22.911 41.8492 26.8492C37.911 30.7875 32.5695 33 27 33V27C28.9707 27.0053 30.9229 26.6199 32.7437 25.866C34.5645 25.1121 36.2178 24.0048 37.608 22.608C38.1483 22.0687 38.6468 21.489 39.099 20.874C38.562 20.958 38.013 21.003 37.455 21.003L37.452 21ZM10.452 21C8.3753 21 6.34523 20.3842 4.61851 19.2304C2.8918 18.0767 1.54599 16.4368 0.751266 14.5182C-0.043457 12.5996 -0.251392 10.4883 0.153755 8.45155C0.558899 6.41475 1.55893 4.54383 3.02738 3.07538C4.49583 1.60693 6.36675 0.606895 8.40355 0.201752C10.4404 -0.203392 12.5516 0.00453949 14.4702 0.799263C16.3888 1.59398 18.0287 2.93979 19.1824 4.66651C20.3362 6.39322 20.952 8.42329 20.952 10.5L21 12C21 17.5695 18.7875 22.911 14.8492 26.8492C10.911 30.7875 5.56955 33 0 33V27C1.9707 27.0053 3.92289 26.6199 5.7437 25.866C7.56451 25.1121 9.21781 24.0048 10.608 22.608C11.1483 22.0687 11.6468 21.489 12.099 20.874C11.562 20.958 11.013 21.003 10.452 21.003V21Z",fill:"#EEBDBD"}))}a.defaultProps={width:"48",height:"33",viewBox:"0 0 48 33",fill:"currentColor"},e.exports=a,a.default=a}}]);
//# sourceMappingURL=272d37edc1bba225acccb737c04753903e45ed08-f1dfab82e0e858479c58.js.map