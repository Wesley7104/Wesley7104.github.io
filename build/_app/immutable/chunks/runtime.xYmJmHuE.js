var It=Array.isArray,xt=Array.from,Ot=Object.defineProperty,on=Object.getOwnPropertyDescriptor,Gn=Object.getOwnPropertyDescriptors,Dt=Object.prototype,kt=Array.prototype,Kn=Object.getPrototypeOf;function Nt(n){return typeof n=="function"}const Ct=()=>{};function bt(n){return n()}function $n(n){for(var t=0;t<n.length;t++)n[t]()}const y=2,pn=4,H=8,tn=16,m=32,Z=64,x=128,V=256,p=512,R=1024,b=2048,C=4096,j=8192,Zn=16384,hn=32768,Pt=65536,zn=1<<18,dn=1<<19,fn=Symbol("$state"),Ft=Symbol("legacy props"),qt=Symbol("");function En(n){return n===this.v}function Jn(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function yn(n){return!Jn(n,this.v)}function Wn(n){throw new Error("effect_in_teardown")}function Xn(){throw new Error("effect_in_unowned_derived")}function Qn(n){throw new Error("effect_orphan")}function nt(){throw new Error("effect_update_depth_exceeded")}function Lt(){throw new Error("hydration_failed")}function Mt(n){throw new Error("props_invalid_value")}function Yt(){throw new Error("state_descriptors_fixed")}function Ht(){throw new Error("state_prototype_fixed")}function tt(){throw new Error("state_unsafe_local_read")}function rt(){throw new Error("state_unsafe_mutation")}let z=!1;function jt(){z=!0}function rn(n){return{f:0,v:n,reactions:null,equals:En,version:0}}function Bt(n){return wn(rn(n))}function et(n,t=!1){var e;const r=rn(n);return t||(r.equals=yn),z&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function Ut(n,t=!1){return wn(et(n,t))}function wn(n){return o!==null&&o.f&y&&(A===null?Et([n]):A.push(n)),n}function st(n,t){return o!==null&&ln()&&o.f&(y|tn)&&(A===null||!A.includes(n))&&rt(),at(n,t)}function at(n,t){return n.equals(t)||(n.v=t,n.version=Yn(),Tn(n,R),ln()&&u!==null&&u.f&p&&!(u.f&m)&&(c!==null&&c.includes(n)?(T(u,R),J(u)):g===null?yt([n]):g.push(n))),t}function Tn(n,t){var r=n.reactions;if(r!==null)for(var e=ln(),s=r.length,a=0;a<s;a++){var l=r[a],i=l.f;i&R||!e&&l===u||(T(l,t),i&(p|x)&&(i&y?Tn(l,b):J(l)))}}const Vt=1,Gt=2,Kt=16,$t=1,Zt=2,zt=4,Jt=8,Wt=16,Xt=4,Qt=1,nr=2,lt="[",ut="[!",ot="]",An={},tr=Symbol();function mn(n){console.warn("hydration_mismatch")}let I=!1;function rr(n){I=n}let w;function L(n){if(n===null)throw mn(),An;return w=n}function er(){return L(O(w))}function sr(n){if(I){if(O(w)!==null)throw mn(),An;w=n}}function ar(n=1){if(I){for(var t=n,r=w;t--;)r=O(r);w=r}}function lr(){for(var n=0,t=w;;){if(t.nodeType===8){var r=t.data;if(r===ot){if(n===0)return t;n-=1}else(r===lt||r===ut)&&(n+=1)}var e=O(t);t.remove(),t=e}}var _n,gn,Rn;function ur(){if(_n===void 0){_n=window;var n=Element.prototype,t=Node.prototype;gn=on(t,"firstChild").get,Rn=on(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function W(n=""){return document.createTextNode(n)}function X(n){return gn.call(n)}function O(n){return Rn.call(n)}function or(n,t){if(!I)return X(n);var r=X(w);if(r===null)r=w.appendChild(W());else if(t&&r.nodeType!==3){var e=W();return r==null||r.before(e),L(e),e}return L(r),r}function ir(n,t){if(!I){var r=X(n);return r instanceof Comment&&r.data===""?O(r):r}return w}function fr(n,t=1,r=!1){let e=I?w:n;for(var s;t--;)s=e,e=O(e);if(!I)return e;var a=e==null?void 0:e.nodeType;if(r&&a!==3){var l=W();return e===null?s==null||s.after(l):e.before(l),L(l),l}return L(e),e}function _r(n){n.textContent=""}function it(n){var t=y|R;u===null?t|=x:u.f|=dn;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:f,deps:null,equals:En,f:t,fn:n,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function cr(n){const t=it(n);return t.equals=yn,t}function Sn(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var e=t[r];e.f&y?en(e):F(e)}}}function ft(n){for(var t=n.parent;t!==null;){if(!(t.f&y))return t;t=t.parent}return null}function In(n){var t,r=u;$(ft(n));try{Sn(n),t=Hn(n)}finally{$(r)}return t}function xn(n){var t=In(n),r=(D||n.f&x)&&n.deps!==null?b:p;T(n,r),n.equals(t)||(n.v=t,n.version=Yn())}function en(n){Sn(n),Y(n,0),T(n,j),n.v=n.children=n.deps=n.ctx=n.reactions=null}function On(n){u===null&&o===null&&Qn(),o!==null&&o.f&x&&Xn(),an&&Wn()}function _t(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function P(n,t,r,e=!0){var s=(n&Z)!==0,a=u,l={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|R,first:null,fn:t,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var i=k;try{cn(!0),B(l),l.f|=Zn}catch(_){throw F(l),_}finally{cn(i)}}else t!==null&&J(l);var E=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&dn)===0;if(!E&&!s&&e&&(a!==null&&_t(l,a),o!==null&&o.f&y)){var h=o;(h.children??(h.children=[])).push(l)}return l}function vr(n){const t=P(H,null,!1);return T(t,p),t.teardown=n,t}function pr(n){On();var t=u!==null&&(u.f&m)!==0&&f!==null&&!f.m;if(t){var r=f;(r.e??(r.e=[])).push({fn:n,effect:u,reaction:o})}else{var e=Dn(n);return e}}function hr(n){return On(),sn(n)}function dr(n){const t=P(Z,n,!0);return()=>{F(t)}}function Dn(n){return P(pn,n,!1)}function Er(n,t){var r=f,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=sn(()=>{n(),!e.ran&&(e.ran=!0,st(r.l.r2,!0),Rt(t))})}function yr(){var n=f;sn(()=>{if(gt(n.l.r2)){for(var t of n.l.r1){var r=t.effect;r.f&p&&T(r,b),q(r)&&B(r),t.ran=!1}n.l.r2.v=!1}})}function sn(n){return P(H,n,!0)}function wr(n){return ct(n)}function ct(n,t=0){return P(H|tn|t,n,!0)}function Tr(n,t=!0){return P(H|m,n,!0,t)}function kn(n){var t=n.teardown;if(t!==null){const r=an,e=o;vn(!0),K(null);try{t.call(null)}finally{vn(r),K(e)}}}function Nn(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)en(t[r])}}function Cn(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;F(r,t),r=e}}function vt(n){for(var t=n.first;t!==null;){var r=t.next;t.f&m||F(t),t=r}}function F(n,t=!0){var r=!1;if((t||n.f&zn)&&n.nodes_start!==null){for(var e=n.nodes_start,s=n.nodes_end;e!==null;){var a=e===s?null:O(e);e.remove(),e=a}r=!0}Cn(n,t&&!r),Nn(n),Y(n,0),T(n,j);var l=n.transitions;if(l!==null)for(const E of l)E.stop();kn(n);var i=n.parent;i!==null&&i.first!==null&&bn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.parent=n.fn=n.nodes_start=n.nodes_end=null}function bn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function Ar(n,t){var r=[];Pn(n,r,!0),pt(r,()=>{F(n),t&&t()})}function pt(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var s of n)s.out(e)}else t()}function Pn(n,t,r){if(!(n.f&C)){if(n.f^=C,n.transitions!==null)for(const l of n.transitions)(l.is_global||r)&&t.push(l);for(var e=n.first;e!==null;){var s=e.next,a=(e.f&hn)!==0||(e.f&m)!==0;Pn(e,t,a?r:!1),e=s}}}function mr(n){Fn(n,!0)}function Fn(n,t){if(n.f&C){q(n)&&B(n),n.f^=C;for(var r=n.first;r!==null;){var e=r.next,s=(r.f&hn)!==0||(r.f&m)!==0;Fn(r,s?t:!1),r=e}if(n.transitions!==null)for(const a of n.transitions)(a.is_global||t)&&a.in()}}let G=!1,Q=[];function qn(){G=!1;const n=Q.slice();Q=[],$n(n)}function gr(n){G||(G=!0,queueMicrotask(qn)),Q.push(n)}function ht(){G&&qn()}const Ln=0,dt=1;let U=Ln,M=!1,k=!1,an=!1;function cn(n){k=n}function vn(n){an=n}let S=[],N=0;let o=null;function K(n){o=n}let u=null;function $(n){u=n}let A=null;function Et(n){A=n}let c=null,d=0,g=null;function yt(n){g=n}let Mn=0,D=!1,f=null;function Yn(){return++Mn}function ln(){return!z||f!==null&&f.l===null}function q(n){var l,i;var t=n.f;if(t&R)return!0;if(t&b){var r=n.deps,e=(t&x)!==0;if(r!==null){var s;if(t&V){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(n);n.f^=V}for(s=0;s<r.length;s++){var a=r[s];if(q(a)&&xn(a),e&&u!==null&&!D&&!((i=a==null?void 0:a.reactions)!=null&&i.includes(n))&&(a.reactions??(a.reactions=[])).push(n),a.version>n.version)return!0}}e||T(n,p)}return!1}function wt(n,t,r){throw n}function Hn(n){var un;var t=c,r=d,e=g,s=o,a=D,l=A,i=f,E=n.f;c=null,d=0,g=null,o=E&(m|Z)?null:n,D=!k&&(E&x)!==0,A=null,f=n.ctx;try{var h=(0,n.fn)(),_=n.deps;if(c!==null){var v;if(Y(n,d),_!==null&&d>0)for(_.length=d+c.length,v=0;v<c.length;v++)_[d+v]=c[v];else n.deps=_=c;if(!D)for(v=d;v<_.length;v++)((un=_[v]).reactions??(un.reactions=[])).push(n)}else _!==null&&d<_.length&&(Y(n,d),_.length=d);return h}finally{c=t,d=r,g=e,o=s,D=a,A=l,f=i}}function Tt(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[e]=r[s],r.pop())}}r===null&&t.f&y&&(c===null||!c.includes(t))&&(T(t,b),t.f&(x|V)||(t.f^=V),Y(t,0))}function Y(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)Tt(n,r[e])}function B(n){var t=n.f;if(!(t&j)){T(n,p);var r=u;u=n;try{t&tn?vt(n):Cn(n),Nn(n),kn(n);var e=Hn(n);n.teardown=typeof e=="function"?e:null,n.version=Mn}catch(s){wt(s)}finally{u=r}}}function jn(){N>1e3&&(N=0,nt()),N++}function Bn(n){var t=n.length;if(t!==0){jn();var r=k;k=!0;try{for(var e=0;e<t;e++){var s=n[e];s.f&p||(s.f^=p);var a=[];Un(s,a),At(a)}}finally{k=r}}}function At(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];!(e.f&(j|C))&&q(e)&&(B(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?bn(e):e.fn=null))}}function mt(){if(M=!1,N>1001)return;const n=S;S=[],Bn(n),M||(N=0)}function J(n){U===Ln&&(M||(M=!0,queueMicrotask(mt)));for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&(Z|m)){if(!(r&p))return;t.f^=p}}S.push(t)}function Un(n,t){var r=n.first,e=[];n:for(;r!==null;){var s=r.f,a=(s&m)!==0,l=a&&(s&p)!==0;if(!l&&!(s&C))if(s&H){a?r.f^=p:q(r)&&B(r);var i=r.first;if(i!==null){r=i;continue}}else s&pn&&e.push(r);var E=r.next;if(E===null){let v=r.parent;for(;v!==null;){if(n===v)break n;var h=v.next;if(h!==null){r=h;continue n}v=v.parent}}r=E}for(var _=0;_<e.length;_++)i=e[_],t.push(i),Un(i,t)}function Vn(n){var t=U,r=S;try{jn();const s=[];U=dt,S=s,M=!1,Bn(r);var e=n==null?void 0:n();return ht(),(S.length>0||s.length>0)&&Vn(),N=0,e}finally{U=t,S=r}}async function Rr(){await Promise.resolve(),Vn()}function gt(n){var _;var t=n.f,r=(t&y)!==0;if(r&&t&j){var e=In(n);return en(n),e}if(o!==null){A!==null&&A.includes(n)&&tt();var s=o.deps;c===null&&s!==null&&s[d]===n?d++:c===null?c=[n]:c.push(n),g!==null&&u!==null&&u.f&p&&!(u.f&m)&&g.includes(n)&&(T(u,R),J(u))}else if(r&&n.deps===null)for(var a=n,l=a.parent,i=a;l!==null;)if(l.f&y){var E=l;i=E,l=E.parent}else{var h=l;(_=h.deriveds)!=null&&_.includes(i)||(h.deriveds??(h.deriveds=[])).push(i);break}return r&&(a=n,q(a)&&xn(a)),n.v}function Rt(n){const t=o;try{return o=null,n()}finally{o=t}}const St=~(R|b|p);function T(n,t){n.f=n.f&St|t}function Sr(n,t=!1,r){f={p:f,c:null,e:null,m:!1,s:n,x:null,l:null},z&&!t&&(f.l={s:null,u:null,r1:[],r2:rn(!1)})}function Ir(n){const t=f;if(t!==null){n!==void 0&&(t.x=n);const l=t.e;if(l!==null){var r=u,e=o;t.e=null;try{for(var s=0;s<l.length;s++){var a=l[s];$(a.effect),K(a.reaction),Dn(a.fn)}}finally{$(r),K(e)}}f=t.p,t.m=!0}return n||{}}function xr(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(fn in n)nn(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&fn in r&&nn(r)}}}function nn(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{nn(n[e],t)}catch{}const r=Kn(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Gn(r);for(let s in e){const a=e[s].get;if(a)try{a.call(n)}catch{}}}}}export{lt as $,et as A,m as B,Ct as C,Jn as D,hn as E,Sr as F,ir as G,ut as H,wr as I,Ir as J,fr as K,Pt as L,or as M,sr as N,hr as O,Zt as P,pr as Q,Z as R,fn as S,f as T,bt as U,$n as V,xr as W,jt as X,vr as Y,W as Z,zn as _,Tr as a,O as a0,X as a1,ur as a2,An as a3,ot as a4,mn as a5,Lt as a6,_r as a7,xt as a8,dr as a9,sn as aA,Vn as aB,Rr as aC,Bt as aD,tn as aE,Zn as aF,Nt as aG,Xt as aH,Er as aI,yr as aJ,Ut as aK,Dt as aa,kt as ab,rn as ac,Yt as ad,tr as ae,Ht as af,Kn as ag,It as ah,C as ai,at as aj,Pn as ak,pt as al,F as am,o as an,Gt as ao,Vt as ap,Kt as aq,qt as ar,Gn as as,ar as at,K as au,gr as av,Ot as aw,Qt as ax,nr as ay,Dn as az,ct as b,er as c,lr as d,rr as e,w as f,on as g,I as h,Mt as i,$ as j,Jt as k,z as l,Ft as m,it as n,cr as o,Ar as p,gt as q,mr as r,L as s,zt as t,Rt as u,yn as v,st as w,u as x,$t as y,Wt as z};
