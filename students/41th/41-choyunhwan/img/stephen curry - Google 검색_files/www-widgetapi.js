(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var p;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ea(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ea(this);function t(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
t("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ia(a){if(!(a instanceof Array)){a=u(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ja(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ka="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ja(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||ka});
var la="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ma;
if("function"==typeof Object.setPrototypeOf)ma=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},pa={};try{pa.__proto__=oa;na=pa.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var qa=ma;
function v(a,b){a.prototype=la(b.prototype);a.prototype.constructor=a;if(qa)qa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.R=b.prototype}
function sa(){this.u=!1;this.l=null;this.i=void 0;this.h=1;this.o=this.m=0;this.H=this.j=null}
function ta(a){if(a.u)throw new TypeError("Generator is already running");a.u=!0}
sa.prototype.C=function(a){this.i=a};
function va(a,b){a.j={Sa:b,Ya:!0};a.h=a.m||a.o}
sa.prototype.return=function(a){this.j={return:a};this.h=this.o};
function x(a,b,c){a.h=c;return{value:b}}
sa.prototype.s=function(a){this.h=a};
function wa(a,b,c){a.m=b;void 0!=c&&(a.o=c)}
function xa(a,b){a.h=b;a.m=0}
function za(a){a.m=0;var b=a.j.Sa;a.j=null;return b}
function Aa(a){a.H=[a.j];a.m=0;a.o=0}
function Ba(a){var b=a.H.splice(0)[0];(b=a.j=a.j||b)?b.Ya?a.h=a.m||a.o:void 0!=b.s&&a.o<b.s?(a.h=b.s,a.j=null):a.h=a.o:a.h=0}
function Ca(a){this.h=new sa;this.i=a}
function Da(a,b){ta(a.h);var c=a.h.l;if(c)return Ea(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Fa(a)}
function Ea(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.u=!1,e;var f=e.value}catch(g){return a.h.l=null,va(a.h,g),Fa(a)}a.h.l=null;d.call(a.h,f);return Fa(a)}
function Fa(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.u=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,va(a.h,c)}a.h.u=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.Ya)throw b.Sa;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ga(a){this.next=function(b){ta(a.h);a.h.l?b=Ea(a,a.h.l.next,b,a.h.C):(a.h.C(b),b=Fa(a));return b};
this.throw=function(b){ta(a.h);a.h.l?b=Ea(a,a.h.l["throw"],b,a.h.C):(va(a.h,b),b=Fa(a));return b};
this.return=function(b){return Da(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ha(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function y(a){return Ha(new Ga(new Ca(a)))}
function Ia(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
t("Reflect.setPrototypeOf",function(a){return a?a:qa?function(b,c){try{return qa(b,c),!0}catch(d){return!1}}:null});
t("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.u=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.o()})}this.h.push(g)};
var e=fa.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.o=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.Ga),reject:g(this.o)}};
b.prototype.Ga=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ib(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.Fa(g):this.m(g)}};
b.prototype.Fa=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}"function"==typeof h?this.jb(h,g):this.m(g)};
b.prototype.o=function(g){this.C(2,g)};
b.prototype.m=function(g){this.C(1,g)};
b.prototype.C=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.Ha();this.H()};
b.prototype.Ha=function(){var g=this;e(function(){if(g.W()){var h=fa.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.W=function(){if(this.u)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.H=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.ib=function(g){var h=this.l();g.ta(h.resolve,h.reject)};
b.prototype.jb=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,q){return"function"==typeof r?function(w){try{l(r(w))}catch(z){m(z)}}:q}
var l,m,n=new b(function(r,q){l=r;m=q});
this.ta(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.ta=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).ta(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(w){return function(z){r[w]=z;q--;0==q&&l(r)}}
var r=[],q=0;do r.push(void 0),q++,d(k.value).ta(n(r.length-1),m),k=h.next();while(!k.done)})};
return b});
t("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ja(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ja(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&ja(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.h)?delete k[g][this.h]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return ha(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.data_[l];if(m&&ja(h.data_,l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.entry),this.h.previous.next=l.entry,this.h.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ja(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
t("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
t("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
t("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
t("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
function Ka(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Ka(this,function(b,c){return[b,c]})}});
t("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
t("Array.prototype.keys",function(a){return a?a:function(){return Ka(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Ka(this,function(b,c){return c})}});
t("Array.prototype.fill",function(a){return a?a:function(b,c,d){var e=this.length||0;0>c&&(c=Math.max(0,e+c));if(null==d||d>e)d=e;d=Number(d);0>d&&(d=Math.max(0,e+d));for(c=Number(c||0);c<d;c++)this[c]=b;return this}});
function La(a){return a?a:Array.prototype.fill}
t("Int8Array.prototype.fill",La);t("Uint8Array.prototype.fill",La);t("Uint8ClampedArray.prototype.fill",La);t("Int16Array.prototype.fill",La);t("Uint16Array.prototype.fill",La);t("Int32Array.prototype.fill",La);t("Uint32Array.prototype.fill",La);t("Float32Array.prototype.fill",La);t("Float64Array.prototype.fill",La);t("Object.setPrototypeOf",function(a){return a||qa});
t("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push([d,b[d]]);return c}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ja(this,b,"includes").indexOf(b,c||0)}});
var A=this||self;function B(a,b,c){a=a.split(".");c=c||A;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function C(a,b){a=a.split(".");b=b||A;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Oa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Pa(a){var b=Oa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Qa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ra(a){return Object.prototype.hasOwnProperty.call(a,Sa)&&a[Sa]||(a[Sa]=++Ta)}
var Sa="closure_uid_"+(1E9*Math.random()>>>0),Ta=0;function Ua(a,b,c){return a.call.apply(a.bind,arguments)}
function Va(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Wa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Wa=Ua:Wa=Va;return Wa.apply(null,arguments)}
function E(a,b){function c(){}
c.prototype=b.prototype;a.R=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Zb=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Xa(a){return a}
;function Ya(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Ya);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
E(Ya,Error);Ya.prototype.name="CustomError";function Za(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function ab(){}
function bb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var cb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},F=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},db=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},eb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
F(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function fb(a,b){b=cb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function gb(a){return Array.prototype.concat.apply([],arguments)}
function hb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function ib(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Pa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function jb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function kb(a){var b=lb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function mb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function nb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=nb(a[c]);return b}
var pb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<pb.length;f++)c=pb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var rb;function sb(){}
function tb(a){return new sb(ub,a)}
var ub={};tb("");var Ab=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Bb=/&/g,Cb=/</g,Db=/>/g,Eb=/"/g,Fb=/'/g,Gb=/\x00/g,Hb=/[\x00&<>"']/;function Ib(a,b){this.h=b===Jb?a:""}
Ib.prototype.toString=function(){return this.h.toString()};
var Jb={},Kb=new Ib("about:invalid#zClosurez",Jb);function Lb(){var a=A.navigator;return a&&(a=a.userAgent)?a:""}
function G(a){return-1!=Lb().indexOf(a)}
;function Mb(){return(G("Chrome")||G("CriOS"))&&!G("Edge")||G("Silk")}
;var Nb={};function Ob(a){this.h=Nb===Nb?a:""}
Ob.prototype.toString=function(){return this.h.toString()};var Pb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Qb(a){return a?decodeURI(a):a}
function Rb(a){return Qb(a.match(Pb)[3]||null)}
function Sb(a){var b=a.match(Pb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function Tb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Tb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Yb(a){var b=[],c;for(c in a)Tb(c,a[c],b);return b.join("&")}
var Zb=/#|$/;function $b(a,b){var c=a.search(Zb);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}
;function ac(a){A.setTimeout(function(){throw a;},0)}
;function bc(){return G("iPhone")&&!G("iPod")&&!G("iPad")}
;function cc(a){cc[" "](a);return a}
cc[" "]=function(){};var dc=G("Opera"),ec=G("Trident")||G("MSIE"),fc=G("Edge"),gc=G("Gecko")&&!(-1!=Lb().toLowerCase().indexOf("webkit")&&!G("Edge"))&&!(G("Trident")||G("MSIE"))&&!G("Edge"),hc=-1!=Lb().toLowerCase().indexOf("webkit")&&!G("Edge");function ic(){var a=A.document;return a?a.documentMode:void 0}
var jc;a:{var kc="",lc=function(){var a=Lb();if(gc)return/rv:([^\);]+)(\)|;)/.exec(a);if(fc)return/Edge\/([\d\.]+)/.exec(a);if(ec)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(hc)return/WebKit\/(\S+)/.exec(a);if(dc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
lc&&(kc=lc?lc[1]:"");if(ec){var mc=ic();if(null!=mc&&mc>parseFloat(kc)){jc=String(mc);break a}}jc=kc}var nc=jc,oc;if(A.document&&ec){var pc=ic();oc=pc?pc:parseInt(nc,10)||void 0}else oc=void 0;var qc=oc;var rc=bc()||G("iPod"),sc=G("iPad");!G("Android")||Mb();Mb();var uc=G("Safari")&&!(Mb()||G("Coast")||G("Opera")||G("Edge")||G("Edg/")||G("OPR")||G("Firefox")||G("FxiOS")||G("Silk")||G("Android"))&&!(bc()||G("iPad")||G("iPod"));var vc={},wc=null;function xc(a,b){Pa(a);void 0===b&&(b=0);yc();b=vc[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function zc(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;Ac(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Ac(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=wc[l];if(null!=m)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
yc();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function yc(){if(!wc){wc={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));vc[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===wc[f]&&(wc[f]=e)}}}}
;var Bc="undefined"!==typeof Uint8Array;function Cc(a){return Bc&&null!=a&&a instanceof Uint8Array}
var Dc={};var Ec;function Fc(){if(Dc!==Dc)throw Error("illegal external caller");}
function Gc(a){Fc();this.na=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
Gc.prototype.ya=function(){return null==this.na};
Gc.prototype.sizeBytes=function(){Fc();var a=this.na;null==a||Cc(a)||("string"===typeof a?a=zc(a):(Oa(a),a=null));return(a=null==a?a:this.na=a)?a.length:0};var Hc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;function Ic(a,b){if(Hc)return a[Hc]|=b;if(void 0!==a.O)return a.O|=b;Object.defineProperties(a,{O:{value:b,configurable:!0,writable:!0,enumerable:!1}});return b}
function Jc(a,b){Hc?a[Hc]&&(a[Hc]&=~b):void 0!==a.O&&(a.O&=~b)}
function H(a){var b;Hc?b=a[Hc]:b=a.O;return null==b?0:b}
function Kc(a,b){Hc?a[Hc]=b:void 0!==a.O?a.O=b:Object.defineProperties(a,{O:{value:b,configurable:!0,writable:!0,enumerable:!1}})}
function Lc(a){Ic(a,1);return a}
function Pc(a){return!!(H(a)&2)}
function Qc(a){Ic(a,16);return a}
function Rc(a,b){Kc(b,(a|0)&-51)}
function Sc(a,b){Kc(b,(a|18)&-41)}
;var Tc={};function Uc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Vc,Wc,Xc=[];Kc(Xc,23);Wc=Object.freeze(Xc);function Yc(a){if(Pc(a.v))throw Error("Cannot mutate an immutable Message");}
function Zc(a){var b=a.length;(b=b?a[b-1]:void 0)&&Uc(b)?b.g=1:(b={},a.push((b.g=1,b)))}
;var $c;function ad(a){return a.displayName||a.name||"unknown type name"}
function bd(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+ad(b)+" but got "+(a&&ad(a.constructor)));return a}
;function cd(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a)if(Array.isArray(a)){if(0!==(H(a)&128))return a=Array.prototype.slice.call(a),Zc(a),a}else{if(Cc(a))return xc(a);if(a instanceof Gc){var b=a.na;return null==b?"":"string"===typeof b?b:a.na=xc(b)}}}return a}
;function dd(a,b,c,d){if(null!=a){if(Array.isArray(a))a=ed(a,b,c,void 0!==d);else if(Uc(a)){var e={},f;for(f in a)e[f]=dd(a[f],b,c,d);a=e}else a=b(a,d);return a}}
function ed(a,b,c,d){var e=H(a);d=d?!!(e&16):void 0;a=Array.prototype.slice.call(a);for(var f=0;f<a.length;f++)a[f]=dd(a[f],b,c,d);c(e,a);return a}
function fd(a){return a.za===Tc?a.toJSON():cd(a)}
function gd(a){if(!a)return a;if("object"===typeof a){if(Cc(a))return new Uint8Array(a);if(a.za===Tc)return a.clone()}return a}
function hd(a,b){a&128&&Zc(b)}
;function id(a){var b=a.i+a.X;return a.I||(a.I=a.v[b]={})}
function jd(a,b,c){return-1===b?null:b>=a.i?a.I?a.I[b]:void 0:c&&a.I&&(c=a.I[b],null!=c)?c:a.v[b+a.X]}
function I(a,b,c,d){Yc(a);return kd(a,b,c,d)}
function kd(a,b,c,d){a.j&&(a.j=void 0);if(b>=a.i||d)return id(a)[b]=c,a;a.v[b+a.X]=c;(c=a.I)&&b in c&&delete c[b];return a}
function ld(a,b){a&&Pc(b.v)&&Pc(a.v);return a}
function md(a,b,c,d,e){var f=jd(a,b,d);Array.isArray(f)||(f=Wc);var g=H(f);g&1||Lc(f);if(e)g&2||Ic(f,2),c&1||Object.freeze(f);else{e=!(c&2);var h=g&2;c&1||!h?e&&g&16&&!h&&Jc(f,16):(f=Lc(Array.prototype.slice.call(f)),kd(a,b,f,d))}return f}
function nd(a,b,c,d){Yc(a);(c=od(a,c))&&c!==b&&null!=d&&kd(a,c,void 0,!1);kd(a,b,d)}
function od(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=jd(a,e)&&(0!==c&&kd(a,c,void 0,!1),c=e)}return c}
function pd(a,b,c){var d=void 0===d?!1:d;var e=jd(a,c,d);var f=!1;var g=null==e||"object"!==typeof e||(f=Array.isArray(e))||e.za!==Tc?f?new b(e):void 0:e;g!==e&&null!=g&&(kd(a,c,g,d),Ic(g.v,H(a.v)&18));b=ld(g,a);if(null==b)return b;Pc(a.v)||(e=qd(b),e!==b&&(b=e,kd(a,c,b,d)));return ld(b,a)}
function rd(a,b,c,d,e,f){a.h||(a.h={});var g=a.h[c],h=md(a,c,3,d,f);if(!g){var k=h;g=[];var l=!!(H(a.v)&16);h=Pc(k);var m=k;!f&&h&&(k=Array.prototype.slice.call(k));for(var n=h,r=0;r<k.length;r++){var q=k[r];var w=b,z=!1;z=void 0===z?!1:z;q=Array.isArray(q)?new w(q):z?new w:void 0;if(void 0!==q){w=q.v;var D=z=H(w);h&&(D|=2);l&&(D|=16);D!=z&&Kc(w,D);w=D;n=n||!!(2&w);g.push(q)}}a.h[c]=g;b=k;k=!n;n=H(b);l=n|33;k=k?l|8:l&-9;n!=k&&(Object.isFrozen(b)&&(b=Array.prototype.slice.call(b)),Kc(b,k));k=b;m!==
k&&kd(a,c,k,d);(f||e&&h)&&Ic(g,2);(f||e)&&Object.freeze(g);return g}f||(Object.isFrozen(g)?e||(g=Array.prototype.slice.call(g),a.h[c]=g):e&&Object.freeze(g));return g}
function J(a,b,c,d){Yc(a);null!=d?bd(d,b):d=void 0;return kd(a,c,d)}
function sd(a,b,c,d,e){Yc(a);null!=e?bd(e,b):e=void 0;nd(a,c,d,e)}
function td(a,b,c,d,e){Yc(a);if(null!=d){var f=Lc([]);for(var g=!1,h=0;h<d.length;h++)f[h]=bd(d[h],b).v,g=g||Pc(f[h]);a.h||(a.h={});a.h[c]=d;b=f;g?Jc(b,8):Ic(b,8)}else a.h&&(a.h[c]=void 0),f=Wc;return kd(a,c,f,e)}
function ud(a,b,c,d){Yc(a);var e=rd(a,c,b,void 0,!1,!1);c=null!=d?bd(d,c):new c;a=md(a,b,2,void 0,!1);e.push(c);a.push(c.v);Pc(c.v)&&Jc(a,8)}
function vd(a,b){return jd(a,b)}
function wd(a,b){a=jd(a,b);return null==a?"":a}
;function xd(a,b,c){c=void 0===c?Sc:c;if(null!=a){if(Bc&&a instanceof Uint8Array)return a.length?new Gc(new Uint8Array(a)):Ec||(Ec=new Gc(null));if(Array.isArray(a)){var d=H(a);if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return Kc(a,d|2),a;a=ed(a,xd,c,!0);b=H(a);b&4&&b&2&&Object.freeze(a);return a}return a.za===Tc?yd(a):a}}
function zd(a,b,c,d,e,f,g){(a=a.h&&a.h[c])?(d=0<a.length?a[0].constructor:void 0,f=H(a),f&2||(a=db(a,yd),Sc(f,a),Object.freeze(a)),td(b,d,c,a,e)):I(b,c,xd(d,f,g),e)}
function yd(a){if(Pc(a.v))return a;a=Ad(a,!0);Ic(a.v,2);return a}
function Ad(a,b){var c=a.v,d=Qc([]),e=a.constructor.h;e&&d.push(e);e=a.I;if(e){d.length=c.length;d.fill(void 0,d.length,c.length);var f={};d[d.length-1]=f}0!==(H(c)&128)&&Zc(d);b=b||Pc(a.v)?Sc:Rc;var g=a.constructor;H(d);$c=d;d=new g(d);$c=void 0;a.ja&&(d.ja=a.ja.slice());g=!!(H(c)&16);for(var h=e?c.length-1:c.length,k=0;k<h;k++)zd(a,d,k-a.X,c[k],!1,g,b);if(e)for(var l in e)c=e[l],h=+l,Number.isNaN(h)?f[h]=c:zd(a,d,h,c,!0,g,b);return d}
;function L(a,b,c){null==a&&(a=$c);$c=void 0;var d=this.constructor.i||0,e=0<d,f=this.constructor.h,g=!1;if(null==a){a=f?[f]:[];var h=!0;Kc(a,48)}else{if(!Array.isArray(a))throw Error();if(f&&f!==a[0])throw Error();var k=Ic(a,0),l=k;if(h=0!==(16&l))(g=0!==(32&l))||(l|=32);if(e)if(128&l)d=0;else{if(0<a.length){var m=a[a.length-1];if(Uc(m)&&"g"in m){d=0;l|=128;delete m.g;var n=!0,r;for(r in m){n=!1;break}n&&a.pop()}}}else if(128&l)throw Error();k!==l&&Kc(a,l)}this.X=(f?0:-1)-d;this.h=void 0;this.v=a;
a:{f=this.v.length;d=f-1;if(f&&(f=this.v[d],Uc(f))){this.I=f;this.i=d-this.X;break a}void 0!==b&&-1<b?(this.i=Math.max(b,d+1-this.X),this.I=void 0):this.i=Number.MAX_VALUE}if(!e&&this.I&&"g"in this.I)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(c){b=h&&!g&&!0;e=this.i;var q;for(h=0;h<c.length;h++)g=c[h],g<e?(g+=this.X,(d=a[g])?Bd(d,b):a[g]=Wc):(q||(q=id(this)),(d=q[g])?Bd(d,b):q[g]=Wc)}}
L.prototype.toJSON=function(){var a=this.v,b;Vc?b=a:b=ed(a,fd,hd);return b};
function Cd(a){Vc=!0;try{return JSON.stringify(a.toJSON(),Dd)}finally{Vc=!1}}
L.prototype.clone=function(){var a=ed(this.v,gd,Rc);Qc(a);$c=a;a=new this.constructor(a);$c=void 0;Ed(a,this);return a};
function qd(a){if(Pc(a.v)){var b=Ad(a,!1);b.j=a;a=b}return a}
function Bd(a,b){if(Array.isArray(a)){var c=H(a),d=1;!b||c&2||(d|=16);(c&d)!==d&&Kc(a,c|d)}}
L.prototype.za=Tc;L.prototype.toString=function(){return this.v.toString()};
function Dd(a,b){return cd(b)}
function Ed(a,b){b.ja&&(a.ja=b.ja.slice());var c=b.h;if(c){b=b.I;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length){var h=a,k=e[0].constructor,l=Pc(h.v);k=rd(h,k,g,f,l,l);f=md(h,g,3,f,l);if(!(l||H(f)&8)){for(l=0;l<k.length;l++)g=k[l],h=qd(g),g!==h&&(k[l]=h,f[l]=k[l].v);Ic(f,8)}for(l=0;l<Math.min(k.length,e.length);l++)Ed(k[l],e[l])}}else throw Error("unexpected object: type: "+Oa(e)+": "+e);}}}}
;var Fd=window;tb("csi.gstatic.com");tb("googleads.g.doubleclick.net");tb("partner.googleadservices.com");tb("pubads.g.doubleclick.net");tb("securepubads.g.doubleclick.net");tb("tpc.googlesyndication.com");function Gd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
p=Gd.prototype;p.clone=function(){return new Gd(this.x,this.y)};
p.equals=function(a){return a instanceof Gd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
p.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
p.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
p.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Hd(a,b){this.width=a;this.height=b}
p=Hd.prototype;p.clone=function(){return new Hd(this.width,this.height)};
p.aspectRatio=function(){return this.width/this.height};
p.ya=function(){return!(this.width*this.height)};
p.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
p.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
p.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Id(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Jd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Kd(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||A.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Ld(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Md[c])c=Md[c];else{c=String(c);if(!Md[c]){var f=/function\s+([^\(]+)/m.exec(c);Md[c]=f?f[1]:"[Anonymous]"}c=Md[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Ld(a,b){b||(b={});b[Nd(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Nd(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Ld(a,b));return c}
function Nd(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Md={};/*

 SPDX-License-Identifier: Apache-2.0
*/
var Od;try{new URL("s://g"),Od=!0}catch(a){Od=!1}var Pd=Od;function Qd(a,b){a.removeAttribute("srcdoc");if(b instanceof Ib)b instanceof Ib&&b.constructor===Ib?b=b.h:(Oa(b),b="type_error:SafeUrl");else{b:if(Pd){try{var c=new URL(b)}catch(d){c="https:";break b}c=c.protocol}else c:{c=document.createElement("a");try{c.href=b}catch(d){c=void 0;break c}c=c.protocol;c=":"===c||""===c?"https:":c}b="javascript:"!==c?b:void 0}void 0!==b&&(a.src=b);for(b="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");0<
a.sandbox.length;)a.sandbox.remove(a.sandbox.item(0));for(c=0;c<b.length;c++)a.sandbox.supports&&!a.sandbox.supports(b[c])||a.sandbox.add(b[c])}
;function Rd(a){this.yb=a}
function Sd(a){return new Rd(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Td=[Sd("data"),Sd("http"),Sd("https"),Sd("mailto"),Sd("ftp"),new Rd(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function Ud(a,b){b=void 0===b?Td:b;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof Rd&&d.yb(a))return new Ib(a,Jb)}}
function Xd(a){var b=void 0===b?Td:b;return Ud(a,b)||Kb}
;function Yd(a){var b=Zd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function $d(){var a=[];Yd(function(b){a.push(b)});
return a}
var Zd={Hb:"allow-forms",Ib:"allow-modals",Jb:"allow-orientation-lock",Kb:"allow-pointer-lock",Lb:"allow-popups",Mb:"allow-popups-to-escape-sandbox",Nb:"allow-presentation",Ob:"allow-same-origin",Pb:"allow-scripts",Qb:"allow-top-navigation",Rb:"allow-top-navigation-by-user-activation"},ae=bb(function(){return $d()});
function be(){var a=ce(),b={};F(ae(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function ce(){var a=void 0===a?document:a;return a.createElement("iframe")}
;var de=(new Date).getTime();function ee(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;var fe="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ia(fe);function ge(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var r=g,q=0;64>q;q+=4)r[q/4]=n[q]<<24|n[q+1]<<16|n[q+2]<<8|n[q+3];for(q=16;80>q;q++)n=r[q-3]^r[q-8]^r[q-14]^r[q-16],r[q]=(n<<1|n>>>31)&4294967295;n=e[0];var w=e[1],z=e[2],D=e[3],K=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var M=D^w&(z^D);var O=1518500249}else M=w^z^D,O=1859775393;else 60>q?(M=w&z|D&(w|z),O=2400959708):(M=w^z^D,O=3395469782);M=((n<<5|n>>>27)&4294967295)+M+K+O+r[q]&4294967295;K=D;D=z;z=(w<<30|w>>>2)&4294967295;w=n;n=M}e[0]=e[0]+n&4294967295;e[1]=e[1]+w&4294967295;e[2]=
e[2]+z&4294967295;e[3]=e[3]+D&4294967295;e[4]=e[4]+K&4294967295}
function c(n,r){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var q=[],w=0,z=n.length;w<z;++w)q.push(n.charCodeAt(w));n=q}r||(r=n.length);q=0;if(0==l)for(;q+64<r;)b(n.slice(q,q+64)),q+=64,m+=64;for(;q<r;)if(f[l++]=n[q++],m++,64==l)for(l=0,b(f);q+64<r;)b(n.slice(q,q+64)),q+=64,m+=64}
function d(){var n=[],r=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=r&255,r>>>=8;b(f);for(q=r=0;5>q;q++)for(var w=24;0<=w;w-=8)n[r++]=e[q]>>w&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,ob:function(){for(var n=d(),r="",q=0;q<n.length;q++)r+="0123456789ABCDEF".charAt(Math.floor(n[q]/16))+"0123456789ABCDEF".charAt(n[q]%16);return r}}}
;function he(a,b,c){var d=String(A.location.href);return d&&a&&b?[b,ie(ee(d),a,c||null)].join(" "):null}
function ie(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],F(d,function(h){e.push(h)}),je(e.join(" "));
var f=[],g=[];F(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];F(d,function(h){e.push(h)});
a=je(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function je(a){var b=ge();b.update(a);return b.ob().toLowerCase()}
;var ke={};function le(a){this.h=a||{cookie:""}}
p=le.prototype;p.isEnabled=function(){if(!A.navigator.cookieEnabled)return!1;if(!this.ya())return!0;this.set("TESTCOOKIESENABLED","1",{Ja:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
p.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.ic;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Ja}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
p.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ab(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
p.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Ja:0,path:b,domain:c});return d};
p.ya=function(){return!this.h.cookie};
p.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Ab(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var me=new le("undefined"==typeof document?null:document);function ne(a){return!!ke.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function oe(a,b,c,d){(a=A[a])||(a=(new le(document)).get(b));return a?he(a,c,d):null}
function pe(a){var b=void 0===b?!1:b;var c=ee(String(A.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=A.__SAPISID||A.__APISID||A.__3PSAPISID||A.__OVERRIDE_SID;ne(e)&&(f=f||A.__1PSAPISID);if(f)e=!0;else{var g=new le(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");ne(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?A.__SAPISID:A.__APISID,e||(e=new le(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?he(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&ne(b)&&((b=oe("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=oe("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function qe(){this.j=this.j;this.o=this.o}
qe.prototype.j=!1;qe.prototype.dispose=function(){this.j||(this.j=!0,this.ca())};
qe.prototype.ca=function(){if(this.o)for(;this.o.length;)this.o.shift()()};function re(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
re.prototype.stopPropagation=function(){this.j=!0};
re.prototype.preventDefault=function(){this.defaultPrevented=!0};var se=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{A.addEventListener("test",function(){},b),A.removeEventListener("test",function(){},b)}catch(c){}return a}();function te(a,b){re.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
E(te,re);var ue={2:"touch",3:"pen",4:"mouse"};
te.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(gc){a:{try{cc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:ue[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&te.R.preventDefault.call(this)};
te.prototype.stopPropagation=function(){te.R.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
te.prototype.preventDefault=function(){te.R.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ve="closure_listenable_"+(1E6*Math.random()|0);var we=0;function xe(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.xa=e;this.key=++we;this.ka=this.sa=!1}
function ye(a){a.ka=!0;a.listener=null;a.proxy=null;a.src=null;a.xa=null}
;function ze(a){this.src=a;this.listeners={};this.h=0}
ze.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Ae(a,b,d,e);-1<g?(b=a[g],c||(b.sa=!1)):(b=new xe(b,this.src,f,!!d,e),b.sa=c,a.push(b));return b};
ze.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Ae(e,b,c,d);return-1<b?(ye(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function Be(a,b){var c=b.type;c in a.listeners&&fb(a.listeners[c],b)&&(ye(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function Ae(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ka&&f.listener==b&&f.capture==!!c&&f.xa==d)return e}return-1}
;var Ce="closure_lm_"+(1E6*Math.random()|0),De={},Ee=0;function Fe(a,b,c,d,e){if(d&&d.once)Ge(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Fe(a,b[f],c,d,e);else c=He(c),a&&a[ve]?a.Y(b,c,Qa(d)?!!d.capture:!!d,e):Ie(a,b,c,!1,d,e)}
function Ie(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Qa(e)?!!e.capture:!!e,h=Je(a);h||(a[Ce]=h=new ze(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Ke();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)se||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Le(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Ee++}}
function Ke(){function a(c){return b.call(a.src,a.listener,c)}
var b=Me;return a}
function Ge(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ge(a,b[f],c,d,e);else c=He(c),a&&a[ve]?a.h.add(String(b),c,!0,Qa(d)?!!d.capture:!!d,e):Ie(a,b,c,!0,d,e)}
function Ne(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ne(a,b[f],c,d,e);else(d=Qa(d)?!!d.capture:!!d,c=He(c),a&&a[ve])?a.h.remove(String(b),c,d,e):a&&(a=Je(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Ae(b,c,d,e)),(c=-1<a?b[a]:null)&&Oe(c))}
function Oe(a){if("number"!==typeof a&&a&&!a.ka){var b=a.src;if(b&&b[ve])Be(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Le(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Ee--;(c=Je(b))?(Be(c,a),0==c.h&&(c.src=null,b[Ce]=null)):ye(a)}}}
function Le(a){return a in De?De[a]:De[a]="on"+a}
function Me(a,b){if(a.ka)a=!0;else{b=new te(b,this);var c=a.listener,d=a.xa||a.src;a.sa&&Oe(a);a=c.call(d,b)}return a}
function Je(a){a=a[Ce];return a instanceof ze?a:null}
var Pe="__closure_events_fn_"+(1E9*Math.random()>>>0);function He(a){if("function"===typeof a)return a;a[Pe]||(a[Pe]=function(b){return a.handleEvent(b)});
return a[Pe]}
;function Qe(){qe.call(this);this.h=new ze(this);this.W=this;this.C=null}
E(Qe,qe);Qe.prototype[ve]=!0;Qe.prototype.addEventListener=function(a,b,c,d){Fe(this,a,b,c,d)};
Qe.prototype.removeEventListener=function(a,b,c,d){Ne(this,a,b,c,d)};
function Re(a,b){var c=a.C;if(c){var d=[];for(var e=1;c;c=c.C)d.push(c),++e}a=a.W;c=b.type||b;"string"===typeof b?b=new re(b,a):b instanceof re?b.target=b.target||a:(e=b,b=new re(c,a),qb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=Se(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Se(g,c,!0,b)&&e,b.j||(e=Se(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Se(g,c,!1,b)&&e}
Qe.prototype.ca=function(){Qe.R.ca.call(this);if(this.h){var a=this.h,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,ye(d[e]);delete a.listeners[c];a.h--}}this.C=null};
Qe.prototype.Y=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
function Se(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ka&&g.capture==c){var h=g.listener,k=g.xa||g.src;g.sa&&Be(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Te(a){Qe.call(this);var b=this;this.H=this.l=0;this.K=null!=a?a:{M:function(e,f){return setTimeout(e,f)},
aa:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.m=function(){return y(function(e){return x(e,Ue(b),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.H||Ve(this)}
v(Te,Qe);function We(){var a=Xe;Te.h||(Te.h=new Te(a));return Te.h}
Te.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.K.aa(this.H);delete Te.h};
Te.prototype.J=function(){return this.i};
function Ve(a){a.H=a.K.M(function(){var b;return y(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.s(3):x(c,Ue(a),3):x(c,Ue(a),3);Ve(a);c.h=0})},3E4)}
function Ue(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return y(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,wa(h,2,3),d&&(a.l=a.K.M(function(){d.abort()},b||2E4)),x(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Aa(h);a.u=void 0;a.l&&(a.K.aa(a.l),a.l=0);g!==a.i&&(a.i=g,a.i?Re(a,"networkstatus-online"):Re(a,"networkstatus-offline"));c(g);Ba(h);break;case 2:za(h),g=!1,h.s(3)}})})}
;function Ye(){this.data_=[];this.h=-1}
Ye.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.h=-1)};
Ye.prototype.get=function(a){return!!this.data_[a]};
function Ze(a){-1===a.h&&(a.h=eb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function $e(a){L.call(this,a,-1,af)}
v($e,L);function bf(a,b){return I(a,2,b)}
function cf(a,b){return I(a,3,b)}
function df(a,b){return I(a,4,b)}
function ef(a,b){return I(a,5,b)}
function ff(a,b){return I(a,9,b)}
function gf(a,b){return td(a,hf,10,b)}
function jf(a,b){return I(a,11,b)}
function kf(a,b){return I(a,1,b)}
function lf(a,b){return I(a,7,b)}
function hf(a){L.call(this,a)}
v(hf,L);var af=[10,6];var mf="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function nf(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}
function of(a){var b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}
function pf(){var a=window;if(!of(a))return null;var b=nf(a);if(b.uach_promise)return b.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(mf).then(function(c){null!=b.uach||(b.uach=c);return c});
return b.uach_promise=a}
function qf(a){var b;return jf(gf(ef(bf(kf(df(lf(ff(cf(new $e,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),(null==(b=a.fullVersionList)?void 0:b.map(function(c){var d=new hf;d=I(d,1,c.brand);return I(d,2,c.version)}))||[]),a.wow64||!1)}
function rf(){var a,b;return null!=(b=null==(a=pf())?void 0:a.then(function(c){return qf(c)}))?b:null}
;function sf(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
sf.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function tf(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var uf;function vf(){var a=A.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!G("Presto")&&(a=function(){var e=Id();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Wa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!G("Trident")&&!G("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Qa;c.Qa=null;e()}};
return function(e){d.next={Qa:e};d=d.next;b.port2.postMessage(0)}}return function(e){A.setTimeout(e,0)}}
;function wf(){this.i=this.h=null}
wf.prototype.add=function(a,b){var c=xf.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
wf.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var xf=new sf(function(){return new yf},function(a){return a.reset()});
function yf(){this.next=this.scope=this.h=null}
yf.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
yf.prototype.reset=function(){this.next=this.scope=this.h=null};var zf,Af=!1,Bf=new wf;function Cf(a,b){zf||Df();Af||(zf(),Af=!0);Bf.add(a,b)}
function Df(){if(A.Promise&&A.Promise.resolve){var a=A.Promise.resolve(void 0);zf=function(){a.then(Ef)}}else zf=function(){var b=Ef;
"function"!==typeof A.setImmediate||A.Window&&A.Window.prototype&&!G("Edge")&&A.Window.prototype.setImmediate==A.setImmediate?(uf||(uf=vf()),uf(b)):A.setImmediate(b)}}
function Ef(){for(var a;a=Bf.remove();){try{a.h.call(a.scope)}catch(b){ac(b)}tf(xf,a)}Af=!1}
;function Ff(a,b){this.h=a[A.Symbol.iterator]();this.i=b}
Ff.prototype[Symbol.iterator]=function(){return this};
Ff.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function Gf(a,b){return new Ff(a,b)}
;function Hf(){this.blockSize=-1}
;function If(){this.blockSize=-1;this.blockSize=64;this.h=[];this.o=[];this.m=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
E(If,Hf);If.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Jf(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
If.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.i;d<b;){if(0==f)for(;d<=c;)Jf(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Jf(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Jf(this,e);f=0;break}}this.i=f;this.l+=b}};
If.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.o[c]=b&255,b/=256;Jf(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Kf(){}
Kf.prototype.next=function(){return Lf};
var Lf={done:!0,value:void 0};function Mf(a){return{value:a,done:!1}}
Kf.prototype.L=function(){return this};function Nf(a){if(a instanceof Of||a instanceof Pf||a instanceof Qf)return a;if("function"==typeof a.next)return new Of(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Of(function(){return a[Symbol.iterator]()});
if("function"==typeof a.L)return new Of(function(){return a.L()});
throw Error("Not an iterator or iterable.");}
function Of(a){this.i=a}
Of.prototype.L=function(){return new Pf(this.i())};
Of.prototype[Symbol.iterator]=function(){return new Qf(this.i())};
Of.prototype.h=function(){return new Qf(this.i())};
function Pf(a){this.i=a}
v(Pf,Kf);Pf.prototype.next=function(){return this.i.next()};
Pf.prototype[Symbol.iterator]=function(){return new Qf(this.i)};
Pf.prototype.h=function(){return new Qf(this.i)};
function Qf(a){Of.call(this,function(){return a});
this.j=a}
v(Qf,Of);Qf.prototype.next=function(){return this.j.next()};function Rf(a,b){this.i={};this.h=[];this.j=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Rf)for(c=Sf(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Sf(a){Tf(a);return a.h.concat()}
p=Rf.prototype;p.has=function(a){return Uf(this.i,a)};
p.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Vf;Tf(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Vf(a,b){return a===b}
p.ya=function(){return 0==this.size};
p.clear=function(){this.i={};this.j=this.size=this.h.length=0};
p.remove=function(a){return this.delete(a)};
p.delete=function(a){return Uf(this.i,a)?(delete this.i[a],--this.size,this.j++,this.h.length>2*this.size&&Tf(this),!0):!1};
function Tf(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Uf(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Uf(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
p.get=function(a,b){return Uf(this.i,a)?this.i[a]:b};
p.set=function(a,b){Uf(this.i,a)||(this.size+=1,this.h.push(a),this.j++);this.i[a]=b};
p.forEach=function(a,b){for(var c=Sf(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
p.clone=function(){return new Rf(this)};
p.keys=function(){return Nf(this.L(!0)).h()};
p.values=function(){return Nf(this.L(!1)).h()};
p.entries=function(){var a=this;return Gf(this.keys(),function(b){return[b,a.get(b)]})};
p.L=function(a){Tf(this);var b=0,c=this.j,d=this,e=new Kf;e.next=function(){if(c!=d.j)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return Lf;var f=d.h[b++];return Mf(a?f:d.i[f])};
return e};
function Uf(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var Wf=A.JSON.stringify;function Xf(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function ug(a){this.h=0;this.u=void 0;this.l=this.i=this.j=null;this.o=this.m=!1;if(a!=ab)try{var b=this;a.call(void 0,function(c){vg(b,2,c)},function(c){vg(b,3,c)})}catch(c){vg(this,3,c)}}
function wg(){this.next=this.context=this.i=this.j=this.h=null;this.l=!1}
wg.prototype.reset=function(){this.context=this.i=this.j=this.h=null;this.l=!1};
var xg=new sf(function(){return new wg},function(a){a.reset()});
function yg(a,b,c){var d=xg.get();d.j=a;d.i=b;d.context=c;return d}
ug.prototype.then=function(a,b,c){return zg(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
ug.prototype.$goog_Thenable=!0;ug.prototype.cancel=function(a){if(0==this.h){var b=new Ag(a);Cf(function(){Bg(this,b)},this)}};
function Bg(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.l||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Bg(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Cg(c),Dg(c,e,3,b)))}a.j=null}else vg(a,3,b)}
function Eg(a,b){a.i||2!=a.h&&3!=a.h||Fg(a);a.l?a.l.next=b:a.i=b;a.l=b}
function zg(a,b,c,d){var e=yg(null,null,null);e.h=new ug(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.i=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Ag?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;Eg(a,e);return e.h}
ug.prototype.H=function(a){this.h=0;vg(this,2,a)};
ug.prototype.W=function(a){this.h=0;vg(this,3,a)};
function vg(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.H,f=a.W;if(d instanceof ug){Eg(d,yg(e||ab,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Qa(d))try{var k=d.then;if("function"===typeof k){Gg(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.u=c,a.h=b,a.j=null,Fg(a),3!=b||c instanceof Ag||Hg(a,c))}}
function Gg(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Fg(a){a.m||(a.m=!0,Cf(a.C,a))}
function Cg(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
ug.prototype.C=function(){for(var a;a=Cg(this);)Dg(this,a,this.h,this.u);this.m=!1};
function Dg(a,b,c,d){if(3==c&&b.i&&!b.l)for(;a&&a.o;a=a.j)a.o=!1;if(b.h)b.h.j=null,Ig(b,c,d);else try{b.l?b.j.call(b.context):Ig(b,c,d)}catch(e){Jg.call(null,e)}tf(xg,b)}
function Ig(a,b,c){2==b?a.j.call(a.context,c):a.i&&a.i.call(a.context,c)}
function Hg(a,b){a.o=!0;Cf(function(){a.o&&Jg.call(null,b)})}
var Jg=ac;function Ag(a){Ya.call(this,a)}
E(Ag,Ya);Ag.prototype.name="cancel";function N(a){qe.call(this);this.u=1;this.l=[];this.m=0;this.h=[];this.i={};this.C=!!a}
E(N,qe);p=N.prototype;p.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
function Kg(a,b,c){var d=Lg;if(a=d.i[a]){var e=d.h;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.ma(a)}}
p.ma=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.m?(this.l.push(a),this.h[a+1]=function(){}):(c&&fb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
p.fa=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.C)for(e=0;e<c.length;e++){var g=c[e];Mg(this.h[g+1],this.h[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.j;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.ma(c)}}return 0!=e}return!1};
function Mg(a,b,c){Cf(function(){a.apply(b,c)})}
p.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.ma,this),delete this.i[a])}else this.h.length=0,this.i={}};
p.ca=function(){N.R.ca.call(this);this.clear();this.l.length=0};function Ng(a){this.h=a}
Ng.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Wf(b))};
Ng.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Ng.prototype.remove=function(a){this.h.remove(a)};function Og(a){this.h=a}
E(Og,Ng);function Pg(a){this.data=a}
function Qg(a){return void 0===a||a instanceof Pg?a:new Pg(a)}
Og.prototype.set=function(a,b){Og.R.set.call(this,a,Qg(b))};
Og.prototype.i=function(a){a=Og.R.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Og.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Rg(a){this.h=a}
E(Rg,Og);Rg.prototype.set=function(a,b,c){if(b=Qg(b)){if(c){if(c<Date.now()){Rg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Rg.R.set.call(this,a,b)};
Rg.prototype.i=function(a){var b=Rg.R.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Rg.prototype.remove.call(this,a);else return b}};function Sg(){}
;function Tg(){}
E(Tg,Sg);Tg.prototype[Symbol.iterator]=function(){return Nf(this.L(!0)).h()};
Tg.prototype.clear=function(){var a=Array.from(this);a=u(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Ug(a){this.h=a}
E(Ug,Tg);p=Ug.prototype;p.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
p.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
p.remove=function(a){this.h.removeItem(a)};
p.L=function(a){var b=0,c=this.h,d=new Kf;d.next=function(){if(b>=c.length)return Lf;var e=c.key(b++);if(a)return Mf(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Mf(e)};
return d};
p.clear=function(){this.h.clear()};
p.key=function(a){return this.h.key(a)};function Vg(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
E(Vg,Ug);function Wg(a,b){this.i=a;this.h=null;var c;if(c=ec)c=!(9<=Number(qc));if(c){Xg||(Xg=new Rf);this.h=Xg.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Xg.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
E(Wg,Tg);var Yg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Xg=null;function Zg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Yg[b]})}
p=Wg.prototype;p.set=function(a,b){this.h.setAttribute(Zg(a),b);$g(this)};
p.get=function(a){a=this.h.getAttribute(Zg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
p.remove=function(a){this.h.removeAttribute(Zg(a));$g(this)};
p.L=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Kf;d.next=function(){if(b>=c.length)return Lf;var e=c[b++];if(a)return Mf(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Mf(e)};
return d};
p.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);$g(this)};
function $g(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function ah(a,b){this.i=a;this.h=b+"::"}
E(ah,Tg);ah.prototype.set=function(a,b){this.i.set(this.h+a,b)};
ah.prototype.get=function(a){return this.i.get(this.h+a)};
ah.prototype.remove=function(a){this.i.remove(this.h+a)};
ah.prototype.L=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Kf;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return Mf(a?e.slice(c.h.length):c.i.get(e))};
return d};function bh(a){this.name=a}
;var ch=new bh("rawColdConfigGroup");var dh=new bh("rawHotConfigGroup");function eh(a){L.call(this,a)}
v(eh,L);eh.prototype.getKey=function(){return jd(this,1)};
eh.prototype.N=function(){return vd(this,2===od(this,fh)?2:-1)};
var fh=[2,3,4,5,6];function gh(a){L.call(this,a)}
v(gh,L);function hh(a){L.call(this,a)}
v(hh,L);function ih(a){L.call(this,a,-1,jh)}
v(ih,L);var jh=[2];function kh(a){L.call(this,a,-1,lh)}
v(kh,L);kh.prototype.getPlayerType=function(){return jd(this,36)};
kh.prototype.setHomeGroupInfo=function(a){return J(this,ih,81,a)};
var lh=[9,66,24,32,86,100,101];function mh(a){L.call(this,a,-1,nh)}
v(mh,L);var nh=[15,26,28];function oh(a){L.call(this,a,-1,ph)}
v(oh,L);var ph=[5];function qh(a){L.call(this,a)}
v(qh,L);function rh(a){L.call(this,a,-1,sh)}
v(rh,L);rh.prototype.setSafetyMode=function(a){return I(this,5,a)};
var sh=[12];function th(a){L.call(this,a,-1,uh)}
v(th,L);var uh=[12];var vh={Wb:"WEB_DISPLAY_MODE_UNKNOWN",Sb:"WEB_DISPLAY_MODE_BROWSER",Ub:"WEB_DISPLAY_MODE_MINIMAL_UI",Vb:"WEB_DISPLAY_MODE_STANDALONE",Tb:"WEB_DISPLAY_MODE_FULLSCREEN"};function wh(a){L.call(this,a,-1,xh)}
v(wh,L);function yh(a){L.call(this,a)}
v(yh,L);yh.prototype.getKey=function(){return wd(this,1)};
yh.prototype.N=function(){return wd(this,2)};
var xh=[4,5];function zh(a){L.call(this,a)}
v(zh,L);function Ah(a){L.call(this,a)}
v(Ah,L);var Bh=[2,3,4];function Ch(a){L.call(this,a)}
v(Ch,L);function Dh(a){L.call(this,a)}
v(Dh,L);function Eh(a){L.call(this,a)}
v(Eh,L);function Fh(a){L.call(this,a,-1,Gh)}
v(Fh,L);var Gh=[10,17];function Hh(a){L.call(this,a)}
v(Hh,L);function Ih(a){L.call(this,a)}
v(Ih,L);function Jh(a){L.call(this,a)}
v(Jh,L);function Kh(a){L.call(this,a,459)}
v(Kh,L);
var Lh=[23,24,11,6,7,5,2,3,13,20,21,22,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,148,151,157,158,159,163,164,168,444,176,222,383,177,178,179,458,411,184,188,189,190,191,193,194,195,196,197,198,199,200,201,402,320,203,204,205,206,258,259,260,261,327,209,219,226,227,232,233,234,240,244,247,248,249,251,256,257,266,254,255,270,272,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,334,337,338,340,344,348,350,
351,352,353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,388,389,403,410,412,429,413,414,415,416,417,418,430,423,424,425,426,427,431,117,439,441,448];function Mh(a){L.call(this,a)}
v(Mh,L);function Nh(a){L.call(this,a)}
v(Nh,L);Nh.prototype.getPlaylistId=function(){return vd(this,2===od(this,Oh)?2:-1)};
var Oh=[1,2];function Ph(a){L.call(this,a,-1,Qh)}
v(Ph,L);var Qh=[3];var Rh=A.window,Sh,Th,Uh=(null==Rh?void 0:null==(Sh=Rh.yt)?void 0:Sh.config_)||(null==Rh?void 0:null==(Th=Rh.ytcfg)?void 0:Th.data_)||{};B("yt.config_",Uh);function Vh(){var a=arguments;1<a.length?Uh[a[0]]=a[1]:1===a.length&&Object.assign(Uh,a[0])}
function P(a,b){return a in Uh?Uh[a]:b}
function Wh(){return P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function Xh(){var a=Uh.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var Yh=[];function Zh(a){Yh.forEach(function(b){return b(a)})}
function $h(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){ai(b)}}:a}
function ai(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=P("ERRORS",[]),e.push([a,"ERROR",b,c,d]),Vh("ERRORS",e));Zh(a)}
function bi(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=P("ERRORS",[]),e.push([a,"WARNING",b,c,d]),Vh("ERRORS",e))}
;function R(a){a=ci(a);return"string"===typeof a&&"false"===a?!1:!!a}
function di(a,b){a=ci(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function ci(a){var b=P("EXPERIMENTS_FORCED_FLAGS",{})||{};return void 0!==b[a]?b[a]:P("EXPERIMENT_FLAGS",{})[a]}
function ei(){for(var a=[],b=P("EXPERIMENTS_FORCED_FLAGS",{}),c=u(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=P("EXPERIMENT_FLAGS",{});var e=u(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var fi=0;B("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++fi});var gi={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function hi(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in gi||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function ii(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
hi.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
hi.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
hi.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var lb=A.ytEventsEventsListeners||{};B("ytEventsEventsListeners",lb);var ji=A.ytEventsEventsCounter||{count:0};B("ytEventsEventsCounter",ji);
function ki(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return kb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Qa(e[4])&&Qa(d)&&mb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function li(a){a&&("string"==typeof a&&(a=[a]),F(a,function(b){if(b in lb){var c=lb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?mi()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete lb[b]}}))}
var mi=bb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function ni(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=ki(a,b,c,d);if(e)return e;e=++ji.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new hi(h);if(!Jd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new hi(h);
h.currentTarget=a;return c.call(a,h)};
g=$h(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),mi()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);lb[e]=[a,b,c,g,d];return e}
;function oi(a,b){"function"===typeof a&&(a=$h(a));return window.setTimeout(a,b)}
function pi(a,b){"function"===typeof a&&(a=$h(a));return window.setInterval(a,b)}
;var qi=/^[\w.]*$/,ri={q:!0,search_query:!0};function si(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=ti(f[0]||""),h=ti(f[1]||"");g in c?Array.isArray(c[g])?ib(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(n){var k=n,l=f[0],m=String(si);k.args=[{key:l,value:f[1],query:a,method:ui==m?"unchanged":m}];ri.hasOwnProperty(l)||bi(k)}}return c}
var ui=String(si);function vi(a){var b=[];jb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];F(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function wi(a){"?"==a.charAt(0)&&(a=a.substr(1));return si(a,"&")}
function xi(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=wi(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Yb(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function yi(a){if(!b)var b=window.location.href;var c=a.match(Pb)[1]||null,d=Rb(a);c&&d?(a=a.match(Pb),b=b.match(Pb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Rb(b)==d&&(Number(b.match(Pb)[4]||null)||null)==(Number(a.match(Pb)[4]||null)||null):!0;return a}
function ti(a){return a&&a.match(qi)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function zi(a){var b=Ai;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=de;e.flash="0";a:{try{var f=b.h.top.location.href}catch(W){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Fd:g;try{var h=g.history.length}catch(W){h=0}e.u_his=h;var k;e.u_h=null==(k=Fd.screen)?void 0:k.height;var l;e.u_w=null==(l=Fd.screen)?void 0:l.width;var m;e.u_ah=null==(m=Fd.screen)?void 0:m.availHeight;var n;e.u_aw=null==
(n=Fd.screen)?void 0:n.availWidth;var r;e.u_cd=null==(r=Fd.screen)?void 0:r.colorDepth}catch(W){}h=b.h;try{var q=h.screenX;var w=h.screenY}catch(W){}try{var z=h.outerWidth;var D=h.outerHeight}catch(W){}try{var K=h.innerWidth;var M=h.innerHeight}catch(W){}try{var O=h.screenLeft;var ob=h.screenTop}catch(W){}try{K=h.innerWidth,M=h.innerHeight}catch(W){}try{var tc=h.screen.availWidth;var ya=h.screen.availTop}catch(W){}q=[O,ob,q,w,tc,ya,z,D,K,M];w=b.h.top;try{var ra=(w||window).document,X="CSS1Compat"==
ra.compatMode?ra.documentElement:ra.body;var ca=(new Hd(X.clientWidth,X.clientHeight)).round()}catch(W){ca=new Hd(-12245933,-12245933)}ra=ca;ca={};var da=void 0===da?A:da;X=new Ye;da.SVGElement&&da.document.createElementNS&&X.set(0);w=be();w["allow-top-navigation-by-user-activation"]&&X.set(1);w["allow-popups-to-escape-sandbox"]&&X.set(2);da.crypto&&da.crypto.subtle&&X.set(3);da.TextDecoder&&da.TextEncoder&&X.set(4);da=Ze(X);ca.bc=da;ca.bih=ra.height;ca.biw=ra.width;ca.brdim=q.join();b=b.i;b=(ca.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ca.wgl=!!Fd.WebGLRenderingContext,ca);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Ai=new function(){var a=window.document;this.h=window;this.i=a};
B("yt.ads_.signals_.getAdSignalsString",function(a){return vi(zi(a))});Date.now();var Bi="XMLHttpRequest"in A?function(){return new XMLHttpRequest}:null;
function Ci(){if(!Bi)return null;var a=Bi();return"open"in a?a:null}
;var Di={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Ei="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ia(fe)),Fi=!1;
function Gi(a,b){b=void 0===b?{}:b;var c=yi(a),d=R("web_ajax_ignore_global_headers_if_set"),e;for(e in Di){var f=P(Di[e]);"X-Goog-Visitor-Id"!==e||f||(f=P("VISITOR_DATA"));!f||!c&&Rb(a)||d&&void 0!==b[e]||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!Rb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Rb(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}document.location.hostname.endsWith("youtubeeducation.com")||
!c&&Rb(a)||(b["X-YouTube-Ad-Signals"]=vi(zi()));return b}
function Hi(a){var b=window.location.search,c=Rb(a);R("debug_handle_relative_url_for_query_forward_killswitch")||!c&&yi(a)&&(c=document.location.hostname);var d=Qb(a.match(Pb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=wi(b),f={};F(Ei,function(g){e[g]&&(f[g]=e[g])});
return xi(a,f||{},!1)}
function Ii(a,b){var c=b.format||"JSON";a=Ji(a,b);var d=Ki(a,b),e=!1,f=Li(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||n||r)m=Mi(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};n=b.context||A;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=oi(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||A,f))},d)}}
function Ji(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=P("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=xi(a,b||{},!0);return a}
function Ki(a,b){var c=P("XSRF_FIELD_NAME"),d=P("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=P("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Rb(a)&&!b.withCredentials&&Rb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(R("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=wi(e),qb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):Yb(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=!1;break a}f=!0}a=!f}!Fi&&a&&"POST"!=b.method&&(Fi=!0,ai(Error("AJAX request with postData should use POST")));return e}
function Mi(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,bi(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Ni(a):null)e={},F(a.getElementsByTagName("*"),function(g){e[g.tagName]=Oi(g)})}d&&Pi(e);
return e}
function Pi(a){if(Qa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];if(void 0===rb){var e=null;var f=A.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:Xa,createScript:Xa,createScriptURL:Xa})}catch(g){A.console&&A.console.error(g.message)}rb=e}else rb=e}d=(e=rb)?e.createHTML(d):d;a[c]=new Ob(d)}else Pi(a[b])}}
function Ni(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Oi(a){var b="";F(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Li(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&$h(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Ci();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;R("debug_forward_web_query_parameters")&&(a=Hi(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Gi(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Qi=rc||sc;var Ri=[{Ka:function(a){return"Cannot read property '"+a.key+"'"},
Aa:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ka:function(a){return"Cannot call '"+a.key+"'"},
Aa:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ka:function(a){return a.key+" is not defined"},
Aa:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Ti={U:[],T:[{mb:Si,weight:500}]};function Si(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Ui(){this.T=[];this.U=[]}
var Vi;function Wi(){if(!Vi){var a=Vi=new Ui;a.U.length=0;a.T.length=0;Ti.U&&a.U.push.apply(a.U,Ti.U);Ti.T&&a.T.push.apply(a.T,Ti.T)}return Vi}
;var Xi=new N;function Yi(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Zi(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Zi(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Zi(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Zi(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function $i(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=aj(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Yi(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?aj(e+".ve",f,g,h):0;d+=g;d+=aj(e,a[e],b,c);if(500<d)break}}else c[b]=bj(a),d+=c[b].length;else c[b]=bj(a),d+=c[b].length;return d}
function aj(a,b,c,d){c+="."+a;a=bj(b);d[c]=a;return c.length+a.length}
function bj(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function cj(){if(!A.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return A.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":A.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":A.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":A.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;B("ytglobal.prefsUserPrefsPrefs_",C("ytglobal.prefsUserPrefsPrefs_")||{});var dj={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},ej={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},fj={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},gj={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function hj(){var a=A.navigator;return a?a.connection:void 0}
;function ij(){}
function jj(a,b){return kj(a,0,b)}
ij.prototype.M=function(a,b){return kj(a,1,b)};
function lj(a,b){kj(a,2,b)}
;function mj(){ij.apply(this,arguments)}
v(mj,ij);function nj(){mj.h||(mj.h=new mj);return mj.h}
function kj(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):oi(a,c||0)}
mj.prototype.aa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=C("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
mj.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};
var Xe=nj();function oj(a){var b=Ia.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ia(b))}
v(oj,Error);function pj(){try{return qj(),!0}catch(a){return!1}}
function qj(){if(void 0!==P("DATASYNC_ID"))return P("DATASYNC_ID");throw new oj("Datasync ID not set","unknown");}
;function rj(a){var b=new Vg;if(b.h)try{b.h.setItem("__sak","1");b.h.removeItem("__sak");var c=!0}catch(d){c=!1}else c=!1;(b=c?a?new ah(b,a):b:null)||(a=new Wg(a||"UserDataSharedStore"),b=a.h?a:null);this.h=(a=b)?new Rg(a):null;this.i=document.domain||window.location.hostname}
rj.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Wf(b))}catch(f){return}else e=escape(b);b=this.i;me.set(""+a,e,{Ja:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
rj.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=me.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
rj.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;me.remove(""+a,"/",void 0===b?"youtube.com":b)};var sj=function(){var a;return function(){a||(a=new rj("ytidb"));return a}}();
function tj(){var a;return null==(a=sj())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var uj=[],vj=!1;function wj(a){vj||(uj.push({type:"ERROR",payload:a}),10<uj.length&&uj.shift())}
function xj(a,b){vj||(uj.push({type:"EVENT",eventType:a,payload:b}),10<uj.length&&uj.shift())}
;function yj(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function zj(a){return a.substr(0,a.indexOf(":"))||a}
;var Aj={},Bj=(Aj.AUTH_INVALID="No user identifier specified.",Aj.EXPLICIT_ABORT="Transaction was explicitly aborted.",Aj.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Aj.MISSING_INDEX="Index not created.",Aj.MISSING_OBJECT_STORES="Object stores not created.",Aj.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Aj.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Aj.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Aj.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Aj.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Aj.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Aj.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Aj),Cj={},Dj=(Cj.AUTH_INVALID="ERROR",Cj.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Cj.EXPLICIT_ABORT="IGNORED",Cj.IDB_NOT_SUPPORTED="ERROR",Cj.MISSING_INDEX=
"WARNING",Cj.MISSING_OBJECT_STORES="ERROR",Cj.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Cj.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Cj.QUOTA_EXCEEDED="WARNING",Cj.QUOTA_MAYBE_EXCEEDED="WARNING",Cj.UNKNOWN_ABORT="WARNING",Cj.INCOMPATIBLE_DB_VERSION="WARNING",Cj),Ej={},Fj=(Ej.AUTH_INVALID=!1,Ej.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Ej.EXPLICIT_ABORT=!1,Ej.IDB_NOT_SUPPORTED=!1,Ej.MISSING_INDEX=!1,Ej.MISSING_OBJECT_STORES=!1,Ej.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Ej.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Ej.QUOTA_EXCEEDED=!1,Ej.QUOTA_MAYBE_EXCEEDED=!0,Ej.UNKNOWN_ABORT=!0,Ej.INCOMPATIBLE_DB_VERSION=!1,Ej);function T(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Bj[a]:c;d=void 0===d?Dj[a]:d;e=void 0===e?Fj[a]:e;oj.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,T.prototype)}
v(T,oj);function Gj(a,b){T.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Bj.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Gj.prototype)}
v(Gj,T);function Hj(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Hj.prototype)}
v(Hj,Error);var Ij=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Jj(a,b,c,d){b=zj(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof T)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new T("QUOTA_EXCEEDED",a);if(uc&&"UnknownError"===e.name)return new T("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Hj)return new T("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Ij.some(function(f){return e.message.includes(f)}))return new T("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new T("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",fc:e.name})];e.level="WARNING";return e}
function Kj(a,b,c){var d=tj();return new T("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Lj(a){if(!a)throw Error();throw a;}
function Mj(a){return a}
function Nj(a){this.h=a}
function Oj(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Oj.resolve=function(a){return new Oj(new Nj(function(b,c){a instanceof Oj?a.then(b,c):b(a)}))};
Oj.reject=function(a){return new Oj(new Nj(function(b,c){c(a)}))};
Oj.prototype.then=function(a,b){var c=this,d=null!=a?a:Mj,e=null!=b?b:Lj;return new Oj(new Nj(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Pj(c,c,d,f,g)}),c.i.push(function(){Qj(c,c,e,f,g)})):"FULFILLED"===c.state.status?Pj(c,c,d,f,g):"REJECTED"===c.state.status&&Qj(c,c,e,f,g)}))};
function Rj(a,b){a.then(void 0,b)}
function Pj(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Oj?Sj(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Qj(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Oj?Sj(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Sj(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Oj?Sj(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Tj(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Uj(a){return new Promise(function(b,c){Tj(a,b,c)})}
function Vj(a){return new Oj(new Nj(function(b,c){Tj(a,b,c)}))}
;function Wj(a,b){return new Oj(new Nj(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Xj=window,U=Xj.ytcsi&&Xj.ytcsi.now?Xj.ytcsi.now:Xj.performance&&Xj.performance.timing&&Xj.performance.now&&Xj.performance.timing.navigationStart?function(){return Xj.performance.timing.navigationStart+Xj.performance.now()}:function(){return(new Date).getTime()};function Yj(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(U());this.i=!1}
p=Yj.prototype;p.add=function(a,b,c){return V(this,[a],{mode:"readwrite",G:!0},function(d){return d.objectStore(a).add(b,c)})};
p.clear=function(a){return V(this,[a],{mode:"readwrite",G:!0},function(b){return b.objectStore(a).clear()})};
p.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
function Zj(a,b,c){a=a.h.createObjectStore(b,c);return new ak(a)}
p.delete=function(a,b){return V(this,[a],{mode:"readwrite",G:!0},function(c){return c.objectStore(a).delete(b)})};
p.get=function(a,b){return V(this,[a],{mode:"readonly",G:!0},function(c){return c.objectStore(a).get(b)})};
function Pk(a,b,c){return V(a,[b],{mode:"readwrite",G:!0},function(d){d=d.objectStore(b);return Vj(d.h.put(c,void 0))})}
p.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function V(a,b,c,d){var e,f,g,h,k,l,m,n,r,q,w,z;return y(function(D){switch(D.h){case 1:var K={mode:"readonly",G:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?K.mode=c:Object.assign(K,c);e=K;a.transactionCount++;f=e.G?3:1;g=0;case 2:if(h){D.s(3);break}g++;k=Math.round(U());wa(D,4);l=a.h.transaction(b,e.mode);K=new Qk(l);K=Rk(K,d);return x(D,K,6);case 6:return m=D.i,n=Math.round(U()),Sk(a,k,n,g,void 0,b.join(),e),D.return(m);case 4:r=za(D);q=Math.round(U());w=Jj(r,a.h.name,b.join(),a.h.version);
if((z=w instanceof T&&!w.h)||g>=f)Sk(a,k,q,g,w,b.join(),e),h=w;D.s(2);break;case 3:return D.return(Promise.reject(h))}})}
function Sk(a,b,c,d,e,f,g){b=c-b;e?(e instanceof T&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&xj("QUOTA_EXCEEDED",{dbName:zj(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof T&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),xj("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Tk(a,!1,d,f,b,g.tag),wj(e)):Tk(a,!0,d,f,b,g.tag)}
function Tk(a,b,c,d,e,f){xj("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
p.getName=function(){return this.h.name};
function ak(a){this.h=a}
p=ak.prototype;p.add=function(a,b){return Vj(this.h.add(a,b))};
p.autoIncrement=function(){return this.h.autoIncrement};
p.clear=function(){return Vj(this.h.clear()).then(function(){})};
function Uk(a,b,c){a.h.createIndex(b,c,{unique:!1})}
function Vk(a,b){return Wk(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
p.delete=function(a){return a instanceof IDBKeyRange?Vk(this,a):Vj(this.h.delete(a))};
p.get=function(a){return Vj(this.h.get(a))};
p.index=function(a){try{return new Xk(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Hj(a,this.h.name);throw b;}};
p.getName=function(){return this.h.name};
p.keyPath=function(){return this.h.keyPath};
function Wk(a,b,c){a=a.h.openCursor(b.query,b.direction);return Yk(a).then(function(d){return Wj(d,c)})}
function Qk(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=T;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Rk(a,b){var c=new Promise(function(d,e){try{Rj(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
Qk.prototype.abort=function(){this.h.abort();this.i=!0;throw new T("EXPLICIT_ABORT");};
Qk.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new ak(a),this.j.set(a,b));return b};
function Xk(a){this.h=a}
p=Xk.prototype;p.delete=function(a){return Zk(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
p.get=function(a){return Vj(this.h.get(a))};
p.getKey=function(a){return Vj(this.h.getKey(a))};
p.keyPath=function(){return this.h.keyPath};
p.unique=function(){return this.h.unique};
function Zk(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Yk(a).then(function(d){return Wj(d,c)})}
function $k(a,b){this.request=a;this.cursor=b}
function Yk(a){return Vj(a).then(function(b){return b?new $k(a,b):null})}
p=$k.prototype;p.advance=function(a){this.cursor.advance(a);return Yk(this.request)};
p.continue=function(a){this.cursor.continue(a);return Yk(this.request)};
p.delete=function(){return Vj(this.cursor.delete()).then(function(){})};
p.getKey=function(){return this.cursor.key};
p.N=function(){return this.cursor.value};
p.update=function(a){return Vj(this.cursor.update(a))};function al(a,b,c){return new Promise(function(d,e){function f(){r||(r=new Yj(g.result,{closed:n}));return r}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.kb,k=c.lb,l=c.Cb,m=c.upgrade,n=c.closed,r;g.addEventListener("upgradeneeded",function(q){try{if(null===q.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");q.dataLoss&&"none"!==q.dataLoss&&xj("IDB_DATA_CORRUPTED",{reason:q.dataLossMessage||"unknown reason",dbName:zj(a)});var w=f(),z=new Qk(g.transaction);m&&
m(w,function(D){return q.oldVersion<D&&q.newVersion>=D},z);
z.done.catch(function(D){e(D)})}catch(D){e(D)}});
g.addEventListener("success",function(){var q=g.result;k&&q.addEventListener("versionchange",function(){k(f())});
q.addEventListener("close",function(){xj("IDB_UNEXPECTEDLY_CLOSED",{dbName:zj(a),dbVersion:q.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function bl(a,b,c){c=void 0===c?{}:c;return al(a,b,c)}
function cl(a,b){b=void 0===b?{}:b;var c,d,e,f;return y(function(g){if(1==g.h)return wa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.kb)&&c.addEventListener("blocked",function(){e()}),x(g,Uj(c),4);
if(2!=g.h)return xa(g,0);f=za(g);throw Jj(f,a,"",-1);})}
;function dl(a){return new Promise(function(b){lj(function(){b()},a)})}
function el(a,b){this.name=a;this.options=b;this.l=!0;this.m=this.o=0;this.i=500}
el.prototype.j=function(a,b,c){c=void 0===c?{}:c;return bl(a,b,c)};
el.prototype.delete=function(a){a=void 0===a?{}:a;return cl(this.name,a)};
function fl(a,b){return new T("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function gl(a,b){if(!b)throw Kj("openWithToken",zj(a.name));return hl(a)}
function hl(a){function b(){var f,g,h,k,l,m,n,r,q,w;return y(function(z){switch(z.h){case 1:return g=null!=(f=Error().stack)?f:"",wa(z,2),x(z,a.j(a.name,a.options.version,d),4);case 4:h=z.i;for(var D=a.options,K=[],M=u(Object.keys(D.ea)),O=M.next();!O.done;O=M.next()){O=O.value;var ob=D.ea[O],tc=void 0===ob.Bb?Number.MAX_VALUE:ob.Bb;!(h.h.version>=ob.ha)||h.h.version>=tc||h.h.objectStoreNames.contains(O)||K.push(O)}k=K;if(0===k.length){z.s(5);break}l=Object.keys(a.options.ea);m=h.objectStoreNames();
if(a.m<di("ytidb_reopen_db_retries",0))return a.m++,h.close(),wj(new T("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),z.return(b());if(!(a.o<di("ytidb_remake_db_retries",1))){z.s(6);break}a.o++;if(!R("ytidb_remake_db_enable_backoff_delay")){z.s(7);break}return x(z,dl(a.i),8);case 8:a.i*=2;case 7:return x(z,a.delete(),9);case 9:return wj(new T("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),z.return(b());
case 6:throw new Gj(m,l);case 5:return z.return(h);case 2:n=za(z);if(n instanceof DOMException?"VersionError"!==n.name:"DOMError"in self&&n instanceof DOMError?"VersionError"!==n.name:!(n instanceof Object&&"message"in n)||"An attempt was made to open a database using a lower version than the existing version."!==n.message){z.s(10);break}return x(z,a.j(a.name,void 0,Object.assign({},d,{upgrade:void 0})),11);case 11:r=z.i;q=r.h.version;if(void 0!==a.options.version&&q>a.options.version+1)throw r.close(),
a.l=!1,fl(a,q);return z.return(r);case 10:throw c(),n instanceof Error&&!R("ytidb_async_stack_killswitch")&&(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Jj(n,a.name,"",null!=(w=a.options.version)?w:-1);}})}
function c(){a.h===e&&(a.h=void 0)}
if(!a.l)throw fl(a);if(a.h)return a.h;var d={lb:function(f){f.close()},
closed:c,Cb:c,upgrade:a.options.upgrade};var e=b();a.h=e;return a.h}
;var il=new el("YtIdbMeta",{ea:{databases:{ha:1}},upgrade:function(a,b){b(1)&&Zj(a,"databases",{keyPath:"actualName"})}});
function jl(a,b){var c;return y(function(d){if(1==d.h)return x(d,gl(il,b),2);c=d.i;return d.return(V(c,["databases"],{G:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Vj(f.h.put(a,void 0)).then(function(){})})}))})}
function kl(a,b){var c;return y(function(d){if(1==d.h)return a?x(d,gl(il,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function ll(a,b){var c,d;return y(function(e){return 1==e.h?(c=[],x(e,gl(il,b),2)):3!=e.h?(d=e.i,x(e,V(d,["databases"],{G:!0,mode:"readonly"},function(f){c.length=0;return Wk(f.objectStore("databases"),{},function(g){a(g.N())&&c.push(g.N());return g.continue()})}),3)):e.return(c)})}
function ml(a){return ll(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var nl,ol=new function(){}(new function(){});
function pl(){var a,b,c,d;return y(function(e){switch(e.h){case 1:a=tj();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Qi)f=/WebKit\/([0-9]+)/.exec(Lb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Lb()),f=!(f&&602<=parseInt(f[1],10)));if(f||fc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
wa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return x(e,jl(d,ol),4);case 4:return x(e,kl("yt-idb-test-do-not-use",ol),5);case 5:return e.return(!0);case 2:return za(e),e.return(!1)}})}
function ql(){if(void 0!==nl)return nl;vj=!0;return nl=pl().then(function(a){vj=!1;var b;if(null!=(b=sj())&&b.h){var c;b={hasSucceededOnce:(null==(c=tj())?void 0:c.hasSucceededOnce)||a};var d;null==(d=sj())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function rl(){return C("ytglobal.idbToken_")||void 0}
function sl(){var a=rl();return a?Promise.resolve(a):ql().then(function(b){(b=b?ol:void 0)&&B("ytglobal.idbToken_",b);return b})}
;new Xf;function tl(a){if(!pj())throw a=new T("AUTH_INVALID",{dbName:a}),wj(a),a;var b=qj();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function ul(a,b,c,d){var e,f,g,h,k,l;return y(function(m){switch(m.h){case 1:return f=null!=(e=Error().stack)?e:"",x(m,sl(),2);case 2:g=m.i;if(!g)throw h=Kj("openDbImpl",a,b),R("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),wj(h),h;yj(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:tl(a);wa(m,3);return x(m,jl(k,g),5);case 5:return x(m,bl(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=za(m),wa(m,7),x(m,kl(k.actualName,g),9);case 9:xa(m,
8);break;case 7:za(m);case 8:throw l;}})}
function vl(a,b,c){c=void 0===c?{}:c;return ul(a,b,!1,c)}
function wl(a,b,c){c=void 0===c?{}:c;return ul(a,b,!0,c)}
function xl(a,b){b=void 0===b?{}:b;var c,d;return y(function(e){if(1==e.h)return x(e,sl(),2);if(3!=e.h){c=e.i;if(!c)return e.return();yj(a);d=tl(a);return x(e,cl(d.actualName,b),3)}return x(e,kl(d.actualName,c),0)})}
function yl(a,b,c){a=a.map(function(d){return y(function(e){return 1==e.h?x(e,cl(d.actualName,b),2):x(e,kl(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function zl(){var a=void 0===a?{}:a;var b,c;return y(function(d){if(1==d.h)return x(d,sl(),2);if(3!=d.h){b=d.i;if(!b)return d.return();yj("LogsDatabaseV2");return x(d,ml(b),3)}c=d.i;return x(d,yl(c,a,b),0)})}
function Al(a,b){b=void 0===b?{}:b;var c;return y(function(d){if(1==d.h)return x(d,sl(),2);if(3!=d.h){c=d.i;if(!c)return d.return();yj(a);return x(d,cl(a,b),3)}return x(d,kl(a,c),0)})}
;function Bl(a,b){el.call(this,a,b);this.options=b;yj(a)}
v(Bl,el);function Cl(a,b){var c;return function(){c||(c=new Bl(a,b));return c}}
Bl.prototype.j=function(a,b,c){c=void 0===c?{}:c;return(this.options.Ea?wl:vl)(a,b,Object.assign({},c))};
Bl.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Ea?Al:xl)(this.name,a)};
function Dl(a,b){return Cl(a,b)}
;var El={},Fl=Dl("ytGcfConfig",{ea:(El.coldConfigStore={ha:1},El.hotConfigStore={ha:1},El),Ea:!1,upgrade:function(a,b){b(1)&&(Uk(Zj(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),Uk(Zj(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Gl(a){return gl(Fl(),a)}
function Hl(a,b,c){var d,e,f;return y(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:U()},x(g,Gl(c),2);case 2:return e=g.i,x(g,e.clear("hotConfigStore"),3);case 3:return x(g,Pk(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Il(a,b,c,d){var e,f,g;return y(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:U()},x(h,Gl(d),2);case 2:return f=h.i,x(h,f.clear("coldConfigStore"),3);case 3:return x(h,Pk(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Jl(a){var b,c;return y(function(d){return 1==d.h?x(d,Gl(a),2):3!=d.h?(b=d.i,c=void 0,x(d,V(b,["coldConfigStore"],{mode:"readwrite",G:!0},function(e){return Zk(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.N()})}),3)):d.return(c)})}
function Kl(a){var b,c;return y(function(d){return 1==d.h?x(d,Gl(a),2):3!=d.h?(b=d.i,c=void 0,x(d,V(b,["hotConfigStore"],{mode:"readwrite",G:!0},function(e){return Zk(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.N()})}),3)):d.return(c)})}
;function Ll(){}
function Ml(a,b,c){var d,e,f;return y(function(g){if(1==g.h){if(!R("update_log_event_config"))return g.s(0);c&&(a.h=c,B("yt.gcf.config.hotConfigGroup",a.h));a.hotHashData=b;B("yt.gcf.config.hotHashData",a.hotHashData);return(d=rl())?c?g.s(4):x(g,Kl(d),5):g.s(0)}4!=g.h&&(e=g.i,c=null==(f=e)?void 0:f.config);return x(g,Hl(c,b,d),0)})}
function Nl(a,b,c){var d,e,f,g;return y(function(h){if(1==h.h){if(!R("update_log_event_config"))return h.s(0);a.coldHashData=b;B("yt.gcf.config.coldHashData",a.coldHashData);return(d=rl())?c?h.s(4):x(h,Jl(d),5):h.s(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.s(0);g=c.configData;return x(h,Il(c,b,g,d),0)})}
;function Ol(){return"INNERTUBE_API_KEY"in Uh&&"INNERTUBE_API_VERSION"in Uh}
function Pl(){return{sb:P("INNERTUBE_API_KEY"),tb:P("INNERTUBE_API_VERSION"),Ia:P("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Ua:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),ub:P("INNERTUBE_CONTEXT_CLIENT_NAME",1),Va:P("INNERTUBE_CONTEXT_CLIENT_VERSION"),Xa:P("INNERTUBE_CONTEXT_HL"),Wa:P("INNERTUBE_CONTEXT_GL"),vb:P("INNERTUBE_HOST_OVERRIDE")||"",xb:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),wb:!!P("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1),appInstallData:P("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Ql(a){var b={client:{hl:a.Xa,gl:a.Wa,clientName:a.Ua,clientVersion:a.Va,configInfo:a.Ia}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=A.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=P("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=ei();0<c.length&&(b.request={internalExperimentFlags:c});Rl(a,void 0,b);R("enable_third_party_info")&&Sl(void 0,b);Tl(void 0,b);Ul(a,void 0,b);Vl(void 0,b);R("start_sending_config_hash")&&Wl(void 0,
b);P("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(b.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=u(Object.entries(wi(P("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=u(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Xl(a){var b=new th,c=new kh;I(c,1,a.Xa);I(c,2,a.Wa);I(c,16,a.ub);I(c,17,a.Va);if(a.Ia){var d=a.Ia,e=new gh;d.coldConfigData&&I(e,1,d.coldConfigData);d.appInstallData&&I(e,6,d.appInstallData);d.coldHashData&&I(e,3,d.coldHashData);d.hotHashData&&I(e,5,d.hotHashData);J(c,gh,62,e)}(d=A.devicePixelRatio)&&1!=d&&I(c,65,d);d=P("EXPERIMENTS_TOKEN","");""!==d&&I(c,54,d);d=ei();if(0<d.length){e=new mh;for(var f=0;f<d.length;f++){var g=new eh;I(g,1,d[f].key);nd(g,2,fh,d[f].value);ud(e,15,eh,g)}J(b,
mh,5,e)}Rl(a,c);R("enable_third_party_info")&&Sl(b);Tl(c);Ul(a,c);Vl(c);R("start_sending_config_hash")&&Wl(c);P("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(a=new rh,I(a,3,P("DELEGATED_SESSION_ID")));a=u(Object.entries(wi(P("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=u(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?I(c,12,e):"cmodel"===d?I(c,13,e):"cbr"===d?I(c,87,e):"cbrver"===d?I(c,88,e):"cos"===d?I(c,18,e):"cosver"===d?I(c,19,e):"cplatform"===d&&I(c,42,e);J(b,kh,1,c);
return b}
function Rl(a,b,c){a=a.Ua;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=pd(b,hh,96)||new hh;var d=cj();d=Object.keys(vh).indexOf(d);d=-1===d?null:d;null!==d&&I(c,3,d);J(b,hh,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=cj())}
function Sl(a,b){var c=C("yt.embedded_player.embed_url");c&&(a?(b=pd(a,oh,7)||new oh,I(b,4,c),J(a,oh,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function Tl(a,b){var c;if(R("web_log_memory_total_kbytes")&&(null==(c=A.navigator)?0:c.deviceMemory)){var d;c=null==(d=A.navigator)?void 0:d.deviceMemory;a?I(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Ul(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=pd(b,gh,62))?d:new gh;I(c,6,a.appInstallData);J(b,gh,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Vl(a,b){a:{var c=hj();if(c){var d=dj[c.type||"unknown"]||"CONN_UNKNOWN";c=dj[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?I(a,61,ej[d]):b&&(b.client.connectionType=d));R("web_log_effective_connection_type")&&(d=hj(),d=null!=d&&d.effectiveType?gj.hasOwnProperty(d.effectiveType)?gj[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?I(a,94,fj[d]):
b&&(b.client.effectiveConnectionType=d)))}
function Yl(a,b,c){c=void 0===c?{}:c;var d={};P("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":P("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Yb||P("AUTHORIZATION"))||(a?b="Bearer "+C("gapi.auth.getToken")().Xb:b=pe([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=P("SESSION_INDEX",0),R("pageid_as_header_web")&&(d["X-Goog-PageId"]=P("DELEGATED_SESSION_ID")));return d}
function Wl(a,b){Ll.h||(Ll.h=new Ll);var c=C("yt.gcf.config.coldConfigData");var d=C("yt.gcf.config.hotHashData");var e=C("yt.gcf.config.coldHashData");if(c&&e&&d)if(a){var f;b=null!=(f=pd(a,gh,62))?f:new gh;I(b,1,c);I(b,3,e);I(b,5,d);J(a,gh,62,b)}else b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=e,b.client.configInfo.hotHashData=d)}
;function Zl(a){a=Object.assign({},a);delete a.Authorization;var b=pe();if(b){var c=new If;c.update(P("INNERTUBE_API_KEY"));c.update(b);a.hash=xc(c.digest(),3)}return a}
;var $l;function am(){$l||($l=new rj("yt.innertube"));return $l}
function bm(a,b,c,d){if(d)return null;d=am().get("nextId",!0)||1;var e=am().get("requests",!0)||{};e[d]={method:a,request:b,authState:Zl(c),requestTime:Math.round(U())};am().set("nextId",d+1,86400,!0);am().set("requests",e,86400,!0);return d}
function cm(a){var b=am().get("requests",!0)||{};delete b[a];am().set("requests",b,86400,!0)}
function dm(a){var b=am().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(U())-d.requestTime)){var e=d.authState,f=Zl(Yl(!1));mb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(U())),em(a,d.method,e,{}));delete b[c]}}am().set("requests",b,86400,!0)}}
;function fm(a){this.ra=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.da=function(){};
this.now=Date.now;this.ia=!1;var b;this.gb=null!=(b=a.gb)?b:100;var c;this.fb=null!=(c=a.fb)?c:1;var d;this.cb=null!=(d=a.cb)?d:2592E6;var e;this.bb=null!=(e=a.bb)?e:12E4;var f;this.eb=null!=(f=a.eb)?f:5E3;var g;this.B=null!=(g=a.B)?g:void 0;this.wa=!!a.wa;var h;this.va=null!=(h=a.va)?h:.1;var k;this.Ba=null!=(k=a.Ba)?k:10;a.handleError&&(this.handleError=a.handleError);a.da&&(this.da=a.da);a.ia&&(this.ia=a.ia);a.ra&&(this.ra=a.ra);this.A=a.A;this.K=a.K;this.D=a.D;this.F=a.F;this.S=a.S;this.Ma=a.Ma;
this.La=a.La;gm(this)&&(!this.A||this.A("networkless_logging"))&&hm(this)}
function hm(a){gm(a)&&!a.ia&&(a.h=!0,a.wa&&Math.random()<=a.va&&a.D.nb(a.B),im(a),a.F.J()&&a.la(),a.F.Y(a.Ma,a.la.bind(a)),a.F.Y(a.La,a.Pa.bind(a)))}
p=fm.prototype;p.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(gm(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.D.set(d,this.B).then(function(e){d.id=e;c.F.J()&&jm(c,d)}).catch(function(e){jm(c,d);
km(c,e)})}else this.S(a,b)};
p.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(gm(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.A&&this.A("nwl_skip_retry")&&(e.skipRetry=c);if(this.F.J()||this.A&&this.A("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return y(function(k){if(1==k.h)return x(k,d.D.set(e,d.B).catch(function(l){km(d,l)}),2);
f(g,h);k.h=0})}}this.S(a,b,e.skipRetry)}else this.D.set(e,this.B).catch(function(g){d.S(a,b,e.skipRetry);
km(d,g)})}else this.S(a,b,this.A&&this.A("nwl_skip_retry")&&c)};
p.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(gm(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.D.ba(d.id,c.B):e=!0;c.F.Z&&c.A&&c.A("vss_network_hint")&&c.F.Z(!0);f(g,h)};
this.S(d.url,d.options);this.D.set(d,this.B).then(function(g){d.id=g;e&&c.D.ba(d.id,c.B)}).catch(function(g){km(c,g)})}else this.S(a,b)};
p.la=function(){var a=this;if(!gm(this))throw Kj("throttleSend");this.i||(this.i=this.K.M(function(){var b;return y(function(c){if(1==c.h)return x(c,a.D.Ta("NEW",a.B),2);if(3!=c.h)return b=c.i,b?x(c,jm(a,b),3):(a.Pa(),c.return());a.i&&(a.i=0,a.la());c.h=0})},this.gb))};
p.Pa=function(){this.K.aa(this.i);this.i=0};
function jm(a,b){var c,d;return y(function(e){switch(e.h){case 1:if(!gm(a))throw c=Kj("immediateSend"),c;if(void 0===b.id){e.s(2);break}return x(e,a.D.zb(b.id,a.B),3);case 3:if(d=e.i){if(a.A&&!a.A("nwl_send_from_memory_when_online")||void 0===a.A)b=d}else a.da(Error("The request cannot be found in the database."));case 2:if(lm(a,b,a.cb)){e.s(4);break}a.da(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.s(5);break}return x(e,a.D.ba(b.id,a.B),5);case 5:return e.return();
case 4:b.skipRetry||(b=mm(a,b));if(!b){e.s(0);break}if(!b.skipRetry||void 0===b.id){e.s(8);break}return x(e,a.D.ba(b.id,a.B),8);case 8:a.S(b.url,b.options,!!b.skipRetry),e.h=0}})}
function mm(a,b){if(!gm(a))throw Kj("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k;return y(function(l){switch(l.h){case 1:g=nm(f);if(!(a.A&&a.A("nwl_consider_error_code")&&g||a.A&&!a.A("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Ba)){l.s(2);break}if(!a.F.Da){l.s(3);break}return x(l,a.F.Da(),3);case 3:if(a.F.J()){l.s(2);break}c(e,f);if(!a.A||!a.A("nwl_consider_error_code")||void 0===(null==(h=b)?void 0:h.id)){l.s(6);break}return x(l,a.D.Na(b.id,a.B,!1),6);case 6:return l.return();case 2:if(a.A&&a.A("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.Ba)return l.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){l.s(8);break}return b.sendCount<a.fb?x(l,a.D.Na(b.id,a.B),12):x(l,a.D.ba(b.id,a.B),8);case 12:a.K.M(function(){a.F.J()&&a.la()},a.eb);
case 8:c(e,f),l.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return y(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.s(2):x(h,a.D.ba(b.id,a.B),2);a.F.Z&&a.A&&a.A("vss_network_hint")&&a.F.Z(!0);d(e,f);h.h=0})};
return b}
function lm(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function im(a){if(!gm(a))throw Kj("retryQueuedRequests");a.D.Ta("QUEUED",a.B).then(function(b){b&&!lm(a,b,a.bb)?a.K.M(function(){return y(function(c){if(1==c.h)return void 0===b.id?c.s(2):x(c,a.D.Na(b.id,a.B),2);im(a);c.h=0})}):a.F.J()&&a.la()})}
function km(a,b){a.hb&&!a.F.J()?a.hb(b):a.handleError(b)}
function gm(a){return!!a.B||a.ra}
function nm(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;var om=C("ytPubsub2Pubsub2Instance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.ma;N.prototype.publish=N.prototype.fa;N.prototype.clear=N.prototype.clear;B("ytPubsub2Pubsub2Instance",om);B("ytPubsub2Pubsub2SubscribedKeys",C("ytPubsub2Pubsub2SubscribedKeys")||{});B("ytPubsub2Pubsub2TopicToKeys",C("ytPubsub2Pubsub2TopicToKeys")||{});B("ytPubsub2Pubsub2IsAsync",C("ytPubsub2Pubsub2IsAsync")||{});B("ytPubsub2Pubsub2SkipSubKey",null);var pm;
function qm(){if(pm)return pm();var a={};pm=Dl("LogsDatabaseV2",{ea:(a.LogsRequestsStore={ha:2},a),Ea:!1,upgrade:function(b,c,d){c(2)&&Zj(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),Uk(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return pm()}
;function rm(a){return gl(qm(),a)}
function sm(a,b){var c,d,e,f;return y(function(g){if(1==g.h)return c={startTime:U(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},x(g,rm(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:P("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),x(g,Pk(d,"LogsRequestsStore",e),3);f=g.i;c.Db=U();tm(c);return g.return(f)})}
function um(a,b){var c,d,e,f,g,h,k;return y(function(l){if(1==l.h)return c={startTime:U(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},x(l,rm(b),2);if(3!=l.h)return d=l.i,e=P("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,U()],h=IDBKeyRange.bound(f,g),k=void 0,x(l,V(d,["LogsRequestsStore"],{mode:"readwrite",G:!0},function(m){return Zk(m.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(n){n.N()&&(k=n.N(),"NEW"===a&&(k.status="QUEUED",n.update(k)))})}),
3);
c.Db=U();tm(c);return l.return(k)})}
function vm(a,b){var c;return y(function(d){if(1==d.h)return x(d,rm(b),2);c=d.i;return d.return(V(c,["LogsRequestsStore"],{mode:"readwrite",G:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Vj(f.h.put(g,void 0)).then(function(){return g})})}))})}
function wm(a,b,c){c=void 0===c?!0:c;var d;return y(function(e){if(1==e.h)return x(e,rm(b),2);d=e.i;return e.return(V(d,["LogsRequestsStore"],{mode:"readwrite",G:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),Vj(g.h.put(h,void 0)).then(function(){return h})):Oj.resolve(void 0)})}))})}
function xm(a,b){var c;return y(function(d){if(1==d.h)return x(d,rm(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function ym(a){var b,c;return y(function(d){if(1==d.h)return x(d,rm(a),2);b=d.i;c=U()-2592E6;return x(d,V(b,["LogsRequestsStore"],{mode:"readwrite",G:!0},function(e){return Wk(e.objectStore("LogsRequestsStore"),{},function(f){if(f.N().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function zm(){y(function(a){return x(a,zl(),0)})}
function tm(a){if(!R("nwl_csi_killswitch")&&.01>=Math.random()){var b=C("ytPubsub2Pubsub2Instance");b&&b.publish.call(b,"nwl_transaction_latency_payload".toString(),"nwl_transaction_latency_payload",a)}}
;var Am={},Bm=Dl("ServiceWorkerLogsDatabase",{ea:(Am.SWHealthLog={ha:1},Am),Ea:!0,upgrade:function(a,b){b(1)&&Uk(Zj(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Cm(a){return gl(Bm(),a)}
function Dm(a){var b,c;y(function(d){if(1==d.h)return x(d,Cm(a),2);b=d.i;c=U()-2592E6;return x(d,V(b,["SWHealthLog"],{mode:"readwrite",G:!0},function(e){return Wk(e.objectStore("SWHealthLog"),{},function(f){if(f.N().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Em(a){var b;return y(function(c){if(1==c.h)return x(c,Cm(a),2);b=c.i;return x(c,b.clear("SWHealthLog"),0)})}
;var Fm={},Gm=0;function Hm(a){var b=new Image,c=""+Gm++;Fm[c]=b;b.onload=b.onerror=function(){delete Fm[c]};
b.src=a}
;function Y(){this.h=new Map;this.i=!1}
function Im(){if(!Y.h){var a=C("yt.networkRequestMonitor.instance")||new Y;B("yt.networkRequestMonitor.instance",a);Y.h=a}return Y.h}
Y.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Y.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
Y.prototype.removeParams=function(a){return a.split("?")[0]};
Y.prototype.removeParams=Y.prototype.removeParams;Y.prototype.isEndpointCFR=Y.prototype.isEndpointCFR;Y.prototype.requestComplete=Y.prototype.requestComplete;Y.getInstance=Im;var Jm;function Km(){Jm||(Jm=new rj("yt.offline"));return Jm}
function Lm(a){if(R("offline_error_handling")){var b=Km().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Km().set("errors",b,2592E3,!0)}}
;function Z(){Qe.call(this);var a=this;this.l=!1;this.i=We();this.i.Y("networkstatus-online",function(){if(a.l&&R("offline_error_handling")){var b=Km().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new oj(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;ai(d)}Km().set("errors",{},2592E3,!0)}}})}
v(Z,Qe);function Mm(){if(!Z.h){var a=C("yt.networkStatusManager.instance")||new Z;B("yt.networkStatusManager.instance",a);Z.h=a}return Z.h}
p=Z.prototype;p.J=function(){return this.i.J()};
p.Z=function(a){this.i.i=a};
p.rb=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
p.pb=function(){this.l=!0};
p.Y=function(a,b){return this.i.Y(a,b)};
p.Da=function(a){a=Ue(this.i,a);a.then(function(b){R("use_cfr_monitor")&&Im().requestComplete("generate_204",b)});
return a};
Z.prototype.sendNetworkCheckRequest=Z.prototype.Da;Z.prototype.listen=Z.prototype.Y;Z.prototype.enableErrorFlushing=Z.prototype.pb;Z.prototype.getWindowStatus=Z.prototype.rb;Z.prototype.networkStatusHint=Z.prototype.Z;Z.prototype.isNetworkAvailable=Z.prototype.J;Z.getInstance=Mm;function Nm(a){a=void 0===a?{}:a;Qe.call(this);var b=this;this.i=this.u=0;this.l=Mm();var c=C("yt.networkStatusManager.instance.listen").bind(this.l);c&&(a.Ca?(this.Ca=a.Ca,c("networkstatus-online",function(){Om(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Om(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Re(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Re(b,"publicytnetworkstatus-offline")})))}
v(Nm,Qe);Nm.prototype.J=function(){var a=C("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.l)():!0};
Nm.prototype.Z=function(a){var b=C("yt.networkStatusManager.instance.networkStatusHint").bind(this.l);b&&b(a)};
Nm.prototype.Da=function(a){var b=this,c;return y(function(d){c=C("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.l);return R("skip_network_check_if_cfr")&&Im().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.Z((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.J())})):c?d.return(c(a)):d.return(!0)})};
function Om(a,b){a.Ca?a.i?(Xe.aa(a.u),a.u=Xe.M(function(){a.m!==b&&(Re(a,b),a.m=b,a.i=U())},a.Ca-(U()-a.i))):(Re(a,b),a.m=b,a.i=U()):Re(a,b)}
;var Pm;function Qm(){var a=fm.call;Pm||(Pm=new Nm({dc:!0,cc:!0}));a.call(fm,this,{D:{nb:ym,ba:xm,Ta:um,zb:vm,Na:wm,set:sm},F:Pm,handleError:ai,da:bi,S:Rm,now:U,hb:Lm,K:nj(),Ma:"publicytnetworkstatus-online",La:"publicytnetworkstatus-offline",wa:!0,va:.1,Ba:di("potential_esf_error_limit",10),A:R,ia:!(pj()&&"www.youtube-nocookie.com"!==Rb(document.location.toString()))});this.j=new Xf;R("networkless_immediately_drop_all_requests")&&zm();Al("LogsDatabaseV2")}
v(Qm,fm);function Sm(){var a=C("yt.networklessRequestController.instance");a||(a=new Qm,B("yt.networklessRequestController.instance",a),R("networkless_logging")&&sl().then(function(b){a.B=b;hm(a);a.j.resolve();a.wa&&Math.random()<=a.va&&a.B&&Dm(a.B);R("networkless_immediately_drop_sw_health_store")&&Tm(a)}));
return a}
Qm.prototype.writeThenSend=function(a,b){b||(b={});pj()||(this.h=!1);fm.prototype.writeThenSend.call(this,a,b)};
Qm.prototype.sendThenWrite=function(a,b,c){b||(b={});pj()||(this.h=!1);fm.prototype.sendThenWrite.call(this,a,b,c)};
Qm.prototype.sendAndWrite=function(a,b){b||(b={});pj()||(this.h=!1);fm.prototype.sendAndWrite.call(this,a,b)};
Qm.prototype.awaitInitialization=function(){return this.j.promise};
function Tm(a){var b;y(function(c){if(!a.B)throw b=Kj("clearSWHealthLogsDb"),b;return c.return(Em(a.B).catch(function(d){a.handleError(d)}))})}
function Rm(a,b,c){R("use_cfr_monitor")&&Um(a,b);if(R("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(U())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(U())}if(c&&0===Object.keys(b).length){var e=void 0===e?"":e;var f=void 0===f?!1:f;if(a)if(e)Li(a,void 0,"POST",e);else if(P("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))Li(a,void 0,"GET","",void 0,void 0,f);else{b:{try{var g=new Za({url:a});if(g.j&&g.i||
g.l){var h=Qb(a.match(Pb)[5]||null);var k=!(!h||!h.endsWith("/aclk")||"1"!==$b(a,"ri"));break b}}catch(m){}k=!1}if(k){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var l=!0;break b}}catch(m){}l=!1}c=l?!0:!1}else c=!1;c||Hm(a)}}else Ii(a,b)}
function Um(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Im().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Im().requestComplete(a,!0);d(e,f)}}
;var Vm=A.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};B("ytNetworklessLoggingInitializationOptions",Vm);function Wm(a){var b=this;this.config_=null;a?this.config_=a:Ol()&&(this.config_=Pl());jj(function(){dm(b)},5E3)}
Wm.prototype.isReady=function(){!this.config_&&Ol()&&(this.config_=Pl());return!!this.config_};
function em(a,b,c,d){function e(w){w=void 0===w?!1:w;var z;if(d.retry&&"www.youtube-nocookie.com"!=h&&(w||R("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(z=bm(b,c,l,k)),z)){var D=g.onSuccess,K=g.onFetchSuccess;g.onSuccess=function(M,O){cm(z);D(M,O)};
c.onFetchSuccess=function(M,O){cm(z);K(M,O)}}try{w&&d.retry&&!d.Za.bypassNetworkless?(g.method="POST",d.Za.writeThenSend?Sm().writeThenSend(q,g):Sm().sendAndWrite(q,g)):R("web_all_payloads_via_jspb")?Ii(q,g):(g.method="POST",g.postParams||(g.postParams={}),Ii(q,g))}catch(M){if("InvalidAccessError"==M.name)z&&(cm(z),z=0),bi(Error("An extension is blocking network request."));
else throw M;}z&&jj(function(){dm(a)},5E3)}
!P("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&bi(new oj("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new oj("innertube xhrclient not ready",b,c,d);ai(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(w,z){if(d.onSuccess)d.onSuccess(z)},
onFetchSuccess:function(w){if(d.onSuccess)d.onSuccess(w)},
onError:function(w,z){if(d.onError)d.onError(z)},
onFetchError:function(w){if(d.onError)d.onError(w)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.vb)&&(h=f);var k=a.config_.xb||!1,l=Yl(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.tb+"/"+b,n={alt:"json"},r=a.config_.wb&&f;r=r&&f.startsWith("Bearer");r||(n.key=a.config_.sb);var q=xi(""+h+m,n||{},!0);C("ytNetworklessLoggingInitializationOptions")&&Vm.isNwlInitialized?
ql().then(function(w){e(w)}):e(!1)}
;var Xm=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function Ym(a){this.H=a;this.h=null;this.m=0;this.C=null;this.u=0;this.i=[];for(a=0;4>a;a++)this.i.push(0);this.l=0;this.Fa=ni(window,"mousemove",Wa(this.Ga,this));this.Ha=pi(Wa(this.W,this),25)}
E(Ym,qe);Ym.prototype.Ga=function(a){void 0===a.h&&ii(a);var b=a.h;void 0===a.i&&ii(a);this.h=new Gd(b,a.i)};
Ym.prototype.W=function(){if(this.h){var a=Xm();if(0!=this.m){var b=this.C,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.i[this.l]=.5<Math.abs((d-this.u)/this.u)?1:0;for(c=b=0;4>c;c++)b+=this.i[c]||0;3<=b&&this.H();this.u=d}this.m=a;this.C=this.h;this.l=(this.l+1)%4}};
Ym.prototype.ca=function(){window.clearInterval(this.Ha);li(this.Fa)};var Zm={};
function $m(){var a={},b=void 0===a.Ab?!1:a.Ab;a=void 0===a.qb?!0:a.qb;if(null==C("_lact",window)){var c=parseInt(P("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;B("_lact",c,window);B("_fact",c,window);-1==c&&an();ni(document,"keydown",an);ni(document,"keyup",an);ni(document,"mousedown",an);ni(document,"mouseup",an);b?ni(window,"touchmove",function(){bn("touchmove",200)},{passive:!0}):(ni(window,"resize",function(){bn("resize",200)}),a&&ni(window,"scroll",function(){bn("scroll",200)}));
new Ym(function(){bn("mouse",100)});
ni(document,"touchstart",an,{passive:!0});ni(document,"touchend",an,{passive:!0})}}
function bn(a,b){Zm[a]||(Zm[a]=!0,Xe.M(function(){an();Zm[a]=!1},b))}
function an(){null==C("_lact",window)&&$m();var a=Date.now();B("_lact",a,window);-1==C("_fact",window)&&B("_fact",a,window);(a=C("ytglobal.ytUtilActivityCallback_"))&&a()}
function cn(){var a=C("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var dn=A.ytPubsubPubsubInstance||new N,en=A.ytPubsubPubsubSubscribedKeys||{},fn=A.ytPubsubPubsubTopicToKeys||{},gn=A.ytPubsubPubsubIsSynchronous||{};N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.ma;N.prototype.publish=N.prototype.fa;N.prototype.clear=N.prototype.clear;B("ytPubsubPubsubInstance",dn);B("ytPubsubPubsubTopicToKeys",fn);B("ytPubsubPubsubIsSynchronous",gn);B("ytPubsubPubsubSubscribedKeys",en);var hn=Symbol("injectionDeps");function jn(){this.i=new Map;this.h=new Map}
jn.prototype.resolve=function(a){return kn(this,a,[])};
function kn(a,b,c){var d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(d.Gb)var e=d.Gb;else if(d.Fb)e=d[hn]?ln(a,d[hn],c):[],e=d.Fb.apply(d,ia(e));else if(d.Eb){e=d.Eb;var f=e[hn]?ln(a,e[hn],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ia(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.jc||a.h.set(b,e);return e}
function ln(a,b,c){return b?b.map(function(d){return kn(a,d,c)}):[]}
;var mn;function nn(){this.store={};this.h={}}
nn.prototype.storePayload=function(a,b){a=on(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
nn.prototype.extractMatchingEntries=function(a){a=pn(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ia(this.store[a[c]])),delete this.store[a[c]]);return b};
nn.prototype.getSequenceCount=function(a){a=pn(this,a);for(var b=0,c=0;c<a.length;c++)b+=this.store[a[c]].length||0;return b};
function pn(a,b){var c=on(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&on(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(qn(b.auth,g[0])){var h=b.isJspb;qn(void 0===h?"undefined":h?"true":"false",g[1])&&qn(b.cttAuthInfo,g[2])&&e.push(d[f])}}return a.h[c]=e}
function qn(a,b){return void 0===a||"undefined"===a?!0:a===b}
nn.prototype.getSequenceCount=nn.prototype.getSequenceCount;nn.prototype.extractMatchingEntries=nn.prototype.extractMatchingEntries;nn.prototype.storePayload=nn.prototype.storePayload;function on(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo].join("/")}
;var rn=di("initial_gel_batch_timeout",2E3),sn=di("gel_queue_timeout_max_ms",6E4),tn=Math.pow(2,16)-1,un=void 0;function vn(){this.j=this.h=this.i=0}
var wn=new vn,xn=new vn,yn,zn=!0,An=A.ytLoggingTransportGELQueue_||new Map;B("ytLoggingTransportGELQueue_",An);var Bn=A.ytLoggingTransportGELProtoQueue_||new Map;B("ytLoggingTransportGELProtoQueue_",Bn);var Cn=A.ytLoggingTransportTokensToCttTargetIds_||{};B("ytLoggingTransportTokensToCttTargetIds_",Cn);var Dn=A.ytLoggingTransportTokensToJspbCttTargetIds_||{};B("ytLoggingTransportTokensToJspbCttTargetIds_",Dn);var En={};function Fn(){var a=C("yt.logging.ims");a||(a=new nn,B("yt.logging.ims",a));return a}
function Gn(a,b){R("web_all_payloads_via_jspb")&&bi(new oj("transport.log called for JSON in JSPB only experiment"));if("log_event"===a.endpoint){Hn(a);var c=In(a);if(R("use_new_in_memory_storage")){En[c]=!0;var d={cttAuthInfo:c,isJspb:!1};Fn().storePayload(d,a.payload);Jn(b,[],c,!1,d)}else d=An.get(c)||[],An.set(c,d),d.push(a.payload),Jn(b,d,c)}}
function Kn(a,b){if("log_event"===a.endpoint){Hn(void 0,a);var c=In(a,!0);if(R("use_new_in_memory_storage")){En[c]=!0;var d={cttAuthInfo:c,isJspb:!0};Fn().storePayload(d,a.payload.toJSON());Jn(b,[],c,!0,d)}else d=Bn.get(c)||[],Bn.set(c,d),a=a.payload.toJSON(),d.push(a),Jn(b,d,c,!0)}}
function Jn(a,b,c,d,e){d=void 0===d?!1:d;a&&(un=new a);a=di("tvhtml5_logging_max_batch_ads_fork")||di("tvhtml5_logging_max_batch")||di("web_logging_max_batch")||100;var f=U(),g=d?xn.j:wn.j;b=b.length;e&&(b=Fn().getSequenceCount(e));b>=a?yn||(yn=Ln(function(){Mn({writeThenSend:!0},R("flush_only_full_queue")?c:void 0,d);yn=void 0},0)):10<=f-g&&(Nn(d),d?xn.j=f:wn.j=f)}
function On(a,b){R("web_all_payloads_via_jspb")&&bi(new oj("transport.logIsolatedGelPayload called in JSPB only experiment"));if("log_event"===a.endpoint){Hn(a);var c=In(a),d=new Map;d.set(c,[a.payload]);b&&(un=new b);return new ug(function(e,f){un&&un.isReady()?Pn(d,un,e,f,{bypassNetworkless:!0},!0):e()})}}
function Qn(a,b){if("log_event"===a.endpoint){Hn(void 0,a);var c=In(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(un=new b);return new ug(function(e){un&&un.isReady()?Rn(d,un,e,{bypassNetworkless:!0},!0):e()})}}
function In(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Nh;c.videoId?nd(d,1,Oh,c.videoId):c.playlistId&&nd(d,2,Oh,c.playlistId);Dn[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Cn[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Mn(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;!c&&R("web_all_payloads_via_jspb")&&bi(new oj("transport.flushLogs called for JSON in JSPB only experiment"));new ug(function(d,e){c?(Sn(xn.i),Sn(xn.h),xn.h=0):(Sn(wn.i),Sn(wn.h),wn.h=0);if(un&&un.isReady())if(R("use_new_in_memory_storage")){var f=a,g=c,h=un;f=void 0===f?{}:f;g=void 0===g?!1:g;var k=new Map,l=new Map;if(void 0!==b)g?(e=Fn().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),k.set(b,e),Rn(k,h,d,f)):(k=Fn().extractMatchingEntries({isJspb:g,
cttAuthInfo:b}),l.set(b,k),Pn(l,h,d,e,f));else if(g){e=u(Object.keys(En));for(g=e.next();!g.done;g=e.next())l=g.value,g=Fn().extractMatchingEntries({isJspb:!0,cttAuthInfo:l}),0<g.length&&k.set(l,g),delete En[l];Rn(k,h,d,f)}else{k=u(Object.keys(En));for(g=k.next();!g.done;g=k.next()){g=g.value;var m=Fn().extractMatchingEntries({isJspb:!1,cttAuthInfo:g});0<m.length&&l.set(g,m);delete En[g]}Pn(l,h,d,e,f)}}else f=a,k=c,h=un,f=void 0===f?{}:f,k=void 0===k?!1:k,void 0!==b?k?(e=new Map,k=Bn.get(b)||[],e.set(b,
k),Rn(e,h,d,f),Bn.delete(b)):(k=new Map,l=An.get(b)||[],k.set(b,l),Pn(k,h,d,e,f),An.delete(b)):k?(Rn(Bn,h,d,f),Bn.clear()):(Pn(An,h,d,e,f),An.clear());else Nn(c),d()})}
function Nn(a){a=void 0===a?!1:a;if(R("web_gel_timeout_cap")&&(!a&&!wn.h||a&&!xn.h)){var b=Ln(function(){Mn({writeThenSend:!0},void 0,a)},sn);
a?xn.h=b:wn.h=b}Sn(a?xn.i:wn.i);b=P("LOGGING_BATCH_TIMEOUT",di("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&zn&&(b=rn);b=Ln(function(){Mn({writeThenSend:!0},void 0,a)},b);
a?xn.i=b:wn.i=b}
function Pn(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(U()),h=a.size,k={};a=u(a);for(var l=a.next();!l.done;k={oa:k.oa,V:k.V,ga:k.ga,qa:k.qa,pa:k.pa},l=a.next()){var m=u(l.value);l=m.next().value;m=m.next().value;k.V=nb({context:Ql(b.config_||Pl())});if(!Pa(m)&&!R("throw_err_when_logevent_malformed_killswitch")){d();break}k.V.events=m;(m=Cn[l])&&Tn(k.V,l,m);delete Cn[l];k.ga="visitorOnlyApprovedKey"===l;Un(k.V,g,k.ga);Vn(e);k.qa=function(n){R("update_log_event_config")&&Xe.M(function(){return y(function(r){return x(r,
Wn(n),0)})});
h--;h||c()};
k.oa=0;k.pa=function(n){return function(){n.oa++;if(e.bypassNetworkless&&1===n.oa)try{em(b,"log_event",n.V,Xn({writeThenSend:!0},n.ga,n.qa,n.pa,f)),zn=!1}catch(r){ai(r),d()}h--;h||c()}}(k);
try{em(b,"log_event",k.V,Xn(e,k.ga,k.qa,k.pa,f)),zn=!1}catch(n){ai(n),d()}}}
function Rn(a,b,c,d,e){d=void 0===d?{}:d;var f=Math.round(U()),g=a.size,h=new Map([].concat(ia(a)));h=u(h);for(var k=h.next();!k.done;k=h.next()){var l=u(k.value).next().value,m=a.get(l);k=new Ph;var n=Xl(b.config_||Pl());J(k,th,1,n);m=m?Yn(m):[];m=u(m);for(n=m.next();!n.done;n=m.next())ud(k,3,Kh,n.value);(m=Dn[l])&&Zn(k,l,m);delete Dn[l];l="visitorOnlyApprovedKey"===l;$n(k,f,l);Vn(d);k=Cd(k);l=Xn(d,l,function(r){R("update_log_event_config")&&Xe.M(function(){return y(function(q){return x(q,Wn(r),
0)})});
g--;g||c()},function(){g--;
g||c()},e);
l.headers["Content-Type"]="application/json+protobuf";l.postBodyFormat="JSPB";l.postBody=k;em(b,"log_event","",l);zn=!1}}
function Vn(a){R("always_send_and_write")&&(a.writeThenSend=!1)}
function Xn(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,Za:a,dangerousLogToVisitorSession:b,ac:!!e,headers:{},postBodyFormat:"",postBody:""};ao()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(U())));return a}
function Un(a,b,c){ao()||(a.requestTimeMs=String(b));R("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=P("EVENT_ID"))&&(c=bo(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function $n(a,b,c){ao()||I(a,2,b);if(!c&&(b=P("EVENT_ID"))){c=bo();var d=new Mh;I(d,1,b);I(d,2,c);J(a,Mh,5,d)}}
function bo(){var a=P("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*tn/2));a++;a>tn&&(a=1);Vh("BATCH_CLIENT_COUNTER",a);return a}
function Tn(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Zn(a,b,c){if(vd(c,1===od(c,Oh)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;J(a,Nh,4,c);a=pd(a,th,1)||new th;c=pd(a,rh,3)||new rh;var e=new qh;I(e,2,b);I(e,1,d);ud(c,12,qh,e);J(a,rh,3,c)}
function Yn(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new Kh(a[c]))}catch(d){ai(new oj("Transport failed to deserialize "+String(a[c])))}return b}
function Hn(a,b){if(C("yt.logging.transport.enableScrapingForTest")){var c=C("yt.logging.transport.scrapedPayloadsForTesting"),d=C("yt.logging.transport.payloadToScrape","");b&&(b=C("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);a&&a.payload[d]&&c.push((null==a?void 0:a.payload)[d]);B("yt.logging.transport.scrapedPayloadsForTesting",c)}}
function ao(){return R("use_request_time_ms_header")||R("lr_use_request_time_ms_header")}
function Ln(a,b){return R("transport_use_scheduler")?jj(a,b):oi(a,b)}
function Sn(a){R("transport_use_scheduler")?Xe.aa(a):window.clearTimeout(a)}
function Wn(a){var b,c,d,e,f,g,h,k,l,m;return y(function(n){if(1==n.h){d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup;var r=d?d[dh.name]:void 0;e=r;g=null==(f=d)?void 0:f.hotHashData;r=d?d[ch.name]:void 0;h=r;l=null==(k=d)?void 0:k.coldHashData;mn||(mn=new jn);m=mn.resolve(Ll);return g?e?x(n,Ml(m,g,e),2):x(n,Ml(m,g),2):n.s(2)}return l?h?x(n,Nl(m,l,h),0):x(n,Nl(m,l),0):n.s(0)})}
;var co=A.ytLoggingGelSequenceIdObj_||{};B("ytLoggingGelSequenceIdObj_",co);function eo(a){Mn(void 0,void 0,void 0===a?!1:a)}
function fo(a){co[a]=a in co?co[a]+1:0;return co[a]}
;var go=[];
function ho(a,b){var c=void 0===c?{}:c;var d=Wm;P("ytLoggingEventsDefaultDisabled",!1)&&Wm===Wm&&(d=null);if(R("web_all_payloads_via_jspb"))go.push({hc:a,payload:b,options:c});else{c=void 0===c?{}:c;var e={},f=Math.round(c.timestamp||U());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;R("enable_unknown_lact_fix_on_html5")&&$m();a=cn();e.context={lastActivityMs:String(c.timestamp||!isFinite(a)?-1:a)};R("log_sequence_info_on_gel_web")&&c.sequenceGroup&&(a=e.context,b=c.sequenceGroup,b={index:fo(b),
groupKey:b},a.sequence=b,c.endOfSequence&&delete co[c.sequenceGroup]);(c.sendIsolatedPayload?On:Gn)({endpoint:"log_event",payload:e,cttAuthInfo:c.cttAuthInfo,dangerousLogToVisitorSession:c.dangerousLogToVisitorSession},d)}}
;var io=A.ytLoggingGelSequenceIdObj_||{};B("ytLoggingGelSequenceIdObj_",io);function jo(a){var b=void 0;b=void 0===b?{}:b;var c=!1;P("ytLoggingEventsDefaultDisabled",!1)&&(c=!0);c=c?null:Wm;b=void 0===b?{}:b;var d=Math.round(b.timestamp||U());I(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=cn();d=new Jh;I(d,1,b.timestamp||!isFinite(e)?-1:e);if(R("log_sequence_info_on_gel_web")&&b.sequenceGroup){e=b.sequenceGroup;var f=fo(e),g=new Ih;I(g,2,f);I(g,1,e);J(d,Ih,3,g);b.endOfSequence&&delete io[b.sequenceGroup]}J(a,Jh,33,d);(b.sendIsolatedPayload?Qn:Kn)({endpoint:"log_event",payload:a,
cttAuthInfo:b.cttAuthInfo,dangerousLogToVisitorSession:b.dangerousLogToVisitorSession},c)}
;var ko=new Set,lo=0,mo=0,no=0,oo=[],po=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function qo(){for(var a=u(po),b=a.next();!b.done;b=a.next()){var c=Lb();if(c&&0<=c.toLowerCase().indexOf(b.value.toLowerCase()))return!0}return!1}
;function ro(){var a;return y(function(b){return(a=rf())?b.return(a.then(function(c){c=Cd(c);for(var d=[],e=0,f=0;f<c.length;f++){var g=c.charCodeAt(f);255<g&&(d[e++]=g&255,g>>=8);d[e++]=g}return xc(d,3)})):b.return(Promise.resolve(null))})}
;var so={};function to(a){return so[a]||(so[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var uo={},vo=[],Lg=new N,wo={};function xo(){for(var a=u(vo),b=a.next();!b.done;b=a.next())b=b.value,b()}
function yo(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[to(b)]:a.getAttribute("data-"+b):null;return c}
function zo(a){Lg.fa.apply(Lg,arguments)}
;function Ao(a){this.h=a||{};a=[this.h,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function Bo(a,b){a=[a.h,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function Co(a,b,c){Do||(Do={},ni(window,"message",function(d){a:{if(d.origin===Bo(a,"host")){try{var e=JSON.parse(d.data)}catch(f){e=void 0;break a}if(d=Do[e.id])d.u=!0,d.u&&(F(d.m,d.sendMessage,d),d.m.length=0),d.Oa(e)}e=void 0}return e}));
Do[c]=b}
var Do=null;var Eo=window;
function Fo(a,b,c){this.o=this.h=this.i=null;this.j=0;this.u=!1;this.m=[];this.l=null;this.H={};if(!a)throw Error("YouTube player element ID required.");this.id=Ra(this);this.C=c;c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?Sb(a.src):"https://www.youtube.com"),this.i=new Ao(b),c||(b=Go(this,a),this.o=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.h=a,this.h.id||(this.h.id="widget"+Ra(this.h)),uo[this.h.id]=this,window.postMessage){this.l=
new N;Ho(this);b=Bo(this.i,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in wo)wo.hasOwnProperty(e)&&Io(this,e)}}
p=Fo.prototype;p.setSize=function(a,b){this.h.width=a.toString();this.h.height=b.toString();return this};
p.getIframe=function(){return this.h};
p.Oa=function(a){Jo(this,a.event,a)};
p.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.l.subscribe(a,c);Ko(this,a);return this};
function Io(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.C===b[0]&&Ko(a,c)}}
p.destroy=function(){this.h&&this.h.id&&(uo[this.h.id]=null);var a=this.l;a&&"function"==typeof a.dispose&&a.dispose();if(this.o){a=this.h;var b=a.parentNode;b&&b.replaceChild(this.o,a)}else(a=this.h)&&a.parentNode&&a.parentNode.removeChild(a);Do&&(Do[this.id]=null);this.i=null;a=this.h;for(var c in lb)lb[c][0]==a&&li(c);this.o=this.h=null};
p.Ra=function(){return{}};
function Lo(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.u?a.sendMessage(b):a.m.push(b)}
function Jo(a,b,c){a.l.j||(c={target:a,data:c},a.l.fa(b,c),zo(a.C+"."+b,c))}
function Go(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+Bo(a.i,"title"));(b=Bo(a.i,"width"))&&c.setAttribute("width",b.toString());(b=Bo(a.i,"height"))&&c.setAttribute("height",
b.toString());var g=a.Ra();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&F(["debugjs","debugcss"],function(k){var l=$b(window.location.href,k);null!==l&&(g[k]=l)});
var h=""+Bo(a.i,"host")+("/embed/"+Bo(a.i,"videoId"))+"?"+Yb(g);Eo.yt_embedsEnableUaChProbe?ro().then(function(k){var l=new URL(h),m=Number(l.searchParams.get("reloads"));isNaN(m)&&(m=0);l.searchParams.set("reloads",(m+1).toString());k&&l.searchParams.set("uach",k);l.searchParams.set("uats",Math.floor(window.performance.timeOrigin).toString());k=Ud(l.href).toString();Qd(c,Xd(k));return k}):Eo.yt_embedsEnableIframeSrcWithIntent?Qd(c,Xd(h)):c.src=h;
return c}
p.ab=function(){this.h&&this.h.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.j)};
function Ho(a){Co(a.i,a,a.id);a.j=pi(a.ab.bind(a),250);ni(a.h,"load",function(){window.clearInterval(a.j);a.j=pi(a.ab.bind(a),250)})}
function Ko(a,b){a.H[b]||(a.H[b]=!0,Lo(a,"addEventListener",[b]))}
p.sendMessage=function(a){a.id=this.id;a.channel="widget";var b=JSON.stringify(a),c=[Sb(this.h.src||"").replace("http:","https:")];if(this.h.contentWindow)for(var d=0;d<c.length;d++)try{this.h.contentWindow.postMessage(b,c[d])}catch(Ub){if(Ub.name&&"SyntaxError"===Ub.name){if(!(Ub.message&&0<Ub.message.indexOf("target origin ''"))){var e=void 0,f=Ub;e=void 0===e?{}:e;e.name=P("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=P("INNERTUBE_CONTEXT_CLIENT_VERSION");var g=e||{},h="WARNING";h=void 0===h?"ERROR":
h;if(f){f.hasOwnProperty("level")&&f.level&&(h=f.level);if(R("console_log_js_exceptions")){var k=f,l=[];l.push("Name: "+k.name);l.push("Message: "+k.message);k.hasOwnProperty("params")&&l.push("Error Params: "+JSON.stringify(k.params));k.hasOwnProperty("args")&&l.push("Error args: "+JSON.stringify(k.args));l.push("File name: "+k.fileName);l.push("Stacktrace: "+k.stack);window.console.log(l.join("\n"),k)}if(!(5<=lo)){var m=void 0,n=void 0,r=f,q=g,w=Kd(r),z=w.message||"Unknown Error",D=w.name||"UnknownError",
K=w.stack||r.i||"Not available";if(K.startsWith(D+": "+z)){var M=K.split("\n");M.shift();K=M.join("\n")}var O=w.lineNumber||"Not available",ob=w.fileName||"Not available",tc=K,ya=0;if(r.hasOwnProperty("args")&&r.args&&r.args.length)for(var ra=0;ra<r.args.length&&!(ya=$i(r.args[ra],"params."+ra,q,ya),500<=ya);ra++);else if(r.hasOwnProperty("params")&&r.params){var X=r.params;if("object"===typeof r.params)for(n in X){if(X[n]){var ca="params."+n,da=bj(X[n]);q[ca]=da;ya+=ca.length+da.length;if(500<ya)break}}else q.params=
bj(X)}if(oo.length)for(var W=0;W<oo.length&&!(ya=$i(oo[W],"params.context."+W,q,ya),500<=ya);W++);navigator.vendor&&!q.hasOwnProperty("vendor")&&(q["device.vendor"]=navigator.vendor);var S={message:z,name:D,lineNumber:O,fileName:ob,stack:tc,params:q,sampleWeight:1},bk=Number(r.columnNumber);isNaN(bk)||(S.lineNumber=S.lineNumber+":"+bk);if("IGNORED"===r.level)m=0;else a:{for(var ck=Wi(),dk=u(ck.U),Yf=dk.next();!Yf.done;Yf=dk.next()){var ek=Yf.value;if(S.message&&S.message.match(ek.ec)){m=ek.weight;
break a}}for(var fk=u(ck.T),Zf=fk.next();!Zf.done;Zf=fk.next()){var gk=Zf.value;if(gk.mb(S)){m=gk.weight;break a}}m=1}S.sampleWeight=m;for(var hk=u(Ri),$f=hk.next();!$f.done;$f=hk.next()){var ag=$f.value;if(ag.Aa[S.name])for(var ik=u(ag.Aa[S.name]),bg=ik.next();!bg.done;bg=ik.next()){var jk=bg.value,Vd=S.message.match(jk.regexp);if(Vd){S.params["params.error.original"]=Vd[0];for(var cg=jk.groups,kk={},Vb=0;Vb<cg.length;Vb++)kk[cg[Vb]]=Vd[Vb+1],S.params["params.error."+cg[Vb]]=Vd[Vb+1];S.message=ag.Ka(kk);
break}}}S.params||(S.params={});var lk=Wi();S.params["params.errorServiceSignature"]="msg="+lk.U.length+"&cb="+lk.T.length;S.params["params.serviceWorker"]="false";A.document&&A.document.querySelectorAll&&(S.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));tb("sample").constructor!==sb&&(S.params["params.fconst"]="true");var ua=S;window.yterr&&"function"===typeof window.yterr&&window.yterr(ua);if(0!==ua.sampleWeight&&!ko.has(ua.message)){if("ERROR"===h){Xi.fa("handleError",
ua);if(R("record_app_crashed_web")&&0===no&&1===ua.sampleWeight)if(no++,R("errors_via_jspb")){var dg=new Hh;I(dg,1,1);if(!R("report_client_error_with_app_crash_ks")){var mk=new Ch;I(mk,1,ua.message);var nk=new Dh;J(nk,Ch,3,mk);var ok=new Eh;J(ok,Dh,5,nk);var pk=new Fh;J(pk,Eh,9,ok);J(dg,Fh,4,pk)}var Ro=dg,qk=new Kh;sd(qk,Hh,20,Lh,Ro);jo(qk)}else{var rk={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};R("report_client_error_with_app_crash_ks")||(rk.systemHealth={crashData:{clientError:{logMessage:{message:ua.message}}}});
ho("appCrashed",rk)}mo++}else"WARNING"===h&&Xi.fa("handleWarning",ua);if(R("kevlar_gel_error_routing"))a:{var eg=void 0,fg=void 0,Mc=h,Q=ua;if(R("errors_via_jspb")){if(qo())fg=void 0;else{var Wb=new zh;I(Wb,1,Q.stack);Q.fileName&&I(Wb,4,Q.fileName);var Ma=Q.lineNumber&&Q.lineNumber.split?Q.lineNumber.split(":"):[];0!==Ma.length&&(1!==Ma.length||isNaN(Number(Ma[0]))?2!==Ma.length||isNaN(Number(Ma[0]))||isNaN(Number(Ma[1]))||(I(Wb,2,Number(Ma[0])),I(Wb,3,Number(Ma[1]))):I(Wb,2,Number(Ma[0])));var vb=
new Ch;I(vb,1,Q.message);I(vb,3,Q.name);I(vb,6,Q.sampleWeight);"ERROR"===Mc?I(vb,2,2):"WARNING"===Mc?I(vb,2,1):I(vb,2,0);var gg=new Ah;I(gg,1,!0);sd(gg,zh,3,Bh,Wb);var wb=new wh;I(wb,3,window.location.href);for(var sk=P("FEXP_EXPERIMENTS",[]),hg=0;hg<sk.length;hg++){var tk=wb,So=sk[hg];Yc(tk);md(tk,5,2,!1,!1).push(So)}var ig=Wh();if(!Xh()&&ig)for(var uk=u(Object.keys(ig)),xb=uk.next();!xb.done;xb=uk.next()){var vk=xb.value,jg=new yh;I(jg,1,vk);I(jg,2,String(ig[vk]));ud(wb,4,yh,jg)}var kg=Q.params;
if(kg){var wk=u(Object.keys(kg));for(xb=wk.next();!xb.done;xb=wk.next()){var xk=xb.value,lg=new yh;I(lg,1,"client."+xk);I(lg,2,String(kg[xk]));ud(wb,4,yh,lg)}}var yk=P("SERVER_NAME"),zk=P("SERVER_VERSION");if(yk&&zk){var mg=new yh;I(mg,1,"server.name");I(mg,2,yk);ud(wb,4,yh,mg);var ng=new yh;I(ng,1,"server.version");I(ng,2,zk);ud(wb,4,yh,ng)}var Wd=new Dh;J(Wd,wh,1,wb);J(Wd,Ah,2,gg);J(Wd,Ch,3,vb);fg=Wd}var Ak=fg;if(!Ak)break a;var Bk=new Kh;sd(Bk,Dh,163,Lh,Ak);jo(Bk)}else{if(qo())eg=void 0;else{var Nc=
{stackTrace:Q.stack};Q.fileName&&(Nc.filename=Q.fileName);var Na=Q.lineNumber&&Q.lineNumber.split?Q.lineNumber.split(":"):[];0!==Na.length&&(1!==Na.length||isNaN(Number(Na[0]))?2!==Na.length||isNaN(Number(Na[0]))||isNaN(Number(Na[1]))||(Nc.lineNumber=Number(Na[0]),Nc.columnNumber=Number(Na[1])):Nc.lineNumber=Number(Na[0]));var og={level:"ERROR_LEVEL_UNKNOWN",message:Q.message,errorClassName:Q.name,sampleWeight:Q.sampleWeight};"ERROR"===Mc?og.level="ERROR_LEVEL_ERROR":"WARNING"===Mc&&(og.level="ERROR_LEVEL_WARNNING");
var To={isObfuscated:!0,browserStackInfo:Nc},Xb={pageUrl:window.location.href,kvPairs:[]};P("FEXP_EXPERIMENTS")&&(Xb.experimentIds=P("FEXP_EXPERIMENTS"));var pg=Wh();if(!Xh()&&pg)for(var Ck=u(Object.keys(pg)),yb=Ck.next();!yb.done;yb=Ck.next()){var Dk=yb.value;Xb.kvPairs.push({key:Dk,value:String(pg[Dk])})}var qg=Q.params;if(qg){var Ek=u(Object.keys(qg));for(yb=Ek.next();!yb.done;yb=Ek.next()){var Fk=yb.value;Xb.kvPairs.push({key:"client."+Fk,value:String(qg[Fk])})}}var Gk=P("SERVER_NAME"),Hk=P("SERVER_VERSION");
Gk&&Hk&&(Xb.kvPairs.push({key:"server.name",value:Gk}),Xb.kvPairs.push({key:"server.version",value:Hk}));eg={errorMetadata:Xb,stackTrace:To,logMessage:og}}var Ik=eg;if(!Ik)break a;ho("clientError",Ik)}if("ERROR"===Mc||R("errors_flush_gel_always_killswitch"))b:{if(R("web_fp_via_jspb")&&(eo(!0),!R("web_fp_via_jspb_and_json")))break b;eo()}}if(!R("suppress_error_204_logging")){var zb=ua,Oc=zb.params||{},$a={urlParams:{a:"logerror",t:"jserror",type:zb.name,msg:zb.message.substr(0,250),line:zb.lineNumber,
level:h,"client.name":Oc.name},postParams:{url:P("PAGE_NAME",window.location.href),file:zb.fileName},method:"POST"};Oc.version&&($a["client.version"]=Oc.version);if($a.postParams){zb.stack&&($a.postParams.stack=zb.stack);for(var Jk=u(Object.keys(Oc)),rg=Jk.next();!rg.done;rg=Jk.next()){var Kk=rg.value;$a.postParams["client."+Kk]=Oc[Kk]}var sg=Wh();if(sg)for(var Lk=u(Object.keys(sg)),tg=Lk.next();!tg.done;tg=Lk.next()){var Mk=tg.value;$a.postParams[Mk]=sg[Mk]}var Nk=P("SERVER_NAME"),Ok=P("SERVER_VERSION");
Nk&&Ok&&($a.postParams["server.name"]=Nk,$a.postParams["server.version"]=Ok)}Ii(P("ECATCHER_REPORT_HOST","")+"/error_204",$a)}try{ko.add(ua.message)}catch(Yo){}lo++}}}}}else throw Ub;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function Mo(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function No(a){return 0===a.search("get")||0===a.search("is")}
;function Oo(a,b){Fo.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.P={};this.playerInfo={};this.videoTitle=""}
v(Oo,Fo);p=Oo.prototype;p.Ra=function(){var a=Bo(this.i,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Bo(this.i,"embedConfig")){if(Qa(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
p.Oa=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Qa(a))for(var c in a)a.hasOwnProperty(c)&&(this.P[c]=a[c]);break;case "infoDelivery":Po(this,a);break;case "initialDelivery":Qa(a)&&(window.clearInterval(this.j),this.playerInfo={},this.P={},Qo(this,a.apiInterface),Po(this,a));break;default:Jo(this,b,a)}};
function Po(a,b){if(Qa(b)){for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c]);a.playerInfo.hasOwnProperty("videoData")&&(b=a.playerInfo.videoData,b.hasOwnProperty("title")&&b.title?(b=b.title,b!==a.videoTitle&&(a.videoTitle=b,a.h.setAttribute("title",b))):(a.videoTitle="",a.h.setAttribute("title","YouTube "+Bo(a.i,"title"))))}}
function Qo(a,b){F(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:Mo(c)?this[c]=function(){this.playerInfo={};
this.P={};Lo(this,c,arguments);return this}:No(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){Lo(this,c,arguments);
return this})},a)}
p.getVideoEmbedCode=function(){var a=Bo(this.i,"host")+("/embed/"+Bo(this.i,"videoId")),b=Number(Bo(this.i,"width")),c=Number(Bo(this.i,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);var d=this.videoTitle;Hb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(Bb,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(Cb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(Db,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(Eb,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(Fb,
"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(Gb,"&#0;")));return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="'+((null!=d?d:"YouTube video player")+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')};
p.getOptions=function(a){return this.P.namespaces?a?this.P[a]?this.P[a].options||[]:[]:this.P.namespaces||[]:[]};
p.getOption=function(a,b){if(this.P.namespaces&&a&&b&&this.P[a])return this.P[a][b]};
function Uo(a){if("iframe"!==a.tagName.toLowerCase()){var b=yo(a,"videoid");b&&(b={videoId:b,width:yo(a,"width"),height:yo(a,"height")},new Oo(a,b))}}
;B("YT.PlayerState.UNSTARTED",-1);B("YT.PlayerState.ENDED",0);B("YT.PlayerState.PLAYING",1);B("YT.PlayerState.PAUSED",2);B("YT.PlayerState.BUFFERING",3);B("YT.PlayerState.CUED",5);B("YT.get",function(a){return uo[a]});
B("YT.scan",xo);B("YT.subscribe",function(a,b,c){Lg.subscribe(a,b,c);wo[a]=!0;for(var d in uo)uo.hasOwnProperty(d)&&Io(uo[d],a)});
B("YT.unsubscribe",function(a,b,c){Kg(a,b,c)});
B("YT.Player",Oo);Fo.prototype.destroy=Fo.prototype.destroy;Fo.prototype.setSize=Fo.prototype.setSize;Fo.prototype.getIframe=Fo.prototype.getIframe;Fo.prototype.addEventListener=Fo.prototype.addEventListener;Oo.prototype.getVideoEmbedCode=Oo.prototype.getVideoEmbedCode;Oo.prototype.getOptions=Oo.prototype.getOptions;Oo.prototype.getOption=Oo.prototype.getOption;
vo.push(function(a){var b=a;b||(b=document);a=hb(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=cb(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=hb(b);F(gb(a,b),Uo)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||xo();var Vo=A.onYTReady;Vo&&Vo();var Wo=A.onYouTubeIframeAPIReady;Wo&&Wo();var Xo=A.onYouTubePlayerAPIReady;Xo&&Xo();}).call(this);
