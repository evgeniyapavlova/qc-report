import{S as s,i as e,s as t,D as a,f as l,h as r,c as n,g as c,j as i,k as o,d as h,o as v,a as f,l as $,p as d,r as u,u as p,m,z as x,A as g,x as E,t as D,b as I,e as V,B as k,C as w,v as y,w as H}from"./client.a63dc26e.js";import{A as q}from"./people.5b807693.js";function R(s){let e,t,k,w,y,H,R,b,j,A;const C=[s[0]];let L={};for(let s=0;s<C.length;s+=1)L=a(L,C[s]);return H=new q({props:L}),{c(){e=l("div"),t=l("h1"),k=r(),w=l("div"),y=l("div"),n(H.$$.fragment),R=r(),b=l("h4"),j=c(s[2]),this.h()},l(a){e=i(a,"DIV",{class:!0});var l=o(e);t=i(l,"H1",{class:!0}),o(t).forEach(h),k=v(l),w=i(l,"DIV",{class:!0});var r=o(w);y=i(r,"DIV",{class:!0});var n=o(y);f(H.$$.fragment,n),n.forEach(h),R=v(r),b=i(r,"H4",{class:!0});var c=o(b);j=$(c,s[2]),c.forEach(h),r.forEach(h),l.forEach(h),this.h()},h(){d(t,"class","svelte-vlsyhk"),d(y,"class","wrap-avatar svelte-vlsyhk"),d(b,"class","svelte-vlsyhk"),d(w,"class","flex svelte-vlsyhk"),d(e,"class","wrap svelte-vlsyhk")},m(a,l){u(a,e,l),p(e,t),t.innerHTML=s[1],p(e,k),p(e,w),p(w,y),m(H,y,null),p(w,R),p(w,b),p(b,j),A=!0},p(s,[e]){(!A||2&e)&&(t.innerHTML=s[1]);const a=1&e?x(C,[g(s[0])]):{};H.$set(a),(!A||4&e)&&E(j,s[2])},i(s){A||(D(H.$$.fragment,s),A=!0)},o(s){I(H.$$.fragment,s),A=!1},d(s){s&&h(e),V(H)}}}function b(s,e,t){let{person:a}=e,{h1:l}=e,{text:r}=e;return s.$$set=s=>{"person"in s&&t(0,a=s.person),"h1"in s&&t(1,l=s.h1),"text"in s&&t(2,r=s.text)},[a,l,r]}class j extends s{constructor(s){super(),e(this,s,b,R,t,{person:0,h1:1,text:2})}}function A(s){let e,t;return{c(){e=l("div"),t=c(s[1]),this.h()},l(a){e=i(a,"DIV",{class:!0});var l=o(e);t=$(l,s[1]),l.forEach(h),this.h()},h(){d(e,"class","h2-no-border")},m(s,a){u(s,e,a),p(e,t)},p(s,e){2&e&&E(t,s[1])},d(s){s&&h(e)}}}function C(s){let e,t,a,x,g,y,H,q;var R=s[0];R&&(a=new R({}));let b=s[1]&&A(s);return{c(){e=l("div"),t=l("div"),a&&n(a.$$.fragment),x=r(),b&&b.c(),g=r(),y=l("div"),H=c(s[2]),this.h()},l(l){e=i(l,"DIV",{class:!0});var r=o(e);t=i(r,"DIV",{class:!0});var n=o(t);a&&f(a.$$.fragment,n),n.forEach(h),x=v(r),b&&b.l(r),g=v(r),y=i(r,"DIV",{class:!0});var c=o(y);H=$(c,s[2]),c.forEach(h),r.forEach(h),this.h()},h(){d(t,"class","icon svelte-43novn"),d(y,"class","caption svelte-43novn"),d(e,"class","item")},m(s,l){u(s,e,l),p(e,t),a&&m(a,t,null),p(e,x),b&&b.m(e,null),p(e,g),p(e,y),p(y,H),q=!0},p(s,[l]){if(R!==(R=s[0])){if(a){k();const s=a;I(s.$$.fragment,1,0,(()=>{V(s,1)})),w()}R?(a=new R({}),n(a.$$.fragment),D(a.$$.fragment,1),m(a,t,null)):a=null}s[1]?b?b.p(s,l):(b=A(s),b.c(),b.m(e,g)):b&&(b.d(1),b=null),(!q||4&l)&&E(H,s[2])},i(s){q||(a&&D(a.$$.fragment,s),q=!0)},o(s){a&&I(a.$$.fragment,s),q=!1},d(s){s&&h(e),a&&V(a),b&&b.d()}}}function L(s,e,t){let{icon:a}=e,{title:l}=e,{text:r}=e;return s.$$set=s=>{"icon"in s&&t(0,a=s.icon),"title"in s&&t(1,l=s.title),"text"in s&&t(2,r=s.text)},[a,l,r]}class M extends s{constructor(s){super(),e(this,s,L,C,t,{icon:0,title:1,text:2})}}const T=s=>({}),z=s=>({}),B=s=>({}),S=s=>({});function F(s){let e,t,a,n,c,f;const $=s[2].right,m=y($,s,s[1],S),x=s[2].left,g=y(x,s,s[1],z);return{c(){e=l("div"),t=l("div"),m&&m.c(),a=r(),n=l("div"),g&&g.c(),this.h()},l(s){e=i(s,"DIV",{class:!0});var l=o(e);t=i(l,"DIV",{class:!0});var r=o(t);m&&m.l(r),r.forEach(h),a=v(l),n=i(l,"DIV",{class:!0});var c=o(n);g&&g.l(c),c.forEach(h),l.forEach(h),this.h()},h(){d(t,"class","content svelte-1i96sqd"),d(n,"class","aside svelte-1i96sqd"),d(e,"class",c="flex "+(s[0]?"flex-reverse":"flex-normal")+" svelte-1i96sqd")},m(s,l){u(s,e,l),p(e,t),m&&m.m(t,null),p(e,a),p(e,n),g&&g.m(n,null),f=!0},p(s,[t]){m&&m.p&&2&t&&H(m,$,s,s[1],t,B,S),g&&g.p&&2&t&&H(g,x,s,s[1],t,T,z),(!f||1&t&&c!==(c="flex "+(s[0]?"flex-reverse":"flex-normal")+" svelte-1i96sqd"))&&d(e,"class",c)},i(s){f||(D(m,s),D(g,s),f=!0)},o(s){I(m,s),I(g,s),f=!1},d(s){s&&h(e),m&&m.d(s),g&&g.d(s)}}}function G(s,e,t){let{$$slots:a={},$$scope:l}=e,{isReverse:r=!1}=e;return s.$$set=s=>{"isReverse"in s&&t(0,r=s.isReverse),"$$scope"in s&&t(1,l=s.$$scope)},[r,l,a]}class J extends s{constructor(s){super(),e(this,s,G,F,t,{isReverse:0})}}export{J as C,j as H,M as I};
