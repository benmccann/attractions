import{ah as e}from"./client.30f94cac.js";var r=e.mark(a);function a(a,n){var t,s,c=arguments;return e.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=c.length>2&&void 0!==c[2]?c[2]:1,null==n&&(n=a,a=0),0!==t){e.next=4;break}throw new Error("Range must have a non-zero step.");case 4:if(!(a>=n&&t>0||a<=n&&t<0)){e.next=6;break}return e.abrupt("return");case 6:s=a;case 7:if(!(a<n?s<n:s>n)){e.next=13;break}return e.next=10,s;case 10:s+=t,e.next=7;break;case 13:case"end":return e.stop()}}),r)}export{a as r};
