var V=Object.defineProperty,w=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var I=(e,t,n)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))L.call(t,n)&&I(e,n,t[n]);if(x)for(var n of x(t))S.call(t,n)&&I(e,n,t[n]);return e},j=(e,t)=>w(e,A(t));import{u as y,b as E,d as G,R as H}from"./vue-router.50e08404.js";import{_ as $,p as k}from"./index.3581bcf2.js";import{i as M,N as D,S as P,j as T}from"./@vicons.8c7e6d22.js";import{Q as z,i as Q,R as K}from"./naive-ui.0fcc236d.js";import{d as B,K as a,E as F,M as O,O as i,H as o,L as s,P as q,Q as J,b as p,f as U,a as R,h as m,r as W,F as X,G as Y}from"./@vue.ae646f9b.js";import"./vuex.73836bcb.js";import"./axios.3fb31503.js";import"./jsencrypt.0f2cb58d.js";import"./nprogress.89e9266f.js";import"./date-fns.dd60f53e.js";import"./vooks.06bce981.js";import"./evtd.1b0caf17.js";import"./treemate.dd41bee4.js";import"./vdirs.4c45093a.js";import"./vueuc.0528993b.js";import"./seemly.e92b3d25.js";import"./@css-render.35e4c47d.js";import"./resize-observer-polyfill.8deb1e21.js";import"./css-render.7bbe45e9.js";import"./@emotion.6322e2ae.js";import"./async-validator.65fa9bcc.js";import"./lodash-es.481a7ca2.js";import"./date-fns-tz.a3874196.js";var N="/assets/logo.2408e57d.png";const Z=B({components:{LogInOutline:M,NotificationsOutline:D,SettingsOutline:P,LogoGithub:T},setup(){const e=y(),t=z();function n(r){switch(r){case 3:t.warning({title:"\u8B66\u544A",content:"\u786E\u5B9A\u9000\u51FA\u767B\u5F55\u5417\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{localStorage.clear(),k.forEach(c=>{e.removeRoute(c.name)}),e.replace("/login"),location.reload()},onNegativeClick:()=>{}});break}}return{logoImg:N,clickOnHeaderRightIcon:n}}}),ee=e=>(q("data-v-1cdb8926"),e=e(),J(),e),te={class:"clear"},oe=ee(()=>i("div",{class:"extra-nav"},[i("ul",{class:"nav-list"},[i("li",null,"\u7CFB\u7EDF\u8BBE\u7F6E"),i("li",null,"\u77E5\u8BC6\u5E93")])],-1)),ne={class:"user-center"},se={href:"https://github.com/Gitpingping/vite-ping-admin.git",target:"_blank"},ae=p(" github "),ie=p(" Gitee "),ue=p(" \u5E72\uFF01\u6CA1\u627E\u5230\u7801\u4E91\u7684logo "),re=p(" \u901A\u77E5\u6D88\u606F "),ce=p(" \u7CFB\u7EDF\u8BBE\u7F6E "),le=p(" \u9000\u51FA\u767B\u5F55 ");function _e(e,t,n,r,c,_){const u=a("LogoGithub"),d=a("n-icon"),l=a("n-tooltip"),f=a("NotificationsOutline"),g=a("SettingsOutline"),v=a("LogInOutline");return F(),O("div",te,[oe,i("ul",ne,[i("li",null,[i("a",se,[o(l,{trigger:"hover"},{trigger:s(()=>[o(d,null,{default:s(()=>[o(u)]),_:1})]),default:s(()=>[ae]),_:1})])]),i("li",null,[o(l,{trigger:"hover"},{trigger:s(()=>[ie]),default:s(()=>[ue]),_:1})]),i("li",null,[o(l,{trigger:"hover"},{trigger:s(()=>[o(d,null,{default:s(()=>[o(f)]),_:1})]),default:s(()=>[re]),_:1})]),i("li",null,[o(l,{trigger:"hover"},{trigger:s(()=>[o(d,null,{default:s(()=>[o(g)]),_:1})]),default:s(()=>[ce]),_:1})]),i("li",null,[o(l,{trigger:"hover"},{trigger:s(()=>[o(d,null,{default:s(()=>[o(v,{onClick:t[0]||(t[0]=h=>e.clickOnHeaderRightIcon(3))})]),_:1})]),default:s(()=>[le]),_:1})])])])}var de=$(Z,[["render",_e],["__scopeId","data-v-1cdb8926"]]);function pe(e){return()=>m(Q,null,{default:()=>m(e)})}const me=B({components:{RouterLink:E},setup(){U(function(){});const e=G(),t=y(),n=R(null);t.afterEach(_=>{n.value=_.name});const r=C(k),{defaultValue:c}=fe(e.name);return{logoImg:N,menuOptions:r,defaultValue:c}}});function C(e){return e.map(t=>{const[n,r]=[t.name,pe(t.meta.icon)],c={label:()=>m(E,{to:{name:t.name,params:{}}},{default:()=>{var u;return(u=t.meta)==null?void 0:u.title}})},_={label:()=>m("span",{to:{name:t.name,params:{}}},{default:()=>{var u;return(u=t.meta)==null?void 0:u.title}})};return W(j(b({},t.children?j(b({},_),{children:C(t.children),key:n,icon:r}):c),{key:n,icon:r}))})}function fe(e){return{defaultValue:R(e)}}const ge={class:"logo"},ve=["src"];function he(e,t,n,r,c,_){const u=a("n-menu");return F(),O(X,null,[i("div",ge,[i("img",{src:e.logoImg,alt:"logo",class:"logo"},null,8,ve)]),o(u,{options:e.menuOptions,"default-value":e.defaultValue},null,8,["options","default-value"])],64)}var be=$(me,[["render",he],["__scopeId","data-v-f5b64f3c"]]);const je=B({components:{RouterView:H,RouterLink:E,Header:de,Nav:be},setup(){return y(),window.Message=K(),{}}});function ye(e,t,n,r,c,_){const u=a("Nav"),d=a("n-layout-sider"),l=a("Header"),f=a("n-layout-header"),g=a("RouterView"),v=a("n-layout-content"),h=a("n-layout");return F(),Y(h,{"has-sider":""},{default:s(()=>[o(d,{"content-style":"padding: 24px;height:100vh;",bordered:""},{default:s(()=>[o(u)]),_:1}),o(h,null,{default:s(()=>[o(f,{bordered:""},{default:s(()=>[o(l)]),_:1}),o(v,{"content-style":"padding: 6px;height: calc(100vh - 65px);background-color:#f0f2f5"},{default:s(()=>[o(g)]),_:1})]),_:1})]),_:1})}var Ke=$(je,[["render",ye]]);export{Ke as default};
