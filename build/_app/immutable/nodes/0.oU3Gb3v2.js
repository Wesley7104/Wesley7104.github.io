import{d as L,j as le,l as ce,a as p,n as R,k as ve,t as j,g as ue}from"../chunks/disclose-version.v0OtyPfv.js";import{b as J,h as w,c as A,a as V,f as M,I as de,N as fe,L as me,s as _e,J as he,an as K,E as pe,t as be,av as Q,y as x,A as f,B as i,C as l,w as U,g as ge,z as W,Y as C,m as b,aB as ye,x as H,au as we}from"../chunks/runtime.DZnCwTKo.js";import{s as X,a as xe}from"../chunks/render.Bo6bw0NU.js";import{s as _,e as $e,a as B,i as ze,g as Te}from"../chunks/themeUtils.D5CD13M9.js";import{i as ke,p as Y,l as Ce,s as Se,o as Z,b as G}from"../chunks/index-client.DG9SFutC.js";import{b as h}from"../chunks/paths.DYH94R77.js";import"../chunks/legacy.Bv2jVEOJ.js";import{i as Ae}from"../chunks/if.aALcoW7P.js";import{t as S}from"../chunks/themes.W-2tcmvw.js";function Me(e,o,r,n,a){var t=e,c="",u;J(()=>{if(c===(c=o()??"")){w&&A();return}u!==void 0&&(K(u),u=void 0),c!==""&&(u=V(()=>{if(w){M.data;for(var s=A(),d=s;s!==null&&(s.nodeType!==8||s.data!=="");)d=s,s=de(s);if(s===null)throw fe(),me;L(M,d),t=_e(s);return}var v=c+"",m=le(v);L(he(m),m.lastChild),t.before(m)}))})}function Be(e,o,r,n,a){var u;w&&A();var t=(u=o.$$slots)==null?void 0:u[r],c=!1;t===!0&&(t=o.children,c=!0),t===void 0||t(e,c?()=>n:n)}function Re(e,o,...r){var n=e,a=be,t;J(()=>{a!==(a=o())&&(t&&(K(t),t=null),t=V(()=>a(n,...r)))},pe),w&&(n=M)}function ee(e,o,r){if(e.multiple)return Ie(e,o);for(var n of e.options){var a=g(n);if(ke(a,o)){n.selected=!0;return}}(!r||o!==void 0)&&(e.selectedIndex=-1)}function je(e,o){Q(()=>{var r=new MutationObserver(()=>{var n=e.__value;ee(e,n)});return r.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{r.disconnect()}})}function Ee(e,o,r=o){var n=!0;ce(e,"change",()=>{var a;if(e.multiple)a=[].map.call(e.querySelectorAll(":checked"),g);else{var t=e.querySelector(":checked");a=t&&g(t)}r(a)}),Q(()=>{var a=o();if(ee(e,a,n),n&&a===void 0){var t=e.querySelector(":checked");t!==null&&(a=g(t),r(a))}e.__value=a,n=!1}),je(e)}function Ie(e,o){for(var r of e.options)r.selected=~o.indexOf(g(r))}function g(e){return"__value"in e?e.__value:e.value}const Oe=!0,tt=Object.freeze(Object.defineProperty({__proto__:null,prerender:Oe},Symbol.toStringTag,{value:"Module"}));var qe=R("<title> </title>"),Pe=R('<svg xmlns="http://www.w3.org/2000/svg" class="svelte-c8tyih"><!><!></svg>');function Fe(e,o){let r=Y(o,"title",8,null),n=Y(o,"viewBox",8);var a=Pe(),t=i(a);Ae(t,r,u=>{var s=qe(),d=i(s,!0);l(s),x(()=>X(d,r())),p(u,s)});var c=f(t);Be(c,o,"default",{}),l(a),x(()=>_(a,"viewBox",n())),p(e,a)}var Ne=R('<path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"></path>');function De(e,o){const r=Ce(o,["children","$$slots","$$events","$$legacy"]);Fe(e,Se({viewBox:"0 0 448 512"},()=>r,{children:(n,a)=>{var t=Ne();p(n,t)},$$slots:{default:!0}}))}var Le=j('<option class="capitalize"> </option>'),He=j('<div class="flex row-auto"><label for="theme" class="label">Theme:</label> <select data-choose-theme="" class="select select-primary bg-primary-content hover:bg-neutral hover:text-neutral-content text-primary capitalize"><option>Choose a theme</option><!></select></div>');function Ye(e,o){U(o,!0);let r=ye("");Z(()=>{}),ge(()=>{if(typeof window<"u"){const s=window.localStorage.getItem("theme");s&&S.includes(s)&&(document.documentElement.setAttribute("data-theme",s),C(r,G(s)))}});function n(s){const v=s.target.value;S.includes(v)&&(window.localStorage.setItem("theme",v),document.cookie=`theme=${v}; max-age=31536000; path=/; SameSite=Lax`,document.documentElement.setAttribute("data-theme",v),C(r,G(v)),B(v))}var a=He(),t=f(i(a),2);t.__change=n;var c=i(t);c.value=((c.__value="")==null,"");var u=f(c);return $e(u,17,()=>S,ze,(s,d)=>{var v=Le(),m={},$=i(v,!0);l(v),x(()=>{m!==(m=b(d))&&(v.value=(v.__value=b(d))==null?"":b(d)),X($,b(d))}),p(s,v)}),l(t),l(a),x(()=>c.disabled=b(r)!==""),Ee(t,()=>b(r),s=>C(r,s)),p(e,a),W({set_theme:n})}ve(["change"]);var Ge=j('<div class="navbar bg-primary text-primary-content"><div class="navbar-start"><div class="dropdown"><div tabindex="0" role="button" class="btn btn-neutral-content md:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg></div> <ul class="menu menu-sm dropdown-content bg-primary rounded-box z-[1] mt-3 w-52 p-2 shadow"><li><a>About</a></li> <li><a>Projects</a></li> <li><a>Contact</a></li></ul></div> <a class="btn btn-ghost hover:bg-neutral hover:text-accent text-xl">RanDev.tech</a></div> <div class="navbar-center hidden md:flex"><ul class="menu menu-horizontal px-1 text-xl"><li><a>About</a></li> <li><a>Projects</a></li> <li><a>Contact</a></li></ul></div> <div class="navbar-end"><!></div></div> <!> <footer class="footer footer-center p-4 bg-primary text-primary-content"><div class="flex flex-row items-center justify-center"><a href="https://github.com/wesley7104" class="btn btn-square btn-ghost hover:bg-neutral hover:text-accent m-2"><!></a> <p>Copyright © 2024 - All right reserved by RanDev.tech</p></div></footer>',1);function at(e,o){U(o,!0),Z(()=>{const y=Te();y?B(y):B("business")});var r=Ge();xe(y=>{var D=ue(),ie=H(D);Me(ie,()=>`
        <style>
            :root {
                --primary-color: {myThemeColors.primary};
                --secondary-color: {myThemeColors.secondary};
                --accent-color: {myThemeColors.accent};
            }
        </style>
    `,!1,!1),p(y,D)});var n=H(r),a=i(n),t=i(a),c=f(i(t),2),u=i(c),s=i(u);_(s,"href",`${h??""}/#aboutMe`),l(u);var d=f(u,2),v=i(d);_(v,"href",`${h??""}/`),l(d);var m=f(d,2),$=i(m);_($,"href",`${h??""}/`),l(m),l(c),l(t);var te=f(t,2);_(te,"href",`${h??""}/`),l(a);var z=f(a,2),E=i(z),T=i(E),ae=i(T);_(ae,"href",`${h??""}/#aboutMe`),l(T);var k=f(T,2),re=i(k);_(re,"href",`${h??""}/`),l(k);var I=f(k,2),oe=i(I);_(oe,"href",`${h??""}/`),l(I),l(E),l(z);var O=f(z,2),ne=i(O);Ye(ne,{}),l(O),l(n);var q=f(n,2);Re(q,()=>o.children);var P=f(q,2),F=i(P),N=i(F),se=i(N);De(se,{}),l(N),we(2),l(F),l(P),p(e,r),W()}export{at as component,tt as universal};
