parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"MBKo":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var i=function(){function e(n){t(this,e),this.canvas=n,this.ctx=this.canvas.getContext("2d"),this.animating=!0,this.onResize=this.onResize.bind(this),this.render=this.render.bind(this)}return n(e,[{key:"setStageSize",value:function(){this.canvas.width=this.canvas.clientWidth,this.canvas.height=this.canvas.clientHeight}},{key:"update",value:function(t){this.onUpdate&&this.onUpdate(t)}},{key:"render",value:function(t){t||(t=0),this.update(t),this.animating&&requestAnimationFrame(this.render)}},{key:"onResize",value:function(){this.setStageSize(),this.update()}},{key:"init",value:function(){this.setStageSize(),this.render(),window.addEventListener("resize",this.onResize)}},{key:"ctx",get:function(){return this._ctx},set:function(t){this._ctx=t}},{key:"onUpdate",get:function(){return this._onUpdate||null},set:function(t){this._onUpdate=t}}]),e}(),s=i;exports.default=s;
},{}],"kV40":[function(require,module,exports) {
"use strict";var t=e(require("./components/stage/stage"));function e(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function n(t,e,i){return e&&a(t.prototype,e),i&&a(t,i),t}var s=new t.default(document.querySelector("#canvas")),c=s.ctx;s.init();var h=function(){function t(e,a,n,s){i(this,t),this.x=a,this.y=n,this.size=s,this.ctx=e}return n(t,[{key:"update",value:function(t){var e=Math.random();e<.3?this.x++:e<.6?this.y++:e<.8?this.x--:this.y--,this.size=Math.floor(5*Math.sin(.001*t)+6)}},{key:"draw",value:function(){this.ctx.fillStyle="rgba(255,255,255,.01)",this.ctx.fillRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height),c.fillStyle="black",this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.size,0,2*Math.PI),this.ctx.closePath(),this.ctx.fill()}}]),t}(),r=new h(c,.5*c.canvas.width,.5*c.canvas.height,2,2);s.onUpdate=function(t){r.update(t),r.draw()};
},{"./components/stage/stage":"MBKo"}]},{},["kV40"], null)
//# sourceMappingURL=/exercise1-2.a0814076.js.map