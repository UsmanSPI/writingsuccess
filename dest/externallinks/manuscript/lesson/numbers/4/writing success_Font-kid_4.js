(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.wing2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66A1C1").s().p("ABOL5QgkAAhljCQgfg8gjhJIgdg+IAAgBQgsiJgricQhXk1gDhrQgChJAShHQAShGAig3QAshFBEgnQBEgnBVgFQBagGBJAlQA4AcAqAzQAfAlAWAtQANAdACALIABABIAAABQijQzgNA3QgNA4g7BhIgCADgAACrtQhYAGhDApQg8AkgpBBQgiA1gSBFQgRBEACBJQADBpBVExQArCaAtCOIAeBAQAiBHAfA7QA2BqAkAwQAYAhANACQAQgbASgjQAcg3AIgfQAMg2CjwyQgGgSgMgYQgUgqgdgiQhZhriKAAIgaABg");
	this.shape.setTransform(0,0,0.675,0.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B8DDF3").s().p("ADDB7QgTgyhQhdQhQhdiMAEQgsACgsALIgkAKIArgXQA2gaA3gKQCugfByCMQAVAZAUAxQAKAZAGAUIgxBEQADgHgIgVg");
	this.shape_1.setTransform(5.1,-40.5,0.675,0.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CAE5F7").s().p("ACjBaQg6hkhPhFQhOhFhxAYQgjAHgiAQIgbAOQBwhaB5ACQBVACBHArQAqAZAyBbQAaAtAQAoIg5BpQgNgkgdgyg");
	this.shape_2.setTransform(2.3,-37.1,0.675,0.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66A1C1").s().p("AAtHiQAEiqg1meIgyl+QAhCwAZDMQA4GggFCtg");
	this.shape_3.setTransform(0.6,17.5,0.675,0.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66A1C1").s().p("ABOL5QgkAAhljCQgfg8gjhJIgdg+IAAgBQgsiJgricQhXk1gDhrQgChJAShHQAShGAig3QAshFBEgnQBEgnBVgFQBagGBJAlQA4AcAqAzQAfAlAWAtQANAdACALIABABIAAABQijQzgNA3QgNA4g7BhIgCADgAACrtQhYAGhDApQg8AkgpBBQgiA1gSBFQgRBEACBJQADBpBVExQArCaAtCOIAeBAQAiBHAfA7QA2BqAkAwQAYAhANACQAQgbASgjQAcg3AIgfQAMg2CjwyQgGgSgMgYQgUgqgdgiQhZhriKAAIgaABg");
	this.shape_4.setTransform(0,0,0.675,0.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D9EAF6").s().p("Ag2I1IhfjDQgriHgribQhXk3gEhrQgEiYBIhyQBYiLCsgLQCfgLBjB3QAxA7ASA+QiiQxgNA4QgIAighA/QgQAfgPAYIgBAAQgiAAhji/g");
	this.shape_5.setTransform(-0.1,0,0.675,0.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,-51.4,44.8,102.8);


(lib.wing1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66A1C1").s().p("An5MuQgMgHgBgkQgFiZAJi8QARl/BFjIIAEgNQAdhYAag+QAthqA3hSQBHhtBahDQCPhsB2gVQBsgUBrAzQAwAXAkA2QAjA2ATBPQARBLgCBPQgCBQgVBGQhvF9kiEHQiLCTjbCWQibBpg/AdQgMAFgGAAQgFAAgDgCgABAsEQhLAghbBDQhYBChHBsQg2BSgtBpQgYA6gfBbIgEAOQhEDGgRF7QgJC9AFCaQABAeAHAFQAEACANgGQA/gcCZhpQDbiVCKiTIABAAQEfkFBvl7QAUhFAChOQAChPgRhJQgShMgig1Qgig0gugWQhLgkhLAAQhIAAhOAhg");
	this.shape.setTransform(0,0,0.675,0.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B8DDF3").s().p("AkaKaQB3hfCQibQB4iDBXhxQCNi+ARjZQASjjiDiLQhwh2ikAfQgzAKgyAYIgoAVQCFhnB1gYQA7gMAhAJIAuAHQA4ANAsAfQCQBjgPDuQgQD1iBDTQgsBJhFBXQhLBagfAoQhMBkjdCeIg2AlQhRBBhGAlg");
	this.shape_1.setTransform(5.6,-3.2,0.675,0.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CAE5F7").s().p("Aj4JdQDbjECaixQCzjMAejEQAbizhcjJQhIigioABQgzAAg4AQIgtAQQBWhIBtgOQBlgNBxAkQA1ARAmBAQAlA9AOBcQAhDMhRDUQhFC0ieC9QgyA7g0A1IgrApIkyD3IiKBUQBOg+Buhig");
	this.shape_2.setTransform(1.5,-0.3,0.675,0.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66A1C1").s().p("AlPH9QBcjZEompQCTjSCIipQiACviTDSQkpGqhaDWg");
	this.shape_3.setTransform(-9,19.4,0.675,0.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66A1C1").s().p("AjTHfQBnkwDXnAQA3hwAyhhIhkDTQjTHBhnExg");
	this.shape_4.setTransform(-20.6,21.1,0.675,0.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D9EAF6").s().p("An4MqQgJgHAAggQgFiWAIi+QARl9BFjJQAhhiAWg1QAuhxA5hWQBJhvBYhAQCOhrB1gVQBqgUBpAyQBiAvAlCgQAkCbgrCTQhuF6kiEHQiOCXjeCXQibBog3AYQgLAFgGAAQgEAAgCgBg");
	this.shape_5.setTransform(0,0,0.675,0.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.1,-55.1,70.3,110.2);


(lib.triangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjXjAIAJAFIA0AbQAaAPAcAMQAbAMAaAFQAbAGAaAAQAcACAcgHQAZgHAagOIA1gcQAagOAYgPIjaGDg");
	this.shape.setTransform(0.4,-6.5,0.563,0.563);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.7,-17.4,24.3,21.8);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJ+d8IAA60I95AAQhfAAgQgcIgOhmIAA+3QAAi6CgAAIAHAAQC1AAAADDIAAbJIaaAAIAA7LQAAjGClAAQCwAAAADGIAAbLIB4gHQDIAABBBGQAlAlAABlQAACkiSAAIkUgCIAAakQAADBiuAAQinAAAAi1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-209.6,280.2,419.4);


(lib.ear2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CE763A").s().p("Ag+A/QgagaAAglQAAgjAagbQAagaAkAAQAlAAAaAaQAaAbAAAjQAAAlgaAaQgaAaglAAQgkAAgagagAg3g3QgXAYAAAfQAAAhAXAXQAXAXAgAAQAgAAAYgXQAXgXAAghQAAgfgXgYQgYgXggAAQggAAgXAXg");
	this.shape.setTransform(-10.6,-3.7,0.675,0.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1D148").s().p("AgnAoQgQgQAAgYQAAgWAQgRQAQgQAXAAQAXAAARAQQAQARAAAWQAAAXgQARQgRAQgXAAQgWAAgRgQg");
	this.shape_1.setTransform(-11.9,-4.8,0.675,0.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2B844").s().p("AgrAsQgTgSAAgaQAAgZATgTQASgSAZAAQAaAAASASQATATAAAZQAAAagTASQgSATgaAAQgZAAgSgTg");
	this.shape_2.setTransform(-11.5,-4.4,0.675,0.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EEAB42").s().p("Ag6A8QgZgZAAgjQAAgiAZgZQAYgYAiAAQAjAAAYAYQAZAZAAAiQAAAjgZAZQgYAYgjAAQgiAAgYgYg");
	this.shape_3.setTransform(-10.6,-3.7,0.675,0.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#040505").s().p("ABmAtQg5g7gugdQgvgdg7gMIg0gGIAAgKIA2AGQA8ANAwAeQAvAdA7A9QAeAfAVAZIgIAGQgVgZgdgfg");
	this.shape_4.setTransform(5.8,2.8,0.675,0.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.6,-9.6,33.2,19.3);


(lib.ear1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CE763A").s().p("AhNBNQggggAAgtQAAgtAgggQAggfAtgBQAtABAgAfQAhAgAAAtQAAAtghAgQggAhgtAAQgtAAggghgAhGhFQgdAcAAApQAAApAdAdQAeAeAoAAQApAAAdgeQAegdAAgpQAAgogegdQgdgegpAAQgoAAgeAeg");
	this.shape.setTransform(-5.3,-5.4,0.675,0.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1D148").s().p("AgxAxQgUgUAAgdQAAgcAUgVQAVgUAcAAQAdAAAUAUQAVAVAAAcQAAAdgVAUQgUAVgdAAQgcAAgVgVg");
	this.shape_1.setTransform(-6.9,-6.9,0.675,0.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2B844").s().p("Ag2A3QgXgWAAghQAAgfAXgXQAXgXAfAAQAhAAAWAXQAXAXAAAfQAAAhgXAWQgWAXghAAQgfAAgXgXg");
	this.shape_2.setTransform(-6.3,-6.3,0.675,0.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EEAB42").s().p("AhJBKQgfgeAAgsQAAgqAfgfQAfgfAqAAQArAAAfAfQAfAfAAAqQAAAsgfAeQgfAfgrAAQgqAAgfgfg");
	this.shape_3.setTransform(-5.3,-5.5,0.675,0.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#040505").s().p("Agbg6Ig4gzIAFgJIA7A2QA/BIAoBrIgJAEQgnhpg/hIg");
	this.shape_4.setTransform(6.9,4.8,0.675,0.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.6,-12.8,25.3,25.7);


(lib.V_ar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-89.9,1,1,0,0,0,0.4,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:41.8},74).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AiGlBIAAikIENAAIAACkg");
	var mask_graphics_1 = new cjs.Graphics().p("AiGBbIAAi1IENAAIAAC1g");
	var mask_graphics_2 = new cjs.Graphics().p("AiGBkIAAjHIENAAIAADHg");
	var mask_graphics_3 = new cjs.Graphics().p("AiGBtIAAjZIENAAIAADZg");
	var mask_graphics_4 = new cjs.Graphics().p("AiGB1IAAjpIENAAIAADpg");
	var mask_graphics_5 = new cjs.Graphics().p("AiGB+IAAj7IENAAIAAD7g");
	var mask_graphics_6 = new cjs.Graphics().p("AiGCHIAAkNIENAAIAAENg");
	var mask_graphics_7 = new cjs.Graphics().p("AiGCQIAAkfIENAAIAAEfg");
	var mask_graphics_8 = new cjs.Graphics().p("AiGCZIAAkwIENAAIAAEwg");
	var mask_graphics_9 = new cjs.Graphics().p("AiGChIAAlCIENAAIAAFCg");
	var mask_graphics_10 = new cjs.Graphics().p("AiGCqIAAlTIENAAIAAFTg");
	var mask_graphics_11 = new cjs.Graphics().p("AiGCzIAAllIENAAIAAFlg");
	var mask_graphics_12 = new cjs.Graphics().p("AiGC8IAAl3IENAAIAAF3g");
	var mask_graphics_13 = new cjs.Graphics().p("AiGDFIAAmJIENAAIAAGJg");
	var mask_graphics_14 = new cjs.Graphics().p("AiGDNIAAmZIENAAIAAGZg");
	var mask_graphics_15 = new cjs.Graphics().p("AiGDXIAAmtIENAAIAAGtg");
	var mask_graphics_16 = new cjs.Graphics().p("AiGDfIAAm9IENAAIAAG9g");
	var mask_graphics_17 = new cjs.Graphics().p("AiGDoIAAnPIENAAIAAHPg");
	var mask_graphics_18 = new cjs.Graphics().p("AiGDxIAAnhIENAAIAAHhg");
	var mask_graphics_19 = new cjs.Graphics().p("AiGD6IAAnzIENAAIAAHzg");
	var mask_graphics_20 = new cjs.Graphics().p("AiGEDIAAoFIENAAIAAIFg");
	var mask_graphics_21 = new cjs.Graphics().p("AiGEMIAAoXIENAAIAAIXg");
	var mask_graphics_22 = new cjs.Graphics().p("AiGEVIAAopIENAAIAAIpg");
	var mask_graphics_23 = new cjs.Graphics().p("AiGEdIAAo5IENAAIAAI5g");
	var mask_graphics_24 = new cjs.Graphics().p("AiGEmIAApLIENAAIAAJLg");
	var mask_graphics_25 = new cjs.Graphics().p("AiGEvIAApdIENAAIAAJdg");
	var mask_graphics_26 = new cjs.Graphics().p("AiGE4IAApvIENAAIAAJvg");
	var mask_graphics_27 = new cjs.Graphics().p("AiGFBIAAqAIENAAIAAKAg");
	var mask_graphics_28 = new cjs.Graphics().p("AiGFJIAAqSIENAAIAAKSg");
	var mask_graphics_29 = new cjs.Graphics().p("AiGFSIAAqjIENAAIAAKjg");
	var mask_graphics_30 = new cjs.Graphics().p("AiGFbIAAq1IENAAIAAK1g");
	var mask_graphics_31 = new cjs.Graphics().p("AiGFkIAArHIENAAIAALHg");
	var mask_graphics_32 = new cjs.Graphics().p("AiGFtIAArZIENAAIAALZg");
	var mask_graphics_33 = new cjs.Graphics().p("AiGF1IAArqIENAAIAALqg");
	var mask_graphics_34 = new cjs.Graphics().p("AiGF/IAAr8IENAAIAAL8g");
	var mask_graphics_35 = new cjs.Graphics().p("AiGGHIAAsNIENAAIAAMNg");
	var mask_graphics_36 = new cjs.Graphics().p("AiGGQIAAsfIENAAIAAMfg");
	var mask_graphics_37 = new cjs.Graphics().p("AiGGZIAAsxIENAAIAAMxg");
	var mask_graphics_38 = new cjs.Graphics().p("AiGGiIAAtDIENAAIAANDg");
	var mask_graphics_39 = new cjs.Graphics().p("AiGGqIAAtUIENAAIAANUg");
	var mask_graphics_40 = new cjs.Graphics().p("AiGGzIAAtlIENAAIAANlg");
	var mask_graphics_41 = new cjs.Graphics().p("AiGG8IAAt3IENAAIAAN3g");
	var mask_graphics_42 = new cjs.Graphics().p("AiGHFIAAuJIENAAIAAOJg");
	var mask_graphics_43 = new cjs.Graphics().p("AiGHOIAAubIENAAIAAObg");
	var mask_graphics_44 = new cjs.Graphics().p("AiGHXIAAutIENAAIAAOtg");
	var mask_graphics_45 = new cjs.Graphics().p("AiGHgIAAu/IENAAIAAO/g");
	var mask_graphics_46 = new cjs.Graphics().p("AiGHoIAAvPIENAAIAAPPg");
	var mask_graphics_47 = new cjs.Graphics().p("AiGHxIAAvhIENAAIAAPhg");
	var mask_graphics_48 = new cjs.Graphics().p("AiGH6IAAvzIENAAIAAPzg");
	var mask_graphics_49 = new cjs.Graphics().p("AiGIDIAAwFIENAAIAAQFg");
	var mask_graphics_50 = new cjs.Graphics().p("AiGIMIAAwXIENAAIAAQXg");
	var mask_graphics_51 = new cjs.Graphics().p("AiGIUIAAwoIENAAIAAQog");
	var mask_graphics_52 = new cjs.Graphics().p("AiGIdIAAw5IENAAIAAQ5g");
	var mask_graphics_53 = new cjs.Graphics().p("AiGImIAAxLIENAAIAARLg");
	var mask_graphics_54 = new cjs.Graphics().p("AiGIvIAAxdIENAAIAARdg");
	var mask_graphics_55 = new cjs.Graphics().p("AiGI4IAAxvIENAAIAARvg");
	var mask_graphics_56 = new cjs.Graphics().p("AiGJBIAAyBIENAAIAASBg");
	var mask_graphics_57 = new cjs.Graphics().p("AiGJKIAAyTIENAAIAASTg");
	var mask_graphics_58 = new cjs.Graphics().p("AiGJSIAAykIENAAIAASkg");
	var mask_graphics_59 = new cjs.Graphics().p("AiGJbIAAy1IENAAIAAS1g");
	var mask_graphics_60 = new cjs.Graphics().p("AiGJkIAAzHIENAAIAATHg");
	var mask_graphics_61 = new cjs.Graphics().p("AiGJtIAAzZIENAAIAATZg");
	var mask_graphics_62 = new cjs.Graphics().p("AiGJ2IAAzrIENAAIAATrg");
	var mask_graphics_63 = new cjs.Graphics().p("AiGJ/IAAz9IENAAIAAT9g");
	var mask_graphics_64 = new cjs.Graphics().p("AiGKIIAA0OIENAAIAAUOg");
	var mask_graphics_65 = new cjs.Graphics().p("AiGKQIAA0fIENAAIAAUfg");
	var mask_graphics_66 = new cjs.Graphics().p("AiGKZIAA0xIENAAIAAUxg");
	var mask_graphics_67 = new cjs.Graphics().p("AiGKiIAA1DIENAAIAAVDg");
	var mask_graphics_68 = new cjs.Graphics().p("AiGKrIAA1VIENAAIAAVVg");
	var mask_graphics_69 = new cjs.Graphics().p("AiGKzIAA1mIENAAIAAVmg");
	var mask_graphics_70 = new cjs.Graphics().p("AiGK8IAA13IENAAIAAV3g");
	var mask_graphics_71 = new cjs.Graphics().p("AiGLFIAA2JIENAAIAAWJg");
	var mask_graphics_72 = new cjs.Graphics().p("AiGLOIAA2bIENAAIAAWbg");
	var mask_graphics_73 = new cjs.Graphics().p("AiGLXIAA2tIENAAIAAWtg");
	var mask_graphics_74 = new cjs.Graphics().p("AiGLgIAA2/IENAAIAAW/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:-48.6}).wait(1).to({graphics:mask_graphics_1,x:0,y:-88.1}).wait(1).to({graphics:mask_graphics_2,x:0,y:-87.3}).wait(1).to({graphics:mask_graphics_3,x:0,y:-86.4}).wait(1).to({graphics:mask_graphics_4,x:0,y:-85.5}).wait(1).to({graphics:mask_graphics_5,x:0,y:-84.7}).wait(1).to({graphics:mask_graphics_6,x:0,y:-83.8}).wait(1).to({graphics:mask_graphics_7,x:0,y:-82.9}).wait(1).to({graphics:mask_graphics_8,x:0,y:-82}).wait(1).to({graphics:mask_graphics_9,x:0,y:-81.2}).wait(1).to({graphics:mask_graphics_10,x:0,y:-80.3}).wait(1).to({graphics:mask_graphics_11,x:0,y:-79.4}).wait(1).to({graphics:mask_graphics_12,x:0,y:-78.6}).wait(1).to({graphics:mask_graphics_13,x:0,y:-77.7}).wait(1).to({graphics:mask_graphics_14,x:0,y:-76.8}).wait(1).to({graphics:mask_graphics_15,x:0,y:-76}).wait(1).to({graphics:mask_graphics_16,x:0,y:-75.1}).wait(1).to({graphics:mask_graphics_17,x:0,y:-74.2}).wait(1).to({graphics:mask_graphics_18,x:0,y:-73.4}).wait(1).to({graphics:mask_graphics_19,x:0,y:-72.5}).wait(1).to({graphics:mask_graphics_20,x:0,y:-71.6}).wait(1).to({graphics:mask_graphics_21,x:0,y:-70.8}).wait(1).to({graphics:mask_graphics_22,x:0,y:-69.9}).wait(1).to({graphics:mask_graphics_23,x:0,y:-69}).wait(1).to({graphics:mask_graphics_24,x:0,y:-68.1}).wait(1).to({graphics:mask_graphics_25,x:0,y:-67.3}).wait(1).to({graphics:mask_graphics_26,x:0,y:-66.4}).wait(1).to({graphics:mask_graphics_27,x:0,y:-65.5}).wait(1).to({graphics:mask_graphics_28,x:0,y:-64.7}).wait(1).to({graphics:mask_graphics_29,x:0,y:-63.8}).wait(1).to({graphics:mask_graphics_30,x:0,y:-62.9}).wait(1).to({graphics:mask_graphics_31,x:0,y:-62.1}).wait(1).to({graphics:mask_graphics_32,x:0,y:-61.2}).wait(1).to({graphics:mask_graphics_33,x:0,y:-60.3}).wait(1).to({graphics:mask_graphics_34,x:0,y:-59.5}).wait(1).to({graphics:mask_graphics_35,x:0,y:-58.6}).wait(1).to({graphics:mask_graphics_36,x:0,y:-57.7}).wait(1).to({graphics:mask_graphics_37,x:0,y:-56.9}).wait(1).to({graphics:mask_graphics_38,x:0,y:-56}).wait(1).to({graphics:mask_graphics_39,x:0,y:-55.1}).wait(1).to({graphics:mask_graphics_40,x:0,y:-54.3}).wait(1).to({graphics:mask_graphics_41,x:0,y:-53.4}).wait(1).to({graphics:mask_graphics_42,x:0,y:-52.5}).wait(1).to({graphics:mask_graphics_43,x:0,y:-51.7}).wait(1).to({graphics:mask_graphics_44,x:0,y:-50.8}).wait(1).to({graphics:mask_graphics_45,x:0,y:-49.9}).wait(1).to({graphics:mask_graphics_46,x:0,y:-49.1}).wait(1).to({graphics:mask_graphics_47,x:0,y:-48.2}).wait(1).to({graphics:mask_graphics_48,x:0,y:-47.3}).wait(1).to({graphics:mask_graphics_49,x:0,y:-46.5}).wait(1).to({graphics:mask_graphics_50,x:0,y:-45.6}).wait(1).to({graphics:mask_graphics_51,x:0,y:-44.7}).wait(1).to({graphics:mask_graphics_52,x:0,y:-43.9}).wait(1).to({graphics:mask_graphics_53,x:0,y:-43}).wait(1).to({graphics:mask_graphics_54,x:0,y:-42.1}).wait(1).to({graphics:mask_graphics_55,x:0,y:-41.3}).wait(1).to({graphics:mask_graphics_56,x:0,y:-40.4}).wait(1).to({graphics:mask_graphics_57,x:0,y:-39.5}).wait(1).to({graphics:mask_graphics_58,x:0,y:-38.6}).wait(1).to({graphics:mask_graphics_59,x:0,y:-37.8}).wait(1).to({graphics:mask_graphics_60,x:0,y:-36.9}).wait(1).to({graphics:mask_graphics_61,x:0,y:-36}).wait(1).to({graphics:mask_graphics_62,x:0,y:-35.2}).wait(1).to({graphics:mask_graphics_63,x:0,y:-34.3}).wait(1).to({graphics:mask_graphics_64,x:0,y:-33.4}).wait(1).to({graphics:mask_graphics_65,x:0,y:-32.6}).wait(1).to({graphics:mask_graphics_66,x:0,y:-31.7}).wait(1).to({graphics:mask_graphics_67,x:0,y:-30.8}).wait(1).to({graphics:mask_graphics_68,x:0,y:-30}).wait(1).to({graphics:mask_graphics_69,x:0,y:-29.1}).wait(1).to({graphics:mask_graphics_70,x:0,y:-28.2}).wait(1).to({graphics:mask_graphics_71,x:0,y:-27.4}).wait(1).to({graphics:mask_graphics_72,x:0,y:-26.5}).wait(1).to({graphics:mask_graphics_73,x:0,y:-25.6}).wait(1).to({graphics:mask_graphics_74,x:0,y:-24.8}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAAwgMAAAAhB");
	this.shape.setTransform(0,21.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.1,-89.9,24.3,21.9);


(lib.honeybee = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#040505").s().p("AGmIdQAIhqgshhQgnhOhdggQg8gWhHAAIgaABQATgQAdhBQAdhDAGgsQAIgYgCgwQgCg+gUg3Qg5iiiwgtQg/gPg5gBQh5ABhgBCQgwAggYAiQABgWgIgXQgPgvgsgIIgQgCQgpAAg0AlQgZATgSASQAYg4A+hCQB8iEC+gzQBwgdBpAAQDKAACrBpQB+BOBVB0QBKBTAzDAQAZBfAKBPIAIANQAJATAGAXQASBMgUBiQgVBiiDBjQhCAxg+AeQAMgiAEg0gAECDbQBgAiApBRIAAABQAsBhgHBuQgDAlgHAdQA0gdA2goQCBhgATheQAUhdgRhKQgGgXgIgSIgIgNIgCgFQgKhQgZhdQgyi9hJhRIAAgBQhThyh9hNQiphojHAAQhnAAhvAdQhnAchVA0QhEArg1A4QggAigZAlQA2gnAtAAIASACQAyAKAQA0QAEANACAKQAagcAggVQBihEB9AAQA+AAA9AQQCUAmBDB4QAmBDAIBUQAFA/gKAjQgFAlgXA4QgWA3gWAfIAFAAQBJAAA+AXg");
	this.shape.setTransform(-44.6,-7.7,0.675,0.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#181818").s().p("AhkHhQA4gcA5gpQB0hTAKhEQAMhPgOhBQgNg+ghggQgThqgrh+QhUj1h0hbIAXAQQAiAaAfAgQBkBjAkBsQAmBwATBOQAGAcASBdIAbBHQAWBTgXA7IgYBCQgPAjgWAbQg2BFifBZg");
	this.shape_1.setTransform(-9.2,-2.6,0.675,0.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CE763A").s().p("AheAPQAagiArgPQAsgPAnAFQATADAjANQgTgFgbgCQg1gDglAOQgmAPgcAdQgOAPgHAMQAFgPAMgRg");
	this.shape_2.setTransform(-47.3,9.1,0.675,0.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CE763A").s().p("Ag+BpQgigggLgxQgNg1AXgvQAXguAtgKQAsgLApAhQAoAfAMA4QANA2gXAuQgXAvgtAKQgJACgLAAQgnAAghgfgAgbh7QgoAJgVArQgVAqAMAzQALA0AlAdQAlAeAogJQApgJAUgrQAVgrgLgyQgMg0glgdQgcgXgfAAQgKAAgIACg");
	this.shape_3.setTransform(-55.2,-4.7,0.675,0.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRATQgIgIAAgLQAAgKAIgIQAHgHAKAAQALAAAHAHQAIAIAAAKQAAALgIAIQgHAHgLAAQgKAAgHgHg");
	this.shape_4.setTransform(-59.5,-5.5,0.675,0.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZAaQgLgKAAgQQAAgOALgLQALgKAOgBQAPABALAKQALALAAAOQAAAQgLAKQgLAKgPAAQgOAAgLgKg");
	this.shape_5.setTransform(-56.4,-8.8,0.675,0.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#010202").s().p("AggBFQgZgUgIgiQgHghAOgcQANgcAcgHQAagGAZAUQAYAUAIAhQAHAhgOAdQgNAcgcAGQgGABgHAAQgTAAgSgOg");
	this.shape_6.setTransform(-55.2,-4.7,0.675,0.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EB9C3F").s().p("AgVBhQgpgrgCg/QgCg/AygiQAQgKASgHIAQgDIALAVQAMAbAFAeQARBdg9BSQgTgIgUgWg");
	this.shape_7.setTransform(-58,-4.9,0.675,0.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EEAB42").s().p("Ag0BsQgmgfgMg2QgMg0AWgsQAVgtArgKQAqgJAnAfQAmAfAMA1QAMA0gVAtQgWAsgrAKQgLACgKAAQgeAAgegXg");
	this.shape_8.setTransform(-55.2,-4.7,0.675,0.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CE763A").s().p("AhHETQgngSggghQhGhEgXhnQgNg5AGg5QAGg5AYgxQAYgxAmggQAmggAvgLQAwgLAvANQAwANArAiQAqAiAeAxQAeAxANA7QARBLgPBJQgPBJgsA0QAAAAAAABQAAAAgBAAQAAAAAAAAQAAgBgBAAIgCgDIgDgBQAAgBgBAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAqgzAOhGQAPhHgRhJQgNg5gdgwQgdgwgpghQgpgggtgMQgtgMgtAKQguAKgkAeQgkAfgXAvQgXAvgGA4QgGA3ANA4QAWBjBEBDQAgAgAlASQAmASAmACIACABIgFAJQgngDgngTg");
	this.shape_9.setTransform(-55.1,-8.4,0.675,0.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAHEkQhQgGhDhCQhDhDgXhlQgah2AwhjQAxhkBfgVQBfgWBXBFQBWBGAbB3QARBKgPBIQgPBGgoAyQgcgDg3AOQgjAKgdAcQgPAPgHAMg");
	this.shape_10.setTransform(-55.1,-8.4,0.675,0.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPAQQgGgHAAgJQAAgJAGgFQAHgHAIAAQAJAAAHAHQAGAFAAAJQAAAJgGAHQgHAGgJAAQgIAAgHgGg");
	this.shape_11.setTransform(-88.8,-7.5,0.675,0.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgKALQgEgFAAgGQAAgGAEgEQAFgEAFAAQAHAAAEAEQAEAEAAAGQAAAGgEAFQgEAEgHAAQgFAAgFgEg");
	this.shape_12.setTransform(-90.8,-5.5,0.675,0.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#010202").s().p("AgQAzQgQgFgGgTQgHgTAHgUQAHgVAQgLQAQgLAQAFQAQAGAGASQAHATgHAUQgHAVgQALQgLAHgLAAQgFAAgFgBg");
	this.shape_13.setTransform(-88.9,-4.7,0.675,0.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CE763A").s().p("AgcBYQgcgJgMggQgMghAMgjQAMglAcgTQAcgUAdAKQAcAJAMAgQAMAhgMAjQgKAfgWATQgXATgYAAQgJAAgJgDgAgWhFQgaARgLAiQgKAfAKAdQAKAdAYAIQAZAIAYgRQAZgSALghQAKgfgKgdQgKgdgYgIQgHgCgIAAQgQAAgRALg");
	this.shape_14.setTransform(-88.9,-4.7,0.675,0.675);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EB9C3F").s().p("AgzAuQgKgkATgmQATgoAkgFQAbgDAPALIAAARQgBAVgGATQgUA9hCAWQgIgKgFgTg");
	this.shape_15.setTransform(-89.9,-5.3,0.675,0.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EEAB42").s().p("AgaBUQgbgJgLgfQgKgeALgiQALgjAbgSQAagSAaAIQAbAJALAfQALAegMAiQgLAjgbASQgSAMgRAAQgJAAgIgCg");
	this.shape_16.setTransform(-88.9,-4.7,0.675,0.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CE763A").s().p("AhODuQg3gTgNhUQgLhKAZhgQAZhiBKg9QBFg7A/AMQAVAEANAYQAXApgHBaQgGBZghBRQg+CchaAAQgTAAgRgGgAgbi7QhHA7gZBfQgXBaAJBIQALBSA0ASQAzARAsgkQAtglAjhZQAghPAHhWQAGhYgWgoQgKgTgRgDIgRgCQg0AAg3Aug");
	this.shape_17.setTransform(-90.9,-8.6,0.675,0.675);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhMDpQg1gSgMhRQgLhLAZheQAZhgBIg8QBDg5A9AMQAwAIAABtQAABogoBlQgmBdgwAlQgeAXggAAQgRAAgRgGg");
	this.shape_18.setTransform(-90.9,-8.5,0.675,0.675);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#272727").s().p("AGmIdQAIhpgshhQgwhfh9gcQgogJgqgBIgiABQATgQAdhBQAdhDAGgsQAIgYgCgwQgCg+gUg3Qg5ihiwgtQisgsiIBMQhEAlghAvQABgWgIgXQgPgugsgJQgsgJg6AoQgdAUgVAVQAYg4A+hCQB8iEC+gyQEbhLDuBxQCqBRBuCWQBKBTAzDAQAZBfAKBPIAIAOQAJASAGAYQASBLgUBiQgVBiiDBjQhCAyg+AdQAMghAEg1g");
	this.shape_19.setTransform(-44.6,-7.7,0.675,0.675);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C67239").s().p("AgKAfQAPgaADgWIAAgTQAIAigJAWQgFAMgFAFg");
	this.shape_20.setTransform(-46.2,41.3,0.675,0.675);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#DC4B67").s().p("AhgA+QAHgWARgYQAggvAugUQAcgMAigBQAVgBAIACIgBAKQgCgCgZABQghABgaALQgsATgfAtQgPAYgHATg");
	this.shape_21.setTransform(-57.6,38.5,0.675,0.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CE763A").s().p("AgDCpQgKgGgSgPIgDgDQgUgPhBheQgJgMgfgkQgfgjgBAAIAIgHIAfAkQAhAkAIAMQA+BbAVARIADACQAUAQALAGQAUAJAVgEQAsgLAgg5QA1haAGi7IAKABQgGC8g2BeQgkA8guAMIgSACQgRAAgSgKg");
	this.shape_22.setTransform(-61.9,33.1,0.675,0.675);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CE763A").s().p("AjQBSIgmgTIAeAMQAoAMAtACQAlACArgGQAvgHAigPQBPggBJhEIA5g+IAIAFIg7BAQhKBFhRAhQhDAchKAAQgyAAgygSg");
	this.shape_23.setTransform(-62.2,23.7,0.675,0.675);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#511311").s().p("AADBfIgQACQghgTgHgzIAAguIBrhNIAABUQABAmgOAnQgGAUgHAMQgGgEgTACg");
	this.shape_24.setTransform(-53.3,28,0.675,0.675);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E06A7B").s().p("AhEA/IgZgQQACgQAMgVQAXgoAqgWQAogVAmgDQAUgCALADIgaBDQgQAqglAYQgWAPgYAEIgDABQgLAAgYgPg");
	this.shape_25.setTransform(-57.4,39.6,0.675,0.675);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#661916").s().p("AAFCqIglgbIiUi2IgDgKQAfALA6gFQAwgEAzgNQAlgKBKg0IBDgzIABARQAAAZgBAhQgBAigYBSQgMAqgMAjQgJAYgkAcQgcAWgOAEIgKABQgLAAgVgEg");
	this.shape_26.setTransform(-61.9,33,0.675,0.675);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CE763A").s().p("AgsCEQgbgIgXgbQgYgbgJgiQgJghAHgeQAHgeAXgYQAcgeAogOQAggMAlAAQArABAhANQghgIgqADQhUAEgvAyQgrAtARA+QAJAgAWAZQAVAZAZAHQARAFAYgBQAagBAZgHQArgNAngYQgbAYgkARQgRAHgWAFQgUAEgLAAQgWAAgWgGg");
	this.shape_27.setTransform(-86.3,17.9,0.675,0.675);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C67239").s().p("AgIATQglgDgSgOIgKgNIASAKQAZAJAYAAQAbABAdgNQAPgHAJgHIgTAUQgYARgfAAIgIAAg");
	this.shape_28.setTransform(-44.2,16.2,0.675,0.675);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CE763A").s().p("AgPKSQg7gFgugwQgagcgRghQgigDgxgPQhZgbhthAIgBAAQiGhcgrh6QgRgxgEg7QgDgoAEg8QAMi/BGjAQAWg8AZg1IAVgqIA7hCILihCIFPMcIAGDtIgrAkQiqBliaAfQgrAIgkACQgYABgNgCQglAqgfAXQg4Aog1AAgAmspFIg4A9QgOAcgJATQgZA1gVA8QhEC7gLC6QgEA5ADApQADA6ARAxQAqB4CEBZQB0BDBdAbQAuAMAYAAIADAAIACAEIAjA1QAuA2A7AEIABAAQAyAAA2gnQAegXAjgoIAEgEIAhACQAogBAugJQCWgeCphlIAnggIgFjmIlMsUg");
	this.shape_29.setTransform(-57.6,6.7,0.675,0.675);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EEAC42").s().p("AiBCHQgjgggQgnIgHgKQhMgMhYgiQixhDg9hsIAAgEIAUAZQAcAfAnAcQB8BYC5AeIANAVQARAYATATQA9A8A8gTQBBgWAzgjQAqgeAYghIAigBQAtgFAxgLQCegoCRhtIgNBQQiFBGgoAJQg3AVguAOQhXAbhOgDIgwArQg7Aug1AMQgMADgMAAQgrAAgoglg");
	this.shape_30.setTransform(-55.8,39.3,0.675,0.675);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F2B944").s().p("AiCCHQgjgggRgnIgHgKQhMgMhYgiQiwhDg+hsIAAgEIAVAXQAcAbAnAZQB9BSC5AcIANAUQARAWATASQA+A4A8gUQBsgjBChcIAkAAQAvgCAygKQChghCShtIgRBlQiFBGgoAJQg3AVgtAOQhYAbhOgDIgvArQg7Aug2AMQgMADgLAAQgsAAgnglg");
	this.shape_31.setTransform(-55.7,39.3,0.675,0.675);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F1D148").s().p("AgQKNQg9gFgwg3Igjg3QgXABgvgNQhegbh2hFQiGhagqh4QgchQAIh/QAMjBBGi/QAWg7AZg0IAVgpIA5g/ILdhCIFNMYIAFDqIgoAhQirBmiXAeQgwAJgnAAIgfgBQglAqgdAXQg4Aqg0AAIgCgBg");
	this.shape_32.setTransform(-57.6,6.7,0.675,0.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 10
	this.instance = new lib.ear2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-83.9,-37.1,1,1,0,0,0,16.6,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 11
	this.instance_1 = new lib.ear1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-49.1,-47.3,1,1,0,0,0,12.6,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 3
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CE763A").s().p("AE0DVQhFgYhxhDQhgg6gzgoQgdAsg2AHIgTADQgtAGgVABQgiABgcgJQgkgMg3gxQg0gugjgwQgMgRgFgJIg1hpIBOB9QAmA0A2AuQAzAsAeAJQAbAJAggBQAUAAAsgHIAUgDQAigEAagYQANgLAGgLIADgFIAEADQAuAmBjA7QB0BFBFAZQBhAiAxgWQARgJAKgbQASgxgjhHQglhNhKhAQgsglhYg3IgDgCQg1ghg9ABQgvABggASQgVAMglAoQgkAmgaAkQgXAhgpAGQgoAFgxgWQgYgLgjgiIg4g2QgUgRgQgpIgMgkIAeA5QAAABAZAdQBDBMAtAVQA3AZApgMQAcgIARgYQAbglAkgnQAmgpAWgMQAjgSAwgBQBBgCA4AjIACABQBaA4AsAmQBLBBAmBPQAlBLgUA0QgFAQgKALQgIALgJAEQgVAJgdAAQgqAAg9gVg");
	this.shape_33.setTransform(99.3,47.4,0.675,0.675);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EFAD42").s().p("ACoDbQgogNhHgeQhOgigagTQgYgShLgyIhHgvQgsAqgXAGQgOAEAGgGIAIgGIAkgdQAlgfACgVIAxAlQA4AqAiAWIBUA3QAwAfAdAKQAvASAeACQAvADAUgdQAbgmgFgvQgGg4gzgrQhghUgogaQheg+hTAGQg2AIgrAbIgfAaIAbgjQAhgkAZgIQAugOAVABQAwACBKAoQBLApA8A2QArAoAXAjQAuBFAJAgQAGAcAAAZQAAAngQAOQgVASgbAHQgNADgNAAQgSAAgTgFg");
	this.shape_34.setTransform(112.6,47.9,0.675,0.675);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F0BC45").s().p("ACQDFQgsgKhkg+QgsgbhRg2IgxghQgUgKgKAGIgpAkQgfAcgRgHIArgmQAsgtADgjIBSA9QBXBAAaAPQBQAxAjAMQBZAgAgg3QAfg3gbg5QgOgegdgZQgpgkhDgmQhug/hIAIQhGAIgiAYIgTAXIANgbIBGgnQBSghA4AbQA/AfBPA7QBLA3AZAfQAgApANAdQATAugRAjQggBAhEAAQgUAAgWgFg");
	this.shape_35.setTransform(111.6,47.4,0.675,0.675);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F1D148").s().p("AEyDRQhGgZh1hGQhjg7gtglQgGALgOAMQgbAZgkAFQg/AIgOABQgmACgegJQgogNg+g8Qg9g4gdgyIgthSIBWgpIAFAVQAGAYAIALIAuA2QA2A6AmARQAuAVAmgEQAogFAYghQAZgkAlgmQAmgpAVgMQAhgRAugCQBAgCA3AiQBbA5ArAlQBMBBAmBOQAhBEgOAyQgJAjgXAKQgTAJgcAAQgpAAg9gVg");
	this.shape_36.setTransform(99.5,47.4,0.675,0.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]}).wait(1));

	// Layer 4
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D5D6D8").s().p("Ag2BRIgKgQQAPAGAVgSQAJgIAegkQAQgSAOgjQALgcAEgVQAAgEAFAKQAEAKgBAIQgCAQgNAlIgPAuQgDAQgTAXQgUAZgRABIgDAAQgOAAgMgOg");
	this.shape_37.setTransform(-15.6,77.8,0.675,0.675);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D5D6D8").s().p("AgRCUIgTgSQgLgNgDgLIAAgJIATAVQAYATAXgGQASgEACgWQABgSgMgoQgIgegVgtIgUgnQAJgUAGggIAEgcIALgLQANgHAFASQAFASgLAmQgKAlABACIAoB7QAGASgHAeQgIAigTAGIgJACQgNAAgQgNg");
	this.shape_38.setTransform(-6.3,73.3,0.675,0.675);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#C0C0C0").s().p("AguBMQgXgWgQgiQgSglAAgkQgBgkAYgSQAPgLAVgDQANgBARALQAMAHAGAHQAJAFAEAQQAEASAIAMQAOARAOAMIASARQAMAMAJAUQALAbgEAVQgDAXgWAKQgRAJgTAAQgsAAgsgugAhLhiQgTAPABAeQAAAiARAjQAPAgAWAVQAoArApAAQAQAAAPgIQASgIADgRQACgMgGgUQgHgZgPgRIgRgOQgQgNgNgTQgKgMgFgUQgDgNgEgDIgBgBQgXgVgRAAIgCAAQgTADgNAKg");
	this.shape_39.setTransform(-8.5,55.4,0.675,0.675);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D5D6D8").s().p("AAHA6QgegOgegcQgVgTgMgiIgIgfQARAfAxAgQAzAhAYgKQAWgIgDggIgIgfIAKAIQALAMAHATQAKAdgBAPQgBAXgYALQgKAFgMAAQgSAAgXgLg");
	this.shape_40.setTransform(-8.3,58.6,0.675,0.675);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#C0C0C0").s().p("AguBMQgXgWgQgiQgSglAAgkQgBgkAYgSQAPgLAVgDQANgBARALQAMAHAGAHQAJAFAEAQQAEASAIAMQAOARAOAMIASARQAMAMAJAUQALAbgEAVQgDAXgWAKQgRAJgTAAQgsAAgsgugAhLhiQgTAPABAeQAAAiARAjQAPAgAWAVQAoArApAAQAQAAAPgIQASgIADgRQACgMgGgUQgHgZgPgRIgRgOQgQgNgNgTQgKgMgFgUQgDgNgEgDIgBgBQgXgVgRAAIgCAAQgTADgNAKg");
	this.shape_41.setTransform(-8.5,55.4,0.675,0.675);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F0EFEF").s().p("AAJBuQgagLgagaQgWgXgQghQgRgjAAgjQgBggAUgQQAOgMAVgDQAMgBASAMQAKAGAFAGQAIAEADAOQAEATAJAMQANARALAKIAWATQAUAVAHAfQAIAogeAPQgRAIgRAAQgRAAgQgHg");
	this.shape_42.setTransform(-8.5,55.4,0.675,0.675);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#C0C0C0").s().p("ACwD/QgWgRgRgeQgQgbgGg3IgZBSQgOArgYALQgRAJgVgJQgxgVAIhrQABgXAUg4QghAcggAYQgWAQgRAEQgZAHgVgOQgVgOAGggQADgSAPgdQANgbA9hJIAIgKQAFgFgCgGQgBgGgHgFQgGgEgFgCQgFgBgTgCQgpgFgZgGQgQgDgRgIQgZgNgKgSQgJgSAJgWQAUgyBaABQAbAAA8APQAcgPAggGQAmgHAcAHIADACICRDIIABACQAEAggWBHIAUA6QAPAwAEARQAGAZgHAdQgIAhgSAIQgGAEgIAAQgPAAgQgMgAB3BfQAEABAAAEIAEAmQAGArAMAWQAPAbAUAPQAWARAPgHQAPgIAGgdQAGgagFgVQgFgTgQgyQgPgvgEgIQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAGgRAFgVQAKgpgCgVIiQjFQgegFgeAGQgWAEgUAJIgQAIQgBAAAAAAQgBABAAAAQgBAAAAAAQgBgBAAAAQg2gPghAAQhTgBgSAsQgHARAHAPQAGAMARAKQAQAKAWAFQAUAFAtAFQAVACAEACQAIACAHAFQAJAHACAJQAEAKgIAKIgIAKQg8BIgOAbQgOAdgDASQgDAXAPAJQAPALASgDQARgDAXgRQATgOAbgWQAagWAHgIQACgDAEACQAEACgCAEIgMAlQgOAogBAUQgIBkArASQAQAHANgHQAXgKALgmIAhhrQACgDADAAg");
	this.shape_43.setTransform(-19.3,66.5,0.675,0.675);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#C0C0C0").s().p("ACwD/QgWgRgRgeQgQgbgGg3IgZBSQgOArgYALQgRAJgVgJQgxgVAIhrQABgXAUg4QghAcggAYQgWAQgRAEQgZAHgVgOQgVgOAGggQADgSAPgdQANgbA9hJIAIgKQAFgFgCgGQgBgGgHgFQgGgEgFgCQgFgBgTgCQgpgFgZgGQgQgDgRgIQgZgNgKgSQgJgSAJgWQAUgyBaABQAbAAA8APQAcgPAggGQAmgHAcAHIADACICRDIIABACQAEAggWBHIAUA6QAPAwAEARQAGAZgHAdQgIAhgSAIQgGAEgIAAQgPAAgQgMgAB3BfQAEABAAAEIAEAmQAGArAMAWQAPAbAUAPQAWARAPgHQAPgIAGgdQAGgagFgVQgFgTgQgyQgPgvgEgIQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAGgRAFgVQAKgpgCgVIiQjFQgegFgeAGQgWAEgUAJIgQAIQgBAAAAAAQgBABAAAAQgBAAAAAAQgBgBAAAAQg2gPghAAQhTgBgSAsQgHARAHAPQAGAMARAKQAQAKAWAFQAUAFAtAFQAVACAEACQAIACAHAFQAJAHACAJQAEAKgIAKIgIAKQg8BIgOAbQgOAdgDASQgDAXAPAJQAPALASgDQARgDAXgRQATgOAbgWQAagWAHgIQACgDAEACQAEACgCAEIgMAlQgOAogBAUQgIBkArASQAQAHANgHQAXgKALgmIAhhrQACgDADAAg");
	this.shape_44.setTransform(-19.3,66.5,0.675,0.675);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F0EFEF").s().p("ACyD7QgVgQgRgdQgNgYgGgrIgDgnIghBrQgHAWgMAPQgVAagdgMQgdgNgIgsQgEgZACgqQACgUAOgpIAMglQgGAJgbAWQgbAWgUAOQguAighgVQgRgMAEgbQADgRAOgeQAJgTAhgoIApgzQAJgLgJgMQgIgKgLgDIgkgEQghgEgWgFQghgJgTgRQgYgVAMgdQATguBWAAQAjAAA2AQIAQgJQAVgJAWgEQAYgFAWACIASACICSDJQAEAigXBEQAEAIAPAwQAQAxAFATQAGAXgHAcQgHAfgRAIQgFADgHAAQgMAAgQgLg");
	this.shape_45.setTransform(-19.3,66.5,0.675,0.675);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#CE763A").s().p("AiNDbQgWgQgZggQgKgNgFgMQgGgMAAgLIAAgJIABgCIACgBQAlgQA2goQAggZBDg3IAhgeQA7gwAzhKQANgUAVgXQgNAcgNAUQg3BOg5AvIghAeQhDA3ggAXQg2ApglARQAAAWAUAYQAUAZAWATQCDhpAhgkIBYhaQAqgrAUgeQAKgMAYgpQgJAngPATQgqA1hVBWIgaAaQgnAriCBlIgCACg");
	this.shape_46.setTransform(5.9,41.6,0.675,0.675);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#ECAA42").s().p("AiHBrIgFgKQBkgvBvhlQAoglAeggIhGBQQgwAwiNBxg");
	this.shape_47.setTransform(4.5,47.8,0.675,0.675);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F2B944").s().p("AiSBQIgDgHQBoguBrhMQA3gnAhgeQghA1hxBfQg4AwgyAlIgJAEg");
	this.shape_48.setTransform(3.8,47.9,0.675,0.675);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F1D148").s().p("Ai3ClQgQgUgDgSIgBgOQAqgTBCgzIB1hgQAwgpAvg+QAXggAOgXIAxBTQgNAfhBBGQgjAlg7A7QgnAriBBkQgUgPgaggg");
	this.shape_49.setTransform(5.8,41.8,0.675,0.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]}).wait(1));

	// Layer 8
	this.instance_2 = new lib.wing1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(3.7,2.7,1,1,0,0,0,-35.6,52.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 7
	this.instance_3 = new lib.wing2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(3.7,2.7,1,1,0,0,0,4.4,51.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer 9
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#181818").s().p("ABHJXQAEhqgei6QgXiWhJiZQg5hzhRhsQg7hRhFhGIg4g2IgFgEICbioIAVgMIABAAQBNAFA9ANIABAAIABABQBZBIBdB2QBeB2A2BtQBICQAlELIAAABIAAACQgrBshNBcQhMBdhnBFIgIAFgAjYpNIiTCgQBhBZBVBzQBSBtA5B0QBKCZAXCYQAcC3gCBmQBkhEBJhZQBIhZAqhpQglkJhHiNQg2hthch1Qhch1hYhHQg+gMhIgFg");
	this.shape_50.setTransform(71.7,0.2,0.675,0.675);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#181818").s().p("AgwIOQAZhmgIh2QgGhWgii8QgZiHhhiLQgfgsgignIgdgfIgEgEIDxisIADADQANAIAYAZQAbAgAhAtQBWB6BOCrQBBCMALDOQAGB8gNB5IAAAEIgDABQirA1iXAJIgHABgAkTlmQAwAxApA8QBjCNAZCKQAiC8AHBUQAIB3gXBlQCTgKCjgzQAMh6gGh6QgMjJg/iKQhKijhSh2Qg+hbglgZg");
	this.shape_51.setTransform(38.2,18.2,0.675,0.675);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#181818").s().p("AiSDOIgDg1QBQg6A5hHQA6hKAlhfQAWg6APg/QAIAmAKA3IAMBNQgXA9gYAsQhMCBh6BgQgSANggAUQABgXgCgmg");
	this.shape_52.setTransform(86.7,22.5,0.675,0.675);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#181818").s().p("AiYAbIADgWQAMgCAOgDQCtgsBzgpQgBAdgDAkIgEAsQhGAVhAAOQhIAPhPAJIgkADQAHgZAFgig");
	this.shape_53.setTransform(46.3,48,0.675,0.675);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#242424").s().p("AiHDzQAjgdAWgbQCmjHAMkIQAVA9AQBJQgPBAgWA5QgmBeg6BLQg4BIhQA5g");
	this.shape_54.setTransform(85.6,14.1,0.675,0.675);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#242424").s().p("AiZALQCtgeCKgtIgBAnQhzAoisAsQgPAEgMACQAEgeAAgYg");
	this.shape_55.setTransform(46.9,44,0.675,0.675);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#272727").s().p("AAxE0QgqkNjBkDQg8hRhFhHIg4g2ICXilIASgJQBKAEA/ANQBWBGBdB1QBeB2A4BvQBHCOAlELQgtByhRBfQhJBVhiBCQADhqgdi8g");
	this.shape_56.setTransform(71.8,0.1,0.675,0.675);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#272727").s().p("AgcEvQgGhUgii8QgZiKhiiMQgfgsgjgmIgcgeIDqinQAhAVA+BZQBWB5BOCrQBACLALDMQAHB9gNB5QiuA1iTAJQAZhngJh5g");
	this.shape_57.setTransform(38.3,18.3,0.675,0.675);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#CE763A").s().p("AnOKUQiqg6h/hzQgogkgfgmIgYgfIgBgBIBgo2IPVoHIABAAQCpAKCDA5QCCA5BTBkQBIBWAeByQAdBugQCAQgfDwihCxQiJCWjIBMQkSBojjAAQiWAAiFgtgAruizIhfItQAJAOATAVQAdAiAkAhQB/ByCmA4QFJBwHBiqQDHhMCFiTQCgivAejtQAQh+gdhuQgchthIhWQhRhiiAg4QiBg4imgKg");
	this.shape_58.setTransform(43,6.7,0.675,0.675);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EEAB42").s().p("AmJJ3QiIgehlg3QgkgSgPgJQgagPgMgOQgLgOgTgNQgVgNgFgFQgZgagOgRIgJgLIArgnIA5AuQBJA1BQApQD9CBDYg3QFbhYCphlQDNh7BTjUQBVjbgui5QgrixiahyIBcBBQBiBRAgBOQAqBoAMByQANCDgjBdQg3CUgiA7QhEB3h2BTQkLC9luAnQgoAEgqAAQhhAAhpgXg");
	this.shape_59.setTransform(44.9,9.8,0.675,0.675);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EEAB42").s().p("Ah6EGQgagXgBgPQgBgZCxnMIAYgJQAbgJAOgBIAQAfQATApAKAqQAiCHg6BgQg5BihQBDQgoAjggAQQgNgIgNgLg");
	this.shape_60.setTransform(-4.2,17.2,0.675,0.675);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F2B944").s().p("AiBENQgkgigBgPIC2nsIBTgcIAQAiQATAqAMArQApCKgmBdQgmBdhrBYQg0AsgtAaQgSgOgSgSg");
	this.shape_61.setTransform(-3.2,17.5,0.675,0.675);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F2B944").s().p("Aq0H9IhfiFIBNANIAlAhQAwAoA2AfQCpBlCagTQDogcDDg/QD9hQBehyQDFjrgTlGQgIiIhRh2QhBhdg3gVIAQAEQAVAHAVAMQBFAnA0BSQBCBpAfCZQAiCkgjBkQg6CliOCYQjLDZkTAsQjZAjihAAQk4AAheiDg");
	this.shape_62.setTransform(44.8,7.2,0.675,0.675);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F1D148").s().p("AnNKPQing5iAhzQgogkgfglIgYgeIBgoyIPSoFQFKAUCoC9QCeCzghENQgfDuihCwQiICVjGBLQjLBNivAUQg9AHg7AAQiXAAiEgtg");
	this.shape_63.setTransform(43.1,6.7,0.675,0.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]}).wait(1));

	// Layer 6
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#CE763A").s().p("ACkEdQgkgUgjgdQgqgkguhJQgegygZg1QgUgpgDgxQgXAMgqAFQgjAEglgYQgWgOglgkIgIgIQgXgWgng7Igmg5IgDgFIB2gvIACAFIAXA6QAgA8AsARQAjAOAcgGQASgEAfgSQAqgXAdgIQBYgVBdBMQA4AtArBIQAdAyAdBLQAdBMgMBBQgLBAgvAaQgWAMgcAAQguAAg7ghgAhAhKIADAfQAGAkANAbQBJCWBEA6QAtAmAuAWQBMAjAwgaQAsgXAKg9QAKg+gbhJQgmhhgsg/QgggtgoggQgjgcgegNQg3gZg1ANQgcAHgoAXQghATgTAEQgfAGglgPQgwgSgihAQgNgZgJgdIhhAmQA8BiAjAhIAIAIQAkAkAVANQAiAXAggEQAggDAVgIQAKgEAEgEIAIgHg");
	this.shape_64.setTransform(79.5,67.2,0.675,0.675);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EEAC42").s().p("AClEDQgegRgvgpQgzgsgRgcQghg3gQgdQggg6gHghIgHg2QgHAFgNAFQgaAJgdgCQghgDglgUQgkgSgSgWQgOgRglgzIgjgwIgGgUIBjBkQBEA+ArABQA0ADAYgEQAYgDAIgMIAIA0QALA7AQAjQAaA6AfAzQArBDAeAQQA9AeANAEQAuAOAngYQAtgaAMgsQALgrgTg9QgTg9gqg+QgshCgzgnQgagUgTgKQgRgIgYgHQgegJglgCIgegBIAzgGQA4gFAYAJQAcAJAhAYQAfAWAPATIAuA6QAhAsALAZIAZA7QAOAjAHAgQAOBUgOAhQgeBEgxAEIgRABQg2AAgtgYg");
	this.shape_65.setTransform(80,69,0.675,0.675);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F2BC44").s().p("ADrEfQgngEgQgKQgfgUgsgkQhAgzgQgbIguhNQgphHgFgiQgFgigBgMIAAgGQgiAVgTgCQglgEgQgFQgtgNgigjQgrgrghgrQgkguAAgPQgBgNAGAIIAGALIBKBGQBWBGA6ABQA6ACAegKQAPgFADgFIAPBUQAVBcAiAzQA4BVAmAdQA+AwBGgiQBIgjgKhNQgIg/gzg4Igug6QghgngdgZQhXhJhrANIAUgOQAWgOAPgBQAXgCAsAFQAzAHAPALQAbAUAgAdQAtApANAXQAJASAjA1QAgAzAGAfIAQBIQAHAkgEAWQgIAogKAVQgQAjgdAIQgTAGgZAAIgcgCg");
	this.shape_66.setTransform(79.9,68.6,0.675,0.675);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F1D148").s().p("ADNErQg2gVg4gvQgpgjguhIQgegzgZg0QgOgcgGglIgDgfQgEADgKAFQgWAIgiAEQgjAEgngbQgSgNgrgpQgXgWgog8Igjg3IBrgrIAYA7QAhA+AuASQAyAUAsgXIApgWQAagOAYgGQA0gMA2AWQAhAOAmAeQA0AqApBBQAhA2AdBOQAbBIgJA+QgKBCgvAaQgVAMgaAAQgdAAgigOg");
	this.shape_67.setTransform(79.6,67.3,0.675,0.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]}).wait(1));

	// Layer 1
	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FFFFFF").ss(3,1,1).p("ABUAAQAAAjgYAYQgZAZgjAAQgiAAgYgZQgZgYAAgjQAAgiAZgZQAYgYAiAAQAjAAAZAYQAYAZAAAig");
	this.shape_68.setTransform(-37,63.5,2.098,2.098);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#3086DB").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape_69.setTransform(-37,63.5,2.098,2.098);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_69},{t:this.shape_68}]}).wait(1));

	// Layer 5
	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#D5D6D8").s().p("ABDAfQACgKgHgJQgRgSggAAQgNgBghgFQgjgGgHgEIgZgRIAkAIQAoAJAbgDQAsgFASABQAcABAGANQAGAMgSAUQgKAMgPALQADgEACgFg");
	this.shape_70.setTransform(-28.3,58.6,0.675,0.675);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#D5D6D8").s().p("Ag6A2QgRgEgLgVQgJgTAGgKIAHgHQAHAbAMAJQAaATA1gpQAOgJAngiQAbgYgFAIIgJAOQgNASghAaQggAbgXAMQgSAKgOAAIgHgBg");
	this.shape_71.setTransform(-24.5,71.3,0.675,0.675);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#C0C0C0").s().p("AgfBSQghgfgSgkQgXgqAIgiQAJgiAggJQASgFASAEQASAEAMAMIABACIAOAfQAUAhAbAQQAaAMABAYQACAVgEARQgHAdgUAHQgUAFgQAAQgkAAgdgagAg1hfQgbAIgHAcQgHAfAVAoQASAhAfAeQAlAkA2gSQAZgIgDg4QAAgMgLgJIgKgHIAAAAQgcgPgUghQgNgTgFgRQgPgOgXAAQgIAAgJACg");
	this.shape_72.setTransform(-26.3,54.2,0.675,0.675);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#C3C3C3").s().p("AAeAqQgegLgZgcIgUgbIgKgXIAPASIASAXQAYAYAdAPIAZAPg");
	this.shape_73.setTransform(-34.5,64.6,0.675,0.675);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#D1D2D3").s().p("AABA3QgZgBgYgUIgTgUIAYAIQAdAFAdgJQAegJABggIgEgfIANALQAMAPABAVQAAAagSASQgSASgdAAIgCAAg");
	this.shape_74.setTransform(-24.2,57.7,0.675,0.675);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#C0C0C0").s().p("AgfBSQghgfgSgkQgXgqAIgiQAJgiAggJQASgFASAEQASAEAMAMIAAAAIABACIAOAfQAUAhAbAQQAaAMABAYQACAVgEARQgHAdgUAHQgUAFgQAAQgkAAgdgagAg1hfQgbAIgHAcQgHAfAVAoQASAhAfAeQAlAkA2gSQAZgIgDg4QAAgMgLgJIgKgHIAAAAQgcgPgUghQgNgTgFgRQgPgOgXAAQgIAAgJACg");
	this.shape_75.setTransform(-26.3,54.2,0.675,0.675);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F0EFEF").s().p("AgbBOQgfgdgTgiQgXgqAIghQAIgjAkgGQAhgGAVAVIAPAfQAVAjAcARIAMAHQALALABANQACAXgFASQgGAXgRAFQgSAGgRAAQghAAgbgZg");
	this.shape_76.setTransform(-26.3,54.2,0.675,0.675);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#CE763A").s().p("AiVBfIgJhEIADgCQBogyBKg6IA4gwIADgEIBNBEIgDAEIhCBAQhRBMhRA6IgCABgAAQhBQhGA1heAtIAIA4IBBAkQBxhRBrhuIg+g3QgZAZgqAfg");
	this.shape_77.setTransform(-15.4,46.3,0.675,0.675);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#C0C0C0").s().p("ABrD+QgTAAgOgMQgXgTgDgsQgCgbAEgmQgQAjgMARQgPAWgaAGQgbAGgYgOQgVgMgCgdQgBgQAGgcIABgCQAEgTAog4QhLAmgXAHQgNAEgQgCQgSgBgGgJQgHgJADgWQAEgVALgPQALgPAmgeQAggZATgLQAHgEAAgEQAAgFgJgFIgygcQgYgOgIgdQgHgYAGgSQAEgPAPgKQAZgRAsAMQA4AQBNA7IAEADIgGAIIgEgDQgTgPgagQQgzghgigKQgmgKgWANQgMAJgEAMQgEAPAFAUQAHAaAVAMIAyAcQAOAJAAAKQAAAKgMAHQgTALggAZQglAdgJAMQgKANgDATQgDASAFAGQAEAFAOABQANABALgDQAMgDAtgVQAvgWAMgIQADgCADADQADADgDADQgzBEgEAVIgBACQgGAaABAOQABAYARAKQAVANAXgFQAVgFAOgTQAMgRAPgjQAOgeAAgDQACgEAEABQAEABgBAFIgEAiQgEAmACAbQACAnAUARQANALATgBQAYgCAOgYQAPgXgBgjQgBgdgFgjIgFgdQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAKgLAJgQQASgfgBgYIAAgFIAKAAIAAAFQAAAYgPAeQgKASgMAOQAKAvABAuQABAmgRAbQgRAagcADg");
	this.shape_78.setTransform(-36,62.5,0.675,0.675);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D5D6D8").s().p("AgRAjIgShBQARgXAJgiIAEgfQAFAIASgCQAKAAAJgCQgBAMgMAeQgJAXgHAOQgEAFACASQAEAfABAbQACAlgIAVQgEALgDAEQACgQgRhEg");
	this.shape_79.setTransform(-25.5,69,0.675,0.675);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EDAC42").s().p("AhWBNQgNgFgHgQQArgYAxgeQBbg2AegaIhEA+QhPBGgiAZIgCAAQgFAAgFgCg");
	this.shape_80.setTransform(-15,49.4,0.675,0.675);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#C0C0C0").s().p("ABrD+QgTAAgOgMQgXgTgDgsQgCgbAEgmQgQAjgMARQgPAWgaAGQgbAGgYgOQgVgMgCgdQgBgQAGgcIABgCQAEgTAog4QhLAmgXAHQgNAEgQgCQgSgBgGgJQgHgJADgWQAEgVALgPQALgPAmgeQAggZATgLQAHgEAAgEQAAgFgJgFIgygcQgYgOgIgdQgHgYAGgSQAEgPAPgKQAZgRAsAMQA4AQBNA7IAEADIgGAIIgEgDQgTgPgagQQgzghgigKQgmgKgWANQgMAJgEAMQgEAPAFAUQAHAaAVAMIAyAcQAOAJAAAKQAAAKgMAHQgTALggAZQglAdgJAMQgKANgDATQgDASAFAGQAEAFAOABQANABALgDQAMgDAtgVQAvgWAMgIQADgCADADQADADgDADQgzBEgEAVIgBACQgGAaABAOQABAYARAKQAVANAXgFQAVgFAOgTQAMgRAPgjQAOgeAAgDQACgEAEABQAEABgBAFIgEAiQgEAmACAbQACAnAUARQANALATgBQAYgCAOgYQAPgXgBgjQgBgdgFgjIgFgdQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAKgLAJgQQASgfgBgYIAAgFIAKAAIAAAFQAAAYgPAeQgKASgMAOQAKAvABAuQABAmgRAbQgRAagcADg");
	this.shape_81.setTransform(-36,62.5,0.675,0.675);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F0EFEF").s().p("ABHDoQgQgTgCgiQgCgcAEgnIAFgiIgOAgQgQAkgMARQgOAVgYAFQgZAGgWgNQgUgMgBgbQgBgOAHgdQADgOAbgoIAaglQgMAJgvAVQguAWgLADQgNADgOgBQgQgBgFgHQgGgIADgTQADgUALgOQAKgOAmgdQAggZASgLQAMgIgDgIQgCgGgIgFIgzgcQgXgNgHgcQgFgWAEgQQAGgRAQgIQAXgNAlALQAkAJAzAiQAaARATAOICRCWQAAAZgSAhQgJAQgKALIAFAdQAFAkABAdQABAkgQAZQgPAZgaADIgGAAQgWAAgOgRg");
	this.shape_82.setTransform(-36,62.5,0.675,0.675);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F1D148").s().p("AiPBbIgJg+QBpgzBLg7IA3gwIBGA+IhBBAQhRBLhRA6g");
	this.shape_83.setTransform(-15.5,46.4,0.675,0.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.honeybee, new cjs.Rectangle(-117.1,-105.2,250.2,193.9), null);


(lib.H_ar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-55.8,1,1,0,0,0,0.4,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:88.6},74).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AiGAiIAAhEIENAAIAABEg");
	var mask_graphics_1 = new cjs.Graphics().p("AiGAsIAAhXIENAAIAABXg");
	var mask_graphics_2 = new cjs.Graphics().p("AiGA2IAAhrIENAAIAABrg");
	var mask_graphics_3 = new cjs.Graphics().p("AiGBAIAAh/IENAAIAAB/g");
	var mask_graphics_4 = new cjs.Graphics().p("AiGBKIAAiTIENAAIAACTg");
	var mask_graphics_5 = new cjs.Graphics().p("AiGBUIAAinIENAAIAACng");
	var mask_graphics_6 = new cjs.Graphics().p("AiGBdIAAi6IENAAIAAC6g");
	var mask_graphics_7 = new cjs.Graphics().p("AiGBnIAAjNIENAAIAADNg");
	var mask_graphics_8 = new cjs.Graphics().p("AiGBxIAAjhIENAAIAADhg");
	var mask_graphics_9 = new cjs.Graphics().p("AiGB7IAAj1IENAAIAAD1g");
	var mask_graphics_10 = new cjs.Graphics().p("AiGCFIAAkJIENAAIAAEJg");
	var mask_graphics_11 = new cjs.Graphics().p("AiGCPIAAkdIENAAIAAEdg");
	var mask_graphics_12 = new cjs.Graphics().p("AiGCYIAAkwIENAAIAAEwg");
	var mask_graphics_13 = new cjs.Graphics().p("AiGCiIAAlEIENAAIAAFEg");
	var mask_graphics_14 = new cjs.Graphics().p("AiGCsIAAlXIENAAIAAFXg");
	var mask_graphics_15 = new cjs.Graphics().p("AiGC2IAAlrIENAAIAAFrg");
	var mask_graphics_16 = new cjs.Graphics().p("AiGDAIAAl/IENAAIAAF/g");
	var mask_graphics_17 = new cjs.Graphics().p("AiGDKIAAmTIENAAIAAGTg");
	var mask_graphics_18 = new cjs.Graphics().p("AiGDTIAAmmIENAAIAAGmg");
	var mask_graphics_19 = new cjs.Graphics().p("AiGDeIAAm7IENAAIAAG7g");
	var mask_graphics_20 = new cjs.Graphics().p("AiGDnIAAnNIENAAIAAHNg");
	var mask_graphics_21 = new cjs.Graphics().p("AiGDxIAAnhIENAAIAAHhg");
	var mask_graphics_22 = new cjs.Graphics().p("AiGD7IAAn1IENAAIAAH1g");
	var mask_graphics_23 = new cjs.Graphics().p("AiGEFIAAoJIENAAIAAIJg");
	var mask_graphics_24 = new cjs.Graphics().p("AiGEOIAAocIENAAIAAIcg");
	var mask_graphics_25 = new cjs.Graphics().p("AiGEZIAAoxIENAAIAAIxg");
	var mask_graphics_26 = new cjs.Graphics().p("AiGEiIAApDIENAAIAAJDg");
	var mask_graphics_27 = new cjs.Graphics().p("AiGEsIAApXIENAAIAAJXg");
	var mask_graphics_28 = new cjs.Graphics().p("AiGE2IAAprIENAAIAAJrg");
	var mask_graphics_29 = new cjs.Graphics().p("AiGFAIAAp/IENAAIAAJ/g");
	var mask_graphics_30 = new cjs.Graphics().p("AiGFKIAAqTIENAAIAAKTg");
	var mask_graphics_31 = new cjs.Graphics().p("AiGFUIAAqnIENAAIAAKng");
	var mask_graphics_32 = new cjs.Graphics().p("AiGFdIAAq5IENAAIAAK5g");
	var mask_graphics_33 = new cjs.Graphics().p("AiGFnIAArNIENAAIAALNg");
	var mask_graphics_34 = new cjs.Graphics().p("AiGFxIAArhIENAAIAALhg");
	var mask_graphics_35 = new cjs.Graphics().p("AiGF7IAAr1IENAAIAAL1g");
	var mask_graphics_36 = new cjs.Graphics().p("AiGGFIAAsJIENAAIAAMJg");
	var mask_graphics_37 = new cjs.Graphics().p("AiGGPIAAsdIENAAIAAMdg");
	var mask_graphics_38 = new cjs.Graphics().p("AiGGYIAAsvIENAAIAAMvg");
	var mask_graphics_39 = new cjs.Graphics().p("AiGGiIAAtDIENAAIAANDg");
	var mask_graphics_40 = new cjs.Graphics().p("AiGGsIAAtXIENAAIAANXg");
	var mask_graphics_41 = new cjs.Graphics().p("AiGG2IAAtrIENAAIAANrg");
	var mask_graphics_42 = new cjs.Graphics().p("AiGHAIAAt/IENAAIAAN/g");
	var mask_graphics_43 = new cjs.Graphics().p("AiGHKIAAuTIENAAIAAOTg");
	var mask_graphics_44 = new cjs.Graphics().p("AiGHTIAAulIENAAIAAOlg");
	var mask_graphics_45 = new cjs.Graphics().p("AiGHdIAAu5IENAAIAAO5g");
	var mask_graphics_46 = new cjs.Graphics().p("AiGHnIAAvNIENAAIAAPNg");
	var mask_graphics_47 = new cjs.Graphics().p("AiGHxIAAvhIENAAIAAPhg");
	var mask_graphics_48 = new cjs.Graphics().p("AiGH7IAAv1IENAAIAAP1g");
	var mask_graphics_49 = new cjs.Graphics().p("AiGIEIAAwIIENAAIAAQIg");
	var mask_graphics_50 = new cjs.Graphics().p("AiGIOIAAwcIENAAIAAQcg");
	var mask_graphics_51 = new cjs.Graphics().p("AiGIYIAAwvIENAAIAAQvg");
	var mask_graphics_52 = new cjs.Graphics().p("AiGIiIAAxDIENAAIAARDg");
	var mask_graphics_53 = new cjs.Graphics().p("AiGIsIAAxXIENAAIAARXg");
	var mask_graphics_54 = new cjs.Graphics().p("AiGI2IAAxrIENAAIAARrg");
	var mask_graphics_55 = new cjs.Graphics().p("AiGI/IAAx+IENAAIAAR+g");
	var mask_graphics_56 = new cjs.Graphics().p("AiGJJIAAySIENAAIAASSg");
	var mask_graphics_57 = new cjs.Graphics().p("AiGJTIAAylIENAAIAASlg");
	var mask_graphics_58 = new cjs.Graphics().p("AiGJdIAAy5IENAAIAAS5g");
	var mask_graphics_59 = new cjs.Graphics().p("AiGJnIAAzNIENAAIAATNg");
	var mask_graphics_60 = new cjs.Graphics().p("AiGJxIAAzhIENAAIAAThg");
	var mask_graphics_61 = new cjs.Graphics().p("AiGJ6IAAz0IENAAIAAT0g");
	var mask_graphics_62 = new cjs.Graphics().p("AiGKFIAA0JIENAAIAAUJg");
	var mask_graphics_63 = new cjs.Graphics().p("AiGKOIAA0bIENAAIAAUbg");
	var mask_graphics_64 = new cjs.Graphics().p("AiGKYIAA0vIENAAIAAUvg");
	var mask_graphics_65 = new cjs.Graphics().p("AiGKiIAA1DIENAAIAAVDg");
	var mask_graphics_66 = new cjs.Graphics().p("AiGKsIAA1XIENAAIAAVXg");
	var mask_graphics_67 = new cjs.Graphics().p("AiGK2IAA1rIENAAIAAVrg");
	var mask_graphics_68 = new cjs.Graphics().p("AiGLAIAA1/IENAAIAAV/g");
	var mask_graphics_69 = new cjs.Graphics().p("AiGLJIAA2RIENAAIAAWRg");
	var mask_graphics_70 = new cjs.Graphics().p("AiGLTIAA2lIENAAIAAWlg");
	var mask_graphics_71 = new cjs.Graphics().p("AiGLdIAA25IENAAIAAW5g");
	var mask_graphics_72 = new cjs.Graphics().p("AiGLnIAA3NIENAAIAAXNg");
	var mask_graphics_73 = new cjs.Graphics().p("AiGLxIAA3hIENAAIAAXhg");
	var mask_graphics_74 = new cjs.Graphics().p("AiGL7IAA31IENAAIAAX1g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:-54.3}).wait(1).to({graphics:mask_graphics_1,x:0,y:-53.3}).wait(1).to({graphics:mask_graphics_2,x:0,y:-52.3}).wait(1).to({graphics:mask_graphics_3,x:0,y:-51.3}).wait(1).to({graphics:mask_graphics_4,x:0,y:-50.4}).wait(1).to({graphics:mask_graphics_5,x:0,y:-49.4}).wait(1).to({graphics:mask_graphics_6,x:0,y:-48.4}).wait(1).to({graphics:mask_graphics_7,x:0,y:-47.4}).wait(1).to({graphics:mask_graphics_8,x:0,y:-46.4}).wait(1).to({graphics:mask_graphics_9,x:0,y:-45.4}).wait(1).to({graphics:mask_graphics_10,x:0,y:-44.4}).wait(1).to({graphics:mask_graphics_11,x:0,y:-43.5}).wait(1).to({graphics:mask_graphics_12,x:0,y:-42.5}).wait(1).to({graphics:mask_graphics_13,x:0,y:-41.5}).wait(1).to({graphics:mask_graphics_14,x:0,y:-40.5}).wait(1).to({graphics:mask_graphics_15,x:0,y:-39.5}).wait(1).to({graphics:mask_graphics_16,x:0,y:-38.5}).wait(1).to({graphics:mask_graphics_17,x:0,y:-37.6}).wait(1).to({graphics:mask_graphics_18,x:0,y:-36.6}).wait(1).to({graphics:mask_graphics_19,x:0,y:-35.6}).wait(1).to({graphics:mask_graphics_20,x:0,y:-34.6}).wait(1).to({graphics:mask_graphics_21,x:0,y:-33.6}).wait(1).to({graphics:mask_graphics_22,x:0,y:-32.6}).wait(1).to({graphics:mask_graphics_23,x:0,y:-31.7}).wait(1).to({graphics:mask_graphics_24,x:0,y:-30.7}).wait(1).to({graphics:mask_graphics_25,x:0,y:-29.7}).wait(1).to({graphics:mask_graphics_26,x:0,y:-28.7}).wait(1).to({graphics:mask_graphics_27,x:0,y:-27.7}).wait(1).to({graphics:mask_graphics_28,x:0,y:-26.7}).wait(1).to({graphics:mask_graphics_29,x:0,y:-25.8}).wait(1).to({graphics:mask_graphics_30,x:0,y:-24.8}).wait(1).to({graphics:mask_graphics_31,x:0,y:-23.8}).wait(1).to({graphics:mask_graphics_32,x:0,y:-22.8}).wait(1).to({graphics:mask_graphics_33,x:0,y:-21.8}).wait(1).to({graphics:mask_graphics_34,x:0,y:-20.8}).wait(1).to({graphics:mask_graphics_35,x:0,y:-19.9}).wait(1).to({graphics:mask_graphics_36,x:0,y:-18.9}).wait(1).to({graphics:mask_graphics_37,x:0,y:-17.9}).wait(1).to({graphics:mask_graphics_38,x:0,y:-16.9}).wait(1).to({graphics:mask_graphics_39,x:0,y:-15.9}).wait(1).to({graphics:mask_graphics_40,x:0,y:-14.9}).wait(1).to({graphics:mask_graphics_41,x:0,y:-14}).wait(1).to({graphics:mask_graphics_42,x:0,y:-13}).wait(1).to({graphics:mask_graphics_43,x:0,y:-12}).wait(1).to({graphics:mask_graphics_44,x:0,y:-11}).wait(1).to({graphics:mask_graphics_45,x:0,y:-10}).wait(1).to({graphics:mask_graphics_46,x:0,y:-9}).wait(1).to({graphics:mask_graphics_47,x:0,y:-8}).wait(1).to({graphics:mask_graphics_48,x:0,y:-7.1}).wait(1).to({graphics:mask_graphics_49,x:0,y:-6.1}).wait(1).to({graphics:mask_graphics_50,x:0,y:-5.1}).wait(1).to({graphics:mask_graphics_51,x:0,y:-4.1}).wait(1).to({graphics:mask_graphics_52,x:0,y:-3.1}).wait(1).to({graphics:mask_graphics_53,x:0,y:-2.1}).wait(1).to({graphics:mask_graphics_54,x:0,y:-1.2}).wait(1).to({graphics:mask_graphics_55,x:0,y:-0.2}).wait(1).to({graphics:mask_graphics_56,x:0,y:0.8}).wait(1).to({graphics:mask_graphics_57,x:0,y:1.8}).wait(1).to({graphics:mask_graphics_58,x:0,y:2.8}).wait(1).to({graphics:mask_graphics_59,x:0,y:3.8}).wait(1).to({graphics:mask_graphics_60,x:0,y:4.7}).wait(1).to({graphics:mask_graphics_61,x:0,y:5.7}).wait(1).to({graphics:mask_graphics_62,x:0,y:6.7}).wait(1).to({graphics:mask_graphics_63,x:0,y:7.7}).wait(1).to({graphics:mask_graphics_64,x:0,y:8.7}).wait(1).to({graphics:mask_graphics_65,x:0,y:9.7}).wait(1).to({graphics:mask_graphics_66,x:0,y:10.6}).wait(1).to({graphics:mask_graphics_67,x:0,y:11.6}).wait(1).to({graphics:mask_graphics_68,x:0,y:12.6}).wait(1).to({graphics:mask_graphics_69,x:0,y:13.6}).wait(1).to({graphics:mask_graphics_70,x:0,y:14.6}).wait(1).to({graphics:mask_graphics_71,x:0,y:15.6}).wait(1).to({graphics:mask_graphics_72,x:0,y:16.5}).wait(1).to({graphics:mask_graphics_73,x:0,y:17.5}).wait(1).to({graphics:mask_graphics_74,x:0,y:18.5}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAAxBMAAAAiD");
	this.shape.setTransform(0,58.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.1,-55.8,24.3,21.9);


(lib.honeyflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.honeybee();
	this.instance.parent = this;
	this.instance.setTransform(23,-144.1,0.422,0.422,0,0,0,-36.5,63.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMB8QgNgBgNgEIgMgFIgBAAIgCgBIgBgBIgCgBIgBAAIgCgBIgBgBIgBgBIgCAAIgBgBIgBgBIgCgBIgBAAIgBgBIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIgBgBIAAAAIgBgBIgBgBIgBgBIAAgBIgBgBIgBAAIgBgBIAAgBIgBgBIgBgBIgBgBIAAgBIgBAAIgBgBIAAgBIgBgBIgBgBIAAgBIgBAAIAAgBIgBgBIAAgBIgBgBIgBgBIAAgBIgBgBIAAAAIgBgBIAAgBIgBgBIAAgBIgBgBIgBgCIgBgBIgBgCIAAgBIAAgBIgBgBIAAgBIgBAAIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIgBgBIAAAAIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAAAIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgCIgBgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIABgBIgBAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABAAIgBgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIABgBIABgBIAAgBIAAgBIABgBIAAgBIABgBIABgBIAAgBIABgBIAAgBIABgBIABgBIABgBIAAgCIABgBIABgBIAAgBIABgBIABgBIABgBIABgBIAAgBIABgBIABgBIABgBIABgBIABgBIADgEIANgLIAOgKIAOgHIAQgGIAPgDIAPgBQAHAAAIABIARADQAHABAHADIAQAHIAEADIABAAIABABIACABIABABIABAAIABABIABABIABABIABABIABAAIABABIABABIACABIABABIAAAAIABABIABABIABABIABABIABAAIABABIABABIABABIAAABIABABIABAAIABABIABABIAAABIABABIABAAIABABIABABIAAABIABABIAAABIABABIABAAIAAABIABABIABABIAAABIABABIABABIAAAAIABABIABABIAAABIAAABIABABIABABIAAAAIABABIAAABIABABIAAABIABABIAAABIABABIAAAAIAAABIABABIAAABIABABIAAABIABABIAAABIAAABIABAAIAAABIABABIAAABIAAABIABABIAAABIAAABIABABIAAABIAAAAIABABIAAABIAAABIAAABIABABIAAABIAAABIABABIAAABIAAABIAAAAIAAABIABABIAAABIAAABIAAABIAAABIABABIAAABIAAABIAAABIAAABIAAABIABAAIAAABIAAABIAAABIAAABIAAABIAAABIAAABIABABIAAABIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIgBABIABABIgBABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIAAABIgBABIAAABIAAABIgBABIAAABIgBABIAAABIAAABIgBABIAAABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIgBABIAAACIgBABIgBABIgBABIAAABIgBABIgBABIAAABIgBABIgBABIgBABIgBABIAAABIgBABIgBABIgBACIgBABIgBABIgBABIgBABIgCACIgFAFIgFAEIgFAEIgDACIgEADIgBABIgRAIQgUAJgXABIgFAAIgNgBg");
	this.shape.setTransform(23,-144.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-215.3,105.5,83.7);


// stage content:
(lib.writingsuccess_Fontkid_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_571 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(571).call(this.frame_571).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(154.1,95.1,0.999,0.999,8.5,0,0,22.4,-144);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({y:288.1},120).wait(11).to({x:357,y:93.1},0).to({y:478.1},189).wait(11).to({x:154.1,y:286.4},0).to({x:399.1},161).wait(9).to({startPosition:0},0).to({guide:{path:[398.7,287,347.4,260.3,291.9,244.7,234.2,228.6,186,266,132.9,307.3,73,276.6,19.2,249.1,-19.1,201.6,-28.9,189.5,-38.1,177,-42.6,170.9,-47.2,164.9,-47.4,164.9,-47.6,164.9,-47.7,164.9,-47.8,164.9,-69.8,133.1,-100.3,162.8]}},61).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(152.9,288,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},120).wait(11).to({_off:false,x:356.9,y:478},0).to({_off:true},189).wait(11).to({_off:false,x:399.9,y:288},0).to({_off:true},161).wait(71));

	// Layer 28
	this.instance_1 = new lib.V_ar("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(448,218,1,1,0,0,0,0,33);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(140).to({_off:false},0).wait(432));

	// Layer 27
	this.instance_2 = new lib.H_ar("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(255.6,330.5,1,1,-90,0,0,0,33);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(340).to({_off:false},0).wait(232));

	// Layer 26
	this.instance_3 = new lib.V_ar("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(58,218,1,1,0,0,0,0,33);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(563));

	// Layer 25
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AAAAKIAAgT");
	this.shape_1.setTransform(358,96.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("AAAgTIAAAn");
	this.shape_2.setTransform(358,97.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("AAAgdIAAA7");
	this.shape_3.setTransform(358,98.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("AAAgnIAABP");
	this.shape_4.setTransform(358,99.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(25,1,1).p("AAAgxIAABj");
	this.shape_5.setTransform(358,100.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(25,1,1).p("AAAg7IAAB4");
	this.shape_6.setTransform(358,101.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(25,1,1).p("AAAhFIAACM");
	this.shape_7.setTransform(358,102.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(25,1,1).p("AAAhPIAACg");
	this.shape_8.setTransform(358,103.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(25,1,1).p("AAAhaIAAC1");
	this.shape_9.setTransform(358,104.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(25,1,1).p("AAAhkIAADJ");
	this.shape_10.setTransform(358,105.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(25,1,1).p("AAAhuIAADd");
	this.shape_11.setTransform(358,106.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(25,1,1).p("AAAh4IAADx");
	this.shape_12.setTransform(358,107.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(25,1,1).p("AAAiCIAAEF");
	this.shape_13.setTransform(358,108.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(25,1,1).p("AAAiMIAAEZ");
	this.shape_14.setTransform(358,109.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(25,1,1).p("AAAiWIAAEt");
	this.shape_15.setTransform(358,110.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(25,1,1).p("AAAigIAAFB");
	this.shape_16.setTransform(358,111.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(25,1,1).p("AAAiqIAAFV");
	this.shape_17.setTransform(358,112.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(25,1,1).p("AAAi0IAAFp");
	this.shape_18.setTransform(358,113.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(25,1,1).p("AAAi+IAAF+");
	this.shape_19.setTransform(358,114.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(25,1,1).p("AAAjIIAAGS");
	this.shape_20.setTransform(358,115.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(25,1,1).p("AAAjSIAAGm");
	this.shape_21.setTransform(358,116.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(25,1,1).p("AAAjdIAAG7");
	this.shape_22.setTransform(358,117.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(25,1,1).p("AAAjnIAAHP");
	this.shape_23.setTransform(358,118.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(25,1,1).p("AAAjxIAAHj");
	this.shape_24.setTransform(358,119.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(25,1,1).p("AAAj7IAAH3");
	this.shape_25.setTransform(358,120.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(25,1,1).p("AAAkFIAAIL");
	this.shape_26.setTransform(358,121.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(25,1,1).p("AAAkPIAAIf");
	this.shape_27.setTransform(358,122.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(25,1,1).p("AAAkZIAAIz");
	this.shape_28.setTransform(358,123.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(25,1,1).p("AAAkjIAAJH");
	this.shape_29.setTransform(358,124.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(25,1,1).p("AAAktIAAJb");
	this.shape_30.setTransform(358,125.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(25,1,1).p("AAAk4IAAJx");
	this.shape_31.setTransform(358,126.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(25,1,1).p("AAAlCIAAKF");
	this.shape_32.setTransform(358,127.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(25,1,1).p("AAAlMIAAKZ");
	this.shape_33.setTransform(358,128.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(25,1,1).p("AAAlWIAAKt");
	this.shape_34.setTransform(358,129.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(25,1,1).p("AAAlgIAALB");
	this.shape_35.setTransform(358,130.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(25,1,1).p("AAAlqIAALV");
	this.shape_36.setTransform(358,131.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(25,1,1).p("AAAl0IAALp");
	this.shape_37.setTransform(358,132.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(25,1,1).p("AAAl+IAAL9");
	this.shape_38.setTransform(358,133.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(25,1,1).p("AAAmIIAAMR");
	this.shape_39.setTransform(358,134.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(25,1,1).p("AAAmSIAAMl");
	this.shape_40.setTransform(358,135.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(25,1,1).p("AAAmcIAAM5");
	this.shape_41.setTransform(358,136.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(25,1,1).p("AAAmmIAANN");
	this.shape_42.setTransform(358,137.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(25,1,1).p("AAAmwIAANh");
	this.shape_43.setTransform(358,138.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(25,1,1).p("AAAm7IAAN2");
	this.shape_44.setTransform(358,139.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(25,1,1).p("AAAnFIAAOK");
	this.shape_45.setTransform(358,140.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(25,1,1).p("AAAnPIAAOe");
	this.shape_46.setTransform(358,141.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(25,1,1).p("AAAnZIAAOz");
	this.shape_47.setTransform(358,142.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(25,1,1).p("AAAnjIAAPH");
	this.shape_48.setTransform(358,143.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(25,1,1).p("AAAntIAAPb");
	this.shape_49.setTransform(358,144.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(25,1,1).p("AAAn3IAAPv");
	this.shape_50.setTransform(358,145.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(25,1,1).p("AAAoBIAAQD");
	this.shape_51.setTransform(358,146.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(25,1,1).p("AAAoLIAAQX");
	this.shape_52.setTransform(358,147.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(25,1,1).p("AAAoVIAAQr");
	this.shape_53.setTransform(358,148.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(25,1,1).p("AAAofIAAQ/");
	this.shape_54.setTransform(358,149.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(25,1,1).p("AAAopIAART");
	this.shape_55.setTransform(358,150.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(25,1,1).p("AAAozIAARn");
	this.shape_56.setTransform(358,151.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(25,1,1).p("AAAo+IAAR8");
	this.shape_57.setTransform(358,152.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(25,1,1).p("AAApIIAASQ");
	this.shape_58.setTransform(358,153.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(25,1,1).p("AAApSIAASk");
	this.shape_59.setTransform(358,154.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(25,1,1).p("AAApcIAAS5");
	this.shape_60.setTransform(358,155.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(25,1,1).p("AAApmIAATN");
	this.shape_61.setTransform(358,156.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(25,1,1).p("AAApwIAATh");
	this.shape_62.setTransform(358,157.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(25,1,1).p("AAAp6IAAT1");
	this.shape_63.setTransform(358,158.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(25,1,1).p("AAAqEIAAUJ");
	this.shape_64.setTransform(358,159.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(25,1,1).p("AAAqOIAAUd");
	this.shape_65.setTransform(358,160.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(25,1,1).p("AAAqYIAAUx");
	this.shape_66.setTransform(358,161.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(25,1,1).p("AAAqiIAAVF");
	this.shape_67.setTransform(358,162.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(25,1,1).p("AAAqsIAAVZ");
	this.shape_68.setTransform(358,163.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(25,1,1).p("AAAq3IAAVv");
	this.shape_69.setTransform(358,164.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(25,1,1).p("AAArBIAAWD");
	this.shape_70.setTransform(358,165.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(25,1,1).p("AAArLIAAWX");
	this.shape_71.setTransform(358,166.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(25,1,1).p("AAArVIAAWr");
	this.shape_72.setTransform(358,167.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(25,1,1).p("AAArfIAAW/");
	this.shape_73.setTransform(358,168.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(25,1,1).p("AAArpIAAXT");
	this.shape_74.setTransform(358,169.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(25,1,1).p("AAArzIAAXn");
	this.shape_75.setTransform(358,170.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(25,1,1).p("AAAr9IAAX7");
	this.shape_76.setTransform(358,171.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(25,1,1).p("AAAsHIAAYP");
	this.shape_77.setTransform(358,172.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(25,1,1).p("AAAsRIAAYj");
	this.shape_78.setTransform(358,173.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(25,1,1).p("AAAsbIAAY3");
	this.shape_79.setTransform(358,174.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(25,1,1).p("AAAslIAAZL");
	this.shape_80.setTransform(358,175.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(25,1,1).p("AAAsvIAAZf");
	this.shape_81.setTransform(358,176.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(25,1,1).p("AAAs6IAAZ1");
	this.shape_82.setTransform(358,177.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(25,1,1).p("AAAtEIAAaJ");
	this.shape_83.setTransform(358,178.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(25,1,1).p("AAAtOIAAad");
	this.shape_84.setTransform(358,179.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(25,1,1).p("AAAtYIAAax");
	this.shape_85.setTransform(358,180.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(25,1,1).p("AAAtiIAAbF");
	this.shape_86.setTransform(358,181.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(25,1,1).p("AAAtsIAAbZ");
	this.shape_87.setTransform(358,182.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(25,1,1).p("AAAt2IAAbt");
	this.shape_88.setTransform(358,183.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(25,1,1).p("AAAuAIAAcB");
	this.shape_89.setTransform(358,184.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(25,1,1).p("AAAuKIAAcV");
	this.shape_90.setTransform(358,185.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(25,1,1).p("AAAuUIAAcp");
	this.shape_91.setTransform(358,186.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(25,1,1).p("AAAueIAAc9");
	this.shape_92.setTransform(358,187.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(25,1,1).p("AAAuoIAAdR");
	this.shape_93.setTransform(358,188.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(25,1,1).p("AAAuzIAAdn");
	this.shape_94.setTransform(358,189.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(25,1,1).p("AAAu9IAAd7");
	this.shape_95.setTransform(358,190.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(25,1,1).p("AAAvHIAAeP");
	this.shape_96.setTransform(358,191.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(25,1,1).p("AAAvRIAAej");
	this.shape_97.setTransform(358,192.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(25,1,1).p("AAAvbIAAe3");
	this.shape_98.setTransform(358,193.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(25,1,1).p("AAAvlIAAfL");
	this.shape_99.setTransform(358,194.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(25,1,1).p("AAAvvIAAff");
	this.shape_100.setTransform(358,195.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(25,1,1).p("AAAv5IAAfz");
	this.shape_101.setTransform(358,196.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(25,1,1).p("AAAwDMAAAAgH");
	this.shape_102.setTransform(358,197.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(25,1,1).p("AAAwNMAAAAgb");
	this.shape_103.setTransform(358,198.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(25,1,1).p("AAAwXMAAAAgv");
	this.shape_104.setTransform(358,199.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(25,1,1).p("AAAwhMAAAAhD");
	this.shape_105.setTransform(358,200.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(25,1,1).p("AAAwrMAAAAhX");
	this.shape_106.setTransform(358,201.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(25,1,1).p("AAAw2MAAAAht");
	this.shape_107.setTransform(358,202.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(25,1,1).p("AAAxAMAAAAiB");
	this.shape_108.setTransform(358,203.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(25,1,1).p("AAAxKMAAAAiV");
	this.shape_109.setTransform(358,204.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(25,1,1).p("AAAxUMAAAAip");
	this.shape_110.setTransform(358,205.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(25,1,1).p("AAAxeMAAAAi9");
	this.shape_111.setTransform(358,206.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(25,1,1).p("AAAxoMAAAAjR");
	this.shape_112.setTransform(358,207.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(25,1,1).p("AAAxyMAAAAjl");
	this.shape_113.setTransform(358,209);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(25,1,1).p("AAAx8MAAAAj5");
	this.shape_114.setTransform(358,210);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(25,1,1).p("AAAyGMAAAAkN");
	this.shape_115.setTransform(358,211);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(25,1,1).p("AAAyQMAAAAkh");
	this.shape_116.setTransform(358,212);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(25,1,1).p("AAAyaMAAAAk1");
	this.shape_117.setTransform(358,213);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(25,1,1).p("AAAykMAAAAlJ");
	this.shape_118.setTransform(358,214);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(25,1,1).p("AAAyvMAAAAlf");
	this.shape_119.setTransform(358,215);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(25,1,1).p("AAAy5MAAAAlz");
	this.shape_120.setTransform(358,216);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(25,1,1).p("AAAzDMAAAAmH");
	this.shape_121.setTransform(358,217);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(25,1,1).p("AAAzNMAAAAmb");
	this.shape_122.setTransform(358,218);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(25,1,1).p("AAAzXMAAAAmv");
	this.shape_123.setTransform(358,219);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(25,1,1).p("AAAzhMAAAAnD");
	this.shape_124.setTransform(358,220);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(25,1,1).p("AAAzrMAAAAnX");
	this.shape_125.setTransform(358,221);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(25,1,1).p("AAAz1MAAAAnr");
	this.shape_126.setTransform(358,222.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(25,1,1).p("AAAz/MAAAAn/");
	this.shape_127.setTransform(358,223.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(25,1,1).p("AAA0JMAAAAoT");
	this.shape_128.setTransform(358,224.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(25,1,1).p("AAA0TMAAAAon");
	this.shape_129.setTransform(358,225.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(25,1,1).p("AAA0dMAAAAo7");
	this.shape_130.setTransform(358,226.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(25,1,1).p("AAA0nMAAAApP");
	this.shape_131.setTransform(358,227.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(25,1,1).p("AAA0yMAAAApk");
	this.shape_132.setTransform(358,228.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(25,1,1).p("AAA08MAAAAp4");
	this.shape_133.setTransform(358,229.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(25,1,1).p("AAA1GMAAAAqM");
	this.shape_134.setTransform(358,230.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(25,1,1).p("AAA1QMAAAAqh");
	this.shape_135.setTransform(358,231.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(25,1,1).p("AAA1aMAAAAq1");
	this.shape_136.setTransform(358,232.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(25,1,1).p("AAA1kMAAAArJ");
	this.shape_137.setTransform(358,233.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(25,1,1).p("AAA1uMAAAArd");
	this.shape_138.setTransform(358,234.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(25,1,1).p("AAA14MAAAArx");
	this.shape_139.setTransform(358,235.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(25,1,1).p("AAA2CMAAAAsF");
	this.shape_140.setTransform(358,236.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(25,1,1).p("AAA2MMAAAAsZ");
	this.shape_141.setTransform(358,237.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(25,1,1).p("AAA2WMAAAAst");
	this.shape_142.setTransform(358,238.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(25,1,1).p("AAA2gMAAAAtB");
	this.shape_143.setTransform(358,239.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(25,1,1).p("AAA2qMAAAAtV");
	this.shape_144.setTransform(358,240.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(25,1,1).p("AAA21MAAAAtr");
	this.shape_145.setTransform(358,241.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(25,1,1).p("AAA2/MAAAAt/");
	this.shape_146.setTransform(358,242.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(25,1,1).p("AAA3JMAAAAuT");
	this.shape_147.setTransform(358,243.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(25,1,1).p("AAA3TMAAAAun");
	this.shape_148.setTransform(358,244.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(25,1,1).p("AAA3dMAAAAu7");
	this.shape_149.setTransform(358,245.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(25,1,1).p("AAA3nMAAAAvP");
	this.shape_150.setTransform(358,246.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").ss(25,1,1).p("AAA3xMAAAAvj");
	this.shape_151.setTransform(358,247.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(25,1,1).p("AAA37MAAAAv3");
	this.shape_152.setTransform(358,248.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#000000").ss(25,1,1).p("AAA4FMAAAAwL");
	this.shape_153.setTransform(358,249.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(25,1,1).p("AAA4PMAAAAwf");
	this.shape_154.setTransform(358,250.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#000000").ss(25,1,1).p("AAA4ZMAAAAwz");
	this.shape_155.setTransform(358,251.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(25,1,1).p("AAA4jMAAAAxH");
	this.shape_156.setTransform(358,252.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#000000").ss(25,1,1).p("AAA4tMAAAAxb");
	this.shape_157.setTransform(358,253.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(25,1,1).p("AAA44MAAAAxx");
	this.shape_158.setTransform(358,254.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#000000").ss(25,1,1).p("AAA5CMAAAAyF");
	this.shape_159.setTransform(358,255.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(25,1,1).p("AAA5MMAAAAyZ");
	this.shape_160.setTransform(358,256.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#000000").ss(25,1,1).p("AAA5WMAAAAyt");
	this.shape_161.setTransform(358,257.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(25,1,1).p("AAA5gMAAAAzB");
	this.shape_162.setTransform(358,258.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#000000").ss(25,1,1).p("AAA5qMAAAAzV");
	this.shape_163.setTransform(358,259.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(25,1,1).p("AAA50MAAAAzp");
	this.shape_164.setTransform(358,260.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").ss(25,1,1).p("AAA5+MAAAAz9");
	this.shape_165.setTransform(358,261.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(25,1,1).p("AAA6IMAAAA0R");
	this.shape_166.setTransform(358,262.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").ss(25,1,1).p("AAA6SMAAAA0l");
	this.shape_167.setTransform(358,263.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(25,1,1).p("AAA6cMAAAA05");
	this.shape_168.setTransform(358,264.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").ss(25,1,1).p("AAA6mMAAAA1N");
	this.shape_169.setTransform(358,265.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(25,1,1).p("AAA6wMAAAA1i");
	this.shape_170.setTransform(358,266.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").ss(25,1,1).p("AAA66MAAAA12");
	this.shape_171.setTransform(358,267.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").ss(25,1,1).p("AAA7EMAAAA2K");
	this.shape_172.setTransform(358,268.4);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#000000").ss(25,1,1).p("AAA7PMAAAA2f");
	this.shape_173.setTransform(358,269.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(25,1,1).p("AAA7ZMAAAA2z");
	this.shape_174.setTransform(358,270.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#000000").ss(25,1,1).p("AAA7jMAAAA3H");
	this.shape_175.setTransform(358,271.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#000000").ss(25,1,1).p("AAA7tMAAAA3b");
	this.shape_176.setTransform(358,272.4);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#000000").ss(25,1,1).p("AAA73MAAAA3v");
	this.shape_177.setTransform(358,273.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#000000").ss(25,1,1).p("AAA8BMAAAA4D");
	this.shape_178.setTransform(358,274.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#000000").ss(25,1,1).p("AAA8LMAAAA4X");
	this.shape_179.setTransform(358,275.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").ss(25,1,1).p("AAA8VMAAAA4r");
	this.shape_180.setTransform(358,276.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#000000").ss(25,1,1).p("AAA8fMAAAA4/");
	this.shape_181.setTransform(358,277.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#000000").ss(25,1,1).p("AAA8pMAAAA5T");
	this.shape_182.setTransform(358,278.5);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#000000").ss(25,1,1).p("AAA80MAAAA5p");
	this.shape_183.setTransform(358,279.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#000000").ss(25,1,1).p("AAA8+MAAAA59");
	this.shape_184.setTransform(358,280.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#000000").ss(25,1,1).p("AAA9IMAAAA6R");
	this.shape_185.setTransform(358,281.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#000000").ss(25,1,1).p("AAA9SMAAAA6l");
	this.shape_186.setTransform(358,282.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#000000").ss(25,1,1).p("AAA9cMAAAA65");
	this.shape_187.setTransform(358,283.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#000000").ss(25,1,1).p("AAA9mMAAAA7N");
	this.shape_188.setTransform(358,284.5);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#000000").ss(25,1,1).p("AAA9wMAAAA7h");
	this.shape_189.setTransform(358,285.6);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#000000").ss(25,1,1).p("AAAd7MAAAg71");
	this.shape_190.setTransform(358,286.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},140).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).wait(243));

	// Layer 24
	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#000000").ss(25,1,1).p("AANAAIgZAA");
	this.shape_191.setTransform(157.8,288.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#000000").ss(25,1,1).p("AgUAAIApAA");
	this.shape_192.setTransform(158.5,288.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#000000").ss(25,1,1).p("AgbAAIA3AA");
	this.shape_193.setTransform(159.3,288.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#000000").ss(25,1,1).p("AgjAAIBHAA");
	this.shape_194.setTransform(160,288.1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#000000").ss(25,1,1).p("AgqAAIBVAA");
	this.shape_195.setTransform(160.7,288.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#000000").ss(25,1,1).p("AgxAAIBjAA");
	this.shape_196.setTransform(161.5,288.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#000000").ss(25,1,1).p("Ag5AAIBzAA");
	this.shape_197.setTransform(162.2,288.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#000000").ss(25,1,1).p("AhAAAICBAA");
	this.shape_198.setTransform(163,288.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#000000").ss(25,1,1).p("AhIAAICRAA");
	this.shape_199.setTransform(163.7,288.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#000000").ss(25,1,1).p("AhPAAICfAA");
	this.shape_200.setTransform(164.5,288.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#000000").ss(25,1,1).p("AhXAAICvAA");
	this.shape_201.setTransform(165.2,288.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#000000").ss(25,1,1).p("AheAAIC9AA");
	this.shape_202.setTransform(166,288.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#000000").ss(25,1,1).p("AhmAAIDNAA");
	this.shape_203.setTransform(166.7,288.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#000000").ss(25,1,1).p("AhtAAIDbAA");
	this.shape_204.setTransform(167.5,288.1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#000000").ss(25,1,1).p("Ah1AAIDrAA");
	this.shape_205.setTransform(168.2,288.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#000000").ss(25,1,1).p("Ah8AAID5AA");
	this.shape_206.setTransform(169,288.1);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#000000").ss(25,1,1).p("AiEAAIEJAA");
	this.shape_207.setTransform(169.7,288.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#000000").ss(25,1,1).p("AiLAAIEXAA");
	this.shape_208.setTransform(170.5,288.1);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#000000").ss(25,1,1).p("AiTAAIEnAA");
	this.shape_209.setTransform(171.2,288.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#000000").ss(25,1,1).p("AiaAAIE1AA");
	this.shape_210.setTransform(171.9,288.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#000000").ss(25,1,1).p("AihAAIFDAA");
	this.shape_211.setTransform(172.7,288.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#000000").ss(25,1,1).p("AipAAIFTAA");
	this.shape_212.setTransform(173.4,288.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#000000").ss(25,1,1).p("AiwAAIFhAA");
	this.shape_213.setTransform(174.2,288.1);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#000000").ss(25,1,1).p("Ai4AAIFxAA");
	this.shape_214.setTransform(174.9,288.1);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#000000").ss(25,1,1).p("Ai/AAIF/AA");
	this.shape_215.setTransform(175.7,288.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#000000").ss(25,1,1).p("AjHAAIGPAA");
	this.shape_216.setTransform(176.4,288.1);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#000000").ss(25,1,1).p("AjOAAIGdAA");
	this.shape_217.setTransform(177.2,288.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#000000").ss(25,1,1).p("AjVAAIGsAA");
	this.shape_218.setTransform(177.9,288.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#000000").ss(25,1,1).p("AjdAAIG7AA");
	this.shape_219.setTransform(178.7,288.1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#000000").ss(25,1,1).p("AjkAAIHKAA");
	this.shape_220.setTransform(179.4,288.1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#000000").ss(25,1,1).p("AjsAAIHZAA");
	this.shape_221.setTransform(180.2,288.1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#000000").ss(25,1,1).p("AjzAAIHoAA");
	this.shape_222.setTransform(180.9,288.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#000000").ss(25,1,1).p("Aj7AAIH3AA");
	this.shape_223.setTransform(181.7,288.1);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#000000").ss(25,1,1).p("AkCAAIIGAA");
	this.shape_224.setTransform(182.4,288.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#000000").ss(25,1,1).p("AkKAAIIVAA");
	this.shape_225.setTransform(183.1,288.1);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#000000").ss(25,1,1).p("AkRAAIIjAA");
	this.shape_226.setTransform(183.9,288.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#000000").ss(25,1,1).p("AkZAAIIzAA");
	this.shape_227.setTransform(184.6,288.1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#000000").ss(25,1,1).p("AkgAAIJBAA");
	this.shape_228.setTransform(185.4,288.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#000000").ss(25,1,1).p("AkoAAIJRAA");
	this.shape_229.setTransform(186.1,288.1);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#000000").ss(25,1,1).p("AkvAAIJfAA");
	this.shape_230.setTransform(186.9,288.1);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#000000").ss(25,1,1).p("Ak3AAIJvAA");
	this.shape_231.setTransform(187.6,288.1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#000000").ss(25,1,1).p("Ak+AAIJ9AA");
	this.shape_232.setTransform(188.4,288.1);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#000000").ss(25,1,1).p("AlGAAIKNAA");
	this.shape_233.setTransform(189.1,288.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#000000").ss(25,1,1).p("AlNAAIKbAA");
	this.shape_234.setTransform(189.9,288.1);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#000000").ss(25,1,1).p("AlVAAIKrAA");
	this.shape_235.setTransform(190.6,288.1);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#000000").ss(25,1,1).p("AlcAAIK5AA");
	this.shape_236.setTransform(191.4,288.1);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#000000").ss(25,1,1).p("AlkAAILJAA");
	this.shape_237.setTransform(192.1,288.1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#000000").ss(25,1,1).p("AlrAAILXAA");
	this.shape_238.setTransform(192.9,288.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#000000").ss(25,1,1).p("AlyAAILlAA");
	this.shape_239.setTransform(193.6,288.1);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#000000").ss(25,1,1).p("Al6AAIL1AA");
	this.shape_240.setTransform(194.3,288.1);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#000000").ss(25,1,1).p("AmBAAIMDAA");
	this.shape_241.setTransform(195.1,288.1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#000000").ss(25,1,1).p("AmJAAIMTAA");
	this.shape_242.setTransform(195.8,288.1);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#000000").ss(25,1,1).p("AmQAAIMhAA");
	this.shape_243.setTransform(196.6,288.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#000000").ss(25,1,1).p("AmYAAIMxAA");
	this.shape_244.setTransform(197.3,288.1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#000000").ss(25,1,1).p("AmfAAIM/AA");
	this.shape_245.setTransform(198.1,288.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#000000").ss(25,1,1).p("AmnAAINOAA");
	this.shape_246.setTransform(198.8,288.1);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#000000").ss(25,1,1).p("AmuAAINdAA");
	this.shape_247.setTransform(199.6,288.1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#000000").ss(25,1,1).p("Am1AAINsAA");
	this.shape_248.setTransform(200.3,288.1);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#000000").ss(25,1,1).p("Am9AAIN7AA");
	this.shape_249.setTransform(201.1,288.1);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#000000").ss(25,1,1).p("AnEAAIOKAA");
	this.shape_250.setTransform(201.8,288.1);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#000000").ss(25,1,1).p("AnMAAIOZAA");
	this.shape_251.setTransform(202.6,288.1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#000000").ss(25,1,1).p("AnTAAIOoAA");
	this.shape_252.setTransform(203.3,288.1);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#000000").ss(25,1,1).p("AnbAAIO3AA");
	this.shape_253.setTransform(204,288.1);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#000000").ss(25,1,1).p("AniAAIPFAA");
	this.shape_254.setTransform(204.8,288.1);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#000000").ss(25,1,1).p("AnqAAIPVAA");
	this.shape_255.setTransform(205.5,288.1);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#000000").ss(25,1,1).p("AnxAAIPjAA");
	this.shape_256.setTransform(206.3,288.1);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#000000").ss(25,1,1).p("An5AAIPzAA");
	this.shape_257.setTransform(207,288.1);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#000000").ss(25,1,1).p("AoAAAIQBAA");
	this.shape_258.setTransform(207.8,288.1);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#000000").ss(25,1,1).p("AoIAAIQRAA");
	this.shape_259.setTransform(208.5,288.1);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#000000").ss(25,1,1).p("AoPAAIQfAA");
	this.shape_260.setTransform(209.3,288.1);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#000000").ss(25,1,1).p("AoXAAIQvAA");
	this.shape_261.setTransform(210,288.1);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#000000").ss(25,1,1).p("AoeAAIQ9AA");
	this.shape_262.setTransform(210.8,288.1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#000000").ss(25,1,1).p("AomAAIRNAA");
	this.shape_263.setTransform(211.5,288.1);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#000000").ss(25,1,1).p("AotAAIRbAA");
	this.shape_264.setTransform(212.3,288.1);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#000000").ss(25,1,1).p("Ao1AAIRrAA");
	this.shape_265.setTransform(213,288.1);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#000000").ss(25,1,1).p("Ao8AAIR5AA");
	this.shape_266.setTransform(213.8,288.1);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#000000").ss(25,1,1).p("ApEAAISJAA");
	this.shape_267.setTransform(214.5,288.1);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#000000").ss(25,1,1).p("ApLAAISXAA");
	this.shape_268.setTransform(215.2,288.1);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#000000").ss(25,1,1).p("ApSAAISlAA");
	this.shape_269.setTransform(216,288.1);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#000000").ss(25,1,1).p("ApaAAIS1AA");
	this.shape_270.setTransform(216.7,288.1);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#000000").ss(25,1,1).p("AphAAITDAA");
	this.shape_271.setTransform(217.5,288.1);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#000000").ss(25,1,1).p("AppAAITTAA");
	this.shape_272.setTransform(218.2,288.1);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#000000").ss(25,1,1).p("ApwAAIThAA");
	this.shape_273.setTransform(219,288.1);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#000000").ss(25,1,1).p("Ap4AAITxAA");
	this.shape_274.setTransform(219.7,288.1);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#000000").ss(25,1,1).p("Ap/AAIT/AA");
	this.shape_275.setTransform(220.5,288.1);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#000000").ss(25,1,1).p("AqHAAIUPAA");
	this.shape_276.setTransform(221.2,288.1);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#000000").ss(25,1,1).p("AqOAAIUdAA");
	this.shape_277.setTransform(222,288.1);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#000000").ss(25,1,1).p("AqWAAIUtAA");
	this.shape_278.setTransform(222.7,288.1);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#000000").ss(25,1,1).p("AqdAAIU7AA");
	this.shape_279.setTransform(223.5,288.1);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#000000").ss(25,1,1).p("AqlAAIVLAA");
	this.shape_280.setTransform(224.2,288.1);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#000000").ss(25,1,1).p("AqsAAIVZAA");
	this.shape_281.setTransform(225,288.1);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#000000").ss(25,1,1).p("Aq0AAIVpAA");
	this.shape_282.setTransform(225.7,288.1);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#000000").ss(25,1,1).p("Aq7AAIV3AA");
	this.shape_283.setTransform(226.4,288.1);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#000000").ss(25,1,1).p("ArCAAIWFAA");
	this.shape_284.setTransform(227.2,288.1);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#000000").ss(25,1,1).p("ArKAAIWVAA");
	this.shape_285.setTransform(227.9,288.1);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#000000").ss(25,1,1).p("ArRAAIWjAA");
	this.shape_286.setTransform(228.7,288.1);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#000000").ss(25,1,1).p("ArZAAIWzAA");
	this.shape_287.setTransform(229.4,288.1);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#000000").ss(25,1,1).p("ArgAAIXBAA");
	this.shape_288.setTransform(230.2,288.1);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#000000").ss(25,1,1).p("AroAAIXRAA");
	this.shape_289.setTransform(230.9,288.1);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#000000").ss(25,1,1).p("ArvAAIXfAA");
	this.shape_290.setTransform(231.7,288.1);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#000000").ss(25,1,1).p("Ar3AAIXvAA");
	this.shape_291.setTransform(232.4,288.1);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#000000").ss(25,1,1).p("Ar+AAIX9AA");
	this.shape_292.setTransform(233.2,288.1);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#000000").ss(25,1,1).p("AsGAAIYNAA");
	this.shape_293.setTransform(233.9,288.1);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#000000").ss(25,1,1).p("AsNAAIYbAA");
	this.shape_294.setTransform(234.7,288.1);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#000000").ss(25,1,1).p("AsVAAIYrAA");
	this.shape_295.setTransform(235.4,288.1);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#000000").ss(25,1,1).p("AscAAIY5AA");
	this.shape_296.setTransform(236.2,288.1);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#000000").ss(25,1,1).p("AskAAIZJAA");
	this.shape_297.setTransform(236.9,288.1);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#000000").ss(25,1,1).p("AsrAAIZXAA");
	this.shape_298.setTransform(237.6,288.1);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#000000").ss(25,1,1).p("AsyAAIZlAA");
	this.shape_299.setTransform(238.4,288.1);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#000000").ss(25,1,1).p("As6AAIZ1AA");
	this.shape_300.setTransform(239.1,288.1);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#000000").ss(25,1,1).p("AtBAAIaDAA");
	this.shape_301.setTransform(239.9,288.1);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#000000").ss(25,1,1).p("AtJAAIaTAA");
	this.shape_302.setTransform(240.6,288.1);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#000000").ss(25,1,1).p("AtQAAIahAA");
	this.shape_303.setTransform(241.4,288.1);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#000000").ss(25,1,1).p("AtYAAIaxAA");
	this.shape_304.setTransform(242.1,288.1);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#000000").ss(25,1,1).p("AtfAAIa/AA");
	this.shape_305.setTransform(242.9,288.1);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#000000").ss(25,1,1).p("AtnAAIbPAA");
	this.shape_306.setTransform(243.6,288.1);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#000000").ss(25,1,1).p("AtuAAIbdAA");
	this.shape_307.setTransform(244.4,288.1);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#000000").ss(25,1,1).p("At2AAIbtAA");
	this.shape_308.setTransform(245.1,288.1);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#000000").ss(25,1,1).p("At9AAIb7AA");
	this.shape_309.setTransform(245.9,288.1);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#000000").ss(25,1,1).p("AuFAAIcLAA");
	this.shape_310.setTransform(246.6,288.1);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f().s("#000000").ss(25,1,1).p("AuMAAIcZAA");
	this.shape_311.setTransform(247.4,288.1);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("#000000").ss(25,1,1).p("AuTAAIcnAA");
	this.shape_312.setTransform(248.1,288.1);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("#000000").ss(25,1,1).p("AubAAIc3AA");
	this.shape_313.setTransform(248.8,288.1);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("#000000").ss(25,1,1).p("AuiAAIdFAA");
	this.shape_314.setTransform(249.6,288.1);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f().s("#000000").ss(25,1,1).p("AuqAAIdVAA");
	this.shape_315.setTransform(250.3,288.1);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#000000").ss(25,1,1).p("AuxAAIdjAA");
	this.shape_316.setTransform(251.1,288.1);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("#000000").ss(25,1,1).p("Au5AAIdzAA");
	this.shape_317.setTransform(251.8,288.1);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#000000").ss(25,1,1).p("AvAAAIeBAA");
	this.shape_318.setTransform(252.6,288.1);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f().s("#000000").ss(25,1,1).p("AvIAAIeRAA");
	this.shape_319.setTransform(253.3,288.1);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("#000000").ss(25,1,1).p("AvPAAIefAA");
	this.shape_320.setTransform(254.1,288.1);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("#000000").ss(25,1,1).p("AvXAAIevAA");
	this.shape_321.setTransform(254.8,288.1);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("#000000").ss(25,1,1).p("AveAAIe9AA");
	this.shape_322.setTransform(255.6,288.1);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f().s("#000000").ss(25,1,1).p("AvlAAIfMAA");
	this.shape_323.setTransform(256.3,288.1);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("#000000").ss(25,1,1).p("AvtAAIfbAA");
	this.shape_324.setTransform(257.1,288.1);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f().s("#000000").ss(25,1,1).p("Av0AAIfqAA");
	this.shape_325.setTransform(257.8,288.1);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#000000").ss(25,1,1).p("Av8AAIf5AA");
	this.shape_326.setTransform(258.6,288.1);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f().s("#000000").ss(25,1,1).p("AwDAAMAgHAAA");
	this.shape_327.setTransform(259.3,288.1);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#000000").ss(25,1,1).p("AwLAAMAgXAAA");
	this.shape_328.setTransform(260,288.1);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f().s("#000000").ss(25,1,1).p("AwSAAMAglAAA");
	this.shape_329.setTransform(260.8,288.1);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#000000").ss(25,1,1).p("AwaAAMAg1AAA");
	this.shape_330.setTransform(261.5,288.1);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("#000000").ss(25,1,1).p("AwhAAMAhDAAA");
	this.shape_331.setTransform(262.3,288.1);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#000000").ss(25,1,1).p("AwpAAMAhTAAA");
	this.shape_332.setTransform(263,288.1);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("#000000").ss(25,1,1).p("AwwAAMAhhAAA");
	this.shape_333.setTransform(263.8,288.1);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("#000000").ss(25,1,1).p("Aw4AAMAhxAAA");
	this.shape_334.setTransform(264.5,288.1);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("#000000").ss(25,1,1).p("Aw/AAMAh/AAA");
	this.shape_335.setTransform(265.3,288.1);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("#000000").ss(25,1,1).p("AxHAAMAiPAAA");
	this.shape_336.setTransform(266,288.1);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("#000000").ss(25,1,1).p("AxOAAMAidAAA");
	this.shape_337.setTransform(266.8,288.1);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#000000").ss(25,1,1).p("AxWAAMAitAAA");
	this.shape_338.setTransform(267.5,288.1);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f().s("#000000").ss(25,1,1).p("AxdAAMAi7AAA");
	this.shape_339.setTransform(268.3,288.1);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#000000").ss(25,1,1).p("AxlAAMAjLAAA");
	this.shape_340.setTransform(269,288.1);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("#000000").ss(25,1,1).p("AxsAAMAjZAAA");
	this.shape_341.setTransform(269.7,288.1);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#000000").ss(25,1,1).p("AxzAAMAjnAAA");
	this.shape_342.setTransform(270.5,288.1);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f().s("#000000").ss(25,1,1).p("Ax7AAMAj3AAA");
	this.shape_343.setTransform(271.2,288.1);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#000000").ss(25,1,1).p("AyCAAMAkFAAA");
	this.shape_344.setTransform(272,288.1);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f().s("#000000").ss(25,1,1).p("AyKAAMAkVAAA");
	this.shape_345.setTransform(272.7,288.1);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#000000").ss(25,1,1).p("AyRAAMAkjAAA");
	this.shape_346.setTransform(273.5,288.1);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f().s("#000000").ss(25,1,1).p("AyZAAMAkzAAA");
	this.shape_347.setTransform(274.2,288.1);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#000000").ss(25,1,1).p("AygAAMAlBAAA");
	this.shape_348.setTransform(275,288.1);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f().s("#000000").ss(25,1,1).p("AyoAAMAlRAAA");
	this.shape_349.setTransform(275.7,288.1);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#000000").ss(25,1,1).p("AyvAAMAlfAAA");
	this.shape_350.setTransform(276.5,288.1);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f().s("#000000").ss(25,1,1).p("Ay3AAMAlvAAA");
	this.shape_351.setTransform(277.2,288.1);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#000000").ss(25,1,1).p("AS/AAMgl9AAA");
	this.shape_352.setTransform(278,288.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_191}]},340).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).wait(71));

	// Layer 23
	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f().s("#000000").ss(25,1,1).p("AAAgTIAAAn");
	this.shape_353.setTransform(154.1,97.1);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("#000000").ss(25,1,1).p("AAAAcIAAg3");
	this.shape_354.setTransform(154.1,97.8);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f().s("#000000").ss(25,1,1).p("AAAAkIAAhH");
	this.shape_355.setTransform(154.1,98.6);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("#000000").ss(25,1,1).p("AAAArIAAhW");
	this.shape_356.setTransform(154.1,99.4);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f().s("#000000").ss(25,1,1).p("AAAA0IAAhm");
	this.shape_357.setTransform(154.1,100.2);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("#000000").ss(25,1,1).p("AAAA8IAAh3");
	this.shape_358.setTransform(154.1,101);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f().s("#000000").ss(25,1,1).p("AAABDIAAiF");
	this.shape_359.setTransform(154.1,101.8);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#000000").ss(25,1,1).p("AAABLIAAiV");
	this.shape_360.setTransform(154.1,102.6);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f().s("#000000").ss(25,1,1).p("AAABTIAAil");
	this.shape_361.setTransform(154.1,103.4);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("#000000").ss(25,1,1).p("AAABbIAAi1");
	this.shape_362.setTransform(154.1,104.1);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f().s("#000000").ss(25,1,1).p("AAABjIAAjF");
	this.shape_363.setTransform(154.1,104.9);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("#000000").ss(25,1,1).p("AAABrIAAjU");
	this.shape_364.setTransform(154.1,105.7);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f().s("#000000").ss(25,1,1).p("AAABzIAAjl");
	this.shape_365.setTransform(154.1,106.5);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("#000000").ss(25,1,1).p("AAAB6IAAj0");
	this.shape_366.setTransform(154.1,107.3);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f().s("#000000").ss(25,1,1).p("AAACCIAAkD");
	this.shape_367.setTransform(154.1,108.1);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("#000000").ss(25,1,1).p("AAACKIAAkT");
	this.shape_368.setTransform(154.1,108.9);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f().s("#000000").ss(25,1,1).p("AAACSIAAkj");
	this.shape_369.setTransform(154.1,109.7);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("#000000").ss(25,1,1).p("AAACaIAAkz");
	this.shape_370.setTransform(154.1,110.4);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f().s("#000000").ss(25,1,1).p("AAACiIAAlD");
	this.shape_371.setTransform(154.1,111.2);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f().s("#000000").ss(25,1,1).p("AAACqIAAlT");
	this.shape_372.setTransform(154.1,112);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f().s("#000000").ss(25,1,1).p("AAACyIAAlj");
	this.shape_373.setTransform(154.1,112.8);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("#000000").ss(25,1,1).p("AAAC6IAAly");
	this.shape_374.setTransform(154.1,113.6);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f().s("#000000").ss(25,1,1).p("AAADBIAAmB");
	this.shape_375.setTransform(154.1,114.4);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("#000000").ss(25,1,1).p("AAADJIAAmR");
	this.shape_376.setTransform(154.1,115.2);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f().s("#000000").ss(25,1,1).p("AAADRIAAmh");
	this.shape_377.setTransform(154.1,116);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("#000000").ss(25,1,1).p("AAADZIAAmx");
	this.shape_378.setTransform(154.1,116.7);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f().s("#000000").ss(25,1,1).p("AAADhIAAnB");
	this.shape_379.setTransform(154.1,117.5);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("#000000").ss(25,1,1).p("AAADpIAAnR");
	this.shape_380.setTransform(154.1,118.3);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f().s("#000000").ss(25,1,1).p("AAADxIAAng");
	this.shape_381.setTransform(154.1,119.1);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("#000000").ss(25,1,1).p("AAAD4IAAnw");
	this.shape_382.setTransform(154.1,119.9);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f().s("#000000").ss(25,1,1).p("AAAEAIAAn/");
	this.shape_383.setTransform(154.1,120.7);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("#000000").ss(25,1,1).p("AAAEIIAAoP");
	this.shape_384.setTransform(154.1,121.5);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f().s("#000000").ss(25,1,1).p("AAAEQIAAof");
	this.shape_385.setTransform(154.1,122.3);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("#000000").ss(25,1,1).p("AAAEYIAAov");
	this.shape_386.setTransform(154.1,123);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f().s("#000000").ss(25,1,1).p("AAAEgIAAo/");
	this.shape_387.setTransform(154.1,123.8);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("#000000").ss(25,1,1).p("AAAEoIAApP");
	this.shape_388.setTransform(154.1,124.6);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f().s("#000000").ss(25,1,1).p("AAAEvIAApe");
	this.shape_389.setTransform(154.1,125.4);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("#000000").ss(25,1,1).p("AAAE4IAApu");
	this.shape_390.setTransform(154.1,126.2);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f().s("#000000").ss(25,1,1).p("AAAE/IAAp9");
	this.shape_391.setTransform(154.1,127);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f().s("#000000").ss(25,1,1).p("AAAFHIAAqN");
	this.shape_392.setTransform(154.1,127.8);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f().s("#000000").ss(25,1,1).p("AAAFPIAAqd");
	this.shape_393.setTransform(154.1,128.6);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f().s("#000000").ss(25,1,1).p("AAAFXIAAqt");
	this.shape_394.setTransform(154.1,129.3);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f().s("#000000").ss(25,1,1).p("AAAFfIAAq9");
	this.shape_395.setTransform(154.1,130.1);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("#000000").ss(25,1,1).p("AAAFnIAArN");
	this.shape_396.setTransform(154.1,130.9);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f().s("#000000").ss(25,1,1).p("AAAFvIAArc");
	this.shape_397.setTransform(154.1,131.7);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("#000000").ss(25,1,1).p("AAAF2IAArs");
	this.shape_398.setTransform(154.1,132.5);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f().s("#000000").ss(25,1,1).p("AAAF+IAAr7");
	this.shape_399.setTransform(154.1,133.3);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f().s("#000000").ss(25,1,1).p("AAAGGIAAsL");
	this.shape_400.setTransform(154.1,134.1);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f().s("#000000").ss(25,1,1).p("AAAGOIAAsb");
	this.shape_401.setTransform(154.1,134.9);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f().s("#000000").ss(25,1,1).p("AAAGWIAAsr");
	this.shape_402.setTransform(154.1,135.7);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f().s("#000000").ss(25,1,1).p("AAAGeIAAs7");
	this.shape_403.setTransform(154.1,136.4);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f().s("#000000").ss(25,1,1).p("AAAGmIAAtL");
	this.shape_404.setTransform(154.1,137.2);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f().s("#000000").ss(25,1,1).p("AAAGtIAAta");
	this.shape_405.setTransform(154.1,138);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f().s("#000000").ss(25,1,1).p("AAAG1IAAtp");
	this.shape_406.setTransform(154.1,138.8);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f().s("#000000").ss(25,1,1).p("AAAG9IAAt5");
	this.shape_407.setTransform(154.1,139.6);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f().s("#000000").ss(25,1,1).p("AAAHFIAAuJ");
	this.shape_408.setTransform(154.1,140.4);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f().s("#000000").ss(25,1,1).p("AAAHNIAAuZ");
	this.shape_409.setTransform(154.1,141.2);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f().s("#000000").ss(25,1,1).p("AAAHVIAAup");
	this.shape_410.setTransform(154.1,142);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f().s("#000000").ss(25,1,1).p("AAAHdIAAu5");
	this.shape_411.setTransform(154.1,142.7);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f().s("#000000").ss(25,1,1).p("AAAHlIAAvJ");
	this.shape_412.setTransform(154.1,143.5);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f().s("#000000").ss(25,1,1).p("AAAHtIAAvZ");
	this.shape_413.setTransform(154.1,144.3);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f().s("#000000").ss(25,1,1).p("AAAH0IAAvn");
	this.shape_414.setTransform(154.1,145.1);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f().s("#000000").ss(25,1,1).p("AAAH8IAAv3");
	this.shape_415.setTransform(154.1,145.9);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("#000000").ss(25,1,1).p("AAAIEIAAwH");
	this.shape_416.setTransform(154.1,146.7);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f().s("#000000").ss(25,1,1).p("AAAIMIAAwX");
	this.shape_417.setTransform(154.1,147.5);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f().s("#000000").ss(25,1,1).p("AAAIUIAAwn");
	this.shape_418.setTransform(154.1,148.3);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f().s("#000000").ss(25,1,1).p("AAAIcIAAw3");
	this.shape_419.setTransform(154.1,149);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f().s("#000000").ss(25,1,1).p("AAAIkIAAxH");
	this.shape_420.setTransform(154.1,149.8);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f().s("#000000").ss(25,1,1).p("AAAIsIAAxX");
	this.shape_421.setTransform(154.1,150.6);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f().s("#000000").ss(25,1,1).p("AAAIzIAAxl");
	this.shape_422.setTransform(154.1,151.4);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f().s("#000000").ss(25,1,1).p("AAAI7IAAx1");
	this.shape_423.setTransform(154.1,152.2);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f().s("#000000").ss(25,1,1).p("AAAJDIAAyF");
	this.shape_424.setTransform(154.1,153);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f().s("#000000").ss(25,1,1).p("AAAJLIAAyV");
	this.shape_425.setTransform(154.1,153.8);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f().s("#000000").ss(25,1,1).p("AAAJTIAAyl");
	this.shape_426.setTransform(154.1,154.6);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f().s("#000000").ss(25,1,1).p("AAAJbIAAy1");
	this.shape_427.setTransform(154.1,155.3);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f().s("#000000").ss(25,1,1).p("AAAJjIAAzF");
	this.shape_428.setTransform(154.1,156.1);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f().s("#000000").ss(25,1,1).p("AAAJrIAAzV");
	this.shape_429.setTransform(154.1,156.9);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f().s("#000000").ss(25,1,1).p("AAAJyIAAzj");
	this.shape_430.setTransform(154.1,157.7);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f().s("#000000").ss(25,1,1).p("AAAJ6IAAzz");
	this.shape_431.setTransform(154.1,158.5);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f().s("#000000").ss(25,1,1).p("AAAKCIAA0D");
	this.shape_432.setTransform(154.1,159.3);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f().s("#000000").ss(25,1,1).p("AAAKKIAA0T");
	this.shape_433.setTransform(154.1,160.1);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f().s("#000000").ss(25,1,1).p("AAAKSIAA0j");
	this.shape_434.setTransform(154.1,160.9);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f().s("#000000").ss(25,1,1).p("AAAKaIAA0z");
	this.shape_435.setTransform(154.1,161.6);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f().s("#000000").ss(25,1,1).p("AAAKiIAA1D");
	this.shape_436.setTransform(154.1,162.4);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f().s("#000000").ss(25,1,1).p("AAAKqIAA1S");
	this.shape_437.setTransform(154.1,163.2);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f().s("#000000").ss(25,1,1).p("AAAKxIAA1h");
	this.shape_438.setTransform(154.1,164);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f().s("#000000").ss(25,1,1).p("AAAK5IAA1x");
	this.shape_439.setTransform(154.1,164.8);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f().s("#000000").ss(25,1,1).p("AAALBIAA2B");
	this.shape_440.setTransform(154.1,165.6);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f().s("#000000").ss(25,1,1).p("AAALJIAA2R");
	this.shape_441.setTransform(154.1,166.4);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f().s("#000000").ss(25,1,1).p("AAALRIAA2h");
	this.shape_442.setTransform(154.1,167.2);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f().s("#000000").ss(25,1,1).p("AAALZIAA2x");
	this.shape_443.setTransform(154.1,167.9);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f().s("#000000").ss(25,1,1).p("AAALhIAA3A");
	this.shape_444.setTransform(154.1,168.7);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f().s("#000000").ss(25,1,1).p("AAALoIAA3Q");
	this.shape_445.setTransform(154.1,169.5);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f().s("#000000").ss(25,1,1).p("AAALwIAA3f");
	this.shape_446.setTransform(154.1,170.3);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f().s("#000000").ss(25,1,1).p("AAAL4IAA3v");
	this.shape_447.setTransform(154.1,171.1);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f().s("#000000").ss(25,1,1).p("AAAMAIAA3/");
	this.shape_448.setTransform(154.1,171.9);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f().s("#000000").ss(25,1,1).p("AAAMIIAA4P");
	this.shape_449.setTransform(154.1,172.7);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f().s("#000000").ss(25,1,1).p("AAAMQIAA4f");
	this.shape_450.setTransform(154.1,173.5);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f().s("#000000").ss(25,1,1).p("AAAMYIAA4v");
	this.shape_451.setTransform(154.1,174.2);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f().s("#000000").ss(25,1,1).p("AAAMfIAA4+");
	this.shape_452.setTransform(154.1,175);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f().s("#000000").ss(25,1,1).p("AAAMoIAA5P");
	this.shape_453.setTransform(154.1,175.8);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f().s("#000000").ss(25,1,1).p("AAAMvIAA5d");
	this.shape_454.setTransform(154.1,176.6);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f().s("#000000").ss(25,1,1).p("AAAM3IAA5t");
	this.shape_455.setTransform(154.1,177.4);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f().s("#000000").ss(25,1,1).p("AAAM/IAA59");
	this.shape_456.setTransform(154.1,178.2);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f().s("#000000").ss(25,1,1).p("AAANHIAA6N");
	this.shape_457.setTransform(154.1,179);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f().s("#000000").ss(25,1,1).p("AAANPIAA6d");
	this.shape_458.setTransform(154.1,179.8);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f().s("#000000").ss(25,1,1).p("AAANXIAA6t");
	this.shape_459.setTransform(154.1,180.5);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f().s("#000000").ss(25,1,1).p("AAANfIAA69");
	this.shape_460.setTransform(154.1,181.3);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f().s("#000000").ss(25,1,1).p("AAANmIAA7M");
	this.shape_461.setTransform(154.1,182.1);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f().s("#000000").ss(25,1,1).p("AAANvIAA7d");
	this.shape_462.setTransform(154.1,182.9);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f().s("#000000").ss(25,1,1).p("AAAN2IAA7r");
	this.shape_463.setTransform(154.1,183.7);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f().s("#000000").ss(25,1,1).p("AAAN+IAA77");
	this.shape_464.setTransform(154.1,184.5);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f().s("#000000").ss(25,1,1).p("AAAOGIAA8L");
	this.shape_465.setTransform(154.1,185.3);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f().s("#000000").ss(25,1,1).p("AAAOOIAA8b");
	this.shape_466.setTransform(154.1,186);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f().s("#000000").ss(25,1,1).p("AAAOWIAA8r");
	this.shape_467.setTransform(154.1,186.8);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f().s("#000000").ss(25,1,1).p("AAAOdIAA86");
	this.shape_468.setTransform(154.1,187.6);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f().s("#000000").ss(25,1,1).p("AAAOmIAA9L");
	this.shape_469.setTransform(154.1,188.4);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f().s("#000000").ss(25,1,1).p("AAAOuIAA9b");
	this.shape_470.setTransform(154.1,189.2);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f().s("#000000").ss(25,1,1).p("AAAO1IAA9p");
	this.shape_471.setTransform(154.1,190);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f().s("#000000").ss(25,1,1).p("AAAO9IAA95");
	this.shape_472.setTransform(154.1,190.8);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f().s("#000000").ss(25,1,1).p("AAAvEIAAeJ");
	this.shape_473.setTransform(154.1,191.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_353}]},9).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_408}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_412}]},1).to({state:[{t:this.shape_413}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_415}]},1).to({state:[{t:this.shape_416}]},1).to({state:[{t:this.shape_417}]},1).to({state:[{t:this.shape_418}]},1).to({state:[{t:this.shape_419}]},1).to({state:[{t:this.shape_420}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_422}]},1).to({state:[{t:this.shape_423}]},1).to({state:[{t:this.shape_424}]},1).to({state:[{t:this.shape_425}]},1).to({state:[{t:this.shape_426}]},1).to({state:[{t:this.shape_427}]},1).to({state:[{t:this.shape_428}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_430}]},1).to({state:[{t:this.shape_431}]},1).to({state:[{t:this.shape_432}]},1).to({state:[{t:this.shape_433}]},1).to({state:[{t:this.shape_434}]},1).to({state:[{t:this.shape_435}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_437}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_439}]},1).to({state:[{t:this.shape_440}]},1).to({state:[{t:this.shape_441}]},1).to({state:[{t:this.shape_442}]},1).to({state:[{t:this.shape_443}]},1).to({state:[{t:this.shape_444}]},1).to({state:[{t:this.shape_445}]},1).to({state:[{t:this.shape_446}]},1).to({state:[{t:this.shape_447}]},1).to({state:[{t:this.shape_448}]},1).to({state:[{t:this.shape_449}]},1).to({state:[{t:this.shape_450}]},1).to({state:[{t:this.shape_451}]},1).to({state:[{t:this.shape_452}]},1).to({state:[{t:this.shape_453}]},1).to({state:[{t:this.shape_454}]},1).to({state:[{t:this.shape_455}]},1).to({state:[{t:this.shape_456}]},1).to({state:[{t:this.shape_457}]},1).to({state:[{t:this.shape_458}]},1).to({state:[{t:this.shape_459}]},1).to({state:[{t:this.shape_460}]},1).to({state:[{t:this.shape_461}]},1).to({state:[{t:this.shape_462}]},1).to({state:[{t:this.shape_463}]},1).to({state:[{t:this.shape_464}]},1).to({state:[{t:this.shape_465}]},1).to({state:[{t:this.shape_466}]},1).to({state:[{t:this.shape_467}]},1).to({state:[{t:this.shape_468}]},1).to({state:[{t:this.shape_469}]},1).to({state:[{t:this.shape_470}]},1).to({state:[{t:this.shape_471}]},1).to({state:[{t:this.shape_472}]},1).to({state:[{t:this.shape_473}]},1).wait(443));

	// Base
	this.instance_4 = new lib.Symbol1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(277.1,285.7);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(572));

	// Background
	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_474.setTransform(275,275,3.373,2.543);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_475.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_475},{t:this.shape_474}]}).wait(572));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(273.5,214.3,553,811.5);
// library properties:
lib.properties = {
	width: 550,
	height: 550,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;