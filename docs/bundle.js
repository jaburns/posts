!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){this.width=t,this.height=e,this.vals=new Array(t*e)}return t.prototype.write=function(t,e,n){this.vals[t+e*this.width]=n},t.prototype.at=function(t,e){return this.vals[t+e*this.width]},t.prototype.copyFrom=function(t){for(var e=0;e<this.width&&e<t.width;++e)for(var n=0;n<this.height&&n<t.height;++n)this.write(e,n,t.at(e,n))},t}();e.WriteGrid=r,e.safeOutOfBounds=function(t,e){return{width:t.width,height:t.height,at:function(n,r){return n<0||r<0||n>=t.width||r>=t.width?e:t.at(n,r)}}},e.GridTool={find:function(t,e){for(var n=0;n<t.width;++n)for(var r=0;r<t.height;++r)if(e(n,r,t.at(n,r)))return{x:n,y:r};return null},forEach:function(t,e){for(var n=0;n<t.width;++n)for(var r=0;r<t.height;++r)e(n,r,t.at(n,r))},map:function(t,e){for(var n=new r(t.width,t.height),a=0;a<t.width;++a)for(var o=0;o<t.height;++o)n.write(a,o,e(a,o,t.at(a,o)));return n}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={"vector-caves":n(2).initPost};window.initPost=function(t){return r[t]()}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),a=n(3),o=n(5),i=n(7),l=function(t,e,n,r,a,o){if(e<0||n<0)return o;if(e>=t.width||n>=t.height)return o;var i=t.at(e,n);return i===a?o:i!==r?o:(t.write(e,n,a),o=l(t,e-1,n,r,a,++o),o=l(t,e+1,n,r,a,o),o=l(t,e,n-1,r,a,o),o=l(t,e,n+1,r,a,o))};e.initPost=function(){var t,e,n=document.getElementById("first-canvas").getContext("2d"),u=document.getElementById("seed-slider"),d=document.getElementById("pop-slider"),f=document.getElementById("gen-slider"),c=document.getElementById("second-canvas").getContext("2d"),h=document.getElementById("third-canvas").getContext("2d"),s=document.getElementById("fourth-canvas").getContext("2d"),v=document.getElementById("fifth-canvas").getContext("2d"),p=document.getElementById("sixth-canvas").getContext("2d"),y=document.getElementById("seventh-canvas").getContext("2d"),g=function(){var t=a.runCellularAutomaton(75,75,parseInt(u.value),parseFloat(d.value),5,4,parseInt(f.value));r.GridTool.forEach(t,function(t,e,r){n.fillStyle=r?"#000":"#FFF",n.fillRect(4*t,4*e,4,4)});var e=r.GridTool.map(t,function(t,e,n){return n?-1:0}),g=function(t){for(var e=1,n=-1,a=0;;){var o=r.GridTool.find(t,function(t,e,n){return 0===n});if(null===o)return n;var i=l(t,o.x,o.y,0,e,0);i>a&&(a=i,n=e),e++}}(e);r.GridTool.forEach(e,function(t,e,n){c.fillStyle=function(t){if(t<0)return"#000";switch(t%6){case 0:return"#F00";case 1:return"#0F0";case 2:return"#00F";case 3:return"#0FF";case 4:return"#F0F";case 5:return"#FF0"}return""}(n),c.fillRect(4*t,4*e,4,4)});var w=r.GridTool.map(e,function(t,e,n){return n!==g});r.GridTool.forEach(w,function(t,e,n){h.fillStyle=n?"#000":"#FFF",h.fillRect(4*t,4*e,4,4)});var m=o.markEdges(w);r.GridTool.forEach(m,function(t,e,n){s.fillStyle="edge"===n.kind?function(t){var e=Math.cos(t*Math.PI/180),n=Math.sin(t*Math.PI/180),r=Math.round(15*(.5*e+.5)),a=Math.round(15*(.5*n+.5));return"#"+r.toString(16)+a.toString(16)+"f"}(n.normal):"air"===n.kind?"#655":"#77f",s.fillRect(4*t,4*e,4,4)});var k=o.findContours(m,1);r.GridTool.forEach(k.walkMap,function(t,e,n){v.fillStyle=n===o.WalkedStatus.WalkedImportant?"#fff":n===o.WalkedStatus.Walked?"#333":"#000",v.fillRect(4*t,4*e,4,4),p.fillStyle=n===o.WalkedStatus.WalkedImportant?"#333":"#000",p.fillRect(9*t,9*e,9,9)}),p.strokeStyle="#f00",k.contours.forEach(function(t){for(var e=0;e<t.length;++e){var n=(e+1)%t.length,r={x:9*k.walkMap.width*t[e].x,y:9*k.walkMap.height*t[e].y},a={x:9*k.walkMap.width*t[n].x,y:9*k.walkMap.height*t[n].y};p.beginPath(),p.moveTo(9*k.walkMap.width/2+r.x,9*k.walkMap.height/2+r.y),p.lineTo(9*k.walkMap.width/2+a.x,9*k.walkMap.height/2+a.y),p.stroke()}});var x=k.contours.map(function(t){return i.smoothCurve(t,10,1)});y.strokeStyle="#0f0",y.fillStyle="#000",y.fillRect(0,0,675,675),x.forEach(function(t){for(var e=0;e<t.length;++e){var n=(e+1)%t.length,r={x:9*k.walkMap.width*t[e].x,y:9*k.walkMap.height*t[e].y},a={x:9*k.walkMap.width*t[n].x,y:9*k.walkMap.height*t[n].y};y.beginPath(),y.moveTo(9*k.walkMap.width/2+r.x,9*k.walkMap.height/2+r.y),y.lineTo(9*k.walkMap.width/2+a.x,9*k.walkMap.height/2+a.y),y.stroke()}})};t=["oninput","onchange"],e=g,[d,f,u].forEach(function(n){t.forEach(function(t){n[t]=e})}),g()}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(4),a=n(0),o=function(t,e,n){for(var r=0,a=e-1;a<=e+1;++a)for(var o=n-1;o<=n+1;++o)a==e&&o==n||(a<1||o<1||a>=t.width-1||o>=t.height-1?r++:r+=t.at(a,o)?1:0);return r};e.runCellularAutomaton=function(t,e,n,i,l,u,d){for(var f=new a.WriteGrid(t,e),c=new a.WriteGrid(t,e),h=r.nextRandom01(n/101),s=0;s<t;++s)for(var v=0;v<e;++v){var p=0===s||0===v||s===t-1||v===e-1||h<i;f.write(s,v,p),c.write(s,v,p),h=r.nextRandom01(h)}for(var y=0;y<d;++y){for(s=1;s<t-1;++s)for(v=1;v<e-1;++v){var g=o(f,s,v);c.write(s,v,g>=(f.at(s,v)?u:l))}f.copyFrom(c)}return f}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=4294967296;e.nextRandom01=function(t){return(1664525*Math.floor(t*r)+1013904223)%r/r}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,a=n(0),o=n(6);e.markEdges=function(t){for(var e=a.GridTool.map(t,function(t,e,n){return{kind:n?"dirt":"air",normal:0}}),n=0;n<t.width;n++)for(var r=0;r<t.height;r++)if(t.at(n,r)){var o=n>0&&!t.at(n-1,r),i=n<t.width-2&&!t.at(n+1,r),l=r>0&&!t.at(n,r-1),u=r<t.height-2&&!t.at(n,r+1);if(o||i||l||u){var d=i&&u?45:u&&o?135:o&&l?-135:l&&i?-45:i?0:u?90:o?180:-90;e.write(n,r,{kind:"edge",normal:d})}}return e},function(t){t[t.Unwalked=0]="Unwalked",t[t.Walked=1]="Walked",t[t.WalkedImportant=2]="WalkedImportant"}(r=e.WalkedStatus||(e.WalkedStatus={})),e.findContours=function(t,e){var n=a.GridTool.map(new a.WriteGrid(t.width,t.height),function(t){return r.Unwalked}),o=[],i=0,u=null;do{null!==(u=l(n,t,e))&&u.length>2&&o.push(u)}while(null!=u&&i++<100);return{contours:o,walkMap:n}};var i=function(t,e){for(var n=100,r=0,a=0;a<e.length;++a){var i=e[a],l=Math.abs(o.smallestDifferenceRadians(i.normal*Math.PI/180,t.normal*Math.PI/180));l<n&&(n=l,r=a)}return e[r]},l=function(t,e,n){var o=function(t,e){for(var n=0;n<e.width;n++)for(var a=0;a<e.height;a++)if("edge"===e.at(n,a).kind&&t.at(n,a)===r.Unwalked)return{x:n,y:a};return null}(t,e);if(null===o)return null;e=a.safeOutOfBounds(e,{kind:"dirt",normal:0});var l=[],u=o.x,d=o.y,f=0,c={dx:0,dy:0,normal:0},h=r.Walked,s=[];do{s=[];for(var v=-1;v<=1;v++)for(var p=-1;p<=1;p++)0===v&&0===p||"edge"===e.at(u+v,d+p).kind&&t.at(u+v,d+p)===r.Unwalked&&s.push({dx:v,dy:p,normal:e.at(u+v,d+p).normal});if(s.length>0){var y=i(c,s);u+=y.dx,d+=y.dy;var g=r.Walked;if(y.normal!==c.normal){(0===n||(1===n&&0!=y.dx&&0!=y.dy||h!=r.WalkedImportant))&&(g=r.WalkedImportant)}g===r.WalkedImportant&&l.push({x:(u+.5)/e.width-.5,y:(d+.5)/e.height-.5}),t.write(u,d,g),h=g,c=y}}while(s.length>0&&f++<5e3);return l}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.V2={add:function(t,e){t.x+=e.x,t.y+=e.y},plus:function(t,e){return{x:t.x+e.x,y:t.y+e.y}},minus:function(t,e){return{x:t.x-e.x,y:t.y-e.y}},length:function(t){return Math.sqrt(t.x*t.x+t.y*t.y)},scaled:function(t,e){return{x:e*t.x,y:e*t.y}}},e.smallestDifferenceRadians=function(t,e){return t%=2*Math.PI,e%=2*Math.PI,Math.abs(t-e)>Math.PI&&(t>0?t-=2*Math.PI:t+=2*Math.PI),t-e}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(6);e.smoothCurve=function(t,e,n){var a=[];e<1&&(e=1);for(var o=0;o<t.length;++o){var i=t[0==o?t.length-1:o-1],l=t[o],u=t[(o+1)%t.length],d=r.V2.length(r.V2.minus(i,l)),f=r.V2.length(r.V2.minus(l,u)),c=r.V2.scaled(r.V2.plus(i,l),.5),h=r.V2.scaled(r.V2.plus(l,u),.5),s=r.V2.scaled(r.V2.minus(c,h),n),v=r.V2.scaled(s,d/(d+f)),p=r.V2.scaled(s,-f/(d+f));a.push({pt:l,controlA:r.V2.plus(l,v),controlB:r.V2.plus(l,p)})}var y=1/e,g=[];for(o=0;o<a.length;++o){l=a[o],u=a[(o+1)%a.length];for(var w=0;w<1;w+=y){var m={x:0,y:0};r.V2.add(m,r.V2.scaled(l.pt,(1-w)*(1-w)*(1-w))),r.V2.add(m,r.V2.scaled(l.controlB,3*(1-w)*(1-w)*w)),r.V2.add(m,r.V2.scaled(u.controlA,3*(1-w)*w*w)),r.V2.add(m,r.V2.scaled(u.pt,w*w*w)),g.push(m)}}return g}}]);
//# sourceMappingURL=bundle.js.map