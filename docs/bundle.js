!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){this.width=t,this.height=e,this.vals=new Array(t*e)}return t.prototype.write=function(t,e,n){this.vals[t+e*this.width]=n},t.prototype.at=function(t,e){return this.vals[t+e*this.width]},t.prototype.copyFrom=function(t){for(var e=0;e<this.width&&e<t.width;++e)for(var n=0;n<this.height&&n<t.height;++n)this.write(e,n,t.at(e,n))},t}();e.WriteGrid=r,e.safeOutOfBounds=function(t,e){return{width:t.width,height:t.height,at:function(n,r){return n<0||r<0||n>=t.width||r>=t.width?e:t.at(n,r)}}},e.GridTool={find:function(t,e){for(var n=0;n<t.width;++n)for(var r=0;r<t.height;++r)if(e(n,r,t.at(n,r)))return{x:n,y:r};return null},forEach:function(t,e){for(var n=0;n<t.width;++n)for(var r=0;r<t.height;++r)e(n,r,t.at(n,r))},map:function(t,e){for(var n=new r(t.width,t.height),a=0;a<t.width;++a)for(var i=0;i<t.height;++i)n.write(a,i,e(a,i,t.at(a,i)));return n}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={"vector-caves":n(2).initPost};window.initPost=function(t){return r[t]()}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),a=n(3),i=n(5),o=n(7),l=n(6),u=function(t,e,n,r,a,i){if(e<0||n<0)return i;if(e>=t.width||n>=t.height)return i;var o=t.at(e,n);return o===a?i:o!==r?i:(t.write(e,n,a),i=u(t,e-1,n,r,a,++i),i=u(t,e+1,n,r,a,i),i=u(t,e,n-1,r,a,i),i=u(t,e,n+1,r,a,i))};e.initPost=function(){var t,e,n=document.getElementById("first-canvas").getContext("2d"),d=document.getElementById("seed-slider"),f=document.getElementById("pop-slider"),h=document.getElementById("gen-slider"),c=document.getElementById("insurance-slider"),s=document.getElementById("curviness-slider"),y=document.getElementById("second-canvas").getContext("2d"),v=document.getElementById("third-canvas").getContext("2d"),p=document.getElementById("fourth-canvas").getContext("2d"),w=document.getElementById("fifth-canvas").getContext("2d"),m=document.getElementById("sixth-canvas").getContext("2d"),g=document.getElementById("seventh-canvas").getContext("2d"),x=document.getElementById("eighth-canvas").getContext("2d"),k=function(){var t=a.runCellularAutomaton(75,75,parseInt(d.value),parseFloat(f.value),5,4,parseInt(h.value));r.GridTool.forEach(t,function(t,e,r){n.fillStyle=r?"#000":"#FFF",n.fillRect(4*t,4*e,4,4)});var e=r.GridTool.map(t,function(t,e,n){return n?-1:0}),k=function(t){for(var e=1,n=-1,a=0;;){var i=r.GridTool.find(t,function(t,e,n){return 0===n});if(null===i)return n;var o=u(t,i.x,i.y,0,e,0);o>a&&(a=o,n=e),e++}}(e);r.GridTool.forEach(e,function(t,e,n){y.fillStyle=function(t){if(t<0)return"#000";switch(t%6){case 0:return"#F00";case 1:return"#0F0";case 2:return"#00F";case 3:return"#0FF";case 4:return"#F0F";case 5:return"#FF0"}return""}(n),y.fillRect(4*t,4*e,4,4)});var M=r.GridTool.map(e,function(t,e,n){return n!==k});r.GridTool.forEach(M,function(t,e,n){v.fillStyle=n?"#000":"#FFF",v.fillRect(4*t,4*e,4,4)});var I=i.markEdges(M);r.GridTool.forEach(I,function(t,e,n){p.fillStyle="edge"===n.kind?function(t){var e=Math.cos(t*Math.PI/180),n=Math.sin(t*Math.PI/180),r=Math.round(15*(.5*e+.5)),a=Math.round(15*(.5*n+.5));return"#"+r.toString(16)+a.toString(16)+"f"}(n.normal):"air"===n.kind?"#655":"#77f",p.fillRect(4*t,4*e,4,4)});var P=i.findContours(I,parseInt(c.value));r.GridTool.forEach(P.walkMap,function(t,e,n){w.fillStyle=n===i.WalkedStatus.WalkedImportant?"#fff":n===i.WalkedStatus.Walked?"#333":"#000",w.fillRect(4*t,4*e,4,4),m.fillStyle=n===i.WalkedStatus.WalkedImportant?"#333":"#000",m.fillRect(9*t,9*e,9,9)});var b=P.contours.map(function(t,e){return{i:e,area:l.RectTool.area(l.findBounds(t))}}).sort(function(t,e){return e.area-t.area})[0].i;P.contours.forEach(function(t,e){m.strokeStyle=e===b?"#f00":"#933";for(var n=0;n<t.length;++n){var r=(n+1)%t.length,a={x:9*P.walkMap.width*t[n].x,y:9*P.walkMap.height*t[n].y},i={x:9*P.walkMap.width*t[r].x,y:9*P.walkMap.height*t[r].y};m.beginPath(),m.moveTo(9*P.walkMap.width/2+a.x,9*P.walkMap.height/2+a.y),m.lineTo(9*P.walkMap.width/2+i.x,9*P.walkMap.height/2+i.y),m.stroke()}});var E=P.contours.map(function(t){return o.smoothCurve(t,20,2*parseFloat(s.value)/100)});g.strokeStyle="#0f0",g.fillStyle="#000",g.fillRect(0,0,675,675),E.forEach(function(t,e){g.strokeStyle=e===b?"#0f0":"#393";for(var n=0;n<t.length;++n){var r=(n+1)%t.length,a={x:9*P.walkMap.width*t[n].x,y:9*P.walkMap.height*t[n].y},i={x:9*P.walkMap.width*t[r].x,y:9*P.walkMap.height*t[r].y};g.beginPath(),g.moveTo(9*P.walkMap.width/2+a.x,9*P.walkMap.height/2+a.y),g.lineTo(9*P.walkMap.width/2+i.x,9*P.walkMap.height/2+i.y),g.stroke()}});var S=E[b].map(function(t,e){return{i:e,len:(t.x+.5)*(t.x+.5)+(t.y+.5)*(t.y+.5)}}).sort(function(t,e){return t.len-e.len})[0].i,T=E[b][S];g.strokeStyle="#0f0",g.beginPath(),g.moveTo(9*P.walkMap.width/2+9*P.walkMap.width*T.x,9*P.walkMap.height/2+9*P.walkMap.height*T.y),g.lineTo(-9*P.walkMap.width/2,-9*P.walkMap.height/2),g.stroke(),g.strokeStyle="#9f9",g.beginPath(),g.arc(9*P.walkMap.width/2+9*P.walkMap.width*T.x,9*P.walkMap.height/2+9*P.walkMap.height*T.y,5,0,2*Math.PI),g.stroke(),E[b].splice(S,0,T,{x:-1.5,y:-1.5},{x:-1.5,y:1.5},{x:1.5,y:1.5},{x:1.5,y:-1.5},{x:-1.5,y:-1.5}),x.fillStyle="#000",x.fillRect(0,0,675,675),E.forEach(function(t,e){x.fillStyle=e===b?"#0f0":"#393",x.beginPath();var n=9*P.walkMap.width*t[e].x,r=9*P.walkMap.height*t[e].y;x.moveTo(9*P.walkMap.width/2+n,9*P.walkMap.height/2+r);for(var a=1;a<t.length;++a){var i={x:9*P.walkMap.width*t[a].x,y:9*P.walkMap.height*t[a].y};x.lineTo(9*P.walkMap.width/2+i.x,9*P.walkMap.height/2+i.y)}x.fill()})};t=["oninput","onchange"],e=k,[f,h,d,c,s].forEach(function(n){t.forEach(function(t){n[t]=e})}),k()}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(4),a=n(0),i=function(t,e,n){for(var r=0,a=e-1;a<=e+1;++a)for(var i=n-1;i<=n+1;++i)a==e&&i==n||(a<1||i<1||a>=t.width-1||i>=t.height-1?r++:r+=t.at(a,i)?1:0);return r};e.runCellularAutomaton=function(t,e,n,o,l,u,d){for(var f=new a.WriteGrid(t,e),h=new a.WriteGrid(t,e),c=r.nextRandom01(n/101),s=0;s<t;++s)for(var y=0;y<e;++y){var v=0===s||0===y||s===t-1||y===e-1||c<o;f.write(s,y,v),h.write(s,y,v),c=r.nextRandom01(c)}for(var p=0;p<d;++p){for(s=1;s<t-1;++s)for(y=1;y<e-1;++y){var w=i(f,s,y);h.write(s,y,w>=(f.at(s,y)?u:l))}f.copyFrom(h)}return f}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=4294967296;e.nextRandom01=function(t){return(1664525*Math.floor(t*r)+1013904223)%r/r}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,a=n(0),i=n(6);e.markEdges=function(t){for(var e=a.GridTool.map(t,function(t,e,n){return{kind:n?"dirt":"air",normal:0}}),n=0;n<t.width;n++)for(var r=0;r<t.height;r++)if(t.at(n,r)){var i=n>0&&!t.at(n-1,r),o=n<t.width-2&&!t.at(n+1,r),l=r>0&&!t.at(n,r-1),u=r<t.height-2&&!t.at(n,r+1);if(i||o||l||u){var d=o&&u?45:u&&i?135:i&&l?-135:l&&o?-45:o?0:u?90:i?180:-90;e.write(n,r,{kind:"edge",normal:d})}}return e},function(t){t[t.Unwalked=0]="Unwalked",t[t.Walked=1]="Walked",t[t.WalkedImportant=2]="WalkedImportant"}(r=e.WalkedStatus||(e.WalkedStatus={})),e.findContours=function(t,e){var n=a.GridTool.map(new a.WriteGrid(t.width,t.height),function(t){return r.Unwalked}),i=[],o=0,u=null;do{null!==(u=l(n,t,e))&&u.length>2&&i.push(u)}while(null!=u&&o++<100);return{contours:i,walkMap:n}};var o=function(t,e){for(var n=100,r=0,a=0;a<e.length;++a){var o=e[a],l=Math.abs(i.smallestDifferenceRadians(o.normal*Math.PI/180,t.normal*Math.PI/180));l<n&&(n=l,r=a)}return e[r]},l=function(t,e,n){var i=function(t,e){for(var n=0;n<e.width;n++)for(var a=0;a<e.height;a++)if("edge"===e.at(n,a).kind&&t.at(n,a)===r.Unwalked)return{x:n,y:a};return null}(t,e);if(null===i)return null;e=a.safeOutOfBounds(e,{kind:"dirt",normal:0});var l=[],u=i.x,d=i.y,f=0,h={dx:0,dy:0,normal:0},c=r.Walked,s=[];do{s=[];for(var y=-1;y<=1;y++)for(var v=-1;v<=1;v++)0===y&&0===v||"edge"===e.at(u+y,d+v).kind&&t.at(u+y,d+v)===r.Unwalked&&s.push({dx:y,dy:v,normal:e.at(u+y,d+v).normal});if(s.length>0){var p=o(h,s);u+=p.dx,d+=p.dy;var w=r.Walked;if(p.normal!==h.normal){(0===n||(1===n&&0!=p.dx&&0!=p.dy||c!=r.WalkedImportant))&&(w=r.WalkedImportant)}w===r.WalkedImportant&&l.push({x:(u+.5)/e.width-.5,y:(d+.5)/e.height-.5}),t.write(u,d,w),c=w,h=p}}while(s.length>0&&f++<5e3);return l}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.V2={add:function(t,e){t.x+=e.x,t.y+=e.y},plus:function(t,e){return{x:t.x+e.x,y:t.y+e.y}},minus:function(t,e){return{x:t.x-e.x,y:t.y-e.y}},length:function(t){return Math.sqrt(t.x*t.x+t.y*t.y)},scaled:function(t,e){return{x:e*t.x,y:e*t.y}}},e.RectTool={area:function(t){return(t.xmax-t.xmin)*(t.ymax-t.ymin)}},e.smallestDifferenceRadians=function(t,e){return t%=2*Math.PI,e%=2*Math.PI,Math.abs(t-e)>Math.PI&&(t>0?t-=2*Math.PI:t+=2*Math.PI),t-e},e.findBounds=function(t){var e={xmin:1/0,ymin:1/0,xmax:-1/0,ymax:-1/0};return t.forEach(function(t){t.x<e.xmin&&(e.xmin=t.x),t.y<e.ymin&&(e.ymin=t.y),t.x>e.xmax&&(e.xmax=t.x),t.y>e.ymax&&(e.ymax=t.y)}),e}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(6);e.smoothCurve=function(t,e,n){var a=[];e<1&&(e=1);for(var i=0;i<t.length;++i){var o=t[0==i?t.length-1:i-1],l=t[i],u=t[(i+1)%t.length],d=r.V2.length(r.V2.minus(o,l)),f=r.V2.length(r.V2.minus(l,u)),h=r.V2.scaled(r.V2.plus(o,l),.5),c=r.V2.scaled(r.V2.plus(l,u),.5),s=r.V2.scaled(r.V2.minus(h,c),n),y=r.V2.scaled(s,d/(d+f)),v=r.V2.scaled(s,-f/(d+f));a.push({pt:l,controlA:r.V2.plus(l,y),controlB:r.V2.plus(l,v)})}var p=1/e,w=[];for(i=0;i<a.length;++i){l=a[i],u=a[(i+1)%a.length];for(var m=0;m<1;m+=p){var g={x:0,y:0};r.V2.add(g,r.V2.scaled(l.pt,(1-m)*(1-m)*(1-m))),r.V2.add(g,r.V2.scaled(l.controlB,3*(1-m)*(1-m)*m)),r.V2.add(g,r.V2.scaled(u.controlA,3*(1-m)*m*m)),r.V2.add(g,r.V2.scaled(u.pt,m*m*m)),w.push(g)}}return w}}]);
//# sourceMappingURL=bundle.js.map