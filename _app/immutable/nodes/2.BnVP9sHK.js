import{s as Y,a as M,n as Q,b as U,t as X,g as xe}from"../chunks/disclose-version.JPJau1tM.js";import{h as we,E as Pe,aG as Ee,aH as $e,av as Ne,j as Be,S as ge,a7 as Fe,ax as De,t as O,aI as We,aC as ke,ab as ye,ao as Oe,w as K,aJ as b,aK as Z,B as u,A as d,C as x,y as S,z as q,Y as y,m as n,aL as _,aB as be,g as Re,au as _e,x as Ie}from"../chunks/runtime.CYIjpc-U.js";import{b as Ke,s as re}from"../chunks/render.CrNv7e3O.js";import{i as R}from"../chunks/if.DI7Muprj.js";import{s as l,m as V,e as qe,i as He}from"../chunks/themeUtils.D5sd7YX7.js";import{p as B,b as J,o as Je}from"../chunks/index-client.Nwt4ouLU.js";import{b as Ge}from"../chunks/paths.u2L20H5-.js";import"../chunks/legacy.Psx7ZP39.js";import{i as ee}from"../chunks/lifecycle.BXFVg52X.js";function Ye(s,t){var a=s.__className,e=Qe(t);we&&s.className===e?s.__className=e:(a!==e||we&&s.className!==e)&&(t==null?s.removeAttribute("class"):s.className=e,s.__className=e)}function Qe(s){return s??""}function z(s,t,a,e){var i=s.__styles??(s.__styles={});i[t]!==a&&(i[t]=a,a==null?s.style.removeProperty(t):s.style.setProperty(t,a,""))}const Ue=()=>performance.now(),A={tick:s=>requestAnimationFrame(s),now:()=>Ue(),tasks:new Set};function Te(s){A.tasks.forEach(t=>{t.c(s)||(A.tasks.delete(t),t.f())}),A.tasks.size!==0&&A.tick(Te)}function Xe(s){let t;return A.tasks.size===0&&A.tick(Te),{promise:new Promise(a=>{A.tasks.add(t={c:s,f:a})}),abort(){A.tasks.delete(t)}}}function G(s,t){s.dispatchEvent(new CustomEvent(t))}function Ze(s){if(s==="float")return"cssFloat";if(s==="offset")return"cssOffset";if(s.startsWith("--"))return s;const t=s.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(a=>a[0].toUpperCase()+a.slice(1)).join("")}function Ce(s){const t={},a=s.split(";");for(const e of a){const[i,c]=e.split(":");if(!i||c===void 0)break;const r=Ze(i.trim());t[r]=c.trim()}return t}const Ve=s=>s;function et(s,t,a,e){var i=(s&We)!==0,c="both",r,m=t.inert,h,o;function v(){var p=Oe,I=ge;ke(null),ye(null);try{return r??(r=a()(t,(e==null?void 0:e())??{},{direction:c}))}finally{ke(p),ye(I)}}var g={is_global:i,in(){t.inert=m,G(t,"introstart"),h=ce(t,v(),o,1,()=>{G(t,"introend"),h==null||h.abort(),h=r=void 0})},out(p){t.inert=!0,G(t,"outrostart"),o=ce(t,v(),h,0,()=>{G(t,"outroend"),p==null||p()})},stop:()=>{h==null||h.abort(),o==null||o.abort()}},w=ge;if((w.transitions??(w.transitions=[])).push(g),Ke){var k=i;if(!k){for(var f=w.parent;f&&f.f&Pe;)for(;(f=f.parent)&&!(f.f&Ee););k=!f||(f.f&$e)!==0}k&&Ne(()=>{Be(()=>g.in())})}}function ce(s,t,a,e,i){var c=e===1;if(Fe(t)){var r,m=!1;return De(()=>{if(!m){var I=t({direction:c?"in":"out"});r=ce(s,I,a,e,i)}}),{abort:()=>{m=!0,r==null||r.abort()},deactivate:()=>r.deactivate(),reset:()=>r.reset(),t:()=>r.t()}}if(a==null||a.deactivate(),!(t!=null&&t.duration))return i(),{abort:O,deactivate:O,reset:O,t:()=>e};const{delay:h=0,css:o,tick:v,easing:g=Ve}=t;var w=[];if(c&&a===void 0&&(v&&v(0,1),o)){var k=Ce(o(0,1));w.push(k,k)}var f=()=>1-e,p=s.animate(w,{duration:h});return p.onfinish=()=>{var I=(a==null?void 0:a.t())??1-e;a==null||a.abort();var T=e-I,j=t.duration*Math.abs(T),P=[];if(j>0){if(o)for(var F=Math.ceil(j/16.666666666666668),E=0;E<=F;E+=1){var D=I+T*g(E/F),H=o(D,1-D);P.push(Ce(H))}f=()=>{var $=p.currentTime;return I+T*g($/j)},v&&Xe(()=>{if(p.playState!=="running")return!1;var $=f();return v($,1-$),!0})}p=s.animate(P,{duration:j,fill:"forwards"}),p.onfinish=()=>{f=()=>e,v==null||v(e,1-e),i()}},{abort:()=>{p&&(p.cancel(),p.effect=null,p.onfinish=O)},deactivate:()=>{i=O},reset:()=>{e===0&&(v==null||v(1,0))},t:()=>f()}}const tt=s=>s;function st(s,{delay:t=0,duration:a=400,easing:e=tt}={}){const i=+getComputedStyle(s).opacity;return{delay:t,duration:a,easing:e,css:c=>`opacity: ${c*i}`}}const at=[{title:"Web Development",description:"Having some familiarity with many different technologies I can help you determine project specifications by not being limited to any specific technology stack.",icon:"WebDevIcon"},{title:"Graphic Design",icon:"DesignIcon",description:"My extensive experience in graphic design allows me to offer these services, in conjunction with others, saving you time and money on your project."},{title:"Integrations",icon:"IntegrationIcon",description:"Need to discuss how to implement a technical solution? Wish something could connect to another software? There is most likely an integration for what you want. Let me research it and help you set it up."},{title:"Tech Consulting",icon:"TechConsultingIcon",description:"I can help you determine the best course of action for your project. I can also help you determine the best technology stack for your project."}];var nt=Q('<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="svelte-otdjmf"><g class="code-brackets svelte-otdjmf"><path class="bracket-outline svelte-otdjmf" d="M25,20 L10,50 L25,80" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path class="bracketLeft svelte-otdjmf" d="M25,20 L10,50 L25,80" fill="none" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path><path class="bracket-outline svelte-otdjmf" d="M75,20 L90,50 L75,80" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path class="bracketRight svelte-otdjmf" d="M75,20 L90,50 L75,80" fill="none" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path><text class="svelte-text-shadow svelte-otdjmf" x="50" y="40" text-anchor="middle" font-family="monospace" font-size="18">.code</text><text class="svelte-text-shadow svelte-otdjmf" x="50" y="55" text-anchor="middle" font-family="monospace" font-size="18">.is</text><text class="svelte-text-shadow svelte-otdjmf" x="50" y="68" text-anchor="middle" font-family="monospace" font-size="18">.cool</text><text class="svelte-text svelte-otdjmf" x="50" y="40" text-anchor="middle" font-family="monospace" font-weight="bold" font-size="18">.code</text><text class="svelte-text svelte-otdjmf" x="50" y="55" text-anchor="middle" font-family="monospace" font-weight="bold" font-size="18">.is</text><text class="svelte-text svelte-otdjmf" x="50" y="68" text-anchor="middle" font-family="monospace" font-weight="bold" font-size="18">.cool</text></g></svg>');function ot(s,t){K(t,!1);const a=Y(),e=()=>U(V,"$myThemeColors",a),i=_(),c=_(),r=_(),m=_();let h=B(t,"size",8,"100%");b(()=>e(),()=>{y(i,e().primary)}),b(()=>e(),()=>{y(c,e().secondary)}),b(()=>e(),()=>{y(r,e().accent)}),b(()=>e(),()=>{y(m,e().neutral)}),Z(),ee();var o=nt(),v=u(o),g=u(v),w=d(g),k=d(w),f=d(k),p=d(f),I=d(p),T=d(I),j=d(T),P=d(j),F=d(P);x(v),x(o),S(()=>{l(o,"width",h()),l(o,"height",h()),l(g,"stroke",n(m)),l(w,"stroke",n(r)),l(k,"stroke",n(m)),l(f,"stroke",n(r)),l(p,"color",n(m)),l(I,"color",n(m)),l(T,"color",n(m)),l(j,"color",n(i)),l(P,"color",n(i)),l(F,"color",n(i))}),M(s,o),q()}var it=Q('<svg viewBox="0 0 100 100" class="svelte-s66xn9"><rect class="tablet svelte-s66xn9" x="5" y="10" width="90" height="70" rx="4" fill="none" stroke-width="6"></rect><clipPath id="screen-mask" class="svelte-s66xn9"><rect x="10" y="15" width="80" height="60" rx="2" class="svelte-s66xn9"></rect></clipPath><g clip-path="url(#screen-mask)" class="svelte-s66xn9"><path class="mountain svelte-s66xn9" d="M10,75 L30,35 L45,55 L60,25 L75,45 L90,75" fill="none" stroke-width="4" stroke-linecap="round"></path><path class="cloud svelte-s66xn9" d="M20,30 C20,30 25,25 30,30 S40,30 40,30" fill="none" stroke-width="2" stroke-linecap="round"></path><path class="cloud svelte-s66xn9" d="M60,25 C60,25 65,20 70,25 S80,25 80,25" fill="none" stroke-width="2" stroke-linecap="round"></path></g><circle class="button svelte-s66xn9" cx="50" cy="80" r="3"></circle></svg>');function lt(s,t){K(t,!1);const a=Y(),e=()=>U(V,"$myThemeColors",a),i=_(),c=_(),r=_(),m=_();let h=B(t,"size",8,"100%");b(()=>e(),()=>{y(i,e().primary)}),b(()=>e(),()=>{y(c,e().secondary)}),b(()=>e(),()=>{y(r,e().accent)}),b(()=>e(),()=>{y(m,e().neutral)}),Z(),ee();var o=it(),v=u(o),g=d(v,2),w=u(g),k=d(w),f=d(k);x(g);var p=d(g);x(o),S(()=>{l(o,"width",h()),l(o,"height",h()),l(v,"stroke",n(i)),l(w,"stroke",n(c)),l(k,"stroke",n(r)),l(f,"stroke",n(r)),l(p,"fill",n(r))}),M(s,o),q()}var rt=Q('<svg viewBox="0 0 100 100" class="svelte-yvu9sd"><rect class="socket svelte-yvu9sd" x="60" y="30" width="35" height="40" rx="4" fill="none" stroke-width="4"></rect><rect class="socket-hole svelte-yvu9sd" x="70" y="40" width="15" height="6" rx="1" stroke-width="2"></rect><rect class="socket-hole svelte-yvu9sd" x="70" y="54" width="15" height="6" rx="1" stroke-width="2"></rect><g class="plug svelte-yvu9sd"><path d="M5,50 L20,50 L25,40 L45,40 L45,60 L25,60 L20,50" fill="none" stroke-width="4" stroke-linejoin="round" class="svelte-yvu9sd"></path><rect class="prong svelte-yvu9sd" x="47" y="40" width="13" height="6" stroke="" stroke-width="2"></rect><rect class="prong svelte-yvu9sd" x="47" y="54" width="13" height="6" stroke="" stroke-width="2"></rect><path class="cable svelte-yvu9sd" d="L45,60 L25,60 L20,50" fill="none" stroke-width="4" stroke-linecap="round"></path></g></svg>');function ct(s,t){K(t,!1);const a=Y(),e=()=>U(V,"$myThemeColors",a),i=_(),c=_(),r=_(),m=_();let h=B(t,"size",8,"100%");b(()=>e(),()=>{y(i,e().primary)}),b(()=>e(),()=>{y(c,e().secondary)}),b(()=>e(),()=>{y(r,e().accent)}),b(()=>e(),()=>{y(m,e().neutral)}),Z(),ee();var o=rt(),v=u(o),g=d(v),w=d(g),k=d(w),f=u(k),p=d(f),I=d(p),T=d(I);x(k),x(o),S(()=>{l(o,"width",h()),l(o,"height",h()),l(v,"stroke",n(i)),l(g,"fill",n(m)),l(g,"stroke",n(c)),l(w,"fill",n(m)),l(w,"stroke",n(c)),l(f,"stroke",n(r)),l(p,"fill",n(c)),l(I,"fill",n(c)),l(T,"stroke",n(r))}),M(s,o),q()}var dt=Q('<svg viewBox="0 0 100 100" class="svelte-mfbfgm"><rect x="35" y="10" width="30" height="15" rx="7.5" fill="none" stroke-width="2" class="flowchart-element startNode svelte-mfbfgm"></rect><path d="M50,35 L65,45 L50,55 L35,45 Z" fill="none" stroke-width="2" class="flowchart-element decisionNode svelte-mfbfgm"></path><rect x="0" y="65" width="30" height="15" fill="none" stroke-width="2" class="flowchart-element processNode svelte-mfbfgm"></rect><rect x="70" y="65" width="30" height="15" fill="none" stroke-width="2" class="flowchart-element processNode svelte-mfbfgm"></rect><path d="M50,25 L50,35 M35,45 L15,45 L15,65 M65,45 L85,45 L85,65" fill="none" stroke-width="2" class="connector svelte-mfbfgm"></path></svg>');function vt(s,t){K(t,!1);const a=Y(),e=()=>U(V,"$myThemeColors",a),i=_(),c=_(),r=_(),m=_();let h=B(t,"size",8,"100%");b(()=>e(),()=>{y(i,e().primary)}),b(()=>e(),()=>{y(c,e().secondary)}),b(()=>e(),()=>{y(r,e().accent)}),b(()=>e(),()=>{y(m,e().neutral)}),Z(),ee();var o=dt(),v=u(o),g=d(v),w=d(g),k=d(w),f=d(k);x(o),S(()=>{l(o,"width",h()),l(o,"height",h()),l(v,"stroke",n(i)),l(g,"stroke",n(r)),l(w,"stroke",n(m)),l(k,"stroke",n(m)),l(f,"stroke",n(c))}),M(s,o),q()}var ht=X('<div class="twinkle-container svelte-14by0jh"><div class="twinkle svelte-14by0jh"><div class="streaks svelte-14by0jh"></div> <div class="streaks rotated svelte-14by0jh"></div></div> <div class="twinkle secondary svelte-14by0jh"></div></div>');function mt(s,t){let a=B(t,"size",8,"100%"),e=B(t,"color",8,"white"),i=B(t,"duration",8,1500);var c=ht(),r=u(c),m=u(r),h=d(m,2);x(r);var o=d(r,2);x(c),S(()=>{z(c,"width",a()),z(c,"height",a()),z(r,"background",`radial-gradient(circle, ${e()} 0%, transparent 80%)`),z(r,"animation-duration",`${i()??""}ms`),z(m,"background-color",e()),z(h,"background-color",e()),z(o,"background",`radial-gradient(circle, ${e()} 0%, transparent 80%)`),z(o,"animation-duration",`${i()??""}ms`)}),M(s,c)}var pt=X('<div class="blob svelte-15vw5kx"></div>'),ft=X('<div class="card m-3 p-0 bg-primary bg-opacity-35 rounded-box grid flex-grow place-items-center svelte-15vw5kx"><div class="card-header svelte-15vw5kx"><!></div> <div class="card-body svelte-15vw5kx"><h3 class="card-title text-3xl font-bold text-neutral-content svelte-15vw5kx"> <!></h3> <div class="divider divider-secondary w-1/2 svelte-15vw5kx"></div> <p class="text-lg text-primary-content svelte-15vw5kx"> </p></div> <div class="card-footer svelte-15vw5kx"><!></div></div>'),ut=X(`<main class="bg-neutral svelte-15vw5kx"><div class="hero min-h-auto p-10 from-neutral via-neutral to-accent bg-gradient-to-tl svelte-15vw5kx"><div class="hero-content flex-col lg:flex-row svelte-15vw5kx"><div class="relative coin-container svelte-15vw5kx"><div class="coin svelte-15vw5kx"></div></div> <div class="svelte-15vw5kx"><h1 class="m-2 text-4xl font-bold text-neutral-content svelte-15vw5kx">My name is Wesley Randolph</h1> <p class="m-2 py-4 text-3xl font-bold text-neutral-content svelte-15vw5kx">I am a <span class="text-3xl font-black from-neutral to-neutral-content bg-gradient-to-r svelte-15vw5kx"><span class="text-5xl font-bold from-accent via-neutral to-primary bg-gradient-to-r bg-clip-text text-transparent svelte-15vw5kx"> </span></span></p> <p class="m-2 pb-4 text-xl font-bold text-neutral-content svelte-15vw5kx">A man of many talents and yet a Master of none! 🤣</p> <button class="m-2 btn btn-accent shadow-md svelte-15vw5kx">See my work.</button> <button class="m-2 btn btn-primary shadow-md svelte-15vw5kx">Setup a Meeting!</button></div></div></div> <div class="divider divider-accent opacity-50 w-3/4 mx-auto svelte-15vw5kx"></div> <div><!> <!></div> <div id="aboutMe" class="p-10 bg-secondary bg-opacity-10 svelte-15vw5kx"><div class="divider divider-primary w-3/4 mx-auto svelte-15vw5kx"></div> <h2 class="text-5xl font-bold text-neutral-content text-center m-4 svelte-15vw5kx">About Me</h2> <p class="text-2xl text-neutral-content text-center svelte-15vw5kx">I am a Follower of Christ, a Husband to the love of my life, and a Father to two beautiful daughters.</p> <div class="divider divider-accent w-3/4 mx-auto svelte-15vw5kx"></div> <p class="text-2xl text-neutral-content text-center lg:px-20 svelte-15vw5kx">I am a mostly self taught developer who really enjoys researching new technologies and building new things. My wife and I are now both self employed in our own business <a href="https://kickinandscreenin.com" class="bg-neutral/70 text-accent px-2 rounded-md svelte-15vw5kx" target="_blank">Kickin &amp; Screenin</a>, Misty has been since 2014. I on the other hand just recently took the leap and left my full-time career of over 10 years with and International scale company as a Field Service Rep/ Software Developer. We are both excited for the future as we have been constantly adding to new products to our own eCommerce store and exploring our creative side by launching new products in our newest endeavor <a href="https://hunnybabe.com" class="bg-neutral/70 text-accent px-2 rounded-md svelte-15vw5kx" target="_blank">Hunny &amp; Babe Company</a>.&nbsp;<br class="svelte-15vw5kx"><br class="svelte-15vw5kx">I do have an Associates degree in Computer Information Systems from a two year college, and am only lacking one semester to complete my Bachelors degree. What I found is that I was spending so much time in school and on my full-time job that I couldn't work on projects and the things I wanted to learn...</p> <span class="flex justify-center items-center from-primary via-neutral to-accent bg-gradient-to-r m-4 rounded-md svelte-15vw5kx"><h3 class="text-5xl text-center font-bold text-neutral-content m-4 svelte-15vw5kx">So I Quit!</h3></span> <p class="text-2xl text-neutral-content text-center lg:px-20 svelte-15vw5kx">I have honestly never been happier! I am proud to say I have accomplished so much in such a short amount of time that I am now questioning why I didn't take the leap several years ago. Which, was the original plan when we purchased an inflatable rental company named <a href="https://www.justaddkidzrentals.com" class="bg-neutral/70 text-accent px-2 rounded-md svelte-15vw5kx" target="_blank">Just Add Kidz</a> from a friend who had been in the business for 15 years. In retrospect what I believe happened was the comfort and financial security of my full-time job at <a href="https://www.mt.com" class="bg-neutral/70 text-accent px-2 rounded-md svelte-15vw5kx" target="_blank">Mettler Toledo Inc</a>. made me question why I would leave in the first place. Even knowing this, it wasn't what I wanted to do with my life, I just felt unfulfilled knowing that I wanted to work for our businesses full-time.&nbsp;</p> <p class="text-2xl text-neutral-content text-center lg:px-20 svelte-15vw5kx">At this point my wife pointed out the fact that over the 6 years we have owned and operated <a href="https://kickinandscreenin.com" class="bg-neutral/70 text-accent px-2 rounded-md svelte-15vw5kx" target="_blank">Kickin &amp; Screenin</a>&nbsp;as a hobby, instead of a business, we had set ourselves up for me to make my exit. And that's what I did. I quit my full-time position at the scale company and we got to work!</p></div> <div class="divider-accent w-3/4 mx-auto svelte-15vw5kx"></div> <div id="projects" class="p-10 bg-primary/25 bg-opacity-50 svelte-15vw5kx"><ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical svelte-15vw5kx"><li class="svelte-15vw5kx"><div class="timeline-middle svelte-15vw5kx"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 svelte-15vw5kx"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" class="svelte-15vw5kx"></path></svg></div> <div class="timeline-start mb-10 md:text-end svelte-15vw5kx"><time class="font-mono italic svelte-15vw5kx">1984</time> <div class="text-lg font-black svelte-15vw5kx">First Macintosh computer</div> The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh
                personal computer. It played a pivotal role in establishing desktop publishing as a general
                office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed
                in a beige case with integrated carrying handle; it came with a keyboard and single-button
                mouse.</div> <hr class="svelte-15vw5kx"></li> <li class="svelte-15vw5kx"><hr class="svelte-15vw5kx"> <div class="timeline-middle svelte-15vw5kx"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 svelte-15vw5kx"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" class="svelte-15vw5kx"></path></svg></div> <div class="timeline-end mb-10 svelte-15vw5kx"><time class="font-mono italic svelte-15vw5kx">1998</time> <div class="text-lg font-black svelte-15vw5kx">iMac</div> iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has
                been the primary part of Apple's consumer desktop offerings since its debut in August 1998,
                and has evolved through seven distinct forms</div> <hr class="svelte-15vw5kx"></li> <li class="svelte-15vw5kx"><hr class="svelte-15vw5kx"> <div class="timeline-middle svelte-15vw5kx"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 svelte-15vw5kx"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" class="svelte-15vw5kx"></path></svg></div> <div class="timeline-start mb-10 md:text-end svelte-15vw5kx"><time class="font-mono italic svelte-15vw5kx">2001</time> <div class="text-lg font-black svelte-15vw5kx">iPod</div> The iPod is a discontinued series of portable media players and multi-purpose mobile devices
                designed and marketed by Apple Inc. The first version was released on October 23, 2001, about
                8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450
                million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At
                over 20 years, the iPod brand is the oldest to be discontinued by Apple</div> <hr class="svelte-15vw5kx"></li> <li class="svelte-15vw5kx"><hr class="svelte-15vw5kx"> <div class="timeline-middle svelte-15vw5kx"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 svelte-15vw5kx"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" class="svelte-15vw5kx"></path></svg></div> <div class="timeline-end mb-10 svelte-15vw5kx"><time class="font-mono italic svelte-15vw5kx">2007</time> <div class="text-lg font-black svelte-15vw5kx">iPhone</div> iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile
                operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on
                January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As
                of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone
                accounts for 15.6% of global smartphone market share</div> <hr class="svelte-15vw5kx"></li> <li class="svelte-15vw5kx"><hr class="svelte-15vw5kx"> <div class="timeline-middle svelte-15vw5kx"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 svelte-15vw5kx"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" class="svelte-15vw5kx"></path></svg></div> <div class="timeline-start mb-10 md:text-end svelte-15vw5kx"><time class="font-mono italic svelte-15vw5kx">2015</time> <div class="text-lg font-black svelte-15vw5kx">Apple Watch</div> The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness
                tracking, health-oriented capabilities, and wireless telecommunication, and integrates with
                iOS and other Apple products and services</div></li></ul></div></main>`);function Tt(s,t){K(t,!0);let a=["Christian","Father","Husband","Developer","Integrator","Designer","Tech Consultant","Day Trader"],e=0,i=0,c=be("");const r=200,m=100,h=()=>{i>0?(y(c,J(n(c).slice(0,-1))),i-=1,setTimeout(h,m)):(e=(e+1)%a.length,i=0,o())},o=()=>{i<a[e].length?(y(c,n(c)+a[e][i]),i+=1,setTimeout(o,r)):setTimeout(h,m)};let v=be(J({x:0,y:0}));function g(L){let C=L.currentTarget.getBoundingClientRect();y(v,J({x:L.clientX-C.left,y:L.clientY-C.top})),console.log(n(v))}function w(L){y(v,J({x:0,y:0}))}let k=`url(${Ge}/images/MyCartoonPhoto.png)`,f="#be9d66",p="#896c3b",I="#120e08",T="#111",j="250px",P="3s",F="1rem";Re(()=>{document.documentElement.style.setProperty("--coin-face",k),document.documentElement.style.setProperty("--face",f),document.documentElement.style.setProperty("--side",p),document.documentElement.style.setProperty("--side-dark",I),document.documentElement.style.setProperty("--lowlight",T),document.documentElement.style.setProperty("--coin-size",j),document.documentElement.style.setProperty("--coin-speed",P),document.documentElement.style.setProperty("--coin-thickness",F)}),Je(()=>{o()});var E=ut(),D=u(E),H=u(D),$=d(u(H),2),de=d(u($),2),ve=d(u(de)),he=u(ve),Me=u(he,!0);x(he),x(ve),x(de),_e(6),x($),x(H),x(D);var te=d(D,4);Ye(te,`flex w-full p-4 flex-col lg:flex-row from-neutral via-neutral to-accent bg-gradient-to-br on:enter=${g??""} on:leave=${w??""} svelte-15vw5kx`);var me=u(te);R(me,()=>n(v).x>0||n(v).y>0,L=>{var C=pt();S(()=>z(C,"transform",`translate(${n(v).x??""}px, ${n(v).y??""}px)`)),et(3,C,()=>st),M(L,C)});var je=d(me,2);qe(je,17,()=>at,He,(L,C)=>{var se=ft(),ae=u(se),ze=u(ae);R(ze,()=>n(C).icon==="WebDevIcon",N=>{ot(N,{size:"196px"})},N=>{var W=xe(),ie=Ie(W);R(ie,()=>n(C).icon==="IntegrationIcon",le=>{ct(le,{size:"196px"})},null,!0),M(N,W)}),x(ae);var ne=d(ae,2),oe=u(ne),pe=u(oe,!0),Le=d(pe);mt(Le,{size:"100%",color:"rgba(255,255,255,0.8)",duration:1200}),x(oe);var fe=d(oe,4),Ae=u(fe,!0);x(fe),x(ne);var ue=d(ne,2),Se=u(ue);R(Se,()=>n(C).icon==="DesignIcon",N=>{lt(N,{size:"144px"})},N=>{var W=xe(),ie=Ie(W);R(ie,()=>n(C).icon==="TechConsultingIcon",le=>{vt(le,{size:"196px"})},null,!0),M(N,W)}),x(ue),x(se),S(()=>{re(pe,n(C).title),re(Ae,n(C).description)}),M(L,se)}),x(te),_e(6),x(E),S(()=>re(Me,n(c))),M(s,E),q()}export{Tt as component};