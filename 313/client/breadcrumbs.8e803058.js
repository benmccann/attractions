import{S as t,i as s,s as e,r as n,v as a,f as r,P as l,Q as o,R as c,t as i,p as f,d as p,h,k as m,b as u,e as $,x as d,y as g,a3 as v,L as x,u as b,w as j,g as k,z as B,n as E,j as N,l as w,m as y,q as A}from"./client.3e13663a.js";import{B as P}from"./button.993aa0fa.js";function S(t,s,e){const n=t.slice();return n[4]=s[e],n[6]=e,n}const V=t=>({item:1&t}),q=t=>({item:t[4]}),z=t=>({}),D=t=>({});function I(t){let s;const e=t[2].separator,n=x(e,t,t[3],D),a=n||function(t){let s,e;return{c(){s=h("div"),e=b(t[1]),this.h()},l(n){s=m(n,"DIV",{class:!0});var a=u(s);e=j(a,t[1]),a.forEach(p),this.h()},h(){$(s,"class","node")},m(t,n){r(t,s,n),k(s,e)},p(t,s){2&s&&B(e,t[1])},d(t){t&&p(s)}}}(t);return{c(){a&&a.c()},l(t){a&&a.l(t)},m(t,e){a&&a.m(t,e),s=!0},p(t,r){n?n.p&&(!s||8&r)&&l(n,e,t,t[3],s?c(e,t[3],r,z):o(t[3]),D):a&&a.p&&(!s||2&r)&&a.p(t,s?r:-1)},i(t){s||(i(a,t),s=!0)},o(t){f(a,t),s=!1},d(t){a&&a.d(t)}}}function L(t){let s,e,n=t[4].text+"";return{c(){s=h("span"),e=b(n),this.h()},l(t){s=m(t,"SPAN",{class:!0});var a=u(s);e=j(a,n),a.forEach(p),this.h()},h(){$(s,"class","node")},m(t,n){r(t,s,n),k(s,e)},p(t,s){1&s&&n!==(n=t[4].text+"")&&B(e,n)},i:E,o:E,d(t){t&&p(s)}}}function Q(t){let s,e;return s=new P({props:{href:t[4].href,class:"node",small:!0,$$slots:{default:[R]},$$scope:{ctx:t}}}),{c(){N(s.$$.fragment)},l(t){w(s.$$.fragment,t)},m(t,n){y(s,t,n),e=!0},p(t,e){const n={};1&e&&(n.href=t[4].href),9&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){e||(i(s.$$.fragment,t),e=!0)},o(t){f(s.$$.fragment,t),e=!1},d(t){A(s,t)}}}function R(t){let s,e=t[4].text+"";return{c(){s=b(e)},l(t){s=j(t,e)},m(t,e){r(t,s,e)},p(t,n){1&n&&e!==(e=t[4].text+"")&&B(s,e)},d(t){t&&p(s)}}}function C(t){let s,e,h=t[6]>0&&I(t);const m=t[2].item,u=x(m,t,t[3],q),$=u||function(t){let s,e,l,o;const c=[Q,L],h=[];function m(t,s){return t[4].href?0:1}return s=m(t),e=h[s]=c[s](t),{c(){e.c(),l=n()},l(t){e.l(t),l=a(t)},m(t,e){h[s].m(t,e),r(t,l,e),o=!0},p(t,n){let a=s;s=m(t),s===a?h[s].p(t,n):(d(),f(h[a],1,1,(()=>{h[a]=null})),g(),e=h[s],e?e.p(t,n):(e=h[s]=c[s](t),e.c()),i(e,1),e.m(l.parentNode,l))},i(t){o||(i(e),o=!0)},o(t){f(e),o=!1},d(t){h[s].d(t),t&&p(l)}}}(t);return{c(){h&&h.c(),s=n(),$&&$.c()},l(t){h&&h.l(t),s=a(t),$&&$.l(t)},m(t,n){h&&h.m(t,n),r(t,s,n),$&&$.m(t,n),e=!0},p(t,s){t[6]>0&&h.p(t,s),u?u.p&&(!e||9&s)&&l(u,m,t,t[3],e?c(m,t[3],s,V):o(t[3]),q):$&&$.p&&(!e||1&s)&&$.p(t,e?s:-1)},i(t){e||(i(h),i($,t),e=!0)},o(t){f(h),f($,t),e=!1},d(t){h&&h.d(t),t&&p(s),$&&$.d(t)}}}function F(t){let s,e,n=t[0],a=[];for(let s=0;s<n.length;s+=1)a[s]=C(S(t,n,s));const l=t=>f(a[t],1,1,(()=>{a[t]=null}));return{c(){s=h("nav");for(let t=0;t<a.length;t+=1)a[t].c();this.h()},l(t){s=m(t,"NAV",{class:!0});var e=u(s);for(let t=0;t<a.length;t+=1)a[t].l(e);e.forEach(p),this.h()},h(){$(s,"class","breadcrumbs svelte-o18kkv")},m(t,n){r(t,s,n);for(let t=0;t<a.length;t+=1)a[t].m(s,null);e=!0},p(t,[e]){if(11&e){let r;for(n=t[0],r=0;r<n.length;r+=1){const l=S(t,n,r);a[r]?(a[r].p(l,e),i(a[r],1)):(a[r]=C(l),a[r].c(),i(a[r],1),a[r].m(s,null))}for(d(),r=n.length;r<a.length;r+=1)l(r);g()}},i(t){if(!e){for(let t=0;t<n.length;t+=1)i(a[t]);e=!0}},o(t){a=a.filter(Boolean);for(let t=0;t<a.length;t+=1)f(a[t]);e=!1},d(t){t&&p(s),v(a,t)}}}function G(t,s,e){let{$$slots:n={},$$scope:a}=s,{items:r=[]}=s,{separator:l="/"}=s;return t.$$set=t=>{"items"in t&&e(0,r=t.items),"separator"in t&&e(1,l=t.separator),"$$scope"in t&&e(3,a=t.$$scope)},[r,l,n,a]}var H=class extends t{constructor(t){super(),s(this,t,G,F,e,{items:0,separator:1})}};export{H as B};
