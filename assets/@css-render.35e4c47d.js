import{i as d}from"./@vue.ae646f9b.js";const $=Symbol("@css-render/vue3-ssr");function x(i,r){return`<style cssr-id="${i}">
${r}
</style>`}function M(i,r){const f=d($,null);if(f===null){console.error("[css-render/vue3-ssr]: no ssr context found.");return}const{styles:m,ids:s}=f;s.has(i)||m!==null&&(s.add(i),m.push(x(i,r)))}function A(){const i=d($,null);if(i!==null)return{adapter:M,context:i}}function C(i){let r=".",f="__",m="--",s;if(i){let e=i.blockPrefix;e&&(r=e),e=i.elementPrefix,e&&(f=e),e=i.modifierPrefix,e&&(m=e)}const o={install(e){s=e.c;const l=e.context;l.bem={},l.bem.b=null,l.bem.els=null}};function v(e){let l,n;return{before(t){l=t.bem.b,n=t.bem.els,t.bem.els=null},after(t){t.bem.b=l,t.bem.els=n},$({context:t,props:u}){return e=typeof e=="string"?e:e({context:t,props:u}),t.bem.b=e,`${(u==null?void 0:u.bPrefix)||r}${t.bem.b}`}}}function y(e){let l;return{before(n){l=n.bem.els},after(n){n.bem.els=l},$({context:n,props:t}){return e=typeof e=="string"?e:e({context:n,props:t}),n.bem.els=e.split(",").map(u=>u.trim()),n.bem.els.map(u=>`${(t==null?void 0:t.bPrefix)||r}${n.bem.b}__${u}`).join(", ")}}}function P(e){return{$({context:l,props:n}){e=typeof e=="string"?e:e({context:l,props:n});const t=e.split(",").map(b=>b.trim());function u(b){return t.map(j=>`&${(n==null?void 0:n.bPrefix)||r}${l.bem.b}${b!==void 0?`${f}${b}`:""}${m}${j}`).join(", ")}const c=l.bem.els;return c!==null?u(c[0]):u()}}}function _(e){return{$({context:l,props:n}){e=typeof e=="string"?e:e({context:l,props:n});const t=l.bem.els;return`&:not(${(n==null?void 0:n.bPrefix)||r}${l.bem.b}${t!==null&&t.length>0?`${f}${t[0]}`:""}${m}${e})`}}}return Object.assign(o,{cB:(...e)=>s(v(e[0]),e[1],e[2]),cE:(...e)=>s(y(e[0]),e[1],e[2]),cM:(...e)=>s(P(e[0]),e[1],e[2]),cNotM:(...e)=>s(_(e[0]),e[1],e[2])}),o}export{C as p,A as u};
