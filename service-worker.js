!function(){"use strict";const s=1609232643083,a=`cache${s}`,t=["/client/client.65eea94b.js","/client/inject_styles.5607aec6.js","/client/index.32935ee3.js","/client/4_b2b.c62da96f.js","/client/people.8606d804.js","/client/DevelopmentB2B.429653b4.js","/client/3_4.e58dd2b8.js","/client/4_Verification.2975450b.js","/client/en.a6a30eae.js","/client/Section_9_Gratitude.15b116e6.js","/client/ru.a57fd51a.js"].concat(["/service-worker-index.html","/.DS_Store","/assets/.DS_Store","/assets/avatars/.DS_Store","/assets/avatars/abdukarimova.jpg","/assets/avatars/bezrodnaya.jpg","/assets/avatars/bolotov.jpg","/assets/avatars/bykova.jpg","/assets/avatars/david.jpg","/assets/avatars/dubov.jpg","/assets/avatars/dudukina.jpg","/assets/avatars/francois.jpg","/assets/avatars/galak.jpg","/assets/avatars/gitsis.jpg","/assets/avatars/golikov.jpg","/assets/avatars/golubev.jpg","/assets/avatars/ivanov.jpg","/assets/avatars/kertling.jpg","/assets/avatars/khimchenko.jpg","/assets/avatars/kokh.jpg","/assets/avatars/kuklina.jpg","/assets/avatars/kulik.jpg","/assets/avatars/kurbatov.jpg","/assets/avatars/kutkova.jpg","/assets/avatars/kvashnin.jpg","/assets/avatars/laskin.jpg","/assets/avatars/latokhin.jpg","/assets/avatars/lopez.jpg","/assets/avatars/mikhaylova.jpg","/assets/avatars/nescheret.jpg","/assets/avatars/pachko.jpg","/assets/avatars/rabinovich.jpg","/assets/avatars/rentoumis.jpg","/assets/avatars/romashkina.jpg","/assets/avatars/samburova.jpg","/assets/avatars/taklalsingh.jpg","/assets/avatars/terekhova.jpg","/assets/avatars/tychenko.jpg","/assets/avatars/votintsev.jpg","/assets/avatars/zaytseva.jpg","/assets/avatars/zhdanovskaya.jpg","/assets/b2b/.DS_Store","/assets/b2b/banking.jpg","/assets/b2b/banking1.jpg","/assets/b2b/banking2.jpg","/assets/b2b/banking3.jpg","/assets/b2b/goal1.jpg","/assets/b2b/goal2.jpg","/assets/b2b/goal3.jpg","/assets/b2b/goal4.jpg","/assets/b2b/laptop.jpg","/assets/b2b/liquidity.jpg","/assets/b2b/saas.jpg","/assets/b2b/saas1.jpg","/assets/b2b/saas2.jpg","/assets/b2b/saas3.jpg","/assets/b2b/saas4.jpg","/assets/b2b/stage1.jpg","/assets/b2b/stage2.jpg","/assets/b2b/stage3.jpg","/assets/countries/.DS_Store","/assets/countries/africa.jpg","/assets/countries/asia.jpg","/assets/countries/australia.jpg","/assets/countries/china.jpg","/assets/countries/europe.jpg","/assets/countries/latam.jpg","/assets/emoji/emoji1.jpg","/assets/emoji/emoji2.jpg","/assets/emoji/emoji3.jpg","/assets/emoji/emoji4.jpg","/assets/favicons/.DS_Store","/assets/favicons/apple-touch-icon.png","/assets/favicons/favicon-16x16.png","/assets/favicons/favicon-32x32.png","/assets/favicons/logo192.png","/assets/favicons/logo512.png","/assets/fonts/proximanova-bold.woff2","/assets/fonts/proximanova-medium.woff2","/assets/fonts/proximanova-regular.woff2","/assets/intro/2020.jpg","/assets/intro/cube1.jpg","/assets/intro/cube1.png","/assets/intro/cube2.jpg","/assets/intro/cube2.png","/assets/intro/cube3.jpg","/assets/intro/cube3.png","/assets/intro/cube4.jpg","/assets/intro/cube4.png","/assets/it/.DS_Store","/assets/it/amaiz.jpg","/assets/it/img1.jpg","/assets/it/img2.jpg","/assets/it/img3.jpg","/assets/it/img4.jpg","/assets/it/img5.jpg","/assets/it/img6.jpg","/assets/it/map.jpg","/assets/it/map_small.jpg","/assets/it/portfolio.jpg","/assets/logo/iq_broker_logo_round.svg","/assets/logo/iq_option_logo_round.svg","/assets/management/operation_graphs_1.jpg","/assets/management/operation_graphs_2.jpg","/assets/management/phone.jpg","/assets/margin_forex/.DS_Store","/assets/margin_forex/bubble_left.jpg","/assets/margin_forex/bubble_right.jpg","/assets/margin_forex/margin_mockup.jpg","/assets/mau/.DS_Store","/assets/mau/best_landing.png","/assets/mau/map.jpg","/assets/mau/map_mobile.jpg","/assets/mau/new_aff_prog.gif","/assets/mau/new_aff_prog.png","/assets/mau/pie-chart.jpg","/assets/photos/.DS_Store","/assets/photos/office_team/.DS_Store","/assets/photos/office_team/1.jpg","/assets/photos/office_team/10.jpg","/assets/photos/office_team/11.jpg","/assets/photos/office_team/12.jpg","/assets/photos/office_team/13.jpg","/assets/photos/office_team/14.jpg","/assets/photos/office_team/15.jpg","/assets/photos/office_team/2.jpg","/assets/photos/office_team/3.jpg","/assets/photos/office_team/4.jpg","/assets/photos/office_team/5.jpg","/assets/photos/office_team/6.jpg","/assets/photos/office_team/7.jpg","/assets/photos/office_team/8.jpg","/assets/photos/office_team/9.jpg","/assets/photos/office_team/thumbnails/.DS_Store","/assets/photos/office_team/thumbnails/1.jpg","/assets/photos/office_team/thumbnails/10.jpg","/assets/photos/office_team/thumbnails/11.jpg","/assets/photos/office_team/thumbnails/12.jpg","/assets/photos/office_team/thumbnails/13.jpg","/assets/photos/office_team/thumbnails/14.jpg","/assets/photos/office_team/thumbnails/15.jpg","/assets/photos/office_team/thumbnails/2.jpg","/assets/photos/office_team/thumbnails/3.jpg","/assets/photos/office_team/thumbnails/4.jpg","/assets/photos/office_team/thumbnails/5.jpg","/assets/photos/office_team/thumbnails/6.jpg","/assets/photos/office_team/thumbnails/7.jpg","/assets/photos/office_team/thumbnails/8.jpg","/assets/photos/office_team/thumbnails/9.jpg","/assets/photos/rwanda/.DS_Store","/assets/photos/rwanda/1.jpg","/assets/photos/rwanda/10.jpg","/assets/photos/rwanda/11.jpg","/assets/photos/rwanda/12.jpg","/assets/photos/rwanda/13.jpg","/assets/photos/rwanda/2.jpg","/assets/photos/rwanda/3.jpg","/assets/photos/rwanda/4.jpg","/assets/photos/rwanda/5.jpg","/assets/photos/rwanda/6.jpg","/assets/photos/rwanda/7.jpg","/assets/photos/rwanda/8.jpg","/assets/photos/rwanda/9.jpg","/assets/photos/rwanda/thumbnails/.DS_Store","/assets/photos/rwanda/thumbnails/1.jpg","/assets/photos/rwanda/thumbnails/10.jpg","/assets/photos/rwanda/thumbnails/11.jpg","/assets/photos/rwanda/thumbnails/12.jpg","/assets/photos/rwanda/thumbnails/13.jpg","/assets/photos/rwanda/thumbnails/2.jpg","/assets/photos/rwanda/thumbnails/3.jpg","/assets/photos/rwanda/thumbnails/4.jpg","/assets/photos/rwanda/thumbnails/5.jpg","/assets/photos/rwanda/thumbnails/6.jpg","/assets/photos/rwanda/thumbnails/7.jpg","/assets/photos/rwanda/thumbnails/8.jpg","/assets/photos/rwanda/thumbnails/9.jpg","/assets/responsibility/map_large.jpg","/assets/responsibility/map_small.jpg","/assets/responsibility/python_ipad.jpg","/assets/svg/arrow-h.svg","/assets/svg/arrow.svg","/global.css","/manifest.json"]),e=new Set(t);self.addEventListener("install",(s=>{s.waitUntil(caches.open(a).then((s=>s.addAll(t))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(s=>{s.waitUntil(caches.keys().then((async s=>{for(const t of s)t!==a&&await caches.delete(t);self.clients.claim()})))})),self.addEventListener("fetch",(a=>{if("GET"!==a.request.method||a.request.headers.has("range"))return;const t=new URL(a.request.url),o=t.protocol.startsWith("http"),p=t.hostname===self.location.hostname&&t.port!==self.location.port,i=t.host===self.location.host&&e.has(t.pathname),n="only-if-cached"===a.request.cache&&!i;!o||p||n||a.respondWith((async()=>i&&await caches.match(a.request)||async function(a){const t=await caches.open(`offline${s}`);try{const s=await fetch(a);return t.put(a,s.clone()),s}catch(s){const e=await t.match(a);if(e)return e;throw s}}(a.request))())}))}();
