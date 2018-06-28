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
	this.shape.graphics.f("#FFFFFF").s().p("AzTZFQgzg4AAhBQAAg+A4g4QA3g6BBAAQA6AAA4A9QFNF+H6AAQHPAAFJlQQFHlOAAnZQAAnXlHlSQlJlQnPAAQkPAAjDB4IkgDLQhQAyhHAAQiMAAAAikIgR5hQAniJB9AAMAhBAAAQCkAAAACrQAACgiiAAI+EAAIgTQgQIPiuDHAAQJRAAGrG0QGoG2AAJrQAAJtmoG1QmrGxpRAAQqFAAmxnug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.7,-209.9,257.4,419.8);


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
	this.instance.setTransform(0.2,-99.7,1,1,0,0,0,0.4,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:70.3},119).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AiGmYIAAh/IENAAIAAB/g");
	var mask_graphics_1 = new cjs.Graphics().p("AiGBGIAAiLIENAAIAACLg");
	var mask_graphics_2 = new cjs.Graphics().p("AiGBNIAAiZIENAAIAACZg");
	var mask_graphics_3 = new cjs.Graphics().p("AiGBUIAAinIENAAIAACng");
	var mask_graphics_4 = new cjs.Graphics().p("AiGBbIAAi0IENAAIAAC0g");
	var mask_graphics_5 = new cjs.Graphics().p("AiGBhIAAjCIENAAIAADCg");
	var mask_graphics_6 = new cjs.Graphics().p("AiGBoIAAjPIENAAIAADPg");
	var mask_graphics_7 = new cjs.Graphics().p("AiGBvIAAjdIENAAIAADdg");
	var mask_graphics_8 = new cjs.Graphics().p("AiGB2IAAjrIENAAIAADrg");
	var mask_graphics_9 = new cjs.Graphics().p("AiGB9IAAj5IENAAIAAD5g");
	var mask_graphics_10 = new cjs.Graphics().p("AiGCEIAAkHIENAAIAAEHg");
	var mask_graphics_11 = new cjs.Graphics().p("AiGCLIAAkVIENAAIAAEVg");
	var mask_graphics_12 = new cjs.Graphics().p("AiGCRIAAkhIENAAIAAEhg");
	var mask_graphics_13 = new cjs.Graphics().p("AiGCYIAAkwIENAAIAAEwg");
	var mask_graphics_14 = new cjs.Graphics().p("AiGCfIAAk9IENAAIAAE9g");
	var mask_graphics_15 = new cjs.Graphics().p("AiGCmIAAlLIENAAIAAFLg");
	var mask_graphics_16 = new cjs.Graphics().p("AiGCtIAAlZIENAAIAAFZg");
	var mask_graphics_17 = new cjs.Graphics().p("AiGC0IAAlnIENAAIAAFng");
	var mask_graphics_18 = new cjs.Graphics().p("AiGC7IAAl1IENAAIAAF1g");
	var mask_graphics_19 = new cjs.Graphics().p("AiGDCIAAmDIENAAIAAGDg");
	var mask_graphics_20 = new cjs.Graphics().p("AiGDIIAAmPIENAAIAAGPg");
	var mask_graphics_21 = new cjs.Graphics().p("AiGDPIAAmdIENAAIAAGdg");
	var mask_graphics_22 = new cjs.Graphics().p("AiGDWIAAmrIENAAIAAGrg");
	var mask_graphics_23 = new cjs.Graphics().p("AiGDdIAAm5IENAAIAAG5g");
	var mask_graphics_24 = new cjs.Graphics().p("AiGDkIAAnHIENAAIAAHHg");
	var mask_graphics_25 = new cjs.Graphics().p("AiGDrIAAnVIENAAIAAHVg");
	var mask_graphics_26 = new cjs.Graphics().p("AiGDyIAAnjIENAAIAAHjg");
	var mask_graphics_27 = new cjs.Graphics().p("AiGD5IAAnxIENAAIAAHxg");
	var mask_graphics_28 = new cjs.Graphics().p("AiGD/IAAn9IENAAIAAH9g");
	var mask_graphics_29 = new cjs.Graphics().p("AiGEGIAAoLIENAAIAAILg");
	var mask_graphics_30 = new cjs.Graphics().p("AiGENIAAoZIENAAIAAIZg");
	var mask_graphics_31 = new cjs.Graphics().p("AiGEUIAAonIENAAIAAIng");
	var mask_graphics_32 = new cjs.Graphics().p("AiGEbIAAo1IENAAIAAI1g");
	var mask_graphics_33 = new cjs.Graphics().p("AiGEiIAApDIENAAIAAJDg");
	var mask_graphics_34 = new cjs.Graphics().p("AiGEpIAApRIENAAIAAJRg");
	var mask_graphics_35 = new cjs.Graphics().p("AiGEvIAApdIENAAIAAJdg");
	var mask_graphics_36 = new cjs.Graphics().p("AiGE2IAAprIENAAIAAJrg");
	var mask_graphics_37 = new cjs.Graphics().p("AiGE9IAAp5IENAAIAAJ5g");
	var mask_graphics_38 = new cjs.Graphics().p("AiGFEIAAqHIENAAIAAKHg");
	var mask_graphics_39 = new cjs.Graphics().p("AiGFLIAAqVIENAAIAAKVg");
	var mask_graphics_40 = new cjs.Graphics().p("AiGFSIAAqjIENAAIAAKjg");
	var mask_graphics_41 = new cjs.Graphics().p("AiGFZIAAqxIENAAIAAKxg");
	var mask_graphics_42 = new cjs.Graphics().p("AiGFfIAAq+IENAAIAAK+g");
	var mask_graphics_43 = new cjs.Graphics().p("AiGFmIAArLIENAAIAALLg");
	var mask_graphics_44 = new cjs.Graphics().p("AiGFtIAArZIENAAIAALZg");
	var mask_graphics_45 = new cjs.Graphics().p("AiGF0IAArnIENAAIAALng");
	var mask_graphics_46 = new cjs.Graphics().p("AiGF7IAAr1IENAAIAAL1g");
	var mask_graphics_47 = new cjs.Graphics().p("AiGGCIAAsDIENAAIAAMDg");
	var mask_graphics_48 = new cjs.Graphics().p("AiGGJIAAsRIENAAIAAMRg");
	var mask_graphics_49 = new cjs.Graphics().p("AiGGPIAAsdIENAAIAAMdg");
	var mask_graphics_50 = new cjs.Graphics().p("AiGGWIAAssIENAAIAAMsg");
	var mask_graphics_51 = new cjs.Graphics().p("AiGGeIAAs6IENAAIAAM6g");
	var mask_graphics_52 = new cjs.Graphics().p("AiGGkIAAtHIENAAIAANHg");
	var mask_graphics_53 = new cjs.Graphics().p("AiGGrIAAtVIENAAIAANVg");
	var mask_graphics_54 = new cjs.Graphics().p("AiGGyIAAtjIENAAIAANjg");
	var mask_graphics_55 = new cjs.Graphics().p("AiGG5IAAtxIENAAIAANxg");
	var mask_graphics_56 = new cjs.Graphics().p("AiGG/IAAt+IENAAIAAN+g");
	var mask_graphics_57 = new cjs.Graphics().p("AiGHHIAAuMIENAAIAAOMg");
	var mask_graphics_58 = new cjs.Graphics().p("AiGHOIAAubIENAAIAAObg");
	var mask_graphics_59 = new cjs.Graphics().p("AiGHUIAAunIENAAIAAOng");
	var mask_graphics_60 = new cjs.Graphics().p("AiGHbIAAu1IENAAIAAO1g");
	var mask_graphics_61 = new cjs.Graphics().p("AiGHiIAAvDIENAAIAAPDg");
	var mask_graphics_62 = new cjs.Graphics().p("AiGHpIAAvRIENAAIAAPRg");
	var mask_graphics_63 = new cjs.Graphics().p("AiGHwIAAvfIENAAIAAPfg");
	var mask_graphics_64 = new cjs.Graphics().p("AiGH3IAAvtIENAAIAAPtg");
	var mask_graphics_65 = new cjs.Graphics().p("AiGH+IAAv6IENAAIAAP6g");
	var mask_graphics_66 = new cjs.Graphics().p("AiGIEIAAwHIENAAIAAQHg");
	var mask_graphics_67 = new cjs.Graphics().p("AiGILIAAwVIENAAIAAQVg");
	var mask_graphics_68 = new cjs.Graphics().p("AiGISIAAwjIENAAIAAQjg");
	var mask_graphics_69 = new cjs.Graphics().p("AiGIZIAAwxIENAAIAAQxg");
	var mask_graphics_70 = new cjs.Graphics().p("AiGIgIAAw/IENAAIAAQ/g");
	var mask_graphics_71 = new cjs.Graphics().p("AiGInIAAxNIENAAIAARNg");
	var mask_graphics_72 = new cjs.Graphics().p("AiGIuIAAxbIENAAIAARbg");
	var mask_graphics_73 = new cjs.Graphics().p("AiGI0IAAxnIENAAIAARng");
	var mask_graphics_74 = new cjs.Graphics().p("AiGI7IAAx1IENAAIAAR1g");
	var mask_graphics_75 = new cjs.Graphics().p("AiGJCIAAyDIENAAIAASDg");
	var mask_graphics_76 = new cjs.Graphics().p("AiGJJIAAyRIENAAIAASRg");
	var mask_graphics_77 = new cjs.Graphics().p("AiGJQIAAyfIENAAIAASfg");
	var mask_graphics_78 = new cjs.Graphics().p("AiGJXIAAysIENAAIAASsg");
	var mask_graphics_79 = new cjs.Graphics().p("AiGJdIAAy6IENAAIAAS6g");
	var mask_graphics_80 = new cjs.Graphics().p("AiGJkIAAzHIENAAIAATHg");
	var mask_graphics_81 = new cjs.Graphics().p("AiGJrIAAzVIENAAIAATVg");
	var mask_graphics_82 = new cjs.Graphics().p("AiGJyIAAzjIENAAIAATjg");
	var mask_graphics_83 = new cjs.Graphics().p("AiGJ5IAAzxIENAAIAATxg");
	var mask_graphics_84 = new cjs.Graphics().p("AiGKAIAAz/IENAAIAAT/g");
	var mask_graphics_85 = new cjs.Graphics().p("AiGKHIAA0NIENAAIAAUNg");
	var mask_graphics_86 = new cjs.Graphics().p("AiGKNIAA0ZIENAAIAAUZg");
	var mask_graphics_87 = new cjs.Graphics().p("AiGKUIAA0nIENAAIAAUng");
	var mask_graphics_88 = new cjs.Graphics().p("AiGKbIAA01IENAAIAAU1g");
	var mask_graphics_89 = new cjs.Graphics().p("AiGKiIAA1DIENAAIAAVDg");
	var mask_graphics_90 = new cjs.Graphics().p("AiGKpIAA1RIENAAIAAVRg");
	var mask_graphics_91 = new cjs.Graphics().p("AiGKwIAA1fIENAAIAAVfg");
	var mask_graphics_92 = new cjs.Graphics().p("AiGK2IAA1rIENAAIAAVrg");
	var mask_graphics_93 = new cjs.Graphics().p("AiGK9IAA16IENAAIAAV6g");
	var mask_graphics_94 = new cjs.Graphics().p("AiGLEIAA2HIENAAIAAWHg");
	var mask_graphics_95 = new cjs.Graphics().p("AiGLLIAA2VIENAAIAAWVg");
	var mask_graphics_96 = new cjs.Graphics().p("AiGLSIAA2jIENAAIAAWjg");
	var mask_graphics_97 = new cjs.Graphics().p("AiGLZIAA2xIENAAIAAWxg");
	var mask_graphics_98 = new cjs.Graphics().p("AiGLgIAA2/IENAAIAAW/g");
	var mask_graphics_99 = new cjs.Graphics().p("AiGLnIAA3NIENAAIAAXNg");
	var mask_graphics_100 = new cjs.Graphics().p("AiGLtIAA3ZIENAAIAAXZg");
	var mask_graphics_101 = new cjs.Graphics().p("AiGL0IAA3oIENAAIAAXog");
	var mask_graphics_102 = new cjs.Graphics().p("AiGL7IAA31IENAAIAAX1g");
	var mask_graphics_103 = new cjs.Graphics().p("AiGMCIAA4DIENAAIAAYDg");
	var mask_graphics_104 = new cjs.Graphics().p("AiGMJIAA4RIENAAIAAYRg");
	var mask_graphics_105 = new cjs.Graphics().p("AiGMQIAA4fIENAAIAAYfg");
	var mask_graphics_106 = new cjs.Graphics().p("AiGMXIAA4tIENAAIAAYtg");
	var mask_graphics_107 = new cjs.Graphics().p("AiGMeIAA47IENAAIAAY7g");
	var mask_graphics_108 = new cjs.Graphics().p("AiGMlIAA5IIENAAIAAZIg");
	var mask_graphics_109 = new cjs.Graphics().p("AiGMrIAA5VIENAAIAAZVg");
	var mask_graphics_110 = new cjs.Graphics().p("AiGMyIAA5jIENAAIAAZjg");
	var mask_graphics_111 = new cjs.Graphics().p("AiGM5IAA5xIENAAIAAZxg");
	var mask_graphics_112 = new cjs.Graphics().p("AiGNAIAA5/IENAAIAAZ/g");
	var mask_graphics_113 = new cjs.Graphics().p("AiGNHIAA6NIENAAIAAaNg");
	var mask_graphics_114 = new cjs.Graphics().p("AiGNOIAA6bIENAAIAAabg");
	var mask_graphics_115 = new cjs.Graphics().p("AiGNVIAA6pIENAAIAAapg");
	var mask_graphics_116 = new cjs.Graphics().p("AiGNbIAA61IENAAIAAa1g");
	var mask_graphics_117 = new cjs.Graphics().p("AiGNiIAA7DIENAAIAAbDg");
	var mask_graphics_118 = new cjs.Graphics().p("AiGNpIAA7RIENAAIAAbRg");
	var mask_graphics_119 = new cjs.Graphics().p("AiGNwIAA7fIENAAIAAbfg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:-53.6}).wait(1).to({graphics:mask_graphics_1,x:0,y:-100}).wait(1).to({graphics:mask_graphics_2,x:0,y:-99.3}).wait(1).to({graphics:mask_graphics_3,x:0,y:-98.5}).wait(1).to({graphics:mask_graphics_4,x:0,y:-97.8}).wait(1).to({graphics:mask_graphics_5,x:0,y:-97}).wait(1).to({graphics:mask_graphics_6,x:0,y:-96.3}).wait(1).to({graphics:mask_graphics_7,x:0,y:-95.6}).wait(1).to({graphics:mask_graphics_8,x:0,y:-94.8}).wait(1).to({graphics:mask_graphics_9,x:0,y:-94.1}).wait(1).to({graphics:mask_graphics_10,x:0,y:-93.3}).wait(1).to({graphics:mask_graphics_11,x:0,y:-92.6}).wait(1).to({graphics:mask_graphics_12,x:0,y:-91.8}).wait(1).to({graphics:mask_graphics_13,x:0,y:-91.1}).wait(1).to({graphics:mask_graphics_14,x:0,y:-90.4}).wait(1).to({graphics:mask_graphics_15,x:0,y:-89.6}).wait(1).to({graphics:mask_graphics_16,x:0,y:-88.9}).wait(1).to({graphics:mask_graphics_17,x:0,y:-88.1}).wait(1).to({graphics:mask_graphics_18,x:0,y:-87.4}).wait(1).to({graphics:mask_graphics_19,x:0,y:-86.7}).wait(1).to({graphics:mask_graphics_20,x:0,y:-85.9}).wait(1).to({graphics:mask_graphics_21,x:0,y:-85.2}).wait(1).to({graphics:mask_graphics_22,x:0,y:-84.4}).wait(1).to({graphics:mask_graphics_23,x:0,y:-83.7}).wait(1).to({graphics:mask_graphics_24,x:0,y:-82.9}).wait(1).to({graphics:mask_graphics_25,x:0,y:-82.2}).wait(1).to({graphics:mask_graphics_26,x:0,y:-81.5}).wait(1).to({graphics:mask_graphics_27,x:0,y:-80.7}).wait(1).to({graphics:mask_graphics_28,x:0,y:-80}).wait(1).to({graphics:mask_graphics_29,x:0,y:-79.2}).wait(1).to({graphics:mask_graphics_30,x:0,y:-78.5}).wait(1).to({graphics:mask_graphics_31,x:0,y:-77.7}).wait(1).to({graphics:mask_graphics_32,x:0,y:-77}).wait(1).to({graphics:mask_graphics_33,x:0,y:-76.3}).wait(1).to({graphics:mask_graphics_34,x:0,y:-75.5}).wait(1).to({graphics:mask_graphics_35,x:0,y:-74.8}).wait(1).to({graphics:mask_graphics_36,x:0,y:-74}).wait(1).to({graphics:mask_graphics_37,x:0,y:-73.3}).wait(1).to({graphics:mask_graphics_38,x:0,y:-72.5}).wait(1).to({graphics:mask_graphics_39,x:0,y:-71.8}).wait(1).to({graphics:mask_graphics_40,x:0,y:-71.1}).wait(1).to({graphics:mask_graphics_41,x:0,y:-70.3}).wait(1).to({graphics:mask_graphics_42,x:0,y:-69.6}).wait(1).to({graphics:mask_graphics_43,x:0,y:-68.8}).wait(1).to({graphics:mask_graphics_44,x:0,y:-68.1}).wait(1).to({graphics:mask_graphics_45,x:0,y:-67.3}).wait(1).to({graphics:mask_graphics_46,x:0,y:-66.6}).wait(1).to({graphics:mask_graphics_47,x:0,y:-65.9}).wait(1).to({graphics:mask_graphics_48,x:0,y:-65.1}).wait(1).to({graphics:mask_graphics_49,x:0,y:-64.4}).wait(1).to({graphics:mask_graphics_50,x:0,y:-63.6}).wait(1).to({graphics:mask_graphics_51,x:0,y:-62.9}).wait(1).to({graphics:mask_graphics_52,x:0,y:-62.1}).wait(1).to({graphics:mask_graphics_53,x:0,y:-61.4}).wait(1).to({graphics:mask_graphics_54,x:0,y:-60.7}).wait(1).to({graphics:mask_graphics_55,x:0,y:-59.9}).wait(1).to({graphics:mask_graphics_56,x:0,y:-59.2}).wait(1).to({graphics:mask_graphics_57,x:0,y:-58.4}).wait(1).to({graphics:mask_graphics_58,x:0,y:-57.7}).wait(1).to({graphics:mask_graphics_59,x:0,y:-57}).wait(1).to({graphics:mask_graphics_60,x:0,y:-56.2}).wait(1).to({graphics:mask_graphics_61,x:0,y:-55.5}).wait(1).to({graphics:mask_graphics_62,x:0,y:-54.7}).wait(1).to({graphics:mask_graphics_63,x:0,y:-54}).wait(1).to({graphics:mask_graphics_64,x:0,y:-53.2}).wait(1).to({graphics:mask_graphics_65,x:0,y:-52.5}).wait(1).to({graphics:mask_graphics_66,x:0,y:-51.8}).wait(1).to({graphics:mask_graphics_67,x:0,y:-51}).wait(1).to({graphics:mask_graphics_68,x:0,y:-50.3}).wait(1).to({graphics:mask_graphics_69,x:0,y:-49.5}).wait(1).to({graphics:mask_graphics_70,x:0,y:-48.8}).wait(1).to({graphics:mask_graphics_71,x:0,y:-48}).wait(1).to({graphics:mask_graphics_72,x:0,y:-47.3}).wait(1).to({graphics:mask_graphics_73,x:0,y:-46.6}).wait(1).to({graphics:mask_graphics_74,x:0,y:-45.8}).wait(1).to({graphics:mask_graphics_75,x:0,y:-45.1}).wait(1).to({graphics:mask_graphics_76,x:0,y:-44.3}).wait(1).to({graphics:mask_graphics_77,x:0,y:-43.6}).wait(1).to({graphics:mask_graphics_78,x:0,y:-42.8}).wait(1).to({graphics:mask_graphics_79,x:0,y:-42.1}).wait(1).to({graphics:mask_graphics_80,x:0,y:-41.4}).wait(1).to({graphics:mask_graphics_81,x:0,y:-40.6}).wait(1).to({graphics:mask_graphics_82,x:0,y:-39.9}).wait(1).to({graphics:mask_graphics_83,x:0,y:-39.1}).wait(1).to({graphics:mask_graphics_84,x:0,y:-38.4}).wait(1).to({graphics:mask_graphics_85,x:0,y:-37.6}).wait(1).to({graphics:mask_graphics_86,x:0,y:-36.9}).wait(1).to({graphics:mask_graphics_87,x:0,y:-36.2}).wait(1).to({graphics:mask_graphics_88,x:0,y:-35.4}).wait(1).to({graphics:mask_graphics_89,x:0,y:-34.7}).wait(1).to({graphics:mask_graphics_90,x:0,y:-33.9}).wait(1).to({graphics:mask_graphics_91,x:0,y:-33.2}).wait(1).to({graphics:mask_graphics_92,x:0,y:-32.4}).wait(1).to({graphics:mask_graphics_93,x:0,y:-31.7}).wait(1).to({graphics:mask_graphics_94,x:0,y:-30.9}).wait(1).to({graphics:mask_graphics_95,x:0,y:-30.2}).wait(1).to({graphics:mask_graphics_96,x:0,y:-29.5}).wait(1).to({graphics:mask_graphics_97,x:0,y:-28.7}).wait(1).to({graphics:mask_graphics_98,x:0,y:-28}).wait(1).to({graphics:mask_graphics_99,x:0,y:-27.3}).wait(1).to({graphics:mask_graphics_100,x:0,y:-26.5}).wait(1).to({graphics:mask_graphics_101,x:0,y:-25.7}).wait(1).to({graphics:mask_graphics_102,x:0,y:-25}).wait(1).to({graphics:mask_graphics_103,x:0,y:-24.3}).wait(1).to({graphics:mask_graphics_104,x:0,y:-23.5}).wait(1).to({graphics:mask_graphics_105,x:0,y:-22.8}).wait(1).to({graphics:mask_graphics_106,x:0,y:-22.1}).wait(1).to({graphics:mask_graphics_107,x:0,y:-21.3}).wait(1).to({graphics:mask_graphics_108,x:0,y:-20.5}).wait(1).to({graphics:mask_graphics_109,x:0,y:-19.8}).wait(1).to({graphics:mask_graphics_110,x:0,y:-19.1}).wait(1).to({graphics:mask_graphics_111,x:0,y:-18.3}).wait(1).to({graphics:mask_graphics_112,x:0,y:-17.6}).wait(1).to({graphics:mask_graphics_113,x:0,y:-16.8}).wait(1).to({graphics:mask_graphics_114,x:0,y:-16.1}).wait(1).to({graphics:mask_graphics_115,x:0,y:-15.4}).wait(1).to({graphics:mask_graphics_116,x:0,y:-14.6}).wait(1).to({graphics:mask_graphics_117,x:0,y:-13.9}).wait(1).to({graphics:mask_graphics_118,x:0,y:-13.1}).wait(1).to({graphics:mask_graphics_119,x:0,y:-12.4}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAA0SMAAAAol");
	this.shape.setTransform(0,35.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-99.7,24.3,21.9);


(lib.SC_ar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-147.6,-91.8,1,1,-90.2,0,0,0.4,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-17.4,rotation:-270,guide:{path:[-147.5,-91.8,-141.3,-91.6,-140.3,-91.6,-105.5,-91.6,-80.9,-67,-56.4,-42.4,-56.4,-7.7,-56.4,27.1,-80.9,51.7,-101,71.8,-127.9,75.5], orient:'auto'}},179).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AyIX7Qp7p6AAuCQABuBJ7p7QJ8p7OBABMgADBDvQuBAAp6p9g");
	var mask_graphics_1 = new cjs.Graphics().p("AykXgQpvqGARuBQAQuCKHpvQKHpwOBARMgBRBDvQuAgQpwqIg");
	var mask_graphics_2 = new cjs.Graphics().p("Ay+XEQpkqQAhuBQAguBKSpkQKSpkOAAhMgCdBDtQuAghpkqTg");
	var mask_graphics_3 = new cjs.Graphics().p("AzYWpQpYqcAxuAQAwuAKdpYQKdpYN/AxMgDrBDpQt/gwpYqeg");
	var mask_graphics_4 = new cjs.Graphics().p("AzyWNQpMqmBBt/QBBuAKnpLQKnpMN/BAMgE4BDlQt/hBpMqog");
	var mask_graphics_5 = new cjs.Graphics().p("A0KVxQpAqwBQt+QBRt+KypAQKxo/N9BQMgGFBDfQt9hRo/qzg");
	var mask_graphics_6 = new cjs.Graphics().p("A0jVVQozq6Bgt8QBht9K8ozQK8ozN7BgMgHSBDXQt8hhozq9g");
	var mask_graphics_7 = new cjs.Graphics().p("A07U6QomrFBwt6QBxt7LFonQLGomN6BwMgIfBDOQt6hwonrHg");
	var mask_graphics_8 = new cjs.Graphics().p("A1SUeQoarPCAt4QCBt4LPoaQLQoaN3CAMgJsBDEQt3iBoarQg");
	var mask_graphics_9 = new cjs.Graphics().p("A1pUCQoNrYCRt2QCQt2LZoNQLZoNN1CQMgK5BC4Qt1iQoNrag");
	var mask_graphics_10 = new cjs.Graphics().p("A1/TlQoArhCgtzQCgtzLioAQLjoANyCgMgMEBCrQtzigoArkg");
	var mask_graphics_11 = new cjs.Graphics().p("A2UTJQnzrqCwtwQCvtwLsnzQLrnyNvCvMgNPBCcQtxivnyrtg");
	var mask_graphics_12 = new cjs.Graphics().p("A2pStQnmrzDAtsQC/tuL0nlQL0nlNsC/MgObBCNQttjAnlr1g");
	var mask_graphics_13 = new cjs.Graphics().p("A2+SRQnYr8DQtpQDPtpL8nYQL8nXNpDPMgPnBB7QtpjPnYr+g");
	var mask_graphics_14 = new cjs.Graphics().p("A3SR1QnKsEDftlQDftmMEnKQMEnKNmDfMgQyBBoQtmjenKsGg");
	var mask_graphics_15 = new cjs.Graphics().p("A3lRYQm8sLDutiQDuthMNm8QMMm8NiDuMgR9BBUQtijum8sOg");
	var mask_graphics_16 = new cjs.Graphics().p("A33Q8QmvsUD+tcQD9teMVmuQMUmuNdD+MgTIBA/Qtdj9mtsWg");
	var mask_graphics_17 = new cjs.Graphics().p("A4KQgQmgscENtYQENtYMcmgQMbmgNZENMgUSBApQtYkNmgsdg");
	var mask_graphics_18 = new cjs.Graphics().p("A4bQDQmSsiEctTQEctUMkmSQMimRNUEcMgVbBARQtUkcmRslg");
	var mask_graphics_19 = new cjs.Graphics().p("A4sPnQmEsqEstOQErtOMrmDQMpmDNPErMgWlA/4QtOkrmDssg");
	var mask_graphics_20 = new cjs.Graphics().p("A48PKQl1swE6tIQE6tJMyl1QMwl1NJE7MgXtA/dQtJk6l0szg");
	var mask_graphics_21 = new cjs.Graphics().p("A5MOuQlns3FKtDQFJtDM4lmQM3lmNDFJMgY1A/CQtElJlls5g");
	var mask_graphics_22 = new cjs.Graphics().p("A5bOSQlYs9FYs9QFYs9M/lYQM9lXM9FYMgZ9A+lQs9lYlXs/g");
	var mask_graphics_23 = new cjs.Graphics().p("A5qN1QlJtDFns2QFns3NElIQNElJM2FnMgbEA+GQs3lmlItGg");
	var mask_graphics_24 = new cjs.Graphics().p("A54NZQk6tJF2swQF2swNJk5QNJk6MxF2MgcLA9mQsxl1k5tLg");
	var mask_graphics_25 = new cjs.Graphics().p("A6FM9QkrtNGEsrQGEspNQkrQNOkqMqGEMgdSA9GQspmEkqtQg");
	var mask_graphics_26 = new cjs.Graphics().p("A6SMhQkbtTGSsjQGTsiNUkcQNUkbMiGTMgeWA8kQsjmTkbtVg");
	var mask_graphics_27 = new cjs.Graphics().p("A6eMFQkMtYGhscQGgsbNakMQNYkMMbGhMgfbA8BQsbmhkMtag");
	var mask_graphics_28 = new cjs.Graphics().p("A6pLoQj9tcGvsUQGvsTNej9QNdj9MTGvMggfA7cQsUmuj8tgg");
	var mask_graphics_29 = new cjs.Graphics().p("A60LNQjuthG9sMQG9sMNjjtQNhjtMMG8MghjA63QsMm9jttjg");
	var mask_graphics_30 = new cjs.Graphics().p("A6+KxQjetlHLsEQHKsENnjeQNljdMEHKMgimA6QQsEnLjdtng");
	var mask_graphics_31 = new cjs.Graphics().p("A7HKVQjPtoHZr8QHYr8NqjOQNqjOL7HYMgjpA5oQr7nZjNtrg");
	var mask_graphics_32 = new cjs.Graphics().p("A7QJ5Qi/tsHmrzQHmrzNui+QNti/LyHmMgkqA4+Qrynmi+tvg");
	var mask_graphics_33 = new cjs.Graphics().p("A7YJeQiwtvH0rrQHzrqNxivQNwivLrH0MglrA4TQrqnziutyg");
	var mask_graphics_34 = new cjs.Graphics().p("A7gJCQiftyIArhQIBrhN0ifQNzifLhIAMgmqA3oQrioAiet2g");
	var mask_graphics_35 = new cjs.Graphics().p("A7nInQiPt1INrYQIOrYN2iPQN3iPLXINMgnpA28QrYoOiPt4g");
	var mask_graphics_36 = new cjs.Graphics().p("A7tIMQiAt3IbrPQIbrON4iAQN5h/LOIbMgooA2NQrOobh/t6g");
	var mask_graphics_37 = new cjs.Graphics().p("A7yHxQhwt5InrFQInrFN7hvQN7hwLFIoMgpmA1eQrEonhvt9g");
	var mask_graphics_38 = new cjs.Graphics().p("A73HXQhgt8I0q7QI0q6N8hgQN9hfK7IzMgqiA0vQq7o0hft+g");
	var mask_graphics_39 = new cjs.Graphics().p("A77G8QhQt9JAqwQJAqxN+hQQN/hPKwJAMgreAz9QqwpAhPuAg");
	var mask_graphics_40 = new cjs.Graphics().p("A7+GiQhBt+JNqnQJMqmOAg/QOAhAKmJNMgsZAzKQqnpMg+uBg");
	var mask_graphics_41 = new cjs.Graphics().p("A8MGIQgxt/JZqcQJYqbOAgwQOBgvKcJYMgtTAyXQqcpYguuCg");
	var mask_graphics_42 = new cjs.Graphics().p("A8cFuQght/JlqSQJkqQOBggQOBgfKRJkMguMAxjQqRpkgeuDg");
	var mask_graphics_43 = new cjs.Graphics().p("A8sFVQgQuAJwqGQJwqGOBgPQOCgQKGJwMgvEAwuQqGpwgPuDg");
	var mask_graphics_44 = new cjs.Graphics().p("A86E8QAAuBJ8p6QJ7p7OBABQOCAAJ7J7Mgv8Av4Qp6p7ABuDg");
	var mask_graphics_45 = new cjs.Graphics().p("A9HEkQAQuBKGpvQKHpwOBARQOCAQJvKGMgwwAvCQpwqGARuDg");
	var mask_graphics_46 = new cjs.Graphics().p("A9TEMQAguAKRplQKRpjOBAfQOBAgJkKRMgxkAuLQpkqRAguCg");
	var mask_graphics_47 = new cjs.Graphics().p("A9dD0QAut/KcpZQKcpYOAAvQOBAwJYKbMgyYAtTQpYqbAxuCg");
	var mask_graphics_48 = new cjs.Graphics().p("A9nDcQA+t+KmpNQKmpMN/A/QOAA/JNKmMgzKAsaQpNqmBBuBg");
	var mask_graphics_49 = new cjs.Graphics().p("A9xDFQBOt9KxpBQKwpAN+BOQN/BPJAKwMgz7ArhQpAqwBPuAg");
	var mask_graphics_50 = new cjs.Graphics().p("A95CvQBet8K6o1QK6o1N9BfQN9BeI1K6Mg0sAqnQo0q6Bft+g");
	var mask_graphics_51 = new cjs.Graphics().p("A+ACYQBtt6LEooQLEopN7BuQN7BuIpLEMg1bAprQoorEBvt8g");
	var mask_graphics_52 = new cjs.Graphics().p("A+GCCQB8t4LOocQLNocN5B9QN5B+IcLNMg2IAovQocrNB/t6g");
	var mask_graphics_53 = new cjs.Graphics().p("A+MBsQCMt2LYoPQLWoQN2COQN4CNIPLWMg21AnyQoQrWCOt4g");
	var mask_graphics_54 = new cjs.Graphics().p("A+QBWQCbtzLhoDQLfoCN0CcQN1CdICLgMg3hAm0QoDrgCet1g");
	var mask_graphics_55 = new cjs.Graphics().p("A+UBBQCrtwLpn2QLpn2NxCsQNxCsH2LpMg4MAl2Qn2rpCttyg");
	var mask_graphics_56 = new cjs.Graphics().p("A+WAsQC6ttLynpQLxnpNuC8QNuC7HpLxMg42Ak3QnprxC9tvg");
	var mask_graphics_57 = new cjs.Graphics().p("A+YAXQDKtqL6nbQL5nbNrDKQNrDLHbL5Mg5eAj3Qncr5DMtsg");
	var mask_graphics_58 = new cjs.Graphics().p("A+ZADQDZtmMCnPQMCnNNnDZQNnDaHOMCMg6GAi2QnOsBDbtog");
	var mask_graphics_59 = new cjs.Graphics().p("A+ZgRQDotjMLnAQMJnBNjDpQNjDpHBMKMg6sAh1QnBsJDqtkg");
	var mask_graphics_60 = new cjs.Graphics().p("A+YgkQD3tfMSmzQMSmzNeD4QNgD4GyMSMg7RAgzQmzsRD5tfg");
	var mask_graphics_61 = new cjs.Graphics().p("A+Wg4QEGtaMamlQMZmlNaEHQNbEHGlMZMg72AfxQmlsZEItbg");
	var mask_graphics_62 = new cjs.Graphics().p("A+ThLQEVtWMhmXQMgmXNVEWQNWEWGXMgMg8YAeuQmXsgEXtWg");
	var mask_graphics_63 = new cjs.Graphics().p("A+PheQEktQMnmKQMomJNQElQNRElGJMnMg86AdqQmJsnEmtRg");
	var mask_graphics_64 = new cjs.Graphics().p("A+LhwQEztMMvl7QMsl7NME0QNME0F7MuMg9aAclQl7suE0tLg");
	var mask_graphics_65 = new cjs.Graphics().p("A+FiCQFBtGM1ltQM0ltNGFCQNGFDFtM0Mg96AbhQlts1FEtFg");
	var mask_graphics_66 = new cjs.Graphics().p("A9/iUQFQtAM7lfQM6leNBFRQNAFRFfM6Mg+YAacQlfs7FStAg");
	var mask_graphics_67 = new cjs.Graphics().p("A93imQFes6NBlQQNAlQM6FgQM7FfFQNBMg+1AZVQlQtBFhs6g");
	var mask_graphics_68 = new cjs.Graphics().p("A9vi3QFts0NGlBQNGlBM0FtQM1FuFBNHMg/RAYOQlBtGFvs0g");
	var mask_graphics_69 = new cjs.Graphics().p("A9mjIQF7stNMkzQNLkyMuF8QMuF8EyNMMg/rAXIQkytMF9sug");
	var mask_graphics_70 = new cjs.Graphics().p("A9cjYQGJsnNSkkQNQkjMnGKQMnGKEkNQMhAFAWCQkktRGMsng");
	var mask_graphics_71 = new cjs.Graphics().p("A9RjoQGXsgNWkVQNVkVMhGZQMgGYEVNVMhAdAU6QkVtWGasgg");
	var mask_graphics_72 = new cjs.Graphics().p("A9Gj3QGlsZNckGQNZkGMZGmQMZGmEGNaMhAzATxQkGtaGnsYg");
	var mask_graphics_73 = new cjs.Graphics().p("A85kHQGzsRNfj3QNfj3MRG0QMRG0D3NeMhBIASpQj3tfG1sRg");
	var mask_graphics_74 = new cjs.Graphics().p("A8skWQHBsJNkjoQNijoMKHCQMJHCDoNiMhBdARgQjntkHCsJg");
	var mask_graphics_75 = new cjs.Graphics().p("A8dkkQHOsBNojZQNmjZMBHPQMCHPDZNnMhBwAQWQjZtnHRsBg");
	var mask_graphics_76 = new cjs.Graphics().p("A8OkyQHbr5NsjKQNqjJL5HcQL6HdDJNqMhCBAPNQjKtrHer5g");
	var mask_graphics_77 = new cjs.Graphics().p("A7+lAQHprwNui7QNui6LxHqQLxHqC6NtMhCSAODQi6tuHrrxg");
	var mask_graphics_78 = new cjs.Graphics().p("A7tlNQH2roNxirQNxirLoH3QLpH3CqNwMhCgAM5QirtxH4rog");
	var mask_graphics_79 = new cjs.Graphics().p("A7blaQICrfN1ibQNzicLgIEQLfIECcNzMhCvALuQibt0IFrfg");
	var mask_graphics_80 = new cjs.Graphics().p("A7JlmQIQrWN3iMQN2iMLWIQQLXIRCMN2MhC7AKjQiMt2IRrWg");
	var mask_graphics_81 = new cjs.Graphics().p("A61lyQIcrNN5h8QN5h9LNIdQLNIdB8N4MhDGAJaQh8t6IerMg");
	var mask_graphics_82 = new cjs.Graphics().p("A6hl9QIprEN7htQN6htLEIqQLDIpBtN7MhDQAIOQhst8IqrCg");
	var mask_graphics_83 = new cjs.Graphics().p("A6LmIQI0q6N+hdQN7heK6I2QK6I2BdN8MhDYAHDQhdt9I3q5g");
	var mask_graphics_84 = new cjs.Graphics().p("A51mTQJAqwN/hNQN+hOKvJCQKwJCBON9MhDgAF3QhNt+JDqvg");
	var mask_graphics_85 = new cjs.Graphics().p("A5emdQJMqlOAg/QN/g+KlJOQKmJOA+N+MhDlAEsQg+t/JPqlg");
	var mask_graphics_86 = new cjs.Graphics().p("A5HmmQJZqcOBguQN/gvKcJaQKbJYAuOBMhDqADgQguuAJaqag");
	var mask_graphics_87 = new cjs.Graphics().p("A4umwQJkqQOCgfQOAgfKQJlQKRJkAfOCMhDtACUQgfuBJmqQg");
	var mask_graphics_88 = new cjs.Graphics().p("A4Um4QJvqGOCgPQOBgPKFJwQKGJwAPOBMhDvABJQgPuBJyqFg");
	var mask_graphics_89 = new cjs.Graphics().p("Egh3AQrQAAuCJ9p6QJ6p7OCABQOBAAJ7J8QJ7J6gBOCg");
	var mask_graphics_90 = new cjs.Graphics().p("Egh3AQGQAPuBKGpwQKFpxOBAPQOCAPJwKGQJxKEgPOCg");
	var mask_graphics_91 = new cjs.Graphics().p("Egh3APSQAduBKRplQKOpmOBAdQOBAdJnKQQJmKOgdOBg");
	var mask_graphics_92 = new cjs.Graphics().p("Egh2AOeQAruAKbpbQKYpbOAArQOBAsJbKZQJcKYgsOBg");
	var mask_graphics_93 = new cjs.Graphics().p("Egh1ANrQA5t/KkpRQKipRN/A6QOAA6JRKjQJRKhg6OAg");
	var mask_graphics_94 = new cjs.Graphics().p("Egh0AM3QBIt+KtpGQKrpGN/BIQN+BIJHKtQJGKrhJN/g");
	var mask_graphics_95 = new cjs.Graphics().p("EghzAMDQBWt8K3o7QK0o7N9BWQN+BXI7K1QI7K1hWN9g");
	var mask_graphics_96 = new cjs.Graphics().p("EghxALQQBkt7LAowQK9owN8BlQN8BlIwK+QIwK9hlN9g");
	var mask_graphics_97 = new cjs.Graphics().p("EghwAKdQBzt6LJokQLGolN6BzQN6BzIlLHQIlLHhzN6g");
	var mask_graphics_98 = new cjs.Graphics().p("EghtAJpQCBt3LRoZQLPoZN4CBQN4CBIZLQQIaLPiCN4g");
	var mask_graphics_99 = new cjs.Graphics().p("EghrAI2QCPt1LaoNQLXoON2CPQN2CPIOLZQIOLXiQN3g");
	var mask_graphics_100 = new cjs.Graphics().p("EghoAIDQCdtzLioBQLgoDNzCeQN0CeICLgQICLgieN0g");
	var mask_graphics_101 = new cjs.Graphics().p("EghlAHQQCrtwLqn2QLon2NxCsQNxCrH2LpQH2LoirNxg");
	var mask_graphics_102 = new cjs.Graphics().p("EghiAGeQC6tuLynqQLvnqNuC6QNuC5HrLxQHqLwi6Nug");
	var mask_graphics_103 = new cjs.Graphics().p("EghfAFrQDItqL6neQL3neNrDHQNrDIHeL5QHeL3jHNrg");
	var mask_graphics_104 = new cjs.Graphics().p("EghbAE5QDWtnMBnSQL/nSNoDWQNoDVHRMAQHSL/jVNog");
	var mask_graphics_105 = new cjs.Graphics().p("EghXAEGQDktjMInFQMHnGNkDkQNkDjHGMIQHFMGjjNkg");
	var mask_graphics_106 = new cjs.Graphics().p("EghSADUQDxtfMQm5QMNm5NgDxQNhDxG5MPQG5MOjxNgg");
	var mask_graphics_107 = new cjs.Graphics().p("EghOACjQEAtcMWmsQMVmtNcD/QNdD/GsMWQGtMUkANdg");
	var mask_graphics_108 = new cjs.Graphics().p("EghJABxQENtYMemfQMbmgNYENQNYENGgMcQGgMbkNNZg");
	var mask_graphics_109 = new cjs.Graphics().p("EghDABAQEatTMkmTQMimUNTEbQNUEbGUMiQGTMikbNUg");
	var mask_graphics_110 = new cjs.Graphics().p("Egg+AAPQEotPMqmGQMomGNPEoQNQEoGGMpQGGMokoNQg");
	var mask_graphics_111 = new cjs.Graphics().p("Egg4gAhQE1tLMxl5QMul5NKE1QNLE2F5MvQF5Mvk1NKg");
	var mask_graphics_112 = new cjs.Graphics().p("EggygBSQFDtGM2lrQM0ltNFFDQNGFDFsM2QFsM0lDNFg");
	var mask_graphics_113 = new cjs.Graphics().p("EggsgCCQFRtBM8leQM5lfNAFQQNBFQFfM7QFfM6lRNBg");
	var mask_graphics_114 = new cjs.Graphics().p("EgglgCyQFds7NClRQM/lTM7FeQM7FeFRNAQFSNAleM7g");
	var mask_graphics_115 = new cjs.Graphics().p("EggegDiQFqs1NHlEQNFlFM1FrQM1FrFENGQFENElqM1g");
	var mask_graphics_116 = new cjs.Graphics().p("EggXgERQF4swNMk2QNJk4MvF5QMvF3E3NLQE3NKl4Mvg");
	var mask_graphics_117 = new cjs.Graphics().p("EggQgFAQGFsqNRkpQNNkqMqGGQMpGEEqNQQEpNPmFMpg");
	var mask_graphics_118 = new cjs.Graphics().p("EggIgFvQGSsjNVkbQNSkdMkGSQMjGSEbNUQEcNTmRMjg");
	var mask_graphics_119 = new cjs.Graphics().p("EggAgGeQGfscNZkOQNXkOMdGeQMcGfEONZQEPNXmfMdg");
	var mask_graphics_120 = new cjs.Graphics().p("A/4nMQGrsVNekAQNbkBMWGrQMWGrEANdQEBNcmrMWg");
	var mask_graphics_121 = new cjs.Graphics().p("A/vn5QG3sPNijyQNfjzMPG4QMPG3DzNhQDzNgm4MPg");
	var mask_graphics_122 = new cjs.Graphics().p("A/monQHEsHNljkQNjjmMIHFQMIHEDlNkQDkNknEMIg");
	var mask_graphics_123 = new cjs.Graphics().p("A/dpTQHQsBNpjWQNmjYMBHRQMAHRDXNnQDXNonQMAg");
	var mask_graphics_124 = new cjs.Graphics().p("A/UqAQHdr5NsjIQNqjKL5HdQL5HdDJNrQDINrncL5g");
	var mask_graphics_125 = new cjs.Graphics().p("A/LqsQHprxNwi6QNsi8LyHpQLxHpC7NuQC7NunpLxg");
	var mask_graphics_126 = new cjs.Graphics().p("A/BrXQH1rqNyisQNwitLpH1QLqH0CsNxQCtNxn0Lpg");
	var mask_graphics_127 = new cjs.Graphics().p("A+3sDQIBrhN1ieQNyifLhIBQLhIACfNzQCfN1oALhg");
	var mask_graphics_128 = new cjs.Graphics().p("A+tstQINrZN3iQQN1iRLZIMQLZINCQN1QCRN3oMLYg");
	var mask_graphics_129 = new cjs.Graphics().p("A+itXQIYrRN5iBQN3iELRIZQLQIXCDN4QCCN5oYLQg");
	var mask_graphics_130 = new cjs.Graphics().p("A+YuBQIkrIN7hzQN5h1LIIjQLIIkB0N5QB0N7ojLIg");
	var mask_graphics_131 = new cjs.Graphics().p("A+NuqQIvq/N9hlQN7hnK/IvQK/IvBmN7QBmN8ovK/g");
	var mask_graphics_132 = new cjs.Graphics().p("A+CvTQI6q2N/hXQN8hYK2I6QK2I6BYN9QBYN+o6K1g");
	var mask_graphics_133 = new cjs.Graphics().p("A92v7QJEqtOBhIQN9hKKtJFQKtJEBJN/QBKN/pFKtg");
	var mask_graphics_134 = new cjs.Graphics().p("A9rwiQJQqkOBg6QN+g8KkJQQKjJQA7N/QA8OApQKkg");
	var mask_graphics_135 = new cjs.Graphics().p("A9exNQJbqZOCgqQOAgtKZJcQKZJbArOAQAsOCpcKYg");
	var mask_graphics_136 = new cjs.Graphics().p("A9Rx3QJnqOOCgbQOAgdKPJoQKOJmAcOBQAcOCpnKOg");
	var mask_graphics_137 = new cjs.Graphics().p("A9EygQJyqDODgMQOBgNKDJzQKEJyAMOBQAMODpyKDg");
	var mask_graphics_138 = new cjs.Graphics().p("A83zIQJ+p5ODAFQOAACJ5J+QJ4J9gDOCQgEOCp9J4g");
	var mask_graphics_139 = new cjs.Graphics().p("A8pzwQKIptODAUQOAASJuKJQJtKIgTOBQgUOCqIJug");
	var mask_graphics_140 = new cjs.Graphics().p("A8b0XQKSphODAjQOAAiJiKUQJhKTgiOAQgjOCqTJig");
	var mask_graphics_141 = new cjs.Graphics().p("A8O09QKepWOCA0QN/AxJWKeQJWKegyOAQgzOAqdJWg");
	var mask_graphics_142 = new cjs.Graphics().p("A8A1iQKopKOBBDQN+BBJLKoQJKKohCN/QhCOAqoJKg");
	var mask_graphics_143 = new cjs.Graphics().p("A7x2HQKyo+N/BTQN9BRI/KyQI+KyhSN+QhSN+qyI/g");
	var mask_graphics_144 = new cjs.Graphics().p("A7j2qQK8oyN+BiQN7BgIzK9QIyK8hiN8QhhN9q8Iyg");
	var mask_graphics_145 = new cjs.Graphics().p("A7U3NQLFomN8ByQN6BwImLGQImLFhxN7QhxN7rGImg");
	var mask_graphics_146 = new cjs.Graphics().p("A7F3vQLPoaN5CCQN4B/IaLQQIZLPiAN4QiBN5rPIZg");
	var mask_graphics_147 = new cjs.Graphics().p("A624RQLYoMN3CRQN1CPINLYQINLZiQN1QiQN3rYINg");
	var mask_graphics_148 = new cjs.Graphics().p("A6n4xQLhoAN1CgQNyCfIBLiQIALhigNzQifN0riIAg");
	var mask_graphics_149 = new cjs.Graphics().p("A6Y5RQLrnzNxCwQNwCuHzLqQHzLrivNwQivNxrqHzg");
	var mask_graphics_150 = new cjs.Graphics().p("A6I5wQLznmNuC/QNtC+HmLzQHmLzi+NtQi/NuryHmg");
	var mask_graphics_151 = new cjs.Graphics().p("A546OQL7nZNrDPQNpDMHZL8QHZL7jONqQjNNqr8HZg");
	var mask_graphics_152 = new cjs.Graphics().p("A5o6rQMDnLNmDdQNmDcHMMEQHLMDjcNmQjdNnsDHLg");
	var mask_graphics_153 = new cjs.Graphics().p("A5Y7IQMLm9NiDtQNjDqG+MMQG9MLjrNiQjsNjsMG+g");
	var mask_graphics_154 = new cjs.Graphics().p("A5I7jQMTmwNeD8QNeD6GwMTQGxMTj7NdQj7NfsTGwg");
	var mask_graphics_155 = new cjs.Graphics().p("A437+QMamiNaELQNZEJGjMbQGiMakKNZQkKNasaGig");
	var mask_graphics_156 = new cjs.Graphics().p("A4n8YQMimUNVEaQNUEYGVMiQGUMhkZNUQkYNWsiGUg");
	var mask_graphics_157 = new cjs.Graphics().p("A4W8xQMpmGNPEpQNQEmGHMpQGGMpkoNPQkoNQsoGGg");
	var mask_graphics_158 = new cjs.Graphics().p("A4F9JQMvl4NLE4QNKE1F5MwQF4Muk3NLQk2NKsvF5g");
	var mask_graphics_159 = new cjs.Graphics().p("A309gQM2lqNFFGQNFFEFqM2QFqM1lFNFQlGNGs1Fpg");
	var mask_graphics_160 = new cjs.Graphics().p("A3i93QM8lbM/FVQM/FSFbM9QFcM6lUNAQlUM/s7Fcg");
	var mask_graphics_161 = new cjs.Graphics().p("A3R+MQNClNM5FjQM5FhFNNDQFNNAliM6QliM5tCFNg");
	var mask_graphics_162 = new cjs.Graphics().p("A2/+hQNHk+MzFyQMzFvE+NIQE/NGlxMzQlwM0tIE+g");
	var mask_graphics_163 = new cjs.Graphics().p("A2t+0QNNkwMsGAQMsF9EwNOQEwNMl/MsQl/MttNEwg");
	var mask_graphics_164 = new cjs.Graphics().p("A2b/HQNSkhMlGOQMlGMEhNSQEhNRmMMmQmNMmtREhg");
	var mask_graphics_165 = new cjs.Graphics().p("A2J/ZQNXkSMeGcQMeGaESNXQETNWmbMfQmbMftWESg");
	var mask_graphics_166 = new cjs.Graphics().p("A13/qQNckDMWGqQMXGnEENdQEDNampMXQmpMYtaEDg");
	var mask_graphics_167 = new cjs.Graphics().p("A1l/6QNgj0MQG4QMPG1D0NgQD0Nfm2MQQm3MQtfD0g");
	var mask_graphics_168 = new cjs.Graphics().p("EgVSggJQNkjlMHHFQMIHDDlNlQDlNjnEMIQnEMItjDlg");
	var mask_graphics_169 = new cjs.Graphics().p("EgVAggXQNojWMAHTQMAHQDVNpQDWNmnRMBQnSMAtnDWg");
	var mask_graphics_170 = new cjs.Graphics().p("EgUtgglQNrjGL4HgQL3HeDHNsQDGNqnfL4QnfL4tqDHg");
	var mask_graphics_171 = new cjs.Graphics().p("EgUaggxQNui3LvHtQLvHrC4NwQC3NtnsLwQnsLvtuC4g");
	var mask_graphics_172 = new cjs.Graphics().p("EgUIgg8QNyioLmH6QLnH4CoNzQCoNxn6LmQn5LntxCog");
	var mask_graphics_173 = new cjs.Graphics().p("EgT1ghHQN1iYLdIHQLeIFCYN1QCZN0oHLeQoGLetzCYg");
	var mask_graphics_174 = new cjs.Graphics().p("EgTighQQN3iJLUIUQLVISCJN4QCJN2oTLUQoTLVt2CJg");
	var mask_graphics_175 = new cjs.Graphics().p("EgTPghYQN6h6LKIhQLLIeB6N6QB5N4ofLMQogLLt4B5g");
	var mask_graphics_176 = new cjs.Graphics().p("EgS8ghgQN8hqLAItQLCIrBqN8QBqN6osLCQosLCt6Bqg");
	var mask_graphics_177 = new cjs.Graphics().p("EgSpghmQN9hbK3I6QK4I3BaN9QBbN8o4K4Qo4K4t8Bbg");
	var mask_graphics_178 = new cjs.Graphics().p("EgSWghsQN/hKKtJFQKtJDBLN/QBLN+pEKtQpEKut+BLg");
	var mask_graphics_179 = new cjs.Graphics().p("EgSDghwQOAg7KjJRQKjJPA7OAQA8N/pQKkQpQKjt/A7g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-179.6,y:-3.3}).wait(1).to({graphics:mask_graphics_1,x:-179.6,y:-3.3}).wait(1).to({graphics:mask_graphics_2,x:-179.6,y:-3.3}).wait(1).to({graphics:mask_graphics_3,x:-179.6,y:-3.4}).wait(1).to({graphics:mask_graphics_4,x:-179.6,y:-3.6}).wait(1).to({graphics:mask_graphics_5,x:-179.6,y:-3.7}).wait(1).to({graphics:mask_graphics_6,x:-179.7,y:-3.9}).wait(1).to({graphics:mask_graphics_7,x:-179.7,y:-4.2}).wait(1).to({graphics:mask_graphics_8,x:-179.7,y:-4.4}).wait(1).to({graphics:mask_graphics_9,x:-179.8,y:-4.8}).wait(1).to({graphics:mask_graphics_10,x:-179.8,y:-5.1}).wait(1).to({graphics:mask_graphics_11,x:-179.8,y:-5.5}).wait(1).to({graphics:mask_graphics_12,x:-179.8,y:-5.9}).wait(1).to({graphics:mask_graphics_13,x:-179.9,y:-6.3}).wait(1).to({graphics:mask_graphics_14,x:-179.9,y:-6.8}).wait(1).to({graphics:mask_graphics_15,x:-179.9,y:-7.3}).wait(1).to({graphics:mask_graphics_16,x:-179.9,y:-7.9}).wait(1).to({graphics:mask_graphics_17,x:-179.9,y:-8.5}).wait(1).to({graphics:mask_graphics_18,x:-180,y:-9.1}).wait(1).to({graphics:mask_graphics_19,x:-180,y:-9.7}).wait(1).to({graphics:mask_graphics_20,x:-180,y:-10.4}).wait(1).to({graphics:mask_graphics_21,x:-180,y:-11}).wait(1).to({graphics:mask_graphics_22,x:-180,y:-11.8}).wait(1).to({graphics:mask_graphics_23,x:-180,y:-12.5}).wait(1).to({graphics:mask_graphics_24,x:-180,y:-13.3}).wait(1).to({graphics:mask_graphics_25,x:-180,y:-14.1}).wait(1).to({graphics:mask_graphics_26,x:-180,y:-15}).wait(1).to({graphics:mask_graphics_27,x:-180,y:-15.8}).wait(1).to({graphics:mask_graphics_28,x:-180,y:-16.7}).wait(1).to({graphics:mask_graphics_29,x:-180,y:-17.6}).wait(1).to({graphics:mask_graphics_30,x:-179.9,y:-18.6}).wait(1).to({graphics:mask_graphics_31,x:-179.9,y:-19.6}).wait(1).to({graphics:mask_graphics_32,x:-179.9,y:-20.6}).wait(1).to({graphics:mask_graphics_33,x:-179.9,y:-21.6}).wait(1).to({graphics:mask_graphics_34,x:-179.9,y:-22.7}).wait(1).to({graphics:mask_graphics_35,x:-179.9,y:-23.8}).wait(1).to({graphics:mask_graphics_36,x:-179.8,y:-24.9}).wait(1).to({graphics:mask_graphics_37,x:-179.8,y:-26}).wait(1).to({graphics:mask_graphics_38,x:-179.8,y:-27.2}).wait(1).to({graphics:mask_graphics_39,x:-179.8,y:-28.4}).wait(1).to({graphics:mask_graphics_40,x:-179.8,y:-29.7}).wait(1).to({graphics:mask_graphics_41,x:-178.6,y:-30.9}).wait(1).to({graphics:mask_graphics_42,x:-177.2,y:-32.2}).wait(1).to({graphics:mask_graphics_43,x:-175.8,y:-33.6}).wait(1).to({graphics:mask_graphics_44,x:-174.4,y:-34.9}).wait(1).to({graphics:mask_graphics_45,x:-173.1,y:-36.3}).wait(1).to({graphics:mask_graphics_46,x:-171.8,y:-37.6}).wait(1).to({graphics:mask_graphics_47,x:-170.5,y:-39}).wait(1).to({graphics:mask_graphics_48,x:-169.3,y:-40.5}).wait(1).to({graphics:mask_graphics_49,x:-168.1,y:-41.9}).wait(1).to({graphics:mask_graphics_50,x:-166.9,y:-43.4}).wait(1).to({graphics:mask_graphics_51,x:-165.8,y:-44.9}).wait(1).to({graphics:mask_graphics_52,x:-164.7,y:-46.4}).wait(1).to({graphics:mask_graphics_53,x:-163.6,y:-48}).wait(1).to({graphics:mask_graphics_54,x:-162.5,y:-49.6}).wait(1).to({graphics:mask_graphics_55,x:-161.5,y:-51.1}).wait(1).to({graphics:mask_graphics_56,x:-160.5,y:-52.7}).wait(1).to({graphics:mask_graphics_57,x:-159.5,y:-54.4}).wait(1).to({graphics:mask_graphics_58,x:-158.5,y:-56}).wait(1).to({graphics:mask_graphics_59,x:-157.6,y:-57.7}).wait(1).to({graphics:mask_graphics_60,x:-156.7,y:-59.3}).wait(1).to({graphics:mask_graphics_61,x:-155.8,y:-61}).wait(1).to({graphics:mask_graphics_62,x:-154.9,y:-62.7}).wait(1).to({graphics:mask_graphics_63,x:-154.1,y:-64.4}).wait(1).to({graphics:mask_graphics_64,x:-153.3,y:-66.1}).wait(1).to({graphics:mask_graphics_65,x:-152.6,y:-67.8}).wait(1).to({graphics:mask_graphics_66,x:-151.8,y:-69.6}).wait(1).to({graphics:mask_graphics_67,x:-151.1,y:-71.3}).wait(1).to({graphics:mask_graphics_68,x:-150.4,y:-73.1}).wait(1).to({graphics:mask_graphics_69,x:-149.8,y:-74.9}).wait(1).to({graphics:mask_graphics_70,x:-149.1,y:-76.6}).wait(1).to({graphics:mask_graphics_71,x:-148.5,y:-78.4}).wait(1).to({graphics:mask_graphics_72,x:-148,y:-80.2}).wait(1).to({graphics:mask_graphics_73,x:-147.4,y:-82}).wait(1).to({graphics:mask_graphics_74,x:-146.9,y:-83.8}).wait(1).to({graphics:mask_graphics_75,x:-146.4,y:-85.7}).wait(1).to({graphics:mask_graphics_76,x:-146,y:-87.5}).wait(1).to({graphics:mask_graphics_77,x:-145.5,y:-89.3}).wait(1).to({graphics:mask_graphics_78,x:-145.1,y:-91.2}).wait(1).to({graphics:mask_graphics_79,x:-144.8,y:-93}).wait(1).to({graphics:mask_graphics_80,x:-144.5,y:-94.8}).wait(1).to({graphics:mask_graphics_81,x:-144.2,y:-96.7}).wait(1).to({graphics:mask_graphics_82,x:-143.9,y:-98.5}).wait(1).to({graphics:mask_graphics_83,x:-143.7,y:-100.4}).wait(1).to({graphics:mask_graphics_84,x:-143.5,y:-102.3}).wait(1).to({graphics:mask_graphics_85,x:-143.3,y:-104.2}).wait(1).to({graphics:mask_graphics_86,x:-143.2,y:-106}).wait(1).to({graphics:mask_graphics_87,x:-143.1,y:-107.9}).wait(1).to({graphics:mask_graphics_88,x:-143.1,y:-109.8}).wait(1).to({graphics:mask_graphics_89,x:-143,y:-110}).wait(1).to({graphics:mask_graphics_90,x:-143,y:-109.8}).wait(1).to({graphics:mask_graphics_91,x:-142.9,y:-108.1}).wait(1).to({graphics:mask_graphics_92,x:-142.9,y:-106.4}).wait(1).to({graphics:mask_graphics_93,x:-142.8,y:-104.7}).wait(1).to({graphics:mask_graphics_94,x:-142.6,y:-103}).wait(1).to({graphics:mask_graphics_95,x:-142.5,y:-101.3}).wait(1).to({graphics:mask_graphics_96,x:-142.3,y:-99.6}).wait(1).to({graphics:mask_graphics_97,x:-142.1,y:-97.9}).wait(1).to({graphics:mask_graphics_98,x:-141.8,y:-96.2}).wait(1).to({graphics:mask_graphics_99,x:-141.5,y:-94.5}).wait(1).to({graphics:mask_graphics_100,x:-141.2,y:-92.8}).wait(1).to({graphics:mask_graphics_101,x:-140.9,y:-91.1}).wait(1).to({graphics:mask_graphics_102,x:-140.5,y:-89.5}).wait(1).to({graphics:mask_graphics_103,x:-140.2,y:-87.8}).wait(1).to({graphics:mask_graphics_104,x:-139.7,y:-86.1}).wait(1).to({graphics:mask_graphics_105,x:-139.3,y:-84.5}).wait(1).to({graphics:mask_graphics_106,x:-138.8,y:-82.8}).wait(1).to({graphics:mask_graphics_107,x:-138.4,y:-81.2}).wait(1).to({graphics:mask_graphics_108,x:-137.8,y:-79.5}).wait(1).to({graphics:mask_graphics_109,x:-137.3,y:-77.9}).wait(1).to({graphics:mask_graphics_110,x:-136.8,y:-76.3}).wait(1).to({graphics:mask_graphics_111,x:-136.2,y:-74.7}).wait(1).to({graphics:mask_graphics_112,x:-135.6,y:-73.1}).wait(1).to({graphics:mask_graphics_113,x:-134.9,y:-71.4}).wait(1).to({graphics:mask_graphics_114,x:-134.3,y:-69.9}).wait(1).to({graphics:mask_graphics_115,x:-133.6,y:-68.3}).wait(1).to({graphics:mask_graphics_116,x:-132.9,y:-66.7}).wait(1).to({graphics:mask_graphics_117,x:-132.2,y:-65.1}).wait(1).to({graphics:mask_graphics_118,x:-131.4,y:-63.6}).wait(1).to({graphics:mask_graphics_119,x:-130.6,y:-62}).wait(1).to({graphics:mask_graphics_120,x:-129.9,y:-60.5}).wait(1).to({graphics:mask_graphics_121,x:-129,y:-58.9}).wait(1).to({graphics:mask_graphics_122,x:-128.2,y:-57.4}).wait(1).to({graphics:mask_graphics_123,x:-127.3,y:-55.9}).wait(1).to({graphics:mask_graphics_124,x:-126.5,y:-54.4}).wait(1).to({graphics:mask_graphics_125,x:-125.5,y:-53}).wait(1).to({graphics:mask_graphics_126,x:-124.6,y:-51.5}).wait(1).to({graphics:mask_graphics_127,x:-123.7,y:-50.1}).wait(1).to({graphics:mask_graphics_128,x:-122.7,y:-48.6}).wait(1).to({graphics:mask_graphics_129,x:-121.7,y:-47.2}).wait(1).to({graphics:mask_graphics_130,x:-120.7,y:-45.8}).wait(1).to({graphics:mask_graphics_131,x:-119.6,y:-44.4}).wait(1).to({graphics:mask_graphics_132,x:-118.6,y:-43.1}).wait(1).to({graphics:mask_graphics_133,x:-117.5,y:-41.7}).wait(1).to({graphics:mask_graphics_134,x:-116.4,y:-40.4}).wait(1).to({graphics:mask_graphics_135,x:-115.1,y:-39}).wait(1).to({graphics:mask_graphics_136,x:-113.9,y:-37.6}).wait(1).to({graphics:mask_graphics_137,x:-112.6,y:-36.2}).wait(1).to({graphics:mask_graphics_138,x:-111.2,y:-34.9}).wait(1).to({graphics:mask_graphics_139,x:-109.9,y:-33.6}).wait(1).to({graphics:mask_graphics_140,x:-108.5,y:-32.3}).wait(1).to({graphics:mask_graphics_141,x:-107.1,y:-31}).wait(1).to({graphics:mask_graphics_142,x:-105.7,y:-29.8}).wait(1).to({graphics:mask_graphics_143,x:-104.2,y:-28.6}).wait(1).to({graphics:mask_graphics_144,x:-102.7,y:-27.4}).wait(1).to({graphics:mask_graphics_145,x:-101.2,y:-26.3}).wait(1).to({graphics:mask_graphics_146,x:-99.7,y:-25.2}).wait(1).to({graphics:mask_graphics_147,x:-98.2,y:-24.1}).wait(1).to({graphics:mask_graphics_148,x:-96.6,y:-23}).wait(1).to({graphics:mask_graphics_149,x:-95,y:-22}).wait(1).to({graphics:mask_graphics_150,x:-93.4,y:-21}).wait(1).to({graphics:mask_graphics_151,x:-91.8,y:-20}).wait(1).to({graphics:mask_graphics_152,x:-90.2,y:-19.1}).wait(1).to({graphics:mask_graphics_153,x:-88.5,y:-18.1}).wait(1).to({graphics:mask_graphics_154,x:-86.8,y:-17.2}).wait(1).to({graphics:mask_graphics_155,x:-85.2,y:-16.4}).wait(1).to({graphics:mask_graphics_156,x:-83.5,y:-15.5}).wait(1).to({graphics:mask_graphics_157,x:-81.8,y:-14.7}).wait(1).to({graphics:mask_graphics_158,x:-80.1,y:-13.9}).wait(1).to({graphics:mask_graphics_159,x:-78.3,y:-13.1}).wait(1).to({graphics:mask_graphics_160,x:-76.6,y:-12.4}).wait(1).to({graphics:mask_graphics_161,x:-74.8,y:-11.7}).wait(1).to({graphics:mask_graphics_162,x:-73.1,y:-11}).wait(1).to({graphics:mask_graphics_163,x:-71.3,y:-10.4}).wait(1).to({graphics:mask_graphics_164,x:-69.5,y:-9.7}).wait(1).to({graphics:mask_graphics_165,x:-67.8,y:-9.1}).wait(1).to({graphics:mask_graphics_166,x:-66,y:-8.6}).wait(1).to({graphics:mask_graphics_167,x:-64.2,y:-8}).wait(1).to({graphics:mask_graphics_168,x:-62.4,y:-7.5}).wait(1).to({graphics:mask_graphics_169,x:-60.5,y:-7}).wait(1).to({graphics:mask_graphics_170,x:-58.7,y:-6.6}).wait(1).to({graphics:mask_graphics_171,x:-56.9,y:-6.2}).wait(1).to({graphics:mask_graphics_172,x:-55.1,y:-5.8}).wait(1).to({graphics:mask_graphics_173,x:-53.2,y:-5.4}).wait(1).to({graphics:mask_graphics_174,x:-51.4,y:-5.1}).wait(1).to({graphics:mask_graphics_175,x:-49.5,y:-4.8}).wait(1).to({graphics:mask_graphics_176,x:-47.7,y:-4.6}).wait(1).to({graphics:mask_graphics_177,x:-45.8,y:-4.4}).wait(1).to({graphics:mask_graphics_178,x:-44,y:-4.2}).wait(1).to({graphics:mask_graphics_179,x:-42,y:-3.9}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AmttFQAKAAAKAAQFcAAD1D2QD2D2AAFbQAAFcj2D2QjYDZkpAZ");
	this.shape.setTransform(-99.4,-7.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(180));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.5,-103.9,21.9,182.4);


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
	this.instance.setTransform(-0.1,-7.7,1,1,0,0,0,0.4,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:157.3},84).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AiGAiIAAhDIENAAIAABDg");
	var mask_graphics_1 = new cjs.Graphics().p("AiGAsIAAhXIENAAIAABXg");
	var mask_graphics_2 = new cjs.Graphics().p("AiGA1IAAhqIENAAIAABqg");
	var mask_graphics_3 = new cjs.Graphics().p("AiGA/IAAh9IENAAIAAB9g");
	var mask_graphics_4 = new cjs.Graphics().p("AiGBJIAAiRIENAAIAACRg");
	var mask_graphics_5 = new cjs.Graphics().p("AiGBSIAAijIENAAIAACjg");
	var mask_graphics_6 = new cjs.Graphics().p("AiGBcIAAi3IENAAIAAC3g");
	var mask_graphics_7 = new cjs.Graphics().p("AiGBmIAAjLIENAAIAADLg");
	var mask_graphics_8 = new cjs.Graphics().p("AiGBvIAAjdIENAAIAADdg");
	var mask_graphics_9 = new cjs.Graphics().p("AiGB5IAAjxIENAAIAADxg");
	var mask_graphics_10 = new cjs.Graphics().p("AiGCDIAAkEIENAAIAAEEg");
	var mask_graphics_11 = new cjs.Graphics().p("AiGCMIAAkXIENAAIAAEXg");
	var mask_graphics_12 = new cjs.Graphics().p("AiGCWIAAkqIENAAIAAEqg");
	var mask_graphics_13 = new cjs.Graphics().p("AiGCfIAAk9IENAAIAAE9g");
	var mask_graphics_14 = new cjs.Graphics().p("AiGCpIAAlRIENAAIAAFRg");
	var mask_graphics_15 = new cjs.Graphics().p("AiGCyIAAljIENAAIAAFjg");
	var mask_graphics_16 = new cjs.Graphics().p("AiGC8IAAl3IENAAIAAF3g");
	var mask_graphics_17 = new cjs.Graphics().p("AiGDGIAAmKIENAAIAAGKg");
	var mask_graphics_18 = new cjs.Graphics().p("AiGDPIAAmdIENAAIAAGdg");
	var mask_graphics_19 = new cjs.Graphics().p("AiGDZIAAmxIENAAIAAGxg");
	var mask_graphics_20 = new cjs.Graphics().p("AiGDiIAAnDIENAAIAAHDg");
	var mask_graphics_21 = new cjs.Graphics().p("AiGDsIAAnXIENAAIAAHXg");
	var mask_graphics_22 = new cjs.Graphics().p("AiGD1IAAnpIENAAIAAHpg");
	var mask_graphics_23 = new cjs.Graphics().p("AiGD/IAAn9IENAAIAAH9g");
	var mask_graphics_24 = new cjs.Graphics().p("AiGEJIAAoRIENAAIAAIRg");
	var mask_graphics_25 = new cjs.Graphics().p("AiGESIAAojIENAAIAAIjg");
	var mask_graphics_26 = new cjs.Graphics().p("AiGEcIAAo3IENAAIAAI3g");
	var mask_graphics_27 = new cjs.Graphics().p("AiGElIAApKIENAAIAAJKg");
	var mask_graphics_28 = new cjs.Graphics().p("AiGEvIAApdIENAAIAAJdg");
	var mask_graphics_29 = new cjs.Graphics().p("AiGE4IAApvIENAAIAAJvg");
	var mask_graphics_30 = new cjs.Graphics().p("AiGFCIAAqDIENAAIAAKDg");
	var mask_graphics_31 = new cjs.Graphics().p("AiGFMIAAqXIENAAIAAKXg");
	var mask_graphics_32 = new cjs.Graphics().p("AiGFVIAAqpIENAAIAAKpg");
	var mask_graphics_33 = new cjs.Graphics().p("AiGFfIAAq9IENAAIAAK9g");
	var mask_graphics_34 = new cjs.Graphics().p("AiGFpIAArQIENAAIAALQg");
	var mask_graphics_35 = new cjs.Graphics().p("AiGFyIAArjIENAAIAALjg");
	var mask_graphics_36 = new cjs.Graphics().p("AiGF8IAAr3IENAAIAAL3g");
	var mask_graphics_37 = new cjs.Graphics().p("AiGGGIAAsLIENAAIAAMLg");
	var mask_graphics_38 = new cjs.Graphics().p("AiGGPIAAsdIENAAIAAMdg");
	var mask_graphics_39 = new cjs.Graphics().p("AiGGZIAAsxIENAAIAAMxg");
	var mask_graphics_40 = new cjs.Graphics().p("AiGGiIAAtDIENAAIAANDg");
	var mask_graphics_41 = new cjs.Graphics().p("AiGGsIAAtWIENAAIAANWg");
	var mask_graphics_42 = new cjs.Graphics().p("AiGG1IAAtpIENAAIAANpg");
	var mask_graphics_43 = new cjs.Graphics().p("AiGG/IAAt9IENAAIAAN9g");
	var mask_graphics_44 = new cjs.Graphics().p("AiGHIIAAuPIENAAIAAOPg");
	var mask_graphics_45 = new cjs.Graphics().p("AiGHSIAAujIENAAIAAOjg");
	var mask_graphics_46 = new cjs.Graphics().p("AiGHcIAAu3IENAAIAAO3g");
	var mask_graphics_47 = new cjs.Graphics().p("AiGHlIAAvJIENAAIAAPJg");
	var mask_graphics_48 = new cjs.Graphics().p("AiGHvIAAvdIENAAIAAPdg");
	var mask_graphics_49 = new cjs.Graphics().p("AiGH4IAAvwIENAAIAAPwg");
	var mask_graphics_50 = new cjs.Graphics().p("AiGICIAAwDIENAAIAAQDg");
	var mask_graphics_51 = new cjs.Graphics().p("AiGILIAAwVIENAAIAAQVg");
	var mask_graphics_52 = new cjs.Graphics().p("AiGIVIAAwpIENAAIAAQpg");
	var mask_graphics_53 = new cjs.Graphics().p("AiGIfIAAw9IENAAIAAQ9g");
	var mask_graphics_54 = new cjs.Graphics().p("AiGIoIAAxPIENAAIAARPg");
	var mask_graphics_55 = new cjs.Graphics().p("AiGIyIAAxjIENAAIAARjg");
	var mask_graphics_56 = new cjs.Graphics().p("AiGI7IAAx2IENAAIAAR2g");
	var mask_graphics_57 = new cjs.Graphics().p("AiGJFIAAyJIENAAIAASJg");
	var mask_graphics_58 = new cjs.Graphics().p("AiGJPIAAydIENAAIAASdg");
	var mask_graphics_59 = new cjs.Graphics().p("AiGJYIAAyvIENAAIAASvg");
	var mask_graphics_60 = new cjs.Graphics().p("AiGJiIAAzDIENAAIAATDg");
	var mask_graphics_61 = new cjs.Graphics().p("AiGJsIAAzXIENAAIAATXg");
	var mask_graphics_62 = new cjs.Graphics().p("AiGJ1IAAzpIENAAIAATpg");
	var mask_graphics_63 = new cjs.Graphics().p("AiGJ/IAAz8IENAAIAAT8g");
	var mask_graphics_64 = new cjs.Graphics().p("AiGKIIAA0PIENAAIAAUPg");
	var mask_graphics_65 = new cjs.Graphics().p("AiGKSIAA0jIENAAIAAUjg");
	var mask_graphics_66 = new cjs.Graphics().p("AiGKcIAA03IENAAIAAU3g");
	var mask_graphics_67 = new cjs.Graphics().p("AiGKlIAA1JIENAAIAAVJg");
	var mask_graphics_68 = new cjs.Graphics().p("AiGKvIAA1dIENAAIAAVdg");
	var mask_graphics_69 = new cjs.Graphics().p("AiGK4IAA1vIENAAIAAVvg");
	var mask_graphics_70 = new cjs.Graphics().p("AiGLCIAA2DIENAAIAAWDg");
	var mask_graphics_71 = new cjs.Graphics().p("AiGLLIAA2VIENAAIAAWVg");
	var mask_graphics_72 = new cjs.Graphics().p("AiGLVIAA2pIENAAIAAWpg");
	var mask_graphics_73 = new cjs.Graphics().p("AiGLeIAA28IENAAIAAW8g");
	var mask_graphics_74 = new cjs.Graphics().p("AiGLoIAA3PIENAAIAAXPg");
	var mask_graphics_75 = new cjs.Graphics().p("AiGLyIAA3jIENAAIAAXjg");
	var mask_graphics_76 = new cjs.Graphics().p("AiGL7IAA31IENAAIAAX1g");
	var mask_graphics_77 = new cjs.Graphics().p("AiGMFIAA4JIENAAIAAYJg");
	var mask_graphics_78 = new cjs.Graphics().p("AiGMOIAA4cIENAAIAAYcg");
	var mask_graphics_79 = new cjs.Graphics().p("AiGMYIAA4vIENAAIAAYvg");
	var mask_graphics_80 = new cjs.Graphics().p("AiGMhIAA5CIENAAIAAZCg");
	var mask_graphics_81 = new cjs.Graphics().p("AiGMrIAA5VIENAAIAAZVg");
	var mask_graphics_82 = new cjs.Graphics().p("AiGM1IAA5pIENAAIAAZpg");
	var mask_graphics_83 = new cjs.Graphics().p("AiGM+IAA57IENAAIAAZ7g");
	var mask_graphics_84 = new cjs.Graphics().p("AiGNIIAA6PIENAAIAAaPg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:-6.3}).wait(1).to({graphics:mask_graphics_1,x:0,y:-5.3}).wait(1).to({graphics:mask_graphics_2,x:0,y:-4.2}).wait(1).to({graphics:mask_graphics_3,x:0,y:-3.2}).wait(1).to({graphics:mask_graphics_4,x:0,y:-2.2}).wait(1).to({graphics:mask_graphics_5,x:0,y:-1.2}).wait(1).to({graphics:mask_graphics_6,x:0,y:-0.1}).wait(1).to({graphics:mask_graphics_7,x:0,y:0.9}).wait(1).to({graphics:mask_graphics_8,x:0,y:1.9}).wait(1).to({graphics:mask_graphics_9,x:0,y:2.9}).wait(1).to({graphics:mask_graphics_10,x:0,y:4}).wait(1).to({graphics:mask_graphics_11,x:0,y:5}).wait(1).to({graphics:mask_graphics_12,x:0,y:6}).wait(1).to({graphics:mask_graphics_13,x:0,y:7}).wait(1).to({graphics:mask_graphics_14,x:0,y:8}).wait(1).to({graphics:mask_graphics_15,x:0,y:9.1}).wait(1).to({graphics:mask_graphics_16,x:0,y:10.1}).wait(1).to({graphics:mask_graphics_17,x:0,y:11.1}).wait(1).to({graphics:mask_graphics_18,x:0,y:12.2}).wait(1).to({graphics:mask_graphics_19,x:0,y:13.2}).wait(1).to({graphics:mask_graphics_20,x:0,y:14.2}).wait(1).to({graphics:mask_graphics_21,x:0,y:15.2}).wait(1).to({graphics:mask_graphics_22,x:0,y:16.3}).wait(1).to({graphics:mask_graphics_23,x:0,y:17.3}).wait(1).to({graphics:mask_graphics_24,x:0,y:18.3}).wait(1).to({graphics:mask_graphics_25,x:0,y:19.3}).wait(1).to({graphics:mask_graphics_26,x:0,y:20.3}).wait(1).to({graphics:mask_graphics_27,x:0,y:21.4}).wait(1).to({graphics:mask_graphics_28,x:0,y:22.4}).wait(1).to({graphics:mask_graphics_29,x:0,y:23.4}).wait(1).to({graphics:mask_graphics_30,x:0,y:24.4}).wait(1).to({graphics:mask_graphics_31,x:0,y:25.5}).wait(1).to({graphics:mask_graphics_32,x:0,y:26.5}).wait(1).to({graphics:mask_graphics_33,x:0,y:27.5}).wait(1).to({graphics:mask_graphics_34,x:0,y:28.6}).wait(1).to({graphics:mask_graphics_35,x:0,y:29.6}).wait(1).to({graphics:mask_graphics_36,x:0,y:30.6}).wait(1).to({graphics:mask_graphics_37,x:0,y:31.6}).wait(1).to({graphics:mask_graphics_38,x:0,y:32.6}).wait(1).to({graphics:mask_graphics_39,x:0,y:33.7}).wait(1).to({graphics:mask_graphics_40,x:0,y:34.7}).wait(1).to({graphics:mask_graphics_41,x:0,y:35.7}).wait(1).to({graphics:mask_graphics_42,x:0,y:36.7}).wait(1).to({graphics:mask_graphics_43,x:0,y:37.8}).wait(1).to({graphics:mask_graphics_44,x:0,y:38.8}).wait(1).to({graphics:mask_graphics_45,x:0,y:39.8}).wait(1).to({graphics:mask_graphics_46,x:0,y:40.8}).wait(1).to({graphics:mask_graphics_47,x:0,y:41.9}).wait(1).to({graphics:mask_graphics_48,x:0,y:42.9}).wait(1).to({graphics:mask_graphics_49,x:0,y:43.9}).wait(1).to({graphics:mask_graphics_50,x:0,y:44.9}).wait(1).to({graphics:mask_graphics_51,x:0,y:46}).wait(1).to({graphics:mask_graphics_52,x:0,y:47}).wait(1).to({graphics:mask_graphics_53,x:0,y:48}).wait(1).to({graphics:mask_graphics_54,x:0,y:49}).wait(1).to({graphics:mask_graphics_55,x:0,y:50.1}).wait(1).to({graphics:mask_graphics_56,x:0,y:51.1}).wait(1).to({graphics:mask_graphics_57,x:0,y:52.1}).wait(1).to({graphics:mask_graphics_58,x:0,y:53.1}).wait(1).to({graphics:mask_graphics_59,x:0,y:54.1}).wait(1).to({graphics:mask_graphics_60,x:0,y:55.2}).wait(1).to({graphics:mask_graphics_61,x:0,y:56.2}).wait(1).to({graphics:mask_graphics_62,x:0,y:57.2}).wait(1).to({graphics:mask_graphics_63,x:0,y:58.3}).wait(1).to({graphics:mask_graphics_64,x:0,y:59.3}).wait(1).to({graphics:mask_graphics_65,x:0,y:60.3}).wait(1).to({graphics:mask_graphics_66,x:0,y:61.3}).wait(1).to({graphics:mask_graphics_67,x:0,y:62.4}).wait(1).to({graphics:mask_graphics_68,x:0,y:63.4}).wait(1).to({graphics:mask_graphics_69,x:0,y:64.4}).wait(1).to({graphics:mask_graphics_70,x:0,y:65.4}).wait(1).to({graphics:mask_graphics_71,x:0,y:66.4}).wait(1).to({graphics:mask_graphics_72,x:0,y:67.5}).wait(1).to({graphics:mask_graphics_73,x:0,y:68.5}).wait(1).to({graphics:mask_graphics_74,x:0,y:69.5}).wait(1).to({graphics:mask_graphics_75,x:0,y:70.5}).wait(1).to({graphics:mask_graphics_76,x:0,y:71.6}).wait(1).to({graphics:mask_graphics_77,x:0,y:72.6}).wait(1).to({graphics:mask_graphics_78,x:0,y:73.6}).wait(1).to({graphics:mask_graphics_79,x:0,y:74.6}).wait(1).to({graphics:mask_graphics_80,x:0,y:75.7}).wait(1).to({graphics:mask_graphics_81,x:0,y:76.7}).wait(1).to({graphics:mask_graphics_82,x:0,y:77.7}).wait(1).to({graphics:mask_graphics_83,x:0,y:78.7}).wait(1).to({graphics:mask_graphics_84,x:0,y:79.8}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAAszIAAZn");
	this.shape.setTransform(0,81.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(85));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.2,-7.7,24.3,21.9);


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
(lib.writingsuccess_Fontkid_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_788 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(788).call(this.frame_788).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(166.2,95.8,0.999,0.999,8.5,0,0,22.4,-144);
	this.instance._off = true;

	this.instance_1 = new lib.honeybee();
	this.instance_1.parent = this;
	this.instance_1.setTransform(376.1,89.8,0.421,0.421,8.5,0,0,-37.5,63.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({y:248.8},120).wait(11).to({x:169,y:90.1},0).to({x:376,y:89.8},90).wait(11).to({x:167.2,y:246.8},0).to({guide:{path:[165.3,244.5,197.1,216.8,250.5,213.4,304.2,210.1,343.5,251.6,382.7,293.3,381.8,342.6,380.9,391.9,356.3,424,331.6,456.1,306,468.5,280.4,480.9,238.8,478.6,197.2,476.3,158.8,432.7]}},190).to({_off:true},120).wait(238));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(551).to({_off:false},0).to({regX:-39.3,regY:63.2,guide:{path:[376,89.7,331.4,130.9,273.6,148.8,217.7,166,164.6,141.3,114.8,118.2,64.2,97.3,11,75.5,-44.7,60.6,-102.5,45.1,-161.7,37.2,-179.2,34.7,-196.7,32.3]}},61).to({_off:true},1).wait(176));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(164.9,244,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},120).wait(11).to({_off:false,x:375.9,y:91},0).to({_off:true},90).wait(11).to({_off:false,x:164.9,y:439},0).to({_off:true},190).wait(358));

	// Layer 16
	this.instance_2 = new lib.H_ar("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(228,16.3,1,1,-90,0,0,0,33);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(140).to({_off:false},0).to({_off:true},473).wait(176));

	// Layer 28
	this.instance_3 = new lib.SC_ar("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(378.5,356.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(241).to({_off:false},0).to({_off:true},372).wait(176));

	// Layer 17
	this.instance_4 = new lib.V_ar("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(108,213,1,1,0,0,0,0,33);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({_off:true},604).wait(176));

	// 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AAeAAIg7AA");
	this.shape_1.setTransform(170,91.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("AgpAAIBTAA");
	this.shape_2.setTransform(171.2,91.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("Ag0AAIBpAA");
	this.shape_3.setTransform(172.3,91.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("Ag/AAIB/AA");
	this.shape_4.setTransform(173.4,91.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(25,1,1).p("AhLAAICWAA");
	this.shape_5.setTransform(174.6,91.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(25,1,1).p("AhWAAICtAA");
	this.shape_6.setTransform(175.7,91.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(25,1,1).p("AhhAAIDDAA");
	this.shape_7.setTransform(176.8,91.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(25,1,1).p("AhtAAIDbAA");
	this.shape_8.setTransform(178,91.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(25,1,1).p("Ah4AAIDxAA");
	this.shape_9.setTransform(179.1,91.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(25,1,1).p("AiEAAIEJAA");
	this.shape_10.setTransform(180.3,91.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(25,1,1).p("AiPAAIEfAA");
	this.shape_11.setTransform(181.4,91.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(25,1,1).p("AiaAAIE1AA");
	this.shape_12.setTransform(182.5,91.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(25,1,1).p("AimAAIFNAA");
	this.shape_13.setTransform(183.7,91.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(25,1,1).p("AixAAIFjAA");
	this.shape_14.setTransform(184.8,91.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(25,1,1).p("Ai8AAIF6AA");
	this.shape_15.setTransform(186,91.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(25,1,1).p("AjIAAIGRAA");
	this.shape_16.setTransform(187.1,91.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(25,1,1).p("AjTAAIGnAA");
	this.shape_17.setTransform(188.2,91.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(25,1,1).p("AjeAAIG9AA");
	this.shape_18.setTransform(189.4,91.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(25,1,1).p("AjqAAIHVAA");
	this.shape_19.setTransform(190.5,91.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(25,1,1).p("Aj2AAIHtAA");
	this.shape_20.setTransform(191.7,91.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(25,1,1).p("AkBAAIIDAA");
	this.shape_21.setTransform(192.8,91.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(25,1,1).p("AkMAAIIZAA");
	this.shape_22.setTransform(193.9,91.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(25,1,1).p("AkYAAIIwAA");
	this.shape_23.setTransform(195.1,91.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(25,1,1).p("AkjAAIJHAA");
	this.shape_24.setTransform(196.2,91.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(25,1,1).p("AkuAAIJdAA");
	this.shape_25.setTransform(197.3,91.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(25,1,1).p("Ak6AAIJ1AA");
	this.shape_26.setTransform(198.5,91.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(25,1,1).p("AlFAAIKLAA");
	this.shape_27.setTransform(199.6,91.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(25,1,1).p("AlRAAIKjAA");
	this.shape_28.setTransform(200.8,91.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(25,1,1).p("AlcAAIK5AA");
	this.shape_29.setTransform(201.9,91.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(25,1,1).p("AlnAAILPAA");
	this.shape_30.setTransform(203,91.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(25,1,1).p("AlzAAILnAA");
	this.shape_31.setTransform(204.2,91.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(25,1,1).p("Al+AAIL9AA");
	this.shape_32.setTransform(205.3,91.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(25,1,1).p("AmJAAIMUAA");
	this.shape_33.setTransform(206.5,91.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(25,1,1).p("AmVAAIMrAA");
	this.shape_34.setTransform(207.6,91.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(25,1,1).p("AmgAAINBAA");
	this.shape_35.setTransform(208.7,91.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(25,1,1).p("AmrAAINXAA");
	this.shape_36.setTransform(209.9,91.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(25,1,1).p("Am3AAINvAA");
	this.shape_37.setTransform(211,91.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(25,1,1).p("AnDAAIOHAA");
	this.shape_38.setTransform(212.2,91.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(25,1,1).p("AnOAAIOdAA");
	this.shape_39.setTransform(213.3,91.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(25,1,1).p("AnZAAIOzAA");
	this.shape_40.setTransform(214.4,91.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(25,1,1).p("AnlAAIPLAA");
	this.shape_41.setTransform(215.6,91.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(25,1,1).p("AnwAAIPhAA");
	this.shape_42.setTransform(216.7,91.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(25,1,1).p("An7AAIP3AA");
	this.shape_43.setTransform(217.8,91.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(25,1,1).p("AoHAAIQPAA");
	this.shape_44.setTransform(219,91.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(25,1,1).p("AoSAAIQlAA");
	this.shape_45.setTransform(220.1,91.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(25,1,1).p("AoeAAIQ9AA");
	this.shape_46.setTransform(221.3,91.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(25,1,1).p("AopAAIRTAA");
	this.shape_47.setTransform(222.4,91.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(25,1,1).p("Ao0AAIRpAA");
	this.shape_48.setTransform(223.5,91.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(25,1,1).p("ApAAAISBAA");
	this.shape_49.setTransform(224.7,91.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(25,1,1).p("ApLAAISXAA");
	this.shape_50.setTransform(225.8,91.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(25,1,1).p("ApWAAIStAA");
	this.shape_51.setTransform(227,91.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(25,1,1).p("ApiAAITFAA");
	this.shape_52.setTransform(228.1,91.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(25,1,1).p("AptAAITbAA");
	this.shape_53.setTransform(229.2,91.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(25,1,1).p("Ap5AAITzAA");
	this.shape_54.setTransform(230.4,91.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(25,1,1).p("AqEAAIUJAA");
	this.shape_55.setTransform(231.5,91.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(25,1,1).p("AqQAAIUhAA");
	this.shape_56.setTransform(232.7,91.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(25,1,1).p("AqbAAIU3AA");
	this.shape_57.setTransform(233.8,91.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(25,1,1).p("AqmAAIVNAA");
	this.shape_58.setTransform(234.9,91.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(25,1,1).p("AqyAAIVlAA");
	this.shape_59.setTransform(236.1,91.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(25,1,1).p("Aq9AAIV7AA");
	this.shape_60.setTransform(237.2,91.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(25,1,1).p("ArIAAIWRAA");
	this.shape_61.setTransform(238.3,91.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(25,1,1).p("ArUAAIWpAA");
	this.shape_62.setTransform(239.5,91.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(25,1,1).p("ArfAAIW/AA");
	this.shape_63.setTransform(240.6,91.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(25,1,1).p("ArrAAIXXAA");
	this.shape_64.setTransform(241.8,91.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(25,1,1).p("Ar2AAIXtAA");
	this.shape_65.setTransform(242.9,91.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(25,1,1).p("AsBAAIYDAA");
	this.shape_66.setTransform(244,91.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(25,1,1).p("AsNAAIYbAA");
	this.shape_67.setTransform(245.2,91.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(25,1,1).p("AsYAAIYxAA");
	this.shape_68.setTransform(246.3,91.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(25,1,1).p("AsjAAIZHAA");
	this.shape_69.setTransform(247.5,91.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(25,1,1).p("AsvAAIZfAA");
	this.shape_70.setTransform(248.6,91.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(25,1,1).p("As6AAIZ1AA");
	this.shape_71.setTransform(249.7,91.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(25,1,1).p("AtGAAIaNAA");
	this.shape_72.setTransform(250.9,91.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(25,1,1).p("AtRAAIajAA");
	this.shape_73.setTransform(252,91.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(25,1,1).p("AtdAAIa7AA");
	this.shape_74.setTransform(253.2,91.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(25,1,1).p("AtoAAIbRAA");
	this.shape_75.setTransform(254.3,91.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(25,1,1).p("AtzAAIbnAA");
	this.shape_76.setTransform(255.4,91.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(25,1,1).p("At/AAIb/AA");
	this.shape_77.setTransform(256.6,91.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(25,1,1).p("AuKAAIcVAA");
	this.shape_78.setTransform(257.7,91.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(25,1,1).p("AuVAAIcrAA");
	this.shape_79.setTransform(258.8,91.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(25,1,1).p("AuhAAIdDAA");
	this.shape_80.setTransform(260,91.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(25,1,1).p("AusAAIdZAA");
	this.shape_81.setTransform(261.1,91.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(25,1,1).p("Au4AAIdxAA");
	this.shape_82.setTransform(262.3,91.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(25,1,1).p("AvDAAIeHAA");
	this.shape_83.setTransform(263.4,91.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(25,1,1).p("AvOAAIedAA");
	this.shape_84.setTransform(264.5,91.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(25,1,1).p("AvaAAIe1AA");
	this.shape_85.setTransform(265.7,91.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(25,1,1).p("AvlAAIfLAA");
	this.shape_86.setTransform(266.8,91.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(25,1,1).p("AvwAAIfhAA");
	this.shape_87.setTransform(268,91.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(25,1,1).p("Av8AAIf5AA");
	this.shape_88.setTransform(269.1,91.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(25,1,1).p("AwHAAMAgPAAA");
	this.shape_89.setTransform(270.2,91.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(25,1,1).p("AwTAAMAgmAAA");
	this.shape_90.setTransform(271.4,91.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(25,1,1).p("AQfAAMgg9AAA");
	this.shape_91.setTransform(272.5,91.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},140).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[]},383).wait(176));

	// Layer 22 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_311 = new cjs.Graphics().p("A7FKjQEJsVLqlzQLplzMVEKQMXEJFyLpMg4RAb+QlzrpEKsWg");
	var mask_graphics_312 = new cjs.Graphics().p("A7BKQQEYsQLxlkQLwllMPEZQMSEYFlLvMg4zAa6QlkrwEYsRg");
	var mask_graphics_313 = new cjs.Graphics().p("A68J+QEnsLL3lWQL3lWMKEnQMMEnFXL2Mg5TAZ1QlWr3EnsLg");
	var mask_graphics_314 = new cjs.Graphics().p("A62JsQE2sFL+lIQL8lIMFE2QMHE2FHL8Mg5xAYwQlHr+E1sFg");
	var mask_graphics_315 = new cjs.Graphics().p("A6uJaQFEr+MDk6QMDk5L/FFQMAFDE6MDMg6OAXpQk6sDFFsAg");
	var mask_graphics_316 = new cjs.Graphics().p("A6mJJQFTr4MJkrQMJkrL4FTQL6FTErMIMg6qAWiQkrsJFTr5g");
	var mask_graphics_317 = new cjs.Graphics().p("A6dI4QFhrxMPkcQMOkcLyFhQLzFhEcMNMg7EAVcQkcsPFhrzg");
	var mask_graphics_318 = new cjs.Graphics().p("A6TIoQFvrrMUkNQMUkNLrFwQLtFtENMUMg7eAUUQkNsUFvrsg");
	var mask_graphics_319 = new cjs.Graphics().p("A6IIYQF+rkMZj+QMYj+LkF+QLlF8D/MZMg72ATLQj+sZF9rlg");
	var mask_graphics_320 = new cjs.Graphics().p("A57IJQGLrdMdjvQMdjvLdGMQLeGKDvMdMg8MASDQjvseGMrdg");
	var mask_graphics_321 = new cjs.Graphics().p("A5uH6QGZrVMijgQMhjgLVGZQLXGYDfMiMg8gAQ5QjgsiGZrVg");
	var mask_graphics_322 = new cjs.Graphics().p("A5gHrQGmrNMmjQQMmjRLNGnQLPGlDQMmMg80APwQjRsmGnrOg");
	var mask_graphics_323 = new cjs.Graphics().p("A5RHdQG0rFMqjBQMpjCLFG1QLHGzDBMpMg9HAOmQjBspG0rGg");
	var mask_graphics_324 = new cjs.Graphics().p("A5BHPQHBq8MuiyQMsiyK9HCQK+HACyMtMg9XANcQiystHBq+g");
	var mask_graphics_325 = new cjs.Graphics().p("A4wHCQHPqzMwijQMwijK0HPQK1HNCjMxMg9nAMRQijswHPq1g");
	var mask_graphics_326 = new cjs.Graphics().p("A4eG2QHcqrMziTQMziUKqHcQKtHbCUMzMg92ALHQiTs0Hcqrg");
	var mask_graphics_327 = new cjs.Graphics().p("A4LGpQHoqhM2iEQM2iEKhHpQKkHnCEM2Mg+CAJ8QiEs2Hpqjg");
	var mask_graphics_328 = new cjs.Graphics().p("A33GeQH1qZM4h0QM4h0KYH0QKaH1B0M5Mg+MAIwQh0s4H1qZg");
	var mask_graphics_329 = new cjs.Graphics().p("A3jGSQICqOM6hlQM6hkKPIAQKQICBlM6Mg+XAHlQhks6IBqQg");
	var mask_graphics_330 = new cjs.Graphics().p("A3NGIQIOqFM8hVQM8hVKEINQKHIOBVM8Mg+fAGaQhVs8IOqGg");
	var mask_graphics_331 = new cjs.Graphics().p("A22F9QIap6M9hGQM9hFJ7IZQJ9IaBFM+Mg+mAFOQhFs+Iap8g");
	var mask_graphics_332 = new cjs.Graphics().p("A2fF0QImpxM/g1QM+g2JwIlQJzImA1M/Mg+rAECQg2s/Impxg");
	var mask_graphics_333 = new cjs.Graphics().p("A2GFqQIxpmNAglQM/gmJlIxQJoIxAmNAMg+vAC2QgmtAIypng");
	var mask_graphics_334 = new cjs.Graphics().p("A1tFiQI9pcM/gWQNAgWJcI8QJdI+AWNAMg+yABqQgWtAI9pcg");
	var mask_graphics_335 = new cjs.Graphics().p("A1TFZQJIpQNAgGQNAgGJRJHQJSJIAGNBMg+zAAeQgGtAJIpSg");
	var mask_graphics_336 = new cjs.Graphics().p("A+VbBQAJtAJUpGQJTpFNAAJQNAAKJFJSQJIJUgKNAg");
	var mask_graphics_337 = new cjs.Graphics().p("A+UaIQAZtAJeo7QJfo5M/AZQNAAZI6JdQI7JfgZNAg");
	var mask_graphics_338 = new cjs.Graphics().p("A+TZPQAps/JpovQJpouM+ApQNAAoIuJoQIwJqgoM/g");
	var mask_graphics_339 = new cjs.Graphics().p("A+RYWQA5s+J0ojQJzojM9A5QM/A5IiJyQIlJ0g5M+g");
	var mask_graphics_340 = new cjs.Graphics().p("A+OXdQBJs9J9oXQJ+oWM8BIQM+BIIWJ9QIYJ+hIM9g");
	var mask_graphics_341 = new cjs.Graphics().p("A+KWlQBYs8KIoLQKHoKM7BYQM8BYIKKGQIMKIhYM8g");
	var mask_graphics_342 = new cjs.Graphics().p("A+GVsQBos6KRn+QKSn+M4BnQM6BoH+KQQIAKShnM6g");
	var mask_graphics_343 = new cjs.Graphics().p("A+BU0QB3s4KbnyQKbnyM3B4QM4B3HxKaQHzKbh3M3g");
	var mask_graphics_344 = new cjs.Graphics().p("A97T7QCGs1KlnkQKknmM0CHQM2CHHkKjQHnKkiHM1g");
	var mask_graphics_345 = new cjs.Graphics().p("A91TDQCWsyKunYQKtnZMxCXQMzCWHYKsQHaKuiXMyg");
	var mask_graphics_346 = new cjs.Graphics().p("A9uSLQCmsvK2nLQK2nLMuClQMwCmHLK1QHNK2imMwg");
	var mask_graphics_347 = new cjs.Graphics().p("A9mRUQC1ssK/m+QK+m+MrC1QMtC1G9K9QHAK/i1Msg");
	var mask_graphics_348 = new cjs.Graphics().p("A9eQcQDFsoLHmwQLHmxMnDEQMpDEGwLGQGyLHjEMpg");
	var mask_graphics_349 = new cjs.Graphics().p("A9UPlQDTslLPmiQLPmkMkDUQMlDUGiLNQGlLQjUMkg");
	var mask_graphics_350 = new cjs.Graphics().p("A9KOuQDisgLXmVQLXmWMfDjQMhDjGVLVQGXLXjjMhg");
	var mask_graphics_351 = new cjs.Graphics().p("A9AN3QDyscLemHQLfmIMbDyQMcDyGHLdQGJLfjyMcg");
	var mask_graphics_352 = new cjs.Graphics().p("A80NBQEAsXLml5QLml6MWEBQMYEBF5LkQF7LmkBMXg");
	var mask_graphics_353 = new cjs.Graphics().p("A8oMLQEPsRLtlsQLtlsMREQQMSEQFrLrQFtLtkPMSg");
	var mask_graphics_354 = new cjs.Graphics().p("A8aLQQEgsML0lcQL0lcMLEgQMNEgFbLzQFeL0kgMNg");
	var mask_graphics_355 = new cjs.Graphics().p("A8LKVQEwsFL7lNQL6lMMGEwQMHExFML6QFNL7kwMGg");
	var mask_graphics_356 = new cjs.Graphics().p("A78JbQFBr/MCk8QMBk9L/FBQMBFAE7MBQE9MClAMAg");
	var mask_graphics_357 = new cjs.Graphics().p("A7rIhQFQr4MJksQMHktL5FRQL5FREsMHQEtMIlRL5g");
	var mask_graphics_358 = new cjs.Graphics().p("A7aHoQFhrxMOkcQMOkcLxFgQLyFhEbMNQEdMPlgLxg");
	var mask_graphics_359 = new cjs.Graphics().p("A7IGvQFwrpMVkMQMTkMLqFwQLrFxEKMSQENMVlwLqg");
	var mask_graphics_360 = new cjs.Graphics().p("A60F3QF/riMaj7QMYj7LjGAQLjF/D6MZQD8MamALig");
	var mask_graphics_361 = new cjs.Graphics().p("A6hE/QGPrZMfjrQMejqLaGPQLbGPDpMdQDsMgmPLag");
	var mask_graphics_362 = new cjs.Graphics().p("A6MEIQGerRMkjZQMijaLSGeQLSGeDZMiQDbMkmeLSg");
	var mask_graphics_363 = new cjs.Graphics().p("A53DSQGtrIMojJQMnjJLJGtQLKGtDIMnQDJMomtLJg");
	var mask_graphics_364 = new cjs.Graphics().p("A5gCcQG8q/Msi4QMri4K/G8QLBG8C3MrQC5Msm8LAg");
	var mask_graphics_365 = new cjs.Graphics().p("A5JBnQHKq1MwinQMuinK3HKQK3HLCmMuQCoMwnLK3g");
	var mask_graphics_366 = new cjs.Graphics().p("A4yAzQHZqsMziWQMyiVKtHYQKtHZCVMyQCXM0nZKsg");
	var mask_graphics_367 = new cjs.Graphics().p("A4ZAAQHnqiM2iFQM1iFKjHnQKjHnCEM1QCFM3nnKig");
	var mask_graphics_368 = new cjs.Graphics().p("A4AgyQH1qYM5h0QM3h0KZH1QKYH1BzM4QB1M5n1KYg");
	var mask_graphics_369 = new cjs.Graphics().p("A3mhkQIDqOM7hiQM5hiKOICQKOIDBiM6QBjM7oDKOg");
	var mask_graphics_370 = new cjs.Graphics().p("A3MiVQIRqDM8hRQM8hRKDIQQKDIQBRM8QBSM+oRKCg");
	var mask_graphics_371 = new cjs.Graphics().p("A2wjFQIdp4M/hAQM9g/J4IdQJ4IdA/M+QBAM/oeJ4g");
	var mask_graphics_372 = new cjs.Graphics().p("A2Vj1QIrpsNAguQM+gvJsIrQJtIqAuM/QAvNAorJsg");
	var mask_graphics_373 = new cjs.Graphics().p("A14kjQI3phNBgdQM/gdJhI4QJhI3AcM/QAdNBo3Jhg");
	var mask_graphics_374 = new cjs.Graphics().p("A1blRQJEpUNAgMQNAgMJVJFQJVJDALNAQAMNCpEJUg");
	var mask_graphics_375 = new cjs.Graphics().p("A0+l9QJRpJNAAGQNAAGJJJQQJJJQgHNAQgFNCpRJIg");
	var mask_graphics_376 = new cjs.Graphics().p("A0gmpQJdo8NAAXQNAAXI8JdQI8JcgYNAQgWNBpdI8g");
	var mask_graphics_377 = new cjs.Graphics().p("A0BnUQJpovM+AoQNAApIvJoQIwJogpM/QgoNBppIvg");
	var mask_graphics_378 = new cjs.Graphics().p("Azin+QJ0oiM+A6QM/A6IiJ0QIjJzg7M+Qg5NAp0Iig");
	var mask_graphics_379 = new cjs.Graphics().p("AzConQJ/oVM9BMQM9BLIVJ/QIVJ/hMM9QhKM+p/IVg");
	var mask_graphics_380 = new cjs.Graphics().p("AyipPQKLoHM6BdQM8BcIHKKQIIKKhdM7QhcM9qKIHg");
	var mask_graphics_381 = new cjs.Graphics().p("AyBp1QKVn6M5BuQM5BuH6KVQH6KUhuM5QhuM6qVH6g");
	var mask_graphics_382 = new cjs.Graphics().p("AxgqbQKgnsM2B/QM3B/HsKgQHsKfiAM2Qh+M4qfHsg");
	var mask_graphics_383 = new cjs.Graphics().p("Aw+rAQKqneMzCRQM0CQHeKqQHeKpiRMzQiPM1qqHeg");
	var mask_graphics_384 = new cjs.Graphics().p("AwcrjQK0nQMwChQMxCiHQKzQHPKziiMwQigMzq0HPg");
	var mask_graphics_385 = new cjs.Graphics().p("Av5sGQK9nBMtCyQMuCzHAK9QHCK8izMtQiyMvq9HBg");
	var mask_graphics_386 = new cjs.Graphics().p("AvVsnQLGmzMpDEQMpDDGzLGQGyLGjEMpQjDMrrGGyg");
	var mask_graphics_387 = new cjs.Graphics().p("AuytIQLQmjMkDUQMmDUGjLQQGjLOjUMlQjUMmrPGkg");
	var mask_graphics_388 = new cjs.Graphics().p("AuNtnQLXmUMgDlQMhDlGULYQGVLXjmMgQjkMirYGUg");
	var mask_graphics_389 = new cjs.Graphics().p("AtpuFQLgmFMbD2QMcD2GFLgQGFLfj2MbQj1MdrgGFg");
	var mask_graphics_390 = new cjs.Graphics().p("AtEuiQLpl1MVEGQMXEGF1LoQF2LokHMWQkFMXrpF2g");
	var mask_graphics_391 = new cjs.Graphics().p("Aseu+QLwllMQEWQMREXFmLwQFmLvkXMQQkXMSrvFmg");
	var mask_graphics_392 = new cjs.Graphics().p("Ar4vYQL3lWMKEnQMLEnFWL2QFXL4koMKQknMMr3FWg");
	var mask_graphics_393 = new cjs.Graphics().p("ArSvxQL+lGMEE3QMFE3FGL9QFHL/k4MEQk3MFr+FGg");
	var mask_graphics_394 = new cjs.Graphics().p("AqrwJQMEk3L+FIQL+FHE2MEQE3MFlIL9QlHMAsFE2g");
	var mask_graphics_395 = new cjs.Graphics().p("AqEwgQMKkmL4FXQL3FXEmMLQEmMLlYL2QlXL4sLEmg");
	var mask_graphics_396 = new cjs.Graphics().p("Apdw2QMQkWLvFnQLwFnEWMQQEVMSlnLvQlnLxsREVg");
	var mask_graphics_397 = new cjs.Graphics().p("AorxQQMYkBLmF7QLlF7EBMYQEBMYl8LlQl6LnsYEBg");
	var mask_graphics_398 = new cjs.Graphics().p("An3xoQMejrLbGPQLcGODrMeQDrMfmPLbQmOLcsfDsg");
	var mask_graphics_399 = new cjs.Graphics().p("AnDx9QMjjWLRGiQLRGiDWMjQDWMmmjLPQmhLSslDWg");
	var mask_graphics_400 = new cjs.Graphics().p("AmPyRQMpjALFG1QLFG1DBMpQDAMqm1LFQm1LGsqDAg");
	var mask_graphics_401 = new cjs.Graphics().p("AlayiQMtirK6HIQK5HICrMtQCrMwnIK4QnIK6svCrg");
	var mask_graphics_402 = new cjs.Graphics().p("AklyxQMyiVKtHaQKsHaCVMyQCVMznaKsQnaKuszCVg");
	var mask_graphics_403 = new cjs.Graphics().p("Ajwy+QM2iAKfHtQKgHsB/M1QCAM4ntKeQnsKhs2CAg");
	var mask_graphics_404 = new cjs.Graphics().p("Ai7zKQM5hpKTH+QKSH+BpM5QBpM6n+KRQn9KUs6Bpg");
	var mask_graphics_405 = new cjs.Graphics().p("AiFzSQM7hTKFIPQKEIPBUM7QBTM9oQKDQoPKGs8BTg");
	var mask_graphics_406 = new cjs.Graphics().p("AhPzZQM9g9J2IgQJ2IgA9M9QA9M/ogJ1QogJ4s+A8g");
	var mask_graphics_407 = new cjs.Graphics().p("AgazeQM/gnJnIxQJoIxAnM+QAnNAoxJnQoxJos/Ang");
	var mask_graphics_408 = new cjs.Graphics().p("AAbzgQNAgRJYJBQJZJBARM/QAQNApBJYQpBJZtAARg");
	var mask_graphics_409 = new cjs.Graphics().p("EAA2ArSMAAbg+zQNAAGJJJQQJIJRgFM/QgGNBpQJIQpLJEs3AAIgPAAg");
	var mask_graphics_410 = new cjs.Graphics().p("EAAAArRMACGg+xQNAAcI5JgQI4JggbM/QgcNApgI4QpEIfsPAAIhNgBg");
	var mask_graphics_411 = new cjs.Graphics().p("EgA0ArOMADvg+rQM/AyIoJvQIpJugyM+QgyM/pvIoQo7H7rrAAQhDAAhDgEg");
	var mask_graphics_412 = new cjs.Graphics().p("EgBqArKMAFbg+jQM9BIIXJ9QIYJ8hIM9QhIM+p+IWQoyHZrHAAQheAAhigIg");
	var mask_graphics_413 = new cjs.Graphics().p("EgCgArEMAHGg+YQM6BeIHKLQIGKLheM6QheM8qLIFQooG4qlAAQh6AAh/gPg");
	var mask_graphics_414 = new cjs.Graphics().p("EgDVAq9MAIwg+KQM3B0H1KYQH1KYh0M4Qh0M5qZHzQocGYqFAAQiUAAibgWg");
	var mask_graphics_415 = new cjs.Graphics().p("EgEKAq1MAKZg96QM1CJHiKmQHjKmiKM0QiKM1qlHiQoQF4pmAAQiuAAi2geg");
	var mask_graphics_416 = new cjs.Graphics().p("EgE/AqrMAMDg9nQMwCgHRKyQHQKyigMwQifMxqzHQQoCFbpIAAQjIAAjQgpg");
	var mask_graphics_417 = new cjs.Graphics().p("EgF0AqfMANsg9QQMrC1G+K/QG+K+i1MrQi1Mtq/G9Qn0E+orAAQjgAAjrg1g");
	var mask_graphics_418 = new cjs.Graphics().p("EgGoAqTMAPTg84QMnDLGrLKQGrLKjLMmQjLMnrKGrQnlEioPAAQj5AAkDhBg");
	var mask_graphics_419 = new cjs.Graphics().p("EgHcAqFMAQ7g8cQMhDgGYLWQGYLUjhMhQjgMhrVGXQnVEIn0AAQkRAAkchPg");
	var mask_graphics_420 = new cjs.Graphics().p("EgIPAp1MAShg79QMbD1GELgQGFLfj2MbQj2MbrgGEQnDDunaAAQkpAAkzhfg");
	var mask_graphics_421 = new cjs.Graphics().p("EgJCAplMAUHg7dQMUELFwLqQFxLpkLMUQkLMUrpFwQmyDWnAAAQlBAAlKhvg");
	var mask_graphics_422 = new cjs.Graphics().p("EgJ1ApTMAVsg65QMNEgFcLzQFdLzkgMMQkgMNrzFcQmfDAmmAAQlaAAlgiCg");
	var mask_graphics_423 = new cjs.Graphics().p("EgKnApAMAXQg6SQMFE0FIL8QFIL8k0MEQk1MFr8FHQmLCrmNAAQlzAAl1iVg");
	var mask_graphics_424 = new cjs.Graphics().p("EgLYAorMAYzg5pQL7FJE0MEQE0MFlJL8QlJL8sEEzQl3CVl0AAQmMAAmJipg");
	var mask_graphics_425 = new cjs.Graphics().p("EgMJAoVMAaVg49QLyFdEfMMQEgMNldLzQleLzsMEeQlhCClcAAQmlAAmdi/g");
	var mask_graphics_426 = new cjs.Graphics().p("EgM5An+MAb1g4OQLpFxEKMTQEKMUlwLpQlyLqsTEJQlMBwlDAAQm+AAmwjWg");
	var mask_graphics_427 = new cjs.Graphics().p("EgNpAnmMAdVg3eQLfGFD1MaQD1MbmFLfQmFLfsaD0Qk1BgkrAAQnYAAnCjug");
	var mask_graphics_428 = new cjs.Graphics().p("EgPZAmmMAg1g1fQLFG0DCMoQDBMpmzLFQmzLGspDAQj6A8jxAAQoZAAnqktg");
	var mask_graphics_429 = new cjs.Graphics().p("EgRFAlgMAkOgzSQKoHgCNM0QCNM0ngKoQngKos0CMQi8Ahi0AAQpfAAoNlzg");
	var mask_graphics_430 = new cjs.Graphics().p("EgSsAkTMAndgw3QKIILBYM7QBYM8oLKIQoLKIs7BXQh5ANh1AAQqtAAopm/g");
	var mask_graphics_431 = new cjs.Graphics().p("EgUPAjBMAqiguQQJlIzAjNAQAjNAo0JlQo0JmtAAiQgxACgxAAQsDAApAoSg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(311).to({graphics:mask_graphics_311,x:197.3,y:221}).wait(1).to({graphics:mask_graphics_312,x:198.2,y:219.3}).wait(1).to({graphics:mask_graphics_313,x:199,y:217.6}).wait(1).to({graphics:mask_graphics_314,x:199.7,y:215.9}).wait(1).to({graphics:mask_graphics_315,x:200.5,y:214.1}).wait(1).to({graphics:mask_graphics_316,x:201.2,y:212.3}).wait(1).to({graphics:mask_graphics_317,x:201.8,y:210.6}).wait(1).to({graphics:mask_graphics_318,x:202.5,y:208.8}).wait(1).to({graphics:mask_graphics_319,x:203.1,y:207}).wait(1).to({graphics:mask_graphics_320,x:203.6,y:205.2}).wait(1).to({graphics:mask_graphics_321,x:204.1,y:203.3}).wait(1).to({graphics:mask_graphics_322,x:204.6,y:201.5}).wait(1).to({graphics:mask_graphics_323,x:205.1,y:199.6}).wait(1).to({graphics:mask_graphics_324,x:205.5,y:197.8}).wait(1).to({graphics:mask_graphics_325,x:205.9,y:195.9}).wait(1).to({graphics:mask_graphics_326,x:206.3,y:194.1}).wait(1).to({graphics:mask_graphics_327,x:206.6,y:192.2}).wait(1).to({graphics:mask_graphics_328,x:206.8,y:190.3}).wait(1).to({graphics:mask_graphics_329,x:207.1,y:188.4}).wait(1).to({graphics:mask_graphics_330,x:207.3,y:186.6}).wait(1).to({graphics:mask_graphics_331,x:207.5,y:184.7}).wait(1).to({graphics:mask_graphics_332,x:207.6,y:182.8}).wait(1).to({graphics:mask_graphics_333,x:207.7,y:180.9}).wait(1).to({graphics:mask_graphics_334,x:207.8,y:179}).wait(1).to({graphics:mask_graphics_335,x:207.8,y:177.1}).wait(1).to({graphics:mask_graphics_336,x:207.8,y:177.5}).wait(1).to({graphics:mask_graphics_337,x:207.8,y:179.4}).wait(1).to({graphics:mask_graphics_338,x:207.8,y:181.3}).wait(1).to({graphics:mask_graphics_339,x:207.8,y:183.2}).wait(1).to({graphics:mask_graphics_340,x:207.9,y:185.1}).wait(1).to({graphics:mask_graphics_341,x:207.9,y:187}).wait(1).to({graphics:mask_graphics_342,x:207.9,y:188.9}).wait(1).to({graphics:mask_graphics_343,x:207.9,y:190.7}).wait(1).to({graphics:mask_graphics_344,x:207.9,y:192.6}).wait(1).to({graphics:mask_graphics_345,x:208,y:194.5}).wait(1).to({graphics:mask_graphics_346,x:208,y:196.4}).wait(1).to({graphics:mask_graphics_347,x:208,y:198.2}).wait(1).to({graphics:mask_graphics_348,x:208,y:200.1}).wait(1).to({graphics:mask_graphics_349,x:208,y:201.9}).wait(1).to({graphics:mask_graphics_350,x:208,y:203.8}).wait(1).to({graphics:mask_graphics_351,x:208.1,y:205.6}).wait(1).to({graphics:mask_graphics_352,x:208.1,y:207.4}).wait(1).to({graphics:mask_graphics_353,x:208.1,y:209.2}).wait(1).to({graphics:mask_graphics_354,x:208.1,y:211.2}).wait(1).to({graphics:mask_graphics_355,x:208.1,y:213.1}).wait(1).to({graphics:mask_graphics_356,x:208.1,y:215.1}).wait(1).to({graphics:mask_graphics_357,x:208.1,y:217}).wait(1).to({graphics:mask_graphics_358,x:208.1,y:218.9}).wait(1).to({graphics:mask_graphics_359,x:208.1,y:220.8}).wait(1).to({graphics:mask_graphics_360,x:208.1,y:222.7}).wait(1).to({graphics:mask_graphics_361,x:208.1,y:224.6}).wait(1).to({graphics:mask_graphics_362,x:208,y:226.4}).wait(1).to({graphics:mask_graphics_363,x:208,y:228.2}).wait(1).to({graphics:mask_graphics_364,x:208,y:230}).wait(1).to({graphics:mask_graphics_365,x:208,y:231.8}).wait(1).to({graphics:mask_graphics_366,x:208,y:233.5}).wait(1).to({graphics:mask_graphics_367,x:207.9,y:235.2}).wait(1).to({graphics:mask_graphics_368,x:207.9,y:236.9}).wait(1).to({graphics:mask_graphics_369,x:207.9,y:238.6}).wait(1).to({graphics:mask_graphics_370,x:207.9,y:240.2}).wait(1).to({graphics:mask_graphics_371,x:207.8,y:241.9}).wait(1).to({graphics:mask_graphics_372,x:207.8,y:243.4}).wait(1).to({graphics:mask_graphics_373,x:207.8,y:245}).wait(1).to({graphics:mask_graphics_374,x:207.8,y:246.5}).wait(1).to({graphics:mask_graphics_375,x:207.8,y:248}).wait(1).to({graphics:mask_graphics_376,x:207.8,y:249.5}).wait(1).to({graphics:mask_graphics_377,x:207.8,y:250.9}).wait(1).to({graphics:mask_graphics_378,x:207.9,y:252.3}).wait(1).to({graphics:mask_graphics_379,x:207.9,y:253.7}).wait(1).to({graphics:mask_graphics_380,x:207.9,y:255}).wait(1).to({graphics:mask_graphics_381,x:207.9,y:256.3}).wait(1).to({graphics:mask_graphics_382,x:208,y:257.6}).wait(1).to({graphics:mask_graphics_383,x:208,y:258.8}).wait(1).to({graphics:mask_graphics_384,x:208,y:260}).wait(1).to({graphics:mask_graphics_385,x:208.1,y:261.2}).wait(1).to({graphics:mask_graphics_386,x:208.1,y:262.3}).wait(1).to({graphics:mask_graphics_387,x:208.1,y:263.4}).wait(1).to({graphics:mask_graphics_388,x:208.1,y:264.4}).wait(1).to({graphics:mask_graphics_389,x:208.2,y:265.4}).wait(1).to({graphics:mask_graphics_390,x:208.2,y:266.4}).wait(1).to({graphics:mask_graphics_391,x:208.2,y:267.3}).wait(1).to({graphics:mask_graphics_392,x:208.2,y:268.2}).wait(1).to({graphics:mask_graphics_393,x:208.2,y:269}).wait(1).to({graphics:mask_graphics_394,x:208.2,y:269.9}).wait(1).to({graphics:mask_graphics_395,x:208.2,y:270.6}).wait(1).to({graphics:mask_graphics_396,x:208.1,y:271.3}).wait(1).to({graphics:mask_graphics_397,x:208.1,y:272.2}).wait(1).to({graphics:mask_graphics_398,x:208,y:273}).wait(1).to({graphics:mask_graphics_399,x:208,y:273.7}).wait(1).to({graphics:mask_graphics_400,x:208,y:274.3}).wait(1).to({graphics:mask_graphics_401,x:207.9,y:274.9}).wait(1).to({graphics:mask_graphics_402,x:207.9,y:275.4}).wait(1).to({graphics:mask_graphics_403,x:207.9,y:275.9}).wait(1).to({graphics:mask_graphics_404,x:207.8,y:276.2}).wait(1).to({graphics:mask_graphics_405,x:207.8,y:276.5}).wait(1).to({graphics:mask_graphics_406,x:207.7,y:276.8}).wait(1).to({graphics:mask_graphics_407,x:207.7,y:276.9}).wait(1).to({graphics:mask_graphics_408,x:207.7,y:277}).wait(1).to({graphics:mask_graphics_409,x:207.7,y:277}).wait(1).to({graphics:mask_graphics_410,x:207.7,y:277}).wait(1).to({graphics:mask_graphics_411,x:207.7,y:277}).wait(1).to({graphics:mask_graphics_412,x:207.7,y:277}).wait(1).to({graphics:mask_graphics_413,x:207.7,y:277.1}).wait(1).to({graphics:mask_graphics_414,x:207.8,y:277.1}).wait(1).to({graphics:mask_graphics_415,x:207.8,y:277.1}).wait(1).to({graphics:mask_graphics_416,x:207.8,y:277.2}).wait(1).to({graphics:mask_graphics_417,x:207.9,y:277.2}).wait(1).to({graphics:mask_graphics_418,x:207.9,y:277.2}).wait(1).to({graphics:mask_graphics_419,x:207.9,y:277.2}).wait(1).to({graphics:mask_graphics_420,x:207.9,y:277.2}).wait(1).to({graphics:mask_graphics_421,x:207.9,y:277.2}).wait(1).to({graphics:mask_graphics_422,x:207.9,y:277.3}).wait(1).to({graphics:mask_graphics_423,x:207.9,y:277.3}).wait(1).to({graphics:mask_graphics_424,x:207.9,y:277.2}).wait(1).to({graphics:mask_graphics_425,x:207.9,y:277.2}).wait(1).to({graphics:mask_graphics_426,x:207.9,y:277.2}).wait(1).to({graphics:mask_graphics_427,x:207.9,y:277.2}).wait(1).to({graphics:mask_graphics_428,x:207.8,y:277.1}).wait(1).to({graphics:mask_graphics_429,x:207.8,y:277.1}).wait(1).to({graphics:mask_graphics_430,x:207.8,y:277}).wait(1).to({graphics:mask_graphics_431,x:207.7,y:277.1}).wait(358));

	// 2
	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(25,1,1).p("AwTvXQEokyIKgdQIKgdGdGPQGcGPADIKQADIJl9GpQl8GooogXQoqgXmBml");
	this.shape_92.setTransform(271.4,345.4);
	this.shape_92._off = true;

	var maskedShapeInstanceList = [this.shape_92];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_92).wait(311).to({_off:false},0).to({_off:true},302).wait(176));

	// Layer 15 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_241 = new cjs.Graphics().p("EgA/ApEQsIkwlOr6QlPr8EwsHQEvsIL7lOMAZNA5kQmQCvmTAAQlvAAlwiQg");
	var mask_1_graphics_242 = new cjs.Graphics().p("EgBVAoxQsBlBk8sDQk8sDFDr/QFBsBMCk8MAX1A6JQl+Cdl9AAQmEAAmDijg");
	var mask_1_graphics_243 = new cjs.Graphics().p("EgBrAoeQr5lUkpsKQkpsKFUr3QFUr6MKkpMAWbA6tQlrCLlnAAQmbAAmVi2g");
	var mask_1_graphics_244 = new cjs.Graphics().p("EgCAAoKQrwlmkXsRQkWsRFmrvQFmrxMQkWMAVBA7OQlXB6lRAAQmyAAmmjKg");
	var mask_1_graphics_245 = new cjs.Graphics().p("EgCVAn1Qrnl4kDsYQkEsXF4rmQF4roMXkEMATlA7uQlDBpk7AAQnJAAm3jeg");
	var mask_1_graphics_246 = new cjs.Graphics().p("EgCoAnfQremKjxseQjwsdGKrcQGKrgMcjwMASJA8KQkuBbklAAQngAAnHj0g");
	var mask_1_graphics_247 = new cjs.Graphics().p("EgC7AnHQrVmbjdsjQjdsjGcrSQGbrWMhjdMAQtA8lQkZBNkPAAQn4AAnWkMg");
	var mask_1_graphics_248 = new cjs.Graphics().p("EgDOAmvQrKmsjKsoQjKspGtrIQGtrLMnjKMAPPA89QkDBBj5AAQoRAAnlkkg");
	var mask_1_graphics_249 = new cjs.Graphics().p("EgDfAmWQrAm+i2ssQi3stG+q+QG+rBMri2MANxA9UQjsA1jiAAQorAAnyk9g");
	var mask_1_graphics_250 = new cjs.Graphics().p("EgDwAl8Qq1nOijsxQiisxHOqzQHPq2MvijMAMSA9oQjUAqjMAAQpEAAoAlWg");
	var mask_1_graphics_251 = new cjs.Graphics().p("EgEAAlhQqpnfiQs0QiPs1HfqnQHfqrMziPMAK0A95Qi9Ahi1AAQpfAAoMlxg");
	var mask_1_graphics_252 = new cjs.Graphics().p("EgEPAlFQqenvh7s4Qh8s3HwqcQHvqfM2h7MAJUA+IQikAZieAAQp7AAoXmNg");
	var mask_1_graphics_253 = new cjs.Graphics().p("EgEeAkoQqRn/hos6Qhos7IAqPQH/qTM5hoMAH0A+WQiLARiGAAQqYAAoimpg");
	var mask_1_graphics_254 = new cjs.Graphics().p("EgErAkKQqGoOhTs9QhUs9IPqDQIPqGM7hUMAGUA+hQhxALhuAAQq2AAornHg");
	var mask_1_graphics_255 = new cjs.Graphics().p("EgE4AjsQp5ofg/s+QhAs+Iep2QIdp6M+hAMAE0A+pQhXAHhVAAQrUAAo1nlg");
	var mask_1_graphics_256 = new cjs.Graphics().p("EgFEAjMQpsotgrtAQgss/ItppQIsptM/gsMADUA+vQg9ADg7AAQr0ABo9oFg");
	var mask_1_graphics_257 = new cjs.Graphics().p("EgFQAirQpdo8gYtAQgYs/I8pdQI7peNAgYMABzA+yIhCABQsWAApFolg");
	var mask_1_graphics_258 = new cjs.Graphics().p("EgFaAiKQpQpKgEtBQgDtAJKpOQJJpRNAgEMAATA+0IgLAAQs5AApLpGg");
	var mask_1_graphics_259 = new cjs.Graphics().p("EgGLAhoQpBpZAQtAQAQtAJYpAQJYpCNAAQMgBOA+zQtBgQpApYg");
	var mask_1_graphics_260 = new cjs.Graphics().p("EgHEAhFQozpmAks/QAls/JloyQJlo0NAAkMgCvA+wQs/gkoypmg");
	var mask_1_graphics_261 = new cjs.Graphics().p("EgH8AgiQokpzA4s+QA4s+JzojQJzolM+A4MgEPA+rQs+g4ojp0g");
	var mask_1_graphics_262 = new cjs.Graphics().p("EgI0AgAQoUqBBMs8QBMs9KAoTQJ/oWM9BMMgFvA+jQs8hMoVqAg");
	var mask_1_graphics_263 = new cjs.Graphics().p("ApqfdQoFqNBgs7QBgs6KNoEQKMoGM6BgMgHPA+YQs6hgoFqMg");
	var mask_1_graphics_264 = new cjs.Graphics().p("Aqfe6Qn2qaB0s4QB0s3KZn0QKYn3M4B0MgIvA+MQs3hzn1qZg");
	var mask_1_graphics_265 = new cjs.Graphics().p("ArUeWQnlqlCIs1QCHs0KlnkQKknnM1CIMgKPA9+Qs0iInlqlg");
	var mask_1_graphics_266 = new cjs.Graphics().p("AsHdzQnVqwCbsyQCcsxKwnUQKvnVMyCbMgLuA9sQswibnVqwg");
	var mask_1_graphics_267 = new cjs.Graphics().p("As5dPQnEq7CustQCvsuK7nDQK7nFMuCvMgNNA9aQssivnEq8g");
	var mask_1_graphics_268 = new cjs.Graphics().p("AtrcsQmzrGDDspQDCspLGmyQLFm0MpDCMgOqA9EQspjCmzrGg");
	var mask_1_graphics_269 = new cjs.Graphics().p("AubcIQmhrQDVskQDWskLQmhQLPmiMlDVMgQJA8sQsjjVmirRg");
	var mask_1_graphics_270 = new cjs.Graphics().p("AvJblQmRraDpsfQDpseLamQQLZmRMfDpMgRlA8SQsejpmQrag");
	var mask_1_graphics_271 = new cjs.Graphics().p("Av3bBQl/rjD8sZQD8sZLjl9QLjmAMZD8MgTBA72QsYj8l/rkg");
	var mask_1_graphics_272 = new cjs.Graphics().p("AwkadQltrsEPsTQEPsSLslsQLsluMTEPMgUdA7YQsSkPltrtg");
	var mask_1_graphics_273 = new cjs.Graphics().p("AxIaAQler0EfsNQEfsMLzldQLzlfMNEfMgVpA68QsMkflerzg");
	var mask_1_graphics_274 = new cjs.Graphics().p("AxrZjQlPr7EusHQEvsHL6lOQL5lPMIEuMgWzA6gQsHkulPr6g");
	var mask_1_graphics_275 = new cjs.Graphics().p("AyOZFQk/sBE+sBQE9sBMBk+QMAlBMBE+MgX9A6DQsBk+lAsBg");
	var mask_1_graphics_276 = new cjs.Graphics().p("AyvYoQkwsHFNr7QFNr6MGkvQMHkxL7FNMgZHA5jQr7lNkwsHg");
	var mask_1_graphics_277 = new cjs.Graphics().p("AzQYLQkgsOFcrzQFcr0MNkfQMMkiL0FcMgaQA5DQr0lckhsNg");
	var mask_1_graphics_278 = new cjs.Graphics().p("AzvXtQkRsSFrrsQFrrtMSkQQMSkSLtFrMgbZA4gQrslrkRsTg");
	var mask_1_graphics_279 = new cjs.Graphics().p("A0OXQQkBsYF6rkQF6rmMXkAQMYkDLlF6MgcgA39Qrml6kBsYg");
	var mask_1_graphics_280 = new cjs.Graphics().p("A0sWzQjxsdGIrcQGJrfMcjwQMdjyLeGIMgdoA3YQrdmJjysdg");
	var mask_1_graphics_281 = new cjs.Graphics().p("A1JWWQjhshGXrVQGXrWMhjhQMijiLWGXMgeuA2xQrWmXjisig");
	var mask_1_graphics_282 = new cjs.Graphics().p("A1lV6QjRsmGmrNQGlrOMljQQMmjTLOGmMgf0A2JQrNmljSsmg");
	var mask_1_graphics_283 = new cjs.Graphics().p("A1/VdQjCsqG0rEQG0rFMpjBQMqjCLFG0Mgg4A1gQrFm0jBsqg");
	var mask_1_graphics_284 = new cjs.Graphics().p("A2ZVBQixsuHBq7QHDq9MsiwQMuiyK8HCMgh8A01Qq8nBixsug");
	var mask_1_graphics_285 = new cjs.Graphics().p("A2yUlQihsyHQqyQHQqzMvigQMyiiKzHQMgi/A0JQqznPihsxg");
	var mask_1_graphics_286 = new cjs.Graphics().p("A3KUIQiRs0HeqoQHdqrMziPQM1iSKqHeMgkCAzcQqqndiQs1g");
	var mask_1_graphics_287 = new cjs.Graphics().p("A3hTtQiAs3HrqfQHrqhM1h/QM4iBKgHrMglDAytQqgnriAs2g");
	var mask_1_graphics_288 = new cjs.Graphics().p("A33TRQhws5H5qWQH4qWM4hvQM6hxKWH4MgmDAx+QqWn4hws5g");
	var mask_1_graphics_289 = new cjs.Graphics().p("A4MS1Qhfs7IFqLQIGqMM6hfQM8hgKMIFMgnDAxNQqMoFhfs8g");
	var mask_1_graphics_290 = new cjs.Graphics().p("A4gSaQhOs9ISqBQITqCM7hOQM+hPKCISMgoBAwbQqCoThPs9g");
	var mask_1_graphics_291 = new cjs.Graphics().p("A4yR/Qg/s+Ifp2QIgp4M9g9QM/g/J3IfMgo+AvnQp3ofg+s/g");
	var mask_1_graphics_292 = new cjs.Graphics().p("A5ERkQgus/IsprQIsptM+gsQNAgvJsIsMgp6AuyQpsosgutAg");
	var mask_1_graphics_293 = new cjs.Graphics().p("A5VRKQgdtBI4pfQI4piM/gcQNBgeJhI4Mgq2At8Qpho4gdtAg");
	var mask_1_graphics_294 = new cjs.Graphics().p("A5kQwQgNtBJEpVQJEpVM/gMQNCgNJVJDMgrvAtFQpWpEgMtAg");
	var mask_1_graphics_295 = new cjs.Graphics().p("A5zQWQAEtBJQpJQJQpKM/AFQNCADJKJQMgspAsMQpKpPAEtBg");
	var mask_1_graphics_296 = new cjs.Graphics().p("A6AP8QAVtBJbo9QJbo+M/AWQNCAUI+JbMgthArTQo+pbAVtBg");
	var mask_1_graphics_297 = new cjs.Graphics().p("A6MPiQAltAJmowQJnoyM/AmQNBAkIxJnMguXAqYQoypmAmtBg");
	var mask_1_graphics_298 = new cjs.Graphics().p("A6YPJQA2s/JyokQJyomM9A3QNBA1IlJyMgvNApcQompxA2tAg");
	var mask_1_graphics_299 = new cjs.Graphics().p("A6iOxQBHs/J8oXQJ9oZM8BHQM/BGIZJ8MgwCAogQoYp8BGs+g");
	var mask_1_graphics_300 = new cjs.Graphics().p("A6rOYQBXs8KHoLQKIoNM6BYQM+BWIMKIMgw1AniQoMqHBXs9g");
	var mask_1_graphics_301 = new cjs.Graphics().p("A6zOAQBos7KRn+QKSn/M5BoQM7BnH/KSMgxmAmjQn/qRBns7g");
	var mask_1_graphics_302 = new cjs.Graphics().p("A66NoQB5s4KbnxQKcnyM2B5QM6B3HxKbMgyXAlkQnyqbB4s5g");
	var mask_1_graphics_303 = new cjs.Graphics().p("A6/NRQCIs2KmnkQKlnkM0CJQM3CIHkKkMgzGAkkQnlqlCJs2g");
	var mask_1_graphics_304 = new cjs.Graphics().p("A7EM6QCZszKvnWQKvnXMxCZQM0CYHXKuMgz1AjiQnXquCZszg");
	var mask_1_graphics_305 = new cjs.Graphics().p("A7HMjQCpsvK4nJQK4nJMuCqQMxCoHJK3Mg0hAigQnJq4Cpswg");
	var mask_1_graphics_306 = new cjs.Graphics().p("A7KMNQC6ssLBm7QLBm7MrC6QMtC5G7LAMg1NAhcQm7rBC5ssg");
	var mask_1_graphics_307 = new cjs.Graphics().p("A7LL3QDKsoLJmtQLLmtMmDKQMqDJGsLJMg12AgYQmtrKDJsog");
	var mask_1_graphics_308 = new cjs.Graphics().p("A7LLhQDasjLSmfQLTmfMiDbQMlDZGfLRMg2gAfTQmfrTDaskg");
	var mask_1_graphics_309 = new cjs.Graphics().p("A7KLMQDqsfLamQQLbmQMeDqQMgDpGRLZMg3HAeNQmRraDqsgg");
	var mask_1_graphics_310 = new cjs.Graphics().p("A7IK3QD6saLimBQLjmCMZD6QMcD5GBLhMg3tAdHQmBrjD5sbg");
	var mask_1_graphics_311 = new cjs.Graphics().p("A7FKjQEJsVLqlzQLplzMVEKQMXEJFyLpMg4RAb+QlzrpEKsWg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(241).to({graphics:mask_1_graphics_241,x:147.5,y:277.2}).wait(1).to({graphics:mask_1_graphics_242,x:145.3,y:277.2}).wait(1).to({graphics:mask_1_graphics_243,x:143.1,y:277.2}).wait(1).to({graphics:mask_1_graphics_244,x:140.8,y:277.2}).wait(1).to({graphics:mask_1_graphics_245,x:138.5,y:277.1}).wait(1).to({graphics:mask_1_graphics_246,x:136.2,y:277.1}).wait(1).to({graphics:mask_1_graphics_247,x:133.9,y:277.1}).wait(1).to({graphics:mask_1_graphics_248,x:131.6,y:277.1}).wait(1).to({graphics:mask_1_graphics_249,x:129.2,y:277.1}).wait(1).to({graphics:mask_1_graphics_250,x:126.8,y:277}).wait(1).to({graphics:mask_1_graphics_251,x:124.5,y:277}).wait(1).to({graphics:mask_1_graphics_252,x:122.1,y:277}).wait(1).to({graphics:mask_1_graphics_253,x:119.7,y:276.9}).wait(1).to({graphics:mask_1_graphics_254,x:117.3,y:276.9}).wait(1).to({graphics:mask_1_graphics_255,x:114.9,y:276.9}).wait(1).to({graphics:mask_1_graphics_256,x:112.5,y:276.8}).wait(1).to({graphics:mask_1_graphics_257,x:110.1,y:276.8}).wait(1).to({graphics:mask_1_graphics_258,x:107.7,y:276.8}).wait(1).to({graphics:mask_1_graphics_259,x:109.2,y:276.8}).wait(1).to({graphics:mask_1_graphics_260,x:111.6,y:276.7}).wait(1).to({graphics:mask_1_graphics_261,x:114,y:276.6}).wait(1).to({graphics:mask_1_graphics_262,x:116.4,y:276.4}).wait(1).to({graphics:mask_1_graphics_263,x:118.8,y:276.1}).wait(1).to({graphics:mask_1_graphics_264,x:121.2,y:275.8}).wait(1).to({graphics:mask_1_graphics_265,x:123.6,y:275.5}).wait(1).to({graphics:mask_1_graphics_266,x:126,y:275}).wait(1).to({graphics:mask_1_graphics_267,x:128.4,y:274.6}).wait(1).to({graphics:mask_1_graphics_268,x:130.7,y:274}).wait(1).to({graphics:mask_1_graphics_269,x:133.1,y:273.4}).wait(1).to({graphics:mask_1_graphics_270,x:135.4,y:272.8}).wait(1).to({graphics:mask_1_graphics_271,x:137.7,y:272.1}).wait(1).to({graphics:mask_1_graphics_272,x:140,y:271.3}).wait(1).to({graphics:mask_1_graphics_273,x:141.9,y:270.6}).wait(1).to({graphics:mask_1_graphics_274,x:143.8,y:269.9}).wait(1).to({graphics:mask_1_graphics_275,x:145.6,y:269.2}).wait(1).to({graphics:mask_1_graphics_276,x:147.5,y:268.4}).wait(1).to({graphics:mask_1_graphics_277,x:149.3,y:267.6}).wait(1).to({graphics:mask_1_graphics_278,x:151.1,y:266.7}).wait(1).to({graphics:mask_1_graphics_279,x:152.9,y:265.8}).wait(1).to({graphics:mask_1_graphics_280,x:154.7,y:264.9}).wait(1).to({graphics:mask_1_graphics_281,x:156.5,y:263.9}).wait(1).to({graphics:mask_1_graphics_282,x:158.2,y:262.9}).wait(1).to({graphics:mask_1_graphics_283,x:159.9,y:261.9}).wait(1).to({graphics:mask_1_graphics_284,x:161.6,y:260.8}).wait(1).to({graphics:mask_1_graphics_285,x:163.3,y:259.7}).wait(1).to({graphics:mask_1_graphics_286,x:165,y:258.6}).wait(1).to({graphics:mask_1_graphics_287,x:166.6,y:257.4}).wait(1).to({graphics:mask_1_graphics_288,x:168.2,y:256.2}).wait(1).to({graphics:mask_1_graphics_289,x:169.8,y:255}).wait(1).to({graphics:mask_1_graphics_290,x:171.4,y:253.8}).wait(1).to({graphics:mask_1_graphics_291,x:172.9,y:252.5}).wait(1).to({graphics:mask_1_graphics_292,x:174.4,y:251.2}).wait(1).to({graphics:mask_1_graphics_293,x:175.9,y:249.8}).wait(1).to({graphics:mask_1_graphics_294,x:177.3,y:248.4}).wait(1).to({graphics:mask_1_graphics_295,x:178.8,y:247}).wait(1).to({graphics:mask_1_graphics_296,x:180.2,y:245.6}).wait(1).to({graphics:mask_1_graphics_297,x:181.5,y:244.1}).wait(1).to({graphics:mask_1_graphics_298,x:182.9,y:242.6}).wait(1).to({graphics:mask_1_graphics_299,x:184.2,y:241.1}).wait(1).to({graphics:mask_1_graphics_300,x:185.5,y:239.6}).wait(1).to({graphics:mask_1_graphics_301,x:186.7,y:238}).wait(1).to({graphics:mask_1_graphics_302,x:187.9,y:236.4}).wait(1).to({graphics:mask_1_graphics_303,x:189.1,y:234.8}).wait(1).to({graphics:mask_1_graphics_304,x:190.3,y:233.1}).wait(1).to({graphics:mask_1_graphics_305,x:191.4,y:231.5}).wait(1).to({graphics:mask_1_graphics_306,x:192.5,y:229.8}).wait(1).to({graphics:mask_1_graphics_307,x:193.5,y:228.1}).wait(1).to({graphics:mask_1_graphics_308,x:194.6,y:226.4}).wait(1).to({graphics:mask_1_graphics_309,x:195.6,y:224.6}).wait(1).to({graphics:mask_1_graphics_310,x:196.5,y:222.9}).wait(1).to({graphics:mask_1_graphics_311,x:197.3,y:221}).wait(478));

	// 2
	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(25,1,1).p("Aw8uWQEokzILgdQIKgdGcGQQGdGPACIJQADIKl8GpQicCui6Bj");
	this.shape_93.setTransform(275.5,338.9);
	this.shape_93._off = true;

	var maskedShapeInstanceList = [this.shape_93];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_93).wait(241).to({_off:false},0).to({_off:true},372).wait(176));

	// 1
	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(25,1,1).p("AAAgTIAAAn");
	this.shape_94.setTransform(167,93.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(25,1,1).p("AAAAaIAAgz");
	this.shape_95.setTransform(167,93.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(25,1,1).p("AAAAhIAAhB");
	this.shape_96.setTransform(167,94.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(25,1,1).p("AAAAnIAAhN");
	this.shape_97.setTransform(167,95);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(25,1,1).p("AAAAtIAAhZ");
	this.shape_98.setTransform(167,95.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(25,1,1).p("AAAA0IAAhn");
	this.shape_99.setTransform(167,96.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(25,1,1).p("AAAA6IAAhz");
	this.shape_100.setTransform(167,96.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(25,1,1).p("AAABAIAAh/");
	this.shape_101.setTransform(167,97.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(25,1,1).p("AAABHIAAiN");
	this.shape_102.setTransform(167,98.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(25,1,1).p("AAABNIAAiZ");
	this.shape_103.setTransform(167,98.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(25,1,1).p("AAABTIAAil");
	this.shape_104.setTransform(167,99.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(25,1,1).p("AAABaIAAiz");
	this.shape_105.setTransform(167,100);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(25,1,1).p("AAABgIAAi/");
	this.shape_106.setTransform(167,100.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(25,1,1).p("AAABmIAAjL");
	this.shape_107.setTransform(167,101.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(25,1,1).p("AAABtIAAjZ");
	this.shape_108.setTransform(167,101.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(25,1,1).p("AAABzIAAjl");
	this.shape_109.setTransform(167,102.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(25,1,1).p("AAAB5IAAjx");
	this.shape_110.setTransform(167,103.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(25,1,1).p("AAACAIAAj/");
	this.shape_111.setTransform(167,103.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(25,1,1).p("AAACGIAAkL");
	this.shape_112.setTransform(167,104.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(25,1,1).p("AAACMIAAkX");
	this.shape_113.setTransform(167,105.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(25,1,1).p("AAACTIAAkl");
	this.shape_114.setTransform(167,105.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(25,1,1).p("AAACZIAAkx");
	this.shape_115.setTransform(167,106.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(25,1,1).p("AAACfIAAk9");
	this.shape_116.setTransform(167,107);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(25,1,1).p("AAACmIAAlL");
	this.shape_117.setTransform(167,107.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(25,1,1).p("AAACsIAAlX");
	this.shape_118.setTransform(167,108.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(25,1,1).p("AAACyIAAlj");
	this.shape_119.setTransform(167,108.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(25,1,1).p("AAAC5IAAlx");
	this.shape_120.setTransform(167,109.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(25,1,1).p("AAAC/IAAl9");
	this.shape_121.setTransform(167,110.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(25,1,1).p("AAADFIAAmJ");
	this.shape_122.setTransform(167,110.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(25,1,1).p("AAADMIAAmX");
	this.shape_123.setTransform(167,111.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(25,1,1).p("AAADSIAAmj");
	this.shape_124.setTransform(167,112.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(25,1,1).p("AAADYIAAmv");
	this.shape_125.setTransform(167,112.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(25,1,1).p("AAADfIAAm9");
	this.shape_126.setTransform(167,113.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(25,1,1).p("AAADlIAAnJ");
	this.shape_127.setTransform(167,114);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(25,1,1).p("AAADrIAAnV");
	this.shape_128.setTransform(167,114.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(25,1,1).p("AAADyIAAnj");
	this.shape_129.setTransform(167,115.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(25,1,1).p("AAAD4IAAnv");
	this.shape_130.setTransform(167,115.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(25,1,1).p("AAAD+IAAn7");
	this.shape_131.setTransform(167,116.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(25,1,1).p("AAAEFIAAoJ");
	this.shape_132.setTransform(167,117.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(25,1,1).p("AAAELIAAoV");
	this.shape_133.setTransform(167,117.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(25,1,1).p("AAAERIAAoh");
	this.shape_134.setTransform(167,118.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(25,1,1).p("AAAEYIAAov");
	this.shape_135.setTransform(167,119);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(25,1,1).p("AAAEeIAAo7");
	this.shape_136.setTransform(167,119.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(25,1,1).p("AAAEkIAApH");
	this.shape_137.setTransform(167,120.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(25,1,1).p("AAAErIAApV");
	this.shape_138.setTransform(167,120.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(25,1,1).p("AAAExIAAph");
	this.shape_139.setTransform(167,121.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(25,1,1).p("AAAE3IAApt");
	this.shape_140.setTransform(167,122.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(25,1,1).p("AAAE+IAAp7");
	this.shape_141.setTransform(167,122.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(25,1,1).p("AAAFEIAAqH");
	this.shape_142.setTransform(167,123.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(25,1,1).p("AAAFKIAAqT");
	this.shape_143.setTransform(167,124.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(25,1,1).p("AAAFRIAAqh");
	this.shape_144.setTransform(167,124.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(25,1,1).p("AAAFXIAAqt");
	this.shape_145.setTransform(167,125.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(25,1,1).p("AAAFdIAAq5");
	this.shape_146.setTransform(167,126);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(25,1,1).p("AAAFkIAArH");
	this.shape_147.setTransform(167,126.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(25,1,1).p("AAAFqIAArT");
	this.shape_148.setTransform(167,127.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(25,1,1).p("AAAFwIAArf");
	this.shape_149.setTransform(167,127.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(25,1,1).p("AAAF3IAArt");
	this.shape_150.setTransform(167,128.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").ss(25,1,1).p("AAAF9IAAr5");
	this.shape_151.setTransform(167,129.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(25,1,1).p("AAAGDIAAsF");
	this.shape_152.setTransform(167,129.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#000000").ss(25,1,1).p("AAAGKIAAsT");
	this.shape_153.setTransform(167,130.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(25,1,1).p("AAAGQIAAsf");
	this.shape_154.setTransform(167,131.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#000000").ss(25,1,1).p("AAAGWIAAsr");
	this.shape_155.setTransform(167,131.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(25,1,1).p("AAAGdIAAs5");
	this.shape_156.setTransform(167,132.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#000000").ss(25,1,1).p("AAAGjIAAtF");
	this.shape_157.setTransform(167,133);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(25,1,1).p("AAAGpIAAtR");
	this.shape_158.setTransform(167,133.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#000000").ss(25,1,1).p("AAAGwIAAtf");
	this.shape_159.setTransform(167,134.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(25,1,1).p("AAAG2IAAtr");
	this.shape_160.setTransform(167,134.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#000000").ss(25,1,1).p("AAAG8IAAt3");
	this.shape_161.setTransform(167,135.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(25,1,1).p("AAAHDIAAuF");
	this.shape_162.setTransform(167,136.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#000000").ss(25,1,1).p("AAAHJIAAuR");
	this.shape_163.setTransform(167,136.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(25,1,1).p("AAAHPIAAud");
	this.shape_164.setTransform(167,137.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").ss(25,1,1).p("AAAHWIAAur");
	this.shape_165.setTransform(167,138);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(25,1,1).p("AAAHcIAAu3");
	this.shape_166.setTransform(167,138.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").ss(25,1,1).p("AAAHiIAAvD");
	this.shape_167.setTransform(167,139.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(25,1,1).p("AAAHpIAAvR");
	this.shape_168.setTransform(167,139.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").ss(25,1,1).p("AAAHvIAAvd");
	this.shape_169.setTransform(167,140.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(25,1,1).p("AAAH1IAAvp");
	this.shape_170.setTransform(167,141.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").ss(25,1,1).p("AAAH8IAAv3");
	this.shape_171.setTransform(167,141.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").ss(25,1,1).p("AAAICIAAwD");
	this.shape_172.setTransform(167,142.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#000000").ss(25,1,1).p("AAAIIIAAwP");
	this.shape_173.setTransform(167,143.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(25,1,1).p("AAAIPIAAwd");
	this.shape_174.setTransform(167,143.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#000000").ss(25,1,1).p("AAAIVIAAwp");
	this.shape_175.setTransform(167,144.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#000000").ss(25,1,1).p("AAAIbIAAw1");
	this.shape_176.setTransform(167,145);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#000000").ss(25,1,1).p("AAAIiIAAxD");
	this.shape_177.setTransform(167,145.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#000000").ss(25,1,1).p("AAAIoIAAxP");
	this.shape_178.setTransform(167,146.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#000000").ss(25,1,1).p("AAAIuIAAxb");
	this.shape_179.setTransform(167,146.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").ss(25,1,1).p("AAAI1IAAxp");
	this.shape_180.setTransform(167,147.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#000000").ss(25,1,1).p("AAAI7IAAx1");
	this.shape_181.setTransform(167,148.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#000000").ss(25,1,1).p("AAAJBIAAyB");
	this.shape_182.setTransform(167,148.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#000000").ss(25,1,1).p("AAAJIIAAyP");
	this.shape_183.setTransform(167,149.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#000000").ss(25,1,1).p("AAAJOIAAyb");
	this.shape_184.setTransform(167,150.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#000000").ss(25,1,1).p("AAAJUIAAyn");
	this.shape_185.setTransform(167,150.7);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#000000").ss(25,1,1).p("AAAJbIAAy1");
	this.shape_186.setTransform(167,151.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#000000").ss(25,1,1).p("AAAJhIAAzB");
	this.shape_187.setTransform(167,152);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#000000").ss(25,1,1).p("AAAJnIAAzN");
	this.shape_188.setTransform(167,152.6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#000000").ss(25,1,1).p("AAAJuIAAzb");
	this.shape_189.setTransform(167,153.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#000000").ss(25,1,1).p("AAAJ0IAAzn");
	this.shape_190.setTransform(167,153.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#000000").ss(25,1,1).p("AAAJ6IAAzz");
	this.shape_191.setTransform(167,154.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#000000").ss(25,1,1).p("AAAKBIAA0B");
	this.shape_192.setTransform(167,155.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#000000").ss(25,1,1).p("AAAKHIAA0N");
	this.shape_193.setTransform(167,155.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#000000").ss(25,1,1).p("AAAKNIAA0Z");
	this.shape_194.setTransform(167,156.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#000000").ss(25,1,1).p("AAAKUIAA0n");
	this.shape_195.setTransform(167,157);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#000000").ss(25,1,1).p("AAAKaIAA0z");
	this.shape_196.setTransform(167,157.7);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#000000").ss(25,1,1).p("AAAKgIAA0/");
	this.shape_197.setTransform(167,158.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#000000").ss(25,1,1).p("AAAKnIAA1N");
	this.shape_198.setTransform(167,158.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#000000").ss(25,1,1).p("AAAKtIAA1Z");
	this.shape_199.setTransform(167,159.6);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#000000").ss(25,1,1).p("AAAKzIAA1l");
	this.shape_200.setTransform(167,160.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#000000").ss(25,1,1).p("AAAK6IAA1z");
	this.shape_201.setTransform(167,160.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#000000").ss(25,1,1).p("AAALAIAA1/");
	this.shape_202.setTransform(167,161.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#000000").ss(25,1,1).p("AAALGIAA2L");
	this.shape_203.setTransform(167,162.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#000000").ss(25,1,1).p("AAALNIAA2Z");
	this.shape_204.setTransform(167,162.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#000000").ss(25,1,1).p("AAALTIAA2l");
	this.shape_205.setTransform(167,163.4);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#000000").ss(25,1,1).p("AAALZIAA2x");
	this.shape_206.setTransform(167,164);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#000000").ss(25,1,1).p("AAALgIAA2/");
	this.shape_207.setTransform(167,164.6);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#000000").ss(25,1,1).p("AAALmIAA3L");
	this.shape_208.setTransform(167,165.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#000000").ss(25,1,1).p("AAALsIAA3X");
	this.shape_209.setTransform(167,165.9);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#000000").ss(25,1,1).p("AAALzIAA3l");
	this.shape_210.setTransform(167,166.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#000000").ss(25,1,1).p("AAAL5IAA3x");
	this.shape_211.setTransform(167,167.2);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#000000").ss(25,1,1).p("AAAL/IAA39");
	this.shape_212.setTransform(167,167.8);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#000000").ss(25,1,1).p("AAAMGIAA4L");
	this.shape_213.setTransform(167,168.4);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#000000").ss(25,1,1).p("AAAsLIAAYX");
	this.shape_214.setTransform(167,169.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_94}]},9).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[]},484).wait(176));

	// Base
	this.instance_5 = new lib.Symbol1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(271.3,284.8);
	this.instance_5.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},613).wait(176));

	// Background
	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_215.setTransform(275,275,3.373,2.543);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_216.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_216},{t:this.shape_215}]}).to({state:[]},613).wait(176));

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