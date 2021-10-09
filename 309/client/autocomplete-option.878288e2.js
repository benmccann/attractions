import{S as t,i as e,s as n,J as $,j as s,l as a,m as o,T as r,Z as c,t as p,p as f,q as l,K as m,r as i,h as g,u,v as d,k as h,b as x,w as k,d as w,e as y,f as E,g as v,n as D,x as b,y as O,a3 as T}from"./client.d83161ea.js";import{L as A,H as j,P as C}from"./layout.23c4d3ca.js";import{A as N}from"./autocomplete-option.7052228b.js";import{S}from"./showcase.eed2b5cb.js";import{C as R}from"./color-preview.8729b3d1.js";import{R as q}from"./related-components.2748c6ce.js";import{H as F}from"./h2.57812bae.js";import{H as G}from"./h3.88c67131.js";import{T as H,a as P,b as B,c as I}from"./table.076b078c.js";import"./label.cc4b8a65.js";import"./classes.2453fa25.js";import"./copyable-code.4ffe3eb8.js";import"./button.0486ad99.js";import"./card.44f23e4b.js";function V(t,e,n){const $=t.slice();return $[2]=e[n],$}function K(t){let e;return{c(){e=u("AutocompleteOption")},l(t){e=k(t,"AutocompleteOption")},m(t,n){E(t,e,n)},d(t){t&&w(e)}}}function M(t){let e;return{c(){e=u("A list item representing an autocomplete suggestion.")},l(t){e=k(t,"A list item representing an autocomplete suggestion.")},m(t,n){E(t,e,n)},d(t){t&&w(e)}}}function Y(t){let e,n,$,s,a,o;return{c(){e=u("It's unlikely that this component will be used by itself, but it is a part of the larger "),n=g("a"),$=g("mark"),s=g("code"),a=u("Autocomplete"),o=u(" component."),this.h()},l(t){e=k(t,"It's unlikely that this component will be used by itself, but it is a part of the larger "),n=h(t,"A",{href:!0});var r=x(n);$=h(r,"MARK",{});var c=x($);s=h(c,"CODE",{});var p=x(s);a=k(p,"Autocomplete"),p.forEach(w),c.forEach(w),r.forEach(w),o=k(t," component."),this.h()},h(){y(n,"href","./docs/components/autocomplete")},m(t,r){E(t,e,r),E(t,n,r),v(n,$),v($,s),v(s,a),E(t,o,r)},d(t){t&&w(e),t&&w(n),t&&w(o)}}}function z(t){let e,n;return e=new N({props:{option:t[2],query:"tio"}}),{c(){s(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,$){o(e,t,$),n=!0},p:D,i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){f(e.$$.fragment,t),n=!1},d(t){l(e,t)}}}function L(t){let e,n,$=t[0],s=[];for(let e=0;e<$.length;e+=1)s[e]=z(V(t,$,e));const a=t=>f(s[t],1,1,(()=>{s[t]=null}));return{c(){e=g("div");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=h(t,"DIV",{slot:!0,class:!0});var n=x(e);for(let t=0;t<s.length;t+=1)s[t].l(n);n.forEach(w),this.h()},h(){y(e,"slot","showcase"),y(e,"class","padded")},m(t,$){E(t,e,$);for(let t=0;t<s.length;t+=1)s[t].m(e,null);n=!0},p(t,n){if(1&n){let o;for($=t[0],o=0;o<$.length;o+=1){const a=V(t,$,o);s[o]?(s[o].p(a,n),p(s[o],1)):(s[o]=z(a),s[o].c(),p(s[o],1),s[o].m(e,null))}for(b(),o=$.length;o<s.length;o+=1)a(o);O()}},i(t){if(!n){for(let t=0;t<$.length;t+=1)p(s[t]);n=!0}},o(t){s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)f(s[t]);n=!1},d(t){t&&w(e),T(s,t)}}}function U(t){let e,n;return{c(){e=g("div"),n=g("pre"),this.h()},l(t){e=h(t,"DIV",{slot:!0});var $=x(e);n=h($,"PRE",{class:!0}),x(n).forEach(w),$.forEach(w),this.h()},h(){y(n,"class","language-svelte"),y(e,"slot","source")},m(t,$){E(t,e,$),v(e,n),n.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">&#123;</span> name<span class="token operator">:</span> <span class="token string">\'Test Option\'</span><span class="token punctuation">,</span> details<span class="token operator">:</span> <span class="token string">\'Description\'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#123;</span> name<span class="token operator">:</span> <span class="token string">\'Another One\'</span><span class="token punctuation">,</span> details<span class="token operator">:</span> <span class="token string">\'Different\'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#123;</span> name<span class="token operator">:</span> <span class="token string">\'No Description\'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">#each</span> <span class="token language-javascript">options </span><span class="token keyword">as</span> <span class="token language-javascript">option<span class="token punctuation">&#125;</span></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AutocompleteOption</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>option<span class="token punctuation">&#125;</span></span> <span class="token attr-name">query</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>tio<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">/each</span><span class="token punctuation">&#125;</span></span></code>'},p:D,d(t){t&&w(e)}}}function J(t){let e;return{c(){e=u("Properties")},l(t){e=k(t,"Properties")},m(t,n){E(t,e,n)},d(t){t&&w(e)}}}function Z(t){let e;return{c(){e=u("Functional Properties")},l(t){e=k(t,"Functional Properties")},m(t,n){E(t,e,n)},d(t){t&&w(e)}}}function Q(t){let e;return{c(){e=u("Name")},l(t){e=k(t,"Name")},m(t,n){E(t,e,n)},d(t){t&&w(e)}}}function W(t){let e;return{c(){e=u("Default")},l(t){e=k(t,"Default")},m(t,n){E(t,e,n)},d(t){t&&w(e)}}}function X(t){let e;return{c(){e=u("Type")},l(t){e=k(t,"Type")},m(t,n){E(t,e,n)},d(t){t&&w(e)}}}function _(t){let e;return{c(){e=u("Description")},l(t){e=k(t,"Description")},m(t,n){E(t,e,n)},d(t){t&&w(e)}}}function tt(t){let e,n,$,r,c,m,g,u;return e=new B({props:{$$slots:{default:[Q]},$$scope:{ctx:t}}}),$=new B({props:{$$slots:{default:[W]},$$scope:{ctx:t}}}),c=new B({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),g=new B({props:{$$slots:{default:[_]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),r=i(),s(c.$$.fragment),m=i(),s(g.$$.fragment)},l(t){a(e.$$.fragment,t),n=d(t),a($.$$.fragment,t),r=d(t),a(c.$$.fragment,t),m=d(t),a(g.$$.fragment,t)},m(t,s){o(e,t,s),E(t,n,s),o($,t,s),E(t,r,s),o(c,t,s),E(t,m,s),o(g,t,s),u=!0},p(t,n){const s={};32&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};32&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};32&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o);const r={};32&n&&(r.$$scope={dirty:n,ctx:t}),g.$set(r)},i(t){u||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),p(g.$$.fragment,t),u=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),f(g.$$.fragment,t),u=!1},d(t){l(e,t),t&&w(n),l($,t),t&&w(r),l(c,t),t&&w(m),l(g,t)}}}function et(t){let e,n,$,s,a,o,r;return{c(){e=g("mark"),n=g("strong"),$=g("code"),s=u("option"),a=u(" "),o=g("span"),r=u("*"),this.h()},l(t){e=h(t,"MARK",{});var c=x(e);n=h(c,"STRONG",{});var p=x(n);$=h(p,"CODE",{});var f=x($);s=k(f,"option"),f.forEach(w),p.forEach(w),c.forEach(w),a=k(t," "),o=h(t,"SPAN",{class:!0});var l=x(o);r=k(l,"*"),l.forEach(w),this.h()},h(){y(o,"class","required")},m(t,c){E(t,e,c),v(e,n),v(n,$),v($,s),E(t,a,c),E(t,o,c),v(o,r)},d(t){t&&w(e),t&&w(a),t&&w(o)}}}function nt(t){let e,n;return{c(){e=g("code"),n=u("Object")},l(t){e=h(t,"CODE",{});var $=x(e);n=k($,"Object"),$.forEach(w)},m(t,$){E(t,e,$),v(e,n)},d(t){t&&w(e)}}}function $t(t){let e,n,$,s,a,o,r;return{c(){e=u("The option object, containing a "),n=g("code"),$=u("name"),s=u(" field and, optionally, a "),a=g("code"),o=u("details"),r=u(" field, both strings.")},l(t){e=k(t,"The option object, containing a "),n=h(t,"CODE",{});var c=x(n);$=k(c,"name"),c.forEach(w),s=k(t," field and, optionally, a "),a=h(t,"CODE",{});var p=x(a);o=k(p,"details"),p.forEach(w),r=k(t," field, both strings.")},m(t,c){E(t,e,c),E(t,n,c),v(n,$),E(t,s,c),E(t,a,c),v(a,o),E(t,r,c)},d(t){t&&w(e),t&&w(n),t&&w(s),t&&w(a),t&&w(r)}}}function st(t){let e,n,$,r,c,m,g,u;return e=new I({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),$=new I({}),c=new I({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),g=new I({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),r=i(),s(c.$$.fragment),m=i(),s(g.$$.fragment)},l(t){a(e.$$.fragment,t),n=d(t),a($.$$.fragment,t),r=d(t),a(c.$$.fragment,t),m=d(t),a(g.$$.fragment,t)},m(t,s){o(e,t,s),E(t,n,s),o($,t,s),E(t,r,s),o(c,t,s),E(t,m,s),o(g,t,s),u=!0},p(t,n){const $={};32&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const s={};32&n&&(s.$$scope={dirty:n,ctx:t}),c.$set(s);const a={};32&n&&(a.$$scope={dirty:n,ctx:t}),g.$set(a)},i(t){u||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),p(g.$$.fragment,t),u=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),f(g.$$.fragment,t),u=!1},d(t){l(e,t),t&&w(n),l($,t),t&&w(r),l(c,t),t&&w(m),l(g,t)}}}function at(t){let e,n,$;return{c(){e=g("strong"),n=g("code"),$=u("query")},l(t){e=h(t,"STRONG",{});var s=x(e);n=h(s,"CODE",{});var a=x(n);$=k(a,"query"),a.forEach(w),s.forEach(w)},m(t,s){E(t,e,s),v(e,n),v(n,$)},d(t){t&&w(e)}}}function ot(t){let e,n;return{c(){e=g("code"),n=u("null")},l(t){e=h(t,"CODE",{});var $=x(e);n=k($,"null"),$.forEach(w)},m(t,$){E(t,e,$),v(e,n)},d(t){t&&w(e)}}}function rt(t){let e,n;return{c(){e=g("code"),n=u("string")},l(t){e=h(t,"CODE",{});var $=x(e);n=k($,"string"),$.forEach(w)},m(t,$){E(t,e,$),v(e,n)},d(t){t&&w(e)}}}function ct(t){let e;return{c(){e=u("The substring to seek out and highlight among the name and the details.")},l(t){e=k(t,"The substring to seek out and highlight among the name and the details.")},m(t,n){E(t,e,n)},d(t){t&&w(e)}}}function pt(t){let e,n,$,r,c,m,g,u;return e=new I({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),$=new I({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),c=new I({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),g=new I({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),r=i(),s(c.$$.fragment),m=i(),s(g.$$.fragment)},l(t){a(e.$$.fragment,t),n=d(t),a($.$$.fragment,t),r=d(t),a(c.$$.fragment,t),m=d(t),a(g.$$.fragment,t)},m(t,s){o(e,t,s),E(t,n,s),o($,t,s),E(t,r,s),o(c,t,s),E(t,m,s),o(g,t,s),u=!0},p(t,n){const s={};32&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};32&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};32&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o);const r={};32&n&&(r.$$scope={dirty:n,ctx:t}),g.$set(r)},i(t){u||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),p(g.$$.fragment,t),u=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),f(g.$$.fragment,t),u=!1},d(t){l(e,t),t&&w(n),l($,t),t&&w(r),l(c,t),t&&w(m),l(g,t)}}}function ft(t){let e,n,$,r,c,m,u,k;return n=new P({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),c=new P({props:{$$slots:{default:[st]},$$scope:{ctx:t}}}),u=new P({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),{c(){e=g("thead"),s(n.$$.fragment),$=i(),r=g("tbody"),s(c.$$.fragment),m=i(),s(u.$$.fragment)},l(t){e=h(t,"THEAD",{});var s=x(e);a(n.$$.fragment,s),s.forEach(w),$=d(t),r=h(t,"TBODY",{});var o=x(r);a(c.$$.fragment,o),m=d(o),a(u.$$.fragment,o),o.forEach(w)},m(t,s){E(t,e,s),o(n,e,null),E(t,$,s),E(t,r,s),o(c,r,null),v(r,m),o(u,r,null),k=!0},p(t,e){const $={};32&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};32&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s);const a={};32&e&&(a.$$scope={dirty:e,ctx:t}),u.$set(a)},i(t){k||(p(n.$$.fragment,t),p(c.$$.fragment,t),p(u.$$.fragment,t),k=!0)},o(t){f(n.$$.fragment,t),f(c.$$.fragment,t),f(u.$$.fragment,t),k=!1},d(t){t&&w(e),l(n),t&&w($),t&&w(r),l(c),l(u)}}}function lt(t){let e;return{c(){e=u("Events")},l(t){e=k(t,"Events")},m(t,n){E(t,e,n)},d(t){t&&w(e)}}}function mt(t){let e;return{c(){e=u("Name")},l(t){e=k(t,"Name")},m(t,n){E(t,e,n)},d(t){t&&w(e)}}}function it(t){let e;return{c(){e=u("Event Detail")},l(t){e=k(t,"Event Detail")},m(t,n){E(t,e,n)},d(t){t&&w(e)}}}function gt(t){let e;return{c(){e=u("Description")},l(t){e=k(t,"Description")},m(t,n){E(t,e,n)},d(t){t&&w(e)}}}function ut(t){let e,n,$,r,c,m;return e=new B({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),$=new B({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),c=new B({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),r=i(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=d(t),a($.$$.fragment,t),r=d(t),a(c.$$.fragment,t)},m(t,s){o(e,t,s),E(t,n,s),o($,t,s),E(t,r,s),o(c,t,s),m=!0},p(t,n){const s={};32&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};32&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};32&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o)},i(t){m||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),m=!1},d(t){l(e,t),t&&w(n),l($,t),t&&w(r),l(c,t)}}}function dt(t){let e,n,$;return{c(){e=g("strong"),n=g("code"),$=u("click")},l(t){e=h(t,"STRONG",{});var s=x(e);n=h(s,"CODE",{});var a=x(n);$=k(a,"click"),a.forEach(w),s.forEach(w)},m(t,s){E(t,e,s),v(e,n),v(n,$)},d(t){t&&w(e)}}}function ht(t){let e,n;return{c(){e=g("code"),n=u("{ nativeEvent }")},l(t){e=h(t,"CODE",{});var $=x(e);n=k($,"{ nativeEvent }"),$.forEach(w)},m(t,$){E(t,e,$),v(e,n)},d(t){t&&w(e)}}}function xt(t){let e,n,$,s,a,o,r;return{c(){e=u("Fired when the element is clicked. A necessary part of conforming to the "),n=g("a"),$=g("mark"),s=g("code"),a=u("AutocompleteField"),o=u("'s"),r=u(" interface."),this.h()},l(t){e=k(t,"Fired when the element is clicked. A necessary part of conforming to the "),n=h(t,"A",{href:!0});var c=x(n);$=h(c,"MARK",{});var p=x($);s=h(p,"CODE",{});var f=x(s);a=k(f,"AutocompleteField"),f.forEach(w),p.forEach(w),o=k(c,"'s"),c.forEach(w),r=k(t," interface."),this.h()},h(){y(n,"href","./docs/components/autocomplete-field")},m(t,c){E(t,e,c),E(t,n,c),v(n,$),v($,s),v(s,a),v(n,o),E(t,r,c)},d(t){t&&w(e),t&&w(n),t&&w(r)}}}function kt(t){let e,n,$,r,c,m;return e=new I({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),$=new I({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),c=new I({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),r=i(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=d(t),a($.$$.fragment,t),r=d(t),a(c.$$.fragment,t)},m(t,s){o(e,t,s),E(t,n,s),o($,t,s),E(t,r,s),o(c,t,s),m=!0},p(t,n){const s={};32&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};32&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};32&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o)},i(t){m||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),m=!1},d(t){l(e,t),t&&w(n),l($,t),t&&w(r),l(c,t)}}}function wt(t){let e,n,$,r,c,m;return n=new P({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),c=new P({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),{c(){e=g("thead"),s(n.$$.fragment),$=i(),r=g("tbody"),s(c.$$.fragment)},l(t){e=h(t,"THEAD",{});var s=x(e);a(n.$$.fragment,s),s.forEach(w),$=d(t),r=h(t,"TBODY",{});var o=x(r);a(c.$$.fragment,o),o.forEach(w)},m(t,s){E(t,e,s),o(n,e,null),E(t,$,s),E(t,r,s),o(c,r,null),m=!0},p(t,e){const $={};32&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};32&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s)},i(t){m||(p(n.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){f(n.$$.fragment,t),f(c.$$.fragment,t),m=!1},d(t){t&&w(e),l(n),t&&w($),t&&w(r),l(c)}}}function yt(t){let e;return{c(){e=u("SCSS Variables")},l(t){e=k(t,"SCSS Variables")},m(t,n){E(t,e,n)},d(t){t&&w(e)}}}function Et(t){let e;return{c(){e=u("Name")},l(t){e=k(t,"Name")},m(t,n){E(t,e,n)},d(t){t&&w(e)}}}function vt(t){let e;return{c(){e=u("Description")},l(t){e=k(t,"Description")},m(t,n){E(t,e,n)},d(t){t&&w(e)}}}function Dt(t){let e;return{c(){e=u("Default")},l(t){e=k(t,"Default")},m(t,n){E(t,e,n)},d(t){t&&w(e)}}}function bt(t){let e,n,$,r,c,m;return e=new B({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),$=new B({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}}),c=new B({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),r=i(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=d(t),a($.$$.fragment,t),r=d(t),a(c.$$.fragment,t)},m(t,s){o(e,t,s),E(t,n,s),o($,t,s),E(t,r,s),o(c,t,s),m=!0},p(t,n){const s={};32&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};32&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};32&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o)},i(t){m||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),m=!1},d(t){l(e,t),t&&w(n),l($,t),t&&w(r),l(c,t)}}}function Ot(t){let e,n,$;return{c(){e=g("strong"),n=g("code"),$=u("$main")},l(t){e=h(t,"STRONG",{});var s=x(e);n=h(s,"CODE",{});var a=x(n);$=k(a,"$main"),a.forEach(w),s.forEach(w)},m(t,s){E(t,e,s),v(e,n),v(n,$)},d(t){t&&w(e)}}}function Tt(t){let e;return{c(){e=u("The background color on hover and the color of the highlight.")},l(t){e=k(t,"The background color on hover and the color of the highlight.")},m(t,n){E(t,e,n)},d(t){t&&w(e)}}}function At(t){let e,n;return e=new R({props:{value:"#4300B0"}}),{c(){s(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,$){o(e,t,$),n=!0},p:D,i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){f(e.$$.fragment,t),n=!1},d(t){l(e,t)}}}function jt(t){let e,n,$,r,c,m;return e=new I({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}}),$=new I({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),c=new I({props:{$$slots:{default:[At]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),r=i(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=d(t),a($.$$.fragment,t),r=d(t),a(c.$$.fragment,t)},m(t,s){o(e,t,s),E(t,n,s),o($,t,s),E(t,r,s),o(c,t,s),m=!0},p(t,n){const s={};32&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};32&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};32&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o)},i(t){m||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),m=!1},d(t){l(e,t),t&&w(n),l($,t),t&&w(r),l(c,t)}}}function Ct(t){let e,n,$;return{c(){e=g("strong"),n=g("code"),$=u("$font")},l(t){e=h(t,"STRONG",{});var s=x(e);n=h(s,"CODE",{});var a=x(n);$=k(a,"$font"),a.forEach(w),s.forEach(w)},m(t,s){E(t,e,s),v(e,n),v(n,$)},d(t){t&&w(e)}}}function Nt(t){let e;return{c(){e=u("The font of the component.")},l(t){e=k(t,"The font of the component.")},m(t,n){E(t,e,n)},d(t){t&&w(e)}}}function St(t){let e,n;return{c(){e=g("code"),n=u("'Ubuntu'")},l(t){e=h(t,"CODE",{});var $=x(e);n=k($,"'Ubuntu'"),$.forEach(w)},m(t,$){E(t,e,$),v(e,n)},d(t){t&&w(e)}}}function Rt(t){let e,n,$,r,c,m;return e=new I({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),$=new I({props:{$$slots:{default:[Nt]},$$scope:{ctx:t}}}),c=new I({props:{$$slots:{default:[St]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),r=i(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=d(t),a($.$$.fragment,t),r=d(t),a(c.$$.fragment,t)},m(t,s){o(e,t,s),E(t,n,s),o($,t,s),E(t,r,s),o(c,t,s),m=!0},p(t,n){const s={};32&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};32&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};32&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o)},i(t){m||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),m=!1},d(t){l(e,t),t&&w(n),l($,t),t&&w(r),l(c,t)}}}function qt(t){let e,n,$;return{c(){e=g("strong"),n=g("code"),$=u("$thin-font-weight")},l(t){e=h(t,"STRONG",{});var s=x(e);n=h(s,"CODE",{});var a=x(n);$=k(a,"$thin-font-weight"),a.forEach(w),s.forEach(w)},m(t,s){E(t,e,s),v(e,n),v(n,$)},d(t){t&&w(e)}}}function Ft(t){let e;return{c(){e=u("The thin font weight to differentiate the details from the name.")},l(t){e=k(t,"The thin font weight to differentiate the details from the name.")},m(t,n){E(t,e,n)},d(t){t&&w(e)}}}function Gt(t){let e,n;return{c(){e=g("code"),n=u("300")},l(t){e=h(t,"CODE",{});var $=x(e);n=k($,"300"),$.forEach(w)},m(t,$){E(t,e,$),v(e,n)},d(t){t&&w(e)}}}function Ht(t){let e,n,$,r,c,m;return e=new I({props:{$$slots:{default:[qt]},$$scope:{ctx:t}}}),$=new I({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),c=new I({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),r=i(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=d(t),a($.$$.fragment,t),r=d(t),a(c.$$.fragment,t)},m(t,s){o(e,t,s),E(t,n,s),o($,t,s),E(t,r,s),o(c,t,s),m=!0},p(t,n){const s={};32&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};32&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};32&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o)},i(t){m||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),m=!1},d(t){l(e,t),t&&w(n),l($,t),t&&w(r),l(c,t)}}}function Pt(t){let e,n,$;return{c(){e=g("strong"),n=g("code"),$=u("$bold-font-weight")},l(t){e=h(t,"STRONG",{});var s=x(e);n=h(s,"CODE",{});var a=x(n);$=k(a,"$bold-font-weight"),a.forEach(w),s.forEach(w)},m(t,s){E(t,e,s),v(e,n),v(n,$)},d(t){t&&w(e)}}}function Bt(t){let e;return{c(){e=u("The bold font weight to emphasize the highight.")},l(t){e=k(t,"The bold font weight to emphasize the highight.")},m(t,n){E(t,e,n)},d(t){t&&w(e)}}}function It(t){let e,n;return{c(){e=g("code"),n=u("500")},l(t){e=h(t,"CODE",{});var $=x(e);n=k($,"500"),$.forEach(w)},m(t,$){E(t,e,$),v(e,n)},d(t){t&&w(e)}}}function Vt(t){let e,n,$,r,c,m;return e=new I({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),$=new I({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),c=new I({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),r=i(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=d(t),a($.$$.fragment,t),r=d(t),a(c.$$.fragment,t)},m(t,s){o(e,t,s),E(t,n,s),o($,t,s),E(t,r,s),o(c,t,s),m=!0},p(t,n){const s={};32&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};32&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};32&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o)},i(t){m||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),m=!1},d(t){l(e,t),t&&w(n),l($,t),t&&w(r),l(c,t)}}}function Kt(t){let e,n,$,r,c,m,u,k,y,D,b,O;return n=new P({props:{$$slots:{default:[bt]},$$scope:{ctx:t}}}),c=new P({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),u=new P({props:{$$slots:{default:[Rt]},$$scope:{ctx:t}}}),y=new P({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}}),b=new P({props:{$$slots:{default:[Vt]},$$scope:{ctx:t}}}),{c(){e=g("thead"),s(n.$$.fragment),$=i(),r=g("tbody"),s(c.$$.fragment),m=i(),s(u.$$.fragment),k=i(),s(y.$$.fragment),D=i(),s(b.$$.fragment)},l(t){e=h(t,"THEAD",{});var s=x(e);a(n.$$.fragment,s),s.forEach(w),$=d(t),r=h(t,"TBODY",{});var o=x(r);a(c.$$.fragment,o),m=d(o),a(u.$$.fragment,o),k=d(o),a(y.$$.fragment,o),D=d(o),a(b.$$.fragment,o),o.forEach(w)},m(t,s){E(t,e,s),o(n,e,null),E(t,$,s),E(t,r,s),o(c,r,null),v(r,m),o(u,r,null),v(r,k),o(y,r,null),v(r,D),o(b,r,null),O=!0},p(t,e){const $={};32&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};32&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s);const a={};32&e&&(a.$$scope={dirty:e,ctx:t}),u.$set(a);const o={};32&e&&(o.$$scope={dirty:e,ctx:t}),y.$set(o);const r={};32&e&&(r.$$scope={dirty:e,ctx:t}),b.$set(r)},i(t){O||(p(n.$$.fragment,t),p(c.$$.fragment,t),p(u.$$.fragment,t),p(y.$$.fragment,t),p(b.$$.fragment,t),O=!0)},o(t){f(n.$$.fragment,t),f(c.$$.fragment,t),f(u.$$.fragment,t),f(y.$$.fragment,t),f(b.$$.fragment,t),O=!1},d(t){t&&w(e),l(n),t&&w($),t&&w(r),l(c),l(u),l(y),l(b)}}}function Mt(t){let e,n,$,r,c,m,D,b,O,T,A,N,R,P,B,I,V,z,Q,W,X,_,tt,et,nt,$t,st;return e=new j({props:{$$slots:{default:[K]},$$scope:{ctx:t}}}),$=new C({props:{$$slots:{default:[M]},$$scope:{ctx:t}}}),c=new C({props:{$$slots:{default:[Y]},$$scope:{ctx:t}}}),D=new q({props:{components:Ut}}),O=new S({props:{$$slots:{source:[U],showcase:[L]},$$scope:{ctx:t}}}),A=new F({props:{id:"properties",$$slots:{default:[J]},$$scope:{ctx:t}}}),R=new G({props:{$$slots:{default:[Z]},$$scope:{ctx:t}}}),B=new H({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),W=new F({props:{id:"events",$$slots:{default:[lt]},$$scope:{ctx:t}}}),_=new H({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),et=new F({props:{id:"scss-variables",$$slots:{default:[yt]},$$scope:{ctx:t}}}),$t=new H({props:{$$slots:{default:[Kt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=i(),s($.$$.fragment),r=i(),s(c.$$.fragment),m=i(),s(D.$$.fragment),b=i(),s(O.$$.fragment),T=i(),s(A.$$.fragment),N=i(),s(R.$$.fragment),P=i(),s(B.$$.fragment),I=i(),V=g("div"),z=u("* Required"),Q=i(),s(W.$$.fragment),X=i(),s(_.$$.fragment),tt=i(),s(et.$$.fragment),nt=i(),s($t.$$.fragment),this.h()},l(t){a(e.$$.fragment,t),n=d(t),a($.$$.fragment,t),r=d(t),a(c.$$.fragment,t),m=d(t),a(D.$$.fragment,t),b=d(t),a(O.$$.fragment,t),T=d(t),a(A.$$.fragment,t),N=d(t),a(R.$$.fragment,t),P=d(t),a(B.$$.fragment,t),I=d(t),V=h(t,"DIV",{class:!0});var s=x(V);z=k(s,"* Required"),s.forEach(w),Q=d(t),a(W.$$.fragment,t),X=d(t),a(_.$$.fragment,t),tt=d(t),a(et.$$.fragment,t),nt=d(t),a($t.$$.fragment,t),this.h()},h(){y(V,"class","required")},m(t,s){o(e,t,s),E(t,n,s),o($,t,s),E(t,r,s),o(c,t,s),E(t,m,s),o(D,t,s),E(t,b,s),o(O,t,s),E(t,T,s),o(A,t,s),E(t,N,s),o(R,t,s),E(t,P,s),o(B,t,s),E(t,I,s),E(t,V,s),v(V,z),E(t,Q,s),o(W,t,s),E(t,X,s),o(_,t,s),E(t,tt,s),o(et,t,s),E(t,nt,s),o($t,t,s),st=!0},p(t,n){const s={};32&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};32&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};32&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o);const r={};32&n&&(r.$$scope={dirty:n,ctx:t}),O.$set(r);const p={};32&n&&(p.$$scope={dirty:n,ctx:t}),A.$set(p);const f={};32&n&&(f.$$scope={dirty:n,ctx:t}),R.$set(f);const l={};32&n&&(l.$$scope={dirty:n,ctx:t}),B.$set(l);const m={};32&n&&(m.$$scope={dirty:n,ctx:t}),W.$set(m);const i={};32&n&&(i.$$scope={dirty:n,ctx:t}),_.$set(i);const g={};32&n&&(g.$$scope={dirty:n,ctx:t}),et.$set(g);const u={};32&n&&(u.$$scope={dirty:n,ctx:t}),$t.$set(u)},i(t){st||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),p(D.$$.fragment,t),p(O.$$.fragment,t),p(A.$$.fragment,t),p(R.$$.fragment,t),p(B.$$.fragment,t),p(W.$$.fragment,t),p(_.$$.fragment,t),p(et.$$.fragment,t),p($t.$$.fragment,t),st=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),f(D.$$.fragment,t),f(O.$$.fragment,t),f(A.$$.fragment,t),f(R.$$.fragment,t),f(B.$$.fragment,t),f(W.$$.fragment,t),f(_.$$.fragment,t),f(et.$$.fragment,t),f($t.$$.fragment,t),st=!1},d(t){l(e,t),t&&w(n),l($,t),t&&w(r),l(c,t),t&&w(m),l(D,t),t&&w(b),l(O,t),t&&w(T),l(A,t),t&&w(N),l(R,t),t&&w(P),l(B,t),t&&w(I),t&&w(V),t&&w(Q),l(W,t),t&&w(X),l(_,t),t&&w(tt),l(et,t),t&&w(nt),l($t,t)}}}function Yt(t){let e,n;const m=[t[1],zt];let i={$$slots:{default:[Mt]},$$scope:{ctx:t}};for(let t=0;t<m.length;t+=1)i=$(i,m[t]);return e=new A({props:i}),{c(){s(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,$){o(e,t,$),n=!0},p(t,[n]){const $=2&n?r(m,[2&n&&c(t[1]),0&n&&c(zt)]):{};32&n&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){f(e.$$.fragment,t),n=!1},d(t){l(e,t)}}}const zt={name:"AutocompleteOption",relatedComponents:[{name:"Autocomplete",link:"./docs/components/autocomplete"},{name:"AutocompleteField",link:"./docs/components/autocomplete-field"}]},{name:Lt,relatedComponents:Ut}=zt;function Jt(t,e,n){return t.$$set=t=>{n(1,e=$($({},e),m(t)))},[[{name:"Test Option",details:"Description"},{name:"Another One",details:"Different"},{name:"No Description"}],e=m(e)]}class Zt extends t{constructor(t){super(),e(this,t,Jt,Yt,n,{})}}export{Zt as default,zt as metadata};
