(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[347],{3646:function(t,e,r){var n=r(7228);t.exports=function(t){if(Array.isArray(t))return n(t)},t.exports.default=t.exports,t.exports.__esModule=!0},6860:function(t){t.exports=function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.default=t.exports,t.exports.__esModule=!0},8206:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},319:function(t,e,r){var n=r(3646),o=r(6860),i=r(379),a=r(8206);t.exports=function(t){return n(t)||o(t)||i(t)||a()},t.exports.default=t.exports,t.exports.__esModule=!0},2192:function(t,e,r){"use strict";r.d(e,{Z:function(){return g}});var n=r(7462),o=r(7294),i=r(7866),a=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,u=(0,i.Z)((function(t){return a.test(t)||111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&t.charCodeAt(2)<91})),s=r(8650),f=r(444),l=r(3772),c=u,h=function(t){return"theme"!==t},p=function(t){return"string"===typeof t&&t.charCodeAt(0)>96?c:h},d=function(t,e,r){var n;if(e){var o=e.shouldForwardProp;n=t.__emotion_forwardProp&&o?function(e){return t.__emotion_forwardProp(e)&&o(e)}:o}return"function"!==typeof n&&r&&(n=t.__emotion_forwardProp),n},y=function(){return null},g=function t(e,r){var i,a,u=e.__emotion_real===e,c=u&&e.__emotion_base||e;void 0!==r&&(i=r.label,a=r.target);var h=d(e,r,u),g=h||p(c),m=!g("as");return function(){var v=arguments,w=u&&void 0!==e.__emotion_styles?e.__emotion_styles.slice(0):[];if(void 0!==i&&w.push("label:"+i+";"),null==v[0]||void 0===v[0].raw)w.push.apply(w,v);else{0,w.push(v[0][0]);for(var b=v.length,A=1;A<b;A++)w.push(v[A],v[0][A])}var E=(0,s.w)((function(t,e,r){var n=m&&t.as||c,i="",u=[],d=t;if(null==t.theme){for(var v in d={},t)d[v]=t[v];d.theme=(0,o.useContext)(s.T)}"string"===typeof t.className?i=(0,f.f)(e.registered,u,t.className):null!=t.className&&(i=t.className+" ");var b=(0,l.O)(w.concat(u),e.registered,d);(0,f.M)(e,b,"string"===typeof n);i+=e.key+"-"+b.name,void 0!==a&&(i+=" "+a);var A=m&&void 0===h?p(n):g,E={};for(var O in t)m&&"as"===O||A(O)&&(E[O]=t[O]);E.className=i,E.ref=r;var x=(0,o.createElement)(n,E),k=(0,o.createElement)(y,null);return(0,o.createElement)(o.Fragment,null,k,x)}));return E.displayName=void 0!==i?i:"Styled("+("string"===typeof c?c:c.displayName||c.name||"Component")+")",E.defaultProps=e.defaultProps,E.__emotion_real=E,E.__emotion_base=c,E.__emotion_styles=w,E.__emotion_forwardProp=h,Object.defineProperty(E,"toString",{value:function(){return"."+a}}),E.withComponent=function(e,o){return t(e,(0,n.Z)({},r,o,{shouldForwardProp:d(E,o,!0)})).apply(void 0,w)},E}}},9742:function(t,e){"use strict";e.byteLength=function(t){var e=s(t),r=e[0],n=e[1];return 3*(r+n)/4-n},e.toByteArray=function(t){var e,r,i=s(t),a=i[0],u=i[1],f=new o(function(t,e,r){return 3*(e+r)/4-r}(0,a,u)),l=0,c=u>0?a-4:a;for(r=0;r<c;r+=4)e=n[t.charCodeAt(r)]<<18|n[t.charCodeAt(r+1)]<<12|n[t.charCodeAt(r+2)]<<6|n[t.charCodeAt(r+3)],f[l++]=e>>16&255,f[l++]=e>>8&255,f[l++]=255&e;2===u&&(e=n[t.charCodeAt(r)]<<2|n[t.charCodeAt(r+1)]>>4,f[l++]=255&e);1===u&&(e=n[t.charCodeAt(r)]<<10|n[t.charCodeAt(r+1)]<<4|n[t.charCodeAt(r+2)]>>2,f[l++]=e>>8&255,f[l++]=255&e);return f},e.fromByteArray=function(t){for(var e,n=t.length,o=n%3,i=[],a=16383,u=0,s=n-o;u<s;u+=a)i.push(f(t,u,u+a>s?s:u+a));1===o?(e=t[n-1],i.push(r[e>>2]+r[e<<4&63]+"==")):2===o&&(e=(t[n-2]<<8)+t[n-1],i.push(r[e>>10]+r[e>>4&63]+r[e<<2&63]+"="));return i.join("")};for(var r=[],n=[],o="undefined"!==typeof Uint8Array?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,u=i.length;a<u;++a)r[a]=i[a],n[i.charCodeAt(a)]=a;function s(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");return-1===r&&(r=e),[r,r===e?0:4-r%4]}function f(t,e,n){for(var o,i,a=[],u=e;u<n;u+=3)o=(t[u]<<16&16711680)+(t[u+1]<<8&65280)+(255&t[u+2]),a.push(r[(i=o)>>18&63]+r[i>>12&63]+r[i>>6&63]+r[63&i]);return a.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},8764:function(t,e,r){"use strict";var n=r(9742),o=r(645),i="function"===typeof Symbol&&"function"===typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;e.Buffer=s,e.SlowBuffer=function(t){+t!=t&&(t=0);return s.alloc(+t)},e.INSPECT_MAX_BYTES=50;var a=2147483647;function u(t){if(t>a)throw new RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return Object.setPrototypeOf(e,s.prototype),e}function s(t,e,r){if("number"===typeof t){if("string"===typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return c(t)}return f(t,e,r)}function f(t,e,r){if("string"===typeof t)return function(t,e){"string"===typeof e&&""!==e||(e="utf8");if(!s.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var r=0|y(t,e),n=u(r),o=n.write(t,e);o!==r&&(n=n.slice(0,o));return n}(t,e);if(ArrayBuffer.isView(t))return h(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(H(t,ArrayBuffer)||t&&H(t.buffer,ArrayBuffer))return p(t,e,r);if("undefined"!==typeof SharedArrayBuffer&&(H(t,SharedArrayBuffer)||t&&H(t.buffer,SharedArrayBuffer)))return p(t,e,r);if("number"===typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');var n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return s.from(n,e,r);var o=function(t){if(s.isBuffer(t)){var e=0|d(t.length),r=u(e);return 0===r.length||t.copy(r,0,0,e),r}if(void 0!==t.length)return"number"!==typeof t.length||q(t.length)?u(0):h(t);if("Buffer"===t.type&&Array.isArray(t.data))return h(t.data)}(t);if(o)return o;if("undefined"!==typeof Symbol&&null!=Symbol.toPrimitive&&"function"===typeof t[Symbol.toPrimitive])return s.from(t[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function l(t){if("number"!==typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function c(t){return l(t),u(t<0?0:0|d(t))}function h(t){for(var e=t.length<0?0:0|d(t.length),r=u(e),n=0;n<e;n+=1)r[n]=255&t[n];return r}function p(t,e,r){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds');var n;return n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),Object.setPrototypeOf(n,s.prototype),n}function d(t){if(t>=a)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a.toString(16)+" bytes");return 0|t}function y(t,e){if(s.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||H(t,ArrayBuffer))return t.byteLength;if("string"!==typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var r=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;for(var o=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return D(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return z(t).length;default:if(o)return n?-1:D(t).length;e=(""+e).toLowerCase(),o=!0}}function g(t,e,r){var n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return P(this,e,r);case"utf8":case"utf-8":return B(this,e,r);case"ascii":return _(this,e,r);case"latin1":case"binary":return M(this,e,r);case"base64":return S(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return T(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function m(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function v(t,e,r,n,o){if(0===t.length)return-1;if("string"===typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),q(r=+r)&&(r=o?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(o)return-1;r=t.length-1}else if(r<0){if(!o)return-1;r=0}if("string"===typeof e&&(e=s.from(e,n)),s.isBuffer(e))return 0===e.length?-1:w(t,e,r,n,o);if("number"===typeof e)return e&=255,"function"===typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):w(t,[e],r,n,o);throw new TypeError("val must be string, number or Buffer")}function w(t,e,r,n,o){var i,a=1,u=t.length,s=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;a=2,u/=2,s/=2,r/=2}function f(t,e){return 1===a?t[e]:t.readUInt16BE(e*a)}if(o){var l=-1;for(i=r;i<u;i++)if(f(t,i)===f(e,-1===l?0:i-l)){if(-1===l&&(l=i),i-l+1===s)return l*a}else-1!==l&&(i-=i-l),l=-1}else for(r+s>u&&(r=u-s),i=r;i>=0;i--){for(var c=!0,h=0;h<s;h++)if(f(t,i+h)!==f(e,h)){c=!1;break}if(c)return i}return-1}function b(t,e,r,n){r=Number(r)||0;var o=t.length-r;n?(n=Number(n))>o&&(n=o):n=o;var i=e.length;n>i/2&&(n=i/2);for(var a=0;a<n;++a){var u=parseInt(e.substr(2*a,2),16);if(q(u))return a;t[r+a]=u}return a}function A(t,e,r,n){return F(D(e,t.length-r),t,r,n)}function E(t,e,r,n){return F(function(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(e),t,r,n)}function O(t,e,r,n){return E(t,e,r,n)}function x(t,e,r,n){return F(z(e),t,r,n)}function k(t,e,r,n){return F(function(t,e){for(var r,n,o,i=[],a=0;a<t.length&&!((e-=2)<0);++a)n=(r=t.charCodeAt(a))>>8,o=r%256,i.push(o),i.push(n);return i}(e,t.length-r),t,r,n)}function S(t,e,r){return 0===e&&r===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(e,r))}function B(t,e,r){r=Math.min(t.length,r);for(var n=[],o=e;o<r;){var i,a,u,s,f=t[o],l=null,c=f>239?4:f>223?3:f>191?2:1;if(o+c<=r)switch(c){case 1:f<128&&(l=f);break;case 2:128===(192&(i=t[o+1]))&&(s=(31&f)<<6|63&i)>127&&(l=s);break;case 3:i=t[o+1],a=t[o+2],128===(192&i)&&128===(192&a)&&(s=(15&f)<<12|(63&i)<<6|63&a)>2047&&(s<55296||s>57343)&&(l=s);break;case 4:i=t[o+1],a=t[o+2],u=t[o+3],128===(192&i)&&128===(192&a)&&128===(192&u)&&(s=(15&f)<<18|(63&i)<<12|(63&a)<<6|63&u)>65535&&s<1114112&&(l=s)}null===l?(l=65533,c=1):l>65535&&(l-=65536,n.push(l>>>10&1023|55296),l=56320|1023&l),n.push(l),o+=c}return function(t){var e=t.length;if(e<=C)return String.fromCharCode.apply(String,t);var r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=C));return r}(n)}e.kMaxLength=a,s.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(r){return!1}}(),s.TYPED_ARRAY_SUPPORT||"undefined"===typeof console||"function"!==typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(s.prototype,"parent",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.buffer}}),Object.defineProperty(s.prototype,"offset",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.byteOffset}}),s.poolSize=8192,s.from=function(t,e,r){return f(t,e,r)},Object.setPrototypeOf(s.prototype,Uint8Array.prototype),Object.setPrototypeOf(s,Uint8Array),s.alloc=function(t,e,r){return function(t,e,r){return l(t),t<=0?u(t):void 0!==e?"string"===typeof r?u(t).fill(e,r):u(t).fill(e):u(t)}(t,e,r)},s.allocUnsafe=function(t){return c(t)},s.allocUnsafeSlow=function(t){return c(t)},s.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==s.prototype},s.compare=function(t,e){if(H(t,Uint8Array)&&(t=s.from(t,t.offset,t.byteLength)),H(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),!s.isBuffer(t)||!s.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;for(var r=t.length,n=e.length,o=0,i=Math.min(r,n);o<i;++o)if(t[o]!==e[o]){r=t[o],n=e[o];break}return r<n?-1:n<r?1:0},s.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return s.alloc(0);var r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var n=s.allocUnsafe(e),o=0;for(r=0;r<t.length;++r){var i=t[r];if(H(i,Uint8Array)&&(i=s.from(i)),!s.isBuffer(i))throw new TypeError('"list" argument must be an Array of Buffers');i.copy(n,o),o+=i.length}return n},s.byteLength=y,s.prototype._isBuffer=!0,s.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)m(this,e,e+1);return this},s.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)m(this,e,e+3),m(this,e+1,e+2);return this},s.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)m(this,e,e+7),m(this,e+1,e+6),m(this,e+2,e+5),m(this,e+3,e+4);return this},s.prototype.toString=function(){var t=this.length;return 0===t?"":0===arguments.length?B(this,0,t):g.apply(this,arguments)},s.prototype.toLocaleString=s.prototype.toString,s.prototype.equals=function(t){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===s.compare(this,t)},s.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"},i&&(s.prototype[i]=s.prototype.inspect),s.prototype.compare=function(t,e,r,n,o){if(H(t,Uint8Array)&&(t=s.from(t,t.offset,t.byteLength)),!s.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),e<0||r>t.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&e>=r)return 0;if(n>=o)return-1;if(e>=r)return 1;if(this===t)return 0;for(var i=(o>>>=0)-(n>>>=0),a=(r>>>=0)-(e>>>=0),u=Math.min(i,a),f=this.slice(n,o),l=t.slice(e,r),c=0;c<u;++c)if(f[c]!==l[c]){i=f[c],a=l[c];break}return i<a?-1:a<i?1:0},s.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},s.prototype.indexOf=function(t,e,r){return v(this,t,e,r,!0)},s.prototype.lastIndexOf=function(t,e,r){return v(this,t,e,r,!1)},s.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"===typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var o=this.length-e;if((void 0===r||r>o)&&(r=o),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return b(this,t,e,r);case"utf8":case"utf-8":return A(this,t,e,r);case"ascii":return E(this,t,e,r);case"latin1":case"binary":return O(this,t,e,r);case"base64":return x(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return k(this,t,e,r);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var C=4096;function _(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(127&t[o]);return n}function M(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(t[o]);return n}function P(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var o="",i=e;i<r;++i)o+=Y[t[i]];return o}function T(t,e,r){for(var n=t.slice(e,r),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}function I(t,e,r){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function U(t,e,r,n,o,i){if(!s.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function R(t,e,r,n,o,i){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function j(t,e,r,n,i){return e=+e,r>>>=0,i||R(t,0,r,4),o.write(t,e,r,n,23,4),r+4}function L(t,e,r,n,i){return e=+e,r>>>=0,i||R(t,0,r,8),o.write(t,e,r,n,52,8),r+8}s.prototype.slice=function(t,e){var r=this.length;(t=~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),(e=void 0===e?r:~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);var n=this.subarray(t,e);return Object.setPrototypeOf(n,s.prototype),n},s.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||I(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n},s.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||I(t,e,this.length);for(var n=this[t+--e],o=1;e>0&&(o*=256);)n+=this[t+--e]*o;return n},s.prototype.readUInt8=function(t,e){return t>>>=0,e||I(t,1,this.length),this[t]},s.prototype.readUInt16LE=function(t,e){return t>>>=0,e||I(t,2,this.length),this[t]|this[t+1]<<8},s.prototype.readUInt16BE=function(t,e){return t>>>=0,e||I(t,2,this.length),this[t]<<8|this[t+1]},s.prototype.readUInt32LE=function(t,e){return t>>>=0,e||I(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},s.prototype.readUInt32BE=function(t,e){return t>>>=0,e||I(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},s.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||I(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*e)),n},s.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||I(t,e,this.length);for(var n=e,o=1,i=this[t+--n];n>0&&(o*=256);)i+=this[t+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*e)),i},s.prototype.readInt8=function(t,e){return t>>>=0,e||I(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},s.prototype.readInt16LE=function(t,e){t>>>=0,e||I(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt16BE=function(t,e){t>>>=0,e||I(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt32LE=function(t,e){return t>>>=0,e||I(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},s.prototype.readInt32BE=function(t,e){return t>>>=0,e||I(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},s.prototype.readFloatLE=function(t,e){return t>>>=0,e||I(t,4,this.length),o.read(this,t,!0,23,4)},s.prototype.readFloatBE=function(t,e){return t>>>=0,e||I(t,4,this.length),o.read(this,t,!1,23,4)},s.prototype.readDoubleLE=function(t,e){return t>>>=0,e||I(t,8,this.length),o.read(this,t,!0,52,8)},s.prototype.readDoubleBE=function(t,e){return t>>>=0,e||I(t,8,this.length),o.read(this,t,!1,52,8)},s.prototype.writeUIntLE=function(t,e,r,n){(t=+t,e>>>=0,r>>>=0,n)||U(this,t,e,r,Math.pow(2,8*r)-1,0);var o=1,i=0;for(this[e]=255&t;++i<r&&(o*=256);)this[e+i]=t/o&255;return e+r},s.prototype.writeUIntBE=function(t,e,r,n){(t=+t,e>>>=0,r>>>=0,n)||U(this,t,e,r,Math.pow(2,8*r)-1,0);var o=r-1,i=1;for(this[e+o]=255&t;--o>=0&&(i*=256);)this[e+o]=t/i&255;return e+r},s.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||U(this,t,e,1,255,0),this[e]=255&t,e+1},s.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||U(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},s.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||U(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},s.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||U(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},s.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||U(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},s.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e>>>=0,!n){var o=Math.pow(2,8*r-1);U(this,t,e,r,o-1,-o)}var i=0,a=1,u=0;for(this[e]=255&t;++i<r&&(a*=256);)t<0&&0===u&&0!==this[e+i-1]&&(u=1),this[e+i]=(t/a>>0)-u&255;return e+r},s.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e>>>=0,!n){var o=Math.pow(2,8*r-1);U(this,t,e,r,o-1,-o)}var i=r-1,a=1,u=0;for(this[e+i]=255&t;--i>=0&&(a*=256);)t<0&&0===u&&0!==this[e+i+1]&&(u=1),this[e+i]=(t/a>>0)-u&255;return e+r},s.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||U(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},s.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||U(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},s.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||U(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},s.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||U(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},s.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||U(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},s.prototype.writeFloatLE=function(t,e,r){return j(this,t,e,!0,r)},s.prototype.writeFloatBE=function(t,e,r){return j(this,t,e,!1,r)},s.prototype.writeDoubleLE=function(t,e,r){return L(this,t,e,!0,r)},s.prototype.writeDoubleBE=function(t,e,r){return L(this,t,e,!1,r)},s.prototype.copy=function(t,e,r,n){if(!s.isBuffer(t))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var o=n-r;if(this===t&&"function"===typeof Uint8Array.prototype.copyWithin)this.copyWithin(e,r,n);else if(this===t&&r<e&&e<n)for(var i=o-1;i>=0;--i)t[i+e]=this[i+r];else Uint8Array.prototype.set.call(t,this.subarray(r,n),e);return o},s.prototype.fill=function(t,e,r,n){if("string"===typeof t){if("string"===typeof e?(n=e,e=0,r=this.length):"string"===typeof r&&(n=r,r=this.length),void 0!==n&&"string"!==typeof n)throw new TypeError("encoding must be a string");if("string"===typeof n&&!s.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===t.length){var o=t.charCodeAt(0);("utf8"===n&&o<128||"latin1"===n)&&(t=o)}}else"number"===typeof t?t&=255:"boolean"===typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;var i;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"===typeof t)for(i=e;i<r;++i)this[i]=t;else{var a=s.isBuffer(t)?t:s.from(t,n),u=a.length;if(0===u)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(i=0;i<r-e;++i)this[i+e]=a[i%u]}return this};var N=/[^+/0-9A-Za-z-_]/g;function D(t,e){var r;e=e||1/0;for(var n=t.length,o=null,i=[],a=0;a<n;++a){if((r=t.charCodeAt(a))>55295&&r<57344){if(!o){if(r>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(a+1===n){(e-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function z(t){return n.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(N,"")).length<2)return"";for(;t.length%4!==0;)t+="=";return t}(t))}function F(t,e,r,n){for(var o=0;o<n&&!(o+r>=e.length||o>=t.length);++o)e[o+r]=t[o];return o}function H(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function q(t){return t!==t}var Y=function(){for(var t="0123456789abcdef",e=new Array(256),r=0;r<16;++r)for(var n=16*r,o=0;o<16;++o)e[n+o]=t[r]+t[o];return e}()},645:function(t,e){e.read=function(t,e,r,n,o){var i,a,u=8*o-n-1,s=(1<<u)-1,f=s>>1,l=-7,c=r?o-1:0,h=r?-1:1,p=t[e+c];for(c+=h,i=p&(1<<-l)-1,p>>=-l,l+=u;l>0;i=256*i+t[e+c],c+=h,l-=8);for(a=i&(1<<-l)-1,i>>=-l,l+=n;l>0;a=256*a+t[e+c],c+=h,l-=8);if(0===i)i=1-f;else{if(i===s)return a?NaN:1/0*(p?-1:1);a+=Math.pow(2,n),i-=f}return(p?-1:1)*a*Math.pow(2,i-n)},e.write=function(t,e,r,n,o,i){var a,u,s,f=8*i-o-1,l=(1<<f)-1,c=l>>1,h=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:i-1,d=n?1:-1,y=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,a=l):(a=Math.floor(Math.log(e)/Math.LN2),e*(s=Math.pow(2,-a))<1&&(a--,s*=2),(e+=a+c>=1?h/s:h*Math.pow(2,1-c))*s>=2&&(a++,s/=2),a+c>=l?(u=0,a=l):a+c>=1?(u=(e*s-1)*Math.pow(2,o),a+=c):(u=e*Math.pow(2,c-1)*Math.pow(2,o),a=0));o>=8;t[r+p]=255&u,p+=d,u/=256,o-=8);for(a=a<<o|u,f+=o;f>0;t[r+p]=255&a,p+=d,a/=256,f-=8);t[r+p-d]|=128*y}},8e3:function(t,e,r){"use strict";var n;Object.defineProperty(e,"__esModule",{value:!0}),e.AmpStateContext=void 0;var o=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});e.AmpStateContext=o},5646:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isInAmpMode=a,e.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var n,o=(n=r(7294))&&n.__esModule?n:{default:n},i=r(8e3);function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,r=void 0!==e&&e,n=t.hybrid,o=void 0!==n&&n,i=t.hasQuery,a=void 0!==i&&i;return r||o&&a}},2717:function(t,e,r){"use strict";var n=r(9713);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}Object.defineProperty(e,"__esModule",{value:!0}),e.defaultHead=c,e.default=void 0;var i,a=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,r):{};n.get||n.set?Object.defineProperty(e,r,n):e[r]=t[r]}return e.default=t,e}(r(7294)),u=(i=r(1585))&&i.__esModule?i:{default:i},s=r(8e3),f=r(5850),l=r(5646);function c(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[a.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function h(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===a.default.Fragment?t.concat(a.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var p=["name","httpEquiv","charSet","itemProp"];function d(t,e){return t.reduce((function(t,e){var r=a.default.Children.toArray(e.props.children);return t.concat(r)}),[]).reduce(h,[]).reverse().concat(c(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,r=new Set,n={};return function(o){var i=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var u=o.key.slice(o.key.indexOf("$")+1);t.has(u)?i=!1:t.add(u)}switch(o.type){case"title":case"base":e.has(o.type)?i=!1:e.add(o.type);break;case"meta":for(var s=0,f=p.length;s<f;s++){var l=p[s];if(o.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?i=!1:r.add(l);else{var c=o.props[l],h=n[l]||new Set;"name"===l&&a||!h.has(c)?(h.add(c),n[l]=h):i=!1}}}return i}}()).reverse().map((function(t,r){var i=t.key||r;if(!e.inAmpMode&&"link"===t.type&&t.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(e){return t.props.href.startsWith(e)}))){var u=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},t.props||{});return u["data-href"]=u.href,u.href=void 0,u["data-optimized-fonts"]=!0,a.default.cloneElement(t,u)}return a.default.cloneElement(t,{key:i})}))}var y=function(t){var e=t.children,r=a.useContext(s.AmpStateContext),n=a.useContext(f.HeadManagerContext);return a.default.createElement(u.default,{reduceComponentsToState:d,headManager:n,inAmpMode:l.isInAmpMode(r)},e)};e.default=y},1585:function(t,e,r){"use strict";var n=r(319),o=r(4575),i=r(3913),a=(r(1506),r(2205)),u=r(8585),s=r(9754);function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=s(t);if(e){var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return u(this,r)}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,r):{};n.get||n.set?Object.defineProperty(e,r,n):e[r]=t[r]}return e.default=t,e}(r(7294));var c=function(t){a(r,t);var e=f(r);function r(t){var i;return o(this,r),(i=e.call(this,t)).emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(n(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(l.Component);e.default=c},9008:function(t,e,r){t.exports=r(2717)},91:function(t,e,r){"use strict";function n(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}r.d(e,{Z:function(){return n}})},7625:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(s){u=!0,o=s}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(t,e)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,{Z:function(){return o}})},3836:function(t,e,r){"use strict";function n(t,{target:e=document.body}={}){const r=document.createElement("textarea"),n=document.activeElement;r.value=t,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const o=document.getSelection();let i=!1;o.rangeCount>0&&(i=o.getRangeAt(0)),e.append(r),r.select(),r.selectionStart=0,r.selectionEnd=t.length;let a=!1;try{a=document.execCommand("copy")}catch{}return r.remove(),i&&(o.removeAllRanges(),o.addRange(i)),n&&n.focus(),a}r.d(e,{Z:function(){return n}})}}]);