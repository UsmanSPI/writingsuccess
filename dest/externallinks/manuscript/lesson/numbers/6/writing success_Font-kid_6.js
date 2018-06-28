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


(lib._6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtsbZQlsl6gQomIAAhFQAAq4FltGQF2tmH7myQA1gxA1ABQBEAAA1BDQA1BDAABFQAABQhIA8QmeFSodTCQIEjsD5gBQIHAAFxF6QFxF6AAIfQAAIclxF8QlxF8oHAAQoAAAlsl6gAp2CpQj/EOAAF+QAAGGD2EWQD9EgF1AAQF5AAEIkZQEJkZAAl+QAAmBkCkSQkDkOl4AAQl5AAj9EJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.7,-213.1,251.4,426.3);


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


(lib.c_ar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(67.5,-174.3,1,1,48.7,0,0,0.4,-17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.3,regY:-17.2,scaleX:1,scaleY:1,rotation:37.1,guide:{path:[67.5,-174.3,26.5,-136.8,-1.8,-100.5], orient:'auto'}},44).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A1yC5IAAlxMArlAAAIAAFxg");
	var mask_graphics_1 = new cjs.Graphics().p("A1yDBIAAmBMArlAAAIAAGBg");
	var mask_graphics_2 = new cjs.Graphics().p("A1yDKIAAmTMArlAAAIAAGTg");
	var mask_graphics_3 = new cjs.Graphics().p("A1yDSIAAmjMArlAAAIAAGjg");
	var mask_graphics_4 = new cjs.Graphics().p("A1yDbIAAm1MArlAAAIAAG1g");
	var mask_graphics_5 = new cjs.Graphics().p("A1yDjIAAnFMArlAAAIAAHFg");
	var mask_graphics_6 = new cjs.Graphics().p("A1yDsIAAnXMArlAAAIAAHXg");
	var mask_graphics_7 = new cjs.Graphics().p("A1yD1IAAnoMArlAAAIAAHog");
	var mask_graphics_8 = new cjs.Graphics().p("A1yD9IAAn5MArlAAAIAAH5g");
	var mask_graphics_9 = new cjs.Graphics().p("A1yEGIAAoKMArlAAAIAAIKg");
	var mask_graphics_10 = new cjs.Graphics().p("A1yEOIAAobMArlAAAIAAIbg");
	var mask_graphics_11 = new cjs.Graphics().p("A1yEWIAAorMArlAAAIAAIrg");
	var mask_graphics_12 = new cjs.Graphics().p("A1yEfIAAo9MArlAAAIAAI9g");
	var mask_graphics_13 = new cjs.Graphics().p("A1yEnIAApNMArlAAAIAAJNg");
	var mask_graphics_14 = new cjs.Graphics().p("A1yEwIAApfMArlAAAIAAJfg");
	var mask_graphics_15 = new cjs.Graphics().p("A1yE4IAApvMArlAAAIAAJvg");
	var mask_graphics_16 = new cjs.Graphics().p("A1yFBIAAqBMArlAAAIAAKBg");
	var mask_graphics_17 = new cjs.Graphics().p("A1yFKIAAqTMArlAAAIAAKTg");
	var mask_graphics_18 = new cjs.Graphics().p("A1yFSIAAqjMArlAAAIAAKjg");
	var mask_graphics_19 = new cjs.Graphics().p("A1yFbIAAq1MArlAAAIAAK1g");
	var mask_graphics_20 = new cjs.Graphics().p("A1yFjIAArFMArlAAAIAALFg");
	var mask_graphics_21 = new cjs.Graphics().p("A1yFsIAArXMArlAAAIAALXg");
	var mask_graphics_22 = new cjs.Graphics().p("A1yF0IAArnMArlAAAIAALng");
	var mask_graphics_23 = new cjs.Graphics().p("A1yF9IAAr5MArlAAAIAAL5g");
	var mask_graphics_24 = new cjs.Graphics().p("A1yGFIAAsJMArlAAAIAAMJg");
	var mask_graphics_25 = new cjs.Graphics().p("A1yGOIAAsbMArlAAAIAAMbg");
	var mask_graphics_26 = new cjs.Graphics().p("A1yGWIAAsrMArlAAAIAAMrg");
	var mask_graphics_27 = new cjs.Graphics().p("A1yGfIAAs9MArlAAAIAAM9g");
	var mask_graphics_28 = new cjs.Graphics().p("A1yGoIAAtOMArlAAAIAANOg");
	var mask_graphics_29 = new cjs.Graphics().p("A1yGwIAAtfMArlAAAIAANfg");
	var mask_graphics_30 = new cjs.Graphics().p("A1yG4IAAtvMArlAAAIAANvg");
	var mask_graphics_31 = new cjs.Graphics().p("A1yHBIAAuBMArlAAAIAAOBg");
	var mask_graphics_32 = new cjs.Graphics().p("A1yHJIAAuRMArlAAAIAAORg");
	var mask_graphics_33 = new cjs.Graphics().p("A1yHSIAAujMArlAAAIAAOjg");
	var mask_graphics_34 = new cjs.Graphics().p("A1yHaIAAuzMArlAAAIAAOzg");
	var mask_graphics_35 = new cjs.Graphics().p("A1yHjIAAvFMArlAAAIAAPFg");
	var mask_graphics_36 = new cjs.Graphics().p("A1yHsIAAvWMArlAAAIAAPWg");
	var mask_graphics_37 = new cjs.Graphics().p("A1yH0IAAvnMArlAAAIAAPng");
	var mask_graphics_38 = new cjs.Graphics().p("A1yH9IAAv4MArlAAAIAAP4g");
	var mask_graphics_39 = new cjs.Graphics().p("A1yIFIAAwJMArlAAAIAAQJg");
	var mask_graphics_40 = new cjs.Graphics().p("A1yIOIAAwbMArlAAAIAAQbg");
	var mask_graphics_41 = new cjs.Graphics().p("A1yIWIAAwrMArlAAAIAAQrg");
	var mask_graphics_42 = new cjs.Graphics().p("A1yIfIAAw9MArlAAAIAAQ9g");
	var mask_graphics_43 = new cjs.Graphics().p("A1yInIAAxNMArlAAAIAARNg");
	var mask_graphics_44 = new cjs.Graphics().p("A1yIwIAAxfMArlAAAIAARfg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:32.6,y:-184}).wait(1).to({graphics:mask_graphics_1,x:32.6,y:-183.1}).wait(1).to({graphics:mask_graphics_2,x:32.6,y:-182.3}).wait(1).to({graphics:mask_graphics_3,x:32.6,y:-181.4}).wait(1).to({graphics:mask_graphics_4,x:32.6,y:-180.6}).wait(1).to({graphics:mask_graphics_5,x:32.6,y:-179.7}).wait(1).to({graphics:mask_graphics_6,x:32.6,y:-178.8}).wait(1).to({graphics:mask_graphics_7,x:32.6,y:-178}).wait(1).to({graphics:mask_graphics_8,x:32.6,y:-177.1}).wait(1).to({graphics:mask_graphics_9,x:32.6,y:-176.3}).wait(1).to({graphics:mask_graphics_10,x:32.6,y:-175.4}).wait(1).to({graphics:mask_graphics_11,x:32.6,y:-174.6}).wait(1).to({graphics:mask_graphics_12,x:32.6,y:-173.7}).wait(1).to({graphics:mask_graphics_13,x:32.6,y:-172.9}).wait(1).to({graphics:mask_graphics_14,x:32.6,y:-172}).wait(1).to({graphics:mask_graphics_15,x:32.6,y:-171.2}).wait(1).to({graphics:mask_graphics_16,x:32.6,y:-170.3}).wait(1).to({graphics:mask_graphics_17,x:32.6,y:-169.5}).wait(1).to({graphics:mask_graphics_18,x:32.6,y:-168.6}).wait(1).to({graphics:mask_graphics_19,x:32.6,y:-167.8}).wait(1).to({graphics:mask_graphics_20,x:32.6,y:-166.9}).wait(1).to({graphics:mask_graphics_21,x:32.6,y:-166.1}).wait(1).to({graphics:mask_graphics_22,x:32.6,y:-165.2}).wait(1).to({graphics:mask_graphics_23,x:32.6,y:-164.4}).wait(1).to({graphics:mask_graphics_24,x:32.6,y:-163.5}).wait(1).to({graphics:mask_graphics_25,x:32.6,y:-162.7}).wait(1).to({graphics:mask_graphics_26,x:32.6,y:-161.8}).wait(1).to({graphics:mask_graphics_27,x:32.6,y:-161}).wait(1).to({graphics:mask_graphics_28,x:32.6,y:-160.1}).wait(1).to({graphics:mask_graphics_29,x:32.6,y:-159.2}).wait(1).to({graphics:mask_graphics_30,x:32.6,y:-158.4}).wait(1).to({graphics:mask_graphics_31,x:32.6,y:-157.5}).wait(1).to({graphics:mask_graphics_32,x:32.6,y:-156.7}).wait(1).to({graphics:mask_graphics_33,x:32.6,y:-155.8}).wait(1).to({graphics:mask_graphics_34,x:32.6,y:-155}).wait(1).to({graphics:mask_graphics_35,x:32.6,y:-154.1}).wait(1).to({graphics:mask_graphics_36,x:32.6,y:-153.3}).wait(1).to({graphics:mask_graphics_37,x:32.6,y:-152.4}).wait(1).to({graphics:mask_graphics_38,x:32.6,y:-151.6}).wait(1).to({graphics:mask_graphics_39,x:32.6,y:-150.7}).wait(1).to({graphics:mask_graphics_40,x:32.6,y:-149.9}).wait(1).to({graphics:mask_graphics_41,x:32.6,y:-149}).wait(1).to({graphics:mask_graphics_42,x:32.6,y:-148.2}).wait(1).to({graphics:mask_graphics_43,x:32.6,y:-147.3}).wait(1).to({graphics:mask_graphics_44,x:32.6,y:-146.5}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AmxYlQsA2ndE6i");
	this.shape.setTransform(1.6,-17.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.7,-183.5,142.2,23.3);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-162.7,-116.6,1,1,0.8,0,0,0.2,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.4,regY:-17.6,rotation:-75.2,guide:{path:[-162.6,-116.6,-163.4,-110.6,-163.4,-104.3,-163.4,-68,-139,-42.5,-126.3,-28.8,-110.5,-22.4]}},74).wait(1));

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A2vCiQANpaG0mgQGzmhJaAMQJbANGiGzQGhGzgNJag");
	var mask_graphics_1 = new cjs.Graphics().p("A2vDAQAApZGrmqQGrmqJaAAQJbAAGqGrQGrGqgBJZg");
	var mask_graphics_2 = new cjs.Graphics().p("AwZstQGimzJbgNQJagMGzGhQGzGhAMJaMgtfAA8QgMpaGimyg");
	var mask_graphics_3 = new cjs.Graphics().p("AwusXQGZm8JbgZQJZgZG8GZQG8GXAZJZMgteAB5QgYpZGYm7g");
	var mask_graphics_4 = new cjs.Graphics().p("AxBsAQGPnEJagmQJZgmHFGPQHEGPAlJYMgtaAC2QglpZGPnDg");
	var mask_graphics_5 = new cjs.Graphics().p("AxUrpQGGnMJZgzQJYgyHNGFQHMGFAyJYMgtWADyQgxpXGFnMg");
	var mask_graphics_6 = new cjs.Graphics().p("AxmrSQF9nUJXg/QJXg/HVF8QHUF7A/JXMgtQAEvQg+pXF7nUg");
	var mask_graphics_7 = new cjs.Graphics().p("Ax3q6QFzncJWhLQJVhMHdFyQHcFyBLJVMgtJAFrQhKpVFxncg");
	var mask_graphics_8 = new cjs.Graphics().p("AyHqhQFpnkJUhYQJUhYHkFoQHkFnBYJVMgtCAGnQhXpUFonjg");
	var mask_graphics_9 = new cjs.Graphics().p("AyWqIQFensJThkQJRhkHsFdQHrFeBkJSMgs3AHjQhkpRFenrg");
	var mask_graphics_10 = new cjs.Graphics().p("AylpvQFUnzJRhwQJPhxHzFTQHyFTBxJQMgstAIfQhwpPFTnyg");
	var mask_graphics_11 = new cjs.Graphics().p("AyypWQFJn5JOh9QJNh9H6FJQH5FIB9JNMgshAJbQh8pNFJn5g");
	var mask_graphics_12 = new cjs.Graphics().p("Ay/o8QE+oAJMiJQJKiKIBE+QIAE+CJJLMgsUAKWQiIpKE+oAg");
	var mask_graphics_13 = new cjs.Graphics().p("AzLoiQE0oGJIiWQJHiWIHE0QIHEzCVJHMgsFALSQiVpHE0oHg");
	var mask_graphics_14 = new cjs.Graphics().p("AzWoHQEpoNJEiiQJEiiIOEpQINEoCiJEMgr2AMMQihpEEpoMg");
	var mask_graphics_15 = new cjs.Graphics().p("AzhnsQEeoTJCivQJAiuIUEeQITEdCuJBMgrlANHQitpBEdoSg");
	var mask_graphics_16 = new cjs.Graphics().p("AzqnRQESoZI+i6QI9i6IZESQIZESC6I9MgrTAOBQi5o+EToXg");
	var mask_graphics_17 = new cjs.Graphics().p("Azzm2QEIofI5jGQI5jGIfEHQIfEHDFI5Mgq/AO7QjFo6EHodg");
	var mask_graphics_18 = new cjs.Graphics().p("Az7maQD8okI2jSQI0jSIlD8QIkD7DRI1MgqrAP0QjQo2D7oig");
	var mask_graphics_19 = new cjs.Graphics().p("A0Cl+QDxoqIxjdQIwjeIpDwQIpDwDeIwMgqVAQtQjdoxDwong");
	var mask_graphics_20 = new cjs.Graphics().p("A0IliQDlovIsjpQIrjpIvDkQIuDkDpIsMgp+ARlQjoosDkosg");
	var mask_graphics_21 = new cjs.Graphics().p("A0NlGQDZozInj1QInj1IzDZQIyDYD1InMgpmASdQj0onDZoxg");
	var mask_graphics_22 = new cjs.Graphics().p("A0RkqQDNo3IikAQIikBI3DNQI2DNEBIhMgpNATVQj/oiDNo2g");
	var mask_graphics_23 = new cjs.Graphics().p("A0VkNQDCo7IckMQIckMI7DBQI7DBEMIcMgoyAUMQkLodDBo6g");
	var mask_graphics_24 = new cjs.Graphics().p("A0XjwQC1o/IXkXQIWkXI/C1QI/C0EXIXMgoXAVCQkWoXC2o+g");
	var mask_graphics_25 = new cjs.Graphics().p("A0ZjTQCppDIRkiQIRkiJCCpQJDCoEiIRMgn6AV3QkhoQCppCg");
	var mask_graphics_26 = new cjs.Graphics().p("A0ai2QCdpGILktQIKkuJGCdQJGCdEtIKMgncAWtQksoLCdpFg");
	var mask_graphics_27 = new cjs.Graphics().p("A0aiYQCRpKIEk4QIEk4JJCRQJJCQE4IEMgm9AXhQk3oECRpIg");
	var mask_graphics_28 = new cjs.Graphics().p("A0Zh7QCEpMH+lDQH+lDJLCEQJNCEFCH+MgmdAYVQlCn+CFpLg");
	var mask_graphics_29 = new cjs.Graphics().p("A0YhdQB5pQH2lNQH3lNJPB4QJPB3FNH3Mgl9AZIQlMn3B4pNg");
	var mask_graphics_30 = new cjs.Graphics().p("A0VhAQBspRHwlYQHvlYJRBsQJRBrFYHvMglaAZ7QlXnvBspRg");
	var mask_graphics_31 = new cjs.Graphics().p("A0SgiQBgpTHoljQHpliJTBgQJTBeFiHoMgk3AatQlhnpBfpSg");
	var mask_graphics_32 = new cjs.Graphics().p("A0NgEQBTpVHhltQHhlsJVBTQJVBSFsHhMgkTAbdQlrnhBTpUg");
	var mask_graphics_33 = new cjs.Graphics().p("A0IAZQBHpWHZl2QHZl2JWBGQJXBGF2HZMgjtAcNQl1nZBGpXg");
	var mask_graphics_34 = new cjs.Graphics().p("A0CA3QA6pXHSmAQHRmAJYA5QJYA6F/HRMgjHAc9Ql/nSA6pYg");
	var mask_graphics_35 = new cjs.Graphics().p("Az7BWQAupZHJmKQHJmJJZAtQJZAsGJHJMgifAdsQmJnJAtpZg");
	var mask_graphics_36 = new cjs.Graphics().p("AzzB0QAhpaHBmTQHBmTJZAhQJaAgGTHAMgh3AeaQmTnBAhpag");
	var mask_graphics_37 = new cjs.Graphics().p("AzqCSQAUpaG5mcQG4mdJaAUQJbAUGcG4MghPAfGQmbm4AUpbg");
	var mask_graphics_38 = new cjs.Graphics().p("AzgCxQAIpbGvmlQGwmmJaAHQJbAHGlGwMggkAfyQmlmwAIpag");
	var mask_graphics_39 = new cjs.Graphics().p("AzVDPQgFpaGmmvQGnmuJbgGQJagFGuGmMgf5AgeQmtmngFpbg");
	var mask_graphics_40 = new cjs.Graphics().p("AzKDuQgRpbGdm3QGem3JagSQJbgSG2GdMgfNAhIQm2megSpag");
	var mask_graphics_41 = new cjs.Graphics().p("Ay9EGQgepZGUnAQGUnAJagfQJagfG/GVMgegAhxQm/mVgepag");
	var mask_graphics_42 = new cjs.Graphics().p("AywEbQgrpZGLnIQGLnJJZgrQJZgrHIGKMgdzAiaQnHmLgrpZg");
	var mask_graphics_43 = new cjs.Graphics().p("AymEvQg3pYGBnQQGBnQJYg4QJYg4HQGBMgdEAjBQnQmBg3pZg");
	var mask_graphics_44 = new cjs.Graphics().p("AyjFEQhEpWF4nZQF3nYJXhEQJXhFHYF3MgcWAjoQnXl4hEpXg");
	var mask_graphics_45 = new cjs.Graphics().p("AyfFZQhQpVFtngQFungJVhRQJVhRHgFtMgblAkOQnfluhRpWg");
	var mask_graphics_46 = new cjs.Graphics().p("AyaFuQhdpTFjnnQFjnoJUhdQJTheHoFjMga1AkyQnmlkhdpUg");
	var mask_graphics_47 = new cjs.Graphics().p("AyVGEQhppRFZnvQFZnvJRhqQJRhqHvFZMgaDAlVQnulahppRg");
	var mask_graphics_48 = new cjs.Graphics().p("AyPGZQh2pPFPn2QFOn2JQh2QJOh2H2FOMgZRAl4Qn1lPh1pQg");
	var mask_graphics_49 = new cjs.Graphics().p("AyJGvQiCpMFEn9QFEn9JOiDQJLiCH9FEMgYeAmYQn8lEiCpNg");
	var mask_graphics_50 = new cjs.Graphics().p("AyCHFQiOpKE5oDQE6oEJKiPQJJiPIDE6MgXqAm5QoCk6iPpKg");
	var mask_graphics_51 = new cjs.Graphics().p("Ax6HbQibpHEvoKQEuoKJIibQJFibIKEuMgW1AnYQoKkviapGg");
	var mask_graphics_52 = new cjs.Graphics().p("AxyHxQinpDEkoRQEjoQJFinQJCinIQEjMgWBAn2QoPkkinpDg");
	var mask_graphics_53 = new cjs.Graphics().p("AxpIHQizpAEZoWQEYoWJAi0QI/izIWEYMgVLAoUQoVkZizpAg");
	var mask_graphics_54 = new cjs.Graphics().p("AxgIdQi+o8ENocQENocI9i/QI6i/IcENMgUVAovQobkOi/o8g");
	var mask_graphics_55 = new cjs.Graphics().p("AxWIzQjKo3EBoiQECohI5jMQI2jLIiECMgTeApJQohkCjLo4g");
	var mask_graphics_56 = new cjs.Graphics().p("AxLJJQjXo0D3omQD2omI0jYQIzjXImD3MgSmApjQomj3jXo0g");
	var mask_graphics_57 = new cjs.Graphics().p("AxAJgQjiowDrorQDqorIwjjQIujjIrDrMgRvAp7Qoqjsjjoug");
	var mask_graphics_58 = new cjs.Graphics().p("Aw0J2QjuorDfovQDfoxIrjvQIpjuIwDfMgQ2AqTQowjgjuoqg");
	var mask_graphics_59 = new cjs.Graphics().p("AwoKMQj5olDTo0QDTo2Imj6QIkj6I0DUMgP9AqoQo0jUj6olg");
	var mask_graphics_60 = new cjs.Graphics().p("AwbKjQkFohDIo4QDHo6IgkFQIfkGI5DIMgPEAq9Qo5jIkFofg");
	var mask_graphics_61 = new cjs.Graphics().p("AwNK5QkRobC8o8QC7o+IbkRQIZkQI9C7MgOLArRQo8i8kQoag");
	var mask_graphics_62 = new cjs.Graphics().p("Av/LPQkcoVCvpAQCwpBIVkcQITkcJBCvMgNRArkQpAixkboUg");
	var mask_graphics_63 = new cjs.Graphics().p("AvxLmQknoPCkpEQCjpFIPknQINknJECjMgMVAr1QpFikkmoOg");
	var mask_graphics_64 = new cjs.Graphics().p("AviL8QkyoJCYpHQCXpIIIkyQIHkyJICXMgLbAsFQpIiYkxoIg");
	var mask_graphics_65 = new cjs.Graphics().p("AvSMSQk9oCCLpKQCLpLICk9QIAk9JLCLMgKgAsTQpKiLk8oCg");
	var mask_graphics_66 = new cjs.Graphics().p("AvCMoQlHn7B+pNQB/pOH7lIQH7lHJMB/MgJkAshQpNiAlHn7g");
	var mask_graphics_67 = new cjs.Graphics().p("AuyM+QlRn0BypPQBypRH1lSQHzlSJPByMgIoAstQpQhzlSn0g");
	var mask_graphics_68 = new cjs.Graphics().p("AuhNVQlcnuBmpRQBmpTHtldQHtlcJRBmMgHuAs4QpRhnlcnsg");
	var mask_graphics_69 = new cjs.Graphics().p("AuPNrQlmnmBZpUQBapVHllmQHllnJUBaMgGyAtBQpThalmnlg");
	var mask_graphics_70 = new cjs.Graphics().p("At9OBQlwneBNpWQBNpWHelxQHdlxJVBNMgF1AtKQpVhOlwndg");
	var mask_graphics_71 = new cjs.Graphics().p("AtqOXQl6nXBApXQBBpYHWl7QHVl6JXBBMgE5AtRQpWhBl6nWg");
	var mask_graphics_72 = new cjs.Graphics().p("AtXOtQmEnPA0pYQA0pZHOmFQHOmEJXA0MgD7AtXQpYg1mEnNg");
	var mask_graphics_73 = new cjs.Graphics().p("AtDPCQmOnGAopZQAnpaHGmOQHFmOJZAnMgC/AtcQpZgomNnGg");
	var mask_graphics_74 = new cjs.Graphics().p("AsvPYQmXm+AbpaQAbpaG9mYQG9mXJZAbMgCCAtfQpZgcmXm9g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-93.9,y:-126.2}).wait(1).to({graphics:mask_graphics_1,x:-93.9,y:-126.2}).wait(1).to({graphics:mask_graphics_2,x:-93.9,y:-126.2}).wait(1).to({graphics:mask_graphics_3,x:-94,y:-126.2}).wait(1).to({graphics:mask_graphics_4,x:-94.1,y:-126.2}).wait(1).to({graphics:mask_graphics_5,x:-94.2,y:-126.3}).wait(1).to({graphics:mask_graphics_6,x:-94.3,y:-126.3}).wait(1).to({graphics:mask_graphics_7,x:-94.5,y:-126.3}).wait(1).to({graphics:mask_graphics_8,x:-94.8,y:-126.3}).wait(1).to({graphics:mask_graphics_9,x:-95,y:-126.3}).wait(1).to({graphics:mask_graphics_10,x:-95.3,y:-126.4}).wait(1).to({graphics:mask_graphics_11,x:-95.6,y:-126.4}).wait(1).to({graphics:mask_graphics_12,x:-96,y:-126.4}).wait(1).to({graphics:mask_graphics_13,x:-96.4,y:-126.4}).wait(1).to({graphics:mask_graphics_14,x:-96.8,y:-126.4}).wait(1).to({graphics:mask_graphics_15,x:-97.2,y:-126.4}).wait(1).to({graphics:mask_graphics_16,x:-97.7,y:-126.5}).wait(1).to({graphics:mask_graphics_17,x:-98.2,y:-126.5}).wait(1).to({graphics:mask_graphics_18,x:-98.7,y:-126.5}).wait(1).to({graphics:mask_graphics_19,x:-99.2,y:-126.5}).wait(1).to({graphics:mask_graphics_20,x:-99.8,y:-126.5}).wait(1).to({graphics:mask_graphics_21,x:-100.4,y:-126.5}).wait(1).to({graphics:mask_graphics_22,x:-101,y:-126.5}).wait(1).to({graphics:mask_graphics_23,x:-101.7,y:-126.5}).wait(1).to({graphics:mask_graphics_24,x:-102.4,y:-126.5}).wait(1).to({graphics:mask_graphics_25,x:-103.1,y:-126.5}).wait(1).to({graphics:mask_graphics_26,x:-103.8,y:-126.4}).wait(1).to({graphics:mask_graphics_27,x:-104.6,y:-126.4}).wait(1).to({graphics:mask_graphics_28,x:-105.3,y:-126.4}).wait(1).to({graphics:mask_graphics_29,x:-106.2,y:-126.4}).wait(1).to({graphics:mask_graphics_30,x:-107,y:-126.4}).wait(1).to({graphics:mask_graphics_31,x:-107.8,y:-126.4}).wait(1).to({graphics:mask_graphics_32,x:-108.7,y:-126.3}).wait(1).to({graphics:mask_graphics_33,x:-109.6,y:-126.3}).wait(1).to({graphics:mask_graphics_34,x:-110.6,y:-126.3}).wait(1).to({graphics:mask_graphics_35,x:-111.6,y:-126.3}).wait(1).to({graphics:mask_graphics_36,x:-112.5,y:-126.3}).wait(1).to({graphics:mask_graphics_37,x:-113.6,y:-126.3}).wait(1).to({graphics:mask_graphics_38,x:-114.6,y:-126.3}).wait(1).to({graphics:mask_graphics_39,x:-115.7,y:-126.3}).wait(1).to({graphics:mask_graphics_40,x:-116.8,y:-126.3}).wait(1).to({graphics:mask_graphics_41,x:-117.9,y:-125.7}).wait(1).to({graphics:mask_graphics_42,x:-119.1,y:-124.7}).wait(1).to({graphics:mask_graphics_43,x:-119.8,y:-123.7}).wait(1).to({graphics:mask_graphics_44,x:-119.8,y:-122.8}).wait(1).to({graphics:mask_graphics_45,x:-119.8,y:-121.9}).wait(1).to({graphics:mask_graphics_46,x:-119.9,y:-121}).wait(1).to({graphics:mask_graphics_47,x:-119.9,y:-120.1}).wait(1).to({graphics:mask_graphics_48,x:-119.9,y:-119.3}).wait(1).to({graphics:mask_graphics_49,x:-119.9,y:-118.5}).wait(1).to({graphics:mask_graphics_50,x:-119.9,y:-117.7}).wait(1).to({graphics:mask_graphics_51,x:-119.9,y:-116.9}).wait(1).to({graphics:mask_graphics_52,x:-120,y:-116.2}).wait(1).to({graphics:mask_graphics_53,x:-120,y:-115.5}).wait(1).to({graphics:mask_graphics_54,x:-120,y:-114.8}).wait(1).to({graphics:mask_graphics_55,x:-120,y:-114.1}).wait(1).to({graphics:mask_graphics_56,x:-120,y:-113.5}).wait(1).to({graphics:mask_graphics_57,x:-120,y:-112.9}).wait(1).to({graphics:mask_graphics_58,x:-120,y:-112.3}).wait(1).to({graphics:mask_graphics_59,x:-120,y:-111.8}).wait(1).to({graphics:mask_graphics_60,x:-120,y:-111.2}).wait(1).to({graphics:mask_graphics_61,x:-120,y:-110.7}).wait(1).to({graphics:mask_graphics_62,x:-120,y:-110.3}).wait(1).to({graphics:mask_graphics_63,x:-120,y:-109.8}).wait(1).to({graphics:mask_graphics_64,x:-119.9,y:-109.4}).wait(1).to({graphics:mask_graphics_65,x:-119.9,y:-109}).wait(1).to({graphics:mask_graphics_66,x:-119.9,y:-108.7}).wait(1).to({graphics:mask_graphics_67,x:-119.9,y:-108.4}).wait(1).to({graphics:mask_graphics_68,x:-119.9,y:-108.1}).wait(1).to({graphics:mask_graphics_69,x:-119.9,y:-107.8}).wait(1).to({graphics:mask_graphics_70,x:-119.8,y:-107.6}).wait(1).to({graphics:mask_graphics_71,x:-119.8,y:-107.4}).wait(1).to({graphics:mask_graphics_72,x:-119.8,y:-107.2}).wait(1).to({graphics:mask_graphics_73,x:-119.8,y:-107.1}).wait(1).to({graphics:mask_graphics_74,x:-119.8,y:-107}).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AFNHWQjxgwi1jCQjzkAAAlrQAAgnAEgn");
	this.shape.setTransform(-130.1,-65.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174.7,-116.7,80.3,79.9);


(lib.honeyflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.honeybee();
	this.instance.parent = this;
	this.instance.setTransform(38.4,-170.9,0.422,0.422,0,0,0,-0.1,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYB7IgPgGIgQgFIgJgGIgIgHIgJgGIgJgGIgGgHIgDgHIgHgHIgDgHIgDgHIgCgHIgDgHIgBgIIgBgHIgEgHIACgIIgCgIIgBgGIACgIIABgIIACgHIABgIIAEgIIAEgIIADgJIAHgIIAHgJIAFgIIAMgJIAOgKIALgHIANgEIAVgFIAAgBIAWgBIASADIATAFIANAGIALAFIAIAHIAJAGIAGAHIAGAHIADAHIAHAGIADAHIAEAHIADAIIAEAHIABAHIABAHIACAIIABAHIAAAHIgBAIIABAHIgBAIIgEAIIgCAIIgDAIIgCAIIgEAIIgGAIIgGAJIgJAJIgJAJIgOAJIgLAHIgMAEIgXAGIgVABIgVgCg");
	this.shape.setTransform(23.1,-143.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-215.3,105.5,84.5);


// stage content:
(lib.writingsuccess_Fontkid_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_430 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(430).call(this.frame_430).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(274.2,93.8,0.999,0.999,8.5,0,0,22.4,-144);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({regX:22.5,scaleX:1,scaleY:1,rotation:8.3,guide:{path:[274.2,94,255.7,114.7,238.2,136.4,200.6,183,183.1,239.8,165.7,296.1,161.3,355,160.8,362.1,162.8,379.1]}},109).to({regX:22.4,regY:-143.9,guide:{path:[162.9,379,163.5,383.5,164.2,388.8,167.5,413.6,197.2,445.5,227,477.4,271.6,477.5,316.1,477.5,347.5,444.7,352.4,439.6,356.5,434.2]}},96).to({guide:{path:[356.4,434.1,378.4,405.2,378.9,367,378.9,366.1,378.9,365.3,378.9,318.8,347.5,286,316,253.1,271.5,253.1,227,253.1,195.5,286,181.8,300.4,176.5,303.4]}},145).wait(10).to({startPosition:0},0).to({regY:-144,scaleX:1,scaleY:1,rotation:8.5,guide:{path:[176.5,303.4,151.4,328.8,137.5,308.2,122.7,286.4,96.8,284.3,71.8,281.8,48.4,291.6,25.7,301.1,6.6,316.6,-12.2,332,-32.1,345.8,-51.5,359.2,-75.1,356.7,-79.9,356.5,-84.6,355.9,-85.7,355.9,-86.8,355.9,-87.7,355.9,-88.6,355.9,-88.7,355.9,-88.8,355.9,-112.9,356.9,-136.7,353.3,-138.4,352.9,-140.2,352.5]}},61).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(191.5,293.3,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},350).wait(72));

	// Layer 1
	this.instance_1 = new lib.ar1("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(166.2,279.1,1,1,180);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(118).to({_off:false},0).wait(313));

	// ar1
	this.instance_2 = new lib.c_ar("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(138,253.5,1,1,-12);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(422));

	// 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_239 = new cjs.Graphics().p("EAGCAq2QrjgwnpouQnrouAwrkMA34ADoQgwLlouHqQn8G+qUAAQhAAAhDgFg");
	var mask_graphics_240 = new cjs.Graphics().p("EAGsAq6Qrlgfn2oiQn4oiAfrmMA38ACUQgeLlojH3QoDHaqwAAQgqAAgqgBg");
	var mask_graphics_241 = new cjs.Graphics().p("EAHWAq8QrmgNoCoWQoFoWANrmMA3/AA+QgNLmoWIEQoJH3rPAAIgkAAg");
	var mask_graphics_242 = new cjs.Graphics().p("EgL1Ai4QoRoKgFrmMA4AgAXQAELmoJIRQoKIQrmAFIgNAAQrdAAoLoFg");
	var mask_graphics_243 = new cjs.Graphics().p("EgLWAjWQodn9gXrmMA3+gBsQAWLmn9IdQn9IcrlAWIg+ABQq+AAoFnng");
	var mask_graphics_244 = new cjs.Graphics().p("EgK3AjzQopnwgorlMA36gDAQAoLknwIpQnwIorlAoQg3ADg2AAQqgAAn/nLg");
	var mask_graphics_245 = new cjs.Graphics().p("EgKXAkQQo1njg5rkMA30gEVQA5LjniI0QnjI0rkA6QhOAGhNAAQqEAAn3mvg");
	var mask_graphics_246 = new cjs.Graphics().p("EgJ2AkrQpBnVhLriMA3tgFqQBLLinVI/QnVJArjBLQhlAKhjAAQpoAAnvmVg");
	var mask_graphics_247 = new cjs.Graphics().p("EgJVAlGQpMnHhcrgMA3jgG/QBcLgnHJKQnHJLrhBcQh8AQh4AAQpOAAnml7g");
	var mask_graphics_248 = new cjs.Graphics().p("EgI0AlgQpWm5hureMA3YgITQBuLem6JVQm5JVreBuQiSAWiNAAQo1AAndlig");
	var mask_graphics_249 = new cjs.Graphics().p("EgIRAl6Qphmrh/rbMA3KgJnQB/LbmrJfQmrJfrbB/QioAeihAAQocAAnTlJg");
	var mask_graphics_250 = new cjs.Graphics().p("EgHvAmSQpqmciQrYMA26gK6QCQLXmcJpQmdJprXCRQi9Ami2AAQoEAAnJkyg");
	var mask_graphics_251 = new cjs.Graphics().p("EgHLAmqQp0mOiirUMA2pgMOQCiLUmOJzQmOJzrUCiQjRAvjKAAQntAAm9kbg");
	var mask_graphics_252 = new cjs.Graphics().p("EgGnAnBQp9l/izrQMA2VgNgQCzLPl/J8Ql/J8rQCzQjlA5jdAAQnZABmvkFg");
	var mask_graphics_253 = new cjs.Graphics().p("EgGDAnWQqGlvjErLMA2AgOzQDELLlwKFQlvKFrMDEQj5BEjwAAQnDAAmjjwg");
	var mask_graphics_254 = new cjs.Graphics().p("EgFeAnsQqOlgjVrHMA1ogQEQDVLGlgKOQlgKNrHDVQkMBQkEAAQmtAAmWjbg");
	var mask_graphics_255 = new cjs.Graphics().p("EgE4AoAQqXlQjlrCMA1OgRVQDmLBlRKWQlQKVrCDmQkeBdkXAAQmYAAmIjIg");
	var mask_graphics_256 = new cjs.Graphics().p("EgESAoTQqelAj3q8MA0zgSmQD3K8lBKdQlBKdq7D3QkxBrkqAAQmEAAl5i2g");
	var mask_graphics_257 = new cjs.Graphics().p("EgDsAomQqlkxkHq1MA0WgT2QEHK1kxKlQkxKlq2EHQlBB6k9AAQlxAAlqikg");
	var mask_graphics_258 = new cjs.Graphics().p("EgDFAo3QqskgkYqvMAz3gVFQEXKvkgKsQkhKsqvEXQlSCJlRAAQlcAAlbiTg");
	var mask_graphics_259 = new cjs.Graphics().p("EgCdApIQq0kQknqoMAzWgWUQEnKpkQKyQkQKzqpEnQliCallAAQlIAAlKiDg");
	var mask_graphics_260 = new cjs.Graphics().p("EgB1ApYQq6j/k4qhMAyzgXiQE4KhkAK5QkAK5qhE4QlyCrl4AAQk1AAk5h0g");
	var mask_graphics_261 = new cjs.Graphics().p("EgBNApnQrAjvlHqZMAyOgYuQFHKZjvK/QjvK/qZFHQmBC9mNAAQkiAAknhlg");
	var mask_graphics_262 = new cjs.Graphics().p("EgAlAp1QrFjelXqSMAxogZ5QFXKRjeLEQjfLEqRFYQmPDQmhAAQkPAAkWhYg");
	var mask_graphics_263 = new cjs.Graphics().p("EAADAqCQrJjNlmqJMAw/gbFQFnKJjOLKQjOLJqJFmQmdDkm1AAQj8AAkEhLg");
	var mask_graphics_264 = new cjs.Graphics().p("EAAsAqOQrNi8l2qAMAwVgcPQF2KBi9LNQi8LOqBF2QmpD5nMAAQjoAAjxhAg");
	var mask_graphics_265 = new cjs.Graphics().p("EABWAqaQrSirmFp4MAvpgdXQGGJ3isLSQisLSp3GFQm2EOnhAAQjVAAjdg0g");
	var mask_graphics_266 = new cjs.Graphics().p("EACAAqkQrWiamUpuMAu8geeQGUJtiaLWQibLWpuGTQnCEln3AAQjBAAjJgrg");
	var mask_graphics_267 = new cjs.Graphics().p("EACqAqtQraiImiplMAuNgflQGiJkiJLZQiJLZpkGjQnNE7oPAAQitAAi0gig");
	var mask_graphics_268 = new cjs.Graphics().p("EADUAq1Qrch3mxpaMAtcggqQGwJZh3LcQh4LcpaGxQnYFUomAAQiZAAifgbg");
	var mask_graphics_269 = new cjs.Graphics().p("EAD+Aq9Qrfhmm/pQMAsqghvQG/JPhnLfQhmLfpQG/QnhFso/AAQiFAAiJgTg");
	var mask_graphics_270 = new cjs.Graphics().p("EAEpArDQrhhUnNpFMAr1giyQHNJEhVLhQhVLhpFHNQnqGFpZAAQhvAAhzgNg");
	var mask_graphics_271 = new cjs.Graphics().p("EAFTArIQrjhCnao6MAq/gj0QHbI5hDLjQhELjo6HaQnyGgp0AAQhaAAhcgJg");
	var mask_graphics_272 = new cjs.Graphics().p("EAF+ArNQrkgynpouMAqJgk1QHoIugyLkQgyLlouHoQn6G6qQAAQhDAAhFgEg");
	var mask_graphics_273 = new cjs.Graphics().p("EAGoArQQrlggn1oiMApQgl0QH1IhggLmQghLloiH1QoCHXqrAAQgtAAgugCg");
	var mask_graphics_274 = new cjs.Graphics().p("EAHTArSQrmgOoCoXMAoWgmxQICIVgPLmQgPLmoWICQoIHzrKAAIgqAAg");
	var mask_graphics_275 = new cjs.Graphics().p("EgL3AjNMAnagnvQIOIJADLmQADLmoKIPQoKIPrmACIgKAAQrfAAoLoGg");
	var mask_graphics_276 = new cjs.Graphics().p("EgLYAjrMAmcgoqQIbH9AVLlQAULmn9IbQn+IbrlAUIg8ABQq/AAoFnpg");
	var mask_graphics_277 = new cjs.Graphics().p("EgK5AkIMAlegpjQInHwAmLlQAmLlnxImQnwInrlAmQg2ADg1AAQqiAAn+nNg");
	var mask_graphics_278 = new cjs.Graphics().p("EgKZAklMAkegqcQIyHjA4LkQA4LjnkIzQnjIyrkA4QhNAFhMAAQqFAAn3mwg");
	var mask_graphics_279 = new cjs.Graphics().p("EgJ5AlBMAjdgrSQI+HUBJLjQBJLinWI+QnWI+rhBIQhlAKhiAAQpqAAnvmVg");
	var mask_graphics_280 = new cjs.Graphics().p("EgJYAlbMAibgsGQJIHHBbLgQBbLgnIJJQnJJJrfBaQh8APh3AAQpPAAnnl8g");
	var mask_graphics_281 = new cjs.Graphics().p("EgI2Al2MAhXgs7QJTG6BsLdQBsLem6JUQm6JTreBsQiRAViMAAQo2AAndlig");
	var mask_graphics_282 = new cjs.Graphics().p("EgIUAmPMAgSgtsQJdGsB+LaQB+LbmsJeQmsJerbB8QinAdigAAQoeAAnTlKg");
	var mask_graphics_283 = new cjs.Graphics().p("EgHxAmoMAfMgudQJnGeCPLWQCPLYmdJoQmeJorXCOQi8Ali1AAQoGAAnIkyg");
	var mask_graphics_284 = new cjs.Graphics().p("EgHOAm/MAeFgvLQJxGPCgLTQCgLVmOJxQmPJxrUCgQjRAujIAAQnvAAm9kcg");
	var mask_graphics_285 = new cjs.Graphics().p("EgGqAnWMAc8gv4QJ7GACxLPQCyLRmAJ6QmAJ7rQCxQjlA4jbAAQnaAAmwkGg");
	var mask_graphics_286 = new cjs.Graphics().p("EgGGAnsMAb0gwjQKDFxDCLLQDDLMlxKDQlwKErMDBQj4BEjvAAQnEAAmkjxg");
	var mask_graphics_287 = new cjs.Graphics().p("EgFhAoBMAapgxMQKMFhDULGQDTLIlhKLQliKNrGDSQkLBQkDAAQmvAAmWjdg");
	var mask_graphics_288 = new cjs.Graphics().p("EgE7AoWMAZegx0QKUFSDkLAQDkLClSKUQlRKVrCDjQkdBdkWAAQmaAAmIjJg");
	var mask_graphics_289 = new cjs.Graphics().p("EgEVAopMAYRgyZQKcFCD1K7QD1K8lCKcQlCKcq8D0QkvBrkpAAQmGAAl5i3g");
	var mask_graphics_290 = new cjs.Graphics().p("EgDvAo8MAXFgy+QKjEyEGK1QEFK3kyKjQkyKkq2EEQlBB5k8AAQlxAAlrikg");
	var mask_graphics_291 = new cjs.Graphics().p("EgDIApNMAV3gzfQKqEiEWKvQEWKvkiKrQkiKrqvEUQlSCJlQAAQldAAlbiUg");
	var mask_graphics_292 = new cjs.Graphics().p("EgChApeMAUpgz/QKxEREmKoQEmKpkSKxQkRKyqpElQliCZljAAQlKAAlLiEg");
	var mask_graphics_293 = new cjs.Graphics().p("EgB5ApuMATZg0eQK3EBE2KhQE3KikCK3QkBK4qhE1QlxCql4ABQk2AAk6h1g");
	var mask_graphics_294 = new cjs.Graphics().p("EgBRAp9MASJg06QK9DwFGKZQFGKbjwK9QjxK+qaFFQmAC8mLAAQkjAAkphmg");
	var mask_graphics_295 = new cjs.Graphics().p("EgAoAqLMAQ4g1VQLCDgFWKRQFWKTjgLCQjgLEqSFUQmODQmgAAQkQAAkWhZg");
	var mask_graphics_296 = new cjs.Graphics().p("EgAGAqWMAPzg1pQLHDRFjKKQFjKMjRLHQjSLHqLFiQmaDgmyAAQj/AAkHhOg");
	var mask_graphics_297 = new cjs.Graphics().p("EAAcAqhMAOvg19QLLDDFwKDQFwKEjELLQjDLMqEFvQmlDxnEAAQjvAAj3hEg");
	var mask_graphics_298 = new cjs.Graphics().p("EAA+AqrMANrg2QQLPC1F8J8QF9J8i1LPQi1LQp9F7QmwEDnWAAQjeAAjog6g");
	var mask_graphics_299 = new cjs.Graphics().p("EABhAq0MAMlg2gQLSCmGKJ0QGJJ1inLSQimLTp1GIQm6EVnpAAQjOAAjXgxg");
	var mask_graphics_300 = new cjs.Graphics().p("EACFAq8MALeg2vQLWCYGVJsQGWJtiYLVQiYLWptGVQnEEon7AAQi+AAjFgqg");
	var mask_graphics_301 = new cjs.Graphics().p("EACoArEMAKYg29QLZCJGiJlQGiJkiKLYQiJLZplGhQnNE7oPAAQitAAi0gig");
	var mask_graphics_302 = new cjs.Graphics().p("EADLArLMAJSg3KQLbB7GvJcQGuJch7LaQh7LcpcGtQnXFQoiAAQicAAijgcg");
	var mask_graphics_303 = new cjs.Graphics().p("EADvArSMAILg3WQLeBtG6JTQG6JThsLdQhtLepTG5QnfFko3AAQiLAAiQgVg");
	var mask_graphics_304 = new cjs.Graphics().p("EAETArXMAHEg3fQLfBeHGJLQHGJJhdLfQheLgpKHFQnnF5pNAAQh5AAh9gQg");
	var mask_graphics_305 = new cjs.Graphics().p("EAE2ArcMAF+g3nQLhBPHRJBQHSJBhPLhQhPLhpBHRQnuGPpjAAQhnAAhrgMg");
	var mask_graphics_306 = new cjs.Graphics().p("EAFaArhMAE2g3vQLjBBHdI3QHdI3hALjQhBLjo3HcQn1Glp5AAQhVAAhYgHg");
	var mask_graphics_307 = new cjs.Graphics().p("EAF+ArkMADvg3zQLjAxHpIuQHoItgyLkQgxLkouHnQn7G9qRAAQhCAAhEgFg");
	var mask_graphics_308 = new cjs.Graphics().p("EAGiArnMACng34QLlAjHzIkQHzIjgiLlQgjLlokHyQoBHUqpAAQgvAAgwgCg");
	var mask_graphics_309 = new cjs.Graphics().p("EAHGArpMABfg36QLlATH/IbQH+IZgULlQgULloaH9QoGHsrCAAIg3AAg");
	var mask_graphics_310 = new cjs.Graphics().p("EAHqArqMAAYg37QLlAFIJIQQIJIPgFLlQgFLloQIIQoLIFrcAAIgOAAg");
	var mask_graphics_311 = new cjs.Graphics().p("AHesQQLlgKITIFQIUIEAJLmQAKLloFISQoFIVrlAKg");
	var mask_graphics_312 = new cjs.Graphics().p("AG6sOQLlgZIdH6QIeH6AZLlQAYLln6IdQn7IerlAZg");
	var mask_graphics_313 = new cjs.Graphics().p("AGWsMQLkgnIoHwQInHuAoLkQAnLlnvInQnwIorkAog");
	var mask_graphics_314 = new cjs.Graphics().p("AFysHQLkg3IxHlQIxHjA2LjQA3LknlIwQnkIzrjA2g");
	var mask_graphics_315 = new cjs.Graphics().p("AFPsCQLhhFI7HZQI7HYBFLiQBFLinZI6QnZI8riBFg");
	var mask_graphics_316 = new cjs.Graphics().p("AErr8QLghUJEHOQJFHMBTLhQBULhnOJDQnNJFrhBUg");
	var mask_graphics_317 = new cjs.Graphics().p("AEHr1QLfhiJNHCQJNHBBjLeQBiLfnCJMQnCJPreBig");
	var mask_graphics_318 = new cjs.Graphics().p("ADjrtQLdhxJWG2QJWG2BxLcQByLdm3JVQm2JXrcBxg");
	var mask_graphics_319 = new cjs.Graphics().p("ADArjQLaiAJfGqQJfGqB/LZQCALbmqJdQmqJgraCAg");
	var mask_graphics_320 = new cjs.Graphics().p("ACdrZQLXiOJnGeQJnGeCPLWQCOLYmeJmQmeJorXCOg");
	var mask_graphics_321 = new cjs.Graphics().p("AB5rNQLVidJvGRQJvGSCdLTQCdLVmSJuQmRJwrUCdg");
	var mask_graphics_322 = new cjs.Graphics().p("ABWrBQLRirJ3GFQJ4GFCrLQQCrLRmFJ2QmEJ5rRCrg");
	var mask_graphics_323 = new cjs.Graphics().p("AAzqzQLOi6J/F4QJ/F4C5LNQC6LOl5J+Ql4KArNC5g");
	var mask_graphics_324 = new cjs.Graphics().p("AARqlQLJjIKGFsQKHFrDILJQDILKlsKFQlrKHrJDIg");
	var mask_graphics_325 = new cjs.Graphics().p("AgRqVQLFjWKNFeQKNFfDXLEQDWLGlfKMQleKPrFDWg");
	var mask_graphics_326 = new cjs.Graphics().p("AgzqEQLAjlKUFSQKUFRDlLAQDkLBlRKTQlRKWrBDkg");
	var mask_graphics_327 = new cjs.Graphics().p("AhVpzQK7jyKbFEQKbFEDyK7QDzK9lFKaQlDKcq8Dyg");
	var mask_graphics_328 = new cjs.Graphics().p("Ah3pgQK2kAKiE2QKhE3EAK2QEBK4k3KgQk3Kiq3EAg");
	var mask_graphics_329 = new cjs.Graphics().p("AiYpMQKxkOKnEpQKnEpEOKxQEPKykqKmQkoKpqyEOg");
	var mask_graphics_330 = new cjs.Graphics().p("Ai5o4QKrkbKtEbQKtEbEcKsQEcKtkcKsQkbKuqsEcg");
	var mask_graphics_331 = new cjs.Graphics().p("AjaoiQKlkpKzENQKyEOEqKlQEqKnkOKyQkOK0qmEpg");
	var mask_graphics_332 = new cjs.Graphics().p("Aj7oLQKgk3K3EAQK4D/E3KgQE3KhkAK3Qj/K4qhE3g");
	var mask_graphics_333 = new cjs.Graphics().p("Akbn0QKZlEK9DyQK9DyFEKZQFFKajzK8QjxK+qaFEg");
	var mask_graphics_334 = new cjs.Graphics().p("Ak7nbQKTlSLBDkQLBDkFSKSQFSKUjkLBQjkLCqTFSg");
	var mask_graphics_335 = new cjs.Graphics().p("AlbnBQKMlfLGDVQLGDWFfKMQFfKNjXLFQjVLGqMFfg");
	var mask_graphics_336 = new cjs.Graphics().p("Al6mnQKFlsLKDIQLKDHFrKFQFsKFjHLKQjHLKqGFsg");
	var mask_graphics_337 = new cjs.Graphics().p("AmYmLQJ9l5LNC5QLOC5F5J9QF5J/i6LNQi5LOp+F5g");
	var mask_graphics_338 = new cjs.Graphics().p("Am3lvQJ1mFLSCqQLRCrGFJ1QGGJ3irLRQiqLSp3GFg");
	var mask_graphics_339 = new cjs.Graphics().p("AnVlSQJumSLUCdQLVCcGSJtQGSJvidLUQicLVpuGSg");
	var mask_graphics_340 = new cjs.Graphics().p("Anzk0QJmmeLXCOQLYCOGeJlQGeJniOLWQiNLZpmGeg");
	var mask_graphics_341 = new cjs.Graphics().p("AoQkVQJdmqLaB/QLbB/GqJdQGrJfiALZQh/LbpdGqg");
	var mask_graphics_342 = new cjs.Graphics().p("Aotj1QJVm2LcBxQLdBwG2JUQG3JWhxLcQhwLdpVG3g");
	var mask_graphics_343 = new cjs.Graphics().p("ApJjUQJLnCLfBiQLfBiHCJLQHDJNhjLeQhhLfpMHCg");
	var mask_graphics_344 = new cjs.Graphics().p("ApliyQJDnOLgBTQLhBTHNJCQHOJEhTLgQhTLhpDHOg");
	var mask_graphics_345 = new cjs.Graphics().p("AqAiQQI6nZLhBEQLiBFHZI5QHaI6hFLhQhELjo6HZg");
	var mask_graphics_346 = new cjs.Graphics().p("AqbhsQIwnlLiA2QLjA1HlIwQHlIwg2LjQg1LkoxHkg");
	var mask_graphics_347 = new cjs.Graphics().p("Aq2hIQImnwLkAnQLkAnHvIlQHwIngnLjQgmLlonHwg");
	var mask_graphics_348 = new cjs.Graphics().p("ArQgjQIcn7LkAYQLlAYH6IcQH7IcgYLkQgYLmocH7g");
	var mask_graphics_349 = new cjs.Graphics().p("ArqACQISoFLkAJQLlAKIGIRQIFISgJLlQgJLmoSIFg");
	var mask_graphics_350 = new cjs.Graphics().p("AsDAoQIHoPLlgFQLlgGIQIHQIQIIAFLkQAGLmoIIQg");
	var mask_graphics_351 = new cjs.Graphics().p("AscBPQH9oZLkgUQLlgVIaH8QIaH+AULkQAVLln9Iag");
	var mask_graphics_352 = new cjs.Graphics().p("As1B3QHzojLjgjQLkgjIkHyQIlHxAiLkQAkLlnyIkg");
	var mask_graphics_353 = new cjs.Graphics().p("AtMCgQHnotLigyQLkgyIuHnQIuHmAxLjQAzLknnIug");
	var mask_graphics_354 = new cjs.Graphics().p("AttDYQHYo6LhhGQLihHI7HYQI8HXBFLhQBHLjnXI7g");
	var mask_graphics_355 = new cjs.Graphics().p("AuNESQHIpHLfhbQLghaJJHIQJIHHBaLfQBbLhnIJIg");
	var mask_graphics_356 = new cjs.Graphics().p("AurFNQG4pTLchvQLdhvJVG4QJVG3BuLdQBwLem4JVg");
	var mask_graphics_357 = new cjs.Graphics().p("AvJGKQGnpgLaiDQLaiDJhGnQJhGnCCLaQCELbmoJhg");
	var mask_graphics_358 = new cjs.Graphics().p("AvmHHQGXprLWiXQLXiXJsGXQJtGWCWLWQCYLXmXJsg");
	var mask_graphics_359 = new cjs.Graphics().p("AwBIFQGGp2LRirQLTirJ3GGQJ4GFCqLSQCsLTmGJ3g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(239).to({graphics:mask_graphics_239,x:229.1,y:274.7}).wait(1).to({graphics:mask_graphics_240,x:229.2,y:274.7}).wait(1).to({graphics:mask_graphics_241,x:229.3,y:274.8}).wait(1).to({graphics:mask_graphics_242,x:229.3,y:274.9}).wait(1).to({graphics:mask_graphics_243,x:229.3,y:274.9}).wait(1).to({graphics:mask_graphics_244,x:229.3,y:275}).wait(1).to({graphics:mask_graphics_245,x:229.3,y:275.1}).wait(1).to({graphics:mask_graphics_246,x:229.3,y:275.2}).wait(1).to({graphics:mask_graphics_247,x:229.4,y:275.3}).wait(1).to({graphics:mask_graphics_248,x:229.4,y:275.4}).wait(1).to({graphics:mask_graphics_249,x:229.4,y:275.5}).wait(1).to({graphics:mask_graphics_250,x:229.4,y:275.6}).wait(1).to({graphics:mask_graphics_251,x:229.5,y:275.7}).wait(1).to({graphics:mask_graphics_252,x:229.5,y:275.7}).wait(1).to({graphics:mask_graphics_253,x:229.5,y:275.8}).wait(1).to({graphics:mask_graphics_254,x:229.5,y:275.9}).wait(1).to({graphics:mask_graphics_255,x:229.5,y:276}).wait(1).to({graphics:mask_graphics_256,x:229.5,y:276.1}).wait(1).to({graphics:mask_graphics_257,x:229.5,y:276.2}).wait(1).to({graphics:mask_graphics_258,x:229.5,y:276.2}).wait(1).to({graphics:mask_graphics_259,x:229.5,y:276.3}).wait(1).to({graphics:mask_graphics_260,x:229.5,y:276.4}).wait(1).to({graphics:mask_graphics_261,x:229.5,y:276.4}).wait(1).to({graphics:mask_graphics_262,x:229.5,y:276.5}).wait(1).to({graphics:mask_graphics_263,x:229.5,y:276.5}).wait(1).to({graphics:mask_graphics_264,x:229.5,y:276.6}).wait(1).to({graphics:mask_graphics_265,x:229.4,y:276.6}).wait(1).to({graphics:mask_graphics_266,x:229.4,y:276.7}).wait(1).to({graphics:mask_graphics_267,x:229.4,y:276.7}).wait(1).to({graphics:mask_graphics_268,x:229.4,y:276.8}).wait(1).to({graphics:mask_graphics_269,x:229.3,y:276.8}).wait(1).to({graphics:mask_graphics_270,x:229.3,y:276.8}).wait(1).to({graphics:mask_graphics_271,x:229.3,y:276.9}).wait(1).to({graphics:mask_graphics_272,x:229.3,y:276.9}).wait(1).to({graphics:mask_graphics_273,x:229.3,y:277}).wait(1).to({graphics:mask_graphics_274,x:229.2,y:277}).wait(1).to({graphics:mask_graphics_275,x:229.2,y:277.1}).wait(1).to({graphics:mask_graphics_276,x:229.2,y:277.2}).wait(1).to({graphics:mask_graphics_277,x:229.3,y:277.3}).wait(1).to({graphics:mask_graphics_278,x:229.3,y:277.3}).wait(1).to({graphics:mask_graphics_279,x:229.3,y:277.4}).wait(1).to({graphics:mask_graphics_280,x:229.3,y:277.5}).wait(1).to({graphics:mask_graphics_281,x:229.3,y:277.6}).wait(1).to({graphics:mask_graphics_282,x:229.4,y:277.7}).wait(1).to({graphics:mask_graphics_283,x:229.4,y:277.8}).wait(1).to({graphics:mask_graphics_284,x:229.4,y:277.9}).wait(1).to({graphics:mask_graphics_285,x:229.4,y:278}).wait(1).to({graphics:mask_graphics_286,x:229.5,y:278.1}).wait(1).to({graphics:mask_graphics_287,x:229.5,y:278.2}).wait(1).to({graphics:mask_graphics_288,x:229.5,y:278.3}).wait(1).to({graphics:mask_graphics_289,x:229.5,y:278.4}).wait(1).to({graphics:mask_graphics_290,x:229.5,y:278.4}).wait(1).to({graphics:mask_graphics_291,x:229.5,y:278.5}).wait(1).to({graphics:mask_graphics_292,x:229.5,y:278.6}).wait(1).to({graphics:mask_graphics_293,x:229.5,y:278.7}).wait(1).to({graphics:mask_graphics_294,x:229.5,y:278.7}).wait(1).to({graphics:mask_graphics_295,x:229.5,y:278.8}).wait(1).to({graphics:mask_graphics_296,x:229.4,y:278.8}).wait(1).to({graphics:mask_graphics_297,x:229.4,y:278.9}).wait(1).to({graphics:mask_graphics_298,x:229.4,y:278.9}).wait(1).to({graphics:mask_graphics_299,x:229.4,y:278.9}).wait(1).to({graphics:mask_graphics_300,x:229.4,y:279}).wait(1).to({graphics:mask_graphics_301,x:229.3,y:279}).wait(1).to({graphics:mask_graphics_302,x:229.3,y:279.1}).wait(1).to({graphics:mask_graphics_303,x:229.3,y:279.1}).wait(1).to({graphics:mask_graphics_304,x:229.3,y:279.1}).wait(1).to({graphics:mask_graphics_305,x:229.2,y:279.2}).wait(1).to({graphics:mask_graphics_306,x:229.2,y:279.2}).wait(1).to({graphics:mask_graphics_307,x:229.2,y:279.3}).wait(1).to({graphics:mask_graphics_308,x:229.2,y:279.3}).wait(1).to({graphics:mask_graphics_309,x:229.2,y:279.4}).wait(1).to({graphics:mask_graphics_310,x:229.2,y:279.4}).wait(1).to({graphics:mask_graphics_311,x:229.2,y:279.5}).wait(1).to({graphics:mask_graphics_312,x:229.2,y:279.5}).wait(1).to({graphics:mask_graphics_313,x:229.2,y:279.5}).wait(1).to({graphics:mask_graphics_314,x:229.2,y:279.4}).wait(1).to({graphics:mask_graphics_315,x:229.2,y:279.3}).wait(1).to({graphics:mask_graphics_316,x:229.2,y:279.2}).wait(1).to({graphics:mask_graphics_317,x:229.2,y:279}).wait(1).to({graphics:mask_graphics_318,x:229.3,y:278.8}).wait(1).to({graphics:mask_graphics_319,x:229.3,y:278.6}).wait(1).to({graphics:mask_graphics_320,x:229.3,y:278.3}).wait(1).to({graphics:mask_graphics_321,x:229.3,y:278}).wait(1).to({graphics:mask_graphics_322,x:229.3,y:277.7}).wait(1).to({graphics:mask_graphics_323,x:229.4,y:277.3}).wait(1).to({graphics:mask_graphics_324,x:229.4,y:276.9}).wait(1).to({graphics:mask_graphics_325,x:229.4,y:276.5}).wait(1).to({graphics:mask_graphics_326,x:229.4,y:276}).wait(1).to({graphics:mask_graphics_327,x:229.4,y:275.5}).wait(1).to({graphics:mask_graphics_328,x:229.4,y:274.9}).wait(1).to({graphics:mask_graphics_329,x:229.4,y:274.4}).wait(1).to({graphics:mask_graphics_330,x:229.4,y:273.8}).wait(1).to({graphics:mask_graphics_331,x:229.4,y:273.1}).wait(1).to({graphics:mask_graphics_332,x:229.4,y:272.4}).wait(1).to({graphics:mask_graphics_333,x:229.4,y:271.7}).wait(1).to({graphics:mask_graphics_334,x:229.4,y:271}).wait(1).to({graphics:mask_graphics_335,x:229.4,y:270.2}).wait(1).to({graphics:mask_graphics_336,x:229.3,y:269.4}).wait(1).to({graphics:mask_graphics_337,x:229.3,y:268.6}).wait(1).to({graphics:mask_graphics_338,x:229.3,y:267.7}).wait(1).to({graphics:mask_graphics_339,x:229.3,y:266.8}).wait(1).to({graphics:mask_graphics_340,x:229.3,y:265.9}).wait(1).to({graphics:mask_graphics_341,x:229.2,y:264.9}).wait(1).to({graphics:mask_graphics_342,x:229.2,y:264}).wait(1).to({graphics:mask_graphics_343,x:229.2,y:262.9}).wait(1).to({graphics:mask_graphics_344,x:229.2,y:261.9}).wait(1).to({graphics:mask_graphics_345,x:229.1,y:260.8}).wait(1).to({graphics:mask_graphics_346,x:229.1,y:259.7}).wait(1).to({graphics:mask_graphics_347,x:229.1,y:258.6}).wait(1).to({graphics:mask_graphics_348,x:229.1,y:257.5}).wait(1).to({graphics:mask_graphics_349,x:229.1,y:256.3}).wait(1).to({graphics:mask_graphics_350,x:229.1,y:255.1}).wait(1).to({graphics:mask_graphics_351,x:229.1,y:253.8}).wait(1).to({graphics:mask_graphics_352,x:229.1,y:252.6}).wait(1).to({graphics:mask_graphics_353,x:229.1,y:251.3}).wait(1).to({graphics:mask_graphics_354,x:229.2,y:249.5}).wait(1).to({graphics:mask_graphics_355,x:229.2,y:247.7}).wait(1).to({graphics:mask_graphics_356,x:229.3,y:245.9}).wait(1).to({graphics:mask_graphics_357,x:229.3,y:244}).wait(1).to({graphics:mask_graphics_358,x:229.4,y:242}).wait(1).to({graphics:mask_graphics_359,x:229.5,y:240}).wait(72));

	// 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AwZhMQCzi4CeiAQD9jNG4gPQG3gPE7FIQE7FIAAHQQAAAJgFBo");
	this.shape_1.setTransform(274,315.6);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(239).to({_off:false},0).wait(192));

	// Layer 9 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_118 = new cjs.Graphics().p("A0KeKQgBrmINoOQIOoMLlAAQLmAAIMIMQIOIOAALmg");
	var mask_1_graphics_119 = new cjs.Graphics().p("AsdKgQH/oaLlgTQLmgTIaH/QIbIAATLlMg3/ABcQgTrmIAoag");
	var mask_1_graphics_120 = new cjs.Graphics().p("As7KqQHyonLkgmQLlgmImHyQIoHxAmLmMg37AC2QgmrlHyong");
	var mask_1_graphics_121 = new cjs.Graphics().p("AtYK0QHkozLjg5QLkg4IyHjQI1HkA4LkMg31AERQg4rkHjo0g");
	var mask_1_graphics_122 = new cjs.Graphics().p("AtzLAQHVo/LhhMQLjhKI+HUQJBHVBLLiMg3tAFsQhLriHVpAg");
	var mask_1_graphics_123 = new cjs.Graphics().p("AuNLMQHHpLLfheQLghdJKHFQJNHGBeLgMg3jAHHQhergHGpMg");
	var mask_1_graphics_124 = new cjs.Graphics().p("AulLaQG3pXLdhxQLdhwJWG3QJYG3BxLdMg3WAIhQhxreG3pWg");
	var mask_1_graphics_125 = new cjs.Graphics().p("Au8LoQGopiLZiDQLbiDJhGnQJiGoCELaMg3HAJ7QiDrbGnphg");
	var mask_1_graphics_126 = new cjs.Graphics().p("AvRL2QGYpsLWiVQLXiWJrGYQJuGXCWLXMg22ALUQiWrWGYptg");
	var mask_1_graphics_127 = new cjs.Graphics().p("AvlMGQGJp3LRinQLTioJ2GHQJ3GICpLTMg2iAMtQiprTGIp2g");
	var mask_1_graphics_128 = new cjs.Graphics().p("Av3MWQF4qALOi6QLOi7J/F4QKCF4C6LOMg2MAOFQi7rOF4qAg");
	var mask_1_graphics_129 = new cjs.Graphics().p("AwHMnQFnqKLJjLQLJjNKJFnQKKFnDNLJMg10APeQjNrJFoqKg");
	var mask_1_graphics_130 = new cjs.Graphics().p("AwWM5QFXqTLDjeQLEjfKRFXQKUFWDfLEMg1aAQ1QjfrEFXqSg");
	var mask_1_graphics_131 = new cjs.Graphics().p("AwkNLQFHqbK9jwQK+jxKaFGQKcFGDwK9Mg09ASMQjxq+FGqbg");
	var mask_1_graphics_132 = new cjs.Graphics().p("AwvNeQE1qjK3kCQK3kCKiE1QKkE0EDK3Mg0fATiQkDq4E2qjg");
	var mask_1_graphics_133 = new cjs.Graphics().p("Aw6NyQEkqrKxkTQKwkUKqEkQKrEiEVKxMgz+AU2QkVqwEkqrg");
	var mask_1_graphics_134 = new cjs.Graphics().p("AxCOGQESqyKqkkQKokmKxETQKzEREmKpMgzbAWLQkmqqETqyg");
	var mask_1_graphics_135 = new cjs.Graphics().p("AxJObQEAq4Kik2QKhk3K4EBQK6D/E3KiMgy2AXeQk3qiEBq5g");
	var mask_1_graphics_136 = new cjs.Graphics().p("AxPOxQDvq/KalHQKZlIK+DwQLADtFIKaMgyPAYwQlIqaDvq/g");
	var mask_1_graphics_137 = new cjs.Graphics().p("AxTPHQDdrEKSlYQKQlZLEDeQLGDbFYKRMgxlAaBQlZqRDdrFg");
	var mask_1_graphics_138 = new cjs.Graphics().p("AxVPeQDLrKKIloQKIlqLJDMQLLDKFqKHMgw6AbSQlqqIDLrLg");
	var mask_1_graphics_139 = new cjs.Graphics().p("AxVP2QC4rPJ/l5QJ+l6LPC6QLQC4F5J9MgwMAchQl6p/C5rPg");
	var mask_1_graphics_140 = new cjs.Graphics().p("AxUQOQCmrTJ1mJQJ0mKLTCnQLVCmGJJzMgvdAdvQmKp1CnrUg");
	var mask_1_graphics_141 = new cjs.Graphics().p("AxRQnQCTrYJrmYQJqmaLXCUQLYCUGaJpMgusAe7QmZprCUrXg");
	var mask_1_graphics_142 = new cjs.Graphics().p("AxNRAQCBrbJgmoQJgmqLaCCQLcCBGpJfMgt4AgGQmqpgCCrbg");
	var mask_1_graphics_143 = new cjs.Graphics().p("AxHRaQBvreJVm4QJUm5LdBwQLfBuG5JUMgtDAhQQm5pVBvreg");
	var mask_1_graphics_144 = new cjs.Graphics().p("AxAR0QBcrgJKnHQJJnILgBdQLiBbHHJJMgsMAiZQnIpKBcrhg");
	var mask_1_graphics_145 = new cjs.Graphics().p("Aw3SPQBKrjI+nVQI9nXLiBKQLkBJHWI9MgrUAjgQnWo+BJrjg");
	var mask_1_graphics_146 = new cjs.Graphics().p("AwsSqQA3rkIxnkQIynlLjA3QLlA2HlIxMgqZAkmQnkoyA2rlg");
	var mask_1_graphics_147 = new cjs.Graphics().p("AwfTGQAjrlIlnyQIln0LlAlQLmAjHzIkMgpcAlqQnzolAkrmg");
	var mask_1_graphics_148 = new cjs.Graphics().p("AwSTiQARrmIZoAQIXoBLmASQLnAQIBIXMgofAmtQoAoYAQrng");
	var mask_1_graphics_149 = new cjs.Graphics().p("AwCT/QgCrmILoPQILoNLlgCQLngCIPIKMgnfAnuQoOoMgCrmg");
	var mask_1_graphics_150 = new cjs.Graphics().p("AvxUcQgVrmH+obQH+obLkgUQLngWIbH+MgmdAosQobn+gVrmg");
	var mask_1_graphics_151 = new cjs.Graphics().p("AveU5QgorlHwooQHwonLjgoQLmgoIpHwMglaApqQoonwgormg");
	var mask_1_graphics_152 = new cjs.Graphics().p("AvKVXQg7rkHio0QHio0Lig6QLlg8I0HiMgkVAqmQo0nig7rkg");
	var mask_1_graphics_153 = new cjs.Graphics().p("Au0V1QhOriHTpBQHTpALhhMQLjhOJBHTMgjPArgQpBnThNrjg");
	var mask_1_graphics_154 = new cjs.Graphics().p("AudWUQhhrgHFpNQHEpLLfhgQLhhhJMHFMgiIAsYQpMnEhgrgg");
	var mask_1_graphics_155 = new cjs.Graphics().p("AuFWzQhyreG1pXQG1pXLchyQLeh0JYG1Mgg/AtPQpYm1hzrdg");
	var mask_1_graphics_156 = new cjs.Graphics().p("AtqXSQiGrbGmpiQGmpiLZiFQLbiGJiGmMgf0AuEQpjmmiFrag");
	var mask_1_graphics_157 = new cjs.Graphics().p("AtPXxQiYrXGWptQGXpsLViXQLXiZJtGWMgepAu3QptmWiYrXg");
	var mask_1_graphics_158 = new cjs.Graphics().p("AsyYRQiqrTGGp3QGHp3LRipQLTisJ3GHMgdcAvnQp3mGirrSg");
	var mask_1_graphics_159 = new cjs.Graphics().p("AsTYxQi9rPF2qAQF2qBLNi8QLPi9KAF2MgcOAwXQqAl2i9rOg");
	var mask_1_graphics_160 = new cjs.Graphics().p("ArzZRQjPrJFmqLQFlqJLIjOQLJjQKLFlMgbAAxEQqJlljPrJg");
	var mask_1_graphics_161 = new cjs.Graphics().p("ArSZxQjhrEFVqTQFVqSLCjgQLEjiKUFVMgZwAxuQqSlVjhrDg");
	var mask_1_graphics_162 = new cjs.Graphics().p("AqvaRQjzq9FEqcQFEqbK9jyQK+j0KbFEMgYdAyYQqblEjzq+g");
	var mask_1_graphics_163 = new cjs.Graphics().p("AqLayQkFq4EzqjQE0qjK1kEQK4kFKkEzMgXMAy+QqikzkFq3g");
	var mask_1_graphics_164 = new cjs.Graphics().p("AplbSQkXqwEiqrQEiqrKvkVQKxkXKrEhMgV4AzjQqqkhkWqxg");
	var mask_1_graphics_165 = new cjs.Graphics().p("Ao/bzQknqpEQqyQEQqyKoknQKpkoKzEQMgUkA0FQqxkQkoqpg");
	var mask_1_graphics_166 = new cjs.Graphics().p("AoXcUQk5qhD/q5QD/q5Kgk4QKhk6K5D/MgTOA0mQq4j/k5qhg");
	var mask_1_graphics_167 = new cjs.Graphics().p("Anuc1QlKqZDtrAQDtq+KYlJQKalLK/DtMgR4A1EQq/jtlKqZg");
	var mask_1_graphics_168 = new cjs.Graphics().p("AnDdWQlbqRDbrFQDbrEKPlaQKRlcLFDbMgQhA1gQrEjblbqQg");
	var mask_1_graphics_169 = new cjs.Graphics().p("AmXd3QlsqIDJrKQDJrKKGlqQKIltLKDJMgPKA16QrJjJlrqHg");
	var mask_1_graphics_170 = new cjs.Graphics().p("AlreXQl7p+C2rPQC3rOJ9l7QJ+l9LPC3MgNyA2RQrPi3l7p+g");
	var mask_1_graphics_171 = new cjs.Graphics().p("Ak9e4QmLp0CkrTQCkrUJzmKQJ0mNLUCkMgMZA2nQrUilmLp0g");
	var mask_1_graphics_172 = new cjs.Graphics().p("AkOfZQmbpqCSrXQCRrXJpmbQJqmdLYCSMgLAA26QrYiSmbpqg");
	var mask_1_graphics_173 = new cjs.Graphics().p("Ajdf6QmspfCArbQB/rbJemqQJfmsLbB/MgJmA3KQrbh/mqpfg");
	var mask_1_graphics_174 = new cjs.Graphics().p("EgCsAgbQm7pVBtreQBsreJTm5QJVm7LeBsMgINA3ZQrehsm5pUg");
	var mask_1_graphics_175 = new cjs.Graphics().p("EgB6Ag7QnKpJBargQBarhJInIQJJnKLgBaMgGyA3lQrhhanIpJg");
	var mask_1_graphics_176 = new cjs.Graphics().p("EgBHAhbQnYo8BHrjQBHrjI8nWQI9naLjBHMgFYA3vQrjhHnXo9g");
	var mask_1_graphics_177 = new cjs.Graphics().p("EgATAh8QnmoxA0rkQA0rlIwnlQIxnnLkA0MgD9A33Qrkg1nmowg");
	var mask_1_graphics_178 = new cjs.Graphics().p("EAAhAicQnzokAhrmQAirlIjnzQIkn2LlAiMgCiA37Qrlghn1okg");
	var mask_1_graphics_179 = new cjs.Graphics().p("EABXAi8QoBoYAOrmQAPrmIWoAQIXoELmAPMgBGA3+QrmgOoDoXg");
	var mask_1_graphics_180 = new cjs.Graphics().p("EACEAjbQoPoKgErmQgFrmIJoOQIKoRLmgEMAAVA3/IgMAAQreAAoMoGg");
	var mask_1_graphics_181 = new cjs.Graphics().p("EACOAj6Qocn8gXrmQgXrmH7obQH8oeLmgXMABwA39IhBABQq9AAoFnmg");
	var mask_1_graphics_182 = new cjs.Graphics().p("EACZAkYQopnugqrlQgqrmHtonQHvorLlgqMADKA36Qg6ADg4AAQqeAAn+nIg");
	var mask_1_graphics_183 = new cjs.Graphics().p("EACkAk1Qo1ngg9rkQg9rkHho0QHfo3Ljg9MAEmA30QhTAGhRAAQp/AAn3mqg");
	var mask_1_graphics_184 = new cjs.Graphics().p("EACxAlRQpCnRhPriQhQriHSpBQHRpDLhhPMAGBA3qQhsAMhoAAQpiAAnumOg");
	var mask_1_graphics_185 = new cjs.Graphics().p("EAC+AlsQpNnChirgQhjrgHDpMQHCpPLghiMAHaA3gQiDASh/AAQpHAAnklzg");
	var mask_1_graphics_186 = new cjs.Graphics().p("EADMAmHQpYm0h1rdQh1rdG0pXQGypaLdh1MAI1A3TQibAYiVAAQosAAnalXg");
	var mask_1_graphics_187 = new cjs.Graphics().p("EADbAmgQpjmkiIraQiIraGlpiQGjplLaiHMAKOA3DQiyAhirAAQoRAAnPk+g");
	var mask_1_graphics_188 = new cjs.Graphics().p("EADqAm4QptmUiarWQiarWGUpuQGUpuLWiaMALoA2xQjJAqjAABQn5AAnDkmg");
	var mask_1_graphics_189 = new cjs.Graphics().p("EAD7AnQQp4mFitrRQisrTGFp3QGDp5LSisMANBA2dQjeA1jVAAQnhAAm2kNg");
	var mask_1_graphics_190 = new cjs.Graphics().p("EAEMAnmQqCl0i+rNQi/rOF0qBQF0qCLNi/MAOZA2HQjzBBjqAAQnKAAmoj3g");
	var mask_1_graphics_191 = new cjs.Graphics().p("EAEdAn8QqKlkjRrIQjRrJFkqKQFkqMLHjRMAPxA1vQkHBNj/AAQmzAAmbjgg");
	var mask_1_graphics_192 = new cjs.Graphics().p("EAEwAoQQqUlTjjrCQjjrDFUqUQFTqULBjjMARJA1UQkbBbkUAAQmcAAmMjMg");
	var mask_1_graphics_193 = new cjs.Graphics().p("EAFDAokQqclCj1q9Qj1q9FDqcQFCqcK8j1MASeA03QkuBpkpAAQmGAAl8i3g");
	var mask_1_graphics_194 = new cjs.Graphics().p("EAFXAo2QqkkxkHq2QkGq2ExqkQExqlK1kGMAT1A0XQlBB6k9AAQlxAAlsilg");
	var mask_1_graphics_195 = new cjs.Graphics().p("EAFrApIQqrkgkYqvQkYqwEgqrQEgqsKukYMAVJAz2QlTCKlSAAQlcAAlbiSg");
	var mask_1_graphics_196 = new cjs.Graphics().p("EAGBApZQqzkPkpqoQkqqoEPqyQEOq0KnkpMAWdAzSQlkCclnAAQlHAAlJiAg");
	var mask_1_graphics_197 = new cjs.Graphics().p("EAGXApoQq6j9k6qgQk7qgD9q5QD8q6Kfk7MAXxAytQl1Cvl9AAQkxAAk3hxg");
	var mask_1_graphics_198 = new cjs.Graphics().p("EAGtAp2Qq/jrlMqXQlMqZDsq/QDqrAKXlMMAZCAyGQmEDCmTAAQkdAAkkhig");
	var mask_1_graphics_199 = new cjs.Graphics().p("EAHEAqEQrFjZlcqPQldqQDarFQDYrGKOlcMAaTAxbQmTDXmpAAQkIAAkRhTg");
	var mask_1_graphics_200 = new cjs.Graphics().p("EAHcAqQQrKjHltqGQluqGDIrLQDGrLKFltMAbjAwwQmiDsm/AAQj0AAj8hGg");
	var mask_1_graphics_201 = new cjs.Graphics().p("EAH0AqbQrPi0l9p9Ql+p9C1rPQC1rQJ7l9MAcyAwCQmwECnWAAQjfAAjog6g");
	var mask_1_graphics_202 = new cjs.Graphics().p("EAINAqlQrTiimOpzQmNpzCjrTQChrVJzmNMAd+AvSQm9EanuAAQjKAAjSgvg");
	var mask_1_graphics_203 = new cjs.Graphics().p("EAInAquQrYiPmdppQmdppCQrXQCPrYJpmdMAfLAugQnKEyoHAAQi0ABi8gmg");
	var mask_1_graphics_204 = new cjs.Graphics().p("EAJBAq2Qrbh9mtpeQmtpeB+rbQB9rbJdmtMAgWAttQnUFMohAAQifAAilgdg");
	var mask_1_graphics_205 = new cjs.Graphics().p("EAJbAq9Qrdhrm8pSQm9pTBsreQBqrfJSm8MAhgAs4QngFmo6AAQiJAAiPgVg");
	var mask_1_graphics_206 = new cjs.Graphics().p("EAJ2ArDQrghYnLpHQnLpIBZrgQBXriJHnKMAioAsAQnqGBpWAAQhyAAh3gOg");
	var mask_1_graphics_207 = new cjs.Graphics().p("EAKSArHQrihFnao7Qnao8BGriQBErkI8nZMAjuArGQnyGepzAAQhbAAhegJg");
	var mask_1_graphics_208 = new cjs.Graphics().p("EAKuArKQrkgynoovQnoovAzrkQAyrmIvnnMAk0AqMQn7G6qQAAQhEAAhFgFg");
	var mask_1_graphics_209 = new cjs.Graphics().p("EALLArMQrlgfn2ojQn3oiAhrlQAernIjn1MAl4ApPQoCHYqwAAQgrAAgrgCg");
	var mask_1_graphics_210 = new cjs.Graphics().p("EALoArNQrngMoDoWQoEoWAOrlQALrnIWoDMAm6AoQQoIH3rQAAIgjAAg");
	var mask_1_graphics_211 = new cjs.Graphics().p("EgHyAjLQoRoJgGrmQgHrnIIoQMAn8AnQQoJIRrmAHIgSAAQrbAAoKoCg");
	var mask_1_graphics_212 = new cjs.Graphics().p("EgHhAjqQoen7gZrmQgarmH7oeMAo6AmOQn6IfrmAZIhGABQq6AAoEnig");
	var mask_1_graphics_213 = new cjs.Graphics().p("EgHOAkHQorntgsrkQgtrmHtoqMAp4AlLQntIrrlAsQg9AEg8AAQqaAAn8nFg");
	var mask_1_graphics_214 = new cjs.Graphics().p("EgG7AkkQo3neg+rjQhArlHeo2MAq0AkGQnfI3rkA/QhWAHhTAAQp8AAn1mng");
	var mask_1_graphics_215 = new cjs.Graphics().p("EgGmAlAQpDnQhRrhQhTrjHQpCMArtAjAQnQJDriBSQhuAMhrAAQpfAAnsmLg");
	var mask_1_graphics_216 = new cjs.Graphics().p("EgGQAlcQpPnChkrfQhlrgHBpOMAslAh4QnBJPrgBkQiGASiCAAQpDAAnilug");
	var mask_1_graphics_217 = new cjs.Graphics().p("EgF5Al2Qpamyh3rdQh4rdGypZMAtcAguQmyJardB3QieAaiYAAQopAAnXlUg");
	var mask_1_graphics_218 = new cjs.Graphics().p("EgFhAmPQplmjiJrZQiKraGipkMAuQAfkQmjJlrZCKQi1AiitAAQoQAAnMk7g");
	var mask_1_graphics_219 = new cjs.Graphics().p("EgFHAmnQpwmTibrVQidrWGSpvMAvCAeYQmSJvrWCdQjLArjDAAQn2AAnAkig");
	var mask_1_graphics_220 = new cjs.Graphics().p("EgEtAm/Qp6mDitrRQiwrTGDp5MAvyAdMQmCJ5rSCvQjgA2jYAAQnfAAmzkKg");
	var mask_1_graphics_221 = new cjs.Graphics().p("EgERAnVQqElzjArMQjBrOFyqDMAwhAb9QlyKDrNDBQj2BCjtAAQnHAAmljzg");
	var mask_1_graphics_222 = new cjs.Graphics().p("EgD1AnqQqMlijSrHQjUrJFiqMMAxNAauQliKMrIDTQkKBPkBAAQmwAAmYjeg");
	var mask_1_graphics_223 = new cjs.Graphics().p("EgDXAn/QqVlSjlrCQjmrCFSqVMAx4AZdQlRKVrDDlQkdBckXAAQmZAAmJjIg");
	var mask_1_graphics_224 = new cjs.Graphics().p("EgC4AoSQqelAj2q8Qj4q9FAqdMAyhAYLQlAKdq9D3QkwBskrAAQmEAAl5i1g");
	var mask_1_graphics_225 = new cjs.Graphics().p("EgCYAolQqmkwkIq1QkJq2EvqlMAzGAW4QkvKlq1EJQlEB7lAAAQluAAloihg");
	var mask_1_graphics_226 = new cjs.Graphics().p("EgB4Ao2QqtkekZquQkbqwEeqsMAzqAVlQkdKsqvEbQlVCMlVAAQlZAAlYiQg");
	var mask_1_graphics_227 = new cjs.Graphics().p("EgBWApGQq0kMkrqnQksqoEMq0MA0NAURQkMKzqoEsQlmCelqAAQlEAAlGh/g");
	var mask_1_graphics_228 = new cjs.Graphics().p("EgAzApWQq7j7k8qfQk+qgD7q7MA0tAS7Qj7K7qfE9Ql3Cwl/AAQkwAAkzhug");
	var mask_1_graphics_229 = new cjs.Graphics().p("EgAPApkQrBjplNqXQlPqYDprAMA1KARlQjpLAqXFOQmGDFmVAAQkbAAkghgg");
	var mask_1_graphics_230 = new cjs.Graphics().p("EAAUApxQrGjXldqOQlgqPDXrGMA1mAQOQjXLGqOFeQmWDamrAAQkGAAkOhSg");
	var mask_1_graphics_231 = new cjs.Graphics().p("EAA6Ap9QrLjFluqFQlwqFDErMMA2AAO3QjFLLqGFvQmkDvnCAAQjxAAj5hFg");
	var mask_1_graphics_232 = new cjs.Graphics().p("EABgAqIQrQiyl+p8QmBp8CzrQMA2WANeQiyLQp8GAQmyEFnZAAQjcAAjlg5g");
	var mask_1_graphics_233 = new cjs.Graphics().p("EACHAqSQrUigmOpxQmRpzCgrUMA2rAMFQigLVpyGPQm+EdnxAAQjIAAjPgug");
	var mask_1_graphics_234 = new cjs.Graphics().p("EACvAqbQrYiNmepoQmgpoCNrYMA2+AKsQiOLZpnGfQnLE1oKAAQiyAAi5gkg");
	var mask_1_graphics_235 = new cjs.Graphics().p("EADYAqjQrbh7mupdQmwpdB7rbMA3OAJSQh7LcpdGuQnWFPojAAQidAAiigbg");
	var mask_1_graphics_236 = new cjs.Graphics().p("EAEBAqqQrehpm9pRQm/pSBprfMA3cAH5QhpLepRG+QnhFpo+AAQiGAAiMgTg");
	var mask_1_graphics_237 = new cjs.Graphics().p("EAEsAqvQrhhWnMpGQnOpGBWrhMA3oAGeQhWLhpGHNQnrGFpZAAQhwAAhzgOg");
	var mask_1_graphics_238 = new cjs.Graphics().p("EAFXAqzQrjhDnao6Qndo6BDrjMA3xAFDQhDLjo6HcQn0Ghp2AAQhYAAhbgJg");
	var mask_1_graphics_239 = new cjs.Graphics().p("EAGCAq2QrjgwnpouQnrouAwrkMA34ADoQgwLlouHqQn8G+qUAAQhAAAhDgFg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(118).to({graphics:mask_1_graphics_118,x:229.3,y:193}).wait(1).to({graphics:mask_1_graphics_119,x:229.3,y:195.2}).wait(1).to({graphics:mask_1_graphics_120,x:229.2,y:197.4}).wait(1).to({graphics:mask_1_graphics_121,x:229,y:199.6}).wait(1).to({graphics:mask_1_graphics_122,x:228.8,y:201.8}).wait(1).to({graphics:mask_1_graphics_123,x:228.6,y:204}).wait(1).to({graphics:mask_1_graphics_124,x:228.3,y:206.2}).wait(1).to({graphics:mask_1_graphics_125,x:227.9,y:208.4}).wait(1).to({graphics:mask_1_graphics_126,x:227.5,y:210.5}).wait(1).to({graphics:mask_1_graphics_127,x:227,y:212.7}).wait(1).to({graphics:mask_1_graphics_128,x:226.4,y:214.8}).wait(1).to({graphics:mask_1_graphics_129,x:225.8,y:217}).wait(1).to({graphics:mask_1_graphics_130,x:225.2,y:219.1}).wait(1).to({graphics:mask_1_graphics_131,x:224.4,y:221.2}).wait(1).to({graphics:mask_1_graphics_132,x:223.7,y:223.3}).wait(1).to({graphics:mask_1_graphics_133,x:222.9,y:225.3}).wait(1).to({graphics:mask_1_graphics_134,x:222,y:227.4}).wait(1).to({graphics:mask_1_graphics_135,x:221.1,y:229.4}).wait(1).to({graphics:mask_1_graphics_136,x:220.1,y:231.4}).wait(1).to({graphics:mask_1_graphics_137,x:219,y:233.3}).wait(1).to({graphics:mask_1_graphics_138,x:218,y:235.3}).wait(1).to({graphics:mask_1_graphics_139,x:216.8,y:237.2}).wait(1).to({graphics:mask_1_graphics_140,x:215.6,y:239.1}).wait(1).to({graphics:mask_1_graphics_141,x:214.4,y:240.9}).wait(1).to({graphics:mask_1_graphics_142,x:213.1,y:242.7}).wait(1).to({graphics:mask_1_graphics_143,x:211.8,y:244.5}).wait(1).to({graphics:mask_1_graphics_144,x:210.4,y:246.3}).wait(1).to({graphics:mask_1_graphics_145,x:209,y:248}).wait(1).to({graphics:mask_1_graphics_146,x:207.5,y:249.7}).wait(1).to({graphics:mask_1_graphics_147,x:206,y:251.3}).wait(1).to({graphics:mask_1_graphics_148,x:204.5,y:252.9}).wait(1).to({graphics:mask_1_graphics_149,x:202.9,y:254.5}).wait(1).to({graphics:mask_1_graphics_150,x:201.2,y:256}).wait(1).to({graphics:mask_1_graphics_151,x:199.6,y:257.5}).wait(1).to({graphics:mask_1_graphics_152,x:197.8,y:258.9}).wait(1).to({graphics:mask_1_graphics_153,x:196.1,y:260.3}).wait(1).to({graphics:mask_1_graphics_154,x:194.3,y:261.6}).wait(1).to({graphics:mask_1_graphics_155,x:192.5,y:262.9}).wait(1).to({graphics:mask_1_graphics_156,x:190.6,y:264.2}).wait(1).to({graphics:mask_1_graphics_157,x:188.7,y:265.4}).wait(1).to({graphics:mask_1_graphics_158,x:186.8,y:266.5}).wait(1).to({graphics:mask_1_graphics_159,x:184.8,y:267.7}).wait(1).to({graphics:mask_1_graphics_160,x:182.9,y:268.7}).wait(1).to({graphics:mask_1_graphics_161,x:180.8,y:269.7}).wait(1).to({graphics:mask_1_graphics_162,x:178.8,y:270.7}).wait(1).to({graphics:mask_1_graphics_163,x:176.7,y:271.6}).wait(1).to({graphics:mask_1_graphics_164,x:174.7,y:272.4}).wait(1).to({graphics:mask_1_graphics_165,x:172.6,y:273.2}).wait(1).to({graphics:mask_1_graphics_166,x:170.4,y:274}).wait(1).to({graphics:mask_1_graphics_167,x:168.3,y:274.7}).wait(1).to({graphics:mask_1_graphics_168,x:166.1,y:275.3}).wait(1).to({graphics:mask_1_graphics_169,x:163.9,y:275.9}).wait(1).to({graphics:mask_1_graphics_170,x:161.7,y:276.4}).wait(1).to({graphics:mask_1_graphics_171,x:159.5,y:276.9}).wait(1).to({graphics:mask_1_graphics_172,x:157.3,y:277.3}).wait(1).to({graphics:mask_1_graphics_173,x:155,y:277.6}).wait(1).to({graphics:mask_1_graphics_174,x:152.8,y:277.9}).wait(1).to({graphics:mask_1_graphics_175,x:150.5,y:278.2}).wait(1).to({graphics:mask_1_graphics_176,x:148.3,y:278.3}).wait(1).to({graphics:mask_1_graphics_177,x:146,y:278.5}).wait(1).to({graphics:mask_1_graphics_178,x:143.7,y:278.5}).wait(1).to({graphics:mask_1_graphics_179,x:141.4,y:278.5}).wait(1).to({graphics:mask_1_graphics_180,x:140.2,y:278.5}).wait(1).to({graphics:mask_1_graphics_181,x:142.5,y:278.4}).wait(1).to({graphics:mask_1_graphics_182,x:144.7,y:278.4}).wait(1).to({graphics:mask_1_graphics_183,x:147,y:278.3}).wait(1).to({graphics:mask_1_graphics_184,x:149.3,y:278.3}).wait(1).to({graphics:mask_1_graphics_185,x:151.5,y:278.3}).wait(1).to({graphics:mask_1_graphics_186,x:153.8,y:278.2}).wait(1).to({graphics:mask_1_graphics_187,x:156,y:278.2}).wait(1).to({graphics:mask_1_graphics_188,x:158.3,y:278.2}).wait(1).to({graphics:mask_1_graphics_189,x:160.5,y:278.1}).wait(1).to({graphics:mask_1_graphics_190,x:162.7,y:278.1}).wait(1).to({graphics:mask_1_graphics_191,x:164.9,y:278}).wait(1).to({graphics:mask_1_graphics_192,x:167.1,y:278}).wait(1).to({graphics:mask_1_graphics_193,x:169.2,y:277.9}).wait(1).to({graphics:mask_1_graphics_194,x:171.4,y:277.9}).wait(1).to({graphics:mask_1_graphics_195,x:173.5,y:277.8}).wait(1).to({graphics:mask_1_graphics_196,x:175.6,y:277.7}).wait(1).to({graphics:mask_1_graphics_197,x:177.7,y:277.7}).wait(1).to({graphics:mask_1_graphics_198,x:179.7,y:277.6}).wait(1).to({graphics:mask_1_graphics_199,x:181.7,y:277.5}).wait(1).to({graphics:mask_1_graphics_200,x:183.7,y:277.4}).wait(1).to({graphics:mask_1_graphics_201,x:185.7,y:277.3}).wait(1).to({graphics:mask_1_graphics_202,x:187.6,y:277.2}).wait(1).to({graphics:mask_1_graphics_203,x:189.5,y:277.1}).wait(1).to({graphics:mask_1_graphics_204,x:191.4,y:277.1}).wait(1).to({graphics:mask_1_graphics_205,x:193.3,y:277}).wait(1).to({graphics:mask_1_graphics_206,x:195.1,y:276.9}).wait(1).to({graphics:mask_1_graphics_207,x:196.8,y:276.8}).wait(1).to({graphics:mask_1_graphics_208,x:198.6,y:276.7}).wait(1).to({graphics:mask_1_graphics_209,x:200.3,y:276.6}).wait(1).to({graphics:mask_1_graphics_210,x:201.9,y:276.5}).wait(1).to({graphics:mask_1_graphics_211,x:203.6,y:276.5}).wait(1).to({graphics:mask_1_graphics_212,x:205.1,y:276.4}).wait(1).to({graphics:mask_1_graphics_213,x:206.7,y:276.4}).wait(1).to({graphics:mask_1_graphics_214,x:208.2,y:276.3}).wait(1).to({graphics:mask_1_graphics_215,x:209.6,y:276.3}).wait(1).to({graphics:mask_1_graphics_216,x:211,y:276.2}).wait(1).to({graphics:mask_1_graphics_217,x:212.4,y:276.2}).wait(1).to({graphics:mask_1_graphics_218,x:213.7,y:276.2}).wait(1).to({graphics:mask_1_graphics_219,x:214.9,y:276.1}).wait(1).to({graphics:mask_1_graphics_220,x:216.1,y:276.1}).wait(1).to({graphics:mask_1_graphics_221,x:217.3,y:276}).wait(1).to({graphics:mask_1_graphics_222,x:218.4,y:276}).wait(1).to({graphics:mask_1_graphics_223,x:219.5,y:275.9}).wait(1).to({graphics:mask_1_graphics_224,x:220.5,y:275.9}).wait(1).to({graphics:mask_1_graphics_225,x:221.4,y:275.8}).wait(1).to({graphics:mask_1_graphics_226,x:222.3,y:275.8}).wait(1).to({graphics:mask_1_graphics_227,x:223.2,y:275.7}).wait(1).to({graphics:mask_1_graphics_228,x:224,y:275.6}).wait(1).to({graphics:mask_1_graphics_229,x:224.7,y:275.6}).wait(1).to({graphics:mask_1_graphics_230,x:225.4,y:275.5}).wait(1).to({graphics:mask_1_graphics_231,x:226.1,y:275.4}).wait(1).to({graphics:mask_1_graphics_232,x:226.6,y:275.3}).wait(1).to({graphics:mask_1_graphics_233,x:227.1,y:275.2}).wait(1).to({graphics:mask_1_graphics_234,x:227.6,y:275.1}).wait(1).to({graphics:mask_1_graphics_235,x:228,y:275}).wait(1).to({graphics:mask_1_graphics_236,x:228.4,y:274.9}).wait(1).to({graphics:mask_1_graphics_237,x:228.7,y:274.9}).wait(1).to({graphics:mask_1_graphics_238,x:228.9,y:274.8}).wait(1).to({graphics:mask_1_graphics_239,x:229.1,y:274.7}).wait(192));

	// Layer 6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("AN+ExQksEbmeAAQm9AAk6lIQk1lBgGoO");
	this.shape_2.setTransform(253.6,418.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("AQzoBQgGHFk1FCQk6FHm9AAQm9AAk6lHQk1lCgHoQ");
	this.shape_3.setTransform(271.5,418.5);

	var maskedShapeInstanceList = [this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},118).to({state:[{t:this.shape_3}]},47).wait(266));

	// Layer 7 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_9 = new cjs.Graphics().p("As4BpIAAjRIZxAAIAADRg");
	var mask_2_graphics_10 = new cjs.Graphics().p("As4B3IAAjtIZxAAIAADtg");
	var mask_2_graphics_11 = new cjs.Graphics().p("As4CEIAAkIIZxAAIAAEIg");
	var mask_2_graphics_12 = new cjs.Graphics().p("As4CSIAAkjIZxAAIAAEjg");
	var mask_2_graphics_13 = new cjs.Graphics().p("As4CgIAAk/IZxAAIAAE/g");
	var mask_2_graphics_14 = new cjs.Graphics().p("As4CuIAAlbIZxAAIAAFbg");
	var mask_2_graphics_15 = new cjs.Graphics().p("As4C8IAAl3IZxAAIAAF3g");
	var mask_2_graphics_16 = new cjs.Graphics().p("As4DJIAAmRIZxAAIAAGRg");
	var mask_2_graphics_17 = new cjs.Graphics().p("As4DXIAAmtIZxAAIAAGtg");
	var mask_2_graphics_18 = new cjs.Graphics().p("As4DlIAAnJIZxAAIAAHJg");
	var mask_2_graphics_19 = new cjs.Graphics().p("As4DzIAAnlIZxAAIAAHlg");
	var mask_2_graphics_20 = new cjs.Graphics().p("As4EAIAAn/IZxAAIAAH/g");
	var mask_2_graphics_21 = new cjs.Graphics().p("As4EOIAAobIZxAAIAAIbg");
	var mask_2_graphics_22 = new cjs.Graphics().p("As4EcIAAo3IZxAAIAAI3g");
	var mask_2_graphics_23 = new cjs.Graphics().p("As4EpIAApSIZxAAIAAJSg");
	var mask_2_graphics_24 = new cjs.Graphics().p("As4E3IAApuIZxAAIAAJug");
	var mask_2_graphics_25 = new cjs.Graphics().p("As4FFIAAqJIZxAAIAAKJg");
	var mask_2_graphics_26 = new cjs.Graphics().p("As4FTIAAqlIZxAAIAAKlg");
	var mask_2_graphics_27 = new cjs.Graphics().p("As4FhIAArBIZxAAIAALBg");
	var mask_2_graphics_28 = new cjs.Graphics().p("As4FuIAArcIZxAAIAALcg");
	var mask_2_graphics_29 = new cjs.Graphics().p("As4F8IAAr3IZxAAIAAL3g");
	var mask_2_graphics_30 = new cjs.Graphics().p("As4GKIAAsTIZxAAIAAMTg");
	var mask_2_graphics_31 = new cjs.Graphics().p("As4GYIAAsvIZxAAIAAMvg");
	var mask_2_graphics_32 = new cjs.Graphics().p("As4GmIAAtLIZxAAIAANLg");
	var mask_2_graphics_33 = new cjs.Graphics().p("As4GzIAAtlIZxAAIAANlg");
	var mask_2_graphics_34 = new cjs.Graphics().p("As4HBIAAuBIZxAAIAAOBg");
	var mask_2_graphics_35 = new cjs.Graphics().p("As4HPIAAudIZxAAIAAOdg");
	var mask_2_graphics_36 = new cjs.Graphics().p("As4HdIAAu5IZxAAIAAO5g");
	var mask_2_graphics_37 = new cjs.Graphics().p("As4HqIAAvTIZxAAIAAPTg");
	var mask_2_graphics_38 = new cjs.Graphics().p("As4H4IAAvvIZxAAIAAPvg");
	var mask_2_graphics_39 = new cjs.Graphics().p("As4IGIAAwLIZxAAIAAQLg");
	var mask_2_graphics_40 = new cjs.Graphics().p("As4ITIAAwmIZxAAIAAQmg");
	var mask_2_graphics_41 = new cjs.Graphics().p("As4IhIAAxBIZxAAIAARBg");
	var mask_2_graphics_42 = new cjs.Graphics().p("As4IvIAAxdIZxAAIAARdg");
	var mask_2_graphics_43 = new cjs.Graphics().p("As4I9IAAx5IZxAAIAAR5g");
	var mask_2_graphics_44 = new cjs.Graphics().p("As4JKIAAyUIZxAAIAASUg");
	var mask_2_graphics_45 = new cjs.Graphics().p("As4JYIAAyvIZxAAIAASvg");
	var mask_2_graphics_46 = new cjs.Graphics().p("As4JmIAAzLIZxAAIAATLg");
	var mask_2_graphics_47 = new cjs.Graphics().p("As4J0IAAznIZxAAIAATng");
	var mask_2_graphics_48 = new cjs.Graphics().p("As4KCIAA0DIZxAAIAAUDg");
	var mask_2_graphics_49 = new cjs.Graphics().p("As4KPIAA0dIZxAAIAAUdg");
	var mask_2_graphics_50 = new cjs.Graphics().p("As4KdIAA05IZxAAIAAU5g");
	var mask_2_graphics_51 = new cjs.Graphics().p("As4KrIAA1VIZxAAIAAVVg");
	var mask_2_graphics_52 = new cjs.Graphics().p("As4K5IAA1xIZxAAIAAVxg");
	var mask_2_graphics_53 = new cjs.Graphics().p("As4LHIAA2NIZxAAIAAWNg");
	var mask_2_graphics_54 = new cjs.Graphics().p("As4LUIAA2nIZxAAIAAWng");
	var mask_2_graphics_55 = new cjs.Graphics().p("As4LiIAA3DIZxAAIAAXDg");
	var mask_2_graphics_56 = new cjs.Graphics().p("As4LwIAA3fIZxAAIAAXfg");
	var mask_2_graphics_57 = new cjs.Graphics().p("As4L9IAA36IZxAAIAAX6g");
	var mask_2_graphics_58 = new cjs.Graphics().p("As4MLIAA4VIZxAAIAAYVg");
	var mask_2_graphics_59 = new cjs.Graphics().p("As4MZIAA4xIZxAAIAAYxg");
	var mask_2_graphics_60 = new cjs.Graphics().p("As4MnIAA5NIZxAAIAAZNg");
	var mask_2_graphics_61 = new cjs.Graphics().p("As4M0IAA5oIZxAAIAAZog");
	var mask_2_graphics_62 = new cjs.Graphics().p("As4NCIAA6DIZxAAIAAaDg");
	var mask_2_graphics_63 = new cjs.Graphics().p("As4NQIAA6fIZxAAIAAafg");
	var mask_2_graphics_64 = new cjs.Graphics().p("As4NeIAA67IZxAAIAAa7g");
	var mask_2_graphics_65 = new cjs.Graphics().p("As4NsIAA7XIZxAAIAAbXg");
	var mask_2_graphics_66 = new cjs.Graphics().p("As4N5IAA7xIZxAAIAAbxg");
	var mask_2_graphics_67 = new cjs.Graphics().p("As4OHIAA8NIZxAAIAAcNg");
	var mask_2_graphics_68 = new cjs.Graphics().p("As4OVIAA8pIZxAAIAAcpg");
	var mask_2_graphics_69 = new cjs.Graphics().p("As4OjIAA9FIZxAAIAAdFg");
	var mask_2_graphics_70 = new cjs.Graphics().p("As4OwIAA9fIZxAAIAAdfg");
	var mask_2_graphics_71 = new cjs.Graphics().p("As4O+IAA97IZxAAIAAd7g");
	var mask_2_graphics_72 = new cjs.Graphics().p("As4PMIAA+XIZxAAIAAeXg");
	var mask_2_graphics_73 = new cjs.Graphics().p("As4PZIAA+yIZxAAIAAeyg");
	var mask_2_graphics_74 = new cjs.Graphics().p("As4PnIAA/NIZxAAIAAfNg");
	var mask_2_graphics_75 = new cjs.Graphics().p("As4P1IAA/pIZxAAIAAfpg");
	var mask_2_graphics_76 = new cjs.Graphics().p("As4QDMAAAggFIZxAAMAAAAgFg");
	var mask_2_graphics_77 = new cjs.Graphics().p("As4QRMAAAgghIZxAAMAAAAghg");
	var mask_2_graphics_78 = new cjs.Graphics().p("As4QeMAAAgg8IZxAAMAAAAg8g");
	var mask_2_graphics_79 = new cjs.Graphics().p("As4QsMAAAghXIZxAAMAAAAhXg");
	var mask_2_graphics_80 = new cjs.Graphics().p("As4Q6MAAAghzIZxAAMAAAAhzg");
	var mask_2_graphics_81 = new cjs.Graphics().p("As4RIMAAAgiPIZxAAMAAAAiPg");
	var mask_2_graphics_82 = new cjs.Graphics().p("As4RWMAAAgirIZxAAMAAAAirg");
	var mask_2_graphics_83 = new cjs.Graphics().p("As4RjMAAAgjFIZxAAMAAAAjFg");
	var mask_2_graphics_84 = new cjs.Graphics().p("As4RxMAAAgjhIZxAAMAAAAjhg");
	var mask_2_graphics_85 = new cjs.Graphics().p("As4R/MAAAgj9IZxAAMAAAAj9g");
	var mask_2_graphics_86 = new cjs.Graphics().p("As4SNMAAAgkZIZxAAMAAAAkZg");
	var mask_2_graphics_87 = new cjs.Graphics().p("As4SaMAAAgkzIZxAAMAAAAkzg");
	var mask_2_graphics_88 = new cjs.Graphics().p("As4SoMAAAglPIZxAAMAAAAlPg");
	var mask_2_graphics_89 = new cjs.Graphics().p("As4S2MAAAglrIZxAAMAAAAlrg");
	var mask_2_graphics_90 = new cjs.Graphics().p("As4TDMAAAgmGIZxAAMAAAAmGg");
	var mask_2_graphics_91 = new cjs.Graphics().p("As4TRMAAAgmhIZxAAMAAAAmhg");
	var mask_2_graphics_92 = new cjs.Graphics().p("As4TfMAAAgm9IZxAAMAAAAm9g");
	var mask_2_graphics_93 = new cjs.Graphics().p("As4TtMAAAgnZIZxAAMAAAAnZg");
	var mask_2_graphics_94 = new cjs.Graphics().p("As4T6MAAAgn0IZxAAMAAAAn0g");
	var mask_2_graphics_95 = new cjs.Graphics().p("As4UIMAAAgoPIZxAAMAAAAoPg");
	var mask_2_graphics_96 = new cjs.Graphics().p("As4UWMAAAgorIZxAAMAAAAorg");
	var mask_2_graphics_97 = new cjs.Graphics().p("As4UkMAAAgpHIZxAAMAAAApHg");
	var mask_2_graphics_98 = new cjs.Graphics().p("As4UxMAAAgpiIZxAAMAAAApig");
	var mask_2_graphics_99 = new cjs.Graphics().p("As4U/MAAAgp9IZxAAMAAAAp9g");
	var mask_2_graphics_100 = new cjs.Graphics().p("As4VNMAAAgqZIZxAAMAAAAqZg");
	var mask_2_graphics_101 = new cjs.Graphics().p("As4VbMAAAgq1IZxAAMAAAAq1g");
	var mask_2_graphics_102 = new cjs.Graphics().p("As4VpMAAAgrRIZxAAMAAAArRg");
	var mask_2_graphics_103 = new cjs.Graphics().p("As4V2MAAAgrrIZxAAMAAAArrg");
	var mask_2_graphics_104 = new cjs.Graphics().p("As4WEMAAAgsHIZxAAMAAAAsHg");
	var mask_2_graphics_105 = new cjs.Graphics().p("As4WSMAAAgsjIZxAAMAAAAsjg");
	var mask_2_graphics_106 = new cjs.Graphics().p("As4WgMAAAgs/IZxAAMAAAAs/g");
	var mask_2_graphics_107 = new cjs.Graphics().p("As4WuMAAAgtbIZxAAMAAAAtbg");
	var mask_2_graphics_108 = new cjs.Graphics().p("As4W7MAAAgt1IZxAAMAAAAt1g");
	var mask_2_graphics_109 = new cjs.Graphics().p("As4XJMAAAguRIZxAAMAAAAuRg");
	var mask_2_graphics_110 = new cjs.Graphics().p("As4XXMAAAgutIZxAAMAAAAutg");
	var mask_2_graphics_111 = new cjs.Graphics().p("As4XkMAAAgvIIZxAAMAAAAvIg");
	var mask_2_graphics_112 = new cjs.Graphics().p("As4XyMAAAgvjIZxAAMAAAAvjg");
	var mask_2_graphics_113 = new cjs.Graphics().p("As4YAMAAAgv/IZxAAMAAAAv/g");
	var mask_2_graphics_114 = new cjs.Graphics().p("As4YOMAAAgwbIZxAAMAAAAwbg");
	var mask_2_graphics_115 = new cjs.Graphics().p("As4YbMAAAgw2IZxAAMAAAAw2g");
	var mask_2_graphics_116 = new cjs.Graphics().p("As4YpMAAAgxRIZxAAMAAAAxRg");
	var mask_2_graphics_117 = new cjs.Graphics().p("As4Y3MAAAgxtIZxAAMAAAAxtg");
	var mask_2_graphics_118 = new cjs.Graphics().p("As4ZFMAAAgyJIZxAAMAAAAyJg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_2_graphics_9,x:222.5,y:68.6}).wait(1).to({graphics:mask_2_graphics_10,x:222.5,y:69.9}).wait(1).to({graphics:mask_2_graphics_11,x:222.5,y:71.3}).wait(1).to({graphics:mask_2_graphics_12,x:222.5,y:72.7}).wait(1).to({graphics:mask_2_graphics_13,x:222.5,y:74.1}).wait(1).to({graphics:mask_2_graphics_14,x:222.5,y:75.4}).wait(1).to({graphics:mask_2_graphics_15,x:222.5,y:76.8}).wait(1).to({graphics:mask_2_graphics_16,x:222.5,y:78.2}).wait(1).to({graphics:mask_2_graphics_17,x:222.5,y:79.6}).wait(1).to({graphics:mask_2_graphics_18,x:222.5,y:80.9}).wait(1).to({graphics:mask_2_graphics_19,x:222.5,y:82.3}).wait(1).to({graphics:mask_2_graphics_20,x:222.5,y:83.7}).wait(1).to({graphics:mask_2_graphics_21,x:222.5,y:85.1}).wait(1).to({graphics:mask_2_graphics_22,x:222.5,y:86.4}).wait(1).to({graphics:mask_2_graphics_23,x:222.5,y:87.8}).wait(1).to({graphics:mask_2_graphics_24,x:222.5,y:89.2}).wait(1).to({graphics:mask_2_graphics_25,x:222.5,y:90.6}).wait(1).to({graphics:mask_2_graphics_26,x:222.5,y:92}).wait(1).to({graphics:mask_2_graphics_27,x:222.5,y:93.3}).wait(1).to({graphics:mask_2_graphics_28,x:222.5,y:94.7}).wait(1).to({graphics:mask_2_graphics_29,x:222.5,y:96.1}).wait(1).to({graphics:mask_2_graphics_30,x:222.5,y:97.5}).wait(1).to({graphics:mask_2_graphics_31,x:222.5,y:98.8}).wait(1).to({graphics:mask_2_graphics_32,x:222.5,y:100.2}).wait(1).to({graphics:mask_2_graphics_33,x:222.5,y:101.6}).wait(1).to({graphics:mask_2_graphics_34,x:222.5,y:103}).wait(1).to({graphics:mask_2_graphics_35,x:222.5,y:104.3}).wait(1).to({graphics:mask_2_graphics_36,x:222.5,y:105.7}).wait(1).to({graphics:mask_2_graphics_37,x:222.5,y:107.1}).wait(1).to({graphics:mask_2_graphics_38,x:222.5,y:108.5}).wait(1).to({graphics:mask_2_graphics_39,x:222.5,y:109.8}).wait(1).to({graphics:mask_2_graphics_40,x:222.5,y:111.2}).wait(1).to({graphics:mask_2_graphics_41,x:222.5,y:112.6}).wait(1).to({graphics:mask_2_graphics_42,x:222.5,y:114}).wait(1).to({graphics:mask_2_graphics_43,x:222.5,y:115.3}).wait(1).to({graphics:mask_2_graphics_44,x:222.5,y:116.7}).wait(1).to({graphics:mask_2_graphics_45,x:222.5,y:118.1}).wait(1).to({graphics:mask_2_graphics_46,x:222.5,y:119.5}).wait(1).to({graphics:mask_2_graphics_47,x:222.5,y:120.8}).wait(1).to({graphics:mask_2_graphics_48,x:222.5,y:122.2}).wait(1).to({graphics:mask_2_graphics_49,x:222.5,y:123.6}).wait(1).to({graphics:mask_2_graphics_50,x:222.5,y:125}).wait(1).to({graphics:mask_2_graphics_51,x:222.5,y:126.4}).wait(1).to({graphics:mask_2_graphics_52,x:222.5,y:127.7}).wait(1).to({graphics:mask_2_graphics_53,x:222.5,y:129.1}).wait(1).to({graphics:mask_2_graphics_54,x:222.5,y:130.5}).wait(1).to({graphics:mask_2_graphics_55,x:222.5,y:131.9}).wait(1).to({graphics:mask_2_graphics_56,x:222.5,y:133.2}).wait(1).to({graphics:mask_2_graphics_57,x:222.5,y:134.6}).wait(1).to({graphics:mask_2_graphics_58,x:222.5,y:136}).wait(1).to({graphics:mask_2_graphics_59,x:222.5,y:137.4}).wait(1).to({graphics:mask_2_graphics_60,x:222.5,y:138.7}).wait(1).to({graphics:mask_2_graphics_61,x:222.5,y:140.1}).wait(1).to({graphics:mask_2_graphics_62,x:222.5,y:141.5}).wait(1).to({graphics:mask_2_graphics_63,x:222.5,y:142.9}).wait(1).to({graphics:mask_2_graphics_64,x:222.5,y:144.2}).wait(1).to({graphics:mask_2_graphics_65,x:222.5,y:145.6}).wait(1).to({graphics:mask_2_graphics_66,x:222.5,y:147}).wait(1).to({graphics:mask_2_graphics_67,x:222.5,y:148.4}).wait(1).to({graphics:mask_2_graphics_68,x:222.5,y:149.7}).wait(1).to({graphics:mask_2_graphics_69,x:222.5,y:151.1}).wait(1).to({graphics:mask_2_graphics_70,x:222.5,y:152.5}).wait(1).to({graphics:mask_2_graphics_71,x:222.5,y:153.9}).wait(1).to({graphics:mask_2_graphics_72,x:222.5,y:155.2}).wait(1).to({graphics:mask_2_graphics_73,x:222.5,y:156.6}).wait(1).to({graphics:mask_2_graphics_74,x:222.5,y:158}).wait(1).to({graphics:mask_2_graphics_75,x:222.5,y:159.4}).wait(1).to({graphics:mask_2_graphics_76,x:222.5,y:160.7}).wait(1).to({graphics:mask_2_graphics_77,x:222.5,y:162.1}).wait(1).to({graphics:mask_2_graphics_78,x:222.5,y:163.5}).wait(1).to({graphics:mask_2_graphics_79,x:222.5,y:164.9}).wait(1).to({graphics:mask_2_graphics_80,x:222.5,y:166.3}).wait(1).to({graphics:mask_2_graphics_81,x:222.5,y:167.6}).wait(1).to({graphics:mask_2_graphics_82,x:222.5,y:169}).wait(1).to({graphics:mask_2_graphics_83,x:222.5,y:170.4}).wait(1).to({graphics:mask_2_graphics_84,x:222.5,y:171.8}).wait(1).to({graphics:mask_2_graphics_85,x:222.5,y:173.1}).wait(1).to({graphics:mask_2_graphics_86,x:222.5,y:174.5}).wait(1).to({graphics:mask_2_graphics_87,x:222.5,y:175.9}).wait(1).to({graphics:mask_2_graphics_88,x:222.5,y:177.3}).wait(1).to({graphics:mask_2_graphics_89,x:222.5,y:178.6}).wait(1).to({graphics:mask_2_graphics_90,x:222.5,y:180}).wait(1).to({graphics:mask_2_graphics_91,x:222.5,y:181.4}).wait(1).to({graphics:mask_2_graphics_92,x:222.5,y:182.8}).wait(1).to({graphics:mask_2_graphics_93,x:222.5,y:184.1}).wait(1).to({graphics:mask_2_graphics_94,x:222.5,y:185.5}).wait(1).to({graphics:mask_2_graphics_95,x:222.5,y:186.9}).wait(1).to({graphics:mask_2_graphics_96,x:222.5,y:188.3}).wait(1).to({graphics:mask_2_graphics_97,x:222.5,y:189.6}).wait(1).to({graphics:mask_2_graphics_98,x:222.5,y:191}).wait(1).to({graphics:mask_2_graphics_99,x:222.5,y:192.4}).wait(1).to({graphics:mask_2_graphics_100,x:222.5,y:193.8}).wait(1).to({graphics:mask_2_graphics_101,x:222.5,y:195.1}).wait(1).to({graphics:mask_2_graphics_102,x:222.5,y:196.5}).wait(1).to({graphics:mask_2_graphics_103,x:222.5,y:197.9}).wait(1).to({graphics:mask_2_graphics_104,x:222.5,y:199.3}).wait(1).to({graphics:mask_2_graphics_105,x:222.5,y:200.7}).wait(1).to({graphics:mask_2_graphics_106,x:222.5,y:202}).wait(1).to({graphics:mask_2_graphics_107,x:222.5,y:203.4}).wait(1).to({graphics:mask_2_graphics_108,x:222.5,y:204.8}).wait(1).to({graphics:mask_2_graphics_109,x:222.5,y:206.2}).wait(1).to({graphics:mask_2_graphics_110,x:222.5,y:207.5}).wait(1).to({graphics:mask_2_graphics_111,x:222.5,y:208.9}).wait(1).to({graphics:mask_2_graphics_112,x:222.5,y:210.3}).wait(1).to({graphics:mask_2_graphics_113,x:222.5,y:211.7}).wait(1).to({graphics:mask_2_graphics_114,x:222.5,y:213}).wait(1).to({graphics:mask_2_graphics_115,x:222.5,y:214.4}).wait(1).to({graphics:mask_2_graphics_116,x:222.5,y:215.8}).wait(1).to({graphics:mask_2_graphics_117,x:222.5,y:217.2}).wait(1).to({graphics:mask_2_graphics_118,x:222.5,y:218.5}).wait(313));

	// 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("AopVLQgi2uR2zn");
	this.shape_4.setTransform(219.5,228.5);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(9).to({_off:false},0).wait(422));

	// Base
	this.instance_3 = new lib._6("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(271.6,282.3);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(431));

	// Background
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_5.setTransform(275,275,3.373,2.543);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_6.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(431));

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