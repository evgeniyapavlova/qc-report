import{_ as s,a,b as n,i as t,s as r,c,S as e,k as i,e as o,p as f,r as u,f as l,d as h,w as v,x as p,m as d,D as m,E as $,t as w,h as x,j as b,o as g,l as E,v as H,u as D,y as j,g as I,F as V,G as L,B as M,H as T}from"./client.d020522a.js";import{A as k}from"./people.2a98d96c.js";function y(s){for(var a,n,t,r=[s[0]],c={},e=0;e<r.length;e+=1)c=T(c,r[e]);return n=new k({props:c}),{c:function(){a=i("div"),o(n.$$.fragment),this.h()},l:function(s){a=f(s,"DIV",{class:!0});var t=u(a);l(n.$$.fragment,t),t.forEach(h),this.h()},h:function(){v(a,"class","wrap-avatar svelte-1wtebd3")},m:function(s,r){p(s,a,r),d(n,a,null),t=!0},p:function(s,a){var t=1&a?m(r,[$(s[0])]):{};n.$set(t)},i:function(s){t||(w(n.$$.fragment,s),t=!0)},o:function(s){x(n.$$.fragment,s),t=!1},d:function(s){s&&h(a),b(n)}}}function A(s){var a,n,t,r,c,e,o,l,d=s[0]&&y(s);return{c:function(){a=i("div"),n=i("h2"),t=g(),r=i("div"),d&&d.c(),c=g(),e=i("h4"),o=E(s[2]),this.h()},l:function(i){a=f(i,"DIV",{class:!0});var l=u(a);n=f(l,"H2",{class:!0}),u(n).forEach(h),t=H(l),r=f(l,"DIV",{class:!0});var v=u(r);d&&d.l(v),c=H(v),e=f(v,"H4",{class:!0});var p=u(e);o=D(p,s[2]),p.forEach(h),v.forEach(h),l.forEach(h),this.h()},h:function(){v(n,"class","svelte-1wtebd3"),v(e,"class","svelte-1wtebd3"),v(r,"class","flex svelte-1wtebd3"),v(a,"class","wrap svelte-1wtebd3")},m:function(i,f){p(i,a,f),j(a,n),n.innerHTML=s[1],j(a,t),j(a,r),d&&d.m(r,null),j(r,c),j(r,e),j(e,o),l=!0},p:function(s,a){var t=I(a,1)[0];(!l||2&t)&&(n.innerHTML=s[1]),s[0]?d?(d.p(s,t),1&t&&w(d,1)):((d=y(s)).c(),w(d,1),d.m(r,c)):d&&(V(),x(d,1,1,(function(){d=null})),L()),(!l||4&t)&&M(o,s[2])},i:function(s){l||(w(d),l=!0)},o:function(s){x(d),l=!1},d:function(s){s&&h(a),d&&d.d()}}}function B(s,a,n){var t=a.person,r=a.h2,c=a.text;return s.$$set=function(s){"person"in s&&n(0,t=s.person),"h2"in s&&n(1,r=s.h2),"text"in s&&n(2,c=s.text)},[t,r,c]}var F=function(i){s(f,e);var o=a(f);function f(s){var a;return n(this,f),a=o.call(this),t(c(a),s,B,A,r,{person:0,h2:1,text:2}),a}return f}();export{F as H};