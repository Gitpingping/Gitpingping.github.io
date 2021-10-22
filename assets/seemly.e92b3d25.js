let y=[];const C=new WeakMap;function S(){y.forEach(t=>t(...C.get(t))),y=[]}function B(t,...n){C.set(t,n),!y.includes(t)&&y.push(t)===1&&requestAnimationFrame(S)}function D(t,n){let{target:r}=t;for(;r;){if(r.dataset&&r.dataset[n]!==void 0)return!0;r=r.parentElement}return!1}function H(t){if(typeof t=="number")return{"":t.toString()};const n={};return t.split(/ +/).forEach(r=>{if(r==="")return;const[e,i]=r.split(":");i===void 0?n[""]=e:n[e]=i}),n}function J(t,n){var r;if(t==null)return;const e=H(t);if(n===void 0)return e[""];if(typeof n=="string")return(r=e[n])!==null&&r!==void 0?r:e[""];if(Array.isArray(n)){for(let i=n.length-1;i>=0;--i){const u=n[i];if(u in e)return e[u]}return e[""]}else{let i,u=-1;return Object.keys(e).forEach(a=>{const m=Number(a);!Number.isNaN(m)&&n>=m&&m>=u&&(u=m,i=e[a])}),i}}function Q(t){return typeof t=="string"?t.endsWith("px")?Number(t.slice(0,t.length-2)):Number(t):t}function T(t){if(t!=null)return typeof t=="number"?`${t}px`:t.endsWith("px")?t:`${t}px`}function V(t,n){const r=t.trim().split(/\s+/g),e={top:r[0]};switch(r.length){case 1:e.right=r[0],e.bottom=r[0],e.left=r[0];break;case 2:e.right=r[1],e.left=r[1],e.bottom=r[0];break;case 3:e.right=r[1],e.bottom=r[2],e.left=r[1];break;case 4:e.right=r[1],e.bottom=r[2],e.left=r[3];break;default:throw new Error("[seemly/getMargin]:"+t+" is not a valid value.")}return n===void 0?e:e[n]}function X(t,n){const[r,e]=t.split(" ");return n?n==="row"?r:e:{row:r,col:e||r}}var N={black:"#000",silver:"#C0C0C0",gray:"#808080",white:"#FFF",maroon:"#800000",red:"#F00",purple:"#800080",fuchsia:"#F0F",green:"#008000",lime:"#0F0",olive:"#808000",yellow:"#FF0",navy:"#000080",blue:"#00F",teal:"#008080",aqua:"#0FF",transparent:"#0000"};function Y(t,n,r){n/=100,r/=100;const e=n*Math.min(r,1-r)+r;return[t,e?(2-2*r/e)*100:0,e*100]}function Z(t,n,r){n/=100,r/=100;const e=r-r*n/2,i=Math.min(e,1-e);return[t,i?(r-e)/i*100:0,e*100]}function L(t,n,r){n/=100,r/=100;let e=(i,u=(i+t/60)%6)=>r-r*n*Math.max(Math.min(u,4-u,1),0);return[e(5)*255,e(3)*255,e(1)*255]}function O(t,n,r){t/=255,n/=255,r/=255;let e=Math.max(t,n,r),i=e-Math.min(t,n,r),u=i&&(e==t?(n-r)/i:e==n?2+(r-t)/i:4+(t-n)/i);return[60*(u<0?u+6:u),e&&i/e*100,e*100]}function P(t,n,r){t/=255,n/=255,r/=255;let e=Math.max(t,n,r),i=e-Math.min(t,n,r),u=1-Math.abs(e+e-i-1),a=i&&(e==t?(n-r)/i:e==n?2+(r-t)/i:4+(t-n)/i);return[60*(a<0?a+6:a),u?i/u*100:0,(e+e-i)*50]}function z(t,n,r){n/=100,r/=100;let e=n*Math.min(r,1-r),i=(u,a=(u+t/30)%12)=>r-e*Math.max(Math.min(a-3,9-a,1),-1);return[i(0)*255,i(8)*255,i(4)*255]}const $="^\\s*",h="\\s*$",g="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))%\\s*",c="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",p="([0-9A-Fa-f])",d="([0-9A-Fa-f]{2})",I=new RegExp(`${$}hsl\\s*\\(${c},${g},${g}\\)${h}`),j=new RegExp(`${$}hsv\\s*\\(${c},${g},${g}\\)${h}`),q=new RegExp(`${$}hsla\\s*\\(${c},${g},${g},${c}\\)${h}`),G=new RegExp(`${$}hsva\\s*\\(${c},${g},${g},${c}\\)${h}`),U=new RegExp(`${$}rgb\\s*\\(${c},${c},${c}\\)${h}`),W=new RegExp(`${$}rgba\\s*\\(${c},${c},${c},${c}\\)${h}`),R=new RegExp(`${$}#${p}${p}${p}${h}`),F=new RegExp(`${$}#${d}${d}${d}${h}`),M=new RegExp(`${$}#${p}${p}${p}${p}${h}`),E=new RegExp(`${$}#${d}${d}${d}${d}${h}`);function o(t){return parseInt(t,16)}function K(t){try{let n;if(n=q.exec(t))return[l(n[1]),f(n[5]),f(n[9]),x(n[13])];if(n=I.exec(t))return[l(n[1]),f(n[5]),f(n[9]),1];throw new Error(`[seemly/hsla]: Invalid color value ${t}.`)}catch(n){throw n}}function nn(t){try{let n;if(n=G.exec(t))return[l(n[1]),f(n[5]),f(n[9]),x(n[13])];if(n=j.exec(t))return[l(n[1]),f(n[5]),f(n[9]),1];throw new Error(`[seemly/hsva]: Invalid color value ${t}.`)}catch(n){throw n}}function w(t){try{let n;if(n=F.exec(t))return[o(n[1]),o(n[2]),o(n[3]),1];if(n=U.exec(t))return[s(n[1]),s(n[5]),s(n[9]),1];if(n=W.exec(t))return[s(n[1]),s(n[5]),s(n[9]),x(n[13])];if(n=R.exec(t))return[o(n[1]+n[1]),o(n[2]+n[2]),o(n[3]+n[3]),1];if(n=E.exec(t))return[o(n[1]),o(n[2]),o(n[3]),x(o(n[4])/255)];if(n=M.exec(t))return[o(n[1]+n[1]),o(n[2]+n[2]),o(n[3]+n[3]),x(o(n[4]+n[4])/255)];if(t in N)return w(N[t]);throw new Error(`[seemly/rgba]: Invalid color value ${t}.`)}catch(n){throw n}}function _(t){return t>1?1:t<0?0:t}function b(t,n,r){return`rgb(${s(t)}, ${s(n)}, ${s(r)})`}function A(t,n,r,e){return`rgba(${s(t)}, ${s(n)}, ${s(r)}, ${_(e)})`}function v(t,n,r,e,i){return s((t*n*(1-e)+r*e)/i)}function tn(t,n){Array.isArray(t)||(t=w(t)),Array.isArray(n)||(n=w(n));const r=t[3],e=n[3],i=x(r+e-r*e);return A(v(t[0],r,n[0],e,i),v(t[1],r,n[1],e,i),v(t[2],r,n[2],e,i),i)}function en(t,n){const[r,e,i,u=1]=Array.isArray(t)?t:w(t);return n.alpha?A(r,e,i,n.alpha):A(r,e,i,u)}function rn(t,n){const[r,e,i,u=1]=Array.isArray(t)?t:w(t),{lightness:a=1,alpha:m=1}=n;return k([r*a,e*a,i*a,u*m])}function x(t){const n=Math.round(Number(t)*100)/100;return n>1?1:n<0?0:n}function l(t){const n=Math.round(Number(t));return n>=360||n<0?0:n}function s(t){const n=Math.round(Number(t));return n>255?255:n<0?0:n}function f(t){const n=Math.round(Number(t));return n>100?100:n<0?0:n}function sn(t){const[n,r,e]=Array.isArray(t)?t:w(t);return b(n,r,e)}function k(t){const[n,r,e]=t;return 3 in t?`rgba(${s(n)}, ${s(r)}, ${s(e)}, ${x(t[3])})`:`rgba(${s(n)}, ${s(r)}, ${s(e)}, 1)`}function un(t){return`hsv(${l(t[0])}, ${f(t[1])}%, ${f(t[2])}%)`}function fn(t){const[n,r,e]=t;return 3 in t?`hsva(${l(n)}, ${f(r)}%, ${f(e)}%, ${x(t[3])})`:`hsva(${l(n)}, ${f(r)}%, ${f(e)}%, 1)`}function on(t){return`hsl(${l(t[0])}, ${f(t[1])}%, ${f(t[2])}%)`}function an(t){const[n,r,e]=t;return 3 in t?`hsla(${l(n)}, ${f(r)}%, ${f(e)}%, ${x(t[3])})`:`hsla(${l(n)}, ${f(r)}%, ${f(e)}%, 1)`}function cn(t){if(typeof t=="string"){let e;if(e=F.exec(t))return`${e[0]}FF`;if(e=E.exec(t))return e[0];if(e=R.exec(t))return`#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}FF`;if(e=M.exec(t))return`#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}${e[4]}${e[4]}`;throw new Error(`[seemly/toHexString]: Invalid hex value ${t}.`)}const n=`#${t.slice(0,3).map(e=>s(e).toString(16).toUpperCase().padStart(2,"0")).join("")}`,r=t.length===3?"FF":s(t[3]*255).toString(16).padStart(2,"0").toUpperCase();return n+r}function $n(t){if(typeof t=="string"){let n;if(n=F.exec(t))return n[0];if(n=E.exec(t))return n[0].slice(0,7);if(n=R.exec(t)||M.exec(t))return`#${n[1]}${n[1]}${n[2]}${n[2]}${n[3]}${n[3]}`;throw new Error(`[seemly/toHexString]: Invalid hex value ${t}.`)}return`#${t.slice(0,3).map(n=>s(n).toString(16).toUpperCase().padStart(2,"0")).join("")}`}function hn(t=8){return Math.random().toString(16).slice(2,2+t)}function ln(t,n){const r=[];for(let e=0;e<t;++e)r.push(n);return r}export{B as A,X as B,J as C,en as a,cn as b,tn as c,Q as d,$n as e,an as f,V as g,D as h,on as i,sn as j,fn as k,un as l,O as m,K as n,Y as o,nn as p,z as q,w as r,rn as s,k as t,L as u,P as v,Z as w,hn as x,T as y,ln as z};