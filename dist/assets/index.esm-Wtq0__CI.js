import{d as zn,g as qu,a as ju,x as Bu,F as zu,f as xo,p as Gu,u as $u,e as Ku,y as Qu,L as Wu,o as Ot,z as Hu,h as Xu,S as Yu,v as Ju,C as Zu,r as Li,_ as tl}from"./index.esm-BrphpXjq.js";var Fi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kt,Oo;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,m){function p(){}p.prototype=m.prototype,E.F=m.prototype,E.prototype=new p,E.prototype.constructor=E,E.D=function(T,y,A){for(var g=Array(arguments.length-2),Et=2;Et<arguments.length;Et++)g[Et-2]=arguments[Et];return m.prototype[y].apply(T,g)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(n,e),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,m,p){p||(p=0);const T=Array(16);if(typeof m=="string")for(var y=0;y<16;++y)T[y]=m.charCodeAt(p++)|m.charCodeAt(p++)<<8|m.charCodeAt(p++)<<16|m.charCodeAt(p++)<<24;else for(y=0;y<16;++y)T[y]=m[p++]|m[p++]<<8|m[p++]<<16|m[p++]<<24;m=E.g[0],p=E.g[1],y=E.g[2];let A=E.g[3],g;g=m+(A^p&(y^A))+T[0]+3614090360&4294967295,m=p+(g<<7&4294967295|g>>>25),g=A+(y^m&(p^y))+T[1]+3905402710&4294967295,A=m+(g<<12&4294967295|g>>>20),g=y+(p^A&(m^p))+T[2]+606105819&4294967295,y=A+(g<<17&4294967295|g>>>15),g=p+(m^y&(A^m))+T[3]+3250441966&4294967295,p=y+(g<<22&4294967295|g>>>10),g=m+(A^p&(y^A))+T[4]+4118548399&4294967295,m=p+(g<<7&4294967295|g>>>25),g=A+(y^m&(p^y))+T[5]+1200080426&4294967295,A=m+(g<<12&4294967295|g>>>20),g=y+(p^A&(m^p))+T[6]+2821735955&4294967295,y=A+(g<<17&4294967295|g>>>15),g=p+(m^y&(A^m))+T[7]+4249261313&4294967295,p=y+(g<<22&4294967295|g>>>10),g=m+(A^p&(y^A))+T[8]+1770035416&4294967295,m=p+(g<<7&4294967295|g>>>25),g=A+(y^m&(p^y))+T[9]+2336552879&4294967295,A=m+(g<<12&4294967295|g>>>20),g=y+(p^A&(m^p))+T[10]+4294925233&4294967295,y=A+(g<<17&4294967295|g>>>15),g=p+(m^y&(A^m))+T[11]+2304563134&4294967295,p=y+(g<<22&4294967295|g>>>10),g=m+(A^p&(y^A))+T[12]+1804603682&4294967295,m=p+(g<<7&4294967295|g>>>25),g=A+(y^m&(p^y))+T[13]+4254626195&4294967295,A=m+(g<<12&4294967295|g>>>20),g=y+(p^A&(m^p))+T[14]+2792965006&4294967295,y=A+(g<<17&4294967295|g>>>15),g=p+(m^y&(A^m))+T[15]+1236535329&4294967295,p=y+(g<<22&4294967295|g>>>10),g=m+(y^A&(p^y))+T[1]+4129170786&4294967295,m=p+(g<<5&4294967295|g>>>27),g=A+(p^y&(m^p))+T[6]+3225465664&4294967295,A=m+(g<<9&4294967295|g>>>23),g=y+(m^p&(A^m))+T[11]+643717713&4294967295,y=A+(g<<14&4294967295|g>>>18),g=p+(A^m&(y^A))+T[0]+3921069994&4294967295,p=y+(g<<20&4294967295|g>>>12),g=m+(y^A&(p^y))+T[5]+3593408605&4294967295,m=p+(g<<5&4294967295|g>>>27),g=A+(p^y&(m^p))+T[10]+38016083&4294967295,A=m+(g<<9&4294967295|g>>>23),g=y+(m^p&(A^m))+T[15]+3634488961&4294967295,y=A+(g<<14&4294967295|g>>>18),g=p+(A^m&(y^A))+T[4]+3889429448&4294967295,p=y+(g<<20&4294967295|g>>>12),g=m+(y^A&(p^y))+T[9]+568446438&4294967295,m=p+(g<<5&4294967295|g>>>27),g=A+(p^y&(m^p))+T[14]+3275163606&4294967295,A=m+(g<<9&4294967295|g>>>23),g=y+(m^p&(A^m))+T[3]+4107603335&4294967295,y=A+(g<<14&4294967295|g>>>18),g=p+(A^m&(y^A))+T[8]+1163531501&4294967295,p=y+(g<<20&4294967295|g>>>12),g=m+(y^A&(p^y))+T[13]+2850285829&4294967295,m=p+(g<<5&4294967295|g>>>27),g=A+(p^y&(m^p))+T[2]+4243563512&4294967295,A=m+(g<<9&4294967295|g>>>23),g=y+(m^p&(A^m))+T[7]+1735328473&4294967295,y=A+(g<<14&4294967295|g>>>18),g=p+(A^m&(y^A))+T[12]+2368359562&4294967295,p=y+(g<<20&4294967295|g>>>12),g=m+(p^y^A)+T[5]+4294588738&4294967295,m=p+(g<<4&4294967295|g>>>28),g=A+(m^p^y)+T[8]+2272392833&4294967295,A=m+(g<<11&4294967295|g>>>21),g=y+(A^m^p)+T[11]+1839030562&4294967295,y=A+(g<<16&4294967295|g>>>16),g=p+(y^A^m)+T[14]+4259657740&4294967295,p=y+(g<<23&4294967295|g>>>9),g=m+(p^y^A)+T[1]+2763975236&4294967295,m=p+(g<<4&4294967295|g>>>28),g=A+(m^p^y)+T[4]+1272893353&4294967295,A=m+(g<<11&4294967295|g>>>21),g=y+(A^m^p)+T[7]+4139469664&4294967295,y=A+(g<<16&4294967295|g>>>16),g=p+(y^A^m)+T[10]+3200236656&4294967295,p=y+(g<<23&4294967295|g>>>9),g=m+(p^y^A)+T[13]+681279174&4294967295,m=p+(g<<4&4294967295|g>>>28),g=A+(m^p^y)+T[0]+3936430074&4294967295,A=m+(g<<11&4294967295|g>>>21),g=y+(A^m^p)+T[3]+3572445317&4294967295,y=A+(g<<16&4294967295|g>>>16),g=p+(y^A^m)+T[6]+76029189&4294967295,p=y+(g<<23&4294967295|g>>>9),g=m+(p^y^A)+T[9]+3654602809&4294967295,m=p+(g<<4&4294967295|g>>>28),g=A+(m^p^y)+T[12]+3873151461&4294967295,A=m+(g<<11&4294967295|g>>>21),g=y+(A^m^p)+T[15]+530742520&4294967295,y=A+(g<<16&4294967295|g>>>16),g=p+(y^A^m)+T[2]+3299628645&4294967295,p=y+(g<<23&4294967295|g>>>9),g=m+(y^(p|~A))+T[0]+4096336452&4294967295,m=p+(g<<6&4294967295|g>>>26),g=A+(p^(m|~y))+T[7]+1126891415&4294967295,A=m+(g<<10&4294967295|g>>>22),g=y+(m^(A|~p))+T[14]+2878612391&4294967295,y=A+(g<<15&4294967295|g>>>17),g=p+(A^(y|~m))+T[5]+4237533241&4294967295,p=y+(g<<21&4294967295|g>>>11),g=m+(y^(p|~A))+T[12]+1700485571&4294967295,m=p+(g<<6&4294967295|g>>>26),g=A+(p^(m|~y))+T[3]+2399980690&4294967295,A=m+(g<<10&4294967295|g>>>22),g=y+(m^(A|~p))+T[10]+4293915773&4294967295,y=A+(g<<15&4294967295|g>>>17),g=p+(A^(y|~m))+T[1]+2240044497&4294967295,p=y+(g<<21&4294967295|g>>>11),g=m+(y^(p|~A))+T[8]+1873313359&4294967295,m=p+(g<<6&4294967295|g>>>26),g=A+(p^(m|~y))+T[15]+4264355552&4294967295,A=m+(g<<10&4294967295|g>>>22),g=y+(m^(A|~p))+T[6]+2734768916&4294967295,y=A+(g<<15&4294967295|g>>>17),g=p+(A^(y|~m))+T[13]+1309151649&4294967295,p=y+(g<<21&4294967295|g>>>11),g=m+(y^(p|~A))+T[4]+4149444226&4294967295,m=p+(g<<6&4294967295|g>>>26),g=A+(p^(m|~y))+T[11]+3174756917&4294967295,A=m+(g<<10&4294967295|g>>>22),g=y+(m^(A|~p))+T[2]+718787259&4294967295,y=A+(g<<15&4294967295|g>>>17),g=p+(A^(y|~m))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(y+(g<<21&4294967295|g>>>11))&4294967295,E.g[2]=E.g[2]+y&4294967295,E.g[3]=E.g[3]+A&4294967295}n.prototype.v=function(E,m){m===void 0&&(m=E.length);const p=m-this.blockSize,T=this.C;let y=this.h,A=0;for(;A<m;){if(y==0)for(;A<=p;)i(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<m;)if(T[y++]=E.charCodeAt(A++),y==this.blockSize){i(this,T),y=0;break}}else for(;A<m;)if(T[y++]=E[A++],y==this.blockSize){i(this,T),y=0;break}}this.h=y,this.o+=m},n.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;m=this.o*8;for(var p=E.length-8;p<E.length;++p)E[p]=m&255,m/=256;for(this.v(E),E=Array(16),m=0,p=0;p<4;++p)for(let T=0;T<32;T+=8)E[m++]=this.g[p]>>>T&255;return E};function o(E,m){var p=c;return Object.prototype.hasOwnProperty.call(p,E)?p[E]:p[E]=m(E)}function u(E,m){this.h=m;const p=[];let T=!0;for(let y=E.length-1;y>=0;y--){const A=E[y]|0;T&&A==m||(p[y]=A,T=!1)}this.g=p}var c={};function f(E){return-128<=E&&E<128?o(E,function(m){return new u([m|0],m<0?-1:0)}):new u([E|0],E<0?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return I;if(E<0)return D(d(-E));const m=[];let p=1;for(let T=0;E>=p;T++)m[T]=E/p|0,p*=4294967296;return new u(m,0)}function _(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return D(_(E.substring(1),m));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const p=d(Math.pow(m,8));let T=I;for(let A=0;A<E.length;A+=8){var y=Math.min(8,E.length-A);const g=parseInt(E.substring(A,A+y),m);y<8?(y=d(Math.pow(m,y)),T=T.j(y).add(d(g))):(T=T.j(p),T=T.add(d(g)))}return T}var I=f(0),V=f(1),S=f(16777216);r=u.prototype,r.m=function(){if(x(this))return-D(this).m();let E=0,m=1;for(let p=0;p<this.g.length;p++){const T=this.i(p);E+=(T>=0?T:4294967296+T)*m,m*=4294967296}return E},r.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(O(this))return"0";if(x(this))return"-"+D(this).toString(E);const m=d(Math.pow(E,6));var p=this;let T="";for(;;){const y=ft(p,m).g;p=K(p,y.j(m));let A=((p.g.length>0?p.g[0]:p.h)>>>0).toString(E);if(p=y,O(p))return A+T;for(;A.length<6;)A="0"+A;T=A+T}},r.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function O(E){if(E.h!=0)return!1;for(let m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function x(E){return E.h==-1}r.l=function(E){return E=K(this,E),x(E)?-1:O(E)?0:1};function D(E){const m=E.g.length,p=[];for(let T=0;T<m;T++)p[T]=~E.g[T];return new u(p,~E.h).add(V)}r.abs=function(){return x(this)?D(this):this},r.add=function(E){const m=Math.max(this.g.length,E.g.length),p=[];let T=0;for(let y=0;y<=m;y++){let A=T+(this.i(y)&65535)+(E.i(y)&65535),g=(A>>>16)+(this.i(y)>>>16)+(E.i(y)>>>16);T=g>>>16,A&=65535,g&=65535,p[y]=g<<16|A}return new u(p,p[p.length-1]&-2147483648?-1:0)};function K(E,m){return E.add(D(m))}r.j=function(E){if(O(this)||O(E))return I;if(x(this))return x(E)?D(this).j(D(E)):D(D(this).j(E));if(x(E))return D(this.j(D(E)));if(this.l(S)<0&&E.l(S)<0)return d(this.m()*E.m());const m=this.g.length+E.g.length,p=[];for(var T=0;T<2*m;T++)p[T]=0;for(T=0;T<this.g.length;T++)for(let y=0;y<E.g.length;y++){const A=this.i(T)>>>16,g=this.i(T)&65535,Et=E.i(y)>>>16,te=E.i(y)&65535;p[2*T+2*y]+=g*te,G(p,2*T+2*y),p[2*T+2*y+1]+=A*te,G(p,2*T+2*y+1),p[2*T+2*y+1]+=g*Et,G(p,2*T+2*y+1),p[2*T+2*y+2]+=A*Et,G(p,2*T+2*y+2)}for(E=0;E<m;E++)p[E]=p[2*E+1]<<16|p[2*E];for(E=m;E<2*m;E++)p[E]=0;return new u(p,0)};function G(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function Q(E,m){this.g=E,this.h=m}function ft(E,m){if(O(m))throw Error("division by zero");if(O(E))return new Q(I,I);if(x(E))return m=ft(D(E),m),new Q(D(m.g),D(m.h));if(x(m))return m=ft(E,D(m)),new Q(D(m.g),m.h);if(E.g.length>30){if(x(E)||x(m))throw Error("slowDivide_ only works with positive integers.");for(var p=V,T=m;T.l(E)<=0;)p=It(p),T=It(T);var y=nt(p,1),A=nt(T,1);for(T=nt(T,2),p=nt(p,2);!O(T);){var g=A.add(T);g.l(E)<=0&&(y=y.add(p),A=g),T=nt(T,1),p=nt(p,1)}return m=K(E,y.j(m)),new Q(y,m)}for(y=I;E.l(m)>=0;){for(p=Math.max(1,Math.floor(E.m()/m.m())),T=Math.ceil(Math.log(p)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),A=d(p),g=A.j(m);x(g)||g.l(E)>0;)p-=T,A=d(p),g=A.j(m);O(A)&&(A=V),y=y.add(A),E=K(E,g)}return new Q(y,E)}r.B=function(E){return ft(this,E).h},r.and=function(E){const m=Math.max(this.g.length,E.g.length),p=[];for(let T=0;T<m;T++)p[T]=this.i(T)&E.i(T);return new u(p,this.h&E.h)},r.or=function(E){const m=Math.max(this.g.length,E.g.length),p=[];for(let T=0;T<m;T++)p[T]=this.i(T)|E.i(T);return new u(p,this.h|E.h)},r.xor=function(E){const m=Math.max(this.g.length,E.g.length),p=[];for(let T=0;T<m;T++)p[T]=this.i(T)^E.i(T);return new u(p,this.h^E.h)};function It(E){const m=E.g.length+1,p=[];for(let T=0;T<m;T++)p[T]=E.i(T)<<1|E.i(T-1)>>>31;return new u(p,E.h)}function nt(E,m){const p=m>>5;m%=32;const T=E.g.length-p,y=[];for(let A=0;A<T;A++)y[A]=m>0?E.i(A+p)>>>m|E.i(A+p+1)<<32-m:E.i(A+p);return new u(y,E.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,Oo=n,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.B,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=d,u.fromString=_,Kt=u}).apply(typeof Fi<"u"?Fi:typeof self<"u"?self:typeof window<"u"?window:{});var Nn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mo,We,Lo,Ln,zr,Fo,Uo,qo;(function(){var r,t=Object.defineProperty;function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Nn=="object"&&Nn];for(var a=0;a<s.length;++a){var l=s[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var n=e(this);function i(s,a){if(a)t:{var l=n;s=s.split(".");for(var h=0;h<s.length-1;h++){var v=s[h];if(!(v in l))break t;l=l[v]}s=s[s.length-1],h=l[s],a=a(h),a!=h&&a!=null&&t(l,s,{configurable:!0,writable:!0,value:a})}}i("Symbol.dispose",function(s){return s||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(s){return s||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(s){return s||function(a){var l=[],h;for(h in a)Object.prototype.hasOwnProperty.call(a,h)&&l.push([h,a[h]]);return l}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},u=this||self;function c(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function f(s,a,l){return s.call.apply(s.bind,arguments)}function d(s,a,l){return d=f,d.apply(null,arguments)}function _(s,a){var l=Array.prototype.slice.call(arguments,1);return function(){var h=l.slice();return h.push.apply(h,arguments),s.apply(this,h)}}function I(s,a){function l(){}l.prototype=a.prototype,s.Z=a.prototype,s.prototype=new l,s.prototype.constructor=s,s.Ob=function(h,v,w){for(var C=Array(arguments.length-2),U=2;U<arguments.length;U++)C[U-2]=arguments[U];return a.prototype[v].apply(h,C)}}var V=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?s=>s&&AsyncContext.Snapshot.wrap(s):s=>s;function S(s){const a=s.length;if(a>0){const l=Array(a);for(let h=0;h<a;h++)l[h]=s[h];return l}return[]}function O(s,a){for(let h=1;h<arguments.length;h++){const v=arguments[h];var l=typeof v;if(l=l!="object"?l:v?Array.isArray(v)?"array":l:"null",l=="array"||l=="object"&&typeof v.length=="number"){l=s.length||0;const w=v.length||0;s.length=l+w;for(let C=0;C<w;C++)s[l+C]=v[C]}else s.push(v)}}class x{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return this.h>0?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function D(s){u.setTimeout(()=>{throw s},0)}function K(){var s=E;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class G{constructor(){this.h=this.g=null}add(a,l){const h=Q.get();h.set(a,l),this.h?this.h.next=h:this.g=h,this.h=h}}var Q=new x(()=>new ft,s=>s.reset());class ft{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let It,nt=!1,E=new G,m=()=>{const s=Promise.resolve(void 0);It=()=>{s.then(p)}};function p(){for(var s;s=K();){try{s.h.call(s.g)}catch(l){D(l)}var a=Q;a.j(s),a.h<100&&(a.h++,s.next=a.g,a.g=s)}nt=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function y(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}y.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!u.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};u.addEventListener("test",l,a),u.removeEventListener("test",l,a)}catch{}return s})();function g(s){return/^[\s\xa0]*$/.test(s)}function Et(s,a){y.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s&&this.init(s,a)}I(Et,y),Et.prototype.init=function(s,a){const l=this.type=s.type,h=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget,a||(l=="mouseover"?a=s.fromElement:l=="mouseout"&&(a=s.toElement)),this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=s.pointerType,this.state=s.state,this.i=s,s.defaultPrevented&&Et.Z.h.call(this)},Et.prototype.h=function(){Et.Z.h.call(this);const s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var te="closure_listenable_"+(Math.random()*1e6|0),uu=0;function lu(s,a,l,h,v){this.listener=s,this.proxy=null,this.src=a,this.type=l,this.capture=!!h,this.ha=v,this.key=++uu,this.da=this.fa=!1}function _n(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function yn(s,a,l){for(const h in s)a.call(l,s[h],h,s)}function cu(s,a){for(const l in s)a.call(void 0,s[l],l,s)}function Ms(s){const a={};for(const l in s)a[l]=s[l];return a}const Ls="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Fs(s,a){let l,h;for(let v=1;v<arguments.length;v++){h=arguments[v];for(l in h)s[l]=h[l];for(let w=0;w<Ls.length;w++)l=Ls[w],Object.prototype.hasOwnProperty.call(h,l)&&(s[l]=h[l])}}function En(s){this.src=s,this.g={},this.h=0}En.prototype.add=function(s,a,l,h,v){const w=s.toString();s=this.g[w],s||(s=this.g[w]=[],this.h++);const C=gr(s,a,h,v);return C>-1?(a=s[C],l||(a.fa=!1)):(a=new lu(a,this.src,w,!!h,v),a.fa=l,s.push(a)),a};function mr(s,a){const l=a.type;if(l in s.g){var h=s.g[l],v=Array.prototype.indexOf.call(h,a,void 0),w;(w=v>=0)&&Array.prototype.splice.call(h,v,1),w&&(_n(a),s.g[l].length==0&&(delete s.g[l],s.h--))}}function gr(s,a,l,h){for(let v=0;v<s.length;++v){const w=s[v];if(!w.da&&w.listener==a&&w.capture==!!l&&w.ha==h)return v}return-1}var pr="closure_lm_"+(Math.random()*1e6|0),_r={};function Us(s,a,l,h,v){if(Array.isArray(a)){for(let w=0;w<a.length;w++)Us(s,a[w],l,h,v);return null}return l=Bs(l),s&&s[te]?s.J(a,l,c(h)?!!h.capture:!1,v):hu(s,a,l,!1,h,v)}function hu(s,a,l,h,v,w){if(!a)throw Error("Invalid event type");const C=c(v)?!!v.capture:!!v;let U=Er(s);if(U||(s[pr]=U=new En(s)),l=U.add(a,l,h,C,w),l.proxy)return l;if(h=fu(),l.proxy=h,h.src=s,h.listener=l,s.addEventListener)A||(v=C),v===void 0&&(v=!1),s.addEventListener(a.toString(),h,v);else if(s.attachEvent)s.attachEvent(js(a.toString()),h);else if(s.addListener&&s.removeListener)s.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return l}function fu(){function s(l){return a.call(s.src,s.listener,l)}const a=du;return s}function qs(s,a,l,h,v){if(Array.isArray(a))for(var w=0;w<a.length;w++)qs(s,a[w],l,h,v);else h=c(h)?!!h.capture:!!h,l=Bs(l),s&&s[te]?(s=s.i,w=String(a).toString(),w in s.g&&(a=s.g[w],l=gr(a,l,h,v),l>-1&&(_n(a[l]),Array.prototype.splice.call(a,l,1),a.length==0&&(delete s.g[w],s.h--)))):s&&(s=Er(s))&&(a=s.g[a.toString()],s=-1,a&&(s=gr(a,l,h,v)),(l=s>-1?a[s]:null)&&yr(l))}function yr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[te])mr(a.i,s);else{var l=s.type,h=s.proxy;a.removeEventListener?a.removeEventListener(l,h,s.capture):a.detachEvent?a.detachEvent(js(l),h):a.addListener&&a.removeListener&&a.removeListener(h),(l=Er(a))?(mr(l,s),l.h==0&&(l.src=null,a[pr]=null)):_n(s)}}}function js(s){return s in _r?_r[s]:_r[s]="on"+s}function du(s,a){if(s.da)s=!0;else{a=new Et(a,this);const l=s.listener,h=s.ha||s.src;s.fa&&yr(s),s=l.call(h,a)}return s}function Er(s){return s=s[pr],s instanceof En?s:null}var Tr="__closure_events_fn_"+(Math.random()*1e9>>>0);function Bs(s){return typeof s=="function"?s:(s[Tr]||(s[Tr]=function(a){return s.handleEvent(a)}),s[Tr])}function dt(){T.call(this),this.i=new En(this),this.M=this,this.G=null}I(dt,T),dt.prototype[te]=!0,dt.prototype.removeEventListener=function(s,a,l,h){qs(this,s,a,l,h)};function _t(s,a){var l,h=s.G;if(h)for(l=[];h;h=h.G)l.push(h);if(s=s.M,h=a.type||a,typeof a=="string")a=new y(a,s);else if(a instanceof y)a.target=a.target||s;else{var v=a;a=new y(h,s),Fs(a,v)}v=!0;let w,C;if(l)for(C=l.length-1;C>=0;C--)w=a.g=l[C],v=Tn(w,h,!0,a)&&v;if(w=a.g=s,v=Tn(w,h,!0,a)&&v,v=Tn(w,h,!1,a)&&v,l)for(C=0;C<l.length;C++)w=a.g=l[C],v=Tn(w,h,!1,a)&&v}dt.prototype.N=function(){if(dt.Z.N.call(this),this.i){var s=this.i;for(const a in s.g){const l=s.g[a];for(let h=0;h<l.length;h++)_n(l[h]);delete s.g[a],s.h--}}this.G=null},dt.prototype.J=function(s,a,l,h){return this.i.add(String(s),a,!1,l,h)},dt.prototype.K=function(s,a,l,h){return this.i.add(String(s),a,!0,l,h)};function Tn(s,a,l,h){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();let v=!0;for(let w=0;w<a.length;++w){const C=a[w];if(C&&!C.da&&C.capture==l){const U=C.listener,rt=C.ha||C.src;C.fa&&mr(s.i,C),v=U.call(rt,h)!==!1&&v}}return v&&!h.defaultPrevented}function mu(s,a){if(typeof s!="function")if(s&&typeof s.handleEvent=="function")s=d(s.handleEvent,s);else throw Error("Invalid listener argument");return Number(a)>2147483647?-1:u.setTimeout(s,a||0)}function zs(s){s.g=mu(()=>{s.g=null,s.i&&(s.i=!1,zs(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class gu extends T{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:zs(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ne(s){T.call(this),this.h=s,this.g={}}I(Ne,T);var Gs=[];function $s(s){yn(s.g,function(a,l){this.g.hasOwnProperty(l)&&yr(a)},s),s.g={}}Ne.prototype.N=function(){Ne.Z.N.call(this),$s(this)},Ne.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ir=u.JSON.stringify,pu=u.JSON.parse,_u=class{stringify(s){return u.JSON.stringify(s,void 0)}parse(s){return u.JSON.parse(s,void 0)}};function Ks(){}function Qs(){}var ke={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function vr(){y.call(this,"d")}I(vr,y);function Ar(){y.call(this,"c")}I(Ar,y);var ee={},Ws=null;function In(){return Ws=Ws||new dt}ee.Ia="serverreachability";function Hs(s){y.call(this,ee.Ia,s)}I(Hs,y);function xe(s){const a=In();_t(a,new Hs(a))}ee.STAT_EVENT="statevent";function Xs(s,a){y.call(this,ee.STAT_EVENT,s),this.stat=a}I(Xs,y);function yt(s){const a=In();_t(a,new Xs(a,s))}ee.Ja="timingevent";function Ys(s,a){y.call(this,ee.Ja,s),this.size=a}I(Ys,y);function Oe(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){s()},a)}function Me(){this.g=!0}Me.prototype.ua=function(){this.g=!1};function yu(s,a,l,h,v,w){s.info(function(){if(s.g)if(w){var C="",U=w.split("&");for(let $=0;$<U.length;$++){var rt=U[$].split("=");if(rt.length>1){const ot=rt[0];rt=rt[1];const Vt=ot.split("_");C=Vt.length>=2&&Vt[1]=="type"?C+(ot+"="+rt+"&"):C+(ot+"=redacted&")}}}else C=null;else C=w;return"XMLHTTP REQ ("+h+") [attempt "+v+"]: "+a+`
`+l+`
`+C})}function Eu(s,a,l,h,v,w,C){s.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+v+"]: "+a+`
`+l+`
`+w+" "+C})}function me(s,a,l,h){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+Iu(s,l)+(h?" "+h:"")})}function Tu(s,a){s.info(function(){return"TIMEOUT: "+a})}Me.prototype.info=function(){};function Iu(s,a){if(!s.g)return a;if(!a)return null;try{const w=JSON.parse(a);if(w){for(s=0;s<w.length;s++)if(Array.isArray(w[s])){var l=w[s];if(!(l.length<2)){var h=l[1];if(Array.isArray(h)&&!(h.length<1)){var v=h[0];if(v!="noop"&&v!="stop"&&v!="close")for(let C=1;C<h.length;C++)h[C]=""}}}}return Ir(w)}catch{return a}}var vn={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Js={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Zs;function wr(){}I(wr,Ks),wr.prototype.g=function(){return new XMLHttpRequest},Zs=new wr;function Le(s){return encodeURIComponent(String(s))}function vu(s){var a=1;s=s.split(":");const l=[];for(;a>0&&s.length;)l.push(s.shift()),a--;return s.length&&l.push(s.join(":")),l}function Ut(s,a,l,h){this.j=s,this.i=a,this.l=l,this.S=h||1,this.V=new Ne(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ti}function ti(){this.i=null,this.g="",this.h=!1}var ei={},Rr={};function Pr(s,a,l){s.M=1,s.A=wn(Pt(a)),s.u=l,s.R=!0,ni(s,null)}function ni(s,a){s.F=Date.now(),An(s),s.B=Pt(s.A);var l=s.B,h=s.S;Array.isArray(h)||(h=[String(h)]),gi(l.i,"t",h),s.C=0,l=s.j.L,s.h=new ti,s.g=ki(s.j,l?a:null,!s.u),s.P>0&&(s.O=new gu(d(s.Y,s,s.g),s.P)),a=s.V,l=s.g,h=s.ba;var v="readystatechange";Array.isArray(v)||(v&&(Gs[0]=v.toString()),v=Gs);for(let w=0;w<v.length;w++){const C=Us(l,v[w],h||a.handleEvent,!1,a.h||a);if(!C)break;a.g[C.key]=C}a=s.J?Ms(s.J):{},s.u?(s.v||(s.v="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.B,s.v,s.u,a)):(s.v="GET",s.g.ea(s.B,s.v,null,a)),xe(),yu(s.i,s.v,s.B,s.l,s.S,s.u)}Ut.prototype.ba=function(s){s=s.target;const a=this.O;a&&Bt(s)==3?a.j():this.Y(s)},Ut.prototype.Y=function(s){try{if(s==this.g)t:{const U=Bt(this.g),rt=this.g.ya(),$=this.g.ca();if(!(U<3)&&(U!=3||this.g&&(this.h.h||this.g.la()||vi(this.g)))){this.K||U!=4||rt==7||(rt==8||$<=0?xe(3):xe(2)),Vr(this);var a=this.g.ca();this.X=a;var l=Au(this);if(this.o=a==200,Eu(this.i,this.v,this.B,this.l,this.S,U,a),this.o){if(this.U&&!this.L){e:{if(this.g){var h,v=this.g;if((h=v.g?v.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(h)){var w=h;break e}}w=null}if(s=w)me(this.i,this.l,s,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Sr(this,s);else{this.o=!1,this.m=3,yt(12),ne(this),Fe(this);break t}}if(this.R){s=!0;let ot;for(;!this.K&&this.C<l.length;)if(ot=wu(this,l),ot==Rr){U==4&&(this.m=4,yt(14),s=!1),me(this.i,this.l,null,"[Incomplete Response]");break}else if(ot==ei){this.m=4,yt(15),me(this.i,this.l,l,"[Invalid Chunk]"),s=!1;break}else me(this.i,this.l,ot,null),Sr(this,ot);if(ri(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),U!=4||l.length!=0||this.h.h||(this.m=1,yt(16),s=!1),this.o=this.o&&s,!s)me(this.i,this.l,l,"[Invalid Chunked Response]"),ne(this),Fe(this);else if(l.length>0&&!this.W){this.W=!0;var C=this.j;C.g==this&&C.aa&&!C.P&&(C.j.info("Great, no buffering proxy detected. Bytes received: "+l.length),Mr(C),C.P=!0,yt(11))}}else me(this.i,this.l,l,null),Sr(this,l);U==4&&ne(this),this.o&&!this.K&&(U==4?Ci(this.j,this):(this.o=!1,An(this)))}else Fu(this.g),a==400&&l.indexOf("Unknown SID")>0?(this.m=3,yt(12)):(this.m=0,yt(13)),ne(this),Fe(this)}}}catch{}finally{}};function Au(s){if(!ri(s))return s.g.la();const a=vi(s.g);if(a==="")return"";let l="";const h=a.length,v=Bt(s.g)==4;if(!s.h.i){if(typeof TextDecoder>"u")return ne(s),Fe(s),"";s.h.i=new u.TextDecoder}for(let w=0;w<h;w++)s.h.h=!0,l+=s.h.i.decode(a[w],{stream:!(v&&w==h-1)});return a.length=0,s.h.g+=l,s.C=0,s.h.g}function ri(s){return s.g?s.v=="GET"&&s.M!=2&&s.j.Aa:!1}function wu(s,a){var l=s.C,h=a.indexOf(`
`,l);return h==-1?Rr:(l=Number(a.substring(l,h)),isNaN(l)?ei:(h+=1,h+l>a.length?Rr:(a=a.slice(h,h+l),s.C=h+l,a)))}Ut.prototype.cancel=function(){this.K=!0,ne(this)};function An(s){s.T=Date.now()+s.H,si(s,s.H)}function si(s,a){if(s.D!=null)throw Error("WatchDog timer not null");s.D=Oe(d(s.aa,s),a)}function Vr(s){s.D&&(u.clearTimeout(s.D),s.D=null)}Ut.prototype.aa=function(){this.D=null;const s=Date.now();s-this.T>=0?(Tu(this.i,this.B),this.M!=2&&(xe(),yt(17)),ne(this),this.m=2,Fe(this)):si(this,this.T-s)};function Fe(s){s.j.I==0||s.K||Ci(s.j,s)}function ne(s){Vr(s);var a=s.O;a&&typeof a.dispose=="function"&&a.dispose(),s.O=null,$s(s.V),s.g&&(a=s.g,s.g=null,a.abort(),a.dispose())}function Sr(s,a){try{var l=s.j;if(l.I!=0&&(l.g==s||Cr(l.h,s))){if(!s.L&&Cr(l.h,s)&&l.I==3){try{var h=l.Ba.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var v=h;if(v[0]==0){t:if(!l.v){if(l.g)if(l.g.F+3e3<s.F)Cn(l),Vn(l);else break t;Or(l),yt(18)}}else l.xa=v[1],0<l.xa-l.K&&v[2]<37500&&l.F&&l.A==0&&!l.C&&(l.C=Oe(d(l.Va,l),6e3));ai(l.h)<=1&&l.ta&&(l.ta=void 0)}else se(l,11)}else if((s.L||l.g==s)&&Cn(l),!g(a))for(v=l.Ba.g.parse(a),a=0;a<v.length;a++){let $=v[a];const ot=$[0];if(!(ot<=l.K))if(l.K=ot,$=$[1],l.I==2)if($[0]=="c"){l.M=$[1],l.ba=$[2];const Vt=$[3];Vt!=null&&(l.ka=Vt,l.j.info("VER="+l.ka));const ie=$[4];ie!=null&&(l.za=ie,l.j.info("SVER="+l.za));const zt=$[5];zt!=null&&typeof zt=="number"&&zt>0&&(h=1.5*zt,l.O=h,l.j.info("backChannelRequestTimeoutMs_="+h)),h=l;const Gt=s.g;if(Gt){const Dn=Gt.g?Gt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Dn){var w=h.h;w.g||Dn.indexOf("spdy")==-1&&Dn.indexOf("quic")==-1&&Dn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(br(w,w.h),w.h=null))}if(h.G){const Lr=Gt.g?Gt.g.getResponseHeader("X-HTTP-Session-Id"):null;Lr&&(h.wa=Lr,W(h.J,h.G,Lr))}}l.I=3,l.l&&l.l.ra(),l.aa&&(l.T=Date.now()-s.F,l.j.info("Handshake RTT: "+l.T+"ms")),h=l;var C=s;if(h.na=Ni(h,h.L?h.ba:null,h.W),C.L){ui(h.h,C);var U=C,rt=h.O;rt&&(U.H=rt),U.D&&(Vr(U),An(U)),h.g=C}else Vi(h);l.i.length>0&&Sn(l)}else $[0]!="stop"&&$[0]!="close"||se(l,7);else l.I==3&&($[0]=="stop"||$[0]=="close"?$[0]=="stop"?se(l,7):xr(l):$[0]!="noop"&&l.l&&l.l.qa($),l.A=0)}}xe(4)}catch{}}var Ru=class{constructor(s,a){this.g=s,this.map=a}};function ii(s){this.l=s||10,u.PerformanceNavigationTiming?(s=u.performance.getEntriesByType("navigation"),s=s.length>0&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function oi(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function ai(s){return s.h?1:s.g?s.g.size:0}function Cr(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function br(s,a){s.g?s.g.add(a):s.h=a}function ui(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}ii.prototype.cancel=function(){if(this.i=li(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function li(s){if(s.h!=null)return s.i.concat(s.h.G);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const l of s.g.values())a=a.concat(l.G);return a}return S(s.i)}var ci=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Pu(s,a){if(s){s=s.split("&");for(let l=0;l<s.length;l++){const h=s[l].indexOf("=");let v,w=null;h>=0?(v=s[l].substring(0,h),w=s[l].substring(h+1)):v=s[l],a(v,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function qt(s){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let a;s instanceof qt?(this.l=s.l,Ue(this,s.j),this.o=s.o,this.g=s.g,qe(this,s.u),this.h=s.h,Dr(this,pi(s.i)),this.m=s.m):s&&(a=String(s).match(ci))?(this.l=!1,Ue(this,a[1]||"",!0),this.o=je(a[2]||""),this.g=je(a[3]||"",!0),qe(this,a[4]),this.h=je(a[5]||"",!0),Dr(this,a[6]||"",!0),this.m=je(a[7]||"")):(this.l=!1,this.i=new ze(null,this.l))}qt.prototype.toString=function(){const s=[];var a=this.j;a&&s.push(Be(a,hi,!0),":");var l=this.g;return(l||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Be(a,hi,!0),"@"),s.push(Le(l).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.u,l!=null&&s.push(":",String(l))),(l=this.h)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(Be(l,l.charAt(0)=="/"?Cu:Su,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",Be(l,Du)),s.join("")},qt.prototype.resolve=function(s){const a=Pt(this);let l=!!s.j;l?Ue(a,s.j):l=!!s.o,l?a.o=s.o:l=!!s.g,l?a.g=s.g:l=s.u!=null;var h=s.h;if(l)qe(a,s.u);else if(l=!!s.h){if(h.charAt(0)!="/")if(this.g&&!this.h)h="/"+h;else{var v=a.h.lastIndexOf("/");v!=-1&&(h=a.h.slice(0,v+1)+h)}if(v=h,v==".."||v==".")h="";else if(v.indexOf("./")!=-1||v.indexOf("/.")!=-1){h=v.lastIndexOf("/",0)==0,v=v.split("/");const w=[];for(let C=0;C<v.length;){const U=v[C++];U=="."?h&&C==v.length&&w.push(""):U==".."?((w.length>1||w.length==1&&w[0]!="")&&w.pop(),h&&C==v.length&&w.push("")):(w.push(U),h=!0)}h=w.join("/")}else h=v}return l?a.h=h:l=s.i.toString()!=="",l?Dr(a,pi(s.i)):l=!!s.m,l&&(a.m=s.m),a};function Pt(s){return new qt(s)}function Ue(s,a,l){s.j=l?je(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function qe(s,a){if(a){if(a=Number(a),isNaN(a)||a<0)throw Error("Bad port number "+a);s.u=a}else s.u=null}function Dr(s,a,l){a instanceof ze?(s.i=a,Nu(s.i,s.l)):(l||(a=Be(a,bu)),s.i=new ze(a,s.l))}function W(s,a,l){s.i.set(a,l)}function wn(s){return W(s,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),s}function je(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Be(s,a,l){return typeof s=="string"?(s=encodeURI(s).replace(a,Vu),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Vu(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var hi=/[#\/\?@]/g,Su=/[#\?:]/g,Cu=/[#\?]/g,bu=/[#\?@]/g,Du=/#/g;function ze(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function re(s){s.g||(s.g=new Map,s.h=0,s.i&&Pu(s.i,function(a,l){s.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}r=ze.prototype,r.add=function(s,a){re(this),this.i=null,s=ge(this,s);let l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(a),this.h+=1,this};function fi(s,a){re(s),a=ge(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function di(s,a){return re(s),a=ge(s,a),s.g.has(a)}r.forEach=function(s,a){re(this),this.g.forEach(function(l,h){l.forEach(function(v){s.call(a,v,h,this)},this)},this)};function mi(s,a){re(s);let l=[];if(typeof a=="string")di(s,a)&&(l=l.concat(s.g.get(ge(s,a))));else for(s=Array.from(s.g.values()),a=0;a<s.length;a++)l=l.concat(s[a]);return l}r.set=function(s,a){return re(this),this.i=null,s=ge(this,s),di(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},r.get=function(s,a){return s?(s=mi(this,s),s.length>0?String(s[0]):a):a};function gi(s,a,l){fi(s,a),l.length>0&&(s.i=null,s.g.set(ge(s,a),S(l)),s.h+=l.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(let h=0;h<a.length;h++){var l=a[h];const v=Le(l);l=mi(this,l);for(let w=0;w<l.length;w++){let C=v;l[w]!==""&&(C+="="+Le(l[w])),s.push(C)}}return this.i=s.join("&")};function pi(s){const a=new ze;return a.i=s.i,s.g&&(a.g=new Map(s.g),a.h=s.h),a}function ge(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function Nu(s,a){a&&!s.j&&(re(s),s.i=null,s.g.forEach(function(l,h){const v=h.toLowerCase();h!=v&&(fi(this,h),gi(this,v,l))},s)),s.j=a}function ku(s,a){const l=new Me;if(u.Image){const h=new Image;h.onload=_(jt,l,"TestLoadImage: loaded",!0,a,h),h.onerror=_(jt,l,"TestLoadImage: error",!1,a,h),h.onabort=_(jt,l,"TestLoadImage: abort",!1,a,h),h.ontimeout=_(jt,l,"TestLoadImage: timeout",!1,a,h),u.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=s}else a(!1)}function xu(s,a){const l=new Me,h=new AbortController,v=setTimeout(()=>{h.abort(),jt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:h.signal}).then(w=>{clearTimeout(v),w.ok?jt(l,"TestPingServer: ok",!0,a):jt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(v),jt(l,"TestPingServer: error",!1,a)})}function jt(s,a,l,h,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),h(l)}catch{}}function Ou(){this.g=new _u}function Nr(s){this.i=s.Sb||null,this.h=s.ab||!1}I(Nr,Ks),Nr.prototype.g=function(){return new Rn(this.i,this.h)};function Rn(s,a){dt.call(this),this.H=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}I(Rn,dt),r=Rn.prototype,r.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=s,this.D=a,this.readyState=1,$e(this)},r.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const a={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};s&&(a.body=s),(this.H||u).fetch(new Request(this.D,a)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ge(this)),this.readyState=0},r.Pa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,$e(this)),this.g&&(this.readyState=3,$e(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;_i(this)}else s.text().then(this.Oa.bind(this),this.ga.bind(this))};function _i(s){s.j.read().then(s.Ma.bind(s)).catch(s.ga.bind(s))}r.Ma=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.B.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Ge(this):$e(this),this.readyState==3&&_i(this)}},r.Oa=function(s){this.g&&(this.response=this.responseText=s,Ge(this))},r.Na=function(s){this.g&&(this.response=s,Ge(this))},r.ga=function(){this.g&&Ge(this)};function Ge(s){s.readyState=4,s.l=null,s.j=null,s.B=null,$e(s)}r.setRequestHeader=function(s,a){this.A.append(s,a)},r.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=a.next();return s.join(`\r
`)};function $e(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Rn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function yi(s){let a="";return yn(s,function(l,h){a+=h,a+=":",a+=l,a+=`\r
`}),a}function kr(s,a,l){t:{for(h in l){var h=!1;break t}h=!0}h||(l=yi(l),typeof s=="string"?l!=null&&Le(l):W(s,a,l))}function J(s){dt.call(this),this.headers=new Map,this.L=s||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}I(J,dt);var Mu=/^https?$/i,Lu=["POST","PUT"];r=J.prototype,r.Fa=function(s){this.H=s},r.ea=function(s,a,l,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Zs.g(),this.g.onreadystatechange=V(d(this.Ca,this));try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(w){Ei(this,w);return}if(s=l||"",l=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var v in h)l.set(v,h[v]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const w of h.keys())l.set(w,h.get(w));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(l.keys()).find(w=>w.toLowerCase()=="content-type"),v=u.FormData&&s instanceof u.FormData,!(Array.prototype.indexOf.call(Lu,a,void 0)>=0)||h||v||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,C]of l)this.g.setRequestHeader(w,C);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(s),this.v=!1}catch(w){Ei(this,w)}};function Ei(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.o=5,Ti(s),Pn(s)}function Ti(s){s.A||(s.A=!0,_t(s,"complete"),_t(s,"error"))}r.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=s||7,_t(this,"complete"),_t(this,"abort"),Pn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Pn(this,!0)),J.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?Ii(this):this.Xa())},r.Xa=function(){Ii(this)};function Ii(s){if(s.h&&typeof o<"u"){if(s.v&&Bt(s)==4)setTimeout(s.Ca.bind(s),0);else if(_t(s,"readystatechange"),Bt(s)==4){s.h=!1;try{const w=s.ca();t:switch(w){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var h;if(h=w===0){let C=String(s.D).match(ci)[1]||null;!C&&u.self&&u.self.location&&(C=u.self.location.protocol.slice(0,-1)),h=!Mu.test(C?C.toLowerCase():"")}l=h}if(l)_t(s,"complete"),_t(s,"success");else{s.o=6;try{var v=Bt(s)>2?s.g.statusText:""}catch{v=""}s.l=v+" ["+s.ca()+"]",Ti(s)}}finally{Pn(s)}}}}function Pn(s,a){if(s.g){s.m&&(clearTimeout(s.m),s.m=null);const l=s.g;s.g=null,a||_t(s,"ready");try{l.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function Bt(s){return s.g?s.g.readyState:0}r.ca=function(){try{return Bt(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),pu(a)}};function vi(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.F){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Fu(s){const a={};s=(s.g&&Bt(s)>=2&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<s.length;h++){if(g(s[h]))continue;var l=vu(s[h]);const v=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const w=a[v]||[];a[v]=w,w.push(l)}cu(a,function(h){return h.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ke(s,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||a}function Ai(s){this.za=0,this.i=[],this.j=new Me,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ke("failFast",!1,s),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ke("baseRetryDelayMs",5e3,s),this.Za=Ke("retryDelaySeedMs",1e4,s),this.Ta=Ke("forwardChannelMaxRetries",2,s),this.va=Ke("forwardChannelRequestTimeoutMs",2e4,s),this.ma=s&&s.xmlHttpFactory||void 0,this.Ua=s&&s.Rb||void 0,this.Aa=s&&s.useFetchStreams||!1,this.O=void 0,this.L=s&&s.supportsCrossDomainXhr||!1,this.M="",this.h=new ii(s&&s.concurrentRequestLimit),this.Ba=new Ou,this.S=s&&s.fastHandshake||!1,this.R=s&&s.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=s&&s.Pb||!1,s&&s.ua&&this.j.ua(),s&&s.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&s&&s.detectBufferingProxy||!1,this.ia=void 0,s&&s.longPollingTimeout&&s.longPollingTimeout>0&&(this.ia=s.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Ai.prototype,r.ka=8,r.I=1,r.connect=function(s,a,l,h){yt(0),this.W=s,this.H=a||{},l&&h!==void 0&&(this.H.OSID=l,this.H.OAID=h),this.F=this.X,this.J=Ni(this,null,this.W),Sn(this)};function xr(s){if(wi(s),s.I==3){var a=s.V++,l=Pt(s.J);if(W(l,"SID",s.M),W(l,"RID",a),W(l,"TYPE","terminate"),Qe(s,l),a=new Ut(s,s.j,a),a.M=2,a.A=wn(Pt(l)),l=!1,u.navigator&&u.navigator.sendBeacon)try{l=u.navigator.sendBeacon(a.A.toString(),"")}catch{}!l&&u.Image&&(new Image().src=a.A,l=!0),l||(a.g=ki(a.j,null),a.g.ea(a.A)),a.F=Date.now(),An(a)}Di(s)}function Vn(s){s.g&&(Mr(s),s.g.cancel(),s.g=null)}function wi(s){Vn(s),s.v&&(u.clearTimeout(s.v),s.v=null),Cn(s),s.h.cancel(),s.m&&(typeof s.m=="number"&&u.clearTimeout(s.m),s.m=null)}function Sn(s){if(!oi(s.h)&&!s.m){s.m=!0;var a=s.Ea;It||m(),nt||(It(),nt=!0),E.add(a,s),s.D=0}}function Uu(s,a){return ai(s.h)>=s.h.j-(s.m?1:0)?!1:s.m?(s.i=a.G.concat(s.i),!0):s.I==1||s.I==2||s.D>=(s.Sa?0:s.Ta)?!1:(s.m=Oe(d(s.Ea,s,a),bi(s,s.D)),s.D++,!0)}r.Ea=function(s){if(this.m)if(this.m=null,this.I==1){if(!s){this.V=Math.floor(Math.random()*1e5),s=this.V++;const v=new Ut(this,this.j,s);let w=this.o;if(this.U&&(w?(w=Ms(w),Fs(w,this.U)):w=this.U),this.u!==null||this.R||(v.J=w,w=null),this.S)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var h=this.i[l];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,a>4096){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=Pi(this,v,a),l=Pt(this.J),W(l,"RID",s),W(l,"CVER",22),this.G&&W(l,"X-HTTP-Session-Id",this.G),Qe(this,l),w&&(this.R?a="headers="+Le(yi(w))+"&"+a:this.u&&kr(l,this.u,w)),br(this.h,v),this.Ra&&W(l,"TYPE","init"),this.S?(W(l,"$req",a),W(l,"SID","null"),v.U=!0,Pr(v,l,null)):Pr(v,l,a),this.I=2}}else this.I==3&&(s?Ri(this,s):this.i.length==0||oi(this.h)||Ri(this))};function Ri(s,a){var l;a?l=a.l:l=s.V++;const h=Pt(s.J);W(h,"SID",s.M),W(h,"RID",l),W(h,"AID",s.K),Qe(s,h),s.u&&s.o&&kr(h,s.u,s.o),l=new Ut(s,s.j,l,s.D+1),s.u===null&&(l.J=s.o),a&&(s.i=a.G.concat(s.i)),a=Pi(s,l,1e3),l.H=Math.round(s.va*.5)+Math.round(s.va*.5*Math.random()),br(s.h,l),Pr(l,h,a)}function Qe(s,a){s.H&&yn(s.H,function(l,h){W(a,h,l)}),s.l&&yn({},function(l,h){W(a,h,l)})}function Pi(s,a,l){l=Math.min(s.i.length,l);const h=s.l?d(s.l.Ka,s.l,s):null;t:{var v=s.i;let U=-1;for(;;){const rt=["count="+l];U==-1?l>0?(U=v[0].g,rt.push("ofs="+U)):U=0:rt.push("ofs="+U);let $=!0;for(let ot=0;ot<l;ot++){var w=v[ot].g;const Vt=v[ot].map;if(w-=U,w<0)U=Math.max(0,v[ot].g-100),$=!1;else try{w="req"+w+"_"||"";try{var C=Vt instanceof Map?Vt:Object.entries(Vt);for(const[ie,zt]of C){let Gt=zt;c(zt)&&(Gt=Ir(zt)),rt.push(w+ie+"="+encodeURIComponent(Gt))}}catch(ie){throw rt.push(w+"type="+encodeURIComponent("_badmap")),ie}}catch{h&&h(Vt)}}if($){C=rt.join("&");break t}}C=void 0}return s=s.i.splice(0,l),a.G=s,C}function Vi(s){if(!s.g&&!s.v){s.Y=1;var a=s.Da;It||m(),nt||(It(),nt=!0),E.add(a,s),s.A=0}}function Or(s){return s.g||s.v||s.A>=3?!1:(s.Y++,s.v=Oe(d(s.Da,s),bi(s,s.A)),s.A++,!0)}r.Da=function(){if(this.v=null,Si(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var s=4*this.T;this.j.info("BP detection timer enabled: "+s),this.B=Oe(d(this.Wa,this),s)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,yt(10),Vn(this),Si(this))};function Mr(s){s.B!=null&&(u.clearTimeout(s.B),s.B=null)}function Si(s){s.g=new Ut(s,s.j,"rpc",s.Y),s.u===null&&(s.g.J=s.o),s.g.P=0;var a=Pt(s.na);W(a,"RID","rpc"),W(a,"SID",s.M),W(a,"AID",s.K),W(a,"CI",s.F?"0":"1"),!s.F&&s.ia&&W(a,"TO",s.ia),W(a,"TYPE","xmlhttp"),Qe(s,a),s.u&&s.o&&kr(a,s.u,s.o),s.O&&(s.g.H=s.O);var l=s.g;s=s.ba,l.M=1,l.A=wn(Pt(a)),l.u=null,l.R=!0,ni(l,s)}r.Va=function(){this.C!=null&&(this.C=null,Vn(this),Or(this),yt(19))};function Cn(s){s.C!=null&&(u.clearTimeout(s.C),s.C=null)}function Ci(s,a){var l=null;if(s.g==a){Cn(s),Mr(s),s.g=null;var h=2}else if(Cr(s.h,a))l=a.G,ui(s.h,a),h=1;else return;if(s.I!=0){if(a.o)if(h==1){l=a.u?a.u.length:0,a=Date.now()-a.F;var v=s.D;h=In(),_t(h,new Ys(h,l)),Sn(s)}else Vi(s);else if(v=a.m,v==3||v==0&&a.X>0||!(h==1&&Uu(s,a)||h==2&&Or(s)))switch(l&&l.length>0&&(a=s.h,a.i=a.i.concat(l)),v){case 1:se(s,5);break;case 4:se(s,10);break;case 3:se(s,6);break;default:se(s,2)}}}function bi(s,a){let l=s.Qa+Math.floor(Math.random()*s.Za);return s.isActive()||(l*=2),l*a}function se(s,a){if(s.j.info("Error code "+a),a==2){var l=d(s.bb,s),h=s.Ua;const v=!h;h=new qt(h||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Ue(h,"https"),wn(h),v?ku(h.toString(),l):xu(h.toString(),l)}else yt(2);s.I=0,s.l&&s.l.pa(a),Di(s),wi(s)}r.bb=function(s){s?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function Di(s){if(s.I=0,s.ja=[],s.l){const a=li(s.h);(a.length!=0||s.i.length!=0)&&(O(s.ja,a),O(s.ja,s.i),s.h.i.length=0,S(s.i),s.i.length=0),s.l.oa()}}function Ni(s,a,l){var h=l instanceof qt?Pt(l):new qt(l);if(h.g!="")a&&(h.g=a+"."+h.g),qe(h,h.u);else{var v=u.location;h=v.protocol,a=a?a+"."+v.hostname:v.hostname,v=+v.port;const w=new qt(null);h&&Ue(w,h),a&&(w.g=a),v&&qe(w,v),l&&(w.h=l),h=w}return l=s.G,a=s.wa,l&&a&&W(h,l,a),W(h,"VER",s.ka),Qe(s,h),h}function ki(s,a,l){if(a&&!s.L)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Aa&&!s.ma?new J(new Nr({ab:l})):new J(s.ma),a.Fa(s.L),a}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function xi(){}r=xi.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function bn(){}bn.prototype.g=function(s,a){return new vt(s,a)};function vt(s,a){dt.call(this),this.g=new Ai(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.sa&&(s?s["X-WebChannel-Client-Profile"]=a.sa:s={"X-WebChannel-Client-Profile":a.sa}),this.g.U=s,(s=a&&a.Qb)&&!g(s)&&(this.g.u=s),this.A=a&&a.supportsCrossDomainXhr||!1,this.v=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!g(a)&&(this.g.G=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new pe(this)}I(vt,dt),vt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){xr(this.g)},vt.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.v&&(l={},l.__data__=Ir(s),s=l);a.i.push(new Ru(a.Ya++,s)),a.I==3&&Sn(a)},vt.prototype.N=function(){this.g.l=null,delete this.j,xr(this.g),delete this.g,vt.Z.N.call(this)};function Oi(s){vr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const l in a){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}I(Oi,vr);function Mi(){Ar.call(this),this.status=1}I(Mi,Ar);function pe(s){this.g=s}I(pe,xi),pe.prototype.ra=function(){_t(this.g,"a")},pe.prototype.qa=function(s){_t(this.g,new Oi(s))},pe.prototype.pa=function(s){_t(this.g,new Mi)},pe.prototype.oa=function(){_t(this.g,"b")},bn.prototype.createWebChannel=bn.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,qo=function(){return new bn},Uo=function(){return In()},Fo=ee,zr={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},vn.NO_ERROR=0,vn.TIMEOUT=8,vn.HTTP_ERROR=6,Ln=vn,Js.COMPLETE="complete",Lo=Js,Qs.EventType=ke,ke.OPEN="a",ke.CLOSE="b",ke.ERROR="c",ke.MESSAGE="d",dt.prototype.listen=dt.prototype.J,We=Qs,J.prototype.listenOnce=J.prototype.K,J.prototype.getLastError=J.prototype.Ha,J.prototype.getLastErrorCode=J.prototype.ya,J.prototype.getStatus=J.prototype.ca,J.prototype.getResponseJson=J.prototype.La,J.prototype.getResponseText=J.prototype.la,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Fa,Mo=J}).apply(typeof Nn<"u"?Nn:typeof self<"u"?self:typeof window<"u"?window:{});const Ui="@firebase/firestore",qi="4.9.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Se="12.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue=new Wu("@firebase/firestore");function _e(){return ue.logLevel}function b(r,...t){if(ue.logLevel<=Ot.DEBUG){const e=t.map(is);ue.debug(`Firestore (${Se}): ${r}`,...e)}}function Lt(r,...t){if(ue.logLevel<=Ot.ERROR){const e=t.map(is);ue.error(`Firestore (${Se}): ${r}`,...e)}}function ve(r,...t){if(ue.logLevel<=Ot.WARN){const e=t.map(is);ue.warn(`Firestore (${Se}): ${r}`,...e)}}function is(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(e){return JSON.stringify(e)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(r,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,jo(r,n,e)}function jo(r,t,e){let n=`FIRESTORE (${Se}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw Lt(n),new Error(n)}function z(r,t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,r||jo(t,i,n)}function F(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends zu{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class el{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(gt.UNAUTHENTICATED)))}shutdown(){}}class nl{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class rl{constructor(t){this.t=t,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){z(this.o===void 0,42304);let n=this.i;const i=f=>this.i!==n?(n=this.i,e(f)):Promise.resolve();let o=new Qt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Qt,t.enqueueRetryable((()=>i(this.currentUser)))};const u=()=>{const f=o;t.enqueueRetryable((async()=>{await f.promise,await i(this.currentUser)}))},c=f=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((f=>c(f))),setTimeout((()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?c(f):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Qt)}}),0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((n=>this.i!==t?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(z(typeof n.accessToken=="string",31837,{l:n}),new Bo(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return z(t===null||typeof t=="string",2055,{h:t}),new gt(t)}}class sl{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class il{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new sl(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(gt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ji{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ol{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,tl(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){z(this.o===void 0,3512);const n=o=>{o.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.m;return this.m=o.token,b("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>n(o)))};const i=o=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>i(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ji(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(z(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new ji(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=al(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<e&&(n+=t.charAt(i[o]%62))}return n}}function q(r,t){return r<t?-1:r>t?1:0}function Gr(r,t){const e=Math.min(r.length,t.length);for(let n=0;n<e;n++){const i=r.charAt(n),o=t.charAt(n);if(i!==o)return Fr(i)===Fr(o)?q(i,o):Fr(i)?1:-1}return q(r.length,t.length)}const ul=55296,ll=57343;function Fr(r){const t=r.charCodeAt(0);return t>=ul&&t<=ll}function Ae(r,t,e){return r.length===t.length&&r.every(((n,i)=>e(n,t[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi="__name__";class St{constructor(t,e,n){e===void 0?e=0:e>t.length&&M(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&M(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return St.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof St?t.forEach((n=>{e.push(n)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const o=St.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return q(t.length,e.length)}static compareSegments(t,e){const n=St.isNumericId(t),i=St.isNumericId(e);return n&&!i?-1:!n&&i?1:n&&i?St.extractNumericId(t).compare(St.extractNumericId(e)):Gr(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Kt.fromString(t.substring(4,t.length-2))}}class X extends St{construct(t,e,n){return new X(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new N(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((i=>i.length>0)))}return new X(e)}static emptyPath(){return new X([])}}const cl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends St{construct(t,e,n){return new ct(t,e,n)}static isValidIdentifier(t){return cl.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Bi}static keyField(){return new ct([Bi])}static fromServerFormat(t){const e=[];let n="",i=0;const o=()=>{if(n.length===0)throw new N(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let u=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new N(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const f=t[i+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new N(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=f,i+=2}else c==="`"?(u=!u,i++):c!=="."||u?(n+=c,i++):(o(),i++)}if(o(),u)throw new N(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ct(e)}static emptyPath(){return new ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(t){this.path=t}static fromPath(t){return new k(X.fromString(t))}static fromName(t){return new k(X.fromString(t).popFirst(5))}static empty(){return new k(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new k(new X(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(r,t,e){if(!e)throw new N(P.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function fl(r,t,e,n){if(t===!0&&n===!0)throw new N(P.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function zi(r){if(!k.isDocumentKey(r))throw new N(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function zo(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function as(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=(function(n){return n.constructor?n.constructor.name:null})(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":M(12329,{type:typeof r})}function rn(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new N(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=as(r);throw new N(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(r,t){const e={typeString:r};return t&&(e.value=t),e}function fn(r,t){if(!zo(r))throw new N(P.INVALID_ARGUMENT,"JSON must be an object");let e;for(const n in t)if(t[n]){const i=t[n].typeString,o="value"in t[n]?{value:t[n].value}:void 0;if(!(n in r)){e=`JSON missing required field: '${n}'`;break}const u=r[n];if(i&&typeof u!==i){e=`JSON field '${n}' must be a ${i}.`;break}if(o!==void 0&&u!==o.value){e=`Expected '${n}' field to equal '${o.value}'`;break}}if(e)throw new N(P.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=-62135596800,$i=1e6;class H{static now(){return H.fromMillis(Date.now())}static fromDate(t){return H.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*$i);return new H(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Gi)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/$i}_compareTo(t){return this.seconds===t.seconds?q(this.nanoseconds,t.nanoseconds):q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:H._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(fn(t,H._jsonSchema))return new H(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Gi;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}H._jsonSchemaVersion="firestore/timestamp/1.0",H._jsonSchema={type:et("string",H._jsonSchemaVersion),seconds:et("number"),nanoseconds:et("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static fromTimestamp(t){return new L(t)}static min(){return new L(new H(0,0))}static max(){return new L(new H(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=-1;function dl(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=L.fromTimestamp(n===1e9?new H(e+1,0):new H(e,n));return new Wt(i,k.empty(),t)}function ml(r){return new Wt(r.readTime,r.key,sn)}class Wt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Wt(L.min(),k.empty(),sn)}static max(){return new Wt(L.max(),k.empty(),sn)}}function gl(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=k.comparator(r.documentKey,t.documentKey),e!==0?e:q(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _l{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ce(r){if(r.code!==P.FAILED_PRECONDITION||r.message!==pl)throw r;b("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R(((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):R.reject(e)}static resolve(t){return new R(((e,n)=>{e(t)}))}static reject(t){return new R(((e,n)=>{n(t)}))}static waitFor(t){return new R(((e,n)=>{let i=0,o=0,u=!1;t.forEach((c=>{++i,c.next((()=>{++o,u&&o===i&&e()}),(f=>n(f)))})),u=!0,o===i&&e()}))}static or(t){let e=R.resolve(!1);for(const n of t)e=e.next((i=>i?R.resolve(i):n()));return e}static forEach(t,e){const n=[];return t.forEach(((i,o)=>{n.push(e.call(this,i,o))})),this.waitFor(n)}static mapArray(t,e){return new R(((n,i)=>{const o=t.length,u=new Array(o);let c=0;for(let f=0;f<o;f++){const d=f;e(t[d]).next((_=>{u[d]=_,++c,c===o&&n(u)}),(_=>i(_)))}}))}static doWhile(t,e){return new R(((n,i)=>{const o=()=>{t()===!0?e().next((()=>{o()}),i):n()};o()}))}}function yl(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function be(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>e.writeSequenceNumber(n))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}nr.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=-1;function rr(r){return r==null}function Gn(r){return r===0&&1/r==-1/0}function El(r){return typeof r=="number"&&Number.isInteger(r)&&!Gn(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go="";function Tl(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=Ki(t)),t=Il(r.get(e),t);return Ki(t)}function Il(r,t){let e=t;const n=r.length;for(let i=0;i<n;i++){const o=r.charAt(i);switch(o){case"\0":e+="";break;case Go:e+="";break;default:e+=o}}return e}function Ki(r){return r+Go+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function ce(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function $o(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e){this.comparator=t,this.root=e||lt.EMPTY}insert(t,e){return new Y(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(t){return new Y(this.comparator,this.root.remove(t,this.comparator).copy(null,null,lt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new kn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new kn(this.root,t,this.comparator,!1)}getReverseIterator(){return new kn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new kn(this.root,t,this.comparator,!0)}}class kn{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class lt{constructor(t,e,n,i,o){this.key=t,this.value=e,this.color=n??lt.RED,this.left=i??lt.EMPTY,this.right=o??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,o){return new lt(t??this.key,e??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const o=n(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,n),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return lt.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw M(27949);return t+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(t,e,n,i,o){return this}insert(t,e,n){return new lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.comparator=t,this.data=new Y(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Wi(this.data.getIterator())}getIteratorFrom(t){return new Wi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((n=>{e=e.add(n)})),e}isEqual(t){if(!(t instanceof it)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new it(this.comparator);return e.data=t,e}}class Wi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.fields=t,t.sort(ct.comparator)}static empty(){return new Rt([])}unionWith(t){let e=new it(ct.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Rt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ae(this.fields,t.fields,((e,n)=>e.isEqual(n)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Ko("Invalid base64 string: "+o):o}})(t);return new ht(e)}static fromUint8Array(t){const e=(function(i){let o="";for(let u=0;u<i.length;++u)o+=String.fromCharCode(i[u]);return o})(t);return new ht(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const vl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ht(r){if(z(!!r,39018),typeof r=="string"){let t=0;const e=vl.exec(r);if(z(!!e,46558,{timestamp:r}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:Z(r.seconds),nanos:Z(r.nanos)}}function Z(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Xt(r){return typeof r=="string"?ht.fromBase64String(r):ht.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo="server_timestamp",Wo="__type__",Ho="__previous_value__",Xo="__local_write_time__";function ls(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[Wo])==null?void 0:n.stringValue)===Qo}function sr(r){const t=r.mapValue.fields[Ho];return ls(t)?sr(t):t}function on(r){const t=Ht(r.mapValue.fields[Xo].timestampValue);return new H(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(t,e,n,i,o,u,c,f,d,_){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=f,this.useFetchStreams=d,this.isUsingEmulator=_}}const $n="(default)";class an{constructor(t,e){this.projectId=t,this.database=e||$n}static empty(){return new an("","")}get isDefaultDatabase(){return this.database===$n}isEqual(t){return t instanceof an&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo="__type__",wl="__max__",xn={mapValue:{}},Jo="__vector__",Kn="value";function Yt(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?ls(r)?4:Pl(r)?9007199254740991:Rl(r)?10:11:M(28295,{value:r})}function kt(r,t){if(r===t)return!0;const e=Yt(r);if(e!==Yt(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return on(r).isEqual(on(t));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const u=Ht(i.timestampValue),c=Ht(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos})(r,t);case 5:return r.stringValue===t.stringValue;case 6:return(function(i,o){return Xt(i.bytesValue).isEqual(Xt(o.bytesValue))})(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return(function(i,o){return Z(i.geoPointValue.latitude)===Z(o.geoPointValue.latitude)&&Z(i.geoPointValue.longitude)===Z(o.geoPointValue.longitude)})(r,t);case 2:return(function(i,o){if("integerValue"in i&&"integerValue"in o)return Z(i.integerValue)===Z(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const u=Z(i.doubleValue),c=Z(o.doubleValue);return u===c?Gn(u)===Gn(c):isNaN(u)&&isNaN(c)}return!1})(r,t);case 9:return Ae(r.arrayValue.values||[],t.arrayValue.values||[],kt);case 10:case 11:return(function(i,o){const u=i.mapValue.fields||{},c=o.mapValue.fields||{};if(Qi(u)!==Qi(c))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(c[f]===void 0||!kt(u[f],c[f])))return!1;return!0})(r,t);default:return M(52216,{left:r})}}function un(r,t){return(r.values||[]).find((e=>kt(e,t)))!==void 0}function we(r,t){if(r===t)return 0;const e=Yt(r),n=Yt(t);if(e!==n)return q(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return q(r.booleanValue,t.booleanValue);case 2:return(function(o,u){const c=Z(o.integerValue||o.doubleValue),f=Z(u.integerValue||u.doubleValue);return c<f?-1:c>f?1:c===f?0:isNaN(c)?isNaN(f)?0:-1:1})(r,t);case 3:return Hi(r.timestampValue,t.timestampValue);case 4:return Hi(on(r),on(t));case 5:return Gr(r.stringValue,t.stringValue);case 6:return(function(o,u){const c=Xt(o),f=Xt(u);return c.compareTo(f)})(r.bytesValue,t.bytesValue);case 7:return(function(o,u){const c=o.split("/"),f=u.split("/");for(let d=0;d<c.length&&d<f.length;d++){const _=q(c[d],f[d]);if(_!==0)return _}return q(c.length,f.length)})(r.referenceValue,t.referenceValue);case 8:return(function(o,u){const c=q(Z(o.latitude),Z(u.latitude));return c!==0?c:q(Z(o.longitude),Z(u.longitude))})(r.geoPointValue,t.geoPointValue);case 9:return Xi(r.arrayValue,t.arrayValue);case 10:return(function(o,u){var V,S,O,x;const c=o.fields||{},f=u.fields||{},d=(V=c[Kn])==null?void 0:V.arrayValue,_=(S=f[Kn])==null?void 0:S.arrayValue,I=q(((O=d==null?void 0:d.values)==null?void 0:O.length)||0,((x=_==null?void 0:_.values)==null?void 0:x.length)||0);return I!==0?I:Xi(d,_)})(r.mapValue,t.mapValue);case 11:return(function(o,u){if(o===xn.mapValue&&u===xn.mapValue)return 0;if(o===xn.mapValue)return 1;if(u===xn.mapValue)return-1;const c=o.fields||{},f=Object.keys(c),d=u.fields||{},_=Object.keys(d);f.sort(),_.sort();for(let I=0;I<f.length&&I<_.length;++I){const V=Gr(f[I],_[I]);if(V!==0)return V;const S=we(c[f[I]],d[_[I]]);if(S!==0)return S}return q(f.length,_.length)})(r.mapValue,t.mapValue);default:throw M(23264,{he:e})}}function Hi(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return q(r,t);const e=Ht(r),n=Ht(t),i=q(e.seconds,n.seconds);return i!==0?i:q(e.nanos,n.nanos)}function Xi(r,t){const e=r.values||[],n=t.values||[];for(let i=0;i<e.length&&i<n.length;++i){const o=we(e[i],n[i]);if(o)return o}return q(e.length,n.length)}function Re(r){return $r(r)}function $r(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(e){const n=Ht(e);return`time(${n.seconds},${n.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(e){return Xt(e).toBase64()})(r.bytesValue):"referenceValue"in r?(function(e){return k.fromName(e).toString()})(r.referenceValue):"geoPointValue"in r?(function(e){return`geo(${e.latitude},${e.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(e){let n="[",i=!0;for(const o of e.values||[])i?i=!1:n+=",",n+=$r(o);return n+"]"})(r.arrayValue):"mapValue"in r?(function(e){const n=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const u of n)o?o=!1:i+=",",i+=`${u}:${$r(e.fields[u])}`;return i+"}"})(r.mapValue):M(61005,{value:r})}function Fn(r){switch(Yt(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=sr(r);return t?16+Fn(t):16;case 5:return 2*r.stringValue.length;case 6:return Xt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((i,o)=>i+Fn(o)),0)})(r.arrayValue);case 10:case 11:return(function(n){let i=0;return ce(n.fields,((o,u)=>{i+=o.length+Fn(u)})),i})(r.mapValue);default:throw M(13486,{value:r})}}function Kr(r){return!!r&&"integerValue"in r}function cs(r){return!!r&&"arrayValue"in r}function Yi(r){return!!r&&"nullValue"in r}function Ji(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Un(r){return!!r&&"mapValue"in r}function Rl(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[Yo])==null?void 0:n.stringValue)===Jo}function Je(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const t={mapValue:{fields:{}}};return ce(r.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Je(n))),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Je(r.arrayValue.values[e]);return t}return{...r}}function Pl(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===wl}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.value=t}static empty(){return new At({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Un(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Je(e)}setAll(t){let e=ct.emptyPath(),n={},i=[];t.forEach(((u,c)=>{if(!e.isImmediateParentOf(c)){const f=this.getFieldsMap(e);this.applyChanges(f,n,i),n={},i=[],e=c.popLast()}u?n[c.lastSegment()]=Je(u):i.push(c.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,n,i)}delete(t){const e=this.field(t.popLast());Un(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return kt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];Un(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){ce(e,((i,o)=>t[i]=o));for(const i of n)delete t[i]}clone(){return new At(Je(this.value))}}function Zo(r){const t=[];return ce(r.fields,((e,n)=>{const i=new ct([e]);if(Un(n)){const o=Zo(n.mapValue).fields;if(o.length===0)t.push(i);else for(const u of o)t.push(i.child(u))}else t.push(i)})),new Rt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t,e,n,i,o,u,c){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new pt(t,0,L.min(),L.min(),L.min(),At.empty(),0)}static newFoundDocument(t,e,n,i){return new pt(t,1,e,L.min(),n,i,0)}static newNoDocument(t,e){return new pt(t,2,e,L.min(),L.min(),At.empty(),0)}static newUnknownDocument(t,e){return new pt(t,3,e,L.min(),L.min(),At.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof pt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(t,e){this.position=t,this.inclusive=e}}function Zi(r,t,e){let n=0;for(let i=0;i<r.position.length;i++){const o=t[i],u=r.position[i];if(o.field.isKeyField()?n=k.comparator(k.fromName(u.referenceValue),e.key):n=we(u,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function to(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!kt(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Vl(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{}class st extends ta{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Cl(t,e,n):e==="array-contains"?new Nl(t,n):e==="in"?new kl(t,n):e==="not-in"?new xl(t,n):e==="array-contains-any"?new Ol(t,n):new st(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new bl(t,n):new Dl(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(we(e,this.value)):e!==null&&Yt(this.value)===Yt(e)&&this.matchesComparison(we(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xt extends ta{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new xt(t,e)}matches(t){return ea(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ea(r){return r.op==="and"}function na(r){return Sl(r)&&ea(r)}function Sl(r){for(const t of r.filters)if(t instanceof xt)return!1;return!0}function Qr(r){if(r instanceof st)return r.field.canonicalString()+r.op.toString()+Re(r.value);if(na(r))return r.filters.map((t=>Qr(t))).join(",");{const t=r.filters.map((e=>Qr(e))).join(",");return`${r.op}(${t})`}}function ra(r,t){return r instanceof st?(function(n,i){return i instanceof st&&n.op===i.op&&n.field.isEqual(i.field)&&kt(n.value,i.value)})(r,t):r instanceof xt?(function(n,i){return i instanceof xt&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce(((o,u,c)=>o&&ra(u,i.filters[c])),!0):!1})(r,t):void M(19439)}function sa(r){return r instanceof st?(function(e){return`${e.field.canonicalString()} ${e.op} ${Re(e.value)}`})(r):r instanceof xt?(function(e){return e.op.toString()+" {"+e.getFilters().map(sa).join(" ,")+"}"})(r):"Filter"}class Cl extends st{constructor(t,e,n){super(t,e,n),this.key=k.fromName(n.referenceValue)}matches(t){const e=k.comparator(t.key,this.key);return this.matchesComparison(e)}}class bl extends st{constructor(t,e){super(t,"in",e),this.keys=ia("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Dl extends st{constructor(t,e){super(t,"not-in",e),this.keys=ia("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function ia(r,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map((n=>k.fromName(n.referenceValue)))}class Nl extends st{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return cs(e)&&un(e.arrayValue,this.value)}}class kl extends st{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&un(this.value.arrayValue,e)}}class xl extends st{constructor(t,e){super(t,"not-in",e)}matches(t){if(un(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!un(this.value.arrayValue,e)}}class Ol extends st{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!cs(e)||!e.arrayValue.values)&&e.arrayValue.values.some((n=>un(this.value.arrayValue,n)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(t,e=null,n=[],i=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=u,this.endAt=c,this.Te=null}}function eo(r,t=null,e=[],n=[],i=null,o=null,u=null){return new Ml(r,t,e,n,i,o,u)}function hs(r){const t=F(r);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((n=>Qr(n))).join(","),e+="|ob:",e+=t.orderBy.map((n=>(function(o){return o.field.canonicalString()+o.dir})(n))).join(","),rr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((n=>Re(n))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((n=>Re(n))).join(",")),t.Te=e}return t.Te}function fs(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Vl(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!ra(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!to(r.startAt,t.startAt)&&to(r.endAt,t.endAt)}function Wr(r){return k.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t,e=null,n=[],i=[],o=null,u="F",c=null,f=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=f,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Ll(r,t,e,n,i,o,u,c){return new ir(r,t,e,n,i,o,u,c)}function ds(r){return new ir(r)}function no(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Fl(r){return r.collectionGroup!==null}function Ze(r){const t=F(r);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new it(ct.comparator);return u.filters.forEach((f=>{f.getFlattenedFilters().forEach((d=>{d.isInequality()&&(c=c.add(d.field))}))})),c})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new Wn(o,n))})),e.has(ct.keyField().canonicalString())||t.Ie.push(new Wn(ct.keyField(),n))}return t.Ie}function Ct(r){const t=F(r);return t.Ee||(t.Ee=Ul(t,Ze(r))),t.Ee}function Ul(r,t){if(r.limitType==="F")return eo(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map((i=>{const o=i.dir==="desc"?"asc":"desc";return new Wn(i.field,o)}));const e=r.endAt?new Qn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Qn(r.startAt.position,r.startAt.inclusive):null;return eo(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function Hr(r,t,e){return new ir(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function or(r,t){return fs(Ct(r),Ct(t))&&r.limitType===t.limitType}function oa(r){return`${hs(Ct(r))}|lt:${r.limitType}`}function ye(r){return`Query(target=${(function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map((i=>sa(i))).join(", ")}]`),rr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map((i=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(i))).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((i=>Re(i))).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((i=>Re(i))).join(",")),`Target(${n})`})(Ct(r))}; limitType=${r.limitType})`}function ar(r,t){return t.isFoundDocument()&&(function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):k.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)})(r,t)&&(function(n,i){for(const o of Ze(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0})(r,t)&&(function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0})(r,t)&&(function(n,i){return!(n.startAt&&!(function(u,c,f){const d=Zi(u,c,f);return u.inclusive?d<=0:d<0})(n.startAt,Ze(n),i)||n.endAt&&!(function(u,c,f){const d=Zi(u,c,f);return u.inclusive?d>=0:d>0})(n.endAt,Ze(n),i))})(r,t)}function ql(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function aa(r){return(t,e)=>{let n=!1;for(const i of Ze(r)){const o=jl(i,t,e);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function jl(r,t,e){const n=r.field.isKeyField()?k.comparator(t.key,e.key):(function(o,u,c){const f=u.data.field(o),d=c.data.field(o);return f!==null&&d!==null?we(f,d):M(42886)})(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return M(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return n.length===1?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){ce(this.inner,((e,n)=>{for(const[i,o]of n)t(i,o)}))}isEmpty(){return $o(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl=new Y(k.comparator);function Ft(){return Bl}const ua=new Y(k.comparator);function He(...r){let t=ua;for(const e of r)t=t.insert(e.key,e);return t}function la(r){let t=ua;return r.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function oe(){return tn()}function ca(){return tn()}function tn(){return new he((r=>r.toString()),((r,t)=>r.isEqual(t)))}const zl=new Y(k.comparator),Gl=new it(k.comparator);function j(...r){let t=Gl;for(const e of r)t=t.add(e);return t}const $l=new it(q);function Kl(){return $l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gn(t)?"-0":t}}function ha(r){return{integerValue:""+r}}function Ql(r,t){return El(t)?ha(t):ms(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(){this._=void 0}}function Wl(r,t,e){return r instanceof Hn?(function(i,o){const u={fields:{[Wo]:{stringValue:Qo},[Xo]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&ls(o)&&(o=sr(o)),o&&(u.fields[Ho]=o),{mapValue:u}})(e,t):r instanceof ln?da(r,t):r instanceof cn?ma(r,t):(function(i,o){const u=fa(i,o),c=ro(u)+ro(i.Ae);return Kr(u)&&Kr(i.Ae)?ha(c):ms(i.serializer,c)})(r,t)}function Hl(r,t,e){return r instanceof ln?da(r,t):r instanceof cn?ma(r,t):e}function fa(r,t){return r instanceof Xn?(function(n){return Kr(n)||(function(o){return!!o&&"doubleValue"in o})(n)})(t)?t:{integerValue:0}:null}class Hn extends ur{}class ln extends ur{constructor(t){super(),this.elements=t}}function da(r,t){const e=ga(t);for(const n of r.elements)e.some((i=>kt(i,n)))||e.push(n);return{arrayValue:{values:e}}}class cn extends ur{constructor(t){super(),this.elements=t}}function ma(r,t){let e=ga(t);for(const n of r.elements)e=e.filter((i=>!kt(i,n)));return{arrayValue:{values:e}}}class Xn extends ur{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function ro(r){return Z(r.integerValue||r.doubleValue)}function ga(r){return cs(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function Xl(r,t){return r.field.isEqual(t.field)&&(function(n,i){return n instanceof ln&&i instanceof ln||n instanceof cn&&i instanceof cn?Ae(n.elements,i.elements,kt):n instanceof Xn&&i instanceof Xn?kt(n.Ae,i.Ae):n instanceof Hn&&i instanceof Hn})(r.transform,t.transform)}class Yl{constructor(t,e){this.version=t,this.transformResults=e}}class Mt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Mt}static exists(t){return new Mt(void 0,t)}static updateTime(t){return new Mt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function qn(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class lr{}function pa(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new ya(r.key,Mt.none()):new dn(r.key,r.data,Mt.none());{const e=r.data,n=At.empty();let i=new it(ct.comparator);for(let o of t.fields)if(!i.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?n.delete(o):n.set(o,u),i=i.add(o)}return new fe(r.key,n,new Rt(i.toArray()),Mt.none())}}function Jl(r,t,e){r instanceof dn?(function(i,o,u){const c=i.value.clone(),f=io(i.fieldTransforms,o,u.transformResults);c.setAll(f),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()})(r,t,e):r instanceof fe?(function(i,o,u){if(!qn(i.precondition,o))return void o.convertToUnknownDocument(u.version);const c=io(i.fieldTransforms,o,u.transformResults),f=o.data;f.setAll(_a(i)),f.setAll(c),o.convertToFoundDocument(u.version,f).setHasCommittedMutations()})(r,t,e):(function(i,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()})(0,t,e)}function en(r,t,e,n){return r instanceof dn?(function(o,u,c,f){if(!qn(o.precondition,u))return c;const d=o.value.clone(),_=oo(o.fieldTransforms,f,u);return d.setAll(_),u.convertToFoundDocument(u.version,d).setHasLocalMutations(),null})(r,t,e,n):r instanceof fe?(function(o,u,c,f){if(!qn(o.precondition,u))return c;const d=oo(o.fieldTransforms,f,u),_=u.data;return _.setAll(_a(o)),_.setAll(d),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((I=>I.field)))})(r,t,e,n):(function(o,u,c){return qn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c})(r,t,e)}function Zl(r,t){let e=null;for(const n of r.fieldTransforms){const i=t.data.field(n.field),o=fa(n.transform,i||null);o!=null&&(e===null&&(e=At.empty()),e.set(n.field,o))}return e||null}function so(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!(function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Ae(n,i,((o,u)=>Xl(o,u)))})(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class dn extends lr{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class fe extends lr{constructor(t,e,n,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function _a(r){const t=new Map;return r.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}})),t}function io(r,t,e){const n=new Map;z(r.length===e.length,32656,{Re:e.length,Ve:r.length});for(let i=0;i<e.length;i++){const o=r[i],u=o.transform,c=t.data.field(o.field);n.set(o.field,Hl(u,c,e[i]))}return n}function oo(r,t,e){const n=new Map;for(const i of r){const o=i.transform,u=e.data.field(i.field);n.set(i.field,Wl(o,u,t))}return n}class ya extends lr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tc extends lr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Jl(o,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=en(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=en(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=ca();return this.mutations.forEach((i=>{const o=t.get(i.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(i.key)?null:c;const f=pa(u,c);f!==null&&n.set(i.key,f),u.isValidDocument()||u.convertToNoDocument(L.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),j())}isEqual(t){return this.batchId===t.batchId&&Ae(this.mutations,t.mutations,((e,n)=>so(e,n)))&&Ae(this.baseMutations,t.baseMutations,((e,n)=>so(e,n)))}}class gs{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){z(t.mutations.length===n.length,58842,{me:t.mutations.length,fe:n.length});let i=(function(){return zl})();const o=t.mutations;for(let u=0;u<o.length;u++)i=i.insert(o[u].key,n[u].version);return new gs(t,e,n,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt,B;function sc(r){switch(r){case P.OK:return M(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return M(15467,{code:r})}}function Ea(r){if(r===void 0)return Lt("GRPC error has no .code"),P.UNKNOWN;switch(r){case tt.OK:return P.OK;case tt.CANCELLED:return P.CANCELLED;case tt.UNKNOWN:return P.UNKNOWN;case tt.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case tt.INTERNAL:return P.INTERNAL;case tt.UNAVAILABLE:return P.UNAVAILABLE;case tt.UNAUTHENTICATED:return P.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case tt.NOT_FOUND:return P.NOT_FOUND;case tt.ALREADY_EXISTS:return P.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return P.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case tt.ABORTED:return P.ABORTED;case tt.OUT_OF_RANGE:return P.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return P.UNIMPLEMENTED;case tt.DATA_LOSS:return P.DATA_LOSS;default:return M(39323,{code:r})}}(B=tt||(tt={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc=new Kt([4294967295,4294967295],0);function ao(r){const t=ic().encode(r),e=new Oo;return e.update(t),new Uint8Array(e.digest())}function uo(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Kt([e,n],0),new Kt([i,o],0)]}class ps{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Xe(`Invalid padding: ${e}`);if(n<0)throw new Xe(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new Xe(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new Xe(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=Kt.fromNumber(this.ge)}ye(t,e,n){let i=t.add(e.multiply(Kt.fromNumber(n)));return i.compare(oc)===1&&(i=new Kt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=ao(t),[n,i]=uo(e);for(let o=0;o<this.hashCount;o++){const u=this.ye(n,i,o);if(!this.we(u))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new ps(o,i,e);return n.forEach((c=>u.insert(c))),u}insert(t){if(this.ge===0)return;const e=ao(t),[n,i]=uo(e);for(let o=0;o<this.hashCount;o++){const u=this.ye(n,i,o);this.Se(u)}}Se(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Xe extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(t,e,n,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,mn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new cr(L.min(),i,new Y(q),Ft(),j())}}class mn{constructor(t,e,n,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new mn(n,e,j(),j(),j())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t,e,n,i){this.be=t,this.removedTargetIds=e,this.key=n,this.De=i}}class Ta{constructor(t,e){this.targetId=t,this.Ce=e}}class Ia{constructor(t,e,n=ht.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class lo{constructor(){this.ve=0,this.Fe=co(),this.Me=ht.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=j(),e=j(),n=j();return this.Fe.forEach(((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:M(38017,{changeType:o})}})),new mn(this.Me,this.xe,t,e,n)}qe(){this.Oe=!1,this.Fe=co()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,z(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class ac{constructor(t){this.Ge=t,this.ze=new Map,this.je=Ft(),this.Je=On(),this.He=On(),this.Ye=new Y(q)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,(e=>{const n=this.nt(e);switch(t.state){case 0:this.rt(e)&&n.Le(t.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(t.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(n.We(),n.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),n.Le(t.resumeToken));break;default:M(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach(((n,i)=>{this.rt(i)&&e(i)}))}st(t){const e=t.targetId,n=t.Ce.count,i=this.ot(e);if(i){const o=i.target;if(Wr(o))if(n===0){const u=new k(o.path);this.et(e,u,pt.newNoDocument(u,L.min()))}else z(n===1,20013,{expectedCount:n});else{const u=this._t(e);if(u!==n){const c=this.ut(t),f=c?this.ct(c,t,u):1;if(f!==0){this.it(e);const d=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,d)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=e;let u,c;try{u=Xt(n).toUint8Array()}catch(f){if(f instanceof Ko)return ve("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{c=new ps(u,i,o)}catch(f){return ve(f instanceof Xe?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return c.ge===0?null:c}ct(t,e,n){return e.Ce.count===n-this.Pt(t,e.targetId)?0:2}Pt(t,e){const n=this.Ge.getRemoteKeysForTarget(e);let i=0;return n.forEach((o=>{const u=this.Ge.ht(),c=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.et(e,o,null),i++)})),i}Tt(t){const e=new Map;this.ze.forEach(((o,u)=>{const c=this.ot(u);if(c){if(o.current&&Wr(c.target)){const f=new k(c.target.path);this.It(f).has(u)||this.Et(u,f)||this.et(u,f,pt.newNoDocument(f,t))}o.Be&&(e.set(u,o.ke()),o.qe())}}));let n=j();this.He.forEach(((o,u)=>{let c=!0;u.forEachWhile((f=>{const d=this.ot(f);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(n=n.add(o))})),this.je.forEach(((o,u)=>u.setReadTime(t)));const i=new cr(t,e,this.Ye,this.je,n);return this.je=Ft(),this.Je=On(),this.He=On(),this.Ye=new Y(q),i}Xe(t,e){if(!this.rt(t))return;const n=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,n),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,n){if(!this.rt(t))return;const i=this.nt(t);this.Et(t,e)?i.Qe(e,1):i.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),n&&(this.je=this.je.insert(e,n))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new lo,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new it(q),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new it(q),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||b("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new lo),this.Ge.getRemoteKeysForTarget(t).forEach((e=>{this.et(t,e,null)}))}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function On(){return new Y(k.comparator)}function co(){return new Y(k.comparator)}const uc={asc:"ASCENDING",desc:"DESCENDING"},lc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cc={and:"AND",or:"OR"};class hc{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Xr(r,t){return r.useProto3Json||rr(t)?t:{value:t}}function Yn(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function va(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function fc(r,t){return Yn(r,t.toTimestamp())}function bt(r){return z(!!r,49232),L.fromTimestamp((function(e){const n=Ht(e);return new H(n.seconds,n.nanos)})(r))}function _s(r,t){return Yr(r,t).canonicalString()}function Yr(r,t){const e=(function(i){return new X(["projects",i.projectId,"databases",i.database])})(r).child("documents");return t===void 0?e:e.child(t)}function Aa(r){const t=X.fromString(r);return z(Sa(t),10190,{key:t.toString()}),t}function Jr(r,t){return _s(r.databaseId,t.path)}function Ur(r,t){const e=Aa(t);if(e.get(1)!==r.databaseId.projectId)throw new N(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new N(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new k(Ra(e))}function wa(r,t){return _s(r.databaseId,t)}function dc(r){const t=Aa(r);return t.length===4?X.emptyPath():Ra(t)}function Zr(r){return new X(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Ra(r){return z(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function ho(r,t,e){return{name:Jr(r,t),fields:e.value.mapValue.fields}}function mc(r,t){let e;if("targetChange"in t){t.targetChange;const n=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:M(39313,{state:d})})(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=(function(d,_){return d.useProto3Json?(z(_===void 0||typeof _=="string",58123),ht.fromBase64String(_||"")):(z(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),ht.fromUint8Array(_||new Uint8Array))})(r,t.targetChange.resumeToken),u=t.targetChange.cause,c=u&&(function(d){const _=d.code===void 0?P.UNKNOWN:Ea(d.code);return new N(_,d.message||"")})(u);e=new Ia(n,i,o,c||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const i=Ur(r,n.document.name),o=bt(n.document.updateTime),u=n.document.createTime?bt(n.document.createTime):L.min(),c=new At({mapValue:{fields:n.document.fields}}),f=pt.newFoundDocument(i,o,u,c),d=n.targetIds||[],_=n.removedTargetIds||[];e=new jn(d,_,f.key,f)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const i=Ur(r,n.document),o=n.readTime?bt(n.readTime):L.min(),u=pt.newNoDocument(i,o),c=n.removedTargetIds||[];e=new jn([],c,u.key,u)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const i=Ur(r,n.document),o=n.removedTargetIds||[];e=new jn([],o,i,null)}else{if(!("filter"in t))return M(11601,{Rt:t});{t.filter;const n=t.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,u=new rc(i,o),c=n.targetId;e=new Ta(c,u)}}return e}function gc(r,t){let e;if(t instanceof dn)e={update:ho(r,t.key,t.value)};else if(t instanceof ya)e={delete:Jr(r,t.key)};else if(t instanceof fe)e={update:ho(r,t.key,t.data),updateMask:wc(t.fieldMask)};else{if(!(t instanceof tc))return M(16599,{Vt:t.type});e={verify:Jr(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((n=>(function(o,u){const c=u.transform;if(c instanceof Hn)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ln)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof cn)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Xn)return{fieldPath:u.field.canonicalString(),increment:c.Ae};throw M(20930,{transform:u.transform})})(0,n)))),t.precondition.isNone||(e.currentDocument=(function(i,o){return o.updateTime!==void 0?{updateTime:fc(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M(27497)})(r,t.precondition)),e}function pc(r,t){return r&&r.length>0?(z(t!==void 0,14353),r.map((e=>(function(i,o){let u=i.updateTime?bt(i.updateTime):bt(o);return u.isEqual(L.min())&&(u=bt(o)),new Yl(u,i.transformResults||[])})(e,t)))):[]}function _c(r,t){return{documents:[wa(r,t.path)]}}function yc(r,t){const e={structuredQuery:{}},n=t.path;let i;t.collectionGroup!==null?(i=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=wa(r,i);const o=(function(d){if(d.length!==0)return Va(xt.create(d,"and"))})(t.filters);o&&(e.structuredQuery.where=o);const u=(function(d){if(d.length!==0)return d.map((_=>(function(V){return{field:Ee(V.field),direction:Ic(V.dir)}})(_)))})(t.orderBy);u&&(e.structuredQuery.orderBy=u);const c=Xr(r,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(t.endAt)),{ft:e,parent:i}}function Ec(r){let t=dc(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let i=null;if(n>0){z(n===1,65062);const _=e.from[0];_.allDescendants?i=_.collectionId:t=t.child(_.collectionId)}let o=[];e.where&&(o=(function(I){const V=Pa(I);return V instanceof xt&&na(V)?V.getFilters():[V]})(e.where));let u=[];e.orderBy&&(u=(function(I){return I.map((V=>(function(O){return new Wn(Te(O.field),(function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(O.direction))})(V)))})(e.orderBy));let c=null;e.limit&&(c=(function(I){let V;return V=typeof I=="object"?I.value:I,rr(V)?null:V})(e.limit));let f=null;e.startAt&&(f=(function(I){const V=!!I.before,S=I.values||[];return new Qn(S,V)})(e.startAt));let d=null;return e.endAt&&(d=(function(I){const V=!I.before,S=I.values||[];return new Qn(S,V)})(e.endAt)),Ll(t,i,u,o,c,"F",f,d)}function Tc(r,t){const e=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:i})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Pa(r){return r.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Te(e.unaryFilter.field);return st.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Te(e.unaryFilter.field);return st.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Te(e.unaryFilter.field);return st.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Te(e.unaryFilter.field);return st.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}})(r):r.fieldFilter!==void 0?(function(e){return st.create(Te(e.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(e){return xt.create(e.compositeFilter.filters.map((n=>Pa(n))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M(1026)}})(e.compositeFilter.op))})(r):M(30097,{filter:r})}function Ic(r){return uc[r]}function vc(r){return lc[r]}function Ac(r){return cc[r]}function Ee(r){return{fieldPath:r.canonicalString()}}function Te(r){return ct.fromServerFormat(r.fieldPath)}function Va(r){return r instanceof st?(function(e){if(e.op==="=="){if(Ji(e.value))return{unaryFilter:{field:Ee(e.field),op:"IS_NAN"}};if(Yi(e.value))return{unaryFilter:{field:Ee(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ji(e.value))return{unaryFilter:{field:Ee(e.field),op:"IS_NOT_NAN"}};if(Yi(e.value))return{unaryFilter:{field:Ee(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ee(e.field),op:vc(e.op),value:e.value}}})(r):r instanceof xt?(function(e){const n=e.getFilters().map((i=>Va(i)));return n.length===1?n[0]:{compositeFilter:{op:Ac(e.op),filters:n}}})(r):M(54877,{filter:r})}function wc(r){const t=[];return r.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Sa(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t,e,n,i,o=L.min(),u=L.min(),c=ht.EMPTY_BYTE_STRING,f=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=c,this.expectedCount=f}withSequenceNumber(t){return new $t(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(t){this.yt=t}}function Pc(r){const t=Ec({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Hr(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(){this.Cn=new Sc}addToCollectionParentIndex(t,e){return this.Cn.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(Wt.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(Wt.min())}updateCollectionGroup(t,e,n){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class Sc{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new it(X.comparator),o=!i.has(n);return this.index[e]=i.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new it(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ca=41943040;class Tt{static withCacheSize(t){return new Tt(t,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt.DEFAULT_COLLECTION_PERCENTILE=10,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tt.DEFAULT=new Tt(Ca,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tt.DISABLED=new Tt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new Pe(0)}static cr(){return new Pe(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo="LruGarbageCollector",Cc=1048576;function go([r,t],[e,n]){const i=q(r,e);return i===0?q(t,n):i}class bc{constructor(t){this.Ir=t,this.buffer=new it(go),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();go(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Dc{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){b(mo,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){be(e)?b(mo,"Ignoring IndexedDB error during garbage collection: ",e):await Ce(e)}await this.Vr(3e5)}))}}class Nc{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next((n=>Math.floor(e/100*n)))}nthSequenceNumber(t,e){if(e===0)return R.resolve(nr.ce);const n=new bc(e);return this.mr.forEachTarget(t,(i=>n.Ar(i.sequenceNumber))).next((()=>this.mr.pr(t,(i=>n.Ar(i))))).next((()=>n.maxValue))}removeTargets(t,e,n){return this.mr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(b("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(fo)):this.getCacheSize(t).next((n=>n<this.params.cacheSizeCollectionThreshold?(b("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),fo):this.yr(t,e)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let n,i,o,u,c,f,d;const _=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((I=>(I>this.params.maximumSequenceNumbersToCollect?(b("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),i=this.params.maximumSequenceNumbersToCollect):i=I,u=Date.now(),this.nthSequenceNumber(t,i)))).next((I=>(n=I,c=Date.now(),this.removeTargets(t,n,e)))).next((I=>(o=I,f=Date.now(),this.removeOrphanedDocuments(t,n)))).next((I=>(d=Date.now(),_e()<=Ot.DEBUG&&b("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-_}ms
	Determined least recently used ${i} in `+(c-u)+`ms
	Removed ${o} targets in `+(f-c)+`ms
	Removed ${I} documents in `+(d-f)+`ms
Total Duration: ${d-_}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:I}))))}}function kc(r,t){return new Nc(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(){this.changes=new he((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,pt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?R.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.remoteDocumentCache.getEntry(t,e)))).next((i=>(n!==null&&en(n.mutation,i,Rt.empty(),H.now()),i)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((n=>this.getLocalViewOfDocuments(t,n,j()).next((()=>n))))}getLocalViewOfDocuments(t,e,n=j()){const i=oe();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((o=>{let u=He();return o.forEach(((c,f)=>{u=u.insert(c,f.overlayedDocument)})),u}))))}getOverlayedDocuments(t,e){const n=oe();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,j())))}populateOverlays(t,e,n){const i=[];return n.forEach((o=>{e.has(o)||i.push(o)})),this.documentOverlayCache.getOverlays(t,i).next((o=>{o.forEach(((u,c)=>{e.set(u,c)}))}))}computeViews(t,e,n,i){let o=Ft();const u=tn(),c=(function(){return tn()})();return e.forEach(((f,d)=>{const _=n.get(d.key);i.has(d.key)&&(_===void 0||_.mutation instanceof fe)?o=o.insert(d.key,d):_!==void 0?(u.set(d.key,_.mutation.getFieldMask()),en(_.mutation,d,_.mutation.getFieldMask(),H.now())):u.set(d.key,Rt.empty())})),this.recalculateAndSaveOverlays(t,o).next((f=>(f.forEach(((d,_)=>u.set(d,_))),e.forEach(((d,_)=>c.set(d,new Oc(_,u.get(d)??null)))),c)))}recalculateAndSaveOverlays(t,e){const n=tn();let i=new Y(((u,c)=>u-c)),o=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((u=>{for(const c of u)c.keys().forEach((f=>{const d=e.get(f);if(d===null)return;let _=n.get(f)||Rt.empty();_=c.applyToLocalView(d,_),n.set(f,_);const I=(i.get(c.batchId)||j()).add(f);i=i.insert(c.batchId,I)}))})).next((()=>{const u=[],c=i.getReverseIterator();for(;c.hasNext();){const f=c.getNext(),d=f.key,_=f.value,I=ca();_.forEach((V=>{if(!o.has(V)){const S=pa(e.get(V),n.get(V));S!==null&&I.set(V,S),o=o.add(V)}})),u.push(this.documentOverlayCache.saveOverlays(t,d,I))}return R.waitFor(u)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((n=>this.recalculateAndSaveOverlays(t,n)))}getDocumentsMatchingQuery(t,e,n,i){return(function(u){return k.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Fl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((o=>{const u=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-o.size):R.resolve(oe());let c=sn,f=o;return u.next((d=>R.forEach(d,((_,I)=>(c<I.largestBatchId&&(c=I.largestBatchId),o.get(_)?R.resolve():this.remoteDocumentCache.getEntry(t,_).next((V=>{f=f.insert(_,V)}))))).next((()=>this.populateOverlays(t,d,o))).next((()=>this.computeViews(t,f,d,j()))).next((_=>({batchId:c,changes:la(_)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new k(e)).next((n=>{let i=He();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const o=e.collectionGroup;let u=He();return this.indexManager.getCollectionParents(t,o).next((c=>R.forEach(c,(f=>{const d=(function(I,V){return new ir(V,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)})(e,f.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,n,i).next((_=>{_.forEach(((I,V)=>{u=u.insert(I,V)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(t,e,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,i)))).next((u=>{o.forEach(((f,d)=>{const _=d.getKey();u.get(_)===null&&(u=u.insert(_,pt.newInvalidDocument(_)))}));let c=He();return u.forEach(((f,d)=>{const _=o.get(f);_!==void 0&&en(_.mutation,d,Rt.empty(),H.now()),ar(e,d)&&(c=c.insert(f,d))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return R.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,(function(i){return{id:i.id,version:i.version,createTime:bt(i.createTime)}})(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,(function(i){return{name:i.name,query:Pc(i.bundledQuery),readTime:bt(i.readTime)}})(e)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(){this.overlays=new Y(k.comparator),this.qr=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const n=oe();return R.forEach(e,(i=>this.getOverlay(t,i).next((o=>{o!==null&&n.set(i,o)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((i,o)=>{this.St(t,e,o)})),R.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.qr.get(n);return i!==void 0&&(i.forEach((o=>this.overlays=this.overlays.remove(o))),this.qr.delete(n)),R.resolve()}getOverlaysForCollection(t,e,n){const i=oe(),o=e.length+1,u=new k(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const f=c.getNext().value,d=f.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&f.largestBatchId>n&&i.set(f.getKey(),f)}return R.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let o=new Y(((d,_)=>d-_));const u=this.overlays.getIterator();for(;u.hasNext();){const d=u.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let _=o.get(d.largestBatchId);_===null&&(_=oe(),o=o.insert(d.largestBatchId,_)),_.set(d.getKey(),d)}}const c=oe(),f=o.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach(((d,_)=>c.set(d,_))),!(c.size()>=i)););return R.resolve(c)}St(t,e,n){const i=this.overlays.get(n.key);if(i!==null){const u=this.qr.get(i.largestBatchId).delete(n.key);this.qr.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(n.key,new nc(e,n));let o=this.qr.get(e);o===void 0&&(o=j(),this.qr.set(e,o)),this.qr.set(e,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(){this.Qr=new it(at.$r),this.Ur=new it(at.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const n=new at(t,e);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(t,e){t.forEach((n=>this.addReference(n,e)))}removeReference(t,e){this.Gr(new at(t,e))}zr(t,e){t.forEach((n=>this.removeReference(n,e)))}jr(t){const e=new k(new X([])),n=new at(e,t),i=new at(e,t+1),o=[];return this.Ur.forEachInRange([n,i],(u=>{this.Gr(u),o.push(u.key)})),o}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new k(new X([])),n=new at(e,t),i=new at(e,t+1);let o=j();return this.Ur.forEachInRange([n,i],(u=>{o=o.add(u.key)})),o}containsKey(t){const e=new at(t,0),n=this.Qr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class at{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return k.comparator(t.key,e.key)||q(t.Yr,e.Yr)}static Kr(t,e){return q(t.Yr,e.Yr)||k.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new it(at.$r)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,i){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new ec(o,e,n,i);this.mutationQueue.push(u);for(const c of i)this.Zr=this.Zr.add(new at(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return R.resolve(u)}lookupMutationBatch(t,e){return R.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.ei(n),o=i<0?0:i;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?us:this.tr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new at(e,0),i=new at(e,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([n,i],(u=>{const c=this.Xr(u.Yr);o.push(c)})),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new it(q);return e.forEach((i=>{const o=new at(i,0),u=new at(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,u],(c=>{n=n.add(c.Yr)}))})),R.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let o=n;k.isDocumentKey(o)||(o=o.child(""));const u=new at(new k(o),0);let c=new it(q);return this.Zr.forEachWhile((f=>{const d=f.key.path;return!!n.isPrefixOf(d)&&(d.length===i&&(c=c.add(f.Yr)),!0)}),u),R.resolve(this.ti(c))}ti(t){const e=[];return t.forEach((n=>{const i=this.Xr(n);i!==null&&e.push(i)})),e}removeMutationBatch(t,e){z(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Zr;return R.forEach(e.mutations,(i=>{const o=new at(i.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.Zr=n}))}ir(t){}containsKey(t,e){const n=new at(e,0),i=this.Zr.firstAfterOrEqual(n);return R.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(t){this.ri=t,this.docs=(function(){return new Y(k.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),o=i?i.size:0,u=this.ri(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return R.resolve(n?n.document.mutableCopy():pt.newInvalidDocument(e))}getEntries(t,e){let n=Ft();return e.forEach((i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():pt.newInvalidDocument(i))})),R.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let o=Ft();const u=e.path,c=new k(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(c);for(;f.hasNext();){const{key:d,value:{document:_}}=f.getNext();if(!u.isPrefixOf(d.path))break;d.path.length>u.length+1||gl(ml(_),n)<=0||(i.has(_.key)||ar(e,_))&&(o=o.insert(_.key,_.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,n,i){M(9500)}ii(t,e){return R.forEach(this.docs,(n=>e(n)))}newChangeBuffer(t){return new Bc(this)}getSize(t){return R.resolve(this.size)}}class Bc extends xc{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.Nr.addEntry(t,i)):this.Nr.removeEntry(n)})),R.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(t){this.persistence=t,this.si=new he((e=>hs(e)),fs),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.oi=0,this._i=new ys,this.targetCount=0,this.ai=Pe.ur()}forEachTarget(t,e){return this.si.forEach(((n,i)=>e(i))),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.oi&&(this.oi=e),R.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new Pe(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.Pr(e),R.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,n){let i=0;const o=[];return this.si.forEach(((u,c)=>{c.sequenceNumber<=e&&n.get(c.targetId)===null&&(this.si.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)})),R.waitFor(o).next((()=>i))}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const n=this.si.get(e)||null;return R.resolve(n)}addMatchingKeys(t,e,n){return this._i.Wr(e,n),R.resolve()}removeMatchingKeys(t,e,n){this._i.zr(e,n);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach((u=>{o.push(i.markPotentiallyOrphaned(t,u))})),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const n=this._i.Hr(e);return R.resolve(n)}containsKey(t,e){return R.resolve(this._i.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(t,e){this.ui={},this.overlays={},this.ci=new nr(0),this.li=!1,this.li=!0,this.hi=new Uc,this.referenceDelegate=t(this),this.Pi=new zc(this),this.indexManager=new Vc,this.remoteDocumentCache=(function(i){return new jc(i)})((n=>this.referenceDelegate.Ti(n))),this.serializer=new Rc(e),this.Ii=new Lc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Fc,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ui[t.toKey()];return n||(n=new qc(e,this.referenceDelegate),this.ui[t.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,n){b("MemoryPersistence","Starting transaction:",t);const i=new Gc(this.ci.next());return this.referenceDelegate.Ei(),n(i).next((o=>this.referenceDelegate.di(i).next((()=>o)))).toPromise().then((o=>(i.raiseOnCommittedEvent(),o)))}Ai(t,e){return R.or(Object.values(this.ui).map((n=>()=>n.containsKey(t,e))))}}class Gc extends _l{constructor(t){super(),this.currentSequenceNumber=t}}class Es{constructor(t){this.persistence=t,this.Ri=new ys,this.Vi=null}static mi(t){return new Es(t)}get fi(){if(this.Vi)return this.Vi;throw M(60996)}addReference(t,e,n){return this.Ri.addReference(n,e),this.fi.delete(n.toString()),R.resolve()}removeReference(t,e,n){return this.Ri.removeReference(n,e),this.fi.add(n.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),R.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach((i=>this.fi.add(i.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((i=>{i.forEach((o=>this.fi.add(o.toString())))})).next((()=>n.removeTargetData(t,e)))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.fi,(n=>{const i=k.fromPath(n);return this.gi(t,i).next((o=>{o||e.removeEntry(i,L.min())}))})).next((()=>(this.Vi=null,e.apply(t))))}updateLimboDocument(t,e){return this.gi(t,e).next((n=>{n?this.fi.delete(e.toString()):this.fi.add(e.toString())}))}Ti(t){return 0}gi(t,e){return R.or([()=>R.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class Jn{constructor(t,e){this.persistence=t,this.pi=new he((n=>Tl(n.path)),((n,i)=>n.isEqual(i))),this.garbageCollector=kc(this,e)}static mi(t,e){return new Jn(t,e)}Ei(){}di(t){return R.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((n=>e.next((i=>n+i))))}wr(t){let e=0;return this.pr(t,(n=>{e++})).next((()=>e))}pr(t,e){return R.forEach(this.pi,((n,i)=>this.br(t,n,i).next((o=>o?R.resolve():e(i)))))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ii(t,(u=>this.br(t,u,e).next((c=>{c||(n++,o.removeEntry(u,L.min()))})))).next((()=>o.apply(t))).next((()=>n))}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),R.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.pi.set(n,t.currentSequenceNumber),R.resolve()}removeReference(t,e,n){return this.pi.set(n,t.currentSequenceNumber),R.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),R.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Fn(t.data.value)),e}br(t,e,n){return R.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.pi.get(e);return R.resolve(i!==void 0&&i>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Es=n,this.ds=i}static As(t,e){let n=j(),i=j();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Ts(t,e.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Hu()?8:yl(Xu())>0?6:4})()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,n,i){const o={result:null};return this.ys(t,e).next((u=>{o.result=u})).next((()=>{if(!o.result)return this.ws(t,e,i,n).next((u=>{o.result=u}))})).next((()=>{if(o.result)return;const u=new $c;return this.Ss(t,e,u).next((c=>{if(o.result=c,this.Vs)return this.bs(t,e,u,c.size)}))})).next((()=>o.result))}bs(t,e,n,i){return n.documentReadCount<this.fs?(_e()<=Ot.DEBUG&&b("QueryEngine","SDK will not create cache indexes for query:",ye(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),R.resolve()):(_e()<=Ot.DEBUG&&b("QueryEngine","Query:",ye(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.gs*i?(_e()<=Ot.DEBUG&&b("QueryEngine","The SDK decides to create cache indexes for query:",ye(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ct(e))):R.resolve())}ys(t,e){if(no(e))return R.resolve(null);let n=Ct(e);return this.indexManager.getIndexType(t,n).next((i=>i===0?null:(e.limit!==null&&i===1&&(e=Hr(e,null,"F"),n=Ct(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((o=>{const u=j(...o);return this.ps.getDocuments(t,u).next((c=>this.indexManager.getMinOffset(t,n).next((f=>{const d=this.Ds(e,c);return this.Cs(e,d,u,f.readTime)?this.ys(t,Hr(e,null,"F")):this.vs(t,d,e,f)}))))})))))}ws(t,e,n,i){return no(e)||i.isEqual(L.min())?R.resolve(null):this.ps.getDocuments(t,n).next((o=>{const u=this.Ds(e,o);return this.Cs(e,u,n,i)?R.resolve(null):(_e()<=Ot.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ye(e)),this.vs(t,u,e,dl(i,sn)).next((c=>c)))}))}Ds(t,e){let n=new it(aa(t));return e.forEach(((i,o)=>{ar(t,o)&&(n=n.add(o))})),n}Cs(t,e,n,i){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ss(t,e,n){return _e()<=Ot.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",ye(e)),this.ps.getDocumentsMatchingQuery(t,e,Wt.min(),n)}vs(t,e,n,i){return this.ps.getDocumentsMatchingQuery(t,n,i).next((o=>(e.forEach((u=>{o=o.insert(u.key,u)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is="LocalStore",Qc=3e8;class Wc{constructor(t,e,n,i){this.persistence=t,this.Fs=e,this.serializer=i,this.Ms=new Y(q),this.xs=new he((o=>hs(o)),fs),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(n)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Mc(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ms)))}}function Hc(r,t,e,n){return new Wc(r,t,e,n)}async function Da(r,t){const e=F(r);return await e.persistence.runTransaction("Handle user change","readonly",(n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next((o=>(i=o,e.Bs(t),e.mutationQueue.getAllMutationBatches(n)))).next((o=>{const u=[],c=[];let f=j();for(const d of i){u.push(d.batchId);for(const _ of d.mutations)f=f.add(_.key)}for(const d of o){c.push(d.batchId);for(const _ of d.mutations)f=f.add(_.key)}return e.localDocuments.getDocuments(n,f).next((d=>({Ls:d,removedBatchIds:u,addedBatchIds:c})))}))}))}function Xc(r,t){const e=F(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const i=t.batch.keys(),o=e.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,f,d,_){const I=d.batch,V=I.keys();let S=R.resolve();return V.forEach((O=>{S=S.next((()=>_.getEntry(f,O))).next((x=>{const D=d.docVersions.get(O);z(D!==null,48541),x.version.compareTo(D)<0&&(I.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),_.addEntry(x)))}))})),S.next((()=>c.mutationQueue.removeMutationBatch(f,I)))})(e,n,t,o).next((()=>o.apply(n))).next((()=>e.mutationQueue.performConsistencyCheck(n))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(n,i,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(c){let f=j();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(f=f.add(c.batch.mutations[d].key));return f})(t)))).next((()=>e.localDocuments.getDocuments(n,i)))}))}function Na(r){const t=F(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Pi.getLastRemoteSnapshotVersion(e)))}function Yc(r,t){const e=F(r),n=t.snapshotVersion;let i=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const u=e.Ns.newChangeBuffer({trackRemovals:!0});i=e.Ms;const c=[];t.targetChanges.forEach(((_,I)=>{const V=i.get(I);if(!V)return;c.push(e.Pi.removeMatchingKeys(o,_.removedDocuments,I).next((()=>e.Pi.addMatchingKeys(o,_.addedDocuments,I))));let S=V.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(I)!==null?S=S.withResumeToken(ht.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):_.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(_.resumeToken,n)),i=i.insert(I,S),(function(x,D,K){return x.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=Qc?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0})(V,S,_)&&c.push(e.Pi.updateTargetData(o,S))}));let f=Ft(),d=j();if(t.documentUpdates.forEach((_=>{t.resolvedLimboDocuments.has(_)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,_))})),c.push(Jc(o,u,t.documentUpdates).next((_=>{f=_.ks,d=_.qs}))),!n.isEqual(L.min())){const _=e.Pi.getLastRemoteSnapshotVersion(o).next((I=>e.Pi.setTargetsMetadata(o,o.currentSequenceNumber,n)));c.push(_)}return R.waitFor(c).next((()=>u.apply(o))).next((()=>e.localDocuments.getLocalViewOfDocuments(o,f,d))).next((()=>f))})).then((o=>(e.Ms=i,o)))}function Jc(r,t,e){let n=j(),i=j();return e.forEach((o=>n=n.add(o))),t.getEntries(r,n).next((o=>{let u=Ft();return e.forEach(((c,f)=>{const d=o.get(c);f.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),f.isNoDocument()&&f.version.isEqual(L.min())?(t.removeEntry(c,f.readTime),u=u.insert(c,f)):!d.isValidDocument()||f.version.compareTo(d.version)>0||f.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(f),u=u.insert(c,f)):b(Is,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",f.version)})),{ks:u,qs:i}}))}function Zc(r,t){const e=F(r);return e.persistence.runTransaction("Get next mutation batch","readonly",(n=>(t===void 0&&(t=us),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t))))}function th(r,t){const e=F(r);return e.persistence.runTransaction("Allocate target","readwrite",(n=>{let i;return e.Pi.getTargetData(n,t).next((o=>o?(i=o,R.resolve(i)):e.Pi.allocateTargetId(n).next((u=>(i=new $t(t,u,"TargetPurposeListen",n.currentSequenceNumber),e.Pi.addTargetData(n,i).next((()=>i)))))))})).then((n=>{const i=e.Ms.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(n.targetId,n),e.xs.set(t,n.targetId)),n}))}async function ts(r,t,e){const n=F(r),i=n.Ms.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,(u=>n.persistence.referenceDelegate.removeTarget(u,i)))}catch(u){if(!be(u))throw u;b(Is,`Failed to update sequence numbers for target ${t}: ${u}`)}n.Ms=n.Ms.remove(t),n.xs.delete(i.target)}function po(r,t,e){const n=F(r);let i=L.min(),o=j();return n.persistence.runTransaction("Execute query","readwrite",(u=>(function(f,d,_){const I=F(f),V=I.xs.get(_);return V!==void 0?R.resolve(I.Ms.get(V)):I.Pi.getTargetData(d,_)})(n,u,Ct(t)).next((c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,n.Pi.getMatchingKeysForTargetId(u,c.targetId).next((f=>{o=f}))})).next((()=>n.Fs.getDocumentsMatchingQuery(u,t,e?i:L.min(),e?o:j()))).next((c=>(eh(n,ql(t),c),{documents:c,Qs:o})))))}function eh(r,t,e){let n=r.Os.get(t)||L.min();e.forEach(((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)})),r.Os.set(t,n)}class _o{constructor(){this.activeTargetIds=Kl()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class nh{constructor(){this.Mo=new _o,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,n){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new _o,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo="ConnectivityMonitor";class Eo{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){b(yo,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){b(yo,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mn=null;function es(){return Mn===null?Mn=(function(){return 268435456+Math.round(2147483648*Math.random())})():Mn++,"0x"+Mn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr="RestConnection",sh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ih{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${n}/databases/${i}`,this.Wo=this.databaseId.database===$n?`project_id=${n}`:`project_id=${n}&database_id=${i}`}Go(t,e,n,i,o){const u=es(),c=this.zo(t,e.toUriEncodedString());b(qr,`Sending RPC '${t}' ${u}:`,c,n);const f={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(f,i,o);const{host:d}=new URL(c),_=xo(d);return this.Jo(t,c,f,n,_).then((I=>(b(qr,`Received RPC '${t}' ${u}: `,I),I)),(I=>{throw ve(qr,`RPC '${t}' ${u} failed with error: `,I,"url: ",c,"request:",n),I}))}Ho(t,e,n,i,o,u){return this.Go(t,e,n,i,o)}jo(t,e,n){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Se})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((i,o)=>t[o]=i)),n&&n.headers.forEach(((i,o)=>t[o]=i))}zo(t,e){const n=sh[t];return`${this.Uo}/v1/${e}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection";class ah extends ih{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,n,i,o){const u=es();return new Promise(((c,f)=>{const d=new Mo;d.setWithCredentials(!0),d.listenOnce(Lo.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Ln.NO_ERROR:const I=d.getResponseJson();b(mt,`XHR for RPC '${t}' ${u} received:`,JSON.stringify(I)),c(I);break;case Ln.TIMEOUT:b(mt,`RPC '${t}' ${u} timed out`),f(new N(P.DEADLINE_EXCEEDED,"Request time out"));break;case Ln.HTTP_ERROR:const V=d.getStatus();if(b(mt,`RPC '${t}' ${u} failed with status:`,V,"response text:",d.getResponseText()),V>0){let S=d.getResponseJson();Array.isArray(S)&&(S=S[0]);const O=S==null?void 0:S.error;if(O&&O.status&&O.message){const x=(function(K){const G=K.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(G)>=0?G:P.UNKNOWN})(O.status);f(new N(x,O.message))}else f(new N(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else f(new N(P.UNAVAILABLE,"Connection failed."));break;default:M(9055,{l_:t,streamId:u,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{b(mt,`RPC '${t}' ${u} completed.`)}}));const _=JSON.stringify(i);b(mt,`RPC '${t}' ${u} sending request:`,i),d.send(e,"POST",_,n,15)}))}T_(t,e,n){const i=es(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=qo(),c=Uo(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(f.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(f.useFetchStreams=!0),this.jo(f.initMessageHeaders,e,n),f.encodeInitMessageHeaders=!0;const _=o.join("");b(mt,`Creating RPC '${t}' stream ${i}: ${_}`,f);const I=u.createWebChannel(_,f);this.I_(I);let V=!1,S=!1;const O=new oh({Yo:D=>{S?b(mt,`Not sending because RPC '${t}' stream ${i} is closed:`,D):(V||(b(mt,`Opening RPC '${t}' stream ${i} transport.`),I.open(),V=!0),b(mt,`RPC '${t}' stream ${i} sending:`,D),I.send(D))},Zo:()=>I.close()}),x=(D,K,G)=>{D.listen(K,(Q=>{try{G(Q)}catch(ft){setTimeout((()=>{throw ft}),0)}}))};return x(I,We.EventType.OPEN,(()=>{S||(b(mt,`RPC '${t}' stream ${i} transport opened.`),O.o_())})),x(I,We.EventType.CLOSE,(()=>{S||(S=!0,b(mt,`RPC '${t}' stream ${i} transport closed`),O.a_(),this.E_(I))})),x(I,We.EventType.ERROR,(D=>{S||(S=!0,ve(mt,`RPC '${t}' stream ${i} transport errored. Name:`,D.name,"Message:",D.message),O.a_(new N(P.UNAVAILABLE,"The operation could not be completed")))})),x(I,We.EventType.MESSAGE,(D=>{var K;if(!S){const G=D.data[0];z(!!G,16349);const Q=G,ft=(Q==null?void 0:Q.error)||((K=Q[0])==null?void 0:K.error);if(ft){b(mt,`RPC '${t}' stream ${i} received error:`,ft);const It=ft.status;let nt=(function(p){const T=tt[p];if(T!==void 0)return Ea(T)})(It),E=ft.message;nt===void 0&&(nt=P.INTERNAL,E="Unknown error status: "+It+" with message "+ft.message),S=!0,O.a_(new N(nt,E)),I.close()}else b(mt,`RPC '${t}' stream ${i} received:`,G),O.u_(G)}})),x(c,Fo.STAT_EVENT,(D=>{D.stat===zr.PROXY?b(mt,`RPC '${t}' stream ${i} detected buffering proxy`):D.stat===zr.NOPROXY&&b(mt,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{O.__()}),0),O}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((e=>e===t))}}function jr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(r){return new hc(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(t,e,n=1e3,i=1.5,o=6e4){this.Mi=t,this.timerId=e,this.d_=n,this.A_=i,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),i=Math.max(0,e-n);i>0&&b("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To="PersistentStream";class xa{constructor(t,e,n,i,o,u,c,f){this.Mi=t,this.S_=n,this.b_=i,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=f,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ka(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(Lt(e.toString()),Lt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,i])=>{this.D_===e&&this.G_(n,i)}),(n=>{t((()=>{const i=new N(P.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(i)}))}))}G_(t,e){const n=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo((()=>{n((()=>this.listener.Xo()))})),this.stream.t_((()=>{n((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{n((()=>this.z_(i)))})),this.stream.onMessage((i=>{n((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return b(To,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget((()=>this.D_===t?e():(b(To,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class uh extends xa{constructor(t,e,n,i,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,u),this.serializer=o}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=mc(this.serializer,t),n=(function(o){if(!("targetChange"in o))return L.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?L.min():u.readTime?bt(u.readTime):L.min()})(t);return this.listener.H_(e,n)}Y_(t){const e={};e.database=Zr(this.serializer),e.addTarget=(function(o,u){let c;const f=u.target;if(c=Wr(f)?{documents:_c(o,f)}:{query:yc(o,f).ft},c.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){c.resumeToken=va(o,u.resumeToken);const d=Xr(o,u.expectedCount);d!==null&&(c.expectedCount=d)}else if(u.snapshotVersion.compareTo(L.min())>0){c.readTime=Yn(o,u.snapshotVersion.toTimestamp());const d=Xr(o,u.expectedCount);d!==null&&(c.expectedCount=d)}return c})(this.serializer,t);const n=Tc(this.serializer,t);n&&(e.labels=n),this.q_(e)}Z_(t){const e={};e.database=Zr(this.serializer),e.removeTarget=t,this.q_(e)}}class lh extends xa{constructor(t,e,n,i,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,u),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return z(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,z(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){z(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=pc(t.writeResults,t.commitTime),n=bt(t.commitTime);return this.listener.na(n,e)}ra(){const t={};t.database=Zr(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map((n=>gc(this.serializer,n)))};this.q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{}class hh extends ch{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,n,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,u])=>this.connection.Go(t,Yr(e,n),i,o,u))).catch((o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(P.UNKNOWN,o.toString())}))}Ho(t,e,n,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,c])=>this.connection.Ho(t,Yr(e,n),i,u,c,o))).catch((u=>{throw u.name==="FirebaseError"?(u.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new N(P.UNKNOWN,u.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class fh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Lt(e),this.aa=!1):b("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le="RemoteStore";class dh{constructor(t,e,n,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo((u=>{n.enqueueAndForget((async()=>{de(this)&&(b(le,"Restarting streams for network reachability change."),await(async function(f){const d=F(f);d.Ea.add(4),await gn(d),d.Ra.set("Unknown"),d.Ea.delete(4),await fr(d)})(this))}))})),this.Ra=new fh(n,i)}}async function fr(r){if(de(r))for(const t of r.da)await t(!0)}async function gn(r){for(const t of r.da)await t(!1)}function Oa(r,t){const e=F(r);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),Rs(e)?ws(e):De(e).O_()&&As(e,t))}function vs(r,t){const e=F(r),n=De(e);e.Ia.delete(t),n.O_()&&Ma(e,t),e.Ia.size===0&&(n.O_()?n.L_():de(e)&&e.Ra.set("Unknown"))}function As(r,t){if(r.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}De(r).Y_(t)}function Ma(r,t){r.Va.Ue(t),De(r).Z_(t)}function ws(r){r.Va=new ac({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),At:t=>r.Ia.get(t)||null,ht:()=>r.datastore.serializer.databaseId}),De(r).start(),r.Ra.ua()}function Rs(r){return de(r)&&!De(r).x_()&&r.Ia.size>0}function de(r){return F(r).Ea.size===0}function La(r){r.Va=void 0}async function mh(r){r.Ra.set("Online")}async function gh(r){r.Ia.forEach(((t,e)=>{As(r,t)}))}async function ph(r,t){La(r),Rs(r)?(r.Ra.ha(t),ws(r)):r.Ra.set("Unknown")}async function _h(r,t,e){if(r.Ra.set("Online"),t instanceof Ia&&t.state===2&&t.cause)try{await(async function(i,o){const u=o.cause;for(const c of o.targetIds)i.Ia.has(c)&&(await i.remoteSyncer.rejectListen(c,u),i.Ia.delete(c),i.Va.removeTarget(c))})(r,t)}catch(n){b(le,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Zn(r,n)}else if(t instanceof jn?r.Va.Ze(t):t instanceof Ta?r.Va.st(t):r.Va.tt(t),!e.isEqual(L.min()))try{const n=await Na(r.localStore);e.compareTo(n)>=0&&await(function(o,u){const c=o.Va.Tt(u);return c.targetChanges.forEach(((f,d)=>{if(f.resumeToken.approximateByteSize()>0){const _=o.Ia.get(d);_&&o.Ia.set(d,_.withResumeToken(f.resumeToken,u))}})),c.targetMismatches.forEach(((f,d)=>{const _=o.Ia.get(f);if(!_)return;o.Ia.set(f,_.withResumeToken(ht.EMPTY_BYTE_STRING,_.snapshotVersion)),Ma(o,f);const I=new $t(_.target,f,d,_.sequenceNumber);As(o,I)})),o.remoteSyncer.applyRemoteEvent(c)})(r,e)}catch(n){b(le,"Failed to raise snapshot:",n),await Zn(r,n)}}async function Zn(r,t,e){if(!be(t))throw t;r.Ea.add(1),await gn(r),r.Ra.set("Offline"),e||(e=()=>Na(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{b(le,"Retrying IndexedDB access"),await e(),r.Ea.delete(1),await fr(r)}))}function Fa(r,t){return t().catch((e=>Zn(r,e,t)))}async function dr(r){const t=F(r),e=Jt(t);let n=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:us;for(;yh(t);)try{const i=await Zc(t.localStore,n);if(i===null){t.Ta.length===0&&e.L_();break}n=i.batchId,Eh(t,i)}catch(i){await Zn(t,i)}Ua(t)&&qa(t)}function yh(r){return de(r)&&r.Ta.length<10}function Eh(r,t){r.Ta.push(t);const e=Jt(r);e.O_()&&e.X_&&e.ea(t.mutations)}function Ua(r){return de(r)&&!Jt(r).x_()&&r.Ta.length>0}function qa(r){Jt(r).start()}async function Th(r){Jt(r).ra()}async function Ih(r){const t=Jt(r);for(const e of r.Ta)t.ea(e.mutations)}async function vh(r,t,e){const n=r.Ta.shift(),i=gs.from(n,t,e);await Fa(r,(()=>r.remoteSyncer.applySuccessfulWrite(i))),await dr(r)}async function Ah(r,t){t&&Jt(r).X_&&await(async function(n,i){if((function(u){return sc(u)&&u!==P.ABORTED})(i.code)){const o=n.Ta.shift();Jt(n).B_(),await Fa(n,(()=>n.remoteSyncer.rejectFailedWrite(o.batchId,i))),await dr(n)}})(r,t),Ua(r)&&qa(r)}async function Io(r,t){const e=F(r);e.asyncQueue.verifyOperationInProgress(),b(le,"RemoteStore received new credentials");const n=de(e);e.Ea.add(3),await gn(e),n&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await fr(e)}async function wh(r,t){const e=F(r);t?(e.Ea.delete(2),await fr(e)):t||(e.Ea.add(2),await gn(e),e.Ra.set("Unknown"))}function De(r){return r.ma||(r.ma=(function(e,n,i){const o=F(e);return o.sa(),new uh(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(r.datastore,r.asyncQueue,{Xo:mh.bind(null,r),t_:gh.bind(null,r),r_:ph.bind(null,r),H_:_h.bind(null,r)}),r.da.push((async t=>{t?(r.ma.B_(),Rs(r)?ws(r):r.Ra.set("Unknown")):(await r.ma.stop(),La(r))}))),r.ma}function Jt(r){return r.fa||(r.fa=(function(e,n,i){const o=F(e);return o.sa(),new lh(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:Th.bind(null,r),r_:Ah.bind(null,r),ta:Ih.bind(null,r),na:vh.bind(null,r)}),r.da.push((async t=>{t?(r.fa.B_(),await dr(r)):(await r.fa.stop(),r.Ta.length>0&&(b(le,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(t,e,n,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new Qt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,o){const u=Date.now()+n,c=new Ps(t,e,u,i,o);return c.start(n),c}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vs(r,t){if(Lt("AsyncQueue",`${t}: ${r}`),be(r))return new N(P.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{static emptySet(t){return new Ie(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||k.comparator(e.key,n.key):(e,n)=>k.comparator(e.key,n.key),this.keyedMap=He(),this.sortedSet=new Y(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ie)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new Ie;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(){this.ga=new Y(k.comparator)}track(t){const e=t.doc.key,n=this.ga.get(e);n?t.type!==0&&n.type===3?this.ga=this.ga.insert(e,t):t.type===3&&n.type!==1?this.ga=this.ga.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.ga=this.ga.remove(e):t.type===1&&n.type===2?this.ga=this.ga.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):M(63341,{Rt:t,pa:n}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Ve{constructor(t,e,n,i,o,u,c,f,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=c,this.excludesMetadataChanges=f,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,i,o){const u=[];return e.forEach((c=>{u.push({type:0,doc:c})})),new Ve(t,e,Ie.emptySet(e),u,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&or(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class Ph{constructor(){this.queries=Ao(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,n){const i=F(e),o=i.queries;i.queries=Ao(),o.forEach(((u,c)=>{for(const f of c.Sa)f.onError(n)}))})(this,new N(P.ABORTED,"Firestore shutting down"))}}function Ao(){return new he((r=>oa(r)),or)}async function Vh(r,t){const e=F(r);let n=3;const i=t.query;let o=e.queries.get(i);o?!o.ba()&&t.Da()&&(n=2):(o=new Rh,n=t.Da()?0:1);try{switch(n){case 0:o.wa=await e.onListen(i,!0);break;case 1:o.wa=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(u){const c=Vs(u,`Initialization of query '${ye(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,o),o.Sa.push(t),t.va(e.onlineState),o.wa&&t.Fa(o.wa)&&Ss(e)}async function Sh(r,t){const e=F(r),n=t.query;let i=3;const o=e.queries.get(n);if(o){const u=o.Sa.indexOf(t);u>=0&&(o.Sa.splice(u,1),o.Sa.length===0?i=t.Da()?0:1:!o.ba()&&t.Da()&&(i=2))}switch(i){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Ch(r,t){const e=F(r);let n=!1;for(const i of t){const o=i.query,u=e.queries.get(o);if(u){for(const c of u.Sa)c.Fa(i)&&(n=!0);u.wa=i}}n&&Ss(e)}function bh(r,t,e){const n=F(r),i=n.queries.get(t);if(i)for(const o of i.Sa)o.onError(e);n.queries.delete(t)}function Ss(r){r.Ca.forEach((t=>{t.next()}))}var ns,wo;(wo=ns||(ns={})).Ma="default",wo.Cache="cache";class Dh{constructor(t,e,n){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(t){if(!this.options.includeMetadataChanges){const n=[];for(const i of t.docChanges)i.type!==3&&n.push(i);t=new Ve(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const n=e!=="Offline";return(!this.options.qa||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=Ve.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==ns.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(t){this.key=t}}class Ba{constructor(t){this.key=t}}class Nh{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=j(),this.mutatedKeys=j(),this.eu=aa(t),this.tu=new Ie(this.eu)}get nu(){return this.Ya}ru(t,e){const n=e?e.iu:new vo,i=e?e.tu:this.tu;let o=e?e.mutatedKeys:this.mutatedKeys,u=i,c=!1;const f=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((_,I)=>{const V=i.get(_),S=ar(this.query,I)?I:null,O=!!V&&this.mutatedKeys.has(V.key),x=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let D=!1;V&&S?V.data.isEqual(S.data)?O!==x&&(n.track({type:3,doc:S}),D=!0):this.su(V,S)||(n.track({type:2,doc:S}),D=!0,(f&&this.eu(S,f)>0||d&&this.eu(S,d)<0)&&(c=!0)):!V&&S?(n.track({type:0,doc:S}),D=!0):V&&!S&&(n.track({type:1,doc:V}),D=!0,(f||d)&&(c=!0)),D&&(S?(u=u.add(S),o=x?o.add(_):o.delete(_)):(u=u.delete(_),o=o.delete(_)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const _=this.query.limitType==="F"?u.last():u.first();u=u.delete(_.key),o=o.delete(_.key),n.track({type:1,doc:_})}return{tu:u,iu:n,Cs:c,mutatedKeys:o}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const o=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const u=t.iu.ya();u.sort(((_,I)=>(function(S,O){const x=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{Rt:D})}};return x(S)-x(O)})(_.type,I.type)||this.eu(_.doc,I.doc))),this.ou(n),i=i??!1;const c=e&&!i?this._u():[],f=this.Xa.size===0&&this.current&&!i?1:0,d=f!==this.Za;return this.Za=f,u.length!==0||d?{snapshot:new Ve(this.query,t.tu,o,u,t.mutatedKeys,f===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new vo,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((e=>this.Ya=this.Ya.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ya=this.Ya.delete(e))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=j(),this.tu.forEach((n=>{this.uu(n.key)&&(this.Xa=this.Xa.add(n.key))}));const e=[];return t.forEach((n=>{this.Xa.has(n)||e.push(new Ba(n))})),this.Xa.forEach((n=>{t.has(n)||e.push(new ja(n))})),e}cu(t){this.Ya=t.Qs,this.Xa=j();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return Ve.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Cs="SyncEngine";class kh{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class xh{constructor(t){this.key=t,this.hu=!1}}class Oh{constructor(t,e,n,i,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Pu={},this.Tu=new he((c=>oa(c)),or),this.Iu=new Map,this.Eu=new Set,this.du=new Y(k.comparator),this.Au=new Map,this.Ru=new ys,this.Vu={},this.mu=new Map,this.fu=Pe.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Mh(r,t,e=!0){const n=Wa(r);let i;const o=n.Tu.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.lu()):i=await za(n,t,e,!0),i}async function Lh(r,t){const e=Wa(r);await za(e,t,!0,!1)}async function za(r,t,e,n){const i=await th(r.localStore,Ct(t)),o=i.targetId,u=r.sharedClientState.addLocalQueryTarget(o,e);let c;return n&&(c=await Fh(r,t,o,u==="current",i.resumeToken)),r.isPrimaryClient&&e&&Oa(r.remoteStore,i),c}async function Fh(r,t,e,n,i){r.pu=(I,V,S)=>(async function(x,D,K,G){let Q=D.view.ru(K);Q.Cs&&(Q=await po(x.localStore,D.query,!1).then((({documents:E})=>D.view.ru(E,Q))));const ft=G&&G.targetChanges.get(D.targetId),It=G&&G.targetMismatches.get(D.targetId)!=null,nt=D.view.applyChanges(Q,x.isPrimaryClient,ft,It);return Po(x,D.targetId,nt.au),nt.snapshot})(r,I,V,S);const o=await po(r.localStore,t,!0),u=new Nh(t,o.Qs),c=u.ru(o.documents),f=mn.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",i),d=u.applyChanges(c,r.isPrimaryClient,f);Po(r,e,d.au);const _=new kh(t,e,u);return r.Tu.set(t,_),r.Iu.has(e)?r.Iu.get(e).push(t):r.Iu.set(e,[t]),d.snapshot}async function Uh(r,t,e){const n=F(r),i=n.Tu.get(t),o=n.Iu.get(i.targetId);if(o.length>1)return n.Iu.set(i.targetId,o.filter((u=>!or(u,t)))),void n.Tu.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await ts(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),e&&vs(n.remoteStore,i.targetId),rs(n,i.targetId)})).catch(Ce)):(rs(n,i.targetId),await ts(n.localStore,i.targetId,!0))}async function qh(r,t){const e=F(r),n=e.Tu.get(t),i=e.Iu.get(n.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),vs(e.remoteStore,n.targetId))}async function jh(r,t,e){const n=Wh(r);try{const i=await(function(u,c){const f=F(u),d=H.now(),_=c.reduce(((S,O)=>S.add(O.key)),j());let I,V;return f.persistence.runTransaction("Locally write mutations","readwrite",(S=>{let O=Ft(),x=j();return f.Ns.getEntries(S,_).next((D=>{O=D,O.forEach(((K,G)=>{G.isValidDocument()||(x=x.add(K))}))})).next((()=>f.localDocuments.getOverlayedDocuments(S,O))).next((D=>{I=D;const K=[];for(const G of c){const Q=Zl(G,I.get(G.key).overlayedDocument);Q!=null&&K.push(new fe(G.key,Q,Zo(Q.value.mapValue),Mt.exists(!0)))}return f.mutationQueue.addMutationBatch(S,d,K,c)})).next((D=>{V=D;const K=D.applyToLocalDocumentSet(I,x);return f.documentOverlayCache.saveOverlays(S,D.batchId,K)}))})).then((()=>({batchId:V.batchId,changes:la(I)})))})(n.localStore,t);n.sharedClientState.addPendingMutation(i.batchId),(function(u,c,f){let d=u.Vu[u.currentUser.toKey()];d||(d=new Y(q)),d=d.insert(c,f),u.Vu[u.currentUser.toKey()]=d})(n,i.batchId,e),await pn(n,i.changes),await dr(n.remoteStore)}catch(i){const o=Vs(i,"Failed to persist write");e.reject(o)}}async function Ga(r,t){const e=F(r);try{const n=await Yc(e.localStore,t);t.targetChanges.forEach(((i,o)=>{const u=e.Au.get(o);u&&(z(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?u.hu=!0:i.modifiedDocuments.size>0?z(u.hu,14607):i.removedDocuments.size>0&&(z(u.hu,42227),u.hu=!1))})),await pn(e,n,t)}catch(n){await Ce(n)}}function Ro(r,t,e){const n=F(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const i=[];n.Tu.forEach(((o,u)=>{const c=u.view.va(t);c.snapshot&&i.push(c.snapshot)})),(function(u,c){const f=F(u);f.onlineState=c;let d=!1;f.queries.forEach(((_,I)=>{for(const V of I.Sa)V.va(c)&&(d=!0)})),d&&Ss(f)})(n.eventManager,t),i.length&&n.Pu.H_(i),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function Bh(r,t,e){const n=F(r);n.sharedClientState.updateQueryState(t,"rejected",e);const i=n.Au.get(t),o=i&&i.key;if(o){let u=new Y(k.comparator);u=u.insert(o,pt.newNoDocument(o,L.min()));const c=j().add(o),f=new cr(L.min(),new Map,new Y(q),u,c);await Ga(n,f),n.du=n.du.remove(o),n.Au.delete(t),bs(n)}else await ts(n.localStore,t,!1).then((()=>rs(n,t,e))).catch(Ce)}async function zh(r,t){const e=F(r),n=t.batch.batchId;try{const i=await Xc(e.localStore,t);Ka(e,n,null),$a(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await pn(e,i)}catch(i){await Ce(i)}}async function Gh(r,t,e){const n=F(r);try{const i=await(function(u,c){const f=F(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let _;return f.mutationQueue.lookupMutationBatch(d,c).next((I=>(z(I!==null,37113),_=I.keys(),f.mutationQueue.removeMutationBatch(d,I)))).next((()=>f.mutationQueue.performConsistencyCheck(d))).next((()=>f.documentOverlayCache.removeOverlaysForBatchId(d,_,c))).next((()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,_))).next((()=>f.localDocuments.getDocuments(d,_)))}))})(n.localStore,t);Ka(n,t,e),$a(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await pn(n,i)}catch(i){await Ce(i)}}function $a(r,t){(r.mu.get(t)||[]).forEach((e=>{e.resolve()})),r.mu.delete(t)}function Ka(r,t,e){const n=F(r);let i=n.Vu[n.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),n.Vu[n.currentUser.toKey()]=i}}function rs(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Iu.get(t))r.Tu.delete(n),e&&r.Pu.yu(n,e);r.Iu.delete(t),r.isPrimaryClient&&r.Ru.jr(t).forEach((n=>{r.Ru.containsKey(n)||Qa(r,n)}))}function Qa(r,t){r.Eu.delete(t.path.canonicalString());const e=r.du.get(t);e!==null&&(vs(r.remoteStore,e),r.du=r.du.remove(t),r.Au.delete(e),bs(r))}function Po(r,t,e){for(const n of e)n instanceof ja?(r.Ru.addReference(n.key,t),$h(r,n)):n instanceof Ba?(b(Cs,"Document no longer in limbo: "+n.key),r.Ru.removeReference(n.key,t),r.Ru.containsKey(n.key)||Qa(r,n.key)):M(19791,{wu:n})}function $h(r,t){const e=t.key,n=e.path.canonicalString();r.du.get(e)||r.Eu.has(n)||(b(Cs,"New document in limbo: "+e),r.Eu.add(n),bs(r))}function bs(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Eu.values().next().value;r.Eu.delete(t);const e=new k(X.fromString(t)),n=r.fu.next();r.Au.set(n,new xh(e)),r.du=r.du.insert(e,n),Oa(r.remoteStore,new $t(Ct(ds(e.path)),n,"TargetPurposeLimboResolution",nr.ce))}}async function pn(r,t,e){const n=F(r),i=[],o=[],u=[];n.Tu.isEmpty()||(n.Tu.forEach(((c,f)=>{u.push(n.pu(f,t,e).then((d=>{var _;if((d||e)&&n.isPrimaryClient){const I=d?!d.fromCache:(_=e==null?void 0:e.targetChanges.get(f.targetId))==null?void 0:_.current;n.sharedClientState.updateQueryState(f.targetId,I?"current":"not-current")}if(d){i.push(d);const I=Ts.As(f.targetId,d);o.push(I)}})))})),await Promise.all(u),n.Pu.H_(i),await(async function(f,d){const _=F(f);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",(I=>R.forEach(d,(V=>R.forEach(V.Es,(S=>_.persistence.referenceDelegate.addReference(I,V.targetId,S))).next((()=>R.forEach(V.ds,(S=>_.persistence.referenceDelegate.removeReference(I,V.targetId,S)))))))))}catch(I){if(!be(I))throw I;b(Is,"Failed to update sequence numbers: "+I)}for(const I of d){const V=I.targetId;if(!I.fromCache){const S=_.Ms.get(V),O=S.snapshotVersion,x=S.withLastLimboFreeSnapshotVersion(O);_.Ms=_.Ms.insert(V,x)}}})(n.localStore,o))}async function Kh(r,t){const e=F(r);if(!e.currentUser.isEqual(t)){b(Cs,"User change. New user:",t.toKey());const n=await Da(e.localStore,t);e.currentUser=t,(function(o,u){o.mu.forEach((c=>{c.forEach((f=>{f.reject(new N(P.CANCELLED,u))}))})),o.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await pn(e,n.Ls)}}function Qh(r,t){const e=F(r),n=e.Au.get(t);if(n&&n.hu)return j().add(n.key);{let i=j();const o=e.Iu.get(t);if(!o)return i;for(const u of o){const c=e.Tu.get(u);i=i.unionWith(c.view.nu)}return i}}function Wa(r){const t=F(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ga.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Qh.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Bh.bind(null,t),t.Pu.H_=Ch.bind(null,t.eventManager),t.Pu.yu=bh.bind(null,t.eventManager),t}function Wh(r){const t=F(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=zh.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Gh.bind(null,t),t}class tr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=hr(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Hc(this.persistence,new Kc,t.initialUser,this.serializer)}Cu(t){return new ba(Es.mi,this.serializer)}Du(t){return new nh}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}tr.provider={build:()=>new tr};class Hh extends tr{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){z(this.persistence.referenceDelegate instanceof Jn,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Dc(n,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?Tt.withCacheSize(this.cacheSizeBytes):Tt.DEFAULT;return new ba((n=>Jn.mi(n,e)),this.serializer)}}class ss{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Ro(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Kh.bind(null,this.syncEngine),await wh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new Ph})()}createDatastore(t){const e=hr(t.databaseInfo.databaseId),n=(function(o){return new ah(o)})(t.databaseInfo);return(function(o,u,c,f){return new hh(o,u,c,f)})(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return(function(n,i,o,u,c){return new dh(n,i,o,u,c)})(this.localStore,this.datastore,t.asyncQueue,(e=>Ro(this.syncEngine,e,0)),(function(){return Eo.v()?new Eo:new rh})())}createSyncEngine(t,e){return(function(i,o,u,c,f,d,_){const I=new Oh(i,o,u,c,f,d);return _&&(I.gu=!0),I})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(i){const o=F(i);b(le,"RemoteStore shutting down."),o.Ea.add(5),await gn(o),o.Aa.shutdown(),o.Ra.set("Unknown")})(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}ss.provider={build:()=>new ss};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Lt("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt="FirestoreClient";class Yh{constructor(t,e,n,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=os.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,(async u=>{b(Zt,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(n,(u=>(b(Zt,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Qt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Vs(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Br(r,t){r.asyncQueue.verifyOperationInProgress(),b(Zt,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener((async i=>{n.isEqual(i)||(await Da(t.localStore,i),n=i)})),t.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=t}async function Vo(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Jh(r);b(Zt,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener((n=>Io(t.remoteStore,n))),r.setAppCheckTokenChangeListener(((n,i)=>Io(t.remoteStore,i))),r._onlineComponents=t}async function Jh(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){b(Zt,"Using user provided OfflineComponentProvider");try{await Br(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(i){return i.name==="FirebaseError"?i.code===P.FAILED_PRECONDITION||i.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(e))throw e;ve("Error using user provided cache. Falling back to memory cache: "+e),await Br(r,new tr)}}else b(Zt,"Using default OfflineComponentProvider"),await Br(r,new Hh(void 0));return r._offlineComponents}async function Ha(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(b(Zt,"Using user provided OnlineComponentProvider"),await Vo(r,r._uninitializedComponentsProvider._online)):(b(Zt,"Using default OnlineComponentProvider"),await Vo(r,new ss))),r._onlineComponents}function Zh(r){return Ha(r).then((t=>t.syncEngine))}async function tf(r){const t=await Ha(r),e=t.eventManager;return e.onListen=Mh.bind(null,t.syncEngine),e.onUnlisten=Uh.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Lh.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=qh.bind(null,t.syncEngine),e}function ef(r,t,e={}){const n=new Qt;return r.asyncQueue.enqueueAndForget((async()=>(function(o,u,c,f,d){const _=new Xh({next:V=>{_.Nu(),u.enqueueAndForget((()=>Sh(o,I)));const S=V.docs.has(c);!S&&V.fromCache?d.reject(new N(P.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&V.fromCache&&f&&f.source==="server"?d.reject(new N(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(V)},error:V=>d.reject(V)}),I=new Dh(ds(c.path),_,{includeMetadataChanges:!0,qa:!0});return Vh(o,I)})(await tf(r),r.asyncQueue,t,e,n))),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya="firestore.googleapis.com",Co=!0;class bo{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new N(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ya,this.ssl=Co}else this.host=t.host,this.ssl=t.ssl??Co;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Ca;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Cc)throw new N(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}fl("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Xa(t.experimentalLongPollingOptions??{}),(function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(n,i){return n.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ds{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bo({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bo(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new el;switch(n.type){case"firstParty":return new il(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new N(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const n=So.get(e);n&&(b("ComponentProvider","Removing Datastore"),So.delete(e),n.terminate())})(this),Promise.resolve()}}function nf(r,t,e,n={}){var d;r=rn(r,Ds);const i=xo(t),o=r._getSettings(),u={...o,emulatorOptions:r._getEmulatorOptions()},c=`${t}:${e}`;i&&(Gu(`https://${c}`),$u("Firestore",!0)),o.host!==Ya&&o.host!==c&&ve("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f={...o,host:c,ssl:i,emulatorOptions:n};if(!Ku(f,u)&&(r._setSettings(f),n.mockUserToken)){let _,I;if(typeof n.mockUserToken=="string")_=n.mockUserToken,I=gt.MOCK_USER;else{_=Qu(n.mockUserToken,(d=r._app)==null?void 0:d.options.projectId);const V=n.mockUserToken.sub||n.mockUserToken.user_id;if(!V)throw new N(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new gt(V)}r._authCredentials=new nl(new Bo(_,I))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Ns(this.firestore,t,this._query)}}class ut{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ut(this.firestore,t,this._key)}toJSON(){return{type:ut._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(fn(e,ut._jsonSchema))return new ut(t,n||null,new k(X.fromString(e.referencePath)))}}ut._jsonSchemaVersion="firestore/documentReference/1.0",ut._jsonSchema={type:et("string",ut._jsonSchemaVersion),referencePath:et("string")};class hn extends Ns{constructor(t,e,n){super(t,e,ds(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ut(this.firestore,null,new k(t))}withConverter(t){return new hn(this.firestore,t,this._path)}}function vf(r,t,...e){if(r=zn(r),arguments.length===1&&(t=os.newId()),hl("doc","path",t),r instanceof Ds){const n=X.fromString(t,...e);return zi(n),new ut(r,null,new k(n))}{if(!(r instanceof ut||r instanceof hn))throw new N(P.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(X.fromString(t,...e));return zi(n),new ut(r.firestore,r instanceof hn?r.converter:null,new k(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do="AsyncQueue";class No{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ka(this,"async_queue_retry"),this._c=()=>{const n=jr();n&&b(Do,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=t;const e=jr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=jr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new Qt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!be(t))throw t;b(Do,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((n=>{throw this.nc=n,this.rc=!1,Lt("INTERNAL UNHANDLED ERROR: ",ko(n)),n})).then((n=>(this.rc=!1,n))))));return this.ac=e,e}enqueueAfterDelay(t,e,n){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const i=Ps.createAndSchedule(this,t,e,n,(o=>this.hc(o)));return this.tc.push(i),i}uc(){this.nc&&M(47125,{Pc:ko(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,n)=>e.targetTimeMs-n.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function ko(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class ks extends Ds{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new No,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new No(t),this._firestoreClient=void 0,await t}}}function Af(r,t){const e=typeof r=="object"?r:qu(),n=typeof r=="string"?r:$n,i=ju(e,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=Bu("firestore");o&&nf(i,...o)}return i}function Ja(r){if(r._terminated)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||rf(r),r._firestoreClient}function rf(r){var n,i,o;const t=r._freezeSettings(),e=(function(c,f,d,_){return new Al(c,f,d,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,Xa(_.experimentalLongPollingOptions),_.useFetchStreams,_.isUsingEmulator)})(r._databaseId,((n=r._app)==null?void 0:n.options.appId)||"",r._persistenceKey,t);r._componentsProvider||(i=t.localCache)!=null&&i._offlineComponentProvider&&((o=t.localCache)!=null&&o._onlineComponentProvider)&&(r._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),r._firestoreClient=new Yh(r._authCredentials,r._appCheckCredentials,r._queue,e,r._componentsProvider&&(function(c){const f=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(f),_online:f}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new wt(ht.fromBase64String(t))}catch(e){throw new N(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new wt(ht.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:wt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(fn(t,wt._jsonSchema))return wt.fromBase64String(t.bytes)}}wt._jsonSchemaVersion="firestore/bytes/1.0",wt._jsonSchema={type:et("string",wt._jsonSchemaVersion),bytes:et("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return q(this._lat,t._lat)||q(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Dt._jsonSchemaVersion}}static fromJSON(t){if(fn(t,Dt._jsonSchema))return new Dt(t.latitude,t.longitude)}}Dt._jsonSchemaVersion="firestore/geoPoint/1.0",Dt._jsonSchema={type:et("string",Dt._jsonSchemaVersion),latitude:et("number"),longitude:et("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(n,i){if(n.length!==i.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==i[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Nt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(fn(t,Nt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Nt(t.vectorValues);throw new N(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Nt._jsonSchemaVersion="firestore/vectorValue/1.0",Nt._jsonSchema={type:et("string",Nt._jsonSchemaVersion),vectorValues:et("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf=/^__.*__$/;class of{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new fe(t,this.data,this.fieldMask,e,this.fieldTransforms):new dn(t,this.data,e,this.fieldTransforms)}}function tu(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{Ac:r})}}class Os{constructor(t,e,n,i,o,u){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new Os({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){var i;const e=(i=this.path)==null?void 0:i.child(t),n=this.Vc({path:e,fc:!1});return n.gc(t),n}yc(t){var i;const e=(i=this.path)==null?void 0:i.child(t),n=this.Vc({path:e,fc:!1});return n.Rc(),n}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return er(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(tu(this.Ac)&&sf.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class af{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||hr(t)}Cc(t,e,n,i=!1){return new Os({Ac:t,methodName:e,Dc:n,path:ct.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uf(r){const t=r._freezeSettings(),e=hr(r._databaseId);return new af(r._databaseId,!!t.ignoreUndefinedProperties,e)}function lf(r,t,e,n,i,o={}){const u=r.Cc(o.merge||o.mergeFields?2:0,t,e,i);su("Data must be an object, but it was:",u,n);const c=nu(n,u);let f,d;if(o.merge)f=new Rt(u.fieldMask),d=u.fieldTransforms;else if(o.mergeFields){const _=[];for(const I of o.mergeFields){const V=cf(t,I,e);if(!u.contains(V))throw new N(P.INVALID_ARGUMENT,`Field '${V}' is specified in your field mask but missing from your input data.`);ff(_,V)||_.push(V)}f=new Rt(_),d=u.fieldTransforms.filter((I=>f.covers(I.field)))}else f=null,d=u.fieldTransforms;return new of(new At(c),f,d)}function eu(r,t){if(ru(r=zn(r)))return su("Unsupported field value:",t,r),nu(r,t);if(r instanceof Za)return(function(n,i){if(!tu(i.Ac))throw i.Sc(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(i);o&&i.fieldTransforms.push(o)})(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(n,i){const o=[];let u=0;for(const c of n){let f=eu(c,i.wc(u));f==null&&(f={nullValue:"NULL_VALUE"}),o.push(f),u++}return{arrayValue:{values:o}}})(r,t)}return(function(n,i){if((n=zn(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Ql(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=H.fromDate(n);return{timestampValue:Yn(i.serializer,o)}}if(n instanceof H){const o=new H(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Yn(i.serializer,o)}}if(n instanceof Dt)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof wt)return{bytesValue:va(i.serializer,n._byteString)};if(n instanceof ut){const o=i.databaseId,u=n.firestore._databaseId;if(!u.isEqual(o))throw i.Sc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:_s(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof Nt)return(function(u,c){return{mapValue:{fields:{[Yo]:{stringValue:Jo},[Kn]:{arrayValue:{values:u.toArray().map((d=>{if(typeof d!="number")throw c.Sc("VectorValues must only contain numeric values.");return ms(c.serializer,d)}))}}}}}})(n,i);throw i.Sc(`Unsupported field value: ${as(n)}`)})(r,t)}function nu(r,t){const e={};return $o(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ce(r,((n,i)=>{const o=eu(i,t.mc(n));o!=null&&(e[n]=o)})),{mapValue:{fields:e}}}function ru(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof H||r instanceof Dt||r instanceof wt||r instanceof ut||r instanceof Za||r instanceof Nt)}function su(r,t,e){if(!ru(e)||!zo(e)){const n=as(e);throw n==="an object"?t.Sc(r+" a custom object"):t.Sc(r+" "+n)}}function cf(r,t,e){if((t=zn(t))instanceof xs)return t._internalPath;if(typeof t=="string")return iu(r,t);throw er("Field path arguments must be of type string or ",r,!1,void 0,e)}const hf=new RegExp("[~\\*/\\[\\]]");function iu(r,t,e){if(t.search(hf)>=0)throw er(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new xs(...t.split("."))._internalPath}catch{throw er(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function er(r,t,e,n,i){const o=n&&!n.isEmpty(),u=i!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let f="";return(o||u)&&(f+=" (found",o&&(f+=` in field ${n}`),u&&(f+=` in document ${i}`),f+=")"),new N(P.INVALID_ARGUMENT,c+r+f)}function ff(r,t){return r.some((e=>e.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(t,e,n,i,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new df(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(au("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class df extends ou{data(){return super.data()}}function au(r,t){return typeof t=="string"?iu(r,t):t instanceof xs?t._internalPath:t._delegate._internalPath}class mf{convertValue(t,e="none"){switch(Yt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Xt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw M(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return ce(t,((i,o)=>{n[i]=this.convertValue(o,e)})),n}convertVectorValue(t){var n,i,o;const e=(o=(i=(n=t.fields)==null?void 0:n[Kn].arrayValue)==null?void 0:i.values)==null?void 0:o.map((u=>Z(u.doubleValue)));return new Nt(e)}convertGeoPoint(t){return new Dt(Z(t.latitude),Z(t.longitude))}convertArray(t,e){return(t.values||[]).map((n=>this.convertValue(n,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=sr(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(on(t));default:return null}}convertTimestamp(t){const e=Ht(t);return new H(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=X.fromString(t);z(Sa(n),9688,{name:t});const i=new an(n.get(1),n.get(3)),o=new k(n.popFirst(5));return i.isEqual(e)||Lt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(r,t,e){let n;return n=r?e&&(e.merge||e.mergeFields)?r.toFirestore(t,e):r.toFirestore(t):t,n}class Ye{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ae extends ou{constructor(t,e,n,i,o,u){super(t,e,n,i,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Bn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(au("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new N(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=ae._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}ae._jsonSchemaVersion="firestore/documentSnapshot/1.0",ae._jsonSchema={type:et("string",ae._jsonSchemaVersion),bundleSource:et("string","DocumentSnapshot"),bundleName:et("string"),bundle:et("string")};class Bn extends ae{data(t={}){return super.data(t)}}class nn{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Ye(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Bn(this._firestore,this._userDataWriter,n.key,n,new Ye(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(i,o){if(i._snapshot.oldDocs.isEmpty()){let u=0;return i._snapshot.docChanges.map((c=>{const f=new Bn(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Ye(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:f,oldIndex:-1,newIndex:u++}}))}{let u=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((c=>o||c.type!==3)).map((c=>{const f=new Bn(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Ye(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,_=-1;return c.type!==0&&(d=u.indexOf(c.doc.key),u=u.delete(c.doc.key)),c.type!==1&&(u=u.add(c.doc),_=u.indexOf(c.doc.key)),{type:pf(c.type),doc:f,oldIndex:d,newIndex:_}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new N(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=nn._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=os.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],i=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),n.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function pf(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(r){r=rn(r,ut);const t=rn(r.firestore,ks);return ef(Ja(t),r._key).then((e=>Ef(t,r,e)))}nn._jsonSchemaVersion="firestore/querySnapshot/1.0",nn._jsonSchema={type:et("string",nn._jsonSchemaVersion),bundleSource:et("string","QuerySnapshot"),bundleName:et("string"),bundle:et("string")};class _f extends mf{constructor(t){super(),this.firestore=t}convertBytes(t){return new wt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ut(this.firestore,null,e)}}function Rf(r,t,e){r=rn(r,ut);const n=rn(r.firestore,ks),i=gf(r.converter,t,e);return yf(n,[lf(uf(n),"setDoc",r._key,i,r.converter!==null,e).toMutation(r._key,Mt.none())])}function yf(r,t){return(function(n,i){const o=new Qt;return n.asyncQueue.enqueueAndForget((async()=>jh(await Zh(n),i,o))),o.promise})(Ja(r),t)}function Ef(r,t,e){const n=e.docs.get(t._key),i=new _f(r);return new ae(r,i,t._key,n,new Ye(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){Se=i})(Yu),Ju(new Zu("firestore",((n,{instanceIdentifier:i,options:o})=>{const u=n.getProvider("app").getImmediate(),c=new ks(new rl(n.getProvider("auth-internal")),new ol(u,n.getProvider("app-check-internal")),(function(d,_){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new N(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new an(d.options.projectId,_)})(u,i),u);return o={useFetchStreams:e,...o},c._setSettings(o),c}),"PUBLIC").setMultipleInstances(!0)),Li(Ui,qi,t),Li(Ui,qi,"esm2020")})();export{mf as AbstractUserDataWriter,wt as Bytes,hn as CollectionReference,ut as DocumentReference,ae as DocumentSnapshot,xs as FieldPath,Za as FieldValue,ks as Firestore,N as FirestoreError,Dt as GeoPoint,Ns as Query,Bn as QueryDocumentSnapshot,nn as QuerySnapshot,Ye as SnapshotMetadata,H as Timestamp,Nt as VectorValue,os as _AutoId,ht as _ByteString,an as _DatabaseId,k as _DocumentKey,el as _EmptyAuthCredentialsProvider,ct as _FieldPath,rn as _cast,ve as _logWarn,fl as _validateIsNotUsedTogether,nf as connectFirestoreEmulator,vf as doc,Ja as ensureFirestoreConfigured,yf as executeWrite,wf as getDoc,Af as getFirestore,Rf as setDoc};
