import{_ as n,a as t,b as c,c as o,i as r,s as u,d as e,S as i,L as a,k as f,h as s,o as l,q as h,g as v,j as p,aa as d,y as m,A as g,l as y,u as q,af as b,m as k,n as E,N as R,z as $,B as x,E as A}from"./client.2f37940f.js";function B(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function N(n){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var r,u=t(n);if(o){var e=t(this).constructor;r=Reflect.construct(u,arguments,e)}else r=u.apply(this,arguments);return c(this,r)}}function j(n,t,c){var o=n.slice();return o[6]=t[c],o}function I(n,t,c){var o=n.slice();return o[6]=t[c],o}function K(n){var t,c=n[6].content+"";return{c:function(){t=$(c)},l:function(n){t=x(n,c)},m:function(n,c){f(n,t,c)},p:function(n,o){1&o&&c!==(c=n[6].content+"")&&A(t,c)},d:function(n){n&&s(t)}}}function L(n){var t,c,o=n[6].content+"";return{c:function(){t=l("mark"),c=$(o),this.h()},l:function(n){t=h(n,"MARK",{class:!0});var r=v(t);c=x(r,o),r.forEach(s),this.h()},h:function(){p(t,"class","svelte-sb12q7")},m:function(n,o){f(n,t,o),y(t,c)},p:function(n,t){1&t&&o!==(o=n[6].content+"")&&A(c,o)},d:function(n){n&&s(t)}}}function M(n){var t;function c(n,t){return n[6].marked?L:K}var o=c(n),r=o(n);return{c:function(){r.c(),t=a()},l:function(n){r.l(n),t=a()},m:function(n,c){r.m(n,c),f(n,t,c)},p:function(n,u){o===(o=c(n))&&r?r.p(n,u):(r.d(1),(r=o(n))&&(r.c(),r.m(t.parentNode,t)))},d:function(n){r.d(n),n&&s(t)}}}function O(n){for(var t,c=n[1](n[0].details),o=[],r=0;r<c.length;r+=1)o[r]=z(j(n,c,r));return{c:function(){t=l("div");for(var n=0;n<o.length;n+=1)o[n].c();this.h()},l:function(n){t=h(n,"DIV",{class:!0});for(var c=v(t),r=0;r<o.length;r+=1)o[r].l(c);c.forEach(s),this.h()},h:function(){p(t,"class","subtext svelte-sb12q7")},m:function(n,c){f(n,t,c);for(var r=0;r<o.length;r+=1)o[r].m(t,null)},p:function(n,r){if(3&r){var u;for(c=n[1](n[0].details),u=0;u<c.length;u+=1){var e=j(n,c,u);o[u]?o[u].p(e,r):(o[u]=z(e),o[u].c(),o[u].m(t,null))}for(;u<o.length;u+=1)o[u].d(1);o.length=c.length}},d:function(n){n&&s(t),d(o,n)}}}function T(n){var t,c=n[6].content+"";return{c:function(){t=$(c)},l:function(n){t=x(n,c)},m:function(n,c){f(n,t,c)},p:function(n,o){1&o&&c!==(c=n[6].content+"")&&A(t,c)},d:function(n){n&&s(t)}}}function w(n){var t,c,o=n[6].content+"";return{c:function(){t=l("mark"),c=$(o),this.h()},l:function(n){t=h(n,"MARK",{class:!0});var r=v(t);c=x(r,o),r.forEach(s),this.h()},h:function(){p(t,"class","svelte-sb12q7")},m:function(n,o){f(n,t,o),y(t,c)},p:function(n,t){1&t&&o!==(o=n[6].content+"")&&A(c,o)},d:function(n){n&&s(t)}}}function z(n){var t;function c(n,t){return n[6].marked?w:T}var o=c(n),r=o(n);return{c:function(){r.c(),t=a()},l:function(n){r.l(n),t=a()},m:function(n,c){r.m(n,c),f(n,t,c)},p:function(n,u){o===(o=c(n))&&r?r.p(n,u):(r.d(1),(r=o(n))&&(r.c(),r.m(t.parentNode,t)))},d:function(n){r.d(n),n&&s(t)}}}function D(n){for(var t,c,o,r,u,e=n[1](n[0].name),i=[],a=0;a<e.length;a+=1)i[a]=M(I(n,e,a));var R=n[0].details&&O(n);return{c:function(){t=l("li"),c=l("button");for(var n=0;n<i.length;n+=1)i[n].c();o=m(),R&&R.c(),this.h()},l:function(n){t=h(n,"LI",{class:!0});var r=v(t);c=h(r,"BUTTON",{type:!0,class:!0});for(var u=v(c),e=0;e<i.length;e+=1)i[e].l(u);o=g(u),R&&R.l(u),u.forEach(s),r.forEach(s),this.h()},h:function(){p(c,"type","button"),p(c,"class","svelte-sb12q7"),p(t,"class","svelte-sb12q7")},m:function(e,a){f(e,t,a),y(t,c);for(var s=0;s<i.length;s+=1)i[s].m(c,null);y(c,o),R&&R.m(c,null),r||(u=q(t,"click",b(n[4])),r=!0)},p:function(n,t){var r=k(t,1)[0];if(3&r){var u;for(e=n[1](n[0].name),u=0;u<e.length;u+=1){var a=I(n,e,u);i[u]?i[u].p(a,r):(i[u]=M(a),i[u].c(),i[u].m(c,o))}for(;u<i.length;u+=1)i[u].d(1);i.length=e.length}n[0].details?R?R.p(n,r):((R=O(n)).c(),R.m(c,null)):R&&(R.d(1),R=null)},i:E,o:E,d:function(n){n&&s(t),d(i,n),R&&R.d(),r=!1,u()}}}function P(n,t,c){var o,r=t.option,u=t.query,e=void 0===u?null:u;var i=R();return n.$$set=function(n){"option"in n&&c(0,r=n.option),"query"in n&&c(3,e=n.query)},n.$$.update=function(){8&n.$$.dirty&&(o=e?new RegExp("(".concat(B(e),")"),"ig"):null)},[r,function(n){return null==o?[{content:n,marked:!1}]:n.split(o).map((function(n,t){return{content:n,marked:t%2!=0}}))},i,e,function(n){return i("click",{nativeEvent:n})}]}var S=function(t){n(a,i);var c=N(a);function a(n){var t;return o(this,a),t=c.call(this),r(e(t),n,P,D,u,{option:0,query:3}),t}return a}();export{S as A,B as e};
