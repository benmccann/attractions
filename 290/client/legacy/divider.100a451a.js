import{S as t,i as n,s as e,O as s,p as $,r as a,t as o,Y as r,a3 as c,v as p,w as l,x as f,P as m,y as i,A as u,k as g,h as d,z as h,B as x,o as k,q as y,g as w,j as v,l as D,n as E}from"./client.30f94cac.js";import{L as T,H as b,P as O}from"./layout.1b4ca415.js";import{D as j}from"./divider.2852c360.js";import{S}from"./showcase.c45d4cbe.js";import{C}from"./color-preview.25116d3d.js";import{H}from"./h2.5140d02a.js";import{H as P}from"./h3.1027b05a.js";import{T as F,a as N,b as A,c as z}from"./table.bf435291.js";import"./label.c9ef5511.js";import"./classes.7d86155b.js";import"./copyable-code.64489433.js";import"./asyncToGenerator.3904ce9a.js";import"./button.05284850.js";function G(t){let n;return{c(){n=h("Divider")},l(t){n=x(t,"Divider")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function R(t){let n;return{c(){n=h("A thin horizontal line used to separate sections and group content, with optional text to display in the middle.")},l(t){n=x(t,"A thin horizontal line used to separate sections and group content, with optional text to display in the middle.")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function V(t){let n,e,s,r,c,m,T,b,O,S,C,H,P,F,N,A;return c=new j({props:{text:"Section 1"}}),S=new j({props:{text:"Conclusion"}}),N=new j({}),{c(){n=k("div"),e=k("p"),s=h("This is some introduction to something"),r=i(),$(c.$$.fragment),m=i(),T=k("p"),b=h("This is the 1st section. Have fun"),O=i(),$(S.$$.fragment),C=i(),H=k("p"),P=h("This ends our test"),F=i(),$(N.$$.fragment),this.h()},l(t){n=y(t,"DIV",{slot:!0,class:!0});var $=w(n);e=y($,"P",{});var o=w(e);s=x(o,"This is some introduction to something"),o.forEach(d),r=u($),a(c.$$.fragment,$),m=u($),T=y($,"P",{});var p=w(T);b=x(p,"This is the 1st section. Have fun"),p.forEach(d),O=u($),a(S.$$.fragment,$),C=u($),H=y($,"P",{});var l=w(H);P=x(l,"This ends our test"),l.forEach(d),F=u($),a(N.$$.fragment,$),$.forEach(d),this.h()},h(){v(n,"slot","showcase"),v(n,"class","padded")},m(t,$){g(t,n,$),D(n,e),D(e,s),D(n,r),o(c,n,null),D(n,m),D(n,T),D(T,b),D(n,O),o(S,n,null),D(n,C),D(n,H),D(H,P),D(n,F),o(N,n,null),A=!0},p:E,i(t){A||(p(c.$$.fragment,t),p(S.$$.fragment,t),p(N.$$.fragment,t),A=!0)},o(t){l(c.$$.fragment,t),l(S.$$.fragment,t),l(N.$$.fragment,t),A=!1},d(t){t&&d(n),f(c),f(S),f(N)}}}function B(t){let n,e;return{c(){n=k("div"),e=k("pre"),this.h()},l(t){n=y(t,"DIV",{slot:!0});var s=w(n);e=y(s,"PRE",{class:!0}),w(e).forEach(d),s.forEach(d),this.h()},h(){v(e,"class","language-svelte"),v(n,"slot","source")},m(t,s){g(t,n,s),D(n,e),e.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>This is some introduction to something<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Divider</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Section 1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>This is the 1st section. Have fun<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Divider</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Conclusion<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>This ends our test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Divider</span> <span class="token punctuation">/></span></span></code>'},p:E,d(t){t&&d(n)}}}function Y(t){let n;return{c(){n=h("Properties")},l(t){n=x(t,"Properties")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function I(t){let n;return{c(){n=h("Functional Properties")},l(t){n=x(t,"Functional Properties")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function L(t){let n;return{c(){n=h("Name")},l(t){n=x(t,"Name")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function q(t){let n;return{c(){n=h("Default")},l(t){n=x(t,"Default")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function M(t){let n;return{c(){n=h("Type")},l(t){n=x(t,"Type")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function J(t){let n;return{c(){n=h("Description")},l(t){n=x(t,"Description")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function K(t){let n,e,s,r,c,m,h,x;return n=new A({props:{$$slots:{default:[L]},$$scope:{ctx:t}}}),s=new A({props:{$$slots:{default:[q]},$$scope:{ctx:t}}}),c=new A({props:{$$slots:{default:[M]},$$scope:{ctx:t}}}),h=new A({props:{$$slots:{default:[J]},$$scope:{ctx:t}}}),{c(){$(n.$$.fragment),e=i(),$(s.$$.fragment),r=i(),$(c.$$.fragment),m=i(),$(h.$$.fragment)},l(t){a(n.$$.fragment,t),e=u(t),a(s.$$.fragment,t),r=u(t),a(c.$$.fragment,t),m=u(t),a(h.$$.fragment,t)},m(t,$){o(n,t,$),g(t,e,$),o(s,t,$),g(t,r,$),o(c,t,$),g(t,m,$),o(h,t,$),x=!0},p(t,e){const $={};2&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o);const r={};2&e&&(r.$$scope={dirty:e,ctx:t}),h.$set(r)},i(t){x||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),x=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),x=!1},d(t){f(n,t),t&&d(e),f(s,t),t&&d(r),f(c,t),t&&d(m),f(h,t)}}}function Q(t){let n,e,s;return{c(){n=k("strong"),e=k("code"),s=h("text")},l(t){n=y(t,"STRONG",{});var $=w(n);e=y($,"CODE",{});var a=w(e);s=x(a,"text"),a.forEach(d),$.forEach(d)},m(t,$){g(t,n,$),D(n,e),D(e,s)},d(t){t&&d(n)}}}function U(t){let n,e;return{c(){n=k("code"),e=h("null")},l(t){n=y(t,"CODE",{});var s=w(n);e=x(s,"null"),s.forEach(d)},m(t,s){g(t,n,s),D(n,e)},d(t){t&&d(n)}}}function W(t){let n,e;return{c(){n=k("code"),e=h("string")},l(t){n=y(t,"CODE",{});var s=w(n);e=x(s,"string"),s.forEach(d)},m(t,s){g(t,n,s),D(n,e)},d(t){t&&d(n)}}}function X(t){let n;return{c(){n=h("Adds a text to the middle of the line.")},l(t){n=x(t,"Adds a text to the middle of the line.")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function Z(t){let n,e,s,r,c,m,h,x;return n=new z({props:{$$slots:{default:[Q]},$$scope:{ctx:t}}}),s=new z({props:{$$slots:{default:[U]},$$scope:{ctx:t}}}),c=new z({props:{$$slots:{default:[W]},$$scope:{ctx:t}}}),h=new z({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),{c(){$(n.$$.fragment),e=i(),$(s.$$.fragment),r=i(),$(c.$$.fragment),m=i(),$(h.$$.fragment)},l(t){a(n.$$.fragment,t),e=u(t),a(s.$$.fragment,t),r=u(t),a(c.$$.fragment,t),m=u(t),a(h.$$.fragment,t)},m(t,$){o(n,t,$),g(t,e,$),o(s,t,$),g(t,r,$),o(c,t,$),g(t,m,$),o(h,t,$),x=!0},p(t,e){const $={};2&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o);const r={};2&e&&(r.$$scope={dirty:e,ctx:t}),h.$set(r)},i(t){x||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),x=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),x=!1},d(t){f(n,t),t&&d(e),f(s,t),t&&d(r),f(c,t),t&&d(m),f(h,t)}}}function _(t){let n,e,s;return{c(){n=k("strong"),e=k("code"),s=h("...")},l(t){n=y(t,"STRONG",{});var $=w(n);e=y($,"CODE",{});var a=w(e);s=x(a,"..."),a.forEach(d),$.forEach(d)},m(t,$){g(t,n,$),D(n,e),D(e,s)},d(t){t&&d(n)}}}function tt(t){let n,e;return{c(){n=k("code"),e=h("any")},l(t){n=y(t,"CODE",{});var s=w(n);e=x(s,"any"),s.forEach(d)},m(t,s){g(t,n,s),D(n,e)},d(t){t&&d(n)}}}function nt(t){let n,e,s,$;return{c(){n=h("Everything else will be passed to the underlying "),e=k("code"),s=h("<hr>"),$=h(" element.")},l(t){n=x(t,"Everything else will be passed to the underlying "),e=y(t,"CODE",{});var a=w(e);s=x(a,"<hr>"),a.forEach(d),$=x(t," element.")},m(t,a){g(t,n,a),g(t,e,a),D(e,s),g(t,$,a)},d(t){t&&d(n),t&&d(e),t&&d($)}}}function et(t){let n,e,s,r,c,m,h,x;return n=new z({props:{$$slots:{default:[_]},$$scope:{ctx:t}}}),s=new z({}),c=new z({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),h=new z({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),{c(){$(n.$$.fragment),e=i(),$(s.$$.fragment),r=i(),$(c.$$.fragment),m=i(),$(h.$$.fragment)},l(t){a(n.$$.fragment,t),e=u(t),a(s.$$.fragment,t),r=u(t),a(c.$$.fragment,t),m=u(t),a(h.$$.fragment,t)},m(t,$){o(n,t,$),g(t,e,$),o(s,t,$),g(t,r,$),o(c,t,$),g(t,m,$),o(h,t,$),x=!0},p(t,e){const s={};2&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const $={};2&e&&($.$$scope={dirty:e,ctx:t}),c.$set($);const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),h.$set(a)},i(t){x||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),x=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),x=!1},d(t){f(n,t),t&&d(e),f(s,t),t&&d(r),f(c,t),t&&d(m),f(h,t)}}}function st(t){let n,e,s,r,c,m,h,x;return e=new N({props:{$$slots:{default:[K]},$$scope:{ctx:t}}}),c=new N({props:{$$slots:{default:[Z]},$$scope:{ctx:t}}}),h=new N({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),{c(){n=k("thead"),$(e.$$.fragment),s=i(),r=k("tbody"),$(c.$$.fragment),m=i(),$(h.$$.fragment)},l(t){n=y(t,"THEAD",{});var $=w(n);a(e.$$.fragment,$),$.forEach(d),s=u(t),r=y(t,"TBODY",{});var o=w(r);a(c.$$.fragment,o),m=u(o),a(h.$$.fragment,o),o.forEach(d)},m(t,$){g(t,n,$),o(e,n,null),g(t,s,$),g(t,r,$),o(c,r,null),D(r,m),o(h,r,null),x=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const $={};2&n&&($.$$scope={dirty:n,ctx:t}),c.$set($);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),h.$set(a)},i(t){x||(p(e.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),x=!0)},o(t){l(e.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),x=!1},d(t){t&&d(n),f(e),t&&d(s),t&&d(r),f(c),f(h)}}}function $t(t){let n;return{c(){n=h("SCSS Variables")},l(t){n=x(t,"SCSS Variables")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function at(t){let n;return{c(){n=h("Name")},l(t){n=x(t,"Name")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function ot(t){let n;return{c(){n=h("Description")},l(t){n=x(t,"Description")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function rt(t){let n;return{c(){n=h("Default")},l(t){n=x(t,"Default")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function ct(t){let n,e,s,r,c,m;return n=new A({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),s=new A({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),c=new A({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),{c(){$(n.$$.fragment),e=i(),$(s.$$.fragment),r=i(),$(c.$$.fragment)},l(t){a(n.$$.fragment,t),e=u(t),a(s.$$.fragment,t),r=u(t),a(c.$$.fragment,t)},m(t,$){o(n,t,$),g(t,e,$),o(s,t,$),g(t,r,$),o(c,t,$),m=!0},p(t,e){const $={};2&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o)},i(t){m||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){f(n,t),t&&d(e),f(s,t),t&&d(r),f(c,t)}}}function pt(t){let n,e,s;return{c(){n=k("strong"),e=k("code"),s=h("$light-contrast")},l(t){n=y(t,"STRONG",{});var $=w(n);e=y($,"CODE",{});var a=w(e);s=x(a,"$light-contrast"),a.forEach(d),$.forEach(d)},m(t,$){g(t,n,$),D(n,e),D(e,s)},d(t){t&&d(n)}}}function lt(t){let n;return{c(){n=h("The color of the horizontal rule")},l(t){n=x(t,"The color of the horizontal rule")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function ft(t){let n,e;return n=new C({props:{value:"#DDDDDD"}}),{c(){$(n.$$.fragment)},l(t){a(n.$$.fragment,t)},m(t,s){o(n,t,s),e=!0},p:E,i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){l(n.$$.fragment,t),e=!1},d(t){f(n,t)}}}function mt(t){let n,e,s,r,c,m;return n=new z({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),s=new z({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),c=new z({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),{c(){$(n.$$.fragment),e=i(),$(s.$$.fragment),r=i(),$(c.$$.fragment)},l(t){a(n.$$.fragment,t),e=u(t),a(s.$$.fragment,t),r=u(t),a(c.$$.fragment,t)},m(t,$){o(n,t,$),g(t,e,$),o(s,t,$),g(t,r,$),o(c,t,$),m=!0},p(t,e){const $={};2&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o)},i(t){m||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){f(n,t),t&&d(e),f(s,t),t&&d(r),f(c,t)}}}function it(t){let n,e,s;return{c(){n=k("strong"),e=k("code"),s=h("$background")},l(t){n=y(t,"STRONG",{});var $=w(n);e=y($,"CODE",{});var a=w(e);s=x(a,"$background"),a.forEach(d),$.forEach(d)},m(t,$){g(t,n,$),D(n,e),D(e,s)},d(t){t&&d(n)}}}function ut(t){let n;return{c(){n=h("The background color of the text.")},l(t){n=x(t,"The background color of the text.")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function gt(t){let n,e;return n=new C({props:{value:"#FFFFFF"}}),{c(){$(n.$$.fragment)},l(t){a(n.$$.fragment,t)},m(t,s){o(n,t,s),e=!0},p:E,i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){l(n.$$.fragment,t),e=!1},d(t){f(n,t)}}}function dt(t){let n,e,s,r,c,m;return n=new z({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),s=new z({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),c=new z({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),{c(){$(n.$$.fragment),e=i(),$(s.$$.fragment),r=i(),$(c.$$.fragment)},l(t){a(n.$$.fragment,t),e=u(t),a(s.$$.fragment,t),r=u(t),a(c.$$.fragment,t)},m(t,$){o(n,t,$),g(t,e,$),o(s,t,$),g(t,r,$),o(c,t,$),m=!0},p(t,e){const $={};2&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o)},i(t){m||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){f(n,t),t&&d(e),f(s,t),t&&d(r),f(c,t)}}}function ht(t){let n,e,s,r,c,m,h,x;return e=new N({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),c=new N({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),h=new N({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),{c(){n=k("thead"),$(e.$$.fragment),s=i(),r=k("tbody"),$(c.$$.fragment),m=i(),$(h.$$.fragment)},l(t){n=y(t,"THEAD",{});var $=w(n);a(e.$$.fragment,$),$.forEach(d),s=u(t),r=y(t,"TBODY",{});var o=w(r);a(c.$$.fragment,o),m=u(o),a(h.$$.fragment,o),o.forEach(d)},m(t,$){g(t,n,$),o(e,n,null),g(t,s,$),g(t,r,$),o(c,r,null),D(r,m),o(h,r,null),x=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const $={};2&n&&($.$$scope={dirty:n,ctx:t}),c.$set($);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),h.$set(a)},i(t){x||(p(e.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),x=!0)},o(t){l(e.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),x=!1},d(t){t&&d(n),f(e),t&&d(s),t&&d(r),f(c),f(h)}}}function xt(t){let n,e,s,r,c,m,h,x,k,y,w,v,D,E,T,j;return n=new b({props:{$$slots:{default:[G]},$$scope:{ctx:t}}}),s=new O({props:{$$slots:{default:[R]},$$scope:{ctx:t}}}),c=new S({props:{$$slots:{source:[B],showcase:[V]},$$scope:{ctx:t}}}),h=new H({props:{id:"properties",$$slots:{default:[Y]},$$scope:{ctx:t}}}),k=new P({props:{$$slots:{default:[I]},$$scope:{ctx:t}}}),w=new F({props:{$$slots:{default:[st]},$$scope:{ctx:t}}}),D=new H({props:{id:"scss-variables",$$slots:{default:[$t]},$$scope:{ctx:t}}}),T=new F({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),{c(){$(n.$$.fragment),e=i(),$(s.$$.fragment),r=i(),$(c.$$.fragment),m=i(),$(h.$$.fragment),x=i(),$(k.$$.fragment),y=i(),$(w.$$.fragment),v=i(),$(D.$$.fragment),E=i(),$(T.$$.fragment)},l(t){a(n.$$.fragment,t),e=u(t),a(s.$$.fragment,t),r=u(t),a(c.$$.fragment,t),m=u(t),a(h.$$.fragment,t),x=u(t),a(k.$$.fragment,t),y=u(t),a(w.$$.fragment,t),v=u(t),a(D.$$.fragment,t),E=u(t),a(T.$$.fragment,t)},m(t,$){o(n,t,$),g(t,e,$),o(s,t,$),g(t,r,$),o(c,t,$),g(t,m,$),o(h,t,$),g(t,x,$),o(k,t,$),g(t,y,$),o(w,t,$),g(t,v,$),o(D,t,$),g(t,E,$),o(T,t,$),j=!0},p(t,e){const $={};2&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o);const r={};2&e&&(r.$$scope={dirty:e,ctx:t}),h.$set(r);const p={};2&e&&(p.$$scope={dirty:e,ctx:t}),k.$set(p);const l={};2&e&&(l.$$scope={dirty:e,ctx:t}),w.$set(l);const f={};2&e&&(f.$$scope={dirty:e,ctx:t}),D.$set(f);const m={};2&e&&(m.$$scope={dirty:e,ctx:t}),T.$set(m)},i(t){j||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),p(k.$$.fragment,t),p(w.$$.fragment,t),p(D.$$.fragment,t),p(T.$$.fragment,t),j=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),l(k.$$.fragment,t),l(w.$$.fragment,t),l(D.$$.fragment,t),l(T.$$.fragment,t),j=!1},d(t){f(n,t),t&&d(e),f(s,t),t&&d(r),f(c,t),t&&d(m),f(h,t),t&&d(x),f(k,t),t&&d(y),f(w,t),t&&d(v),f(D,t),t&&d(E),f(T,t)}}}function kt(t){let n,e;const m=[t[0],yt];let i={$$slots:{default:[xt]},$$scope:{ctx:t}};for(let t=0;t<m.length;t+=1)i=s(i,m[t]);return n=new T({props:i}),{c(){$(n.$$.fragment)},l(t){a(n.$$.fragment,t)},m(t,s){o(n,t,s),e=!0},p(t,[e]){const s=1&e?r(m,[1&e&&c(t[0]),0&e&&c(yt)]):{};2&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){l(n.$$.fragment,t),e=!1},d(t){f(n,t)}}}const yt={name:"Divider"};function wt(t,n,e){return t.$$set=t=>{e(0,n=s(s({},n),m(t)))},[n=m(n)]}class vt extends t{constructor(t){super(),n(this,t,wt,kt,e,{})}}export{vt as default,yt as metadata};
