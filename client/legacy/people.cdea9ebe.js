import{_ as a,a as o,b as s,i as t,s as n,c as e,S as i,z as r,k as p,p as c,r as v,d as l,w as h,x as u,g as f,A as m,t as g,h as k,o as d,l as j,v as q,u as y,y as b,B as C,n as $,e as D,f as z,m as E,C as x,D as A,j as B,E as H,F as I,G as O}from"./client.2b02fffe.js";function R(a){var o,s,t=a[1].default,n=r(t,a,a[0],null);return{c:function(){o=p("section"),n&&n.c(),this.h()},l:function(a){o=c(a,"SECTION",{class:!0});var s=v(o);n&&n.l(s),s.forEach(l),this.h()},h:function(){h(o,"class","svelte-rf2vcb")},m:function(a,t){u(a,o,t),n&&n.m(o,null),s=!0},p:function(a,o){var s=f(o,1)[0];n&&n.p&&1&s&&m(n,t,a,a[0],s,null,null)},i:function(a){s||(g(n,a),s=!0)},o:function(a){k(n,a),s=!1},d:function(a){a&&l(o),n&&n.d(a)}}}function T(a,o,s){var t=o.$$slots,n=void 0===t?{}:t,e=o.$$scope;return a.$$set=function(a){"$$scope"in a&&s(0,e=a.$$scope)},[e,n]}var S=function(r){a(c,i);var p=o(c);function c(a){var o;return s(this,c),o=p.call(this),t(e(o),a,T,R,n,{}),o}return c}();function V(a){var o,s,t,n,e,i,r,m,g,k;return{c:function(){o=p("div"),s=p("img"),n=d(),e=p("div"),i=p("div"),r=j(a[0]),m=d(),g=p("div"),k=j(a[1]),this.h()},l:function(t){o=c(t,"DIV",{class:!0});var p=v(o);s=c(p,"IMG",{src:!0,alt:!0,class:!0}),n=q(p),e=c(p,"DIV",{class:!0});var h=v(e);i=c(h,"DIV",{class:!0});var u=v(i);r=y(u,a[0]),u.forEach(l),m=q(h),g=c(h,"DIV",{class:!0});var f=v(g);k=y(f,a[1]),f.forEach(l),h.forEach(l),p.forEach(l),this.h()},h:function(){s.src!==(t=a[2])&&h(s,"src",t),h(s,"alt",""),h(s,"class","svelte-1oenox7"),h(i,"class","name svelte-1oenox7"),h(g,"class","position svelte-1oenox7"),h(e,"class","text svelte-1oenox7"),h(o,"class","avatar svelte-1oenox7")},m:function(a,t){u(a,o,t),b(o,s),b(o,n),b(o,e),b(e,i),b(i,r),b(e,m),b(e,g),b(g,k)},p:function(a,o){var n=f(o,1)[0];4&n&&s.src!==(t=a[2])&&h(s,"src",t),1&n&&C(r,a[0]),2&n&&C(k,a[1])},i:$,o:$,d:function(a){a&&l(o)}}}function K(a,o,s){var t=o.name,n=o.position,e=o.photo;return a.$$set=function(a){"name"in a&&s(0,t=a.name),"position"in a&&s(1,n=a.position),"photo"in a&&s(2,e=a.photo)},[t,n,e]}var L=function(r){a(c,i);var p=o(c);function c(a){var o;return s(this,c),o=p.call(this),t(e(o),a,K,V,n,{name:0,position:1,photo:2}),o}return c}();function G(a){for(var o,s,t,n=[a[0]],e={},i=0;i<n.length;i+=1)e=O(e,n[i]);return s=new L({props:e}),{c:function(){o=p("div"),D(s.$$.fragment),this.h()},l:function(a){o=c(a,"DIV",{class:!0});var t=v(o);z(s.$$.fragment,t),t.forEach(l),this.h()},h:function(){h(o,"class","wrap-avatar svelte-1qcejzl")},m:function(a,n){u(a,o,n),E(s,o,null),t=!0},p:function(a,o){var t=1&o?x(n,[A(a[0])]):{};s.$set(t)},i:function(a){t||(g(s.$$.fragment,a),t=!0)},o:function(a){k(s.$$.fragment,a),t=!1},d:function(a){a&&l(o),B(s)}}}function M(a){var o,s,t,n,e,i,r,m=a[0]&&G(a);return{c:function(){o=p("div"),s=p("h2"),t=d(),n=p("div"),m&&m.c(),e=d(),i=p("h4"),this.h()},l:function(a){o=c(a,"DIV",{class:!0});var r=v(o);s=c(r,"H2",{class:!0}),v(s).forEach(l),t=q(r),n=c(r,"DIV",{class:!0});var p=v(n);m&&m.l(p),e=q(p),i=c(p,"H4",{class:!0}),v(i).forEach(l),p.forEach(l),r.forEach(l),this.h()},h:function(){h(s,"class","svelte-1qcejzl"),h(i,"class","svelte-1qcejzl"),h(n,"class","flex svelte-1qcejzl"),h(o,"class","wrap svelte-1qcejzl")},m:function(p,c){u(p,o,c),b(o,s),s.innerHTML=a[1],b(o,t),b(o,n),m&&m.m(n,null),b(n,e),b(n,i),i.innerHTML=a[2],r=!0},p:function(a,o){var t=f(o,1)[0];(!r||2&t)&&(s.innerHTML=a[1]),a[0]?m?(m.p(a,t),1&t&&g(m,1)):((m=G(a)).c(),g(m,1),m.m(n,e)):m&&(H(),k(m,1,1,(function(){m=null})),I()),(!r||4&t)&&(i.innerHTML=a[2])},i:function(a){r||(g(m),r=!0)},o:function(a){k(m),r=!1},d:function(a){a&&l(o),m&&m.d()}}}function w(a,o,s){var t=o.person,n=o.h2,e=o.text;return a.$$set=function(a){"person"in a&&s(0,t=a.person),"h2"in a&&s(1,n=a.h2),"text"in a&&s(2,e=a.text)},[t,n,e]}var F=function(r){a(c,i);var p=o(c);function c(a){var o;return s(this,c),o=p.call(this),t(e(o),a,w,M,n,{person:0,h2:1,text:2}),o}return c}(),N={golubev:{name:"Vladimir Golubev",position:"Chief of Strategic Finance and Legal",photo:"/qc-report/assets/avatars/golubev.jpg"},bolotov:{name:"Kirill Bolotov",position:"Chief of B2B",photo:"/qc-report/assets/avatars/bolotov.jpg"},francois:{name:"Maxime François",position:"Chief of Global Compliance and Back Office",photo:"/qc-report/assets/avatars/francois.jpg"},tychenko:{name:"Evgeny Tychenko",position:"Chief of B2C",photo:"/qc-report/assets/avatars/tychenko.jpg"},pachko:{name:"Artem Pachko",position:"Chief of Acquisition and Sales",photo:"/qc-report/assets/avatars/pachko.jpg"},lopez:{name:"Joan Lopez",position:"Regional Business Developer",photo:"/qc-report/assets/avatars/lopez.jpg"},rentoumis:{name:"Nikos Rentoumis",position:"Regional Business Developer",photo:"/qc-report/assets/avatars/rentoumis.jpg"},kokh:{name:"Alexander Kokh",position:"Regional Business Developer",photo:"/qc-report/assets/avatars/kokh.jpg"},nescheret:{name:"Boris Nescheret",position:"Regional Business Developer",photo:"/qc-report/assets/avatars/nescheret.jpg"},kulik:{name:"Stepan Kulik",position:"Regional Business Developer",photo:"/qc-report/assets/avatars/kulik.jpg"},kutkova:{name:"Irina Kutkova",position:"Chief of Customer Care",photo:"/qc-report/assets/avatars/kutkova.jpg"},david:{name:"George David",position:"Product Owner Forex/CFD Products",photo:"/qc-report/assets/avatars/david.jpg"},rabinovich:{name:"Anton Rabinovich",position:"CEO",photo:"/qc-report/assets/avatars/rabinovich.jpg"},gitsis:{name:"Michael Gitsis",position:"Chief of Administration \u2028and Group CFO",photo:"/qc-report/assets/avatars/gitsis.jpg"},khimchenko:{name:"Tatyana Khimchenko",position:"Head of International Legal",photo:"/qc-report/assets/avatars/khimchenko.jpg"},kurbatov:{name:"Evgenii Kurbatov",position:"Head of Office System Administration",photo:"/qc-report/assets/avatars/kurbatov.jpg"},abdukarimova:{name:"Vera-Nika Abdukarimova",position:"Head of Office Administration",photo:"/qc-report/assets/avatars/abdukarimova.jpg"},latokhin:{name:"Kirill Latokhin",position:"Charity Team Leader",photo:"/qc-report/assets/avatars/latokhin.jpg"},galak:{name:"Olga Galak",position:"Charity PR manager",photo:"/qc-report/assets/avatars/galak.jpg"},bykova:{name:"Olga Bykova",position:"Charity document manager",photo:"/qc-report/assets/avatars/bykova.jpg"},bezrodnaya:{name:"Anna Bezrodnaya",position:"Chief Organization Development Officer",photo:"/qc-report/assets/avatars/bezrodnaya.jpg"},samburova:{name:"Eva Samburova",position:"Head of Strategic HR",photo:"/qc-report/assets/avatars/samburova.jpg"},mikhaylova:{name:"Tatyana Mikhaylova",position:"HR Business Partner",photo:"/qc-report/assets/avatars/mikhaylova.jpg"},romashkina:{name:"Natalia Romashkina",position:"Head of \u2028Corporate Culture",photo:"/qc-report/assets/avatars/romashkina.jpg"},laskin:{name:"Victor Laskin",position:"Chief Technical Officer",photo:"/qc-report/assets/avatars/laskin.jpg"},ivanov:{name:"Aleksandr Ivanov",position:"Chief of System Architecture",photo:"/qc-report/assets/avatars/ivanov.jpg"},votintsev:{name:"Dmitriy Votintsev",position:"Chief of IT Operations",photo:"/qc-report/assets/avatars/votintsev.jpg"},dubov:{name:"Ilya Dubov",position:"Head of Secuity & Risk Management",photo:"/qc-report/assets/avatars/dubov.jpg"},taklalsingh:{name:"Steve Taklalsingh",position:"Director UK",photo:"/qc-report/assets/avatars/taklalsingh.jpg"},dudukina:{name:"Alina Dudukina",position:"Head of Insights & Experiments",photo:"/qc-report/assets/avatars/dudukina.jpg"},kvashnin:{name:"Vladimir Kvashnin",position:"C++ developer",photo:"/qc-report/assets/avatars/kvashnin.jpg"},zhdanovskaya:{name:"Anna Zhdanovskaya",position:"Educational events manager",photo:"/qc-report/assets/avatars/zhdanovskaya.jpg"},terekhova:{name:"Anastasiya Terekhova",position:"Billing support officer",photo:"/qc-report/assets/avatars/terekhova.jpg"},zaytseva:{name:"Nadezhda Zaytseva",position:"Billing manager",photo:"/qc-report/assets/avatars/zaytseva.jpg"},kertling:{name:"Rodion Kertling",position:"Chief Data & Analysis Officer",photo:"/qc-report/assets/avatars/kertling.jpg"},golikov:{name:"Sergey Golikov",position:"Product owner",photo:"/qc-report/assets/avatars/golikov.jpg"},kuklina:{name:"Hristina Kuklina",position:"UX/UI designer",photo:"/qc-report/assets/avatars/kuklina.jpg"}};export{L as A,F as H,S as L,N as p};
