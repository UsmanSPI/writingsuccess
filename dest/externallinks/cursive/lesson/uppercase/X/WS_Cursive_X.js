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


(lib.x = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A8RciQg5gwAAhCQAAg1DElDIGprSQEUnvCUlwICMmjQA1jUAAikQAAkLiIh2Qh+hwkTAAQhxAAi6BsQi6BshxAAQiOAAAAhsQAAhvCihiQCShiC0g0QCsgxC2AAQC6AACPA6QCLA4BhBsQBgBpAuCTQAuCQAACzIggFAQFFlNF5kYQF6kdGfjbIBXghQBCAAAyA0QAuA1AAA+QAABLhPA7QldDUipBzQqzHxkzFRQj8ESiIEIQicEwAAEdQAAEpB3DbQBDB8BgBFQBtBMCMgBQCiABDhhfQDAhVDliXQGSkGEqkzQE7kzAsghQBCg0A/AAQB0AAAAB2QAAByk4E0QnrHglFDbQkGCtjrBiQkKBsjQAAQiqAAiYhSQiLhHh0iHQhrh/hJigQhGidgXidIlmJnIifDyQhDBRhCAAQg/AAg1gxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-190.6,-187.5,381.3,375);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-94.4,guide:{path:[-47.9,-29.4,-30.4,37.2,47,28.6]}},74).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AlhCZICwlVIBHAkIixFVg");
	var mask_graphics_1 = new cjs.Graphics().p("AiBCVICwlVIBTAsIivFVg");
	var mask_graphics_2 = new cjs.Graphics().p("AiICSICwlVIBhAyIiwFVg");
	var mask_graphics_3 = new cjs.Graphics().p("AiPCOICwlVIBvA5IiwFVg");
	var mask_graphics_4 = new cjs.Graphics().p("AiVCLICvlVIB8BAIivFVg");
	var mask_graphics_5 = new cjs.Graphics().p("AicCHICvlVICLBIIiwFVg");
	var mask_graphics_6 = new cjs.Graphics().p("AijCEICvlVICYBOIivFVg");
	var mask_graphics_7 = new cjs.Graphics().p("AiqCAICwlVIClBWIivFVg");
	var mask_graphics_8 = new cjs.Graphics().p("AixB9ICxlVICyBcIixFVg");
	var mask_graphics_9 = new cjs.Graphics().p("Ai4B5ICxlVIDABkIixFVg");
	var mask_graphics_10 = new cjs.Graphics().p("Ai/B2ICxlVIDOBqIixFVg");
	var mask_graphics_11 = new cjs.Graphics().p("AjFByICwlVIDcByIixFVg");
	var mask_graphics_12 = new cjs.Graphics().p("AjMBuICwlVIDpB6IiwFVg");
	var mask_graphics_13 = new cjs.Graphics().p("AjTBrICwlVID3CAIiwFVg");
	var mask_graphics_14 = new cjs.Graphics().p("AjaBnICxlVIEECHIixFVg");
	var mask_graphics_15 = new cjs.Graphics().p("AjhBkICxlVIESCOIixFVg");
	var mask_graphics_16 = new cjs.Graphics().p("AjoBgICxlVIEgCWIixFVg");
	var mask_graphics_17 = new cjs.Graphics().p("AjuBdICwlVIEtCcIiwFVg");
	var mask_graphics_18 = new cjs.Graphics().p("Aj1BZICwlVIE7CjIiwFVg");
	var mask_graphics_19 = new cjs.Graphics().p("Aj8BWICwlVIFJCqIiwFVg");
	var mask_graphics_20 = new cjs.Graphics().p("AkDBSICxlVIFWCyIixFVg");
	var mask_graphics_21 = new cjs.Graphics().p("AkKBPICxlVIFkC4IixFVg");
	var mask_graphics_22 = new cjs.Graphics().p("AkRBLICxlVIFyDAIixFVg");
	var mask_graphics_23 = new cjs.Graphics().p("AkXBIICwlVIF/DGIiwFVg");
	var mask_graphics_24 = new cjs.Graphics().p("AkeBEICwlVIGNDOIiwFVg");
	var mask_graphics_25 = new cjs.Graphics().p("AklBBICwlVIGbDUIiwFVg");
	var mask_graphics_26 = new cjs.Graphics().p("AksA9ICxlVIGoDcIiwFVg");
	var mask_graphics_27 = new cjs.Graphics().p("AkzA5ICxlVIG2DjIixFVg");
	var mask_graphics_28 = new cjs.Graphics().p("Ak6A2ICxlVIHEDqIixFVg");
	var mask_graphics_29 = new cjs.Graphics().p("AlAAyICwlVIHRDyIiwFVg");
	var mask_graphics_30 = new cjs.Graphics().p("AlHAvICwlVIHgD4IixFVg");
	var mask_graphics_31 = new cjs.Graphics().p("AlOArICwlVIHtD/IiwFVg");
	var mask_graphics_32 = new cjs.Graphics().p("AlVAoICxlVIH6EGIiwFVg");
	var mask_graphics_33 = new cjs.Graphics().p("AlcAkICxlVIIIENIixFWg");
	var mask_graphics_34 = new cjs.Graphics().p("AljAhICxlVIIWEUIixFVg");
	var mask_graphics_35 = new cjs.Graphics().p("AlpAdICwlVIIjEcIiwFVg");
	var mask_graphics_36 = new cjs.Graphics().p("AlwAaICwlVIIyEiIixFVg");
	var mask_graphics_37 = new cjs.Graphics().p("Al3AWICwlVII/EqIiwFVg");
	var mask_graphics_38 = new cjs.Graphics().p("Al+ATICwlVIJNEwIiwFVg");
	var mask_graphics_39 = new cjs.Graphics().p("AmFAPICwlVIJbE4IiwFVg");
	var mask_graphics_40 = new cjs.Graphics().p("AmMAMICwlVIJpE+IixFVg");
	var mask_graphics_41 = new cjs.Graphics().p("AmTAIICxlVIJ2FGIixFVg");
	var mask_graphics_42 = new cjs.Graphics().p("AmaAEICxlVIKEFOIixFVg");
	var mask_graphics_43 = new cjs.Graphics().p("AmhABICxlVIKRFUIiwFVg");
	var mask_graphics_44 = new cjs.Graphics().p("AmngCICwlWIKfFbIiwFWg");
	var mask_graphics_45 = new cjs.Graphics().p("AmugFICwlWIKtFhIiwFWg");
	var mask_graphics_46 = new cjs.Graphics().p("Am1gJICwlWIK7FpIixFWg");
	var mask_graphics_47 = new cjs.Graphics().p("Am8gMICwlWILJFvIixFWg");
	var mask_graphics_48 = new cjs.Graphics().p("AnDgQICxlWILWF3IixFWg");
	var mask_graphics_49 = new cjs.Graphics().p("AnKgTICxlWILjF9IiwFWg");
	var mask_graphics_50 = new cjs.Graphics().p("AnRgXICxlWILyGFIixFWg");
	var mask_graphics_51 = new cjs.Graphics().p("AnXgaICwlWIL/GMIiwFWg");
	var mask_graphics_52 = new cjs.Graphics().p("AnegeICwlWIMNGTIiwFWg");
	var mask_graphics_53 = new cjs.Graphics().p("AnlghICwlWIMbGZIixFWg");
	var mask_graphics_54 = new cjs.Graphics().p("AnsglICxlWIMoGhIixFWg");
	var mask_graphics_55 = new cjs.Graphics().p("AnzgoICxlWIM1GoIiwFWg");
	var mask_graphics_56 = new cjs.Graphics().p("An6gsICxlWINEGvIixFWg");
	var mask_graphics_57 = new cjs.Graphics().p("AoAgwICwlWINRG3IiwFWg");
	var mask_graphics_58 = new cjs.Graphics().p("AoHgzICwlWINfG9IiwFWg");
	var mask_graphics_59 = new cjs.Graphics().p("AoOg3ICwlWINtHFIixFWg");
	var mask_graphics_60 = new cjs.Graphics().p("AoVg6ICxlWIN6HLIixFWg");
	var mask_graphics_61 = new cjs.Graphics().p("Aocg+ICxlWIOHHTIiwFWg");
	var mask_graphics_62 = new cjs.Graphics().p("AojhBICxlWIOWHZIixFWg");
	var mask_graphics_63 = new cjs.Graphics().p("AophFICwlWIOjHhIiwFWg");
	var mask_graphics_64 = new cjs.Graphics().p("AowhIICwlWIOxHoIiwFWg");
	var mask_graphics_65 = new cjs.Graphics().p("Ao3hMICwlWIO/HvIixFWg");
	var mask_graphics_66 = new cjs.Graphics().p("Ao+hPICxlWIPMH1IixFWg");
	var mask_graphics_67 = new cjs.Graphics().p("ApFhTICxlWIPaH9IixFWg");
	var mask_graphics_68 = new cjs.Graphics().p("ApMhWICxlWIPnIEIiwFWg");
	var mask_graphics_69 = new cjs.Graphics().p("ApShaICwlWIP1ILIiwFWg");
	var mask_graphics_70 = new cjs.Graphics().p("ApZhdICwlWIQDISIiwFWg");
	var mask_graphics_71 = new cjs.Graphics().p("ApghhICwlWIQRIZIixFWg");
	var mask_graphics_72 = new cjs.Graphics().p("ApnhlICxlWIQeIhIixFWg");
	var mask_graphics_73 = new cjs.Graphics().p("ApuhoICxlWIQsInIixFWg");
	var mask_graphics_74 = new cjs.Graphics().p("Ap1hsICxlWIQ6IvIixFWg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-35.4,y:-17.5}).wait(1).to({graphics:mask_graphics_1,x:-57.8,y:-17.1}).wait(1).to({graphics:mask_graphics_2,x:-57.1,y:-16.7}).wait(1).to({graphics:mask_graphics_3,x:-56.5,y:-16.4}).wait(1).to({graphics:mask_graphics_4,x:-55.8,y:-16}).wait(1).to({graphics:mask_graphics_5,x:-55.1,y:-15.7}).wait(1).to({graphics:mask_graphics_6,x:-54.4,y:-15.3}).wait(1).to({graphics:mask_graphics_7,x:-53.7,y:-15}).wait(1).to({graphics:mask_graphics_8,x:-53,y:-14.6}).wait(1).to({graphics:mask_graphics_9,x:-52.4,y:-14.3}).wait(1).to({graphics:mask_graphics_10,x:-51.7,y:-13.9}).wait(1).to({graphics:mask_graphics_11,x:-51,y:-13.6}).wait(1).to({graphics:mask_graphics_12,x:-50.3,y:-13.2}).wait(1).to({graphics:mask_graphics_13,x:-49.6,y:-12.8}).wait(1).to({graphics:mask_graphics_14,x:-48.9,y:-12.5}).wait(1).to({graphics:mask_graphics_15,x:-48.3,y:-12.1}).wait(1).to({graphics:mask_graphics_16,x:-47.6,y:-11.8}).wait(1).to({graphics:mask_graphics_17,x:-46.9,y:-11.4}).wait(1).to({graphics:mask_graphics_18,x:-46.2,y:-11.1}).wait(1).to({graphics:mask_graphics_19,x:-45.5,y:-10.7}).wait(1).to({graphics:mask_graphics_20,x:-44.8,y:-10.4}).wait(1).to({graphics:mask_graphics_21,x:-44.2,y:-10}).wait(1).to({graphics:mask_graphics_22,x:-43.5,y:-9.7}).wait(1).to({graphics:mask_graphics_23,x:-42.8,y:-9.3}).wait(1).to({graphics:mask_graphics_24,x:-42.1,y:-9}).wait(1).to({graphics:mask_graphics_25,x:-41.4,y:-8.6}).wait(1).to({graphics:mask_graphics_26,x:-40.7,y:-8.2}).wait(1).to({graphics:mask_graphics_27,x:-40.1,y:-7.9}).wait(1).to({graphics:mask_graphics_28,x:-39.4,y:-7.5}).wait(1).to({graphics:mask_graphics_29,x:-38.7,y:-7.2}).wait(1).to({graphics:mask_graphics_30,x:-38,y:-6.8}).wait(1).to({graphics:mask_graphics_31,x:-37.3,y:-6.5}).wait(1).to({graphics:mask_graphics_32,x:-36.6,y:-6.1}).wait(1).to({graphics:mask_graphics_33,x:-35.9,y:-5.8}).wait(1).to({graphics:mask_graphics_34,x:-35.3,y:-5.4}).wait(1).to({graphics:mask_graphics_35,x:-34.6,y:-5.1}).wait(1).to({graphics:mask_graphics_36,x:-33.9,y:-4.7}).wait(1).to({graphics:mask_graphics_37,x:-33.2,y:-4.4}).wait(1).to({graphics:mask_graphics_38,x:-32.6,y:-4}).wait(1).to({graphics:mask_graphics_39,x:-31.9,y:-3.7}).wait(1).to({graphics:mask_graphics_40,x:-31.2,y:-3.3}).wait(1).to({graphics:mask_graphics_41,x:-30.5,y:-3}).wait(1).to({graphics:mask_graphics_42,x:-29.8,y:-2.6}).wait(1).to({graphics:mask_graphics_43,x:-29.1,y:-2.3}).wait(1).to({graphics:mask_graphics_44,x:-28.5,y:-1.9}).wait(1).to({graphics:mask_graphics_45,x:-27.8,y:-1.6}).wait(1).to({graphics:mask_graphics_46,x:-27.1,y:-1.2}).wait(1).to({graphics:mask_graphics_47,x:-26.4,y:-0.9}).wait(1).to({graphics:mask_graphics_48,x:-25.7,y:-0.5}).wait(1).to({graphics:mask_graphics_49,x:-25,y:-0.1}).wait(1).to({graphics:mask_graphics_50,x:-24.3,y:0.2}).wait(1).to({graphics:mask_graphics_51,x:-23.7,y:0.6}).wait(1).to({graphics:mask_graphics_52,x:-23,y:0.9}).wait(1).to({graphics:mask_graphics_53,x:-22.3,y:1.3}).wait(1).to({graphics:mask_graphics_54,x:-21.6,y:1.6}).wait(1).to({graphics:mask_graphics_55,x:-20.9,y:2}).wait(1).to({graphics:mask_graphics_56,x:-20.2,y:2.3}).wait(1).to({graphics:mask_graphics_57,x:-19.6,y:2.7}).wait(1).to({graphics:mask_graphics_58,x:-18.9,y:3}).wait(1).to({graphics:mask_graphics_59,x:-18.2,y:3.4}).wait(1).to({graphics:mask_graphics_60,x:-17.5,y:3.7}).wait(1).to({graphics:mask_graphics_61,x:-16.8,y:4.1}).wait(1).to({graphics:mask_graphics_62,x:-16.1,y:4.4}).wait(1).to({graphics:mask_graphics_63,x:-15.5,y:4.8}).wait(1).to({graphics:mask_graphics_64,x:-14.8,y:5.2}).wait(1).to({graphics:mask_graphics_65,x:-14.1,y:5.5}).wait(1).to({graphics:mask_graphics_66,x:-13.4,y:5.9}).wait(1).to({graphics:mask_graphics_67,x:-12.7,y:6.2}).wait(1).to({graphics:mask_graphics_68,x:-12,y:6.6}).wait(1).to({graphics:mask_graphics_69,x:-11.4,y:6.9}).wait(1).to({graphics:mask_graphics_70,x:-10.7,y:7.3}).wait(1).to({graphics:mask_graphics_71,x:-10,y:7.6}).wait(1).to({graphics:mask_graphics_72,x:-9.3,y:8}).wait(1).to({graphics:mask_graphics_73,x:-8.6,y:8.3}).wait(1).to({graphics:mask_graphics_74,x:-7.9,y:8.7}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AnfkmQCwKeMPhb");

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.3,-37.3,21.2,38.8);


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
(lib.WS_Cursive_X = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_609 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(609).call(this.frame_609).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(101.9,129.1,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[101.9,129.2,187,85.4,214.5,127.8,242,170.2,217.1,229.2,192.1,288.3,165.3,339.4,138.6,390.5,106.9,439.5]}},265).wait(15).to({skewY:0,x:395.3,y:105.6},0).to({guide:{path:[395,105.6,367.2,119.4,328.1,148.3,289,177.2,253,208.4,217.2,239.4,198.4,284.9,179.5,330.3,187.3,380.2,195.8,434.9,250.9,439.5,288.8,442.5,321.2,421.4,360.4,395.8,395.7,364.7,428.1,336.3,448.8,313.4]}},240).wait(15).to({startPosition:0},0).to({guide:{path:[448.7,313.3,431.7,253.4,375.9,226,323.2,200.1,265,208.7,206.6,217.2,158,250.7,110,283.8,55.5,304.9,0.6,326.1,-41.8,317.8,-83.5,309.6,-89.1,307]}},65).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(107.5,439.9,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},265).wait(15).to({_off:false,x:448.5,y:312.9},0).to({_off:true},240).wait(81));

	// Layer 14
	this.instance_1 = new lib.ar4("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(308.7,280,1,1,75.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(289).to({_off:false},0).wait(321));

	// Layer 12 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_469 = new cjs.Graphics().p("ADvb9QololAAsJQAAsIIlolQIkolMJAAMAAAA6lQsJAAokolg");
	var mask_graphics_470 = new cjs.Graphics().p("AD4ccQoxoZgSsJQgTsIIYoxQIXoyMJgSMABYA6kIgzAAQroAAofoFg");
	var mask_graphics_471 = new cjs.Graphics().p("AECc5Qo+oLgksIQgksIILo9QIKo/MIgkMACvA6hQgzACgxAAQrKAAoYnog");
	var mask_graphics_472 = new cjs.Graphics().p("AENdWQpKn+g2sHQg2sGH9pKQH8pKMHg3MAEGA6cQhKAFhJAAQqsAAoRnLg");
	var mask_graphics_473 = new cjs.Graphics().p("AEZdyQpWnwhIsGQhJsFHvpVQHvpWMGhJMAFdA6VQhjAJhfAAQqQAAoImvg");
	var mask_graphics_474 = new cjs.Graphics().p("AEleNQphnihbsEQhasDHipgQHgpiMDhaMAG1A6LQh6AOh2AAQp0AAoAmUg");
	var mask_graphics_475 = new cjs.Graphics().p("AEyenQpsnUhtsBQhssAHUpsQHRptMBhsMAIMA6AQiRAUiMAAQpaAAn2l6g");
	var mask_graphics_476 = new cjs.Graphics().p("AE/fAQp2nFh/r+Qh+r+HFp2QHDp4L+h+MAJiA5zQinAbihAAQpAAAntlhg");
	var mask_graphics_477 = new cjs.Graphics().p("AFOfZQqBm2iRr8QiQr7G3qAQGzqCL8iQMAK4A5kQi+Aki2AAQonAAnhlJg");
	var mask_graphics_478 = new cjs.Graphics().p("AFdfxQqMmniir4Qihr4GnqKQGkqML4iiMAMOA5TQjTAtjKAAQoPAAnWkxg");
	var mask_graphics_479 = new cjs.Graphics().p("EAFsAgIQqVmYizr0Qi0r0GYqTQGVqWL0i0MANjA5AQjnA3jfAAQn4AAnKkag");
	var mask_graphics_480 = new cjs.Graphics().p("EAF9AgeQqfmIjFrwQjFrwGIqcQGGqfLwjGMAO4A4rQj8BCjzAAQnhAAm9kEg");
	var mask_graphics_481 = new cjs.Graphics().p("EAGOAgzQqol5jWrqQjXrrF5qmQF2qoLqjWMAQNA4TQkQBOkHAAQnLAAmvjvg");
	var mask_graphics_482 = new cjs.Graphics().p("EAGfAhHQqwlojormQjorlFpqvQFnqwLkjoMARhA36QkjBbkbAAQm1AAmijbg");
	var mask_graphics_483 = new cjs.Graphics().p("EAGxAhbQq4lZj5rfQj6rgFZq3QFXq5Lfj5MASzA3fQk1BpkvAAQmgAAmTjHg");
	var mask_graphics_484 = new cjs.Graphics().p("EAHEAhtQrAlIkKraQkLrZFJq/QFGrALZkLMAUGA3CQlIB3lCAAQmMAAmDi0g");
	var mask_graphics_485 = new cjs.Graphics().p("EAHXAh/QrHk3kbrUQkcrTE4rGQE2rILTkcMAVXA2jQlZCHlWAAQl3AAl0iig");
	var mask_graphics_486 = new cjs.Graphics().p("EAHrAiQQrOknksrNQktrMEorNQElrPLMksMAWpA2BQlrCYlqAAQljAAljiRg");
	var mask_graphics_487 = new cjs.Graphics().p("EAIAAigQrVkWk9rGQk9rFEWrUQEVrVLEk9MAX6A1fQl7Cpl/AAQlOAAlSiBg");
	var mask_graphics_488 = new cjs.Graphics().p("EAIVAivQrbkFlOq+QlNq+EFraQEErcK9lNMAZIA06QmKC8mTAAQk7AAlAhyg");
	var mask_graphics_489 = new cjs.Graphics().p("EAIrAi9Qrij0ldq2Qleq2D0rgQDzrhK1leMAaXA0UQmaDOmoAAQkmAAkuhjg");
	var mask_graphics_490 = new cjs.Graphics().p("EAJBAjKQrnjiluquQltqtDjrmQDhrnKsluMAblAzsQmoDim9AAQkTAAkbhWg");
	var mask_graphics_491 = new cjs.Graphics().p("EAJYAjWQrsjRl+qlQl9qkDRrrQDQrsKkl+MAcxAzCQm2D3nTAAQj/AAkHhKg");
	var mask_graphics_492 = new cjs.Graphics().p("EAJvAjhQrxi/mNqcQmNqbDArwQC+rxKbmNMAd9AyWQnDEMnpAAQjrAAj0g+g");
	var mask_graphics_493 = new cjs.Graphics().p("EAKHAjsQr1iumdqSQmdqTCvr0QCsr0KSmdMAfIAxoQnQEjoAAAQjXAAjfgzg");
	var mask_graphics_494 = new cjs.Graphics().p("EAKfAj1Qr5icmsqIQmsqJCdr4QCbr4KHmsMAgSAw5QncE5oXAAQjDAAjKgpg");
	var mask_graphics_495 = new cjs.Graphics().p("EAK4Aj9Qr8iKm7p+Qm7p+CLr8QCJr8J+m7MAhZAwIQnnFSovAAQiuAAi1ghg");
	var mask_graphics_496 = new cjs.Graphics().p("EALRAkFQr/h5nKpzQnKp0B5r/QB3r+J0nKMAihAvVQnyFrpIAAQiZAAifgZg");
	var mask_graphics_497 = new cjs.Graphics().p("EALrAkLQsChmnYppQnZppBnsCQBmsBJpnYMAjmAuhQn7GEpiAAQiEAAiIgSg");
	var mask_graphics_498 = new cjs.Graphics().p("EAMFAkQQsFhUnmpeQnmpeBVsDQBTsDJennMAkrAtrQoEGfp9AAQhuAAhxgNg");
	var mask_graphics_499 = new cjs.Graphics().p("EAMfAkVQsGhDn0pSQn1pSBEsGQBBsEJSn1MAlvAszQoNG6qYAAQhYAAhagHg");
	var mask_graphics_500 = new cjs.Graphics().p("EAM6AkYQsIgwoBpHQoCpGAxsHQAvsGJGoCMAmxAr6QoUHWq1AAQhBAAhCgEg");
	var mask_graphics_501 = new cjs.Graphics().p("EANVAkaQsIgeoPo6QoQo7AfsHQAdsHI6oQMAnyAq/QobH0rTAAQgpAAgqgCg");
	var mask_graphics_502 = new cjs.Graphics().p("EANxAkbQsJgMocouQodotANsJQALsHIuodMAoxAqDQoiIRryAAIghAAg");
	var mask_graphics_503 = new cjs.Graphics().p("AmlcAQoqohgFsIQgHsHIhoqMApwApFQohIqsIAGIgRAAQr+AAojobg");
	var mask_graphics_504 = new cjs.Graphics().p("AmVceQo2oTgXsJQgasHIUo2MAqtAoGQoUI3sHAYIhEABQreAAodn9g");
	var mask_graphics_505 = new cjs.Graphics().p("AmDc8QpDoHgpsHQgssGIHpDMArnAnGQoGJDsHAqQg6ADg6AAQrAAAoVnfg");
	var mask_graphics_506 = new cjs.Graphics().p("AlxdYQpPn5g7sGQg+sFH5pOMAsiAmEQn5JOsFA9QhTAGhRAAQqjAAoOnDg");
	var mask_graphics_507 = new cjs.Graphics().p("Aled0QpanrhNsFQhQsDHrpaMAtZAlBQnrJasDBOQhrALhnAAQqHAAoGmng");
	var mask_graphics_508 = new cjs.Graphics().p("AlJePQpmndhfsDQhisBHdplMAuQAj8QndJmsBBgQiCAQh+AAQprAAn9mMg");
	var mask_graphics_509 = new cjs.Graphics().p("Ak0epQpwnPhysAQhzr+HOpxMAvFAi3QnOJwr/BzQiZAWiTAAQpRAAn0lyg");
	var mask_graphics_510 = new cjs.Graphics().p("AkdfCQp7nAiEr9QiFr9HAp6MAv4AhwQnAJ7r8CEQivAfioAAQo4AAnplag");
	var mask_graphics_511 = new cjs.Graphics().p("AkGfbQqFmxiVr6QiXr6GwqEMAwqAgoQmxKFr5CWQjEAni9AAQogAAnelBg");
	var mask_graphics_512 = new cjs.Graphics().p("AjtfyQqQmiimr2Qipr2GhqOMAxaAffQmiKPr1CoQjaAwjRAAQoIAAnSkqg");
	var mask_graphics_513 = new cjs.Graphics().p("EgDUAgJQqZmSi4rzQi7rxGSqYMAyIAeUQmSKZrxC5QjvA7jlAAQnxAAnGkTg");
	var mask_graphics_514 = new cjs.Graphics().p("EgC5AgfQqimDjKrtQjNruGDqhMAy0AdJQmDKirsDLQkDBGj5AAQnbAAm4j9g");
	var mask_graphics_515 = new cjs.Graphics().p("EgCeAg0QqrlzjbrpQjeroFzqqMAzeAb9QlyKqroDdQkWBSkOAAQnEAAmrjog");
	var mask_graphics_516 = new cjs.Graphics().p("EgCCAhIQqzljjtrjQjvrjFjqyMA0HAavQliKzriDtQkqBgkhAAQmvAAmdjUg");
	var mask_graphics_517 = new cjs.Graphics().p("EgBkAhbQq8lSj+reQkArdFTq6MA0uAZgQlSK8rdD+Qk8Buk1AAQmaAAmNjBg");
	var mask_graphics_518 = new cjs.Graphics().p("EgBGAhuQrDlCkQrYQkRrXFCrCMA1UAYRQlCLErWEPQlOB9lJAAQmFAAl+iug");
	var mask_graphics_519 = new cjs.Graphics().p("EgAnAh/QrLkxkgrRQkirREyrJMA13AXBQkyLLrPEgQlfCNleAAQlwAAluidg");
	var mask_graphics_520 = new cjs.Graphics().p("EgAHAiQQrSkhkxrKQkyrJEgrRMA2ZAVxQkhLRrIExQlwCelyAAQlcAAldiMg");
	var mask_graphics_521 = new cjs.Graphics().p("EAAYAigQrXkQlBrDQlDrCEQrXMA24AUfQkQLYrCFCQl/CvmGAAQlJAAlNh8g");
	var mask_graphics_522 = new cjs.Graphics().p("EAA6AiuQrdj+lSq7QlUq7D/rdMA3WATNQj/Leq6FSQmPDCmbAAQk0AAk7hug");
	var mask_graphics_523 = new cjs.Graphics().p("EABcAi8QrjjtliqzQljqyDtrjMA3yAR5QjuLkqyFjQmeDUmwAAQkgAAkphfg");
	var mask_graphics_524 = new cjs.Graphics().p("EAB/AjJQrojclyqrQl0qpDdroMA4LAQmQjcLpqqFyQmsDpnGAAQkMAAkWhSg");
	var mask_graphics_525 = new cjs.Graphics().p("EACjAjVQrtjKmCqiQmDqhDLrtMA4jAPSQjLLuqgGCQm7D+nbAAQj5AAkChGg");
	var mask_graphics_526 = new cjs.Graphics().p("EADIAjgQryi5mRqYQmTqYC5ryMA45AN9Qi5LzqXGSQnIEUnyAAQjkAAjug7g");
	var mask_graphics_527 = new cjs.Graphics().p("EADtAjrQr1iomhqPQmjqOCor3MA5NAMpQioL3qOGhQnTEqoJAAQjRAAjZgvg");
	var mask_graphics_528 = new cjs.Graphics().p("EAEUAj0Qr6iWmwqFQmxqECVr7MA5fALTQiWL7qEGwQnfFCogAAQi9AAjDgmg");
	var mask_graphics_529 = new cjs.Graphics().p("EAE6Aj8Qr9iEm+p7QnBp6CEr9MA5uAJ9QiEL9p5HAQnrFao4AAQioAAiugeg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(469).to({graphics:mask_graphics_469,x:156.4,y:233.8}).wait(1).to({graphics:mask_graphics_470,x:158.6,y:233.7}).wait(1).to({graphics:mask_graphics_471,x:160.8,y:233.7}).wait(1).to({graphics:mask_graphics_472,x:162.9,y:233.7}).wait(1).to({graphics:mask_graphics_473,x:165.1,y:233.7}).wait(1).to({graphics:mask_graphics_474,x:167.3,y:233.7}).wait(1).to({graphics:mask_graphics_475,x:169.5,y:233.7}).wait(1).to({graphics:mask_graphics_476,x:171.6,y:233.7}).wait(1).to({graphics:mask_graphics_477,x:173.8,y:233.8}).wait(1).to({graphics:mask_graphics_478,x:175.9,y:233.8}).wait(1).to({graphics:mask_graphics_479,x:178,y:233.8}).wait(1).to({graphics:mask_graphics_480,x:180.2,y:233.8}).wait(1).to({graphics:mask_graphics_481,x:182.3,y:233.8}).wait(1).to({graphics:mask_graphics_482,x:184.4,y:233.8}).wait(1).to({graphics:mask_graphics_483,x:186.4,y:233.8}).wait(1).to({graphics:mask_graphics_484,x:188.5,y:233.7}).wait(1).to({graphics:mask_graphics_485,x:190.5,y:233.7}).wait(1).to({graphics:mask_graphics_486,x:192.6,y:233.7}).wait(1).to({graphics:mask_graphics_487,x:194.6,y:233.7}).wait(1).to({graphics:mask_graphics_488,x:196.5,y:233.7}).wait(1).to({graphics:mask_graphics_489,x:198.5,y:233.6}).wait(1).to({graphics:mask_graphics_490,x:200.4,y:233.6}).wait(1).to({graphics:mask_graphics_491,x:202.3,y:233.6}).wait(1).to({graphics:mask_graphics_492,x:204.2,y:233.5}).wait(1).to({graphics:mask_graphics_493,x:206.1,y:233.5}).wait(1).to({graphics:mask_graphics_494,x:207.9,y:233.4}).wait(1).to({graphics:mask_graphics_495,x:209.7,y:233.4}).wait(1).to({graphics:mask_graphics_496,x:211.5,y:233.4}).wait(1).to({graphics:mask_graphics_497,x:213.2,y:233.3}).wait(1).to({graphics:mask_graphics_498,x:214.9,y:233.3}).wait(1).to({graphics:mask_graphics_499,x:216.6,y:233.2}).wait(1).to({graphics:mask_graphics_500,x:218.2,y:233.2}).wait(1).to({graphics:mask_graphics_501,x:219.8,y:233.2}).wait(1).to({graphics:mask_graphics_502,x:221.4,y:233.1}).wait(1).to({graphics:mask_graphics_503,x:223,y:233.1}).wait(1).to({graphics:mask_graphics_504,x:224.5,y:233.1}).wait(1).to({graphics:mask_graphics_505,x:225.9,y:233.1}).wait(1).to({graphics:mask_graphics_506,x:227.4,y:233.1}).wait(1).to({graphics:mask_graphics_507,x:228.7,y:233.1}).wait(1).to({graphics:mask_graphics_508,x:230.1,y:233.1}).wait(1).to({graphics:mask_graphics_509,x:231.4,y:233.1}).wait(1).to({graphics:mask_graphics_510,x:232.7,y:233.2}).wait(1).to({graphics:mask_graphics_511,x:233.9,y:233.2}).wait(1).to({graphics:mask_graphics_512,x:235.1,y:233.2}).wait(1).to({graphics:mask_graphics_513,x:236.2,y:233.2}).wait(1).to({graphics:mask_graphics_514,x:237.3,y:233.2}).wait(1).to({graphics:mask_graphics_515,x:238.3,y:233.2}).wait(1).to({graphics:mask_graphics_516,x:239.3,y:233.2}).wait(1).to({graphics:mask_graphics_517,x:240.3,y:233.2}).wait(1).to({graphics:mask_graphics_518,x:241.2,y:233.2}).wait(1).to({graphics:mask_graphics_519,x:242.1,y:233.2}).wait(1).to({graphics:mask_graphics_520,x:242.9,y:233.2}).wait(1).to({graphics:mask_graphics_521,x:243.7,y:233.2}).wait(1).to({graphics:mask_graphics_522,x:244.4,y:233.2}).wait(1).to({graphics:mask_graphics_523,x:245.1,y:233.1}).wait(1).to({graphics:mask_graphics_524,x:245.7,y:233.1}).wait(1).to({graphics:mask_graphics_525,x:246.3,y:233.1}).wait(1).to({graphics:mask_graphics_526,x:246.8,y:233.1}).wait(1).to({graphics:mask_graphics_527,x:247.3,y:233}).wait(1).to({graphics:mask_graphics_528,x:247.7,y:233}).wait(1).to({graphics:mask_graphics_529,x:248,y:233}).wait(81));

	// Layer 11
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("AMf6SQk0CZmFEkQmEEllrFEQlsFFi5G0Qi6G2BmHnQBmHoF+BlQF+BkGkkEQGkkEFgk3QFFkdDajo");
	this.shape_1.setTransform(318.1,272.3);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(469).to({_off:false},0).wait(141));

	// Layer 10 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_409 = new cjs.Graphics().p("AxWIbQDUrrKml7QKll8LrDUQLrDSF8KlMgzIAcoQl7qmDSrrg");
	var mask_1_graphics_410 = new cjs.Graphics().p("AxWIuQDFrvKfmIQKdmILvDGQLwDDGIKeMgykAdlQmIqfDErug");
	var mask_1_graphics_411 = new cjs.Graphics().p("AxVJCQC2rzKXmVQKXmVLyC4QLzC1GVKWMgyAAeiQmVqXC3rxg");
	var mask_1_graphics_412 = new cjs.Graphics().p("AxUJVQCor2KQmhQKOmiL2CqQL2CnGiKPMgxaAfeQmiqQCor1g");
	var mask_1_graphics_413 = new cjs.Graphics().p("AxRJpQCar5KHmuQKGmtL5CaQL5CZGuKHMgwzAgaQmuqICar4g");
	var mask_1_graphics_414 = new cjs.Graphics().p("AxOJ9QCLr7J/m6QJ/m6L7CMQL8CKG6J/MgwLAhUQm6p/CLr7g");
	var mask_1_graphics_415 = new cjs.Graphics().p("AxKKSQB9r+J3nGQJ1nGL+B+QL/B7HGJ3MgviAiOQnGp3B8r9g");
	var mask_1_graphics_416 = new cjs.Graphics().p("AxEKnQBusBJunSQJtnRMABvQMBBtHSJuMgu5AjHQnRpuBur/g");
	var mask_1_graphics_417 = new cjs.Graphics().p("Aw+K8QBgsCJkneQJkneMDBhQMCBfHeJkMguNAkAQnepkBgsCg");
	var mask_1_graphics_418 = new cjs.Graphics().p("Aw3LSQBRsFJcnpQJanpMFBSQMEBQHpJcMgthAk3QnppbBRsDg");
	var mask_1_graphics_419 = new cjs.Graphics().p("AwvLnQBCsFJTn1QJRn0MGBDQMFBBH1JTMgs0AluQn0pSBCsFg");
	var mask_1_graphics_420 = new cjs.Graphics().p("AwmL9QA0sGJIoAQJIoAMHA1QMHAzH/JIMgsFAmlQoApJA0sGg");
	var mask_1_graphics_421 = new cjs.Graphics().p("AwcMUQAlsJI/oKQI+oKMHAmQMIAkILI+MgrWAnaQoLo/AlsGg");
	var mask_1_graphics_422 = new cjs.Graphics().p("AwRMqQAWsJI1oVQI0oVMIAXQMIAVIWI1MgqmAoOQoVo1AWsHg");
	var mask_1_graphics_423 = new cjs.Graphics().p("AwFNBQAHsKIrofQIqogMIAJQMIAGIgIrMgp0ApBQogorAIsHg");
	var mask_1_graphics_424 = new cjs.Graphics().p("Av5NYQgHsKIgopQIgorMIgGQMIgIIrIgMgpCApzQoqoggIsHg");
	var mask_1_graphics_425 = new cjs.Graphics().p("AvrNvQgWsJIWo0QIUo1MIgUQMIgXI1IVMgoOAqlQo1oWgWsHg");
	var mask_1_graphics_426 = new cjs.Graphics().p("AvdOHQgksJILo+QIJo/MIgjQMIgmI+ILMgnaArVQo/oLglsGg");
	var mask_1_graphics_427 = new cjs.Graphics().p("AvNOeQg0sIIApHQIApJMGgyQMHg0JIIAMgmlAsEQpJoAgzsGg");
	var mask_1_graphics_428 = new cjs.Graphics().p("Au9O2QhCsHH1pRQH0pSMFhBQMGhDJSH1MglwAsyQpSn0hCsFg");
	var mask_1_graphics_429 = new cjs.Graphics().p("AusPOQhQsFHppbQHppbMEhQQMEhSJbHqMgk5AtgQpbnqhRsDg");
	var mask_1_graphics_430 = new cjs.Graphics().p("AuaPmQhfsDHepkQHeplMBheQMDhgJkHeMgkBAuMQpknehgsCg");
	var mask_1_graphics_431 = new cjs.Graphics().p("AuHP/QhusCHSpsQHTpuL/htQMBhvJtHSMgjIAu4QpunThur/g");
	var mask_1_graphics_432 = new cjs.Graphics().p("AtzQYQh8sAHGp1QHGp3L+h7QL+h+J2HHMgiPAvhQp2nGh9r9g");
	var mask_1_graphics_433 = new cjs.Graphics().p("AteQwQiLr9G6p9QG6p/L7iKQL8iMJ/G6MghVAwKQp/m6iLr7g");
	var mask_1_graphics_434 = new cjs.Graphics().p("AtJRJQiZr6GuqGQGuqHL4iZQL5iaKHGuMggaAwyQqHmuiar4g");
	var mask_1_graphics_435 = new cjs.Graphics().p("AsyRiQior3GhqOQGiqPL1inQL2ipKPGiMgffAxZQqPmiinr1g");
	var mask_1_graphics_436 = new cjs.Graphics().p("AsbR8Qi2r0GVqWQGVqXLyi1QLyi4KXGWMgejAx+QqWmVi2rxg");
	var mask_1_graphics_437 = new cjs.Graphics().p("AsDSVQjFrwGJqeQGIqeLvjEQLvjFKeGIMgdmAykQqemJjErug");
	var mask_1_graphics_438 = new cjs.Graphics().p("ArqSuQjTrsF8qlQF8qmLqjRQLrjUKmF8MgcpAzGQqll7jSrrg");
	var mask_1_graphics_439 = new cjs.Graphics().p("ArQTIQjhroFuqsQFvqtLnjgQLnjiKtFvMgbrAzpQqslvjgrmg");
	var mask_1_graphics_440 = new cjs.Graphics().p("Aq2TiQjvrkFiqzQFiq0LijuQLijvK0FhMgarA0KQqzlijvrhg");
	var mask_1_graphics_441 = new cjs.Graphics().p("AqaT7Qj+rfFVq5QFVq6Ldj8QLej+K6FVMgZsA0pQq5lVj8rdg");
	var mask_1_graphics_442 = new cjs.Graphics().p("Ap+UVQkLraFHrAQFHrALZkKQLYkMLBFIMgYrA1IQrAlIkKrYg");
	var mask_1_graphics_443 = new cjs.Graphics().p("AphUvQkZrVE6rGQE5rGLUkYQLTkZLHE6MgXrA1lQrFk6kYrTg");
	var mask_1_graphics_444 = new cjs.Graphics().p("ApEVJQkmrPEsrMQEsrNLOklQLOknLNEsMgWqA2CQrLkskmrOg");
	var mask_1_graphics_445 = new cjs.Graphics().p("AolVjQk1rKEfrRQEfrSLIkzQLIk0LSEeMgVnA2dQrRkfkzrIg");
	var mask_1_graphics_446 = new cjs.Graphics().p("AoGV9QlCrEERrWQERrYLClAQLDlCLXERMgUlA22QrXkRlArCg");
	var mask_1_graphics_447 = new cjs.Graphics().p("AnnWXQlOq9EDrcQEDrcK8lOQK8lPLcEDMgTiA3OQrbkDlPq8g");
	var mask_1_graphics_448 = new cjs.Graphics().p("AnGWxQlcq3D1rhQD1rgK2lbQK1ldLiD1MgSfA3mQrhj1lbq2g");
	var mask_1_graphics_449 = new cjs.Graphics().p("AmlXMQlpqxDnrmQDnrkKvloQKvlqLmDnMgRcA37Qrkjnlpqug");
	var mask_1_graphics_450 = new cjs.Graphics().p("AmDXmQl2qqDZrqQDZrpKol1QKol2LqDZMgQXA4PQrpjZl2qng");
	var mask_1_graphics_451 = new cjs.Graphics().p("AlgYAQmDqiDLruQDKrtKhmCQKhmELuDLMgPTA4jQrujLmBqgg");
	var mask_1_graphics_452 = new cjs.Graphics().p("Ak9YaQmQqbC9rxQC9rxKZmPQKZmQLyC9MgOOA41Qryi9mOqZg");
	var mask_1_graphics_453 = new cjs.Graphics().p("AkZY0QmcqTCur1QCur0KSmbQKSmdL1CuMgNJA5GQr1ivmbqRg");
	var mask_1_graphics_454 = new cjs.Graphics().p("Aj0ZOQmpqLCgr4QCgr4KKmnQKJmpL4CgMgMDA5UQr4ifmnqKg");
	var mask_1_graphics_455 = new cjs.Graphics().p("AjPZoQm1qDCRr7QCSr6KBm0QKCm1L7CRMgK+A5jQr7iSmzqBg");
	var mask_1_graphics_456 = new cjs.Graphics().p("AipaCQnBp6CDr+QCDr9J5nAQJ5nBL+CDMgJ4A5vQr+iDm/p5g");
	var mask_1_graphics_457 = new cjs.Graphics().p("AiCacQnOpyB1sAQB0r/JxnMQJwnNMAB0MgIxA57QsAh1nLpwg");
	var mask_1_graphics_458 = new cjs.Graphics().p("Ahba2QnZppBlsCQBmsCJonXQJonZMCBmMgHrA6EQsDhmnWpng");
	var mask_1_graphics_459 = new cjs.Graphics().p("Ag0bQQnkpgBXsEQBXsDJfnjQJenlMEBXMgGkA6NQsEhXnjpeg");
	var mask_1_graphics_460 = new cjs.Graphics().p("AgLbqQnwpXBIsGQBIsEJWnvQJVnwMGBIMgFeA6VQsGhIntpVg");
	var mask_1_graphics_461 = new cjs.Graphics().p("AAccDQn6pNA6sHQA6sGJMn5QJLn8MHA6MgEXA6aQsHg5n6pMg");
	var mask_1_graphics_462 = new cjs.Graphics().p("ABGcdQoGpEArsIQArsGJDoFQJCoHMHArMgDQA6gQsHgsoFpBg");
	var mask_1_graphics_463 = new cjs.Graphics().p("ABvc2QoQo5AdsJQAcsHI4oQQI4oRMJAcMgCJA6iQsJgcoQo4g");
	var mask_1_graphics_464 = new cjs.Graphics().p("ACadPQobovANsJQAOsIIuoaQIuocMJANMgBCA6lQsJgOoaoug");
	var mask_1_graphics_465 = new cjs.Graphics().p("ADCdoQololgCsJQgBsIIkolQIkomMJgBMAAFA6lIgDAAQsHAAokojg");
	var mask_1_graphics_466 = new cjs.Graphics().p("ADKeBQowoagQsJQgQsIIaovQIZoxMJgQMABMA6kIgsABQrtAAofoKg");
	var mask_1_graphics_467 = new cjs.Graphics().p("ADSeZQo6oPgesJQgfsHIPo5QIOo7MIgfMACUA6iQgrACgqAAQrTAAoanyg");
	var mask_1_graphics_468 = new cjs.Graphics().p("ADbexQpEoFgtsHQgusHIEpDQIEpFMHgtMADbA6eQg/AEg9AAQq7AAoUnag");
	var mask_1_graphics_469 = new cjs.Graphics().p("ADkfIQpOn5g8sHQg8sGH5pNQH4pOMHg8MAEhA6aQhSAGhQAAQqjAAoOnDg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(409).to({graphics:mask_1_graphics_409,x:233.1,y:196.4}).wait(1).to({graphics:mask_1_graphics_410,x:232.2,y:197.9}).wait(1).to({graphics:mask_1_graphics_411,x:231.3,y:199.4}).wait(1).to({graphics:mask_1_graphics_412,x:230.4,y:201}).wait(1).to({graphics:mask_1_graphics_413,x:229.4,y:202.5}).wait(1).to({graphics:mask_1_graphics_414,x:228.4,y:203.9}).wait(1).to({graphics:mask_1_graphics_415,x:227.4,y:205.4}).wait(1).to({graphics:mask_1_graphics_416,x:226.4,y:206.8}).wait(1).to({graphics:mask_1_graphics_417,x:225.3,y:208.2}).wait(1).to({graphics:mask_1_graphics_418,x:224.2,y:209.6}).wait(1).to({graphics:mask_1_graphics_419,x:223.1,y:211}).wait(1).to({graphics:mask_1_graphics_420,x:221.9,y:212.4}).wait(1).to({graphics:mask_1_graphics_421,x:220.8,y:213.7}).wait(1).to({graphics:mask_1_graphics_422,x:219.6,y:215}).wait(1).to({graphics:mask_1_graphics_423,x:218.3,y:216.3}).wait(1).to({graphics:mask_1_graphics_424,x:217.1,y:217.5}).wait(1).to({graphics:mask_1_graphics_425,x:215.8,y:218.8}).wait(1).to({graphics:mask_1_graphics_426,x:214.5,y:220}).wait(1).to({graphics:mask_1_graphics_427,x:213.2,y:221.2}).wait(1).to({graphics:mask_1_graphics_428,x:211.9,y:222.3}).wait(1).to({graphics:mask_1_graphics_429,x:210.5,y:223.5}).wait(1).to({graphics:mask_1_graphics_430,x:209.1,y:224.6}).wait(1).to({graphics:mask_1_graphics_431,x:207.7,y:225.7}).wait(1).to({graphics:mask_1_graphics_432,x:206.3,y:226.7}).wait(1).to({graphics:mask_1_graphics_433,x:204.9,y:227.7}).wait(1).to({graphics:mask_1_graphics_434,x:203.4,y:228.7}).wait(1).to({graphics:mask_1_graphics_435,x:201.9,y:229.7}).wait(1).to({graphics:mask_1_graphics_436,x:200.4,y:230.6}).wait(1).to({graphics:mask_1_graphics_437,x:198.9,y:231.6}).wait(1).to({graphics:mask_1_graphics_438,x:197.4,y:232.4}).wait(1).to({graphics:mask_1_graphics_439,x:195.9,y:233.3}).wait(1).to({graphics:mask_1_graphics_440,x:194.3,y:234.1}).wait(1).to({graphics:mask_1_graphics_441,x:192.7,y:234.9}).wait(1).to({graphics:mask_1_graphics_442,x:191.1,y:235.7}).wait(1).to({graphics:mask_1_graphics_443,x:189.5,y:236.4}).wait(1).to({graphics:mask_1_graphics_444,x:187.9,y:237.1}).wait(1).to({graphics:mask_1_graphics_445,x:186.3,y:237.8}).wait(1).to({graphics:mask_1_graphics_446,x:184.6,y:238.4}).wait(1).to({graphics:mask_1_graphics_447,x:182.9,y:239}).wait(1).to({graphics:mask_1_graphics_448,x:181.3,y:239.6}).wait(1).to({graphics:mask_1_graphics_449,x:179.6,y:240.1}).wait(1).to({graphics:mask_1_graphics_450,x:177.9,y:240.6}).wait(1).to({graphics:mask_1_graphics_451,x:176.2,y:241.1}).wait(1).to({graphics:mask_1_graphics_452,x:174.5,y:241.6}).wait(1).to({graphics:mask_1_graphics_453,x:172.8,y:242}).wait(1).to({graphics:mask_1_graphics_454,x:171,y:242.3}).wait(1).to({graphics:mask_1_graphics_455,x:169.3,y:242.7}).wait(1).to({graphics:mask_1_graphics_456,x:167.6,y:243}).wait(1).to({graphics:mask_1_graphics_457,x:165.8,y:243.3}).wait(1).to({graphics:mask_1_graphics_458,x:164.1,y:243.5}).wait(1).to({graphics:mask_1_graphics_459,x:162.3,y:243.7}).wait(1).to({graphics:mask_1_graphics_460,x:160.6,y:243.9}).wait(1).to({graphics:mask_1_graphics_461,x:158.8,y:244}).wait(1).to({graphics:mask_1_graphics_462,x:157,y:244.2}).wait(1).to({graphics:mask_1_graphics_463,x:155.3,y:244.2}).wait(1).to({graphics:mask_1_graphics_464,x:153.5,y:244.3}).wait(1).to({graphics:mask_1_graphics_465,x:152,y:244.3}).wait(1).to({graphics:mask_1_graphics_466,x:153.8,y:244.3}).wait(1).to({graphics:mask_1_graphics_467,x:155.6,y:244.3}).wait(1).to({graphics:mask_1_graphics_468,x:157.4,y:244.3}).wait(1).to({graphics:mask_1_graphics_469,x:159.1,y:244.3}).wait(141));

	// Layer 9
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("AMf6SQk0CZmFEkQmEEllrFEQlsFFi5G0Qi6G2BmHnQBmHoF+BlQF+BkGkkEQGkkEFgk3QFFkdDajo");
	this.shape_2.setTransform(318.1,272.3);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(409).to({_off:false},0).wait(201));

	// Layer 8 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_359 = new cjs.Graphics().p("Av+EHQEtrLLOkmQLOkmLNEsQLMEtElLOQEnLOksLNg");
	var mask_2_graphics_360 = new cjs.Graphics().p("AwLE6QEerRLIk0QLJk0LSEfQLSEeEzLIQE1LJkfLSg");
	var mask_2_graphics_361 = new cjs.Graphics().p("AwYFuQEQrXLClBQLClDLYERQLYEQFALCQFDLCkQLYg");
	var mask_2_graphics_362 = new cjs.Graphics().p("AwlGhQEDrcK7lPQK8lPLdECQLdECFOK7QFRK8kDLdg");
	var mask_2_graphics_363 = new cjs.Graphics().p("AwwHVQD0rgK0ldQK2ldLhDzQLiD0FcK1QFeK1j0Lig");
	var mask_2_graphics_364 = new cjs.Graphics().p("Aw7IKQDlrlKulrQKulrLnDmQLmDlFqKuQFrKujlLng");
	var mask_2_graphics_365 = new cjs.Graphics().p("AxFI/QDWrqKnl3QKnl5LrDXQLrDXF3KnQF4KmjWLrg");
	var mask_2_graphics_366 = new cjs.Graphics().p("AxPJ0QDIruKfmFQKgmFLvDIQLvDIGEKgQGGKfjILvg");
	var mask_2_graphics_367 = new cjs.Graphics().p("AxYKpQC6rxKXmSQKYmTLzC6QLyC5GRKYQGUKYi6Lyg");
	var mask_2_graphics_368 = new cjs.Graphics().p("AxgLfQCrr1KPmfQKQmfL2CqQL2CrGfKQQGfKPiqL2g");
	var mask_2_graphics_369 = new cjs.Graphics().p("AxnMVQCcr6KHmqQKImsL5CcQL5CcGrKHQGtKHicL6g");
	var mask_2_graphics_370 = new cjs.Graphics().p("AxuNLQCNr9J/m2QJ/m5L8CNQL9CNG3J/QG5J/iNL8g");
	var mask_2_graphics_371 = new cjs.Graphics().p("AxzOBQB+r/J1nDQJ3nFL/B+QL+B+HEJ2QHGJ2h+L/g");
	var mask_2_graphics_372 = new cjs.Graphics().p("Ax5O3QBvsBJtnPQJunSMBBvQMBBvHQJuQHSJthvMBg");
	var mask_2_graphics_373 = new cjs.Graphics().p("Ax9PuQBgsDJkncQJkndMDBgQMDBgHcJkQHeJkhgMDg");
	var mask_2_graphics_374 = new cjs.Graphics().p("AyBQkQBRsEJannQJbnqMFBRQMFBRHoJbQHpJahQMFg");
	var mask_2_graphics_375 = new cjs.Graphics().p("AyERbQBCsGJQnzQJSn1MGBCQMGBCH0JRQH1JQhCMHg");
	var mask_2_graphics_376 = new cjs.Graphics().p("AyGSSQAysHJHn/QJHoAMIAyQMHAzH/JHQIBJHgzMIg");
	var mask_2_graphics_377 = new cjs.Graphics().p("AyITJQAjsII9oKQI9oMMIAkQMJAjIKI9QIMI9gjMIg");
	var mask_2_graphics_378 = new cjs.Graphics().p("AyJUAQAUsJIyoUQI0oYMIAVQMJAUIVIzQIYIygVMJg");
	var mask_2_graphics_379 = new cjs.Graphics().p("AyKU3QAFsJIoogQIqoiMIAGQMJAFIgIoQIiIogFMJg");
	var mask_2_graphics_380 = new cjs.Graphics().p("Ap2AiQIeosMIgKQMJgKIsIeQIsIdAKMJMg6kAAwQgKsJIdorg");
	var mask_2_graphics_381 = new cjs.Graphics().p("AqPAqQIUo2MHgZQMJgaI2IUQI3IRAZMJMg6jAB5QgZsIISo2g");
	var mask_2_graphics_382 = new cjs.Graphics().p("AqnAzQIJpBMHgoQMIgoJAIIQJBIGAoMIMg6fADDQgpsIIHpAg");
	var mask_2_graphics_383 = new cjs.Graphics().p("Aq+A8QH9pLMGg3QMHg3JLH9QJLH6A4MHMg6cAEMQg3sHH7pKg");
	var mask_2_graphics_384 = new cjs.Graphics().p("ArUBGQHypVMFhGQMFhHJUHyQJWHvBGMGMg6VAFUQhHsFHwpUg");
	var mask_2_graphics_385 = new cjs.Graphics().p("ArpBQQHmpeMDhWQMEhVJeHmQJfHjBWMEMg6OAGeQhWsFHkpdg");
	var mask_2_graphics_386 = new cjs.Graphics().p("Ar9BbQHapoMBhkQMDhlJnHaQJoHXBlMDMg6GAHmQhksCHYpng");
	var mask_2_graphics_387 = new cjs.Graphics().p("AsQBmQHNpwMAh0QMAh0JwHOQJxHLB0MAMg57AIvQh0sAHNpwg");
	var mask_2_graphics_388 = new cjs.Graphics().p("AsjByQHCp6L9iCQL+iDJ4HBQJ7G/CCL+Mg5vAJ3QiDr+HAp4g");
	var mask_2_graphics_389 = new cjs.Graphics().p("As0B+QG1qCL6iSQL7iSKCG2QKDGyCRL7Mg5iAK/QiSr7G0qBg");
	var mask_2_graphics_390 = new cjs.Graphics().p("AtFCLQGpqLL3ihQL4igKKGoQKLGmChL4Mg5UAMHQihr4GnqJg");
	var mask_2_graphics_391 = new cjs.Graphics().p("AtUCYQGbqTL0ivQL1iwKSGcQKUGaCvL0Mg5EANOQivr1GaqRg");
	var mask_2_graphics_392 = new cjs.Graphics().p("AtjClQGPqaLwi/QLyi+KaGPQKbGNC+LwMg4zAOWQi+rxGNqag");
	var mask_2_graphics_393 = new cjs.Graphics().p("AtwCzQGBqiLtjNQLtjNKiGCQKjGADNLsMg4hAPdQjNruGBqhg");
	var mask_2_graphics_394 = new cjs.Graphics().p("At9DCQF0qqLpjcQLpjbKpF1QKqFyDcLpMg4MAQjQjcrqFzqog");
	var mask_2_graphics_395 = new cjs.Graphics().p("AuIDQQFmqwLkjqQLljqKwFnQKyFlDqLkMg33ARpQjqrlFmqwg");
	var mask_2_graphics_396 = new cjs.Graphics().p("AuTDgQFZq4Lfj4QLgj5K4FaQK4FYD4LfMg3gASvQj4rhFYq2g");
	var mask_2_graphics_397 = new cjs.Graphics().p("AudDvQFMq+LakHQLbkGK+FMQK/FKEGLaMg3IAT0QkGrbFKq+g");
	var mask_2_graphics_398 = new cjs.Graphics().p("AumEAQE+rFLVkVQLWkVLEE+QLFE9EVLVMg2vAU4QkUrWE8rDg");
	var mask_2_graphics_399 = new cjs.Graphics().p("AutEQQEvrLLQkjQLQkjLLExQLLEuEjLQMg2UAV8QkjrQEvrKg");
	var mask_2_graphics_400 = new cjs.Graphics().p("Au0EhQEirQLJkxQLLkxLQEiQLREgExLKMg14AXAQkxrKEhrQg");
	var mask_2_graphics_401 = new cjs.Graphics().p("Au6EyQEUrVLDk/QLFk/LVEUQLXESE/LEMg1bAYDQk/rFETrVg");
	var mask_2_graphics_402 = new cjs.Graphics().p("Au/FEQEGrbK9lNQK+lMLbEGQLbEEFNK9Mg08AZGQlMq/EErag");
	var mask_2_graphics_403 = new cjs.Graphics().p("AvCFWQD3rgK3laQK3laLgD3QLgD2FaK2Mg0bAaIQlbq3D3rgg");
	var mask_2_graphics_404 = new cjs.Graphics().p("AvFFpQDorlKxloQKwloLkDqQLlDnFoKvMgz6AbJQloqwDorkg");
	var mask_2_graphics_405 = new cjs.Graphics().p("AvHF8QDarpKql2QKol1LpDbQLqDZF1KoMgzYAcKQl1qqDZrog");
	var mask_2_graphics_406 = new cjs.Graphics().p("AvIGPQDMrtKimDQKhmCLtDMQLuDKGCKiMgy0AdIQmCqiDKrsg");
	var mask_2_graphics_407 = new cjs.Graphics().p("AvHGjQC8rxKbmQQKZmQLxC+QLxC7GQKbMgyPAeHQmQqaC9rwg");
	var mask_2_graphics_408 = new cjs.Graphics().p("AvGG3QCur1KSmcQKSmdL0CvQL1CtGdKSMgxpAfGQmdqTCurzg");
	var mask_2_graphics_409 = new cjs.Graphics().p("AvEHLQCfr4KKmpQKKmqL3CgQL4CeGqKKMgxBAgEQmqqKCfr3g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(359).to({graphics:mask_2_graphics_359,x:258.7,y:171.4}).wait(1).to({graphics:mask_2_graphics_360,x:258.7,y:169.7}).wait(1).to({graphics:mask_2_graphics_361,x:258.7,y:168}).wait(1).to({graphics:mask_2_graphics_362,x:258.8,y:166.3}).wait(1).to({graphics:mask_2_graphics_363,x:258.8,y:164.6}).wait(1).to({graphics:mask_2_graphics_364,x:258.8,y:162.9}).wait(1).to({graphics:mask_2_graphics_365,x:258.8,y:161.1}).wait(1).to({graphics:mask_2_graphics_366,x:258.8,y:159.4}).wait(1).to({graphics:mask_2_graphics_367,x:258.8,y:157.6}).wait(1).to({graphics:mask_2_graphics_368,x:258.7,y:155.8}).wait(1).to({graphics:mask_2_graphics_369,x:258.7,y:154.1}).wait(1).to({graphics:mask_2_graphics_370,x:258.7,y:152.3}).wait(1).to({graphics:mask_2_graphics_371,x:258.7,y:150.5}).wait(1).to({graphics:mask_2_graphics_372,x:258.7,y:148.7}).wait(1).to({graphics:mask_2_graphics_373,x:258.7,y:146.9}).wait(1).to({graphics:mask_2_graphics_374,x:258.7,y:145.1}).wait(1).to({graphics:mask_2_graphics_375,x:258.7,y:143.3}).wait(1).to({graphics:mask_2_graphics_376,x:258.7,y:141.5}).wait(1).to({graphics:mask_2_graphics_377,x:258.7,y:139.6}).wait(1).to({graphics:mask_2_graphics_378,x:258.7,y:137.8}).wait(1).to({graphics:mask_2_graphics_379,x:258.7,y:136}).wait(1).to({graphics:mask_2_graphics_380,x:258.7,y:136.6}).wait(1).to({graphics:mask_2_graphics_381,x:258.7,y:138.4}).wait(1).to({graphics:mask_2_graphics_382,x:258.6,y:140.3}).wait(1).to({graphics:mask_2_graphics_383,x:258.6,y:142.1}).wait(1).to({graphics:mask_2_graphics_384,x:258.4,y:143.9}).wait(1).to({graphics:mask_2_graphics_385,x:258.3,y:145.8}).wait(1).to({graphics:mask_2_graphics_386,x:258.1,y:147.6}).wait(1).to({graphics:mask_2_graphics_387,x:257.8,y:149.4}).wait(1).to({graphics:mask_2_graphics_388,x:257.5,y:151.2}).wait(1).to({graphics:mask_2_graphics_389,x:257.2,y:153}).wait(1).to({graphics:mask_2_graphics_390,x:256.9,y:154.8}).wait(1).to({graphics:mask_2_graphics_391,x:256.5,y:156.6}).wait(1).to({graphics:mask_2_graphics_392,x:256.1,y:158.4}).wait(1).to({graphics:mask_2_graphics_393,x:255.7,y:160.2}).wait(1).to({graphics:mask_2_graphics_394,x:255.2,y:162}).wait(1).to({graphics:mask_2_graphics_395,x:254.7,y:163.7}).wait(1).to({graphics:mask_2_graphics_396,x:254.1,y:165.5}).wait(1).to({graphics:mask_2_graphics_397,x:253.5,y:167.2}).wait(1).to({graphics:mask_2_graphics_398,x:252.9,y:168.9}).wait(1).to({graphics:mask_2_graphics_399,x:252.3,y:170.6}).wait(1).to({graphics:mask_2_graphics_400,x:251.6,y:172.3}).wait(1).to({graphics:mask_2_graphics_401,x:250.9,y:174}).wait(1).to({graphics:mask_2_graphics_402,x:250.1,y:175.7}).wait(1).to({graphics:mask_2_graphics_403,x:249.3,y:177.3}).wait(1).to({graphics:mask_2_graphics_404,x:248.5,y:178.9}).wait(1).to({graphics:mask_2_graphics_405,x:247.7,y:180.6}).wait(1).to({graphics:mask_2_graphics_406,x:246.8,y:182.1}).wait(1).to({graphics:mask_2_graphics_407,x:245.9,y:183.7}).wait(1).to({graphics:mask_2_graphics_408,x:245,y:185.3}).wait(1).to({graphics:mask_2_graphics_409,x:244,y:186.8}).wait(201));

	// Layer 7
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("AO36SQk0CZmFEkQmEEllsFEQlrFFi6G0Qi5G2BmHnQBmHoF+BlQF+BkGjkEQGkkEFhk3QCAhxBwho");
	this.shape_3.setTransform(302.9,272.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("AMf6SQk0CZmFEkQmEEllrFEQlsFFi5G0Qi6G2BmHnQBmHoF+BlQF+BkGkkEQGkkEFgk3QFFkdDajo");
	this.shape_4.setTransform(318.1,272.3);

	var maskedShapeInstanceList = [this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3}]},359).to({state:[{t:this.shape_4}]},31).wait(220));

	// Layer 6 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_289 = new cjs.Graphics().p("AQA5/QMJAAIkIkQImImAAMIQAAMJomIkQokImsJAAg");
	var mask_3_graphics_290 = new cjs.Graphics().p("APP5+QMJgUIyIWQI0IYAUMHQAUMJoYIyQoVI0sJAUg");
	var mask_3_graphics_291 = new cjs.Graphics().p("AOf57QMIgoJAIIQJBIIAoMHQAoMIoJJAQoHJBsIAog");
	var mask_3_graphics_292 = new cjs.Graphics().p("ANv52QMGg8JNH5QJPH5A8MGQA7MGn5JNQn4JPsHA8g");
	var mask_3_graphics_293 = new cjs.Graphics().p("AM/5vQMEhQJaHpQJbHqBQMEQBQMFnrJaQnoJbsFBPg");
	var mask_3_graphics_294 = new cjs.Graphics().p("AMO5mQMDhkJmHZQJnHbBkMCQBkMBnbJnQnZJnsCBkg");
	var mask_3_graphics_295 = new cjs.Graphics().p("ALf5cQL/h3JyHJQJzHKB4MAQB3L+nKJzQnJJzsAB3g");
	var mask_3_graphics_296 = new cjs.Graphics().p("AKv5QQL8iLJ9G5QJ/G6CML8QCLL8m7J9Qm4J/r9CLg");
	var mask_3_graphics_297 = new cjs.Graphics().p("AJ/5CQL5ieKIGoQKKGqCfL4QCfL3mqKJQmoKKr4Cfg");
	var mask_3_graphics_298 = new cjs.Graphics().p("AJQ4yQL0iyKTGYQKVGYCyL0QCzLzmZKUQmYKUr0Czg");
	var mask_3_graphics_299 = new cjs.Graphics().p("AIh4gQLvjGKdGHQKgGHDFLvQDGLvmIKdQmGKfrvDGg");
	var mask_3_graphics_300 = new cjs.Graphics().p("AHy4MQLqjZKnF1QKpF2DZLqQDZLol2KoQl1KprqDYg");
	var mask_3_graphics_301 = new cjs.Graphics().p("AHE33QLkjsKxFjQKyFlDsLkQDsLillKxQljKyrkDtg");
	var mask_3_graphics_302 = new cjs.Graphics().p("AGW3gQLej/K5FSQK8FSD/LeQD/LclTK6QlRK7reD/g");
	var mask_3_graphics_303 = new cjs.Graphics().p("AFp3HQLXkSLCFAQLDFAESLXQESLVlBLDQk/LDrXESg");
	var mask_3_graphics_304 = new cjs.Graphics().p("AE82tQLQkkLJEtQLMEuElLQQEkLOkvLKQksLMrQEkg");
	var mask_3_graphics_305 = new cjs.Graphics().p("AEQ2QQLIk3LREbQLTEbE3LIQE3LGkcLSQkbLTrHE3g");
	var mask_3_graphics_306 = new cjs.Graphics().p("ADk1yQLAlJLYEIQLaEJFJK/QFJK+kJLZQkILaq/FJg");
	var mask_3_graphics_307 = new cjs.Graphics().p("AC51TQK3laLfD1QLgD2FbK2QFbK2j2LfQj1Lhq3Fag");
	var mask_3_graphics_308 = new cjs.Graphics().p("ACP0xQKtltLlDiQLnDjFsKuQFtKsjkLmQjhLmqtFsg");
	var mask_3_graphics_309 = new cjs.Graphics().p("ABl0OQKjl+LrDPQLsDQF+KjQF/KjjRLrQjOLsqkF+g");
	var mask_3_graphics_310 = new cjs.Graphics().p("AA7zqQKamPLwC8QLxC8GPKaQGQKYi9LxQi7LwqaGQg");
	var mask_3_graphics_311 = new cjs.Graphics().p("AATzDQKPmhL0CpQL2CpGgKPQGhKOiqL1QioL1qPGgg");
	var mask_3_graphics_312 = new cjs.Graphics().p("AgUycQKDmxL4CVQL6CWGxKEQGxKEiWL4QiUL5qEGxg");
	var mask_3_graphics_313 = new cjs.Graphics().p("Ag7xyQJ4nCL7CCQL+CBHBJ5QHCJ5iDL7QiAL9p5HBg");
	var mask_3_graphics_314 = new cjs.Graphics().p("AhixHQJsnSL/BuQMBBtHRJtQHSJthvL/QhtMAptHRg");
	var mask_3_graphics_315 = new cjs.Graphics().p("AiHwbQJfniMCBaQMDBaHhJhQHiJhhbMBQhZMCphHig");
	var mask_3_graphics_316 = new cjs.Graphics().p("AisvtQJTnxMDBGQMFBGHxJUQHxJUhHMDQhFMFpUHwg");
	var mask_3_graphics_317 = new cjs.Graphics().p("AjQu+QJGoAMEAyQMHAyIAJHQIAJHgzMFQgxMGpHIAg");
	var mask_3_graphics_318 = new cjs.Graphics().p("Aj0uOQI5oOMGAeQMHAeIPI6QIPI5gfMGQgeMHo5IPg");
	var mask_3_graphics_319 = new cjs.Graphics().p("AkWtcQIqodMHAKQMIALIdIsQIdIrgLMHQgJMHosIdg");
	var mask_3_graphics_320 = new cjs.Graphics().p("Ak4soQIcosMHgJQMIgKIrIeQIsIdAIMHQALMHoeIrg");
	var mask_3_graphics_321 = new cjs.Graphics().p("Alar0QIPo5MFgeQMIgdI5IPQI5IPAdMGQAeMHoPI5g");
	var mask_3_graphics_322 = new cjs.Graphics().p("Al6q+QIApHMEgxQMHgyJGIBQJHIAAwMFQAzMGoBJGg");
	var mask_3_graphics_323 = new cjs.Graphics().p("AmZqHQHwpUMDhFQMFhFJUHxQJTHxBEMDQBHMEnyJUg");
	var mask_3_graphics_324 = new cjs.Graphics().p("Am4pPQHhpgMBhZQMDhaJgHiQJgHiBYMBQBaMCniJgg");
	var mask_3_graphics_325 = new cjs.Graphics().p("AnOolQHVppL/hoQMBhoJpHWQJpHWBnL/QBpMAnWJpg");
	var mask_3_graphics_326 = new cjs.Graphics().p("Ankn5QHKpzL8h2QL/h3JyHKQJyHKB2L9QB4L+nKJyg");
	var mask_3_graphics_327 = new cjs.Graphics().p("An6nNQG+p7L6iGQL8iFJ7G9QJ7G+CFL7QCHL8m+J6g");
	var mask_3_graphics_328 = new cjs.Graphics().p("AoOmhQGxqDL3iUQL6iVKEGyQKDGxCTL4QCWL5myKEg");
	var mask_3_graphics_329 = new cjs.Graphics().p("Aojl0QGmqLLzijQL3ijKMGlQKMGlCiL1QCkL2mlKMg");
	var mask_3_graphics_330 = new cjs.Graphics().p("Ao2lGQGYqULxixQL0iyKUGZQKTGYCxLyQCyLzmYKTg");
	var mask_3_graphics_331 = new cjs.Graphics().p("ApJkYQGMqbLtjAQLwjAKbGLQKcGMC/LvQDBLvmMKbg");
	var mask_3_graphics_332 = new cjs.Graphics().p("ApcjpQF/qjLqjOQLsjPKjF/QKjF/DOLqQDPLrl/Kjg");
	var mask_3_graphics_333 = new cjs.Graphics().p("Apti5QFxqrLmjcQLojeKqFyQKrFyDcLmQDeLnlyKrg");
	var mask_3_graphics_334 = new cjs.Graphics().p("Ap+iKQFkqxLhjrQLkjrKxFkQKyFlDqLiQDsLilkKyg");
	var mask_3_graphics_335 = new cjs.Graphics().p("AqPhZQFXq4Ldj6QLfj5K4FXQK4FXD5LeQD6LelXK4g");
	var mask_3_graphics_336 = new cjs.Graphics().p("AqfgpQFKq+LXkHQLbkIK/FJQK+FKEHLZQEILZlJK/g");
	var mask_3_graphics_337 = new cjs.Graphics().p("AquAIQE8rELTkVQLVkWLFE8QLFE8EULTQEXLUk8LFg");
	var mask_3_graphics_338 = new cjs.Graphics().p("Aq8A5QEurKLNkjQLQkkLLEvQLLEuEiLOQEkLPkuLLg");
	var mask_3_graphics_339 = new cjs.Graphics().p("ArKBrQEgrPLIkxQLKkyLQEhQLREgEwLJQEzLIkhLRg");
	var mask_3_graphics_340 = new cjs.Graphics().p("ArXCeQESrVLCk/QLEk/LWESQLWETE+LCQFALDkTLWg");
	var mask_3_graphics_341 = new cjs.Graphics().p("ArkDRQEFrbK7lMQK+lNLbEFQLbEEFMK9QFNK8kELbg");
	var mask_3_graphics_342 = new cjs.Graphics().p("ArwEEQD3rfK0laQK4laLgD2QLgD2FZK2QFbK2j2Lgg");
	var mask_3_graphics_343 = new cjs.Graphics().p("Ar7E3QDprkKtlmQKxloLlDoQLlDoFmKvQFoKvjoLlg");
	var mask_3_graphics_344 = new cjs.Graphics().p("AsFFrQDaroKml0QKql1LpDaQLpDaF0KpQF2KnjaLpg");
	var mask_3_graphics_345 = new cjs.Graphics().p("AsPGfQDMrsKfmBQKimCLuDLQLtDMGBKhQGCKgjLLug");
	var mask_3_graphics_346 = new cjs.Graphics().p("AsYHUQC9rwKYmOQKbmQLxC9QLxC9GOKbQGPKYi9Lxg");
	var mask_3_graphics_347 = new cjs.Graphics().p("AsgIIQCurzKQmbQKTmcL1CuQL1CvGaKSQGcKRiuL1g");
	var mask_3_graphics_348 = new cjs.Graphics().p("AsoI9QCgr3KImnQKLmpL4CgQL4CgGnKLQGpKIigL4g");
	var mask_3_graphics_349 = new cjs.Graphics().p("AsvJyQCRr5KBm0QKCm1L7CRQL7CRGzKCQG2KAiSL7g");
	var mask_3_graphics_350 = new cjs.Graphics().p("As1KoQCCr9J5nAQJ5nBL9CCQL+CDHAJ5QHCJ4iDL9g");
	var mask_3_graphics_351 = new cjs.Graphics().p("As7LdQB0r/JwnMQJwnOMAB0QMAB0HMJxQHOJvh0MAg");
	var mask_3_graphics_352 = new cjs.Graphics().p("As/MTQBksCJnnXQJnnaMCBlQMDBlHYJoQHZJmhkMCg");
	var mask_3_graphics_353 = new cjs.Graphics().p("AtENJQBWsEJenjQJenmMEBWQMEBWHkJfQHlJdhWMEg");
	var mask_3_graphics_354 = new cjs.Graphics().p("AtHN/QBHsGJUnvQJVnxMFBIQMGBHHvJVQHxJThHMGg");
	var mask_3_graphics_355 = new cjs.Graphics().p("AtKO1QA4sHJLn6QJKn9MHA5QMHA4H7JMQH9JJg5MHg");
	var mask_3_graphics_356 = new cjs.Graphics().p("AtMPrQApsIJBoFQJBoIMHApQMIApIGJCQIIJAgpMIg");
	var mask_3_graphics_357 = new cjs.Graphics().p("AtOQhQAbsJI2oQQI3oTMIAbQMJAaIRI4QITI1gaMJg");
	var mask_3_graphics_358 = new cjs.Graphics().p("AtPRXQAMsJIsobQIsoeMJAMQMJALIcIuQIeIrgLMJg");
	var mask_3_graphics_359 = new cjs.Graphics().p("AkxiqQIjooMJgEQMJgEImIjQIpIhADMJMg6lAASQgDsJIhomg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(289).to({graphics:mask_3_graphics_289,x:289.9,y:208.6}).wait(1).to({graphics:mask_3_graphics_290,x:289.9,y:208.6}).wait(1).to({graphics:mask_3_graphics_291,x:289.9,y:208.5}).wait(1).to({graphics:mask_3_graphics_292,x:289.9,y:208.4}).wait(1).to({graphics:mask_3_graphics_293,x:289.9,y:208.1}).wait(1).to({graphics:mask_3_graphics_294,x:289.9,y:207.9}).wait(1).to({graphics:mask_3_graphics_295,x:290,y:207.5}).wait(1).to({graphics:mask_3_graphics_296,x:290,y:207.1}).wait(1).to({graphics:mask_3_graphics_297,x:290,y:206.7}).wait(1).to({graphics:mask_3_graphics_298,x:290,y:206.2}).wait(1).to({graphics:mask_3_graphics_299,x:290.1,y:205.6}).wait(1).to({graphics:mask_3_graphics_300,x:290.1,y:204.9}).wait(1).to({graphics:mask_3_graphics_301,x:290.1,y:204.3}).wait(1).to({graphics:mask_3_graphics_302,x:290.1,y:203.5}).wait(1).to({graphics:mask_3_graphics_303,x:290.1,y:202.7}).wait(1).to({graphics:mask_3_graphics_304,x:290.1,y:201.8}).wait(1).to({graphics:mask_3_graphics_305,x:290.1,y:200.9}).wait(1).to({graphics:mask_3_graphics_306,x:290.1,y:199.9}).wait(1).to({graphics:mask_3_graphics_307,x:290.1,y:198.8}).wait(1).to({graphics:mask_3_graphics_308,x:290.1,y:197.7}).wait(1).to({graphics:mask_3_graphics_309,x:290.1,y:196.6}).wait(1).to({graphics:mask_3_graphics_310,x:290,y:195.4}).wait(1).to({graphics:mask_3_graphics_311,x:290,y:194.1}).wait(1).to({graphics:mask_3_graphics_312,x:290,y:192.8}).wait(1).to({graphics:mask_3_graphics_313,x:290,y:191.4}).wait(1).to({graphics:mask_3_graphics_314,x:289.9,y:190}).wait(1).to({graphics:mask_3_graphics_315,x:289.9,y:188.6}).wait(1).to({graphics:mask_3_graphics_316,x:289.9,y:187}).wait(1).to({graphics:mask_3_graphics_317,x:289.9,y:185.5}).wait(1).to({graphics:mask_3_graphics_318,x:289.8,y:183.9}).wait(1).to({graphics:mask_3_graphics_319,x:289.8,y:182.2}).wait(1).to({graphics:mask_3_graphics_320,x:289.8,y:180.5}).wait(1).to({graphics:mask_3_graphics_321,x:289.9,y:178.8}).wait(1).to({graphics:mask_3_graphics_322,x:289.9,y:177}).wait(1).to({graphics:mask_3_graphics_323,x:289.9,y:175.2}).wait(1).to({graphics:mask_3_graphics_324,x:289.9,y:173.3}).wait(1).to({graphics:mask_3_graphics_325,x:289.9,y:171.8}).wait(1).to({graphics:mask_3_graphics_326,x:290,y:170.4}).wait(1).to({graphics:mask_3_graphics_327,x:290,y:168.9}).wait(1).to({graphics:mask_3_graphics_328,x:290,y:167.5}).wait(1).to({graphics:mask_3_graphics_329,x:290.1,y:166}).wait(1).to({graphics:mask_3_graphics_330,x:290.1,y:164.4}).wait(1).to({graphics:mask_3_graphics_331,x:290.1,y:162.9}).wait(1).to({graphics:mask_3_graphics_332,x:290.2,y:161.3}).wait(1).to({graphics:mask_3_graphics_333,x:290.2,y:159.8}).wait(1).to({graphics:mask_3_graphics_334,x:290.2,y:158.2}).wait(1).to({graphics:mask_3_graphics_335,x:290.2,y:156.6}).wait(1).to({graphics:mask_3_graphics_336,x:290.3,y:155}).wait(1).to({graphics:mask_3_graphics_337,x:290.3,y:153.3}).wait(1).to({graphics:mask_3_graphics_338,x:290.3,y:151.7}).wait(1).to({graphics:mask_3_graphics_339,x:290.3,y:150}).wait(1).to({graphics:mask_3_graphics_340,x:290.3,y:148.3}).wait(1).to({graphics:mask_3_graphics_341,x:290.3,y:146.6}).wait(1).to({graphics:mask_3_graphics_342,x:290.3,y:144.9}).wait(1).to({graphics:mask_3_graphics_343,x:290.3,y:143.2}).wait(1).to({graphics:mask_3_graphics_344,x:290.3,y:141.5}).wait(1).to({graphics:mask_3_graphics_345,x:290.3,y:139.8}).wait(1).to({graphics:mask_3_graphics_346,x:290.3,y:138}).wait(1).to({graphics:mask_3_graphics_347,x:290.3,y:136.3}).wait(1).to({graphics:mask_3_graphics_348,x:290.3,y:134.5}).wait(1).to({graphics:mask_3_graphics_349,x:290.3,y:132.7}).wait(1).to({graphics:mask_3_graphics_350,x:290.3,y:131}).wait(1).to({graphics:mask_3_graphics_351,x:290.2,y:129.2}).wait(1).to({graphics:mask_3_graphics_352,x:290.2,y:127.4}).wait(1).to({graphics:mask_3_graphics_353,x:290.2,y:125.6}).wait(1).to({graphics:mask_3_graphics_354,x:290.2,y:123.8}).wait(1).to({graphics:mask_3_graphics_355,x:290.2,y:122}).wait(1).to({graphics:mask_3_graphics_356,x:290.2,y:120.2}).wait(1).to({graphics:mask_3_graphics_357,x:290.2,y:118.4}).wait(1).to({graphics:mask_3_graphics_358,x:290.2,y:116.6}).wait(1).to({graphics:mask_3_graphics_359,x:290.2,y:115.7}).wait(251));

	// Layer 3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("AQj6SQk0CZmFEkQmEEllrFEQlsFFi5G0Qi6G2BmHnQBmHoF+BlQF+BkGkkEQExi9EOjY");
	this.shape_5.setTransform(292.1,272.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("AMf6SQk0CZmFEkQmEEllrFEQlsFFi5G0Qi6G2BmHnQBmHoF+BlQF+BkGkkEQGkkEFgk3QFFkdDajo");
	this.shape_6.setTransform(318.1,272.3);

	var maskedShapeInstanceList = [this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5}]},289).to({state:[{t:this.shape_6}]},35).wait(286));

	// Layer 13
	this.instance_2 = new lib.ar4("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(94.7,218.1,1,1,0,-57.5,122.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(601));

	// Layer 4 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_129 = new cjs.Graphics().p("AurQkIAAqKMAi/AAAIAAKKg");
	var mask_4_graphics_130 = new cjs.Graphics().p("AxfFNIAAqZMAi/AAAIAAKZg");
	var mask_4_graphics_131 = new cjs.Graphics().p("AxfFVIAAqpMAi/AAAIAAKpg");
	var mask_4_graphics_132 = new cjs.Graphics().p("AxfFdIAAq5MAi/AAAIAAK5g");
	var mask_4_graphics_133 = new cjs.Graphics().p("AxfFlIAArJMAi/AAAIAALJg");
	var mask_4_graphics_134 = new cjs.Graphics().p("AxfFtIAArZMAi/AAAIAALZg");
	var mask_4_graphics_135 = new cjs.Graphics().p("AxfF1IAArpMAi/AAAIAALpg");
	var mask_4_graphics_136 = new cjs.Graphics().p("AxfF9IAAr5MAi/AAAIAAL5g");
	var mask_4_graphics_137 = new cjs.Graphics().p("AxfGFIAAsJMAi/AAAIAAMJg");
	var mask_4_graphics_138 = new cjs.Graphics().p("AxfGNIAAsZMAi/AAAIAAMZg");
	var mask_4_graphics_139 = new cjs.Graphics().p("AxfGVIAAspMAi/AAAIAAMpg");
	var mask_4_graphics_140 = new cjs.Graphics().p("AxfGdIAAs5MAi/AAAIAAM5g");
	var mask_4_graphics_141 = new cjs.Graphics().p("AxfGlIAAtJMAi/AAAIAANJg");
	var mask_4_graphics_142 = new cjs.Graphics().p("AxfGsIAAtXMAi/AAAIAANXg");
	var mask_4_graphics_143 = new cjs.Graphics().p("AxfG1IAAtoMAi/AAAIAANog");
	var mask_4_graphics_144 = new cjs.Graphics().p("AxfG9IAAt4MAi/AAAIAAN4g");
	var mask_4_graphics_145 = new cjs.Graphics().p("AxfHEIAAuHMAi/AAAIAAOHg");
	var mask_4_graphics_146 = new cjs.Graphics().p("AxfHMIAAuXMAi/AAAIAAOXg");
	var mask_4_graphics_147 = new cjs.Graphics().p("AxfHVIAAuoMAi/AAAIAAOog");
	var mask_4_graphics_148 = new cjs.Graphics().p("AxfHdIAAu4MAi/AAAIAAO4g");
	var mask_4_graphics_149 = new cjs.Graphics().p("AxfHkIAAvHMAi/AAAIAAPHg");
	var mask_4_graphics_150 = new cjs.Graphics().p("AxfHsIAAvXMAi/AAAIAAPXg");
	var mask_4_graphics_151 = new cjs.Graphics().p("AxfH0IAAvnMAi/AAAIAAPng");
	var mask_4_graphics_152 = new cjs.Graphics().p("AxfH8IAAv3MAi/AAAIAAP3g");
	var mask_4_graphics_153 = new cjs.Graphics().p("AxfIEIAAwHMAi/AAAIAAQHg");
	var mask_4_graphics_154 = new cjs.Graphics().p("AxfIMIAAwXMAi/AAAIAAQXg");
	var mask_4_graphics_155 = new cjs.Graphics().p("AxfIUIAAwnMAi/AAAIAAQng");
	var mask_4_graphics_156 = new cjs.Graphics().p("AxfIcIAAw3MAi/AAAIAAQ3g");
	var mask_4_graphics_157 = new cjs.Graphics().p("AxfIkIAAxHMAi/AAAIAARHg");
	var mask_4_graphics_158 = new cjs.Graphics().p("AxfIsIAAxXMAi/AAAIAARXg");
	var mask_4_graphics_159 = new cjs.Graphics().p("AxfI0IAAxnMAi/AAAIAARng");
	var mask_4_graphics_160 = new cjs.Graphics().p("AxfI8IAAx3MAi/AAAIAAR3g");
	var mask_4_graphics_161 = new cjs.Graphics().p("AxfJEIAAyHMAi/AAAIAASHg");
	var mask_4_graphics_162 = new cjs.Graphics().p("AxfJMIAAyXMAi/AAAIAASXg");
	var mask_4_graphics_163 = new cjs.Graphics().p("AxfJUIAAynMAi/AAAIAASng");
	var mask_4_graphics_164 = new cjs.Graphics().p("AxfJcIAAy3MAi/AAAIAAS3g");
	var mask_4_graphics_165 = new cjs.Graphics().p("AxfJkIAAzHMAi/AAAIAATHg");
	var mask_4_graphics_166 = new cjs.Graphics().p("AxfJsIAAzXMAi/AAAIAATXg");
	var mask_4_graphics_167 = new cjs.Graphics().p("AxfJ0IAAznMAi/AAAIAATng");
	var mask_4_graphics_168 = new cjs.Graphics().p("AxfJ8IAAz3MAi/AAAIAAT3g");
	var mask_4_graphics_169 = new cjs.Graphics().p("AxfKEIAA0HMAi/AAAIAAUHg");
	var mask_4_graphics_170 = new cjs.Graphics().p("AxfKMIAA0XMAi/AAAIAAUXg");
	var mask_4_graphics_171 = new cjs.Graphics().p("AxfKUIAA0nMAi/AAAIAAUng");
	var mask_4_graphics_172 = new cjs.Graphics().p("AxfKcIAA03MAi/AAAIAAU3g");
	var mask_4_graphics_173 = new cjs.Graphics().p("AxfKkIAA1GMAi/AAAIAAVGg");
	var mask_4_graphics_174 = new cjs.Graphics().p("AxfKsIAA1WMAi/AAAIAAVWg");
	var mask_4_graphics_175 = new cjs.Graphics().p("AxfKzIAA1lMAi/AAAIAAVlg");
	var mask_4_graphics_176 = new cjs.Graphics().p("AxfK7IAA11MAi/AAAIAAV1g");
	var mask_4_graphics_177 = new cjs.Graphics().p("AxfLDIAA2FMAi/AAAIAAWFg");
	var mask_4_graphics_178 = new cjs.Graphics().p("AxfLMIAA2WMAi/AAAIAAWWg");
	var mask_4_graphics_179 = new cjs.Graphics().p("AxfLUIAA2mMAi/AAAIAAWmg");
	var mask_4_graphics_180 = new cjs.Graphics().p("AxfLbIAA21MAi/AAAIAAW1g");
	var mask_4_graphics_181 = new cjs.Graphics().p("AxfLjIAA3FMAi/AAAIAAXFg");
	var mask_4_graphics_182 = new cjs.Graphics().p("AxfLrIAA3VMAi/AAAIAAXVg");
	var mask_4_graphics_183 = new cjs.Graphics().p("AxfLzIAA3lMAi/AAAIAAXlg");
	var mask_4_graphics_184 = new cjs.Graphics().p("AxfL7IAA31MAi/AAAIAAX1g");
	var mask_4_graphics_185 = new cjs.Graphics().p("AxfMDIAA4FMAi/AAAIAAYFg");
	var mask_4_graphics_186 = new cjs.Graphics().p("AxfMLIAA4VMAi/AAAIAAYVg");
	var mask_4_graphics_187 = new cjs.Graphics().p("AxfMTIAA4lMAi/AAAIAAYlg");
	var mask_4_graphics_188 = new cjs.Graphics().p("AxfMbIAA41MAi/AAAIAAY1g");
	var mask_4_graphics_189 = new cjs.Graphics().p("AxfMjIAA5FMAi/AAAIAAZFg");
	var mask_4_graphics_190 = new cjs.Graphics().p("AxfMrIAA5VMAi/AAAIAAZVg");
	var mask_4_graphics_191 = new cjs.Graphics().p("AxfMzIAA5lMAi/AAAIAAZlg");
	var mask_4_graphics_192 = new cjs.Graphics().p("AxfM7IAA51MAi/AAAIAAZ1g");
	var mask_4_graphics_193 = new cjs.Graphics().p("AxfNDIAA6FMAi/AAAIAAaFg");
	var mask_4_graphics_194 = new cjs.Graphics().p("AxfNLIAA6VMAi/AAAIAAaVg");
	var mask_4_graphics_195 = new cjs.Graphics().p("AxfNTIAA6lMAi/AAAIAAalg");
	var mask_4_graphics_196 = new cjs.Graphics().p("AxfNbIAA61MAi/AAAIAAa1g");
	var mask_4_graphics_197 = new cjs.Graphics().p("AxfNjIAA7FMAi/AAAIAAbFg");
	var mask_4_graphics_198 = new cjs.Graphics().p("AxfNrIAA7VMAi/AAAIAAbVg");
	var mask_4_graphics_199 = new cjs.Graphics().p("AxfNzIAA7lMAi/AAAIAAblg");
	var mask_4_graphics_200 = new cjs.Graphics().p("AxfN7IAA71MAi/AAAIAAb1g");
	var mask_4_graphics_201 = new cjs.Graphics().p("AxfODIAA8FMAi/AAAIAAcFg");
	var mask_4_graphics_202 = new cjs.Graphics().p("AxfOLIAA8VMAi/AAAIAAcVg");
	var mask_4_graphics_203 = new cjs.Graphics().p("AxfOTIAA8lMAi/AAAIAAclg");
	var mask_4_graphics_204 = new cjs.Graphics().p("AxfObIAA81MAi/AAAIAAc1g");
	var mask_4_graphics_205 = new cjs.Graphics().p("AxfOjIAA9EMAi/AAAIAAdEg");
	var mask_4_graphics_206 = new cjs.Graphics().p("AxfOqIAA9TMAi/AAAIAAdTg");
	var mask_4_graphics_207 = new cjs.Graphics().p("AxfOyIAA9jMAi/AAAIAAdjg");
	var mask_4_graphics_208 = new cjs.Graphics().p("AxfO7IAA90MAi/AAAIAAd0g");
	var mask_4_graphics_209 = new cjs.Graphics().p("AxfPDIAA+EMAi/AAAIAAeEg");
	var mask_4_graphics_210 = new cjs.Graphics().p("AxfPKIAA+TMAi/AAAIAAeTg");
	var mask_4_graphics_211 = new cjs.Graphics().p("AxfPSIAA+jMAi/AAAIAAejg");
	var mask_4_graphics_212 = new cjs.Graphics().p("AxfPbIAA+0MAi/AAAIAAe0g");
	var mask_4_graphics_213 = new cjs.Graphics().p("AxfPiIAA/DMAi/AAAIAAfDg");
	var mask_4_graphics_214 = new cjs.Graphics().p("AxfPqIAA/TMAi/AAAIAAfTg");
	var mask_4_graphics_215 = new cjs.Graphics().p("AxfPyIAA/jMAi/AAAIAAfjg");
	var mask_4_graphics_216 = new cjs.Graphics().p("AxfP6IAA/zMAi/AAAIAAfzg");
	var mask_4_graphics_217 = new cjs.Graphics().p("AxfQCMAAAggDMAi/AAAMAAAAgDg");
	var mask_4_graphics_218 = new cjs.Graphics().p("AxfQKMAAAggTMAi/AAAMAAAAgTg");
	var mask_4_graphics_219 = new cjs.Graphics().p("AxfQSMAAAggjMAi/AAAMAAAAgjg");
	var mask_4_graphics_220 = new cjs.Graphics().p("AxfQaMAAAggzMAi/AAAMAAAAgzg");
	var mask_4_graphics_221 = new cjs.Graphics().p("AxfQiMAAAghDMAi/AAAMAAAAhDg");
	var mask_4_graphics_222 = new cjs.Graphics().p("AxfQqMAAAghTMAi/AAAMAAAAhTg");
	var mask_4_graphics_223 = new cjs.Graphics().p("AxfQyMAAAghjMAi/AAAMAAAAhjg");
	var mask_4_graphics_224 = new cjs.Graphics().p("AxfQ6MAAAghzMAi/AAAMAAAAhzg");
	var mask_4_graphics_225 = new cjs.Graphics().p("AxfRCMAAAgiDMAi/AAAMAAAAiDg");
	var mask_4_graphics_226 = new cjs.Graphics().p("AxfRKMAAAgiTMAi/AAAMAAAAiTg");
	var mask_4_graphics_227 = new cjs.Graphics().p("AxfRSMAAAgijMAi/AAAMAAAAijg");
	var mask_4_graphics_228 = new cjs.Graphics().p("AxfRaMAAAgizMAi/AAAMAAAAizg");
	var mask_4_graphics_229 = new cjs.Graphics().p("AxfRiMAAAgjDMAi/AAAMAAAAjDg");
	var mask_4_graphics_230 = new cjs.Graphics().p("AxfRqMAAAgjTMAi/AAAMAAAAjTg");
	var mask_4_graphics_231 = new cjs.Graphics().p("AxfRyMAAAgjjMAi/AAAMAAAAjjg");
	var mask_4_graphics_232 = new cjs.Graphics().p("AxfR6MAAAgjzMAi/AAAMAAAAjzg");
	var mask_4_graphics_233 = new cjs.Graphics().p("AxfSCMAAAgkDMAi/AAAMAAAAkDg");
	var mask_4_graphics_234 = new cjs.Graphics().p("AxfSKMAAAgkTMAi/AAAMAAAAkTg");
	var mask_4_graphics_235 = new cjs.Graphics().p("AxfSSMAAAgkjMAi/AAAMAAAAkjg");
	var mask_4_graphics_236 = new cjs.Graphics().p("AxfSaMAAAgkzMAi/AAAMAAAAkzg");
	var mask_4_graphics_237 = new cjs.Graphics().p("AxfShMAAAglBMAi/AAAMAAAAlBg");
	var mask_4_graphics_238 = new cjs.Graphics().p("AxfSpMAAAglRMAi/AAAMAAAAlRg");
	var mask_4_graphics_239 = new cjs.Graphics().p("AxfSyMAAAgliMAi/AAAMAAAAlig");
	var mask_4_graphics_240 = new cjs.Graphics().p("AxfS6MAAAglyMAi/AAAMAAAAlyg");
	var mask_4_graphics_241 = new cjs.Graphics().p("AxfTBMAAAgmBMAi/AAAMAAAAmBg");
	var mask_4_graphics_242 = new cjs.Graphics().p("AxfTJMAAAgmRMAi/AAAMAAAAmRg");
	var mask_4_graphics_243 = new cjs.Graphics().p("AxfTSMAAAgmiMAi/AAAMAAAAmig");
	var mask_4_graphics_244 = new cjs.Graphics().p("AxfTaMAAAgmyMAi/AAAMAAAAmyg");
	var mask_4_graphics_245 = new cjs.Graphics().p("AxfThMAAAgnBMAi/AAAMAAAAnBg");
	var mask_4_graphics_246 = new cjs.Graphics().p("AxfTpMAAAgnRMAi/AAAMAAAAnRg");
	var mask_4_graphics_247 = new cjs.Graphics().p("AxfTxMAAAgnhMAi/AAAMAAAAnhg");
	var mask_4_graphics_248 = new cjs.Graphics().p("AxfT5MAAAgnxMAi/AAAMAAAAnxg");
	var mask_4_graphics_249 = new cjs.Graphics().p("AxfUBMAAAgoBMAi/AAAMAAAAoBg");
	var mask_4_graphics_250 = new cjs.Graphics().p("AxfUJMAAAgoRMAi/AAAMAAAAoRg");
	var mask_4_graphics_251 = new cjs.Graphics().p("AxfURMAAAgohMAi/AAAMAAAAohg");
	var mask_4_graphics_252 = new cjs.Graphics().p("AxfUZMAAAgoxMAi/AAAMAAAAoxg");
	var mask_4_graphics_253 = new cjs.Graphics().p("AxfUhMAAAgpBMAi/AAAMAAAApBg");
	var mask_4_graphics_254 = new cjs.Graphics().p("AxfUpMAAAgpRMAi/AAAMAAAApRg");
	var mask_4_graphics_255 = new cjs.Graphics().p("AxfUxMAAAgphMAi/AAAMAAAAphg");
	var mask_4_graphics_256 = new cjs.Graphics().p("AxfU5MAAAgpxMAi/AAAMAAAApxg");
	var mask_4_graphics_257 = new cjs.Graphics().p("AxfVBMAAAgqBMAi/AAAMAAAAqBg");
	var mask_4_graphics_258 = new cjs.Graphics().p("AxfVJMAAAgqRMAi/AAAMAAAAqRg");
	var mask_4_graphics_259 = new cjs.Graphics().p("AxfVRMAAAgqhMAi/AAAMAAAAqhg");
	var mask_4_graphics_260 = new cjs.Graphics().p("AxfVZMAAAgqxMAi/AAAMAAAAqxg");
	var mask_4_graphics_261 = new cjs.Graphics().p("AxfVhMAAAgrBMAi/AAAMAAAArBg");
	var mask_4_graphics_262 = new cjs.Graphics().p("AxfVpMAAAgrRMAi/AAAMAAAArRg");
	var mask_4_graphics_263 = new cjs.Graphics().p("AxfVxMAAAgrhMAi/AAAMAAAArhg");
	var mask_4_graphics_264 = new cjs.Graphics().p("AxfV5MAAAgrxMAi/AAAMAAAArxg");
	var mask_4_graphics_265 = new cjs.Graphics().p("AxfWBMAAAgsBMAi/AAAMAAAAsBg");
	var mask_4_graphics_266 = new cjs.Graphics().p("AxfWJMAAAgsRMAi/AAAMAAAAsRg");
	var mask_4_graphics_267 = new cjs.Graphics().p("AxfWRMAAAgshMAi/AAAMAAAAshg");
	var mask_4_graphics_268 = new cjs.Graphics().p("AxfWZMAAAgsxMAi/AAAMAAAAsxg");
	var mask_4_graphics_269 = new cjs.Graphics().p("AxfWhMAAAgtAMAi/AAAMAAAAtAg");
	var mask_4_graphics_270 = new cjs.Graphics().p("AxfWpMAAAgtQMAi/AAAMAAAAtQg");
	var mask_4_graphics_271 = new cjs.Graphics().p("AxfWwMAAAgtfMAi/AAAMAAAAtfg");
	var mask_4_graphics_272 = new cjs.Graphics().p("AxfW4MAAAgtvMAi/AAAMAAAAtvg");
	var mask_4_graphics_273 = new cjs.Graphics().p("AxfXcMAAAgu3MAi/AAAMAAAAu3g");
	var mask_4_graphics_274 = new cjs.Graphics().p("EgOrAjeMAAAgv9MAi/AAAMAAAAv9g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(129).to({graphics:mask_4_graphics_129,x:130,y:106}).wait(1).to({graphics:mask_4_graphics_130,x:148.1,y:180.3}).wait(1).to({graphics:mask_4_graphics_131,x:148.1,y:181.1}).wait(1).to({graphics:mask_4_graphics_132,x:148.1,y:181.9}).wait(1).to({graphics:mask_4_graphics_133,x:148.1,y:182.6}).wait(1).to({graphics:mask_4_graphics_134,x:148.1,y:183.4}).wait(1).to({graphics:mask_4_graphics_135,x:148.1,y:184.2}).wait(1).to({graphics:mask_4_graphics_136,x:148.1,y:185}).wait(1).to({graphics:mask_4_graphics_137,x:148.1,y:185.8}).wait(1).to({graphics:mask_4_graphics_138,x:148.1,y:186.6}).wait(1).to({graphics:mask_4_graphics_139,x:148.1,y:187.4}).wait(1).to({graphics:mask_4_graphics_140,x:148.1,y:188.2}).wait(1).to({graphics:mask_4_graphics_141,x:148.1,y:189}).wait(1).to({graphics:mask_4_graphics_142,x:148.1,y:189.8}).wait(1).to({graphics:mask_4_graphics_143,x:148.1,y:190.6}).wait(1).to({graphics:mask_4_graphics_144,x:148.1,y:191.4}).wait(1).to({graphics:mask_4_graphics_145,x:148.1,y:192.2}).wait(1).to({graphics:mask_4_graphics_146,x:148.1,y:193}).wait(1).to({graphics:mask_4_graphics_147,x:148.1,y:193.8}).wait(1).to({graphics:mask_4_graphics_148,x:148.1,y:194.6}).wait(1).to({graphics:mask_4_graphics_149,x:148.1,y:195.4}).wait(1).to({graphics:mask_4_graphics_150,x:148.1,y:196.2}).wait(1).to({graphics:mask_4_graphics_151,x:148.1,y:197}).wait(1).to({graphics:mask_4_graphics_152,x:148.1,y:197.8}).wait(1).to({graphics:mask_4_graphics_153,x:148.1,y:198.6}).wait(1).to({graphics:mask_4_graphics_154,x:148.1,y:199.4}).wait(1).to({graphics:mask_4_graphics_155,x:148.1,y:200.2}).wait(1).to({graphics:mask_4_graphics_156,x:148.1,y:201}).wait(1).to({graphics:mask_4_graphics_157,x:148.1,y:201.8}).wait(1).to({graphics:mask_4_graphics_158,x:148.1,y:202.6}).wait(1).to({graphics:mask_4_graphics_159,x:148.1,y:203.4}).wait(1).to({graphics:mask_4_graphics_160,x:148.1,y:204.2}).wait(1).to({graphics:mask_4_graphics_161,x:148.1,y:205}).wait(1).to({graphics:mask_4_graphics_162,x:148.1,y:205.8}).wait(1).to({graphics:mask_4_graphics_163,x:148.1,y:206.6}).wait(1).to({graphics:mask_4_graphics_164,x:148.1,y:207.4}).wait(1).to({graphics:mask_4_graphics_165,x:148.1,y:208.1}).wait(1).to({graphics:mask_4_graphics_166,x:148.1,y:208.9}).wait(1).to({graphics:mask_4_graphics_167,x:148.1,y:209.7}).wait(1).to({graphics:mask_4_graphics_168,x:148.1,y:210.5}).wait(1).to({graphics:mask_4_graphics_169,x:148.1,y:211.3}).wait(1).to({graphics:mask_4_graphics_170,x:148.1,y:212.1}).wait(1).to({graphics:mask_4_graphics_171,x:148.1,y:212.9}).wait(1).to({graphics:mask_4_graphics_172,x:148.1,y:213.7}).wait(1).to({graphics:mask_4_graphics_173,x:148.1,y:214.5}).wait(1).to({graphics:mask_4_graphics_174,x:148.1,y:215.3}).wait(1).to({graphics:mask_4_graphics_175,x:148.1,y:216.1}).wait(1).to({graphics:mask_4_graphics_176,x:148.1,y:216.9}).wait(1).to({graphics:mask_4_graphics_177,x:148.1,y:217.7}).wait(1).to({graphics:mask_4_graphics_178,x:148.1,y:218.5}).wait(1).to({graphics:mask_4_graphics_179,x:148.1,y:219.3}).wait(1).to({graphics:mask_4_graphics_180,x:148.1,y:220.1}).wait(1).to({graphics:mask_4_graphics_181,x:148.1,y:220.9}).wait(1).to({graphics:mask_4_graphics_182,x:148.1,y:221.7}).wait(1).to({graphics:mask_4_graphics_183,x:148.1,y:222.5}).wait(1).to({graphics:mask_4_graphics_184,x:148.1,y:223.3}).wait(1).to({graphics:mask_4_graphics_185,x:148.1,y:224.1}).wait(1).to({graphics:mask_4_graphics_186,x:148.1,y:224.9}).wait(1).to({graphics:mask_4_graphics_187,x:148.1,y:225.7}).wait(1).to({graphics:mask_4_graphics_188,x:148.1,y:226.5}).wait(1).to({graphics:mask_4_graphics_189,x:148.1,y:227.3}).wait(1).to({graphics:mask_4_graphics_190,x:148.1,y:228.1}).wait(1).to({graphics:mask_4_graphics_191,x:148.1,y:228.9}).wait(1).to({graphics:mask_4_graphics_192,x:148.1,y:229.7}).wait(1).to({graphics:mask_4_graphics_193,x:148.1,y:230.5}).wait(1).to({graphics:mask_4_graphics_194,x:148.1,y:231.3}).wait(1).to({graphics:mask_4_graphics_195,x:148.1,y:232.1}).wait(1).to({graphics:mask_4_graphics_196,x:148.1,y:232.9}).wait(1).to({graphics:mask_4_graphics_197,x:148.1,y:233.6}).wait(1).to({graphics:mask_4_graphics_198,x:148.1,y:234.4}).wait(1).to({graphics:mask_4_graphics_199,x:148.1,y:235.2}).wait(1).to({graphics:mask_4_graphics_200,x:148.1,y:236}).wait(1).to({graphics:mask_4_graphics_201,x:148.1,y:236.8}).wait(1).to({graphics:mask_4_graphics_202,x:148.1,y:237.6}).wait(1).to({graphics:mask_4_graphics_203,x:148.1,y:238.4}).wait(1).to({graphics:mask_4_graphics_204,x:148.1,y:239.2}).wait(1).to({graphics:mask_4_graphics_205,x:148.1,y:240}).wait(1).to({graphics:mask_4_graphics_206,x:148.1,y:240.8}).wait(1).to({graphics:mask_4_graphics_207,x:148.1,y:241.6}).wait(1).to({graphics:mask_4_graphics_208,x:148.1,y:242.4}).wait(1).to({graphics:mask_4_graphics_209,x:148.1,y:243.2}).wait(1).to({graphics:mask_4_graphics_210,x:148.1,y:244}).wait(1).to({graphics:mask_4_graphics_211,x:148.1,y:244.8}).wait(1).to({graphics:mask_4_graphics_212,x:148.1,y:245.6}).wait(1).to({graphics:mask_4_graphics_213,x:148.1,y:246.4}).wait(1).to({graphics:mask_4_graphics_214,x:148.1,y:247.2}).wait(1).to({graphics:mask_4_graphics_215,x:148.1,y:248}).wait(1).to({graphics:mask_4_graphics_216,x:148.1,y:248.8}).wait(1).to({graphics:mask_4_graphics_217,x:148.1,y:249.6}).wait(1).to({graphics:mask_4_graphics_218,x:148.1,y:250.4}).wait(1).to({graphics:mask_4_graphics_219,x:148.1,y:251.2}).wait(1).to({graphics:mask_4_graphics_220,x:148.1,y:252}).wait(1).to({graphics:mask_4_graphics_221,x:148.1,y:252.8}).wait(1).to({graphics:mask_4_graphics_222,x:148.1,y:253.6}).wait(1).to({graphics:mask_4_graphics_223,x:148.1,y:254.4}).wait(1).to({graphics:mask_4_graphics_224,x:148.1,y:255.2}).wait(1).to({graphics:mask_4_graphics_225,x:148.1,y:256}).wait(1).to({graphics:mask_4_graphics_226,x:148.1,y:256.8}).wait(1).to({graphics:mask_4_graphics_227,x:148.1,y:257.6}).wait(1).to({graphics:mask_4_graphics_228,x:148.1,y:258.4}).wait(1).to({graphics:mask_4_graphics_229,x:148.1,y:259.1}).wait(1).to({graphics:mask_4_graphics_230,x:148.1,y:259.9}).wait(1).to({graphics:mask_4_graphics_231,x:148.1,y:260.7}).wait(1).to({graphics:mask_4_graphics_232,x:148.1,y:261.5}).wait(1).to({graphics:mask_4_graphics_233,x:148.1,y:262.3}).wait(1).to({graphics:mask_4_graphics_234,x:148.1,y:263.1}).wait(1).to({graphics:mask_4_graphics_235,x:148.1,y:263.9}).wait(1).to({graphics:mask_4_graphics_236,x:148.1,y:264.7}).wait(1).to({graphics:mask_4_graphics_237,x:148.1,y:265.5}).wait(1).to({graphics:mask_4_graphics_238,x:148.1,y:266.3}).wait(1).to({graphics:mask_4_graphics_239,x:148.1,y:267.1}).wait(1).to({graphics:mask_4_graphics_240,x:148.1,y:267.9}).wait(1).to({graphics:mask_4_graphics_241,x:148.1,y:268.7}).wait(1).to({graphics:mask_4_graphics_242,x:148.1,y:269.5}).wait(1).to({graphics:mask_4_graphics_243,x:148.1,y:270.3}).wait(1).to({graphics:mask_4_graphics_244,x:148.1,y:271.1}).wait(1).to({graphics:mask_4_graphics_245,x:148.1,y:271.9}).wait(1).to({graphics:mask_4_graphics_246,x:148.1,y:272.7}).wait(1).to({graphics:mask_4_graphics_247,x:148.1,y:273.5}).wait(1).to({graphics:mask_4_graphics_248,x:148.1,y:274.3}).wait(1).to({graphics:mask_4_graphics_249,x:148.1,y:275.1}).wait(1).to({graphics:mask_4_graphics_250,x:148.1,y:275.9}).wait(1).to({graphics:mask_4_graphics_251,x:148.1,y:276.7}).wait(1).to({graphics:mask_4_graphics_252,x:148.1,y:277.5}).wait(1).to({graphics:mask_4_graphics_253,x:148.1,y:278.3}).wait(1).to({graphics:mask_4_graphics_254,x:148.1,y:279.1}).wait(1).to({graphics:mask_4_graphics_255,x:148.1,y:279.9}).wait(1).to({graphics:mask_4_graphics_256,x:148.1,y:280.7}).wait(1).to({graphics:mask_4_graphics_257,x:148.1,y:281.5}).wait(1).to({graphics:mask_4_graphics_258,x:148.1,y:282.3}).wait(1).to({graphics:mask_4_graphics_259,x:148.1,y:283.1}).wait(1).to({graphics:mask_4_graphics_260,x:148.1,y:283.8}).wait(1).to({graphics:mask_4_graphics_261,x:148.1,y:284.6}).wait(1).to({graphics:mask_4_graphics_262,x:148.1,y:285.4}).wait(1).to({graphics:mask_4_graphics_263,x:148.1,y:286.2}).wait(1).to({graphics:mask_4_graphics_264,x:148.1,y:287}).wait(1).to({graphics:mask_4_graphics_265,x:148.1,y:287.8}).wait(1).to({graphics:mask_4_graphics_266,x:148.1,y:288.6}).wait(1).to({graphics:mask_4_graphics_267,x:148.1,y:289.4}).wait(1).to({graphics:mask_4_graphics_268,x:148.1,y:290.2}).wait(1).to({graphics:mask_4_graphics_269,x:148.1,y:291}).wait(1).to({graphics:mask_4_graphics_270,x:148.1,y:291.8}).wait(1).to({graphics:mask_4_graphics_271,x:148.1,y:292.6}).wait(1).to({graphics:mask_4_graphics_272,x:148.1,y:293.4}).wait(1).to({graphics:mask_4_graphics_273,x:148.1,y:297}).wait(1).to({graphics:mask_4_graphics_274,x:130,y:227}).wait(336));

	// Layer 5
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(20,1,1).p("ApDaGQE8n6ELn/QELn/D6pOQD6pPkTmnQkUmotbG/");
	this.shape_7.setTransform(165,274);
	this.shape_7._off = true;

	var maskedShapeInstanceList = [this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(129).to({_off:false},0).wait(481));

	// Layer 1 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_9 = new cjs.Graphics().p("ADKefQsGgwoDpGQoDpGAxsGQAusHJGoDMAmzAr5QoUHXq2AAQhAAAhCgEg");
	var mask_5_graphics_10 = new cjs.Graphics().p("ACzecQsGg/n2pRQn3pQBAsFQA+sGJQn2MAl6AspQoOG/qdAAQhUAAhWgHg");
	var mask_5_graphics_11 = new cjs.Graphics().p("ACdeYQsFhOnrpbQnrpaBQsDQBOsFJanrMAlAAtaQoHGnqFAAQhnAAhqgLg");
	var mask_5_graphics_12 = new cjs.Graphics().p("ACGeUQsDhenepkQnfpkBfsCQBdsDJkneMAkGAuIQoAGQptAAQh7ABh+gQg");
	var mask_5_graphics_13 = new cjs.Graphics().p("ABwePQsBhunSptQnSpuBur/QBtsBJtnSMAjKAu2Qn3F6pYAAQiMAAiSgVg");
	var mask_5_graphics_14 = new cjs.Graphics().p("ABaeJQr+h9nGp3QnGp2B+r+QB8r+J3nGMAiNAvjQnvFkpBAAQifAAilgbg");
	var mask_5_graphics_15 = new cjs.Graphics().p("ABFeDQr8iNm5qAQm5p/CNr7QCMr8J/m5MAhQAwPQnlFOotAAQiwAAi4ghg");
	var mask_5_graphics_16 = new cjs.Graphics().p("AAwd7Qr5icmsqIQmsqJCcr3QCbr5KJmsMAgRAw5QncE6oYAAQjCAAjKgqg");
	var mask_5_graphics_17 = new cjs.Graphics().p("AAbdzQr2irmfqRQmfqRCsr0QCqr1KRmfMAfSAxhQnREmoEAAQjUAAjcgyg");
	var mask_5_graphics_18 = new cjs.Graphics().p("AAGdqQrxi6mSqZQmSqZC7rxQC5ryKZmRMAeSAyJQnHESnvAAQjmAAjug7g");
	var mask_5_graphics_19 = new cjs.Graphics().p("AgNdhQrvjKmEqhQmEqhDKrsQDIruKhmFMAdRAywQm7D/ndAAQj2AAj/hEg");
	var mask_5_graphics_20 = new cjs.Graphics().p("AggdXQrrjZl3qoQl2qpDZroQDXrqKpl3MAcPAzUQmwDunJAAQkIAAkPhPg");
	var mask_5_graphics_21 = new cjs.Graphics().p("Ag0dMQrmjolpqwQlpqwDorkQDmrlKxlpMAbNAz4QmkDcm3AAQkZAAkghag");
	var mask_5_graphics_22 = new cjs.Graphics().p("AhHdAQrhj2lbq3Qlbq3D3rfQD1rhK3lbMAaKA0aQmXDLmlAAQkqAAkwhmg");
	var mask_5_graphics_23 = new cjs.Graphics().p("AhZc0QrdkFlNq+QlNq+EGraQEErcK+lNMAZGA07QmKC7mTAAQk7AAk/hyg");
	var mask_5_graphics_24 = new cjs.Graphics().p("AhrcnQrXkUk/rEQk/rFEUrUQETrXLEk+MAYCA1aQl8CrmCAAQlMAAlOh/g");
	var mask_5_graphics_25 = new cjs.Graphics().p("Ah9cZQrRkikxrLQkxrKEjrPQEhrRLLkxMAW9A15QlvCclvAAQleAAldiNg");
	var mask_5_graphics_26 = new cjs.Graphics().p("AiPcLQrLkxkirQQkirRExrJQEvrLLRkiMAV3A2WQlgCOleAAQlvAAlsicg");
	var mask_5_graphics_27 = new cjs.Graphics().p("Aigb8QrFk/kTrWQkUrXFArCQE9rFLXkTMAUxA2xQlRCAlNAAQmBAAl6irg");
	var mask_5_graphics_28 = new cjs.Graphics().p("AiwbtQq/lOkFrbQkFrbFOq9QFMq+LckFMATqA3LQlCBzk8AAQmSAAmHi6g");
	var mask_5_graphics_29 = new cjs.Graphics().p("AjAbcQq4lbj2rhQj2rgFbq2QFaq3Lgj2MASkA3jQkyBnkrAAQmkAAmUjLg");
	var mask_5_graphics_30 = new cjs.Graphics().p("AjQbLQqxlpjnrmQjnrkFpqvQFoqwLljoMARcA37QkiBbkaAAQm2AAmhjcg");
	var mask_5_graphics_31 = new cjs.Graphics().p("Ajfa6Qqpl3jZrqQjYrqF3qnQF1qpLqjYMAQUA4QQkSBPkIAAQnJABmtjtg");
	var mask_5_graphics_32 = new cjs.Graphics().p("AjuaoQqimFjJruQjKruGFqgQGDqhLujJMAPMA4kQkBBFj3AAQncAAm5j+g");
	var mask_5_graphics_33 = new cjs.Graphics().p("Aj9aVQqZmSi6rzQi7rxGSqYQGRqZLxi6MAODA43QjvA7jmAAQnwAAnEkRg");
	var mask_5_graphics_34 = new cjs.Graphics().p("AkLaBQqRmfirr2Qirr1GfqQQGeqRL1irMAM6A5JQjeAyjVAAQoDAAnPklg");
	var mask_5_graphics_35 = new cjs.Graphics().p("AkYZtQqJmsicr5Qicr5GtqHQGrqJL4ibMALwA5YQjLAqjEAAQoXAAnZk5g");
	var mask_5_graphics_36 = new cjs.Graphics().p("AklZYQqAm5iNr8QiMr7G5p/QG4qAL7iMMAKnA5nQi5AiiyAAQosAAnjlOg");
	var mask_5_graphics_37 = new cjs.Graphics().p("AkxZDQp4nGh9r/Qh9r+HGp1QHFp3L+h9MAJcA50QimAbigAAQpBAAnsljg");
	var mask_5_graphics_38 = new cjs.Graphics().p("Ak9YtQpunShusCQhusAHTpsQHRpuMAhuMAISA6AQiTAViNAAQpYAAn0l5g");
	var mask_5_graphics_39 = new cjs.Graphics().p("AlJYXQpknfhfsEQhesCHfpjQHepkMCheMAHHA6JQh/APh7AAQpuAAn9mOg");
	var mask_5_graphics_40 = new cjs.Graphics().p("AlUX/QpanrhPsFQhPsEHrpZQHqpaMEhPMAF8A6RQhrALhoAAQqFAAoFmmg");
	var mask_5_graphics_41 = new cjs.Graphics().p("AleXoQpRn4g/sGQg/sFH3pQQH2pQMFg/MAExA6YQhWAHhVAAQqdAAoMm9g");
	var mask_5_graphics_42 = new cjs.Graphics().p("AloXPQpHoDgvsHQgwsHIDpFQICpGMGgwMADmA6eQhCAEhAAAQq3AAoSnWg");
	var mask_5_graphics_43 = new cjs.Graphics().p("AlxW2Qo8oOghsJQggsHIPo7QIMo7MIghMACbA6iQgsACgsAAQrRAAoYnvg");
	var mask_5_graphics_44 = new cjs.Graphics().p("Al6WdQoxoagRsJQgQsIIZowQIYoxMJgRMABPA6lIguAAQrrAAoeoIg");
	var mask_5_graphics_45 = new cjs.Graphics().p("AmCWCQonolgBsJQgBsIImolQIiomMJgBMAAFA6lIgDAAQsHAAojojg");
	var mask_5_graphics_46 = new cjs.Graphics().p("AmtVoQocowAPsJQAPsIIwoaQItobMJAPMgBHA6kQsIgPoZoug");
	var mask_5_graphics_47 = new cjs.Graphics().p("AnaVNQoQo7AfsIQAesHI6oPQI5oQMIAeMgCSA6jQsIgfoOo5g");
	var mask_5_graphics_48 = new cjs.Graphics().p("AoGUyQoEpFAusHQAusHJFoDQJCoFMIAuMgDdA6fQsHguoDpEg");
	var mask_5_graphics_49 = new cjs.Graphics().p("AoxUXQn5pPA+sGQA9sGJPn3QJNn5MHA9MgEoA6aQsGg+n3pOg");
	var mask_5_graphics_50 = new cjs.Graphics().p("ApcT8QnspZBMsFQBNsFJanrQJXntMFBNMgFzA6TQsFhNnrpYg");
	var mask_5_graphics_51 = new cjs.Graphics().p("AqGThQngpjBcsDQBdsDJjnfQJgnhMEBdMgG+A6KQsDhdnfphg");
	var mask_5_graphics_52 = new cjs.Graphics().p("AqvTGQnUptBrsBQBssBJtnTQJqnUMCBsMgIJA6BQsBhsnSprg");
	var mask_5_graphics_53 = new cjs.Graphics().p("ArYSqQnIp2B8r+QB7r/J2nGQJznIMAB7MgJUA52Qr+h7nGp1g");
	var mask_5_graphics_54 = new cjs.Graphics().p("AsASPQm7p/CLr8QCKr8J/m6QJ9m7L8CLMgKdA5pQr8iLm5p9g");
	var mask_5_graphics_55 = new cjs.Graphics().p("AsoRzQmuqICbr4QCar6KHmsQKGmuL5CaMgLnA5aQr5iamtqGg");
	var mask_5_graphics_56 = new cjs.Graphics().p("AtORYQmhqRCpr1QCqr2KQmgQKNmhL3CqMgMxA5LQr2iqmfqOg");
	var mask_5_graphics_57 = new cjs.Graphics().p("At0Q8QmUqZC5rxQC4rzKYmSQKWmULzC5MgN6A45Qryi4mSqXg");
	var mask_5_graphics_58 = new cjs.Graphics().p("AuaQgQmGqgDIruQDIrvKgmFQKemGLvDIMgPEA4nQrujImFqfg");
	var mask_5_graphics_59 = new cjs.Graphics().p("Au+QFQl5qoDXrqQDXrrKnl3QKml5LrDXMgQMA4TQrqjXl3qmg");
	var mask_5_graphics_60 = new cjs.Graphics().p("AviPpQlrqwDmrlQDlrmKwlpQKtlsLmDmMgRUA3+Qrljmlqqug");
	var mask_5_graphics_61 = new cjs.Graphics().p("AwFPNQldq2D1rhQD0rhK2lcQK1ldLhD0MgScA3nQrgj1lcq1g");
	var mask_5_graphics_62 = new cjs.Graphics().p("AwnOyQlPq+EDrbQEDrdK9lNQK8lPLcEDMgTjA3OQrbkDlOq8g");
	var mask_5_graphics_63 = new cjs.Graphics().p("AxJOWQlBrEESrWQESrXLEk/QLClCLXESMgUpA20QrXkRlArDg");
	var mask_5_graphics_64 = new cjs.Graphics().p("AxqN7QkyrLEgrQQEhrSLKkxQLIkzLREhMgVvA2ZQrRkhkyrIg");
	var mask_5_graphics_65 = new cjs.Graphics().p("AyKNfQkkrQEvrLQEvrLLQkjQLOklLMEvMgW1A19QrLkvkkrPg");
	var mask_5_graphics_66 = new cjs.Graphics().p("AypNEQkVrWE9rFQE9rFLWkUQLUkWLFE9MgX6A1eQrFk9kVrUg");
	var mask_5_graphics_67 = new cjs.Graphics().p("AzHMoQkHrbFMq+QFLq/LbkFQLZkIK/FMMgY+A0+Qq/lLkGrag");
	var mask_5_graphics_68 = new cjs.Graphics().p("AzkMNQj4rhFZq3QFZq4Lhj2QLej5K4FZMgaCA0eQq4lZj3rfg");
	var mask_5_graphics_69 = new cjs.Graphics().p("A0BLyQjprmFnqwQFnqxLljnQLkjqKxFnMgbFAz8Qqxlnjprkg");
	var mask_5_graphics_70 = new cjs.Graphics().p("A0dLXQjarpF1qqQF1qpLqjZQLojbKpF1MgcHAzYQqql1jarog");
	var mask_5_graphics_71 = new cjs.Graphics().p("A03K8QjMrtGDqiQGDqiLtjKQLsjMKiGCMgdJAy0QqimDjKrsg");
	var mask_5_graphics_72 = new cjs.Graphics().p("A1RKhQi8rxGQqaQGQqaLwi7QLxi9KaGQMgeKAyOQqamRi7rwg");
	var mask_5_graphics_73 = new cjs.Graphics().p("A1qKGQitr1GdqRQGeqSL0isQL0iuKSGeMgfKAxmQqSmeisr0g");
	var mask_5_graphics_74 = new cjs.Graphics().p("A2CJsQier4GqqKQGrqJL3idQL4ieKKGqMggKAw+QqJmridr3g");
	var mask_5_graphics_75 = new cjs.Graphics().p("A2aJSQiOr8G4qBQG3qAL7iNQL7iQKAG4MghIAwTQqAm3iPr6g");
	var mask_5_graphics_76 = new cjs.Graphics().p("A2wI3Qh/r+HFp4QHEp3L9h+QL+iAJ4HEMgiGAvoQp4nEh/r9g");
	var mask_5_graphics_77 = new cjs.Graphics().p("A3FIdQhwsAHRpvQHRpuMAhvQMAhwJvHRMgjDAu7QpvnQhvsAg");
	var mask_5_graphics_78 = new cjs.Graphics().p("A3ZIDQhgsCHdplQHdplMChfQMChhJlHdMgj+AuOQplndhgsCg");
	var mask_5_graphics_79 = new cjs.Graphics().p("A3sHqQhRsEHppcQHqpbMDhQQMEhRJcHpMgk6AtfQpbnphQsDg");
	var mask_5_graphics_80 = new cjs.Graphics().p("A3/HQQhBsFH2pSQH1pRMFhAQMGhCJRH1MglzAswQpSn2hBsFg");
	var mask_5_graphics_81 = new cjs.Graphics().p("A4QG3QgxsHIBpHQIBpHMGgxQMHgyJHIBMgmsAr+QpHoBgysGg");
	var mask_5_graphics_82 = new cjs.Graphics().p("A4gGeQgisHINo9QINo9MHghQMHgjI9INMgnkArMQo9oNgisHg");
	var mask_5_graphics_83 = new cjs.Graphics().p("A4vGGQgSsJIYoyQIYoyMHgRQMJgUIyIZMgocAqYQoyoYgSsHg");
	var mask_5_graphics_84 = new cjs.Graphics().p("A49FtQgDsIIkooQIjonMHgCQMJgDInIjMgpRApkQonokgDsHg");
	var mask_5_graphics_85 = new cjs.Graphics().p("A5KFVQANsIIuodQIvocMHAOQMIAMIcIuMgqGAovQocovANsHg");
	var mask_5_graphics_86 = new cjs.Graphics().p("A5WE9QAcsII6oRQI5oRMHAeQMIAbIRI5Mgq7An4QoQo5AcsHg");
	var mask_5_graphics_87 = new cjs.Graphics().p("A5hElQAssHJEoFQJEoGMGAuQMHArIFJDMgrsAnAQoGpEAssGg");
	var mask_5_graphics_88 = new cjs.Graphics().p("A5rEOQA8sGJOn6QJOn5MFA8QMGA7H6JOMgseAmHQn6pOA7sFg");
	var mask_5_graphics_89 = new cjs.Graphics().p("A5zD3QBLsFJYntQJYnuMEBMQMEBKHuJYMgtPAlOQntpYBLsEg");
	var mask_5_graphics_90 = new cjs.Graphics().p("A57DgQBbsDJinhQJhniMCBcQMEBZHhJiMgt+AkTQnhpiBasCg");
	var mask_5_graphics_91 = new cjs.Graphics().p("A6BDKQBqsBJrnVQJsnWL/BrQMCBqHVJrMgusAjXQnVprBqsAg");
	var mask_5_graphics_92 = new cjs.Graphics().p("A6HC0QB6r/J0nJQJ1nIL+B6QL/B5HIJ0MgvZAibQnIp0B5r+g");
	var mask_5_graphics_93 = new cjs.Graphics().p("A6LCeQCJr8J9m8QJ+m8L7CKQL9CIG8J9MgwFAheQm8p+CJr7g");
	var mask_5_graphics_94 = new cjs.Graphics().p("A6PCJQCZr6KGmvQKHmvL4CZQL5CYGvKGMgwvAgfQmvqGCYr4g");
	var mask_5_graphics_95 = new cjs.Graphics().p("A6RB0QCor2KPmiQKPmiL0CoQL3CmGiKPMgxYAfhQmiqPCnr1g");
	var mask_5_graphics_96 = new cjs.Graphics().p("A6SBfQC3rzKXmUQKXmVLxC4QLzC1GVKXMgyAAehQmVqXC3ryg");
	var mask_5_graphics_97 = new cjs.Graphics().p("A6TBLQDGrvKgmHQKfmILtDHQLvDFGIKfMgynAdgQmHqgDFrtg");
	var mask_5_graphics_98 = new cjs.Graphics().p("A6SA3QDVrrKnl6QKnl5LqDVQLrDUF5KnMgzMAceQl5qnDUrpg");
	var mask_5_graphics_99 = new cjs.Graphics().p("A6QAjQDkrmKulsQKvlsLlDlQLmDiFsKvMgzvAbcQlsquDjrmg");
	var mask_5_graphics_100 = new cjs.Graphics().p("A6NAQQDzrhK1lfQK2leLgD0QLiDxFeK2Mg0SAaZQleq1Dyrhg");
	var mask_5_graphics_101 = new cjs.Graphics().p("A6JgCQEBrdK9lQQK8lRLcEDQLcEAFRK9Mg00AZVQlQq8EBrbg");
	var mask_5_graphics_102 = new cjs.Graphics().p("A6EgUQEQrYLDlCQLClCLXERQLYEPFCLDMg1UAYRQlCrDEQrVg");
	var mask_5_graphics_103 = new cjs.Graphics().p("A5+gmQEerSLKk0QLIk0LSEgQLREdE0LKMg1yAXMQk0rJEfrQg");
	var mask_5_graphics_104 = new cjs.Graphics().p("A54g3QEurNLPklQLPkmLLEuQLMEsEmLQMg2QAWHQklrQEsrJg");
	var mask_5_graphics_105 = new cjs.Graphics().p("A5whIQE8rHLVkXQLVkXLFE9QLGE6EXLUMg2rAVCQkXrVE6rDg");
	var mask_5_graphics_106 = new cjs.Graphics().p("A5nhZQFKrALbkIQLakIK+FKQLAFIEILaMg3FAT8QkJrbFJq9g");
	var mask_5_graphics_107 = new cjs.Graphics().p("A5dhpQFYq5Lgj6QLfj5K4FYQK5FXD5LeMg3eAS1Qj6rgFXq2g");
	var mask_5_graphics_108 = new cjs.Graphics().p("A5Sh5QFmqyLljrQLkjqKwFmQKyFkDrLkMg32ARtQjrrkFlqwg");
	var mask_5_graphics_109 = new cjs.Graphics().p("A5GiIQF0qrLpjcQLpjbKpF0QKqFyDcLoMg4LAQlQjcrpFyqog");
	var mask_5_graphics_110 = new cjs.Graphics().p("A45iXQGCqjLtjNQLtjNKiGCQKiGADNLtMg4gAPcQjNrtGAqhg");
	var mask_5_graphics_111 = new cjs.Graphics().p("A4rilQGPqbLyi+QLwi+KaGPQKbGOC+LwMg40AOUQi9rxGNqZg");
	var mask_5_graphics_112 = new cjs.Graphics().p("A4cizQGdqTL1ivQL0iuKSGcQKSGbCvL0Mg5FANLQivr1GbqRg");
	var mask_5_graphics_113 = new cjs.Graphics().p("A4MjAQGqqLL4ifQL4igKJGqQKLGoCfL3Mg5VAMBQigr4GoqIg");
	var mask_5_graphics_114 = new cjs.Graphics().p("A37jNQG3qCL7iQQL7iQKAG2QKCG1CQL7Mg5kAK3QiQr7G1qAg");
	var mask_5_graphics_115 = new cjs.Graphics().p("A3pjZQHDp5L/iBQL9iBJ4HDQJ5HCCAL9Mg5xAJuQiAr/HBp2g");
	var mask_5_graphics_116 = new cjs.Graphics().p("A3WjlQHQpwMBhxQL/hyJvHQQJwHOBxMAMg59AIjQhxsBHOptg");
	var mask_5_graphics_117 = new cjs.Graphics().p("A3CjwQHcpnMDhiQMChiJlHdQJnHaBhMCMg6HAHYQhisCHbpkg");
	var mask_5_graphics_118 = new cjs.Graphics().p("A2tj7QHppdMEhSQMEhTJbHpQJdHnBSMDMg6PAGOQhTsFHnpag");
	var mask_5_graphics_119 = new cjs.Graphics().p("A2XkGQH1pTMGhCQMFhDJRH0QJTHyBDMGMg6XAFDQhDsGHzpRg");
	var mask_5_graphics_120 = new cjs.Graphics().p("A2AkPQIApJMIgzQMGg0JHIBQJJH9AzMIMg6dAD3QgzsHH/pGg");
	var mask_5_graphics_121 = new cjs.Graphics().p("A1okZQIMo+MIgkQMHgjI9IMQI+IJAkMIMg6hACsQgksIILo8g");
	var mask_5_graphics_122 = new cjs.Graphics().p("A1PkhQIXo0MJgUQMIgUIyIXQI0IVAUMJMg6kABhQgUsJIWoxg");
	var mask_5_graphics_123 = new cjs.Graphics().p("A01kqQIiopMJgEQMIgFIoIjQIoIgAFMJMg6lAAWQgEsJIhong");
	var mask_5_graphics_124 = new cjs.Graphics().p("A9SPYQALsJIsobQIuoeMIALQMJALIcIuQIeIrgLMJg");
	var mask_5_graphics_125 = new cjs.Graphics().p("A9SOgQAbsJI3oQQI4oSMIAaQMIAbIRI4QITI2gbMJg");
	var mask_5_graphics_126 = new cjs.Graphics().p("A9RNnQAqsIJCoEQJDoHMGAqQMIAqIGJDQIHJBgqMHg");
	var mask_5_graphics_127 = new cjs.Graphics().p("A9QMvQA6sHJMn5QJNn7MGA6QMHA6H5JNQH8JKg6MHg");
	var mask_5_graphics_128 = new cjs.Graphics().p("A9OL3QBJsFJWnuQJXnvMEBJQMGBKHuJXQHvJUhJMGg");
	var mask_5_graphics_129 = new cjs.Graphics().p("A9NK+QBZsDJgniQJhnjMDBZQMEBZHhJhQHkJehZMEg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_5_graphics_9,x:132.9,y:195.5}).wait(1).to({graphics:mask_5_graphics_10,x:131.5,y:195.5}).wait(1).to({graphics:mask_5_graphics_11,x:130,y:195.5}).wait(1).to({graphics:mask_5_graphics_12,x:128.6,y:195.5}).wait(1).to({graphics:mask_5_graphics_13,x:127,y:195.6}).wait(1).to({graphics:mask_5_graphics_14,x:125.5,y:195.6}).wait(1).to({graphics:mask_5_graphics_15,x:124,y:195.6}).wait(1).to({graphics:mask_5_graphics_16,x:122.4,y:195.7}).wait(1).to({graphics:mask_5_graphics_17,x:120.8,y:195.7}).wait(1).to({graphics:mask_5_graphics_18,x:119.2,y:195.7}).wait(1).to({graphics:mask_5_graphics_19,x:117.6,y:195.7}).wait(1).to({graphics:mask_5_graphics_20,x:115.9,y:195.8}).wait(1).to({graphics:mask_5_graphics_21,x:114.2,y:195.8}).wait(1).to({graphics:mask_5_graphics_22,x:112.6,y:195.8}).wait(1).to({graphics:mask_5_graphics_23,x:110.9,y:195.8}).wait(1).to({graphics:mask_5_graphics_24,x:109.2,y:195.8}).wait(1).to({graphics:mask_5_graphics_25,x:107.4,y:195.8}).wait(1).to({graphics:mask_5_graphics_26,x:105.7,y:195.9}).wait(1).to({graphics:mask_5_graphics_27,x:104,y:195.9}).wait(1).to({graphics:mask_5_graphics_28,x:102.2,y:195.9}).wait(1).to({graphics:mask_5_graphics_29,x:100.5,y:195.9}).wait(1).to({graphics:mask_5_graphics_30,x:98.7,y:195.9}).wait(1).to({graphics:mask_5_graphics_31,x:96.9,y:195.8}).wait(1).to({graphics:mask_5_graphics_32,x:95.1,y:195.8}).wait(1).to({graphics:mask_5_graphics_33,x:93.3,y:195.8}).wait(1).to({graphics:mask_5_graphics_34,x:91.5,y:195.8}).wait(1).to({graphics:mask_5_graphics_35,x:89.7,y:195.8}).wait(1).to({graphics:mask_5_graphics_36,x:87.9,y:195.8}).wait(1).to({graphics:mask_5_graphics_37,x:86,y:195.8}).wait(1).to({graphics:mask_5_graphics_38,x:84.2,y:195.8}).wait(1).to({graphics:mask_5_graphics_39,x:82.4,y:195.7}).wait(1).to({graphics:mask_5_graphics_40,x:80.5,y:195.7}).wait(1).to({graphics:mask_5_graphics_41,x:78.7,y:195.7}).wait(1).to({graphics:mask_5_graphics_42,x:76.8,y:195.7}).wait(1).to({graphics:mask_5_graphics_43,x:74.9,y:195.7}).wait(1).to({graphics:mask_5_graphics_44,x:73.1,y:195.7}).wait(1).to({graphics:mask_5_graphics_45,x:71.2,y:195.7}).wait(1).to({graphics:mask_5_graphics_46,x:72.9,y:195.7}).wait(1).to({graphics:mask_5_graphics_47,x:74.7,y:195.7}).wait(1).to({graphics:mask_5_graphics_48,x:76.6,y:195.6}).wait(1).to({graphics:mask_5_graphics_49,x:78.5,y:195.5}).wait(1).to({graphics:mask_5_graphics_50,x:80.3,y:195.3}).wait(1).to({graphics:mask_5_graphics_51,x:82.2,y:195.1}).wait(1).to({graphics:mask_5_graphics_52,x:84,y:194.9}).wait(1).to({graphics:mask_5_graphics_53,x:85.9,y:194.6}).wait(1).to({graphics:mask_5_graphics_54,x:87.7,y:194.3}).wait(1).to({graphics:mask_5_graphics_55,x:89.5,y:193.9}).wait(1).to({graphics:mask_5_graphics_56,x:91.3,y:193.6}).wait(1).to({graphics:mask_5_graphics_57,x:93.1,y:193.1}).wait(1).to({graphics:mask_5_graphics_58,x:94.9,y:192.7}).wait(1).to({graphics:mask_5_graphics_59,x:96.7,y:192.2}).wait(1).to({graphics:mask_5_graphics_60,x:98.5,y:191.7}).wait(1).to({graphics:mask_5_graphics_61,x:100.3,y:191.1}).wait(1).to({graphics:mask_5_graphics_62,x:102.1,y:190.5}).wait(1).to({graphics:mask_5_graphics_63,x:103.8,y:189.8}).wait(1).to({graphics:mask_5_graphics_64,x:105.6,y:189.2}).wait(1).to({graphics:mask_5_graphics_65,x:107.3,y:188.5}).wait(1).to({graphics:mask_5_graphics_66,x:109,y:187.7}).wait(1).to({graphics:mask_5_graphics_67,x:110.7,y:186.9}).wait(1).to({graphics:mask_5_graphics_68,x:112.4,y:186.1}).wait(1).to({graphics:mask_5_graphics_69,x:114.1,y:185.3}).wait(1).to({graphics:mask_5_graphics_70,x:115.8,y:184.4}).wait(1).to({graphics:mask_5_graphics_71,x:117.4,y:183.5}).wait(1).to({graphics:mask_5_graphics_72,x:119.1,y:182.6}).wait(1).to({graphics:mask_5_graphics_73,x:120.7,y:181.6}).wait(1).to({graphics:mask_5_graphics_74,x:122.3,y:180.6}).wait(1).to({graphics:mask_5_graphics_75,x:123.9,y:179.5}).wait(1).to({graphics:mask_5_graphics_76,x:125.4,y:178.4}).wait(1).to({graphics:mask_5_graphics_77,x:127,y:177.3}).wait(1).to({graphics:mask_5_graphics_78,x:128.5,y:176.2}).wait(1).to({graphics:mask_5_graphics_79,x:130,y:175}).wait(1).to({graphics:mask_5_graphics_80,x:131.4,y:173.9}).wait(1).to({graphics:mask_5_graphics_81,x:132.8,y:172.6}).wait(1).to({graphics:mask_5_graphics_82,x:134.2,y:171.4}).wait(1).to({graphics:mask_5_graphics_83,x:135.6,y:170.1}).wait(1).to({graphics:mask_5_graphics_84,x:137,y:168.8}).wait(1).to({graphics:mask_5_graphics_85,x:138.3,y:167.5}).wait(1).to({graphics:mask_5_graphics_86,x:139.5,y:166.1}).wait(1).to({graphics:mask_5_graphics_87,x:140.8,y:164.7}).wait(1).to({graphics:mask_5_graphics_88,x:142,y:163.3}).wait(1).to({graphics:mask_5_graphics_89,x:143.2,y:161.9}).wait(1).to({graphics:mask_5_graphics_90,x:144.3,y:160.4}).wait(1).to({graphics:mask_5_graphics_91,x:145.4,y:158.9}).wait(1).to({graphics:mask_5_graphics_92,x:146.5,y:157.4}).wait(1).to({graphics:mask_5_graphics_93,x:147.6,y:155.9}).wait(1).to({graphics:mask_5_graphics_94,x:148.6,y:154.3}).wait(1).to({graphics:mask_5_graphics_95,x:149.6,y:152.8}).wait(1).to({graphics:mask_5_graphics_96,x:150.6,y:151.2}).wait(1).to({graphics:mask_5_graphics_97,x:151.5,y:149.6}).wait(1).to({graphics:mask_5_graphics_98,x:152.4,y:147.9}).wait(1).to({graphics:mask_5_graphics_99,x:153.3,y:146.3}).wait(1).to({graphics:mask_5_graphics_100,x:154.1,y:144.6}).wait(1).to({graphics:mask_5_graphics_101,x:154.9,y:142.9}).wait(1).to({graphics:mask_5_graphics_102,x:155.7,y:141.2}).wait(1).to({graphics:mask_5_graphics_103,x:156.5,y:139.5}).wait(1).to({graphics:mask_5_graphics_104,x:157.2,y:137.8}).wait(1).to({graphics:mask_5_graphics_105,x:157.8,y:136}).wait(1).to({graphics:mask_5_graphics_106,x:158.5,y:134.3}).wait(1).to({graphics:mask_5_graphics_107,x:159.1,y:132.5}).wait(1).to({graphics:mask_5_graphics_108,x:159.7,y:130.7}).wait(1).to({graphics:mask_5_graphics_109,x:160.2,y:128.9}).wait(1).to({graphics:mask_5_graphics_110,x:160.8,y:127.1}).wait(1).to({graphics:mask_5_graphics_111,x:161.2,y:125.3}).wait(1).to({graphics:mask_5_graphics_112,x:161.7,y:123.5}).wait(1).to({graphics:mask_5_graphics_113,x:162.1,y:121.6}).wait(1).to({graphics:mask_5_graphics_114,x:162.5,y:119.8}).wait(1).to({graphics:mask_5_graphics_115,x:162.8,y:118}).wait(1).to({graphics:mask_5_graphics_116,x:163.1,y:116.1}).wait(1).to({graphics:mask_5_graphics_117,x:163.4,y:114.2}).wait(1).to({graphics:mask_5_graphics_118,x:163.6,y:112.4}).wait(1).to({graphics:mask_5_graphics_119,x:163.8,y:110.5}).wait(1).to({graphics:mask_5_graphics_120,x:163.9,y:108.6}).wait(1).to({graphics:mask_5_graphics_121,x:164,y:106.7}).wait(1).to({graphics:mask_5_graphics_122,x:164.1,y:104.9}).wait(1).to({graphics:mask_5_graphics_123,x:164.1,y:103}).wait(1).to({graphics:mask_5_graphics_124,x:164.1,y:103.8}).wait(1).to({graphics:mask_5_graphics_125,x:164.2,y:105.7}).wait(1).to({graphics:mask_5_graphics_126,x:164.2,y:107.5}).wait(1).to({graphics:mask_5_graphics_127,x:164.4,y:109.4}).wait(1).to({graphics:mask_5_graphics_128,x:164.5,y:111.3}).wait(1).to({graphics:mask_5_graphics_129,x:164.6,y:113.1}).wait(481));

	// Layer 2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(20,1,1).p("AH9JxQAGgOAGgOQD6pPkTmnQkUmotbG/");
	this.shape_8.setTransform(165,169.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(20,1,1).p("ApDaGQE8n6ELn/QELn/D6pOQD6pPkTmnQkUmotbG/");
	this.shape_9.setTransform(165,274);

	var maskedShapeInstanceList = [this.shape_8,this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8}]},9).to({state:[{t:this.shape_9}]},50).wait(551));

	// Letter
	this.instance_3 = new lib.x("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(275,275);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(610));

	// Background
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_10.setTransform(275,275,3.373,2.543);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_11.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).wait(610));

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