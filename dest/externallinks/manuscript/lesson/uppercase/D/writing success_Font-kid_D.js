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


(lib.based = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A0rddQhWgBhHgqQhKgqAAg7MAAAg1JQAAhPBWhJQBWhIBpAAILXAAQOWABJEHrQJfIIAANpQAANdpdILQpGH0uDAAgApO37IpdADMAACAvxIHnAFQBuAAA+gFQLjAAHcmjQHpmpAAqsQAArAnWmZQnKmSsBgRQgHgEgMAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155.4,-188.4,311,376.9);


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


(lib.ar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-68.7,-135.8,1,1,-90,0,0,0.4,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.5,scaleX:1,scaleY:1,rotation:-45.8,guide:{path:[-68.6,-135.7,-53.3,-136.1,-45.1,-135.4,-1.5,-131.6,31.4,-108.2]}},44).to({scaleX:1,scaleY:1,rotation:-0.5,guide:{path:[31.6,-108.2,36.8,-104.5,41.7,-100.3,77.2,-70.1,77.9,-14.1]}},40).to({scaleX:1,scaleY:1,rotation:28.1,guide:{path:[77.9,-14,77.9,-13,77.9,-11.9,77.9,23.4,64.3,52.4]}},25).to({regX:0.6,scaleX:1,scaleY:1,rotation:59.1,guide:{path:[64.3,52.5,55.8,70.6,42,86.3,30.3,99.6,16.9,108.6]}},30).to({scaleX:1,scaleY:1,rotation:74.7,guide:{path:[16.8,108.6,1,119.3,-17.1,123.7]}},15).to({regX:0.7,scaleX:1,scaleY:1,rotation:84,guide:{path:[-17.2,123.8,-27.8,126.4,-39.3,126.9]}},13).to({rotation:88,guide:{path:[-39.3,126.9,-41.9,127.1,-44.5,127.1,-46.9,127.1,-49.2,127]}},7).to({regX:0.8,regY:-17.3,scaleX:1,scaleY:1,rotation:89.7,guide:{path:[-49.3,126.9,-51.3,126.8,-53.2,126.7]}},5).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AvATfQoAqLBhs2QBhs3KKoAQKKoBM3BhMgHVA+DQs2hhoCqKg");
	var mask_graphics_1 = new cjs.Graphics().p("AvUTGQn1qTBvs0QBvs1KSn1QKTn3M1BvMgIZA97Qs0hvn2qTg");
	var mask_graphics_2 = new cjs.Graphics().p("AvoSuQnqqcB9syQB9szKanqQKcnrMyB9MgJbA9xQsyh9nrqbg");
	var mask_graphics_3 = new cjs.Graphics().p("Av8SVQneqkCKsvQCLsxKjnfQKjngMxCLMgKeA9mQswiLngqjg");
	var mask_graphics_4 = new cjs.Graphics().p("AwPR9QnTqsCYsuQCZsuKrnTQKrnUMuCYMgLgA9aQstiYnVqrg");
	var mask_graphics_5 = new cjs.Graphics().p("AwiRkQnHq0CmsqQCmssKznIQKznIMsCmMgMjA9NQsrimnJqzg");
	var mask_graphics_6 = new cjs.Graphics().p("Aw0RLQm8q7C0soQC0soK7m8QK6m9MpC0MgNlA8/Qsoi0m9q7g");
	var mask_graphics_7 = new cjs.Graphics().p("AxFQzQmwrDDBskQDCsmLCmwQLCmxMlDBMgOnA8wQskjBmxrCg");
	var mask_graphics_8 = new cjs.Graphics().p("AxXQaQmkrKDPshQDQsiLJmkQLJmlMiDPMgPoA8fQshjPmmrJg");
	var mask_graphics_9 = new cjs.Graphics().p("AxnQBQmYrRDcsdQDdseLQmZQLQmZMfDdMgQqA8OQsdjcmZrRg");
	var mask_graphics_10 = new cjs.Graphics().p("Ax4PpQmLrYDqsaQDqsaLXmMQLXmNMaDqMgRqA78QsajqmNrXg");
	var mask_graphics_11 = new cjs.Graphics().p("AyIPQQl/rfD4sVQD3sXLel/QLdmBMXD4MgSrA7oQsWj4mBrdg");
	var mask_graphics_12 = new cjs.Graphics().p("AyXO3QlzrlEFsRQEFsSLklzQLkl0MSEFMgTqA7TQsTkFl0rkg");
	var mask_graphics_13 = new cjs.Graphics().p("AymOeQlmrrESsMQESsOLqlnQLqlnMOESMgUqA69QsOkSlorqg");
	var mask_graphics_14 = new cjs.Graphics().p("Ay0OFQlarxEgsHQEfsJLwlaQLwlbMJEfMgVqA6nQsJkflbrxg");
	var mask_graphics_15 = new cjs.Graphics().p("AzCNtQlNr3EtsDQEssEL2lNQL2lOMEEsMgWqA6PQsEkslOr2g");
	var mask_graphics_16 = new cjs.Graphics().p("AzPNUQlAr8E5r+QE6r/L7lAQL7lBL/E5MgXoA52Qr/k6lBr7g");
	var mask_graphics_17 = new cjs.Graphics().p("AzfM7QkzsBFGr5QFGr5MBk0QMBk0L5FHMgYmA5bQr6lGk0sBg");
	var mask_graphics_18 = new cjs.Graphics().p("Az7MiQkmsGFTrzQFTr0MGkmQMGknLzFTMgZkA5AQr0lTknsGg");
	var mask_graphics_19 = new cjs.Graphics().p("A0WMKQkZsLFgruQFgruMKkZQMLkaLuFgMgaiA4kQrulgkasKg");
	var mask_graphics_20 = new cjs.Graphics().p("A0xLxQkLsPFsroQFtroMPkMQMPkMLoFsMgbfA4HQrnltkOsPg");
	var mask_graphics_21 = new cjs.Graphics().p("A1KLYQj/sTF5riQF5rhMTj/QMUj/LiF5MgcbA3oQril5j/sUg");
	var mask_graphics_22 = new cjs.Graphics().p("A1kLAQjxsYGGrbQGFrbMYjyQMYjxLbGFMgdXA3JQrbmFjzsYg");
	var mask_graphics_23 = new cjs.Graphics().p("A18KnQjksbGSrVQGRrUMcjkQMcjlLVGSMgeTA2pQrUmSjlscg");
	var mask_graphics_24 = new cjs.Graphics().p("A2UKPQjWsfGerOQGdrNMgjXQMgjXLNGeMgfNA2IQrOmejXsgg");
	var mask_graphics_25 = new cjs.Graphics().p("A2rJ3QjJsjGqrHQGqrGMijJQMkjKLGGqMggHA1mQrGmqjKsjg");
	var mask_graphics_26 = new cjs.Graphics().p("A3CJeQi7smG2q/QG2q/Mli7QMoi8K/G1MghBA1DQq/m2i9sng");
	var mask_graphics_27 = new cjs.Graphics().p("A3YJGQitspHCq3QHBq4MoiuQMriuK4HBMgh6A0fQq4nCivsqg");
	var mask_graphics_28 = new cjs.Graphics().p("A3tIuQifssHNqwQHNqwMrigQMuigKwHNMgizAz5QqwnNihstg");
	var mask_graphics_29 = new cjs.Graphics().p("A4BIWQiSsuHZqoQHZqoMtiTQMwiSKpHYMgjrAzTQqonYiTswg");
	var mask_graphics_30 = new cjs.Graphics().p("A4VH/QiEsxHkqgQHlqgMwiFQMyiFKgHlMgkhAyrQqgnkiGsxg");
	var mask_graphics_31 = new cjs.Graphics().p("A4oHnQh2szHwqYQHvqXMyh3QM1h3KYHvMglYAyEQqYnvh4s0g");
	var mask_graphics_32 = new cjs.Graphics().p("A46HQQhos1H6qQQH7qPM0hpQM3hpKPH7MgmOAxbQqPn7hqs1g");
	var mask_graphics_33 = new cjs.Graphics().p("A5LG4Qhbs2IGqHQIGqGM1hcQM4hbKHIGMgnDAwxQqHoFhbs4g");
	var mask_graphics_34 = new cjs.Graphics().p("A5cGhQhNs4IRp+QIQp9M3hNQM6hOJ+IRMgn3AwGQp+oQhOs5g");
	var mask_graphics_35 = new cjs.Graphics().p("A5sGKQg/s5Icp1QIbp0M4hAQM7g/J1IbMgorAvbQp1obhAs6g");
	var mask_graphics_36 = new cjs.Graphics().p("A57FzQgxs6ImprQImpsM5gxQM8gxJrIlMgpeAuvQpromgys7g");
	var mask_graphics_37 = new cjs.Graphics().p("A6KFdQgis7IwpiQIwpiM6gkQM8gjJjIwMgqQAuCQpioxgls7g");
	var mask_graphics_38 = new cjs.Graphics().p("A6XFGQgVs7I7pYQI6pZM6gVQM9gWJZI7MgrBAtTQpZo6gWs9g");
	var mask_graphics_39 = new cjs.Graphics().p("A6kEwQgHs7JFpPQJEpPM7gHQM9gIJPJFMgryAskQpPpEgIs9g");
	var mask_graphics_40 = new cjs.Graphics().p("A6wEbQAHs8JPpFQJOpFM7AHQM9AGJFJPMgsiAr0QpFpOAGs8g");
	var mask_graphics_41 = new cjs.Graphics().p("A67EFQAVs7JYo7QJYo7M7AVQM9AUI7JYMgtRArEQo7pYAUs8g");
	var mask_graphics_42 = new cjs.Graphics().p("A7FDwQAjs7JioxQJhoxM6AjQM9AjIwJhMgt/AqTQowpiAis7g");
	var mask_graphics_43 = new cjs.Graphics().p("A7PDaQAxs5JronQJromM6AwQM7AxInJrMgusAphQonprAws8g");
	var mask_graphics_44 = new cjs.Graphics().p("A7YDGQBAs5J0ocQJ0ocM4A/QM7A+IcJ0MgvZAouQobp0A9s6g");
	var mask_graphics_45 = new cjs.Graphics().p("A7gCxQBOs4J9oRQJ9oRM3BMQM6BNIRJ9MgwEAn6QoRp9BLs5g");
	var mask_graphics_46 = new cjs.Graphics().p("A7nCdQBbs3KHoGQKGoGM1BaQM5BbIGKGMgwvAnFQoGqGBZs3g");
	var mask_graphics_47 = new cjs.Graphics().p("A7tCJQBps1KPn7QKPn8M0BoQM2BpH8KPMgxZAmQQn8qOBos2g");
	var mask_graphics_48 = new cjs.Graphics().p("A7yB1QB2szKYnwQKXnwMyB2QM1B2HwKXMgyCAlbQnwqXB2s0g");
	var mask_graphics_49 = new cjs.Graphics().p("A73BhQCFsxKfnkQKgnlMwCEQMyCEHlKfMgyqAklQnkqgCDsyg");
	var mask_graphics_50 = new cjs.Graphics().p("A77BOQCSsvKonZQKonZMtCRQMxCSHZKoMgzRAjtQnZqoCRsvg");
	var mask_graphics_51 = new cjs.Graphics().p("A7+A7QCgssKwnOQKvnOMrCgQMuCfHOKwMgz3Ai1QnOqvCfstg");
	var mask_graphics_52 = new cjs.Graphics().p("A8BAoQCuspK4nCQK3nCMoCtQMrCtHCK3Mg0cAh9QnCq3Cssqg");
	var mask_graphics_53 = new cjs.Graphics().p("A8CAVQC8slK+m3QK/m2MlC6QMoC8G3K+Mg1BAhEQm2q+C6sog");
	var mask_graphics_54 = new cjs.Graphics().p("A8DADQDJsiLGmrQLHmqMiDIQMkDJGrLGMg1kAgKQmrrGDIskg");
	var mask_graphics_55 = new cjs.Graphics().p("A8DgOQDXsgLNmeQLNmfMfDWQMhDWGeLNMg2GAfRQmerNDVsgg");
	var mask_graphics_56 = new cjs.Graphics().p("A8CggQDkscLUmSQLUmSMbDjQMeDkGSLUMg2oAeVQmSrUDjscg");
	var mask_graphics_57 = new cjs.Graphics().p("A8AgxQDxsYLbmGQLbmGMXDwQMZDyGGLaMg3IAdbQmGrbDxsYg");
	var mask_graphics_58 = new cjs.Graphics().p("A7+hCQD/sULhl6QLil6MSD/QMVD+F6LhMg3nAcfQl6riD+sTg");
	var mask_graphics_59 = new cjs.Graphics().p("A77hTQENsQLnltQLnltMPELQMREMFtLoMg4GAbiQltroELsPg");
	var mask_graphics_60 = new cjs.Graphics().p("A73hkQEasLLtlgQLulhMJEZQMMEZFhLuMg4jAakQlgrtEYsLg");
	var mask_graphics_61 = new cjs.Graphics().p("A7yh0QEmsGL0lUQLylUMGEmQMHEmFUL0Mg4/AZnQlTrzElsGg");
	var mask_graphics_62 = new cjs.Graphics().p("A7tiEQE0sBL5lHQL4lHMBEzQMCEzFHL5Mg5aAYqQlHr5EysBg");
	var mask_graphics_63 = new cjs.Graphics().p("A7miUQFAr8L/k6QL9k6L8FAQL8FAE6L/Mg50AXrQk6r+FAr8g");
	var mask_graphics_64 = new cjs.Graphics().p("A7fijQFNr2MEktQMCktL2FMQL4FNEtMEMg6OAWsQktsDFNr2g");
	var mask_graphics_65 = new cjs.Graphics().p("A7YiyQFbrxMIkgQMIkgLwFaQLyFaEgMIMg6mAVuQkgsJFZrwg");
	var mask_graphics_66 = new cjs.Graphics().p("A7PjBQFnrrMNkSQMNkTLqFmQLrFmETMNMg68AUvQkTsOFmrqg");
	var mask_graphics_67 = new cjs.Graphics().p("A7GjPQF0rlMSkFQMRkGLkFzQLlFzEGMRMg7SATvQkGsSFyrkg");
	var mask_graphics_68 = new cjs.Graphics().p("A68jeQGAreMWj4QMWj4LdF/QLgF/D4MWMg7nASuQj4sWF+reg");
	var mask_graphics_69 = new cjs.Graphics().p("A6xjrQGMrYMbjrQMZjrLXGMQLZGMDrMZMg77ARuQjrsaGLrXg");
	var mask_graphics_70 = new cjs.Graphics().p("A6lj5QGYrQMejeQMejdLQGXQLSGYDdMeMg8NAQtQjdseGXrRg");
	var mask_graphics_71 = new cjs.Graphics().p("A6ZkGQGlrKMhjPQMhjQLKGjQLKGlDQMgMg8eAPsQjQshGjrKg");
	var mask_graphics_72 = new cjs.Graphics().p("A6MkTQGxrCMljCQMkjDLCGwQLEGwDCMkMg8vAOrQjCslGvrDg");
	var mask_graphics_73 = new cjs.Graphics().p("A5+kfQG9q7Moi1QMni1K7G8QK8G8C1MoMg8/ANoQi0soG7q7g");
	var mask_graphics_74 = new cjs.Graphics().p("A5vkrQHIq0MrinQMqinK0HIQK0HICnMqMg9MAMmQinsrHHqzg");
	var mask_graphics_75 = new cjs.Graphics().p("A5gk3QHUqrMuiaQMtiZKrHTQKtHTCZMtMg9ZALlQiasuHTqsg");
	var mask_graphics_76 = new cjs.Graphics().p("A5QlCQHfqkMxiLQMviMKkHeQKlHgCLMvMg9mAKiQiLsxHeqjg");
	var mask_graphics_77 = new cjs.Graphics().p("A4/lNQHrqcMyh9QMyh+KbHqQKdHqB+MyMg9xAJfQh+szHqqbg");
	var mask_graphics_78 = new cjs.Graphics().p("A4tlYQH1qTM1hwQM0hvKTH0QKUH2BwM0Mg96AIcQhws1H1qTg");
	var mask_graphics_79 = new cjs.Graphics().p("A4bliQIBqKM2hiQM2hiKKIAQKMIABiM2Mg+DAHZQhis2IAqLg");
	var mask_graphics_80 = new cjs.Graphics().p("A4IlsQIMqBM4hUQM3hUKBIKQKDIMBUM3Mg+KAGWQhUs4ILqCg");
	var mask_graphics_81 = new cjs.Graphics().p("A30l1QIWp5M6hGQM4hGJ5IWQJ6IWBGM4Mg+RAFTQhGs5IWp5g");
	var mask_graphics_82 = new cjs.Graphics().p("A3gl+QIipwM6g4QM5g4JwIgQJxIhA4M6Mg+WAEPQg4s6Igpwg");
	var mask_graphics_83 = new cjs.Graphics().p("A3KmHQIrpmM8gqQM6gqJmIqQJoIrAqM7Mg+aADMQgqs7Irpng");
	var mask_graphics_84 = new cjs.Graphics().p("A20mPQI2pdM7gcQM7gcJdI1QJeI1AcM8Mg+cACIQgcs8I1pdg");
	var mask_graphics_85 = new cjs.Graphics().p("A2emWQJBpUM8gOQM7gOJTI/QJUI/APM8Mg+eABFQgPs8I/pTg");
	var mask_graphics_86 = new cjs.Graphics().p("A2GmeQJKpJM8AAQM8AAJJJJQJLJJAAM8Mg+fAABQAAs8JJpKg");
	var mask_graphics_87 = new cjs.Graphics().p("A/PO2QAOs8JTpAQJUo/M7AOQM8AOJAJSQJAJTgOM9g");
	var mask_graphics_88 = new cjs.Graphics().p("A/OOEQAbs8Jdo2QJdo1M7AcQM8AcI1JcQI3JdgcM7g");
	var mask_graphics_89 = new cjs.Graphics().p("A/ONRQAqs7JmorQJnorM6ApQM7AqIrJmQItJmgqM7g");
	var mask_graphics_90 = new cjs.Graphics().p("A/NMfQA4s6JvohQJwohM6A4QM6A3IhJwQIhJvg3M6g");
	var mask_graphics_91 = new cjs.Graphics().p("A/MLsQBGs4J4oXQJ6oWM4BGQM5BFIWJ5QIXJ4hFM5g");
	var mask_graphics_92 = new cjs.Graphics().p("A/KK6QBTs3KCoMQKCoMM3BUQM4BUILKBQIMKBhTM4g");
	var mask_graphics_93 = new cjs.Graphics().p("A/JKIQBis2KKoBQKLoAM2BhQM2BiIAKKQICKKhiM2g");
	var mask_graphics_94 = new cjs.Graphics().p("A/HJWQBws0KSn2QKUn1M0BvQM0BvH2KTQH2KThvM0g");
	var mask_graphics_95 = new cjs.Graphics().p("A/FIkQB+syKbnrQKcnqMyB9QMyB9HqKbQHrKch9Myg");
	var mask_graphics_96 = new cjs.Graphics().p("A/CHyQCLswKjnfQKknfMwCLQMxCLHeKjQHgKkiLMwg");
	var mask_graphics_97 = new cjs.Graphics().p("A+/HAQCYstKsnUQKsnTMtCZQMuCYHTKsQHVKriZMug");
	var mask_graphics_98 = new cjs.Graphics().p("A+8GPQCmsrKznIQK0nIMrCnQMrCmHIKzQHIKzimMsg");
	var mask_graphics_99 = new cjs.Graphics().p("A+5FdQC0snK7m9QK8m8MnC1QMpC0G7K6QG9K7i0Mpg");
	var mask_graphics_100 = new cjs.Graphics().p("A+1EsQDCskLCmxQLDmwMkDCQMlDCGwLCQGxLCjCMlg");
	var mask_graphics_101 = new cjs.Graphics().p("A+xD7QDPshLJmlQLLmkMhDQQMhDPGkLJQGlLKjPMig");
	var mask_graphics_102 = new cjs.Graphics().p("A+tDKQDdsdLQmZQLRmXMeDcQMeDdGYLQQGZLRjdMeg");
	var mask_graphics_103 = new cjs.Graphics().p("A+pCaQDrsaLXmMQLYmMMZDrQMbDqGLLXQGNLXjqMbg");
	var mask_graphics_104 = new cjs.Graphics().p("A+kBpQD4sVLemAQLel/MWD3QMWD4F/LeQGALej3MWg");
	var mask_graphics_105 = new cjs.Graphics().p("A+fA5QEFsRLll0QLklyMREFQMTEFFyLkQF0LkkFMSg");
	var mask_graphics_106 = new cjs.Graphics().p("A+ZAKQESsNLqlnQLrlmMNESQMNESFnLqQFnLrkSMNg");
	var mask_graphics_107 = new cjs.Graphics().p("A+UglQEgsJLwlbQLxlZMIEfQMJEgFZLwQFbLwkgMJg");
	var mask_graphics_108 = new cjs.Graphics().p("A+OhUQEtsEL2lOQL3lNMCEtQMEEsFNL2QFOL2ktMEg");
	var mask_graphics_109 = new cjs.Graphics().p("A+IiDQE6r/L8lBQL8lAL+E6QL+E5FAL7QFBL8k5L/g");
	var mask_graphics_110 = new cjs.Graphics().p("A+BiyQFGr5MBk1QMCkyL4FGQL5FHE0MAQEzMBlGL5g");
	var mask_graphics_111 = new cjs.Graphics().p("A96jhQFTrzMGknQMHkmLyFTQL0FTEmMGQEnMGlTL0g");
	var mask_graphics_112 = new cjs.Graphics().p("A9zkPQFgrtMLkbQMKkYLuFgQLuFgEZMKQEZMLlfLug");
	var mask_graphics_113 = new cjs.Graphics().p("A9sk8QFtroMQkNQMPkLLnFsQLoFtEMMPQEMMPlsLog");
	var mask_graphics_114 = new cjs.Graphics().p("A9klqQF5rhMUkAQMUj+LhF5QLhF5D/MUQD/MUl5Lhg");
	var mask_graphics_115 = new cjs.Graphics().p("A9cmXQGFrbMZjyQMXjxLbGGQLbGFDyMYQDxMYmFLbg");
	var mask_graphics_116 = new cjs.Graphics().p("A9UnEQGSrUMcjlQMcjjLUGSQLUGSDkMbQDkMcmRLVg");
	var mask_graphics_117 = new cjs.Graphics().p("A9LnwQGerNMgjYQMfjVLNGeQLOGeDWMfQDXMgmeLNg");
	var mask_graphics_118 = new cjs.Graphics().p("A9DocQGqrGMkjKQMjjILGGqQLGGqDJMiQDJMkmqLHg");
	var mask_graphics_119 = new cjs.Graphics().p("A86pHQG2q/Mni8QMmi7K/G2QK/G2C7MlQC8Mom2K/g");
	var mask_graphics_120 = new cjs.Graphics().p("A8wpyQHBq3MqivQMpitK4HCQK3HCCuMoQCuMrnCK3g");
	var mask_graphics_121 = new cjs.Graphics().p("A8nqcQHOqwMsihQMsifKwHNQKwHOCgMrQCgMtnOKwg");
	var mask_graphics_122 = new cjs.Graphics().p("A8drHQHZqnMviTQMviSKoHZQKnHZCTMuQCSMwnZKog");
	var mask_graphics_123 = new cjs.Graphics().p("A8TrwQHkqgMyiFQMxiEKgHlQKfHkCFMwQCEMznkKfg");
	var mask_graphics_124 = new cjs.Graphics().p("A8JsZQHwqYMzh3QMzh2KYHwQKYHvB2MzQB3M0nwKYg");
	var mask_graphics_125 = new cjs.Graphics().p("A7/tCQH7qPM2hpQM1hoKPH7QKPH6BpM0QBpM3n7KPg");
	var mask_graphics_126 = new cjs.Graphics().p("A70tqQIGqGM3hcQM3haKGIGQKHIGBaM2QBbM4oFKGg");
	var mask_graphics_127 = new cjs.Graphics().p("A7puRQIRp+M4hNQM4hNJ+IRQJ9IRBNM3QBNM5oQJ+g");
	var mask_graphics_128 = new cjs.Graphics().p("A7eu4QIbp1M6g/QM5g/J1IcQJ0IbA/M4QBAM7ocJ1g");
	var mask_graphics_129 = new cjs.Graphics().p("A7TveQImpsM7gxQM6gxJrImQJsImAxM5QAxM8omJrg");
	var mask_graphics_130 = new cjs.Graphics().p("A7HwEQIwpiM8gkQM6giJiIwQJiIwAjM6QAjM9owJig");
	var mask_graphics_131 = new cjs.Graphics().p("A68wpQI7pZM8gVQM7gVJZI7QJYI6AVM7QAVM9o6JYg");
	var mask_graphics_132 = new cjs.Graphics().p("A6wxOQJFpOM8gIQM7gGJPJEQJPJFAHM6QAHM+pFJOg");
	var mask_graphics_133 = new cjs.Graphics().p("A6kxxQJOpFM9AGQM7AIJFJOQJFJPgHM6QgHM9pOJFg");
	var mask_graphics_134 = new cjs.Graphics().p("A6YyVQJYo6M8AUQM8AVI6JZQI7JYgVM6QgVM9pYI7g");
	var mask_graphics_135 = new cjs.Graphics().p("A6My3QJioxM8AiQM6AkIxJiQIxJigjM6QgjM8piIxg");
	var mask_graphics_136 = new cjs.Graphics().p("A5/zZQJromM7AwQM6AxImJsQImJrgxM5QgxM8prImg");
	var mask_graphics_137 = new cjs.Graphics().p("A5zz6QJ1ocM6A+QM5BAIbJ0QIcJ1g/M4Qg/M7p0Ibg");
	var mask_graphics_138 = new cjs.Graphics().p("A5m0bQJ9oRM5BMQM4BOIRJ9QIRJ+hNM3QhNM5p9IRg");
	var mask_graphics_139 = new cjs.Graphics().p("A5Z07QKGoGM4BaQM2BcIGKGQIGKGhaM2QhbM4qGIGg");
	var mask_graphics_140 = new cjs.Graphics().p("A5M1aQKPn7M2BoQM0BpH8KPQH7KPhpM0QhoM3qPH7g");
	var mask_graphics_141 = new cjs.Graphics().p("A4/14QKYnwM0B1QMyB4HwKXQHwKXh2MzQh3M0qXHwg");
	var mask_graphics_142 = new cjs.Graphics().p("A4x2WQKfnlMyCEQMxCFHlKfQHkKgiEMwQiEMzqgHkg");
	var mask_graphics_143 = new cjs.Graphics().p("A4k2zQKonZMwCRQMuCTHZKnQHZKoiSMuQiSMwqoHZg");
	var mask_graphics_144 = new cjs.Graphics().p("A4W3QQKwnNMtCfQMrCgHOKwQHOKwigMrQigMtqwHOg");
	var mask_graphics_145 = new cjs.Graphics().p("A4I3rQK3nCMqCsQMpCvHCK3QHCK3itMpQiuMqq3HDg");
	var mask_graphics_146 = new cjs.Graphics().p("A364GQK/m3MnC7QMmC8G2K/QG2K/i7MlQi7Moq/G2g");
	var mask_graphics_147 = new cjs.Graphics().p("A3s4hQLGmqMkDIQMjDKGqLGQGqLGjIMiQjJMkrGGrg");
	var mask_graphics_148 = new cjs.Graphics().p("A3d46QLNmeMfDVQMgDXGeLOQGfLNjWMeQjXMhrNGeg");
	var mask_graphics_149 = new cjs.Graphics().p("A3P5TQLUmSMcDjQMcDlGSLUQGSLUjjMbQjkMdrVGSg");
	var mask_graphics_150 = new cjs.Graphics().p("A3A5rQLbmGMXDxQMZDyGFLaQGGLbjxMXQjxMZrbGGg");
	var mask_graphics_151 = new cjs.Graphics().p("A2x6CQLhl6MUD+QMUD/F5LiQF5Lhj+MTQj/MVrhF5g");
	var mask_graphics_152 = new cjs.Graphics().p("A2i6ZQLnltMPELQMQENFtLnQFtLokMMOQkMMRroFtg");
	var mask_graphics_153 = new cjs.Graphics().p("A2T6vQLtlgMLEYQMLEaFgLuQFgLtkYMKQkaMMrtFgg");
	var mask_graphics_154 = new cjs.Graphics().p("A2E7EQL0lUMFEmQMGEnFULzQFTLzklMGQknMHrzFTg");
	var mask_graphics_155 = new cjs.Graphics().p("A107YQL5lHMAEyQMBE0FHL5QFHL5kzMAQk0MCr5FHg");
	var mask_graphics_156 = new cjs.Graphics().p("A1l7sQL/k6L7FAQL8FBE6L+QE5L+lAL7QlAL9r/E6g");
	var mask_graphics_157 = new cjs.Graphics().p("A1V7/QMEktL1FNQL3FNEsMEQEtMDlNL2QlNL3sEEtg");
	var mask_graphics_158 = new cjs.Graphics().p("A1F8RQMIkgLwFaQLxFaEgMJQEfMHlZLxQlaLxsJEgg");
	var mask_graphics_159 = new cjs.Graphics().p("A018iQMNkTLqFmQLrFnESMOQETMMlmLqQlnLssNESg");
	var mask_graphics_160 = new cjs.Graphics().p("A0l8zQMSkFLkFyQLkF0EFMSQEGMRlzLkQlzLlsREGg");
	var mask_graphics_161 = new cjs.Graphics().p("A0V9CQMWj4LeF+QLeGBD4MWQD4MVl/LeQmALfsWD4g");
	var mask_graphics_162 = new cjs.Graphics().p("A0F9RQMajrLYGLQLXGNDrMaQDqMamLLXQmNLYsZDrg");
	var mask_graphics_163 = new cjs.Graphics().p("Az19fQMfjdLQGXQLRGZDdMeQDdMdmYLQQmYLSseDdg");
	var mask_graphics_164 = new cjs.Graphics().p("Azk9tQMijPLJGjQLKGlDPMiQDQMhmkLJQmkLLshDPg");
	var mask_graphics_165 = new cjs.Graphics().p("AzT95QMljCLCGvQLCGxDCMmQDCMkmvLCQmxLDskDCg");
	var mask_graphics_166 = new cjs.Graphics().p("AzD+FQMpi0K6G7QK7G9C1MoQC0Mom8K6Qm8K8snC1g");
	var mask_graphics_167 = new cjs.Graphics().p("Ayy+QQMrimKzHHQK0HICmMsQCnMqnHKzQnJK0sqCng");
	var mask_graphics_168 = new cjs.Graphics().p("Ayh+aQMuiZKrHTQKsHUCZMuQCZMtnTKsQnUKsstCZg");
	var mask_graphics_169 = new cjs.Graphics().p("AyQ+jQMwiLKjHeQKkHgCLMwQCLMwneKjQngKlsvCLg");
	var mask_graphics_170 = new cjs.Graphics().p("AyA+rQMzh9KbHpQKcHrB9MzQB9MynpKbQnrKcsyB+g");
	var mask_graphics_171 = new cjs.Graphics().p("Axv+yQM1hwKTH1QKTH2BvM1QBwMzn1KTQn2KUs0Bwg");
	var mask_graphics_172 = new cjs.Graphics().p("Axe+5QM3hiKKIAQKKIBBiM3QBiM1oAKLQoBKLs2Big");
	var mask_graphics_173 = new cjs.Graphics().p("AxN+/QM4hUKCILQKBIMBUM4QBUM3oLKCQoMKDs3BTg");
	var mask_graphics_174 = new cjs.Graphics().p("Aw8/EQM6hGJ4IWQJ5IXBGM5QBGM5oWJ4QoXJ6s4BGg");
	var mask_graphics_175 = new cjs.Graphics().p("Awr/IQM7g4JvIhQJwIhA4M7QA3M5ogJvQohJxs6A4g");
	var mask_graphics_176 = new cjs.Graphics().p("Awa/LQM7gqJnIrQJmIsAqM7QAqM6orJnQorJns7Aqg");
	var mask_graphics_177 = new cjs.Graphics().p("AwJ/NQM8gcJdI1QJcI2AcM8QAcM7o1JdQo1Jds8Acg");
	var mask_graphics_178 = new cjs.Graphics().p("Av4/OQM8gOJTI/QJUJAAOM8QANM8o/JTQo/JUs8AOg");
	var mask_graphics_179 = new cjs.Graphics().p("Avn/PQM8AAJKJJQJJJLAAM7QAAM8pJJKQpKJKs8AAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-139.1,y:4}).wait(1).to({graphics:mask_graphics_1,x:-139.1,y:3.7}).wait(1).to({graphics:mask_graphics_2,x:-139.2,y:3.5}).wait(1).to({graphics:mask_graphics_3,x:-139.2,y:3.2}).wait(1).to({graphics:mask_graphics_4,x:-139.2,y:2.9}).wait(1).to({graphics:mask_graphics_5,x:-139.2,y:2.5}).wait(1).to({graphics:mask_graphics_6,x:-139.3,y:2.2}).wait(1).to({graphics:mask_graphics_7,x:-139.3,y:1.8}).wait(1).to({graphics:mask_graphics_8,x:-139.3,y:1.3}).wait(1).to({graphics:mask_graphics_9,x:-139.3,y:0.9}).wait(1).to({graphics:mask_graphics_10,x:-139.3,y:0.4}).wait(1).to({graphics:mask_graphics_11,x:-139.3,y:-0.1}).wait(1).to({graphics:mask_graphics_12,x:-139.4,y:-0.6}).wait(1).to({graphics:mask_graphics_13,x:-139.4,y:-1.2}).wait(1).to({graphics:mask_graphics_14,x:-139.4,y:-1.7}).wait(1).to({graphics:mask_graphics_15,x:-139.4,y:-2.3}).wait(1).to({graphics:mask_graphics_16,x:-139.4,y:-3}).wait(1).to({graphics:mask_graphics_17,x:-139.1,y:-3.6}).wait(1).to({graphics:mask_graphics_18,x:-137.5,y:-4.3}).wait(1).to({graphics:mask_graphics_19,x:-136,y:-5}).wait(1).to({graphics:mask_graphics_20,x:-134.5,y:-5.7}).wait(1).to({graphics:mask_graphics_21,x:-132.9,y:-6.5}).wait(1).to({graphics:mask_graphics_22,x:-131.4,y:-7.2}).wait(1).to({graphics:mask_graphics_23,x:-129.9,y:-8}).wait(1).to({graphics:mask_graphics_24,x:-128.5,y:-8.8}).wait(1).to({graphics:mask_graphics_25,x:-127,y:-9.7}).wait(1).to({graphics:mask_graphics_26,x:-125.5,y:-10.5}).wait(1).to({graphics:mask_graphics_27,x:-124.1,y:-11.4}).wait(1).to({graphics:mask_graphics_28,x:-122.7,y:-12.3}).wait(1).to({graphics:mask_graphics_29,x:-121.3,y:-13.2}).wait(1).to({graphics:mask_graphics_30,x:-119.9,y:-14.2}).wait(1).to({graphics:mask_graphics_31,x:-118.5,y:-15.2}).wait(1).to({graphics:mask_graphics_32,x:-117.1,y:-16.2}).wait(1).to({graphics:mask_graphics_33,x:-115.8,y:-17.2}).wait(1).to({graphics:mask_graphics_34,x:-114.5,y:-18.3}).wait(1).to({graphics:mask_graphics_35,x:-113.2,y:-19.3}).wait(1).to({graphics:mask_graphics_36,x:-111.9,y:-20.4}).wait(1).to({graphics:mask_graphics_37,x:-110.6,y:-21.5}).wait(1).to({graphics:mask_graphics_38,x:-109.4,y:-22.7}).wait(1).to({graphics:mask_graphics_39,x:-108.2,y:-23.9}).wait(1).to({graphics:mask_graphics_40,x:-107,y:-25}).wait(1).to({graphics:mask_graphics_41,x:-105.8,y:-26.3}).wait(1).to({graphics:mask_graphics_42,x:-104.6,y:-27.5}).wait(1).to({graphics:mask_graphics_43,x:-103.5,y:-28.8}).wait(1).to({graphics:mask_graphics_44,x:-102.4,y:-30.1}).wait(1).to({graphics:mask_graphics_45,x:-101.4,y:-31.4}).wait(1).to({graphics:mask_graphics_46,x:-100.3,y:-32.7}).wait(1).to({graphics:mask_graphics_47,x:-99.3,y:-34}).wait(1).to({graphics:mask_graphics_48,x:-98.3,y:-35.4}).wait(1).to({graphics:mask_graphics_49,x:-97.3,y:-36.8}).wait(1).to({graphics:mask_graphics_50,x:-96.4,y:-38.2}).wait(1).to({graphics:mask_graphics_51,x:-95.4,y:-39.6}).wait(1).to({graphics:mask_graphics_52,x:-94.5,y:-41}).wait(1).to({graphics:mask_graphics_53,x:-93.6,y:-42.5}).wait(1).to({graphics:mask_graphics_54,x:-92.8,y:-43.9}).wait(1).to({graphics:mask_graphics_55,x:-91.9,y:-45.4}).wait(1).to({graphics:mask_graphics_56,x:-91.1,y:-46.9}).wait(1).to({graphics:mask_graphics_57,x:-90.3,y:-48.4}).wait(1).to({graphics:mask_graphics_58,x:-89.6,y:-49.9}).wait(1).to({graphics:mask_graphics_59,x:-88.8,y:-51.4}).wait(1).to({graphics:mask_graphics_60,x:-88.1,y:-52.9}).wait(1).to({graphics:mask_graphics_61,x:-87.4,y:-54.5}).wait(1).to({graphics:mask_graphics_62,x:-86.7,y:-56}).wait(1).to({graphics:mask_graphics_63,x:-86.1,y:-57.6}).wait(1).to({graphics:mask_graphics_64,x:-85.4,y:-59.2}).wait(1).to({graphics:mask_graphics_65,x:-84.8,y:-60.7}).wait(1).to({graphics:mask_graphics_66,x:-84.3,y:-62.3}).wait(1).to({graphics:mask_graphics_67,x:-83.7,y:-63.9}).wait(1).to({graphics:mask_graphics_68,x:-83.2,y:-65.5}).wait(1).to({graphics:mask_graphics_69,x:-82.7,y:-67.1}).wait(1).to({graphics:mask_graphics_70,x:-82.2,y:-68.7}).wait(1).to({graphics:mask_graphics_71,x:-81.7,y:-70.3}).wait(1).to({graphics:mask_graphics_72,x:-81.3,y:-72}).wait(1).to({graphics:mask_graphics_73,x:-80.9,y:-73.6}).wait(1).to({graphics:mask_graphics_74,x:-80.5,y:-75.2}).wait(1).to({graphics:mask_graphics_75,x:-80.2,y:-76.9}).wait(1).to({graphics:mask_graphics_76,x:-79.9,y:-78.5}).wait(1).to({graphics:mask_graphics_77,x:-79.6,y:-80.1}).wait(1).to({graphics:mask_graphics_78,x:-79.3,y:-81.8}).wait(1).to({graphics:mask_graphics_79,x:-79.1,y:-83.5}).wait(1).to({graphics:mask_graphics_80,x:-78.9,y:-85.1}).wait(1).to({graphics:mask_graphics_81,x:-78.7,y:-86.8}).wait(1).to({graphics:mask_graphics_82,x:-78.6,y:-88.4}).wait(1).to({graphics:mask_graphics_83,x:-78.5,y:-90.1}).wait(1).to({graphics:mask_graphics_84,x:-78.4,y:-91.8}).wait(1).to({graphics:mask_graphics_85,x:-78.4,y:-93.5}).wait(1).to({graphics:mask_graphics_86,x:-78.3,y:-95.2}).wait(1).to({graphics:mask_graphics_87,x:-78.3,y:-93.6}).wait(1).to({graphics:mask_graphics_88,x:-78.3,y:-91.9}).wait(1).to({graphics:mask_graphics_89,x:-78.2,y:-90.2}).wait(1).to({graphics:mask_graphics_90,x:-78.1,y:-88.5}).wait(1).to({graphics:mask_graphics_91,x:-78,y:-86.9}).wait(1).to({graphics:mask_graphics_92,x:-77.8,y:-85.2}).wait(1).to({graphics:mask_graphics_93,x:-77.6,y:-83.5}).wait(1).to({graphics:mask_graphics_94,x:-77.4,y:-81.9}).wait(1).to({graphics:mask_graphics_95,x:-77.1,y:-80.2}).wait(1).to({graphics:mask_graphics_96,x:-76.8,y:-78.6}).wait(1).to({graphics:mask_graphics_97,x:-76.5,y:-76.9}).wait(1).to({graphics:mask_graphics_98,x:-76.1,y:-75.3}).wait(1).to({graphics:mask_graphics_99,x:-75.8,y:-73.7}).wait(1).to({graphics:mask_graphics_100,x:-75.4,y:-72.1}).wait(1).to({graphics:mask_graphics_101,x:-75,y:-70.4}).wait(1).to({graphics:mask_graphics_102,x:-74.5,y:-68.8}).wait(1).to({graphics:mask_graphics_103,x:-74,y:-67.2}).wait(1).to({graphics:mask_graphics_104,x:-73.5,y:-65.6}).wait(1).to({graphics:mask_graphics_105,x:-73,y:-64}).wait(1).to({graphics:mask_graphics_106,x:-72.4,y:-62.4}).wait(1).to({graphics:mask_graphics_107,x:-71.9,y:-60.9}).wait(1).to({graphics:mask_graphics_108,x:-71.3,y:-59.3}).wait(1).to({graphics:mask_graphics_109,x:-70.6,y:-57.7}).wait(1).to({graphics:mask_graphics_110,x:-70,y:-56.2}).wait(1).to({graphics:mask_graphics_111,x:-69.3,y:-54.6}).wait(1).to({graphics:mask_graphics_112,x:-68.6,y:-53.1}).wait(1).to({graphics:mask_graphics_113,x:-67.9,y:-51.6}).wait(1).to({graphics:mask_graphics_114,x:-67.2,y:-50}).wait(1).to({graphics:mask_graphics_115,x:-66.4,y:-48.5}).wait(1).to({graphics:mask_graphics_116,x:-65.6,y:-47}).wait(1).to({graphics:mask_graphics_117,x:-64.8,y:-45.6}).wait(1).to({graphics:mask_graphics_118,x:-63.9,y:-44.1}).wait(1).to({graphics:mask_graphics_119,x:-63.1,y:-42.6}).wait(1).to({graphics:mask_graphics_120,x:-62.2,y:-41.2}).wait(1).to({graphics:mask_graphics_121,x:-61.3,y:-39.8}).wait(1).to({graphics:mask_graphics_122,x:-60.4,y:-38.4}).wait(1).to({graphics:mask_graphics_123,x:-59.4,y:-37}).wait(1).to({graphics:mask_graphics_124,x:-58.4,y:-35.6}).wait(1).to({graphics:mask_graphics_125,x:-57.4,y:-34.2}).wait(1).to({graphics:mask_graphics_126,x:-56.4,y:-32.9}).wait(1).to({graphics:mask_graphics_127,x:-55.3,y:-31.6}).wait(1).to({graphics:mask_graphics_128,x:-54.3,y:-30.2}).wait(1).to({graphics:mask_graphics_129,x:-53.2,y:-29}).wait(1).to({graphics:mask_graphics_130,x:-52.1,y:-27.7}).wait(1).to({graphics:mask_graphics_131,x:-50.9,y:-26.5}).wait(1).to({graphics:mask_graphics_132,x:-49.7,y:-25.3}).wait(1).to({graphics:mask_graphics_133,x:-48.5,y:-24.1}).wait(1).to({graphics:mask_graphics_134,x:-47.3,y:-22.9}).wait(1).to({graphics:mask_graphics_135,x:-46.1,y:-21.7}).wait(1).to({graphics:mask_graphics_136,x:-44.8,y:-20.6}).wait(1).to({graphics:mask_graphics_137,x:-43.5,y:-19.5}).wait(1).to({graphics:mask_graphics_138,x:-42.2,y:-18.5}).wait(1).to({graphics:mask_graphics_139,x:-40.9,y:-17.4}).wait(1).to({graphics:mask_graphics_140,x:-39.6,y:-16.4}).wait(1).to({graphics:mask_graphics_141,x:-38.2,y:-15.4}).wait(1).to({graphics:mask_graphics_142,x:-36.8,y:-14.4}).wait(1).to({graphics:mask_graphics_143,x:-35.4,y:-13.5}).wait(1).to({graphics:mask_graphics_144,x:-34,y:-12.5}).wait(1).to({graphics:mask_graphics_145,x:-32.6,y:-11.6}).wait(1).to({graphics:mask_graphics_146,x:-31.1,y:-10.7}).wait(1).to({graphics:mask_graphics_147,x:-29.7,y:-9.9}).wait(1).to({graphics:mask_graphics_148,x:-28.2,y:-9}).wait(1).to({graphics:mask_graphics_149,x:-26.7,y:-8.2}).wait(1).to({graphics:mask_graphics_150,x:-25.2,y:-7.4}).wait(1).to({graphics:mask_graphics_151,x:-23.7,y:-6.7}).wait(1).to({graphics:mask_graphics_152,x:-22.2,y:-5.9}).wait(1).to({graphics:mask_graphics_153,x:-20.6,y:-5.2}).wait(1).to({graphics:mask_graphics_154,x:-19.1,y:-4.5}).wait(1).to({graphics:mask_graphics_155,x:-17.6,y:-3.8}).wait(1).to({graphics:mask_graphics_156,x:-16,y:-3.2}).wait(1).to({graphics:mask_graphics_157,x:-14.4,y:-2.5}).wait(1).to({graphics:mask_graphics_158,x:-12.9,y:-1.9}).wait(1).to({graphics:mask_graphics_159,x:-11.3,y:-1.4}).wait(1).to({graphics:mask_graphics_160,x:-9.7,y:-0.8}).wait(1).to({graphics:mask_graphics_161,x:-8.1,y:-0.3}).wait(1).to({graphics:mask_graphics_162,x:-6.5,y:0.2}).wait(1).to({graphics:mask_graphics_163,x:-4.9,y:0.7}).wait(1).to({graphics:mask_graphics_164,x:-3.2,y:1.2}).wait(1).to({graphics:mask_graphics_165,x:-1.6,y:1.6}).wait(1).to({graphics:mask_graphics_166,x:0,y:2}).wait(1).to({graphics:mask_graphics_167,x:1.6,y:2.3}).wait(1).to({graphics:mask_graphics_168,x:3.3,y:2.7}).wait(1).to({graphics:mask_graphics_169,x:4.9,y:3}).wait(1).to({graphics:mask_graphics_170,x:6.6,y:3.3}).wait(1).to({graphics:mask_graphics_171,x:8.2,y:3.6}).wait(1).to({graphics:mask_graphics_172,x:9.9,y:3.8}).wait(1).to({graphics:mask_graphics_173,x:11.5,y:4}).wait(1).to({graphics:mask_graphics_174,x:13.2,y:4.2}).wait(1).to({graphics:mask_graphics_175,x:14.9,y:4.3}).wait(1).to({graphics:mask_graphics_176,x:16.5,y:4.4}).wait(1).to({graphics:mask_graphics_177,x:18.2,y:4.5}).wait(1).to({graphics:mask_graphics_178,x:19.9,y:4.5}).wait(1).to({graphics:mask_graphics_179,x:21.6,y:4.6}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("Aq20hQBOgDBSAHQH6ArFpE0QFqE0AAJAQAAI/lnGXQllGXn8AAQhVAAhQgL");
	this.shape.setTransform(8.3,-4.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(180));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.7,-147.9,21.9,277.5);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-96.7,1,1,0,0,0,0.1,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,regY:0,y:213.5},129).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAAgbIAAA3");
	this.shape.setTransform(0,-96.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AAAAnIAAhN");
	this.shape_1.setTransform(0,-95.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AAAAzIAAhk");
	this.shape_2.setTransform(0,-94.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AAAA+IAAh7");
	this.shape_3.setTransform(0,-93);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AAABKIAAiT");
	this.shape_4.setTransform(0,-91.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AAABVIAAip");
	this.shape_5.setTransform(0,-90.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AAABhIAAjB");
	this.shape_6.setTransform(0,-89.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AAABsIAAjX");
	this.shape_7.setTransform(0,-88.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AAAB4IAAjv");
	this.shape_8.setTransform(0,-87.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AAACEIAAkG");
	this.shape_9.setTransform(0,-86);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AAACPIAAkd");
	this.shape_10.setTransform(0,-84.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AAACbIAAk1");
	this.shape_11.setTransform(0,-83.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AAACmIAAlL");
	this.shape_12.setTransform(0,-82.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AAACyIAAlj");
	this.shape_13.setTransform(0,-81.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AAAC9IAAl5");
	this.shape_14.setTransform(0,-80.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AAADIIAAmQ");
	this.shape_15.setTransform(0,-79.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AAADUIAAmn");
	this.shape_16.setTransform(0,-77.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AAADgIAAm/");
	this.shape_17.setTransform(0,-76.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AAADrIAAnV");
	this.shape_18.setTransform(0,-75.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AAAD3IAAnt");
	this.shape_19.setTransform(0,-74.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AAAECIAAoD");
	this.shape_20.setTransform(0,-73.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AAAEOIAAob");
	this.shape_21.setTransform(0,-72.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AAAEaIAAoz");
	this.shape_22.setTransform(0,-71);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AAAElIAApJ");
	this.shape_23.setTransform(0,-69.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AAAExIAAph");
	this.shape_24.setTransform(0,-68.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AAAE8IAAp3");
	this.shape_25.setTransform(0,-67.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AAAFIIAAqP");
	this.shape_26.setTransform(0,-66.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AAAFTIAAql");
	this.shape_27.setTransform(0,-65.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AAAFfIAAq9");
	this.shape_28.setTransform(0,-64.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AAAFqIAArT");
	this.shape_29.setTransform(0,-62.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AAAF2IAArr");
	this.shape_30.setTransform(0,-61.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AAAGCIAAsD");
	this.shape_31.setTransform(0,-60.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AAAGNIAAsZ");
	this.shape_32.setTransform(0,-59.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AAAGZIAAsx");
	this.shape_33.setTransform(0,-58.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AAAGkIAAtH");
	this.shape_34.setTransform(0,-57.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AAAGwIAAtf");
	this.shape_35.setTransform(0,-56);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AAAG7IAAt1");
	this.shape_36.setTransform(0,-54.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AAAHHIAAuN");
	this.shape_37.setTransform(0,-53.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AAAHSIAAuj");
	this.shape_38.setTransform(0,-52.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AAAHdIAAu6");
	this.shape_39.setTransform(0,-51.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AAAHpIAAvR");
	this.shape_40.setTransform(0,-50.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AAAH1IAAvp");
	this.shape_41.setTransform(0,-49);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AAAIAIAAv/");
	this.shape_42.setTransform(0,-47.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AAAIMIAAwX");
	this.shape_43.setTransform(0,-46.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AAAIYIAAwv");
	this.shape_44.setTransform(0,-45.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AAAIjIAAxF");
	this.shape_45.setTransform(0,-44.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AAAIvIAAxd");
	this.shape_46.setTransform(0,-43.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AAAI6IAAxz");
	this.shape_47.setTransform(0,-42.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AAAJFIAAyK");
	this.shape_48.setTransform(0,-40.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AAAJRIAAyh");
	this.shape_49.setTransform(0,-39.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AAAJdIAAy5");
	this.shape_50.setTransform(0,-38.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AAAJoIAAzP");
	this.shape_51.setTransform(0,-37.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AAAJ0IAAzn");
	this.shape_52.setTransform(0,-36.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AAAKAIAAz/");
	this.shape_53.setTransform(0,-35.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AAAKLIAA0V");
	this.shape_54.setTransform(0,-34);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AAAKXIAA0t");
	this.shape_55.setTransform(0,-32.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AAAKiIAA1D");
	this.shape_56.setTransform(0,-31.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AAAKuIAA1b");
	this.shape_57.setTransform(0,-30.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AAAK5IAA1x");
	this.shape_58.setTransform(0,-29.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AAALFIAA2J");
	this.shape_59.setTransform(0,-28.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(5,1,1).p("AAALQIAA2f");
	this.shape_60.setTransform(0,-27.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(5,1,1).p("AAALcIAA23");
	this.shape_61.setTransform(0,-25.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(5,1,1).p("AAALnIAA3N");
	this.shape_62.setTransform(0,-24.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(5,1,1).p("AAALzIAA3l");
	this.shape_63.setTransform(0,-23.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(5,1,1).p("AAAL/IAA39");
	this.shape_64.setTransform(0,-22.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(5,1,1).p("AAAMKIAA4T");
	this.shape_65.setTransform(0,-21.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(5,1,1).p("AAAMVIAA4p");
	this.shape_66.setTransform(0,-20.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(5,1,1).p("AAAMhIAA5B");
	this.shape_67.setTransform(0,-18.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(5,1,1).p("AAAMtIAA5Z");
	this.shape_68.setTransform(0,-17.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(5,1,1).p("AAAM4IAA5v");
	this.shape_69.setTransform(0,-16.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(5,1,1).p("AAANEIAA6H");
	this.shape_70.setTransform(0,-15.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(5,1,1).p("AAANPIAA6d");
	this.shape_71.setTransform(0,-14.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(5,1,1).p("AAANbIAA61");
	this.shape_72.setTransform(0,-13.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(5,1,1).p("AAANmIAA7L");
	this.shape_73.setTransform(0,-12);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(5,1,1).p("AAANyIAA7j");
	this.shape_74.setTransform(0,-10.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(5,1,1).p("AAAN9IAA75");
	this.shape_75.setTransform(0,-9.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(5,1,1).p("AAAOJIAA8R");
	this.shape_76.setTransform(0,-8.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(5,1,1).p("AAAOVIAA8p");
	this.shape_77.setTransform(0,-7.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(5,1,1).p("AAAOgIAA8/");
	this.shape_78.setTransform(0,-6.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(5,1,1).p("AAAOrIAA9V");
	this.shape_79.setTransform(0,-5.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(5,1,1).p("AAAO3IAA9t");
	this.shape_80.setTransform(0,-3.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(5,1,1).p("AAAPDIAA+F");
	this.shape_81.setTransform(0,-2.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(5,1,1).p("AAAPOIAA+b");
	this.shape_82.setTransform(0,-1.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(5,1,1).p("AAAPaIAA+z");
	this.shape_83.setTransform(0,-0.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(5,1,1).p("AAAPlIAA/J");
	this.shape_84.setTransform(0,0.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(5,1,1).p("AAAPxIAA/h");
	this.shape_85.setTransform(0,1.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(5,1,1).p("AAAP9IAA/5");
	this.shape_86.setTransform(0,3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(5,1,1).p("AAAQIMAAAggP");
	this.shape_87.setTransform(0,4.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(5,1,1).p("AAAQUMAAAggn");
	this.shape_88.setTransform(0,5.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(5,1,1).p("AAAQfMAAAgg9");
	this.shape_89.setTransform(0,6.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(5,1,1).p("AAAQrMAAAghV");
	this.shape_90.setTransform(0,7.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(5,1,1).p("AAAQ2MAAAghr");
	this.shape_91.setTransform(0,8.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(5,1,1).p("AAARCMAAAgiD");
	this.shape_92.setTransform(0,10);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(5,1,1).p("AAARNMAAAgiZ");
	this.shape_93.setTransform(0,11.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(5,1,1).p("AAARZMAAAgix");
	this.shape_94.setTransform(0,12.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(5,1,1).p("AAARkMAAAgjH");
	this.shape_95.setTransform(0,13.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(5,1,1).p("AAARwMAAAgjf");
	this.shape_96.setTransform(0,14.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(5,1,1).p("AAAR7MAAAgj1");
	this.shape_97.setTransform(0,15.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(5,1,1).p("AAASHMAAAgkN");
	this.shape_98.setTransform(0,16.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(5,1,1).p("AAASSMAAAgkj");
	this.shape_99.setTransform(0,18);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(5,1,1).p("AAASeMAAAgk7");
	this.shape_100.setTransform(0,19.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(5,1,1).p("AAASqMAAAglT");
	this.shape_101.setTransform(0,20.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(5,1,1).p("AAAS1MAAAglp");
	this.shape_102.setTransform(0,21.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(5,1,1).p("AAATBMAAAgmB");
	this.shape_103.setTransform(0,22.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(5,1,1).p("AAATMMAAAgmX");
	this.shape_104.setTransform(0,23.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(5,1,1).p("AAATYMAAAgmv");
	this.shape_105.setTransform(0,25);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(5,1,1).p("AAATjMAAAgnF");
	this.shape_106.setTransform(0,26.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(5,1,1).p("AAATvMAAAgnd");
	this.shape_107.setTransform(0,27.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(5,1,1).p("AAAT6MAAAgnz");
	this.shape_108.setTransform(0,28.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(5,1,1).p("AAAUGMAAAgoL");
	this.shape_109.setTransform(0,29.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(5,1,1).p("AAAUSMAAAgoj");
	this.shape_110.setTransform(0,30.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(5,1,1).p("AAAUdMAAAgo5");
	this.shape_111.setTransform(0,31.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(5,1,1).p("AAAUpMAAAgpR");
	this.shape_112.setTransform(0,33.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(5,1,1).p("AAAU0MAAAgpn");
	this.shape_113.setTransform(0,34.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(5,1,1).p("AAAVAMAAAgp/");
	this.shape_114.setTransform(0,35.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(5,1,1).p("AAAVLMAAAgqV");
	this.shape_115.setTransform(0,36.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(5,1,1).p("AAAVXMAAAgqt");
	this.shape_116.setTransform(0,37.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(5,1,1).p("AAAViMAAAgrD");
	this.shape_117.setTransform(0,38.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(5,1,1).p("AAAVuMAAAgrb");
	this.shape_118.setTransform(0,40);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(5,1,1).p("AAAV5MAAAgrx");
	this.shape_119.setTransform(0,41.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(5,1,1).p("AAAWFMAAAgsJ");
	this.shape_120.setTransform(0,42.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(5,1,1).p("AAAWQMAAAgsf");
	this.shape_121.setTransform(0,43.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(5,1,1).p("AAAWcMAAAgs3");
	this.shape_122.setTransform(0,44.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(5,1,1).p("AAAWoMAAAgtP");
	this.shape_123.setTransform(0,45.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(5,1,1).p("AAAWzMAAAgtl");
	this.shape_124.setTransform(0,47);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(5,1,1).p("AAAW/MAAAgt9");
	this.shape_125.setTransform(0,48.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(5,1,1).p("AAAXKMAAAguT");
	this.shape_126.setTransform(0,49.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(5,1,1).p("AAAXWMAAAgur");
	this.shape_127.setTransform(0,50.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(5,1,1).p("AAAXhMAAAgvB");
	this.shape_128.setTransform(0,51.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(5,1,1).p("AAA3sMAAAAvZ");
	this.shape_129.setTransform(0,52.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,-110.1,24.3,21.8);


(lib.honeyflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.honeybee();
	this.instance.parent = this;
	this.instance.setTransform(22.2,-144.1,0.422,0.422,0,0,0,-38.4,63.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIB9IgQgDQgHgBgGgCIgPgGIgGgDIgCgBIgDgCIgDgBIgCgCIgCgBIgCgCIgCgCIgCgBIgDgCIgBgBIgCgCIgCgCIgCgBIgCgCIgBgCIgCgBIgCgCIgBgCIgCgBIgBgCIAAgCIgCgBIgBgCIgCgCIgBgCIgBgBIgBgCIgBgCIgBgCIgBgBIgBgCIgBgCIgBgCIgBgBIgBgCIgBgCIAAgCIAAgCIgBgBIgBgCIgBgCIAAgCIgBgCIgBgBIAAgCIgBgCIgBgCIAAgCIAAgCIAAgBIgBgCIAAgCIAAgCIgBgCIAAgCIAAgCIAAgBIAAgCIgBgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgBIAAgCIAAgCIAAgCIABgCIgBgCIABgCIAAgCIAAgCIABgCIAAgCIAAgCIABgCIAAgCIAAgCIABgBIABgDIABgBIAAgCIABgCIABgCIAAgCIABgCIABgDIABgCIAAgCIABgCIACgCIABgCIABgCIABgCIABgCIABgCIACgCIABgCIACgCIACgCIABgDIACgCIABgCIADgCIABgCIACgCIAIgHIAMgJIAIgFIALgGIAIgDIANgEIALgCIAAAAIAMgBIAIAAIAJAAIAIABIAKADIAJACIAEABIADACIADABIAEABIADACIADABIADACIADABIABACIADABIADACIABACIACABIACACIADABIACACIABACIACABIACACIACACIABABIACACIABACIABABIACACIACACIABABIABACIABACIABACIACABIABACIABACIABABIABACIABACIABACIABACIAAABIABACIABACIACACIABABIAAACIABACIABACIAAACIAAABIABACIAAACIABACIABACIAAACIABABIAAACIAAACIABACIAAACIABACIAAABIAAACIAAACIABACIAAACIAAACIAAACIAAACIAAABIAAACIAAABIAAACIAAACIAAACIAAACIAAACIgBACIAAACIAAACIAAABIAAACIgBACIAAACIgBACIgBACIAAACIgBACIAAACIgBACIAAACIgBACIAAACIgBACIgBACIAAACIgBACIgCACIgBACIgBACIgBACIAAACIgCADIgBACIgBACIgCACIgBACIgCACIgBACIgCACIgBACIgDADIgBACIgCACIgCACIgDACIgCADIgDACIgGAFIgCACIgFACIgHAFQgGAEgIADIgFACIgGACIgRAEIgMABIgIAAIgHAAg");
	this.shape.setTransform(22.8,-143.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-215.3,105.5,84);


// stage content:
(lib.writingsuccess_Fontkid_D = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_449 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(449).call(this.frame_449).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(148.9,104.1,0.999,0.999,0,-8.5,171.5,22.4,-144);
	this.instance._off = true;

	this.instance_1 = new lib.honeybee();
	this.instance_1.parent = this;
	this.instance_1.setTransform(146.4,447.1,0.421,0.421,8.5,0,0,-38.2,63.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({y:444.1},140).wait(11).to({rotation:8.5,skewX:0,skewY:0,x:150.6,y:102.3},0).to({scaleX:1,scaleY:1,rotation:8.3,guide:{path:[150.5,102.6,185.3,102.5,220,102.4,226.2,102.5,232.5,102.5,236,102.5,239.5,102.6,268.5,102.6,294.3,110]}},35).to({guide:{path:[294.3,110.1,335.9,122,368.9,153.1,416.6,198,421.9,259.4]}},59).to({guide:{path:[421.8,259.4,422.5,267.1,422.5,275.1,422.5,346.6,368.9,397.1,328.1,435.5,274.6,444.7]}},70).to({scaleX:1,scaleY:1,rotation:8.5,guide:{path:[274.5,444.7,257.6,447.7,239.5,447.7,238.7,447.7,238,447.7,194.3,447.7,150.5,447.7]}},35).to({_off:true},10).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(369).to({_off:false},0).to({regX:-38.4,guide:{path:[146.5,447,141.2,417.4,121.1,395.1,99.7,371.3,67.8,374.9,37.7,378.3,13.3,396.3,-10.3,413.7,-38.8,420.9,-65.8,427.7,-85.2,448.3,-101.6,465.8,-112.9,487], orient:'auto'}},80).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(148.8,443.1,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},140).wait(11).to({_off:false,y:445.1},0).to({_off:true},199).wait(91));

	// ar2
	this.instance_2 = new lib.ar2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(292.2,276);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(160).to({_off:false},0).wait(290));

	// ar1
	this.instance_3 = new lib.ar1("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(53.5,222.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(441));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_160 = new cjs.Graphics().p("AiBErIAApVIEDAAIAAJVg");
	var mask_graphics_161 = new cjs.Graphics().p("AiZErIAApVIEzAAIAAJVg");
	var mask_graphics_162 = new cjs.Graphics().p("AixErIAApVIFjAAIAAJVg");
	var mask_graphics_163 = new cjs.Graphics().p("AjKErIAApVIGUAAIAAJVg");
	var mask_graphics_164 = new cjs.Graphics().p("AjiErIAApVIHFAAIAAJVg");
	var mask_graphics_165 = new cjs.Graphics().p("Aj6ErIAApVIH1AAIAAJVg");
	var mask_graphics_166 = new cjs.Graphics().p("AkSErIAApVIIlAAIAAJVg");
	var mask_graphics_167 = new cjs.Graphics().p("AkqErIAApVIJVAAIAAJVg");
	var mask_graphics_168 = new cjs.Graphics().p("AlCErIAApVIKFAAIAAJVg");
	var mask_graphics_169 = new cjs.Graphics().p("AlbErIAApVIK2AAIAAJVg");
	var mask_graphics_170 = new cjs.Graphics().p("AlzErIAApVILnAAIAAJVg");
	var mask_graphics_171 = new cjs.Graphics().p("AmLErIAApVIMXAAIAAJVg");
	var mask_graphics_172 = new cjs.Graphics().p("AmjErIAApVINHAAIAAJVg");
	var mask_graphics_173 = new cjs.Graphics().p("Am7ErIAApVIN3AAIAAJVg");
	var mask_graphics_174 = new cjs.Graphics().p("AnTErIAApVIOnAAIAAJVg");
	var mask_graphics_175 = new cjs.Graphics().p("AnsErIAApVIPZAAIAAJVg");
	var mask_graphics_176 = new cjs.Graphics().p("AoEErIAApVIQJAAIAAJVg");
	var mask_graphics_177 = new cjs.Graphics().p("AocErIAApVIQ5AAIAAJVg");
	var mask_graphics_178 = new cjs.Graphics().p("Ao0ErIAApVIRpAAIAAJVg");
	var mask_graphics_179 = new cjs.Graphics().p("ApMErIAApVISZAAIAAJVg");
	var mask_graphics_180 = new cjs.Graphics().p("ApkErIAApVITJAAIAAJVg");
	var mask_graphics_181 = new cjs.Graphics().p("Ap9ErIAApVIT7AAIAAJVg");
	var mask_graphics_182 = new cjs.Graphics().p("AqVErIAApVIUrAAIAAJVg");
	var mask_graphics_183 = new cjs.Graphics().p("AqtErIAApVIVbAAIAAJVg");
	var mask_graphics_184 = new cjs.Graphics().p("ArFErIAApVIWLAAIAAJVg");
	var mask_graphics_185 = new cjs.Graphics().p("ArdErIAApVIW7AAIAAJVg");
	var mask_graphics_186 = new cjs.Graphics().p("Ar1ErIAApVIXrAAIAAJVg");
	var mask_graphics_187 = new cjs.Graphics().p("AsOErIAApVIYcAAIAAJVg");
	var mask_graphics_326 = new cjs.Graphics().p("AAPflIAApWIYdAAIAAJWgA4r2OIAApWIYdAAIAAJWg");
	var mask_graphics_327 = new cjs.Graphics().p("AgEflIAApWIYcAAIAAJWgA4X2OIAApWIYcAAIAAJWg");
	var mask_graphics_328 = new cjs.Graphics().p("AgXflIAApWIYaAAIAAJWgA4D2OIAApWIYcAAIAAJWg");
	var mask_graphics_329 = new cjs.Graphics().p("AgrflIAApWIYaAAIAAJWgA3u2OIAApWIYcAAIAAJWg");
	var mask_graphics_330 = new cjs.Graphics().p("Ag/flIAApWIYaAAIAAJWgA3a2OIAApWIYcAAIAAJWg");
	var mask_graphics_331 = new cjs.Graphics().p("AhTflIAApWIYaAAIAAJWgA3G2OIAApWIYcAAIAAJWg");
	var mask_graphics_332 = new cjs.Graphics().p("AhnflIAApWIYZAAIAAJWgA2x2OIAApWIYcAAIAAJWg");
	var mask_graphics_333 = new cjs.Graphics().p("Ah6flIAApWIYYAAIAAJWgA2d2OIAApWIYcAAIAAJWg");
	var mask_graphics_334 = new cjs.Graphics().p("AiOflIAApWIYXAAIAAJWgA2J2OIAApWIYcAAIAAJWg");
	var mask_graphics_335 = new cjs.Graphics().p("AiiflIAApWIYXAAIAAJWgA102OIAApWIYcAAIAAJWg");
	var mask_graphics_336 = new cjs.Graphics().p("Ai2flIAApWIYXAAIAAJWgA1g2OIAApWIYcAAIAAJWg");
	var mask_graphics_337 = new cjs.Graphics().p("AjJflIAApWIYWAAIAAJWgA1M2OIAApWIYcAAIAAJWg");
	var mask_graphics_338 = new cjs.Graphics().p("AjdflIAApWIYVAAIAAJWgA032OIAApWIYcAAIAAJWg");
	var mask_graphics_339 = new cjs.Graphics().p("AjxflIAApWIYVAAIAAJWgA0j2OIAApWIYcAAIAAJWg");
	var mask_graphics_340 = new cjs.Graphics().p("AkFflIAApWIYVAAIAAJWgA0P2OIAApWIYcAAIAAJWg");
	var mask_graphics_341 = new cjs.Graphics().p("AkYflIAApWIYUAAIAAJWgAz72OIAApWIYcAAIAAJWg");
	var mask_graphics_342 = new cjs.Graphics().p("AksflIAApWIYTAAIAAJWgAzm2OIAApWIYcAAIAAJWg");
	var mask_graphics_343 = new cjs.Graphics().p("AlAflIAApWIYTAAIAAJWgAzS2OIAApWIYcAAIAAJWg");
	var mask_graphics_344 = new cjs.Graphics().p("AlUflIAApWIYSAAIAAJWgAy+2OIAApWIYcAAIAAJWg");
	var mask_graphics_345 = new cjs.Graphics().p("AlnflIAApWIYRAAIAAJWgAyp2OIAApWIYcAAIAAJWg");
	var mask_graphics_346 = new cjs.Graphics().p("Al7flIAApWIYRAAIAAJWgAyV2OIAApWIYcAAIAAJWg");
	var mask_graphics_347 = new cjs.Graphics().p("AmPflIAApWIYRAAIAAJWgAyB2OIAApWIYcAAIAAJWg");
	var mask_graphics_348 = new cjs.Graphics().p("AmjflIAApWIYQAAIAAJWgAxs2OIAApWIYcAAIAAJWg");
	var mask_graphics_349 = new cjs.Graphics().p("Am2flIAApWIYPAAIAAJWgAxY2OIAApWIYcAAIAAJWg");
	var mask_graphics_350 = new cjs.Graphics().p("AnKflIAApWIYPAAIAAJWgAxE2OIAApWIYcAAIAAJWg");
	var mask_graphics_351 = new cjs.Graphics().p("AneflIAApWIYPAAIAAJWgAww2OIAApWIYcAAIAAJWg");
	var mask_graphics_352 = new cjs.Graphics().p("AnyflIAApWIYOAAIAAJWgAwb2OIAApWIYcAAIAAJWg");
	var mask_graphics_353 = new cjs.Graphics().p("AoFflIAApWIYNAAIAAJWgAwH2OIAApWIYcAAIAAJWg");
	var mask_graphics_354 = new cjs.Graphics().p("AoZflIAApWIYMAAIAAJWgAvz2OIAApWIYcAAIAAJWg");
	var mask_graphics_355 = new cjs.Graphics().p("AotflIAApWIYMAAIAAJWgAve2OIAApWIYcAAIAAJWg");
	var mask_graphics_356 = new cjs.Graphics().p("ApBflIAApWIYMAAIAAJWgAvK2OIAApWIYcAAIAAJWg");
	var mask_graphics_357 = new cjs.Graphics().p("ApVflIAApWIYLAAIAAJWgAu22OIAApWIYcAAIAAJWg");
	var mask_graphics_358 = new cjs.Graphics().p("ApoflIAApWIYKAAIAAJWgAuh2OIAApWIYcAAIAAJWg");
	var mask_graphics_359 = new cjs.Graphics().p("Ap8flIAApWIYKAAIAAJWgAuN2OIAApWIYcAAIAAJWg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(160).to({graphics:mask_graphics_160,x:123,y:94}).wait(1).to({graphics:mask_graphics_161,x:125.4,y:94}).wait(1).to({graphics:mask_graphics_162,x:127.8,y:94}).wait(1).to({graphics:mask_graphics_163,x:130.3,y:94}).wait(1).to({graphics:mask_graphics_164,x:132.7,y:94}).wait(1).to({graphics:mask_graphics_165,x:135.1,y:94}).wait(1).to({graphics:mask_graphics_166,x:137.5,y:94}).wait(1).to({graphics:mask_graphics_167,x:139.9,y:94}).wait(1).to({graphics:mask_graphics_168,x:142.3,y:94}).wait(1).to({graphics:mask_graphics_169,x:144.8,y:94}).wait(1).to({graphics:mask_graphics_170,x:147.2,y:94}).wait(1).to({graphics:mask_graphics_171,x:149.6,y:94}).wait(1).to({graphics:mask_graphics_172,x:152,y:94}).wait(1).to({graphics:mask_graphics_173,x:154.4,y:94}).wait(1).to({graphics:mask_graphics_174,x:156.8,y:94}).wait(1).to({graphics:mask_graphics_175,x:159.3,y:94}).wait(1).to({graphics:mask_graphics_176,x:161.7,y:94}).wait(1).to({graphics:mask_graphics_177,x:164.1,y:94}).wait(1).to({graphics:mask_graphics_178,x:166.5,y:94}).wait(1).to({graphics:mask_graphics_179,x:168.9,y:94}).wait(1).to({graphics:mask_graphics_180,x:171.3,y:94}).wait(1).to({graphics:mask_graphics_181,x:173.8,y:94}).wait(1).to({graphics:mask_graphics_182,x:176.2,y:94}).wait(1).to({graphics:mask_graphics_183,x:178.6,y:94}).wait(1).to({graphics:mask_graphics_184,x:181,y:94}).wait(1).to({graphics:mask_graphics_185,x:183.4,y:94}).wait(1).to({graphics:mask_graphics_186,x:185.8,y:94}).wait(1).to({graphics:mask_graphics_187,x:188.3,y:94}).wait(139).to({graphics:mask_graphics_326,x:268,y:266.2}).wait(1).to({graphics:mask_graphics_327,x:266,y:266.2}).wait(1).to({graphics:mask_graphics_328,x:264,y:266.2}).wait(1).to({graphics:mask_graphics_329,x:261.9,y:266.2}).wait(1).to({graphics:mask_graphics_330,x:259.9,y:266.2}).wait(1).to({graphics:mask_graphics_331,x:257.9,y:266.2}).wait(1).to({graphics:mask_graphics_332,x:255.8,y:266.2}).wait(1).to({graphics:mask_graphics_333,x:253.8,y:266.2}).wait(1).to({graphics:mask_graphics_334,x:251.8,y:266.2}).wait(1).to({graphics:mask_graphics_335,x:249.7,y:266.2}).wait(1).to({graphics:mask_graphics_336,x:247.7,y:266.2}).wait(1).to({graphics:mask_graphics_337,x:245.7,y:266.2}).wait(1).to({graphics:mask_graphics_338,x:243.6,y:266.2}).wait(1).to({graphics:mask_graphics_339,x:241.6,y:266.2}).wait(1).to({graphics:mask_graphics_340,x:239.6,y:266.2}).wait(1).to({graphics:mask_graphics_341,x:237.6,y:266.2}).wait(1).to({graphics:mask_graphics_342,x:235.5,y:266.2}).wait(1).to({graphics:mask_graphics_343,x:233.5,y:266.2}).wait(1).to({graphics:mask_graphics_344,x:231.5,y:266.2}).wait(1).to({graphics:mask_graphics_345,x:229.4,y:266.2}).wait(1).to({graphics:mask_graphics_346,x:227.4,y:266.2}).wait(1).to({graphics:mask_graphics_347,x:225.4,y:266.2}).wait(1).to({graphics:mask_graphics_348,x:223.3,y:266.2}).wait(1).to({graphics:mask_graphics_349,x:221.3,y:266.2}).wait(1).to({graphics:mask_graphics_350,x:219.3,y:266.2}).wait(1).to({graphics:mask_graphics_351,x:217.3,y:266.2}).wait(1).to({graphics:mask_graphics_352,x:215.2,y:266.2}).wait(1).to({graphics:mask_graphics_353,x:213.2,y:266.2}).wait(1).to({graphics:mask_graphics_354,x:211.2,y:266.2}).wait(1).to({graphics:mask_graphics_355,x:209.1,y:266.2}).wait(1).to({graphics:mask_graphics_356,x:207.1,y:266.2}).wait(1).to({graphics:mask_graphics_357,x:205.1,y:266.2}).wait(1).to({graphics:mask_graphics_358,x:203,y:266.2}).wait(1).to({graphics:mask_graphics_359,x:201,y:266.2}).wait(91));

	// 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("A1N67IK4gCQA+ABA+AAQAjAAAjABQL2AAIXH5QIZH5AALKQAALKoZH6QoXH5r2AAQgHAAgIAAItwAA");
	this.shape_1.setTransform(286.3,275);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(160).to({_off:false},0).wait(290));

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_187 = new cjs.Graphics().p("AhUbdQpJpLAAs8QAAs7JJpJQJJpLM9AAMAAAA+fQs9AApJpJg");
	var mask_1_graphics_188 = new cjs.Graphics().p("AiKa9Qo8pYATs8QATs7JWo8QJWo9M8ATMgBaA+eQs8gTo8pWg");
	var mask_1_graphics_189 = new cjs.Graphics().p("AjAacQoupkAms7QAls7JjouQJjovM8AlMgC1A+bQs7glovpkg");
	var mask_1_graphics_190 = new cjs.Graphics().p("Aj0Z8QogpxA4s6QA4s5JvohQJwohM6A4MgEPA+WQs6g4ogpwg");
	var mask_1_graphics_191 = new cjs.Graphics().p("AkoZbQoSp8BLs5QBLs4J7oSQJ8oTM5BLMgFpA+OQs5hLoSp8g");
	var mask_1_graphics_192 = new cjs.Graphics().p("AlbY7QoEqJBes3QBds2KIoDQKHoFM3BdMgHDA+GQs3heoDqHg");
	var mask_1_graphics_193 = new cjs.Graphics().p("AmNYaQn1qUBws1QBws0KTn0QKTn2M1BwMgIdA96Qs1hwn0qTg");
	var mask_1_graphics_194 = new cjs.Graphics().p("Am/X5QnlqfCCsyQCDsxKenmQKennMyCDMgJ2A9tQsyiDnmqeg");
	var mask_1_graphics_195 = new cjs.Graphics().p("AnvXYQnWqqCVsuQCVsvKonWQKqnYMuCVMgLPA9eQsuiVnXqpg");
	var mask_1_graphics_196 = new cjs.Graphics().p("AofW3QnGq1CnsqQCnsrKznHQK0nIMsCnMgMoA9MQsrinnIqzg");
	var mask_1_graphics_197 = new cjs.Graphics().p("ApNWVQm3q+C6smQC5soK9m3QK/m4MnC6MgOBA85Qsmi6m4q+g");
	var mask_1_graphics_198 = new cjs.Graphics().p("Ap7V0QmnrIDMsiQDMsjLGmnQLJmoMjDMMgPYA8jQsijLmprIg");
	var mask_1_graphics_199 = new cjs.Graphics().p("AqnVTQmXrSDesdQDeseLQmXQLSmYMeDeMgQwA8NQsdjemYrRg");
	var mask_1_graphics_200 = new cjs.Graphics().p("ArTUxQmGraDwsYQDwsZLYmGQLbmIMZDwMgSGA7zQsYjwmIrag");
	var mask_1_graphics_201 = new cjs.Graphics().p("Ar9UQQl2rjECsSQECsTLhl3QLkl2MTEBMgTdA7ZQsSkCl3rjg");
	var mask_1_graphics_202 = new cjs.Graphics().p("AsmTvQllrsETsMQEUsNLpllQLslmMNETMgUyA67QsMkTlmrrg");
	var mask_1_graphics_203 = new cjs.Graphics().p("AtPTOQlUr0ElsGQElsGLylVQL0lVMGEmMgWHA6cQsFkmlWryg");
	var mask_1_graphics_204 = new cjs.Graphics().p("At2SsQlDr6E3r/QE2sAL5lDQL8lEL/E2MgXbA57Qr/k2lEr7g");
	var mask_1_graphics_205 = new cjs.Graphics().p("AucSLQkxsCFHr3QFIr5MAkyQMDkyL4FHMgYuA5ZQr4lIkzsCg");
	var mask_1_graphics_206 = new cjs.Graphics().p("AvBRqQkgsIFZrwQFZryMHkgQMJkhLxFZMgaBA4zQrwlYkisJg");
	var mask_1_graphics_207 = new cjs.Graphics().p("AvlRJQkOsPFqroQFqrpMNkPQMPkPLpFqMgbTA4NQrolqkQsPg");
	var mask_1_graphics_208 = new cjs.Graphics().p("AwHQpQj9sVF7rgQF6rhMTj9QMWj9LhF6MgcjA3lQrhl7j+sUg");
	var mask_1_graphics_209 = new cjs.Graphics().p("AwoQIQjrsaGLrXQGLrYMZjsQMbjrLXGLMgdyA26QrYmLjssag");
	var mask_1_graphics_210 = new cjs.Graphics().p("AxJPoQjYsgGbrOQGcrPMdjZQMgjaLPGcMgfCA2OQrOmbjbsfg");
	var mask_1_graphics_211 = new cjs.Graphics().p("AxnPHQjHskGsrEQGrrGMijHQMljHLGGrMggQA1hQrFmsjIskg");
	var mask_1_graphics_212 = new cjs.Graphics().p("AyFOnQi0soG7q7QG8q7Mmi1QMpi2K8G8MghdA0xQq7m8i2sog");
	var mask_1_graphics_213 = new cjs.Graphics().p("AyhOHQiissHLqwQHLqyMqiiQMtijKyHLMgipA0AQqxnMijssg");
	var mask_1_graphics_214 = new cjs.Graphics().p("Ay8NoQiQswHbqmQHaqnMuiQQMxiRKmHbMgjzAzNQqmnbiRsvg");
	var mask_1_graphics_215 = new cjs.Graphics().p("AzWNIQh9szHpqbQHqqcMxh9QM0h+KcHqMgk9AyYQqcnqh+szg");
	var mask_1_graphics_216 = new cjs.Graphics().p("AzvMpQhqs1H5qQQH4qRM0hrQM2hsKRH5MgmFAxiQqRn5hss1g");
	var mask_1_graphics_217 = new cjs.Graphics().p("A0GMKQhYs3IIqFQIHqFM2hYQM5hZKFIHMgnMAwqQqFoHhas4g");
	var mask_1_graphics_218 = new cjs.Graphics().p("A0cLrQhFs4IWp5QIWp5M4hGQM6hHJ5IWMgoSAvxQp5oWhHs6g");
	var mask_1_graphics_219 = new cjs.Graphics().p("A0wLNQgzs6IkptQIlptM5gzQM7g0JtIlMgpWAu1Qptokg0s7g");
	var mask_1_graphics_220 = new cjs.Graphics().p("A1DKvQggs7IypgQIypgM6ghQM9ghJgIyMgqZAt5Qphoyghs8g");
	var mask_1_graphics_221 = new cjs.Graphics().p("A1VKRQgNs7JApTQI/pUM7gOQM9gOJTJAMgrbAs6QpTo/gPs9g");
	var mask_1_graphics_222 = new cjs.Graphics().p("A1lJ0QAFs7JNpHQJNpGM7AFQM9AEJGJNMgsbAr8QpGpNAEs9g");
	var mask_1_graphics_223 = new cjs.Graphics().p("A10JXQAYs7Jao5QJao5M6AYQM9AXI5JaMgtaAq6Qo5paAXs8g");
	var mask_1_graphics_224 = new cjs.Graphics().p("A2CI7QArs7JnorQJnorM5AqQM8AqIrJnMguXAp4QorpnAps7g");
	var mask_1_graphics_225 = new cjs.Graphics().p("A2OIeQA+s5JzodQJzodM4A9QM7A9IdJzMgvTAo0QodpzA8s7g");
	var mask_1_graphics_226 = new cjs.Graphics().p("A2ZIDQBRs4J/oPQJ/oOM3BPQM5BPIPKAMgwOAnuQoOp/BOs4g");
	var mask_1_graphics_227 = new cjs.Graphics().p("A2iHnQBjs1KLoAQKLoBM0BiQM4BiIAKLMgxGAmpQoAqLBhs3g");
	var mask_1_graphics_228 = new cjs.Graphics().p("A2qHMQB1szKXnxQKWnxMyB0QM1B1HyKWMgx9AlhQnyqWB0s1g");
	var mask_1_graphics_229 = new cjs.Graphics().p("A2wGyQCHswKinjQKgniMxCHQMyCHHiKiMgyzAkYQniqiCHsxg");
	var mask_1_graphics_230 = new cjs.Graphics().p("A22GYQCbstKsnTQKrnTMtCaQMvCZHTKsMgzmAjOQnTqsCYsug");
	var mask_1_graphics_231 = new cjs.Graphics().p("A25F+QCsspK3nDQK1nEMqCsQMrCsHEK3Mg0ZAiCQnDq2Crsrg");
	var mask_1_graphics_232 = new cjs.Graphics().p("A27FlQC/slLAmzQLAm0MlC+QMnC/G0LAMg1JAg2Qm0rAC+sng");
	var mask_1_graphics_233 = new cjs.Graphics().p("A28FNQDRshLKmjQLJmkMhDQQMjDRGjLKMg13AfpQmkrKDQsig");
	var mask_1_graphics_234 = new cjs.Graphics().p("A28E1QDkscLTmTQLTmTMcDiQMdDjGULTMg2lAeaQmTrTDhsdg");
	var mask_1_graphics_235 = new cjs.Graphics().p("A26EdQD2sWLcmDQLbmDMXD1QMYD0GDLdMg3PAdLQmDrdDzsYg");
	var mask_1_graphics_236 = new cjs.Graphics().p("A22EGQEHsQLllyQLklzMREGQMSEHFzLkMg35Ab7QlzrkEGsTg");
	var mask_1_graphics_237 = new cjs.Graphics().p("A2xDwQEYsKLuliQLslhMLEYQMMEYFhLsMg4gAaqQlhrtEXsMg");
	var mask_1_graphics_238 = new cjs.Graphics().p("A2rDaQEqsEL1lQQL0lQMFEpQMGEqFQL0Mg5GAZYQlRr1EpsGg");
	var mask_1_graphics_239 = new cjs.Graphics().p("A2jDFQE7r9L9k/QL7k/L+E6QL/E7E/L8Mg5qAYFQk/r9E6r+g");
	var mask_1_graphics_240 = new cjs.Graphics().p("A2aCwQFNr1MDkuQMDkuL2FMQL3FMEuMDMg6MAWxQktsDFLr4g");
	var mask_1_graphics_241 = new cjs.Graphics().p("A2PCcQFeruMJkcQMJkcLvFdQLwFdEcMJMg6sAVdQkcsKFdrwg");
	var mask_1_graphics_242 = new cjs.Graphics().p("A2DCJQFurmMRkLQMPkKLmFtQLoFvELMPMg7KAUHQkLsQFurng");
	var mask_1_graphics_243 = new cjs.Graphics().p("A12B2QF/rdMWj5QMVj5LfF+QLfF/D5MVMg7mASyQj5sWF+rfg");
	var mask_1_graphics_244 = new cjs.Graphics().p("A1nBkQGQrVMbjnQMbjnLVGPQLWGQDnMaMg8AARbQjnsbGPrWg");
	var mask_1_graphics_245 = new cjs.Graphics().p("A1XBSQGgrLMhjVQMfjVLMGfQLNGgDVMgMg8YAQEQjVshGfrNg");
	var mask_1_graphics_246 = new cjs.Graphics().p("A1FBBQGwrCMljCQMkjDLCGvQLEGwDDMkMg8vAOtQjCslGvrEg");
	var mask_1_graphics_247 = new cjs.Graphics().p("A0zAxQHBq4MpiwQMoixK5G/QK5HACxMoMg9DANVQiwsqG+q5g");
	var mask_1_graphics_248 = new cjs.Graphics().p("A0eAhQHPqtMuieQMsifKuHPQKvHQCeMsMg9VAL7QiestHPqvg");
	var mask_1_graphics_249 = new cjs.Graphics().p("A0JASQHgqjMviLQMwiMKkHeQKlHeCLMwMg9lAKjQiMswHeqlg");
	var mask_1_graphics_250 = new cjs.Graphics().p("AzyAEQHvqYMyh5QMzh5KZHtQKaHtB5MzMg90AJKQh5szHtqag");
	var mask_1_graphics_251 = new cjs.Graphics().p("AzZgJQH9qNM1hnQM2hnKNH9QKOH8BnM2Mg+AAHwQhms2H8qOg");
	var mask_1_graphics_252 = new cjs.Graphics().p("AzAgWQIMqBM3hUQM4hVKCILQKCILBVM4Mg+KAGWQhVs4ILqCg");
	var mask_1_graphics_253 = new cjs.Graphics().p("AylgiQIap2M5hBQM6hCJ1IaQJ3IZBCM5Mg+TAE9QhBs6IZp2g");
	var mask_1_graphics_254 = new cjs.Graphics().p("AyJgtQIppqM6gvQM6guJqInQJqInAvM7Mg+YADiQgvs7Inppg");
	var mask_1_graphics_255 = new cjs.Graphics().p("Axrg4QI2pdM7gcQM7gcJdI1QJeI1AcM8Mg+cACHQgcs7I1pdg");
	var mask_1_graphics_256 = new cjs.Graphics().p("AxNhCQJEpQM7gJQM9gKJPJDQJRJCAKM9Mg+fAAtQgJs8JCpQg");
	var mask_1_graphics_257 = new cjs.Graphics().p("A6GUdQAJs9JQpCQJRpDM7AKQM9AJJCJQQJEJQgJM8g");
	var mask_1_graphics_258 = new cjs.Graphics().p("A6FTZQAcs8Jdo1QJeo1M6AcQM8AcI1JdQI2JdgcM7g");
	var mask_1_graphics_259 = new cjs.Graphics().p("A6DSVQAvs7JponQJronM5AuQM7AvIoJqQIoJpgvM7g");
	var mask_1_graphics_260 = new cjs.Graphics().p("A6ARRQBBs5J2oZQJ3oaM4BCQM6BBIZJ2QIaJ2hBM6g");
	var mask_1_graphics_261 = new cjs.Graphics().p("A58QOQBUs4KBoLQKDoLM3BUQM4BVILKBQIMKChUM4g");
	var mask_1_graphics_262 = new cjs.Graphics().p("A54PLQBns2KOn9QKOn8M1BnQM2BnH8KNQH9KOhnM1g");
	var mask_1_graphics_263 = new cjs.Graphics().p("A5yOHQB5szKZntQKantMyB5QM0B5HtKYQHuKZh5M0g");
	var mask_1_graphics_264 = new cjs.Graphics().p("A5rNEQCMswKkneQKkneMwCMQMwCLHeKjQHfKliMMwg");
	var mask_1_graphics_265 = new cjs.Graphics().p("A5jMCQCessKunQQKwnPMsCeQMtCfHPKtQHPKvieMtg");
	var mask_1_graphics_266 = new cjs.Graphics().p("A5aK/QCwsoK5nAQK6m/MoCwQMpCxG/K3QHAK6iwMpg");
	var mask_1_graphics_267 = new cjs.Graphics().p("A5QJ9QDCskLDmwQLEmvMkDDQMlDCGvLCQGwLDjDMmg");
	var mask_1_graphics_268 = new cjs.Graphics().p("A5FI7QDUsfLNmgQLMmfMgDVQMhDVGfLLQGgLNjVMgg");
	var mask_1_graphics_269 = new cjs.Graphics().p("A46H6QDnsaLWmQQLVmPMbDnQMcDnGPLUQGPLXjmMbg");
	var mask_1_graphics_270 = new cjs.Graphics().p("A4tG5QD5sVLfl/QLel+MWD5QMWD4F+LdQF/Lgj5MWg");
	var mask_1_graphics_271 = new cjs.Graphics().p("A4fF5QELsPLnlvQLmltMQEKQMRELFtLlQFvLokLMQg");
	var mask_1_graphics_272 = new cjs.Graphics().p("A4QE5QEcsJLvleQLvlcMKEcQMKEcFdLuQFdLwkcMKg");
	var mask_1_graphics_273 = new cjs.Graphics().p("A4AD5QEusCL3lNQL2lLMDEuQMDEtFML2QFNL3kuMEg");
	var mask_1_graphics_274 = new cjs.Graphics().p("A3vC7QE/r8L+k7QL+k6L8E/QL8E/E7L8QE7L/k/L9g");
	var mask_1_graphics_275 = new cjs.Graphics().p("A3dB8QFQr0MFkqQMFkpL1FRQL0FQEqMEQEpMFlQL1g");
	var mask_1_graphics_276 = new cjs.Graphics().p("A3KA/QFhrsMMkZQMLkXLtFhQLtFhEXMKQEZMNliLtg");
	var mask_1_graphics_277 = new cjs.Graphics().p("A22ACQFyrkMRkHQMRkGLlFyQLlFzEGMQQEHMSlyLlg");
	var mask_1_graphics_278 = new cjs.Graphics().p("A2ig6QGDrcMYj1QMWj0LdGDQLcGDD0MWQD1MYmDLcg");
	var mask_1_graphics_279 = new cjs.Graphics().p("A2Mh1QGTrUMdjjQMcjiLUGUQLTGTDiMbQDjMemTLTg");
	var mask_1_graphics_280 = new cjs.Graphics().p("A11iwQGjrKMijRQMhjQLKGjQLKGkDQMgQDRMjmkLKg");
	var mask_1_graphics_281 = new cjs.Graphics().p("A1ejqQG0rBMmi/QMmi9LAGzQLBG0C+MlQC+Mnm0LAg");
	var mask_1_graphics_282 = new cjs.Graphics().p("A1FkjQHDq3MqitQMqirK2HEQK3HDCsMpQCsMrnEK2g");
	var mask_1_graphics_283 = new cjs.Graphics().p("A0slcQHTqsMuiaQMtiZKsHTQKsHTCaMsQCaMvnTKsg");
	var mask_1_graphics_284 = new cjs.Graphics().p("A0SmTQHjqiMwiIQMxiGKiHiQKhHiCHMwQCHMyniKhg");
	var mask_1_graphics_285 = new cjs.Graphics().p("Az3nKQHyqWMzh2QM0h0KWHyQKXHxB0MyQB1M1nyKXg");
	var mask_1_graphics_286 = new cjs.Graphics().p("AzboAQIAqLM2hjQM3hhKKIAQKLIABiM1QBiM4oAKLg");
	var mask_1_graphics_287 = new cjs.Graphics().p("Ay+o1QIOp/M4hQQM5hPJ/IPQJ/IPBPM3QBQM5oPJ/g");
	var mask_1_graphics_288 = new cjs.Graphics().p("AyhppQIdpzM5g9QM7g8JzIdQJzIdA8M4QA9M7odJzg");
	var mask_1_graphics_289 = new cjs.Graphics().p("AyDqbQIrpnM7grQM7gpJnIrQJmIrAqM6QArM8osJmg");
	var mask_1_graphics_290 = new cjs.Graphics().p("AxkrNQI5paM7gYQM8gXJaI5QJaI5AXM6QAYM9o5Jag");
	var mask_1_graphics_291 = new cjs.Graphics().p("AxFr+QJHpNM7gFQM9gEJMJGQJNJGAFM7QAFM9pHJNg");
	var mask_1_graphics_292 = new cjs.Graphics().p("AwlsuQJUo/M7ANQM9API/JTQJAJUgOM6QgOM9pUJAg");
	var mask_1_graphics_293 = new cjs.Graphics().p("AwEtcQJhoyM6AgQM8AhIyJhQIyJgghM6QggM8phIzg");
	var mask_1_graphics_294 = new cjs.Graphics().p("AviuKQJsokM6AzQM7A0IkJtQIkJtgzM5QgzM7ptIlg");
	var mask_1_graphics_295 = new cjs.Graphics().p("AvAu2QJ5oWM4BFQM6BHIWJ5QIWJ6hGM3QhHM6p5IWg");
	var mask_1_graphics_296 = new cjs.Graphics().p("AuevhQKFoIM3BYQM4BaIHKFQIIKFhZM2QhZM4qFIIg");
	var mask_1_graphics_297 = new cjs.Graphics().p("At7wLQKRn5M1BrQM1BsH5KQQH5KRhsM0QhrM2qRH5g");
	var mask_1_graphics_298 = new cjs.Graphics().p("AtXw0QKcnqMyB9QMzB/HqKcQHqKbh+MyQh+MzqcHqg");
	var mask_1_graphics_299 = new cjs.Graphics().p("AsyxbQKnnbMuCQQMwCRHbKnQHaKliQMvQiQMxqnHag");
	var mask_1_graphics_300 = new cjs.Graphics().p("AsNyCQKxnLMsCiQMsCkHLKxQHLKwijMsQiiMtqyHLg");
	var mask_1_graphics_301 = new cjs.Graphics().p("AroynQK8m7MoC0QMoC2G7K8QG8K6i1MoQi1Mpq8G7g");
	var mask_1_graphics_302 = new cjs.Graphics().p("ArBzKQLEmsMkDHQMkDIGsLFQGrLFjHMjQjHMlrGGrg");
	var mask_1_graphics_303 = new cjs.Graphics().p("AqbztQLOmbMgDZQMfDaGbLPQGcLOjZMeQjaMgrPGcg");
	var mask_1_graphics_304 = new cjs.Graphics().p("Apz0OQLXmLMaDrQMaDsGLLYQGLLXjrMaQjsMbrYGLg");
	var mask_1_graphics_305 = new cjs.Graphics().p("ApM0tQLgl7MVD9QMVD+F6LhQF7Lfj9MUQj+MWrhF6g");
	var mask_1_graphics_306 = new cjs.Graphics().p("Aoj1MQLolpMPEOQMOEQFqLpQFqLokPMOQkPMQrpFpg");
	var mask_1_graphics_307 = new cjs.Graphics().p("An61pQLwlYMIEgQMJEhFYLxQFZLwkgMIQkhMJrxFZg");
	var mask_1_graphics_308 = new cjs.Graphics().p("AnR2EQL3lIMDEyQMBEzFIL4QFIL4kyMBQkzMCr5FIg");
	var mask_1_graphics_309 = new cjs.Graphics().p("Amn2eQL+k3L7FDQL7FEE2MAQE3L/lEL6QlDL7sAE3g");
	var mask_1_graphics_310 = new cjs.Graphics().p("Al923QMFklL0FUQLzFVElMHQElMGlVLyQlVL0sGElg");
	var mask_1_graphics_311 = new cjs.Graphics().p("AlT3OQMMkULsFlQLrFnETMNQEUMMlmLqQlmLssNEUg");
	var mask_1_graphics_312 = new cjs.Graphics().p("Ako3kQMSkCLkF2QLiF3ECMTQECMSl2LjQl3LjsTECg");
	var mask_1_graphics_313 = new cjs.Graphics().p("Aj934QMYjwLbGGQLaGIDwMYQDwMYmHLaQmILbsYDwg");
	var mask_1_graphics_314 = new cjs.Graphics().p("AjR4LQMdjeLSGWQLRGZDdMeQDeMdmXLQQmYLSseDeg");
	var mask_1_graphics_315 = new cjs.Graphics().p("Ail4dQMijMLIGnQLHGpDMMiQDMMimnLHQmoLJsjDMg");
	var mask_1_graphics_316 = new cjs.Graphics().p("Ah54tQMmi5K/G3QK+G4C5MnQC6Mmm3K+Qm4K/soC5g");
	var mask_1_graphics_317 = new cjs.Graphics().p("AhN47QMrioK0HHQK0HICnMrQCnMrnHKzQnHK1ssCng");
	var mask_1_graphics_318 = new cjs.Graphics().p("Agg5IQMuiVKqHWQKpHYCVMuQCVMunXKpQnXKqsvCVg");
	var mask_1_graphics_319 = new cjs.Graphics().p("AAM5UQMyiCKfHlQKeHnCDMxQCCMynlKeQnnKgsyCCg");
	var mask_1_graphics_320 = new cjs.Graphics().p("AA55eQM1hwKUH1QKTH2BwMzQBwM1n1KTQn2KUs0Bwg");
	var mask_1_graphics_321 = new cjs.Graphics().p("ABm5mQM3hdKJIDQKHIFBeM2QBdM3oDKHQoFKJs3Bdg");
	var mask_1_graphics_322 = new cjs.Graphics().p("ACT5tQM5hLJ9ISQJ8ITBKM4QBLM5oSJ8QoTJ9s5BKg");
	var mask_1_graphics_323 = new cjs.Graphics().p("ADB5yQM6g4JxIgQJvIhA4M5QA4M7ogJvQohJxs6A4g");
	var mask_1_graphics_324 = new cjs.Graphics().p("ADu52QM7gmJkIvQJkIvAlM6QAlM8ouJjQovJks7Alg");
	var mask_1_graphics_325 = new cjs.Graphics().p("AEb54QM8gTJYI8QJWI9ATM7QASM8o8JWQo8JXs9ATg");
	var mask_1_graphics_326 = new cjs.Graphics().p("AFI55QM9AAJKJJQJJJKAAM8QAAM8pJJJQpKJKs9AAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(187).to({graphics:mask_1_graphics_187,x:133,y:234.2}).wait(1).to({graphics:mask_1_graphics_188,x:135.2,y:234.2}).wait(1).to({graphics:mask_1_graphics_189,x:137.5,y:234.1}).wait(1).to({graphics:mask_1_graphics_190,x:139.7,y:234}).wait(1).to({graphics:mask_1_graphics_191,x:142,y:233.8}).wait(1).to({graphics:mask_1_graphics_192,x:144.2,y:233.6}).wait(1).to({graphics:mask_1_graphics_193,x:146.5,y:233.3}).wait(1).to({graphics:mask_1_graphics_194,x:148.7,y:233}).wait(1).to({graphics:mask_1_graphics_195,x:150.9,y:232.6}).wait(1).to({graphics:mask_1_graphics_196,x:153.2,y:232.1}).wait(1).to({graphics:mask_1_graphics_197,x:155.4,y:231.7}).wait(1).to({graphics:mask_1_graphics_198,x:157.6,y:231.1}).wait(1).to({graphics:mask_1_graphics_199,x:159.8,y:230.6}).wait(1).to({graphics:mask_1_graphics_200,x:161.9,y:229.9}).wait(1).to({graphics:mask_1_graphics_201,x:164.1,y:229.3}).wait(1).to({graphics:mask_1_graphics_202,x:166.2,y:228.5}).wait(1).to({graphics:mask_1_graphics_203,x:168.3,y:227.8}).wait(1).to({graphics:mask_1_graphics_204,x:170.4,y:226.9}).wait(1).to({graphics:mask_1_graphics_205,x:172.5,y:226.1}).wait(1).to({graphics:mask_1_graphics_206,x:174.6,y:225.1}).wait(1).to({graphics:mask_1_graphics_207,x:176.6,y:224.2}).wait(1).to({graphics:mask_1_graphics_208,x:178.7,y:223.2}).wait(1).to({graphics:mask_1_graphics_209,x:180.6,y:222.1}).wait(1).to({graphics:mask_1_graphics_210,x:182.6,y:221}).wait(1).to({graphics:mask_1_graphics_211,x:184.6,y:219.9}).wait(1).to({graphics:mask_1_graphics_212,x:186.5,y:218.7}).wait(1).to({graphics:mask_1_graphics_213,x:188.4,y:217.5}).wait(1).to({graphics:mask_1_graphics_214,x:190.2,y:216.2}).wait(1).to({graphics:mask_1_graphics_215,x:192.1,y:214.9}).wait(1).to({graphics:mask_1_graphics_216,x:193.9,y:213.5}).wait(1).to({graphics:mask_1_graphics_217,x:195.7,y:212.1}).wait(1).to({graphics:mask_1_graphics_218,x:197.4,y:210.7}).wait(1).to({graphics:mask_1_graphics_219,x:199.1,y:209.2}).wait(1).to({graphics:mask_1_graphics_220,x:200.8,y:207.7}).wait(1).to({graphics:mask_1_graphics_221,x:202.4,y:206.1}).wait(1).to({graphics:mask_1_graphics_222,x:204,y:204.6}).wait(1).to({graphics:mask_1_graphics_223,x:205.6,y:202.9}).wait(1).to({graphics:mask_1_graphics_224,x:207.1,y:201.3}).wait(1).to({graphics:mask_1_graphics_225,x:208.6,y:199.6}).wait(1).to({graphics:mask_1_graphics_226,x:210.1,y:197.8}).wait(1).to({graphics:mask_1_graphics_227,x:211.5,y:196.1}).wait(1).to({graphics:mask_1_graphics_228,x:212.9,y:194.3}).wait(1).to({graphics:mask_1_graphics_229,x:214.2,y:192.5}).wait(1).to({graphics:mask_1_graphics_230,x:215.5,y:190.6}).wait(1).to({graphics:mask_1_graphics_231,x:216.8,y:188.7}).wait(1).to({graphics:mask_1_graphics_232,x:218,y:186.8}).wait(1).to({graphics:mask_1_graphics_233,x:219.1,y:184.9}).wait(1).to({graphics:mask_1_graphics_234,x:220.3,y:182.9}).wait(1).to({graphics:mask_1_graphics_235,x:221.3,y:181}).wait(1).to({graphics:mask_1_graphics_236,x:222.4,y:178.9}).wait(1).to({graphics:mask_1_graphics_237,x:223.3,y:176.9}).wait(1).to({graphics:mask_1_graphics_238,x:224.3,y:174.9}).wait(1).to({graphics:mask_1_graphics_239,x:225.2,y:172.8}).wait(1).to({graphics:mask_1_graphics_240,x:226,y:170.7}).wait(1).to({graphics:mask_1_graphics_241,x:226.8,y:168.6}).wait(1).to({graphics:mask_1_graphics_242,x:227.6,y:166.4}).wait(1).to({graphics:mask_1_graphics_243,x:228.3,y:164.3}).wait(1).to({graphics:mask_1_graphics_244,x:228.9,y:162.1}).wait(1).to({graphics:mask_1_graphics_245,x:229.5,y:160}).wait(1).to({graphics:mask_1_graphics_246,x:230.1,y:157.8}).wait(1).to({graphics:mask_1_graphics_247,x:230.6,y:155.6}).wait(1).to({graphics:mask_1_graphics_248,x:231,y:153.3}).wait(1).to({graphics:mask_1_graphics_249,x:231.4,y:151.1}).wait(1).to({graphics:mask_1_graphics_250,x:231.8,y:148.9}).wait(1).to({graphics:mask_1_graphics_251,x:232.1,y:146.7}).wait(1).to({graphics:mask_1_graphics_252,x:232.4,y:144.4}).wait(1).to({graphics:mask_1_graphics_253,x:232.6,y:142.2}).wait(1).to({graphics:mask_1_graphics_254,x:232.7,y:139.9}).wait(1).to({graphics:mask_1_graphics_255,x:232.8,y:137.6}).wait(1).to({graphics:mask_1_graphics_256,x:232.9,y:135.4}).wait(1).to({graphics:mask_1_graphics_257,x:232.9,y:135.4}).wait(1).to({graphics:mask_1_graphics_258,x:232.9,y:137.6}).wait(1).to({graphics:mask_1_graphics_259,x:232.9,y:139.9}).wait(1).to({graphics:mask_1_graphics_260,x:232.9,y:142.2}).wait(1).to({graphics:mask_1_graphics_261,x:232.9,y:144.4}).wait(1).to({graphics:mask_1_graphics_262,x:232.9,y:146.6}).wait(1).to({graphics:mask_1_graphics_263,x:233,y:148.9}).wait(1).to({graphics:mask_1_graphics_264,x:233,y:151.1}).wait(1).to({graphics:mask_1_graphics_265,x:233,y:153.3}).wait(1).to({graphics:mask_1_graphics_266,x:233,y:155.5}).wait(1).to({graphics:mask_1_graphics_267,x:233.1,y:157.8}).wait(1).to({graphics:mask_1_graphics_268,x:233.1,y:159.9}).wait(1).to({graphics:mask_1_graphics_269,x:233.1,y:162.1}).wait(1).to({graphics:mask_1_graphics_270,x:233.1,y:164.3}).wait(1).to({graphics:mask_1_graphics_271,x:233.1,y:166.4}).wait(1).to({graphics:mask_1_graphics_272,x:233.1,y:168.6}).wait(1).to({graphics:mask_1_graphics_273,x:233.1,y:170.7}).wait(1).to({graphics:mask_1_graphics_274,x:233.1,y:172.8}).wait(1).to({graphics:mask_1_graphics_275,x:233.1,y:174.8}).wait(1).to({graphics:mask_1_graphics_276,x:233.1,y:176.9}).wait(1).to({graphics:mask_1_graphics_277,x:233.1,y:178.9}).wait(1).to({graphics:mask_1_graphics_278,x:233.1,y:180.9}).wait(1).to({graphics:mask_1_graphics_279,x:233.1,y:182.9}).wait(1).to({graphics:mask_1_graphics_280,x:233.1,y:184.9}).wait(1).to({graphics:mask_1_graphics_281,x:233,y:186.8}).wait(1).to({graphics:mask_1_graphics_282,x:233,y:188.7}).wait(1).to({graphics:mask_1_graphics_283,x:233,y:190.6}).wait(1).to({graphics:mask_1_graphics_284,x:233,y:192.4}).wait(1).to({graphics:mask_1_graphics_285,x:232.9,y:194.3}).wait(1).to({graphics:mask_1_graphics_286,x:232.9,y:196.1}).wait(1).to({graphics:mask_1_graphics_287,x:232.9,y:197.8}).wait(1).to({graphics:mask_1_graphics_288,x:232.9,y:199.5}).wait(1).to({graphics:mask_1_graphics_289,x:232.8,y:201.2}).wait(1).to({graphics:mask_1_graphics_290,x:232.8,y:202.9}).wait(1).to({graphics:mask_1_graphics_291,x:232.8,y:204.5}).wait(1).to({graphics:mask_1_graphics_292,x:232.8,y:206.1}).wait(1).to({graphics:mask_1_graphics_293,x:232.8,y:207.7}).wait(1).to({graphics:mask_1_graphics_294,x:232.8,y:209.2}).wait(1).to({graphics:mask_1_graphics_295,x:232.9,y:210.6}).wait(1).to({graphics:mask_1_graphics_296,x:232.9,y:212.1}).wait(1).to({graphics:mask_1_graphics_297,x:232.9,y:213.5}).wait(1).to({graphics:mask_1_graphics_298,x:232.9,y:214.8}).wait(1).to({graphics:mask_1_graphics_299,x:233,y:216.1}).wait(1).to({graphics:mask_1_graphics_300,x:233,y:217.4}).wait(1).to({graphics:mask_1_graphics_301,x:233,y:218.6}).wait(1).to({graphics:mask_1_graphics_302,x:233,y:219.8}).wait(1).to({graphics:mask_1_graphics_303,x:233.1,y:221}).wait(1).to({graphics:mask_1_graphics_304,x:233.1,y:222.1}).wait(1).to({graphics:mask_1_graphics_305,x:233.1,y:223.1}).wait(1).to({graphics:mask_1_graphics_306,x:233.1,y:224.1}).wait(1).to({graphics:mask_1_graphics_307,x:233.1,y:225.1}).wait(1).to({graphics:mask_1_graphics_308,x:233.1,y:226}).wait(1).to({graphics:mask_1_graphics_309,x:233.1,y:226.9}).wait(1).to({graphics:mask_1_graphics_310,x:233.1,y:227.7}).wait(1).to({graphics:mask_1_graphics_311,x:233.1,y:228.5}).wait(1).to({graphics:mask_1_graphics_312,x:233.1,y:229.2}).wait(1).to({graphics:mask_1_graphics_313,x:233.1,y:229.9}).wait(1).to({graphics:mask_1_graphics_314,x:233.1,y:230.5}).wait(1).to({graphics:mask_1_graphics_315,x:233.1,y:231.1}).wait(1).to({graphics:mask_1_graphics_316,x:233,y:231.6}).wait(1).to({graphics:mask_1_graphics_317,x:233,y:232.1}).wait(1).to({graphics:mask_1_graphics_318,x:233,y:232.5}).wait(1).to({graphics:mask_1_graphics_319,x:232.9,y:232.9}).wait(1).to({graphics:mask_1_graphics_320,x:232.9,y:233.2}).wait(1).to({graphics:mask_1_graphics_321,x:232.9,y:233.5}).wait(1).to({graphics:mask_1_graphics_322,x:232.9,y:233.7}).wait(1).to({graphics:mask_1_graphics_323,x:232.8,y:233.9}).wait(1).to({graphics:mask_1_graphics_324,x:232.8,y:234}).wait(1).to({graphics:mask_1_graphics_325,x:232.8,y:234.1}).wait(1).to({graphics:mask_1_graphics_326,x:232.8,y:234.1}).wait(124));

	// 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("AtP5aQKgApHmHMQIZH5AALKQAALKoZH6QjNDCjuB3");
	this.shape_2.setTransform(337.8,265.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("AtP6xQKgAqHmHMQIZH5AALJQAALLoZH5QmvGYpBBP");
	this.shape_3.setTransform(337.8,274.4);

	var maskedShapeInstanceList = [this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},187).to({state:[{t:this.shape_3}]},15).wait(248));

	// 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("AAAgOIAAAd");
	this.shape_4.setTransform(149.1,105.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(25,1,1).p("AAAAbIAAg1");
	this.shape_5.setTransform(149.1,106.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(25,1,1).p("AAAAnIAAhN");
	this.shape_6.setTransform(149.1,108);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(25,1,1).p("AAAAzIAAhl");
	this.shape_7.setTransform(149.1,109.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(25,1,1).p("AAAA/IAAh9");
	this.shape_8.setTransform(149.1,110.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(25,1,1).p("AAABLIAAiV");
	this.shape_9.setTransform(149.1,111.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(25,1,1).p("AAABXIAAiu");
	this.shape_10.setTransform(149.1,112.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(25,1,1).p("AAABkIAAjH");
	this.shape_11.setTransform(149.1,114);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(25,1,1).p("AAABwIAAje");
	this.shape_12.setTransform(149.1,115.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(25,1,1).p("AAAB8IAAj3");
	this.shape_13.setTransform(149.1,116.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(25,1,1).p("AAACIIAAkP");
	this.shape_14.setTransform(149.1,117.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(25,1,1).p("AAACUIAAkn");
	this.shape_15.setTransform(149.1,118.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(25,1,1).p("AAACgIAAk/");
	this.shape_16.setTransform(149.1,120);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(25,1,1).p("AAACsIAAlX");
	this.shape_17.setTransform(149.1,121.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(25,1,1).p("AAAC4IAAlv");
	this.shape_18.setTransform(149.1,122.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(25,1,1).p("AAADEIAAmH");
	this.shape_19.setTransform(149.1,123.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(25,1,1).p("AAADQIAAmf");
	this.shape_20.setTransform(149.1,124.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(25,1,1).p("AAADcIAAm3");
	this.shape_21.setTransform(149.1,126.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(25,1,1).p("AAADoIAAnP");
	this.shape_22.setTransform(149.1,127.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(25,1,1).p("AAAD0IAAnn");
	this.shape_23.setTransform(149.1,128.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(25,1,1).p("AAAEBIAAoA");
	this.shape_24.setTransform(149.1,129.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(25,1,1).p("AAAEMIAAoY");
	this.shape_25.setTransform(149.1,130.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(25,1,1).p("AAAEZIAAox");
	this.shape_26.setTransform(149.1,132.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(25,1,1).p("AAAElIAApJ");
	this.shape_27.setTransform(149.1,133.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(25,1,1).p("AAAExIAAph");
	this.shape_28.setTransform(149.1,134.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(25,1,1).p("AAAE9IAAp5");
	this.shape_29.setTransform(149.1,135.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(25,1,1).p("AAAFJIAAqR");
	this.shape_30.setTransform(149.1,136.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(25,1,1).p("AAAFVIAAqp");
	this.shape_31.setTransform(149.1,138.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(25,1,1).p("AAAFhIAArB");
	this.shape_32.setTransform(149.1,139.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(25,1,1).p("AAAFtIAArZ");
	this.shape_33.setTransform(149.1,140.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(25,1,1).p("AAAF5IAArx");
	this.shape_34.setTransform(149.1,141.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(25,1,1).p("AAAGFIAAsJ");
	this.shape_35.setTransform(149.1,143);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(25,1,1).p("AAAGRIAAsh");
	this.shape_36.setTransform(149.1,144.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(25,1,1).p("AAAGdIAAs5");
	this.shape_37.setTransform(149.1,145.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(25,1,1).p("AAAGpIAAtR");
	this.shape_38.setTransform(149.1,146.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(25,1,1).p("AAAG2IAAtr");
	this.shape_39.setTransform(149.1,147.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(25,1,1).p("AAAHBIAAuC");
	this.shape_40.setTransform(149.1,149);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(25,1,1).p("AAAHOIAAua");
	this.shape_41.setTransform(149.1,150.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(25,1,1).p("AAAHaIAAuz");
	this.shape_42.setTransform(149.1,151.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(25,1,1).p("AAAHmIAAvL");
	this.shape_43.setTransform(149.1,152.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(25,1,1).p("AAAHyIAAvj");
	this.shape_44.setTransform(149.1,153.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(25,1,1).p("AAAH+IAAv7");
	this.shape_45.setTransform(149.1,155);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(25,1,1).p("AAAIKIAAwT");
	this.shape_46.setTransform(149.1,156.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(25,1,1).p("AAAIWIAAwr");
	this.shape_47.setTransform(149.1,157.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(25,1,1).p("AAAIiIAAxD");
	this.shape_48.setTransform(149.1,158.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(25,1,1).p("AAAIuIAAxb");
	this.shape_49.setTransform(149.1,159.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(25,1,1).p("AAAI6IAAxz");
	this.shape_50.setTransform(149.1,161.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(25,1,1).p("AAAJGIAAyL");
	this.shape_51.setTransform(149.1,162.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(25,1,1).p("AAAJSIAAyj");
	this.shape_52.setTransform(149.1,163.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(25,1,1).p("AAAJfIAAy8");
	this.shape_53.setTransform(149.1,164.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(25,1,1).p("AAAJrIAAzV");
	this.shape_54.setTransform(149.1,165.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(25,1,1).p("AAAJ3IAAzt");
	this.shape_55.setTransform(149.1,167.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(25,1,1).p("AAAKDIAA0F");
	this.shape_56.setTransform(149.1,168.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(25,1,1).p("AAAKPIAA0d");
	this.shape_57.setTransform(149.1,169.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(25,1,1).p("AAAKbIAA01");
	this.shape_58.setTransform(149.1,170.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(25,1,1).p("AAAKnIAA1N");
	this.shape_59.setTransform(149.1,171.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(25,1,1).p("AAAKzIAA1l");
	this.shape_60.setTransform(149.1,173.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(25,1,1).p("AAAK/IAA19");
	this.shape_61.setTransform(149.1,174.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(25,1,1).p("AAALLIAA2V");
	this.shape_62.setTransform(149.1,175.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(25,1,1).p("AAALXIAA2t");
	this.shape_63.setTransform(149.1,176.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(25,1,1).p("AAALjIAA3F");
	this.shape_64.setTransform(149.1,178);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(25,1,1).p("AAALvIAA3d");
	this.shape_65.setTransform(149.1,179.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(25,1,1).p("AAAL7IAA31");
	this.shape_66.setTransform(149.1,180.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(25,1,1).p("AAAMHIAA4O");
	this.shape_67.setTransform(149.1,181.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(25,1,1).p("AAAMUIAA4n");
	this.shape_68.setTransform(149.1,182.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(25,1,1).p("AAAMfIAA4+");
	this.shape_69.setTransform(149.1,184);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(25,1,1).p("AAAMsIAA5X");
	this.shape_70.setTransform(149.1,185.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(25,1,1).p("AAAM4IAA5v");
	this.shape_71.setTransform(149.1,186.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(25,1,1).p("AAANEIAA6H");
	this.shape_72.setTransform(149.1,187.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(25,1,1).p("AAANQIAA6f");
	this.shape_73.setTransform(149.1,188.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(25,1,1).p("AAANcIAA63");
	this.shape_74.setTransform(149.1,190.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(25,1,1).p("AAANoIAA7P");
	this.shape_75.setTransform(149.1,191.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(25,1,1).p("AAAN0IAA7n");
	this.shape_76.setTransform(149.1,192.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(25,1,1).p("AAAOAIAA7/");
	this.shape_77.setTransform(149.1,193.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(25,1,1).p("AAAOMIAA8X");
	this.shape_78.setTransform(149.1,194.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(25,1,1).p("AAAOYIAA8v");
	this.shape_79.setTransform(149.1,196.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(25,1,1).p("AAAOkIAA9H");
	this.shape_80.setTransform(149.1,197.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(25,1,1).p("AAAOwIAA9f");
	this.shape_81.setTransform(149.1,198.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(25,1,1).p("AAAO9IAA95");
	this.shape_82.setTransform(149.1,199.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(25,1,1).p("AAAPJIAA+R");
	this.shape_83.setTransform(149.1,200.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(25,1,1).p("AAAPUIAA+o");
	this.shape_84.setTransform(149.1,202.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(25,1,1).p("AAAPhIAA/B");
	this.shape_85.setTransform(149.1,203.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(25,1,1).p("AAAPtIAA/Z");
	this.shape_86.setTransform(149.1,204.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(25,1,1).p("AAAP5IAA/x");
	this.shape_87.setTransform(149.1,205.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(25,1,1).p("AAAQFMAAAggJ");
	this.shape_88.setTransform(149.1,206.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(25,1,1).p("AAAQRMAAAggh");
	this.shape_89.setTransform(149.1,208.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(25,1,1).p("AAAQdMAAAgg5");
	this.shape_90.setTransform(149.1,209.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(25,1,1).p("AAAQpMAAAghR");
	this.shape_91.setTransform(149.1,210.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(25,1,1).p("AAAQ1MAAAghp");
	this.shape_92.setTransform(149.1,211.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(25,1,1).p("AAARBMAAAgiB");
	this.shape_93.setTransform(149.1,213);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(25,1,1).p("AAARNMAAAgiZ");
	this.shape_94.setTransform(149.1,214.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(25,1,1).p("AAARZMAAAgix");
	this.shape_95.setTransform(149.1,215.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(25,1,1).p("AAARlMAAAgjK");
	this.shape_96.setTransform(149.1,216.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(25,1,1).p("AAARyMAAAgjj");
	this.shape_97.setTransform(149.1,217.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(25,1,1).p("AAAR+MAAAgj7");
	this.shape_98.setTransform(149.1,219);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(25,1,1).p("AAASKMAAAgkT");
	this.shape_99.setTransform(149.1,220.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(25,1,1).p("AAASWMAAAgkr");
	this.shape_100.setTransform(149.1,221.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(25,1,1).p("AAASiMAAAglD");
	this.shape_101.setTransform(149.1,222.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(25,1,1).p("AAASuMAAAglb");
	this.shape_102.setTransform(149.1,223.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(25,1,1).p("AAAS6MAAAglz");
	this.shape_103.setTransform(149.1,225.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(25,1,1).p("AAATGMAAAgmL");
	this.shape_104.setTransform(149.1,226.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(25,1,1).p("AAATSMAAAgmj");
	this.shape_105.setTransform(149.1,227.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(25,1,1).p("AAATeMAAAgm7");
	this.shape_106.setTransform(149.1,228.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(25,1,1).p("AAATqMAAAgnT");
	this.shape_107.setTransform(149.1,229.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(25,1,1).p("AAAT2MAAAgnr");
	this.shape_108.setTransform(149.1,231.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(25,1,1).p("AAAUCMAAAgoD");
	this.shape_109.setTransform(149.1,232.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(25,1,1).p("AAAUPMAAAgod");
	this.shape_110.setTransform(149.1,233.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(25,1,1).p("AAAUbMAAAgo1");
	this.shape_111.setTransform(149.1,234.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(25,1,1).p("AAAUnMAAAgpN");
	this.shape_112.setTransform(149.1,235.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(25,1,1).p("AAAUyMAAAgpk");
	this.shape_113.setTransform(149.1,237.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(25,1,1).p("AAAU/MAAAgp9");
	this.shape_114.setTransform(149.1,238.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(25,1,1).p("AAAVLMAAAgqV");
	this.shape_115.setTransform(149.1,239.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(25,1,1).p("AAAVXMAAAgqt");
	this.shape_116.setTransform(149.1,240.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(25,1,1).p("AAAVjMAAAgrF");
	this.shape_117.setTransform(149.1,241.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(25,1,1).p("AAAVvMAAAgrd");
	this.shape_118.setTransform(149.1,243.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(25,1,1).p("AAAV7MAAAgr1");
	this.shape_119.setTransform(149.1,244.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(25,1,1).p("AAAWHMAAAgsN");
	this.shape_120.setTransform(149.1,245.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(25,1,1).p("AAAWTMAAAgsl");
	this.shape_121.setTransform(149.1,246.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(25,1,1).p("AAAWfMAAAgs9");
	this.shape_122.setTransform(149.1,248);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(25,1,1).p("AAAWrMAAAgtV");
	this.shape_123.setTransform(149.1,249.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(25,1,1).p("AAAW3MAAAgtt");
	this.shape_124.setTransform(149.1,250.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(25,1,1).p("AAAXDMAAAguG");
	this.shape_125.setTransform(149.1,251.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(25,1,1).p("AAAXQMAAAguf");
	this.shape_126.setTransform(149.1,252.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(25,1,1).p("AAAXcMAAAgu3");
	this.shape_127.setTransform(149.1,254);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(25,1,1).p("AAAXoMAAAgvP");
	this.shape_128.setTransform(149.1,255.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(25,1,1).p("AAAX0MAAAgvn");
	this.shape_129.setTransform(149.1,256.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(25,1,1).p("AAAYAMAAAgv/");
	this.shape_130.setTransform(149.1,257.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(25,1,1).p("AAAYMMAAAgwX");
	this.shape_131.setTransform(149.1,258.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(25,1,1).p("AAAYYMAAAgwv");
	this.shape_132.setTransform(149.1,260.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(25,1,1).p("AAAYkMAAAgxH");
	this.shape_133.setTransform(149.1,261.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(25,1,1).p("AAAYwMAAAgxf");
	this.shape_134.setTransform(149.1,262.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(25,1,1).p("AAAY8MAAAgx3");
	this.shape_135.setTransform(149.1,263.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(25,1,1).p("AAAZIMAAAgyP");
	this.shape_136.setTransform(149.1,264.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(25,1,1).p("AAAZUMAAAgyn");
	this.shape_137.setTransform(149.1,266.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(25,1,1).p("AAAZgMAAAgy/");
	this.shape_138.setTransform(149.1,267.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(25,1,1).p("AAAZtMAAAgzZ");
	this.shape_139.setTransform(149.1,268.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(25,1,1).p("AAAZ5MAAAgzw");
	this.shape_140.setTransform(149.1,269.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(25,1,1).p("AAAaFMAAAg0I");
	this.shape_141.setTransform(149.1,270.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(25,1,1).p("AAAaRMAAAg0g");
	this.shape_142.setTransform(149.1,272.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(25,1,1).p("AAAadMAAAg05");
	this.shape_143.setTransform(149.1,273.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(25,1,1).p("AAA6oMAAAA1R");
	this.shape_144.setTransform(149.1,274.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4}]},9).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).wait(301));

	// Base
	this.instance_4 = new lib.based("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(286.5,274.5);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(450));

	// Background
	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_145.setTransform(275,275,3.373,2.543);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_146.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_146},{t:this.shape_145}]}).wait(450));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(273.5,234.3,553,735);
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