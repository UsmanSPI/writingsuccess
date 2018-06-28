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


(lib.basec = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AwRUmQn6omAAsFQAAsAH+omQIBooLZAAQMJAAIIJkQAuA2AAA9QAABIg2A2Qg2A0hGAAQhNAAg2g+QmfnqprAAQpCAAmdG6QmcG8gBJ3QAAJ+GcG+QGcG/I+AAQJiAAGjniQA2g/BJABQBHgBA3A0QA4A3AABIQAAA/gtAxQoJJcsEAAQrXAAoBoug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154.8,-187.6,309.6,375.2);


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
	this.instance.setTransform(99.1,-112.4,1,1,113.3,0,0,0.3,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:84.9,guide:{path:[99,-112.3,65.8,-130,33.5,-130.4]}},31).to({regX:0.2,scaleX:1,scaleY:1,rotation:45.4,guide:{path:[33.4,-130.4,32.6,-130.4,31.7,-130.4,-17.4,-130.4,-53.2,-97.8]}},38).to({regX:0.1,rotation:10.3,guide:{path:[-53.1,-97.8,-55.5,-95.7,-57.8,-93.4,-87.1,-64,-93.3,-25.1]}},35).to({rotation:-10.3,guide:{path:[-93.2,-25.1,-94.9,-14.9,-94.9,-4,-94.9,10.8,-91.9,24.4]}},20).to({scaleX:1,scaleY:1,rotation:-29.3,guide:{path:[-92,24.5,-87,47.2,-73.6,66.5]}},18).to({regX:0,rotation:-46.9,guide:{path:[-73.6,66.5,-66.8,76.4,-57.8,85.4,-51.5,91.7,-44.8,97.5]}},18).to({rotation:-55.1,guide:{path:[-44.8,97.5,-37.3,103.9,-29.5,109.6]}},12).to({regX:-0.1,scaleX:1,scaleY:1,rotation:-57.1,guide:{path:[-29.6,109.6,-27.7,111,-25.8,112.3]}},4).to({scaleX:1,scaleY:1,rotation:-58.9,guide:{path:[-25.8,112.3,-23.9,113.6,-22.1,114.9]}},6).to({rotation:-59.9,guide:{path:[-22,114.8,-21.2,115.4,-20.4,115.9]}},7).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgWRAgDMAUMhBsQNmELGsMlQGpMmkLNmQkMNnskGqQnvEGoIAAQlGAAlPhng");
	var mask_graphics_1 = new cjs.Graphics().p("EgWBAgSMATLhCAQNqD+G4MeQG2Mfj+NqQj+NrsdG3Qn6EWoZAAQk2AAlBhdg");
	var mask_graphics_2 = new cjs.Graphics().p("EgVwAggMASJhCTQNuDxHEMXQHDMYjxNuQjwNvsXHDQoEEnoqAAQknAAkxhUg");
	var mask_graphics_3 = new cjs.Graphics().p("EgVfAguMARHhClQNxDjHQMQQHPMRjiNxQjjNzsQHPQoOE4o8AAQkXAAkhhKg");
	var mask_graphics_4 = new cjs.Graphics().p("EgVFAg6MAQEhC1QN1DVHcMJQHcMJjVN1QjVN2sJHcQoYFJpNAAQkIAAkRhCg");
	var mask_graphics_5 = new cjs.Graphics().p("EgUkAhGMAPChDFQN4DHHoMCQHoMCjHN4QjIN5sAHoQojFbpfAAQj3AAkCg6g");
	var mask_graphics_6 = new cjs.Graphics().p("EgUCAhRMAN+hDTQN7C5H1L6QHzL6i5N7Qi5N8r6H0QorFtpyAAQjnAAjxgyg");
	var mask_graphics_7 = new cjs.Graphics().p("EgThAhbMAM8hDgQN+CrIALyQH/LyirN+QisN/rxH/Qo1GAqEAAQjXAAjhgrg");
	var mask_graphics_8 = new cjs.Graphics().p("EgS/AhlMAL4hDtQOBCdIMLqQIKLqidOBQidOBrqILQo9GTqXAAQjHAAjQgkg");
	var mask_graphics_9 = new cjs.Graphics().p("EgSdAhtMAK1hD4QODCQIXLhQIWLiiPODQiQOErhIWQpFGnqrAAQi3AAi+gfg");
	var mask_graphics_10 = new cjs.Graphics().p("EgR7Ah1MAJxhECQOFCBIjLZQIiLaiCOFQiBOGrZIiQpNG6q/AAQimAAitgZg");
	var mask_graphics_11 = new cjs.Graphics().p("EgRZAh8MAIthELQOHBzIuLQQItLShzOHQhzOHrQIuQpVHOrTAAQiWAAibgUg");
	var mask_graphics_12 = new cjs.Graphics().p("EgQ2AiDMAHphEUQOIBlI5LIQI4LIhlOJQhlOJrHI5QpcHjroAAQiFAAiIgPg");
	var mask_graphics_13 = new cjs.Graphics().p("EgQUAiIMAGlhEbQOKBYJEK+QJDLAhXOKQhXOLq/JDQpiH5r+AAQhzAAh2gMg");
	var mask_graphics_14 = new cjs.Graphics().p("EgPyAiNMAFhhEhQOLBJJPK2QJOK2hJOLQhJONq1JOQppIOsUAAQhhAAhkgIg");
	var mask_graphics_15 = new cjs.Graphics().p("EgPQAiRMAEdhEmQOMA7JaKsQJZKtg7ONQg7ONqsJZQpvIksqAAQhQAAhRgFg");
	var mask_graphics_16 = new cjs.Graphics().p("EgOtAiUMADYhEqQONAtJkKjQJkKjgtONQgtOPqiJjQp2I7tAAAQg9AAg+gDg");
	var mask_graphics_17 = new cjs.Graphics().p("EgOLAiWMACUhEsQONAeJvKZQJuKagfOOQgeOPqZJuQp7JRtYAAIhVgBg");
	var mask_graphics_18 = new cjs.Graphics().p("EgNoAiXMABPhEuQONARJ6KPQJ4KQgROOQgQOPqPJ4QqAJqtxAAIgtgBg");
	var mask_graphics_19 = new cjs.Graphics().p("EgNGAiYMAAKhEvQOPACKDKGQKCKGgCOOQgCOPqGKDQqEKBuKAAIgGAAg");
	var mask_graphics_20 = new cjs.Graphics().p("EgNegiXQOOgMKOJ8QKMJ8AMOPQAMOOp7KMQp9KOuOAMg");
	var mask_graphics_21 = new cjs.Graphics().p("EgOAgiWQOOgaKXJxQKWJzAaOOQAaOOpxKWQpyKXuOAbg");
	var mask_graphics_22 = new cjs.Graphics().p("EgOigiUQOOgoKgJnQKgJoAoOOQAoONpmKgQpoKhuNAog");
	var mask_graphics_23 = new cjs.Graphics().p("EgPEgiRQONg2KpJcQKqJdA2OOQA3OMpcKpQpeKruMA2g");
	var mask_graphics_24 = new cjs.Graphics().p("EgPngiNQONhFKzJSQKyJSBFONQBEOLpRKzQpSK0uMBEg");
	var mask_graphics_25 = new cjs.Graphics().p("EgQJgiJQOMhTK7JHQK8JIBTOLQBTOLpHK7QpIK9uKBTg");
	var mask_graphics_26 = new cjs.Graphics().p("EgQrgiDQOKhhLFI7QLFI9BgOKQBhOJo7LFQo9LGuJBhg");
	var mask_graphics_27 = new cjs.Graphics().p("EgRNgh9QOIhvLOIwQLOIyBvOIQBvOIoxLNQoyLPuHBvg");
	var mask_graphics_28 = new cjs.Graphics().p("EgRvgh3QOHh9LWImQLWImB9OHQB9OFolLWQomLYuGB9g");
	var mask_graphics_29 = new cjs.Graphics().p("EgSRghvQOFiLLeIaQLfIbCLOEQCLOEoaLeQobLguDCMg");
	var mask_graphics_30 = new cjs.Graphics().p("EgSzghmQODiaLmIPQLnIPCaODQCZOBoPLnQoPLouBCZg");
	var mask_graphics_31 = new cjs.Graphics().p("EgTUghdQN/inLvICQLvIECoOAQCnN/oDLvQoELwt/Cng");
	var mask_graphics_32 = new cjs.Graphics().p("EgT2ghTQN9i1L3H3QL3H4C1N9QC1N8n3L3Qn4L4t8C1g");
	var mask_graphics_33 = new cjs.Graphics().p("EgUXghIQN6jDL+HrQL/HsDDN6QDDN5nrL/QnsMAt5DDg");
	var mask_graphics_34 = new cjs.Graphics().p("EgU5gg9QN3jRMGHfQMHHhDQN3QDRN2nfMGQngMHt2DRg");
	var mask_graphics_35 = new cjs.Graphics().p("EgVaggxQN0jeMNHTQMOHUDeN0QDfNynTMOQnUMPtzDeg");
	var mask_graphics_36 = new cjs.Graphics().p("EgVrggjQNwjtMVHHQMVHIDsNwQDsNvnHMVQnHMWtvDsg");
	var mask_graphics_37 = new cjs.Graphics().p("EgV7ggWQNsj5MbG6QMcG8D6NsQD6Nrm6McQm8MdtrD6g");
	var mask_graphics_38 = new cjs.Graphics().p("EgWMggHQNokHMjGtQMiGwEINoQEHNnmuMjQmvMktnEHg");
	var mask_graphics_39 = new cjs.Graphics().p("A2d/4QNkkVMqGiQMpGiEVNkQEVNjmhMqQmjMqtjEVg");
	var mask_graphics_40 = new cjs.Graphics().p("A2t/nQNgkjMvGVQMwGWEjNfQEiNfmVMvQmVMxtfEjg");
	var mask_graphics_41 = new cjs.Graphics().p("A29/XQNbkwM2GIQM2GKEvNbQEwNamIM1QmJM3taEwg");
	var mask_graphics_42 = new cjs.Graphics().p("A3N/FQNWk9M8F7QM8F8E9NWQE9NWl7M7Ql8M9tWE+g");
	var mask_graphics_43 = new cjs.Graphics().p("A3d+zQNRlKNBFuQNCFvFLNRQFKNRluNBQlvNDtRFLg");
	var mask_graphics_44 = new cjs.Graphics().p("A3t+gQNLlXNIFhQNHFiFYNMQFYNLliNHQliNJtMFXg");
	var mask_graphics_45 = new cjs.Graphics().p("A39+MQNGllNNFUQNNFWFkNGQFlNFlUNNQlVNOtGFlg");
	var mask_graphics_46 = new cjs.Graphics().p("A4N94QNBlxNSFGQNSFJFyNAQFxNAlHNSQlHNTtBFyg");
	var mask_graphics_47 = new cjs.Graphics().p("A4c9iQM6l/NXE5QNXE7F/M7QF/M6k6NXQk6NYs7F/g");
	var mask_graphics_48 = new cjs.Graphics().p("A4s9MQM1mMNcEsQNbEuGMM1QGLM0ksNbQktNds1GLg");
	var mask_graphics_49 = new cjs.Graphics().p("A4782QMumYNhEeQNgEhGYMuQGZMvkfNfQkgNisvGYg");
	var mask_graphics_50 = new cjs.Graphics().p("A5K8fQMomkNkERQNlESGlMoQGlMpkSNjQkSNmsoGlg");
	var mask_graphics_51 = new cjs.Graphics().p("A5Z8HQMhmxNpEEQNpEFGxMhQGyMikENnQkFNqshGyg");
	var mask_graphics_52 = new cjs.Graphics().p("A5o7uQMbm+NsD2QNtD4G+MaQG+Mbj3NrQj3NvsaG9g");
	var mask_graphics_53 = new cjs.Graphics().p("A537VQMUnKNwDoQNxDqHKMUQHKMUjpNvQjpNysTHKg");
	var mask_graphics_54 = new cjs.Graphics().p("A6F67QMMnWN1DbQNzDcHWMMQHXMMjbNzQjcN1sMHXg");
	var mask_graphics_55 = new cjs.Graphics().p("A6U6gQMFniN4DMQN3DPHiMFQHjMFjON2QjNN4sFHjg");
	var mask_graphics_56 = new cjs.Graphics().p("A6i6FQL9nuN7C/QN6DAHvL+QHuL9i/N5QjAN8r9Hug");
	var mask_graphics_57 = new cjs.Graphics().p("A6w5pQL1n6N+CxQN9CzH6L1QH7L2iyN8QiyN+r1H7g");
	var mask_graphics_58 = new cjs.Graphics().p("A6+5MQLtoGOBCjQN/ClIGLtQIGLuijN/QikOBruIGg");
	var mask_graphics_59 = new cjs.Graphics().p("A7M4vQLmoRODCVQOBCXISLlQISLliWOCQiWODrlISg");
	var mask_graphics_60 = new cjs.Graphics().p("A7Z4RQLdodOFCHQOECJIdLdQIdLdiIOEQiIOGrdIdg");
	var mask_graphics_61 = new cjs.Graphics().p("A7n3yQLVooOHB5QOGB6IoLVQIpLUh6OGQh6OIrUIog");
	var mask_graphics_62 = new cjs.Graphics().p("A703TQLMozOJBrQOHBsI0LMQI0LMhsOHQhsOKrLIzg");
	var mask_graphics_63 = new cjs.Graphics().p("A8B2zQLCo+OLBcQOJBfI/LDQI/LDheOJQhdOLrDI/g");
	var mask_graphics_64 = new cjs.Graphics().p("A8P2SQK6pKOMBPQOLBQJKK6QJJK6hPOKQhPONq6JJg");
	var mask_graphics_65 = new cjs.Graphics().p("A8b1xQKwpUONBAQOMBCJVKxQJUKxhBOLQhBOOqxJUg");
	var mask_graphics_66 = new cjs.Graphics().p("A8o1PQKnpfOOAyQONA0JfKoQJfKngzOMQgzOPqnJfg");
	var mask_graphics_67 = new cjs.Graphics().p("A810tQKeppOPAkQONAmJqKeQJpKegkOMQglOQqeJpg");
	var mask_graphics_68 = new cjs.Graphics().p("A9B0KQKUp0OPAWQOOAYJ0KUQJ0KVgXONQgXOQqUJzg");
	var mask_graphics_69 = new cjs.Graphics().p("A9NzmQKKp+OPAIQOOAJJ/KLQJ+KKgJONQgIOQqLJ+g");
	var mask_graphics_70 = new cjs.Graphics().p("A9ZzCQKAqIOPgGQOOgFKJKAQKIKBAFONQAGOQqAKIg");
	var mask_graphics_71 = new cjs.Graphics().p("A9lydQJ2qSOPgVQOOgSKSJ2QKSJ2AUONQAUOQp3KSg");
	var mask_graphics_72 = new cjs.Graphics().p("A9xx4QJsqbOOgjQOOghKcJsQKcJsAhOMQAiOQprKcg");
	var mask_graphics_73 = new cjs.Graphics().p("A99xSQJhqlOOgxQONgvKmJhQKlJiAwOMQAxOPpiKlg");
	var mask_graphics_74 = new cjs.Graphics().p("A+IwrQJWqvONg/QONg9KuJXQKvJWA+OMQA/OOpXKug");
	var mask_graphics_75 = new cjs.Graphics().p("A+UwEQJMq4OMhNQOLhMK4JMQK5JNBMOKQBMONpMK4g");
	var mask_graphics_76 = new cjs.Graphics().p("A+fvcQJBrBOLhcQOKhZLBJBQLBJBBaOJQBbOMpBLBg");
	var mask_graphics_77 = new cjs.Graphics().p("A+qu0QI2rKOJhpQOJhoLKI2QLKI2BoOHQBpOLo2LJg");
	var mask_graphics_78 = new cjs.Graphics().p("A+0uLQIqrTOIh4QOGh1LTIrQLTIqB2OGQB3OIoqLTg");
	var mask_graphics_79 = new cjs.Graphics().p("A+/tiQIgrbOFiGQOFiELbIgQLbIfCFOEQCFOGogLcg");
	var mask_graphics_80 = new cjs.Graphics().p("A/Js5QIUrjODiUQODiSLjIVQLkIUCTOBQCSOEoULkg");
	var mask_graphics_81 = new cjs.Graphics().p("A/TsOQIIrsOBiiQOAigLsIJQLsIJCgN/QChOBoILsg");
	var mask_graphics_82 = new cjs.Graphics().p("A/drkQH8r0N/ivQN9iuL0H9QL0H9CvN8QCuOAn8Lzg");
	var mask_graphics_83 = new cjs.Graphics().p("A/nq5QHxr7N7i+QN7i7L8HxQL8HxC8N5QC9N9nxL7g");
	var mask_graphics_84 = new cjs.Graphics().p("A/wqNQHlsEN4jLQN4jJMDHlQMDHlDLN2QDKN6nlMDg");
	var mask_graphics_85 = new cjs.Graphics().p("A/6phQHZsLN1jZQN1jYMLHZQMKHZDZN0QDYN2nZMLg");
	var mask_graphics_86 = new cjs.Graphics().p("EggDgI1QHNsSNyjnQNxjlMSHNQMSHNDmNwQDmNynNMSg");
	var mask_graphics_87 = new cjs.Graphics().p("EggLgIJQHAsZNuj0QNtjzMaHBQMZHADzNtQD0NunAMZg");
	var mask_graphics_88 = new cjs.Graphics().p("EggUgHcQG0sfNqkDQNqkAMgG0QMgG0EBNqQECNqm0Mgg");
	var mask_graphics_89 = new cjs.Graphics().p("EggcgGuQGosnNmkPQNlkOMnGnQMmGoEPNlQEPNmmnMng");
	var mask_graphics_90 = new cjs.Graphics().p("EggkgGAQGbstNikeQNhkbMtGbQMtGbEcNhQEdNhmbMtg");
	var mask_graphics_91 = new cjs.Graphics().p("EggsgFSQGPs0NdkqQNckpM0GOQMzGOEqNdQEqNdmOMzg");
	var mask_graphics_92 = new cjs.Graphics().p("EggzgEkQGBs5NZk4QNZk3M4GCQM6GBE3NYQE3NYmBM6g");
	var mask_graphics_93 = new cjs.Graphics().p("Egg6gD1QF0s/NUlGQNUlDM+F0QNAF1FENSQFFNUl1M/g");
	var mask_graphics_94 = new cjs.Graphics().p("EghBgDGQFotFNOlTQNOlRNFFoQNFFoFRNNQFSNOlnNGg");
	var mask_graphics_95 = new cjs.Graphics().p("EghIgCXQFbtKNJlgQNJleNKFbQNKFaFfNIQFfNJlaNLg");
	var mask_graphics_96 = new cjs.Graphics().p("EghOgBnQFNtQNDltQNElrNPFOQNQFNFsNDQFsNDlNNQg");
	var mask_graphics_97 = new cjs.Graphics().p("EghUgA3QFAtVM9l6QM+l4NUFAQNVFAF5M9QF5M+lANVg");
	var mask_graphics_98 = new cjs.Graphics().p("EghagAHQEztaM3mGQM4mFNZEzQNaEyGGM3QGGM4kzNag");
	var mask_graphics_99 = new cjs.Graphics().p("EghgAApQEmteMxmTQMymSNeElQNeEmGSMxQGTMxklNeg");
	var mask_graphics_100 = new cjs.Graphics().p("EghlABZQEYtiMrmgQMrmeNjEYQNjEYGfMqQGfMrkYNjg");
	var mask_graphics_101 = new cjs.Graphics().p("EghqACKQEKtmMlmtQMlmrNmELQNnEKGsMkQGsMkkKNog");
	var mask_graphics_102 = new cjs.Graphics().p("EghvAC7QD9tqMem5QMem4NqD9QNsD9G4MdQG4Mej8Nrg");
	var mask_graphics_103 = new cjs.Graphics().p("EghzADsQDvtuMXnFQMXnENuDvQNvDwHFMWQHFMWjvNvg");
	var mask_graphics_104 = new cjs.Graphics().p("Egh3AEeQDhtyMPnRQMRnQNyDhQNyDhHRMPQHRMQjhNzg");
	var mask_graphics_105 = new cjs.Graphics().p("Egh7AFQQDTt1MIneQMJncN2DTQN2DUHcMIQHeMIjUN2g");
	var mask_graphics_106 = new cjs.Graphics().p("Egh/AGCQDGt5MAnqQMCnoN4DGQN6DGHoMAQHqMBjGN5g");
	var mask_graphics_107 = new cjs.Graphics().p("EgiCAG0QC4t8L4n1QL6n1N8C4QN8C4H0L5QH2L5i4N8g");
	var mask_graphics_108 = new cjs.Graphics().p("EgiFAHmQCqt+LwoCQLyoAN+CqQOACqIALxQIBLxiqN/g");
	var mask_graphics_109 = new cjs.Graphics().p("EgiIAIYQCcuBLpoNQLpoLOBCcQOCCcIMLpQINLoicOCg");
	var mask_graphics_110 = new cjs.Graphics().p("EgiLAJLQCOuDLhoZQLhoXODCOQOECOIYLgQIYLhiOOEg");
	var mask_graphics_111 = new cjs.Graphics().p("EgiNAJ9QCAuFLYokQLZojOFCBQOGCAIjLYQIkLYiAOGg");
	var mask_graphics_112 = new cjs.Graphics().p("EgiPAKwQByuHLPovQLRouOHByQOIByIuLPQIvLQhyOIg");
	var mask_graphics_113 = new cjs.Graphics().p("EgiRALjQBkuJLHo6QLHo5OJBkQOKBkI5LGQI6LHhkOJg");
	var mask_graphics_114 = new cjs.Graphics().p("EgiTAMWQBWuKK+pGQK/pEOKBWQOLBWJEK9QJGK+hWOLg");
	var mask_graphics_115 = new cjs.Graphics().p("EgiUANJQBIuMK0pQQK2pPOLBIQONBIJPK0QJQK1hIOMg");
	var mask_graphics_116 = new cjs.Graphics().p("EgiVAN8QA6uNKrpbQKspZONA5QONA6JaKrQJbKrg6OOg");
	var mask_graphics_117 = new cjs.Graphics().p("EgiWAOvQAsuOKhplQKjpkONArQOPAsJkKiQJlKhgrOOg");
	var mask_graphics_118 = new cjs.Graphics().p("EgiWAPiQAduPKYpvQKZpuOOAdQOPAdJuKYQJwKZgdOOg");
	var mask_graphics_119 = new cjs.Graphics().p("EgiXAQVQAPuPKPp5QKPp5OOAPQOPAPJ5KPQJ7KOgQOPg");
	var mask_graphics_120 = new cjs.Graphics().p("EgiXARJQABuPKEqEQKGqDOOABQOPABKDKEQKFKFgBOPg");
	var mask_graphics_121 = new cjs.Graphics().p("A4qnAQJ8qNOPgOQOOgNKNJ6QKPJ7ANOPMhEvABAQgNuPJ6qNg");
	var mask_graphics_122 = new cjs.Graphics().p("A5Bm5QJyqWOOgcQOOgbKXJwQKYJwAcOOMhEtACFQgcuPJwqXg");
	var mask_graphics_123 = new cjs.Graphics().p("A5XmwQJnqhOOgqQONgpKhJlQKhJmAqOOMhEqADJQgquOJmqgg");
	var mask_graphics_124 = new cjs.Graphics().p("A5tmoQJcqqOOg4QOMg4KqJbQKrJdA4OMMhEmAEOQg4uOJbqqg");
	var mask_graphics_125 = new cjs.Graphics().p("A6CmfQJRqzONhGQOLhGK0JQQK0JSBGOLMhEiAFSQhGuNJRqzg");
	var mask_graphics_126 = new cjs.Graphics().p("A6XmWQJHq8OLhUQOLhUK8JFQK+JHBUOKMhEcAGWQhUuLJFq9g");
	var mask_graphics_127 = new cjs.Graphics().p("A6rmMQI8rGOKhiQOJhiLFI7QLHI7BiOJMhEVAHaQhiuKI6rFg");
	var mask_graphics_128 = new cjs.Graphics().p("A6+mCQIxrOOIhxQOIhwLOIwQLPIwBxOHMhEOAIeQhwuIIvrOg");
	var mask_graphics_129 = new cjs.Graphics().p("A7Ql4QIlrXOHh+QOFh+LXIkQLYIlB/OFMhEFAJjQh+uHIkrXg");
	var mask_graphics_130 = new cjs.Graphics().p("A7iltQIarfOFiNQODiMLfIZQLhIaCMODMhD6AKmQiNuEIZrgg");
	var mask_graphics_131 = new cjs.Graphics().p("A7zliQIPrnOCibQOBiaLnINQLpIPCbOAMhDwALqQiauCINrog");
	var mask_graphics_132 = new cjs.Graphics().p("A8DlWQIDrwN/ioQN/ipLwICQLxIDCoN+MhDjAMtQipt/ICrwg");
	var mask_graphics_133 = new cjs.Graphics().p("A8TlKQH4r4N8i2QN8i3L4H2QL5H3C2N8MhDWANwQi2t9H1r3g");
	var mask_graphics_134 = new cjs.Graphics().p("A8ik+QHssAN6jEQN4jEMAHqQMAHrDEN5MhDHAOzQjEt6Hpr/g");
	var mask_graphics_135 = new cjs.Graphics().p("A8wkyQHgsHN2jSQN2jSMHHeQMIHfDSN2MhC5AP2QjSt3HesHg");
	var mask_graphics_136 = new cjs.Graphics().p("A89klQHTsONzjgQNyjgMPHSQMPHTDgNyMhCoAQ5Qjgt0HSsOg");
	var mask_graphics_137 = new cjs.Graphics().p("A9KkYQHHsVNwjuQNujtMWHGQMWHGDuNvMhCXAR6QjutvHGsWg");
	var mask_graphics_138 = new cjs.Graphics().p("A9WkKQG6sdNsj7QNrj7McG5QMeG7D7NqMhCEAS9Qj7tsG5scg");
	var mask_graphics_139 = new cjs.Graphics().p("A9ij8QGvskNnkIQNnkJMjGtQMlGtEJNnMhByAT/QkItoGssjg");
	var mask_graphics_140 = new cjs.Graphics().p("A9sjuQGhsqNkkXQNjkWMpGhQMrGhEXNiMhBdAVAQkWtkGgspg");
	var mask_graphics_141 = new cjs.Graphics().p("A92jgQGVswNfkkQNekkMwGUQMyGVEjNeMhBHAWAQkktfGUswg");
	var mask_graphics_142 = new cjs.Graphics().p("A9/jRQGIs3NakxQNakxM2GHQM4GIExNaMhAxAXBQkxtbGHs2g");
	var mask_graphics_143 = new cjs.Graphics().p("A+IjCQF7s9NWk+QNVk/M8F7QM+F6E+NWMhAZAYBQk/tWF6s8g");
	var mask_graphics_144 = new cjs.Graphics().p("A+QizQFvtCNQlMQNQlMNCFuQNDFtFMNRMhABAZBQlMtRFttCg");
	var mask_graphics_145 = new cjs.Graphics().p("A+XijQFhtINMlZQNKlZNIFgQNJFhFZNLMg/oAaBQlZtMFgtHg");
	var mask_graphics_146 = new cjs.Graphics().p("A+diTQFUtONGlmQNFlmNNFTQNOFUFmNGMg/NAa/QlmtFFTtNg");
	var mask_graphics_147 = new cjs.Graphics().p("A+jiDQFHtTNAlzQM/lzNTFGQNTFHFzNAMg+yAb+QlztAFGtSg");
	var mask_graphics_148 = new cjs.Graphics().p("A+ohzQE6tXM6mAQM5mANYE5QNYE5GAM6Mg+VAc9QmAs7E4tXg");
	var mask_graphics_149 = new cjs.Graphics().p("A+shiQEstcM0mNQM1mNNbEsQNdErGNM1Mg94Ad6QmNs0Ertcg");
	var mask_graphics_150 = new cjs.Graphics().p("A+whRQEfthMumZQMumaNgEeQNiEeGZMuMg9aAe4QmZsuEdtgg");
	var mask_graphics_151 = new cjs.Graphics().p("A+zhAQEStlMnmmQMommNkEQQNmERGmMoMg86Af1QmmsoEPtlg");
	var mask_graphics_152 = new cjs.Graphics().p("A+1guQEEtqMhmyQMhmzNoEDQNqEDGzMhMg8aAgyQmzshECtpg");
	var mask_graphics_153 = new cjs.Graphics().p("A+2gcQD2tuMam/QMam/NsD1QNvD2G+MaMg75AhtQm/saD1tsg");
	var mask_graphics_154 = new cjs.Graphics().p("A+3gKQDptxMTnMQMTnLNvDoQNzDnHLMTMg7XAipQnMsTDntwg");
	var mask_graphics_155 = new cjs.Graphics().p("A+2AHQDat0MMnXQMMnYNzDaQN2DaHXMMMg60AjkQnYsMDat1g");
	var mask_graphics_156 = new cjs.Graphics().p("A+2AaQDOt3MEnkQMEnjN2DMQN5DMHkMEMg6QAkeQnksEDLt4g");
	var mask_graphics_157 = new cjs.Graphics().p("A+0AsQC/t6L9nvQL9nwN5C+QN8C/HvL9Mg5rAlXQnvr8C9t8g");
	var mask_graphics_158 = new cjs.Graphics().p("A+yA/QCyt8L1n8QL0n7N9CwQN+CxH8L0Mg5GAmRQn7r0Cvt/g");
	var mask_graphics_159 = new cjs.Graphics().p("A+vBTQCkuALtoHQLtoHN+CiQOCCjIHLtMg4fAnJQoHrsChuBg");
	var mask_graphics_160 = new cjs.Graphics().p("A+rBmQCWuCLkoSQLloTOBCUQOECVITLlMg34AoBQoSrlCTuDg");
	var mask_graphics_161 = new cjs.Graphics().p("A+mB6QCHuELdoeQLcoeODCGQOHCHIeLcMg3QAo5QoerdCGuFg");
	var mask_graphics_162 = new cjs.Graphics().p("A+hCOQB6uGLToqQLUopOGB4QOIB5IpLUMg2mApvQoqrUB4uHg");
	var mask_graphics_163 = new cjs.Graphics().p("A+bCiQBsuILLo0QLLo1OHBqQOKBrI0LLMg18AqlQo0rLBpuJg");
	var mask_graphics_164 = new cjs.Graphics().p("A+UC3QBduKLCo/QLDpAOIBcQOMBcJALDMg1SArbQo/rCBbuLg");
	var mask_graphics_165 = new cjs.Graphics().p("A+MDMQBPuLK5pLQK5pLOKBPQONBOJKK5Mg0lAsQQpLq5BOuMg");
	var mask_graphics_166 = new cjs.Graphics().p("A+EDhQBBuMKwpWQKwpVOLBAQOOBAJVKwMgz5AtEQpVqwA/uNg");
	var mask_graphics_167 = new cjs.Graphics().p("A97D2QAzuNKmpgQKnpgOMAyQOPAxJgKnMgzMAt3QpgqmAxuOg");
	var mask_graphics_168 = new cjs.Graphics().p("A9xELQAkuNKdprQKdpqONAjQOQAkJqKdMgyeAuqQpqqdAjuPg");
	var mask_graphics_169 = new cjs.Graphics().p("A9nEhQAXuOKTp1QKTp1OOAWQOPAVJ1KTMgxvAvcQp0qTAUuPg");
	var mask_graphics_170 = new cjs.Graphics().p("A9bE3QAIuOKJqAQKKp/ONAIQOQAHJ/KJMgw/AwNQp/qJAHuPg");
	var mask_graphics_171 = new cjs.Graphics().p("A9PFNQgGuOJ/qJQKAqKONgGQOQgHKJJ/MgwPAw+QqJqAgHuPg");
	var mask_graphics_172 = new cjs.Graphics().p("A9CFjQgUuOJ1qTQJ1qTONgVQOQgVKTJ1MgveAxtQqTp1gVuPg");
	var mask_graphics_173 = new cjs.Graphics().p("A81F6QgiuOJrqcQJrqdONgjQOPgkKdJrMgusAycQqdprgkuOg");
	var mask_graphics_174 = new cjs.Graphics().p("A8mGRQgxuNJhqnQJgqmOMgxQOPgyKmJhMgt5AzKQqmpggyuOg");
	var mask_graphics_175 = new cjs.Graphics().p("A8XGoQg/uMJWqwQJWqwOLg/QOOhAKvJWMgtFAz3QqwpVhAuNg");
	var mask_graphics_176 = new cjs.Graphics().p("A8IG/QhMuLJLq5QJLq5OKhOQONhNK4JLMgsRA0kQq5pLhPuMg");
	var mask_graphics_177 = new cjs.Graphics().p("A73HWQhbuKJArBQJArCOJhcQOMhcLBJAMgrdA1QQrBpAhduLg");
	var mask_graphics_178 = new cjs.Graphics().p("A7mHuQhpuJI1rKQI1rLOIhqQOKhqLKI1MgqnA17QrLo1hruJg");
	var mask_graphics_179 = new cjs.Graphics().p("A7UIFQh3uGIqrUQIqrTOFh4QOIh4LUIqMgpyA2kQrToph5uIg");
	var mask_graphics_180 = new cjs.Graphics().p("A7BIdQiFuEIercQIfrcODiGQOGiGLcIeMgo6A3OQrcofiHuFg");
	var mask_graphics_181 = new cjs.Graphics().p("A6uI1QiTuCITrlQITrkOBiUQOEiULlITMgoEA32QrkoTiVuDg");
	var mask_graphics_182 = new cjs.Graphics().p("A6aJNQihuAIIrsQIHrtN/iiQOBiiLtIIMgnMA4dQrsoHijuBg");
	var mask_graphics_183 = new cjs.Graphics().p("A6FJlQivt9H8r0QH7r1N9iwQN/iwL0H8MgmTA5EQr0n8ixt+g");
	var mask_graphics_184 = new cjs.Graphics().p("A5wJ+Qi9t7Hwr8QHwr8N6i+QN8i+L8HwMglaA5qQr8nwi/t7g");
	var mask_graphics_185 = new cjs.Graphics().p("A5aKWQjLt3HksEQHksEN3jMQN5jMMEHkMgkgA6PQsEnkjNt4g");
	var mask_graphics_186 = new cjs.Graphics().p("A5DKvQjZt0HYsMQHYsLNzjaQN2jZMLHXMgjlA6zQsMnXjat1g");
	var mask_graphics_187 = new cjs.Graphics().p("A4sLHQjmtwHMsTQHLsTNxjnQNxjnMTHLMgirA7WQsTnLjotyg");
	var mask_graphics_188 = new cjs.Graphics().p("A4ULgQj0ttG/saQHAsZNtj1QNtj1MaG/MghvA74Qsam/j2tug");
	var mask_graphics_189 = new cjs.Graphics().p("A37L5QkCtpGzshQGzsgNpkDQNqkDMgGzMggzA8ZQshmzkDtpg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:131.3,y:21.9}).wait(1).to({graphics:mask_graphics_1,x:132.9,y:21.5}).wait(1).to({graphics:mask_graphics_2,x:134.5,y:21.2}).wait(1).to({graphics:mask_graphics_3,x:136.2,y:20.9}).wait(1).to({graphics:mask_graphics_4,x:136.9,y:20.6}).wait(1).to({graphics:mask_graphics_5,x:136.8,y:20.4}).wait(1).to({graphics:mask_graphics_6,x:136.8,y:20.1}).wait(1).to({graphics:mask_graphics_7,x:136.8,y:19.9}).wait(1).to({graphics:mask_graphics_8,x:136.7,y:19.7}).wait(1).to({graphics:mask_graphics_9,x:136.7,y:19.6}).wait(1).to({graphics:mask_graphics_10,x:136.7,y:19.5}).wait(1).to({graphics:mask_graphics_11,x:136.7,y:19.4}).wait(1).to({graphics:mask_graphics_12,x:136.7,y:19.3}).wait(1).to({graphics:mask_graphics_13,x:136.6,y:19.3}).wait(1).to({graphics:mask_graphics_14,x:136.6,y:19.2}).wait(1).to({graphics:mask_graphics_15,x:136.6,y:19.3}).wait(1).to({graphics:mask_graphics_16,x:136.6,y:19.3}).wait(1).to({graphics:mask_graphics_17,x:136.6,y:19.4}).wait(1).to({graphics:mask_graphics_18,x:136.6,y:19.5}).wait(1).to({graphics:mask_graphics_19,x:136.6,y:19.6}).wait(1).to({graphics:mask_graphics_20,x:136.6,y:19.7}).wait(1).to({graphics:mask_graphics_21,x:136.6,y:19.8}).wait(1).to({graphics:mask_graphics_22,x:136.6,y:19.9}).wait(1).to({graphics:mask_graphics_23,x:136.7,y:20}).wait(1).to({graphics:mask_graphics_24,x:136.7,y:20}).wait(1).to({graphics:mask_graphics_25,x:136.7,y:20}).wait(1).to({graphics:mask_graphics_26,x:136.8,y:19.9}).wait(1).to({graphics:mask_graphics_27,x:136.8,y:19.9}).wait(1).to({graphics:mask_graphics_28,x:136.8,y:19.8}).wait(1).to({graphics:mask_graphics_29,x:136.9,y:19.7}).wait(1).to({graphics:mask_graphics_30,x:136.9,y:19.5}).wait(1).to({graphics:mask_graphics_31,x:136.9,y:19.3}).wait(1).to({graphics:mask_graphics_32,x:137,y:19.1}).wait(1).to({graphics:mask_graphics_33,x:137,y:18.9}).wait(1).to({graphics:mask_graphics_34,x:137.1,y:18.7}).wait(1).to({graphics:mask_graphics_35,x:137.1,y:18.4}).wait(1).to({graphics:mask_graphics_36,x:135.6,y:18.1}).wait(1).to({graphics:mask_graphics_37,x:134,y:17.7}).wait(1).to({graphics:mask_graphics_38,x:132.4,y:17.4}).wait(1).to({graphics:mask_graphics_39,x:130.8,y:17}).wait(1).to({graphics:mask_graphics_40,x:129.3,y:16.6}).wait(1).to({graphics:mask_graphics_41,x:127.7,y:16.2}).wait(1).to({graphics:mask_graphics_42,x:126.2,y:15.7}).wait(1).to({graphics:mask_graphics_43,x:124.7,y:15.2}).wait(1).to({graphics:mask_graphics_44,x:123.1,y:14.7}).wait(1).to({graphics:mask_graphics_45,x:121.6,y:14.2}).wait(1).to({graphics:mask_graphics_46,x:120.1,y:13.7}).wait(1).to({graphics:mask_graphics_47,x:118.7,y:13.1}).wait(1).to({graphics:mask_graphics_48,x:117.2,y:12.5}).wait(1).to({graphics:mask_graphics_49,x:115.7,y:11.9}).wait(1).to({graphics:mask_graphics_50,x:114.3,y:11.2}).wait(1).to({graphics:mask_graphics_51,x:112.8,y:10.6}).wait(1).to({graphics:mask_graphics_52,x:111.4,y:9.9}).wait(1).to({graphics:mask_graphics_53,x:110,y:9.2}).wait(1).to({graphics:mask_graphics_54,x:108.6,y:8.4}).wait(1).to({graphics:mask_graphics_55,x:107.2,y:7.7}).wait(1).to({graphics:mask_graphics_56,x:105.8,y:6.9}).wait(1).to({graphics:mask_graphics_57,x:104.5,y:6.1}).wait(1).to({graphics:mask_graphics_58,x:103.1,y:5.3}).wait(1).to({graphics:mask_graphics_59,x:101.8,y:4.4}).wait(1).to({graphics:mask_graphics_60,x:100.5,y:3.6}).wait(1).to({graphics:mask_graphics_61,x:99.2,y:2.7}).wait(1).to({graphics:mask_graphics_62,x:97.9,y:1.7}).wait(1).to({graphics:mask_graphics_63,x:96.7,y:0.8}).wait(1).to({graphics:mask_graphics_64,x:95.5,y:-0.2}).wait(1).to({graphics:mask_graphics_65,x:94.3,y:-1.2}).wait(1).to({graphics:mask_graphics_66,x:93.1,y:-2.2}).wait(1).to({graphics:mask_graphics_67,x:91.9,y:-3.2}).wait(1).to({graphics:mask_graphics_68,x:90.8,y:-4.3}).wait(1).to({graphics:mask_graphics_69,x:89.6,y:-5.4}).wait(1).to({graphics:mask_graphics_70,x:88.5,y:-6.5}).wait(1).to({graphics:mask_graphics_71,x:87.5,y:-7.6}).wait(1).to({graphics:mask_graphics_72,x:86.4,y:-8.8}).wait(1).to({graphics:mask_graphics_73,x:85.4,y:-10}).wait(1).to({graphics:mask_graphics_74,x:84.4,y:-11.2}).wait(1).to({graphics:mask_graphics_75,x:83.4,y:-12.4}).wait(1).to({graphics:mask_graphics_76,x:82.5,y:-13.6}).wait(1).to({graphics:mask_graphics_77,x:81.6,y:-14.9}).wait(1).to({graphics:mask_graphics_78,x:80.7,y:-16.2}).wait(1).to({graphics:mask_graphics_79,x:79.8,y:-17.5}).wait(1).to({graphics:mask_graphics_80,x:78.9,y:-18.8}).wait(1).to({graphics:mask_graphics_81,x:78.1,y:-20.2}).wait(1).to({graphics:mask_graphics_82,x:77.3,y:-21.5}).wait(1).to({graphics:mask_graphics_83,x:76.5,y:-22.9}).wait(1).to({graphics:mask_graphics_84,x:75.7,y:-24.3}).wait(1).to({graphics:mask_graphics_85,x:75,y:-25.7}).wait(1).to({graphics:mask_graphics_86,x:74.2,y:-27.1}).wait(1).to({graphics:mask_graphics_87,x:73.5,y:-28.5}).wait(1).to({graphics:mask_graphics_88,x:72.9,y:-30}).wait(1).to({graphics:mask_graphics_89,x:72.2,y:-31.5}).wait(1).to({graphics:mask_graphics_90,x:71.6,y:-32.9}).wait(1).to({graphics:mask_graphics_91,x:71,y:-34.4}).wait(1).to({graphics:mask_graphics_92,x:70.4,y:-35.9}).wait(1).to({graphics:mask_graphics_93,x:69.8,y:-37.4}).wait(1).to({graphics:mask_graphics_94,x:69.3,y:-39}).wait(1).to({graphics:mask_graphics_95,x:68.8,y:-40.5}).wait(1).to({graphics:mask_graphics_96,x:68.3,y:-42}).wait(1).to({graphics:mask_graphics_97,x:67.8,y:-43.6}).wait(1).to({graphics:mask_graphics_98,x:67.4,y:-45.2}).wait(1).to({graphics:mask_graphics_99,x:66.9,y:-46.7}).wait(1).to({graphics:mask_graphics_100,x:66.5,y:-48.3}).wait(1).to({graphics:mask_graphics_101,x:66.2,y:-49.9}).wait(1).to({graphics:mask_graphics_102,x:65.8,y:-51.5}).wait(1).to({graphics:mask_graphics_103,x:65.5,y:-53.1}).wait(1).to({graphics:mask_graphics_104,x:65.2,y:-54.7}).wait(1).to({graphics:mask_graphics_105,x:64.9,y:-56.3}).wait(1).to({graphics:mask_graphics_106,x:64.6,y:-58}).wait(1).to({graphics:mask_graphics_107,x:64.4,y:-59.6}).wait(1).to({graphics:mask_graphics_108,x:64.2,y:-61.3}).wait(1).to({graphics:mask_graphics_109,x:64,y:-62.9}).wait(1).to({graphics:mask_graphics_110,x:63.9,y:-64.6}).wait(1).to({graphics:mask_graphics_111,x:63.8,y:-66.2}).wait(1).to({graphics:mask_graphics_112,x:63.7,y:-67.9}).wait(1).to({graphics:mask_graphics_113,x:63.6,y:-69.6}).wait(1).to({graphics:mask_graphics_114,x:63.6,y:-71.3}).wait(1).to({graphics:mask_graphics_115,x:63.6,y:-73}).wait(1).to({graphics:mask_graphics_116,x:63.6,y:-74.6}).wait(1).to({graphics:mask_graphics_117,x:63.6,y:-76.4}).wait(1).to({graphics:mask_graphics_118,x:63.7,y:-78.1}).wait(1).to({graphics:mask_graphics_119,x:63.8,y:-79.8}).wait(1).to({graphics:mask_graphics_120,x:63.9,y:-81.5}).wait(1).to({graphics:mask_graphics_121,x:64.1,y:-80}).wait(1).to({graphics:mask_graphics_122,x:64.2,y:-78.3}).wait(1).to({graphics:mask_graphics_123,x:64.3,y:-76.7}).wait(1).to({graphics:mask_graphics_124,x:64.3,y:-75}).wait(1).to({graphics:mask_graphics_125,x:64.3,y:-73.3}).wait(1).to({graphics:mask_graphics_126,x:64.3,y:-71.7}).wait(1).to({graphics:mask_graphics_127,x:64.3,y:-70}).wait(1).to({graphics:mask_graphics_128,x:64.2,y:-68.3}).wait(1).to({graphics:mask_graphics_129,x:64.1,y:-66.7}).wait(1).to({graphics:mask_graphics_130,x:64,y:-65.1}).wait(1).to({graphics:mask_graphics_131,x:63.8,y:-63.4}).wait(1).to({graphics:mask_graphics_132,x:63.6,y:-61.8}).wait(1).to({graphics:mask_graphics_133,x:63.4,y:-60.2}).wait(1).to({graphics:mask_graphics_134,x:63.2,y:-58.6}).wait(1).to({graphics:mask_graphics_135,x:63,y:-57}).wait(1).to({graphics:mask_graphics_136,x:62.7,y:-55.4}).wait(1).to({graphics:mask_graphics_137,x:62.4,y:-53.8}).wait(1).to({graphics:mask_graphics_138,x:62,y:-52.2}).wait(1).to({graphics:mask_graphics_139,x:61.7,y:-50.7}).wait(1).to({graphics:mask_graphics_140,x:61.3,y:-49.1}).wait(1).to({graphics:mask_graphics_141,x:60.9,y:-47.5}).wait(1).to({graphics:mask_graphics_142,x:60.5,y:-46}).wait(1).to({graphics:mask_graphics_143,x:60,y:-44.5}).wait(1).to({graphics:mask_graphics_144,x:59.5,y:-42.9}).wait(1).to({graphics:mask_graphics_145,x:59,y:-41.4}).wait(1).to({graphics:mask_graphics_146,x:58.5,y:-39.9}).wait(1).to({graphics:mask_graphics_147,x:57.9,y:-38.4}).wait(1).to({graphics:mask_graphics_148,x:57.4,y:-36.9}).wait(1).to({graphics:mask_graphics_149,x:56.8,y:-35.4}).wait(1).to({graphics:mask_graphics_150,x:56.2,y:-34}).wait(1).to({graphics:mask_graphics_151,x:55.5,y:-32.5}).wait(1).to({graphics:mask_graphics_152,x:54.8,y:-31.1}).wait(1).to({graphics:mask_graphics_153,x:54.2,y:-29.7}).wait(1).to({graphics:mask_graphics_154,x:53.4,y:-28.3}).wait(1).to({graphics:mask_graphics_155,x:52.7,y:-26.9}).wait(1).to({graphics:mask_graphics_156,x:52,y:-25.5}).wait(1).to({graphics:mask_graphics_157,x:51.2,y:-24.1}).wait(1).to({graphics:mask_graphics_158,x:50.4,y:-22.7}).wait(1).to({graphics:mask_graphics_159,x:49.5,y:-21.4}).wait(1).to({graphics:mask_graphics_160,x:48.7,y:-20.1}).wait(1).to({graphics:mask_graphics_161,x:47.8,y:-18.8}).wait(1).to({graphics:mask_graphics_162,x:46.9,y:-17.5}).wait(1).to({graphics:mask_graphics_163,x:46,y:-16.2}).wait(1).to({graphics:mask_graphics_164,x:45.1,y:-15}).wait(1).to({graphics:mask_graphics_165,x:44.1,y:-13.8}).wait(1).to({graphics:mask_graphics_166,x:43.1,y:-12.5}).wait(1).to({graphics:mask_graphics_167,x:42.1,y:-11.4}).wait(1).to({graphics:mask_graphics_168,x:41,y:-10.2}).wait(1).to({graphics:mask_graphics_169,x:40,y:-9}).wait(1).to({graphics:mask_graphics_170,x:38.9,y:-7.9}).wait(1).to({graphics:mask_graphics_171,x:37.8,y:-6.8}).wait(1).to({graphics:mask_graphics_172,x:36.6,y:-5.8}).wait(1).to({graphics:mask_graphics_173,x:35.5,y:-4.7}).wait(1).to({graphics:mask_graphics_174,x:34.3,y:-3.7}).wait(1).to({graphics:mask_graphics_175,x:33.1,y:-2.7}).wait(1).to({graphics:mask_graphics_176,x:31.9,y:-1.7}).wait(1).to({graphics:mask_graphics_177,x:30.6,y:-0.8}).wait(1).to({graphics:mask_graphics_178,x:29.3,y:0.1}).wait(1).to({graphics:mask_graphics_179,x:28,y:1}).wait(1).to({graphics:mask_graphics_180,x:26.7,y:1.9}).wait(1).to({graphics:mask_graphics_181,x:25.4,y:2.8}).wait(1).to({graphics:mask_graphics_182,x:24.1,y:3.6}).wait(1).to({graphics:mask_graphics_183,x:22.7,y:4.4}).wait(1).to({graphics:mask_graphics_184,x:21.3,y:5.2}).wait(1).to({graphics:mask_graphics_185,x:19.9,y:6}).wait(1).to({graphics:mask_graphics_186,x:18.5,y:6.7}).wait(1).to({graphics:mask_graphics_187,x:17.1,y:7.4}).wait(1).to({graphics:mask_graphics_188,x:15.7,y:8.1}).wait(1).to({graphics:mask_graphics_189,x:14.2,y:8.8}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AhaTvQj9iTjcjbQlzlzAAoMQAAoLFzlzQFzlyINAAQFMAAEOCU");
	this.shape.setTransform(-1.5,-4.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(190));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.2,-133,115,257.6);


(lib.honeyflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.honeybee();
	this.instance.parent = this;
	this.instance.setTransform(38.4,-170.9,0.422,0.422,0,0,0,-0.1,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgrB2IgLgGIgCAAIgBgBIgBgBIgCAAIgCgBIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIgCgBIgBAAIgBgBIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIAAgBIgCgBIAAAAIgBgBIgCgBIAAgBIgBgBIgBgBIgBAAIAAgBIgBgBIAAgBIgBgBIgBgBIgBAAIAAgBIgCgBIAAgBIgBgBIgBgBIAAgBIgBAAIgBgBIAAgBIAAgBIgBgBIgBgBIAAgBIAAAAIgBgBIgBgBIgBgBIAAgBIgBgBIAAgBIgBAAIAAgBIgBgBIAAgBIgBgBIAAgBIAAgBIgBgBIAAAAIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIgBgBIgBgBIAAgBIAAAAIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAAAIAAgBIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIgBAAIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIgBgBIABgBIgBgBIAAgBIAAAAIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAAAIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIABgBIAAgBIABgBIAAgBIABgCIAAgBIABgBIAAgBIAAgBIABgBIAAgBIABgBIABgBIAAgBIABgBIABgBIABgBIAAgBIABgBIABgBIABgBIAAgBIABgBIAAgBIABgBIABgCIABgBIABgBIABgBIABgBIABgBIABgBIAAgBIADgDQAGgHAIgFIAMgIIAPgIQAHgDAJgCIAOgEIANgBIANAAIANACIANADIANAEIAFADIABAAIACABIACABIABAAIABABIABABIACABIABAAIABABIACABIABABIABAAIABABIABABIABABIACABIABAAIABABIABABIABABIABABIABAAIABABIABABIAAABIACABIABAAIABABIABABIAAABIABABIABABIAAAAIABABIABABIABABIABABIABAAIABABIAAABIABABIABABIAAABIABABIAAAAIABABIABABIAAABIABABIABABIABABIAAAAIABABIABABIAAABIABABIAAABIAAABIABAAIAAABIABABIAAABIABABIABABIAAABIAAABIABAAIABABIAAABIABABIAAABIABABIAAABIABABIAAAAIAAABIABABIAAABIAAABIAAABIABABIAAABIAAABIABABIAAAAIAAABIABABIAAABIABABIAAABIABABIAAABIAAABIAAABIAAAAIABABIAAABIAAABIABABIAAABIAAABIAAABIAAABIABABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAACIABACIAAACIAAABIAAABIAAABIAAABIAAAAIAAABIABABIgBABIABABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIAAABIAAACIAAACIgBACIAAABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIgBABIgBABIAAABIAAABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIAAABIgBABIgBABIgBABIAAABIgBABIAAABIgBABIgBABIAAABIgBACIAAABIgBABIgBABIgBABIgBABIgBABIgBABIAAABIgBABIgBABIgBABIgBABIAAABIgCACIgBABIgBABIgBABQgHAHgHAFQgMAJgOAGQgXAKgZAAQgWAAgWgHg");
	this.shape.setTransform(22.8,-144.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-215.3,105.5,83.7);


// stage content:
(lib.writingsuccess_Fontkid_C = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_379 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(379).call(this.frame_379).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(408.8,150.6,0.999,0.999,8.5,0,0,22.4,-144);
	this.instance._off = true;

	this.instance_1 = new lib.honeybee();
	this.instance_1.parent = this;
	this.instance_1.setTransform(407.6,388.7,0.421,0.421,8.5,0,0,-37.8,64);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:8.3,guide:{path:[408.8,150.5,407.5,148.8,407.2,148.5,361,98.7,295.5,98.7,236.2,98.7,192.7,139.5]}},90).to({guide:{path:[192.6,139.7,188.1,143.9,183.7,148.6,137.4,198.5,137.4,268.8,137.4,339.3,183.7,389.1,201.6,408.3,222.3,420.1]}},125).to({guide:{path:[222.3,420.1,255.3,438.9,295.5,438.9,328.1,438.9,356,426.5]}},50).to({scaleX:1,scaleY:1,rotation:8.5,guide:{path:[356.1,426.5,380.6,415.6,401.4,395.1,404.4,392.2,407.3,389.1,407.4,389,407.6,388.8]}},34).to({_off:true},12).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(320).to({_off:false},0).to({guide:{path:[407.5,388.7,406.2,400.8,403.9,409.1,401.6,417.4,395.4,429.7,389.1,442,380.9,453.6,372.3,465.9,361.4,475.7,350.8,485.4,336.6,486.5,321.4,486.9,307.5,480.6,294.2,474.4,279.6,475.8,265,477.2,250.8,481.2,236.5,485.2,224.3,493.5,212.2,501.9,203.8,514.1,195.9,525.4,187,535.8,177.5,547,166.9,557,157.1,566.1,146.2,573.9,134.3,582.4,121.8,590.2,109.5,598.1,97.2,606.1,84.9,614.2,72.6,622.4,60.2,630.6,48.7,639.8,48.3,640.1,48,640.4]}},59).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(413.3,382.9,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},300).wait(71));

	// ar
	this.instance_2 = new lib.ar1("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(274,273.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(371));

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_189 = new cjs.Graphics().p("A4oEBQDptwMTnMQMRnLNxDoQNyDnHMMTMg7XAipQnMsSDntyg");
	var mask_graphics_190 = new cjs.Graphics().p("A4nETQDbtzMLnYQMLnYN0DaQN2DaHXMLMg6zAjlQnYsMDZt1g");
	var mask_graphics_191 = new cjs.Graphics().p("A4lEmQDMt3MEnkQMDnkN4DLQN5DMHkMEMg6PAkgQnksEDLt4g");
	var mask_graphics_192 = new cjs.Graphics().p("A4jE5QC/t7L8nwQL7nwN7C+QN8C+HwL8Mg5qAlaQnwr8C9t7g");
	var mask_graphics_193 = new cjs.Graphics().p("A4gFMQCxt9L0n8QL0n8N9CvQN/CwH8L0Mg5EAmUQn8r0Cvt+g");
	var mask_graphics_194 = new cjs.Graphics().p("A4cFfQCjuALsoIQLroIOACiQOCCiIILsMg4dAnNQoIrsChuBg");
	var mask_graphics_195 = new cjs.Graphics().p("A4XFyQCUuCLkoTQLjoUODCTQOECUITLkMg30AoGQoUrkCTuEg");
	var mask_graphics_196 = new cjs.Graphics().p("A4SGGQCGuELcofQLbogOECGQOHCFIfLbMg3MAo+QofrbCEuGg");
	var mask_graphics_197 = new cjs.Graphics().p("A4LGaQB3uGLTorQLSoqOHB2QOIB3IrLTMg2iAp2QorrTB3uIg");
	var mask_graphics_198 = new cjs.Graphics().p("A4FGuQBquILKo2QLKo2OIBpQOKBpI2LKMg14AqsQo2rKBouKg");
	var mask_graphics_199 = new cjs.Graphics().p("A39HDQBcuKLBpBQLBpBOJBaQOLBbJBLBMg1LAriQpCrBBauLg");
	var mask_graphics_200 = new cjs.Graphics().p("A30HYQBNuLK4pNQK4pMOKBMQONBMJMK4Mg0gAsYQpMq4BMuMg");
	var mask_graphics_201 = new cjs.Graphics().p("A3rHsQA/uMKupXQKvpXOLA+QOOA+JXKuMgzyAtMQpXquA9uOg");
	var mask_graphics_202 = new cjs.Graphics().p("A3hICQAwuNKlpiQKlpiOMAvQOPAwJiKlMgzEAuAQpiqlAvuOg");
	var mask_graphics_203 = new cjs.Graphics().p("A3XIXQAiuOKcpsQKbptONAiQOQAhJsKbMgyWAuzQpsqbAguPg");
	var mask_graphics_204 = new cjs.Graphics().p("A3LIsQAUuOKRp3QKRp2OOASQOQATJ3KSMgxmAvlQp3qRASuQg");
	var mask_graphics_205 = new cjs.Graphics().p("A2/JCQAFuOKIqBQKHqBOOAEQOQAEKBKIMgw2AwXQqBqIAEuPg");
	var mask_graphics_206 = new cjs.Graphics().p("A2yJYQgJuOJ9qMQJ9qLOOgKQOQgKKLJ+MgwEAxHQqMp9gKuPg");
	var mask_graphics_207 = new cjs.Graphics().p("A2lJuQgXuOJzqVQJzqVONgZQOQgYKVJzMgvSAx4QqWpzgZuPg");
	var mask_graphics_208 = new cjs.Graphics().p("A2WKEQgmuNJoqfQJpqfONgnQOPgnKfJpMgugAynQqfpognuPg");
	var mask_graphics_209 = new cjs.Graphics().p("A2HKbQg0uNJeqpQJdqoOMg1QOPg1KoJdMgtsAzWQqppeg1uNg");
	var mask_graphics_210 = new cjs.Graphics().p("A14KxQhCuMJTqyQJTqyOLhDQOOhDKyJTMgs4A0DQqypThFuNg");
	var mask_graphics_211 = new cjs.Graphics().p("A1nLIQhRuLJIq7QJIq8OKhRQONhSK7JIMgsDA0xQq8pIhSuMg");
	var mask_graphics_212 = new cjs.Graphics().p("A1WLfQhfuJI9rFQI9rEOJhgQOLhgLEI9MgrOA1cQrEo9hhuKg");
	var mask_graphics_213 = new cjs.Graphics().p("A1EL2QhtuIIyrNQIxrOOHhuQOKhuLNIyMgqYA2HQrNoyhvuIg");
	var mask_graphics_214 = new cjs.Graphics().p("A0xMNQh8uGInrWQImrWOFh8QOHh9LXImMgphA2yQrWomh9uHg");
	var mask_graphics_215 = new cjs.Graphics().p("A0eMkQiKuDIbrfQIbrfODiKQOFiLLfIbMgopA3bQrfobiLuFg");
	var mask_graphics_216 = new cjs.Graphics().p("A0KM8QiYuCIPrnQIPrnOBiZQODiZLnIQMgnwA4DQrooPiZuCg");
	var mask_graphics_217 = new cjs.Graphics().p("Az1NTQimt/IDrvQIDrvN+inQOBinLwIDMgm4A4sQrwoEinuAg");
	var mask_graphics_218 = new cjs.Graphics().p("AzgNrQi0t8H3r4QH4r3N7i1QN+i1L4H3Mgl/A5TQr3n4i2t9g");
	var mask_graphics_219 = new cjs.Graphics().p("AzKODQjCt6Hrr/QHsr/N4jDQN7jDL/HrMglEA54Qr/nrjEt6g");
	var mask_graphics_220 = new cjs.Graphics().p("AyzObQjRt3HgsGQHfsHN1jRQN4jRMHHfMgkKA6dQsHnfjRt3g");
	var mask_graphics_221 = new cjs.Graphics().p("AycOzQjet0HTsNQHTsPNyjeQN0jgMPHTMgjPA7BQsOnTjgtzg");
	var mask_graphics_222 = new cjs.Graphics().p("AyEPLQjstwHHsVQHGsVNvjtQNwjtMWHGMgiTA7kQsVnGjutwg");
	var mask_graphics_223 = new cjs.Graphics().p("AxrPjQj6tsG6scQG6sdNrj6QNsj7MdG6MghWA8GQsdm6j7tsg");
	var mask_graphics_224 = new cjs.Graphics().p("AxSP8QkItpGusiQGuskNmkIQNpkJMjGuMggZA8nQskmukJtng");
	var mask_graphics_225 = new cjs.Graphics().p("Aw4QUQkVtkGgspQGhsrNikWQNlkWMqGhMgfdA9HQspmhkXtjg");
	var mask_graphics_226 = new cjs.Graphics().p("AwdQsQkjtfGUswQGUsxNdkjQNgkkMxGUMgefA9mQswmUkktfg");
	var mask_graphics_227 = new cjs.Graphics().p("AwCRFQkxtbGHs2QGHs3NZkxQNckyM3GHMgdhA+FQs2mHkytag");
	var mask_graphics_228 = new cjs.Graphics().p("AvmRdQk+tWF6s8QF6s9NUk+QNWk/M9F6MgciA+iQs8l6k/tWg");
	var mask_graphics_229 = new cjs.Graphics().p("AvKR2QlLtRFttCQFttDNOlMQNSlMNDFtMgbjA++QtCltlNtQg");
	var mask_graphics_230 = new cjs.Graphics().p("AutSPQlZtMFgtHQFgtJNJlZQNMlaNJFgMgajA/ZQtIlflatLg");
	var mask_graphics_231 = new cjs.Graphics().p("AuPSnQlmtGFStNQFTtONElmQNGlnNOFSMgZjA/0QtNlSlntGg");
	var mask_graphics_232 = new cjs.Graphics().p("AtxTAQlztAFFtSQFFtUM+lzQNBl1NTFGMgYiBANQtSlFl1tAg");
	var mask_graphics_233 = new cjs.Graphics().p("AtSTZQmAs6E3tYQE4tYM4mBQM7mBNYE4MgXhBAlQtXk4mCs5g");
	var mask_graphics_234 = new cjs.Graphics().p("AszTyQmNs0EqtdQEqtdMymNQM1mPNdErMgWgBA8QtckqmPszg");
	var mask_graphics_235 = new cjs.Graphics().p("AsTUKQmastEdthQEctiMsmaQMumbNiEcMgVfBBTQtgkcmcsug");
	var mask_graphics_236 = new cjs.Graphics().p("AryUjQmnsnEPtlQEPtmMlmnQMnmoNmEPMgUcBBoQtlkPmosng");
	var mask_graphics_237 = new cjs.Graphics().p("ArRU8Qm0sgECtpQEBtrMem0QMhm0NqEBMgTaBB8QtpkBm1sgg");
	var mask_graphics_238 = new cjs.Graphics().p("AqvVVQnBsaD0ttQDztuMYnAQMZnCNuD0MgSXBCPQttjznBsZg");
	var mask_graphics_239 = new cjs.Graphics().p("AqNVuQnNsTDmtwQDltyMQnNQMTnONyDmMgRVBChQtwjmnOsRg");
	var mask_graphics_240 = new cjs.Graphics().p("AprWHQnYsLDXt1QDYt1MJnZQMLnaN1DXMgQRBCyQt0jXnbsKg");
	var mask_graphics_241 = new cjs.Graphics().p("ApHWfQnlsDDJt4QDKt4MBnmQMEnmN4DKMgPNBDCQt4jKnmsDg");
	var mask_graphics_242 = new cjs.Graphics().p("AokW4Qnxr8C8t6QC7t8L6nxQL8nzN7C8MgOJBDQQt7i7nzr7g");
	var mask_graphics_243 = new cjs.Graphics().p("An/XRQn+r0Cut9QCut/Lxn9QL0n/N+CuMgNFBDeQt+itn+rzg");
	var mask_graphics_244 = new cjs.Graphics().p("AnbXqQoJrsCguAQCfuBLqoKQLroKOCCfMgMCBDsQuBigoKrqg");
	var mask_graphics_245 = new cjs.Graphics().p("Am1YCQoVrjCRuDQCRuDLioVQLjoWODCRMgK9BD3QuDiRoVrjg");
	var mask_graphics_246 = new cjs.Graphics().p("AmQYbQogrbCDuFQCDuGLZogQLboiOFCDMgJ4BECQuGiDohrag");
	var mask_graphics_247 = new cjs.Graphics().p("AlqYzQorrSB1uHQB0uHLQosQLTotOHB1MgI0BEKQuHh1otrRg");
	var mask_graphics_248 = new cjs.Graphics().p("AlDZMQo3rKBnuIQBmuJLHo4QLKo4OJBnMgHvBETQuKhno3rIg");
	var mask_graphics_249 = new cjs.Graphics().p("AkcZkQpCrABYuLQBZuKK+pCQLApEOLBYMgGrBEbQuKhZpDq/g");
	var mask_graphics_250 = new cjs.Graphics().p("Aj0Z8QpOq3BKuMQBKuLK1pNQK4pPOMBKMgFmBEhQuMhKpNq3g");
	var mask_graphics_251 = new cjs.Graphics().p("AjMaVQpZquA8uNQA8uNKspYQKtpZONA7MgEgBEmQuNg8pYqsg");
	var mask_graphics_252 = new cjs.Graphics().p("AikatQpjqkAtuOQAuuNKjpjQKjplOOAuMgDbBEpQuOgtpjqjg");
	var mask_graphics_253 = new cjs.Graphics().p("Ah7bFQpuqbAfuOQAfuOKaptQKZpvOPAfMgCWBEsQuPgfptqZg");
	var mask_graphics_254 = new cjs.Graphics().p("AhSbdQp4qRARuPQAQuOKQp4QKPp5OPARMgBQBEuQuPgRp4qPg");
	var mask_graphics_255 = new cjs.Graphics().p("Agpb1QqCqHADuPQACuOKFqCQKGqEOPACMgALBEvQuPgCqDqFg");
	var mask_graphics_256 = new cjs.Graphics().p("AgccMQqMp8gMuPQgMuOJ7qNQJ7qNOPgMMAA7BEvIgiAAQt6AAqApwg");
	var mask_graphics_257 = new cjs.Graphics().p("AgUckQqWpzgbuOQgauOJxqWQJxqYOOgaMACABEtIhKABQtgAAp7pXg");
	var mask_graphics_258 = new cjs.Graphics().p("AgMc6QqgpngpuOQgpuOJnqgQJmqhOOgpMADFBErQg5ACg3AAQtIAAp2pAg");
	var mask_graphics_259 = new cjs.Graphics().p("AgEdRQqppdg4uOQg3uMJcqqQJcqrONg3MAEKBEnQhMAFhKAAQswAApxopg");
	var mask_graphics_260 = new cjs.Graphics().p("AAEdnQqypShGuNQhFuMJRqzQJRq0OMhFMAFPBEiQhfAHhdAAQsZAAproSg");
	var mask_graphics_261 = new cjs.Graphics().p("AANd8Qq7pHhUuLQhUuLJGq8QJGq9OLhUMAGVBEcQhzALhuAAQsDAApln9g");
	var mask_graphics_262 = new cjs.Graphics().p("AAWeRQrEo8hiuKQhiuJI7rFQI7rHOJhiMAHaBEWQiFAOiBAAQrsAApfnng");
	var mask_graphics_263 = new cjs.Graphics().p("AAgemQrNoxhwuIQhxuIIwrOQIvrPOJhxMAIeBEOQiXATiSAAQrYAApXnSg");
	var mask_graphics_264 = new cjs.Graphics().p("AAqe6QrWomh+uGQh/uFIkrXQIlrYOGh/MAJjBEEQipAYikAAQrCAApQm9g");
	var mask_graphics_265 = new cjs.Graphics().p("AA1fOQrfoaiMuEQiNuEIZrfQIYrhOEiNMAKoBD6Qi7Aei0AAQquAApImpg");
	var mask_graphics_266 = new cjs.Graphics().p("ABAfhQrnoOibuCQibuBINroQINrpOCibMALsBDvQjNAjjFAAQqaAAo/mVg");
	var mask_graphics_267 = new cjs.Graphics().p("ABLf0QrvoDipt/Qipt+IBrwQIBryN/ipMAMwBDjQjdAqjVAAQqHAAo3mCg");
	var mask_graphics_268 = new cjs.Graphics().p("EABXAgGQr4n2i3t9Qi3t8H2r4QH2r5N7i3MAN0BDVQjvAxjlAAQp0AAotlvg");
	var mask_graphics_269 = new cjs.Graphics().p("EABjAgYQr/nqjGt6QjFt5Hqr/QHqsCN4jFMAO4BDHQj/A5j2AAQphAAokldg");
	var mask_graphics_270 = new cjs.Graphics().p("EABvAgqQsHnfjTt2QjTt1HdsIQHesJN1jTMAP8BC3QkQBBkGAAQpPAAoalKg");
	var mask_graphics_271 = new cjs.Graphics().p("EAB7Ag7QsOnSjhtzQjhtyHRsPQHSsQNyjhMAQ+BCmQkgBKkVAAQo9AAoRk5g");
	var mask_graphics_272 = new cjs.Graphics().p("EACIAhLQsVnFjvtwQjvtuHFsWQHFsYNujuMASCBCVQkwBSkmAAQorAAoGkog");
	var mask_graphics_273 = new cjs.Graphics().p("EACWAhbQsdm5j8trQj9tqG4seQG4seNrj9MATEBCCQk/Bdk2AAQoZAAn7kYg");
	var mask_graphics_274 = new cjs.Graphics().p("EACjAhrQsjmskKtoQkLtmGrskQGsslNnkLMAUHBBvQlPBmlFAAQoJAAnwkHg");
	var mask_graphics_275 = new cjs.Graphics().p("EACxAh6QsqmfkYtjQkYtjGesqQGgssNikYMAVJBBZQleBylVAAQn4AAnkj4g");
	var mask_graphics_276 = new cjs.Graphics().p("EAC/AiJQswmTkmteQkmtfGSswQGTsyNdkmMAWLBBEQlsB8llAAQnnAAnZjog");
	var mask_graphics_277 = new cjs.Graphics().p("EADOAiXQs3mGkztZQkztaGEs2QGGs5NZkzMAXMBAtQl7CHl0AAQnXAAnMjZg");
	var mask_graphics_278 = new cjs.Graphics().p("EADdAilQs9l5lBtUQlAtVF3s9QF5s+NUlBMAYNBAVQmJCUmEAAQnGAAnAjLg");
	var mask_graphics_279 = new cjs.Graphics().p("EADsAizQtClslPtQQlOtPFrtDQFrtENPlOMAZOA/8QmXCgmUAAQm2AAmzi8g");
	var mask_graphics_280 = new cjs.Graphics().p("EAD8AjAQtIlflctKQlctLFetHQFetLNJlbMAaPA/iQmlCtmkABQmmAAmlivg");
	var mask_graphics_281 = new cjs.Graphics().p("EAELAjMQtNlRlptFQlptFFRtNQFQtQNEloMAbOA/HQmxC7m0AAQmWAAmZiig");
	var mask_graphics_282 = new cjs.Graphics().p("EAEcAjYQtTlEl2s/Ql2s/FDtSQFDtVM+l2MAcOA+rQm+DJnFAAQmGAAmKiVg");
	var mask_graphics_283 = new cjs.Graphics().p("EAEsAjjQtYk2mDs5QmDs5E2tXQE2taM3mDMAdNA+OQnLDYnUAAQl2AAl9iKg");
	var mask_graphics_284 = new cjs.Graphics().p("EAE9AjuQtdkpmQsyQmQszEotcQEotfMymQMAeLA9xQnWDmnmAAQlmAAluh+g");
	var mask_graphics_285 = new cjs.Graphics().p("EAFOAj5QthkcmdssQmdssEathQEbtjMrmdMAfJA9SQniD1n2AAQlXAAlfhyg");
	var mask_graphics_286 = new cjs.Graphics().p("EAFfAkDQtmkOmpsmQmqslENtlQENtoMmmpMAgFA8xQnuEFoHAAQlGAAlRhng");
	var mask_graphics_287 = new cjs.Graphics().p("EAFwAkMQtpkAm2sfQm2seD+tqQEAtrMem2MAhDA8QQn5EWoYAAQk3AAlCheg");
	var mask_graphics_288 = new cjs.Graphics().p("EAGCAkVQttjynDsYQnDsYDxttQDytvMYnDMAh/A7vQoEEmoqAAQknAAkyhUg");
	var mask_graphics_289 = new cjs.Graphics().p("EAGUAkeQtxjlnPsQQnPsRDjtxQDktzMQnPMAi8A7MQoPE3o7AAQkYAAkihKg");
	var mask_graphics_290 = new cjs.Graphics().p("EAGnAkmQt1jXnbsJQncsJDVt0QDWt3MJnbMAj3A6oQoZFIpNAAQkHAAkShBg");
	var mask_graphics_291 = new cjs.Graphics().p("EAG5AktQt4jInnsCQnosCDHt3QDIt6MCnoMAkxA6EQoiFbpgAAQj3AAkCg6g");
	var mask_graphics_292 = new cjs.Graphics().p("EAHMAk0Qt7i6nzr6Qn0r6C5t7QC6t9L6nzMAlrA5eQosFtpyAAQjnAAjxgyg");
	var mask_graphics_293 = new cjs.Graphics().p("EAHfAk6Qt+isn/ryQoAryCrt9QCsuALyn/MAmlA44Qo1F/qFAAQjXAAjggrg");
	var mask_graphics_294 = new cjs.Graphics().p("EAHzAlAQuBieoLrqQoMrpCduAQCeuDLqoLMAneA4QQo+GTqYAAQjHAAjOgkg");
	var mask_graphics_295 = new cjs.Graphics().p("EAIGAlGQuCiQoYriQoXrhCPuCQCPuFLioXMAoXA3oQpHGnqsAAQi2AAi9geg");
	var mask_graphics_296 = new cjs.Graphics().p("EAIaAlLQuFiCoirZQojrZCBuEQCBuHLYojMApPA2/QpOG7rAAAQimAAirgYg");
	var mask_graphics_297 = new cjs.Graphics().p("EAIuAlPQuHh0ourQQourQBzuGQByuJLRouMAqGA2VQpXHPrVAAQiTAAiagTg");
	var mask_graphics_298 = new cjs.Graphics().p("EAJDAlTQuJhmo5rHQo6rHBluIQBkuLLHo5MAq9A1qQpeHkrqAAQiDAAiGgOg");
	var mask_graphics_299 = new cjs.Graphics().p("EAJXAlWQuKhXpEq/QpFq+BWuJQBWuMK+pFMArzA0/QplH6sAAAQhxAAh0gLg");
	var mask_graphics_300 = new cjs.Graphics().p("EAJsAlYQuLhIpQq1QpPq1BHuMQBIuMK1pQMAsnA0SQpqIQsXAAQhfAAhhgIg");
	var mask_graphics_301 = new cjs.Graphics().p("EAKBAlbQuNg7paqsQpaqrA5uNQA6uNKrpaMAtcAzkQpxImstAAQhNAAhOgEg");
	var mask_graphics_302 = new cjs.Graphics().p("EAKWAlcQuNgsplqiQplqiAruOQAruOKiplMAuPAy2Qp2I+tFAAQg6AAg7gDg");
	var mask_graphics_303 = new cjs.Graphics().p("EAKrAldQuNgepwqYQpwqYAduOQAduPKYpwMAvDAyIQp8JUteAAIhOgBg");
	var mask_graphics_304 = new cjs.Graphics().p("EALBAldQuOgPp6qOQp6qPAOuOQAPuPKOp6MAv0AxXQqAJtt3AAIgmgBg");
	var mask_graphics_305 = new cjs.Graphics().p("As8bYQqEqEAAuPQAAuPKEqEMAwmAwmQqEKFuPAAQuPgBqEqEg");
	var mask_graphics_306 = new cjs.Graphics().p("AswbwQqOp6gOuPQgPuPJ6qOMAxXAv1Qp6KOuPAPIgmABQt2AAqBptg");
	var mask_graphics_307 = new cjs.Graphics().p("AsjcHQqYpwgduOQgduOJwqYMAyGAvDQpvKYuPAdIhNABQtdAAp8pVg");
	var mask_graphics_308 = new cjs.Graphics().p("AsWceQqiplgruNQgruPJlqhMAy1AuQQplKiuOArQg6ADg6AAQtEAAp3o+g");
	var mask_graphics_309 = new cjs.Graphics().p("AsJc0Qqspag5uNQg5uNJaqsMAzkAtdQpbKruNA6QhOAFhMAAQstAApxong");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(189).to({graphics:mask_graphics_189,x:245.2,y:192.5}).wait(1).to({graphics:mask_graphics_190,x:244.3,y:194}).wait(1).to({graphics:mask_graphics_191,x:243.5,y:195.4}).wait(1).to({graphics:mask_graphics_192,x:242.6,y:196.8}).wait(1).to({graphics:mask_graphics_193,x:241.7,y:198.2}).wait(1).to({graphics:mask_graphics_194,x:240.8,y:199.6}).wait(1).to({graphics:mask_graphics_195,x:239.8,y:201}).wait(1).to({graphics:mask_graphics_196,x:238.9,y:202.3}).wait(1).to({graphics:mask_graphics_197,x:237.9,y:203.7}).wait(1).to({graphics:mask_graphics_198,x:236.9,y:205}).wait(1).to({graphics:mask_graphics_199,x:235.8,y:206.3}).wait(1).to({graphics:mask_graphics_200,x:234.8,y:207.6}).wait(1).to({graphics:mask_graphics_201,x:233.7,y:208.8}).wait(1).to({graphics:mask_graphics_202,x:232.6,y:210.1}).wait(1).to({graphics:mask_graphics_203,x:231.5,y:211.3}).wait(1).to({graphics:mask_graphics_204,x:230.4,y:212.5}).wait(1).to({graphics:mask_graphics_205,x:229.2,y:213.7}).wait(1).to({graphics:mask_graphics_206,x:228,y:214.8}).wait(1).to({graphics:mask_graphics_207,x:226.8,y:216}).wait(1).to({graphics:mask_graphics_208,x:225.6,y:217.1}).wait(1).to({graphics:mask_graphics_209,x:224.3,y:218.2}).wait(1).to({graphics:mask_graphics_210,x:223.1,y:219.3}).wait(1).to({graphics:mask_graphics_211,x:221.8,y:220.4}).wait(1).to({graphics:mask_graphics_212,x:220.5,y:221.4}).wait(1).to({graphics:mask_graphics_213,x:219.2,y:222.4}).wait(1).to({graphics:mask_graphics_214,x:217.9,y:223.4}).wait(1).to({graphics:mask_graphics_215,x:216.5,y:224.4}).wait(1).to({graphics:mask_graphics_216,x:215.1,y:225.3}).wait(1).to({graphics:mask_graphics_217,x:213.8,y:226.3}).wait(1).to({graphics:mask_graphics_218,x:212.4,y:227.2}).wait(1).to({graphics:mask_graphics_219,x:210.9,y:228}).wait(1).to({graphics:mask_graphics_220,x:209.5,y:228.9}).wait(1).to({graphics:mask_graphics_221,x:208.1,y:229.7}).wait(1).to({graphics:mask_graphics_222,x:206.6,y:230.5}).wait(1).to({graphics:mask_graphics_223,x:205.1,y:231.3}).wait(1).to({graphics:mask_graphics_224,x:203.6,y:232.1}).wait(1).to({graphics:mask_graphics_225,x:202.1,y:232.8}).wait(1).to({graphics:mask_graphics_226,x:200.6,y:233.5}).wait(1).to({graphics:mask_graphics_227,x:199.1,y:234.2}).wait(1).to({graphics:mask_graphics_228,x:197.5,y:234.9}).wait(1).to({graphics:mask_graphics_229,x:196,y:235.5}).wait(1).to({graphics:mask_graphics_230,x:194.4,y:236.1}).wait(1).to({graphics:mask_graphics_231,x:192.8,y:236.7}).wait(1).to({graphics:mask_graphics_232,x:191.2,y:237.3}).wait(1).to({graphics:mask_graphics_233,x:189.6,y:237.8}).wait(1).to({graphics:mask_graphics_234,x:188,y:238.3}).wait(1).to({graphics:mask_graphics_235,x:186.4,y:238.8}).wait(1).to({graphics:mask_graphics_236,x:184.7,y:239.3}).wait(1).to({graphics:mask_graphics_237,x:183.1,y:239.7}).wait(1).to({graphics:mask_graphics_238,x:181.4,y:240.1}).wait(1).to({graphics:mask_graphics_239,x:179.8,y:240.5}).wait(1).to({graphics:mask_graphics_240,x:178.1,y:240.8}).wait(1).to({graphics:mask_graphics_241,x:176.4,y:241.2}).wait(1).to({graphics:mask_graphics_242,x:174.7,y:241.4}).wait(1).to({graphics:mask_graphics_243,x:173,y:241.7}).wait(1).to({graphics:mask_graphics_244,x:171.4,y:242}).wait(1).to({graphics:mask_graphics_245,x:169.6,y:242.2}).wait(1).to({graphics:mask_graphics_246,x:167.9,y:242.4}).wait(1).to({graphics:mask_graphics_247,x:166.2,y:242.5}).wait(1).to({graphics:mask_graphics_248,x:164.5,y:242.7}).wait(1).to({graphics:mask_graphics_249,x:162.8,y:242.8}).wait(1).to({graphics:mask_graphics_250,x:161.1,y:242.9}).wait(1).to({graphics:mask_graphics_251,x:159.3,y:242.9}).wait(1).to({graphics:mask_graphics_252,x:157.6,y:242.9}).wait(1).to({graphics:mask_graphics_253,x:155.9,y:242.9}).wait(1).to({graphics:mask_graphics_254,x:154.1,y:242.9}).wait(1).to({graphics:mask_graphics_255,x:152.4,y:242.8}).wait(1).to({graphics:mask_graphics_256,x:153.6,y:242.8}).wait(1).to({graphics:mask_graphics_257,x:155.3,y:242.7}).wait(1).to({graphics:mask_graphics_258,x:157,y:242.6}).wait(1).to({graphics:mask_graphics_259,x:158.7,y:242.6}).wait(1).to({graphics:mask_graphics_260,x:160.4,y:242.5}).wait(1).to({graphics:mask_graphics_261,x:162.2,y:242.5}).wait(1).to({graphics:mask_graphics_262,x:163.9,y:242.4}).wait(1).to({graphics:mask_graphics_263,x:165.6,y:242.4}).wait(1).to({graphics:mask_graphics_264,x:167.3,y:242.3}).wait(1).to({graphics:mask_graphics_265,x:169,y:242.3}).wait(1).to({graphics:mask_graphics_266,x:170.7,y:242.2}).wait(1).to({graphics:mask_graphics_267,x:172.3,y:242.2}).wait(1).to({graphics:mask_graphics_268,x:174,y:242.1}).wait(1).to({graphics:mask_graphics_269,x:175.7,y:242.1}).wait(1).to({graphics:mask_graphics_270,x:177.4,y:242}).wait(1).to({graphics:mask_graphics_271,x:179,y:242}).wait(1).to({graphics:mask_graphics_272,x:180.7,y:241.9}).wait(1).to({graphics:mask_graphics_273,x:182.3,y:241.9}).wait(1).to({graphics:mask_graphics_274,x:184,y:241.8}).wait(1).to({graphics:mask_graphics_275,x:185.6,y:241.8}).wait(1).to({graphics:mask_graphics_276,x:187.2,y:241.7}).wait(1).to({graphics:mask_graphics_277,x:188.8,y:241.6}).wait(1).to({graphics:mask_graphics_278,x:190.4,y:241.6}).wait(1).to({graphics:mask_graphics_279,x:192,y:241.5}).wait(1).to({graphics:mask_graphics_280,x:193.6,y:241.5}).wait(1).to({graphics:mask_graphics_281,x:195.1,y:241.4}).wait(1).to({graphics:mask_graphics_282,x:196.7,y:241.3}).wait(1).to({graphics:mask_graphics_283,x:198.2,y:241.3}).wait(1).to({graphics:mask_graphics_284,x:199.7,y:241.2}).wait(1).to({graphics:mask_graphics_285,x:201.2,y:241.1}).wait(1).to({graphics:mask_graphics_286,x:202.7,y:241}).wait(1).to({graphics:mask_graphics_287,x:204.2,y:241}).wait(1).to({graphics:mask_graphics_288,x:205.7,y:240.9}).wait(1).to({graphics:mask_graphics_289,x:207.2,y:240.8}).wait(1).to({graphics:mask_graphics_290,x:208.6,y:240.7}).wait(1).to({graphics:mask_graphics_291,x:210,y:240.7}).wait(1).to({graphics:mask_graphics_292,x:211.4,y:240.6}).wait(1).to({graphics:mask_graphics_293,x:212.8,y:240.5}).wait(1).to({graphics:mask_graphics_294,x:214.2,y:240.4}).wait(1).to({graphics:mask_graphics_295,x:215.6,y:240.4}).wait(1).to({graphics:mask_graphics_296,x:216.9,y:240.3}).wait(1).to({graphics:mask_graphics_297,x:218.3,y:240.2}).wait(1).to({graphics:mask_graphics_298,x:219.6,y:240.1}).wait(1).to({graphics:mask_graphics_299,x:220.9,y:240.1}).wait(1).to({graphics:mask_graphics_300,x:222.1,y:240}).wait(1).to({graphics:mask_graphics_301,x:223.4,y:239.9}).wait(1).to({graphics:mask_graphics_302,x:224.6,y:239.9}).wait(1).to({graphics:mask_graphics_303,x:225.8,y:239.8}).wait(1).to({graphics:mask_graphics_304,x:227,y:239.8}).wait(1).to({graphics:mask_graphics_305,x:228.2,y:239.7}).wait(1).to({graphics:mask_graphics_306,x:229.4,y:239.7}).wait(1).to({graphics:mask_graphics_307,x:230.5,y:239.6}).wait(1).to({graphics:mask_graphics_308,x:231.6,y:239.6}).wait(1).to({graphics:mask_graphics_309,x:232.7,y:239.5}).wait(71));

	// letter
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AVFS1QgEAFgFAEQgdAfgdAeQm9G6pmAAQqOAAnQn3QnPn3AArHQAArGHPn4QHQn2KOAAQKPAAHOH2QAKAKAJAK");
	this.shape_1.setTransform(273.2,268.8,1,0.99);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(189).to({_off:false},0).wait(191));

	// Layer 3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_9 = new cjs.Graphics().p("EADFAlcQuNg6paqtMAzogtYQJaKtg6OMQg8ONqsJaQpwIksqAAQhPAAhQgFg");
	var mask_1_graphics_10 = new cjs.Graphics().p("EADoAlfQuOgspkqiMAy4guOQJkKigrOOQgsOOqjJlQp1I8tDAAQg7AAg9gDg");
	var mask_1_graphics_11 = new cjs.Graphics().p("EAEMAlhQuPgdpvqYMAyHgvDQJvKZgcONQgdOPqZJwQp7JUtbAAIhQgBg");
	var mask_1_graphics_12 = new cjs.Graphics().p("EAEwAljQuQgOp6qOMAxVgv3QJ7KOgNOOQgPOPqOJ7QqAJtt2AAIgmAAg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AzBbhMAwjgwqQKFKDABOPQABOPqEKFQqDKFuPABIgDAAQuNAAqEqCg");
	var mask_1_graphics_14 = new cjs.Graphics().p("Ayob7MAvvgxdQKQJ5AROOQAPOPp5KQQp5KQuOAQIgtAAQtzAAp/ppg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AyOcUMAu7gyOQKZJuAgOOQAeOPpuKZQpuKauOAfIhWACQtYAAp6pRg");
	var mask_1_graphics_16 = new cjs.Graphics().p("Ax0ctMAuGgy/QKjJjAvONQAtOPpjKjQpjKkuNAuQhAADg/AAQs/ABp0o5g");
	var mask_1_graphics_17 = new cjs.Graphics().p("AxadGMAtQgzvQKuJYA9OMQA8ONpYKuQpYKuuMA9QhUAFhSAAQsmAApvogg");
	var mask_1_graphics_18 = new cjs.Graphics().p("Aw/deMAsZg0eQK4JMBMOLQBLONpNK3QpMK4uMBLQhnAJhlAAQsPAApooJg");
	var mask_1_graphics_19 = new cjs.Graphics().p("Awkd1MArig1MQLBJBBbOLQBaOKpBLBQpBLBuKBbQh8AMh3AAQr4AAphnzg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AwJeMMAqqg15QLLI1BqOKQBoOIo1LKQo2LLuIBpQiPARiJAAQriAApandg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AvtejMApxg2mQLUIqB5OHQB3OHoqLTQopLUuHB4QihAWicAAQrLAApTnHg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AvRe5MAo4g3RQLcIeCIOFQCGOEoeLdQoeLduECHQi0AbitAAQq2AApLmyg");
	var mask_1_graphics_23 = new cjs.Graphics().p("Au0fPMAn9g38QLlISCXODQCVOCoSLlQoSLmuCCVQjGAii/AAQqhAApCmdg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AuXfkMAnCg4lQLuIGClOAQCjN/oFLuQoGLut/ClQjZAnjQAAQqMAAo5mIg");
	var mask_1_graphics_25 = new cjs.Graphics().p("At6f5MAmGg5OQL3H5C0N+QCyN9n5L2Qn6L2t8CzQjrAvjhAAQp4AAowl0g");
	var mask_1_graphics_26 = new cjs.Graphics().p("EgNcAgNMAlKg51QL+HtDDN6QDAN6nsL+QntL/t6DBQj7A3jyAAQplAAomlhg");
	var mask_1_graphics_27 = new cjs.Graphics().p("EgM+AghMAkNg6cQMGHgDRN3QDQN3ngMGQnhMHt2DQQkNA/kCAAQpSAAoclOg");
	var mask_1_graphics_28 = new cjs.Graphics().p("EgMgAg0MAjPg7BQMPHTDfN0QDeNznTMOQnUMOtyDfQkeBIkTAAQpAAAoRk8g");
	var mask_1_graphics_29 = new cjs.Graphics().p("EgMBAhHMAiRg7lQMWHGDuNwQDsNvnHMWQnGMVtvDtQkuBSkkAAQotAAoGkqg");
	var mask_1_graphics_30 = new cjs.Graphics().p("EgLjAhZMAhTg8JQMdG6D8NrQD7Nsm5MdQm6MdtrD7Qk+Bck0AAQobAAn8kZg");
	var mask_1_graphics_31 = new cjs.Graphics().p("EgLDAhrMAgTg8rQMkGsELNnQEJNnmsMlQmtMktnEKQlOBmlFAAQoIAAnwkIg");
	var mask_1_graphics_32 = new cjs.Graphics().p("EgKkAh8MAfTg9MQMsGfEZNjQEXNimfMrQmfMstjEYQleBxlUAAQn4AAnkj4g");
	var mask_1_graphics_33 = new cjs.Graphics().p("EgKEAiNMAeTg9tQMyGSEnNeQElNemRMyQmSMyteEmQltB8llAAQnmAAnYjng");
	var mask_1_graphics_34 = new cjs.Graphics().p("EgJkAidMAdSg+MQM4GEE2NaQEzNZmEM4QmEM4tZE1Ql8CIl2AAQnVAAnLjYg");
	var mask_1_graphics_35 = new cjs.Graphics().p("EgJDAitMAcQg+qQM/F3FDNUQFBNTl2M/Ql3M/tUFCQmKCVmGAAQnEAAm+jJg");
	var mask_1_graphics_36 = new cjs.Graphics().p("EgIjAi8MAbPg/HQNEFpFRNPQFQNOlpNFQlpNEtOFQQmZCjmXAAQmzAAmxi7g");
	var mask_1_graphics_37 = new cjs.Graphics().p("EgICAjLMAaMg/jQNLFbFfNJQFdNJlbNKQlcNLtIFeQmnCwmnAAQmiAAmkitg");
	var mask_1_graphics_38 = new cjs.Graphics().p("EgHgAjZMAZJg/+QNQFNFsNEQFrNDlNNQQlNNQtDFrQm1C+m4AAQmRAAmVifg");
	var mask_1_graphics_39 = new cjs.Graphics().p("EgG/AjnMAYGhAYQNVE/F6M+QF5M8k/NWQlANVs8F5QnCDNnJAAQmBAAmHiSg");
	var mask_1_graphics_40 = new cjs.Graphics().p("EgGdAj0MAXChAxQNaEyGIM3QGGM2kxNbQkxNas3GHQnPDcnZAAQlxAAl4iGg");
	var mask_1_graphics_41 = new cjs.Graphics().p("EgF7AkBMAV+hBJQNfEkGVMwQGUMwkjNgQkkNfswGUQnbDsnrAAQlgAAlph6g");
	var mask_1_graphics_42 = new cjs.Graphics().p("EgFZAkNMAU6hBfQNjEVGjMqQGhMpkVNkQkVNkspGiQnoD7n8AAQlRAAlZhug");
	var mask_1_graphics_43 = new cjs.Graphics().p("EgE3AkYMAT1hB0QNoEHGwMjQGuMjkGNoQkHNosjGvQnzEMoOAAQlAAAlKhkg");
	var mask_1_graphics_44 = new cjs.Graphics().p("EgEUAkjMASvhCIQNtD5G9MbQG7Mcj4NsQj5NtsbG7Qn/EeogAAQkwAAk5hag");
	var mask_1_graphics_45 = new cjs.Graphics().p("EgDxAkuMARqhCbQNwDqHKMUQHIMVjqNvQjqNxsUHIQoKEvoyAAQkfAAkphPg");
	var mask_1_graphics_46 = new cjs.Graphics().p("EgDOAk4MAQkhCtQN0DbHXMNQHVMNjcNzQjbN1sMHVQoVFBpFAAQkPAAkYhGg");
	var mask_1_graphics_47 = new cjs.Graphics().p("EgCrAlBMAPehC+QN4DNHjMFQHiMFjNN3QjNN4sFHiQofFTpXAAQj+AAkIg9g");
	var mask_1_graphics_48 = new cjs.Graphics().p("EgCIAlKMAOYhDOQN7C/HwL8QHuL+i+N6Qi/N7r8HvQopFmprAAQjtAAj3g1g");
	var mask_1_graphics_49 = new cjs.Graphics().p("EgBkAlSMANRhDcQN+CwH8L0QH7L2iwN9QiwN+r0H7QozF6p9AAQjdAAjlgug");
	var mask_1_graphics_50 = new cjs.Graphics().p("EgBBAlaMAMKhDqQOBCiIJLsQIHLsihOAQihOBrsIIQo8GNqSAAQjMAAjTgmg");
	var mask_1_graphics_51 = new cjs.Graphics().p("EgAdAlhMALDhD2QODCTIVLjQIULkiTODQiSODrjIUQpFGiqmAAQi7AAjBggg");
	var mask_1_graphics_52 = new cjs.Graphics().p("EAAGAloMAJ9hEBQOFCEIhLaQIgLbiEOFQiEOGraIgQpNG2q7AAQiqAAivgZg");
	var mask_1_graphics_53 = new cjs.Graphics().p("EAAqAluMAI1hELQOIB1ItLRQIrLTh1OGQh1OIrRIsQpVHMrRAAQiXAAidgUg");
	var mask_1_graphics_54 = new cjs.Graphics().p("EABOAlzMAHuhEUQOJBnI5LIQI3LJhmOJQhnOJrII4QpcHhrnAAQiFAAiKgPg");
	var mask_1_graphics_55 = new cjs.Graphics().p("EAByAl4MAGmhEbQOLBXJEK/QJDLAhXOKQhYOLq+JDQpkH4r9AAQh0AAh2gLg");
	var mask_1_graphics_56 = new cjs.Graphics().p("EACWAl8MAFehEhQONBIJPK1QJPK3hJOLQhJOMq1JPQpqIPsUAAQhhAAhjgIg");
	var mask_1_graphics_57 = new cjs.Graphics().p("EAC6Al/MAEXhEmQONA6JbKrQJZKsg5ONQg6ONqrJaQpxImssAAQhOAAhPgFg");
	var mask_1_graphics_58 = new cjs.Graphics().p("EADeAmCMADPhEqQOOArJmKhQJlKjgrONQgrOOqhJlQp3I+tEAAQg7AAg7gDg");
	var mask_1_graphics_59 = new cjs.Graphics().p("EAECAmEMACHhEtQOPAcJxKXQJvKZgcOOQgbOOqYJwQp8JXtdAAIhOgCg");
	var mask_1_graphics_60 = new cjs.Graphics().p("EAEmAmGMAA/hEvQOPANJ8KNQJ6KOgNOOQgNOQqMJ6QqBJvt4AAIglAAg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AFB+oQOPgCKHKCQKFKEACOOQACOPqDKGQqDKGuPACg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AEd+nQOPgRKRJ4QKPJ5AROOQAROPp3KQQp5KRuPARg");
	var mask_1_graphics_63 = new cjs.Graphics().p("AD5+kQOPggKbJtQKaJuAfONQAgOPptKaQpuKbuOAgg");
	var mask_1_graphics_64 = new cjs.Graphics().p("ADV+hQOOgvKlJiQKkJjAvONQAvOOpiKkQpjKluOAvg");
	var mask_1_graphics_65 = new cjs.Graphics().p("ACx+dQONg+KvJXQKuJYA+OMQA9ONpWKuQpYKvuNA+g");
	var mask_1_graphics_66 = new cjs.Graphics().p("ACN+YQOMhNK5JLQK3JNBNOLQBNOMpMK4QpMK5uMBMg");
	var mask_1_graphics_67 = new cjs.Graphics().p("ABp+TQOLhbLCJAQLBJBBcOKQBbOKpALBQpBLDuKBbg");
	var mask_1_graphics_68 = new cjs.Graphics().p("ABF+MQOJhqLMI0QLKI2BrOJQBqOIo0LKQo2LMuJBqg");
	var mask_1_graphics_69 = new cjs.Graphics().p("AAi+FQOHh5LUIpQLUIqB5OHQB5OGooLUQoqLVuHB5g");
	var mask_1_graphics_70 = new cjs.Graphics().p("AgB98QOEiILdIdQLdIdCIOFQCIOEodLdQodLeuFCIg");
	var mask_1_graphics_71 = new cjs.Graphics().p("Agl9zQOCiWLmIQQLmISCWOCQCXOCoRLlQoRLnuDCXg");
	var mask_1_graphics_72 = new cjs.Graphics().p("AhI9pQN/ilLvIEQLuIGClOAQClN/oELuQoFLvuAClg");
	var mask_1_graphics_73 = new cjs.Graphics().p("Ahs9eQN9i0L3H4QL2H5C0N+QC0N8n4L2Qn5L4t9C0g");
	var mask_1_graphics_74 = new cjs.Graphics().p("AiP9SQN5jCMAHrQL+HtDDN6QDDN5nsL+QnsMAt6DDg");
	var mask_1_graphics_75 = new cjs.Graphics().p("Aiy9FQN2jRMHHeQMHHhDRN2QDRN2nfMHQnfMIt3DRg");
	var mask_1_graphics_76 = new cjs.Graphics().p("AjV84QNyjfMQHSQMOHTDgNzQDfNznSMOQnTMPtzDgg");
	var mask_1_graphics_77 = new cjs.Graphics().p("Aj48pQNvjuMXHFQMWHGDuNwQDuNunGMWQnGMXtvDug");
	var mask_1_graphics_78 = new cjs.Graphics().p("Aka8aQNqj8MeG4QMeG5D8NsQD8Nqm4MdQm5MftrD8g");
	var mask_1_graphics_79 = new cjs.Graphics().p("Ak98KQNnkKMlGqQMkGtELNnQELNmmrMkQmsMmtoELg");
	var mask_1_graphics_80 = new cjs.Graphics().p("Alf75QNikZMsGeQMrGfEZNjQEZNimeMrQmeMstjEZg");
	var mask_1_graphics_81 = new cjs.Graphics().p("AmB7nQNdknMzGQQMyGSEnNeQEnNdmQMyQmSMzteEng");
	var mask_1_graphics_82 = new cjs.Graphics().p("Amj7UQNZk1M5GCQM4GFE1NZQE2NYmDM4QmEM6tZE1g");
	var mask_1_graphics_83 = new cjs.Graphics().p("AnE7BQNTlDM/F1QM/F3FDNUQFDNTl1M+Ql2NAtUFDg");
	var mask_1_graphics_84 = new cjs.Graphics().p("Anl6tQNNlRNGFoQNEFpFRNPQFSNNloNEQlpNGtOFRg");
	var mask_1_graphics_85 = new cjs.Graphics().p("AoG6XQNIlfNLFZQNKFcFfNJQFfNIlaNKQlbNLtJFfg");
	var mask_1_graphics_86 = new cjs.Graphics().p("Aon6BQNCltNRFMQNQFNFsNDQFtNClMNQQlNNRtDFtg");
	var mask_1_graphics_87 = new cjs.Graphics().p("ApH5rQM7l6NWE+QNWE/F6M9QF7M8k/NVQk/NXs9F6g");
	var mask_1_graphics_88 = new cjs.Graphics().p("Apo5TQM2mINbEwQNbExGHM3QGIM2kwNaQkxNcs3GHg");
	var mask_1_graphics_89 = new cjs.Graphics().p("AqI47QMvmVNgEiQNgEjGVMwQGVMvkiNfQkjNhswGVg");
	var mask_1_graphics_90 = new cjs.Graphics().p("Aqn4iQMomiNlETQNkEVGiMqQGjMokUNkQkVNlspGjg");
	var mask_1_graphics_91 = new cjs.Graphics().p("ArG4IQMhmwNpEGQNoEHGwMiQGwMhkGNoQkGNqsiGwg");
	var mask_1_graphics_92 = new cjs.Graphics().p("Arm3tQMbm9NtD3QNtD5G8MbQG9Maj3NsQj4NusbG9g");
	var mask_1_graphics_93 = new cjs.Graphics().p("AsE3SQMTnKNxDpQNwDqHKMUQHKMTjpNwQjqNysTHKg");
	var mask_1_graphics_94 = new cjs.Graphics().p("Asj22QMNnWNzDaQN1DcHXMMQHWMLjaN0QjbN1sNHXg");
	var mask_1_graphics_95 = new cjs.Graphics().p("AtB2ZQMFnjN3DMQN4DNHjMEQHkMEjMN3QjNN5sEHjg");
	var mask_1_graphics_96 = new cjs.Graphics().p("Ate17QL8nwN7C9QN7C/HwL8QHwL7i+N7Qi+N8r8Hwg");
	var mask_1_graphics_97 = new cjs.Graphics().p("At81dQL0n8N+CuQN+CwH9L1QH8L0ivN8QivN/r0H9g");
	var mask_1_graphics_98 = new cjs.Graphics().p("AuZ0+QLsoIOACfQOBCiIJLsQIJLrihOAQigOCrsIIg");
	var mask_1_graphics_99 = new cjs.Graphics().p("Au10eQLjoVOCCRQOECTIVLjQIVLjiSOCQiSOFrjIUg");
	var mask_1_graphics_100 = new cjs.Graphics().p("AvSz9QLbohOFCCQOFCEIhLaQIhLbiDOEQiDOGraIhg");
	var mask_1_graphics_101 = new cjs.Graphics().p("AvuzcQLSotOHB0QOHB1ItLRQItLRh0OGQh0OJrRItg");
	var mask_1_graphics_102 = new cjs.Graphics().p("AwJy6QLIo4OJBkQOJBnI5LIQI4LIhlOHQhlOLrII4g");
	var mask_1_graphics_103 = new cjs.Graphics().p("AwkyXQK+pEOLBVQOLBYJEK+QJEK/hWOJQhXONq/JEg");
	var mask_1_graphics_104 = new cjs.Graphics().p("Aw/x0QK1pPOLBGQONBJJPK1QJQK1hIOLQhHONq1JQg");
	var mask_1_graphics_105 = new cjs.Graphics().p("AxaxQQKspbOMA4QOOA6JbKrQJaKrg4OMQg5OOqrJbg");
	var mask_1_graphics_106 = new cjs.Graphics().p("Ax0wrQKhpmOOApQOOArJmKhQJmKhgqONQgpOPqiJmg");
	var mask_1_graphics_107 = new cjs.Graphics().p("AyNwGQKXpxOOAaQOOAcJxKXQJxKXgbONQgaOQqYJxg");
	var mask_1_graphics_108 = new cjs.Graphics().p("AynvgQKNp8OOALQOPANJ8KNQJ8KNgMONQgMOQqNJ8g");
	var mask_1_graphics_109 = new cjs.Graphics().p("AzAu6QKCqGOPgEQOPgCKGKDQKHKCADOOQADOQqDKGg");
	var mask_1_graphics_110 = new cjs.Graphics().p("AzYuSQJ3qROOgTQOPgRKRJ4QKRJ4ASONQASOQp4KRg");
	var mask_1_graphics_111 = new cjs.Graphics().p("AzxtrQJtqbOOghQOPggKbJtQKbJsAgONQAhOQpsKbg");
	var mask_1_graphics_112 = new cjs.Graphics().p("A0ItCQJhqlONgxQOOgvKmJiQKlJiAvOMQAwOPpiKlg");
	var mask_1_graphics_113 = new cjs.Graphics().p("A0gsZQJXqvOMhAQONg9KvJWQKvJXA/OLQA+OOpWKvg");
	var mask_1_graphics_114 = new cjs.Graphics().p("A03rwQJLq5OLhOQONhMK4JLQK5JLBNOKQBOONpLK5g");
	var mask_1_graphics_115 = new cjs.Graphics().p("A1NrGQI/rCOKhdQOLhcLCJAQLCJABdOJQBcOLpALCg");
	var mask_1_graphics_116 = new cjs.Graphics().p("A1jqbQI0rMOIhsQOJhqLLI0QLMI0BrOHQBrOKo0LMg");
	var mask_1_graphics_117 = new cjs.Graphics().p("A15pwQIorVOGh7QOIh5LUIpQLVIoB6OFQB6OIooLVg");
	var mask_1_graphics_118 = new cjs.Graphics().p("A2OpEQIcreOEiKQOFiHLeIcQLeIcCIODQCJOGocLeg");
	var mask_1_graphics_119 = new cjs.Graphics().p("A2joYQIQrnODiYQOCiWLmIQQLnIQCXOBQCYODoRLng");
	var mask_1_graphics_120 = new cjs.Graphics().p("A23nsQIEruOAinQN/imLvIEQLvIECmN/QCnOAoELvg");
	var mask_1_graphics_121 = new cjs.Graphics().p("A3Lm+QH4r4N9i1QN8i0L4H3QL3H4C1N7QC1N+n4L4g");
	var mask_1_graphics_122 = new cjs.Graphics().p("A3emRQHrr/N6jEQN6jDL/HrQMAHrDDN5QDEN7nsL/g");
	var mask_1_graphics_123 = new cjs.Graphics().p("A3wljQHesHN3jTQN2jRMHHfQMIHeDRN1QDTN4nfMHg");
	var mask_1_graphics_124 = new cjs.Graphics().p("A4Dk0QHSsPNzjhQNzjgMPHSQMPHRDgNyQDhN0nSMPg");
	var mask_1_graphics_125 = new cjs.Graphics().p("A4UkFQHFsXNvjvQNvjuMWHEQMXHFDvNuQDvNwnFMXg");
	var mask_1_graphics_126 = new cjs.Graphics().p("A4ljWQG4seNrj+QNqj8MeG4QMeG4D+NpQD9Nsm4Meg");
	var mask_1_graphics_127 = new cjs.Graphics().p("A42imQGrslNnkMQNmkLMlGrQMlGrEMNlQEMNomrMlg");
	var mask_1_graphics_128 = new cjs.Graphics().p("A5Gh1QGessNikbQNikZMsGdQMsGeEaNhQEaNjmeMsg");
	var mask_1_graphics_129 = new cjs.Graphics().p("A5VhFQGQsyNdkpQNeknMyGQQMzGQEoNcQEoNfmQMyg");
	var mask_1_graphics_130 = new cjs.Graphics().p("A5kgUQGCs5NZk3QNYk1M5GDQM6GCE1NYQE3NZmDM5g");
	var mask_1_graphics_131 = new cjs.Graphics().p("A5yAdQF1s/NTlEQNTlEM/F1QNAF1FENSQFENVl1M/g");
	var mask_1_graphics_132 = new cjs.Graphics().p("A6ABOQFntENOlTQNOlRNFFoQNFFnFSNNQFTNPloNFg");
	var mask_1_graphics_133 = new cjs.Graphics().p("A6NCAQFZtKNJlgQNIlfNLFZQNLFaFfNHQFgNJlZNLg");
	var mask_1_graphics_134 = new cjs.Graphics().p("A6aCzQFMtQNCluQNCltNRFMQNRFMFtNBQFuNDlMNRg");
	var mask_1_graphics_135 = new cjs.Graphics().p("A6mDmQE+tVM8l8QM8l7NWE+QNWE+F7M7QF8M9k+NWg");
	var mask_1_graphics_136 = new cjs.Graphics().p("A6yEZQEwtaM2mKQM2mINbEwQNbEwGJM0QGJM4kwNbg");
	var mask_1_graphics_137 = new cjs.Graphics().p("A68FMQEhtfMwmXQMvmVNgEiQNgEhGWMuQGWMxkiNgg");
	var mask_1_graphics_138 = new cjs.Graphics().p("A7HF/QEUtjMomkQMpmjNkEUQNlETGjMnQGkMqkTNlg");
	var mask_1_graphics_139 = new cjs.Graphics().p("A7QGzQEFtoMhmxQMimwNpEFQNpEGGwMgQGxMjkFNpg");
	var mask_1_graphics_140 = new cjs.Graphics().p("A7aHnQD3tsMbm+QMam9NtD3QNtD3G+MZQG+Mbj3Ntg");
	var mask_1_graphics_141 = new cjs.Graphics().p("A7iIcQDotwMTnMQMTnKNxDpQNxDoHLMTQHLMTjpNxg");
	var mask_1_graphics_142 = new cjs.Graphics().p("A7qJQQDat0MLnYQMMnXN0DaQN1DaHXMMQHYMLjaN1g");
	var mask_1_graphics_143 = new cjs.Graphics().p("A7xKFQDLt3MEnlQMEnkN3DMQN5DLHjMEQHlMDjLN4g");
	var mask_1_graphics_144 = new cjs.Graphics().p("A74K6QC9t7L7nxQL9nwN6C9QN8C9HwL7QHxL8i9N7g");
	var mask_1_graphics_145 = new cjs.Graphics().p("A7+LvQCut+Lzn+QL1n8N9CuQN+CvH9LzQH+LziuN+g");
	var mask_1_graphics_146 = new cjs.Graphics().p("A8EMkQCguALroKQLroJOACfQOCCgIJLrQIKLrigOBg");
	var mask_1_graphics_147 = new cjs.Graphics().p("A8JNZQCRuCLioXQLjoVODCRQOECRIVLiQIWLiiROEg");
	var mask_1_graphics_148 = new cjs.Graphics().p("A8NOPQCCuGLZoiQLaohOFCDQOGCCIhLZQIjLZiCOGg");
	var mask_1_graphics_149 = new cjs.Graphics().p("A8RPEQBzuILQotQLSotOHB0QOIBzItLQQIuLRhzOHg");
	var mask_1_graphics_150 = new cjs.Graphics().p("A8UP6QBkuKLHo5QLIo4OJBkQOJBlI5LHQI6LHhkOJg");
	var mask_1_graphics_151 = new cjs.Graphics().p("A8XQwQBVuLK+pFQK/pEOKBVQOLBWJFK+QJFK9hWOLg");
	var mask_1_graphics_152 = new cjs.Graphics().p("A8ZRmQBGuNK1pQQK1pPOLBGQONBHJPK0QJRK0hGOMg");
	var mask_1_graphics_153 = new cjs.Graphics().p("A8bSbQA4uNKqpbQKspbOMA4QOOA4JbKqQJcKqg4ONg");
	var mask_1_graphics_154 = new cjs.Graphics().p("A8cTRQApuOKgpmQKipmONApQOOApJmKgQJoKggpOOg");
	var mask_1_graphics_155 = new cjs.Graphics().p("A8cUHQAauOKWpyQKXpxOOAaQOPAbJxKVQJyKXgaOOg");
	var mask_1_graphics_156 = new cjs.Graphics().p("A8cU9QALuPKMp8QKNp8OOAMQOPALJ8KLQJ9KMgLOPg");
	var mask_1_graphics_157 = new cjs.Graphics().p("AyeirQKCqHOOgEQOQgDKGKBQKIKBAEOPMhEwAASQgDuPKBqGg");
	var mask_1_graphics_158 = new cjs.Graphics().p("Ay2ikQJ3qROOgSQOPgTKRJ2QKSJ3ATOPMhEuABaQgTuPJ3qRg");
	var mask_1_graphics_159 = new cjs.Graphics().p("AzOicQJtqbOOghQOOgiKbJsQKdJrAhOPMhEsACiQghuOJrqcg");
	var mask_1_graphics_160 = new cjs.Graphics().p("AzkiTQJhqlONgxQOOgwKlJgQKnJhAwOOMhEoADqQgxuOJhqlg");
	var mask_1_graphics_161 = new cjs.Graphics().p("Az6iKQJWqvOMhAQONg/KvJVQKxJWA/ONMhEkAEyQhAuNJWqvg");
	var mask_1_graphics_162 = new cjs.Graphics().p("A0QiBQJMq5OKhOQOMhOK5JKQK6JKBOOLMhEeAF7QhPuMJKq5g");
	var mask_1_graphics_163 = new cjs.Graphics().p("A0kh3QJArDOJhdQOLhdLCI/QLDI+BeOKMhEZAHCQhduKI/rCg");
	var mask_1_graphics_164 = new cjs.Graphics().p("A04htQI0rMOIhsQOJhsLLIzQLNIzBsOJMhEQAIJQhsuJIzrLg");
	var mask_1_graphics_165 = new cjs.Graphics().p("A1LhjQIorVOGh6QOHh7LVInQLWInB7OHMhEHAJRQh7uHInrVg");
	var mask_1_graphics_166 = new cjs.Graphics().p("A1dhYQIcreOEiJQOFiKLdIbQLfIcCKOEMhD9AKYQiJuEIbreg");
	var mask_1_graphics_167 = new cjs.Graphics().p("A1vhNQIRrmOBiZQOCiYLnIPQLoIQCYOBMhDxALgQiZuCIPrng");
	var mask_1_graphics_168 = new cjs.Graphics().p("A1/hBQIErvN/inQN/inLvIDQLxIDCnN/MhDlAMnQinuAIDrvg");
	var mask_1_graphics_169 = new cjs.Graphics().p("A2Pg1QH3r4N9i1QN8i2L4H2QL4H4C2N8MhDXANtQi2t9H3r3g");
	var mask_1_graphics_170 = new cjs.Graphics().p("A2egpQHrr/N6jFQN4jEMAHqQMBHrDEN5MhDIAOzQjEt5HqsAg");
	var mask_1_graphics_171 = new cjs.Graphics().p("A2tgcQHfsIN2jTQN2jSMHHdQMJHeDTN2MhC4AP6QjTt3HdsHg");
	var mask_1_graphics_172 = new cjs.Graphics().p("A26gPQHRsPNzjiQNyjhMPHRQMRHRDhNyMhCmARAQjitzHRsPg");
	var mask_1_graphics_173 = new cjs.Graphics().p("A3HgCQHFsWNvjwQNujwMWHEQMYHEDwNuMhCUASGQjwtvHEsXg");
	var mask_1_graphics_174 = new cjs.Graphics().p("A3TALQG4sdNrj+QNqj+MeG2QMfG4D+NqMhCBATLQj+trG3sfg");
	var mask_1_graphics_175 = new cjs.Graphics().p("A3eAZQGqskNnkMQNmkNMlGqQMmGqENNmMhBsAUQQkNtnGqsmg");
	var mask_1_graphics_176 = new cjs.Graphics().p("A3pAoQGesrNikbQNhkbMsGdQMtGdEbNhMhBWAVVQkbtiGcstg");
	var mask_1_graphics_177 = new cjs.Graphics().p("A3yA3QGQsyNdkpQNdkpMyGPQM0GQEpNcMhA/AWaQkpteGPszg");
	var mask_1_graphics_178 = new cjs.Graphics().p("A37BGQGCs4NZk3QNYk3M4GBQM7GDE3NXMhAoAXdQk2tYGBs6g");
	var mask_1_graphics_179 = new cjs.Graphics().p("A4DBVQF1s+NTlFQNTlFM/F0QNAF1FFNSMhAOAYhQlFtTF0tBg");
	var mask_1_graphics_180 = new cjs.Graphics().p("A4KBlQFntENOlTQNNlTNFFnQNGFmFTNNMg/0AZkQlStOFmtGg");
	var mask_1_graphics_181 = new cjs.Graphics().p("A4RB1QFatKNIlgQNHlhNLFZQNMFZFhNHMg/YAamQlhtIFYtMg");
	var mask_1_graphics_182 = new cjs.Graphics().p("A4WCGQFLtQNDluQNBluNQFKQNSFMFvNBMg+8AbpQlvtDFLtRg");
	var mask_1_graphics_183 = new cjs.Graphics().p("A4bCXQE+tVM8l8QM7l8NWE9QNXE9F8M8Mg+fAcqQl7s8E8tXg");
	var mask_1_graphics_184 = new cjs.Graphics().p("A4fCoQEwtaM2mKQM1mJNaEvQNdEvGJM2Mg+AAdrQmJs2Eutcg");
	var mask_1_graphics_185 = new cjs.Graphics().p("A4iC6QEitgMvmWQMumXNgEgQNhEhGXMwMg9gAerQmXsvEgtgg");
	var mask_1_graphics_186 = new cjs.Graphics().p("A4kDLQETtjMpmlQMnmkNkETQNmETGkMoMg8/AfsQmkspEStlg");
	var mask_1_graphics_187 = new cjs.Graphics().p("A4mDdQEFtoMimxQMgmxNpEEQNqEEGxMiMg8dAgrQmyshEEtqg");
	var mask_1_graphics_188 = new cjs.Graphics().p("A4nDwQD3tsMbm/QMZm+NtD2QNuD2G+MaMg77AhrQm+sbD1ttg");
	var mask_1_graphics_189 = new cjs.Graphics().p("A4oEBQDptwMTnMQMRnLNxDoQNyDnHMMTMg7XAipQnMsSDntyg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_1_graphics_9,x:253.9,y:240.1}).wait(1).to({graphics:mask_1_graphics_10,x:253.8,y:240.2}).wait(1).to({graphics:mask_1_graphics_11,x:253.8,y:240.2}).wait(1).to({graphics:mask_1_graphics_12,x:253.7,y:240.3}).wait(1).to({graphics:mask_1_graphics_13,x:253.6,y:240.3}).wait(1).to({graphics:mask_1_graphics_14,x:253.6,y:240.4}).wait(1).to({graphics:mask_1_graphics_15,x:253.6,y:240.5}).wait(1).to({graphics:mask_1_graphics_16,x:253.5,y:240.5}).wait(1).to({graphics:mask_1_graphics_17,x:253.5,y:240.6}).wait(1).to({graphics:mask_1_graphics_18,x:253.5,y:240.7}).wait(1).to({graphics:mask_1_graphics_19,x:253.4,y:240.8}).wait(1).to({graphics:mask_1_graphics_20,x:253.4,y:240.9}).wait(1).to({graphics:mask_1_graphics_21,x:253.4,y:241}).wait(1).to({graphics:mask_1_graphics_22,x:253.4,y:241.1}).wait(1).to({graphics:mask_1_graphics_23,x:253.3,y:241.2}).wait(1).to({graphics:mask_1_graphics_24,x:253.3,y:241.2}).wait(1).to({graphics:mask_1_graphics_25,x:253.3,y:241.3}).wait(1).to({graphics:mask_1_graphics_26,x:253.3,y:241.4}).wait(1).to({graphics:mask_1_graphics_27,x:253.3,y:241.5}).wait(1).to({graphics:mask_1_graphics_28,x:253.3,y:241.6}).wait(1).to({graphics:mask_1_graphics_29,x:253.2,y:241.7}).wait(1).to({graphics:mask_1_graphics_30,x:253.2,y:241.8}).wait(1).to({graphics:mask_1_graphics_31,x:253.2,y:241.9}).wait(1).to({graphics:mask_1_graphics_32,x:253.2,y:242}).wait(1).to({graphics:mask_1_graphics_33,x:253.2,y:242}).wait(1).to({graphics:mask_1_graphics_34,x:253.1,y:242.1}).wait(1).to({graphics:mask_1_graphics_35,x:253.1,y:242.2}).wait(1).to({graphics:mask_1_graphics_36,x:253.1,y:242.3}).wait(1).to({graphics:mask_1_graphics_37,x:253.1,y:242.4}).wait(1).to({graphics:mask_1_graphics_38,x:253.1,y:242.4}).wait(1).to({graphics:mask_1_graphics_39,x:253,y:242.5}).wait(1).to({graphics:mask_1_graphics_40,x:253,y:242.6}).wait(1).to({graphics:mask_1_graphics_41,x:253,y:242.7}).wait(1).to({graphics:mask_1_graphics_42,x:253,y:242.7}).wait(1).to({graphics:mask_1_graphics_43,x:252.9,y:242.8}).wait(1).to({graphics:mask_1_graphics_44,x:252.9,y:242.9}).wait(1).to({graphics:mask_1_graphics_45,x:252.9,y:242.9}).wait(1).to({graphics:mask_1_graphics_46,x:252.8,y:243}).wait(1).to({graphics:mask_1_graphics_47,x:252.8,y:243}).wait(1).to({graphics:mask_1_graphics_48,x:252.8,y:243.1}).wait(1).to({graphics:mask_1_graphics_49,x:252.8,y:243.2}).wait(1).to({graphics:mask_1_graphics_50,x:252.7,y:243.2}).wait(1).to({graphics:mask_1_graphics_51,x:252.7,y:243.3}).wait(1).to({graphics:mask_1_graphics_52,x:252.7,y:243.3}).wait(1).to({graphics:mask_1_graphics_53,x:252.6,y:243.4}).wait(1).to({graphics:mask_1_graphics_54,x:252.6,y:243.4}).wait(1).to({graphics:mask_1_graphics_55,x:252.6,y:243.5}).wait(1).to({graphics:mask_1_graphics_56,x:252.6,y:243.6}).wait(1).to({graphics:mask_1_graphics_57,x:252.6,y:243.6}).wait(1).to({graphics:mask_1_graphics_58,x:252.6,y:243.7}).wait(1).to({graphics:mask_1_graphics_59,x:252.6,y:243.8}).wait(1).to({graphics:mask_1_graphics_60,x:252.6,y:243.8}).wait(1).to({graphics:mask_1_graphics_61,x:252.6,y:243.9}).wait(1).to({graphics:mask_1_graphics_62,x:252.6,y:244}).wait(1).to({graphics:mask_1_graphics_63,x:252.6,y:244}).wait(1).to({graphics:mask_1_graphics_64,x:252.6,y:244}).wait(1).to({graphics:mask_1_graphics_65,x:252.6,y:244}).wait(1).to({graphics:mask_1_graphics_66,x:252.7,y:243.9}).wait(1).to({graphics:mask_1_graphics_67,x:252.7,y:243.8}).wait(1).to({graphics:mask_1_graphics_68,x:252.8,y:243.7}).wait(1).to({graphics:mask_1_graphics_69,x:252.8,y:243.6}).wait(1).to({graphics:mask_1_graphics_70,x:252.8,y:243.4}).wait(1).to({graphics:mask_1_graphics_71,x:252.9,y:243.2}).wait(1).to({graphics:mask_1_graphics_72,x:252.9,y:242.9}).wait(1).to({graphics:mask_1_graphics_73,x:253,y:242.7}).wait(1).to({graphics:mask_1_graphics_74,x:253,y:242.4}).wait(1).to({graphics:mask_1_graphics_75,x:253.1,y:242.1}).wait(1).to({graphics:mask_1_graphics_76,x:253.1,y:241.7}).wait(1).to({graphics:mask_1_graphics_77,x:253.2,y:241.3}).wait(1).to({graphics:mask_1_graphics_78,x:253.2,y:240.9}).wait(1).to({graphics:mask_1_graphics_79,x:253.2,y:240.5}).wait(1).to({graphics:mask_1_graphics_80,x:253.3,y:240}).wait(1).to({graphics:mask_1_graphics_81,x:253.3,y:239.5}).wait(1).to({graphics:mask_1_graphics_82,x:253.4,y:239}).wait(1).to({graphics:mask_1_graphics_83,x:253.4,y:238.4}).wait(1).to({graphics:mask_1_graphics_84,x:253.5,y:237.8}).wait(1).to({graphics:mask_1_graphics_85,x:253.5,y:237.2}).wait(1).to({graphics:mask_1_graphics_86,x:253.5,y:236.6}).wait(1).to({graphics:mask_1_graphics_87,x:253.6,y:235.9}).wait(1).to({graphics:mask_1_graphics_88,x:253.6,y:235.2}).wait(1).to({graphics:mask_1_graphics_89,x:253.6,y:234.5}).wait(1).to({graphics:mask_1_graphics_90,x:253.7,y:233.8}).wait(1).to({graphics:mask_1_graphics_91,x:253.7,y:233}).wait(1).to({graphics:mask_1_graphics_92,x:253.7,y:232.2}).wait(1).to({graphics:mask_1_graphics_93,x:253.8,y:231.4}).wait(1).to({graphics:mask_1_graphics_94,x:253.8,y:230.5}).wait(1).to({graphics:mask_1_graphics_95,x:253.8,y:229.6}).wait(1).to({graphics:mask_1_graphics_96,x:253.9,y:228.7}).wait(1).to({graphics:mask_1_graphics_97,x:253.9,y:227.8}).wait(1).to({graphics:mask_1_graphics_98,x:253.9,y:226.8}).wait(1).to({graphics:mask_1_graphics_99,x:253.9,y:225.8}).wait(1).to({graphics:mask_1_graphics_100,x:254,y:224.8}).wait(1).to({graphics:mask_1_graphics_101,x:254,y:223.8}).wait(1).to({graphics:mask_1_graphics_102,x:254,y:222.7}).wait(1).to({graphics:mask_1_graphics_103,x:254.1,y:221.7}).wait(1).to({graphics:mask_1_graphics_104,x:254.1,y:220.6}).wait(1).to({graphics:mask_1_graphics_105,x:254.2,y:219.4}).wait(1).to({graphics:mask_1_graphics_106,x:254.2,y:218.3}).wait(1).to({graphics:mask_1_graphics_107,x:254.3,y:217.1}).wait(1).to({graphics:mask_1_graphics_108,x:254.3,y:215.9}).wait(1).to({graphics:mask_1_graphics_109,x:254.4,y:214.7}).wait(1).to({graphics:mask_1_graphics_110,x:254.4,y:213.5}).wait(1).to({graphics:mask_1_graphics_111,x:254.5,y:212.2}).wait(1).to({graphics:mask_1_graphics_112,x:254.6,y:210.9}).wait(1).to({graphics:mask_1_graphics_113,x:254.7,y:209.6}).wait(1).to({graphics:mask_1_graphics_114,x:254.7,y:208.3}).wait(1).to({graphics:mask_1_graphics_115,x:254.8,y:206.9}).wait(1).to({graphics:mask_1_graphics_116,x:254.9,y:205.6}).wait(1).to({graphics:mask_1_graphics_117,x:255,y:204.2}).wait(1).to({graphics:mask_1_graphics_118,x:255.1,y:202.8}).wait(1).to({graphics:mask_1_graphics_119,x:255.2,y:201.4}).wait(1).to({graphics:mask_1_graphics_120,x:255.3,y:199.9}).wait(1).to({graphics:mask_1_graphics_121,x:255.4,y:198.5}).wait(1).to({graphics:mask_1_graphics_122,x:255.5,y:197}).wait(1).to({graphics:mask_1_graphics_123,x:255.6,y:195.5}).wait(1).to({graphics:mask_1_graphics_124,x:255.6,y:194}).wait(1).to({graphics:mask_1_graphics_125,x:255.7,y:192.5}).wait(1).to({graphics:mask_1_graphics_126,x:255.8,y:190.9}).wait(1).to({graphics:mask_1_graphics_127,x:255.9,y:189.4}).wait(1).to({graphics:mask_1_graphics_128,x:256,y:187.8}).wait(1).to({graphics:mask_1_graphics_129,x:256.1,y:186.2}).wait(1).to({graphics:mask_1_graphics_130,x:256.2,y:184.6}).wait(1).to({graphics:mask_1_graphics_131,x:256.2,y:183}).wait(1).to({graphics:mask_1_graphics_132,x:256.3,y:181.4}).wait(1).to({graphics:mask_1_graphics_133,x:256.4,y:179.7}).wait(1).to({graphics:mask_1_graphics_134,x:256.5,y:178.1}).wait(1).to({graphics:mask_1_graphics_135,x:256.6,y:176.4}).wait(1).to({graphics:mask_1_graphics_136,x:256.6,y:174.8}).wait(1).to({graphics:mask_1_graphics_137,x:256.7,y:173.1}).wait(1).to({graphics:mask_1_graphics_138,x:256.8,y:171.4}).wait(1).to({graphics:mask_1_graphics_139,x:256.8,y:169.7}).wait(1).to({graphics:mask_1_graphics_140,x:256.9,y:167.9}).wait(1).to({graphics:mask_1_graphics_141,x:257,y:166.2}).wait(1).to({graphics:mask_1_graphics_142,x:257,y:164.5}).wait(1).to({graphics:mask_1_graphics_143,x:257.1,y:162.7}).wait(1).to({graphics:mask_1_graphics_144,x:257.1,y:161}).wait(1).to({graphics:mask_1_graphics_145,x:257.2,y:159.2}).wait(1).to({graphics:mask_1_graphics_146,x:257.3,y:157.5}).wait(1).to({graphics:mask_1_graphics_147,x:257.3,y:155.7}).wait(1).to({graphics:mask_1_graphics_148,x:257.4,y:153.9}).wait(1).to({graphics:mask_1_graphics_149,x:257.4,y:152.1}).wait(1).to({graphics:mask_1_graphics_150,x:257.5,y:150.3}).wait(1).to({graphics:mask_1_graphics_151,x:257.5,y:148.5}).wait(1).to({graphics:mask_1_graphics_152,x:257.6,y:146.7}).wait(1).to({graphics:mask_1_graphics_153,x:257.7,y:144.9}).wait(1).to({graphics:mask_1_graphics_154,x:257.7,y:143.1}).wait(1).to({graphics:mask_1_graphics_155,x:257.8,y:141.3}).wait(1).to({graphics:mask_1_graphics_156,x:257.9,y:139.5}).wait(1).to({graphics:mask_1_graphics_157,x:258,y:138.6}).wait(1).to({graphics:mask_1_graphics_158,x:258,y:140.4}).wait(1).to({graphics:mask_1_graphics_159,x:258,y:142.2}).wait(1).to({graphics:mask_1_graphics_160,x:258,y:144}).wait(1).to({graphics:mask_1_graphics_161,x:258,y:145.8}).wait(1).to({graphics:mask_1_graphics_162,x:257.9,y:147.6}).wait(1).to({graphics:mask_1_graphics_163,x:257.9,y:149.3}).wait(1).to({graphics:mask_1_graphics_164,x:257.7,y:151.1}).wait(1).to({graphics:mask_1_graphics_165,x:257.6,y:152.9}).wait(1).to({graphics:mask_1_graphics_166,x:257.4,y:154.6}).wait(1).to({graphics:mask_1_graphics_167,x:257.2,y:156.4}).wait(1).to({graphics:mask_1_graphics_168,x:257,y:158.2}).wait(1).to({graphics:mask_1_graphics_169,x:256.7,y:159.9}).wait(1).to({graphics:mask_1_graphics_170,x:256.4,y:161.6}).wait(1).to({graphics:mask_1_graphics_171,x:256.1,y:163.4}).wait(1).to({graphics:mask_1_graphics_172,x:255.7,y:165.1}).wait(1).to({graphics:mask_1_graphics_173,x:255.3,y:166.8}).wait(1).to({graphics:mask_1_graphics_174,x:254.9,y:168.5}).wait(1).to({graphics:mask_1_graphics_175,x:254.5,y:170.2}).wait(1).to({graphics:mask_1_graphics_176,x:254,y:171.9}).wait(1).to({graphics:mask_1_graphics_177,x:253.5,y:173.6}).wait(1).to({graphics:mask_1_graphics_178,x:253,y:175.2}).wait(1).to({graphics:mask_1_graphics_179,x:252.4,y:176.9}).wait(1).to({graphics:mask_1_graphics_180,x:251.8,y:178.5}).wait(1).to({graphics:mask_1_graphics_181,x:251.2,y:180.1}).wait(1).to({graphics:mask_1_graphics_182,x:250.6,y:181.8}).wait(1).to({graphics:mask_1_graphics_183,x:249.9,y:183.4}).wait(1).to({graphics:mask_1_graphics_184,x:249.2,y:185}).wait(1).to({graphics:mask_1_graphics_185,x:248.5,y:186.5}).wait(1).to({graphics:mask_1_graphics_186,x:247.7,y:188.1}).wait(1).to({graphics:mask_1_graphics_187,x:246.9,y:189.6}).wait(1).to({graphics:mask_1_graphics_188,x:246.1,y:191.2}).wait(1).to({graphics:mask_1_graphics_189,x:245.2,y:192.5}).wait(191));

	// letter
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("A0MROQhCjtAAkJQAArAHPnzQHQnyKOAAQKPAAHOHyQAJAKAKAK");
	this.shape_2.setTransform(273.2,208.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("Av9VgQlRnCAApZQAAq/HPnzQHQnyKOAAQKPAAHOHyQAJAJAKAK");
	this.shape_3.setTransform(273.2,236.3);

	var maskedShapeInstanceList = [this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},9).to({state:[{t:this.shape_3}]},11).wait(360));

	// Base
	this.instance_3 = new lib.basec("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(275,269.5);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(380));

	// Background
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_4.setTransform(275,275,3.373,2.543);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_5.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(380));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(273.5,234.3,553,726.5);
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