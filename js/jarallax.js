/*!
 * jaralax library
 * version: 0.2.1 public beta
 * http://jarallax.com/
 *
 * Copyright 2012, Jacko Hoogeveen
 * Dual licensed under the MIT or GPL Version 3 licenses.
 * http://jarallax.com/license.html
 * 
 * Date: 2/29/2012
 */

function hasNumbers(a){return/\d/.test(a)}Jarallax=function(a){this.jarallaxObject=[];this.animations=[];this.defaultValues=[];this.progress=0;this.controllers=[];this.maxProgress=1;if(a===undefined){this.controllers.push(new ControllerScroll)}else{if(a.length){this.controllers=a}else if(typeof a==="object"){this.controllers.push(a)}else{throw new Error('wrong controller data type: "'+typeof a+'". Expected "object" or "array"')}}for(var b=0;b<this.controllers.length;b++){this.controllers[b].activate(this)}};Jarallax.prototype.setProgress=function(a){if(a>1){a=1}else if(a<0){a=0}else{this.progress=a}for(j=0;j<this.defaultValues.length;j++){this.defaultValues[j].activate(a)}for(k=0;k<this.animations.length;k++){this.animations[k].activate(a)}for(l=0;l<this.controllers.length;l++){this.controllers[l].update(a)}};Jarallax.prototype.setDefault=function(a,b){if(!a){throw new Error("no selector defined.")}if(Jarallax.isValues(b)){var c=new JarallaxDefault(a,b);c.activate();this.defaultValues.push(c)}};Jarallax.prototype.addStatic=function(a,b){if(!a){throw new Error("no selector defined.")}if(Jarallax.isValues(b)){var c=new JarallaxStatic(a,b[0],b[1]);this.defaultValues.push(c)}};Jarallax.prototype.addAnimation=function(a,b){if(!a){throw new Error("no selector defined.")}if(Jarallax.isValues(b)){for(var c=0;c<b.length-1;c++){if(b[c]&&b[c+1]){if(b[c]["progress"]&&b[c+1]["progress"]){if(b[c+1]["progress"].indexOf("%")==-1){if(this.maxProgress<b[c+1]["progress"]){this.maxProgress=b[c+1]["progress"]}}this.animations.push(new JarallaxAnimation(a,b[c],b[c+1],this))}else{throw new Error("no animation boundry found.")}}else{throw new Error("bad animation data.")}}}};JarallaxDefault=function(a,b){this.selector=a;this.values=b};JarallaxDefault.prototype.activate=function(a){for(i in this.values){$(this.selector).css(i,this.values[i])}};JarallaxStatic=function(a,b,c){this.selector=a;this.values=values};JarallaxStatic.prototype.activate=function(a){var b;var c;if(this.startValues["progress"].indexOf("%")>=0){b=parseInt(this.startValues["progress"],10)/100}else if(hasNumbers(this.startValues["progress"])){b=this.maxProgress/parseInt(this.startValues["progress"],10)}if(this.endValues["progress"].indexOf("%")>=0){c=parseInt(this.endValues["progress"],10)/100}else if(hasNumbers(this.endValues["progress"])){c=this.maxProgress/parseInt(this.endValues["progress"],10)}if(progress>b&&progress<c){for(i in this.startValues){if(i!="progress"){$(this.selector).css(i,this.startValues[i])}}}};Jarallax.isValues=function(a){if(!a){throw new Error("no values set.")}if(typeof a!="object"){throw new Error('wrong data type values. expected: "object", got: "'+typeof a+'"')}if(a.size===0){throw new Error("Got an empty values object")}return true};Jarallax.getUnits=function(a){return a.replace(/\d+/g,"")};Jarallax.EASING={linear:function(a,b,c,d,e){return a/d*c+b},easeOut:function(a,b,c,d,e){if(e==undefined){e=2}return(Math.pow((d-a)/d,e)*-1+1)*c+b},easeIn:function(a,b,c,d,e){if(e==undefined){e=2}return Math.pow(a/d,e)*c+b},easeInOut:function(a,b,c,d,e){if(e==undefined){e=2}c/=2;a*=2;if(a<d){return Math.pow(a/d,e)*c+b}else{a=a-d;return(Math.pow((d-a)/d,e)*-1+1)*c+b+c}return Math.pow(a/d,e)*c+b}};Jarallax.EASING["none"]=Jarallax.EASING["linear"];JarallaxAnimation=function(a,b,c,d){this.progress=0;this.selector=a;this.startValues=b;this.endValues=c;this.jarallax=d};JarallaxAnimation.prototype.activate=function(a){if(this.progress!=a){var b;var c;var d;if(this.startValues["style"]==undefined){d={easing:"linear"}}else{d=this.startValues["style"]}if(this.startValues["progress"].indexOf("%")>=0){b=parseInt(this.startValues["progress"],10)/100}else if(hasNumbers(this.startValues["progress"])){b=parseInt(this.startValues["progress"],10)/this.jarallax.maxProgress}if(this.endValues["progress"].indexOf("%")>=0){c=parseInt(this.endValues["progress"],10)/100}else if(hasNumbers(this.endValues["progress"])){c=parseInt(this.endValues["progress"],10)/this.jarallax.maxProgress}if(this.startValues["event"]){this.dispatchEvent(this.progress,a,b,c)}if(a>=b&&a<=c){for(i in this.startValues){if(i!="progress"&&i!="style"&&i!="event"){if(undefined!=this.endValues[i]&&i!="display"){var e=Jarallax.getUnits(this.startValues[i]+"");e=e.replace("-","");var f=parseFloat(this.startValues[i]);var g=parseFloat(this.endValues[i]);var h=c-b;var j=a-b;var k=g-f;var l=Jarallax.EASING[d["easing"]](j,f,k,h,d["easing"]["power"]);l+=e;$(this.selector).css(i,l)}else{$(this.selector).css(i,this.startValues[i])}}}}this.progress=a}};JarallaxAnimation.prototype.dispatchEvent=function(a,b,c,d){var e=this.startValues["event"];var f={};f.animation=this;f.selector=this.selector;if(b>=c&&b<=d){if(e.start&&a<c){f.type="start";e.start(f)}if(e.animating){f.type="animating";e.animating(f)}if(e.forward&&a<b){f.type="forward";e.forward(f)}if(e.reverse&&a>b){f.type="reverse";e.reverse(f)}}else{if(e.complete&&a<d&&b>d){f.type="complete";e.complete(f)}if(e.rewinded&&a>c&&b<c){f.type="rewinded";e.rewinded(f)}}};ControllerScroll=function(){this.height=parseInt(jQuery("body").css("height"),10);this.target=$(window);this.scrollSpace=this.height-this.target.height()};ControllerScroll.prototype.activate=function(a){this.jarallax=a;this.target.bind("scroll",{me:this},this.onScroll)};ControllerScroll.prototype.deactivate=function(a){};ControllerScroll.prototype.onScroll=function(a){var b=a.data.me;var c=b.target.scrollTop();var d=c/b.scrollSpace;b.jarallax.setProgress(d)};ControllerScroll.prototype.update=function(a){};ControllerTime=function(a,b){this.interval=b;this.speed=a;this.forward=true};ControllerTime.prototype.onInterval=function(){this.jarallax.setProgress(this.progress);$("body").scrollTop(parseInt(jQuery("body").css("height"),10)*this.progress);if(this.progress>=1){this.progress=1;this.forward=false}else if(this.progress<=0){this.progress=0;this.forward=true}if(this.forward){this.progress+=this.speed}else{this.progress-=this.speed}};ControllerTime.prototype.activate=function(a){this.jarallax=a;this.progress=0;this.interval=$.interval(this.onInterval.bind(this),this.interval)};ControllerTime.prototype.deactivate=function(a){};ControllerTime.prototype.update=function(a){};ControllerDrag=function(a,b,c){this.object=$(a);this.start=b;this.end=c;this.container="";this.width;this.startX=0;this.startY=0};ControllerDrag.prototype.activate=function(a){this.jarallax=a;this.container="#scrollbar";this.object.draggable({containment:this.container,axis:"x"});this.object.bind("drag",{me:this},this.onDrag);this.container=$(this.container);this.width=$(this.container).innerWidth()-this.object.outerWidth()};ControllerDrag.prototype.onDrag=function(a){var b=parseInt($(this).css("left"),10);var c=b/a.data.me.width;a.data.me.jarallax.setProgress(c)};ControllerDrag.prototype.deactivate=function(a){};ControllerDrag.prototype.update=function(a){this.object.css("left",a*this.width)};ControllerKeyboard=function(a,b,c){this.repetitiveInput=c;this.preventDefault=b||false;this.keys=a||{38:-.01,40:.01};this.keysState=new Object};ControllerKeyboard.prototype.activate=function(a){this.jarallax=a;$(document.documentElement).keydown({me:this},this.keyDown);$(document.documentElement).keyup({me:this},this.keyUp);for(key in this.keys){this.keysState[key]=false}};ControllerKeyboard.prototype.deactivate=function(a){};ControllerKeyboard.prototype.keyDown=function(a){var b=a.data.me;for(key in b.keys){if(key==a.keyCode){if(b.keysState[key]!==true||b.repetitiveInput){b.jarallax.setProgress(b.jarallax.progress+b.keys[key])}b.keysState[key]=true;if(b.preventDefault){a.preventDefault()}}}};ControllerKeyboard.prototype.keyUp=function(a){var b=a.data.me;for(key in b.keys){if(key==a.keyCode){b.keysState[key]=false}}};ControllerKeyboard.prototype.update=function(a){};ControllerMousewheel=function(a,b){this.sensitivity=-a;this.preventDefault=b||false};ControllerMousewheel.prototype.activate=function(a){this.jarallax=a;$("body").bind("mousewheel",{me:this},this.onScroll)};ControllerMousewheel.prototype.deactivate=function(a){this.jarallax=a};ControllerMousewheel.prototype.onScroll=function(a,b){controller=a.data.me;controller.jarallax.setProgress(controller.jarallax.progress+controller.sensitivity*b);if(controller.preventDefault){a.preventDefault()}};ControllerMousewheel.prototype.update=function(a){};ControllerIpadScroll=function(){this.x=0;this.previousX=-1;this.top=700;this.moveRight=false};ControllerIpadScroll.prototype.activate=function(a,b){this.jarallax=a;this.values=b;$("body").bind("touchmove",{me:this},this.onScroll)};ControllerIpadScroll.prototype.onScroll=function(a){a.preventDefault();var b=a.data.me;var c=a.originalEvent.touches.item(0);if(b.previousX==-1){b.previousX=c.clientX}else{if(c.clientX-b.previousX<100&&c.clientX-b.previousX>-100){if(b.moveRight){b.x-=c.clientX-b.previousX}else{b.x+=c.clientX-b.previousX}b.x=b.x<1e3?b.x:1e3;b.x=b.x>0?b.x:0}b.previousX=c.clientX;b.jarallax.setProgress(b.x/b.top)}};ControllerIpadScroll.prototype.deactivate=function(a){};ControllerIpadScroll.prototype.update=function(a){}