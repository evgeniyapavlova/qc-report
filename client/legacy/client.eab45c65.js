function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(n)}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,n,e){return t(e={path:n,exports:{},require:function(t,n){return r(null==n&&e.path)}},e.exports),e.exports}function r(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var o=e((function(n){var e=function(n){var e,r=Object.prototype,o=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{s({},"")}catch(t){s=function(t,n,e){return t[n]=e}}function f(t,n,e,r){var o=n&&n.prototype instanceof y?n:y,a=Object.create(o.prototype),i=new j(r||[]);return a._invoke=function(t,n,e){var r=h;return function(o,a){if(r===d)throw new Error("Generator is already running");if(r===v){if("throw"===o)throw a;return A()}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var u=k(i,e);if(u){if(u===m)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===h)throw r=v,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=d;var c=l(t,n,e);if("normal"===c.type){if(r=e.done?v:p,c.arg===m)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(r=v,e.method="throw",e.arg=c.arg)}}}(t,e,i),a}function l(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=f;var h="suspendedStart",p="suspendedYield",d="executing",v="completed",m={};function y(){}function g(){}function b(){}var w={};w[i]=function(){return this};var _=Object.getPrototypeOf,$=_&&_(_(P([])));$&&$!==r&&o.call($,i)&&(w=$);var x=b.prototype=y.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(n){s(t,n,(function(t){return this._invoke(n,t)}))}))}function S(n,e){function r(a,i,u,c){var s=l(n[a],n,i);if("throw"!==s.type){var f=s.arg,h=f.value;return h&&"object"===t(h)&&o.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,u,c)}),(function(t){r("throw",t,u,c)})):e.resolve(h).then((function(t){f.value=t,u(f)}),(function(t){return r("throw",t,u,c)}))}c(s.arg)}var a;this._invoke=function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}}function k(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,k(t,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,m;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function L(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function O(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function P(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function n(){for(;++r<t.length;)if(o.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:A}}function A(){return{value:e,done:!0}}return g.prototype=x.constructor=b,b.constructor=g,g.displayName=s(b,c,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===g||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},n.awrap=function(t){return{__await:t}},E(S.prototype),S.prototype[u]=function(){return this},n.AsyncIterator=S,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var i=new S(f(t,e,r,o),a);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(x),s(x,c,"Generator"),x[i]=function(){return this},x.toString=function(){return"[object Generator]"},n.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=P,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,o){return u.type="throw",u.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=n&&n<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=n,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),m},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),m}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:P(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),m}},n}(n.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}));function a(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function i(t,n){if(t){if("string"==typeof t)return a(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(t,n):void 0}}function u(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var e=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(e.push(i.value),!n||e.length!==n);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return e}}(t,n)||i(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,n){return(s=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function f(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&s(t,n)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(n,e){return!e||"object"!==t(e)&&"function"!=typeof e?l(n):e}function p(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=c(t);if(n){var o=c(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return h(this,e)}}function d(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||i(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function m(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function y(t,n,e){return n&&m(t.prototype,n),e&&m(t,e),t}function g(){}var b=function(t){return t};function w(t,n){for(var e in n)t[e]=n[e];return t}function _(t){return t()}function $(){return Object.create(null)}function x(t){t.forEach(_)}function E(t){return"function"==typeof t}function S(n,e){return n!=n?e==e:n!==e||n&&"object"===t(n)||"function"==typeof n}function k(t,n,e,r){if(t){var o=L(t,n,e,r);return t[0](o)}}function L(t,n,e,r){return t[1]&&r?w(e.ctx.slice(),t[1](r(n))):e.ctx}function O(n,e,r,o,a,i,u){var c=function(n,e,r,o){if(n[2]&&o){var a=n[2](o(r));if(void 0===e.dirty)return a;if("object"===t(a)){for(var i=[],u=Math.max(e.dirty.length,a.length),c=0;c<u;c+=1)i[c]=e.dirty[c]|a[c];return i}return e.dirty|a}return e.dirty}(e,o,a,i);if(c){var s=L(e,r,o,u);n.p(s,c)}}function j(t){var n={};for(var e in t)"$"!==e[0]&&(n[e]=t[e]);return n}function P(t){return null==t?"":t}function A(t){return t&&E(t.destroy)?t.destroy:g}var R="undefined"!=typeof window,N=R?function(){return window.performance.now()}:function(){return Date.now()},T=R?function(t){return requestAnimationFrame(t)}:g,C=new Set;function I(t){C.forEach((function(n){n.c(t)||(C.delete(n),n.f())})),0!==C.size&&T(I)}function q(t,n){t.appendChild(n)}function U(t,n,e){t.insertBefore(n,e||null)}function G(t){t.parentNode.removeChild(t)}function D(t,n){for(var e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function F(t){return document.createElement(t)}function J(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function M(t){return document.createTextNode(t)}function B(){return M(" ")}function K(){return M("")}function Y(t,n,e,r){return t.addEventListener(n,e,r),function(){return t.removeEventListener(n,e,r)}}function z(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function H(t,n){var e=Object.getOwnPropertyDescriptors(t.__proto__);for(var r in n)null==n[r]?t.removeAttribute(r):"style"===r?t.style.cssText=n[r]:"__value"===r?t.value=t[r]=n[r]:e[r]&&e[r].set?t[r]=n[r]:z(t,r,n[r])}function V(t,n){for(var e in n)z(t,e,n[e])}function W(t,n,e){t.setAttributeNS("http://www.w3.org/1999/xlink",n,e)}function X(t){return Array.from(t.childNodes)}function Q(t,n,e,r){for(var o=0;o<t.length;o+=1){var a=t[o];if(a.nodeName===n){for(var i=0,u=[];i<a.attributes.length;){var c=a.attributes[i++];e[c.name]||u.push(c.name)}for(var s=0;s<u.length;s++)a.removeAttribute(u[s]);return t.splice(o,1)[0]}}return r?J(n):F(n)}function Z(t,n){for(var e=0;e<t.length;e+=1){var r=t[e];if(3===r.nodeType)return r.data=""+n,t.splice(e,1)[0]}return M(n)}function tt(t){return Z(t," ")}function nt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function et(t,n,e,r){t.style.setProperty(n,e,r?"important":"")}function rt(t,n,e){t.classList[e?"add":"remove"](n)}function ot(t,n){var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}function at(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(n.querySelectorAll(t))}var it,ut=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;v(this,t),this.a=n,this.e=this.n=null}return y(t,[{key:"m",value:function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.e||(this.e=F(n.nodeName),this.t=n,this.h(t)),this.i(e)}},{key:"h",value:function(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}},{key:"i",value:function(t){for(var n=0;n<this.n.length;n+=1)U(this.t,this.n[n],t)}},{key:"p",value:function(t){this.d(),this.h(t),this.i(this.a)}},{key:"d",value:function(){this.n.forEach(G)}}]),t}(),ct=new Set,st=0;function ft(t){for(var n=5381,e=t.length;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}function lt(t,n,e,r,o,a,i){for(var u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,c=16.666/r,s="{\n",f=0;f<=1;f+=c){var l=n+(e-n)*a(f);s+=100*f+"%{".concat(i(l,1-l),"}\n")}var h=s+"100% {".concat(i(e,1-e),"}\n}"),p="__svelte_".concat(ft(h),"_").concat(u),d=t.ownerDocument;ct.add(d);var v=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(F("style")).sheet),m=d.__svelte_rules||(d.__svelte_rules={});m[p]||(m[p]=!0,v.insertRule("@keyframes ".concat(p," ").concat(h),v.cssRules.length));var y=t.style.animation||"";return t.style.animation="".concat(y?"".concat(y,", "):"").concat(p," ").concat(r,"ms linear ").concat(o,"ms 1 both"),st+=1,p}function ht(t,n){var e=(t.style.animation||"").split(", "),r=e.filter(n?function(t){return t.indexOf(n)<0}:function(t){return-1===t.indexOf("__svelte")}),o=e.length-r.length;o&&(t.style.animation=r.join(", "),(st-=o)||T((function(){st||(ct.forEach((function(t){for(var n=t.__svelte_stylesheet,e=n.cssRules.length;e--;)n.deleteRule(e);t.__svelte_rules={}})),ct.clear())})))}function pt(t){it=t}function dt(){if(!it)throw new Error("Function called outside component initialization");return it}function vt(t){dt().$$.on_mount.push(t)}function mt(t){dt().$$.on_destroy.push(t)}function yt(){var t=dt();return function(n,e){var r=t.$$.callbacks[n];if(r){var o=ot(n,e);r.slice().forEach((function(n){n.call(t,o)}))}}}var gt=[],bt=[],wt=[],_t=[],$t=Promise.resolve(),xt=!1;function Et(t){wt.push(t)}function St(t){_t.push(t)}var kt,Lt=!1,Ot=new Set;function jt(){if(!Lt){Lt=!0;do{for(var t=0;t<gt.length;t+=1){var n=gt[t];pt(n),Pt(n.$$)}for(pt(null),gt.length=0;bt.length;)bt.pop()();for(var e=0;e<wt.length;e+=1){var r=wt[e];Ot.has(r)||(Ot.add(r),r())}wt.length=0}while(gt.length);for(;_t.length;)_t.pop()();xt=!1,Lt=!1,Ot.clear()}}function Pt(t){if(null!==t.fragment){t.update(),x(t.before_update);var n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(Et)}}function At(t,n,e){t.dispatchEvent(ot("".concat(n?"intro":"outro").concat(e)))}var Rt,Nt=new Set;function Tt(){Rt={r:0,c:[],p:Rt}}function Ct(){Rt.r||x(Rt.c),Rt=Rt.p}function It(t,n){t&&t.i&&(Nt.delete(t),t.i(n))}function qt(t,n,e,r){if(t&&t.o){if(Nt.has(t))return;Nt.add(t),Rt.c.push((function(){Nt.delete(t),r&&(e&&t.d(1),r())})),t.o(n)}}var Ut={duration:0};function Gt(t,n,e,r){var o=n(t,e),a=r?0:1,i=null,u=null,c=null;function s(){c&&ht(t,c)}function f(t,n){var e=t.b-a;return n*=Math.abs(e),{a:a,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function l(n){var e,r=o||Ut,l=r.delay,h=void 0===l?0:l,p=r.duration,d=void 0===p?300:p,v=r.easing,m=void 0===v?b:v,y=r.tick,w=void 0===y?g:y,_=r.css,$={start:N()+h,b:n};n||($.group=Rt,Rt.r+=1),i||u?u=$:(_&&(s(),c=lt(t,a,n,d,h,m,_)),n&&w(0,1),i=f($,d),Et((function(){return At(t,n,"start")})),e=function(n){if(u&&n>u.start&&(i=f(u,d),u=null,At(t,i.b,"start"),_&&(s(),c=lt(t,a,i.b,i.duration,0,m,o.css))),i)if(n>=i.end)w(a=i.b,1-a),At(t,i.b,"end"),u||(i.b?s():--i.group.r||x(i.group.c)),i=null;else if(n>=i.start){var e=n-i.start;a=i.a+i.d*m(e/i.duration),w(a,1-a)}return!(!i&&!u)},0===C.size&&T(I),new Promise((function(t){C.add({c:e,f:t})})))}return{run:function(t){E(o)?(kt||(kt=Promise.resolve()).then((function(){kt=null})),kt).then((function(){o=o(),l(t)})):l(t)},end:function(){s(),i=u=null}}}var Dt="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function Ft(t,n){for(var e={},r={},o={$$scope:1},a=t.length;a--;){var i=t[a],u=n[a];if(u){for(var c in i)c in u||(r[c]=1);for(var s in u)o[s]||(e[s]=u[s],o[s]=1);t[a]=u}else for(var f in i)o[f]=1}for(var l in r)l in e||(e[l]=void 0);return e}function Jt(n){return"object"===t(n)&&null!==n?n:{}}function Mt(t,n,e){var r=t.$$.props[n];void 0!==r&&(t.$$.bound[r]=e,e(t.$$.ctx[r]))}function Bt(t){t&&t.c()}function Kt(t,n){t&&t.l(n)}function Yt(t,n,e){var r=t.$$,o=r.fragment,a=r.on_mount,i=r.on_destroy,u=r.after_update;o&&o.m(n,e),Et((function(){var n=a.map(_).filter(E);i?i.push.apply(i,d(n)):x(n),t.$$.on_mount=[]})),u.forEach(Et)}function zt(t,n){var e=t.$$;null!==e.fragment&&(x(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function Ht(t,n){-1===t.$$.dirty[0]&&(gt.push(t),xt||(xt=!0,$t.then(jt)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Vt(t,n,e,r,o,a){var i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],u=it;pt(t);var c=n.props||{},s=t.$$={fragment:null,ctx:null,props:a,update:g,not_equal:o,bound:$(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:$(),dirty:i,skip_bound:!1},f=!1;if(s.ctx=e?e(t,c,(function(n,e){var r=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:e;return s.ctx&&o(s.ctx[n],s.ctx[n]=r)&&(!s.skip_bound&&s.bound[n]&&s.bound[n](r),f&&Ht(t,n)),e})):[],s.update(),f=!0,x(s.before_update),s.fragment=!!r&&r(s.ctx),n.target){if(n.hydrate){var l=X(n.target);s.fragment&&s.fragment.l(l),l.forEach(G)}else s.fragment&&s.fragment.c();n.intro&&It(t.$$.fragment),Yt(t,n.target,n.anchor),jt()}pt(u)}var Wt=function(){function t(){v(this,t)}return y(t,[{key:"$destroy",value:function(){zt(this,1),this.$destroy=g}},{key:"$on",value:function(t,n){var e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),function(){var t=e.indexOf(n);-1!==t&&e.splice(t,1)}}},{key:"$set",value:function(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}]),t}(),Xt=[];function Qt(t){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g,r=[];function o(e){if(S(t,e)&&(t=e,n)){for(var o=!Xt.length,a=0;a<r.length;a+=1){var i=r[a];i[1](),Xt.push(i,t)}if(o){for(var u=0;u<Xt.length;u+=2)Xt[u][0](Xt[u+1]);Xt.length=0}}}function a(n){o(n(t))}function i(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g,u=[a,i];return r.push(u),1===r.length&&(n=e(o)||g),a(t),function(){var t=r.indexOf(u);-1!==t&&r.splice(t,1),0===r.length&&(n(),n=null)}}return{set:o,update:a,subscribe:i}}var Zt={};function tn(t){var n,e=t[1].default,r=k(e,t,t[0],null);return{c:function(){r&&r.c()},l:function(t){r&&r.l(t)},m:function(t,e){r&&r.m(t,e),n=!0},p:function(t,n){var o=u(n,1)[0];r&&r.p&&1&o&&O(r,e,t,t[0],o,null,null)},i:function(t){n||(It(r,t),n=!0)},o:function(t){qt(r,t),n=!1},d:function(t){r&&r.d(t)}}}function nn(t,n,e){var r=n.$$slots,o=void 0===r?{}:r,a=n.$$scope;return t.$$set=function(t){"$$scope"in t&&e(0,a=t.$$scope)},[a,o]}var en=function(t){f(e,Wt);var n=p(e);function e(t){var r;return v(this,e),Vt(l(r=n.call(this)),t,nn,tn,S,{}),r}return e}();function rn(t){var n,e,r=t[1].stack+"";return{c:function(){n=F("pre"),e=M(r)},l:function(t){var o=X(n=Q(t,"PRE",{}));e=Z(o,r),o.forEach(G)},m:function(t,r){U(t,n,r),q(n,e)},p:function(t,n){2&n&&r!==(r=t[1].stack+"")&&nt(e,r)},d:function(t){t&&G(n)}}}function on(t){var n,e,r,o,a,i,c,s,f,l=t[1].message+"";document.title=n=t[0];var h=t[2]&&t[1].stack&&rn(t);return{c:function(){e=B(),r=F("h1"),o=M(t[0]),a=B(),i=F("p"),c=M(l),s=B(),h&&h.c(),f=K(),this.h()},l:function(n){at('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(G),e=tt(n);var u=X(r=Q(n,"H1",{class:!0}));o=Z(u,t[0]),u.forEach(G),a=tt(n);var p=X(i=Q(n,"P",{class:!0}));c=Z(p,l),p.forEach(G),s=tt(n),h&&h.l(n),f=K(),this.h()},h:function(){z(r,"class","svelte-8od9u6"),z(i,"class","svelte-8od9u6")},m:function(t,n){U(t,e,n),U(t,r,n),q(r,o),U(t,a,n),U(t,i,n),q(i,c),U(t,s,n),h&&h.m(t,n),U(t,f,n)},p:function(t,e){var r=u(e,1)[0];1&r&&n!==(n=t[0])&&(document.title=n),1&r&&nt(o,t[0]),2&r&&l!==(l=t[1].message+"")&&nt(c,l),t[2]&&t[1].stack?h?h.p(t,r):((h=rn(t)).c(),h.m(f.parentNode,f)):h&&(h.d(1),h=null)},i:g,o:g,d:function(t){t&&G(e),t&&G(r),t&&G(a),t&&G(i),t&&G(s),h&&h.d(t),t&&G(f)}}}function an(t,n,e){var r=n.status,o=n.error;return t.$$set=function(t){"status"in t&&e(0,r=t.status),"error"in t&&e(1,o=t.error)},[r,o,false]}var un=function(t){f(e,Wt);var n=p(e);function e(t){var r;return v(this,e),Vt(l(r=n.call(this)),t,an,on,S,{status:0,error:1}),r}return e}();function cn(t){var n,e,r,o=[t[4].props],a=t[4].component;function i(t){for(var n={},e=0;e<o.length;e+=1)n=w(n,o[e]);return{props:n}}return a&&(n=new a(i())),{c:function(){n&&Bt(n.$$.fragment),e=K()},l:function(t){n&&Kt(n.$$.fragment,t),e=K()},m:function(t,o){n&&Yt(n,t,o),U(t,e,o),r=!0},p:function(t,r){var u=16&r?Ft(o,[Jt(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){Tt();var c=n;qt(c.$$.fragment,1,0,(function(){zt(c,1)})),Ct()}a?(Bt((n=new a(i())).$$.fragment),It(n.$$.fragment,1),Yt(n,e.parentNode,e)):n=null}else a&&n.$set(u)},i:function(t){r||(n&&It(n.$$.fragment,t),r=!0)},o:function(t){n&&qt(n.$$.fragment,t),r=!1},d:function(t){t&&G(e),n&&zt(n,t)}}}function sn(t){var n,e;return n=new un({props:{error:t[0],status:t[1]}}),{c:function(){Bt(n.$$.fragment)},l:function(t){Kt(n.$$.fragment,t)},m:function(t,r){Yt(n,t,r),e=!0},p:function(t,e){var r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i:function(t){e||(It(n.$$.fragment,t),e=!0)},o:function(t){qt(n.$$.fragment,t),e=!1},d:function(t){zt(n,t)}}}function fn(t){var n,e,r,o,a=[sn,cn],i=[];function u(t,n){return t[0]?0:1}return n=u(t),e=i[n]=a[n](t),{c:function(){e.c(),r=K()},l:function(t){e.l(t),r=K()},m:function(t,e){i[n].m(t,e),U(t,r,e),o=!0},p:function(t,o){var c=n;(n=u(t))===c?i[n].p(t,o):(Tt(),qt(i[c],1,1,(function(){i[c]=null})),Ct(),(e=i[n])?e.p(t,o):(e=i[n]=a[n](t)).c(),It(e,1),e.m(r.parentNode,r))},i:function(t){o||(It(e),o=!0)},o:function(t){qt(e),o=!1},d:function(t){i[n].d(t),t&&G(r)}}}function ln(t){for(var n,e,r=[{segment:t[2][0]},t[3].props],o={$$slots:{default:[fn]},$$scope:{ctx:t}},a=0;a<r.length;a+=1)o=w(o,r[a]);return n=new en({props:o}),{c:function(){Bt(n.$$.fragment)},l:function(t){Kt(n.$$.fragment,t)},m:function(t,r){Yt(n,t,r),e=!0},p:function(t,e){var o=u(e,1)[0],a=12&o?Ft(r,[4&o&&{segment:t[2][0]},8&o&&Jt(t[3].props)]):{};147&o&&(a.$$scope={dirty:o,ctx:t}),n.$set(a)},i:function(t){e||(It(n.$$.fragment,t),e=!0)},o:function(t){qt(n.$$.fragment,t),e=!1},d:function(t){zt(n,t)}}}function hn(t,n,e){var r,o,a,i=n.stores,u=n.error,c=n.status,s=n.segments,f=n.level0,l=n.level1,h=void 0===l?null:l,p=n.notify;return r=p,dt().$$.after_update.push(r),o=Zt,a=i,dt().$$.context.set(o,a),t.$$set=function(t){"stores"in t&&e(5,i=t.stores),"error"in t&&e(0,u=t.error),"status"in t&&e(1,c=t.status),"segments"in t&&e(2,s=t.segments),"level0"in t&&e(3,f=t.level0),"level1"in t&&e(4,h=t.level1),"notify"in t&&e(6,p=t.notify)},[u,c,s,f,h,i,p]}var pn=function(t){f(e,Wt);var n=p(e);function e(t){var r;return v(this,e),Vt(l(r=n.call(this)),t,hn,ln,S,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6}),r}return e}(),dn=[],vn=[{js:function(){return Promise.all([import("./index.e50228e7.js"),__inject_styles(["client-83d3772e.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./en.8c3c3d94.js"),__inject_styles(["client-83d3772e.css","Section_9_Gratitude-2ec6e26e.css","en-5d7f2527.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./ru.53627857.js"),__inject_styles(["client-83d3772e.css","Section_9_Gratitude-2ec6e26e.css"])]).then((function(t){return t[0]}))}}],mn=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/en\/?$/,parts:[{i:1}]},{pattern:/^\/ru\/?$/,parts:[{i:2}]}];
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
function yn(t,n,e,r){return new(e||(e=Promise))((function(o,a){function i(t){try{c(r.next(t))}catch(t){a(t)}}function u(t){try{c(r.throw(t))}catch(t){a(t)}}function c(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(i,u)}c((r=r.apply(t,n||[])).next())}))}function gn(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}var bn,wn=1;var _n,$n,xn="undefined"!=typeof history?history:{pushState:function(){},replaceState:function(){},scrollRestoration:"auto"},En={};function Sn(n){var e=Object.create(null);return n.length>0&&n.slice(1).split("&").forEach((function(n){var r=u(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(n.replace(/\+/g," "))),3),o=r[1],a=r[2],i=void 0===a?"":a;"string"==typeof e[o]&&(e[o]=[e[o]]),"object"===t(e[o])?e[o].push(i):e[o]=i})),e}function kn(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(_n))return null;var n=t.pathname.slice(_n.length);if(""===n&&(n="/"),!dn.some((function(t){return t.test(n)})))for(var e=0;e<mn.length;e+=1){var r=mn[e],o=r.pattern.exec(n);if(o){var a=Sn(t.search),i=r.parts[r.parts.length-1],u=i.params?i.params(o):{},c={host:location.host,path:n,query:a,params:u};return{href:t.href,route:r,match:o,page:c}}}}function Ln(n){if(1===function(t){return null===t.which?t.button:t.which}(n)&&!(n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)){var e=gn(n.target);if(e&&e.href){var r="object"===t(e.href)&&"SVGAnimatedString"===e.href.constructor.name,o=String(r?e.href.baseVal:e.href);if(o!==location.href){if(!e.hasAttribute("download")&&"external"!==e.getAttribute("rel")&&!(r?e.target.baseVal:e.target)){var a=new URL(o);if(a.pathname!==location.pathname||a.search!==location.search){var i=kn(a);if(i)Pn(i,null,e.hasAttribute("sapper:noscroll"),a.hash),n.preventDefault(),xn.pushState({id:bn},"",a.href)}}}else location.hash||n.preventDefault()}}}function On(){return{x:pageXOffset,y:pageYOffset}}function jn(t){if(En[bn]=On(),t.state){var n=kn(new URL(location.href));n?Pn(n,t.state.id):location.href=location.href}else(function(t){bn=t})(wn=wn+1),xn.replaceState({id:bn},"",location.href)}function Pn(t,n,e,r){return yn(this,void 0,void 0,o.mark((function a(){var i,u,c,s;return o.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return(i=!!n)?bn=n:(u=On(),En[bn]=u,bn=n=++wn,En[bn]=e?u:{x:0,y:0}),o.next=4,$n(t);case 4:document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),e||(c=En[n],r&&(s=document.getElementById(r.slice(1)))&&(c={x:0,y:s.getBoundingClientRect().top+scrollY}),En[bn]=c,i||s?scrollTo(c.x,c.y):scrollTo(0,0));case 6:case"end":return o.stop()}}),a)})))}function An(t){var n=t.baseURI;if(!n){var e=t.getElementsByTagName("base");n=e.length?e[0].href:t.URL}return n}var Rn,Nn=null;function Tn(t){return Nn&&Nn.href===t.href?Nn.promise:ee(t)}function Cn(t){var n=gn(t.target);n&&"prefetch"===n.rel&&function(t){var n=kn(new URL(t,An(document)));if(n)Nn&&t===Nn.href||(Nn={href:t,promise:ee(n)}),Nn.promise}(n.href)}function In(t){clearTimeout(Rn),Rn=setTimeout((function(){Cn(t)}),20)}function qn(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{noscroll:!1,replaceState:!1},e=kn(new URL(t,An(document)));return e?(xn[n.replaceState?"replaceState":"pushState"]({id:bn},"",t),Pn(e,null,n.noscroll)):(location.href=t,new Promise((function(){})))}var Un,Gn,Dn,Fn,Jn,Mn,Bn,Kn,Yn,zn="undefined"!=typeof __SAPPER__&&__SAPPER__,Hn=!1,Vn=[],Wn="{}",Xn={page:function(t){var n=Qt(t),e=!0;return{notify:function(){e=!0,n.update((function(t){return t}))},set:function(t){e=!1,n.set(t)},subscribe:function(t){var r;return n.subscribe((function(n){(void 0===r||e&&n!==r)&&t(r=n)}))}}}({}),preloading:Qt(null),session:Qt(zn&&zn.session)};function Qn(t,n){var e=t.error;return Object.assign({error:e},n)}function Zn(t){return yn(this,void 0,void 0,o.mark((function n(){var e,r,a,i,u,c;return o.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return Un&&Xn.preloading.set(!0),e=Tn(t),r=Gn={},n.next=5,e;case 5:if(a=n.sent,i=a.redirect,r===Gn){n.next=9;break}return n.abrupt("return");case 9:if(!i){n.next=14;break}return n.next=12,qn(i.location,{replaceState:!0});case 12:n.next=17;break;case 14:return u=a.props,c=a.branch,n.next=17,te(c,u,Qn(u,t.page));case 17:case"end":return n.stop()}}),n)})))}function te(t,n,e){return yn(this,void 0,void 0,o.mark((function r(){return o.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(Xn.page.set(e),Xn.preloading.set(!1),!Un){r.next=6;break}Un.$set(n),r.next=13;break;case 6:return n.stores={page:{subscribe:Xn.page.subscribe},preloading:{subscribe:Xn.preloading.subscribe},session:Xn.session},r.next=9,Dn;case 9:r.t0=r.sent,n.level0={props:r.t0},n.notify=Xn.page.notify,Un=new pn({target:Mn,props:n,hydrate:!0});case 13:Vn=t,Wn=JSON.stringify(e.query),Hn=!0,Jn=!1;case 17:case"end":return r.stop()}}),r)})))}function ne(t,n,e,r){if(r!==Wn)return!0;var o=Vn[t];return!!o&&(n!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(e.slice(1,t+2)))||void 0))}function ee(t){return yn(this,void 0,void 0,o.mark((function n(){var e,r,a,i,u,c,s,f,l,h,p,d,v=this;return o.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.route,r=t.page,a=r.path.split("/").filter(Boolean),i=null,u={error:null,status:200,segments:[a[0]]},c={fetch:function(t){function n(n,e){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t,n){return fetch(t,n)})),redirect:function(t,n){if(i&&(i.statusCode!==t||i.location!==n))throw new Error("Conflicting redirects");i={statusCode:t,location:n}},error:function(t,n){u.error="string"==typeof n?new Error(n):n,u.status=t}},Dn||(s=function(){return{}},Dn=zn.preloaded[0]||s.call(c,{host:r.host,path:r.path,query:r.query,params:{}},Fn)),l=1,n.prev=7,h=JSON.stringify(r.query),p=e.pattern.exec(r.path),d=!1,n.next=13,Promise.all(e.parts.map((function(n,e){return yn(v,void 0,void 0,o.mark((function i(){var s,f,v,m,y,g;return o.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(s=a[e],ne(e,s,p,h)&&(d=!0),u.segments[l]=a[e+1],n){o.next=5;break}return o.abrupt("return",{segment:s});case 5:if(f=l++,Jn||d||!Vn[e]||Vn[e].part!==n.i){o.next=8;break}return o.abrupt("return",Vn[e]);case 8:return d=!1,o.next=11,vn[n.i].js();case 11:if(v=o.sent,m=v.default,y=v.preload,!Hn&&zn.preloaded[e+1]){o.next=25;break}if(!y){o.next=21;break}return o.next=18,y.call(c,{host:r.host,path:r.path,query:r.query,params:n.params?n.params(t.match):{}},Fn);case 18:o.t0=o.sent,o.next=22;break;case 21:o.t0={};case 22:g=o.t0,o.next=26;break;case 25:g=zn.preloaded[e+1];case 26:return o.abrupt("return",u["level".concat(f)]={component:m,props:g,segment:s,match:p,part:n.i});case 27:case"end":return o.stop()}}),i)})))})));case 13:f=n.sent,n.next=21;break;case 16:n.prev=16,n.t0=n.catch(7),u.error=n.t0,u.status=500,f=[];case 21:return n.abrupt("return",{redirect:i,props:u,branch:f});case 22:case"end":return n.stop()}}),n,null,[[7,16]])})))}Xn.session.subscribe((function(t){return yn(void 0,void 0,void 0,o.mark((function n(){var e,r,a,i,u,c;return o.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(Fn=t,Hn){n.next=3;break}return n.abrupt("return");case 3:return Jn=!0,e=kn(new URL(location.href)),r=Gn={},n.next=8,ee(e);case 8:if(a=n.sent,i=a.redirect,u=a.props,c=a.branch,r===Gn){n.next=14;break}return n.abrupt("return");case 14:if(!i){n.next=19;break}return n.next=17,qn(i.location,{replaceState:!0});case 17:n.next=21;break;case 19:return n.next=21,te(c,u,Qn(u,e.page));case 21:case"end":return n.stop()}}),n)})))})),Bn={target:document.querySelector("#sapper")},Kn=Bn.target,Mn=Kn,Yn=zn.baseUrl,_n=Yn,$n=Zn,"scrollRestoration"in xn&&(xn.scrollRestoration="manual"),addEventListener("beforeunload",(function(){xn.scrollRestoration="auto"})),addEventListener("load",(function(){xn.scrollRestoration="manual"})),addEventListener("click",Ln),addEventListener("popstate",jn),addEventListener("touchstart",Cn),addEventListener("mousemove",In),zn.error?Promise.resolve().then((function(){return function(){var t=location,n=t.host,e=t.pathname,r=t.search,o=zn.session,a=zn.preloaded,i=zn.status,u=zn.error;Dn||(Dn=a&&a[0]);var c={error:u,status:i,session:o,level0:{props:Dn},level1:{props:{status:i,error:u},component:un},segments:a},s=Sn(r);te([],c,{host:n,path:e,query:s,params:{},error:u})}()})):Promise.resolve().then((function(){var t=location,n=t.hash,e=t.href;xn.replaceState({id:wn},"",e);var r=kn(new URL(location.href));if(r)return Pn(r,wn,!0,n)}));export{W as $,K as A,rt as B,u as C,D,w as E,J as F,V as G,Ft as H,j as I,Tt as J,Ct as K,bt as L,Mt as M,St as N,k as O,O as P,e as Q,n as R,Wt as S,t as T,r as U,vt as V,P as W,et as X,Jt as Y,ut as Z,f as _,p as a,y as a0,x as a1,yt as a2,H as a3,E as a4,A as a5,b as a6,Qt as a7,Et as a8,Gt as a9,mt as aa,d as ab,Dt as ac,v as b,l as c,G as d,B as e,Bt as f,tt as g,Kt as h,Vt as i,U as j,qt as k,zt as l,Yt as m,g as n,F as o,M as p,at as q,Q as r,S as s,It as t,X as u,Z as v,z as w,q as x,Y as y,nt as z};

import __inject_styles from './inject_styles.fe622066.js';