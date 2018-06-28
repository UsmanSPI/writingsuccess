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
	this.shape.graphics.f("#FFFFFF").s().p("AqMY+QkRkiAAmTQAAmRETkVQERkTGGAAQFLABD7DCIAA9FQAAg7Arg5QAtg5BDABQCwgBAACuMAAAA1cQAACmikAIIgRAAQiWAAAAifIAAgmQkDDLlIAAQmDAAkRkhgAmlHcQiyCzAAEEQAAEJC0C7QC1C5D9AAQGmgBCgmiIgCm9QiQmEm0AAQkBAAizCwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.6,-188.7,185.2,377.5);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0,guide:{path:[53.1,2.9,50.4,-4.5,49.8,-6.5,48.5,-10.4,46.4,-14.3,38.1,-28.9,21.4,-34.5,4.7,-40,-10.7,-33,-26.1,-26,-31.2,-10.7,-32.6,-6.5,-33,-2.3]}},119).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ApFKwQnMjjilnkMAkngMbQClHljiHLQjkHMnlCkQjMBFjHAAQkTAAkKiDg");
	var mask_graphics_1 = new cjs.Graphics().p("AowLKQnRjZiwnhMAkUgNQQCwHijYHQQjZHQnhCwQjYBPjUAAQkFAAkAh3g");
	var mask_graphics_2 = new cjs.Graphics().p("AobLiQnXjNi6neMAkAgOEQC7HdjNHVQjPHWndC6QjjBZjhAAQj4AAj1hsg");
	var mask_graphics_3 = new cjs.Graphics().p("AoHL7QnbjEjFnZMAjrgO4QDGHZjCHZQjEHanZDGQjuBjjuAAQjrAAjrhgg");
	var mask_graphics_4 = new cjs.Graphics().p("AnyMSQnfi4jQnVMAjVgPsQDQHUi4HeQi5HenUDQQj5Bvj6AAQjeAAjghWg");
	var mask_graphics_5 = new cjs.Graphics().p("AneMpQnjiujanPMAi9gQgQDbHQitHhQiuHjnPDaQkDB7kIAAQjRAAjVhMg");
	var mask_graphics_6 = new cjs.Graphics().p("AnJM/QnnijjlnKMAilgRSQDlHKihHlQikHnnJDlQkOCGkVAAQjEAAjJhCg");
	var mask_graphics_7 = new cjs.Graphics().p("Am0NUQnriXjwnFMAiLgSFQDwHFiWHpQiYHqnFDwQkWCTkjAAQi4AAi8g6g");
	var mask_graphics_8 = new cjs.Graphics().p("AmgNoQnuiMj6m/MAhwgS2QD6G/iLHtQiNHtm/D6QkfCgkxAAQirAAiwgyg");
	var mask_graphics_9 = new cjs.Graphics().p("AmMN8QnxiBkEm5MAhUgTnQEEG5h/HwQiCHwm5EEQkoCuk/AAQieAAikgqg");
	var mask_graphics_10 = new cjs.Graphics().p("Al4OPQnzh1kOm0MAg3gUXQEOGzh1H0Qh2HymzEOQkwC8lOAAQiRAAiXgjg");
	var mask_graphics_11 = new cjs.Graphics().p("AljOhQn3hqkYmtMAgZgVHQEYGthpH2QhrH1mtEXQk4DMldAAQiDAAiJgdg");
	var mask_graphics_12 = new cjs.Graphics().p("AlPOyQn5hekimnIf612QEhGnhdH4QhgH3mmEiQlADalsABQh2AAh7gYg");
	var mask_graphics_13 = new cjs.Graphics().p("Ak8PDQn6hTkrmgIfZ2kQErGghSH6QhUH5mgErQlGDrl8AAQhpAAhugSg");
	var mask_graphics_14 = new cjs.Graphics().p("AkoPTQn8hIk1mZIe43RQE0GZhGH8QhJH7mYE0QlND7mNAAQhbAAhfgNg");
	var mask_graphics_15 = new cjs.Graphics().p("AkUPiQn+g8k+mSIeV3+QE+GSg7H9Qg9H9mSE9QlTEMmdAAQhNAAhQgJg");
	var mask_graphics_16 = new cjs.Graphics().p("AkBPwQn/gwlHmLIdy4qQFGGLgvH+QgxH+mKFGQlZEemvAAQg/AAhBgGg");
	var mask_graphics_17 = new cjs.Graphics().p("AjuP9QoAgklQmEIdN5UQFQGDgkH/QglH/mDFPQleEvnBAAQgwAAgygDg");
	var mask_graphics_18 = new cjs.Graphics().p("AjbQJQoBgYlYl8Icn5/QFZF8gYIAQgaH/l7FYQliFCnUAAQgiAAgigCg");
	var mask_graphics_19 = new cjs.Graphics().p("AjJQVQoBgNlhl0IcC6oQFhFzgNIBQgOIAlzFgQlnFVnnAAIglAAg");
	var mask_graphics_20 = new cjs.Graphics().p("Ai2QfQoBgBlqlrIba7RQFqFrgBIBQgDIAlrFpQlqFon8AAIgEAAg");
	var mask_graphics_21 = new cjs.Graphics().p("AwXLQIay74QFyFjALIAQAJIAljFyQljFyn/AKIgdAAQnvAAlnlZg");
	var mask_graphics_22 = new cjs.Graphics().p("AwNLtIaJ8fQF6FbAWIAQAVH/laF6QlbF6n+AWIg9ABQnbAAljlGg");
	var mask_graphics_23 = new cjs.Graphics().p("AwCMJIZf9EQGBFRAiIAQAhH/lSGBQlSGCn+AhQguADgtAAQnIAAlekzg");
	var mask_graphics_24 = new cjs.Graphics().p("Av4MlIY09qQGJFJAuH/QAtH+lJGJQlJGJn9AtQg+AGg8AAQm1AAlakhg");
	var mask_graphics_25 = new cjs.Graphics().p("AvtM/IYI+NQGRFAA5H+QA4H9k/GQQlAGQn8A5QhNAJhLAAQmjAAlUkQg");
	var mask_graphics_26 = new cjs.Graphics().p("AviNZIXc+wQGYE3BFH8QBDH8k2GXQk3GYn7BEQhcANhYAAQmSAAlOj/g");
	var mask_graphics_27 = new cjs.Graphics().p("AvXNyIWv/RQGeEtBRH6QBPH6ktGeQktGfn5BQQhrARhmAAQmBAAlIjug");
	var mask_graphics_28 = new cjs.Graphics().p("AvLOKIWA/xQGmEjBcH5QBaH4kjGkQkkGmn3BcQh5AVh0AAQlxAAlAjeg");
	var mask_graphics_29 = new cjs.Graphics().p("AvAOiMAVSggSQGsEbBoH2QBmH1kaGsQkbGsn0BnQiHAciBAAQliAAk5jPg");
	var mask_graphics_30 = new cjs.Graphics().p("Au0O5MAUiggwQGyEQB0H0QBxHzkQGyQkRGynyByQiUAiiOAAQlTAAkxi/g");
	var mask_graphics_31 = new cjs.Graphics().p("AuoPPMATyghOQG4EHB/HwQB9HxkGG4QkHG4nwB+QihApibAAQlEAAkpixg");
	var mask_graphics_32 = new cjs.Graphics().p("AucPkMATBghqQG/D8CJHuQCIHuj8G9Qj8G/ntCJQiuAwioAAQk1AAkhijg");
	var mask_graphics_33 = new cjs.Graphics().p("AuQP4MASQgiFQHEDyCVHrQCTHqjxHDQjzHEnqCVQi6A4i1AAQknAAkYiWg");
	var mask_graphics_34 = new cjs.Graphics().p("AuDQLMARegifQHJDoCgHnQCfHnjoHJQjoHJnmCfQjGBCjCAAQkaAAkOiKg");
	var mask_graphics_35 = new cjs.Graphics().p("At3QeMAQsgi4QHODdCrHkQCqHjjdHOQjeHOniCrQjSBKjPAAQkMAAkFh9g");
	var mask_graphics_36 = new cjs.Graphics().p("AtqQwMAP4gjQQHUDTC2HfQC0HgjSHSQjTHTnfC2QjdBUjcAAQj+AAj7hxg");
	var mask_graphics_37 = new cjs.Graphics().p("AtdRBMAPFgjnQHXDIDBHbQDAHcjIHXQjIHYnaDAQjpBfjoAAQjyAAjwhmg");
	var mask_graphics_38 = new cjs.Graphics().p("AtQRRMAOQgj8QHdC9DMHXQDKHXi9HbQi9HdnWDLQj0Bpj1AAQjlAAjlhbg");
	var mask_graphics_39 = new cjs.Graphics().p("AtDRgMANcgkQQHgCyDXHSQDVHTiyHfQizHhnRDVQj9B1kDAAQjYAAjahRg");
	var mask_graphics_40 = new cjs.Graphics().p("As2RuMAMogkjQHkCoDhHMQDfHOinHjQinHlnNDgQkHCBkQAAQjLAAjPhIg");
	var mask_graphics_41 = new cjs.Graphics().p("AsoR8MALygk1QHnCcDsHIQDqHIicHnQidHonHDrQkRCNkeAAQi9AAjDg+g");
	var mask_graphics_42 = new cjs.Graphics().p("AsbSIMAK9glFQHqCRD2HCQD0HDiQHqQiSHsnBD1QkbCakrAAQixAAi3g2g");
	var mask_graphics_43 = new cjs.Graphics().p("AsNSUMAKGglVQHuCGEAG8QD+G+iFHtQiGHvm8D/QkjCok6AAQikAAiqgug");
	var mask_graphics_44 = new cjs.Graphics().p("Ar/SfMAJPgljQHxB6EKG3QEJG3h7HwQh6Hym2EJQksC2lIAAQiXAAidgmg");
	var mask_graphics_45 = new cjs.Graphics().p("ArxSoMAIYglvQH0BvEUGwQESGxhvHzQhvH1mwETQkzDElXAAQiKAAiQggg");
	var mask_graphics_46 = new cjs.Graphics().p("ArjSxMAHhgl7QH2BkEeGpQEcGrhkH2QhjH3mqEcQk7DUlmAAQh9AAiCgag");
	var mask_graphics_47 = new cjs.Graphics().p("ArVS5MAGqgmFQH4BYEnGjQEmGkhYH4QhYH5mjEmQlDDjl1AAQhwAAh0gUg");
	var mask_graphics_48 = new cjs.Graphics().p("ArHTAMAFygmOQH6BMExGcQEvGehMH5QhNH7mcEwQlJDzmGAAQhiAAhmgPg");
	var mask_graphics_49 = new cjs.Graphics().p("Aq5TGMAE6gmWQH8BBE6GVQE5GXhBH6QhBH9mVE5QlQEEmWAAQhVAAhXgLg");
	var mask_graphics_50 = new cjs.Graphics().p("AqrTLMAEDgmdQH8A2FEGOQFCGPg2H8Qg1H+mOFDQlVEVmoAAQhGAAhJgIg");
	var mask_graphics_51 = new cjs.Graphics().p("AqXTPMADKgmiQH+AqFMGGQFLGIgqH+QgqH/mGFLQlbEnm5AAQg4AAg5gFg");
	var mask_graphics_52 = new cjs.Graphics().p("Ap7TSMACSgmmQH/AeFVF/QFUGAgfH/QgeIAl/FUQlfE5nMAAQgpAAgqgDg");
	var mask_graphics_53 = new cjs.Graphics().p("ApfTUMABagmoQIAASFdF3QFcF4gSH/QgTIBl3FcQlkFMnfAAIg0gBg");
	var mask_graphics_54 = new cjs.Graphics().p("ApCTWMAAhgmrQIAAHFlFvQFmFwgHH/QgHIBlvFlQloFgn0AAIgTAAg");
	var mask_graphics_55 = new cjs.Graphics().p("Ao9zVQIAgEFuFmQFtFoAFIAQAEIAlmFuQlnFuoAAFg");
	var mask_graphics_56 = new cjs.Graphics().p("ApZzUQIAgQF1FeQF2FgAQH/QARIAlfF2QleF2oAAQg");
	var mask_graphics_57 = new cjs.Graphics().p("Ap2zSQIAgcF9FWQF+FXAcH/QAcH/lWF9QlWF/n/Acg");
	var mask_graphics_58 = new cjs.Graphics().p("AqSzPQH/goGFFNQGFFOAoH/QAoH+lNGFQlOGGn+Aog");
	var mask_graphics_59 = new cjs.Graphics().p("AqozLQH+gzGMFDQGNFGAzH9QA0H+lEGMQlFGOn9Azg");
	var mask_graphics_60 = new cjs.Graphics().p("Aq2zGQH8g/GUE7QGUE8A/H8QA/H8k7GUQk7GVn8A/g");
	var mask_graphics_61 = new cjs.Graphics().p("ArFzAQH8hLGaEyQGbEyBLH7QBKH7kxGaQkyGcn6BLg");
	var mask_graphics_62 = new cjs.Graphics().p("ArTy5QH6hXGhEoQGiEqBWH5QBWH4koGiQkpGjn4BWg");
	var mask_graphics_63 = new cjs.Graphics().p("ArhyyQH3hhGpEeQGoEgBiH3QBhH2keGoQkfGqn2Bhg");
	var mask_graphics_64 = new cjs.Graphics().p("ArvypQH1htGvEUQGvEXBtH0QBtH0kVGvQkVGwn0Btg");
	var mask_graphics_65 = new cjs.Graphics().p("Ar9yfQHzh5G0ELQG2EMB4HyQB5HxkLG1QkMG2nxB5g");
	var mask_graphics_66 = new cjs.Graphics().p("AsKyVQHviEG7EBQG7ECCEHvQCDHvkAG7QkCG8nuCDg");
	var mask_graphics_67 = new cjs.Graphics().p("AsYyJQHsiPHBD2QHBD4CPHsQCPHrj3HBQj3HCnrCPg");
	var mask_graphics_68 = new cjs.Graphics().p("Asmx9QHpiaHGDsQHHDuCaHoQCaHojsHGQjtHInoCag");
	var mask_graphics_69 = new cjs.Graphics().p("AszxwQHlilHLDiQHMDjClHlQCmHkjiHMQjjHMnkCmg");
	var mask_graphics_70 = new cjs.Graphics().p("AtAxiQHhiwHQDXQHRDZCwHhQCwHhjXHQQjYHSnhCwg");
	var mask_graphics_71 = new cjs.Graphics().p("AtOxSQHdi8HVDNQHWDOC7HdQC8HcjNHVQjOHXndC7g");
	var mask_graphics_72 = new cjs.Graphics().p("AtbxDQHZjGHaDCQHaDEDGHYQDGHYjCHaQjDHbnYDGg");
	var mask_graphics_73 = new cjs.Graphics().p("AtowyQHUjRHeC3QHfC5DQHTQDRHUi3HeQi4HfnUDRg");
	var mask_graphics_74 = new cjs.Graphics().p("At0wgQHPjbHiCrQHiCuDbHPQDcHPisHhQitHknPDbg");
	var mask_graphics_75 = new cjs.Graphics().p("AuBwOQHKjmHmChQHmCjDmHJQDmHLihHlQiiHnnKDmg");
	var mask_graphics_76 = new cjs.Graphics().p("AuOv6QHFjxHpCWQHrCYDwHEQDwHFiWHoQiXHrnEDwg");
	var mask_graphics_77 = new cjs.Graphics().p("AuavmQG/j7HtCLQHtCMD7G/QD6G/iLHsQiLHum/D7g");
	var mask_graphics_78 = new cjs.Graphics().p("AumvRQG5kFHwB/QHxCBEEG5QEFG6iAHvQiAHxm5EEg");
	var mask_graphics_79 = new cjs.Graphics().p("Auyu7QGzkPH0B0QHyB1EOGzQEPG0h0HxQh1H0mzEPg");
	var mask_graphics_80 = new cjs.Graphics().p("Au+ulQGtkYH2BoQH1BqEYGtQEZGthpH0QhpH3mtEYg");
	var mask_graphics_81 = new cjs.Graphics().p("AvJuOQGmkiH5BdQH3BfEhGmQEjGnheH2QhdH5mnEig");
	var mask_graphics_82 = new cjs.Graphics().p("AvUt1QGfksH6BRQH6BUErGfQEsGghSH5QhSH6mgEsg");
	var mask_graphics_83 = new cjs.Graphics().p("AvgtcQGZk1H8BFQH7BIE1GZQE1GZhGH6QhHH8mZE1g");
	var mask_graphics_84 = new cjs.Graphics().p("AvrtDQGSk+H9A6QH9A9E+GRQE+GSg7H7Qg7H+mRE/g");
	var mask_graphics_85 = new cjs.Graphics().p("Av1soQGKlHH+AuQH+AxFHGKQFIGKgwH9QgvH/mKFIg");
	var mask_graphics_86 = new cjs.Graphics().p("AwAsNQGDlQH/AjQH/AlFQGCQFQGDgjH+QgkIAmDFQg");
	var mask_graphics_87 = new cjs.Graphics().p("AwKrxQF7lZIAAYQH/AZFZF6QFZF8gYH+QgYIBl7FZg");
	var mask_graphics_88 = new cjs.Graphics().p("AwVrUQFzliIBAMQIAAOFhFyQFiF0gNH/QgMIBlzFhg");
	var mask_graphics_89 = new cjs.Graphics().p("Awfq3QFrlpIBAAQIAABFpFrQFqFrAAH/QgBIClrFpg");
	var mask_graphics_90 = new cjs.Graphics().p("AwpqYQFjlyIAgMQIAgKFyFiQFyFjALH/QALIBliFyg");
	var mask_graphics_91 = new cjs.Graphics().p("Awyp5QFal6IAgYQH/gVF6FZQF6FbAXH+QAXIBlaF6g");
	var mask_graphics_92 = new cjs.Graphics().p("Aw8paQFSmCH/gjQH/ghGBFRQGCFSAjH+QAiIAlRGCg");
	var mask_graphics_93 = new cjs.Graphics().p("AxFo6QFImJH/gvQH+gsGJFIQGKFIAtH9QAuIAlIGJg");
	var mask_graphics_94 = new cjs.Graphics().p("AxOoZQE/mQH+g7QH8g4GRE/QGRFAA5H7QA6H+k/GRg");
	var mask_graphics_95 = new cjs.Graphics().p("AxXn3QE2mYH8hGQH8hEGXE2QGYE2BFH7QBGH8k3GYg");
	var mask_graphics_96 = new cjs.Graphics().p("AxgnVQEtmfH6hRQH6hQGfEtQGfEtBQH4QBRH7ktGfg");
	var mask_graphics_97 = new cjs.Graphics().p("AxomyQEjmmH5hdQH3hbGmEjQGmEjBcH3QBcH5kjGmg");
	var mask_graphics_98 = new cjs.Graphics().p("AxwmPQEamsH2hpQH1hmGsEZQGtEaBnH0QBoH3kaGsg");
	var mask_graphics_99 = new cjs.Graphics().p("Ax4lrQEQmzHzh0QH0hyGyEQQGzEQByHyQB0H0kQGyg");
	var mask_graphics_100 = new cjs.Graphics().p("Ax/lHQEGm5Hwh/QHxh9G4EFQG5EGB+HwQB/HxkGG5g");
	var mask_graphics_101 = new cjs.Graphics().p("AyGkiQD7m/HuiKQHtiJG+D7QG/D8CKHuQCKHtj8G+g");
	var mask_graphics_102 = new cjs.Graphics().p("AyNj9QDxnEHriWQHqiUHDDxQHFDyCUHqQCWHqjyHEg");
	var mask_graphics_103 = new cjs.Graphics().p("AyUjYQDnnJHnihQHnifHJDnQHJDnCgHnQChHmjoHKg");
	var mask_graphics_104 = new cjs.Graphics().p("AyaiyQDcnOHjisQHjiqHODcQHPDdCrHjQCsHjjdHOg");
	var mask_graphics_105 = new cjs.Graphics().p("AygiLQDSnUHfi2QHgi2HSDSQHUDSC1HfQC3HfjSHTg");
	var mask_graphics_106 = new cjs.Graphics().p("AymhkQDInZHajBQHcjAHXDHQHYDHDBHbQDBHajHHYg");
	var mask_graphics_107 = new cjs.Graphics().p("Ayrg9QC8ndHXjMQHXjLHbC8QHdC9DLHWQDMHWi8Hcg");
	var mask_graphics_108 = new cjs.Graphics().p("AywgWQCxnhHSjXQHSjVHgCxQHhCyDWHRQDWHRixHhg");
	var mask_graphics_109 = new cjs.Graphics().p("Ay1ARQCnnkHMjhQHOjgHjCmQHlCnDgHMQDiHMinHlg");
	var mask_graphics_110 = new cjs.Graphics().p("Ay5A5QCbnnHHjsQHJjrHmCcQHpCbDrHHQDsHHicHog");
	var mask_graphics_111 = new cjs.Graphics().p("Ay9BhQCQnqHCj3QHCj1HrCRQHsCQD1HCQD2HBiQHsg");
	var mask_graphics_112 = new cjs.Graphics().p("AzBCKQCFnuG8kAQG9kAHuCFQHvCGD/G7QEBG8iGHvg");
	var mask_graphics_113 = new cjs.Graphics().p("AzECzQB6nxG1kLQG4kJHwB6QHyB6EKG2QEKG2h6Hxg");
	var mask_graphics_114 = new cjs.Graphics().p("AzHDcQBun0GwkUQGxkTHzBuQH1BvETGvQEUGwhuH0g");
	var mask_graphics_115 = new cjs.Graphics().p("AzKEFQBjn2GpkeQGrkdH1BjQH4BjEdGpQEeGqhjH2g");
	var mask_graphics_116 = new cjs.Graphics().p("AzNEuQBYn4GjknQGkknH3BYQH6BXEmGjQEoGihXH5g");
	var mask_graphics_117 = new cjs.Graphics().p("AzPFYQBMn6GckxQGdkwH6BMQH7BMEwGcQExGchMH6g");
	var mask_graphics_118 = new cjs.Graphics().p("AzQGCQBAn8GVk6QGWk6H7BBQH9BAE5GVQE7GVhBH8g");
	var mask_graphics_119 = new cjs.Graphics().p("AzSGsQA1n9GOlEQGPlCH8A0QH+A1FDGOQFDGNg1H+g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:14.6,y:53.3}).wait(1).to({graphics:mask_graphics_1,x:15.1,y:51.9}).wait(1).to({graphics:mask_graphics_2,x:15.6,y:50.6}).wait(1).to({graphics:mask_graphics_3,x:16.2,y:49.3}).wait(1).to({graphics:mask_graphics_4,x:16.7,y:48}).wait(1).to({graphics:mask_graphics_5,x:17.3,y:46.7}).wait(1).to({graphics:mask_graphics_6,x:17.9,y:45.5}).wait(1).to({graphics:mask_graphics_7,x:18.5,y:44.2}).wait(1).to({graphics:mask_graphics_8,x:19.2,y:43}).wait(1).to({graphics:mask_graphics_9,x:19.9,y:41.7}).wait(1).to({graphics:mask_graphics_10,x:20.6,y:40.5}).wait(1).to({graphics:mask_graphics_11,x:21.3,y:39.3}).wait(1).to({graphics:mask_graphics_12,x:22.1,y:38.1}).wait(1).to({graphics:mask_graphics_13,x:22.9,y:36.9}).wait(1).to({graphics:mask_graphics_14,x:23.7,y:35.8}).wait(1).to({graphics:mask_graphics_15,x:24.6,y:34.7}).wait(1).to({graphics:mask_graphics_16,x:25.4,y:33.5}).wait(1).to({graphics:mask_graphics_17,x:26.3,y:32.5}).wait(1).to({graphics:mask_graphics_18,x:27.3,y:31.4}).wait(1).to({graphics:mask_graphics_19,x:28.2,y:30.4}).wait(1).to({graphics:mask_graphics_20,x:29.2,y:29.3}).wait(1).to({graphics:mask_graphics_21,x:30.2,y:28.4}).wait(1).to({graphics:mask_graphics_22,x:31.2,y:27.4}).wait(1).to({graphics:mask_graphics_23,x:32.3,y:26.5}).wait(1).to({graphics:mask_graphics_24,x:33.4,y:25.6}).wait(1).to({graphics:mask_graphics_25,x:34.5,y:24.7}).wait(1).to({graphics:mask_graphics_26,x:35.6,y:23.8}).wait(1).to({graphics:mask_graphics_27,x:36.8,y:23}).wait(1).to({graphics:mask_graphics_28,x:37.9,y:22.2}).wait(1).to({graphics:mask_graphics_29,x:39.1,y:21.5}).wait(1).to({graphics:mask_graphics_30,x:40.3,y:20.7}).wait(1).to({graphics:mask_graphics_31,x:41.5,y:20}).wait(1).to({graphics:mask_graphics_32,x:42.8,y:19.3}).wait(1).to({graphics:mask_graphics_33,x:44,y:18.6}).wait(1).to({graphics:mask_graphics_34,x:45.3,y:18}).wait(1).to({graphics:mask_graphics_35,x:46.5,y:17.4}).wait(1).to({graphics:mask_graphics_36,x:47.8,y:16.8}).wait(1).to({graphics:mask_graphics_37,x:49.1,y:16.2}).wait(1).to({graphics:mask_graphics_38,x:50.4,y:15.7}).wait(1).to({graphics:mask_graphics_39,x:51.7,y:15.2}).wait(1).to({graphics:mask_graphics_40,x:53.1,y:14.7}).wait(1).to({graphics:mask_graphics_41,x:54.4,y:14.3}).wait(1).to({graphics:mask_graphics_42,x:55.7,y:13.9}).wait(1).to({graphics:mask_graphics_43,x:57.1,y:13.5}).wait(1).to({graphics:mask_graphics_44,x:58.4,y:13.1}).wait(1).to({graphics:mask_graphics_45,x:59.8,y:12.8}).wait(1).to({graphics:mask_graphics_46,x:61.1,y:12.5}).wait(1).to({graphics:mask_graphics_47,x:62.5,y:12.2}).wait(1).to({graphics:mask_graphics_48,x:63.9,y:11.9}).wait(1).to({graphics:mask_graphics_49,x:65.3,y:11.7}).wait(1).to({graphics:mask_graphics_50,x:66.7,y:11.6}).wait(1).to({graphics:mask_graphics_51,x:67.5,y:11.4}).wait(1).to({graphics:mask_graphics_52,x:67.5,y:11.3}).wait(1).to({graphics:mask_graphics_53,x:67.5,y:11.2}).wait(1).to({graphics:mask_graphics_54,x:67.5,y:11.2}).wait(1).to({graphics:mask_graphics_55,x:67.5,y:11.2}).wait(1).to({graphics:mask_graphics_56,x:67.5,y:11.2}).wait(1).to({graphics:mask_graphics_57,x:67.5,y:11.1}).wait(1).to({graphics:mask_graphics_58,x:67.5,y:11}).wait(1).to({graphics:mask_graphics_59,x:66.9,y:10.8}).wait(1).to({graphics:mask_graphics_60,x:65.5,y:10.7}).wait(1).to({graphics:mask_graphics_61,x:64.2,y:10.5}).wait(1).to({graphics:mask_graphics_62,x:62.8,y:10.2}).wait(1).to({graphics:mask_graphics_63,x:61.4,y:10}).wait(1).to({graphics:mask_graphics_64,x:60.1,y:9.7}).wait(1).to({graphics:mask_graphics_65,x:58.7,y:9.3}).wait(1).to({graphics:mask_graphics_66,x:57.3,y:9}).wait(1).to({graphics:mask_graphics_67,x:56,y:8.6}).wait(1).to({graphics:mask_graphics_68,x:54.7,y:8.2}).wait(1).to({graphics:mask_graphics_69,x:53.3,y:7.7}).wait(1).to({graphics:mask_graphics_70,x:52,y:7.3}).wait(1).to({graphics:mask_graphics_71,x:50.7,y:6.8}).wait(1).to({graphics:mask_graphics_72,x:49.4,y:6.2}).wait(1).to({graphics:mask_graphics_73,x:48.1,y:5.7}).wait(1).to({graphics:mask_graphics_74,x:46.8,y:5.1}).wait(1).to({graphics:mask_graphics_75,x:45.6,y:4.5}).wait(1).to({graphics:mask_graphics_76,x:44.3,y:3.8}).wait(1).to({graphics:mask_graphics_77,x:43.1,y:3.2}).wait(1).to({graphics:mask_graphics_78,x:41.8,y:2.5}).wait(1).to({graphics:mask_graphics_79,x:40.6,y:1.8}).wait(1).to({graphics:mask_graphics_80,x:39.4,y:1}).wait(1).to({graphics:mask_graphics_81,x:38.2,y:0.3}).wait(1).to({graphics:mask_graphics_82,x:37.1,y:-0.5}).wait(1).to({graphics:mask_graphics_83,x:35.9,y:-1.4}).wait(1).to({graphics:mask_graphics_84,x:34.8,y:-2.2}).wait(1).to({graphics:mask_graphics_85,x:33.7,y:-3.1}).wait(1).to({graphics:mask_graphics_86,x:32.6,y:-4}).wait(1).to({graphics:mask_graphics_87,x:31.5,y:-4.9}).wait(1).to({graphics:mask_graphics_88,x:30.5,y:-5.9}).wait(1).to({graphics:mask_graphics_89,x:29.5,y:-6.8}).wait(1).to({graphics:mask_graphics_90,x:28.5,y:-7.8}).wait(1).to({graphics:mask_graphics_91,x:27.5,y:-8.9}).wait(1).to({graphics:mask_graphics_92,x:26.6,y:-9.9}).wait(1).to({graphics:mask_graphics_93,x:25.7,y:-11}).wait(1).to({graphics:mask_graphics_94,x:24.8,y:-12.1}).wait(1).to({graphics:mask_graphics_95,x:24,y:-13.2}).wait(1).to({graphics:mask_graphics_96,x:23.2,y:-14.4}).wait(1).to({graphics:mask_graphics_97,x:22.4,y:-15.6}).wait(1).to({graphics:mask_graphics_98,x:21.6,y:-16.7}).wait(1).to({graphics:mask_graphics_99,x:20.9,y:-17.9}).wait(1).to({graphics:mask_graphics_100,x:20.2,y:-19.2}).wait(1).to({graphics:mask_graphics_101,x:19.5,y:-20.4}).wait(1).to({graphics:mask_graphics_102,x:18.8,y:-21.6}).wait(1).to({graphics:mask_graphics_103,x:18.2,y:-22.9}).wait(1).to({graphics:mask_graphics_104,x:17.6,y:-24.2}).wait(1).to({graphics:mask_graphics_105,x:17,y:-25.4}).wait(1).to({graphics:mask_graphics_106,x:16.4,y:-26.7}).wait(1).to({graphics:mask_graphics_107,x:15.9,y:-28}).wait(1).to({graphics:mask_graphics_108,x:15.4,y:-29.3}).wait(1).to({graphics:mask_graphics_109,x:14.9,y:-30.7}).wait(1).to({graphics:mask_graphics_110,x:14.5,y:-32}).wait(1).to({graphics:mask_graphics_111,x:14,y:-33.3}).wait(1).to({graphics:mask_graphics_112,x:13.6,y:-34.7}).wait(1).to({graphics:mask_graphics_113,x:13.3,y:-36}).wait(1).to({graphics:mask_graphics_114,x:13,y:-37.4}).wait(1).to({graphics:mask_graphics_115,x:12.7,y:-38.8}).wait(1).to({graphics:mask_graphics_116,x:12.4,y:-40.1}).wait(1).to({graphics:mask_graphics_117,x:12.1,y:-41.5}).wait(1).to({graphics:mask_graphics_118,x:11.9,y:-42.9}).wait(1).to({graphics:mask_graphics_119,x:11.8,y:-44.3}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("Al8EDQgWg7AAhEQAAihB9hzQB8hyCwAAQCwAAB9ByQAgAfAYAhQANARAKAS");
	this.shape.setTransform(10.1,-10.7,1,1,18.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.7,-28.7,101,36.4);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-10,-226.7,1,1,0,0,0,0.1,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,regY:0,y:73.5},149,cjs.Ease.get(0.5)).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAAgXIAAAv");
	this.shape.setTransform(-10,-232.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AAAAmIAAhM");
	this.shape_1.setTransform(-10,-230.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AAAA1IAAhp");
	this.shape_2.setTransform(-10,-229.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AAABEIAAiH");
	this.shape_3.setTransform(-10,-228);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AAABTIAAil");
	this.shape_4.setTransform(-10,-226.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AAABhIAAjB");
	this.shape_5.setTransform(-10,-225.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AAABwIAAjf");
	this.shape_6.setTransform(-10,-223.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AAAB+IAAj7");
	this.shape_7.setTransform(-10,-222.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AAACMIAAkX");
	this.shape_8.setTransform(-10,-220.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AAACbIAAk0");
	this.shape_9.setTransform(-10,-219.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AAACpIAAlR");
	this.shape_10.setTransform(-10,-217.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AAAC3IAAlt");
	this.shape_11.setTransform(-10,-216.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AAADFIAAmJ");
	this.shape_12.setTransform(-10,-215.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AAADTIAAml");
	this.shape_13.setTransform(-10,-213.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AAADhIAAnB");
	this.shape_14.setTransform(-10,-212.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AAADvIAAnd");
	this.shape_15.setTransform(-10,-210.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AAAD9IAAn5");
	this.shape_16.setTransform(-10,-209.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AAAEKIAAoT");
	this.shape_17.setTransform(-10,-208.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AAAEYIAAov");
	this.shape_18.setTransform(-10,-206.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AAAElIAApK");
	this.shape_19.setTransform(-10,-205.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AAAEzIAApl");
	this.shape_20.setTransform(-10,-204.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AAAFBIAAqB");
	this.shape_21.setTransform(-10,-202.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AAAFOIAAqb");
	this.shape_22.setTransform(-10,-201.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AAAFbIAAq1");
	this.shape_23.setTransform(-10,-200.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AAAFoIAArP");
	this.shape_24.setTransform(-10,-198.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AAAF1IAArq");
	this.shape_25.setTransform(-10,-197.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AAAGDIAAsF");
	this.shape_26.setTransform(-10,-196.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AAAGQIAAsf");
	this.shape_27.setTransform(-10,-194.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AAAGdIAAs5");
	this.shape_28.setTransform(-10,-193.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AAAGqIAAtT");
	this.shape_29.setTransform(-10,-192.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AAAG2IAAts");
	this.shape_30.setTransform(-10,-190.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AAAHDIAAuF");
	this.shape_31.setTransform(-10,-189.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AAAHQIAAuf");
	this.shape_32.setTransform(-10,-188.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AAAHdIAAu5");
	this.shape_33.setTransform(-10,-187.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AAAHqIAAvS");
	this.shape_34.setTransform(-10,-185.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AAAH2IAAvr");
	this.shape_35.setTransform(-10,-184.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AAAICIAAwD");
	this.shape_36.setTransform(-10,-183.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AAAIPIAAwd");
	this.shape_37.setTransform(-10,-182.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AAAIbIAAw1");
	this.shape_38.setTransform(-10,-180.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AAAInIAAxN");
	this.shape_39.setTransform(-10,-179.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AAAI0IAAxn");
	this.shape_40.setTransform(-10,-178.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AAAJAIAAx/");
	this.shape_41.setTransform(-10,-177.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AAAJMIAAyX");
	this.shape_42.setTransform(-10,-176);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AAAJYIAAyv");
	this.shape_43.setTransform(-10,-174.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AAAJkIAAzH");
	this.shape_44.setTransform(-10,-173.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AAAJwIAAzf");
	this.shape_45.setTransform(-10,-172.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AAAJ8IAAz3");
	this.shape_46.setTransform(-10,-171.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AAAKHIAA0N");
	this.shape_47.setTransform(-10,-170.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AAAKTIAA0l");
	this.shape_48.setTransform(-10,-168.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AAAKfIAA09");
	this.shape_49.setTransform(-10,-167.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AAAKqIAA1T");
	this.shape_50.setTransform(-10,-166.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AAAK2IAA1r");
	this.shape_51.setTransform(-10,-165.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AAALBIAA2B");
	this.shape_52.setTransform(-10,-164.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AAALMIAA2X");
	this.shape_53.setTransform(-10,-163.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AAALYIAA2v");
	this.shape_54.setTransform(-10,-162);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AAALjIAA3F");
	this.shape_55.setTransform(-10,-160.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AAALuIAA3b");
	this.shape_56.setTransform(-10,-159.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AAAL5IAA3x");
	this.shape_57.setTransform(-10,-158.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AAAMEIAA4H");
	this.shape_58.setTransform(-10,-157.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AAAMPIAA4d");
	this.shape_59.setTransform(-10,-156.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(5,1,1).p("AAAMaIAA4z");
	this.shape_60.setTransform(-10,-155.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(5,1,1).p("AAAMlIAA5I");
	this.shape_61.setTransform(-10,-154.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(5,1,1).p("AAAMvIAA5d");
	this.shape_62.setTransform(-10,-153.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(5,1,1).p("AAAM6IAA5z");
	this.shape_63.setTransform(-10,-152.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(5,1,1).p("AAANFIAA6J");
	this.shape_64.setTransform(-10,-151.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(5,1,1).p("AAANPIAA6d");
	this.shape_65.setTransform(-10,-150.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(5,1,1).p("AAANaIAA6z");
	this.shape_66.setTransform(-10,-149);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(5,1,1).p("AAANkIAA7H");
	this.shape_67.setTransform(-10,-148);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(5,1,1).p("AAANuIAA7b");
	this.shape_68.setTransform(-10,-147);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(5,1,1).p("AAAN5IAA7x");
	this.shape_69.setTransform(-10,-145.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(5,1,1).p("AAAODIAA8F");
	this.shape_70.setTransform(-10,-144.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(5,1,1).p("AAAONIAA8Z");
	this.shape_71.setTransform(-10,-143.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(5,1,1).p("AAAOXIAA8t");
	this.shape_72.setTransform(-10,-142.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(5,1,1).p("AAAOhIAA9B");
	this.shape_73.setTransform(-10,-141.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(5,1,1).p("AAAOrIAA9V");
	this.shape_74.setTransform(-10,-140.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(5,1,1).p("AAAO1IAA9p");
	this.shape_75.setTransform(-10,-139.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(5,1,1).p("AAAO/IAA99");
	this.shape_76.setTransform(-10,-138.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(5,1,1).p("AAAPJIAA+R");
	this.shape_77.setTransform(-10,-137.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(5,1,1).p("AAAPSIAA+j");
	this.shape_78.setTransform(-10,-137);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(5,1,1).p("AAAPcIAA+3");
	this.shape_79.setTransform(-10,-136);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(5,1,1).p("AAAPlIAA/J");
	this.shape_80.setTransform(-10,-135.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(5,1,1).p("AAAPvIAA/d");
	this.shape_81.setTransform(-10,-134.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(5,1,1).p("AAAP4IAA/v");
	this.shape_82.setTransform(-10,-133.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(5,1,1).p("AAAQCMAAAggD");
	this.shape_83.setTransform(-10,-132.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(5,1,1).p("AAAQLMAAAggV");
	this.shape_84.setTransform(-10,-131.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(5,1,1).p("AAAQUMAAAggn");
	this.shape_85.setTransform(-10,-130.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(5,1,1).p("AAAQdMAAAgg5");
	this.shape_86.setTransform(-10,-129.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(5,1,1).p("AAAQmMAAAghL");
	this.shape_87.setTransform(-10,-128.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(5,1,1).p("AAAQvMAAAghd");
	this.shape_88.setTransform(-10,-127.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(5,1,1).p("AAAQ4MAAAghv");
	this.shape_89.setTransform(-10,-126.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(5,1,1).p("AAARBMAAAgiB");
	this.shape_90.setTransform(-10,-125.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(5,1,1).p("AAARKMAAAgiT");
	this.shape_91.setTransform(-10,-125);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(5,1,1).p("AAARTMAAAgil");
	this.shape_92.setTransform(-10,-124.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(5,1,1).p("AAARcMAAAgi3");
	this.shape_93.setTransform(-10,-123.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(5,1,1).p("AAARkMAAAgjH");
	this.shape_94.setTransform(-10,-122.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(5,1,1).p("AAARtMAAAgjZ");
	this.shape_95.setTransform(-10,-121.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(5,1,1).p("AAAR1MAAAgjp");
	this.shape_96.setTransform(-10,-120.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(5,1,1).p("AAAR+MAAAgj7");
	this.shape_97.setTransform(-10,-119.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(5,1,1).p("AAASGMAAAgkL");
	this.shape_98.setTransform(-10,-119);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(5,1,1).p("AAASOMAAAgkb");
	this.shape_99.setTransform(-10,-118.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(5,1,1).p("AAASWMAAAgkr");
	this.shape_100.setTransform(-10,-117.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(5,1,1).p("AAASfMAAAgk9");
	this.shape_101.setTransform(-10,-116.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(5,1,1).p("AAASnMAAAglN");
	this.shape_102.setTransform(-10,-115.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(5,1,1).p("AAASvMAAAgld");
	this.shape_103.setTransform(-10,-114.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(5,1,1).p("AAAS3MAAAglt");
	this.shape_104.setTransform(-10,-114.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(5,1,1).p("AAAS/MAAAgl9");
	this.shape_105.setTransform(-10,-113.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(5,1,1).p("AAATGMAAAgmL");
	this.shape_106.setTransform(-10,-112.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(5,1,1).p("AAATOMAAAgmb");
	this.shape_107.setTransform(-10,-111.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(5,1,1).p("AAATWMAAAgmr");
	this.shape_108.setTransform(-10,-111);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(5,1,1).p("AAATdMAAAgm5");
	this.shape_109.setTransform(-10,-110.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(5,1,1).p("AAATlMAAAgnJ");
	this.shape_110.setTransform(-10,-109.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(5,1,1).p("AAATtMAAAgnZ");
	this.shape_111.setTransform(-10,-108.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(5,1,1).p("AAAT0MAAAgnn");
	this.shape_112.setTransform(-10,-108);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(5,1,1).p("AAAT7MAAAgn1");
	this.shape_113.setTransform(-10,-107.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(5,1,1).p("AAAUDMAAAgoF");
	this.shape_114.setTransform(-10,-106.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(5,1,1).p("AAAUKMAAAgoT");
	this.shape_115.setTransform(-10,-105.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(5,1,1).p("AAAURMAAAgoh");
	this.shape_116.setTransform(-10,-105.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(5,1,1).p("AAAUYMAAAgov");
	this.shape_117.setTransform(-10,-104.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(5,1,1).p("AAAUfMAAAgo9");
	this.shape_118.setTransform(-10,-103.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(5,1,1).p("AAAUmMAAAgpL");
	this.shape_119.setTransform(-10,-103);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(5,1,1).p("AAAUtMAAAgpZ");
	this.shape_120.setTransform(-10,-102.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(5,1,1).p("AAAU0MAAAgpn");
	this.shape_121.setTransform(-10,-101.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(5,1,1).p("AAAU7MAAAgp1");
	this.shape_122.setTransform(-10,-100.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(5,1,1).p("AAAVBMAAAgqB");
	this.shape_123.setTransform(-10,-100.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(5,1,1).p("AAAVIMAAAgqP");
	this.shape_124.setTransform(-10,-99.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(5,1,1).p("AAAVOMAAAgqb");
	this.shape_125.setTransform(-10,-99);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(5,1,1).p("AAAVVMAAAgqp");
	this.shape_126.setTransform(-10,-98.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(5,1,1).p("AAAVbMAAAgq1");
	this.shape_127.setTransform(-10,-97.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(5,1,1).p("AAAViMAAAgrD");
	this.shape_128.setTransform(-10,-97);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(5,1,1).p("AAAVoMAAAgrP");
	this.shape_129.setTransform(-10,-96.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(5,1,1).p("AAAVuMAAAgrb");
	this.shape_130.setTransform(-10,-95.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(5,1,1).p("AAAV0MAAAgrn");
	this.shape_131.setTransform(-10,-95.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(5,1,1).p("AAAV7MAAAgr1");
	this.shape_132.setTransform(-10,-94.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(5,1,1).p("AAAWBMAAAgsB");
	this.shape_133.setTransform(-10,-93.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(5,1,1).p("AAAWHMAAAgsN");
	this.shape_134.setTransform(-10,-93.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(5,1,1).p("AAAWMMAAAgsX");
	this.shape_135.setTransform(-10,-92.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(5,1,1).p("AAAWSMAAAgsj");
	this.shape_136.setTransform(-10,-92.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(5,1,1).p("AAAWYMAAAgsv");
	this.shape_137.setTransform(-10,-91.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(5,1,1).p("AAAWeMAAAgs7");
	this.shape_138.setTransform(-10,-91);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(5,1,1).p("AAAWjMAAAgtF");
	this.shape_139.setTransform(-10,-90.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(5,1,1).p("AAAWpMAAAgtR");
	this.shape_140.setTransform(-10,-89.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(5,1,1).p("AAAWuMAAAgtb");
	this.shape_141.setTransform(-10,-89.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(5,1,1).p("AAAW0MAAAgtn");
	this.shape_142.setTransform(-10,-88.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(5,1,1).p("AAAW5MAAAgtx");
	this.shape_143.setTransform(-10,-88.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(5,1,1).p("AAAW/MAAAgt9");
	this.shape_144.setTransform(-10,-87.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(5,1,1).p("AAAXEMAAAguH");
	this.shape_145.setTransform(-10,-87.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(5,1,1).p("AAAXJMAAAguR");
	this.shape_146.setTransform(-10,-86.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(5,1,1).p("AAAXOMAAAgub");
	this.shape_147.setTransform(-10,-86.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(5,1,1).p("AAAXTMAAAgul");
	this.shape_148.setTransform(-10,-85.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(5,1,1).p("AAA3XMAAAAuv");
	this.shape_149.setTransform(-10,-85.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.9,-240.1,24.3,21.8);


(lib.honeyflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.honeybee();
	this.instance.parent = this;
	this.instance.setTransform(22.4,-144,0.422,0.422,0,0,0,-38.1,63.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIB9IgQgCIgNgEIgOgFIgHgEIgCgBIgCgCIgEgBIgCgBIgBgCIgCgCIgDgCIgCgBIgCgBIgCgCIgBgCIgDgCIgCgBIgCgBIgBgCIgBgCIgCgCIgCgCIgBgBIgCgBIAAgCIgCgCIgBgCIgCgCIgBgBIgBgCIgBgCIgBgCIgBgBIgBgCIgBgBIgBgDIgBgBIgBgCIgBgBIgBgCIAAgDIAAgBIgBgCIAAgCIgBgBIgBgDIgBgBIAAgCIgBgCIAAgBIgBgDIgBgBIAAgCIAAgCIAAgCIgBgCIAAgCIgBgCIAAgBIAAgCIAAgCIAAgCIgBgCIAAgBIAAgCIAAgDIAAgBIAAgBIAAgCIAAgCIAAgCIAAgCIABgBIgBgCIABgDIAAgCIAAgCIABgBIAAgCIAAgCIABgCIAAgCIAAgCIABgCIABgCIABgCIAAgCIABgCIABgCIAAgCIABgCIABgCIABgCIAAgCIABgCIABgCIACgCIABgDIABgCIABgBIABgCIABgDIACgCIACgCIACgCIABgCIABgDIACgCIADgBIABgDIACgCIAIgHIAMgJIAIgFIALgGIAIgDIAMgDIAMgDIAAAAIALgBIAJAAIAJAAIAHABIAKADIAKACIADABIAEABIADACIAEABIACACIADACIADABIADABIACACIADABIACACIACACIACABIACABIADACIABACIACACIABABIACACIADABIABACIABACIACACIABABIACACIACABIAAADIACABIABACIABABIABACIABACIACACIABACIABABIABACIAAABIABADIABABIABACIABABIABACIABACIABACIAAACIABABIABACIABACIAAACIAAACIABABIAAACIABADIABABIAAACIAAABIAAACIABADIAAACIABABIAAACIAAACIABACIAAACIAAABIAAACIAAADIAAABIAAACIAAABIAAACIAAACIAAACIAAABIAAACIgBACIAAADIAAABIAAACIAAACIgBACIgBACIAAACIgBACIAAACIgBACIAAACIgBACIAAACIgBACIAAACIgBACIgBACIAAACIgBACIgCACIgBACIgBACIgBACIAAACIgCACIgBACIgBACIgCADIgBACIgCACIgBACIgBACIgCACIgDACIgBACIgCADIgCACIgDACIgCACIgCADIgHAEIgCACIgEADIgIAFQgHAEgGADIgFABIgHACIgRAFIgMABIgHAAIgIAAg");
	this.shape.setTransform(22.4,-143.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-215.3,105.5,84.3);


// stage content:
(lib.writingsuccess_Fontkid_d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_470 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(470).call(this.frame_470).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(351.6,360.1,0.999,0.999,8.5,0,0,22.4,-144);
	this.instance._off = true;

	this.instance_1 = new lib.honeybee();
	this.instance_1.parent = this;
	this.instance_1.setTransform(351.8,445.2,0.421,0.421,8,0,0,-38.1,63.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:8.3,guide:{path:[351.5,360,350.3,330.1,328.9,308.7,313.3,293.1,293.2,288.2]}},50).to({guide:{path:[293.2,288.2,284.9,286.2,275.8,286.1,275,286,274.1,286,272.2,286,270.3,286.1,240.7,287.4,222.9,308.7,205.1,330,200.7,360,200.7,361.2,200.6,362.3]}},60).to({regX:22.5,guide:{path:[200.6,362.3,199.9,382.6,203.5,396,207.3,410,226.1,427.7,243,443.6,270.3,444.7]}},55).to({regX:22.4,scaleX:1,scaleY:1,rotation:8.5,guide:{path:[270.3,444.6,273.4,444.8,276.6,444.7,308.3,444.1,329.5,420.3,350.6,396.5,351.5,366.3]}},66).wait(9).to({scaleX:1,scaleY:1,rotation:8,x:351.9,y:104},0).to({y:445.2},150).to({_off:true},11).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(410).to({_off:false},0).to({regY:64,rotation:8.5,guide:{path:[351.8,445.3,297.2,470.7,237.9,480.3,179.5,489.6,123.7,508.5,67.7,527.3,27.7,571,-11.4,613.8,-24.1,629.7]}},60).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(352,366.2,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).wait(240).to({x:350.6,y:446.8},0).to({_off:true},150).wait(72));

	// Layer 9
	this.instance_2 = new lib.ar1("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(473.4,374.3,1,1,0,0,0,0.3,30.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(249).to({_off:false},0).wait(222));

	// Layer 28
	this.instance_3 = new lib.ar2("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(273.1,361.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(462));

	// Layer 10
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AMHAAQAAFBjjDjQjjDjlBAAQlAAAjjjjQjjjjAAlBQAAlADjjjQDjjjFAAAQFBAADjDjQDjDjAAFAg");
	this.shape_1.setTransform(275.4,365.8,0.986,1.025);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(239).to({_off:false},0).wait(232));

	// Layer 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_214 = new cjs.Graphics().p("EACWAhnQmKlGgwn8Qgwn+FGmLIdvYnQlGGKn9AxQhBAGg/AAQmwAAlYkdg");
	var mask_graphics_215 = new cjs.Graphics().p("EAClAh8QmSk8g+n7Qg9n9E7mSIeYXzQk7GTn8A+QhSAKhQAAQmcAAlRkIg");
	var mask_graphics_216 = new cjs.Graphics().p("EAC1AiPQmakxhLn5QhLn7EwmbIfAXAQkxGbn6BMQhjAOhgAAQmIAAlKj1g");
	var mask_graphics_217 = new cjs.Graphics().p("EADGAiiQmikmhZn3QhYn5ElmjIfnWLQkmGjn4BZQh0AUhvAAQl2AAlCjig");
	var mask_graphics_218 = new cjs.Graphics().p("EADYAi1Qmqkbhmn1Qhmn2EbmrMAgLAVVQkbGrn1BmQiEAbh/AAQljAAk6jQg");
	var mask_graphics_219 = new cjs.Graphics().p("EADqAjGQmxkPhznyQhzn0EPmyMAgvAUeQkPGynzB0QiUAiiOAAQlSAAkxi/g");
	var mask_graphics_220 = new cjs.Graphics().p("EAD+AjXQm5kEiAnvQiAnwEEm5MAhQATmQkDG5nwCBQijAqidAAQlBAAkniug");
	var mask_graphics_221 = new cjs.Graphics().p("EAESAjnQm/j4iNnsQiOnsD4nAMAhxASuQj3G/nsCOQiyAzitAAQkwAAkdieg");
	var mask_graphics_222 = new cjs.Graphics().p("EAEnAj2QnGjsiannQianpDsnGMAiQAR0QjsHGnoCbQjAA8i7AAQkgAAkTiPg");
	var mask_graphics_223 = new cjs.Graphics().p("EAE9AkFQnMjginnkQinnkDgnMMAiuAQ6QjgHMnkCoQjOBGjKAAQkQAAkIiAg");
	var mask_graphics_224 = new cjs.Graphics().p("EAFTAkTQnRjUi0nfQi0ngDUnSMAjKAP/QjUHSnfC0QjcBSjZAAQkBAAj8hyg");
	var mask_graphics_225 = new cjs.Graphics().p("EAFrAkgQnXjIjAnaQjBnbDHnXMAjkAPDQjHHXnaDCQjpBdjoAAQjxAAjwhlg");
	var mask_graphics_226 = new cjs.Graphics().p("EAGDAksQnci7jNnUQjNnWC7ndMAj9AOHQi7HcnVDOQj2Bqj3AAQjiAAjjhZg");
	var mask_graphics_227 = new cjs.Graphics().p("EAGbAk4QngivjZnPQjanQCunhMAkUANJQiuHinPDaQkCB3kGAAQjTAAjXhNg");
	var mask_graphics_228 = new cjs.Graphics().p("EAG1AlDQnliijmnJQjlnLChnmMAkqAMMQiiHmnJDmQkNCGkWAAQjEAAjJhCg");
	var mask_graphics_229 = new cjs.Graphics().p("EAHPAlNQnpiVjynDQjxnECUnqMAk+ALNQiVHqnDDyQkYCVkmAAQi1AAi7g4g");
	var mask_graphics_230 = new cjs.Graphics().p("EAHqAlWQntiIj9m8Qj+m+CInuMAlQAKPQiIHum9D+QkiCkk3AAQimAAisgvg");
	var mask_graphics_231 = new cjs.Graphics().p("EAIFAleQnxh6kIm2QkJm3B6nxMAlhAJQQh7Hxm2EJQksC1lHAAQiXAAiegng");
	var mask_graphics_232 = new cjs.Graphics().p("EAIhAlmQn0hukUmuQkUmwBtn0MAlwAIQQhuH0mvEVQk1DGlYAAQiJAAiOgfg");
	var mask_graphics_233 = new cjs.Graphics().p("EAI+AltQn3hgkfmoQkgmoBgn3MAl9AHQQhgH3moEhQk+DXlqAAQh5AAh+gYg");
	var mask_graphics_234 = new cjs.Graphics().p("EAJbAlzQn6hTkpmgQkrmgBSn6MAmJAGQQhTH5mgEsQlGDql9AAQhpAAhugSg");
	var mask_graphics_235 = new cjs.Graphics().p("EAJ5Al4Qn8hGk0mXQk2mZBFn7MAmSAFPQhFH7mYE3QlOD8mPAAQhaAAhdgMg");
	var mask_graphics_236 = new cjs.Graphics().p("EAKYAl8Qn+g4k/mPQlBmRA4n9MAmaAEOQg4H+mPFBQlVEQmjAAQhKAAhLgIg");
	var mask_graphics_237 = new cjs.Graphics().p("EAK3Al/Qn/gqlKmHQlLmIAqn+MAmhADNQgqH/mHFLQlcElm4AAQg4AAg6gFg");
	var mask_graphics_238 = new cjs.Graphics().p("EALWAmCQoAgdlUl+QlVl/Acn/MAmmACMQgdH/l+FWQlhE6nOAAQgnAAgogCg");
	var mask_graphics_239 = new cjs.Graphics().p("EAL2AmDQoBgPldl1Qlgl1APoBMAmpABLQgPIAl1FgQlnFQnkAAIgrgBg");
	var mask_graphics_240 = new cjs.Graphics().p("EAL6Al9QoBgNlgl5Qlhl6ANoJMAmqABAQgNIIl0FoQlnFZnpABIgkgBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(214).to({graphics:mask_graphics_214,x:188.9,y:243.6}).wait(1).to({graphics:mask_graphics_215,x:189.9,y:243.6}).wait(1).to({graphics:mask_graphics_216,x:190.9,y:243.6}).wait(1).to({graphics:mask_graphics_217,x:191.9,y:243.6}).wait(1).to({graphics:mask_graphics_218,x:192.8,y:243.7}).wait(1).to({graphics:mask_graphics_219,x:193.7,y:243.7}).wait(1).to({graphics:mask_graphics_220,x:194.5,y:243.7}).wait(1).to({graphics:mask_graphics_221,x:195.3,y:243.7}).wait(1).to({graphics:mask_graphics_222,x:196.1,y:243.7}).wait(1).to({graphics:mask_graphics_223,x:196.9,y:243.7}).wait(1).to({graphics:mask_graphics_224,x:197.6,y:243.7}).wait(1).to({graphics:mask_graphics_225,x:198.2,y:243.7}).wait(1).to({graphics:mask_graphics_226,x:198.9,y:243.7}).wait(1).to({graphics:mask_graphics_227,x:199.4,y:243.7}).wait(1).to({graphics:mask_graphics_228,x:200,y:243.7}).wait(1).to({graphics:mask_graphics_229,x:200.5,y:243.7}).wait(1).to({graphics:mask_graphics_230,x:201,y:243.7}).wait(1).to({graphics:mask_graphics_231,x:201.4,y:243.7}).wait(1).to({graphics:mask_graphics_232,x:201.8,y:243.7}).wait(1).to({graphics:mask_graphics_233,x:202.1,y:243.7}).wait(1).to({graphics:mask_graphics_234,x:202.4,y:243.7}).wait(1).to({graphics:mask_graphics_235,x:202.6,y:243.6}).wait(1).to({graphics:mask_graphics_236,x:202.8,y:243.6}).wait(1).to({graphics:mask_graphics_237,x:203,y:243.6}).wait(1).to({graphics:mask_graphics_238,x:203.1,y:243.6}).wait(1).to({graphics:mask_graphics_239,x:203.2,y:243.6}).wait(1).to({graphics:mask_graphics_240,x:203.1,y:243}).wait(231));

	// Layer 6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("AMHAAQAAFBjjDjQjjDjlBAAQlAAAjjjjQjjjjAAlBQAAlADjjjQDjjjFAAAQFBAADjDjQDjDjAAFAg");
	this.shape_2.setTransform(275.4,365.8,0.986,1.025);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(214).to({_off:false},0).wait(257));

	// Layer 4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_111 = new cjs.Graphics().p("AmQUvQCHnuG8j/QG9j9HuCHQHuCHD+G8QD+G+iHHug");
	var mask_1_graphics_112 = new cjs.Graphics().p("AmYVeQB6nxG1kKQG2kJHxB6QHyB6EJG1QEKG3h6Hxg");
	var mask_1_graphics_113 = new cjs.Graphics().p("AmfWOQBsn1GukVQGwkUH0BsQH0BtEVGuQEVGwhsH0g");
	var mask_1_graphics_114 = new cjs.Graphics().p("AmmW+QBgn3GmkhQGokgH3BgQH3BfEgGnQEhGohgH3g");
	var mask_1_graphics_115 = new cjs.Graphics().p("AmrXuQBSn6GekrQGhkrH5BSQH6BSErGgQErGghSH5g");
	var mask_1_graphics_116 = new cjs.Graphics().p("AmwYeQBFn7GWk3QGZk1H7BEQH8BFE1GYQE3GYhFH7g");
	var mask_1_graphics_117 = new cjs.Graphics().p("AmzZPQA3n9GOlBQGQlBH9A4QH9A3FAGPQFCGQg4H9g");
	var mask_1_graphics_118 = new cjs.Graphics().p("Am2aAQAqn/GGlLQGGlLH+AqQH/AqFLGGQFMGHgrH/g");
	var mask_1_graphics_119 = new cjs.Graphics().p("Am5awQAdn/F9lWQF+lVH/AdQIAAdFVF9QFVF+gcH/g");
	var mask_1_graphics_120 = new cjs.Graphics().p("Am6bhQAPn/F0lgQF1lfH/APQIBAPFfF0QFfF1gPIAg");
	var mask_1_graphics_121 = new cjs.Graphics().p("Am6cSQABoAFrlpQFrlpIAACQIAABFpFrQFpFsgBIAg");
	var mask_1_graphics_122 = new cjs.Graphics().p("AhlO0QFilyH/gMQIBgMFyFhQFzFiAMIAMgmoAA5QgMn/Fhlzg");
	var mask_1_graphics_123 = new cjs.Graphics().p("Ah6O7QFXl7H/gZQIAgaF7FXQF9FYAZIAMgmlAB7QgZoAFXl8g");
	var mask_1_graphics_124 = new cjs.Graphics().p("AiPPDQFOmEH+gnQH/gnGEFNQGFFOAnH/MgmhAC8Qgnn+FNmGg");
	var mask_1_graphics_125 = new cjs.Graphics().p("AiiPMQFDmNH9g0QH+g0GMFCQGOFEA1H9MgmcAD9Qg0n9FDmOg");
	var mask_1_graphics_126 = new cjs.Graphics().p("Ai1PWQE5mWH7hBQH8hCGWE4QGWE5BCH8MgmUAE+QhCn8E4mWg");
	var mask_1_graphics_127 = new cjs.Graphics().p("AjGPgQEumeH5hPQH7hPGdEtQGeEuBPH6MgmKAF/QhPn6Etmeg");
	var mask_1_graphics_128 = new cjs.Graphics().p("AjWPqQEjmlH3hcQH4hdGlEiQGmEjBdH4MgmAAG/Qhcn4Eimmg");
	var mask_1_graphics_129 = new cjs.Graphics().p("AjlP1QEYmsH0hqQH1hqGtEXQGuEYBpH1MglyAH/Qhqn1EXmug");
	var mask_1_graphics_130 = new cjs.Graphics().p("AjzQBQEMm0Hyh3QHyh3G0EMQG1EMB3HyMgllAI/Qh2nyELm1g");
	var mask_1_graphics_131 = new cjs.Graphics().p("AkAQNQEBm7HuiEQHviEG7EAQG8EBCEHvMglUAJ+QiFnvEAm8g");
	var mask_1_graphics_132 = new cjs.Graphics().p("AkLQaQD2nCHpiQQHsiSHBD1QHCD1CRHrMglCAK8QiRnrD0nCg");
	var mask_1_graphics_133 = new cjs.Graphics().p("AkWQnQDqnIHmidQHnieHIDoQHJDpCdHnMgkvAL7QiennDonJg");
	var mask_1_graphics_134 = new cjs.Graphics().p("AkfQ1QDenOHhiqQHjirHODcQHPDdCqHjMgkaAM4QirniDcnPg");
	var mask_1_graphics_135 = new cjs.Graphics().p("AknREQDSnUHci3QHfi4HTDQQHUDRC4HeMgkEAN2Qi3neDPnUg");
	var mask_1_graphics_136 = new cjs.Graphics().p("AkuRTQDFnZHYjEQHZjEHZDDQHaDFDEHZMgjsAOyQjEnZDDnZg");
	var mask_1_graphics_137 = new cjs.Graphics().p("AkzRiQC4neHSjQQHVjRHdC3QHfC4DQHUMgjSAPuQjQnUC3neg");
	var mask_1_graphics_138 = new cjs.Graphics().p("Ak4RyQCsnjHNjcQHOjdHiCqQHkCrDcHOMgi2AQqQjdnOCqnjg");
	var mask_1_graphics_139 = new cjs.Graphics().p("Ak7SCQCfnnHHjpQHIjoHmCdQHoCeDpHIMgiZARkQjpnICdnng");
	var mask_1_graphics_140 = new cjs.Graphics().p("Ak9STQCSnrHAj1QHDj1HqCRQHsCRD0HCMgh7ASeQj0nCCQnrg");
	var mask_1_graphics_141 = new cjs.Graphics().p("Ak+SkQCFnvG6kAQG7kBHvCEQHvCEEAG7MghbATXQkAm7CDnvg");
	var mask_1_graphics_142 = new cjs.Graphics().p("Ak9S2QB4nyGykMQG1kMHxB2QHzB3EMG0Mgg6AUPQkMm0B3nyg");
	var mask_1_graphics_143 = new cjs.Graphics().p("Ak8TIQBrn1GskXQGtkYH0BpQH2BqEXGtMggWAVGQkYmtBpn1g");
	var mask_1_graphics_144 = new cjs.Graphics().p("Ak5TaQBen3GkkjQGlkjH3BdQH5BcEiGmI/yV7QkjmlBcn4g");
	var mask_1_graphics_145 = new cjs.Graphics().p("Ak1TtQBQn6GcktQGekuH5BPQH7BPEuGeI/NWxQktmeBOn6g");
	var mask_1_graphics_146 = new cjs.Graphics().p("AkwUBQBDn8GUk5QGWk4H7BBQH8BCE5GWI+lXlQk5mWBBn7g");
	var mask_1_graphics_147 = new cjs.Graphics().p("AkpUUQA1n9GMlDQGNlDH9A0QH+A0FDGNI99YZQlDmNA0n+g");
	var mask_1_graphics_148 = new cjs.Graphics().p("AkiUoQAon/GDlNQGFlNH+AmQH/AnFNGFI9UZKQlMmEAmn/g");
	var mask_1_graphics_149 = new cjs.Graphics().p("AkZU9QAaoAF6lXQF8lYH/AZQIAAaFYF7I8pZ7QlXl7AZn/g");
	var mask_1_graphics_150 = new cjs.Graphics().p("AkPVRQANoAFxlhQFyliH/AMQIBAMFhFyI78arQlglyALoAg");
	var mask_1_graphics_151 = new cjs.Graphics().p("AkEVmQgBoAFolrQFplrH/gCQIBgBFrFoI7PbaQlqlpgCoAg");
	var mask_1_graphics_152 = new cjs.Graphics().p("Aj4V8QgOoBFel0QFfl0H/gPQIBgQF0FfI6gcHQlzlfgQn/g");
	var mask_1_graphics_153 = new cjs.Graphics().p("AjqWRQgcn/FUl+QFVl+H/gcQIAgdF9FVI5wczQl8lVgdn/g");
	var mask_1_graphics_154 = new cjs.Graphics().p("AjcWnQgpn/FKmGQFLmGH+gqQH/grGGFLI4/deQmFlLgrn+g");
	var mask_1_graphics_155 = new cjs.Graphics().p("AjMW9Qg3n9FAmPQFAmPH9g4QH9g3GPFAI4MeIQmOlBg4n9g");
	var mask_1_graphics_156 = new cjs.Graphics().p("Ai7XUQhEn8E0mXQE3mYH6hFQH8hFGYE2I3ZewQmXk2hFn7g");
	var mask_1_graphics_157 = new cjs.Graphics().p("AipXqQhSn6EqmfQErmfH5hTQH6hSGfErI2kfWQmekrhTn5g");
	var mask_1_graphics_158 = new cjs.Graphics().p("AiWYBQhfn4EfmmQEgmoH2hfQH4hfGnEfI1vf8Qmmkghgn3g");
	var mask_1_graphics_159 = new cjs.Graphics().p("AiCYYQhsn1ETmuQEVmvH0htQH1hsGuEUMgU4AggQmukVhtn0g");
	var mask_1_graphics_160 = new cjs.Graphics().p("AhtYvQh5nyEIm1QEKm2Hwh6QHyh5G2EIMgUCAhCQm1kJh6nxg");
	var mask_1_graphics_161 = new cjs.Graphics().p("AhXZHQiGnvD9m8QD9m9HuiHQHuiGG9D9MgTJAhjQm9j+iHntg");
	var mask_1_graphics_162 = new cjs.Graphics().p("Ag/ZeQiTnrDwnCQDynEHqiUQHqiTHDDxMgSQAiDQnDjyiTnqg");
	var mask_1_graphics_163 = new cjs.Graphics().p("AgnZ2QignnDlnJQDmnKHligQHnigHJDkMgRWAihQnJjmihnlg");
	var mask_1_graphics_164 = new cjs.Graphics().p("AgOaNQisniDYnPQDanPHhiuQHiitHPDZMgQbAi9QnPjZiunig");
	var mask_1_graphics_165 = new cjs.Graphics().p("AAMalQi5ndDMnVQDOnVHci6QHei5HUDMMgPgAjYQnUjNi7ndg");
	var mask_1_graphics_166 = new cjs.Graphics().p("AAna9QjFnYDAnaQDBnaHXjHQHYjGHaDAMgOjAjxQnajAjInYg");
	var mask_1_graphics_167 = new cjs.Graphics().p("ABDbVQjRnTCzneQC1ngHRjTQHTjSHfCzMgNnAkJQnfi0jUnSg");
	var mask_1_graphics_168 = new cjs.Graphics().p("ABhbtQjenNCmnjQConkHMjfQHNjfHkCnMgMqAkfQnjiojgnMg");
	var mask_1_graphics_169 = new cjs.Graphics().p("AB/cFQjqnHCannQCbnpHGjrQHHjrHnCaMgLrAk0QnoibjsnGg");
	var mask_1_graphics_170 = new cjs.Graphics().p("ACecdQj2nBCNnrQCOnsG/j3QHBj3HsCNMgKuAlHQnriOj4nAg");
	var mask_1_graphics_171 = new cjs.Graphics().p("AC+c1QkCm6CAnvQCBnvG5kDQG6kDHvCAMgJuAlYQnwiBkDm5g");
	var mask_1_graphics_172 = new cjs.Graphics().p("ADedNQkNmzBznyQB0nzGykOQGzkOHyBzMgIvAlnQnyh0kQmyg");
	var mask_1_graphics_173 = new cjs.Graphics().p("AEAdlQkYmsBln1QBnn1GqkaQGskZH1BlMgHvAl2Qn1hnkbmrg");
	var mask_1_graphics_174 = new cjs.Graphics().p("AEid9QkjmkBYn4QBZn4GjklQGlkkH3BZMgGvAmBQn4hakmmjg");
	var mask_1_graphics_175 = new cjs.Graphics().p("AFFeVQkvmcBMn6QBMn7GbkvQGckwH6BMMgFvAmLQn6hMkxmbg");
	var mask_1_graphics_176 = new cjs.Graphics().p("AFpetQk6mVA/n7QA+n8GTk7QGUk6H8A/MgEuAmUQn8g/k8mTg");
	var mask_1_graphics_177 = new cjs.Graphics().p("AGOfFQlFmMAxn9QAyn+GKlFQGMlFH9AxMgDuAmbQn9gxlGmKg");
	var mask_1_graphics_178 = new cjs.Graphics().p("AGzfcQlPmDAkn+QAkn/GBlPQGDlQH/AkMgCtAmhQn+gklRmCg");
	var mask_1_graphics_179 = new cjs.Graphics().p("AHZf0QlZl7AWn+QAXoAF4lZQF6laIAAXMgBsAmkQn/gXlbl4g");
	var mask_1_graphics_180 = new cjs.Graphics().p("EAIAAgLQljlxAJn/QAJoAFvlkQFxljH/AJMgAqAmmQoAgJlklvg");
	var mask_1_graphics_181 = new cjs.Graphics().p("EAIcAgiQltlogEn/QgFoAFmltQFnlsIAgFMAAWAmmIgNAAQn3AAlplhg");
	var mask_1_graphics_182 = new cjs.Graphics().p("EAIjAg4Ql2ldgSn/QgSoAFcl2QFdl2IAgSMABYAmkIgzABQnfAAlllLg");
	var mask_1_graphics_183 = new cjs.Graphics().p("EAIrAhOQl/lUggn+Qgfn/FSl/QFTl/H/ggMACZAmiQgsACgrAAQnJAAlfk1g");
	var mask_1_graphics_184 = new cjs.Graphics().p("EAI0AhjQmIlJgtn9Qgun/FImHQFJmJH+gtMADaAmdQg9AGg8AAQm0AAlZkhg");
	var mask_1_graphics_185 = new cjs.Graphics().p("EAI9Ah4QmRk/g6n8Qg7n9E+mQQE+mSH8g5MAEcAmWQhQAJhMAAQmfAAlTkMg");
	var mask_1_graphics_186 = new cjs.Graphics().p("EAJHAiMQmZk1hIn6QhIn7EzmZQEzmZH7hHMAFcAmNQhhAOhcAAQmMAAlLj4g");
	var mask_1_graphics_187 = new cjs.Graphics().p("EAJRAifQmhkqhVn4QhWn5EomgQEpmiH5hVMAGcAmEQhxAThtAAQl4AAlEjlg");
	var mask_1_graphics_188 = new cjs.Graphics().p("EAJcAixQmpkfhin1Qhin3EcmoQEempH2hiMAHcAl4QiBAZh8AAQlnAAk7jTg");
	var mask_1_graphics_189 = new cjs.Graphics().p("EAJnAjDQmwkUhwnyQhvn0ERmwQETmwHzhvMAIcAlqQiRAhiLAAQlVAAkzjCg");
	var mask_1_graphics_190 = new cjs.Graphics().p("EAJzAjTQm3kHh9nwQh8nwEFm3QEHm4Hwh9MAJcAlcQigApibAAQlDAAkqiyg");
	var mask_1_graphics_191 = new cjs.Graphics().p("EAJ/AjkQm9j8iKnsQiJnuD5m9QD7m/HtiKMAKbAlMQiwAxipAAQkzAAkgihg");
	var mask_1_graphics_192 = new cjs.Graphics().p("EAKNAjzQnFjwiXnoQiWnqDunDQDvnGHpiXMALZAk6Qi9A6i4AAQkjAAkViSg");
	var mask_1_graphics_193 = new cjs.Graphics().p("EAKaAkCQnKjkiknkQijnlDinKQDjnMHlikMAMXAkmQjMBEjHAAQkTAAkKiDg");
	var mask_1_graphics_194 = new cjs.Graphics().p("EAKoAkQQnQjYixngQivngDVnQQDXnRHhixMANUAkQQjZBPjWAAQkDAAj/h1g");
	var mask_1_graphics_195 = new cjs.Graphics().p("EAK3AkdQnWjLi9nbQi8ncDJnVQDLnXHbi9MAORAj4QjmBbjkAAQj0AAjzhog");
	var mask_1_graphics_196 = new cjs.Graphics().p("EALGAkqQnbi/jKnWQjInXC8naQC/ncHWjKMAPNAjfQjyBoj0AAQjlAAjmhbg");
	var mask_1_graphics_197 = new cjs.Graphics().p("EALVAk1QngiyjVnQQjVnRCxngQCwngHRjWMAQJAjEQj+B1kDAAQjWAAjahQg");
	var mask_1_graphics_198 = new cjs.Graphics().p("EALlAlAQnkiljinLQjhnLCknkQCknlHLjiMAREAioQkKCDkTAAQjHAAjMhFg");
	var mask_1_graphics_199 = new cjs.Graphics().p("EAL2AlLQnpiZjunFQjtnFCYnoQCXnpHFjuMAR+AiLQkVCRkjAAQi4AAi+g6g");
	var mask_1_graphics_200 = new cjs.Graphics().p("EAMHAlUQntiMj5m+Qj6m/CLnrQCKnuG/j6MAS3AhsQkfChkzAAQiqAAivgxg");
	var mask_1_graphics_201 = new cjs.Graphics().p("EAMYAldQnwh/kFm4QkFm4B+nvQB9nwG3kGMATwAhLQkpCxlDAAQibAAihgog");
	var mask_1_graphics_202 = new cjs.Graphics().p("EAMqAlkQnzhykRmwQkQmxBwnyQBxn0GwkRMAUnAgpQkzDClUAAQiMAAiRghg");
	var mask_1_graphics_203 = new cjs.Graphics().p("EAM9AlrQn3hkkcmpQkbmqBjn1QBkn2GokdMAVeAgGQk8DTlmAAQh8AAiBgag");
	var mask_1_graphics_204 = new cjs.Graphics().p("EANPAlxQn4hXkomhQkmmiBWn4QBWn5GgknIWUfgQlEDll4ABQhtAAhxgUg");
	var mask_1_graphics_205 = new cjs.Graphics().p("EANiAl3Qn6hKkzmaQkxmZBIn6QBJn7GZkzIXIe6QlLD4mLAAQhdAAhhgNg");
	var mask_1_graphics_206 = new cjs.Graphics().p("EAN2Al7Qn9g9k9mRQk8mRA7n8QA8n9GQk9IX8eTQlSELmfAAQhNAAhPgJg");
	var mask_1_graphics_207 = new cjs.Graphics().p("EAOKAl+Qn+gvlImIQlHmJAun9QAvn+GHlIIYvdpQlZEgmzAAQg8AAg+gGg");
	var mask_1_graphics_208 = new cjs.Graphics().p("EAOeAmBQn/gilSl/QlRmBAhn+QAgn/F/lSIZgc/QleE1nJAAQgrAAgsgDg");
	var mask_1_graphics_209 = new cjs.Graphics().p("EAOyAmDQn/gUlcl3Qlbl3ATn/QAToAF2lcIaQcTQlkFLnfAAIgzgBg");
	var mask_1_graphics_210 = new cjs.Graphics().p("EAPHAmEQoAgHllltQllluAFn/QAGoBFtllIa/bmQloFhn3AAIgOAAg");
	var mask_1_graphics_211 = new cjs.Graphics().p("EABtAgnQlullgIn/QgIoAFjlvIbua4QlkFvoAAJIgTAAQn0AAloldg");
	var mask_1_graphics_212 = new cjs.Graphics().p("EAB6Ag9Ql4lbgVn+QgWoAFal4IcaaIQlaF5n/AWIg5ABQncAAljlHg");
	var mask_1_graphics_213 = new cjs.Graphics().p("EACHAhTQmAlRgjn+Qgjn/FPmBIdGZYQlQGBn/AkQguADguAAQnGAAlekxg");
	var mask_1_graphics_214 = new cjs.Graphics().p("EACWAhnQmKlGgwn8Qgwn+FGmLIdvYnQlGGKn9AxQhBAGg/AAQmwAAlYkdg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(111).to({graphics:mask_1_graphics_111,x:203.2,y:197.9}).wait(1).to({graphics:mask_1_graphics_112,x:203.1,y:196.3}).wait(1).to({graphics:mask_1_graphics_113,x:203.1,y:194.7}).wait(1).to({graphics:mask_1_graphics_114,x:203.1,y:193.1}).wait(1).to({graphics:mask_1_graphics_115,x:203.1,y:191.5}).wait(1).to({graphics:mask_1_graphics_116,x:203.1,y:189.9}).wait(1).to({graphics:mask_1_graphics_117,x:203,y:188.3}).wait(1).to({graphics:mask_1_graphics_118,x:203,y:186.7}).wait(1).to({graphics:mask_1_graphics_119,x:203,y:185}).wait(1).to({graphics:mask_1_graphics_120,x:203,y:183.4}).wait(1).to({graphics:mask_1_graphics_121,x:203,y:181.8}).wait(1).to({graphics:mask_1_graphics_122,x:203,y:183}).wait(1).to({graphics:mask_1_graphics_123,x:202.9,y:184.7}).wait(1).to({graphics:mask_1_graphics_124,x:202.8,y:186.3}).wait(1).to({graphics:mask_1_graphics_125,x:202.7,y:187.9}).wait(1).to({graphics:mask_1_graphics_126,x:202.5,y:189.6}).wait(1).to({graphics:mask_1_graphics_127,x:202.2,y:191.2}).wait(1).to({graphics:mask_1_graphics_128,x:202,y:192.8}).wait(1).to({graphics:mask_1_graphics_129,x:201.6,y:194.4}).wait(1).to({graphics:mask_1_graphics_130,x:201.3,y:196}).wait(1).to({graphics:mask_1_graphics_131,x:200.9,y:197.6}).wait(1).to({graphics:mask_1_graphics_132,x:200.4,y:199.1}).wait(1).to({graphics:mask_1_graphics_133,x:199.9,y:200.7}).wait(1).to({graphics:mask_1_graphics_134,x:199.4,y:202.2}).wait(1).to({graphics:mask_1_graphics_135,x:198.9,y:203.8}).wait(1).to({graphics:mask_1_graphics_136,x:198.3,y:205.3}).wait(1).to({graphics:mask_1_graphics_137,x:197.6,y:206.8}).wait(1).to({graphics:mask_1_graphics_138,x:196.9,y:208.3}).wait(1).to({graphics:mask_1_graphics_139,x:196.2,y:209.7}).wait(1).to({graphics:mask_1_graphics_140,x:195.4,y:211.2}).wait(1).to({graphics:mask_1_graphics_141,x:194.6,y:212.6}).wait(1).to({graphics:mask_1_graphics_142,x:193.8,y:214}).wait(1).to({graphics:mask_1_graphics_143,x:192.9,y:215.4}).wait(1).to({graphics:mask_1_graphics_144,x:192,y:216.7}).wait(1).to({graphics:mask_1_graphics_145,x:191.1,y:218.1}).wait(1).to({graphics:mask_1_graphics_146,x:190.1,y:219.4}).wait(1).to({graphics:mask_1_graphics_147,x:189.1,y:220.7}).wait(1).to({graphics:mask_1_graphics_148,x:188,y:221.9}).wait(1).to({graphics:mask_1_graphics_149,x:187,y:223.1}).wait(1).to({graphics:mask_1_graphics_150,x:185.8,y:224.3}).wait(1).to({graphics:mask_1_graphics_151,x:184.7,y:225.5}).wait(1).to({graphics:mask_1_graphics_152,x:183.5,y:226.6}).wait(1).to({graphics:mask_1_graphics_153,x:182.3,y:227.7}).wait(1).to({graphics:mask_1_graphics_154,x:181.1,y:228.8}).wait(1).to({graphics:mask_1_graphics_155,x:179.8,y:229.9}).wait(1).to({graphics:mask_1_graphics_156,x:178.6,y:230.9}).wait(1).to({graphics:mask_1_graphics_157,x:177.2,y:231.8}).wait(1).to({graphics:mask_1_graphics_158,x:175.9,y:232.8}).wait(1).to({graphics:mask_1_graphics_159,x:174.5,y:233.7}).wait(1).to({graphics:mask_1_graphics_160,x:173.2,y:234.5}).wait(1).to({graphics:mask_1_graphics_161,x:171.8,y:235.4}).wait(1).to({graphics:mask_1_graphics_162,x:170.3,y:236.2}).wait(1).to({graphics:mask_1_graphics_163,x:168.9,y:236.9}).wait(1).to({graphics:mask_1_graphics_164,x:167.4,y:237.6}).wait(1).to({graphics:mask_1_graphics_165,x:165.9,y:238.3}).wait(1).to({graphics:mask_1_graphics_166,x:164.4,y:238.9}).wait(1).to({graphics:mask_1_graphics_167,x:162.9,y:239.5}).wait(1).to({graphics:mask_1_graphics_168,x:161.4,y:240.1}).wait(1).to({graphics:mask_1_graphics_169,x:159.8,y:240.6}).wait(1).to({graphics:mask_1_graphics_170,x:158.3,y:241.1}).wait(1).to({graphics:mask_1_graphics_171,x:156.7,y:241.5}).wait(1).to({graphics:mask_1_graphics_172,x:155.1,y:241.9}).wait(1).to({graphics:mask_1_graphics_173,x:153.5,y:242.3}).wait(1).to({graphics:mask_1_graphics_174,x:151.9,y:242.6}).wait(1).to({graphics:mask_1_graphics_175,x:150.3,y:242.8}).wait(1).to({graphics:mask_1_graphics_176,x:148.7,y:243.1}).wait(1).to({graphics:mask_1_graphics_177,x:147.1,y:243.2}).wait(1).to({graphics:mask_1_graphics_178,x:145.5,y:243.4}).wait(1).to({graphics:mask_1_graphics_179,x:143.9,y:243.5}).wait(1).to({graphics:mask_1_graphics_180,x:142.2,y:243.5}).wait(1).to({graphics:mask_1_graphics_181,x:141.7,y:243.5}).wait(1).to({graphics:mask_1_graphics_182,x:143.4,y:243.5}).wait(1).to({graphics:mask_1_graphics_183,x:145,y:243.5}).wait(1).to({graphics:mask_1_graphics_184,x:146.6,y:243.6}).wait(1).to({graphics:mask_1_graphics_185,x:148.3,y:243.6}).wait(1).to({graphics:mask_1_graphics_186,x:149.9,y:243.6}).wait(1).to({graphics:mask_1_graphics_187,x:151.5,y:243.6}).wait(1).to({graphics:mask_1_graphics_188,x:153.1,y:243.6}).wait(1).to({graphics:mask_1_graphics_189,x:154.7,y:243.7}).wait(1).to({graphics:mask_1_graphics_190,x:156.3,y:243.7}).wait(1).to({graphics:mask_1_graphics_191,x:157.9,y:243.7}).wait(1).to({graphics:mask_1_graphics_192,x:159.4,y:243.7}).wait(1).to({graphics:mask_1_graphics_193,x:161,y:243.7}).wait(1).to({graphics:mask_1_graphics_194,x:162.5,y:243.7}).wait(1).to({graphics:mask_1_graphics_195,x:164,y:243.7}).wait(1).to({graphics:mask_1_graphics_196,x:165.5,y:243.7}).wait(1).to({graphics:mask_1_graphics_197,x:167,y:243.7}).wait(1).to({graphics:mask_1_graphics_198,x:168.5,y:243.7}).wait(1).to({graphics:mask_1_graphics_199,x:170,y:243.7}).wait(1).to({graphics:mask_1_graphics_200,x:171.4,y:243.7}).wait(1).to({graphics:mask_1_graphics_201,x:172.8,y:243.7}).wait(1).to({graphics:mask_1_graphics_202,x:174.2,y:243.7}).wait(1).to({graphics:mask_1_graphics_203,x:175.6,y:243.7}).wait(1).to({graphics:mask_1_graphics_204,x:176.9,y:243.7}).wait(1).to({graphics:mask_1_graphics_205,x:178.2,y:243.6}).wait(1).to({graphics:mask_1_graphics_206,x:179.5,y:243.6}).wait(1).to({graphics:mask_1_graphics_207,x:180.8,y:243.6}).wait(1).to({graphics:mask_1_graphics_208,x:182,y:243.6}).wait(1).to({graphics:mask_1_graphics_209,x:183.2,y:243.6}).wait(1).to({graphics:mask_1_graphics_210,x:184.4,y:243.6}).wait(1).to({graphics:mask_1_graphics_211,x:185.6,y:243.6}).wait(1).to({graphics:mask_1_graphics_212,x:186.7,y:243.6}).wait(1).to({graphics:mask_1_graphics_213,x:187.8,y:243.6}).wait(1).to({graphics:mask_1_graphics_214,x:188.9,y:243.6}).wait(257));

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,0,1).p("Ar7gNQABhAAJg8QAmjxCvi3QDgjoE8AAQE8AADgDoQDgDpAAFIQAAFJjgDpQjgDok8AAQk8AAjgjoQh0h5g4iU");
	this.shape_3.setTransform(275.3,365.8,1,1,0,0,180);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(111).to({_off:false},0).wait(360));

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_9 = new cjs.Graphics().p("EgBQAgbQlrlrAAoBMAmrAAAQAAIBlqFrQlsFqoAAAQoBAAlplqg");
	var mask_2_graphics_10 = new cjs.Graphics().p("EgA3AgzQl1lhgOoAMAmpgBGQAPIBlgF1QlhF0oAAOIgoABQnnAAlllSg");
	var mask_2_graphics_11 = new cjs.Graphics().p("EgAdAhKQl/lWgdn/MAmngCMQAdIAlVF/QlXF+n/AdQgoACgnAAQnPAAlfk7g");
	var mask_2_graphics_12 = new cjs.Graphics().p("EgADAhhQmIlLgsn/MAmigDRQArH/lKGIQlLGIn+ArQg8AFg5AAQm4AAlZkkg");
	var mask_2_graphics_13 = new cjs.Graphics().p("EAAXAh3QmRlAg5n9MAmagEXQA6H+k/GRQlAGRn9A5QhOAJhMAAQmhAAlTkOg");
	var mask_2_graphics_14 = new cjs.Graphics().p("EAAyAiMQmZk0hIn8MAmSgFbQBIH7k0GaQk1Gan7BIQhgANhdAAQmMAAlMj5g");
	var mask_2_graphics_15 = new cjs.Graphics().p("EABOAigQmikohWn5MAmHgGhQBXH5koGjQkqGin4BWQhyAThuAAQl4AAlEjlg");
	var mask_2_graphics_16 = new cjs.Graphics().p("EABrAi0Qmqkdhln2MAl7gHmQBkH3kcGrQkdGqn2BkQiEAbh+AAQllAAk6jSg");
	var mask_2_graphics_17 = new cjs.Graphics().p("EACIAjHQmykRhyn0MAlrgIpQBzH0kQGyQkRGynzBzQiVAiiOAAQlSAAkxi/g");
	var mask_2_graphics_18 = new cjs.Graphics().p("EACmAjYQm6kEiAnwMAlbgJtQCAHwkDG6QkFG6nwCAQikArifAAQk/AAkniug");
	var mask_2_graphics_19 = new cjs.Graphics().p("EADEAjqQnBj4iOnsMAlIgKxQCPHsj3HCQj4HBnsCOQi0A0ivAAQkuAAkcicg");
	var mask_2_graphics_20 = new cjs.Graphics().p("EADjAj6QnIjricnoMAk0gLzQCcHojqHIQjrHHnoCdQjDA+i/AAQkdAAkQiMg");
	var mask_2_graphics_21 = new cjs.Graphics().p("EAECAkJQnOjeiqnjMAkegM2QCqHkjdHOQjfHOnjCqQjSBKjOAAQkMAAkFh9g");
	var mask_2_graphics_22 = new cjs.Graphics().p("EAEhAkYQnUjRi3nfMAkGgN2QC3HejQHVQjRHUneC3QjhBWjeAAQj7AAj5hug");
	var mask_2_graphics_23 = new cjs.Graphics().p("EAFBAklQnZjDjFnZMAjsgO4QDFHZjDHaQjEHanZDFQjuBjjuAAQjrAAjshhg");
	var mask_2_graphics_24 = new cjs.Graphics().p("EAFiAkyQnfi2jSnTMAjQgP4QDSHUi1HfQi3HfnTDSQj7Bxj+AAQjbAAjehUg");
	var mask_2_graphics_25 = new cjs.Graphics().p("EAGDAk+QnkiojfnOMAiygQ2QDgHNioHkQipHknNDgQkIB/kOAAQjMAAjPhIg");
	var mask_2_graphics_26 = new cjs.Graphics().p("EAGkAlJQnpibjsnGMAiUgR1QDsHGiaHpQicHpnGDsQkTCPkgAAQi7AAjBg9g");
	var mask_2_graphics_27 = new cjs.Graphics().p("EAHFAlTQnsiNj5nAMAhygSyQD5HAiMHtQiOHtm/D5QkfCfkwAAQisAAiygzg");
	var mask_2_graphics_28 = new cjs.Graphics().p("EAHnAlcQnwh/kGm4MAhQgTvQEGG4h/HxQh/Hxm5EFQkpCxlCAAQicAAiigqg");
	var mask_2_graphics_29 = new cjs.Graphics().p("EAIJAllQn0hxkRmxMAgrgUrQESGxhwH1QhyH0mxERQkzDClUAAQiMAAiSggg");
	var mask_2_graphics_30 = new cjs.Graphics().p("EAIsAlsQn4hjkdmpMAgFgVlQEeGphiH4QhjH3mpEdQk9DVlnAAQh8AAiAgZg");
	var mask_2_graphics_31 = new cjs.Graphics().p("EAJOAlyQn6hUkpmhIfe2eQEpGhhTH5QhWH6mgEqQlGDol6AAQhsAAhvgTg");
	var mask_2_graphics_32 = new cjs.Graphics().p("EAJxAl4Qn9hGk0mZIe03WQE1GYhFH8QhHH8mYE1QlOD9mOAAQhbAAhdgNg");
	var mask_2_graphics_33 = new cjs.Graphics().p("EAKUAl8Qn/g4k/mPIeJ4OQFBGQg3H+Qg5H9mQFBQlUERmkAAQhJAAhLgIg");
	var mask_2_graphics_34 = new cjs.Graphics().p("EAK3AmAQoAgqlLmGIdd5DQFMGGgpH/QgqH/mGFMQlcEnm6AAQg3AAg4gEg");
	var mask_2_graphics_35 = new cjs.Graphics().p("EALaAmCQoBgblWl9Icv53QFXF9gbH/QgcIBl8FWQliE+nRAAQgkAAglgCg");
	var mask_2_graphics_36 = new cjs.Graphics().p("EAL8AmDQoBgMlglzIb/6rQFiFzgMIBQgOIAlyFhQlnFWnqAAIgjgBg");
	var mask_2_graphics_37 = new cjs.Graphics().p("EgBNAgdIbP7dQFsFpACIBQABIBlpFrQlpFsoAACIgFAAQn+AAlplng");
	var mask_2_graphics_38 = new cjs.Graphics().p("EgAzAg1Iac8NQF2FfARIAQAPIAleF2QlfF2oAAQIgtABQnkAAlklPg");
	var mask_2_graphics_39 = new cjs.Graphics().p("EgAaAhMIZp88QF/FUAgIAQAeIAlUF/QlUGAn/AeQgrADgpAAQnMAAlfk4g");
	var mask_2_graphics_40 = new cjs.Graphics().p("EAAAAhjIY09qQGJFJAuH/QAsH/lIGIQlKGJn9AuQg+AFg8AAQm1AAlZkhg");
	var mask_2_graphics_41 = new cjs.Graphics().p("EAAaAh5IX/+WQGSE+A8H9QA7H9k9GSQk+GSn9A8QhQAJhOAAQmfAAlTkLg");
	var mask_2_graphics_42 = new cjs.Graphics().p("EAA2AiOIXH/AQGbEyBLH7QBJH8kyGaQkzGbn6BKQhjAOhfAAQmKAAlLj2g");
	var mask_2_graphics_43 = new cjs.Graphics().p("EABSAiiIWP/pQGjEnBZH4QBXH6kmGjQknGjn4BYQh1AVhwAAQl1AAlDjjg");
	var mask_2_graphics_44 = new cjs.Graphics().p("EABvAi1MAVVggQQGrEbBnH2QBmH3kbGrQkbGrn1BmQiGAciAAAQljAAk5jQg");
	var mask_2_graphics_45 = new cjs.Graphics().p("EACMAjIMAUagg2QG0EPB1HzQBzHzkOGzQkPGznyB1QiXAjiQAAQlQAAkwi9g");
	var mask_2_graphics_46 = new cjs.Graphics().p("EACqAjaMATeghaQG7ECCDHvQCCHxkCG6QkDG7nvCCQimAsihAAQk+AAklirg");
	var mask_2_graphics_47 = new cjs.Graphics().p("EADIAjrMASigh8QHCD1CRHsQCPHsj1HBQj2HCnrCRQi3A1iwAAQksAAkbiag");
	var mask_2_graphics_48 = new cjs.Graphics().p("EADnAj7MARkgidQHIDpCfHnQCdHojoHIQjpHJnnCeQjGBAjAAAQkbAAkPiKg");
	var mask_2_graphics_49 = new cjs.Graphics().p("EAEGAkKMAQmgi7QHODbCtHjQCrHkjcHOQjcHPniCsQjUBLjRAAQkKAAkDh7g");
	var mask_2_graphics_50 = new cjs.Graphics().p("EAElAkYMAPngjYQHVDPC6HdQC4HfjOHUQjPHVndC5QjjBYjgAAQj6AAj3htg");
	var mask_2_graphics_51 = new cjs.Graphics().p("EAFGAkmMAOmgj0QHaDCDIHYQDFHZjBHaQjBHbnYDGQjwBljwAAQjqAAjphfg");
	var mask_2_graphics_52 = new cjs.Graphics().p("EAFmAkzMANlgkNQHgC0DVHSQDTHTi0HfQi0HhnSDTQj9BzkAAAQjaAAjchSg");
	var mask_2_graphics_53 = new cjs.Graphics().p("EAGHAk+MAMjgkkQHlCmDiHMQDgHOimHkQinHlnLDgQkKCCkRAAQjJAAjOhHg");
	var mask_2_graphics_54 = new cjs.Graphics().p("EAGoAlJMALhgk6QHpCZDvHFQDtHHiYHpQiZHpnFDuQkVCRkiAAQi6AAi/g8g");
	var mask_2_graphics_55 = new cjs.Graphics().p("EAHKAlTMAKeglOQHtCLD8G/QD5HAiKHsQiLHum/D6QkgCikzAAQiqAAivgyg");
	var mask_2_graphics_56 = new cjs.Graphics().p("EAHsAldMAJbglfQHwB7EIG4QEHG4h9HxQh9Hxm3EHQkrCzlFAAQiaAAifgog");
	var mask_2_graphics_57 = new cjs.Graphics().p("EAIOAllMAIXglvQH0BtEUGwQETGxhvH0QhvH1mvETQk1DElXAAQiKAAiPgfg");
	var mask_2_graphics_58 = new cjs.Graphics().p("EAIwAlsMAHTgl9QH3BfEgGoQEfGphhH3QhgH4moEfQk+DXlqAAQh5AAh/gYg");
	var mask_2_graphics_59 = new cjs.Graphics().p("EAJTAlyMAGOgmJQH5BREsGgQErGhhSH5QhTH6mfErQlHDrl9AAQhpAAhtgSg");
	var mask_2_graphics_60 = new cjs.Graphics().p("EAJ1Al3MAFJgmTQH8BDE4GXQE2GYhEH8QhEH8mXE2QlPEAmSAAQhYAAhbgNg");
	var mask_2_graphics_61 = new cjs.Graphics().p("EAKYAl8MAEEgmcQH+A1FCGOQFCGPg2H9Qg2H+mNFCQlWEUmoAAQhGAAhJgHg");
	var mask_2_graphics_62 = new cjs.Graphics().p("EAK7Al/MAC/gmiQH+AmFOGFQFNGGgnH/QgoH/mFFNQlcEqm9AAQg1AAg2gEg");
	var mask_2_graphics_63 = new cjs.Graphics().p("EALeAmBMAB5gmmQIAAZFYF6QFYF9gZH/QgZIAl7FYQljFBnUAAQgiAAgjgCg");
	var mask_2_graphics_64 = new cjs.Graphics().p("EAMBAmDMAAzgmpQIAAKFkFxQFiFygLIAQgKIBlyFiQlnFZnuAAIgdAAg");
	var mask_2_graphics_65 = new cjs.Graphics().p("AMRgmQIAgEFuFmQFtFoADIAQAEIBlnFtQloFtoAAEg");
	var mask_2_graphics_66 = new cjs.Graphics().p("ALuglQIAgTF4FcQF2FeATIAQASIAldF3QleF3n/ASg");
	var mask_2_graphics_67 = new cjs.Graphics().p("ALLgjQIAggGBFRQGAFTAhH/QAgH/lSGBQlTGBn/Ahg");
	var mask_2_graphics_68 = new cjs.Graphics().p("AKogfQH+gvGLFGQGKFJAvH9QAvH/lHGJQlIGLn+Avg");
	var mask_2_graphics_69 = new cjs.Graphics().p("AKGgZQH8g+GUE7QGSE9A+H9QA9H9k8GSQk8GUn9A9g");
	var mask_2_graphics_70 = new cjs.Graphics().p("AJjgSQH6hMGdEvQGbEyBMH6QBMH7kxGcQkxGcn6BMg");
	var mask_2_graphics_71 = new cjs.Graphics().p("AJAgKQH4haGlEkQGkEmBaH4QBaH4klGkQklGln4Bag");
	var mask_2_graphics_72 = new cjs.Graphics().p("AIeAAQH1hoGtEYQGsEaBoH1QBoH2kYGsQkaGtn1Bog");
	var mask_2_graphics_73 = new cjs.Graphics().p("AH7ALQHzh2G0EMQG0EOB2HyQB3HykNG0QkNG1nyB2g");
	var mask_2_graphics_74 = new cjs.Graphics().p("AHZAXQHviDG8D/QG8ECCEHuQCEHvkAG7QkBG8nvCFg");
	var mask_2_graphics_75 = new cjs.Graphics().p("AG4AmQHriSHDDzQHCD1CSHqQCSHsjzHCQj1HDnqCSg");
	var mask_2_graphics_76 = new cjs.Graphics().p("AGWA1QHnifHJDmQHKDoCfHmQCgHnjmHJQjoHKnmCgg");
	var mask_2_graphics_77 = new cjs.Graphics().p("AF1BGQHiisHQDYQHQDbCtHiQCuHijaHPQjbHQnhCug");
	var mask_2_graphics_78 = new cjs.Graphics().p("AFUBZQHdi6HWDLQHWDOC7HcQC7HejNHVQjNHWndC7g");
	var mask_2_graphics_79 = new cjs.Graphics().p("AE0BsQHYjHHbC+QHbDBDIHXQDJHXi/HbQjAHcnYDIg");
	var mask_2_graphics_80 = new cjs.Graphics().p("AEUCCQHSjVHgCwQHhC0DVHRQDWHSiyHfQiyHinSDVg");
	var mask_2_graphics_81 = new cjs.Graphics().p("AD1CYQHLjiHmCjQHlCmDiHLQDjHMikHkQilHmnLDjg");
	var mask_2_graphics_82 = new cjs.Graphics().p("ADWCwQHFjvHqCVQHpCYDvHFQDwHFiWHpQiXHqnFDwg");
	var mask_2_graphics_83 = new cjs.Graphics().p("AC3DJQG+j7HuCHQHuCKD8G9QD8G/iIHtQiKHum9D8g");
	var mask_2_graphics_84 = new cjs.Graphics().p("ACaDjQG2kHHyB5QHxB8EIG2QEJG3h7HxQh7Hym2EIg");
	var mask_2_graphics_85 = new cjs.Graphics().p("AB8D/QGvkUH1BrQH0BuEVGvQEVGvhtH0QhtH1muEVg");
	var mask_2_graphics_86 = new cjs.Graphics().p("ABfEcQGnkgH4BdQH3BgEhGmQEhGoheH2QhfH5mnEhg");
	var mask_2_graphics_87 = new cjs.Graphics().p("ABDE6QGektH7BQQH6BSEsGeQEtGfhQH5QhRH7mfEtg");
	var mask_2_graphics_88 = new cjs.Graphics().p("AAnFZQGWk4H8BCQH8BDE4GVQE5GXhCH7QhCH9mWE4g");
	var mask_2_graphics_89 = new cjs.Graphics().p("AAMF6QGNlEH+AzQH+A1FDGNQFEGNg0H9Qg0H/mNFDg");
	var mask_2_graphics_90 = new cjs.Graphics().p("AgOGbQGDlOH/AkQH/AnFPGDQFPGFgmH+QglH/mEFPg");
	var mask_2_graphics_91 = new cjs.Graphics().p("AgnG+QF5lZH/AWQIBAYFZF6QFZF6gXIAQgXIAl6FZg");
	var mask_2_graphics_92 = new cjs.Graphics().p("AhBHiQFvlkIBAIQIAAKFkFvQFkFxgJIAQgIIBlwFkg");
	var mask_2_graphics_93 = new cjs.Graphics().p("AhaIHQFmluIAgHQIAgFFuFmQFvFmAGIAQAFIBlmFug");
	var mask_2_graphics_94 = new cjs.Graphics().p("AhyItQFbl5IAgUQIAgUF4FcQF4FcAVH/QAUIAlcF5g");
	var mask_2_graphics_95 = new cjs.Graphics().p("AiJJUQFQmCH/gkQH/ghGCFQQGCFSAjH+QAiIAlRGCg");
	var mask_2_graphics_96 = new cjs.Graphics().p("AigJ7QFFmLH+gxQH+gwGLFFQGMFGAwH+QAyH+lGGLg");
	var mask_2_graphics_97 = new cjs.Graphics().p("Ai2KkQE6mUH8hAQH9g+GUE6QGUE7A/H7QBAH+k7GUg");
	var mask_2_graphics_98 = new cjs.Graphics().p("AjLLOQEumdH6hOQH7hNGdEvQGdEvBNH6QBOH7kvGdg");
	var mask_2_graphics_99 = new cjs.Graphics().p("AjfL4QEimlH4hcQH4hbGlEjQGmEjBbH4QBcH4kjGmg");
	var mask_2_graphics_100 = new cjs.Graphics().p("AjzMkQEWmtH1hrQH2hpGtEXQGtEXBqH1QBrH2kYGtg");
	var mask_2_graphics_101 = new cjs.Graphics().p("AkGNQQEKm1Hyh5QHzh3G0ELQG1ELB4HyQB5HykLG1g");
	var mask_2_graphics_102 = new cjs.Graphics().p("AkYN9QD/m8HtiHQHviFG8D+QG9D/CGHuQCGHvj/G8g");
	var mask_2_graphics_103 = new cjs.Graphics().p("AkpOrQDynDHpiVQHriTHDDyQHEDyCUHqQCUHrjyHDg");
	var mask_2_graphics_104 = new cjs.Graphics().p("Ak5PZQDlnKHliiQHnihHJDlQHLDmChHlQCiHnjlHKg");
	var mask_2_graphics_105 = new cjs.Graphics().p("AlIQIQDYnQHgiwQHiiuHQDYQHQDYCvHhQCwHijYHQg");
	var mask_2_graphics_106 = new cjs.Graphics().p("AlXQ4QDLnWHbi+QHdi8HWDLQHWDMC9HbQC9HdjLHWg");
	var mask_2_graphics_107 = new cjs.Graphics().p("AlkRoQC+nbHVjLQHXjJHcC9QHcC+DKHWQDKHXi+Hcg");
	var mask_2_graphics_108 = new cjs.Graphics().p("AlxSZQCxnhHPjYQHSjWHgCwQHhCwDXHQQDYHSiwHhg");
	var mask_2_graphics_109 = new cjs.Graphics().p("Al8TLQCjnmHJjlQHLjkHlCjQHmCjDkHKQDlHLijHlg");
	var mask_2_graphics_110 = new cjs.Graphics().p("AmHT8QCVnqHDjxQHFjxHpCVQHqCVDxHDQDyHFiVHqg");
	var mask_2_graphics_111 = new cjs.Graphics().p("AmQUvQCHnuG8j/QG9j9HuCHQHuCHD+G8QD+G+iHHug");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_2_graphics_9,x:203.2,y:243.7}).wait(1).to({graphics:mask_2_graphics_10,x:203.2,y:243.7}).wait(1).to({graphics:mask_2_graphics_11,x:203.2,y:243.7}).wait(1).to({graphics:mask_2_graphics_12,x:203.2,y:243.7}).wait(1).to({graphics:mask_2_graphics_13,x:203.2,y:243.7}).wait(1).to({graphics:mask_2_graphics_14,x:203.3,y:243.7}).wait(1).to({graphics:mask_2_graphics_15,x:203.3,y:243.7}).wait(1).to({graphics:mask_2_graphics_16,x:203.3,y:243.8}).wait(1).to({graphics:mask_2_graphics_17,x:203.3,y:243.8}).wait(1).to({graphics:mask_2_graphics_18,x:203.3,y:243.8}).wait(1).to({graphics:mask_2_graphics_19,x:203.4,y:243.8}).wait(1).to({graphics:mask_2_graphics_20,x:203.4,y:243.8}).wait(1).to({graphics:mask_2_graphics_21,x:203.4,y:243.8}).wait(1).to({graphics:mask_2_graphics_22,x:203.4,y:243.8}).wait(1).to({graphics:mask_2_graphics_23,x:203.4,y:243.8}).wait(1).to({graphics:mask_2_graphics_24,x:203.4,y:243.8}).wait(1).to({graphics:mask_2_graphics_25,x:203.4,y:243.8}).wait(1).to({graphics:mask_2_graphics_26,x:203.4,y:243.8}).wait(1).to({graphics:mask_2_graphics_27,x:203.4,y:243.8}).wait(1).to({graphics:mask_2_graphics_28,x:203.4,y:243.8}).wait(1).to({graphics:mask_2_graphics_29,x:203.3,y:243.7}).wait(1).to({graphics:mask_2_graphics_30,x:203.3,y:243.7}).wait(1).to({graphics:mask_2_graphics_31,x:203.3,y:243.7}).wait(1).to({graphics:mask_2_graphics_32,x:203.3,y:243.7}).wait(1).to({graphics:mask_2_graphics_33,x:203.3,y:243.6}).wait(1).to({graphics:mask_2_graphics_34,x:203.2,y:243.6}).wait(1).to({graphics:mask_2_graphics_35,x:203.2,y:243.6}).wait(1).to({graphics:mask_2_graphics_36,x:203.2,y:243.6}).wait(1).to({graphics:mask_2_graphics_37,x:203.2,y:243.6}).wait(1).to({graphics:mask_2_graphics_38,x:203.2,y:243.6}).wait(1).to({graphics:mask_2_graphics_39,x:203.2,y:243.6}).wait(1).to({graphics:mask_2_graphics_40,x:203.2,y:243.6}).wait(1).to({graphics:mask_2_graphics_41,x:203.3,y:243.6}).wait(1).to({graphics:mask_2_graphics_42,x:203.3,y:243.6}).wait(1).to({graphics:mask_2_graphics_43,x:203.3,y:243.7}).wait(1).to({graphics:mask_2_graphics_44,x:203.3,y:243.7}).wait(1).to({graphics:mask_2_graphics_45,x:203.3,y:243.7}).wait(1).to({graphics:mask_2_graphics_46,x:203.3,y:243.7}).wait(1).to({graphics:mask_2_graphics_47,x:203.4,y:243.7}).wait(1).to({graphics:mask_2_graphics_48,x:203.4,y:243.7}).wait(1).to({graphics:mask_2_graphics_49,x:203.4,y:243.7}).wait(1).to({graphics:mask_2_graphics_50,x:203.4,y:243.7}).wait(1).to({graphics:mask_2_graphics_51,x:203.4,y:243.7}).wait(1).to({graphics:mask_2_graphics_52,x:203.4,y:243.7}).wait(1).to({graphics:mask_2_graphics_53,x:203.4,y:243.7}).wait(1).to({graphics:mask_2_graphics_54,x:203.3,y:243.7}).wait(1).to({graphics:mask_2_graphics_55,x:203.3,y:243.7}).wait(1).to({graphics:mask_2_graphics_56,x:203.3,y:243.7}).wait(1).to({graphics:mask_2_graphics_57,x:203.3,y:243.6}).wait(1).to({graphics:mask_2_graphics_58,x:203.3,y:243.6}).wait(1).to({graphics:mask_2_graphics_59,x:203.2,y:243.6}).wait(1).to({graphics:mask_2_graphics_60,x:203.2,y:243.6}).wait(1).to({graphics:mask_2_graphics_61,x:203.2,y:243.5}).wait(1).to({graphics:mask_2_graphics_62,x:203.2,y:243.5}).wait(1).to({graphics:mask_2_graphics_63,x:203.2,y:243.5}).wait(1).to({graphics:mask_2_graphics_64,x:203.1,y:243.5}).wait(1).to({graphics:mask_2_graphics_65,x:203.1,y:243.5}).wait(1).to({graphics:mask_2_graphics_66,x:203.1,y:243.4}).wait(1).to({graphics:mask_2_graphics_67,x:203.2,y:243.4}).wait(1).to({graphics:mask_2_graphics_68,x:203.2,y:243.2}).wait(1).to({graphics:mask_2_graphics_69,x:203.2,y:243}).wait(1).to({graphics:mask_2_graphics_70,x:203.2,y:242.8}).wait(1).to({graphics:mask_2_graphics_71,x:203.2,y:242.5}).wait(1).to({graphics:mask_2_graphics_72,x:203.2,y:242.2}).wait(1).to({graphics:mask_2_graphics_73,x:203.3,y:241.8}).wait(1).to({graphics:mask_2_graphics_74,x:203.3,y:241.4}).wait(1).to({graphics:mask_2_graphics_75,x:203.3,y:240.9}).wait(1).to({graphics:mask_2_graphics_76,x:203.3,y:240.4}).wait(1).to({graphics:mask_2_graphics_77,x:203.3,y:239.8}).wait(1).to({graphics:mask_2_graphics_78,x:203.3,y:239.2}).wait(1).to({graphics:mask_2_graphics_79,x:203.3,y:238.5}).wait(1).to({graphics:mask_2_graphics_80,x:203.3,y:237.8}).wait(1).to({graphics:mask_2_graphics_81,x:203.3,y:237.1}).wait(1).to({graphics:mask_2_graphics_82,x:203.3,y:236.3}).wait(1).to({graphics:mask_2_graphics_83,x:203.3,y:235.4}).wait(1).to({graphics:mask_2_graphics_84,x:203.2,y:234.5}).wait(1).to({graphics:mask_2_graphics_85,x:203.2,y:233.6}).wait(1).to({graphics:mask_2_graphics_86,x:203.2,y:232.7}).wait(1).to({graphics:mask_2_graphics_87,x:203.2,y:231.7}).wait(1).to({graphics:mask_2_graphics_88,x:203.1,y:230.6}).wait(1).to({graphics:mask_2_graphics_89,x:203.1,y:229.5}).wait(1).to({graphics:mask_2_graphics_90,x:203.1,y:228.4}).wait(1).to({graphics:mask_2_graphics_91,x:203.1,y:227.2}).wait(1).to({graphics:mask_2_graphics_92,x:203.1,y:226.1}).wait(1).to({graphics:mask_2_graphics_93,x:203.1,y:224.8}).wait(1).to({graphics:mask_2_graphics_94,x:203.1,y:223.6}).wait(1).to({graphics:mask_2_graphics_95,x:203.1,y:222.3}).wait(1).to({graphics:mask_2_graphics_96,x:203.1,y:220.9}).wait(1).to({graphics:mask_2_graphics_97,x:203.1,y:219.6}).wait(1).to({graphics:mask_2_graphics_98,x:203.1,y:218.2}).wait(1).to({graphics:mask_2_graphics_99,x:203.1,y:216.8}).wait(1).to({graphics:mask_2_graphics_100,x:203.2,y:215.3}).wait(1).to({graphics:mask_2_graphics_101,x:203.2,y:213.8}).wait(1).to({graphics:mask_2_graphics_102,x:203.2,y:212.3}).wait(1).to({graphics:mask_2_graphics_103,x:203.2,y:210.8}).wait(1).to({graphics:mask_2_graphics_104,x:203.2,y:209.3}).wait(1).to({graphics:mask_2_graphics_105,x:203.2,y:207.7}).wait(1).to({graphics:mask_2_graphics_106,x:203.2,y:206.1}).wait(1).to({graphics:mask_2_graphics_107,x:203.2,y:204.5}).wait(1).to({graphics:mask_2_graphics_108,x:203.2,y:202.9}).wait(1).to({graphics:mask_2_graphics_109,x:203.2,y:201.2}).wait(1).to({graphics:mask_2_graphics_110,x:203.2,y:199.6}).wait(1).to({graphics:mask_2_graphics_111,x:203.2,y:197.9}).wait(360));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("ALlGGQgBhAgJg8Qgmjxivi2Qjgjok8AAQk8AAjgDoQh7CAg3Cb");
	this.shape_4.setTransform(277.6,325.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(25,1,1).p("Ar7GGQABhAAJg8QAmjxCvi2QDgjoE8AAQE8AADgDoQDZDhAHE8");
	this.shape_5.setTransform(275.3,325.4,1,1,0,0,180);

	var maskedShapeInstanceList = [this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4}]},9).to({state:[{t:this.shape_5}]},15).wait(447));

	// Layer 5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(25,1,1).p("AAAgJIAAAT");
	this.shape_6.setTransform(352,107);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(25,1,1).p("AAAAVIAAgq");
	this.shape_7.setTransform(352,108.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(25,1,1).p("AAAAhIAAhB");
	this.shape_8.setTransform(352,109.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(25,1,1).p("AAAAsIAAhX");
	this.shape_9.setTransform(352,110.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(25,1,1).p("AAAA3IAAht");
	this.shape_10.setTransform(352,111.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(25,1,1).p("AAABCIAAiD");
	this.shape_11.setTransform(352,112.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(25,1,1).p("AAABNIAAiZ");
	this.shape_12.setTransform(352,113.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(25,1,1).p("AAABZIAAiw");
	this.shape_13.setTransform(352,114.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(25,1,1).p("AAABkIAAjH");
	this.shape_14.setTransform(352,116);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(25,1,1).p("AAABvIAAjd");
	this.shape_15.setTransform(352,117.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(25,1,1).p("AAAB6IAAjz");
	this.shape_16.setTransform(352,118.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(25,1,1).p("AAACFIAAkJ");
	this.shape_17.setTransform(352,119.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(25,1,1).p("AAACRIAAkh");
	this.shape_18.setTransform(352,120.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(25,1,1).p("AAACcIAAk3");
	this.shape_19.setTransform(352,121.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(25,1,1).p("AAACnIAAlN");
	this.shape_20.setTransform(352,122.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(25,1,1).p("AAACyIAAlj");
	this.shape_21.setTransform(352,123.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(25,1,1).p("AAAC9IAAl5");
	this.shape_22.setTransform(352,124.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(25,1,1).p("AAADIIAAmP");
	this.shape_23.setTransform(352,126.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(25,1,1).p("AAADUIAAmn");
	this.shape_24.setTransform(352,127.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(25,1,1).p("AAADfIAAm9");
	this.shape_25.setTransform(352,128.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(25,1,1).p("AAADqIAAnT");
	this.shape_26.setTransform(352,129.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(25,1,1).p("AAAD1IAAnp");
	this.shape_27.setTransform(352,130.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(25,1,1).p("AAAEAIAAn/");
	this.shape_28.setTransform(352,131.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(25,1,1).p("AAAEMIAAoX");
	this.shape_29.setTransform(352,132.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(25,1,1).p("AAAEXIAAot");
	this.shape_30.setTransform(352,133.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(25,1,1).p("AAAEiIAApD");
	this.shape_31.setTransform(352,135);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(25,1,1).p("AAAEtIAApZ");
	this.shape_32.setTransform(352,136.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(25,1,1).p("AAAE4IAApv");
	this.shape_33.setTransform(352,137.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(25,1,1).p("AAAFDIAAqF");
	this.shape_34.setTransform(352,138.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(25,1,1).p("AAAFPIAAqc");
	this.shape_35.setTransform(352,139.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(25,1,1).p("AAAFaIAAqz");
	this.shape_36.setTransform(352,140.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(25,1,1).p("AAAFlIAArJ");
	this.shape_37.setTransform(352,141.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(25,1,1).p("AAAFwIAArf");
	this.shape_38.setTransform(352,142.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(25,1,1).p("AAAF7IAAr1");
	this.shape_39.setTransform(352,143.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(25,1,1).p("AAAGGIAAsM");
	this.shape_40.setTransform(352,145.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(25,1,1).p("AAAGSIAAsj");
	this.shape_41.setTransform(352,146.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(25,1,1).p("AAAGdIAAs5");
	this.shape_42.setTransform(352,147.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(25,1,1).p("AAAGoIAAtP");
	this.shape_43.setTransform(352,148.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(25,1,1).p("AAAGzIAAtl");
	this.shape_44.setTransform(352,149.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(25,1,1).p("AAAG/IAAt9");
	this.shape_45.setTransform(352,150.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(25,1,1).p("AAAHKIAAuT");
	this.shape_46.setTransform(352,151.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(25,1,1).p("AAAHVIAAup");
	this.shape_47.setTransform(352,152.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(25,1,1).p("AAAHgIAAu/");
	this.shape_48.setTransform(352,154);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(25,1,1).p("AAAHrIAAvV");
	this.shape_49.setTransform(352,155.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(25,1,1).p("AAAH3IAAvt");
	this.shape_50.setTransform(352,156.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(25,1,1).p("AAAICIAAwD");
	this.shape_51.setTransform(352,157.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(25,1,1).p("AAAINIAAwZ");
	this.shape_52.setTransform(352,158.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(25,1,1).p("AAAIYIAAwv");
	this.shape_53.setTransform(352,159.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(25,1,1).p("AAAIjIAAxF");
	this.shape_54.setTransform(352,160.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(25,1,1).p("AAAIuIAAxb");
	this.shape_55.setTransform(352,161.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(25,1,1).p("AAAI6IAAxy");
	this.shape_56.setTransform(352,163);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(25,1,1).p("AAAJFIAAyJ");
	this.shape_57.setTransform(352,164.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(25,1,1).p("AAAJQIAAyf");
	this.shape_58.setTransform(352,165.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(25,1,1).p("AAAJbIAAy1");
	this.shape_59.setTransform(352,166.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(25,1,1).p("AAAJmIAAzL");
	this.shape_60.setTransform(352,167.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(25,1,1).p("AAAJxIAAzi");
	this.shape_61.setTransform(352,168.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(25,1,1).p("AAAJ9IAAz5");
	this.shape_62.setTransform(352,169.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(25,1,1).p("AAAKIIAB0P");
	this.shape_63.setTransform(352,170.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(25,1,1).p("AAAKTIAB0l");
	this.shape_64.setTransform(352,171.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(25,1,1).p("AAAKeIAB07");
	this.shape_65.setTransform(352,173);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(25,1,1).p("AAAKpIAB1R");
	this.shape_66.setTransform(352,174.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(25,1,1).p("AAAK1IAB1p");
	this.shape_67.setTransform(352,175.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(25,1,1).p("AAALAIAB1/");
	this.shape_68.setTransform(352,176.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(25,1,1).p("AAALLIAB2V");
	this.shape_69.setTransform(352,177.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(25,1,1).p("AAALWIAB2r");
	this.shape_70.setTransform(352,178.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(25,1,1).p("AAALhIAB3B");
	this.shape_71.setTransform(352,179.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(25,1,1).p("AAALtIAB3Z");
	this.shape_72.setTransform(352,180.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(25,1,1).p("AAAL4IAB3v");
	this.shape_73.setTransform(352,182);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(25,1,1).p("AAAMDIAB4F");
	this.shape_74.setTransform(352,183.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(25,1,1).p("AAAMOIAB4b");
	this.shape_75.setTransform(352,184.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(25,1,1).p("AAAMZIAB4x");
	this.shape_76.setTransform(352,185.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(25,1,1).p("AAAMkIAB5H");
	this.shape_77.setTransform(352,186.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(25,1,1).p("AAAMwIAB5f");
	this.shape_78.setTransform(352,187.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(25,1,1).p("AAAM7IAB51");
	this.shape_79.setTransform(352,188.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(25,1,1).p("AAANGIAB6L");
	this.shape_80.setTransform(352,189.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(25,1,1).p("AAANRIAB6h");
	this.shape_81.setTransform(352,190.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(25,1,1).p("AAANcIAB63");
	this.shape_82.setTransform(352,192);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(25,1,1).p("AAANoIAB7P");
	this.shape_83.setTransform(352,193.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(25,1,1).p("AAANzIAB7l");
	this.shape_84.setTransform(352,194.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(25,1,1).p("AAAN+IAB77");
	this.shape_85.setTransform(352,195.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(25,1,1).p("AAAOJIAB8R");
	this.shape_86.setTransform(352,196.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(25,1,1).p("AAAOUIAB8n");
	this.shape_87.setTransform(352,197.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(25,1,1).p("AAAOgIAB8/");
	this.shape_88.setTransform(352,198.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(25,1,1).p("AAAOrIAB9V");
	this.shape_89.setTransform(352,199.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(25,1,1).p("AAAO2IAB9r");
	this.shape_90.setTransform(352,201);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(25,1,1).p("AAAPBIAB+B");
	this.shape_91.setTransform(352,202.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(25,1,1).p("AAAPMIAB+X");
	this.shape_92.setTransform(352,203.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(25,1,1).p("AAAPXIAB+t");
	this.shape_93.setTransform(352,204.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(25,1,1).p("AAAPiIAB/D");
	this.shape_94.setTransform(352,205.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(25,1,1).p("AAAPuIAB/b");
	this.shape_95.setTransform(352,206.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(25,1,1).p("AAAP5IAB/x");
	this.shape_96.setTransform(352,207.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(25,1,1).p("AAAQEMAABggH");
	this.shape_97.setTransform(352,208.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(25,1,1).p("AAAQPMAABggd");
	this.shape_98.setTransform(352,209.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(25,1,1).p("AAAQbMAABgg1");
	this.shape_99.setTransform(352,211.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(25,1,1).p("AAAQmMAABghL");
	this.shape_100.setTransform(352,212.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(25,1,1).p("AAAQxMAABghh");
	this.shape_101.setTransform(352,213.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(25,1,1).p("AAAQ8MAABgh3");
	this.shape_102.setTransform(352,214.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(25,1,1).p("AAARHMAABgiN");
	this.shape_103.setTransform(352,215.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(25,1,1).p("AAARTMAABgil");
	this.shape_104.setTransform(352,216.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(25,1,1).p("AAAReMAABgi7");
	this.shape_105.setTransform(352,217.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(25,1,1).p("AAARpMAABgjR");
	this.shape_106.setTransform(352,218.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(25,1,1).p("AAAR0MAABgjn");
	this.shape_107.setTransform(352,220);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(25,1,1).p("AAAR/MAABgj9");
	this.shape_108.setTransform(352,221.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(25,1,1).p("AAASKMAABgkT");
	this.shape_109.setTransform(352,222.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(25,1,1).p("AAASWMAABgkr");
	this.shape_110.setTransform(352,223.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(25,1,1).p("AAAShMAABglB");
	this.shape_111.setTransform(352,224.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(25,1,1).p("AAASsMAABglX");
	this.shape_112.setTransform(352,225.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(25,1,1).p("AAAS3MAABglt");
	this.shape_113.setTransform(352,226.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(25,1,1).p("AAATCMAABgmD");
	this.shape_114.setTransform(352,227.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(25,1,1).p("AAATOMAABgmb");
	this.shape_115.setTransform(352,229);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(25,1,1).p("AAATZMAABgmx");
	this.shape_116.setTransform(352,230.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(25,1,1).p("AAATkMAABgnH");
	this.shape_117.setTransform(352,231.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(25,1,1).p("AAATvMAABgnd");
	this.shape_118.setTransform(352,232.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(25,1,1).p("AAAT6MAABgnz");
	this.shape_119.setTransform(352,233.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(25,1,1).p("AAAUFMAABgoJ");
	this.shape_120.setTransform(352,234.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(25,1,1).p("AAAURMAABgoh");
	this.shape_121.setTransform(352,235.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(25,1,1).p("AAAUcMAABgo3");
	this.shape_122.setTransform(352,236.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(25,1,1).p("AAAUnMAABgpN");
	this.shape_123.setTransform(352,237.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(25,1,1).p("AAAUyMAABgpj");
	this.shape_124.setTransform(352,239);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(25,1,1).p("AAAU9MAABgp5");
	this.shape_125.setTransform(352,240.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(25,1,1).p("AAAVJMAABgqR");
	this.shape_126.setTransform(352,241.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(25,1,1).p("AAAVUMAABgqn");
	this.shape_127.setTransform(352,242.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(25,1,1).p("AAAVfMAABgq9");
	this.shape_128.setTransform(352,243.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(25,1,1).p("AAAVqMAABgrT");
	this.shape_129.setTransform(352,244.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(25,1,1).p("AAAV1MAABgrp");
	this.shape_130.setTransform(352,245.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(25,1,1).p("AAAWAMAABgr/");
	this.shape_131.setTransform(352,246.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(25,1,1).p("AAAWMMAABgsX");
	this.shape_132.setTransform(352,248);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(25,1,1).p("AAAWXMAABgst");
	this.shape_133.setTransform(352,249.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(25,1,1).p("AAAWiMAABgtD");
	this.shape_134.setTransform(352,250.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(25,1,1).p("AAAWtMAABgtZ");
	this.shape_135.setTransform(352,251.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(25,1,1).p("AAAW4MAABgtv");
	this.shape_136.setTransform(352,252.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(25,1,1).p("AAAXEMAABguH");
	this.shape_137.setTransform(352,253.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(25,1,1).p("AAAXPMAABgud");
	this.shape_138.setTransform(352.1,254.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(25,1,1).p("AAAXaMAABguz");
	this.shape_139.setTransform(352.1,255.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(25,1,1).p("AAAXlMAABgvJ");
	this.shape_140.setTransform(352.1,256.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(25,1,1).p("AAAXwMAABgvf");
	this.shape_141.setTransform(352.1,258);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(25,1,1).p("AAAX8MAABgv2");
	this.shape_142.setTransform(352.1,259.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(25,1,1).p("AAAYHMAABgwN");
	this.shape_143.setTransform(352.1,260.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(25,1,1).p("AAAYSMAABgwj");
	this.shape_144.setTransform(352.1,261.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(25,1,1).p("AAAYdMAABgw5");
	this.shape_145.setTransform(352.1,262.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(25,1,1).p("AAAYoMAABgxP");
	this.shape_146.setTransform(352.1,263.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(25,1,1).p("AAAYzMAABgxl");
	this.shape_147.setTransform(352.1,264.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(25,1,1).p("AAAY+MAABgx8");
	this.shape_148.setTransform(352.1,265.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(25,1,1).p("AAAZKMAABgyT");
	this.shape_149.setTransform(352.1,267);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(25,1,1).p("AAAZVMAABgyp");
	this.shape_150.setTransform(352.1,268.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").ss(25,1,1).p("AAAZgMAABgy/");
	this.shape_151.setTransform(352.1,269.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(25,1,1).p("AAAZrMAABgzV");
	this.shape_152.setTransform(352.1,270.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#000000").ss(25,1,1).p("AAAZ3MAABgzt");
	this.shape_153.setTransform(352.1,271.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(25,1,1).p("AAAaCMAABg0D");
	this.shape_154.setTransform(352.1,272.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#000000").ss(25,1,1).p("AAAaNMAABg0Z");
	this.shape_155.setTransform(352.1,273.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(25,1,1).p("AAB6XMgABA0v");
	this.shape_156.setTransform(352.1,274.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6}]},249).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).wait(72));

	// Base
	this.instance_4 = new lib.Symbol1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,275);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(471));

	// Background
	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#F59E9E").ss(3,1,1).p("AMvQ5I5dAAMAAAghxIZdAAg");
	this.shape_157.setTransform(275,275,3.373,2.543);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_158.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_158},{t:this.shape_157}]}).wait(471));

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