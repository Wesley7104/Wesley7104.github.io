import{g as F,i as N,L as Y,B as p,R as x,j as h,l as y,P as M,k as U,S as z,m as G,u as L,n as T,o as $,q as l,t as j,v as H,w as V,x as B,y as Z,z as J,A as K}from"./runtime.DLWVGSGY.js";import{p as Q}from"./index-client.4IiP3a9h.js";import{c as W}from"./store.CHDFash4.js";function q(r){for(var a=B,n=B;a!==null&&!(a.f&(p|x));)a=a.parent;try{return h(a),r()}finally{h(n)}}function ae(r,a,n,v){var g;var R=(n&Z)!==0,d=!y||(n&M)!==0,c=(n&U)!==0,w=(n&J)!==0,I=!1,i;c?[i,I]=W(()=>r[a]):i=r[a];var C=z in r||G in r,_=((g=F(r,a))==null?void 0:g.set)??(C&&c&&a in r?e=>r[a]=e:void 0),t=v,o=!0,P=!1,A=()=>(P=!0,o&&(o=!1,w?t=L(v):t=v),t);i===void 0&&v!==void 0&&(_&&d&&N(),i=A(),_&&_(i));var u;if(d)u=()=>{var e=r[a];return e===void 0?A():(o=!0,P=!1,e)};else{var O=q(()=>(R?T:$)(()=>r[a]));O.f|=Y,u=()=>{var e=l(O);return e!==void 0&&(t=void 0),e===void 0?t:e}}if(!(n&j))return u;if(_){var D=r.$$legacy;return function(e,f){return arguments.length>0?((!d||!f||D||I)&&_(f?u():e),e):u()}}var S=!1,b=!1,m=K(i),s=q(()=>T(()=>{var e=u(),f=l(m);return S?(S=!1,b=!0,f):(b=!1,m.v=e)}));return R||(s.equals=H),function(e,f){if(arguments.length>0){const E=f?l(s):d&&c?Q(e):e;return s.equals(E)||(S=!0,V(m,E),P&&t!==void 0&&(t=E),L(()=>l(s))),e}return l(s)}}export{ae as p};
