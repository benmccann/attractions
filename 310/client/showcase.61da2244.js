import{S as s,i as t,s as e,L as a,h as $,j as c,r as o,k as n,b as r,l,v as f,d as p,e as m,f as u,m as i,g as d,P as g,Q as h,R as w,t as x,p as S,q as b,u as j,w as y}from"./client.d76316e1.js";import{L as v}from"./label.f2d233a3.js";import{C}from"./copyable-code.9afc53ae.js";const E=s=>({}),L=s=>({}),k=s=>({}),q=s=>({});function I(s){let t;return{c(){t=j("Showcase")},l(s){t=y(s,"Showcase")},m(s,e){u(s,t,e)},d(s){s&&p(t)}}}function N(s){let t;return{c(){t=j("Source")},l(s){t=y(s,"Source")},m(s,e){u(s,t,e)},d(s){s&&p(t)}}}function O(s){let t;const e=s[0].source,$=a(e,s,s[1],L);return{c(){$&&$.c()},l(s){$&&$.l(s)},m(s,e){$&&$.m(s,e),t=!0},p(s,a){$&&$.p&&(!t||2&a)&&g($,e,s,s[1],t?w(e,s[1],a,E):h(s[1]),L)},i(s){t||(x($,s),t=!0)},o(s){S($,s),t=!1},d(s){$&&$.d(s)}}}function P(s){let t,e,j,y,E,L,P,Q;e=new v({props:{$$slots:{default:[I]},$$scope:{ctx:s}}});const R=s[0].showcase,T=a(R,s,s[1],q);return E=new v({props:{class:"code",$$slots:{default:[N]},$$scope:{ctx:s}}}),P=new C({props:{$$slots:{default:[O]},$$scope:{ctx:s}}}),{c(){t=$("section"),c(e.$$.fragment),j=o(),T&&T.c(),y=o(),c(E.$$.fragment),L=o(),c(P.$$.fragment),this.h()},l(s){t=n(s,"SECTION",{class:!0});var a=r(t);l(e.$$.fragment,a),j=f(a),T&&T.l(a),y=f(a),l(E.$$.fragment,a),L=f(a),l(P.$$.fragment,a),a.forEach(p),this.h()},h(){m(t,"class","showcase svelte-10o04be")},m(s,a){u(s,t,a),i(e,t,null),d(t,j),T&&T.m(t,null),d(t,y),i(E,t,null),d(t,L),i(P,t,null),Q=!0},p(s,[t]){const a={};2&t&&(a.$$scope={dirty:t,ctx:s}),e.$set(a),T&&T.p&&(!Q||2&t)&&g(T,R,s,s[1],Q?w(R,s[1],t,k):h(s[1]),q);const $={};2&t&&($.$$scope={dirty:t,ctx:s}),E.$set($);const c={};2&t&&(c.$$scope={dirty:t,ctx:s}),P.$set(c)},i(s){Q||(x(e.$$.fragment,s),x(T,s),x(E.$$.fragment,s),x(P.$$.fragment,s),Q=!0)},o(s){S(e.$$.fragment,s),S(T,s),S(E.$$.fragment,s),S(P.$$.fragment,s),Q=!1},d(s){s&&p(t),b(e),T&&T.d(s),b(E),b(P)}}}function Q(s,t,e){let{$$slots:a={},$$scope:$}=t;return s.$$set=s=>{"$$scope"in s&&e(1,$=s.$$scope)},[a,$]}class R extends s{constructor(s){super(),t(this,s,Q,P,e,{})}}export{R as S};
