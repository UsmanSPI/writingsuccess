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


(lib.bubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKA5IAAhSIAVAAIAABSgAgKgkIAAgUIAVAAIAAAUg");
	this.shape.setTransform(-149.3,-105.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAXA5IAAgyIgsAAIAAAyIgYAAIAAhxIAYAAIAAAtIAsAAIAAgtIAXAAIAABxg");
	this.shape_1.setTransform(-157.3,-105.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAnAqIAAguQAAgMgDgEQgCgFgHABQgEAAgFACQgEADgBAGQgCAFAAALIAAAnIgVAAIAAgsQAAgMgBgEQgCgDgCgCQgDgBgDAAQgFAAgEACQgEADgDAFQgBAFAAALIAAAoIgWAAIAAhSIAUAAIAAAMQALgNAPAAQAIgBAGAEQAEADAEAHQAGgHAGgDQAHgEAGABQAKAAAGADQAHAEADAHQACAFAAAMIAAA0g");
	this.shape_2.setTransform(-127.4,-104.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGAUIgFgUIAAgTIAXAAIAAATIgEAUg");
	this.shape_3.setTransform(-136.4,-109.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLA5IAAhxIAXAAIAABxg");
	this.shape_4.setTransform(-140.5,-105.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQABQASAAALAMQAKAMAAAYIg2AAQAAAKAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNgBQgVAAgKgOgAARgGQAAgJgFgGQgFgEgGAAQgGAAgFAEQgFAGAAAJIAgAAIAAAAg");
	this.shape_5.setTransform(-69.9,-104.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgkApIAAgRIAfgjIAKgMIgJAAIgdAAIAAgSIBEAAIAAAQIggAkIgKAMIAKgBIAiAAIAAATg");
	this.shape_6.setTransform(-82.7,-104.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgkApIAAgRIAfgjIAKgMIgJAAIgdAAIAAgSIBEAAIAAAQIggAkIgKAMIAKgBIAiAAIAAATg");
	this.shape_7.setTransform(-90.7,-104.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgYAmQgHgDgDgGQgDgHAAgMIAAg0IAWAAIAAAmQAAARABAEQACAEADACQADACAFABQAFgBAEgDQAFgDABgEQACgEAAgRIAAgkIAWAAIAABSIgVAAIAAgMQgEAHgIADQgGAEgIAAQgJAAgGgEg");
	this.shape_8.setTransform(-99.5,-104.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgvA5IAAhxIAuAAIATABQAHABAGAEQAFADADAGQADAGAAAIQAAAIgEAGQgEAHgIADQALADAFAHQAGAHAAAKQAAAIgEAHQgDAIgHAEQgFAEgKABIgbABgAgXAmIAVAAIAPgBQAFgBADgDQADgEAAgGQAAgFgCgEQgDgDgEgCQgFgCgPAAIgSAAgAgXgLIAOAAIAQAAQAGgBADgDQAEgEAAgFQAAgFgDgEQgDgDgGgBIgTAAIgMAAg");
	this.shape_9.setTransform(-110,-105.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgKA5IAAhSIAVAAIAABSgAgKgkIAAgUIAVAAIAAAUg");
	this.shape_10.setTransform(-149.3,-105.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAQA5IAAgsQAAgNgBgCQgCgEgDgCQgDgCgFAAQgEAAgFADQgEADgCAEQgCAFAAALIAAApIgWAAIAAhxIAWAAIAAAqQALgNAOAAQAHAAAGADQAGADADAEQADAFACAFIABAQIAAAwg");
	this.shape_11.setTransform(-50.8,-105.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgDA3QgEgCgCgDQgDgDgBgGIgBgPIAAgjIgKAAIAAgSIAKAAIAAgQIAWgNIAAAdIAOAAIAAASIgOAAIAAAgIAAAMIACADIADABIAJgCIACARQgHADgKAAQgGAAgEgCg");
	this.shape_12.setTransform(-58.3,-105.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQABQASAAALAMQAKAMAAAYIg2AAQAAAKAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNgBQgVAAgKgOgAARgGQAAgJgFgGQgFgEgGAAQgGAAgFAEQgFAGAAAJIAgAAIAAAAg");
	this.shape_13.setTransform(-69.9,-104.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgcA0QgIgHAAgLIAAgDIAZADQAAAFADABQADADAFAAQAJAAAEgDQADgCABgDIABgLIAAgMQgKAOgOAAQgQAAgKgOQgIgMABgPQAAgVAKgLQAJgLAPAAQAPAAAKANIAAgLIAVAAIAABJQAAAPgDAHQgCAHgEAFQgFAEgIACQgGACgMAAQgUAAgJgHgAgMgjQgFAGAAANQAAANAFAFQAGAGAGAAQAIAAAGgGQAFgGAAgMQAAgNgFgGQgGgGgIAAQgGAAgGAGg");
	this.shape_14.setTransform(14.5,-102.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAQAqIAAgqQAAgNgCgDQgBgEgDgCQgDgCgFAAQgFAAgEACQgFADgBAGQgCAFAAANIAAAlIgWAAIAAhSIAUAAIAAAMQALgOAQABQAHAAAGACQAGADADAEQADAEACAFIABAPIAAAyg");
	this.shape_15.setTransform(4.9,-104.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgaAqIAAhSIAVAAIAAAMQAEgIAEgDQAEgCAFAAQAIgBAHAFIgHATQgFgDgFgBQgFABgDACQgCACgCAHQgCAGAAAVIAAAZg");
	this.shape_16.setTransform(-16.5,-104.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAOApIgOg0IgNA0IgVAAIgbhSIAVAAIAQA2IAOg2IAVAAIANA2IAQg2IAWAAIgbBSg");
	this.shape_17.setTransform(-26.4,-104.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgDA3QgEgCgCgDQgDgDgBgGIgBgPIAAgjIgKAAIAAgSIAKAAIAAgQIAWgNIAAAdIAOAAIAAASIgOAAIAAAgIAAAMIACADIADABIAJgCIACARQgHADgKAAQgGAAgEgCg");
	this.shape_18.setTransform(-58.3,-105.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgKA5IAAhSIAVAAIAABSgAgKgkIAAgUIAVAAIAAAUg");
	this.shape_19.setTransform(-76.4,-105.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgKA5IAAhSIAVAAIAABSgAgKgkIAAgUIAVAAIAAAUg");
	this.shape_20.setTransform(-149.3,-105.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape_21.setTransform(53.6,-101.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgHA3QgHgEgFgHIAAAMIgVAAIAAhxIAXAAIAAApQAJgMANAAQAPAAAKALQALALgBAUQABAVgLAMQgKALgOAAQgGAAgHgDgAgNgFQgEAFAAANQAAANADAGQAGAJAJAAQAHAAAFgGQAFgHAAgNQAAgOgFgFQgFgHgIAAQgHAAgGAGg");
	this.shape_22.setTransform(29,-105.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQABQASAAALAMQAKAMAAAYIg2AAQAAAKAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNgBQgVAAgKgOgAARgGQAAgJgFgGQgFgEgGAAQgGAAgFAEQgFAGAAAJIAgAAIAAAAg");
	this.shape_23.setTransform(-41.6,-104.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQABQASAAALAMQAKAMAAAYIg2AAQAAAKAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNgBQgVAAgKgOgAARgGQAAgJgFgGQgFgEgGAAQgGAAgFAEQgFAGAAAJIAgAAIAAAAg");
	this.shape_24.setTransform(-69.9,-104.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgZAlQgKgIgDgLIAWgEQABAHAFADQAEADAHABQAIAAAFgEQACgCAAgDQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgCgBgFgCQgagFgHgFQgKgGAAgMQAAgLAJgHQAIgHASAAQAQAAAIAFQAJAGADAKIgVAFQgBgFgEgDQgEgCgGAAQgIAAgEACQgDACAAACQAAABAAABQABAAAAABQAAAAABABQAAAAABABQADABAQAFQASAEAHAFQAHAFAAAKQAAAMgKAIQgKAJgSAAQgQgBgKgGg");
	this.shape_25.setTransform(-131.1,-84.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgHAUIgEgUIAAgTIAXAAIAAATIgDAUg");
	this.shape_26.setTransform(-137.3,-89.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgCA3QgGgCgBgDQgDgDgBgGIgBgPIAAgjIgKAAIAAgSIAKAAIAAgQIAWgNIAAAdIAOAAIAAASIgOAAIAAAgIAAAMIACADIADABIAJgCIADARQgJADgJAAQgGAAgDgCg");
	this.shape_27.setTransform(-141.8,-85.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQABQASAAALAMQAKAMAAAYIg2AAQAAAKAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAARgGQAAgJgFgGQgFgEgGAAQgGAAgFAEQgFAGAAAJIAgAAIAAAAg");
	this.shape_28.setTransform(-149,-84.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgnA5IAAhxIAXAAIAABdIA4AAIAAAUg");
	this.shape_29.setTransform(-157.8,-85.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAQAqIAAgqQAAgNgCgDQgBgEgDgDQgDgBgFAAQgFAAgEACQgFADgBAGQgCAFAAANIAAAlIgWAAIAAhSIAUAAIAAAMQALgOAQABQAHAAAGACQAGADADAEQADAEACAFIABAPIAAAyg");
	this.shape_30.setTransform(-88.9,-84.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgaAqIAAhSIAVAAIAAAMQAEgIAEgDQAEgCAGAAQAHAAAHAEIgHATQgFgDgFgBQgFABgDACQgCACgCAHQgCAGAAAVIAAAZg");
	this.shape_31.setTransform(-96.3,-84.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgfAlQgHgIAAgKQAAgHADgGQAEgFAGgCQAGgDALgCQAPgDAGgDIAAgCQAAgGgEgDQgCgDgIABQgGgBgDADQgEACgCAGIgTgDQADgNAIgFQAIgHAQABQAOAAAHADQAIADACAGQAEAFAAAOIgBAZIABAQQABAFADAGIgVAAIgCgGIgBgDQgGAGgHACQgFADgHABQgNgBgIgGgAAAAFQgJACgCACQgFADAAAFQAAAEADADQAEAEAFAAQAFAAAGgEQAEgDABgEQABgDAAgIIAAgEg");
	this.shape_32.setTransform(-104.4,-84.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_33.setTransform(-119.9,-86);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQABQASAAALAMQAKAMAAAYIg2AAQAAAKAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAARgGQAAgJgFgGQgFgEgGAAQgGAAgFAEQgFAGAAAJIAgAAIAAAAg");
	this.shape_34.setTransform(-149,-84.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgVAmQgKgFgFgKQgGgKAAgNQAAgLAGgLQAFgKAKgFQAKgFALAAQATAAAMAMQAMAMAAASQAAATgMAMQgNANgSAAQgKAAgLgGgAgNgSQgGAHAAALQAAANAGAGQAFAHAIAAQAJAAAFgHQAGgGAAgNQAAgLgGgHQgFgGgJAAQgIAAgFAGg");
	this.shape_35.setTransform(-69.5,-84.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgCA3QgGgCgBgDQgDgDgBgGIgBgPIAAgjIgKAAIAAgSIAKAAIAAgQIAWgNIAAAdIAOAAIAAASIgOAAIAAAgIAAAMIACADIADABIAJgCIADARQgJADgJAAQgGAAgDgCg");
	this.shape_36.setTransform(-141.8,-85.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgDA3QgEgCgDgDQgCgDgBgGIgBgPIAAgjIgJAAIAAgSIAJAAIAAgQIAVgNIAAAdIAPAAIAAASIgPAAIAAAgIABAMIACADIADABIAJgCIACARQgHADgKAAQgGAAgEgCg");
	this.shape_37.setTransform(-34.5,-85.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgaAqIAAhSIAVAAIAAAMQAEgIAEgDQAEgCAGAAQAHAAAHAEIgHATQgFgDgFgBQgFABgDACQgCACgCAHQgCAGAAAVIAAAZg");
	this.shape_38.setTransform(-96.3,-84.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQABQASAAALAMQAKAMAAAYIg2AAQAAAKAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAARgGQAAgJgFgGQgFgEgGAAQgGAAgFAEQgFAGAAAJIAgAAIAAAAg");
	this.shape_39.setTransform(-149,-84.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAOApIgOg0IgNA0IgVAAIgbhSIAVAAIAQA2IAOg2IAVAAIANA2IAQg2IAWAAIgbBSg");
	this.shape_40.setTransform(-26.4,-104.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgKA5IAAhSIAVAAIAABSgAgKgkIAAgUIAVAAIAAAUg");
	this.shape_41.setTransform(-149.3,-105.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQABQASAAALAMQAKAMAAAYIg2AAQAAAKAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAARgGQAAgJgFgGQgFgEgGAAQgGAAgFAEQgFAGAAAJIAgAAIAAAAg");
	this.shape_42.setTransform(-149,-84.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAQA5IAAgsQAAgNgBgCQgCgEgDgCQgDgCgFAAQgEAAgFADQgEADgCAEQgCAFAAALIAAApIgWAAIAAhxIAWAAIAAAqQALgNAOAAQAHAAAGADQAGADADAEQADAFACAFIABAQIAAAwg");
	this.shape_43.setTransform(-50.8,-105.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgDA3QgEgCgCgDQgDgDgBgGIgBgPIAAgjIgKAAIAAgSIAKAAIAAgQIAWgNIAAAdIAOAAIAAASIgOAAIAAAgIAAAMIACADIADABIAJgCIACARQgHADgKAAQgGAAgEgCg");
	this.shape_44.setTransform(-58.3,-105.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgCA3QgGgCgBgDQgDgDgBgGIgBgPIAAgjIgKAAIAAgSIAKAAIAAgQIAWgNIAAAdIAPAAIAAASIgPAAIAAAgIAAAMIACADIAEABIAJgCIACARQgJADgJAAQgGAAgDgCg");
	this.shape_45.setTransform(72.5,-85.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgHA3QgHgEgFgHIAAAMIgUAAIAAhxIAWAAIAAApQAKgMANAAQAPAAAJALQALALAAAUQAAAVgLAMQgJALgPAAQgGAAgHgDgAgMgFQgGAFABANQgBANAEAGQAGAJAIAAQAIAAAFgGQAFgHAAgNQAAgOgFgFQgFgHgIAAQgHAAgFAGg");
	this.shape_46.setTransform(56.3,-85.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgfAlQgHgIAAgKQAAgHAEgGQADgFAGgCQAGgDAMgCQAOgDAGgDIAAgCQAAgGgDgDQgEgDgHABQgGgBgEADQgCACgCAGIgVgDQAEgNAIgFQAIgHAQABQAOAAAIADQAGADAEAGQACAFAAAOIAAAZIABAQQABAFADAGIgWAAIgCgGIgBgDQgFAGgGACQgGADgHABQgNgBgIgGgAAAAFQgIACgEACQgEADAAAFQAAAEAEADQADAEAFAAQAFAAAFgEQAFgDABgEQABgDAAgIIAAgEg");
	this.shape_47.setTransform(46.8,-84.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgoA6IAAhxIAVAAIAAAMQAEgGAHgEQAHgEAGAAQAPAAAKALQAKAMAAAUQAAAUgKALQgKAMgPAAQgFAAgGgDQgFgDgGgGIAAApgAgNghQgFAGAAAMQAAAOAFAGQAGAGAHAAQAIAAAFgGQAFgFAAgOQAAgNgFgGQgFgHgIAAQgIAAgFAHg");
	this.shape_48.setTransform(28,-82.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgfAlQgHgIAAgKQAAgHAEgGQADgFAGgCQAGgDAMgCQAOgDAGgDIAAgCQAAgGgDgDQgEgDgHABQgGgBgEADQgDACgBAGIgUgDQADgNAIgFQAIgHAQABQAOAAAHADQAIADACAGQADAFAAAOIAAAZIABAQQABAFADAGIgVAAIgDgGIgBgDQgFAGgGACQgGADgHABQgNgBgIgGgAAAAFQgJACgDACQgEADAAAFQAAAEADADQAEAEAFAAQAGAAAEgEQAFgDABgEQABgDAAgIIAAgEg");
	this.shape_49.setTransform(14.1,-84.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_50.setTransform(-119.9,-86);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQABQASAAALAMQAKAMAAAYIg2AAQAAAKAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAARgGQAAgJgFgGQgFgEgGAAQgGAAgFAEQgFAGAAAJIAgAAIAAAAg");
	this.shape_51.setTransform(-149,-84.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape_52.setTransform(53.6,-101.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAQA5IAAgsQAAgNgBgCQgCgEgDgCQgDgCgFAAQgEAAgFADQgEADgCAEQgCAFAAALIAAApIgWAAIAAhxIAWAAIAAAqQALgNAOAAQAHAAAGADQAGADADAEQADAFACAFIABAQIAAAwg");
	this.shape_53.setTransform(-50.8,-105.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgbAgQgLgLAAgVQAAgTALgMQALgMARAAQAPABAJAGQAJAHAEANIgWAEQgBgHgDgDQgEgDgHAAQgHAAgFAGQgFAGAAANQAAAOAFAFQAFAGAIABQAGAAAEgEQAEgDACgJIAVADQgDAPgKAIQgJAIgQAAQgRAAgLgMg");
	this.shape_54.setTransform(-129.3,-64.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgDA3QgEgCgDgDQgCgDgBgGIAAgPIAAgjIgKAAIAAgSIAKAAIAAgQIAUgNIAAAdIAQAAIAAASIgQAAIAAAgIABAMIACADIAEABIAJgCIABARQgHADgKAAQgGAAgEgCg");
	this.shape_55.setTransform(-136.4,-65.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgfAlQgHgIAAgKQAAgHAEgFQADgGAGgCQAGgDAMgCQAOgDAGgDIAAgCQAAgGgDgDQgEgDgHABQgGgBgEADQgCACgCAGIgVgDQAEgNAIgFQAIgHAQAAQAOABAIADQAGADADAGQADAFAAAPIAAAYIABAQQABAGADAFIgWAAIgCgGIgBgDQgFAGgGACQgGAEgHAAQgNgBgIgGgAAAAFQgIACgEACQgEADAAAFQAAAEADAEQAEADAFAAQAFAAAFgEQAFgDABgEQABgDAAgIIAAgFg");
	this.shape_56.setTransform(-143.5,-64.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAXA5IgXhUIgWBUIgZAAIgbhxIAXAAIASBNIAVhNIAaAAIAUBPIAShPIAXAAIgcBxg");
	this.shape_57.setTransform(-155.5,-66.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAQA5IAAgsQAAgNgBgCQgCgEgDgCQgDgCgFAAQgEAAgFADQgEADgCAEQgCAFAAALIAAApIgWAAIAAhxIAWAAIAAAqQALgNAOAAQAHAAAGADQAGADADAEQADAFACAFIABAQIAAAwg");
	this.shape_58.setTransform(-50.8,-105.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgZAlQgKgIgDgLIAWgEQABAHAFADQAEADAHABQAIAAAFgDQACgDAAgDQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgCgBgFgCQgagFgHgFQgKgGAAgMQAAgKAJgIQAIgHASgBQAQABAIAFQAJAGADAKIgVAFQgBgFgEgDQgEgDgGABQgIgBgEADQgDABAAAEQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQADACAQAFQASAEAHAFQAHAFAAALQAAALgKAIQgKAJgSAAQgQgBgKgGg");
	this.shape_59.setTransform(-97.7,-64.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgeAlQgIgIAAgKQAAgHADgFQAEgGAGgCQAGgDALgCQAPgDAGgDIAAgCQAAgGgEgDQgDgDgHABQgGgBgEADQgCACgDAGIgUgDQAEgNAIgFQAIgHAQAAQAOABAIADQAHADADAGQACAFAAAPIAAAYIABAQQABAGADAFIgWAAIgCgGIAAgDQgGAGgGACQgGAEgHAAQgNgBgHgGgAAAAFQgIACgDACQgFADAAAFQAAAEAEAEQADADAGAAQAFAAAEgEQAEgDACgEQABgDAAgIIAAgFg");
	this.shape_60.setTransform(-106.4,-64.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgLA5IAAhxIAXAAIAABxg");
	this.shape_61.setTransform(-140.5,-105.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQAAQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAARgGQAAgJgFgGQgFgEgGAAQgGAAgFAEQgFAGAAAJIAgAAIAAAAg");
	this.shape_62.setTransform(-47.3,-64.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgaAqIAAhSIAVAAIAAANQAEgJAEgDQAEgDAFAAQAIABAHAEIgHATQgFgDgFgBQgFABgDACQgCADgCAGQgCAHAAAUIAAAZg");
	this.shape_63.setTransform(-63.8,-64.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAOApIgOg0IgNA0IgVAAIgbhSIAVAAIAQA2IAOg2IAVAAIANA2IAQg2IAWAAIgbBSg");
	this.shape_64.setTransform(-26.4,-104.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgDA3QgEgCgCgDQgDgDgBgGIgBgPIAAgjIgKAAIAAgSIAKAAIAAgQIAWgNIAAAdIAOAAIAAASIgOAAIAAAgIAAAMIACADIADABIAJgCIACARQgHADgKAAQgGAAgEgCg");
	this.shape_65.setTransform(-58.3,-105.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgKA5IAAhSIAVAAIAABSgAgKgkIAAgUIAVAAIAAAUg");
	this.shape_66.setTransform(-149.3,-105.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgDA3QgEgCgCgDQgDgDgBgGIgBgPIAAgjIgKAAIAAgSIAKAAIAAgQIAWgNIAAAdIAOAAIAAASIgOAAIAAAgIAAAMIACADIADABIAJgCIADARQgIADgKAAQgGAAgEgCg");
	this.shape_67.setTransform(-35.7,-65.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQAAQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAARgGQAAgJgFgGQgFgEgGAAQgGAAgFAEQgFAGAAAJIAgAAIAAAAg");
	this.shape_68.setTransform(-47.3,-64.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAQA5IAAgsQAAgNgBgCQgCgEgDgCQgDgCgFAAQgEAAgFADQgEADgCAEQgCAFAAALIAAApIgWAAIAAhxIAWAAIAAAqQALgNAOAAQAHAAAGADQAGADADAEQADAFACAFIABAQIAAAwg");
	this.shape_69.setTransform(-50.8,-105.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgLAPQAHgCADgEQABgEAAgGIgJAAIAAgWIAVAAIAAAQQAAAJgCAFQgCAGgEAEQgEAEgHADg");
	this.shape_70.setTransform(39.8,-60.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgaAqIAAhSIAVAAIAAANQAFgJADgDQAEgDAGAAQAHABAHAEIgHATQgFgDgGgBQgEABgDACQgCADgCAGQgCAHAAAUIAAAZg");
	this.shape_71.setTransform(26.4,-64.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgCA3QgFgCgDgDQgCgDgBgGIAAgPIAAgjIgKAAIAAgSIAKAAIAAgQIAUgNIAAAdIAQAAIAAASIgQAAIAAAgIABAMIACADIAEABIAJgCIABARQgHADgKAAQgGAAgDgCg");
	this.shape_72.setTransform(11.2,-65.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgDA3QgFgCgCgDQgCgDgBgGIAAgPIAAgjIgKAAIAAgSIAKAAIAAgQIAUgNIAAAdIAPAAIAAASIgPAAIAAAgIABAMIACADIADABIAJgCIACARQgIADgJAAQgGAAgEgCg");
	this.shape_73.setTransform(5.9,-65.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQAAQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAARgGQAAgJgFgGQgFgEgGAAQgGAAgFAEQgFAGAAAJIAgAAIAAAAg");
	this.shape_74.setTransform(-19,-64.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQAAQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAARgGQAAgJgFgGQgFgEgGAAQgGAAgFAEQgFAGAAAJIAgAAIAAAAg");
	this.shape_75.setTransform(-47.3,-64.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgZAlQgKgIgDgLIAWgEQABAHAFADQAEADAHABQAIAAAFgDQACgDAAgDQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgCgBgFgCQgagFgHgFQgKgGAAgMQAAgKAJgIQAIgHASgBQAQABAIAFQAJAGADAKIgVAFQgBgFgEgDQgEgDgGABQgIgBgEADQgDABAAAEQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQADACAQAFQASAEAHAFQAHAFAAALQAAALgKAIQgKAJgSAAQgQgBgKgGg");
	this.shape_76.setTransform(-97.7,-64.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_77.setTransform(-119.9,-86);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAQAqIAAgqQAAgMgCgEQgBgEgDgDQgDgBgFAAQgFAAgEACQgFADgBAGQgCAFAAANIAAAlIgWAAIAAhSIAUAAIAAANQALgOAQgBQAHAAAGADQAGADADAEQADAEACAFIABAPIAAAyg");
	this.shape_78.setTransform(75.3,-64.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgDA3QgEgCgDgDQgCgDgBgGIAAgPIAAgjIgKAAIAAgSIAKAAIAAgQIAUgNIAAAdIAPAAIAAASIgPAAIAAAgIABAMIACADIADABIAJgCIACARQgHADgKAAQgGAAgEgCg");
	this.shape_79.setTransform(49.2,-65.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgdAdQgJgLAAgRQAAgUALgMQALgMAQAAQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNAAQgVAAgKgPgAARgGQAAgJgFgGQgFgEgGAAQgGAAgFAEQgFAGAAAJIAgAAIAAAAg");
	this.shape_80.setTransform(-47.3,-64.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAQA5IAAgsQAAgNgBgCQgCgEgDgCQgDgCgFAAQgEAAgFADQgEADgCAEQgCAFAAALIAAApIgWAAIAAhxIAWAAIAAAqQALgNAOAAQAHAAAGADQAGADADAEQADAFACAFIABAQIAAAwg");
	this.shape_81.setTransform(-50.8,-105.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgYAmQgHgDgDgHQgDgGAAgMIAAg0IAWAAIAAAmQAAARABAEQACAEADADQADACAFAAQAFAAAEgEQAFgDABgEQACgFAAgRIAAgjIAWAAIAABSIgVAAIAAgMQgEAGgIAEQgGAFgIAAQgJAAgGgFg");
	this.shape_82.setTransform(108,-64.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgVAmQgKgFgFgKQgGgKAAgNQAAgLAGgLQAFgJAKgGQAKgFALgBQATAAAMANQAMAMAAASQAAATgMAMQgNANgSAAQgKAAgLgGgAgNgSQgGAHAAALQAAANAGAGQAFAHAIAAQAJAAAFgHQAGgGAAgNQAAgLgGgHQgFgGgJgBQgIABgFAGg");
	this.shape_83.setTransform(98.3,-64.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgiA5IgCgRIAJABQAIAAADgFQAEgEACgHIgghSIAYAAIATA6IATg6IAXAAIgeBPIgFAOIgFALQgDAEgCACQgEADgFABIgLABIgMgBg");
	this.shape_84.setTransform(88.9,-62.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgdAdQgJgLAAgSQAAgTALgMQALgLAQgBQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgCACgHIAWAEQgFAMgJAGQgJAGgNABQgVAAgKgPgAARgGQAAgKgFgEQgFgGgGAAQgGAAgFAGQgFAFAAAJIAgAAIAAAAg");
	this.shape_85.setTransform(-130.4,-44.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgaArIAAhTIAUAAIAAANQAFgJAEgDQAEgDAFAAQAIABAHAEIgHATQgGgEgEAAQgFAAgDADQgDADgBAGQgCAHAAAUIAAAag");
	this.shape_86.setTransform(-146.9,-44.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAOAqIgOg1IgNA1IgVAAIgbhTIAVAAIAQA2IAPg2IAUAAIANA2IAQg2IAWAAIgbBTg");
	this.shape_87.setTransform(-156.8,-44.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgDA3QgEgCgCgDQgDgDgBgGIgBgPIAAgjIgKAAIAAgSIAKAAIAAgQIAWgNIAAAdIAOAAIAAASIgOAAIAAAgIAAAMIACADIADABIAJgCIADARQgIADgKAAQgGAAgEgCg");
	this.shape_88.setTransform(-35.7,-65.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgKA5IAAhSIAVAAIAABSgAgKgkIAAgUIAVAAIAAAUg");
	this.shape_89.setTransform(-149.3,-105.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgdAdQgJgLAAgSQAAgTALgMQALgLAQgBQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgCACgHIAWAEQgFAMgJAGQgJAGgNABQgVAAgKgPgAARgGQAAgKgFgEQgFgGgGAAQgGAAgFAGQgFAFAAAJIAgAAIAAAAg");
	this.shape_90.setTransform(-130.4,-44.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgCA3QgGgCgBgDQgDgDgBgGIgBgPIAAgjIgKAAIAAgSIAKAAIAAgQIAWgNIAAAdIAOAAIAAASIgOAAIAAAgIAAAMIACADIADABIAJgCIADARQgJADgJAAQgGAAgDgCg");
	this.shape_91.setTransform(-141.8,-85.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AAQA5IAAgsQAAgNgBgCQgCgEgDgCQgDgCgFAAQgEAAgFADQgEADgCAEQgCAFAAALIAAApIgWAAIAAhxIAWAAIAAAqQALgNAOAAQAHAAAGADQAGADADAEQADAFACAFIABAQIAAAwg");
	this.shape_92.setTransform(-50.8,-105.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgZAkQgKgHgDgLIAWgDQABAGAFADQAEADAHAAQAIAAAFgCQACgDAAgEQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgCgCgFgCQgagFgHgFQgKgGAAgMQAAgKAJgIQAIgHASgBQAQABAIAFQAJAGADALIgVADQgBgEgEgDQgEgDgGABQgIgBgEADQgDABAAAEQAAAAAAABQABAAAAABQAAAAABAAQAAABABAAQADACAQAFQASAEAHAFQAHAFAAALQAAALgKAIQgKAJgSAAQgQAAgKgIg");
	this.shape_93.setTransform(-50.1,-44.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgaArIAAhTIAVAAIAAANQAFgJADgDQAEgDAGAAQAHABAHAEIgHATQgFgEgGAAQgEAAgDADQgCADgCAGQgCAHAAAUIAAAag");
	this.shape_94.setTransform(-56.8,-44.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgdAdQgJgLAAgSQAAgTALgMQALgLAQgBQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgCACgHIAWAEQgFAMgJAGQgJAGgNABQgVAAgKgPgAARgGQAAgKgFgEQgFgGgGAAQgGAAgFAGQgFAFAAAJIAgAAIAAAAg");
	this.shape_95.setTransform(-102.1,-44.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgdAdQgJgLAAgSQAAgTALgMQALgLAQgBQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgCACgHIAWAEQgFAMgJAGQgJAGgNABQgVAAgKgPgAARgGQAAgKgFgEQgFgGgGAAQgGAAgFAGQgFAFAAAJIAgAAIAAAAg");
	this.shape_96.setTransform(-130.4,-44.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgDA3QgFgCgCgDQgCgDgBgGIAAgPIAAgjIgKAAIAAgSIAKAAIAAgQIAUgNIAAAdIAPAAIAAASIgPAAIAAAgIABAMIACADIADABIAJgCIACARQgIADgJAAQgGAAgEgCg");
	this.shape_97.setTransform(5.9,-65.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgDA3QgEgCgDgDQgCgDgBgGIgBgPIAAgjIgJAAIAAgSIAJAAIAAgQIAVgNIAAAdIAPAAIAAASIgPAAIAAAgIABAMIACADIADABIAJgCIACARQgHADgKAAQgGAAgEgCg");
	this.shape_98.setTransform(-34.5,-85.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_99.setTransform(-119.9,-86);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape_100.setTransform(53.6,-101.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgYAmQgHgDgDgHQgDgGAAgMIAAg0IAWAAIAAAnQAAAQABAEQACAEADADQADACAFAAQAFAAAEgDQAFgDABgFQACgEAAgSIAAgjIAWAAIAABTIgVAAIAAgNQgEAGgIAEQgGAFgIAAQgJAAgGgFg");
	this.shape_101.setTransform(8.9,-44.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgPA6IAAhAIgMAAIAAgSIAMAAIAAgGQAAgKACgGQADgFAFgDQAFgDAKAAQAJAAAJADIgDAPIgKgBQgFAAgCACQgCACAAAGIAAAGIAQAAIAAASIgQAAIAABAg");
	this.shape_102.setTransform(1.8,-46.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgaArIAAhTIAUAAIAAANQAGgJADgDQAEgDAFAAQAIABAHAEIgHATQgGgEgFAAQgEAAgDADQgCADgCAGQgCAHAAAUIAAAag");
	this.shape_103.setTransform(-12.5,-44.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgfAkQgHgHAAgKQAAgHAEgFQADgGAGgCQAGgDAMgCQAOgDAGgCIAAgDQAAgGgDgDQgEgCgHgBQgGABgEACQgCACgCAGIgVgDQAEgNAIgFQAIgHAQAAQAOABAIADQAGAEADAFQADAFAAAPIAAAYIABAQQABAGADAGIgWAAIgCgHIgBgCQgFAFgGACQgGAEgHAAQgNAAgIgIgAAAAFQgIACgEACQgEADAAAFQAAAEADAEQAEADAFAAQAFAAAFgEQAFgDABgEQABgDAAgIIAAgFg");
	this.shape_104.setTransform(-20.7,-44.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgiAsQgPgQAAgbQAAgcAPgPQAOgQAXAAQAWAAANAMQAIAIADANIgWAGQgDgJgGgFQgGgFgJAAQgMAAgIAJQgIAJAAAUQAAAVAIAJQAHAJAMAAQAKAAAGgFQAGgGAEgNIAWAHQgGATgMAJQgMAJgRAAQgXAAgOgPg");
	this.shape_105.setTransform(-30.9,-46.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgdAdQgJgLAAgSQAAgTALgMQALgLAQgBQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgCACgHIAWAEQgFAMgJAGQgJAGgNABQgVAAgKgPgAARgGQAAgKgFgEQgFgGgGAAQgGAAgFAGQgFAFAAAJIAgAAIAAAAg");
	this.shape_106.setTransform(-130.4,-44.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgiA5IgCgRIAJABQAIAAADgFQAEgEACgHIgghSIAYAAIATA6IATg6IAXAAIgeBPIgFAOIgFALQgDAEgCACQgEADgFABIgLABIgMgBg");
	this.shape_107.setTransform(88.9,-62.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_108.setTransform(20.7,-86);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_109.setTransform(-119.9,-86);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAOAqIgOg1IgNA1IgVAAIgbhTIAVAAIAQA2IAOg2IAVAAIANA2IAQg2IAWAAIgbBTg");
	this.shape_110.setTransform(75.7,-44.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgVAmQgKgFgFgKQgGgKAAgNQAAgLAGgLQAFgJAKgGQAKgFALgBQATAAAMANQAMAMAAASQAAATgMAMQgNANgSAAQgKgBgLgFgAgNgSQgGAHAAALQAAAMAGAHQAFAGAIABQAJgBAFgGQAGgHAAgMQAAgLgGgHQgFgGgJgBQgIABgFAGg");
	this.shape_111.setTransform(64.6,-44.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgVAmQgKgFgFgKQgGgKAAgNQAAgLAGgLQAFgJAKgGQAKgFALgBQATAAAMANQAMAMAAASQAAATgMAMQgNANgSAAQgKgBgLgFgAgNgSQgGAHAAALQAAAMAGAHQAFAGAIABQAJgBAFgGQAGgHAAgMQAAgLgGgHQgFgGgJgBQgIABgFAGg");
	this.shape_112.setTransform(46.1,-44.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgPA6IAAhAIgMAAIAAgSIAMAAIAAgGQAAgKADgGQABgFAHgDQAFgDAIAAQAKAAAJADIgDAPIgKgBQgFAAgCACQgCACAAAGIAAAGIARAAIAAASIgRAAIAABAg");
	this.shape_113.setTransform(38.9,-46.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_114.setTransform(20.7,-86);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_115.setTransform(-119.9,-86);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgdAdQgJgLAAgSQAAgTALgMQALgLAQgBQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgCACgHIAWAEQgFAMgJAGQgJAGgNABQgVAAgKgPgAARgGQAAgKgFgEQgFgGgGAAQgGAAgFAGQgFAFAAAJIAgAAIAAAAg");
	this.shape_116.setTransform(-130.4,-44.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgDA3QgEgCgCgDQgDgDgBgGIgBgPIAAgjIgKAAIAAgSIAKAAIAAgQIAWgNIAAAdIAOAAIAAASIgOAAIAAAgIAAAMIACADIADABIAJgCIADARQgIADgKAAQgGAAgEgCg");
	this.shape_117.setTransform(-35.7,-65.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AAQA5IAAgsQAAgNgBgCQgCgEgDgCQgDgCgFAAQgEAAgFADQgEADgCAEQgCAFAAALIAAApIgWAAIAAhxIAWAAIAAAqQALgNAOAAQAHAAAGADQAGADADAEQADAFACAFIABAQIAAAwg");
	this.shape_118.setTransform(-50.8,-105.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgZAkQgKgHgDgLIAWgDQABAGAFADQAEADAHAAQAIAAAFgCQACgDAAgEQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgCgCgFgCQgagFgHgFQgKgGAAgMQAAgLAJgHQAIgIASAAQAQABAIAFQAJAGADALIgVADQgBgEgEgDQgEgCgGgBQgIABgEACQgDACAAADQAAAAAAABQABAAAAAAQAAABABAAQAAABABAAQADADAQAEQASADAHAGQAHAFAAALQAAALgKAIQgKAJgSAAQgQAAgKgIg");
	this.shape_119.setTransform(-131.4,-24.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgdAdQgJgLAAgSQAAgTALgLQALgMAQgBQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgCACgHIAWAEQgFAMgJAGQgJAGgNABQgVAAgKgPgAARgGQAAgKgFgEQgFgGgGAAQgGAAgFAGQgFAFAAAJIAgAAIAAAAg");
	this.shape_120.setTransform(-140.2,-24.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AAQArIAAgrQAAgNgCgDQgBgEgDgDQgDgCgFAAQgFAAgEADQgFADgBAGQgCAFAAANIAAAmIgWAAIAAhTIAUAAIAAANQALgOAQgBQAHAAAGAEQAGACADAEQADAEACAFIABAPIAAAzg");
	this.shape_121.setTransform(-149.4,-24.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_122.setTransform(-119.9,-86);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgKA5IAAhSIAVAAIAABSgAgKgkIAAgUIAVAAIAAAUg");
	this.shape_123.setTransform(-149.3,-105.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgdAvQgLgMAAgVQABgUAJgLQAKgLAPAAQANAAALAMIAAgpIAVAAIAABxIgUAAIAAgMQgFAHgHAEQgGADgHAAQgOAAgKgLgAgMgFQgFAGAAAMQAAANADAGQAGAJAJAAQAHAAAFgHQAGgGAAgNQAAgOgGgFQgFgHgHAAQgIAAgFAGg");
	this.shape_124.setTransform(-99.1,-26.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgeAkQgIgHAAgKQAAgHADgFQAEgGAGgCQAGgDALgCQAPgDAGgCIAAgDQAAgGgEgDQgDgCgHgBQgGABgEACQgCACgCAGIgVgDQAEgNAIgFQAIgHAQAAQAOABAIADQAGADAEAGQACAGAAAOIAAAYIABAQQABAFADAHIgWAAIgCgHIgBgCQgFAFgGADQgGADgHAAQgNAAgHgIgAAAAFQgIACgEACQgEADAAAFQAAAEAEAEQADADAGAAQAEAAAFgEQAEgDACgEQABgDAAgIIAAgFg");
	this.shape_125.setTransform(-118,-24.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AAQArIAAgrQAAgNgCgDQgBgEgDgDQgDgCgFAAQgFAAgEADQgFADgBAGQgCAFAAANIAAAmIgWAAIAAhTIAUAAIAAANQALgOAQgBQAHAAAGAEQAGACADAEQADAEACAFIABAPIAAAzg");
	this.shape_126.setTransform(-149.4,-24.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgaArIAAhTIAVAAIAAANQAFgJADgCQAEgEAGAAQAHABAHAEIgHATQgFgEgGAAQgEAAgDADQgCACgCAHQgCAHAAAUIAAAag");
	this.shape_127.setTransform(-73.5,-24.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AAOAqIgOg1IgNA1IgWAAIgahTIAWAAIAPA2IAOg2IAUAAIAOA2IAQg2IAWAAIgbBTg");
	this.shape_128.setTransform(-83.4,-24.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgdAdQgJgLAAgSQAAgTALgLQALgMAQgBQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgCACgHIAWAEQgFAMgJAGQgJAGgNABQgVAAgKgPgAARgGQAAgKgFgEQgFgGgGAAQgGAAgFAGQgFAFAAAJIAgAAIAAAAg");
	this.shape_129.setTransform(-140.2,-24.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgDA3QgEgCgDgDQgCgDgBgGIAAgPIAAgjIgKAAIAAgSIAKAAIAAgQIAUgNIAAAdIAQAAIAAASIgQAAIAAAgIABAMIACADIAEABIAJgCIABARQgHADgKAAQgGAAgEgCg");
	this.shape_130.setTransform(-136.4,-65.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgKA5IAAhSIAVAAIAABSgAgKgkIAAgUIAVAAIAAAUg");
	this.shape_131.setTransform(-149.3,-105.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgfAkQgHgHAAgKQAAgHAEgFQADgGAGgCQAGgDAMgCQAOgDAGgCIAAgDQAAgGgDgDQgEgCgHgBQgGABgEACQgDACgBAGIgUgDQADgNAIgFQAIgHAQAAQAOABAHADQAIADACAGQADAGAAAOIAAAYIABAQQABAFADAHIgVAAIgDgHIgBgCQgFAFgGADQgGADgHAAQgNAAgIgIgAAAAFQgJACgDACQgEADAAAFQAAAEADAEQAEADAFAAQAGAAAEgEQAFgDABgEQABgDAAgIIAAgFg");
	this.shape_132.setTransform(-25.1,-24.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgdAdQgJgLAAgSQAAgTALgLQALgMAQgBQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgCACgHIAWAEQgFAMgJAGQgJAGgNABQgVAAgKgPgAARgGQAAgKgFgEQgFgGgGAAQgGAAgFAGQgFAFAAAJIAgAAIAAAAg");
	this.shape_133.setTransform(-140.2,-24.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AAQArIAAgrQAAgNgCgDQgBgEgDgDQgDgCgFAAQgFAAgEADQgFADgBAGQgCAFAAANIAAAmIgWAAIAAhTIAUAAIAAANQALgOAQgBQAHAAAGAEQAGACADAEQADAEACAFIABAPIAAAzg");
	this.shape_134.setTransform(-149.4,-24.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgiA5IgCgRIAJABQAIAAADgFQAEgEACgHIgghSIAYAAIATA6IATg6IAXAAIgeBPIgFAOIgFALQgDAEgCACQgEADgFABIgLABIgMgBg");
	this.shape_135.setTransform(88.9,-62.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgDA3QgFgCgCgDQgCgDgBgGIAAgPIAAgjIgKAAIAAgSIAKAAIAAgQIAUgNIAAAdIAPAAIAAASIgPAAIAAAgIABAMIACADIADABIAJgCIACARQgIADgJAAQgGAAgEgCg");
	this.shape_136.setTransform(5.9,-65.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_137.setTransform(-119.9,-86);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape_138.setTransform(53.6,-101.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgKA5IAAheIgiAAIAAgTIBaAAIAAATIgjAAIAABeg");
	this.shape_139.setTransform(11.6,-26.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgdAdQgJgLAAgSQAAgTALgLQALgMAQgBQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgCACgHIAWAEQgFAMgJAGQgJAGgNABQgVAAgKgPgAARgGQAAgKgFgEQgFgGgGAAQgGAAgFAGQgFAFAAAJIAgAAIAAAAg");
	this.shape_140.setTransform(-140.2,-24.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AAQA5IAAgsQAAgNgBgCQgCgEgDgCQgDgCgFAAQgEAAgFADQgEADgCAEQgCAFAAALIAAApIgWAAIAAhxIAWAAIAAAqQALgNAOAAQAHAAAGADQAGADADAEQADAFACAFIABAQIAAAwg");
	this.shape_141.setTransform(-50.8,-105.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgcA0QgJgHAAgLIAAgDIAZADQABAFACABQAEADAGAAQAIAAAEgDQADgCABgDIACgLIAAgMQgKAOgOAAQgRAAgKgOQgHgMgBgPQAAgVAKgLQALgLAPAAQAOAAAKANIAAgLIAUAAIAABJQAAAPgCAHQgDAHgEAFQgEAEgHACQgIACgLAAQgUAAgJgHgAgMgjQgFAGAAANQAAANAFAFQAFAGAHAAQAIAAAFgGQAGgGAAgMQAAgNgGgGQgEgGgJAAQgHAAgFAGg");
	this.shape_142.setTransform(95.4,-23.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AAPA5IgUglIgLALIAAAaIgVAAIAAhxIAVAAIAAA8IAZgdIAbAAIgcAeIAeA0g");
	this.shape_143.setTransform(72.6,-26.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgHA3QgHgEgFgHIAAAMIgVAAIAAhxIAXAAIAAApQAKgMANAAQAPAAAJALQAKALAAAUQAAAVgKAMQgJALgPAAQgGAAgHgDgAgNgFQgEAFAAANQAAANADAGQAGAJAIAAQAIAAAFgGQAFgHAAgNQAAgOgFgFQgFgHgIAAQgHAAgGAGg");
	this.shape_144.setTransform(44.5,-26.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AAQArIAAgrQAAgNgCgDQgBgEgDgDQgDgCgFAAQgFAAgEADQgFADgBAGQgCAFAAANIAAAmIgWAAIAAhTIAUAAIAAANQALgOAQgBQAHAAAGAEQAGACADAEQADAEACAFIABAPIAAAzg");
	this.shape_145.setTransform(-108.7,-24.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AAQArIAAgrQAAgNgCgDQgBgEgDgDQgDgCgFAAQgFAAgEADQgFADgBAGQgCAFAAANIAAAmIgWAAIAAhTIAUAAIAAANQALgOAQgBQAHAAAGAEQAGACADAEQADAEACAFIABAPIAAAzg");
	this.shape_146.setTransform(-149.4,-24.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_147.setTransform(-119.9,-86);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgKA5IAAhSIAVAAIAABSgAgKgkIAAgUIAVAAIAAAUg");
	this.shape_148.setTransform(-76.4,-105.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgKA5IAAhSIAVAAIAABSgAgKgkIAAgUIAVAAIAAAUg");
	this.shape_149.setTransform(-149.3,-105.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgCA3QgGgCgBgDQgDgDgBgGIAAgPIAAgjIgLAAIAAgSIALAAIAAgQIAVgNIAAAdIAPAAIAAASIgPAAIAAAgIAAAMIACADIAEABIAJgCIACARQgJADgJAAQgGAAgDgCg");
	this.shape_150.setTransform(127.1,-26.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgVAmQgKgFgFgKQgGgKAAgNQAAgLAGgKQAFgKAKgGQAKgFALgBQATAAAMANQAMAMAAASQAAASgMANQgNANgSAAQgKgBgLgFgAgNgSQgGAHAAALQAAAMAGAHQAFAGAIABQAJgBAFgGQAGgHAAgMQAAgLgGgHQgFgGgJgBQgIABgFAGg");
	this.shape_151.setTransform(119.5,-24.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgdAvQgLgMAAgVQABgUAJgLQALgLAOAAQANAAALAMIAAgpIAVAAIAABxIgUAAIAAgMQgFAHgHAEQgGADgHAAQgOAAgKgLgAgMgFQgFAGAAAMQAAANADAGQAGAJAJAAQAHAAAFgHQAGgGAAgNQAAgOgGgFQgFgHgHAAQgHAAgGAGg");
	this.shape_152.setTransform(109.6,-26.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgZAkQgKgHgDgLIAWgDQABAGAFADQAEADAHAAQAIAAAFgCQACgDAAgEQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgCgCgFgCQgagFgHgFQgKgGAAgMQAAgLAJgHQAIgIASAAQAQABAIAFQAJAGADALIgVADQgBgEgEgDQgEgCgGgBQgIABgEACQgDACAAADQAAAAAAABQABAAAAAAQAAABABAAQAAABABAAQADADAQAEQASADAHAGQAHAFAAALQAAALgKAIQgKAJgSAAQgQAAgKgIg");
	this.shape_153.setTransform(-131.4,-24.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgZAkQgKgGgDgMIAWgDQABAGAFADQAEAEAHgBQAIAAAFgCQACgDAAgEQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgCgCgFgCQgagGgHgEQgKgGAAgMQAAgLAJgHQAIgIASAAQAQAAAIAGQAJAGADALIgVADQgBgEgEgDQgEgCgGgBQgIABgEACQgDACAAADQAAAAAAAAQABABAAAAQAAABABAAQAAABABAAQADACAQAEQASAEAHAGQAHAFAAALQAAALgKAIQgKAIgSAAQgQABgKgIg");
	this.shape_154.setTransform(-118.1,-4.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AAOAqIgOg1IgNA1IgVAAIgbhSIAVAAIAQA1IAPg1IAUAAIANA1IAQg1IAWAAIgbBSg");
	this.shape_155.setTransform(-128.5,-4.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgVAmQgKgFgFgKQgGgKAAgNQAAgLAGgKQAFgKAKgGQAKgGALAAQATAAAMANQAMAMAAASQAAASgMANQgNAMgSAAQgKAAgLgFgAgNgSQgGAGAAAMQAAAMAGAHQAFAGAIAAQAJAAAFgGQAGgHAAgMQAAgMgGgGQgFgHgJAAQgIAAgFAHg");
	this.shape_156.setTransform(-139.6,-4.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgZAkQgKgGgDgMIAWgDQABAGAFADQAEAEAHgBQAIAAAFgCQACgDAAgEQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgCgCgFgCQgagGgHgEQgKgGAAgMQAAgLAJgHQAIgIASAAQAQAAAIAGQAJAGADALIgVADQgBgEgEgDQgEgCgGgBQgIABgEACQgDACAAADQAAAAAAAAQABABAAAAQAAABABAAQAAABABAAQADACAQAEQASAEAHAGQAHAFAAALQAAALgKAIQgKAIgSAAQgQABgKgIg");
	this.shape_157.setTransform(-158.8,-4.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AAQA5IAAgsQAAgNgBgCQgCgEgDgCQgDgCgFAAQgEAAgFADQgEADgCAEQgCAFAAALIAAApIgWAAIAAhxIAWAAIAAAqQALgNAOAAQAHAAAGADQAGADADAEQADAFACAFIABAQIAAAwg");
	this.shape_158.setTransform(-50.8,-105.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgYAnQgHgEgDgHQgDgGAAgMIAAgzIAWAAIAAAmQAAAQABAEQACAEADADQADABAFAAQAFAAAEgCQAFgDABgFQACgEAAgSIAAgiIAWAAIAABSIgVAAIAAgNQgEAGgIAFQgGADgIAAQgJAAgGgDg");
	this.shape_159.setTransform(-85.6,-4.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgVAmQgKgFgFgKQgGgKAAgNQAAgLAGgKQAFgKAKgGQAKgGALAAQATAAAMANQAMAMAAASQAAASgMANQgNAMgSAAQgKAAgLgFgAgNgSQgGAGAAAMQAAAMAGAHQAFAGAIAAQAJAAAFgGQAGgHAAgMQAAgMgGgGQgFgHgJAAQgIAAgFAHg");
	this.shape_160.setTransform(-139.6,-4.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgiA5IgCgRIAJABQAIAAADgFQAEgEACgHIgghSIAYAAIATA6IATg6IAXAAIgeBPIgFAOIgFALQgDAEgCACQgEADgFABIgLABIgMgBg");
	this.shape_161.setTransform(88.9,-62.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgdAdQgJgLAAgSQAAgTALgLQALgNAQAAQASAAALANQAKAMAAAZIg2AAQAAAJAFAGQAFAFAHAAQAFAAADgDQAEgCACgHIAWAEQgFAMgJAGQgJAGgNAAQgVAAgKgOgAARgGQAAgKgFgEQgFgGgGAAQgGAAgFAGQgFAFAAAJIAgAAIAAAAg");
	this.shape_162.setTransform(-34.8,-4.8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgaArIAAhSIAVAAIAAAMQAFgJADgCQAEgEAGAAQAHAAAHAFIgHATQgFgDgGAAQgEAAgDACQgCADgCAGQgCAHAAAUIAAAag");
	this.shape_163.setTransform(-41.6,-4.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgdAdQgJgLAAgSQAAgTALgLQALgNAQAAQASAAALANQAKAMAAAZIg2AAQAAAJAFAGQAFAFAHAAQAFAAADgDQAEgCACgHIAWAEQgFAMgJAGQgJAGgNAAQgVAAgKgOgAARgGQAAgKgFgEQgFgGgGAAQgGAAgFAGQgFAFAAAJIAgAAIAAAAg");
	this.shape_164.setTransform(-49.8,-4.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AAOAqIgOg1IgNA1IgVAAIgbhSIAVAAIAQA1IAOg1IAVAAIANA1IAQg1IAWAAIgbBSg");
	this.shape_165.setTransform(-70.1,-4.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AAQA5IAAgsQAAgNgBgCQgCgEgDgCQgDgCgFAAQgEAAgFADQgEADgCAEQgCAFAAALIAAApIgWAAIAAhxIAWAAIAAAqQALgNAOAAQAHAAAGADQAGADADAEQADAFACAFIABAQIAAAwg");
	this.shape_166.setTransform(-50.8,-105.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgVAmQgKgFgFgKQgGgKAAgNQAAgLAGgKQAFgKAKgGQAKgGALAAQATAAAMANQAMAMAAASQAAASgMANQgNAMgSAAQgKAAgLgFgAgNgSQgGAGAAAMQAAAMAGAHQAFAGAIAAQAJAAAFgGQAGgHAAgMQAAgMgGgGQgFgHgJAAQgIAAgFAHg");
	this.shape_167.setTransform(-139.6,-4.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgDA3QgEgCgCgDQgDgDgBgGIgBgPIAAgjIgKAAIAAgSIAKAAIAAgQIAWgNIAAAdIAOAAIAAASIgOAAIAAAgIAAAMIACADIADABIAJgCIACARQgHADgKAAQgGAAgEgCg");
	this.shape_168.setTransform(-58.3,-105.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AAQArIAAgrQAAgMgCgEQgBgEgDgDQgDgCgFAAQgFAAgEAEQgFADgBAFQgCAFAAANIAAAmIgWAAIAAhSIAUAAIAAAMQALgPAQAAQAHAAAGAEQAGACADAEQADAEACAFIABAPIAAAzg");
	this.shape_169.setTransform(31.2,-4.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgcA0QgJgHABgLIAAgDIAYADQABAFADABQACADAHAAQAIAAAEgDQADgCACgDIABgLIAAgMQgLAOgOAAQgQAAgKgOQgIgMAAgPQABgVAJgLQALgLAOAAQAPAAAKANIAAgLIAUAAIAABJQABAPgDAHQgCAHgFAFQgEAEgHACQgIACgLAAQgUAAgJgHgAgMgjQgFAGAAANQAAANAFAFQAGAGAGAAQAIAAAFgGQAGgGAAgMQAAgNgGgGQgEgGgJAAQgGAAgGAGg");
	this.shape_170.setTransform(16.9,-3.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgHA3QgHgEgFgHIAAAMIgVAAIAAhxIAWAAIAAApQAKgMANAAQAPAAALALQAKALAAAUQAAAVgKAMQgLALgOAAQgGAAgHgDgAgNgFQgEAFgBANQABANAEAGQAFAJAJAAQAHAAAFgGQAFgHAAgNQAAgOgFgFQgFgHgIAAQgHAAgGAGg");
	this.shape_171.setTransform(-1.3,-6.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgdAdQgJgLAAgSQAAgTALgLQALgNAQAAQASAAALANQAKAMAAAZIg2AAQAAAJAFAGQAFAFAHAAQAFAAADgDQAEgCACgHIAWAEQgFAMgJAGQgJAGgNAAQgVAAgKgOgAARgGQAAgKgFgEQgFgGgGAAQgGAAgFAGQgFAFAAAJIAgAAIAAAAg");
	this.shape_172.setTransform(-49.8,-4.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape_173.setTransform(53.6,-101.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgKA5IAAhSIAVAAIAABSgAgKgkIAAgUIAVAAIAAAUg");
	this.shape_174.setTransform(-149.3,-105.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgDA3QgFgCgCgDQgCgDgBgGIAAgPIAAgjIgKAAIAAgSIAKAAIAAgQIAUgNIAAAdIAQAAIAAASIgQAAIAAAgIABAMIACADIADABIAKgCIABARQgIADgJAAQgGAAgEgCg");
	this.shape_175.setTransform(66.2,-6.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgdAdQgJgLAAgSQAAgTALgLQALgNAQAAQASAAALANQAKAMAAAZIg2AAQAAAJAFAGQAFAFAHAAQAFAAADgDQAEgCACgHIAWAEQgFAMgJAGQgJAGgNAAQgVAAgKgOgAARgGQAAgKgFgEQgFgGgGAAQgGAAgFAGQgFAFAAAJIAgAAIAAAAg");
	this.shape_176.setTransform(-49.8,-4.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgZAkQgKgGgDgMIAWgDQABAGAFADQAEAEAHgBQAIAAAFgCQACgDAAgEQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgCgCgFgCQgagGgHgEQgKgGAAgMQAAgLAJgHQAIgIASAAQAQAAAIAGQAJAGADALIgVADQgBgEgEgDQgEgCgGgBQgIABgEACQgDACAAADQAAAAAAAAQABABAAAAQAAABABAAQAAABABAAQADACAQAEQASAEAHAGQAHAFAAALQAAALgKAIQgKAIgSAAQgQABgKgIg");
	this.shape_177.setTransform(-158.8,-4.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgnA5IAAhxIAXAAIAABdIA4AAIAAAUg");
	this.shape_178.setTransform(-157.8,-85.9);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgGAUIgFgUIAAgTIAXAAIAAATIgEAUg");
	this.shape_179.setTransform(-136.4,-109.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgKA5IAAgWIAVAAIAAAWgAgFAcIgGg5IAAgbIAXAAIAAAbIgGA5g");
	this.shape_180.setTransform(133.5,-6.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgKA5IAAgWIAVAAIAAAWgAgFAcIgGg5IAAgbIAXAAIAAAbIgGA5g");
	this.shape_181.setTransform(128.2,-6.4);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgKA5IAAgWIAVAAIAAAWgAgFAcIgGg5IAAgbIAXAAIAAAbIgGA5g");
	this.shape_182.setTransform(122.9,-6.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgCA3QgFgCgDgDQgCgDgBgGIAAgPIAAgjIgKAAIAAgSIAKAAIAAgQIAUgNIAAAdIAQAAIAAASIgQAAIAAAgIABAMIACADIAEABIAJgCIACARQgJADgJAAQgGAAgDgCg");
	this.shape_183.setTransform(117.7,-6.2);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgaArIAAhSIAUAAIAAAMQAGgJADgCQAEgEAFAAQAIAAAHAFIgHATQgGgDgFAAQgEAAgDACQgCADgCAGQgCAHAAAUIAAAag");
	this.shape_184.setTransform(112.6,-4.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgfAkQgHgGAAgLQAAgHAEgFQADgGAGgCQAGgDAMgCQAOgDAGgCIAAgDQAAgGgDgDQgEgCgHgBQgGABgEACQgCACgCAGIgVgEQAEgMAIgGQAIgFAQgBQAOAAAIAEQAGADADAGQADAGAAAOIAAAYIABARQABAEADAHIgWAAIgCgHIgBgCQgFAFgGADQgGACgHAAQgNABgIgIgAAAAFQgIACgEACQgEADAAAEQAAAFADAEQAEADAFAAQAFAAAFgEQAFgDABgFQABgCAAgIIAAgFg");
	this.shape_185.setTransform(104.4,-4.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgCA3QgGgCgCgDQgCgDgBgGIAAgPIAAgjIgLAAIAAgSIALAAIAAgQIAUgNIAAAdIAQAAIAAASIgQAAIAAAgIABAMIACADIAEABIAJgCIACARQgJADgJAAQgGAAgDgCg");
	this.shape_186.setTransform(97.4,-6.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgZAkQgKgGgDgMIAWgDQABAGAFADQAEAEAHgBQAIAAAFgCQACgDAAgEQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgCgCgFgCQgagGgHgEQgKgGAAgMQAAgLAJgHQAIgIASAAQAQAAAIAGQAJAGADALIgVADQgBgEgEgDQgEgCgGgBQgIABgEACQgDACAAADQAAAAAAAAQABABAAAAQAAABABAAQAAABABAAQADACAQAEQASAEAHAGQAHAFAAALQAAALgKAIQgKAIgSAAQgQABgKgIg");
	this.shape_187.setTransform(-158.8,-4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape,p:{x:-149.3,y:-105.9}}]},45).to({state:[{t:this.shape_1},{t:this.shape,p:{x:-149.3,y:-105.9}},{t:this.shape_4,p:{x:-140.5,y:-105.9}},{t:this.shape_3,p:{x:-136.4,y:-109.6}},{t:this.shape_2}]},16).to({state:[{t:this.shape_1},{t:this.shape_10,p:{x:-149.3,y:-105.9}},{t:this.shape_4,p:{x:-140.5,y:-105.9}},{t:this.shape_3,p:{x:-136.4,y:-109.6}},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape,p:{x:-76.4,y:-105.9}},{t:this.shape_5,p:{x:-69.9}}]},12).to({state:[{t:this.shape_1},{t:this.shape_10,p:{x:-149.3,y:-105.9}},{t:this.shape_4,p:{x:-140.5,y:-105.9}},{t:this.shape_3,p:{x:-136.4,y:-109.6}},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape,p:{x:-76.4,y:-105.9}},{t:this.shape_13,p:{x:-69.9}},{t:this.shape_12,p:{x:-58.3,y:-105.7}},{t:this.shape_11,p:{x:-50.8,y:-105.9}},{t:this.shape_5,p:{x:-41.6}}]},16).to({state:[{t:this.shape_1},{t:this.shape_20,p:{x:-149.3,y:-105.9}},{t:this.shape_4,p:{x:-140.5,y:-105.9}},{t:this.shape_3,p:{x:-136.4,y:-109.6}},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_19,p:{x:-76.4,y:-105.9}},{t:this.shape_13,p:{x:-69.9}},{t:this.shape_18,p:{x:-58.3,y:-105.7}},{t:this.shape_11,p:{x:-50.8,y:-105.9}},{t:this.shape_5,p:{x:-41.6}},{t:this.shape_17,p:{x:-26.4,y:-104.3}},{t:this.shape_16},{t:this.shape_10,p:{x:-11.8,y:-105.9}},{t:this.shape_12,p:{x:-7,y:-105.7}},{t:this.shape,p:{x:-2.1,y:-105.9}},{t:this.shape_15},{t:this.shape_14}]},8).to({state:[{t:this.shape_1},{t:this.shape_20,p:{x:-149.3,y:-105.9}},{t:this.shape_4,p:{x:-140.5,y:-105.9}},{t:this.shape_3,p:{x:-136.4,y:-109.6}},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_19,p:{x:-76.4,y:-105.9}},{t:this.shape_24},{t:this.shape_18,p:{x:-58.3,y:-105.7}},{t:this.shape_11,p:{x:-50.8,y:-105.9}},{t:this.shape_23},{t:this.shape_17,p:{x:-26.4,y:-104.3}},{t:this.shape_16},{t:this.shape_10,p:{x:-11.8,y:-105.9}},{t:this.shape_12,p:{x:-7,y:-105.7}},{t:this.shape,p:{x:-2.1,y:-105.9}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_22},{t:this.shape_13,p:{x:38}},{t:this.shape_5,p:{x:46.9}},{t:this.shape_21,p:{x:53.6,y:-101.2}}]},10).to({state:[{t:this.shape_1},{t:this.shape_20,p:{x:-149.3,y:-105.9}},{t:this.shape_4,p:{x:-140.5,y:-105.9}},{t:this.shape_3,p:{x:-136.4,y:-109.6}},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_19,p:{x:-76.4,y:-105.9}},{t:this.shape_24},{t:this.shape_18,p:{x:-58.3,y:-105.7}},{t:this.shape_11,p:{x:-50.8,y:-105.9}},{t:this.shape_23},{t:this.shape_17,p:{x:-26.4,y:-104.3}},{t:this.shape_16},{t:this.shape_10,p:{x:-11.8,y:-105.9}},{t:this.shape_12,p:{x:-7,y:-105.7}},{t:this.shape,p:{x:-2.1,y:-105.9}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_22},{t:this.shape_13,p:{x:38}},{t:this.shape_5,p:{x:46.9}},{t:this.shape_21,p:{x:53.6,y:-101.2}},{t:this.shape_29,p:{x:-157.8,y:-85.9}},{t:this.shape_28,p:{x:-149}},{t:this.shape_27,p:{x:-141.8,y:-85.8}},{t:this.shape_26},{t:this.shape_25}]},23).to({state:[{t:this.shape_1},{t:this.shape_20,p:{x:-149.3,y:-105.9}},{t:this.shape_4,p:{x:-140.5,y:-105.9}},{t:this.shape_3,p:{x:-136.4,y:-109.6}},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_19,p:{x:-76.4,y:-105.9}},{t:this.shape_24},{t:this.shape_18,p:{x:-58.3,y:-105.7}},{t:this.shape_11,p:{x:-50.8,y:-105.9}},{t:this.shape_23},{t:this.shape_17,p:{x:-26.4,y:-104.3}},{t:this.shape_16},{t:this.shape_10,p:{x:-11.8,y:-105.9}},{t:this.shape_12,p:{x:-7,y:-105.7}},{t:this.shape,p:{x:-2.1,y:-105.9}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_22},{t:this.shape_13,p:{x:38}},{t:this.shape_5,p:{x:46.9}},{t:this.shape_21,p:{x:53.6,y:-101.2}},{t:this.shape_29,p:{x:-157.8,y:-85.9}},{t:this.shape_34,p:{x:-149}},{t:this.shape_27,p:{x:-141.8,y:-85.8}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_33,p:{x:-119.9,y:-86}},{t:this.shape_28,p:{x:-113.4}},{t:this.shape_32},{t:this.shape_31,p:{x:-96.3}},{t:this.shape_30}]},9).to({state:[{t:this.shape_1},{t:this.shape_20,p:{x:-149.3,y:-105.9}},{t:this.shape_4,p:{x:-140.5,y:-105.9}},{t:this.shape_3,p:{x:-136.4,y:-109.6}},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_19,p:{x:-76.4,y:-105.9}},{t:this.shape_24},{t:this.shape_18,p:{x:-58.3,y:-105.7}},{t:this.shape_11,p:{x:-50.8,y:-105.9}},{t:this.shape_23},{t:this.shape_17,p:{x:-26.4,y:-104.3}},{t:this.shape_16},{t:this.shape_10,p:{x:-11.8,y:-105.9}},{t:this.shape_12,p:{x:-7,y:-105.7}},{t:this.shape,p:{x:-2.1,y:-105.9}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_22},{t:this.shape_13,p:{x:38}},{t:this.shape_5,p:{x:46.9}},{t:this.shape_21,p:{x:53.6,y:-101.2}},{t:this.shape_29,p:{x:-157.8,y:-85.9}},{t:this.shape_34,p:{x:-149}},{t:this.shape_36,p:{x:-141.8}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_33,p:{x:-119.9,y:-86}},{t:this.shape_28,p:{x:-113.4}},{t:this.shape_32},{t:this.shape_31,p:{x:-96.3}},{t:this.shape_30},{t:this.shape_27,p:{x:-77,y:-85.8}},{t:this.shape_35}]},9).to({state:[{t:this.shape_1},{t:this.shape_41,p:{x:-149.3,y:-105.9}},{t:this.shape_4,p:{x:-140.5,y:-105.9}},{t:this.shape_3,p:{x:-136.4,y:-109.6}},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_20,p:{x:-76.4,y:-105.9}},{t:this.shape_24},{t:this.shape_18,p:{x:-58.3,y:-105.7}},{t:this.shape_11,p:{x:-50.8,y:-105.9}},{t:this.shape_23},{t:this.shape_40,p:{x:-26.4,y:-104.3}},{t:this.shape_16},{t:this.shape_19,p:{x:-11.8,y:-105.9}},{t:this.shape_12,p:{x:-7,y:-105.7}},{t:this.shape_10,p:{x:-2.1,y:-105.9}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_22},{t:this.shape_13,p:{x:38}},{t:this.shape_5,p:{x:46.9}},{t:this.shape_21,p:{x:53.6,y:-101.2}},{t:this.shape_29,p:{x:-157.8,y:-85.9}},{t:this.shape_39,p:{x:-149}},{t:this.shape_36,p:{x:-141.8}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_33,p:{x:-119.9,y:-86}},{t:this.shape_34,p:{x:-113.4}},{t:this.shape_32},{t:this.shape_38},{t:this.shape_30},{t:this.shape_27,p:{x:-77,y:-85.8}},{t:this.shape_35},{t:this.shape_17,p:{x:-54,y:-84.4}},{t:this.shape_31,p:{x:-44.1}},{t:this.shape,p:{x:-39.4,y:-86}},{t:this.shape_37,p:{x:-34.5,y:-85.8}},{t:this.shape_28,p:{x:-27.6}}]},6).to({state:[{t:this.shape_1},{t:this.shape_41,p:{x:-149.3,y:-105.9}},{t:this.shape_4,p:{x:-140.5,y:-105.9}},{t:this.shape_3,p:{x:-136.4,y:-109.6}},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_20,p:{x:-76.4,y:-105.9}},{t:this.shape_24},{t:this.shape_44,p:{x:-58.3,y:-105.7}},{t:this.shape_43,p:{x:-50.8,y:-105.9}},{t:this.shape_23},{t:this.shape_40,p:{x:-26.4,y:-104.3}},{t:this.shape_16},{t:this.shape_19,p:{x:-11.8,y:-105.9}},{t:this.shape_18,p:{x:-7,y:-105.7}},{t:this.shape_10,p:{x:-2.1,y:-105.9}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_22},{t:this.shape_13,p:{x:38}},{t:this.shape_5,p:{x:46.9}},{t:this.shape_21,p:{x:53.6,y:-101.2}},{t:this.shape_29,p:{x:-157.8,y:-85.9}},{t:this.shape_42,p:{x:-149}},{t:this.shape_36,p:{x:-141.8}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_33,p:{x:-119.9,y:-86}},{t:this.shape_39,p:{x:-113.4}},{t:this.shape_32},{t:this.shape_38},{t:this.shape_30},{t:this.shape_27,p:{x:-77,y:-85.8}},{t:this.shape_35},{t:this.shape_17,p:{x:-54,y:-84.4}},{t:this.shape_31,p:{x:-44.1}},{t:this.shape,p:{x:-39.4,y:-86}},{t:this.shape_37,p:{x:-34.5,y:-85.8}},{t:this.shape_34,p:{x:-27.6}},{t:this.shape_12,p:{x:-16,y:-85.8}},{t:this.shape_11,p:{x:-8.5,y:-86}},{t:this.shape_28,p:{x:0.7}}]},4).to({state:[{t:this.shape_1},{t:this.shape_41,p:{x:-149.3,y:-105.9}},{t:this.shape_4,p:{x:-140.5,y:-105.9}},{t:this.shape_3,p:{x:-136.4,y:-109.6}},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_20,p:{x:-76.4,y:-105.9}},{t:this.shape_24},{t:this.shape_44,p:{x:-58.3,y:-105.7}},{t:this.shape_53,p:{x:-50.8,y:-105.9}},{t:this.shape_23},{t:this.shape_40,p:{x:-26.4,y:-104.3}},{t:this.shape_16},{t:this.shape_19,p:{x:-11.8,y:-105.9}},{t:this.shape_18,p:{x:-7,y:-105.7}},{t:this.shape_10,p:{x:-2.1,y:-105.9}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_22},{t:this.shape_13,p:{x:38}},{t:this.shape_5,p:{x:46.9}},{t:this.shape_52,p:{x:53.6,y:-101.2}},{t:this.shape_29,p:{x:-157.8,y:-85.9}},{t:this.shape_51},{t:this.shape_36,p:{x:-141.8}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_50,p:{x:-119.9,y:-86}},{t:this.shape_42,p:{x:-113.4}},{t:this.shape_32},{t:this.shape_38},{t:this.shape_30},{t:this.shape_27,p:{x:-77,y:-85.8}},{t:this.shape_35},{t:this.shape_17,p:{x:-54,y:-84.4}},{t:this.shape_31,p:{x:-44.1}},{t:this.shape,p:{x:-39.4,y:-86}},{t:this.shape_37,p:{x:-34.5,y:-85.8}},{t:this.shape_39,p:{x:-27.6}},{t:this.shape_12,p:{x:-16,y:-85.8}},{t:this.shape_43,p:{x:-8.5,y:-86}},{t:this.shape_34,p:{x:0.7}},{t:this.shape_49},{t:this.shape_33,p:{x:20.7,y:-86}},{t:this.shape_48},{t:this.shape_11,p:{x:37.5,y:-86}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_28,p:{x:65.3}},{t:this.shape_45},{t:this.shape_21,p:{x:77.4,y:-81.3}}]},8).to({state:[{t:this.shape_1},{t:this.shape_41,p:{x:-149.3,y:-105.9}},{t:this.shape_4,p:{x:-140.5,y:-105.9}},{t:this.shape_3,p:{x:-136.4,y:-109.6}},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_20,p:{x:-76.4,y:-105.9}},{t:this.shape_24},{t:this.shape_44,p:{x:-58.3,y:-105.7}},{t:this.shape_58,p:{x:-50.8,y:-105.9}},{t:this.shape_23},{t:this.shape_40,p:{x:-26.4,y:-104.3}},{t:this.shape_16},{t:this.shape_19,p:{x:-11.8,y:-105.9}},{t:this.shape_18,p:{x:-7,y:-105.7}},{t:this.shape_10,p:{x:-2.1,y:-105.9}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_22},{t:this.shape_13,p:{x:38}},{t:this.shape_5,p:{x:46.9}},{t:this.shape_52,p:{x:53.6,y:-101.2}},{t:this.shape_29,p:{x:-157.8,y:-85.9}},{t:this.shape_51},{t:this.shape_36,p:{x:-141.8}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_50,p:{x:-119.9,y:-86}},{t:this.shape_42,p:{x:-113.4}},{t:this.shape_32},{t:this.shape_38},{t:this.shape_30},{t:this.shape_27,p:{x:-77,y:-85.8}},{t:this.shape_35},{t:this.shape_17,p:{x:-54,y:-84.4}},{t:this.shape_31,p:{x:-44.1}},{t:this.shape,p:{x:-39.4,y:-86}},{t:this.shape_37,p:{x:-34.5,y:-85.8}},{t:this.shape_39,p:{x:-27.6}},{t:this.shape_12,p:{x:-16,y:-85.8}},{t:this.shape_53,p:{x:-8.5,y:-86}},{t:this.shape_34,p:{x:0.7}},{t:this.shape_49},{t:this.shape_33,p:{x:20.7,y:-86}},{t:this.shape_48},{t:this.shape_43,p:{x:37.5,y:-86}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_28,p:{x:65.3}},{t:this.shape_45},{t:this.shape_21,p:{x:77.4,y:-81.3}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:-136.4,y:-65.9}},{t:this.shape_54},{t:this.shape_11,p:{x:-120.1,y:-66.1}}]},41).to({state:[{t:this.shape_1},{t:this.shape_41,p:{x:-149.3,y:-105.9}},{t:this.shape_4,p:{x:-140.5,y:-105.9}},{t:this.shape_3,p:{x:-136.4,y:-109.6}},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_20,p:{x:-76.4,y:-105.9}},{t:this.shape_24},{t:this.shape_44,p:{x:-58.3,y:-105.7}},{t:this.shape_58,p:{x:-50.8,y:-105.9}},{t:this.shape_23},{t:this.shape_40,p:{x:-26.4,y:-104.3}},{t:this.shape_16},{t:this.shape_19,p:{x:-11.8,y:-105.9}},{t:this.shape_18,p:{x:-7,y:-105.7}},{t:this.shape_10,p:{x:-2.1,y:-105.9}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_22},{t:this.shape_13,p:{x:38}},{t:this.shape_5,p:{x:46.9}},{t:this.shape_52,p:{x:53.6,y:-101.2}},{t:this.shape_29,p:{x:-157.8,y:-85.9}},{t:this.shape_51},{t:this.shape_36,p:{x:-141.8}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_50,p:{x:-119.9,y:-86}},{t:this.shape_42,p:{x:-113.4}},{t:this.shape_32},{t:this.shape_38},{t:this.shape_30},{t:this.shape_27,p:{x:-77,y:-85.8}},{t:this.shape_35},{t:this.shape_17,p:{x:-54,y:-84.4}},{t:this.shape_31,p:{x:-44.1}},{t:this.shape,p:{x:-39.4,y:-86}},{t:this.shape_37,p:{x:-34.5,y:-85.8}},{t:this.shape_39,p:{x:-27.6}},{t:this.shape_12,p:{x:-16,y:-85.8}},{t:this.shape_53,p:{x:-8.5,y:-86}},{t:this.shape_34,p:{x:0.7}},{t:this.shape_49},{t:this.shape_33,p:{x:20.7,y:-86}},{t:this.shape_48},{t:this.shape_43,p:{x:37.5,y:-86}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_28,p:{x:65.3}},{t:this.shape_45},{t:this.shape_21,p:{x:77.4,y:-81.3}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:-136.4,y:-65.9}},{t:this.shape_54},{t:this.shape_11,p:{x:-120.1,y:-66.1}},{t:this.shape_60},{t:this.shape_59,p:{x:-97.7}}]},10).to({state:[{t:this.shape_1},{t:this.shape_41,p:{x:-149.3,y:-105.9}},{t:this.shape_61},{t:this.shape_3,p:{x:-136.4,y:-109.6}},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_20,p:{x:-76.4,y:-105.9}},{t:this.shape_24},{t:this.shape_44,p:{x:-58.3,y:-105.7}},{t:this.shape_58,p:{x:-50.8,y:-105.9}},{t:this.shape_23},{t:this.shape_40,p:{x:-26.4,y:-104.3}},{t:this.shape_16},{t:this.shape_19,p:{x:-11.8,y:-105.9}},{t:this.shape_18,p:{x:-7,y:-105.7}},{t:this.shape_10,p:{x:-2.1,y:-105.9}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_22},{t:this.shape_13,p:{x:38}},{t:this.shape_5,p:{x:46.9}},{t:this.shape_52,p:{x:53.6,y:-101.2}},{t:this.shape_29,p:{x:-157.8,y:-85.9}},{t:this.shape_51},{t:this.shape_36,p:{x:-141.8}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_50,p:{x:-119.9,y:-86}},{t:this.shape_42,p:{x:-113.4}},{t:this.shape_32},{t:this.shape_38},{t:this.shape_30},{t:this.shape_27,p:{x:-77,y:-85.8}},{t:this.shape_35},{t:this.shape_17,p:{x:-54,y:-84.4}},{t:this.shape_31,p:{x:-44.1}},{t:this.shape,p:{x:-39.4,y:-86}},{t:this.shape_37,p:{x:-34.5,y:-85.8}},{t:this.shape_39,p:{x:-27.6}},{t:this.shape_12,p:{x:-16,y:-85.8}},{t:this.shape_53,p:{x:-8.5,y:-86}},{t:this.shape_34,p:{x:0.7}},{t:this.shape_49},{t:this.shape_33,p:{x:20.7,y:-86}},{t:this.shape_48},{t:this.shape_43,p:{x:37.5,y:-86}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_28,p:{x:65.3}},{t:this.shape_45},{t:this.shape_21,p:{x:77.4,y:-81.3}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:-136.4,y:-65.9}},{t:this.shape_54},{t:this.shape_11,p:{x:-120.1,y:-66.1}},{t:this.shape_60},{t:this.shape_59,p:{x:-97.7}},{t:this.shape_4,p:{x:-86.5,y:-66.1}}]},11).to({state:[{t:this.shape_1},{t:this.shape_66,p:{x:-149.3,y:-105.9}},{t:this.shape_61},{t:this.shape_3,p:{x:-136.4,y:-109.6}},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_41,p:{x:-76.4,y:-105.9}},{t:this.shape_24},{t:this.shape_65,p:{x:-58.3}},{t:this.shape_58,p:{x:-50.8,y:-105.9}},{t:this.shape_23},{t:this.shape_64},{t:this.shape_16},{t:this.shape_20,p:{x:-11.8,y:-105.9}},{t:this.shape_44,p:{x:-7,y:-105.7}},{t:this.shape_19,p:{x:-2.1,y:-105.9}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_22},{t:this.shape_13,p:{x:38}},{t:this.shape_5,p:{x:46.9}},{t:this.shape_52,p:{x:53.6,y:-101.2}},{t:this.shape_29,p:{x:-157.8,y:-85.9}},{t:this.shape_51},{t:this.shape_36,p:{x:-141.8}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_50,p:{x:-119.9,y:-86}},{t:this.shape_42,p:{x:-113.4}},{t:this.shape_32},{t:this.shape_38},{t:this.shape_30},{t:this.shape_27,p:{x:-77,y:-85.8}},{t:this.shape_35},{t:this.shape_40,p:{x:-54,y:-84.4}},{t:this.shape_31,p:{x:-44.1}},{t:this.shape_10,p:{x:-39.4,y:-86}},{t:this.shape_37,p:{x:-34.5,y:-85.8}},{t:this.shape_39,p:{x:-27.6}},{t:this.shape_18,p:{x:-16,y:-85.8}},{t:this.shape_53,p:{x:-8.5,y:-86}},{t:this.shape_34,p:{x:0.7}},{t:this.shape_49},{t:this.shape_33,p:{x:20.7,y:-86}},{t:this.shape_48},{t:this.shape_43,p:{x:37.5,y:-86}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_28,p:{x:65.3}},{t:this.shape_45},{t:this.shape_21,p:{x:77.4,y:-81.3}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:-136.4,y:-65.9}},{t:this.shape_54},{t:this.shape_11,p:{x:-120.1,y:-66.1}},{t:this.shape_60},{t:this.shape_59,p:{x:-97.7}},{t:this.shape_4,p:{x:-86.5,y:-66.1}},{t:this.shape_17,p:{x:-73.7,y:-64.5}},{t:this.shape_63},{t:this.shape,p:{x:-59.1,y:-66.1}},{t:this.shape_12,p:{x:-54.2,y:-65.9}},{t:this.shape_62,p:{x:-47.3}}]},8).to({state:[{t:this.shape_1},{t:this.shape_66,p:{x:-149.3,y:-105.9}},{t:this.shape_61},{t:this.shape_3,p:{x:-136.4,y:-109.6}},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_41,p:{x:-76.4,y:-105.9}},{t:this.shape_24},{t:this.shape_65,p:{x:-58.3}},{t:this.shape_69,p:{x:-50.8,y:-105.9}},{t:this.shape_23},{t:this.shape_64},{t:this.shape_16},{t:this.shape_20,p:{x:-11.8,y:-105.9}},{t:this.shape_44,p:{x:-7,y:-105.7}},{t:this.shape_19,p:{x:-2.1,y:-105.9}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_22},{t:this.shape_13,p:{x:38}},{t:this.shape_5,p:{x:46.9}},{t:this.shape_52,p:{x:53.6,y:-101.2}},{t:this.shape_29,p:{x:-157.8,y:-85.9}},{t:this.shape_51},{t:this.shape_36,p:{x:-141.8}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_50,p:{x:-119.9,y:-86}},{t:this.shape_42,p:{x:-113.4}},{t:this.shape_32},{t:this.shape_38},{t:this.shape_30},{t:this.shape_27,p:{x:-77,y:-85.8}},{t:this.shape_35},{t:this.shape_40,p:{x:-54,y:-84.4}},{t:this.shape_31,p:{x:-44.1}},{t:this.shape_10,p:{x:-39.4,y:-86}},{t:this.shape_37,p:{x:-34.5,y:-85.8}},{t:this.shape_39,p:{x:-27.6}},{t:this.shape_18,p:{x:-16,y:-85.8}},{t:this.shape_58,p:{x:-8.5,y:-86}},{t:this.shape_34,p:{x:0.7}},{t:this.shape_49},{t:this.shape_33,p:{x:20.7,y:-86}},{t:this.shape_48},{t:this.shape_53,p:{x:37.5,y:-86}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_28,p:{x:65.3}},{t:this.shape_45},{t:this.shape_21,p:{x:77.4,y:-81.3}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:-136.4,y:-65.9}},{t:this.shape_54},{t:this.shape_43,p:{x:-120.1,y:-66.1}},{t:this.shape_60},{t:this.shape_59,p:{x:-97.7}},{t:this.shape_4,p:{x:-86.5,y:-66.1}},{t:this.shape_17,p:{x:-73.7,y:-64.5}},{t:this.shape_63},{t:this.shape,p:{x:-59.1,y:-66.1}},{t:this.shape_12,p:{x:-54.2,y:-65.9}},{t:this.shape_68,p:{x:-47.3}},{t:this.shape_67,p:{x:-35.7,y:-65.9}},{t:this.shape_11,p:{x:-28.2,y:-66.1}},{t:this.shape_62,p:{x:-19}}]},7).to({state:[{t:this.shape_1},{t:this.shape_66,p:{x:-149.3,y:-105.9}},{t:this.shape_61},{t:this.shape_3,p:{x:-136.4,y:-109.6}},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_41,p:{x:-76.4,y:-105.9}},{t:this.shape_24},{t:this.shape_65,p:{x:-58.3}},{t:this.shape_69,p:{x:-50.8,y:-105.9}},{t:this.shape_23},{t:this.shape_64},{t:this.shape_16},{t:this.shape_20,p:{x:-11.8,y:-105.9}},{t:this.shape_44,p:{x:-7,y:-105.7}},{t:this.shape_19,p:{x:-2.1,y:-105.9}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_22},{t:this.shape_13,p:{x:38}},{t:this.shape_5,p:{x:46.9}},{t:this.shape_52,p:{x:53.6,y:-101.2}},{t:this.shape_29,p:{x:-157.8,y:-85.9}},{t:this.shape_51},{t:this.shape_36,p:{x:-141.8}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_77,p:{x:-119.9,y:-86}},{t:this.shape_42,p:{x:-113.4}},{t:this.shape_32},{t:this.shape_38},{t:this.shape_30},{t:this.shape_27,p:{x:-77,y:-85.8}},{t:this.shape_35},{t:this.shape_40,p:{x:-54,y:-84.4}},{t:this.shape_31,p:{x:-44.1}},{t:this.shape_10,p:{x:-39.4,y:-86}},{t:this.shape_37,p:{x:-34.5,y:-85.8}},{t:this.shape_39,p:{x:-27.6}},{t:this.shape_18,p:{x:-16,y:-85.8}},{t:this.shape_58,p:{x:-8.5,y:-86}},{t:this.shape_34,p:{x:0.7}},{t:this.shape_49},{t:this.shape_50,p:{x:20.7,y:-86}},{t:this.shape_48},{t:this.shape_53,p:{x:37.5,y:-86}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_28,p:{x:65.3}},{t:this.shape_45},{t:this.shape_21,p:{x:77.4,y:-81.3}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:-136.4,y:-65.9}},{t:this.shape_54},{t:this.shape_43,p:{x:-120.1,y:-66.1}},{t:this.shape_60},{t:this.shape_76},{t:this.shape_4,p:{x:-86.5,y:-66.1}},{t:this.shape_17,p:{x:-73.7,y:-64.5}},{t:this.shape_63},{t:this.shape,p:{x:-59.1,y:-66.1}},{t:this.shape_12,p:{x:-54.2,y:-65.9}},{t:this.shape_75,p:{x:-47.3}},{t:this.shape_67,p:{x:-35.7,y:-65.9}},{t:this.shape_11,p:{x:-28.2,y:-66.1}},{t:this.shape_74,p:{x:-19}},{t:this.shape_33,p:{x:-7.8,y:-66.1}},{t:this.shape_68,p:{x:-1.3}},{t:this.shape_73,p:{x:5.9,y:-65.9}},{t:this.shape_72},{t:this.shape_62,p:{x:18.1}},{t:this.shape_71},{t:this.shape_59,p:{x:33.1}},{t:this.shape_70}]},8).to({state:[{t:this.shape_1},{t:this.shape_66,p:{x:-149.3,y:-105.9}},{t:this.shape_61},{t:this.shape_3,p:{x:-136.4,y:-109.6}},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_41,p:{x:-76.4,y:-105.9}},{t:this.shape_24},{t:this.shape_65,p:{x:-58.3}},{t:this.shape_81,p:{x:-50.8,y:-105.9}},{t:this.shape_23},{t:this.shape_64},{t:this.shape_16},{t:this.shape_20,p:{x:-11.8,y:-105.9}},{t:this.shape_44,p:{x:-7,y:-105.7}},{t:this.shape_19,p:{x:-2.1,y:-105.9}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_22},{t:this.shape_13,p:{x:38}},{t:this.shape_5,p:{x:46.9}},{t:this.shape_52,p:{x:53.6,y:-101.2}},{t:this.shape_29,p:{x:-157.8,y:-85.9}},{t:this.shape_51},{t:this.shape_36,p:{x:-141.8}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_77,p:{x:-119.9,y:-86}},{t:this.shape_42,p:{x:-113.4}},{t:this.shape_32},{t:this.shape_38},{t:this.shape_30},{t:this.shape_27,p:{x:-77,y:-85.8}},{t:this.shape_35},{t:this.shape_40,p:{x:-54,y:-84.4}},{t:this.shape_31,p:{x:-44.1}},{t:this.shape_10,p:{x:-39.4,y:-86}},{t:this.shape_37,p:{x:-34.5,y:-85.8}},{t:this.shape_39,p:{x:-27.6}},{t:this.shape_18,p:{x:-16,y:-85.8}},{t:this.shape_69,p:{x:-8.5,y:-86}},{t:this.shape_34,p:{x:0.7}},{t:this.shape_49},{t:this.shape_50,p:{x:20.7,y:-86}},{t:this.shape_48},{t:this.shape_58,p:{x:37.5,y:-86}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_28,p:{x:65.3}},{t:this.shape_45},{t:this.shape_21,p:{x:77.4,y:-81.3}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:-136.4,y:-65.9}},{t:this.shape_54},{t:this.shape_53,p:{x:-120.1,y:-66.1}},{t:this.shape_60},{t:this.shape_76},{t:this.shape_4,p:{x:-86.5,y:-66.1}},{t:this.shape_17,p:{x:-73.7,y:-64.5}},{t:this.shape_63},{t:this.shape,p:{x:-59.1,y:-66.1}},{t:this.shape_12,p:{x:-54.2,y:-65.9}},{t:this.shape_80},{t:this.shape_67,p:{x:-35.7,y:-65.9}},{t:this.shape_43,p:{x:-28.2,y:-66.1}},{t:this.shape_75,p:{x:-19}},{t:this.shape_33,p:{x:-7.8,y:-66.1}},{t:this.shape_74,p:{x:-1.3}},{t:this.shape_73,p:{x:5.9,y:-65.9}},{t:this.shape_72},{t:this.shape_68,p:{x:18.1}},{t:this.shape_71},{t:this.shape_59,p:{x:33.1}},{t:this.shape_70},{t:this.shape_79},{t:this.shape_11,p:{x:56.7,y:-66.1}},{t:this.shape_62,p:{x:65.9}},{t:this.shape_78}]},15).to({state:[{t:this.shape_1},{t:this.shape_66,p:{x:-149.3,y:-105.9}},{t:this.shape_61},{t:this.shape_3,p:{x:-136.4,y:-109.6}},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_41,p:{x:-76.4,y:-105.9}},{t:this.shape_24},{t:this.shape_65,p:{x:-58.3}},{t:this.shape_81,p:{x:-50.8,y:-105.9}},{t:this.shape_23},{t:this.shape_64},{t:this.shape_16},{t:this.shape_20,p:{x:-11.8,y:-105.9}},{t:this.shape_44,p:{x:-7,y:-105.7}},{t:this.shape_19,p:{x:-2.1,y:-105.9}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_22},{t:this.shape_13,p:{x:38}},{t:this.shape_5,p:{x:46.9}},{t:this.shape_52,p:{x:53.6,y:-101.2}},{t:this.shape_29,p:{x:-157.8,y:-85.9}},{t:this.shape_51},{t:this.shape_36,p:{x:-141.8}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_77,p:{x:-119.9,y:-86}},{t:this.shape_42,p:{x:-113.4}},{t:this.shape_32},{t:this.shape_38},{t:this.shape_30},{t:this.shape_27,p:{x:-77,y:-85.8}},{t:this.shape_35},{t:this.shape_40,p:{x:-54,y:-84.4}},{t:this.shape_31,p:{x:-44.1}},{t:this.shape_10,p:{x:-39.4,y:-86}},{t:this.shape_37,p:{x:-34.5,y:-85.8}},{t:this.shape_39,p:{x:-27.6}},{t:this.shape_18,p:{x:-16,y:-85.8}},{t:this.shape_69,p:{x:-8.5,y:-86}},{t:this.shape_34,p:{x:0.7}},{t:this.shape_49},{t:this.shape_50,p:{x:20.7,y:-86}},{t:this.shape_48},{t:this.shape_58,p:{x:37.5,y:-86}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_28,p:{x:65.3}},{t:this.shape_45},{t:this.shape_21,p:{x:77.4,y:-81.3}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:-136.4,y:-65.9}},{t:this.shape_54},{t:this.shape_53,p:{x:-120.1,y:-66.1}},{t:this.shape_60},{t:this.shape_76},{t:this.shape_4,p:{x:-86.5,y:-66.1}},{t:this.shape_17,p:{x:-73.7,y:-64.5}},{t:this.shape_63},{t:this.shape,p:{x:-59.1,y:-66.1}},{t:this.shape_12,p:{x:-54.2,y:-65.9}},{t:this.shape_80},{t:this.shape_67,p:{x:-35.7,y:-65.9}},{t:this.shape_43,p:{x:-28.2,y:-66.1}},{t:this.shape_75,p:{x:-19}},{t:this.shape_33,p:{x:-7.8,y:-66.1}},{t:this.shape_74,p:{x:-1.3}},{t:this.shape_73,p:{x:5.9,y:-65.9}},{t:this.shape_72},{t:this.shape_68,p:{x:18.1}},{t:this.shape_71},{t:this.shape_59,p:{x:33.1}},{t:this.shape_70},{t:this.shape_79},{t:this.shape_11,p:{x:56.7,y:-66.1}},{t:this.shape_62,p:{x:65.9}},{t:this.shape_78},{t:this.shape_84,p:{x:88.9,y:-62.8}},{t:this.shape_83},{t:this.shape_82}]},19).to({state:[{t:this.shape_1},{t:this.shape_89,p:{x:-149.3,y:-105.9}},{t:this.shape_61},{t:this.shape_3,p:{x:-136.4,y:-109.6}},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_66,p:{x:-76.4,y:-105.9}},{t:this.shape_24},{t:this.shape_65,p:{x:-58.3}},{t:this.shape_81,p:{x:-50.8,y:-105.9}},{t:this.shape_23},{t:this.shape_64},{t:this.shape_16},{t:this.shape_41,p:{x:-11.8,y:-105.9}},{t:this.shape_44,p:{x:-7,y:-105.7}},{t:this.shape_20,p:{x:-2.1,y:-105.9}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_22},{t:this.shape_13,p:{x:38}},{t:this.shape_5,p:{x:46.9}},{t:this.shape_52,p:{x:53.6,y:-101.2}},{t:this.shape_29,p:{x:-157.8,y:-85.9}},{t:this.shape_51},{t:this.shape_36,p:{x:-141.8}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_77,p:{x:-119.9,y:-86}},{t:this.shape_42,p:{x:-113.4}},{t:this.shape_32},{t:this.shape_38},{t:this.shape_30},{t:this.shape_27,p:{x:-77,y:-85.8}},{t:this.shape_35},{t:this.shape_40,p:{x:-54,y:-84.4}},{t:this.shape_31,p:{x:-44.1}},{t:this.shape_19,p:{x:-39.4,y:-86}},{t:this.shape_37,p:{x:-34.5,y:-85.8}},{t:this.shape_39,p:{x:-27.6}},{t:this.shape_18,p:{x:-16,y:-85.8}},{t:this.shape_69,p:{x:-8.5,y:-86}},{t:this.shape_34,p:{x:0.7}},{t:this.shape_49},{t:this.shape_50,p:{x:20.7,y:-86}},{t:this.shape_48},{t:this.shape_58,p:{x:37.5,y:-86}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_28,p:{x:65.3}},{t:this.shape_45},{t:this.shape_21,p:{x:77.4,y:-81.3}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:-136.4,y:-65.9}},{t:this.shape_54},{t:this.shape_53,p:{x:-120.1,y:-66.1}},{t:this.shape_60},{t:this.shape_76},{t:this.shape_4,p:{x:-86.5,y:-66.1}},{t:this.shape_17,p:{x:-73.7,y:-64.5}},{t:this.shape_63},{t:this.shape_10,p:{x:-59.1,y:-66.1}},{t:this.shape_12,p:{x:-54.2,y:-65.9}},{t:this.shape_80},{t:this.shape_88,p:{x:-35.7,y:-65.9}},{t:this.shape_43,p:{x:-28.2,y:-66.1}},{t:this.shape_75,p:{x:-19}},{t:this.shape_33,p:{x:-7.8,y:-66.1}},{t:this.shape_74,p:{x:-1.3}},{t:this.shape_73,p:{x:5.9,y:-65.9}},{t:this.shape_72},{t:this.shape_68,p:{x:18.1}},{t:this.shape_71},{t:this.shape_59,p:{x:33.1}},{t:this.shape_70},{t:this.shape_79},{t:this.shape_11,p:{x:56.7,y:-66.1}},{t:this.shape_62,p:{x:65.9}},{t:this.shape_78},{t:this.shape_84,p:{x:88.9,y:-62.8}},{t:this.shape_83},{t:this.shape_82},{t:this.shape_87},{t:this.shape_86},{t:this.shape,p:{x:-142.2,y:-46.2}},{t:this.shape_67,p:{x:-137.4,y:-46}},{t:this.shape_85,p:{x:-130.4}}]},7).to({state:[{t:this.shape_1},{t:this.shape_89,p:{x:-149.3,y:-105.9}},{t:this.shape_61},{t:this.shape_3,p:{x:-136.4,y:-109.6}},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_66,p:{x:-76.4,y:-105.9}},{t:this.shape_24},{t:this.shape_65,p:{x:-58.3}},{t:this.shape_92,p:{x:-50.8,y:-105.9}},{t:this.shape_23},{t:this.shape_64},{t:this.shape_16},{t:this.shape_41,p:{x:-11.8,y:-105.9}},{t:this.shape_44,p:{x:-7,y:-105.7}},{t:this.shape_20,p:{x:-2.1,y:-105.9}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_22},{t:this.shape_13,p:{x:38}},{t:this.shape_5,p:{x:46.9}},{t:this.shape_52,p:{x:53.6,y:-101.2}},{t:this.shape_29,p:{x:-157.8,y:-85.9}},{t:this.shape_51},{t:this.shape_91},{t:this.shape_26},{t:this.shape_25},{t:this.shape_77,p:{x:-119.9,y:-86}},{t:this.shape_42,p:{x:-113.4}},{t:this.shape_32},{t:this.shape_38},{t:this.shape_30},{t:this.shape_36,p:{x:-77}},{t:this.shape_35},{t:this.shape_40,p:{x:-54,y:-84.4}},{t:this.shape_31,p:{x:-44.1}},{t:this.shape_19,p:{x:-39.4,y:-86}},{t:this.shape_37,p:{x:-34.5,y:-85.8}},{t:this.shape_39,p:{x:-27.6}},{t:this.shape_18,p:{x:-16,y:-85.8}},{t:this.shape_81,p:{x:-8.5,y:-86}},{t:this.shape_34,p:{x:0.7}},{t:this.shape_49},{t:this.shape_50,p:{x:20.7,y:-86}},{t:this.shape_48},{t:this.shape_69,p:{x:37.5,y:-86}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_28,p:{x:65.3}},{t:this.shape_45},{t:this.shape_21,p:{x:77.4,y:-81.3}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:-136.4,y:-65.9}},{t:this.shape_54},{t:this.shape_58,p:{x:-120.1,y:-66.1}},{t:this.shape_60},{t:this.shape_76},{t:this.shape_4,p:{x:-86.5,y:-66.1}},{t:this.shape_17,p:{x:-73.7,y:-64.5}},{t:this.shape_63},{t:this.shape_10,p:{x:-59.1,y:-66.1}},{t:this.shape_12,p:{x:-54.2,y:-65.9}},{t:this.shape_80},{t:this.shape_88,p:{x:-35.7,y:-65.9}},{t:this.shape_53,p:{x:-28.2,y:-66.1}},{t:this.shape_75,p:{x:-19}},{t:this.shape_33,p:{x:-7.8,y:-66.1}},{t:this.shape_74,p:{x:-1.3}},{t:this.shape_73,p:{x:5.9,y:-65.9}},{t:this.shape_72},{t:this.shape_68,p:{x:18.1}},{t:this.shape_71},{t:this.shape_59,p:{x:33.1}},{t:this.shape_70},{t:this.shape_79},{t:this.shape_43,p:{x:56.7,y:-66.1}},{t:this.shape_62,p:{x:65.9}},{t:this.shape_78},{t:this.shape_84,p:{x:88.9,y:-62.8}},{t:this.shape_83},{t:this.shape_82},{t:this.shape_87},{t:this.shape_86},{t:this.shape,p:{x:-142.2,y:-46.2}},{t:this.shape_67,p:{x:-137.4,y:-46}},{t:this.shape_90,p:{x:-130.4}},{t:this.shape_27,p:{x:-118.8,y:-46}},{t:this.shape_11,p:{x:-111.3,y:-46.2}},{t:this.shape_85,p:{x:-102.1}}]},8).to({state:[{t:this.shape_1},{t:this.shape_89,p:{x:-149.3,y:-105.9}},{t:this.shape_61},{t:this.shape_3,p:{x:-136.4,y:-109.6}},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_66,p:{x:-76.4,y:-105.9}},{t:this.shape_24},{t:this.shape_65,p:{x:-58.3}},{t:this.shape_92,p:{x:-50.8,y:-105.9}},{t:this.shape_23},{t:this.shape_64},{t:this.shape_16},{t:this.shape_41,p:{x:-11.8,y:-105.9}},{t:this.shape_44,p:{x:-7,y:-105.7}},{t:this.shape_20,p:{x:-2.1,y:-105.9}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_22},{t:this.shape_13,p:{x:38}},{t:this.shape_5,p:{x:46.9}},{t:this.shape_100,p:{x:53.6,y:-101.2}},{t:this.shape_29,p:{x:-157.8,y:-85.9}},{t:this.shape_51},{t:this.shape_91},{t:this.shape_26},{t:this.shape_25},{t:this.shape_99,p:{x:-119.9,y:-86}},{t:this.shape_42,p:{x:-113.4}},{t:this.shape_32},{t:this.shape_38},{t:this.shape_30},{t:this.shape_36,p:{x:-77}},{t:this.shape_35},{t:this.shape_40,p:{x:-54,y:-84.4}},{t:this.shape_31,p:{x:-44.1}},{t:this.shape_19,p:{x:-39.4,y:-86}},{t:this.shape_98},{t:this.shape_39,p:{x:-27.6}},{t:this.shape_18,p:{x:-16,y:-85.8}},{t:this.shape_81,p:{x:-8.5,y:-86}},{t:this.shape_34,p:{x:0.7}},{t:this.shape_49},{t:this.shape_77,p:{x:20.7,y:-86}},{t:this.shape_48},{t:this.shape_69,p:{x:37.5,y:-86}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_28,p:{x:65.3}},{t:this.shape_45},{t:this.shape_52,p:{x:77.4,y:-81.3}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:-136.4,y:-65.9}},{t:this.shape_54},{t:this.shape_58,p:{x:-120.1,y:-66.1}},{t:this.shape_60},{t:this.shape_76},{t:this.shape_4,p:{x:-86.5,y:-66.1}},{t:this.shape_17,p:{x:-73.7,y:-64.5}},{t:this.shape_63},{t:this.shape_10,p:{x:-59.1,y:-66.1}},{t:this.shape_12,p:{x:-54.2,y:-65.9}},{t:this.shape_80},{t:this.shape_88,p:{x:-35.7,y:-65.9}},{t:this.shape_53,p:{x:-28.2,y:-66.1}},{t:this.shape_75,p:{x:-19}},{t:this.shape_50,p:{x:-7.8,y:-66.1}},{t:this.shape_74,p:{x:-1.3}},{t:this.shape_97,p:{x:5.9,y:-65.9}},{t:this.shape_72},{t:this.shape_68,p:{x:18.1}},{t:this.shape_71},{t:this.shape_59,p:{x:33.1}},{t:this.shape_70},{t:this.shape_79},{t:this.shape_43,p:{x:56.7,y:-66.1}},{t:this.shape_62,p:{x:65.9}},{t:this.shape_78},{t:this.shape_84,p:{x:88.9,y:-62.8}},{t:this.shape_83},{t:this.shape_82},{t:this.shape_87},{t:this.shape_86},{t:this.shape,p:{x:-142.2,y:-46.2}},{t:this.shape_67,p:{x:-137.4,y:-46}},{t:this.shape_96,p:{x:-130.4}},{t:this.shape_27,p:{x:-118.8,y:-46}},{t:this.shape_11,p:{x:-111.3,y:-46.2}},{t:this.shape_95,p:{x:-102.1}},{t:this.shape_33,p:{x:-91,y:-46.2}},{t:this.shape_90,p:{x:-84.5}},{t:this.shape_37,p:{x:-77.3,y:-46}},{t:this.shape_73,p:{x:-72,y:-46}},{t:this.shape_85,p:{x:-65}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_21,p:{x:-43.2,y:-41.5}}]},7).to({state:[{t:this.shape_1},{t:this.shape_89,p:{x:-149.3,y:-105.9}},{t:this.shape_61},{t:this.shape_3,p:{x:-136.4,y:-109.6}},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_66,p:{x:-76.4,y:-105.9}},{t:this.shape_24},{t:this.shape_65,p:{x:-58.3}},{t:this.shape_92,p:{x:-50.8,y:-105.9}},{t:this.shape_23},{t:this.shape_64},{t:this.shape_16},{t:this.shape_41,p:{x:-11.8,y:-105.9}},{t:this.shape_44,p:{x:-7,y:-105.7}},{t:this.shape_20,p:{x:-2.1,y:-105.9}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_22},{t:this.shape_13,p:{x:38}},{t:this.shape_5,p:{x:46.9}},{t:this.shape_100,p:{x:53.6,y:-101.2}},{t:this.shape_29,p:{x:-157.8,y:-85.9}},{t:this.shape_51},{t:this.shape_91},{t:this.shape_26},{t:this.shape_25},{t:this.shape_109,p:{x:-119.9,y:-86}},{t:this.shape_42,p:{x:-113.4}},{t:this.shape_32},{t:this.shape_38},{t:this.shape_30},{t:this.shape_36,p:{x:-77}},{t:this.shape_35},{t:this.shape_40,p:{x:-54,y:-84.4}},{t:this.shape_31,p:{x:-44.1}},{t:this.shape_19,p:{x:-39.4,y:-86}},{t:this.shape_98},{t:this.shape_39,p:{x:-27.6}},{t:this.shape_18,p:{x:-16,y:-85.8}},{t:this.shape_81,p:{x:-8.5,y:-86}},{t:this.shape_34,p:{x:0.7}},{t:this.shape_49},{t:this.shape_108,p:{x:20.7,y:-86}},{t:this.shape_48},{t:this.shape_69,p:{x:37.5,y:-86}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_28,p:{x:65.3}},{t:this.shape_45},{t:this.shape_52,p:{x:77.4,y:-81.3}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:-136.4,y:-65.9}},{t:this.shape_54},{t:this.shape_58,p:{x:-120.1,y:-66.1}},{t:this.shape_60},{t:this.shape_76},{t:this.shape_4,p:{x:-86.5,y:-66.1}},{t:this.shape_17,p:{x:-73.7,y:-64.5}},{t:this.shape_63},{t:this.shape_10,p:{x:-59.1,y:-66.1}},{t:this.shape_12,p:{x:-54.2,y:-65.9}},{t:this.shape_80},{t:this.shape_88,p:{x:-35.7,y:-65.9}},{t:this.shape_53,p:{x:-28.2,y:-66.1}},{t:this.shape_75,p:{x:-19}},{t:this.shape_99,p:{x:-7.8,y:-66.1}},{t:this.shape_74,p:{x:-1.3}},{t:this.shape_97,p:{x:5.9,y:-65.9}},{t:this.shape_72},{t:this.shape_68,p:{x:18.1}},{t:this.shape_71},{t:this.shape_59,p:{x:33.1}},{t:this.shape_70},{t:this.shape_79},{t:this.shape_43,p:{x:56.7,y:-66.1}},{t:this.shape_62,p:{x:65.9}},{t:this.shape_78},{t:this.shape_107,p:{x:88.9,y:-62.8}},{t:this.shape_83},{t:this.shape_82},{t:this.shape_87},{t:this.shape_86},{t:this.shape,p:{x:-142.2,y:-46.2}},{t:this.shape_67,p:{x:-137.4,y:-46}},{t:this.shape_106,p:{x:-130.4}},{t:this.shape_27,p:{x:-118.8,y:-46}},{t:this.shape_11,p:{x:-111.3,y:-46.2}},{t:this.shape_96,p:{x:-102.1}},{t:this.shape_77,p:{x:-91,y:-46.2}},{t:this.shape_95,p:{x:-84.5}},{t:this.shape_37,p:{x:-77.3,y:-46}},{t:this.shape_73,p:{x:-72,y:-46}},{t:this.shape_90,p:{x:-65}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_21,p:{x:-43.2,y:-41.5}},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_85,p:{x:-5.7}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_50,p:{x:16.1,y:-46.2}},{t:this.shape_33,p:{x:20.5,y:-46.2}},{t:this.shape_84,p:{x:27,y:-42.9}}]},29).to({state:[{t:this.shape_1},{t:this.shape_89,p:{x:-149.3,y:-105.9}},{t:this.shape_61},{t:this.shape_3,p:{x:-136.4,y:-109.6}},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_66,p:{x:-76.4,y:-105.9}},{t:this.shape_24},{t:this.shape_65,p:{x:-58.3}},{t:this.shape_92,p:{x:-50.8,y:-105.9}},{t:this.shape_23},{t:this.shape_64},{t:this.shape_16},{t:this.shape_41,p:{x:-11.8,y:-105.9}},{t:this.shape_44,p:{x:-7,y:-105.7}},{t:this.shape_20,p:{x:-2.1,y:-105.9}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_22},{t:this.shape_13,p:{x:38}},{t:this.shape_5,p:{x:46.9}},{t:this.shape_100,p:{x:53.6,y:-101.2}},{t:this.shape_29,p:{x:-157.8,y:-85.9}},{t:this.shape_51},{t:this.shape_91},{t:this.shape_26},{t:this.shape_25},{t:this.shape_115,p:{x:-119.9,y:-86}},{t:this.shape_42,p:{x:-113.4}},{t:this.shape_32},{t:this.shape_38},{t:this.shape_30},{t:this.shape_36,p:{x:-77}},{t:this.shape_35},{t:this.shape_40,p:{x:-54,y:-84.4}},{t:this.shape_31,p:{x:-44.1}},{t:this.shape_19,p:{x:-39.4,y:-86}},{t:this.shape_98},{t:this.shape_39,p:{x:-27.6}},{t:this.shape_18,p:{x:-16,y:-85.8}},{t:this.shape_81,p:{x:-8.5,y:-86}},{t:this.shape_34,p:{x:0.7}},{t:this.shape_49},{t:this.shape_114,p:{x:20.7,y:-86}},{t:this.shape_48},{t:this.shape_69,p:{x:37.5,y:-86}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_28,p:{x:65.3}},{t:this.shape_45},{t:this.shape_52,p:{x:77.4,y:-81.3}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:-136.4,y:-65.9}},{t:this.shape_54},{t:this.shape_58,p:{x:-120.1,y:-66.1}},{t:this.shape_60},{t:this.shape_76},{t:this.shape_4,p:{x:-86.5,y:-66.1}},{t:this.shape_17,p:{x:-73.7,y:-64.5}},{t:this.shape_63},{t:this.shape_10,p:{x:-59.1,y:-66.1}},{t:this.shape_12,p:{x:-54.2,y:-65.9}},{t:this.shape_80},{t:this.shape_88,p:{x:-35.7,y:-65.9}},{t:this.shape_53,p:{x:-28.2,y:-66.1}},{t:this.shape_75,p:{x:-19}},{t:this.shape_109,p:{x:-7.8,y:-66.1}},{t:this.shape_74,p:{x:-1.3}},{t:this.shape_97,p:{x:5.9,y:-65.9}},{t:this.shape_72},{t:this.shape_68,p:{x:18.1}},{t:this.shape_71},{t:this.shape_59,p:{x:33.1}},{t:this.shape_70},{t:this.shape_79},{t:this.shape_43,p:{x:56.7,y:-66.1}},{t:this.shape_62,p:{x:65.9}},{t:this.shape_78},{t:this.shape_107,p:{x:88.9,y:-62.8}},{t:this.shape_83},{t:this.shape_82},{t:this.shape_87},{t:this.shape_86},{t:this.shape,p:{x:-142.2,y:-46.2}},{t:this.shape_67,p:{x:-137.4,y:-46}},{t:this.shape_106,p:{x:-130.4}},{t:this.shape_27,p:{x:-118.8,y:-46}},{t:this.shape_11,p:{x:-111.3,y:-46.2}},{t:this.shape_96,p:{x:-102.1}},{t:this.shape_108,p:{x:-91,y:-46.2}},{t:this.shape_95,p:{x:-84.5}},{t:this.shape_37,p:{x:-77.3,y:-46}},{t:this.shape_73,p:{x:-72,y:-46}},{t:this.shape_90,p:{x:-65}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_21,p:{x:-43.2,y:-41.5}},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_85,p:{x:-5.7}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_99,p:{x:16.1,y:-46.2}},{t:this.shape_77,p:{x:20.5,y:-46.2}},{t:this.shape_84,p:{x:27,y:-42.9}},{t:this.shape_113},{t:this.shape_112},{t:this.shape_50,p:{x:53.2,y:-46.2}},{t:this.shape_33,p:{x:57.6,y:-46.2}},{t:this.shape_111},{t:this.shape_110}]},35).to({state:[{t:this.shape_1},{t:this.shape_89,p:{x:-149.3,y:-105.9}},{t:this.shape_61},{t:this.shape_3,p:{x:-136.4,y:-109.6}},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_66,p:{x:-76.4,y:-105.9}},{t:this.shape_24},{t:this.shape_65,p:{x:-58.3}},{t:this.shape_118,p:{x:-50.8,y:-105.9}},{t:this.shape_23},{t:this.shape_64},{t:this.shape_16},{t:this.shape_41,p:{x:-11.8,y:-105.9}},{t:this.shape_44,p:{x:-7,y:-105.7}},{t:this.shape_20,p:{x:-2.1,y:-105.9}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_22},{t:this.shape_13,p:{x:38}},{t:this.shape_5,p:{x:46.9}},{t:this.shape_100,p:{x:53.6,y:-101.2}},{t:this.shape_29,p:{x:-157.8,y:-85.9}},{t:this.shape_51},{t:this.shape_91},{t:this.shape_26},{t:this.shape_25},{t:this.shape_115,p:{x:-119.9,y:-86}},{t:this.shape_42,p:{x:-113.4}},{t:this.shape_32},{t:this.shape_38},{t:this.shape_30},{t:this.shape_36,p:{x:-77}},{t:this.shape_35},{t:this.shape_40,p:{x:-54,y:-84.4}},{t:this.shape_31,p:{x:-44.1}},{t:this.shape_19,p:{x:-39.4,y:-86}},{t:this.shape_98},{t:this.shape_39,p:{x:-27.6}},{t:this.shape_18,p:{x:-16,y:-85.8}},{t:this.shape_92,p:{x:-8.5,y:-86}},{t:this.shape_34,p:{x:0.7}},{t:this.shape_49},{t:this.shape_114,p:{x:20.7,y:-86}},{t:this.shape_48},{t:this.shape_81,p:{x:37.5,y:-86}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_28,p:{x:65.3}},{t:this.shape_45},{t:this.shape_52,p:{x:77.4,y:-81.3}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:-136.4,y:-65.9}},{t:this.shape_54},{t:this.shape_69,p:{x:-120.1,y:-66.1}},{t:this.shape_60},{t:this.shape_76},{t:this.shape_4,p:{x:-86.5,y:-66.1}},{t:this.shape_17,p:{x:-73.7,y:-64.5}},{t:this.shape_63},{t:this.shape_10,p:{x:-59.1,y:-66.1}},{t:this.shape_12,p:{x:-54.2,y:-65.9}},{t:this.shape_80},{t:this.shape_117},{t:this.shape_58,p:{x:-28.2,y:-66.1}},{t:this.shape_75,p:{x:-19}},{t:this.shape_109,p:{x:-7.8,y:-66.1}},{t:this.shape_74,p:{x:-1.3}},{t:this.shape_97,p:{x:5.9,y:-65.9}},{t:this.shape_72},{t:this.shape_68,p:{x:18.1}},{t:this.shape_71},{t:this.shape_59,p:{x:33.1}},{t:this.shape_70},{t:this.shape_79},{t:this.shape_53,p:{x:56.7,y:-66.1}},{t:this.shape_62,p:{x:65.9}},{t:this.shape_78},{t:this.shape_107,p:{x:88.9,y:-62.8}},{t:this.shape_83},{t:this.shape_82},{t:this.shape_87},{t:this.shape_86},{t:this.shape,p:{x:-142.2,y:-46.2}},{t:this.shape_88,p:{x:-137.4,y:-46}},{t:this.shape_116},{t:this.shape_27,p:{x:-118.8,y:-46}},{t:this.shape_43,p:{x:-111.3,y:-46.2}},{t:this.shape_106,p:{x:-102.1}},{t:this.shape_108,p:{x:-91,y:-46.2}},{t:this.shape_96,p:{x:-84.5}},{t:this.shape_37,p:{x:-77.3,y:-46}},{t:this.shape_73,p:{x:-72,y:-46}},{t:this.shape_95,p:{x:-65}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_21,p:{x:-43.2,y:-41.5}},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_90,p:{x:-5.7}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_99,p:{x:16.1,y:-46.2}},{t:this.shape_77,p:{x:20.5,y:-46.2}},{t:this.shape_84,p:{x:27,y:-42.9}},{t:this.shape_113},{t:this.shape_112},{t:this.shape_50,p:{x:53.2,y:-46.2}},{t:this.shape_33,p:{x:57.6,y:-46.2}},{t:this.shape_111},{t:this.shape_110},{t:this.shape_67,p:{x:89,y:-46}},{t:this.shape_11,p:{x:96.5,y:-46.2}},{t:this.shape_85,p:{x:105.7}}]},11).to({state:[{t:this.shape_1},{t:this.shape_123,p:{x:-149.3,y:-105.9}},{t:this.shape_61},{t:this.shape_3,p:{x:-136.4,y:-109.6}},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_89,p:{x:-76.4,y:-105.9}},{t:this.shape_24},{t:this.shape_65,p:{x:-58.3}},{t:this.shape_118,p:{x:-50.8,y:-105.9}},{t:this.shape_23},{t:this.shape_64},{t:this.shape_16},{t:this.shape_66,p:{x:-11.8,y:-105.9}},{t:this.shape_44,p:{x:-7,y:-105.7}},{t:this.shape_41,p:{x:-2.1,y:-105.9}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_22},{t:this.shape_13,p:{x:38}},{t:this.shape_5,p:{x:46.9}},{t:this.shape_100,p:{x:53.6,y:-101.2}},{t:this.shape_29,p:{x:-157.8,y:-85.9}},{t:this.shape_51},{t:this.shape_91},{t:this.shape_26},{t:this.shape_25},{t:this.shape_122,p:{x:-119.9,y:-86}},{t:this.shape_42,p:{x:-113.4}},{t:this.shape_32},{t:this.shape_38},{t:this.shape_30},{t:this.shape_36,p:{x:-77}},{t:this.shape_35},{t:this.shape_40,p:{x:-54,y:-84.4}},{t:this.shape_31,p:{x:-44.1}},{t:this.shape_20,p:{x:-39.4,y:-86}},{t:this.shape_98},{t:this.shape_39,p:{x:-27.6}},{t:this.shape_18,p:{x:-16,y:-85.8}},{t:this.shape_92,p:{x:-8.5,y:-86}},{t:this.shape_34,p:{x:0.7}},{t:this.shape_49},{t:this.shape_115,p:{x:20.7,y:-86}},{t:this.shape_48},{t:this.shape_81,p:{x:37.5,y:-86}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_28,p:{x:65.3}},{t:this.shape_45},{t:this.shape_52,p:{x:77.4,y:-81.3}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:-136.4,y:-65.9}},{t:this.shape_54},{t:this.shape_69,p:{x:-120.1,y:-66.1}},{t:this.shape_60},{t:this.shape_76},{t:this.shape_4,p:{x:-86.5,y:-66.1}},{t:this.shape_17,p:{x:-73.7,y:-64.5}},{t:this.shape_63},{t:this.shape_19,p:{x:-59.1,y:-66.1}},{t:this.shape_12,p:{x:-54.2,y:-65.9}},{t:this.shape_80},{t:this.shape_117},{t:this.shape_58,p:{x:-28.2,y:-66.1}},{t:this.shape_75,p:{x:-19}},{t:this.shape_114,p:{x:-7.8,y:-66.1}},{t:this.shape_74,p:{x:-1.3}},{t:this.shape_97,p:{x:5.9,y:-65.9}},{t:this.shape_72},{t:this.shape_68,p:{x:18.1}},{t:this.shape_71},{t:this.shape_59,p:{x:33.1}},{t:this.shape_70},{t:this.shape_79},{t:this.shape_53,p:{x:56.7,y:-66.1}},{t:this.shape_62,p:{x:65.9}},{t:this.shape_78},{t:this.shape_107,p:{x:88.9,y:-62.8}},{t:this.shape_83},{t:this.shape_82},{t:this.shape_87},{t:this.shape_86},{t:this.shape_10,p:{x:-142.2,y:-46.2}},{t:this.shape_88,p:{x:-137.4,y:-46}},{t:this.shape_116},{t:this.shape_27,p:{x:-118.8,y:-46}},{t:this.shape_43,p:{x:-111.3,y:-46.2}},{t:this.shape_106,p:{x:-102.1}},{t:this.shape_109,p:{x:-91,y:-46.2}},{t:this.shape_96,p:{x:-84.5}},{t:this.shape_37,p:{x:-77.3,y:-46}},{t:this.shape_73,p:{x:-72,y:-46}},{t:this.shape_95,p:{x:-65}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_21,p:{x:-43.2,y:-41.5}},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_90,p:{x:-5.7}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_108,p:{x:16.1,y:-46.2}},{t:this.shape_99,p:{x:20.5,y:-46.2}},{t:this.shape_84,p:{x:27,y:-42.9}},{t:this.shape_113},{t:this.shape_112},{t:this.shape_77,p:{x:53.2,y:-46.2}},{t:this.shape_50,p:{x:57.6,y:-46.2}},{t:this.shape_111},{t:this.shape_110},{t:this.shape_67,p:{x:89,y:-46}},{t:this.shape_11,p:{x:96.5,y:-46.2}},{t:this.shape_85,p:{x:105.7}},{t:this.shape_33,p:{x:-160.8,y:-26.3}},{t:this.shape,p:{x:-156.4,y:-26.3}},{t:this.shape_121,p:{x:-149.4}},{t:this.shape_120,p:{x:-140.2}},{t:this.shape_119,p:{x:-131.4}}]},7).to({state:[{t:this.shape_1},{t:this.shape_123,p:{x:-149.3,y:-105.9}},{t:this.shape_61},{t:this.shape_3,p:{x:-136.4,y:-109.6}},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_89,p:{x:-76.4,y:-105.9}},{t:this.shape_24},{t:this.shape_65,p:{x:-58.3}},{t:this.shape_118,p:{x:-50.8,y:-105.9}},{t:this.shape_23},{t:this.shape_64},{t:this.shape_16},{t:this.shape_66,p:{x:-11.8,y:-105.9}},{t:this.shape_44,p:{x:-7,y:-105.7}},{t:this.shape_41,p:{x:-2.1,y:-105.9}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_22},{t:this.shape_13,p:{x:38}},{t:this.shape_5,p:{x:46.9}},{t:this.shape_100,p:{x:53.6,y:-101.2}},{t:this.shape_29,p:{x:-157.8,y:-85.9}},{t:this.shape_51},{t:this.shape_91},{t:this.shape_26},{t:this.shape_25},{t:this.shape_122,p:{x:-119.9,y:-86}},{t:this.shape_42,p:{x:-113.4}},{t:this.shape_32},{t:this.shape_38},{t:this.shape_30},{t:this.shape_36,p:{x:-77}},{t:this.shape_35},{t:this.shape_40,p:{x:-54,y:-84.4}},{t:this.shape_31,p:{x:-44.1}},{t:this.shape_20,p:{x:-39.4,y:-86}},{t:this.shape_98},{t:this.shape_39,p:{x:-27.6}},{t:this.shape_18,p:{x:-16,y:-85.8}},{t:this.shape_92,p:{x:-8.5,y:-86}},{t:this.shape_34,p:{x:0.7}},{t:this.shape_49},{t:this.shape_115,p:{x:20.7,y:-86}},{t:this.shape_48},{t:this.shape_81,p:{x:37.5,y:-86}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_28,p:{x:65.3}},{t:this.shape_45},{t:this.shape_52,p:{x:77.4,y:-81.3}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:-136.4,y:-65.9}},{t:this.shape_54},{t:this.shape_69,p:{x:-120.1,y:-66.1}},{t:this.shape_60},{t:this.shape_76},{t:this.shape_4,p:{x:-86.5,y:-66.1}},{t:this.shape_17,p:{x:-73.7,y:-64.5}},{t:this.shape_63},{t:this.shape_19,p:{x:-59.1,y:-66.1}},{t:this.shape_12,p:{x:-54.2,y:-65.9}},{t:this.shape_80},{t:this.shape_117},{t:this.shape_58,p:{x:-28.2,y:-66.1}},{t:this.shape_75,p:{x:-19}},{t:this.shape_114,p:{x:-7.8,y:-66.1}},{t:this.shape_74,p:{x:-1.3}},{t:this.shape_97,p:{x:5.9,y:-65.9}},{t:this.shape_72},{t:this.shape_68,p:{x:18.1}},{t:this.shape_71},{t:this.shape_59,p:{x:33.1}},{t:this.shape_70},{t:this.shape_79},{t:this.shape_53,p:{x:56.7,y:-66.1}},{t:this.shape_62,p:{x:65.9}},{t:this.shape_78},{t:this.shape_107,p:{x:88.9,y:-62.8}},{t:this.shape_83},{t:this.shape_82},{t:this.shape_87},{t:this.shape_86},{t:this.shape_10,p:{x:-142.2,y:-46.2}},{t:this.shape_88,p:{x:-137.4,y:-46}},{t:this.shape_116},{t:this.shape_27,p:{x:-118.8,y:-46}},{t:this.shape_43,p:{x:-111.3,y:-46.2}},{t:this.shape_106,p:{x:-102.1}},{t:this.shape_109,p:{x:-91,y:-46.2}},{t:this.shape_96,p:{x:-84.5}},{t:this.shape_37,p:{x:-77.3,y:-46}},{t:this.shape_73,p:{x:-72,y:-46}},{t:this.shape_95,p:{x:-65}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_21,p:{x:-43.2,y:-41.5}},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_90,p:{x:-5.7}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_108,p:{x:16.1,y:-46.2}},{t:this.shape_99,p:{x:20.5,y:-46.2}},{t:this.shape_84,p:{x:27,y:-42.9}},{t:this.shape_113},{t:this.shape_112},{t:this.shape_77,p:{x:53.2,y:-46.2}},{t:this.shape_50,p:{x:57.6,y:-46.2}},{t:this.shape_111},{t:this.shape_110},{t:this.shape_67,p:{x:89,y:-46}},{t:this.shape_11,p:{x:96.5,y:-46.2}},{t:this.shape_85,p:{x:105.7}},{t:this.shape_33,p:{x:-160.8,y:-26.3}},{t:this.shape,p:{x:-156.4,y:-26.3}},{t:this.shape_126,p:{x:-149.4}},{t:this.shape_120,p:{x:-140.2}},{t:this.shape_119,p:{x:-131.4}},{t:this.shape_125},{t:this.shape_121,p:{x:-108.7}},{t:this.shape_124}]},18).to({state:[{t:this.shape_1},{t:this.shape_131,p:{x:-149.3}},{t:this.shape_61},{t:this.shape_3,p:{x:-136.4,y:-109.6}},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_123,p:{x:-76.4,y:-105.9}},{t:this.shape_24},{t:this.shape_65,p:{x:-58.3}},{t:this.shape_118,p:{x:-50.8,y:-105.9}},{t:this.shape_23},{t:this.shape_64},{t:this.shape_16},{t:this.shape_89,p:{x:-11.8,y:-105.9}},{t:this.shape_44,p:{x:-7,y:-105.7}},{t:this.shape_66,p:{x:-2.1,y:-105.9}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_22},{t:this.shape_13,p:{x:38}},{t:this.shape_5,p:{x:46.9}},{t:this.shape_100,p:{x:53.6,y:-101.2}},{t:this.shape_29,p:{x:-157.8,y:-85.9}},{t:this.shape_51},{t:this.shape_91},{t:this.shape_26},{t:this.shape_25},{t:this.shape_122,p:{x:-119.9,y:-86}},{t:this.shape_42,p:{x:-113.4}},{t:this.shape_32},{t:this.shape_38},{t:this.shape_30},{t:this.shape_36,p:{x:-77}},{t:this.shape_35},{t:this.shape_40,p:{x:-54,y:-84.4}},{t:this.shape_31,p:{x:-44.1}},{t:this.shape_41,p:{x:-39.4,y:-86}},{t:this.shape_98},{t:this.shape_39,p:{x:-27.6}},{t:this.shape_18,p:{x:-16,y:-85.8}},{t:this.shape_92,p:{x:-8.5,y:-86}},{t:this.shape_34,p:{x:0.7}},{t:this.shape_49},{t:this.shape_115,p:{x:20.7,y:-86}},{t:this.shape_48},{t:this.shape_81,p:{x:37.5,y:-86}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_28,p:{x:65.3}},{t:this.shape_45},{t:this.shape_52,p:{x:77.4,y:-81.3}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_130},{t:this.shape_54},{t:this.shape_69,p:{x:-120.1,y:-66.1}},{t:this.shape_60},{t:this.shape_76},{t:this.shape_4,p:{x:-86.5,y:-66.1}},{t:this.shape_17,p:{x:-73.7,y:-64.5}},{t:this.shape_63},{t:this.shape_20,p:{x:-59.1,y:-66.1}},{t:this.shape_12,p:{x:-54.2,y:-65.9}},{t:this.shape_80},{t:this.shape_117},{t:this.shape_58,p:{x:-28.2,y:-66.1}},{t:this.shape_75,p:{x:-19}},{t:this.shape_114,p:{x:-7.8,y:-66.1}},{t:this.shape_74,p:{x:-1.3}},{t:this.shape_97,p:{x:5.9,y:-65.9}},{t:this.shape_72},{t:this.shape_68,p:{x:18.1}},{t:this.shape_71},{t:this.shape_59,p:{x:33.1}},{t:this.shape_70},{t:this.shape_79},{t:this.shape_53,p:{x:56.7,y:-66.1}},{t:this.shape_62,p:{x:65.9}},{t:this.shape_78},{t:this.shape_107,p:{x:88.9,y:-62.8}},{t:this.shape_83},{t:this.shape_82},{t:this.shape_87},{t:this.shape_86},{t:this.shape_19,p:{x:-142.2,y:-46.2}},{t:this.shape_88,p:{x:-137.4,y:-46}},{t:this.shape_116},{t:this.shape_27,p:{x:-118.8,y:-46}},{t:this.shape_43,p:{x:-111.3,y:-46.2}},{t:this.shape_106,p:{x:-102.1}},{t:this.shape_109,p:{x:-91,y:-46.2}},{t:this.shape_96,p:{x:-84.5}},{t:this.shape_37,p:{x:-77.3,y:-46}},{t:this.shape_73,p:{x:-72,y:-46}},{t:this.shape_95,p:{x:-65}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_21,p:{x:-43.2,y:-41.5}},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_90,p:{x:-5.7}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_108,p:{x:16.1,y:-46.2}},{t:this.shape_99,p:{x:20.5,y:-46.2}},{t:this.shape_84,p:{x:27,y:-42.9}},{t:this.shape_113},{t:this.shape_112},{t:this.shape_77,p:{x:53.2,y:-46.2}},{t:this.shape_50,p:{x:57.6,y:-46.2}},{t:this.shape_111},{t:this.shape_110},{t:this.shape_67,p:{x:89,y:-46}},{t:this.shape_11,p:{x:96.5,y:-46.2}},{t:this.shape_85,p:{x:105.7}},{t:this.shape_33,p:{x:-160.8,y:-26.3}},{t:this.shape_10,p:{x:-156.4,y:-26.3}},{t:this.shape_126,p:{x:-149.4}},{t:this.shape_129,p:{x:-140.2}},{t:this.shape_119,p:{x:-131.4}},{t:this.shape_125},{t:this.shape_121,p:{x:-108.7}},{t:this.shape_124},{t:this.shape_128},{t:this.shape_127},{t:this.shape,p:{x:-68.8,y:-26.3}},{t:this.shape_55,p:{x:-64,y:-26.1}},{t:this.shape_120,p:{x:-57}}]},7).to({state:[{t:this.shape_1},{t:this.shape_131,p:{x:-149.3}},{t:this.shape_61},{t:this.shape_3,p:{x:-136.4,y:-109.6}},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_123,p:{x:-76.4,y:-105.9}},{t:this.shape_24},{t:this.shape_65,p:{x:-58.3}},{t:this.shape_118,p:{x:-50.8,y:-105.9}},{t:this.shape_23},{t:this.shape_64},{t:this.shape_16},{t:this.shape_89,p:{x:-11.8,y:-105.9}},{t:this.shape_44,p:{x:-7,y:-105.7}},{t:this.shape_66,p:{x:-2.1,y:-105.9}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_22},{t:this.shape_13,p:{x:38}},{t:this.shape_5,p:{x:46.9}},{t:this.shape_138,p:{x:53.6,y:-101.2}},{t:this.shape_29,p:{x:-157.8,y:-85.9}},{t:this.shape_51},{t:this.shape_91},{t:this.shape_26},{t:this.shape_25},{t:this.shape_137,p:{x:-119.9}},{t:this.shape_42,p:{x:-113.4}},{t:this.shape_32},{t:this.shape_38},{t:this.shape_30},{t:this.shape_36,p:{x:-77}},{t:this.shape_35},{t:this.shape_40,p:{x:-54,y:-84.4}},{t:this.shape_31,p:{x:-44.1}},{t:this.shape_41,p:{x:-39.4,y:-86}},{t:this.shape_98},{t:this.shape_39,p:{x:-27.6}},{t:this.shape_18,p:{x:-16,y:-85.8}},{t:this.shape_92,p:{x:-8.5,y:-86}},{t:this.shape_34,p:{x:0.7}},{t:this.shape_49},{t:this.shape_122,p:{x:20.7,y:-86}},{t:this.shape_48},{t:this.shape_81,p:{x:37.5,y:-86}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_28,p:{x:65.3}},{t:this.shape_45},{t:this.shape_100,p:{x:77.4,y:-81.3}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_130},{t:this.shape_54},{t:this.shape_69,p:{x:-120.1,y:-66.1}},{t:this.shape_60},{t:this.shape_76},{t:this.shape_4,p:{x:-86.5,y:-66.1}},{t:this.shape_17,p:{x:-73.7,y:-64.5}},{t:this.shape_63},{t:this.shape_20,p:{x:-59.1,y:-66.1}},{t:this.shape_12,p:{x:-54.2,y:-65.9}},{t:this.shape_80},{t:this.shape_117},{t:this.shape_58,p:{x:-28.2,y:-66.1}},{t:this.shape_75,p:{x:-19}},{t:this.shape_115,p:{x:-7.8,y:-66.1}},{t:this.shape_74,p:{x:-1.3}},{t:this.shape_136},{t:this.shape_72},{t:this.shape_68,p:{x:18.1}},{t:this.shape_71},{t:this.shape_59,p:{x:33.1}},{t:this.shape_70},{t:this.shape_79},{t:this.shape_53,p:{x:56.7,y:-66.1}},{t:this.shape_62,p:{x:65.9}},{t:this.shape_78},{t:this.shape_135,p:{x:88.9,y:-62.8}},{t:this.shape_83},{t:this.shape_82},{t:this.shape_87},{t:this.shape_86},{t:this.shape_19,p:{x:-142.2,y:-46.2}},{t:this.shape_88,p:{x:-137.4,y:-46}},{t:this.shape_116},{t:this.shape_27,p:{x:-118.8,y:-46}},{t:this.shape_43,p:{x:-111.3,y:-46.2}},{t:this.shape_106,p:{x:-102.1}},{t:this.shape_114,p:{x:-91,y:-46.2}},{t:this.shape_96,p:{x:-84.5}},{t:this.shape_37,p:{x:-77.3,y:-46}},{t:this.shape_97,p:{x:-72,y:-46}},{t:this.shape_95,p:{x:-65}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_52,p:{x:-43.2,y:-41.5}},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_90,p:{x:-5.7}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_109,p:{x:16.1,y:-46.2}},{t:this.shape_108,p:{x:20.5,y:-46.2}},{t:this.shape_107,p:{x:27,y:-42.9}},{t:this.shape_113},{t:this.shape_112},{t:this.shape_99,p:{x:53.2,y:-46.2}},{t:this.shape_77,p:{x:57.6,y:-46.2}},{t:this.shape_111},{t:this.shape_110},{t:this.shape_67,p:{x:89,y:-46}},{t:this.shape_11,p:{x:96.5,y:-46.2}},{t:this.shape_85,p:{x:105.7}},{t:this.shape_50,p:{x:-160.8,y:-26.3}},{t:this.shape_10,p:{x:-156.4,y:-26.3}},{t:this.shape_134,p:{x:-149.4}},{t:this.shape_133,p:{x:-140.2}},{t:this.shape_119,p:{x:-131.4}},{t:this.shape_125},{t:this.shape_126,p:{x:-108.7}},{t:this.shape_124},{t:this.shape_128},{t:this.shape_127},{t:this.shape,p:{x:-68.8,y:-26.3}},{t:this.shape_55,p:{x:-64,y:-26.1}},{t:this.shape_129,p:{x:-57}},{t:this.shape_121,p:{x:-43.2}},{t:this.shape_120,p:{x:-34}},{t:this.shape_132},{t:this.shape_73,p:{x:-18,y:-26.1}},{t:this.shape_33,p:{x:-13.1,y:-26.3}},{t:this.shape_84,p:{x:-6.6,y:-23}},{t:this.shape_21,p:{x:0.1,y:-21.6}}]},8).to({state:[{t:this.shape_1},{t:this.shape_131,p:{x:-149.3}},{t:this.shape_61},{t:this.shape_3,p:{x:-136.4,y:-109.6}},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_123,p:{x:-76.4,y:-105.9}},{t:this.shape_24},{t:this.shape_65,p:{x:-58.3}},{t:this.shape_141,p:{x:-50.8,y:-105.9}},{t:this.shape_23},{t:this.shape_64},{t:this.shape_16},{t:this.shape_89,p:{x:-11.8,y:-105.9}},{t:this.shape_44,p:{x:-7,y:-105.7}},{t:this.shape_66,p:{x:-2.1,y:-105.9}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_22},{t:this.shape_13,p:{x:38}},{t:this.shape_5,p:{x:46.9}},{t:this.shape_138,p:{x:53.6,y:-101.2}},{t:this.shape_29,p:{x:-157.8,y:-85.9}},{t:this.shape_51},{t:this.shape_91},{t:this.shape_26},{t:this.shape_25},{t:this.shape_137,p:{x:-119.9}},{t:this.shape_42,p:{x:-113.4}},{t:this.shape_32},{t:this.shape_38},{t:this.shape_30},{t:this.shape_36,p:{x:-77}},{t:this.shape_35},{t:this.shape_40,p:{x:-54,y:-84.4}},{t:this.shape_31,p:{x:-44.1}},{t:this.shape_41,p:{x:-39.4,y:-86}},{t:this.shape_98},{t:this.shape_39,p:{x:-27.6}},{t:this.shape_18,p:{x:-16,y:-85.8}},{t:this.shape_118,p:{x:-8.5,y:-86}},{t:this.shape_34,p:{x:0.7}},{t:this.shape_49},{t:this.shape_122,p:{x:20.7,y:-86}},{t:this.shape_48},{t:this.shape_92,p:{x:37.5,y:-86}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_28,p:{x:65.3}},{t:this.shape_45},{t:this.shape_100,p:{x:77.4,y:-81.3}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_130},{t:this.shape_54},{t:this.shape_81,p:{x:-120.1,y:-66.1}},{t:this.shape_60},{t:this.shape_76},{t:this.shape_4,p:{x:-86.5,y:-66.1}},{t:this.shape_17,p:{x:-73.7,y:-64.5}},{t:this.shape_63},{t:this.shape_20,p:{x:-59.1,y:-66.1}},{t:this.shape_12,p:{x:-54.2,y:-65.9}},{t:this.shape_80},{t:this.shape_117},{t:this.shape_69,p:{x:-28.2,y:-66.1}},{t:this.shape_75,p:{x:-19}},{t:this.shape_115,p:{x:-7.8,y:-66.1}},{t:this.shape_74,p:{x:-1.3}},{t:this.shape_136},{t:this.shape_72},{t:this.shape_68,p:{x:18.1}},{t:this.shape_71},{t:this.shape_59,p:{x:33.1}},{t:this.shape_70},{t:this.shape_79},{t:this.shape_58,p:{x:56.7,y:-66.1}},{t:this.shape_62,p:{x:65.9}},{t:this.shape_78},{t:this.shape_135,p:{x:88.9,y:-62.8}},{t:this.shape_83},{t:this.shape_82},{t:this.shape_87},{t:this.shape_86},{t:this.shape_19,p:{x:-142.2,y:-46.2}},{t:this.shape_88,p:{x:-137.4,y:-46}},{t:this.shape_116},{t:this.shape_27,p:{x:-118.8,y:-46}},{t:this.shape_53,p:{x:-111.3,y:-46.2}},{t:this.shape_106,p:{x:-102.1}},{t:this.shape_114,p:{x:-91,y:-46.2}},{t:this.shape_96,p:{x:-84.5}},{t:this.shape_37,p:{x:-77.3,y:-46}},{t:this.shape_97,p:{x:-72,y:-46}},{t:this.shape_95,p:{x:-65}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_52,p:{x:-43.2,y:-41.5}},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_90,p:{x:-5.7}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_109,p:{x:16.1,y:-46.2}},{t:this.shape_108,p:{x:20.5,y:-46.2}},{t:this.shape_107,p:{x:27,y:-42.9}},{t:this.shape_113},{t:this.shape_112},{t:this.shape_99,p:{x:53.2,y:-46.2}},{t:this.shape_77,p:{x:57.6,y:-46.2}},{t:this.shape_111},{t:this.shape_110},{t:this.shape_67,p:{x:89,y:-46}},{t:this.shape_43,p:{x:96.5,y:-46.2}},{t:this.shape_85,p:{x:105.7}},{t:this.shape_50,p:{x:-160.8,y:-26.3}},{t:this.shape_10,p:{x:-156.4,y:-26.3}},{t:this.shape_134,p:{x:-149.4}},{t:this.shape_140},{t:this.shape_119,p:{x:-131.4}},{t:this.shape_125},{t:this.shape_126,p:{x:-108.7}},{t:this.shape_124},{t:this.shape_128},{t:this.shape_127},{t:this.shape,p:{x:-68.8,y:-26.3}},{t:this.shape_55,p:{x:-64,y:-26.1}},{t:this.shape_133,p:{x:-57}},{t:this.shape_121,p:{x:-43.2}},{t:this.shape_129,p:{x:-34}},{t:this.shape_132},{t:this.shape_73,p:{x:-18,y:-26.1}},{t:this.shape_33,p:{x:-13.1,y:-26.3}},{t:this.shape_84,p:{x:-6.6,y:-23}},{t:this.shape_21,p:{x:0.1,y:-21.6}},{t:this.shape_139},{t:this.shape_11,p:{x:21.3,y:-26.3}},{t:this.shape_120,p:{x:30.5}}]},27).to({state:[{t:this.shape_1},{t:this.shape_149,p:{x:-149.3}},{t:this.shape_61},{t:this.shape_3,p:{x:-136.4,y:-109.6}},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_148,p:{x:-76.4}},{t:this.shape_24},{t:this.shape_65,p:{x:-58.3}},{t:this.shape_141,p:{x:-50.8,y:-105.9}},{t:this.shape_23},{t:this.shape_64},{t:this.shape_16},{t:this.shape_131,p:{x:-11.8}},{t:this.shape_44,p:{x:-7,y:-105.7}},{t:this.shape_123,p:{x:-2.1,y:-105.9}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_22},{t:this.shape_13,p:{x:38}},{t:this.shape_5,p:{x:46.9}},{t:this.shape_138,p:{x:53.6,y:-101.2}},{t:this.shape_29,p:{x:-157.8,y:-85.9}},{t:this.shape_51},{t:this.shape_91},{t:this.shape_26},{t:this.shape_25},{t:this.shape_147},{t:this.shape_42,p:{x:-113.4}},{t:this.shape_32},{t:this.shape_38},{t:this.shape_30},{t:this.shape_36,p:{x:-77}},{t:this.shape_35},{t:this.shape_40,p:{x:-54,y:-84.4}},{t:this.shape_31,p:{x:-44.1}},{t:this.shape_89,p:{x:-39.4,y:-86}},{t:this.shape_98},{t:this.shape_39,p:{x:-27.6}},{t:this.shape_18,p:{x:-16,y:-85.8}},{t:this.shape_118,p:{x:-8.5,y:-86}},{t:this.shape_34,p:{x:0.7}},{t:this.shape_49},{t:this.shape_137,p:{x:20.7}},{t:this.shape_48},{t:this.shape_92,p:{x:37.5,y:-86}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_28,p:{x:65.3}},{t:this.shape_45},{t:this.shape_100,p:{x:77.4,y:-81.3}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_130},{t:this.shape_54},{t:this.shape_81,p:{x:-120.1,y:-66.1}},{t:this.shape_60},{t:this.shape_76},{t:this.shape_4,p:{x:-86.5,y:-66.1}},{t:this.shape_17,p:{x:-73.7,y:-64.5}},{t:this.shape_63},{t:this.shape_66,p:{x:-59.1,y:-66.1}},{t:this.shape_12,p:{x:-54.2,y:-65.9}},{t:this.shape_80},{t:this.shape_117},{t:this.shape_69,p:{x:-28.2,y:-66.1}},{t:this.shape_75,p:{x:-19}},{t:this.shape_122,p:{x:-7.8,y:-66.1}},{t:this.shape_74,p:{x:-1.3}},{t:this.shape_136},{t:this.shape_72},{t:this.shape_68,p:{x:18.1}},{t:this.shape_71},{t:this.shape_59,p:{x:33.1}},{t:this.shape_70},{t:this.shape_79},{t:this.shape_58,p:{x:56.7,y:-66.1}},{t:this.shape_62,p:{x:65.9}},{t:this.shape_78},{t:this.shape_135,p:{x:88.9,y:-62.8}},{t:this.shape_83},{t:this.shape_82},{t:this.shape_87},{t:this.shape_86},{t:this.shape_41,p:{x:-142.2,y:-46.2}},{t:this.shape_88,p:{x:-137.4,y:-46}},{t:this.shape_116},{t:this.shape_27,p:{x:-118.8,y:-46}},{t:this.shape_53,p:{x:-111.3,y:-46.2}},{t:this.shape_106,p:{x:-102.1}},{t:this.shape_115,p:{x:-91,y:-46.2}},{t:this.shape_96,p:{x:-84.5}},{t:this.shape_37,p:{x:-77.3,y:-46}},{t:this.shape_97,p:{x:-72,y:-46}},{t:this.shape_95,p:{x:-65}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_52,p:{x:-43.2,y:-41.5}},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_90,p:{x:-5.7}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_114,p:{x:16.1,y:-46.2}},{t:this.shape_109,p:{x:20.5,y:-46.2}},{t:this.shape_107,p:{x:27,y:-42.9}},{t:this.shape_113},{t:this.shape_112},{t:this.shape_108,p:{x:53.2,y:-46.2}},{t:this.shape_99,p:{x:57.6,y:-46.2}},{t:this.shape_111},{t:this.shape_110},{t:this.shape_67,p:{x:89,y:-46}},{t:this.shape_43,p:{x:96.5,y:-46.2}},{t:this.shape_85,p:{x:105.7}},{t:this.shape_77,p:{x:-160.8,y:-26.3}},{t:this.shape_20,p:{x:-156.4,y:-26.3}},{t:this.shape_146},{t:this.shape_140},{t:this.shape_119,p:{x:-131.4}},{t:this.shape_125},{t:this.shape_145},{t:this.shape_124},{t:this.shape_128},{t:this.shape_127},{t:this.shape_19,p:{x:-68.8,y:-26.3}},{t:this.shape_55,p:{x:-64,y:-26.1}},{t:this.shape_133,p:{x:-57}},{t:this.shape_134,p:{x:-43.2}},{t:this.shape_129,p:{x:-34}},{t:this.shape_132},{t:this.shape_73,p:{x:-18,y:-26.1}},{t:this.shape_50,p:{x:-13.1,y:-26.3}},{t:this.shape_84,p:{x:-6.6,y:-23}},{t:this.shape_21,p:{x:0.1,y:-21.6}},{t:this.shape_139},{t:this.shape_11,p:{x:21.3,y:-26.3}},{t:this.shape_120,p:{x:30.5}},{t:this.shape_144},{t:this.shape_33,p:{x:51.4,y:-26.3}},{t:this.shape_10,p:{x:55.8,y:-26.3}},{t:this.shape_126,p:{x:62.9}},{t:this.shape_143},{t:this.shape,p:{x:78.8,y:-26.3}},{t:this.shape_121,p:{x:85.9}},{t:this.shape_142}]},11).to({state:[{t:this.shape_1},{t:this.shape_149,p:{x:-149.3}},{t:this.shape_61},{t:this.shape_3,p:{x:-136.4,y:-109.6}},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_148,p:{x:-76.4}},{t:this.shape_24},{t:this.shape_65,p:{x:-58.3}},{t:this.shape_141,p:{x:-50.8,y:-105.9}},{t:this.shape_23},{t:this.shape_64},{t:this.shape_16},{t:this.shape_131,p:{x:-11.8}},{t:this.shape_44,p:{x:-7,y:-105.7}},{t:this.shape_123,p:{x:-2.1,y:-105.9}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_22},{t:this.shape_13,p:{x:38}},{t:this.shape_5,p:{x:46.9}},{t:this.shape_138,p:{x:53.6,y:-101.2}},{t:this.shape_29,p:{x:-157.8,y:-85.9}},{t:this.shape_51},{t:this.shape_91},{t:this.shape_26},{t:this.shape_25},{t:this.shape_147},{t:this.shape_42,p:{x:-113.4}},{t:this.shape_32},{t:this.shape_38},{t:this.shape_30},{t:this.shape_36,p:{x:-77}},{t:this.shape_35},{t:this.shape_40,p:{x:-54,y:-84.4}},{t:this.shape_31,p:{x:-44.1}},{t:this.shape_89,p:{x:-39.4,y:-86}},{t:this.shape_98},{t:this.shape_39,p:{x:-27.6}},{t:this.shape_18,p:{x:-16,y:-85.8}},{t:this.shape_118,p:{x:-8.5,y:-86}},{t:this.shape_34,p:{x:0.7}},{t:this.shape_49},{t:this.shape_137,p:{x:20.7}},{t:this.shape_48},{t:this.shape_92,p:{x:37.5,y:-86}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_28,p:{x:65.3}},{t:this.shape_45},{t:this.shape_100,p:{x:77.4,y:-81.3}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_130},{t:this.shape_54},{t:this.shape_81,p:{x:-120.1,y:-66.1}},{t:this.shape_60},{t:this.shape_76},{t:this.shape_4,p:{x:-86.5,y:-66.1}},{t:this.shape_17,p:{x:-73.7,y:-64.5}},{t:this.shape_63},{t:this.shape_66,p:{x:-59.1,y:-66.1}},{t:this.shape_12,p:{x:-54.2,y:-65.9}},{t:this.shape_80},{t:this.shape_117},{t:this.shape_69,p:{x:-28.2,y:-66.1}},{t:this.shape_75,p:{x:-19}},{t:this.shape_122,p:{x:-7.8,y:-66.1}},{t:this.shape_74,p:{x:-1.3}},{t:this.shape_136},{t:this.shape_72},{t:this.shape_68,p:{x:18.1}},{t:this.shape_71},{t:this.shape_59,p:{x:33.1}},{t:this.shape_70},{t:this.shape_79},{t:this.shape_58,p:{x:56.7,y:-66.1}},{t:this.shape_62,p:{x:65.9}},{t:this.shape_78},{t:this.shape_135,p:{x:88.9,y:-62.8}},{t:this.shape_83},{t:this.shape_82},{t:this.shape_87},{t:this.shape_86},{t:this.shape_41,p:{x:-142.2,y:-46.2}},{t:this.shape_88,p:{x:-137.4,y:-46}},{t:this.shape_116},{t:this.shape_27,p:{x:-118.8,y:-46}},{t:this.shape_53,p:{x:-111.3,y:-46.2}},{t:this.shape_106,p:{x:-102.1}},{t:this.shape_115,p:{x:-91,y:-46.2}},{t:this.shape_96,p:{x:-84.5}},{t:this.shape_37,p:{x:-77.3,y:-46}},{t:this.shape_97,p:{x:-72,y:-46}},{t:this.shape_95,p:{x:-65}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_52,p:{x:-43.2,y:-41.5}},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_90,p:{x:-5.7}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_114,p:{x:16.1,y:-46.2}},{t:this.shape_109,p:{x:20.5,y:-46.2}},{t:this.shape_107,p:{x:27,y:-42.9}},{t:this.shape_113},{t:this.shape_112},{t:this.shape_108,p:{x:53.2,y:-46.2}},{t:this.shape_99,p:{x:57.6,y:-46.2}},{t:this.shape_111},{t:this.shape_110},{t:this.shape_67,p:{x:89,y:-46}},{t:this.shape_43,p:{x:96.5,y:-46.2}},{t:this.shape_85,p:{x:105.7}},{t:this.shape_77,p:{x:-160.8,y:-26.3}},{t:this.shape_20,p:{x:-156.4,y:-26.3}},{t:this.shape_146},{t:this.shape_140},{t:this.shape_153},{t:this.shape_125},{t:this.shape_145},{t:this.shape_124},{t:this.shape_128},{t:this.shape_127},{t:this.shape_19,p:{x:-68.8,y:-26.3}},{t:this.shape_55,p:{x:-64,y:-26.1}},{t:this.shape_133,p:{x:-57}},{t:this.shape_134,p:{x:-43.2}},{t:this.shape_129,p:{x:-34}},{t:this.shape_132},{t:this.shape_73,p:{x:-18,y:-26.1}},{t:this.shape_50,p:{x:-13.1,y:-26.3}},{t:this.shape_84,p:{x:-6.6,y:-23}},{t:this.shape_21,p:{x:0.1,y:-21.6}},{t:this.shape_139},{t:this.shape_11,p:{x:21.3,y:-26.3}},{t:this.shape_120,p:{x:30.5}},{t:this.shape_144},{t:this.shape_33,p:{x:51.4,y:-26.3}},{t:this.shape_10,p:{x:55.8,y:-26.3}},{t:this.shape_126,p:{x:62.9}},{t:this.shape_143},{t:this.shape,p:{x:78.8,y:-26.3}},{t:this.shape_121,p:{x:85.9}},{t:this.shape_142},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_119,p:{x:133.9}}]},16).to({state:[{t:this.shape_1},{t:this.shape_149,p:{x:-149.3}},{t:this.shape_61},{t:this.shape_3,p:{x:-136.4,y:-109.6}},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_148,p:{x:-76.4}},{t:this.shape_24},{t:this.shape_65,p:{x:-58.3}},{t:this.shape_158,p:{x:-50.8,y:-105.9}},{t:this.shape_23},{t:this.shape_64},{t:this.shape_16},{t:this.shape_131,p:{x:-11.8}},{t:this.shape_44,p:{x:-7,y:-105.7}},{t:this.shape_123,p:{x:-2.1,y:-105.9}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_22},{t:this.shape_13,p:{x:38}},{t:this.shape_5,p:{x:46.9}},{t:this.shape_138,p:{x:53.6,y:-101.2}},{t:this.shape_29,p:{x:-157.8,y:-85.9}},{t:this.shape_51},{t:this.shape_91},{t:this.shape_26},{t:this.shape_25},{t:this.shape_147},{t:this.shape_42,p:{x:-113.4}},{t:this.shape_32},{t:this.shape_38},{t:this.shape_30},{t:this.shape_36,p:{x:-77}},{t:this.shape_35},{t:this.shape_40,p:{x:-54,y:-84.4}},{t:this.shape_31,p:{x:-44.1}},{t:this.shape_89,p:{x:-39.4,y:-86}},{t:this.shape_98},{t:this.shape_39,p:{x:-27.6}},{t:this.shape_18,p:{x:-16,y:-85.8}},{t:this.shape_141,p:{x:-8.5,y:-86}},{t:this.shape_34,p:{x:0.7}},{t:this.shape_49},{t:this.shape_137,p:{x:20.7}},{t:this.shape_48},{t:this.shape_118,p:{x:37.5,y:-86}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_28,p:{x:65.3}},{t:this.shape_45},{t:this.shape_100,p:{x:77.4,y:-81.3}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_130},{t:this.shape_54},{t:this.shape_92,p:{x:-120.1,y:-66.1}},{t:this.shape_60},{t:this.shape_76},{t:this.shape_4,p:{x:-86.5,y:-66.1}},{t:this.shape_17,p:{x:-73.7,y:-64.5}},{t:this.shape_63},{t:this.shape_66,p:{x:-59.1,y:-66.1}},{t:this.shape_12,p:{x:-54.2,y:-65.9}},{t:this.shape_80},{t:this.shape_117},{t:this.shape_81,p:{x:-28.2,y:-66.1}},{t:this.shape_75,p:{x:-19}},{t:this.shape_122,p:{x:-7.8,y:-66.1}},{t:this.shape_74,p:{x:-1.3}},{t:this.shape_136},{t:this.shape_72},{t:this.shape_68,p:{x:18.1}},{t:this.shape_71},{t:this.shape_59,p:{x:33.1}},{t:this.shape_70},{t:this.shape_79},{t:this.shape_69,p:{x:56.7,y:-66.1}},{t:this.shape_62,p:{x:65.9}},{t:this.shape_78},{t:this.shape_135,p:{x:88.9,y:-62.8}},{t:this.shape_83},{t:this.shape_82},{t:this.shape_87},{t:this.shape_86},{t:this.shape_41,p:{x:-142.2,y:-46.2}},{t:this.shape_88,p:{x:-137.4,y:-46}},{t:this.shape_116},{t:this.shape_27,p:{x:-118.8,y:-46}},{t:this.shape_58,p:{x:-111.3,y:-46.2}},{t:this.shape_106,p:{x:-102.1}},{t:this.shape_115,p:{x:-91,y:-46.2}},{t:this.shape_96,p:{x:-84.5}},{t:this.shape_37,p:{x:-77.3,y:-46}},{t:this.shape_97,p:{x:-72,y:-46}},{t:this.shape_95,p:{x:-65}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_52,p:{x:-43.2,y:-41.5}},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_90,p:{x:-5.7}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_114,p:{x:16.1,y:-46.2}},{t:this.shape_109,p:{x:20.5,y:-46.2}},{t:this.shape_107,p:{x:27,y:-42.9}},{t:this.shape_113},{t:this.shape_112},{t:this.shape_108,p:{x:53.2,y:-46.2}},{t:this.shape_99,p:{x:57.6,y:-46.2}},{t:this.shape_111},{t:this.shape_110},{t:this.shape_67,p:{x:89,y:-46}},{t:this.shape_53,p:{x:96.5,y:-46.2}},{t:this.shape_85,p:{x:105.7}},{t:this.shape_77,p:{x:-160.8,y:-26.3}},{t:this.shape_20,p:{x:-156.4,y:-26.3}},{t:this.shape_146},{t:this.shape_140},{t:this.shape_153},{t:this.shape_125},{t:this.shape_145},{t:this.shape_124},{t:this.shape_128},{t:this.shape_127},{t:this.shape_19,p:{x:-68.8,y:-26.3}},{t:this.shape_55,p:{x:-64,y:-26.1}},{t:this.shape_133,p:{x:-57}},{t:this.shape_134,p:{x:-43.2}},{t:this.shape_129,p:{x:-34}},{t:this.shape_132},{t:this.shape_73,p:{x:-18,y:-26.1}},{t:this.shape_50,p:{x:-13.1,y:-26.3}},{t:this.shape_84,p:{x:-6.6,y:-23}},{t:this.shape_21,p:{x:0.1,y:-21.6}},{t:this.shape_139},{t:this.shape_43,p:{x:21.3,y:-26.3}},{t:this.shape_120,p:{x:30.5}},{t:this.shape_144},{t:this.shape_33,p:{x:51.4,y:-26.3}},{t:this.shape_10,p:{x:55.8,y:-26.3}},{t:this.shape_126,p:{x:62.9}},{t:this.shape_143},{t:this.shape,p:{x:78.8,y:-26.3}},{t:this.shape_121,p:{x:85.9}},{t:this.shape_142},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_119,p:{x:133.9}},{t:this.shape_157,p:{x:-158.8}},{t:this.shape_11,p:{x:-149.3,y:-6.4}},{t:this.shape_156,p:{x:-139.6}},{t:this.shape_155},{t:this.shape_154,p:{x:-118.1}}]},8).to({state:[{t:this.shape_1},{t:this.shape_149,p:{x:-149.3}},{t:this.shape_61},{t:this.shape_3,p:{x:-136.4,y:-109.6}},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_148,p:{x:-76.4}},{t:this.shape_24},{t:this.shape_65,p:{x:-58.3}},{t:this.shape_158,p:{x:-50.8,y:-105.9}},{t:this.shape_23},{t:this.shape_64},{t:this.shape_16},{t:this.shape_131,p:{x:-11.8}},{t:this.shape_44,p:{x:-7,y:-105.7}},{t:this.shape_123,p:{x:-2.1,y:-105.9}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_22},{t:this.shape_13,p:{x:38}},{t:this.shape_5,p:{x:46.9}},{t:this.shape_138,p:{x:53.6,y:-101.2}},{t:this.shape_29,p:{x:-157.8,y:-85.9}},{t:this.shape_51},{t:this.shape_91},{t:this.shape_26},{t:this.shape_25},{t:this.shape_147},{t:this.shape_42,p:{x:-113.4}},{t:this.shape_32},{t:this.shape_38},{t:this.shape_30},{t:this.shape_36,p:{x:-77}},{t:this.shape_35},{t:this.shape_40,p:{x:-54,y:-84.4}},{t:this.shape_31,p:{x:-44.1}},{t:this.shape_89,p:{x:-39.4,y:-86}},{t:this.shape_98},{t:this.shape_39,p:{x:-27.6}},{t:this.shape_18,p:{x:-16,y:-85.8}},{t:this.shape_141,p:{x:-8.5,y:-86}},{t:this.shape_34,p:{x:0.7}},{t:this.shape_49},{t:this.shape_137,p:{x:20.7}},{t:this.shape_48},{t:this.shape_118,p:{x:37.5,y:-86}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_28,p:{x:65.3}},{t:this.shape_45},{t:this.shape_100,p:{x:77.4,y:-81.3}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_130},{t:this.shape_54},{t:this.shape_92,p:{x:-120.1,y:-66.1}},{t:this.shape_60},{t:this.shape_76},{t:this.shape_4,p:{x:-86.5,y:-66.1}},{t:this.shape_17,p:{x:-73.7,y:-64.5}},{t:this.shape_63},{t:this.shape_66,p:{x:-59.1,y:-66.1}},{t:this.shape_12,p:{x:-54.2,y:-65.9}},{t:this.shape_80},{t:this.shape_117},{t:this.shape_81,p:{x:-28.2,y:-66.1}},{t:this.shape_75,p:{x:-19}},{t:this.shape_122,p:{x:-7.8,y:-66.1}},{t:this.shape_74,p:{x:-1.3}},{t:this.shape_136},{t:this.shape_72},{t:this.shape_68,p:{x:18.1}},{t:this.shape_71},{t:this.shape_59,p:{x:33.1}},{t:this.shape_70},{t:this.shape_79},{t:this.shape_69,p:{x:56.7,y:-66.1}},{t:this.shape_62,p:{x:65.9}},{t:this.shape_78},{t:this.shape_161},{t:this.shape_83},{t:this.shape_82},{t:this.shape_87},{t:this.shape_86},{t:this.shape_41,p:{x:-142.2,y:-46.2}},{t:this.shape_88,p:{x:-137.4,y:-46}},{t:this.shape_116},{t:this.shape_27,p:{x:-118.8,y:-46}},{t:this.shape_58,p:{x:-111.3,y:-46.2}},{t:this.shape_106,p:{x:-102.1}},{t:this.shape_115,p:{x:-91,y:-46.2}},{t:this.shape_96,p:{x:-84.5}},{t:this.shape_37,p:{x:-77.3,y:-46}},{t:this.shape_97,p:{x:-72,y:-46}},{t:this.shape_95,p:{x:-65}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_52,p:{x:-43.2,y:-41.5}},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_90,p:{x:-5.7}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_114,p:{x:16.1,y:-46.2}},{t:this.shape_109,p:{x:20.5,y:-46.2}},{t:this.shape_135,p:{x:27,y:-42.9}},{t:this.shape_113},{t:this.shape_112},{t:this.shape_108,p:{x:53.2,y:-46.2}},{t:this.shape_99,p:{x:57.6,y:-46.2}},{t:this.shape_111},{t:this.shape_110},{t:this.shape_67,p:{x:89,y:-46}},{t:this.shape_53,p:{x:96.5,y:-46.2}},{t:this.shape_85,p:{x:105.7}},{t:this.shape_77,p:{x:-160.8,y:-26.3}},{t:this.shape_20,p:{x:-156.4,y:-26.3}},{t:this.shape_146},{t:this.shape_140},{t:this.shape_153},{t:this.shape_125},{t:this.shape_145},{t:this.shape_124},{t:this.shape_128},{t:this.shape_127},{t:this.shape_19,p:{x:-68.8,y:-26.3}},{t:this.shape_55,p:{x:-64,y:-26.1}},{t:this.shape_133,p:{x:-57}},{t:this.shape_134,p:{x:-43.2}},{t:this.shape_129,p:{x:-34}},{t:this.shape_132},{t:this.shape_73,p:{x:-18,y:-26.1}},{t:this.shape_50,p:{x:-13.1,y:-26.3}},{t:this.shape_107,p:{x:-6.6,y:-23}},{t:this.shape_21,p:{x:0.1,y:-21.6}},{t:this.shape_139},{t:this.shape_43,p:{x:21.3,y:-26.3}},{t:this.shape_120,p:{x:30.5}},{t:this.shape_144},{t:this.shape_33,p:{x:51.4,y:-26.3}},{t:this.shape_10,p:{x:55.8,y:-26.3}},{t:this.shape_126,p:{x:62.9}},{t:this.shape_143},{t:this.shape,p:{x:78.8,y:-26.3}},{t:this.shape_121,p:{x:85.9}},{t:this.shape_142},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_119,p:{x:133.9}},{t:this.shape_157,p:{x:-158.8}},{t:this.shape_11,p:{x:-149.3,y:-6.4}},{t:this.shape_160,p:{x:-139.6}},{t:this.shape_155},{t:this.shape_154,p:{x:-118.1}},{t:this.shape_84,p:{x:-104.7,y:-3.1}},{t:this.shape_156,p:{x:-95.3}},{t:this.shape_159}]},19).to({state:[{t:this.shape_1},{t:this.shape_149,p:{x:-149.3}},{t:this.shape_61},{t:this.shape_3,p:{x:-136.4,y:-109.6}},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_148,p:{x:-76.4}},{t:this.shape_24},{t:this.shape_65,p:{x:-58.3}},{t:this.shape_166},{t:this.shape_23},{t:this.shape_64},{t:this.shape_16},{t:this.shape_131,p:{x:-11.8}},{t:this.shape_44,p:{x:-7,y:-105.7}},{t:this.shape_123,p:{x:-2.1,y:-105.9}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_22},{t:this.shape_13,p:{x:38}},{t:this.shape_5,p:{x:46.9}},{t:this.shape_138,p:{x:53.6,y:-101.2}},{t:this.shape_29,p:{x:-157.8,y:-85.9}},{t:this.shape_51},{t:this.shape_91},{t:this.shape_26},{t:this.shape_25},{t:this.shape_147},{t:this.shape_42,p:{x:-113.4}},{t:this.shape_32},{t:this.shape_38},{t:this.shape_30},{t:this.shape_36,p:{x:-77}},{t:this.shape_35},{t:this.shape_40,p:{x:-54,y:-84.4}},{t:this.shape_31,p:{x:-44.1}},{t:this.shape_89,p:{x:-39.4,y:-86}},{t:this.shape_98},{t:this.shape_39,p:{x:-27.6}},{t:this.shape_18,p:{x:-16,y:-85.8}},{t:this.shape_158,p:{x:-8.5,y:-86}},{t:this.shape_34,p:{x:0.7}},{t:this.shape_49},{t:this.shape_137,p:{x:20.7}},{t:this.shape_48},{t:this.shape_141,p:{x:37.5,y:-86}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_28,p:{x:65.3}},{t:this.shape_45},{t:this.shape_100,p:{x:77.4,y:-81.3}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_130},{t:this.shape_54},{t:this.shape_118,p:{x:-120.1,y:-66.1}},{t:this.shape_60},{t:this.shape_76},{t:this.shape_4,p:{x:-86.5,y:-66.1}},{t:this.shape_17,p:{x:-73.7,y:-64.5}},{t:this.shape_63},{t:this.shape_66,p:{x:-59.1,y:-66.1}},{t:this.shape_12,p:{x:-54.2,y:-65.9}},{t:this.shape_80},{t:this.shape_117},{t:this.shape_92,p:{x:-28.2,y:-66.1}},{t:this.shape_75,p:{x:-19}},{t:this.shape_122,p:{x:-7.8,y:-66.1}},{t:this.shape_74,p:{x:-1.3}},{t:this.shape_136},{t:this.shape_72},{t:this.shape_68,p:{x:18.1}},{t:this.shape_71},{t:this.shape_59,p:{x:33.1}},{t:this.shape_70},{t:this.shape_79},{t:this.shape_81,p:{x:56.7,y:-66.1}},{t:this.shape_62,p:{x:65.9}},{t:this.shape_78},{t:this.shape_161},{t:this.shape_83},{t:this.shape_82},{t:this.shape_87},{t:this.shape_86},{t:this.shape_41,p:{x:-142.2,y:-46.2}},{t:this.shape_88,p:{x:-137.4,y:-46}},{t:this.shape_116},{t:this.shape_27,p:{x:-118.8,y:-46}},{t:this.shape_69,p:{x:-111.3,y:-46.2}},{t:this.shape_106,p:{x:-102.1}},{t:this.shape_115,p:{x:-91,y:-46.2}},{t:this.shape_96,p:{x:-84.5}},{t:this.shape_37,p:{x:-77.3,y:-46}},{t:this.shape_97,p:{x:-72,y:-46}},{t:this.shape_95,p:{x:-65}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_52,p:{x:-43.2,y:-41.5}},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_90,p:{x:-5.7}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_114,p:{x:16.1,y:-46.2}},{t:this.shape_109,p:{x:20.5,y:-46.2}},{t:this.shape_135,p:{x:27,y:-42.9}},{t:this.shape_113},{t:this.shape_112},{t:this.shape_108,p:{x:53.2,y:-46.2}},{t:this.shape_99,p:{x:57.6,y:-46.2}},{t:this.shape_111},{t:this.shape_110},{t:this.shape_67,p:{x:89,y:-46}},{t:this.shape_58,p:{x:96.5,y:-46.2}},{t:this.shape_85,p:{x:105.7}},{t:this.shape_77,p:{x:-160.8,y:-26.3}},{t:this.shape_20,p:{x:-156.4,y:-26.3}},{t:this.shape_146},{t:this.shape_140},{t:this.shape_153},{t:this.shape_125},{t:this.shape_145},{t:this.shape_124},{t:this.shape_128},{t:this.shape_127},{t:this.shape_19,p:{x:-68.8,y:-26.3}},{t:this.shape_55,p:{x:-64,y:-26.1}},{t:this.shape_133,p:{x:-57}},{t:this.shape_134,p:{x:-43.2}},{t:this.shape_129,p:{x:-34}},{t:this.shape_132},{t:this.shape_73,p:{x:-18,y:-26.1}},{t:this.shape_50,p:{x:-13.1,y:-26.3}},{t:this.shape_107,p:{x:-6.6,y:-23}},{t:this.shape_21,p:{x:0.1,y:-21.6}},{t:this.shape_139},{t:this.shape_53,p:{x:21.3,y:-26.3}},{t:this.shape_120,p:{x:30.5}},{t:this.shape_144},{t:this.shape_33,p:{x:51.4,y:-26.3}},{t:this.shape_10,p:{x:55.8,y:-26.3}},{t:this.shape_126,p:{x:62.9}},{t:this.shape_143},{t:this.shape,p:{x:78.8,y:-26.3}},{t:this.shape_121,p:{x:85.9}},{t:this.shape_142},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_119,p:{x:133.9}},{t:this.shape_157,p:{x:-158.8}},{t:this.shape_43,p:{x:-149.3,y:-6.4}},{t:this.shape_160,p:{x:-139.6}},{t:this.shape_155},{t:this.shape_154,p:{x:-118.1}},{t:this.shape_84,p:{x:-104.7,y:-3.1}},{t:this.shape_156,p:{x:-95.3}},{t:this.shape_159},{t:this.shape_165},{t:this.shape_11,p:{x:-59,y:-6.4}},{t:this.shape_164,p:{x:-49.8}},{t:this.shape_163},{t:this.shape_162,p:{x:-34.8}}]},5).to({state:[{t:this.shape_1},{t:this.shape_149,p:{x:-149.3}},{t:this.shape_61},{t:this.shape_3,p:{x:-136.4,y:-109.6}},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_148,p:{x:-76.4}},{t:this.shape_24},{t:this.shape_168},{t:this.shape_166},{t:this.shape_23},{t:this.shape_64},{t:this.shape_16},{t:this.shape_131,p:{x:-11.8}},{t:this.shape_65,p:{x:-7}},{t:this.shape_123,p:{x:-2.1,y:-105.9}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_22},{t:this.shape_13,p:{x:38}},{t:this.shape_5,p:{x:46.9}},{t:this.shape_138,p:{x:53.6,y:-101.2}},{t:this.shape_29,p:{x:-157.8,y:-85.9}},{t:this.shape_51},{t:this.shape_91},{t:this.shape_26},{t:this.shape_25},{t:this.shape_147},{t:this.shape_42,p:{x:-113.4}},{t:this.shape_32},{t:this.shape_38},{t:this.shape_30},{t:this.shape_36,p:{x:-77}},{t:this.shape_35},{t:this.shape_40,p:{x:-54,y:-84.4}},{t:this.shape_31,p:{x:-44.1}},{t:this.shape_89,p:{x:-39.4,y:-86}},{t:this.shape_98},{t:this.shape_39,p:{x:-27.6}},{t:this.shape_44,p:{x:-16,y:-85.8}},{t:this.shape_158,p:{x:-8.5,y:-86}},{t:this.shape_34,p:{x:0.7}},{t:this.shape_49},{t:this.shape_137,p:{x:20.7}},{t:this.shape_48},{t:this.shape_141,p:{x:37.5,y:-86}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_28,p:{x:65.3}},{t:this.shape_45},{t:this.shape_100,p:{x:77.4,y:-81.3}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_130},{t:this.shape_54},{t:this.shape_118,p:{x:-120.1,y:-66.1}},{t:this.shape_60},{t:this.shape_76},{t:this.shape_4,p:{x:-86.5,y:-66.1}},{t:this.shape_17,p:{x:-73.7,y:-64.5}},{t:this.shape_63},{t:this.shape_66,p:{x:-59.1,y:-66.1}},{t:this.shape_18,p:{x:-54.2,y:-65.9}},{t:this.shape_80},{t:this.shape_117},{t:this.shape_92,p:{x:-28.2,y:-66.1}},{t:this.shape_75,p:{x:-19}},{t:this.shape_122,p:{x:-7.8,y:-66.1}},{t:this.shape_74,p:{x:-1.3}},{t:this.shape_136},{t:this.shape_72},{t:this.shape_68,p:{x:18.1}},{t:this.shape_71},{t:this.shape_59,p:{x:33.1}},{t:this.shape_70},{t:this.shape_79},{t:this.shape_81,p:{x:56.7,y:-66.1}},{t:this.shape_62,p:{x:65.9}},{t:this.shape_78},{t:this.shape_161},{t:this.shape_83},{t:this.shape_82},{t:this.shape_87},{t:this.shape_86},{t:this.shape_41,p:{x:-142.2,y:-46.2}},{t:this.shape_88,p:{x:-137.4,y:-46}},{t:this.shape_116},{t:this.shape_27,p:{x:-118.8,y:-46}},{t:this.shape_69,p:{x:-111.3,y:-46.2}},{t:this.shape_106,p:{x:-102.1}},{t:this.shape_115,p:{x:-91,y:-46.2}},{t:this.shape_96,p:{x:-84.5}},{t:this.shape_37,p:{x:-77.3,y:-46}},{t:this.shape_97,p:{x:-72,y:-46}},{t:this.shape_95,p:{x:-65}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_52,p:{x:-43.2,y:-41.5}},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_90,p:{x:-5.7}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_114,p:{x:16.1,y:-46.2}},{t:this.shape_109,p:{x:20.5,y:-46.2}},{t:this.shape_135,p:{x:27,y:-42.9}},{t:this.shape_113},{t:this.shape_112},{t:this.shape_108,p:{x:53.2,y:-46.2}},{t:this.shape_99,p:{x:57.6,y:-46.2}},{t:this.shape_111},{t:this.shape_110},{t:this.shape_67,p:{x:89,y:-46}},{t:this.shape_58,p:{x:96.5,y:-46.2}},{t:this.shape_85,p:{x:105.7}},{t:this.shape_77,p:{x:-160.8,y:-26.3}},{t:this.shape_20,p:{x:-156.4,y:-26.3}},{t:this.shape_146},{t:this.shape_140},{t:this.shape_153},{t:this.shape_125},{t:this.shape_145},{t:this.shape_124},{t:this.shape_128},{t:this.shape_127},{t:this.shape_19,p:{x:-68.8,y:-26.3}},{t:this.shape_55,p:{x:-64,y:-26.1}},{t:this.shape_133,p:{x:-57}},{t:this.shape_134,p:{x:-43.2}},{t:this.shape_129,p:{x:-34}},{t:this.shape_132},{t:this.shape_73,p:{x:-18,y:-26.1}},{t:this.shape_50,p:{x:-13.1,y:-26.3}},{t:this.shape_107,p:{x:-6.6,y:-23}},{t:this.shape_21,p:{x:0.1,y:-21.6}},{t:this.shape_139},{t:this.shape_53,p:{x:21.3,y:-26.3}},{t:this.shape_120,p:{x:30.5}},{t:this.shape_144},{t:this.shape_33,p:{x:51.4,y:-26.3}},{t:this.shape_10,p:{x:55.8,y:-26.3}},{t:this.shape_126,p:{x:62.9}},{t:this.shape_143},{t:this.shape,p:{x:78.8,y:-26.3}},{t:this.shape_121,p:{x:85.9}},{t:this.shape_142},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_119,p:{x:133.9}},{t:this.shape_157,p:{x:-158.8}},{t:this.shape_43,p:{x:-149.3,y:-6.4}},{t:this.shape_167},{t:this.shape_155},{t:this.shape_154,p:{x:-118.1}},{t:this.shape_84,p:{x:-104.7,y:-3.1}},{t:this.shape_160,p:{x:-95.3}},{t:this.shape_159},{t:this.shape_165},{t:this.shape_11,p:{x:-59,y:-6.4}},{t:this.shape_164,p:{x:-49.8}},{t:this.shape_163},{t:this.shape_162,p:{x:-34.8}},{t:this.shape_12,p:{x:-23.2,y:-6.2}},{t:this.shape_156,p:{x:-15.7}}]},6).to({state:[{t:this.shape_1},{t:this.shape_174},{t:this.shape_61},{t:this.shape_3,p:{x:-136.4,y:-109.6}},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_149,p:{x:-76.4}},{t:this.shape_24},{t:this.shape_168},{t:this.shape_166},{t:this.shape_23},{t:this.shape_64},{t:this.shape_16},{t:this.shape_148,p:{x:-11.8}},{t:this.shape_65,p:{x:-7}},{t:this.shape_131,p:{x:-2.1}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_22},{t:this.shape_13,p:{x:38}},{t:this.shape_5,p:{x:46.9}},{t:this.shape_173},{t:this.shape_29,p:{x:-157.8,y:-85.9}},{t:this.shape_51},{t:this.shape_91},{t:this.shape_26},{t:this.shape_25},{t:this.shape_147},{t:this.shape_42,p:{x:-113.4}},{t:this.shape_32},{t:this.shape_38},{t:this.shape_30},{t:this.shape_36,p:{x:-77}},{t:this.shape_35},{t:this.shape_40,p:{x:-54,y:-84.4}},{t:this.shape_31,p:{x:-44.1}},{t:this.shape_123,p:{x:-39.4,y:-86}},{t:this.shape_98},{t:this.shape_39,p:{x:-27.6}},{t:this.shape_44,p:{x:-16,y:-85.8}},{t:this.shape_158,p:{x:-8.5,y:-86}},{t:this.shape_34,p:{x:0.7}},{t:this.shape_49},{t:this.shape_137,p:{x:20.7}},{t:this.shape_48},{t:this.shape_141,p:{x:37.5,y:-86}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_28,p:{x:65.3}},{t:this.shape_45},{t:this.shape_138,p:{x:77.4,y:-81.3}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_130},{t:this.shape_54},{t:this.shape_118,p:{x:-120.1,y:-66.1}},{t:this.shape_60},{t:this.shape_76},{t:this.shape_4,p:{x:-86.5,y:-66.1}},{t:this.shape_17,p:{x:-73.7,y:-64.5}},{t:this.shape_63},{t:this.shape_89,p:{x:-59.1,y:-66.1}},{t:this.shape_18,p:{x:-54.2,y:-65.9}},{t:this.shape_80},{t:this.shape_117},{t:this.shape_92,p:{x:-28.2,y:-66.1}},{t:this.shape_75,p:{x:-19}},{t:this.shape_122,p:{x:-7.8,y:-66.1}},{t:this.shape_74,p:{x:-1.3}},{t:this.shape_136},{t:this.shape_72},{t:this.shape_68,p:{x:18.1}},{t:this.shape_71},{t:this.shape_59,p:{x:33.1}},{t:this.shape_70},{t:this.shape_79},{t:this.shape_81,p:{x:56.7,y:-66.1}},{t:this.shape_62,p:{x:65.9}},{t:this.shape_78},{t:this.shape_161},{t:this.shape_83},{t:this.shape_82},{t:this.shape_87},{t:this.shape_86},{t:this.shape_66,p:{x:-142.2,y:-46.2}},{t:this.shape_88,p:{x:-137.4,y:-46}},{t:this.shape_116},{t:this.shape_27,p:{x:-118.8,y:-46}},{t:this.shape_69,p:{x:-111.3,y:-46.2}},{t:this.shape_106,p:{x:-102.1}},{t:this.shape_115,p:{x:-91,y:-46.2}},{t:this.shape_96,p:{x:-84.5}},{t:this.shape_37,p:{x:-77.3,y:-46}},{t:this.shape_97,p:{x:-72,y:-46}},{t:this.shape_95,p:{x:-65}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_100,p:{x:-43.2,y:-41.5}},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_90,p:{x:-5.7}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_114,p:{x:16.1,y:-46.2}},{t:this.shape_109,p:{x:20.5,y:-46.2}},{t:this.shape_135,p:{x:27,y:-42.9}},{t:this.shape_113},{t:this.shape_112},{t:this.shape_108,p:{x:53.2,y:-46.2}},{t:this.shape_99,p:{x:57.6,y:-46.2}},{t:this.shape_111},{t:this.shape_110},{t:this.shape_67,p:{x:89,y:-46}},{t:this.shape_58,p:{x:96.5,y:-46.2}},{t:this.shape_85,p:{x:105.7}},{t:this.shape_77,p:{x:-160.8,y:-26.3}},{t:this.shape_41,p:{x:-156.4,y:-26.3}},{t:this.shape_146},{t:this.shape_140},{t:this.shape_153},{t:this.shape_125},{t:this.shape_145},{t:this.shape_124},{t:this.shape_128},{t:this.shape_127},{t:this.shape_20,p:{x:-68.8,y:-26.3}},{t:this.shape_55,p:{x:-64,y:-26.1}},{t:this.shape_133,p:{x:-57}},{t:this.shape_134,p:{x:-43.2}},{t:this.shape_129,p:{x:-34}},{t:this.shape_132},{t:this.shape_73,p:{x:-18,y:-26.1}},{t:this.shape_50,p:{x:-13.1,y:-26.3}},{t:this.shape_107,p:{x:-6.6,y:-23}},{t:this.shape_52,p:{x:0.1,y:-21.6}},{t:this.shape_139},{t:this.shape_53,p:{x:21.3,y:-26.3}},{t:this.shape_120,p:{x:30.5}},{t:this.shape_144},{t:this.shape_33,p:{x:51.4,y:-26.3}},{t:this.shape_19,p:{x:55.8,y:-26.3}},{t:this.shape_126,p:{x:62.9}},{t:this.shape_143},{t:this.shape_10,p:{x:78.8,y:-26.3}},{t:this.shape_121,p:{x:85.9}},{t:this.shape_142},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_119,p:{x:133.9}},{t:this.shape_157,p:{x:-158.8}},{t:this.shape_43,p:{x:-149.3,y:-6.4}},{t:this.shape_167},{t:this.shape_155},{t:this.shape_154,p:{x:-118.1}},{t:this.shape_84,p:{x:-104.7,y:-3.1}},{t:this.shape_160,p:{x:-95.3}},{t:this.shape_159},{t:this.shape_165},{t:this.shape_11,p:{x:-59,y:-6.4}},{t:this.shape_172,p:{x:-49.8}},{t:this.shape_163},{t:this.shape_164,p:{x:-34.8}},{t:this.shape_12,p:{x:-23.2,y:-6.2}},{t:this.shape_156,p:{x:-15.7}},{t:this.shape_171},{t:this.shape_162,p:{x:7.7}},{t:this.shape_170},{t:this.shape,p:{x:24.2,y:-6.4}},{t:this.shape_169},{t:this.shape_21,p:{x:38.3,y:-1.7}}]},8).to({state:[{t:this.shape_1},{t:this.shape_174},{t:this.shape_61},{t:this.shape_179},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_149,p:{x:-76.4}},{t:this.shape_24},{t:this.shape_168},{t:this.shape_166},{t:this.shape_23},{t:this.shape_64},{t:this.shape_16},{t:this.shape_148,p:{x:-11.8}},{t:this.shape_65,p:{x:-7}},{t:this.shape_131,p:{x:-2.1}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_22},{t:this.shape_13,p:{x:38}},{t:this.shape_5,p:{x:46.9}},{t:this.shape_173},{t:this.shape_178},{t:this.shape_51},{t:this.shape_91},{t:this.shape_26},{t:this.shape_25},{t:this.shape_147},{t:this.shape_42,p:{x:-113.4}},{t:this.shape_32},{t:this.shape_38},{t:this.shape_30},{t:this.shape_36,p:{x:-77}},{t:this.shape_35},{t:this.shape_40,p:{x:-54,y:-84.4}},{t:this.shape_31,p:{x:-44.1}},{t:this.shape_123,p:{x:-39.4,y:-86}},{t:this.shape_98},{t:this.shape_39,p:{x:-27.6}},{t:this.shape_44,p:{x:-16,y:-85.8}},{t:this.shape_158,p:{x:-8.5,y:-86}},{t:this.shape_34,p:{x:0.7}},{t:this.shape_49},{t:this.shape_137,p:{x:20.7}},{t:this.shape_48},{t:this.shape_141,p:{x:37.5,y:-86}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_28,p:{x:65.3}},{t:this.shape_45},{t:this.shape_138,p:{x:77.4,y:-81.3}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_130},{t:this.shape_54},{t:this.shape_118,p:{x:-120.1,y:-66.1}},{t:this.shape_60},{t:this.shape_76},{t:this.shape_4,p:{x:-86.5,y:-66.1}},{t:this.shape_17,p:{x:-73.7,y:-64.5}},{t:this.shape_63},{t:this.shape_89,p:{x:-59.1,y:-66.1}},{t:this.shape_18,p:{x:-54.2,y:-65.9}},{t:this.shape_80},{t:this.shape_117},{t:this.shape_92,p:{x:-28.2,y:-66.1}},{t:this.shape_75,p:{x:-19}},{t:this.shape_122,p:{x:-7.8,y:-66.1}},{t:this.shape_74,p:{x:-1.3}},{t:this.shape_136},{t:this.shape_72},{t:this.shape_68,p:{x:18.1}},{t:this.shape_71},{t:this.shape_59,p:{x:33.1}},{t:this.shape_70},{t:this.shape_79},{t:this.shape_81,p:{x:56.7,y:-66.1}},{t:this.shape_62,p:{x:65.9}},{t:this.shape_78},{t:this.shape_161},{t:this.shape_83},{t:this.shape_82},{t:this.shape_87},{t:this.shape_86},{t:this.shape_66,p:{x:-142.2,y:-46.2}},{t:this.shape_88,p:{x:-137.4,y:-46}},{t:this.shape_116},{t:this.shape_27,p:{x:-118.8,y:-46}},{t:this.shape_69,p:{x:-111.3,y:-46.2}},{t:this.shape_106,p:{x:-102.1}},{t:this.shape_115,p:{x:-91,y:-46.2}},{t:this.shape_96,p:{x:-84.5}},{t:this.shape_37,p:{x:-77.3,y:-46}},{t:this.shape_97,p:{x:-72,y:-46}},{t:this.shape_95,p:{x:-65}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_100,p:{x:-43.2,y:-41.5}},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_90,p:{x:-5.7}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_114,p:{x:16.1,y:-46.2}},{t:this.shape_109,p:{x:20.5,y:-46.2}},{t:this.shape_135,p:{x:27,y:-42.9}},{t:this.shape_113},{t:this.shape_112},{t:this.shape_108,p:{x:53.2,y:-46.2}},{t:this.shape_99,p:{x:57.6,y:-46.2}},{t:this.shape_111},{t:this.shape_110},{t:this.shape_67,p:{x:89,y:-46}},{t:this.shape_58,p:{x:96.5,y:-46.2}},{t:this.shape_85,p:{x:105.7}},{t:this.shape_77,p:{x:-160.8,y:-26.3}},{t:this.shape_41,p:{x:-156.4,y:-26.3}},{t:this.shape_146},{t:this.shape_140},{t:this.shape_153},{t:this.shape_125},{t:this.shape_145},{t:this.shape_124},{t:this.shape_128},{t:this.shape_127},{t:this.shape_20,p:{x:-68.8,y:-26.3}},{t:this.shape_55,p:{x:-64,y:-26.1}},{t:this.shape_133,p:{x:-57}},{t:this.shape_134,p:{x:-43.2}},{t:this.shape_129,p:{x:-34}},{t:this.shape_132},{t:this.shape_73,p:{x:-18,y:-26.1}},{t:this.shape_50,p:{x:-13.1,y:-26.3}},{t:this.shape_107,p:{x:-6.6,y:-23}},{t:this.shape_52,p:{x:0.1,y:-21.6}},{t:this.shape_139},{t:this.shape_53,p:{x:21.3,y:-26.3}},{t:this.shape_120,p:{x:30.5}},{t:this.shape_144},{t:this.shape_33,p:{x:51.4,y:-26.3}},{t:this.shape_19,p:{x:55.8,y:-26.3}},{t:this.shape_126,p:{x:62.9}},{t:this.shape_143},{t:this.shape_10,p:{x:78.8,y:-26.3}},{t:this.shape_121,p:{x:85.9}},{t:this.shape_142},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_119,p:{x:133.9}},{t:this.shape_177,p:{x:-158.8}},{t:this.shape_43,p:{x:-149.3,y:-6.4}},{t:this.shape_167},{t:this.shape_155},{t:this.shape_157,p:{x:-118.1}},{t:this.shape_84,p:{x:-104.7,y:-3.1}},{t:this.shape_160,p:{x:-95.3}},{t:this.shape_159},{t:this.shape_165},{t:this.shape_11,p:{x:-59,y:-6.4}},{t:this.shape_176},{t:this.shape_163},{t:this.shape_172,p:{x:-34.8}},{t:this.shape_12,p:{x:-23.2,y:-6.2}},{t:this.shape_156,p:{x:-15.7}},{t:this.shape_171},{t:this.shape_164,p:{x:7.7}},{t:this.shape_170},{t:this.shape,p:{x:24.2,y:-6.4}},{t:this.shape_169},{t:this.shape_21,p:{x:38.3,y:-1.7}},{t:this.shape_29,p:{x:50.1,y:-6.3}},{t:this.shape_162,p:{x:59}},{t:this.shape_175},{t:this.shape_3,p:{x:70.7,y:-10.1}},{t:this.shape_154,p:{x:76.8}}]},21).to({state:[{t:this.shape_1},{t:this.shape_174},{t:this.shape_61},{t:this.shape_179},{t:this.shape_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_149,p:{x:-76.4}},{t:this.shape_24},{t:this.shape_168},{t:this.shape_166},{t:this.shape_23},{t:this.shape_64},{t:this.shape_16},{t:this.shape_148,p:{x:-11.8}},{t:this.shape_65,p:{x:-7}},{t:this.shape_131,p:{x:-2.1}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_22},{t:this.shape_13,p:{x:38}},{t:this.shape_5,p:{x:46.9}},{t:this.shape_173},{t:this.shape_178},{t:this.shape_51},{t:this.shape_91},{t:this.shape_26},{t:this.shape_25},{t:this.shape_147},{t:this.shape_42,p:{x:-113.4}},{t:this.shape_32},{t:this.shape_38},{t:this.shape_30},{t:this.shape_36,p:{x:-77}},{t:this.shape_35},{t:this.shape_40,p:{x:-54,y:-84.4}},{t:this.shape_31,p:{x:-44.1}},{t:this.shape_123,p:{x:-39.4,y:-86}},{t:this.shape_98},{t:this.shape_39,p:{x:-27.6}},{t:this.shape_44,p:{x:-16,y:-85.8}},{t:this.shape_158,p:{x:-8.5,y:-86}},{t:this.shape_34,p:{x:0.7}},{t:this.shape_49},{t:this.shape_137,p:{x:20.7}},{t:this.shape_48},{t:this.shape_141,p:{x:37.5,y:-86}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_28,p:{x:65.3}},{t:this.shape_45},{t:this.shape_138,p:{x:77.4,y:-81.3}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_130},{t:this.shape_54},{t:this.shape_118,p:{x:-120.1,y:-66.1}},{t:this.shape_60},{t:this.shape_76},{t:this.shape_4,p:{x:-86.5,y:-66.1}},{t:this.shape_17,p:{x:-73.7,y:-64.5}},{t:this.shape_63},{t:this.shape_89,p:{x:-59.1,y:-66.1}},{t:this.shape_18,p:{x:-54.2,y:-65.9}},{t:this.shape_80},{t:this.shape_117},{t:this.shape_92,p:{x:-28.2,y:-66.1}},{t:this.shape_75,p:{x:-19}},{t:this.shape_122,p:{x:-7.8,y:-66.1}},{t:this.shape_74,p:{x:-1.3}},{t:this.shape_136},{t:this.shape_72},{t:this.shape_68,p:{x:18.1}},{t:this.shape_71},{t:this.shape_59,p:{x:33.1}},{t:this.shape_70},{t:this.shape_79},{t:this.shape_81,p:{x:56.7,y:-66.1}},{t:this.shape_62,p:{x:65.9}},{t:this.shape_78},{t:this.shape_161},{t:this.shape_83},{t:this.shape_82},{t:this.shape_87},{t:this.shape_86},{t:this.shape_66,p:{x:-142.2,y:-46.2}},{t:this.shape_88,p:{x:-137.4,y:-46}},{t:this.shape_116},{t:this.shape_27,p:{x:-118.8,y:-46}},{t:this.shape_69,p:{x:-111.3,y:-46.2}},{t:this.shape_106,p:{x:-102.1}},{t:this.shape_115,p:{x:-91,y:-46.2}},{t:this.shape_96,p:{x:-84.5}},{t:this.shape_37,p:{x:-77.3,y:-46}},{t:this.shape_97,p:{x:-72,y:-46}},{t:this.shape_95,p:{x:-65}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_100,p:{x:-43.2,y:-41.5}},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_90,p:{x:-5.7}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_114,p:{x:16.1,y:-46.2}},{t:this.shape_109,p:{x:20.5,y:-46.2}},{t:this.shape_135,p:{x:27,y:-42.9}},{t:this.shape_113},{t:this.shape_112},{t:this.shape_108,p:{x:53.2,y:-46.2}},{t:this.shape_99,p:{x:57.6,y:-46.2}},{t:this.shape_111},{t:this.shape_110},{t:this.shape_67,p:{x:89,y:-46}},{t:this.shape_58,p:{x:96.5,y:-46.2}},{t:this.shape_85,p:{x:105.7}},{t:this.shape_77,p:{x:-160.8,y:-26.3}},{t:this.shape_41,p:{x:-156.4,y:-26.3}},{t:this.shape_146},{t:this.shape_140},{t:this.shape_153},{t:this.shape_125},{t:this.shape_145},{t:this.shape_124},{t:this.shape_128},{t:this.shape_127},{t:this.shape_20,p:{x:-68.8,y:-26.3}},{t:this.shape_55,p:{x:-64,y:-26.1}},{t:this.shape_133,p:{x:-57}},{t:this.shape_134,p:{x:-43.2}},{t:this.shape_129,p:{x:-34}},{t:this.shape_132},{t:this.shape_73,p:{x:-18,y:-26.1}},{t:this.shape_50,p:{x:-13.1,y:-26.3}},{t:this.shape_107,p:{x:-6.6,y:-23}},{t:this.shape_52,p:{x:0.1,y:-21.6}},{t:this.shape_139},{t:this.shape_53,p:{x:21.3,y:-26.3}},{t:this.shape_120,p:{x:30.5}},{t:this.shape_144},{t:this.shape_33,p:{x:51.4,y:-26.3}},{t:this.shape_19,p:{x:55.8,y:-26.3}},{t:this.shape_126,p:{x:62.9}},{t:this.shape_143},{t:this.shape_10,p:{x:78.8,y:-26.3}},{t:this.shape_121,p:{x:85.9}},{t:this.shape_142},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_119,p:{x:133.9}},{t:this.shape_187},{t:this.shape_43,p:{x:-149.3,y:-6.4}},{t:this.shape_167},{t:this.shape_155},{t:this.shape_177,p:{x:-118.1}},{t:this.shape_84,p:{x:-104.7,y:-3.1}},{t:this.shape_160,p:{x:-95.3}},{t:this.shape_159},{t:this.shape_165},{t:this.shape_11,p:{x:-59,y:-6.4}},{t:this.shape_176},{t:this.shape_163},{t:this.shape_172,p:{x:-34.8}},{t:this.shape_12,p:{x:-23.2,y:-6.2}},{t:this.shape_156,p:{x:-15.7}},{t:this.shape_171},{t:this.shape_164,p:{x:7.7}},{t:this.shape_170},{t:this.shape,p:{x:24.2,y:-6.4}},{t:this.shape_169},{t:this.shape_21,p:{x:38.3,y:-1.7}},{t:this.shape_29,p:{x:50.1,y:-6.3}},{t:this.shape_162,p:{x:59}},{t:this.shape_175},{t:this.shape_3,p:{x:70.7,y:-10.1}},{t:this.shape_157,p:{x:76.8}},{t:this.shape_154,p:{x:90.1}},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180}]},17).to({state:[]},16).wait(9));

	// Object
	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("rgba(62,146,247,0.098)").s().p("AAkAeQgLgogbgjQgcgjgYgQQgYgQgiAAQBqgRAvAwQAxAvANBQQACAHAIABQgtAWgYApQAEgtgMgqg");
	this.shape_188.setTransform(-102.7,-126.9,3.819,3.864,0,18.8,-160.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("rgba(62,146,247,0.098)").s().p("AvkKnQhchnguANIAGAKIiUgKQhNAdhtg8Qj6gqhYlHQhZlHB3iSQAyg9A3g/IAtgyIgTgXQgVgegPgkQguhzAph/QAfhiBwgdQBvgdB+A5QhgAYg0AhQilCTCLD8QhsCRAcBmQAdBmBRCAQBRCBCtBrQCuBrDGAQIholXQCwChDnBeQDlBfD1AOQEmAOFihsQDahDGTiwQg1Csh0BnQB4AEB2gsQB3gsBVhUQB6h3gsksQFjB8iBEvQiCEvj6A7QivBnjOgXQilgTjMhpQAMgJgUgWQgTgWgGgKQgFgKADgJQAVgSjeBZQjEBEimAMQilALiYg/QiYhAhjACQhiADgWgZQgVgZgSAcQivAiDpG0Qk5iQhbhog");
	this.shape_189.setTransform(-17.4,-27.1,1,1.054);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#3086DB").s().p("Ag7B5QgVgIgOgOQgIgIgHgKIgLgLQgMgPgEgWQgFgWAHgdQAHgdAUgaQAXgdAggOQAlgRAoAIQASADATAIIASAIIAIAFIAKAHQATAOALAUQANAXgBAZQAAAUgKAWQgHARgOARQgWAcghARQgdAQgeADIgOABQgVAAgTgIgAgjhGQgVAHgTASQgRARgJAVQgIASAAATQAAAQAHAMQADAFAFAGIAPAIQAQAGANAAQARABATgGQAQgFAWgPQAWgPAMgTQAPgUABgSQAAgKgDgGQgEgIgIgIIgEgDIgSgLQgMgHgMgDQgMgDgMAAQgMAAgMADg");
	this.shape_190.setTransform(114.9,-178.8,0.631,0.634,0,-3,-3.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#3086DB").s().p("Ag8B8QgVgEgSgHQgJgDgEgDIgKgFIgHgFQgGgEAEgGQADgDADAAIABAAIAEABQgHgHgFgIQgOgWAEgiQAEgfASgdQAIgPAOgOIARgPIACgCIABgBIAagPIASgIQAVgHATgCQAvgEAnAYQALAIAHAHQAKAJAGAKQAOAVADAZIABADIAAACIAAACIgBASQgBAMgFALQgHAUgPASQgNAOgQANQgOAKgRAIQgdAOggAEQgNACgNAAQgOAAgOgCgAgRhBIgOAEIgYANIgLAIQgKAIgJAKQgQAUgGAWQgGAVAGARQAFANAOAHQAHAEAMADIAIABIACAAQAWgCAUgHQAIgCAOgHQANgGAJgHQAXgOAPgUQAIgMACgIIACgJIABgBIAAgHIgBgBQgCgUgTgPQgTgPgdgBQgMAAgNADg");
	this.shape_191.setTransform(-40,-190.2,1.025,1.031,0,-3,-3.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#3086DB").s().p("AghB3QgbgIgUgQIgKgKIgBABQgEADgDgDIgCgBIgGgEQgKgIgIgNQgKgQgDgXQgEgdAIgaQAKgiAcgYQAOgMATgIQAMgFAHgBIANgEIACAAIAEgBQAWgCAQABQAXACATAIQArARAXAoQAWAogFArQgGAvgjAbIgJAHIgJAEQgIAFgJADQgRAFgSABIgNABQgZAAgXgHgAgTg6IgIABIgNADQgKADgJAGQgRALgLATQgJAQgDASQAEACAAAGIABAHQADALAFAHQAIAMAOAIQASAJAVADQAZADAWgFQAegGANgOQAQgQABgZQABgYgPgVQgNgUgXgJQgWgIgaADIgBAAg");
	this.shape_192.setTransform(188.8,-98.6,1.025,1.031,0,-3,-3.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#3086DB").s().p("ABcDXQAAAAgBAAQgBgBAAAAQAAgBgBAAQAAgBAAAAIAAgBIgEg8IgThaQgIgbgGgNIgRgoIgrhMIgNgRIgMgPIgZgcIgWgVIgTgQIgRgNQgEgDADgFQADgDAEACIA3AeIAOALIAeAZIAOAPIAQAQIAkAuIAHALIANAVIAaA2IAOA5IAEAqIgBAUIgBARIgGAeIgEALIgIAVQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIgDgBg");
	this.shape_193.setTransform(169.3,-21.9,1.025,1.031,0,-3,-3.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#3086DB").s().p("Ah7DjQgCgEAEgDIAQgOQAPgOAXgeIAvhDIAWgoQAJgRANgaQAMgXAHgTIAhhRIAMgkIALgsIAEghIAAgBQABgFAEABQABAAABAAQABAAAAABQABAAAAAAQAAABAAABIADAFQADAJACAIQADANABAPQABAQgBATQgBAQgGAZQgFAYgHAVQgIAYgLAVQgKAUgNAXQgcAvgbAjQgcAlgcAbQgPAOgLAJIgVAQIgUALIgDABQgDAAgCgDg");
	this.shape_194.setTransform(99.3,-183.4,0.631,0.634,0,-3,-3.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#3086DB").s().p("Ak3CYQgBgGAGgCIAcgKIAggLICNg5IA4gbQATgJAkgUIA2gfIDXh6IAUgLIAHgDQAGgDAEAGQABAEgCADIgTAYIgXAbIggAfQgQAQgZATQgTAPgeATQglAXgSAJQgMAHgvAWQgjAQgZAJQgQAHgsAPIg5ARIhfAVIgiAFIgeAEIgBAAQgGAAgBgHg");
	this.shape_195.setTransform(-159.4,-137.7,1.042,1.015,0,31.8,-145.3,-30.4,15.9);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#3086DB").s().p("Ai1AkIhigGQgWgCgMgDIgdgFQgIgBABgIQACgGAGAAIAdgBIAigBIEWgeIBAgHQAcgCAjAAIA8AEIAcADIAZAFIA/ARIAPAGIAVAJIAHADQACABABADQABADgBACQgCAEgEAAIgfABIghAAIlTAKIg+ACIg7gBg");
	this.shape_196.setTransform(-234,-73,1.025,1.031,0,3,-176.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#3086DB").s().p("AFDBVIgggOIgHgCIiigdQgegEgdgGIi3gkQg9gOgtgNQghgJgpgQIgUgJIgHgDQgHgEADgGQADgGAGACIAcAGQAPADASACIFPAnQAdAEAfAHQAlAIAUAHQAaAIAYAIQAWAKATALQAXAPAHAGIAFAFIALANIAEAIQADAGgGADIgDABIgDgBg");
	this.shape_197.setTransform(193.4,-50.1,1.025,1.031,0,-3,-3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188}]}).to({state:[]},576).wait(9));

	// Layer 2
	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#3086DB").ss(6,1,0,3).p("AHIK9QjEBEilgBQilgDiagbQibgah1gtQhFgbgkABQgvABgWArQgwBhCAE/QjnhWjzjpQgGgHimAPQk3AJivkBQizkEBrkqQAviFCThtQh0hzAlimQAlilCEghQCEghBXAsQA9iKB6hbQB0hXCIgwQCPgzCVAeQCJAbB4BIQBKAuBHCPQBMg/B0g0QCihHCkgGQChgGCqA3QCBApBSA3QA4AlAFBDQA3hKCUgEQCJgECOBHQCPBHBJCQQBJCPAGCFQAGCGhtBsQD5B/g7EKQg3D5jTB/QiOBVijAWQjvAfh7grQh6grg6g7Qg6g8gOgdQhQAfhmApg");
	this.shape_198.setTransform(-18.7,-47.4,1,1.054);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AwoMZQgGgHimAPQk3AJivkBQizkEBrkqQAviFCThtQh0hzAlimQAlilCEghQCEghBYAsQA8iKB6hbQB0hXCIgwQCPgzCVAeQCKAbB3BIQBKAuBHCPQBMg/B1g0QChhHCkgGQChgGCqA3QCBApBSA3QA4AlAFBDQA3hKCUgEQCJgECOBHQCPBHBJCQQBJCPAGCFQAGCGhsBsQD4B/g7EKQg3D5jTB/QiOBVijAWQjvAfh7grQh6grg6g7Qg6g8gOgdQhQAfhmApQjEBEilgBQilgDiagbQibgah1gtQhFgbgkABQgvABgWArQgwBhCBE/QjohWjzjpg");
	this.shape_199.setTransform(-18.7,-48.5,1,1.054);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_199},{t:this.shape_198}]}).to({state:[]},576).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-269.9,-203.3,497.9,277.3);


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


(lib.honeyflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.honeybee();
	this.instance.parent = this;
	this.instance.setTransform(38.4,-170.9,0.422,0.422,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-215.3,105.5,81.8);


// stage content:
(lib.writingsuccess_intro_audiodelay_v1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		playSound("BuzzytheWritingBee4Debreathed");
	}
	this.frame_654 = function() {
		/////* stop();*/
		completed();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(610).call(this.frame_654).wait(1));

	// Layer 3
	this.instance = new lib.bubble("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(235.7,280.1,0.25,0.25,-30.2,0,0,-78.7,67.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({regX:-79,regY:67.1,scaleX:1,scaleY:1,rotation:-0.2,x:235.6,alpha:1},15).wait(576).to({regX:-56.4,regY:45.2,rotation:-0.2,x:258.2,y:258.1,mode:"single",startPosition:564},0).to({regX:-56.6,scaleX:0.25,scaleY:0.25,rotation:-33.7,x:-107.1,y:91.9,alpha:0,startPosition:156},39).wait(1));

	// honey bee
	this.instance_1 = new lib.honeyflap("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(612.9,153,0.75,0.75,38.5,0,0,22.4,-144.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:41.7,regY:-174.4,scaleX:0.77,scaleY:0.77,rotation:25.3,x:615.8,y:130.3},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:6.3,x:584.3,y:118.9},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-18.2,x:542.2,y:117.6},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-39.7,x:500.9,y:131.8},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-53.6,x:472.8,y:150.5},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:-65.9,x:452.5,y:169.7},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-77.8,x:436.2,y:191.2},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:-88.6,x:424.4,y:213.6},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:-98.2,x:416.5,y:235.7},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:-104.2,x:412.1,y:255.6},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:-100.3,x:409.5,y:268.4},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:-96,x:405.8,y:279.5},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:-90.9,x:400.7,y:290.1},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:-85,x:393.8,y:300.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-78.9,x:384.9,y:310},0).wait(1).to({scaleX:1,scaleY:1,rotation:-73,x:373.2,y:319},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:-68,x:358.9,y:327.2},0).wait(1).to({scaleX:1.03,scaleY:1.03,rotation:-62.3,x:345.7,y:332.1},0).wait(1).to({scaleX:1.04,scaleY:1.04,rotation:-55.9,x:334.7,y:334},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:-47.4,x:324,y:333.3},0).wait(1).to({scaleX:1.06,scaleY:1.06,rotation:-37.8,x:313.8,y:330.2},0).wait(1).to({scaleX:1.08,scaleY:1.08,rotation:-28.6,x:303.9,y:324.6},0).wait(1).to({scaleX:1.09,scaleY:1.09,rotation:-21,x:293.8,y:316.6},0).wait(1).to({regX:22.4,regY:-144,scaleX:1.1,scaleY:1.1,rotation:-6.5,x:271.3,y:343.4},0).wait(591).to({y:340.2},0).to({regX:22.3,regY:-144.1,scaleX:1,scaleY:1,guide:{path:[271.3,340.2,264.6,350,254,354.4,125,408.8,89.9,265.2,66.4,169.4,-7.9,152.6,-40.5,145.2,-82.9,153.1]}},39).wait(1));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape.setTransform(275,275,3.373,2.543);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_1.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(655));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(273.5,273.5,672.7,553);
// library properties:
lib.properties = {
	width: 550,
	height: 550,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/BuzzytheWritingBee4Debreathed.mp3?1507018161636", id:"BuzzytheWritingBee4Debreathed"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;