import{_ as n,a as t,b as a,c,i as o,s,d as r,S as i,L as e,k as u,m as l,C as f,w as v,D as p,v as d,h,N as m,Q as y,o as $,q as k,g as C,j as w,a0 as R,T as b,V as j,W as D,X as V,u as g,a9 as x}from"./client.a1471ac7.js";import{c as B}from"./classes.7d86155b.js";function E(n){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var o,s=t(n);if(c){var r=t(this).constructor;o=Reflect.construct(s,arguments,r)}else o=s.apply(this,arguments);return a(this,o)}}var I=function(n){return{}},N=function(n){return{closeCallback:n[3]}},q=function(n){return{}},L=function(n){return{closeCallback:n[3]}};function M(n){var t,a,c,o=n[5].default,s=y(o,n,n[4],N);return{c:function(){t=$("div"),s&&s.c(),this.h()},l:function(n){t=k(n,"DIV",{class:!0});var a=C(t);s&&s.l(a),a.forEach(h),this.h()},h:function(){w(t,"class",a=R(B("modal-overlay",n[1]))+" svelte-rafkre"),b(t,"open",n[0])},m:function(n,a){u(n,t,a),s&&s.m(t,null),c=!0},p:function(n,r){s&&s.p&&(!c||16&r)&&j(s,o,n,n[4],c?V(o,n[4],r,I):D(n[4]),N),(!c||2&r&&a!==(a=R(B("modal-overlay",n[1]))+" svelte-rafkre"))&&w(t,"class",a),3&r&&b(t,"open",n[0])},i:function(n){c||(d(s,n),c=!0)},o:function(n){v(s,n),c=!1},d:function(n){n&&h(t),s&&s.d(n)}}}function O(n){var t,a,c,o,s,r=n[5].default,i=y(r,n,n[4],L);return{c:function(){t=$("div"),i&&i.c(),this.h()},l:function(n){t=k(n,"DIV",{class:!0});var a=C(t);i&&i.l(a),a.forEach(h),this.h()},h:function(){w(t,"class",a=R(B("modal-overlay",n[1]))+" svelte-rafkre"),b(t,"open",n[0])},m:function(a,r){u(a,t,r),i&&i.m(t,null),c=!0,o||(s=g(t,"click",x(n[3])),o=!0)},p:function(n,o){i&&i.p&&(!c||16&o)&&j(i,r,n,n[4],c?V(r,n[4],o,q):D(n[4]),L),(!c||2&o&&a!==(a=R(B("modal-overlay",n[1]))+" svelte-rafkre"))&&w(t,"class",a),3&o&&b(t,"open",n[0])},i:function(n){c||(d(i,n),c=!0)},o:function(n){v(i,n),c=!1},d:function(n){n&&h(t),i&&i.d(n),o=!1,s()}}}function P(n){var t,a,c,o,s=[O,M],r=[];function i(n,t){return n[2]?1:0}return t=i(n),a=r[t]=s[t](n),{c:function(){a.c(),c=e()},l:function(n){a.l(n),c=e()},m:function(n,a){r[t].m(n,a),u(n,c,a),o=!0},p:function(n,o){var e=l(o,1)[0],u=t;(t=i(n))===u?r[t].p(n,e):(f(),v(r[u],1,1,(function(){r[u]=null})),p(),(a=r[t])?a.p(n,e):(a=r[t]=s[t](n)).c(),d(a,1),a.m(c.parentNode,c))},i:function(n){o||(d(a),o=!0)},o:function(n){v(a),o=!1},d:function(n){r[t].d(n),n&&h(c)}}}function Q(n,t,a){var c=t.$$slots,o=void 0===c?{}:c,s=t.$$scope,r=t.class,i=void 0===r?null:r,e=t.open,u=void 0!==e&&e,l=t.noClickaway,f=void 0!==l&&l;var v=m();return n.$$set=function(n){"class"in n&&a(1,i=n.class),"open"in n&&a(0,u=n.open),"noClickaway"in n&&a(2,f=n.noClickaway),"$$scope"in n&&a(4,s=n.$$scope)},n.$$.update=function(){1&n.$$.dirty&&v("change",{value:u})},[u,i,f,function(){a(0,u=!1)},s,o]}var S=function(t){n(e,i);var a=E(e);function e(n){var t;return c(this,e),t=a.call(this),o(r(t),n,Q,P,s,{class:1,open:0,noClickaway:2}),t}return e}();export{S as M};
