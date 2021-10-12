import{_ as n,a as e,b as t,c as a,i as c,s as l,d as o,S as s,o as r,q as i,g as u,h as f,j as d,a0 as h,k as v,C as m,a2 as p,D as b,v as $,w as k,L as x,m as g,M as y,O as C,P as R,p as L,r as j,t as T,Y as w,a3 as N,a4 as S,x as B,a5 as E,a1 as M,a6 as P,a7 as q,y as A,A as D,z as O,B as _,E as z,l as I}from"./client.e360613b.js";import{c as V}from"./classes.7d86155b.js";import{g as Y}from"./color-picker-styles.a2a9eff8.js";import{p as F}from"./plural-s.31bb9da9.js";import{C as G}from"./checkbox.cf1b12eb.js";function H(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var c,l=e(n);if(a){var o=e(this).constructor;c=Reflect.construct(l,arguments,o)}else c=l.apply(this,arguments);return t(this,c)}}function J(n,e,t){var a=n.slice();return a[14]=e[t],a[15]=e,a[16]=t,a}function K(n){for(var e,t,a,c=[],l=new Map,o=n[0],s=function(n){return n[14].value},x=0;x<o.length;x+=1){var g=J(n,o,x),y=s(g);l.set(y,c[x]=Z(y,g))}return{c:function(){e=r("div");for(var n=0;n<c.length;n+=1)c[n].c();this.h()},l:function(n){e=i(n,"DIV",{class:!0,role:!0});for(var t=u(e),a=0;a<c.length;a+=1)c[a].l(t);t.forEach(f),this.h()},h:function(){d(e,"class",t=h(V(n[1]))+" svelte-6yyre0"),d(e,"role","group")},m:function(n,t){v(n,e,t);for(var l=0;l<c.length;l+=1)c[l].m(e,null);a=!0},p:function(n,r){2045&r&&(o=n[0],m(),c=p(c,r,s,1,n,o,l,e,E,Z,null,J),b()),(!a||2&r&&t!==(t=h(V(n[1]))+" svelte-6yyre0"))&&d(e,"class",t)},i:function(n){if(!a){for(var e=0;e<o.length;e+=1)$(c[e]);a=!0}},o:function(n){for(var e=0;e<c.length;e+=1)k(c[e]);a=!1},d:function(n){n&&f(e);for(var t=0;t<c.length;t+=1)c[t].d()}}}function Q(n){var e;function t(n,e){return null!=n[3]?W:U}var a=t(n),c=a(n);return{c:function(){c.c(),e=x()},l:function(n){c.l(n),e=x()},m:function(n,t){c.m(n,t),v(n,e,t)},p:function(n,l){a===(a=t(n))&&c?c.p(n,l):(c.d(1),(c=a(n))&&(c.c(),c.m(e.parentNode,e)))},d:function(n){c.d(n),n&&f(e)}}}function U(n){var e,t=(n[14].label||n[14].value)+"";return{c:function(){e=O(t)},l:function(n){e=_(n,t)},m:function(n,t){v(n,e,t)},p:function(n,a){1&a&&t!==(t=(n[14].label||n[14].value)+"")&&z(e,t)},d:function(n){n&&f(e)}}}function W(n){var e,t,a,c=(n[14].label||n[14].value)+"";return{c:function(){e=r("span"),t=O(c),this.h()},l:function(n){e=i(n,"SPAN",{class:!0});var a=u(e);t=_(a,c),a.forEach(f),this.h()},h:function(){d(e,"class",a=V(n[3]))},m:function(n,a){v(n,e,a),I(e,t)},p:function(n,l){1&l&&c!==(c=(n[14].label||n[14].value)+"")&&z(t,c),8&l&&a!==(a=V(n[3]))&&d(e,"class",a)},d:function(n){n&&f(e)}}}function X(n){var e,t=!n[4]&&Q(n);return{c:function(){t&&t.c(),e=A()},l:function(n){t&&t.l(n),e=D(n)},m:function(n,a){t&&t.m(n,a),v(n,e,a)},p:function(n,a){n[4]?t&&(t.d(1),t=null):t?t.p(n,a):((t=Q(n)).c(),t.m(e.parentNode,e))},d:function(n){t&&t.d(n),n&&f(e)}}}function Z(n,e){var t,a,c,l,o=[{name:e[5]},{slotLeft:e[6]},{selectorStyle:e[4]?Y(e[14].value):null},{value:e[14].value},{disabled:e[14].disabled||!e[14].checked&&e[8]>=e[7]},{class:V(e[4]&&"colored",e[2])},{title:!e[14].disabled&&!e[14].checked&&e[8]>=e[7]?e[9]:null},e[10]];function s(n){e[12](n,e[14])}for(var r={$$slots:{default:[X]},$$scope:{ctx:e}},i=0;i<o.length;i+=1)r=C(r,o[i]);return void 0!==e[14].checked&&(r.checked=e[14].checked),a=new G({props:r}),M.push((function(){return P(a,"checked",s)})),a.$on("change",e[13]),{key:n,first:null,c:function(){t=x(),L(a.$$.fragment),this.h()},l:function(n){t=x(),j(a.$$.fragment,n),this.h()},h:function(){this.first=t},m:function(n,e){v(n,t,e),T(a,n,e),l=!0},p:function(n,t){e=n;var l=2037&t?w(o,[32&t&&{name:e[5]},64&t&&{slotLeft:e[6]},17&t&&{selectorStyle:e[4]?Y(e[14].value):null},1&t&&{value:e[14].value},385&t&&{disabled:e[14].disabled||!e[14].checked&&e[8]>=e[7]},20&t&&{class:V(e[4]&&"colored",e[2])},897&t&&{title:!e[14].disabled&&!e[14].checked&&e[8]>=e[7]?e[9]:null},1024&t&&N(e[10])]):{};131097&t&&(l.$$scope={dirty:t,ctx:e}),!c&&1&t&&(c=!0,l.checked=e[14].checked,S((function(){return c=!1}))),a.$set(l)},i:function(n){l||($(a.$$.fragment,n),l=!0)},o:function(n){k(a.$$.fragment,n),l=!1},d:function(n){n&&f(t),B(a,n)}}}function nn(n){var e,t,a=null!=n[0]&&0!==n[0].length&&K(n);return{c:function(){a&&a.c(),e=x()},l:function(n){a&&a.l(n),e=x()},m:function(n,c){a&&a.m(n,c),v(n,e,c),t=!0},p:function(n,t){var c=g(t,1)[0];null!=n[0]&&0!==n[0].length?a?(a.p(n,c),1&c&&$(a,1)):((a=K(n)).c(),$(a,1),a.m(e.parentNode,e)):a&&(m(),k(a,1,1,(function(){a=null})),b())},i:function(n){t||($(a),t=!0)},o:function(n){k(a),t=!1},d:function(n){a&&a.d(n),n&&f(e)}}}function en(n,e,t){var a,c,l=["class","checkboxClass","labelClass","color","items","name","labelsLeft","max","maxReachedTooltip"],o=y(e,l),s=e.class,r=void 0===s?null:s,i=e.checkboxClass,u=void 0===i?null:i,f=e.labelClass,d=void 0===f?null:f,h=e.color,v=void 0!==h&&h,m=e.items,p=e.name,b=e.labelsLeft,$=void 0!==b&&b,k=e.max,x=void 0===k?1/0:k,g=e.maxReachedTooltip,L=void 0===g?null:g;return m&&0!==m.length||console.error("Must have at least one item in the checkbox group"),v&&null!=d&&console.warn("labelClass has no effect: labels are not rendered for color checkbox groups"),n.$$set=function(n){e=C(C({},e),R(n)),t(10,o=y(e,l)),"class"in n&&t(1,r=n.class),"checkboxClass"in n&&t(2,u=n.checkboxClass),"labelClass"in n&&t(3,d=n.labelClass),"color"in n&&t(4,v=n.color),"items"in n&&t(0,m=n.items),"name"in n&&t(5,p=n.name),"labelsLeft"in n&&t(6,$=n.labelsLeft),"max"in n&&t(7,x=n.max),"maxReachedTooltip"in n&&t(11,L=n.maxReachedTooltip)},n.$$.update=function(){var e;2176&n.$$.dirty&&t(9,a=null!==(e=L)&&void 0!==e?e:"Can only select ".concat(x," value").concat(F(x),"."));1&n.$$.dirty&&t(8,c=m.reduce((function(n,e){return n+e.checked}),0))},[m,r,u,d,v,p,$,x,c,a,o,L,function(e,a){n.$$.not_equal(a.checked,e)&&(a.checked=e,t(0,m))},function(e){q.call(this,n,e)}]}var tn=function(e){n(r,s);var t=H(r);function r(n){var e;return a(this,r),e=t.call(this),c(o(e),n,en,nn,l,{class:1,checkboxClass:2,labelClass:3,color:4,items:0,name:5,labelsLeft:6,max:7,maxReachedTooltip:11}),e}return r}();export{tn as C};
