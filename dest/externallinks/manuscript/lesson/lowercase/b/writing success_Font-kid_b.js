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
	this.shape.graphics.f("#FFFFFF").s().p("ApSaDIAAAmQAACmikAAQikAAAAimMAAAg1LQAAisCtAAQBBAAAwA9QAqA3AAA4IAAckQD0i+FDAAQGHAAEYEWQEXEaAAGRQAAGRkXEbQkYEemHAAQk/AAj4jMgAlzF4QieBxhBC3IAAG/QCgGgGhAAQD9AAC1i5QC3i7AAkIQAAkHi3i7Qi1i7j9AAQjDAAifByg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.2,-187,184.6,374.2);


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
	this.instance.setTransform(53,3,1,1,157.3,0,0,0.4,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0,guide:{path:[53.1,2.9,50.4,-4.5,49.8,-6.5,48.5,-10.4,46.4,-14.3,38.1,-28.9,21.4,-34.5,4.7,-40,-10.7,-33,-26.1,-26,-31.2,-10.7,-32.6,-6.5,-33,-2.3]}},89).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ApFKwQnMjjilnkMAkngMbQClHljiHLQjkHMnlCkQjMBFjHAAQkTAAkKiDg");
	var mask_graphics_1 = new cjs.Graphics().p("AopLSQnTjVi0ngMAkOgNhQC0HgjUHSQjWHSngCzQjcBSjYAAQkBAAj8hzg");
	var mask_graphics_2 = new cjs.Graphics().p("AoNLzQnajHjCnaMAjzgOoQDCHbjGHXQjIHZnaDCQjrBgjpAAQjvAAjuhkg");
	var mask_graphics_3 = new cjs.Graphics().p("AnyMSQnfi4jQnUMAjVgPtQDQHUi3HeQi5HenUDQQj5Bvj7AAQjeAAjghWg");
	var mask_graphics_4 = new cjs.Graphics().p("AnWMwQnlipjenOMAi1gQxQDeHNioHkQirHjnNDfQkHB+kMAAQjNAAjQhJg");
	var mask_graphics_5 = new cjs.Graphics().p("Am7NNQnpiajtnHMAiUgR1QDsHHiaHoQibHpnHDsQkTCPkfAAQi7AAjBg9g");
	var mask_graphics_6 = new cjs.Graphics().p("AmgNpQnuiMj6m/MAhwgS3QD6G/iLHsQiMHum/D6QkgCgkxAAQirAAiwgxg");
	var mask_graphics_7 = new cjs.Graphics().p("AmEODQnyh9kIm3MAhKgT5QEHG4h7HxQh+Hxm3EHQkrC0lEAAQiaAAiegog");
	var mask_graphics_8 = new cjs.Graphics().p("AlqOcQn1hukVmvMAgigU4QEVGvhtH1QhuH0mvEUQk1DHlZAAQiHAAiOgeg");
	var mask_graphics_9 = new cjs.Graphics().p("AlPOzQn4hekimnIf413QEiGnhdH4QhfH3mmEiQlADbltAAQh2AAh7gXg");
	var mask_graphics_10 = new cjs.Graphics().p("Ak0PJQn8hPkumdIfM21QEvGehOH6QhPH6mdEuQlJDxmCAAQhkAAhogQg");
	var mask_graphics_11 = new cjs.Graphics().p("AkaPdQn+g/k7mUIeg3xQE7GUg/H9QhAH8mUE7QlREHmYAAQhSAAhUgLg");
	var mask_graphics_12 = new cjs.Graphics().p("AkAPwQn/gvlImLIdw4rQFIGKgvH/QgxH9mKFHQlZEemvAAQg/AAhAgGg");
	var mask_graphics_13 = new cjs.Graphics().p("AjnQCQoAgglTmAIc/5lQFTGAgfH/QghH/mAFTQlgE2nIAAQgrAAgsgCg");
	var mask_graphics_14 = new cjs.Graphics().p("AjOQSQoBgRlel2IcM6cQFeF1gPIBQgSIAl1FeQllFPnjAAIgtAAg");
	var mask_graphics_15 = new cjs.Graphics().p("Ai1QgQoBgBlqlrIbX7TQFqFrAAIBQgBIAlrFpQlqFqn+AAIgCAAg");
	var mask_graphics_16 = new cjs.Graphics().p("AwTLcIai8IQF1FgAPIAQAOIAlfF0QlgF1n/APIgpABQnnAAlmlRg");
	var mask_graphics_17 = new cjs.Graphics().p("AwFMCIZq87QF/FUAgIAQAdH/lUF/QlUGAn+AeQgqADgqAAQnMAAlgk4g");
	var mask_graphics_18 = new cjs.Graphics().p("Av3MmIYx9rQGKFIAuH/QAtH+lIGJQlIGKn9AuQg/AFg9AAQm0AAlZkgg");
	var mask_graphics_19 = new cjs.Graphics().p("AvoNKIX2+bQGTE8A/H9QA8H8k8GTQk8GUn7A9QhUAKhQAAQmcAAlRkIg");
	var mask_graphics_20 = new cjs.Graphics().p("AvaNsIW7/JQGdEwBNH7QBMH6kvGcQkwGdn5BNQhnAQhjAAQmFAAlKjyg");
	var mask_graphics_21 = new cjs.Graphics().p("AvKOMIV9/0QGlEjBdH4QBcH4kjGlQkjGmn3BdQh6AWh1AAQlvAAlAjdg");
	var mask_graphics_22 = new cjs.Graphics().p("Au7OrMAU+ggeQGvEWBsH1QBrH1kWGuQkWGvn0BsQiMAeiHAAQlbAAk2jJg");
	var mask_graphics_23 = new cjs.Graphics().p("AurPJMAT+ghGQG3EJB8HxQB6HykJG2QkJG3nwB7QieAniYAAQlIAAkri1g");
	var mask_graphics_24 = new cjs.Graphics().p("AubPmMAS9ghtQG/D8CLHtQCJHtj7G/Qj8G/ntCKQiuAxiqAAQk0AAkgiig");
	var mask_graphics_25 = new cjs.Graphics().p("AuLQAMAR7giQQHGDuCaHpQCYHpjtHFQjuHHnpCZQi/A8i6AAQkiAAkUiRg");
	var mask_graphics_26 = new cjs.Graphics().p("At6QaMAQ4giyQHNDfCoHkQCnHkjfHNQjgHOnkCnQjPBIjMAAQkPAAkHh/g");
	var mask_graphics_27 = new cjs.Graphics().p("AtpQyMAPzgjSQHUDRC3HfQC2HgjRHSQjSHUneC2QjfBVjdAAQj9AAj6hvg");
	var mask_graphics_28 = new cjs.Graphics().p("AtXRIMAOtgjwQHaDDDGHZQDEHajDHZQjDHanZDFQjtBjjuAAQjsAAjrhhg");
	var mask_graphics_29 = new cjs.Graphics().p("AtGRdMANogkMQHfC1DUHTQDTHTi0HeQi1HgnTDUQj7BykAAAQjaAAjdhTg");
	var mask_graphics_30 = new cjs.Graphics().p("As0RwMAMigklQHkCmDiHMQDgHNilHjQimHmnMDhQkJCCkSAAQjJAAjNhGg");
	var mask_graphics_31 = new cjs.Graphics().p("AsiSBMALagk8QHpCXDwHFQDvHGiXHpQiYHqnEDvQkWCTkkAAQi4AAi9g7g");
	var mask_graphics_32 = new cjs.Graphics().p("AsQSRMAKSglRQHtCID+G+QD8G+iIHtQiIHum9D9QkiClk2AAQinAAitgwg");
	var mask_graphics_33 = new cjs.Graphics().p("Ar9SgMAJIgllQHxB5EMG2QEJG3h4HwQh6Hzm1EKQktC4lJAAQiWAAibgmg");
	var mask_graphics_34 = new cjs.Graphics().p("ArrStMAH/gl2QH1BqEYGtQEXGvhpH0QhqH2mtEXQk3DMleAAQiEAAiKgdg");
	var mask_graphics_35 = new cjs.Graphics().p("ArYS4MAG1gmEQH4BbElGkQEkGmhaH3QhbH5mkEkQlBDglzAAQhyAAh3gVg");
	var mask_graphics_36 = new cjs.Graphics().p("ArFTBMAFrgmQQH6BLEyGcQEwGchLH6QhLH7mbExQlKD2mIAAQhgAAhkgPg");
	var mask_graphics_37 = new cjs.Graphics().p("AqyTJMAEggmaQH8A8E+GRQE9GUg7H7Qg8H+mRE9QlTEMmeAAQhOAAhQgJg");
	var mask_graphics_38 = new cjs.Graphics().p("AqdTPMADVgmiQH+AsFLGIQFJGKgsH9QgsH/mIFJQlaEkm2AAQg6AAg9gFg");
	var mask_graphics_39 = new cjs.Graphics().p("Ap3TTMACKgmnQH/AdFWF9QFVF/gcH/QgdIAl9FVQlhE8nPAAQgmAAgogCg");
	var mask_graphics_40 = new cjs.Graphics().p("ApRTVMAA+gmqQIBANFhFzQFgF1gNH/QgNIBlzFgQlmFWnpAAIgkgBg");
	var mask_graphics_41 = new cjs.Graphics().p("Ao4zVQIAgCFsFoQFsFpADIAQACIAloFsQloFtoAADg");
	var mask_graphics_42 = new cjs.Graphics().p("ApezTQIAgTF3FdQF3FeASIAQASIAldF2QlcF4oBASg");
	var mask_graphics_43 = new cjs.Graphics().p("AqEzQQIAgiGBFRQGBFTAiH+QAiH/lRGBQlTGDn+Aig");
	var mask_graphics_44 = new cjs.Graphics().p("AqmzMQH+gxGMFFQGLFHAxH+QAyH9lGGLQlGGNn9Axg");
	var mask_graphics_45 = new cjs.Graphics().p("Aq5zFQH9hBGVE5QGVE7BBH7QBBH8k6GVQk6GWn7BBg");
	var mask_graphics_46 = new cjs.Graphics().p("ArMy9QH6hQGfEsQGeEuBRH6QBQH6ktGeQktGfn5BRg");
	var mask_graphics_47 = new cjs.Graphics().p("AreyzQH3hgGnEgQGoEhBgH3QBfH3kgGoQkgGon3Bgg");
	var mask_graphics_48 = new cjs.Graphics().p("ArxynQH0hvGwESQGwEVBvH0QBvHzkTGwQkTGxn0Bvg");
	var mask_graphics_49 = new cjs.Graphics().p("AsEyaQHxh+G4EFQG4EHB/HwQB+HxkGG4QkGG5nwB+g");
	var mask_graphics_50 = new cjs.Graphics().p("AsWyLQHtiNG/D3QHAD6COHsQCNHsj4HAQj5HBnrCNg");
	var mask_graphics_51 = new cjs.Graphics().p("Asox6QHoidHHDqQHIDsCcHoQCcHnjqHHQjrHJnnCcg");
	var mask_graphics_52 = new cjs.Graphics().p("As6xoQHjirHODcQHODdCrHjQCsHjjdHOQjdHPniCrg");
	var mask_graphics_53 = new cjs.Graphics().p("AtMxVQHei5HUDOQHVDPC6HdQC6HejPHUQjOHWneC6g");
	var mask_graphics_54 = new cjs.Graphics().p("Atdw/QHXjIHbC/QHbDBDIHYQDIHXi/HaQjBHcnYDJg");
	var mask_graphics_55 = new cjs.Graphics().p("AtvwoQHSjXHgCxQHhCzDWHRQDXHRiyHgQixHhnSDXg");
	var mask_graphics_56 = new cjs.Graphics().p("AuAwQQHLjlHlCjQHnCkDkHKQDlHLijHkQijHnnLDlg");
	var mask_graphics_57 = new cjs.Graphics().p("AuQv2QHDjzHqCUQHrCVDyHDQDzHEiUHpQiUHsnDDyg");
	var mask_graphics_58 = new cjs.Graphics().p("AugvbQG7kAHvCEQHvCGEAG8QEAG8iFHuQiFHwm8EAg");
	var mask_graphics_59 = new cjs.Graphics().p("Auwu+QGzkNH0B1QHyB3ENGzQENG1h1HxQh2Hzm0EOg");
	var mask_graphics_60 = new cjs.Graphics().p("AvAugQGrkaH3BmQH1BnEbGrQEaGshmH1QhnH3mrEag");
	var mask_graphics_61 = new cjs.Graphics().p("AvQuAQGjknH6BWQH4BYEnGjQEoGjhXH3QhYH6miEog");
	var mask_graphics_62 = new cjs.Graphics().p("AvftfQGak0H8BHQH7BJEzGZQE1GahIH6QhIH8mZE0g");
	var mask_graphics_63 = new cjs.Graphics().p("Avts8QGQlBH9A4QH9A5FAGQQFBGQg4H8Qg5H+mQFBg");
	var mask_graphics_64 = new cjs.Graphics().p("Av8sZQGHlMH/AoQH+AqFMGFQFNGHgpH9QgpIAmGFMg");
	var mask_graphics_65 = new cjs.Graphics().p("AwKrzQF8lZIAAZQIAAaFXF7QFZF9gZH+QgZIBl8FYg");
	var mask_graphics_66 = new cjs.Graphics().p("AwXrNQFxljIAAIQIAALFkFxQFjFxgJH/QgKIBlxFkg");
	var mask_graphics_67 = new cjs.Graphics().p("AwlqlQFnlvIAgGQIAgFFuFlQFvFnAGH/QAHIBlnFvg");
	var mask_graphics_68 = new cjs.Graphics().p("Awyp8QFbl5IAgXQIAgUF5FaQF6FbAVH/QAWIAlbF6g");
	var mask_graphics_69 = new cjs.Graphics().p("Aw+pSQFPmDH/gmQH/glGDFPQGEFQAmH9QAlIAlPGEg");
	var mask_graphics_70 = new cjs.Graphics().p("AxLomQFEmOH9g1QH+g0GNFDQGOFDA1H8QA1H/lDGOg");
	var mask_graphics_71 = new cjs.Graphics().p("AxWn5QE2mYH8hFQH8hDGXE2QGYE3BEH7QBFH9k3GXg");
	var mask_graphics_72 = new cjs.Graphics().p("AxinMQEqmhH6hUQH5hTGhEqQGhErBTH4QBUH6kqGhg");
	var mask_graphics_73 = new cjs.Graphics().p("AxtmdQEemqH2hkQH3hiGpEdQGqEeBjH1QBjH4kdGqg");
	var mask_graphics_74 = new cjs.Graphics().p("Ax3ltQEQmzH0hzQHzhxGyEQQGyERByHyQBzH0kQGyg");
	var mask_graphics_75 = new cjs.Graphics().p("AyBk9QEDm6HwiCQHviBG6EDQG7EDCBHvQCCHwkDG6g");
	var mask_graphics_76 = new cjs.Graphics().p("AyLkMQD2nBHriSQHsiPHBD1QHDD1CQHrQCRHsj2HCg");
	var mask_graphics_77 = new cjs.Graphics().p("AyUjZQDonKHnigQHnieHIDnQHKDoCfHmQCgHnjnHJg");
	var mask_graphics_78 = new cjs.Graphics().p("AycinQDanQHhiuQHiiuHQDZQHQDaCuHiQCvHhjaHQg");
	var mask_graphics_79 = new cjs.Graphics().p("AykhzQDMnWHci+QHdi8HVDLQHXDMC9HcQC9HcjMHWg");
	var mask_graphics_80 = new cjs.Graphics().p("Ayrg/QC9ncHWjMQHYjLHaC9QHdC9DLHWQDMHWi9Hdg");
	var mask_graphics_81 = new cjs.Graphics().p("AyygKQCvniHQjaQHRjZHgCuQHiCvDaHPQDZHQiuHig");
	var mask_graphics_82 = new cjs.Graphics().p("Ay4ArQCgnmHJjpQHKjnHmCgQHnCgDnHIQDoHJifHng");
	var mask_graphics_83 = new cjs.Graphics().p("Ay9BgQCQnqHCj2QHDj1HqCRQHsCQD1HCQD2HBiQHsg");
	var mask_graphics_84 = new cjs.Graphics().p("AzCCXQCCnvG6kEQG7kCHuCBQHwCCEDG6QEDG6iBHwg");
	var mask_graphics_85 = new cjs.Graphics().p("AzGDNQBynyGykRQGzkQHyBzQH0ByEQGyQERGyhyHzg");
	var mask_graphics_86 = new cjs.Graphics().p("AzKEFQBjn2GpkeQGrkdH1BjQH4BjEdGpQEeGqhjH3g");
	var mask_graphics_87 = new cjs.Graphics().p("AzNE8QBUn5GgkrQGikpH4BUQH6BTEqGhQErGghUH6g");
	var mask_graphics_88 = new cjs.Graphics().p("AzQF0QBFn7GXk4QGYk2H7BEQH8BFE3GXQE3GXhFH8g");
	var mask_graphics_89 = new cjs.Graphics().p("AzSGsQA1n9GOlEQGPlCH8A0QH+A1FDGOQFDGNg1H+g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:14.6,y:53.3}).wait(1).to({graphics:mask_graphics_1,x:15.3,y:51.5}).wait(1).to({graphics:mask_graphics_2,x:16,y:49.7}).wait(1).to({graphics:mask_graphics_3,x:16.7,y:48}).wait(1).to({graphics:mask_graphics_4,x:17.5,y:46.3}).wait(1).to({graphics:mask_graphics_5,x:18.3,y:44.6}).wait(1).to({graphics:mask_graphics_6,x:19.2,y:42.9}).wait(1).to({graphics:mask_graphics_7,x:20.1,y:41.3}).wait(1).to({graphics:mask_graphics_8,x:21.1,y:39.7}).wait(1).to({graphics:mask_graphics_9,x:22.1,y:38.1}).wait(1).to({graphics:mask_graphics_10,x:23.2,y:36.5}).wait(1).to({graphics:mask_graphics_11,x:24.3,y:35}).wait(1).to({graphics:mask_graphics_12,x:25.5,y:33.5}).wait(1).to({graphics:mask_graphics_13,x:26.7,y:32.1}).wait(1).to({graphics:mask_graphics_14,x:28,y:30.6}).wait(1).to({graphics:mask_graphics_15,x:29.3,y:29.3}).wait(1).to({graphics:mask_graphics_16,x:30.6,y:28}).wait(1).to({graphics:mask_graphics_17,x:32,y:26.7}).wait(1).to({graphics:mask_graphics_18,x:33.5,y:25.5}).wait(1).to({graphics:mask_graphics_19,x:34.9,y:24.4}).wait(1).to({graphics:mask_graphics_20,x:36.5,y:23.2}).wait(1).to({graphics:mask_graphics_21,x:38,y:22.2}).wait(1).to({graphics:mask_graphics_22,x:39.6,y:21.1}).wait(1).to({graphics:mask_graphics_23,x:41.2,y:20.2}).wait(1).to({graphics:mask_graphics_24,x:42.9,y:19.2}).wait(1).to({graphics:mask_graphics_25,x:44.5,y:18.4}).wait(1).to({graphics:mask_graphics_26,x:46.2,y:17.5}).wait(1).to({graphics:mask_graphics_27,x:47.9,y:16.7}).wait(1).to({graphics:mask_graphics_28,x:49.7,y:16}).wait(1).to({graphics:mask_graphics_29,x:51.4,y:15.3}).wait(1).to({graphics:mask_graphics_30,x:53.2,y:14.7}).wait(1).to({graphics:mask_graphics_31,x:55,y:14.1}).wait(1).to({graphics:mask_graphics_32,x:56.8,y:13.5}).wait(1).to({graphics:mask_graphics_33,x:58.6,y:13.1}).wait(1).to({graphics:mask_graphics_34,x:60.4,y:12.6}).wait(1).to({graphics:mask_graphics_35,x:62.2,y:12.2}).wait(1).to({graphics:mask_graphics_36,x:64.1,y:11.9}).wait(1).to({graphics:mask_graphics_37,x:65.9,y:11.6}).wait(1).to({graphics:mask_graphics_38,x:67.5,y:11.4}).wait(1).to({graphics:mask_graphics_39,x:67.5,y:11.3}).wait(1).to({graphics:mask_graphics_40,x:67.5,y:11.2}).wait(1).to({graphics:mask_graphics_41,x:67.5,y:11.2}).wait(1).to({graphics:mask_graphics_42,x:67.5,y:11.1}).wait(1).to({graphics:mask_graphics_43,x:67.5,y:11}).wait(1).to({graphics:mask_graphics_44,x:67.2,y:10.9}).wait(1).to({graphics:mask_graphics_45,x:65.3,y:10.6}).wait(1).to({graphics:mask_graphics_46,x:63.5,y:10.4}).wait(1).to({graphics:mask_graphics_47,x:61.6,y:10}).wait(1).to({graphics:mask_graphics_48,x:59.8,y:9.6}).wait(1).to({graphics:mask_graphics_49,x:58,y:9.2}).wait(1).to({graphics:mask_graphics_50,x:56.2,y:8.6}).wait(1).to({graphics:mask_graphics_51,x:54.4,y:8.1}).wait(1).to({graphics:mask_graphics_52,x:52.6,y:7.5}).wait(1).to({graphics:mask_graphics_53,x:50.9,y:6.8}).wait(1).to({graphics:mask_graphics_54,x:49.1,y:6.1}).wait(1).to({graphics:mask_graphics_55,x:47.4,y:5.4}).wait(1).to({graphics:mask_graphics_56,x:45.7,y:4.5}).wait(1).to({graphics:mask_graphics_57,x:44,y:3.7}).wait(1).to({graphics:mask_graphics_58,x:42.4,y:2.8}).wait(1).to({graphics:mask_graphics_59,x:40.7,y:1.8}).wait(1).to({graphics:mask_graphics_60,x:39.1,y:0.9}).wait(1).to({graphics:mask_graphics_61,x:37.6,y:-0.2}).wait(1).to({graphics:mask_graphics_62,x:36,y:-1.3}).wait(1).to({graphics:mask_graphics_63,x:34.5,y:-2.4}).wait(1).to({graphics:mask_graphics_64,x:33,y:-3.6}).wait(1).to({graphics:mask_graphics_65,x:31.6,y:-4.8}).wait(1).to({graphics:mask_graphics_66,x:30.2,y:-6.1}).wait(1).to({graphics:mask_graphics_67,x:28.9,y:-7.4}).wait(1).to({graphics:mask_graphics_68,x:27.6,y:-8.8}).wait(1).to({graphics:mask_graphics_69,x:26.4,y:-10.2}).wait(1).to({graphics:mask_graphics_70,x:25.2,y:-11.7}).wait(1).to({graphics:mask_graphics_71,x:24,y:-13.2}).wait(1).to({graphics:mask_graphics_72,x:23,y:-14.7}).wait(1).to({graphics:mask_graphics_73,x:21.9,y:-16.3}).wait(1).to({graphics:mask_graphics_74,x:20.9,y:-17.9}).wait(1).to({graphics:mask_graphics_75,x:20,y:-19.5}).wait(1).to({graphics:mask_graphics_76,x:19.1,y:-21.2}).wait(1).to({graphics:mask_graphics_77,x:18.2,y:-22.8}).wait(1).to({graphics:mask_graphics_78,x:17.4,y:-24.5}).wait(1).to({graphics:mask_graphics_79,x:16.6,y:-26.3}).wait(1).to({graphics:mask_graphics_80,x:15.9,y:-28}).wait(1).to({graphics:mask_graphics_81,x:15.2,y:-29.7}).wait(1).to({graphics:mask_graphics_82,x:14.6,y:-31.5}).wait(1).to({graphics:mask_graphics_83,x:14,y:-33.3}).wait(1).to({graphics:mask_graphics_84,x:13.5,y:-35.1}).wait(1).to({graphics:mask_graphics_85,x:13.1,y:-36.9}).wait(1).to({graphics:mask_graphics_86,x:12.7,y:-38.7}).wait(1).to({graphics:mask_graphics_87,x:12.3,y:-40.6}).wait(1).to({graphics:mask_graphics_88,x:12,y:-42.4}).wait(1).to({graphics:mask_graphics_89,x:11.8,y:-44.3}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("Al8EDQgWg7AAhEQAAihB9hzQB8hyCwAAQCwAAB9ByQAgAfAYAhQANARAKAS");
	this.shape.setTransform(10.1,-10.7,1,1,18.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.7,-28.7,101,36.4);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-9.7,-229.7,1,1,0,0,0,0.4,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-10,y:48.6},134,cjs.Ease.get(0.5)).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAAgXIAAAv");
	this.shape.setTransform(-10,-232.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AAAAIIAAgP");
	this.shape_1.setTransform(-10,-230.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AAAgHIAAAP");
	this.shape_2.setTransform(-10,-229.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AAAgnIAABP");
	this.shape_3.setTransform(-10,-226.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AAAg3IAABv");
	this.shape_4.setTransform(-10,-224.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AAAhGIAACN");
	this.shape_5.setTransform(-10,-223.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AAAhWIAACt");
	this.shape_6.setTransform(-10,-221.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AAAhlIAADL");
	this.shape_7.setTransform(-10,-220.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AAAh1IAADr");
	this.shape_8.setTransform(-10,-218.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AAAiEIAAEJ");
	this.shape_9.setTransform(-10,-217.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AAAiTIAAEn");
	this.shape_10.setTransform(-10,-215.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AAAiiIAAFF");
	this.shape_11.setTransform(-10,-214.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AAAixIAAFj");
	this.shape_12.setTransform(-10,-212.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AAAjAIAAGB");
	this.shape_13.setTransform(-10,-211.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AAAjPIAAGf");
	this.shape_14.setTransform(-10,-210);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AAAjeIAAG9");
	this.shape_15.setTransform(-10,-208.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AAAjtIAAHb");
	this.shape_16.setTransform(-10,-207.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AAAj8IAAH5");
	this.shape_17.setTransform(-10,-205.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AAAkKIAAIV");
	this.shape_18.setTransform(-10,-204.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AAAkZIAAIz");
	this.shape_19.setTransform(-10,-202.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AAAknIAAJP");
	this.shape_20.setTransform(-10,-201.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AAAk1IAAJs");
	this.shape_21.setTransform(-10,-200.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AAAlEIAAKJ");
	this.shape_22.setTransform(-10,-198.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AAAlSIAAKl");
	this.shape_23.setTransform(-10,-197.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AAAlgIAALB");
	this.shape_24.setTransform(-10,-196);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AAAluIAALd");
	this.shape_25.setTransform(-10,-194.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AAAl8IAAL5");
	this.shape_26.setTransform(-10,-193.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AAAmKIAAMV");
	this.shape_27.setTransform(-10,-191.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AAAmYIAAMx");
	this.shape_28.setTransform(-10,-190.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AAAmmIAANN");
	this.shape_29.setTransform(-10,-189.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AAAmzIAANn");
	this.shape_30.setTransform(-10,-187.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AAAnBIAAOD");
	this.shape_31.setTransform(-10,-186.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AAAnOIAAOd");
	this.shape_32.setTransform(-10,-185.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AAAncIAAO5");
	this.shape_33.setTransform(-10,-184);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AAAnpIAAPT");
	this.shape_34.setTransform(-10,-182.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AAAn2IAAPt");
	this.shape_35.setTransform(-10,-181.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AAAoEIAAQI");
	this.shape_36.setTransform(-10,-180.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AAAoRIAAQi");
	this.shape_37.setTransform(-10,-178.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AAAodIAAQ7");
	this.shape_38.setTransform(-10,-177.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AAAoqIAARV");
	this.shape_39.setTransform(-10,-176.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AAAo3IAARv");
	this.shape_40.setTransform(-10,-175.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AAApEIAASJ");
	this.shape_41.setTransform(-10,-173.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AAApRIAASj");
	this.shape_42.setTransform(-10,-172.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AAApdIAAS7");
	this.shape_43.setTransform(-10,-171.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AAApqIAATV");
	this.shape_44.setTransform(-10,-170.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AAAp2IAATt");
	this.shape_45.setTransform(-10,-169.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AAAqDIAAUH");
	this.shape_46.setTransform(-10,-167.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AAAqPIAAUf");
	this.shape_47.setTransform(-10,-166.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AAAqbIAAU3");
	this.shape_48.setTransform(-10,-165.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AAAqnIAAVP");
	this.shape_49.setTransform(-10,-164.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AAAqzIAAVn");
	this.shape_50.setTransform(-10,-163.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AAAq/IAAV/");
	this.shape_51.setTransform(-10,-162);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AAArLIAAWX");
	this.shape_52.setTransform(-10,-160.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AAArXIAAWv");
	this.shape_53.setTransform(-10,-159.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AAAriIAAXG");
	this.shape_54.setTransform(-10,-158.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AAAruIAAXd");
	this.shape_55.setTransform(-10,-157.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AAAr6IAAX1");
	this.shape_56.setTransform(-10,-156.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AAAsFIAAYL");
	this.shape_57.setTransform(-10,-155.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AAAsRIAAYj");
	this.shape_58.setTransform(-10,-154.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AAAscIAAY5");
	this.shape_59.setTransform(-10,-153.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(5,1,1).p("AAAsnIAAZP");
	this.shape_60.setTransform(-10,-152);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(5,1,1).p("AAAsyIAAZm");
	this.shape_61.setTransform(-10,-150.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(5,1,1).p("AAAs9IAAZ7");
	this.shape_62.setTransform(-10,-149.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(5,1,1).p("AAAtIIAAaR");
	this.shape_63.setTransform(-10,-148.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(5,1,1).p("AAAtTIAAan");
	this.shape_64.setTransform(-10,-147.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(5,1,1).p("AAAteIAAa9");
	this.shape_65.setTransform(-10,-146.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(5,1,1).p("AAAtpIAAbT");
	this.shape_66.setTransform(-10,-145.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(5,1,1).p("AAAt0IAAbo");
	this.shape_67.setTransform(-10,-144.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(5,1,1).p("AAAt+IAAb9");
	this.shape_68.setTransform(-10,-143.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(5,1,1).p("AAAuIIAAcS");
	this.shape_69.setTransform(-10,-142.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(5,1,1).p("AAAuTIAAcn");
	this.shape_70.setTransform(-10,-141.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(5,1,1).p("AAAueIAAc8");
	this.shape_71.setTransform(-10,-140.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(5,1,1).p("AAAuoIAAdR");
	this.shape_72.setTransform(-10,-139.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(5,1,1).p("AAAuyIAAdl");
	this.shape_73.setTransform(-10,-138.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(5,1,1).p("AAAu8IAAd5");
	this.shape_74.setTransform(-10,-137.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(5,1,1).p("AAAvGIAAeN");
	this.shape_75.setTransform(-10,-136.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(5,1,1).p("AAAvQIAAeh");
	this.shape_76.setTransform(-10,-135.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(5,1,1).p("AAAvaIAAe1");
	this.shape_77.setTransform(-10,-134.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(5,1,1).p("AAAvkIAAfJ");
	this.shape_78.setTransform(-10,-133.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(5,1,1).p("AAAvuIAAfc");
	this.shape_79.setTransform(-10,-132.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(5,1,1).p("AAAv3IAAfv");
	this.shape_80.setTransform(-10,-131.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(5,1,1).p("AAAwBMAAAAgC");
	this.shape_81.setTransform(-10,-130.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(5,1,1).p("AAAwKMAAAAgV");
	this.shape_82.setTransform(-10,-130);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(5,1,1).p("AAAwUMAAAAgp");
	this.shape_83.setTransform(-10,-129.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(5,1,1).p("AAAwdMAAAAg7");
	this.shape_84.setTransform(-10,-128.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(5,1,1).p("AAAwmMAAAAhN");
	this.shape_85.setTransform(-10,-127.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(5,1,1).p("AAAwvMAAAAhf");
	this.shape_86.setTransform(-10,-126.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(5,1,1).p("AAAw4MAAAAhx");
	this.shape_87.setTransform(-10,-125.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(5,1,1).p("AAAxCMAAAAiF");
	this.shape_88.setTransform(-10,-124.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(5,1,1).p("AAAxKMAAAAiV");
	this.shape_89.setTransform(-10,-123.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(5,1,1).p("AAAxTMAAAAin");
	this.shape_90.setTransform(-10,-123);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(5,1,1).p("AAAxcMAAAAi5");
	this.shape_91.setTransform(-10,-122.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(5,1,1).p("AAAxlMAAAAjL");
	this.shape_92.setTransform(-10,-121.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(5,1,1).p("AAAxtMAAAAjb");
	this.shape_93.setTransform(-10,-120.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(5,1,1).p("AAAx2MAAAAjt");
	this.shape_94.setTransform(-10,-119.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(5,1,1).p("AAAx+MAAAAj9");
	this.shape_95.setTransform(-10,-118.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(5,1,1).p("AAAyHMAAAAkP");
	this.shape_96.setTransform(-10,-118);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(5,1,1).p("AAAyPMAAAAkf");
	this.shape_97.setTransform(-10,-117.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(5,1,1).p("AAAyXMAAAAkv");
	this.shape_98.setTransform(-10,-116.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(5,1,1).p("AAAyfMAAAAk/");
	this.shape_99.setTransform(-10,-115.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(5,1,1).p("AAAynMAAAAlP");
	this.shape_100.setTransform(-10,-114.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(5,1,1).p("AAAyvMAAAAlf");
	this.shape_101.setTransform(-10,-114.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(5,1,1).p("AAAy3MAAAAlv");
	this.shape_102.setTransform(-10,-113.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(5,1,1).p("AAAy/MAAAAl/");
	this.shape_103.setTransform(-10,-112.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(5,1,1).p("AAAzGMAAAAmN");
	this.shape_104.setTransform(-10,-111.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(5,1,1).p("AAAzOMAAAAmd");
	this.shape_105.setTransform(-10,-111.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(5,1,1).p("AAAzWMAAAAmt");
	this.shape_106.setTransform(-10,-110.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(5,1,1).p("AAAzdMAAAAm7");
	this.shape_107.setTransform(-10,-109.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(5,1,1).p("AAAzlMAAAAnL");
	this.shape_108.setTransform(-10,-108.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(5,1,1).p("AAAzsMAAAAnZ");
	this.shape_109.setTransform(-10,-108.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(5,1,1).p("AAAzzMAAAAnn");
	this.shape_110.setTransform(-10,-107.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(5,1,1).p("AAAz6MAAAAn1");
	this.shape_111.setTransform(-10,-106.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(5,1,1).p("AAA0BMAAAAoD");
	this.shape_112.setTransform(-10,-106.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(5,1,1).p("AAA0IMAAAAoR");
	this.shape_113.setTransform(-10,-105.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(5,1,1).p("AAA0PMAAAAof");
	this.shape_114.setTransform(-10,-104.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(5,1,1).p("AAA0WMAAAAot");
	this.shape_115.setTransform(-10,-104.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(5,1,1).p("AAA0dMAAAAo7");
	this.shape_116.setTransform(-10,-103.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(5,1,1).p("AAA0kMAAAApJ");
	this.shape_117.setTransform(-10,-102.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(5,1,1).p("AAA0qMAAAApV");
	this.shape_118.setTransform(-10,-102.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(5,1,1).p("AAA0xMAAAApj");
	this.shape_119.setTransform(-10,-101.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(5,1,1).p("AAA03MAAAApv");
	this.shape_120.setTransform(-10,-100.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(5,1,1).p("AAA09MAAAAp7");
	this.shape_121.setTransform(-10,-100.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(5,1,1).p("AAA1EMAAAAqJ");
	this.shape_122.setTransform(-10,-99.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(5,1,1).p("AAA1KMAAAAqV");
	this.shape_123.setTransform(-10,-99.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(5,1,1).p("AAA1QMAAAAqh");
	this.shape_124.setTransform(-10,-98.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(5,1,1).p("AAA1WMAAAAqt");
	this.shape_125.setTransform(-10,-97.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(5,1,1).p("AAA1cMAAAAq5");
	this.shape_126.setTransform(-10,-97.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(5,1,1).p("AAA1iMAAAArF");
	this.shape_127.setTransform(-10,-96.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(5,1,1).p("AAA1oMAAAArR");
	this.shape_128.setTransform(-10,-96.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(5,1,1).p("AAA1uMAAAArd");
	this.shape_129.setTransform(-10,-95.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(5,1,1).p("AAA1zMAAAArn");
	this.shape_130.setTransform(-10,-95.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(5,1,1).p("AAA15MAAAAry");
	this.shape_131.setTransform(-10,-94.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(5,1,1).p("AAA1+MAAAAr9");
	this.shape_132.setTransform(-10,-94.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(5,1,1).p("AAAWFMAAAgsJ");
	this.shape_133.setTransform(-10,-93.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:-232.4}}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape,p:{y:-227.8}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.9,-240.6,24.3,21.8);


(lib.honeyflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.honeybee();
	this.instance.parent = this;
	this.instance.setTransform(22.6,-144.1,0.422,0.422,0,0,0,-37.5,63.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIB9IgQgCIgNgEIgPgGIgFgDIgDgBIgDgCIgCgBIgDgCIgCgBIgCgCIgCgBIgCgCIgCgCIgCgBIgBgCIgDgBIgCgCIgCgCIgBgBIgBgCIgCgCIgBgBIgCgCIgCgCIgBgCIgBgBIgBgCIgBgCIgCgBIgBgCIgBgCIgBgCIgBgBIgBgCIgBgCIgBgCIAAgBIgBgCIgCgCIgBgCIAAgBIgBgCIgBgCIAAgCIAAgCIgBgBIgBgCIAAgCIgBgCIAAgCIgBgBIAAgCIAAgCIgBgCIAAgCIgBgCIAAgCIgBgBIAAgCIAAgCIAAgCIAAgCIgBgCIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIABgCIgBgCIABgCIAAgCIAAgBIABgCIAAgCIAAgCIABgCIABgCIAAgCIAAgCIABgCIABgCIAAgCIABgCIABgCIAAgCIABgCIABgCIABgCIAAgCIABgCIACgCIABgCIABgCIAAgCIACgDIABgCIACgCIACgCIABgCIABgCIACgCIABgCIACgDIADgCIABgCIACgCIAHgHIANgJIAIgFIAMgGIAHgDIAMgEIAMgCIALgBIAJAAIAJAAIAHABIAKACIAKADIADABIAEACIADABIAEABIACACIAEABIACACIADABIACACIADABIACACIACABIACACIADACIACABIABACIACABIABACIADACIACABIABACIABACIACABIACACIABACIACABIAAACIACACIABACIABABIACACIABACIABACIABABIABACIABACIAAABIABACIABACIACACIABACIAAABIABACIABACIABACIAAABIABACIAAACIABACIAAACIABABIAAACIABACIABACIAAACIABACIAAACIAAABIAAACIABACIAAACIAAACIABACIAAACIAAABIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAABIAAACIgBACIAAACIAAACIAAACIAAACIgBACIAAACIgBACIAAACIgBACIAAACIgBACIgBACIAAACIgBACIAAACIgBACIgBACIAAACIgBACIgBACIgBACIgCACIAAACIgBACIgCACIgBACIgBACIgBACIgCADIgCACIgBACIgCACIgBACIgCACIgCACIgCADIgCACIgCACIgDACIgDADIgFAEIgDADIgEACIgIAFIgNAGIgFACIgHADIgSAEIgLABIgHAAIgIAAg");
	this.shape.setTransform(22.3,-143.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-215.3,105.5,83.9);


// stage content:
(lib.writingsuccess_Fontkid_b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_538 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(538).call(this.frame_538).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(199.8,104,0.998,0.998,0,-8,172,22.4,-144);
	this.instance._off = true;

	this.instance_1 = new lib.honeybee();
	this.instance_1.parent = this;
	this.instance_1.setTransform(196.8,366.2,0.421,0.421,0,-8.5,171.5,-37.3,63.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({y:443.2},165).wait(10).to({scaleX:1,scaleY:1,skewX:-8.5,skewY:171.5,x:199,y:360.1},0).to({scaleX:1,scaleY:1,skewX:-8.3,skewY:171.7,guide:{path:[199.1,360.1,201.9,346.3,207.3,333.3,212.6,320.4,221.9,310,231.2,299.6,243.7,293.2,256.1,286.7,270.6,286.8]}},62).to({guide:{path:[270.5,286.8,270.6,286.8,270.7,286.8,285.3,286.9,299.5,289.9,313.7,292.9,324.1,302.6,334.5,312.4,340.9,324.1,347.3,335.8,349.9,349.5,351.5,357.6,351.9,365.9]}},78).to({scaleX:1,scaleY:1,skewX:-8.5,skewY:171.5,guide:{path:[351.8,365.9,352.1,371.5,351.8,377.2,351.1,391.3,343.7,403.5,336.4,415.7,326.4,425.6,316,435.9,302.5,440.8,289,445.7,274.4,445,259.9,445.6,246.9,439.9,234,434.2,222.7,423.4,211.5,412.6,207.2,400.1,202.9,387.7,200.4,373.1,199.8,369.7,199.3,366.3]}},141).to({_off:true},9).wait(65));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(474).to({_off:false},0).to({regX:-37.5,guide:{path:[196.9,366.2,224.8,375.6,253.7,382,311,395.1,356.2,432.6,404.1,472.6,390.6,533.4,377.6,591.6,353.5,629.4]}},64).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(198.6,444.8,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},165).wait(10).to({_off:false,x:198.8,y:357.7},0).to({_off:true},281).wait(74));

	// Layer 9
	this.instance_2 = new lib.ar1("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(109.4,374.3,1,1,0,0,0,0.3,30.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(530));

	// Layer 28
	this.instance_3 = new lib.ar2("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(278.1,355.3,1,1,0,0,180);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(184).to({_off:false},0).wait(355));

	// Layer 10
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AMHAAQAAFBjjDjQjjDjlBAAQlAAAjjjjQjjjjAAlBQAAlADjjjQDjjjFAAAQFBAADjDjQDjDjAAFAg");
	this.shape_1.setTransform(275.4,365.8,0.986,1.025);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(464).to({_off:false},0).wait(75));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_324 = new cjs.Graphics().p("AhaOvQFoltIAgFQIBgEFtFnQFuFnAEIBMgmqAAWQgEoBFmlug");
	var mask_graphics_325 = new cjs.Graphics().p("Am8b+QAHoAFvlmQFwllIAAHQIBAHFlFvQFmFwgIIBg");
	var mask_graphics_326 = new cjs.Graphics().p("Am7bUQAToAF3leQF3lcIAATQIBATFcF3QFdF4gSIAg");
	var mask_graphics_327 = new cjs.Graphics().p("Am6aqQAfoAF+lVQGAlTH/AeQIAAeFUF/QFVGAgfIAg");
	var mask_graphics_328 = new cjs.Graphics().p("Am4aAQAqn/GHlMQGHlLH+AqQH/AqFLGHQFMGHgqH/g");
	var mask_graphics_329 = new cjs.Graphics().p("Am1ZWQA1n+GNlDQGQlCH9A2QH+A1FCGOQFDGPg2H+g");
	var mask_graphics_330 = new cjs.Graphics().p("AmyYsQBBn8GUk6QGXk5H8BBQH8BBE5GVQE6GWhBH9g");
	var mask_graphics_331 = new cjs.Graphics().p("AmvYCQBNn7GbkwQGekwH6BNQH7BNEwGcQExGdhNH7g");
	var mask_graphics_332 = new cjs.Graphics().p("AmqXYQBYn4GikoQGkkmH5BYQH5BZEmGjQEoGkhZH5g");
	var mask_graphics_333 = new cjs.Graphics().p("AmlWvQBjn3GpkdQGrkdH2BkQH4BkEcGpQEeGrhkH2g");
	var mask_graphics_334 = new cjs.Graphics().p("AmgWGQBwn1GvkUQGxkSH0BvQH0BvETGwQEUGxhvH0g");
	var mask_graphics_335 = new cjs.Graphics().p("AmZVdQB6nyG1kKQG4kJHxB6QHyB7EJG2QEKG3h6Hyg");
	var mask_graphics_336 = new cjs.Graphics().p("AmSU0QCFnvG7kAQG+j/HuCGQHvCGD/G8QEAG9iGHug");
	var mask_graphics_337 = new cjs.Graphics().p("AmLULQCRnsHBj1QHDj1HrCRQHsCRD1HBQD2HDiRHsg");
	var mask_graphics_338 = new cjs.Graphics().p("AmDTjQCcnoHHjsQHIjqHoCcQHoCcDrHHQDrHIicHog");
	var mask_graphics_339 = new cjs.Graphics().p("Al6S7QCnnlHMjhQHNjgHkCnQHlCnDhHNQDgHNinHlg");
	var mask_graphics_340 = new cjs.Graphics().p("AlwSTQCynhHQjWQHTjVHgCxQHhCzDWHRQDWHSiyHhg");
	var mask_graphics_341 = new cjs.Graphics().p("AlmRsQC9ndHVjMQHXjKHcC8QHdC9DLHWQDMHYi9Hcg");
	var mask_graphics_342 = new cjs.Graphics().p("AlcRFQDInYHajCQHcjAHXDIQHZDIDAHaQDBHcjIHYg");
	var mask_graphics_343 = new cjs.Graphics().p("AlQQeQDSnTHei3QHgi1HTDSQHUDTC1HfQC2HfjSHUg");
	var mask_graphics_344 = new cjs.Graphics().p("AlEP4QDdnPHiirQHkiqHODcQHPDdCqHjQCrHkjdHPg");
	var mask_graphics_345 = new cjs.Graphics().p("Ak4PSQDnnKHmigQHoifHJDnQHKDoCfHmQCgHojnHJg");
	var mask_graphics_346 = new cjs.Graphics().p("AkrOsQDynEHpiVQHsiUHDDyQHEDyCVHpQCVHsjyHEg");
	var mask_graphics_347 = new cjs.Graphics().p("AkdOHQD8m+HsiKQHviJG+D8QG/D8CJHtQCKHvj8G+g");
	var mask_graphics_348 = new cjs.Graphics().p("AkPNjQEGm5Hwh/QHxh9G4EGQG5EGB+HwQB/HykGG4g");
	var mask_graphics_349 = new cjs.Graphics().p("AkAM/QEPmzHzhzQH0hyGyEPQGzERBzHyQBzH1kQGyg");
	var mask_graphics_350 = new cjs.Graphics().p("AjxMbQEZmsH2hoQH3hnGrEaQGtEaBnH1QBoH3kaGsg");
	var mask_graphics_351 = new cjs.Graphics().p("AjhL4QEjmlH4hdQH5hbGlEjQGmEjBcH4QBcH5kjGmg");
	var mask_graphics_352 = new cjs.Graphics().p("AjQLWQEsmfH6hRQH6hQGfEtQGfEtBRH5QBRH7ktGfg");
	var mask_graphics_353 = new cjs.Graphics().p("Ai/K0QE1mYH8hGQH8hEGYE2QGYE2BFH8QBFH8k2GYg");
	var mask_graphics_354 = new cjs.Graphics().p("AiuKTQE/mRH9g6QH+g5GQE/QGRFAA6H9QA5H+k/GQg");
	var mask_graphics_355 = new cjs.Graphics().p("AicJyQFImJH+gvQH/gtGJFIQGKFJAuH+QAuH/lIGJg");
	var mask_graphics_356 = new cjs.Graphics().p("AiJJSQFQmCH/gjQIAghGCFRQGCFRAiH/QAjIAlSGCg");
	var mask_graphics_357 = new cjs.Graphics().p("Ah3IzQFZl7IAgXQIBgWF6FaQF6FaAXH/QAXIBlaF6g");
	var mask_graphics_358 = new cjs.Graphics().p("AhjIUQFhlyIBgMQIBgKFxFiQFzFjALH/QALICliFyg");
	var mask_graphics_359 = new cjs.Graphics().p("AhQH2QFqlqIBgBQIBACFpFqQFrFrgBIAQAAIClrFqg");
	var mask_graphics_360 = new cjs.Graphics().p("Ag7HYQFxlhIBALQIBANFhFzQFiFzgMIAQgMIBlzFig");
	var mask_graphics_361 = new cjs.Graphics().p("AgnG7QF6lZIAAXQIAAZFZF7QFaF7gYH/QgYIBl7FZg");
	var mask_graphics_362 = new cjs.Graphics().p("AgSGfQGClQH/AjQIAAkFQGCQFRGDgkH/QgjIAmDFQg");
	var mask_graphics_363 = new cjs.Graphics().p("AACGEQGKlIH/AvQH/AwFHGKQFIGKgvH+QgvH/mKFIg");
	var mask_graphics_364 = new cjs.Graphics().p("AAYFpQGRk+H+A6QH9A8E/GRQE+GRg6H9Qg7H+mRE+g");
	var mask_graphics_365 = new cjs.Graphics().p("AAuFQQGZk2H8BGQH8BHE1GYQE1GZhGH7QhGH9mZE1g");
	var mask_graphics_366 = new cjs.Graphics().p("ABFE3QGfksH6BRQH7BSErGfQEtGghSH6QhSH6mfEsg");
	var mask_graphics_367 = new cjs.Graphics().p("ABbEeQGnkhH4BbQH4BfEiGlQEjGnhdH3QhdH5mmEjg");
	var mask_graphics_368 = new cjs.Graphics().p("ABzEHQGskYH2BnQH2BqEZGsQEZGthpH1QhoH3mtEYg");
	var mask_graphics_369 = new cjs.Graphics().p("ACKDwQGzkOH0ByQHzB1EPGzQEPGzh0HzQh0H0mzEPg");
	var mask_graphics_370 = new cjs.Graphics().p("ACiDaQG5kEHxB+QHxCAEEG5QEGG5h/HwQiAHxm5EFg");
	var mask_graphics_371 = new cjs.Graphics().p("AC6DFQG/j6HuCJQHuCMD6G+QD7G/iKHtQiLHum+D7g");
	var mask_graphics_372 = new cjs.Graphics().p("ADTCxQHEjwHrCUQHqCXDxHEQDxHFiWHpQiWHrnEDxg");
	var mask_graphics_373 = new cjs.Graphics().p("ADsCdQHKjlHnCfQHmCiDnHJQDmHLigHmQihHnnKDmg");
	var mask_graphics_374 = new cjs.Graphics().p("AEFCLQHPjbHjCqQHjCtDcHOQDcHQisHiQisHknODcg");
	var mask_graphics_375 = new cjs.Graphics().p("AEfB5QHTjQHgC1QHeC4DSHTQDRHUi2HfQi3HfnUDSg");
	var mask_graphics_376 = new cjs.Graphics().p("AE4BpQHZjGHbDAQHaDCDHHYQDHHZjCHaQjBHbnZDHg");
	var mask_graphics_377 = new cjs.Graphics().p("AFTBZQHci7HXDKQHWDOC8HcQC8HdjMHWQjNHXndC7g");
	var mask_graphics_378 = new cjs.Graphics().p("AFtBKQHhiwHRDVQHSDYCxHgQCxHijXHQQjXHSnhCxg");
	var mask_graphics_379 = new cjs.Graphics().p("AGHA8QHlimHNDgQHMDjCmHkQCmHljhHMQjiHNnkCmg");
	var mask_graphics_380 = new cjs.Graphics().p("AGiAuQHpiaHHDqQHHDtCbHoQCbHpjrHHQjsHInpCbg");
	var mask_graphics_381 = new cjs.Graphics().p("AG9AiQHsiPHCD1QHCD3CPHrQCQHsj1HCQj3HCnsCQg");
	var mask_graphics_382 = new cjs.Graphics().p("AHZAXQHviEG8D/QG8EBCEHuQCFHwkAG7QkBG9nvCFg");
	var mask_graphics_383 = new cjs.Graphics().p("AH0AMQHyh4G2EIQG2EMB5HxQB6HzkKG1QkLG3nyB5g");
	var mask_graphics_384 = new cjs.Graphics().p("AIQADQH0htGwESQGwEVBuH0QBuH1kUGwQkUGwn1Bug");
	var mask_graphics_385 = new cjs.Graphics().p("AIrgFQH3hjGqEdQGpEfBjH2QBiH3kdGpQkeGqn3Bjg");
	var mask_graphics_386 = new cjs.Graphics().p("AJHgNQH5hXGjEmQGjEpBXH4QBXH6knGiQkoGjn5BYg");
	var mask_graphics_387 = new cjs.Graphics().p("AJjgTQH7hMGcEvQGcEyBMH7QBLH7kwGcQkxGcn7BMg");
	var mask_graphics_388 = new cjs.Graphics().p("AJ/gZQH9hAGVE5QGVE7BAH8QBAH9k6GUQk6GWn9BAg");
	var mask_graphics_389 = new cjs.Graphics().p("AKbgeQH+g0GOFBQGOFFA0H9QA1H+lDGNQlEGPn+A0g");
	var mask_graphics_390 = new cjs.Graphics().p("AK3giQH/gpGHFLQGGFNApH/QApH/lMGGQlNGHn+Apg");
	var mask_graphics_391 = new cjs.Graphics().p("ALUgkQH/geF/FUQF/FWAdH/QAdIAlUF+QlWF/n/Aeg");
	var mask_graphics_392 = new cjs.Graphics().p("ALwgmQIAgSF3FcQF3FfARH/QASIBldF2QleF4oAARg");
	var mask_graphics_393 = new cjs.Graphics().p("AMMgnQIAgHFwFlQFuFnAGIAQAGIBllFuQlnFwoAAGg");
	var mask_graphics_394 = new cjs.Graphics().p("EAMOAmDMAAagmqQIBAFFnFtQFmFvgGIAQgFIBluFmQlqFin2AAIgPAAg");
	var mask_graphics_395 = new cjs.Graphics().p("EALxAmCMABTgmpQIAARFfF1QFeF4gSH/QgRIBl2FeQllFOniAAIgwgBg");
	var mask_graphics_396 = new cjs.Graphics().p("EALVAmBMACLgmnQIAAdFWF9QFVF/gdH/QgdIAl9FVQlhE8nPAAQgnAAgogCg");
	var mask_graphics_397 = new cjs.Graphics().p("EAK5Al/MADDgmjQH/AoFNGFQFNGHgpH+QgoIAmGFMQlcEpm8AAQg2AAg3gEg");
	var mask_graphics_398 = new cjs.Graphics().p("EAKdAl8MAD7gmdQH+AzFEGMQFDGPgzH9Qg1H+mMFEQlXEXmqAAQhFAAhGgHg");
	var mask_graphics_399 = new cjs.Graphics().p("EAKBAl5MAEzgmXQH8A+E8GUQE6GWhAH8Qg/H9mUE6QlSEGmYAAQhTAAhVgKg");
	var mask_graphics_400 = new cjs.Graphics().p("EAJlAl1MAFrgmQQH6BKEyGcQExGchLH7QhLH7mbExQlLD2mIAAQhgAAhkgPg");
	var mask_graphics_401 = new cjs.Graphics().p("EAJJAlwMAGigmGQH5BVEpGiQEnGkhWH4QhXH6miEnQlEDml4AAQhuAAhygUg");
	var mask_graphics_402 = new cjs.Graphics().p("EAItAlrMAHagl9QH3BiEfGoQEdGqhiH3QhiH3moEeQk9DWlpAAQh7AAiAgZg");
	var mask_graphics_403 = new cjs.Graphics().p("EAISAllMAIQglxQH1BsEVGwQEUGwhtH0QhuH1mvEUQk2DHlZAAQiIAAiNgfg");
	var mask_graphics_404 = new cjs.Graphics().p("EAH2AlfMAJHgllQHyB4EMG1QEKG3h5HxQh5Hzm1EKQkuC4lKAAQiVAAibglg");
	var mask_graphics_405 = new cjs.Graphics().p("EAHbAlYMAJ9glYQHwCEEBG7QEAG9iEHuQiEHwm7EBQkmCpk7AAQiiAAiogsg");
	var mask_graphics_406 = new cjs.Graphics().p("EAG/AlQMAK0glIQHsCPD4HBQD2HCiQHrQiPHtnBD2QkcCdkuAAQivAAi1g1g");
	var mask_graphics_407 = new cjs.Graphics().p("EAGkAlIMALqgk4QHpCaDtHGQDrHIiaHoQiaHpnGDsQkUCQkgAAQi8AAjBg9g");
	var mask_graphics_408 = new cjs.Graphics().p("EAGKAk/MAMfgknQHlCmDiHMQDiHMimHlQilHlnMDiQkKCDkSAAQjJAAjMhGg");
	var mask_graphics_409 = new cjs.Graphics().p("EAFvAk2MANUgkUQHhCwDZHRQDWHSiwHgQixHinQDXQkAB3kFAAQjVAAjZhPg");
	var mask_graphics_410 = new cjs.Graphics().p("EAFVAksMAOJgkAQHdC7DNHWQDMHWi7HdQi8HdnVDNQj2Brj3AAQjjAAjjhZg");
	var mask_graphics_411 = new cjs.Graphics().p("EAE7AkhMAO9gjrQHYDGDDHaQDBHcjGHYQjGHZnaDCQjrBgjrAAQjvAAjuhkg");
	var mask_graphics_412 = new cjs.Graphics().p("EAEhAkWMAPwgjVQHUDRC4HfQC3HfjRHUQjRHUneC3QjgBWjeAAQj8AAj5hvg");
	var mask_graphics_413 = new cjs.Graphics().p("EAEHAkKMAQkgi9QHPDcCtHiQCsHjjbHPQjcHQniCsQjVBMjRAAQkJAAkEh7g");
	var mask_graphics_414 = new cjs.Graphics().p("EADuAj+MARWgikQHKDlCiHnQChHnjmHKQjmHKnmChQjJBDjEAAQkXAAkNiHg");
	var mask_graphics_415 = new cjs.Graphics().p("EADVAjxMASIgiKQHFDwCXHqQCVHqjvHFQjxHFnpCWQi9A6i4AAQkkAAkXiUg");
	var mask_graphics_416 = new cjs.Graphics().p("EAC9AjkMAS5ghwQG/D7CMHtQCKHuj6G+Qj6HAntCLQixAyiqAAQkzAAkfihg");
	var mask_graphics_417 = new cjs.Graphics().p("EAClAjWMATqghUQG5EFCBHwQB/HxkFG5QkEG6nwB/QikArieAAQlBAAknivg");
	var mask_graphics_418 = new cjs.Graphics().p("EACNAjIMAUagg3QGzEPB1HzQB0HzkOGzQkPG0nyB0QiXAjiRAAQlPAAkwi8g");
	var mask_graphics_419 = new cjs.Graphics().p("EAB1Ai5MAVKggZQGtEZBqH1QBoH2kYGtQkZGtn1BqQiJAciEAAQleAAk4jLg");
	var mask_graphics_420 = new cjs.Graphics().p("EABeAipIV4/5QGnEiBeH4QBdH5kiGmQkiGnn3BdQh7AXh3AAQluAAk/jbg");
	var mask_graphics_421 = new cjs.Graphics().p("EABHAiZIWm/YQGgErBTH6QBSH6ksGgQkrGgn5BSQhuAShpAAQl+AAlGjrg");
	var mask_graphics_422 = new cjs.Graphics().p("EAAxAiJIXT+3QGZE0BIH8QBFH8k0GZQk1GZn7BHQhfANhbAAQmPAAlMj7g");
	var mask_graphics_423 = new cjs.Graphics().p("EAAbAh4IYA+VQGRE+A8H9QA7H+k+GRQk+GSn9A7QhQAKhOAAQmfAAlSkMg");
	var mask_graphics_424 = new cjs.Graphics().p("EAAFAhmIYs9xQGKFHAwH+QAvH/lHGKQlHGLn+AwQhBAGg/AAQmxAAlYkeg");
	var mask_graphics_425 = new cjs.Graphics().p("EgAPAhUIZV9NQGDFQAlH/QAjIAlQGDQlQGDn/AkQgxADgxAAQnDABlckwg");
	var mask_graphics_426 = new cjs.Graphics().p("EgAkAhCIZ/8oQF7FZAaIAQAXIAlYF7QlZF7oAAZQgiABghAAQnWAAlhlBg");
	var mask_graphics_427 = new cjs.Graphics().p("EgA5AgvIap8CQFzFhAOIBQALIBlgFyQliF0oAANIgjAAQnrAAlllUg");
	var mask_graphics_428 = new cjs.Graphics().p("EgBNAgbIbR7aQFrFpACIBQAAIBlpFrQlqFroAABIgDAAQn/AAlplog");
	var mask_graphics_429 = new cjs.Graphics().p("EAMCAmDQoBgKlilyIb56yQFjFygKIAQgMIBlxFiQlnFZnuAAIgdAAg");
	var mask_graphics_430 = new cjs.Graphics().p("EALmAmCQoBgWlZl6Icf6JQFaF6gVIAQgXIBl6FaQljFFnZABIg9gCg");
	var mask_graphics_431 = new cjs.Graphics().p("EALKAmBQoAgilRmCIdF5fQFRGCghH/QgjIAmBFRQleE0nHAAQgtAAgugDg");
	var mask_graphics_432 = new cjs.Graphics().p("EAKuAl+Qn/gtlImJIdp40QFJGIgtH/QguH/mJFIQlaEim0AAQg8AAg9gGg");
	var mask_graphics_433 = new cjs.Graphics().p("EAKSAl7Qn+g5k/mQIeM4JQFAGQg4H+Qg6H+mQE/QlUEQmiAAQhLAAhMgJg");
	var mask_graphics_434 = new cjs.Graphics().p("EAJ2Al4Qn9hFk2mXIew3dQE2GYhEH8QhFH8mXE2QlPD/mRAAQhYAAhbgMg");
	var mask_graphics_435 = new cjs.Graphics().p("EAJaAl0Qn7hQktmfIfR2vQEuGehQH6QhRH7meEtQlIDumBAAQhlAAhqgQg");
	var mask_graphics_436 = new cjs.Graphics().p("EAI+AlvQn5hckjmlIfx2CQEkGmhbH4QhcH4mlEkQlBDflxAAQhzAAh4gWg");
	var mask_graphics_437 = new cjs.Graphics().p("EAIiAlpQn3hnkZmrMAgRgVTQEaGrhmH2QhoH3mrEaQk6DPliAAQiAAAiGgcg");
	var mask_graphics_438 = new cjs.Graphics().p("EAIGAljQn0hykPmyMAgvgUkQEQGyhxH0Qh0H0mxEQQkyDAlTAAQiNAAiUgig");
	var mask_graphics_439 = new cjs.Graphics().p("EAHrAldQnxh+kGm4MAhNgT0QEGG4h9HxQh/Hxm3EGQkqCylEAAQibAAiggog");
	var mask_graphics_440 = new cjs.Graphics().p("EAHQAlVQnuiJj8m+MAhpgTDQD8G+iIHuQiKHum+D8QkhCkk2AAQinAAitgwg");
	var mask_graphics_441 = new cjs.Graphics().p("EAG1AlNQnriUjynDMAiEgSSQDyHDiTHrQiVHrnDDyQkZCWkoAAQi0AAi5g4g");
	var mask_graphics_442 = new cjs.Graphics().p("EAGaAlFQnnigjonIMAiegRhQDoHJifHoQigHnnIDoQkQCJkaAAQjBAAjFhAg");
	var mask_graphics_443 = new cjs.Graphics().p("EAF/Ak8QnjirjenOMAi3gQtQDeHOiqHjQirHknODdQkGB+kMAAQjOAAjRhKg");
	var mask_graphics_444 = new cjs.Graphics().p("EAFlAkyQngi1jTnTMAjPgP7QDTHTi0HgQi3HfnSDTQj8Byj/AAQjbAAjchUg");
	var mask_graphics_445 = new cjs.Graphics().p("EAFKAkoQnbjAjInYMAjlgPHQDJHYjAHbQjBHbnXDIQjxBnjyAAQjoAAjoheg");
	var mask_graphics_446 = new cjs.Graphics().p("EAEwAkdQnWjLi+ncMAj7gOTQC+HcjLHXQjLHXncC9QjmBcjlAAQj1AAjzhpg");
	var mask_graphics_447 = new cjs.Graphics().p("EAEXAkSQnSjWizngMAkPgNfQCzHgjVHTQjWHSngCyQjcBSjYAAQkBAAj9h0g");
	var mask_graphics_448 = new cjs.Graphics().p("EAD9AkGQnMjgionkMAkigMqQCnHkjfHNQjhHNnkCoQjPBIjMAAQkPAAkHiAg");
	var mask_graphics_449 = new cjs.Graphics().p("EADkAj5QnHjqidnoMAk0gL0QCcHnjpHJQjsHHnnCdQjEA/i/AAQkcAAkRiNg");
	var mask_graphics_450 = new cjs.Graphics().p("EADLAjsQnCj0iRnsMAlEgK+QCSHrj0HDQj2HCnrCRQi4A3ixAAQkrAAkaiag");
	var mask_graphics_451 = new cjs.Graphics().p("EACzAjfQm8j/iHnvMAlUgKIQCGHuj+G9QkAG9nuCGQirAuilAAQk4AAkjimg");
	var mask_graphics_452 = new cjs.Graphics().p("EACbAjRQm2kJh7nyMAlhgJSQB7HxkIG4QkKG2nxB7QieAniYAAQlHAAkri0g");
	var mask_graphics_453 = new cjs.Graphics().p("EACDAjCQmwkThwn0MAlvgIbQBvH0kSGxQkUGwnzBwQiRAgiLAAQlWAAkzjDg");
	var mask_graphics_454 = new cjs.Graphics().p("EABsAizQmqkdhkn2MAl6gHlQBkH3kcGrQkdGqn2BkQiEAah+AAQllAAk6jSg");
	var mask_graphics_455 = new cjs.Graphics().p("EABVAijQmkkmhYn5MAmEgGtQBZH5kmGkQknGjn4BZQh1AVhxAAQl1AAlBjig");
	var mask_graphics_456 = new cjs.Graphics().p("EAA+AiTQmckwhOn6MAmOgF2QBNH7kvGdQkwGdn6BNQhoAQhjAAQmEAAlJjyg");
	var mask_graphics_457 = new cjs.Graphics().p("EAAoAiDQmWk6hCn8MAmWgE+QBCH8k5GXQk6GVn7BCQhZAMhVAAQmVAAlPkCg");
	var mask_graphics_458 = new cjs.Graphics().p("EAASAhxQmOlCg3n+MAmcgEGQA3H+lCGPQlDGOn9A3QhKAHhHAAQmmAAlVkTg");
	var mask_graphics_459 = new cjs.Graphics().p("EgADAhgQmIlMgqn+MAmhgDPQArH/lLGIQlMGHn+AqQg6AFg5AAQm5AAlZkkg");
	var mask_graphics_460 = new cjs.Graphics().p("EgAYAhNQmAlUgfn/MAmlgCWQAfH/lTGAQlVGAn/AfQgrACgqAAQnLAAlek3g");
	var mask_graphics_461 = new cjs.Graphics().p("EgAtAg7Ql4ldgToAMAmogBeQATIAlcF4QldF4oAATIg2ABQneAAljlJg");
	var mask_graphics_462 = new cjs.Graphics().p("EgBBAgnQlwllgIoAMAmpgAmQAIIAlkFxQlmFvoAAIIgWAAQnyAAlnldg");
	var mask_graphics_463 = new cjs.Graphics().p("EAMSAmEQoBgElmlsQloluAEoAMAmqAASQgEIAltFpQlqFjn5AAIgLAAg");
	var mask_graphics_464 = new cjs.Graphics().p("EAL2AmDQoBgPldl1Qlgl1APoBMAmpABLQgPIAl1FgQlnFQnkAAIgrgBg");
	var mask_graphics_465 = new cjs.Graphics().p("EAL6Al9QoBgNlgl5Qlhl6ANoJMAmqABAQgNIIl0FoQlnFZnpABIgkgBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(324).to({graphics:mask_graphics_324,x:203,y:182.2}).wait(1).to({graphics:mask_graphics_325,x:203.1,y:182.5}).wait(1).to({graphics:mask_graphics_326,x:203.1,y:183.9}).wait(1).to({graphics:mask_graphics_327,x:203.1,y:185.3}).wait(1).to({graphics:mask_graphics_328,x:203.1,y:186.7}).wait(1).to({graphics:mask_graphics_329,x:203.1,y:188.1}).wait(1).to({graphics:mask_graphics_330,x:203.1,y:189.5}).wait(1).to({graphics:mask_graphics_331,x:203.1,y:190.9}).wait(1).to({graphics:mask_graphics_332,x:203.2,y:192.3}).wait(1).to({graphics:mask_graphics_333,x:203.2,y:193.6}).wait(1).to({graphics:mask_graphics_334,x:203.2,y:195}).wait(1).to({graphics:mask_graphics_335,x:203.2,y:196.4}).wait(1).to({graphics:mask_graphics_336,x:203.2,y:197.7}).wait(1).to({graphics:mask_graphics_337,x:203.2,y:199.1}).wait(1).to({graphics:mask_graphics_338,x:203.3,y:200.4}).wait(1).to({graphics:mask_graphics_339,x:203.3,y:201.8}).wait(1).to({graphics:mask_graphics_340,x:203.3,y:203.1}).wait(1).to({graphics:mask_graphics_341,x:203.3,y:204.4}).wait(1).to({graphics:mask_graphics_342,x:203.3,y:205.7}).wait(1).to({graphics:mask_graphics_343,x:203.3,y:207}).wait(1).to({graphics:mask_graphics_344,x:203.3,y:208.3}).wait(1).to({graphics:mask_graphics_345,x:203.3,y:209.5}).wait(1).to({graphics:mask_graphics_346,x:203.3,y:210.8}).wait(1).to({graphics:mask_graphics_347,x:203.3,y:212}).wait(1).to({graphics:mask_graphics_348,x:203.2,y:213.2}).wait(1).to({graphics:mask_graphics_349,x:203.2,y:214.4}).wait(1).to({graphics:mask_graphics_350,x:203.2,y:215.6}).wait(1).to({graphics:mask_graphics_351,x:203.2,y:216.8}).wait(1).to({graphics:mask_graphics_352,x:203.2,y:217.9}).wait(1).to({graphics:mask_graphics_353,x:203.2,y:219}).wait(1).to({graphics:mask_graphics_354,x:203.2,y:220.1}).wait(1).to({graphics:mask_graphics_355,x:203.2,y:221.2}).wait(1).to({graphics:mask_graphics_356,x:203.1,y:222.3}).wait(1).to({graphics:mask_graphics_357,x:203.1,y:223.3}).wait(1).to({graphics:mask_graphics_358,x:203.1,y:224.4}).wait(1).to({graphics:mask_graphics_359,x:203.1,y:225.4}).wait(1).to({graphics:mask_graphics_360,x:203.1,y:226.4}).wait(1).to({graphics:mask_graphics_361,x:203.1,y:227.3}).wait(1).to({graphics:mask_graphics_362,x:203.2,y:228.2}).wait(1).to({graphics:mask_graphics_363,x:203.2,y:229.2}).wait(1).to({graphics:mask_graphics_364,x:203.2,y:230}).wait(1).to({graphics:mask_graphics_365,x:203.2,y:230.9}).wait(1).to({graphics:mask_graphics_366,x:203.2,y:231.7}).wait(1).to({graphics:mask_graphics_367,x:203.3,y:232.6}).wait(1).to({graphics:mask_graphics_368,x:203.3,y:233.3}).wait(1).to({graphics:mask_graphics_369,x:203.3,y:234.1}).wait(1).to({graphics:mask_graphics_370,x:203.3,y:234.8}).wait(1).to({graphics:mask_graphics_371,x:203.3,y:235.5}).wait(1).to({graphics:mask_graphics_372,x:203.3,y:236.2}).wait(1).to({graphics:mask_graphics_373,x:203.4,y:236.8}).wait(1).to({graphics:mask_graphics_374,x:203.4,y:237.5}).wait(1).to({graphics:mask_graphics_375,x:203.4,y:238.1}).wait(1).to({graphics:mask_graphics_376,x:203.4,y:238.6}).wait(1).to({graphics:mask_graphics_377,x:203.4,y:239.1}).wait(1).to({graphics:mask_graphics_378,x:203.4,y:239.6}).wait(1).to({graphics:mask_graphics_379,x:203.4,y:240.1}).wait(1).to({graphics:mask_graphics_380,x:203.4,y:240.6}).wait(1).to({graphics:mask_graphics_381,x:203.4,y:241}).wait(1).to({graphics:mask_graphics_382,x:203.3,y:241.4}).wait(1).to({graphics:mask_graphics_383,x:203.3,y:241.7}).wait(1).to({graphics:mask_graphics_384,x:203.3,y:242}).wait(1).to({graphics:mask_graphics_385,x:203.3,y:242.3}).wait(1).to({graphics:mask_graphics_386,x:203.3,y:242.6}).wait(1).to({graphics:mask_graphics_387,x:203.3,y:242.8}).wait(1).to({graphics:mask_graphics_388,x:203.3,y:243}).wait(1).to({graphics:mask_graphics_389,x:203.2,y:243.1}).wait(1).to({graphics:mask_graphics_390,x:203.2,y:243.3}).wait(1).to({graphics:mask_graphics_391,x:203.2,y:243.4}).wait(1).to({graphics:mask_graphics_392,x:203.2,y:243.4}).wait(1).to({graphics:mask_graphics_393,x:203.2,y:243.5}).wait(1).to({graphics:mask_graphics_394,x:203.2,y:243.5}).wait(1).to({graphics:mask_graphics_395,x:203.2,y:243.5}).wait(1).to({graphics:mask_graphics_396,x:203.2,y:243.5}).wait(1).to({graphics:mask_graphics_397,x:203.3,y:243.5}).wait(1).to({graphics:mask_graphics_398,x:203.3,y:243.5}).wait(1).to({graphics:mask_graphics_399,x:203.3,y:243.5}).wait(1).to({graphics:mask_graphics_400,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_401,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_402,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_403,x:203.4,y:243.6}).wait(1).to({graphics:mask_graphics_404,x:203.4,y:243.6}).wait(1).to({graphics:mask_graphics_405,x:203.4,y:243.6}).wait(1).to({graphics:mask_graphics_406,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_407,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_408,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_409,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_410,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_411,x:203.5,y:243.7}).wait(1).to({graphics:mask_graphics_412,x:203.5,y:243.7}).wait(1).to({graphics:mask_graphics_413,x:203.5,y:243.7}).wait(1).to({graphics:mask_graphics_414,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_415,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_416,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_417,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_418,x:203.4,y:243.6}).wait(1).to({graphics:mask_graphics_419,x:203.4,y:243.6}).wait(1).to({graphics:mask_graphics_420,x:203.4,y:243.6}).wait(1).to({graphics:mask_graphics_421,x:203.4,y:243.6}).wait(1).to({graphics:mask_graphics_422,x:203.4,y:243.6}).wait(1).to({graphics:mask_graphics_423,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_424,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_425,x:203.3,y:243.5}).wait(1).to({graphics:mask_graphics_426,x:203.3,y:243.5}).wait(1).to({graphics:mask_graphics_427,x:203.3,y:243.5}).wait(1).to({graphics:mask_graphics_428,x:203.3,y:243.5}).wait(1).to({graphics:mask_graphics_429,x:203.3,y:243.5}).wait(1).to({graphics:mask_graphics_430,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_431,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_432,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_433,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_434,x:203.4,y:243.6}).wait(1).to({graphics:mask_graphics_435,x:203.4,y:243.6}).wait(1).to({graphics:mask_graphics_436,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_437,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_438,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_439,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_440,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_441,x:203.5,y:243.7}).wait(1).to({graphics:mask_graphics_442,x:203.5,y:243.7}).wait(1).to({graphics:mask_graphics_443,x:203.5,y:243.8}).wait(1).to({graphics:mask_graphics_444,x:203.5,y:243.8}).wait(1).to({graphics:mask_graphics_445,x:203.5,y:243.8}).wait(1).to({graphics:mask_graphics_446,x:203.5,y:243.8}).wait(1).to({graphics:mask_graphics_447,x:203.5,y:243.8}).wait(1).to({graphics:mask_graphics_448,x:203.5,y:243.8}).wait(1).to({graphics:mask_graphics_449,x:203.5,y:243.8}).wait(1).to({graphics:mask_graphics_450,x:203.4,y:243.8}).wait(1).to({graphics:mask_graphics_451,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_452,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_453,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_454,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_455,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_456,x:203.3,y:243.7}).wait(1).to({graphics:mask_graphics_457,x:203.3,y:243.7}).wait(1).to({graphics:mask_graphics_458,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_459,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_460,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_461,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_462,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_463,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_464,x:203.2,y:243.6}).wait(1).to({graphics:mask_graphics_465,x:203.1,y:243}).wait(74));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,0,1).p("Ar7gNQABhAAJg8QAmjxCvi3QDgjoE8AAQE8AADgDoQDgDpAAFIQAAFJjgDpQjgDok8AAQk8AAjgjoQh0h5g4iU");
	this.shape_2.setTransform(275.4,365.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("AMHAAQAAFBjjDjQjjDjlBAAQlAAAjjjjQjjjjAAlBQAAlADjjjQDjjjFAAAQFBAADjDjQDjDjAAFAg");
	this.shape_3.setTransform(275.4,365.8,0.986,1.025);

	var maskedShapeInstanceList = [this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},324).to({state:[{t:this.shape_3}]},109).wait(106));

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_184 = new cjs.Graphics().p("EgBQAgbQlrlrAAoBMAmrAAAQAAIBlqFrQlsFqoAAAQoBAAlplqg");
	var mask_1_graphics_185 = new cjs.Graphics().p("EAL+AmEQoBgLlglyQljl0AMoAMAmqAA4QgMIBlyFiQloFXnrAAIghgBg");
	var mask_1_graphics_186 = new cjs.Graphics().p("EALjAmDQoBgXlYl6Qlal7AXoAMAmoABwQgXIAl6FbQlkFDnXAAIhAgCg");
	var mask_1_graphics_187 = new cjs.Graphics().p("EALHAmCQoAgjlPmCQlRmDAjn/MAmkACoQgjIAmCFRQlfExnEAAQgvAAgwgDg");
	var mask_1_graphics_188 = new cjs.Graphics().p("EAKsAl/Qn/gulGmKQlJmKAvn/MAmgADhQguH/mKFIQlaEfmyAAQg9AAhAgGg");
	var mask_1_graphics_189 = new cjs.Graphics().p("EAKSAl8Qn+g6k+mRQk/mRA6n+MAmbAEZQg6H9mRFAQlVENmgAAQhMAAhOgJg");
	var mask_1_graphics_190 = new cjs.Graphics().p("EAJ4Al5Qn9hGk0mYQk2mZBFn8MAmUAFRQhGH8mYE2QlOD8mPAAQhaAAhdgMg");
	var mask_1_graphics_191 = new cjs.Graphics().p("EAJeAl0Qn7hRkrmfQktmgBSn6MAmLAGJQhRH6mfEtQlIDsl/AAQhoAAhrgSg");
	var mask_1_graphics_192 = new cjs.Graphics().p("EAJEAlvQn4hckimmQkjmnBdn4MAmBAHAQhcH4mmEkQlBDclvAAQh1AAh6gXg");
	var mask_1_graphics_193 = new cjs.Graphics().p("EAIrAlqQn2hokYmsQkZmuBon1MAl3AH3QhpH2msEZQk5DNlfAAQiDAAiIgcg");
	var mask_1_graphics_194 = new cjs.Graphics().p("EAITAlkQn0h0kOmyQkQm0B0nzMAlrAIuQh0HzmyEQQkyC+lQAAQiQAAiVgig");
	var mask_1_graphics_195 = new cjs.Graphics().p("EAH7AldQnxh/kEm4QkGm6B/nxMAldAJlQh/Hxm4EGQkpCvlCAAQidAAiigpg");
	var mask_1_graphics_196 = new cjs.Graphics().p("EAHjAlVQntiKj7m+Qj7m/CKnuMAlPAKbQiLHum+D8QkhCikzAAQiqAAivgyg");
	var mask_1_graphics_197 = new cjs.Graphics().p("EAHMAlNQnpiVjxnEQjynFCWnqMAk/ALRQiWHrnEDxQkXCVkmAAQi2AAi8g6g");
	var mask_1_graphics_198 = new cjs.Graphics().p("EAG2AlFQnnihjmnJQjnnKCgnnMAkuAMHQigHnnKDnQkOCIkYAAQjDAAjHhCg");
	var mask_1_graphics_199 = new cjs.Graphics().p("EAGgAk8QnjisjcnOQjdnQCsnjMAkcAM9QisHjnODdQkFB7kKAAQjQAAjThLg");
	var mask_1_graphics_200 = new cjs.Graphics().p("EAGKAkyQnei3jSnTQjSnUC3nfMAkIANxQi3HfnTDSQj6Bwj9AAQjdAAjfhVg");
	var mask_1_graphics_201 = new cjs.Graphics().p("EAF1AkoQnajCjHnYQjHnZDBnaMAj0AOlQjCHbnYDIQjvBkjwAAQjqAAjqhfg");
	var mask_1_graphics_202 = new cjs.Graphics().p("EAFgAkdQnVjMi8ndQi9ndDMnWMAjeAPZQjMHWncC9QjlBajjAAQj3AAj1hqg");
	var mask_1_graphics_203 = new cjs.Graphics().p("EAFMAkRQnQjXixngQiyniDXnRMAjGAQNQjWHRnhCyQjZBQjWAAQkFAAj/h2g");
	var mask_1_graphics_204 = new cjs.Graphics().p("EAE5AkFQnMjhimnkQinnmDinMMAiuAQ/QjhHNnkCnQjOBGjJAAQkSAAkJiCg");
	var mask_1_graphics_205 = new cjs.Graphics().p("EAEmAj5QnGjsibnoQicnpDsnHMAiVARyQjsHHnoCcQjCA9i8AAQkfAAkTiOg");
	var mask_1_graphics_206 = new cjs.Graphics().p("EAEUAjsQnBj3iQnrQiQntD1nBMAh7ASjQj1HCnsCRQi2A1ivAAQktAAkcibg");
	var mask_1_graphics_207 = new cjs.Graphics().p("EAECAjeQm7kAiFnvQiFnwEAm8MAhgATVQkBG8nuCGQipAtijAAQk7AAklipg");
	var mask_1_graphics_208 = new cjs.Graphics().p("EADxAjQQm1kLh6nxQh5nzEKm2MAhCAUFQkKG3nyB6QibAliWAAQlKAAkti2g");
	var mask_1_graphics_209 = new cjs.Graphics().p("EADhAjBQmwkUhun0Qhun2EUmwMAglAU2QkUGvn1BvQiOAfiJAAQlYAAk1jFg");
	var mask_1_graphics_210 = new cjs.Graphics().p("EADRAiyQmpkehjn3Qhjn3EemqMAgGAVkQkeGqn2BjQiBAZh8AAQloAAk8jUg");
	var mask_1_graphics_211 = new cjs.Graphics().p("EADCAiiQmjkohXn4QhXn6EnmjIfmWTQknGin5BYQhzAUhuAAQl4AAlDjkg");
	var mask_1_graphics_212 = new cjs.Graphics().p("EACzAiSQmbkyhMn6QhMn8ExmcIfFXBQkxGcn7BMQhkAPhgAAQmJAAlKj0g");
	var mask_1_graphics_213 = new cjs.Graphics().p("EAClAiBQmUk7hBn8QhAn9E6mVIejXtQk6GVn8BBQhWALhSAAQmZAAlRkFg");
	var mask_1_graphics_214 = new cjs.Graphics().p("EACYAhvQmNlDg1n9Qg1n/FDmOIeBYZQlEGOn9A1QhHAIhEAAQmrAAlWkXg");
	var mask_1_graphics_215 = new cjs.Graphics().p("EACLAhdQmGlMgpn+QgpoAFMmGIddZEQlNGGn/AqQg3AEg1AAQm9ABlckpg");
	var mask_1_graphics_216 = new cjs.Graphics().p("EAB/AhLQl+lVgdn/QgeoBFUl/Ic4ZvQlVF/n/AeQgoACgnAAQnPAAlhk6g");
	var mask_1_graphics_217 = new cjs.Graphics().p("EAB0Ag4Ql2legSn/QgSoBFdl3IcSaYQleF3oAATIgvAAQnjAAlllNg");
	var mask_1_graphics_218 = new cjs.Graphics().p("EABpAglQlulngGoAQgGoBFllvIbrbCQlmFuoBAHIgOAAQn4AAlplgg");
	var mask_1_graphics_219 = new cjs.Graphics().p("EAPGAmFQoBgGlmluQlmlvAGoAQAFoBFtlnIbEbqQlpFhn4AAIgOAAg");
	var mask_1_graphics_220 = new cjs.Graphics().p("EAO0AmFQoAgTlel2Qlel2ARoAQASoBF1leIabcQQlmFOnjAAIguAAg");
	var mask_1_graphics_221 = new cjs.Graphics().p("EAOiAmDQoAgelVl9QlVl/Adn/QAdoBF9lVIZxc2QlhE7nQAAQgmAAgngCg");
	var mask_1_graphics_222 = new cjs.Graphics().p("EAORAmBQn/gplNmGQlMmGApn+QAooAGFlNIZHdbQlcEpm9ABQg2AAg2gFg");
	var mask_1_graphics_223 = new cjs.Graphics().p("EAOAAl/Qn/g2lDmMQlDmOA0n9QA0n/GMlEIYcd/QlXEYmrAAQhEAAhFgHg");
	var mask_1_graphics_224 = new cjs.Graphics().p("EANvAl7Qn9hAk7mVQk6mVBAn8QBAn9GTk7IXwejQlREGmaAAQhSAAhUgLg");
	var mask_1_graphics_225 = new cjs.Graphics().p("EANeAl3Qn7hMkxmbQkxmcBLn7QBLn7GbkyIXDfEQlLD2mJAAQhgAAhjgPg");
	var mask_1_graphics_226 = new cjs.Graphics().p("EANNAlzQn5hYkomiQknmjBXn5QBXn6GhknIWVflQlEDll4AAQhuAAhygTg");
	var mask_1_graphics_227 = new cjs.Graphics().p("EAM9AltQn3hjkemoQkemqBin2QBjn4GokfMAVnAgGQk9DVlpAAQh7AAiAgZg");
	var mask_1_graphics_228 = new cjs.Graphics().p("EAMuAloQn1hvkVmvQkUmwBun0QBun2GukUMAU4AgkQk2DGlZAAQiIAAiNgeg");
	var mask_1_graphics_229 = new cjs.Graphics().p("EAMeAlhQnyh6kLm1QkKm2B5nyQB4nzG2kKMAUIAhCQkuC3lKAAQiVAAibglg");
	var mask_1_graphics_230 = new cjs.Graphics().p("EAMPAlaQnwiFkAm8QkAm8CEnuQCEnwG7kBMATYAhfQklCqk8AAQiiAAiogtg");
	var mask_1_graphics_231 = new cjs.Graphics().p("EAMAAlSQnsiQj3nBQj1nCCPnrQCPntHBj3MASnAh7QkdCckuAAQivAAi0g1g");
	var mask_1_graphics_232 = new cjs.Graphics().p("EALxAlKQnoicjsnGQjsnHCbnoQCZnqHHjsMAR1AiVQkTCPkgAAQi8AAjBg9g");
	var mask_1_graphics_233 = new cjs.Graphics().p("EALjAlBQnlinjinLQjhnNCmnkQClnmHMjiMARDAiuQkKCDkSAAQjJAAjNhGg");
	var mask_1_graphics_234 = new cjs.Graphics().p("EALVAk4QnhiyjXnRQjXnRCxnhQCwniHRjXMAQQAjGQkAB3kFAAQjVAAjZhPg");
	var mask_1_graphics_235 = new cjs.Graphics().p("EALIAkuQndi9jNnVQjMnXC7ncQC8neHVjNMAPdAjeQj2Brj3AAQjiAAjkhZg");
	var mask_1_graphics_236 = new cjs.Graphics().p("EAK7AkjQnZjHjCnaQjBnbDFnYQDHnaHajCMAOpAj0QjrBgjqAAQjwAAjuhkg");
	var mask_1_graphics_237 = new cjs.Graphics().p("EAKuAkYQnUjSi3nfQi2nfDQnTQDRnVHfi3MAN0AkIQjgBWjeAAQj8AAj5hvg");
	var mask_1_graphics_238 = new cjs.Graphics().p("EAKhAkMQnPjdisniQirnjDanPQDcnQHjisMANAAkcQjVBMjQAAQkKAAkEh7g");
	var mask_1_graphics_239 = new cjs.Graphics().p("EAKVAkAQnKjnignmQihnnDlnKQDnnLHmihMAMKAkuQjIBDjEAAQkXAAkOiHg");
	var mask_1_graphics_240 = new cjs.Graphics().p("EAKKAjzQnFjyiWnpQiVnrDvnEQDxnFHqiWMALVAk/Qi9A6i3AAQkkAAkXiUg");
	var mask_1_graphics_241 = new cjs.Graphics().p("EAJ/AjmQm/j8iLntQiKnuD5m+QD7nAHuiLMAKeAlPQiwAxiqAAQkzAAkfigg");
	var mask_1_graphics_242 = new cjs.Graphics().p("EAJ0AjYQm5kGiAnwQh/nxEEm5QEFm6Hxh+MAJoAlcQikAqidAAQlBAAkoiug");
	var mask_1_graphics_243 = new cjs.Graphics().p("EAJpAjJQmzkQh0nyQhzn0ENmzQEPm0H0hzMAIxAlqQiWAjiQAAQlQAAkxi9g");
	var mask_1_graphics_244 = new cjs.Graphics().p("EAJfAi6Qmskahpn1Qhon2EXmsQEZmuH2hoMAH6Al2QiIAdiEAAQleAAk5jMg");
	var mask_1_graphics_245 = new cjs.Graphics().p("EAJWAirQmnkkhdn3Qhcn5EhmmQEimnH4hcMAHDAmBQh6AXh2AAQlvAAk/jbg");
	var mask_1_graphics_246 = new cjs.Graphics().p("EAJMAibQmfkthSn6QhSn6EsmfQEsmhH6hRMAGMAmLQhtAShpAAQl+AAlHjrg");
	var mask_1_graphics_247 = new cjs.Graphics().p("EAJEAiKQmZk2hGn7QhHn9E1mYQE2mZH8hGMAFUAmTQhfANhbAAQmOAAlNj7g");
	var mask_1_graphics_248 = new cjs.Graphics().p("EAI7Ah5QmRlAg7n8Qg7n+E+mRQE/mSH9g6MAEdAmaQhQAJhNAAQmfAAlUkMg");
	var mask_1_graphics_249 = new cjs.Graphics().p("EAI0AhnQmKlIgwn+Qgvn/FHmKQFImLH+guMADlAmgQhBAGg+AAQmyAAlYkeg");
	var mask_1_graphics_250 = new cjs.Graphics().p("EAIsAhVQmClRgkn/QgkoAFQmCQFRmDH/gjMACtAmkQgxAEgwAAQnEAAlekwg");
	var mask_1_graphics_251 = new cjs.Graphics().p("EAIlAhDQl7lbgYn/QgYoAFZl7QFal7IAgYMAB0AmoQgiACghAAQnWAAljlCg");
	var mask_1_graphics_252 = new cjs.Graphics().p("EAIeAgvQlyligMoAQgNoBFhlzQFilyIBgNMAA7AmqIgiABQnqAAlolWg");
	var mask_1_graphics_253 = new cjs.Graphics().p("EAIYAgcQlqlrgBoAQAAoBFplrQFrlqIAgBMAADAmrIgCAAQn/AAlrlpg");
	var mask_1_graphics_254 = new cjs.Graphics().p("EAH4AgIQlilzALoAQALoBFyliQFyliIBALMgA1AmpQoBgKljlyg");
	var mask_1_graphics_255 = new cjs.Graphics().p("AHXf0Qlal7AXoAQAXoAF5laQF7laIAAXMgBtAmoQoAgXlbl5g");
	var mask_1_graphics_256 = new cjs.Graphics().p("AG2ffQlRmCAin/QAjoAGBlRQGDlRH/AiMgCmAmlQn/gilSmCg");
	var mask_1_graphics_257 = new cjs.Graphics().p("AGWfLQlImKAun+QAtn/GJlIQGKlIH/AtMgDeAmhQn+gulJmJg");
	var mask_1_graphics_258 = new cjs.Graphics().p("AF2e3Qk/mSA5n9QA6n+GQk/QGSk/H9A6MgEWAmbQn9g6lAmQg");
	var mask_1_graphics_259 = new cjs.Graphics().p("AFXeiQk2mZBFn7QBFn8GXk2QGZk2H8BFMgFOAmUQn7hFk3mYg");
	var mask_1_graphics_260 = new cjs.Graphics().p("AE4eOQksmgBQn6QBRn6GektQGgktH6BRMgGFAmMQn7hRktmeg");
	var mask_1_graphics_261 = new cjs.Graphics().p("AEad5QkimnBbn3QBcn5GlkjQGmkjH5BcMgG9AmCQn4hckkmlg");
	var mask_1_graphics_262 = new cjs.Graphics().p("AD8dkQkYmtBmn1QBon3GskZQGskZH2BnMgH0Al4Qn1hokbmsg");
	var mask_1_graphics_263 = new cjs.Graphics().p("ADfdQQkOm0BynzQBzn0GykPQGzkQHzByMgIrAltQnzhzkRmyg");
	var mask_1_graphics_264 = new cjs.Graphics().p("ADDc7QkFm6B+nwQB+nxG4kGQG5kFHxB9MgJiAlfQnxh+kGm4g");
	var mask_1_graphics_265 = new cjs.Graphics().p("ACncmQj6m/CIntQCKnvG+j7QG/j8HtCJMgKYAlRQntiKj9m+g");
	var mask_1_graphics_266 = new cjs.Graphics().p("ACMcRQjwnFCUnqQCUnqHEjyQHEjxHrCUMgLOAlBQnriVjynEg");
	var mask_1_graphics_267 = new cjs.Graphics().p("AByb9QjmnLCfnmQCfnoHJjnQHKjmHnCeMgMDAkwQnnifjonJg");
	var mask_1_graphics_268 = new cjs.Graphics().p("ABYboQjbnQCpniQCrnkHOjdQHPjcHkCqMgM5AkeQnkirjdnOg");
	var mask_1_graphics_269 = new cjs.Graphics().p("AA/bTQjRnUC1nfQC2ngHTjSQHUjRHfC0MgNuAkLQnfi2jTnTg");
	var mask_1_graphics_270 = new cjs.Graphics().p("AAma+QjGnZDAnaQDBnbHXjIQHZjHHbDAMgOiAj2QnbjBjJnYg");
	var mask_1_graphics_271 = new cjs.Graphics().p("AAPaqQi7neDKnWQDLnWHci9QHei8HWDKMgPWAjgQnXjLi9ncg");
	var mask_1_graphics_272 = new cjs.Graphics().p("AgHaVQixnhDUnSQDXnSHgixQHhiyHSDVMgQKAjKQnSjWixnhg");
	var mask_1_graphics_273 = new cjs.Graphics().p("AgeaBQimnmDgnMQDgnNHkinQHmimHNDfMgQ9AiyQnNjhinnkg");
	var mask_1_graphics_274 = new cjs.Graphics().p("AgzZsQibnpDqnHQDrnIHoicQHpibHHDqMgRvAiYQnHjricnog");
	var mask_1_graphics_275 = new cjs.Graphics().p("AhIZYQiQntD0nBQD2nDHriQQHtiQHCD0MgShAh+QnCj2iRnrg");
	var mask_1_graphics_276 = new cjs.Graphics().p("AhcZEQiEnwD+m8QEAm9HuiFQHwiFG8D/MgTSAhiQm8kAiGnug");
	var mask_1_graphics_277 = new cjs.Graphics().p("AhvYvQh5nyEIm2QEKm3Hxh6QHzh5G2EIMgUCAhGQm3kKh6nyg");
	var mask_1_graphics_278 = new cjs.Graphics().p("AiBYbQhun1ESmvQEUmxHzhvQH2huGwESMgUyAgoQmwkThvn1g");
	var mask_1_graphics_279 = new cjs.Graphics().p("AiTYIQhin4EcmpQEdmrH2hjQH4hjGqEcMgViAgJQmpkdhkn2g");
	var mask_1_graphics_280 = new cjs.Graphics().p("AijX0QhYn6EmmjQEnmjH4hYQH6hYGjEmI2PfpQmjkmhYn5g");
	var mask_1_graphics_281 = new cjs.Graphics().p("AizXgQhMn7EvmcQEwmdH7hNQH7hMGdEwI2+fIQmbkwhNn7g");
	var mask_1_graphics_282 = new cjs.Graphics().p("AjDXNQhAn9E5mVQE5mWH8hBQH+hBGVE5I3qenQmVk6hCn8g");
	var mask_1_graphics_283 = new cjs.Graphics().p("AjRW5Qg0n+FBmOQFDmOH9g2QH/g1GOFDI4XeDQmNlDg2n+g");
	var mask_1_graphics_284 = new cjs.Graphics().p("AjeWmQgpn/FKmGQFMmHH+gqQIAgqGHFMI5CdfQmGlMgqn/g");
	var mask_1_graphics_285 = new cjs.Graphics().p("AjrWTQgdoAFTl+QFVmAH/geQIAgeF/FUI5sc7Ql+lVgfoAg");
	var mask_1_graphics_286 = new cjs.Graphics().p("Aj3WBQgRoBFcl3QFdl3IAgTQIBgSF3FdI6WcUQl2ldgUoAg");
	var mask_1_graphics_287 = new cjs.Graphics().p("AkCVuQgFoBFklvQFmlvIAgHQIBgHFvFmI6/btQlullgIoBg");
	var mask_1_graphics_288 = new cjs.Graphics().p("AkMVcQAGoBFtlnQFulnIAAFQIBAFFnFtI7nbGQlmltAEoBg");
	var mask_1_graphics_289 = new cjs.Graphics().p("AkVVKQASoBF0leQF2lfIAARQIBAQFfF2I8OadQlel2AQoAg");
	var mask_1_graphics_290 = new cjs.Graphics().p("AkdU4QAdoAF8lWQF/lWH/AcQIAAcFWF+I8zZ0QlVl+AboAg");
	var mask_1_graphics_291 = new cjs.Graphics().p("AkkUnQAooAGElNQGGlNH/AoQH/AnFOGGI9ZZJQlNmFAon/g");
	var mask_1_graphics_292 = new cjs.Graphics().p("AkrUVQA0n+GMlEQGNlEH+AzQH+AzFFGNI98YeQlFmMAzn/g");
	var mask_1_graphics_293 = new cjs.Graphics().p("AkxUEQBAn9GTk6QGVk8H8A/QH9A/E7GUI+fXyQk7mUA+n9g");
	var mask_1_graphics_294 = new cjs.Graphics().p("Ak1T0QBLn8GakxQGckzH6BLQH8BKEyGcI/BXFQkymbBKn7g");
	var mask_1_graphics_295 = new cjs.Graphics().p("Ak5TjQBXn5GhkpQGikoH5BWQH6BWEoGiI/iWYQkpmiBWn6g");
	var mask_1_graphics_296 = new cjs.Graphics().p("Ak8TTQBin3GokfQGpkfH2BhQH4BiEfGpMggCAVpQkfmoBhn4g");
	var mask_1_graphics_297 = new cjs.Graphics().p("Ak+TDQBun1GtkVQGwkVH0BtQH2BtEVGvMgghAU6QkWmvBtn1g");
	var mask_1_graphics_298 = new cjs.Graphics().p("Ak/S0QB5nzG0kLQG1kLHyB4QHzB4ELG2Mgg/AUKQkLm1B4nyg");
	var mask_1_graphics_299 = new cjs.Graphics().p("AlASkQCFnvG6kBQG7kCHvCEQHwCEECG7MghcATaQkCm7CDnwg");
	var mask_1_graphics_300 = new cjs.Graphics().p("Ak/SWQCQntG/j3QHCj3HrCPQHuCPD3HBMgh4ASpQj3nBCOnsg");
	var mask_1_graphics_301 = new cjs.Graphics().p("Ak+SHQCbnpHGjtQHGjtHpCaQHpCaDtHHMgiSAR4QjtnHCZnpg");
	var mask_1_graphics_302 = new cjs.Graphics().p("Ak7R5QCmnmHKjiQHMjjHlClQHmCmDjHLMgisARGQjjnMClnlg");
	var mask_1_graphics_303 = new cjs.Graphics().p("Ak4RrQCxniHQjXQHRjYHhCvQHiCxDYHQMgjEAQTQjYnQCvnig");
	var mask_1_graphics_304 = new cjs.Graphics().p("Ak0RdQC8ndHUjNQHXjOHcC7QHeC7DOHWMgjcAPfQjNnVC6neg");
	var mask_1_graphics_305 = new cjs.Graphics().p("AkvRQQDHnZHZjCQHbjDHYDGQHZDGDDHaMgjxAOsQjDnbDFnZg");
	var mask_1_graphics_306 = new cjs.Graphics().p("AkpRDQDSnUHdi3QHfi4HUDQQHVDRC3HeMgkGAN3Qi3neDPnVg");
	var mask_1_graphics_307 = new cjs.Graphics().p("AkiQ3QDcnPHhitQHjitHPDbQHQDbCtHjMgkZANCQitniDanQg");
	var mask_1_graphics_308 = new cjs.Graphics().p("AkaQrQDnnKHkiiQHniiHKDlQHLDmCiHmMgksAMOQiinmDlnLg");
	var mask_1_graphics_309 = new cjs.Graphics().p("AkRQfQDxnFHoiWQHqiXHFDwQHFDwCXHqMgk9ALXQiXnpDwnGg");
	var mask_1_graphics_310 = new cjs.Graphics().p("AkIQUQD7m/HsiMQHuiLG+D5QHBD7CLHtMglNAKiQiMntD6nAg");
	var mask_1_graphics_311 = new cjs.Graphics().p("Aj+QJQEFm5HviAQHxiBG5EEQG6EFCBHwMglcAJrQiAnwEDm6g");
	var mask_1_graphics_312 = new cjs.Graphics().p("AjyP/QEOm0Hyh1QH0h1GzEOQG0EPB1HzMglpAI1Qh1nzEOm0g");
	var mask_1_graphics_313 = new cjs.Graphics().p("AjmP1QEYmuH1hpQH2hqGtEYQGuEZBpH1Mgl1AH+Qhqn2EYmtg");
	var mask_1_graphics_314 = new cjs.Graphics().p("AjZPrQEhmnH4heQH4heGmEiQGoEiBeH3MgmAAHHQhfn4Eimng");
	var mask_1_graphics_315 = new cjs.Graphics().p("AjMPiQEsmgH5hTQH6hSGgErQGhErBSH6MgmKAGPQhSn6Eqmgg");
	var mask_1_graphics_316 = new cjs.Graphics().p("Ai9PZQE1mZH7hHQH8hHGZE0QGZE1BIH8MgmTAFXQhHn7E0mag");
	var mask_1_graphics_317 = new cjs.Graphics().p("AiuPRQE+mSH9g8QH9g7GSE9QGTE/A7H9MgmZAEfQg8n9E9mSg");
	var mask_1_graphics_318 = new cjs.Graphics().p("AidPJQFHmLH9gwQH/gwGKFHQGMFHAwH/MgmgADnQgwn+FHmLg");
	var mask_1_graphics_319 = new cjs.Graphics().p("AiMPBQFQmDH+gkQIAgkGDFPQGEFQAkIAMgmkACvQgln/FQmEg");
	var mask_1_graphics_320 = new cjs.Graphics().p("Ah6O6QFYl7IAgZQIAgYF7FYQF8FZAZIAMgmoAB3QgYoAFYl8g");
	var mask_1_graphics_321 = new cjs.Graphics().p("AhoO0QFhl0IAgNQIBgNFzFhQF0FiANIAMgmpAA/QgNoAFgl0g");
	var mask_1_graphics_322 = new cjs.Graphics().p("AhUOtQFplrIAgBQIBgBFrFpQFsFqACIAMgmrAAHQgBoBFplsg");
	var mask_1_graphics_323 = new cjs.Graphics().p("Am8bzQALoAFxlkQFxljIAALQIBAKFjFxQFkFygLIBg");
	var mask_1_graphics_324 = new cjs.Graphics().p("Am7bJQAWoAF5lbQF6lbH/AWQIBAWFaF5QFbF7gWIAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(184).to({graphics:mask_1_graphics_184,x:203.2,y:243.7}).wait(1).to({graphics:mask_1_graphics_185,x:203.2,y:243.7}).wait(1).to({graphics:mask_1_graphics_186,x:203.1,y:243.7}).wait(1).to({graphics:mask_1_graphics_187,x:203,y:243.7}).wait(1).to({graphics:mask_1_graphics_188,x:202.9,y:243.7}).wait(1).to({graphics:mask_1_graphics_189,x:202.8,y:243.7}).wait(1).to({graphics:mask_1_graphics_190,x:202.6,y:243.7}).wait(1).to({graphics:mask_1_graphics_191,x:202.4,y:243.8}).wait(1).to({graphics:mask_1_graphics_192,x:202.1,y:243.8}).wait(1).to({graphics:mask_1_graphics_193,x:201.9,y:243.8}).wait(1).to({graphics:mask_1_graphics_194,x:201.6,y:243.8}).wait(1).to({graphics:mask_1_graphics_195,x:201.2,y:243.8}).wait(1).to({graphics:mask_1_graphics_196,x:200.9,y:243.9}).wait(1).to({graphics:mask_1_graphics_197,x:200.5,y:243.9}).wait(1).to({graphics:mask_1_graphics_198,x:200,y:243.9}).wait(1).to({graphics:mask_1_graphics_199,x:199.6,y:243.9}).wait(1).to({graphics:mask_1_graphics_200,x:199.1,y:243.9}).wait(1).to({graphics:mask_1_graphics_201,x:198.6,y:243.9}).wait(1).to({graphics:mask_1_graphics_202,x:198,y:243.9}).wait(1).to({graphics:mask_1_graphics_203,x:197.4,y:243.9}).wait(1).to({graphics:mask_1_graphics_204,x:196.8,y:243.9}).wait(1).to({graphics:mask_1_graphics_205,x:196.2,y:243.9}).wait(1).to({graphics:mask_1_graphics_206,x:195.5,y:243.9}).wait(1).to({graphics:mask_1_graphics_207,x:194.9,y:243.9}).wait(1).to({graphics:mask_1_graphics_208,x:194.1,y:243.8}).wait(1).to({graphics:mask_1_graphics_209,x:193.4,y:243.8}).wait(1).to({graphics:mask_1_graphics_210,x:192.6,y:243.8}).wait(1).to({graphics:mask_1_graphics_211,x:191.8,y:243.8}).wait(1).to({graphics:mask_1_graphics_212,x:191,y:243.8}).wait(1).to({graphics:mask_1_graphics_213,x:190.1,y:243.8}).wait(1).to({graphics:mask_1_graphics_214,x:189.3,y:243.8}).wait(1).to({graphics:mask_1_graphics_215,x:188.4,y:243.7}).wait(1).to({graphics:mask_1_graphics_216,x:187.4,y:243.7}).wait(1).to({graphics:mask_1_graphics_217,x:186.5,y:243.7}).wait(1).to({graphics:mask_1_graphics_218,x:185.5,y:243.7}).wait(1).to({graphics:mask_1_graphics_219,x:184.5,y:243.7}).wait(1).to({graphics:mask_1_graphics_220,x:183.5,y:243.7}).wait(1).to({graphics:mask_1_graphics_221,x:182.4,y:243.7}).wait(1).to({graphics:mask_1_graphics_222,x:181.4,y:243.8}).wait(1).to({graphics:mask_1_graphics_223,x:180.3,y:243.8}).wait(1).to({graphics:mask_1_graphics_224,x:179.2,y:243.8}).wait(1).to({graphics:mask_1_graphics_225,x:178.1,y:243.8}).wait(1).to({graphics:mask_1_graphics_226,x:176.9,y:243.8}).wait(1).to({graphics:mask_1_graphics_227,x:175.8,y:243.8}).wait(1).to({graphics:mask_1_graphics_228,x:174.6,y:243.8}).wait(1).to({graphics:mask_1_graphics_229,x:173.4,y:243.8}).wait(1).to({graphics:mask_1_graphics_230,x:172.2,y:243.9}).wait(1).to({graphics:mask_1_graphics_231,x:171,y:243.9}).wait(1).to({graphics:mask_1_graphics_232,x:169.7,y:243.9}).wait(1).to({graphics:mask_1_graphics_233,x:168.5,y:243.9}).wait(1).to({graphics:mask_1_graphics_234,x:167.2,y:243.9}).wait(1).to({graphics:mask_1_graphics_235,x:165.9,y:243.9}).wait(1).to({graphics:mask_1_graphics_236,x:164.6,y:243.9}).wait(1).to({graphics:mask_1_graphics_237,x:163.3,y:243.9}).wait(1).to({graphics:mask_1_graphics_238,x:162,y:243.9}).wait(1).to({graphics:mask_1_graphics_239,x:160.6,y:243.9}).wait(1).to({graphics:mask_1_graphics_240,x:159.3,y:243.9}).wait(1).to({graphics:mask_1_graphics_241,x:157.9,y:243.8}).wait(1).to({graphics:mask_1_graphics_242,x:156.6,y:243.8}).wait(1).to({graphics:mask_1_graphics_243,x:155.2,y:243.8}).wait(1).to({graphics:mask_1_graphics_244,x:153.8,y:243.8}).wait(1).to({graphics:mask_1_graphics_245,x:152.4,y:243.8}).wait(1).to({graphics:mask_1_graphics_246,x:151.1,y:243.8}).wait(1).to({graphics:mask_1_graphics_247,x:149.7,y:243.7}).wait(1).to({graphics:mask_1_graphics_248,x:148.3,y:243.7}).wait(1).to({graphics:mask_1_graphics_249,x:146.9,y:243.7}).wait(1).to({graphics:mask_1_graphics_250,x:145.5,y:243.7}).wait(1).to({graphics:mask_1_graphics_251,x:144.1,y:243.7}).wait(1).to({graphics:mask_1_graphics_252,x:142.6,y:243.7}).wait(1).to({graphics:mask_1_graphics_253,x:141.2,y:243.7}).wait(1).to({graphics:mask_1_graphics_254,x:142.5,y:243.6}).wait(1).to({graphics:mask_1_graphics_255,x:143.9,y:243.6}).wait(1).to({graphics:mask_1_graphics_256,x:145.3,y:243.5}).wait(1).to({graphics:mask_1_graphics_257,x:146.7,y:243.4}).wait(1).to({graphics:mask_1_graphics_258,x:148.1,y:243.3}).wait(1).to({graphics:mask_1_graphics_259,x:149.5,y:243.1}).wait(1).to({graphics:mask_1_graphics_260,x:150.9,y:242.9}).wait(1).to({graphics:mask_1_graphics_261,x:152.3,y:242.6}).wait(1).to({graphics:mask_1_graphics_262,x:153.6,y:242.4}).wait(1).to({graphics:mask_1_graphics_263,x:155,y:242.1}).wait(1).to({graphics:mask_1_graphics_264,x:156.4,y:241.7}).wait(1).to({graphics:mask_1_graphics_265,x:157.7,y:241.4}).wait(1).to({graphics:mask_1_graphics_266,x:159.1,y:241}).wait(1).to({graphics:mask_1_graphics_267,x:160.4,y:240.5}).wait(1).to({graphics:mask_1_graphics_268,x:161.8,y:240.1}).wait(1).to({graphics:mask_1_graphics_269,x:163.1,y:239.6}).wait(1).to({graphics:mask_1_graphics_270,x:164.4,y:239.1}).wait(1).to({graphics:mask_1_graphics_271,x:165.7,y:238.5}).wait(1).to({graphics:mask_1_graphics_272,x:167,y:238}).wait(1).to({graphics:mask_1_graphics_273,x:168.3,y:237.4}).wait(1).to({graphics:mask_1_graphics_274,x:169.5,y:236.7}).wait(1).to({graphics:mask_1_graphics_275,x:170.8,y:236.1}).wait(1).to({graphics:mask_1_graphics_276,x:172,y:235.4}).wait(1).to({graphics:mask_1_graphics_277,x:173.2,y:234.7}).wait(1).to({graphics:mask_1_graphics_278,x:174.4,y:233.9}).wait(1).to({graphics:mask_1_graphics_279,x:175.6,y:233.1}).wait(1).to({graphics:mask_1_graphics_280,x:176.7,y:232.3}).wait(1).to({graphics:mask_1_graphics_281,x:177.9,y:231.5}).wait(1).to({graphics:mask_1_graphics_282,x:179,y:230.7}).wait(1).to({graphics:mask_1_graphics_283,x:180.1,y:229.8}).wait(1).to({graphics:mask_1_graphics_284,x:181.2,y:228.9}).wait(1).to({graphics:mask_1_graphics_285,x:182.2,y:228}).wait(1).to({graphics:mask_1_graphics_286,x:183.3,y:227}).wait(1).to({graphics:mask_1_graphics_287,x:184.3,y:226}).wait(1).to({graphics:mask_1_graphics_288,x:185.3,y:225}).wait(1).to({graphics:mask_1_graphics_289,x:186.3,y:224}).wait(1).to({graphics:mask_1_graphics_290,x:187.2,y:223}).wait(1).to({graphics:mask_1_graphics_291,x:188.2,y:221.9}).wait(1).to({graphics:mask_1_graphics_292,x:189.1,y:220.8}).wait(1).to({graphics:mask_1_graphics_293,x:189.9,y:219.7}).wait(1).to({graphics:mask_1_graphics_294,x:190.8,y:218.6}).wait(1).to({graphics:mask_1_graphics_295,x:191.6,y:217.5}).wait(1).to({graphics:mask_1_graphics_296,x:192.4,y:216.3}).wait(1).to({graphics:mask_1_graphics_297,x:193.2,y:215.1}).wait(1).to({graphics:mask_1_graphics_298,x:193.9,y:213.9}).wait(1).to({graphics:mask_1_graphics_299,x:194.7,y:212.7}).wait(1).to({graphics:mask_1_graphics_300,x:195.4,y:211.5}).wait(1).to({graphics:mask_1_graphics_301,x:196,y:210.3}).wait(1).to({graphics:mask_1_graphics_302,x:196.7,y:209}).wait(1).to({graphics:mask_1_graphics_303,x:197.3,y:207.7}).wait(1).to({graphics:mask_1_graphics_304,x:197.9,y:206.5}).wait(1).to({graphics:mask_1_graphics_305,x:198.4,y:205.2}).wait(1).to({graphics:mask_1_graphics_306,x:198.9,y:203.8}).wait(1).to({graphics:mask_1_graphics_307,x:199.4,y:202.5}).wait(1).to({graphics:mask_1_graphics_308,x:199.9,y:201.2}).wait(1).to({graphics:mask_1_graphics_309,x:200.3,y:199.8}).wait(1).to({graphics:mask_1_graphics_310,x:200.7,y:198.5}).wait(1).to({graphics:mask_1_graphics_311,x:201.1,y:197.1}).wait(1).to({graphics:mask_1_graphics_312,x:201.4,y:195.8}).wait(1).to({graphics:mask_1_graphics_313,x:201.7,y:194.4}).wait(1).to({graphics:mask_1_graphics_314,x:202,y:193}).wait(1).to({graphics:mask_1_graphics_315,x:202.2,y:191.6}).wait(1).to({graphics:mask_1_graphics_316,x:202.5,y:190.2}).wait(1).to({graphics:mask_1_graphics_317,x:202.6,y:188.8}).wait(1).to({graphics:mask_1_graphics_318,x:202.8,y:187.4}).wait(1).to({graphics:mask_1_graphics_319,x:202.9,y:186}).wait(1).to({graphics:mask_1_graphics_320,x:203,y:184.6}).wait(1).to({graphics:mask_1_graphics_321,x:203,y:183.2}).wait(1).to({graphics:mask_1_graphics_322,x:203.1,y:181.8}).wait(1).to({graphics:mask_1_graphics_323,x:203.1,y:182.9}).wait(1).to({graphics:mask_1_graphics_324,x:203,y:184.3}).wait(215));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("ArhGGQABhAAKg8QAaijBYiIQAqhBA5g7QDgjoE7AAQE9AADgDoQBzB4A4CP");
	this.shape_4.setTransform(272.7,325.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(25,1,1).p("Ar7GGQABhAAJg8QAmjxCvi2QDgjoE8AAQE8AADgDoQDZDhAHE8");
	this.shape_5.setTransform(275.4,325.4);

	var maskedShapeInstanceList = [this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4}]},184).to({state:[{t:this.shape_5}]},17).wait(338));

	// Layer 5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(25,1,1).p("AAAgJIAAAT");
	this.shape_6.setTransform(199,107);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(25,1,1).p("AAAAUIAAgn");
	this.shape_7.setTransform(199,108.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(25,1,1).p("AAAAeIAAg7");
	this.shape_8.setTransform(199,109.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(25,1,1).p("AAAApIAAhR");
	this.shape_9.setTransform(199,110.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(25,1,1).p("AAAAzIAAhl");
	this.shape_10.setTransform(199,111.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(25,1,1).p("AAAA9IAAh5");
	this.shape_11.setTransform(199,112.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(25,1,1).p("AAABHIAAiN");
	this.shape_12.setTransform(199,113.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(25,1,1).p("AAABRIAAii");
	this.shape_13.setTransform(199,114.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(25,1,1).p("AAABbIAAi2");
	this.shape_14.setTransform(199,115.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(25,1,1).p("AAABmIAAjL");
	this.shape_15.setTransform(199,116.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(25,1,1).p("AAABwIAAjf");
	this.shape_16.setTransform(199,117.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(25,1,1).p("AAAB6IAAjz");
	this.shape_17.setTransform(199,118.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(25,1,1).p("AAACEIAAkH");
	this.shape_18.setTransform(199,119.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(25,1,1).p("AAACPIAAkd");
	this.shape_19.setTransform(199,120.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(25,1,1).p("AAACZIAAkx");
	this.shape_20.setTransform(199,121.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(25,1,1).p("AAACjIAAlF");
	this.shape_21.setTransform(199,122.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(25,1,1).p("AAACtIAAlZ");
	this.shape_22.setTransform(199,123.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(25,1,1).p("AAAC3IAAlt");
	this.shape_23.setTransform(199,124.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(25,1,1).p("AAADBIAAmB");
	this.shape_24.setTransform(199,125.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(25,1,1).p("AAADLIAAmV");
	this.shape_25.setTransform(199,126.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(25,1,1).p("AAADVIAAmp");
	this.shape_26.setTransform(199,127.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(25,1,1).p("AAADgIAAm/");
	this.shape_27.setTransform(198.9,128.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(25,1,1).p("AAADqIAAnT");
	this.shape_28.setTransform(198.9,129.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(25,1,1).p("AAAD0IAAnn");
	this.shape_29.setTransform(198.9,130.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(25,1,1).p("AAAD+IAAn7");
	this.shape_30.setTransform(198.9,131.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(25,1,1).p("AAAEJIAAoQ");
	this.shape_31.setTransform(198.9,132.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(25,1,1).p("AAAETIAAol");
	this.shape_32.setTransform(198.9,133.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(25,1,1).p("AAAEdIAAo5");
	this.shape_33.setTransform(198.9,134.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(25,1,1).p("AAAEnIAApN");
	this.shape_34.setTransform(198.9,135.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(25,1,1).p("AAAExIAAph");
	this.shape_35.setTransform(198.9,136.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(25,1,1).p("AAAE7IAAp1");
	this.shape_36.setTransform(198.9,137.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(25,1,1).p("AAAFFIAAqK");
	this.shape_37.setTransform(198.9,138.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(25,1,1).p("AAAFQIAAqf");
	this.shape_38.setTransform(198.9,139.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(25,1,1).p("AAAFaIAAqz");
	this.shape_39.setTransform(198.9,140.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(25,1,1).p("AAAFkIAArH");
	this.shape_40.setTransform(198.9,141.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(25,1,1).p("AAAFuIAArb");
	this.shape_41.setTransform(198.9,142.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(25,1,1).p("AAAF4IAArv");
	this.shape_42.setTransform(198.9,143.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(25,1,1).p("AAAGDIAAsF");
	this.shape_43.setTransform(198.9,144.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(25,1,1).p("AAAGNIAAsZ");
	this.shape_44.setTransform(198.9,145.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(25,1,1).p("AAAGXIAAst");
	this.shape_45.setTransform(198.9,146.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(25,1,1).p("AAAGhIAAtB");
	this.shape_46.setTransform(198.9,147.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(25,1,1).p("AAAGrIAAtV");
	this.shape_47.setTransform(198.9,148.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(25,1,1).p("AAAG1IAAtp");
	this.shape_48.setTransform(198.9,149.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(25,1,1).p("AAAHAIAAt/");
	this.shape_49.setTransform(198.9,150.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(25,1,1).p("AAAHKIAAuT");
	this.shape_50.setTransform(198.9,151.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(25,1,1).p("AAAHUIAAun");
	this.shape_51.setTransform(198.9,152.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(25,1,1).p("AAAHeIAAu7");
	this.shape_52.setTransform(198.9,153.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(25,1,1).p("AAAHoIAAvP");
	this.shape_53.setTransform(198.9,154.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(25,1,1).p("AAAHyIAAvj");
	this.shape_54.setTransform(198.9,155.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(25,1,1).p("AAAH8IAAv3");
	this.shape_55.setTransform(198.9,156.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(25,1,1).p("AAAIHIAAwN");
	this.shape_56.setTransform(198.9,157.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(25,1,1).p("AAAIRIAAwh");
	this.shape_57.setTransform(198.9,158.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(25,1,1).p("AAAIbIAAw1");
	this.shape_58.setTransform(198.9,159.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(25,1,1).p("AAAIlIAAxJ");
	this.shape_59.setTransform(198.9,160.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(25,1,1).p("AAAIvIAAxd");
	this.shape_60.setTransform(198.9,161.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(25,1,1).p("AAAI6IAAxy");
	this.shape_61.setTransform(198.9,163);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(25,1,1).p("AAAJEIAAyH");
	this.shape_62.setTransform(198.9,164);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(25,1,1).p("AAAJOIAAyb");
	this.shape_63.setTransform(198.9,165);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(25,1,1).p("AAAJYIAAyv");
	this.shape_64.setTransform(198.9,166);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(25,1,1).p("AAAJiIAAzD");
	this.shape_65.setTransform(198.9,167);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(25,1,1).p("AAAJsIAAzX");
	this.shape_66.setTransform(198.9,168);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(25,1,1).p("AAAJ2IAAzs");
	this.shape_67.setTransform(198.9,169.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(25,1,1).p("AAAKBIAB0B");
	this.shape_68.setTransform(198.9,170.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(25,1,1).p("AAAKLIAB0V");
	this.shape_69.setTransform(198.9,171.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(25,1,1).p("AAAKVIAB0p");
	this.shape_70.setTransform(198.9,172.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(25,1,1).p("AAAKfIAB09");
	this.shape_71.setTransform(198.9,173.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(25,1,1).p("AAAKpIAB1R");
	this.shape_72.setTransform(198.9,174.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(25,1,1).p("AAAK0IAB1n");
	this.shape_73.setTransform(198.9,175.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(25,1,1).p("AAAK+IAB17");
	this.shape_74.setTransform(198.9,176.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(25,1,1).p("AAALIIAB2P");
	this.shape_75.setTransform(198.9,177.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(25,1,1).p("AAALSIAB2j");
	this.shape_76.setTransform(198.9,178.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(25,1,1).p("AAALcIAB23");
	this.shape_77.setTransform(198.9,179.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(25,1,1).p("AAALmIAB3L");
	this.shape_78.setTransform(198.9,180.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(25,1,1).p("AAALxIAB3h");
	this.shape_79.setTransform(198.9,181.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(25,1,1).p("AAAL7IAB31");
	this.shape_80.setTransform(198.9,182.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(25,1,1).p("AAAMFIAB4J");
	this.shape_81.setTransform(198.9,183.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(25,1,1).p("AAAMPIAB4d");
	this.shape_82.setTransform(198.9,184.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(25,1,1).p("AAAMZIAB4x");
	this.shape_83.setTransform(198.9,185.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(25,1,1).p("AAAMkIAB5H");
	this.shape_84.setTransform(198.9,186.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(25,1,1).p("AAAMuIAB5b");
	this.shape_85.setTransform(198.9,187.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(25,1,1).p("AAAM4IAB5v");
	this.shape_86.setTransform(198.9,188.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(25,1,1).p("AAANCIAB6D");
	this.shape_87.setTransform(198.9,189.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(25,1,1).p("AAANMIAB6X");
	this.shape_88.setTransform(198.9,190.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(25,1,1).p("AAANWIAB6r");
	this.shape_89.setTransform(198.9,191.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(25,1,1).p("AAANgIAB6/");
	this.shape_90.setTransform(198.9,192.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(25,1,1).p("AAANqIAB7T");
	this.shape_91.setTransform(198.9,193.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(25,1,1).p("AAAN1IAB7p");
	this.shape_92.setTransform(198.9,194.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(25,1,1).p("AAAN/IAB79");
	this.shape_93.setTransform(198.9,195.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(25,1,1).p("AAAOJIAB8R");
	this.shape_94.setTransform(198.9,196.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(25,1,1).p("AAAOTIAB8l");
	this.shape_95.setTransform(198.9,197.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(25,1,1).p("AAAOeIAB87");
	this.shape_96.setTransform(198.9,198.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(25,1,1).p("AAAOoIAB9P");
	this.shape_97.setTransform(198.9,199.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(25,1,1).p("AAAOyIAB9j");
	this.shape_98.setTransform(198.9,200.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(25,1,1).p("AAAO8IAB93");
	this.shape_99.setTransform(198.9,201.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(25,1,1).p("AAAPGIAB+L");
	this.shape_100.setTransform(198.9,202.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(25,1,1).p("AAAPQIAB+f");
	this.shape_101.setTransform(198.9,203.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(25,1,1).p("AAAPbIAB+1");
	this.shape_102.setTransform(198.9,204.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(25,1,1).p("AAAPlIAB/J");
	this.shape_103.setTransform(198.9,205.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(25,1,1).p("AAAPvIAB/d");
	this.shape_104.setTransform(198.9,206.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(25,1,1).p("AAAP5IAB/x");
	this.shape_105.setTransform(198.9,207.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(25,1,1).p("AAAQDMAABggF");
	this.shape_106.setTransform(198.9,208.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(25,1,1).p("AAAQNMAABggZ");
	this.shape_107.setTransform(198.9,209.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(25,1,1).p("AAAQYMAABggv");
	this.shape_108.setTransform(198.9,210.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(25,1,1).p("AAAQiMAABghD");
	this.shape_109.setTransform(198.9,211.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(25,1,1).p("AAAQsMAABghX");
	this.shape_110.setTransform(198.9,212.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(25,1,1).p("AAAQ2MAABghr");
	this.shape_111.setTransform(198.9,213.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(25,1,1).p("AAARAMAABgh/");
	this.shape_112.setTransform(198.9,214.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(25,1,1).p("AAARKMAABgiT");
	this.shape_113.setTransform(198.9,215.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(25,1,1).p("AAARVMAABgip");
	this.shape_114.setTransform(198.9,216.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(25,1,1).p("AAARfMAABgi9");
	this.shape_115.setTransform(198.9,217.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(25,1,1).p("AAARpMAABgjR");
	this.shape_116.setTransform(198.9,218.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(25,1,1).p("AAARzMAABgjl");
	this.shape_117.setTransform(198.9,219.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(25,1,1).p("AAAR9MAABgj5");
	this.shape_118.setTransform(198.9,220.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(25,1,1).p("AAASHMAABgkN");
	this.shape_119.setTransform(198.9,221.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(25,1,1).p("AAASSMAABgkj");
	this.shape_120.setTransform(198.9,223);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(25,1,1).p("AAAScMAABgk3");
	this.shape_121.setTransform(198.9,224);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(25,1,1).p("AAASmMAABglL");
	this.shape_122.setTransform(198.9,225);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(25,1,1).p("AAASwMAABglf");
	this.shape_123.setTransform(198.9,226);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(25,1,1).p("AAAS6MAABglz");
	this.shape_124.setTransform(198.9,227);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(25,1,1).p("AAATEMAABgmH");
	this.shape_125.setTransform(198.9,228);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(25,1,1).p("AAATPMAABgmd");
	this.shape_126.setTransform(198.9,229.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(25,1,1).p("AAATZMAABgmx");
	this.shape_127.setTransform(198.9,230.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(25,1,1).p("AAATjMAABgnF");
	this.shape_128.setTransform(198.9,231.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(25,1,1).p("AAATtMAABgnZ");
	this.shape_129.setTransform(198.9,232.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(25,1,1).p("AAAT3MAABgnt");
	this.shape_130.setTransform(198.9,233.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(25,1,1).p("AAAUBMAABgoB");
	this.shape_131.setTransform(198.9,234.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(25,1,1).p("AAAUMMAABgoX");
	this.shape_132.setTransform(198.9,235.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(25,1,1).p("AAAUWMAABgor");
	this.shape_133.setTransform(198.9,236.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(25,1,1).p("AAAUgMAABgo/");
	this.shape_134.setTransform(198.9,237.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(25,1,1).p("AAAUqMAABgpT");
	this.shape_135.setTransform(198.9,238.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(25,1,1).p("AAAU0MAABgpn");
	this.shape_136.setTransform(198.9,239.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(25,1,1).p("AAAU+MAABgp7");
	this.shape_137.setTransform(198.9,240.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(25,1,1).p("AAAVJMAABgqR");
	this.shape_138.setTransform(198.9,241.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(25,1,1).p("AAAVTMAABgql");
	this.shape_139.setTransform(198.9,242.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(25,1,1).p("AAAVdMAABgq5");
	this.shape_140.setTransform(198.9,243.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(25,1,1).p("AAAVnMAABgrN");
	this.shape_141.setTransform(198.9,244.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(25,1,1).p("AAAVxMAABgrh");
	this.shape_142.setTransform(198.9,245.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(25,1,1).p("AAAV7MAABgr1");
	this.shape_143.setTransform(198.9,246.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(25,1,1).p("AAAWGMAABgsL");
	this.shape_144.setTransform(198.9,247.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(25,1,1).p("AAAWQMAABgsf");
	this.shape_145.setTransform(198.9,248.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(25,1,1).p("AAAWaMAABgsz");
	this.shape_146.setTransform(198.9,249.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(25,1,1).p("AAAWkMAABgtH");
	this.shape_147.setTransform(198.9,250.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(25,1,1).p("AAAWuMAABgtb");
	this.shape_148.setTransform(198.9,251.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(25,1,1).p("AAAW4MAABgtv");
	this.shape_149.setTransform(198.9,252.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(25,1,1).p("AAAXDMAABguF");
	this.shape_150.setTransform(198.9,253.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").ss(25,1,1).p("AAAXNMAABguZ");
	this.shape_151.setTransform(198.9,254.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(25,1,1).p("AAAXXMAABgut");
	this.shape_152.setTransform(198.9,255.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#000000").ss(25,1,1).p("AAAXhMAABgvB");
	this.shape_153.setTransform(198.9,256.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(25,1,1).p("AAAXrMAABgvV");
	this.shape_154.setTransform(198.9,257.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#000000").ss(25,1,1).p("AAAX1MAABgvp");
	this.shape_155.setTransform(198.9,258.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(25,1,1).p("AAAYAMAABgv/");
	this.shape_156.setTransform(198.9,259.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#000000").ss(25,1,1).p("AAAYKMAABgwT");
	this.shape_157.setTransform(198.9,260.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(25,1,1).p("AAAYUMAABgwn");
	this.shape_158.setTransform(198.9,261.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#000000").ss(25,1,1).p("AAAYeMAABgw7");
	this.shape_159.setTransform(198.9,262.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(25,1,1).p("AAAYoMAABgxP");
	this.shape_160.setTransform(198.9,263.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#000000").ss(25,1,1).p("AAAYyMAABgxj");
	this.shape_161.setTransform(198.9,264.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(25,1,1).p("AAAY9MAABgx4");
	this.shape_162.setTransform(198.9,265.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#000000").ss(25,1,1).p("AAAZHMAABgyN");
	this.shape_163.setTransform(198.9,266.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(25,1,1).p("AAAZRMAABgyh");
	this.shape_164.setTransform(198.9,267.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").ss(25,1,1).p("AAAZbMAABgy1");
	this.shape_165.setTransform(198.9,268.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(25,1,1).p("AAAZlMAABgzJ");
	this.shape_166.setTransform(198.9,269.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").ss(25,1,1).p("AAAZvMAABgzd");
	this.shape_167.setTransform(198.9,270.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(25,1,1).p("AAAZ6MAABgzz");
	this.shape_168.setTransform(198.9,271.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").ss(25,1,1).p("AAAaEMAABg0H");
	this.shape_169.setTransform(198.9,272.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(25,1,1).p("AAAaOMAABg0b");
	this.shape_170.setTransform(198.9,273.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").ss(25,1,1).p("AAB6XMgABA0v");
	this.shape_171.setTransform(198.9,274.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6}]},9).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).wait(365));

	// Base
	this.instance_4 = new lib.Symbol1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,275);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(539));

	// Background
	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#F59E9E").ss(3,1,1).p("AMvQ5I5dAAMAAAghxIZdAAg");
	this.shape_172.setTransform(275,275,3.373,2.543);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_173.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_173},{t:this.shape_172}]}).wait(539));

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