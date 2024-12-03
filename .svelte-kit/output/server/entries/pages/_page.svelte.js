import { S as fallback, a1 as store_get, a2 as unsubscribe_stores, W as bind_props, R as pop, P as push, Z as ensure_array_like, T as escape_html, $ as stringify, a3 as add_styles } from "../../chunks/index2.js";
import { a as attr, m as myThemeColors } from "../../chunks/themeUtils.js";
const myPhoto = "/wesley7104.github.io/_app/immutable/assets/MyCartoonPhoto.DV6-aHnP.png";
const services = [
  {
    title: "Web Development",
    description: "Having some familiarity with many different technologies I can help you determine project specifications by not being limited to any specific technology stack.",
    icon: "WebDevIcon"
  },
  {
    title: "Graphic Design",
    icon: "DesignIcon",
    description: "My extensive experience in graphic design allows me to offer these services, in conjunction with others, saving you time and money on your project."
  },
  {
    title: "Integrations",
    icon: "IntegrationIcon",
    description: "Need to discuss how to implement a technical solution? Wish something could connect to another software? There is most likely an integration for what you want. Let me research it and help you set it up."
  },
  {
    title: "Tech Consulting",
    icon: "TechConsultingIcon",
    description: "I can help you determine the best course of action for your project. I can also help you determine the best technology stack for your project."
  }
];
function WebDevIcon($$payload, $$props) {
  push();
  var $$store_subs;
  let primary, accent, neutral;
  let size = fallback($$props["size"], "100%");
  primary = store_get($$store_subs ??= {}, "$myThemeColors", myThemeColors).primary;
  store_get($$store_subs ??= {}, "$myThemeColors", myThemeColors).secondary;
  accent = store_get($$store_subs ??= {}, "$myThemeColors", myThemeColors).accent;
  neutral = store_get($$store_subs ??= {}, "$myThemeColors", myThemeColors).neutral;
  $$payload.out += `<svg${attr("width", size)}${attr("height", size)} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="svelte-otdjmf"><g class="code-brackets svelte-otdjmf"><path class="bracket-outline svelte-otdjmf" d="M25,20 L10,50 L25,80" fill="none"${attr("stroke", neutral)} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path class="bracketLeft svelte-otdjmf" d="M25,20 L10,50 L25,80" fill="none"${attr("stroke", accent)} stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path><path class="bracket-outline svelte-otdjmf" d="M75,20 L90,50 L75,80" fill="none"${attr("stroke", neutral)} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path class="bracketRight svelte-otdjmf" d="M75,20 L90,50 L75,80" fill="none"${attr("stroke", accent)} stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path><text class="svelte-text-shadow svelte-otdjmf" x="50" y="40"${attr("color", neutral)} text-anchor="middle" font-family="monospace" font-size="18">.code</text><text class="svelte-text-shadow svelte-otdjmf" x="50" y="55"${attr("color", neutral)} text-anchor="middle" font-family="monospace" font-size="18">.is</text><text class="svelte-text-shadow svelte-otdjmf" x="50" y="68"${attr("color", neutral)} text-anchor="middle" font-family="monospace" font-size="18">.cool</text><text class="svelte-text svelte-otdjmf" x="50" y="40"${attr("color", primary)} text-anchor="middle" font-family="monospace" font-weight="bold" font-size="18">.code</text><text class="svelte-text svelte-otdjmf" x="50" y="55"${attr("color", primary)} text-anchor="middle" font-family="monospace" font-weight="bold" font-size="18">.is</text><text class="svelte-text svelte-otdjmf" x="50" y="68"${attr("color", primary)} text-anchor="middle" font-family="monospace" font-weight="bold" font-size="18">.cool</text></g></svg>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { size });
  pop();
}
function DesignIcon($$payload, $$props) {
  push();
  var $$store_subs;
  let primary, secondary, accent;
  let size = fallback($$props["size"], "100%");
  primary = store_get($$store_subs ??= {}, "$myThemeColors", myThemeColors).primary;
  secondary = store_get($$store_subs ??= {}, "$myThemeColors", myThemeColors).secondary;
  accent = store_get($$store_subs ??= {}, "$myThemeColors", myThemeColors).accent;
  store_get($$store_subs ??= {}, "$myThemeColors", myThemeColors).neutral;
  $$payload.out += `<svg${attr("width", size)}${attr("height", size)} viewBox="0 0 100 100" class="svelte-s66xn9"><rect class="tablet svelte-s66xn9" x="5" y="10" width="90" height="70" rx="4" fill="none"${attr("stroke", primary)} stroke-width="6"></rect><clipPath id="screen-mask" class="svelte-s66xn9"><rect x="10" y="15" width="80" height="60" rx="2" class="svelte-s66xn9"></rect></clipPath><g clip-path="url(#screen-mask)" class="svelte-s66xn9"><path class="mountain svelte-s66xn9" d="M10,75 L30,35 L45,55 L60,25 L75,45 L90,75" fill="none"${attr("stroke", secondary)} stroke-width="4" stroke-linecap="round"></path><path class="cloud svelte-s66xn9" d="M20,30 C20,30 25,25 30,30 S40,30 40,30" fill="none"${attr("stroke", accent)} stroke-width="2" stroke-linecap="round"></path><path class="cloud svelte-s66xn9" d="M60,25 C60,25 65,20 70,25 S80,25 80,25" fill="none"${attr("stroke", accent)} stroke-width="2" stroke-linecap="round"></path></g><circle class="button svelte-s66xn9" cx="50" cy="80" r="3"${attr("fill", accent)}></circle></svg>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { size });
  pop();
}
function IntegrationIcon($$payload, $$props) {
  push();
  var $$store_subs;
  let primary, secondary, accent, neutral;
  let size = fallback($$props["size"], "100%");
  primary = store_get($$store_subs ??= {}, "$myThemeColors", myThemeColors).primary;
  secondary = store_get($$store_subs ??= {}, "$myThemeColors", myThemeColors).secondary;
  accent = store_get($$store_subs ??= {}, "$myThemeColors", myThemeColors).accent;
  neutral = store_get($$store_subs ??= {}, "$myThemeColors", myThemeColors).neutral;
  $$payload.out += `<svg${attr("width", size)}${attr("height", size)} viewBox="0 0 100 100" class="svelte-yvu9sd"><rect class="socket svelte-yvu9sd" x="60" y="30" width="35" height="40" rx="4" fill="none"${attr("stroke", primary)} stroke-width="4"></rect><rect class="socket-hole svelte-yvu9sd" x="70" y="40" width="15" height="6" rx="1"${attr("fill", neutral)}${attr("stroke", secondary)} stroke-width="2"></rect><rect class="socket-hole svelte-yvu9sd" x="70" y="54" width="15" height="6" rx="1"${attr("fill", neutral)}${attr("stroke", secondary)} stroke-width="2"></rect><g class="plug svelte-yvu9sd"><path d="M5,50 L20,50 L25,40 L45,40 L45,60 L25,60 L20,50" fill="none"${attr("stroke", accent)} stroke-width="4" stroke-linejoin="round" class="svelte-yvu9sd"></path><rect class="prong svelte-yvu9sd" x="47" y="40" width="13" height="6"${attr("fill", secondary)} stroke="" stroke-width="2"></rect><rect class="prong svelte-yvu9sd" x="47" y="54" width="13" height="6"${attr("fill", secondary)} stroke="" stroke-width="2"></rect><path class="cable svelte-yvu9sd" d="L45,60 L25,60 L20,50" fill="none"${attr("stroke", accent)} stroke-width="4" stroke-linecap="round"></path></g></svg>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { size });
  pop();
}
function TechConsultingIcon($$payload, $$props) {
  push();
  var $$store_subs;
  let primary, secondary, accent, neutral;
  let size = fallback($$props["size"], "100%");
  primary = store_get($$store_subs ??= {}, "$myThemeColors", myThemeColors).primary;
  secondary = store_get($$store_subs ??= {}, "$myThemeColors", myThemeColors).secondary;
  accent = store_get($$store_subs ??= {}, "$myThemeColors", myThemeColors).accent;
  neutral = store_get($$store_subs ??= {}, "$myThemeColors", myThemeColors).neutral;
  $$payload.out += `<svg${attr("width", size)}${attr("height", size)} viewBox="0 0 100 100" class="svelte-mfbfgm"><rect x="35" y="10" width="30" height="15" rx="7.5" fill="none"${attr("stroke", primary)} stroke-width="2" class="flowchart-element startNode svelte-mfbfgm"></rect><path d="M50,35 L65,45 L50,55 L35,45 Z" fill="none"${attr("stroke", accent)} stroke-width="2" class="flowchart-element decisionNode svelte-mfbfgm"></path><rect x="0" y="65" width="30" height="15" fill="none"${attr("stroke", neutral)} stroke-width="2" class="flowchart-element processNode svelte-mfbfgm"></rect><rect x="70" y="65" width="30" height="15" fill="none"${attr("stroke", neutral)} stroke-width="2" class="flowchart-element processNode svelte-mfbfgm"></rect><path d="M50,25 L50,35 M35,45 L15,45 L15,65 M65,45 L85,45 L85,65" fill="none"${attr("stroke", secondary)} stroke-width="2" class="connector svelte-mfbfgm"></path></svg>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { size });
  pop();
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let typedChars = "";
  let m = { x: 0, y: 0 };
  function mousemove(event) {
    let r = event.currentTarget.getBoundingClientRect();
    m = {
      x: event.clientX - r.left,
      y: event.clientY - r.top
    };
    console.log(m);
  }
  function mouseleave(event) {
    m = { x: 0, y: 0 };
  }
  getColorFilterValue(store_get($$store_subs ??= {}, "$myThemeColors", myThemeColors).primary);
  getColorFilterValue(store_get($$store_subs ??= {}, "$myThemeColors", myThemeColors).secondary);
  getColorFilterValue(store_get($$store_subs ??= {}, "$myThemeColors", myThemeColors).accent);
  function getColorFilterValue(hexColor) {
    let filterValue = "";
    console.log(hexColor);
    if (hexColor.length === 7) {
      const r = parseInt(hexColor.slice(1, 3), 16);
      const g = parseInt(hexColor.slice(3, 5), 16);
      const b = parseInt(hexColor.slice(5, 7), 16);
      filterValue = `invert(${r / 255 * 100}%) sepia(${g / 255 * 100}%) saturate(${b / 255 * 100}%) hue-rotate(${Math.atan2(b - r, g - r) * 180 / Math.PI}deg)`;
      console.log("converted filterValue: ", filterValue);
    } else {
      filterValue = hexColor;
      console.log("un-converted filterValue: ", filterValue);
    }
    return filterValue;
  }
  const each_array = ensure_array_like(services);
  $$payload.out += `<main class="bg-neutral"><div class="hero min-h-auto p-10 from-neutral via-neutral to-accent bg-gradient-to-tl"><div class="hero-content flex-col lg:flex-row"><img alt="Wesley's Professional Headshot"${attr("src", myPhoto)} class="max-w-sm rounded-full shadow-lg"> <div><h1 class="m-2 text-4xl font-bold text-neutral-content">My name is Wesley Randolph</h1> <p class="m-2 py-4 text-3xl font-bold text-neutral-content">I am a <span class="text-3xl font-black from-neutral to-neutral-content bg-gradient-to-r"><span class="text-5xl font-bold from-accent via-neutral to-primary bg-gradient-to-r bg-clip-text text-transparent">${escape_html(typedChars)}</span></span></p> <p class="m-2 pb-4 text-xl font-bold text-neutral-content">A man of many talents and yet a Master of none! 🤣</p> <button class="m-2 btn btn-accent shadow-md">See my work.</button> <button class="m-2 btn btn-primary shadow-md">Setup a Meeting!</button></div></div></div> <div class="divider divider-accent opacity-50 w-3/4 mx-auto"></div> <div${attr("class", `flex w-full p-4 flex-col lg:flex-row from-neutral via-neutral to-accent bg-gradient-to-br on:enter=${stringify(mousemove)} on:leave=${stringify(mouseleave)} svelte-1wivkx2`)}>`;
  if (m.x > 0 || m.y > 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${add_styles({
      transform: `translate(${stringify(m.x)}px, ${stringify(m.y)}px)`
    })} class="blob svelte-1wivkx2"></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let service = each_array[$$index];
    $$payload.out += `<div class="card m-3 p-0 bg-primary bg-opacity-35 rounded-box grid flex-grow place-items-center"><div class="card-header">`;
    if (service.icon === "WebDevIcon") {
      $$payload.out += "<!--[-->";
      WebDevIcon($$payload, { size: "144px" });
    } else {
      $$payload.out += "<!--[!-->";
      if (service.icon === "IntegrationIcon") {
        $$payload.out += "<!--[-->";
        IntegrationIcon($$payload, { size: "196px" });
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]-->`;
    }
    $$payload.out += `<!--]--></div> <div class="card-body"><h3 class="card-title text-3xl font-bold text-neutral-content">${escape_html(service.title)}</h3> <div class="divider divider-secondary w-1/2"></div> <p class="text-lg text-primary-content">${escape_html(service.description)}</p></div> <div class="card-footer">`;
    if (service.icon === "DesignIcon") {
      $$payload.out += "<!--[-->";
      DesignIcon($$payload, { size: "144px" });
    } else {
      $$payload.out += "<!--[!-->";
      if (service.icon === "TechConsultingIcon") {
        $$payload.out += "<!--[-->";
        TechConsultingIcon($$payload, { size: "196px" });
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]-->`;
    }
    $$payload.out += `<!--]--></div></div>`;
  }
  $$payload.out += `<!--]--></div> <div id="aboutMe" class="p-10 bg-secondary bg-opacity-75"><div class="divider divider-primary w-3/4 mx-auto"></div> <h2 class="text-3xl font-bold text-neutral-content text-center">About Me</h2> <p class="text-2xl text-neutral-content text-center">I am a Follower of Christ, a Husband to the love of my life, and a Father to two beautiful daughters.</p></div> <div class="divider-accent"></div> <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"><li><div class="timeline-middle"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg></div> <div class="timeline-start mb-10 md:text-end"><time class="font-mono italic">1984</time> <div class="text-lg font-black">First Macintosh computer</div> The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh
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
            iOS and other Apple products and services</div></li></ul></main>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
