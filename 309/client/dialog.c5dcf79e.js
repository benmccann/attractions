import{S as s,i as l,s as a,j as t,l as n,m as e,t as c,p as i,q as o,h as r,r as u,u as d,k as $,b as m,v as p,w as f,d as h,e as g,W as k,f as v,g as C,P as b,Q as x,R as j,z as w,L as W,N as y,x as D,y as E,U as I}from"./client.d83161ea.js";import{B as V}from"./button.0486ad99.js";import{X as q}from"./x.41861f79.js";import{c as z}from"./classes.2453fa25.js";const B=s=>({}),L=s=>({}),N=s=>({}),P=s=>({});function Q(s){let l,a;return l=new V({props:{neutral:!0,round:!0,class:"close",$$slots:{default:[R]},$$scope:{ctx:s}}}),l.$on("click",(function(){I(s[3])&&s[3].apply(this,arguments)})),{c(){t(l.$$.fragment)},l(s){n(l.$$.fragment,s)},m(s,t){e(l,s,t),a=!0},p(a,t){s=a;const n={};128&t&&(n.$$scope={dirty:t,ctx:s}),l.$set(n)},i(s){a||(c(l.$$.fragment,s),a=!0)},o(s){i(l.$$.fragment,s),a=!1},d(s){o(l,s)}}}function R(s){let l;const a=s[6]["close-icon"],r=W(a,s,s[7],P),u=r||function(s){let l,a;return l=new q({}),{c(){t(l.$$.fragment)},l(s){n(l.$$.fragment,s)},m(s,t){e(l,s,t),a=!0},i(s){a||(c(l.$$.fragment,s),a=!0)},o(s){i(l.$$.fragment,s),a=!1},d(s){o(l,s)}}}();return{c(){u&&u.c()},l(s){u&&u.l(s)},m(s,a){u&&u.m(s,a),l=!0},p(s,t){r&&r.p&&(!l||128&t)&&b(r,a,s,s[7],l?j(a,s[7],t,N):x(s[7]),P)},i(s){l||(c(u,s),l=!0)},o(s){i(u,s),l=!1},d(s){u&&u.d(s)}}}function S(s){let l,a,t,n,e;const o=s[6]["title-icon"],y=W(o,s,s[7],L);return{c(){l=r("div"),y&&y.c(),a=u(),t=d(s[4]),this.h()},l(n){l=$(n,"DIV",{class:!0});var e=m(l);y&&y.l(e),a=p(e),t=f(e,s[4]),e.forEach(h),this.h()},h(){g(l,"class",n=k(z("title",null!=s[3]&&"close-padded",s[1]))+" svelte-11akk9u")},m(s,n){v(s,l,n),y&&y.m(l,null),C(l,a),C(l,t),e=!0},p(s,a){y&&y.p&&(!e||128&a)&&b(y,o,s,s[7],e?j(o,s[7],a,B):x(s[7]),L),(!e||16&a)&&w(t,s[4]),(!e||10&a&&n!==(n=k(z("title",null!=s[3]&&"close-padded",s[1]))+" svelte-11akk9u"))&&g(l,"class",n)},i(s){e||(c(y,s),e=!0)},o(s){i(y,s),e=!1},d(s){s&&h(l),y&&y.d(s)}}}function U(s){let l,a,t,n,e,o=null!=s[3]&&Q(s),d=null!=s[4]&&S(s);const f=s[6].default,w=W(f,s,s[7],null);return{c(){l=r("div"),o&&o.c(),a=u(),d&&d.c(),t=u(),w&&w.c(),this.h()},l(s){l=$(s,"DIV",{class:!0});var n=m(l);o&&o.l(n),a=p(n),d&&d.l(n),t=p(n),w&&w.l(n),n.forEach(h),this.h()},h(){g(l,"class",n=k(z("dialog",s[0]))+" svelte-11akk9u"),y(l,"danger",s[2]),y(l,"constrain-width",s[5])},m(s,n){v(s,l,n),o&&o.m(l,null),C(l,a),d&&d.m(l,null),C(l,t),w&&w.m(l,null),e=!0},p(s,[r]){null!=s[3]?o?(o.p(s,r),8&r&&c(o,1)):(o=Q(s),o.c(),c(o,1),o.m(l,a)):o&&(D(),i(o,1,1,(()=>{o=null})),E()),null!=s[4]?d?(d.p(s,r),16&r&&c(d,1)):(d=S(s),d.c(),c(d,1),d.m(l,t)):d&&(D(),i(d,1,1,(()=>{d=null})),E()),w&&w.p&&(!e||128&r)&&b(w,f,s,s[7],e?j(f,s[7],r,null):x(s[7]),null),(!e||1&r&&n!==(n=k(z("dialog",s[0]))+" svelte-11akk9u"))&&g(l,"class",n),5&r&&y(l,"danger",s[2]),33&r&&y(l,"constrain-width",s[5])},i(s){e||(c(o),c(d),c(w,s),e=!0)},o(s){i(o),i(d),i(w,s),e=!1},d(s){s&&h(l),o&&o.d(),d&&d.d(),w&&w.d(s)}}}function A(s,l,a){let{$$slots:t={},$$scope:n}=l,{class:e=null}=l,{titleClass:c=null}=l,{danger:i=!1}=l,{closeCallback:o=null}=l,{title:r=null}=l,{constrainWidth:u=!1}=l;return s.$$set=s=>{"class"in s&&a(0,e=s.class),"titleClass"in s&&a(1,c=s.titleClass),"danger"in s&&a(2,i=s.danger),"closeCallback"in s&&a(3,o=s.closeCallback),"title"in s&&a(4,r=s.title),"constrainWidth"in s&&a(5,u=s.constrainWidth),"$$scope"in s&&a(7,n=s.$$scope)},[e,c,i,o,r,u,t,n]}var F=class extends s{constructor(s){super(),l(this,s,A,U,a,{class:0,titleClass:1,danger:2,closeCallback:3,title:4,constrainWidth:5})}};export{F as D};
