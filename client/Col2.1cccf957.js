import{S as s,i as e,s as t,D as a,f as l,h as r,c as n,g as c,j as i,k as o,d as h,o as f,a as v,l as $,p as m,r as u,u as p,m as d,z as x,A as g,x as E,t as D,b as I,e as V,B as y,C as w,v as q,w as H}from"./client.3cd8a584.js";import{A as R}from"./people.0a8b5da6.js";function b(s){let e,t,y,w,q,H,b,j,A,C;const L=[s[0]];let M={};for(let s=0;s<L.length;s+=1)M=a(M,L[s]);return H=new R({props:M}),{c(){e=l("div"),t=l("h1"),y=r(),w=l("div"),q=l("div"),n(H.$$.fragment),b=r(),j=l("h4"),A=c(s[2]),this.h()},l(a){e=i(a,"DIV",{class:!0});var l=o(e);t=i(l,"H1",{class:!0}),o(t).forEach(h),y=f(l),w=i(l,"DIV",{class:!0});var r=o(w);q=i(r,"DIV",{class:!0});var n=o(q);v(H.$$.fragment,n),n.forEach(h),b=f(r),j=i(r,"H4",{class:!0});var c=o(j);A=$(c,s[2]),c.forEach(h),r.forEach(h),l.forEach(h),this.h()},h(){m(t,"class","svelte-1qlumyx"),m(q,"class","wrap-avatar svelte-1qlumyx"),m(j,"class","svelte-1qlumyx"),m(w,"class","flex svelte-1qlumyx"),m(e,"class","wrap svelte-1qlumyx")},m(a,l){u(a,e,l),p(e,t),t.innerHTML=s[1],p(e,y),p(e,w),p(w,q),d(H,q,null),p(w,b),p(w,j),p(j,A),C=!0},p(s,[e]){(!C||2&e)&&(t.innerHTML=s[1]);const a=1&e?x(L,[g(s[0])]):{};H.$set(a),(!C||4&e)&&E(A,s[2])},i(s){C||(D(H.$$.fragment,s),C=!0)},o(s){I(H.$$.fragment,s),C=!1},d(s){s&&h(e),V(H)}}}function j(s,e,t){let{person:a}=e,{h1:l}=e,{text:r}=e;return s.$$set=s=>{"person"in s&&t(0,a=s.person),"h1"in s&&t(1,l=s.h1),"text"in s&&t(2,r=s.text)},[a,l,r]}class A extends s{constructor(s){super(),e(this,s,j,b,t,{person:0,h1:1,text:2})}}function C(s){let e,t;return{c(){e=l("div"),t=c(s[1]),this.h()},l(a){e=i(a,"DIV",{class:!0});var l=o(e);t=$(l,s[1]),l.forEach(h),this.h()},h(){m(e,"class","h2-no-border")},m(s,a){u(s,e,a),p(e,t)},p(s,e){2&e&&E(t,s[1])},d(s){s&&h(e)}}}function L(s){let e,t,a,x,g,q,H,R;var b=s[0];b&&(a=new b({}));let j=s[1]&&C(s);return{c(){e=l("div"),t=l("div"),a&&n(a.$$.fragment),x=r(),j&&j.c(),g=r(),q=l("div"),H=c(s[2]),this.h()},l(l){e=i(l,"DIV",{class:!0});var r=o(e);t=i(r,"DIV",{class:!0});var n=o(t);a&&v(a.$$.fragment,n),n.forEach(h),x=f(r),j&&j.l(r),g=f(r),q=i(r,"DIV",{class:!0});var c=o(q);H=$(c,s[2]),c.forEach(h),r.forEach(h),this.h()},h(){m(t,"class","icon svelte-1gg0i"),m(q,"class","caption svelte-1gg0i"),m(e,"class","item")},m(s,l){u(s,e,l),p(e,t),a&&d(a,t,null),p(e,x),j&&j.m(e,null),p(e,g),p(e,q),p(q,H),R=!0},p(s,[l]){if(b!==(b=s[0])){if(a){y();const s=a;I(s.$$.fragment,1,0,(()=>{V(s,1)})),w()}b?(a=new b({}),n(a.$$.fragment),D(a.$$.fragment,1),d(a,t,null)):a=null}s[1]?j?j.p(s,l):(j=C(s),j.c(),j.m(e,g)):j&&(j.d(1),j=null),(!R||4&l)&&E(H,s[2])},i(s){R||(a&&D(a.$$.fragment,s),R=!0)},o(s){a&&I(a.$$.fragment,s),R=!1},d(s){s&&h(e),a&&V(a),j&&j.d()}}}function M(s,e,t){let{icon:a}=e,{title:l}=e,{text:r}=e;return s.$$set=s=>{"icon"in s&&t(0,a=s.icon),"title"in s&&t(1,l=s.title),"text"in s&&t(2,r=s.text)},[a,l,r]}class T extends s{constructor(s){super(),e(this,s,M,L,t,{icon:0,title:1,text:2})}}const k=s=>({}),z=s=>({}),B=s=>({}),S=s=>({});function F(s){let e,t,a,n,c,v;const $=s[2].right,d=q($,s,s[1],S),x=s[2].left,g=q(x,s,s[1],z);return{c(){e=l("div"),t=l("div"),d&&d.c(),a=r(),n=l("div"),g&&g.c(),this.h()},l(s){e=i(s,"DIV",{class:!0});var l=o(e);t=i(l,"DIV",{class:!0});var r=o(t);d&&d.l(r),r.forEach(h),a=f(l),n=i(l,"DIV",{class:!0});var c=o(n);g&&g.l(c),c.forEach(h),l.forEach(h),this.h()},h(){m(t,"class","content svelte-1roiym1"),m(n,"class","aside svelte-1roiym1"),m(e,"class",c="flex "+(s[0]?"flex-reverse":"flex-normal")+" svelte-1roiym1")},m(s,l){u(s,e,l),p(e,t),d&&d.m(t,null),p(e,a),p(e,n),g&&g.m(n,null),v=!0},p(s,[t]){d&&d.p&&2&t&&H(d,$,s,s[1],t,B,S),g&&g.p&&2&t&&H(g,x,s,s[1],t,k,z),(!v||1&t&&c!==(c="flex "+(s[0]?"flex-reverse":"flex-normal")+" svelte-1roiym1"))&&m(e,"class",c)},i(s){v||(D(d,s),D(g,s),v=!0)},o(s){I(d,s),I(g,s),v=!1},d(s){s&&h(e),d&&d.d(s),g&&g.d(s)}}}function G(s,e,t){let{$$slots:a={},$$scope:l}=e,{isReverse:r=!1}=e;return s.$$set=s=>{"isReverse"in s&&t(0,r=s.isReverse),"$$scope"in s&&t(1,l=s.$$scope)},[r,l,a]}class J extends s{constructor(s){super(),e(this,s,G,F,t,{isReverse:0})}}export{J as C,A as H,T as I};