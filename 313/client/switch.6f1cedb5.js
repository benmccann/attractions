import{S as s,i as a,s as l,P as t,Q as e,R as c,t as n,p as u,J as i,h as o,r as p,k as r,b as d,v as h,d as m,M as f,N as v,e as b,W as C,f as k,g as $,o as L,x as g,y as x,T as E,V as y,H as I,I as V,K as j,L as w}from"./client.883191b1.js";import{c as D}from"./classes.2453fa25.js";function N(s){let a;const l=s[10].default,i=w(l,s,s[9],null);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,l){i&&i.m(s,l),a=!0},p(s,n){i&&i.p&&(!a||512&n)&&t(i,l,s,s[9],a?c(l,s[9],n,null):e(s[9]),null)},i(s){a||(n(i,s),a=!0)},o(s){u(i,s),a=!1},d(s){i&&i.d(s)}}}function P(s){let a;const l=s[10].default,i=w(l,s,s[9],null);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,l){i&&i.m(s,l),a=!0},p(s,n){i&&i.p&&(!a||512&n)&&t(i,l,s,s[9],a?c(l,s[9],n,null):e(s[9]),null)},i(s){a||(n(i,s),a=!0)},o(s){u(i,s),a=!1},d(s){i&&i.d(s)}}}function S(s){let a,l,t,e,c,I,V,j,w,S,T,A,B,H,J=s[6]&&N(s),K=[{type:"checkbox"},{class:e=D(s[2])},{disabled:s[5]},s[8]],M={};for(let s=0;s<K.length;s+=1)M=i(M,K[s]);let Q=!s[6]&&P(s);return{c(){a=o("label"),J&&J.c(),l=p(),t=o("input"),c=p(),I=o("div"),V=o("div"),S=p(),Q&&Q.c(),this.h()},l(s){a=r(s,"LABEL",{class:!0});var e=d(a);J&&J.l(e),l=h(e),t=r(e,"INPUT",{type:!0,class:!0}),c=h(e),I=r(e,"DIV",{class:!0});var n=d(I);V=r(n,"DIV",{class:!0}),d(V).forEach(m),n.forEach(m),S=h(e),Q&&Q.l(e),e.forEach(m),this.h()},h(){f(t,M),v(t,"svelte-aapm94",!0),b(V,"class",j=C(D("thumb",s[4]))+" svelte-aapm94"),b(I,"class",w=C(D("track",s[3]))+" svelte-aapm94"),b(a,"class",T=C(D("switch",s[1]))+" svelte-aapm94")},m(e,n){k(e,a,n),J&&J.m(a,null),$(a,l),$(a,t),t.autofocus&&t.focus(),t.checked=s[0],$(a,c),$(a,I),$(I,V),$(a,S),Q&&Q.m(a,null),A=!0,B||(H=[L(t,"change",s[11]),L(t,"change",s[12])],B=!0)},p(s,[c]){s[6]?J?(J.p(s,c),64&c&&n(J,1)):(J=N(s),J.c(),n(J,1),J.m(a,l)):J&&(g(),u(J,1,1,(()=>{J=null})),x()),f(t,M=E(K,[{type:"checkbox"},(!A||4&c&&e!==(e=D(s[2])))&&{class:e},(!A||32&c)&&{disabled:s[5]},256&c&&s[8]])),1&c&&(t.checked=s[0]),v(t,"svelte-aapm94",!0),(!A||16&c&&j!==(j=C(D("thumb",s[4]))+" svelte-aapm94"))&&b(V,"class",j),(!A||8&c&&w!==(w=C(D("track",s[3]))+" svelte-aapm94"))&&b(I,"class",w),s[6]?Q&&(g(),u(Q,1,1,(()=>{Q=null})),x()):Q?(Q.p(s,c),64&c&&n(Q,1)):(Q=P(s),Q.c(),n(Q,1),Q.m(a,null)),(!A||2&c&&T!==(T=C(D("switch",s[1]))+" svelte-aapm94"))&&b(a,"class",T)},i(s){A||(n(J),n(Q),A=!0)},o(s){u(J),u(Q),A=!1},d(s){s&&m(a),J&&J.d(),Q&&Q.d(),B=!1,y(H)}}}function T(s,a,l){const t=["class","inputClass","trackClass","thumbClass","value","disabled","slotLeft"];let e=I(a,t),{$$slots:c={},$$scope:n}=a,{class:u=null}=a,{inputClass:o=null}=a,{trackClass:p=null}=a,{thumbClass:r=null}=a,{value:d=!1}=a,{disabled:h=!1}=a,{slotLeft:m=!1}=a;const f=V();return s.$$set=s=>{a=i(i({},a),j(s)),l(8,e=I(a,t)),"class"in s&&l(1,u=s.class),"inputClass"in s&&l(2,o=s.inputClass),"trackClass"in s&&l(3,p=s.trackClass),"thumbClass"in s&&l(4,r=s.thumbClass),"value"in s&&l(0,d=s.value),"disabled"in s&&l(5,h=s.disabled),"slotLeft"in s&&l(6,m=s.slotLeft),"$$scope"in s&&l(9,n=s.$$scope)},[d,u,o,p,r,h,m,f,e,n,c,function(){d=this.checked,l(0,d)},s=>f("change",{value:s.target.checked,nativeEvent:s})]}var A=class extends s{constructor(s){super(),a(this,s,T,S,l,{class:1,inputClass:2,trackClass:3,thumbClass:4,value:0,disabled:5,slotLeft:6})}};export{A as S};
