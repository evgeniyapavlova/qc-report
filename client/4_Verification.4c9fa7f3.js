import{S as t,i as e,s,D as a,E as n,j as r,k as l,d as c,p as o,F as h,r as i,u as f,z as m,n as u,G as v,f as $,g,h as p,H as d,l as w,o as x,t as C,b as E,B as b,C as D,y as I,c as V,a as j,m as k,e as L}from"./client.ad23ff89.js";import{L as B,p as J}from"./people.83611637.js";import{H as O}from"./H2_Text_Avatar.f5db2862.js";import{C as K}from"./Chart.10caa3cc.js";function Y(t){let e,s,v=[{width:"16"},{height:"36"},{viewBox:"0 0 16 36"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},t[0]],$={};for(let t=0;t<v.length;t+=1)$=a($,v[t]);return{c(){e=n("svg"),s=n("path"),this.h()},l(t){e=r(t,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0},1);var a=l(e);s=r(a,"path",{d:!0,fill:!0},1),l(s).forEach(c),a.forEach(c),this.h()},h(){o(s,"d","M7.29289 35.7071C7.68342 36.0976 8.31658 36.0976 8.70711 35.7071L15.0711 29.3431C15.4616 28.9526 15.4616 28.3195 15.0711 27.9289C14.6805 27.5384 14.0474 27.5384 13.6569 27.9289L8 33.5858L2.34314 27.9289C1.95262 27.5384 1.31946 27.5384 0.928931 27.9289C0.538407 28.3195 0.538407 28.9526 0.928931 29.3431L7.29289 35.7071ZM7 -4.37114e-08L7 35L9 35L9 4.37114e-08L7 -4.37114e-08Z"),o(s,"fill","#E62334"),h(e,$)},m(t,a){i(t,e,a),f(e,s)},p(t,[s]){h(e,$=m(v,[{width:"16"},{height:"36"},{viewBox:"0 0 16 36"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},1&s&&t[0]]))},i:u,o:u,d(t){t&&c(e)}}}function q(t,e,s){return t.$$set=t=>{s(0,e=a(a({},e),v(t)))},[e=v(e)]}class H extends t{constructor(t){super(),e(this,t,q,Y,s,{})}}function M(t,e,s){const a=t.slice();return a[1]=e[s],a[3]=s,a}function y(t){let e,s,a,n,h,m,v,b,D,I=t[1].time+"",B=t[1].text+"",J=t[1].number&&function(t){let e,s,a=t[1].number+"";return{c(){e=$("div"),s=g(a),this.h()},l(t){e=r(t,"DIV",{class:!0});var n=l(e);s=w(n,a),n.forEach(c),this.h()},h(){o(e,"class","number svelte-1hp1gqb")},m(t,a){i(t,e,a),f(e,s)},p:u,d(t){t&&c(e)}}}(t),O=t[3]!==t[0].length-1&&function(t){let e,s,a,n;return s=new H({}),{c(){e=$("div"),V(s.$$.fragment),a=p(),this.h()},l(t){e=r(t,"DIV",{class:!0});var n=l(e);j(s.$$.fragment,n),a=x(n),n.forEach(c),this.h()},h(){o(e,"class","arrow-wrap svelte-1hp1gqb")},m(t,r){i(t,e,r),k(s,e,null),f(e,a),n=!0},i(t){n||(C(s.$$.fragment,t),n=!0)},o(t){E(s.$$.fragment,t),n=!1},d(t){t&&c(e),L(s)}}}();return{c(){e=$("div"),s=g(I),a=p(),J&&J.c(),n=p(),h=$("div"),m=g(B),v=p(),O&&O.c(),b=d(),this.h()},l(t){e=r(t,"DIV",{class:!0});var o=l(e);s=w(o,I),o.forEach(c),a=x(t),J&&J.l(t),n=x(t),h=r(t,"DIV",{class:!0});var i=l(h);m=w(i,B),i.forEach(c),v=x(t),O&&O.l(t),b=d(),this.h()},h(){o(e,"class","time svelte-1hp1gqb"),o(h,"class","text svelte-1hp1gqb")},m(t,r){i(t,e,r),f(e,s),i(t,a,r),J&&J.m(t,r),i(t,n,r),i(t,h,r),f(h,m),i(t,v,r),O&&O.m(t,r),i(t,b,r),D=!0},p(t,e){t[1].number&&J.p(t,e)},i(t){D||(C(O),D=!0)},o(t){E(O),D=!1},d(t){t&&c(e),t&&c(a),J&&J.d(t),t&&c(n),t&&c(h),t&&c(v),O&&O.d(t),t&&c(b)}}}function A(t){let e,s,a=t[0],n=[];for(let e=0;e<a.length;e+=1)n[e]=y(M(t,a,e));const h=t=>E(n[t],1,1,(()=>{n[t]=null}));return{c(){e=$("div");for(let t=0;t<n.length;t+=1)n[t].c();this.h()},l(t){e=r(t,"DIV",{class:!0});var s=l(e);for(let t=0;t<n.length;t+=1)n[t].l(s);s.forEach(c),this.h()},h(){o(e,"class","aside svelte-1hp1gqb")},m(t,a){i(t,e,a);for(let t=0;t<n.length;t+=1)n[t].m(e,null);s=!0},p(t,[s]){if(1&s){let r;for(a=t[0],r=0;r<a.length;r+=1){const l=M(t,a,r);n[r]?(n[r].p(l,s),C(n[r],1)):(n[r]=y(l),n[r].c(),C(n[r],1),n[r].m(e,null))}for(b(),r=a.length;r<n.length;r+=1)h(r);D()}},i(t){if(!s){for(let t=0;t<a.length;t+=1)C(n[t]);s=!0}},o(t){n=n.filter(Boolean);for(let t=0;t<n.length;t+=1)E(n[t]);s=!1},d(t){t&&c(e),I(n,t)}}}function S(t){return[[{time:"март 2020",text:"Jumio закрыл часть своих офисов"},{time:"конец марта 2020",number:"8 000",text:"кол-во клиентов, ожидающих верификации"},{time:"апрель 2020",number:"4 000",text:"смогли сократить"},{time:"май 2020",number:"9 500",text:"первая волна пандемии"},{time:"июнь 2020",number:"1 500",text:"команда  Backoffice снизила кол-во"},{time:"ноябрь 2020",number:"0",text:"кол-во клиентов, ожидающих верификации"}]]}class _ extends t{constructor(t){super(),e(this,t,S,A,s,{})}}function F(t){let e,s,a,n,h,m,v,d,b,D,I,B,J,Y,q,H,M,y,A,S,F,N;return s=new O({props:{h2:"Верификация новых пользователей <span>в эпоху COVID</span>",person:t[0],text:"Быстрая верификация — это важная часть удовлетворенности пользователей и их активности на платформе. Нам удалось сохранить высокую скорость верификации несмотря на челленджи эпохи COVID."}}),J=new K({props:{chartId:"ver-chart",data:t[1]}}),F=new _({}),{c(){e=$("div"),V(s.$$.fragment),a=p(),n=$("div"),h=$("div"),m=$("h4"),v=g("Что произошло?"),d=p(),b=$("p"),D=g("В марте 2020 года Jumio — наш основной поставщик автоматизированной\n          проверки документов KYC (Know Your Customer) — сильно пострадал от\n          кризиса COVID и закрыл часть своих офисов. Они не смогли оказывать нам\n          услуги с необходимой скоростью, это означало, что нам приходилось\n          проверять документы вручную. К концу марта количество документов KYC,\n          ожидающих проверки, взлетело до 8 000, к апрелю мы смогли сократить\n          его до 4000, а в мае количество документов вновь поднялось до 9500,\n          потому что первая волна пандемии принесла нам очень много клиентов."),I=p(),B=$("div"),V(J.$$.fragment),Y=p(),q=$("h4"),H=g("Как мы это решили?"),M=p(),y=$("p"),A=g("Благодаря нашей команде Back Office к июню мы снизили количество\n          документов до 1500, а в ноябре количество клиентов, ожидающих\n          верификации более 3 дней, стремится к нулю. Мы полностью решили\n          ситуацию с Jumio и работаем над добавлением второго поставщика услуг."),S=p(),V(F.$$.fragment),this.h()},l(t){e=r(t,"DIV",{class:!0});var o=l(e);j(s.$$.fragment,o),o.forEach(c),a=x(t),n=r(t,"DIV",{class:!0});var i=l(n);h=r(i,"DIV",{class:!0});var f=l(h);m=r(f,"H4",{class:!0});var u=l(m);v=w(u,"Что произошло?"),u.forEach(c),d=x(f),b=r(f,"P",{});var $=l(b);D=w($,"В марте 2020 года Jumio — наш основной поставщик автоматизированной\n          проверки документов KYC (Know Your Customer) — сильно пострадал от\n          кризиса COVID и закрыл часть своих офисов. Они не смогли оказывать нам\n          услуги с необходимой скоростью, это означало, что нам приходилось\n          проверять документы вручную. К концу марта количество документов KYC,\n          ожидающих проверки, взлетело до 8 000, к апрелю мы смогли сократить\n          его до 4000, а в мае количество документов вновь поднялось до 9500,\n          потому что первая волна пандемии принесла нам очень много клиентов."),$.forEach(c),I=x(f),B=r(f,"DIV",{class:!0});var g=l(B);j(J.$$.fragment,g),g.forEach(c),Y=x(f),q=r(f,"H4",{class:!0});var p=l(q);H=w(p,"Как мы это решили?"),p.forEach(c),M=x(f),y=r(f,"P",{});var C=l(y);A=w(C,"Благодаря нашей команде Back Office к июню мы снизили количество\n          документов до 1500, а в ноябре количество клиентов, ожидающих\n          верификации более 3 дней, стремится к нулю. Мы полностью решили\n          ситуацию с Jumio и работаем над добавлением второго поставщика услуг."),C.forEach(c),f.forEach(c),S=x(i),j(F.$$.fragment,i),i.forEach(c),this.h()},h(){o(e,"class","h2-wrap svelte-dvnjke"),o(m,"class","h4-title svelte-dvnjke"),o(B,"class","chart-wrap svelte-dvnjke"),o(q,"class","h4-title svelte-dvnjke"),o(h,"class","content svelte-dvnjke"),o(n,"class","flex svelte-dvnjke")},m(t,r){i(t,e,r),k(s,e,null),i(t,a,r),i(t,n,r),f(n,h),f(h,m),f(m,v),f(h,d),f(h,b),f(b,D),f(h,I),f(h,B),k(J,B,null),f(h,Y),f(h,q),f(q,H),f(h,M),f(h,y),f(y,A),f(n,S),k(F,n,null),N=!0},p:u,i(t){N||(C(s.$$.fragment,t),C(J.$$.fragment,t),C(F.$$.fragment,t),N=!0)},o(t){E(s.$$.fragment,t),E(J.$$.fragment,t),E(F.$$.fragment,t),N=!1},d(t){t&&c(e),L(s),t&&c(a),t&&c(n),L(J),L(F)}}}function N(t){let e,s,a;return s=new B({props:{$$slots:{default:[F]},$$scope:{ctx:t}}}),{c(){e=$("section"),V(s.$$.fragment),this.h()},l(t){e=r(t,"SECTION",{class:!0});var a=l(e);j(s.$$.fragment,a),a.forEach(c),this.h()},h(){o(e,"class","svelte-dvnjke")},m(t,n){i(t,e,n),k(s,e,null),a=!0},p(t,[e]){const a={};4&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a)},i(t){a||(C(s.$$.fragment,t),a=!0)},o(t){E(s.$$.fragment,t),a=!1},d(t){t&&c(e),L(s)}}}function P(t){const{francois:e}=J;return[e,{labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],values:[0,0,8e3,4e3,9500,1500,0,0,0,0,0,0]}]}class T extends t{constructor(t){super(),e(this,t,P,N,s,{})}}export{T as _};
