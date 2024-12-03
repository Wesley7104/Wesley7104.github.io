import{a as A,n as X,t as de,g as pe}from"../chunks/disclose-version.d1ELcqIQ.js";import{h as le,aC as Ae,ag as me,aD as ze,E as $e,aE as je,aF as Pe,as as Ne,u as Se,x as ue,aG as Ee,av as Fe,C as W,aH as De,au as ge,j as ye,an as Be,F as H,aI as I,aJ as Z,M as y,K as d,N as x,I as S,J as G,w as b,q as o,aK as M,at as xe,Q as Oe,ar as we,G as be}from"../chunks/runtime.DLWVGSGY.js";import{b as We,s as ne}from"../chunks/render.2Pw97x9W.js";import{i as R}from"../chunks/if.gUaNAAbk.js";import{m as K,e as Re,i as He}from"../chunks/themeUtils.YwTBC0if.js";import{p as Y,o as Ge}from"../chunks/index-client.4IiP3a9h.js";import{s as V,a as J}from"../chunks/store.CHDFash4.js";import{i as ee}from"../chunks/legacy.CunnKq-K.js";import{p as te}from"../chunks/props.CPse87Go.js";function i(t,e,a,s){var r=t.__attributes??(t.__attributes={});le&&(r[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||r[e]!==(r[e]=a)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[Ae]=a),a==null?t.removeAttribute(e):typeof a!="string"&&Ke(t).includes(e)?t[e]=a:t.setAttribute(e,a))}var _e=new Map;function Ke(t){var e=_e.get(t.nodeName);if(e)return e;_e.set(t.nodeName,e=[]);for(var a,s=me(t),r=Element.prototype;r!==s;){a=ze(s);for(var c in a)a[c].set&&e.push(c);s=me(s)}return e}function Ve(t,e){var a=t.__className,s=Je(e);le&&t.className===s?t.__className=s:(a!==s||le&&t.className!==s)&&(e==null?t.removeAttribute("class"):t.className=s,t.__className=s)}function Je(t){return t??""}function qe(t,e,a,s){var r=t.__styles??(t.__styles={});r[e]!==a&&(r[e]=a,a==null?t.style.removeProperty(e):t.style.setProperty(e,a,""))}const Ue=()=>performance.now(),$={tick:t=>requestAnimationFrame(t),now:()=>Ue(),tasks:new Set};function Ie(t){$.tasks.forEach(e=>{e.c(t)||($.tasks.delete(e),e.f())}),$.tasks.size!==0&&$.tick(Ie)}function Ye(t){let e;return $.tasks.size===0&&$.tick(Ie),{promise:new Promise(a=>{$.tasks.add(e={c:t,f:a})}),abort(){$.tasks.delete(e)}}}function Q(t,e){t.dispatchEvent(new CustomEvent(e))}function Qe(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const e=t.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(a=>a[0].toUpperCase()+a.slice(1)).join("")}function ke(t){const e={},a=t.split(";");for(const s of a){const[r,c]=s.split(":");if(!r||c===void 0)break;const l=Qe(r.trim());e[l]=c.trim()}return e}const Xe=t=>t;function Ze(t,e,a,s){var r=(t&De)!==0,c="both",l,f=e.inert,m,n;function v(){var p=Be,k=ue;ge(null),ye(null);try{return l??(l=a()(e,(s==null?void 0:s())??{},{direction:c}))}finally{ge(p),ye(k)}}var g={is_global:r,in(){e.inert=f,Q(e,"introstart"),m=ce(e,v(),n,1,()=>{Q(e,"introend"),m==null||m.abort(),m=l=void 0})},out(p){e.inert=!0,Q(e,"outrostart"),n=ce(e,v(),m,0,()=>{Q(e,"outroend"),p==null||p()})},stop:()=>{m==null||m.abort(),n==null||n.abort()}},h=ue;if((h.transitions??(h.transitions=[])).push(g),We){var w=r;if(!w){for(var u=h.parent;u&&u.f&$e;)for(;(u=u.parent)&&!(u.f&je););w=!u||(u.f&Pe)!==0}w&&Ne(()=>{Se(()=>g.in())})}}function ce(t,e,a,s,r){var c=s===1;if(Ee(e)){var l,f=!1;return Fe(()=>{if(!f){var k=e({direction:c?"in":"out"});l=ce(t,k,a,s,r)}}),{abort:()=>{f=!0,l==null||l.abort()},deactivate:()=>l.deactivate(),reset:()=>l.reset(),t:()=>l.t()}}if(a==null||a.deactivate(),!(e!=null&&e.duration))return r(),{abort:W,deactivate:W,reset:W,t:()=>s};const{delay:m=0,css:n,tick:v,easing:g=Xe}=e;var h=[];if(c&&a===void 0&&(v&&v(0,1),n)){var w=ke(n(0,1));h.push(w,w)}var u=()=>1-s,p=t.animate(h,{duration:m});return p.onfinish=()=>{var k=(a==null?void 0:a.t())??1-s;a==null||a.abort();var L=s-k,C=e.duration*Math.abs(L),z=[];if(C>0){if(n)for(var j=Math.ceil(C/16.666666666666668),E=0;E<=j;E+=1){var B=k+L*g(E/j),q=n(B,1-B);z.push(ke(q))}u=()=>{var F=p.currentTime;return k+L*g(F/C)},v&&Ye(()=>{if(p.playState!=="running")return!1;var F=u();return v(F,1-F),!0})}p=t.animate(z,{duration:C,fill:"forwards"}),p.onfinish=()=>{u=()=>s,v==null||v(s,1-s),r()}},{abort:()=>{p&&(p.cancel(),p.effect=null,p.onfinish=W)},deactivate:()=>{r=W},reset:()=>{s===0&&(v==null||v(1,0))},t:()=>u()}}const et=""+new URL("../assets/MyCartoonPhoto.DV6-aHnP.png",import.meta.url).href,tt=t=>t;function st(t,{delay:e=0,duration:a=400,easing:s=tt}={}){const r=+getComputedStyle(t).opacity;return{delay:e,duration:a,easing:s,css:c=>`opacity: ${c*r}`}}const at=[{title:"Web Development",description:"Having some familiarity with many different technologies I can help you determine project specifications by not being limited to any specific technology stack.",icon:"WebDevIcon"},{title:"Graphic Design",icon:"DesignIcon",description:"My extensive experience in graphic design allows me to offer these services, in conjunction with others, saving you time and money on your project."},{title:"Integrations",icon:"IntegrationIcon",description:"Need to discuss how to implement a technical solution? Wish something could connect to another software? There is most likely an integration for what you want. Let me research it and help you set it up."},{title:"Tech Consulting",icon:"TechConsultingIcon",description:"I can help you determine the best course of action for your project. I can also help you determine the best technology stack for your project."}];var ot=X('<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="svelte-otdjmf"><g class="code-brackets svelte-otdjmf"><path class="bracket-outline svelte-otdjmf" d="M25,20 L10,50 L25,80" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path class="bracketLeft svelte-otdjmf" d="M25,20 L10,50 L25,80" fill="none" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path><path class="bracket-outline svelte-otdjmf" d="M75,20 L90,50 L75,80" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path class="bracketRight svelte-otdjmf" d="M75,20 L90,50 L75,80" fill="none" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path><text class="svelte-text-shadow svelte-otdjmf" x="50" y="40" text-anchor="middle" font-family="monospace" font-size="18">.code</text><text class="svelte-text-shadow svelte-otdjmf" x="50" y="55" text-anchor="middle" font-family="monospace" font-size="18">.is</text><text class="svelte-text-shadow svelte-otdjmf" x="50" y="68" text-anchor="middle" font-family="monospace" font-size="18">.cool</text><text class="svelte-text svelte-otdjmf" x="50" y="40" text-anchor="middle" font-family="monospace" font-weight="bold" font-size="18">.code</text><text class="svelte-text svelte-otdjmf" x="50" y="55" text-anchor="middle" font-family="monospace" font-weight="bold" font-size="18">.is</text><text class="svelte-text svelte-otdjmf" x="50" y="68" text-anchor="middle" font-family="monospace" font-weight="bold" font-size="18">.cool</text></g></svg>');function rt(t,e){H(e,!1);const a=V(),s=()=>J(K,"$myThemeColors",a),r=M(),c=M(),l=M(),f=M();let m=te(e,"size",8,"100%");I(()=>s(),()=>{b(r,s().primary)}),I(()=>s(),()=>{b(c,s().secondary)}),I(()=>s(),()=>{b(l,s().accent)}),I(()=>s(),()=>{b(f,s().neutral)}),Z(),ee();var n=ot(),v=y(n),g=y(v),h=d(g),w=d(h),u=d(w),p=d(u),k=d(p),L=d(k),C=d(L),z=d(C),j=d(z);x(v),x(n),S(()=>{i(n,"width",m()),i(n,"height",m()),i(g,"stroke",o(f)),i(h,"stroke",o(l)),i(w,"stroke",o(f)),i(u,"stroke",o(l)),i(p,"color",o(f)),i(k,"color",o(f)),i(L,"color",o(f)),i(C,"color",o(r)),i(z,"color",o(r)),i(j,"color",o(r))}),A(t,n),G()}var it=X('<svg viewBox="0 0 100 100" class="svelte-s66xn9"><rect class="tablet svelte-s66xn9" x="5" y="10" width="90" height="70" rx="4" fill="none" stroke-width="6"></rect><clipPath id="screen-mask" class="svelte-s66xn9"><rect x="10" y="15" width="80" height="60" rx="2" class="svelte-s66xn9"></rect></clipPath><g clip-path="url(#screen-mask)" class="svelte-s66xn9"><path class="mountain svelte-s66xn9" d="M10,75 L30,35 L45,55 L60,25 L75,45 L90,75" fill="none" stroke-width="4" stroke-linecap="round"></path><path class="cloud svelte-s66xn9" d="M20,30 C20,30 25,25 30,30 S40,30 40,30" fill="none" stroke-width="2" stroke-linecap="round"></path><path class="cloud svelte-s66xn9" d="M60,25 C60,25 65,20 70,25 S80,25 80,25" fill="none" stroke-width="2" stroke-linecap="round"></path></g><circle class="button svelte-s66xn9" cx="50" cy="80" r="3"></circle></svg>');function nt(t,e){H(e,!1);const a=V(),s=()=>J(K,"$myThemeColors",a),r=M(),c=M(),l=M(),f=M();let m=te(e,"size",8,"100%");I(()=>s(),()=>{b(r,s().primary)}),I(()=>s(),()=>{b(c,s().secondary)}),I(()=>s(),()=>{b(l,s().accent)}),I(()=>s(),()=>{b(f,s().neutral)}),Z(),ee();var n=it(),v=y(n),g=d(v,2),h=y(g),w=d(h),u=d(w);x(g);var p=d(g);x(n),S(()=>{i(n,"width",m()),i(n,"height",m()),i(v,"stroke",o(r)),i(h,"stroke",o(c)),i(w,"stroke",o(l)),i(u,"stroke",o(l)),i(p,"fill",o(l))}),A(t,n),G()}var lt=X('<svg viewBox="0 0 100 100" class="svelte-yvu9sd"><rect class="socket svelte-yvu9sd" x="60" y="30" width="35" height="40" rx="4" fill="none" stroke-width="4"></rect><rect class="socket-hole svelte-yvu9sd" x="70" y="40" width="15" height="6" rx="1" stroke-width="2"></rect><rect class="socket-hole svelte-yvu9sd" x="70" y="54" width="15" height="6" rx="1" stroke-width="2"></rect><g class="plug svelte-yvu9sd"><path d="M5,50 L20,50 L25,40 L45,40 L45,60 L25,60 L20,50" fill="none" stroke-width="4" stroke-linejoin="round" class="svelte-yvu9sd"></path><rect class="prong svelte-yvu9sd" x="47" y="40" width="13" height="6" stroke="" stroke-width="2"></rect><rect class="prong svelte-yvu9sd" x="47" y="54" width="13" height="6" stroke="" stroke-width="2"></rect><path class="cable svelte-yvu9sd" d="L45,60 L25,60 L20,50" fill="none" stroke-width="4" stroke-linecap="round"></path></g></svg>');function ct(t,e){H(e,!1);const a=V(),s=()=>J(K,"$myThemeColors",a),r=M(),c=M(),l=M(),f=M();let m=te(e,"size",8,"100%");I(()=>s(),()=>{b(r,s().primary)}),I(()=>s(),()=>{b(c,s().secondary)}),I(()=>s(),()=>{b(l,s().accent)}),I(()=>s(),()=>{b(f,s().neutral)}),Z(),ee();var n=lt(),v=y(n),g=d(v),h=d(g),w=d(h),u=y(w),p=d(u),k=d(p),L=d(k);x(w),x(n),S(()=>{i(n,"width",m()),i(n,"height",m()),i(v,"stroke",o(r)),i(g,"fill",o(f)),i(g,"stroke",o(c)),i(h,"fill",o(f)),i(h,"stroke",o(c)),i(u,"stroke",o(l)),i(p,"fill",o(c)),i(k,"fill",o(c)),i(L,"stroke",o(l))}),A(t,n),G()}var dt=X('<svg viewBox="0 0 100 100" class="svelte-mfbfgm"><rect x="35" y="10" width="30" height="15" rx="7.5" fill="none" stroke-width="2" class="flowchart-element startNode svelte-mfbfgm"></rect><path d="M50,35 L65,45 L50,55 L35,45 Z" fill="none" stroke-width="2" class="flowchart-element decisionNode svelte-mfbfgm"></path><rect x="0" y="65" width="30" height="15" fill="none" stroke-width="2" class="flowchart-element processNode svelte-mfbfgm"></rect><rect x="70" y="65" width="30" height="15" fill="none" stroke-width="2" class="flowchart-element processNode svelte-mfbfgm"></rect><path d="M50,25 L50,35 M35,45 L15,45 L15,65 M65,45 L85,45 L85,65" fill="none" stroke-width="2" class="connector svelte-mfbfgm"></path></svg>');function vt(t,e){H(e,!1);const a=V(),s=()=>J(K,"$myThemeColors",a),r=M(),c=M(),l=M(),f=M();let m=te(e,"size",8,"100%");I(()=>s(),()=>{b(r,s().primary)}),I(()=>s(),()=>{b(c,s().secondary)}),I(()=>s(),()=>{b(l,s().accent)}),I(()=>s(),()=>{b(f,s().neutral)}),Z(),ee();var n=dt(),v=y(n),g=d(v),h=d(g),w=d(h),u=d(w);x(n),S(()=>{i(n,"width",m()),i(n,"height",m()),i(v,"stroke",o(r)),i(g,"stroke",o(l)),i(h,"stroke",o(f)),i(w,"stroke",o(f)),i(u,"stroke",o(c))}),A(t,n),G()}var ht=de('<div class="blob svelte-1wivkx2"></div>'),ft=de('<div class="card m-3 p-0 bg-primary bg-opacity-35 rounded-box grid flex-grow place-items-center"><div class="card-header"><!></div> <div class="card-body"><h3 class="card-title text-3xl font-bold text-neutral-content"> </h3> <div class="divider divider-secondary w-1/2"></div> <p class="text-lg text-primary-content"> </p></div> <div class="card-footer"><!></div></div>'),pt=de(`<main class="bg-neutral"><div class="hero min-h-auto p-10 from-neutral via-neutral to-accent bg-gradient-to-tl"><div class="hero-content flex-col lg:flex-row"><img alt="Wesley's Professional Headshot" class="max-w-sm rounded-full shadow-lg"> <div><h1 class="m-2 text-4xl font-bold text-neutral-content">My name is Wesley Randolph</h1> <p class="m-2 py-4 text-3xl font-bold text-neutral-content">I am a <span class="text-3xl font-black from-neutral to-neutral-content bg-gradient-to-r"><span class=" text-5xl font-bold from-accent via-neutral to-primary bg-gradient-to-r bg-clip-text text-transparent"> </span></span></p> <p class="m-2 pb-4 text-xl font-bold text-neutral-content">A man of many talents and yet a Master of none! 🤣</p> <button class="m-2 btn btn-accent shadow-md">See my work.</button> <button class="m-2 btn btn-primary shadow-md">Setup a Meeting!</button></div></div></div> <div class="divider divider-accent opacity-50 w-3/4 mx-auto"></div> <div><!> <!></div> <div id="aboutMe" class="p-10 bg-secondary bg-opacity-75"><div class="divider divider-primary w-3/4 mx-auto"></div> <h2 class="text-3xl font-bold text-neutral-content text-center">About Me</h2> <p class="text-2xl text-neutral-content text-center">I am a Follower of Christ, a Husband to the love of my life, and a Father to two beautiful daughters.</p></div> <div class="divider-accent"></div> <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"><li><div class="timeline-middle"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg></div> <div class="timeline-start mb-10 md:text-end"><time class="font-mono italic">1984</time> <div class="text-lg font-black">First Macintosh computer</div> The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh
            personal computer. It played a pivotal role in establishing desktop publishing as a general
            office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed
            in a beige case with integrated carrying handle; it came with a keyboard and single-button
            mouse.</div> <hr></li> <li><hr> <div class="timeline-middle"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg></div> <div class="timeline-end mb-10"><time class="font-mono italic">1998</time> <div class="text-lg font-black">iMac</div> iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has
            been the primary part of Apple's consumer desktop offerings since its debut in August 1998,
            and has evolved through seven distinct forms</div> <hr></li> <li><hr> <div class="timeline-middle"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg></div> <div class="timeline-start mb-10 md:text-end"><time class="font-mono italic">2001</time> <div class="text-lg font-black">iPod</div> The iPod is a discontinued series of portable media players and multi-purpose mobile devices
            designed and marketed by Apple Inc. The first version was released on October 23, 2001, about
            8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450
            million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At
            over 20 years, the iPod brand is the oldest to be discontinued by Apple</div> <hr></li> <li><hr> <div class="timeline-middle"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg></div> <div class="timeline-end mb-10"><time class="font-mono italic">2007</time> <div class="text-lg font-black">iPhone</div> iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile
            operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on
            January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As
            of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone
            accounts for 15.6% of global smartphone market share</div> <hr></li> <li><hr> <div class="timeline-middle"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg></div> <div class="timeline-start mb-10 md:text-end"><time class="font-mono italic">2015</time> <div class="text-lg font-black">Apple Watch</div> The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness
            tracking, health-oriented capabilities, and wireless telecommunication, and integrates with
            iOS and other Apple products and services</div></li></ul></main>`);function It(t,e){H(e,!0);const a=V(),s=()=>J(K,"$myThemeColors",a);let r=["Christian","Father","Husband","Developer","Integrator","Designer","Tech Consultant","Day Trader"],c=0,l=0,f=xe("");const m=200,n=100,v=()=>{l>0?(b(f,Y(o(f).slice(0,-1))),l-=1,setTimeout(v,n)):(c=(c+1)%r.length,l=0,g())},g=()=>{l<r[c].length?(b(f,o(f)+r[c][l]),l+=1,setTimeout(g,m)):setTimeout(v,n)};let h=xe(Y({x:0,y:0}));function w(T){let _=T.currentTarget.getBoundingClientRect();b(h,Y({x:T.clientX-_.left,y:T.clientY-_.top})),console.log(o(h))}function u(T){b(h,Y({x:0,y:0}))}function p(T){let _="";if(console.log(T),T.length===7){const P=parseInt(T.slice(1,3),16),D=parseInt(T.slice(3,5),16),U=parseInt(T.slice(5,7),16);_=`invert(${P/255*100}%) sepia(${D/255*100}%) saturate(${U/255*100}%) hue-rotate(${Math.atan2(U-P,D-P)*180/Math.PI}deg)`,console.log("converted filterValue: ",_)}else _=T,console.log("un-converted filterValue: ",_);return _}Oe(()=>{document.documentElement.style.setProperty("--primary-color-filter",p(s().primary)),document.documentElement.style.setProperty("--secondary-color-filter",p(s().secondary))}),Ge(()=>{g()});var k=pt(),L=y(k),C=y(L),z=y(C);i(z,"src",et);var j=d(z,2),E=d(y(j),2),B=d(y(E)),q=y(B),F=y(q,!0);x(q),x(B),x(E),we(6),x(j),x(C),x(L);var se=d(L,4);Ve(se,`flex w-full p-4 flex-col lg:flex-row from-neutral via-neutral to-accent bg-gradient-to-br on:enter=${w??""} on:leave=${u??""} svelte-1wivkx2`);var ve=y(se);R(ve,()=>o(h).x>0||o(h).y>0,T=>{var _=ht();S(()=>qe(_,"transform",`translate(${o(h).x??""}px, ${o(h).y??""}px)`)),Ze(3,_,()=>st),A(T,_)});var Me=d(ve,2);Re(Me,17,()=>at,He,(T,_)=>{var P=ft(),D=y(P),U=y(D);R(U,()=>o(_).icon==="WebDevIcon",N=>{rt(N,{size:"144px"})},N=>{var O=pe(),re=be(O);R(re,()=>o(_).icon==="IntegrationIcon",ie=>{ct(ie,{size:"196px"})},null,!0),A(N,O)}),x(D);var ae=d(D,2),oe=y(ae),Te=y(oe,!0);x(oe);var he=d(oe,4),Le=y(he,!0);x(he),x(ae);var fe=d(ae,2),Ce=y(fe);R(Ce,()=>o(_).icon==="DesignIcon",N=>{nt(N,{size:"144px"})},N=>{var O=pe(),re=be(O);R(re,()=>o(_).icon==="TechConsultingIcon",ie=>{vt(ie,{size:"196px"})},null,!0),A(N,O)}),x(fe),x(P),S(()=>{ne(Te,o(_).title),ne(Le,o(_).description)}),A(T,P)}),x(se),we(6),x(k),S(()=>ne(F,o(f))),A(t,k),G()}export{It as component};