!function(){"use strict";const s=1608449158350,a=`cache${s}`,e=["/client/client.3cd8a584.js","/client/inject_styles.5607aec6.js","/client/index.04f8155b.js","/client/4_b2b.4cc66925.js","/client/people.0a8b5da6.js","/client/DevelopmentB2B.a3257da5.js","/client/H2_Text_Avatar.148212ec.js","/client/Tags.766532ab.js","/client/3_4.7de369a3.js","/client/4_Verification.5b9916dc.js","/client/Chart.a990ab27.js","/client/Chart.554f580b.js","/client/index.a83de188.js","/client/2_Quarters.b0bf32f1.js","/client/1_Intro.177b826f.js","/client/4_Team.174519fe.js","/client/Page.95fedcc4.js","/client/Col2.1cccf957.js","/client/LineNumberItem.c9375c91.js","/client/2_margin_forex.09485503.js","/client/1_ebitda.c6324aff.js","/client/3_mau.da32f74c.js","/client/ru.334df51e.js"].concat(["/service-worker-index.html","/.DS_Store","/assets/.DS_Store","/assets/avatars/.DS_Store","/assets/avatars/bolotov.jpg","/assets/avatars/david.jpg","/assets/avatars/francois.jpg","/assets/avatars/gitsis.jpg","/assets/avatars/golubev.jpg","/assets/avatars/kokh.jpg","/assets/avatars/kulik.jpg","/assets/avatars/kutkova.jpg","/assets/avatars/lopez.jpg","/assets/avatars/nescheret.jpg","/assets/avatars/pachko.jpg","/assets/avatars/rabinovich.jpg","/assets/avatars/rentoumis.jpg","/assets/avatars/tychenko.jpg","/assets/b2b/.DS_Store","/assets/b2b/banking.jpg","/assets/b2b/banking1.jpg","/assets/b2b/banking2.jpg","/assets/b2b/banking3.jpg","/assets/b2b/goal1.jpg","/assets/b2b/goal2.jpg","/assets/b2b/goal3.jpg","/assets/b2b/goal4.jpg","/assets/b2b/laptop.jpg","/assets/b2b/liquidity.jpg","/assets/b2b/saas.jpg","/assets/b2b/saas1.jpg","/assets/b2b/saas2.jpg","/assets/b2b/saas3.jpg","/assets/b2b/saas4.jpg","/assets/b2b/stage1.jpg","/assets/b2b/stage2.jpg","/assets/b2b/stage3.jpg","/assets/countries/.DS_Store","/assets/countries/africa.jpg","/assets/countries/asia.jpg","/assets/countries/australia.jpg","/assets/countries/china.jpg","/assets/countries/europe.jpg","/assets/countries/latam.jpg","/assets/emoji/emoji1.jpg","/assets/emoji/emoji2.jpg","/assets/emoji/emoji3.jpg","/assets/emoji/emoji4.jpg","/assets/favicons/.DS_Store","/assets/favicons/apple-touch-icon.png","/assets/favicons/favicon-16x16.png","/assets/favicons/favicon-32x32.png","/assets/favicons/logo192.png","/assets/favicons/logo512.png","/assets/fonts/proximanova-bold.woff2","/assets/fonts/proximanova-medium.woff2","/assets/fonts/proximanova-regular.woff2","/assets/intro/2020.jpg","/assets/intro/cube1.jpg","/assets/intro/cube1.png","/assets/intro/cube2.jpg","/assets/intro/cube2.png","/assets/intro/cube3.jpg","/assets/intro/cube3.png","/assets/intro/cube4.jpg","/assets/intro/cube4.png","/assets/logo/iq_broker_logo_round.svg","/assets/logo/iq_option_logo_round.svg","/assets/margin_forex/.DS_Store","/assets/margin_forex/bubble_left.jpg","/assets/margin_forex/bubble_right.jpg","/assets/margin_forex/margin_mockup.jpg","/assets/mau/.DS_Store","/assets/mau/best_landing.png","/assets/mau/map.jpg","/assets/mau/map_mobile.jpg","/assets/mau/new_aff_prog.gif","/assets/mau/new_aff_prog.png","/assets/mau/pie-chart.jpg","/assets/svg/arrow-h.svg","/assets/svg/arrow.svg","/global.css","/manifest.json"]),t=new Set(e);self.addEventListener("install",(s=>{s.waitUntil(caches.open(a).then((s=>s.addAll(e))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(s=>{s.waitUntil(caches.keys().then((async s=>{for(const e of s)e!==a&&await caches.delete(e);self.clients.claim()})))})),self.addEventListener("fetch",(a=>{if("GET"!==a.request.method||a.request.headers.has("range"))return;const e=new URL(a.request.url),n=e.protocol.startsWith("http"),o=e.hostname===self.location.hostname&&e.port!==self.location.port,i=e.host===self.location.host&&t.has(e.pathname),c="only-if-cached"===a.request.cache&&!i;!n||o||c||a.respondWith((async()=>i&&await caches.match(a.request)||async function(a){const e=await caches.open(`offline${s}`);try{const s=await fetch(a);return e.put(a,s.clone()),s}catch(s){const t=await e.match(a);if(t)return t;throw s}}(a.request))())}))}();