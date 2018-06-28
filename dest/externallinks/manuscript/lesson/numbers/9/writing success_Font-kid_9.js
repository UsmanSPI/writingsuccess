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
	this.shape.graphics.f("#FFFFFF").s().p("ANSdzIAA8/QnCEfmDAAQoQAAlxljQlwlkgBnyQABnyFwlmQFxliIQgBIGDAOQDhAxDqCrQEgEZBiGdIAJCuIgFDqMAAAApyQAABahBAeQg+AghZABQi3gDAAisgApb2/QkED4AAFhQAAFjEAD4QEBD2FfAAQEwAAELjMQEKjMAhkgIAOiiQAAmCjYjeQjejlmyAAQlkAAkED1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.3,-208.1,250.7,416.3);


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
	this.instance.setTransform(49.8,0,1,1,156.5,0,0,0.3,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.4,rotation:0,guide:{path:[49.8,0,49.4,-4.5,48.8,-6.4,47.5,-10.4,45.4,-14.3,37.1,-28.9,20.4,-34.4,3.7,-40,-11.7,-33,-27.1,-26,-32.2,-10.7,-33.6,-6.5,-33.9,-2.4]}},114).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AoVQ2Qpni2kyozMAqdgXFQEyIzi1JmQi3JmoyEyQliDAl0AAQjeAAjkhDg");
	var mask_graphics_1 = new cjs.Graphics().p("An8ROQpsiok+osMAp8gYBQE/IsioJqQipJqorE+QltDRmGAAQjNAAjVg6g");
	var mask_graphics_2 = new cjs.Graphics().p("AnkRmQpuiblLokMApZgY9QFLIliaJuQibJtokFLQl3DimXAAQi+AAjGgxg");
	var mask_graphics_3 = new cjs.Graphics().p("AnLR8QpyiMlXodMAo1gZ3QFXIdiLJyQiOJwodFWQmAD0mqAAQiuAAi1gpg");
	var mask_graphics_4 = new cjs.Graphics().p("AmySSQp2h+lioWMAoPgawQFjIVh+J1Qh/JzoVFiQmKEGm8AAQieAAikghg");
	var mask_graphics_5 = new cjs.Graphics().p("AmaSnQp4hxluoNMAnogbpQFvINhwJ3QhxJ2oNFuQmTEZnPAAQiOAAiTgag");
	var mask_graphics_6 = new cjs.Graphics().p("AmCS7Qp6hjl6oFMAnBgchQF6IFhiJ5QhjJ5oFF6QmbEsniAAQh+AAiCgUg");
	var mask_graphics_7 = new cjs.Graphics().p("AlqTOQp8hVmGn8MAmYgdZQGFH9hTJ7QhWJ7n8GFQmiFBn3AAQhtAAhwgPg");
	var mask_graphics_8 = new cjs.Graphics().p("AlSTgQp+hHmRnzMAltgePQGRH0hFJ9QhIJ8nzGQQmqFWoLAAQhcAAhegKg");
	var mask_graphics_9 = new cjs.Graphics().p("Ak7TwQp/g3mcnrMAlCgfEQGbHrg3J+Qg5J+nqGbQmxFrohAAQhKAAhMgHg");
	var mask_graphics_10 = new cjs.Graphics().p("AkkUAQqAgpmmniMAkUgf4QGnHhgpKAQgrJ/nhGmQm3GBo4AAQg3AAg6gEg");
	var mask_graphics_11 = new cjs.Graphics().p("AkNUPQqBgbmxnYMAjnggsQGxHYgbKAQgcKAnYGxQm8GYpPAAQgmAAgmgCg");
	var mask_graphics_12 = new cjs.Graphics().p("Aj2UdQqBgNm8nPMAi3ghdQG8HOgMKBQgPKAnOG7QnBGvpnAAIglAAg");
	var mask_graphics_13 = new cjs.Graphics().p("A0nNmMAiHgiOQHGHEACKBQAAKAnEHFQnFHGp/ABIgDAAQp/AAnFnDg");
	var mask_graphics_14 = new cjs.Graphics().p("A0bOKMAhWgi+QHQG6AQKAQAOKAm5HPQm7HRp+APIgrAAQpnAAnAmrg");
	var mask_graphics_15 = new cjs.Graphics().p("A0OOtMAgkgjtQHZGvAeKAQAdKAmvHZQmxHap+AdQgpACgoAAQpOAAm7mUg");
	var mask_graphics_16 = new cjs.Graphics().p("A0BPQMAfwgkcQHjGlAsJ/QArJ/mlHjQmlHjp9AsQg9AEg7AAQo2AAm1l9g");
	var mask_graphics_17 = new cjs.Graphics().p("Az0PxMAe7glIQHtGaA7J+QA4J+mZHrQmbHtp8A6QhQAHhNAAQofAAmvlng");
	var mask_graphics_18 = new cjs.Graphics().p("AznQRMAeGglzQH1GPBKJ8QBGJ9mOH0QmQH2p7BIQhhALhfAAQoKAAmolSg");
	var mask_graphics_19 = new cjs.Graphics().p("AzaQxMAdQgmeQH+GEBXJ7QBWJ6mEH+QmEH+p5BWQh0AQhwAAQn1AAmhk9g");
	var mask_graphics_20 = new cjs.Graphics().p("AzMRPMAcZgnGQIGF4BlJ5QBkJ4l4IGQl5IHp3BkQiGAViAAAQnhAAmZkpg");
	var mask_graphics_21 = new cjs.Graphics().p("Ay+RtMAbhgnvQIOFtBzJ2QByJ3ltIOQltIPp0ByQiXAciRAAQnOAAmQkWg");
	var mask_graphics_22 = new cjs.Graphics().p("AywSKMAaogoVQIWFgCCJ0QB/J0lhIWQlhIXpyCAQioAiihAAQm6AAmIkCg");
	var mask_graphics_23 = new cjs.Graphics().p("AyiSmMAZugo7QIeFVCQJxQCNJwlVIeQlVIfpvCOQi5AqixAAQmoAAl+jwg");
	var mask_graphics_24 = new cjs.Graphics().p("AyTTAMAYzgpeQImFJCdJtQCbJtlJIlQlJInpsCcQjIAyjBAAQmWAAl0jfg");
	var mask_graphics_25 = new cjs.Graphics().p("AyFTaMAX4gqBQItE9CrJpQCpJqk8IsQk9IuppCpQjYA8jQAAQmFAAlqjOg");
	var mask_graphics_26 = new cjs.Graphics().p("Ax2TzMAW8gqiQI0EwC4JlQC3JmkwIzQkwI1plC3QjnBFjhAAQlzAAlfi9g");
	var mask_graphics_27 = new cjs.Graphics().p("AxnULMAV/grDQI6EkDHJhQDEJikjI6QkkI7phDFQj1BQjxAAQliAAlUiug");
	var mask_graphics_28 = new cjs.Graphics().p("AxXUiMAVBgrhQJAEWDUJdQDSJdkWJAQkXJCpdDSQkEBbkAAAQlRAAlIieg");
	var mask_graphics_29 = new cjs.Graphics().p("AxIU4MAUDgr/QJHEKDhJYQDfJZkJJFQkKJIpYDgQkSBnkQAAQlBAAk8iQg");
	var mask_graphics_30 = new cjs.Graphics().p("Aw4VNMATEgsbQJMD9DvJTQDsJUj8JLQj9JNpTDtQkgB0kfAAQkxAAkviCg");
	var mask_graphics_31 = new cjs.Graphics().p("AwoVgMASEgs0QJSDvD8JOQD5JOjvJRQjwJSpND7QktCAkvAAQkhAAkih1g");
	var mask_graphics_32 = new cjs.Graphics().p("AwYVzMAREgtOQJXDjEJJHQEHJJjiJWQjjJYpHEHQk6CPk/AAQkSAAkUhpg");
	var mask_graphics_33 = new cjs.Graphics().p("AwIWFMAQFgtlQJbDUEVJCQEUJDjVJbQjVJcpBEVQlGCclQAAQkBAAkHhcg");
	var mask_graphics_34 = new cjs.Graphics().p("Av4WWMAPEgt8QJgDIEiI7QEgI8jHJgQjHJho7EhQlSCslgAAQjyAAj5hRg");
	var mask_graphics_35 = new cjs.Graphics().p("AvnWlMAOCguQQJkC6EvI1QEtI2i6JjQi6Jmo0EuQleC7lwAAQjjAAjphHg");
	var mask_graphics_36 = new cjs.Graphics().p("AvWW0MAM/gukQJoCtE8ItQE5IwisJnQisJqotE6QlpDMmCAAQjSAAjag9g");
	var mask_graphics_37 = new cjs.Graphics().p("AvGXBMAL+gu1QJrCeFIInQFGIoieJrQifJuomFGQlzDdmTAAQjDAAjLg0g");
	var mask_graphics_38 = new cjs.Graphics().p("Au1XOMAK7gvGQJvCRFUIfQFSIhiRJuQiQJxofFTQl9DumlAAQizAAi7grg");
	var mask_graphics_39 = new cjs.Graphics().p("AukXZMAJ3gvUQJyCCFgIYQFfIZiDJxQiDJ0oXFfQmGEAm4AAQijAAiqgjg");
	var mask_graphics_40 = new cjs.Graphics().p("AuTXjMAI0gvhQJ1B0FsIQQFqIRh1J0Qh1J3oPFqQmPETnKAAQiUAAiZgcg");
	var mask_graphics_41 = new cjs.Graphics().p("AuBXsMAHvgvtQJ4BmF3IIQF2IJhnJ2QhmJ5oIF3QmXEmneAAQiDAAiHgWg");
	var mask_graphics_42 = new cjs.Graphics().p("AtwX0MAGrgv4QJ6BZGDH/QGBIAhYJ5QhZJ7n/GCQmfE7nyAAQhyAAh2gRg");
	var mask_graphics_43 = new cjs.Graphics().p("AtfX7MAFngwBQJ8BLGOH2QGMH4hKJ6QhKJ9n2GNQmnFQoHAAQhhAAhkgMg");
	var mask_graphics_44 = new cjs.Graphics().p("AtOYAMAEjgwHQJ9A8GZHtQGYHvg8J8Qg8J/ntGYQmuFkocAAQhQAAhSgIg");
	var mask_graphics_45 = new cjs.Graphics().p("As8YFMADegwNQJ+AuGkHkQGjHlguJ+QguJ/nkGjQm0F6ozAAQg9AAg/gEg");
	var mask_graphics_46 = new cjs.Graphics().p("AsnYIMACagwRQKAAfGtHbQGuHcggJ+QggKBnaGtQm6GRpKAAQgrAAgsgCg");
	var mask_graphics_47 = new cjs.Graphics().p("AsEYKMABUgwUQKBASG4HQQG4HTgSJ/QgRKBnRG4Qm/GopiAAIgwgBg");
	var mask_graphics_48 = new cjs.Graphics().p("AriYLMAAQgwVQKBADHCHHQHCHJgDJ/QgDKBnHHCQnEHAp7AAIgJAAg");
	var mask_graphics_49 = new cjs.Graphics().p("Ar04KQKAgLHMG9QHNG/ALJ/QALKBm9HMQm9HNqBALg");
	var mask_graphics_50 = new cjs.Graphics().p("AsX4IQKAgZHWGyQHWG0AaKAQAZJ/mzHWQmyHXqAAag");
	var mask_graphics_51 = new cjs.Graphics().p("As04GQJ/gnHgGoQHfGpAoJ/QAnJ/mnHgQmpHgp/Aog");
	var mask_graphics_52 = new cjs.Graphics().p("AtG4CQJ/g1HpGdQHpGfA1J9QA2J+mdHpQmeHqp9A2g");
	var mask_graphics_53 = new cjs.Graphics().p("AtX39QJ9hDHyGSQHyGTBEJ9QBEJ8mSHyQmTH0p8BDg");
	var mask_graphics_54 = new cjs.Graphics().p("Ato32QJ7hSH7GGQH7GJBSJ7QBSJ7mHH7QmIH8p6BSg");
	var mask_graphics_55 = new cjs.Graphics().p("At53vQJ5hgIDF7QIEF+BgJ4QBgJ5l7IEQl9IEp4Bgg");
	var mask_graphics_56 = new cjs.Graphics().p("AuL3mQJ3hvIMFwQIMFyBuJ2QBuJ3lwIMQlxINp2Bug");
	var mask_graphics_57 = new cjs.Graphics().p("Auc3dQJ1h8IUFkQIUFmB8J0QB8J0lkIUQlmIVpzB8g");
	var mask_graphics_58 = new cjs.Graphics().p("Aut3SQJyiKIbFYQIcFaCKJxQCKJxlYIcQlZIcpxCLg");
	var mask_graphics_59 = new cjs.Graphics().p("Au+3GQJviYIjFMQIjFOCYJuQCYJulMIiQlNIlpuCYg");
	var mask_graphics_60 = new cjs.Graphics().p("AvP25QJrimIrFAQIqFCCmJqQCmJqlAIqQlBIspqCmg");
	var mask_graphics_61 = new cjs.Graphics().p("Avf2rQJni0IxE0QIyE1CzJmQC0Jnk0IxQk0IzpmCzg");
	var mask_graphics_62 = new cjs.Graphics().p("Avw2cQJjjBI4EnQI4EoDBJjQDCJiknI4QkoI5piDBg");
	var mask_graphics_63 = new cjs.Graphics().p("AwA2MQJejOI+EaQI/EcDPJdQDPJekbI/QkbI/pdDPg");
	var mask_graphics_64 = new cjs.Graphics().p("AwR16QJajdJFEOQJFEPDcJZQDcJZkOJEQkOJGpZDcg");
	var mask_graphics_65 = new cjs.Graphics().p("Awh1oQJVjqJKEAQJLEDDpJUQDqJUkAJKQkCJMpUDpg");
	var mask_graphics_66 = new cjs.Graphics().p("Awx1VQJPj2JQDzQJRD1D2JOQD3JPjzJQQj0JRpPD3g");
	var mask_graphics_67 = new cjs.Graphics().p("AxB1AQJKkEJVDmQJWDnEEJJQEEJKjnJVQjmJWpKEEg");
	var mask_graphics_68 = new cjs.Graphics().p("AxQ0rQJEkRJaDZQJbDaEQJDQERJFjZJZQjZJbpEERg");
	var mask_graphics_69 = new cjs.Graphics().p("Axg0UQI+keJfDLQJfDNEeI9QEdI+jLJdQjMJho9Edg");
	var mask_graphics_70 = new cjs.Graphics().p("Axvz9QI3kqJjC9QJkC/EqI3QErI3i+JiQi+Jlo3Erg");
	var mask_graphics_71 = new cjs.Graphics().p("Ax+zlQIwk2JoCvQJoCyE2IwQE3IwiwJnQixJoowE3g");
	var mask_graphics_72 = new cjs.Graphics().p("AyNzLQIqlDJrChQJrClFDIoQFEIqijJqQijJsopFEg");
	var mask_graphics_73 = new cjs.Graphics().p("AybyxQIilPJvCUQJuCWFQIhQFPIjiUJtQiWJwohFQg");
	var mask_graphics_74 = new cjs.Graphics().p("AyqyWQIblbJyCGQJyCJFbIZQFcIbiHJxQiHJzoaFbg");
	var mask_graphics_75 = new cjs.Graphics().p("Ay4x5QITloJ1B5QJ1B6FmISQFoITh5JzQh5J2oSFog");
	var mask_graphics_76 = new cjs.Graphics().p("AzGxcQILlzJ4BqQJ3BsFyIKQF0ILhrJ2QhrJ5oLFzg");
	var mask_graphics_77 = new cjs.Graphics().p("AzTw+QICl+J6BcQJ5BeF+IBQF/IDhdJ4QhdJ7oCF+g");
	var mask_graphics_78 = new cjs.Graphics().p("AzhwfQH5mKJ8BOQJ8BQGJH5QGKH6hOJ6QhPJ9n5GKg");
	var mask_graphics_79 = new cjs.Graphics().p("Azuv/QHwmVJ+BAQJ9BCGUHwQGWHxhBJ7QhAJ/nxGVg");
	var mask_graphics_80 = new cjs.Graphics().p("Az7veQHnmgJ/AyQJ+A0GgHmQGgHogyJ9QgzKAnnGfg");
	var mask_graphics_81 = new cjs.Graphics().p("A0Iu8QHemrKAAkQJ/AlGqHeQGrHegkJ+QgkKAneGrg");
	var mask_graphics_82 = new cjs.Graphics().p("A0VuZQHVm1KAAVQKAAXG1HUQG1HUgWJ/QgWKBnUG1g");
	var mask_graphics_83 = new cjs.Graphics().p("A0ht2QHKm/KBAHQKAAJG/HKQHAHKgHJ/QgIKCnKG/g");
	var mask_graphics_84 = new cjs.Graphics().p("A0ttRQHAnKKBgHQKAgFHJG/QHKHBAHJ/QAHKCnBHJg");
	var mask_graphics_85 = new cjs.Graphics().p("A05ssQG2nTKAgWQKAgUHTG2QHUG3AVJ+QAVKBm2HUg");
	var mask_graphics_86 = new cjs.Graphics().p("A1FsGQGsndKAgkQJ/giHdGsQHdGsAjJ9QAjKBmrHdg");
	var mask_graphics_87 = new cjs.Graphics().p("A1QrfQGhnmJ+gyQJ/gwHmGgQHnGhAxJ9QAxKAmgHmg");
	var mask_graphics_88 = new cjs.Graphics().p("A1bq3QGVnwJ+hAQJ9g+HvGVQHwGWBAJ8QA/J/mVHvg");
	var mask_graphics_89 = new cjs.Graphics().p("A1mqPQGKn4J8hPQJ8hMH4GKQH5GLBOJ7QBNJ9mKH4g");
	var mask_graphics_90 = new cjs.Graphics().p("A1xplQF/oCJ6hcQJ6hbIBF/QICGABbJ4QBcJ7l/ICg");
	var mask_graphics_91 = new cjs.Graphics().p("A17o8QF0oJJ3hrQJ4hpIJF0QIKF0BqJ2QBqJ5l0IKg");
	var mask_graphics_92 = new cjs.Graphics().p("A2FoRQFooSJ1h5QJ1h2IRFoQITFoB3J0QB4J2loISg");
	var mask_graphics_93 = new cjs.Graphics().p("A2PnmQFcoZJziHQJyiFIZFcQIaFdCGJxQCGJzlcIag");
	var mask_graphics_94 = new cjs.Graphics().p("A2Zm6QFRohJviVQJviSIhFQQIiFQCTJuQCUJwlQIhg");
	var mask_graphics_95 = new cjs.Graphics().p("A2imOQFFooJrijQJsigIoFEQIpFECiJrQCiJslFIpg");
	var mask_graphics_96 = new cjs.Graphics().p("A2qlhQE3ovJpixQJoiuIvE4QIwE4CvJnQCwJok4Iwg");
	var mask_graphics_97 = new cjs.Graphics().p("A2zkzQEso3Jki+QJki7I2ErQI3ErC8JjQC+JlksI2g");
	var mask_graphics_98 = new cjs.Graphics().p("A27kFQEfo9JgjMQJfjJI9EeQI9EfDLJfQDKJgkeI9g");
	var mask_graphics_99 = new cjs.Graphics().p("A3CjXQERpDJbjZQJcjXJCESQJEESDYJaQDYJbkSJDg");
	var mask_graphics_100 = new cjs.Graphics().p("A3JioQEEpJJWjmQJYjkJHEEQJKEFDlJWQDmJWkFJJg");
	var mask_graphics_101 = new cjs.Graphics().p("A3Qh4QD3pPJRj0QJSjxJND3QJQD4DyJQQDzJRj4JPg");
	var mask_graphics_102 = new cjs.Graphics().p("A3XhJQDrpUJLkAQJMj/JTDqQJVDrD/JLQEAJLjqJUg");
	var mask_graphics_103 = new cjs.Graphics().p("A3dgYQDdpaJGkNQJGkMJYDdQJaDdEMJFQENJGjdJZg");
	var mask_graphics_104 = new cjs.Graphics().p("A3jAXQDQpdI/kaQJBkZJcDQQJfDQEZI+QEaJAjQJeg");
	var mask_graphics_105 = new cjs.Graphics().p("A3oBIQDCphI5koQI6klJhDCQJjDCEmI5QEnI5jCJig");
	var mask_graphics_106 = new cjs.Graphics().p("A3tB5QC1plIyk0QIzkyJlC0QJoC1EyIyQE0Iyi1Jng");
	var mask_graphics_107 = new cjs.Graphics().p("A3xCrQCnpqIrlAQIsk+JpCmQJrCnE/IrQFAIrinJrg");
	var mask_graphics_108 = new cjs.Graphics().p("A31DdQCZptIjlNQImlLJsCZQJvCaFLIjQFMIkiZJug");
	var mask_graphics_109 = new cjs.Graphics().p("A35EPQCLpxIclYQIelXJwCLQJyCLFXIcQFYIdiLJxg");
	var mask_graphics_110 = new cjs.Graphics().p("A39FBQB+pzIUllQIWljJzB+QJ1B9FjIUQFkIVh9J0g");
	var mask_graphics_111 = new cjs.Graphics().p("A4AF0QBwp2IMlxQIOluJ1BvQJ4BvFvIMQFwINhvJ3g");
	var mask_graphics_112 = new cjs.Graphics().p("A4CGmQBhp4IEl8QIGl6J3BhQJ6BhF7IEQF8IFhiJ5g");
	var mask_graphics_113 = new cjs.Graphics().p("A4EHZQBTp6H7mHQH9mGJ6BTQJ8BTGGH8QGHH7hTJ8g");
	var mask_graphics_114 = new cjs.Graphics().p("A4GIMQBFp8HymSQH1mRJ7BFQJ+BFGRHyQGSHzhFJ9g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:18.2,y:52.4}).wait(1).to({graphics:mask_graphics_1,x:19,y:50.9}).wait(1).to({graphics:mask_graphics_2,x:19.9,y:49.4}).wait(1).to({graphics:mask_graphics_3,x:20.8,y:47.9}).wait(1).to({graphics:mask_graphics_4,x:21.7,y:46.4}).wait(1).to({graphics:mask_graphics_5,x:22.7,y:45}).wait(1).to({graphics:mask_graphics_6,x:23.6,y:43.6}).wait(1).to({graphics:mask_graphics_7,x:24.6,y:42.2}).wait(1).to({graphics:mask_graphics_8,x:25.7,y:40.8}).wait(1).to({graphics:mask_graphics_9,x:26.8,y:39.4}).wait(1).to({graphics:mask_graphics_10,x:27.9,y:38.1}).wait(1).to({graphics:mask_graphics_11,x:29,y:36.8}).wait(1).to({graphics:mask_graphics_12,x:30.2,y:35.5}).wait(1).to({graphics:mask_graphics_13,x:31.4,y:34.3}).wait(1).to({graphics:mask_graphics_14,x:32.6,y:33.1}).wait(1).to({graphics:mask_graphics_15,x:33.9,y:31.9}).wait(1).to({graphics:mask_graphics_16,x:35.2,y:30.8}).wait(1).to({graphics:mask_graphics_17,x:36.5,y:29.7}).wait(1).to({graphics:mask_graphics_18,x:37.8,y:28.6}).wait(1).to({graphics:mask_graphics_19,x:39.2,y:27.5}).wait(1).to({graphics:mask_graphics_20,x:40.6,y:26.5}).wait(1).to({graphics:mask_graphics_21,x:42,y:25.6}).wait(1).to({graphics:mask_graphics_22,x:43.5,y:24.6}).wait(1).to({graphics:mask_graphics_23,x:44.9,y:23.7}).wait(1).to({graphics:mask_graphics_24,x:46.4,y:22.8}).wait(1).to({graphics:mask_graphics_25,x:47.9,y:21.9}).wait(1).to({graphics:mask_graphics_26,x:49.4,y:21.1}).wait(1).to({graphics:mask_graphics_27,x:51,y:20.3}).wait(1).to({graphics:mask_graphics_28,x:52.5,y:19.6}).wait(1).to({graphics:mask_graphics_29,x:54.1,y:18.8}).wait(1).to({graphics:mask_graphics_30,x:55.6,y:18.1}).wait(1).to({graphics:mask_graphics_31,x:57.2,y:17.5}).wait(1).to({graphics:mask_graphics_32,x:58.8,y:16.8}).wait(1).to({graphics:mask_graphics_33,x:60.4,y:16.2}).wait(1).to({graphics:mask_graphics_34,x:62,y:15.7}).wait(1).to({graphics:mask_graphics_35,x:63.7,y:15.1}).wait(1).to({graphics:mask_graphics_36,x:65.3,y:14.6}).wait(1).to({graphics:mask_graphics_37,x:66.9,y:14.2}).wait(1).to({graphics:mask_graphics_38,x:68.6,y:13.7}).wait(1).to({graphics:mask_graphics_39,x:70.2,y:13.4}).wait(1).to({graphics:mask_graphics_40,x:71.9,y:13}).wait(1).to({graphics:mask_graphics_41,x:73.6,y:12.7}).wait(1).to({graphics:mask_graphics_42,x:75.3,y:12.4}).wait(1).to({graphics:mask_graphics_43,x:76.9,y:12.1}).wait(1).to({graphics:mask_graphics_44,x:78.6,y:11.9}).wait(1).to({graphics:mask_graphics_45,x:80.3,y:11.8}).wait(1).to({graphics:mask_graphics_46,x:81.6,y:11.7}).wait(1).to({graphics:mask_graphics_47,x:81.6,y:11.6}).wait(1).to({graphics:mask_graphics_48,x:81.6,y:11.5}).wait(1).to({graphics:mask_graphics_49,x:81.6,y:11.5}).wait(1).to({graphics:mask_graphics_50,x:81.6,y:11.5}).wait(1).to({graphics:mask_graphics_51,x:81.1,y:11.4}).wait(1).to({graphics:mask_graphics_52,x:79.4,y:11.2}).wait(1).to({graphics:mask_graphics_53,x:77.7,y:11}).wait(1).to({graphics:mask_graphics_54,x:76,y:10.8}).wait(1).to({graphics:mask_graphics_55,x:74.3,y:10.6}).wait(1).to({graphics:mask_graphics_56,x:72.6,y:10.3}).wait(1).to({graphics:mask_graphics_57,x:70.9,y:9.9}).wait(1).to({graphics:mask_graphics_58,x:69.3,y:9.5}).wait(1).to({graphics:mask_graphics_59,x:67.6,y:9.1}).wait(1).to({graphics:mask_graphics_60,x:65.9,y:8.7}).wait(1).to({graphics:mask_graphics_61,x:64.3,y:8.2}).wait(1).to({graphics:mask_graphics_62,x:62.7,y:7.7}).wait(1).to({graphics:mask_graphics_63,x:61,y:7.1}).wait(1).to({graphics:mask_graphics_64,x:59.4,y:6.5}).wait(1).to({graphics:mask_graphics_65,x:57.8,y:5.9}).wait(1).to({graphics:mask_graphics_66,x:56.2,y:5.3}).wait(1).to({graphics:mask_graphics_67,x:54.6,y:4.6}).wait(1).to({graphics:mask_graphics_68,x:53,y:3.9}).wait(1).to({graphics:mask_graphics_69,x:51.5,y:3.1}).wait(1).to({graphics:mask_graphics_70,x:49.9,y:2.4}).wait(1).to({graphics:mask_graphics_71,x:48.4,y:1.6}).wait(1).to({graphics:mask_graphics_72,x:46.9,y:0.7}).wait(1).to({graphics:mask_graphics_73,x:45.4,y:-0.1}).wait(1).to({graphics:mask_graphics_74,x:43.9,y:-1}).wait(1).to({graphics:mask_graphics_75,x:42.4,y:-2}).wait(1).to({graphics:mask_graphics_76,x:41,y:-2.9}).wait(1).to({graphics:mask_graphics_77,x:39.6,y:-3.9}).wait(1).to({graphics:mask_graphics_78,x:38.2,y:-5}).wait(1).to({graphics:mask_graphics_79,x:36.8,y:-6}).wait(1).to({graphics:mask_graphics_80,x:35.5,y:-7.1}).wait(1).to({graphics:mask_graphics_81,x:34.2,y:-8.2}).wait(1).to({graphics:mask_graphics_82,x:32.9,y:-9.4}).wait(1).to({graphics:mask_graphics_83,x:31.6,y:-10.5}).wait(1).to({graphics:mask_graphics_84,x:30.4,y:-11.8}).wait(1).to({graphics:mask_graphics_85,x:29.2,y:-13}).wait(1).to({graphics:mask_graphics_86,x:28,y:-14.3}).wait(1).to({graphics:mask_graphics_87,x:26.9,y:-15.6}).wait(1).to({graphics:mask_graphics_88,x:25.8,y:-16.9}).wait(1).to({graphics:mask_graphics_89,x:24.8,y:-18.3}).wait(1).to({graphics:mask_graphics_90,x:23.7,y:-19.7}).wait(1).to({graphics:mask_graphics_91,x:22.7,y:-21.1}).wait(1).to({graphics:mask_graphics_92,x:21.8,y:-22.5}).wait(1).to({graphics:mask_graphics_93,x:20.8,y:-23.9}).wait(1).to({graphics:mask_graphics_94,x:19.9,y:-25.4}).wait(1).to({graphics:mask_graphics_95,x:19,y:-26.9}).wait(1).to({graphics:mask_graphics_96,x:18.2,y:-28.4}).wait(1).to({graphics:mask_graphics_97,x:17.4,y:-29.9}).wait(1).to({graphics:mask_graphics_98,x:16.6,y:-31.5}).wait(1).to({graphics:mask_graphics_99,x:15.9,y:-33}).wait(1).to({graphics:mask_graphics_100,x:15.1,y:-34.6}).wait(1).to({graphics:mask_graphics_101,x:14.5,y:-36.2}).wait(1).to({graphics:mask_graphics_102,x:13.8,y:-37.7}).wait(1).to({graphics:mask_graphics_103,x:13.2,y:-39.3}).wait(1).to({graphics:mask_graphics_104,x:12.6,y:-41}).wait(1).to({graphics:mask_graphics_105,x:12,y:-42.6}).wait(1).to({graphics:mask_graphics_106,x:11.5,y:-44.2}).wait(1).to({graphics:mask_graphics_107,x:11,y:-45.8}).wait(1).to({graphics:mask_graphics_108,x:10.6,y:-47.5}).wait(1).to({graphics:mask_graphics_109,x:10.2,y:-49.1}).wait(1).to({graphics:mask_graphics_110,x:9.8,y:-50.8}).wait(1).to({graphics:mask_graphics_111,x:9.5,y:-52.5}).wait(1).to({graphics:mask_graphics_112,x:9.2,y:-54.1}).wait(1).to({graphics:mask_graphics_113,x:8.9,y:-55.8}).wait(1).to({graphics:mask_graphics_114,x:8.6,y:-57.5}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AmeDDQgDg/AWhAQAyiZCahGQCbhGCmA4QCoA3BSCSQAWAnAMAoQABACABAC");
	this.shape.setTransform(7.3,-17.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(115));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.7,-39.5,97.7,44.5);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.1,-75.2,1,1,0,0,0,0.4,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:171.4},105).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AiGkwIAAhFIENAAIAABFg");
	var mask_graphics_1 = new cjs.Graphics().p("AiGAuIAAhbIENAAIAABbg");
	var mask_graphics_2 = new cjs.Graphics().p("AiGA6IAAhzIENAAIAABzg");
	var mask_graphics_3 = new cjs.Graphics().p("AiGBGIAAiLIENAAIAACLg");
	var mask_graphics_4 = new cjs.Graphics().p("AiGBSIAAijIENAAIAACjg");
	var mask_graphics_5 = new cjs.Graphics().p("AiGBdIAAi6IENAAIAAC6g");
	var mask_graphics_6 = new cjs.Graphics().p("AiGBpIAAjRIENAAIAADRg");
	var mask_graphics_7 = new cjs.Graphics().p("AiGB1IAAjpIENAAIAADpg");
	var mask_graphics_8 = new cjs.Graphics().p("AiGCBIAAkBIENAAIAAEBg");
	var mask_graphics_9 = new cjs.Graphics().p("AiGCMIAAkYIENAAIAAEYg");
	var mask_graphics_10 = new cjs.Graphics().p("AiGCYIAAkvIENAAIAAEvg");
	var mask_graphics_11 = new cjs.Graphics().p("AiGCkIAAlHIENAAIAAFHg");
	var mask_graphics_12 = new cjs.Graphics().p("AiGCwIAAlfIENAAIAAFfg");
	var mask_graphics_13 = new cjs.Graphics().p("AiGC8IAAl3IENAAIAAF3g");
	var mask_graphics_14 = new cjs.Graphics().p("AiGDHIAAmOIENAAIAAGOg");
	var mask_graphics_15 = new cjs.Graphics().p("AiGDTIAAmlIENAAIAAGlg");
	var mask_graphics_16 = new cjs.Graphics().p("AiGDfIAAm9IENAAIAAG9g");
	var mask_graphics_17 = new cjs.Graphics().p("AiGDrIAAnVIENAAIAAHVg");
	var mask_graphics_18 = new cjs.Graphics().p("AiGD3IAAntIENAAIAAHtg");
	var mask_graphics_19 = new cjs.Graphics().p("AiGECIAAoEIENAAIAAIEg");
	var mask_graphics_20 = new cjs.Graphics().p("AiGEOIAAobIENAAIAAIbg");
	var mask_graphics_21 = new cjs.Graphics().p("AiGEaIAAozIENAAIAAIzg");
	var mask_graphics_22 = new cjs.Graphics().p("AiGEmIAApLIENAAIAAJLg");
	var mask_graphics_23 = new cjs.Graphics().p("AiGExIAAphIENAAIAAJhg");
	var mask_graphics_24 = new cjs.Graphics().p("AiGE9IAAp5IENAAIAAJ5g");
	var mask_graphics_25 = new cjs.Graphics().p("AiGFJIAAqRIENAAIAAKRg");
	var mask_graphics_26 = new cjs.Graphics().p("AiGFVIAAqpIENAAIAAKpg");
	var mask_graphics_27 = new cjs.Graphics().p("AiGFhIAArAIENAAIAALAg");
	var mask_graphics_28 = new cjs.Graphics().p("AiGFsIAArXIENAAIAALXg");
	var mask_graphics_29 = new cjs.Graphics().p("AiGF4IAArvIENAAIAALvg");
	var mask_graphics_30 = new cjs.Graphics().p("AiGGEIAAsHIENAAIAAMHg");
	var mask_graphics_31 = new cjs.Graphics().p("AiGGQIAAsfIENAAIAAMfg");
	var mask_graphics_32 = new cjs.Graphics().p("AiGGcIAAs2IENAAIAAM2g");
	var mask_graphics_33 = new cjs.Graphics().p("AiGGnIAAtNIENAAIAANNg");
	var mask_graphics_34 = new cjs.Graphics().p("AiGGzIAAtlIENAAIAANlg");
	var mask_graphics_35 = new cjs.Graphics().p("AiGG/IAAt9IENAAIAAN9g");
	var mask_graphics_36 = new cjs.Graphics().p("AiGHLIAAuVIENAAIAAOVg");
	var mask_graphics_37 = new cjs.Graphics().p("AiGHWIAAurIENAAIAAOrg");
	var mask_graphics_38 = new cjs.Graphics().p("AiGHiIAAvDIENAAIAAPDg");
	var mask_graphics_39 = new cjs.Graphics().p("AiGHuIAAvbIENAAIAAPbg");
	var mask_graphics_40 = new cjs.Graphics().p("AiGH6IAAvzIENAAIAAPzg");
	var mask_graphics_41 = new cjs.Graphics().p("AiGIFIAAwKIENAAIAAQKg");
	var mask_graphics_42 = new cjs.Graphics().p("AiGIRIAAwhIENAAIAAQhg");
	var mask_graphics_43 = new cjs.Graphics().p("AiGIdIAAw5IENAAIAAQ5g");
	var mask_graphics_44 = new cjs.Graphics().p("AiGIpIAAxRIENAAIAARRg");
	var mask_graphics_45 = new cjs.Graphics().p("AiGI1IAAxpIENAAIAARpg");
	var mask_graphics_46 = new cjs.Graphics().p("AiGJAIAAyAIENAAIAASAg");
	var mask_graphics_47 = new cjs.Graphics().p("AiGJMIAAyXIENAAIAASXg");
	var mask_graphics_48 = new cjs.Graphics().p("AiGJYIAAyvIENAAIAASvg");
	var mask_graphics_49 = new cjs.Graphics().p("AiGJkIAAzHIENAAIAATHg");
	var mask_graphics_50 = new cjs.Graphics().p("AiGJwIAAzfIENAAIAATfg");
	var mask_graphics_51 = new cjs.Graphics().p("AiGJ7IAAz2IENAAIAAT2g");
	var mask_graphics_52 = new cjs.Graphics().p("AiGKHIAA0NIENAAIAAUNg");
	var mask_graphics_53 = new cjs.Graphics().p("AiGKTIAA0lIENAAIAAUlg");
	var mask_graphics_54 = new cjs.Graphics().p("AiGKfIAA08IENAAIAAU8g");
	var mask_graphics_55 = new cjs.Graphics().p("AiGKqIAA1TIENAAIAAVTg");
	var mask_graphics_56 = new cjs.Graphics().p("AiGK2IAA1rIENAAIAAVrg");
	var mask_graphics_57 = new cjs.Graphics().p("AiGLCIAA2DIENAAIAAWDg");
	var mask_graphics_58 = new cjs.Graphics().p("AiGLOIAA2bIENAAIAAWbg");
	var mask_graphics_59 = new cjs.Graphics().p("AiGLaIAA2yIENAAIAAWyg");
	var mask_graphics_60 = new cjs.Graphics().p("AiGLlIAA3JIENAAIAAXJg");
	var mask_graphics_61 = new cjs.Graphics().p("AiGLxIAA3hIENAAIAAXhg");
	var mask_graphics_62 = new cjs.Graphics().p("AiGL9IAA35IENAAIAAX5g");
	var mask_graphics_63 = new cjs.Graphics().p("AiGMJIAA4RIENAAIAAYRg");
	var mask_graphics_64 = new cjs.Graphics().p("AiGMVIAA4oIENAAIAAYog");
	var mask_graphics_65 = new cjs.Graphics().p("AiGMgIAA4/IENAAIAAY/g");
	var mask_graphics_66 = new cjs.Graphics().p("AiGMsIAA5XIENAAIAAZXg");
	var mask_graphics_67 = new cjs.Graphics().p("AiGM4IAA5vIENAAIAAZvg");
	var mask_graphics_68 = new cjs.Graphics().p("AiGNEIAA6HIENAAIAAaHg");
	var mask_graphics_69 = new cjs.Graphics().p("AiGNPIAA6dIENAAIAAadg");
	var mask_graphics_70 = new cjs.Graphics().p("AiGNbIAA61IENAAIAAa1g");
	var mask_graphics_71 = new cjs.Graphics().p("AiGNnIAA7NIENAAIAAbNg");
	var mask_graphics_72 = new cjs.Graphics().p("AiGNzIAA7lIENAAIAAblg");
	var mask_graphics_73 = new cjs.Graphics().p("AiGN/IAA79IENAAIAAb9g");
	var mask_graphics_74 = new cjs.Graphics().p("AiGOKIAA8TIENAAIAAcTg");
	var mask_graphics_75 = new cjs.Graphics().p("AiGOWIAA8rIENAAIAAcrg");
	var mask_graphics_76 = new cjs.Graphics().p("AiGOiIAA9DIENAAIAAdDg");
	var mask_graphics_77 = new cjs.Graphics().p("AiGOuIAA9bIENAAIAAdbg");
	var mask_graphics_78 = new cjs.Graphics().p("AiGO5IAA9yIENAAIAAdyg");
	var mask_graphics_79 = new cjs.Graphics().p("AiGPFIAA+JIENAAIAAeJg");
	var mask_graphics_80 = new cjs.Graphics().p("AiGPRIAA+hIENAAIAAehg");
	var mask_graphics_81 = new cjs.Graphics().p("AiGPdIAA+5IENAAIAAe5g");
	var mask_graphics_82 = new cjs.Graphics().p("AiGPpIAA/RIENAAIAAfRg");
	var mask_graphics_83 = new cjs.Graphics().p("AiGP0IAA/nIENAAIAAfng");
	var mask_graphics_84 = new cjs.Graphics().p("AiGQAIAA//IENAAIAAf/g");
	var mask_graphics_85 = new cjs.Graphics().p("AiGQMMAAAggXIENAAMAAAAgXg");
	var mask_graphics_86 = new cjs.Graphics().p("AiGQYMAAAgguIENAAMAAAAgug");
	var mask_graphics_87 = new cjs.Graphics().p("AiGQjMAAAghFIENAAMAAAAhFg");
	var mask_graphics_88 = new cjs.Graphics().p("AiGQvMAAAghdIENAAMAAAAhdg");
	var mask_graphics_89 = new cjs.Graphics().p("AiGQ7MAAAgh1IENAAMAAAAh1g");
	var mask_graphics_90 = new cjs.Graphics().p("AiGRHMAAAgiNIENAAMAAAAiNg");
	var mask_graphics_91 = new cjs.Graphics().p("AiGRTMAAAgikIENAAMAAAAikg");
	var mask_graphics_92 = new cjs.Graphics().p("AiGReMAAAgi7IENAAMAAAAi7g");
	var mask_graphics_93 = new cjs.Graphics().p("AiGRqMAAAgjTIENAAMAAAAjTg");
	var mask_graphics_94 = new cjs.Graphics().p("AiGR2MAAAgjrIENAAMAAAAjrg");
	var mask_graphics_95 = new cjs.Graphics().p("AiGSCMAAAgkDIENAAMAAAAkDg");
	var mask_graphics_96 = new cjs.Graphics().p("AiGSOMAAAgkaIENAAMAAAAkag");
	var mask_graphics_97 = new cjs.Graphics().p("AiGSZMAAAgkxIENAAMAAAAkxg");
	var mask_graphics_98 = new cjs.Graphics().p("AiGSlMAAAglJIENAAMAAAAlJg");
	var mask_graphics_99 = new cjs.Graphics().p("AiGSxMAAAglhIENAAMAAAAlhg");
	var mask_graphics_100 = new cjs.Graphics().p("AiGS9MAAAgl5IENAAMAAAAl5g");
	var mask_graphics_101 = new cjs.Graphics().p("AiGTIMAAAgmPIENAAMAAAAmPg");
	var mask_graphics_102 = new cjs.Graphics().p("AiGTUMAAAgmnIENAAMAAAAmng");
	var mask_graphics_103 = new cjs.Graphics().p("AiGTgMAAAgm/IENAAMAAAAm/g");
	var mask_graphics_104 = new cjs.Graphics().p("AiGTsMAAAgnXIENAAMAAAAnXg");
	var mask_graphics_105 = new cjs.Graphics().p("AiGT4MAAAgnvIENAAMAAAAnvg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:-37.4}).wait(1).to({graphics:mask_graphics_1,x:0,y:-70.1}).wait(1).to({graphics:mask_graphics_2,x:0,y:-68.9}).wait(1).to({graphics:mask_graphics_3,x:0,y:-67.7}).wait(1).to({graphics:mask_graphics_4,x:0,y:-66.6}).wait(1).to({graphics:mask_graphics_5,x:0,y:-65.4}).wait(1).to({graphics:mask_graphics_6,x:0,y:-64.2}).wait(1).to({graphics:mask_graphics_7,x:0,y:-63}).wait(1).to({graphics:mask_graphics_8,x:0,y:-61.8}).wait(1).to({graphics:mask_graphics_9,x:0,y:-60.6}).wait(1).to({graphics:mask_graphics_10,x:0,y:-59.5}).wait(1).to({graphics:mask_graphics_11,x:0,y:-58.3}).wait(1).to({graphics:mask_graphics_12,x:0,y:-57.1}).wait(1).to({graphics:mask_graphics_13,x:0,y:-55.9}).wait(1).to({graphics:mask_graphics_14,x:0,y:-54.7}).wait(1).to({graphics:mask_graphics_15,x:0,y:-53.6}).wait(1).to({graphics:mask_graphics_16,x:0,y:-52.4}).wait(1).to({graphics:mask_graphics_17,x:0,y:-51.2}).wait(1).to({graphics:mask_graphics_18,x:0,y:-50}).wait(1).to({graphics:mask_graphics_19,x:0,y:-48.8}).wait(1).to({graphics:mask_graphics_20,x:0,y:-47.7}).wait(1).to({graphics:mask_graphics_21,x:0,y:-46.5}).wait(1).to({graphics:mask_graphics_22,x:0,y:-45.3}).wait(1).to({graphics:mask_graphics_23,x:0,y:-44.1}).wait(1).to({graphics:mask_graphics_24,x:0,y:-42.9}).wait(1).to({graphics:mask_graphics_25,x:0,y:-41.7}).wait(1).to({graphics:mask_graphics_26,x:0,y:-40.6}).wait(1).to({graphics:mask_graphics_27,x:0,y:-39.4}).wait(1).to({graphics:mask_graphics_28,x:0,y:-38.2}).wait(1).to({graphics:mask_graphics_29,x:0,y:-37}).wait(1).to({graphics:mask_graphics_30,x:0,y:-35.8}).wait(1).to({graphics:mask_graphics_31,x:0,y:-34.7}).wait(1).to({graphics:mask_graphics_32,x:0,y:-33.5}).wait(1).to({graphics:mask_graphics_33,x:0,y:-32.3}).wait(1).to({graphics:mask_graphics_34,x:0,y:-31.1}).wait(1).to({graphics:mask_graphics_35,x:0,y:-29.9}).wait(1).to({graphics:mask_graphics_36,x:0,y:-28.8}).wait(1).to({graphics:mask_graphics_37,x:0,y:-27.6}).wait(1).to({graphics:mask_graphics_38,x:0,y:-26.4}).wait(1).to({graphics:mask_graphics_39,x:0,y:-25.2}).wait(1).to({graphics:mask_graphics_40,x:0,y:-24}).wait(1).to({graphics:mask_graphics_41,x:0,y:-22.8}).wait(1).to({graphics:mask_graphics_42,x:0,y:-21.7}).wait(1).to({graphics:mask_graphics_43,x:0,y:-20.5}).wait(1).to({graphics:mask_graphics_44,x:0,y:-19.3}).wait(1).to({graphics:mask_graphics_45,x:0,y:-18.1}).wait(1).to({graphics:mask_graphics_46,x:0,y:-16.9}).wait(1).to({graphics:mask_graphics_47,x:0,y:-15.8}).wait(1).to({graphics:mask_graphics_48,x:0,y:-14.6}).wait(1).to({graphics:mask_graphics_49,x:0,y:-13.4}).wait(1).to({graphics:mask_graphics_50,x:0,y:-12.2}).wait(1).to({graphics:mask_graphics_51,x:0,y:-11}).wait(1).to({graphics:mask_graphics_52,x:0,y:-9.9}).wait(1).to({graphics:mask_graphics_53,x:0,y:-8.7}).wait(1).to({graphics:mask_graphics_54,x:0,y:-7.5}).wait(1).to({graphics:mask_graphics_55,x:0,y:-6.3}).wait(1).to({graphics:mask_graphics_56,x:0,y:-5.1}).wait(1).to({graphics:mask_graphics_57,x:0,y:-3.9}).wait(1).to({graphics:mask_graphics_58,x:0,y:-2.8}).wait(1).to({graphics:mask_graphics_59,x:0,y:-1.6}).wait(1).to({graphics:mask_graphics_60,x:0,y:-0.4}).wait(1).to({graphics:mask_graphics_61,x:0,y:0.8}).wait(1).to({graphics:mask_graphics_62,x:0,y:2}).wait(1).to({graphics:mask_graphics_63,x:0,y:3.1}).wait(1).to({graphics:mask_graphics_64,x:0,y:4.3}).wait(1).to({graphics:mask_graphics_65,x:0,y:5.5}).wait(1).to({graphics:mask_graphics_66,x:0,y:6.7}).wait(1).to({graphics:mask_graphics_67,x:0,y:7.9}).wait(1).to({graphics:mask_graphics_68,x:0,y:9.1}).wait(1).to({graphics:mask_graphics_69,x:0,y:10.2}).wait(1).to({graphics:mask_graphics_70,x:0,y:11.4}).wait(1).to({graphics:mask_graphics_71,x:0,y:12.6}).wait(1).to({graphics:mask_graphics_72,x:0,y:13.8}).wait(1).to({graphics:mask_graphics_73,x:0,y:15}).wait(1).to({graphics:mask_graphics_74,x:0,y:16.1}).wait(1).to({graphics:mask_graphics_75,x:0,y:17.3}).wait(1).to({graphics:mask_graphics_76,x:0,y:18.5}).wait(1).to({graphics:mask_graphics_77,x:0,y:19.7}).wait(1).to({graphics:mask_graphics_78,x:0,y:20.9}).wait(1).to({graphics:mask_graphics_79,x:0,y:22}).wait(1).to({graphics:mask_graphics_80,x:0,y:23.2}).wait(1).to({graphics:mask_graphics_81,x:0,y:24.4}).wait(1).to({graphics:mask_graphics_82,x:0,y:25.6}).wait(1).to({graphics:mask_graphics_83,x:0,y:26.8}).wait(1).to({graphics:mask_graphics_84,x:0,y:28}).wait(1).to({graphics:mask_graphics_85,x:0,y:29.1}).wait(1).to({graphics:mask_graphics_86,x:0,y:30.3}).wait(1).to({graphics:mask_graphics_87,x:0,y:31.5}).wait(1).to({graphics:mask_graphics_88,x:0,y:32.7}).wait(1).to({graphics:mask_graphics_89,x:0,y:33.9}).wait(1).to({graphics:mask_graphics_90,x:0,y:35}).wait(1).to({graphics:mask_graphics_91,x:0,y:36.2}).wait(1).to({graphics:mask_graphics_92,x:0,y:37.4}).wait(1).to({graphics:mask_graphics_93,x:0,y:38.6}).wait(1).to({graphics:mask_graphics_94,x:0,y:39.8}).wait(1).to({graphics:mask_graphics_95,x:0,y:40.9}).wait(1).to({graphics:mask_graphics_96,x:0,y:42.1}).wait(1).to({graphics:mask_graphics_97,x:0,y:43.3}).wait(1).to({graphics:mask_graphics_98,x:0,y:44.5}).wait(1).to({graphics:mask_graphics_99,x:0,y:45.7}).wait(1).to({graphics:mask_graphics_100,x:0,y:46.9}).wait(1).to({graphics:mask_graphics_101,x:0,y:48}).wait(1).to({graphics:mask_graphics_102,x:0,y:49.2}).wait(1).to({graphics:mask_graphics_103,x:0,y:50.4}).wait(1).to({graphics:mask_graphics_104,x:0,y:51.6}).wait(1).to({graphics:mask_graphics_105,x:0,y:52.8}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAA7zMAAAA3n");
	this.shape.setTransform(0,107.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(106));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.1,-75.2,24.3,21.9);


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
(lib.writingsuccess_Fontkid_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_448 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(448).call(this.frame_448).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(275.6,97.8,0.999,0.999,0,-8.5,171.5,22.4,-144);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({scaleX:1,scaleY:1,skewX:-8.3,skewY:171.7,guide:{path:[275.5,97.7,274.5,97.7,273.4,97.7,273.2,97.7,273,97.7,228.9,97.7,199,129.3,179.9,149.4,172.8,174]}},45).to({regX:22.3,regY:-143.9,guide:{path:[172.8,174,168.8,187.9,168.7,203.2,168.3,234.2,184.4,258.7]}},30).to({regX:22.2,scaleX:1,scaleY:1,guide:{path:[184.4,258.7,190.3,267.8,198.5,275.9,228.2,305.6,271,305.9]}},41).to({regX:22.3,scaleX:1,scaleY:1,guide:{path:[271,305.9,271.9,305.9,272.9,305.9,317,305.5,348.2,274.8,378.3,245.2,379.3,204.1]}},58).to({regX:22.4,regY:-144,scaleX:1,scaleY:1,skewX:-8.5,skewY:171.5,guide:{path:[379.4,204.1,379.4,202.7,379.5,201.2,379.5,158.3,348.3,128,319.6,100.2,279.8,98]}},57).wait(12).to({rotation:8.5,skewX:0,skewY:0,x:379.2,y:188.4},0).to({x:375.6,y:477.7},127).wait(11).to({startPosition:0},0).to({regY:-143.9,rotation:-28.3,guide:{path:[375.5,477.6,367.7,494.7,360.4,502.3,353.1,509.9,346.2,508,332.4,504.2,321.2,485.5,309.9,466.8,273,474,238,480.8,212.8,505.5,190.3,527.6,169,551.1,147.3,574.8,119.6,591.8,95.1,606.9,70.7,622.1,53.3,633,39.1,647.9]}},58).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(275.6,97.8,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},231).wait(12).to({_off:false,x:376.8,y:478.9},0).to({_off:true},127).wait(70));

	// Layer 21
	this.instance_1 = new lib.ar2("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(270.1,181.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(440));

	// Layer 1
	this.instance_2 = new lib.ar1("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(484.9,261.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(252).to({_off:false},0).wait(197));

	// Layer 20
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AAAgWIAAAt");
	this.shape_1.setTransform(378.1,190.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("AAAAiIAAhE");
	this.shape_2.setTransform(378.1,191.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("AAAAuIAAhb");
	this.shape_3.setTransform(378.1,193);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("AAAA5IAAhx");
	this.shape_4.setTransform(378.1,194.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(25,1,1).p("AAABEIAAiH");
	this.shape_5.setTransform(378.1,195.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(25,1,1).p("AAABPIAAid");
	this.shape_6.setTransform(378.1,196.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(25,1,1).p("AAABbIAAi0");
	this.shape_7.setTransform(378.1,197.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(25,1,1).p("AAABmIAAjL");
	this.shape_8.setTransform(378.1,198.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(25,1,1).p("AAABxIAAjh");
	this.shape_9.setTransform(378.1,199.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(25,1,1).p("AAAB8IAAj3");
	this.shape_10.setTransform(378.1,200.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(25,1,1).p("AAACIIAAkO");
	this.shape_11.setTransform(378.1,202);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(25,1,1).p("AAACTIAAkl");
	this.shape_12.setTransform(378.1,203.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(25,1,1).p("AAACeIAAk7");
	this.shape_13.setTransform(378.1,204.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(25,1,1).p("AAACpIAAlR");
	this.shape_14.setTransform(378.1,205.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(25,1,1).p("AAAC0IAAln");
	this.shape_15.setTransform(378.1,206.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(25,1,1).p("AAAC/IAAl+");
	this.shape_16.setTransform(378.1,207.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(25,1,1).p("AAADLIAAmV");
	this.shape_17.setTransform(378.1,208.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(25,1,1).p("AAADWIAAmr");
	this.shape_18.setTransform(378.1,209.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(25,1,1).p("AAADhIAAnB");
	this.shape_19.setTransform(378.1,210.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(25,1,1).p("AAADsIAAnY");
	this.shape_20.setTransform(378.1,212.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(25,1,1).p("AAAD4IAAnv");
	this.shape_21.setTransform(378.1,213.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(25,1,1).p("AAAEDIAAoF");
	this.shape_22.setTransform(378.1,214.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(25,1,1).p("AAAEOIAAob");
	this.shape_23.setTransform(378.1,215.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(25,1,1).p("AAAEZIAAox");
	this.shape_24.setTransform(378.1,216.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(25,1,1).p("AAAElIAApI");
	this.shape_25.setTransform(378.1,217.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(25,1,1).p("AAAEwIAApf");
	this.shape_26.setTransform(378.1,218.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(25,1,1).p("AAAE7IAAp1");
	this.shape_27.setTransform(378.1,219.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(25,1,1).p("AAAFGIAAqL");
	this.shape_28.setTransform(378.1,221);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(25,1,1).p("AAAFRIAAqh");
	this.shape_29.setTransform(378.1,222.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(25,1,1).p("AAAFdIAAq4");
	this.shape_30.setTransform(378.1,223.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(25,1,1).p("AAAFoIAArP");
	this.shape_31.setTransform(378.1,224.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(25,1,1).p("AAAFzIAArl");
	this.shape_32.setTransform(378.1,225.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(25,1,1).p("AAAF+IAAr7");
	this.shape_33.setTransform(378.1,226.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(25,1,1).p("AAAGKIAAsS");
	this.shape_34.setTransform(378.1,227.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(25,1,1).p("AAAGVIAAsp");
	this.shape_35.setTransform(378.1,228.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(25,1,1).p("AAAGgIAAs/");
	this.shape_36.setTransform(378.1,230);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(25,1,1).p("AAAGrIAAtV");
	this.shape_37.setTransform(378.1,231.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(25,1,1).p("AAAG2IAAtr");
	this.shape_38.setTransform(378.1,232.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(25,1,1).p("AAAHBIAAuC");
	this.shape_39.setTransform(378.1,233.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(25,1,1).p("AAAHNIAAuZ");
	this.shape_40.setTransform(378.1,234.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(25,1,1).p("AAAHYIAAuv");
	this.shape_41.setTransform(378.1,235.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(25,1,1).p("AAAHjIAAvF");
	this.shape_42.setTransform(378.1,236.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(25,1,1).p("AAAHuIAAvc");
	this.shape_43.setTransform(378.1,237.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(25,1,1).p("AAAH6IAAvz");
	this.shape_44.setTransform(378.1,239);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(25,1,1).p("AAAIFIAAwJ");
	this.shape_45.setTransform(378.1,240.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(25,1,1).p("AAAIQIAAwf");
	this.shape_46.setTransform(378.1,241.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(25,1,1).p("AAAIbIAAw1");
	this.shape_47.setTransform(378.1,242.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(25,1,1).p("AAAInIAAxM");
	this.shape_48.setTransform(378.1,243.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(25,1,1).p("AAAIyIAAxj");
	this.shape_49.setTransform(378.1,244.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(25,1,1).p("AAAI9IAAx5");
	this.shape_50.setTransform(378.1,245.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(25,1,1).p("AAAJIIAAyP");
	this.shape_51.setTransform(378.1,246.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(25,1,1).p("AAAJUIAAym");
	this.shape_52.setTransform(378.1,248);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(25,1,1).p("AAAJeIAAy8");
	this.shape_53.setTransform(378.1,249.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(25,1,1).p("AAAJqIAAzT");
	this.shape_54.setTransform(378.1,250.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(25,1,1).p("AAAJ1IAAzp");
	this.shape_55.setTransform(378.1,251.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(25,1,1).p("AAAKAIAAz/");
	this.shape_56.setTransform(378.1,252.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(25,1,1).p("AAAKLIAA0W");
	this.shape_57.setTransform(378.1,253.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(25,1,1).p("AAAKXIAA0t");
	this.shape_58.setTransform(378.1,254.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(25,1,1).p("AAAKiIAA1D");
	this.shape_59.setTransform(378.1,255.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(25,1,1).p("AAAKtIAA1Z");
	this.shape_60.setTransform(378.1,256.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(25,1,1).p("AAAK4IAA1v");
	this.shape_61.setTransform(378.1,258);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(25,1,1).p("AAALEIAA2G");
	this.shape_62.setTransform(378.1,259.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(25,1,1).p("AAALPIAA2d");
	this.shape_63.setTransform(378.1,260.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(25,1,1).p("AAALaIAA2z");
	this.shape_64.setTransform(378.1,261.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(25,1,1).p("AAALlIAA3J");
	this.shape_65.setTransform(378.1,262.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(25,1,1).p("AAALxIAA3g");
	this.shape_66.setTransform(378.1,263.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(25,1,1).p("AAAL8IAA33");
	this.shape_67.setTransform(378.1,264.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(25,1,1).p("AAAMHIAA4N");
	this.shape_68.setTransform(378.1,265.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(25,1,1).p("AAAMSIAA4j");
	this.shape_69.setTransform(378.1,267);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(25,1,1).p("AAAMdIAA45");
	this.shape_70.setTransform(378.1,268.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(25,1,1).p("AAAMpIAA5R");
	this.shape_71.setTransform(378.1,269.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(25,1,1).p("AAAM0IAA5n");
	this.shape_72.setTransform(378.1,270.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(25,1,1).p("AAAM/IAA59");
	this.shape_73.setTransform(378.1,271.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(25,1,1).p("AAANKIAA6T");
	this.shape_74.setTransform(378.1,272.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(25,1,1).p("AAANWIAA6r");
	this.shape_75.setTransform(378.1,273.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(25,1,1).p("AAANhIAA7B");
	this.shape_76.setTransform(378.1,274.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(25,1,1).p("AAANsIAA7X");
	this.shape_77.setTransform(378.1,276);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(25,1,1).p("AAAN3IAA7t");
	this.shape_78.setTransform(378.1,277.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(25,1,1).p("AAAOCIAA8D");
	this.shape_79.setTransform(378.1,278.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(25,1,1).p("AAAONIAA8a");
	this.shape_80.setTransform(378.1,279.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(25,1,1).p("AAAOZIAA8x");
	this.shape_81.setTransform(378.1,280.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(25,1,1).p("AAAOkIAA9H");
	this.shape_82.setTransform(378.1,281.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(25,1,1).p("AAAOvIAA9d");
	this.shape_83.setTransform(378.1,282.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(25,1,1).p("AAAO6IAA90");
	this.shape_84.setTransform(378.1,283.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(25,1,1).p("AAAPGIAA+K");
	this.shape_85.setTransform(378.1,285);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(25,1,1).p("AAAPRIAA+h");
	this.shape_86.setTransform(378.1,286.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(25,1,1).p("AAAPcIAA+3");
	this.shape_87.setTransform(378.1,287.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(25,1,1).p("AAAPnIAA/N");
	this.shape_88.setTransform(378.1,288.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(25,1,1).p("AAAPzIAA/k");
	this.shape_89.setTransform(378.1,289.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(25,1,1).p("AAAP+IAA/7");
	this.shape_90.setTransform(378.1,290.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(25,1,1).p("AAAQJMAAAggR");
	this.shape_91.setTransform(378.1,291.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(25,1,1).p("AAAQUMAAAggn");
	this.shape_92.setTransform(378.1,292.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(25,1,1).p("AAAQfMAAAgg9");
	this.shape_93.setTransform(378.1,293.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(25,1,1).p("AAAQqMAAAghU");
	this.shape_94.setTransform(378.1,295.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(25,1,1).p("AAAQ2MAAAghr");
	this.shape_95.setTransform(378.1,296.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(25,1,1).p("AAARBMAAAgiB");
	this.shape_96.setTransform(378.1,297.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(25,1,1).p("AAARMMAAAgiX");
	this.shape_97.setTransform(378.1,298.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(25,1,1).p("AAARXMAAAgiu");
	this.shape_98.setTransform(378.1,299.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(25,1,1).p("AAARjMAAAgjF");
	this.shape_99.setTransform(378.1,300.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(25,1,1).p("AAARuMAAAgjb");
	this.shape_100.setTransform(378.1,301.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(25,1,1).p("AAAR5MAAAgjx");
	this.shape_101.setTransform(378.1,302.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(25,1,1).p("AAASEMAAAgkH");
	this.shape_102.setTransform(378.1,304);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(25,1,1).p("AAASQMAAAgke");
	this.shape_103.setTransform(378.1,305.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(25,1,1).p("AAASbMAAAgk1");
	this.shape_104.setTransform(378.1,306.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(25,1,1).p("AAASmMAAAglL");
	this.shape_105.setTransform(378.1,307.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(25,1,1).p("AAASxMAAAglh");
	this.shape_106.setTransform(378.1,308.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(25,1,1).p("AAAS9MAAAgl4");
	this.shape_107.setTransform(378.1,309.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(25,1,1).p("AAATIMAAAgmP");
	this.shape_108.setTransform(378.1,310.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(25,1,1).p("AAATTMAAAgml");
	this.shape_109.setTransform(378.1,311.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(25,1,1).p("AAATeMAAAgm7");
	this.shape_110.setTransform(378.1,313);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(25,1,1).p("AAATpMAAAgnR");
	this.shape_111.setTransform(378.1,314.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(25,1,1).p("AAAT1MAAAgnp");
	this.shape_112.setTransform(378.1,315.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(25,1,1).p("AAAUAMAAAgn/");
	this.shape_113.setTransform(378.1,316.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(25,1,1).p("AAAULMAAAgoV");
	this.shape_114.setTransform(378.1,317.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(25,1,1).p("AAAUWMAAAgor");
	this.shape_115.setTransform(378.1,318.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(25,1,1).p("AAAUiMAAAgpD");
	this.shape_116.setTransform(378.1,319.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(25,1,1).p("AAAUtMAAAgpZ");
	this.shape_117.setTransform(378.1,320.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(25,1,1).p("AAAU4MAAAgpv");
	this.shape_118.setTransform(378.1,322);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(25,1,1).p("AAAVDMAAAgqF");
	this.shape_119.setTransform(378.1,323.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(25,1,1).p("AAAVOMAAAgqb");
	this.shape_120.setTransform(378.1,324.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(25,1,1).p("AAAVaMAAAgqz");
	this.shape_121.setTransform(378.1,325.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(25,1,1).p("AAAVlMAAAgrJ");
	this.shape_122.setTransform(378.1,326.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(25,1,1).p("AAAVwMAAAgrf");
	this.shape_123.setTransform(378.1,327.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(25,1,1).p("AAAV7MAAAgr1");
	this.shape_124.setTransform(378.1,328.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(25,1,1).p("AAAWGMAAAgsL");
	this.shape_125.setTransform(378.1,329.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(25,1,1).p("AAAWSMAAAgsi");
	this.shape_126.setTransform(378.1,331);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(25,1,1).p("AAAWdMAAAgs5");
	this.shape_127.setTransform(378.1,332.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(25,1,1).p("AAA2nMAAAAtP");
	this.shape_128.setTransform(378.1,333.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},252).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).wait(70));

	// Layer 10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_227 = new cjs.Graphics().p("AA7bYMAQzgtOQJXDfELJFQEKJFjfJWQjeJYpFEKQk9CSlDAAQkNAAkQhlg");
	var mask_graphics_228 = new cjs.Graphics().p("ABgblMAPpgtoQJcDPEaI+QEYI+jOJdQjQJdo9EZQlMCilVAAQj7AAkAhYg");
	var mask_graphics_229 = new cjs.Graphics().p("ACFbxMAOeguAQJiDAEpI2QEmI3i/JhQjAJjo2EnQlZC0loAAQjpAAjwhMg");
	var mask_graphics_230 = new cjs.Graphics().p("ACrb9MANTguXQJmCwE3IvQE1IviwJmQiwJnouE2QlmDGl7AAQjXAAjfhAg");
	var mask_graphics_231 = new cjs.Graphics().p("ADRcHMAMHgurQJrCgFFInQFDInigJqQihJsomFDQlyDZmPAAQjFAAjNg1g");
	var mask_graphics_232 = new cjs.Graphics().p("AD3cRMAK7gu+QJvCQFTIfQFRIeiRJuQiQJwoeFRQl9DtmkAAQizAAi7grg");
	var mask_graphics_233 = new cjs.Graphics().p("AEecaMAJugvQQJyCBFhIWQFfIXiBJwQiBJzoVFfQmIECm4AAQihAAiogig");
	var mask_graphics_234 = new cjs.Graphics().p("AFFchMAIhgveQJ1BxFuIMQFsIOhwJ0QhxJ2oMFsQmSEYnOAAQiPAAiUgbg");
	var mask_graphics_235 = new cjs.Graphics().p("AFscoMAHTgvrQJ4BhF7IDQF6IEhhJ2QhhJ5oCF6QmbEunlAAQh8AAiAgUg");
	var mask_graphics_236 = new cjs.Graphics().p("AGTcuMAGGgv2QJ6BRGIH5QGHH6hRJ5QhRJ6n5GHQmkFFn7AAQhpAAhsgNg");
	var mask_graphics_237 = new cjs.Graphics().p("AG6cyMAE4gv+QJ8BAGVHvQGTHxhAJ6QhBJ9nvGTQmsFdoUAAQhUAAhYgJg");
	var mask_graphics_238 = new cjs.Graphics().p("AHhc2MADqgwGQJ9AxGiHkQGgHmgxJ8QgwJ+nlGgQmzF2otAAQhAAAhDgFg");
	var mask_graphics_239 = new cjs.Graphics().p("AIJc5MACbgwLQJ+AgGuHaQGsHbggJ9QggJ/naGsQm6GQpHAAQgsAAgsgCg");
	var mask_graphics_240 = new cjs.Graphics().p("AIwc6MABNgwNQJ/AQG5HOQG4HRgQJ9QgQKAnOG4QnAGqpjAAIgsgBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(227).to({graphics:mask_graphics_227,x:214.5,y:185.3}).wait(1).to({graphics:mask_graphics_228,x:214.4,y:185.3}).wait(1).to({graphics:mask_graphics_229,x:214.4,y:185.3}).wait(1).to({graphics:mask_graphics_230,x:214.4,y:185.3}).wait(1).to({graphics:mask_graphics_231,x:214.4,y:185.2}).wait(1).to({graphics:mask_graphics_232,x:214.4,y:185.2}).wait(1).to({graphics:mask_graphics_233,x:214.3,y:185.2}).wait(1).to({graphics:mask_graphics_234,x:214.3,y:185.2}).wait(1).to({graphics:mask_graphics_235,x:214.3,y:185.2}).wait(1).to({graphics:mask_graphics_236,x:214.3,y:185.1}).wait(1).to({graphics:mask_graphics_237,x:214.2,y:185.1}).wait(1).to({graphics:mask_graphics_238,x:214.2,y:185.1}).wait(1).to({graphics:mask_graphics_239,x:214.2,y:185.1}).wait(1).to({graphics:mask_graphics_240,x:214.2,y:185.1}).wait(209));

	// Layer 9
	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(25,1,1).p("AGyu2QCoBMCOCLQE0ExAAGuQAAGvk0EwQk1EwmzABQmzgBk0kwQk0kwAAmvQAAmuE0kxQEykuGwgCQADAAACAAQARAAARAAQDNAIDDBRg");
	this.shape_129.setTransform(274.1,202);
	this.shape_129._off = true;

	var maskedShapeInstanceList = [this.shape_129];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_129).wait(227).to({_off:false},0).wait(222));

	// Layer 7 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_119 = new cjs.Graphics().p("AgoSuQlqoPBzp0QB0p1INlqQIPlsJ0B0MgItAvbQp1hzlroOg");
	var mask_1_graphics_120 = new cjs.Graphics().p("AAHTPQl4oFBhp3QBhp3ICl6QIEl7J4BhMgHVAvrQp4hhl7oDg");
	var mask_1_graphics_121 = new cjs.Graphics().p("AA5TwQmHn6BOp6QBPp6H3mIQH5mKJ6BPMgF8Av3Qp6hPmKn3g");
	var mask_1_graphics_122 = new cjs.Graphics().p("ABrUQQmVnuA8p7QA8p8HrmXQHtmYJ9A8MgEjAwBQp8g9mZnsg");
	var mask_1_graphics_123 = new cjs.Graphics().p("ACfUxQmkniApp9QAqp+HfmlQHhmmJ+ApMgDJAwIQp+gpmmngg");
	var mask_1_graphics_124 = new cjs.Graphics().p("ADTVRQmxnWAXp+QAXp+HSmzQHVm0J/AXMgBwAwMQp+gXm1nTg");
	var mask_1_graphics_125 = new cjs.Graphics().p("AEJVxQm/nJAEp+QAFp/HFnAQHInCJ/AFMgAVAwOQqAgFnBnGg");
	var mask_1_graphics_126 = new cjs.Graphics().p("AEdWQQnMm7gOp+QgOp/G4nNQG7nPJ/gOMABEAwOIgnAAQpmAAnBmsg");
	var mask_1_graphics_127 = new cjs.Graphics().p("AEoWvQnZmughp+Qghp+GrnaQGtnbJ/ghMACdAwLQgtACgsAAQpHAAm5mNg");
	var mask_1_graphics_128 = new cjs.Graphics().p("AEzXMQnlmggzp8Qgzp9GcnmQGfnoJ+gzMAD3AwFQhGAFhFAAQooAAmylwg");
	var mask_1_graphics_129 = new cjs.Graphics().p("AFAXoQnymRhFp7QhGp7GOnyQGRnzJ7hGMAFRAv8QheALhcAAQoLAAmplVg");
	var mask_1_graphics_130 = new cjs.Graphics().p("AFNYEQn9mDhYp4QhYp5GAn+QGCn+J5hZMAGqAvxQh2ARhyAAQnxAAmfk5g");
	var mask_1_graphics_131 = new cjs.Graphics().p("AFbYeQoIl0hqp1Qhrp2FyoJQFyoJJ2hrMAIDAvjQiNAYiIAAQnWAAmVkfg");
	var mask_1_graphics_132 = new cjs.Graphics().p("AFqY3QoTlkh8pyQh9pzFioTQFjoUJzh9MAJbAvTQijAgidAAQm+AAmJkGg");
	var mask_1_graphics_133 = new cjs.Graphics().p("AF6ZPQodlUiPpvQiPpvFTocQFTofJviPMAKzAvAQi5AriyAAQmlAAl9jvg");
	var mask_1_graphics_134 = new cjs.Graphics().p("AGKZmQomlFihppQihpsFDolQFDopJrihMAMKAurQjOA2jHAAQmOAAlwjYg");
	var mask_1_graphics_135 = new cjs.Graphics().p("AGcZ8Qowk0izplQizpnEzouQEzoyJmizMANgAuTQjiBCjbAAQl3AAlijCg");
	var mask_1_graphics_136 = new cjs.Graphics().p("AGuaRQo4kkjFpgQjFpgEjo4QEio6JgjFMAO3At5Qj2BPjvAAQliAAlTitg");
	var mask_1_graphics_137 = new cjs.Graphics().p("AHBalQpAkUjXpZQjWpbESpAQETpCJZjXMAQLAtcQkJBekDAAQlMAAlEiZg");
	var mask_1_graphics_138 = new cjs.Graphics().p("AHVa4QpIkDjopTQjopVEBpHQECpKJTjoMARfAs8QkbBukYAAQk3AAkziGg");
	var mask_1_graphics_139 = new cjs.Graphics().p("AHpbJQpPjyj5pMQj5pNDwpPQDxpRJLj5MASzAsaQksB/ktAAQkiAAkjh1g");
	var mask_1_graphics_140 = new cjs.Graphics().p("AH/bZQpWjgkKpFQkKpFDepWQDfpYJFkKMAUEAr2Qk8CRlCAAQkNAAkRhlg");
	var mask_1_graphics_141 = new cjs.Graphics().p("AIVboQpdjOkao9Qkbo+DNpbQDOpfI8kbMAVWArQQlNCklXAAQj5AAj+hWg");
	var mask_1_graphics_142 = new cjs.Graphics().p("AIsb2Qpji9kro0Qkro1C7piQC8pkI0krMAWmAqnQlcC4ltAAQjkAAjrhIg");
	var mask_1_graphics_143 = new cjs.Graphics().p("AJDcDQpnirk8orQk8otCqpmQCqpqIrk7MAX0Ap7QlpDOmEAAQjQAAjXg7g");
	var mask_1_graphics_144 = new cjs.Graphics().p("AJbcPQpsialLoiQlMojCXprQCYpuIilLMAZCApOQl4DkmaAAQi7AAjDgvg");
	var mask_1_graphics_145 = new cjs.Graphics().p("AJ0cZQpxiHlaoYQlcoZCFpwQCGpyIYlbMAaOAoeQmED8mzAAQimAAitglg");
	var mask_1_graphics_146 = new cjs.Graphics().p("AKNciQp1h1lpoOQlroPBzpzQB0p1INlrMAbZAntQmQETnLAAQiSAAiXgbg");
	var mask_1_graphics_147 = new cjs.Graphics().p("AKncpQp4hil4oDQl7oEBhp3QBip4ICl6MAciAm5QmbEtnlAAQh7AAiBgUg");
	var mask_1_graphics_148 = new cjs.Graphics().p("ALCcwQp7hQmHn4QmJn5BOp5QBPp7H4mIMAdpAmCQmlFIoAAAQhlAAhpgNg");
	var mask_1_graphics_149 = new cjs.Graphics().p("ALdc1Qp9g+mWnsQmXntA8p7QA8p9HtmXMAeuAlKQmuFkobAAQhPAAhRgIg");
	var mask_1_graphics_150 = new cjs.Graphics().p("AL5c5Qp+grmlngQmlnhApp9QAqp+HhmmMAfyAkQQm2GAo5AAQg3AAg4gDg");
	var mask_1_graphics_151 = new cjs.Graphics().p("AMVc7Qp/gYmynUQm0nUAXp/QAYp+HUm0MAg1AjUQm9GepYAAIg+gBg");
	var mask_1_graphics_152 = new cjs.Graphics().p("AMyc8QqAgGm/nHQnBnHAEp/QAFp/HHnBMAh2AiWQnDG9p5AAIgKAAg");
	var mask_1_graphics_153 = new cjs.Graphics().p("Aj9WPQnOm6gOp/QgOp/G6nOMAi1AhWQm6HOp/APIgkAAQppAAm/mtg");
	var mask_1_graphics_154 = new cjs.Graphics().p("AjrWtQnbmsghp+Qggp+GsnbMAjyAgUQmsHbp+AhQgsACgrAAQpJAAm4mPg");
	var mask_1_graphics_155 = new cjs.Graphics().p("AjYXLQnomfgzp8Qgzp+GenmMAkuAfQQmeHnp9A0QhFAFhDAAQorAAmwlxg");
	var mask_1_graphics_156 = new cjs.Graphics().p("AjEXnQnzmQhGp7QhFp7GQnzMAlnAeLQmQHzp8BGQhdAKhaAAQoOAAmolVg");
	var mask_1_graphics_157 = new cjs.Graphics().p("AiuYDQn/mChYp5QhYp5GBn+MAmeAdFQmBH+p5BZQh1AQhwAAQnzAAmek6g");
	var mask_1_graphics_158 = new cjs.Graphics().p("AiXYdQoKlzhqp1Qhrp3FyoJMAnUAb8QlzIJp2BsQiMAXiGAAQnYAAmUkgg");
	var mask_1_graphics_159 = new cjs.Graphics().p("Ah/Y2QoUljh9pzQh9pyFjoUMAoGAayQljIUpzB9QiiAgibAAQm/AAmJkHg");
	var mask_1_graphics_160 = new cjs.Graphics().p("AhmZOQoelUiPpuQiPpwFUocMAo3AZmQlUIepvCQQi4ApiwAAQmnAAl9jvg");
	var mask_1_graphics_161 = new cjs.Graphics().p("AhLZlQoolEihpqQihprFEomMAplAYaQlDInprCiQjNA1jFAAQmQAAlvjZg");
	var mask_1_graphics_162 = new cjs.Graphics().p("AgvZ7QoxkzizplQizpnE0ovMAqRAXLQkzIxpmC0QjhBBjaAAQl4AAlijDg");
	var mask_1_graphics_163 = new cjs.Graphics().p("AgSaQQo5kjjFpgQjFphEjo4MAq8AV8QkjI6pgDFQj1BPjvAAQliAAlTiug");
	var mask_1_graphics_164 = new cjs.Graphics().p("AAMakQpBkTjWpZQjXpbESpBMArkAUsQkSJBpbDYQkIBdkCAAQlNAAlEiag");
	var mask_1_graphics_165 = new cjs.Graphics().p("AAra2QpJkBjnpTQjopVEBpIMAsJATaQkBJJpUDpQkaBtkXAAQk4AAk0iIg");
	var mask_1_graphics_166 = new cjs.Graphics().p("ABMbIQpQjxj5pMQj5pNDwpQMAssASIQjwJQpND6QksB+ksAAQkiAAkjh2g");
	var mask_1_graphics_167 = new cjs.Graphics().p("ABtbYQpWjfkKpFQkKpGDfpWMAtMAQ0QjfJXpFELQk8CQlBAAQkOAAkShmg");
	var mask_1_graphics_168 = new cjs.Graphics().p("ACQbnQpdjNkao9Qkbo+DNpcMAtrAPfQjOJdo9EcQlMCjlXAAQj5AAj/hXg");
	var mask_1_graphics_169 = new cjs.Graphics().p("AC0b1Qpji8kro0Qkro2C7piMAuHAOKQi8Jjo1EsQlbC4ltAAQjkAAjshJg");
	var mask_1_graphics_170 = new cjs.Graphics().p("ADZcCQpoiqk7orQk8otCqpnMAufAMzQiqJoosE9QlqDMmCAAQjRAAjXg7g");
	var mask_1_graphics_171 = new cjs.Graphics().p("AD/cNQptiYlLohQlMokCYpsMAu1ALdQiXJtojFMQl3DjmZAAQi8AAjDgwg");
	var mask_1_graphics_172 = new cjs.Graphics().p("AElcYQpwiGlboYQlcoaCGpwMAvKAKGQiGJxoYFcQmFD6mxAAQinAAiuglg");
	var mask_1_graphics_173 = new cjs.Graphics().p("AFNchQp0h0lroOQlroPBzp0MAvcAIuQh0J0oOFsQmPETnKAAQiSAAiYgcg");
	var mask_1_graphics_174 = new cjs.Graphics().p("AF2coQp4hhl5oDQl7oEBhp4MAvrAHWQhiJ3oDF7QmbEsnjAAQh8AAiBgUg");
	var mask_1_graphics_175 = new cjs.Graphics().p("AGfcvQp6hPmIn4QmKn5BPp6MAv3AF9QhPJ6n4GJQmlFHn+AAQhmAAhqgNg");
	var mask_1_graphics_176 = new cjs.Graphics().p("AHJc0Qp8g8mXntQmYntA9p8MAwAAEjQg8J8nsGZQmuFioaAAQhQAAhSgIg");
	var mask_1_graphics_177 = new cjs.Graphics().p("AH0c4Qp9gqmlngQmmniApp9MAwIADKQgqJ9ngGnQm2F+o3AAQg4AAg6gDg");
	var mask_1_graphics_178 = new cjs.Graphics().p("AIgc6Qp/gXmynUQm0nVAXp+MAwMABwQgXJ/nUG0Qm9GcpWAAIhAgBg");
	var mask_1_graphics_179 = new cjs.Graphics().p("AJMc7Qp/gFnAnGQnBnIAEp/MAwPAAWQgFJ/nHHCQnEG7p2AAIgNAAg");
	var mask_1_graphics_180 = new cjs.Graphics().p("AnTWPQnOm7gOp/MAwNgBDQAOJ/m5HPQm8HNp+AOIgnAAQpmAAm/msg");
	var mask_1_graphics_181 = new cjs.Graphics().p("AmyWuQnbmughp+MAwLgCdQAgJ+msHcQmuHZp9AhQgtACgtAAQpHAAm3mNg");
	var mask_1_graphics_182 = new cjs.Graphics().p("AmQXLQnomfgzp9MAwEgD3QAzJ9mdHoQmgHmp9AzQhGAFhEAAQopAAmvlwg");
	var mask_1_graphics_183 = new cjs.Graphics().p("AluXnQnzmRhGp7MAv8gFQQBGJ7mQHzQmRHyp7BGQheAKhcAAQoMAAmnlUg");
	var mask_1_graphics_184 = new cjs.Graphics().p("AlQX+Qn9mEhVp5MAvygGdQBWJ5mDH9QmFH8p5BWQhzAPhuAAQn1AAmfk9g");
	var mask_1_graphics_185 = new cjs.Graphics().p("AkxYVQoGl3hmp3MAvngHqQBmJ3l2IHQl4IGp3BlQiGAWiCAAQneAAmWkng");
	var mask_1_graphics_186 = new cjs.Graphics().p("AkRYrQoQlqh2p0MAvagI2QB2J0lpIQQlrIPp0B1QiaAdiUAAQnIAAmMkRg");
	var mask_1_graphics_187 = new cjs.Graphics().p("AjxZBQoZldiFpxMAvKgKCQCGJxlcIYQldIYpxCFQitAlinAAQmyAAmCj7g");
	var mask_1_graphics_188 = new cjs.Graphics().p("AjRZVQohlPiVpuMAu6gLNQCUJtlNIhQlQIhptCUQjAAui4AAQmeAAl4jng");
	var mask_1_graphics_189 = new cjs.Graphics().p("AivZpQoqlBilpqMAungMZQCkJplAIqQlCIoppClQjSA3jKAAQmKAAlrjTg");
	var mask_1_graphics_190 = new cjs.Graphics().p("AiOZ8Qoyk0izplMAuRgNjQC0JkkyIyQk0IwplC0QjjBCjcABQl2AAlgjBg");
	var mask_1_graphics_191 = new cjs.Graphics().p("AhsaOQo5kljDphMAt7gOtQDDJfkkI5QkmI4pgDDQj0BPjtAAQljAAlUivg");
	var mask_1_graphics_192 = new cjs.Graphics().p("AhJafQpBkXjSpbMAtigP3QDTJakWJAQkXJApbDSQkFBbj/AAQlQAAlGieg");
	var mask_1_graphics_193 = new cjs.Graphics().p("AgmavQpHkIjipWMAtIgRAQDhJVkGJHQkJJGpWDiQkUBokRAAQk+AAk4iOg");
	var mask_1_graphics_194 = new cjs.Graphics().p("AgDa/QpNj6jxpQMAssgSIQDwJPj4JNQj6JNpQDwQkjB3kjAAQksAAkqh+g");
	var mask_1_graphics_195 = new cjs.Graphics().p("AAgbNQpSjqkApKMAsOgTQQD/JJjpJTQjrJTpKD/QkyCGk1AAQkaAAkchwg");
	var mask_1_graphics_196 = new cjs.Graphics().p("ABFbbQpZjbkOpEMArugUWQEOJCjaJZQjdJZpDENQlACWlHAAQkIAAkMhig");
	var mask_1_graphics_197 = new cjs.Graphics().p("ABpboQpejMkco9MArMgVcQEcI7jLJfQjNJeo8EcQlOCmlZAAQj2AAj9hVg");
	var mask_1_graphics_198 = new cjs.Graphics().p("ACOb0Qpii9kro1MAqogWiQErI1i8JjQi9Jjo1EqQlbC3lsAAQjlABjshJg");
	var mask_1_graphics_199 = new cjs.Graphics().p("AC0b/Qpoitk4ouMAqDgXmQE5ItisJoQivJnotE5QlnDJl/AAQjUAAjag9g");
	var mask_1_graphics_200 = new cjs.Graphics().p("ADZcJQprielHolMApdgYpQFGIkicJsQifJsolFGQlzDdmTAAQjCAAjJgzg");
	var mask_1_graphics_201 = new cjs.Graphics().p("AD/cSQpviOlUodMAo0gZrQFUIciNJwQiPJvodFUQl+DxmnAAQiwAAi3gqg");
	var mask_1_graphics_202 = new cjs.Graphics().p("AElcbQpyh/lioUMAoKgasQFiIUh+JyQh/JzoUFhQmJEGm8AAQidAAilghg");
	var mask_1_graphics_203 = new cjs.Graphics().p("AFMciQp2hvlvoLMAnegbsQFvILhtJ1QhwJ2oLFvQmTEanRAAQiLAAiRgZg");
	var mask_1_graphics_204 = new cjs.Graphics().p("AFycoQp4hel8oCMAmxgcrQF8IBheJ4QhgJ4oBF8QmcExnoAAQh4AAh+gTg");
	var mask_1_graphics_205 = new cjs.Graphics().p("AGZcuQp7hPmJn4MAmCgdpQGJH4hNJ6QhQJ6n4GJQmlFIn+AAQhmAAhpgNg");
	var mask_1_graphics_206 = new cjs.Graphics().p("AHAcyQp9g+mVnuMAlRgemQGWHug+J7QhAJ9nuGVQmsFgoWAAQhTAAhUgJg");
	var mask_1_graphics_207 = new cjs.Graphics().p("AHmc2Qp9gvminjMAkfgfiQGiHkguJ9QgvJ+nkGhQmzF4owABQg+AAhAgFg");
	var mask_1_graphics_208 = new cjs.Graphics().p("AINc4Qp+gemunZMAjsggcQGuHZgeJ+QggJ/nZGuQm6GRpJAAQgqAAgqgCg");
	var mask_1_graphics_209 = new cjs.Graphics().p("AI0c6Qp/gPm6nOMAi3ghUQG6HOgOJ+QgQKAnNG5QnAGsplAAIgoAAg");
	var mask_1_graphics_210 = new cjs.Graphics().p("AnqV5MAiBgiMQHFHDADJ/QAAJ/nCHFQnEHGp+ABIgFAAQp8AAnEnBg");
	var mask_1_graphics_211 = new cjs.Graphics().p("AnOWUMAhJgjCQHRG4ASJ+QAQJ/m2HQQm4HRp+ASIgyAAQpfAAm/mmg");
	var mask_1_graphics_212 = new cjs.Graphics().p("AmxWuMAgQgj2QHbGrAiJ+QAhJ/mrHbQmsHbp+AiQgvACgtAAQpGAAm3mMg");
	var mask_1_graphics_213 = new cjs.Graphics().p("AmUXIMAfVgkqQHmGgAzJ8QAwJ+mfHlQmgHmp8AyQhFAFhCAAQosAAmwlyg");
	var mask_1_graphics_214 = new cjs.Graphics().p("Al3XgMAeaglbQHwGTBDJ7QBBJ9mTHvQmUHxp7BBQhZAKhXAAQoSAAmqlbg");
	var mask_1_graphics_215 = new cjs.Graphics().p("AlYX4MAddgmLQH6GGBSJ5QBRJ7mGH6QmHH6p5BSQhuAOhrAAQn6AAmhlDg");
	var mask_1_graphics_216 = new cjs.Graphics().p("Ak6YPMAcfgm6QIEF6BjJ3QBgJ4l5IDQl6IEp3BiQiCAUh+AAQnjAAmZksg");
	var mask_1_graphics_217 = new cjs.Graphics().p("AkaYlMAbggnnQINFtByJ0QBwJ2lsIMQltIOp0BxQiWAbiQAAQnNAAmPkWg");
	var mask_1_graphics_218 = new cjs.Graphics().p("Aj6Y7MAafgoTQIWFgCCJyQCAJyleIVQlgIXpxCBQipAjiiAAQm4AAmFkBg");
	var mask_1_graphics_219 = new cjs.Graphics().p("AjaZQMAZego9QIfFSCSJuQCQJvlSIeQlSIfpuCRQi7Asi0AAQmjAAl7jsg");
	var mask_1_graphics_220 = new cjs.Graphics().p("Ai5ZjMAYcgpkQInFEChJrQCgJqlEInQlEInpqChQjOA1jGAAQmPAAlvjZg");
	var mask_1_graphics_221 = new cjs.Graphics().p("AiXZ3MAXYgqLQIvE2CxJmQCvJmk2IvQk2IvpmCwQjfBAjYAAQl7AAljjFg");
	var mask_1_graphics_222 = new cjs.Graphics().p("Ah1aJMAWUgqwQI2EoDBJiQC+JhkoI2QkoI4phC/QjwBLjqAAQloAAlWizg");
	var mask_1_graphics_223 = new cjs.Graphics().p("AhTaaMAVPgrTQI+EaDPJdQDOJckZI+QkaI+pcDPQkBBXj7AAQlVAAlKiig");
	var mask_1_graphics_224 = new cjs.Graphics().p("AgwarMAUJgr0QJFELDeJXQDdJXkLJFQkLJFpXDeQkQBkkNAAQlDAAk8iRg");
	var mask_1_graphics_225 = new cjs.Graphics().p("AgMa6MATBgsTQJMD8DtJSQDsJRj8JLQj8JMpSDtQkgBzkeAAQkxAAktiDg");
	var mask_1_graphics_226 = new cjs.Graphics().p("AAWbJMAR7gsxQJSDtD8JMQD7JLjtJRQjuJSpLD8QkvCCkwAAQkfAAkgh0g");
	var mask_1_graphics_227 = new cjs.Graphics().p("AA7bYMAQzgtOQJXDfELJFQEKJFjfJWQjeJYpFEKQk9CSlDAAQkNAAkQhlg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(119).to({graphics:mask_1_graphics_119,x:150.9,y:183.9}).wait(1).to({graphics:mask_1_graphics_120,x:148.7,y:184.3}).wait(1).to({graphics:mask_1_graphics_121,x:146.5,y:184.6}).wait(1).to({graphics:mask_1_graphics_122,x:144.3,y:184.9}).wait(1).to({graphics:mask_1_graphics_123,x:142,y:185}).wait(1).to({graphics:mask_1_graphics_124,x:139.8,y:185.1}).wait(1).to({graphics:mask_1_graphics_125,x:137.5,y:185.2}).wait(1).to({graphics:mask_1_graphics_126,x:138.7,y:185.2}).wait(1).to({graphics:mask_1_graphics_127,x:140.9,y:185.2}).wait(1).to({graphics:mask_1_graphics_128,x:143.2,y:185.2}).wait(1).to({graphics:mask_1_graphics_129,x:145.4,y:185.3}).wait(1).to({graphics:mask_1_graphics_130,x:147.7,y:185.3}).wait(1).to({graphics:mask_1_graphics_131,x:149.9,y:185.3}).wait(1).to({graphics:mask_1_graphics_132,x:152.1,y:185.3}).wait(1).to({graphics:mask_1_graphics_133,x:154.3,y:185.4}).wait(1).to({graphics:mask_1_graphics_134,x:156.5,y:185.4}).wait(1).to({graphics:mask_1_graphics_135,x:158.6,y:185.4}).wait(1).to({graphics:mask_1_graphics_136,x:160.8,y:185.4}).wait(1).to({graphics:mask_1_graphics_137,x:162.9,y:185.4}).wait(1).to({graphics:mask_1_graphics_138,x:165,y:185.4}).wait(1).to({graphics:mask_1_graphics_139,x:167.1,y:185.4}).wait(1).to({graphics:mask_1_graphics_140,x:169.1,y:185.4}).wait(1).to({graphics:mask_1_graphics_141,x:171.2,y:185.4}).wait(1).to({graphics:mask_1_graphics_142,x:173.2,y:185.4}).wait(1).to({graphics:mask_1_graphics_143,x:175.1,y:185.4}).wait(1).to({graphics:mask_1_graphics_144,x:177.1,y:185.4}).wait(1).to({graphics:mask_1_graphics_145,x:179,y:185.4}).wait(1).to({graphics:mask_1_graphics_146,x:180.9,y:185.3}).wait(1).to({graphics:mask_1_graphics_147,x:182.7,y:185.3}).wait(1).to({graphics:mask_1_graphics_148,x:184.5,y:185.3}).wait(1).to({graphics:mask_1_graphics_149,x:186.2,y:185.3}).wait(1).to({graphics:mask_1_graphics_150,x:187.9,y:185.2}).wait(1).to({graphics:mask_1_graphics_151,x:189.6,y:185.2}).wait(1).to({graphics:mask_1_graphics_152,x:191.2,y:185.2}).wait(1).to({graphics:mask_1_graphics_153,x:192.8,y:185.2}).wait(1).to({graphics:mask_1_graphics_154,x:194.3,y:185.2}).wait(1).to({graphics:mask_1_graphics_155,x:195.8,y:185.2}).wait(1).to({graphics:mask_1_graphics_156,x:197.3,y:185.2}).wait(1).to({graphics:mask_1_graphics_157,x:198.6,y:185.3}).wait(1).to({graphics:mask_1_graphics_158,x:200,y:185.3}).wait(1).to({graphics:mask_1_graphics_159,x:201.2,y:185.3}).wait(1).to({graphics:mask_1_graphics_160,x:202.5,y:185.3}).wait(1).to({graphics:mask_1_graphics_161,x:203.6,y:185.4}).wait(1).to({graphics:mask_1_graphics_162,x:204.7,y:185.4}).wait(1).to({graphics:mask_1_graphics_163,x:205.8,y:185.4}).wait(1).to({graphics:mask_1_graphics_164,x:206.8,y:185.4}).wait(1).to({graphics:mask_1_graphics_165,x:207.7,y:185.4}).wait(1).to({graphics:mask_1_graphics_166,x:208.6,y:185.4}).wait(1).to({graphics:mask_1_graphics_167,x:209.4,y:185.4}).wait(1).to({graphics:mask_1_graphics_168,x:210.2,y:185.4}).wait(1).to({graphics:mask_1_graphics_169,x:210.9,y:185.4}).wait(1).to({graphics:mask_1_graphics_170,x:211.5,y:185.3}).wait(1).to({graphics:mask_1_graphics_171,x:212,y:185.3}).wait(1).to({graphics:mask_1_graphics_172,x:212.6,y:185.3}).wait(1).to({graphics:mask_1_graphics_173,x:213,y:185.3}).wait(1).to({graphics:mask_1_graphics_174,x:213.4,y:185.2}).wait(1).to({graphics:mask_1_graphics_175,x:213.7,y:185.2}).wait(1).to({graphics:mask_1_graphics_176,x:213.9,y:185.2}).wait(1).to({graphics:mask_1_graphics_177,x:214.1,y:185.1}).wait(1).to({graphics:mask_1_graphics_178,x:214.2,y:185.1}).wait(1).to({graphics:mask_1_graphics_179,x:214.3,y:185.1}).wait(1).to({graphics:mask_1_graphics_180,x:214.3,y:185.1}).wait(1).to({graphics:mask_1_graphics_181,x:214.3,y:185.1}).wait(1).to({graphics:mask_1_graphics_182,x:214.3,y:185.1}).wait(1).to({graphics:mask_1_graphics_183,x:214.3,y:185.1}).wait(1).to({graphics:mask_1_graphics_184,x:214.4,y:185.1}).wait(1).to({graphics:mask_1_graphics_185,x:214.4,y:185.2}).wait(1).to({graphics:mask_1_graphics_186,x:214.4,y:185.2}).wait(1).to({graphics:mask_1_graphics_187,x:214.4,y:185.2}).wait(1).to({graphics:mask_1_graphics_188,x:214.5,y:185.2}).wait(1).to({graphics:mask_1_graphics_189,x:214.5,y:185.2}).wait(1).to({graphics:mask_1_graphics_190,x:214.5,y:185.3}).wait(1).to({graphics:mask_1_graphics_191,x:214.5,y:185.3}).wait(1).to({graphics:mask_1_graphics_192,x:214.5,y:185.3}).wait(1).to({graphics:mask_1_graphics_193,x:214.5,y:185.3}).wait(1).to({graphics:mask_1_graphics_194,x:214.5,y:185.3}).wait(1).to({graphics:mask_1_graphics_195,x:214.5,y:185.3}).wait(1).to({graphics:mask_1_graphics_196,x:214.5,y:185.3}).wait(1).to({graphics:mask_1_graphics_197,x:214.5,y:185.3}).wait(1).to({graphics:mask_1_graphics_198,x:214.5,y:185.3}).wait(1).to({graphics:mask_1_graphics_199,x:214.5,y:185.2}).wait(1).to({graphics:mask_1_graphics_200,x:214.5,y:185.2}).wait(1).to({graphics:mask_1_graphics_201,x:214.4,y:185.2}).wait(1).to({graphics:mask_1_graphics_202,x:214.4,y:185.2}).wait(1).to({graphics:mask_1_graphics_203,x:214.4,y:185.1}).wait(1).to({graphics:mask_1_graphics_204,x:214.4,y:185.1}).wait(1).to({graphics:mask_1_graphics_205,x:214.3,y:185.1}).wait(1).to({graphics:mask_1_graphics_206,x:214.3,y:185.1}).wait(1).to({graphics:mask_1_graphics_207,x:214.3,y:185.1}).wait(1).to({graphics:mask_1_graphics_208,x:214.3,y:185}).wait(1).to({graphics:mask_1_graphics_209,x:214.3,y:185}).wait(1).to({graphics:mask_1_graphics_210,x:214.3,y:185}).wait(1).to({graphics:mask_1_graphics_211,x:214.3,y:185}).wait(1).to({graphics:mask_1_graphics_212,x:214.3,y:185}).wait(1).to({graphics:mask_1_graphics_213,x:214.3,y:185}).wait(1).to({graphics:mask_1_graphics_214,x:214.3,y:185.1}).wait(1).to({graphics:mask_1_graphics_215,x:214.3,y:185.1}).wait(1).to({graphics:mask_1_graphics_216,x:214.3,y:185.1}).wait(1).to({graphics:mask_1_graphics_217,x:214.3,y:185.1}).wait(1).to({graphics:mask_1_graphics_218,x:214.4,y:185.2}).wait(1).to({graphics:mask_1_graphics_219,x:214.4,y:185.2}).wait(1).to({graphics:mask_1_graphics_220,x:214.4,y:185.2}).wait(1).to({graphics:mask_1_graphics_221,x:214.4,y:185.2}).wait(1).to({graphics:mask_1_graphics_222,x:214.4,y:185.2}).wait(1).to({graphics:mask_1_graphics_223,x:214.4,y:185.2}).wait(1).to({graphics:mask_1_graphics_224,x:214.4,y:185.2}).wait(1).to({graphics:mask_1_graphics_225,x:214.4,y:185.3}).wait(1).to({graphics:mask_1_graphics_226,x:214.4,y:185.3}).wait(1).to({graphics:mask_1_graphics_227,x:214.5,y:185.3}).wait(222));

	// Layer 6
	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(25,1,1).p("AGyu2QCoBMCOCLQE0ExAAGuQAAGvk0EwQk1EwmzABQmzgBk0kwQk0kwAAmvQAAmuE0kxQEykuGwgCQADAAACAAQARAAARAA");
	this.shape_130.setTransform(274.1,202);
	this.shape_130._off = true;

	var maskedShapeInstanceList = [this.shape_130];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_130).wait(119).to({_off:false},0).wait(330));

	// Layer 16 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_9 = new cjs.Graphics().p("AI4c7MAA6gwRQKAAMG8HMQG8HPgMJ+QgMKAnNG8QnBGxprAAIghgBg");
	var mask_2_graphics_10 = new cjs.Graphics().p("AJIzWQKAgGHJHBQHIHCAFJ+QAFKBnAHHQnBHJqAAGg");
	var mask_2_graphics_11 = new cjs.Graphics().p("AIezVQKAgXHUG0QHUG2AXJ+QAXKAm0HUQm1HVqAAWg");
	var mask_2_graphics_12 = new cjs.Graphics().p("AH0zSQJ/goHgGnQHgGpAoJ9QAoJ/mnHgQmoHgp/Aog");
	var mask_2_graphics_13 = new cjs.Graphics().p("AHKzNQJ9g5HsGZQHrGcA5J8QA6J+maHqQmbHsp9A6g");
	var mask_2_graphics_14 = new cjs.Graphics().p("AGgzGQJ8hLH3GMQH1GOBLJ6QBKJ8mMH2QmNH3p8BKg");
	var mask_2_graphics_15 = new cjs.Graphics().p("AF3y+QJ5hcIBF+QIAGBBcJ4QBcJ5l/IBQl/IBp6Bcg");
	var mask_2_graphics_16 = new cjs.Graphics().p("AFNy0QJ2htIMFwQILFzBsJ1QBtJ3lwIKQlyIMp3Bsg");
	var mask_2_graphics_17 = new cjs.Graphics().p("AEkypQJzh+IVFiQIVFkB9JyQB+J0liIUQljIWp0B+g");
	var mask_2_graphics_18 = new cjs.Graphics().p("AD6ycQJwiOIfFTQIeFWCOJvQCPJvlUIeQlUIepwCPg");
	var mask_2_graphics_19 = new cjs.Graphics().p("ADRyNQJsifIoFEQInFHCfJrQCgJrlFInQlGIopsCfg");
	var mask_2_graphics_20 = new cjs.Graphics().p("ACpx8QJnixIwE2QIwE4CwJmQCwJnk2IvQk2IwpnCxg");
	var mask_2_graphics_21 = new cjs.Graphics().p("ACBxqQJijBI4EmQI4EpDBJhQDBJiknI3QknI5pjDBg");
	var mask_2_graphics_22 = new cjs.Graphics().p("ABZxWQJcjSJBEXQI/EZDRJcQDSJckXI/QkYJBpdDRg");
	var mask_2_graphics_23 = new cjs.Graphics().p("AAxxBQJXjiJIEHQJHEKDhJWQDiJWkIJHQkIJHpXDig");
	var mask_2_graphics_24 = new cjs.Graphics().p("AAKwqQJRjyJOD3QJOD6DyJQQDyJQj4JNQj4JPpRDxg");
	var mask_2_graphics_25 = new cjs.Graphics().p("AgbwRQJJkCJUDnQJVDpEBJJQECJKjnJTQjpJWpJEBg");
	var mask_2_graphics_26 = new cjs.Graphics().p("AhBv3QJBkSJbDXQJbDZERJCQESJCjYJaQjYJbpCESg");
	var mask_2_graphics_27 = new cjs.Graphics().p("AhnvcQI6khJhDHQJgDIEhI7QEhI6jHJfQjIJho6Ehg");
	var mask_2_graphics_28 = new cjs.Graphics().p("AiLu/QIxkwJmC2QJlC4EwIyQExIzi3JkQi3JmoyExg");
	var mask_2_graphics_29 = new cjs.Graphics().p("AiwugQIpk/JrClQJqCnE/IqQFAIqimJpQimJrorFAg");
	var mask_2_graphics_30 = new cjs.Graphics().p("AjUuAQIhlOJuCUQJvCXFOIhQFPIhiVJtQiWJvohFPg");
	var mask_2_graphics_31 = new cjs.Graphics().p("Aj3teQIXldJzCDQJyCGFdIYQFdIXiEJyQiFJzoYFdg");
	var mask_2_graphics_32 = new cjs.Graphics().p("AkZs7QINlsJ2BzQJ2B1FrIOQFrIOhzJ0QhzJ3oPFrg");
	var mask_2_graphics_33 = new cjs.Graphics().p("Ak7sXQIDl5J5BhQJ5BkF5IEQF6IEhjJ3QhiJ5oEF6g");
	var mask_2_graphics_34 = new cjs.Graphics().p("AlcrxQH5mIJ7BRQJ7BSGHH6QGIH5hRJ6QhSJ8n6GHg");
	var mask_2_graphics_35 = new cjs.Graphics().p("Al9rKQHvmVJ8A/QJ9BBGVHvQGVHwg/J7QhBJ9nvGVg");
	var mask_2_graphics_36 = new cjs.Graphics().p("AmdqiQHkmiJ+AuQJ/AwGhHkQGjHkgvJ9QguJ/nlGig");
	var mask_2_graphics_37 = new cjs.Graphics().p("Am8p4QHYmvJ/AcQKAAfGvHYQGvHZgdJ+QgdKAnZGvg");
	var mask_2_graphics_38 = new cjs.Graphics().p("AnapNQHNm8J/ALQKAAOG7HMQG8HNgMJ+QgMKBnNG8g");
	var mask_2_graphics_39 = new cjs.Graphics().p("An4ohQHBnIJ/gGQKAgEHIHAQHIHBAGJ+QAFKBnBHIg");
	var mask_2_graphics_40 = new cjs.Graphics().p("AoVnzQG0nVJ/gXQKAgVHTGzQHVG1AXJ9QAWKBm0HUg");
	var mask_2_graphics_41 = new cjs.Graphics().p("AoxnFQGnngJ+goQJ/gnHfGnQHhGnAnJ9QAoKAmnHfg");
	var mask_2_graphics_42 = new cjs.Graphics().p("ApMmVQGanrJ8g6QJ+g4HqGZQHsGbA5J7QA5J/maHrg");
	var mask_2_graphics_43 = new cjs.Graphics().p("ApnllQGNn1J6hMQJ8hJH2GMQH2GNBKJ6QBLJ8mNH2g");
	var mask_2_graphics_44 = new cjs.Graphics().p("AqBkzQF/oAJ4hdQJ6haIAF+QIBGABcJ3QBbJ6l+IBg");
	var mask_2_graphics_45 = new cjs.Graphics().p("AqZkAQFwoLJ2htQJ3hsIKFxQILFxBtJ1QBtJ3lxILg");
	var mask_2_graphics_46 = new cjs.Graphics().p("AqxjMQFioVJyh+QJ1h9ITFiQIVFjB+JyQB+J0ljIVg");
	var mask_2_graphics_47 = new cjs.Graphics().p("ArIiXQFUoeJuiQQJxiNIdFTQIeFVCPJuQCPJwlUIeg");
	var mask_2_graphics_48 = new cjs.Graphics().p("ArehiQFFonJqigQJtieImFFQInFFCgJqQCgJslGIng");
	var mask_2_graphics_49 = new cjs.Graphics().p("ArzgrQE2owJmixQJoivIvE2QIwE2CwJmQCwJok2Ivg");
	var mask_2_graphics_50 = new cjs.Graphics().p("AsHALQEno3JhjBQJjjAI3EnQI4EnDAJgQDBJjknI4g");
	var mask_2_graphics_51 = new cjs.Graphics().p("AsaBDQEXo+JcjSQJdjRI/EYQJAEXDRJbQDSJekYI/g");
	var mask_2_graphics_52 = new cjs.Graphics().p("AssB8QEIpGJVjiQJYjhJGEIQJHEIDiJVQDiJXkIJHg");
	var mask_2_graphics_53 = new cjs.Graphics().p("As9C1QD4pMJPjzQJSjwJND3QJOD4DxJPQDyJRj3JOg");
	var mask_2_graphics_54 = new cjs.Graphics().p("AtMDwQDopUJJkCQJKkBJTDoQJVDoEBJIQECJKjoJVg");
	var mask_2_graphics_55 = new cjs.Graphics().p("AtbEqQDYpZJCkSQJCkQJaDXQJbDYERJBQESJDjYJag");
	var mask_2_graphics_56 = new cjs.Graphics().p("AtoFmQDHpfI6kiQI7kgJfDHQJhDIEgI5QEiI7jHJgg");
	var mask_2_graphics_57 = new cjs.Graphics().p("At1GiQC3pkIzkxQIykwJlC3QJlC3EwIxQExIzi3Jlg");
	var mask_2_graphics_58 = new cjs.Graphics().p("AuAHeQCmppIqlAQIrk+JpCmQJqCmE/IoQFAIsimJpg");
	var mask_2_graphics_59 = new cjs.Graphics().p("AuKIbQCVptIhlPQIilOJtCWQJvCVFOIgQFPIiiWJug");
	var mask_2_graphics_60 = new cjs.Graphics().p("AuTJYQCFpxIXldQIZlcJxCEQJyCEFdIXQFdIZiEJyg");
	var mask_2_graphics_61 = new cjs.Graphics().p("AubKWQB0p1IOlrQIPlrJ0BzQJ2B0FrINQFrIPhzJ1g");
	var mask_2_graphics_62 = new cjs.Graphics().p("AuhLUQBip4IEl6QIFl4J3BiQJ5BiF5IDQF6IFhjJ4g");
	var mask_2_graphics_63 = new cjs.Graphics().p("AunMSQBRp7H6mHQH6mGJ6BRQJ7BRGHH5QGIH6hSJ7g");
	var mask_2_graphics_64 = new cjs.Graphics().p("AurNQQBAp8HumVQHwmUJ8BAQJ9BAGUHuQGVHwhAJ8g");
	var mask_2_graphics_65 = new cjs.Graphics().p("AuvOPQAvp+HkmiQHkmhJ9AuQJ/AvGhHiQGjHlgvJ+g");
	var mask_2_graphics_66 = new cjs.Graphics().p("AuxPNQAdp/HYmuQHZmvJ/AeQJ/AdGvHXQGvHZgdJ/g");
	var mask_2_graphics_67 = new cjs.Graphics().p("AuyQMQAMp/HMm8QHOm7J+AMQKAAMG7HNQG8HMgMJ/g");
	var mask_2_graphics_68 = new cjs.Graphics().p("An4gJQHCnHJ+gGQKAgFHIHAQHIHAAGKAMgwQAAZQgGp/HAnIg");
	var mask_2_graphics_69 = new cjs.Graphics().p("AoUAAQG1nTJ+gXQKAgWHTGzQHVG0AWJ/MgwOABtQgXp/G0nUg");
	var mask_2_graphics_70 = new cjs.Graphics().p("AovAJQGoneJ9gnQJ/goHfGmQHgGnAoJ/MgwKADAQgop+Gnnhg");
	var mask_2_graphics_71 = new cjs.Graphics().p("ApJAUQGcnpJ7g5QJ+g5HqGZQHrGaA6J9MgwEAEUQg5p9GZnsg");
	var mask_2_graphics_72 = new cjs.Graphics().p("AphAgQGOn0J6hLQJ7hKH2GMQH2GMBKJ8Mgv7AFnQhKp8GMn2g");
	var mask_2_graphics_73 = new cjs.Graphics().p("Ap4AtQGBn/J3hcQJ5hbIAF+QIBF/BcJ4MgvwAG6Qhcp5F+oAg");
	var mask_2_graphics_74 = new cjs.Graphics().p("AqNA6QFyoJJ1htQJ3htIKFxQILFwBsJ2MgvjAINQhsp2FwoLg");
	var mask_2_graphics_75 = new cjs.Graphics().p("AqhBIQFkoTJyh+QJzh+IUFjQIVFjB+JyMgvUAJfQh+pzFioVg");
	var mask_2_graphics_76 = new cjs.Graphics().p("AqzBWQFVocJuiOQJwiPIdFUQIfFUCOJvMgvCAKwQiOpvFTofg");
	var mask_2_graphics_77 = new cjs.Graphics().p("ArEBmQFHomJqifQJrifImFFQIoFFCfJrMguuAMBQifprFEong");
	var mask_2_graphics_78 = new cjs.Graphics().p("ArTB2QE4ouJliwQJniwIvE2QIwE2CwJmMguZANTQiwpnE2owg");
	var mask_2_graphics_79 = new cjs.Graphics().p("ArhCHQEpo2JgjBQJijBI3EnQI4EnDBJhMguAAOjQjBpiEmo4g");
	var mask_2_graphics_80 = new cjs.Graphics().p("ArtCYQEZo+JbjRQJdjRI+EXQJAEYDRJbMgtmAPzQjRpdEXpAg");
	var mask_2_graphics_81 = new cjs.Graphics().p("Ar4CrQEKpGJUjhQJXjiJGEIQJIEIDhJWMgtJARAQjipWEHpHg");
	var mask_2_graphics_82 = new cjs.Graphics().p("AsBC+QD6pNJOjxQJRjyJND4QJOD4DyJPMgsrASPQjypQD3pOg");
	var mask_2_graphics_83 = new cjs.Graphics().p("AsIDRQDppTJIkBQJKkCJTDoQJVDoEBJIMgsKATcQkBpJDnpVg");
	var mask_2_graphics_84 = new cjs.Graphics().p("AsODlQDZpZJBkRQJCkRJaDXQJbDYERJBMgroAUoQkRpCDXpbg");
	var mask_2_graphics_85 = new cjs.Graphics().p("AsSD6QDIpfI6kgQI6khJfDHQJhDIEhI5MgrDAVzQkho7DHpgg");
	var mask_2_graphics_86 = new cjs.Graphics().p("AsVEQQC4pkIykwQIykxJkC3QJmC3EwIyMgqcAW8QkwoyC2plg");
	var mask_2_graphics_87 = new cjs.Graphics().p("AsWEmQCnppIqk/QIplAJpCmQJrCnE/IqMgpzAYFQlAoqCmpqg");
	var mask_2_graphics_88 = new cjs.Graphics().p("AsWE8QCXptIglOQIhlOJtCVQJvCWFOIhMgpIAZNQlOoiCUpug");
	var mask_2_graphics_89 = new cjs.Graphics().p("AsUFTQCGpxIXlcQIYldJxCEQJyCFFdIYMgocAaTQldoYCEpyg");
	var mask_2_graphics_90 = new cjs.Graphics().p("AsQFrQB0p0IOlrQIOlrJ0BzQJ2BzFrIPMgntAbZQlroPBzp1g");
	var mask_2_graphics_91 = new cjs.Graphics().p("AsLGDQBjp3IEl5QIEl5J3BiQJ5BiF5IFMgm9AcdQl5oFBip4g");
	var mask_2_graphics_92 = new cjs.Graphics().p("AsFGcQBTp6H5mGQH6mIJ5BRQJ8BSGHH5MgmLAdgQmHn6BQp6g");
	var mask_2_graphics_93 = new cjs.Graphics().p("Ar8G1QBBp7HvmVQHumVJ8BAQJ9BAGVHvMglXAeiQmUnvA/p9g");
	var mask_2_graphics_94 = new cjs.Graphics().p("AryHPQAwp9HjmiQHkmiJ9AvQJ+AuGiHkMgkgAfiQminkAup+g");
	var mask_2_graphics_95 = new cjs.Graphics().p("ArnHpQAfp+HYmvQHYmvJ+AeQKAAdGuHZMgjpAgfQmunYAcp/g");
	var mask_2_graphics_96 = new cjs.Graphics().p("AraIEQAOp/HMm7QHMm8J+AMQKBAMG7HNMgiwAhdQm7nNALp/g");
	var mask_2_graphics_97 = new cjs.Graphics().p("ArLIfQgEp/HAnIQHAnIJ+gFQKBgFHHHAMgh1AiYQnHnAgGp/g");
	var mask_2_graphics_98 = new cjs.Graphics().p("Aq7I6QgWp/G0nTQGznUJ/gXQKAgWHTG0Mgg4AjSQnUm0gXp/g");
	var mask_2_graphics_99 = new cjs.Graphics().p("AqqJWQgmp+GmnfQGnngJ9goQJ/gnHgGnMgf7AkKQnfmngpp+g");
	var mask_2_graphics_100 = new cjs.Graphics().p("AqXJyQg3p9GZnqQGZnrJ9g5QJ9g5HrGaMge7AlBQnrmag6p9g");
	var mask_2_graphics_101 = new cjs.Graphics().p("AqCKOQhJp8GMn0QGMn2J6hKQJ8hKH2GMMgd6Al2Qn2mNhLp7g");
	var mask_2_graphics_102 = new cjs.Graphics().p("ApsKrQhap6F+n+QF+oBJ4hbQJ6hcIAF/Mgc4AmpQoAl/hcp5g");
	var mask_2_graphics_103 = new cjs.Graphics().p("ApVLIQhrp3FxoJQFwoKJ1htQJ3hsIKFwMgb1AnaQoJlxhup2g");
	var mask_2_graphics_104 = new cjs.Graphics().p("Ao8LlQh8pzFioTQFioUJyh+QJ0h+IUFjMgawAoJQoTljh/pzg");
	var mask_2_graphics_105 = new cjs.Graphics().p("AohMDQiOpwFUocQFUoeJuiOQJwiPIeFUMgZqAo2QodlUiPpvg");
	var mask_2_graphics_106 = new cjs.Graphics().p("AoFMhQifpsFFolQFGonJpifQJsigInFFMgYjApiQollFigprg");
	var mask_2_graphics_107 = new cjs.Graphics().p("AnoM/QivpoE2otQE2owJliwQJoiwIvE2MgXaAqLQouk2ixpmg");
	var mask_2_graphics_108 = new cjs.Graphics().p("AnKNdQi/pjEmo1QEno4JgjBQJjjAI3EmMgWQAqzQo2knjCphg");
	var mask_2_graphics_109 = new cjs.Graphics().p("AmqN7QjQpdEXo+QEYo/JajRQJejRI/EXMgVGArZQo+kYjSpcg");
	var mask_2_graphics_110 = new cjs.Graphics().p("AmJOaQjgpYEHpFQEIpGJVjhQJXjiJHEIMgT6Ar7QpGkHjipWg");
	var mask_2_graphics_111 = new cjs.Graphics().p("AlmO4QjxpRD4pMQD4pNJOjyQJRjxJOD4MgSuAsdQpMj4jypQg");
	var mask_2_graphics_112 = new cjs.Graphics().p("AlDPXQkApLDopSQDopUJHkBQJKkCJUDoMgRgAs9QpSjokDpJg");
	var mask_2_graphics_113 = new cjs.Graphics().p("AkeP1QkQpDDYpYQDXpaJBkRQJDkRJaDXMgQSAtaQpZjYkSpCg");
	var mask_2_graphics_114 = new cjs.Graphics().p("Aj3QUQkgo7DHpeQDHpgI5kgQI7khJgDHMgPDAt1QpfjIkgo6g");
	var mask_2_graphics_115 = new cjs.Graphics().p("AjQQzQkvozC2pjQC3pmIxkvQIzkxJlC3MgNzAuOQpki3kwoyg");
	var mask_2_graphics_116 = new cjs.Graphics().p("AinRSQk/orCmpoQCmpqIpk+QIrlAJpCmMgMiAulQpqimk+oqg");
	var mask_2_graphics_117 = new cjs.Graphics().p("Ah+RxQlNojCVpsQCWpuIflNQIilPJuCWMgLRAu5QpuiWlOogg");
	var mask_2_graphics_118 = new cjs.Graphics().p("AhTSPQlcoZCEpwQCFpxIWldQIZldJxCFMgJ/AvLQpyiElcoYg");
	var mask_2_graphics_119 = new cjs.Graphics().p("AgoSuQlqoPBzp0QB0p1INlqQIPlsJ0B0MgItAvbQp1hzlroOg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_2_graphics_9,x:214.2,y:185.2}).wait(1).to({graphics:mask_2_graphics_10,x:214.2,y:185.2}).wait(1).to({graphics:mask_2_graphics_11,x:214.2,y:185.1}).wait(1).to({graphics:mask_2_graphics_12,x:214.2,y:185}).wait(1).to({graphics:mask_2_graphics_13,x:214.2,y:184.9}).wait(1).to({graphics:mask_2_graphics_14,x:214.3,y:184.6}).wait(1).to({graphics:mask_2_graphics_15,x:214.3,y:184.4}).wait(1).to({graphics:mask_2_graphics_16,x:214.3,y:184}).wait(1).to({graphics:mask_2_graphics_17,x:214.3,y:183.7}).wait(1).to({graphics:mask_2_graphics_18,x:214.4,y:183.2}).wait(1).to({graphics:mask_2_graphics_19,x:214.4,y:182.7}).wait(1).to({graphics:mask_2_graphics_20,x:214.4,y:182.2}).wait(1).to({graphics:mask_2_graphics_21,x:214.4,y:181.6}).wait(1).to({graphics:mask_2_graphics_22,x:214.4,y:180.9}).wait(1).to({graphics:mask_2_graphics_23,x:214.4,y:180.2}).wait(1).to({graphics:mask_2_graphics_24,x:214.4,y:179.4}).wait(1).to({graphics:mask_2_graphics_25,x:214.4,y:178.6}).wait(1).to({graphics:mask_2_graphics_26,x:214.4,y:177.8}).wait(1).to({graphics:mask_2_graphics_27,x:214.4,y:176.8}).wait(1).to({graphics:mask_2_graphics_28,x:214.4,y:175.9}).wait(1).to({graphics:mask_2_graphics_29,x:214.4,y:174.9}).wait(1).to({graphics:mask_2_graphics_30,x:214.3,y:173.8}).wait(1).to({graphics:mask_2_graphics_31,x:214.3,y:172.7}).wait(1).to({graphics:mask_2_graphics_32,x:214.3,y:171.5}).wait(1).to({graphics:mask_2_graphics_33,x:214.3,y:170.3}).wait(1).to({graphics:mask_2_graphics_34,x:214.2,y:169}).wait(1).to({graphics:mask_2_graphics_35,x:214.2,y:167.7}).wait(1).to({graphics:mask_2_graphics_36,x:214.2,y:166.4}).wait(1).to({graphics:mask_2_graphics_37,x:214.2,y:165}).wait(1).to({graphics:mask_2_graphics_38,x:214.2,y:163.6}).wait(1).to({graphics:mask_2_graphics_39,x:214.2,y:162.1}).wait(1).to({graphics:mask_2_graphics_40,x:214.2,y:160.6}).wait(1).to({graphics:mask_2_graphics_41,x:214.2,y:159}).wait(1).to({graphics:mask_2_graphics_42,x:214.2,y:157.5}).wait(1).to({graphics:mask_2_graphics_43,x:214.2,y:155.8}).wait(1).to({graphics:mask_2_graphics_44,x:214.2,y:154.2}).wait(1).to({graphics:mask_2_graphics_45,x:214.3,y:152.5}).wait(1).to({graphics:mask_2_graphics_46,x:214.3,y:150.8}).wait(1).to({graphics:mask_2_graphics_47,x:214.3,y:149}).wait(1).to({graphics:mask_2_graphics_48,x:214.3,y:147.2}).wait(1).to({graphics:mask_2_graphics_49,x:214.4,y:145.4}).wait(1).to({graphics:mask_2_graphics_50,x:214.4,y:143.6}).wait(1).to({graphics:mask_2_graphics_51,x:214.4,y:141.7}).wait(1).to({graphics:mask_2_graphics_52,x:214.4,y:139.8}).wait(1).to({graphics:mask_2_graphics_53,x:214.4,y:137.9}).wait(1).to({graphics:mask_2_graphics_54,x:214.4,y:136}).wait(1).to({graphics:mask_2_graphics_55,x:214.4,y:134}).wait(1).to({graphics:mask_2_graphics_56,x:214.4,y:132}).wait(1).to({graphics:mask_2_graphics_57,x:214.4,y:130}).wait(1).to({graphics:mask_2_graphics_58,x:214.4,y:128}).wait(1).to({graphics:mask_2_graphics_59,x:214.3,y:126}).wait(1).to({graphics:mask_2_graphics_60,x:214.3,y:124}).wait(1).to({graphics:mask_2_graphics_61,x:214.3,y:121.9}).wait(1).to({graphics:mask_2_graphics_62,x:214.3,y:119.8}).wait(1).to({graphics:mask_2_graphics_63,x:214.2,y:117.8}).wait(1).to({graphics:mask_2_graphics_64,x:214.2,y:115.7}).wait(1).to({graphics:mask_2_graphics_65,x:214.2,y:113.6}).wait(1).to({graphics:mask_2_graphics_66,x:214.2,y:111.5}).wait(1).to({graphics:mask_2_graphics_67,x:214.2,y:109.4}).wait(1).to({graphics:mask_2_graphics_68,x:214.2,y:108.6}).wait(1).to({graphics:mask_2_graphics_69,x:214.1,y:110.7}).wait(1).to({graphics:mask_2_graphics_70,x:214,y:112.8}).wait(1).to({graphics:mask_2_graphics_71,x:213.9,y:114.9}).wait(1).to({graphics:mask_2_graphics_72,x:213.6,y:117}).wait(1).to({graphics:mask_2_graphics_73,x:213.4,y:119}).wait(1).to({graphics:mask_2_graphics_74,x:213,y:121.1}).wait(1).to({graphics:mask_2_graphics_75,x:212.7,y:123.2}).wait(1).to({graphics:mask_2_graphics_76,x:212.2,y:125.2}).wait(1).to({graphics:mask_2_graphics_77,x:211.7,y:127.2}).wait(1).to({graphics:mask_2_graphics_78,x:211.2,y:129.3}).wait(1).to({graphics:mask_2_graphics_79,x:210.6,y:131.3}).wait(1).to({graphics:mask_2_graphics_80,x:209.9,y:133.3}).wait(1).to({graphics:mask_2_graphics_81,x:209.2,y:135.2}).wait(1).to({graphics:mask_2_graphics_82,x:208.5,y:137.2}).wait(1).to({graphics:mask_2_graphics_83,x:207.6,y:139.1}).wait(1).to({graphics:mask_2_graphics_84,x:206.8,y:141}).wait(1).to({graphics:mask_2_graphics_85,x:205.9,y:142.9}).wait(1).to({graphics:mask_2_graphics_86,x:204.9,y:144.7}).wait(1).to({graphics:mask_2_graphics_87,x:203.9,y:146.6}).wait(1).to({graphics:mask_2_graphics_88,x:202.8,y:148.4}).wait(1).to({graphics:mask_2_graphics_89,x:201.7,y:150.1}).wait(1).to({graphics:mask_2_graphics_90,x:200.5,y:151.9}).wait(1).to({graphics:mask_2_graphics_91,x:199.3,y:153.6}).wait(1).to({graphics:mask_2_graphics_92,x:198.1,y:155.2}).wait(1).to({graphics:mask_2_graphics_93,x:196.8,y:156.9}).wait(1).to({graphics:mask_2_graphics_94,x:195.4,y:158.5}).wait(1).to({graphics:mask_2_graphics_95,x:194,y:160}).wait(1).to({graphics:mask_2_graphics_96,x:192.6,y:161.6}).wait(1).to({graphics:mask_2_graphics_97,x:191.1,y:163}).wait(1).to({graphics:mask_2_graphics_98,x:189.6,y:164.5}).wait(1).to({graphics:mask_2_graphics_99,x:188.1,y:165.9}).wait(1).to({graphics:mask_2_graphics_100,x:186.5,y:167.3}).wait(1).to({graphics:mask_2_graphics_101,x:184.9,y:168.6}).wait(1).to({graphics:mask_2_graphics_102,x:183.2,y:169.9}).wait(1).to({graphics:mask_2_graphics_103,x:181.5,y:171.1}).wait(1).to({graphics:mask_2_graphics_104,x:179.8,y:172.3}).wait(1).to({graphics:mask_2_graphics_105,x:178.1,y:173.4}).wait(1).to({graphics:mask_2_graphics_106,x:176.3,y:174.5}).wait(1).to({graphics:mask_2_graphics_107,x:174.5,y:175.5}).wait(1).to({graphics:mask_2_graphics_108,x:172.6,y:176.5}).wait(1).to({graphics:mask_2_graphics_109,x:170.8,y:177.5}).wait(1).to({graphics:mask_2_graphics_110,x:168.9,y:178.3}).wait(1).to({graphics:mask_2_graphics_111,x:167,y:179.2}).wait(1).to({graphics:mask_2_graphics_112,x:165,y:180}).wait(1).to({graphics:mask_2_graphics_113,x:163.1,y:180.7}).wait(1).to({graphics:mask_2_graphics_114,x:161.1,y:181.4}).wait(1).to({graphics:mask_2_graphics_115,x:159.1,y:182}).wait(1).to({graphics:mask_2_graphics_116,x:157.1,y:182.6}).wait(1).to({graphics:mask_2_graphics_117,x:155.1,y:183.1}).wait(1).to({graphics:mask_2_graphics_118,x:153,y:183.5}).wait(1).to({graphics:mask_2_graphics_119,x:150.9,y:183.9}).wait(330));

	// Layer 15
	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(25,1,1).p("AEgQGQkng8jjjgQk0kwAAmwQAAmtE0kxQExkvGwgCQADAAADAAQARAAARAB");
	this.shape_131.setTransform(223.2,201);
	this.shape_131._off = true;

	var maskedShapeInstanceList = [this.shape_131];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_131).wait(9).to({_off:false},0).wait(440));

	// Base
	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(272.5,289.8);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(449));

	// Background
	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_132.setTransform(275,275,3.373,2.543);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_133.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_133},{t:this.shape_132}]}).wait(449));

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