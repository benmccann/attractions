import{_ as n,a as t,b as c,c as o,i as r,s,d as e,S as a,Q as u,o as f,p as i,y as $,q as l,g as p,r as m,A as v,h as d,j as h,k as g,t as y,l as x,m as w,V as S,W as R,X as b,v as j,w as B,x as C,z as E,B as O}from"./client.30f94cac.js";import{L as k}from"./label.c9ef5511.js";import{C as q}from"./copyable-code.64489433.js";function z(n){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var r,s=t(n);if(o){var e=t(this).constructor;r=Reflect.construct(s,arguments,e)}else r=s.apply(this,arguments);return c(this,r)}}var A=function(n){return{}},I=function(n){return{}},L=function(n){return{}},N=function(n){return{}};function P(n){var t;return{c:function(){t=E("Showcase")},l:function(n){t=O(n,"Showcase")},m:function(n,c){g(n,t,c)},d:function(n){n&&d(t)}}}function Q(n){var t;return{c:function(){t=E("Source")},l:function(n){t=O(n,"Source")},m:function(n,c){g(n,t,c)},d:function(n){n&&d(t)}}}function T(n){var t,c=n[0].source,o=u(c,n,n[1],I);return{c:function(){o&&o.c()},l:function(n){o&&o.l(n)},m:function(n,c){o&&o.m(n,c),t=!0},p:function(n,r){o&&o.p&&(!t||2&r)&&S(o,c,n,n[1],t?b(c,n[1],r,A):R(n[1]),I)},i:function(n){t||(j(o,n),t=!0)},o:function(n){B(o,n),t=!1},d:function(n){o&&o.d(n)}}}function V(n){var t,c,o,r,s,e,a,E;c=new k({props:{$$slots:{default:[P]},$$scope:{ctx:n}}});var O=n[0].showcase,z=u(O,n,n[1],N);return s=new k({props:{class:"code",$$slots:{default:[Q]},$$scope:{ctx:n}}}),a=new q({props:{$$slots:{default:[T]},$$scope:{ctx:n}}}),{c:function(){t=f("section"),i(c.$$.fragment),o=$(),z&&z.c(),r=$(),i(s.$$.fragment),e=$(),i(a.$$.fragment),this.h()},l:function(n){t=l(n,"SECTION",{class:!0});var u=p(t);m(c.$$.fragment,u),o=v(u),z&&z.l(u),r=v(u),m(s.$$.fragment,u),e=v(u),m(a.$$.fragment,u),u.forEach(d),this.h()},h:function(){h(t,"class","showcase svelte-10o04be")},m:function(n,u){g(n,t,u),y(c,t,null),x(t,o),z&&z.m(t,null),x(t,r),y(s,t,null),x(t,e),y(a,t,null),E=!0},p:function(n,t){var o=w(t,1)[0],r={};2&o&&(r.$$scope={dirty:o,ctx:n}),c.$set(r),z&&z.p&&(!E||2&o)&&S(z,O,n,n[1],E?b(O,n[1],o,L):R(n[1]),N);var e={};2&o&&(e.$$scope={dirty:o,ctx:n}),s.$set(e);var u={};2&o&&(u.$$scope={dirty:o,ctx:n}),a.$set(u)},i:function(n){E||(j(c.$$.fragment,n),j(z,n),j(s.$$.fragment,n),j(a.$$.fragment,n),E=!0)},o:function(n){B(c.$$.fragment,n),B(z,n),B(s.$$.fragment,n),B(a.$$.fragment,n),E=!1},d:function(n){n&&d(t),C(c),z&&z.d(n),C(s),C(a)}}}function W(n,t,c){var o=t.$$slots,r=void 0===o?{}:o,s=t.$$scope;return n.$$set=function(n){"$$scope"in n&&c(1,s=n.$$scope)},[r,s]}var X=function(t){n(u,a);var c=z(u);function u(n){var t;return o(this,u),t=c.call(this),r(e(t),n,W,V,s,{}),t}return u}();export{X as S};
