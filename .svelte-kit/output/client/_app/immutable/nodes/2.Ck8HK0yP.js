import{s as H,a as z,n as Z,b as G,t as ce,g as fe}from"../chunks/disclose-version.v0OtyPfv.js";import{h as me,E as Ce,aG as Le,aH as ze,av as Ae,j as $e,S as pe,a7 as je,ax as Pe,t as O,aI as Ne,aC as ue,ab as ge,ao as Se,w as J,aJ as T,aK as Q,B as y,A as c,C as x,y as S,z as K,Y as b,m as a,aL as I,aB as ye,g as Be,au as xe,x as we}from"../chunks/runtime.DZnCwTKo.js";import{b as Ee,s as re}from"../chunks/render.Bo6bw0NU.js";import{i as R}from"../chunks/if.aALcoW7P.js";import{s as i,m as q,e as Fe,i as De}from"../chunks/themeUtils.D5CD13M9.js";import{p as ee,b as U,o as We}from"../chunks/index-client.DG9SFutC.js";import{b as Oe}from"../chunks/paths.BpCJn6oE.js";import"../chunks/legacy.Bv2jVEOJ.js";import{i as te}from"../chunks/lifecycle.ClbkkUeX.js";function Re(s,t){var o=s.__className,e=He(t);me&&s.className===e?s.__className=e:(o!==e||me&&s.className!==e)&&(t==null?s.removeAttribute("class"):s.className=e,s.__className=e)}function He(s){return s??""}function Ge(s,t,o,e){var l=s.__styles??(s.__styles={});l[t]!==o&&(l[t]=o,o==null?s.style.removeProperty(t):s.style.setProperty(t,o,""))}const Je=()=>performance.now(),$={tick:s=>requestAnimationFrame(s),now:()=>Je(),tasks:new Set};function _e(s){$.tasks.forEach(t=>{t.c(s)||($.tasks.delete(t),t.f())}),$.tasks.size!==0&&$.tick(_e)}function Ke(s){let t;return $.tasks.size===0&&$.tick(_e),{promise:new Promise(o=>{$.tasks.add(t={c:s,f:o})}),abort(){$.tasks.delete(t)}}}function X(s,t){s.dispatchEvent(new CustomEvent(t))}function qe(s){if(s==="float")return"cssFloat";if(s==="offset")return"cssOffset";if(s.startsWith("--"))return s;const t=s.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(o=>o[0].toUpperCase()+o.slice(1)).join("")}function be(s){const t={},o=s.split(";");for(const e of o){const[l,d]=e.split(":");if(!l||d===void 0)break;const r=qe(l.trim());t[r]=d.trim()}return t}const Ve=s=>s;function Ye(s,t,o,e){var l=(s&Ne)!==0,d="both",r,f=t.inert,p,n;function v(){var m=Se,_=pe;ue(null),ge(null);try{return r??(r=o()(t,(e==null?void 0:e())??{},{direction:d}))}finally{ue(m),ge(_)}}var g={is_global:l,in(){t.inert=f,X(t,"introstart"),p=le(t,v(),n,1,()=>{X(t,"introend"),p==null||p.abort(),p=r=void 0})},out(m){t.inert=!0,X(t,"outrostart"),n=le(t,v(),p,0,()=>{X(t,"outroend"),m==null||m()})},stop:()=>{p==null||p.abort(),n==null||n.abort()}},h=pe;if((h.transitions??(h.transitions=[])).push(g),Ee){var w=l;if(!w){for(var u=h.parent;u&&u.f&Ce;)for(;(u=u.parent)&&!(u.f&Le););w=!u||(u.f&ze)!==0}w&&Ae(()=>{$e(()=>g.in())})}}function le(s,t,o,e,l){var d=e===1;if(je(t)){var r,f=!1;return Pe(()=>{if(!f){var _=t({direction:d?"in":"out"});r=le(s,_,o,e,l)}}),{abort:()=>{f=!0,r==null||r.abort()},deactivate:()=>r.deactivate(),reset:()=>r.reset(),t:()=>r.t()}}if(o==null||o.deactivate(),!(t!=null&&t.duration))return l(),{abort:O,deactivate:O,reset:O,t:()=>e};const{delay:p=0,css:n,tick:v,easing:g=Ve}=t;var h=[];if(d&&o===void 0&&(v&&v(0,1),n)){var w=be(n(0,1));h.push(w,w)}var u=()=>1-e,m=s.animate(h,{duration:p});return m.onfinish=()=>{var _=(o==null?void 0:o.t())??1-e;o==null||o.abort();var C=e-_,L=t.duration*Math.abs(C),A=[];if(L>0){if(n)for(var j=Math.ceil(L/16.666666666666668),B=0;B<=j;B+=1){var D=_+C*g(B/j),V=n(D,1-D);A.push(be(V))}u=()=>{var E=m.currentTime;return _+C*g(E/L)},v&&Ke(()=>{if(m.playState!=="running")return!1;var E=u();return v(E,1-E),!0})}m=s.animate(A,{duration:L,fill:"forwards"}),m.onfinish=()=>{u=()=>e,v==null||v(e,1-e),l()}},{abort:()=>{m&&(m.cancel(),m.effect=null,m.onfinish=O)},deactivate:()=>{l=O},reset:()=>{e===0&&(v==null||v(1,0))},t:()=>u()}}const Ue=s=>s;function Xe(s,{delay:t=0,duration:o=400,easing:e=Ue}={}){const l=+getComputedStyle(s).opacity;return{delay:t,duration:o,easing:e,css:d=>`opacity: ${d*l}`}}const Ze=[{title:"Web Development",description:"Having some familiarity with many different technologies I can help you determine project specifications by not being limited to any specific technology stack.",icon:"WebDevIcon"},{title:"Graphic Design",icon:"DesignIcon",description:"My extensive experience in graphic design allows me to offer these services, in conjunction with others, saving you time and money on your project."},{title:"Integrations",icon:"IntegrationIcon",description:"Need to discuss how to implement a technical solution? Wish something could connect to another software? There is most likely an integration for what you want. Let me research it and help you set it up."},{title:"Tech Consulting",icon:"TechConsultingIcon",description:"I can help you determine the best course of action for your project. I can also help you determine the best technology stack for your project."}];var Qe=Z('<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="svelte-otdjmf"><g class="code-brackets svelte-otdjmf"><path class="bracket-outline svelte-otdjmf" d="M25,20 L10,50 L25,80" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path class="bracketLeft svelte-otdjmf" d="M25,20 L10,50 L25,80" fill="none" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path><path class="bracket-outline svelte-otdjmf" d="M75,20 L90,50 L75,80" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path class="bracketRight svelte-otdjmf" d="M75,20 L90,50 L75,80" fill="none" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path><text class="svelte-text-shadow svelte-otdjmf" x="50" y="40" text-anchor="middle" font-family="monospace" font-size="18">.code</text><text class="svelte-text-shadow svelte-otdjmf" x="50" y="55" text-anchor="middle" font-family="monospace" font-size="18">.is</text><text class="svelte-text-shadow svelte-otdjmf" x="50" y="68" text-anchor="middle" font-family="monospace" font-size="18">.cool</text><text class="svelte-text svelte-otdjmf" x="50" y="40" text-anchor="middle" font-family="monospace" font-weight="bold" font-size="18">.code</text><text class="svelte-text svelte-otdjmf" x="50" y="55" text-anchor="middle" font-family="monospace" font-weight="bold" font-size="18">.is</text><text class="svelte-text svelte-otdjmf" x="50" y="68" text-anchor="middle" font-family="monospace" font-weight="bold" font-size="18">.cool</text></g></svg>');function et(s,t){J(t,!1);const o=H(),e=()=>G(q,"$myThemeColors",o),l=I(),d=I(),r=I(),f=I();let p=ee(t,"size",8,"100%");T(()=>e(),()=>{b(l,e().primary)}),T(()=>e(),()=>{b(d,e().secondary)}),T(()=>e(),()=>{b(r,e().accent)}),T(()=>e(),()=>{b(f,e().neutral)}),Q(),te();var n=Qe(),v=y(n),g=y(v),h=c(g),w=c(h),u=c(w),m=c(u),_=c(m),C=c(_),L=c(C),A=c(L),j=c(A);x(v),x(n),S(()=>{i(n,"width",p()),i(n,"height",p()),i(g,"stroke",a(f)),i(h,"stroke",a(r)),i(w,"stroke",a(f)),i(u,"stroke",a(r)),i(m,"color",a(f)),i(_,"color",a(f)),i(C,"color",a(f)),i(L,"color",a(l)),i(A,"color",a(l)),i(j,"color",a(l))}),z(s,n),K()}var tt=Z('<svg viewBox="0 0 100 100" class="svelte-s66xn9"><rect class="tablet svelte-s66xn9" x="5" y="10" width="90" height="70" rx="4" fill="none" stroke-width="6"></rect><clipPath id="screen-mask" class="svelte-s66xn9"><rect x="10" y="15" width="80" height="60" rx="2" class="svelte-s66xn9"></rect></clipPath><g clip-path="url(#screen-mask)" class="svelte-s66xn9"><path class="mountain svelte-s66xn9" d="M10,75 L30,35 L45,55 L60,25 L75,45 L90,75" fill="none" stroke-width="4" stroke-linecap="round"></path><path class="cloud svelte-s66xn9" d="M20,30 C20,30 25,25 30,30 S40,30 40,30" fill="none" stroke-width="2" stroke-linecap="round"></path><path class="cloud svelte-s66xn9" d="M60,25 C60,25 65,20 70,25 S80,25 80,25" fill="none" stroke-width="2" stroke-linecap="round"></path></g><circle class="button svelte-s66xn9" cx="50" cy="80" r="3"></circle></svg>');function st(s,t){J(t,!1);const o=H(),e=()=>G(q,"$myThemeColors",o),l=I(),d=I(),r=I(),f=I();let p=ee(t,"size",8,"100%");T(()=>e(),()=>{b(l,e().primary)}),T(()=>e(),()=>{b(d,e().secondary)}),T(()=>e(),()=>{b(r,e().accent)}),T(()=>e(),()=>{b(f,e().neutral)}),Q(),te();var n=tt(),v=y(n),g=c(v,2),h=y(g),w=c(h),u=c(w);x(g);var m=c(g);x(n),S(()=>{i(n,"width",p()),i(n,"height",p()),i(v,"stroke",a(l)),i(h,"stroke",a(d)),i(w,"stroke",a(r)),i(u,"stroke",a(r)),i(m,"fill",a(r))}),z(s,n),K()}var at=Z('<svg viewBox="0 0 100 100" class="svelte-yvu9sd"><rect class="socket svelte-yvu9sd" x="60" y="30" width="35" height="40" rx="4" fill="none" stroke-width="4"></rect><rect class="socket-hole svelte-yvu9sd" x="70" y="40" width="15" height="6" rx="1" stroke-width="2"></rect><rect class="socket-hole svelte-yvu9sd" x="70" y="54" width="15" height="6" rx="1" stroke-width="2"></rect><g class="plug svelte-yvu9sd"><path d="M5,50 L20,50 L25,40 L45,40 L45,60 L25,60 L20,50" fill="none" stroke-width="4" stroke-linejoin="round" class="svelte-yvu9sd"></path><rect class="prong svelte-yvu9sd" x="47" y="40" width="13" height="6" stroke="" stroke-width="2"></rect><rect class="prong svelte-yvu9sd" x="47" y="54" width="13" height="6" stroke="" stroke-width="2"></rect><path class="cable svelte-yvu9sd" d="L45,60 L25,60 L20,50" fill="none" stroke-width="4" stroke-linecap="round"></path></g></svg>');function ot(s,t){J(t,!1);const o=H(),e=()=>G(q,"$myThemeColors",o),l=I(),d=I(),r=I(),f=I();let p=ee(t,"size",8,"100%");T(()=>e(),()=>{b(l,e().primary)}),T(()=>e(),()=>{b(d,e().secondary)}),T(()=>e(),()=>{b(r,e().accent)}),T(()=>e(),()=>{b(f,e().neutral)}),Q(),te();var n=at(),v=y(n),g=c(v),h=c(g),w=c(h),u=y(w),m=c(u),_=c(m),C=c(_);x(w),x(n),S(()=>{i(n,"width",p()),i(n,"height",p()),i(v,"stroke",a(l)),i(g,"fill",a(f)),i(g,"stroke",a(d)),i(h,"fill",a(f)),i(h,"stroke",a(d)),i(u,"stroke",a(r)),i(m,"fill",a(d)),i(_,"fill",a(d)),i(C,"stroke",a(r))}),z(s,n),K()}var it=Z('<svg viewBox="0 0 100 100" class="svelte-mfbfgm"><rect x="35" y="10" width="30" height="15" rx="7.5" fill="none" stroke-width="2" class="flowchart-element startNode svelte-mfbfgm"></rect><path d="M50,35 L65,45 L50,55 L35,45 Z" fill="none" stroke-width="2" class="flowchart-element decisionNode svelte-mfbfgm"></path><rect x="0" y="65" width="30" height="15" fill="none" stroke-width="2" class="flowchart-element processNode svelte-mfbfgm"></rect><rect x="70" y="65" width="30" height="15" fill="none" stroke-width="2" class="flowchart-element processNode svelte-mfbfgm"></rect><path d="M50,25 L50,35 M35,45 L15,45 L15,65 M65,45 L85,45 L85,65" fill="none" stroke-width="2" class="connector svelte-mfbfgm"></path></svg>');function nt(s,t){J(t,!1);const o=H(),e=()=>G(q,"$myThemeColors",o),l=I(),d=I(),r=I(),f=I();let p=ee(t,"size",8,"100%");T(()=>e(),()=>{b(l,e().primary)}),T(()=>e(),()=>{b(d,e().secondary)}),T(()=>e(),()=>{b(r,e().accent)}),T(()=>e(),()=>{b(f,e().neutral)}),Q(),te();var n=it(),v=y(n),g=c(v),h=c(g),w=c(h),u=c(w);x(n),S(()=>{i(n,"width",p()),i(n,"height",p()),i(v,"stroke",a(l)),i(g,"stroke",a(r)),i(h,"stroke",a(f)),i(w,"stroke",a(f)),i(u,"stroke",a(d))}),z(s,n),K()}var rt=ce('<div class="blob svelte-1wivkx2"></div>'),lt=ce('<div class="card m-3 p-0 bg-primary bg-opacity-35 rounded-box grid flex-grow place-items-center"><div class="card-header"><!></div> <div class="card-body"><h3 class="card-title text-3xl font-bold text-neutral-content"> </h3> <div class="divider divider-secondary w-1/2"></div> <p class="text-lg text-primary-content"> </p></div> <div class="card-footer"><!></div></div>'),ct=ce(`<main class="bg-neutral"><div class="hero min-h-auto p-10 from-neutral via-neutral to-accent bg-gradient-to-tl"><div class="hero-content flex-col lg:flex-row"><img alt="Wesley's Professional Headshot" class="max-w-sm rounded-full shadow-lg"> <div><h1 class="m-2 text-4xl font-bold text-neutral-content">My name is Wesley Randolph</h1> <p class="m-2 py-4 text-3xl font-bold text-neutral-content">I am a <span class="text-3xl font-black from-neutral to-neutral-content bg-gradient-to-r"><span class=" text-5xl font-bold from-accent via-neutral to-primary bg-gradient-to-r bg-clip-text text-transparent"> </span></span></p> <p class="m-2 pb-4 text-xl font-bold text-neutral-content">A man of many talents and yet a Master of none! 🤣</p> <button class="m-2 btn btn-accent shadow-md">See my work.</button> <button class="m-2 btn btn-primary shadow-md">Setup a Meeting!</button></div></div></div> <div class="divider divider-accent opacity-50 w-3/4 mx-auto"></div> <div><!> <!></div> <div id="aboutMe" class="p-10 bg-secondary bg-opacity-75"><div class="divider divider-primary w-3/4 mx-auto"></div> <h2 class="text-3xl font-bold text-neutral-content text-center">About Me</h2> <p class="text-2xl text-neutral-content text-center">I am a Follower of Christ, a Husband to the love of my life, and a Father to two beautiful daughters.</p></div> <div class="divider-accent"></div> <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"><li><div class="timeline-middle"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg></div> <div class="timeline-start mb-10 md:text-end"><time class="font-mono italic">1984</time> <div class="text-lg font-black">First Macintosh computer</div> The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh
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
            iOS and other Apple products and services</div></li></ul></main>`);function xt(s,t){J(t,!0);const o=H(),e=()=>G(q,"$myThemeColors",o);let l=["Christian","Father","Husband","Developer","Integrator","Designer","Tech Consultant","Day Trader"],d=0,r=0,f=ye("");const p=200,n=100,v=()=>{r>0?(b(f,U(a(f).slice(0,-1))),r-=1,setTimeout(v,n)):(d=(d+1)%l.length,r=0,g())},g=()=>{r<l[d].length?(b(f,a(f)+l[d][r]),r+=1,setTimeout(g,p)):setTimeout(v,n)};let h=ye(U({x:0,y:0}));function w(M){let k=M.currentTarget.getBoundingClientRect();b(h,U({x:M.clientX-k.left,y:M.clientY-k.top})),console.log(a(h))}function u(M){b(h,U({x:0,y:0}))}function m(M){let k="";if(console.log(M),M.length===7){const P=parseInt(M.slice(1,3),16),F=parseInt(M.slice(3,5),16),Y=parseInt(M.slice(5,7),16);k=`invert(${P/255*100}%) sepia(${F/255*100}%) saturate(${Y/255*100}%) hue-rotate(${Math.atan2(Y-P,F-P)*180/Math.PI}deg)`}else k=M;return k}Be(()=>{document.documentElement.style.setProperty("--primary-color-filter",m(e().primary)),document.documentElement.style.setProperty("--secondary-color-filter",m(e().secondary))}),We(()=>{g()});var _=ct(),C=y(_),L=y(C),A=y(L);i(A,"src",`${Oe??""}/images/MyCartoonPhoto.png`);var j=c(A,2),B=c(y(j),2),D=c(y(B)),V=y(D),E=y(V,!0);x(V),x(D),x(B),xe(6),x(j),x(L),x(C);var se=c(C,4);Re(se,`flex w-full p-4 flex-col lg:flex-row from-neutral via-neutral to-accent bg-gradient-to-br on:enter=${w??""} on:leave=${u??""} svelte-1wivkx2`);var de=y(se);R(de,()=>a(h).x>0||a(h).y>0,M=>{var k=rt();S(()=>Ge(k,"transform",`translate(${a(h).x??""}px, ${a(h).y??""}px)`)),Ye(3,k,()=>Xe),z(M,k)});var ke=c(de,2);Fe(ke,17,()=>Ze,De,(M,k)=>{var P=lt(),F=y(P),Y=y(F);R(Y,()=>a(k).icon==="WebDevIcon",N=>{et(N,{size:"144px"})},N=>{var W=fe(),ie=we(W);R(ie,()=>a(k).icon==="IntegrationIcon",ne=>{ot(ne,{size:"196px"})},null,!0),z(N,W)}),x(F);var ae=c(F,2),oe=y(ae),Te=y(oe,!0);x(oe);var ve=c(oe,4),Ie=y(ve,!0);x(ve),x(ae);var he=c(ae,2),Me=y(he);R(Me,()=>a(k).icon==="DesignIcon",N=>{st(N,{size:"144px"})},N=>{var W=fe(),ie=we(W);R(ie,()=>a(k).icon==="TechConsultingIcon",ne=>{nt(ne,{size:"196px"})},null,!0),z(N,W)}),x(he),x(P),S(()=>{re(Te,a(k).title),re(Ie,a(k).description)}),z(M,P)}),x(se),xe(6),x(_),S(()=>re(E,a(f))),z(s,_),K()}export{xt as component};
