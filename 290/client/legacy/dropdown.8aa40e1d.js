import{_ as n,a as t,b as o,c,i as e,s as r,d as s,a8 as i,S as u,Q as a,o as f,q as l,g as p,h as v,j as d,a0 as h,T as $,k as y,u as g,m,V as w,W as R,X as k,v as x,w as q,N as E,a1 as B}from"./client.30f94cac.js";import{c as D}from"./classes.7d86155b.js";function j(n){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=t(n);if(c){var s=t(this).constructor;e=Reflect.construct(r,arguments,s)}else e=r.apply(this,arguments);return o(this,e)}}var V=function(n){return{}},b=function(n){return{toggle:n[2]}};function I(n){var t,o,c,e,r,s=n[6].default,i=a(s,n,n[5],b);return{c:function(){t=f("div"),i&&i.c(),this.h()},l:function(n){t=l(n,"DIV",{class:!0});var o=p(t);i&&i.l(o),o.forEach(v),this.h()},h:function(){d(t,"class",o=h(D("dropdown-shell",n[1]))+" svelte-18ox5ni"),$(t,"open",n[0])},m:function(o,s){y(o,t,s),i&&i.m(t,null),n[7](t),c=!0,e||(r=g(window,"click",n[4]),e=!0)},p:function(n,e){var r=m(e,1)[0];i&&i.p&&(!c||32&r)&&w(i,s,n,n[5],c?k(s,n[5],r,V):R(n[5]),b),(!c||2&r&&o!==(o=h(D("dropdown-shell",n[1]))+" svelte-18ox5ni"))&&d(t,"class",o),3&r&&$(t,"open",n[0])},i:function(n){c||(x(i,n),c=!0)},o:function(n){q(i,n),c=!1},d:function(o){o&&v(t),i&&i.d(o),n[7](null),e=!1,r()}}}function L(n,t,o){var c=t.$$slots,e=void 0===c?{}:c,r=t.$$scope,s=t.class,i=void 0===s?null:s,u=t.open,a=void 0!==u&&u;function f(){o(0,a=!a)}var l=null;function p(n){"Escape"===n.key&&a&&(n.preventDefault(),f())}var v=E();return n.$$set=function(n){"class"in n&&o(1,i=n.class),"open"in n&&o(0,a=n.open),"$$scope"in n&&o(5,r=n.$$scope)},n.$$.update=function(){1&n.$$.dirty&&v("change",{value:a}),1&n.$$.dirty&&"undefined"!=typeof document&&(a?document.addEventListener("keydown",p):document.removeEventListener("keydown",p))},[a,i,f,l,function(n){l&&!l.contains(n.target)&&a&&f()},r,e,function(n){B[n?"unshift":"push"]((function(){o(3,l=n)}))}]}var O=function(t){n(a,u);var o=j(a);function a(n){var t;return c(this,a),t=o.call(this),e(s(t),n,L,I,r,{class:1,open:0,toggle:2}),t}return i(a,[{key:"toggle",get:function(){return this.$$.ctx[2]}}]),a}();function P(n){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=t(n);if(c){var s=t(this).constructor;e=Reflect.construct(r,arguments,s)}else e=r.apply(this,arguments);return o(this,e)}}function N(n){var t,o,c,e=n[4].default,r=a(e,n,n[3],null);return{c:function(){t=f("div"),r&&r.c(),this.h()},l:function(n){t=l(n,"DIV",{class:!0});var o=p(t);r&&r.l(o),o.forEach(v),this.h()},h:function(){d(t,"class",o=h(D("dropdown",n[0]))+" svelte-1fhqrqw"),$(t,"right",n[1]),$(t,"top",n[2])},m:function(n,o){y(n,t,o),r&&r.m(t,null),c=!0},p:function(n,s){var i=m(s,1)[0];r&&r.p&&(!c||8&i)&&w(r,e,n,n[3],c?k(e,n[3],i,null):R(n[3]),null),(!c||1&i&&o!==(o=h(D("dropdown",n[0]))+" svelte-1fhqrqw"))&&d(t,"class",o),3&i&&$(t,"right",n[1]),5&i&&$(t,"top",n[2])},i:function(n){c||(x(r,n),c=!0)},o:function(n){q(r,n),c=!1},d:function(n){n&&v(t),r&&r.d(n)}}}function Q(n,t,o){var c=t.$$slots,e=void 0===c?{}:c,r=t.$$scope,s=t.class,i=void 0===s?null:s,u=t.right,a=void 0!==u&&u,f=t.top,l=void 0!==f&&f;return n.$$set=function(n){"class"in n&&o(0,i=n.class),"right"in n&&o(1,a=n.right),"top"in n&&o(2,l=n.top),"$$scope"in n&&o(3,r=n.$$scope)},[i,a,l,r,e]}var S=function(t){n(i,u);var o=P(i);function i(n){var t;return c(this,i),t=o.call(this),e(s(t),n,Q,N,r,{class:0,right:1,top:2}),t}return i}();export{O as D,S as a};
