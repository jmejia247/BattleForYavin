!function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=1)}([function(t,e,i){},function(t,e,i){"use strict";i.r(e);i(0);function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var o=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=i,this.speed=35,this.width=18,this.height=8}var e,i,o;return e=t,(i=[{key:"draw",value:function(t){t.fillStyle="salmon",t.fillRect(this.x+100,this.y+45,this.width,this.height)}},{key:"update",value:function(t){this.draw(t),this.x+=this.speed}}])&&n(e.prototype,i),o&&n(e,o),t}();function s(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var r=function(){function t(e,i,n,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.width=150,this.height=30,this.gameWidth=e,this.gameHeight=i,this.ship=n,this.canShoot=!0,this.projectiles=[],this.ctx=o,this.maxSpeed=35,this.position={x:0,y:i/2}}var e,i,n;return e=t,(i=[{key:"moveLeft",value:function(){this.position.x-=this.maxSpeed}},{key:"moveRight",value:function(){this.position.x+=this.maxSpeed}},{key:"moveUp",value:function(){this.position.y-=this.maxSpeed}},{key:"moveDown",value:function(){this.position.y+=this.maxSpeed}},{key:"shootProjectile",value:function(){if(this.canShoot&&this.projectiles.length<10){var t=new o(this.position.x,this.position.y);this.projectiles.push(t)}}},{key:"draw",value:function(t){t.drawImage(this.ship,this.position.x,this.position.y,100,100);for(var e=0;e<this.projectiles.length;e++){var i=this.projectiles[e];i.update(this.ctx),i.x-i.width>=this.gameWidth&&this.projectiles.splice(e,1)}}},{key:"update",value:function(t){t&&(this.position.x,this.position.y,this.position.x<0&&(this.position.x=0),this.position.x+this.width>this.gameWidth&&(this.position.x=this.gameWidth-this.width),this.position.y<0&&(this.position.y=0),this.position.y+this.height>this.gameHeight&&(this.position.y=this.gameHeight-this.height))}}])&&s(e.prototype,i),n&&s(e,n),t}();function a(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var h=function(){function t(e,i,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.width=150,this.height=30,this.gameWidth=e,this.gameHeight=i,this.ship=n,this.maxSpeed=8,this.position={x:this.gameWidth,y:Math.random()*this.gameHeight}}var e,i,n;return e=t,(i=[{key:"moveLeft",value:function(){this.position.x-=this.maxSpeed}},{key:"draw",value:function(t){t.drawImage(this.ship,this.position.x,this.position.y,75,75)}},{key:"update",value:function(t,e,i){var n=this;t&&(this.position.x,this.position.y,this.draw(e),this.position.x-=this.maxSpeed,i.forEach((function(t){Math.hypot(t.x-n.position.x,t.y-n.position.y)})))}}])&&a(e.prototype,i),n&&a(e,n),t}();var u=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),document.addEventListener("keydown",(function(t){switch(t.preventDefault(),t.key){case"ArrowLeft":e.moveLeft();break;case"ArrowRight":e.moveRight();break;case"ArrowUp":e.moveUp();break;case"ArrowDown":e.moveDown();break;case" ":e.shootProjectile()}})),document.addEventListener("keyup",(function(t){switch(t.key){case" ":e.canShoot=!0}}))};window.addEventListener("load",(function(){var t=document.querySelector("#canvas"),e=t.getContext("2d");t.height=window.innerHeight,t.width=window.innerWidth;var i=document.getElementById("x-wing"),n=document.getElementById("tie"),o=new r(1435,700,i,e),s=(new h(1435,700,n),[]);setInterval((function(){s.length<10&&s.push(new h(1435,700,n))}),1e3),new u(o);var a=0;!function t(i){var n=i-a;a=i,e.clearRect(0,0,1440,790),o.update(n),o.draw(e),s.forEach((function(t){if(t.update(n,e,o.projectiles),t.position.x<0){var i=s.indexOf(t);s.splice(i,1)}})),requestAnimationFrame(t)}()}))}]);
//# sourceMappingURL=main.js.map