import{S as t,i as n,s as e,G as l,f as s,d as c,h as r,k as a,b as o,e as i,a3 as u,r as h,v as f,g as d,o as m,a7 as p,n as g,I as v,u as b,w as k,z as q}from"./client.3e13663a.js";function $(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function y(t,n,e){const l=t.slice();return l[6]=n[e],l}function E(t,n,e){const l=t.slice();return l[6]=n[e],l}function x(t){let n,e=t[6].content+"";return{c(){n=b(e)},l(t){n=k(t,e)},m(t,e){s(t,n,e)},p(t,l){1&l&&e!==(e=t[6].content+"")&&q(n,e)},d(t){t&&c(n)}}}function A(t){let n,e,l=t[6].content+"";return{c(){n=r("mark"),e=b(l),this.h()},l(t){n=a(t,"MARK",{class:!0});var s=o(n);e=k(s,l),s.forEach(c),this.h()},h(){i(n,"class","svelte-sb12q7")},m(t,l){s(t,n,l),d(n,e)},p(t,n){1&n&&l!==(l=t[6].content+"")&&q(e,l)},d(t){t&&c(n)}}}function I(t){let n;function e(t,n){return t[6].marked?A:x}let r=e(t),a=r(t);return{c(){a.c(),n=l()},l(t){a.l(t),n=l()},m(t,e){a.m(t,e),s(t,n,e)},p(t,l){r===(r=e(t))&&a?a.p(t,l):(a.d(1),a=r(t),a&&(a.c(),a.m(n.parentNode,n)))},d(t){a.d(t),t&&c(n)}}}function N(t){let n,e=t[1](t[0].details),l=[];for(let n=0;n<e.length;n+=1)l[n]=K(y(t,e,n));return{c(){n=r("div");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){n=a(t,"DIV",{class:!0});var e=o(n);for(let t=0;t<l.length;t+=1)l[t].l(e);e.forEach(c),this.h()},h(){i(n,"class","subtext svelte-sb12q7")},m(t,e){s(t,n,e);for(let t=0;t<l.length;t+=1)l[t].m(n,null)},p(t,s){if(3&s){let c;for(e=t[1](t[0].details),c=0;c<e.length;c+=1){const r=y(t,e,c);l[c]?l[c].p(r,s):(l[c]=K(r),l[c].c(),l[c].m(n,null))}for(;c<l.length;c+=1)l[c].d(1);l.length=e.length}},d(t){t&&c(n),u(l,t)}}}function R(t){let n,e=t[6].content+"";return{c(){n=b(e)},l(t){n=k(t,e)},m(t,e){s(t,n,e)},p(t,l){1&l&&e!==(e=t[6].content+"")&&q(n,e)},d(t){t&&c(n)}}}function w(t){let n,e,l=t[6].content+"";return{c(){n=r("mark"),e=b(l),this.h()},l(t){n=a(t,"MARK",{class:!0});var s=o(n);e=k(s,l),s.forEach(c),this.h()},h(){i(n,"class","svelte-sb12q7")},m(t,l){s(t,n,l),d(n,e)},p(t,n){1&n&&l!==(l=t[6].content+"")&&q(e,l)},d(t){t&&c(n)}}}function K(t){let n;function e(t,n){return t[6].marked?w:R}let r=e(t),a=r(t);return{c(){a.c(),n=l()},l(t){a.l(t),n=l()},m(t,e){a.m(t,e),s(t,n,e)},p(t,l){r===(r=e(t))&&a?a.p(t,l):(a.d(1),a=r(t),a&&(a.c(),a.m(n.parentNode,n)))},d(t){a.d(t),t&&c(n)}}}function M(t){let n,e,l,v,b,k=t[1](t[0].name),q=[];for(let n=0;n<k.length;n+=1)q[n]=I(E(t,k,n));let $=t[0].details&&N(t);return{c(){n=r("li"),e=r("button");for(let t=0;t<q.length;t+=1)q[t].c();l=h(),$&&$.c(),this.h()},l(t){n=a(t,"LI",{class:!0});var s=o(n);e=a(s,"BUTTON",{type:!0,class:!0});var r=o(e);for(let t=0;t<q.length;t+=1)q[t].l(r);l=f(r),$&&$.l(r),r.forEach(c),s.forEach(c),this.h()},h(){i(e,"type","button"),i(e,"class","svelte-sb12q7"),i(n,"class","svelte-sb12q7")},m(c,r){s(c,n,r),d(n,e);for(let t=0;t<q.length;t+=1)q[t].m(e,null);d(e,l),$&&$.m(e,null),v||(b=m(n,"click",p(t[4])),v=!0)},p(t,[n]){if(3&n){let s;for(k=t[1](t[0].name),s=0;s<k.length;s+=1){const c=E(t,k,s);q[s]?q[s].p(c,n):(q[s]=I(c),q[s].c(),q[s].m(e,l))}for(;s<q.length;s+=1)q[s].d(1);q.length=k.length}t[0].details?$?$.p(t,n):($=N(t),$.c(),$.m(e,null)):$&&($.d(1),$=null)},i:g,o:g,d(t){t&&c(n),u(q,t),$&&$.d(),v=!1,b()}}}function T(t,n,e){let l,{option:s}=n,{query:c=null}=n;const r=v();return t.$$set=t=>{"option"in t&&e(0,s=t.option),"query"in t&&e(3,c=t.query)},t.$$.update=()=>{8&t.$$.dirty&&(l=c?new RegExp(`(${$(c)})`,"ig"):null)},[s,function(t){return null==l?[{content:t,marked:!1}]:t.split(l).map(((t,n)=>({content:t,marked:n%2!=0})))},r,c,t=>r("click",{nativeEvent:t})]}var j=class extends t{constructor(t){super(),n(this,t,T,M,e,{option:0,query:3})}};export{j as A,$ as e};
