var Xr=typeof global=="object"&&global&&global.Object===Object&&global,tr=Xr,Jr=typeof self=="object"&&self&&self.Object===Object&&self,Zr=tr||Jr||Function("return this")(),m=Zr,qr=m.Symbol,$=qr,er=Object.prototype,Yr=er.hasOwnProperty,Qr=er.toString,j=$?$.toStringTag:void 0;function kr(r){var t=Yr.call(r,j),e=r[j];try{r[j]=void 0;var n=!0}catch(o){}var a=Qr.call(r);return n&&(t?r[j]=e:delete r[j]),a}var rt=Object.prototype,tt=rt.toString;function et(r){return tt.call(r)}var nt="[object Null]",at="[object Undefined]",nr=$?$.toStringTag:void 0;function P(r){return r==null?r===void 0?at:nt:nr&&nr in Object(r)?kr(r):et(r)}function O(r){return r!=null&&typeof r=="object"}var it="[object Symbol]";function R(r){return typeof r=="symbol"||O(r)&&P(r)==it}function ot(r,t){for(var e=-1,n=r==null?0:r.length,a=Array(n);++e<n;)a[e]=t(r[e],e,r);return a}var ut=Array.isArray,x=ut,ft=1/0,ar=$?$.prototype:void 0,ir=ar?ar.toString:void 0;function or(r){if(typeof r=="string")return r;if(x(r))return ot(r,or)+"";if(R(r))return ir?ir.call(r):"";var t=r+"";return t=="0"&&1/r==-ft?"-0":t}var st=/\s/;function ct(r){for(var t=r.length;t--&&st.test(r.charAt(t)););return t}var lt=/^\s+/;function pt(r){return r&&r.slice(0,ct(r)+1).replace(lt,"")}function h(r){var t=typeof r;return r!=null&&(t=="object"||t=="function")}var ur=0/0,dt=/^[-+]0x[0-9a-f]+$/i,ht=/^0b[01]+$/i,gt=/^0o[0-7]+$/i,vt=parseInt;function fr(r){if(typeof r=="number")return r;if(R(r))return ur;if(h(r)){var t=typeof r.valueOf=="function"?r.valueOf():r;r=h(t)?t+"":t}if(typeof r!="string")return r===0?r:+r;r=pt(r);var e=ht.test(r);return e||gt.test(r)?vt(r.slice(2),e?2:8):dt.test(r)?ur:+r}function sr(r){return r}var yt="[object AsyncFunction]",bt="[object Function]",_t="[object GeneratorFunction]",mt="[object Proxy]";function D(r){if(!h(r))return!1;var t=P(r);return t==bt||t==_t||t==yt||t==mt}var Tt=m["__core-js_shared__"],H=Tt,cr=function(){var r=/[^.]+$/.exec(H&&H.keys&&H.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}();function $t(r){return!!cr&&cr in r}var Ot=Function.prototype,xt=Ot.toString;function St(r){if(r!=null){try{return xt.call(r)}catch(t){}try{return r+""}catch(t){}}return""}var At=/[\\^$.*+?()[\]{}|]/g,jt=/^\[object .+?Constructor\]$/,Pt=Function.prototype,wt=Object.prototype,Ct=Pt.toString,It=wt.hasOwnProperty,Et=RegExp("^"+Ct.call(It).replace(At,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Rt(r){if(!h(r)||$t(r))return!1;var t=D(r)?Et:jt;return t.test(St(r))}function Mt(r,t){return r==null?void 0:r[t]}function B(r,t){var e=Mt(r,t);return Rt(e)?e:void 0}var lr=Object.create,Ft=function(){function r(){}return function(t){if(!h(t))return{};if(lr)return lr(t);r.prototype=t;var e=new r;return r.prototype=void 0,e}}(),Nt=Ft;function Ut(r,t,e){switch(e.length){case 0:return r.call(t);case 1:return r.call(t,e[0]);case 2:return r.call(t,e[0],e[1]);case 3:return r.call(t,e[0],e[1],e[2])}return r.apply(t,e)}function zt(r,t){var e=-1,n=r.length;for(t||(t=Array(n));++e<n;)t[e]=r[e];return t}var Dt=800,Ht=16,Bt=Date.now;function Gt(r){var t=0,e=0;return function(){var n=Bt(),a=Ht-(n-e);if(e=n,a>0){if(++t>=Dt)return arguments[0]}else t=0;return r.apply(void 0,arguments)}}function Lt(r){return function(){return r}}var Wt=function(){try{var r=B(Object,"defineProperty");return r({},"",{}),r}catch(t){}}(),M=Wt,Kt=M?function(r,t){return M(r,"toString",{configurable:!0,enumerable:!1,value:Lt(t),writable:!0})}:sr,Vt=Kt,Xt=Gt(Vt),Jt=Xt,Zt=9007199254740991,qt=/^(?:0|[1-9]\d*)$/;function pr(r,t){var e=typeof r;return t=t==null?Zt:t,!!t&&(e=="number"||e!="symbol"&&qt.test(r))&&r>-1&&r%1==0&&r<t}function G(r,t,e){t=="__proto__"&&M?M(r,t,{configurable:!0,enumerable:!0,value:e,writable:!0}):r[t]=e}function F(r,t){return r===t||r!==r&&t!==t}var Yt=Object.prototype,Qt=Yt.hasOwnProperty;function kt(r,t,e){var n=r[t];(!(Qt.call(r,t)&&F(n,e))||e===void 0&&!(t in r))&&G(r,t,e)}function re(r,t,e,n){var a=!e;e||(e={});for(var o=-1,u=t.length;++o<u;){var i=t[o],f=n?n(e[i],r[i],i,e,r):void 0;f===void 0&&(f=r[i]),a?G(e,i,f):kt(e,i,f)}return e}var dr=Math.max;function te(r,t,e){return t=dr(t===void 0?r.length-1:t,0),function(){for(var n=arguments,a=-1,o=dr(n.length-t,0),u=Array(o);++a<o;)u[a]=n[t+a];a=-1;for(var i=Array(t+1);++a<t;)i[a]=n[a];return i[t]=e(u),Ut(r,this,i)}}function ee(r,t){return Jt(te(r,t,sr),r+"")}var ne=9007199254740991;function hr(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=ne}function L(r){return r!=null&&hr(r.length)&&!D(r)}function ae(r,t,e){if(!h(e))return!1;var n=typeof t;return(n=="number"?L(e)&&pr(t,e.length):n=="string"&&t in e)?F(e[t],r):!1}function ie(r){return ee(function(t,e){var n=-1,a=e.length,o=a>1?e[a-1]:void 0,u=a>2?e[2]:void 0;for(o=r.length>3&&typeof o=="function"?(a--,o):void 0,u&&ae(e[0],e[1],u)&&(o=a<3?void 0:o,a=1),t=Object(t);++n<a;){var i=e[n];i&&r(t,i,n,o)}return t})}var oe=Object.prototype;function gr(r){var t=r&&r.constructor,e=typeof t=="function"&&t.prototype||oe;return r===e}function ue(r,t){for(var e=-1,n=Array(r);++e<r;)n[e]=t(e);return n}var fe="[object Arguments]";function vr(r){return O(r)&&P(r)==fe}var yr=Object.prototype,se=yr.hasOwnProperty,ce=yr.propertyIsEnumerable,le=vr(function(){return arguments}())?vr:function(r){return O(r)&&se.call(r,"callee")&&!ce.call(r,"callee")},W=le;function pe(){return!1}var br=typeof exports=="object"&&exports&&!exports.nodeType&&exports,_r=br&&typeof module=="object"&&module&&!module.nodeType&&module,de=_r&&_r.exports===br,mr=de?m.Buffer:void 0,he=mr?mr.isBuffer:void 0,ge=he||pe,Tr=ge,ve="[object Arguments]",ye="[object Array]",be="[object Boolean]",_e="[object Date]",me="[object Error]",Te="[object Function]",$e="[object Map]",Oe="[object Number]",xe="[object Object]",Se="[object RegExp]",Ae="[object Set]",je="[object String]",Pe="[object WeakMap]",we="[object ArrayBuffer]",Ce="[object DataView]",Ie="[object Float32Array]",Ee="[object Float64Array]",Re="[object Int8Array]",Me="[object Int16Array]",Fe="[object Int32Array]",Ne="[object Uint8Array]",Ue="[object Uint8ClampedArray]",ze="[object Uint16Array]",De="[object Uint32Array]",s={};s[Ie]=s[Ee]=s[Re]=s[Me]=s[Fe]=s[Ne]=s[Ue]=s[ze]=s[De]=!0;s[ve]=s[ye]=s[we]=s[be]=s[Ce]=s[_e]=s[me]=s[Te]=s[$e]=s[Oe]=s[xe]=s[Se]=s[Ae]=s[je]=s[Pe]=!1;function He(r){return O(r)&&hr(r.length)&&!!s[P(r)]}function Be(r){return function(t){return r(t)}}var $r=typeof exports=="object"&&exports&&!exports.nodeType&&exports,w=$r&&typeof module=="object"&&module&&!module.nodeType&&module,Ge=w&&w.exports===$r,K=Ge&&tr.process,Le=function(){try{var r=w&&w.require&&w.require("util").types;return r||K&&K.binding&&K.binding("util")}catch(t){}}(),Or=Le,xr=Or&&Or.isTypedArray,We=xr?Be(xr):He,Sr=We,Ke=Object.prototype,Ve=Ke.hasOwnProperty;function Xe(r,t){var e=x(r),n=!e&&W(r),a=!e&&!n&&Tr(r),o=!e&&!n&&!a&&Sr(r),u=e||n||a||o,i=u?ue(r.length,String):[],f=i.length;for(var l in r)(t||Ve.call(r,l))&&!(u&&(l=="length"||a&&(l=="offset"||l=="parent")||o&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||pr(l,f)))&&i.push(l);return i}function Je(r,t){return function(e){return r(t(e))}}function Ze(r){var t=[];if(r!=null)for(var e in Object(r))t.push(e);return t}var qe=Object.prototype,Ye=qe.hasOwnProperty;function Qe(r){if(!h(r))return Ze(r);var t=gr(r),e=[];for(var n in r)n=="constructor"&&(t||!Ye.call(r,n))||e.push(n);return e}function Ar(r){return L(r)?Xe(r,!0):Qe(r)}var ke=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,rn=/^\w*$/;function tn(r,t){if(x(r))return!1;var e=typeof r;return e=="number"||e=="symbol"||e=="boolean"||r==null||R(r)?!0:rn.test(r)||!ke.test(r)||t!=null&&r in Object(t)}var en=B(Object,"create"),C=en;function nn(){this.__data__=C?C(null):{},this.size=0}function an(r){var t=this.has(r)&&delete this.__data__[r];return this.size-=t?1:0,t}var on="__lodash_hash_undefined__",un=Object.prototype,fn=un.hasOwnProperty;function sn(r){var t=this.__data__;if(C){var e=t[r];return e===on?void 0:e}return fn.call(t,r)?t[r]:void 0}var cn=Object.prototype,ln=cn.hasOwnProperty;function pn(r){var t=this.__data__;return C?t[r]!==void 0:ln.call(t,r)}var dn="__lodash_hash_undefined__";function hn(r,t){var e=this.__data__;return this.size+=this.has(r)?0:1,e[r]=C&&t===void 0?dn:t,this}function T(r){var t=-1,e=r==null?0:r.length;for(this.clear();++t<e;){var n=r[t];this.set(n[0],n[1])}}T.prototype.clear=nn;T.prototype.delete=an;T.prototype.get=sn;T.prototype.has=pn;T.prototype.set=hn;function gn(){this.__data__=[],this.size=0}function N(r,t){for(var e=r.length;e--;)if(F(r[e][0],t))return e;return-1}var vn=Array.prototype,yn=vn.splice;function bn(r){var t=this.__data__,e=N(t,r);if(e<0)return!1;var n=t.length-1;return e==n?t.pop():yn.call(t,e,1),--this.size,!0}function _n(r){var t=this.__data__,e=N(t,r);return e<0?void 0:t[e][1]}function mn(r){return N(this.__data__,r)>-1}function Tn(r,t){var e=this.__data__,n=N(e,r);return n<0?(++this.size,e.push([r,t])):e[n][1]=t,this}function g(r){var t=-1,e=r==null?0:r.length;for(this.clear();++t<e;){var n=r[t];this.set(n[0],n[1])}}g.prototype.clear=gn;g.prototype.delete=bn;g.prototype.get=_n;g.prototype.has=mn;g.prototype.set=Tn;var $n=B(m,"Map"),jr=$n;function On(){this.size=0,this.__data__={hash:new T,map:new(jr||g),string:new T}}function xn(r){var t=typeof r;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?r!=="__proto__":r===null}function U(r,t){var e=r.__data__;return xn(t)?e[typeof t=="string"?"string":"hash"]:e.map}function Sn(r){var t=U(this,r).delete(r);return this.size-=t?1:0,t}function An(r){return U(this,r).get(r)}function jn(r){return U(this,r).has(r)}function Pn(r,t){var e=U(this,r),n=e.size;return e.set(r,t),this.size+=e.size==n?0:1,this}function y(r){var t=-1,e=r==null?0:r.length;for(this.clear();++t<e;){var n=r[t];this.set(n[0],n[1])}}y.prototype.clear=On;y.prototype.delete=Sn;y.prototype.get=An;y.prototype.has=jn;y.prototype.set=Pn;var wn="Expected a function";function V(r,t){if(typeof r!="function"||t!=null&&typeof t!="function")throw new TypeError(wn);var e=function(){var n=arguments,a=t?t.apply(this,n):n[0],o=e.cache;if(o.has(a))return o.get(a);var u=r.apply(this,n);return e.cache=o.set(a,u)||o,u};return e.cache=new(V.Cache||y),e}V.Cache=y;var Cn=500;function In(r){var t=V(r,function(n){return e.size===Cn&&e.clear(),n}),e=t.cache;return t}var En=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Rn=/\\(\\)?/g,Mn=In(function(r){var t=[];return r.charCodeAt(0)===46&&t.push(""),r.replace(En,function(e,n,a,o){t.push(a?o.replace(Rn,"$1"):n||e)}),t}),Fn=Mn;function Pr(r){return r==null?"":or(r)}function Nn(r,t){return x(r)?r:tn(r,t)?[r]:Fn(Pr(r))}var Un=1/0;function zn(r){if(typeof r=="string"||R(r))return r;var t=r+"";return t=="0"&&1/r==-Un?"-0":t}function Dn(r,t){t=Nn(t,r);for(var e=0,n=t.length;r!=null&&e<n;)r=r[zn(t[e++])];return e&&e==n?r:void 0}function Ka(r,t,e){var n=r==null?void 0:Dn(r,t);return n===void 0?e:n}var Hn=Je(Object.getPrototypeOf,Object),wr=Hn,Bn="[object Object]",Gn=Function.prototype,Ln=Object.prototype,Cr=Gn.toString,Wn=Ln.hasOwnProperty,Kn=Cr.call(Object);function Vn(r){if(!O(r)||P(r)!=Bn)return!1;var t=wr(r);if(t===null)return!0;var e=Wn.call(t,"constructor")&&t.constructor;return typeof e=="function"&&e instanceof e&&Cr.call(e)==Kn}function Xn(r,t,e){var n=-1,a=r.length;t<0&&(t=-t>a?0:a+t),e=e>a?a:e,e<0&&(e+=a),a=t>e?0:e-t>>>0,t>>>=0;for(var o=Array(a);++n<a;)o[n]=r[n+t];return o}function Jn(r,t,e){var n=r.length;return e=e===void 0?n:e,!t&&e>=n?r:Xn(r,t,e)}var Zn="\\ud800-\\udfff",qn="\\u0300-\\u036f",Yn="\\ufe20-\\ufe2f",Qn="\\u20d0-\\u20ff",kn=qn+Yn+Qn,ra="\\ufe0e\\ufe0f",ta="\\u200d",ea=RegExp("["+ta+Zn+kn+ra+"]");function Ir(r){return ea.test(r)}function na(r){return r.split("")}var Er="\\ud800-\\udfff",aa="\\u0300-\\u036f",ia="\\ufe20-\\ufe2f",oa="\\u20d0-\\u20ff",ua=aa+ia+oa,fa="\\ufe0e\\ufe0f",sa="["+Er+"]",X="["+ua+"]",J="\\ud83c[\\udffb-\\udfff]",ca="(?:"+X+"|"+J+")",Rr="[^"+Er+"]",Mr="(?:\\ud83c[\\udde6-\\uddff]){2}",Fr="[\\ud800-\\udbff][\\udc00-\\udfff]",la="\\u200d",Nr=ca+"?",Ur="["+fa+"]?",pa="(?:"+la+"(?:"+[Rr,Mr,Fr].join("|")+")"+Ur+Nr+")*",da=Ur+Nr+pa,ha="(?:"+[Rr+X+"?",X,Mr,Fr,sa].join("|")+")",ga=RegExp(J+"(?="+J+")|"+ha+da,"g");function va(r){return r.match(ga)||[]}function ya(r){return Ir(r)?va(r):na(r)}function ba(r){return function(t){t=Pr(t);var e=Ir(t)?ya(t):void 0,n=e?e[0]:t.charAt(0),a=e?Jn(e,1).join(""):t.slice(1);return n[r]()+a}}var _a=ba("toUpperCase"),Va=_a;function ma(){this.__data__=new g,this.size=0}function Ta(r){var t=this.__data__,e=t.delete(r);return this.size=t.size,e}function $a(r){return this.__data__.get(r)}function Oa(r){return this.__data__.has(r)}var xa=200;function Sa(r,t){var e=this.__data__;if(e instanceof g){var n=e.__data__;if(!jr||n.length<xa-1)return n.push([r,t]),this.size=++e.size,this;e=this.__data__=new y(n)}return e.set(r,t),this.size=e.size,this}function S(r){var t=this.__data__=new g(r);this.size=t.size}S.prototype.clear=ma;S.prototype.delete=Ta;S.prototype.get=$a;S.prototype.has=Oa;S.prototype.set=Sa;var zr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Dr=zr&&typeof module=="object"&&module&&!module.nodeType&&module,Aa=Dr&&Dr.exports===zr,Hr=Aa?m.Buffer:void 0,Br=Hr?Hr.allocUnsafe:void 0;function ja(r,t){if(t)return r.slice();var e=r.length,n=Br?Br(e):new r.constructor(e);return r.copy(n),n}var Pa=m.Uint8Array,Gr=Pa;function wa(r){var t=new r.constructor(r.byteLength);return new Gr(t).set(new Gr(r)),t}function Ca(r,t){var e=t?wa(r.buffer):r.buffer;return new r.constructor(e,r.byteOffset,r.length)}function Ia(r){return typeof r.constructor=="function"&&!gr(r)?Nt(wr(r)):{}}function Ea(r){return function(t,e,n){for(var a=-1,o=Object(t),u=n(t),i=u.length;i--;){var f=u[r?i:++a];if(e(o[f],f,o)===!1)break}return t}}var Ra=Ea(),Ma=Ra,Fa=function(){return m.Date.now()},Z=Fa,Na="Expected a function",Ua=Math.max,za=Math.min;function Da(r,t,e){var n,a,o,u,i,f,l=0,p=!1,d=!1,b=!0;if(typeof r!="function")throw new TypeError(Na);t=fr(t)||0,h(e)&&(p=!!e.leading,d="maxWait"in e,o=d?Ua(fr(e.maxWait)||0,t):o,b="trailing"in e?!!e.trailing:b);function _(c){var v=n,A=a;return n=a=void 0,l=c,u=r.apply(A,v),u}function I(c){return l=c,i=setTimeout(E,t),p?_(c):u}function Wr(c){var v=c-f,A=c-l,rr=t-v;return d?za(rr,o-A):rr}function Q(c){var v=c-f,A=c-l;return f===void 0||v>=t||v<0||d&&A>=o}function E(){var c=Z();if(Q(c))return k(c);i=setTimeout(E,Wr(c))}function k(c){return i=void 0,b&&n?_(c):(n=a=void 0,u)}function Kr(){i!==void 0&&clearTimeout(i),l=0,n=f=a=i=void 0}function Vr(){return i===void 0?u:k(Z())}function z(){var c=Z(),v=Q(c);if(n=arguments,a=this,f=c,v){if(i===void 0)return I(f);if(d)return clearTimeout(i),i=setTimeout(E,t),_(f)}return i===void 0&&(i=setTimeout(E,t)),u}return z.cancel=Kr,z.flush=Vr,z}function q(r,t,e){(e!==void 0&&!F(r[t],e)||e===void 0&&!(t in r))&&G(r,t,e)}function Ha(r){return O(r)&&L(r)}function Y(r,t){if(!(t==="constructor"&&typeof r[t]=="function")&&t!="__proto__")return r[t]}function Ba(r){return re(r,Ar(r))}function Ga(r,t,e,n,a,o,u){var i=Y(r,e),f=Y(t,e),l=u.get(f);if(l){q(r,e,l);return}var p=o?o(i,f,e+"",r,t,u):void 0,d=p===void 0;if(d){var b=x(f),_=!b&&Tr(f),I=!b&&!_&&Sr(f);p=f,b||_||I?x(i)?p=i:Ha(i)?p=zt(i):_?(d=!1,p=ja(f,!0)):I?(d=!1,p=Ca(f,!0)):p=[]:Vn(f)||W(f)?(p=i,W(i)?p=Ba(i):(!h(i)||D(i))&&(p=Ia(f))):d=!1}d&&(u.set(f,p),a(p,f,n,o,u),u.delete(f)),q(r,e,p)}function Lr(r,t,e,n,a){r!==t&&Ma(t,function(o,u){if(a||(a=new S),h(o))Ga(r,t,u,e,Lr,n,a);else{var i=n?n(Y(r,u),o,u+"",r,t,a):void 0;i===void 0&&(i=o),q(r,u,i)}},Ar)}var La=ie(function(r,t,e){Lr(r,t,e)}),Xa=La,Wa="Expected a function";function Ja(r,t,e){var n=!0,a=!0;if(typeof r!="function")throw new TypeError(Wa);return h(e)&&(n="leading"in e?!!e.leading:n,a="trailing"in e?!!e.trailing:a),Da(r,t,{leading:n,maxWait:t,trailing:a})}export{Ka as g,Xa as m,Ja as t,Va as u};