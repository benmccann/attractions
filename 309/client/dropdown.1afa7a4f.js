import{S as s,i as t,s as e,L as n,h as o,k as l,b as a,d as c,e as i,W as r,N as u,f as p,o as d,P as h,Q as $,R as f,t as g,p as v,I as m,X as w}from"./client.d83161ea.js";import{c as x}from"./classes.2453fa25.js";const y=s=>({}),k=s=>({toggle:s[2]});function E(s){let t,e,m,w,E;const q=s[6].default,D=n(q,s,s[5],k);return{c(){t=o("div"),D&&D.c(),this.h()},l(s){t=l(s,"DIV",{class:!0});var e=a(t);D&&D.l(e),e.forEach(c),this.h()},h(){i(t,"class",e=r(x("dropdown-shell",s[1]))+" svelte-18ox5ni"),u(t,"open",s[0])},m(e,n){p(e,t,n),D&&D.m(t,null),s[7](t),m=!0,w||(E=d(window,"click",s[4]),w=!0)},p(s,[n]){D&&D.p&&(!m||32&n)&&h(D,q,s,s[5],m?f(q,s[5],n,y):$(s[5]),k),(!m||2&n&&e!==(e=r(x("dropdown-shell",s[1]))+" svelte-18ox5ni"))&&i(t,"class",e),3&n&&u(t,"open",s[0])},i(s){m||(g(D,s),m=!0)},o(s){v(D,s),m=!1},d(e){e&&c(t),D&&D.d(e),s[7](null),w=!1,E()}}}function q(s,t,e){let{$$slots:n={},$$scope:o}=t,{class:l=null}=t,{open:a=!1}=t;function c(){e(0,a=!a)}let i=null;function r(s){"Escape"===s.key&&a&&(s.preventDefault(),c())}const u=m();return s.$$set=s=>{"class"in s&&e(1,l=s.class),"open"in s&&e(0,a=s.open),"$$scope"in s&&e(5,o=s.$$scope)},s.$$.update=()=>{1&s.$$.dirty&&u("change",{value:a}),1&s.$$.dirty&&"undefined"!=typeof document&&(a?document.addEventListener("keydown",r):document.removeEventListener("keydown",r))},[a,l,c,i,function(s){if(!i)return;!i.contains(s.target)&&a&&c()},o,n,function(s){w[s?"unshift":"push"]((()=>{i=s,e(3,i)}))}]}var D=class extends s{constructor(s){super(),t(this,s,q,E,e,{class:1,open:0,toggle:2})}get toggle(){return this.$$.ctx[2]}};function I(s){let t,e,d;const m=s[4].default,w=n(m,s,s[3],null);return{c(){t=o("div"),w&&w.c(),this.h()},l(s){t=l(s,"DIV",{class:!0});var e=a(t);w&&w.l(e),e.forEach(c),this.h()},h(){i(t,"class",e=r(x("dropdown",s[0]))+" svelte-1fhqrqw"),u(t,"right",s[1]),u(t,"top",s[2])},m(s,e){p(s,t,e),w&&w.m(t,null),d=!0},p(s,[n]){w&&w.p&&(!d||8&n)&&h(w,m,s,s[3],d?f(m,s[3],n,null):$(s[3]),null),(!d||1&n&&e!==(e=r(x("dropdown",s[0]))+" svelte-1fhqrqw"))&&i(t,"class",e),3&n&&u(t,"right",s[1]),5&n&&u(t,"top",s[2])},i(s){d||(g(w,s),d=!0)},o(s){v(w,s),d=!1},d(s){s&&c(t),w&&w.d(s)}}}function L(s,t,e){let{$$slots:n={},$$scope:o}=t,{class:l=null}=t,{right:a=!1}=t,{top:c=!1}=t;return s.$$set=s=>{"class"in s&&e(0,l=s.class),"right"in s&&e(1,a=s.right),"top"in s&&e(2,c=s.top),"$$scope"in s&&e(3,o=s.$$scope)},[l,a,c,o,n]}var j=class extends s{constructor(s){super(),t(this,s,L,I,e,{class:0,right:1,top:2})}};export{D,j as a};
