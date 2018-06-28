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


(lib.G = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArxW1QjgiGihjnIgQAQIlaESIjCCJIhuA4Qg6AAghgmQgjglAAg5QAAhLBOg1IFokQIDfi2IiBlrQg7jRAAipQAAg5AiglQAhglA+AAQBbAAAbBYIAjC5QBFBOBeAwIC9BTIEpkqIEYksQgwiGAAiOIAYj6IBAj0IBxj3QBIh/BjhmQBjhmB8hAQB5g+CQAAQClAABTBmQBTBmAACfQAABjheCeIjcFAIj/E1IjHDZIC8AeQCDAACUgrIEjhpIEUiGID1iJIC7jcIB0h2IBTgzQA7AAApAjQAlAiAAA+IglBZIjoEMQjnEwi+FEIl+KPIjREtQhsCJiBBgQiABhiiAzQigA2jRAAQkdAAjeiJgAugOfQB5C+CsBuQCoBuDjAAQCrAAB+grQCAgrBmhQQBkhRBThwICkj6IHJsSIl2CTQjMBDjEAAIi/gTQhjgThVgzIhTBsIhZBmIiGCJIiMCDIDSATIDPAFQA9AAAlAhQAmAgAAA+QAABLg1AdIh5AbIk6gLIkygzgAwfKnIAQgNIgagLgAGC0FIiVCJIh3CpIhLCkIgyDJIgYDRIAAA+ICiixIDdj/IDEkHQBWiEAAhAIgRhMQgSgdgwAAQhRAAhUA2g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-193.1,-159.7,386.2,319.6);


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


(lib.ar4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-48.7,-31.5,1,1,-17.5,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-94.4,guide:{path:[-47.9,-29.4,-30.4,37.2,47,28.6]}},29).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AlhCZICwlVIBHAkIixFVg");
	var mask_graphics_1 = new cjs.Graphics().p("AiMCQICwlVIBpA2IiwFVg");
	var mask_graphics_2 = new cjs.Graphics().p("AidCHICvlVICMBIIivFVg");
	var mask_graphics_3 = new cjs.Graphics().p("AiuB+ICvlVICvBaIiwFVg");
	var mask_graphics_4 = new cjs.Graphics().p("AjAB1ICxlVIDQBsIiwFVg");
	var mask_graphics_5 = new cjs.Graphics().p("AjRBsICwlVID0B+IixFVg");
	var mask_graphics_6 = new cjs.Graphics().p("AjjBjICxlVIEWCQIixFVg");
	var mask_graphics_7 = new cjs.Graphics().p("Aj0BaICwlVIE5CiIiwFVg");
	var mask_graphics_8 = new cjs.Graphics().p("AkGBRICxlVIFcC0IixFVg");
	var mask_graphics_9 = new cjs.Graphics().p("AkXBIICwlVIF/DGIiwFVg");
	var mask_graphics_10 = new cjs.Graphics().p("AkpA/ICxlVIGiDYIixFVg");
	var mask_graphics_11 = new cjs.Graphics().p("Ak6A2ICwlVIHFDqIiwFVg");
	var mask_graphics_12 = new cjs.Graphics().p("AlMAtICxlVIHoD8IixFVg");
	var mask_graphics_13 = new cjs.Graphics().p("AldAkICxlVIIKEOIixFVg");
	var mask_graphics_14 = new cjs.Graphics().p("AluAbICwlVIItEgIiwFVg");
	var mask_graphics_15 = new cjs.Graphics().p("AmAASICwlVIJREzIiwFVg");
	var mask_graphics_16 = new cjs.Graphics().p("AmSAJICxlVIJ0FFIixFVg");
	var mask_graphics_17 = new cjs.Graphics().p("AmjAAICwlVIKXFWIixFWg");
	var mask_graphics_18 = new cjs.Graphics().p("Am1gIICxlWIK5FoIiwFWg");
	var mask_graphics_19 = new cjs.Graphics().p("AnGgRICwlWILdF6IixFWg");
	var mask_graphics_20 = new cjs.Graphics().p("AnYgaICxlWIL/GMIiwFWg");
	var mask_graphics_21 = new cjs.Graphics().p("AnpgjICwlWIMjGeIixFWg");
	var mask_graphics_22 = new cjs.Graphics().p("An6gtICwlWINFGxIiwFWg");
	var mask_graphics_23 = new cjs.Graphics().p("AoMg2ICxlWINoHDIixFWg");
	var mask_graphics_24 = new cjs.Graphics().p("Aodg/ICwlWIOLHVIiwFWg");
	var mask_graphics_25 = new cjs.Graphics().p("AovhIICxlWIOuHnIixFWg");
	var mask_graphics_26 = new cjs.Graphics().p("ApAhRICwlWIPRH5IiwFWg");
	var mask_graphics_27 = new cjs.Graphics().p("ApShaICxlWIPzILIiwFWg");
	var mask_graphics_28 = new cjs.Graphics().p("ApjhjICwlWIQXIdIixFWg");
	var mask_graphics_29 = new cjs.Graphics().p("Ap1hsICxlWIQ6IvIixFWg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-35.4,y:-17.5}).wait(1).to({graphics:mask_graphics_1,x:-56.8,y:-16.5}).wait(1).to({graphics:mask_graphics_2,x:-55,y:-15.6}).wait(1).to({graphics:mask_graphics_3,x:-53.3,y:-14.7}).wait(1).to({graphics:mask_graphics_4,x:-51.5,y:-13.8}).wait(1).to({graphics:mask_graphics_5,x:-49.8,y:-12.9}).wait(1).to({graphics:mask_graphics_6,x:-48,y:-12}).wait(1).to({graphics:mask_graphics_7,x:-46.3,y:-11.1}).wait(1).to({graphics:mask_graphics_8,x:-44.6,y:-10.2}).wait(1).to({graphics:mask_graphics_9,x:-42.8,y:-9.3}).wait(1).to({graphics:mask_graphics_10,x:-41.1,y:-8.4}).wait(1).to({graphics:mask_graphics_11,x:-39.3,y:-7.5}).wait(1).to({graphics:mask_graphics_12,x:-37.6,y:-6.6}).wait(1).to({graphics:mask_graphics_13,x:-35.8,y:-5.7}).wait(1).to({graphics:mask_graphics_14,x:-34.1,y:-4.8}).wait(1).to({graphics:mask_graphics_15,x:-32.4,y:-3.9}).wait(1).to({graphics:mask_graphics_16,x:-30.6,y:-3}).wait(1).to({graphics:mask_graphics_17,x:-28.9,y:-2.1}).wait(1).to({graphics:mask_graphics_18,x:-27.1,y:-1.2}).wait(1).to({graphics:mask_graphics_19,x:-25.4,y:-0.3}).wait(1).to({graphics:mask_graphics_20,x:-23.6,y:0.6}).wait(1).to({graphics:mask_graphics_21,x:-21.9,y:1.5}).wait(1).to({graphics:mask_graphics_22,x:-20.2,y:2.4}).wait(1).to({graphics:mask_graphics_23,x:-18.4,y:3.3}).wait(1).to({graphics:mask_graphics_24,x:-16.7,y:4.2}).wait(1).to({graphics:mask_graphics_25,x:-14.9,y:5.1}).wait(1).to({graphics:mask_graphics_26,x:-13.2,y:6}).wait(1).to({graphics:mask_graphics_27,x:-11.4,y:6.9}).wait(1).to({graphics:mask_graphics_28,x:-9.7,y:7.8}).wait(1).to({graphics:mask_graphics_29,x:-7.9,y:8.7}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AnfkmQCwKeMPhb");

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.3,-37.3,21.2,38.8);


(lib.ar3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(58.8,-90.6,1,1,19.7,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.3,regY:0.2,rotation:43.4,guide:{path:[58.8,-90.4,25.2,6.7,-58.9,91]}},104).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ABZmiIBBhiIDyCfIhBBjg");
	var mask_graphics_1 = new cjs.Graphics().p("AifgVIBNh0IDyCfIhNB0g");
	var mask_graphics_2 = new cjs.Graphics().p("AikgMIBYiGIDxCfIhYCGg");
	var mask_graphics_3 = new cjs.Graphics().p("AiqgDIBjiYIDyCgIhkCXg");
	var mask_graphics_4 = new cjs.Graphics().p("AiwAEIBvinIDyCgIhvCng");
	var mask_graphics_5 = new cjs.Graphics().p("Ai2ANIB7i5IDyCgIh7C5g");
	var mask_graphics_6 = new cjs.Graphics().p("Ai7AWICGjLIDxCgIiGDLg");
	var mask_graphics_7 = new cjs.Graphics().p("AjBAfICRjdIDyChIiRDbg");
	var mask_graphics_8 = new cjs.Graphics().p("AjHAnICdjtIDyCgIidDtg");
	var mask_graphics_9 = new cjs.Graphics().p("AjMAwICoj/IDyCgIipD/g");
	var mask_graphics_10 = new cjs.Graphics().p("AjSA4IC0kQIDxChIi0EPg");
	var mask_graphics_11 = new cjs.Graphics().p("AjYBBIDAkhIDxCgIjAEhg");
	var mask_graphics_12 = new cjs.Graphics().p("AjeBKIDLkzIDyCgIjMEzg");
	var mask_graphics_13 = new cjs.Graphics().p("AjkBTIDXlFIDyCgIjXFFg");
	var mask_graphics_14 = new cjs.Graphics().p("AjqBcIDjlXIDyCgIjjFXg");
	var mask_graphics_15 = new cjs.Graphics().p("AjvBlIDulpIDxCgIjuFog");
	var mask_graphics_16 = new cjs.Graphics().p("Aj1BtID4l5IDzCgIj5F5g");
	var mask_graphics_17 = new cjs.Graphics().p("Aj7B2IEEmLIDzCgIkEGLg");
	var mask_graphics_18 = new cjs.Graphics().p("AkBB/IEQmdIDzCgIkQGdg");
	var mask_graphics_19 = new cjs.Graphics().p("AkGCHIEbmuIDyCgIkbGug");
	var mask_graphics_20 = new cjs.Graphics().p("AkMCQIEmm/IDzCgIknG/g");
	var mask_graphics_21 = new cjs.Graphics().p("AkSCZIEynRIDzCgIkyHRg");
	var mask_graphics_22 = new cjs.Graphics().p("AkYCiIE+njIDzCgIk+Hjg");
	var mask_graphics_23 = new cjs.Graphics().p("AkdCqIFJn0IDyCgIlJH1g");
	var mask_graphics_24 = new cjs.Graphics().p("AkjCzIFUoFIDzCgIlVIFg");
	var mask_graphics_25 = new cjs.Graphics().p("AkpC8IFgoXIDzCgIlgIXg");
	var mask_graphics_26 = new cjs.Graphics().p("AkvDFIFsopIDzCgIlsIpg");
	var mask_graphics_27 = new cjs.Graphics().p("Ak1DNIF4o5IDyCgIl3I5g");
	var mask_graphics_28 = new cjs.Graphics().p("Ak6DWIGDpLIDyCgImDJLg");
	var mask_graphics_29 = new cjs.Graphics().p("AlADfIGPpdIDyCgImPJdg");
	var mask_graphics_30 = new cjs.Graphics().p("AlGDoIGapvIDzCgImaJug");
	var mask_graphics_31 = new cjs.Graphics().p("AlMDwIGmp/IDyCgImlJ/g");
	var mask_graphics_32 = new cjs.Graphics().p("AlRD5IGxqRIDyCgImxKRg");
	var mask_graphics_33 = new cjs.Graphics().p("AlXECIG9qjIDyCgIm9Kjg");
	var mask_graphics_34 = new cjs.Graphics().p("AldEKIHJq0IDyCgInIK0g");
	var mask_graphics_35 = new cjs.Graphics().p("AljETIHUrFIDzCgInULFg");
	var mask_graphics_36 = new cjs.Graphics().p("AloEcIHfrXIDyCgInfLXg");
	var mask_graphics_37 = new cjs.Graphics().p("AluElIHrrpIDyCgInrLpg");
	var mask_graphics_38 = new cjs.Graphics().p("Al0EtIH3r6IDyCgIn2L6g");
	var mask_graphics_39 = new cjs.Graphics().p("Al6E2IICsLIDzCgIoCMLg");
	var mask_graphics_40 = new cjs.Graphics().p("Al/E/IINsdIDyCgIoNMdg");
	var mask_graphics_41 = new cjs.Graphics().p("AmFFIIIZsvIDyCgIoZMvg");
	var mask_graphics_42 = new cjs.Graphics().p("AmLFRIIltBIDyCgIokNBg");
	var mask_graphics_43 = new cjs.Graphics().p("AmRFZIIwtRIDzCgIowNRg");
	var mask_graphics_44 = new cjs.Graphics().p("AmWFiII7tjIDyCgIo7Njg");
	var mask_graphics_45 = new cjs.Graphics().p("AmcFrIJHt1IDyCgIpHN1g");
	var mask_graphics_46 = new cjs.Graphics().p("AmiFzIJTuFIDyCgIpTOGg");
	var mask_graphics_47 = new cjs.Graphics().p("AmoF8IJeuXIDzCgIpeOXg");
	var mask_graphics_48 = new cjs.Graphics().p("AmuGFIJqupIDyCgIppOpg");
	var mask_graphics_49 = new cjs.Graphics().p("AmzGOIJ1u7IDyCgIp1O7g");
	var mask_graphics_50 = new cjs.Graphics().p("Am5GWIKBvLIDyCgIqBPMg");
	var mask_graphics_51 = new cjs.Graphics().p("Am/GfIKMvdIDzCgIqMPdg");
	var mask_graphics_52 = new cjs.Graphics().p("AnFGoIKYvvIDyCgIqXPvg");
	var mask_graphics_53 = new cjs.Graphics().p("AnLGxIKkwBIDyCgIqjQBg");
	var mask_graphics_54 = new cjs.Graphics().p("AnQG6IKvwSIDyCgIqvQSg");
	var mask_graphics_55 = new cjs.Graphics().p("AnWHCIK7wjIDyCgIq6Qjg");
	var mask_graphics_56 = new cjs.Graphics().p("AncHLILGw1IDzCgIrGQ1g");
	var mask_graphics_57 = new cjs.Graphics().p("AnhHUILRxHIDyCgIrRRHg");
	var mask_graphics_58 = new cjs.Graphics().p("AnnHdILdxYIDyCgIrdRXg");
	var mask_graphics_59 = new cjs.Graphics().p("AntHlILpxpIDyCgIroRpg");
	var mask_graphics_60 = new cjs.Graphics().p("AnzHuIL0x7IDzCgIr0R7g");
	var mask_graphics_61 = new cjs.Graphics().p("An4H2IL/yLIDyCgIr/SLg");
	var mask_graphics_62 = new cjs.Graphics().p("An+H/IMLydIDyCgIsLSdg");
	var mask_graphics_63 = new cjs.Graphics().p("AoEIIIMXyvIDyCgIsWSvg");
	var mask_graphics_64 = new cjs.Graphics().p("AoKIRIMizBIDzCgIsiTBg");
	var mask_graphics_65 = new cjs.Graphics().p("AoPIZIMtzRIDyCgIstTSg");
	var mask_graphics_66 = new cjs.Graphics().p("AoVIjIM5zlIDyCgIs5Tkg");
	var mask_graphics_67 = new cjs.Graphics().p("AobIrINFz1IDyCgItET1g");
	var mask_graphics_68 = new cjs.Graphics().p("AohI0INQ0HIDzCgItQUHg");
	var mask_graphics_69 = new cjs.Graphics().p("AomI9INb0ZIDyCgItbUZg");
	var mask_graphics_70 = new cjs.Graphics().p("AosJFINn0qIDyCgItnUqg");
	var mask_graphics_71 = new cjs.Graphics().p("AoyJOINz07IDyCgItzU7g");
	var mask_graphics_72 = new cjs.Graphics().p("Ao4JXIN+1NIDzCgIt+VNg");
	var mask_graphics_73 = new cjs.Graphics().p("Ao+JgIOK1fIDzCgIuKVfg");
	var mask_graphics_74 = new cjs.Graphics().p("ApEJoIOW1wIDyCgIuVVxg");
	var mask_graphics_75 = new cjs.Graphics().p("ApJJxIOh2BIDyCgIuhWBg");
	var mask_graphics_76 = new cjs.Graphics().p("ApPJ6IOt2TIDyCgIutWTg");
	var mask_graphics_77 = new cjs.Graphics().p("ApVKDIO42lIDzCgIu4Wlg");
	var mask_graphics_78 = new cjs.Graphics().p("ApbKMIPE23IDzCgIvEW3g");
	var mask_graphics_79 = new cjs.Graphics().p("AphKUIPQ3HIDzCgIvQXHg");
	var mask_graphics_80 = new cjs.Graphics().p("ApmKdIPb3ZIDyCgIvbXZg");
	var mask_graphics_81 = new cjs.Graphics().p("ApsKmIPm3rIDzCgIvnXqg");
	var mask_graphics_82 = new cjs.Graphics().p("ApyKuIPy37IDzCgIvyX7g");
	var mask_graphics_83 = new cjs.Graphics().p("Ap4K3IP+4NIDzCgIv+YNg");
	var mask_graphics_84 = new cjs.Graphics().p("Ap9LAIQJ4fIDyCgIwJYfg");
	var mask_graphics_85 = new cjs.Graphics().p("AqDLIIQU4wIDzCgIwVYwg");
	var mask_graphics_86 = new cjs.Graphics().p("AqJLRIQg5BIDzCgIwgZBg");
	var mask_graphics_87 = new cjs.Graphics().p("AqPLaIQs5TIDzCgIwsZTg");
	var mask_graphics_88 = new cjs.Graphics().p("AqULjIQ35lIDyCgIw3Zlg");
	var mask_graphics_89 = new cjs.Graphics().p("AqaLrIRC52IDzCgIxCZ2g");
	var mask_graphics_90 = new cjs.Graphics().p("AqgL0IRO6HIDzCgIxOaHg");
	var mask_graphics_91 = new cjs.Graphics().p("AqlL9IRZ6ZIDzCgIxaaZg");
	var mask_graphics_92 = new cjs.Graphics().p("AqrMGIRl6rIDyCgIxlarg");
	var mask_graphics_93 = new cjs.Graphics().p("AqxMPIRw69IDzCgIxwa9g");
	var mask_graphics_94 = new cjs.Graphics().p("Aq3MXIR87NIDzCgIx9bNg");
	var mask_graphics_95 = new cjs.Graphics().p("Aq9MgISI7fIDzCgIyIbfg");
	var mask_graphics_96 = new cjs.Graphics().p("ArDMpISU7xIDzCgIyUbxg");
	var mask_graphics_97 = new cjs.Graphics().p("ArIMxISf8BIDyCgIyfcBg");
	var mask_graphics_98 = new cjs.Graphics().p("ArOM6ISq8TIDzCgIyrcTg");
	var mask_graphics_99 = new cjs.Graphics().p("ArUNDIS28lIDzCgIy2clg");
	var mask_graphics_100 = new cjs.Graphics().p("AraNMITC83IDzCgIzCc3g");
	var mask_graphics_101 = new cjs.Graphics().p("ArfNUITN9HIDyCgIzNdIg");
	var mask_graphics_102 = new cjs.Graphics().p("ArlNdITY9ZIDzCgIzZdZg");
	var mask_graphics_103 = new cjs.Graphics().p("ArrNmITk9rIDzCgIzkdrg");
	var mask_graphics_104 = new cjs.Graphics().p("ArwNvITv99IDyCgIzvd9g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:39.6,y:-51.7}).wait(1).to({graphics:mask_graphics_1,x:63.3,y:-89.7}).wait(1).to({graphics:mask_graphics_2,x:62.7,y:-88.8}).wait(1).to({graphics:mask_graphics_3,x:62.2,y:-87.9}).wait(1).to({graphics:mask_graphics_4,x:61.6,y:-87.1}).wait(1).to({graphics:mask_graphics_5,x:61,y:-86.2}).wait(1).to({graphics:mask_graphics_6,x:60.4,y:-85.3}).wait(1).to({graphics:mask_graphics_7,x:59.9,y:-84.4}).wait(1).to({graphics:mask_graphics_8,x:59.3,y:-83.6}).wait(1).to({graphics:mask_graphics_9,x:58.7,y:-82.7}).wait(1).to({graphics:mask_graphics_10,x:58.1,y:-81.8}).wait(1).to({graphics:mask_graphics_11,x:57.5,y:-81}).wait(1).to({graphics:mask_graphics_12,x:57,y:-80.1}).wait(1).to({graphics:mask_graphics_13,x:56.4,y:-79.2}).wait(1).to({graphics:mask_graphics_14,x:55.8,y:-78.4}).wait(1).to({graphics:mask_graphics_15,x:55.2,y:-77.5}).wait(1).to({graphics:mask_graphics_16,x:54.7,y:-76.6}).wait(1).to({graphics:mask_graphics_17,x:54.1,y:-75.7}).wait(1).to({graphics:mask_graphics_18,x:53.5,y:-74.9}).wait(1).to({graphics:mask_graphics_19,x:52.9,y:-74}).wait(1).to({graphics:mask_graphics_20,x:52.4,y:-73.1}).wait(1).to({graphics:mask_graphics_21,x:51.8,y:-72.2}).wait(1).to({graphics:mask_graphics_22,x:51.2,y:-71.4}).wait(1).to({graphics:mask_graphics_23,x:50.6,y:-70.5}).wait(1).to({graphics:mask_graphics_24,x:50.1,y:-69.6}).wait(1).to({graphics:mask_graphics_25,x:49.5,y:-68.7}).wait(1).to({graphics:mask_graphics_26,x:48.9,y:-67.9}).wait(1).to({graphics:mask_graphics_27,x:48.4,y:-67}).wait(1).to({graphics:mask_graphics_28,x:47.8,y:-66.1}).wait(1).to({graphics:mask_graphics_29,x:47.2,y:-65.3}).wait(1).to({graphics:mask_graphics_30,x:46.6,y:-64.4}).wait(1).to({graphics:mask_graphics_31,x:46.1,y:-63.5}).wait(1).to({graphics:mask_graphics_32,x:45.5,y:-62.6}).wait(1).to({graphics:mask_graphics_33,x:44.9,y:-61.8}).wait(1).to({graphics:mask_graphics_34,x:44.3,y:-60.9}).wait(1).to({graphics:mask_graphics_35,x:43.7,y:-60}).wait(1).to({graphics:mask_graphics_36,x:43.2,y:-59.1}).wait(1).to({graphics:mask_graphics_37,x:42.6,y:-58.3}).wait(1).to({graphics:mask_graphics_38,x:42,y:-57.4}).wait(1).to({graphics:mask_graphics_39,x:41.4,y:-56.5}).wait(1).to({graphics:mask_graphics_40,x:40.9,y:-55.7}).wait(1).to({graphics:mask_graphics_41,x:40.3,y:-54.8}).wait(1).to({graphics:mask_graphics_42,x:39.7,y:-53.9}).wait(1).to({graphics:mask_graphics_43,x:39.1,y:-53}).wait(1).to({graphics:mask_graphics_44,x:38.6,y:-52.2}).wait(1).to({graphics:mask_graphics_45,x:38,y:-51.3}).wait(1).to({graphics:mask_graphics_46,x:37.4,y:-50.4}).wait(1).to({graphics:mask_graphics_47,x:36.8,y:-49.6}).wait(1).to({graphics:mask_graphics_48,x:36.3,y:-48.7}).wait(1).to({graphics:mask_graphics_49,x:35.7,y:-47.8}).wait(1).to({graphics:mask_graphics_50,x:35.1,y:-46.9}).wait(1).to({graphics:mask_graphics_51,x:34.5,y:-46.1}).wait(1).to({graphics:mask_graphics_52,x:34,y:-45.2}).wait(1).to({graphics:mask_graphics_53,x:33.4,y:-44.3}).wait(1).to({graphics:mask_graphics_54,x:32.8,y:-43.4}).wait(1).to({graphics:mask_graphics_55,x:32.2,y:-42.6}).wait(1).to({graphics:mask_graphics_56,x:31.6,y:-41.7}).wait(1).to({graphics:mask_graphics_57,x:31.1,y:-40.8}).wait(1).to({graphics:mask_graphics_58,x:30.5,y:-39.9}).wait(1).to({graphics:mask_graphics_59,x:29.9,y:-39.1}).wait(1).to({graphics:mask_graphics_60,x:29.3,y:-38.2}).wait(1).to({graphics:mask_graphics_61,x:28.8,y:-37.3}).wait(1).to({graphics:mask_graphics_62,x:28.2,y:-36.5}).wait(1).to({graphics:mask_graphics_63,x:27.6,y:-35.6}).wait(1).to({graphics:mask_graphics_64,x:27,y:-34.7}).wait(1).to({graphics:mask_graphics_65,x:26.5,y:-33.8}).wait(1).to({graphics:mask_graphics_66,x:25.9,y:-33}).wait(1).to({graphics:mask_graphics_67,x:25.3,y:-32.1}).wait(1).to({graphics:mask_graphics_68,x:24.7,y:-31.2}).wait(1).to({graphics:mask_graphics_69,x:24.2,y:-30.4}).wait(1).to({graphics:mask_graphics_70,x:23.6,y:-29.5}).wait(1).to({graphics:mask_graphics_71,x:23,y:-28.6}).wait(1).to({graphics:mask_graphics_72,x:22.4,y:-27.7}).wait(1).to({graphics:mask_graphics_73,x:21.8,y:-26.9}).wait(1).to({graphics:mask_graphics_74,x:21.3,y:-26}).wait(1).to({graphics:mask_graphics_75,x:20.7,y:-25.1}).wait(1).to({graphics:mask_graphics_76,x:20.1,y:-24.2}).wait(1).to({graphics:mask_graphics_77,x:19.5,y:-23.4}).wait(1).to({graphics:mask_graphics_78,x:19,y:-22.5}).wait(1).to({graphics:mask_graphics_79,x:18.4,y:-21.6}).wait(1).to({graphics:mask_graphics_80,x:17.8,y:-20.8}).wait(1).to({graphics:mask_graphics_81,x:17.3,y:-19.9}).wait(1).to({graphics:mask_graphics_82,x:16.7,y:-19}).wait(1).to({graphics:mask_graphics_83,x:16.1,y:-18.1}).wait(1).to({graphics:mask_graphics_84,x:15.5,y:-17.3}).wait(1).to({graphics:mask_graphics_85,x:15,y:-16.4}).wait(1).to({graphics:mask_graphics_86,x:14.4,y:-15.5}).wait(1).to({graphics:mask_graphics_87,x:13.8,y:-14.6}).wait(1).to({graphics:mask_graphics_88,x:13.2,y:-13.8}).wait(1).to({graphics:mask_graphics_89,x:12.7,y:-12.9}).wait(1).to({graphics:mask_graphics_90,x:12.1,y:-12}).wait(1).to({graphics:mask_graphics_91,x:11.5,y:-11.1}).wait(1).to({graphics:mask_graphics_92,x:10.9,y:-10.3}).wait(1).to({graphics:mask_graphics_93,x:10.4,y:-9.4}).wait(1).to({graphics:mask_graphics_94,x:9.8,y:-8.5}).wait(1).to({graphics:mask_graphics_95,x:9.2,y:-7.7}).wait(1).to({graphics:mask_graphics_96,x:8.6,y:-6.8}).wait(1).to({graphics:mask_graphics_97,x:8,y:-5.9}).wait(1).to({graphics:mask_graphics_98,x:7.5,y:-5.1}).wait(1).to({graphics:mask_graphics_99,x:6.9,y:-4.2}).wait(1).to({graphics:mask_graphics_100,x:6.3,y:-3.3}).wait(1).to({graphics:mask_graphics_101,x:5.7,y:-2.4}).wait(1).to({graphics:mask_graphics_102,x:5.2,y:-1.6}).wait(1).to({graphics:mask_graphics_103,x:4.6,y:-0.7}).wait(1).to({graphics:mask_graphics_104,x:4,y:0.2}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AJOuNQlRPPtKNM");

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(105));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(48.5,-97,21.5,19.3);


(lib.ar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(48.5,-50.6,1,1,65.5,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0.1,rotation:31.8,guide:{path:[48.5,-50.4,-9.2,-28.3,-42.7,42.1]}},59).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AA1kPIBIhMICkCaIhIBMg");
	var mask_graphics_1 = new cjs.Graphics().p("Ah8geIBWhcICkCZIhYBcg");
	var mask_graphics_2 = new cjs.Graphics().p("AiEgWIBmhsICjCZIhmBsg");
	var mask_graphics_3 = new cjs.Graphics().p("AiMgOIB1h8ICkCZIh1B8g");
	var mask_graphics_4 = new cjs.Graphics().p("AiTgGICEiMICjCZIiECMg");
	var mask_graphics_5 = new cjs.Graphics().p("AibABICUibICjCaIiUCbg");
	var mask_graphics_6 = new cjs.Graphics().p("AiiAJICiirICjCaIiiCrg");
	var mask_graphics_7 = new cjs.Graphics().p("AiqARICxi7ICkCaIixC7g");
	var mask_graphics_8 = new cjs.Graphics().p("AixAZIC/jLICkCbIi/DKg");
	var mask_graphics_9 = new cjs.Graphics().p("Ai5AhIDPjbICkCbIjPDag");
	var mask_graphics_10 = new cjs.Graphics().p("AjAApIDdjrIClCaIjeDrg");
	var mask_graphics_11 = new cjs.Graphics().p("AjIAxIDtj7ICkCaIjtD8g");
	var mask_graphics_12 = new cjs.Graphics().p("AjQA4ID8kKIClCaIj8EMg");
	var mask_graphics_13 = new cjs.Graphics().p("AjXBAIELkaICkCaIkLEbg");
	var mask_graphics_14 = new cjs.Graphics().p("AjeBJIEZkrIClCaIkbErg");
	var mask_graphics_15 = new cjs.Graphics().p("AjmBRIEpk7ICkCaIkpE8g");
	var mask_graphics_16 = new cjs.Graphics().p("AjtBZIE3lLIClCaIk4FLg");
	var mask_graphics_17 = new cjs.Graphics().p("Aj1BhIFHlbICkCaIlHFbg");
	var mask_graphics_18 = new cjs.Graphics().p("Aj9BpIFXlrICkCaIlWFrg");
	var mask_graphics_19 = new cjs.Graphics().p("AkEBxIFll7ICkCaIllF7g");
	var mask_graphics_20 = new cjs.Graphics().p("AkMB5IF1mLICkCaIl1GLg");
	var mask_graphics_21 = new cjs.Graphics().p("AkTCBIGDmbICkCaImDGbg");
	var mask_graphics_22 = new cjs.Graphics().p("AkbCJIGTmrICkCaImTGrg");
	var mask_graphics_23 = new cjs.Graphics().p("AkiCRIGhm8IClCbImiG8g");
	var mask_graphics_24 = new cjs.Graphics().p("AkqCZIGxnMICkCbImxHLg");
	var mask_graphics_25 = new cjs.Graphics().p("AkxChIG/ncIClCbInAHbg");
	var mask_graphics_26 = new cjs.Graphics().p("Ak5CpIHPnsICkCbInPHsg");
	var mask_graphics_27 = new cjs.Graphics().p("AlBCxIHen8IClCbInfH8g");
	var mask_graphics_28 = new cjs.Graphics().p("AlIC5IHtoMICkCbIntILg");
	var mask_graphics_29 = new cjs.Graphics().p("AlPDBIH7ocIClCbIn9Ibg");
	var mask_graphics_30 = new cjs.Graphics().p("AlXDJIILosICkCbIoLIsg");
	var mask_graphics_31 = new cjs.Graphics().p("AlfDRIIao8IClCbIoaI8g");
	var mask_graphics_32 = new cjs.Graphics().p("AlnDYIIqpLICkCbIopJMg");
	var mask_graphics_33 = new cjs.Graphics().p("AluDgII4pbIClCbIo5Jbg");
	var mask_graphics_34 = new cjs.Graphics().p("Al2DpIJIpsICkCbIpIJrg");
	var mask_graphics_35 = new cjs.Graphics().p("Al9DxIJWp8IClCbIpXJ8g");
	var mask_graphics_36 = new cjs.Graphics().p("AmED4IJlqLICkCbIplKMg");
	var mask_graphics_37 = new cjs.Graphics().p("AmMEBIJ1qcICkCbIp1Kcg");
	var mask_graphics_38 = new cjs.Graphics().p("AmUEJIKEqsIClCbIqEKsg");
	var mask_graphics_39 = new cjs.Graphics().p("AmbERIKTq8ICkCbIqTK8g");
	var mask_graphics_40 = new cjs.Graphics().p("AmjEZIKirMIClCbIqiLMg");
	var mask_graphics_41 = new cjs.Graphics().p("AmqEhIKxrcICkCbIqxLcg");
	var mask_graphics_42 = new cjs.Graphics().p("AmyEpILArsIClCbIrBLsg");
	var mask_graphics_43 = new cjs.Graphics().p("Am5ExILPr8ICkCbIrPL8g");
	var mask_graphics_44 = new cjs.Graphics().p("AnBE5ILesMIClCcIrfMKg");
	var mask_graphics_45 = new cjs.Graphics().p("AnIFBILtscICkCcIrtMag");
	var mask_graphics_46 = new cjs.Graphics().p("AnQFJIL8ssIClCcIr8Mrg");
	var mask_graphics_47 = new cjs.Graphics().p("AnYFRIMMs8ICkCcIsLM7g");
	var mask_graphics_48 = new cjs.Graphics().p("AnfFZIMatMIClCcIsbNKg");
	var mask_graphics_49 = new cjs.Graphics().p("AnmFhIMptcICkCcIsqNag");
	var mask_graphics_50 = new cjs.Graphics().p("AnuFpIM5tsICkCbIs5Nrg");
	var mask_graphics_51 = new cjs.Graphics().p("An2FxINIt8IClCbItIN8g");
	var mask_graphics_52 = new cjs.Graphics().p("An9F5INXuMICkCbItXOMg");
	var mask_graphics_53 = new cjs.Graphics().p("AoFGBINmucIClCbItmOcg");
	var mask_graphics_54 = new cjs.Graphics().p("AoMGJIN1usICkCbIt1Osg");
	var mask_graphics_55 = new cjs.Graphics().p("AoUGRIOEu8IClCbIuEO8g");
	var mask_graphics_56 = new cjs.Graphics().p("AocGZIOUvMICkCbIuTPMg");
	var mask_graphics_57 = new cjs.Graphics().p("AojGhIOivcIClCbIujPcg");
	var mask_graphics_58 = new cjs.Graphics().p("AoqGpIOxvsICkCbIuxPsg");
	var mask_graphics_59 = new cjs.Graphics().p("AoyGxIPAv8IClCbIvAP8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:28.9,y:-34.8}).wait(1).to({graphics:mask_graphics_1,x:45.2,y:-57.3}).wait(1).to({graphics:mask_graphics_2,x:44.5,y:-56.5}).wait(1).to({graphics:mask_graphics_3,x:43.7,y:-55.7}).wait(1).to({graphics:mask_graphics_4,x:42.9,y:-54.9}).wait(1).to({graphics:mask_graphics_5,x:42.2,y:-54.1}).wait(1).to({graphics:mask_graphics_6,x:41.4,y:-53.3}).wait(1).to({graphics:mask_graphics_7,x:40.7,y:-52.5}).wait(1).to({graphics:mask_graphics_8,x:39.9,y:-51.7}).wait(1).to({graphics:mask_graphics_9,x:39.2,y:-50.9}).wait(1).to({graphics:mask_graphics_10,x:38.4,y:-50.1}).wait(1).to({graphics:mask_graphics_11,x:37.7,y:-49.3}).wait(1).to({graphics:mask_graphics_12,x:36.9,y:-48.5}).wait(1).to({graphics:mask_graphics_13,x:36.2,y:-47.7}).wait(1).to({graphics:mask_graphics_14,x:35.4,y:-46.9}).wait(1).to({graphics:mask_graphics_15,x:34.7,y:-46.1}).wait(1).to({graphics:mask_graphics_16,x:33.9,y:-45.4}).wait(1).to({graphics:mask_graphics_17,x:33.1,y:-44.6}).wait(1).to({graphics:mask_graphics_18,x:32.4,y:-43.8}).wait(1).to({graphics:mask_graphics_19,x:31.6,y:-43}).wait(1).to({graphics:mask_graphics_20,x:30.9,y:-42.2}).wait(1).to({graphics:mask_graphics_21,x:30.1,y:-41.4}).wait(1).to({graphics:mask_graphics_22,x:29.4,y:-40.6}).wait(1).to({graphics:mask_graphics_23,x:28.6,y:-39.8}).wait(1).to({graphics:mask_graphics_24,x:27.9,y:-39}).wait(1).to({graphics:mask_graphics_25,x:27.1,y:-38.2}).wait(1).to({graphics:mask_graphics_26,x:26.4,y:-37.4}).wait(1).to({graphics:mask_graphics_27,x:25.6,y:-36.6}).wait(1).to({graphics:mask_graphics_28,x:24.9,y:-35.8}).wait(1).to({graphics:mask_graphics_29,x:24.1,y:-35}).wait(1).to({graphics:mask_graphics_30,x:23.4,y:-34.2}).wait(1).to({graphics:mask_graphics_31,x:22.6,y:-33.4}).wait(1).to({graphics:mask_graphics_32,x:21.9,y:-32.6}).wait(1).to({graphics:mask_graphics_33,x:21.1,y:-31.8}).wait(1).to({graphics:mask_graphics_34,x:20.4,y:-31}).wait(1).to({graphics:mask_graphics_35,x:19.6,y:-30.2}).wait(1).to({graphics:mask_graphics_36,x:18.9,y:-29.4}).wait(1).to({graphics:mask_graphics_37,x:18.1,y:-28.6}).wait(1).to({graphics:mask_graphics_38,x:17.3,y:-27.8}).wait(1).to({graphics:mask_graphics_39,x:16.6,y:-27}).wait(1).to({graphics:mask_graphics_40,x:15.8,y:-26.2}).wait(1).to({graphics:mask_graphics_41,x:15.1,y:-25.4}).wait(1).to({graphics:mask_graphics_42,x:14.3,y:-24.6}).wait(1).to({graphics:mask_graphics_43,x:13.6,y:-23.8}).wait(1).to({graphics:mask_graphics_44,x:12.8,y:-23}).wait(1).to({graphics:mask_graphics_45,x:12.1,y:-22.2}).wait(1).to({graphics:mask_graphics_46,x:11.3,y:-21.4}).wait(1).to({graphics:mask_graphics_47,x:10.6,y:-20.6}).wait(1).to({graphics:mask_graphics_48,x:9.8,y:-19.8}).wait(1).to({graphics:mask_graphics_49,x:9.1,y:-19}).wait(1).to({graphics:mask_graphics_50,x:8.3,y:-18.2}).wait(1).to({graphics:mask_graphics_51,x:7.5,y:-17.4}).wait(1).to({graphics:mask_graphics_52,x:6.8,y:-16.7}).wait(1).to({graphics:mask_graphics_53,x:6,y:-15.9}).wait(1).to({graphics:mask_graphics_54,x:5.3,y:-15.1}).wait(1).to({graphics:mask_graphics_55,x:4.5,y:-14.3}).wait(1).to({graphics:mask_graphics_56,x:3.8,y:-13.5}).wait(1).to({graphics:mask_graphics_57,x:3,y:-12.7}).wait(1).to({graphics:mask_graphics_58,x:2.3,y:-11.9}).wait(1).to({graphics:mask_graphics_59,x:1.5,y:-11.1}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AnIHQQFQrCJBjd");
	this.shape.setTransform(2.8,-4.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.2,-61.9,21.2,20.3);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-27,21.4,1,1,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:33.2,y:-27},44).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AiggCIA+gvIBvCTIg9Aug");
	var mask_graphics_1 = new cjs.Graphics().p("AhcgtIBKg4IBvCSIhKA5g");
	var mask_graphics_2 = new cjs.Graphics().p("AhjgoIBYhCIBvCSIhYBDg");
	var mask_graphics_3 = new cjs.Graphics().p("AhpgjIBkhLIBvCSIhkBMg");
	var mask_graphics_4 = new cjs.Graphics().p("AhvgeIBvhVIBwCSIhwBVg");
	var mask_graphics_5 = new cjs.Graphics().p("Ah1gZIB8hfIBvCTIh8Beg");
	var mask_graphics_6 = new cjs.Graphics().p("Ah8gUICJhpIBwCSIiJBpg");
	var mask_graphics_7 = new cjs.Graphics().p("AiCgQICVhxIBwCSIiVBxg");
	var mask_graphics_8 = new cjs.Graphics().p("AiIgLICih7IBvCSIiiB7g");
	var mask_graphics_9 = new cjs.Graphics().p("AiPgGICviFIBvCSIitCFg");
	var mask_graphics_10 = new cjs.Graphics().p("AiVgCIC7iOIBwCTIi7COg");
	var mask_graphics_11 = new cjs.Graphics().p("AibACIDHiXIBwCUIjHCXg");
	var mask_graphics_12 = new cjs.Graphics().p("AiiAHIDUihIBwCUIjTCgg");
	var mask_graphics_13 = new cjs.Graphics().p("AioAMIDhiqIBwCTIjhCqg");
	var mask_graphics_14 = new cjs.Graphics().p("AiuARIDti0IBwCUIjtCzg");
	var mask_graphics_15 = new cjs.Graphics().p("Ai0AVID5i9IBwCUIj5C9g");
	var mask_graphics_16 = new cjs.Graphics().p("Ai6AaIEFjHIBxCUIkHDHg");
	var mask_graphics_17 = new cjs.Graphics().p("AjBAfIETjQIBwCTIkTDQg");
	var mask_graphics_18 = new cjs.Graphics().p("AjHAjIEfjZIBwCTIkfDag");
	var mask_graphics_19 = new cjs.Graphics().p("AjNAoIErjjIBxCTIktDkg");
	var mask_graphics_20 = new cjs.Graphics().p("AjUAtIE5jsIBwCTIk5Dsg");
	var mask_graphics_21 = new cjs.Graphics().p("AjaAyIFFj2IBwCTIlFD2g");
	var mask_graphics_22 = new cjs.Graphics().p("AjhA2IFSj/IBxCTIlSEAg");
	var mask_graphics_23 = new cjs.Graphics().p("AjnA7IFfkJIBwCTIlfEKg");
	var mask_graphics_24 = new cjs.Graphics().p("AjtBAIFrkTIBwCUIlrETg");
	var mask_graphics_25 = new cjs.Graphics().p("AjzBFIF3kcIBwCTIl3Ecg");
	var mask_graphics_26 = new cjs.Graphics().p("Aj6BKIGEkmIBxCTImFEmg");
	var mask_graphics_27 = new cjs.Graphics().p("AkABPIGRkwIBwCTImREwg");
	var mask_graphics_28 = new cjs.Graphics().p("AkGBTIGdk5IBwCUImdE5g");
	var mask_graphics_29 = new cjs.Graphics().p("AkNBYIGqlCIBxCTImrFCg");
	var mask_graphics_30 = new cjs.Graphics().p("AkTBdIG3lMIBwCTIm3FMg");
	var mask_graphics_31 = new cjs.Graphics().p("AkZBhIHDlVIBwCUInDFVg");
	var mask_graphics_32 = new cjs.Graphics().p("AkfBmIHPlfIBwCUInPFfg");
	var mask_graphics_33 = new cjs.Graphics().p("AklBrIHclpIBwCUIndFpg");
	var mask_graphics_34 = new cjs.Graphics().p("AksBwIHplyIBwCTInpFyg");
	var mask_graphics_35 = new cjs.Graphics().p("AkyB1IH1l8IBwCUIn1F7g");
	var mask_graphics_36 = new cjs.Graphics().p("Ak4B6IIBmGIBwCUIoBGFg");
	var mask_graphics_37 = new cjs.Graphics().p("Ak/B+IIPmPIBwCUIoPGPg");
	var mask_graphics_38 = new cjs.Graphics().p("AlFCDIIbmYIBwCTIobGYg");
	var mask_graphics_39 = new cjs.Graphics().p("AlLCIIInmiIBwCTIonGig");
	var mask_graphics_40 = new cjs.Graphics().p("AlSCMII1mrIBwCTIo1Gsg");
	var mask_graphics_41 = new cjs.Graphics().p("AlYCRIJBm1IBwCUIpBG1g");
	var mask_graphics_42 = new cjs.Graphics().p("AleCWIJNm+IBwCTIpNG+g");
	var mask_graphics_43 = new cjs.Graphics().p("AlkCbIJanIIBvCTIpaHIg");
	var mask_graphics_44 = new cjs.Graphics().p("AlrCgIJnnSIBwCTIpnHSg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-16.1,y:14.4}).wait(1).to({graphics:mask_graphics_1,x:-22.9,y:18.7}).wait(1).to({graphics:mask_graphics_2,x:-22.2,y:18.2}).wait(1).to({graphics:mask_graphics_3,x:-21.6,y:17.7}).wait(1).to({graphics:mask_graphics_4,x:-20.9,y:17.2}).wait(1).to({graphics:mask_graphics_5,x:-20.3,y:16.8}).wait(1).to({graphics:mask_graphics_6,x:-19.7,y:16.3}).wait(1).to({graphics:mask_graphics_7,x:-19,y:15.8}).wait(1).to({graphics:mask_graphics_8,x:-18.4,y:15.3}).wait(1).to({graphics:mask_graphics_9,x:-17.7,y:14.8}).wait(1).to({graphics:mask_graphics_10,x:-17.1,y:14.3}).wait(1).to({graphics:mask_graphics_11,x:-16.5,y:13.8}).wait(1).to({graphics:mask_graphics_12,x:-15.8,y:13.3}).wait(1).to({graphics:mask_graphics_13,x:-15.2,y:12.8}).wait(1).to({graphics:mask_graphics_14,x:-14.5,y:12.4}).wait(1).to({graphics:mask_graphics_15,x:-13.9,y:11.9}).wait(1).to({graphics:mask_graphics_16,x:-13.3,y:11.4}).wait(1).to({graphics:mask_graphics_17,x:-12.6,y:10.9}).wait(1).to({graphics:mask_graphics_18,x:-12,y:10.4}).wait(1).to({graphics:mask_graphics_19,x:-11.4,y:9.9}).wait(1).to({graphics:mask_graphics_20,x:-10.7,y:9.4}).wait(1).to({graphics:mask_graphics_21,x:-10.1,y:8.9}).wait(1).to({graphics:mask_graphics_22,x:-9.4,y:8.5}).wait(1).to({graphics:mask_graphics_23,x:-8.8,y:8}).wait(1).to({graphics:mask_graphics_24,x:-8.2,y:7.5}).wait(1).to({graphics:mask_graphics_25,x:-7.5,y:7}).wait(1).to({graphics:mask_graphics_26,x:-6.9,y:6.5}).wait(1).to({graphics:mask_graphics_27,x:-6.3,y:6}).wait(1).to({graphics:mask_graphics_28,x:-5.6,y:5.5}).wait(1).to({graphics:mask_graphics_29,x:-5,y:5}).wait(1).to({graphics:mask_graphics_30,x:-4.4,y:4.5}).wait(1).to({graphics:mask_graphics_31,x:-3.7,y:4.1}).wait(1).to({graphics:mask_graphics_32,x:-3.1,y:3.6}).wait(1).to({graphics:mask_graphics_33,x:-2.4,y:3.1}).wait(1).to({graphics:mask_graphics_34,x:-1.8,y:2.6}).wait(1).to({graphics:mask_graphics_35,x:-1.2,y:2.1}).wait(1).to({graphics:mask_graphics_36,x:-0.5,y:1.6}).wait(1).to({graphics:mask_graphics_37,x:0.1,y:1.1}).wait(1).to({graphics:mask_graphics_38,x:0.8,y:0.6}).wait(1).to({graphics:mask_graphics_39,x:1.4,y:0.1}).wait(1).to({graphics:mask_graphics_40,x:2,y:-0.3}).wait(1).to({graphics:mask_graphics_41,x:2.7,y:-0.8}).wait(1).to({graphics:mask_graphics_42,x:3.3,y:-1.3}).wait(1).to({graphics:mask_graphics_43,x:4,y:-1.8}).wait(1).to({graphics:mask_graphics_44,x:4.6,y:-2.3}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AjtEeQCxkJEqkx");
	this.shape.setTransform(3.5,-4.5,1,1,-167.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.7,9.5,22,21.7);


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
(lib.WS_Cursive_G = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_698 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(698).call(this.frame_698).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(94.8,420);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[94.9,420,140.6,388.8,183.5,348.6,226.4,308.4,267.8,264.8,309.2,221.3,328.6,196.7,348.1,172,351.5,146.4]}},135).wait(15).to({startPosition:0},0).to({guide:{path:[351.6,146.3,339.1,112.5,297.7,144.2,256.2,176.1,259.5,231.7,262.7,287.3,316,278.2,369.2,269,418.8,241.1]}},135).wait(15).to({x:453.8,y:196.1},0).to({guide:{path:[454.3,197.2,413.8,242.5,387.5,292.1,361.1,341.7,323,388.9,284.9,436.1,231,420.3,177.1,404.5,158.8,354,141.7,306.8,140,285.1]}},234).wait(15).to({x:141.1,y:286.2},0).to({guide:{path:[141.1,286.1,145.2,314.7,176.1,329.4,207,344.1,264.8,344.9]}},60).wait(15).to({startPosition:0},0).to({guide:{path:[264.8,345,255,318,236.8,295.6,217.8,272.2,192.7,255.8,167.1,239.1,136.5,241.4,105.8,244,85.9,267.5,69,287.7,47.2,302.5,22.4,319.3,-6,327.8,-35.1,336.5,-63.8,327.4,-90.2,319,-110.9,300.8,-115.8,296.5,-120.5,292]}},65).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(351.8,147.9,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},135).wait(15).to({_off:false,x:418.8,y:240.9},0).to({_off:true},135).wait(15).to({_off:false,x:140.8,y:285.9},0).to({_off:true},234).wait(15).to({_off:false,x:265.8,y:344.9},0).to({_off:true},60).wait(81));

	// Layer 6
	this.instance_1 = new lib.ar4("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(218,272.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(558).to({_off:false},0).wait(141));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_558 = new cjs.Graphics().p("AtHWVQgBoGFultQFvlvIFAAQIFAAFuFvQFvFtAAIGg");
	var mask_graphics_559 = new cjs.Graphics().p("An7IsQFgl8IFgUQIFgUF8FgQF8FfAUIFMgnBABhQgUoFFfl8g");
	var mask_graphics_560 = new cjs.Graphics().p("AoaI4QFRmJIEgpQIEgoGJFRQGJFQApIFMgm8ADBQgooEFQmJg");
	var mask_graphics_561 = new cjs.Graphics().p("Ao2JGQFBmXICg8QICg8GWFBQGWFBA8ICMgmyAEjQg8oDFBmVg");
	var mask_graphics_562 = new cjs.Graphics().p("ApQJUQExmiH/hQQIAhQGhExQGjEwBQIAMgmlAGDQhQoAExmig");
	var mask_graphics_563 = new cjs.Graphics().p("ApoJkQEhmuH7hkQH9hjGtEgQGuEgBkH9MgmUAHhQhkn8Egmtg");
	var mask_graphics_564 = new cjs.Graphics().p("Ap9J1QEQm5H3h3QH4h3G4EQQG5EPB3H3Mgl/AJBQh3n4EPm4g");
	var mask_graphics_565 = new cjs.Graphics().p("AqPKIQD+nEHyiLQHziJHCD9QHDD+CLHzMglmAKfQiLnzD+nCg");
	var mask_graphics_566 = new cjs.Graphics().p("AqfKbQDtnNHsieQHtidHMDsQHMDsCeHtMglKAL8QifntDtnMg");
	var mask_graphics_567 = new cjs.Graphics().p("AqtKwQDbnWHmixQHmiwHVDaQHVDaCyHnMgksANXQixnnDanUg");
	var mask_graphics_568 = new cjs.Graphics().p("Aq3LGQDIneHfjEQHfjDHdDIQHdDIDEHfMgkIAOxQjEnfDIncg");
	var mask_graphics_569 = new cjs.Graphics().p("ArALcQC2nlHYjWQHWjVHkC1QHlC1DWHXMgjiAQLQjWnYC1nkg");
	var mask_graphics_570 = new cjs.Graphics().p("ArFL0QCjnsHOjoQHOjnHrCjQHrChDpHOMgi4ARiQjpnOCjnrg");
	var mask_graphics_571 = new cjs.Graphics().p("ArIMNQCQnyHFj6QHEj5HxCQQHxCOD6HFMgiKAS4Qj6nFCPnxg");
	var mask_graphics_572 = new cjs.Graphics().p("ArIMnQB8n3G7kLQG6kLH2B9QH3B6ELG7MghaAUMQkLm7B8n2g");
	var mask_graphics_573 = new cjs.Graphics().p("ArGNCQBon8GxkcQGvkcH7BqQH7BnEcGwMggmAVdQkdmwBpn6g");
	var mask_graphics_574 = new cjs.Graphics().p("ArBNeQBVn/GlkuQGkksH+BWQH+BUEuGkI/wWtQktmlBVn9g");
	var mask_graphics_575 = new cjs.Graphics().p("Aq6N6QBBoCGZk9QGYk8ICBBQIBBBE9GYI+1X7Qk9mZBAoBg");
	var mask_graphics_576 = new cjs.Graphics().p("AqwOXQAtoEGNlMQGLlMIEAtQIDAtFNGLI95ZGQlMmMAsoDg");
	var mask_graphics_577 = new cjs.Graphics().p("AqjO2QAZoGF/lcQF/lbIEAaQIFAYFcF+I85aQQlcmAAZoDg");
	var mask_graphics_578 = new cjs.Graphics().p("AqTPUQAEoGFylqQFwlqIFAGQIGAEFqFxI72bVQlqlxAFoFg");
	var mask_graphics_579 = new cjs.Graphics().p("AqCP0QgPoGFjl4QFil4IFgOQIFgQF5FiI6xcZQl4ljgQoEg");
	var mask_graphics_580 = new cjs.Graphics().p("AptQUQgjoFFUmGQFTmFIEgiQIEgkGGFTI5pdaQmGlUgjoDg");
	var mask_graphics_581 = new cjs.Graphics().p("ApWQ1Qg4oDFFmTQFFmSIBg3QICg3GTFEI4eeYQmTlFg3oBg");
	var mask_graphics_582 = new cjs.Graphics().p("Ao9RWQhLoAE1mgQE1meH+hKQIAhMGfE1I3SfTQmfk1hLn/g");
	var mask_graphics_583 = new cjs.Graphics().p("AohR4Qhfn9EkmrQElmqH7heQH9hgGqElMgWCAgLQmrklhfn7g");
	var mask_graphics_584 = new cjs.Graphics().p("AoDSaQhzn5EUm2QEUm1H3hyQH4hzG2EUMgUzAhAQm1kUhyn3g");
	var mask_graphics_585 = new cjs.Graphics().p("AnjS8QiGn0EDnAQECm/HziGQHziGHAECMgTfAhzQnAkDiGnzg");
	var mask_graphics_586 = new cjs.Graphics().p("AnATfQiZnuDxnKQDxnJHtiZQHtiaHKDxMgSLAihQnJjxiZntg");
	var mask_graphics_587 = new cjs.Graphics().p("AmbUCQisnoDfnTQDfnSHmirQHoitHSDfMgQ0AjMQnSjfisnng");
	var mask_graphics_588 = new cjs.Graphics().p("Al0UmQi/nhDNncQDNnaHfi+QHgjAHbDNMgPcAj0QnajNi/nfg");
	var mask_graphics_589 = new cjs.Graphics().p("Ak4VZQjanWCynmQCynlHVjZQHUjaHmCyMgNbAkoQnliyjZnUg");
	var mask_graphics_590 = new cjs.Graphics().p("Aj4WMQj0nJCXnvQCXnuHHjzQHIj0HvCXMgLXAlUQnuiXjznHg");
	var mask_graphics_591 = new cjs.Graphics().p("Ai1W/QkMm7B7n3QB7n2G6kLQG5kMH3B7MgJSAl4Qn3h7kLm5g");
	var mask_graphics_592 = new cjs.Graphics().p("AhtXyQklmrBfn9QBfn9GqkiQGqklH9BfMgHKAmWQn9hfkjmqg");
	var mask_graphics_593 = new cjs.Graphics().p("AgiYlQk8mbBDoBQBCoBGZk6QGak8IBBCMgFCAmsQoBhCk6mZg");
	var mask_graphics_594 = new cjs.Graphics().p("AArZXQlRmIAmoEQAmoFGHlQQGHlSIEAmMgC3Am6QoEgmlSmHg");
	var mask_graphics_595 = new cjs.Graphics().p("AB9aIQlnl0AKoGQAJoFFzlmQF0lnIGAJMgAtAnAQoGgJlml0g");
	var mask_graphics_596 = new cjs.Graphics().p("ACearQl1lmgLoGQgMoFFml0QFll2IFgLMAA2AnAIgfAAQnyAAlplag");
	var mask_graphics_597 = new cjs.Graphics().p("ACpbMQmClXggoFQgfoEFWmCQFWmEIFgfMACXAm8QgrACgrAAQnPAAlik5g");
	var mask_graphics_598 = new cjs.Graphics().p("AC2bsQmQlIgzoDQg0oDFHmQQFGmPIDg0MAD6Am0QhGAHhFAAQmvAAlZkag");
	var mask_graphics_599 = new cjs.Graphics().p("ADFcKQmdk4hIoAQhIoBE4mcQE1mcIBhIMAFbAmnQhgAOhdAAQmRAAlOj8g");
	var mask_graphics_600 = new cjs.Graphics().p("ADUcmQmoknhcn9Qhcn9EnmpQElmoH9hcMAG9AmYQh6AWh0AAQl1AAlDjgg");
	var mask_graphics_601 = new cjs.Graphics().p("ADldBQmzkWhwn5Qhxn5EXm0QEUmzH5hwMAIdAmEQiSAgiLAAQlaAAk2jFg");
	var mask_graphics_602 = new cjs.Graphics().p("AD3daQm+kEiEn1QiEn0EFm+QEDm+H0iEMAJ9AltQipAtiiAAQlAAAkoitg");
	var mask_graphics_603 = new cjs.Graphics().p("AELdyQnIjziYnuQiXnvDznIQDynIHtiXMALbAlSQi+A6i5AAQknAAkYiVg");
	var mask_graphics_604 = new cjs.Graphics().p("AEfeIQnRjhirnoQirnoDhnRQDgnRHnirMAM5AkzQjUBKjPAAQkPAAkIh/g");
	var mask_graphics_605 = new cjs.Graphics().p("AE1ecQnajOi9nhQi+nhDOnaQDNnZHgi+MAOVAkRQjnBbjmAAQj4AAj2hrg");
	var mask_graphics_606 = new cjs.Graphics().p("AFMevQnii7jQnaQjRnZC7nhQC7nhHYjRMAPvAjrQj6Buj8AAQjhAAjjhYg");
	var mask_graphics_607 = new cjs.Graphics().p("AFce7QnmiujenTQjenUCvnmQCtnmHSjeMAQuAjPQkHB8kMAAQjSAAjVhMg");
	var mask_graphics_608 = new cjs.Graphics().p("AFtfGQnrihjqnNQjrnNChnrQCgnrHMjqMARrAixQkSCLkdAAQjCAAjHhBg");
	var mask_graphics_609 = new cjs.Graphics().p("AF+fQQnviTj3nGQj3nHCUnwQCSnuHFj3MASoAiRQkdCbktAAQizAAi5g3g");
	var mask_graphics_610 = new cjs.Graphics().p("AGQfaQnziGkDm/QkEnACGn0QCFnyG+kEMATkAhwQkoCsk+AAQikAAipgtg");
	var mask_graphics_611 = new cjs.Graphics().p("AGjfiQn3h3kQm5QkPm5B4n3QB3n3G3kOMAUfAhNQkyC9lQAAQiUAAiZglg");
	var mask_graphics_612 = new cjs.Graphics().p("AG1fqQn6hqkbmxQkcmxBrn6QBpn7GwkaMAVYAgpQk7DPljAAQiDAAiKgdg");
	var mask_graphics_613 = new cjs.Graphics().p("AHJfxQn9hcknmpQkomqBdn9QBbn9GpkmMAWQAgDQlEDhl1AAQh0AAh4gVg");
	var mask_graphics_614 = new cjs.Graphics().p("AHcf3Qn/hOkzmhQkymhBOoAQBNn/GhkyIXIfbQlMD1mJAAQhjAAhogPg");
	var mask_graphics_615 = new cjs.Graphics().p("AHxf8QoChAk+mZQk+mYBAoCQBAoBGYk+IX/ezQlUEJmdAAQhTAAhVgKg");
	var mask_graphics_616 = new cjs.Graphics().p("EAIFAgAQoEgylImQQlJmQAyoDQAxoDGQlIIY0eIQlbEemyAAQhBAAhEgGg");
	var mask_graphics_617 = new cjs.Graphics().p("EAIbAgDQoFgklTmHQlVmGAloFQAjoEGGlTIZpdcQliE0nIAAQgvAAgxgDg");
	var mask_graphics_618 = new cjs.Graphics().p("AjgcAQmZk9hBoCQhCoBE9maIe4X6Qk9GaoBBBQhYALhVAAQmbAAlTkGg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(558).to({graphics:mask_graphics_558,x:166,y:142.9}).wait(1).to({graphics:mask_graphics_559,x:165.9,y:145.3}).wait(1).to({graphics:mask_graphics_560,x:165.8,y:147.7}).wait(1).to({graphics:mask_graphics_561,x:165.5,y:150.2}).wait(1).to({graphics:mask_graphics_562,x:165.2,y:152.6}).wait(1).to({graphics:mask_graphics_563,x:164.8,y:154.9}).wait(1).to({graphics:mask_graphics_564,x:164.2,y:157.3}).wait(1).to({graphics:mask_graphics_565,x:163.6,y:159.7}).wait(1).to({graphics:mask_graphics_566,x:162.9,y:162}).wait(1).to({graphics:mask_graphics_567,x:162.2,y:164.3}).wait(1).to({graphics:mask_graphics_568,x:161.3,y:166.5}).wait(1).to({graphics:mask_graphics_569,x:160.3,y:168.8}).wait(1).to({graphics:mask_graphics_570,x:159.3,y:170.9}).wait(1).to({graphics:mask_graphics_571,x:158.1,y:173.1}).wait(1).to({graphics:mask_graphics_572,x:156.9,y:175.2}).wait(1).to({graphics:mask_graphics_573,x:155.6,y:177.2}).wait(1).to({graphics:mask_graphics_574,x:154.3,y:179.2}).wait(1).to({graphics:mask_graphics_575,x:152.8,y:181.2}).wait(1).to({graphics:mask_graphics_576,x:151.3,y:183}).wait(1).to({graphics:mask_graphics_577,x:149.7,y:184.9}).wait(1).to({graphics:mask_graphics_578,x:148,y:186.6}).wait(1).to({graphics:mask_graphics_579,x:146.3,y:188.3}).wait(1).to({graphics:mask_graphics_580,x:144.5,y:189.9}).wait(1).to({graphics:mask_graphics_581,x:142.6,y:191.5}).wait(1).to({graphics:mask_graphics_582,x:140.7,y:193}).wait(1).to({graphics:mask_graphics_583,x:138.7,y:194.4}).wait(1).to({graphics:mask_graphics_584,x:136.7,y:195.7}).wait(1).to({graphics:mask_graphics_585,x:134.6,y:197}).wait(1).to({graphics:mask_graphics_586,x:132.5,y:198.1}).wait(1).to({graphics:mask_graphics_587,x:130.3,y:199.2}).wait(1).to({graphics:mask_graphics_588,x:128.1,y:200.2}).wait(1).to({graphics:mask_graphics_589,x:124.9,y:201.5}).wait(1).to({graphics:mask_graphics_590,x:121.6,y:202.6}).wait(1).to({graphics:mask_graphics_591,x:118.3,y:203.5}).wait(1).to({graphics:mask_graphics_592,x:114.9,y:204.3}).wait(1).to({graphics:mask_graphics_593,x:111.5,y:204.8}).wait(1).to({graphics:mask_graphics_594,x:108,y:205.2}).wait(1).to({graphics:mask_graphics_595,x:104.6,y:205.3}).wait(1).to({graphics:mask_graphics_596,x:104.8,y:205.3}).wait(1).to({graphics:mask_graphics_597,x:107.2,y:205.3}).wait(1).to({graphics:mask_graphics_598,x:109.7,y:205.4}).wait(1).to({graphics:mask_graphics_599,x:112.1,y:205.4}).wait(1).to({graphics:mask_graphics_600,x:114.6,y:205.4}).wait(1).to({graphics:mask_graphics_601,x:117,y:205.4}).wait(1).to({graphics:mask_graphics_602,x:119.4,y:205.5}).wait(1).to({graphics:mask_graphics_603,x:121.7,y:205.5}).wait(1).to({graphics:mask_graphics_604,x:124.1,y:205.5}).wait(1).to({graphics:mask_graphics_605,x:126.4,y:205.5}).wait(1).to({graphics:mask_graphics_606,x:128.6,y:205.5}).wait(1).to({graphics:mask_graphics_607,x:130.2,y:205.5}).wait(1).to({graphics:mask_graphics_608,x:131.7,y:205.5}).wait(1).to({graphics:mask_graphics_609,x:133.2,y:205.5}).wait(1).to({graphics:mask_graphics_610,x:134.7,y:205.5}).wait(1).to({graphics:mask_graphics_611,x:136.2,y:205.5}).wait(1).to({graphics:mask_graphics_612,x:137.6,y:205.5}).wait(1).to({graphics:mask_graphics_613,x:139,y:205.4}).wait(1).to({graphics:mask_graphics_614,x:140.4,y:205.4}).wait(1).to({graphics:mask_graphics_615,x:141.8,y:205.4}).wait(1).to({graphics:mask_graphics_616,x:143.1,y:205.4}).wait(1).to({graphics:mask_graphics_617,x:144.5,y:205.4}).wait(1).to({graphics:mask_graphics_618,x:152.9,y:205.4}).wait(81));

	// drawing
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("AhHhjQBRhbBfhiQBfhjBih3QBhh4BniEQBmiEBJiAQBJiAAPhtQACgLAAgLQABhehwhBQh8hIiKBFQiGBDhiBfQgDADgEADQhiBhhBB4QhDB8ggCKQggCPgGCTQgGCQAlCNQAPA/AgA3QBrBoCdASQCcASCGgbQCFgbB/gpQCAgpB/gsQCMgxCHg+QBVgnBQgvQh4CfhcCXQjVFbi0FPQi0FOkiEWQkiEWnphiQnFhajknHQgSglgRgoQi8m1gMjGQgCgoAFgeAcLsBQjPDgieDRA07BxQABAoAGAmQA3E2HmB5QFuldFil0QAAAAAAAAAxJOHQBchQBahVQA+g6A+g6QEWBEGiAGA8KWsQFqj2FXkv");
	this.shape_1.setTransform(275.1,274.8);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(558).to({_off:false},0).wait(141));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_419 = new cjs.Graphics().p("AnmItQE1mgH+hNQIAhLGhEzQGgE0BMIAQBNIAk0Ghg");
	var mask_1_graphics_420 = new cjs.Graphics().p("AnWIOQE9maH/hBQIDhBGZE7QGaE9BBICQBDIBk9Gag");
	var mask_1_graphics_421 = new cjs.Graphics().p("AnGHwQFFmTIBg4QIEg2GTFEQGTFFA3IDQA4IDlGGTg");
	var mask_1_graphics_422 = new cjs.Graphics().p("Am1HSQFNmMICgtQIEgsGNFNQGMFNAsIEQAuIDlOGNg");
	var mask_1_graphics_423 = new cjs.Graphics().p("AmkG1QFVmGIDgiQIFghGGFVQGFFVAhIFQAjIElVGGg");
	var mask_1_graphics_424 = new cjs.Graphics().p("AmTGYQFdl/IEgXQIGgWF+FcQF+FeAXIFQAYIFleF+g");
	var mask_1_graphics_425 = new cjs.Graphics().p("AmBF8QFll3IEgMQIGgNF3FlQF3FlAMIFQANIGllF3g");
	var mask_1_graphics_426 = new cjs.Graphics().p("AlvFgQFtlvIDgCQIHgCFvFsQFwFtABIGQADIFltFwg");
	var mask_1_graphics_427 = new cjs.Graphics().p("AldFFQFzlnIFAIQIGAJFoF0QFpF0gKIFQgIIGl0Fog");
	var mask_1_graphics_428 = new cjs.Graphics().p("AlKEqQF6lfIFATQIGAUFgF6QFgF8gUIFQgSIGl8Fgg");
	var mask_1_graphics_429 = new cjs.Graphics().p("Ak3EQQGClXIEAeQIFAeFYGCQFZGDgfIEQgdIFmDFYg");
	var mask_1_graphics_430 = new cjs.Graphics().p("AkkD3QGJlQIDApQIFApFQGJQFQGKgpIEQgoIEmKFQg");
	var mask_1_graphics_431 = new cjs.Graphics().p("AkQDeQGPlHIDAzQIDAzFJGQQFIGRg0IDQgzIDmRFIg");
	var mask_1_graphics_432 = new cjs.Graphics().p("Aj8DGQGWk/IBA+QIDA9FAGXQE/GYg+ICQg+ICmXE/g");
	var mask_1_graphics_433 = new cjs.Graphics().p("AjoCuQGdk2IABIQIBBIE3GeQE3GehJIAQhIIBmeE3g");
	var mask_1_graphics_434 = new cjs.Graphics().p("AjUCXQGkktH+BTQH/BSEvGkQEvGkhUH/QhSH/mlEvg");
	var mask_1_graphics_435 = new cjs.Graphics().p("Ai/CBQGqklH8BeQH+BcEmGrQEmGqheH9QhdH9mrEmg");
	var mask_1_graphics_436 = new cjs.Graphics().p("AipBrQGvkcH6BoQH8BnEdGxQEdGwhpH7QhnH7mwEdg");
	var mask_1_graphics_437 = new cjs.Graphics().p("AiUBXQG1kUH4BzQH6BxEUG3QEUG2hzH4QhyH5m2EUg");
	var mask_1_graphics_438 = new cjs.Graphics().p("Ah+BCQG7kKH1B9QH3B8ELG8QELG8h9H2Qh8H2m8ELg");
	var mask_1_graphics_439 = new cjs.Graphics().p("AhoAvQHAkBHzCHQH0CGECHBQECHCiIHzQiGH0nCECg");
	var mask_1_graphics_440 = new cjs.Graphics().p("AhSAcQHGj4HwCSQHxCQD5HHQD4HGiSHxQiRHwnGD5g");
	var mask_1_graphics_441 = new cjs.Graphics().p("Ag7AKQHKjvHtCcQHvCbDvHLQDvHMidHtQibHunLDvg");
	var mask_1_graphics_442 = new cjs.Graphics().p("AgkgHQHPjlHqClQHrClDlHQQDmHRinHqQilHqnQDmg");
	var mask_1_graphics_443 = new cjs.Graphics().p("AgNgYQHUjcHmCwQHnCvDcHVQDcHViwHnQivHnnVDbg");
	var mask_1_graphics_444 = new cjs.Graphics().p("AAJgoQHajSHiC6QHkC5DSHZQDSHai6HiQi5HknaDSg");
	var mask_1_graphics_445 = new cjs.Graphics().p("AAhg3QHejIHeDDQHgDDDIHeQDJHdjFHfQjDHgneDIg");
	var mask_1_graphics_446 = new cjs.Graphics().p("AA5hGQHii+HaDNQHbDNC/HiQC/HhjPHbQjNHbnhC/g");
	var mask_1_graphics_447 = new cjs.Graphics().p("ABRhTQHmi1HVDXQHYDXC0HlQC1HmjYHWQjXHXnlC0g");
	var mask_1_graphics_448 = new cjs.Graphics().p("ABphhQHpiqHSDhQHTDgCqHpQCrHpjiHSQjhHSnpCrg");
	var mask_1_graphics_449 = new cjs.Graphics().p("ACChtQHsigHNDqQHODqCgHsQChHtjsHNQjpHOntCgg");
	var mask_1_graphics_450 = new cjs.Graphics().p("ACbh4QHviXHID0QHJDzCWHwQCWHwj0HIQj0HJnvCWg");
	var mask_1_graphics_451 = new cjs.Graphics().p("ACziDQHziMHDD9QHED9CLHyQCMHzj+HDQj8HDnzCMg");
	var mask_1_graphics_452 = new cjs.Graphics().p("ADMiNQH2iCG9EGQG/EGCBH2QCCH1kHG+QkGG+n2CCg");
	var mask_1_graphics_453 = new cjs.Graphics().p("ADmiXQH4h3G3EPQG5EQB4H4QB3H4kRG4QkPG5n4B3g");
	var mask_1_graphics_454 = new cjs.Graphics().p("AD/ifQH6htGyEXQG0EaBsH6QBtH6kZGzQkYGzn7Btg");
	var mask_1_graphics_455 = new cjs.Graphics().p("AEYinQH9hiGsEgQGtEiBjH9QBiH8kiGtQkhGtn9Big");
	var mask_1_graphics_456 = new cjs.Graphics().p("AEyiuQH+hYGmEpQGoErBYH/QBXH+krGnQkqGnn+BYg");
	var mask_1_graphics_457 = new cjs.Graphics().p("AFLi0QIAhNGgExQGhE0BOIAQBNIAk0GgQkyGhoABOg");
	var mask_1_graphics_458 = new cjs.Graphics().p("AFli5QIChDGZE6QGbE8BDICQBCICk8GZQk7GboCBCg");
	var mask_1_graphics_459 = new cjs.Graphics().p("AF/i+QIDg4GTFDQGUFEA4IDQA4IDlFGTQlDGUoDA4g");
	var mask_1_graphics_460 = new cjs.Graphics().p("AGZjCQIDgtGNFLQGNFMAtIEQAuIElNGNQlMGNoEAtg");
	var mask_1_graphics_461 = new cjs.Graphics().p("AGyjFQIFgjGFFTQGHFVAjIFQAiIFlUGFQlUGGoFAjg");
	var mask_1_graphics_462 = new cjs.Graphics().p("AHMjHQIGgYF+FbQF/FdAYIFQAYIFldF/QlbF/oGAYg");
	var mask_1_graphics_463 = new cjs.Graphics().p("AHmjIQIGgOF3FjQF4FlANIFQAOIGllF3QlkF4oFAOg");
	var mask_1_graphics_464 = new cjs.Graphics().p("AIAjJQIGgDFvFrQFxFsADIGQACIGlsFvQlrFxoGADg");
	var mask_1_graphics_465 = new cjs.Graphics().p("EAH0Aj6MAAmgnDQIFAIFoFyQFpF0gIIGQgHIGl0FnQlrFin4AAIgWAAg");
	var mask_1_graphics_466 = new cjs.Graphics().p("EAHaAj5MABZgnBQIGASFgF5QFhF8gSIFQgTIGl7FgQlnFQnmAAIgzgBg");
	var mask_1_graphics_467 = new cjs.Graphics().p("EAGzAj2MACngm8QIFAiFUGEQFVGHgiIEQgjIFmGFUQlhE2nLAAQguAAgwgEg");
	var mask_1_graphics_468 = new cjs.Graphics().p("EAGMAjzMAD1gm2QIEAzFHGOQFJGRgzIDQgzIEmQFHQlaEdmxAAQhDAAhFgHg");
	var mask_1_graphics_469 = new cjs.Graphics().p("EAFlAjuMAFDgmtQICBDE7GZQE8GahDICQhDIBmbE7QlSEFmZAAQhWAAhagMg");
	var mask_1_graphics_470 = new cjs.Graphics().p("EAE+AjoMAGRgmhQH/BTEuGiQEvGkhTH/QhTIAmlEtQlJDumCAAQhpAAhugSg");
	var mask_1_graphics_471 = new cjs.Graphics().p("EAEXAjhMAHegmUQH8BjEhGsQEiGuhkH8QhjH8mtEhQlADXlrAAQh9AAiBgZg");
	var mask_1_graphics_472 = new cjs.Graphics().p("EADwAjZMAIrgmEQH5BzETG1QEUG2hzH5QhzH5m2ETQk1DDlXAAQiOAAiVgig");
	var mask_1_graphics_473 = new cjs.Graphics().p("EADKAjPMAJ3glxQH1CDEFG9QEGG/iCH1QiDH1m/EFQkpCvlDAAQigAAingsg");
	var mask_1_graphics_474 = new cjs.Graphics().p("EACkAjFMALDglcQHwCSD4HFQD3HHiSHxQiSHwnHD3QkeCckuAAQiyAAi5g2g");
	var mask_1_graphics_475 = new cjs.Graphics().p("EAB/Ai5MAMNglFQHsChDpHOQDpHOiiHsQiiHsnODoQkRCKkbAAQjEAAjJhCg");
	var mask_1_graphics_476 = new cjs.Graphics().p("EABaAisMANXgkrQHnCxDaHUQDbHViyHnQixHmnVDaQkDB5kJAAQjWAAjZhPg");
	var mask_1_graphics_477 = new cjs.Graphics().p("EAA1AieMAOhgkPQHgDADMHbQDMHcjBHgQjAHhncDLQj1Bpj2AAQjoAAjphdg");
	var mask_1_graphics_478 = new cjs.Graphics().p("EAARAiPMAPpgjwQHaDOC9HhQC8HijPHbQjPHaniC8QjmBajkAAQj6AAj4hsg");
	var mask_1_graphics_479 = new cjs.Graphics().p("EgASAh+MAQwgjPQHTDdCtHnQCuHojeHTQjeHUnoCtQjWBMjSAAQkMAAkGh9g");
	var mask_1_graphics_480 = new cjs.Graphics().p("EgA0AhtMAR1gitQHMDsCeHsQCeHtjsHNQjtHMntCdQjFBAjBAAQkfAAkSiOg");
	var mask_1_graphics_481 = new cjs.Graphics().p("EgBXAhbMAS7giIQHED6CPHxQCOHyj7HEQj7HFnxCOQi1A0iuAAQkzAAkfigg");
	var mask_1_graphics_482 = new cjs.Graphics().p("EgB5AhIMAT/ghhQG8EIB/H1QB/H2kJG8QkJG9n2B+QijAqicAAQlGAAksizg");
	var mask_1_graphics_483 = new cjs.Graphics().p("EgCaAgzMAVBgg3QG0EWBvH4QBvH6kWG0QkXG0n6BuQiQAgiLAAQlaAAk3jHg");
	var mask_1_graphics_484 = new cjs.Graphics().p("EgC6AgeMAWCggNQGrEkBfH8QBgH9klGrQkkGrn9BeQh9AYh5AAQlvAAlBjcg");
	var mask_1_graphics_485 = new cjs.Graphics().p("EgDaAgHIXD/fQGhExBPH/QBPIAkxGhQkyGin/BOQhqARhmAAQmGAAlKjzg");
	var mask_1_graphics_486 = new cjs.Graphics().p("Aj5fwIYB+wQGYE+A/IBQA/ICk/GYQk+GYoCA+QhVALhTAAQmdAAlTkKg");
	var mask_1_graphics_487 = new cjs.Graphics().p("AkXfYIY+9/QGNFLAvICQAvIElLGNQlLGOoDAuQhBAGg/AAQm1AAlbkhg");
	var mask_1_graphics_488 = new cjs.Graphics().p("Ak0e+IZ59LQGDFXAeIEQAfIElXGDQlYGDoEAeQgrADgrAAQnPAAlhk7g");
	var mask_1_graphics_489 = new cjs.Graphics().p("AlRekIaz8XQF4FkAOIEQAPIFlkF4QljF4oFAOIgqABQnqAAlolVg");
	var mask_1_graphics_490 = new cjs.Graphics().p("EAIEAj5QoEgBltlvIbr7gQFsFvgBIEQgCIGlvFtQltFqoAAAIgHAAg");
	var mask_1_graphics_491 = new cjs.Graphics().p("EAHdAj4QoEgRlhl7Ich6nQFhF6gSIEQgSIGl6FhQloFPnkAAIgzgBg");
	var mask_1_graphics_492 = new cjs.Graphics().p("EAG1Aj2QoDgilUmFIdV5tQFVGFgiIDQgiIFmGFVQlhE1nJAAQgvAAgwgDg");
	var mask_1_graphics_493 = new cjs.Graphics().p("EAGOAjyQoBgxlJmQIeI4xQFJGPgzICQgyIDmQFJQlaEcmwAAQhDAAhFgHg");
	var mask_1_graphics_494 = new cjs.Graphics().p("EAFnAjuQoAhCk7maIe430QE8GahCIAQhDIBmZE8QlSEEmYAAQhXAAhagLg");
	var mask_1_graphics_495 = new cjs.Graphics().p("EAFAAjoQn9hSkvmjIfo22QEuGkhSH9QhTH/mjEvQlJDumBAAQhqAAhugSg");
	var mask_1_graphics_496 = new cjs.Graphics().p("EAEZAjhQn6hikimtMAgVgV1QEhGthiH7QhjH8msEhQlADYlrAAQh8AAiCgZg");
	var mask_1_graphics_497 = new cjs.Graphics().p("EADzAjYQn3hxkUm2MAg/gUzQEUG1hyH4QhzH5m1EUQk1DClWAAQiPAAiUgig");
	var mask_1_graphics_498 = new cjs.Graphics().p("EADNAjPQn0iBkGm/MAhogTwQEGG+iCH0QiCH1m+EGQkqCulBAAQihAAimgrg");
	var mask_1_graphics_499 = new cjs.Graphics().p("EACnAjEQnviRj4nGMAiOgSsQD4HGiRHvQiSHxnGD4QkeCckuAAQiyAAi4g3g");
	var mask_1_graphics_500 = new cjs.Graphics().p("EACBAi4QnqigjqnOMAizgRmQDpHNihHrQihHrnNDqQkRCKkbAAQjEAAjJhDg");
	var mask_1_graphics_501 = new cjs.Graphics().p("EABmAivQnnisjenTMAjMgQzQDeHTisHnQisHonTDeQkHB+kNAAQjRAAjVhMg");
	var mask_1_graphics_502 = new cjs.Graphics().p("EABLAilQnji3jUnYMAjlgP/QDUHYi4HjQi4HjnXDUQj9Byj/AAQjfAAjghWg");
	var mask_1_graphics_503 = new cjs.Graphics().p("EAAwAibQnejCjJndMAj7gPLQDJHdjCHeQjDHgndDJQjyBmjyAAQjrAAjshgg");
	var mask_1_graphics_504 = new cjs.Graphics().p("EAAWAiQQnajNi+niMAkRgOVQC+HhjNHaQjOHbnhC+QjnBbjlAAQj5AAj2hrg");
	var mask_1_graphics_505 = new cjs.Graphics().p("EgAEAiEQnVjYiznlMAklgNgQCzHljYHVQjZHWnlCzQjbBRjYAAQkGAAkBh3g");
	var mask_1_graphics_506 = new cjs.Graphics().p("EgAeAh4QnQjjionpMAk5gMqQCoHpjjHQQjkHRnpCoQjQBHjLAAQkTAAkLiDg");
	var mask_1_graphics_507 = new cjs.Graphics().p("EgA3AhrQnLjtidnuMAlLgLzQCdHujuHKQjuHLntCdQjEA+i+AAQkhAAkUiQg");
	var mask_1_graphics_508 = new cjs.Graphics().p("EgBQAhdQnGj3iRnxMAlcgK8QCRHxj4HEQj5HGnxCRQi3A2iwAAQkwAAkdieg");
	var mask_1_graphics_509 = new cjs.Graphics().p("EgBpAhPQnAkCiGn0MAlsgKEQCFH0kCG/QkDHAn0CFQiqAuikAAQk+AAkmisg");
	var mask_1_graphics_510 = new cjs.Graphics().p("EgCCAhBQm6kMh6n3MAl6gJNQB6H2kNG5QkNG7n3B6QidAmiWAAQlNAAkvi6g");
	var mask_1_graphics_511 = new cjs.Graphics().p("EgCaAgyQm0kXhun5MAmHgIVQBuH5kXGzQkXG0n6BuQiPAfiJAAQlcAAk3jIg");
	var mask_1_graphics_512 = new cjs.Graphics().p("EgCyAgiQmtkghjn8MAmTgHdQBiH8kgGsQkiGtn8BjQiBAZh8AAQlsAAk+jYg");
	var mask_1_graphics_513 = new cjs.Graphics().p("EgDJAgSQmnkqhXn+MAmdgGkQBXH+kqGlQksGnn+BXQhzAThuAAQl8AAlFjog");
	var mask_1_graphics_514 = new cjs.Graphics().p("EgDhAgCQmfk0hLoAMAmmgFsQBLIAk0GeQk1GgoABLQhkAPhhAAQmMAAlNj4g");
	var mask_1_graphics_515 = new cjs.Graphics().p("Aj3fwQmZk9g/oCMAmugEyQA/IBk9GYQk/GYoBA/QhWALhSAAQmeAAlSkKg");
	var mask_1_graphics_516 = new cjs.Graphics().p("AkOffQmQlHg0oDMAm0gD6QA0IDlHGQQlIGRoDA0QhGAHhEAAQmvAAlZkbg");
	var mask_1_graphics_517 = new cjs.Graphics().p("AkkfMQmJlQgooEMAm6gDAQAoIElQGIQlRGKoEAnQg3AFg1AAQnCAAlekug");
	var mask_1_graphics_518 = new cjs.Graphics().p("Ak5e5QmBlYgcoFMAm9gCHQAcIFlZGAQlaGCoFAcQgmACgmAAQnVAAljlBg");
	var mask_1_graphics_519 = new cjs.Graphics().p("AlOemQl6ligQoFMAnAgBNQAQIFlhF4QljF6oFAQIgtABQnpAAlnlUg");
	var mask_1_graphics_520 = new cjs.Graphics().p("AljeSQlxlqgEoGMAnBgATQAEIFlqFwQlsFxoFAEIgMABQn+AAlrlog");
	var mask_1_graphics_521 = new cjs.Graphics().p("EAH1Aj5QoEgHlol0QlplzAIoFMAnBAAlQgIIGlzFoQlrFhn4AAIgWgBg");
	var mask_1_graphics_522 = new cjs.Graphics().p("EAHZAj5QoFgUlfl8Qlgl7AUoFMAm/ABfQgTIFl7FfQloFOnjAAIg2gBg");
	var mask_1_graphics_523 = new cjs.Graphics().p("EAG9Aj3QoEgflWmEQlXmDAfoFMAm9ACZQggIEmDFXQljE6nPAAQgrAAgrgDg");
	var mask_1_graphics_524 = new cjs.Graphics().p("EAGhAj1QoDgslNmLQlOmLAroEMAm5ADSQgsIEmKFNQlfEom8AAQg6AAg7gFg");
	var mask_1_graphics_525 = new cjs.Graphics().p("EAGGAjyQoCg3lEmTQlFmTA3oDMAmzAEMQg3ICmSFEQlZEWmqAAQhIAAhLgIg");
	var mask_1_graphics_526 = new cjs.Graphics().p("EAFrAjvQoAhEk7maQk8maBDoBMAmtAFEQhDIBmaE7QlTEEmYAAQhXAAhagLg");
	var mask_1_graphics_527 = new cjs.Graphics().p("EAFQAjqQn+hPkxmhQkzmhBPoAMAmlAF9QhPIAmhExQlMD0mIAAQhlAAhpgRg");
	var mask_1_graphics_528 = new cjs.Graphics().p("EAE2AjlQn8hakompQkomoBan9MAmbAG1QhaH+moEoQlFDjl3AAQhzAAh4gWg");
	var mask_1_graphics_529 = new cjs.Graphics().p("EAEdAjgQn7hmkdmwQkfmuBmn8MAmRAHvQhnH7muEeQk+DTlnAAQiAAAiGgbg");
	var mask_1_graphics_530 = new cjs.Graphics().p("EAEEAjaQn4hykUm2QkVm1Byn5MAmFAImQhyH6m1ETQk2DElYAAQiOAAiTghg");
	var mask_1_graphics_531 = new cjs.Graphics().p("EADrAjTQn1h+kKm8QkKm7B9n2MAl4AJeQh+H3m7EJQkuC1lJAAQibAAihgog");
	var mask_1_graphics_532 = new cjs.Graphics().p("EADTAjMQnyiKkAnCQkAnBCJnzMAlpAKWQiJHznBEAQkmCnk6AAQioAAiugwg");
	var mask_1_graphics_533 = new cjs.Graphics().p("EAC7AjEQnviVj1nIQj2nHCVnwMAlZALOQiVHwnHD1QkcCZksAAQi1AAi7g4g");
	var mask_1_graphics_534 = new cjs.Graphics().p("EACkAi7QnrigjrnNQjrnNCgntMAlIAMFQigHsnNDrQkTCMkdAAQjDAAjHhBg");
	var mask_1_graphics_535 = new cjs.Graphics().p("EACNAiyQnnisjgnSQjhnSCsnpMAk1AM7QirHpnSDgQkJB/kQAAQjPAAjUhKg");
	var mask_1_graphics_536 = new cjs.Graphics().p("EAB3AioQnji3jVnXQjWnYC2nkMAkiANxQi2HlnXDVQj/BzkCAAQjdAAjfhUg");
	var mask_1_graphics_537 = new cjs.Graphics().p("EABiAidQngjBjKndQjLncDCngMAkNAOnQjCHgnbDKQj0Boj1AAQjqAAjqhfg");
	var mask_1_graphics_538 = new cjs.Graphics().p("EABNAiSQnbjMi/nhQjAnhDMncMAj3APcQjMHcngC/QjpBdjoAAQj3AAj1hqg");
	var mask_1_graphics_539 = new cjs.Graphics().p("EAA4AiHQnWjYi0nlQi1nlDYnXMAjgAQRQjYHXnkC0QjeBSjaAAQkFAAkAh1g");
	var mask_1_graphics_540 = new cjs.Graphics().p("EAAkAh7QnRjjionpQiqnpDinSMAjIARFQjjHSnoCpQjSBIjNAAQkSAAkLiBg");
	var mask_1_graphics_541 = new cjs.Graphics().p("EAARAhuQnMjtidntQientDtnNMAitAR5QjtHMnsCeQjGA/jAAAQkgAAkUiOg");
	var mask_1_graphics_542 = new cjs.Graphics().p("EgABAhhQnHj4iSnwQiTnxD4nHMAiSASrQj3HHnwCTQi5A2izAAQkuAAkdibg");
	var mask_1_graphics_543 = new cjs.Graphics().p("EgBEAhaQnVj/iIoaQiJoaETn6MAjWATQQkUH6oNCxQjYBJjOAAQkpAAkTiXg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(419).to({graphics:mask_1_graphics_419,x:176.9,y:204.5}).wait(1).to({graphics:mask_1_graphics_420,x:176.9,y:205.5}).wait(1).to({graphics:mask_1_graphics_421,x:176.9,y:206.5}).wait(1).to({graphics:mask_1_graphics_422,x:176.9,y:207.5}).wait(1).to({graphics:mask_1_graphics_423,x:176.9,y:208.5}).wait(1).to({graphics:mask_1_graphics_424,x:176.8,y:209.4}).wait(1).to({graphics:mask_1_graphics_425,x:176.8,y:210.4}).wait(1).to({graphics:mask_1_graphics_426,x:176.8,y:211.3}).wait(1).to({graphics:mask_1_graphics_427,x:176.8,y:212.2}).wait(1).to({graphics:mask_1_graphics_428,x:176.8,y:213.1}).wait(1).to({graphics:mask_1_graphics_429,x:176.8,y:213.9}).wait(1).to({graphics:mask_1_graphics_430,x:176.9,y:214.8}).wait(1).to({graphics:mask_1_graphics_431,x:176.9,y:215.6}).wait(1).to({graphics:mask_1_graphics_432,x:176.9,y:216.4}).wait(1).to({graphics:mask_1_graphics_433,x:176.9,y:217.2}).wait(1).to({graphics:mask_1_graphics_434,x:176.9,y:218}).wait(1).to({graphics:mask_1_graphics_435,x:176.9,y:218.7}).wait(1).to({graphics:mask_1_graphics_436,x:177,y:219.4}).wait(1).to({graphics:mask_1_graphics_437,x:177,y:220.1}).wait(1).to({graphics:mask_1_graphics_438,x:177,y:220.8}).wait(1).to({graphics:mask_1_graphics_439,x:177,y:221.5}).wait(1).to({graphics:mask_1_graphics_440,x:177,y:222.1}).wait(1).to({graphics:mask_1_graphics_441,x:177,y:222.7}).wait(1).to({graphics:mask_1_graphics_442,x:177,y:223.3}).wait(1).to({graphics:mask_1_graphics_443,x:177,y:223.8}).wait(1).to({graphics:mask_1_graphics_444,x:177,y:224.4}).wait(1).to({graphics:mask_1_graphics_445,x:177,y:224.9}).wait(1).to({graphics:mask_1_graphics_446,x:177,y:225.4}).wait(1).to({graphics:mask_1_graphics_447,x:177,y:225.8}).wait(1).to({graphics:mask_1_graphics_448,x:177,y:226.3}).wait(1).to({graphics:mask_1_graphics_449,x:177,y:226.7}).wait(1).to({graphics:mask_1_graphics_450,x:177,y:227.1}).wait(1).to({graphics:mask_1_graphics_451,x:177,y:227.4}).wait(1).to({graphics:mask_1_graphics_452,x:177,y:227.8}).wait(1).to({graphics:mask_1_graphics_453,x:177,y:228.1}).wait(1).to({graphics:mask_1_graphics_454,x:177,y:228.4}).wait(1).to({graphics:mask_1_graphics_455,x:177,y:228.6}).wait(1).to({graphics:mask_1_graphics_456,x:177,y:228.9}).wait(1).to({graphics:mask_1_graphics_457,x:176.9,y:229.1}).wait(1).to({graphics:mask_1_graphics_458,x:176.9,y:229.2}).wait(1).to({graphics:mask_1_graphics_459,x:176.9,y:229.4}).wait(1).to({graphics:mask_1_graphics_460,x:176.9,y:229.5}).wait(1).to({graphics:mask_1_graphics_461,x:176.9,y:229.6}).wait(1).to({graphics:mask_1_graphics_462,x:176.9,y:229.7}).wait(1).to({graphics:mask_1_graphics_463,x:176.9,y:229.8}).wait(1).to({graphics:mask_1_graphics_464,x:176.9,y:229.8}).wait(1).to({graphics:mask_1_graphics_465,x:176.9,y:229.8}).wait(1).to({graphics:mask_1_graphics_466,x:176.9,y:229.8}).wait(1).to({graphics:mask_1_graphics_467,x:176.9,y:229.8}).wait(1).to({graphics:mask_1_graphics_468,x:176.9,y:229.8}).wait(1).to({graphics:mask_1_graphics_469,x:176.9,y:229.8}).wait(1).to({graphics:mask_1_graphics_470,x:177,y:229.8}).wait(1).to({graphics:mask_1_graphics_471,x:177,y:229.8}).wait(1).to({graphics:mask_1_graphics_472,x:177,y:229.9}).wait(1).to({graphics:mask_1_graphics_473,x:177,y:229.9}).wait(1).to({graphics:mask_1_graphics_474,x:177,y:229.9}).wait(1).to({graphics:mask_1_graphics_475,x:177,y:229.9}).wait(1).to({graphics:mask_1_graphics_476,x:177.1,y:229.9}).wait(1).to({graphics:mask_1_graphics_477,x:177.1,y:229.9}).wait(1).to({graphics:mask_1_graphics_478,x:177.1,y:229.9}).wait(1).to({graphics:mask_1_graphics_479,x:177.1,y:229.9}).wait(1).to({graphics:mask_1_graphics_480,x:177,y:229.9}).wait(1).to({graphics:mask_1_graphics_481,x:177,y:229.9}).wait(1).to({graphics:mask_1_graphics_482,x:177,y:229.9}).wait(1).to({graphics:mask_1_graphics_483,x:177,y:229.8}).wait(1).to({graphics:mask_1_graphics_484,x:177,y:229.8}).wait(1).to({graphics:mask_1_graphics_485,x:177,y:229.8}).wait(1).to({graphics:mask_1_graphics_486,x:176.9,y:229.8}).wait(1).to({graphics:mask_1_graphics_487,x:176.9,y:229.7}).wait(1).to({graphics:mask_1_graphics_488,x:176.9,y:229.7}).wait(1).to({graphics:mask_1_graphics_489,x:176.9,y:229.7}).wait(1).to({graphics:mask_1_graphics_490,x:176.9,y:229.7}).wait(1).to({graphics:mask_1_graphics_491,x:176.9,y:229.7}).wait(1).to({graphics:mask_1_graphics_492,x:176.9,y:229.7}).wait(1).to({graphics:mask_1_graphics_493,x:176.9,y:229.7}).wait(1).to({graphics:mask_1_graphics_494,x:176.9,y:229.7}).wait(1).to({graphics:mask_1_graphics_495,x:177,y:229.8}).wait(1).to({graphics:mask_1_graphics_496,x:177,y:229.8}).wait(1).to({graphics:mask_1_graphics_497,x:177,y:229.8}).wait(1).to({graphics:mask_1_graphics_498,x:177,y:229.8}).wait(1).to({graphics:mask_1_graphics_499,x:177,y:229.9}).wait(1).to({graphics:mask_1_graphics_500,x:177,y:229.9}).wait(1).to({graphics:mask_1_graphics_501,x:177,y:229.9}).wait(1).to({graphics:mask_1_graphics_502,x:177,y:229.9}).wait(1).to({graphics:mask_1_graphics_503,x:177,y:229.9}).wait(1).to({graphics:mask_1_graphics_504,x:177,y:229.9}).wait(1).to({graphics:mask_1_graphics_505,x:177,y:229.9}).wait(1).to({graphics:mask_1_graphics_506,x:177,y:229.9}).wait(1).to({graphics:mask_1_graphics_507,x:177,y:229.9}).wait(1).to({graphics:mask_1_graphics_508,x:177,y:229.9}).wait(1).to({graphics:mask_1_graphics_509,x:177,y:229.9}).wait(1).to({graphics:mask_1_graphics_510,x:177,y:229.9}).wait(1).to({graphics:mask_1_graphics_511,x:177,y:229.8}).wait(1).to({graphics:mask_1_graphics_512,x:177,y:229.8}).wait(1).to({graphics:mask_1_graphics_513,x:177,y:229.8}).wait(1).to({graphics:mask_1_graphics_514,x:176.9,y:229.8}).wait(1).to({graphics:mask_1_graphics_515,x:176.9,y:229.8}).wait(1).to({graphics:mask_1_graphics_516,x:176.9,y:229.8}).wait(1).to({graphics:mask_1_graphics_517,x:176.9,y:229.8}).wait(1).to({graphics:mask_1_graphics_518,x:176.9,y:229.8}).wait(1).to({graphics:mask_1_graphics_519,x:176.9,y:229.8}).wait(1).to({graphics:mask_1_graphics_520,x:176.9,y:229.8}).wait(1).to({graphics:mask_1_graphics_521,x:176.9,y:229.8}).wait(1).to({graphics:mask_1_graphics_522,x:176.8,y:229.8}).wait(1).to({graphics:mask_1_graphics_523,x:176.8,y:229.8}).wait(1).to({graphics:mask_1_graphics_524,x:176.7,y:229.8}).wait(1).to({graphics:mask_1_graphics_525,x:176.5,y:229.8}).wait(1).to({graphics:mask_1_graphics_526,x:176.4,y:229.8}).wait(1).to({graphics:mask_1_graphics_527,x:176.2,y:229.9}).wait(1).to({graphics:mask_1_graphics_528,x:175.9,y:229.9}).wait(1).to({graphics:mask_1_graphics_529,x:175.7,y:229.9}).wait(1).to({graphics:mask_1_graphics_530,x:175.4,y:229.9}).wait(1).to({graphics:mask_1_graphics_531,x:175,y:229.9}).wait(1).to({graphics:mask_1_graphics_532,x:174.7,y:230}).wait(1).to({graphics:mask_1_graphics_533,x:174.3,y:230}).wait(1).to({graphics:mask_1_graphics_534,x:173.9,y:230}).wait(1).to({graphics:mask_1_graphics_535,x:173.4,y:230}).wait(1).to({graphics:mask_1_graphics_536,x:172.9,y:230}).wait(1).to({graphics:mask_1_graphics_537,x:172.4,y:230}).wait(1).to({graphics:mask_1_graphics_538,x:171.8,y:230}).wait(1).to({graphics:mask_1_graphics_539,x:171.3,y:230}).wait(1).to({graphics:mask_1_graphics_540,x:170.7,y:230}).wait(1).to({graphics:mask_1_graphics_541,x:170,y:230}).wait(1).to({graphics:mask_1_graphics_542,x:169.3,y:230}).wait(1).to({graphics:mask_1_graphics_543,x:172.7,y:228.9}).wait(156));

	// drawing
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("AhHhjQBRhbBfhiQBfhjBih3QBhh4BniEQBmiEBJiAQBJiAAPhtQACgLAAgLQABhehwhBQh8hIiKBFQiGBDhiBfQgDADgEADQhiBhhBB4QhDB8ggCKQggCPgGCTQgGCQAlCNQAPA/AgA3QBrBoCdASQCcASCGgbQCFgbB/gpQCAgpB/gsQCMgxCHg+QBVgnBQgvQh4CfhcCXQjVFbi0FPQi0FOkiEWQkiEWnphiQnFhajknHAcLsBQjPDgieDRA07BxQABAoAGAmQAMDGC8G1QARAoASAlQBchQBahVQA+g6A+g6QFuldFil0QAAAAAAAAA8KWsQFqj2FXkv");
	this.shape_2.setTransform(275.1,274.8);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(419).to({_off:false},0).wait(280));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_309 = new cjs.Graphics().p("AirhkIAZglIE+DvIgZAkg");
	var mask_2_graphics_310 = new cjs.Graphics().p("AiyhbIAng3IE9DuIglA4g");
	var mask_2_graphics_311 = new cjs.Graphics().p("Ai4hRIA0hLIE9DvIgzBKg");
	var mask_2_graphics_312 = new cjs.Graphics().p("Ai/hIIBBheIE+DvIhBBeg");
	var mask_2_graphics_313 = new cjs.Graphics().p("AjFg+IBOhxIE9DvIhNBwg");
	var mask_2_graphics_314 = new cjs.Graphics().p("AjMg0IBbiFIE+DvIhbCEg");
	var mask_2_graphics_315 = new cjs.Graphics().p("AjSgrIBoiXIE9DvIhoCWg");
	var mask_2_graphics_316 = new cjs.Graphics().p("AjZghIB1irIE+DvIh1Cqg");
	var mask_2_graphics_317 = new cjs.Graphics().p("AjggYICDi9IE9DvIiBC8g");
	var mask_2_graphics_318 = new cjs.Graphics().p("AjmgPICPjQIE+DvIiPDQg");
	var mask_2_graphics_319 = new cjs.Graphics().p("AjtgFICdjjIE+DuIidDkg");
	var mask_2_graphics_320 = new cjs.Graphics().p("AjzAEICqj2IE9DwIipD1g");
	var mask_2_graphics_321 = new cjs.Graphics().p("Aj6ANIC3kIIE+DvIi3EJg");
	var mask_2_graphics_322 = new cjs.Graphics().p("AkAAXIDEkcIE9DwIjEEbg");
	var mask_2_graphics_323 = new cjs.Graphics().p("AkHAgIDRkvIE+DwIjREvg");
	var mask_2_graphics_324 = new cjs.Graphics().p("AkNAqIDelCIE9DwIjeFBg");
	var mask_2_graphics_325 = new cjs.Graphics().p("AkUA0IDrlWIE+DwIjrFVg");
	var mask_2_graphics_326 = new cjs.Graphics().p("AkbA9ID5loIE9DwIj4Fng");
	var mask_2_graphics_327 = new cjs.Graphics().p("AkhBHIEGl8IE9DwIkFF7g");
	var mask_2_graphics_328 = new cjs.Graphics().p("AkoBQIETmOIE+DwIkTGNg");
	var mask_2_graphics_329 = new cjs.Graphics().p("AkuBaIEgmiIE9DwIkfGhg");
	var mask_2_graphics_330 = new cjs.Graphics().p("Ak1BjIEtm0IE+DvIktG0g");
	var mask_2_graphics_331 = new cjs.Graphics().p("Ak7BtIE6nIIE9DwIk6HHg");
	var mask_2_graphics_332 = new cjs.Graphics().p("AlCB3IFGnbIE/DvIlGHag");
	var mask_2_graphics_333 = new cjs.Graphics().p("AlICAIFTnuIE+DwIlTHtg");
	var mask_2_graphics_334 = new cjs.Graphics().p("AlPCJIFhoBIE+DwIlgIBg");
	var mask_2_graphics_335 = new cjs.Graphics().p("AlWCTIFuoUIE/DwIluITg");
	var mask_2_graphics_336 = new cjs.Graphics().p("AlcCcIF7onIE+DwIl6Ing");
	var mask_2_graphics_337 = new cjs.Graphics().p("AljCmIGIo6IE/DwImII5g");
	var mask_2_graphics_338 = new cjs.Graphics().p("AlqCwIGWpOIE+DwImUJNg");
	var mask_2_graphics_339 = new cjs.Graphics().p("AlwC5IGipgIE/DwImiJfg");
	var mask_2_graphics_340 = new cjs.Graphics().p("Al2DCIGvpzIE+DwImvJzg");
	var mask_2_graphics_341 = new cjs.Graphics().p("Al9DMIG8qGIE/DvIm8KGg");
	var mask_2_graphics_342 = new cjs.Graphics().p("AmEDVIHKqZIE/DwInKKZg");
	var mask_2_graphics_343 = new cjs.Graphics().p("AmKDfIHXqsIE+DvInWKtg");
	var mask_2_graphics_344 = new cjs.Graphics().p("AmRDpIHkrAIE/DwInkK/g");
	var mask_2_graphics_345 = new cjs.Graphics().p("AmXDyIHxrTIE+DwInxLTg");
	var mask_2_graphics_346 = new cjs.Graphics().p("AmeD8IH+rmIE/DwIn+Llg");
	var mask_2_graphics_347 = new cjs.Graphics().p("AmlEFIIMr5IE+DwIoKL5g");
	var mask_2_graphics_348 = new cjs.Graphics().p("AmrEPIIYsMIE/DwIoYMLg");
	var mask_2_graphics_349 = new cjs.Graphics().p("AmyEZIImsgIE/DwIomMfg");
	var mask_2_graphics_350 = new cjs.Graphics().p("Am4EiIIzsyIE+DwIoyMxg");
	var mask_2_graphics_351 = new cjs.Graphics().p("Am/ErIJAtFIE/DwIpANFg");
	var mask_2_graphics_352 = new cjs.Graphics().p("AnFE1IJNtYIE+DvIpNNZg");
	var mask_2_graphics_353 = new cjs.Graphics().p("AnME/IJatsIE/DwIpaNrg");
	var mask_2_graphics_354 = new cjs.Graphics().p("AnTFIIJot+IE+DvIpmN/g");
	var mask_2_graphics_355 = new cjs.Graphics().p("AnZFSIJ0uSIE/DwIp0ORg");
	var mask_2_graphics_356 = new cjs.Graphics().p("AngFbIKCulIE+DwIqBOlg");
	var mask_2_graphics_357 = new cjs.Graphics().p("AnmFlIKPu4IE+DwIqOO3g");
	var mask_2_graphics_358 = new cjs.Graphics().p("AntFuIKcvLIE/DwIqcPLg");
	var mask_2_graphics_359 = new cjs.Graphics().p("AnzF4IKpveIE+DwIqpPdg");
	var mask_2_graphics_360 = new cjs.Graphics().p("An6GBIK2vxIE/DwIq2Pxg");
	var mask_2_graphics_361 = new cjs.Graphics().p("AoAGLILDwEIE+DwIrDQDg");
	var mask_2_graphics_362 = new cjs.Graphics().p("AoHGVILQwYIE/DwIrQQXg");
	var mask_2_graphics_363 = new cjs.Graphics().p("AoNGeILdwqIE+DvIrdQqg");
	var mask_2_graphics_364 = new cjs.Graphics().p("AoUGnILqw9IE/DwIrrQ9g");
	var mask_2_graphics_365 = new cjs.Graphics().p("AobGxIL4xQIE/DvIr4RQg");
	var mask_2_graphics_366 = new cjs.Graphics().p("AohG6IMFxjIE+DwIsFRjg");
	var mask_2_graphics_367 = new cjs.Graphics().p("AooHEIMSx3IE/DwIsSR3g");
	var mask_2_graphics_368 = new cjs.Graphics().p("AouHOIMfyKIE+DwIsfSJg");
	var mask_2_graphics_369 = new cjs.Graphics().p("Ao1HXIMsydIE/DwIssSdg");
	var mask_2_graphics_370 = new cjs.Graphics().p("Ao7HhIM5ywIE+DwIs5Svg");
	var mask_2_graphics_371 = new cjs.Graphics().p("ApCHqINGzDIE/DwItHTDg");
	var mask_2_graphics_372 = new cjs.Graphics().p("ApJH0INUzWIE/DwItUTVg");
	var mask_2_graphics_373 = new cjs.Graphics().p("ApPH9INhzpIE+DwItgTpg");
	var mask_2_graphics_374 = new cjs.Graphics().p("ApWIHINuz8IE/DvItuT8g");
	var mask_2_graphics_375 = new cjs.Graphics().p("ApcIQIN70PIE+DwIt7UPg");
	var mask_2_graphics_376 = new cjs.Graphics().p("ApjIaIOI0iIE/DvIuIUjg");
	var mask_2_graphics_377 = new cjs.Graphics().p("AppIkIOV02IE+DwIuVU1g");
	var mask_2_graphics_378 = new cjs.Graphics().p("ApwItIOi1JIE/DwIuiVJg");
	var mask_2_graphics_379 = new cjs.Graphics().p("Ap2I2IOv1bIE+DwIuvVbg");
	var mask_2_graphics_380 = new cjs.Graphics().p("Ap9JAIO91vIE+DwIu8Vvg");
	var mask_2_graphics_381 = new cjs.Graphics().p("AqEJKIPK2CIE/DwIvKWBg");
	var mask_2_graphics_382 = new cjs.Graphics().p("AqKJTIPX2VIE+DwIvXWVg");
	var mask_2_graphics_383 = new cjs.Graphics().p("AqRJdIPk2oIE/DwIvkWng");
	var mask_2_graphics_384 = new cjs.Graphics().p("AqYJmIPy27IE+DwIvwW7g");
	var mask_2_graphics_385 = new cjs.Graphics().p("AqeJvIP+3NIE/DvIv+XPg");
	var mask_2_graphics_386 = new cjs.Graphics().p("AqlJ6IQM3iIE+DwIwLXhg");
	var mask_2_graphics_387 = new cjs.Graphics().p("AqrKDIQZ30IE+DvIwYX1g");
	var mask_2_graphics_388 = new cjs.Graphics().p("AqyKNIQm4IIE/DwIwmYHg");
	var mask_2_graphics_389 = new cjs.Graphics().p("Aq4KWIQz4bIE+DwIwzYbg");
	var mask_2_graphics_390 = new cjs.Graphics().p("Aq/KfIRA4tIE/DwIxAYtg");
	var mask_2_graphics_391 = new cjs.Graphics().p("ArGKpIRO5BIE+DwIxMZBg");
	var mask_2_graphics_392 = new cjs.Graphics().p("ArMKzIRa5UIE/DwIxaZTg");
	var mask_2_graphics_393 = new cjs.Graphics().p("ArTK8IRo5nIE+DwIxnZng");
	var mask_2_graphics_394 = new cjs.Graphics().p("ArZLGIR056IE/DwIx0Z5g");
	var mask_2_graphics_395 = new cjs.Graphics().p("ArgLPISC6NIE/DwIyCaNg");
	var mask_2_graphics_396 = new cjs.Graphics().p("ArmLYISP6fIE+DvIyPagg");
	var mask_2_graphics_397 = new cjs.Graphics().p("ArtLiISc6zIE/DwIycazg");
	var mask_2_graphics_398 = new cjs.Graphics().p("ArzLsISp7GIE+DvIypbGg");
	var mask_2_graphics_399 = new cjs.Graphics().p("Ar6L1IS27ZIE/DwIy3bZg");
	var mask_2_graphics_400 = new cjs.Graphics().p("AsAL/ITD7tIE+DwIzDbtg");
	var mask_2_graphics_401 = new cjs.Graphics().p("AsHMIITQ7/IE/DwIzRb/g");
	var mask_2_graphics_402 = new cjs.Graphics().p("AsOMSITe8TIE/DwIzecTg");
	var mask_2_graphics_403 = new cjs.Graphics().p("AsUMbITr8lIE+DwIzrclg");
	var mask_2_graphics_404 = new cjs.Graphics().p("AsbMlIT485IE/DwIz4c5g");
	var mask_2_graphics_405 = new cjs.Graphics().p("AshMvIUF9MIE+DwI0FdLg");
	var mask_2_graphics_406 = new cjs.Graphics().p("AsoM4IUS9fIE/DwI0Sdfg");
	var mask_2_graphics_407 = new cjs.Graphics().p("AsuNCIUf9yIE+DvI0fdyg");
	var mask_2_graphics_408 = new cjs.Graphics().p("As1NLIUs+FIE/DwI0teFg");
	var mask_2_graphics_409 = new cjs.Graphics().p("As7NVIU5+YIE+DvI05eZg");
	var mask_2_graphics_410 = new cjs.Graphics().p("AtCNfIVH+sIE+DwI1Herg");
	var mask_2_graphics_411 = new cjs.Graphics().p("AtJNoIVU+/IE/DwI1Ue/g");
	var mask_2_graphics_412 = new cjs.Graphics().p("AtPNxIVh/RIE+DwI1hfRg");
	var mask_2_graphics_413 = new cjs.Graphics().p("AtWN7IVu/lIE/DwI1uflg");
	var mask_2_graphics_414 = new cjs.Graphics().p("AtcOEIV7/3IE+DwI17f3g");
	var mask_2_graphics_415 = new cjs.Graphics().p("AtjOOMAWIggLIE/DwMgWJAgLg");
	var mask_2_graphics_416 = new cjs.Graphics().p("AtpOYMAWVggeIE+DwMgWVAgdg");
	var mask_2_graphics_417 = new cjs.Graphics().p("AtwOhMAWiggxIE/DwMgWjAgxg");
	var mask_2_graphics_418 = new cjs.Graphics().p("At3OqMAWwghDIE/DvMgWwAhFg");
	var mask_2_graphics_419 = new cjs.Graphics().p("At9O0MAW9ghXIE+DwMgW9AhXg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(309).to({graphics:mask_2_graphics_309,x:460.7,y:185}).wait(1).to({graphics:mask_2_graphics_310,x:460.1,y:186}).wait(1).to({graphics:mask_2_graphics_311,x:459.4,y:187}).wait(1).to({graphics:mask_2_graphics_312,x:458.7,y:187.9}).wait(1).to({graphics:mask_2_graphics_313,x:458.1,y:188.9}).wait(1).to({graphics:mask_2_graphics_314,x:457.4,y:189.8}).wait(1).to({graphics:mask_2_graphics_315,x:456.8,y:190.8}).wait(1).to({graphics:mask_2_graphics_316,x:456.1,y:191.7}).wait(1).to({graphics:mask_2_graphics_317,x:455.5,y:192.7}).wait(1).to({graphics:mask_2_graphics_318,x:454.8,y:193.7}).wait(1).to({graphics:mask_2_graphics_319,x:454.1,y:194.6}).wait(1).to({graphics:mask_2_graphics_320,x:453.5,y:195.6}).wait(1).to({graphics:mask_2_graphics_321,x:452.8,y:196.5}).wait(1).to({graphics:mask_2_graphics_322,x:452.2,y:197.5}).wait(1).to({graphics:mask_2_graphics_323,x:451.5,y:198.4}).wait(1).to({graphics:mask_2_graphics_324,x:450.9,y:199.4}).wait(1).to({graphics:mask_2_graphics_325,x:450.2,y:200.3}).wait(1).to({graphics:mask_2_graphics_326,x:449.6,y:201.3}).wait(1).to({graphics:mask_2_graphics_327,x:448.9,y:202.2}).wait(1).to({graphics:mask_2_graphics_328,x:448.2,y:203.2}).wait(1).to({graphics:mask_2_graphics_329,x:447.6,y:204.2}).wait(1).to({graphics:mask_2_graphics_330,x:446.9,y:205.1}).wait(1).to({graphics:mask_2_graphics_331,x:446.3,y:206.1}).wait(1).to({graphics:mask_2_graphics_332,x:445.6,y:207}).wait(1).to({graphics:mask_2_graphics_333,x:445,y:208}).wait(1).to({graphics:mask_2_graphics_334,x:444.3,y:208.9}).wait(1).to({graphics:mask_2_graphics_335,x:443.6,y:209.9}).wait(1).to({graphics:mask_2_graphics_336,x:443,y:210.8}).wait(1).to({graphics:mask_2_graphics_337,x:442.3,y:211.8}).wait(1).to({graphics:mask_2_graphics_338,x:441.7,y:212.7}).wait(1).to({graphics:mask_2_graphics_339,x:441,y:213.7}).wait(1).to({graphics:mask_2_graphics_340,x:440.4,y:214.7}).wait(1).to({graphics:mask_2_graphics_341,x:439.7,y:215.6}).wait(1).to({graphics:mask_2_graphics_342,x:439,y:216.6}).wait(1).to({graphics:mask_2_graphics_343,x:438.4,y:217.5}).wait(1).to({graphics:mask_2_graphics_344,x:437.7,y:218.5}).wait(1).to({graphics:mask_2_graphics_345,x:437.1,y:219.4}).wait(1).to({graphics:mask_2_graphics_346,x:436.4,y:220.4}).wait(1).to({graphics:mask_2_graphics_347,x:435.8,y:221.3}).wait(1).to({graphics:mask_2_graphics_348,x:435.1,y:222.3}).wait(1).to({graphics:mask_2_graphics_349,x:434.4,y:223.2}).wait(1).to({graphics:mask_2_graphics_350,x:433.8,y:224.2}).wait(1).to({graphics:mask_2_graphics_351,x:433.1,y:225.2}).wait(1).to({graphics:mask_2_graphics_352,x:432.5,y:226.1}).wait(1).to({graphics:mask_2_graphics_353,x:431.8,y:227.1}).wait(1).to({graphics:mask_2_graphics_354,x:431.2,y:228}).wait(1).to({graphics:mask_2_graphics_355,x:430.5,y:229}).wait(1).to({graphics:mask_2_graphics_356,x:429.9,y:229.9}).wait(1).to({graphics:mask_2_graphics_357,x:429.2,y:230.9}).wait(1).to({graphics:mask_2_graphics_358,x:428.5,y:231.8}).wait(1).to({graphics:mask_2_graphics_359,x:427.9,y:232.8}).wait(1).to({graphics:mask_2_graphics_360,x:427.2,y:233.7}).wait(1).to({graphics:mask_2_graphics_361,x:426.6,y:234.7}).wait(1).to({graphics:mask_2_graphics_362,x:425.9,y:235.7}).wait(1).to({graphics:mask_2_graphics_363,x:425.3,y:236.6}).wait(1).to({graphics:mask_2_graphics_364,x:424.6,y:237.6}).wait(1).to({graphics:mask_2_graphics_365,x:423.9,y:238.5}).wait(1).to({graphics:mask_2_graphics_366,x:423.3,y:239.5}).wait(1).to({graphics:mask_2_graphics_367,x:422.6,y:240.4}).wait(1).to({graphics:mask_2_graphics_368,x:422,y:241.4}).wait(1).to({graphics:mask_2_graphics_369,x:421.3,y:242.3}).wait(1).to({graphics:mask_2_graphics_370,x:420.7,y:243.3}).wait(1).to({graphics:mask_2_graphics_371,x:420,y:244.2}).wait(1).to({graphics:mask_2_graphics_372,x:419.3,y:245.2}).wait(1).to({graphics:mask_2_graphics_373,x:418.7,y:246.2}).wait(1).to({graphics:mask_2_graphics_374,x:418,y:247.1}).wait(1).to({graphics:mask_2_graphics_375,x:417.4,y:248.1}).wait(1).to({graphics:mask_2_graphics_376,x:416.7,y:249}).wait(1).to({graphics:mask_2_graphics_377,x:416.1,y:250}).wait(1).to({graphics:mask_2_graphics_378,x:415.4,y:250.9}).wait(1).to({graphics:mask_2_graphics_379,x:414.8,y:251.9}).wait(1).to({graphics:mask_2_graphics_380,x:414.1,y:252.8}).wait(1).to({graphics:mask_2_graphics_381,x:413.4,y:253.8}).wait(1).to({graphics:mask_2_graphics_382,x:412.8,y:254.7}).wait(1).to({graphics:mask_2_graphics_383,x:412.1,y:255.7}).wait(1).to({graphics:mask_2_graphics_384,x:411.5,y:256.7}).wait(1).to({graphics:mask_2_graphics_385,x:410.8,y:257.6}).wait(1).to({graphics:mask_2_graphics_386,x:410.2,y:258.6}).wait(1).to({graphics:mask_2_graphics_387,x:409.5,y:259.5}).wait(1).to({graphics:mask_2_graphics_388,x:408.8,y:260.5}).wait(1).to({graphics:mask_2_graphics_389,x:408.2,y:261.4}).wait(1).to({graphics:mask_2_graphics_390,x:407.5,y:262.4}).wait(1).to({graphics:mask_2_graphics_391,x:406.9,y:263.3}).wait(1).to({graphics:mask_2_graphics_392,x:406.2,y:264.3}).wait(1).to({graphics:mask_2_graphics_393,x:405.6,y:265.2}).wait(1).to({graphics:mask_2_graphics_394,x:404.9,y:266.2}).wait(1).to({graphics:mask_2_graphics_395,x:404.2,y:267.2}).wait(1).to({graphics:mask_2_graphics_396,x:403.6,y:268.1}).wait(1).to({graphics:mask_2_graphics_397,x:402.9,y:269.1}).wait(1).to({graphics:mask_2_graphics_398,x:402.3,y:270}).wait(1).to({graphics:mask_2_graphics_399,x:401.6,y:271}).wait(1).to({graphics:mask_2_graphics_400,x:401,y:271.9}).wait(1).to({graphics:mask_2_graphics_401,x:400.3,y:272.9}).wait(1).to({graphics:mask_2_graphics_402,x:399.6,y:273.8}).wait(1).to({graphics:mask_2_graphics_403,x:399,y:274.8}).wait(1).to({graphics:mask_2_graphics_404,x:398.3,y:275.7}).wait(1).to({graphics:mask_2_graphics_405,x:397.7,y:276.7}).wait(1).to({graphics:mask_2_graphics_406,x:397,y:277.7}).wait(1).to({graphics:mask_2_graphics_407,x:396.4,y:278.6}).wait(1).to({graphics:mask_2_graphics_408,x:395.7,y:279.6}).wait(1).to({graphics:mask_2_graphics_409,x:395.1,y:280.5}).wait(1).to({graphics:mask_2_graphics_410,x:394.4,y:281.5}).wait(1).to({graphics:mask_2_graphics_411,x:393.7,y:282.4}).wait(1).to({graphics:mask_2_graphics_412,x:393.1,y:283.4}).wait(1).to({graphics:mask_2_graphics_413,x:392.4,y:284.3}).wait(1).to({graphics:mask_2_graphics_414,x:391.8,y:285.3}).wait(1).to({graphics:mask_2_graphics_415,x:391.1,y:286.2}).wait(1).to({graphics:mask_2_graphics_416,x:390.5,y:287.2}).wait(1).to({graphics:mask_2_graphics_417,x:389.8,y:288.2}).wait(1).to({graphics:mask_2_graphics_418,x:389.1,y:289.1}).wait(1).to({graphics:mask_2_graphics_419,x:388.5,y:290}).wait(280));

	// drawing
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("AhHhjQBRhbBfhiQBfhjBih3QBhh4BniEQBmiEBJiAQBJiAAPhtQACgLAAgLQABhehwhBQh8hIiKBFQiGBDhiBfQgDADgEADQhiBhhBB4QhDB8ggCKQggCPgGCTQgGCQAlCNQAPA/AgA3QBrBoCdASQCcASCGgbQCFgbB/gpQCAgpB/gsQCMgxCHg+QBVgnBQgvQh4CfhcCXQjVFbi0FPQi0FOkiEWQkiEWnphiQnFhajknHQgSglgRgoQi8m1gMjGQgCgoAFgeAcLsBQjPDgieDRA07BxQABAoAGAmQA3E2HmB5QFuldFil0QAAAAAAAAAxJOHQBchQBahVQA+g6A+g6QEWBEGiAGA8KWsQFqj2FXkv");
	this.shape_3.setTransform(275.1,274.8);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(309).to({_off:false},0).wait(390));

	// ar3
	this.instance_2 = new lib.ar3("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(397,337);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(310).to({_off:false},0).wait(389));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_234 = new cjs.Graphics().p("AifFKIAAqTIE/AAIAAKTg");
	var mask_3_graphics_235 = new cjs.Graphics().p("AitFKIAAqTIFbAAIAAKTg");
	var mask_3_graphics_236 = new cjs.Graphics().p("Ai7FKIAAqTIF3AAIAAKTg");
	var mask_3_graphics_237 = new cjs.Graphics().p("AjIFKIAAqTIGSAAIAAKTg");
	var mask_3_graphics_238 = new cjs.Graphics().p("AjWFKIAAqTIGtAAIAAKTg");
	var mask_3_graphics_239 = new cjs.Graphics().p("AjkFKIAAqTIHJAAIAAKTg");
	var mask_3_graphics_240 = new cjs.Graphics().p("AjyFKIAAqTIHlAAIAAKTg");
	var mask_3_graphics_241 = new cjs.Graphics().p("AkAFKIAAqTIIBAAIAAKTg");
	var mask_3_graphics_242 = new cjs.Graphics().p("AkOFKIAAqTIIdAAIAAKTg");
	var mask_3_graphics_243 = new cjs.Graphics().p("AkbFKIAAqTII3AAIAAKTg");
	var mask_3_graphics_244 = new cjs.Graphics().p("AkpFKIAAqTIJTAAIAAKTg");
	var mask_3_graphics_245 = new cjs.Graphics().p("Ak3FKIAAqTIJvAAIAAKTg");
	var mask_3_graphics_246 = new cjs.Graphics().p("AlFFKIAAqTIKLAAIAAKTg");
	var mask_3_graphics_247 = new cjs.Graphics().p("AlTFKIAAqTIKnAAIAAKTg");
	var mask_3_graphics_248 = new cjs.Graphics().p("AlgFKIAAqTILBAAIAAKTg");
	var mask_3_graphics_249 = new cjs.Graphics().p("AluFKIAAqTILeAAIAAKTg");
	var mask_3_graphics_250 = new cjs.Graphics().p("Al8FKIAAqTIL5AAIAAKTg");
	var mask_3_graphics_251 = new cjs.Graphics().p("AmKFKIAAqTIMVAAIAAKTg");
	var mask_3_graphics_252 = new cjs.Graphics().p("AmYFKIAAqTIMxAAIAAKTg");
	var mask_3_graphics_253 = new cjs.Graphics().p("AmmFKIAAqTINNAAIAAKTg");
	var mask_3_graphics_254 = new cjs.Graphics().p("AmzFKIAAqTINoAAIAAKTg");
	var mask_3_graphics_255 = new cjs.Graphics().p("AnBFKIAAqTIOEAAIAAKTg");
	var mask_3_graphics_256 = new cjs.Graphics().p("AnPFKIAAqTIOfAAIAAKTg");
	var mask_3_graphics_257 = new cjs.Graphics().p("AndFKIAAqTIO7AAIAAKTg");
	var mask_3_graphics_258 = new cjs.Graphics().p("AnrFKIAAqTIPXAAIAAKTg");
	var mask_3_graphics_259 = new cjs.Graphics().p("An5FKIAAqTIPzAAIAAKTg");
	var mask_3_graphics_260 = new cjs.Graphics().p("AoGFKIAAqTIQNAAIAAKTg");
	var mask_3_graphics_261 = new cjs.Graphics().p("AoTFKIAAqTIQnAAIAAKTg");
	var mask_3_graphics_262 = new cjs.Graphics().p("AogFKIAAqTIRBAAIAAKTg");
	var mask_3_graphics_263 = new cjs.Graphics().p("AotFKIAAqTIRbAAIAAKTg");
	var mask_3_graphics_264 = new cjs.Graphics().p("Ao5FKIAAqTIR0AAIAAKTg");
	var mask_3_graphics_265 = new cjs.Graphics().p("ApGFKIAAqTISOAAIAAKTg");
	var mask_3_graphics_266 = new cjs.Graphics().p("ApTFKIAAqTISnAAIAAKTg");
	var mask_3_graphics_267 = new cjs.Graphics().p("ApgFKIAAqTITBAAIAAKTg");
	var mask_3_graphics_268 = new cjs.Graphics().p("AptFKIAAqTITbAAIAAKTg");
	var mask_3_graphics_269 = new cjs.Graphics().p("Ap6FKIAAqTIT1AAIAAKTg");
	var mask_3_graphics_270 = new cjs.Graphics().p("AqHFKIAAqTIUPAAIAAKTg");
	var mask_3_graphics_271 = new cjs.Graphics().p("AqUFKIAAqTIUqAAIAAKTg");
	var mask_3_graphics_272 = new cjs.Graphics().p("AqhFKIAAqTIVDAAIAAKTg");
	var mask_3_graphics_273 = new cjs.Graphics().p("AquFKIAAqTIVdAAIAAKTg");
	var mask_3_graphics_274 = new cjs.Graphics().p("Aq7FKIAAqTIV3AAIAAKTg");
	var mask_3_graphics_275 = new cjs.Graphics().p("ArIFKIAAqTIWRAAIAAKTg");
	var mask_3_graphics_276 = new cjs.Graphics().p("ArUFKIAAqTIWpAAIAAKTg");
	var mask_3_graphics_277 = new cjs.Graphics().p("ArgFKIAAqTIXBAAIAAKTg");
	var mask_3_graphics_278 = new cjs.Graphics().p("ArsFKIAAqTIXZAAIAAKTg");
	var mask_3_graphics_279 = new cjs.Graphics().p("Ar4FKIAAqTIXxAAIAAKTg");
	var mask_3_graphics_280 = new cjs.Graphics().p("AsEFKIAAqTIYJAAIAAKTg");
	var mask_3_graphics_281 = new cjs.Graphics().p("AsQFKIAAqTIYhAAIAAKTg");
	var mask_3_graphics_282 = new cjs.Graphics().p("AsbFKIAAqTIY4AAIAAKTg");
	var mask_3_graphics_283 = new cjs.Graphics().p("AsnFKIAAqTIZQAAIAAKTg");
	var mask_3_graphics_284 = new cjs.Graphics().p("AszFKIAAqTIZnAAIAAKTg");
	var mask_3_graphics_285 = new cjs.Graphics().p("As/FKIAAqTIZ/AAIAAKTg");
	var mask_3_graphics_286 = new cjs.Graphics().p("AtLFKIAAqTIaXAAIAAKTg");
	var mask_3_graphics_287 = new cjs.Graphics().p("AtdFKIAAqTIa8AAIAAKTg");
	var mask_3_graphics_288 = new cjs.Graphics().p("AtwFKIAAqTIbhAAIAAKTg");
	var mask_3_graphics_289 = new cjs.Graphics().p("AuCFKIAAqTIcFAAIAAKTg");
	var mask_3_graphics_290 = new cjs.Graphics().p("AuUFKIAAqTIcpAAIAAKTg");
	var mask_3_graphics_291 = new cjs.Graphics().p("AumFKIAAqTIdNAAIAAKTg");
	var mask_3_graphics_292 = new cjs.Graphics().p("Au4FKIAAqTIdyAAIAAKTg");
	var mask_3_graphics_293 = new cjs.Graphics().p("AvLFKIAAqTIeXAAIAAKTg");
	var mask_3_graphics_294 = new cjs.Graphics().p("AvdFKIAAqTIe7AAIAAKTg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(234).to({graphics:mask_3_graphics_234,x:249,y:258}).wait(1).to({graphics:mask_3_graphics_235,x:250.4,y:258}).wait(1).to({graphics:mask_3_graphics_236,x:251.8,y:258}).wait(1).to({graphics:mask_3_graphics_237,x:253.2,y:258}).wait(1).to({graphics:mask_3_graphics_238,x:254.5,y:258}).wait(1).to({graphics:mask_3_graphics_239,x:255.9,y:258}).wait(1).to({graphics:mask_3_graphics_240,x:257.3,y:258}).wait(1).to({graphics:mask_3_graphics_241,x:258.7,y:258}).wait(1).to({graphics:mask_3_graphics_242,x:260.1,y:258}).wait(1).to({graphics:mask_3_graphics_243,x:261.5,y:258}).wait(1).to({graphics:mask_3_graphics_244,x:262.8,y:258}).wait(1).to({graphics:mask_3_graphics_245,x:264.2,y:258}).wait(1).to({graphics:mask_3_graphics_246,x:265.6,y:258}).wait(1).to({graphics:mask_3_graphics_247,x:267,y:258}).wait(1).to({graphics:mask_3_graphics_248,x:268.4,y:258}).wait(1).to({graphics:mask_3_graphics_249,x:269.8,y:258}).wait(1).to({graphics:mask_3_graphics_250,x:271.1,y:258}).wait(1).to({graphics:mask_3_graphics_251,x:272.5,y:258}).wait(1).to({graphics:mask_3_graphics_252,x:273.9,y:258}).wait(1).to({graphics:mask_3_graphics_253,x:275.3,y:258}).wait(1).to({graphics:mask_3_graphics_254,x:276.7,y:258}).wait(1).to({graphics:mask_3_graphics_255,x:278.1,y:258}).wait(1).to({graphics:mask_3_graphics_256,x:279.4,y:258}).wait(1).to({graphics:mask_3_graphics_257,x:280.8,y:258}).wait(1).to({graphics:mask_3_graphics_258,x:282.2,y:258}).wait(1).to({graphics:mask_3_graphics_259,x:283.6,y:258}).wait(1).to({graphics:mask_3_graphics_260,x:284.9,y:258}).wait(1).to({graphics:mask_3_graphics_261,x:286.2,y:258}).wait(1).to({graphics:mask_3_graphics_262,x:287.5,y:258}).wait(1).to({graphics:mask_3_graphics_263,x:288.8,y:258}).wait(1).to({graphics:mask_3_graphics_264,x:290.1,y:258}).wait(1).to({graphics:mask_3_graphics_265,x:291.4,y:258}).wait(1).to({graphics:mask_3_graphics_266,x:292.7,y:258}).wait(1).to({graphics:mask_3_graphics_267,x:294,y:258}).wait(1).to({graphics:mask_3_graphics_268,x:295.3,y:258}).wait(1).to({graphics:mask_3_graphics_269,x:296.6,y:258}).wait(1).to({graphics:mask_3_graphics_270,x:297.9,y:258}).wait(1).to({graphics:mask_3_graphics_271,x:299.2,y:258}).wait(1).to({graphics:mask_3_graphics_272,x:300.4,y:258}).wait(1).to({graphics:mask_3_graphics_273,x:301.7,y:258}).wait(1).to({graphics:mask_3_graphics_274,x:303,y:258}).wait(1).to({graphics:mask_3_graphics_275,x:304.3,y:258}).wait(1).to({graphics:mask_3_graphics_276,x:305.5,y:258}).wait(1).to({graphics:mask_3_graphics_277,x:306.7,y:258}).wait(1).to({graphics:mask_3_graphics_278,x:307.9,y:258}).wait(1).to({graphics:mask_3_graphics_279,x:309.1,y:258}).wait(1).to({graphics:mask_3_graphics_280,x:310.3,y:258}).wait(1).to({graphics:mask_3_graphics_281,x:311.5,y:258}).wait(1).to({graphics:mask_3_graphics_282,x:312.7,y:258}).wait(1).to({graphics:mask_3_graphics_283,x:313.9,y:258}).wait(1).to({graphics:mask_3_graphics_284,x:315.1,y:258}).wait(1).to({graphics:mask_3_graphics_285,x:316.2,y:258}).wait(1).to({graphics:mask_3_graphics_286,x:317.4,y:258}).wait(1).to({graphics:mask_3_graphics_287,x:319.3,y:258}).wait(1).to({graphics:mask_3_graphics_288,x:321.1,y:258}).wait(1).to({graphics:mask_3_graphics_289,x:322.9,y:258}).wait(1).to({graphics:mask_3_graphics_290,x:324.7,y:258}).wait(1).to({graphics:mask_3_graphics_291,x:326.5,y:258}).wait(1).to({graphics:mask_3_graphics_292,x:328.4,y:258}).wait(1).to({graphics:mask_3_graphics_293,x:330.2,y:258}).wait(1).to({graphics:mask_3_graphics_294,x:332,y:258}).wait(405));

	// drawing
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("ABvhYQBShbBfhiQBehjBih3QBhh4BniEQBniEBJiAQBIiAAQhtQABgLAAgLQABhehvhBQh9hIiKBFQiFBDhjBfQgDADgDADQhjBhhBB4QhEB8gfCKQghCPgGCTQgFCQAkCNQAQA/AgA3QBrBoCdASQCdASCFgbQCFgbCAgpQB/gpB/gsQCMgxCHg+QBVgnBQgvA5TW3QFpj2FYkvQBbhQBbhVQA+g6A9g6QFuldFhl0QABAAAAAA");
	this.shape_4.setTransform(256.8,273.7);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(234).to({_off:false},0).wait(465));

	// ar2
	this.instance_3 = new lib.ar2("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(253.7,117.4,1,1,0,0,0,0.8,-0.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(159).to({_off:false},0).wait(540));

	// circle mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_159 = new cjs.Graphics().p("ABVVvIZf9mQGIFSAnICQAnIFlSGJQlSGIoEAmQg2AEg1AAQnCAAlgkug");
	var mask_4_graphics_160 = new cjs.Graphics().p("AB9WPIYP+nQGWFBA8IBQA8IDlCGWQlBGWoCA7QhSAKhPAAQmiAAlVkPg");
	var mask_4_graphics_161 = new cjs.Graphics().p("ACmWuIW8/lQGjEwBRH9QBRIAkwGjQkwGjn/BRQhtARhoAAQmDAAlKjwg");
	var mask_4_graphics_162 = new cjs.Graphics().p("ADQXLMAVogggQGvEfBmH5QBmH8kfGvQkeGwn8BlQiGAbiAAAQlnAAk9jTg");
	var mask_4_graphics_163 = new cjs.Graphics().p("AD7XnMAURghYQG6ENB7H1QB7H3kMG6QkNG7n3B6QieAniYAAQlMAAkvi3g");
	var mask_4_graphics_164 = new cjs.Graphics().p("AEoYAMAS3giLQHFD6CPHvQCQHyj6HFQj6HGnxCPQi2A1iwAAQkxAAkfifg");
	var mask_4_graphics_165 = new cjs.Graphics().p("AFWYYMARbgi7QHPDnCkHpQCkHrjnHPQjnHQnrCjQjMBFjHAAQkYAAkOiHg");
	var mask_4_graphics_166 = new cjs.Graphics().p("AGEYuMAP+gjnQHYDUC4HiQC5HjjUHZQjUHYnjC4QjhBWjfAAQj/AAj9hxg");
	var mask_4_graphics_167 = new cjs.Graphics().p("AG0ZCMAOegkPQHhDADMHbQDMHajAHhQjAHhnbDLQj1Bqj3AAQjnAAjphdg");
	var mask_4_graphics_168 = new cjs.Graphics().p("AHlZUMAM9gkzQHoCsDfHSQDgHSisHoQisHonSDfQkIB/kPAAQjQAAjThLg");
	var mask_4_graphics_169 = new cjs.Graphics().p("AIWZkMALbglTQHvCYDyHIQDzHIiXHvQiYHunJDyQkZCWkoAAQi4AAi+g6g");
	var mask_4_graphics_170 = new cjs.Graphics().p("AI5ZuMAKWglnQHzCJD/HBQEAHBiJHzQiJHznCD/QklCnk5AAQioAAiugwg");
	var mask_4_graphics_171 = new cjs.Graphics().p("AJcZ3MAJQgl4QH3B6EMG6QENG5h7H3Qh7H2m6EMQkvC5lMAAQiYAAidgng");
	var mask_4_graphics_172 = new cjs.Graphics().p("AJ/Z/MAILgmIQH6BsEYGyQEZGxhsH6QhsH6mzEYQk5DMlfAAQiHAAiMgfg");
	var mask_4_graphics_173 = new cjs.Graphics().p("AKiaHMAHFgmXQH9BeEkGpQEmGpheH9QhdH9mrElQlCDelyAAQh3AAh7gWg");
	var mask_4_graphics_174 = new cjs.Graphics().p("ALGaNMAF+gmiQH/BPExGgQEyGhhPH/QhQH/mhExQlLDzmHAAQhlAAhpgQg");
	var mask_4_graphics_175 = new cjs.Graphics().p("ALqaSMAE2gmsQICBAE8GYQE+GXhAICQhBIBmYE9QlTEImcAAQhUAAhWgLg");
	var mask_4_graphics_176 = new cjs.Graphics().p("AMOaWMADvgm0QIDAyFIGOQFJGOgxIDQgyIDmPFIQlaEfmyAAQhCAAhDgHg");
	var mask_4_graphics_177 = new cjs.Graphics().p("AMyaZMACngm5QIFAiFTGFQFVGFgjIEQgjIEmFFTQlhE1nKAAQguAAgwgDg");
	var mask_4_graphics_178 = new cjs.Graphics().p("ANWabMABggm9QIFAUFeF7QFgF7gUIEQgUIFl8FeQlmFNniAAIg3gBg");
	var mask_4_graphics_179 = new cjs.Graphics().p("AN6acMAAYgm/QIFAFFqFxQFqFxgFIEQgFIFlyFqQlrFln8AAIgOAAg");
	var mask_4_graphics_180 = new cjs.Graphics().p("ANusiQIFgKF0FmQF1FnAKIEQAJIFlmFzQlmF1oFAKg");
	var mask_4_graphics_181 = new cjs.Graphics().p("ANKsgQIFgZF+FbQF/FcAYIEQAZIElcF+QlbF/oEAYg");
	var mask_4_graphics_182 = new cjs.Graphics().p("AMnsdQIDgnGIFQQGIFQAoIDQAnIDlQGIQlQGJoEAng");
	var mask_4_graphics_183 = new cjs.Graphics().p("AMDsYQICg2GRFEQGSFGA2IBQA3IClGGRQlEGSoCA3g");
	var mask_4_graphics_184 = new cjs.Graphics().p("ALfsRQIAhFGbE5QGbE5BFH/QBFIBk6GaQk4GboBBFg");
	var mask_4_graphics_185 = new cjs.Graphics().p("AK7sJQH+hUGjEtQGlEuBTH9QBUH+kuGjQksGkn+BUg");
	var mask_4_graphics_186 = new cjs.Graphics().p("AKYr/QH7hjGsEhQGsEhBjH7QBiH7khGsQkhGsn7Bjg");
	var mask_4_graphics_187 = new cjs.Graphics().p("AJ1r0QH4hxG0EUQG0EVBxH3QBxH5kVGzQkUG1n4Bxg");
	var mask_4_graphics_188 = new cjs.Graphics().p("AJSroQH1h/G7EIQG8EICAH0QB/H1kIG7QkIG8n1CAg");
	var mask_4_graphics_189 = new cjs.Graphics().p("AIarQQHviXHGDzQHJD0CWHtQCWHujzHIQjzHInuCWg");
	var mask_4_graphics_190 = new cjs.Graphics().p("AHjq1QHnitHSDdQHTDeCtHmQCtHnjfHSQjdHTnnCtg");
	var mask_4_graphics_191 = new cjs.Graphics().p("AGtqXQHfjDHbDIQHdDIDDHeQDEHejJHcQjIHcneDEg");
	var mask_4_graphics_192 = new cjs.Graphics().p("AF5p0QHVjZHkCxQHlCyDZHVQDaHUizHlQixHlnVDZg");
	var mask_4_graphics_193 = new cjs.Graphics().p("AFFpOQHLjvHrCbQHuCcDuHKQDvHKicHsQibHtnLDug");
	var mask_4_graphics_194 = new cjs.Graphics().p("AETolQG/kDHyCEQH0CFEEG/QEDG+iFHzQiEHzm/EEg");
	var mask_4_graphics_195 = new cjs.Graphics().p("ADin4QGzkXH4BtQH5BtEYGzQEYGxhuH5QhtH5myEYg");
	var mask_4_graphics_196 = new cjs.Graphics().p("ACznHQGlksH9BWQH+BWErGlQEsGkhXH+QhVH9mlErg");
	var mask_4_graphics_197 = new cjs.Graphics().p("ACFmUQGXk+IAA+QIBA+E/GXQE/GWg/IBQg+IBmXE+g");
	var mask_4_graphics_198 = new cjs.Graphics().p("ABZldQGIlRICAnQIEAmFRGIQFRGHgnIDQgmIDmIFRg");
	var mask_4_graphics_199 = new cjs.Graphics().p("AAukjQF4ljIEAPQIFAPFjF4QFiF2gPIFQgOIEl4Fjg");
	var mask_4_graphics_200 = new cjs.Graphics().p("AAGjmQFnl0IDgJQIFgJF0FnQF0FmAIIEQAKIFlnFzg");
	var mask_4_graphics_201 = new cjs.Graphics().p("AghinQFVmEIDghQIEghGEFWQGEFUAgIEQAhIDlVGEg");
	var mask_4_graphics_202 = new cjs.Graphics().p("AhGhlQFCmTIBg5QICg4GTFDQGUFCA3ICQA6IBlEGTg");
	var mask_4_graphics_203 = new cjs.Graphics().p("AhqggQEwmiH9hQQH/hRGiExQGiEwBPH9QBRH+kwGig");
	var mask_4_graphics_204 = new cjs.Graphics().p("AiWA+QEVmzH4hvQH5hwG0EWQGzEWBvH3QBxH4kWG0g");
	var mask_4_graphics_205 = new cjs.Graphics().p("Ai+CiQD6nDHviPQHxiPHFD7QHED6COHwQCPHwj6HEg");
	var mask_4_graphics_206 = new cjs.Graphics().p("AjhEJQDdnSHlitQHoitHTDeQHTDeCsHlQCuHnjeHTg");
	var mask_4_graphics_207 = new cjs.Graphics().p("AkBFzQDBneHZjLQHcjLHgDAQHgDBDKHaQDMHbjBHfg");
	var mask_4_graphics_208 = new cjs.Graphics().p("AkbHgQCinpHMjoQHOjpHrCjQHrCiDoHNQDoHNiiHrg");
	var mask_4_graphics_209 = new cjs.Graphics().p("AkxJQQCEn0G9kDQG/kFH0CEQH0CDEDG+QEFG+iEH0g");
	var mask_4_graphics_210 = new cjs.Graphics().p("AlCLBQBln8GrkeQGukfH8BkQH7BlEfGsQEgGthlH7g");
	var mask_4_graphics_211 = new cjs.Graphics().p("AlOMzQBFoAGZk4QGbk6IBBEQIABFE5GbQE6GahFIAg");
	var mask_4_graphics_212 = new cjs.Graphics().p("AlWOnQAloEGFlSQGHlSIEAlQIEAlFSGGQFTGGglIEg");
	var mask_4_graphics_213 = new cjs.Graphics().p("AlZQbQAFoGFwlpQFxlpIFAEQIFAFFqFxQFqFwgFIFg");
	var mask_4_graphics_214 = new cjs.Graphics().p("AgYDJQFZmAIFgbQIEgbGAFZQGAFaAcIEMgm8ACDQgboEFZmAg");
	var mask_4_graphics_215 = new cjs.Graphics().p("AhHDeQFBmVIBg7QICg7GVFBQGVFBA7ICMgmvAEdQg7oCFBmUg");
	var mask_4_graphics_216 = new cjs.Graphics().p("AhpDxQEsmkH+hVQH+hVGkEtQGlErBVH+MgmdAGaQhVn+Esmkg");
	var mask_4_graphics_217 = new cjs.Graphics().p("AiGEHQEWmzH5hvQH5hvGzEXQG0EVBuH6MgmFAIWQhun5EWmyg");
	var mask_4_graphics_218 = new cjs.Graphics().p("AifEeQD/nAHziIQHziJHAEBQHBD/CJHyMglnAKSQiInyEAnBg");
	var mask_4_graphics_219 = new cjs.Graphics().p("Ai0E4QDonNHsihQHriiHNDqQHNDoCiHrMglCAMLQiinrDpnNg");
	var mask_4_graphics_220 = new cjs.Graphics().p("AjEFUQDQnYHji6QHii7HYDSQHZDRC6HhMgkXAODQi6njDRnXg");
	var mask_4_graphics_221 = new cjs.Graphics().p("AjQFxQC5niHYjSQHYjTHiC6QHiC4DTHYMgjmAP3QjTnYC5nig");
	var mask_4_graphics_222 = new cjs.Graphics().p("AjXGQQCgnqHMjqQHNjqHrChQHrCfDqHMMgivARqQjqnNCgnrg");
	var mask_4_graphics_223 = new cjs.Graphics().p("AjaGxQCHnyG/kBQHBkBHyCHQHzCHEBG/MghzATZQkBnACHnyg");
	var mask_4_graphics_224 = new cjs.Graphics().p("AjbHDQB6n2G5kNQG5kNH2B6QH2B5ENG5MghRAUTQkNm6B5n1g");
	var mask_4_graphics_225 = new cjs.Graphics().p("AjZHVQBsn4GxkaQGykZH5BtQH5BsEaGxMgguAVMQkZmyBsn5g");
	var mask_4_graphics_226 = new cjs.Graphics().p("AjXHoQBfn7GpklQGqklH8BfQH9BeEkGpMggJAWFQkkmqBen8g");
	var mask_4_graphics_227 = new cjs.Graphics().p("AjTH8QBQn+GikxQGikwH/BSQH+BQExGiI/kW7QkvmiBRn+g");
	var mask_4_graphics_228 = new cjs.Graphics().p("AjOIQQBDoCGZk6QGak8IABEQIBBCE8GaI+8XyQk6mbBDn/g");
	var mask_4_graphics_229 = new cjs.Graphics().p("AjIIkQA1oDGQlGQGSlGICA2QIDA0FGGRI+SYnQlFmSA1oBg");
	var mask_4_graphics_230 = new cjs.Graphics().p("AjBI4QAnoEGIlQQGJlSIDAoQIEAnFRGII9nZbQlQmJAnoDg");
	var mask_4_graphics_231 = new cjs.Graphics().p("Ai4JNQAZoFF/lbQF/lcIFAaQIFAZFbF/I87aOQlamAAZoEg");
	var mask_4_graphics_232 = new cjs.Graphics().p("AiuJiQALoFF1lmQF2lmIGAMQIFALFmF2I8Na/Qlll2ALoFg");
	var mask_4_graphics_233 = new cjs.Graphics().p("AijJ4QgDoGFslvQFslwIGgCQIFgEFwFtI7ebvQlvlsgDoFg");
	var mask_4_graphics_234 = new cjs.Graphics().p("AiVKNQgRoGFhl4QFjl6IFgQQIFgRF6FiI6uceQl5ligQoFg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(159).to({graphics:mask_4_graphics_159,x:215.1,y:169.3}).wait(1).to({graphics:mask_4_graphics_160,x:215.1,y:169.4}).wait(1).to({graphics:mask_4_graphics_161,x:215.1,y:169.4}).wait(1).to({graphics:mask_4_graphics_162,x:215.2,y:169.4}).wait(1).to({graphics:mask_4_graphics_163,x:215.2,y:169.4}).wait(1).to({graphics:mask_4_graphics_164,x:215.2,y:169.5}).wait(1).to({graphics:mask_4_graphics_165,x:215.2,y:169.5}).wait(1).to({graphics:mask_4_graphics_166,x:215.2,y:169.5}).wait(1).to({graphics:mask_4_graphics_167,x:215.2,y:169.5}).wait(1).to({graphics:mask_4_graphics_168,x:215.2,y:169.5}).wait(1).to({graphics:mask_4_graphics_169,x:215.2,y:169.4}).wait(1).to({graphics:mask_4_graphics_170,x:215.2,y:169.4}).wait(1).to({graphics:mask_4_graphics_171,x:215.1,y:169.4}).wait(1).to({graphics:mask_4_graphics_172,x:215.1,y:169.4}).wait(1).to({graphics:mask_4_graphics_173,x:215.1,y:169.3}).wait(1).to({graphics:mask_4_graphics_174,x:215.1,y:169.3}).wait(1).to({graphics:mask_4_graphics_175,x:215.1,y:169.3}).wait(1).to({graphics:mask_4_graphics_176,x:215,y:169.3}).wait(1).to({graphics:mask_4_graphics_177,x:215,y:169.2}).wait(1).to({graphics:mask_4_graphics_178,x:215,y:169.2}).wait(1).to({graphics:mask_4_graphics_179,x:215,y:169.2}).wait(1).to({graphics:mask_4_graphics_180,x:215,y:169.2}).wait(1).to({graphics:mask_4_graphics_181,x:215,y:169.1}).wait(1).to({graphics:mask_4_graphics_182,x:215,y:169}).wait(1).to({graphics:mask_4_graphics_183,x:215,y:168.9}).wait(1).to({graphics:mask_4_graphics_184,x:215,y:168.6}).wait(1).to({graphics:mask_4_graphics_185,x:215.1,y:168.4}).wait(1).to({graphics:mask_4_graphics_186,x:215.1,y:168.1}).wait(1).to({graphics:mask_4_graphics_187,x:215.1,y:167.7}).wait(1).to({graphics:mask_4_graphics_188,x:215.1,y:167.3}).wait(1).to({graphics:mask_4_graphics_189,x:215.1,y:166.5}).wait(1).to({graphics:mask_4_graphics_190,x:215.2,y:165.6}).wait(1).to({graphics:mask_4_graphics_191,x:215.2,y:164.6}).wait(1).to({graphics:mask_4_graphics_192,x:215.2,y:163.4}).wait(1).to({graphics:mask_4_graphics_193,x:215.1,y:162.1}).wait(1).to({graphics:mask_4_graphics_194,x:215.1,y:160.8}).wait(1).to({graphics:mask_4_graphics_195,x:215.1,y:159.3}).wait(1).to({graphics:mask_4_graphics_196,x:215,y:157.6}).wait(1).to({graphics:mask_4_graphics_197,x:215,y:155.9}).wait(1).to({graphics:mask_4_graphics_198,x:215,y:154.1}).wait(1).to({graphics:mask_4_graphics_199,x:215,y:152.2}).wait(1).to({graphics:mask_4_graphics_200,x:214.9,y:150.1}).wait(1).to({graphics:mask_4_graphics_201,x:215,y:148}).wait(1).to({graphics:mask_4_graphics_202,x:215,y:145.8}).wait(1).to({graphics:mask_4_graphics_203,x:215,y:143.5}).wait(1).to({graphics:mask_4_graphics_204,x:215.1,y:140.3}).wait(1).to({graphics:mask_4_graphics_205,x:215.1,y:137}).wait(1).to({graphics:mask_4_graphics_206,x:215.2,y:133.6}).wait(1).to({graphics:mask_4_graphics_207,x:215.2,y:130}).wait(1).to({graphics:mask_4_graphics_208,x:215.2,y:126.4}).wait(1).to({graphics:mask_4_graphics_209,x:215.1,y:122.7}).wait(1).to({graphics:mask_4_graphics_210,x:215.1,y:118.9}).wait(1).to({graphics:mask_4_graphics_211,x:215.1,y:115.1}).wait(1).to({graphics:mask_4_graphics_212,x:215,y:111.3}).wait(1).to({graphics:mask_4_graphics_213,x:215,y:107.4}).wait(1).to({graphics:mask_4_graphics_214,x:215,y:110.1}).wait(1).to({graphics:mask_4_graphics_215,x:214.6,y:114}).wait(1).to({graphics:mask_4_graphics_216,x:214.1,y:117.1}).wait(1).to({graphics:mask_4_graphics_217,x:213.5,y:120.2}).wait(1).to({graphics:mask_4_graphics_218,x:212.8,y:123.3}).wait(1).to({graphics:mask_4_graphics_219,x:211.9,y:126.4}).wait(1).to({graphics:mask_4_graphics_220,x:210.8,y:129.4}).wait(1).to({graphics:mask_4_graphics_221,x:209.6,y:132.3}).wait(1).to({graphics:mask_4_graphics_222,x:208.2,y:135.2}).wait(1).to({graphics:mask_4_graphics_223,x:206.7,y:137.9}).wait(1).to({graphics:mask_4_graphics_224,x:205.8,y:139.4}).wait(1).to({graphics:mask_4_graphics_225,x:205,y:140.8}).wait(1).to({graphics:mask_4_graphics_226,x:204,y:142.2}).wait(1).to({graphics:mask_4_graphics_227,x:203.1,y:143.6}).wait(1).to({graphics:mask_4_graphics_228,x:202.1,y:145}).wait(1).to({graphics:mask_4_graphics_229,x:201,y:146.3}).wait(1).to({graphics:mask_4_graphics_230,x:199.9,y:147.6}).wait(1).to({graphics:mask_4_graphics_231,x:198.8,y:148.9}).wait(1).to({graphics:mask_4_graphics_232,x:197.7,y:150.1}).wait(1).to({graphics:mask_4_graphics_233,x:196.5,y:151.3}).wait(1).to({graphics:mask_4_graphics_234,x:195.4,y:152.4}).wait(465));

	// drawing
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("Al5KvQBShaBfhjQBfhjBhh3QBhh3BniFQBmiDBJiAQBJiAAPhtQACgLAAgLQABhehwhBQh8hIiKBFQiFBDhiBfQgEADgDADQhiBhhCB4QhDB8ggCKQghCOgFCTQgGCQAkCNQAQA/AgA3g");
	this.shape_5.setTransform(305.7,196.1);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(159).to({_off:false},0).wait(540));

	// Layer 2
	this.instance_4 = new lib.ar1("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(78.1,350.8,1,1,0,0,0,-0.8,0.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(690));

	// mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_9 = new cjs.Graphics().p("AlNkJIBghYII7JpIhiBag");
	var mask_5_graphics_10 = new cjs.Graphics().p("AlXkAIB1hrII6JqIh3Btg");
	var mask_5_graphics_11 = new cjs.Graphics().p("Alij2ICKh+II6JpIiLCAg");
	var mask_5_graphics_12 = new cjs.Graphics().p("AlsjtICfiRII6JqIigCTg");
	var mask_5_graphics_13 = new cjs.Graphics().p("Al2jjICzikII6JpIi1Cmg");
	var mask_5_graphics_14 = new cjs.Graphics().p("AmBjZIDJi4II5JqIjJC5g");
	var mask_5_graphics_15 = new cjs.Graphics().p("AmLjQIDcjKII7JpIjfDMg");
	var mask_5_graphics_16 = new cjs.Graphics().p("AmVjGIDxjeII6JqIjzDfg");
	var mask_5_graphics_17 = new cjs.Graphics().p("Amgi9IEGjwII7JpIkIDyg");
	var mask_5_graphics_18 = new cjs.Graphics().p("AmqizIEbkEII6JqIkdEFg");
	var mask_5_graphics_19 = new cjs.Graphics().p("Am1iqIEwkXII7JqIkyEYg");
	var mask_5_graphics_20 = new cjs.Graphics().p("Am/igIFFkqII6JpIlGEsg");
	var mask_5_graphics_21 = new cjs.Graphics().p("AnJiXIFZk9II6JqIlbE+g");
	var mask_5_graphics_22 = new cjs.Graphics().p("AnUiNIFulQII6JpIlvFSg");
	var mask_5_graphics_23 = new cjs.Graphics().p("AneiEIGDljII6JqImFFlg");
	var mask_5_graphics_24 = new cjs.Graphics().p("Anoh6IGXl2II6JqImZF3g");
	var mask_5_graphics_25 = new cjs.Graphics().p("AnzhxIGsmJII7JqImuGLg");
	var mask_5_graphics_26 = new cjs.Graphics().p("An9hnIHBmcII6JpInDGeg");
	var mask_5_graphics_27 = new cjs.Graphics().p("AoIheIHWmvII6JqInXGxg");
	var mask_5_graphics_28 = new cjs.Graphics().p("AoShUIHrnCII6JpInsHEg");
	var mask_5_graphics_29 = new cjs.Graphics().p("AochLIH/nVII6JqIoBHXg");
	var mask_5_graphics_30 = new cjs.Graphics().p("AonhBIIUnoII7JpIoWHqg");
	var mask_5_graphics_31 = new cjs.Graphics().p("Aoxg4IIpn7II6JqIorH9g");
	var mask_5_graphics_32 = new cjs.Graphics().p("Ao7guII8oOII7JqIo+IPg");
	var mask_5_graphics_33 = new cjs.Graphics().p("ApGgkIJSoiII7JqIpTIjg");
	var mask_5_graphics_34 = new cjs.Graphics().p("ApQgbIJmo0II7JpIpoI2g");
	var mask_5_graphics_35 = new cjs.Graphics().p("ApbgRIJ7pIII7JqIp8JJg");
	var mask_5_graphics_36 = new cjs.Graphics().p("AplgIIKQpbII7JqIqRJcg");
	var mask_5_graphics_37 = new cjs.Graphics().p("ApvABIKkptII7JqIqmJvg");
	var mask_5_graphics_38 = new cjs.Graphics().p("Ap6AKIK6qAII6JrIq6KBg");
	var mask_5_graphics_39 = new cjs.Graphics().p("AqEAUILOqTII7JqIrQKVg");
	var mask_5_graphics_40 = new cjs.Graphics().p("AqOAdILiqlII7JqIrkKng");
	var mask_5_graphics_41 = new cjs.Graphics().p("AqZAnIL4q5II7JrIr5K6g");
	var mask_5_graphics_42 = new cjs.Graphics().p("AqjAwIMMrMII7JrIsOLOg");
	var mask_5_graphics_43 = new cjs.Graphics().p("AquA6IMhrfII8JrIsjLgg");
	var mask_5_graphics_44 = new cjs.Graphics().p("Aq4BDIM2ryII7JrIs3L0g");
	var mask_5_graphics_45 = new cjs.Graphics().p("ArCBNINKsFII7JrItMMGg");
	var mask_5_graphics_46 = new cjs.Graphics().p("ArNBWINfsYII8JrIthMag");
	var mask_5_graphics_47 = new cjs.Graphics().p("ArXBgIN0srII7JrIt2Msg");
	var mask_5_graphics_48 = new cjs.Graphics().p("ArhBpIOJs+II6JrIuKNAg");
	var mask_5_graphics_49 = new cjs.Graphics().p("ArsBzIOetRII7JqIufNTg");
	var mask_5_graphics_50 = new cjs.Graphics().p("Ar2B9IOytlII7JrIu0Nmg");
	var mask_5_graphics_51 = new cjs.Graphics().p("AsBCGIPIt3II6JqIvIN5g");
	var mask_5_graphics_52 = new cjs.Graphics().p("AsLCQIPcuLII7JrIvdOMg");
	var mask_5_graphics_53 = new cjs.Graphics().p("AsVCZIPwueII7JrIvyOfg");
	var mask_5_graphics_54 = new cjs.Graphics().p("AsgCjIQGuxII6JrIwGOyg");
	var mask_5_graphics_55 = new cjs.Graphics().p("AsqCsIQavEII7JsIwcPEg");
	var mask_5_graphics_56 = new cjs.Graphics().p("As0C2IQvvXII6JrIwwPYg");
	var mask_5_graphics_57 = new cjs.Graphics().p("As/C/IREvpII7JrIxFPqg");
	var mask_5_graphics_58 = new cjs.Graphics().p("AtJDJIRZv9II6JrIxaP+g");
	var mask_5_graphics_59 = new cjs.Graphics().p("AtUDSIRtwQII8JsIxvQRg");
	var mask_5_graphics_60 = new cjs.Graphics().p("AteDcISCwjII7JrIyDQkg");
	var mask_5_graphics_61 = new cjs.Graphics().p("AtoDlISWw2II7JrIyYQ4g");
	var mask_5_graphics_62 = new cjs.Graphics().p("AtzDvISsxJII7JrIytRKg");
	var mask_5_graphics_63 = new cjs.Graphics().p("At9D4ITAxcII7JrIzCReg");
	var mask_5_graphics_64 = new cjs.Graphics().p("AuHECITVxvII6JrIzWRwg");
	var mask_5_graphics_65 = new cjs.Graphics().p("AuSELITqyCII7JrIzrSEg");
	var mask_5_graphics_66 = new cjs.Graphics().p("AucEVIT+yVII7JrI0ASWg");
	var mask_5_graphics_67 = new cjs.Graphics().p("AunEeIUUyoII6JrI0USqg");
	var mask_5_graphics_68 = new cjs.Graphics().p("AuxEoIUoy7II7JrI0pS8g");
	var mask_5_graphics_69 = new cjs.Graphics().p("Au7EyIU9zPII6JsI0+TPg");
	var mask_5_graphics_70 = new cjs.Graphics().p("AvGE7IVSziII6JsI1STig");
	var mask_5_graphics_71 = new cjs.Graphics().p("AvQFFIVnz1II6JrI1oT2g");
	var mask_5_graphics_72 = new cjs.Graphics().p("AvaFOIV70III6JsI18UIg");
	var mask_5_graphics_73 = new cjs.Graphics().p("AvlFYIWQ0bII7JrI2RUcg");
	var mask_5_graphics_74 = new cjs.Graphics().p("AvvFhIWk0tII7JrI2mUug");
	var mask_5_graphics_75 = new cjs.Graphics().p("Av6FrIW61BII7JrI27VCg");
	var mask_5_graphics_76 = new cjs.Graphics().p("AwEF0IXO1TII7JqI3PVVg");
	var mask_5_graphics_77 = new cjs.Graphics().p("AwOF+IXj1nII6JrI3kVog");
	var mask_5_graphics_78 = new cjs.Graphics().p("AwZGHIX416II7JsI35V7g");
	var mask_5_graphics_79 = new cjs.Graphics().p("AwjGRIYM2NII7JrI4OWOg");
	var mask_5_graphics_80 = new cjs.Graphics().p("AwtGaIYh2gII6JsI4iWhg");
	var mask_5_graphics_81 = new cjs.Graphics().p("Aw4GkIY22zII7JrI43W0g");
	var mask_5_graphics_82 = new cjs.Graphics().p("AxCGtIZL3GII6JsI5MXHg");
	var mask_5_graphics_83 = new cjs.Graphics().p("AxNG3IZg3ZII6JrI5gXag");
	var mask_5_graphics_84 = new cjs.Graphics().p("AxXHAIZ03sII7JrI51Xug");
	var mask_5_graphics_85 = new cjs.Graphics().p("AxhHKIaJ3/II6JrI6KYAg");
	var mask_5_graphics_86 = new cjs.Graphics().p("AxsHUIaf4TII6JsI6fYTg");
	var mask_5_graphics_87 = new cjs.Graphics().p("Ax2HdIay4mII7JsI60Ymg");
	var mask_5_graphics_88 = new cjs.Graphics().p("AyAHnIbH45II6JsI7IY5g");
	var mask_5_graphics_89 = new cjs.Graphics().p("AyLHwIbc5MII7JsI7dZMg");
	var mask_5_graphics_90 = new cjs.Graphics().p("AyVH6Ibx5fII6JrI7yZgg");
	var mask_5_graphics_91 = new cjs.Graphics().p("AygIDIcG5xII7JrI8HZyg");
	var mask_5_graphics_92 = new cjs.Graphics().p("AyqINIcb6FII6JrI8baGg");
	var mask_5_graphics_93 = new cjs.Graphics().p("Ay0IWIcv6XII6JrI8waYg");
	var mask_5_graphics_94 = new cjs.Graphics().p("Ay/IgIdE6rII6JrI9Easg");
	var mask_5_graphics_95 = new cjs.Graphics().p("AzJIpIdZ6+II6JsI9aa/g");
	var mask_5_graphics_96 = new cjs.Graphics().p("AzTIzIdt7RII6JrI9ubSg");
	var mask_5_graphics_97 = new cjs.Graphics().p("AzeI8IeC7kII7JsI+Dblg");
	var mask_5_graphics_98 = new cjs.Graphics().p("AzoJGIeX73II6JrI+Yb4g");
	var mask_5_graphics_99 = new cjs.Graphics().p("AzzJPIes8KII7JsI+tcLg");
	var mask_5_graphics_100 = new cjs.Graphics().p("Az9JZIfB8dII6JrI/Bceg");
	var mask_5_graphics_101 = new cjs.Graphics().p("A0HJiIfV8wII6JsI/Wcxg");
	var mask_5_graphics_102 = new cjs.Graphics().p("A0SJsIfr9DII6JrI/rdEg");
	var mask_5_graphics_103 = new cjs.Graphics().p("A0cJ1If+9WII7JsMggAAdXg");
	var mask_5_graphics_104 = new cjs.Graphics().p("A0mJ/MAgTgdqII6JsMggUAdqg");
	var mask_5_graphics_105 = new cjs.Graphics().p("A0xKJMAgogd9II7JsMggpAd9g");
	var mask_5_graphics_106 = new cjs.Graphics().p("A07KSMAg9geQII6JsMgg+AeQg");
	var mask_5_graphics_107 = new cjs.Graphics().p("A1GKcMAhSgejII6JrMghSAekg");
	var mask_5_graphics_108 = new cjs.Graphics().p("A1QKlMAhnge1II6JrMghnAe2g");
	var mask_5_graphics_109 = new cjs.Graphics().p("A1aKvMAh7gfJII6JrMgh8AfKg");
	var mask_5_graphics_110 = new cjs.Graphics().p("A1lK4MAiQgfbII6JrMgiQAfcg");
	var mask_5_graphics_111 = new cjs.Graphics().p("A1vLCMAilgfvII6JsMgimAfvg");
	var mask_5_graphics_112 = new cjs.Graphics().p("A15LLMAi5ggCII6JsMgi6AgCg");
	var mask_5_graphics_113 = new cjs.Graphics().p("A2ELVMAjPggVII6JsMgjPAgVg");
	var mask_5_graphics_114 = new cjs.Graphics().p("A2OLeMAjjggoII6JsMgjkAgpg");
	var mask_5_graphics_115 = new cjs.Graphics().p("A2ZLoMAj5gg7II6JsMgj5Ag7g");
	var mask_5_graphics_116 = new cjs.Graphics().p("A2jLxMAkNghOII6JsMgkNAhPg");
	var mask_5_graphics_117 = new cjs.Graphics().p("A2tL7MAkhghhII6JrMgkiAhig");
	var mask_5_graphics_118 = new cjs.Graphics().p("A24MEMAk2gh0II7JsMgk3Ah1g");
	var mask_5_graphics_119 = new cjs.Graphics().p("A3CMOMAlLgiHII6JrMglMAiIg");
	var mask_5_graphics_120 = new cjs.Graphics().p("A3MMXMAlfgiaII6JsMglgAibg");
	var mask_5_graphics_121 = new cjs.Graphics().p("A3XMhMAl1gitII6JrMgl1Aiug");
	var mask_5_graphics_122 = new cjs.Graphics().p("A3hMrMAmJgjBII6JsMgmKAjBg");
	var mask_5_graphics_123 = new cjs.Graphics().p("A3sM0MAmegjUII6JtMgmeAjTg");
	var mask_5_graphics_124 = new cjs.Graphics().p("A32M+MAmzgjnII6JsMgmzAjng");
	var mask_5_graphics_125 = new cjs.Graphics().p("A4ANHMAnHgj5II6JsMgnIAj5g");
	var mask_5_graphics_126 = new cjs.Graphics().p("A4LNRMAndgkNII5JsMgncAkNg");
	var mask_5_graphics_127 = new cjs.Graphics().p("A4VNaMAnxgkfII6JsMgnyAkfg");
	var mask_5_graphics_128 = new cjs.Graphics().p("A4fNkMAoGgkzII5JsMgoGAkzg");
	var mask_5_graphics_129 = new cjs.Graphics().p("A4qNtMAobglGII6JsMgobAlGg");
	var mask_5_graphics_130 = new cjs.Graphics().p("A40N3MAowglZII5JsMgowAlZg");
	var mask_5_graphics_131 = new cjs.Graphics().p("A4/OAMApEglsII7JsMgpFAltg");
	var mask_5_graphics_132 = new cjs.Graphics().p("A5JOKMApZgl/II6JsMgpZAl/g");
	var mask_5_graphics_133 = new cjs.Graphics().p("A5TOTMAptgmSII6JsMgpuAmTg");
	var mask_5_graphics_134 = new cjs.Graphics().p("A5eOdMAqDgmlII6JsMgqDAmlg");
	var mask_5_graphics_135 = new cjs.Graphics().p("A5oOmMAqXgm4II6JsMgqYAm5g");
	var mask_5_graphics_136 = new cjs.Graphics().p("A5yOwMAqsgnLII5JsMgqsAnLg");
	var mask_5_graphics_137 = new cjs.Graphics().p("A59O5MArBgneII6JsMgrBAnfg");
	var mask_5_graphics_138 = new cjs.Graphics().p("A6HPDMArVgnxII6JsMgrWAnxg");
	var mask_5_graphics_139 = new cjs.Graphics().p("A6SPMMArrgoEII5JsMgrqAoFg");
	var mask_5_graphics_140 = new cjs.Graphics().p("A6cPWMAr/goYII6JsMgr/AoYg");
	var mask_5_graphics_141 = new cjs.Graphics().p("A6mPgMAsTgorII6JsMgsUAorg");
	var mask_5_graphics_142 = new cjs.Graphics().p("A6xPpMAspgo9II5JsMgsoAo9g");
	var mask_5_graphics_143 = new cjs.Graphics().p("A67PzMAs+gpRII5JsMgs+ApRg");
	var mask_5_graphics_144 = new cjs.Graphics().p("A7FP8MAtSgpkII5JtMgtSApkg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_5_graphics_9,x:92.6,y:426.5}).wait(1).to({graphics:mask_5_graphics_10,x:93.7,y:425.5}).wait(1).to({graphics:mask_5_graphics_11,x:94.7,y:424.6}).wait(1).to({graphics:mask_5_graphics_12,x:95.7,y:423.6}).wait(1).to({graphics:mask_5_graphics_13,x:96.8,y:422.7}).wait(1).to({graphics:mask_5_graphics_14,x:97.8,y:421.7}).wait(1).to({graphics:mask_5_graphics_15,x:98.9,y:420.8}).wait(1).to({graphics:mask_5_graphics_16,x:99.9,y:419.8}).wait(1).to({graphics:mask_5_graphics_17,x:100.9,y:418.9}).wait(1).to({graphics:mask_5_graphics_18,x:102,y:417.9}).wait(1).to({graphics:mask_5_graphics_19,x:103,y:417}).wait(1).to({graphics:mask_5_graphics_20,x:104,y:416}).wait(1).to({graphics:mask_5_graphics_21,x:105.1,y:415.1}).wait(1).to({graphics:mask_5_graphics_22,x:106.1,y:414.1}).wait(1).to({graphics:mask_5_graphics_23,x:107.2,y:413.1}).wait(1).to({graphics:mask_5_graphics_24,x:108.2,y:412.2}).wait(1).to({graphics:mask_5_graphics_25,x:109.2,y:411.2}).wait(1).to({graphics:mask_5_graphics_26,x:110.3,y:410.3}).wait(1).to({graphics:mask_5_graphics_27,x:111.3,y:409.3}).wait(1).to({graphics:mask_5_graphics_28,x:112.3,y:408.4}).wait(1).to({graphics:mask_5_graphics_29,x:113.4,y:407.4}).wait(1).to({graphics:mask_5_graphics_30,x:114.4,y:406.5}).wait(1).to({graphics:mask_5_graphics_31,x:115.5,y:405.5}).wait(1).to({graphics:mask_5_graphics_32,x:116.5,y:404.6}).wait(1).to({graphics:mask_5_graphics_33,x:117.5,y:403.6}).wait(1).to({graphics:mask_5_graphics_34,x:118.6,y:402.7}).wait(1).to({graphics:mask_5_graphics_35,x:119.6,y:401.7}).wait(1).to({graphics:mask_5_graphics_36,x:120.6,y:400.8}).wait(1).to({graphics:mask_5_graphics_37,x:121.7,y:399.8}).wait(1).to({graphics:mask_5_graphics_38,x:122.7,y:398.9}).wait(1).to({graphics:mask_5_graphics_39,x:123.8,y:397.9}).wait(1).to({graphics:mask_5_graphics_40,x:124.8,y:397}).wait(1).to({graphics:mask_5_graphics_41,x:125.8,y:396}).wait(1).to({graphics:mask_5_graphics_42,x:126.9,y:395}).wait(1).to({graphics:mask_5_graphics_43,x:127.9,y:394.1}).wait(1).to({graphics:mask_5_graphics_44,x:128.9,y:393.1}).wait(1).to({graphics:mask_5_graphics_45,x:130,y:392.2}).wait(1).to({graphics:mask_5_graphics_46,x:131,y:391.2}).wait(1).to({graphics:mask_5_graphics_47,x:132.1,y:390.3}).wait(1).to({graphics:mask_5_graphics_48,x:133.1,y:389.3}).wait(1).to({graphics:mask_5_graphics_49,x:134.1,y:388.4}).wait(1).to({graphics:mask_5_graphics_50,x:135.2,y:387.4}).wait(1).to({graphics:mask_5_graphics_51,x:136.2,y:386.5}).wait(1).to({graphics:mask_5_graphics_52,x:137.2,y:385.5}).wait(1).to({graphics:mask_5_graphics_53,x:138.3,y:384.6}).wait(1).to({graphics:mask_5_graphics_54,x:139.3,y:383.6}).wait(1).to({graphics:mask_5_graphics_55,x:140.4,y:382.7}).wait(1).to({graphics:mask_5_graphics_56,x:141.4,y:381.7}).wait(1).to({graphics:mask_5_graphics_57,x:142.4,y:380.8}).wait(1).to({graphics:mask_5_graphics_58,x:143.5,y:379.8}).wait(1).to({graphics:mask_5_graphics_59,x:144.5,y:378.8}).wait(1).to({graphics:mask_5_graphics_60,x:145.5,y:377.9}).wait(1).to({graphics:mask_5_graphics_61,x:146.6,y:376.9}).wait(1).to({graphics:mask_5_graphics_62,x:147.6,y:376}).wait(1).to({graphics:mask_5_graphics_63,x:148.7,y:375}).wait(1).to({graphics:mask_5_graphics_64,x:149.7,y:374.1}).wait(1).to({graphics:mask_5_graphics_65,x:150.7,y:373.1}).wait(1).to({graphics:mask_5_graphics_66,x:151.8,y:372.2}).wait(1).to({graphics:mask_5_graphics_67,x:152.8,y:371.2}).wait(1).to({graphics:mask_5_graphics_68,x:153.8,y:370.3}).wait(1).to({graphics:mask_5_graphics_69,x:154.9,y:369.3}).wait(1).to({graphics:mask_5_graphics_70,x:155.9,y:368.4}).wait(1).to({graphics:mask_5_graphics_71,x:157,y:367.4}).wait(1).to({graphics:mask_5_graphics_72,x:158,y:366.5}).wait(1).to({graphics:mask_5_graphics_73,x:159,y:365.5}).wait(1).to({graphics:mask_5_graphics_74,x:160.1,y:364.6}).wait(1).to({graphics:mask_5_graphics_75,x:161.1,y:363.6}).wait(1).to({graphics:mask_5_graphics_76,x:162.1,y:362.7}).wait(1).to({graphics:mask_5_graphics_77,x:163.2,y:361.7}).wait(1).to({graphics:mask_5_graphics_78,x:164.2,y:360.7}).wait(1).to({graphics:mask_5_graphics_79,x:165.3,y:359.8}).wait(1).to({graphics:mask_5_graphics_80,x:166.3,y:358.8}).wait(1).to({graphics:mask_5_graphics_81,x:167.3,y:357.9}).wait(1).to({graphics:mask_5_graphics_82,x:168.4,y:356.9}).wait(1).to({graphics:mask_5_graphics_83,x:169.4,y:356}).wait(1).to({graphics:mask_5_graphics_84,x:170.4,y:355}).wait(1).to({graphics:mask_5_graphics_85,x:171.5,y:354.1}).wait(1).to({graphics:mask_5_graphics_86,x:172.5,y:353.1}).wait(1).to({graphics:mask_5_graphics_87,x:173.6,y:352.2}).wait(1).to({graphics:mask_5_graphics_88,x:174.6,y:351.2}).wait(1).to({graphics:mask_5_graphics_89,x:175.6,y:350.3}).wait(1).to({graphics:mask_5_graphics_90,x:176.7,y:349.3}).wait(1).to({graphics:mask_5_graphics_91,x:177.7,y:348.4}).wait(1).to({graphics:mask_5_graphics_92,x:178.7,y:347.4}).wait(1).to({graphics:mask_5_graphics_93,x:179.8,y:346.5}).wait(1).to({graphics:mask_5_graphics_94,x:180.8,y:345.5}).wait(1).to({graphics:mask_5_graphics_95,x:181.9,y:344.5}).wait(1).to({graphics:mask_5_graphics_96,x:182.9,y:343.6}).wait(1).to({graphics:mask_5_graphics_97,x:183.9,y:342.6}).wait(1).to({graphics:mask_5_graphics_98,x:185,y:341.7}).wait(1).to({graphics:mask_5_graphics_99,x:186,y:340.7}).wait(1).to({graphics:mask_5_graphics_100,x:187,y:339.8}).wait(1).to({graphics:mask_5_graphics_101,x:188.1,y:338.8}).wait(1).to({graphics:mask_5_graphics_102,x:189.1,y:337.9}).wait(1).to({graphics:mask_5_graphics_103,x:190.2,y:336.9}).wait(1).to({graphics:mask_5_graphics_104,x:191.2,y:336}).wait(1).to({graphics:mask_5_graphics_105,x:192.2,y:335}).wait(1).to({graphics:mask_5_graphics_106,x:193.3,y:334.1}).wait(1).to({graphics:mask_5_graphics_107,x:194.3,y:333.1}).wait(1).to({graphics:mask_5_graphics_108,x:195.3,y:332.2}).wait(1).to({graphics:mask_5_graphics_109,x:196.4,y:331.2}).wait(1).to({graphics:mask_5_graphics_110,x:197.4,y:330.3}).wait(1).to({graphics:mask_5_graphics_111,x:198.5,y:329.3}).wait(1).to({graphics:mask_5_graphics_112,x:199.5,y:328.4}).wait(1).to({graphics:mask_5_graphics_113,x:200.5,y:327.4}).wait(1).to({graphics:mask_5_graphics_114,x:201.6,y:326.4}).wait(1).to({graphics:mask_5_graphics_115,x:202.6,y:325.5}).wait(1).to({graphics:mask_5_graphics_116,x:203.6,y:324.5}).wait(1).to({graphics:mask_5_graphics_117,x:204.7,y:323.6}).wait(1).to({graphics:mask_5_graphics_118,x:205.7,y:322.6}).wait(1).to({graphics:mask_5_graphics_119,x:206.8,y:321.7}).wait(1).to({graphics:mask_5_graphics_120,x:207.8,y:320.7}).wait(1).to({graphics:mask_5_graphics_121,x:208.8,y:319.8}).wait(1).to({graphics:mask_5_graphics_122,x:209.9,y:318.8}).wait(1).to({graphics:mask_5_graphics_123,x:210.9,y:317.9}).wait(1).to({graphics:mask_5_graphics_124,x:211.9,y:316.9}).wait(1).to({graphics:mask_5_graphics_125,x:213,y:316}).wait(1).to({graphics:mask_5_graphics_126,x:214,y:315}).wait(1).to({graphics:mask_5_graphics_127,x:215.1,y:314.1}).wait(1).to({graphics:mask_5_graphics_128,x:216.1,y:313.1}).wait(1).to({graphics:mask_5_graphics_129,x:217.1,y:312.2}).wait(1).to({graphics:mask_5_graphics_130,x:218.2,y:311.2}).wait(1).to({graphics:mask_5_graphics_131,x:219.2,y:310.2}).wait(1).to({graphics:mask_5_graphics_132,x:220.2,y:309.3}).wait(1).to({graphics:mask_5_graphics_133,x:221.3,y:308.3}).wait(1).to({graphics:mask_5_graphics_134,x:222.3,y:307.4}).wait(1).to({graphics:mask_5_graphics_135,x:223.4,y:306.4}).wait(1).to({graphics:mask_5_graphics_136,x:224.4,y:305.5}).wait(1).to({graphics:mask_5_graphics_137,x:225.4,y:304.5}).wait(1).to({graphics:mask_5_graphics_138,x:226.5,y:303.6}).wait(1).to({graphics:mask_5_graphics_139,x:227.5,y:302.6}).wait(1).to({graphics:mask_5_graphics_140,x:228.5,y:301.7}).wait(1).to({graphics:mask_5_graphics_141,x:229.6,y:300.7}).wait(1).to({graphics:mask_5_graphics_142,x:230.6,y:299.8}).wait(1).to({graphics:mask_5_graphics_143,x:231.7,y:298.8}).wait(1).to({graphics:mask_5_graphics_144,x:232.7,y:297.8}).wait(555));

	// drawing
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("Az/U9QFqj2FYkuQBbhRBahUQA+g6DWjKQDVjLCxi5QCxi7ApgvQApguBfhjQBfhiBih4QBhh3BniEQBmiFBJiAQA8hpAYhr");
	this.shape_6.setTransform(222.8,285.9);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(9).to({_off:false},0).wait(690));

	// Letter
	this.instance_5 = new lib.G("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(275,275);
	this.instance_5.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(699));

	// Background
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_7.setTransform(275,275,3.373,2.543);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_8.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(699));

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