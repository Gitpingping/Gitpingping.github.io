import{a as Q,u as m,I as k,J as x,c as b,w as G}from"./@vue.ae646f9b.js";function S(e){return k()?(x(e),!0):!1}const V=typeof window!="undefined",R=e=>typeof e=="function",C=e=>typeof e=="number",W=(e,i,o)=>Math.min(o,Math.max(i,e)),h=()=>{};function A(e){return e}function X(e,i,o={}){const{immediate:c=!0}=o,u=Q(!1);let s=null;function l(){s&&(clearTimeout(s),s=null)}function f(){u.value=!1,l()}function d(...v){l(),u.value=!0,s=setTimeout(()=>{u.value=!1,s=null,e(...v)},m(i))}return c&&(u.value=!0,V&&d()),S(f),{isPending:u,start:d,stop:f}}const _=V?window:void 0;function H(e,i={}){const{immediate:o=!0,window:c=_}=i,u=Q(!1);function s(){!u.value||(e(),c&&c.requestAnimationFrame(s))}function l(){u.value||(u.value=!0,s())}function f(){u.value=!1}return o&&l(),S(f),{isActive:u,pause:f,resume:l}}var B;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(B||(B={}));const U={linear:A,easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};function L([e,i,o,c]){const u=(t,n)=>1-3*n+3*t,s=(t,n)=>3*n-6*t,l=t=>3*t,f=(t,n,r)=>((u(n,r)*t+s(n,r))*t+l(n))*t,d=(t,n,r)=>3*u(n,r)*t*t+2*s(n,r)*t+l(n),v=t=>{let n=t;for(let r=0;r<4;++r){const O=d(n,e,o);if(O===0)return n;n-=(f(n,e,o)-t)/O}return n};return t=>e===i&&o===c?t:f(v(t),i,c)}function j(e,i={}){const{delay:o=0,disabled:c=!1,duration:u=1e3,onFinished:s=h,onStarted:l=h,transition:f=A}=i,d=b(()=>{const a=m(f);return R(a)?a:L(a)}),v=b(()=>{const a=m(e);return C(a)?a:a.map(m)}),t=b(()=>C(v.value)?[v.value]:v.value),n=Q(t.value.slice(0));let r,O,w,E,F;const{resume:D,pause:g}=H(()=>{const a=Date.now(),p=W(1-(w-a)/r,0,1);n.value=F.map((I,T)=>{var y;return I+((y=O[T])!=null?y:0)*d.value(p)}),p>=1&&(g(),s())},{immediate:!1}),N=()=>{g(),r=m(u),O=n.value.map((a,p)=>{var I,T;return((I=t.value[p])!=null?I:0)-((T=n.value[p])!=null?T:0)}),F=n.value.slice(0),E=Date.now(),w=E+r,D(),l()},P=X(N,o,{immediate:!1});return G(t,()=>{m(c)?n.value=t.value.slice(0):m(o)<=0?N():P.start()},{deep:!0}),b(()=>{const a=m(c)?t:n;return C(v.value)?a.value[0]:a.value})}export{U as T,j as u};