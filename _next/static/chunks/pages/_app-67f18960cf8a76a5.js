(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8417:function(e,t,r){"use strict";r.d(t,{Z:function(){return H}});var n=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)==0){var t;this._insertTag(((t=document.createElement("style")).setAttribute("data-emotion",this.key),void 0!==this.nonce&&t.setAttribute("nonce",this.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t))}var r=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(r);try{n.insertRule(e,n.cssRules.length)}catch(e){}}else r.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),this.tags=[],this.ctr=0},e}(),a=Math.abs,o=String.fromCharCode,c=Object.assign;function s(e,t,r){return e.replace(t,r)}function i(e,t){return e.indexOf(t)}function u(e,t){return 0|e.charCodeAt(t)}function f(e,t,r){return e.slice(t,r)}function l(e){return e.length}function d(e,t){return t.push(e),e}var p=1,y=1,h=0,m=0,g=0,v="";function b(e,t,r,n,a,o,c){return{value:e,root:t,parent:r,type:n,props:a,children:o,line:p,column:y,length:c,return:""}}function w(e,t){return c(b("",null,null,"",null,null,0),e,{length:-e.length},t)}function x(){return g=m<h?u(v,m++):0,y++,10===g&&(y=1,p++),g}function k(){return u(v,m)}function $(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function S(e){return p=y=1,h=l(v=e),m=0,[]}function C(e){var t,r;return(t=m-1,r=function e(t){for(;x();)switch(g){case t:return m;case 34:case 39:34!==t&&39!==t&&e(g);break;case 40:41===t&&e(t);break;case 92:x()}return m}(91===e?e+2:40===e?e+1:e),f(v,t,r)).trim()}var O="-ms-",_="-moz-",E="-webkit-",A="comm",P="rule",j="decl",N="@keyframes";function M(e,t){for(var r="",n=e.length,a=0;a<n;a++)r+=t(e[a],a,e,t)||"";return r}function T(e,t,r,n){switch(e.type){case"@import":case j:return e.return=e.return||e.value;case A:return"";case N:return e.return=e.value+"{"+M(e.children,n)+"}";case P:e.value=e.props.join(",")}return l(r=M(e.children,n))?e.return=e.value+"{"+r+"}":""}function z(e,t,r,n,o,c,i,u,l,d,p){for(var y=o-1,h=0===o?c:[""],m=h.length,g=0,v=0,w=0;g<n;++g)for(var x=0,k=f(e,y+1,y=a(v=i[g])),$=e;x<m;++x)($=(v>0?h[x]+" "+k:s(k,/&\f/g,h[x])).trim())&&(l[w++]=$);return b(e,t,r,0===o?P:u,l,d,p)}function R(e,t,r,n){return b(e,t,r,j,f(e,0,n),f(e,n+1,-1),n)}var F=function(e,t,r){for(var n=0,a=0;n=a,a=k(),38===n&&12===a&&(t[r]=1),!$(a);)x();return f(v,e,m)},Z=function(e,t){var r=-1,n=44;do switch($(n)){case 0:38===n&&12===k()&&(t[r]=1),e[r]+=F(m-1,t,r);break;case 2:e[r]+=C(n);break;case 4:if(44===n){e[++r]=58===k()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=o(n)}while(n=x());return e},L=function(e,t){var r;return r=Z(S(e),t),v="",r},G=new WeakMap,I=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||G.get(r))&&!n){G.set(e,!0);for(var a=[],o=L(t,a),c=r.props,s=0,i=0;s<o.length;s++)for(var u=0;u<c.length;u++,i++)e.props[i]=a[s]?o[s].replace(/&\f/g,c[u]):c[u]+" "+o[s]}}},B=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},D=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case j:e.return=function e(t,r){switch(45^u(t,0)?(((r<<2^u(t,0))<<2^u(t,1))<<2^u(t,2))<<2^u(t,3):0){case 5103:return E+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return E+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return E+t+_+t+O+t+t;case 6828:case 4268:return E+t+O+t+t;case 6165:return E+t+O+"flex-"+t+t;case 5187:return E+t+s(t,/(\w+).+(:[^]+)/,E+"box-$1$2"+O+"flex-$1$2")+t;case 5443:return E+t+O+"flex-item-"+s(t,/flex-|-self/,"")+t;case 4675:return E+t+O+"flex-line-pack"+s(t,/align-content|flex-|-self/,"")+t;case 5548:return E+t+O+s(t,"shrink","negative")+t;case 5292:return E+t+O+s(t,"basis","preferred-size")+t;case 6060:return E+"box-"+s(t,"-grow","")+E+t+O+s(t,"grow","positive")+t;case 4554:return E+s(t,/([^-])(transform)/g,"$1"+E+"$2")+t;case 6187:return s(s(s(t,/(zoom-|grab)/,E+"$1"),/(image-set)/,E+"$1"),t,"")+t;case 5495:case 3959:return s(t,/(image-set\([^]*)/,E+"$1$`$1");case 4968:return s(s(t,/(.+:)(flex-)?(.*)/,E+"box-pack:$3"+O+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+E+t+t;case 4095:case 3583:case 4068:case 2532:return s(t,/(.+)-inline(.+)/,E+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(l(t)-1-r>6)switch(u(t,r+1)){case 109:if(45!==u(t,r+4))break;case 102:return s(t,/(.+:)(.+)-([^]+)/,"$1"+E+"$2-$3$1"+_+(108==u(t,r+3)?"$3":"$2-$3"))+t;case 115:return~i(t,"stretch")?e(s(t,"stretch","fill-available"),r)+t:t}break;case 4949:if(115!==u(t,r+1))break;case 6444:switch(u(t,l(t)-3-(~i(t,"!important")&&10))){case 107:return s(t,":",":"+E)+t;case 101:return s(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+E+(45===u(t,14)?"inline-":"")+"box$3$1"+E+"$2$3$1"+O+"$2box$3")+t}break;case 5936:switch(u(t,r+11)){case 114:return E+t+O+s(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return E+t+O+s(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return E+t+O+s(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return E+t+O+t+t}return t}(e.value,e.length);break;case N:return M([w(e,{value:s(e.value,"@","@"+E)})],n);case P:if(e.length)return e.props.map(function(t){var r;switch(r=t,(r=/(::plac\w+|:read-\w+)/.exec(r))?r[0]:r){case":read-only":case":read-write":return M([w(e,{props:[s(t,/:(read-\w+)/,":"+_+"$1")]})],n);case"::placeholder":return M([w(e,{props:[s(t,/:(plac\w+)/,":"+E+"input-$1")]}),w(e,{props:[s(t,/:(plac\w+)/,":"+_+"$1")]}),w(e,{props:[s(t,/:(plac\w+)/,O+"input-$1")]})],n)}return""}).join("")}}],H=function(e){var t,r,a,c,h,w=e.key;if("css"===w){var O=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(O,function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))})}var _=e.stylisPlugins||D,E={},P=[];c=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+w+' "]'),function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)E[t[r]]=!0;P.push(e)});var j=(r=(t=[I,B].concat(_,[T,(a=function(e){h.insert(e)},function(e){!e.root&&(e=e.return)&&a(e)})])).length,function(e,n,a,o){for(var c="",s=0;s<r;s++)c+=t[s](e,n,a,o)||"";return c}),N=function(e){var t,r;return M((r=function e(t,r,n,a,c,h,w,S,O){for(var _,E=0,P=0,j=w,N=0,M=0,T=0,F=1,Z=1,L=1,G=0,I="",B=c,D=h,H=a,W=I;Z;)switch(T=G,G=x()){case 40:if(108!=T&&58==u(W,j-1)){-1!=i(W+=s(C(G),"&","&\f"),"&\f")&&(L=-1);break}case 34:case 39:case 91:W+=C(G);break;case 9:case 10:case 13:case 32:W+=function(e){for(;g=k();)if(g<33)x();else break;return $(e)>2||$(g)>3?"":" "}(T);break;case 92:W+=function(e,t){for(var r;--t&&x()&&!(g<48)&&!(g>102)&&(!(g>57)||!(g<65))&&(!(g>70)||!(g<97)););return r=m+(t<6&&32==k()&&32==x()),f(v,e,r)}(m-1,7);continue;case 47:switch(k()){case 42:case 47:d(b(_=function(e,t){for(;x();)if(e+g===57)break;else if(e+g===84&&47===k())break;return"/*"+f(v,t,m-1)+"*"+o(47===e?e:x())}(x(),m),r,n,A,o(g),f(_,2,-2),0),O);break;default:W+="/"}break;case 123*F:S[E++]=l(W)*L;case 125*F:case 59:case 0:switch(G){case 0:case 125:Z=0;case 59+P:M>0&&l(W)-j&&d(M>32?R(W+";",a,n,j-1):R(s(W," ","")+";",a,n,j-2),O);break;case 59:W+=";";default:if(d(H=z(W,r,n,E,P,c,S,I,B=[],D=[],j),h),123===G){if(0===P)e(W,r,H,H,B,h,j,S,D);else switch(99===N&&110===u(W,3)?100:N){case 100:case 109:case 115:e(t,H,H,a&&d(z(t,H,H,0,0,c,S,I,c,B=[],j),D),c,D,j,S,a?B:D);break;default:e(W,H,H,H,[""],D,0,S,D)}}}E=P=M=0,F=L=1,I=W="",j=w;break;case 58:j=1+l(W),M=T;default:if(F<1){if(123==G)--F;else if(125==G&&0==F++&&125==(g=m>0?u(v,--m):0,y--,10===g&&(y=1,p--),g))continue}switch(W+=o(G),G*F){case 38:L=P>0?1:(W+="\f",-1);break;case 44:S[E++]=(l(W)-1)*L,L=1;break;case 64:45===k()&&(W+=C(x())),N=k(),P=j=l(I=W+=function(e){for(;!$(k());)x();return f(v,e,m)}(m)),G++;break;case 45:45===T&&2==l(W)&&(F=0)}}return h}("",null,null,null,[""],t=S(t=e),0,[0],t),v="",r),j)},F={key:w,sheet:new n({key:w,container:c,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:E,registered:{},insert:function(e,t,r,n){h=r,N(e?e+"{"+t.styles+"}":t.styles),n&&(F.inserted[t.name]=!0)}};return F.sheet.hydrate(P),F}},5042:function(e,t){"use strict";t.Z=function(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}},1683:function(e,t,r){"use strict";r.d(t,{E:function(){return b},T:function(){return p},a:function(){return h},c:function(){return g},h:function(){return f},w:function(){return d}});var n=r(7294),a=r(8417),o=r(7462),c=function(e){var t=new WeakMap;return function(r){if(t.has(r))return t.get(r);var n=e(r);return t.set(r,n),n}},s=r(444),i=r(8137),u=r(7278),f={}.hasOwnProperty,l=(0,n.createContext)("undefined"!=typeof HTMLElement?(0,a.Z)({key:"css"}):null);l.Provider;var d=function(e){return(0,n.forwardRef)(function(t,r){return e(t,(0,n.useContext)(l),r)})},p=(0,n.createContext)({}),y=c(function(e){return c(function(t){return"function"==typeof t?t(e):(0,o.Z)({},e,t)})}),h=function(e){var t=(0,n.useContext)(p);return e.theme!==t&&(t=y(t)(e.theme)),(0,n.createElement)(p.Provider,{value:t},e.children)},m="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",g=function(e,t){var r={};for(var n in t)f.call(t,n)&&(r[n]=t[n]);return r[m]=e,r},v=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;return(0,s.hC)(t,r,n),(0,u.L)(function(){return(0,s.My)(t,r,n)}),null},b=d(function(e,t,r){var a=e.css;"string"==typeof a&&void 0!==t.registered[a]&&(a=t.registered[a]);var o=e[m],c=[a],u="";"string"==typeof e.className?u=(0,s.fp)(t.registered,c,e.className):null!=e.className&&(u=e.className+" ");var l=(0,i.O)(c,void 0,(0,n.useContext)(p));u+=t.key+"-"+l.name;var d={};for(var y in e)f.call(e,y)&&"css"!==y&&y!==m&&(d[y]=e[y]);return d.ref=r,d.className=u,(0,n.createElement)(n.Fragment,null,(0,n.createElement)(v,{cache:t,serialized:l,isStringTag:"string"==typeof o}),(0,n.createElement)(o,d))})},917:function(e,t,r){"use strict";r.d(t,{iv:function(){return u},xB:function(){return i}});var n=r(7294);r(8417);var a=r(1683);r(8679);var o=r(444),c=r(8137),s=r(7278),i=(0,a.w)(function(e,t){var r=e.styles,i=(0,c.O)([r],void 0,(0,n.useContext)(a.T)),u=(0,n.useRef)();return(0,s.j)(function(){var e=t.key+"-global",r=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),n=!1,a=document.querySelector('style[data-emotion="'+e+" "+i.name+'"]');return t.sheet.tags.length&&(r.before=t.sheet.tags[0]),null!==a&&(n=!0,a.setAttribute("data-emotion",e),r.hydrate([a])),u.current=[r,n],function(){r.flush()}},[t]),(0,s.j)(function(){var e=u.current,r=e[0];if(e[1]){e[1]=!1;return}if(void 0!==i.next&&(0,o.My)(t,i.next,!0),r.tags.length){var n=r.tags[r.tags.length-1].nextElementSibling;r.before=n,r.flush()}t.insert("",i,r,!1)},[t,i.name]),null});function u(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,c.O)(t)}},5944:function(e,t,r){"use strict";r.d(t,{BX:function(){return s},HY:function(){return o},tZ:function(){return c}}),r(7294),r(8417);var n=r(1683);r(8679),r(8137),r(7278);var a=r(5893),o=a.Fragment;function c(e,t,r){return n.h.call(t,"css")?(0,a.jsx)(n.E,(0,n.c)(e,t),r):(0,a.jsx)(e,t,r)}function s(e,t,r){return n.h.call(t,"css")?(0,a.jsxs)(n.E,(0,n.c)(e,t),r):(0,a.jsxs)(e,t,r)}},8137:function(e,t,r){"use strict";r.d(t,{O:function(){return h}});var n,a=function(e){for(var t,r=0,n=0,a=e.length;a>=4;++n,a-=4)t=(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(65535&t)*1540483477+((t>>>16)*59797<<16)^(65535&r)*1540483477+((r>>>16)*59797<<16);switch(a){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r^=255&e.charCodeAt(n),r=(65535&r)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,(((r=(65535&r)*1540483477+((r>>>16)*59797<<16))^r>>>15)>>>0).toString(36)},o={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},c=r(5042),s=/[A-Z]|^ms/g,i=/_EMO_([^_]+?)_([^]*?)_EMO_/g,u=function(e){return 45===e.charCodeAt(1)},f=function(e){return null!=e&&"boolean"!=typeof e},l=(0,c.Z)(function(e){return u(e)?e:e.replace(s,"-$&").toLowerCase()}),d=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(i,function(e,t,r){return n={name:t,styles:r,next:n},t})}return 1===o[e]||u(e)||"number"!=typeof t||0===t?t:t+"px"};function p(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return n={name:r.name,styles:r.styles,next:n},r.name;if(void 0!==r.styles){var a=r.next;if(void 0!==a)for(;void 0!==a;)n={name:a.name,styles:a.styles,next:n},a=a.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var a=0;a<r.length;a++)n+=p(e,t,r[a])+";";else for(var o in r){var c=r[o];if("object"!=typeof c)null!=t&&void 0!==t[c]?n+=o+"{"+t[c]+"}":f(c)&&(n+=l(o)+":"+d(o,c)+";");else if(Array.isArray(c)&&"string"==typeof c[0]&&(null==t||void 0===t[c[0]]))for(var s=0;s<c.length;s++)f(c[s])&&(n+=l(o)+":"+d(o,c[s])+";");else{var i=p(e,t,c);switch(o){case"animation":case"animationName":n+=l(o)+":"+i+";";break;default:n+=o+"{"+i+"}"}}}return n}(e,t,r);case"function":if(void 0!==e){var o=n,c=r(e);return n=o,p(e,t,c)}}if(null==t)return r;var s=t[r];return void 0!==s?s:r}var y=/label:\s*([^\s;\n{]+)\s*(;|$)/g,h=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var o,c=!0,s="";n=void 0;var i=e[0];null==i||void 0===i.raw?(c=!1,s+=p(r,t,i)):s+=i[0];for(var u=1;u<e.length;u++)s+=p(r,t,e[u]),c&&(s+=i[u]);y.lastIndex=0;for(var f="";null!==(o=y.exec(s));)f+="-"+o[1];return{name:a(s)+f,styles:s,next:n}}},7278:function(e,t,r){"use strict";r.d(t,{L:function(){return c},j:function(){return s}});var n,a=r(7294),o=!!(n||(n=r.t(a,2))).useInsertionEffect&&(n||(n=r.t(a,2))).useInsertionEffect,c=o||function(e){return e()},s=o||a.useLayoutEffect},444:function(e,t,r){"use strict";function n(e,t,r){var n="";return r.split(" ").forEach(function(r){void 0!==e[r]?t.push(e[r]+";"):n+=r+" "}),n}r.d(t,{My:function(){return o},fp:function(){return n},hC:function(){return a}});var a=function(e,t,r){var n=e.key+"-"+t.name;!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},o=function(e,t,r){a(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var o=t;do e.insert(t===o?"."+n:"",o,e.sheet,!0),o=o.next;while(void 0!==o)}}},8679:function(e,t,r){"use strict";var n=r(9864),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function i(e){return n.isMemo(e)?c:s[e.$$typeof]||a}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=c;var u=Object.defineProperty,f=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(y){var a=p(r);a&&a!==y&&e(t,a,n)}var c=f(r);l&&(c=c.concat(l(r)));for(var s=i(t),h=i(r),m=0;m<c.length;++m){var g=c[m];if(!o[g]&&!(n&&n[g])&&!(h&&h[g])&&!(s&&s[g])){var v=d(r,g);try{u(t,g,v)}catch(e){}}}}return t}},6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(7198)}])},7198:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(5944),a=r(1683),o=r(4298),c=r.n(o);let s={borderRadius:{small:"0.25rem"}};var i=r(917);function u(){return(0,n.tZ)(i.xB,{styles:[(0,i.iv)(":root{--background:#fff;--background100:#f2f4f7;--foreground:#333;--foreground100:#c8cacc;--border:#d8d8da;--primary:#06f;@media (prefers-color-scheme:dark){--background:#161b22;--background100:#222830;--foreground:#fff;--foreground100:#595d65;--border:#595d65;--primary:#1e6eea;}}*,*::after,*::before{box-sizing:border-box;}body{background-color:var(--background);color:var(--foreground);margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif;}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0;}input[type='number']{-moz-appearance:textfield;}svg{fill:currentColor;}")]})}function f(e){let{Component:t,pageProps:r}=e;return(0,n.BX)(n.HY,{children:[(0,n.BX)(n.HY,{children:[(0,n.tZ)(c(),{id:"gtag",strategy:"lazyOnload",src:"https://www.googletagmanager.com/gtag/js?id=".concat("G-HFGCYQVS7W")}),(0,n.tZ)(c(),{id:"gtag-setup",strategy:"lazyOnload",children:"\n							window.dataLayer = window.dataLayer || [];\n							function gtag() {\n								dataLayer.push(arguments);\n							}\n							gtag('js', new Date());\n							gtag('config', '".concat("G-HFGCYQVS7W","');\n						")})]}),(0,n.BX)(a.a,{theme:s,children:[(0,n.tZ)(u,{}),(0,n.tZ)(t,{...r})]})]})}},4298:function(e,t,r){e.exports=r(3573)},9921:function(e,t){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,i=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,l=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.suspense_list"):60120,h=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,b=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case f:case l:case o:case s:case c:case p:return e;default:switch(e=e&&e.$$typeof){case u:case d:case m:case h:case i:return e;default:return t}}case a:return t}}}function k(e){return x(e)===l}t.AsyncMode=f,t.ConcurrentMode=l,t.ContextConsumer=u,t.ContextProvider=i,t.Element=n,t.ForwardRef=d,t.Fragment=o,t.Lazy=m,t.Memo=h,t.Portal=a,t.Profiler=s,t.StrictMode=c,t.Suspense=p,t.isAsyncMode=function(e){return k(e)||x(e)===f},t.isConcurrentMode=k,t.isContextConsumer=function(e){return x(e)===u},t.isContextProvider=function(e){return x(e)===i},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return x(e)===d},t.isFragment=function(e){return x(e)===o},t.isLazy=function(e){return x(e)===m},t.isMemo=function(e){return x(e)===h},t.isPortal=function(e){return x(e)===a},t.isProfiler=function(e){return x(e)===s},t.isStrictMode=function(e){return x(e)===c},t.isSuspense=function(e){return x(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===l||e===s||e===c||e===p||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===h||e.$$typeof===i||e.$$typeof===u||e.$$typeof===d||e.$$typeof===v||e.$$typeof===b||e.$$typeof===w||e.$$typeof===g)},t.typeOf=x},9864:function(e,t,r){"use strict";e.exports=r(9921)},7462:function(e,t,r){"use strict";function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(880)}),_N_E=e.O()}]);