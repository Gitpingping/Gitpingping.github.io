function O(e){return Array.isArray(e)?e:[e]}const P={STOP:"STOP"};function I(e,n){const t=n(e);e.children!==void 0&&t!==P.STOP&&e.children.forEach(i=>I(i,n))}function D(e,n={}){const{preserveGroup:t=!1}=n,i=[],s=t?r=>{r.isLeaf||(i.push(r.key),l(r.children))}:r=>{r.isLeaf||(r.isGroup||i.push(r.key),l(r.children))};function l(r){r.forEach(s)}return l(e),i}function F(e,n){const{isLeaf:t}=e;return t!==void 0?t:!n(e)}function R(e){return e.children}function j(e){return e.key}function U(){return!1}function q(e,n){const{isLeaf:t}=e;return!(t===!1&&!Array.isArray(n(e)))}function V(e){return e.disabled===!0}function W(e,n){return e.isLeaf===!1&&!Array.isArray(n(e))}function x(e){var n;return e==null?[]:Array.isArray(e)?e:(n=e.checkedKeys)!==null&&n!==void 0?n:[]}function E(e){var n;return e==null||Array.isArray(e)?[]:(n=e.indeterminateKeys)!==null&&n!==void 0?n:[]}function Z(e,n){const t=new Set(e);return n.forEach(i=>{t.has(i)||t.add(i)}),Array.from(t)}function z(e,n){const t=new Set(e);return n.forEach(i=>{t.has(i)&&t.delete(i)}),Array.from(t)}function B(e){return(e==null?void 0:e.type)==="group"}function ae(e){const n=new Map;return e.forEach((t,i)=>{n.set(t.key,i)}),t=>{var i;return(i=n.get(t))!==null&&i!==void 0?i:null}}class H extends Error{constructor(){super();this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function J(e,n,t){return N(n.concat(e),t)}function Q(e,n){const t=new Set;return e.forEach(i=>{const s=n.treeNodeMap.get(i);if(s!==void 0){let l=s.parent;for(;l!==null&&!(l.disabled||t.has(l.key));)t.add(l.key),l=l.parent}}),t}function X(e,n,t){const i=N(n,t),s=N(e,t,!0),l=Q(e,t),r=[];return i.forEach(o=>{(s.has(o)||l.has(o))&&r.push(o)}),r.forEach(o=>i.delete(o)),i}function G(e,n){const{checkedKeys:t,keysToCheck:i,keysToUncheck:s,indeterminateKeys:l,cascade:r,leafOnly:o,checkStrategy:h}=e;if(!r)return i!==void 0?{checkedKeys:Z(t,i),indeterminateKeys:Array.from(l)}:s!==void 0?{checkedKeys:z(t,s),indeterminateKeys:Array.from(l)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(l)};const{levelTreeNodeMap:c}=n;let d;s!==void 0?d=X(s,t,n):i!==void 0?d=J(i,t,n):d=N(t,n);const f=h==="parent",k=h==="child"||o,p=d,A=new Set,w=Math.max.apply(null,Array.from(c.keys()));for(let b=w;b>=0;b-=1){const S=b===0,a=c.get(b);for(const u of a){if(u.isLeaf)continue;const{key:y,shallowLoaded:K}=u;if(k&&K&&u.children.forEach(g=>{!g.disabled&&!g.isLeaf&&g.shallowLoaded&&p.has(g.key)&&p.delete(g.key)}),u.disabled||!K)continue;let v=!0,m=!1,C=!0;for(const g of u.children){const T=g.key;if(!g.disabled){if(C&&(C=!1),p.has(T))m=!0;else if(A.has(T)){m=!0,v=!1;break}else if(v=!1,m)break}}v&&!C?(f&&u.children.forEach(g=>{!g.disabled&&p.has(g.key)&&p.delete(g.key)}),p.add(y)):m&&A.add(y),S&&k&&p.has(y)&&p.delete(y)}}return{checkedKeys:Array.from(p),indeterminateKeys:Array.from(A)}}function N(e,n,t=!1){const{treeNodeMap:i,getChildren:s}=n,l=new Set,r=new Set(e);return e.forEach(o=>{const h=i.get(o);h!==void 0&&I(h,c=>{if(c.disabled)return P.STOP;const{key:d}=c;if(!l.has(d)&&(l.add(d),r.add(d),W(c.rawNode,s))){if(t)return P.STOP;throw new H}})}),r}function Y(e,{includeGroup:n=!1,includeSelf:t=!0},i){var s;const l=i.treeNodeMap;let r=e==null?null:(s=l.get(e))!==null&&s!==void 0?s:null;const o={keyPath:[],treeNodePath:[],treeNode:r};if(r==null?void 0:r.ignored)return o.treeNode=null,o;for(;r;)!r.ignored&&(n||!r.isGroup)&&o.treeNodePath.push(r),r=r.parent;return o.treeNodePath.reverse(),t||o.treeNodePath.pop(),o.keyPath=o.treeNodePath.map(h=>h.key),o}function $(e){if(e.length===0)return null;const n=e[0];return n.isGroup||n.ignored||n.disabled?n.getNext():n}function ee(e,n){const t=e.siblings,i=t.length,{index:s}=e;return n?t[(s+1)%i]:s===t.length-1?null:t[s+1]}function M(e,n,{loop:t=!1,includeDisabled:i=!1}={}){const s=n==="prev"?te:ee,l={reverse:n==="prev"};let r=!1,o=null;function h(c){if(c!==null){if(c===e){if(!r)r=!0;else if(!e.disabled&&!e.isGroup){o=e;return}}else if((!c.disabled||i)&&!c.ignored&&!c.isGroup){o=c;return}if(c.isGroup){const d=L(c,l);d!==null?o=d:h(s(c,t))}else{const d=s(c,!1);if(d!==null)h(d);else{const f=ne(c);(f==null?void 0:f.isGroup)?h(s(f,t)):t&&h(s(c,!0))}}}}return h(e),o}function te(e,n){const t=e.siblings,i=t.length,{index:s}=e;return n?t[(s-1+i)%i]:s===0?null:t[s-1]}function ne(e){return e.parent}function L(e,n={}){const{reverse:t=!1}=n,{children:i}=e;if(i){const{length:s}=i,l=t?s-1:0,r=t?-1:s,o=t?-1:1;for(let h=l;h!==r;h+=o){const c=i[h];if(!c.disabled&&!c.ignored)if(c.isGroup){const d=L(c,n);if(d!==null)return d}else return c}}return null}const re={getChild(){return this.ignored?null:L(this)},getParent(){const{parent:e}=this;return(e==null?void 0:e.isGroup)?e.getParent():e},getNext(e={}){return M(this,"next",e)},getPrev(e={}){return M(this,"prev",e)}};function ie(e,n){const t=n?new Set(n):void 0,i=[];function s(l){l.forEach(r=>{i.push(r),!(r.isLeaf||!r.children||r.ignored)&&(r.isGroup||t===void 0||t.has(r.key))&&s(r.children)})}return s(e),i}function se(e,n){const t=e.key;for(;n;){if(n.key===t)return!0;n=n.parent}return!1}function _(e,n,t,i,s,l=null,r=0){const o=[];return e.forEach((h,c)=>{var d;const f=Object.create(i);if(f.rawNode=h,f.siblings=o,f.level=r,f.index=c,f.isFirstChild=c===0,f.isLastChild=c+1===e.length,f.parent=l,!f.ignored){const k=s(h);Array.isArray(k)&&(f.children=_(k,n,t,i,s,f,r+1))}o.push(f),n.set(f.key,f),t.has(r)||t.set(r,[]),(d=t.get(r))===null||d===void 0||d.push(f)}),o}function ue(e,n={}){const t=new Map,i=new Map,{getDisabled:s=V,getIgnored:l=U,getChildren:r=R,getIsGroup:o=B,getKey:h=j}=n,c=Object.assign({get key(){return h(this.rawNode)},get disabled(){return s(this.rawNode)},get isGroup(){return o(this.rawNode)},get isLeaf(){return F(this.rawNode,r)},get shallowLoaded(){return q(this.rawNode,r)},get ignored(){return l(this.rawNode)},contains(a){return se(this,a)}},re),d=_(e,t,i,c,r);function f(a){if(a==null)return null;const u=t.get(a);return u&&!u.isGroup&&!u.ignored?u:null}function k(a){if(a==null)return null;const u=t.get(a);return u&&!u.ignored?u:null}function p(a,u){const y=k(a);return y?y.getPrev(u):null}function A(a,u){const y=k(a);return y?y.getNext(u):null}function w(a){const u=k(a);return u?u.getParent():null}function b(a){const u=k(a);return u?u.getChild():null}const S={treeNodes:d,treeNodeMap:t,levelTreeNodeMap:i,maxLevel:Math.max(...i.keys()),getChildren:r,getFlattenedNodes(a){return ie(d,a)},getNode:f,getPrev:p,getNext:A,getParent:w,getChild:b,getFirstAvailableNode(){return $(d)},getPath(a,u={}){return Y(a,u,S)},getCheckedKeys(a,u={}){const{cascade:y=!0,leafOnly:K=!1,checkStrategy:v="all"}=u;return G({checkedKeys:x(a),indeterminateKeys:E(a),cascade:y,leafOnly:K,checkStrategy:v},S)},check(a,u,y={}){const{cascade:K=!0,leafOnly:v=!1,checkStrategy:m="all"}=y;return G({checkedKeys:x(u),indeterminateKeys:E(u),keysToCheck:a==null?[]:O(a),cascade:K,leafOnly:v,checkStrategy:m},S)},uncheck(a,u,y={}){const{cascade:K=!0,leafOnly:v=!1,checkStrategy:m="all"}=y;return G({checkedKeys:x(u),indeterminateKeys:E(u),keysToUncheck:a==null?[]:O(a),cascade:K,leafOnly:v,checkStrategy:m},S)},getNonLeafKeys(a={}){return D(d,a)}};return S}export{ue as a,ae as c,ie as f};
