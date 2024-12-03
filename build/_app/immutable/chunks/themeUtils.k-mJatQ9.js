import{b as K,h as v,c as P,ah as U,a8 as O,H as X,d as T,s as I,e as B,f as F,ai as _,r as S,a as V,p as $,x as M,aj as z,ak as J,a7 as Q,al as W,am as Z,a4 as j,an as ee,A as re,ac as N,ao as ae,ap as ne,aq as ce,a0 as oe,ar as te,ag as R,as as se}from"./runtime.xYmJmHuE.js";import{t as le}from"./themes.W-2tcmvw.js";import{w as ie}from"./index.Iz4m9yUR.js";function ve(a,e){return e}function de(a,e,r,o){for(var l=[],i=e.length,d=0;d<i;d++)J(e[d].e,l,!0);var b=i>0&&l.length===0&&r!==null;if(b){var f=r.parentNode;Q(f),f.append(r),o.clear(),g(a,e[0].prev,e[i-1].next)}W(l,()=>{for(var m=0;m<i;m++){var n=e[m];b||(o.delete(n.k),g(a,n.prev,n.next)),Z(n.e,!b)}})}function Ae(a,e,r,o,l,i=null){var d=a,b={flags:e,items:new Map,first:null};v&&P();var f=null,m=!1;K(()=>{var n=r(),u=U(n)?n:n==null?[]:O(n),c=u.length;if(m&&c===0)return;m=c===0;let t=!1;if(v){var y=d.data===X;y!==(c===0)&&(d=T(),I(d),B(!1),t=!0)}if(v){for(var E=null,k,s=0;s<c;s++){if(F.nodeType===8&&F.data===j){d=F,t=!0,B(!1);break}var h=u[s],w=o(h,s);k=Y(F,b,E,null,h,w,s,l,e),b.items.set(w,k),E=k}c>0&&I(T())}if(!v){var A=ee;fe(u,b,d,l,e,(A.f&_)!==0,o)}i!==null&&(c===0?f?S(f):f=V(()=>i(d)):f!==null&&$(f,()=>{f=null})),t&&B(!0),r()}),v&&(d=F)}function fe(a,e,r,o,l,i,d){var b=a.length,f=e.items,m=e.first,n=m,u,c=null,t=[],y=[],E,k,s,h;for(h=0;h<b;h+=1){if(E=a[h],k=d(E,h),s=f.get(k),s===void 0){var w=n?n.e.nodes_start:r;c=Y(w,e,c,c===null?e.first:c.next,E,k,h,o,l),f.set(k,c),t=[],y=[],n=c.next;continue}if(ue(s,E,h),s.e.f&_&&S(s.e),s!==n){if(u!==void 0&&u.has(s)){if(t.length<y.length){var A=y[0],p;c=A.prev;var x=t[0],D=t[t.length-1];for(p=0;p<t.length;p+=1)H(t[p],A,r);for(p=0;p<y.length;p+=1)u.delete(y[p]);g(e,x.prev,D.next),g(e,c,x),g(e,D,A),n=A,c=D,h-=1,t=[],y=[]}else u.delete(s),H(s,n,r),g(e,s.prev,s.next),g(e,s,c===null?e.first:c.next),g(e,c,s),c=s;continue}for(t=[],y=[];n!==null&&n.k!==k;)(i||!(n.e.f&_))&&(u??(u=new Set)).add(n),y.push(n),n=n.next;if(n===null)continue;s=n}t.push(s),c=s,n=s.next}if(n!==null||u!==void 0){for(var C=u===void 0?[]:O(u);n!==null;)(i||!(n.e.f&_))&&C.push(n),n=n.next;var q=C.length;if(q>0){var G=null;de(e,C,G,f)}}M.first=e.first&&e.first.e,M.last=c&&c.e}function ue(a,e,r,o){z(a.v,e),a.i=r}function Y(a,e,r,o,l,i,d,b,f){var m=(f&ne)!==0,n=(f&ce)===0,u=m?n?re(l):N(l):l,c=f&ae?N(d):d,t={i:c,v:u,k:i,a:null,e:null,prev:r,next:o};try{return t.e=V(()=>b(a,u,c),v),t.e.prev=r&&r.e,t.e.next=o&&o.e,r===null?e.first=t:(r.next=t,r.e.next=t.e),o!==null&&(o.prev=t,o.e.prev=t.e),t}finally{}}function H(a,e,r){for(var o=a.next?a.next.e.nodes_start:r,l=e?e.e.nodes_start:r,i=a.e.nodes_start;i!==o;){var d=oe(i);l.before(i),i=d}}function g(a,e,r){e===null?a.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function Fe(a,e,r,o){var l=a.__attributes??(a.__attributes={});v&&(l[e]=a.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&a.nodeName==="LINK")||l[e]!==(l[e]=r)&&(e==="style"&&"__styles"in a&&(a.__styles={}),e==="loading"&&(a[te]=r),r==null?a.removeAttribute(e):typeof r!="string"&&be(a).includes(e)?a[e]=r:a.setAttribute(e,r))}var L=new Map;function be(a){var e=L.get(a.nodeName);if(e)return e;L.set(a.nodeName,e=[]);for(var r,o=R(a),l=Element.prototype;l!==o;){r=se(o);for(var i in r)r[i].set&&e.push(i);o=R(o)}return e}function he(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var me={aqua:{"color-scheme":"dark",primary:"#09ecf3","primary-content":"#005355",secondary:"#966fb3",accent:"#ffe999",neutral:"#3b8ac4","base-100":"#345da7",info:"#2563eb",success:"#16a34a",warning:"#d97706",error:"oklch(73.95% 0.19 27.33)"},black:{"color-scheme":"dark",primary:"#373737",secondary:"#373737",accent:"#373737","base-100":"#000000","base-200":"#141414","base-300":"#262626","base-content":"#d6d6d6",neutral:"#373737",info:"#0000ff",success:"#008000",warning:"#ffff00",error:"#ff0000","--rounded-box":"0","--rounded-btn":"0","--rounded-badge":"0","--animation-btn":"0","--animation-input":"0","--btn-focus-scale":"1","--tab-radius":"0"},bumblebee:{"color-scheme":"light",primary:"oklch(89.51% 0.2132 96.61)","primary-content":"oklch(38.92% 0.046 96.61)",secondary:"oklch(80.39% 0.194 70.76)","secondary-content":"oklch(39.38% 0.068 70.76)",accent:"oklch(81.27% 0.157 56.52)",neutral:"oklch(12.75% 0.075 281.99)","base-100":"oklch(100% 0 0)"},cmyk:{"color-scheme":"light",primary:"#45AEEE",secondary:"#E8488A",accent:"#FFF232",neutral:"#1a1a1a","base-100":"oklch(100% 0 0)",info:"#4AA8C0",success:"#823290",warning:"#EE8133",error:"#E93F33"},corporate:{"color-scheme":"light",primary:"oklch(60.39% 0.228 269.1)",secondary:"#7b92b2",accent:"#67cba0",neutral:"#181a2a","neutral-content":"#edf2f7","base-100":"oklch(100% 0 0)","base-content":"#181a2a","--rounded-box":"0.25rem","--rounded-btn":".125rem","--rounded-badge":".125rem","--tab-radius":"0.25rem","--animation-btn":"0","--animation-input":"0","--btn-focus-scale":"1"},cupcake:{"color-scheme":"light",primary:"#65c3c8",secondary:"#ef9fbc",accent:"#eeaf3a",neutral:"#291334","base-100":"#faf7f5","base-200":"#efeae6","base-300":"#e7e2df","base-content":"#291334","--rounded-btn":"1.9rem","--tab-border":"2px","--tab-radius":"0.7rem"},cyberpunk:{"color-scheme":"light",fontFamily:"ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",primary:"oklch(74.22% 0.209 6.35)",secondary:"oklch(83.33% 0.184 204.72)",accent:"oklch(71.86% 0.2176 310.43)",neutral:"oklch(23.04% 0.065 269.31)","neutral-content":"oklch(94.51% 0.179 104.32)","base-100":"oklch(94.51% 0.179 104.32)","--rounded-box":"0","--rounded-btn":"0","--rounded-badge":"0","--tab-radius":"0"},dark:{"color-scheme":"dark",primary:"oklch(65.69% 0.196 275.75)",secondary:"oklch(74.8% 0.26 342.55)",accent:"oklch(74.51% 0.167 183.61)",neutral:"#2a323c","neutral-content":"#A6ADBB","base-100":"#1d232a","base-200":"#191e24","base-300":"#15191e","base-content":"#A6ADBB"},dracula:{"color-scheme":"dark",primary:"#ff79c6",secondary:"#bd93f9",accent:"#ffb86c",neutral:"#414558","base-100":"#282a36","base-content":"#f8f8f2",info:"#8be9fd",success:"#50fa7b",warning:"#f1fa8c",error:"#ff5555"},emerald:{"color-scheme":"light",primary:"#66cc8a","primary-content":"#223D30",secondary:"#377cfb","secondary-content":"#fff",accent:"#f68067","accent-content":"#000",neutral:"#333c4d","neutral-content":"#f9fafb","base-100":"oklch(100% 0 0)","base-content":"#333c4d","--animation-btn":"0","--animation-input":"0","--btn-focus-scale":"1"},fantasy:{"color-scheme":"light",primary:"oklch(37.45% 0.189 325.02)",secondary:"oklch(53.92% 0.162 241.36)",accent:"oklch(75.98% 0.204 56.72)",neutral:"#1f2937","base-100":"oklch(100% 0 0)","base-content":"#1f2937"},forest:{"color-scheme":"dark",primary:"#1eb854","primary-content":"#000000",secondary:"#1DB88E",accent:"#1DB8AB",neutral:"#19362D","base-100":"#171212","--rounded-btn":"1.9rem"},garden:{"color-scheme":"light",primary:"oklch(62.45% 0.278 3.8363600743192197)","primary-content":"#fff",secondary:"#8E4162",accent:"#5c7f67",neutral:"#291E00","neutral-content":"#e9e7e7","base-100":"#e9e7e7","base-content":"#100f0f"},halloween:{"color-scheme":"dark",primary:"oklch(77.48% 0.204 60.62)","primary-content":"#131616",secondary:"oklch(45.98% 0.248 305.03)",accent:"oklch(64.8% 0.223 136.07347934356451)","accent-content":"#000000",neutral:"#2F1B05","base-100":"#212121",info:"#2563eb",success:"#16a34a",warning:"#d97706",error:"oklch(65.72% 0.199 27.33)"},light:{"color-scheme":"light",primary:"oklch(49.12% 0.3096 275.75)",secondary:"oklch(69.71% 0.329 342.55)","secondary-content":"oklch(98.71% 0.0106 342.55)",accent:"oklch(76.76% 0.184 183.61)",neutral:"#2B3440","neutral-content":"#D7DDE4","base-100":"oklch(100% 0 0)","base-200":"#F2F2F2","base-300":"#E5E6E6","base-content":"#1f2937"},lofi:{"color-scheme":"light",primary:"#0D0D0D","primary-content":"oklch(100% 0 0)",secondary:"#1A1919","secondary-content":"oklch(100% 0 0)",accent:"#262626","accent-content":"oklch(100% 0 0)",neutral:"#000000","neutral-content":"oklch(100% 0 0)","base-100":"oklch(100% 0 0)","base-200":"#F2F2F2","base-300":"#E6E5E5","base-content":"#000000",info:"oklch(79.54% 0.103 205.9)",success:"oklch(90.13% 0.153 164.14)",warning:"oklch(88.37% 0.135 79.94)",error:"oklch(78.66% 0.15 28.47)","--rounded-box":"0.25rem","--rounded-btn":"0.125rem","--rounded-badge":"0.125rem","--tab-radius":"0.125rem","--animation-btn":"0","--animation-input":"0","--btn-focus-scale":"1"},luxury:{"color-scheme":"dark",primary:"oklch(100% 0 0)",secondary:"#152747",accent:"#513448",neutral:"#331800","neutral-content":"#FFE7A3","base-100":"#09090b","base-200":"#171618","base-300":"#2e2d2f","base-content":"#dca54c",info:"#66c6ff",success:"#87d039",warning:"#e2d562",error:"#ff6f6f"},pastel:{"color-scheme":"light",primary:"#d1c1d7",secondary:"#f6cbd1",accent:"#b4e9d6",neutral:"#70acc7","base-100":"oklch(100% 0 0)","base-200":"#f9fafb","base-300":"#d1d5db","--rounded-btn":"1.9rem","--tab-radius":"0.7rem"},retro:{"color-scheme":"light",primary:"#ef9995","primary-content":"#282425",secondary:"#a4cbb4","secondary-content":"#282425",accent:"#DC8850","accent-content":"#282425",neutral:"#2E282A","neutral-content":"#EDE6D4","base-100":"#ece3ca","base-200":"#e4d8b4","base-300":"#DBCA9A","base-content":"#282425",info:"#2563eb",success:"#16a34a",warning:"#d97706",error:"oklch(65.72% 0.199 27.33)","--rounded-box":"0.4rem","--rounded-btn":"0.4rem","--rounded-badge":"0.4rem","--tab-radius":"0.4rem"},synthwave:{"color-scheme":"dark",primary:"#e779c1",secondary:"#58c7f3",accent:"oklch(88.04% 0.206 93.72)",neutral:"#221551","neutral-content":"#f9f7fd","base-100":"#1a103d","base-content":"#f9f7fd",info:"#53c0f3","info-content":"#201047",success:"#71ead2","success-content":"#201047",warning:"#eace6c","warning-content":"#201047",error:"#ec8c78","error-content":"#201047"},valentine:{"color-scheme":"light",primary:"#e96d7b",secondary:"#a991f7",accent:"#66b1b3",neutral:"#af4670","neutral-content":"#f0d6e8","base-100":"#fae7f4","base-content":"#632c3b",info:"#2563eb",success:"#16a34a",warning:"#d97706",error:"oklch(73.07% 0.207 27.33)","--rounded-btn":"1.9rem","--tab-radius":"0.7rem"},wireframe:{"color-scheme":"light",fontFamily:"Chalkboard,comic sans ms,'sans-serif'",primary:"#b8b8b8",secondary:"#b8b8b8",accent:"#b8b8b8",neutral:"#ebebeb","base-100":"oklch(100% 0 0)","base-200":"#eeeeee","base-300":"#dddddd",info:"#0000ff",success:"#008000",warning:"#a6a659",error:"#ff0000","--rounded-box":"0.2rem","--rounded-btn":"0.2rem","--rounded-badge":"0.2rem","--tab-radius":"0.2rem"},autumn:{"color-scheme":"light",primary:"#8C0327",secondary:"#D85251",accent:"#D59B6A",neutral:"#826A5C","base-100":"#f1f1f1",info:"#42ADBB",success:"#499380",warning:"#E97F14",error:"oklch(53.07% 0.241 24.16)"},business:{"color-scheme":"dark",primary:"#1C4E80",secondary:"#7C909A",accent:"#EA6947",neutral:"#23282E","base-100":"#202020",info:"#0091D5",success:"#6BB187",warning:"#DBAE59",error:"#AC3E31","--rounded-box":"0.25rem","--rounded-btn":".125rem","--rounded-badge":".125rem"},acid:{"color-scheme":"light",primary:"oklch(71.9% 0.357 330.7595734057481)",secondary:"oklch(73.37% 0.224 48.25087840015526)",accent:"oklch(92.78% 0.264 122.96295065960891)",neutral:"oklch(21.31% 0.128 278.68)","base-100":"#fafafa",info:"oklch(60.72% 0.227 252.05)",success:"oklch(85.72% 0.266 158.53)",warning:"oklch(91.01% 0.212 100.5)",error:"oklch(64.84% 0.293 29.34918758658804)","--rounded-box":"1.25rem","--rounded-btn":"1rem","--rounded-badge":"1rem","--tab-radius":"0.7rem"},lemonade:{"color-scheme":"light",primary:"oklch(58.92% 0.199 134.6)",secondary:"oklch(77.75% 0.196 111.09)",accent:"oklch(85.39% 0.201 100.73)",neutral:"oklch(30.98% 0.075 108.6)","base-100":"oklch(98.71% 0.02 123.72)",info:"oklch(86.19% 0.047 224.14)",success:"oklch(86.19% 0.047 157.85)",warning:"oklch(86.19% 0.047 102.15)",error:"oklch(86.19% 0.047 25.85)"},night:{"color-scheme":"dark",primary:"#38bdf8",secondary:"#818CF8",accent:"#F471B5",neutral:"#1E293B","base-100":"#0F172A",info:"#0CA5E9","info-content":"#000000",success:"#2DD4BF",warning:"#F4BF50",error:"#FB7085"},coffee:{"color-scheme":"dark",primary:"#DB924B",secondary:"#263E3F",accent:"#10576D",neutral:"#120C12","base-100":"#20161F","base-content":"#c59f60",info:"#8DCAC1",success:"#9DB787",warning:"#FFD25F",error:"#FC9581"},winter:{"color-scheme":"light",primary:"oklch(56.86% 0.255 257.57)",secondary:"#463AA2",accent:"#C148AC",neutral:"#021431","base-100":"oklch(100% 0 0)","base-200":"#F2F7FF","base-300":"#E3E9F4","base-content":"#394E6A",info:"#93E7FB",success:"#81CFD1",warning:"#EFD7BB",error:"#E58B8B"},dim:{"color-scheme":"dark",primary:"#9FE88D",secondary:"#FF7D5C",accent:"#C792E9",neutral:"#1c212b","neutral-content":"#B2CCD6","base-100":"#2A303C","base-200":"#242933","base-300":"#20252E","base-content":"#B2CCD6",info:"#28ebff",success:"#62efbd",warning:"#efd057",error:"#ffae9b"},nord:{"color-scheme":"light",primary:"#5E81AC",secondary:"#81A1C1",accent:"#88C0D0",neutral:"#4C566A","neutral-content":"#D8DEE9","base-100":"#ECEFF4","base-200":"#E5E9F0","base-300":"#D8DEE9","base-content":"#2E3440",info:"#B48EAD",success:"#A3BE8C",warning:"#EBCB8B",error:"#BF616A","--rounded-box":"0.4rem","--rounded-btn":"0.2rem","--rounded-badge":"0.4rem","--tab-radius":"0.2rem"},sunset:{"color-scheme":"dark",primary:"#FF865B",secondary:"#FD6F9C",accent:"#B387FA",neutral:"oklch(26% 0.019 237.69)","neutral-content":"oklch(70% 0.019 237.69)","base-100":"oklch(22% 0.019 237.69)","base-200":"oklch(20% 0.019 237.69)","base-300":"oklch(18% 0.019 237.69)","base-content":"#9fb9d0",info:"#89e0eb",success:"#addfad",warning:"#f1c891",error:"#ffbbbd","--rounded-box":"1.2rem","--rounded-btn":"0.8rem","--rounded-badge":"0.4rem","--tab-radius":"0.7rem"}};const ye=he(me),ke=ie({theme:"",primary:"",secondary:"",accent:"",neutral:"",success:"",warning:"",error:"",info:""});function we(){if(typeof window<"u"){const a=window.localStorage.getItem("theme");if(a&&le.includes(a))return document.documentElement.setAttribute("data-theme",a),a}else return"business"}function _e(a){let r=ye[a];if(r){const o={theme:a,primary:r.primary||"",secondary:r.secondary||"",accent:r.accent||"",neutral:r.neutral||null,success:r.success||null,warning:r.warning||null,error:r.error||null,info:r.info||null};ke.set(o)}else console.error("Invalid theme colors")}export{Fe as a,Ae as e,we as g,ve as i,ke as m,_e as s};
