import{ah as e}from"./client.2f37940f.js";var r=e.mark(n);function n(n,t){var a,s,o=arguments;return e.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=o.length>2&&void 0!==o[2]?o[2]:1,null==t&&(t=n,n=0),0!==a){e.next=4;break}throw new Error("Range must have a non-zero step.");case 4:if(!(n>=t&&a>0||n<=t&&a<0)){e.next=6;break}return e.abrupt("return");case 6:s=n;case 7:if(!(n<t?s<t:s>t)){e.next=13;break}return e.next=10,s;case 10:s+=a,e.next=7;break;case 13:case"end":return e.stop()}}),r)}export{n as r};
