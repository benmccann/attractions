import{S as t,i as e,s as n,J as $,j as s,l as a,m as r,T as o,Z as c,t as f,p as l,q as p,D as m,K as i,r as u,h as d,u as g,v as h,k as x,b as w,w as y,d as k,e as v,f as E,g as D,x as T,y as b,n as O}from"./client.f71d6831.js";import{L as j,H as C,P as F}from"./layout.4540cf4f.js";import{F as S}from"./file-tile.80d61cd1.js";import{S as A}from"./showcase.158b0dfd.js";import{C as N}from"./color-preview.b88a0b16.js";import{S as R}from"./shadow-preview.f0ffd56b.js";import{R as P}from"./related-components.5c9ad033.js";import{H as z}from"./h2.da77d4bd.js";import{H as B}from"./h3.a9a2947c.js";import{T as G,a as H,b as L,c as M}from"./table.e83fde99.js";import"./button.3af0c5da.js";import"./classes.2453fa25.js";import"./format-file-size.22bb7c0a.js";import"./label.1761d553.js";import"./copyable-code.627acdd3.js";import"./popover.5fb7a822.js";import"./card.d10a66de.js";function q(t){let e;return{c(){e=g("FileTile")},l(t){e=y(t,"FileTile")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function I(t){let e;return{c(){e=g("A small tile displaying the name of a file, its size and format in human-readable ways.")},l(t){e=y(t,"A small tile displaying the name of a file, its size and format in human-readable ways.")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function V(t){let e,n;return e=new S({props:{file:t[0]}}),{c(){s(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,$){r(e,t,$),n=!0},p(t,n){const $={};1&n&&($.file=t[0]),e.$set($)},i(t){n||(f(e.$$.fragment,t),n=!0)},o(t){l(e.$$.fragment,t),n=!1},d(t){p(e,t)}}}function Y(t){let e,n,$=null!=t[0]&&V(t);return{c(){e=d("div"),$&&$.c(),this.h()},l(t){e=x(t,"DIV",{slot:!0,class:!0});var n=w(e);$&&$.l(n),n.forEach(k),this.h()},h(){v(e,"slot","showcase"),v(e,"class","padded svelte-1h883k1")},m(t,s){E(t,e,s),$&&$.m(e,null),n=!0},p(t,n){null!=t[0]?$?($.p(t,n),1&n&&f($,1)):($=V(t),$.c(),f($,1),$.m(e,null)):$&&(T(),l($,1,1,(()=>{$=null})),b())},i(t){n||(f($),n=!0)},o(t){l($),n=!1},d(t){t&&k(e),$&&$.d()}}}function K(t){let e,n;return{c(){e=d("div"),n=d("pre"),this.h()},l(t){e=x(t,"DIV",{slot:!0});var $=w(e);n=x($,"PRE",{class:!0}),w(n).forEach(k),$.forEach(k),this.h()},h(){v(n,"class","language-svelte"),v(e,"slot","source")},m(t,$){E(t,e,$),D(e,n),n.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> onMount <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'svelte\'</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">let</span> file <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n  <span class="token function">onMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>\n    file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">""</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">"filename.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">if</span> file <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">&#125;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FileTile</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>file<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>\n<span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">&#125;</span></span></code>'},p:O,d(t){t&&k(e)}}}function J(t){let e;return{c(){e=g("Properties")},l(t){e=y(t,"Properties")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function U(t){let e;return{c(){e=g("Functional Properties")},l(t){e=y(t,"Functional Properties")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function W(t){let e;return{c(){e=g("Name")},l(t){e=y(t,"Name")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function Z(t){let e;return{c(){e=g("Default")},l(t){e=y(t,"Default")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function Q(t){let e;return{c(){e=g("Type")},l(t){e=y(t,"Type")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function X(t){let e;return{c(){e=g("Description")},l(t){e=y(t,"Description")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function _(t){let e,n,$,o,c,m,i,d;return e=new L({props:{$$slots:{default:[W]},$$scope:{ctx:t}}}),$=new L({props:{$$slots:{default:[Z]},$$scope:{ctx:t}}}),c=new L({props:{$$slots:{default:[Q]},$$scope:{ctx:t}}}),i=new L({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=u(),s($.$$.fragment),o=u(),s(c.$$.fragment),m=u(),s(i.$$.fragment)},l(t){a(e.$$.fragment,t),n=h(t),a($.$$.fragment,t),o=h(t),a(c.$$.fragment,t),m=h(t),a(i.$$.fragment,t)},m(t,s){r(e,t,s),E(t,n,s),r($,t,s),E(t,o,s),r(c,t,s),E(t,m,s),r(i,t,s),d=!0},p(t,n){const s={};4&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r);const o={};4&n&&(o.$$scope={dirty:n,ctx:t}),i.$set(o)},i(t){d||(f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),f(i.$$.fragment,t),d=!0)},o(t){l(e.$$.fragment,t),l($.$$.fragment,t),l(c.$$.fragment,t),l(i.$$.fragment,t),d=!1},d(t){p(e,t),t&&k(n),p($,t),t&&k(o),p(c,t),t&&k(m),p(i,t)}}}function tt(t){let e,n,$,s,a,r,o;return{c(){e=d("mark"),n=d("strong"),$=d("code"),s=g("file"),a=g(" "),r=d("span"),o=g("*"),this.h()},l(t){e=x(t,"MARK",{});var c=w(e);n=x(c,"STRONG",{});var f=w(n);$=x(f,"CODE",{});var l=w($);s=y(l,"file"),l.forEach(k),f.forEach(k),c.forEach(k),a=y(t," "),r=x(t,"SPAN",{class:!0});var p=w(r);o=y(p,"*"),p.forEach(k),this.h()},h(){v(r,"class","required")},m(t,c){E(t,e,c),D(e,n),D(n,$),D($,s),E(t,a,c),E(t,r,c),D(r,o)},d(t){t&&k(e),t&&k(a),t&&k(r)}}}function et(t){let e,n,$;return{c(){e=d("a"),n=d("code"),$=g("File"),this.h()},l(t){e=x(t,"A",{href:!0,rel:!0});var s=w(e);n=x(s,"CODE",{});var a=w(n);$=y(a,"File"),a.forEach(k),s.forEach(k),this.h()},h(){v(e,"href","https://developer.mozilla.org/en-US/docs/Web/API/File"),v(e,"rel","nofollow")},m(t,s){E(t,e,s),D(e,n),D(n,$)},d(t){t&&k(e)}}}function nt(t){let e;return{c(){e=g("The File object to display.")},l(t){e=y(t,"The File object to display.")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function $t(t){let e,n,$,o,c,m,i,d;return e=new M({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),$=new M({}),c=new M({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),i=new M({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=u(),s($.$$.fragment),o=u(),s(c.$$.fragment),m=u(),s(i.$$.fragment)},l(t){a(e.$$.fragment,t),n=h(t),a($.$$.fragment,t),o=h(t),a(c.$$.fragment,t),m=h(t),a(i.$$.fragment,t)},m(t,s){r(e,t,s),E(t,n,s),r($,t,s),E(t,o,s),r(c,t,s),E(t,m,s),r(i,t,s),d=!0},p(t,n){const $={};4&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const s={};4&n&&(s.$$scope={dirty:n,ctx:t}),c.$set(s);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),i.$set(a)},i(t){d||(f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),f(i.$$.fragment,t),d=!0)},o(t){l(e.$$.fragment,t),l($.$$.fragment,t),l(c.$$.fragment,t),l(i.$$.fragment,t),d=!1},d(t){p(e,t),t&&k(n),p($,t),t&&k(o),p(c,t),t&&k(m),p(i,t)}}}function st(t){let e,n,$,o,c,m;return n=new H({props:{$$slots:{default:[_]},$$scope:{ctx:t}}}),c=new H({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),{c(){e=d("thead"),s(n.$$.fragment),$=u(),o=d("tbody"),s(c.$$.fragment)},l(t){e=x(t,"THEAD",{});var s=w(e);a(n.$$.fragment,s),s.forEach(k),$=h(t),o=x(t,"TBODY",{});var r=w(o);a(c.$$.fragment,r),r.forEach(k)},m(t,s){E(t,e,s),r(n,e,null),E(t,$,s),E(t,o,s),r(c,o,null),m=!0},p(t,e){const $={};4&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};4&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s)},i(t){m||(f(n.$$.fragment,t),f(c.$$.fragment,t),m=!0)},o(t){l(n.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){t&&k(e),p(n),t&&k($),t&&k(o),p(c)}}}function at(t){let e;return{c(){e=g("Class Properties")},l(t){e=y(t,"Class Properties")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function rt(t){let e,n,$,s,a,r,o;return{c(){e=g("All "),n=d("code"),$=g("<FileTile>"),s=g(" components use the "),a=d("code"),r=g(".file-tile"),o=g(" class.")},l(t){e=y(t,"All "),n=x(t,"CODE",{});var c=w(n);$=y(c,"<FileTile>"),c.forEach(k),s=y(t," components use the "),a=x(t,"CODE",{});var f=w(a);r=y(f,".file-tile"),f.forEach(k),o=y(t," class.")},m(t,c){E(t,e,c),E(t,n,c),D(n,$),E(t,s,c),E(t,a,c),D(a,r),E(t,o,c)},d(t){t&&k(e),t&&k(n),t&&k(s),t&&k(a),t&&k(o)}}}function ot(t){let e;return{c(){e=g("Events")},l(t){e=y(t,"Events")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function ct(t){let e;return{c(){e=g("Name")},l(t){e=y(t,"Name")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function ft(t){let e;return{c(){e=g("Event Detail")},l(t){e=y(t,"Event Detail")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function lt(t){let e;return{c(){e=g("Description")},l(t){e=y(t,"Description")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function pt(t){let e,n,$,o,c,m;return e=new L({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),$=new L({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),c=new L({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=u(),s($.$$.fragment),o=u(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=h(t),a($.$$.fragment,t),o=h(t),a(c.$$.fragment,t)},m(t,s){r(e,t,s),E(t,n,s),r($,t,s),E(t,o,s),r(c,t,s),m=!0},p(t,n){const s={};4&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r)},i(t){m||(f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),m=!0)},o(t){l(e.$$.fragment,t),l($.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){p(e,t),t&&k(n),p($,t),t&&k(o),p(c,t)}}}function mt(t){let e,n,$;return{c(){e=d("strong"),n=d("code"),$=g("delete")},l(t){e=x(t,"STRONG",{});var s=w(e);n=x(s,"CODE",{});var a=w(n);$=y(a,"delete"),a.forEach(k),s.forEach(k)},m(t,s){E(t,e,s),D(e,n),D(n,$)},d(t){t&&k(e)}}}function it(t){let e,n;return{c(){e=d("code"),n=g("file")},l(t){e=x(t,"CODE",{});var $=w(e);n=y($,"file"),$.forEach(k)},m(t,$){E(t,e,$),D(e,n)},d(t){t&&k(e)}}}function ut(t){let e,n,$,s;return{c(){e=g("Fired when the delete button is pressed. The detail is the same "),n=d("code"),$=g("file"),s=g(" object that was passed in the property.")},l(t){e=y(t,"Fired when the delete button is pressed. The detail is the same "),n=x(t,"CODE",{});var a=w(n);$=y(a,"file"),a.forEach(k),s=y(t," object that was passed in the property.")},m(t,a){E(t,e,a),E(t,n,a),D(n,$),E(t,s,a)},d(t){t&&k(e),t&&k(n),t&&k(s)}}}function dt(t){let e,n,$,o,c,m;return e=new M({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),$=new M({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),c=new M({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=u(),s($.$$.fragment),o=u(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=h(t),a($.$$.fragment,t),o=h(t),a(c.$$.fragment,t)},m(t,s){r(e,t,s),E(t,n,s),r($,t,s),E(t,o,s),r(c,t,s),m=!0},p(t,n){const s={};4&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r)},i(t){m||(f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),m=!0)},o(t){l(e.$$.fragment,t),l($.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){p(e,t),t&&k(n),p($,t),t&&k(o),p(c,t)}}}function gt(t){let e,n,$,o,c,m;return n=new H({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),c=new H({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),{c(){e=d("thead"),s(n.$$.fragment),$=u(),o=d("tbody"),s(c.$$.fragment)},l(t){e=x(t,"THEAD",{});var s=w(e);a(n.$$.fragment,s),s.forEach(k),$=h(t),o=x(t,"TBODY",{});var r=w(o);a(c.$$.fragment,r),r.forEach(k)},m(t,s){E(t,e,s),r(n,e,null),E(t,$,s),E(t,o,s),r(c,o,null),m=!0},p(t,e){const $={};4&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};4&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s)},i(t){m||(f(n.$$.fragment,t),f(c.$$.fragment,t),m=!0)},o(t){l(n.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){t&&k(e),p(n),t&&k($),t&&k(o),p(c)}}}function ht(t){let e;return{c(){e=g("SCSS Variables")},l(t){e=y(t,"SCSS Variables")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function xt(t){let e;return{c(){e=g("Name")},l(t){e=y(t,"Name")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function wt(t){let e;return{c(){e=g("Description")},l(t){e=y(t,"Description")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function yt(t){let e;return{c(){e=g("Default")},l(t){e=y(t,"Default")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function kt(t){let e,n,$,o,c,m;return e=new L({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),$=new L({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),c=new L({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=u(),s($.$$.fragment),o=u(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=h(t),a($.$$.fragment,t),o=h(t),a(c.$$.fragment,t)},m(t,s){r(e,t,s),E(t,n,s),r($,t,s),E(t,o,s),r(c,t,s),m=!0},p(t,n){const s={};4&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r)},i(t){m||(f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),m=!0)},o(t){l(e.$$.fragment,t),l($.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){p(e,t),t&&k(n),p($,t),t&&k(o),p(c,t)}}}function vt(t){let e,n,$;return{c(){e=d("strong"),n=d("code"),$=g("$dark")},l(t){e=x(t,"STRONG",{});var s=w(e);n=x(s,"CODE",{});var a=w(n);$=y(a,"$dark"),a.forEach(k),s.forEach(k)},m(t,s){E(t,e,s),D(e,n),D(n,$)},d(t){t&&k(e)}}}function Et(t){let e;return{c(){e=g("The text color of the tile.")},l(t){e=y(t,"The text color of the tile.")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function Dt(t){let e,n;return e=new N({props:{value:"#333333"}}),{c(){s(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,$){r(e,t,$),n=!0},p:O,i(t){n||(f(e.$$.fragment,t),n=!0)},o(t){l(e.$$.fragment,t),n=!1},d(t){p(e,t)}}}function Tt(t){let e,n,$,o,c,m;return e=new M({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}}),$=new M({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),c=new M({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=u(),s($.$$.fragment),o=u(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=h(t),a($.$$.fragment,t),o=h(t),a(c.$$.fragment,t)},m(t,s){r(e,t,s),E(t,n,s),r($,t,s),E(t,o,s),r(c,t,s),m=!0},p(t,n){const s={};4&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r)},i(t){m||(f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),m=!0)},o(t){l(e.$$.fragment,t),l($.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){p(e,t),t&&k(n),p($,t),t&&k(o),p(c,t)}}}function bt(t){let e,n,$;return{c(){e=d("strong"),n=d("code"),$=g("$file-tile-radius")},l(t){e=x(t,"STRONG",{});var s=w(e);n=x(s,"CODE",{});var a=w(n);$=y(a,"$file-tile-radius"),a.forEach(k),s.forEach(k)},m(t,s){E(t,e,s),D(e,n),D(n,$)},d(t){t&&k(e)}}}function Ot(t){let e;return{c(){e=g("The curvature radius of the tile.")},l(t){e=y(t,"The curvature radius of the tile.")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function jt(t){let e,n;return{c(){e=d("code"),n=g(".625em")},l(t){e=x(t,"CODE",{});var $=w(e);n=y($,".625em"),$.forEach(k)},m(t,$){E(t,e,$),D(e,n)},d(t){t&&k(e)}}}function Ct(t){let e,n,$,o,c,m;return e=new M({props:{$$slots:{default:[bt]},$$scope:{ctx:t}}}),$=new M({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}}),c=new M({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=u(),s($.$$.fragment),o=u(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=h(t),a($.$$.fragment,t),o=h(t),a(c.$$.fragment,t)},m(t,s){r(e,t,s),E(t,n,s),r($,t,s),E(t,o,s),r(c,t,s),m=!0},p(t,n){const s={};4&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r)},i(t){m||(f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),m=!0)},o(t){l(e.$$.fragment,t),l($.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){p(e,t),t&&k(n),p($,t),t&&k(o),p(c,t)}}}function Ft(t){let e,n,$;return{c(){e=d("strong"),n=d("code"),$=g("$shadow-1")},l(t){e=x(t,"STRONG",{});var s=w(e);n=x(s,"CODE",{});var a=w(n);$=y(a,"$shadow-1"),a.forEach(k),s.forEach(k)},m(t,s){E(t,e,s),D(e,n),D(n,$)},d(t){t&&k(e)}}}function St(t){let e;return{c(){e=g("The shadow of the tile.")},l(t){e=y(t,"The shadow of the tile.")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function At(t){let e,n;return e=new R({props:{value:Xt}}),{c(){s(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,$){r(e,t,$),n=!0},p:O,i(t){n||(f(e.$$.fragment,t),n=!0)},o(t){l(e.$$.fragment,t),n=!1},d(t){p(e,t)}}}function Nt(t){let e,n,$,o,c,m;return e=new M({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),$=new M({props:{$$slots:{default:[St]},$$scope:{ctx:t}}}),c=new M({props:{$$slots:{default:[At]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=u(),s($.$$.fragment),o=u(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=h(t),a($.$$.fragment,t),o=h(t),a(c.$$.fragment,t)},m(t,s){r(e,t,s),E(t,n,s),r($,t,s),E(t,o,s),r(c,t,s),m=!0},p(t,n){const s={};4&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r)},i(t){m||(f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),m=!0)},o(t){l(e.$$.fragment,t),l($.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){p(e,t),t&&k(n),p($,t),t&&k(o),p(c,t)}}}function Rt(t){let e,n,$;return{c(){e=d("strong"),n=d("code"),$=g("$thin-font-weight")},l(t){e=x(t,"STRONG",{});var s=w(e);n=x(s,"CODE",{});var a=w(n);$=y(a,"$thin-font-weight"),a.forEach(k),s.forEach(k)},m(t,s){E(t,e,s),D(e,n),D(n,$)},d(t){t&&k(e)}}}function Pt(t){let e;return{c(){e=g("The thinner font weight for the file details: size and type.")},l(t){e=y(t,"The thinner font weight for the file details: size and type.")},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function zt(t){let e,n;return{c(){e=d("code"),n=g("300")},l(t){e=x(t,"CODE",{});var $=w(e);n=y($,"300"),$.forEach(k)},m(t,$){E(t,e,$),D(e,n)},d(t){t&&k(e)}}}function Bt(t){let e,n,$,o,c,m;return e=new M({props:{$$slots:{default:[Rt]},$$scope:{ctx:t}}}),$=new M({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),c=new M({props:{$$slots:{default:[zt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=u(),s($.$$.fragment),o=u(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=h(t),a($.$$.fragment,t),o=h(t),a(c.$$.fragment,t)},m(t,s){r(e,t,s),E(t,n,s),r($,t,s),E(t,o,s),r(c,t,s),m=!0},p(t,n){const s={};4&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r)},i(t){m||(f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),m=!0)},o(t){l(e.$$.fragment,t),l($.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){p(e,t),t&&k(n),p($,t),t&&k(o),p(c,t)}}}function Gt(t){let e,n,$,s,a,r,o,c,f;return{c(){e=d("strong"),n=d("code"),$=g("$button-radius"),s=u(),a=d("small"),r=g("From "),o=d("a"),c=d("code"),f=g("Button"),this.h()},l(t){e=x(t,"STRONG",{});var l=w(e);n=x(l,"CODE",{});var p=w(n);$=y(p,"$button-radius"),p.forEach(k),l.forEach(k),s=h(t),a=x(t,"SMALL",{});var m=w(a);r=y(m,"From "),o=x(m,"A",{href:!0});var i=w(o);c=x(i,"CODE",{});var u=w(c);f=y(u,"Button"),u.forEach(k),i.forEach(k),m.forEach(k),this.h()},h(){v(o,"href","./docs/components/button")},m(t,l){E(t,e,l),D(e,n),D(n,$),E(t,s,l),E(t,a,l),D(a,r),D(a,o),D(o,c),D(c,f)},d(t){t&&k(e),t&&k(s),t&&k(a)}}}function Ht(t){let e;return{c(){e=g('The curvature radius of the "delete" button.')},l(t){e=y(t,'The curvature radius of the "delete" button.')},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function Lt(t){let e,n;return{c(){e=d("code"),n=g("1.5625em")},l(t){e=x(t,"CODE",{});var $=w(e);n=y($,"1.5625em"),$.forEach(k)},m(t,$){E(t,e,$),D(e,n)},d(t){t&&k(e)}}}function Mt(t){let e,n,$,o,c,m;return e=new M({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}}),$=new M({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}}),c=new M({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=u(),s($.$$.fragment),o=u(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=h(t),a($.$$.fragment,t),o=h(t),a(c.$$.fragment,t)},m(t,s){r(e,t,s),E(t,n,s),r($,t,s),E(t,o,s),r(c,t,s),m=!0},p(t,n){const s={};4&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r)},i(t){m||(f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),m=!0)},o(t){l(e.$$.fragment,t),l($.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){p(e,t),t&&k(n),p($,t),t&&k(o),p(c,t)}}}function qt(t){let e,n,$,s,a,r,o,c,f;return{c(){e=d("strong"),n=d("code"),$=g("$danger"),s=u(),a=d("small"),r=g("From "),o=d("a"),c=d("code"),f=g("Button"),this.h()},l(t){e=x(t,"STRONG",{});var l=w(e);n=x(l,"CODE",{});var p=w(n);$=y(p,"$danger"),p.forEach(k),l.forEach(k),s=h(t),a=x(t,"SMALL",{});var m=w(a);r=y(m,"From "),o=x(m,"A",{href:!0});var i=w(o);c=x(i,"CODE",{});var u=w(c);f=y(u,"Button"),u.forEach(k),i.forEach(k),m.forEach(k),this.h()},h(){v(o,"href","./docs/components/button")},m(t,l){E(t,e,l),D(e,n),D(n,$),E(t,s,l),E(t,a,l),D(a,r),D(a,o),D(o,c),D(c,f)},d(t){t&&k(e),t&&k(s),t&&k(a)}}}function It(t){let e;return{c(){e=g('The color of the "delete" button.')},l(t){e=y(t,'The color of the "delete" button.')},m(t,n){E(t,e,n)},d(t){t&&k(e)}}}function Vt(t){let e,n;return e=new N({props:{value:"#B80000"}}),{c(){s(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,$){r(e,t,$),n=!0},p:O,i(t){n||(f(e.$$.fragment,t),n=!0)},o(t){l(e.$$.fragment,t),n=!1},d(t){p(e,t)}}}function Yt(t){let e,n,$,o,c,m;return e=new M({props:{$$slots:{default:[qt]},$$scope:{ctx:t}}}),$=new M({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),c=new M({props:{$$slots:{default:[Vt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=u(),s($.$$.fragment),o=u(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=h(t),a($.$$.fragment,t),o=h(t),a(c.$$.fragment,t)},m(t,s){r(e,t,s),E(t,n,s),r($,t,s),E(t,o,s),r(c,t,s),m=!0},p(t,n){const s={};4&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r)},i(t){m||(f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),m=!0)},o(t){l(e.$$.fragment,t),l($.$$.fragment,t),l(c.$$.fragment,t),m=!1},d(t){p(e,t),t&&k(n),p($,t),t&&k(o),p(c,t)}}}function Kt(t){let e,n,$,o,c,m,i,g,y,v,T,b,O,j,C,F;return n=new H({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),c=new H({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),i=new H({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),y=new H({props:{$$slots:{default:[Nt]},$$scope:{ctx:t}}}),T=new H({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),O=new H({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}}),C=new H({props:{$$slots:{default:[Yt]},$$scope:{ctx:t}}}),{c(){e=d("thead"),s(n.$$.fragment),$=u(),o=d("tbody"),s(c.$$.fragment),m=u(),s(i.$$.fragment),g=u(),s(y.$$.fragment),v=u(),s(T.$$.fragment),b=u(),s(O.$$.fragment),j=u(),s(C.$$.fragment)},l(t){e=x(t,"THEAD",{});var s=w(e);a(n.$$.fragment,s),s.forEach(k),$=h(t),o=x(t,"TBODY",{});var r=w(o);a(c.$$.fragment,r),m=h(r),a(i.$$.fragment,r),g=h(r),a(y.$$.fragment,r),v=h(r),a(T.$$.fragment,r),b=h(r),a(O.$$.fragment,r),j=h(r),a(C.$$.fragment,r),r.forEach(k)},m(t,s){E(t,e,s),r(n,e,null),E(t,$,s),E(t,o,s),r(c,o,null),D(o,m),r(i,o,null),D(o,g),r(y,o,null),D(o,v),r(T,o,null),D(o,b),r(O,o,null),D(o,j),r(C,o,null),F=!0},p(t,e){const $={};4&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};4&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s);const a={};4&e&&(a.$$scope={dirty:e,ctx:t}),i.$set(a);const r={};4&e&&(r.$$scope={dirty:e,ctx:t}),y.$set(r);const o={};4&e&&(o.$$scope={dirty:e,ctx:t}),T.$set(o);const f={};4&e&&(f.$$scope={dirty:e,ctx:t}),O.$set(f);const l={};4&e&&(l.$$scope={dirty:e,ctx:t}),C.$set(l)},i(t){F||(f(n.$$.fragment,t),f(c.$$.fragment,t),f(i.$$.fragment,t),f(y.$$.fragment,t),f(T.$$.fragment,t),f(O.$$.fragment,t),f(C.$$.fragment,t),F=!0)},o(t){l(n.$$.fragment,t),l(c.$$.fragment,t),l(i.$$.fragment,t),l(y.$$.fragment,t),l(T.$$.fragment,t),l(O.$$.fragment,t),l(C.$$.fragment,t),F=!1},d(t){t&&k(e),p(n),t&&k($),t&&k(o),p(c),p(i),p(y),p(T),p(O),p(C)}}}function Jt(t){let e,n,$,o,c,m,i,T,b,O,j,S,N,R,H,L,M,V,W,Z,Q,X,_,tt,et,nt,$t,ct,ft;return e=new C({props:{$$slots:{default:[q]},$$scope:{ctx:t}}}),$=new F({props:{$$slots:{default:[I]},$$scope:{ctx:t}}}),c=new P({props:{components:Qt}}),i=new A({props:{$$slots:{source:[K],showcase:[Y]},$$scope:{ctx:t}}}),b=new z({props:{id:"properties",$$slots:{default:[J]},$$scope:{ctx:t}}}),j=new B({props:{$$slots:{default:[U]},$$scope:{ctx:t}}}),N=new G({props:{$$slots:{default:[st]},$$scope:{ctx:t}}}),V=new B({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),Z=new F({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),X=new z({props:{id:"events",$$slots:{default:[ot]},$$scope:{ctx:t}}}),tt=new G({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),nt=new z({props:{id:"scss-variables",$$slots:{default:[ht]},$$scope:{ctx:t}}}),ct=new G({props:{$$slots:{default:[Kt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=u(),s($.$$.fragment),o=u(),s(c.$$.fragment),m=u(),s(i.$$.fragment),T=u(),s(b.$$.fragment),O=u(),s(j.$$.fragment),S=u(),s(N.$$.fragment),R=u(),H=d("div"),L=g("* Required"),M=u(),s(V.$$.fragment),W=u(),s(Z.$$.fragment),Q=u(),s(X.$$.fragment),_=u(),s(tt.$$.fragment),et=u(),s(nt.$$.fragment),$t=u(),s(ct.$$.fragment),this.h()},l(t){a(e.$$.fragment,t),n=h(t),a($.$$.fragment,t),o=h(t),a(c.$$.fragment,t),m=h(t),a(i.$$.fragment,t),T=h(t),a(b.$$.fragment,t),O=h(t),a(j.$$.fragment,t),S=h(t),a(N.$$.fragment,t),R=h(t),H=x(t,"DIV",{class:!0});var s=w(H);L=y(s,"* Required"),s.forEach(k),M=h(t),a(V.$$.fragment,t),W=h(t),a(Z.$$.fragment,t),Q=h(t),a(X.$$.fragment,t),_=h(t),a(tt.$$.fragment,t),et=h(t),a(nt.$$.fragment,t),$t=h(t),a(ct.$$.fragment,t),this.h()},h(){v(H,"class","required")},m(t,s){r(e,t,s),E(t,n,s),r($,t,s),E(t,o,s),r(c,t,s),E(t,m,s),r(i,t,s),E(t,T,s),r(b,t,s),E(t,O,s),r(j,t,s),E(t,S,s),r(N,t,s),E(t,R,s),E(t,H,s),D(H,L),E(t,M,s),r(V,t,s),E(t,W,s),r(Z,t,s),E(t,Q,s),r(X,t,s),E(t,_,s),r(tt,t,s),E(t,et,s),r(nt,t,s),E(t,$t,s),r(ct,t,s),ft=!0},p(t,n){const s={};4&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const r={};5&n&&(r.$$scope={dirty:n,ctx:t}),i.$set(r);const o={};4&n&&(o.$$scope={dirty:n,ctx:t}),b.$set(o);const c={};4&n&&(c.$$scope={dirty:n,ctx:t}),j.$set(c);const f={};4&n&&(f.$$scope={dirty:n,ctx:t}),N.$set(f);const l={};4&n&&(l.$$scope={dirty:n,ctx:t}),V.$set(l);const p={};4&n&&(p.$$scope={dirty:n,ctx:t}),Z.$set(p);const m={};4&n&&(m.$$scope={dirty:n,ctx:t}),X.$set(m);const u={};4&n&&(u.$$scope={dirty:n,ctx:t}),tt.$set(u);const d={};4&n&&(d.$$scope={dirty:n,ctx:t}),nt.$set(d);const g={};4&n&&(g.$$scope={dirty:n,ctx:t}),ct.$set(g)},i(t){ft||(f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),f(i.$$.fragment,t),f(b.$$.fragment,t),f(j.$$.fragment,t),f(N.$$.fragment,t),f(V.$$.fragment,t),f(Z.$$.fragment,t),f(X.$$.fragment,t),f(tt.$$.fragment,t),f(nt.$$.fragment,t),f(ct.$$.fragment,t),ft=!0)},o(t){l(e.$$.fragment,t),l($.$$.fragment,t),l(c.$$.fragment,t),l(i.$$.fragment,t),l(b.$$.fragment,t),l(j.$$.fragment,t),l(N.$$.fragment,t),l(V.$$.fragment,t),l(Z.$$.fragment,t),l(X.$$.fragment,t),l(tt.$$.fragment,t),l(nt.$$.fragment,t),l(ct.$$.fragment,t),ft=!1},d(t){p(e,t),t&&k(n),p($,t),t&&k(o),p(c,t),t&&k(m),p(i,t),t&&k(T),p(b,t),t&&k(O),p(j,t),t&&k(S),p(N,t),t&&k(R),t&&k(H),t&&k(M),p(V,t),t&&k(W),p(Z,t),t&&k(Q),p(X,t),t&&k(_),p(tt,t),t&&k(et),p(nt,t),t&&k($t),p(ct,t)}}}function Ut(t){let e,n;const m=[t[1],Wt];let i={$$slots:{default:[Jt]},$$scope:{ctx:t}};for(let t=0;t<m.length;t+=1)i=$(i,m[t]);return e=new j({props:i}),{c(){s(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,$){r(e,t,$),n=!0},p(t,[n]){const $=2&n?o(m,[2&n&&c(t[1]),0&n&&c(Wt)]):{};5&n&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){n||(f(e.$$.fragment,t),n=!0)},o(t){l(e.$$.fragment,t),n=!1},d(t){p(e,t)}}}const Wt={name:"FileTile",relatedComponents:[{name:"FileInput",link:"./docs/components/file-input"},{name:"FileDropzone",link:"./docs/components/file-dropzone"}],shadow1:"0 2px 5px rgba(0, 0, 0, .14), 0 1px 5px rgba(0, 0, 0, .12);"},{name:Zt,relatedComponents:Qt,shadow1:Xt}=Wt;function _t(t,e,n){let s=null;return m((()=>{n(0,s=new File([""],"filename.txt"))})),t.$$set=t=>{n(1,e=$($({},e),i(t)))},e=i(e),[s,e]}class te extends t{constructor(t){super(),e(this,t,_t,Ut,n,{})}}export{te as default,Wt as metadata};
