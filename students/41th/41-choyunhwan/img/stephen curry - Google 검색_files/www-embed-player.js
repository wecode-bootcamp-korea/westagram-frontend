(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var l;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=da(this);function n(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
n("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
n("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ia(a){return a.raw=a}
function p(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ja(a){if(!(a instanceof Array)){a=p(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ka(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var la="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ka(d,e)&&(a[e]=d[e])}return a};
n("Object.assign",function(a){return a||la});
var ma="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},pa=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ma(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),qa;
if("function"==typeof Object.setPrototypeOf)qa=Object.setPrototypeOf;else{var sa;a:{var ta={a:!0},ua={};try{ua.__proto__=ta;sa=ua.a;break a}catch(a){}sa=!1}qa=sa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var va=qa;
function u(a,b){a.prototype=ma(b.prototype);a.prototype.constructor=a;if(va)va(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Y=b.prototype}
function wa(){this.v=!1;this.l=null;this.i=void 0;this.h=1;this.m=this.o=0;this.s=this.j=null}
function xa(a){if(a.v)throw new TypeError("Generator is already running");a.v=!0}
wa.prototype.M=function(a){this.i=a};
function ya(a,b){a.j={Yb:b,fc:!0};a.h=a.o||a.m}
wa.prototype.return=function(a){this.j={return:a};this.h=this.m};
function v(a,b,c){a.h=c;return{value:b}}
wa.prototype.u=function(a){this.h=a};
function za(a,b,c){a.o=b;void 0!=c&&(a.m=c)}
function Aa(a,b){a.h=b;a.o=0}
function Ba(a){a.o=0;var b=a.j.Yb;a.j=null;return b}
function Ca(a){a.s=[a.j];a.o=0;a.m=0}
function Da(a){var b=a.s.splice(0)[0];(b=a.j=a.j||b)?b.fc?a.h=a.o||a.m:void 0!=b.u&&a.m<b.u?(a.h=b.u,a.j=null):a.h=a.m:a.h=0}
function Ea(a){this.h=new wa;this.i=a}
function Fa(a,b){xa(a.h);var c=a.h.l;if(c)return Ga(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ha(a)}
function Ga(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.v=!1,e;var f=e.value}catch(g){return a.h.l=null,ya(a.h,g),Ha(a)}a.h.l=null;d.call(a.h,f);return Ha(a)}
function Ha(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.v=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ya(a.h,c)}a.h.v=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.fc)throw b.Yb;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ia(a){this.next=function(b){xa(a.h);a.h.l?b=Ga(a,a.h.l.next,b,a.h.M):(a.h.M(b),b=Ha(a));return b};
this.throw=function(b){xa(a.h);a.h.l?b=Ga(a,a.h.l["throw"],b,a.h.M):(ya(a.h,b),b=Ha(a));return b};
this.return=function(b){return Fa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ja(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function x(a){return Ja(new Ia(new Ea(a)))}
function Ka(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
n("Reflect",function(a){return a?a:{}});
n("Reflect.construct",function(){return pa});
n("Reflect.setPrototypeOf",function(a){return a?a:va?function(b,c){try{return va(b,c),!0}catch(d){return!1}}:null});
n("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.v=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=fa.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(m){this.l(m)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(m){return function(q){k||(k=!0,m.call(h,q))}}
var h=this,k=!1;return{resolve:g(this.K),reject:g(this.m)}};
b.prototype.K=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.P(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.J(g):this.o(g)}};
b.prototype.J=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.T(h,g):this.o(g)};
b.prototype.m=function(g){this.M(2,g)};
b.prototype.o=function(g){this.M(1,g)};
b.prototype.M=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.O();this.s()};
b.prototype.O=function(){var g=this;e(function(){if(g.F()){var h=fa.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.F=function(){if(this.v)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.s=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.P=function(g){var h=this.l();g.eb(h.resolve,h.reject)};
b.prototype.T=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(m){k.reject(m)}};
b.prototype.then=function(g,h){function k(w,t){return"function"==typeof w?function(z){try{m(w(z))}catch(D){q(D)}}:t}
var m,q,r=new b(function(w,t){m=w;q=t});
this.eb(k(g,m),k(h,q));return r};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.eb=function(g,h){function k(){switch(m.h){case 1:g(m.j);break;case 2:h(m.j);break;default:throw Error("Unexpected state: "+m.h);}}
var m=this;null==this.i?f.i(k):this.i.push(k);this.v=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var m=p(g),q=m.next();!q.done;q=m.next())d(q.value).eb(h,k)})};
b.all=function(g){var h=p(g),k=h.next();return k.done?d([]):new b(function(m,q){function r(z){return function(D){w[z]=D;t--;0==t&&m(w)}}
var w=[],t=0;do w.push(void 0),t++,d(k.value).eb(r(w.length-1),q),k=h.next();while(!k.done)})};
return b});
n("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=p(k);for(var m;!(m=k.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(k){var m=typeof k;return"object"===m&&null!==k||"function"===m}
function e(k){if(!ka(k,g)){var m=new c;ba(k,g,{value:m})}}
function f(k){var m=Object[k];m&&(Object[k]=function(q){if(q instanceof c)return q;Object.isExtensible(q)&&e(q);return m(q)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),m=Object.seal({}),q=new a([[k,2],[m,3]]);if(2!=q.get(k)||3!=q.get(m))return!1;q.delete(k);q.set(m,4);return!q.has(k)&&4==q.get(m)}catch(r){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,m){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ka(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=m;return this};
b.prototype.get=function(k){return d(k)&&ka(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ka(k,g)&&ka(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ka(k,g)&&ka(k[g],this.h)?delete k[g][this.h]:!1};
return b});
n("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var m=h.h;return ha(function(){if(m){for(;m.head!=h.h;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:k(m)};m=null}return{done:!0,value:void 0}})}
function d(h,k){var m=k&&typeof k;"object"==m||"function"==m?f.has(k)?m=f.get(k):(m=""+ ++g,f.set(k,m)):m="p_"+k;var q=h.data_[m];if(q&&ka(h.data_,m))for(h=0;h<q.length;h++){var r=q[h];if(k!==k&&r.key!==r.key||k===r.key)return{id:m,list:q,index:h,entry:r}}return{id:m,list:q,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=p(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(p([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var m=k.entries(),q=m.next();if(q.done||q.value[0]!=h||"s"!=q.value[1])return!1;q=m.next();return q.done||4!=q.value[0].x||"t"!=q.value[1]||!m.next().done?!1:!0}catch(r){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var m=d(this,h);m.list||(m.list=this.data_[m.id]=[]);m.entry?m.entry.value=k:(m.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},m.list.push(m.entry),this.h.previous.next=m.entry,this.h.previous=m.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var m=this.entries(),q;!(q=m.next()).done;)q=q.value,h.call(k,q[1],q[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function La(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
n("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=La(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
n("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
n("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=La(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
n("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
n("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
n("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
n("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
function Ma(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
n("Array.prototype.entries",function(a){return a?a:function(){return Ma(this,function(b,c){return[b,c]})}});
n("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
n("Array.prototype.keys",function(a){return a?a:function(){return Ma(this,function(b){return b})}});
n("Array.prototype.values",function(a){return a?a:function(){return Ma(this,function(b,c){return c})}});
n("Array.prototype.fill",function(a){return a?a:function(b,c,d){var e=this.length||0;0>c&&(c=Math.max(0,e+c));if(null==d||d>e)d=e;d=Number(d);0>d&&(d=Math.max(0,e+d));for(c=Number(c||0);c<d;c++)this[c]=b;return this}});
function Na(a){return a?a:Array.prototype.fill}
n("Int8Array.prototype.fill",Na);n("Uint8Array.prototype.fill",Na);n("Uint8ClampedArray.prototype.fill",Na);n("Int16Array.prototype.fill",Na);n("Uint16Array.prototype.fill",Na);n("Int32Array.prototype.fill",Na);n("Uint32Array.prototype.fill",Na);n("Float32Array.prototype.fill",Na);n("Float64Array.prototype.fill",Na);n("Object.setPrototypeOf",function(a){return a||va});
n("Set",function(a){function b(c){this.h=new Map;if(c){c=p(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(p([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
n("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ka(b,d)&&c.push([d,b[d]]);return c}});
n("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
n("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
n("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==La(this,b,"includes").indexOf(b,c||0)}});
n("globalThis",function(a){return a||fa});
n("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ka(b,d)&&c.push(b[d]);return c}});
var Oa=Oa||{},y=this||self;function A(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function B(a,b){a=a.split(".");b=b||y;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Pa(a){a.zb=void 0;a.getInstance=function(){return a.zb?a.zb:a.zb=new a}}
function Qa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ra(a){var b=Qa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Sa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ta(a){return Object.prototype.hasOwnProperty.call(a,Va)&&a[Va]||(a[Va]=++Wa)}
var Va="closure_uid_"+(1E9*Math.random()>>>0),Wa=0;function Xa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ya(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Za(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Za=Xa:Za=Ya;return Za.apply(null,arguments)}
function $a(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function ab(a,b){function c(){}
c.prototype=b.prototype;a.Y=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.xr=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function bb(a){return a}
;function cb(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,cb);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
ab(cb,Error);cb.prototype.name="CustomError";function db(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function eb(){}
function fb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var gb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},hb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ib=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},jb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},kb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
hb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function lb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function mb(a,b){b=gb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function nb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ra(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function ob(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function pb(a){var b=rb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function sb(a){for(var b in a)return!1;return!0}
function tb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function ub(a){return null!==a&&"privembed"in a?a.privembed:!1}
function vb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function wb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function xb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=xb(a[c]);return b}
var yb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function zb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<yb.length;f++)c=yb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var Ab;function Bb(){if(void 0===Ab){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:bb,createScript:bb,createScriptURL:bb})}catch(c){y.console&&y.console.error(c.message)}Ab=a}else Ab=a}return Ab}
;function Cb(a,b){this.j=a===Db&&b||""}
Cb.prototype.i=!0;Cb.prototype.h=function(){return this.j};
function Eb(a){return new Cb(Db,a)}
var Db={};Eb("");var Fb={};function Gb(a,b){this.j=b===Fb?a:"";this.i=!0}
Gb.prototype.toString=function(){return this.j.toString()};
Gb.prototype.h=function(){return this.j.toString()};function Hb(a,b){this.j=b===Ib?a:""}
Hb.prototype.toString=function(){return this.j+""};
Hb.prototype.i=!0;Hb.prototype.h=function(){return this.j.toString()};
function Lb(a){if(a instanceof Hb&&a.constructor===Hb)return a.j;Qa(a);return"type_error:TrustedResourceUrl"}
var Ib={};function Mb(a){var b=Bb();a=b?b.createScriptURL(a):a;return new Hb(a,Ib)}
;var Nb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Ob(a,b){return a<b?-1:a>b?1:0}
;function Pb(a,b){this.j=b===Qb?a:""}
Pb.prototype.toString=function(){return this.j.toString()};
Pb.prototype.i=!0;Pb.prototype.h=function(){return this.j.toString()};
function Rb(a){if(a instanceof Pb&&a.constructor===Pb)return a.j;Qa(a);return"type_error:SafeUrl"}
var Sb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Qb={},Tb=new Pb("about:invalid#zClosurez",Qb);function Ub(){var a=y.navigator;return a&&(a=a.userAgent)?a:""}
function C(a){return-1!=Ub().indexOf(a)}
;function Vb(){return C("Trident")||C("MSIE")}
function Wb(){return C("Firefox")||C("FxiOS")}
function Xb(){return C("Safari")&&!(Yb()||C("Coast")||C("Opera")||C("Edge")||C("Edg/")||C("OPR")||Wb()||C("Silk")||C("Android"))}
function Yb(){return(C("Chrome")||C("CriOS"))&&!C("Edge")||C("Silk")}
function Zb(){return C("Android")&&!(Yb()||Wb()||C("Opera")||C("Silk"))}
function bc(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}}
function cc(a){var b=Ub();if("Internet Explorer"===a){if(Vb())if((a=/rv: *([\d\.]*)/.exec(b))&&a[1])b=a[1];else{a="";var c=/MSIE +([\d\.]+)/.exec(b);if(c&&c[1])if(b=/Trident\/(\d.\d)/.exec(b),"7.0"==c[1])if(b&&b[1])switch(b[1]){case "4.0":a="8.0";break;case "5.0":a="9.0";break;case "6.0":a="10.0";break;case "7.0":a="11.0"}else a="7.0";else a=c[1];b=a}else b="";return b}var d=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");c=[];for(var e;e=d.exec(b);)c.push([e[1],e[2],e[3]||void 0]);b=bc(c);
switch(a){case "Opera":if(C("Opera"))return b(["Version","Opera"]);if(C("OPR"))return b(["OPR"]);break;case "Microsoft Edge":if(C("Edge"))return b(["Edge"]);if(C("Edg/"))return b(["Edg"]);break;case "Chromium":if(Yb())return b(["Chrome","CriOS","HeadlessChrome"])}return"Firefox"===a&&Wb()||"Safari"===a&&Xb()||"Android Browser"===a&&Zb()||"Silk"===a&&C("Silk")?(b=c[2])&&b[1]||"":""}
function dc(a){a=cc(a);if(""===a)return NaN;a=a.split(".");return 0===a.length?NaN:Number(a[0])}
;var ec={};function fc(a){this.j=ec===ec?a:"";this.i=!0}
fc.prototype.h=function(){return this.j.toString()};
fc.prototype.toString=function(){return this.j.toString()};function gc(a,b){b instanceof Pb||b instanceof Pb||(b="object"==typeof b&&b.i?b.h():String(b),Sb.test(b)||(b="about:invalid#zClosurez"),b=new Pb(b,Qb));a.href=Rb(b)}
function hc(a,b){a.rel="stylesheet";a.href=Lb(b).toString();(b=ic('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function jc(){return ic("script[nonce]")}
var kc=/^[\w+/_-]+[=]{0,2}$/;function ic(a,b){b=(b||y).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&kc.test(a)?a:"":""}
;function lc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var mc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nc(a){return a?decodeURI(a):a}
function oc(a,b){return b.match(mc)[a]||null}
function pc(a){return nc(oc(3,a))}
function qc(a){var b=a.match(mc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function rc(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function sc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)sc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function tc(a,b){var c=[];for(b=b||0;b<a.length;b+=2)sc(a[b],a[b+1],c);return c.join("&")}
function uc(a){var b=[],c;for(c in a)sc(c,a[c],b);return b.join("&")}
function vc(a,b){var c=2==arguments.length?tc(arguments[1],0):tc(arguments,1);return rc(a,c)}
function wc(a,b){b=uc(b);return rc(a,b)}
function xc(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return rc(a,b+c)}
function yc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var zc=/#|$/,Dc=/[?&]($|#)/;function Ec(a,b){for(var c=a.search(zc),d=0,e,f=[];0<=(e=yc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(Dc,"$1")}
;function Fc(a){y.setTimeout(function(){throw a;},0)}
;function Gc(){return C("iPhone")&&!C("iPod")&&!C("iPad")}
function Hc(){var a=Ub(),b="";C("Windows")?(b=/Windows (?:NT|Phone) ([0-9.]+)/,b=(a=b.exec(a))?a[1]:"0.0"):Gc()||C("iPad")||C("iPod")?(b=/(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,b=(a=b.exec(a))&&a[1].replace(/_/g,".")):C("Macintosh")?(b=/Mac OS X ([0-9_.]+)/,b=(a=b.exec(a))?a[1].replace(/_/g,"."):"10"):-1!=Ub().toLowerCase().indexOf("kaios")?(b=/(?:KaiOS)\/(\S+)/i,b=(a=b.exec(a))&&a[1]):C("Android")?(b=/Android\s+([^\);]+)(\)|;)/,b=(a=b.exec(a))&&a[1]):C("CrOS")&&(b=/(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,
b=(a=b.exec(a))&&a[1]);a=0;b=Nb(String(b||"")).split(".");for(var c=Nb("12").split("."),d=Math.max(b.length,c.length),e=0;0==a&&e<d;e++){var f=b[e]||"",g=c[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;a=Ob(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||Ob(0==f[2].length,0==g[2].length)||Ob(f[2],g[2]);f=f[3];g=g[3]}while(0==a)}}
;function Ic(a){Ic[" "](a);return a}
Ic[" "]=function(){};var Jc=C("Opera"),Kc=Vb(),Lc=C("Edge"),Mc=C("Gecko")&&!(-1!=Ub().toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),Nc=-1!=Ub().toLowerCase().indexOf("webkit")&&!C("Edge"),Oc=C("Android");function Pc(){var a=y.document;return a?a.documentMode:void 0}
var Qc;a:{var Rc="",Sc=function(){var a=Ub();if(Mc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Lc)return/Edge\/([\d\.]+)/.exec(a);if(Kc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Nc)return/WebKit\/(\S+)/.exec(a);if(Jc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Sc&&(Rc=Sc?Sc[1]:"");if(Kc){var Tc=Pc();if(null!=Tc&&Tc>parseFloat(Rc)){Qc=String(Tc);break a}}Qc=Rc}var Uc=Qc,Vc;if(y.document&&Kc){var Wc=Pc();Vc=Wc?Wc:parseInt(Uc,10)||void 0}else Vc=void 0;var Xc=Vc;var Yc=Gc()||C("iPod"),Zc=C("iPad");Zb();Yb();var $c=Xb()&&!(Gc()||C("iPad")||C("iPod"));var ad={},bd=null;function cd(a,b){Ra(a);void 0===b&&(b=0);dd();b=ad[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],m=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+m+g+h+k}m=0;k=d;switch(a.length-e){case 2:m=a[e+1],k=b[(m&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|m>>4]+k+d}return c.join("")}
function ed(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;fd(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function fd(a,b){function c(k){for(;d<a.length;){var m=a.charAt(d++),q=bd[m];if(null!=q)return q;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return k}
dd();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function dd(){if(!bd){bd={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));ad[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===bd[f]&&(bd[f]=e)}}}}
;var gd="undefined"!==typeof Uint8Array;function hd(a){return gd&&null!=a&&a instanceof Uint8Array}
var id={};var jd;function kd(a){if(a!==id)throw Error("illegal external caller");}
function ld(a,b){kd(b);this.ba=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
function md(){return jd||(jd=new ld(null,id))}
ld.prototype.Na=function(){return null==this.ba};
ld.prototype.sizeBytes=function(){kd(id);var a=this.ba;null==a||hd(a)||("string"===typeof a?a=ed(a):(Qa(a),a=null));return(a=null==a?a:this.ba=a)?a.length:0};var nd="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;function od(a,b){if(nd)return a[nd]|=b;if(void 0!==a.fa)return a.fa|=b;Object.defineProperties(a,{fa:{value:b,configurable:!0,writable:!0,enumerable:!1}});return b}
function pd(a,b){nd?a[nd]&&(a[nd]&=~b):void 0!==a.fa&&(a.fa&=~b)}
function qd(a){var b;nd?b=a[nd]:b=a.fa;return null==b?0:b}
function rd(a,b){nd?a[nd]=b:void 0!==a.fa?a.fa=b:Object.defineProperties(a,{fa:{value:b,configurable:!0,writable:!0,enumerable:!1}})}
function sd(a){od(a,1);return a}
function td(a){return!!(qd(a)&2)}
function yd(a){od(a,16);return a}
function zd(a,b){rd(b,(a|0)&-51)}
function Ad(a,b){rd(b,(a|18)&-41)}
;var Bd={};function Cd(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Dd,Ed,Fd=[];rd(Fd,23);Ed=Object.freeze(Fd);function Gd(a){if(td(a.C))throw Error("Cannot mutate an immutable Message");}
function Hd(a){var b=a.length;(b=b?a[b-1]:void 0)&&Cd(b)?b.g=1:(b={},a.push((b.g=1,b)))}
;var Id;function Jd(a){return a.displayName||a.name||"unknown type name"}
function Kd(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Jd(b)+" but got "+(a&&Jd(a.constructor)));return a}
;function Ld(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a)if(Array.isArray(a)){if(0!==(qd(a)&128))return a=Array.prototype.slice.call(a),Hd(a),a}else{if(hd(a))return cd(a);if(a instanceof ld){var b=a.ba;return null==b?"":"string"===typeof b?b:a.ba=cd(b)}}}return a}
;function Md(a,b,c,d){if(null!=a){if(Array.isArray(a))a=Nd(a,b,c,void 0!==d);else if(Cd(a)){var e={},f;for(f in a)e[f]=Md(a[f],b,c,d);a=e}else a=b(a,d);return a}}
function Nd(a,b,c,d){var e=qd(a);d=d?!!(e&16):void 0;a=Array.prototype.slice.call(a);for(var f=0;f<a.length;f++)a[f]=Md(a[f],b,c,d);c(e,a);return a}
function Od(a){return a.jb===Bd?a.toJSON():Ld(a)}
function Pd(a){if(!a)return a;if("object"===typeof a){if(hd(a))return new Uint8Array(a);if(a.jb===Bd)return a.clone()}return a}
function Qd(a,b){a&128&&Hd(b)}
;function Rd(a){var b=a.j+a.va;return a.X||(a.X=a.C[b]={})}
function Sd(a,b,c){return-1===b?null:b>=a.j?a.X?a.X[b]:void 0:c&&a.X&&(c=a.X[b],null!=c)?c:a.C[b+a.va]}
function E(a,b,c,d){Gd(a);return Td(a,b,c,d)}
function Td(a,b,c,d){a.l&&(a.l=void 0);if(b>=a.j||d)return Rd(a)[b]=c,a;a.C[b+a.va]=c;(c=a.X)&&b in c&&delete c[b];return a}
function Ud(a,b){a&&td(b.C)&&td(a.C);return a}
function Vd(a,b,c,d,e){var f=Sd(a,b,d);Array.isArray(f)||(f=Ed);var g=qd(f);g&1||sd(f);if(e)g&2||od(f,2),c&1||Object.freeze(f);else{e=!(c&2);var h=g&2;c&1||!h?e&&g&16&&!h&&pd(f,16):(f=sd(Array.prototype.slice.call(f)),Td(a,b,f,d))}return f}
function Wd(a,b,c,d){Gd(a);(c=Xd(a,c))&&c!==b&&null!=d&&Td(a,c,void 0,!1);return Td(a,b,d)}
function Xd(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=Sd(a,e)&&(0!==c&&Td(a,c,void 0,!1),c=e)}return c}
function Yd(a,b,c,d){var e=d=void 0===d?!1:d,f=Sd(a,c,e);var g=!1;var h=null==f||"object"!==typeof f||(g=Array.isArray(f))||f.jb!==Bd?g?new b(f):void 0:f;h!==f&&null!=h&&(Td(a,c,h,e),od(h.C,qd(a.C)&18));b=Ud(h,a);if(null==b)return b;td(a.C)||(e=Zd(b),e!==b&&(b=e,Td(a,c,b,d)));return Ud(b,a)}
function $d(a,b,c,d,e,f){a.h||(a.h={});var g=a.h[c],h=Vd(a,c,3,d,f);if(!g){var k=h;g=[];var m=!!(qd(a.C)&16);h=td(k);var q=k;!f&&h&&(k=Array.prototype.slice.call(k));for(var r=h,w=0;w<k.length;w++){var t=k[w];var z=b,D=!1;D=void 0===D?!1:D;t=Array.isArray(t)?new z(t):D?new z:void 0;if(void 0!==t){z=t.C;var F=D=qd(z);h&&(F|=2);m&&(F|=16);F!=D&&rd(z,F);z=F;r=r||!!(2&z);g.push(t)}}a.h[c]=g;b=k;k=!r;r=qd(b);m=r|33;k=k?m|8:m&-9;r!=k&&(Object.isFrozen(b)&&(b=Array.prototype.slice.call(b)),rd(b,k));k=b;
q!==k&&Td(a,c,k,d);(f||e&&h)&&od(g,2);(f||e)&&Object.freeze(g);return g}f||(Object.isFrozen(g)?e||(g=Array.prototype.slice.call(g),a.h[c]=g):e&&Object.freeze(g));return g}
function ae(a,b,c,d){var e=td(a.C);b=$d(a,b,c,d,e,e);a=Vd(a,c,3,d,e);if(!(e||qd(a)&8)){for(e=0;e<b.length;e++)c=b[e],d=Zd(c),c!==d&&(b[e]=d,a[e]=b[e].C);od(a,8)}return b}
function G(a,b,c,d){Gd(a);null!=d?Kd(d,b):d=void 0;return Td(a,c,d)}
function be(a,b,c,d,e){Gd(a);null!=e?Kd(e,b):e=void 0;Wd(a,c,d,e)}
function ce(a,b,c,d,e){Gd(a);if(null!=d){var f=sd([]);for(var g=!1,h=0;h<d.length;h++)f[h]=Kd(d[h],b).C,g=g||td(f[h]);a.h||(a.h={});a.h[c]=d;b=f;g?pd(b,8):od(b,8)}else a.h&&(a.h[c]=void 0),f=Ed;return Td(a,c,f,e)}
function de(a,b,c,d){Gd(a);var e=$d(a,c,b,void 0,!1,!1);c=null!=d?Kd(d,c):new c;a=Vd(a,b,2,void 0,!1);e.push(c);a.push(c.C);td(c.C)&&pd(a,8)}
function ee(a,b){return Sd(a,b)}
function fe(a,b){return null==a?b:a}
;function ge(a,b,c){c=void 0===c?Ad:c;if(null!=a){if(gd&&a instanceof Uint8Array)return a.length?new ld(new Uint8Array(a),id):md();if(Array.isArray(a)){var d=qd(a);if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return rd(a,d|2),a;a=Nd(a,ge,c,!0);b=qd(a);b&4&&b&2&&Object.freeze(a);return a}return a.jb===Bd?he(a):a}}
function ie(a,b,c,d,e,f,g){(a=a.h&&a.h[c])?(d=0<a.length?a[0].constructor:void 0,f=qd(a),f&2||(a=jb(a,he),Ad(f,a),Object.freeze(a)),ce(b,d,c,a,e)):E(b,c,ge(d,f,g),e)}
function he(a){if(td(a.C))return a;a=je(a,!0);od(a.C,2);return a}
function je(a,b){var c=a.C,d=yd([]),e=a.constructor.h;e&&d.push(e);e=a.X;if(e){d.length=c.length;d.fill(void 0,d.length,c.length);var f={};d[d.length-1]=f}0!==(qd(c)&128)&&Hd(d);b=b||td(a.C)?Ad:zd;var g=a.constructor;qd(d);Id=d;d=new g(d);Id=void 0;a.Ma&&(d.Ma=a.Ma.slice());g=!!(qd(c)&16);for(var h=e?c.length-1:c.length,k=0;k<h;k++)ie(a,d,k-a.va,c[k],!1,g,b);if(e)for(var m in e)c=e[m],h=+m,Number.isNaN(h)?f[h]=c:ie(a,d,h,c,!0,g,b);return d}
function Zd(a){if(!td(a.C))return a;var b=je(a,!1);b.l=a;return b}
;function H(a,b,c){null==a&&(a=Id);Id=void 0;var d=this.constructor.i||0,e=0<d,f=this.constructor.h,g=!1;if(null==a){a=f?[f]:[];var h=!0;rd(a,48)}else{if(!Array.isArray(a))throw Error();if(f&&f!==a[0])throw Error();var k=od(a,0),m=k;if(h=0!==(16&m))(g=0!==(32&m))||(m|=32);if(e)if(128&m)d=0;else{if(0<a.length){var q=a[a.length-1];if(Cd(q)&&"g"in q){d=0;m|=128;delete q.g;var r=!0,w;for(w in q){r=!1;break}r&&a.pop()}}}else if(128&m)throw Error();k!==m&&rd(a,m)}this.va=(f?0:-1)-d;this.h=void 0;this.C=
a;a:{f=this.C.length;d=f-1;if(f&&(f=this.C[d],Cd(f))){this.X=f;this.j=d-this.va;break a}void 0!==b&&-1<b?(this.j=Math.max(b,d+1-this.va),this.X=void 0):this.j=Number.MAX_VALUE}if(!e&&this.X&&"g"in this.X)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(c){b=h&&!g&&!0;e=this.j;var t;for(h=0;h<c.length;h++)g=c[h],g<e?(g+=this.va,(d=a[g])?ke(d,b):a[g]=Ed):(t||(t=Rd(this)),(d=t[g])?ke(d,b):t[g]=Ed)}}
H.prototype.toJSON=function(){var a=this.C,b;Dd?b=a:b=Nd(a,Od,Qd);return b};
function le(a){Dd=!0;try{return JSON.stringify(a.toJSON(),me)}finally{Dd=!1}}
H.prototype.clone=function(){var a=Nd(this.C,Pd,zd);yd(a);Id=a;a=new this.constructor(a);Id=void 0;ne(a,this);return a};
function ke(a,b){if(Array.isArray(a)){var c=qd(a),d=1;!b||c&2||(d|=16);(c&d)!==d&&rd(a,c|d)}}
H.prototype.jb=Bd;H.prototype.toString=function(){return this.C.toString()};
function me(a,b){return Ld(b)}
function ne(a,b){b.Ma&&(a.Ma=b.Ma.slice());var c=b.h;if(c){b=b.X;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length)for(f=ae(a,e[0].constructor,g,f),g=0;g<Math.min(f.length,e.length);g++)ne(f[g],e[g])}else throw Error("unexpected object: type: "+Qa(e)+": "+e);}}}}
;function oe(a){var b=this.h,c=this.i;return this.isRepeated?ae(a,b,c,!0):Yd(a,b,c,!0)}
;function pe(a){this.Tb=a}
;function qe(a,b,c){this.i=a;this.l=b;this.h=c||[];this.Aa=new Map}
l=qe.prototype;l.Ec=function(a){var b=Ka.apply(1,arguments),c=this.ub(b);c?c.push(new pe(a)):this.qc(a,b)};
l.qc=function(a){this.Aa.set(this.Zb(Ka.apply(1,arguments)),[new pe(a)])};
l.ub=function(){var a=this.Zb(Ka.apply(0,arguments));return this.Aa.has(a)?this.Aa.get(a):void 0};
l.Qc=function(){var a=this.ub(Ka.apply(0,arguments));return a&&a.length?a[0]:void 0};
l.clear=function(){this.Aa.clear()};
l.Zb=function(){var a=Ka.apply(0,arguments);return a?a.join(","):"key"};function re(a,b){qe.call(this,a,3,b)}
u(re,qe);re.prototype.j=function(a){var b=Ka.apply(1,arguments),c=0,d=this.Qc(b);d&&(c=d.Tb);this.qc(c+a,b)};function se(a,b){qe.call(this,a,2,b)}
u(se,qe);se.prototype.j=function(a){this.Ec(a,Ka.apply(1,arguments))};function te(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function ue(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ra(d)?ue.apply(null,d):te(d)}}
;function J(){this.M=this.M;this.v=this.v}
J.prototype.M=!1;J.prototype.h=function(){return this.M};
J.prototype.dispose=function(){this.M||(this.M=!0,this.B())};
function ve(a,b){we(a,$a(te,b))}
function we(a,b){a.M?b():(a.v||(a.v=[]),a.v.push(b))}
J.prototype.B=function(){if(this.v)for(;this.v.length;)this.v.shift()()};function xe(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
xe.prototype.stopPropagation=function(){this.j=!0};
xe.prototype.preventDefault=function(){this.defaultPrevented=!0};function ye(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=ze(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Ae[c])c=Ae[c];else{c=String(c);if(!Ae[c]){var f=/function\s+([^\(]+)/m.exec(c);Ae[c]=f?f[1]:"[Anonymous]"}c=Ae[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function ze(a,b){b||(b={});b[Be(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Be(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=ze(a,b));return c}
function Be(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Ae={};var Ce=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",function(){},b),y.removeEventListener("test",function(){},b)}catch(c){}return a}();function De(a,b){xe.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
ab(De,xe);var Ee={2:"touch",3:"pen",4:"mouse"};
De.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Mc){a:{try{Ic(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Ee[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&De.Y.preventDefault.call(this)};
De.prototype.stopPropagation=function(){De.Y.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
De.prototype.preventDefault=function(){De.Y.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Fe="closure_listenable_"+(1E6*Math.random()|0);var Ge=0;function Me(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.hb=e;this.key=++Ge;this.Oa=this.cb=!1}
function Ne(a){a.Oa=!0;a.listener=null;a.proxy=null;a.src=null;a.hb=null}
;function Oe(a){this.src=a;this.listeners={};this.h=0}
Oe.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Pe(a,b,d,e);-1<g?(b=a[g],c||(b.cb=!1)):(b=new Me(b,this.src,f,!!d,e),b.cb=c,a.push(b));return b};
Oe.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Pe(e,b,c,d);return-1<b?(Ne(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function Qe(a,b){var c=b.type;c in a.listeners&&mb(a.listeners[c],b)&&(Ne(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function Pe(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Oa&&f.listener==b&&f.capture==!!c&&f.hb==d)return e}return-1}
;var Re="closure_lm_"+(1E6*Math.random()|0),Se={},Te=0;function Ue(a,b,c,d,e){if(d&&d.once)Ve(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Ue(a,b[f],c,d,e);else c=We(c),a&&a[Fe]?a.ia(b,c,Sa(d)?!!d.capture:!!d,e):Xe(a,b,c,!1,d,e)}
function Xe(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Sa(e)?!!e.capture:!!e,h=Ye(a);h||(a[Re]=h=new Oe(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Ze();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Ce||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent($e(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Te++}}
function Ze(){function a(c){return b.call(a.src,a.listener,c)}
var b=af;return a}
function Ve(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ve(a,b[f],c,d,e);else c=We(c),a&&a[Fe]?a.l.add(String(b),c,!0,Sa(d)?!!d.capture:!!d,e):Xe(a,b,c,!0,d,e)}
function bf(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)bf(a,b[f],c,d,e);else(d=Sa(d)?!!d.capture:!!d,c=We(c),a&&a[Fe])?a.l.remove(String(b),c,d,e):a&&(a=Ye(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Pe(b,c,d,e)),(c=-1<a?b[a]:null)&&cf(c))}
function cf(a){if("number"!==typeof a&&a&&!a.Oa){var b=a.src;if(b&&b[Fe])Qe(b.l,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent($e(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Te--;(c=Ye(b))?(Qe(c,a),0==c.h&&(c.src=null,b[Re]=null)):Ne(a)}}}
function $e(a){return a in Se?Se[a]:Se[a]="on"+a}
function af(a,b){if(a.Oa)a=!0;else{b=new De(b,this);var c=a.listener,d=a.hb||a.src;a.cb&&cf(a);a=c.call(d,b)}return a}
function Ye(a){a=a[Re];return a instanceof Oe?a:null}
var df="__closure_events_fn_"+(1E9*Math.random()>>>0);function We(a){if("function"===typeof a)return a;a[df]||(a[df]=function(b){return a.handleEvent(b)});
return a[df]}
;function ef(){J.call(this);this.l=new Oe(this);this.Bc=this;this.ka=null}
ab(ef,J);ef.prototype[Fe]=!0;ef.prototype.addEventListener=function(a,b,c,d){Ue(this,a,b,c,d)};
ef.prototype.removeEventListener=function(a,b,c,d){bf(this,a,b,c,d)};
function ff(a,b){var c=a.ka;if(c){var d=[];for(var e=1;c;c=c.ka)d.push(c),++e}a=a.Bc;c=b.type||b;"string"===typeof b?b=new xe(b,a):b instanceof xe?b.target=b.target||a:(e=b,b=new xe(c,a),zb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=gf(g,c,!0,b)&&e}b.j||(g=b.h=a,e=gf(g,c,!0,b)&&e,b.j||(e=gf(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=gf(g,c,!1,b)&&e}
ef.prototype.B=function(){ef.Y.B.call(this);if(this.l){var a=this.l,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Ne(d[e]);delete a.listeners[c];a.h--}}this.ka=null};
ef.prototype.ia=function(a,b,c,d){return this.l.add(String(a),b,!1,c,d)};
function gf(a,b,c,d){b=a.l.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Oa&&g.capture==c){var h=g.listener,k=g.hb||g.src;g.cb&&Qe(a.l,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function hf(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
hf.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function jf(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function kf(a,b){return a+Math.random()*(b-a)}
;function lf(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
l=lf.prototype;l.clone=function(){return new lf(this.x,this.y)};
l.equals=function(a){return a instanceof lf&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
l.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
l.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
l.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
l.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function mf(a,b){this.width=a;this.height=b}
l=mf.prototype;l.clone=function(){return new mf(this.width,this.height)};
l.aspectRatio=function(){return this.width/this.height};
l.Na=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
l.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function nf(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function of(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function pf(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var qf;function rf(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var e=of("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Za(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Vb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Sb;c.Sb=null;e()}};
return function(e){d.next={Sb:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function sf(){this.i=this.h=null}
sf.prototype.add=function(a,b){var c=tf.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
sf.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var tf=new hf(function(){return new uf},function(a){return a.reset()});
function uf(){this.next=this.scope=this.h=null}
uf.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
uf.prototype.reset=function(){this.next=this.scope=this.h=null};var vf,wf=!1,xf=new sf;function yf(a,b){vf||zf();wf||(vf(),wf=!0);xf.add(a,b)}
function zf(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);vf=function(){a.then(Af)}}else vf=function(){var b=Af;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!C("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(qf||(qf=rf()),qf(b)):y.setImmediate(b)}}
function Af(){for(var a;a=xf.remove();){try{a.h.call(a.scope)}catch(b){Fc(b)}jf(tf,a)}wf=!1}
;function Bf(a){this.h=0;this.v=void 0;this.l=this.i=this.j=null;this.m=this.o=!1;if(a!=eb)try{var b=this;a.call(void 0,function(c){Cf(b,2,c)},function(c){Cf(b,3,c)})}catch(c){Cf(this,3,c)}}
function Df(){this.next=this.context=this.i=this.j=this.h=null;this.l=!1}
Df.prototype.reset=function(){this.context=this.i=this.j=this.h=null;this.l=!1};
var Ef=new hf(function(){return new Df},function(a){a.reset()});
function Ff(a,b,c){var d=Ef.get();d.j=a;d.i=b;d.context=c;return d}
function Gf(a){return new Bf(function(b,c){c(a)})}
Bf.prototype.then=function(a,b,c){return Hf(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Bf.prototype.$goog_Thenable=!0;l=Bf.prototype;l.qb=function(a,b){return Hf(this,null,a,b)};
l.catch=Bf.prototype.qb;l.cancel=function(a){if(0==this.h){var b=new If(a);yf(function(){Jf(this,b)},this)}};
function Jf(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.l||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Jf(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Kf(c),Lf(c,e,3,b)))}a.j=null}else Cf(a,3,b)}
function Mf(a,b){a.i||2!=a.h&&3!=a.h||Nf(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Hf(a,b,c,d){var e=Ff(null,null,null);e.h=new Bf(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(m){g(m)}}:f;
e.i=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof If?g(h):f(k)}catch(m){g(m)}}:g});
e.h.j=a;Mf(a,e);return e.h}
l.zd=function(a){this.h=0;Cf(this,2,a)};
l.Ad=function(a){this.h=0;Cf(this,3,a)};
function Cf(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.zd,f=a.Ad;if(d instanceof Bf){Mf(d,Ff(e||eb,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(m){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Sa(d))try{var k=d.then;if("function"===typeof k){Of(d,k,e,f,a);g=!0;break a}}catch(m){f.call(a,m);g=!0;break a}g=!1}}}g||(a.v=c,a.h=b,a.j=null,Nf(a),3!=b||c instanceof If||Pf(a,c))}}
function Of(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Nf(a){a.o||(a.o=!0,yf(a.Oc,a))}
function Kf(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
l.Oc=function(){for(var a;a=Kf(this);)Lf(this,a,this.h,this.v);this.o=!1};
function Lf(a,b,c,d){if(3==c&&b.i&&!b.l)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,Qf(b,c,d);else try{b.l?b.j.call(b.context):Qf(b,c,d)}catch(e){Rf.call(null,e)}jf(Ef,b)}
function Qf(a,b,c){2==b?a.j.call(a.context,c):a.i&&a.i.call(a.context,c)}
function Pf(a,b){a.m=!0;yf(function(){a.m&&Rf.call(null,b)})}
var Rf=Fc;function If(a){cb.call(this,a)}
ab(If,cb);If.prototype.name="cancel";function Sf(a,b){ef.call(this);this.j=a||1;this.i=b||y;this.m=Za(this.xd,this);this.o=Date.now()}
ab(Sf,ef);l=Sf.prototype;l.enabled=!1;l.aa=null;function Tf(a,b){a.j=b;a.aa&&a.enabled?(a.stop(),a.start()):a.aa&&a.stop()}
l.xd=function(){if(this.enabled){var a=Date.now()-this.o;0<a&&a<.8*this.j?this.aa=this.i.setTimeout(this.m,this.j-a):(this.aa&&(this.i.clearTimeout(this.aa),this.aa=null),ff(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
l.start=function(){this.enabled=!0;this.aa||(this.aa=this.i.setTimeout(this.m,this.j),this.o=Date.now())};
l.stop=function(){this.enabled=!1;this.aa&&(this.i.clearTimeout(this.aa),this.aa=null)};
l.B=function(){Sf.Y.B.call(this);this.stop();delete this.i};
function Uf(a,b,c){if("function"===typeof a)c&&(a=Za(a,c));else if(a&&"function"==typeof a.handleEvent)a=Za(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:y.setTimeout(a,b||0)}
;function Vf(a){this.v=a;this.h=new Map;this.o=new Set;this.j=0;this.l=100;this.flushInterval=3E4;this.i=new Sf(this.flushInterval);this.i.ia("tick",this.sb,!1,this);this.m=!1}
l=Vf.prototype;l.sendIsolatedPayload=function(a){this.m=a;this.l=1};
function Wf(a){a.i.enabled||a.i.start();a.j++;a.j>=a.l&&a.sb()}
l.sb=function(){var a=this.h.values();a=[].concat(ja(a)).filter(function(b){return b.Aa.size});
a.length&&this.v.flush(a,this.m);Xf(a);this.j=0;this.i.enabled&&this.i.stop()};
l.Pb=function(a){var b=Ka.apply(1,arguments);this.h.has(a)||this.h.set(a,new re(a,b))};
l.Qb=function(a){var b=Ka.apply(1,arguments);this.h.has(a)||this.h.set(a,new se(a,b))};
function Yf(a,b){return a.o.has(b)?void 0:a.h.get(b)}
l.Wa=function(a){this.zc.apply(this,[a,1].concat(ja(Ka.apply(1,arguments))))};
l.zc=function(a,b){var c=Ka.apply(2,arguments),d=Yf(this,a);d&&d instanceof re&&(d.j(b,c),Wf(this))};
l.rb=function(a,b){var c=Ka.apply(2,arguments),d=Yf(this,a);d&&d instanceof se&&(d.j(b,c),Wf(this))};
function Xf(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function Zf(a){this.h=a;this.h.Pb("/client_streamz/bg/fiec",{La:3,Ka:"rk"},{La:2,Ka:"ec"})}
function $f(a){this.h=a;this.h.Qb("/client_streamz/bg/fil",{La:3,Ka:"rk"})}
function ag(a){this.h=a;this.h.Pb("/client_streamz/bg/fsc",{La:3,Ka:"rk"})}
function bg(a){this.h=a;this.h.Qb("/client_streamz/bg/fsl",{La:3,Ka:"rk"})}
;var cg={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);0<a;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function dg(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=eg(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;12<=g;g-=12,h+=12)c+=fg(a,h),d+=fg(a,h+4),e+=fg(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return cg.toString(e)}
function eg(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function fg(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;function gg(a){H.call(this,a,-1,hg)}
u(gg,H);function ig(a){H.call(this,a,-1,jg)}
u(ig,H);function kg(a){H.call(this,a)}
u(kg,H);function lg(a){H.call(this,a)}
u(lg,H);var hg=[3,6,4],jg=[1],mg=[1,2,3],ng=[1,2,3];function og(a){H.call(this,a,-1,pg)}
u(og,H);var pg=[1];function qg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function rg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;q=m=0}
function b(r){for(var w=g,t=0;64>t;t+=4)w[t/4]=r[t]<<24|r[t+1]<<16|r[t+2]<<8|r[t+3];for(t=16;80>t;t++)r=w[t-3]^w[t-8]^w[t-14]^w[t-16],w[t]=(r<<1|r>>>31)&4294967295;r=e[0];var z=e[1],D=e[2],F=e[3],O=e[4];for(t=0;80>t;t++){if(40>t)if(20>t){var N=F^z&(D^F);var R=1518500249}else N=z^D^F,R=1859775393;else 60>t?(N=z&D|F&(z|D),R=2400959708):(N=z^D^F,R=3395469782);N=((r<<5|r>>>27)&4294967295)+N+O+R+w[t]&4294967295;O=F;F=D;D=(z<<30|z>>>2)&4294967295;z=r;r=N}e[0]=e[0]+r&4294967295;e[1]=e[1]+z&4294967295;e[2]=
e[2]+D&4294967295;e[3]=e[3]+F&4294967295;e[4]=e[4]+O&4294967295}
function c(r,w){if("string"===typeof r){r=unescape(encodeURIComponent(r));for(var t=[],z=0,D=r.length;z<D;++z)t.push(r.charCodeAt(z));r=t}w||(w=r.length);t=0;if(0==m)for(;t+64<w;)b(r.slice(t,t+64)),t+=64,q+=64;for(;t<w;)if(f[m++]=r[t++],q++,64==m)for(m=0,b(f);t+64<w;)b(r.slice(t,t+64)),t+=64,q+=64}
function d(){var r=[],w=8*q;56>m?c(h,56-m):c(h,64-(m-56));for(var t=63;56<=t;t--)f[t]=w&255,w>>>=8;b(f);for(t=w=0;5>t;t++)for(var z=24;0<=z;z-=8)r[w++]=e[t]>>z&255;return r}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,q;a();return{reset:a,update:c,digest:d,Lc:function(){for(var r=d(),w="",t=0;t<r.length;t++)w+="0123456789ABCDEF".charAt(Math.floor(r[t]/16))+"0123456789ABCDEF".charAt(r[t]%16);return w}}}
;function sg(a,b,c){var d=String(y.location.href);return d&&a&&b?[b,tg(qg(d),a,c||null)].join(" "):null}
function tg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],hb(d,function(h){e.push(h)}),ug(e.join(" "));
var f=[],g=[];hb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];hb(d,function(h){e.push(h)});
a=ug(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function ug(a){var b=rg();b.update(a);return b.Lc().toLowerCase()}
;var vg={};function wg(a){this.h=a||{cookie:""}}
l=wg.prototype;l.isEnabled=function(){if(!y.navigator.cookieEnabled)return!1;if(!this.Na())return!0;this.set("TESTCOOKIESENABLED","1",{ib:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
l.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Pr;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ib}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
l.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Nb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{ib:0,path:b,domain:c});return d};
l.xb=function(){return xg(this).keys};
l.Na=function(){return!this.h.cookie};
l.clear=function(){for(var a=xg(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function xg(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Nb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var yg=new wg("undefined"==typeof document?null:document);function zg(a){return!!vg.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Ag(a){a=void 0===a?!1:a;var b=y.__SAPISID||y.__APISID||y.__3PSAPISID||y.__OVERRIDE_SID;zg(a)&&(b=b||y.__1PSAPISID);if(b)return!0;var c=new wg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");zg(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function Bg(a,b,c,d){(a=y[a])||(a=(new wg(document)).get(b));return a?sg(a,c,d):null}
function Cg(a,b){b=void 0===b?!1:b;var c=qg(String(y.location.href)),d=[];if(Ag(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?y.__SAPISID:y.__APISID;e||(e=new wg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?sg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&zg(b)&&((b=Bg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Bg("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function Dg(a){H.call(this,a,-1,Eg)}
u(Dg,H);var Eg=[2];function Fg(a){this.h=this.i=this.j=a}
Fg.prototype.reset=function(){this.h=this.i=this.j};
Fg.prototype.getValue=function(){return this.i};function Gg(a){var b=[];Hg(new Ig,a,b);return b.join("")}
function Ig(){}
function Hg(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Hg(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Jg(d,c),c.push(":"),Hg(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Jg(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Kg={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Lg=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Jg(a,b){b.push('"',a.replace(Lg,function(c){var d=Kg[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Kg[c]=d);return d}),'"')}
;function Mg(){}
Mg.prototype.h=null;Mg.prototype.getOptions=function(){var a;(a=this.h)||(a={},Ng(this)&&(a[0]=!0,a[1]=!0),a=this.h=a);return a};var Og;function Pg(){}
ab(Pg,Mg);function Qg(a){return(a=Ng(a))?new ActiveXObject(a):new XMLHttpRequest}
function Ng(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i}
Og=new Pg;function Rg(a){ef.call(this);this.headers=new Map;this.K=a||null;this.i=!1;this.J=this.A=null;this.m=this.T="";this.j=this.P=this.s=this.O=!1;this.o=0;this.F=null;this.ca="";this.V=this.W=!1}
ab(Rg,ef);var Sg=/^https?$/i,Tg=["POST","PUT"],Ug=[];function Vg(a,b,c,d,e,f,g){var h=new Rg;Ug.push(h);b&&h.ia("complete",b);h.l.add("ready",h.Jc,!0,void 0,void 0);f&&(h.o=Math.max(0,f));g&&(h.W=g);h.send(a,c,d,e)}
l=Rg.prototype;l.Jc=function(){this.dispose();mb(Ug,this)};
l.send=function(a,b,c,d){if(this.A)throw Error("[goog.net.XhrIo] Object is active with another request="+this.T+"; newUri="+a);b=b?b.toUpperCase():"GET";this.T=a;this.m="";this.O=!1;this.i=!0;this.A=this.K?Qg(this.K):Qg(Og);this.J=this.K?this.K.getOptions():Og.getOptions();this.A.onreadystatechange=Za(this.ic,this);try{this.getStatus(),this.P=!0,this.A.open(b,String(a),!0),this.P=!1}catch(g){this.getStatus();Wg(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,
d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=p(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=y.FormData&&a instanceof y.FormData;!(0<=gb(Tg,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=p(c);for(d=b.next();!d.done;d=b.next())c=p(d.value),d=c.next().value,c=c.next().value,this.A.setRequestHeader(d,c);this.ca&&(this.A.responseType=this.ca);"withCredentials"in this.A&&this.A.withCredentials!==this.W&&(this.A.withCredentials=this.W);try{Zg(this),0<this.o&&(this.V=$g(this.A),this.getStatus(),this.V?(this.A.timeout=this.o,this.A.ontimeout=Za(this.uc,this)):
this.F=Uf(this.uc,this.o,this)),this.getStatus(),this.s=!0,this.A.send(a),this.s=!1}catch(g){this.getStatus(),Wg(this,g)}};
function $g(a){return Kc&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
l.uc=function(){"undefined"!=typeof Oa&&this.A&&(this.m="Timed out after "+this.o+"ms, aborting",this.getStatus(),ff(this,"timeout"),this.abort(8))};
function Wg(a,b){a.i=!1;a.A&&(a.j=!0,a.A.abort(),a.j=!1);a.m=b;ah(a);bh(a)}
function ah(a){a.O||(a.O=!0,ff(a,"complete"),ff(a,"error"))}
l.abort=function(){this.A&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.A.abort(),this.j=!1,ff(this,"complete"),ff(this,"abort"),bh(this))};
l.B=function(){this.A&&(this.i&&(this.i=!1,this.j=!0,this.A.abort(),this.j=!1),bh(this,!0));Rg.Y.B.call(this)};
l.ic=function(){this.h()||(this.P||this.s||this.j?ch(this):this.bd())};
l.bd=function(){ch(this)};
function ch(a){if(a.i&&"undefined"!=typeof Oa)if(a.J[1]&&4==dh(a)&&2==a.getStatus())a.getStatus();else if(a.s&&4==dh(a))Uf(a.ic,0,a);else if(ff(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(eh(a))ff(a,"complete"),ff(a,"success");else{try{var b=2<dh(a)?a.A.statusText:""}catch(c){b=""}a.m=b+" ["+a.getStatus()+"]";ah(a)}}finally{bh(a)}}}
function bh(a,b){if(a.A){Zg(a);var c=a.A,d=a.J[0]?function(){}:null;
a.A=null;a.J=null;b||ff(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function Zg(a){a.A&&a.V&&(a.A.ontimeout=null);a.F&&(y.clearTimeout(a.F),a.F=null)}
l.isActive=function(){return!!this.A};
l.isComplete=function(){return 4==dh(this)};
function eh(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=oc(1,String(a.T)),!a&&y.self&&y.self.location&&(a=y.self.location.protocol.slice(0,-1)),b=!Sg.test(a?a.toLowerCase():"");c=b}return c}
function dh(a){return a.A?a.A.readyState:0}
l.getStatus=function(){try{return 2<dh(this)?this.A.status:-1}catch(a){return-1}};
l.getLastError=function(){return"string"===typeof this.m?this.m:String(this.m)};function fh(a){H.call(this,a)}
u(fh,H);function gh(a){H.call(this,a,-1,hh)}
u(gh,H);var hh=[1];var ih=["platform","platformVersion","architecture","model","uaFullVersion"];new gh;function jh(a){H.call(this,a)}
u(jh,H);function kh(a){H.call(this,a,31,lh)}
u(kh,H);var lh=[3,20,27];function mh(a){H.call(this,a,17,nh)}
u(mh,H);var nh=[3,5];function oh(a){H.call(this,a,6,ph)}
u(oh,H);var ph=[5];function qh(a){H.call(this,a)}
u(qh,H);var rh;rh=new function(a,b,c){this.i=a;this.fieldName=b;this.h=c;this.isRepeated=0;this.j=oe}(175237375,{Fr:0},qh);function sh(a,b,c,d,e,f,g,h,k,m,q){ef.call(this);var r=this;this.O="";this.j=[];this.Nb="";this.Ob=this.ta=-1;this.Ya=!1;this.J=this.m=null;this.F=0;this.Cc=1;this.timeoutMillis=0;this.ca=!1;ef.call(this);this.Za=b||function(){};
this.s=new th(a,f);this.Ac=d;this.Xa=q;this.Dc=$a(kf,0,1);this.T=e||null;this.K=c||null;this.V=g||!1;this.pageId=k||null;this.logger=null;this.withCredentials=!h;this.Ha=f||!1;!this.Ha&&(65<=dc("Chromium")||45<=dc("Firefox")||12<=dc("Safari")||(Gc()||C("iPad")||C("iPod"))&&Hc());a=E(new jh,1,1);uh(this.s,a);this.o=new Fg(1E4);this.i=new Sf(this.o.getValue());ve(this,this.i);m=vh(this,m);Ue(this.i,"tick",m,!1,this);this.P=new Sf(6E5);ve(this,this.P);Ue(this.P,"tick",m,!1,this);this.V||this.P.start();
this.Ha||(Ue(document,"visibilitychange",function(){"hidden"===document.visibilityState&&r.W()}),Ue(document,"pagehide",this.W,!1,this))}
u(sh,ef);function vh(a,b){return b?function(){b().then(function(){a.flush()})}:function(){a.flush()}}
sh.prototype.B=function(){this.W();ef.prototype.B.call(this)};
function wh(a){a.T||(a.T=.01>a.Dc()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");return a.T}
function xh(a,b){a.o=new Fg(1>b?1:b);Tf(a.i,a.o.getValue())}
sh.prototype.log=function(a){a=a.clone();var b=this.Cc++;E(a,21,b);this.O&&E(a,26,this.O);if(!Sd(a,1)){b=a;var c=Date.now().toString();E(b,1,c)}null==Sd(a,15)&&E(a,15,60*(new Date).getTimezoneOffset());this.m&&(b=this.m.clone(),G(a,Dg,16,b));for(;1E3<=this.j.length;)this.j.shift(),++this.F;this.j.push(a);ff(this,new yh(a));this.V||this.i.enabled||this.i.start()};
sh.prototype.flush=function(a,b){var c=this;if(0===this.j.length)a&&a();else if(this.ca)zh(this);else{var d=Date.now();if(this.Ob>d&&this.ta<d)b&&b("throttled");else{var e=Ah(this.s,this.j,this.F);d={};var f=this.Za();f&&(d.Authorization=f);var g=wh(this);this.K&&(d["X-Goog-AuthUser"]=this.K,g=xc(g,"authuser",this.K));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g=xc(g,"pageId",this.pageId));if(f&&this.Nb===f)b&&b("stale-auth-token");else{this.j=[];this.i.enabled&&this.i.stop();this.F=0;var h=le(e),
k;this.J&&this.J.isSupported(h.length)&&(k=this.J.compress(h));var m={url:g,body:h,Hc:1,Hb:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},q=function(t){c.o.reset();Tf(c.i,c.o.getValue());if(t){var z=null;try{var D=JSON.parse(t.replace(")]}'\n",""));z=new oh(D)}catch(F){}z&&(t=Number(fe(Sd(z,1),"-1")),0<t&&(c.ta=Date.now(),c.Ob=c.ta+t),z=rh.j(z))&&(z=fe(Sd(z,1),-1),-1!=z&&(c.Ya||xh(c,z)))}a&&a()},r=function(t,z){var D=ae(e,kh,3),F=c.o;
F.h=Math.min(3E5,2*F.h);F.i=Math.min(3E5,F.h+Math.round(.2*(Math.random()-.5)*F.h));Tf(c.i,c.o.getValue());401===t&&f&&(c.Nb=f);void 0===z&&(z=500<=t&&600>t||401===t||0===t);z&&(c.j=D.concat(c.j),c.V||c.i.enabled||c.i.start());b&&b("net-send-failed",t)},w=function(){c.Xa?c.Xa.send(m,q,r):c.Ac(m,q,r)};
k?k.then(function(t){m.Hb["Content-Encoding"]="gzip";m.Hb["Content-Type"]="application/binary";m.body=t;m.Hc=2;w()},function(){w()}):w()}}}};
sh.prototype.W=function(){this.flush()};
function zh(a){Bh(a,function(b,c){b=xc(b,"format","json");b=window.navigator.sendBeacon(b,le(c));a.ca&&!b&&(a.ca=!1);return b})}
function Bh(a,b){if(0!==a.j.length){var c=Ec(wh(a),"format");c=vc(c,"auth",a.Za(),"authuser",a.K||"0");for(var d=0;10>d&&a.j.length;++d){var e=a.j.slice(0,32),f=Ah(a.s,e,a.F);if(!b(c,f))break;a.F=0;a.j=a.j.slice(e.length)}a.i.enabled&&a.i.stop()}}
function yh(){xe.call(this,"event-logged",void 0)}
u(yh,xe);function th(a,b){this.i=b=void 0===b?!1:b;this.uach=this.locale=null;this.h=new mh;E(this.h,2,a);b||(this.locale=document.documentElement.getAttribute("lang"));uh(this,new jh)}
function uh(a,b){G(a.h,jh,1,b);Sd(b,1)||E(b,1,1);a.i||(b=Ch(a),Sd(b,5)||E(b,5,a.locale));a.uach&&(b=Ch(a),Yd(b,gh,9)||G(b,gh,9,a.uach))}
function Dh(a,b){var c=void 0===c?ih:c;b(window,c).then(function(d){a.uach=d;d=Ch(a);G(d,gh,9,a.uach);return!0}).catch(function(){return!1})}
function Ch(a){a=Yd(a.h,jh,1);var b=Yd(a,fh,11);b||(b=new fh,G(a,fh,11,b));return b}
function Ah(a,b,c){c=void 0===c?0:c;a=a.h.clone();var d=Date.now().toString();a=E(a,4,d);b=ce(a,kh,3,b);c&&E(b,14,c);return b}
;function Eh(a,b,c){Vg(a.url,function(d){d=d.target;if(eh(d)){try{var e=d.A?d.A.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Hb,a.timeoutMillis,a.withCredentials)}
;function Fh(){this.j="https://play.google.com/log?format=json&hasfast=true";this.s=!1;this.m=Eh;this.h=""}
;function Gh(){var a=void 0===a?"":a;var b=void 0===b?"":b;var c=new Fh;c.h="";""!=a&&(c.j=a);b&&(c.i=b);a=new sh(1828,c.J?c.J:Cg,"0",c.m,c.j,c.s,!1,c.P,void 0,void 0,c.o?c.o:void 0);c.M&&uh(a.s,c.M);if(c.i){b=c.i;var d=Ch(a.s);E(d,7,b)}c.l&&(a.J=c.l);c.h&&(a.O=c.h);c.v&&((b=c.v)?(a.m||(a.m=new Dg),b=le(b),E(a.m,4,b)):a.m&&E(a.m,4,void 0,!1));if(c.K){d=c.K;a.m||(a.m=new Dg);b=a.m;if(null==d)d=Ed;else{var e=qd(d);1!==(e&1)&&(Object.isFrozen(d)&&(d=Array.prototype.slice.call(d)),rd(d,e|1))}E(b,2,d)}c.F&&
(b=c.F,a.Ya=!0,xh(a,b));c.O&&Dh(a.s,c.O);this.h=a}
Gh.prototype.flush=function(a){var b=a||[];if(b.length){a=new og;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=e,g=new gg;var h=E(g,1,f.i);var k=f;g=[];for(var m=0;m<k.h.length;m++)g.push(k.h[m].Ka);if(null==g)g=E(h,3,Ed);else{k=qd(g);if(!(k&4)){if(k&2||Object.isFrozen(g))g=Array.prototype.slice.call(g);for(m=0;m<g.length;m++)g[m]=g[m];rd(g,k|5)}g=E(h,3,g)}h=[];k=[];m=p(f.Aa.keys());for(var q=m.next();!q.done;q=m.next())k.push(q.value.split(","));for(m=0;m<k.length;m++){q=k[m];var r=f.l;for(var w=
f.ub(q)||[],t=[],z=0;z<w.length;z++){var D=w[z];D=D&&D.Tb;var F=new lg;switch(r){case 3:Wd(F,1,ng,Number(D));break;case 2:Wd(F,2,ng,Number(D))}t.push(F)}r=t;for(w=0;w<r.length;w++){t=r[w];z=new ig;t=G(z,lg,2,t);z=q;D=[];F=f;for(var O=[],N=0;N<F.h.length;N++)O.push(F.h[N].La);F=O;for(O=0;O<F.length;O++){N=F[O];var R=z[O],ca=new kg;switch(N){case 3:Wd(ca,1,mg,String(R));break;case 2:Wd(ca,2,mg,Number(R));break;case 1:Wd(ca,3,mg,"true"==R)}D.push(ca)}ce(t,kg,1,D);h.push(t)}}ce(g,ig,4,h);c.push(g);e.clear()}ce(a,
gg,1,c);b=this.h;a instanceof kh?b.log(a):(c=new kh,a=le(a),a=E(c,8,a),b.log(a));this.h.flush()}};function Hh(a){this.v=Ih();this.m=new Gh;this.h=new Vf(this.m);this.o=new $f(this.h);this.j=new ag(this.h);this.l=new bg(this.h);this.i=new Zf(this.h);this.oa=dg(a)}
function Ih(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function Jh(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Kh(a){var b=this;this.i=!1;var c=a.program;var d=a.Sc;if(a.fd){var e;this.ga=null!=(e=a.ga)?e:new Hh(d)}var f=new Jh;this.j=f.promise;if(!y[d]){var g;null!=(g=this.ga)&&g.i.h.Wa("/client_streamz/bg/fiec",g.oa,1)}else if(!y[d].a){var h;null!=(h=this.ga)&&h.i.h.Wa("/client_streamz/bg/fiec",h.oa,2)}this.l=p((0,y[d].a)(c,function(k,m){Promise.resolve().then(function(){var q;if(null!=(q=b.ga)){var r=Ih()-q.v;q.o.h.rb("/client_streamz/bg/fil",r,q.oa)}f.resolve({Fc:k,td:m})})},!0)).next().value;
this.sd=f.promise.then(function(){})}
Kh.prototype.snapshot=function(a){var b=this;if(this.i)throw Error("Already disposed");var c=Ih(),d;null!=(d=this.ga)&&d.j.h.Wa("/client_streamz/bg/fsc",d.oa);return this.j.then(function(e){var f=e.Fc;return new Promise(function(g){f(function(h){var k;if(null!=(k=b.ga)){var m=Ih()-c;k.l.h.rb("/client_streamz/bg/fsl",m,k.oa)}g(h)},[a.Vb,
a.ud])})})};
Kh.prototype.sc=function(a){if(this.i)throw Error("Already disposed");var b=Ih(),c;null!=(c=this.ga)&&c.j.h.Wa("/client_streamz/bg/fsc",c.oa);a=this.l([a.Vb,a.ud]);null!=(c=this.ga)&&(b=Ih()-b,c.l.h.rb("/client_streamz/bg/fsl",b,c.oa));return a};
Kh.prototype.dispose=function(){var a;null!=(a=this.ga)&&a.h.sb();this.i=!0;this.j.then(function(b){(b=b.td)&&b()})};
Kh.prototype.h=function(){return this.i};var Lh=window;Eb("csi.gstatic.com");Eb("googleads.g.doubleclick.net");Eb("partner.googleadservices.com");Eb("pubads.g.doubleclick.net");Eb("securepubads.g.doubleclick.net");Eb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var Mh;try{new URL("s://g"),Mh=!0}catch(a){Mh=!1}var Nh=Mh;var Oh={};function Ph(){}
function Qh(a){this.h=a}
u(Qh,Ph);Qh.prototype.toString=function(){return this.h};function Rh(a){var b="true".toString(),c=[new Qh(Sh[0].toLowerCase(),Oh)];if(0===c.length)throw Error("No prefixes are provided");if(c.map(function(d){if(d instanceof Qh)d=d.h;else throw Error("");return d}).every(function(d){return 0!=="data-loaded".indexOf(d)}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function Th(a){var b,c,d=null==(c=(b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:c.call(b,"script[nonce]");(b=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",b)}
function Uh(a,b){a.src=Lb(b);Th(a)}
;function Vh(a){this.Xc=a}
function Wh(a){return new Vh(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Xh=[Wh("data"),Wh("http"),Wh("https"),Wh("mailto"),Wh("ftp"),new Vh(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function Yh(a){var b=Zh;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function $h(){var a=[];Yh(function(b){a.push(b)});
return a}
var Zh={Od:"allow-forms",Pd:"allow-modals",Qd:"allow-orientation-lock",Rd:"allow-pointer-lock",Sd:"allow-popups",Td:"allow-popups-to-escape-sandbox",Ud:"allow-presentation",Vd:"allow-same-origin",Wd:"allow-scripts",Xd:"allow-top-navigation",Yd:"allow-top-navigation-by-user-activation"},ai=fb(function(){return $h()});
function bi(){var a=ci(),b={};hb(ai(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function ci(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function di(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var ei=(new Date).getTime();var fi="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ja(fi);function gi(a){ef.call(this);var b=this;this.s=this.j=0;this.Z=null!=a?a:{S:function(e,f){return setTimeout(e,f)},
ea:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.m=function(){return x(function(e){return v(e,hi(b),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.s||ii(this)}
u(gi,ef);function ji(){var a=ki;gi.h||(gi.h=new gi(a));return gi.h}
gi.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.Z.ea(this.s);delete gi.h};
gi.prototype.U=function(){return this.i};
function ii(a){a.s=a.Z.S(function(){var b;return x(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.u(3):v(c,hi(a),3):v(c,hi(a),3);ii(a);c.h=0})},3E4)}
function hi(a,b){return a.o?a.o:a.o=new Promise(function(c){var d,e,f,g;return x(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,za(h,2,3),d&&(a.j=a.Z.S(function(){d.abort()},b||2E4)),v(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Ca(h);a.o=void 0;a.j&&(a.Z.ea(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?ff(a,"networkstatus-online"):ff(a,"networkstatus-offline"));c(g);Da(h);break;case 2:Ba(h),g=!1,h.u(3)}})})}
;function li(){this.data_=[];this.h=-1}
li.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.h=-1)};
li.prototype.get=function(a){return!!this.data_[a]};
function mi(a){-1===a.h&&(a.h=kb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function ni(a,b){this.h=a[y.Symbol.iterator]();this.i=b}
ni.prototype[Symbol.iterator]=function(){return this};
ni.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function oi(a,b){return new ni(a,b)}
;function pi(){this.blockSize=-1}
;function qi(){this.blockSize=-1;this.blockSize=64;this.h=[];this.m=[];this.o=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
ab(qi,pi);qi.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function ri(a,b,c){c||(c=0);var d=a.o;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):
(f=c^g^h,m=3395469782);f=(b<<5|b>>>27)+f+k+m+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
qi.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.i;d<b;){if(0==f)for(;d<=c;)ri(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){ri(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){ri(this,e);f=0;break}}this.i=f;this.l+=b}};
qi.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;ri(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function si(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function ti(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function ui(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:si(a).match(/\S+/g)||[],b=0<=gb(a,b));return b}
function vi(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):ui(a,"inverted-hdpi")&&ti(a,Array.prototype.filter.call(a.classList?a.classList:si(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function wi(){}
wi.prototype.next=function(){return xi};
var xi={done:!0,value:void 0};function yi(a){return{value:a,done:!1}}
wi.prototype.da=function(){return this};function zi(a){if(a instanceof Ai||a instanceof Bi||a instanceof Ci)return a;if("function"==typeof a.next)return new Ai(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Ai(function(){return a[Symbol.iterator]()});
if("function"==typeof a.da)return new Ai(function(){return a.da()});
throw Error("Not an iterator or iterable.");}
function Ai(a){this.i=a}
Ai.prototype.da=function(){return new Bi(this.i())};
Ai.prototype[Symbol.iterator]=function(){return new Ci(this.i())};
Ai.prototype.h=function(){return new Ci(this.i())};
function Bi(a){this.i=a}
u(Bi,wi);Bi.prototype.next=function(){return this.i.next()};
Bi.prototype[Symbol.iterator]=function(){return new Ci(this.i)};
Bi.prototype.h=function(){return new Ci(this.i)};
function Ci(a){Ai.call(this,function(){return a});
this.j=a}
u(Ci,Ai);Ci.prototype.next=function(){return this.j.next()};function Di(a,b){this.i={};this.h=[];this.qa=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Di)for(c=a.xb(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
l=Di.prototype;l.xb=function(){Ei(this);return this.h.concat()};
l.has=function(a){return Fi(this.i,a)};
l.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Gi;Ei(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Gi(a,b){return a===b}
l.Na=function(){return 0==this.size};
l.clear=function(){this.i={};this.qa=this.size=this.h.length=0};
l.remove=function(a){return this.delete(a)};
l.delete=function(a){return Fi(this.i,a)?(delete this.i[a],--this.size,this.qa++,this.h.length>2*this.size&&Ei(this),!0):!1};
function Ei(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Fi(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Fi(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
l.get=function(a,b){return Fi(this.i,a)?this.i[a]:b};
l.set=function(a,b){Fi(this.i,a)||(this.size+=1,this.h.push(a),this.qa++);this.i[a]=b};
l.forEach=function(a,b){for(var c=this.xb(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
l.clone=function(){return new Di(this)};
l.keys=function(){return zi(this.da(!0)).h()};
l.values=function(){return zi(this.da(!1)).h()};
l.entries=function(){var a=this;return oi(this.keys(),function(b){return[b,a.get(b)]})};
l.da=function(a){Ei(this);var b=0,c=this.qa,d=this,e=new wi;e.next=function(){if(c!=d.qa)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return xi;var f=d.h[b++];return yi(a?f:d.i[f])};
return e};
function Fi(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function K(a){J.call(this);this.o=1;this.l=[];this.m=0;this.i=[];this.j={};this.s=!!a}
ab(K,J);l=K.prototype;l.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.o;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.o=e+3;d.push(e);return e};
function Hi(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.Ga(b)}}
l.Ga=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=function(){}):(c&&mb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
l.sa=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.s)for(e=0;e<c.length;e++){var g=c[e];Ii(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.h();e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.Ga(c)}}return 0!=e}return!1};
function Ii(a,b,c){yf(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.Ga,this),delete this.j[a])}else this.i.length=0,this.j={}};
l.B=function(){K.Y.B.call(this);this.clear();this.l.length=0};function Ji(a){this.h=a}
Ji.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Gg(b))};
Ji.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Ji.prototype.remove=function(a){this.h.remove(a)};function Ki(a){this.h=a}
ab(Ki,Ji);function Li(a){this.data=a}
function Mi(a){return void 0===a||a instanceof Li?a:new Li(a)}
Ki.prototype.set=function(a,b){Ki.Y.set.call(this,a,Mi(b))};
Ki.prototype.i=function(a){a=Ki.Y.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ki.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Ni(a){this.h=a}
ab(Ni,Ki);Ni.prototype.set=function(a,b,c){if(b=Mi(b)){if(c){if(c<Date.now()){Ni.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Ni.Y.set.call(this,a,b)};
Ni.prototype.i=function(a){var b=Ni.Y.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Ni.prototype.remove.call(this,a);else return b}};function Oi(){}
;function Pi(){}
ab(Pi,Oi);Pi.prototype[Symbol.iterator]=function(){return zi(this.da(!0)).h()};
Pi.prototype.clear=function(){var a=Array.from(this);a=p(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Qi(a){this.h=a}
ab(Qi,Pi);l=Qi.prototype;l.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.h.removeItem(a)};
l.da=function(a){var b=0,c=this.h,d=new wi;d.next=function(){if(b>=c.length)return xi;var e=c.key(b++);if(a)return yi(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return yi(e)};
return d};
l.clear=function(){this.h.clear()};
l.key=function(a){return this.h.key(a)};function Ri(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
ab(Ri,Qi);function Si(a,b){this.i=a;this.h=null;var c;if(c=Kc)c=!(9<=Number(Xc));if(c){Ti||(Ti=new Di);this.h=Ti.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Ti.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
ab(Si,Pi);var Ui={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Ti=null;function Vi(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Ui[b]})}
l=Si.prototype;l.isAvailable=function(){return!!this.h};
l.set=function(a,b){this.h.setAttribute(Vi(a),b);Wi(this)};
l.get=function(a){a=this.h.getAttribute(Vi(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.h.removeAttribute(Vi(a));Wi(this)};
l.da=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new wi;d.next=function(){if(b>=c.length)return xi;var e=c[b++];if(a)return yi(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return yi(e)};
return d};
l.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Wi(this)};
function Wi(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Xi(a,b){this.i=a;this.h=b+"::"}
ab(Xi,Pi);Xi.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Xi.prototype.get=function(a){return this.i.get(this.h+a)};
Xi.prototype.remove=function(a){this.i.remove(this.h+a)};
Xi.prototype.da=function(a){var b=this.i[Symbol.iterator](),c=this,d=new wi;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return yi(a?e.slice(c.h.length):c.i.get(e))};
return d};function Yi(a){return Mb(null===a?"null":void 0===a?"undefined":a)}
;function Zi(a){this.name=a}
;var $i=new Zi("rawColdConfigGroup");var aj=new Zi("rawHotConfigGroup");function bj(a){H.call(this,a)}
u(bj,H);function cj(a){H.call(this,a)}
u(cj,H);cj.prototype.getKey=function(){return Sd(this,1)};
cj.prototype.getValue=function(){return ee(this,2===Xd(this,dj)?2:-1)};
var dj=[2,3,4,5,6];function ej(a){H.call(this,a)}
u(ej,H);function fj(a){H.call(this,a)}
u(fj,H);function gj(a){H.call(this,a,-1,hj)}
u(gj,H);var hj=[2];function ij(a){H.call(this,a,-1,jj)}
u(ij,H);ij.prototype.getPlayerType=function(){return Sd(this,36)};
ij.prototype.setHomeGroupInfo=function(a){return G(this,gj,81,a)};
ij.prototype.clearLocationPlayabilityToken=function(){return E(this,89,void 0,!1)};
var jj=[9,66,24,32,86,100,101];function kj(a){H.call(this,a,-1,lj)}
u(kj,H);var lj=[15,26,28];function mj(a){H.call(this,a,-1,nj)}
u(mj,H);var nj=[5];function oj(a){H.call(this,a)}
u(oj,H);function pj(a){H.call(this,a,-1,qj)}
u(pj,H);pj.prototype.setSafetyMode=function(a){return E(this,5,a)};
var qj=[12];function rj(a){H.call(this,a,-1,sj)}
u(rj,H);rj.prototype.i=function(a){return G(this,ij,1,a)};
var sj=[12];var tj=new Zi("continuationCommand");var uj=new Zi("webCommandMetadata");var vj=new Zi("signalServiceEndpoint");var wj={xi:"EMBEDDED_PLAYER_MODE_UNKNOWN",ti:"EMBEDDED_PLAYER_MODE_DEFAULT",wi:"EMBEDDED_PLAYER_MODE_PFP",vi:"EMBEDDED_PLAYER_MODE_PFL"};var xj=new Zi("feedbackEndpoint");var yj={Wq:"WEB_DISPLAY_MODE_UNKNOWN",Sq:"WEB_DISPLAY_MODE_BROWSER",Uq:"WEB_DISPLAY_MODE_MINIMAL_UI",Vq:"WEB_DISPLAY_MODE_STANDALONE",Tq:"WEB_DISPLAY_MODE_FULLSCREEN"};function zj(a){H.call(this,a,-1,Aj)}
u(zj,H);function Bj(a){H.call(this,a)}
u(Bj,H);Bj.prototype.getKey=function(){return fe(Sd(this,1),"")};
Bj.prototype.getValue=function(){return fe(Sd(this,2),"")};
var Aj=[4,5];function Cj(a){H.call(this,a)}
u(Cj,H);function Dj(a){H.call(this,a)}
u(Dj,H);var Ej=[2,3,4];function Fj(a){H.call(this,a)}
u(Fj,H);Fj.prototype.getMessage=function(){return fe(Sd(this,1),"")};function Gj(a){H.call(this,a)}
u(Gj,H);function Hj(a){H.call(this,a)}
u(Hj,H);function Ij(a){H.call(this,a,-1,Jj)}
u(Ij,H);var Jj=[10,17];function Kj(a){H.call(this,a)}
u(Kj,H);function Lj(a){H.call(this,a)}
u(Lj,H);function Mj(a){H.call(this,a)}
u(Mj,H);function Nj(a){H.call(this,a)}
u(Nj,H);function Oj(a){H.call(this,a)}
u(Oj,H);function Pj(a){H.call(this,a,-1,Qj)}
u(Pj,H);Pj.prototype.getVideoData=function(){return Yd(this,Oj,15)};
var Qj=[4];function Rj(a){H.call(this,a)}
u(Rj,H);function Sj(a,b){return G(a,Mj,1,b)}
Rj.prototype.i=function(a){return E(this,2,a)};
function Tj(a){H.call(this,a)}
u(Tj,H);function Uj(a,b){G(a,Mj,1,b)}
;function Vj(a){H.call(this,a,-1,Wj)}
u(Vj,H);Vj.prototype.i=function(a){return E(this,1,a)};
function Xj(a,b){return G(a,Mj,2,b)}
var Wj=[3];function Yj(a){H.call(this,a)}
u(Yj,H);Yj.prototype.i=function(a){return E(this,1,a)};function Zj(a){H.call(this,a)}
u(Zj,H);Zj.prototype.i=function(a){return E(this,1,a)};function ak(a){H.call(this,a)}
u(ak,H);ak.prototype.i=function(a){return E(this,1,a)};function bk(a){H.call(this,a)}
u(bk,H);bk.prototype.i=function(a){return E(this,1,a)};function ck(a){H.call(this,a)}
u(ck,H);function dk(a){H.call(this,a)}
u(dk,H);function ek(a){H.call(this,a,-1,fk)}
u(ek,H);ek.prototype.getPlayerType=function(){var a=Sd(this,7);return null==a?0:a};
ek.prototype.setVideoId=function(a){return E(this,19,a)};
function gk(a,b){de(a,68,hk,b)}
function hk(a){H.call(this,a)}
u(hk,H);hk.prototype.getId=function(){return fe(Sd(this,2),"")};
var fk=[83,68];function Ck(a){H.call(this,a)}
u(Ck,H);function Dk(a){H.call(this,a)}
u(Dk,H);function Ek(a){H.call(this,a)}
u(Ek,H);function Fk(a){H.call(this,a,459)}
u(Fk,H);
var Gk=[23,24,11,6,7,5,2,3,13,20,21,22,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,148,151,157,158,159,163,164,168,444,176,222,383,177,178,179,458,411,184,188,189,190,191,193,194,195,196,197,198,199,200,201,402,320,203,204,205,206,258,259,260,261,327,209,219,226,227,232,233,234,240,244,247,248,249,251,256,257,266,254,255,270,272,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,334,337,338,340,344,348,350,
351,352,353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,388,389,403,410,412,429,413,414,415,416,417,418,430,423,424,425,426,427,431,117,439,441,448];var Hk={wj:0,hj:1,nj:2,oj:4,tj:8,pj:16,qj:32,vj:64,uj:128,jj:256,lj:512,sj:1024,kj:2048,mj:4096,ij:8192,rj:16384};function Ik(a){H.call(this,a)}
u(Ik,H);function Jk(a){H.call(this,a)}
u(Jk,H);Jk.prototype.setVideoId=function(a){return Wd(this,1,Kk,a)};
Jk.prototype.getPlaylistId=function(){return ee(this,2===Xd(this,Kk)?2:-1)};
var Kk=[1,2];function Lk(a){H.call(this,a,-1,Mk)}
u(Lk,H);var Mk=[3];var Nk=new Zi("webPlayerShareEntityServiceEndpoint");var Ok=new Zi("playlistEditEndpoint");var Pk=new Zi("modifyChannelNotificationPreferenceEndpoint");var Qk=new Zi("unsubscribeEndpoint");var Rk=new Zi("subscribeEndpoint");function Sk(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Tk=y.window,Uk,Vk,Wk=(null==Tk?void 0:null==(Uk=Tk.yt)?void 0:Uk.config_)||(null==Tk?void 0:null==(Vk=Tk.ytcfg)?void 0:Vk.data_)||{};A("yt.config_",Wk);function Xk(){Sk(Wk,arguments)}
function L(a,b){return a in Wk?Wk[a]:b}
function Yk(){var a=Wk.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;function M(a){a=Zk(a);return"string"===typeof a&&"false"===a?!1:!!a}
function $k(a,b){a=Zk(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function al(){return L("EXPERIMENTS_TOKEN","")}
function Zk(a){var b=L("EXPERIMENTS_FORCED_FLAGS",{})||{};return void 0!==b[a]?b[a]:L("EXPERIMENT_FLAGS",{})[a]}
function bl(){for(var a=[],b=L("EXPERIMENTS_FORCED_FLAGS",{}),c=p(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=L("EXPERIMENT_FLAGS",{});var e=p(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;function cl(){var a=dl;B("yt.ads.biscotti.getId_")||A("yt.ads.biscotti.getId_",a)}
function el(a){A("yt.ads.biscotti.lastId_",a)}
;var fl=[];function gl(a){fl.forEach(function(b){return b(a)})}
function hl(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){il(b)}}:a}
function il(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=L("ERRORS",[]),e.push([a,"ERROR",b,c,d]),Xk("ERRORS",e));gl(a)}
function jl(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=L("ERRORS",[]),e.push([a,"WARNING",b,c,d]),Xk("ERRORS",e))}
;var kl=/^[\w.]*$/,ll={q:!0,search_query:!0};function ml(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=nl(f[0]||""),h=nl(f[1]||"");g in c?Array.isArray(c[g])?nb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(r){var k=r,m=f[0],q=String(ml);k.args=[{key:m,value:f[1],query:a,method:ol==q?"unchanged":q}];ll.hasOwnProperty(m)||jl(k)}}return c}
var ol=String(ml);function pl(a){var b=[];ob(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];hb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function ql(a){"?"==a.charAt(0)&&(a=a.substr(1));return ml(a,"&")}
function rl(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),ql(1<a.length?a[1]:a[0])):{}}
function sl(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=ql(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return wc(a,e)+d}
function tl(a){if(!b)var b=window.location.href;var c=oc(1,a),d=pc(a);c&&d?(a=a.match(mc),b=b.match(mc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?pc(b)==d&&(Number(oc(4,b))||null)==(Number(oc(4,a))||null):!0;return a}
function nl(a){return a&&a.match(kl)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function ul(a){var b=vl;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=ei;e.flash="0";a:{try{var f=b.h.top.location.href}catch(ea){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Lh:g;try{var h=g.history.length}catch(ea){h=0}e.u_his=h;var k;e.u_h=null==(k=Lh.screen)?void 0:k.height;var m;e.u_w=null==(m=Lh.screen)?void 0:m.width;var q;e.u_ah=null==(q=Lh.screen)?void 0:q.availHeight;var r;e.u_aw=
null==(r=Lh.screen)?void 0:r.availWidth;var w;e.u_cd=null==(w=Lh.screen)?void 0:w.colorDepth}catch(ea){}h=b.h;try{var t=h.screenX;var z=h.screenY}catch(ea){}try{var D=h.outerWidth;var F=h.outerHeight}catch(ea){}try{var O=h.innerWidth;var N=h.innerHeight}catch(ea){}try{var R=h.screenLeft;var ca=h.screenTop}catch(ea){}try{O=h.innerWidth,N=h.innerHeight}catch(ea){}try{var U=h.screen.availWidth;var qb=h.screen.availTop}catch(ea){}t=[R,ca,t,z,U,qb,D,F,O,N];try{var Ua=(b.h.top||window).document,oa="CSS1Compat"==
Ua.compatMode?Ua.documentElement:Ua.body;var I=(new mf(oa.clientWidth,oa.clientHeight)).round()}catch(ea){I=new mf(-12245933,-12245933)}Ua=I;I={};var na=void 0===na?y:na;oa=new li;na.SVGElement&&na.document.createElementNS&&oa.set(0);z=bi();z["allow-top-navigation-by-user-activation"]&&oa.set(1);z["allow-popups-to-escape-sandbox"]&&oa.set(2);na.crypto&&na.crypto.subtle&&oa.set(3);na.TextDecoder&&na.TextEncoder&&oa.set(4);na=mi(oa);I.bc=na;I.bih=Ua.height;I.biw=Ua.width;I.brdim=t.join();b=b.i;b=(I.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,I.wgl=!!Lh.WebGLRenderingContext,I);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var vl=new function(){var a=window.document;this.h=window;this.i=a};
A("yt.ads_.signals_.getAdSignalsString",function(a){return pl(ul(a))});Date.now();var wl="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function xl(){if(!wl)return null;var a=wl();return"open"in a?a:null}
function yl(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function zl(a,b){"function"===typeof a&&(a=hl(a));return window.setTimeout(a,b)}
;var Al={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Bl="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ja(fi)),Cl=!1;
function Dl(a,b){b=void 0===b?{}:b;var c=tl(a),d=M("web_ajax_ignore_global_headers_if_set"),e;for(e in Al){var f=L(Al[e]);"X-Goog-Visitor-Id"!==e||f||(f=L("VISITOR_DATA"));!f||!c&&pc(a)||d&&void 0!==b[e]||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!pc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!pc(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}document.location.hostname.endsWith("youtubeeducation.com")||
!c&&pc(a)||(b["X-YouTube-Ad-Signals"]=pl(ul()));return b}
function El(a){var b=window.location.search,c=pc(a);M("debug_handle_relative_url_for_query_forward_killswitch")||!c&&tl(a)&&(c=document.location.hostname);var d=nc(oc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=ql(b),f={};hb(Bl,function(g){e[g]&&(f[g]=e[g])});
return sl(a,f||{},!1)}
function Fl(a,b){var c=b.format||"JSON";a=Gl(a,b);var d=Hl(a,b),e=!1,f=Il(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var m=yl(k),q=null,r=400<=k.status&&500>k.status,w=500<=k.status&&600>k.status;if(m||r||w)q=Jl(a,c,k,b.convertToSafeHtml);if(m)a:if(k&&204==k.status)m=!0;else{switch(c){case "XML":m=0==parseInt(q&&q.return_code,10);break a;case "RAW":m=!0;break a}m=!!q}q=q||{};r=b.context||y;m?b.onSuccess&&b.onSuccess.call(r,k,q):b.onError&&b.onError.call(r,k,q);b.onFinish&&b.onFinish.call(r,
k,q)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=zl(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||y,f))},d)}return f}
function Gl(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=L("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=sl(a,b||{},!0);return a}
function Hl(a,b){var c=L("XSRF_FIELD_NAME"),d=L("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=L("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||pc(a)&&!b.withCredentials&&pc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(M("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=ql(e),zb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):uc(e));f=e||f&&!sb(f);!Cl&&f&&"POST"!=b.method&&(Cl=!0,il(Error("AJAX request with postData should use POST")));return e}
function Jl(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,jl(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Kl(a):null)e={},hb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Ll(g)})}d&&Ml(e);
return e}
function Ml(a){if(Sa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=Bb();d=e?e.createHTML(d):d;a[c]=new fc(d)}else Ml(a[b])}}
function Kl(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Ll(a){var b="";hb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Il(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&hl(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=xl();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;M("debug_forward_web_query_parameters")&&(a=El(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Dl(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Nl=Yc||Zc;function Ol(a){var b=Ub();return b?0<=b.toLowerCase().indexOf(a):!1}
;var Pl=[{Cb:function(a){return"Cannot read property '"+a.key+"'"},
kb:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Cb:function(a){return"Cannot call '"+a.key+"'"},
kb:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Cb:function(a){return a.key+" is not defined"},
kb:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Rl={na:[],la:[{callback:Ql,weight:500}]};function Ql(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Sl(){this.la=[];this.na=[]}
var Tl;function Ul(){if(!Tl){var a=Tl=new Sl;a.na.length=0;a.la.length=0;Rl.na&&a.na.push.apply(a.na,Rl.na);Rl.la&&a.la.push.apply(a.la,Rl.la)}return Tl}
;var Vl=new K;function Wl(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Xl(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Xl(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Xl(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Xl(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Yl(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Zl(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Wl(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Zl(e+".ve",f,g,h):0;d+=g;d+=Zl(e,a[e],b,c);if(500<d)break}}else c[b]=$l(a),d+=c[b].length;else c[b]=$l(a),d+=c[b].length;return d}
function Zl(a,b,c,d){c+="."+a;a=$l(b);d[c]=a;return c.length+a.length}
function $l(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function am(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function bm(){if(!y.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return y.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":y.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":y.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":y.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function cm(a,b,c,d,e){yg.set(""+a,b,{ib:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function dm(a,b,c){yg.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function em(){if(!yg.isEnabled())return!1;if(!yg.Na())return!0;yg.set("TESTCOOKIESENABLED","1",{ib:60});if("1"!==yg.get("TESTCOOKIESENABLED"))return!1;yg.remove("TESTCOOKIESENABLED");return!0}
;var fm=B("ytglobal.prefsUserPrefsPrefs_")||{};A("ytglobal.prefsUserPrefsPrefs_",fm);function gm(){this.h=L("ALT_PREF_COOKIE_NAME","PREF");this.i=L("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=yg.get(""+this.h,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(fm[d]=c.toString())}}}
gm.prototype.get=function(a,b){hm(a);im(a);a=void 0!==fm[a]?fm[a].toString():null;return null!=a?a:b?b:""};
gm.prototype.set=function(a,b){hm(a);im(a);if(null==b)throw Error("ExpectedNotNull");fm[a]=b.toString()};
function jm(a){return!!((km("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
gm.prototype.remove=function(a){hm(a);im(a);delete fm[a]};
gm.prototype.clear=function(){for(var a in fm)delete fm[a]};
function im(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function hm(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function km(a){a=void 0!==fm[a]?fm[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Pa(gm);var lm={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},mm={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},nm={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},om={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function pm(){var a=y.navigator;return a?a.connection:void 0}
function qm(){var a=pm();if(a){var b=lm[a.type||"unknown"]||"CONN_UNKNOWN";a=lm[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function rm(){var a=pm();if(null!=a&&a.effectiveType)return om.hasOwnProperty(a.effectiveType)?om[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function sm(){}
function tm(a,b){return um(a,0,b)}
sm.prototype.S=function(a,b){return um(a,1,b)};
function vm(a,b){um(a,2,b)}
function wm(a){var b=B("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
;function xm(){sm.apply(this,arguments)}
u(xm,sm);function ym(){xm.h||(xm.h=new xm);return xm.h}
function um(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):zl(a,c||0)}
xm.prototype.ea=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
xm.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
xm.prototype.pause=function(){var a=B("yt.scheduler.instance.pause");a&&a()};
var ki=ym();function P(a){var b=Ka.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ja(b))}
u(P,Error);function zm(){try{return Am(),!0}catch(a){return!1}}
function Am(a){if(void 0!==L("DATASYNC_ID"))return L("DATASYNC_ID");throw new P("Datasync ID not set",void 0===a?"unknown":a);}
;function Bm(a){var b=new Ri;(b=b.isAvailable()?a?new Xi(b,a):b:null)||(a=new Si(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Ni(a):null;this.i=document.domain||window.location.hostname}
Bm.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Gg(b))}catch(f){return}else e=escape(b);cm(a,e,c,this.i)};
Bm.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=yg.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Bm.prototype.remove=function(a){this.h&&this.h.remove(a);dm(a,"/",this.i)};var Cm=function(){var a;return function(){a||(a=new Bm("ytidb"));return a}}();
function Dm(){var a;return null==(a=Cm())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Em=[],Fm,Gm=!1;function Hm(){var a={};for(Fm=new Im(void 0===a.handleError?Jm:a.handleError,void 0===a.logEvent?Km:a.logEvent);0<Em.length;)switch(a=Em.shift(),a.type){case "ERROR":Fm.handleError(a.payload);break;case "EVENT":Fm.logEvent(a.eventType,a.payload)}}
function Lm(a){Gm||(Fm?Fm.handleError(a):(Em.push({type:"ERROR",payload:a}),10<Em.length&&Em.shift()))}
function Mm(a,b){Gm||(Fm?Fm.logEvent(a,b):(Em.push({type:"EVENT",eventType:a,payload:b}),10<Em.length&&Em.shift()))}
;function Nm(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Om(a){return a.substr(0,a.indexOf(":"))||a}
;var Pm={},Qm=(Pm.AUTH_INVALID="No user identifier specified.",Pm.EXPLICIT_ABORT="Transaction was explicitly aborted.",Pm.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Pm.MISSING_INDEX="Index not created.",Pm.MISSING_OBJECT_STORES="Object stores not created.",Pm.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Pm.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Pm.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Pm.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Pm.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Pm.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Pm.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Pm),Rm={},Sm=(Rm.AUTH_INVALID="ERROR",Rm.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Rm.EXPLICIT_ABORT="IGNORED",Rm.IDB_NOT_SUPPORTED="ERROR",Rm.MISSING_INDEX=
"WARNING",Rm.MISSING_OBJECT_STORES="ERROR",Rm.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Rm.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Rm.QUOTA_EXCEEDED="WARNING",Rm.QUOTA_MAYBE_EXCEEDED="WARNING",Rm.UNKNOWN_ABORT="WARNING",Rm.INCOMPATIBLE_DB_VERSION="WARNING",Rm),Tm={},Um=(Tm.AUTH_INVALID=!1,Tm.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Tm.EXPLICIT_ABORT=!1,Tm.IDB_NOT_SUPPORTED=!1,Tm.MISSING_INDEX=!1,Tm.MISSING_OBJECT_STORES=!1,Tm.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Tm.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Tm.QUOTA_EXCEEDED=!1,Tm.QUOTA_MAYBE_EXCEEDED=!0,Tm.UNKNOWN_ABORT=!0,Tm.INCOMPATIBLE_DB_VERSION=!1,Tm);function Vm(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Qm[a]:c;d=void 0===d?Sm[a]:d;e=void 0===e?Um[a]:e;P.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Vm.prototype)}
u(Vm,P);function Wm(a,b){Vm.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Qm.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Wm.prototype)}
u(Wm,Vm);function Xm(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Xm.prototype)}
u(Xm,Error);var Ym=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Zm(a,b,c,d){b=Om(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Vm)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new Vm("QUOTA_EXCEEDED",a);if($c&&"UnknownError"===e.name)return new Vm("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Xm)return new Vm("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Ym.some(function(f){return e.message.includes(f)}))return new Vm("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new Vm("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",jc:e.name})];e.level="WARNING";return e}
function $m(a,b,c){var d=Dm();return new Vm("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function an(a){if(!a)throw Error();throw a;}
function bn(a){return a}
function cn(a){this.h=a}
function dn(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=p(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=p(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
dn.all=function(a){return new dn(new cn(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={za:0};f.za<a.length;f={za:f.za},++f.za)dn.resolve(a[f.za]).then(function(g){return function(h){d[g.za]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
dn.resolve=function(a){return new dn(new cn(function(b,c){a instanceof dn?a.then(b,c):b(a)}))};
dn.reject=function(a){return new dn(new cn(function(b,c){c(a)}))};
dn.prototype.then=function(a,b){var c=this,d=null!=a?a:bn,e=null!=b?b:an;return new dn(new cn(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){en(c,c,d,f,g)}),c.i.push(function(){fn(c,c,e,f,g)})):"FULFILLED"===c.state.status?en(c,c,d,f,g):"REJECTED"===c.state.status&&fn(c,c,e,f,g)}))};
dn.prototype.catch=function(a){return this.then(void 0,a)};
function en(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof dn?gn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function fn(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof dn?gn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function gn(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof dn?gn(a,b,f,d,e):d(f)},function(f){e(f)})}
;function hn(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function jn(a){return new Promise(function(b,c){hn(a,b,c)})}
function kn(a){return new dn(new cn(function(b,c){hn(a,b,c)}))}
;function ln(a,b){return new dn(new cn(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var mn=window,Q=mn.ytcsi&&mn.ytcsi.now?mn.ytcsi.now:mn.performance&&mn.performance.timing&&mn.performance.now&&mn.performance.timing.navigationStart?function(){return mn.performance.timing.navigationStart+mn.performance.now()}:function(){return(new Date).getTime()};function nn(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(Q());this.i=!1}
l=nn.prototype;l.add=function(a,b,c){return on(this,[a],{mode:"readwrite",R:!0},function(d){return d.objectStore(a).add(b,c)})};
l.clear=function(a){return on(this,[a],{mode:"readwrite",R:!0},function(b){return b.objectStore(a).clear()})};
l.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
l.count=function(a,b){return on(this,[a],{mode:"readonly",R:!0},function(c){return c.objectStore(a).count(b)})};
function pn(a,b,c){a=a.h.createObjectStore(b,c);return new qn(a)}
l.delete=function(a,b){return on(this,[a],{mode:"readwrite",R:!0},function(c){return c.objectStore(a).delete(b)})};
l.get=function(a,b){return on(this,[a],{mode:"readonly",R:!0},function(c){return c.objectStore(a).get(b)})};
function rn(a,b,c){return on(a,[b],{mode:"readwrite",R:!0},function(d){d=d.objectStore(b);return kn(d.h.put(c,void 0))})}
l.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function on(a,b,c,d){var e,f,g,h,k,m,q,r,w,t,z,D;return x(function(F){switch(F.h){case 1:var O={mode:"readonly",R:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?O.mode=c:Object.assign(O,c);e=O;a.transactionCount++;f=e.R?3:1;g=0;case 2:if(h){F.u(3);break}g++;k=Math.round(Q());za(F,4);m=a.h.transaction(b,e.mode);O=new sn(m);O=tn(O,d);return v(F,O,6);case 6:return q=F.i,r=Math.round(Q()),un(a,k,r,g,void 0,b.join(),e),F.return(q);case 4:w=Ba(F);t=Math.round(Q());z=Zm(w,a.h.name,b.join(),a.h.version);
if((D=z instanceof Vm&&!z.h)||g>=f)un(a,k,t,g,z,b.join(),e),h=z;F.u(2);break;case 3:return F.return(Promise.reject(h))}})}
function un(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Vm&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Mm("QUOTA_EXCEEDED",{dbName:Om(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Vm&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),Mm("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),vn(a,!1,d,f,b,g.tag),Lm(e)):vn(a,!0,d,f,b,g.tag)}
function vn(a,b,c,d,e,f){Mm("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
l.getName=function(){return this.h.name};
function qn(a){this.h=a}
l=qn.prototype;l.add=function(a,b){return kn(this.h.add(a,b))};
l.autoIncrement=function(){return this.h.autoIncrement};
l.clear=function(){return kn(this.h.clear()).then(function(){})};
function wn(a,b,c){a.h.createIndex(b,c,{unique:!1})}
l.count=function(a){return kn(this.h.count(a))};
function xn(a,b){return yn(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
l.delete=function(a){return a instanceof IDBKeyRange?xn(this,a):kn(this.h.delete(a))};
l.get=function(a){return kn(this.h.get(a))};
l.index=function(a){try{return new zn(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Xm(a,this.h.name);throw b;}};
l.getName=function(){return this.h.name};
l.keyPath=function(){return this.h.keyPath};
function yn(a,b,c){a=a.h.openCursor(b.query,b.direction);return An(a).then(function(d){return ln(d,c)})}
function sn(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=Vm;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function tn(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return p(d).next().value})}
sn.prototype.abort=function(){this.h.abort();this.i=!0;throw new Vm("EXPLICIT_ABORT");};
sn.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new qn(a),this.j.set(a,b));return b};
function zn(a){this.h=a}
l=zn.prototype;l.count=function(a){return kn(this.h.count(a))};
l.delete=function(a){return Bn(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
l.get=function(a){return kn(this.h.get(a))};
l.getKey=function(a){return kn(this.h.getKey(a))};
l.keyPath=function(){return this.h.keyPath};
l.unique=function(){return this.h.unique};
function Bn(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return An(a).then(function(d){return ln(d,c)})}
function Cn(a,b){this.request=a;this.cursor=b}
function An(a){return kn(a).then(function(b){return b?new Cn(a,b):null})}
l=Cn.prototype;l.advance=function(a){this.cursor.advance(a);return An(this.request)};
l.continue=function(a){this.cursor.continue(a);return An(this.request)};
l.delete=function(){return kn(this.cursor.delete()).then(function(){})};
l.getKey=function(){return this.cursor.key};
l.getValue=function(){return this.cursor.value};
l.update=function(a){return kn(this.cursor.update(a))};function Dn(a,b,c){return new Promise(function(d,e){function f(){w||(w=new nn(g.result,{closed:r}));return w}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Gc,k=c.blocking,m=c.wd,q=c.upgrade,r=c.closed,w;g.addEventListener("upgradeneeded",function(t){try{if(null===t.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&"none"!==t.dataLoss&&Mm("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:Om(a)});var z=f(),D=new sn(g.transaction);
q&&q(z,function(F){return t.oldVersion<F&&t.newVersion>=F},D);
D.done.catch(function(F){e(F)})}catch(F){e(F)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){Mm("IDB_UNEXPECTEDLY_CLOSED",{dbName:Om(a),dbVersion:t.version});m&&m()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function En(a,b,c){c=void 0===c?{}:c;return Dn(a,b,c)}
function Fn(a,b){b=void 0===b?{}:b;var c,d,e,f;return x(function(g){if(1==g.h)return za(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Gc)&&c.addEventListener("blocked",function(){e()}),v(g,jn(c),4);
if(2!=g.h)return Aa(g,0);f=Ba(g);throw Zm(f,a,"",-1);})}
;function Gn(a){return new Promise(function(b){vm(function(){b()},a)})}
function Hn(a,b){this.name=a;this.options=b;this.l=!0;this.o=this.m=0;this.i=500}
Hn.prototype.j=function(a,b,c){c=void 0===c?{}:c;return En(a,b,c)};
Hn.prototype.delete=function(a){a=void 0===a?{}:a;return Fn(this.name,a)};
function In(a,b){return new Vm("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Jn(a,b){if(!b)throw $m("openWithToken",Om(a.name));return Kn(a)}
function Kn(a){function b(){var f,g,h,k,m,q,r,w,t,z;return x(function(D){switch(D.h){case 1:return g=null!=(f=Error().stack)?f:"",za(D,2),v(D,a.j(a.name,a.options.version,d),4);case 4:h=D.i;for(var F=a.options,O=[],N=p(Object.keys(F.Da)),R=N.next();!R.done;R=N.next()){R=R.value;var ca=F.Da[R],U=void 0===ca.gd?Number.MAX_VALUE:ca.gd;!(h.h.version>=ca.Ia)||h.h.version>=U||h.h.objectStoreNames.contains(R)||O.push(R)}k=O;if(0===k.length){D.u(5);break}m=Object.keys(a.options.Da);q=h.objectStoreNames();
if(a.o<$k("ytidb_reopen_db_retries",0))return a.o++,h.close(),Lm(new Vm("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:q})),D.return(b());if(!(a.m<$k("ytidb_remake_db_retries",1))){D.u(6);break}a.m++;if(!M("ytidb_remake_db_enable_backoff_delay")){D.u(7);break}return v(D,Gn(a.i),8);case 8:a.i*=2;case 7:return v(D,a.delete(),9);case 9:return Lm(new Vm("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:q})),D.return(b());
case 6:throw new Wm(q,m);case 5:return D.return(h);case 2:r=Ba(D);if(r instanceof DOMException?"VersionError"!==r.name:"DOMError"in self&&r instanceof DOMError?"VersionError"!==r.name:!(r instanceof Object&&"message"in r)||"An attempt was made to open a database using a lower version than the existing version."!==r.message){D.u(10);break}return v(D,a.j(a.name,void 0,Object.assign({},d,{upgrade:void 0})),11);case 11:w=D.i;t=w.h.version;if(void 0!==a.options.version&&t>a.options.version+1)throw w.close(),
a.l=!1,In(a,t);return D.return(w);case 10:throw c(),r instanceof Error&&!M("ytidb_async_stack_killswitch")&&(r.stack=r.stack+"\n"+g.substring(g.indexOf("\n")+1)),Zm(r,a.name,"",null!=(z=a.options.version)?z:-1);}})}
function c(){a.h===e&&(a.h=void 0)}
if(!a.l)throw In(a);if(a.h)return a.h;var d={blocking:function(f){f.close()},
closed:c,wd:c,upgrade:a.options.upgrade};var e=b();a.h=e;return a.h}
;var Ln=new Hn("YtIdbMeta",{Da:{databases:{Ia:1}},upgrade:function(a,b){b(1)&&pn(a,"databases",{keyPath:"actualName"})}});
function Mn(a,b){var c;return x(function(d){if(1==d.h)return v(d,Jn(Ln,b),2);c=d.i;return d.return(on(c,["databases"],{R:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return kn(f.h.put(a,void 0)).then(function(){})})}))})}
function Nn(a,b){var c;return x(function(d){if(1==d.h)return a?v(d,Jn(Ln,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function On(a,b){var c,d;return x(function(e){return 1==e.h?(c=[],v(e,Jn(Ln,b),2)):3!=e.h?(d=e.i,v(e,on(d,["databases"],{R:!0,mode:"readonly"},function(f){c.length=0;return yn(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function Pn(a){return On(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function Qn(a,b,c){return On(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function Rn(a){var b,c;return x(function(d){if(1==d.h)return b=Am("YtIdbMeta hasAnyMeta other"),v(d,On(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var Sn,Tn=new function(){}(new function(){});
function Un(){var a,b,c,d;return x(function(e){switch(e.h){case 1:a=Dm();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Nl)f=/WebKit\/([0-9]+)/.exec(Ub()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Ub()),f=!(f&&602<=parseInt(f[1],10)));if(f||Lc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
za(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return v(e,Mn(d,Tn),4);case 4:return v(e,Nn("yt-idb-test-do-not-use",Tn),5);case 5:return e.return(!0);case 2:return Ba(e),e.return(!1)}})}
function Vn(){if(void 0!==Sn)return Sn;Gm=!0;return Sn=Un().then(function(a){Gm=!1;var b;if(null!=(b=Cm())&&b.h){var c;b={hasSucceededOnce:(null==(c=Dm())?void 0:c.hasSucceededOnce)||a};var d;null==(d=Cm())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Wn(){return B("ytglobal.idbToken_")||void 0}
function Xn(){var a=Wn();return a?Promise.resolve(a):Vn().then(function(b){(b=b?Tn:void 0)&&A("ytglobal.idbToken_",b);return b})}
;var Yn=0;function Zn(a,b){Yn||(Yn=ki.S(function(){var c,d,e,f,g;return x(function(h){switch(h.h){case 1:return v(h,Xn(),2);case 2:c=h.i;if(!c)return h.return();d=!0;za(h,3);return v(h,Qn(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.u(6);break}f=e[0];return v(h,Fn(f.actualName),7);case 7:return v(h,Nn(f.actualName,c),6);case 6:Aa(h,4);break;case 3:g=Ba(h),Lm(g),d=!1;case 4:ki.ea(Yn),Yn=0,d&&Zn(a,b),h.h=0}})}))}
function $n(){var a;return x(function(b){return 1==b.h?v(b,Xn(),2):(a=b.i)?b.return(Rn(a)):b.return(!1)})}
new Jh;function ao(a){if(!zm())throw a=new Vm("AUTH_INVALID",{dbName:a}),Lm(a),a;var b=Am();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function bo(a,b,c,d){var e,f,g,h,k,m;return x(function(q){switch(q.h){case 1:return f=null!=(e=Error().stack)?e:"",v(q,Xn(),2);case 2:g=q.i;if(!g)throw h=$m("openDbImpl",a,b),M("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Lm(h),h;Nm(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:ao(a);za(q,3);return v(q,Mn(k,g),5);case 5:return v(q,En(k.actualName,b,d),6);case 6:return q.return(q.i);case 3:return m=Ba(q),za(q,7),v(q,Nn(k.actualName,g),9);case 9:Aa(q,
8);break;case 7:Ba(q);case 8:throw m;}})}
function co(a,b,c){c=void 0===c?{}:c;return bo(a,b,!1,c)}
function eo(a,b,c){c=void 0===c?{}:c;return bo(a,b,!0,c)}
function fo(a,b){b=void 0===b?{}:b;var c,d;return x(function(e){if(1==e.h)return v(e,Xn(),2);if(3!=e.h){c=e.i;if(!c)return e.return();Nm(a);d=ao(a);return v(e,Fn(d.actualName,b),3)}return v(e,Nn(d.actualName,c),0)})}
function go(a,b,c){a=a.map(function(d){return x(function(e){return 1==e.h?v(e,Fn(d.actualName,b),2):v(e,Nn(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function ho(){var a=void 0===a?{}:a;var b,c;return x(function(d){if(1==d.h)return v(d,Xn(),2);if(3!=d.h){b=d.i;if(!b)return d.return();Nm("LogsDatabaseV2");return v(d,Pn(b),3)}c=d.i;return v(d,go(c,a,b),0)})}
function io(a,b){b=void 0===b?{}:b;var c;return x(function(d){if(1==d.h)return v(d,Xn(),2);if(3!=d.h){c=d.i;if(!c)return d.return();Nm(a);return v(d,Fn(a,b),3)}return v(d,Nn(a,c),0)})}
;function jo(a,b){Hn.call(this,a,b);this.options=b;Nm(a)}
u(jo,Hn);function ko(a,b){var c;return function(){c||(c=new jo(a,b));return c}}
jo.prototype.j=function(a,b,c){c=void 0===c?{}:c;return(this.options.pb?eo:co)(a,b,Object.assign({},c))};
jo.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.pb?io:fo)(this.name,a)};
function lo(a,b){return ko(a,b)}
;var mo={},no=lo("ytGcfConfig",{Da:(mo.coldConfigStore={Ia:1},mo.hotConfigStore={Ia:1},mo),pb:!1,upgrade:function(a,b){b(1)&&(wn(pn(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),wn(pn(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function oo(a){return Jn(no(),a)}
function po(a,b,c){var d,e,f;return x(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:Q()},v(g,oo(c),2);case 2:return e=g.i,v(g,e.clear("hotConfigStore"),3);case 3:return v(g,rn(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function qo(a,b,c,d){var e,f,g;return x(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:Q()},v(h,oo(d),2);case 2:return f=h.i,v(h,f.clear("coldConfigStore"),3);case 3:return v(h,rn(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function ro(a){var b,c;return x(function(d){return 1==d.h?v(d,oo(a),2):3!=d.h?(b=d.i,c=void 0,v(d,on(b,["coldConfigStore"],{mode:"readwrite",R:!0},function(e){return Bn(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function so(a){var b,c;return x(function(d){return 1==d.h?v(d,oo(a),2):3!=d.h?(b=d.i,c=void 0,v(d,on(b,["hotConfigStore"],{mode:"readwrite",R:!0},function(e){return Bn(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function to(){}
function uo(a,b,c){var d,e,f;return x(function(g){if(1==g.h){if(!M("update_log_event_config"))return g.u(0);c&&(a.h=c,A("yt.gcf.config.hotConfigGroup",a.h));a.hotHashData=b;A("yt.gcf.config.hotHashData",a.hotHashData);return(d=Wn())?c?g.u(4):v(g,so(d),5):g.u(0)}4!=g.h&&(e=g.i,c=null==(f=e)?void 0:f.config);return v(g,po(c,b,d),0)})}
function vo(a,b,c){var d,e,f,g;return x(function(h){if(1==h.h){if(!M("update_log_event_config"))return h.u(0);a.coldHashData=b;A("yt.gcf.config.coldHashData",a.coldHashData);return(d=Wn())?c?h.u(4):v(h,ro(d),5):h.u(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.u(0);g=c.configData;return v(h,qo(c,b,g,d),0)})}
;function wo(){return"INNERTUBE_API_KEY"in Wk&&"INNERTUBE_API_VERSION"in Wk}
function xo(){return{innertubeApiKey:L("INNERTUBE_API_KEY"),innertubeApiVersion:L("INNERTUBE_API_VERSION"),yb:L("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),cc:L("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Tc:L("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:L("INNERTUBE_CONTEXT_CLIENT_VERSION"),ec:L("INNERTUBE_CONTEXT_HL"),dc:L("INNERTUBE_CONTEXT_GL"),Uc:L("INNERTUBE_HOST_OVERRIDE")||"",Wc:!!L("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Vc:!!L("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:L("SERIALIZED_CLIENT_CONFIG_DATA")}}
function yo(a){var b={client:{hl:a.ec,gl:a.dc,clientName:a.cc,clientVersion:a.innertubeContextClientVersion,configInfo:a.yb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=y.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=al();""!==c&&(b.client.experimentsToken=c);c=bl();0<c.length&&(b.request={internalExperimentFlags:c});zo(a,void 0,b);M("enable_third_party_info")&&Ao(void 0,b);Bo(void 0,b);Co(a,void 0,b);Do(void 0,b);M("start_sending_config_hash")&&
Eo(void 0,b);L("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(b.user={onBehalfOfUser:L("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=p(Object.entries(ql(L("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=p(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,
e);return b}
function Fo(a){var b=new rj,c=new ij;E(c,1,a.ec);E(c,2,a.dc);E(c,16,a.Tc);E(c,17,a.innertubeContextClientVersion);if(a.yb){var d=a.yb,e=new ej;d.coldConfigData&&E(e,1,d.coldConfigData);d.appInstallData&&E(e,6,d.appInstallData);d.coldHashData&&E(e,3,d.coldHashData);d.hotHashData&&E(e,5,d.hotHashData);G(c,ej,62,e)}(d=y.devicePixelRatio)&&1!=d&&E(c,65,d);d=al();""!==d&&E(c,54,d);d=bl();if(0<d.length){e=new kj;for(var f=0;f<d.length;f++){var g=new cj;E(g,1,d[f].key);Wd(g,2,dj,d[f].value);de(e,15,cj,g)}G(b,
kj,5,e)}zo(a,c);M("enable_third_party_info")&&Ao(b);Bo(c);Co(a,c);Do(c);M("start_sending_config_hash")&&Eo(c);L("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(a=new pj,E(a,3,L("DELEGATED_SESSION_ID")));a=p(Object.entries(ql(L("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=p(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?E(c,12,e):"cmodel"===d?E(c,13,e):"cbr"===d?E(c,87,e):"cbrver"===d?E(c,88,e):"cos"===d?E(c,18,e):"cosver"===d?E(c,19,e):"cplatform"===d&&E(c,42,e);b.i(c);return b}
function zo(a,b,c){a=a.cc;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=Yd(b,fj,96)||new fj;var d=bm();d=Object.keys(yj).indexOf(d);d=-1===d?null:d;null!==d&&E(c,3,d);G(b,fj,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=bm())}
function Ao(a,b){var c=B("yt.embedded_player.embed_url");c&&(a?(b=Yd(a,mj,7)||new mj,E(b,4,c),G(a,mj,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function Bo(a,b){var c;if(M("web_log_memory_total_kbytes")&&(null==(c=y.navigator)?0:c.deviceMemory)){var d;c=null==(d=y.navigator)?void 0:d.deviceMemory;a?E(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Co(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=Yd(b,ej,62))?d:new ej;E(c,6,a.appInstallData);G(b,ej,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Do(a,b){var c=qm();c&&(a?E(a,61,mm[c]):b&&(b.client.connectionType=c));M("web_log_effective_connection_type")&&(c=rm())&&(a?E(a,94,nm[c]):b&&(b.client.effectiveConnectionType=c))}
function Go(a,b,c){c=void 0===c?{}:c;var d={};L("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":L("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||L("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.wr||L("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().vr:b=Cg([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=L("SESSION_INDEX",0),M("pageid_as_header_web")&&(d["X-Goog-PageId"]=L("DELEGATED_SESSION_ID")));return d}
function Eo(a,b){to.h||(to.h=new to);var c=B("yt.gcf.config.coldConfigData");var d=B("yt.gcf.config.hotHashData");var e=B("yt.gcf.config.coldHashData");if(c&&e&&d)if(a){var f;b=null!=(f=Yd(a,ej,62))?f:new ej;E(b,1,c);E(b,3,e);E(b,5,d);G(a,ej,62,b)}else b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=e,b.client.configInfo.hotHashData=d)}
;function Ho(a){a=Object.assign({},a);delete a.Authorization;var b=Cg();if(b){var c=new qi;c.update(L("INNERTUBE_API_KEY"));c.update(b);a.hash=cd(c.digest(),3)}return a}
;var Io;function Jo(){Io||(Io=new Bm("yt.innertube"));return Io}
function Ko(a,b,c,d){if(d)return null;d=Jo().get("nextId",!0)||1;var e=Jo().get("requests",!0)||{};e[d]={method:a,request:b,authState:Ho(c),requestTime:Math.round(Q())};Jo().set("nextId",d+1,86400,!0);Jo().set("requests",e,86400,!0);return d}
function Lo(a){var b=Jo().get("requests",!0)||{};delete b[a];Jo().set("requests",b,86400,!0)}
function Mo(a){var b=Jo().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Q())-d.requestTime)){var e=d.authState,f=Ho(Go(!1));vb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Q())),No(a,d.method,e,{}));delete b[c]}}Jo().set("requests",b,86400,!0)}}
;function Oo(a){this.bb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.Ca=function(){};
this.now=Date.now;this.Ja=!1;var b;this.tc=null!=(b=a.tc)?b:100;var c;this.oc=null!=(c=a.oc)?c:1;var d;this.mc=null!=(d=a.mc)?d:2592E6;var e;this.kc=null!=(e=a.kc)?e:12E4;var f;this.nc=null!=(f=a.nc)?f:5E3;var g;this.I=null!=(g=a.I)?g:void 0;this.gb=!!a.gb;var h;this.fb=null!=(h=a.fb)?h:.1;var k;this.lb=null!=(k=a.lb)?k:10;a.handleError&&(this.handleError=a.handleError);a.Ca&&(this.Ca=a.Ca);a.Ja&&(this.Ja=a.Ja);a.bb&&(this.bb=a.bb);this.G=a.G;this.Z=a.Z;this.N=a.N;this.L=a.L;this.ja=a.ja;this.Eb=
a.Eb;this.Db=a.Db;Po(this)&&(!this.G||this.G("networkless_logging"))&&Qo(this)}
function Qo(a){Po(a)&&!a.Ja&&(a.h=!0,a.gb&&Math.random()<=a.fb&&a.N.Ic(a.I),Ro(a),a.L.U()&&a.Qa(),a.L.ia(a.Eb,a.Qa.bind(a)),a.L.ia(a.Db,a.Rb.bind(a)))}
l=Oo.prototype;l.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(Po(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.N.set(d,this.I).then(function(e){d.id=e;c.L.U()&&So(c,d)}).catch(function(e){So(c,d);
To(c,e)})}else this.ja(a,b)};
l.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(Po(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.G&&this.G("nwl_skip_retry")&&(e.skipRetry=c);if(this.L.U()||this.G&&this.G("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return x(function(k){if(1==k.h)return v(k,d.N.set(e,d.I).catch(function(m){To(d,m)}),2);
f(g,h);k.h=0})}}this.ja(a,b,e.skipRetry)}else this.N.set(e,this.I).catch(function(g){d.ja(a,b,e.skipRetry);
To(d,g)})}else this.ja(a,b,this.G&&this.G("nwl_skip_retry")&&c)};
l.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(Po(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.N.Ba(d.id,c.I):e=!0;c.L.wa&&c.G&&c.G("vss_network_hint")&&c.L.wa(!0);f(g,h)};
this.ja(d.url,d.options);this.N.set(d,this.I).then(function(g){d.id=g;e&&c.N.Ba(d.id,c.I)}).catch(function(g){To(c,g)})}else this.ja(a,b)};
l.Qa=function(){var a=this;if(!Po(this))throw $m("throttleSend");this.i||(this.i=this.Z.S(function(){var b;return x(function(c){if(1==c.h)return v(c,a.N.ac("NEW",a.I),2);if(3!=c.h)return b=c.i,b?v(c,So(a,b),3):(a.Rb(),c.return());a.i&&(a.i=0,a.Qa());c.h=0})},this.tc))};
l.Rb=function(){this.Z.ea(this.i);this.i=0};
function So(a,b){var c,d;return x(function(e){switch(e.h){case 1:if(!Po(a))throw c=$m("immediateSend"),c;if(void 0===b.id){e.u(2);break}return v(e,a.N.Yc(b.id,a.I),3);case 3:if(d=e.i){if(a.G&&!a.G("nwl_send_from_memory_when_online")||void 0===a.G)b=d}else a.Ca(Error("The request cannot be found in the database."));case 2:if(Uo(a,b,a.mc)){e.u(4);break}a.Ca(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.u(5);break}return v(e,a.N.Ba(b.id,a.I),5);case 5:return e.return();
case 4:b.skipRetry||(b=Vo(a,b));if(!b){e.u(0);break}if(!b.skipRetry||void 0===b.id){e.u(8);break}return v(e,a.N.Ba(b.id,a.I),8);case 8:a.ja(b.url,b.options,!!b.skipRetry),e.h=0}})}
function Vo(a,b){if(!Po(a))throw $m("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k;return x(function(m){switch(m.h){case 1:g=Wo(f);if(!(a.G&&a.G("nwl_consider_error_code")&&g||a.G&&!a.G("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.lb)){m.u(2);break}if(!a.L.ob){m.u(3);break}return v(m,a.L.ob(),3);case 3:if(a.L.U()){m.u(2);break}c(e,f);if(!a.G||!a.G("nwl_consider_error_code")||void 0===(null==(h=b)?void 0:h.id)){m.u(6);break}return v(m,a.N.Ib(b.id,a.I,!1),6);case 6:return m.return();case 2:if(a.G&&a.G("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.lb)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){m.u(8);break}return b.sendCount<a.oc?v(m,a.N.Ib(b.id,a.I),12):v(m,a.N.Ba(b.id,a.I),8);case 12:a.Z.S(function(){a.L.U()&&a.Qa()},a.nc);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.u(2):v(h,a.N.Ba(b.id,a.I),2);a.L.wa&&a.G&&a.G("vss_network_hint")&&a.L.wa(!0);d(e,f);h.h=0})};
return b}
function Uo(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Ro(a){if(!Po(a))throw $m("retryQueuedRequests");a.N.ac("QUEUED",a.I).then(function(b){b&&!Uo(a,b,a.kc)?a.Z.S(function(){return x(function(c){if(1==c.h)return void 0===b.id?c.u(2):v(c,a.N.Ib(b.id,a.I),2);Ro(a);c.h=0})}):a.L.U()&&a.Qa()})}
function To(a,b){a.yc&&!a.L.U()?a.yc(b):a.handleError(b)}
function Po(a){return!!a.I||a.bb}
function Wo(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;function Xo(a,b){this.version=a;this.args=b}
;function Yo(a,b){this.topic=a;this.h=b}
Yo.prototype.toString=function(){return this.topic};var Zo=B("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.Ga;K.prototype.publish=K.prototype.sa;K.prototype.clear=K.prototype.clear;A("ytPubsub2Pubsub2Instance",Zo);var $o=B("ytPubsub2Pubsub2SubscribedKeys")||{};A("ytPubsub2Pubsub2SubscribedKeys",$o);var ap=B("ytPubsub2Pubsub2TopicToKeys")||{};A("ytPubsub2Pubsub2TopicToKeys",ap);var bp=B("ytPubsub2Pubsub2IsAsync")||{};A("ytPubsub2Pubsub2IsAsync",bp);
A("ytPubsub2Pubsub2SkipSubKey",null);function cp(a,b){var c=dp();c&&c.publish.call(c,a.toString(),a,b)}
function ep(a){var b=fp,c=dp();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=B("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if($o[d])try{if(f&&b instanceof Yo&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.qa){var m=new h;h.qa=m.version}var q=h.qa}catch(F){}if(!q||k.version!=q)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{q=Reflect;var r=q.construct;
var w=k.args,t=w.length;if(0<t){var z=Array(t);for(k=0;k<t;k++)z[k]=w[k];var D=z}else D=[];f=r.call(q,h,D)}catch(F){throw F.message="yt.pubsub2.Data.deserialize(): "+F.message,F;}}catch(F){throw F.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+F.message,F;}a.call(window,f)}catch(F){il(F)}},bp[b.toString()]?B("yt.scheduler.instance")?ki.S(g):zl(g,0):g())});
$o[d]=!0;ap[b.toString()]||(ap[b.toString()]=[]);ap[b.toString()].push(d);return d}
function gp(){var a=hp,b=ep(function(c){a.apply(void 0,arguments);ip(b)});
return b}
function ip(a){var b=dp();b&&("number"===typeof a&&(a=[a]),hb(a,function(c){b.unsubscribeByKey(c);delete $o[c]}))}
function dp(){return B("ytPubsub2Pubsub2Instance")}
;var jp;
function kp(){if(jp)return jp();var a={};jp=lo("LogsDatabaseV2",{Da:(a.LogsRequestsStore={Ia:2},a),pb:!1,upgrade:function(b,c,d){c(2)&&pn(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),wn(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return jp()}
;function lp(a){return Jn(kp(),a)}
function mp(a,b){var c,d,e,f;return x(function(g){if(1==g.h)return c={startTime:Q(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},v(g,lp(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:L("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),v(g,rn(d,"LogsRequestsStore",e),3);f=g.i;c.yd=Q();np(c);return g.return(f)})}
function op(a,b){var c,d,e,f,g,h,k;return x(function(m){if(1==m.h)return c={startTime:Q(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},v(m,lp(b),2);if(3!=m.h)return d=m.i,e=L("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,Q()],h=IDBKeyRange.bound(f,g),k=void 0,v(m,on(d,["LogsRequestsStore"],{mode:"readwrite",R:!0},function(q){return Bn(q.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(r){r.getValue()&&(k=r.getValue(),"NEW"===a&&(k.status="QUEUED",
r.update(k)))})}),3);
c.yd=Q();np(c);return m.return(k)})}
function pp(a,b){var c;return x(function(d){if(1==d.h)return v(d,lp(b),2);c=d.i;return d.return(on(c,["LogsRequestsStore"],{mode:"readwrite",R:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",kn(f.h.put(g,void 0)).then(function(){return g})})}))})}
function qp(a,b,c){c=void 0===c?!0:c;var d;return x(function(e){if(1==e.h)return v(e,lp(b),2);d=e.i;return e.return(on(d,["LogsRequestsStore"],{mode:"readwrite",R:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),kn(g.h.put(h,void 0)).then(function(){return h})):dn.resolve(void 0)})}))})}
function rp(a,b){var c;return x(function(d){if(1==d.h)return v(d,lp(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function sp(a){var b,c;return x(function(d){if(1==d.h)return v(d,lp(a),2);b=d.i;c=Q()-2592E6;return v(d,on(b,["LogsRequestsStore"],{mode:"readwrite",R:!0},function(e){return yn(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function tp(){x(function(a){return v(a,ho(),0)})}
function np(a){M("nwl_csi_killswitch")||.01>=Math.random()&&cp("nwl_transaction_latency_payload",a)}
;var up={},vp=lo("ServiceWorkerLogsDatabase",{Da:(up.SWHealthLog={Ia:1},up),pb:!0,upgrade:function(a,b){b(1)&&wn(pn(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function wp(a){return Jn(vp(),a)}
function xp(a){var b,c;x(function(d){if(1==d.h)return v(d,wp(a),2);b=d.i;c=Q()-2592E6;return v(d,on(b,["SWHealthLog"],{mode:"readwrite",R:!0},function(e){return yn(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function yp(a){var b;return x(function(c){if(1==c.h)return v(c,wp(a),2);b=c.i;return v(c,b.clear("SWHealthLog"),0)})}
;var zp={},Ap=0;function Bp(a){var b=new Image,c=""+Ap++;zp[c]=b;b.onload=b.onerror=function(){delete zp[c]};
b.src=a}
;function Cp(){this.h=new Map;this.i=!1}
function Qp(){if(!Cp.h){var a=B("yt.networkRequestMonitor.instance")||new Cp;A("yt.networkRequestMonitor.instance",a);Cp.h=a}return Cp.h}
Cp.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Cp.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
Cp.prototype.removeParams=function(a){return a.split("?")[0]};
Cp.prototype.removeParams=Cp.prototype.removeParams;Cp.prototype.isEndpointCFR=Cp.prototype.isEndpointCFR;Cp.prototype.requestComplete=Cp.prototype.requestComplete;Cp.getInstance=Qp;var oq;function pq(){oq||(oq=new Bm("yt.offline"));return oq}
function qq(a){if(M("offline_error_handling")){var b=pq().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);pq().set("errors",b,2592E3,!0)}}
;function rq(){ef.call(this);var a=this;this.j=!1;this.i=ji();this.i.ia("networkstatus-online",function(){if(a.j&&M("offline_error_handling")){var b=pq().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new P(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;il(d)}pq().set("errors",{},2592E3,!0)}}})}
u(rq,ef);function sq(){if(!rq.h){var a=B("yt.networkStatusManager.instance")||new rq;A("yt.networkStatusManager.instance",a);rq.h=a}return rq.h}
l=rq.prototype;l.U=function(){return this.i.U()};
l.wa=function(a){this.i.i=a};
l.Rc=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
l.Mc=function(){this.j=!0};
l.ia=function(a,b){return this.i.ia(a,b)};
l.ob=function(a){a=hi(this.i,a);a.then(function(b){M("use_cfr_monitor")&&Qp().requestComplete("generate_204",b)});
return a};
rq.prototype.sendNetworkCheckRequest=rq.prototype.ob;rq.prototype.listen=rq.prototype.ia;rq.prototype.enableErrorFlushing=rq.prototype.Mc;rq.prototype.getWindowStatus=rq.prototype.Rc;rq.prototype.networkStatusHint=rq.prototype.wa;rq.prototype.isNetworkAvailable=rq.prototype.U;rq.getInstance=sq;function tq(a){a=void 0===a?{}:a;ef.call(this);var b=this;this.i=this.o=0;this.j=sq();var c=B("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.nb?(this.nb=a.nb,c("networkstatus-online",function(){uq(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){uq(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){ff(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){ff(b,"publicytnetworkstatus-offline")})))}
u(tq,ef);tq.prototype.U=function(){var a=B("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
tq.prototype.wa=function(a){var b=B("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
tq.prototype.ob=function(a){var b=this,c;return x(function(d){c=B("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return M("skip_network_check_if_cfr")&&Qp().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.wa((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.U())})):c?d.return(c(a)):d.return(!0)})};
function uq(a,b){a.nb?a.i?(ki.ea(a.o),a.o=ki.S(function(){a.m!==b&&(ff(a,b),a.m=b,a.i=Q())},a.nb-(Q()-a.i))):(ff(a,b),a.m=b,a.i=Q()):ff(a,b)}
;var vq;function wq(){var a=Oo.call;vq||(vq=new tq({Ir:!0,Cr:!0}));a.call(Oo,this,{N:{Ic:sp,Ba:rp,ac:op,Yc:pp,Ib:qp,set:mp},L:vq,handleError:il,Ca:jl,ja:xq,now:Q,yc:qq,Z:ym(),Eb:"publicytnetworkstatus-online",Db:"publicytnetworkstatus-offline",gb:!0,fb:.1,lb:$k("potential_esf_error_limit",10),G:M,Ja:!(zm()&&yq())});this.j=new Jh;M("networkless_immediately_drop_all_requests")&&tp();io("LogsDatabaseV2")}
u(wq,Oo);function zq(){var a=B("yt.networklessRequestController.instance");a||(a=new wq,A("yt.networklessRequestController.instance",a),M("networkless_logging")&&Xn().then(function(b){a.I=b;Qo(a);a.j.resolve();a.gb&&Math.random()<=a.fb&&a.I&&xp(a.I);M("networkless_immediately_drop_sw_health_store")&&Aq(a)}));
return a}
wq.prototype.writeThenSend=function(a,b){b||(b={});zm()||(this.h=!1);Oo.prototype.writeThenSend.call(this,a,b)};
wq.prototype.sendThenWrite=function(a,b,c){b||(b={});zm()||(this.h=!1);Oo.prototype.sendThenWrite.call(this,a,b,c)};
wq.prototype.sendAndWrite=function(a,b){b||(b={});zm()||(this.h=!1);Oo.prototype.sendAndWrite.call(this,a,b)};
wq.prototype.awaitInitialization=function(){return this.j.promise};
function Aq(a){var b;x(function(c){if(!a.I)throw b=$m("clearSWHealthLogsDb"),b;return c.return(yp(a.I).catch(function(d){a.handleError(d)}))})}
function xq(a,b,c){M("use_cfr_monitor")&&Bq(a,b);if(M("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Q())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(Q())}if(c&&0===Object.keys(b).length){var e=void 0===e?"":e;var f=void 0===f?!1:f;if(a)if(e)Il(a,void 0,"POST",e);else if(L("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))Il(a,void 0,"GET","",void 0,void 0,f);else{b:{try{var g=new db({url:a});if(g.j&&g.i||
g.l){var h=nc(oc(5,a)),k;if(!(k=!h||!h.endsWith("/aclk"))){var m=a.search(zc),q=yc(a,0,"ri",m);if(0>q)var r=null;else{var w=a.indexOf("&",q);if(0>w||w>m)w=m;r=decodeURIComponent(a.slice(q+3,-1!==w?w:0).replace(/\+/g," "))}k="1"!==r}var t=!k;break b}}catch(D){}t=!1}if(t){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var z=!0;break b}}catch(D){}z=!1}c=z?!0:!1}else c=!1;c||Bp(a)}}else Fl(a,b)}
function Bq(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Qp().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Qp().requestComplete(a,!0);d(e,f)}}
function yq(){return"www.youtube-nocookie.com"!==pc(document.location.toString())}
;var Cq=!1,Dq=y.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Cq};A("ytNetworklessLoggingInitializationOptions",Dq);function Eq(){var a;x(function(b){if(1==b.h)return v(b,Xn(),2);a=b.i;if(!a||!zm()&&!M("nwl_init_require_datasync_id_killswitch")||!yq())return b.u(0);Cq=!0;Dq.isNwlInitialized=Cq;return v(b,zq().awaitInitialization(),0)})}
;function Fq(a){var b=this;this.config_=null;a?this.config_=a:wo()&&(this.config_=xo());tm(function(){Mo(b)},5E3)}
Fq.prototype.isReady=function(){!this.config_&&wo()&&(this.config_=xo());return!!this.config_};
function No(a,b,c,d){function e(z){z=void 0===z?!1:z;var D;if(d.retry&&"www.youtube-nocookie.com"!=h&&(z||M("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(D=Ko(b,c,m,k)),D)){var F=g.onSuccess,O=g.onFetchSuccess;g.onSuccess=function(N,R){Lo(D);F(N,R)};
c.onFetchSuccess=function(N,R){Lo(D);O(N,R)}}try{z&&d.retry&&!d.hc.bypassNetworkless?(g.method="POST",d.hc.writeThenSend?zq().writeThenSend(t,g):zq().sendAndWrite(t,g)):M("web_all_payloads_via_jspb")?Fl(t,g):(g.method="POST",g.postParams||(g.postParams={}),Fl(t,g))}catch(N){if("InvalidAccessError"==N.name)D&&(Lo(D),D=0),jl(Error("An extension is blocking network request."));
else throw N;}D&&tm(function(){Mo(a)},5E3)}
!L("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&jl(new P("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new P("innertube xhrclient not ready",b,c,d);il(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(z,D){if(d.onSuccess)d.onSuccess(D)},
onFetchSuccess:function(z){if(d.onSuccess)d.onSuccess(z)},
onError:function(z,D){if(d.onError)d.onError(D)},
onFetchError:function(z){if(d.onError)d.onError(z)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Uc)&&(h=f);var k=a.config_.Wc||!1,m=Go(k,h,d);Object.assign(g.headers,m);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var q="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,r={alt:"json"},w=a.config_.Vc&&f;w=w&&f.startsWith("Bearer");w||(r.key=a.config_.innertubeApiKey);var t=sl(""+h+q,r||{},!0);(B("ytNetworklessLoggingInitializationOptions")?
Dq.isNwlInitialized:Cq)?Vn().then(function(z){e(z)}):e(!1)}
;var Gq=0,Hq=Nc?"webkit":Mc?"moz":Kc?"ms":Jc?"o":"";A("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++Gq});var Iq={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Jq(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Iq||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Kq(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Jq.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Jq.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Jq.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var rb=y.ytEventsEventsListeners||{};A("ytEventsEventsListeners",rb);var Lq=y.ytEventsEventsCounter||{count:0};A("ytEventsEventsCounter",Lq);
function Mq(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return pb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Sa(e[4])&&Sa(d)&&vb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Nq=fb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Oq(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Mq(a,b,c,d);if(e)return e;e=++Lq.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Jq(h);if(!pf(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Jq(h);
h.currentTarget=a;return c.call(a,h)};
g=hl(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Nq()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);rb[e]=[a,b,c,g,d];return e}
function Pq(a){a&&("string"==typeof a&&(a=[a]),hb(a,function(b){if(b in rb){var c=rb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Nq()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete rb[b]}}))}
;var Qq=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function Rq(a){this.F=a;this.i=null;this.m=0;this.s=null;this.o=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.K=Oq(window,"mousemove",Za(this.O,this));a=Za(this.J,this);"function"===typeof a&&(a=hl(a));this.P=window.setInterval(a,25)}
ab(Rq,J);Rq.prototype.O=function(a){void 0===a.h&&Kq(a);var b=a.h;void 0===a.i&&Kq(a);this.i=new lf(b,a.i)};
Rq.prototype.J=function(){if(this.i){var a=Qq();if(0!=this.m){var b=this.s,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.o)/this.o)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.F();this.o=d}this.m=a;this.s=this.i;this.l=(this.l+1)%4}};
Rq.prototype.B=function(){window.clearInterval(this.P);Pq(this.K)};var Sq={};
function Tq(a){var b=void 0===a?{}:a;a=void 0===b.dd?!1:b.dd;b=void 0===b.Nc?!0:b.Nc;if(null==B("_lact",window)){var c=parseInt(L("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;A("_lact",c,window);A("_fact",c,window);-1==c&&Uq();Oq(document,"keydown",Uq);Oq(document,"keyup",Uq);Oq(document,"mousedown",Uq);Oq(document,"mouseup",Uq);a?Oq(window,"touchmove",function(){Vq("touchmove",200)},{passive:!0}):(Oq(window,"resize",function(){Vq("resize",200)}),b&&Oq(window,"scroll",function(){Vq("scroll",200)}));
new Rq(function(){Vq("mouse",100)});
Oq(document,"touchstart",Uq,{passive:!0});Oq(document,"touchend",Uq,{passive:!0})}}
function Vq(a,b){Sq[a]||(Sq[a]=!0,ki.S(function(){Uq();Sq[a]=!1},b))}
function Uq(){null==B("_lact",window)&&Tq();var a=Date.now();A("_lact",a,window);-1==B("_fact",window)&&A("_fact",a,window);(a=B("ytglobal.ytUtilActivityCallback_"))&&a()}
function Wq(){var a=B("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var Xq=y.ytPubsubPubsubInstance||new K,Yq=y.ytPubsubPubsubSubscribedKeys||{},Zq=y.ytPubsubPubsubTopicToKeys||{},$q=y.ytPubsubPubsubIsSynchronous||{};function ar(a,b){var c=br();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Yq[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{$q[a]?f():zl(f,0)}catch(g){il(g)}},void 0);
Yq[d]=!0;Zq[a]||(Zq[a]=[]);Zq[a].push(d);return d}return 0}
function cr(a){var b=br();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),hb(a,function(c){b.unsubscribeByKey(c);delete Yq[c]}))}
function dr(a,b){var c=br();c&&c.publish.apply(c,arguments)}
function er(a){var b=br();if(b)if(b.clear(a),a)fr(a);else for(var c in Zq)fr(c)}
function br(){return y.ytPubsubPubsubInstance}
function fr(a){Zq[a]&&(a=Zq[a],hb(a,function(b){Yq[b]&&delete Yq[b]}),a.length=0)}
K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.Ga;K.prototype.publish=K.prototype.sa;K.prototype.clear=K.prototype.clear;A("ytPubsubPubsubInstance",Xq);A("ytPubsubPubsubTopicToKeys",Zq);A("ytPubsubPubsubIsSynchronous",$q);A("ytPubsubPubsubSubscribedKeys",Yq);var gr=Symbol("injectionDeps");function hr(a){this.name=a}
hr.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function ir(){this.key=jr}
function kr(){this.h=new Map;this.i=new Map}
kr.prototype.resolve=function(a){return a instanceof ir?lr(this,a.key,[],!0):lr(this,a,[])};
function lr(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.i.has(b))return a.i.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(d.wc)var e=d.wc;else if(d.Bd)e=d[gr]?mr(a,d[gr],c):[],e=d.Bd.apply(d,ja(e));else if(d.vc){e=d.vc;var f=e[gr]?mr(a,e[gr],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ja(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Sr||a.i.set(b,e);return e}
function mr(a,b,c){return b?b.map(function(d){return d instanceof ir?lr(a,d.key,c,!0):lr(a,d,c)}):[]}
;var nr;function or(){nr||(nr=new kr);return nr}
;function pr(){this.store={};this.h={}}
pr.prototype.storePayload=function(a,b){a=qr(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
pr.prototype.extractMatchingEntries=function(a){a=rr(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ja(this.store[a[c]])),delete this.store[a[c]]);return b};
pr.prototype.getSequenceCount=function(a){a=rr(this,a);for(var b=0,c=0;c<a.length;c++)b+=this.store[a[c]].length||0;return b};
function rr(a,b){var c=qr(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&qr(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(sr(b.auth,g[0])){var h=b.isJspb;sr(void 0===h?"undefined":h?"true":"false",g[1])&&sr(b.cttAuthInfo,g[2])&&e.push(d[f])}}return a.h[c]=e}
function sr(a,b){return void 0===a||"undefined"===a?!0:a===b}
pr.prototype.getSequenceCount=pr.prototype.getSequenceCount;pr.prototype.extractMatchingEntries=pr.prototype.extractMatchingEntries;pr.prototype.storePayload=pr.prototype.storePayload;function qr(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo].join("/")}
;function tr(a,b){if(a)return a[b.name]}
;var ur=$k("initial_gel_batch_timeout",2E3),vr=$k("gel_queue_timeout_max_ms",6E4),wr=Math.pow(2,16)-1,xr=void 0;function yr(){this.j=this.h=this.i=0}
var zr=new yr,Ar=new yr,Br,Cr=!0,Dr=y.ytLoggingTransportGELQueue_||new Map;A("ytLoggingTransportGELQueue_",Dr);var Er=y.ytLoggingTransportGELProtoQueue_||new Map;A("ytLoggingTransportGELProtoQueue_",Er);var Fr=y.ytLoggingTransportTokensToCttTargetIds_||{};A("ytLoggingTransportTokensToCttTargetIds_",Fr);var Gr=y.ytLoggingTransportTokensToJspbCttTargetIds_||{};A("ytLoggingTransportTokensToJspbCttTargetIds_",Gr);var Hr={};function Ir(){var a=B("yt.logging.ims");a||(a=new pr,A("yt.logging.ims",a));return a}
function Jr(a,b){M("web_all_payloads_via_jspb")&&jl(new P("transport.log called for JSON in JSPB only experiment"));if("log_event"===a.endpoint){Kr(a);var c=Lr(a);if(M("use_new_in_memory_storage")){Hr[c]=!0;var d={cttAuthInfo:c,isJspb:!1};Ir().storePayload(d,a.payload);Mr(b,[],c,!1,d)}else d=Dr.get(c)||[],Dr.set(c,d),d.push(a.payload),Mr(b,d,c)}}
function Nr(a,b){if("log_event"===a.endpoint){Kr(void 0,a);var c=Lr(a,!0);if(M("use_new_in_memory_storage")){Hr[c]=!0;var d={cttAuthInfo:c,isJspb:!0};Ir().storePayload(d,a.payload.toJSON());Mr(b,[],c,!0,d)}else d=Er.get(c)||[],Er.set(c,d),a=a.payload.toJSON(),d.push(a),Mr(b,d,c,!0)}}
function Mr(a,b,c,d,e){d=void 0===d?!1:d;a&&(xr=new a);a=$k("tvhtml5_logging_max_batch_ads_fork")||$k("tvhtml5_logging_max_batch")||$k("web_logging_max_batch")||100;var f=Q(),g=d?Ar.j:zr.j;b=b.length;e&&(b=Ir().getSequenceCount(e));b>=a?Br||(Br=Or(function(){Pr({writeThenSend:!0},M("flush_only_full_queue")?c:void 0,d);Br=void 0},0)):10<=f-g&&(Qr(d),d?Ar.j=f:zr.j=f)}
function Rr(a,b){M("web_all_payloads_via_jspb")&&jl(new P("transport.logIsolatedGelPayload called in JSPB only experiment"));if("log_event"===a.endpoint){Kr(a);var c=Lr(a),d=new Map;d.set(c,[a.payload]);b&&(xr=new b);return new Bf(function(e,f){xr&&xr.isReady()?Sr(d,xr,e,f,{bypassNetworkless:!0},!0):e()})}}
function Tr(a,b){if("log_event"===a.endpoint){Kr(void 0,a);var c=Lr(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(xr=new b);return new Bf(function(e){xr&&xr.isReady()?Ur(d,xr,e,{bypassNetworkless:!0},!0):e()})}}
function Lr(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Jk;c.videoId?d.setVideoId(c.videoId):c.playlistId&&Wd(d,2,Kk,c.playlistId);Gr[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Fr[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Pr(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;!c&&M("web_all_payloads_via_jspb")&&jl(new P("transport.flushLogs called for JSON in JSPB only experiment"));new Bf(function(d,e){c?(Vr(Ar.i),Vr(Ar.h),Ar.h=0):(Vr(zr.i),Vr(zr.h),zr.h=0);if(xr&&xr.isReady())if(M("use_new_in_memory_storage")){var f=a,g=c,h=xr;f=void 0===f?{}:f;g=void 0===g?!1:g;var k=new Map,m=new Map;if(void 0!==b)g?(e=Ir().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),k.set(b,e),Ur(k,h,d,f)):(k=Ir().extractMatchingEntries({isJspb:g,
cttAuthInfo:b}),m.set(b,k),Sr(m,h,d,e,f));else if(g){e=p(Object.keys(Hr));for(g=e.next();!g.done;g=e.next())m=g.value,g=Ir().extractMatchingEntries({isJspb:!0,cttAuthInfo:m}),0<g.length&&k.set(m,g),delete Hr[m];Ur(k,h,d,f)}else{k=p(Object.keys(Hr));for(g=k.next();!g.done;g=k.next()){g=g.value;var q=Ir().extractMatchingEntries({isJspb:!1,cttAuthInfo:g});0<q.length&&m.set(g,q);delete Hr[g]}Sr(m,h,d,e,f)}}else f=a,k=c,h=xr,f=void 0===f?{}:f,k=void 0===k?!1:k,void 0!==b?k?(e=new Map,k=Er.get(b)||[],e.set(b,
k),Ur(e,h,d,f),Er.delete(b)):(k=new Map,m=Dr.get(b)||[],k.set(b,m),Sr(k,h,d,e,f),Dr.delete(b)):k?(Ur(Er,h,d,f),Er.clear()):(Sr(Dr,h,d,e,f),Dr.clear());else Qr(c),d()})}
function Qr(a){a=void 0===a?!1:a;if(M("web_gel_timeout_cap")&&(!a&&!zr.h||a&&!Ar.h)){var b=Or(function(){Pr({writeThenSend:!0},void 0,a)},vr);
a?Ar.h=b:zr.h=b}Vr(a?Ar.i:zr.i);b=L("LOGGING_BATCH_TIMEOUT",$k("web_gel_debounce_ms",1E4));M("shorten_initial_gel_batch_timeout")&&Cr&&(b=ur);b=Or(function(){Pr({writeThenSend:!0},void 0,a)},b);
a?Ar.i=b:zr.i=b}
function Sr(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(Q()),h=a.size,k={};a=p(a);for(var m=a.next();!m.done;k={Ta:k.Ta,ra:k.ra,Ea:k.Ea,Va:k.Va,Ua:k.Ua},m=a.next()){var q=p(m.value);m=q.next().value;q=q.next().value;k.ra=xb({context:yo(b.config_||xo())});if(!Ra(q)&&!M("throw_err_when_logevent_malformed_killswitch")){d();break}k.ra.events=q;(q=Fr[m])&&Wr(k.ra,m,q);delete Fr[m];k.Ea="visitorOnlyApprovedKey"===m;Xr(k.ra,g,k.Ea);Yr(e);k.Va=function(r){M("update_log_event_config")&&ki.S(function(){return x(function(w){return v(w,
Zr(r),0)})});
h--;h||c()};
k.Ta=0;k.Ua=function(r){return function(){r.Ta++;if(e.bypassNetworkless&&1===r.Ta)try{No(b,"log_event",r.ra,$r({writeThenSend:!0},r.Ea,r.Va,r.Ua,f)),Cr=!1}catch(w){il(w),d()}h--;h||c()}}(k);
try{No(b,"log_event",k.ra,$r(e,k.Ea,k.Va,k.Ua,f)),Cr=!1}catch(r){il(r),d()}}}
function Ur(a,b,c,d,e){d=void 0===d?{}:d;var f=Math.round(Q()),g=a.size,h=new Map([].concat(ja(a)));h=p(h);for(var k=h.next();!k.done;k=h.next()){var m=p(k.value).next().value,q=a.get(m);k=new Lk;var r=Fo(b.config_||xo());G(k,rj,1,r);q=q?as(q):[];q=p(q);for(r=q.next();!r.done;r=q.next())de(k,3,Fk,r.value);(q=Gr[m])&&bs(k,m,q);delete Gr[m];m="visitorOnlyApprovedKey"===m;cs(k,f,m);Yr(d);k=le(k);m=$r(d,m,function(w){M("update_log_event_config")&&ki.S(function(){return x(function(t){return v(t,Zr(w),
0)})});
g--;g||c()},function(){g--;
g||c()},e);
m.headers["Content-Type"]="application/json+protobuf";m.postBodyFormat="JSPB";m.postBody=k;No(b,"log_event","",m);Cr=!1}}
function Yr(a){M("always_send_and_write")&&(a.writeThenSend=!1)}
function $r(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,hc:a,dangerousLogToVisitorSession:b,yr:!!e,headers:{},postBodyFormat:"",postBody:""};ds()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Q())));return a}
function Xr(a,b,c){ds()||(a.requestTimeMs=String(b));M("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=L("EVENT_ID"))&&(c=es(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function cs(a,b,c){ds()||E(a,2,b);if(!c&&(b=L("EVENT_ID"))){c=es();var d=new Ik;E(d,1,b);E(d,2,c);G(a,Ik,5,d)}}
function es(){var a=L("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*wr/2));a++;a>wr&&(a=1);Xk("BATCH_CLIENT_COUNTER",a);return a}
function Wr(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function bs(a,b,c){if(ee(c,1===Xd(c,Kk)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;G(a,Jk,4,c);a=Yd(a,rj,1)||new rj;c=Yd(a,pj,3)||new pj;var e=new oj;E(e,2,b);E(e,1,d);de(c,12,oj,e);G(a,pj,3,c)}
function as(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new Fk(a[c]))}catch(d){il(new P("Transport failed to deserialize "+String(a[c])))}return b}
function Kr(a,b){if(B("yt.logging.transport.enableScrapingForTest")){var c=B("yt.logging.transport.scrapedPayloadsForTesting"),d=B("yt.logging.transport.payloadToScrape","");b&&(b=B("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);a&&a.payload[d]&&c.push((null==a?void 0:a.payload)[d]);A("yt.logging.transport.scrapedPayloadsForTesting",c)}}
function ds(){return M("use_request_time_ms_header")||M("lr_use_request_time_ms_header")}
function Or(a,b){return M("transport_use_scheduler")?tm(a,b):zl(a,b)}
function Vr(a){M("transport_use_scheduler")?ki.ea(a):window.clearTimeout(a)}
function Zr(a){var b,c,d,e,f,g,h,k,m,q;return x(function(r){return 1==r.h?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=tr(d,aj),g=null==(f=d)?void 0:f.hotHashData,h=tr(d,$i),m=null==(k=d)?void 0:k.coldHashData,q=or().resolve(to),g?e?v(r,uo(q,g,e),2):v(r,uo(q,g),2):r.u(2)):m?h?v(r,vo(q,m,h),0):v(r,vo(q,m),0):r.u(0)})}
;var fs=y.ytLoggingGelSequenceIdObj_||{};A("ytLoggingGelSequenceIdObj_",fs);
function gs(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||Q());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;M("enable_unknown_lact_fix_on_html5")&&Tq();a=Wq();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};M("log_sequence_info_on_gel_web")&&d.sequenceGroup&&(a=e.context,b=d.sequenceGroup,b={index:hs(b),groupKey:b},a.sequence=b,d.endOfSequence&&delete fs[d.sequenceGroup]);(d.sendIsolatedPayload?Rr:Jr)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,
dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},c)}
function is(a){Pr(void 0,void 0,void 0===a?!1:a)}
function hs(a){fs[a]=a in fs?fs[a]+1:0;return fs[a]}
;var js=[];function Km(a,b,c){c=void 0===c?{}:c;var d=Fq;L("ytLoggingEventsDefaultDisabled",!1)&&Fq===Fq&&(d=null);M("web_all_payloads_via_jspb")?js.push({Fb:a,payload:b,options:c}):gs(a,b,d,c)}
;var ks=y.ytLoggingGelSequenceIdObj_||{};A("ytLoggingGelSequenceIdObj_",ks);
function ls(a,b,c){c=void 0===c?{}:c;var d=Math.round(c.timestamp||Q());E(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=Wq();d=new Ek;E(d,1,c.timestamp||!isFinite(e)?-1:e);if(M("log_sequence_info_on_gel_web")&&c.sequenceGroup){e=c.sequenceGroup;var f=hs(e),g=new Dk;E(g,2,f);E(g,1,e);G(d,Dk,3,g);c.endOfSequence&&delete ks[c.sequenceGroup]}G(a,Ek,33,d);(c.sendIsolatedPayload?Tr:Nr)({endpoint:"log_event",payload:a,cttAuthInfo:c.cttAuthInfo,dangerousLogToVisitorSession:c.dangerousLogToVisitorSession},b)}
;function ms(a,b){b=void 0===b?{}:b;var c=!1;L("ytLoggingEventsDefaultDisabled",!1)&&(c=!0);ls(a,c?null:Fq,b)}
;function ns(a,b,c){var d=new Fk;be(d,ak,72,Gk,a);c?ls(d,c,b):ms(d,b)}
function os(a,b,c){var d=new Fk;be(d,Zj,73,Gk,a);c?ls(d,c,b):ms(d,b)}
function ps(a,b,c){var d=new Fk;be(d,Yj,78,Gk,a);c?ls(d,c,b):ms(d,b)}
function qs(a,b,c){var d=new Fk;be(d,bk,208,Gk,a);c?ls(d,c,b):ms(d,b)}
function rs(a,b,c){var d=new Fk;be(d,Rj,156,Gk,a);c?ls(d,c,b):ms(d,b)}
function ss(a,b,c){var d=new Fk;be(d,Vj,215,Gk,a);c?ls(d,c,b):ms(d,b)}
;var ts=new Set,us=0,vs=0,ws=0,xs=[],ys=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Jm(a){zs(a)}
function As(a){zs(a,"WARNING")}
function zs(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||L("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||L("INNERTUBE_CONTEXT_CLIENT_VERSION");var g=f||{},h=void 0===b?"ERROR":b;h=void 0===h?"ERROR":h;if(a){a.hasOwnProperty("level")&&a.level&&(h=a.level);if(M("console_log_js_exceptions")){var k=[];k.push("Name: "+a.name);k.push("Message: "+a.message);a.hasOwnProperty("params")&&k.push("Error Params: "+JSON.stringify(a.params));a.hasOwnProperty("args")&&k.push("Error args: "+JSON.stringify(a.args));
k.push("File name: "+a.fileName);k.push("Stacktrace: "+a.stack);window.console.log(k.join("\n"),a)}if(!(5<=us)){var m=xs,q=ye(a),r=q.message||"Unknown Error",w=q.name||"UnknownError",t=q.stack||a.i||"Not available";if(t.startsWith(w+": "+r)){var z=t.split("\n");z.shift();t=z.join("\n")}var D=q.lineNumber||"Not available",F=q.fileName||"Not available",O=t,N=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var R=0;R<a.args.length&&!(N=Yl(a.args[R],"params."+R,g,N),500<=N);R++);else if(a.hasOwnProperty("params")&&
a.params){var ca=a.params;if("object"===typeof a.params)for(var U in ca){if(ca[U]){var qb="params."+U,Ua=$l(ca[U]);g[qb]=Ua;N+=qb.length+Ua.length;if(500<N)break}}else g.params=$l(ca)}if(m.length)for(var oa=0;oa<m.length&&!(N=Yl(m[oa],"params.context."+oa,g,N),500<=N);oa++);navigator.vendor&&!g.hasOwnProperty("vendor")&&(g["device.vendor"]=navigator.vendor);var I={message:r,name:w,lineNumber:D,fileName:F,stack:O,params:g,sampleWeight:1},na=Number(a.columnNumber);isNaN(na)||(I.lineNumber=I.lineNumber+
":"+na);if("IGNORED"===a.level)var ea=0;else a:{for(var He=Ul(),Ie=p(He.na),ud=Ie.next();!ud.done;ud=Ie.next()){var ra=ud.value;if(I.message&&I.message.match(ra.Jr)){ea=ra.weight;break a}}for(var Dp=p(He.la),ik=Dp.next();!ik.done;ik=Dp.next()){var Ep=ik.value;if(Ep.callback(I)){ea=Ep.weight;break a}}ea=1}I.sampleWeight=ea;for(var Fp=p(Pl),jk=Fp.next();!jk.done;jk=Fp.next()){var kk=jk.value;if(kk.kb[I.name])for(var Gp=p(kk.kb[I.name]),lk=Gp.next();!lk.done;lk=Gp.next()){var Hp=lk.value,Xg=I.message.match(Hp.regexp);
if(Xg){I.params["params.error.original"]=Xg[0];for(var mk=Hp.groups,Ip={},vd=0;vd<mk.length;vd++)Ip[mk[vd]]=Xg[vd+1],I.params["params.error."+mk[vd]]=Xg[vd+1];I.message=kk.Cb(Ip);break}}}I.params||(I.params={});var Jp=Ul();I.params["params.errorServiceSignature"]="msg="+Jp.na.length+"&cb="+Jp.la.length;I.params["params.serviceWorker"]="false";y.document&&y.document.querySelectorAll&&(I.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Eb("sample").constructor!==
Cb&&(I.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(I);if(0!==I.sampleWeight&&!ts.has(I.message)){if("ERROR"===h){Vl.sa("handleError",I);if(M("record_app_crashed_web")&&0===ws&&1===I.sampleWeight)if(ws++,M("errors_via_jspb")){var nk=new Kj;E(nk,1,1);if(!M("report_client_error_with_app_crash_ks")){var Kp=new Fj;E(Kp,1,I.message);var Lp=new Gj;G(Lp,Fj,3,Kp);var Mp=new Hj;G(Mp,Gj,5,Lp);var Np=new Ij;G(Np,Hj,9,Mp);G(nk,Ij,4,Np)}var Op=new Fk;be(Op,Kj,20,
Gk,nk);ms(Op)}else{var Pp={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};M("report_client_error_with_app_crash_ks")||(Pp.systemHealth={crashData:{clientError:{logMessage:{message:I.message}}}});Km("appCrashed",Pp)}vs++}else"WARNING"===h&&Vl.sa("handleWarning",I);if(M("kevlar_gel_error_routing"))a:{var Je=h;if(M("errors_via_jspb")){if(Bs())var Rp=void 0;else{var wd=new Cj;E(wd,1,I.stack);I.fileName&&E(wd,4,I.fileName);var Jb=I.lineNumber&&I.lineNumber.split?I.lineNumber.split(":"):[];0!==Jb.length&&(1!==
Jb.length||isNaN(Number(Jb[0]))?2!==Jb.length||isNaN(Number(Jb[0]))||isNaN(Number(Jb[1]))||(E(wd,2,Number(Jb[0])),E(wd,3,Number(Jb[1]))):E(wd,2,Number(Jb[0])));var Ac=new Fj;E(Ac,1,I.message);E(Ac,3,I.name);E(Ac,6,I.sampleWeight);"ERROR"===Je?E(Ac,2,2):"WARNING"===Je?E(Ac,2,1):E(Ac,2,0);var ok=new Dj;E(ok,1,!0);be(ok,Cj,3,Ej,wd);var $b=new zj;E($b,3,window.location.href);for(var Sp=L("FEXP_EXPERIMENTS",[]),pk=0;pk<Sp.length;pk++){var uw=Sp[pk];Gd($b);Vd($b,5,2,!1,!1).push(uw)}var qk=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");
if(!Yk()&&qk)for(var Tp=p(Object.keys(qk)),Bc=Tp.next();!Bc.done;Bc=Tp.next()){var Up=Bc.value,rk=new Bj;E(rk,1,Up);E(rk,2,String(qk[Up]));de($b,4,Bj,rk)}var sk=I.params;if(sk){var Vp=p(Object.keys(sk));for(Bc=Vp.next();!Bc.done;Bc=Vp.next()){var Wp=Bc.value,tk=new Bj;E(tk,1,"client."+Wp);E(tk,2,String(sk[Wp]));de($b,4,Bj,tk)}}var Xp=L("SERVER_NAME"),Yp=L("SERVER_VERSION");if(Xp&&Yp){var uk=new Bj;E(uk,1,"server.name");E(uk,2,Xp);de($b,4,Bj,uk);var vk=new Bj;E(vk,1,"server.version");E(vk,2,Yp);de($b,
4,Bj,vk)}var Yg=new Gj;G(Yg,zj,1,$b);G(Yg,Dj,2,ok);G(Yg,Fj,3,Ac);Rp=Yg}var Zp=Rp;if(!Zp)break a;var $p=new Fk;be($p,Gj,163,Gk,Zp);ms($p)}else{if(Bs())var aq=void 0;else{var Ke={stackTrace:I.stack};I.fileName&&(Ke.filename=I.fileName);var Kb=I.lineNumber&&I.lineNumber.split?I.lineNumber.split(":"):[];0!==Kb.length&&(1!==Kb.length||isNaN(Number(Kb[0]))?2!==Kb.length||isNaN(Number(Kb[0]))||isNaN(Number(Kb[1]))||(Ke.lineNumber=Number(Kb[0]),Ke.columnNumber=Number(Kb[1])):Ke.lineNumber=Number(Kb[0]));
var wk={level:"ERROR_LEVEL_UNKNOWN",message:I.message,errorClassName:I.name,sampleWeight:I.sampleWeight};"ERROR"===Je?wk.level="ERROR_LEVEL_ERROR":"WARNING"===Je&&(wk.level="ERROR_LEVEL_WARNNING");var vw={isObfuscated:!0,browserStackInfo:Ke},xd={pageUrl:window.location.href,kvPairs:[]};L("FEXP_EXPERIMENTS")&&(xd.experimentIds=L("FEXP_EXPERIMENTS"));var xk=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Yk()&&xk)for(var bq=p(Object.keys(xk)),Cc=bq.next();!Cc.done;Cc=bq.next()){var cq=Cc.value;xd.kvPairs.push({key:cq,
value:String(xk[cq])})}var yk=I.params;if(yk){var dq=p(Object.keys(yk));for(Cc=dq.next();!Cc.done;Cc=dq.next()){var eq=Cc.value;xd.kvPairs.push({key:"client."+eq,value:String(yk[eq])})}}var fq=L("SERVER_NAME"),gq=L("SERVER_VERSION");fq&&gq&&(xd.kvPairs.push({key:"server.name",value:fq}),xd.kvPairs.push({key:"server.version",value:gq}));aq={errorMetadata:xd,stackTrace:vw,logMessage:wk}}var hq=aq;if(!hq)break a;Km("clientError",hq)}if("ERROR"===Je||M("errors_flush_gel_always_killswitch"))b:{if(M("web_fp_via_jspb")&&
(is(!0),!M("web_fp_via_jspb_and_json")))break b;is()}}if(!M("suppress_error_204_logging")){var Le=I.params||{},ac={urlParams:{a:"logerror",t:"jserror",type:I.name,msg:I.message.substr(0,250),line:I.lineNumber,level:h,"client.name":Le.name},postParams:{url:L("PAGE_NAME",window.location.href),file:I.fileName},method:"POST"};Le.version&&(ac["client.version"]=Le.version);if(ac.postParams){I.stack&&(ac.postParams.stack=I.stack);for(var iq=p(Object.keys(Le)),zk=iq.next();!zk.done;zk=iq.next()){var jq=zk.value;
ac.postParams["client."+jq]=Le[jq]}var Ak=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(Ak)for(var kq=p(Object.keys(Ak)),Bk=kq.next();!Bk.done;Bk=kq.next()){var lq=Bk.value;ac.postParams[lq]=Ak[lq]}var mq=L("SERVER_NAME"),nq=L("SERVER_VERSION");mq&&nq&&(ac.postParams["server.name"]=mq,ac.postParams["server.version"]=nq)}Fl(L("ECATCHER_REPORT_HOST","")+"/error_204",ac)}try{ts.add(I.message)}catch(Xx){}us++}}}}
function Bs(){for(var a=p(ys),b=a.next();!b.done;b=a.next())if(Ol(b.value.toLowerCase()))return!0;return!1}
function Cs(a){var b=Ka.apply(1,arguments);a.args||(a.args=[]);a.args.push.apply(a.args,ja(b))}
;function Ds(){this.register=new Map}
function Es(a){a=p(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Nr("ABORTED")}
Ds.prototype.clear=function(){Es(this);this.register.clear()};
var Fs=new Ds;var Gs=Date.now().toString();
function Hs(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Gs)for(a=1,b=0;b<Gs.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Gs.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Is=y.ytLoggingDocDocumentNonce_;Is||(Is=Hs(),A("ytLoggingDocDocumentNonce_",Is));var Js=Is;var Ks={gi:0,ye:1,Ie:2,fm:3,ii:4,Jq:5,Vm:6,No:7,co:8,Bo:9,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS",9:"RICH_GRID_WATCH"};function Ls(a){this.H=a}
function Ms(a){return new Ls({trackingParams:a})}
Ls.prototype.getAsJson=function(){var a={};void 0!==this.H.trackingParams?a.trackingParams=this.H.trackingParams:(a.veType=this.H.veType,void 0!==this.H.veCounter&&(a.veCounter=this.H.veCounter),void 0!==this.H.elementIndex&&(a.elementIndex=this.H.elementIndex));void 0!==this.H.dataElement&&(a.dataElement=this.H.dataElement.getAsJson());void 0!==this.H.youtubeData&&(a.youtubeData=this.H.youtubeData);return a};
Ls.prototype.getAsJspb=function(){var a=new Mj;if(void 0!==this.H.trackingParams){var b=this.H.trackingParams;if(null!=b)if("string"===typeof b)b=b?new ld(b,id):md();else if(b.constructor!==ld)if(hd(b))b=b.length?new ld(new Uint8Array(b),id):md();else throw Error();E(a,1,b)}else void 0!==this.H.veType&&E(a,2,this.H.veType),void 0!==this.H.veCounter&&E(a,6,this.H.veCounter),void 0!==this.H.elementIndex&&E(a,3,this.H.elementIndex);void 0!==this.H.dataElement&&(b=this.H.dataElement.getAsJspb(),G(a,Mj,
7,b));void 0!==this.H.youtubeData&&G(a,bj,8,this.H.jspbYoutubeData);return a};
Ls.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
Ls.prototype.isClientVe=function(){return!this.H.trackingParams&&!!this.H.veType};function Ns(a){a=void 0===a?0:a;return 0===a?"client-screen-nonce":"client-screen-nonce."+a}
function Os(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Ps(a){return L(Os(void 0===a?0:a))}
A("yt_logging_screen.getRootVeType",Ps);function Qs(a){return(a=Ps(void 0===a?0:a))?new Ls({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function Rs(){var a=L("csn-to-ctt-auth-info");a||(a={},Xk("csn-to-ctt-auth-info",a));return a}
function Ss(a){a=L(Ns(void 0===a?0:a));if(!a&&!L("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
A("yt_logging_screen.getCurrentCsn",Ss);function Ts(a,b,c){var d=Rs();(c=Ss(c))&&delete d[c];b&&(d[a]=b)}
function Us(a){return Rs()[a]}
A("yt_logging_screen.getCttAuthInfo",Us);function Vs(a,b,c,d){c=void 0===c?0:c;if(a!==L(Ns(c))||b!==L(Os(c)))if(Ts(a,d,c),Xk(Ns(c),a),Xk(Os(c),b),b=function(){setTimeout(function(){if(a)if(M("web_time_via_jspb")){var e=new Nj;E(e,1,Js);E(e,2,a);var f=new Fk;be(f,Nj,111,Gk,e);ms(f)}else Km("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Js,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()}
A("yt_logging_screen.setCurrentScreen",Vs);var Ws=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};A("yt.msgs_",Ws);function Xs(a){Sk(Ws,arguments)}
;var Ys={xe:3611,Cd:27686,Dd:85013,Ed:23462,Gd:157557,Hd:42016,Id:62407,Jd:26926,Fd:43781,Kd:51236,Ld:79148,Md:50160,Nd:77504,Zd:153587,ae:87907,be:18630,ce:54445,de:80935,ee:152172,ge:105675,he:150723,ie:37521,je:147285,ke:47786,le:98349,me:168271,ne:168954,oe:168277,pe:168273,qe:168270,re:123695,se:6827,te:29434,ue:7282,we:124448,Ae:32276,ze:76278,Be:147868,Ce:147869,De:93911,Ee:106531,Fe:27259,Ge:27262,He:27263,Je:21759,Ke:27107,Le:62936,Me:160866,Ne:49568,Oe:160789,Pe:38408,Qe:80637,Re:68727,Se:68728,
Te:80353,Ue:80356,Ve:74610,We:45707,Xe:83962,Ye:83970,Ze:46713,af:166591,bf:89711,cf:74612,df:155792,ef:93265,ff:74611,gf:131380,jf:128979,kf:139311,lf:128978,hf:131391,mf:105350,pf:139312,qf:134800,nf:131392,sf:113533,tf:93252,uf:99357,wf:94521,xf:114252,yf:113532,zf:94522,vf:94583,Af:88E3,Bf:139580,Cf:93253,Df:93254,Ef:94387,Ff:94388,Gf:93255,Hf:97424,rf:72502,If:110111,Jf:76019,Lf:117092,Mf:117093,Kf:89431,Nf:110466,Of:77240,Pf:60508,Qf:148123,Rf:148124,Sf:137401,Tf:137402,Uf:137046,Vf:73393,Wf:113534,
Xf:92098,Yf:131381,Zf:84517,ag:83759,cg:162711,dg:162712,eg:80357,fg:86113,gg:72598,hg:168413,ig:72733,jg:107349,kg:124275,lg:118203,mg:133275,ng:160157,og:152569,pg:156651,qg:133274,rg:160159,sg:160158,tg:133272,ug:133273,vg:133276,wg:144507,xg:143247,yg:156652,zg:143248,Ag:143249,Bg:143250,Cg:143251,Dg:156653,Eg:144401,Gg:117431,Fg:133797,Hg:153964,Ig:128572,Jg:133405,Kg:117429,Lg:117430,Mg:117432,Ng:120080,Og:117259,Pg:156655,Qg:156654,Rg:121692,Sg:145656,Tg:156656,Ug:145655,Vg:145653,Wg:145654,
Xg:145657,Yg:132972,Zg:133051,ah:133658,bh:132971,dh:97615,fh:143359,eh:143356,hh:143361,gh:143358,jh:143360,ih:143357,kh:142303,lh:143353,mh:143354,nh:144479,oh:143355,ph:31402,rh:133624,sh:146477,th:133623,uh:133622,qh:133621,vh:84774,xh:160801,wh:95117,yh:150497,zh:98930,Ah:98931,Bh:98932,Ch:153320,Dh:153321,Eh:43347,Fh:129889,Gh:149123,Hh:45474,Ih:100352,Jh:84758,Kh:98443,Lh:117985,Mh:74613,Nh:155911,Oh:74614,Ph:64502,Qh:136032,Rh:74615,Sh:74616,Th:122224,Uh:74617,Vh:77820,Wh:74618,Xh:93278,Yh:93274,
Zh:93275,ai:93276,bi:22110,ci:29433,di:133798,fi:132295,hi:120541,ji:82047,ki:113550,li:75836,mi:75837,ni:42352,oi:84512,ri:76065,si:75989,yi:51879,zi:16623,Ai:32594,Bi:27240,Ci:32633,Di:74858,Ei:156999,Gi:3945,Fi:16989,Hi:45520,Ii:25488,Ji:25492,Ki:25494,Li:55760,Mi:14057,Ni:18451,Oi:57204,Pi:57203,Qi:17897,Ri:57205,Si:18198,Ti:17898,Ui:17909,Vi:43980,Wi:46220,Xi:11721,Yi:147994,Zi:49954,aj:96369,bj:3854,cj:151633,dj:56251,ej:159108,fj:25624,gj:152036,xj:16906,yj:99999,zj:68172,Aj:27068,Bj:47973,
Cj:72773,Dj:26970,Ej:26971,Fj:96805,Gj:17752,Hj:73233,Ij:109512,Jj:22256,Kj:14115,Lj:22696,Mj:89278,Nj:89277,Oj:109513,Pj:43278,Qj:43459,Rj:43464,Sj:89279,Tj:43717,Uj:55764,Vj:22255,Wj:147912,Xj:89281,Yj:40963,Zj:43277,ak:167701,bk:43442,ck:91824,dk:120137,ek:96367,fk:36850,gk:72694,hk:37414,ik:36851,kk:124863,jk:121343,lk:73491,mk:54473,nk:166861,pk:43375,qk:46674,rk:143815,sk:139095,tk:144402,uk:149968,vk:149969,wk:32473,xk:72901,yk:72906,zk:50947,Ak:50612,Bk:50613,Ck:50942,Dk:84938,Ek:84943,Fk:84939,
Gk:84941,Hk:84944,Ik:84940,Jk:84942,Kk:35585,Lk:51926,Mk:79983,Nk:63238,Ok:18921,Pk:63241,Qk:57893,Rk:41182,Sk:135732,Tk:33424,Uk:22207,Vk:42993,Wk:36229,Xk:22206,Yk:22205,Zk:18993,al:19001,bl:18990,dl:18991,fl:18997,il:18725,jl:19003,kl:36874,ll:44763,ml:33427,nl:67793,ol:22182,pl:37091,ql:34650,rl:50617,sl:47261,ul:22287,vl:25144,wl:97917,xl:62397,yl:150871,zl:150874,Al:125598,Bl:137935,Cl:36961,Dl:108035,El:27426,Fl:27857,Gl:27846,Hl:27854,Il:69692,Jl:61411,Kl:39299,Ll:38696,Ml:62520,Nl:36382,
Ol:108701,Pl:50663,Ql:36387,Rl:14908,Sl:37533,Tl:105443,Ul:61635,Vl:62274,Wl:161670,Xl:133818,Yl:65702,Zl:65703,am:65701,bm:76256,cm:166382,dm:37671,em:49953,gm:36216,hm:28237,im:39553,jm:29222,km:26107,lm:38050,mm:26108,om:120745,nm:26109,pm:26110,qm:66881,rm:28236,sm:14586,tm:160598,um:57929,vm:74723,wm:44098,xm:44099,Am:23528,Bm:61699,ym:134104,zm:134103,Cm:59149,Dm:101951,Em:97346,Fm:118051,Gm:95102,Hm:64882,Im:119505,Jm:63595,Km:63349,Lm:95101,Mm:75240,Nm:27039,Om:68823,Pm:21537,Qm:83464,Rm:75707,
Sm:83113,Tm:101952,Um:101953,Wm:79610,Xm:125755,Ym:24402,Zm:24400,an:32925,cn:57173,bn:156421,dn:122502,en:145268,fn:138480,gn:64423,hn:64424,jn:33986,kn:100828,ln:129089,mn:21409,rn:135155,sn:135156,tn:135157,un:135158,vn:158225,wn:135159,xn:135160,yn:167651,zn:135161,Bn:135162,Cn:135163,An:158226,Dn:158227,En:135164,Fn:135165,Gn:135166,nn:11070,pn:11074,qn:17880,Hn:14001,Jn:30709,Kn:30707,Ln:30711,Mn:30710,Nn:30708,In:26984,On:146143,Pn:63648,Qn:63649,Rn:111059,Sn:5754,Tn:20445,Un:151308,Vn:151152,
Yn:130975,Xn:130976,Wn:167637,Zn:110386,ao:113746,bo:66557,eo:17310,fo:28631,ho:21589,jo:164817,ko:168011,lo:154946,mo:68012,no:162617,oo:60480,po:138664,qo:141121,ro:164502,so:31571,to:141978,uo:150105,vo:150106,wo:150107,xo:150108,yo:76980,zo:41577,Ao:45469,Co:38669,Do:13768,Eo:13777,Fo:141842,Go:62985,Ho:4724,Io:59369,Jo:43927,Ko:43928,Lo:12924,Mo:100355,Po:56219,Qo:27669,Ro:10337,Oo:47896,So:122629,Uo:139723,To:139722,Vo:121258,Wo:107598,Xo:127991,Yo:96639,Zo:107536,ap:130169,bp:96661,cp:145188,
ep:96658,fp:116646,gp:159428,hp:121122,ip:96660,jp:127738,kp:127083,lp:155281,mp:162959,np:163566,qp:147842,rp:104443,sp:96659,tp:147595,up:106442,vp:162776,wp:134840,xp:63667,yp:63668,zp:63669,Ap:130686,Bp:147036,Cp:78314,Dp:147799,Ep:148649,Fp:55761,Gp:127098,Hp:134841,Ip:96368,Jp:67374,Kp:48992,Lp:146176,Mp:49956,Np:31961,Op:26388,Pp:23811,Qp:5E4,Rp:126250,Sp:96370,Tp:47355,Up:47356,Vp:37935,Wp:45521,Xp:21760,Yp:83769,Zp:49977,aq:49974,bq:93497,cq:93498,fq:34325,gq:140759,hq:115803,iq:123707,jq:100081,
kq:35309,lq:68314,mq:25602,nq:100339,oq:143516,pq:59018,qq:18248,rq:50625,sq:9729,tq:37168,uq:37169,wq:21667,xq:16749,yq:18635,zq:39305,Aq:18046,Bq:53969,Cq:8213,Dq:93926,Eq:102852,Fq:110099,Gq:22678,Hq:69076,Iq:137575,Kq:139224,Lq:100856,Mq:154430,Nq:17736,Oq:3832,Pq:147111,Qq:55759,Rq:64031,Xq:93044,Yq:93045,br:34388,Zq:167841,dr:17657,er:17655,fr:39579,gr:39578,hr:77448,ir:8196,jr:11357,kr:69877,lr:8197,mr:168501,pr:156512,qr:161613,rr:156509,sr:161612,tr:161614,ur:82039};function Zs(){var a=wb($s),b;return(new Bf(function(c,d){a.onSuccess=function(e){yl(e)?c(new at(e)):d(new bt("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new bt("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new bt("Request timed out","net.timeout",e))};
b=Fl("//googleads.g.doubleclick.net/pagead/id",a)})).qb(function(c){c instanceof If&&b.abort();
return Gf(c)})}
function bt(a,b,c){cb.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
u(bt,cb);function at(a){this.xhr=a}
;function ct(){this.h=0;this.ba=null}
ct.prototype.then=function(a,b,c){return 1===this.h&&a?(a=a.call(c,this.ba))&&"function"===typeof a.then?a:dt(a):2===this.h&&b?(a=b.call(c,this.ba))&&"function"===typeof a.then?a:et(a):this};
ct.prototype.getValue=function(){return this.ba};
ct.prototype.$goog_Thenable=!0;function et(a){var b=new ct;a=void 0===a?null:a;b.h=2;b.ba=void 0===a?null:a;return b}
function dt(a){var b=new ct;a=void 0===a?null:a;b.h=1;b.ba=void 0===a?null:a;return b}
;function ft(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:tl(a)?"same-origin":"cors",credentials:tl(a)?"same-origin":"include"};b={};for(var d=p(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function gt(){return Ag()||Nl&&Ol("applewebkit")&&!Ol("version")&&(!Ol("safari")||Ol("gsa/"))||Oc&&Ol("version/")?!0:L("EOM_VISITOR_DATA")?!1:!0}
;function ht(a){a:{var b=a.raw_embedded_player_response;if(!b&&(a=a.embedded_player_response))try{b=JSON.parse(a)}catch(d){b="EMBEDDED_PLAYER_MODE_UNKNOWN";break a}if(b)b:{for(var c in wj)if(wj[c]==b.embeddedPlayerMode){b=wj[c];break b}b="EMBEDDED_PLAYER_MODE_UNKNOWN"}else b="EMBEDDED_PLAYER_MODE_UNKNOWN"}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function jt(a){cb.call(this,a.message||a.description||a.name);this.isMissing=a instanceof kt;this.isTimeout=a instanceof bt&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof If}
u(jt,cb);jt.prototype.name="BiscottiError";function kt(){cb.call(this,"Biscotti ID is missing from server")}
u(kt,cb);kt.prototype.name="BiscottiMissingError";var $s={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},lt=null;function mt(){if(M("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!gt())return Error("User has not consented - not fetching biscotti id.");var a=L("PLAYER_VARS",{});if("1"==ub(a))return Error("Biscotti ID is not available in private embed mode");if(ht(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function dl(){var a=mt();if(void 0!==a)return Gf(a);lt||(lt=Zs().then(nt).qb(function(b){return ot(2,b)}));
return lt}
function nt(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new kt;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new kt;a=a.id;el(a);lt=dt(a);pt(18E5,2);return a}
function ot(a,b){b=new jt(b);el("");lt=et(b);0<a&&pt(12E4,a-1);throw b;}
function pt(a,b){zl(function(){Zs().then(nt,function(c){return ot(b,c)}).qb(eb)},a)}
function qt(){try{var a=B("yt.ads.biscotti.getId_");return a?a():dl()}catch(b){return Gf(b)}}
;function rt(a){if("1"!=ub(L("PLAYER_VARS",{}))){a&&cl();try{qt().then(function(){},function(){}),zl(rt,18E5)}catch(b){il(b)}}}
;function st(){var a=gm.getInstance(),b=jm(119),c=1<window.devicePixelRatio;if(document.body&&ui(document.body,"exp-invert-logo"))if(c&&!ui(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!ui(d,"inverted-hdpi")){var e=si(d);ti(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&ui(document.body,"inverted-hdpi")&&vi();if(b!=c){b="f"+(Math.floor(119/31)+1);d=km(b)||0;d=c?d|67108864:d&-67108865;0==d?delete fm[b]:(c=d.toString(16),fm[b]=
c.toString());c=!0;M("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(var f in fm)d.push(f+"="+encodeURIComponent(String(fm[f])));cm(b,d.join("&"),63072E3,a.i,c)}}
;function tt(){this.vd=!0}
function ut(a){var b={},c=Cg([]);c&&(b.Authorization=c,c=a=null==a?void 0:a.sessionIndex,void 0===c&&(c=Number(L("SESSION_INDEX",0)),c=isNaN(c)?0:c),M("voice_search_auth_header_removal")||(b["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Wk||(b["X-Origin"]=window.location.origin),void 0===a&&"DELEGATED_SESSION_ID"in Wk&&(b["X-Goog-PageId"]=L("DELEGATED_SESSION_ID")));return b}
;var vt={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};var wt=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function xt(){var a=void 0===a?window.location.href:a;if(M("kevlar_disable_theme_param"))return null;nc(oc(5,a));try{var b=rl(a).theme;return wt.get(b)||null}catch(c){}return null}
;function zt(){this.h={};if(this.i=em()){var a=yg.get("CONSISTENCY",void 0);a&&At(this,{encryptedTokenJarContents:a})}}
zt.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.ha.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=p(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];At(this,a)}};
function At(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&cm("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Bt=window.location.hostname.split(".").slice(-2).join(".");function Ct(){var a=L("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===L("INNERTUBE_CLIENT_NAME")&&(this.h=Dt(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Et;Ct.getInstance=function(){Et=B("yt.clientLocationService.instance");Et||(Et=new Ct,A("yt.clientLocationService.instance",Et));return Et};
l=Ct.prototype;l.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.i.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.i.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
l.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===L("INNERTUBE_CLIENT_NAME")?(this.h=Dt(this))&&this.h.set("yt-location-playability-token",a,15552E3):cm("YT_CL",JSON.stringify({loctok:a}),15552E3,Bt,!0))};
function Dt(a){return void 0===a.h?new Bm("yt-client-location"):a.h}
l.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.h=Dt(this))&&this.h.remove("yt-location-playability-token"):dm("YT_CL")};
l.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===L("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
l.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};function Ft(a,b){var c,d=null==(c=tr(a,vj))?void 0:c.signal;if(d&&b.Pa&&(c=b.Pa[d]))return c();var e;if((c=null==(e=tr(a,tj))?void 0:e.request)&&b.Kc&&(e=b.Kc[c]))return e();for(var f in a)if(b.Ub[f]&&(a=b.Ub[f]))return a()}
;function Gt(a){return function(){return new a}}
;var Ht={},It=(Ht.WEB_UNPLUGGED="^unplugged/",Ht.WEB_UNPLUGGED_ONBOARDING="^unplugged/",Ht.WEB_UNPLUGGED_OPS="^unplugged/",Ht.WEB_UNPLUGGED_PUBLIC="^unplugged/",Ht.WEB_CREATOR="^creator/",Ht.WEB_KIDS="^kids/",Ht.WEB_EXPERIMENTS="^experiments/",Ht.WEB_MUSIC="^music/",Ht.WEB_REMIX="^music/",Ht.WEB_MUSIC_EMBEDDED_PLAYER="^music/",Ht.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",Ht);
function Jt(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=It[b];if(c){var d=new RegExp(c),e=p(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(It).forEach(function(g){var h=p(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=p(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function Kt(){}
Kt.prototype.m=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?vt:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=L("INNERTUBE_CONTEXT");if(g){g=xb(g);M("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=L("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;gm.getInstance();var m="USER_INTERFACE_THEME_LIGHT";jm(165)?m="USER_INTERFACE_THEME_DARK":jm(174)?m="USER_INTERFACE_THEME_LIGHT":!M("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(m="USER_INTERFACE_THEME_DARK");k=k?m:xt()||m;h.userInterfaceTheme=k;if(!f){if(k=
qm())h.connectionType=k;M("web_log_effective_connection_type")&&(k=rm())&&(g.client.effectiveConnectionType=k)}var q;if(M("web_log_memory_total_kbytes")&&(null==(q=y.navigator)?0:q.deviceMemory)){var r;q=null==(r=y.navigator)?void 0:r.deviceMemory;g.client.memoryTotalKbytes=""+1E6*q}r=rl(y.location.href);!M("web_populate_internal_geo_killswitch")&&r.internalcountrycode&&(h.internalGeo=r.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:y.location.href},M("kevlar_woffle")&&
am.h&&(r=am.h,h.mainAppWebInfo.pwaInstallabilityStatus=!r.h&&r.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=bm(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!M("web_lr_app_quality_killswitch")&&(r=L("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:r})),r=L("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||
{},{certificationScope:r}));if(!M("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var w=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(qb){}w=void 0}w&&(h.timeZone=w)}(w=al())?h.experimentsToken=w:delete h.experimentsToken;w=bl();zt.h||(zt.h=new zt);h=zt.h.h;r=[];q=0;for(var t in h)r[q++]=h[t];g.request=Object.assign({},g.request,{internalExperimentFlags:w,consistencyTokenJars:r});!M("web_prequest_context_killswitch")&&(t=L("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&
(g.request.externalPrequestContext=t);w=gm.getInstance();t=jm(58);w=w.get("gsml","");g.user=Object.assign({},g.user);t&&(g.user.enableSafetyMode=t);w&&(g.user.lockedSafetyMode=!0);M("warm_op_csn_cleanup")?e&&(f=Ss())&&(g.clientScreenNonce=f):!f&&(f=Ss())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=B("yt.mdx.remote.remoteClient_"))g.remoteClient=d;Ct.getInstance().setLocationOnInnerTubeContext(g);try{var z=ul(),D=z.bid;delete z.bid;g.adSignalsInfo={params:[],bid:D};var F=
p(Object.entries(z));for(var O=F.next();!O.done;O=F.next()){var N=p(O.value),R=N.next().value,ca=N.next().value;z=R;D=ca;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:z,value:""+D})}}catch(qb){zs(qb)}F=g}else zs(Error("Error: No InnerTubeContext shell provided in ytconfig.")),F={};F={context:F};if(O=this.h(a)){this.i(F,O,b);var U;b="/youtubei/v1/"+Jt(this.j());(O=null==(U=tr(a.commandMetadata,uj))?void 0:U.apiUrl)&&(b=O);U=b;(b=L("INNERTUBE_HOST_OVERRIDE"))&&(U=String(b)+String(qc(U)));b=
{};b.key=L("INNERTUBE_API_KEY");M("json_condensed_response")&&(b.prettyPrint="false");U=sl(U,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:U,xa:ft(U),ha:F,config:a};a.config.ab?a.config.ab.identity=c:a.config.ab={identity:c};return a}zs(new P("Error: Failed to create Request from Command.",a))};
fa.Object.defineProperties(Kt.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});function Lt(){}
u(Lt,Kt);Lt.prototype.m=function(){return{input:"/getDatasyncIdsEndpoint",xa:ft("/getDatasyncIdsEndpoint","GET"),ha:{}}};
Lt.prototype.j=function(){return[]};
Lt.prototype.h=function(){};
Lt.prototype.i=function(){};var Mt={},Nt=(Mt.GET_DATASYNC_IDS=Gt(Lt),Mt);function Ot(a){var b=Ka.apply(1,arguments);if(!Pt(a)||b.some(function(d){return!Pt(d)}))throw Error("Only objects may be merged.");
b=p(b);for(var c=b.next();!c.done;c=b.next())Qt(a,c.value);return a}
function Qt(a,b){for(var c in b)if(Pt(b[c])){if(c in a&&!Pt(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Qt(a[c],b[c])}else if(Rt(b[c])){if(c in a&&!Rt(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);St(a[c],b[c])}else a[c]=b[c];return a}
function St(a,b){b=p(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Pt(c)?a.push(Qt({},c)):Rt(c)?a.push(St([],c)):a.push(c);return a}
function Pt(a){return"object"===typeof a&&!Array.isArray(a)}
function Rt(a){return"object"===typeof a&&Array.isArray(a)}
;function Tt(a,b){Xo.call(this,1,arguments);this.timer=b}
u(Tt,Xo);var Ut=new Yo("aft-recorded",Tt);var Vt=window;function Wt(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var S=Vt.performance||Vt.mozPerformance||Vt.msPerformance||Vt.webkitPerformance||new Wt;var Xt=!1,Yt={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Za(S.clearResourceTimings||S.webkitClearResourceTimings||S.mozClearResourceTimings||S.msClearResourceTimings||S.oClearResourceTimings||eb,S);function Zt(a){var b=$t("aft",a);if(b)return b;b=L((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=$t(b[d],a);if(e)return e}return NaN}
function au(){var a;if(M("csi_use_performance_navigation_timing")||M("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==S?void 0:null==(a=S.getEntriesByType)?void 0:null==(b=a.call(S,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=bu(e.requestStart),e.responseEnd=bu(e.responseEnd),e.redirectStart=bu(e.redirectStart),e.redirectEnd=bu(e.redirectEnd),e.domainLookupEnd=bu(e.domainLookupEnd),e.connectStart=bu(e.connectStart),e.connectEnd=
bu(e.connectEnd),e.responseStart=bu(e.responseStart),e.secureConnectionStart=bu(e.secureConnectionStart),e.domainLookupStart=bu(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=S.timing}else a=S.timing;return a}
function cu(){return(M("csi_use_time_origin")||M("csi_use_time_origin_tvhtml5"))&&S.timeOrigin?Math.floor(S.timeOrigin):S.timing.navigationStart}
function bu(a){return Math.round(cu()+a)}
function du(a){var b;(b=B("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},A("ytcsi."+(a||"")+"data_",b));return b}
function eu(a){a=du(a);a.info||(a.info={});return a.info}
function fu(a){a=du(a);a.metadata||(a.metadata={});return a.metadata}
function gu(a){a=du(a);a.tick||(a.tick={});return a.tick}
function $t(a,b){if(a=gu(b)[a])return"number"===typeof a?a:a[a.length-1]}
function hu(a){a=du(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function iu(a){a=hu(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function ju(a){var b=du(a).nonce;b||(b=Hs(),du(a).nonce=b);return b}
function ku(a){var b=$t("_start",a),c=Zt(a);b&&c&&!Xt&&(cp(Ut,new Tt(Math.round(c-b),a)),Xt=!0)}
function lu(a,b){for(var c=p(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!lu(a[d],b[d]))return!1;return!0}
function mu(){if(S.getEntriesByType){var a=S.getEntriesByType("paint");if(a=lb(a,function(b){return"first-paint"===b.name}))return bu(a.startTime)}a=S.timing;
return a.Zc?Math.max(0,a.Zc):0}
;function nu(){var a=B("ytcsi.debug");a||(a=[],A("ytcsi.debug",a),A("ytcsi.reference",{}));return a}
function ou(a){a=a||"";var b=B("ytcsi.reference");b||(nu(),b=B("ytcsi.reference"));if(b[a])return b[a];var c=nu(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var T={},pu=(T.auto_search="LATENCY_ACTION_AUTO_SEARCH",T.ad_to_ad="LATENCY_ACTION_AD_TO_AD",T.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",T["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",T.app_startup="LATENCY_ACTION_APP_STARTUP",T["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",T["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",T["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",T["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",T.browse="LATENCY_ACTION_BROWSE",
T.cast_splash="LATENCY_ACTION_CAST_SPLASH",T.channels="LATENCY_ACTION_CHANNELS",T.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",T["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",T["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",T["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",T["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",T["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",T["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",
T["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",T["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",T["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",T["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",T["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",T["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",T["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",T.chips="LATENCY_ACTION_CHIPS",
T["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",T["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",T["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",T.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",T.embed="LATENCY_ACTION_EMBED",T.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",T.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",T.explore="LATENCY_ACTION_EXPLORE",T.home=
"LATENCY_ACTION_HOME",T.library="LATENCY_ACTION_LIBRARY",T.live="LATENCY_ACTION_LIVE",T.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",T.onboarding="LATENCY_ACTION_ONBOARDING",T.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",T["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",T["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",T["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",T["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",T["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",
T["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",T["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",T["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",T["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",T["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",T.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",T.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",T.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",
T.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",T["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",T["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",T.prebuffer="LATENCY_ACTION_PREBUFFER",T.prefetch="LATENCY_ACTION_PREFETCH",T.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",T.profile_switcher="LATENCY_ACTION_LOGIN",T.reel_watch="LATENCY_ACTION_REEL_WATCH",T.results="LATENCY_ACTION_RESULTS",T["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",T.search_ui="LATENCY_ACTION_SEARCH_UI",
T.search_suggest="LATENCY_ACTION_SUGGEST",T.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",T.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",T.seek="LATENCY_ACTION_PLAYER_SEEK",T.settings="LATENCY_ACTION_SETTINGS",T.store="LATENCY_ACTION_STORE",T.tenx="LATENCY_ACTION_TENX",T.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",T.watch="LATENCY_ACTION_WATCH",T.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",T["watch,watch7"]="LATENCY_ACTION_WATCH",T["watch,watch7_html5"]="LATENCY_ACTION_WATCH",T["watch,watch7ad"]=
"LATENCY_ACTION_WATCH",T["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",T.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",T.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",T["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",T["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",T["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",T["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",T["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",T["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",
T["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",T["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",T["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",T.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",T.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",T.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",T),V={},qu=(V.ad_allowed="adTypesAllowed",V.yt_abt="adBreakType",V.ad_cpn="adClientPlaybackNonce",
V.ad_docid="adVideoId",V.yt_ad_an="adNetworks",V.ad_at="adType",V.aida="appInstallDataAgeMs",V.browse_id="browseId",V.p="httpProtocol",V.t="transportProtocol",V.cs="commandSource",V.cpn="clientPlaybackNonce",V.ccs="creatorInfo.creatorCanaryState",V.ctop="creatorInfo.topEntityType",V.csn="clientScreenNonce",V.docid="videoId",V.GetHome_rid="requestIds",V.GetSearch_rid="requestIds",V.GetPlayer_rid="requestIds",V.GetWatchNext_rid="requestIds",V.GetBrowse_rid="requestIds",V.GetLibrary_rid="requestIds",
V.is_continuation="isContinuation",V.is_nav="isNavigation",V.b_p="kabukiInfo.browseParams",V.is_prefetch="kabukiInfo.isPrefetch",V.is_secondary_nav="kabukiInfo.isSecondaryNav",V.nav_type="kabukiInfo.navigationType",V.prev_browse_id="kabukiInfo.prevBrowseId",V.query_source="kabukiInfo.querySource",V.voz_type="kabukiInfo.vozType",V.yt_lt="loadType",V.mver="creatorInfo.measurementVersion",V.yt_ad="isMonetized",V.nr="webInfo.navigationReason",V.nrsu="navigationRequestedSameUrl",V.pnt="performanceNavigationTiming",
V.prt="playbackRequiresTap",V.plt="playerInfo.playbackType",V.pis="playerInfo.playerInitializedState",V.paused="playerInfo.isPausedOnLoad",V.yt_pt="playerType",V.fmt="playerInfo.itag",V.yt_pl="watchInfo.isPlaylist",V.yt_pre="playerInfo.preloadType",V.yt_ad_pr="prerollAllowed",V.pa="previousAction",V.yt_red="isRedSubscriber",V.rce="mwebInfo.responseContentEncoding",V.rc="resourceInfo.resourceCache",V.scrh="screenHeight",V.scrw="screenWidth",V.st="serverTimeMs",V.ssdm="shellStartupDurationMs",V.br_trs=
"tvInfo.bedrockTriggerState",V.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",V.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",V.label="tvInfo.label",V.is_mdx="tvInfo.isMdx",V.preloaded="tvInfo.isPreloaded",V.aac_type="tvInfo.authAccessCredentialType",V.upg_player_vis="playerInfo.visibilityState",V.query="unpluggedInfo.query",V.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",V.yt_vst="videoStreamType",V.vph="viewportHeight",V.vpw="viewportWidth",V.yt_vis="isVisible",V.rcl="mwebInfo.responseContentLength",
V.GetSettings_rid="requestIds",V.GetTrending_rid="requestIds",V.GetMusicSearchSuggestions_rid="requestIds",V.REQUEST_ID="requestIds",V),ru="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),su={},tu=(su.ccs="CANARY_STATE_",
su.mver="MEASUREMENT_VERSION_",su.pis="PLAYER_INITIALIZED_STATE_",su.yt_pt="LATENCY_PLAYER_",su.pa="LATENCY_ACTION_",su.ctop="TOP_ENTITY_TYPE_",su.yt_vst="VIDEO_STREAM_TYPE_",su),uu="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function vu(a){return pu[a]||"LATENCY_ACTION_UNKNOWN"}
function wu(a,b,c){c=hu(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in qu){c=qu[a];0<=gb(ru,c)&&(b=!!b);a in tu&&"string"===typeof b&&(b=tu[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return Ot({},d)}0<=gb(uu,a)||As(new P("Unknown label logged with GEL CSI",a))}
;var W={LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING:179,LATENCY_ACTION_KIDS_PROFILE_SWITCHER:90,LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER:100,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC:46,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR:37,LATENCY_ACTION_SPINNER_DISPLAYED:14,LATENCY_ACTION_PLAYABILITY_CHECK:10,LATENCY_ACTION_PROCESS:9,LATENCY_ACTION_APP_STARTUP:5,LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC:203,LATENCY_ACTION_COMMERCE_TRANSACTION:184,LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC:173,
LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC:172,LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC:171,LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC:170,LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC:169,LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC:168,LATENCY_ACTION_GET_OFFERS_RPC:167,LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC:166,LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC:165,LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC:164,LATENCY_ACTION_GET_OFFER_DETAILS_RPC:163,LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC:162,
LATENCY_ACTION_GET_TIP_MODULE_RPC:161,LATENCY_ACTION_HANDLE_TRANSACTION_RPC:160,LATENCY_ACTION_COMPLETE_TRANSACTION_RPC:159,LATENCY_ACTION_GET_CART_RPC:158,LATENCY_ACTION_THUMBNAIL_FETCH:156,LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK:154,LATENCY_ACTION_SHARE_VIDEO:153,LATENCY_ACTION_AD_TO_VIDEO_INT:152,LATENCY_ACTION_ABANDONED_BROWSE:151,LATENCY_ACTION_PLAYER_ROTATION:150,LATENCY_ACTION_GENERIC_WEB_VIEW:183,LATENCY_ACTION_SHOPPING_IN_APP:124,LATENCY_ACTION_PLAYER_ATTESTATION:121,LATENCY_ACTION_PLAYER_SEEK:119,
LATENCY_ACTION_SUPER_STICKER_BUY_FLOW:114,LATENCY_ACTION_DOWNLOADS_DATA_ACCESS:180,LATENCY_ACTION_BLOCKS_PERFORMANCE:148,LATENCY_ACTION_ASSISTANT_QUERY:138,LATENCY_ACTION_ASSISTANT_SETTINGS:137,LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF:129,LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF:128,LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE:127,LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION:123,LATENCY_ACTION_NETWORKLESS_PERFORMANCE:122,LATENCY_ACTION_DOWNLOADS_EXPANSION:133,LATENCY_ACTION_ENTITY_TRANSFORM:131,
LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER:96,LATENCY_ACTION_EMBEDS_SET_VIDEO:95,LATENCY_ACTION_SETTINGS:93,LATENCY_ACTION_ABANDONED_STARTUP:81,LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY:80,LATENCY_ACTION_MEDIA_BROWSER_SEARCH:79,LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE:78,LATENCY_ACTION_WHO_IS_WATCHING:77,LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH:76,LATENCY_ACTION_LITE_SWITCH_ACCOUNT:73,LATENCY_ACTION_ELEMENTS_PERFORMANCE:70,LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION:69,LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION:65,
LATENCY_ACTION_OFFLINE_STORE_START:61,LATENCY_ACTION_REEL_EDITOR:58,LATENCY_ACTION_CHANNEL_SUBSCRIBE:56,LATENCY_ACTION_CHANNEL_PREVIEW:55,LATENCY_ACTION_PREFETCH:52,LATENCY_ACTION_ABANDONED_WATCH:45,LATENCY_ACTION_LOAD_COMMENT_REPLIES:26,LATENCY_ACTION_LOAD_COMMENTS:25,LATENCY_ACTION_EDIT_COMMENT:24,LATENCY_ACTION_NEW_COMMENT:23,LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING:19,LATENCY_ACTION_EMBED:18,LATENCY_ACTION_MDX_LAUNCH:15,LATENCY_ACTION_RESOLVE_URL:13,LATENCY_ACTION_CAST_SPLASH:149,LATENCY_ACTION_MDX_CONNECT_TO_SESSION:190,
LATENCY_ACTION_MDX_STREAM_TRANSFER:178,LATENCY_ACTION_MDX_CAST:120,LATENCY_ACTION_MDX_COMMAND:12,LATENCY_ACTION_REEL_SELECT_SEGMENT:136,LATENCY_ACTION_ACCELERATED_EFFECTS:145,LATENCY_ACTION_EDIT_AUDIO_GEN:182,LATENCY_ACTION_UPLOAD_AUDIO_MIXER:147,LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING:157,LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING:146,LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK:130,LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD:125,LATENCY_ACTION_SHORTS_VIDEO_INGESTION:155,LATENCY_ACTION_SHORTS_GALLERY:107,
LATENCY_ACTION_SHORTS_TRIM:105,LATENCY_ACTION_SHORTS_EDIT:104,LATENCY_ACTION_SHORTS_CAMERA:103,LATENCY_ACTION_PRODUCER_EXPORT_PROJECT:193,LATENCY_ACTION_PRODUCER_EDITOR:192,LATENCY_ACTION_PARENT_TOOLS_DASHBOARD:102,LATENCY_ACTION_PARENT_TOOLS_COLLECTION:101,LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS:116,LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS:115,LATENCY_ACTION_MUSIC_ALBUM_DETAIL:72,LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL:71,LATENCY_ACTION_STORE:175,LATENCY_ACTION_CHIPS:68,LATENCY_ACTION_SEARCH_ZERO_STATE:67,
LATENCY_ACTION_LIVE_PAGINATION:117,LATENCY_ACTION_LIVE:20,LATENCY_ACTION_PREBUFFER:40,LATENCY_ACTION_TENX:39,LATENCY_ACTION_KIDS_PROFILE_SETTINGS:94,LATENCY_ACTION_KIDS_WATCH_IT_AGAIN:92,LATENCY_ACTION_KIDS_SECRET_CODE:91,LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS:89,LATENCY_ACTION_KIDS_ONBOARDING:88,LATENCY_ACTION_KIDS_VOICE_SEARCH:82,LATENCY_ACTION_KIDS_CURATED_COLLECTION:62,LATENCY_ACTION_KIDS_LIBRARY:53,LATENCY_ACTION_CREATOR_PROMOTION_LIST:186,LATENCY_ACTION_CREATOR_PROMOTION_EDIT:185,LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS:38,
LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION:74,LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING:141,LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS:142,LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC:51,LATENCY_ACTION_CREATOR_VIDEO_EDITOR:50,LATENCY_ACTION_CREATOR_VIDEO_EDIT:36,LATENCY_ACTION_CREATOR_VIDEO_COMMENTS:34,LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS:33,LATENCY_ACTION_CREATOR_SONG_ANALYTICS:176,LATENCY_ACTION_CREATOR_POST_LIST:112,LATENCY_ACTION_CREATOR_POST_EDIT:110,LATENCY_ACTION_CREATOR_POST_COMMENTS:111,
LATENCY_ACTION_CREATOR_LIVE_STREAMING:108,LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT:174,LATENCY_ACTION_CREATOR_DIALOG_UPLOADS:86,LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES:87,LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS:32,LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS:48,LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS:139,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT:177,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC:99,LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION:43,LATENCY_ACTION_CREATOR_CHANNEL_EDITING:113,LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD:49,
LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT:44,LATENCY_ACTION_CREATOR_CMS_VIDEOS:202,LATENCY_ACTION_CREATOR_CMS_REPORTS:201,LATENCY_ACTION_CREATOR_CMS_ISSUES:191,LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING:200,LATENCY_ACTION_CREATOR_CMS_DASHBOARD:199,LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY:198,LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS:197,LATENCY_ACTION_CREATOR_CMS_CHANNELS:196,LATENCY_ACTION_CREATOR_CMS_ASSETS:195,LATENCY_ACTION_CREATOR_CMS_ANALYTICS:194,LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS:66,
LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS:31,LATENCY_ACTION_CREATOR_ARTIST_PROFILE:85,LATENCY_ACTION_CREATOR_ARTIST_CONCERTS:84,LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS:83,LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE:140,LATENCY_ACTION_EXPERIMENTAL_WATCH_UI:181,LATENCY_ACTION_STORYBOARD_THUMBNAILS:118,LATENCY_ACTION_SEARCH_THUMBNAILS:59,LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD:54,LATENCY_ACTION_VOICE_ASSISTANT:47,LATENCY_ACTION_SEARCH_UI:35,LATENCY_ACTION_SUGGEST:30,LATENCY_ACTION_AUTO_SEARCH:126,LATENCY_ACTION_DOWNLOADS:98,
LATENCY_ACTION_EXPLORE:75,LATENCY_ACTION_VIDEO_LIST:63,LATENCY_ACTION_HOME_RESUME:60,LATENCY_ACTION_SUBSCRIPTIONS_LIST:57,LATENCY_ACTION_THUMBNAIL_LOAD:42,LATENCY_ACTION_FIRST_THUMBNAIL_LOAD:29,LATENCY_ACTION_SUBSCRIPTIONS_FEED:109,LATENCY_ACTION_SUBSCRIPTIONS:28,LATENCY_ACTION_TRENDING:27,LATENCY_ACTION_LIBRARY:21,LATENCY_ACTION_VIDEO_THUMBNAIL:8,LATENCY_ACTION_SHOW_MORE:7,LATENCY_ACTION_VIDEO_PREVIEW:6,LATENCY_ACTION_AD_TO_AD:22,LATENCY_ACTION_VIDEO_TO_AD:17,LATENCY_ACTION_AD_TO_VIDEO:16,LATENCY_ACTION_DIRECT_PLAYBACK:132,
LATENCY_ACTION_PREBUFFER_VIDEO:144,LATENCY_ACTION_PREFETCH_VIDEO:143,LATENCY_ACTION_STARTUP:106,LATENCY_ACTION_ONBOARDING:135,LATENCY_ACTION_LOGIN:97,LATENCY_ACTION_REEL_WATCH:41,LATENCY_ACTION_WATCH:3,LATENCY_ACTION_RESULTS:2,LATENCY_ACTION_CHANNELS:4,LATENCY_ACTION_HOME:1,LATENCY_ACTION_BROWSE:11,LATENCY_ACTION_USER_ACTION:189,LATENCY_ACTION_INFRASTRUCTURE:188,LATENCY_ACTION_PAGE_NAVIGATION:187,LATENCY_ACTION_UNKNOWN:0};W[W.LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING";
W[W.LATENCY_ACTION_KIDS_PROFILE_SWITCHER]="LATENCY_ACTION_KIDS_PROFILE_SWITCHER";W[W.LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER]="LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER";W[W.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC";W[W.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR";W[W.LATENCY_ACTION_SPINNER_DISPLAYED]="LATENCY_ACTION_SPINNER_DISPLAYED";W[W.LATENCY_ACTION_PLAYABILITY_CHECK]="LATENCY_ACTION_PLAYABILITY_CHECK";
W[W.LATENCY_ACTION_PROCESS]="LATENCY_ACTION_PROCESS";W[W.LATENCY_ACTION_APP_STARTUP]="LATENCY_ACTION_APP_STARTUP";W[W.LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC]="LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC";W[W.LATENCY_ACTION_COMMERCE_TRANSACTION]="LATENCY_ACTION_COMMERCE_TRANSACTION";W[W.LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC]="LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC";W[W.LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC]="LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC";
W[W.LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC]="LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC";W[W.LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC]="LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC";W[W.LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC]="LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC";W[W.LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC]="LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC";W[W.LATENCY_ACTION_GET_OFFERS_RPC]="LATENCY_ACTION_GET_OFFERS_RPC";W[W.LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC";
W[W.LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC";W[W.LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC]="LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC";W[W.LATENCY_ACTION_GET_OFFER_DETAILS_RPC]="LATENCY_ACTION_GET_OFFER_DETAILS_RPC";W[W.LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC]="LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC";W[W.LATENCY_ACTION_GET_TIP_MODULE_RPC]="LATENCY_ACTION_GET_TIP_MODULE_RPC";
W[W.LATENCY_ACTION_HANDLE_TRANSACTION_RPC]="LATENCY_ACTION_HANDLE_TRANSACTION_RPC";W[W.LATENCY_ACTION_COMPLETE_TRANSACTION_RPC]="LATENCY_ACTION_COMPLETE_TRANSACTION_RPC";W[W.LATENCY_ACTION_GET_CART_RPC]="LATENCY_ACTION_GET_CART_RPC";W[W.LATENCY_ACTION_THUMBNAIL_FETCH]="LATENCY_ACTION_THUMBNAIL_FETCH";W[W.LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK]="LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK";W[W.LATENCY_ACTION_SHARE_VIDEO]="LATENCY_ACTION_SHARE_VIDEO";W[W.LATENCY_ACTION_AD_TO_VIDEO_INT]="LATENCY_ACTION_AD_TO_VIDEO_INT";
W[W.LATENCY_ACTION_ABANDONED_BROWSE]="LATENCY_ACTION_ABANDONED_BROWSE";W[W.LATENCY_ACTION_PLAYER_ROTATION]="LATENCY_ACTION_PLAYER_ROTATION";W[W.LATENCY_ACTION_GENERIC_WEB_VIEW]="LATENCY_ACTION_GENERIC_WEB_VIEW";W[W.LATENCY_ACTION_SHOPPING_IN_APP]="LATENCY_ACTION_SHOPPING_IN_APP";W[W.LATENCY_ACTION_PLAYER_ATTESTATION]="LATENCY_ACTION_PLAYER_ATTESTATION";W[W.LATENCY_ACTION_PLAYER_SEEK]="LATENCY_ACTION_PLAYER_SEEK";W[W.LATENCY_ACTION_SUPER_STICKER_BUY_FLOW]="LATENCY_ACTION_SUPER_STICKER_BUY_FLOW";
W[W.LATENCY_ACTION_DOWNLOADS_DATA_ACCESS]="LATENCY_ACTION_DOWNLOADS_DATA_ACCESS";W[W.LATENCY_ACTION_BLOCKS_PERFORMANCE]="LATENCY_ACTION_BLOCKS_PERFORMANCE";W[W.LATENCY_ACTION_ASSISTANT_QUERY]="LATENCY_ACTION_ASSISTANT_QUERY";W[W.LATENCY_ACTION_ASSISTANT_SETTINGS]="LATENCY_ACTION_ASSISTANT_SETTINGS";W[W.LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF";W[W.LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF";
W[W.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE]="LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE";W[W.LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION]="LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION";W[W.LATENCY_ACTION_NETWORKLESS_PERFORMANCE]="LATENCY_ACTION_NETWORKLESS_PERFORMANCE";W[W.LATENCY_ACTION_DOWNLOADS_EXPANSION]="LATENCY_ACTION_DOWNLOADS_EXPANSION";W[W.LATENCY_ACTION_ENTITY_TRANSFORM]="LATENCY_ACTION_ENTITY_TRANSFORM";W[W.LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER]="LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER";
W[W.LATENCY_ACTION_EMBEDS_SET_VIDEO]="LATENCY_ACTION_EMBEDS_SET_VIDEO";W[W.LATENCY_ACTION_SETTINGS]="LATENCY_ACTION_SETTINGS";W[W.LATENCY_ACTION_ABANDONED_STARTUP]="LATENCY_ACTION_ABANDONED_STARTUP";W[W.LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY]="LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY";W[W.LATENCY_ACTION_MEDIA_BROWSER_SEARCH]="LATENCY_ACTION_MEDIA_BROWSER_SEARCH";W[W.LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE]="LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE";W[W.LATENCY_ACTION_WHO_IS_WATCHING]="LATENCY_ACTION_WHO_IS_WATCHING";
W[W.LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH]="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH";W[W.LATENCY_ACTION_LITE_SWITCH_ACCOUNT]="LATENCY_ACTION_LITE_SWITCH_ACCOUNT";W[W.LATENCY_ACTION_ELEMENTS_PERFORMANCE]="LATENCY_ACTION_ELEMENTS_PERFORMANCE";W[W.LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION]="LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION";W[W.LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION]="LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION";W[W.LATENCY_ACTION_OFFLINE_STORE_START]="LATENCY_ACTION_OFFLINE_STORE_START";
W[W.LATENCY_ACTION_REEL_EDITOR]="LATENCY_ACTION_REEL_EDITOR";W[W.LATENCY_ACTION_CHANNEL_SUBSCRIBE]="LATENCY_ACTION_CHANNEL_SUBSCRIBE";W[W.LATENCY_ACTION_CHANNEL_PREVIEW]="LATENCY_ACTION_CHANNEL_PREVIEW";W[W.LATENCY_ACTION_PREFETCH]="LATENCY_ACTION_PREFETCH";W[W.LATENCY_ACTION_ABANDONED_WATCH]="LATENCY_ACTION_ABANDONED_WATCH";W[W.LATENCY_ACTION_LOAD_COMMENT_REPLIES]="LATENCY_ACTION_LOAD_COMMENT_REPLIES";W[W.LATENCY_ACTION_LOAD_COMMENTS]="LATENCY_ACTION_LOAD_COMMENTS";
W[W.LATENCY_ACTION_EDIT_COMMENT]="LATENCY_ACTION_EDIT_COMMENT";W[W.LATENCY_ACTION_NEW_COMMENT]="LATENCY_ACTION_NEW_COMMENT";W[W.LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING]="LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING";W[W.LATENCY_ACTION_EMBED]="LATENCY_ACTION_EMBED";W[W.LATENCY_ACTION_MDX_LAUNCH]="LATENCY_ACTION_MDX_LAUNCH";W[W.LATENCY_ACTION_RESOLVE_URL]="LATENCY_ACTION_RESOLVE_URL";W[W.LATENCY_ACTION_CAST_SPLASH]="LATENCY_ACTION_CAST_SPLASH";W[W.LATENCY_ACTION_MDX_CONNECT_TO_SESSION]="LATENCY_ACTION_MDX_CONNECT_TO_SESSION";
W[W.LATENCY_ACTION_MDX_STREAM_TRANSFER]="LATENCY_ACTION_MDX_STREAM_TRANSFER";W[W.LATENCY_ACTION_MDX_CAST]="LATENCY_ACTION_MDX_CAST";W[W.LATENCY_ACTION_MDX_COMMAND]="LATENCY_ACTION_MDX_COMMAND";W[W.LATENCY_ACTION_REEL_SELECT_SEGMENT]="LATENCY_ACTION_REEL_SELECT_SEGMENT";W[W.LATENCY_ACTION_ACCELERATED_EFFECTS]="LATENCY_ACTION_ACCELERATED_EFFECTS";W[W.LATENCY_ACTION_EDIT_AUDIO_GEN]="LATENCY_ACTION_EDIT_AUDIO_GEN";W[W.LATENCY_ACTION_UPLOAD_AUDIO_MIXER]="LATENCY_ACTION_UPLOAD_AUDIO_MIXER";
W[W.LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING]="LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING";W[W.LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING]="LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING";W[W.LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK]="LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK";W[W.LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD]="LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD";W[W.LATENCY_ACTION_SHORTS_VIDEO_INGESTION]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION";W[W.LATENCY_ACTION_SHORTS_GALLERY]="LATENCY_ACTION_SHORTS_GALLERY";
W[W.LATENCY_ACTION_SHORTS_TRIM]="LATENCY_ACTION_SHORTS_TRIM";W[W.LATENCY_ACTION_SHORTS_EDIT]="LATENCY_ACTION_SHORTS_EDIT";W[W.LATENCY_ACTION_SHORTS_CAMERA]="LATENCY_ACTION_SHORTS_CAMERA";W[W.LATENCY_ACTION_PRODUCER_EXPORT_PROJECT]="LATENCY_ACTION_PRODUCER_EXPORT_PROJECT";W[W.LATENCY_ACTION_PRODUCER_EDITOR]="LATENCY_ACTION_PRODUCER_EDITOR";W[W.LATENCY_ACTION_PARENT_TOOLS_DASHBOARD]="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD";W[W.LATENCY_ACTION_PARENT_TOOLS_COLLECTION]="LATENCY_ACTION_PARENT_TOOLS_COLLECTION";
W[W.LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS";W[W.LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS";W[W.LATENCY_ACTION_MUSIC_ALBUM_DETAIL]="LATENCY_ACTION_MUSIC_ALBUM_DETAIL";W[W.LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL]="LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL";W[W.LATENCY_ACTION_STORE]="LATENCY_ACTION_STORE";W[W.LATENCY_ACTION_CHIPS]="LATENCY_ACTION_CHIPS";W[W.LATENCY_ACTION_SEARCH_ZERO_STATE]="LATENCY_ACTION_SEARCH_ZERO_STATE";
W[W.LATENCY_ACTION_LIVE_PAGINATION]="LATENCY_ACTION_LIVE_PAGINATION";W[W.LATENCY_ACTION_LIVE]="LATENCY_ACTION_LIVE";W[W.LATENCY_ACTION_PREBUFFER]="LATENCY_ACTION_PREBUFFER";W[W.LATENCY_ACTION_TENX]="LATENCY_ACTION_TENX";W[W.LATENCY_ACTION_KIDS_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PROFILE_SETTINGS";W[W.LATENCY_ACTION_KIDS_WATCH_IT_AGAIN]="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN";W[W.LATENCY_ACTION_KIDS_SECRET_CODE]="LATENCY_ACTION_KIDS_SECRET_CODE";W[W.LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS";
W[W.LATENCY_ACTION_KIDS_ONBOARDING]="LATENCY_ACTION_KIDS_ONBOARDING";W[W.LATENCY_ACTION_KIDS_VOICE_SEARCH]="LATENCY_ACTION_KIDS_VOICE_SEARCH";W[W.LATENCY_ACTION_KIDS_CURATED_COLLECTION]="LATENCY_ACTION_KIDS_CURATED_COLLECTION";W[W.LATENCY_ACTION_KIDS_LIBRARY]="LATENCY_ACTION_KIDS_LIBRARY";W[W.LATENCY_ACTION_CREATOR_PROMOTION_LIST]="LATENCY_ACTION_CREATOR_PROMOTION_LIST";W[W.LATENCY_ACTION_CREATOR_PROMOTION_EDIT]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT";
W[W.LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS";W[W.LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION";W[W.LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING";W[W.LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC";
W[W.LATENCY_ACTION_CREATOR_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDIT]="LATENCY_ACTION_CREATOR_VIDEO_EDIT";W[W.LATENCY_ACTION_CREATOR_VIDEO_COMMENTS]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS";W[W.LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_SONG_ANALYTICS]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_POST_LIST]="LATENCY_ACTION_CREATOR_POST_LIST";
W[W.LATENCY_ACTION_CREATOR_POST_EDIT]="LATENCY_ACTION_CREATOR_POST_EDIT";W[W.LATENCY_ACTION_CREATOR_POST_COMMENTS]="LATENCY_ACTION_CREATOR_POST_COMMENTS";W[W.LATENCY_ACTION_CREATOR_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_LIVE_STREAMING";W[W.LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT";W[W.LATENCY_ACTION_CREATOR_DIALOG_UPLOADS]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS";W[W.LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES";
W[W.LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION";
W[W.LATENCY_ACTION_CREATOR_CHANNEL_EDITING]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING";W[W.LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD]="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD";W[W.LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT";W[W.LATENCY_ACTION_CREATOR_CMS_VIDEOS]="LATENCY_ACTION_CREATOR_CMS_VIDEOS";W[W.LATENCY_ACTION_CREATOR_CMS_REPORTS]="LATENCY_ACTION_CREATOR_CMS_REPORTS";W[W.LATENCY_ACTION_CREATOR_CMS_ISSUES]="LATENCY_ACTION_CREATOR_CMS_ISSUES";
W[W.LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING";W[W.LATENCY_ACTION_CREATOR_CMS_DASHBOARD]="LATENCY_ACTION_CREATOR_CMS_DASHBOARD";W[W.LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY";W[W.LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS";W[W.LATENCY_ACTION_CREATOR_CMS_CHANNELS]="LATENCY_ACTION_CREATOR_CMS_CHANNELS";W[W.LATENCY_ACTION_CREATOR_CMS_ASSETS]="LATENCY_ACTION_CREATOR_CMS_ASSETS";
W[W.LATENCY_ACTION_CREATOR_CMS_ANALYTICS]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_ARTIST_PROFILE]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE";W[W.LATENCY_ACTION_CREATOR_ARTIST_CONCERTS]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS";W[W.LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS";
W[W.LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE";W[W.LATENCY_ACTION_EXPERIMENTAL_WATCH_UI]="LATENCY_ACTION_EXPERIMENTAL_WATCH_UI";W[W.LATENCY_ACTION_STORYBOARD_THUMBNAILS]="LATENCY_ACTION_STORYBOARD_THUMBNAILS";W[W.LATENCY_ACTION_SEARCH_THUMBNAILS]="LATENCY_ACTION_SEARCH_THUMBNAILS";W[W.LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD]="LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD";W[W.LATENCY_ACTION_VOICE_ASSISTANT]="LATENCY_ACTION_VOICE_ASSISTANT";
W[W.LATENCY_ACTION_SEARCH_UI]="LATENCY_ACTION_SEARCH_UI";W[W.LATENCY_ACTION_SUGGEST]="LATENCY_ACTION_SUGGEST";W[W.LATENCY_ACTION_AUTO_SEARCH]="LATENCY_ACTION_AUTO_SEARCH";W[W.LATENCY_ACTION_DOWNLOADS]="LATENCY_ACTION_DOWNLOADS";W[W.LATENCY_ACTION_EXPLORE]="LATENCY_ACTION_EXPLORE";W[W.LATENCY_ACTION_VIDEO_LIST]="LATENCY_ACTION_VIDEO_LIST";W[W.LATENCY_ACTION_HOME_RESUME]="LATENCY_ACTION_HOME_RESUME";W[W.LATENCY_ACTION_SUBSCRIPTIONS_LIST]="LATENCY_ACTION_SUBSCRIPTIONS_LIST";
W[W.LATENCY_ACTION_THUMBNAIL_LOAD]="LATENCY_ACTION_THUMBNAIL_LOAD";W[W.LATENCY_ACTION_FIRST_THUMBNAIL_LOAD]="LATENCY_ACTION_FIRST_THUMBNAIL_LOAD";W[W.LATENCY_ACTION_SUBSCRIPTIONS_FEED]="LATENCY_ACTION_SUBSCRIPTIONS_FEED";W[W.LATENCY_ACTION_SUBSCRIPTIONS]="LATENCY_ACTION_SUBSCRIPTIONS";W[W.LATENCY_ACTION_TRENDING]="LATENCY_ACTION_TRENDING";W[W.LATENCY_ACTION_LIBRARY]="LATENCY_ACTION_LIBRARY";W[W.LATENCY_ACTION_VIDEO_THUMBNAIL]="LATENCY_ACTION_VIDEO_THUMBNAIL";W[W.LATENCY_ACTION_SHOW_MORE]="LATENCY_ACTION_SHOW_MORE";
W[W.LATENCY_ACTION_VIDEO_PREVIEW]="LATENCY_ACTION_VIDEO_PREVIEW";W[W.LATENCY_ACTION_AD_TO_AD]="LATENCY_ACTION_AD_TO_AD";W[W.LATENCY_ACTION_VIDEO_TO_AD]="LATENCY_ACTION_VIDEO_TO_AD";W[W.LATENCY_ACTION_AD_TO_VIDEO]="LATENCY_ACTION_AD_TO_VIDEO";W[W.LATENCY_ACTION_DIRECT_PLAYBACK]="LATENCY_ACTION_DIRECT_PLAYBACK";W[W.LATENCY_ACTION_PREBUFFER_VIDEO]="LATENCY_ACTION_PREBUFFER_VIDEO";W[W.LATENCY_ACTION_PREFETCH_VIDEO]="LATENCY_ACTION_PREFETCH_VIDEO";W[W.LATENCY_ACTION_STARTUP]="LATENCY_ACTION_STARTUP";
W[W.LATENCY_ACTION_ONBOARDING]="LATENCY_ACTION_ONBOARDING";W[W.LATENCY_ACTION_LOGIN]="LATENCY_ACTION_LOGIN";W[W.LATENCY_ACTION_REEL_WATCH]="LATENCY_ACTION_REEL_WATCH";W[W.LATENCY_ACTION_WATCH]="LATENCY_ACTION_WATCH";W[W.LATENCY_ACTION_RESULTS]="LATENCY_ACTION_RESULTS";W[W.LATENCY_ACTION_CHANNELS]="LATENCY_ACTION_CHANNELS";W[W.LATENCY_ACTION_HOME]="LATENCY_ACTION_HOME";W[W.LATENCY_ACTION_BROWSE]="LATENCY_ACTION_BROWSE";W[W.LATENCY_ACTION_USER_ACTION]="LATENCY_ACTION_USER_ACTION";
W[W.LATENCY_ACTION_INFRASTRUCTURE]="LATENCY_ACTION_INFRASTRUCTURE";W[W.LATENCY_ACTION_PAGE_NAVIGATION]="LATENCY_ACTION_PAGE_NAVIGATION";W[W.LATENCY_ACTION_UNKNOWN]="LATENCY_ACTION_UNKNOWN";var xu={LATENCY_NETWORK_MOBILE:2,LATENCY_NETWORK_WIFI:1,LATENCY_NETWORK_UNKNOWN:0};xu[xu.LATENCY_NETWORK_MOBILE]="LATENCY_NETWORK_MOBILE";xu[xu.LATENCY_NETWORK_WIFI]="LATENCY_NETWORK_WIFI";xu[xu.LATENCY_NETWORK_UNKNOWN]="LATENCY_NETWORK_UNKNOWN";
var X={CONN_INVALID:31,CONN_CELLULAR_5G_NSA:12,CONN_CELLULAR_5G_SA:11,CONN_WIFI_METERED:10,CONN_CELLULAR_5G:9,CONN_DISCO:8,CONN_CELLULAR_UNKNOWN:7,CONN_CELLULAR_4G:6,CONN_CELLULAR_3G:5,CONN_CELLULAR_2G:4,CONN_WIFI:3,CONN_NONE:2,CONN_UNKNOWN:1,CONN_DEFAULT:0};X[X.CONN_INVALID]="CONN_INVALID";X[X.CONN_CELLULAR_5G_NSA]="CONN_CELLULAR_5G_NSA";X[X.CONN_CELLULAR_5G_SA]="CONN_CELLULAR_5G_SA";X[X.CONN_WIFI_METERED]="CONN_WIFI_METERED";X[X.CONN_CELLULAR_5G]="CONN_CELLULAR_5G";X[X.CONN_DISCO]="CONN_DISCO";
X[X.CONN_CELLULAR_UNKNOWN]="CONN_CELLULAR_UNKNOWN";X[X.CONN_CELLULAR_4G]="CONN_CELLULAR_4G";X[X.CONN_CELLULAR_3G]="CONN_CELLULAR_3G";X[X.CONN_CELLULAR_2G]="CONN_CELLULAR_2G";X[X.CONN_WIFI]="CONN_WIFI";X[X.CONN_NONE]="CONN_NONE";X[X.CONN_UNKNOWN]="CONN_UNKNOWN";X[X.CONN_DEFAULT]="CONN_DEFAULT";
var Y={DETAILED_NETWORK_TYPE_NR_NSA:126,DETAILED_NETWORK_TYPE_NR_SA:125,DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED:124,DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT:123,DETAILED_NETWORK_TYPE_DISCONNECTED:122,DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN:121,DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN:120,DETAILED_NETWORK_TYPE_WIMAX:119,DETAILED_NETWORK_TYPE_ETHERNET:118,DETAILED_NETWORK_TYPE_BLUETOOTH:117,DETAILED_NETWORK_TYPE_WIFI:116,DETAILED_NETWORK_TYPE_LTE:115,DETAILED_NETWORK_TYPE_HSPAP:114,DETAILED_NETWORK_TYPE_EHRPD:113,
DETAILED_NETWORK_TYPE_EVDO_B:112,DETAILED_NETWORK_TYPE_UMTS:111,DETAILED_NETWORK_TYPE_IDEN:110,DETAILED_NETWORK_TYPE_HSUPA:109,DETAILED_NETWORK_TYPE_HSPA:108,DETAILED_NETWORK_TYPE_HSDPA:107,DETAILED_NETWORK_TYPE_EVDO_A:106,DETAILED_NETWORK_TYPE_EVDO_0:105,DETAILED_NETWORK_TYPE_CDMA:104,DETAILED_NETWORK_TYPE_1_X_RTT:103,DETAILED_NETWORK_TYPE_GPRS:102,DETAILED_NETWORK_TYPE_EDGE:101,DETAILED_NETWORK_TYPE_UNKNOWN:0};Y[Y.DETAILED_NETWORK_TYPE_NR_NSA]="DETAILED_NETWORK_TYPE_NR_NSA";
Y[Y.DETAILED_NETWORK_TYPE_NR_SA]="DETAILED_NETWORK_TYPE_NR_SA";Y[Y.DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED]="DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED";Y[Y.DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT]="DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT";Y[Y.DETAILED_NETWORK_TYPE_DISCONNECTED]="DETAILED_NETWORK_TYPE_DISCONNECTED";Y[Y.DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN";Y[Y.DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN";
Y[Y.DETAILED_NETWORK_TYPE_WIMAX]="DETAILED_NETWORK_TYPE_WIMAX";Y[Y.DETAILED_NETWORK_TYPE_ETHERNET]="DETAILED_NETWORK_TYPE_ETHERNET";Y[Y.DETAILED_NETWORK_TYPE_BLUETOOTH]="DETAILED_NETWORK_TYPE_BLUETOOTH";Y[Y.DETAILED_NETWORK_TYPE_WIFI]="DETAILED_NETWORK_TYPE_WIFI";Y[Y.DETAILED_NETWORK_TYPE_LTE]="DETAILED_NETWORK_TYPE_LTE";Y[Y.DETAILED_NETWORK_TYPE_HSPAP]="DETAILED_NETWORK_TYPE_HSPAP";Y[Y.DETAILED_NETWORK_TYPE_EHRPD]="DETAILED_NETWORK_TYPE_EHRPD";Y[Y.DETAILED_NETWORK_TYPE_EVDO_B]="DETAILED_NETWORK_TYPE_EVDO_B";
Y[Y.DETAILED_NETWORK_TYPE_UMTS]="DETAILED_NETWORK_TYPE_UMTS";Y[Y.DETAILED_NETWORK_TYPE_IDEN]="DETAILED_NETWORK_TYPE_IDEN";Y[Y.DETAILED_NETWORK_TYPE_HSUPA]="DETAILED_NETWORK_TYPE_HSUPA";Y[Y.DETAILED_NETWORK_TYPE_HSPA]="DETAILED_NETWORK_TYPE_HSPA";Y[Y.DETAILED_NETWORK_TYPE_HSDPA]="DETAILED_NETWORK_TYPE_HSDPA";Y[Y.DETAILED_NETWORK_TYPE_EVDO_A]="DETAILED_NETWORK_TYPE_EVDO_A";Y[Y.DETAILED_NETWORK_TYPE_EVDO_0]="DETAILED_NETWORK_TYPE_EVDO_0";Y[Y.DETAILED_NETWORK_TYPE_CDMA]="DETAILED_NETWORK_TYPE_CDMA";
Y[Y.DETAILED_NETWORK_TYPE_1_X_RTT]="DETAILED_NETWORK_TYPE_1_X_RTT";Y[Y.DETAILED_NETWORK_TYPE_GPRS]="DETAILED_NETWORK_TYPE_GPRS";Y[Y.DETAILED_NETWORK_TYPE_EDGE]="DETAILED_NETWORK_TYPE_EDGE";Y[Y.DETAILED_NETWORK_TYPE_UNKNOWN]="DETAILED_NETWORK_TYPE_UNKNOWN";var yu={LATENCY_PLAYER_RTSP:7,LATENCY_PLAYER_HTML5_INLINE:6,LATENCY_PLAYER_HTML5_FULLSCREEN:5,LATENCY_PLAYER_HTML5:4,LATENCY_PLAYER_FRAMEWORK:3,LATENCY_PLAYER_FLASH:2,LATENCY_PLAYER_EXO:1,LATENCY_PLAYER_UNKNOWN:0};yu[yu.LATENCY_PLAYER_RTSP]="LATENCY_PLAYER_RTSP";
yu[yu.LATENCY_PLAYER_HTML5_INLINE]="LATENCY_PLAYER_HTML5_INLINE";yu[yu.LATENCY_PLAYER_HTML5_FULLSCREEN]="LATENCY_PLAYER_HTML5_FULLSCREEN";yu[yu.LATENCY_PLAYER_HTML5]="LATENCY_PLAYER_HTML5";yu[yu.LATENCY_PLAYER_FRAMEWORK]="LATENCY_PLAYER_FRAMEWORK";yu[yu.LATENCY_PLAYER_FLASH]="LATENCY_PLAYER_FLASH";yu[yu.LATENCY_PLAYER_EXO]="LATENCY_PLAYER_EXO";yu[yu.LATENCY_PLAYER_UNKNOWN]="LATENCY_PLAYER_UNKNOWN";
var zu={LATENCY_AD_BREAK_TYPE_POSTROLL:3,LATENCY_AD_BREAK_TYPE_MIDROLL:2,LATENCY_AD_BREAK_TYPE_PREROLL:1,LATENCY_AD_BREAK_TYPE_UNKNOWN:0};zu[zu.LATENCY_AD_BREAK_TYPE_POSTROLL]="LATENCY_AD_BREAK_TYPE_POSTROLL";zu[zu.LATENCY_AD_BREAK_TYPE_MIDROLL]="LATENCY_AD_BREAK_TYPE_MIDROLL";zu[zu.LATENCY_AD_BREAK_TYPE_PREROLL]="LATENCY_AD_BREAK_TYPE_PREROLL";zu[zu.LATENCY_AD_BREAK_TYPE_UNKNOWN]="LATENCY_AD_BREAK_TYPE_UNKNOWN";var Au={LATENCY_ACTION_ERROR_STARTUP_TIMEOUT:1,LATENCY_ACTION_ERROR_UNSPECIFIED:0};
Au[Au.LATENCY_ACTION_ERROR_STARTUP_TIMEOUT]="LATENCY_ACTION_ERROR_STARTUP_TIMEOUT";Au[Au.LATENCY_ACTION_ERROR_UNSPECIFIED]="LATENCY_ACTION_ERROR_UNSPECIFIED";var Bu={LIVE_STREAM_MODE_WINDOW:5,LIVE_STREAM_MODE_POST:4,LIVE_STREAM_MODE_LP:3,LIVE_STREAM_MODE_LIVE:2,LIVE_STREAM_MODE_DVR:1,LIVE_STREAM_MODE_UNKNOWN:0};Bu[Bu.LIVE_STREAM_MODE_WINDOW]="LIVE_STREAM_MODE_WINDOW";Bu[Bu.LIVE_STREAM_MODE_POST]="LIVE_STREAM_MODE_POST";Bu[Bu.LIVE_STREAM_MODE_LP]="LIVE_STREAM_MODE_LP";
Bu[Bu.LIVE_STREAM_MODE_LIVE]="LIVE_STREAM_MODE_LIVE";Bu[Bu.LIVE_STREAM_MODE_DVR]="LIVE_STREAM_MODE_DVR";Bu[Bu.LIVE_STREAM_MODE_UNKNOWN]="LIVE_STREAM_MODE_UNKNOWN";var Cu={VIDEO_STREAM_TYPE_VOD:3,VIDEO_STREAM_TYPE_DVR:2,VIDEO_STREAM_TYPE_LIVE:1,VIDEO_STREAM_TYPE_UNSPECIFIED:0};Cu[Cu.VIDEO_STREAM_TYPE_VOD]="VIDEO_STREAM_TYPE_VOD";Cu[Cu.VIDEO_STREAM_TYPE_DVR]="VIDEO_STREAM_TYPE_DVR";Cu[Cu.VIDEO_STREAM_TYPE_LIVE]="VIDEO_STREAM_TYPE_LIVE";Cu[Cu.VIDEO_STREAM_TYPE_UNSPECIFIED]="VIDEO_STREAM_TYPE_UNSPECIFIED";
var Du={YT_IDB_TRANSACTION_TYPE_READ:2,YT_IDB_TRANSACTION_TYPE_WRITE:1,YT_IDB_TRANSACTION_TYPE_UNKNOWN:0};Du[Du.YT_IDB_TRANSACTION_TYPE_READ]="YT_IDB_TRANSACTION_TYPE_READ";Du[Du.YT_IDB_TRANSACTION_TYPE_WRITE]="YT_IDB_TRANSACTION_TYPE_WRITE";Du[Du.YT_IDB_TRANSACTION_TYPE_UNKNOWN]="YT_IDB_TRANSACTION_TYPE_UNKNOWN";var Eu={PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN:2,PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT:1,PLAYER_ROTATION_TYPE_UNKNOWN:0};Eu[Eu.PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN]="PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN";
Eu[Eu.PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT]="PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT";Eu[Eu.PLAYER_ROTATION_TYPE_UNKNOWN]="PLAYER_ROTATION_TYPE_UNKNOWN";var Fu="actionVisualElement spinnerInfo resourceInfo playerInfo commentInfo mdxInfo watchInfo thumbnailLoadInfo creatorInfo unpluggedInfo reelInfo subscriptionsFeedInfo requestIds mediaBrowserActionInfo musicLoadActionInfo shoppingInfo webViewInfo prefetchInfo accelerationSession commerceInfo webInfo tvInfo kabukiInfo mwebInfo musicInfo".split(" ");var Gu=y.ytLoggingLatencyUsageStats_||{};A("ytLoggingLatencyUsageStats_",Gu);function Hu(){this.h=0}
function Iu(){Hu.h||(Hu.h=new Hu);return Hu.h}
Hu.prototype.tick=function(a,b,c,d){Ju(this,"tick_"+a+"_"+b)||(c={timestamp:c,cttAuthInfo:d},M("web_csi_via_jspb")?(d=new Ck,E(d,1,a),E(d,2,b),a=new Fk,be(a,Ck,5,Gk,d),ms(a,c)):Km("latencyActionTicked",{tickName:a,clientActionNonce:b},c))};
Hu.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Ju(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,Km("latencyActionInfo",a,{cttAuthInfo:c}))};
Hu.prototype.jspbInfo=function(a,b,c){for(var d="",e=0;e<a.toJSON().length;e++)void 0!==a.toJSON()[e]&&(d=0===e?d.concat(""+e):d.concat("_"+e));Ju(this,"info_"+d+"_"+b)||(E(a,2,b),b={cttAuthInfo:c},c=new Fk,be(c,ek,7,Gk,a),ms(c,b))};
Hu.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Ju(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,Km("latencyActionSpan",a,{cttAuthInfo:c}))};
function Ju(a,b){Gu[b]=Gu[b]||{count:0};var c=Gu[b];c.count++;c.time=Q();a.h||(a.h=tm(function(){var d=Q(),e;for(e in Gu)Gu[e]&&6E4<d-Gu[e].time&&delete Gu[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new P("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||As(c)),!0):!1}
;function Ku(){var a=["ol"];ou("").info.actionType="embed";a&&Xk("TIMING_AFT_KEYS",a);Xk("TIMING_ACTION","embed");if(M("web_csi_via_jspb")){a=L("TIMING_INFO",{});var b=new ek;a=p(Object.entries(a));for(var c=a.next();!c.done;c=a.next()){var d=p(c.value);c=d.next().value;d=d.next().value;switch(c){case "GetBrowse_rid":var e=new hk;E(e,1,c);E(e,2,String(d));gk(b,e);break;case "GetGuide_rid":e=new hk;E(e,1,c);E(e,2,String(d));gk(b,e);break;case "GetHome_rid":e=new hk;E(e,1,c);E(e,2,String(d));gk(b,e);
break;case "GetPlayer_rid":e=new hk;E(e,1,c);E(e,2,String(d));gk(b,e);break;case "GetSearch_rid":e=new hk;E(e,1,c);E(e,2,String(d));gk(b,e);break;case "GetSettings_rid":e=new hk;E(e,1,c);E(e,2,String(d));gk(b,e);break;case "GetTrending_rid":e=new hk;E(e,1,c);E(e,2,String(d));gk(b,e);break;case "GetWatchNext_rid":e=new hk;E(e,1,c);E(e,2,String(d));gk(b,e);break;case "yt_red":E(b,14,!!d);break;case "yt_ad":E(b,9,!!d)}}Lu(b);b=new ek;b=E(b,25,!0);b=E(b,1,W[vu(L("TIMING_ACTION"))]);(a=L("PREVIOUS_ACTION"))&&
E(b,13,W[vu(a)]);(a=L("CLIENT_PROTOCOL"))&&E(b,33,a);(a=L("CLIENT_TRANSPORT"))&&E(b,34,a);(a=Ss())&&"UNDEFINED_CSN"!==a&&E(b,4,a);a=Mu();1!==a&&-1!==a||E(b,6,!0);a=eu();M("skip_setting_info_in_csi_data_object")&&fu();E(b,3,"cold");Nu(a);a=Ou();if(0<a.length)for(a=p(a),c=a.next();!c.done;c=a.next())c=c.value,d=new dk,E(d,1,c),de(b,83,dk,d);Lu(b)}else{a=L("TIMING_INFO",{});for(b in a)a.hasOwnProperty(b)&&Pu(b,a[b]);b={isNavigation:!0,actionType:vu(L("TIMING_ACTION"))};if(a=L("PREVIOUS_ACTION"))b.previousAction=
vu(a);if(a=L("CLIENT_PROTOCOL"))b.httpProtocol=a;if(a=L("CLIENT_TRANSPORT"))b.transportProtocol=a;(a=Ss())&&"UNDEFINED_CSN"!==a&&(b.clientScreenNonce=a);a=Mu();if(1===a||-1===a)b.isVisible=!0;M("skip_setting_info_in_csi_data_object")&&fu();eu();b.loadType="cold";Nu(eu());a=Ou();if(0<a.length)for(b.resourceInfo=[],a=p(a),c=a.next();!c.done;c=a.next())b.resourceInfo.push({resourceCache:c.value});Qu(b)}b=eu();a=iu();if(!(M("skip_setting_info_in_csi_data_object")&&"cold"!==fu().loadType||"cold"!==b.yt_lt&&
"cold"!==a.loadType)){c=gu();d=hu();d=d.gelTicks?d.gelTicks:d.gelTicks={};for(var f in c)if(!(f in d))if("number"===typeof c[f])Z(f,$t(f));else if(M("log_repeated_ytcsi_ticks")){e=p(c[f]);for(var g=e.next();!g.done;g=e.next())Z(f.slice(1),g.value)}f={};c=!1;d=p(Object.keys(b));for(e=d.next();!e.done;e=d.next())e=e.value,(e=wu(e,b[e]))&&!lu(iu(),e)&&(Ot(a,e),Ot(f,e),c=!0);c&&Qu(f)}A("ytglobal.timingready_",!0);f=L("TIMING_ACTION");B("ytglobal.timingready_")&&f&&"_start"in gu()&&Zt()&&ku()}
function Pu(a,b,c,d){if(null!==b){var e=eu(c);M("skip_setting_info_in_csi_data_object")?"yt_lt"===a&&(e="string"===typeof b?b:""+b,fu(c).loadType=e):e[a]=b;(a=wu(a,b,c))&&Qu(a,c,d)}}
function Qu(a,b,c){if(!M("web_csi_via_jspb")||(void 0===c?0:c))c=ou(b||""),Ot(c.info,a),M("skip_setting_info_in_csi_data_object")&&a.loadType&&(c=a.loadType,fu(b).loadType=c),Ot(iu(b),a),c=ju(b),b=du(b).cttAuthInfo,Iu().info(a,c,b);else{c=new ek;var d=Object.keys(a);a=Object.values(a);for(var e=0;e<d.length;e++){var f=d[e];try{switch(f){case "actionType":E(c,1,W[a[e]]);break;case "clientActionNonce":E(c,2,a[e]);break;case "clientScreenNonce":E(c,4,a[e]);break;case "loadType":E(c,3,a[e]);break;case "isPrewarmedLaunch":E(c,
92,a[e]);break;case "isFirstInstall":E(c,55,a[e]);break;case "networkType":E(c,5,xu[a[e]]);break;case "connectionType":E(c,26,X[a[e]]);break;case "detailedConnectionType":E(c,27,Y[a[e]]);break;case "isVisible":E(c,6,a[e]);break;case "playerType":E(c,7,yu[a[e]]);break;case "clientPlaybackNonce":E(c,8,a[e]);break;case "adClientPlaybackNonce":E(c,28,a[e]);break;case "previousCpn":E(c,77,a[e]);break;case "targetCpn":E(c,76,a[e]);break;case "isMonetized":E(c,9,a[e]);break;case "isPrerollAllowed":E(c,16,
a[e]);break;case "isPrerollShown":E(c,17,a[e]);break;case "adType":E(c,12,a[e]);break;case "adTypesAllowed":E(c,36,a[e]);break;case "adNetworks":E(c,37,a[e]);break;case "previousAction":E(c,13,W[a[e]]);break;case "isRedSubscriber":E(c,14,a[e]);break;case "serverTimeMs":E(c,15,a[e]);break;case "videoId":c.setVideoId(a[e]);break;case "adVideoId":E(c,20,a[e]);break;case "targetVideoId":E(c,78,a[e]);break;case "adBreakType":E(c,21,zu[a[e]]);break;case "isNavigation":E(c,25,a[e]);break;case "viewportHeight":E(c,
29,a[e]);break;case "viewportWidth":E(c,30,a[e]);break;case "screenHeight":E(c,84,a[e]);break;case "screenWidth":E(c,85,a[e]);break;case "browseId":E(c,31,a[e]);break;case "isCacheHit":E(c,32,a[e]);break;case "httpProtocol":E(c,33,a[e]);break;case "transportProtocol":E(c,34,a[e]);break;case "searchQuery":E(c,41,a[e]);break;case "isContinuation":E(c,42,a[e]);break;case "availableProcessors":E(c,43,a[e]);break;case "sdk":E(c,44,a[e]);break;case "isLocalStream":E(c,45,a[e]);break;case "navigationRequestedSameUrl":E(c,
64,a[e]);break;case "shellStartupDurationMs":E(c,70,a[e]);break;case "appInstallDataAgeMs":E(c,73,a[e]);break;case "latencyActionError":E(c,71,Au[a[e]]);break;case "actionStep":E(c,79,a[e]);break;case "jsHeapSizeLimit":E(c,80,a[e]);break;case "totalJsHeapSize":E(c,81,a[e]);break;case "usedJsHeapSize":E(c,82,a[e]);break;case "sourceVideoDurationMs":E(c,90,a[e]);break;case "videoOutputFrames":E(c,93,a[e]);break;case "isResume":E(c,104,a[e]);break;case "debugTicksExcluded":E(c,105,a[e]);break;case "adPrebufferedTimeSecs":E(c,
39,a[e]);break;case "isLivestream":E(c,47,a[e]);break;case "liveStreamMode":E(c,91,Bu[a[e]]);break;case "adCpn2":E(c,48,a[e]);break;case "adDaiDriftMillis":E(c,49,a[e]);break;case "videoStreamType":E(c,53,Cu[a[e]]);break;case "playbackRequiresTap":E(c,56,a[e]);break;case "performanceNavigationTiming":E(c,67,a[e]);break;case "transactionType":E(c,74,Du[a[e]]);break;case "playerRotationType":E(c,101,Eu[a[e]]);break;case "allowedPreroll":E(c,10,a[e]);break;case "shownPreroll":E(c,11,a[e]);break;case "getHomeRequestId":E(c,
57,a[e]);break;case "getSearchRequestId":E(c,60,a[e]);break;case "getPlayerRequestId":E(c,61,a[e]);break;case "getWatchNextRequestId":E(c,62,a[e]);break;case "getBrowseRequestId":E(c,63,a[e]);break;case "getLibraryRequestId":E(c,66,a[e]);break;case "isTransformerEnabledForFeature":E(c,106,a[e]);break;default:Fu.includes(f)&&il(new P("Codegen laipb translator asked to translate message field",""+f))}}catch(g){il(Error("Codegen laipb translator failed to set "+f))}}Lu(c,b)}}
function Lu(a,b){if(M("skip_setting_info_in_csi_data_object")){var c=fe(Sd(a,3),"");c&&(fu(b).loadType=c)}else c=hu(b),c.jspbInfos||(c.jspbInfos=[]),c.jspbInfos.push(le(a));ou(b||"").jspbInfo.push(a);c=ju(b);b=du(b).cttAuthInfo;Iu().jspbInfo(a,c,b)}
function Z(a,b,c){if(!b&&"_"!==a[0]){var d=a;S.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),S.mark(d))}d=ou(c||"");d.tick[a]=b||Q();if(d.callback&&d.callback[a]){d=p(d.callback[a]);for(var e=d.next();!e.done;e=d.next())e=e.value,e()}d=hu(c);d.gelTicks&&(d.gelTicks[a]=!0);e=gu(c);d=b||Q();M("log_repeated_ytcsi_ticks")?a in e||(e[a]=d):e[a]=d;e=ju(c);var f=du(c).cttAuthInfo;"_start"===a?(a=Iu(),Ju(a,"baseline_"+e)||(b={timestamp:b,cttAuthInfo:f},M("web_csi_via_jspb")?(a=new ck,
E(a,1,e),e=new Fk,be(e,ck,6,Gk,a),ms(e,b)):Km("latencyActionBaselined",{clientActionNonce:e},b))):Iu().tick(a,e,b,f);ku(c);return d}
function Ru(){var a=ju();requestAnimationFrame(function(){setTimeout(function(){a===ju()&&Z("ol",void 0,void 0)},0)})}
function Mu(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Hq+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Nu(a){var b=au(),c=cu(),d=L("CSI_START_TIMESTAMP_MILLIS",0);0<d&&!M("embeds_web_enable_csi_start_override_killswitch")&&(c=d);c&&(Z("srt",b.responseStart),1!==a.prerender&&Z("_start",c,void 0));a=mu();0<a&&Z("fpt",a);a=au();a.isPerformanceNavigationTiming&&Qu({performanceNavigationTiming:!0});Z("nreqs",a.requestStart,void 0);Z("nress",a.responseStart,void 0);Z("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(Z("nrs",a.redirectStart,void 0),Z("nre",a.redirectEnd,void 0));0<
a.domainLookupEnd-a.domainLookupStart&&(Z("ndnss",a.domainLookupStart,void 0),Z("ndnse",a.domainLookupEnd,void 0));0<a.connectEnd-a.connectStart&&(Z("ntcps",a.connectStart,void 0),Z("ntcpe",a.connectEnd,void 0));a.secureConnectionStart>=cu()&&0<a.connectEnd-a.secureConnectionStart&&(Z("nstcps",a.secureConnectionStart,void 0),Z("ntcpe",a.connectEnd,void 0));S&&"getEntriesByType"in S&&Su()}
function Tu(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);jc()&&a.setAttribute("nonce",jc());return c?(a=S.getEntriesByName(c))&&a[0]&&(a=a[0],c=cu(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function Ou(){var a=[];if(document.querySelector&&S&&S.getEntriesByName)for(var b in Yt)if(Yt.hasOwnProperty(b)){var c=Yt[b];Tu(b,c)&&a.push(c)}return a}
function Su(){var a=window.location.protocol,b=S.getEntriesByType("resource");b=ib(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=kb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",bu(b.startTime)),Z("wffe",bu(b.responseEnd)))}
var Uu=window;Uu.ytcsi&&(Uu.ytcsi.info=Pu,Uu.ytcsi.tick=Z);var Vu="tokens consistency mss client_location entities response_received_commands store PLAYER_PRELOAD".split(" "),Wu=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];function Xu(a,b,c,d){this.m=a;this.L=b;this.l=c;this.j=d;this.i=void 0;this.h=new Map;a.Pa||(a.Pa={});a.Pa=Object.assign({},Nt,a.Pa)}
function Yu(a,b,c,d){if(void 0!==Xu.h){if(d=Xu.h,a=[a!==d.m,b!==d.L,c!==d.l,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new P("InnerTubeTransportService is already initialized",a);
}else Xu.h=new Xu(a,b,c,d)}
function Zu(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?vt:c;var d=Ft(b,a.m);if(!d)return Gf(new P("Error: No request builder found for command.",b));var e=d.m(b,void 0,c);return e?new Bf(function(f){var g,h,k;return x(function(m){if(1==m.h){h="cors"===(null==(g=e.xa)?void 0:g.mode)?"cors":void 0;if(a.l.vd){var q=e.config,r;q=null==q?void 0:null==(r=q.ab)?void 0:r.sessionIndex;r=ut({sessionIndex:q});k=Object.assign({},$u(h),r);return m.u(2)}return v(m,av(e.config,
h),3)}2!=m.h&&(k=m.i);f(bv(a,e,k));m.h=0})}):Gf(new P("Error: Failed to build request for command.",b))}
function cv(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.Qr)?0:d.Tr)&&a.j){d=p(Vu);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function bv(a,b,c){var d,e,f,g,h,k,m,q,r,w,t,z,D,F,O,N,R,ca,U,qb,Ua,oa,I,na,ea,He,Ie,ud;return x(function(ra){switch(ra.h){case 1:ra.u(2);break;case 3:if((d=ra.i)&&!d.isExpired())return ra.return(Promise.resolve(d.h()));case 2:if(null==(e=b)?0:null==(f=e.ha)?0:f.context)for(g=p([]),h=g.next();!h.done;h=g.next())k=h.value,k.Mr(b.ha.context);if(null==(m=a.i)||!m.Rr(b.input,b.ha)){ra.u(4);break}return v(ra,a.i.Hr(b.input,b.ha),5);case 5:return q=ra.i,M("kevlar_process_local_innertube_responses_killswitch")||
cv(a,q,b),ra.return(q);case 4:return(t=null==(w=b.config)?void 0:w.oa)&&a.h.has(t)&&M("web_memoize_inflight_requests")?r=a.h.get(t):(z=JSON.stringify(b.ha),O=null!=(F=null==(D=b.xa)?void 0:D.headers)?F:{},b.xa=Object.assign({},b.xa,{headers:Object.assign({},O,c)}),N=Object.assign({},b.xa),"POST"===b.xa.method&&(N=Object.assign({},N,{body:z})),(null==(R=b.config)?0:R.hd)&&Z(b.config.hd),ca=function(){return a.L.fetch(b.input,N,b.config)},r=ca(),t&&a.h.set(t,r)),v(ra,r,6);
case 6:if((U=ra.i)&&"error"in U&&(null==(qb=U)?0:null==(Ua=qb.error)?0:Ua.details))for(oa=U.error.details,I=p(oa),na=I.next();!na.done;na=I.next())ea=na.value,(He=ea["@type"])&&-1<Wu.indexOf(He)&&(delete ea["@type"],U=ea);t&&a.h.has(t)&&a.h.delete(t);(null==(Ie=b.config)?0:Ie.jd)&&Z(b.config.jd);if(U||null==(ud=a.i)||!ud.zr(b.input,b.ha)){ra.u(7);break}return v(ra,a.i.Gr(b.input,b.ha),8);case 8:U=ra.i;case 7:return cv(a,U,b),ra.return(U||void 0)}})}
function av(a,b){var c,d,e,f;return x(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.ab)?void 0:d.sessionIndex;var h=ut({sessionIndex:e});if(!(h instanceof Bf)){var k=new Bf(eb);Cf(k,2,h);h=k}return v(g,h,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},$u(b),f)))})}
function $u(a){var b={"Content-Type":"application/json"};L("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=L("EOM_VISITOR_DATA"):L("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=L("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=L("LOGGED_IN",!1);"cors"!==a&&((a=L("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=L("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=L("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),(a=L("DOMAIN_ADMIN_STATE"))&&
(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var dv=new hr("INNERTUBE_TRANSPORT_TOKEN");var ev=["share/get_web_player_share_panel"],fv=["feedback"],gv=["notification/modify_channel_preference"],hv=["browse/edit_playlist"],iv=["subscription/subscribe"],jv=["subscription/unsubscribe"];function kv(){}
u(kv,Kt);kv.prototype.j=function(){return iv};
kv.prototype.h=function(a){return tr(a,Rk)||void 0};
kv.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
fa.Object.defineProperties(kv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function lv(){}
u(lv,Kt);lv.prototype.j=function(){return jv};
lv.prototype.h=function(a){return tr(a,Qk)||void 0};
lv.prototype.i=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
fa.Object.defineProperties(lv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function mv(){}
u(mv,Kt);mv.prototype.j=function(){return fv};
mv.prototype.h=function(a){return tr(a,xj)||void 0};
mv.prototype.i=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
fa.Object.defineProperties(mv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function nv(){}
u(nv,Kt);nv.prototype.j=function(){return gv};
nv.prototype.h=function(a){return tr(a,Pk)||void 0};
nv.prototype.i=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function ov(){}
u(ov,Kt);ov.prototype.j=function(){return hv};
ov.prototype.h=function(a){return tr(a,Ok)||void 0};
ov.prototype.i=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function pv(){}
u(pv,Kt);pv.prototype.j=function(){return ev};
pv.prototype.h=function(a){return tr(a,Nk)};
pv.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var jr=new hr("NETWORK_SLI_TOKEN");function qv(a){this.h=a}
qv.prototype.fetch=function(a,b){var c=this,d,e;return x(function(f){c.h&&(d=nc(oc(5,Ec(a,"key")))||"/UNKNOWN_PATH",c.h.start(d));e=new window.Request(a,b);return M("web_fetch_promise_cleanup_killswitch")?f.return(Promise.resolve(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){As(g)}))):f.return(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){As(g)}))})};
qv.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Dr(),b=b.then(function(c){As(new P("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};
qv[gr]=[new ir];var rv=new hr("NETWORK_MANAGER_TOKEN");var sv;function tv(a){Xo.call(this,1,arguments);this.csn=a}
u(tv,Xo);var fp=new Yo("screen-created",tv),uv=[],wv=vv,xv=0;function yv(a,b,c,d,e,f,g){function h(){As(new P("newScreen() parent element does not have a VE - rootVe",b))}
var k=wv(),m=new Ls({veType:b,youtubeData:f,jspbYoutubeData:void 0});f={sequenceGroup:k};e&&(f.cttAuthInfo=e);M("il_via_jspb")?(e=Sj((new Rj).i(k),m.getAsJspb()),c&&c.visualElement?(m=new Tj,c.clientScreenNonce&&E(m,2,c.clientScreenNonce),Uj(m,c.visualElement.getAsJspb()),g&&E(m,4,Hk[g]),G(e,Tj,5,m)):c&&h(),d&&E(e,3,d),rs(e,f,a)):(e={csn:k,pageVe:m.getAsJson()},c&&c.visualElement?(e.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(e.implicitGesture.gestureType=
g)):c&&h(),d&&(e.cloneCsn=d),a?gs("screenCreated",e,a,f):Km("screenCreated",e,f));cp(fp,new tv(k));return k}
function zv(a,b,c,d){var e=d.filter(function(k){k.csn!==b?(k.csn=b,k=!0):k=!1;return k}),f={cttAuthInfo:Us(b)||void 0,
sequenceGroup:b};d=p(d);for(var g=d.next();!g.done;g=d.next())g=g.value.getAsJson(),(sb(g)||!g.trackingParams&&!g.veType)&&As(Error("Child VE logged with no data"));if(M("il_via_jspb")){var h=Xj((new Vj).i(b),c.getAsJspb());jb(e,function(k){k=k.getAsJspb();de(h,3,Mj,k)});
"UNDEFINED_CSN"===b?Av("visualElementAttached",f,void 0,h):ss(h,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:jb(e,function(k){return k.getAsJson()})},"UNDEFINED_CSN"===b?Av("visualElementAttached",f,c):a?gs("visualElementAttached",c,a,f):Km("visualElementAttached",c,f)}
function Bv(a,b,c,d,e,f){Cv(a,b,c,e,f)}
function Cv(a,b,c,d,e){var f={cttAuthInfo:Us(b)||void 0,sequenceGroup:b};M("il_via_jspb")?(d=(new ak).i(b),c=c.getAsJspb(),c=G(d,Mj,2,c),c=E(c,4,1),e&&G(c,Pj,3,e),"UNDEFINED_CSN"===b?Av("visualElementShown",f,void 0,c):ns(c,f,a)):(e={csn:b,ve:c.getAsJson(),eventType:1},d&&(e.clientData=d),"UNDEFINED_CSN"===b?Av("visualElementShown",f,e):a?gs("visualElementShown",e,a,f):Km("visualElementShown",e,f))}
function vv(){if(M("enable_web_96_bit_csn"))var a=Hs();else{a=Math.random()+"";for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}a=cd(b,3)}return a}
function Av(a,b,c,d){uv.push({Fb:a,payload:c,ma:d,options:b});xv||(xv=gp())}
function hp(a){if(uv){for(var b=p(uv),c=b.next();!c.done;c=b.next())if(c=c.value,M("il_via_jspb")&&c.ma)switch(c.ma.i(a.csn),c.Fb){case "screenCreated":rs(c.ma,c.options);break;case "visualElementAttached":ss(c.ma,c.options);break;case "visualElementShown":ns(c.ma,c.options);break;case "visualElementHidden":os(c.ma,c.options);break;case "visualElementGestured":ps(c.ma,c.options);break;case "visualElementStateChanged":qs(c.ma,c.options);break;default:As(new P("flushQueue unable to map payloadName to JSPB setter"))}else c.payload&&
(c.payload.csn=a.csn,Km(c.Fb,c.payload,c.options));uv.length=0}xv=0}
;function Dv(){this.l=new Set;this.h=new Set;this.m=new Map;this.client=Fq;this.csn=null}
function Ev(){Dv.h||(Dv.h=new Dv);return Dv.h}
Dv.prototype.i=function(a){this.client=a};
Dv.prototype.j=function(){this.clear();this.csn=Ss()};
Dv.prototype.clear=function(){this.l.clear();this.h.clear();this.m.clear();this.csn=null};function Fv(){this.j=new Set;this.h=new Set;this.l=new Map;this.client=void 0;this.csn=null}
function Gv(){Fv.h||(Fv.h=new Fv);return Fv.h}
Fv.prototype.i=function(a){M("safe_logging_library_killswitch")?this.client=a:hl(Ev().i).bind(Ev())(a)};
Fv.prototype.clear=function(){M("safe_logging_library_killswitch")?(this.j.clear(),this.h.clear(),this.l.clear(),this.csn=null):hl(Ev().clear).bind(Ev())()};function Hv(){this.j=new Set;this.h=new Set;this.l=new Map}
Hv.prototype.i=function(a){M("use_ts_visibilitylogger")&&Gv().i(a)};
Hv.prototype.clear=function(){M("use_ts_visibilitylogger")?Gv().clear():(this.j.clear(),this.h.clear(),this.l.clear())};
Pa(Hv);function Iv(){this.o=[];this.v=[];this.h=[];this.m=[];this.M=[];this.j=new Set;this.s=new Map}
Iv.prototype.i=function(a){this.client=a};
function Jv(a,b,c){c=void 0===c?0:c;b.then(function(d){a.j.has(c)&&a.l&&a.l();var e=Ss(c),f=Qs(c);if(e&&f){var g;(null==d?0:null==(g=d.response)?0:g.trackingParams)&&zv(a.client,e,f,[Ms(d.response.trackingParams)]);var h;(null==d?0:null==(h=d.playerResponse)?0:h.trackingParams)&&zv(a.client,e,f,[Ms(d.playerResponse.trackingParams)])}})}
function Kv(a,b,c,d){d=void 0===d?0:d;if(a.j.has(d))a.o.push([b,c]);else{var e=Ss(d);c=c||Qs(d);e&&c&&zv(a.client,e,c,[b])}}
Iv.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=Ss(void 0===c?0:c)){a=this.client;var e=Ms(d);d={cttAuthInfo:Us(c)||void 0,sequenceGroup:c};M("il_via_jspb")?(b=(new Yj).i(c),e=e.getAsJspb(),b=G(b,Mj,2,e),E(b,4,Hk.INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK),"UNDEFINED_CSN"===c?Av("visualElementGestured",d,void 0,b):ps(b,d,a)):(e={csn:c,ve:e.getAsJson(),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"},b&&(e.clientData=b),"UNDEFINED_CSN"===
c?Av("visualElementGestured",d,e):a?gs("visualElementGestured",e,a,d):Km("visualElementGestured",e,d));b=!0}else b=!1;else b=!1;return b};
Iv.prototype.visualElementStateChanged=function(a,b,c){c=void 0===c?0:c;0===c&&this.j.has(c)?this.v.push([a,b]):Lv(this,a,b,c)};
function Lv(a,b,c,d){d=void 0===d?0:d;var e=Ss(d);d=b||Qs(d);e&&d&&(a=a.client,b={cttAuthInfo:Us(e)||void 0,sequenceGroup:e},M("il_via_jspb")?(c=new bk,c.i(e),d=d.getAsJspb(),G(c,Mj,2,d),"UNDEFINED_CSN"===e?Av("visualElementStateChanged",b,void 0,c):qs(c,b,a)):(c={csn:e,ve:d.getAsJson(),clientData:c},"UNDEFINED_CSN"===e?Av("visualElementStateChanged",b,c):a?gs("visualElementStateChanged",c,a,b):Km("visualElementStateChanged",c,b)))}
function Mv(a,b,c){c=void 0===c?{}:c;a.j.add(c.layer||0);a.l=function(){Nv(a,b,c);var f=Qs(c.layer);if(f){for(var g=p(a.o),h=g.next();!h.done;h=g.next())h=h.value,Kv(a,h[0],h[1]||f,c.layer);f=p(a.v);for(g=f.next();!g.done;g=f.next())g=g.value,Lv(a,g[0],g[1])}};
Ss(c.layer)||a.l();if(c.Xb)for(var d=p(c.Xb),e=d.next();!e.done;e=d.next())Jv(a,e.value,c.layer);else zs(Error("Delayed screen needs a data promise."))}
function Nv(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.cd?c.cd:c.layer;var e=Ss(d);d=Qs(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=L("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=yv(a.client,b,f,c.Wb,c.cttAuthInfo,g,c.Er)}catch(m){Cs(m,{Or:b,rootVe:d,Lr:void 0,Ar:e,Kr:f,Wb:c.Wb});zs(m);return}Vs(k,b,c.layer,c.cttAuthInfo);
if(b=e&&"UNDEFINED_CSN"!==e&&d){a:{b=p(Object.values(Ks));for(f=b.next();!f.done;f=b.next())if(Ss(f.value)===e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,g=!0,h=(g=void 0===g?!1:g)?16:8,f={cttAuthInfo:Us(e)||void 0,sequenceGroup:e,endOfSequence:g},M("il_via_jspb")?(h=(new Zj).i(e),d=d.getAsJspb(),d=G(h,Mj,2,d),E(d,4,g?16:8),"UNDEFINED_CSN"===e?Av("visualElementHidden",f,void 0,d):os(d,f,b)):(d={csn:e,ve:d.getAsJson(),eventType:h},"UNDEFINED_CSN"===e?Av("visualElementHidden",f,d):b?gs("visualElementHidden",
d,b,f):Km("visualElementHidden",d,f)));a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=k||"");Qu({clientScreenNonce:k});d=Hv.getInstance();M("use_ts_visibilitylogger")?(d=Gv(),M("safe_logging_library_killswitch")?(d.clear(),d.csn=Ss()):hl(Ev().j).bind(Ev())()):d.clear();d=Qs(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(M("web_mark_root_visible")||M("music_web_mark_root_visible"))&&(e=k,M("safe_logging_library_killswitch")?Cv(void 0,e,d):hl(Bv)(void 0,e,d,void 0,void 0,void 0));a.j.delete(c.layer||
0);a.l=void 0;e=p(a.s);for(k=e.next();!k.done;k=e.next())b=p(k.value),k=b.next().value,b=b.next().value,b.has(c.layer)&&d&&Kv(a,k,d,c.layer);for(c=0;c<a.m.length;c++){e=a.m[c];try{e()}catch(m){zs(m)}}for(c=a.m.length=0;c<a.M.length;c++){e=a.M[c];try{e()}catch(m){zs(m)}}}
;function Ov(){var a,b,c;return x(function(d){if(1==d.h)return a=or().resolve(dv),a?v(d,Zu(a),2):(As(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return As(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Br;return d.return(c)}As(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;var Pv=y.caches,Qv;function Rv(a){var b=a.indexOf(":");return-1===b?{jc:a}:{jc:a.substring(0,b),datasyncId:a.substring(b+1)}}
function Sv(){return x(function(a){if(void 0!==Qv)return a.return(Qv);Qv=new Promise(function(b){var c;return x(function(d){switch(d.h){case 1:return za(d,2),v(d,Pv.open("test-only"),4);case 4:return v(d,Pv.delete("test-only"),5);case 5:Aa(d,3);break;case 2:if(c=Ba(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(Qv)})}
function Tv(a){var b,c,d,e,f,g,h;x(function(k){if(1==k.h)return v(k,Sv(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return v(k,Pv.keys(),3)}c=k.i;d=p(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=Rv(f),h=g.datasyncId,!h||a.includes(h)||b.push(Pv.delete(f));return k.return(Promise.all(b).then(function(m){return m.some(function(q){return q})}))})}
function Uv(){var a,b,c,d,e,f,g;return x(function(h){if(1==h.h)return v(h,Sv(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=Am("cache contains other");return v(h,Pv.keys(),3)}b=h.i;c=p(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=Rv(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function Vv(){try{return!!self.localStorage}catch(a){return!1}}
;function Wv(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function Xv(a){if(Vv()){var b=Object.keys(window.localStorage);b=p(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Wv(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function Yv(){if(!Vv())return!1;var a=Am(),b=Object.keys(window.localStorage);b=p(b);for(var c=b.next();!c.done;c=b.next())if(c=Wv(c.value),void 0!==c&&c!==a)return!0;return!1}
;function Zv(){Ov().then(function(a){a&&(Zn(a),Tv(a),Xv(a))})}
function $v(){var a=new tq;ki.S(function(){var b,c,d,e;return x(function(f){switch(f.h){case 1:if(M("ytidb_clear_optimizations_killswitch")){f.u(2);break}b=Am("clear");if(b.startsWith("V")){var g=[b];Zn(g);Tv(g);Xv(g);return f.return()}c=Yv();return v(f,Uv(),3);case 3:return d=f.i,v(f,$n(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.U()?Zv():a.l.add("publicytnetworkstatus-online",Zv,!0,void 0,void 0),f.h=0}})})}
;var Sh=ia(["data-"]);function aw(a){a&&(a.dataset?a.dataset[bw("loaded")]="true":Rh(a))}
function cw(a,b){return a?a.dataset?a.dataset[bw(b)]:a.getAttribute("data-"+b):null}
var dw={};function bw(a){return dw[a]||(dw[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var ew=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,fw=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function gw(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(ew,""),c=c.replace(fw,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else hw(a,b,c)}
function hw(a,b,c){c=void 0===c?null:c;var d=iw(a),e=document.getElementById(d),f=e&&cw(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=ar(d,b),b=""+Ta(b),jw[b]=f),g||(e=kw(a,d,function(){cw(e,"loaded")||(aw(e),dr(d),zl($a(er,d),0))},c)))}
function kw(a,b,c,d){d=void 0===d?null:d;var e=of("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Uh(e,Yi(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function lw(a){a=iw(a);var b=document.getElementById(a);b&&(er(a),b.parentNode.removeChild(b))}
function mw(a,b){a&&b&&(a=""+Ta(b),(a=jw[a])&&cr(a))}
function iw(a){var b=document.createElement("a");gc(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+lc(a)}
var jw={};var nw=[],ow=!1;function pw(){if(!M("disable_biscotti_fetch_for_ad_blocker_detection")&&!M("disable_biscotti_fetch_entirely_for_all_web_clients")&&gt()){var a=L("PLAYER_VARS",{});if("1"!=ub(a)&&!ht(a)){var b=function(){ow=!0;"google_ad_status"in window?Xk("DCLKSTAT",1):Xk("DCLKSTAT",2)};
try{gw("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}nw.push(ki.S(function(){if(!(ow||"google_ad_status"in window)){try{mw("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}ow=!0;Xk("DCLKSTAT",3)}},5E3))}}}
function qw(){var a=Number(L("DCLKSTAT",0));return isNaN(a)?0:a}
;function rw(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?ym():d;this.l=c;this.j=d;this.i=new Jh;this.h=a;a={};c=p(this.h.entries());for(d=c.next();!d.done;a={Fa:a.Fa,Ra:a.Ra},d=c.next()){var e=p(d.value);d=e.next().value;e=e.next().value;a.Ra=d;a.Fa=e;d=function(f){return function(){f.Fa.Bb();b.h[f.Ra].mb=!0;b.h.every(function(g){return!0===g.mb})&&b.i.resolve()}}(a);
e=um(d,sw(this,a.Fa));this.h[a.Ra]=Object.assign({},a.Fa,{Bb:d,jobId:e})}}
function tw(a){var b=Array.from(a.h.keys()).sort(function(d,e){return sw(a,a.h[e])-sw(a,a.h[d])});
b=p(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.jobId||c.mb||(a.j.ea(c.jobId),um(c.Bb,10))}
rw.prototype.cancel=function(){for(var a=p(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.mb||this.j.ea(b.jobId),b.mb=!0;this.i.resolve()};
function sw(a,b){var c;return null!=(c=b.priority)?c:a.l}
;function ww(a){this.state=a;this.plugins=[];this.o=void 0}
ww.prototype.install=function(){this.plugins.push.apply(this.plugins,ja(Ka.apply(0,arguments)))};
ww.prototype.uninstall=function(){var a=this;Ka.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);-1<b&&a.plugins.splice(b,1)})};
ww.prototype.transition=function(a,b){var c=this,d=this.v.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.D===a}):f.from===c.state&&f.D===a});
if(d){this.j&&(tw(this.j),this.j=void 0);this.state=a;d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(xw(this,e,this.o),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function xw(a,b,c){return function(){var d=Ka.apply(0,arguments),e=b.filter(function(k){var m;return 10===(null!=(m=null!=c?c:k.priority)?m:0)}),f=b.filter(function(k){var m;
return 10!==(null!=(m=null!=c?c:k.priority)?m:0)});
ym();var g={};e=p(e);for(var h=e.next();!h.done;g={Sa:g.Sa},h=e.next())g.Sa=h.value,wm(function(k){return function(){k.Sa.callback.apply(k.Sa,ja(d))}}(g));
f=f.map(function(k){var m;return{Bb:function(){k.callback.apply(k,ja(d))},
priority:null!=(m=null!=c?c:k.priority)?m:0}});
f.length&&(a.j=new rw(f))}}
fa.Object.defineProperties(ww.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function yw(a){ww.call(this,void 0===a?"document_active":a);var b=this;this.o=10;this.h=new Map;this.v=[{from:"document_active",D:"document_disposed_preventable",action:this.M},{from:"document_active",D:"document_disposed",action:this.l},{from:"document_disposed_preventable",D:"document_disposed",action:this.l},{from:"document_disposed_preventable",D:"flush_logs",action:this.m},{from:"document_disposed_preventable",D:"document_active",action:this.i},{from:"document_disposed",D:"flush_logs",action:this.m},
{from:"document_disposed",D:"document_active",action:this.i},{from:"document_disposed",D:"document_disposed",action:function(){}},
{from:"flush_logs",D:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
u(yw,ww);yw.prototype.M=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
yw.prototype.l=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
yw.prototype.m=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
yw.prototype.i=function(){this.h=new Map};function zw(a){ww.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.v=[{from:"document_visibility_unknown",D:"document_visible",action:this.i},{from:"document_visibility_unknown",D:"document_hidden",action:this.h},{from:"document_visibility_unknown",D:"document_foregrounded",action:this.m},{from:"document_visibility_unknown",D:"document_backgrounded",action:this.l},{from:"document_visible",D:"document_hidden",action:this.h},{from:"document_visible",D:"document_foregrounded",action:this.m},
{from:"document_visible",D:"document_visible",action:this.i},{from:"document_foregrounded",D:"document_visible",action:this.i},{from:"document_foregrounded",D:"document_hidden",action:this.h},{from:"document_foregrounded",D:"document_foregrounded",action:this.m},{from:"document_hidden",D:"document_visible",action:this.i},{from:"document_hidden",D:"document_backgrounded",action:this.l},{from:"document_hidden",D:"document_hidden",action:this.h},{from:"document_backgrounded",D:"document_hidden",action:this.h},
{from:"document_backgrounded",D:"document_backgrounded",action:this.l},{from:"document_backgrounded",D:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
M("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
u(zw,ww);zw.prototype.i=function(a,b){a(null==b?void 0:b.event);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
zw.prototype.h=function(a,b){a(null==b?void 0:b.event);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
zw.prototype.l=function(a,b){a(null==b?void 0:b.event)};
zw.prototype.m=function(a,b){a(null==b?void 0:b.event)};function Aw(){this.h=new yw;this.i=new zw}
Aw.prototype.install=function(){var a=Ka.apply(0,arguments);this.h.install.apply(this.h,ja(a));this.i.install.apply(this.i,ja(a))};function Bw(){Aw.call(this);var a={};this.install((a.document_disposed={callback:this.j},a));a={};this.install((a.flush_logs={callback:this.l},a))}
var Cw;u(Bw,Aw);Bw.prototype.l=function(){if(M("web_fp_via_jspb")){var a=new Lj,b=Ss();b&&E(a,1,b);b=new Fk;be(b,Lj,380,Gk,a);ms(b);M("web_fp_via_jspb_and_json")&&Km("finalPayload",{csn:Ss()})}else Km("finalPayload",{csn:Ss()})};
Bw.prototype.j=function(){Es(Fs)};function Dw(){}
Dw.getInstance=function(){var a=B("ytglobal.storage_");a||(a=new Dw,A("ytglobal.storage_",a));return a};
Dw.prototype.estimate=function(){var a,b,c;return x(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(Ew()):d.return()})};
function Ew(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
A("ytglobal.storageClass_",Dw);function Im(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=$k("ytidb_transaction_ended_event_rate_limit_session",.2)}
Im.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":M("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":M("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Fw(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=$k("ytidb_transaction_ended_event_rate_limit_transaction",.1)&&this.h("idbTransactionEnded",
b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Fw(a,b){Dw.getInstance().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:Gw(null==c?void 0:c.usage),deviceStorageQuotaMbytes:Gw(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Gw(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function Hw(a,b,c){J.call(this);var d=this;c=c||L("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.l=b||null;this.targetOrigin="*";this.m=c;this.sessionId=null;this.i="widget";this.J=!!a;this.F=function(e){a:if(!("*"!=d.m&&e.origin!=d.m||d.l&&e.source!=d.l||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.J&&(d.sessionId&&d.sessionId!=f.id||d.i&&d.i!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.m=d.targetOrigin=e.origin);d.l=e.source;d.sessionId=f.id;d.j&&(d.j(),d.j=null);break;case "command":d.o&&(!d.s||0<=gb(d.s,f.func))&&d.o(f.func,f.args,e.origin)}}};
this.s=this.j=this.o=null;window.addEventListener("message",this.F)}
u(Hw,J);Hw.prototype.sendMessage=function(a,b){if(b=b||this.l){this.sessionId&&(a.id=this.sessionId);this.i&&(a.channel=this.i);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){jl(d)}}};
Hw.prototype.B=function(){window.removeEventListener("message",this.F);J.prototype.B.call(this)};function Iw(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new Hw(!!L("WIDGET_ID_ENFORCE")),b=this.ed.bind(this);a.o=b;a.s=null;this.h.i="widget";if(a=L("WIDGET_ID"))this.h.sessionId=a}
l=Iw.prototype;l.ed=function(a,b,c){"addEventListener"===a&&b?this.Ab(b[0],c):this.Lb(a,b,c)};
l.Lb=function(){};
l.tb=function(a){var b=this;return function(c){return b.sendMessage(a,c)}};
l.Ab=function(a,b){this.j[a]||"onReady"===a||(this.addEventListener(a,this.tb(a,b)),this.j[a]=!0)};
l.addEventListener=function(){};
l.Pc=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.wb());this.sendMessage("onReady");hb(this.i,this.pc,this);this.i=[]};
l.wb=function(){return null};
function Jw(a,b){a.sendMessage("infoDelivery",b)}
l.pc=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
l.sendMessage=function(a,b){this.pc({event:a,info:void 0===b?null:b})};
l.dispose=function(){this.h=null};var Kw={},Lw=(Kw["api.invalidparam"]=2,Kw.auth=150,Kw["drm.auth"]=150,Kw["heartbeat.net"]=150,Kw["heartbeat.servererror"]=150,Kw["heartbeat.stop"]=150,Kw["html5.unsupportedads"]=5,Kw["fmt.noneavailable"]=5,Kw["fmt.decode"]=5,Kw["fmt.unplayable"]=5,Kw["html5.missingapi"]=5,Kw["html5.unsupportedlive"]=5,Kw["drm.unavailable"]=5,Kw["mrm.blocked"]=151,Kw);var Mw=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function Nw(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Ow(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=p(Mw);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Pw(a,b,c,d){if(Sa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Qw(a){Iw.call(this);this.listeners=[];this.l=!1;this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.pd.bind(this));this.addEventListener("onVolumeChange",this.qd.bind(this));this.addEventListener("onApiChange",this.kd.bind(this));this.addEventListener("onPlaybackQualityChange",this.md.bind(this));this.addEventListener("onPlaybackRateChange",this.nd.bind(this));this.addEventListener("onStateChange",this.od.bind(this));this.addEventListener("onWebglSettingsChanged",
this.rd.bind(this))}
u(Qw,Iw);l=Qw.prototype;
l.Lb=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Nw(a)){var d=b;if(Sa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Ow(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Ow(e);break;case "loadPlaylist":case "cuePlaylist":e=Pw(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Nw(a)&&Jw(this,this.wb())}};
l.Ab=function(a,b){("onReady"===a||"onError"===a&&this.l)&&this.api.logApiCall(a+" invocation",b);this.api.logApiCall(a+" registration",b);Iw.prototype.Ab.call(this,a,b)};
l.tb=function(a,b){var c=this,d=Iw.prototype.tb.call(this,a,b);return function(e){c.api.logApiCall(a+" invocation",b);d(e)}};
l.onReady=function(){var a=this.Pc.bind(this);this.h.j=a;a=this.api.getVideoData();if(!a.isPlayable){this.l=!0;a=a.errorCode;var b=void 0===b?5:b;this.sendMessage("onError",(a?Lw[a]||b:b).toString())}};
l.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
l.wb=function(){if(!this.api)return null;var a=this.api.getApiInterface();mb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
l.od=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Jw(this,a)};
l.md=function(a){Jw(this,{playbackQuality:a})};
l.nd=function(a){Jw(this,{playbackRate:a})};
l.kd=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],m=this.api.getOption(e,k);b[e][k]=m}}this.sendMessage("apiInfoDelivery",b)};
l.qd=function(){Jw(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
l.pd=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Jw(this,a)};
l.rd=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Jw(this,a)};
l.dispose=function(){Iw.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Rw(a){J.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.lc,this)}
u(Rw,J);l=Rw.prototype;l.start=function(){this.started||this.h()||(this.started=!0,this.connection.ya("RECEIVING"))};
l.ya=function(a,b){this.started&&!this.h()&&this.connection.ya(a,b)};
l.lc=function(a,b,c){if(this.started&&!this.h()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Sw(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Tw(a,c))&&this.ya(a,c))}}};
l.addListener=function(a){if(!(a in this.i)){var b=this.ld.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
l.ld=function(a,b){this.started&&!this.h()&&this.connection.ya(a,this.vb(a,b))};
l.vb=function(a,b){if(null!=b)return{value:b}};
l.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
l.B=function(){var a=this.connection;a.h()||Hi(a.i,"command",this.lc,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);J.prototype.B.call(this)};function Uw(a,b){Rw.call(this,b);this.api=a;this.start()}
u(Uw,Rw);Uw.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Uw.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Sw(a,b){switch(a){case "loadVideoById":return a=Ow(b),[a];case "cueVideoById":return a=Ow(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Pw(b),[a];case "cuePlaylist":return a=Pw(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Tw(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Uw.prototype.vb=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Rw.prototype.vb.call(this,a,b)};
Uw.prototype.B=function(){Rw.prototype.B.call(this);delete this.api};function Vw(a){a=void 0===a?!1:a;J.call(this);this.i=new K(a);ve(this,this.i)}
ab(Vw,J);Vw.prototype.subscribe=function(a,b,c){return this.h()?0:this.i.subscribe(a,b,c)};
Vw.prototype.m=function(a,b){this.h()||this.i.sa.apply(this.i,arguments)};function Ww(a,b,c){Vw.call(this);this.l=a;this.j=b;this.id=c}
u(Ww,Vw);Ww.prototype.ya=function(a,b){this.h()||this.l.ya(this.j,this.id,a,b)};
Ww.prototype.B=function(){this.j=this.l=null;Vw.prototype.B.call(this)};function Xw(a,b,c){J.call(this);this.i=a;this.origin=c;this.j=Oq(window,"message",this.l.bind(this));this.connection=new Ww(this,a,b);ve(this,this.connection)}
u(Xw,J);Xw.prototype.ya=function(a,b,c,d){this.h()||a!==this.i||(a={id:b,command:c},d&&(a.data=d),this.i.postMessage(JSON.stringify(a),this.origin))};
Xw.prototype.l=function(a){if(!this.h()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.h()||c.m("command",b.command,b.data,a.origin)}}}};
Xw.prototype.B=function(){Pq(this.j);this.i=null;J.prototype.B.call(this)};function Yw(){this.state=1;this.h=null}
l=Yw.prototype;
l.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterUrl)?d:null;if(a.interpreterSafeScript){d=a.interpreterSafeScript;Eb("From proto message. b/166824318");d=d.privateDoNotAccessOrElseSafeScriptWrappedValue||"";var f=Bb();d=f?f.createScript(d):d;d=new Gb(d,Fb)}else d=null!=(f=a.interpreterScript)?f:null;a.interpreterSafeUrl&&(e=a.interpreterSafeUrl,Eb("From proto message. b/166824318"),e=Mb(e.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());Zw(this,d,e,
a.program,b,c)}else As(Error("Cannot initialize botguard without program"))};
function Zw(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,gw(c,function(){window[g]?$w(a,d,g,e):(a.state=3,lw(c),As(new P("Unable to load Botguard","from "+c)))},f)):b?(f=of("SCRIPT"),b instanceof Gb?(b instanceof Gb&&b.constructor===Gb?b=b.j:(Qa(b),b="type_error:SafeScript"),f.textContent=b,Th(f)):f.textContent=b,f.nonce=jc(),document.head.appendChild(f),document.head.removeChild(f),window[g]?$w(a,d,g,e):(a.state=4,As(new P("Unable to load Botguard from JS")))):As(new P("Unable to load VM; no url or JS provided"))}
function $w(a,b,c,d){a.state=5;try{var e=new Kh({program:b,Sc:c,fd:M("att_web_record_metrics")});e.sd.then(function(){a.state=6;d&&d(b)});
a.Jb(e)}catch(f){a.state=7,f instanceof Error&&As(f)}}
l.invoke=function(a){a=void 0===a?{}:a;return this.Kb()?this.xc({Vb:a}):null};
l.dispose=function(){this.Mb()};
l.Mb=function(){this.Jb(null);this.state=8};
l.Kb=function(){return!!this.h};
l.xc=function(a){return this.h.sc(a)};
l.Jb=function(a){te(this.h);this.h=a};function ax(){var a=B("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function bx(){Yw.apply(this,arguments)}
u(bx,Yw);bx.prototype.Mb=function(){this.state=8};
bx.prototype.Jb=function(a){var b;null==(b=ax())||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.sc.bind(a)},A("yt.abuse.playerAttLoader",b),A("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(A("yt.abuse.playerAttLoader",null),A("yt.abuse.playerAttLoaderRun",null))};
bx.prototype.Kb=function(){return!!ax()};
bx.prototype.xc=function(a){return ax().bgvmc(a)};var cx=new bx;function dx(){return cx.Kb()}
function ex(a){a=void 0===a?{}:a;return cx.invoke(a)}
;function fx(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||wb(b);this.assets=a.assets||{};this.attrs=a.attrs||wb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
fx.prototype.clone=function(){var a=new fx,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Qa(c)?a[b]=wb(c):a[b]=c}return a};var gx=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function hx(a){a=a||"";if(window.spf){var b=a.match(gx);spf.style.load(a,b?b[1]:"",void 0)}else ix(a)}
function ix(a){var b=jx(a),c=document.getElementById(b),d=c&&cw(c,"loaded");d||c&&!d||(c=kx(a,b,function(){cw(c,"loaded")||(aw(c),dr(b),zl($a(er,b),0))}))}
function kx(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Yi(a);hc(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function jx(a){var b=of("A");gc(b,new Pb(a,Qb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+lc(a)}
;function lx(){J.call(this);this.i=[]}
u(lx,J);lx.prototype.B=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.callback,void 0)}J.prototype.B.call(this)};function mx(){lx.apply(this,arguments)}
u(mx,lx);function nx(a,b,c,d,e){J.call(this);var f=this;this.s=b;this.webPlayerContextConfig=d;this.Xa=e;this.ca=!1;this.api={};this.V=this.o=null;this.K=new K;this.i={};this.P=this.W=this.elementId=this.ta=this.config=null;this.O=!1;this.l=this.F=null;this.ka={};this.Ya=["onReady"];this.lastError=null;this.Ha=NaN;this.J={};this.Za=new mx(this);this.T=0;this.j=this.m=a;ve(this,this.K);ox(this);px(this);ve(this,this.Za);c?this.T=zl(function(){f.loadNewVideoConfig(c)},0):d&&(qx(this),rx(this))}
u(nx,J);l=nx.prototype;l.getId=function(){return this.s};
l.loadNewVideoConfig=function(a){if(!this.h()){this.T&&(window.clearTimeout(this.T),this.T=0);var b=a||{};b instanceof fx||(b=new fx(b));this.config=b;this.setConfig(a);rx(this);this.isReady()&&sx(this)}};
function qx(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.s,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.s:a.config.attrs.id=a.s);var c;(null==(c=a.j)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
l.setConfig=function(a){this.ta=a;this.config=tx(a);qx(this);if(!this.W){var b;this.W=ux(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.j&&(this.j.style.width=di(Number(b)||b)),(a=a.height)&&this.j&&(this.j.style.height=di(Number(a)||a))};
function sx(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function vx(a){var b=!0,c=wx(a);c&&a.config&&(a=xx(a),b=cw(c,"version")===a);return b&&!!B("yt.player.Application.create")}
function rx(a){if(!a.h()&&!a.O){var b=vx(a);if(b&&"html5"===(wx(a)?"html5":null))a.P="html5",a.isReady()||yx(a);else if(zx(a),a.P="html5",b&&a.l&&a.m)a.m.appendChild(a.l),yx(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.F=function(){c=!0;var d=Ax(a,"player_bootstrap_method")?B("yt.player.Application.createAlternate")||B("yt.player.Application.create"):B("yt.player.Application.create");var e=a.config?tx(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig,a.Xa);yx(a)};
a.O=!0;b?a.F():(gw(xx(a),a.F),(b=Bx(a))&&hx(b),Cx(a)&&!c&&A("yt.player.Application.create",null))}}}
function wx(a){var b=nf(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function yx(a){if(!a.h()){var b=wx(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.O=!1;if(!Ax(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}Dx(a)}else a.Ha=zl(function(){yx(a)},50)}}
function Dx(a){ox(a);a.ca=!0;var b=wx(a);if(b){a.o=Ex(a,b,"addEventListener");a.V=Ex(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Ex(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.o&&a.o(g,a.i[g]);sx(a);a.W&&a.W(a.api);a.K.sa("onReady",a.api)}
function Ex(a,b,c){var d=b[c];return function(){var e=Ka.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,As(f))}}}
function ox(a){a.ca=!1;if(a.V)for(var b in a.i)a.i.hasOwnProperty(b)&&a.V(b,a.i[b]);for(var c in a.J)a.J.hasOwnProperty(c)&&window.clearTimeout(Number(c));a.J={};a.o=null;a.V=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.ta};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
l.isReady=function(){return this.ca};
function px(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){dr("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){dr("WATCH_LATER_VIDEO_REMOVED",b)})}
l.addEventListener=function(a,b){var c=this,d=ux(this,b);d&&(0<=gb(this.Ya,a)||this.i[a]||(b=Fx(this,a),this.o&&this.o(a,b)),this.K.subscribe(a,d),"onReady"===a&&this.isReady()&&zl(function(){d(c.api)},0))};
l.removeEventListener=function(a,b){this.h()||(b=ux(this,b))&&Hi(this.K,a,b)};
function ux(a,b){var c=b;if("string"===typeof b){if(a.ka[b])return a.ka[b];c=function(){var d=Ka.apply(0,arguments),e=B(b);if(e)try{e.apply(y,d)}catch(f){zs(f)}};
a.ka[b]=c}return c?c:null}
function Fx(a,b){var c="ytPlayer"+b+a.s;a.i[b]=c;y[c]=function(d){var e=zl(function(){if(!a.h()){try{a.K.sa(b,null!=d?d:void 0)}catch(h){As(new P("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.s,data:d}))}var f=a.J,g=String(e);g in f&&delete f[g]}},0);
tb(a.J,String(e))};
return c}
l.getPlayerType=function(){return this.P||(wx(this)?"html5":null)};
l.getLastError=function(){return this.lastError};
function zx(a){a.cancel();ox(a);a.P=null;a.config&&(a.config.loaded=!1);var b=wx(a);b&&(vx(a)||!Cx(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
l.cancel=function(){this.F&&mw(xx(this),this.F);window.clearTimeout(this.Ha);this.O=!1};
l.B=function(){zx(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){zs(b)}this.ka=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(y[this.i[a]]=null);this.ta=this.config=this.api=null;delete this.m;delete this.j;J.prototype.B.call(this)};
function Cx(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function xx(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Bx(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Ax(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===ml(c||"","&")[b]}
function tx(a){for(var b={},c=p(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?wb(e):e}return b}
;var Gx={},Hx="player_uid_"+(1E9*Math.random()>>>0);function Ix(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?nf(c):c;var e=Hx+"_"+Ta(c),f=Gx[e];if(f&&d)return Jx(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new nx(c,e,a,b,void 0);Gx[e]=f;dr("player-added",f.api);we(f,function(){delete Gx[f.getId()]});
return f.api}
function Jx(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Kx=null,Lx=null,Mx=null;function Nx(){Ox()}
function Px(){Ox()}
function Ox(){var a=Kx.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Qx(){Kx&&Kx.sendAbandonmentPing&&Kx.sendAbandonmentPing();L("PL_ATT")&&cx.dispose();for(var a=ki,b=0,c=nw.length;b<c;b++)a.ea(nw[b]);nw.length=0;lw("//static.doubleclick.net/instream/ad_status.js");ow=!1;Xk("DCLKSTAT",0);ue(Mx,Lx);Kx&&(Kx.removeEventListener("onVideoDataChange",Nx),Kx.destroy())}
;function Rx(a,b,c){a="ST-"+lc(a).toString(36);b=b?uc(b):"";c=c||5;gt()&&cm(a,b,c)}
;function Sx(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=L("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=L("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=pc(window.location.href);g&&f.push(g);g=pc(d);if(0<=gb(f,g)||!g&&0==d.lastIndexOf("/",0))if(M("autoescape_tempdata_url")&&(f=document.createElement("a"),gc(f,d),d=f.href),d&&(d=qc(d),f=d.indexOf("#"),d=0>f?d:d.slice(0,f)))if(e&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Ss()},b)),h){var h=parseInt(h,10);isFinite(h)&&0<h&&
Rx(d,b,h)}else Rx(d,b)}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var k=void 0===k?{}:k;var m=void 0===m?"":m;var q=void 0===q?window:q;c=q.location;a=wc(a,k)+m;var r=void 0===r?Xh:r;a:{r=void 0===r?Xh:r;for(k=0;k<r.length;++k)if(m=r[k],m instanceof Vh&&m.Xc(a)){r=new Pb(a,Qb);break a}r=void 0}r=r||Tb;if(r instanceof Pb)var w=Rb(r);else{b:if(Nh){try{w=new URL(r)}catch(t){w="https:";break b}w=w.protocol}else c:{w=document.createElement("a");try{w.href=r}catch(t){w=void 0;break c}w=
w.protocol;w=":"===w||""===w?"https:":w}w="javascript:"!==w?r:void 0}void 0!==w&&(c.href=w)}return!0}
;A("yt.setConfig",Xk);A("yt.config.set",Xk);A("yt.setMsg",Xs);A("yt.msgs.set",Xs);A("yt.logging.errors.log",zs);
A("writeEmbed",function(){var a=L("PLAYER_CONFIG");if(!a){var b=L("PLAYER_VARS");b&&(a={args:b})}rt(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=L("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);Ku();c=L("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=rl(window.location.href);
d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}Kx=Ix(a,c);Kx.addEventListener("onVideoDataChange",Nx);Kx.addEventListener("onReady",Px);a=L("POST_MESSAGE_ID","player");L("ENABLE_JS_API")?Mx=new Qw(Kx):L("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Lx=new Xw(window.parent,a,b),Mx=new Uw(Kx,Lx.connection));pw();M("ytidb_create_logger_embed_killswitch")||M("embeds_web_disable_nwl")||Hm();a={};Cw||(Cw=new Bw);Cw.install((a.flush_logs={callback:function(){Pr()}},
a));
M("embeds_web_disable_nwl")||Eq();M("ytidb_clear_embedded_player")&&ki.S(function(){var e;if(!sv){var f=or(),g={Gb:rv,vc:qv};f.h.set(g.Gb,g);g={Ub:{feedbackEndpoint:Gt(mv),modifyChannelNotificationPreferenceEndpoint:Gt(nv),playlistEditEndpoint:Gt(ov),subscribeEndpoint:Gt(kv),unsubscribeEndpoint:Gt(lv),webPlayerShareEntityServiceEndpoint:Gt(pv)}};var h=Ct.getInstance(),k={};h&&(k.client_location=h);if(void 0===m){tt.h||(tt.h=new tt);var m=tt.h}void 0===e&&(e=f.resolve(rv));Yu(g,e,m,k);m={Gb:dv,wc:Xu.h};
f.h.set(m.Gb,m);sv=f.resolve(dv)}$v()})});
var Tx=hl(function(){Ru();st();Iv.h||(Iv.h=new Iv);var a=Iv.h;var b=16623;var c=void 0===c?{}:c;Object.values(Ys).includes(b)||(As(new P("createClientScreen() called with a non-page VE",b)),b=83769);c.isHistoryNavigation||a.h.push({rootVe:b,key:c.key||""});a.o=[];a.v=[];c.Xb?Mv(a,b,c):Nv(a,b,c)}),Ux=hl(function(a){M("embeds_web_enable_load_player_from_page_show")&&!a.persisted&&(Ru(),st())}),Vx=hl(function(a){M("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Qx():a.persisted||(M("embeds_web_enable_load_player_from_page_show")?
Qx():$c?setTimeout(function(){Qx()},0):Qx())}),Wx=hl(Qx);
window.addEventListener?(window.addEventListener("load",Tx),M("embeds_web_enable_load_player_from_page_show")?(window.addEventListener("pageshow",Ux),window.addEventListener("pagehide",Vx)):$c?window.addEventListener("beforeunload",Vx):window.addEventListener("pagehide",Vx)):window.attachEvent&&(window.attachEvent("onload",Tx),window.attachEvent("onunload",Wx));A("yt.abuse.player.botguardInitialized",B("yt.abuse.player.botguardInitialized")||dx);
A("yt.abuse.player.invokeBotguard",B("yt.abuse.player.invokeBotguard")||ex);A("yt.abuse.dclkstatus.checkDclkStatus",B("yt.abuse.dclkstatus.checkDclkStatus")||qw);A("yt.player.exports.navigate",B("yt.player.exports.navigate")||Sx);A("yt.util.activity.init",B("yt.util.activity.init")||Tq);A("yt.util.activity.getTimeSinceActive",B("yt.util.activity.getTimeSinceActive")||Wq);A("yt.util.activity.setTimestamp",B("yt.util.activity.setTimestamp")||Uq);}).call(this);
