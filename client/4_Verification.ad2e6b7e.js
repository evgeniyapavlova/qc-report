import{S as t,i as e,s,D as a,E as n,j as r,k as l,d as c,p as o,F as h,r as i,u as f,z as m,n as u,G as $,f as g,g as p,h as v,H as d,l as w,o as x,t as b,b as C,B as E,C as D,y as I,c as V,a as L,m as B,e as J}from"./client.7872c9f7.js";import{L as O,p as K}from"./people.712f5811.js";import{H as Y}from"./H2_Text_Avatar.f73ebe66.js";import{C as j}from"./Chart.2e413632.js";function q(t){let e,s,$=[{width:"16"},{height:"36"},{viewBox:"0 0 16 36"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},t[0]],g={};for(let t=0;t<$.length;t+=1)g=a(g,$[t]);return{c(){e=n("svg"),s=n("path"),this.h()},l(t){e=r(t,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0},1);var a=l(e);s=r(a,"path",{d:!0,fill:!0},1),l(s).forEach(c),a.forEach(c),this.h()},h(){o(s,"d","M7.29289 35.7071C7.68342 36.0976 8.31658 36.0976 8.70711 35.7071L15.0711 29.3431C15.4616 28.9526 15.4616 28.3195 15.0711 27.9289C14.6805 27.5384 14.0474 27.5384 13.6569 27.9289L8 33.5858L2.34314 27.9289C1.95262 27.5384 1.31946 27.5384 0.928931 27.9289C0.538407 28.3195 0.538407 28.9526 0.928931 29.3431L7.29289 35.7071ZM7 -4.37114e-08L7 35L9 35L9 4.37114e-08L7 -4.37114e-08Z"),o(s,"fill","#E62334"),h(e,g)},m(t,a){i(t,e,a),f(e,s)},p(t,[s]){h(e,g=m($,[{width:"16"},{height:"36"},{viewBox:"0 0 16 36"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},1&s&&t[0]]))},i:u,o:u,d(t){t&&c(e)}}}function H(t,e,s){return t.$$set=t=>{s(0,e=a(a({},e),$(t)))},[e=$(e)]}class k extends t{constructor(t){super(),e(this,t,H,q,s,{})}}function M(t,e,s){const a=t.slice();return a[1]=e[s],a[3]=s,a}function y(t){let e,s,a,n,h,m,$,E,D,I=t[1].time+"",O=t[1].text+"",K=t[1].number&&function(t){let e,s,a=t[1].number+"";return{c(){e=g("div"),s=p(a),this.h()},l(t){e=r(t,"DIV",{class:!0});var n=l(e);s=w(n,a),n.forEach(c),this.h()},h(){o(e,"class","number svelte-1hp1gqb")},m(t,a){i(t,e,a),f(e,s)},p:u,d(t){t&&c(e)}}}(t),Y=t[3]!==t[0].length-1&&function(t){let e,s,a,n;return s=new k({}),{c(){e=g("div"),V(s.$$.fragment),a=v(),this.h()},l(t){e=r(t,"DIV",{class:!0});var n=l(e);L(s.$$.fragment,n),a=x(n),n.forEach(c),this.h()},h(){o(e,"class","arrow-wrap svelte-1hp1gqb")},m(t,r){i(t,e,r),B(s,e,null),f(e,a),n=!0},i(t){n||(b(s.$$.fragment,t),n=!0)},o(t){C(s.$$.fragment,t),n=!1},d(t){t&&c(e),J(s)}}}();return{c(){e=g("div"),s=p(I),a=v(),K&&K.c(),n=v(),h=g("div"),m=p(O),$=v(),Y&&Y.c(),E=d(),this.h()},l(t){e=r(t,"DIV",{class:!0});var o=l(e);s=w(o,I),o.forEach(c),a=x(t),K&&K.l(t),n=x(t),h=r(t,"DIV",{class:!0});var i=l(h);m=w(i,O),i.forEach(c),$=x(t),Y&&Y.l(t),E=d(),this.h()},h(){o(e,"class","time svelte-1hp1gqb"),o(h,"class","text svelte-1hp1gqb")},m(t,r){i(t,e,r),f(e,s),i(t,a,r),K&&K.m(t,r),i(t,n,r),i(t,h,r),f(h,m),i(t,$,r),Y&&Y.m(t,r),i(t,E,r),D=!0},p(t,e){t[1].number&&K.p(t,e)},i(t){D||(b(Y),D=!0)},o(t){C(Y),D=!1},d(t){t&&c(e),t&&c(a),K&&K.d(t),t&&c(n),t&&c(h),t&&c($),Y&&Y.d(t),t&&c(E)}}}function A(t){let e,s,a=t[0],n=[];for(let e=0;e<a.length;e+=1)n[e]=y(M(t,a,e));const h=t=>C(n[t],1,1,(()=>{n[t]=null}));return{c(){e=g("div");for(let t=0;t<n.length;t+=1)n[t].c();this.h()},l(t){e=r(t,"DIV",{class:!0});var s=l(e);for(let t=0;t<n.length;t+=1)n[t].l(s);s.forEach(c),this.h()},h(){o(e,"class","aside svelte-1hp1gqb")},m(t,a){i(t,e,a);for(let t=0;t<n.length;t+=1)n[t].m(e,null);s=!0},p(t,[s]){if(1&s){let r;for(a=t[0],r=0;r<a.length;r+=1){const l=M(t,a,r);n[r]?(n[r].p(l,s),b(n[r],1)):(n[r]=y(l),n[r].c(),b(n[r],1),n[r].m(e,null))}for(E(),r=a.length;r<n.length;r+=1)h(r);D()}},i(t){if(!s){for(let t=0;t<a.length;t+=1)b(n[t]);s=!0}},o(t){n=n.filter(Boolean);for(let t=0;t<n.length;t+=1)C(n[t]);s=!1},d(t){t&&c(e),I(n,t)}}}function S(t){return[[{time:"март 2020",text:"Jumio закрыл часть своих офисов"},{time:"конец марта 2020",number:"8 000",text:"кол-во клиентов, ожидающих верификации"},{time:"апрель 2020",number:"4 000",text:"смогли сократить"},{time:"май 2020",number:"9 500",text:"первая волна пандемии"},{time:"июнь 2020",number:"1 500",text:"команда  Backoffice снизила кол-во"},{time:"ноябрь 2020",number:"0",text:"кол-во клиентов, ожидающих верификации"}]]}class _ extends t{constructor(t){super(),e(this,t,S,A,s,{})}}function F(t){let e,s,a,n,h,m,$,d,E,D,I,O,K,q,H,k,M,y,A,S,F,N;return s=new Y({props:{h2:"Верификация новых пользователей <span>в эпоху COVID</span>",person:t[0],text:"Быстрая верификация — это важная часть удовлетворенности пользователей и их активности на платформе. Нам удалось сохранить высокую скорость верификации несмотря на челленджи эпохи COVID."}}),K=new j({props:{chartId:"ver-chart",data:t[1]}}),F=new _({}),{c(){e=g("div"),V(s.$$.fragment),a=v(),n=g("div"),h=g("div"),m=g("h4"),$=p("Что произошло?"),d=v(),E=g("p"),D=p("В марте 2020 года Jumio — наш основной поставщик автоматизированной\n          проверки документов KYC (Know Your Customer) — сильно пострадал от\n          кризиса COVID и закрыл часть своих офисов. Они не смогли оказывать нам\n          услуги с необходимой скоростью, это означало, что нам приходилось\n          проверять документы вручную. К концу марта количество документов KYC,\n          ожидающих проверки, взлетело до 8 000, к апрелю мы смогли сократить\n          его до 4000, а в мае количество документов вновь поднялось до 9500,\n          потому что первая волна пандемии принесла нам очень много клиентов."),I=v(),O=g("div"),V(K.$$.fragment),q=v(),H=g("h4"),k=p("Как мы это решили?"),M=v(),y=g("p"),A=p("Благодаря нашей команде Back Office к июню мы снизили количество\n          документов до 1500, а в ноябре количество клиентов, ожидающих\n          верификации более 3 дней, стремится к нулю. Мы полностью решили\n          ситуацию с Jumio и работаем над добавлением второго поставщика услуг."),S=v(),V(F.$$.fragment),this.h()},l(t){e=r(t,"DIV",{class:!0});var o=l(e);L(s.$$.fragment,o),o.forEach(c),a=x(t),n=r(t,"DIV",{class:!0});var i=l(n);h=r(i,"DIV",{class:!0});var f=l(h);m=r(f,"H4",{class:!0});var u=l(m);$=w(u,"Что произошло?"),u.forEach(c),d=x(f),E=r(f,"P",{});var g=l(E);D=w(g,"В марте 2020 года Jumio — наш основной поставщик автоматизированной\n          проверки документов KYC (Know Your Customer) — сильно пострадал от\n          кризиса COVID и закрыл часть своих офисов. Они не смогли оказывать нам\n          услуги с необходимой скоростью, это означало, что нам приходилось\n          проверять документы вручную. К концу марта количество документов KYC,\n          ожидающих проверки, взлетело до 8 000, к апрелю мы смогли сократить\n          его до 4000, а в мае количество документов вновь поднялось до 9500,\n          потому что первая волна пандемии принесла нам очень много клиентов."),g.forEach(c),I=x(f),O=r(f,"DIV",{class:!0});var p=l(O);L(K.$$.fragment,p),p.forEach(c),q=x(f),H=r(f,"H4",{class:!0});var v=l(H);k=w(v,"Как мы это решили?"),v.forEach(c),M=x(f),y=r(f,"P",{});var b=l(y);A=w(b,"Благодаря нашей команде Back Office к июню мы снизили количество\n          документов до 1500, а в ноябре количество клиентов, ожидающих\n          верификации более 3 дней, стремится к нулю. Мы полностью решили\n          ситуацию с Jumio и работаем над добавлением второго поставщика услуг."),b.forEach(c),f.forEach(c),S=x(i),L(F.$$.fragment,i),i.forEach(c),this.h()},h(){o(e,"class","h2-wrap svelte-53xwb9"),o(m,"class","h4-title svelte-53xwb9"),o(O,"class","chart-wrap svelte-53xwb9"),o(H,"class","h4-title svelte-53xwb9"),o(h,"class","content svelte-53xwb9"),o(n,"class","flex svelte-53xwb9")},m(t,r){i(t,e,r),B(s,e,null),i(t,a,r),i(t,n,r),f(n,h),f(h,m),f(m,$),f(h,d),f(h,E),f(E,D),f(h,I),f(h,O),B(K,O,null),f(h,q),f(h,H),f(H,k),f(h,M),f(h,y),f(y,A),f(n,S),B(F,n,null),N=!0},p:u,i(t){N||(b(s.$$.fragment,t),b(K.$$.fragment,t),b(F.$$.fragment,t),N=!0)},o(t){C(s.$$.fragment,t),C(K.$$.fragment,t),C(F.$$.fragment,t),N=!1},d(t){t&&c(e),J(s),t&&c(a),t&&c(n),J(K),J(F)}}}function N(t){let e,s,a;return s=new O({props:{$$slots:{default:[F]},$$scope:{ctx:t}}}),{c(){e=g("section"),V(s.$$.fragment),this.h()},l(t){e=r(t,"SECTION",{class:!0});var a=l(e);L(s.$$.fragment,a),a.forEach(c),this.h()},h(){o(e,"class","svelte-53xwb9")},m(t,n){i(t,e,n),B(s,e,null),a=!0},p(t,[e]){const a={};4&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a)},i(t){a||(b(s.$$.fragment,t),a=!0)},o(t){C(s.$$.fragment,t),a=!1},d(t){t&&c(e),J(s)}}}function P(t){const{francois:e}=K;return[e,{labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],values:[0,0,8e3,4e3,9500,1500,0,0,0,0,0,0]}]}class T extends t{constructor(t){super(),e(this,t,P,N,s,{})}}export{T as _};
