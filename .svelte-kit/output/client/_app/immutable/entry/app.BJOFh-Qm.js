const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.DCsuk2AP.js","../chunks/disclose-version.Ckhth3iH.js","../chunks/runtime.xYmJmHuE.js","../chunks/render.CMCEtneS.js","../chunks/themeUtils.k-mJatQ9.js","../chunks/themes.W-2tcmvw.js","../chunks/index.Iz4m9yUR.js","../chunks/index-client.DkgOBrhm.js","../chunks/paths.CwDXuZ6J.js","../assets/0.Hk-k_pQ4.css","../nodes/1.DD4bzh3R.js","../chunks/legacy.PWVgCiuL.js","../chunks/store.Ct6u_tSY.js","../chunks/entry.C9uW8EJs.js","../nodes/2.B0JOg7Zn.js","../chunks/if.BTNJ8s4Q.js","../chunks/props.CjYUR4wN.js","../assets/2.C113wp60.css","../nodes/3.D5L0oA_c.js","../assets/3.L6wN1058.css"])))=>i.map(i=>d[i]);
var F=e=>{throw TypeError(e)};var G=(e,t,r)=>t.has(e)||F("Cannot "+r);var u=(e,t,r)=>(G(e,t,"read from private field"),r?r.call(e):t.get(e)),L=(e,t,r)=>t.has(e)?F("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),O=(e,t,r,i)=>(G(e,t,"write to private field"),i?i.call(e,r):t.set(e,r),r);import{h as N,c as Q,b as W,E as H,a as X,f as Z,p,az as $,aA as tt,u as et,av as rt,S as st,q as v,m as at,w as S,aB as nt,aw as ot,A as it,F as ct,O as ut,Q as lt,aC as ft,G as w,K as dt,J as ht,aD as T,M as mt,I as _t,N as vt,n as C}from"../chunks/runtime.xYmJmHuE.js";import{h as gt,m as yt,u as Et,s as Pt}from"../chunks/render.CMCEtneS.js";import{d as B,a as R,t as z,f as Rt}from"../chunks/disclose-version.Ckhth3iH.js";import{i as D}from"../chunks/if.BTNJ8s4Q.js";import{o as bt,p as wt}from"../chunks/index-client.DkgOBrhm.js";import{p as I}from"../chunks/props.CjYUR4wN.js";function V(e,t,r){N&&Q();var i=e,n,o;W(()=>{n!==(n=t())&&(o&&(p(o),o=null),n&&(o=X(()=>r(i,n))))},H),N&&(i=Z)}function U(e,t){return e===t||(e==null?void 0:e[st])===t}function q(e={},t,r,i){return $(()=>{var n,o;return tt(()=>{n=o,o=[],et(()=>{e!==r(...o)&&(t(e,...o),n&&U(r(...n),e)&&t(null,...n))})}),()=>{rt(()=>{o&&U(r(...o),e)&&t(null,...o)})}}),e}function kt(e){return class extends St{constructor(t){super({component:e,...t})}}}var g,f;class St{constructor(t){L(this,g);L(this,f);var o;var r=new Map,i=(a,s)=>{var d=it(s);return r.set(a,d),d};const n=new Proxy({...t.props||{},$$events:{}},{get(a,s){return v(r.get(s)??i(s,Reflect.get(a,s)))},has(a,s){return s===at?!0:(v(r.get(s)??i(s,Reflect.get(a,s))),Reflect.has(a,s))},set(a,s,d){return S(r.get(s)??i(s,d),d),Reflect.set(a,s,d)}});O(this,f,(t.hydrate?gt:yt)(t.component,{target:t.target,anchor:t.anchor,props:n,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((o=t==null?void 0:t.props)!=null&&o.$$host)||t.sync===!1)&&nt(),O(this,g,n.$$events);for(const a of Object.keys(u(this,f)))a==="$set"||a==="$destroy"||a==="$on"||ot(this,a,{get(){return u(this,f)[a]},set(s){u(this,f)[a]=s},enumerable:!0});u(this,f).$set=a=>{Object.assign(n,a)},u(this,f).$destroy=()=>{Et(u(this,f))}}$set(t){u(this,f).$set(t)}$on(t,r){u(this,g)[t]=u(this,g)[t]||[];const i=(...n)=>r.call(this,...n);return u(this,g)[t].push(i),()=>{u(this,g)[t]=u(this,g)[t].filter(n=>n!==i)}}$destroy(){u(this,f).$destroy()}}g=new WeakMap,f=new WeakMap;const xt="modulepreload",At=function(e,t){return new URL(e,t).href},Y={},k=function(t,r,i){let n=Promise.resolve();if(r&&r.length>0){const a=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),d=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));n=Promise.allSettled(r.map(l=>{if(l=At(l,i),l in Y)return;Y[l]=!0;const y=l.endsWith(".css"),x=y?'[rel="stylesheet"]':"";if(!!i)for(let h=a.length-1;h>=0;h--){const _=a[h];if(_.href===l&&(!y||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${x}`))return;const c=document.createElement("link");if(c.rel=y?"stylesheet":xt,y||(c.as="script"),c.crossOrigin="",c.href=l,d&&c.setAttribute("nonce",d),document.head.appendChild(c),y)return new Promise((h,_)=>{c.addEventListener("load",h),c.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return n.then(a=>{for(const s of a||[])s.status==="rejected"&&o(s.reason);return t().catch(o)})},Gt={};var Lt=z('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),Ot=z("<!> <!>",1);function Tt(e,t){ct(t,!0);let r=I(t,"components",23,()=>[]),i=I(t,"data_0",3,null),n=I(t,"data_1",3,null);ut(()=>t.stores.page.set(t.page)),lt(()=>{t.stores,t.page,t.constructors,r(),t.form,i(),n(),t.stores.page.notify()});let o=T(!1),a=T(!1),s=T(null);bt(()=>{const E=t.stores.page.subscribe(()=>{v(o)&&(S(a,!0),ft().then(()=>{S(s,wt(document.title||"untitled page"))}))});return S(o,!0),E});const d=C(()=>t.constructors[1]);var l=Ot(),y=w(l);D(y,()=>t.constructors[1],E=>{var c=B();const h=C(()=>t.constructors[0]);var _=w(c);V(_,()=>v(h),(P,A)=>{q(A(P,{get data(){return i()},get form(){return t.form},children:(m,Ct)=>{var j=B(),J=w(j);V(J,()=>v(d),(K,M)=>{q(M(K,{get data(){return n()},get form(){return t.form}}),b=>r()[1]=b,()=>{var b;return(b=r())==null?void 0:b[1]})}),R(m,j)},$$slots:{default:!0}}),m=>r()[0]=m,()=>{var m;return(m=r())==null?void 0:m[0]})}),R(E,c)},E=>{var c=B();const h=C(()=>t.constructors[0]);var _=w(c);V(_,()=>v(h),(P,A)=>{q(A(P,{get data(){return i()},get form(){return t.form}}),m=>r()[0]=m,()=>{var m;return(m=r())==null?void 0:m[0]})}),R(E,c)});var x=dt(y,2);D(x,()=>v(o),E=>{var c=Lt(),h=mt(c);D(h,()=>v(a),_=>{var P=Rt();_t(()=>Pt(P,v(s))),R(_,P)}),vt(c),R(E,c)}),R(e,l),ht()}const Nt=kt(Tt),Ut=[()=>k(()=>import("../nodes/0.DCsuk2AP.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url),()=>k(()=>import("../nodes/1.DD4bzh3R.js"),__vite__mapDeps([10,1,2,11,3,12,13,6,8]),import.meta.url),()=>k(()=>import("../nodes/2.B0JOg7Zn.js"),__vite__mapDeps([14,1,2,3,15,4,5,6,7,12,11,16,17]),import.meta.url),()=>k(()=>import("../nodes/3.D5L0oA_c.js"),__vite__mapDeps([18,1,2,11,16,7,12,6,5,19]),import.meta.url)],Yt=[],zt={"/":[2],"/SVGtesting":[3]},Jt={handleError:({error:e})=>{console.error(e)},reroute:()=>{}};export{zt as dictionary,Jt as hooks,Gt as matchers,Ut as nodes,Nt as root,Yt as server_loads};
