function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e,n,r){if(t){const o=a(t,e,n,r);return t[0](o)}}function a(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function f(t,e,n,r,o,s,i){const c=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(c){const o=a(e,n,r,i);t.p(o,c)}}function l(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function u(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function m(t){return document.createElement(t)}function g(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function _(t){return document.createTextNode(t)}function $(){return _(" ")}function y(){return _("")}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t,e){for(const n in e)b(t,n,e[n])}function S(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function E(t){return Array.from(t.childNodes)}function x(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?g(e):m(e)}function w(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return _(e)}function P(t){return w(t," ")}function N(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function j(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function R(t,e=document.body){return Array.from(e.querySelectorAll(t))}let A;function C(t){A=t}function O(){if(!A)throw new Error("Function called outside component initialization");return A}function I(t){O().$$.on_mount.push(t)}const T=[],k=[],L=[],q=[],J=Promise.resolve();let U=!1;function B(t){L.push(t)}let K=!1;const D=new Set;function H(){if(!K){K=!0;do{for(let t=0;t<T.length;t+=1){const e=T[t];C(e),M(e.$$)}for(C(null),T.length=0;k.length;)k.pop()();for(let t=0;t<L.length;t+=1){const e=L[t];D.has(e)||(D.add(e),e())}L.length=0}while(T.length);for(;q.length;)q.pop()();U=!1,K=!1,D.clear()}}function M(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}const V=new Set;let z;function F(){z={r:0,c:[],p:z}}function G(){z.r||o(z.c),z=z.p}function Y(t,e){t&&t.i&&(V.delete(t),t.i(e))}function W(t,e,n,r){if(t&&t.o){if(V.has(t))return;V.add(t),z.c.push((()=>{V.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function X(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const i=t[s],c=e[s];if(c){for(const t in i)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in i)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function Q(t){return"object"==typeof t&&null!==t?t:{}}function Z(t){t&&t.c()}function tt(t,e){t&&t.l(e)}function et(t,e,r){const{fragment:i,on_mount:c,on_destroy:a,after_update:f}=t.$$;i&&i.m(e,r),B((()=>{const e=c.map(n).filter(s);a?a.push(...e):o(e),t.$$.on_mount=[]})),f.forEach(B)}function nt(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function rt(t,e){-1===t.$$.dirty[0]&&(T.push(t),U||(U=!0,J.then(H)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ot(e,n,s,i,c,a,f=[-1]){const l=A;C(e);const u=n.props||{},p=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:r(),dirty:f,skip_bound:!1};let h=!1;if(p.ctx=s?s(e,u,((t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),h&&rt(e,t)),n})):[],p.update(),h=!0,o(p.before_update),p.fragment=!!i&&i(p.ctx),n.target){if(n.hydrate){const t=E(n.target);p.fragment&&p.fragment.l(t),t.forEach(d)}else p.fragment&&p.fragment.c();n.intro&&Y(e.$$.fragment),et(e,n.target,n.anchor),H()}C(l)}class st{$destroy(){nt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const it=[];function ct(e,n=t){let r;const o=[];function s(t){if(i(e,t)&&(e=t,r)){const t=!it.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),it.push(n,e)}if(t){for(let t=0;t<it.length;t+=2)it[t][0](it[t+1]);it.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(i,c=t){const a=[i,c];return o.push(a),1===o.length&&(r=n(s)||t),i(e),()=>{const t=o.indexOf(a);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const at={};function ft(t){let e;const n=t[1].default,r=c(n,t,t[0],null);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,n){r&&r.m(t,n),e=!0},p(t,[e]){r&&r.p&&1&e&&f(r,n,t,t[0],e,null,null)},i(t){e||(Y(r,t),e=!0)},o(t){W(r,t),e=!1},d(t){r&&r.d(t)}}}function lt(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class ut extends st{constructor(t){super(),ot(this,t,lt,ft,i,{})}}function pt(t){let e,n,r=t[1].stack+"";return{c(){e=m("pre"),n=_(r)},l(t){e=x(t,"PRE",{});var o=E(e);n=w(o,r),o.forEach(d)},m(t,r){p(t,e,r),u(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&N(n,r)},d(t){t&&d(e)}}}function dt(e){let n,r,o,s,i,c,a,f,l,h=e[1].message+"";document.title=n=e[0];let g=e[2]&&e[1].stack&&pt(e);return{c(){r=$(),o=m("h1"),s=_(e[0]),i=$(),c=m("p"),a=_(h),f=$(),g&&g.c(),l=y(),this.h()},l(t){R('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(d),r=P(t),o=x(t,"H1",{class:!0});var n=E(o);s=w(n,e[0]),n.forEach(d),i=P(t),c=x(t,"P",{class:!0});var u=E(c);a=w(u,h),u.forEach(d),f=P(t),g&&g.l(t),l=y(),this.h()},h(){b(o,"class","svelte-8od9u6"),b(c,"class","svelte-8od9u6")},m(t,e){p(t,r,e),p(t,o,e),u(o,s),p(t,i,e),p(t,c,e),u(c,a),p(t,f,e),g&&g.m(t,e),p(t,l,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&N(s,t[0]),2&e&&h!==(h=t[1].message+"")&&N(a,h),t[2]&&t[1].stack?g?g.p(t,e):(g=pt(t),g.c(),g.m(l.parentNode,l)):g&&(g.d(1),g=null)},i:t,o:t,d(t){t&&d(r),t&&d(o),t&&d(i),t&&d(c),t&&d(f),g&&g.d(t),t&&d(l)}}}function ht(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}class mt extends st{constructor(t){super(),ot(this,t,ht,dt,i,{status:0,error:1})}}function gt(t){let n,r,o;const s=[t[4].props];var i=t[4].component;function c(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return i&&(n=new i(c())),{c(){n&&Z(n.$$.fragment),r=y()},l(t){n&&tt(n.$$.fragment,t),r=y()},m(t,e){n&&et(n,t,e),p(t,r,e),o=!0},p(t,e){const o=16&e?X(s,[Q(t[4].props)]):{};if(i!==(i=t[4].component)){if(n){F();const t=n;W(t.$$.fragment,1,0,(()=>{nt(t,1)})),G()}i?(n=new i(c()),Z(n.$$.fragment),Y(n.$$.fragment,1),et(n,r.parentNode,r)):n=null}else i&&n.$set(o)},i(t){o||(n&&Y(n.$$.fragment,t),o=!0)},o(t){n&&W(n.$$.fragment,t),o=!1},d(t){t&&d(r),n&&nt(n,t)}}}function _t(t){let e,n;return e=new mt({props:{error:t[0],status:t[1]}}),{c(){Z(e.$$.fragment)},l(t){tt(e.$$.fragment,t)},m(t,r){et(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(Y(e.$$.fragment,t),n=!0)},o(t){W(e.$$.fragment,t),n=!1},d(t){nt(e,t)}}}function $t(t){let e,n,r,o;const s=[_t,gt],i=[];function c(t,e){return t[0]?0:1}return e=c(t),n=i[e]=s[e](t),{c(){n.c(),r=y()},l(t){n.l(t),r=y()},m(t,n){i[e].m(t,n),p(t,r,n),o=!0},p(t,o){let a=e;e=c(t),e===a?i[e].p(t,o):(F(),W(i[a],1,1,(()=>{i[a]=null})),G(),n=i[e],n?n.p(t,o):(n=i[e]=s[e](t),n.c()),Y(n,1),n.m(r.parentNode,r))},i(t){o||(Y(n),o=!0)},o(t){W(n),o=!1},d(t){i[e].d(t),t&&d(r)}}}function yt(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[$t]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new ut({props:s}),{c(){Z(n.$$.fragment)},l(t){tt(n.$$.fragment,t)},m(t,e){et(n,t,e),r=!0},p(t,[e]){const r=12&e?X(o,[4&e&&{segment:t[2][0]},8&e&&Q(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(Y(n.$$.fragment,t),r=!0)},o(t){W(n.$$.fragment,t),r=!1},d(t){nt(n,t)}}}function bt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:i}=e,{level0:c}=e,{level1:a=null}=e,{notify:f}=e;var l,u,p;return l=f,O().$$.after_update.push(l),u=at,p=r,O().$$.context.set(u,p),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,a=t.level1),"notify"in t&&n(6,f=t.notify)},[o,s,i,c,a,r,f]}class vt extends st{constructor(t){super(),ot(this,t,bt,yt,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const St=[],Et=[{js:()=>Promise.all([import("./index.ca5a796d.js"),__inject_styles(["client-ce24e246.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./4_b2b.82e213c7.js"),__inject_styles(["client-ce24e246.css","DevelopmentB2B-e217b775.css","people-ce36531d.css","Tags-be01d274.css","H2_Text_Avatar-352acfc4.css","4_b2b-0dc60160.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./3_4.cbd519ed.js"),__inject_styles(["client-ce24e246.css","people-ce36531d.css","H2_Text_Avatar-352acfc4.css","4_Verification-04717138.css","3_4-0a40647b.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.aff200cb.js"),__inject_styles(["client-ce24e246.css","DevelopmentB2B-e217b775.css","people-ce36531d.css","Tags-be01d274.css","H2_Text_Avatar-352acfc4.css","4_Verification-04717138.css","Col2-b9511a7d.css","LineNumberItem-f5c12d52.css","2_Quarters-62f05e2e.css","1_Intro-f849ac83.css","4_Team-87271225.css","index-f889850b.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./2_margin_forex.daba912c.js"),__inject_styles(["client-ce24e246.css","people-ce36531d.css","Tags-be01d274.css","Col2-b9511a7d.css","1_Intro-f849ac83.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./1_ebitda.16cadc3a.js"),__inject_styles(["client-ce24e246.css","people-ce36531d.css","Col2-b9511a7d.css","LineNumberItem-f5c12d52.css","2_Quarters-62f05e2e.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./3_mau.d0b5a9dd.js"),__inject_styles(["client-ce24e246.css","people-ce36531d.css","Tags-be01d274.css","H2_Text_Avatar-352acfc4.css","4_Verification-04717138.css","Col2-b9511a7d.css","LineNumberItem-f5c12d52.css","4_Team-87271225.css"])]).then((function(t){return t[0]}))}],xt=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/4_b2b\/?$/,parts:[{i:1}]},{pattern:/^\/3_4\/?$/,parts:[{i:2}]},{pattern:/^\/ru\/?$/,parts:[{i:3}]},{pattern:/^\/ru\/2_margin_forex\/?$/,parts:[null,{i:4}]},{pattern:/^\/ru\/1_ebitda\/?$/,parts:[null,{i:5}]},{pattern:/^\/ru\/3_mau\/?$/,parts:[null,{i:6}]}];
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function wt(t,e,n,r){return new(n||(n=Promise))((function(o,s){function i(t){try{a(r.next(t))}catch(t){s(t)}}function c(t){try{a(r.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,c)}a((r=r.apply(t,e||[])).next())}))}function Pt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let Nt,jt=1;const Rt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},At={};let Ct,Ot;function It(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach((t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r})),e}function Tt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Ct))return null;let e=t.pathname.slice(Ct.length);if(""===e&&(e="/"),!St.some((t=>t.test(e))))for(let n=0;n<xt.length;n+=1){const r=xt[n],o=r.pattern.exec(e);if(o){const n=It(t.search),s=r.parts[r.parts.length-1],i=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:i};return{href:t.href,route:r,match:o,page:c}}}}function kt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=Pt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Tt(o);if(s){Jt(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),Rt.pushState({id:Nt},"",o.href)}}function Lt(){return{x:pageXOffset,y:pageYOffset}}function qt(t){if(At[Nt]=Lt(),t.state){const e=Tt(new URL(location.href));e?Jt(e,t.state.id):location.href=location.href}else jt=jt+1,function(t){Nt=t}(jt),Rt.replaceState({id:Nt},"",location.href)}function Jt(t,e,n,r){return wt(this,void 0,void 0,(function*(){const o=!!e;if(o)Nt=e;else{const t=Lt();At[Nt]=t,Nt=e=++jt,At[Nt]=n?t:{x:0,y:0}}if(yield Ot(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=At[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),At[Nt]=n,o||t?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Ut(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Bt,Kt=null;function Dt(t){const e=Pt(t.target);e&&"prefetch"===e.rel&&function(t){const e=Tt(new URL(t,Ut(document)));if(e)Kt&&t===Kt.href||(Kt={href:t,promise:se(e)}),Kt.promise}(e.href)}function Ht(t){clearTimeout(Bt),Bt=setTimeout((()=>{Dt(t)}),20)}function Mt(t,e={noscroll:!1,replaceState:!1}){const n=Tt(new URL(t,Ut(document)));return n?(Rt[e.replaceState?"replaceState":"pushState"]({id:Nt},"",t),Jt(n,null,e.noscroll)):(location.href=t,new Promise((()=>{})))}const Vt="undefined"!=typeof __SAPPER__&&__SAPPER__;let zt,Ft,Gt,Yt=!1,Wt=[],Xt="{}";const Qt={page:function(t){const e=ct(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:ct(null),session:ct(Vt&&Vt.session)};let Zt,te,ee;function ne(t,e){const{error:n}=t;return Object.assign({error:n},e)}function re(t){return wt(this,void 0,void 0,(function*(){zt&&Qt.preloading.set(!0);const e=function(t){return Kt&&Kt.href===t.href?Kt.promise:se(t)}(t),n=Ft={},r=yield e,{redirect:o}=r;if(n===Ft)if(o)yield Mt(o.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield oe(n,e,ne(e,t.page))}}))}function oe(t,e,n){return wt(this,void 0,void 0,(function*(){Qt.page.set(n),Qt.preloading.set(!1),zt?zt.$set(e):(e.stores={page:{subscribe:Qt.page.subscribe},preloading:{subscribe:Qt.preloading.subscribe},session:Qt.session},e.level0={props:yield Gt},e.notify=Qt.page.notify,zt=new vt({target:ee,props:e,hydrate:!0})),Wt=t,Xt=JSON.stringify(n.query),Yt=!0,te=!1}))}function se(t){return wt(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!Gt){const t=()=>({});Gt=Vt.preloaded[0]||t.call(i,{host:n.host,path:n.path,query:n.query,params:{}},Zt)}let c,a=1;try{const o=JSON.stringify(n.query),f=e.pattern.exec(n.path);let l=!1;c=yield Promise.all(e.parts.map(((e,c)=>wt(this,void 0,void 0,(function*(){const u=r[c];if(function(t,e,n,r){if(r!==Xt)return!0;const o=Wt[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,u,f,o)&&(l=!0),s.segments[a]=r[c+1],!e)return{segment:u};const p=a++;if(!te&&!l&&Wt[c]&&Wt[c].part===e.i)return Wt[c];l=!1;const{default:d,preload:h}=yield Et[e.i].js();let m;return m=Yt||!Vt.preloaded[c+1]?h?yield h.call(i,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Zt):{}:Vt.preloaded[c+1],s[`level${p}`]={component:d,props:m,segment:u,match:f,part:e.i}})))))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}))}var ie,ce,ae;Qt.session.subscribe((t=>wt(void 0,void 0,void 0,(function*(){if(Zt=t,!Yt)return;te=!0;const e=Tt(new URL(location.href)),n=Ft={},{redirect:r,props:o,branch:s}=yield se(e);n===Ft&&(r?yield Mt(r.location,{replaceState:!0}):yield oe(s,o,ne(o,e.page)))})))),ie={target:document.querySelector("#sapper")},ce=ie.target,ee=ce,ae=Vt.baseUrl,Ct=ae,Ot=re,"scrollRestoration"in Rt&&(Rt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{Rt.scrollRestoration="auto"})),addEventListener("load",(()=>{Rt.scrollRestoration="manual"})),addEventListener("click",kt),addEventListener("popstate",qt),addEventListener("touchstart",Dt),addEventListener("mousemove",Ht),Vt.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:o,status:s,error:i}=Vt;Gt||(Gt=o&&o[0]);const c={error:i,status:s,session:r,level0:{props:Gt},level1:{props:{status:s,error:i},component:mt},segments:o},a=It(n);oe([],c,{host:t,path:e,query:a,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;Rt.replaceState({id:jt},"",e);const n=Tt(new URL(location.href));if(n)return Jt(n,jt,!0,t)}));export{Q as A,F as B,G as C,e as D,g as E,v as F,l as G,y as H,I,S as J,j as K,st as S,tt as a,W as b,Z as c,d,nt as e,m as f,_ as g,$ as h,ot as i,x as j,E as k,w as l,et as m,t as n,P as o,b as p,R as q,p as r,i as s,Y as t,u,c as v,f as w,N as x,h as y,X as z};

import __inject_styles from './inject_styles.5607aec6.js';