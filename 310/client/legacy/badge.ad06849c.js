import{_ as t,a as e,b as n,c as s,i as a,s as $,d as o,S as r,e as c,f as p,g as l,h as f,j as i,k as m,l as u,m as d,n as g,O as h,p as x,r as k,t as w,Y as y,a3 as v,v as b,w as E,x as D,P as B,y as T,o as j,z as O,A as C,q as S,B as R}from"./client.59373107.js";import{L as A,H as N,P}from"./layout.fb17a5e0.js";import{B as z}from"./button.7b91245c.js";import{B as H}from"./badge.ce1213ab.js";import{S as F}from"./showcase.99b9840d.js";import{C as M}from"./color-preview.42ead0c2.js";import{S as W}from"./shadow-preview.4c2a989c.js";import{H as G}from"./h2.81aa0788.js";import{H as I}from"./h3.ce45886b.js";import{T as V,a as Y,b as L,c as U}from"./table.76c9233a.js";import"./classes.7d86155b.js";import"./label.e8d86d7c.js";import"./copyable-code.ff5e3093.js";import"./asyncToGenerator.3904ce9a.js";import"./popover.737ae5d9.js";function q(t){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,$=e(t);if(s){var o=e(this).constructor;a=Reflect.construct($,arguments,o)}else a=$.apply(this,arguments);return n(this,a)}}function K(t){var e,n,s,a;return{c:function(){e=c("svg"),n=c("path"),s=c("path"),this.h()},l:function(t){e=p(t,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var a=l(e);n=p(a,"path",{d:!0}),l(n).forEach(f),s=p(a,"path",{d:!0}),l(s).forEach(f),a.forEach(f),this.h()},h:function(){i(n,"d","M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"),i(s,"d","M13.73 21a2 2 0 0 1-3.46 0"),i(e,"xmlns","http://www.w3.org/2000/svg"),i(e,"width",t[0]),i(e,"height",t[0]),i(e,"fill","none"),i(e,"viewBox","0 0 24 24"),i(e,"stroke","currentColor"),i(e,"stroke-width",t[1]),i(e,"stroke-linecap","round"),i(e,"stroke-linejoin","round"),i(e,"class",a="feather feather-bell "+t[2])},m:function(t,a){m(t,e,a),u(e,n),u(e,s)},p:function(t,n){var s=d(n,1)[0];1&s&&i(e,"width",t[0]),1&s&&i(e,"height",t[0]),2&s&&i(e,"stroke-width",t[1]),4&s&&a!==(a="feather feather-bell "+t[2])&&i(e,"class",a)},i:g,o:g,d:function(t){t&&f(e)}}}function _(t,e,n){var s=e.size,a=void 0===s?"100%":s,$=e.strokeWidth,o=void 0===$?2:$,r=e.class,c=void 0===r?"":r;return"100%"!==a&&(a="x"===a.slice(-1)?a.slice(0,a.length-1)+"em":parseInt(a)+"px"),t.$$set=function(t){"size"in t&&n(0,a=t.size),"strokeWidth"in t&&n(1,o=t.strokeWidth),"class"in t&&n(2,c=t.class)},[a,o,c]}var J=function(e){t(c,r);var n=q(c);function c(t){var e;return s(this,c),e=n.call(this),a(o(e),t,_,K,$,{size:0,strokeWidth:1,class:2}),e}return c}();function Q(t){let e;return{c(){e=O("Badge")},l(t){e=R(t,"Badge")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function X(t){let e;return{c(){e=O("A distinctive colored circle to bring attention to an element.")},l(t){e=R(t,"A distinctive colored circle to bring attention to an element.")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function Z(t){let e;return{c(){e=O("used on some text")},l(t){e=R(t,"used on some text")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function tt(t){let e,n;return e=new J({props:{size:"20",class:"icon"}}),{c(){x(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){w(e,t,s),n=!0},p:g,i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){E(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function et(t){let e,n;return e=new H({props:{hidden:t[0],$$slots:{default:[tt]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){w(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.hidden=t[0]),8&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){E(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function nt(t){let e,n,s,a,$;return n=new H({props:{$$slots:{default:[Z]},$$scope:{ctx:t}}}),a=new z({props:{round:!0,$$slots:{default:[et]},$$scope:{ctx:t}}}),a.$on("click",t[2]),{c(){e=j("div"),x(n.$$.fragment),s=T(),x(a.$$.fragment),this.h()},l(t){e=S(t,"DIV",{slot:!0,class:!0});var $=l(e);k(n.$$.fragment,$),s=C($),k(a.$$.fragment,$),$.forEach(f),this.h()},h(){i(e,"slot","showcase"),i(e,"class","padded")},m(t,o){m(t,e,o),w(n,e,null),u(e,s),w(a,e,null),$=!0},p(t,e){const s={};8&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const $={};9&e&&($.$$scope={dirty:e,ctx:t}),a.$set($)},i(t){$||(b(n.$$.fragment,t),b(a.$$.fragment,t),$=!0)},o(t){E(n.$$.fragment,t),E(a.$$.fragment,t),$=!1},d(t){t&&f(e),D(n),D(a)}}}function st(t){let e,n;return{c(){e=j("div"),n=j("pre"),this.h()},l(t){e=S(t,"DIV",{slot:!0});var s=l(e);n=S(s,"PRE",{class:!0}),l(n).forEach(f),s.forEach(f),this.h()},h(){i(n,"class","language-svelte"),i(e,"slot","source")},m(t,s){m(t,e,s),u(e,n),n.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">let</span> hidden <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span><span class="token punctuation">></span></span>used on some text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">round</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> hidden <span class="token operator">=</span> <span class="token operator">!</span>hidden<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>hidden<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BellIcon</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span></code>'},p:g,d(t){t&&f(e)}}}function at(t){let e;return{c(){e=O("Properties")},l(t){e=R(t,"Properties")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function $t(t){let e;return{c(){e=O("Functional Properties")},l(t){e=R(t,"Functional Properties")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function ot(t){let e;return{c(){e=O("Name")},l(t){e=R(t,"Name")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function rt(t){let e;return{c(){e=O("Default")},l(t){e=R(t,"Default")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function ct(t){let e;return{c(){e=O("Type")},l(t){e=R(t,"Type")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function pt(t){let e;return{c(){e=O("Description")},l(t){e=R(t,"Description")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function lt(t){let e,n,s,a,$,o,r,c;return e=new L({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),s=new L({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),$=new L({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),r=new L({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment),n=T(),x(s.$$.fragment),a=T(),x($.$$.fragment),o=T(),x(r.$$.fragment)},l(t){k(e.$$.fragment,t),n=C(t),k(s.$$.fragment,t),a=C(t),k($.$$.fragment,t),o=C(t),k(r.$$.fragment,t)},m(t,p){w(e,t,p),m(t,n,p),w(s,t,p),m(t,a,p),w($,t,p),m(t,o,p),w(r,t,p),c=!0},p(t,n){const a={};8&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const o={};8&n&&(o.$$scope={dirty:n,ctx:t}),s.$set(o);const c={};8&n&&(c.$$scope={dirty:n,ctx:t}),$.$set(c);const p={};8&n&&(p.$$scope={dirty:n,ctx:t}),r.$set(p)},i(t){c||(b(e.$$.fragment,t),b(s.$$.fragment,t),b($.$$.fragment,t),b(r.$$.fragment,t),c=!0)},o(t){E(e.$$.fragment,t),E(s.$$.fragment,t),E($.$$.fragment,t),E(r.$$.fragment,t),c=!1},d(t){D(e,t),t&&f(n),D(s,t),t&&f(a),D($,t),t&&f(o),D(r,t)}}}function ft(t){let e,n,s;return{c(){e=j("strong"),n=j("code"),s=O("hidden")},l(t){e=S(t,"STRONG",{});var a=l(e);n=S(a,"CODE",{});var $=l(n);s=R($,"hidden"),$.forEach(f),a.forEach(f)},m(t,a){m(t,e,a),u(e,n),u(n,s)},d(t){t&&f(e)}}}function it(t){let e,n;return{c(){e=j("code"),n=O("false")},l(t){e=S(t,"CODE",{});var s=l(e);n=R(s,"false"),s.forEach(f)},m(t,s){m(t,e,s),u(e,n)},d(t){t&&f(e)}}}function mt(t){let e,n;return{c(){e=j("code"),n=O("boolean")},l(t){e=S(t,"CODE",{});var s=l(e);n=R(s,"boolean"),s.forEach(f)},m(t,s){m(t,e,s),u(e,n)},d(t){t&&f(e)}}}function ut(t){let e;return{c(){e=O("Whether the badge is shown or hidden. Useful for controlling its appearance without modifying the DOM tree.")},l(t){e=R(t,"Whether the badge is shown or hidden. Useful for controlling its appearance without modifying the DOM tree.")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function dt(t){let e,n,s,a,$,o,r,c;return e=new U({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),s=new U({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),$=new U({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),r=new U({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment),n=T(),x(s.$$.fragment),a=T(),x($.$$.fragment),o=T(),x(r.$$.fragment)},l(t){k(e.$$.fragment,t),n=C(t),k(s.$$.fragment,t),a=C(t),k($.$$.fragment,t),o=C(t),k(r.$$.fragment,t)},m(t,p){w(e,t,p),m(t,n,p),w(s,t,p),m(t,a,p),w($,t,p),m(t,o,p),w(r,t,p),c=!0},p(t,n){const a={};8&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const o={};8&n&&(o.$$scope={dirty:n,ctx:t}),s.$set(o);const c={};8&n&&(c.$$scope={dirty:n,ctx:t}),$.$set(c);const p={};8&n&&(p.$$scope={dirty:n,ctx:t}),r.$set(p)},i(t){c||(b(e.$$.fragment,t),b(s.$$.fragment,t),b($.$$.fragment,t),b(r.$$.fragment,t),c=!0)},o(t){E(e.$$.fragment,t),E(s.$$.fragment,t),E($.$$.fragment,t),E(r.$$.fragment,t),c=!1},d(t){D(e,t),t&&f(n),D(s,t),t&&f(a),D($,t),t&&f(o),D(r,t)}}}function gt(t){let e,n,s,a,$,o;return n=new Y({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),$=new Y({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),{c(){e=j("thead"),x(n.$$.fragment),s=T(),a=j("tbody"),x($.$$.fragment)},l(t){e=S(t,"THEAD",{});var o=l(e);k(n.$$.fragment,o),o.forEach(f),s=C(t),a=S(t,"TBODY",{});var r=l(a);k($.$$.fragment,r),r.forEach(f)},m(t,r){m(t,e,r),w(n,e,null),m(t,s,r),m(t,a,r),w($,a,null),o=!0},p(t,e){const s={};8&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const a={};8&e&&(a.$$scope={dirty:e,ctx:t}),$.$set(a)},i(t){o||(b(n.$$.fragment,t),b($.$$.fragment,t),o=!0)},o(t){E(n.$$.fragment,t),E($.$$.fragment,t),o=!1},d(t){t&&f(e),D(n),t&&f(s),t&&f(a),D($)}}}function ht(t){let e;return{c(){e=O("Class Properties")},l(t){e=R(t,"Class Properties")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function xt(t){let e,n,s,a,$,o,r;return{c(){e=O("All "),n=j("code"),s=O("<Badge>"),a=O(" components use the "),$=j("code"),o=O(".badge"),r=O(" class.")},l(t){e=R(t,"All "),n=S(t,"CODE",{});var c=l(n);s=R(c,"<Badge>"),c.forEach(f),a=R(t," components use the "),$=S(t,"CODE",{});var p=l($);o=R(p,".badge"),p.forEach(f),r=R(t," class.")},m(t,c){m(t,e,c),m(t,n,c),u(n,s),m(t,a,c),m(t,$,c),u($,o),m(t,r,c)},d(t){t&&f(e),t&&f(n),t&&f(a),t&&f($),t&&f(r)}}}function kt(t){let e;return{c(){e=O("Falsy values passed to classes will be disregarded.")},l(t){e=R(t,"Falsy values passed to classes will be disregarded.")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function wt(t){let e;return{c(){e=O("Name")},l(t){e=R(t,"Name")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function yt(t){let e;return{c(){e=O("Default")},l(t){e=R(t,"Default")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function vt(t){let e;return{c(){e=O("Type")},l(t){e=R(t,"Type")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function bt(t){let e;return{c(){e=O("Description")},l(t){e=R(t,"Description")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function Et(t){let e,n,s,a,$,o,r,c;return e=new L({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),s=new L({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),$=new L({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}}),r=new L({props:{$$slots:{default:[bt]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment),n=T(),x(s.$$.fragment),a=T(),x($.$$.fragment),o=T(),x(r.$$.fragment)},l(t){k(e.$$.fragment,t),n=C(t),k(s.$$.fragment,t),a=C(t),k($.$$.fragment,t),o=C(t),k(r.$$.fragment,t)},m(t,p){w(e,t,p),m(t,n,p),w(s,t,p),m(t,a,p),w($,t,p),m(t,o,p),w(r,t,p),c=!0},p(t,n){const a={};8&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const o={};8&n&&(o.$$scope={dirty:n,ctx:t}),s.$set(o);const c={};8&n&&(c.$$scope={dirty:n,ctx:t}),$.$set(c);const p={};8&n&&(p.$$scope={dirty:n,ctx:t}),r.$set(p)},i(t){c||(b(e.$$.fragment,t),b(s.$$.fragment,t),b($.$$.fragment,t),b(r.$$.fragment,t),c=!0)},o(t){E(e.$$.fragment,t),E(s.$$.fragment,t),E($.$$.fragment,t),E(r.$$.fragment,t),c=!1},d(t){D(e,t),t&&f(n),D(s,t),t&&f(a),D($,t),t&&f(o),D(r,t)}}}function Dt(t){let e,n,s;return{c(){e=j("strong"),n=j("code"),s=O("class")},l(t){e=S(t,"STRONG",{});var a=l(e);n=S(a,"CODE",{});var $=l(n);s=R($,"class"),$.forEach(f),a.forEach(f)},m(t,a){m(t,e,a),u(e,n),u(n,s)},d(t){t&&f(e)}}}function Bt(t){let e,n;return{c(){e=j("code"),n=O("null")},l(t){e=S(t,"CODE",{});var s=l(e);n=R(s,"null"),s.forEach(f)},m(t,s){m(t,e,s),u(e,n)},d(t){t&&f(e)}}}function Tt(t){let e,n;return{c(){e=j("code"),n=O("string")},l(t){e=S(t,"CODE",{});var s=l(e);n=R(s,"string"),s.forEach(f)},m(t,s){m(t,e,s),u(e,n)},d(t){t&&f(e)}}}function jt(t){let e;return{c(){e=O("A class string to add to the handle.")},l(t){e=R(t,"A class string to add to the handle.")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function Ot(t){let e,n,s,a,$,o,r,c;return e=new U({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),s=new U({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),$=new U({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),r=new U({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment),n=T(),x(s.$$.fragment),a=T(),x($.$$.fragment),o=T(),x(r.$$.fragment)},l(t){k(e.$$.fragment,t),n=C(t),k(s.$$.fragment,t),a=C(t),k($.$$.fragment,t),o=C(t),k(r.$$.fragment,t)},m(t,p){w(e,t,p),m(t,n,p),w(s,t,p),m(t,a,p),w($,t,p),m(t,o,p),w(r,t,p),c=!0},p(t,n){const a={};8&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const o={};8&n&&(o.$$scope={dirty:n,ctx:t}),s.$set(o);const c={};8&n&&(c.$$scope={dirty:n,ctx:t}),$.$set(c);const p={};8&n&&(p.$$scope={dirty:n,ctx:t}),r.$set(p)},i(t){c||(b(e.$$.fragment,t),b(s.$$.fragment,t),b($.$$.fragment,t),b(r.$$.fragment,t),c=!0)},o(t){E(e.$$.fragment,t),E(s.$$.fragment,t),E($.$$.fragment,t),E(r.$$.fragment,t),c=!1},d(t){D(e,t),t&&f(n),D(s,t),t&&f(a),D($,t),t&&f(o),D(r,t)}}}function Ct(t){let e,n,s,a,$,o;return n=new Y({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),$=new Y({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}}),{c(){e=j("thead"),x(n.$$.fragment),s=T(),a=j("tbody"),x($.$$.fragment)},l(t){e=S(t,"THEAD",{});var o=l(e);k(n.$$.fragment,o),o.forEach(f),s=C(t),a=S(t,"TBODY",{});var r=l(a);k($.$$.fragment,r),r.forEach(f)},m(t,r){m(t,e,r),w(n,e,null),m(t,s,r),m(t,a,r),w($,a,null),o=!0},p(t,e){const s={};8&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const a={};8&e&&(a.$$scope={dirty:e,ctx:t}),$.$set(a)},i(t){o||(b(n.$$.fragment,t),b($.$$.fragment,t),o=!0)},o(t){E(n.$$.fragment,t),E($.$$.fragment,t),o=!1},d(t){t&&f(e),D(n),t&&f(s),t&&f(a),D($)}}}function St(t){let e;return{c(){e=O("Slots")},l(t){e=R(t,"Slots")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function Rt(t){let e;return{c(){e=O("Default slot")},l(t){e=R(t,"Default slot")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function At(t){let e;return{c(){e=O("The element to attach a badge to.")},l(t){e=R(t,"The element to attach a badge to.")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function Nt(t){let e;return{c(){e=O("SCSS Variables")},l(t){e=R(t,"SCSS Variables")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function Pt(t){let e;return{c(){e=O("Name")},l(t){e=R(t,"Name")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function zt(t){let e;return{c(){e=O("Description")},l(t){e=R(t,"Description")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function Ht(t){let e;return{c(){e=O("Default")},l(t){e=R(t,"Default")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function Ft(t){let e,n,s,a,$,o;return e=new L({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),s=new L({props:{$$slots:{default:[zt]},$$scope:{ctx:t}}}),$=new L({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment),n=T(),x(s.$$.fragment),a=T(),x($.$$.fragment)},l(t){k(e.$$.fragment,t),n=C(t),k(s.$$.fragment,t),a=C(t),k($.$$.fragment,t)},m(t,r){w(e,t,r),m(t,n,r),w(s,t,r),m(t,a,r),w($,t,r),o=!0},p(t,n){const a={};8&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const o={};8&n&&(o.$$scope={dirty:n,ctx:t}),s.$set(o);const r={};8&n&&(r.$$scope={dirty:n,ctx:t}),$.$set(r)},i(t){o||(b(e.$$.fragment,t),b(s.$$.fragment,t),b($.$$.fragment,t),o=!0)},o(t){E(e.$$.fragment,t),E(s.$$.fragment,t),E($.$$.fragment,t),o=!1},d(t){D(e,t),t&&f(n),D(s,t),t&&f(a),D($,t)}}}function Mt(t){let e,n,s;return{c(){e=j("strong"),n=j("code"),s=O("$shadow-raised")},l(t){e=S(t,"STRONG",{});var a=l(e);n=S(a,"CODE",{});var $=l(n);s=R($,"$shadow-raised"),$.forEach(f),a.forEach(f)},m(t,a){m(t,e,a),u(e,n),u(n,s)},d(t){t&&f(e)}}}function Wt(t){let e;return{c(){e=O("The shadow of the badge.")},l(t){e=R(t,"The shadow of the badge.")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function Gt(t){let e,n;return e=new W({props:{value:Xt}}),{c(){x(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){w(e,t,s),n=!0},p:g,i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){E(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function It(t){let e,n,s,a,$,o;return e=new U({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}}),s=new U({props:{$$slots:{default:[Wt]},$$scope:{ctx:t}}}),$=new U({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment),n=T(),x(s.$$.fragment),a=T(),x($.$$.fragment)},l(t){k(e.$$.fragment,t),n=C(t),k(s.$$.fragment,t),a=C(t),k($.$$.fragment,t)},m(t,r){w(e,t,r),m(t,n,r),w(s,t,r),m(t,a,r),w($,t,r),o=!0},p(t,n){const a={};8&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const o={};8&n&&(o.$$scope={dirty:n,ctx:t}),s.$set(o);const r={};8&n&&(r.$$scope={dirty:n,ctx:t}),$.$set(r)},i(t){o||(b(e.$$.fragment,t),b(s.$$.fragment,t),b($.$$.fragment,t),o=!0)},o(t){E(e.$$.fragment,t),E(s.$$.fragment,t),E($.$$.fragment,t),o=!1},d(t){D(e,t),t&&f(n),D(s,t),t&&f(a),D($,t)}}}function Vt(t){let e,n,s;return{c(){e=j("strong"),n=j("code"),s=O("$badge-default")},l(t){e=S(t,"STRONG",{});var a=l(e);n=S(a,"CODE",{});var $=l(n);s=R($,"$badge-default"),$.forEach(f),a.forEach(f)},m(t,a){m(t,e,a),u(e,n),u(n,s)},d(t){t&&f(e)}}}function Yt(t){let e;return{c(){e=O("The default color of the badge.")},l(t){e=R(t,"The default color of the badge.")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function Lt(t){let e,n;return e=new M({props:{value:"#FF5757"}}),{c(){x(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){w(e,t,s),n=!0},p:g,i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){E(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function Ut(t){let e,n,s,a,$,o;return e=new U({props:{$$slots:{default:[Vt]},$$scope:{ctx:t}}}),s=new U({props:{$$slots:{default:[Yt]},$$scope:{ctx:t}}}),$=new U({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment),n=T(),x(s.$$.fragment),a=T(),x($.$$.fragment)},l(t){k(e.$$.fragment,t),n=C(t),k(s.$$.fragment,t),a=C(t),k($.$$.fragment,t)},m(t,r){w(e,t,r),m(t,n,r),w(s,t,r),m(t,a,r),w($,t,r),o=!0},p(t,n){const a={};8&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const o={};8&n&&(o.$$scope={dirty:n,ctx:t}),s.$set(o);const r={};8&n&&(r.$$scope={dirty:n,ctx:t}),$.$set(r)},i(t){o||(b(e.$$.fragment,t),b(s.$$.fragment,t),b($.$$.fragment,t),o=!0)},o(t){E(e.$$.fragment,t),E(s.$$.fragment,t),E($.$$.fragment,t),o=!1},d(t){D(e,t),t&&f(n),D(s,t),t&&f(a),D($,t)}}}function qt(t){let e,n,s,a,$,o,r,c;return n=new Y({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),$=new Y({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),r=new Y({props:{$$slots:{default:[Ut]},$$scope:{ctx:t}}}),{c(){e=j("thead"),x(n.$$.fragment),s=T(),a=j("tbody"),x($.$$.fragment),o=T(),x(r.$$.fragment)},l(t){e=S(t,"THEAD",{});var c=l(e);k(n.$$.fragment,c),c.forEach(f),s=C(t),a=S(t,"TBODY",{});var p=l(a);k($.$$.fragment,p),o=C(p),k(r.$$.fragment,p),p.forEach(f)},m(t,p){m(t,e,p),w(n,e,null),m(t,s,p),m(t,a,p),w($,a,null),u(a,o),w(r,a,null),c=!0},p(t,e){const s={};8&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const a={};8&e&&(a.$$scope={dirty:e,ctx:t}),$.$set(a);const o={};8&e&&(o.$$scope={dirty:e,ctx:t}),r.$set(o)},i(t){c||(b(n.$$.fragment,t),b($.$$.fragment,t),b(r.$$.fragment,t),c=!0)},o(t){E(n.$$.fragment,t),E($.$$.fragment,t),E(r.$$.fragment,t),c=!1},d(t){t&&f(e),D(n),t&&f(s),t&&f(a),D($),D(r)}}}function Kt(t){let e,n,s,a,$,o,r,c,p,i,d,g,h,y,v,B,A,z,H,M,W,Y,L,U,q,K,_,J,Z,tt,et,ot,rt;return e=new N({props:{$$slots:{default:[Q]},$$scope:{ctx:t}}}),s=new P({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),$=new F({props:{$$slots:{source:[st],showcase:[nt]},$$scope:{ctx:t}}}),r=new G({props:{id:"properties",$$slots:{default:[at]},$$scope:{ctx:t}}}),p=new I({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),d=new V({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),h=new I({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),v=new P({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),A=new P({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),H=new V({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),U=new G({props:{id:"slots",$$slots:{default:[St]},$$scope:{ctx:t}}}),K=new I({props:{$$slots:{default:[Rt]},$$scope:{ctx:t}}}),J=new P({props:{$$slots:{default:[At]},$$scope:{ctx:t}}}),tt=new G({props:{id:"scss-variables",$$slots:{default:[Nt]},$$scope:{ctx:t}}}),ot=new V({props:{$$slots:{default:[qt]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment),n=T(),x(s.$$.fragment),a=T(),x($.$$.fragment),o=T(),x(r.$$.fragment),c=T(),x(p.$$.fragment),i=T(),x(d.$$.fragment),g=T(),x(h.$$.fragment),y=T(),x(v.$$.fragment),B=T(),x(A.$$.fragment),z=T(),x(H.$$.fragment),M=T(),W=j("mark"),Y=O("Bonus"),L=O(": use the `.icon` class for the icons inside the badge to set `display: block` on them and avoid unexpected space at the bottom.\n"),x(U.$$.fragment),q=T(),x(K.$$.fragment),_=T(),x(J.$$.fragment),Z=T(),x(tt.$$.fragment),et=T(),x(ot.$$.fragment)},l(t){k(e.$$.fragment,t),n=C(t),k(s.$$.fragment,t),a=C(t),k($.$$.fragment,t),o=C(t),k(r.$$.fragment,t),c=C(t),k(p.$$.fragment,t),i=C(t),k(d.$$.fragment,t),g=C(t),k(h.$$.fragment,t),y=C(t),k(v.$$.fragment,t),B=C(t),k(A.$$.fragment,t),z=C(t),k(H.$$.fragment,t),M=C(t),W=S(t,"MARK",{});var m=l(W);Y=R(m,"Bonus"),m.forEach(f),L=R(t,": use the `.icon` class for the icons inside the badge to set `display: block` on them and avoid unexpected space at the bottom.\n"),k(U.$$.fragment,t),q=C(t),k(K.$$.fragment,t),_=C(t),k(J.$$.fragment,t),Z=C(t),k(tt.$$.fragment,t),et=C(t),k(ot.$$.fragment,t)},m(t,l){w(e,t,l),m(t,n,l),w(s,t,l),m(t,a,l),w($,t,l),m(t,o,l),w(r,t,l),m(t,c,l),w(p,t,l),m(t,i,l),w(d,t,l),m(t,g,l),w(h,t,l),m(t,y,l),w(v,t,l),m(t,B,l),w(A,t,l),m(t,z,l),w(H,t,l),m(t,M,l),m(t,W,l),u(W,Y),m(t,L,l),w(U,t,l),m(t,q,l),w(K,t,l),m(t,_,l),w(J,t,l),m(t,Z,l),w(tt,t,l),m(t,et,l),w(ot,t,l),rt=!0},p(t,n){const a={};8&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const o={};8&n&&(o.$$scope={dirty:n,ctx:t}),s.$set(o);const c={};9&n&&(c.$$scope={dirty:n,ctx:t}),$.$set(c);const l={};8&n&&(l.$$scope={dirty:n,ctx:t}),r.$set(l);const f={};8&n&&(f.$$scope={dirty:n,ctx:t}),p.$set(f);const i={};8&n&&(i.$$scope={dirty:n,ctx:t}),d.$set(i);const m={};8&n&&(m.$$scope={dirty:n,ctx:t}),h.$set(m);const u={};8&n&&(u.$$scope={dirty:n,ctx:t}),v.$set(u);const g={};8&n&&(g.$$scope={dirty:n,ctx:t}),A.$set(g);const x={};8&n&&(x.$$scope={dirty:n,ctx:t}),H.$set(x);const k={};8&n&&(k.$$scope={dirty:n,ctx:t}),U.$set(k);const w={};8&n&&(w.$$scope={dirty:n,ctx:t}),K.$set(w);const y={};8&n&&(y.$$scope={dirty:n,ctx:t}),J.$set(y);const b={};8&n&&(b.$$scope={dirty:n,ctx:t}),tt.$set(b);const E={};8&n&&(E.$$scope={dirty:n,ctx:t}),ot.$set(E)},i(t){rt||(b(e.$$.fragment,t),b(s.$$.fragment,t),b($.$$.fragment,t),b(r.$$.fragment,t),b(p.$$.fragment,t),b(d.$$.fragment,t),b(h.$$.fragment,t),b(v.$$.fragment,t),b(A.$$.fragment,t),b(H.$$.fragment,t),b(U.$$.fragment,t),b(K.$$.fragment,t),b(J.$$.fragment,t),b(tt.$$.fragment,t),b(ot.$$.fragment,t),rt=!0)},o(t){E(e.$$.fragment,t),E(s.$$.fragment,t),E($.$$.fragment,t),E(r.$$.fragment,t),E(p.$$.fragment,t),E(d.$$.fragment,t),E(h.$$.fragment,t),E(v.$$.fragment,t),E(A.$$.fragment,t),E(H.$$.fragment,t),E(U.$$.fragment,t),E(K.$$.fragment,t),E(J.$$.fragment,t),E(tt.$$.fragment,t),E(ot.$$.fragment,t),rt=!1},d(t){D(e,t),t&&f(n),D(s,t),t&&f(a),D($,t),t&&f(o),D(r,t),t&&f(c),D(p,t),t&&f(i),D(d,t),t&&f(g),D(h,t),t&&f(y),D(v,t),t&&f(B),D(A,t),t&&f(z),D(H,t),t&&f(M),t&&f(W),t&&f(L),D(U,t),t&&f(q),D(K,t),t&&f(_),D(J,t),t&&f(Z),D(tt,t),t&&f(et),D(ot,t)}}}function _t(t){let e,n;const s=[t[1],Jt];let a={$$slots:{default:[Kt]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)a=h(a,s[t]);return e=new A({props:a}),{c(){x(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,s){w(e,t,s),n=!0},p(t,[n]){const a=2&n?y(s,[2&n&&v(t[1]),0&n&&v(Jt)]):{};9&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){E(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}const Jt={name:"Badge",shadowRaised:"0 2px 4px -1px rgba(0, 0, 0, .2), 0 3px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12);"},{name:Qt,shadowRaised:Xt}=Jt;function Zt(t,e,n){let s=!1;return t.$$set=t=>{n(1,e=h(h({},e),B(t)))},e=B(e),[s,e,()=>n(0,s=!s)]}class te extends r{constructor(t){super(),a(this,t,Zt,_t,$,{})}}export{te as default,Jt as metadata};
