import{S as t,i as e,s as $,O as s,p as n,r,t as a,Y as o,a3 as c,v as f,w as l,x as m,P as p,y as i,A as g,k as d,h as u,z as h,B as x,o as y,q as w,g as b,j as v,l as E,n as D}from"./client.cf4e6b16.js";import{L as j,H as A,P as T}from"./layout.463cd8dc.js";import{L as S}from"./loading.41525a97.js";import{S as C}from"./showcase.914e9c79.js";import{C as O}from"./color-preview.91bb108f.js";import{H as L}from"./h2.9e63652f.js";import{H as k}from"./h3.7adf12ca.js";import{T as H,a as N,b as P,c as B}from"./table.7d29ec85.js";import"./classes.7d86155b.js";import"./label.501836f0.js";import"./copyable-code.e315b354.js";import"./asyncToGenerator.3904ce9a.js";import"./button.e5a3e9d6.js";function V(t){let e;return{c(){e=h("Loading")},l(t){e=x(t,"Loading")},m(t,$){d(t,e,$)},d(t){t&&u(e)}}}function G(t){let e;return{c(){e=h("An indeterminate loading spinner.")},l(t){e=x(t,"An indeterminate loading spinner.")},m(t,$){d(t,e,$)},d(t){t&&u(e)}}}function R(t){let e,$,s,n,r,a;return{c(){e=h("Adapted from SpinKit by "),$=y("a"),s=h("@tobiasahlin"),n=h(": "),r=y("a"),a=h("https://tobiasahlin.com/spinkit/"),this.h()},l(t){e=x(t,"Adapted from SpinKit by "),$=w(t,"A",{href:!0,rel:!0});var o=b($);s=x(o,"@tobiasahlin"),o.forEach(u),n=x(t,": "),r=w(t,"A",{href:!0,rel:!0});var c=b(r);a=x(c,"https://tobiasahlin.com/spinkit/"),c.forEach(u),this.h()},h(){v($,"href","https://github.com/tobiasahlin"),v($,"rel","nofollow"),v(r,"href","https://tobiasahlin.com/spinkit/"),v(r,"rel","nofollow")},m(t,o){d(t,e,o),d(t,$,o),E($,s),d(t,n,o),d(t,r,o),E(r,a)},d(t){t&&u(e),t&&u($),t&&u(n),t&&u(r)}}}function Y(t){let e,$,s;return $=new S({}),{c(){e=y("div"),n($.$$.fragment),this.h()},l(t){e=w(t,"DIV",{slot:!0,class:!0});var s=b(e);r($.$$.fragment,s),s.forEach(u),this.h()},h(){v(e,"slot","showcase"),v(e,"class","padded")},m(t,n){d(t,e,n),a($,e,null),s=!0},i(t){s||(f($.$$.fragment,t),s=!0)},o(t){l($.$$.fragment,t),s=!1},d(t){t&&u(e),m($)}}}function F(t){let e,$;return{c(){e=y("div"),$=y("pre"),this.h()},l(t){e=w(t,"DIV",{slot:!0});var s=b(e);$=w(s,"PRE",{class:!0}),b($).forEach(u),s.forEach(u),this.h()},h(){v($,"class","language-svelte"),v(e,"slot","source")},m(t,s){d(t,e,s),E(e,$),$.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Loading</span> <span class="token punctuation">/></span></span></code>'},p:D,d(t){t&&u(e)}}}function I(t){let e;return{c(){e=h("Properties")},l(t){e=x(t,"Properties")},m(t,$){d(t,e,$)},d(t){t&&u(e)}}}function K(t){let e;return{c(){e=h("Class Properties")},l(t){e=x(t,"Class Properties")},m(t,$){d(t,e,$)},d(t){t&&u(e)}}}function q(t){let e,$,s,n,r,a,o;return{c(){e=h("All "),$=y("code"),s=h("<Loading>"),n=h(" components use the "),r=y("code"),a=h(".spinner"),o=h(" class.")},l(t){e=x(t,"All "),$=w(t,"CODE",{});var c=b($);s=x(c,"<Loading>"),c.forEach(u),n=x(t," components use the "),r=w(t,"CODE",{});var f=b(r);a=x(f,".spinner"),f.forEach(u),o=x(t," class.")},m(t,c){d(t,e,c),d(t,$,c),E($,s),d(t,n,c),d(t,r,c),E(r,a),d(t,o,c)},d(t){t&&u(e),t&&u($),t&&u(n),t&&u(r),t&&u(o)}}}function z(t){let e;return{c(){e=h("Falsy values passed to classes will be disregarded.")},l(t){e=x(t,"Falsy values passed to classes will be disregarded.")},m(t,$){d(t,e,$)},d(t){t&&u(e)}}}function M(t){let e;return{c(){e=h("Name")},l(t){e=x(t,"Name")},m(t,$){d(t,e,$)},d(t){t&&u(e)}}}function J(t){let e;return{c(){e=h("Default")},l(t){e=x(t,"Default")},m(t,$){d(t,e,$)},d(t){t&&u(e)}}}function Q(t){let e;return{c(){e=h("Type")},l(t){e=x(t,"Type")},m(t,$){d(t,e,$)},d(t){t&&u(e)}}}function U(t){let e;return{c(){e=h("Description")},l(t){e=x(t,"Description")},m(t,$){d(t,e,$)},d(t){t&&u(e)}}}function W(t){let e,$,s,o,c,p,h,x;return e=new P({props:{$$slots:{default:[M]},$$scope:{ctx:t}}}),s=new P({props:{$$slots:{default:[J]},$$scope:{ctx:t}}}),c=new P({props:{$$slots:{default:[Q]},$$scope:{ctx:t}}}),h=new P({props:{$$slots:{default:[U]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment),$=i(),n(s.$$.fragment),o=i(),n(c.$$.fragment),p=i(),n(h.$$.fragment)},l(t){r(e.$$.fragment,t),$=g(t),r(s.$$.fragment,t),o=g(t),r(c.$$.fragment,t),p=g(t),r(h.$$.fragment,t)},m(t,n){a(e,t,n),d(t,$,n),a(s,t,n),d(t,o,n),a(c,t,n),d(t,p,n),a(h,t,n),x=!0},p(t,$){const n={};2&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n);const r={};2&$&&(r.$$scope={dirty:$,ctx:t}),s.$set(r);const a={};2&$&&(a.$$scope={dirty:$,ctx:t}),c.$set(a);const o={};2&$&&(o.$$scope={dirty:$,ctx:t}),h.$set(o)},i(t){x||(f(e.$$.fragment,t),f(s.$$.fragment,t),f(c.$$.fragment,t),f(h.$$.fragment,t),x=!0)},o(t){l(e.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),x=!1},d(t){m(e,t),t&&u($),m(s,t),t&&u(o),m(c,t),t&&u(p),m(h,t)}}}function X(t){let e,$,s;return{c(){e=y("strong"),$=y("code"),s=h("class")},l(t){e=w(t,"STRONG",{});var n=b(e);$=w(n,"CODE",{});var r=b($);s=x(r,"class"),r.forEach(u),n.forEach(u)},m(t,n){d(t,e,n),E(e,$),E($,s)},d(t){t&&u(e)}}}function Z(t){let e,$;return{c(){e=y("code"),$=h("null")},l(t){e=w(t,"CODE",{});var s=b(e);$=x(s,"null"),s.forEach(u)},m(t,s){d(t,e,s),E(e,$)},d(t){t&&u(e)}}}function _(t){let e,$;return{c(){e=y("code"),$=h("string")},l(t){e=w(t,"CODE",{});var s=b(e);$=x(s,"string"),s.forEach(u)},m(t,s){d(t,e,s),E(e,$)},d(t){t&&u(e)}}}function tt(t){let e;return{c(){e=h("A class string to add to the component.")},l(t){e=x(t,"A class string to add to the component.")},m(t,$){d(t,e,$)},d(t){t&&u(e)}}}function et(t){let e,$,s,o,c,p,h,x;return e=new B({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),s=new B({props:{$$slots:{default:[Z]},$$scope:{ctx:t}}}),c=new B({props:{$$slots:{default:[_]},$$scope:{ctx:t}}}),h=new B({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment),$=i(),n(s.$$.fragment),o=i(),n(c.$$.fragment),p=i(),n(h.$$.fragment)},l(t){r(e.$$.fragment,t),$=g(t),r(s.$$.fragment,t),o=g(t),r(c.$$.fragment,t),p=g(t),r(h.$$.fragment,t)},m(t,n){a(e,t,n),d(t,$,n),a(s,t,n),d(t,o,n),a(c,t,n),d(t,p,n),a(h,t,n),x=!0},p(t,$){const n={};2&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n);const r={};2&$&&(r.$$scope={dirty:$,ctx:t}),s.$set(r);const a={};2&$&&(a.$$scope={dirty:$,ctx:t}),c.$set(a);const o={};2&$&&(o.$$scope={dirty:$,ctx:t}),h.$set(o)},i(t){x||(f(e.$$.fragment,t),f(s.$$.fragment,t),f(c.$$.fragment,t),f(h.$$.fragment,t),x=!0)},o(t){l(e.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),x=!1},d(t){m(e,t),t&&u($),m(s,t),t&&u(o),m(c,t),t&&u(p),m(h,t)}}}function $t(t){let e,$,s,o,c,p;return $=new N({props:{$$slots:{default:[W]},$$scope:{ctx:t}}}),c=new N({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),{c(){e=y("thead"),n($.$$.fragment),s=i(),o=y("tbody"),n(c.$$.fragment)},l(t){e=w(t,"THEAD",{});var n=b(e);r($.$$.fragment,n),n.forEach(u),s=g(t),o=w(t,"TBODY",{});var a=b(o);r(c.$$.fragment,a),a.forEach(u)},m(t,n){d(t,e,n),a($,e,null),d(t,s,n),d(t,o,n),a(c,o,null),p=!0},p(t,e){const s={};2&e&&(s.$$scope={dirty:e,ctx:t}),$.$set(s);const n={};2&e&&(n.$$scope={dirty:e,ctx:t}),c.$set(n)},i(t){p||(f($.$$.fragment,t),f(c.$$.fragment,t),p=!0)},o(t){l($.$$.fragment,t),l(c.$$.fragment,t),p=!1},d(t){t&&u(e),m($),t&&u(s),t&&u(o),m(c)}}}function st(t){let e;return{c(){e=h("SCSS Variables")},l(t){e=x(t,"SCSS Variables")},m(t,$){d(t,e,$)},d(t){t&&u(e)}}}function nt(t){let e;return{c(){e=h("Name")},l(t){e=x(t,"Name")},m(t,$){d(t,e,$)},d(t){t&&u(e)}}}function rt(t){let e;return{c(){e=h("Description")},l(t){e=x(t,"Description")},m(t,$){d(t,e,$)},d(t){t&&u(e)}}}function at(t){let e;return{c(){e=h("Default")},l(t){e=x(t,"Default")},m(t,$){d(t,e,$)},d(t){t&&u(e)}}}function ot(t){let e,$,s,o,c,p;return e=new P({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),s=new P({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),c=new P({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment),$=i(),n(s.$$.fragment),o=i(),n(c.$$.fragment)},l(t){r(e.$$.fragment,t),$=g(t),r(s.$$.fragment,t),o=g(t),r(c.$$.fragment,t)},m(t,n){a(e,t,n),d(t,$,n),a(s,t,n),d(t,o,n),a(c,t,n),p=!0},p(t,$){const n={};2&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n);const r={};2&$&&(r.$$scope={dirty:$,ctx:t}),s.$set(r);const a={};2&$&&(a.$$scope={dirty:$,ctx:t}),c.$set(a)},i(t){p||(f(e.$$.fragment,t),f(s.$$.fragment,t),f(c.$$.fragment,t),p=!0)},o(t){l(e.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),p=!1},d(t){m(e,t),t&&u($),m(s,t),t&&u(o),m(c,t)}}}function ct(t){let e,$,s;return{c(){e=y("strong"),$=y("code"),s=h("$main")},l(t){e=w(t,"STRONG",{});var n=b(e);$=w(n,"CODE",{});var r=b($);s=x(r,"$main"),r.forEach(u),n.forEach(u)},m(t,n){d(t,e,n),E(e,$),E($,s)},d(t){t&&u(e)}}}function ft(t){let e;return{c(){e=h("The color of spinner dots.")},l(t){e=x(t,"The color of spinner dots.")},m(t,$){d(t,e,$)},d(t){t&&u(e)}}}function lt(t){let e,$;return e=new O({props:{value:"#4300B0"}}),{c(){n(e.$$.fragment)},l(t){r(e.$$.fragment,t)},m(t,s){a(e,t,s),$=!0},p:D,i(t){$||(f(e.$$.fragment,t),$=!0)},o(t){l(e.$$.fragment,t),$=!1},d(t){m(e,t)}}}function mt(t){let e,$,s,o,c,p;return e=new B({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),s=new B({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),c=new B({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment),$=i(),n(s.$$.fragment),o=i(),n(c.$$.fragment)},l(t){r(e.$$.fragment,t),$=g(t),r(s.$$.fragment,t),o=g(t),r(c.$$.fragment,t)},m(t,n){a(e,t,n),d(t,$,n),a(s,t,n),d(t,o,n),a(c,t,n),p=!0},p(t,$){const n={};2&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n);const r={};2&$&&(r.$$scope={dirty:$,ctx:t}),s.$set(r);const a={};2&$&&(a.$$scope={dirty:$,ctx:t}),c.$set(a)},i(t){p||(f(e.$$.fragment,t),f(s.$$.fragment,t),f(c.$$.fragment,t),p=!0)},o(t){l(e.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),p=!1},d(t){m(e,t),t&&u($),m(s,t),t&&u(o),m(c,t)}}}function pt(t){let e,$,s,o,c,p;return $=new N({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),c=new N({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),{c(){e=y("thead"),n($.$$.fragment),s=i(),o=y("tbody"),n(c.$$.fragment)},l(t){e=w(t,"THEAD",{});var n=b(e);r($.$$.fragment,n),n.forEach(u),s=g(t),o=w(t,"TBODY",{});var a=b(o);r(c.$$.fragment,a),a.forEach(u)},m(t,n){d(t,e,n),a($,e,null),d(t,s,n),d(t,o,n),a(c,o,null),p=!0},p(t,e){const s={};2&e&&(s.$$scope={dirty:e,ctx:t}),$.$set(s);const n={};2&e&&(n.$$scope={dirty:e,ctx:t}),c.$set(n)},i(t){p||(f($.$$.fragment,t),f(c.$$.fragment,t),p=!0)},o(t){l($.$$.fragment,t),l(c.$$.fragment,t),p=!1},d(t){t&&u(e),m($),t&&u(s),t&&u(o),m(c)}}}function it(t){let e,$,s,o,c,p,h,x,y,w,b,v,E,D,j,S,O,N,P,B,M,J;return e=new A({props:{$$slots:{default:[V]},$$scope:{ctx:t}}}),s=new T({props:{$$slots:{default:[G]},$$scope:{ctx:t}}}),c=new T({props:{$$slots:{default:[R]},$$scope:{ctx:t}}}),h=new C({props:{$$slots:{source:[F],showcase:[Y]},$$scope:{ctx:t}}}),y=new L({props:{id:"properties",$$slots:{default:[I]},$$scope:{ctx:t}}}),b=new k({props:{$$slots:{default:[K]},$$scope:{ctx:t}}}),E=new T({props:{$$slots:{default:[q]},$$scope:{ctx:t}}}),j=new T({props:{$$slots:{default:[z]},$$scope:{ctx:t}}}),O=new H({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),P=new L({props:{id:"scss-variables",$$slots:{default:[st]},$$scope:{ctx:t}}}),M=new H({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment),$=i(),n(s.$$.fragment),o=i(),n(c.$$.fragment),p=i(),n(h.$$.fragment),x=i(),n(y.$$.fragment),w=i(),n(b.$$.fragment),v=i(),n(E.$$.fragment),D=i(),n(j.$$.fragment),S=i(),n(O.$$.fragment),N=i(),n(P.$$.fragment),B=i(),n(M.$$.fragment)},l(t){r(e.$$.fragment,t),$=g(t),r(s.$$.fragment,t),o=g(t),r(c.$$.fragment,t),p=g(t),r(h.$$.fragment,t),x=g(t),r(y.$$.fragment,t),w=g(t),r(b.$$.fragment,t),v=g(t),r(E.$$.fragment,t),D=g(t),r(j.$$.fragment,t),S=g(t),r(O.$$.fragment,t),N=g(t),r(P.$$.fragment,t),B=g(t),r(M.$$.fragment,t)},m(t,n){a(e,t,n),d(t,$,n),a(s,t,n),d(t,o,n),a(c,t,n),d(t,p,n),a(h,t,n),d(t,x,n),a(y,t,n),d(t,w,n),a(b,t,n),d(t,v,n),a(E,t,n),d(t,D,n),a(j,t,n),d(t,S,n),a(O,t,n),d(t,N,n),a(P,t,n),d(t,B,n),a(M,t,n),J=!0},p(t,$){const n={};2&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n);const r={};2&$&&(r.$$scope={dirty:$,ctx:t}),s.$set(r);const a={};2&$&&(a.$$scope={dirty:$,ctx:t}),c.$set(a);const o={};2&$&&(o.$$scope={dirty:$,ctx:t}),h.$set(o);const f={};2&$&&(f.$$scope={dirty:$,ctx:t}),y.$set(f);const l={};2&$&&(l.$$scope={dirty:$,ctx:t}),b.$set(l);const m={};2&$&&(m.$$scope={dirty:$,ctx:t}),E.$set(m);const p={};2&$&&(p.$$scope={dirty:$,ctx:t}),j.$set(p);const i={};2&$&&(i.$$scope={dirty:$,ctx:t}),O.$set(i);const g={};2&$&&(g.$$scope={dirty:$,ctx:t}),P.$set(g);const d={};2&$&&(d.$$scope={dirty:$,ctx:t}),M.$set(d)},i(t){J||(f(e.$$.fragment,t),f(s.$$.fragment,t),f(c.$$.fragment,t),f(h.$$.fragment,t),f(y.$$.fragment,t),f(b.$$.fragment,t),f(E.$$.fragment,t),f(j.$$.fragment,t),f(O.$$.fragment,t),f(P.$$.fragment,t),f(M.$$.fragment,t),J=!0)},o(t){l(e.$$.fragment,t),l(s.$$.fragment,t),l(c.$$.fragment,t),l(h.$$.fragment,t),l(y.$$.fragment,t),l(b.$$.fragment,t),l(E.$$.fragment,t),l(j.$$.fragment,t),l(O.$$.fragment,t),l(P.$$.fragment,t),l(M.$$.fragment,t),J=!1},d(t){m(e,t),t&&u($),m(s,t),t&&u(o),m(c,t),t&&u(p),m(h,t),t&&u(x),m(y,t),t&&u(w),m(b,t),t&&u(v),m(E,t),t&&u(D),m(j,t),t&&u(S),m(O,t),t&&u(N),m(P,t),t&&u(B),m(M,t)}}}function gt(t){let e,$;const p=[t[0],dt];let i={$$slots:{default:[it]},$$scope:{ctx:t}};for(let t=0;t<p.length;t+=1)i=s(i,p[t]);return e=new j({props:i}),{c(){n(e.$$.fragment)},l(t){r(e.$$.fragment,t)},m(t,s){a(e,t,s),$=!0},p(t,[$]){const s=1&$?o(p,[1&$&&c(t[0]),0&$&&c(dt)]):{};2&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s)},i(t){$||(f(e.$$.fragment,t),$=!0)},o(t){l(e.$$.fragment,t),$=!1},d(t){m(e,t)}}}const dt={name:"Loading"};function ut(t,e,$){return t.$$set=t=>{$(0,e=s(s({},e),p(t)))},[e=p(e)]}class ht extends t{constructor(t){super(),e(this,t,ut,gt,$,{})}}export{ht as default,dt as metadata};
