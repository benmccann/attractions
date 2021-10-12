import{S as t,i as n,s as e,J as s,j as $,l as a,m as o,T as r,Z as c,t as p,p as l,q as f,K as m,r as i,v as u,f as g,d,u as h,w as x,h as k,k as w,b as y,e as v,g as D,n as E}from"./client.157dd4d8.js";import{L as T,H as b,P as O}from"./layout.b041187a.js";import{D as S}from"./divider.bd88da05.js";import{S as j}from"./showcase.9eabf3f0.js";import{C}from"./color-preview.ad00ecf6.js";import{H}from"./h2.9358d73f.js";import{H as F}from"./h3.da5ed0db.js";import{T as N,a as P,b as A,c as R}from"./table.4d385432.js";import"./label.2838c8e9.js";import"./classes.2453fa25.js";import"./copyable-code.7dab530d.js";import"./button.ef9cd81d.js";function z(t){let n;return{c(){n=h("Divider")},l(t){n=x(t,"Divider")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function G(t){let n;return{c(){n=h("A thin horizontal line used to separate sections and group content, with optional text to display in the middle.")},l(t){n=x(t,"A thin horizontal line used to separate sections and group content, with optional text to display in the middle.")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function V(t){let n,e,s,r,c,m,T,b,O,j,C,H,F,N,P,A;return c=new S({props:{text:"Section 1"}}),j=new S({props:{text:"Conclusion"}}),P=new S({}),{c(){n=k("div"),e=k("p"),s=h("This is some introduction to something"),r=i(),$(c.$$.fragment),m=i(),T=k("p"),b=h("This is the 1st section. Have fun"),O=i(),$(j.$$.fragment),C=i(),H=k("p"),F=h("This ends our test"),N=i(),$(P.$$.fragment),this.h()},l(t){n=w(t,"DIV",{slot:!0,class:!0});var $=y(n);e=w($,"P",{});var o=y(e);s=x(o,"This is some introduction to something"),o.forEach(d),r=u($),a(c.$$.fragment,$),m=u($),T=w($,"P",{});var p=y(T);b=x(p,"This is the 1st section. Have fun"),p.forEach(d),O=u($),a(j.$$.fragment,$),C=u($),H=w($,"P",{});var l=y(H);F=x(l,"This ends our test"),l.forEach(d),N=u($),a(P.$$.fragment,$),$.forEach(d),this.h()},h(){v(n,"slot","showcase"),v(n,"class","padded")},m(t,$){g(t,n,$),D(n,e),D(e,s),D(n,r),o(c,n,null),D(n,m),D(n,T),D(T,b),D(n,O),o(j,n,null),D(n,C),D(n,H),D(H,F),D(n,N),o(P,n,null),A=!0},p:E,i(t){A||(p(c.$$.fragment,t),p(j.$$.fragment,t),p(P.$$.fragment,t),A=!0)},o(t){l(c.$$.fragment,t),l(j.$$.fragment,t),l(P.$$.fragment,t),A=!1},d(t){t&&d(n),f(c),f(j),f(P)}}}function B(t){let n,e;return{c(){n=k("div"),e=k("pre"),this.h()},l(t){n=w(t,"DIV",{slot:!0});var s=y(n);e=w(s,"PRE",{class:!0}),y(e).forEach(d),s.forEach(d),this.h()},h(){v(e,"class","language-svelte"),v(n,"slot","source")},m(t,s){g(t,n,s),D(n,e),e.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>This is some introduction to something<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Divider</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Section 1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>This is the 1st section. Have fun<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Divider</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Conclusion<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>This ends our test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Divider</span> <span class="token punctuation">/></span></span></code>'},p:E,d(t){t&&d(n)}}}function I(t){let n;return{c(){n=h("Properties")},l(t){n=x(t,"Properties")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function L(t){let n;return{c(){n=h("Functional Properties")},l(t){n=x(t,"Functional Properties")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function Y(t){let n;return{c(){n=h("Name")},l(t){n=x(t,"Name")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function q(t){let n;return{c(){n=h("Default")},l(t){n=x(t,"Default")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function J(t){let n;return{c(){n=h("Type")},l(t){n=x(t,"Type")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function K(t){let n;return{c(){n=h("Description")},l(t){n=x(t,"Description")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function M(t){let n,e,s,r,c,m,h,x;return n=new A({props:{$$slots:{default:[Y]},$$scope:{ctx:t}}}),s=new A({props:{$$slots:{default:[q]},$$scope:{ctx:t}}}),c=new A({props:{$$slots:{default:[J]},$$scope:{ctx:t}}}),h=new A({props:{$$slots:{default:[K]},$$scope:{ctx:t}}}),{c(){$(n.$$.fragment),e=i(),$(s.$$.fragment),r=i(),$(c.$$.fragment),m=i(),$(h.$$.fragment)},l(t){a(n.$$.fragment,t),e=u(t),a(s.$$.fragment,t),r=u(t),a(c.$$.fragment,t),m=u(t),a(h.$$.fragment,t)},m(t,$){o(n,t,$),g(t,e,$),o(s,t,$),g(t,r,$),o(c,t,$),g(t,m,$),o(h,t,$),x=!0},p(t,e){const $={};2&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o);const r={};2&e&&(r.$$scope={dirty:e,ctx:t}),h.$set(r)},i(t){x||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),x=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),x=!1},d(t){f(n,t),t&&d(e),f(s,t),t&&d(r),f(c,t),t&&d(m),f(h,t)}}}function Z(t){let n,e,s;return{c(){n=k("strong"),e=k("code"),s=h("text")},l(t){n=w(t,"STRONG",{});var $=y(n);e=w($,"CODE",{});var a=y(e);s=x(a,"text"),a.forEach(d),$.forEach(d)},m(t,$){g(t,n,$),D(n,e),D(e,s)},d(t){t&&d(n)}}}function Q(t){let n,e;return{c(){n=k("code"),e=h("null")},l(t){n=w(t,"CODE",{});var s=y(n);e=x(s,"null"),s.forEach(d)},m(t,s){g(t,n,s),D(n,e)},d(t){t&&d(n)}}}function U(t){let n,e;return{c(){n=k("code"),e=h("string")},l(t){n=w(t,"CODE",{});var s=y(n);e=x(s,"string"),s.forEach(d)},m(t,s){g(t,n,s),D(n,e)},d(t){t&&d(n)}}}function W(t){let n;return{c(){n=h("Adds a text to the middle of the line.")},l(t){n=x(t,"Adds a text to the middle of the line.")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function X(t){let n,e,s,r,c,m,h,x;return n=new R({props:{$$slots:{default:[Z]},$$scope:{ctx:t}}}),s=new R({props:{$$slots:{default:[Q]},$$scope:{ctx:t}}}),c=new R({props:{$$slots:{default:[U]},$$scope:{ctx:t}}}),h=new R({props:{$$slots:{default:[W]},$$scope:{ctx:t}}}),{c(){$(n.$$.fragment),e=i(),$(s.$$.fragment),r=i(),$(c.$$.fragment),m=i(),$(h.$$.fragment)},l(t){a(n.$$.fragment,t),e=u(t),a(s.$$.fragment,t),r=u(t),a(c.$$.fragment,t),m=u(t),a(h.$$.fragment,t)},m(t,$){o(n,t,$),g(t,e,$),o(s,t,$),g(t,r,$),o(c,t,$),g(t,m,$),o(h,t,$),x=!0},p(t,e){const $={};2&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o);const r={};2&e&&(r.$$scope={dirty:e,ctx:t}),h.$set(r)},i(t){x||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),x=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),x=!1},d(t){f(n,t),t&&d(e),f(s,t),t&&d(r),f(c,t),t&&d(m),f(h,t)}}}function _(t){let n,e,s;return{c(){n=k("strong"),e=k("code"),s=h("...")},l(t){n=w(t,"STRONG",{});var $=y(n);e=w($,"CODE",{});var a=y(e);s=x(a,"..."),a.forEach(d),$.forEach(d)},m(t,$){g(t,n,$),D(n,e),D(e,s)},d(t){t&&d(n)}}}function tt(t){let n,e;return{c(){n=k("code"),e=h("any")},l(t){n=w(t,"CODE",{});var s=y(n);e=x(s,"any"),s.forEach(d)},m(t,s){g(t,n,s),D(n,e)},d(t){t&&d(n)}}}function nt(t){let n,e,s,$;return{c(){n=h("Everything else will be passed to the underlying "),e=k("code"),s=h("<hr>"),$=h(" element.")},l(t){n=x(t,"Everything else will be passed to the underlying "),e=w(t,"CODE",{});var a=y(e);s=x(a,"<hr>"),a.forEach(d),$=x(t," element.")},m(t,a){g(t,n,a),g(t,e,a),D(e,s),g(t,$,a)},d(t){t&&d(n),t&&d(e),t&&d($)}}}function et(t){let n,e,s,r,c,m,h,x;return n=new R({props:{$$slots:{default:[_]},$$scope:{ctx:t}}}),s=new R({}),c=new R({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),h=new R({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),{c(){$(n.$$.fragment),e=i(),$(s.$$.fragment),r=i(),$(c.$$.fragment),m=i(),$(h.$$.fragment)},l(t){a(n.$$.fragment,t),e=u(t),a(s.$$.fragment,t),r=u(t),a(c.$$.fragment,t),m=u(t),a(h.$$.fragment,t)},m(t,$){o(n,t,$),g(t,e,$),o(s,t,$),g(t,r,$),o(c,t,$),g(t,m,$),o(h,t,$),x=!0},p(t,e){const s={};2&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const $={};2&e&&($.$$scope={dirty:e,ctx:t}),c.$set($);const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),h.$set(a)},i(t){x||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),x=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),x=!1},d(t){f(n,t),t&&d(e),f(s,t),t&&d(r),f(c,t),t&&d(m),f(h,t)}}}function st(t){let n,e,s,r,c,m,h,x;return e=new P({props:{$$slots:{default:[M]},$$scope:{ctx:t}}}),c=new P({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),h=new P({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),{c(){n=k("thead"),$(e.$$.fragment),s=i(),r=k("tbody"),$(c.$$.fragment),m=i(),$(h.$$.fragment)},l(t){n=w(t,"THEAD",{});var $=y(n);a(e.$$.fragment,$),$.forEach(d),s=u(t),r=w(t,"TBODY",{});var o=y(r);a(c.$$.fragment,o),m=u(o),a(h.$$.fragment,o),o.forEach(d)},m(t,$){g(t,n,$),o(e,n,null),g(t,s,$),g(t,r,$),o(c,r,null),D(r,m),o(h,r,null),x=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const $={};2&n&&($.$$scope={dirty:n,ctx:t}),c.$set($);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),h.$set(a)},i(t){x||(p(e.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),x=!0)},o(t){l(e.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),x=!1},d(t){t&&d(n),f(e),t&&d(s),t&&d(r),f(c),f(h)}}}function $t(t){let n;return{c(){n=h("SCSS Variables")},l(t){n=x(t,"SCSS Variables")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function at(t){let n;return{c(){n=h("Name")},l(t){n=x(t,"Name")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function ot(t){let n;return{c(){n=h("Description")},l(t){n=x(t,"Description")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function rt(t){let n;return{c(){n=h("Default")},l(t){n=x(t,"Default")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function ct(t){let n,e,s,r,c,m;return n=new A({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),s=new A({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),c=new A({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),{c(){$(n.$$.fragment),e=i(),$(s.$$.fragment),r=i(),$(c.$$.fragment)},l(t){a(n.$$.fragment,t),e=u(t),a(s.$$.fragment,t),r=u(t),a(c.$$.fragment,t)},m(t,$){o(n,t,$),g(t,e,$),o(s,t,$),g(t,r,$),o(c,t,$),m=!0},p(t,e){const $={};2&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o)},i(t){m||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){f(n,t),t&&d(e),f(s,t),t&&d(r),f(c,t)}}}function pt(t){let n,e,s;return{c(){n=k("strong"),e=k("code"),s=h("$light-contrast")},l(t){n=w(t,"STRONG",{});var $=y(n);e=w($,"CODE",{});var a=y(e);s=x(a,"$light-contrast"),a.forEach(d),$.forEach(d)},m(t,$){g(t,n,$),D(n,e),D(e,s)},d(t){t&&d(n)}}}function lt(t){let n;return{c(){n=h("The color of the horizontal rule")},l(t){n=x(t,"The color of the horizontal rule")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function ft(t){let n,e;return n=new C({props:{value:"#DDDDDD"}}),{c(){$(n.$$.fragment)},l(t){a(n.$$.fragment,t)},m(t,s){o(n,t,s),e=!0},p:E,i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){l(n.$$.fragment,t),e=!1},d(t){f(n,t)}}}function mt(t){let n,e,s,r,c,m;return n=new R({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),s=new R({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),c=new R({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),{c(){$(n.$$.fragment),e=i(),$(s.$$.fragment),r=i(),$(c.$$.fragment)},l(t){a(n.$$.fragment,t),e=u(t),a(s.$$.fragment,t),r=u(t),a(c.$$.fragment,t)},m(t,$){o(n,t,$),g(t,e,$),o(s,t,$),g(t,r,$),o(c,t,$),m=!0},p(t,e){const $={};2&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o)},i(t){m||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){f(n,t),t&&d(e),f(s,t),t&&d(r),f(c,t)}}}function it(t){let n,e,s;return{c(){n=k("strong"),e=k("code"),s=h("$background")},l(t){n=w(t,"STRONG",{});var $=y(n);e=w($,"CODE",{});var a=y(e);s=x(a,"$background"),a.forEach(d),$.forEach(d)},m(t,$){g(t,n,$),D(n,e),D(e,s)},d(t){t&&d(n)}}}function ut(t){let n;return{c(){n=h("The background color of the text.")},l(t){n=x(t,"The background color of the text.")},m(t,e){g(t,n,e)},d(t){t&&d(n)}}}function gt(t){let n,e;return n=new C({props:{value:"#FFFFFF"}}),{c(){$(n.$$.fragment)},l(t){a(n.$$.fragment,t)},m(t,s){o(n,t,s),e=!0},p:E,i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){l(n.$$.fragment,t),e=!1},d(t){f(n,t)}}}function dt(t){let n,e,s,r,c,m;return n=new R({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),s=new R({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),c=new R({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),{c(){$(n.$$.fragment),e=i(),$(s.$$.fragment),r=i(),$(c.$$.fragment)},l(t){a(n.$$.fragment,t),e=u(t),a(s.$$.fragment,t),r=u(t),a(c.$$.fragment,t)},m(t,$){o(n,t,$),g(t,e,$),o(s,t,$),g(t,r,$),o(c,t,$),m=!0},p(t,e){const $={};2&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o)},i(t){m||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){f(n,t),t&&d(e),f(s,t),t&&d(r),f(c,t)}}}function ht(t){let n,e,s,r,c,m,h,x;return e=new P({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),c=new P({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),h=new P({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),{c(){n=k("thead"),$(e.$$.fragment),s=i(),r=k("tbody"),$(c.$$.fragment),m=i(),$(h.$$.fragment)},l(t){n=w(t,"THEAD",{});var $=y(n);a(e.$$.fragment,$),$.forEach(d),s=u(t),r=w(t,"TBODY",{});var o=y(r);a(c.$$.fragment,o),m=u(o),a(h.$$.fragment,o),o.forEach(d)},m(t,$){g(t,n,$),o(e,n,null),g(t,s,$),g(t,r,$),o(c,r,null),D(r,m),o(h,r,null),x=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const $={};2&n&&($.$$scope={dirty:n,ctx:t}),c.$set($);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),h.$set(a)},i(t){x||(p(e.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),x=!0)},o(t){l(e.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),x=!1},d(t){t&&d(n),f(e),t&&d(s),t&&d(r),f(c),f(h)}}}function xt(t){let n,e,s,r,c,m,h,x,k,w,y,v,D,E,T,S;return n=new b({props:{$$slots:{default:[z]},$$scope:{ctx:t}}}),s=new O({props:{$$slots:{default:[G]},$$scope:{ctx:t}}}),c=new j({props:{$$slots:{source:[B],showcase:[V]},$$scope:{ctx:t}}}),h=new H({props:{id:"properties",$$slots:{default:[I]},$$scope:{ctx:t}}}),k=new F({props:{$$slots:{default:[L]},$$scope:{ctx:t}}}),y=new N({props:{$$slots:{default:[st]},$$scope:{ctx:t}}}),D=new H({props:{id:"scss-variables",$$slots:{default:[$t]},$$scope:{ctx:t}}}),T=new N({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),{c(){$(n.$$.fragment),e=i(),$(s.$$.fragment),r=i(),$(c.$$.fragment),m=i(),$(h.$$.fragment),x=i(),$(k.$$.fragment),w=i(),$(y.$$.fragment),v=i(),$(D.$$.fragment),E=i(),$(T.$$.fragment)},l(t){a(n.$$.fragment,t),e=u(t),a(s.$$.fragment,t),r=u(t),a(c.$$.fragment,t),m=u(t),a(h.$$.fragment,t),x=u(t),a(k.$$.fragment,t),w=u(t),a(y.$$.fragment,t),v=u(t),a(D.$$.fragment,t),E=u(t),a(T.$$.fragment,t)},m(t,$){o(n,t,$),g(t,e,$),o(s,t,$),g(t,r,$),o(c,t,$),g(t,m,$),o(h,t,$),g(t,x,$),o(k,t,$),g(t,w,$),o(y,t,$),g(t,v,$),o(D,t,$),g(t,E,$),o(T,t,$),S=!0},p(t,e){const $={};2&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o);const r={};2&e&&(r.$$scope={dirty:e,ctx:t}),h.$set(r);const p={};2&e&&(p.$$scope={dirty:e,ctx:t}),k.$set(p);const l={};2&e&&(l.$$scope={dirty:e,ctx:t}),y.$set(l);const f={};2&e&&(f.$$scope={dirty:e,ctx:t}),D.$set(f);const m={};2&e&&(m.$$scope={dirty:e,ctx:t}),T.$set(m)},i(t){S||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(c.$$.fragment,t),p(h.$$.fragment,t),p(k.$$.fragment,t),p(y.$$.fragment,t),p(D.$$.fragment,t),p(T.$$.fragment,t),S=!0)},o(t){l(n.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),l(k.$$.fragment,t),l(y.$$.fragment,t),l(D.$$.fragment,t),l(T.$$.fragment,t),S=!1},d(t){f(n,t),t&&d(e),f(s,t),t&&d(r),f(c,t),t&&d(m),f(h,t),t&&d(x),f(k,t),t&&d(w),f(y,t),t&&d(v),f(D,t),t&&d(E),f(T,t)}}}function kt(t){let n,e;const m=[t[0],wt];let i={$$slots:{default:[xt]},$$scope:{ctx:t}};for(let t=0;t<m.length;t+=1)i=s(i,m[t]);return n=new T({props:i}),{c(){$(n.$$.fragment)},l(t){a(n.$$.fragment,t)},m(t,s){o(n,t,s),e=!0},p(t,[e]){const s=1&e?r(m,[1&e&&c(t[0]),0&e&&c(wt)]):{};2&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(p(n.$$.fragment,t),e=!0)},o(t){l(n.$$.fragment,t),e=!1},d(t){f(n,t)}}}const wt={name:"Divider"};function yt(t,n,e){return t.$$set=t=>{e(0,n=s(s({},n),m(t)))},[n=m(n)]}class vt extends t{constructor(t){super(),n(this,t,yt,kt,e,{})}}export{vt as default,wt as metadata};
