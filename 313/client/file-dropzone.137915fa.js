import{S as e,i as t,s,a as l,c as n,b as a,d as r,e as i,f as o,g as c,n as f,J as u,L as h,j as p,r as d,h as g,l as m,v as $,k as v,m as w,t as y,p as b,q as x,P as k,Q as C,R as E,G as j,x as L,y as T,M as B,N as I,W,o as A,a7 as D,a8 as V,O as z,T as M,U as N,Y as P,V as F,H as U,I as q,K as G,$ as H,X as J,u as K,w as O}from"./client.3e13663a.js";import{c as Q}from"./classes.2453fa25.js";import{F as R}from"./file-tile.9eb8125a.js";import{r as S}from"./button.993aa0fa.js";function X(e){let t,s,u;return{c(){t=l("svg"),s=l("path"),this.h()},l(e){t=n(e,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var l=a(t);s=n(l,"path",{d:!0}),a(s).forEach(r),l.forEach(r),this.h()},h(){i(s,"d","M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"),i(t,"xmlns","http://www.w3.org/2000/svg"),i(t,"width","24"),i(t,"height","24"),i(t,"viewBox","0 0 24 24"),i(t,"fill","none"),i(t,"stroke","currentColor"),i(t,"stroke-width","2"),i(t,"stroke-linecap","round"),i(t,"stroke-linejoin","round"),i(t,"class",u=Q(e[0]))},m(e,l){o(e,t,l),c(t,s)},p(e,[s]){1&s&&u!==(u=Q(e[0]))&&i(t,"class",u)},i:f,o:f,d(e){e&&r(t)}}}function Y(e,t,s){let{class:l=null}=t;return e.$$set=e=>{"class"in e&&s(0,l=e.class)},[l]}var Z=class extends e{constructor(e){super(),t(this,e,Y,X,s,{class:0})}};function _(e){let t,s,u,h;return{c(){t=l("svg"),s=l("line"),u=l("line"),this.h()},l(e){t=n(e,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var l=a(t);s=n(l,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),a(s).forEach(r),u=n(l,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),a(u).forEach(r),l.forEach(r),this.h()},h(){i(s,"x1","12"),i(s,"y1","5"),i(s,"x2","12"),i(s,"y2","19"),i(u,"x1","5"),i(u,"y1","12"),i(u,"x2","19"),i(u,"y2","12"),i(t,"xmlns","http://www.w3.org/2000/svg"),i(t,"width","24"),i(t,"height","24"),i(t,"viewBox","0 0 24 24"),i(t,"fill","none"),i(t,"stroke","currentColor"),i(t,"stroke-width","2"),i(t,"stroke-linecap","round"),i(t,"stroke-linejoin","round"),i(t,"class",h=Q(e[0]))},m(e,l){o(e,t,l),c(t,s),c(t,u)},p(e,[s]){1&s&&h!==(h=Q(e[0]))&&i(t,"class",h)},i:f,o:f,d(e){e&&r(t)}}}function ee(e,t,s){let{class:l=null}=t;return e.$$set=e=>{"class"in e&&s(0,l=e.class)},[l]}var te=class extends e{constructor(e){super(),t(this,e,ee,_,s,{class:0})}};function se(e,t){if(null==e)return!0;return e.split(",").map((e=>e.trim().toLowerCase())).some((e=>function(e,t){if(e.startsWith("."))return t.name.toLowerCase().endsWith(e);return function(e,t){if("*"===e||"*/*"===e)return!0;const s=e.split("*");if(1===s.length)return e===t;if(2!==s.length)return!1;return t.startsWith(s[0])&&t.endsWith(s[1])}(e.toLowerCase(),(t.type||"").toLowerCase())}(e,t)))}function le(e,t,s){const l=e.slice();return l[25]=t[s],l}const ne=e=>({}),ae=e=>({}),re=e=>({wrongType:128&e,dragActive:64&e}),ie=e=>({wrongType:e[7],dragActive:e[6]});function oe(e){let t;return{c(){t=K("drag & drop here or click to upload files")},l(e){t=O(e,"drag & drop here or click to upload files")},m(e,s){o(e,t,s)},d(e){e&&r(t)}}}function ce(e){let t;return{c(){t=K("release to upload")},l(e){t=O(e,"release to upload")},m(e,s){o(e,t,s)},d(e){e&&r(t)}}}function fe(e){let t;return{c(){t=K("incorrect file type")},l(e){t=O(e,"incorrect file type")},m(e,s){o(e,t,s)},d(e){e&&r(t)}}}function ue(e){let t;return{c(){t=K("file upload unavailable")},l(e){t=O(e,"file upload unavailable")},m(e,s){o(e,t,s)},d(e){e&&r(t)}}}function he(e){let t;const s=e[18]["more-icon"],l=h(s,e,e[17],ae),n=l||function(e){let t,s;return t=new te({props:{class:"plus"}}),{c(){p(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,l){w(t,e,l),s=!0},p:f,i(e){s||(y(t.$$.fragment,e),s=!0)},o(e){b(t.$$.fragment,e),s=!1},d(e){x(t,e)}}}();return{c(){n&&n.c()},l(e){n&&n.l(e)},m(e,s){n&&n.m(e,s),t=!0},p(e,n){l&&l.p&&(!t||131072&n)&&k(l,s,e,e[17],t?E(s,e[17],n,ne):C(e[17]),ae)},i(e){t||(y(n,e),t=!0)},o(e){b(n,e),t=!1},d(e){n&&n.d(e)}}}function pe(e,t){let s,l,n,a;var i=t[2];function c(e){return{props:{file:e[25]}}}return i&&(l=new i(c(t)),l.$on("delete",t[13])),{key:e,first:null,c(){s=j(),l&&p(l.$$.fragment),n=j(),this.h()},l(e){s=j(),l&&m(l.$$.fragment,e),n=j(),this.h()},h(){this.first=s},m(e,t){o(e,s,t),l&&w(l,e,t),o(e,n,t),a=!0},p(e,s){t=e;const a={};if(1&s&&(a.file=t[25]),i!==(i=t[2])){if(l){L();const e=l;b(e.$$.fragment,1,0,(()=>{x(e,1)})),T()}i?(l=new i(c(t)),l.$on("delete",t[13]),p(l.$$.fragment),y(l.$$.fragment,1),w(l,n.parentNode,n)):l=null}else i&&l.$set(a)},i(e){a||(l&&y(l.$$.fragment,e),a=!0)},o(e){l&&b(l.$$.fragment,e),a=!1},d(e){e&&r(s),e&&r(n),l&&x(l,e)}}}function de(e){let t,s,l,n,f,j,U,q,G,J,K,O,R,X=[],Y=new Map,_=[{type:"file"},{multiple:!0},{accept:e[3]},{disabled:l=e[4]||e[0].length>=e[5]},e[15]],ee={};for(let e=0;e<_.length;e+=1)ee=u(ee,_[e]);const te=e[18]["empty-layer"],se=h(te,e,e[17],ie),ne=se||function(e){let t,s,l,n;function c(e,t){return e[4]?ue:e[7]?fe:e[6]?ce:oe}t=new Z({props:{class:"icon"}});let f=c(e),u=f(e);return{c(){p(t.$$.fragment),s=d(),l=g("div"),u.c(),this.h()},l(e){m(t.$$.fragment,e),s=$(e),l=v(e,"DIV",{class:!0});var n=a(l);u.l(n),n.forEach(r),this.h()},h(){i(l,"class","title svelte-1pbt5fi")},m(e,a){w(t,e,a),o(e,s,a),o(e,l,a),u.m(l,null),n=!0},p(e,t){f!==(f=c(e))&&(u.d(1),u=f(e),u&&(u.c(),u.m(l,null)))},i(e){n||(y(t.$$.fragment,e),n=!0)},o(e){b(t.$$.fragment,e),n=!1},d(e){x(t,e),e&&r(s),e&&r(l),u.d()}}}(e);let ae=e[0].length<e[5]&&he(e),de=e[0];const ge=e=>e[25];for(let t=0;t<de.length;t+=1){let s=le(e,de,t),l=ge(s);Y.set(l,X[t]=pe(l,s))}return{c(){t=g("label"),s=g("input"),n=d(),f=g("div"),ne&&ne.c(),j=d(),U=g("div"),ae&&ae.c(),G=d();for(let e=0;e<X.length;e+=1)X[e].c();this.h()},l(e){t=v(e,"LABEL",{class:!0});var l=a(t);s=v(l,"INPUT",{type:!0,accept:!0}),n=$(l),f=v(l,"DIV",{class:!0});var i=a(f);ne&&ne.l(i),i.forEach(r),j=$(l),U=v(l,"DIV",{class:!0});var o=a(U);ae&&ae.l(o),o.forEach(r),G=$(l);for(let e=0;e<X.length;e+=1)X[e].l(l);l.forEach(r),this.h()},h(){B(s,ee),I(s,"svelte-1pbt5fi",!0),i(f,"class","empty-layer svelte-1pbt5fi"),i(U,"class","dropzone-layer svelte-1pbt5fi"),I(U,"accepting",e[6]),i(t,"class",J=W(Q("file-dropzone",e[1]))+" svelte-1pbt5fi"),I(t,"has-content",e[0]&&0!==e[0].length),I(t,"wrong-type",e[7]),I(t,"disabled",e[4]||e[0].length>=e[5])},m(l,a){o(l,t,a),c(t,s),s.autofocus&&s.focus(),e[19](s),c(t,n),c(t,f),ne&&ne.m(f,null),e[20](f),c(t,j),c(t,U),ae&&ae.m(U,null),e[21](U),c(t,G);for(let e=0;e<X.length;e+=1)X[e].m(t,null);K=!0,O||(R=[A(s,"change",e[12]),A(U,"dragover",D(V(e[11]))),A(U,"dragenter",e[22]),A(U,"dragleave",e[23]),A(U,"drop",D(V(e[12]))),z(q=S.call(null,U,{disabled:e[4]||e[0].length>=e[5]})),A(t,"click",e[14])],O=!0)},p(e,[n]){B(s,ee=M(_,[{type:"file"},{multiple:!0},(!K||8&n)&&{accept:e[3]},(!K||49&n&&l!==(l=e[4]||e[0].length>=e[5]))&&{disabled:l},32768&n&&e[15]])),I(s,"svelte-1pbt5fi",!0),se?se.p&&(!K||131264&n)&&k(se,te,e,e[17],K?E(te,e[17],n,re):C(e[17]),ie):ne&&ne.p&&(!K||208&n)&&ne.p(e,K?n:-1),e[0].length<e[5]?ae?(ae.p(e,n),33&n&&y(ae,1)):(ae=he(e),ae.c(),y(ae,1),ae.m(U,null)):ae&&(L(),b(ae,1,1,(()=>{ae=null})),T()),q&&N(q.update)&&49&n&&q.update.call(null,{disabled:e[4]||e[0].length>=e[5]}),64&n&&I(U,"accepting",e[6]),8197&n&&(de=e[0],L(),X=P(X,n,ge,1,e,de,Y,t,H,pe,null,le),T()),(!K||2&n&&J!==(J=W(Q("file-dropzone",e[1]))+" svelte-1pbt5fi"))&&i(t,"class",J),3&n&&I(t,"has-content",e[0]&&0!==e[0].length),130&n&&I(t,"wrong-type",e[7]),51&n&&I(t,"disabled",e[4]||e[0].length>=e[5])},i(e){if(!K){y(ne,e),y(ae);for(let e=0;e<de.length;e+=1)y(X[e]);K=!0}},o(e){b(ne,e),b(ae);for(let e=0;e<X.length;e+=1)b(X[e]);K=!1},d(s){s&&r(t),e[19](null),ne&&ne.d(s),e[20](null),ae&&ae.d(),e[21](null);for(let e=0;e<X.length;e+=1)X[e].d();O=!1,F(R)}}}function ge(e,t,s){const l=["class","files","fileComponent","accept","beforeChange","disabled","max"];let n,a,r,i=U(t,l),{$$slots:o={},$$scope:c}=t,{class:f=null}=t,{files:h=[]}=t,{fileComponent:p=R}=t,{accept:d=null}=t,{beforeChange:g=null}=t,{disabled:m=!1}=t,{max:$=1/0}=t,v=!1,w=!1;const y=q();return e.$$set=e=>{t=u(u({},t),G(e)),s(15,i=U(t,l)),"class"in e&&s(1,f=e.class),"files"in e&&s(0,h=e.files),"fileComponent"in e&&s(2,p=e.fileComponent),"accept"in e&&s(3,d=e.accept),"beforeChange"in e&&s(16,g=e.beforeChange),"disabled"in e&&s(4,m=e.disabled),"max"in e&&s(5,$=e.max),"$$scope"in e&&s(17,c=e.$$scope)},[h,f,p,d,m,$,v,w,n,a,r,function(e){s(7,w=[...e.dataTransfer.items].some((e=>!se(d,e))))},async function(e){const t=Array.from((e.dataTransfer||e.target).files);await Promise.all(t.map((async e=>{try{"function"==typeof g&&await g(e)}catch(e){return}se(d,e)&&h.length<$&&h.push(e)}))),s(0,h),setTimeout((()=>s(7,w=!1)),1e3),y("change",{files:h,nativeEvent:e}),s(10,r.value="",r),s(6,v=!1)},function({detail:e}){s(0,h=h.filter((t=>t!==e))),y("change",{files:h})},function(e){e.target!=n&&e.target!=a&&e.target!=r&&e.preventDefault()},i,g,c,o,function(e){J[e?"unshift":"push"]((()=>{r=e,s(10,r)}))},function(e){J[e?"unshift":"push"]((()=>{n=e,s(8,n)}))},function(e){J[e?"unshift":"push"]((()=>{a=e,s(9,a)}))},()=>s(6,v=!0),()=>{s(6,v=!1),s(7,w=!1)}]}var me=class extends e{constructor(e){super(),t(this,e,ge,de,s,{class:1,files:0,fileComponent:2,accept:3,beforeChange:16,disabled:4,max:5})}};export{me as F};
