import{S as s,i as t,s as e,L as n,h as o,k as l,b as a,d as c,e as r,W as i,N as u,f as p,o as d,P as h,Q as $,R as f,t as g,p as v,I as m,X as w}from"./client.3e13663a.js";import{c as q}from"./classes.2453fa25.js";const y=s=>({}),k=s=>({toggle:s[2]});function E(s){let t,e,m,w,E;const j=s[6].default,x=n(j,s,s[5],k);return{c(){t=o("div"),x&&x.c(),this.h()},l(s){t=l(s,"DIV",{class:!0});var e=a(t);x&&x.l(e),e.forEach(c),this.h()},h(){r(t,"class",e=i(q("dropdown-shell",s[1]))+" svelte-1j957tq"),u(t,"open",s[0])},m(e,n){p(e,t,n),x&&x.m(t,null),s[7](t),m=!0,w||(E=d(window,"click",s[4]),w=!0)},p(s,[n]){x&&x.p&&(!m||32&n)&&h(x,j,s,s[5],m?f(j,s[5],n,y):$(s[5]),k),(!m||2&n&&e!==(e=i(q("dropdown-shell",s[1]))+" svelte-1j957tq"))&&r(t,"class",e),3&n&&u(t,"open",s[0])},i(s){m||(g(x,s),m=!0)},o(s){v(x,s),m=!1},d(e){e&&c(t),x&&x.d(e),s[7](null),w=!1,E()}}}function j(s,t,e){let{$$slots:n={},$$scope:o}=t,{class:l=null}=t,{open:a=!1}=t;function c(){e(0,a=!a)}let r=null;function i(s){"Escape"===s.key&&a&&(s.preventDefault(),c())}const u=m();return s.$$set=s=>{"class"in s&&e(1,l=s.class),"open"in s&&e(0,a=s.open),"$$scope"in s&&e(5,o=s.$$scope)},s.$$.update=()=>{1&s.$$.dirty&&u("change",{value:a}),1&s.$$.dirty&&"undefined"!=typeof document&&(a?document.addEventListener("keydown",i):document.removeEventListener("keydown",i))},[a,l,c,r,function(s){if(!r)return;!r.contains(s.target)&&a&&c()},o,n,function(s){w[s?"unshift":"push"]((()=>{r=s,e(3,r)}))}]}var x=class extends s{constructor(s){super(),t(this,s,j,E,e,{class:1,open:0,toggle:2})}get toggle(){return this.$$.ctx[2]}};function D(s){let t,e,d;const m=s[4].default,w=n(m,s,s[3],null);return{c(){t=o("div"),w&&w.c(),this.h()},l(s){t=l(s,"DIV",{class:!0});var e=a(t);w&&w.l(e),e.forEach(c),this.h()},h(){r(t,"class",e=i(q("dropdown",s[0]))+" svelte-1fhqrqw"),u(t,"right",s[1]),u(t,"top",s[2])},m(s,e){p(s,t,e),w&&w.m(t,null),d=!0},p(s,[n]){w&&w.p&&(!d||8&n)&&h(w,m,s,s[3],d?f(m,s[3],n,null):$(s[3]),null),(!d||1&n&&e!==(e=i(q("dropdown",s[0]))+" svelte-1fhqrqw"))&&r(t,"class",e),3&n&&u(t,"right",s[1]),5&n&&u(t,"top",s[2])},i(s){d||(g(w,s),d=!0)},o(s){v(w,s),d=!1},d(s){s&&c(t),w&&w.d(s)}}}function I(s,t,e){let{$$slots:n={},$$scope:o}=t,{class:l=null}=t,{right:a=!1}=t,{top:c=!1}=t;return s.$$set=s=>{"class"in s&&e(0,l=s.class),"right"in s&&e(1,a=s.right),"top"in s&&e(2,c=s.top),"$$scope"in s&&e(3,o=s.$$scope)},[l,a,c,o,n]}var L=class extends s{constructor(s){super(),t(this,s,I,D,e,{class:0,right:1,top:2})}};export{x as D,L as a};
