const $={mousemoveoutside:new WeakMap,clickoutside:new WeakMap};function q(r,s,c){if(r==="mousemoveoutside"){const u=o=>{s.contains(o.target)||c(o)};return{mousemove:u,touchstart:u}}else if(r==="clickoutside"){let u=!1;const o=w=>{u=!s.contains(w.target)},a=w=>{!u||s.contains(w.target)||c(w)};return{mousedown:o,mouseup:a,touchstart:o,touchend:a}}return console.error(`[evtd/create-trap-handler]: name \`${r}\` is invalid. This could be a bug of evtd.`),{}}function L(r,s,c){const u=$[r];let o=u.get(s);o===void 0&&u.set(s,o=new WeakMap);let a=o.get(c);return a===void 0&&o.set(c,a=q(r,s,c)),a}function A(r,s,c,u){if(r==="mousemoveoutside"||r==="clickoutside"){const o=L(r,s,c);return Object.keys(o).forEach(a=>{G(a,document,o[a],u)}),!0}return!1}function B(r,s,c,u){if(r==="mousemoveoutside"||r==="clickoutside"){const o=L(r,s,c);return Object.keys(o).forEach(a=>{J(a,document,o[a],u)}),!0}return!1}function F(){if(typeof window=="undefined")return{on:()=>{},off:()=>{}};const r=new WeakMap,s=new WeakMap;function c(){r.set(this,!0)}function u(){r.set(this,!0),s.set(this,!0)}function o(n,e,t){const i=n[e];return n[e]=function(){return t.apply(n,arguments),i.apply(n,arguments)},n}function a(n,e){n[e]=Event.prototype[e]}const w=new WeakMap,P=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function S(){var n;return(n=w.get(this))!==null&&n!==void 0?n:null}function W(n,e){P!==void 0&&Object.defineProperty(n,"currentTarget",{configurable:!0,enumerable:!0,get:e!=null?e:P.get})}const E={bubble:{},capture:{}},h={};function U(){const n=function(e){const{type:t,eventPhase:i,target:p,bubbles:l}=e;if(i===2)return;const b=i===1?"capture":"bubble";let d=p;const f=[];for(;d===null&&(d=window),f.push(d),d!==window;)d=d.parentNode||null;const k=E.capture[t],H=E.bubble[t];if(o(e,"stopPropagation",c),o(e,"stopImmediatePropagation",u),W(e,S),b==="capture"){if(k===void 0)return;for(let g=f.length-1;g>=0&&!r.has(e);--g){const v=f[g],T=k.get(v);if(T!==void 0){w.set(e,v);for(const m of T){if(s.has(e))break;m(e)}}if(g===0&&!l&&H!==void 0){const m=H.get(v);if(m!==void 0)for(const _ of m){if(s.has(e))break;_(e)}}}}else if(b==="bubble"){if(H===void 0)return;for(let g=0;g<f.length&&!r.has(e);++g){const v=f[g],T=H.get(v);if(T!==void 0){w.set(e,v);for(const m of T){if(s.has(e))break;m(e)}}}}a(e,"stopPropagation"),a(e,"stopImmediatePropagation"),W(e)};return n.displayName="evtdUnifiedHandler",n}function x(){const n=function(e){const{type:t,eventPhase:i}=e;if(i!==2)return;const p=h[t];p!==void 0&&p.forEach(l=>l(e))};return n.displayName="evtdUnifiedWindowEventHandler",n}const O=U(),M=x();function j(n,e){const t=E[n];return t[e]===void 0&&(t[e]=new Map,window.addEventListener(e,O,n==="capture")),t[e]}function z(n){return h[n]===void 0&&(h[n]=new Set,window.addEventListener(n,M)),h[n]}function D(n,e){let t=n.get(e);return t===void 0&&n.set(e,t=new Set),t}function I(n,e,t,i){const p=E[e][t];if(p!==void 0){const l=p.get(n);if(l!==void 0&&l.has(i))return!0}return!1}function C(n,e){const t=h[n];return!!(t!==void 0&&t.has(e))}function y(n,e,t,i){if(A(n,e,t,i))return;const l=i===!0||typeof i=="object"&&i.capture===!0?"capture":"bubble",b=j(l,n),d=D(b,e);if(d.has(t)||d.add(t),e===window){const f=z(n);f.has(t)||f.add(t)}}function N(n,e,t,i){if(B(n,e,t,i))return;const l=i===!0||typeof i=="object"&&i.capture===!0,b=l?"capture":"bubble",d=j(b,n),f=D(d,e);if(e===window&&!I(e,l?"bubble":"capture",n,t)&&C(n,t)){const H=h[n];H.delete(t),H.size===0&&(window.removeEventListener(n,M),h[n]=void 0)}f.has(t)&&f.delete(t),f.size===0&&d.delete(e),d.size===0&&(window.removeEventListener(n,O,b==="capture"),E[b][n]=void 0)}return{on:y,off:N}}const{on:G,off:J}=F();export{G as a,J as o};