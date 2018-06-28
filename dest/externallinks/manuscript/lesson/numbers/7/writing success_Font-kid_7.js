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
	this.shape.graphics.f("#FFFFFF").s().p("EgMDAgnQhpguAAhmIAVhWUAKMgXmAQAgg0I+CAAQinAAAAiqQAAiyC4AAMAiDAAAQCuAAAACjIgaBhUgQYAg9gLvAbKQguBohWAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.8,-210.6,253.8,421.2);


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


(lib.s_ar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(64.7,-155,1,1,22.7,0,0,0.5,-17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-60.8,y:148.1},134).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAGgNIgLAc");
	this.shape.setTransform(62.9,-152.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AgKAaIAVgz");
	this.shape_1.setTransform(62.4,-151);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AgPAlIAehJ");
	this.shape_2.setTransform(62,-149.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AgTAwIAnhg");
	this.shape_3.setTransform(61.5,-148.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AgYA8IAxh3");
	this.shape_4.setTransform(61,-147.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AgcBHIA6iN");
	this.shape_5.setTransform(60.6,-146.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AghBTIBDil");
	this.shape_6.setTransform(60.1,-145.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AgmBeIBNi7");
	this.shape_7.setTransform(59.6,-144.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AgrBpIBXjR");
	this.shape_8.setTransform(59.2,-143);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AgvB1IBfjp");
	this.shape_9.setTransform(58.7,-141.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("Ag0CAIBpj/");
	this.shape_10.setTransform(58.2,-140.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("Ag5CLIBzkV");
	this.shape_11.setTransform(57.7,-139.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("Ag9CXIB7kt");
	this.shape_12.setTransform(57.3,-138.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AhCCiICFlD");
	this.shape_13.setTransform(56.8,-137.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AhHCtICPla");
	this.shape_14.setTransform(56.3,-136.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AhLC5ICXlx");
	this.shape_15.setTransform(55.9,-135.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AhQDEIChmH");
	this.shape_16.setTransform(55.4,-133.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AhVDQICrmf");
	this.shape_17.setTransform(54.9,-132.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AhaDbIC0m1");
	this.shape_18.setTransform(54.5,-131.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AheDmIC9nL");
	this.shape_19.setTransform(54,-130.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AhjDyIDHnj");
	this.shape_20.setTransform(53.5,-129.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AhnD9IDQn5");
	this.shape_21.setTransform(53.1,-128.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AhsEIIDZoP");
	this.shape_22.setTransform(52.6,-127.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AhxEUIDjon");
	this.shape_23.setTransform(52.1,-126);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("Ah2EfIDto9");
	this.shape_24.setTransform(51.6,-124.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("Ah6EqID1pT");
	this.shape_25.setTransform(51.2,-123.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("Ah/E2ID/pr");
	this.shape_26.setTransform(50.7,-122.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AiEFBIEJqB");
	this.shape_27.setTransform(50.2,-121.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AiJFMIETqX");
	this.shape_28.setTransform(49.8,-120.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AiNFYIEbqv");
	this.shape_29.setTransform(49.3,-119.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AiSFjIElrF");
	this.shape_30.setTransform(48.8,-118);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AiXFuIEvrb");
	this.shape_31.setTransform(48.4,-116.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AibF6IE3rz");
	this.shape_32.setTransform(47.9,-115.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AigGFIFBsJ");
	this.shape_33.setTransform(47.4,-114.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AilGRIFKsh");
	this.shape_34.setTransform(47,-113.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AipGcIFTs3");
	this.shape_35.setTransform(46.5,-112.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AiuGnIFdtN");
	this.shape_36.setTransform(46,-111.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AizGzIFntl");
	this.shape_37.setTransform(45.5,-110.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("Ai3G+IFvt7");
	this.shape_38.setTransform(45.1,-109);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("Ai8HJIF5uR");
	this.shape_39.setTransform(44.6,-107.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AjBHVIGDup");
	this.shape_40.setTransform(44.1,-106.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AjFHgIGMu/");
	this.shape_41.setTransform(43.7,-105.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AjKHrIGVvV");
	this.shape_42.setTransform(43.2,-104.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AjPH3IGfvt");
	this.shape_43.setTransform(42.7,-103.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AjUICIGpwD");
	this.shape_44.setTransform(42.3,-102.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AjYINIGxwZ");
	this.shape_45.setTransform(41.8,-101);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AjdIZIG7wx");
	this.shape_46.setTransform(41.3,-99.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AjiIkIHFxH");
	this.shape_47.setTransform(40.9,-98.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AjmIvIHNxd");
	this.shape_48.setTransform(40.4,-97.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AjrI7IHXx1");
	this.shape_49.setTransform(39.9,-96.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AjwJGIHhyL");
	this.shape_50.setTransform(39.4,-95.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("Aj1JSIHqyj");
	this.shape_51.setTransform(39,-94.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("Aj5JdIHzy5");
	this.shape_52.setTransform(38.5,-93.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("Aj+JoIH9zP");
	this.shape_53.setTransform(38,-91.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AkCJ0IIGzn");
	this.shape_54.setTransform(37.6,-90.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AkHJ/IIPz9");
	this.shape_55.setTransform(37.1,-89.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AkMKKIIZ0T");
	this.shape_56.setTransform(36.6,-88.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AkRKWIIj0r");
	this.shape_57.setTransform(36.2,-87.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AkVKhIIr1B");
	this.shape_58.setTransform(35.7,-86.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AkaKsII11X");
	this.shape_59.setTransform(35.2,-85.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(5,1,1).p("AkfK4II/1v");
	this.shape_60.setTransform(34.7,-84);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(5,1,1).p("AkjLDIJH2F");
	this.shape_61.setTransform(34.3,-82.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(5,1,1).p("AkoLOIJR2b");
	this.shape_62.setTransform(33.8,-81.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(5,1,1).p("AktLaIJb2z");
	this.shape_63.setTransform(33.3,-80.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(5,1,1).p("AkyLlIJl3J");
	this.shape_64.setTransform(32.9,-79.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(5,1,1).p("Ak2LwIJt3f");
	this.shape_65.setTransform(32.4,-78.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(5,1,1).p("Ak7L8IJ333");
	this.shape_66.setTransform(31.9,-77.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(5,1,1).p("AlAMHIKB4N");
	this.shape_67.setTransform(31.5,-76);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(5,1,1).p("AlEMSIKJ4j");
	this.shape_68.setTransform(31,-74.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(5,1,1).p("AlJMeIKT47");
	this.shape_69.setTransform(30.5,-73.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(5,1,1).p("AlOMpIKd5R");
	this.shape_70.setTransform(30.1,-72.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(5,1,1).p("AlSM1IKl5p");
	this.shape_71.setTransform(29.6,-71.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(5,1,1).p("AlXNAIKv5/");
	this.shape_72.setTransform(29.1,-70.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(5,1,1).p("AlcNLIK56V");
	this.shape_73.setTransform(28.6,-69.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(5,1,1).p("AlgNXILB6t");
	this.shape_74.setTransform(28.2,-68.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(5,1,1).p("AllNiILL7D");
	this.shape_75.setTransform(27.7,-67);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(5,1,1).p("AlqNtILV7Z");
	this.shape_76.setTransform(27.2,-65.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(5,1,1).p("AlvN5ILf7x");
	this.shape_77.setTransform(26.8,-64.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(5,1,1).p("AlzOEILn8H");
	this.shape_78.setTransform(26.3,-63.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(5,1,1).p("Al4OPILx8d");
	this.shape_79.setTransform(25.8,-62.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(5,1,1).p("Al9ObIL781");
	this.shape_80.setTransform(25.4,-61.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(5,1,1).p("AmBOmIMD9L");
	this.shape_81.setTransform(24.9,-60.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(5,1,1).p("AmGOxIMN9h");
	this.shape_82.setTransform(24.4,-59);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(5,1,1).p("AmLO9IMX95");
	this.shape_83.setTransform(24,-57.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(5,1,1).p("AmPPIIMf+P");
	this.shape_84.setTransform(23.5,-56.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(5,1,1).p("AmUPTIMp+l");
	this.shape_85.setTransform(23,-55.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(5,1,1).p("AmZPfIMz+9");
	this.shape_86.setTransform(22.5,-54.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(5,1,1).p("AmePqIM9/T");
	this.shape_87.setTransform(22.1,-53.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(5,1,1).p("AmiP2INF/r");
	this.shape_88.setTransform(21.6,-52.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(5,1,1).p("AmnQBMANPggB");
	this.shape_89.setTransform(21.1,-51.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(5,1,1).p("AmrQMMANYggX");
	this.shape_90.setTransform(20.7,-49.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(5,1,1).p("AmwQYMANhggv");
	this.shape_91.setTransform(20.2,-48.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(5,1,1).p("Am1QjMANrghF");
	this.shape_92.setTransform(19.7,-47.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(5,1,1).p("Am6QuMAN1ghb");
	this.shape_93.setTransform(19.3,-46.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(5,1,1).p("Am+Q6MAN9ghz");
	this.shape_94.setTransform(18.8,-45.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(5,1,1).p("AnDRFMAOHgiJ");
	this.shape_95.setTransform(18.3,-44.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(5,1,1).p("AnIRQMAORgif");
	this.shape_96.setTransform(17.8,-43.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(5,1,1).p("AnMRcMAOZgi3");
	this.shape_97.setTransform(17.4,-42);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(5,1,1).p("AnRRnMAOjgjN");
	this.shape_98.setTransform(16.9,-40.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(5,1,1).p("AnWRyMAOtgjj");
	this.shape_99.setTransform(16.4,-39.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(5,1,1).p("AnbR+MAO3gj7");
	this.shape_100.setTransform(16,-38.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(5,1,1).p("AnfSJMAO/gkR");
	this.shape_101.setTransform(15.5,-37.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(5,1,1).p("AnkSUMAPJgkn");
	this.shape_102.setTransform(15,-36.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(5,1,1).p("AnpSgMAPTgk/");
	this.shape_103.setTransform(14.6,-35.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(5,1,1).p("AntSrMAPbglV");
	this.shape_104.setTransform(14.1,-34);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(5,1,1).p("AnyS2MAPlglr");
	this.shape_105.setTransform(13.6,-32.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(5,1,1).p("An3TCMAPvgmD");
	this.shape_106.setTransform(13.2,-31.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(5,1,1).p("An7TNMAP3gmZ");
	this.shape_107.setTransform(12.7,-30.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(5,1,1).p("AoATZMAQBgmx");
	this.shape_108.setTransform(12.2,-29.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(5,1,1).p("AoFTkMAQLgnH");
	this.shape_109.setTransform(11.7,-28.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(5,1,1).p("AoJTvMAQTgnd");
	this.shape_110.setTransform(11.3,-27.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(5,1,1).p("AoOT7MAQdgn1");
	this.shape_111.setTransform(10.8,-26.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(5,1,1).p("AoTUGMAQngoL");
	this.shape_112.setTransform(10.3,-25);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(5,1,1).p("AoYURMAQxgoh");
	this.shape_113.setTransform(9.9,-23.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(5,1,1).p("AocUdMAQ5go5");
	this.shape_114.setTransform(9.4,-22.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(5,1,1).p("AohUoMARDgpP");
	this.shape_115.setTransform(8.9,-21.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(5,1,1).p("AomUzMARNgpl");
	this.shape_116.setTransform(8.5,-20.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(5,1,1).p("AoqU/MARVgp9");
	this.shape_117.setTransform(8,-19.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(5,1,1).p("AovVKMARfgqT");
	this.shape_118.setTransform(7.5,-18.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(5,1,1).p("Ao0VVMARpgqp");
	this.shape_119.setTransform(7.1,-17);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(5,1,1).p("Ao4VhMARxgrB");
	this.shape_120.setTransform(6.6,-15.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(5,1,1).p("Ao9VsMAR7grX");
	this.shape_121.setTransform(6.1,-14.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(5,1,1).p("ApCV3MASFgrt");
	this.shape_122.setTransform(5.6,-13.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(5,1,1).p("ApGWDMASNgsF");
	this.shape_123.setTransform(5.2,-12.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(5,1,1).p("ApLWOMASXgsb");
	this.shape_124.setTransform(4.7,-11.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(5,1,1).p("ApQWZMAShgsx");
	this.shape_125.setTransform(4.2,-10.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(5,1,1).p("ApVWlMASrgtJ");
	this.shape_126.setTransform(3.8,-9.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(5,1,1).p("ApZWwMASzgtf");
	this.shape_127.setTransform(3.3,-7.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(5,1,1).p("ApeW8MAS9gt3");
	this.shape_128.setTransform(2.8,-6.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(5,1,1).p("ApjXHMATHguN");
	this.shape_129.setTransform(2.4,-5.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(5,1,1).p("ApnXSMATPguj");
	this.shape_130.setTransform(1.9,-4.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(5,1,1).p("ApsXeMATZgu7");
	this.shape_131.setTransform(1.4,-3.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(5,1,1).p("ApxXpMATjgvR");
	this.shape_132.setTransform(1,-2.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(5,1,1).p("Ap1X0MATrgvn");
	this.shape_133.setTransform(0.5,-1.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(5,1,1).p("AJ73/MgT1Av+");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(53.4,-159.8,22.4,24.7);


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


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.4,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:174.5},114).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AiGAiIAAhDIENAAIAABDg");
	var mask_graphics_1 = new cjs.Graphics().p("AiGApIAAhSIENAAIAABSg");
	var mask_graphics_2 = new cjs.Graphics().p("AiGAxIAAhgIENAAIAABgg");
	var mask_graphics_3 = new cjs.Graphics().p("AiGA4IAAhvIENAAIAABvg");
	var mask_graphics_4 = new cjs.Graphics().p("AiGA/IAAh9IENAAIAAB9g");
	var mask_graphics_5 = new cjs.Graphics().p("AiGBGIAAiLIENAAIAACLg");
	var mask_graphics_6 = new cjs.Graphics().p("AiGBNIAAiZIENAAIAACZg");
	var mask_graphics_7 = new cjs.Graphics().p("AiGBUIAAinIENAAIAACng");
	var mask_graphics_8 = new cjs.Graphics().p("AiGBbIAAi1IENAAIAAC1g");
	var mask_graphics_9 = new cjs.Graphics().p("AiGBiIAAjDIENAAIAADDg");
	var mask_graphics_10 = new cjs.Graphics().p("AiGBpIAAjRIENAAIAADRg");
	var mask_graphics_11 = new cjs.Graphics().p("AiGBwIAAjfIENAAIAADfg");
	var mask_graphics_12 = new cjs.Graphics().p("AiGB3IAAjtIENAAIAADtg");
	var mask_graphics_13 = new cjs.Graphics().p("AiGB+IAAj7IENAAIAAD7g");
	var mask_graphics_14 = new cjs.Graphics().p("AiGCFIAAkJIENAAIAAEJg");
	var mask_graphics_15 = new cjs.Graphics().p("AiGCNIAAkZIENAAIAAEZg");
	var mask_graphics_16 = new cjs.Graphics().p("AiGCUIAAknIENAAIAAEng");
	var mask_graphics_17 = new cjs.Graphics().p("AiGCbIAAk1IENAAIAAE1g");
	var mask_graphics_18 = new cjs.Graphics().p("AiGCiIAAlDIENAAIAAFDg");
	var mask_graphics_19 = new cjs.Graphics().p("AiGCpIAAlRIENAAIAAFRg");
	var mask_graphics_20 = new cjs.Graphics().p("AiGCwIAAlfIENAAIAAFfg");
	var mask_graphics_21 = new cjs.Graphics().p("AiGC3IAAltIENAAIAAFtg");
	var mask_graphics_22 = new cjs.Graphics().p("AiGC+IAAl7IENAAIAAF7g");
	var mask_graphics_23 = new cjs.Graphics().p("AiGDFIAAmJIENAAIAAGJg");
	var mask_graphics_24 = new cjs.Graphics().p("AiGDMIAAmXIENAAIAAGXg");
	var mask_graphics_25 = new cjs.Graphics().p("AiGDTIAAmlIENAAIAAGlg");
	var mask_graphics_26 = new cjs.Graphics().p("AiGDaIAAmzIENAAIAAGzg");
	var mask_graphics_27 = new cjs.Graphics().p("AiGDhIAAnBIENAAIAAHBg");
	var mask_graphics_28 = new cjs.Graphics().p("AiGDoIAAnPIENAAIAAHPg");
	var mask_graphics_29 = new cjs.Graphics().p("AiGDvIAAneIENAAIAAHeg");
	var mask_graphics_30 = new cjs.Graphics().p("AiGD3IAAnsIENAAIAAHsg");
	var mask_graphics_31 = new cjs.Graphics().p("AiGD+IAAn7IENAAIAAH7g");
	var mask_graphics_32 = new cjs.Graphics().p("AiGEFIAAoIIENAAIAAIIg");
	var mask_graphics_33 = new cjs.Graphics().p("AiGEMIAAoXIENAAIAAIXg");
	var mask_graphics_34 = new cjs.Graphics().p("AiGETIAAolIENAAIAAIlg");
	var mask_graphics_35 = new cjs.Graphics().p("AiGEaIAAozIENAAIAAIzg");
	var mask_graphics_36 = new cjs.Graphics().p("AiGEhIAApBIENAAIAAJBg");
	var mask_graphics_37 = new cjs.Graphics().p("AiGEoIAApPIENAAIAAJPg");
	var mask_graphics_38 = new cjs.Graphics().p("AiGEvIAApdIENAAIAAJdg");
	var mask_graphics_39 = new cjs.Graphics().p("AiGE2IAAprIENAAIAAJrg");
	var mask_graphics_40 = new cjs.Graphics().p("AiGE9IAAp5IENAAIAAJ5g");
	var mask_graphics_41 = new cjs.Graphics().p("AiGFEIAAqHIENAAIAAKHg");
	var mask_graphics_42 = new cjs.Graphics().p("AiGFLIAAqVIENAAIAAKVg");
	var mask_graphics_43 = new cjs.Graphics().p("AiGFTIAAqlIENAAIAAKlg");
	var mask_graphics_44 = new cjs.Graphics().p("AiGFaIAAqzIENAAIAAKzg");
	var mask_graphics_45 = new cjs.Graphics().p("AiGFhIAArAIENAAIAALAg");
	var mask_graphics_46 = new cjs.Graphics().p("AiGFnIAArOIENAAIAALOg");
	var mask_graphics_47 = new cjs.Graphics().p("AiGFvIAArdIENAAIAALdg");
	var mask_graphics_48 = new cjs.Graphics().p("AiGF2IAArrIENAAIAALrg");
	var mask_graphics_49 = new cjs.Graphics().p("AiGF9IAAr5IENAAIAAL5g");
	var mask_graphics_50 = new cjs.Graphics().p("AiGGEIAAsHIENAAIAAMHg");
	var mask_graphics_51 = new cjs.Graphics().p("AiGGLIAAsVIENAAIAAMVg");
	var mask_graphics_52 = new cjs.Graphics().p("AiGGSIAAsjIENAAIAAMjg");
	var mask_graphics_53 = new cjs.Graphics().p("AiGGZIAAsxIENAAIAAMxg");
	var mask_graphics_54 = new cjs.Graphics().p("AiGGgIAAs/IENAAIAAM/g");
	var mask_graphics_55 = new cjs.Graphics().p("AiGGnIAAtNIENAAIAANNg");
	var mask_graphics_56 = new cjs.Graphics().p("AiGGuIAAtbIENAAIAANbg");
	var mask_graphics_57 = new cjs.Graphics().p("AiGG1IAAtpIENAAIAANpg");
	var mask_graphics_58 = new cjs.Graphics().p("AiGG8IAAt3IENAAIAAN3g");
	var mask_graphics_59 = new cjs.Graphics().p("AiGHDIAAuFIENAAIAAOFg");
	var mask_graphics_60 = new cjs.Graphics().p("AiGHLIAAuUIENAAIAAOUg");
	var mask_graphics_61 = new cjs.Graphics().p("AiGHSIAAujIENAAIAAOjg");
	var mask_graphics_62 = new cjs.Graphics().p("AiGHZIAAuxIENAAIAAOxg");
	var mask_graphics_63 = new cjs.Graphics().p("AiGHfIAAu9IENAAIAAO9g");
	var mask_graphics_64 = new cjs.Graphics().p("AiGHnIAAvNIENAAIAAPNg");
	var mask_graphics_65 = new cjs.Graphics().p("AiGHuIAAvbIENAAIAAPbg");
	var mask_graphics_66 = new cjs.Graphics().p("AiGH1IAAvpIENAAIAAPpg");
	var mask_graphics_67 = new cjs.Graphics().p("AiGH8IAAv3IENAAIAAP3g");
	var mask_graphics_68 = new cjs.Graphics().p("AiGIDIAAwFIENAAIAAQFg");
	var mask_graphics_69 = new cjs.Graphics().p("AiGIKIAAwTIENAAIAAQTg");
	var mask_graphics_70 = new cjs.Graphics().p("AiGIRIAAwhIENAAIAAQhg");
	var mask_graphics_71 = new cjs.Graphics().p("AiGIYIAAwvIENAAIAAQvg");
	var mask_graphics_72 = new cjs.Graphics().p("AiGIfIAAw9IENAAIAAQ9g");
	var mask_graphics_73 = new cjs.Graphics().p("AiGInIAAxMIENAAIAARMg");
	var mask_graphics_74 = new cjs.Graphics().p("AiGItIAAxaIENAAIAARag");
	var mask_graphics_75 = new cjs.Graphics().p("AiGI0IAAxnIENAAIAARng");
	var mask_graphics_76 = new cjs.Graphics().p("AiGI7IAAx2IENAAIAAR2g");
	var mask_graphics_77 = new cjs.Graphics().p("AiGJDIAAyFIENAAIAASFg");
	var mask_graphics_78 = new cjs.Graphics().p("AiGJKIAAyTIENAAIAASTg");
	var mask_graphics_79 = new cjs.Graphics().p("AiGJRIAAyhIENAAIAAShg");
	var mask_graphics_80 = new cjs.Graphics().p("AiGJYIAAyvIENAAIAASvg");
	var mask_graphics_81 = new cjs.Graphics().p("AiGJfIAAy9IENAAIAAS9g");
	var mask_graphics_82 = new cjs.Graphics().p("AiGJmIAAzLIENAAIAATLg");
	var mask_graphics_83 = new cjs.Graphics().p("AiGJtIAAzZIENAAIAATZg");
	var mask_graphics_84 = new cjs.Graphics().p("AiGJ0IAAznIENAAIAATng");
	var mask_graphics_85 = new cjs.Graphics().p("AiGJ7IAAz1IENAAIAAT1g");
	var mask_graphics_86 = new cjs.Graphics().p("AiGKCIAA0DIENAAIAAUDg");
	var mask_graphics_87 = new cjs.Graphics().p("AiGKJIAA0RIENAAIAAURg");
	var mask_graphics_88 = new cjs.Graphics().p("AiGKQIAA0fIENAAIAAUfg");
	var mask_graphics_89 = new cjs.Graphics().p("AiGKXIAA0tIENAAIAAUtg");
	var mask_graphics_90 = new cjs.Graphics().p("AiGKeIAA08IENAAIAAU8g");
	var mask_graphics_91 = new cjs.Graphics().p("AiGKlIAA1JIENAAIAAVJg");
	var mask_graphics_92 = new cjs.Graphics().p("AiGKsIAA1YIENAAIAAVYg");
	var mask_graphics_93 = new cjs.Graphics().p("AiGKzIAA1lIENAAIAAVlg");
	var mask_graphics_94 = new cjs.Graphics().p("AiGK6IAA10IENAAIAAV0g");
	var mask_graphics_95 = new cjs.Graphics().p("AiGLCIAA2DIENAAIAAWDg");
	var mask_graphics_96 = new cjs.Graphics().p("AiGLJIAA2RIENAAIAAWRg");
	var mask_graphics_97 = new cjs.Graphics().p("AiGLQIAA2fIENAAIAAWfg");
	var mask_graphics_98 = new cjs.Graphics().p("AiGLXIAA2tIENAAIAAWtg");
	var mask_graphics_99 = new cjs.Graphics().p("AiGLeIAA27IENAAIAAW7g");
	var mask_graphics_100 = new cjs.Graphics().p("AiGLlIAA3JIENAAIAAXJg");
	var mask_graphics_101 = new cjs.Graphics().p("AiGLsIAA3XIENAAIAAXXg");
	var mask_graphics_102 = new cjs.Graphics().p("AiGLzIAA3lIENAAIAAXlg");
	var mask_graphics_103 = new cjs.Graphics().p("AiGL6IAA3zIENAAIAAXzg");
	var mask_graphics_104 = new cjs.Graphics().p("AiGMBIAA4CIENAAIAAYCg");
	var mask_graphics_105 = new cjs.Graphics().p("AiGMIIAA4PIENAAIAAYPg");
	var mask_graphics_106 = new cjs.Graphics().p("AiGMPIAA4eIENAAIAAYeg");
	var mask_graphics_107 = new cjs.Graphics().p("AiGMXIAA4sIENAAIAAYsg");
	var mask_graphics_108 = new cjs.Graphics().p("AiGMeIAA47IENAAIAAY7g");
	var mask_graphics_109 = new cjs.Graphics().p("AiGMlIAA5JIENAAIAAZJg");
	var mask_graphics_110 = new cjs.Graphics().p("AiGMsIAA5XIENAAIAAZXg");
	var mask_graphics_111 = new cjs.Graphics().p("AiGMzIAA5lIENAAIAAZlg");
	var mask_graphics_112 = new cjs.Graphics().p("AiGM6IAA5zIENAAIAAZzg");
	var mask_graphics_113 = new cjs.Graphics().p("AiGNBIAA6BIENAAIAAaBg");
	var mask_graphics_114 = new cjs.Graphics().p("AiGNIIAA6PIENAAIAAaPg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:-6.3}).wait(1).to({graphics:mask_graphics_1,x:0,y:-5.5}).wait(1).to({graphics:mask_graphics_2,x:0,y:-4.8}).wait(1).to({graphics:mask_graphics_3,x:0,y:-4}).wait(1).to({graphics:mask_graphics_4,x:0,y:-3.3}).wait(1).to({graphics:mask_graphics_5,x:0,y:-2.5}).wait(1).to({graphics:mask_graphics_6,x:0,y:-1.8}).wait(1).to({graphics:mask_graphics_7,x:0,y:-1}).wait(1).to({graphics:mask_graphics_8,x:0,y:-0.2}).wait(1).to({graphics:mask_graphics_9,x:0,y:0.5}).wait(1).to({graphics:mask_graphics_10,x:0,y:1.3}).wait(1).to({graphics:mask_graphics_11,x:0,y:2}).wait(1).to({graphics:mask_graphics_12,x:0,y:2.8}).wait(1).to({graphics:mask_graphics_13,x:0,y:3.5}).wait(1).to({graphics:mask_graphics_14,x:0,y:4.3}).wait(1).to({graphics:mask_graphics_15,x:0,y:5}).wait(1).to({graphics:mask_graphics_16,x:0,y:5.8}).wait(1).to({graphics:mask_graphics_17,x:0,y:6.5}).wait(1).to({graphics:mask_graphics_18,x:0,y:7.3}).wait(1).to({graphics:mask_graphics_19,x:0,y:8}).wait(1).to({graphics:mask_graphics_20,x:0,y:8.8}).wait(1).to({graphics:mask_graphics_21,x:0,y:9.6}).wait(1).to({graphics:mask_graphics_22,x:0,y:10.3}).wait(1).to({graphics:mask_graphics_23,x:0,y:11.1}).wait(1).to({graphics:mask_graphics_24,x:0,y:11.8}).wait(1).to({graphics:mask_graphics_25,x:0,y:12.6}).wait(1).to({graphics:mask_graphics_26,x:0,y:13.3}).wait(1).to({graphics:mask_graphics_27,x:0,y:14.1}).wait(1).to({graphics:mask_graphics_28,x:0,y:14.8}).wait(1).to({graphics:mask_graphics_29,x:0,y:15.6}).wait(1).to({graphics:mask_graphics_30,x:0,y:16.4}).wait(1).to({graphics:mask_graphics_31,x:0,y:17.1}).wait(1).to({graphics:mask_graphics_32,x:0,y:17.9}).wait(1).to({graphics:mask_graphics_33,x:0,y:18.6}).wait(1).to({graphics:mask_graphics_34,x:0,y:19.4}).wait(1).to({graphics:mask_graphics_35,x:0,y:20.1}).wait(1).to({graphics:mask_graphics_36,x:0,y:20.9}).wait(1).to({graphics:mask_graphics_37,x:0,y:21.6}).wait(1).to({graphics:mask_graphics_38,x:0,y:22.4}).wait(1).to({graphics:mask_graphics_39,x:0,y:23.2}).wait(1).to({graphics:mask_graphics_40,x:0,y:23.9}).wait(1).to({graphics:mask_graphics_41,x:0,y:24.7}).wait(1).to({graphics:mask_graphics_42,x:0,y:25.4}).wait(1).to({graphics:mask_graphics_43,x:0,y:26.2}).wait(1).to({graphics:mask_graphics_44,x:0,y:26.9}).wait(1).to({graphics:mask_graphics_45,x:0,y:27.7}).wait(1).to({graphics:mask_graphics_46,x:0,y:28.4}).wait(1).to({graphics:mask_graphics_47,x:0,y:29.2}).wait(1).to({graphics:mask_graphics_48,x:0,y:29.9}).wait(1).to({graphics:mask_graphics_49,x:0,y:30.7}).wait(1).to({graphics:mask_graphics_50,x:0,y:31.4}).wait(1).to({graphics:mask_graphics_51,x:0,y:32.2}).wait(1).to({graphics:mask_graphics_52,x:0,y:33}).wait(1).to({graphics:mask_graphics_53,x:0,y:33.7}).wait(1).to({graphics:mask_graphics_54,x:0,y:34.5}).wait(1).to({graphics:mask_graphics_55,x:0,y:35.2}).wait(1).to({graphics:mask_graphics_56,x:0,y:36}).wait(1).to({graphics:mask_graphics_57,x:0,y:36.7}).wait(1).to({graphics:mask_graphics_58,x:0,y:37.5}).wait(1).to({graphics:mask_graphics_59,x:0,y:38.2}).wait(1).to({graphics:mask_graphics_60,x:0,y:39}).wait(1).to({graphics:mask_graphics_61,x:0,y:39.8}).wait(1).to({graphics:mask_graphics_62,x:0,y:40.5}).wait(1).to({graphics:mask_graphics_63,x:0,y:41.3}).wait(1).to({graphics:mask_graphics_64,x:0,y:42}).wait(1).to({graphics:mask_graphics_65,x:0,y:42.8}).wait(1).to({graphics:mask_graphics_66,x:0,y:43.5}).wait(1).to({graphics:mask_graphics_67,x:0,y:44.3}).wait(1).to({graphics:mask_graphics_68,x:0,y:45.1}).wait(1).to({graphics:mask_graphics_69,x:0,y:45.8}).wait(1).to({graphics:mask_graphics_70,x:0,y:46.6}).wait(1).to({graphics:mask_graphics_71,x:0,y:47.3}).wait(1).to({graphics:mask_graphics_72,x:0,y:48}).wait(1).to({graphics:mask_graphics_73,x:0,y:48.8}).wait(1).to({graphics:mask_graphics_74,x:0,y:49.6}).wait(1).to({graphics:mask_graphics_75,x:0,y:50.3}).wait(1).to({graphics:mask_graphics_76,x:0,y:51.1}).wait(1).to({graphics:mask_graphics_77,x:0,y:51.8}).wait(1).to({graphics:mask_graphics_78,x:0,y:52.6}).wait(1).to({graphics:mask_graphics_79,x:0,y:53.3}).wait(1).to({graphics:mask_graphics_80,x:0,y:54.1}).wait(1).to({graphics:mask_graphics_81,x:0,y:54.8}).wait(1).to({graphics:mask_graphics_82,x:0,y:55.6}).wait(1).to({graphics:mask_graphics_83,x:0,y:56.4}).wait(1).to({graphics:mask_graphics_84,x:0,y:57.1}).wait(1).to({graphics:mask_graphics_85,x:0,y:57.9}).wait(1).to({graphics:mask_graphics_86,x:0,y:58.6}).wait(1).to({graphics:mask_graphics_87,x:0,y:59.4}).wait(1).to({graphics:mask_graphics_88,x:0,y:60.1}).wait(1).to({graphics:mask_graphics_89,x:0,y:60.9}).wait(1).to({graphics:mask_graphics_90,x:0,y:61.7}).wait(1).to({graphics:mask_graphics_91,x:0,y:62.4}).wait(1).to({graphics:mask_graphics_92,x:0,y:63.2}).wait(1).to({graphics:mask_graphics_93,x:0,y:63.9}).wait(1).to({graphics:mask_graphics_94,x:0,y:64.7}).wait(1).to({graphics:mask_graphics_95,x:0,y:65.4}).wait(1).to({graphics:mask_graphics_96,x:0,y:66.2}).wait(1).to({graphics:mask_graphics_97,x:0,y:66.9}).wait(1).to({graphics:mask_graphics_98,x:0,y:67.7}).wait(1).to({graphics:mask_graphics_99,x:0,y:68.5}).wait(1).to({graphics:mask_graphics_100,x:0,y:69.2}).wait(1).to({graphics:mask_graphics_101,x:0,y:69.9}).wait(1).to({graphics:mask_graphics_102,x:0,y:70.7}).wait(1).to({graphics:mask_graphics_103,x:0,y:71.4}).wait(1).to({graphics:mask_graphics_104,x:0,y:72.2}).wait(1).to({graphics:mask_graphics_105,x:0,y:73}).wait(1).to({graphics:mask_graphics_106,x:0,y:73.7}).wait(1).to({graphics:mask_graphics_107,x:0,y:74.5}).wait(1).to({graphics:mask_graphics_108,x:0,y:75.2}).wait(1).to({graphics:mask_graphics_109,x:0,y:76}).wait(1).to({graphics:mask_graphics_110,x:0,y:76.7}).wait(1).to({graphics:mask_graphics_111,x:0,y:77.5}).wait(1).to({graphics:mask_graphics_112,x:0,y:78.3}).wait(1).to({graphics:mask_graphics_113,x:0,y:79}).wait(1).to({graphics:mask_graphics_114,x:0,y:79.8}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAAszIAAZn");
	this.shape.setTransform(0,81.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(115));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.2,-7.9,24.3,21.9);


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
(lib.writingsuccess_Fontkid_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_398 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(398).call(this.frame_398).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(160.7,92.8,0.999,0.999,8.5,0,0,22.4,-144);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:375.7},140).wait(15).to({startPosition:0},0).to({x:199,y:480.2},159).wait(11).to({startPosition:0},0).to({regY:-143.9,rotation:-28.3,guide:{path:[199,480.2,212.4,485,202.1,491.6,191.8,498.2,157.8,506.6,104.9,519.6,76.6,523.4,48.4,527.1,-7.5,584.5,-22,599.4,-68.2,646.9]}},64).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(375.6,92.8,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},140).wait(15).to({_off:false,x:198,y:480},0).to({_off:true},159).wait(76));

	// ar2
	this.instance_1 = new lib.s_ar("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(394.7,296.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(164).to({_off:false},0).wait(235));

	// ar1
	this.instance_2 = new lib.ar1("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(241.4,19,1,1,-90,0,0,0,33);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(390));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AAQgiIgfBF");
	this.shape_1.setTransform(373.4,96.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("AgUAvIAphc");
	this.shape_2.setTransform(372.9,97.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("AgaA6IA1hz");
	this.shape_3.setTransform(372.3,98.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("AgfBGIA/iL");
	this.shape_4.setTransform(371.8,100.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(25,1,1).p("AglBSIBLij");
	this.shape_5.setTransform(371.2,101.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(25,1,1).p("AgqBeIBVi7");
	this.shape_6.setTransform(370.7,102.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(25,1,1).p("AgwBqIBhjT");
	this.shape_7.setTransform(370.1,103.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(25,1,1).p("Ag1B2IBrjr");
	this.shape_8.setTransform(369.6,104.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(25,1,1).p("Ag7CCIB3kD");
	this.shape_9.setTransform(369,106.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(25,1,1).p("AhACOICBkb");
	this.shape_10.setTransform(368.5,107.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(25,1,1).p("AhGCaICNkz");
	this.shape_11.setTransform(367.9,108.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(25,1,1).p("AhLCmICXlL");
	this.shape_12.setTransform(367.4,109.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(25,1,1).p("AhRCyICjlj");
	this.shape_13.setTransform(366.8,110.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(25,1,1).p("AhWC9ICtl6");
	this.shape_14.setTransform(366.3,112);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(25,1,1).p("AhcDKIC5mS");
	this.shape_15.setTransform(365.7,113.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(25,1,1).p("AhhDVIDDmq");
	this.shape_16.setTransform(365.2,114.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(25,1,1).p("AhnDhIDPnB");
	this.shape_17.setTransform(364.6,115.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(25,1,1).p("AhsDtIDZnZ");
	this.shape_18.setTransform(364.1,116.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(25,1,1).p("AhyD5IDlnx");
	this.shape_19.setTransform(363.5,118);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(25,1,1).p("Ah3EFIDvoJ");
	this.shape_20.setTransform(363,119.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(25,1,1).p("Ah9ERID7oh");
	this.shape_21.setTransform(362.4,120.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(25,1,1).p("AiCEdIEFo5");
	this.shape_22.setTransform(361.9,121.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(25,1,1).p("AiIEpIERpR");
	this.shape_23.setTransform(361.3,122.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(25,1,1).p("AiNE1IEbpp");
	this.shape_24.setTransform(360.8,123.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(25,1,1).p("AiTFBIEnqB");
	this.shape_25.setTransform(360.2,125.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(25,1,1).p("AiYFNIExqZ");
	this.shape_26.setTransform(359.7,126.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(25,1,1).p("AieFYIE9qw");
	this.shape_27.setTransform(359.1,127.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(25,1,1).p("AijFlIFHrI");
	this.shape_28.setTransform(358.6,128.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(25,1,1).p("AipFwIFTrg");
	this.shape_29.setTransform(358,129.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(25,1,1).p("AiuF8IFdr3");
	this.shape_30.setTransform(357.5,131.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(25,1,1).p("Ai0GIIFpsP");
	this.shape_31.setTransform(356.9,132.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(25,1,1).p("Ai5GUIFzsn");
	this.shape_32.setTransform(356.4,133.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(25,1,1).p("Ai/GgIF/s/");
	this.shape_33.setTransform(355.8,134.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(25,1,1).p("AjEGsIGJtX");
	this.shape_34.setTransform(355.3,135.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(25,1,1).p("AjKG4IGVtv");
	this.shape_35.setTransform(354.7,137.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(25,1,1).p("AjPHEIGfuH");
	this.shape_36.setTransform(354.2,138.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(25,1,1).p("AjVHQIGruf");
	this.shape_37.setTransform(353.6,139.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(25,1,1).p("AjaHcIG1u3");
	this.shape_38.setTransform(353.1,140.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(25,1,1).p("AjgHoIHBvP");
	this.shape_39.setTransform(352.5,141.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(25,1,1).p("AjlHzIHLvm");
	this.shape_40.setTransform(352,143);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(25,1,1).p("AjrIAIHXv+");
	this.shape_41.setTransform(351.4,144.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(25,1,1).p("AjwIMIHhwX");
	this.shape_42.setTransform(350.9,145.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(25,1,1).p("Aj2IYIHtwv");
	this.shape_43.setTransform(350.3,146.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(25,1,1).p("Aj7IjIH3xF");
	this.shape_44.setTransform(349.8,147.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(25,1,1).p("AkBIvIIDxd");
	this.shape_45.setTransform(349.2,149);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(25,1,1).p("AkGI7IINx1");
	this.shape_46.setTransform(348.7,150.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(25,1,1).p("AkMJHIIZyN");
	this.shape_47.setTransform(348.1,151.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(25,1,1).p("AkRJTIIjyl");
	this.shape_48.setTransform(347.6,152.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(25,1,1).p("AkXJfIIvy9");
	this.shape_49.setTransform(347,153.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(25,1,1).p("AkcJrII5zV");
	this.shape_50.setTransform(346.5,155);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(25,1,1).p("AkiJ3IJFzt");
	this.shape_51.setTransform(345.9,156.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(25,1,1).p("AknKDIJP0F");
	this.shape_52.setTransform(345.4,157.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(25,1,1).p("AktKPIJb0d");
	this.shape_53.setTransform(344.8,158.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(25,1,1).p("AkyKbIJl00");
	this.shape_54.setTransform(344.3,159.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(25,1,1).p("Ak4KnIJx1N");
	this.shape_55.setTransform(343.7,160.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(25,1,1).p("Ak9KzIJ71l");
	this.shape_56.setTransform(343.2,162.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(25,1,1).p("AlDK+IKH17");
	this.shape_57.setTransform(342.6,163.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(25,1,1).p("AlILKIKR2T");
	this.shape_58.setTransform(342.1,164.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(25,1,1).p("AlOLWIKd2r");
	this.shape_59.setTransform(341.5,165.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(25,1,1).p("AlTLiIKn3D");
	this.shape_60.setTransform(341,166.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(25,1,1).p("AlZLuIKz3b");
	this.shape_61.setTransform(340.4,168.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(25,1,1).p("AleL6IK93z");
	this.shape_62.setTransform(339.9,169.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(25,1,1).p("AlkMGILJ4L");
	this.shape_63.setTransform(339.3,170.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(25,1,1).p("AlpMSILT4j");
	this.shape_64.setTransform(338.8,171.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(25,1,1).p("AlvMeILf47");
	this.shape_65.setTransform(338.2,172.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(25,1,1).p("Al0MqILp5T");
	this.shape_66.setTransform(337.7,174);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(25,1,1).p("Al6M2IL15r");
	this.shape_67.setTransform(337.1,175.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(25,1,1).p("Al/NCIL/6D");
	this.shape_68.setTransform(336.6,176.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(25,1,1).p("AmFNNIML6a");
	this.shape_69.setTransform(336,177.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(25,1,1).p("AmKNaIMV6z");
	this.shape_70.setTransform(335.5,178.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(25,1,1).p("AmQNlIMh7J");
	this.shape_71.setTransform(334.9,180);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(25,1,1).p("AmVNxIMr7h");
	this.shape_72.setTransform(334.4,181.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(25,1,1).p("AmbN9IM375");
	this.shape_73.setTransform(333.8,182.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(25,1,1).p("AmgOJINB8R");
	this.shape_74.setTransform(333.3,183.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(25,1,1).p("AmmOVINN8p");
	this.shape_75.setTransform(332.7,184.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(25,1,1).p("AmrOhINX9B");
	this.shape_76.setTransform(332.2,186);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(25,1,1).p("AmxOtINj9Z");
	this.shape_77.setTransform(331.6,187.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(25,1,1).p("Am2O5INt9x");
	this.shape_78.setTransform(331.1,188.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(25,1,1).p("Am8PFIN5+J");
	this.shape_79.setTransform(330.5,189.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(25,1,1).p("AnBPRIOD+h");
	this.shape_80.setTransform(330,190.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(25,1,1).p("AnHPdIOP+5");
	this.shape_81.setTransform(329.4,191.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(25,1,1).p("AnMPoIOZ/Q");
	this.shape_82.setTransform(328.9,193.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(25,1,1).p("AnSP1IOl/p");
	this.shape_83.setTransform(328.3,194.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(25,1,1).p("AnXQBMAOvggB");
	this.shape_84.setTransform(327.8,195.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(25,1,1).p("AndQMMAO7ggX");
	this.shape_85.setTransform(327.2,196.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(25,1,1).p("AniQYMAPFggv");
	this.shape_86.setTransform(326.7,197.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(25,1,1).p("AnoQkMAPRghH");
	this.shape_87.setTransform(326.1,199.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(25,1,1).p("AntQwMAPbghf");
	this.shape_88.setTransform(325.6,200.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(25,1,1).p("AnzQ8MAPngh3");
	this.shape_89.setTransform(325,201.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(25,1,1).p("An4RIMAPxgiP");
	this.shape_90.setTransform(324.5,202.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(25,1,1).p("An+RUMAP9gin");
	this.shape_91.setTransform(323.9,203.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(25,1,1).p("AoDRgMAQHgi/");
	this.shape_92.setTransform(323.4,205);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(25,1,1).p("AoJRsMAQTgjX");
	this.shape_93.setTransform(322.8,206.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(25,1,1).p("AoOR4MAQdgjv");
	this.shape_94.setTransform(322.3,207.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(25,1,1).p("AoUSDMAQpgkG");
	this.shape_95.setTransform(321.7,208.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(25,1,1).p("AoZSQMAQzgkf");
	this.shape_96.setTransform(321.2,209.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(25,1,1).p("AofScMAQ/gk3");
	this.shape_97.setTransform(320.6,211);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(25,1,1).p("AokSnMARJglN");
	this.shape_98.setTransform(320.1,212.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(25,1,1).p("AoqSzMARVgll");
	this.shape_99.setTransform(319.5,213.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(25,1,1).p("AovS/MARfgl9");
	this.shape_100.setTransform(319,214.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(25,1,1).p("Ao1TLMARrgmV");
	this.shape_101.setTransform(318.4,215.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(25,1,1).p("Ao6TXMAR1gmt");
	this.shape_102.setTransform(317.9,217);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(25,1,1).p("ApATjMASBgnF");
	this.shape_103.setTransform(317.3,218.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(25,1,1).p("ApFTvMASLgnd");
	this.shape_104.setTransform(316.8,219.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(25,1,1).p("ApLT7MASXgn1");
	this.shape_105.setTransform(316.2,220.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(25,1,1).p("ApQUHMAShgoN");
	this.shape_106.setTransform(315.7,221.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(25,1,1).p("ApWUTMAStgol");
	this.shape_107.setTransform(315.1,222.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(25,1,1).p("ApbUeMAS3go8");
	this.shape_108.setTransform(314.6,224.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(25,1,1).p("AphUrMATDgpV");
	this.shape_109.setTransform(314,225.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(25,1,1).p("ApmU3MATNgpt");
	this.shape_110.setTransform(313.5,226.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(25,1,1).p("ApsVCMATZgqD");
	this.shape_111.setTransform(312.9,227.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(25,1,1).p("ApxVOMATjgqb");
	this.shape_112.setTransform(312.4,228.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(25,1,1).p("Ap3VaMATvgqz");
	this.shape_113.setTransform(311.8,230.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(25,1,1).p("Ap8VmMAT5grL");
	this.shape_114.setTransform(311.3,231.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(25,1,1).p("AqCVyMAUFgrj");
	this.shape_115.setTransform(310.7,232.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(25,1,1).p("AqHV+MAUPgr7");
	this.shape_116.setTransform(310.2,233.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(25,1,1).p("AqNWKMAUbgsT");
	this.shape_117.setTransform(309.6,234.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(25,1,1).p("AqSWWMAUlgsr");
	this.shape_118.setTransform(309.1,236);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(25,1,1).p("AqYWiMAUxgtD");
	this.shape_119.setTransform(308.5,237.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(25,1,1).p("AqdWuMAU7gtb");
	this.shape_120.setTransform(308,238.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(25,1,1).p("AqjW6MAVHgtz");
	this.shape_121.setTransform(307.4,239.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(25,1,1).p("AqoXGMAVRguL");
	this.shape_122.setTransform(306.9,240.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(25,1,1).p("AquXSMAVdguj");
	this.shape_123.setTransform(306.3,242);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(25,1,1).p("AqzXeMAVngu7");
	this.shape_124.setTransform(305.8,243.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(25,1,1).p("Aq5XpMAVzgvR");
	this.shape_125.setTransform(305.2,244.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(25,1,1).p("Aq+X1MAV9gvp");
	this.shape_126.setTransform(304.7,245.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(25,1,1).p("ArEYBMAWJgwB");
	this.shape_127.setTransform(304.1,246.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(25,1,1).p("ArJYNMAWTgwZ");
	this.shape_128.setTransform(303.6,248);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(25,1,1).p("ArPYZMAWfgwx");
	this.shape_129.setTransform(303,249.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(25,1,1).p("ArUYlMAWpgxJ");
	this.shape_130.setTransform(302.5,250.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(25,1,1).p("AraYxMAW1gxh");
	this.shape_131.setTransform(301.9,251.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(25,1,1).p("ArfY9MAW/gx5");
	this.shape_132.setTransform(301.4,252.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(25,1,1).p("ArlZJMAXLgyR");
	this.shape_133.setTransform(300.8,253.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(25,1,1).p("ArqZVMAXVgyp");
	this.shape_134.setTransform(300.3,255.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(25,1,1).p("ArwZhMAXhgzB");
	this.shape_135.setTransform(299.7,256.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(25,1,1).p("Ar1ZtMAXrgzZ");
	this.shape_136.setTransform(299.2,257.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(25,1,1).p("Ar7Z5MAX3gzw");
	this.shape_137.setTransform(298.6,258.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(25,1,1).p("AsAaEMAYBg0H");
	this.shape_138.setTransform(298.1,259.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(25,1,1).p("AsGaQMAYNg0f");
	this.shape_139.setTransform(297.5,261.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(25,1,1).p("AsLacMAYXg03");
	this.shape_140.setTransform(297,262.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(25,1,1).p("AsRaoMAYjg1P");
	this.shape_141.setTransform(296.4,263.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(25,1,1).p("AsWa0MAYtg1n");
	this.shape_142.setTransform(295.9,264.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(25,1,1).p("AscbAMAY5g1/");
	this.shape_143.setTransform(295.3,265.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(25,1,1).p("AshbMMAZDg2X");
	this.shape_144.setTransform(294.8,267.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(25,1,1).p("AsnbYMAZPg2v");
	this.shape_145.setTransform(294.2,268.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(25,1,1).p("AssbkMAZZg3H");
	this.shape_146.setTransform(293.7,269.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(25,1,1).p("AsybwMAZlg3f");
	this.shape_147.setTransform(293.1,270.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(25,1,1).p("As3b8MAZvg33");
	this.shape_148.setTransform(292.6,271.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(25,1,1).p("As9cIMAZ7g4P");
	this.shape_149.setTransform(292,273);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(25,1,1).p("AtCcUMAaFg4m");
	this.shape_150.setTransform(291.5,274.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").ss(25,1,1).p("AtIcgMAaRg4+");
	this.shape_151.setTransform(290.9,275.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(25,1,1).p("AtNcrMAabg5V");
	this.shape_152.setTransform(290.4,276.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#000000").ss(25,1,1).p("AtTc3MAang5t");
	this.shape_153.setTransform(289.8,277.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(25,1,1).p("AtYdDMAaxg6F");
	this.shape_154.setTransform(289.3,279);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#000000").ss(25,1,1).p("AtedPMAa9g6d");
	this.shape_155.setTransform(288.7,280.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(25,1,1).p("AtjdbMAbHg61");
	this.shape_156.setTransform(288.2,281.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#000000").ss(25,1,1).p("AtpdnMAbTg7N");
	this.shape_157.setTransform(287.6,282.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(25,1,1).p("AtudzMAbdg7l");
	this.shape_158.setTransform(287.1,283.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#000000").ss(25,1,1).p("At0d/MAbpg79");
	this.shape_159.setTransform(286.5,284.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(25,1,1).p("AN6+KMgbzA8V");
	this.shape_160.setTransform(286,286.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},164).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).wait(76));

	// Layer 1
	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#000000").ss(25,1,1).p("AgOAAIAdAA");
	this.shape_161.setTransform(160.5,93.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(25,1,1).p("AgWAAIAtAA");
	this.shape_162.setTransform(161.3,93.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#000000").ss(25,1,1).p("AgdAAIA7AA");
	this.shape_163.setTransform(162,93.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(25,1,1).p("AglAAIBLAA");
	this.shape_164.setTransform(162.8,93.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").ss(25,1,1).p("AgtAAIBaAA");
	this.shape_165.setTransform(163.6,93.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(25,1,1).p("Ag0AAIBpAA");
	this.shape_166.setTransform(164.3,93.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").ss(25,1,1).p("Ag8AAIB5AA");
	this.shape_167.setTransform(165.1,93.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(25,1,1).p("AhDAAICHAA");
	this.shape_168.setTransform(165.8,93.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").ss(25,1,1).p("AhLAAICXAA");
	this.shape_169.setTransform(166.6,93.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(25,1,1).p("AhSAAIClAA");
	this.shape_170.setTransform(167.4,93.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").ss(25,1,1).p("AhaAAIC1AA");
	this.shape_171.setTransform(168.1,93.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").ss(25,1,1).p("AhiAAIDFAA");
	this.shape_172.setTransform(168.9,93.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#000000").ss(25,1,1).p("AhpAAIDTAA");
	this.shape_173.setTransform(169.6,93.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(25,1,1).p("AhxAAIDjAA");
	this.shape_174.setTransform(170.4,93.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#000000").ss(25,1,1).p("Ah5AAIDzAA");
	this.shape_175.setTransform(171.2,93.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#000000").ss(25,1,1).p("AiAAAIEBAA");
	this.shape_176.setTransform(171.9,93.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#000000").ss(25,1,1).p("AiIAAIERAA");
	this.shape_177.setTransform(172.7,93.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#000000").ss(25,1,1).p("AiPAAIEfAA");
	this.shape_178.setTransform(173.4,93.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#000000").ss(25,1,1).p("AiXAAIEvAA");
	this.shape_179.setTransform(174.2,93.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").ss(25,1,1).p("AieAAIE+AA");
	this.shape_180.setTransform(175,93.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#000000").ss(25,1,1).p("AimAAIFNAA");
	this.shape_181.setTransform(175.7,93.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#000000").ss(25,1,1).p("AiuAAIFdAA");
	this.shape_182.setTransform(176.5,93.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#000000").ss(25,1,1).p("Ai1AAIFrAA");
	this.shape_183.setTransform(177.2,93.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#000000").ss(25,1,1).p("Ai9AAIF7AA");
	this.shape_184.setTransform(178,93.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#000000").ss(25,1,1).p("AjFAAIGLAA");
	this.shape_185.setTransform(178.8,93.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#000000").ss(25,1,1).p("AjMAAIGZAA");
	this.shape_186.setTransform(179.5,93.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#000000").ss(25,1,1).p("AjUAAIGpAA");
	this.shape_187.setTransform(180.3,93.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#000000").ss(25,1,1).p("AjcAAIG4AA");
	this.shape_188.setTransform(181.1,93.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#000000").ss(25,1,1).p("AjjAAIHHAA");
	this.shape_189.setTransform(181.8,93.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#000000").ss(25,1,1).p("AjrAAIHWAA");
	this.shape_190.setTransform(182.6,93.1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#000000").ss(25,1,1).p("AjyAAIHlAA");
	this.shape_191.setTransform(183.3,93.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#000000").ss(25,1,1).p("Aj6AAIH1AA");
	this.shape_192.setTransform(184.1,93.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#000000").ss(25,1,1).p("AkBAAIIDAA");
	this.shape_193.setTransform(184.9,93.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#000000").ss(25,1,1).p("AkJAAIITAA");
	this.shape_194.setTransform(185.6,93.1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#000000").ss(25,1,1).p("AkRAAIIjAA");
	this.shape_195.setTransform(186.4,93.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#000000").ss(25,1,1).p("AkYAAIIxAA");
	this.shape_196.setTransform(187.1,93.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#000000").ss(25,1,1).p("AkgAAIJBAA");
	this.shape_197.setTransform(187.9,93.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#000000").ss(25,1,1).p("AkoAAIJRAA");
	this.shape_198.setTransform(188.7,93.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#000000").ss(25,1,1).p("AkvAAIJfAA");
	this.shape_199.setTransform(189.4,93.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#000000").ss(25,1,1).p("Ak3AAIJvAA");
	this.shape_200.setTransform(190.2,93.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#000000").ss(25,1,1).p("Ak+AAIJ9AA");
	this.shape_201.setTransform(190.9,93.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#000000").ss(25,1,1).p("AlGAAIKNAA");
	this.shape_202.setTransform(191.7,93.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#000000").ss(25,1,1).p("AlNAAIKcAA");
	this.shape_203.setTransform(192.5,93.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#000000").ss(25,1,1).p("AlVAAIKrAA");
	this.shape_204.setTransform(193.2,93.1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#000000").ss(25,1,1).p("AldAAIK7AA");
	this.shape_205.setTransform(194,93.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#000000").ss(25,1,1).p("AlkAAILJAA");
	this.shape_206.setTransform(194.7,93.1);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#000000").ss(25,1,1).p("AlsAAILZAA");
	this.shape_207.setTransform(195.5,93.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#000000").ss(25,1,1).p("Al0AAILpAA");
	this.shape_208.setTransform(196.3,93.1);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#000000").ss(25,1,1).p("Al7AAIL3AA");
	this.shape_209.setTransform(197,93.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#000000").ss(25,1,1).p("AmDAAIMHAA");
	this.shape_210.setTransform(197.8,93.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#000000").ss(25,1,1).p("AmKAAIMVAA");
	this.shape_211.setTransform(198.5,93.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#000000").ss(25,1,1).p("AmSAAIMlAA");
	this.shape_212.setTransform(199.3,93.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#000000").ss(25,1,1).p("AmaAAIM0AA");
	this.shape_213.setTransform(200.1,93.1);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#000000").ss(25,1,1).p("AmhAAINDAA");
	this.shape_214.setTransform(200.8,93.1);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#000000").ss(25,1,1).p("AmpAAINTAA");
	this.shape_215.setTransform(201.6,93.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#000000").ss(25,1,1).p("AmwAAINhAA");
	this.shape_216.setTransform(202.4,93.1);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#000000").ss(25,1,1).p("Am4AAINxAA");
	this.shape_217.setTransform(203.1,93.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#000000").ss(25,1,1).p("Am/AAIN/AA");
	this.shape_218.setTransform(203.9,93.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#000000").ss(25,1,1).p("AnHAAIOPAA");
	this.shape_219.setTransform(204.6,93.1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#000000").ss(25,1,1).p("AnPAAIOfAA");
	this.shape_220.setTransform(205.4,93.1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#000000").ss(25,1,1).p("AnXAAIOvAA");
	this.shape_221.setTransform(206.2,93.1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#000000").ss(25,1,1).p("AneAAIO9AA");
	this.shape_222.setTransform(206.9,93.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#000000").ss(25,1,1).p("AnmAAIPNAA");
	this.shape_223.setTransform(207.7,93.1);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#000000").ss(25,1,1).p("AntAAIPbAA");
	this.shape_224.setTransform(208.4,93.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#000000").ss(25,1,1).p("An1AAIPrAA");
	this.shape_225.setTransform(209.2,93.1);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#000000").ss(25,1,1).p("An8AAIP5AA");
	this.shape_226.setTransform(210,93.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#000000").ss(25,1,1).p("AoEAAIQJAA");
	this.shape_227.setTransform(210.7,93.1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#000000").ss(25,1,1).p("AoMAAIQZAA");
	this.shape_228.setTransform(211.5,93.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#000000").ss(25,1,1).p("AoTAAIQnAA");
	this.shape_229.setTransform(212.2,93.1);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#000000").ss(25,1,1).p("AobAAIQ3AA");
	this.shape_230.setTransform(213,93.1);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#000000").ss(25,1,1).p("AojAAIRHAA");
	this.shape_231.setTransform(213.8,93.1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#000000").ss(25,1,1).p("AoqAAIRVAA");
	this.shape_232.setTransform(214.5,93.1);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#000000").ss(25,1,1).p("AoyAAIRlAA");
	this.shape_233.setTransform(215.3,93.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#000000").ss(25,1,1).p("Ao5AAIRzAA");
	this.shape_234.setTransform(216,93.1);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#000000").ss(25,1,1).p("ApBAAISDAA");
	this.shape_235.setTransform(216.8,93.1);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#000000").ss(25,1,1).p("ApJAAISTAA");
	this.shape_236.setTransform(217.6,93.1);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#000000").ss(25,1,1).p("ApQAAIShAA");
	this.shape_237.setTransform(218.3,93.1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#000000").ss(25,1,1).p("ApYAAISxAA");
	this.shape_238.setTransform(219.1,93.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#000000").ss(25,1,1).p("ApfAAIS/AA");
	this.shape_239.setTransform(219.8,93.1);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#000000").ss(25,1,1).p("ApnAAITPAA");
	this.shape_240.setTransform(220.6,93.1);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#000000").ss(25,1,1).p("ApvAAITfAA");
	this.shape_241.setTransform(221.4,93.1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#000000").ss(25,1,1).p("Ap2AAITtAA");
	this.shape_242.setTransform(222.1,93.1);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#000000").ss(25,1,1).p("Ap+AAIT9AA");
	this.shape_243.setTransform(222.9,93.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#000000").ss(25,1,1).p("AqGAAIUNAA");
	this.shape_244.setTransform(223.7,93.1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#000000").ss(25,1,1).p("AqNAAIUbAA");
	this.shape_245.setTransform(224.4,93.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#000000").ss(25,1,1).p("AqVAAIUrAA");
	this.shape_246.setTransform(225.2,93.1);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#000000").ss(25,1,1).p("AqcAAIU5AA");
	this.shape_247.setTransform(225.9,93.1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#000000").ss(25,1,1).p("AqkAAIVJAA");
	this.shape_248.setTransform(226.7,93.1);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#000000").ss(25,1,1).p("AqrAAIVXAA");
	this.shape_249.setTransform(227.5,93.1);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#000000").ss(25,1,1).p("AqzAAIVnAA");
	this.shape_250.setTransform(228.2,93.1);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#000000").ss(25,1,1).p("Aq7AAIV3AA");
	this.shape_251.setTransform(229,93.1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#000000").ss(25,1,1).p("ArCAAIWFAA");
	this.shape_252.setTransform(229.7,93.1);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#000000").ss(25,1,1).p("ArKAAIWVAA");
	this.shape_253.setTransform(230.5,93.1);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#000000").ss(25,1,1).p("ArSAAIWlAA");
	this.shape_254.setTransform(231.3,93.1);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#000000").ss(25,1,1).p("ArZAAIWzAA");
	this.shape_255.setTransform(232,93.1);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#000000").ss(25,1,1).p("ArhAAIXDAA");
	this.shape_256.setTransform(232.8,93.1);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#000000").ss(25,1,1).p("AroAAIXRAA");
	this.shape_257.setTransform(233.5,93.1);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#000000").ss(25,1,1).p("ArwAAIXhAA");
	this.shape_258.setTransform(234.3,93.1);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#000000").ss(25,1,1).p("Ar4AAIXxAA");
	this.shape_259.setTransform(235.1,93.1);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#000000").ss(25,1,1).p("Ar/AAIX/AA");
	this.shape_260.setTransform(235.8,93.1);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#000000").ss(25,1,1).p("AsHAAIYPAA");
	this.shape_261.setTransform(236.6,93.1);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#000000").ss(25,1,1).p("AsOAAIYdAA");
	this.shape_262.setTransform(237.3,93.1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#000000").ss(25,1,1).p("AsWAAIYtAA");
	this.shape_263.setTransform(238.1,93.1);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#000000").ss(25,1,1).p("AseAAIY9AA");
	this.shape_264.setTransform(238.9,93.1);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#000000").ss(25,1,1).p("AslAAIZLAA");
	this.shape_265.setTransform(239.6,93.1);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#000000").ss(25,1,1).p("AstAAIZbAA");
	this.shape_266.setTransform(240.4,93.1);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#000000").ss(25,1,1).p("As0AAIZpAA");
	this.shape_267.setTransform(241.1,93.1);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#000000").ss(25,1,1).p("As8AAIZ5AA");
	this.shape_268.setTransform(241.9,93.1);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#000000").ss(25,1,1).p("AtEAAIaJAA");
	this.shape_269.setTransform(242.7,93.1);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#000000").ss(25,1,1).p("AtLAAIaXAA");
	this.shape_270.setTransform(243.4,93.1);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#000000").ss(25,1,1).p("AtTAAIanAA");
	this.shape_271.setTransform(244.2,93.1);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#000000").ss(25,1,1).p("AtaAAIa1AA");
	this.shape_272.setTransform(245,93.1);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#000000").ss(25,1,1).p("AtiAAIbFAA");
	this.shape_273.setTransform(245.7,93.1);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#000000").ss(25,1,1).p("AtpAAIbTAA");
	this.shape_274.setTransform(246.5,93.1);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#000000").ss(25,1,1).p("AtxAAIbjAA");
	this.shape_275.setTransform(247.2,93.1);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#000000").ss(25,1,1).p("At5AAIbzAA");
	this.shape_276.setTransform(248,93.1);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#000000").ss(25,1,1).p("AuBAAIcDAA");
	this.shape_277.setTransform(248.8,93.1);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#000000").ss(25,1,1).p("AuIAAIcRAA");
	this.shape_278.setTransform(249.5,93.1);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#000000").ss(25,1,1).p("AuQAAIchAA");
	this.shape_279.setTransform(250.3,93.1);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#000000").ss(25,1,1).p("AuXAAIcvAA");
	this.shape_280.setTransform(251,93.1);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#000000").ss(25,1,1).p("AufAAIc/AA");
	this.shape_281.setTransform(251.8,93.1);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#000000").ss(25,1,1).p("AunAAIdPAA");
	this.shape_282.setTransform(252.6,93.1);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#000000").ss(25,1,1).p("AuuAAIddAA");
	this.shape_283.setTransform(253.3,93.1);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#000000").ss(25,1,1).p("Au2AAIdtAA");
	this.shape_284.setTransform(254.1,93.1);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#000000").ss(25,1,1).p("Au9AAId7AA");
	this.shape_285.setTransform(254.8,93.1);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#000000").ss(25,1,1).p("AvFAAIeLAA");
	this.shape_286.setTransform(255.6,93.1);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#000000").ss(25,1,1).p("AvNAAIeaAA");
	this.shape_287.setTransform(256.4,93.1);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#000000").ss(25,1,1).p("AvUAAIepAA");
	this.shape_288.setTransform(257.1,93.1);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#000000").ss(25,1,1).p("AvcAAIe5AA");
	this.shape_289.setTransform(257.9,93.1);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#000000").ss(25,1,1).p("AvjAAIfHAA");
	this.shape_290.setTransform(258.6,93.1);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#000000").ss(25,1,1).p("AvrAAIfXAA");
	this.shape_291.setTransform(259.4,93.1);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#000000").ss(25,1,1).p("AvyAAIfmAA");
	this.shape_292.setTransform(260.2,93.1);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#000000").ss(25,1,1).p("Av6AAIf1AA");
	this.shape_293.setTransform(260.9,93.1);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#000000").ss(25,1,1).p("AwCAAMAgFAAA");
	this.shape_294.setTransform(261.7,93.1);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#000000").ss(25,1,1).p("AwJAAMAgTAAA");
	this.shape_295.setTransform(262.4,93.1);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#000000").ss(25,1,1).p("AwRAAMAgjAAA");
	this.shape_296.setTransform(263.2,93.1);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#000000").ss(25,1,1).p("AwZAAMAgzAAA");
	this.shape_297.setTransform(264,93.1);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#000000").ss(25,1,1).p("AwgAAMAhBAAA");
	this.shape_298.setTransform(264.7,93.1);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#000000").ss(25,1,1).p("AwoAAMAhRAAA");
	this.shape_299.setTransform(265.5,93.1);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#000000").ss(25,1,1).p("AwwAAMAhhAAA");
	this.shape_300.setTransform(266.3,93.1);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#000000").ss(25,1,1).p("Aw3AAMAhvAAA");
	this.shape_301.setTransform(267,93.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_161}]},9).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).wait(250));

	// Base
	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(267.6,286.7);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(399));

	// Background
	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_302.setTransform(275,275,3.373,2.543);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_303.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_303},{t:this.shape_302}]}).wait(399));

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