import{_ as n,a,b as t,i as s,s as r,c as i,S as c,k as o,l as f,p as u,r as l,u as e,d as h,w as v,x as g,y as d,B as p,o as m,v as j,g as k,n as D,C as E}from"./client.c49d332e.js";function I(n,a,t){var s=n.slice();return s[1]=a[t],s}function V(n){var a,t,s=n[1]+"";return{c:function(){a=o("div"),t=f(s),this.h()},l:function(n){a=u(n,"DIV",{class:!0});var r=l(a);t=e(r,s),r.forEach(h),this.h()},h:function(){v(a,"class","tag svelte-qdjiv5")},m:function(n,s){g(n,a,s),d(a,t)},p:function(n,a){1&a&&s!==(s=n[1]+"")&&p(t,s)},d:function(n){n&&h(a)}}}function q(n){for(var a,t,s,r,i=n[0],c=[],p=0;p<i.length;p+=1)c[p]=V(I(n,i,p));return{c:function(){a=o("div"),t=f("Huge thanks to"),s=m(),r=o("div");for(var n=0;n<c.length;n+=1)c[n].c();this.h()},l:function(n){a=u(n,"DIV",{class:!0});var i=l(a);t=e(i,"Huge thanks to"),i.forEach(h),s=j(n),r=u(n,"DIV",{class:!0});for(var o=l(r),f=0;f<c.length;f+=1)c[f].l(o);o.forEach(h),this.h()},h:function(){v(a,"class","caption svelte-qdjiv5"),v(r,"class","tags")},m:function(n,i){g(n,a,i),d(a,t),g(n,s,i),g(n,r,i);for(var o=0;o<c.length;o+=1)c[o].m(r,null)},p:function(n,a){var t=k(a,1)[0];if(1&t){var s;for(i=n[0],s=0;s<i.length;s+=1){var o=I(n,i,s);c[s]?c[s].p(o,t):(c[s]=V(o),c[s].c(),c[s].m(r,null))}for(;s<c.length;s+=1)c[s].d(1);c.length=i.length}},i:D,o:D,d:function(n){n&&h(a),n&&h(s),n&&h(r),E(c,n)}}}function x(n,a,t){var s=a.tags,r=void 0===s?[]:s;return n.$$set=function(n){"tags"in n&&t(0,r=n.tags)},[r]}var H=function(o){n(u,c);var f=a(u);function u(n){var a;return t(this,u),a=f.call(this),s(i(a),n,x,q,r,{tags:0}),a}return u}();export{H as T};
