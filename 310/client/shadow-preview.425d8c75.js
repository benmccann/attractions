import{S as s,i as e,s as t,j as a,l as o,m as n,t as r,p as l,q as c,D as i,h as p,u,k as f,b as h,w as v,d as $,e as m,f as d,g,n as b,z as x,X as w}from"./client.d76316e1.js";import{P as y,a as j}from"./popover.4f7e5bf3.js";function D(s){let e,t;return{c(){e=p("div"),t=u("hover me"),this.h()},l(s){e=f(s,"DIV",{class:!0});var a=h(e);t=v(a,"hover me"),a.forEach($),this.h()},h(){m(e,"class","preview svelte-1y2m3b2")},m(a,o){d(a,e,o),g(e,t),s[2](e)},p:b,d(t){t&&$(e),s[2](null)}}}function E(s){let e,t,a=s[0].replace(/\), /g,"),\n")+"";return{c(){e=p("div"),t=u(a),this.h()},l(s){e=f(s,"DIV",{slot:!0,class:!0});var o=h(e);t=v(o,a),o.forEach($),this.h()},h(){m(e,"slot","popover-content"),m(e,"class","value-popover svelte-1y2m3b2")},m(s,a){d(s,e,a),g(e,t)},p(s,e){1&e&&a!==(a=s[0].replace(/\), /g,"),\n")+"")&&x(t,a)},d(s){s&&$(e)}}}function S(s){let e,t;return e=new y({props:{position:j.LEFT,$$slots:{"popover-content":[E],default:[D]},$$scope:{ctx:s}}}),{c(){a(e.$$.fragment)},l(s){o(e.$$.fragment,s)},m(s,a){n(e,s,a),t=!0},p(s,[t]){const a={};11&t&&(a.$$scope={dirty:t,ctx:s}),e.$set(a)},i(s){t||(r(e.$$.fragment,s),t=!0)},o(s){l(e.$$.fragment,s),t=!1},d(s){c(e,s)}}}function I(s,e,t){let a,{value:o}=e;return i((function(){t(1,a.style.boxShadow=o.slice(0,-1),a)})),s.$$set=s=>{"value"in s&&t(0,o=s.value)},[o,a,function(s){w[s?"unshift":"push"]((()=>{a=s,t(1,a)}))}]}class V extends s{constructor(s){super(),e(this,s,I,S,t,{value:0})}}export{V as S};
