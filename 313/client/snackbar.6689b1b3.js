import{S as t,i as s,s as n,j as a,l,m as o,t as i,p as c,q as e,h as r,u,r as p,k as f,b as m,w as x,d as $,v as d,e as b,W as C,f as y,g as k,z as h,x as v,y as g,a5 as O,a6 as w}from"./client.883191b1.js";import{B as j}from"./button.206c6e23.js";import{c as q}from"./index.705badf9.js";import{c as A}from"./classes.2453fa25.js";function S(t,{delay:s=0,duration:n=400,easing:a=q,x:l=0,y:o=0,opacity:i=0}={}){const c=getComputedStyle(t),e=+c.opacity,r="none"===c.transform?"":c.transform,u=e*(1-i);return{delay:s,duration:n,easing:a,css:(t,s)=>`\n\t\t\ttransform: ${r} translate(${(1-t)*l}px, ${(1-t)*o}px);\n\t\t\topacity: ${e-u*s}`}}function E(t,{transition:s=null,options:n=null}){return null===s?{delay:0,duration:0,css:()=>""}:s(t,n)}function z(t){let s,n;return s=new j({props:{class:A(t[2]),$$slots:{default:[B]},$$scope:{ctx:t}}}),s.$on("click",t[9]),{c(){a(s.$$.fragment)},l(t){l(s.$$.fragment,t)},m(t,a){o(s,t,a),n=!0},p(t,n){const a={};4&n&&(a.class=A(t[2])),1040&n&&(a.$$scope={dirty:n,ctx:t}),s.$set(a)},i(t){n||(i(s.$$.fragment,t),n=!0)},o(t){c(s.$$.fragment,t),n=!1},d(t){e(s,t)}}}function B(t){let s,n=t[4].text+"";return{c(){s=u(n)},l(t){s=x(t,n)},m(t,n){y(t,s,n)},p(t,a){16&a&&n!==(n=t[4].text+"")&&h(s,n)},d(t){t&&$(s)}}}function D(t){let s,n,a,l,o,e,j,q,S=null!=t[4]&&z(t);return{c(){s=r("div"),n=r("span"),a=u(t[3]),o=p(),S&&S.c(),this.h()},l(l){s=f(l,"DIV",{class:!0});var i=m(s);n=f(i,"SPAN",{class:!0});var c=m(n);a=x(c,t[3]),c.forEach($),o=d(i),S&&S.l(i),i.forEach($),this.h()},h(){b(n,"class",l=C(A("text",t[1]))+" svelte-1nruwq9"),b(s,"class",e=C(A("snackbar",t[0]))+" svelte-1nruwq9")},m(t,l){y(t,s,l),k(s,n),k(n,a),k(s,o),S&&S.m(s,null),q=!0},p(o,[r]){t=o,(!q||8&r)&&h(a,t[3]),(!q||2&r&&l!==(l=C(A("text",t[1]))+" svelte-1nruwq9"))&&b(n,"class",l),null!=t[4]?S?(S.p(t,r),16&r&&i(S,1)):(S=z(t),S.c(),i(S,1),S.m(s,null)):S&&(v(),c(S,1,1,(()=>{S=null})),g()),(!q||1&r&&e!==(e=C(A("snackbar",t[0]))+" svelte-1nruwq9"))&&b(s,"class",e)},i(n){q||(i(S),O((()=>{j||(j=w(s,E,{transition:t[7],options:t[8]},!0)),j.run(1)})),q=!0)},o(n){c(S),j||(j=w(s,E,{transition:t[7],options:t[8]},!1)),j.run(0),q=!1},d(t){t&&$(s),S&&S.d(),t&&j&&j.end()}}}function I(t,s,n){let{class:a=null}=s,{textClass:l=null}=s,{buttonClass:o=null}=s,{text:i}=s,{action:c=null}=s,{closeOnAction:e=!0}=s,{closeCallback:r}=s,{transition:u=S}=s,{transitionOptions:p={x:-20,duration:150}}=s;return t.$$set=t=>{"class"in t&&n(0,a=t.class),"textClass"in t&&n(1,l=t.textClass),"buttonClass"in t&&n(2,o=t.buttonClass),"text"in t&&n(3,i=t.text),"action"in t&&n(4,c=t.action),"closeOnAction"in t&&n(5,e=t.closeOnAction),"closeCallback"in t&&n(6,r=t.closeCallback),"transition"in t&&n(7,u=t.transition),"transitionOptions"in t&&n(8,p=t.transitionOptions)},[a,l,o,i,c,e,r,u,p,()=>{"function"==typeof c.callback&&c.callback(),e&&r()}]}var N=class extends t{constructor(t){super(),s(this,t,I,D,n,{class:0,textClass:1,buttonClass:2,text:3,action:4,closeOnAction:5,closeCallback:6,transition:7,transitionOptions:8})}};export{N as S,E as d};
