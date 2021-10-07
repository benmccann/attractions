import{_ as e,a as t,b as n,c as l,i as r,s as i,d as o,S as a,L as s,k as u,m as c,C as d,w as f,D as p,v,h,M as m,N as y,O as b,P as g,Q as x,o as R,q as E,g as T,R as L,T as w,u as C,U as $,V as k,W as A,X as z,Y as B,Z as N,$ as S}from"./client.30f94cac.js";import{c as I}from"./classes.7d86155b.js";function P(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={event:t.event||"click",transition:t.transition||150,zIndex:t.zIndex||"100",bg:t.rippleColor||null,disabled:t.disabled||!1},l=function(t){return r(t,e,n)};function r(e,t,n){var l=n.bg,r=n.zIndex,i=n.transition,o=parseInt(getComputedStyle(t).borderWidth.replace("px","")),a=t.getBoundingClientRect(),s=a.left,u=a.top,c=t.offsetWidth,d=t.offsetHeight,f=e.clientX-s,p=e.clientY-u,v=Math.max(f,c-f),h=Math.max(p,d-p),m=window.getComputedStyle(t),y=Math.sqrt(v*v+h*h),b=o>0?o:0,g=document.createElement("div"),x=document.createElement("div");x.className="ripple-container",g.className="ripple",g.style.marginTop="0px",g.style.marginLeft="0px",g.style.width="1px",g.style.height="1px",g.style.transition="all ".concat(i,"ms cubic-bezier(0.4, 0, 0.2, 1)"),g.style.borderRadius="50%",g.style.pointerEvents="none",g.style.position="relative",g.style.zIndex=r,null!==l&&(g.style.backgroundColor=l),x.style.position="absolute",x.style.left=0-b+"px",x.style.top=0-b+"px",x.style.height="0",x.style.width="0",x.style.pointerEvents="none",x.style.overflow="hidden";var R=t.style.position.length>0?t.style.position:getComputedStyle(t).position;"relative"!==R&&"absolute"!==R&&(t.style.position="relative"),x.appendChild(g),t.appendChild(x),g.style.marginLeft=f+"px",g.style.marginTop=p+"px",x.style.width=c+"px",x.style.height=d+"px",x.style.borderTopLeftRadius=m.borderTopLeftRadius,x.style.borderTopRightRadius=m.borderTopRightRadius,x.style.borderBottomLeftRadius=m.borderBottomLeftRadius,x.style.borderBottomRightRadius=m.borderBottomRightRadius,x.style.direction="ltr",setTimeout((function(){g.style.width=2*y+"px",g.style.height=2*y+"px",g.style.marginLeft=f-y+"px",g.style.marginTop=p-y+"px"}),0),setTimeout((function(){g.style.backgroundColor="rgba(0, 0, 0, 0)"}),250),setTimeout((function(){x.parentNode.removeChild(x)}),i+250),setTimeout((function(){for(var e=!0,n=0;n<t.childNodes.length;n++)"ripple-container"===t.childNodes[n].className&&(e=!1);e&&(t.style.position="static"!==R?R:"")}),i+250)}return n.disabled||e.addEventListener(n.event,l),{destroy:function(){e.removeEventListener(n.event,l)},update:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.disabled?e.removeEventListener(n.event,l):e.addEventListener(n.event,l)}}}function j(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return M(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var l=0,r=function(){};return{s:r,n:function(){return l>=e.length?{done:!0}:{done:!1,value:e[l++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){a=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(a)throw i}}}}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function O(e,t){if(null!=t){var n,l=j(t);try{for(l.s();!(n=l.n()).done;){var r=n.value;e.addEventListener(r.name,r.handler)}}catch(e){l.e(e)}finally{l.f()}}return{destroy:function(){if(null!=t){var n,l=j(t);try{for(l.s();!(n=l.n()).done;){var r=n.value;e.removeEventListener(r.name,r.handler)}}catch(e){l.e(e)}finally{l.f()}}}}}function U(e){var l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=t(e);if(l){var o=t(this).constructor;r=Reflect.construct(i,arguments,o)}else r=i.apply(this,arguments);return n(this,r)}}function W(e){for(var t,n,l,r,i,o,a,s=e[17].default,c=x(s,e,e[16],null),d=[{type:"button"},{disabled:e[10]},{class:n=I("btn",e[0])},e[15]],p={},m=0;m<d.length;m+=1)p=b(p,d[m]);return{c:function(){t=R("button"),c&&c.c(),this.h()},l:function(e){t=E(e,"BUTTON",{type:!0,class:!0});var n=T(t);c&&c.l(n),n.forEach(h),this.h()},h:function(){L(t,p),w(t,"filled",e[1]),w(t,"outline",e[2]),w(t,"danger",e[3]),w(t,"round",e[5]),w(t,"neutral",e[4]),w(t,"rectangle",e[6]),w(t,"small",e[7]),w(t,"selected",e[8]),w(t,"svelte-2r4z0x",!0)},m:function(n,s){u(n,t,s),c&&c.m(t,null),t.autofocus&&t.focus(),i=!0,o||(a=[C(t,"click",e[19]),$(l=P.call(null,t,{disabled:e[9]||e[10]})),$(r=O.call(null,t,e[13]))],o=!0)},p:function(e,o){c&&c.p&&(!i||65536&o)&&k(c,s,e,e[16],i?z(s,e[16],o,null):A(e[16]),null),L(t,p=B(d,[{type:"button"},(!i||1024&o)&&{disabled:e[10]},(!i||1&o&&n!==(n=I("btn",e[0])))&&{class:n},32768&o&&e[15]])),l&&N(l.update)&&1536&o&&l.update.call(null,{disabled:e[9]||e[10]}),r&&N(r.update)&&8192&o&&r.update.call(null,e[13]),w(t,"filled",e[1]),w(t,"outline",e[2]),w(t,"danger",e[3]),w(t,"round",e[5]),w(t,"neutral",e[4]),w(t,"rectangle",e[6]),w(t,"small",e[7]),w(t,"selected",e[8]),w(t,"svelte-2r4z0x",!0)},i:function(e){i||(v(c,e),i=!0)},o:function(e){f(c,e),i=!1},d:function(e){e&&h(t),c&&c.d(e),o=!1,S(a)}}}function q(e){for(var t,n,l,r,i,o,a,s,c,d,p,m,y=e[17].default,g=x(y,e,e[16],null),j=[{href:n=e[10]?null:e[11]},{rel:l=e[12]?null:"prefetch"},{"sapper:prefetch":r=!e[12]||null},{"sveltekit:prefetch":i=!e[12]||null},{disabled:o=!!e[10]||null},{class:a=I("btn",e[0])},e[15]],M={},U=0;U<j.length;U+=1)M=b(M,j[U]);return{c:function(){t=R("a"),g&&g.c(),this.h()},l:function(e){t=E(e,"A",{href:!0,rel:!0,"sapper:prefetch":!0,"sveltekit:prefetch":!0,disabled:!0,class:!0});var n=T(t);g&&g.l(n),n.forEach(h),this.h()},h:function(){L(t,M),w(t,"filled",e[1]),w(t,"outline",e[2]),w(t,"danger",e[3]),w(t,"round",e[5]),w(t,"neutral",e[4]),w(t,"rectangle",e[6]),w(t,"small",e[7]),w(t,"selected",e[8]),w(t,"svelte-2r4z0x",!0)},m:function(n,l){u(n,t,l),g&&g.m(t,null),d=!0,p||(m=[C(t,"click",e[18]),$(s=O.call(null,t,e[13])),$(c=P.call(null,t,{disabled:e[9]||e[10]}))],p=!0)},p:function(e,u){g&&g.p&&(!d||65536&u)&&k(g,y,e,e[16],d?z(y,e[16],u,null):A(e[16]),null),L(t,M=B(j,[(!d||3072&u&&n!==(n=e[10]?null:e[11]))&&{href:n},(!d||4096&u&&l!==(l=e[12]?null:"prefetch"))&&{rel:l},(!d||4096&u&&r!==(r=!e[12]||null))&&{"sapper:prefetch":r},(!d||4096&u&&i!==(i=!e[12]||null))&&{"sveltekit:prefetch":i},(!d||1024&u&&o!==(o=!!e[10]||null))&&{disabled:o},(!d||1&u&&a!==(a=I("btn",e[0])))&&{class:a},32768&u&&e[15]])),s&&N(s.update)&&8192&u&&s.update.call(null,e[13]),c&&N(c.update)&&1536&u&&c.update.call(null,{disabled:e[9]||e[10]}),w(t,"filled",e[1]),w(t,"outline",e[2]),w(t,"danger",e[3]),w(t,"round",e[5]),w(t,"neutral",e[4]),w(t,"rectangle",e[6]),w(t,"small",e[7]),w(t,"selected",e[8]),w(t,"svelte-2r4z0x",!0)},i:function(e){d||(v(g,e),d=!0)},o:function(e){f(g,e),d=!1},d:function(e){e&&h(t),g&&g.d(e),p=!1,S(m)}}}function X(e){var t,n,l,r,i=[q,W],o=[];function a(e,t){return e[11]?0:1}return t=a(e),n=o[t]=i[t](e),{c:function(){n.c(),l=s()},l:function(e){n.l(e),l=s()},m:function(e,n){o[t].m(e,n),u(e,l,n),r=!0},p:function(e,r){var s=c(r,1)[0],u=t;(t=a(e))===u?o[t].p(e,s):(d(),f(o[u],1,1,(function(){o[u]=null})),p(),(n=o[t])?n.p(e,s):(n=o[t]=i[t](e)).c(),v(n,1),n.m(l.parentNode,l))},i:function(e){r||(v(n),r=!0)},o:function(e){f(n),r=!1},d:function(e){o[t].d(e),e&&h(l)}}}function Y(e,t,n){var l=["class","filled","outline","danger","neutral","round","rectangle","small","selected","noRipple","disabled","href","noPrefetch","events"],r=m(t,l),i=t,o=i.$$slots,a=void 0===o?{}:o,s=i.$$scope,u=t.class,c=void 0===u?null:u,d=t.filled,f=void 0!==d&&d,p=t.outline,v=void 0!==p&&p,h=t.danger,x=void 0!==h&&h,R=t.neutral,E=void 0!==R&&R,T=t.round,L=void 0!==T&&T,w=t.rectangle,C=void 0!==w&&w,$=t.small,k=void 0!==$&&$,A=t.selected,z=void 0!==A&&A,B=t.noRipple,N=void 0!==B&&B,S=t.disabled,I=void 0!==S&&S,P=t.href,j=void 0===P?null:P,M=t.noPrefetch,O=void 0!==M&&M,U=t.events,W=void 0===U?[]:U;f&&v&&console.error("A button may not be filled and outlined at the same time"),x&&E&&console.error("A button may not be danger and neutral at the same time"),f&&z&&console.error("A button may not be filled and selected at the same time");var q=y();return e.$$set=function(e){t=b(b({},t),g(e)),n(15,r=m(t,l)),"class"in e&&n(0,c=e.class),"filled"in e&&n(1,f=e.filled),"outline"in e&&n(2,v=e.outline),"danger"in e&&n(3,x=e.danger),"neutral"in e&&n(4,E=e.neutral),"round"in e&&n(5,L=e.round),"rectangle"in e&&n(6,C=e.rectangle),"small"in e&&n(7,k=e.small),"selected"in e&&n(8,z=e.selected),"noRipple"in e&&n(9,N=e.noRipple),"disabled"in e&&n(10,I=e.disabled),"href"in e&&n(11,j=e.href),"noPrefetch"in e&&n(12,O=e.noPrefetch),"events"in e&&n(13,W=e.events),"$$scope"in e&&n(16,s=e.$$scope)},[c,f,v,x,E,L,C,k,z,N,I,j,O,W,q,r,s,a,function(e){return q("click",{nativeEvent:e})},function(e){return q("click",{nativeEvent:e})}]}var D=function(t){e(s,a);var n=U(s);function s(e){var t;return l(this,s),t=n.call(this),r(o(t),e,Y,X,i,{class:0,filled:1,outline:2,danger:3,neutral:4,round:5,rectangle:6,small:7,selected:8,noRipple:9,disabled:10,href:11,noPrefetch:12,events:13}),t}return s}();export{D as B,O as e,P as r};
