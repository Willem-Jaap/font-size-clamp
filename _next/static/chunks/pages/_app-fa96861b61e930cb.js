(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8357:function(e,t,r){"use strict";r.d(t,{Z:function(){return oe}});var n=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(n){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),o=Math.abs,a=String.fromCharCode,c=Object.assign;function s(e){return e.trim()}function i(e,t,r){return e.replace(t,r)}function u(e,t){return e.indexOf(t)}function f(e,t){return 0|e.charCodeAt(t)}function l(e,t,r){return e.slice(t,r)}function d(e){return e.length}function p(e){return e.length}function y(e,t){return t.push(e),e}var h=1,m=1,g=0,v=0,b=0,w="";function x(e,t,r,n,o,a,c){return{value:e,root:t,parent:r,type:n,props:o,children:a,line:h,column:m,length:c,return:""}}function k(e,t){return c(x("",null,null,"",null,null,0),e,{length:-e.length},t)}function $(){return b=v>0?f(w,--v):0,m--,10===b&&(m=1,h--),b}function S(){return b=v<g?f(w,v++):0,m++,10===b&&(m=1,h++),b}function C(){return f(w,v)}function O(){return v}function E(e,t){return l(w,e,t)}function _(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function P(e){return h=m=1,g=d(w=e),v=0,[]}function A(e){return w="",e}function j(e){return s(E(v-1,T(91===e?e+2:40===e?e+1:e)))}function N(e){for(;(b=C())&&b<33;)S();return _(e)>2||_(b)>3?"":" "}function M(e,t){for(;--t&&S()&&!(b<48||b>102||b>57&&b<65||b>70&&b<97););return E(e,O()+(t<6&&32==C()&&32==S()))}function T(e){for(;S();)switch(b){case e:return v;case 34:case 39:34!==e&&39!==e&&T(b);break;case 40:41===e&&T(e);break;case 92:S()}return v}function z(e,t){for(;S()&&e+b!==57&&(e+b!==84||47!==C()););return"/*"+E(t,v-1)+"*"+a(47===e?e:S())}function Z(e){for(;!_(C());)S();return E(e,v)}var R="-ms-",F="-moz-",I="-webkit-",G="comm",L="rule",D="decl",B="@keyframes";function H(e,t){for(var r="",n=p(e),o=0;o<n;o++)r+=t(e[o],o,e,t)||"";return r}function W(e,t,r,n){switch(e.type){case"@import":case D:return e.return=e.return||e.value;case G:return"";case B:return e.return=e.value+"{"+H(e.children,n)+"}";case L:e.value=e.props.join(",")}return d(r=H(e.children,n))?e.return=e.value+"{"+r+"}":""}function X(e,t){switch(function(e,t){return(((t<<2^f(e,0))<<2^f(e,1))<<2^f(e,2))<<2^f(e,3)}(e,t)){case 5103:return I+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return I+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return I+e+F+e+R+e+e;case 6828:case 4268:return I+e+R+e+e;case 6165:return I+e+R+"flex-"+e+e;case 5187:return I+e+i(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return I+e+R+"flex-item-"+i(e,/flex-|-self/,"")+e;case 4675:return I+e+R+"flex-line-pack"+i(e,/align-content|flex-|-self/,"")+e;case 5548:return I+e+R+i(e,"shrink","negative")+e;case 5292:return I+e+R+i(e,"basis","preferred-size")+e;case 6060:return I+"box-"+i(e,"-grow","")+I+e+R+i(e,"grow","positive")+e;case 4554:return I+i(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return i(i(i(e,/(zoom-|grab)/,I+"$1"),/(image-set)/,I+"$1"),e,"")+e;case 5495:case 3959:return i(e,/(image-set\([^]*)/,I+"$1$`$1");case 4968:return i(i(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+I+e+e;case 4095:case 3583:case 4068:case 2532:return i(e,/(.+)-inline(.+)/,I+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(d(e)-1-t>6)switch(f(e,t+1)){case 109:if(45!==f(e,t+4))break;case 102:return i(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1"+F+(108==f(e,t+3)?"$3":"$2-$3"))+e;case 115:return~u(e,"stretch")?X(i(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==f(e,t+1))break;case 6444:switch(f(e,d(e)-3-(~u(e,"!important")&&10))){case 107:return i(e,":",":"+I)+e;case 101:return i(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+I+(45===f(e,14)?"inline-":"")+"box$3$1"+I+"$2$3$1"+R+"$2box$3")+e}break;case 5936:switch(f(e,t+11)){case 114:return I+e+R+i(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return I+e+R+i(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return I+e+R+i(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return I+e+R+e+e}return e}function Y(e){return A(q("",null,null,null,[""],e=P(e),0,[0],e))}function q(e,t,r,n,o,c,s,f,l){for(var p=0,h=0,m=s,g=0,v=0,b=0,w=1,x=1,k=1,E=0,_="",P=o,A=c,T=n,R=_;x;)switch(b=E,E=S()){case 40:if(108!=b&&58==R.charCodeAt(m-1)){-1!=u(R+=i(j(E),"&","&\f"),"&\f")&&(k=-1);break}case 34:case 39:case 91:R+=j(E);break;case 9:case 10:case 13:case 32:R+=N(b);break;case 92:R+=M(O()-1,7);continue;case 47:switch(C()){case 42:case 47:y(V(z(S(),O()),t,r),l);break;default:R+="/"}break;case 123*w:f[p++]=d(R)*k;case 125*w:case 59:case 0:switch(E){case 0:case 125:x=0;case 59+h:v>0&&d(R)-m&&y(v>32?Q(R+";",n,r,m-1):Q(i(R," ","")+";",n,r,m-2),l);break;case 59:R+=";";default:if(y(T=U(R,t,r,p,h,o,f,_,P=[],A=[],m),c),123===E)if(0===h)q(R,t,T,T,P,c,m,f,A);else switch(g){case 100:case 109:case 115:q(e,T,T,n&&y(U(e,T,T,0,0,o,f,_,o,P=[],m),A),o,A,m,f,n?P:A);break;default:q(R,T,T,T,[""],A,0,f,A)}}p=h=v=0,w=k=1,_=R="",m=s;break;case 58:m=1+d(R),v=b;default:if(w<1)if(123==E)--w;else if(125==E&&0==w++&&125==$())continue;switch(R+=a(E),E*w){case 38:k=h>0?1:(R+="\f",-1);break;case 44:f[p++]=(d(R)-1)*k,k=1;break;case 64:45===C()&&(R+=j(S())),g=C(),h=m=d(_=R+=Z(O())),E++;break;case 45:45===b&&2==d(R)&&(w=0)}}return c}function U(e,t,r,n,a,c,u,f,d,y,h){for(var m=a-1,g=0===a?c:[""],v=p(g),b=0,w=0,k=0;b<n;++b)for(var $=0,S=l(e,m+1,m=o(w=u[b])),C=e;$<v;++$)(C=s(w>0?g[$]+" "+S:i(S,/&\f/g,g[$])))&&(d[k++]=C);return x(e,t,r,0===a?L:f,d,y,h)}function V(e,t,r){return x(e,t,r,G,a(b),l(e,2,-2),0)}function Q(e,t,r,n){return x(e,t,r,D,l(e,0,n),l(e,n+1,-1),n)}var J=function(e,t,r){for(var n=0,o=0;n=o,o=C(),38===n&&12===o&&(t[r]=1),!_(o);)S();return E(e,v)},K=function(e,t){return A(function(e,t){var r=-1,n=44;do{switch(_(n)){case 0:38===n&&12===C()&&(t[r]=1),e[r]+=J(v-1,t,r);break;case 2:e[r]+=j(n);break;case 4:if(44===n){e[++r]=58===C()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=a(n)}}while(n=S());return e}(P(e),t))},ee=new WeakMap,te=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||ee.get(r))&&!n){ee.set(e,!0);for(var o=[],a=K(t,o),c=r.props,s=0,i=0;s<a.length;s++)for(var u=0;u<c.length;u++,i++)e.props[i]=o[s]?a[s].replace(/&\f/g,c[u]):c[u]+" "+a[s]}}},re=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},ne=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case D:e.return=X(e.value,e.length);break;case B:return H([k(e,{value:i(e.value,"@","@"+I)})],n);case L:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return H([k(e,{props:[i(t,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return H([k(e,{props:[i(t,/:(plac\w+)/,":-webkit-input-$1")]}),k(e,{props:[i(t,/:(plac\w+)/,":-moz-$1")]}),k(e,{props:[i(t,/:(plac\w+)/,R+"input-$1")]})],n)}return""}))}}],oe=function(e){var t=e.key;if("css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var o=e.stylisPlugins||ne;var a,c,s={},i=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)s[t[r]]=!0;i.push(e)}));var u,f,l=[W,(f=function(e){u.insert(e)},function(e){e.root||(e=e.return)&&f(e)})],d=function(e){var t=p(e);return function(r,n,o,a){for(var c="",s=0;s<t;s++)c+=e[s](r,n,o,a)||"";return c}}([te,re].concat(o,l));c=function(e,t,r,n){u=r,H(Y(e?e+"{"+t.styles+"}":t.styles),d),n&&(y.inserted[t.name]=!0)};var y={key:t,sheet:new n({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:c};return y.sheet.hydrate(i),y}},5042:function(e,t){"use strict";t.Z=function(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}},511:function(e,t,r){"use strict";r.d(t,{E:function(){return w},T:function(){return p},b:function(){return h},c:function(){return v},h:function(){return f},w:function(){return d}});var n=r(7294),o=r.t(n,2),a=r(8357),c=r(7462),s=function(e){var t=new WeakMap;return function(r){if(t.has(r))return t.get(r);var n=e(r);return t.set(r,n),n}},i=r(444),u=r(8137),f={}.hasOwnProperty,l=(0,n.createContext)("undefined"!==typeof HTMLElement?(0,a.Z)({key:"css"}):null);l.Provider;var d=function(e){return(0,n.forwardRef)((function(t,r){var o=(0,n.useContext)(l);return e(t,o,r)}))},p=(0,n.createContext)({});var y=s((function(e){return s((function(t){return function(e,t){return"function"===typeof t?t(e):(0,c.Z)({},e,t)}(e,t)}))})),h=function(e){var t=(0,n.useContext)(p);return e.theme!==t&&(t=y(t)(e.theme)),(0,n.createElement)(p.Provider,{value:t},e.children)};var m=o.useInsertionEffect?o.useInsertionEffect:function(e){e()};var g="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",v=function(e,t){var r={};for(var n in t)f.call(t,n)&&(r[n]=t[n]);return r[g]=e,r},b=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;(0,i.hC)(t,r,n);m((function(){return(0,i.My)(t,r,n)}));return null},w=d((function(e,t,r){var o=e.css;"string"===typeof o&&void 0!==t.registered[o]&&(o=t.registered[o]);var a=e[g],c=[o],s="";"string"===typeof e.className?s=(0,i.fp)(t.registered,c,e.className):null!=e.className&&(s=e.className+" ");var l=(0,u.O)(c,void 0,(0,n.useContext)(p));s+=t.key+"-"+l.name;var d={};for(var y in e)f.call(e,y)&&"css"!==y&&y!==g&&(d[y]=e[y]);return d.ref=r,d.className=s,(0,n.createElement)(n.Fragment,null,(0,n.createElement)(b,{cache:t,serialized:l,isStringTag:"string"===typeof a}),(0,n.createElement)(a,d))}))},917:function(e,t,r){"use strict";var n;r.d(t,{iv:function(){return f},xB:function(){return u}});var o=r(7294),a=(r(8357),r(511)),c=(r(8679),r(444)),s=r(8137),i=(n||(n=r.t(o,2))).useInsertionEffect?(n||(n=r.t(o,2))).useInsertionEffect:o.useLayoutEffect,u=(0,a.w)((function(e,t){var r=e.styles,n=(0,s.O)([r],void 0,(0,o.useContext)(a.T)),u=(0,o.useRef)();return i((function(){var e=t.key+"-global",r=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),o=!1,a=document.querySelector('style[data-emotion="'+e+" "+n.name+'"]');return t.sheet.tags.length&&(r.before=t.sheet.tags[0]),null!==a&&(o=!0,a.setAttribute("data-emotion",e),r.hydrate([a])),u.current=[r,o],function(){r.flush()}}),[t]),i((function(){var e=u.current,r=e[0];if(e[1])e[1]=!1;else{if(void 0!==n.next&&(0,c.My)(t,n.next,!0),r.tags.length){var o=r.tags[r.tags.length-1].nextElementSibling;r.before=o,r.flush()}t.insert("",n,r,!1)}}),[t,n.name]),null}));function f(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.O)(t)}},5944:function(e,t,r){"use strict";r.d(t,{BX:function(){return s},HY:function(){return a},tZ:function(){return c}});r(7294),r(8357);var n=r(511),o=(r(8679),r(8137),r(5893)),a=o.Fragment;function c(e,t,r){return n.h.call(t,"css")?(0,o.jsx)(n.E,(0,n.c)(e,t),r):(0,o.jsx)(e,t,r)}function s(e,t,r){return n.h.call(t,"css")?(0,o.jsxs)(n.E,(0,n.c)(e,t),r):(0,o.jsxs)(e,t,r)}},8137:function(e,t,r){"use strict";r.d(t,{O:function(){return h}});var n=function(e){for(var t,r=0,n=0,o=e.length;o>=4;++n,o-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(o){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)},o={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},a=r(5042),c=/[A-Z]|^ms/g,s=/_EMO_([^_]+?)_([^]*?)_EMO_/g,i=function(e){return 45===e.charCodeAt(1)},u=function(e){return null!=e&&"boolean"!==typeof e},f=(0,a.Z)((function(e){return i(e)?e:e.replace(c,"-$&").toLowerCase()})),l=function(e,t){switch(e){case"animation":case"animationName":if("string"===typeof t)return t.replace(s,(function(e,t,r){return p={name:t,styles:r,next:p},t}))}return 1===o[e]||i(e)||"number"!==typeof t||0===t?t:t+"px"};function d(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return p={name:r.name,styles:r.styles,next:p},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)p={name:n.name,styles:n.styles,next:p},n=n.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var o=0;o<r.length;o++)n+=d(e,t,r[o])+";";else for(var a in r){var c=r[a];if("object"!==typeof c)null!=t&&void 0!==t[c]?n+=a+"{"+t[c]+"}":u(c)&&(n+=f(a)+":"+l(a,c)+";");else if(!Array.isArray(c)||"string"!==typeof c[0]||null!=t&&void 0!==t[c[0]]){var s=d(e,t,c);switch(a){case"animation":case"animationName":n+=f(a)+":"+s+";";break;default:n+=a+"{"+s+"}"}}else for(var i=0;i<c.length;i++)u(c[i])&&(n+=f(a)+":"+l(a,c[i])+";")}return n}(e,t,r);case"function":if(void 0!==e){var o=p,a=r(e);return p=o,d(e,t,a)}}if(null==t)return r;var c=t[r];return void 0!==c?c:r}var p,y=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var h=function(e,t,r){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var o=!0,a="";p=void 0;var c=e[0];null==c||void 0===c.raw?(o=!1,a+=d(r,t,c)):a+=c[0];for(var s=1;s<e.length;s++)a+=d(r,t,e[s]),o&&(a+=c[s]);y.lastIndex=0;for(var i,u="";null!==(i=y.exec(a));)u+="-"+i[1];return{name:n(a)+u,styles:a,next:p}}},444:function(e,t,r){"use strict";r.d(t,{My:function(){return a},fp:function(){return n},hC:function(){return o}});function n(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]+";"):n+=r+" "})),n}var o=function(e,t,r){var n=e.key+"-"+t.name;!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},a=function(e,t,r){o(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var a=t;do{e.insert(t===a?"."+n:"",a,e.sheet,!0);a=a.next}while(void 0!==a)}}},8679:function(e,t,r){"use strict";var n=r(9864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function i(e){return n.isMemo(e)?c:s[e.$$typeof]||o}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=c;var u=Object.defineProperty,f=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(y){var o=p(r);o&&o!==y&&e(t,o,n)}var c=f(r);l&&(c=c.concat(l(r)));for(var s=i(t),h=i(r),m=0;m<c.length;++m){var g=c[m];if(!a[g]&&(!n||!n[g])&&(!h||!h[g])&&(!s||!s[g])){var v=d(r,g);try{u(t,g,v)}catch(b){}}}}return t}},6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(7717)}])},7717:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(6042),o=r(5944),a=r(511),c=r(4298),s=r.n(c),i={borderRadius:{small:"0.25rem"}},u=r(917);function f(){return(0,o.tZ)(u.xB,{styles:[(0,u.iv)(":root{--background:#fff;--background100:#f2f4f7;--foreground:#333;--foreground100:#c8cacc;--border:#d8d8da;--primary:#06f;@media (prefers-color-scheme:dark){--background:#161b22;--background100:#222830;--foreground:#fff;--foreground100:#595d65;--border:#595d65;--primary:#1e6eea;}}*,*::after,*::before{box-sizing:border-box;}body{background-color:var(--background);color:var(--foreground);margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif;}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0;}input[type='number']{-moz-appearance:textfield;}svg{fill:currentColor;}")]})}function l(e){var t=e.Component,r=e.pageProps;return(0,o.BX)(o.HY,{children:[(0,o.BX)(o.HY,{children:[(0,o.tZ)(s(),{id:"gtag",strategy:"lazyOnload",src:"https://www.googletagmanager.com/gtag/js?id=".concat("G-HFGCYQVS7W")}),(0,o.tZ)(s(),{id:"gtag-setup",strategy:"lazyOnload",children:"\n\t\t\t\t\t\t\twindow.dataLayer = window.dataLayer || [];\n\t\t\t\t\t\t\tfunction gtag() {\n\t\t\t\t\t\t\t\tdataLayer.push(arguments);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tgtag('js', new Date());\n\t\t\t\t\t\t\tgtag('config', '".concat("G-HFGCYQVS7W","');\n\t\t\t\t\t\t")})]}),(0,o.BX)(a.b,{theme:i,children:[(0,o.tZ)(f,{}),(0,o.tZ)(t,(0,n.Z)({},r))]})]})}},4298:function(e,t,r){e.exports=r(699)},9921:function(e,t){"use strict";var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,i=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,l=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.suspense_list"):60120,h=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,b=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function x(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case f:case l:case a:case s:case c:case p:return e;default:switch(e=e&&e.$$typeof){case u:case d:case m:case h:case i:return e;default:return t}}case o:return t}}}function k(e){return x(e)===l}t.AsyncMode=f,t.ConcurrentMode=l,t.ContextConsumer=u,t.ContextProvider=i,t.Element=n,t.ForwardRef=d,t.Fragment=a,t.Lazy=m,t.Memo=h,t.Portal=o,t.Profiler=s,t.StrictMode=c,t.Suspense=p,t.isAsyncMode=function(e){return k(e)||x(e)===f},t.isConcurrentMode=k,t.isContextConsumer=function(e){return x(e)===u},t.isContextProvider=function(e){return x(e)===i},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return x(e)===d},t.isFragment=function(e){return x(e)===a},t.isLazy=function(e){return x(e)===m},t.isMemo=function(e){return x(e)===h},t.isPortal=function(e){return x(e)===o},t.isProfiler=function(e){return x(e)===s},t.isStrictMode=function(e){return x(e)===c},t.isSuspense=function(e){return x(e)===p},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===a||e===l||e===s||e===c||e===p||e===y||"object"===typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===h||e.$$typeof===i||e.$$typeof===u||e.$$typeof===d||e.$$typeof===v||e.$$typeof===b||e.$$typeof===w||e.$$typeof===g)},t.typeOf=x},9864:function(e,t,r){"use strict";e.exports=r(9921)},7462:function(e,t,r){"use strict";function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}r.d(t,{Z:function(){return n}})},4924:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{Z:function(){return n}})},6042:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(4924);function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){(0,n.Z)(e,t,r[t])}))}return e}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6840),t(387)}));var r=e.O();_N_E=r}]);