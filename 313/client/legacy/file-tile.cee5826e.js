import{_ as t,a as n,b as e,c as r,i as o,s as a,d as i,S as c,e as s,f,g as u,h as l,j as h,k as v,l as p,n as m,o as d,z as $,y,p as g,q as x,B as w,A as k,r as R,t as E,m as B,E as z,v as j,w as V,x as b,N as D}from"./client.a1471ac7.js";import{B as I}from"./button.6b3464d1.js";import{f as C}from"./format-file-size.0c5da3e0.js";function O(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,a=n(t);if(r){var i=n(this).constructor;o=Reflect.construct(a,arguments,i)}else o=a.apply(this,arguments);return e(this,o)}}function P(t){var n,e,r,o,a;return{c:function(){n=s("svg"),e=s("polyline"),r=s("path"),o=s("line"),a=s("line"),this.h()},l:function(t){n=f(t,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0});var i=u(n);e=f(i,"polyline",{points:!0}),u(e).forEach(l),r=f(i,"path",{d:!0}),u(r).forEach(l),o=f(i,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),u(o).forEach(l),a=f(i,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),u(a).forEach(l),i.forEach(l),this.h()},h:function(){h(e,"points","3 6 5 6 21 6"),h(r,"d","M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"),h(o,"x1","10"),h(o,"y1","11"),h(o,"x2","10"),h(o,"y2","17"),h(a,"x1","14"),h(a,"y1","11"),h(a,"x2","14"),h(a,"y2","17"),h(n,"xmlns","http://www.w3.org/2000/svg"),h(n,"width","24"),h(n,"height","24"),h(n,"viewBox","0 0 24 24"),h(n,"fill","none"),h(n,"stroke","currentColor"),h(n,"stroke-width","2"),h(n,"stroke-linecap","round"),h(n,"stroke-linejoin","round")},m:function(t,i){v(t,n,i),p(n,e),p(n,r),p(n,o),p(n,a)},p:m,i:m,o:m,d:function(t){t&&l(n)}}}var q=function(n){t(s,c);var e=O(s);function s(t){var n;return r(this,s),n=e.call(this),o(i(n),t,null,P,a,{}),n}return s}();function A(t){var n=t.split(".");return n[n.length-1].toUpperCase()}function F(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,a=n(t);if(r){var i=n(this).constructor;o=Reflect.construct(a,arguments,i)}else o=a.apply(this,arguments);return e(this,o)}}function H(t){var n,e;return n=new q({}),{c:function(){g(n.$$.fragment)},l:function(t){R(n.$$.fragment,t)},m:function(t,r){E(n,t,r),e=!0},i:function(t){e||(j(n.$$.fragment,t),e=!0)},o:function(t){V(n.$$.fragment,t),e=!1},d:function(t){b(n,t)}}}function M(t){var n,e,r,o,a,i,c,s,f,m,D,O,P=t[0].name+"",q=C(t[0].size)+"",F=A(t[0].name)+"";return(D=new I({props:{danger:!0,round:!0,$$slots:{default:[H]},$$scope:{ctx:t}}})).$on("click",t[2]),{c:function(){n=d("div"),e=d("div"),r=$(P),a=y(),i=d("div"),c=$(q),s=$("\n    •\n    "),f=$(F),m=y(),g(D.$$.fragment),this.h()},l:function(t){n=x(t,"DIV",{class:!0});var o=u(n);e=x(o,"DIV",{class:!0,title:!0});var h=u(e);r=w(h,P),h.forEach(l),a=k(o),i=x(o,"DIV",{class:!0});var v=u(i);c=w(v,q),s=w(v,"\n    •\n    "),f=w(v,F),v.forEach(l),m=k(o),R(D.$$.fragment,o),o.forEach(l),this.h()},h:function(){h(e,"class","filename svelte-1mngzcd"),h(e,"title",o=t[0].name),h(i,"class","properties svelte-1mngzcd"),h(n,"class","file-tile svelte-1mngzcd")},m:function(t,o){v(t,n,o),p(n,e),p(e,r),p(n,a),p(n,i),p(i,c),p(i,s),p(i,f),p(n,m),E(D,n,null),O=!0},p:function(t,n){var a=B(n,1)[0];(!O||1&a)&&P!==(P=t[0].name+"")&&z(r,P),(!O||1&a&&o!==(o=t[0].name))&&h(e,"title",o),(!O||1&a)&&q!==(q=C(t[0].size)+"")&&z(c,q),(!O||1&a)&&F!==(F=A(t[0].name)+"")&&z(f,F);var i={};8&a&&(i.$$scope={dirty:a,ctx:t}),D.$set(i)},i:function(t){O||(j(D.$$.fragment,t),O=!0)},o:function(t){V(D.$$.fragment,t),O=!1},d:function(t){t&&l(n),b(D)}}}function N(t,n,e){var r=n.file,o=D();return t.$$set=function(t){"file"in t&&e(0,r=t.file)},[r,o,function(){return o("delete",r)}]}var S=function(n){t(s,c);var e=F(s);function s(t){var n;return r(this,s),n=e.call(this),o(i(n),t,N,M,a,{file:0}),n}return s}();export{S as F,A as f};
