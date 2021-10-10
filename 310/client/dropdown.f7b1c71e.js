import{S as t,i as n,s as e,J as s,j as a,l as $,m as o,T as r,Z as c,t as p,p as l,q as f,K as m,r as d,v as g,f as u,d as i,u as h,w as x,h as w,k,b as y,e as v,g as D,n as E,U as b}from"./client.f71d6831.js";import{L as T,H as C,P as O}from"./layout.4540cf4f.js";import{B as S}from"./button.3af0c5da.js";import{D as j,a as A}from"./dropdown.964099a6.js";import{C as I}from"./ChevronDownIcon.d9704717.js";import{S as N}from"./showcase.158b0dfd.js";import{C as R}from"./color-preview.b88a0b16.js";import{S as B}from"./shadow-preview.f0ffd56b.js";import{R as F}from"./related-components.5c9ad033.js";import{H}from"./h2.da77d4bd.js";import{H as P}from"./h3.a9a2947c.js";import{T as G,a as V,b as M,c as Y}from"./table.e83fde99.js";import"./classes.2453fa25.js";import"./label.1761d553.js";import"./copyable-code.627acdd3.js";import"./popover.5fb7a822.js";import"./card.d10a66de.js";function z(t){let n;return{c(){n=h("Dropdown")},l(t){n=x(t,"Dropdown")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function L(t){let n,e,s,a,$;return{c(){n=h("Toggleable, contextual overlays for displaying additional details or actions. Must be wrapped with a "),e=w("a"),s=w("code"),a=h("DropdownShell"),$=h(" for correct behavior."),this.h()},l(t){n=x(t,"Toggleable, contextual overlays for displaying additional details or actions. Must be wrapped with a "),e=k(t,"A",{href:!0});var o=y(e);s=k(o,"CODE",{});var r=y(s);a=x(r,"DropdownShell"),r.forEach(i),o.forEach(i),$=x(t," for correct behavior."),this.h()},h(){v(e,"href","./docs/components/dropdown-shell")},m(t,o){u(t,n,o),u(t,e,o),D(e,s),D(s,a),u(t,$,o)},d(t){t&&i(n),t&&i(e),t&&i($)}}}function q(t){let n,e,s;return e=new I({props:{size:"24",class:"ml dropdown-chevron"}}),{c(){n=h("I toggle a dropdown\n        "),a(e.$$.fragment)},l(t){n=x(t,"I toggle a dropdown\n        "),$(e.$$.fragment,t)},m(t,a){u(t,n,a),o(e,t,a),s=!0},p:E,i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){l(e.$$.fragment,t),s=!1},d(t){t&&i(n),f(e,t)}}}function J(t){let n,e;return{c(){n=w("div"),e=h("and I am the dropdown content"),this.h()},l(t){n=k(t,"DIV",{class:!0});var s=y(n);e=x(s,"and I am the dropdown content"),s.forEach(i),this.h()},h(){v(n,"class","padded svelte-fhk3a2")},m(t,s){u(t,n,s),D(n,e)},d(t){t&&i(n)}}}function K(t){let n,e,s,r;return n=new S({props:{$$slots:{default:[q]},$$scope:{ctx:t}}}),n.$on("click",(function(){b(t[1])&&t[1].apply(this,arguments)})),s=new A({props:{$$slots:{default:[J]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=d(),a(s.$$.fragment)},l(t){$(n.$$.fragment,t),e=g(t),$(s.$$.fragment,t)},m(t,a){o(n,t,a),u(t,e,a),o(s,t,a),r=!0},p(e,a){t=e;const $={};4&a&&($.$$scope={dirty:a,ctx:t}),n.$set($);const o={};4&a&&(o.$$scope={dirty:a,ctx:t}),s.$set(o)},i(t){r||(p(n.$$.fragment,t),p(s.$$.fragment,t),r=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),r=!1},d(t){f(n,t),t&&i(e),f(s,t)}}}function U(t){let n;return{c(){n=h("look up there")},l(t){n=x(t,"look up there")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function Z(t){let n,e;return{c(){n=w("div"),e=h("right here"),this.h()},l(t){n=k(t,"DIV",{class:!0});var s=y(n);e=x(s,"right here"),s.forEach(i),this.h()},h(){v(n,"class","padded svelte-fhk3a2")},m(t,s){u(t,n,s),D(n,e)},d(t){t&&i(n)}}}function Q(t){let n,e,s,r;return n=new S({props:{$$slots:{default:[U]},$$scope:{ctx:t}}}),n.$on("click",(function(){b(t[1])&&t[1].apply(this,arguments)})),s=new A({props:{top:!0,$$slots:{default:[Z]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=d(),a(s.$$.fragment)},l(t){$(n.$$.fragment,t),e=g(t),$(s.$$.fragment,t)},m(t,a){o(n,t,a),u(t,e,a),o(s,t,a),r=!0},p(e,a){t=e;const $={};4&a&&($.$$scope={dirty:a,ctx:t}),n.$set($);const o={};4&a&&(o.$$scope={dirty:a,ctx:t}),s.$set(o)},i(t){r||(p(n.$$.fragment,t),p(s.$$.fragment,t),r=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),r=!1},d(t){f(n,t),t&&i(e),f(s,t)}}}function W(t){let n,e,s,r,c;return e=new j({props:{$$slots:{default:[K,({toggle:t})=>({1:t}),({toggle:t})=>t?2:0]},$$scope:{ctx:t}}}),r=new j({props:{$$slots:{default:[Q,({toggle:t})=>({1:t}),({toggle:t})=>t?2:0]},$$scope:{ctx:t}}}),{c(){n=w("div"),a(e.$$.fragment),s=d(),a(r.$$.fragment),this.h()},l(t){n=k(t,"DIV",{slot:!0,class:!0});var a=y(n);$(e.$$.fragment,a),s=g(a),$(r.$$.fragment,a),a.forEach(i),this.h()},h(){v(n,"slot","showcase"),v(n,"class","padded svelte-fhk3a2")},m(t,a){u(t,n,a),o(e,n,null),D(n,s),o(r,n,null),c=!0},p(t,n){const s={};6&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};6&n&&(a.$$scope={dirty:n,ctx:t}),r.$set(a)},i(t){c||(p(e.$$.fragment,t),p(r.$$.fragment,t),c=!0)},o(t){l(e.$$.fragment,t),l(r.$$.fragment,t),c=!1},d(t){t&&i(n),f(e),f(r)}}}function X(t){let n,e;return{c(){n=w("div"),e=w("pre"),this.h()},l(t){n=k(t,"DIV",{slot:!0});var s=y(n);e=k(s,"PRE",{class:!0}),y(e).forEach(i),s.forEach(i),this.h()},h(){v(e,"class","language-svelte"),v(n,"slot","source")},m(t,s){u(t,n,s),D(n,e),e.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DropdownShell</span> <span class="token attr-name"><span class="token namespace">let:</span>toggle</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>toggle<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>\n    I toggle a dropdown\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChevronDownIcon</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>24<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ml dropdown-chevron<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Dropdown</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>padded<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      and I am the dropdown content\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Dropdown</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DropdownShell</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DropdownShell</span> <span class="token attr-name"><span class="token namespace">let:</span>toggle</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>toggle<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>\n    look up there\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Dropdown</span> <span class="token attr-name">top</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>padded<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      right here\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Dropdown</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DropdownShell</span><span class="token punctuation">></span></span></code>'},p:E,d(t){t&&i(n)}}}function _(t){let n;return{c(){n=h("Properties")},l(t){n=x(t,"Properties")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function tt(t){let n;return{c(){n=h("Style Properties")},l(t){n=x(t,"Style Properties")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function nt(t){let n;return{c(){n=h("Name")},l(t){n=x(t,"Name")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function et(t){let n;return{c(){n=h("Default")},l(t){n=x(t,"Default")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function st(t){let n;return{c(){n=h("Type")},l(t){n=x(t,"Type")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function at(t){let n;return{c(){n=h("Description")},l(t){n=x(t,"Description")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function $t(t){let n,e,s,r,c,m,h,x;return n=new M({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),s=new M({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),c=new M({props:{$$slots:{default:[st]},$$scope:{ctx:t}}}),h=new M({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=d(),a(s.$$.fragment),r=d(),a(c.$$.fragment),m=d(),a(h.$$.fragment)},l(t){$(n.$$.fragment,t),e=g(t),$(s.$$.fragment,t),r=g(t),$(c.$$.fragment,t),m=g(t),$(h.$$.fragment,t)},m(t,a){o(n,t,a),u(t,e,a),o(s,t,a),u(t,r,a),o(c,t,a),u(t,m,a),o(h,t,a),x=!0},p(t,e){const a={};4&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const $={};4&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const o={};4&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o);const r={};4&e&&(r.$$scope={dirty:e,ctx:t}),h.$set(r)},i(t){x||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),x=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),x=!1},d(t){f(n,t),t&&i(e),f(s,t),t&&i(r),f(c,t),t&&i(m),f(h,t)}}}function ot(t){let n,e,s;return{c(){n=w("strong"),e=w("code"),s=h("right")},l(t){n=k(t,"STRONG",{});var a=y(n);e=k(a,"CODE",{});var $=y(e);s=x($,"right"),$.forEach(i),a.forEach(i)},m(t,a){u(t,n,a),D(n,e),D(e,s)},d(t){t&&i(n)}}}function rt(t){let n,e;return{c(){n=w("code"),e=h("false")},l(t){n=k(t,"CODE",{});var s=y(n);e=x(s,"false"),s.forEach(i)},m(t,s){u(t,n,s),D(n,e)},d(t){t&&i(n)}}}function ct(t){let n,e;return{c(){n=w("code"),e=h("boolean")},l(t){n=k(t,"CODE",{});var s=y(n);e=x(s,"boolean"),s.forEach(i)},m(t,s){u(t,n,s),D(n,e)},d(t){t&&i(n)}}}function pt(t){let n;return{c(){n=h("Aligns the dropdown content with the right edge of the shell.")},l(t){n=x(t,"Aligns the dropdown content with the right edge of the shell.")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function lt(t){let n,e,s,r,c,m,h,x;return n=new Y({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),s=new Y({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),c=new Y({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),h=new Y({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=d(),a(s.$$.fragment),r=d(),a(c.$$.fragment),m=d(),a(h.$$.fragment)},l(t){$(n.$$.fragment,t),e=g(t),$(s.$$.fragment,t),r=g(t),$(c.$$.fragment,t),m=g(t),$(h.$$.fragment,t)},m(t,a){o(n,t,a),u(t,e,a),o(s,t,a),u(t,r,a),o(c,t,a),u(t,m,a),o(h,t,a),x=!0},p(t,e){const a={};4&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const $={};4&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const o={};4&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o);const r={};4&e&&(r.$$scope={dirty:e,ctx:t}),h.$set(r)},i(t){x||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),x=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),x=!1},d(t){f(n,t),t&&i(e),f(s,t),t&&i(r),f(c,t),t&&i(m),f(h,t)}}}function ft(t){let n,e,s;return{c(){n=w("strong"),e=w("code"),s=h("top")},l(t){n=k(t,"STRONG",{});var a=y(n);e=k(a,"CODE",{});var $=y(e);s=x($,"top"),$.forEach(i),a.forEach(i)},m(t,a){u(t,n,a),D(n,e),D(e,s)},d(t){t&&i(n)}}}function mt(t){let n,e;return{c(){n=w("code"),e=h("false")},l(t){n=k(t,"CODE",{});var s=y(n);e=x(s,"false"),s.forEach(i)},m(t,s){u(t,n,s),D(n,e)},d(t){t&&i(n)}}}function dt(t){let n,e;return{c(){n=w("code"),e=h("boolean")},l(t){n=k(t,"CODE",{});var s=y(n);e=x(s,"boolean"),s.forEach(i)},m(t,s){u(t,n,s),D(n,e)},d(t){t&&i(n)}}}function gt(t){let n;return{c(){n=h("Aligns the dropdown content such that it opens to the top of the shell, extending up.")},l(t){n=x(t,"Aligns the dropdown content such that it opens to the top of the shell, extending up.")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function ut(t){let n,e,s,r,c,m,h,x;return n=new Y({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),s=new Y({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),c=new Y({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),h=new Y({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=d(),a(s.$$.fragment),r=d(),a(c.$$.fragment),m=d(),a(h.$$.fragment)},l(t){$(n.$$.fragment,t),e=g(t),$(s.$$.fragment,t),r=g(t),$(c.$$.fragment,t),m=g(t),$(h.$$.fragment,t)},m(t,a){o(n,t,a),u(t,e,a),o(s,t,a),u(t,r,a),o(c,t,a),u(t,m,a),o(h,t,a),x=!0},p(t,e){const a={};4&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const $={};4&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const o={};4&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o);const r={};4&e&&(r.$$scope={dirty:e,ctx:t}),h.$set(r)},i(t){x||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),x=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),x=!1},d(t){f(n,t),t&&i(e),f(s,t),t&&i(r),f(c,t),t&&i(m),f(h,t)}}}function it(t){let n,e,s,r,c,m,h,x;return e=new V({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),c=new V({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),h=new V({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),{c(){n=w("thead"),a(e.$$.fragment),s=d(),r=w("tbody"),a(c.$$.fragment),m=d(),a(h.$$.fragment)},l(t){n=k(t,"THEAD",{});var a=y(n);$(e.$$.fragment,a),a.forEach(i),s=g(t),r=k(t,"TBODY",{});var o=y(r);$(c.$$.fragment,o),m=g(o),$(h.$$.fragment,o),o.forEach(i)},m(t,a){u(t,n,a),o(e,n,null),u(t,s,a),u(t,r,a),o(c,r,null),D(r,m),o(h,r,null),x=!0},p(t,n){const s={};4&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),c.$set(a);const $={};4&n&&($.$$scope={dirty:n,ctx:t}),h.$set($)},i(t){x||(p(e.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),x=!0)},o(t){l(e.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),x=!1},d(t){t&&i(n),f(e),t&&i(s),t&&i(r),f(c),f(h)}}}function ht(t){let n;return{c(){n=h("Class Properties")},l(t){n=x(t,"Class Properties")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function xt(t){let n,e,s,a,$,o,r;return{c(){n=h("All "),e=w("code"),s=h("<Dropdown>"),a=h(" components use the "),$=w("code"),o=h(".dropdown"),r=h(" class.")},l(t){n=x(t,"All "),e=k(t,"CODE",{});var c=y(e);s=x(c,"<Dropdown>"),c.forEach(i),a=x(t," components use the "),$=k(t,"CODE",{});var p=y($);o=x(p,".dropdown"),p.forEach(i),r=x(t," class.")},m(t,c){u(t,n,c),u(t,e,c),D(e,s),u(t,a,c),u(t,$,c),D($,o),u(t,r,c)},d(t){t&&i(n),t&&i(e),t&&i(a),t&&i($),t&&i(r)}}}function wt(t){let n;return{c(){n=h("Falsy values passed to classes will be disregarded.")},l(t){n=x(t,"Falsy values passed to classes will be disregarded.")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function kt(t){let n;return{c(){n=h("Name")},l(t){n=x(t,"Name")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function yt(t){let n;return{c(){n=h("Default")},l(t){n=x(t,"Default")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function vt(t){let n;return{c(){n=h("Type")},l(t){n=x(t,"Type")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function Dt(t){let n;return{c(){n=h("Description")},l(t){n=x(t,"Description")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function Et(t){let n,e,s,r,c,m,h,x;return n=new M({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),s=new M({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),c=new M({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}}),h=new M({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=d(),a(s.$$.fragment),r=d(),a(c.$$.fragment),m=d(),a(h.$$.fragment)},l(t){$(n.$$.fragment,t),e=g(t),$(s.$$.fragment,t),r=g(t),$(c.$$.fragment,t),m=g(t),$(h.$$.fragment,t)},m(t,a){o(n,t,a),u(t,e,a),o(s,t,a),u(t,r,a),o(c,t,a),u(t,m,a),o(h,t,a),x=!0},p(t,e){const a={};4&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const $={};4&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const o={};4&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o);const r={};4&e&&(r.$$scope={dirty:e,ctx:t}),h.$set(r)},i(t){x||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),x=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),x=!1},d(t){f(n,t),t&&i(e),f(s,t),t&&i(r),f(c,t),t&&i(m),f(h,t)}}}function bt(t){let n,e,s;return{c(){n=w("strong"),e=w("code"),s=h("class")},l(t){n=k(t,"STRONG",{});var a=y(n);e=k(a,"CODE",{});var $=y(e);s=x($,"class"),$.forEach(i),a.forEach(i)},m(t,a){u(t,n,a),D(n,e),D(e,s)},d(t){t&&i(n)}}}function Tt(t){let n,e;return{c(){n=w("code"),e=h("null")},l(t){n=k(t,"CODE",{});var s=y(n);e=x(s,"null"),s.forEach(i)},m(t,s){u(t,n,s),D(n,e)},d(t){t&&i(n)}}}function Ct(t){let n,e;return{c(){n=w("code"),e=h("string")},l(t){n=k(t,"CODE",{});var s=y(n);e=x(s,"string"),s.forEach(i)},m(t,s){u(t,n,s),D(n,e)},d(t){t&&i(n)}}}function Ot(t){let n,e,s,a;return{c(){n=h("A class string to add to the underlying "),e=w("code"),s=h("<div>"),a=h(" element.")},l(t){n=x(t,"A class string to add to the underlying "),e=k(t,"CODE",{});var $=y(e);s=x($,"<div>"),$.forEach(i),a=x(t," element.")},m(t,$){u(t,n,$),u(t,e,$),D(e,s),u(t,a,$)},d(t){t&&i(n),t&&i(e),t&&i(a)}}}function St(t){let n,e,s,r,c,m,h,x;return n=new Y({props:{$$slots:{default:[bt]},$$scope:{ctx:t}}}),s=new Y({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),c=new Y({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),h=new Y({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=d(),a(s.$$.fragment),r=d(),a(c.$$.fragment),m=d(),a(h.$$.fragment)},l(t){$(n.$$.fragment,t),e=g(t),$(s.$$.fragment,t),r=g(t),$(c.$$.fragment,t),m=g(t),$(h.$$.fragment,t)},m(t,a){o(n,t,a),u(t,e,a),o(s,t,a),u(t,r,a),o(c,t,a),u(t,m,a),o(h,t,a),x=!0},p(t,e){const a={};4&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const $={};4&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const o={};4&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o);const r={};4&e&&(r.$$scope={dirty:e,ctx:t}),h.$set(r)},i(t){x||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),x=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),x=!1},d(t){f(n,t),t&&i(e),f(s,t),t&&i(r),f(c,t),t&&i(m),f(h,t)}}}function jt(t){let n,e,s,r,c,m;return e=new V({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),c=new V({props:{$$slots:{default:[St]},$$scope:{ctx:t}}}),{c(){n=w("thead"),a(e.$$.fragment),s=d(),r=w("tbody"),a(c.$$.fragment)},l(t){n=k(t,"THEAD",{});var a=y(n);$(e.$$.fragment,a),a.forEach(i),s=g(t),r=k(t,"TBODY",{});var o=y(r);$(c.$$.fragment,o),o.forEach(i)},m(t,a){u(t,n,a),o(e,n,null),u(t,s,a),u(t,r,a),o(c,r,null),m=!0},p(t,n){const s={};4&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),c.$set(a)},i(t){m||(p(e.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){l(e.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){t&&i(n),f(e),t&&i(s),t&&i(r),f(c)}}}function At(t){let n;return{c(){n=h("Slots")},l(t){n=x(t,"Slots")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function It(t){let n;return{c(){n=h("Default slot")},l(t){n=x(t,"Default slot")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function Nt(t){let n;return{c(){n=h("The content of the dropdown.")},l(t){n=x(t,"The content of the dropdown.")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function Rt(t){let n;return{c(){n=h("SCSS Variables")},l(t){n=x(t,"SCSS Variables")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function Bt(t){let n;return{c(){n=h("Name")},l(t){n=x(t,"Name")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function Ft(t){let n;return{c(){n=h("Description")},l(t){n=x(t,"Description")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function Ht(t){let n;return{c(){n=h("Default")},l(t){n=x(t,"Default")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function Pt(t){let n,e,s,r,c,m;return n=new M({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),s=new M({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),c=new M({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=d(),a(s.$$.fragment),r=d(),a(c.$$.fragment)},l(t){$(n.$$.fragment,t),e=g(t),$(s.$$.fragment,t),r=g(t),$(c.$$.fragment,t)},m(t,a){o(n,t,a),u(t,e,a),o(s,t,a),u(t,r,a),o(c,t,a),m=!0},p(t,e){const a={};4&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const $={};4&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const o={};4&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o)},i(t){m||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){f(n,t),t&&i(e),f(s,t),t&&i(r),f(c,t)}}}function Gt(t){let n,e,s;return{c(){n=w("strong"),e=w("code"),s=h("$background")},l(t){n=k(t,"STRONG",{});var a=y(n);e=k(a,"CODE",{});var $=y(e);s=x($,"$background"),$.forEach(i),a.forEach(i)},m(t,a){u(t,n,a),D(n,e),D(e,s)},d(t){t&&i(n)}}}function Vt(t){let n;return{c(){n=h("The background color of the dropdown content")},l(t){n=x(t,"The background color of the dropdown content")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function Mt(t){let n,e;return n=new R({props:{value:"#FFFFFF",bordered:!0}}),{c(){a(n.$$.fragment)},l(t){$(n.$$.fragment,t)},m(t,s){o(n,t,s),e=!0},p:E,i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){l(n.$$.fragment,t),e=!1},d(t){f(n,t)}}}function Yt(t){let n,e,s,r,c,m;return n=new Y({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}}),s=new Y({props:{$$slots:{default:[Vt]},$$scope:{ctx:t}}}),c=new Y({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=d(),a(s.$$.fragment),r=d(),a(c.$$.fragment)},l(t){$(n.$$.fragment,t),e=g(t),$(s.$$.fragment,t),r=g(t),$(c.$$.fragment,t)},m(t,a){o(n,t,a),u(t,e,a),o(s,t,a),u(t,r,a),o(c,t,a),m=!0},p(t,e){const a={};4&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const $={};4&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const o={};4&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o)},i(t){m||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){f(n,t),t&&i(e),f(s,t),t&&i(r),f(c,t)}}}function zt(t){let n,e,s;return{c(){n=w("strong"),e=w("code"),s=h("$shadow-raised")},l(t){n=k(t,"STRONG",{});var a=y(n);e=k(a,"CODE",{});var $=y(e);s=x($,"$shadow-raised"),$.forEach(i),a.forEach(i)},m(t,a){u(t,n,a),D(n,e),D(e,s)},d(t){t&&i(n)}}}function Lt(t){let n;return{c(){n=h("The shadow of the dropdown.")},l(t){n=x(t,"The shadow of the dropdown.")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function qt(t){let n,e;return n=new B({props:{value:sn}}),{c(){a(n.$$.fragment)},l(t){$(n.$$.fragment,t)},m(t,s){o(n,t,s),e=!0},p:E,i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){l(n.$$.fragment,t),e=!1},d(t){f(n,t)}}}function Jt(t){let n,e,s,r,c,m;return n=new Y({props:{$$slots:{default:[zt]},$$scope:{ctx:t}}}),s=new Y({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),c=new Y({props:{$$slots:{default:[qt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=d(),a(s.$$.fragment),r=d(),a(c.$$.fragment)},l(t){$(n.$$.fragment,t),e=g(t),$(s.$$.fragment,t),r=g(t),$(c.$$.fragment,t)},m(t,a){o(n,t,a),u(t,e,a),o(s,t,a),u(t,r,a),o(c,t,a),m=!0},p(t,e){const a={};4&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const $={};4&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const o={};4&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o)},i(t){m||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){f(n,t),t&&i(e),f(s,t),t&&i(r),f(c,t)}}}function Kt(t){let n,e,s;return{c(){n=w("strong"),e=w("code"),s=h("$card-radius")},l(t){n=k(t,"STRONG",{});var a=y(n);e=k(a,"CODE",{});var $=y(e);s=x($,"$card-radius"),$.forEach(i),a.forEach(i)},m(t,a){u(t,n,a),D(n,e),D(e,s)},d(t){t&&i(n)}}}function Ut(t){let n;return{c(){n=h("The curvature radius of the dropdown.")},l(t){n=x(t,"The curvature radius of the dropdown.")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function Zt(t){let n,e;return{c(){n=w("code"),e=h("1.25em")},l(t){n=k(t,"CODE",{});var s=y(n);e=x(s,"1.25em"),s.forEach(i)},m(t,s){u(t,n,s),D(n,e)},d(t){t&&i(n)}}}function Qt(t){let n,e,s,r,c,m;return n=new Y({props:{$$slots:{default:[Kt]},$$scope:{ctx:t}}}),s=new Y({props:{$$slots:{default:[Ut]},$$scope:{ctx:t}}}),c=new Y({props:{$$slots:{default:[Zt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=d(),a(s.$$.fragment),r=d(),a(c.$$.fragment)},l(t){$(n.$$.fragment,t),e=g(t),$(s.$$.fragment,t),r=g(t),$(c.$$.fragment,t)},m(t,a){o(n,t,a),u(t,e,a),o(s,t,a),u(t,r,a),o(c,t,a),m=!0},p(t,e){const a={};4&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const $={};4&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const o={};4&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o)},i(t){m||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){f(n,t),t&&i(e),f(s,t),t&&i(r),f(c,t)}}}function Wt(t){let n,e,s,r,c,m,h,x,v,E;return e=new V({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),c=new V({props:{$$slots:{default:[Yt]},$$scope:{ctx:t}}}),h=new V({props:{$$slots:{default:[Jt]},$$scope:{ctx:t}}}),v=new V({props:{$$slots:{default:[Qt]},$$scope:{ctx:t}}}),{c(){n=w("thead"),a(e.$$.fragment),s=d(),r=w("tbody"),a(c.$$.fragment),m=d(),a(h.$$.fragment),x=d(),a(v.$$.fragment)},l(t){n=k(t,"THEAD",{});var a=y(n);$(e.$$.fragment,a),a.forEach(i),s=g(t),r=k(t,"TBODY",{});var o=y(r);$(c.$$.fragment,o),m=g(o),$(h.$$.fragment,o),x=g(o),$(v.$$.fragment,o),o.forEach(i)},m(t,a){u(t,n,a),o(e,n,null),u(t,s,a),u(t,r,a),o(c,r,null),D(r,m),o(h,r,null),D(r,x),o(v,r,null),E=!0},p(t,n){const s={};4&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),c.$set(a);const $={};4&n&&($.$$scope={dirty:n,ctx:t}),h.$set($);const o={};4&n&&(o.$$scope={dirty:n,ctx:t}),v.$set(o)},i(t){E||(p(e.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),p(v.$$.fragment,t),E=!0)},o(t){l(e.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),l(v.$$.fragment,t),E=!1},d(t){t&&i(n),f(e),t&&i(s),t&&i(r),f(c),f(h),f(v)}}}function Xt(t){let n,e,s,r,c,m,h,x,w,k,y,v,D,E,b,T,S,j,A,I,R,B,V,M,Y,q,J,K,U,Z,Q,nt;return n=new C({props:{$$slots:{default:[z]},$$scope:{ctx:t}}}),s=new O({props:{$$slots:{default:[L]},$$scope:{ctx:t}}}),c=new F({props:{components:en}}),h=new N({props:{$$slots:{source:[X],showcase:[W]},$$scope:{ctx:t}}}),w=new H({props:{id:"properties",$$slots:{default:[_]},$$scope:{ctx:t}}}),y=new P({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),D=new G({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),b=new P({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),S=new O({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),A=new O({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),R=new G({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),V=new H({props:{id:"slots",$$slots:{default:[At]},$$scope:{ctx:t}}}),Y=new P({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),J=new O({props:{$$slots:{default:[Nt]},$$scope:{ctx:t}}}),U=new H({props:{id:"scss-variables",$$slots:{default:[Rt]},$$scope:{ctx:t}}}),Q=new G({props:{$$slots:{default:[Wt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=d(),a(s.$$.fragment),r=d(),a(c.$$.fragment),m=d(),a(h.$$.fragment),x=d(),a(w.$$.fragment),k=d(),a(y.$$.fragment),v=d(),a(D.$$.fragment),E=d(),a(b.$$.fragment),T=d(),a(S.$$.fragment),j=d(),a(A.$$.fragment),I=d(),a(R.$$.fragment),B=d(),a(V.$$.fragment),M=d(),a(Y.$$.fragment),q=d(),a(J.$$.fragment),K=d(),a(U.$$.fragment),Z=d(),a(Q.$$.fragment)},l(t){$(n.$$.fragment,t),e=g(t),$(s.$$.fragment,t),r=g(t),$(c.$$.fragment,t),m=g(t),$(h.$$.fragment,t),x=g(t),$(w.$$.fragment,t),k=g(t),$(y.$$.fragment,t),v=g(t),$(D.$$.fragment,t),E=g(t),$(b.$$.fragment,t),T=g(t),$(S.$$.fragment,t),j=g(t),$(A.$$.fragment,t),I=g(t),$(R.$$.fragment,t),B=g(t),$(V.$$.fragment,t),M=g(t),$(Y.$$.fragment,t),q=g(t),$(J.$$.fragment,t),K=g(t),$(U.$$.fragment,t),Z=g(t),$(Q.$$.fragment,t)},m(t,a){o(n,t,a),u(t,e,a),o(s,t,a),u(t,r,a),o(c,t,a),u(t,m,a),o(h,t,a),u(t,x,a),o(w,t,a),u(t,k,a),o(y,t,a),u(t,v,a),o(D,t,a),u(t,E,a),o(b,t,a),u(t,T,a),o(S,t,a),u(t,j,a),o(A,t,a),u(t,I,a),o(R,t,a),u(t,B,a),o(V,t,a),u(t,M,a),o(Y,t,a),u(t,q,a),o(J,t,a),u(t,K,a),o(U,t,a),u(t,Z,a),o(Q,t,a),nt=!0},p(t,e){const a={};4&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const $={};4&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const o={};4&e&&(o.$$scope={dirty:e,ctx:t}),h.$set(o);const r={};4&e&&(r.$$scope={dirty:e,ctx:t}),w.$set(r);const c={};4&e&&(c.$$scope={dirty:e,ctx:t}),y.$set(c);const p={};4&e&&(p.$$scope={dirty:e,ctx:t}),D.$set(p);const l={};4&e&&(l.$$scope={dirty:e,ctx:t}),b.$set(l);const f={};4&e&&(f.$$scope={dirty:e,ctx:t}),S.$set(f);const m={};4&e&&(m.$$scope={dirty:e,ctx:t}),A.$set(m);const d={};4&e&&(d.$$scope={dirty:e,ctx:t}),R.$set(d);const g={};4&e&&(g.$$scope={dirty:e,ctx:t}),V.$set(g);const u={};4&e&&(u.$$scope={dirty:e,ctx:t}),Y.$set(u);const i={};4&e&&(i.$$scope={dirty:e,ctx:t}),J.$set(i);const x={};4&e&&(x.$$scope={dirty:e,ctx:t}),U.$set(x);const k={};4&e&&(k.$$scope={dirty:e,ctx:t}),Q.$set(k)},i(t){nt||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),p(w.$$.fragment,t),p(y.$$.fragment,t),p(D.$$.fragment,t),p(b.$$.fragment,t),p(S.$$.fragment,t),p(A.$$.fragment,t),p(R.$$.fragment,t),p(V.$$.fragment,t),p(Y.$$.fragment,t),p(J.$$.fragment,t),p(U.$$.fragment,t),p(Q.$$.fragment,t),nt=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),l(w.$$.fragment,t),l(y.$$.fragment,t),l(D.$$.fragment,t),l(b.$$.fragment,t),l(S.$$.fragment,t),l(A.$$.fragment,t),l(R.$$.fragment,t),l(V.$$.fragment,t),l(Y.$$.fragment,t),l(J.$$.fragment,t),l(U.$$.fragment,t),l(Q.$$.fragment,t),nt=!1},d(t){f(n,t),t&&i(e),f(s,t),t&&i(r),f(c,t),t&&i(m),f(h,t),t&&i(x),f(w,t),t&&i(k),f(y,t),t&&i(v),f(D,t),t&&i(E),f(b,t),t&&i(T),f(S,t),t&&i(j),f(A,t),t&&i(I),f(R,t),t&&i(B),f(V,t),t&&i(M),f(Y,t),t&&i(q),f(J,t),t&&i(K),f(U,t),t&&i(Z),f(Q,t)}}}function _t(t){let n,e;const m=[t[0],tn];let d={$$slots:{default:[Xt]},$$scope:{ctx:t}};for(let t=0;t<m.length;t+=1)d=s(d,m[t]);return n=new T({props:d}),{c(){a(n.$$.fragment)},l(t){$(n.$$.fragment,t)},m(t,s){o(n,t,s),e=!0},p(t,[e]){const s=1&e?r(m,[1&e&&c(t[0]),0&e&&c(tn)]):{};4&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){l(n.$$.fragment,t),e=!1},d(t){f(n,t)}}}const tn={name:"Dropdown",relatedComponents:[{name:"DropdownShell",link:"./docs/components/dropdown-shell"}],shadowRaised:"0 2px 4px -1px rgba(0, 0, 0, .2), 0 3px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12);"},{name:nn,relatedComponents:en,shadowRaised:sn}=tn;function an(t,n,e){return t.$$set=t=>{e(0,n=s(s({},n),m(t)))},[n=m(n)]}class $n extends t{constructor(t){super(),n(this,t,an,_t,e,{})}}export{$n as default,tn as metadata};
