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


(lib.ar_triangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhuhDIABAAQAtAYBAAAQA/AAAtgYIACgBIABAAIhuCJg");
	this.shape.setTransform(0,4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.1,-2.6,22.3,13.8);


(lib._7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AsSbUQgogmAAhEIALg6MAV7gtLIyQAAIhiGdIguBPIhbAdQg4AAgrgjQgsgmAAhAIARh1IAsjOIBkmIQAIgYADgRQAdhtBtAAQBDAAAmAnQAmApAABAQAAAdgFAbIUuAAQBAAAAqAjQAmAjgBA7IgLBMMgXhAwPQgpBVhVAAQg+AAgpgpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.9,-178.8,191.9,357.8);


(lib.HrArw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AgMAAIAZAA");
	this.shape.setTransform(-43.7,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AgUAAIApAA");
	this.shape_1.setTransform(-42.9,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AgbAAIA3AA");
	this.shape_2.setTransform(-42.2,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AgiAAIBGAA");
	this.shape_3.setTransform(-41.4,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AgqAAIBVAA");
	this.shape_4.setTransform(-40.7,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AgxAAIBjAA");
	this.shape_5.setTransform(-40,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("Ag5AAIBzAA");
	this.shape_6.setTransform(-39.2,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AhAAAICBAA");
	this.shape_7.setTransform(-38.5,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AhIAAICRAA");
	this.shape_8.setTransform(-37.7,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AhPAAICfAA");
	this.shape_9.setTransform(-37,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AhWAAICtAA");
	this.shape_10.setTransform(-36.3,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AheAAIC9AA");
	this.shape_11.setTransform(-35.5,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AhlAAIDLAA");
	this.shape_12.setTransform(-34.8,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AhtAAIDaAA");
	this.shape_13.setTransform(-34,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("Ah0AAIDpAA");
	this.shape_14.setTransform(-33.3,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("Ah7AAID3AA");
	this.shape_15.setTransform(-32.6,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AiDAAIEHAA");
	this.shape_16.setTransform(-31.8,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AiKAAIEVAA");
	this.shape_17.setTransform(-31.1,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AiSAAIElAA");
	this.shape_18.setTransform(-30.3,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AiZAAIEzAA");
	this.shape_19.setTransform(-29.6,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AihAAIFDAA");
	this.shape_20.setTransform(-28.8,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AioAAIFRAA");
	this.shape_21.setTransform(-28.1,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AivAAIFfAA");
	this.shape_22.setTransform(-27.4,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("Ai3AAIFuAA");
	this.shape_23.setTransform(-26.6,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("Ai+AAIF9AA");
	this.shape_24.setTransform(-25.9,0);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AjGAAIGMAA");
	this.shape_25.setTransform(-25.1,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AjNAAIGbAA");
	this.shape_26.setTransform(-24.4,0);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AjUAAIGpAA");
	this.shape_27.setTransform(-23.7,0);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AjcAAIG5AA");
	this.shape_28.setTransform(-22.9,0);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AjjAAIHHAA");
	this.shape_29.setTransform(-22.2,0);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AjrAAIHXAA");
	this.shape_30.setTransform(-21.4,0);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AjyAAIHlAA");
	this.shape_31.setTransform(-20.7,0);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("Aj5AAIHzAA");
	this.shape_32.setTransform(-20,0);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AkBAAIIDAA");
	this.shape_33.setTransform(-19.2,0);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AkIAAIIRAA");
	this.shape_34.setTransform(-18.5,0);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AkQAAIIhAA");
	this.shape_35.setTransform(-17.7,0);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AkXAAIIvAA");
	this.shape_36.setTransform(-17,0);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AkeAAII9AA");
	this.shape_37.setTransform(-16.3,0);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AkmAAIJNAA");
	this.shape_38.setTransform(-15.5,0);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AktAAIJbAA");
	this.shape_39.setTransform(-14.8,0);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("Ak1AAIJrAA");
	this.shape_40.setTransform(-14,0);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("Ak8AAIJ5AA");
	this.shape_41.setTransform(-13.3,0);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AlDAAIKHAA");
	this.shape_42.setTransform(-12.6,0);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AlLAAIKXAA");
	this.shape_43.setTransform(-11.8,0);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AlSAAIKlAA");
	this.shape_44.setTransform(-11.1,0);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AlaAAIK1AA");
	this.shape_45.setTransform(-10.3,0);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AlhAAILDAA");
	this.shape_46.setTransform(-9.6,0);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AloAAILRAA");
	this.shape_47.setTransform(-8.9,0);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AlwAAILhAA");
	this.shape_48.setTransform(-8.1,0);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("Al3AAILvAA");
	this.shape_49.setTransform(-7.4,0);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("Al/AAIL+AA");
	this.shape_50.setTransform(-6.6,0);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AmGAAIMNAA");
	this.shape_51.setTransform(-5.9,0);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AmOAAIMdAA");
	this.shape_52.setTransform(-5.1,0);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AmVAAIMrAA");
	this.shape_53.setTransform(-4.4,0);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AmcAAIM5AA");
	this.shape_54.setTransform(-3.7,0);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AmkAAINJAA");
	this.shape_55.setTransform(-2.9,0);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AmrAAINXAA");
	this.shape_56.setTransform(-2.2,0);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AmzAAINnAA");
	this.shape_57.setTransform(-1.4,0);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("Am6AAIN1AA");
	this.shape_58.setTransform(-0.7,0);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AAAnBIAAOD");
	this.shape_59.setTransform(0,0,1,1,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).wait(1));

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-45.5,-0.2,1,1,-90,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:45.3},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.3,-11.1,13.8,22.3);


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


(lib.ar5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAAgIIAAAR");
	this.shape.setTransform(-3.5,-299.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AAAgUIAAAp");
	this.shape_1.setTransform(-3.5,-298);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AAAghIAABC");
	this.shape_2.setTransform(-3.5,-296.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AAAgsIABBZ");
	this.shape_3.setTransform(-3.5,-295.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AAAg4IABBx");
	this.shape_4.setTransform(-3.5,-294.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AAAhEIABCJ");
	this.shape_5.setTransform(-3.4,-293.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AAAhQIABCh");
	this.shape_6.setTransform(-3.4,-292);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AAAhcIABC5");
	this.shape_7.setTransform(-3.4,-290.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AAAhoIABDR");
	this.shape_8.setTransform(-3.4,-289.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AAAh0IABDp");
	this.shape_9.setTransform(-3.4,-288.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AAAiAIABEB");
	this.shape_10.setTransform(-3.4,-287.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AgBiMIADEZ");
	this.shape_11.setTransform(-3.4,-286);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AgBiYIADEx");
	this.shape_12.setTransform(-3.4,-284.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AgBikIADFJ");
	this.shape_13.setTransform(-3.3,-283.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AgBiwIADFh");
	this.shape_14.setTransform(-3.3,-282.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AgBi8IADF5");
	this.shape_15.setTransform(-3.3,-281.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AgCjHIAFGQ");
	this.shape_16.setTransform(-3.3,-280.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AgCjUIAFGp");
	this.shape_17.setTransform(-3.3,-278.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AgCjfIAFG/");
	this.shape_18.setTransform(-3.3,-277.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AgCjrIAFHY");
	this.shape_19.setTransform(-3.3,-276.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AgCj3IAFHv");
	this.shape_20.setTransform(-3.2,-275.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AgCkDIAFIH");
	this.shape_21.setTransform(-3.2,-274.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AgCkPIAFIf");
	this.shape_22.setTransform(-3.2,-272.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AgCkbIAFI3");
	this.shape_23.setTransform(-3.2,-271.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AgCknIAGJP");
	this.shape_24.setTransform(-3.2,-270.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AgCkzIAGJn");
	this.shape_25.setTransform(-3.2,-269.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AgDk/IAHJ/");
	this.shape_26.setTransform(-3.2,-268.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AgDlLIAHKX");
	this.shape_27.setTransform(-3.1,-266.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AgDlXIAHKv");
	this.shape_28.setTransform(-3.1,-265.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AgDljIAHLH");
	this.shape_29.setTransform(-3.1,-264.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AgDlvIAHLf");
	this.shape_30.setTransform(-3.1,-263.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AgEl7IAIL3");
	this.shape_31.setTransform(-3.1,-262.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AgEmHIAIMP");
	this.shape_32.setTransform(-3.1,-261);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AgEmTIAJMn");
	this.shape_33.setTransform(-3.1,-259.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AgEmeIAJM+");
	this.shape_34.setTransform(-3.1,-258.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AgEmrIAJNW");
	this.shape_35.setTransform(-3,-257.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AgEm2IAJNt");
	this.shape_36.setTransform(-3,-256.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AgEnCIAJOG");
	this.shape_37.setTransform(-3,-255);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AgEnOIAJOd");
	this.shape_38.setTransform(-3,-253.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AgEnaIAJO1");
	this.shape_39.setTransform(-3,-252.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AgFnmIALPN");
	this.shape_40.setTransform(-3,-251.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AgFnyIALPl");
	this.shape_41.setTransform(-3,-250.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AgFn+IALP9");
	this.shape_42.setTransform(-2.9,-249);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AgFoKIALQV");
	this.shape_43.setTransform(-2.9,-247.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AgFoWIALQt");
	this.shape_44.setTransform(-2.9,-246.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AgFoiIALRF");
	this.shape_45.setTransform(-2.9,-245.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AgFouIALRd");
	this.shape_46.setTransform(-2.9,-244.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AgFo6IALR1");
	this.shape_47.setTransform(-2.9,-243.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AgGpGIANSN");
	this.shape_48.setTransform(-2.9,-241.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AgGpSIANSl");
	this.shape_49.setTransform(-2.9,-240.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AgGpeIANS9");
	this.shape_50.setTransform(-2.8,-239.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AgGpqIANTV");
	this.shape_51.setTransform(-2.8,-238.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AgGp1IANTr");
	this.shape_52.setTransform(-2.8,-237.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AgHqCIAPUE");
	this.shape_53.setTransform(-2.8,-235.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AgHqNIAPUb");
	this.shape_54.setTransform(-2.8,-234.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AgHqZIAPU0");
	this.shape_55.setTransform(-2.8,-233.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AgHqlIAPVL");
	this.shape_56.setTransform(-2.8,-232.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AgHqxIAPVj");
	this.shape_57.setTransform(-2.7,-231.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AgHq9IAPV7");
	this.shape_58.setTransform(-2.7,-229.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AgHrJIAPWT");
	this.shape_59.setTransform(-2.7,-228.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(5,1,1).p("AgHrVIAPWr");
	this.shape_60.setTransform(-2.7,-227.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(5,1,1).p("AgHrhIAQXD");
	this.shape_61.setTransform(-2.7,-226.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(5,1,1).p("AgHrtIAQXb");
	this.shape_62.setTransform(-2.7,-225.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(5,1,1).p("AgIr5IARXz");
	this.shape_63.setTransform(-2.7,-223.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(5,1,1).p("AgIsFIARYL");
	this.shape_64.setTransform(-2.7,-222.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(5,1,1).p("AgIsRIARYj");
	this.shape_65.setTransform(-2.6,-221.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(5,1,1).p("AgIsdIARY7");
	this.shape_66.setTransform(-2.6,-220.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(5,1,1).p("AgIspIARZT");
	this.shape_67.setTransform(-2.6,-219.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(5,1,1).p("AgJs1IASZr");
	this.shape_68.setTransform(-2.6,-218);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(5,1,1).p("AgJtBIASaD");
	this.shape_69.setTransform(-2.6,-216.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(5,1,1).p("AgJtMIATaZ");
	this.shape_70.setTransform(-2.6,-215.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(5,1,1).p("AgJtZIATay");
	this.shape_71.setTransform(-2.6,-214.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(5,1,1).p("AgJtkIATbJ");
	this.shape_72.setTransform(-2.5,-213.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(5,1,1).p("AgJtwIATbh");
	this.shape_73.setTransform(-2.5,-212);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(5,1,1).p("AgJt8IATb5");
	this.shape_74.setTransform(-2.5,-210.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(5,1,1).p("AgJuIIATcR");
	this.shape_75.setTransform(-2.5,-209.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(5,1,1).p("AgJuUIAUcp");
	this.shape_76.setTransform(-2.5,-208.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(5,1,1).p("AgJugIAUdB");
	this.shape_77.setTransform(-2.5,-207.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(5,1,1).p("AgKusIAVdZ");
	this.shape_78.setTransform(-2.5,-206);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(5,1,1).p("AgKu4IAVdx");
	this.shape_79.setTransform(-2.5,-204.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(5,1,1).p("AgKvEIAVeJ");
	this.shape_80.setTransform(-2.4,-203.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(5,1,1).p("AgKvQIAVeh");
	this.shape_81.setTransform(-2.4,-202.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(5,1,1).p("AgKvcIAVe5");
	this.shape_82.setTransform(-2.4,-201.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(5,1,1).p("AgLvoIAXfR");
	this.shape_83.setTransform(-2.4,-200.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(5,1,1).p("AgLv0IAXfp");
	this.shape_84.setTransform(-2.4,-198.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(5,1,1).p("AgLwAMAAXAgB");
	this.shape_85.setTransform(-2.4,-197.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(5,1,1).p("AgLwLMAAXAgY");
	this.shape_86.setTransform(-2.4,-196.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(5,1,1).p("AgLwYMAAXAgw");
	this.shape_87.setTransform(-2.3,-195.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(5,1,1).p("AgLwjMAAXAhI");
	this.shape_88.setTransform(-2.3,-194.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(5,1,1).p("AgLwwMAAXAhg");
	this.shape_89.setTransform(-2.3,-192.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(5,1,1).p("AgLw8MAAXAh5");
	this.shape_90.setTransform(-2.3,-191.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(5,1,1).p("AgMxHMAAYAiP");
	this.shape_91.setTransform(-2.3,-190.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(5,1,1).p("AgMxTMAAYAin");
	this.shape_92.setTransform(-2.3,-189.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(5,1,1).p("AgMxfMAAZAi/");
	this.shape_93.setTransform(-2.3,-188.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(5,1,1).p("AgMxrMAAZAjX");
	this.shape_94.setTransform(-2.2,-186.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(5,1,1).p("AgMx3MAAZAjv");
	this.shape_95.setTransform(-2.2,-185.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(5,1,1).p("AgMyDMAAZAkH");
	this.shape_96.setTransform(-2.2,-184.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(5,1,1).p("AgMyPMAAZAkf");
	this.shape_97.setTransform(-2.2,-183.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(5,1,1).p("AgMybMAAaAk3");
	this.shape_98.setTransform(-2.2,-182.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(5,1,1).p("AgMynMAAaAlP");
	this.shape_99.setTransform(-2.2,-180.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(5,1,1).p("AgNyzMAAbAln");
	this.shape_100.setTransform(-2.2,-179.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(5,1,1).p("AgNy/MAAbAl/");
	this.shape_101.setTransform(-2.2,-178.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(5,1,1).p("AgNzLMAAbAmX");
	this.shape_102.setTransform(-2.1,-177.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(5,1,1).p("AgNzXMAAbAmv");
	this.shape_103.setTransform(-2.1,-176.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(5,1,1).p("AgNziMAAbAnG");
	this.shape_104.setTransform(-2.1,-175);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(5,1,1).p("AgNzvMAAbAne");
	this.shape_105.setTransform(-2.1,-173.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(5,1,1).p("AgOz6MAAcAn2");
	this.shape_106.setTransform(-2.1,-172.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(5,1,1).p("AgO0HMAAdAoO");
	this.shape_107.setTransform(-2.1,-171.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(5,1,1).p("AgO0SMAAdAol");
	this.shape_108.setTransform(-2.1,-170.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(5,1,1).p("AgO0eMAAdAo9");
	this.shape_109.setTransform(-2,-169);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(5,1,1).p("AgO0qMAAdApV");
	this.shape_110.setTransform(-2,-167.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(5,1,1).p("AgO02MAAdApt");
	this.shape_111.setTransform(-2,-166.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(5,1,1).p("AgO1CMAAdAqF");
	this.shape_112.setTransform(-2,-165.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(5,1,1).p("AgO1OMAAeAqd");
	this.shape_113.setTransform(-2,-164.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(5,1,1).p("AgO1aMAAeAq1");
	this.shape_114.setTransform(-2,-163);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(5,1,1).p("AgP1mMAAfArN");
	this.shape_115.setTransform(-2,-161.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(5,1,1).p("AgP1yMAAfArl");
	this.shape_116.setTransform(-2,-160.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(5,1,1).p("AgP1+MAAfAr9");
	this.shape_117.setTransform(-1.9,-159.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(5,1,1).p("AgP2KMAAfAsV");
	this.shape_118.setTransform(-1.9,-158.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(5,1,1).p("AgP2WMAAfAst");
	this.shape_119.setTransform(-1.9,-157.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).wait(1));

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-3.5,-301.3,1,1,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0.3,y:-16.8},119).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.8,-304.2,22.3,13.8);


(lib.honeyflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.honeybee();
	this.instance.parent = this;
	this.instance.setTransform(15.5,-26.9,0.422,0.422,0,0,0,-0.1,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNB8IgRgDIgCAAIgFgCIgDgBIgGgCIgHgDIgFgDIgDgBIgBgBIgCgBIgBgBIgBAAIgBgBIgBgBIgCgBIgBgBIgBAAIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIAAgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIgBgBIAAgBIgBAAIgBgBIAAgBIgBgBIgBgBIAAgBIgBAAIgCgBIAAgBIgBgBIAAgBIgBgBIgBAAIAAgBIgBgBIAAgBIgBgBIAAgBIgBgBIAAgBIgBAAIAAgBIgBgBIgBgBIgBgBIAAgBIAAgBIgBAAIgBgBIAAgBIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIgBAAIAAgBIAAgBIgBgBIAAgBIgBgBIgBgBIAAgBIAAgBIgBAAIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAAAIgBgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAAAIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIAAgBIAAAAIABgCIAAAAIAAgCIABgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIABgBIABgBIABgBIAAgBIABgBIABgBIAAgBIABgBIABgCIAAgBIABgBIABgBIABgBIABgBIABgBIABgBIABgBIAAgBIAEgEIANgLIAMgIIAPgIIAQgGIAOgDIAQgBQAHAAAJABIAPACQAJACAHAEIAPAHIAFACIABABIACABIABAAIAAABIACABIABABIABAAIABABIABABIABABIABABIACAAIAAABIABABIABABIABABIABAAIABABIABABIABABIABABIABABIAAAAIABABIAAABIABABIABABIACABIAAAAIABABIAAABIABABIABABIAAABIABAAIAAABIABABIABABIAAABIABABIABABIABAAIABABIAAABIABABIAAABIABABIAAABIAAAAIABABIABABIAAABIABABIAAABIABABIAAABIABAAIABABIAAABIAAABIABABIAAABIABABIAAABIABAAIAAABIABABIAAABIAAABIAAABIABABIAAABIAAABIABAAIAAABIAAABIABABIAAABIAAABIABABIAAABIABABIAAABIAAABIABAAIAAABIAAABIAAABIAAABIABABIAAABIAAABIAAABIABABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIABACIAAACIAAACIAAABIAAAAIABABIgBABIAAABIABABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAAAIgBABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIAAACIAAACIgBACIAAABIAAABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIgBABIgBABIAAABIAAABIgBABIAAABIAAABIgBABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIgBABIgBABIAAABIgBABIAAABIgBABIgBABIAAABIgBABIAAABIgBABIgBACIgBABIgBABIgBABIAAABIgBABIgBABIgBABIAAABIgBABIgBABIgBABIgCABIgBACIgBABIgKAJQgLAJgOAHQgIAEgLADQgRAFgRAAIgOgBg");
	this.shape.setTransform(0,0,0.8,0.802);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.8,-71.2,105.5,81.8);


// stage content:
(lib.WS_Cursive_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_575 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(575).call(this.frame_575).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(211.1,104.8,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[211.1,104.7,200.3,145,189.8,183.5]}},54).wait(21).to({x:189.8,y:183.6},0).to({x:214,y:130},16).to({x:356.3},106).wait(24).to({x:360.1,y:129.8},0).to({guide:{path:[360.1,130.4,283,285.3,205.9,440.2]}},176).wait(25).to({x:189.4,y:449},0).to({guide:{path:[189.5,449,235.7,415.3,273.5,372.4,310,330.9,353,344.6,363.4,348,371.3,357.5,417.7,413.2,491.9,339.7,565.6,266.6,628.1,309.9]}},144).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(356,130.1,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},197).wait(24).to({_off:false,x:206,y:440.1},0).to({_off:true},176).wait(170));

	// arrow
	this.instance_1 = new lib.ar5("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(258.3,430.5,1,1,26.5,0,0,0,-1.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(230).to({_off:false},0).wait(346));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_230 = new cjs.Graphics().p("AAIEXQg2gVhMgkQhNgjgzgdQgzgcACgFIDqmlQACgFA3AWQA3AWBMAjQBMAkAzAcQA0AdgCAEIjqGmIgCABQgKAAgugTg");
	var mask_graphics_231 = new cjs.Graphics().p("AAHEaQg2gUhNghIgPgHIg3gZIghgQIgagOIgBgBQgSgJgLgIQgVgMABgEIDumuQADgFA3AUQA3AVBNAhIAqATIATAIIATAJIABAAIAwAaIAgASQAKAGAFAFQAEADgBACIjuGuQAAAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQgLAAgtgRg");
	var mask_graphics_232 = new cjs.Graphics().p("AAGEdQg3gShNggIgPgGIg4gYIghgPIgbgOIgBgBQgSgKgLgHQgWgNACgEIDzm4QACgFA4ATQA3ATBNAgIAqARIAUAIIATAIIABAAIAxAaIAhATIAOAKQAFAEgBACIjzG3QAAABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQgMAAgrgQg");
	var mask_graphics_233 = new cjs.Graphics().p("AAGEgQg4gRhNgeIgPgFIg5gWQgRgHgRgIIgbgOIgBgBQgTgKgLgIQgVgNABgEID3nBQADgGA4ATQA4ARBNAeIArAQIAUAHIASAIIACAAIAyAaIAiATQAJAGAFAFQAEADgBACIj3HBQgBABgEAAQgNAAgpgOg");
	var mask_graphics_234 = new cjs.Graphics().p("AAFEiQg4gOhOgcIgPgGIg5gUQgSgGgQgIIgcgOIgCgBQgTgKgLgJQgWgNACgEID8nKQADgHA4ASQA4APBOAcIAqAPIAVAHIATAHIABAAIAzAaIAjATQAJAHAEAFQAFADgCACIj7HKQgBACgFAAQgNAAgogOg");
	var mask_graphics_235 = new cjs.Graphics().p("AAEElQg5gNhOgaIgQgFIg4gTQgSgFgRgIIgdgOIgBgCIgfgSQgWgOACgFIEAnSQAEgIA3ARQA5ANBOAbIArANIAUAHIAUAGIABAAIA0AaIAkAUQAJAGAEAFQAEAEgBACIj/HTQgBADgHAAQgOAAgmgNg");
	var mask_graphics_236 = new cjs.Graphics().p("AADEoQg5gLhOgZIgQgEIg5gRQgTgFgRgIIgdgOIgBgBQgUgLgMgJQgWgOADgFIAPgcIAAAAID1m/QAEgJA3ARQA6ALBOAZIAsAMIAUAGIATAGIABAAIA2AaIAkATQAJAIAEAFQAEAEgBACIkDHbQgCADgHAAQgPAAglgLg");
	var mask_graphics_237 = new cjs.Graphics().p("AACEqQg5gJhPgXIgQgEIg5gPQgTgEgRgIIgegPIgBgBQgUgLgNgJQgVgOACgFIEInlQAFgJA3AQQA6AKBPAWIAsALIAUAGIAUAFIABAAIA3AbIAlATQAJAHAEAGQAEAEgCACIkIHkQgBAEgJAAQgPAAgkgLg");
	var mask_graphics_238 = new cjs.Graphics().p("AABEtQg6gHhPgVIgQgEIg6gOQgSgDgSgIQgQgGgPgJIgBgBQgUgLgNgJQgWgPADgFIENnuQAEgJA4APQA7AHBPAVIAsAKIAUAFIAUAFIABgBIA4AbIAmAUQAJAHADAGQAEAEgBACIkMHuQgCAEgKAAQgPAAgjgKg");
	var mask_graphics_239 = new cjs.Graphics().p("AAAEvQg6gFhQgTIgQgDIg6gMQgTgDgSgIIgfgPIgCgBQgUgLgNgKQgWgPADgFIERn3QAFgLA4APQA7AGBPASIAtAJIAUAFIAUAEIABAAIA5AbIAnATQAJAIADAGQAEAEgBACIkRH3QgCAEgLAAQgQAAghgJg");
	var mask_graphics_240 = new cjs.Graphics().p("AAAEyQg7gDhQgRIgQgDIg7gLQgTgBgTgIQgQgHgPgJIgCgBQgVgLgMgKQgXgPADgGIEWoAQAFgLA3ANQA8AFBQAQIAtAIIAVAEIAUADIABAAIA6AcIAoATQAIAIAEAGQADAEgBADIkVH/QgDAFgMAAQgQAAgfgIg");
	var mask_graphics_241 = new cjs.Graphics().p("AAAE1Qg9gChQgPIgQgDIg7gJQgUgBgSgIQgRgGgQgJIgBgBQgWgMgNgKQgWgQADgGIEaoJQAFgLA3ANQA9ACBRAPIAtAGIAVAEIAUADIABgBIA7AcIApAUQAIAIADAGQAEAEgBADIkaIIQgDAGgOAAQgPAAgdgHg");
	var mask_graphics_242 = new cjs.Graphics().p("AgBE3Qg9AAhRgNIgQgCIg7gHQgUgBgTgHQgRgIgQgIIgBgBQgWgMgNgLQgXgPADgHIEfoSQAGgMA2AMQA+AABRANIAtAGIAVACIAUADIABAAIA9AcIApAUQAIAHAEAHQADAEgBADIkeIRQgEAHgPAAQgQAAgbgHg");
	var mask_graphics_243 = new cjs.Graphics().p("AgCE6Qg9AChSgMIgQgBIg8gGQgUABgTgIQgRgHgRgJIgBgBQgWgMgNgLQgXgQADgHIEjobQAGgNA3ALQA+gBBRALIAuAEIAVACIAUACIABAAIA+AcIAqAUQAIAJADAGQAEAFgCACIkiIbQgDAHgRAAQgQAAgagGg");
	var mask_graphics_244 = new cjs.Graphics().p("AgCE9Qg/ADhRgKIgRgBIg8gEQgUABgTgIQgSgGgRgKIgBgBQgWgMgOgLQgXgQAEgHIARghIAAAAIEWoDQAGgOA3AKQA/gDBRAKIAuACIAVACIAVACIABgBIA/AcIArAVQAIAIADAHQADAEgBADIknIkQgEAIgTAAQgPAAgYgFg");
	var mask_graphics_245 = new cjs.Graphics().p("AgDFAQg/AFhSgIIgRgBIg8gCQgUACgUgIQgSgHgRgJIgCgCQgWgMgOgMQgXgQAEgHIErotQAHgPA3AKQA/gFBSAIIAuABIAVABIAVABIABAAIBBAcIArAVQAIAIACAHQAEAFgCACIkrIuQgEAIgVAAQgPAAgWgEg");
	var mask_graphics_246 = new cjs.Graphics().p("AgEFCQg/AHhSgGIgRAAIg9gBQgUACgVgHQgSgHgRgKIgCgBQgXgNgOgLQgXgRAEgIIEwo2QAHgPA3AJQA/gGBTAFIAuAAIAWABIAVAAIABAAIBBAdIAtAUQAHAJADAHQADAFgCACIkvI3QgFAJgXAAQgOAAgVgEg");
	var mask_graphics_247 = new cjs.Graphics().p("AkOFGQgTgHgSgKIgBgBQgYgNgOgMQgXgRAEgHIE0pAQAHgPA3AIQBAgJBTAEIAvgBIAWAAIAVAAIABAAIBDAcIAtAVQAHAJACAIQAEAEgCADIk0I/QgIAQg3gJQhAAJhSgEIgRAAIg+ABIgLAAQgPAAgOgFg");
	var mask_graphics_248 = new cjs.Graphics().p("AkRFPQgTgHgSgKIgBgBQgYgNgOgNQgYgRAEgIIE5pIQAHgQA3AHQBBgKBTACIAvgDIAWAAIAVgBIABAAIBEAdIAuAUQAHAKADAHQADAFgCADIk4JIQgIARg4gIQhAAKhTgCIgRAAIg+ADIgOABQgNAAgOgFg");
	var mask_graphics_249 = new cjs.Graphics().p("AkUFYQgTgHgSgKIgCgCQgYgNgPgMQgXgSAEgIIE9pSQAIgQA3AGQBBgMBUAAIAvgDIAWgBIAVgCIABAAIBGAdIAuAVQAHAKACAHQAEAFgCADIk9JRQgIARg4gHQhAAMhUAAIgRABIg+AEIgOACQgOAAgOgFg");
	var mask_graphics_250 = new cjs.Graphics().p("AkWFhQgTgHgTgKIgCgCQgZgNgOgNQgYgSAEgIIFCpbQAIgRA3AGQBCgOBUgCIAvgFIAXgBIAVgCIABAAIBGAdIAwAVQAHAKACAIQADAEgCADIlBJbQgJARg3gGQhBAOhUABIgRACIg/AGQgIABgIAAQgNAAgNgEg");
	var mask_graphics_251 = new cjs.Graphics().p("AkZFqQgUgHgTgLIgCgBQgZgNgOgOQgYgSAEgJIFGpjQAJgSA3AFQBCgQBUgDIAwgGIAXgCIAVgDIABAAIBIAdIAwAVQAHAKACAJQADAEgCADIlGJkQgJASg3gGQhCAQhUADIgRADIg/AHQgKACgJAAQgMAAgMgEg");
	var mask_graphics_252 = new cjs.Graphics().p("AkcFzQgUgHgUgLIgBgBQgZgOgPgNQgYgTAEgJIAUglIgBAAIE3pIQAJgSA3AEQBDgRBVgGIAwgHIAXgDIAVgDIABAAIBJAeIAxAVQAGAKACAIQADAFgBADIlKJtQgKATg3gFQhCARhVAGIgRACIhAAJQgJADgKAAQgMAAgMgEg");
	var mask_graphics_253 = new cjs.Graphics().p("AkfF7QgUgGgUgLIgCgCQgZgOgPgNQgYgTAEgJIFOp2QAKgTA3ADQBDgTBVgHIAxgJIAWgDIAWgDIABgBIBKAeIAyAVQAGALACAIQADAFgCADIlOJ2QgKATg3gEQhDAUhVAHIgSACQghAFgeAGQgKAEgKAAQgMAAgMgFg");
	var mask_graphics_254 = new cjs.Graphics().p("AkhGFQgVgHgUgLIgCgBQgagPgPgOQgYgTAEgKIFTp+QAKgUA3ACQBEgUBVgKIAxgJIAXgEIAWgEIABgBIBLAeIAzAWQAGAKABAKQADAFgCADIlSJ+QgKAUg4gDQhDAVhVAJIgSADQgiAGgeAHQgLADgLAAQgLAAgLgDg");
	var mask_graphics_255 = new cjs.Graphics().p("AkkGOQgVgHgUgLIgCgCQgagOgQgOQgYgUAFgKIFXqHQAKgVA3ACQBEgXBWgLIAxgLIAXgEIAWgFIABAAIBNAeIAzAWQAGAKACAJQACAFgBAEIlXKHQgLAVg3gCQhEAWhWALIgSAEIhAAOQgMAEgMAAQgKAAgLgDg");
	var mask_graphics_256 = new cjs.Graphics().p("AknGWQgVgGgVgMIgCgBQgagPgQgOQgYgUAFgKIAUgnIAAAAIFHpqQAKgVA3ABQBFgZBXgMIAxgNIAXgEIAWgFIACgBIBNAfIA0AVQAGALABAJQADAFgCAEIlbKQQgLAWg3gCQhFAZhWAMIgSAFQgiAHgeAIQgMAFgMAAQgLAAgLgEg");
	var mask_graphics_257 = new cjs.Graphics().p("AkqGfQgVgGgVgMIgCgCQgbgOgQgPQgYgUAFgKIFfqaQALgWA3AAQBFgaBXgPIAygNIAXgGIAWgFIACgBIBOAfIA2AWQAFALABAJQADAFgCAEIlgKZQgLAXg3gBQhFAahXAOIgSAFQgiAIgfAJQgMAGgNAAQgKAAgLgEg");
	var mask_graphics_258 = new cjs.Graphics().p("AksGoQgWgHgVgLIgCgCQgcgPgQgPQgYgUAFgLIFkqjQALgWA3gBQBGgcBXgRIAygOIAYgGIAWgGIABgBIBQAfIA2AWQAFALABAKQADAFgCAEIlkKiQgMAXg3AAQhFAchXAQIgSAGIhCASQgNAHgOAAQgJAAgKgEg");
	var mask_graphics_259 = new cjs.Graphics().p("AkvGxQgWgHgWgMIgCgBQgcgPgQgQQgYgUAFgLIFoqsQAMgXA3gCQBGgeBXgSIAzgQIAYgGIAWgHIABAAIBRAfIA3AVQAFAMABAKQADAFgCAEIlpKrQgMAYg3ABQhGAdhXATIgSAFQgjAKgfALQgNAGgOAAQgKAAgKgDg");
	var mask_graphics_260 = new cjs.Graphics().p("AkyG6QgWgHgWgMIgCgCQgcgPgQgQQgZgUAFgMIFtq1QAMgXA3gDQBHgfBXgVIAzgQIAYgHIAXgIIABAAIBSAfIA4AWQAFAMABAKQACAFgCAEIltK0QgMAZg4ABQhGAghYAUIgSAGQgjAKgfAMQgOAHgOAAQgKAAgKgDg");
	var mask_graphics_261 = new cjs.Graphics().p("Ak0HDQgXgHgXgMIgCgCQgcgPgQgQQgZgVAFgMIFxq+QAMgYA3gDQBIghBYgXQAbgIAYgKIAYgHIAXgIIABgBIBUAgIA4AWQAFAMAAAKQADAFgCAEIlyK+QgMAZg4ACQhGAhhYAWIgTAHIhDAXQgOAIgPAAQgJAAgJgDg");
	var mask_graphics_262 = new cjs.Graphics().p("Ak3HMQgWgHgYgMIgCgCQgcgQgRgQQgZgVAGgMIF1rHQAMgZA3gEQBIgjBZgYIA0gTIAXgJIAXgIIACgBIBUAgIA5AWQAFAMABALQACAFgCAEIl2LHQgNAZg3ADQhHAkhZAXIgTAHQgjAMggANQgPAJgPAAQgJAAgJgDg");
	var mask_graphics_263 = new cjs.Graphics().p("Ak6HVQgXgHgXgNIgCgBQgdgQgRgRQgZgVAFgMIF6rQQANgaA3gFQBIglBZgaIA0gUIAYgJIAXgJIACAAIBWAfIA6AXQAEAMAAALQADAFgDAEIl6LQQgNAag3AEQhIAlhZAZIgTAIQgjANggAOQgPAIgQAAQgJAAgJgCg");
	var mask_graphics_264 = new cjs.Graphics().p("Ak9HeQgXgHgYgNIgCgCQgdgQgRgRQgZgVAFgNIAXgsIgBAAIFoqtQANgaA4gGQBJgmBZgcIA0gWIAYgJIAYgKIABAAIBXAgIA7AWQAEANAAALQACAFgCAEIl+LZQgOAbg3AEQhJAnhZAbIgTAIQgjAOggAPQgQAJgQAAQgJAAgJgCg");
	var mask_graphics_265 = new cjs.Graphics().p("Ak/HmQgYgGgYgNIgCgCQgegQgRgRQgZgWAGgNIGCriQAOgbA3gHQBJgoBageIA0gXIAZgJIAXgKIABgBIBZAgIA7AXQAEAMAAALQADAGgDAEImDLiQgNAbg4AGQhJAohZAeIgTAIQgkAOggAQQgQAKgRAAQgJAAgIgDg");
	var mask_graphics_266 = new cjs.Graphics().p("AlCHvQgYgGgYgOIgDgBQgegRgRgRQgZgXAGgMIGGrsQAOgcA3gHQBKgqBagfIA1gYIAZgLIAXgKIABgBIBaAgIA8AXQAEANAAALQACAGgCAEImHLrQgOAcg4AGQhJArhaAfIgTAIQgkAQghAQQgQALgRAAQgIAAgJgDg");
	var mask_graphics_267 = new cjs.Graphics().p("AlFH4QgYgHgZgNIgCgCQgegQgSgSQgZgXAGgNIGLr0QAOgdA3gHQBLgsBagiQAcgMAagNIAYgLIAYgLIABgBIBbAhIA9AXQAEANgBALQACAGgCAEImLL0QgPAdg3AHQhKAshbAhIgTAJQgkAQghARQgRAMgRAAQgIAAgJgDg");
	var mask_graphics_268 = new cjs.Graphics().p("AlHIBQgZgHgZgNIgCgCQgfgRgSgSQgZgXAGgNIGPr+QAPgdA3gIQBLguBbgjQAcgNAZgOIAZgLIAYgMIABgBIBcAhIA+AXQAEANgBAMQACAGgCAEImQL9QgPAdg3AIQhLAuhbAjIgTAJQgkARghASQgRANgSAAQgIAAgIgDg");
	var mask_graphics_269 = new cjs.Graphics().p("AlKIKQgYgHgagOIgDgBQgfgRgRgTQgagXAGgOIGUsGQAPgeA3gJQBMgwBbglIA2gcIAZgMIAXgMIACAAIBdAgIA/AXQADAOgBAMQACAGgCAEImUMGQgPAeg4AJQhLAvhbAlIgTAKQglASghATQgSAMgSAAQgIAAgIgCg");
	var mask_graphics_270 = new cjs.Graphics().p("AlNITQgZgHgagOIgCgCQgfgRgTgTQgZgXAGgOIGYsQQAPgeA4gKQBMgxBbgnIA3gdIAYgNIAZgNIABAAIBeAhIBAAXQADAOgBAMQACAGgCAEImZMPQgPAfg4AJQhLAxhcAnIgUAKQgkATgiAUQgSANgSAAQgIAAgIgCg");
	var mask_graphics_271 = new cjs.Graphics().p("AlPIcQgZgHgbgOIgCgCQgggRgSgTQgagYAGgOIGdsZQAPgeA4gLQBMg0BcgoQAdgPAagQIAZgNIAYgNIABgBIBgAiIBAAXQADAOAAAMQABAGgCAFImdMYQgQAfg4AKQhLAzhcApIgUAKQglAUghAUQgSAOgUAAQgHAAgIgCg");
	var mask_graphics_272 = new cjs.Graphics().p("AlSIlQgagHgagOIgDgCQgggSgSgTQgagYAGgOIAZgxIgBAAIGJrxQAQggA3gLQBNg1BdgrIA3gfIAZgOIAYgOIABgBIBhAiIBBAXQADAOgBANQACAGgDAFImhMhQgQAgg4ALQhMA0hcArIgUALQglAUgiAVQgSAPgUAAQgHAAgIgCg");
	var mask_graphics_273 = new cjs.Graphics().p("AlVItQgagGgbgPIgCgCQghgRgSgUQgbgYAHgPIAZgxIgBAAIGOr6QAQggA3gNQBNg2BdgtIA3ghIAagOIAYgOIACgBIBhAiIBCAXQADAOgBANQACAGgDAFImmMqQgQAhg4AMQhNA2hcAsIgUAMQglAVgiAWQgTAQgUAAQgIAAgHgDg");
	var mask_graphics_274 = new cjs.Graphics().p("AlXI3QgagHgcgPIgCgCQghgSgTgUQgagYAHgPIGps0QARghA3gNQBOg5BdguIA4giIAZgOIAZgPIABgBIBjAiIBDAXQADAPgCANQACAGgDAFImqMzQgQAhg4ANQhOA4hdAuIgUAMQglAWgiAXQgUAPgUAAQgHAAgHgBg");
	var mask_graphics_275 = new cjs.Graphics().p("AlaI/QgbgGgcgPIgCgCQghgSgTgUQgbgZAIgQIGus8QAQgiA4gOQBOg6BegxQAdgRAbgSIAZgPIAZgPIABgBIBlAiIBDAYQADAOgCANQACAHgDAEImvM9QgRAig3ANQhOA6heAwIgUAMQglAXgjAYQgTAQgVAAQgHAAgHgCg");
	var mask_graphics_276 = new cjs.Graphics().p("AldJIQgagGgdgQIgCgBQgigTgTgUQgagZAHgQIGytGQARgiA4gPQBPg8BegyIA4gkIAagQIAZgQIABgBIBlAiIBFAYQACAPgCANQACAHgDAEImzNGQgRAig4AOQhOA8heAyIgUANQgmAYgjAYQgUARgVAAQgHAAgHgCg");
	var mask_graphics_277 = new cjs.Graphics().p("AlgJRQgbgHgcgPIgDgCQgigSgTgVQgbgZAIgQIAZgzIAAAAIGescQARgjA3gQQBQg+Beg0IA5glIAagQIAZgRIABgBIBnAjIBFAYQACAPgCANQABAGgCAFIm3NPQgSAjg4APQhPA+heAzIgUANQgmAZgjAZQgUASgWAAQgHAAgHgCg");
	var mask_graphics_278 = new cjs.Graphics().p("AljJaQgbgHgdgPIgCgCQgjgTgTgVQgbgZAIgRIG7tYQARgjA4gRQBQg/Bfg2QAdgTAbgUIAbgRIAZgRIABgBIBoAjIBGAYQACAPgCAOQABAGgDAFIm7NYQgSAkg4APQhPBAhfA1IgUAOQgmAZgjAaQgVATgWAAQgHAAgHgCg");
	var mask_graphics_279 = new cjs.Graphics().p("AlmJjQgbgHgdgQIgDgCQgigTgUgVQgbgaAIgQIG/thQASgkA3gSQBRhBBfg4QAegTAbgVIAagRIAagSIABgBIBpAjIBHAZQACAPgCAOQABAGgDAFInANhQgSAkg4ARQhQBBhfA3IgVAOQgmAbgjAaQgUAUgXAAQgHAAgHgCg");
	var mask_graphics_280 = new cjs.Graphics().p("AlpJsQgbgHgegQIgDgCQgigTgUgWQgbgaAHgRIAbg0IgBAAIGqs2QATgkA3gSQBRhEBgg5IA5gpIAagSIAagSIABgBIBqAjIBIAYQACAPgCAPQABAGgDAFInFNqQgSAlg4ARQhQBDhgA5IgVAPQgmAbgjAcQgVATgXAAQgHAAgHgBg");
	var mask_graphics_281 = new cjs.Graphics().p("AlrJ0QgcgGgegQIgDgCQgjgUgUgWQgbgaAIgRIAag1IAAAAIGus+QATglA3gTQBShFBgg8IA5gqIAbgTIAZgSIACgBIBrAjIBJAYQABAQgCAOQABAHgDAFInJNzQgTAmg4ASQhRBFhfA6IgVAPQgnAcgjAdQgWAUgXAAQgGAAgHgCg");
	var mask_graphics_282 = new cjs.Graphics().p("AluJ9QgcgGgfgRIgCgCQgkgTgUgWQgbgbAIgRIHMt8QATgmA4gUQBShHBgg9QAegWAcgWIAbgTIAagTIABgBIBtAjIBJAZQABAQgCAOQABAHgDAFInON8QgTAmg4ATQhRBHhgA8IgVAQQgnAdgkAdQgVAVgYAAQgGAAgHgCg");
	var mask_graphics_283 = new cjs.Graphics().p("AlxKGQgcgHgfgQIgDgCQgkgUgUgWQgcgbAJgSIHRuFQATgnA3gUQBThJBhg/QAegWAcgXIAbgTIAagUIABgBIBuAkIBKAYQABAQgDAPQABAHgDAFInROFQgUAng4AUQhSBIhgA+IgVAQQgnAegkAeQgWAWgYAAQgGAAgHgCg");
	var mask_graphics_284 = new cjs.Graphics().p("AlzKPQgdgHgfgQIgDgCQgkgUgVgXQgbgbAIgSIHVuOQAUgoA3gVQBThKBihBIA6guIAbgUIAagVIACgBIBvAkIBKAZQABAQgCAPQAAAHgDAFInVOOQgUAog4AUQhTBKhhBBIgVAQQgnAegkAfQgXAXgYAAQgGAAgGgCg");
	var mask_graphics_285 = new cjs.Graphics().p("Al2KYQgdgHgggRIgDgCQgkgUgVgXQgcgbAJgSIAbg4IAAAAIG/tgQATgoA4gWQBUhMBhhDQAfgXAcgYIAbgVIAagVIACgBIBwAkIBLAZQABARgDAPQABAHgDAFInaOXQgUAog4AWQhTBLhiBDIgVAQQgnAggkAfQgXAYgZAAQgGAAgGgCg");
	var mask_graphics_286 = new cjs.Graphics().p("Al6KhQgdgHgggRIgDgCQglgUgUgYQgcgbAIgTIHeugQAUgpA4gXQBUhOBihEQAfgYAcgZIAcgVIAagVIABgBIByAkIBMAZQABAQgDAQQAAAHgDAFIneOgQgVApg4AWQhTBOhiBEIgVARQgoAggkAhQgXAXgZAAIgNgBg");
	var mask_graphics_287 = new cjs.Graphics().p("Al8KpQgegGgggRIgDgCQglgVgVgXQgcgdAJgSIHiuqQAUgoA4gYQBVhQBihHIA8gxIAbgWIAagWIACgBIByAlIBOAZQAAARgDAPQABAHgEAGInjOoQgUApg4AYQhUBPhjBGIgVARQgoAigkAhQgYAYgZAAIgMgCg");
	var mask_graphics_288 = new cjs.Graphics().p("Al/KzQgegHgggRIgDgCQgmgVgVgYQgcgcAIgTIAdg5IgBAAIHLt6QAVgqA4gYQBVhRBjhJIA8gzIAbgWIAbgXIABgBIB0AlIBOAZQAAARgDAQQAAAHgDAGInnOxQgVArg4AXQhVBShiBHIgWASQgoAiglAiQgXAZgZAAIgNgBg");
	var mask_graphics_289 = new cjs.Graphics().p("AmCK8QgegHghgSIgDgCQgmgVgVgYQgcgcAIgUIAdg5IgBAAIHQuCQAVgrA3gZQBWhTBjhKIA8g0IAcgXIAbgXIABgCIB1AlIBPAaQAAARgDAQQAAAHgDAGInsO6QgVArg4AZQhVBThjBJIgWATQgoAiglAjQgYAagaAAIgMgBg");
	var mask_graphics_290 = new cjs.Graphics().p("AmFLEQgegGgigSIgDgCQgmgVgVgZQgdgcAJgUIHwvFQAVgrA4gaQBWhVBkhMIA8g1IAcgYIAbgXIABgBIB2AlIBQAZQAAARgEARQABAHgEAGInwPDQgVAsg4AZQhWBVhjBMIgWASQgoAkgmAkQgXAZgaAAIgNgBg");
	var mask_graphics_291 = new cjs.Graphics().p("AmILNQgfgGghgSIgDgCQgngWgWgZQgcgdAJgTIH0vOQAWgsA3gbQBXhWBkhOIA9g3IAcgYIAbgYIABgBIB4AlIBQAZQAAASgEAQQAAAIgDAGIn0PMQgWAtg5AaQhWBWhjBOIgWATIhOBJQgYAagbAAIgMgBg");
	var mask_graphics_292 = new cjs.Graphics().p("AmLLWQgfgGgigTIgDgCQgngVgWgZQgcgeAJgUIH4vWQAWgtA4gcQBXhYBlhQQAfgcAegcIAcgYIAbgZIABgBIB5AlIBRAaQAAASgEAQQAAAIgDAGIn5PVQgXAtg4AbQhWBZhkBPIgWATQgpAlgmAmQgYAbgbAAIgMgBg");
	var mask_graphics_293 = new cjs.Graphics().p("AmOLfQgfgHgigSIgDgCQgogWgWgZQgcgeAJgUIAdg8IAAAAIHfukQAXgtA4gcQBXhbBlhSIA+g4IAcgaIAbgZIABgBIB6AmIBSAZQAAASgEARQAAAIgEAGIn9PfQgXAtg4AcQhXBahkBRIgWAUQgpAmgmAmQgYAcgcAAIgMgBg");
	var mask_graphics_294 = new cjs.Graphics().p("AmRLoQgfgHgjgSIgDgDQgogVgWgaQgdgeAKgVIIBvoQAWguA4gdQBYhcBmhUQAfgdAegdIAdgaIAbgaIABgBIB7AmIBTAaQgBASgEARQABAHgEAHIoCPoQgXAug4AcQhXBchlBTIgWAUQgpAngmAnQgZAdgcAAIgMgBg");
	var mask_graphics_295 = new cjs.Graphics().p("AmTLxQgggHgjgTIgEgCQgogWgWgaQgdgeAKgVIIFvyQAXguA4geQBZheBlhWIA+g7IAdgaIAbgaIABgCIB9AmIBTAaQgBATgEARQAAAHgDAHIoGPxQgYAug4AeQhYBdhlBVIgWAVQgpAngnAoQgZAegbAAIgMgBg");
	var mask_graphics_296 = new cjs.Graphics().p("AmWL5QgggGgjgTIgEgCQgogWgXgbQgdgeAKgVIAeg+IAAAAIHsu9QAXgvA4gfQBZhgBmhXIA/g9IAcgaIAcgbIABgBIB+AmIBUAaQgBASgFASQAAAHgDAHIoKP6QgYAvg4AeQhZBfhlBXIgXAWQgpAognApQgZAdgcAAIgMgBg");
	var mask_graphics_297 = new cjs.Graphics().p("AmZMCQgggGgkgTIgDgDQgpgWgXgbQgdgeAKgWIAeg+IAAAAIHwvGQAYgvA3ggQBahhBnhaIA+g9IAdgcIAcgbIABgBIB/AmIBVAaQgBATgFARQAAAIgDAHIoPQDQgYAwg4AfQhZBhhmBYIgXAWIhQBTQgaAegcAAIgMgBg");
	var mask_graphics_298 = new cjs.Graphics().p("AmcMLQghgGgkgUIgDgCQgpgXgXgaQgdgfAKgWIISwNQAYgwA4ghQBahjBnhbIA/g/IAdgcIAcgcIABgBICAAmIBWAbQgBATgFARQAAAIgEAHIoTQMQgYAwg4AgQhaBjhmBaIgXAXQgqApgnArQgaAfgdAAIgLgBg");
	var mask_graphics_299 = new cjs.Graphics().p("AmfMUQghgHgkgTIgDgCQgqgXgXgbQgdgfAKgXIIWwWQAZgxA4ghQBahlBohdIA/hAIAdgcIAcgdIABgBICBAnIBXAaQgBATgFASQAAAIgEAHIoYQVQgYAxg4AhQhaBkhnBcIgXAXQgqArgnArQgaAggeAAIgLgBg");
	var mask_graphics_300 = new cjs.Graphics().p("AmiMdQghgHglgUIgDgCQgqgXgXgbQgeggALgWIAfhAIgBAAIH9vfQAYgyA4giQBchmBnhfIBAhCIAdgdIAcgdIABgBICDAnIBXAbQgCATgEASQgBAIgDAHIocQeQgZAyg4AhQhbBmhnBeIgXAYQgqArgnAsQgbAhgdAAIgMgBg");
	var mask_graphics_301 = new cjs.Graphics().p("AmlMmQghgHglgUIgEgCQgqgXgXgcQgeggAKgWIAghBIgBAAIIBvnQAZgzA4giQBchpBohhIBAhCIAdgeIAcgdIACgCICDAnIBYAbQgCAUgFASQAAAIgEAHIogQnQgZAyg4AiQhcBphnBfIgXAYQgqAsgoAtQgaAigfAAIgLgBg");
	var mask_graphics_302 = new cjs.Graphics().p("AmnMuQgigGgmgUIgDgCQgrgYgXgcQgeggAKgXIIkwxQAZgzA4gjQBdhrBohiIBAhEIAegeIAcgeIACgCICEAoIBZAaQgCAUgFATQAAAIgEAHIolQwQgZAzg5AjQhbBqhoBhIgXAZQgrAtgnAtQgbAjgeAAIgLgCg");
	var mask_graphics_303 = new cjs.Graphics().p("AmqM3QgjgGglgVIgEgCQgrgXgXgdQgeggAKgXIIow6QAag0A4gkQBdhsBphlIBAhFIAegeIAcgfIACgBICFAnIBaAbQgCAUgFATQgBAIgDAHIopQ5QgaA0g5AjQhcBshoBkIgXAYQgrAugoAvQgbAigeAAIgLgBg");
	var mask_graphics_304 = new cjs.Graphics().p("AmtNAQgjgGgmgVIgDgCQgsgYgYgdQgeggALgXIItxEQAag0A4glQBdhuBphmIBBhHIAegfIAcgfIACgBICHAnIBbAbQgDAUgFATQgBAJgEAGIotRDQgaA0g5AlQhcBthpBmIgXAZQgrAugoAwQgcAjgfAAIgKgBg");
	var mask_graphics_305 = new cjs.Graphics().p("AmwNJQgjgGgmgVIgEgDQgrgYgZgcQgeghALgYIAghCIAAAAIIRwKQAag1A4gmQBehwBqhoIBBhHIAdggIAdggIACgBICIAoIBcAbQgDAUgGATQAAAIgEAHIoyRMQgZA1g6AlQhdBvhpBoIgYAZQgqAwgpAwQgbAkgfAAIgLgBg");
	var mask_graphics_306 = new cjs.Graphics().p("AmzNSQgjgHgngVIgEgCQgrgYgZgdQgeghALgYII1xWQAbg1A4gnQBehxBqhqIBChJIAdggIAeghIABgBICJAoIBdAbQgDAVgGATQAAAIgEAHIo3RVQgZA2g6AmQhdBxhqBpIgYAaIhTBhQgcAlgfAAIgLgBg");
	var mask_graphics_307 = new cjs.Graphics().p("Am2NbQgjgHgogVIgDgCQgsgZgZgdQgeghALgZII5xeQAbg2A4goQBfhzBrhsIBBhKIAeghIAeggIABgCICLAoIBdAcQgDAUgGAUQgBAIgEAHIo6ReQgaA2g6AnQheBzhqBrIgYAaQgrAxgoAyQgcAmghAAIgKgBg");
	var mask_graphics_308 = new cjs.Graphics().p("Am4NjQgkgGgogVIgDgDQgtgYgZgeQgegiALgYIAhhEIAAAAIIdwkQAbg2A4gpQBgh1BrhtIBChMIAeghIAdghIACgCICLApIBeAbQgDAVgGAUQgBAIgDAHIo/RnQgbA3g5AoQhfB0hqBtIgYAbQgrAygpAyQgdAnggAAIgKgCg");
	var mask_graphics_309 = new cjs.Graphics().p("Am7NsQgkgGgogWIgEgCQgtgZgZgeQgegiALgYIAhhFIAAAAIIhwsQAcg3A4gqQBgh2BrhwIBChMIAfgiIAdgiIACgCICNApIBeAcQgDAVgGAUQgBAIgEAHIpDRwQgbA4g5AoQhgB2hqBvIgYAbQgsAzgpAzQgdAoggAAIgKgCg");
	var mask_graphics_310 = new cjs.Graphics().p("Am+N1QglgGgogWIgDgCQgugZgZgfQgfgiAMgZIJHx5QAbg5A5gpQBgh5BshyIBChNIAfgiIAdgjIACgBICOAoIBgAcQgEAVgGAUQgBAJgEAHIpIR5QgbA4g5AqQhgB4hrBwIgYAcQgsAzgpA1QgdAnghAAIgKgBg");
	var mask_graphics_311 = new cjs.Graphics().p("AnBN+QglgGgogWIgEgDQgugZgZgfQgfgiAMgZIJLyDQAcg5A4gqQBhh7BshzIBDhPIAfgjIAdgjIACgBICPApIBhAcQgEAVgGAUQgBAJgEAHIpNSCQgbA5g5AqQhhB6hrByIgYAcQgsA1gqA1QgdAoghAAIgKgBg");
	var mask_graphics_312 = new cjs.Graphics().p("AnEOHQglgHgpgWIgEgCQgugZgZgfQgfgjAMgaIJPyLQAdg6A4grQBhh8Bth2IBDhQIAfgjIAegkIABgBICRApIBhAcQgEAWgHAUQgBAJgEAHIpQSLQgcA6g5AqQhhB8hsB0IgYAdQgsA1gqA2QgdApgiAAIgKgBg");
	var mask_graphics_313 = new cjs.Graphics().p("AnHOQQglgHgpgWIgEgCQgvgagZgfQgfgjAMgaIAihHIgBAAIIyxOQAdg6A4gsQBih+Bth3IBEhRIAfgkIAegkIABgCICSApIBiAcQgEAWgHAVQgBAJgEAHIpVSUQgcA6g6AsQhhB9hsB2IgYAdQgtA2gqA3QgdAqgiAAIgKgBg");
	var mask_graphics_314 = new cjs.Graphics().p("AnKOYQglgGgqgWIgEgDQgugagagfQgggjAMgaIJZyeQAdg7A4gtQBiiABuh5IBEhSIAeglIAfgkIABgBICTApIBjAcQgEAWgHAVQgBAJgEAHIpaSdQgcA7g6AsQhhCAhtB3IgZAeIhWBuQgeAqghABIgLgCg");
	var mask_graphics_315 = new cjs.Graphics().p("AnNOiQgmgHgqgWIgDgDQgvgagagfQgggkAMgaIJdynQAdg7A4guQBjiCBuh7IBEhTIAfglIAfgmIABgBICUApIBkAdQgEAWgHAVQgCAJgEAIIpdSlQgdA8g6AtQhiCBhtB6IgZAeQgsA4gqA4QgeAqgiAAIgLAAg");
	var mask_graphics_316 = new cjs.Graphics().p("AnQOrQgmgHgqgXIgEgCQgvgagbggQgfgkAMgbIAjhIIAAAAII+xoQAeg8A4guQBkiEBuh8IBEhVIAfgmIAfglIABgCICWAqIBkAcQgEAXgIAVQgBAJgEAIIpiSuQgdA9g6AuQhiCDhuB7IgZAeQgsA5grA5QgeArgjAAIgKAAg");
	var mask_graphics_317 = new cjs.Graphics().p("AnTOzQgmgGgrgXIgEgCQgvgbgbggQgfgkAMgbIAjhJIAAAAIJCxwQAeg9A5gvQBkiFBuh/IBFhWIAfgmIAfgmIABgCICXAqIBlAdQgEAWgIAWQgBAJgEAIIpnS3QgdA9g6AvQhjCFhuB9IgZAfQgtA5gqA6QgfAsgiAAIgLgBg");
	var mask_graphics_318 = new cjs.Graphics().p("AnWO8QgmgGgrgXIgEgDQgwgagbghQgfgkAMgbIJqzCQAeg+A4gwQBliHBviAIBFhXIAfgnIAfgnIACgCICXArIBmAcQgEAXgIAWQgBAJgFAIIpqTBQgeA9g6AwQhjCGhvB/IgZAfQgtA7grA6QgeAtgjAAIgLgBg");
	var mask_graphics_319 = new cjs.Graphics().p("AnYPFQgngGgrgYIgEgCQgxgbgaghQgggkAMgcIJuzLQAfg+A4gxQBliJBviCIBGhYIAggoIAfgnIABgCICZArIBnAdQgGAXgHAWQgBAJgFAIIpvTKQgeA+g5AwQhlCIhuCBIgZAgQgtA7gsA7QgfAugkAAIgJgBg");
	var mask_graphics_320 = new cjs.Graphics().p("AnbPOQgngGgsgYIgEgCQgxgbgagiQgggkAMgcIJyzUQAfg/A5gyQBliKBwiEIBGhaIAggoIAfgoIABgBICaAqIBoAdQgFAXgIAWQgCAKgEAIIpzTTQgfA+g5AyQhlCJhvCDIgZAgQguA8grA9QggAtgjAAIgKAAg");
	var mask_graphics_321 = new cjs.Graphics().p("AnfPXQgngGgsgYIgEgDQgxgbgbgiQggglANgcIAkhLIgBAAIJTySQAfg/A5gzQBmiMBwiGIBGhbIAggoIAfgoIACgCICbArIBpAdQgGAXgIAWQgBAJgFAJIp4TcQgeA/g6AyQhlCMhwCEIgZAhQgtA8gsA+QgfAuglAAIgKAAg");
	var mask_graphics_322 = new cjs.Graphics().p("AnhPgQgogHgsgYIgFgCQgxgbgbgiQgggmANgcIAkhMIgBAAIJXyaQAfhAA6g0QBmiOBwiHIBHhcIAggpIAfgpIACgCICcArIBqAdQgGAYgIAWQgCAJgEAJIp8TlQgfBAg6AzQhmCNhwCHIgZAgQguA+grA+QggAvglAAIgJAAg");
	var mask_graphics_323 = new cjs.Graphics().p("AnkPoQgogGgtgYIgEgDQgxgbgcgiQgggmANgcIJ/zwQAfhAA6g0QBniQBwiKIBHhdIAggqIAggpIABgCICeArIBqAeQgFAXgJAXQgBAJgFAJIqBTuQgfBAg5A0QhnCPhwCJIgaAhIhZB9QggAwglAAIgKgBg");
	var mask_graphics_324 = new cjs.Graphics().p("AnnPxQgogGgtgYIgEgDQgygcgcgiQgggmANgdIAlhNIgBAAIJfyrQAghBA5g1QBoiSBxiLIBHhfIAggqIAggqIACgCICeAsIBrAdQgFAYgJAXQgCAJgEAJIqFT3QggBBg6A1QhmCQhxCLIgaAhQguA/gsBAQggAxglAAIgKgBg");
	var mask_graphics_325 = new cjs.Graphics().p("AnqP6QgogGgugZIgEgCQgygcgcgjQghgmAOgdIAlhOIgBAAIJky0QAfhBA6g2QBoiUBxiNIBIhgIAggqIAggrIACgCICgAsIBrAdQgGAZgIAXQgCAJgFAJIqJUAQggBCg6A1QhnCThxCMIgaAiQguBAgsBAQghAyglAAIgKgBg");
	var mask_graphics_326 = new cjs.Graphics().p("AntQDQgogGgugZIgFgDQgygcgcgjQghgmAOgeIAlhOIgBAAIJoy8QAghCA5g3QBpiVByiPIBIhhIAggsIAggrIACgCIChAsIBsAeQgGAYgIAYQgCAJgFAJIqOUJQggBCg6A2QhnCVhyCOIgaAiQguBBgtBBQggAzgmAAIgKgBg");
	var mask_graphics_327 = new cjs.Graphics().p("AnwQMQgpgGgugZIgEgDQgzgcgcgkQghgmANgeIKR0UQAhhDA5g3QBpiXByiRQAlgxAkgxIAggsIAggrIACgCICiAsIBuAdQgHAZgJAXQgCAKgEAJIqSUSQghBDg6A3QhoCWhyCQIgaAjQguBBgtBDQghAygmAAIgKAAg");
	var mask_graphics_328 = new cjs.Graphics().p("AnzQVQgpgHgugZIgFgCQgzgdgcgjQghgnANgeIKV0dQAhhEA6g4QBpiZBziTIBIhjIAhgsIAggsIACgCICkAsIBuAeQgHAYgJAYQgCAKgFAJIqWUbQghBEg6A3QhpCYhyCSIgaAjQgvBDgtBDQghAzgmAAIgKAAg");
	var mask_graphics_329 = new cjs.Graphics().p("An1QdQgqgGgvgZIgEgDQg0gcgdgkQghgoAOgeIAmhQIAAAAIJ0zVQAhhFA5g5QBqiaBziVIBJhlIAhgsIAggtIACgCIClAsIBvAeQgHAZgJAYQgCAKgFAJIqbUkQghBEg6A5QhpCahzCTIgaAkQgvBDgtBEQghA0gmAAIgKgBg");
	var mask_graphics_330 = new cjs.Graphics().p("An4QmQgqgGgvgZIgFgDQg0gdgdgkQghgoAOgeIAmhRIAAAAIJ4zeQAhhFA6g6QBqicB0iXIBJhlIAhguIAggtIACgCICmAtIBwAeQgHAZgJAYQgDAKgEAJIqfUtQgiBFg6A5QhqCchzCVIgaAkQgvBEgtBFQgiA1gnAAIgJgBg");
	var mask_graphics_331 = new cjs.Graphics().p("An7QvQgqgGgwgaIgEgCQg1gdgcglQgigoAOgfIKj03QAhhGA6g6QBrifB0iYIBJhnIAiguIAgguIACgCICnAtIBwAeQgHAZgJAZQgCAKgFAJIqkU2QgiBGg5A6QhrCdhzCXIgaAlQgwBFgtBFQgiA2goAAIgJgBg");
	var mask_graphics_332 = new cjs.Graphics().p("An+Q4QgqgGgwgaIgFgDQg0gdgdglQgigoAOgfIAnhSIAAAAIKAzvQAihGA5g7QBsigB0ibIBKhoIAhguIAhgvIACgCICoAtIBxAfQgHAZgJAZQgDAJgEAKIqoU/QgjBGg5A7QhrCfh0CZIgbAlQgvBGguBGQgiA3gnAAIgKgBg");
	var mask_graphics_333 = new cjs.Graphics().p("AoBRBQgrgGgwgaIgFgDQg1gegdglQgigoAPgfIAnhTIgBAAIKFz3QAihHA6g8QBsiiB0icIBKhqIAigvIAhguIABgDICqAuIByAeQgHAagKAYQgCAKgFAJIqtVJQgiBHg6A8QhrCgh0CbIgbAmQgwBGguBHQgiA4goAAIgJgBg");
	var mask_graphics_334 = new cjs.Graphics().p("AoERKQgrgGgxgbIgEgDQg2gdgdgmQgigoAPggIAnhSIgBAAIKJ0BQAjhHA5g9QBtikB1ieQAmg1Akg1IAigwIAhgvIABgCICrAtIBzAfQgHAZgKAZQgDAKgFAJIqwVSQgjBIg6A8QhsCjh0CdIgbAlIheCQQgiA3gpAAIgJAAg");
	var mask_graphics_335 = new cjs.Graphics().p("AoGRSQgsgGgxgaIgEgDQg2gegeglQgigpAPggIAnhTIKN0JQAjhIA5g+QBtilB2igIBKhsIAigwIAhgwIACgCICsAtIB0AfQgIAagKAZQgCAKgFAJIq2VbQgjBIg6A+QhsCkh1CfIgbAmIheCRQgjA4goAAIgJgBg");
	var mask_graphics_336 = new cjs.Graphics().p("AoJRbQgsgGgxgaIgFgDQg2gegegmQgigpAPghIK41lQAjhIA6g/QBtinB2iiIBLhtIAigwIAhgxIACgCICtAuIB1AeQgIAbgKAZQgDAKgFAJIq5VkQgkBJg6A+QhsCmh2ChIgbAmIhfCTQgjA5goAAIgJgBg");
	var mask_graphics_337 = new cjs.Graphics().p("AoMRkQgsgGgygbIgFgDQg2gegegmQgigqAPggIAohUIgBAAIKV0aQAkhJA5hAQBvipB2ijIBLhvIAigxIAigxIABgCICvAuIB1AfQgIAagKAaQgDAKgFAJIq+VtQgkBKg6A+QhtCoh2CjIgbAnQgwBKgvBKQgjA6gpAAIgJgBg");
	var mask_graphics_338 = new cjs.Graphics().p("AoPRtQgsgGgygbIgFgDQg3gegegnQgigqAPggIAohVIgBAAIKZ0iQAkhLA6hAQBviqB2imQAng3Alg4IAigyIAigyIABgCICwAuIB2AfQgIAbgKAaQgDAKgFAJIrDV2QgkBKg6BAQhuCqh2CkIgbAnIhfCWQgjA7gqAAIgJgBg");
	var mask_graphics_339 = new cjs.Graphics().p("AoSR2QgtgGgygcIgFgCQg3gfgegnQgjgqAQghIAohVIKd0rQAkhLA6hBQBvisB3inIBMhxIAigyIAigyIABgDICxAvIB3AfQgIAbgLAaQgDAKgFAJIrGV/QglBLg6BAQhuCsh3CmIgbAoQgxBLgvBMQgkA8gpAAIgJgBg");
	var mask_graphics_340 = new cjs.Graphics().p("AoVR/QgtgGgzgcIgEgDQg4gegegoQgjgqAPghIAphWIAAAAIKh0zQAkhMA6hBQBwivB3ipIBNhyIAigzIAigyIABgCICzAuIB3AfQgIAbgLAaQgDALgFAJIrLWIQglBMg6BBQhvCth2CoIgcApQgxBMgvBNQgkA7gqAAIgJAAg");
	var mask_graphics_341 = new cjs.Graphics().p("AoYSHQgtgGgzgbIgFgDQg4gfgegoQgjgqAPgiIAphWIAAAAIKl08QAlhMA6hCQBwiwB4irQAng6Alg6IAjgzIAigzIACgCICzAuIB4AgQgIAbgLAaQgDALgFAJIrQWRQglBMg6BCQhvCvh3CqIgcApIhhCbQgjA8grAAIgJgBg");
	var mask_graphics_342 = new cjs.Graphics().p("AobSQQgtgGg0gcIgFgCQg4gggfgnQgigrAPgiIAphXIAAAAIKp1EQAmhNA5hDQBxiyB4itIBNh0IAjg0IAig0IACgCIC0AvIB5AfQgIAbgLAbQgEALgFAJIrTWaQgmBNg6BDQhwCxh3CrIgcAqIhhCcQgkA9grAAIgJgBg");
	var mask_graphics_343 = new cjs.Graphics().p("AodSZQgugGg0gcIgFgDQg4gfgfgoQgjgrAQgiIAphYIKt1NQAmhNA5hEQByi0B4iuIBNh2IAjg0IAjg1IABgCIC2AvIB6AgQgJAbgLAbQgDAKgFAKIrZWjQglBOg6BDQhxCzh4CtIgcAqQgxBPgwBPQglA+grAAIgIgBg");
	var mask_graphics_344 = new cjs.Graphics().p("AogSiQgugGg0gcIgFgDQg5gggfgoQgjgrAPgjIAqhYIAAAAIKx1VQAmhOA6hFQByi1B5ixIBNh3IAjg1IAjg1IABgCIC3AvIB7AgQgJAcgLAbQgEAKgFAKIrcWsQgmBOg6BFQhxC0h5CvIgcArQgxBPgwBQQglA/grAAIgJgBg");
	var mask_graphics_345 = new cjs.Graphics().p("AokSrQgugGg0gdIgFgDQg6gfgfgpQgjgrAQgjIAqhZIgBAAIK21eQAmhOA6hGQByi3B6izIBOh4IAjg1IAig1IACgDIC4AwIB8AgQgKAbgLAcQgDAKgGAKIrgW1QgnBPg6BFQhxC2h5CxIgcArQgyBQgwBRQglBAgsAAIgJgBg");
	var mask_graphics_346 = new cjs.Graphics().p("AomS0QgvgGg0gdIgFgDQg6gggggpQgjgsAQgjIAqhZIAAAAIK61mQAmhPA6hHQBzi5B6i0IBOh5IAjg2IAjg2IABgDIC6AwIB8AgQgJAcgMAbQgDALgFAKIrlW+QgoBQg6BGQhyC3h5CzIgcAsQgyBRgwBRQgmBBgsAAIgIgBg");
	var mask_graphics_347 = new cjs.Graphics().p("AopS8QgvgGg1gcIgFgDQg6gggggqQgjgsAQgjIAqhaIK+1uQAnhQA6hIQBzi6B6i3IBPh6IAjg3IAjg2IACgCIC6AvIB9AgQgJAdgMAbQgDALgGAKIrpXHQgoBQg6BHQhyC6h6C1IgcArQgyBSgxBTQglBAgtAAIgIgBg");
	var mask_graphics_348 = new cjs.Graphics().p("AosTFQgvgGg2gdIgFgDQg6gggggpQgjgtAQgjIAqhbILC13QAnhQA6hJQB0i8B7i4QAog+Amg+IAkg3IAjg3IACgCIC7AwIB+AgQgJAcgMAcQgEALgFAKIrtXQQgpBRg6BIQhzC7h6C3IgcAsQgyBSgxBUQgmBBgtAAIgIgBg");
	var mask_graphics_349 = new cjs.Graphics().p("AovTOQgvgGg2gdIgFgDQg7ghgggpQgjgtAQgkIArhbIgBAAILG1/QAohSA6hIQB0i/B7i6IBPh8IAkg4IAjg4IACgCIC9AwIB+AgQgKAdgLAcIgJAVIryXZQgpBSg6BIQhzC9h6C5IgdAsIhkCoQglBCgtAAIgJgBg");
	var mask_graphics_350 = new cjs.Graphics().p("AoyTXQgvgFg3geIgFgDQg7ghgggqQgkgtARgkIArhbIgBAAILL2IQAohSA5hKQB1jAB8i8IBPh+IAkg4IAjg4IACgDIC+AxIB/AgQgKAdgMAcQgDALgGALIr2XiQgpBSg6BJQh0C/h6C6IgdAtIhkCpQgmBDgtAAIgJgBg");
	var mask_graphics_351 = new cjs.Graphics().p("Ao1TgQgwgGg2geIgFgDQg8ghgggqQgkgtARglIArhcILO2QQAohTA6hKQB1jCB8i+IBQh/IAkg5IAjg4IACgDIC/AxICBAgQgLAdgMAdQgEALgFAKIr6XrQgqBTg6BKQh0DBh7C8IgdAtIhkCrQgnBEgtAAIgJgBg");
	var mask_graphics_352 = new cjs.Graphics().p("Ao4TpQgwgGg3geIgFgDQg8ghgggrQgkgtARglIArhdIAAAAILS2ZQAphTA6hLQB2jEB8i/IBQiBIAkg5IAjg5IACgDIDAAxICCAhQgLAdgMAdQgEALgFAKIr/X0QgqBTg6BLQh1DDh7C+IgdAuQgzBWgyBWQgmBFguAAIgJgBg");
	var mask_graphics_353 = new cjs.Graphics().p("Ao7TyQgwgGg3geIgGgDQg8ghgggrQgkguAQglIAshdIAAAAILW2iQAphTA6hMQB3jGB8jBIBQiCIAlg6IAjg6IACgCIDCAxICCAhQgLAdgMAdQgEALgGALIsDX9QgqBUg6BLQh1DFh8DAIgdAuIhlCuQgnBEguAAIgJAAg");
	var mask_graphics_354 = new cjs.Graphics().p("Ao+T6QgwgGg4geIgFgDQg9ghghgsQgkguARglIAshdIAAAAILb2rQAphUA6hNQB3jHB9jDIBQiDIAlg7IAjg6IACgCIDDAxICDAhQgLAdgNAdIgJAWIsHYGQgrBVg6BMQh2DGh8DCIgdAvQg0BXgyBZQgmBFgvAAIgJgBg");
	var mask_graphics_355 = new cjs.Graphics().p("ApBUDQgxgGg4geIgFgDQg9gighgrQgkgvARglIAsheILf2zQAphVA6hOQB4jJB9jFIBRiEIAlg7IAkg7IABgCIDEAxICEAhIgYA7IgJAWIsMYPQgrBVg6BOQh2DHh9DEIgdAvIhmCyQgnBGgvAAIgJgBg");
	var mask_graphics_356 = new cjs.Graphics().p("ApDUMQgxgFg5gfIgFgDQg9gighgsQglguASgmIAshfILj27QAphWA6hOQB4jLB+jHIBRiFIAlg8IAkg7IACgDIDFAyICEAhQgLAegNAdQgEAMgFALIsQYYQgrBWg6BOQh4DJh9DGIgdAvIhmCzQgnBHgvAAIgJgBg");
	var mask_graphics_357 = new cjs.Graphics().p("ApGUVQgygGg5gfIgFgDQg+gighgsQgkgvARgmIAthfIgBAAILn3EQArhWA6hPQB4jNB+jJIBSiGIAlg9IAkg7IABgDIDHAyICFAhQgLAegNAeQgEALgGALIsVYhQgrBXg6BPQh4DLh9DHIgdAwIhnC1QgnBIgvAAIgJgBg");
	var mask_graphics_358 = new cjs.Graphics().p("ApJUeQgygGg5gfIgFgDQg+gjgigsQgkgvARgmIAthgIAAAAILr3MQArhXA6hQQB5jPB+jKIBSiIIAlg9IAkg8IACgDIDIAyICGAhQgMAfgNAeIgKAWIsZYqQgrBXg7BQQh4DNh9DJIgeAxIhnC2QgoBJgvAAIgJgBg");
	var mask_graphics_359 = new cjs.Graphics().p("ApMUnQgygGg5gfIgGgDQg+gjgigsQgkgwARgmIAthhILv3UQArhYA6hRQB6jQB/jMIBSiJIAlg+IAkg9IACgCIDJAyICHAhQgMAfgNAeQgEAMgGALIseYzQgrBYg7BQQh4DPh+DLIgeAxIhnC4QgoBIgwAAIgJAAg");
	var mask_graphics_360 = new cjs.Graphics().p("ApPUwQgygGg6gfIgFgEQg/gigigtQglgwASgnIAuhhIgBAAIL03dQArhYA6hSQB6jSB/jOIBTiKIAlg+IAkg9IACgDIDKAyICIAiQgMAfgNAeIgLAXIshY8QgsBYg7BSQh5DQh+DNIgeAxQg1BdgzBdQgoBJgwAAIgJAAg");
	var mask_graphics_361 = new cjs.Graphics().p("ApSU4QgygGg6gfIgGgDQg/gjgiguQglgvASgnIAuhiIgBAAIL43mQArhZA6hSQB7jUCAjQIBSiLIAmg/IAlg+IABgCIDLAyICJAiQgMAfgOAeIgKAXIsmZFQgsBZg7BTQh5DSh/DPIgeAxIhoC8QgpBKgwAAIgJgBg");
	var mask_graphics_362 = new cjs.Graphics().p("ApUVCQgzgGg7ggIgFgDQhAgjgiguQglgwASgnIAuhiIgBAAIL83vQAshZA6hTQB7jWCAjSIBTiNIAmg+IAlg/IABgDIDNAzICJAiIgaA+IgKAXIsrZOQgsBag7BTQh6DUh/DQIgeAyIhpC9QgpBLgwAAIgIAAg");
	var mask_graphics_363 = new cjs.Graphics().p("ApXVKQg0gGg7gfIgFgEQhAgjgiguQglgwASgoIAuhiIL/33QAshaA7hUQB7jYCBjUIBTiNIAmhAIAlg/IABgDIDOAzICKAiQgMAggOAeQgFAMgGALIsuZYQguBag6BUQh6DWiADSIgeAzIhpC+QgpBMgxAAIgIgBg");
	var mask_graphics_364 = new cjs.Graphics().p("ApaVTQg0gGg7ggIgGgDQhAgkgiguQgmgxATgoIAuhjIME3/QAshbA6hVQB8jZCBjWIBUiPIAmhAIAlg/IACgDIDOAzICLAiQgMAggOAfQgFAMgGALIszZgQguBbg6BVQh7DYiADUIgeAzIhqDAQgpBNgxAAIgIgBg");
	var mask_graphics_365 = new cjs.Graphics().p("ApdVcQg0gGg8ggIgFgDQhBgkgiguQgmgxATgpIAuhjIAAAAIMI4IQAthcA6hVQB8jbCCjYIBUiQIAmhAIAlhBIACgCIDQAzICLAiQgMAggPAfIgKAXIs4ZqQguBcg6BVQh8DZiADWIgeA0IhqDCQgpBMgyAAIgIAAg");
	var mask_graphics_366 = new cjs.Graphics().p("ApgVlQg0gGg8ggIgFgEQhBgjgjgvQgmgxATgpIAvhkIgBAAIMN4QQAthdA6hWQB9jdCCjZIBUiSIAmhBIAlhAIACgDIDRAzICNAjQgNAfgOAgIgLAXIs8ZzQguBcg6BWQh9DciBDYIgeAzIhqDEQgqBNgyAAIgIAAg");
	var mask_graphics_367 = new cjs.Graphics().p("ApjVuQg0gGg8ghIgGgDQhBgkgjgvQgmgyATgoIAvhlIgBAAIMR4ZQAthdA6hXQB+jeCCjcIBViSIAmhCIAmhBIABgDIDTA0ICNAiIgbBAIgLAXItBZ8QguBdg6BXQh9DdiBDaIgfA0IhqDFQgqBOgzAAIgIAAg");
	var mask_graphics_368 = new cjs.Graphics().p("ApmV3Qg1gGg8ghIgGgDQhBglgkgvQgmgyATgpIAwhlIgBAAIMV4hQAtheA7hYQB+jgCCjdIBViUIAmhCIAmhCIACgDIDTA0ICPAiIgcBBIgLAXItFaFQgvBeg6BXQh9DfiCDcIgfA0IhqDHQgqBPgzAAIgIAAg");
	var mask_graphics_369 = new cjs.Graphics().p("AppV/Qg1gFg9ghIgGgEQhBgkgkgwQgmgyATgpIAwhmIgBAAIMZ4qQAuheA6hZQB/jiCDjfIBViVIAmhDIAmhCIACgDIDVA0ICPAjIgcBAQgFANgHALItJaOQgvBeg6BZQh+DgiCDeIgfA1IhrDIQgqBQgyAAIgJgBg");
	var mask_graphics_370 = new cjs.Graphics().p("AprWIQg2gGg9ghIgGgDQhCglgjgwQgngyATgqIAwhmIAAAAIMd4yQAuhfA6hZQB/jkCEjhIBViXIAnhDIAmhDIACgDIDWA1ICPAiQgNAhgPAgIgLAYItOaXQgvBfg7BZQh+DiiCDgIgfA1IhsDKQgqBRg0AAIgHgBg");
	var mask_graphics_371 = new cjs.Graphics().p("ApuWRQg2gGg+ghIgFgEQhDgkgkgxQgmgyATgqIAwhnIAAAAIMh47QAuhfA7haQB/jmCEjjIBWiXIAnhEIAmhEIACgCIDXA0ICQAjQgNAhgPAgIgMAYItRagQgwBgg7BaQh+DkiDDhIgfA2IhsDMQgrBQg0AAIgHAAg");
	var mask_graphics_372 = new cjs.Graphics().p("ApxWaQg2gGg+ghIgGgEQhDglgkgwQgmgzATgqIAwhoIMl5DQAvhgA6hbQCAjoCFjkIBWiZIAnhEIAmhEIACgDIDYA0ICRAjQgNAhgQAhQgFAMgGAMItWapQgwBgg7BbQh/DmiDDjIgfA2IhtDOQgqBRg0AAIgIAAg");
	var mask_graphics_373 = new cjs.Graphics().p("Ap0WjQg2gGg/giIgGgDQhDglgkgxQgmgzATgrIAxhoIgBAAIMp5MQAwhgA6hcQCBjpCEjnIBXiaIAnhFIAmhEIACgDIDZA1ICSAjIgdBCIgLAYItbayQgwBhg7BcQh/DniEDlIgfA3IhtDPQgrBSg0AAIgIAAg");
	var mask_graphics_374 = new cjs.Graphics().p("Ap3WsQg3gGg+giIgGgEQhEglgkgxQgngzAUgrIAxhpIgBAAIMu5UQAvhhA7hdQCBjrCFjoIBWicIAohFIAmhFIACgDIDbA1ICTAjIgeBDQgFAMgHAMItfa7QgwBig7BcQiADpiEDnIgfA3IhtDRQgsBTg0AAIgIAAg");
	var mask_graphics_375 = new cjs.Graphics().p("Ap6W0Qg3gFg/giIgGgEQhEglgkgyQgng0AUgqIAxhqIgBAAIMy5cQAwhiA6heQCCjtCFjqIBXicIAohGIAmhGIACgDIDcA1ICUAkIgeBDIgMAYItjbEQgxBig7BdQiBDsiEDoIgfA4Qg4Bpg2BpQgrBUg1AAIgIgBg");
	var mask_graphics_376 = new cjs.Graphics().p("Ap9W9Qg3gGg/giIgGgDQhEgmglgyQgng0AUgrIAxhqIAAAAIM15lQAwhjA7heQCCjuCGjsIBXieIAnhHIAnhGIACgDIDdA2ICVAjIgfBDIgLAZItobNQgxBjg7BeQiBDtiFDqIggA4IhtDUQgsBVg1AAIgIgBg");
	var mask_graphics_377 = new cjs.Graphics().p("AqAXGQg3gGhAgiIgGgEQhEgmglgyQgng0AUgrIAxhrIAAAAIM55tQAxhkA6hfQCDjwCGjuIBYifIAnhHIAnhHIACgDIDfA2ICVAkQgPAigQAhIgMAZItsbWQgxBkg7BeQiCDviFDsIggA5IhuDVQgrBWg2AAIgIgBg");
	var mask_graphics_378 = new cjs.Graphics().p("AqDXPQg3gGhBgjIgGgDQhEgmglgyQgng1AUgsIAxhrIAAAAIM952QAxhkA7hgQCDjyCGjvIBZigIAnhIIAnhHIACgDIDgA1ICWAkIgfBEIgMAZItwbfQgyBkg7BgQiCDwiGDvIggA4IhuDYQgsBVg1AAIgJAAg");
	var mask_graphics_379 = new cjs.Graphics().p("AqFXYQg4gGhBgjIgGgDQhFgnglgyQgng1AUgsIAyhsIgBAAINC5+QAxhlA7hgQCEj0CGjyIBZihIAohIIAnhIIACgDIDhA2ICWAjIgfBFIgMAZIt1boQgyBlg7BgQiCDziGDwIggA5IhvDZQgtBWg2AAIgHAAg");
	var mask_graphics_380 = new cjs.Graphics().p("AqJXhQg4gGhBgjIgGgEQhFgmgmgzQgng1AUgsIAyhtING6HQAyhlA6hhQCEj2CHj0IBZiiIAohJIAohIIABgDIDiA2ICYAkIgfBFIgNAZIt5bxQgzBmg6BhQiDD0iHDyIggA5IhvDbQgtBXg2AAIgIAAg");
	var mask_graphics_381 = new cjs.Graphics().p("AqLXpQg4gFhCgkIgGgDQhGgnglgzQgog1AVgtIAyhtIgBAAINL6PQAyhmA6hiQCEj4CIj1IBaikIAohJIAnhJIACgDIDjA2ICZAkIghBGQgFANgHAMIt9b6Qg0Bmg6BiQiDD2iHD0IghA6IhvDcQgtBYg2AAIgIgBg");
	var mask_graphics_382 = new cjs.Graphics().p("AqOXyQg5gGhBgjIgGgEQhHgmglg0Qgog1AVgtIAyhtIgBAAINO6ZQAzhmA7hjQCEj5CIj4IBaikIAphKIAnhKIACgDIDkA3ICaAkIghBFIgMAaIuCcDQgzBng7BjQiED3iHD2IggA6IhwDeQgtBZg4AAIgHgBg");
	var mask_graphics_383 = new cjs.Graphics().p("AqRX7Qg5gGhCgjIgGgEQhHgngmg0Qgng1AUguIAzhtIAAAAINS6hQAzhnA6hkQCGj7CIj5IBaimIAphLIAnhKIACgDIDmA3ICaAkIghBGIgMAaIuGcMQg0Bog7BjQiFD5iHD4IggA7IhxDfQgtBag3AAIgIgBg");
	var mask_graphics_384 = new cjs.Graphics().p("AqUYEQg5gGhCgkIgHgDQhGgngng1Qgng2AUgtIA0huIgBAAINW6pQAzhoA7hlQCGj9CJj7IBainIAphLIAnhKIACgDIDnA2ICbAlQgQAjgRAjIgMAaIuLcVQg0Bog7BlQiFD7iID5IggA8IhxDhQgtBZg4AAIgIAAg");
	var mask_graphics_385 = new cjs.Graphics().p("AqXYNQg5gGhDgkIgGgEQhHgngng0Qgog3AVgtIA0hvIgBAAINb6yQAzhoA6hmQCHj+CJj9IBbipIAohLIAphLIABgDIDoA3ICcAkIghBHIgNAaIuPceQg0Bpg7BlQiGD9iID7IghA8IhxDjQgtBag4AAIgIAAg");
	var mask_graphics_386 = new cjs.Graphics().p("AqaYWQg6gGhDgkIgGgEQhHgogng0Qgog3AVguIA0hvIgBAAINf66QAzhpA7hnQCHkACKj/IBbipIAohMIAphMIABgDIDqA3ICcAlIghBHIgNAaIuUcnQg0Bqg7BmQiGD+iJD9IghA9IhxDkQguBbg4AAIgIAAg");
	var mask_graphics_387 = new cjs.Graphics().p("AqdYfQg6gGhDgkIgGgEQhIgogng1Qgog2AVgvIA0hwIgBAAINj7CQA0hqA7hnQCHkCCKkBIBbirIAphMIAphMIACgEIDqA4ICdAlIghBHIgNAbIuYcwQg1Bqg7BnQiHEAiJD/IghA9IhyDlQgtBcg5AAIgIAAg");
	var mask_graphics_388 = new cjs.Graphics().p("AqgYnQg6gFhEglIgGgEQhIgogng1Qgog3AVgvIA0hwIAAAAINm7LQA1hrA6hnQCJkECKkDIBbisIAphNIAphNIACgDIDrA4ICeAlIgiBIIgNAaIucc5Qg1Brg7BnQiHEDiKEAIghA+IhyDnQguBdg5AAIgIgBg");
	var mask_graphics_389 = new cjs.Graphics().p("AqjYwQg6gGhEgkIgHgEQhIgogng2Qgpg3AWgvIA0hxIAAAAINr7UQA0hrA7hoQCJkGCKkEIBciuIAphNIAphOIACgDIDsA4ICfAlIgiBIIgNAbIuhdCQg1Bsg7BoQiIEEiKECIghA+IhyDpQguBeg6AAIgIgBg");
	var mask_graphics_390 = new cjs.Graphics().p("AqlY5Qg7gFhFglIgGgEQhJgogng2Qgpg4AWgvIA0hyIAAAAINv7cQA1hrA6hqQCKkHCLkGIBcivIAphOIAphOIACgDIDuA4ICfAlIgiBJIgNAbIuldLQg2Bsg7BpQiIEGiLEEIghA+IhzDrQguBdg5AAIgIAAg");
	var mask_graphics_391 = new cjs.Graphics().p("AqoZCQg7gGhFglIgGgEQhKgogng2Qgpg4AWgwIA1hyIgBAAIN07lQA1hsA6hqQCKkJCMkIIBciwIAqhPIAphOIABgDIDvA4IChAlIgjBJIgNAbIuqdUQg2Btg7BqQiIEHiLEHIghA+Ih0DtQgvBeg5AAIgIAAg");
	var mask_graphics_392 = new cjs.Graphics().p("AqrZLQg8gGhFglIgGgEQhKgpgog2Qgog5AVgvIA1hzIN37tQA2htA7hrQCKkLCMkKIBcixIAqhPIAphPIACgDIDwA4ICiAlIgkBKIgNAbIuuddQg2Btg7BrQiJEKiMEIIghA/Ih0DuQgvBfg6AAIgHAAg");
	var mask_graphics_393 = new cjs.Graphics().p("AquZUQg8gGhFglIgGgEQhKgpgog3Qgpg4AWgwIA1hzIAAAAIN772QA2huA7hrQCKkNCNkMIBdiyIAphQIAqhPIACgEIDxA5ICiAlIgjBKIgOAbIuydnQg3Bug7BrIkVIVIgiBAIh0DvQgvBgg6AAIgIAAg");
	var mask_graphics_394 = new cjs.Graphics().p("AqxZdQg8gGhGgmIgGgDQhKgqgog3Qgpg4AWgwIA1h0IAAAAIN/7+QA2hvA7hsIEYocIBei0IAphQIAqhQIACgEIDyA5ICjAmIgkBKIgNAbIu3dwQg3Bug7BtQiKENiMELIgiBAIh0DxQgwBhg6AAIgIAAg");
	var mask_graphics_395 = new cjs.Graphics().p("Aq0ZlQg8gGhGglIgHgEQhKgqgog3Qgqg5AXgwIA1h1IAAAAIOE8GQA2hvA7huIEZofIBdi1IAqhRIAqhRIACgDID0A5ICjAmIgkBKIgOAcIu6d5Qg4Bug7BuIkXIcIgiBAIh0DzQgwBig7AAIgIgBg");
	var mask_graphics_396 = new cjs.Graphics().p("Aq2ZuQg9gFhHgmIgGgEQhLgqgpg3Qgpg6AWgwIA3h1IgBAAIOI8PQA3hwA6huQCNkSCNkRIBei2IAqhSIAqhRIACgDID1A5ICkAmIgkBLIgOAbIu/eCQg4Bwg7BuIkYIfIgiBBIh1D1QgwBhg7AAIgHAAg");
	var mask_graphics_397 = new cjs.Graphics().p("Aq5Z3Qg9gFhHgnIgHgDQhLgqgpg4Qgpg6AWgxIA3h1IgBAAIOM8YQA3hwA7hvIEbonIBei3IAqhSIAqhSIACgDID2A5IClAmIgkBMIgOAbIvEeLQg4Bwg7BvIkZIkIgiBBIh1D2QgxBig7AAIgHAAg");
	var mask_graphics_398 = new cjs.Graphics().p("Aq8aAQg+gGhHgmIgGgEQhMgqgpg4Qgpg6AWgyIA3h2IgBAAIOQ8gQA4hxA7hvIEborIBfi4IAqhTIAqhSIACgDID3A5ICnAmIglBMIgPAcIvIeUQg4Bwg7BwIkaInIgiBCIh2D4QgwBjg8AAIgHAAg");
	var mask_graphics_399 = new cjs.Graphics().p("Aq/aJQg+gGhHgmIgHgEQhMgqgpg5Qgqg6AXgyIA3h2IgBAAIOV8pQA3hxA7hxIEdouIBfi6IAqhTIAqhSIACgEID5A6ICnAmIgmBMIgOAcIvMedQg5Byg7BwIkbIrIgiBCIh2D5QgxBkg8AAIgHAAg");
	var mask_graphics_400 = new cjs.Graphics().p("ArCaSQg+gGhIgnIgHgEQhMgqgpg5Qgqg6AXgyIA3h3IOY8xQA4hyA7hxIEdozIBfi6IArhUIAqhTIACgEID6A6ICoAnIgmBMIgOAcIvRemQg5Byg7BxIkcIvIgiBCIh3D7QgwBlg9AAIgHAAg");
	var mask_graphics_401 = new cjs.Graphics().p("ArFaaQg+gFhIgoIgHgDQhNgrgpg5Qgqg7AXgyIA4h4IgBAAIOd85QA4hzA7hyIEeo2IBgi8IArhUIAqhUIACgDID7A6ICoAmIgmBOIgOAcIvVevQg6Byg7ByQiNEaiPEYIgiBDIh4D9QgxBmg9AAIgHgBg");
	var mask_graphics_402 = new cjs.Graphics().p("ArIajQg+gFhJgnIgGgEQhNgrgqg5Qgqg7AXgzIA4h4IgBAAIOh9CQA4hzA7hzIEgo6IBgi9IAqhVIArhUIACgDID8A6ICpAmIgmBOIgOAcIvae4Ih1DmIkdI2IgjBDIh3D/QgxBlg+AAIgHAAg");
	var mask_graphics_403 = new cjs.Graphics().p("ArKasQg/gFhJgoIgHgEQhNgrgqg5Qgqg7AXgzIA4h5IgBAAIOl9KIB0joIEgo9IBgi/IArhVIArhVIACgDID9A6ICqAnIgmBOIgPAcIvefBIh1DoIkeI5IgjBEIh3EAQgyBmg9AAIgHAAg");
	var mask_graphics_404 = new cjs.Graphics().p("ArNa1Qg/gFhKgoIgHgEQhNgrgqg6Qgqg8AXgyIA4h6IAAAAIOo9TIB1jpIEhpBIBgi/IArhWIArhWIACgDID/A7ICrAmIgnBPIgPAcIvifKIh2DpIkfI9IgjBEIh4ECQgxBng+AAIgHAAg");
	var mask_graphics_405 = new cjs.Graphics().p("ArQa+QhAgGhJgnIgHgEQhOgsgqg6Qgrg8AYgzIA4h6IAAAAIOt9bIB0jrIEipEIBhjBIArhWIArhWIACgEIEAA7ICsAnIgoBOIgOAdIvnfTIh2DrIkgJAIgjBFIh4EDQgyBog+AAIgHAAg");
	var mask_graphics_406 = new cjs.Graphics().p("ArTbHQhDgGhOgsQhOgrgqg7Qgrg8AYgzIA4h7IAAAAMAWqgtaIArhXIArhWIACgEIGuBiIgoBPMgW0AtuIh5EFQgyBpg+AAIgHAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(230).to({graphics:mask_graphics_230,x:369.9,y:107.5}).wait(1).to({graphics:mask_graphics_231,x:369.4,y:108.5}).wait(1).to({graphics:mask_graphics_232,x:368.9,y:109.5}).wait(1).to({graphics:mask_graphics_233,x:368.4,y:110.4}).wait(1).to({graphics:mask_graphics_234,x:367.9,y:111.4}).wait(1).to({graphics:mask_graphics_235,x:367.4,y:112.4}).wait(1).to({graphics:mask_graphics_236,x:366.8,y:113.4}).wait(1).to({graphics:mask_graphics_237,x:366.3,y:114.4}).wait(1).to({graphics:mask_graphics_238,x:365.8,y:115.3}).wait(1).to({graphics:mask_graphics_239,x:365.3,y:116.3}).wait(1).to({graphics:mask_graphics_240,x:364.7,y:117.3}).wait(1).to({graphics:mask_graphics_241,x:364.2,y:118.3}).wait(1).to({graphics:mask_graphics_242,x:363.7,y:119.3}).wait(1).to({graphics:mask_graphics_243,x:363.2,y:120.2}).wait(1).to({graphics:mask_graphics_244,x:362.6,y:121.2}).wait(1).to({graphics:mask_graphics_245,x:362.1,y:122.2}).wait(1).to({graphics:mask_graphics_246,x:361.6,y:123.2}).wait(1).to({graphics:mask_graphics_247,x:361.1,y:124.1}).wait(1).to({graphics:mask_graphics_248,x:360.5,y:125.1}).wait(1).to({graphics:mask_graphics_249,x:360,y:126.1}).wait(1).to({graphics:mask_graphics_250,x:359.5,y:127.1}).wait(1).to({graphics:mask_graphics_251,x:359,y:128.1}).wait(1).to({graphics:mask_graphics_252,x:358.5,y:129.1}).wait(1).to({graphics:mask_graphics_253,x:358,y:130.1}).wait(1).to({graphics:mask_graphics_254,x:357.4,y:131.1}).wait(1).to({graphics:mask_graphics_255,x:356.9,y:132}).wait(1).to({graphics:mask_graphics_256,x:356.4,y:133}).wait(1).to({graphics:mask_graphics_257,x:355.9,y:134}).wait(1).to({graphics:mask_graphics_258,x:355.3,y:135}).wait(1).to({graphics:mask_graphics_259,x:354.8,y:136}).wait(1).to({graphics:mask_graphics_260,x:354.3,y:137}).wait(1).to({graphics:mask_graphics_261,x:353.8,y:138}).wait(1).to({graphics:mask_graphics_262,x:353.2,y:139}).wait(1).to({graphics:mask_graphics_263,x:352.7,y:140}).wait(1).to({graphics:mask_graphics_264,x:352.2,y:141}).wait(1).to({graphics:mask_graphics_265,x:351.7,y:142}).wait(1).to({graphics:mask_graphics_266,x:351.2,y:143}).wait(1).to({graphics:mask_graphics_267,x:350.6,y:144}).wait(1).to({graphics:mask_graphics_268,x:350.1,y:145}).wait(1).to({graphics:mask_graphics_269,x:349.6,y:146}).wait(1).to({graphics:mask_graphics_270,x:349.1,y:147}).wait(1).to({graphics:mask_graphics_271,x:348.5,y:147.9}).wait(1).to({graphics:mask_graphics_272,x:348,y:148.9}).wait(1).to({graphics:mask_graphics_273,x:347.5,y:150}).wait(1).to({graphics:mask_graphics_274,x:347,y:150.9}).wait(1).to({graphics:mask_graphics_275,x:346.5,y:151.9}).wait(1).to({graphics:mask_graphics_276,x:345.9,y:152.9}).wait(1).to({graphics:mask_graphics_277,x:345.4,y:153.9}).wait(1).to({graphics:mask_graphics_278,x:344.9,y:154.9}).wait(1).to({graphics:mask_graphics_279,x:344.4,y:155.9}).wait(1).to({graphics:mask_graphics_280,x:343.9,y:156.9}).wait(1).to({graphics:mask_graphics_281,x:343.4,y:157.9}).wait(1).to({graphics:mask_graphics_282,x:342.9,y:158.9}).wait(1).to({graphics:mask_graphics_283,x:342.4,y:159.9}).wait(1).to({graphics:mask_graphics_284,x:341.8,y:160.9}).wait(1).to({graphics:mask_graphics_285,x:341.3,y:161.9}).wait(1).to({graphics:mask_graphics_286,x:340.9,y:162.9}).wait(1).to({graphics:mask_graphics_287,x:340.3,y:163.9}).wait(1).to({graphics:mask_graphics_288,x:339.8,y:164.9}).wait(1).to({graphics:mask_graphics_289,x:339.3,y:165.9}).wait(1).to({graphics:mask_graphics_290,x:338.8,y:166.9}).wait(1).to({graphics:mask_graphics_291,x:338.3,y:167.9}).wait(1).to({graphics:mask_graphics_292,x:337.8,y:168.9}).wait(1).to({graphics:mask_graphics_293,x:337.3,y:169.9}).wait(1).to({graphics:mask_graphics_294,x:336.8,y:170.9}).wait(1).to({graphics:mask_graphics_295,x:336.3,y:171.9}).wait(1).to({graphics:mask_graphics_296,x:335.8,y:172.9}).wait(1).to({graphics:mask_graphics_297,x:335.3,y:173.9}).wait(1).to({graphics:mask_graphics_298,x:334.8,y:174.9}).wait(1).to({graphics:mask_graphics_299,x:334.3,y:175.9}).wait(1).to({graphics:mask_graphics_300,x:333.8,y:176.9}).wait(1).to({graphics:mask_graphics_301,x:333.3,y:177.9}).wait(1).to({graphics:mask_graphics_302,x:332.8,y:178.9}).wait(1).to({graphics:mask_graphics_303,x:332.3,y:179.9}).wait(1).to({graphics:mask_graphics_304,x:331.8,y:180.9}).wait(1).to({graphics:mask_graphics_305,x:331.3,y:181.9}).wait(1).to({graphics:mask_graphics_306,x:330.8,y:182.9}).wait(1).to({graphics:mask_graphics_307,x:330.3,y:183.9}).wait(1).to({graphics:mask_graphics_308,x:329.7,y:184.9}).wait(1).to({graphics:mask_graphics_309,x:329.2,y:185.9}).wait(1).to({graphics:mask_graphics_310,x:328.7,y:186.9}).wait(1).to({graphics:mask_graphics_311,x:328.2,y:187.9}).wait(1).to({graphics:mask_graphics_312,x:327.7,y:188.9}).wait(1).to({graphics:mask_graphics_313,x:327.2,y:189.9}).wait(1).to({graphics:mask_graphics_314,x:326.7,y:190.9}).wait(1).to({graphics:mask_graphics_315,x:326.2,y:191.8}).wait(1).to({graphics:mask_graphics_316,x:325.7,y:192.8}).wait(1).to({graphics:mask_graphics_317,x:325.2,y:193.8}).wait(1).to({graphics:mask_graphics_318,x:324.7,y:194.8}).wait(1).to({graphics:mask_graphics_319,x:324.2,y:195.8}).wait(1).to({graphics:mask_graphics_320,x:323.7,y:196.8}).wait(1).to({graphics:mask_graphics_321,x:323.2,y:197.8}).wait(1).to({graphics:mask_graphics_322,x:322.7,y:198.8}).wait(1).to({graphics:mask_graphics_323,x:322.2,y:199.8}).wait(1).to({graphics:mask_graphics_324,x:321.7,y:200.8}).wait(1).to({graphics:mask_graphics_325,x:321.2,y:201.8}).wait(1).to({graphics:mask_graphics_326,x:320.7,y:202.8}).wait(1).to({graphics:mask_graphics_327,x:320.2,y:203.8}).wait(1).to({graphics:mask_graphics_328,x:319.7,y:204.8}).wait(1).to({graphics:mask_graphics_329,x:319.2,y:205.8}).wait(1).to({graphics:mask_graphics_330,x:318.7,y:206.8}).wait(1).to({graphics:mask_graphics_331,x:318.1,y:207.8}).wait(1).to({graphics:mask_graphics_332,x:317.6,y:208.8}).wait(1).to({graphics:mask_graphics_333,x:317.2,y:209.8}).wait(1).to({graphics:mask_graphics_334,x:316.7,y:210.8}).wait(1).to({graphics:mask_graphics_335,x:316.1,y:211.8}).wait(1).to({graphics:mask_graphics_336,x:315.6,y:212.8}).wait(1).to({graphics:mask_graphics_337,x:315.1,y:213.8}).wait(1).to({graphics:mask_graphics_338,x:314.6,y:214.8}).wait(1).to({graphics:mask_graphics_339,x:314.1,y:215.8}).wait(1).to({graphics:mask_graphics_340,x:313.6,y:216.8}).wait(1).to({graphics:mask_graphics_341,x:313.1,y:217.8}).wait(1).to({graphics:mask_graphics_342,x:312.6,y:218.8}).wait(1).to({graphics:mask_graphics_343,x:312.1,y:219.8}).wait(1).to({graphics:mask_graphics_344,x:311.6,y:220.8}).wait(1).to({graphics:mask_graphics_345,x:311.1,y:221.8}).wait(1).to({graphics:mask_graphics_346,x:310.6,y:222.8}).wait(1).to({graphics:mask_graphics_347,x:310.1,y:223.8}).wait(1).to({graphics:mask_graphics_348,x:309.6,y:224.8}).wait(1).to({graphics:mask_graphics_349,x:309.1,y:225.8}).wait(1).to({graphics:mask_graphics_350,x:308.6,y:226.8}).wait(1).to({graphics:mask_graphics_351,x:308.1,y:227.8}).wait(1).to({graphics:mask_graphics_352,x:307.6,y:228.8}).wait(1).to({graphics:mask_graphics_353,x:307.1,y:229.8}).wait(1).to({graphics:mask_graphics_354,x:306.6,y:230.8}).wait(1).to({graphics:mask_graphics_355,x:306.1,y:231.8}).wait(1).to({graphics:mask_graphics_356,x:305.5,y:232.8}).wait(1).to({graphics:mask_graphics_357,x:305.1,y:233.8}).wait(1).to({graphics:mask_graphics_358,x:304.5,y:234.8}).wait(1).to({graphics:mask_graphics_359,x:304,y:235.8}).wait(1).to({graphics:mask_graphics_360,x:303.5,y:236.8}).wait(1).to({graphics:mask_graphics_361,x:303,y:237.8}).wait(1).to({graphics:mask_graphics_362,x:302.5,y:238.8}).wait(1).to({graphics:mask_graphics_363,x:302,y:239.8}).wait(1).to({graphics:mask_graphics_364,x:301.5,y:240.8}).wait(1).to({graphics:mask_graphics_365,x:301,y:241.8}).wait(1).to({graphics:mask_graphics_366,x:300.5,y:242.8}).wait(1).to({graphics:mask_graphics_367,x:300,y:243.8}).wait(1).to({graphics:mask_graphics_368,x:299.5,y:244.8}).wait(1).to({graphics:mask_graphics_369,x:299,y:245.8}).wait(1).to({graphics:mask_graphics_370,x:298.5,y:246.8}).wait(1).to({graphics:mask_graphics_371,x:298,y:247.8}).wait(1).to({graphics:mask_graphics_372,x:297.5,y:248.8}).wait(1).to({graphics:mask_graphics_373,x:297,y:249.8}).wait(1).to({graphics:mask_graphics_374,x:296.5,y:250.8}).wait(1).to({graphics:mask_graphics_375,x:296,y:251.8}).wait(1).to({graphics:mask_graphics_376,x:295.5,y:252.8}).wait(1).to({graphics:mask_graphics_377,x:295,y:253.8}).wait(1).to({graphics:mask_graphics_378,x:294.5,y:254.8}).wait(1).to({graphics:mask_graphics_379,x:293.9,y:255.8}).wait(1).to({graphics:mask_graphics_380,x:293.5,y:256.8}).wait(1).to({graphics:mask_graphics_381,x:292.9,y:257.8}).wait(1).to({graphics:mask_graphics_382,x:292.4,y:258.8}).wait(1).to({graphics:mask_graphics_383,x:291.9,y:259.8}).wait(1).to({graphics:mask_graphics_384,x:291.4,y:260.8}).wait(1).to({graphics:mask_graphics_385,x:290.9,y:261.8}).wait(1).to({graphics:mask_graphics_386,x:290.4,y:262.8}).wait(1).to({graphics:mask_graphics_387,x:289.9,y:263.7}).wait(1).to({graphics:mask_graphics_388,x:289.4,y:264.8}).wait(1).to({graphics:mask_graphics_389,x:288.9,y:265.8}).wait(1).to({graphics:mask_graphics_390,x:288.4,y:266.7}).wait(1).to({graphics:mask_graphics_391,x:287.9,y:267.8}).wait(1).to({graphics:mask_graphics_392,x:287.4,y:268.8}).wait(1).to({graphics:mask_graphics_393,x:286.9,y:269.7}).wait(1).to({graphics:mask_graphics_394,x:286.4,y:270.7}).wait(1).to({graphics:mask_graphics_395,x:285.9,y:271.8}).wait(1).to({graphics:mask_graphics_396,x:285.4,y:272.7}).wait(1).to({graphics:mask_graphics_397,x:284.9,y:273.7}).wait(1).to({graphics:mask_graphics_398,x:284.4,y:274.8}).wait(1).to({graphics:mask_graphics_399,x:283.9,y:275.7}).wait(1).to({graphics:mask_graphics_400,x:283.4,y:276.7}).wait(1).to({graphics:mask_graphics_401,x:282.8,y:277.8}).wait(1).to({graphics:mask_graphics_402,x:282.3,y:278.7}).wait(1).to({graphics:mask_graphics_403,x:281.8,y:279.7}).wait(1).to({graphics:mask_graphics_404,x:281.3,y:280.7}).wait(1).to({graphics:mask_graphics_405,x:280.8,y:281.7}).wait(1).to({graphics:mask_graphics_406,x:280.3,y:282.7}).wait(170));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(15,1,1).p("Ar8YOMAX5gwb");
	this.shape_1.setTransform(281.5,285);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(230).to({_off:false},0).wait(346));

	// arrow
	this.instance_2 = new lib.HrArw("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(269.1,49.8,1,1,0,0,0,-17,-0.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100).to({_off:false},0).wait(476));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_100 = new cjs.Graphics().p("AisBkIAAjHIFYAAIAADHg");
	var mask_1_graphics_101 = new cjs.Graphics().p("AizBkIAAjHIFnAAIAADHg");
	var mask_1_graphics_102 = new cjs.Graphics().p("Ai7BkIAAjHIF3AAIAADHg");
	var mask_1_graphics_103 = new cjs.Graphics().p("AjCBkIAAjHIGFAAIAADHg");
	var mask_1_graphics_104 = new cjs.Graphics().p("AjKBkIAAjHIGVAAIAADHg");
	var mask_1_graphics_105 = new cjs.Graphics().p("AjRBkIAAjHIGjAAIAADHg");
	var mask_1_graphics_106 = new cjs.Graphics().p("AjZBkIAAjHIGzAAIAADHg");
	var mask_1_graphics_107 = new cjs.Graphics().p("AjgBkIAAjHIHBAAIAADHg");
	var mask_1_graphics_108 = new cjs.Graphics().p("AjoBkIAAjHIHRAAIAADHg");
	var mask_1_graphics_109 = new cjs.Graphics().p("AjwBkIAAjHIHgAAIAADHg");
	var mask_1_graphics_110 = new cjs.Graphics().p("Aj3BkIAAjHIHvAAIAADHg");
	var mask_1_graphics_111 = new cjs.Graphics().p("Aj/BkIAAjHIH/AAIAADHg");
	var mask_1_graphics_112 = new cjs.Graphics().p("AkGBkIAAjHIINAAIAADHg");
	var mask_1_graphics_113 = new cjs.Graphics().p("AkOBkIAAjHIIdAAIAADHg");
	var mask_1_graphics_114 = new cjs.Graphics().p("AkWBkIAAjHIIsAAIAADHg");
	var mask_1_graphics_115 = new cjs.Graphics().p("AkdBkIAAjHII7AAIAADHg");
	var mask_1_graphics_116 = new cjs.Graphics().p("AklBkIAAjHIJLAAIAADHg");
	var mask_1_graphics_117 = new cjs.Graphics().p("AksBkIAAjHIJZAAIAADHg");
	var mask_1_graphics_118 = new cjs.Graphics().p("Ak0BkIAAjHIJpAAIAADHg");
	var mask_1_graphics_119 = new cjs.Graphics().p("Ak7BkIAAjHIJ3AAIAADHg");
	var mask_1_graphics_120 = new cjs.Graphics().p("AlDBkIAAjHIKHAAIAADHg");
	var mask_1_graphics_121 = new cjs.Graphics().p("AlKBkIAAjHIKVAAIAADHg");
	var mask_1_graphics_122 = new cjs.Graphics().p("AlSBkIAAjHIKlAAIAADHg");
	var mask_1_graphics_123 = new cjs.Graphics().p("AlaBkIAAjHIK0AAIAADHg");
	var mask_1_graphics_124 = new cjs.Graphics().p("AlhBkIAAjHILDAAIAADHg");
	var mask_1_graphics_125 = new cjs.Graphics().p("AlpBkIAAjHILTAAIAADHg");
	var mask_1_graphics_126 = new cjs.Graphics().p("AlwBkIAAjHILhAAIAADHg");
	var mask_1_graphics_127 = new cjs.Graphics().p("Al4BkIAAjHILxAAIAADHg");
	var mask_1_graphics_128 = new cjs.Graphics().p("Al/BkIAAjHIL/AAIAADHg");
	var mask_1_graphics_129 = new cjs.Graphics().p("AmHBkIAAjHIMPAAIAADHg");
	var mask_1_graphics_130 = new cjs.Graphics().p("AmOBkIAAjHIMdAAIAADHg");
	var mask_1_graphics_131 = new cjs.Graphics().p("AmWBkIAAjHIMtAAIAADHg");
	var mask_1_graphics_132 = new cjs.Graphics().p("AmeBkIAAjHIM9AAIAADHg");
	var mask_1_graphics_133 = new cjs.Graphics().p("AmlBkIAAjHINLAAIAADHg");
	var mask_1_graphics_134 = new cjs.Graphics().p("AmtBkIAAjHINbAAIAADHg");
	var mask_1_graphics_135 = new cjs.Graphics().p("Am0BkIAAjHINpAAIAADHg");
	var mask_1_graphics_136 = new cjs.Graphics().p("Am8BkIAAjHIN4AAIAADHg");
	var mask_1_graphics_137 = new cjs.Graphics().p("AnDBkIAAjHIOHAAIAADHg");
	var mask_1_graphics_138 = new cjs.Graphics().p("AnLBkIAAjHIOXAAIAADHg");
	var mask_1_graphics_139 = new cjs.Graphics().p("AnSBkIAAjHIOlAAIAADHg");
	var mask_1_graphics_140 = new cjs.Graphics().p("AnaBkIAAjHIO1AAIAADHg");
	var mask_1_graphics_141 = new cjs.Graphics().p("AniBkIAAjHIPFAAIAADHg");
	var mask_1_graphics_142 = new cjs.Graphics().p("AnpBkIAAjHIPTAAIAADHg");
	var mask_1_graphics_143 = new cjs.Graphics().p("AnxBkIAAjHIPjAAIAADHg");
	var mask_1_graphics_144 = new cjs.Graphics().p("An4BkIAAjHIPxAAIAADHg");
	var mask_1_graphics_145 = new cjs.Graphics().p("AoABkIAAjHIQBAAIAADHg");
	var mask_1_graphics_146 = new cjs.Graphics().p("AoHBkIAAjHIQQAAIAADHg");
	var mask_1_graphics_147 = new cjs.Graphics().p("AoPBkIAAjHIQfAAIAADHg");
	var mask_1_graphics_148 = new cjs.Graphics().p("AoWBkIAAjHIQuAAIAADHg");
	var mask_1_graphics_149 = new cjs.Graphics().p("AoeBkIAAjHIQ9AAIAADHg");
	var mask_1_graphics_150 = new cjs.Graphics().p("AolBkIAAjHIRLAAIAADHg");
	var mask_1_graphics_151 = new cjs.Graphics().p("AotBkIAAjHIRbAAIAADHg");
	var mask_1_graphics_152 = new cjs.Graphics().p("Ao1BkIAAjHIRrAAIAADHg");
	var mask_1_graphics_153 = new cjs.Graphics().p("Ao8BkIAAjHIR5AAIAADHg");
	var mask_1_graphics_154 = new cjs.Graphics().p("ApEBkIAAjHISJAAIAADHg");
	var mask_1_graphics_155 = new cjs.Graphics().p("ApLBkIAAjHISXAAIAADHg");
	var mask_1_graphics_156 = new cjs.Graphics().p("ApTBkIAAjHISnAAIAADHg");
	var mask_1_graphics_157 = new cjs.Graphics().p("ApaBkIAAjHIS2AAIAADHg");
	var mask_1_graphics_158 = new cjs.Graphics().p("ApiBkIAAjHITFAAIAADHg");
	var mask_1_graphics_159 = new cjs.Graphics().p("AppBkIAAjHITTAAIAADHg");
	var mask_1_graphics_160 = new cjs.Graphics().p("ApxBkIAAjHITjAAIAADHg");
	var mask_1_graphics_161 = new cjs.Graphics().p("Ap5BkIAAjHITzAAIAADHg");
	var mask_1_graphics_162 = new cjs.Graphics().p("AqABkIAAjHIUBAAIAADHg");
	var mask_1_graphics_163 = new cjs.Graphics().p("AqIBkIAAjHIURAAIAADHg");
	var mask_1_graphics_164 = new cjs.Graphics().p("AqPBkIAAjHIUfAAIAADHg");
	var mask_1_graphics_165 = new cjs.Graphics().p("AqXBkIAAjHIUvAAIAADHg");
	var mask_1_graphics_166 = new cjs.Graphics().p("AqeBkIAAjHIU9AAIAADHg");
	var mask_1_graphics_167 = new cjs.Graphics().p("AqmBkIAAjHIVNAAIAADHg");
	var mask_1_graphics_168 = new cjs.Graphics().p("AquBkIAAjHIVdAAIAADHg");
	var mask_1_graphics_169 = new cjs.Graphics().p("Aq1BkIAAjHIVrAAIAADHg");
	var mask_1_graphics_170 = new cjs.Graphics().p("Aq9BkIAAjHIV7AAIAADHg");
	var mask_1_graphics_171 = new cjs.Graphics().p("ArFBkIAAjHIWKAAIAADHg");
	var mask_1_graphics_172 = new cjs.Graphics().p("ArMBkIAAjHIWZAAIAADHg");
	var mask_1_graphics_173 = new cjs.Graphics().p("ArUBkIAAjHIWoAAIAADHg");
	var mask_1_graphics_174 = new cjs.Graphics().p("ArbBkIAAjHIW3AAIAADHg");
	var mask_1_graphics_175 = new cjs.Graphics().p("ArjBkIAAjHIXHAAIAADHg");
	var mask_1_graphics_176 = new cjs.Graphics().p("ArqBkIAAjHIXVAAIAADHg");
	var mask_1_graphics_177 = new cjs.Graphics().p("AryBkIAAjHIXlAAIAADHg");
	var mask_1_graphics_178 = new cjs.Graphics().p("Ar5BkIAAjHIXzAAIAADHg");
	var mask_1_graphics_179 = new cjs.Graphics().p("AsBBkIAAjHIYDAAIAADHg");
	var mask_1_graphics_180 = new cjs.Graphics().p("AsJBkIAAjHIYSAAIAADHg");
	var mask_1_graphics_181 = new cjs.Graphics().p("AsQBkIAAjHIYhAAIAADHg");
	var mask_1_graphics_182 = new cjs.Graphics().p("AsYBkIAAjHIYwAAIAADHg");
	var mask_1_graphics_183 = new cjs.Graphics().p("AsfBkIAAjHIY/AAIAADHg");
	var mask_1_graphics_184 = new cjs.Graphics().p("AsnBkIAAjHIZPAAIAADHg");
	var mask_1_graphics_185 = new cjs.Graphics().p("AsuBkIAAjHIZdAAIAADHg");
	var mask_1_graphics_186 = new cjs.Graphics().p("As2BkIAAjHIZtAAIAADHg");
	var mask_1_graphics_187 = new cjs.Graphics().p("As9BkIAAjHIZ7AAIAADHg");
	var mask_1_graphics_188 = new cjs.Graphics().p("AtFBkIAAjHIaLAAIAADHg");
	var mask_1_graphics_189 = new cjs.Graphics().p("AtMBkIAAjHIaZAAIAADHg");
	var mask_1_graphics_190 = new cjs.Graphics().p("AtUBkIAAjHIapAAIAADHg");
	var mask_1_graphics_191 = new cjs.Graphics().p("AtcBkIAAjHIa5AAIAADHg");
	var mask_1_graphics_192 = new cjs.Graphics().p("AtjBkIAAjHIbHAAIAADHg");
	var mask_1_graphics_193 = new cjs.Graphics().p("AtrBkIAAjHIbXAAIAADHg");
	var mask_1_graphics_194 = new cjs.Graphics().p("AtyBkIAAjHIblAAIAADHg");
	var mask_1_graphics_195 = new cjs.Graphics().p("At6BkIAAjHIb1AAIAADHg");
	var mask_1_graphics_196 = new cjs.Graphics().p("AuBBkIAAjHIcDAAIAADHg");
	var mask_1_graphics_197 = new cjs.Graphics().p("AuJBkIAAjHIcTAAIAADHg");
	var mask_1_graphics_198 = new cjs.Graphics().p("AuQBkIAAjHIciAAIAADHg");
	var mask_1_graphics_199 = new cjs.Graphics().p("AuYBkIAAjHIcxAAIAADHg");
	var mask_1_graphics_200 = new cjs.Graphics().p("AugBkIAAjHIdBAAIAADHg");
	var mask_1_graphics_201 = new cjs.Graphics().p("AunBkIAAjHIdPAAIAADHg");
	var mask_1_graphics_202 = new cjs.Graphics().p("AuvBkIAAjHIdfAAIAADHg");
	var mask_1_graphics_203 = new cjs.Graphics().p("Au2BkIAAjHIdtAAIAADHg");
	var mask_1_graphics_204 = new cjs.Graphics().p("Au+BkIAAjHId9AAIAADHg");
	var mask_1_graphics_205 = new cjs.Graphics().p("AvFBkIAAjHIeMAAIAADHg");
	var mask_1_graphics_206 = new cjs.Graphics().p("AhgK8IAAjIIebAAIAADIg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(100).to({graphics:mask_1_graphics_100,x:192.8,y:130}).wait(1).to({graphics:mask_1_graphics_101,x:193.5,y:130}).wait(1).to({graphics:mask_1_graphics_102,x:194.3,y:130}).wait(1).to({graphics:mask_1_graphics_103,x:195,y:130}).wait(1).to({graphics:mask_1_graphics_104,x:195.8,y:130}).wait(1).to({graphics:mask_1_graphics_105,x:196.5,y:130}).wait(1).to({graphics:mask_1_graphics_106,x:197.3,y:130}).wait(1).to({graphics:mask_1_graphics_107,x:198,y:130}).wait(1).to({graphics:mask_1_graphics_108,x:198.8,y:130}).wait(1).to({graphics:mask_1_graphics_109,x:199.6,y:130}).wait(1).to({graphics:mask_1_graphics_110,x:200.3,y:130}).wait(1).to({graphics:mask_1_graphics_111,x:201.1,y:130}).wait(1).to({graphics:mask_1_graphics_112,x:201.8,y:130}).wait(1).to({graphics:mask_1_graphics_113,x:202.6,y:130}).wait(1).to({graphics:mask_1_graphics_114,x:203.3,y:130}).wait(1).to({graphics:mask_1_graphics_115,x:204.1,y:130}).wait(1).to({graphics:mask_1_graphics_116,x:204.8,y:130}).wait(1).to({graphics:mask_1_graphics_117,x:205.6,y:130}).wait(1).to({graphics:mask_1_graphics_118,x:206.3,y:130}).wait(1).to({graphics:mask_1_graphics_119,x:207.1,y:130}).wait(1).to({graphics:mask_1_graphics_120,x:207.8,y:130}).wait(1).to({graphics:mask_1_graphics_121,x:208.6,y:130}).wait(1).to({graphics:mask_1_graphics_122,x:209.4,y:130}).wait(1).to({graphics:mask_1_graphics_123,x:210.1,y:130}).wait(1).to({graphics:mask_1_graphics_124,x:210.9,y:130}).wait(1).to({graphics:mask_1_graphics_125,x:211.6,y:130}).wait(1).to({graphics:mask_1_graphics_126,x:212.4,y:130}).wait(1).to({graphics:mask_1_graphics_127,x:213.1,y:130}).wait(1).to({graphics:mask_1_graphics_128,x:213.9,y:130}).wait(1).to({graphics:mask_1_graphics_129,x:214.6,y:130}).wait(1).to({graphics:mask_1_graphics_130,x:215.4,y:130}).wait(1).to({graphics:mask_1_graphics_131,x:216.1,y:130}).wait(1).to({graphics:mask_1_graphics_132,x:216.9,y:130}).wait(1).to({graphics:mask_1_graphics_133,x:217.7,y:130}).wait(1).to({graphics:mask_1_graphics_134,x:218.4,y:130}).wait(1).to({graphics:mask_1_graphics_135,x:219.2,y:130}).wait(1).to({graphics:mask_1_graphics_136,x:219.9,y:130}).wait(1).to({graphics:mask_1_graphics_137,x:220.7,y:130}).wait(1).to({graphics:mask_1_graphics_138,x:221.4,y:130}).wait(1).to({graphics:mask_1_graphics_139,x:222.2,y:130}).wait(1).to({graphics:mask_1_graphics_140,x:222.9,y:130}).wait(1).to({graphics:mask_1_graphics_141,x:223.7,y:130}).wait(1).to({graphics:mask_1_graphics_142,x:224.4,y:130}).wait(1).to({graphics:mask_1_graphics_143,x:225.2,y:130}).wait(1).to({graphics:mask_1_graphics_144,x:225.9,y:130}).wait(1).to({graphics:mask_1_graphics_145,x:226.7,y:130}).wait(1).to({graphics:mask_1_graphics_146,x:227.5,y:130}).wait(1).to({graphics:mask_1_graphics_147,x:228.2,y:130}).wait(1).to({graphics:mask_1_graphics_148,x:229,y:130}).wait(1).to({graphics:mask_1_graphics_149,x:229.7,y:130}).wait(1).to({graphics:mask_1_graphics_150,x:230.5,y:130}).wait(1).to({graphics:mask_1_graphics_151,x:231.2,y:130}).wait(1).to({graphics:mask_1_graphics_152,x:232,y:130}).wait(1).to({graphics:mask_1_graphics_153,x:232.7,y:130}).wait(1).to({graphics:mask_1_graphics_154,x:233.5,y:130}).wait(1).to({graphics:mask_1_graphics_155,x:234.2,y:130}).wait(1).to({graphics:mask_1_graphics_156,x:235,y:130}).wait(1).to({graphics:mask_1_graphics_157,x:235.8,y:130}).wait(1).to({graphics:mask_1_graphics_158,x:236.5,y:130}).wait(1).to({graphics:mask_1_graphics_159,x:237.3,y:130}).wait(1).to({graphics:mask_1_graphics_160,x:238,y:130}).wait(1).to({graphics:mask_1_graphics_161,x:238.8,y:130}).wait(1).to({graphics:mask_1_graphics_162,x:239.5,y:130}).wait(1).to({graphics:mask_1_graphics_163,x:240.3,y:130}).wait(1).to({graphics:mask_1_graphics_164,x:241,y:130}).wait(1).to({graphics:mask_1_graphics_165,x:241.8,y:130}).wait(1).to({graphics:mask_1_graphics_166,x:242.6,y:130}).wait(1).to({graphics:mask_1_graphics_167,x:243.3,y:130}).wait(1).to({graphics:mask_1_graphics_168,x:244,y:130}).wait(1).to({graphics:mask_1_graphics_169,x:244.8,y:130}).wait(1).to({graphics:mask_1_graphics_170,x:245.6,y:130}).wait(1).to({graphics:mask_1_graphics_171,x:246.3,y:130}).wait(1).to({graphics:mask_1_graphics_172,x:247.1,y:130}).wait(1).to({graphics:mask_1_graphics_173,x:247.8,y:130}).wait(1).to({graphics:mask_1_graphics_174,x:248.6,y:130}).wait(1).to({graphics:mask_1_graphics_175,x:249.3,y:130}).wait(1).to({graphics:mask_1_graphics_176,x:250.1,y:130}).wait(1).to({graphics:mask_1_graphics_177,x:250.8,y:130}).wait(1).to({graphics:mask_1_graphics_178,x:251.6,y:130}).wait(1).to({graphics:mask_1_graphics_179,x:252.3,y:130}).wait(1).to({graphics:mask_1_graphics_180,x:253.1,y:130}).wait(1).to({graphics:mask_1_graphics_181,x:253.9,y:130}).wait(1).to({graphics:mask_1_graphics_182,x:254.6,y:130}).wait(1).to({graphics:mask_1_graphics_183,x:255.4,y:130}).wait(1).to({graphics:mask_1_graphics_184,x:256.1,y:130}).wait(1).to({graphics:mask_1_graphics_185,x:256.9,y:130}).wait(1).to({graphics:mask_1_graphics_186,x:257.6,y:130}).wait(1).to({graphics:mask_1_graphics_187,x:258.4,y:130}).wait(1).to({graphics:mask_1_graphics_188,x:259.1,y:130}).wait(1).to({graphics:mask_1_graphics_189,x:259.9,y:130}).wait(1).to({graphics:mask_1_graphics_190,x:260.7,y:130}).wait(1).to({graphics:mask_1_graphics_191,x:261.4,y:130}).wait(1).to({graphics:mask_1_graphics_192,x:262.2,y:130}).wait(1).to({graphics:mask_1_graphics_193,x:262.9,y:130}).wait(1).to({graphics:mask_1_graphics_194,x:263.7,y:130}).wait(1).to({graphics:mask_1_graphics_195,x:264.4,y:130}).wait(1).to({graphics:mask_1_graphics_196,x:265.2,y:130}).wait(1).to({graphics:mask_1_graphics_197,x:265.9,y:130}).wait(1).to({graphics:mask_1_graphics_198,x:266.7,y:130}).wait(1).to({graphics:mask_1_graphics_199,x:267.4,y:130}).wait(1).to({graphics:mask_1_graphics_200,x:268.2,y:130}).wait(1).to({graphics:mask_1_graphics_201,x:268.9,y:130}).wait(1).to({graphics:mask_1_graphics_202,x:269.7,y:130}).wait(1).to({graphics:mask_1_graphics_203,x:270.4,y:130}).wait(1).to({graphics:mask_1_graphics_204,x:271.2,y:130}).wait(1).to({graphics:mask_1_graphics_205,x:272,y:130}).wait(1).to({graphics:mask_1_graphics_206,x:185.1,y:70}).wait(370));

	// Layer 9
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(15,1,1).p("AryAAIXlAA");
	this.shape_2.setTransform(283.8,130,0.959,1,0,0,0,-0.4,0);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(100).to({_off:false},0).wait(476));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_9 = new cjs.Graphics().p("ANiHiIBNkGIDAA4IhMEGg");
	var mask_2_graphics_10 = new cjs.Graphics().p("AiIBuIBRkUIDAA5IhREUg");
	var mask_2_graphics_11 = new cjs.Graphics().p("AiKB2IBVkkIDAA5IhVEjg");
	var mask_2_graphics_12 = new cjs.Graphics().p("AiNB9IBZkyIDCA5IhaEyg");
	var mask_2_graphics_13 = new cjs.Graphics().p("AiQCFIBelCIDDA6IheFBg");
	var mask_2_graphics_14 = new cjs.Graphics().p("AiSCMIBilQIDEA5IhjFRg");
	var mask_2_graphics_15 = new cjs.Graphics().p("AiVCTIBnlfIDEA5IhnFgg");
	var mask_2_graphics_16 = new cjs.Graphics().p("AiYCbIBslvIDFA6IhsFvg");
	var mask_2_graphics_17 = new cjs.Graphics().p("AiaCiIBwl9IDFA5IhwF/g");
	var mask_2_graphics_18 = new cjs.Graphics().p("AidCqIB0mNIDHA6Ih1GNg");
	var mask_2_graphics_19 = new cjs.Graphics().p("AifCxIB4mcIDHA7Ih4Gcg");
	var mask_2_graphics_20 = new cjs.Graphics().p("AijC5IB+msIDJA8Ih+Gqg");
	var mask_2_graphics_21 = new cjs.Graphics().p("AilDAICCm6IDJA7IiCG6g");
	var mask_2_graphics_22 = new cjs.Graphics().p("AioDIICHnKIDKA7IiHHKg");
	var mask_2_graphics_23 = new cjs.Graphics().p("AirDPICMnZIDKA8IiKHZg");
	var mask_2_graphics_24 = new cjs.Graphics().p("AitDWICQnnIDLA8IiQHng");
	var mask_2_graphics_25 = new cjs.Graphics().p("AiwDeICUn3IDNA9IiUH2g");
	var mask_2_graphics_26 = new cjs.Graphics().p("AiyDlICYoGIDOA9IiZIGg");
	var mask_2_graphics_27 = new cjs.Graphics().p("Ai1DsICdoUIDOA8IidIVg");
	var mask_2_graphics_28 = new cjs.Graphics().p("Ai4D0ICiokIDPA9IihIkg");
	var mask_2_graphics_29 = new cjs.Graphics().p("Ai6D7IClozIDQA+IilIzg");
	var mask_2_graphics_30 = new cjs.Graphics().p("Ai9EDICqpCIDRA9IiqJCg");
	var mask_2_graphics_31 = new cjs.Graphics().p("AjAEKICvpRIDSA+IivJRg");
	var mask_2_graphics_32 = new cjs.Graphics().p("AjCESICzphIDSA+IizJhg");
	var mask_2_graphics_33 = new cjs.Graphics().p("AjFEZIC4pwIDTA/Ii4Jvg");
	var mask_2_graphics_34 = new cjs.Graphics().p("AjIEgIC9p+IDUA/Ii8J+g");
	var mask_2_graphics_35 = new cjs.Graphics().p("AjLEoIDCqOIDUA/IjAKOg");
	var mask_2_graphics_36 = new cjs.Graphics().p("AjNEvIDFqcIDWA/IjFKcg");
	var mask_2_graphics_37 = new cjs.Graphics().p("AjQE3IDKqsIDXBAIjKKrg");
	var mask_2_graphics_38 = new cjs.Graphics().p("AjTE+IDOq7IDYBAIjOK7g");
	var mask_2_graphics_39 = new cjs.Graphics().p("AjVFGIDSrLIDZBAIjSLLg");
	var mask_2_graphics_40 = new cjs.Graphics().p("AjYFNIDXrZIDaBAIjYLZg");
	var mask_2_graphics_41 = new cjs.Graphics().p("AjaFUIDaroIDbBAIjbLpg");
	var mask_2_graphics_42 = new cjs.Graphics().p("AjdFcIDfr4IDcBBIjfL4g");
	var mask_2_graphics_43 = new cjs.Graphics().p("AjgFjIDksGIDdBBIjkMGg");
	var mask_2_graphics_44 = new cjs.Graphics().p("AjiFqIDnsVIDeBCIjoMVg");
	var mask_2_graphics_45 = new cjs.Graphics().p("AjlFyIDsslIDfBCIjsMlg");
	var mask_2_graphics_46 = new cjs.Graphics().p("AjoF5IDxszIDgBBIjxM1g");
	var mask_2_graphics_47 = new cjs.Graphics().p("AjrGAID2tCIDgBCIj1NDg");
	var mask_2_graphics_48 = new cjs.Graphics().p("AjtGIID6tSIDhBDIj6NSg");
	var mask_2_graphics_49 = new cjs.Graphics().p("AjwGQID/thIDiBCIj/Nhg");
	var mask_2_graphics_50 = new cjs.Graphics().p("AjzGXIEEtwIDiBDIkDNwg");
	var mask_2_graphics_51 = new cjs.Graphics().p("Aj1GeIEHt/IDkBDIkIOAg");
	var mask_2_graphics_52 = new cjs.Graphics().p("Aj4GmIEMuPIDlBEIkMOOg");
	var mask_2_graphics_53 = new cjs.Graphics().p("Aj7GtIERudIDmBEIkROdg");
	var mask_2_graphics_54 = new cjs.Graphics().p("Aj9G1IEVutIDmBEIkVOtg");
	var mask_2_graphics_55 = new cjs.Graphics().p("AkAG9IEZu8IDoBEIkZO7g");
	var mask_2_graphics_56 = new cjs.Graphics().p("AkDHEIEevLIDoBFIkePKg");
	var mask_2_graphics_57 = new cjs.Graphics().p("AkFHLIEivaIDpBFIkiPag");
	var mask_2_graphics_58 = new cjs.Graphics().p("AkIHTIEnvqIDqBFIknPpg");
	var mask_2_graphics_59 = new cjs.Graphics().p("AkLHaIEsv4IDrBFIksP4g");
	var mask_2_graphics_60 = new cjs.Graphics().p("AkNHhIEwwHIDrBGIkwQHg");
	var mask_2_graphics_61 = new cjs.Graphics().p("AkQHoIE1wVIDsBGIk0QWg");
	var mask_2_graphics_62 = new cjs.Graphics().p("AkSHwIE5wlIDsBGIk5Qlg");
	var mask_2_graphics_63 = new cjs.Graphics().p("AJXOPIE/w0IDtBGIk+Q0g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_2_graphics_9,x:113.5,y:53.8}).wait(1).to({graphics:mask_2_graphics_10,x:213.3,y:92.6}).wait(1).to({graphics:mask_2_graphics_11,x:213.1,y:93.5}).wait(1).to({graphics:mask_2_graphics_12,x:213,y:94.3}).wait(1).to({graphics:mask_2_graphics_13,x:212.7,y:95.2}).wait(1).to({graphics:mask_2_graphics_14,x:212.6,y:96.1}).wait(1).to({graphics:mask_2_graphics_15,x:212.4,y:97}).wait(1).to({graphics:mask_2_graphics_16,x:212.2,y:97.8}).wait(1).to({graphics:mask_2_graphics_17,x:212,y:98.7}).wait(1).to({graphics:mask_2_graphics_18,x:211.8,y:99.6}).wait(1).to({graphics:mask_2_graphics_19,x:211.6,y:100.4}).wait(1).to({graphics:mask_2_graphics_20,x:211.4,y:101.3}).wait(1).to({graphics:mask_2_graphics_21,x:211.2,y:102.2}).wait(1).to({graphics:mask_2_graphics_22,x:211,y:103.1}).wait(1).to({graphics:mask_2_graphics_23,x:210.9,y:103.9}).wait(1).to({graphics:mask_2_graphics_24,x:210.7,y:104.8}).wait(1).to({graphics:mask_2_graphics_25,x:210.5,y:105.7}).wait(1).to({graphics:mask_2_graphics_26,x:210.3,y:106.6}).wait(1).to({graphics:mask_2_graphics_27,x:210.1,y:107.4}).wait(1).to({graphics:mask_2_graphics_28,x:209.9,y:108.3}).wait(1).to({graphics:mask_2_graphics_29,x:209.7,y:109.2}).wait(1).to({graphics:mask_2_graphics_30,x:209.5,y:110}).wait(1).to({graphics:mask_2_graphics_31,x:209.3,y:110.9}).wait(1).to({graphics:mask_2_graphics_32,x:209.1,y:111.8}).wait(1).to({graphics:mask_2_graphics_33,x:208.9,y:112.7}).wait(1).to({graphics:mask_2_graphics_34,x:208.7,y:113.5}).wait(1).to({graphics:mask_2_graphics_35,x:208.6,y:114.4}).wait(1).to({graphics:mask_2_graphics_36,x:208.4,y:115.3}).wait(1).to({graphics:mask_2_graphics_37,x:208.2,y:116.2}).wait(1).to({graphics:mask_2_graphics_38,x:208,y:117}).wait(1).to({graphics:mask_2_graphics_39,x:207.8,y:117.9}).wait(1).to({graphics:mask_2_graphics_40,x:207.6,y:118.8}).wait(1).to({graphics:mask_2_graphics_41,x:207.4,y:119.7}).wait(1).to({graphics:mask_2_graphics_42,x:207.2,y:120.5}).wait(1).to({graphics:mask_2_graphics_43,x:207,y:121.4}).wait(1).to({graphics:mask_2_graphics_44,x:206.9,y:122.3}).wait(1).to({graphics:mask_2_graphics_45,x:206.7,y:123.1}).wait(1).to({graphics:mask_2_graphics_46,x:206.5,y:124}).wait(1).to({graphics:mask_2_graphics_47,x:206.3,y:124.9}).wait(1).to({graphics:mask_2_graphics_48,x:206.1,y:125.8}).wait(1).to({graphics:mask_2_graphics_49,x:205.9,y:126.6}).wait(1).to({graphics:mask_2_graphics_50,x:205.7,y:127.5}).wait(1).to({graphics:mask_2_graphics_51,x:205.5,y:128.4}).wait(1).to({graphics:mask_2_graphics_52,x:205.3,y:129.3}).wait(1).to({graphics:mask_2_graphics_53,x:205.1,y:130.1}).wait(1).to({graphics:mask_2_graphics_54,x:204.9,y:131}).wait(1).to({graphics:mask_2_graphics_55,x:204.8,y:131.9}).wait(1).to({graphics:mask_2_graphics_56,x:204.6,y:132.7}).wait(1).to({graphics:mask_2_graphics_57,x:204.4,y:133.6}).wait(1).to({graphics:mask_2_graphics_58,x:204.2,y:134.5}).wait(1).to({graphics:mask_2_graphics_59,x:204,y:135.4}).wait(1).to({graphics:mask_2_graphics_60,x:203.8,y:136.2}).wait(1).to({graphics:mask_2_graphics_61,x:203.6,y:137.1}).wait(1).to({graphics:mask_2_graphics_62,x:203.4,y:138}).wait(1).to({graphics:mask_2_graphics_63,x:115.5,y:98.1}).wait(513));

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(15,1,1).p("ABRlzIihLn");
	this.shape_3.setTransform(201.4,146.6);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(9).to({_off:false},0).wait(567));

	// number
	this.instance_3 = new lib._7("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(275,275);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(576));

	// Background
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F59E9E").ss(3,1,1).p("EAq+Aq+MhV7AAAMAAAhV7MBV7AAAg");
	this.shape_4.setTransform(275,275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F6E7E7").s().p("Egq9Aq+MAAAhV7MBV7AAAMAAABV7g");
	this.shape_5.setTransform(275,275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(576));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(273.5,273.5,553,553);
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