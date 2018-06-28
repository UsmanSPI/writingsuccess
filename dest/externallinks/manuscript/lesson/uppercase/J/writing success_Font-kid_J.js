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
	this.shape.graphics.f("#FFFFFF").s().p("A12bSQgkgoAAgqQAAiNCwAAQBSAAA3A7QC0DaE7AAQDyAACmiGQC4iXAAkJIALiiMAAAgnhIABAAIAAifIAAgCIAAiAIvnAAQi4AAAAiwQAAixC9AAMAjWAAAQC9AAAACxQAACwi7AAIuxAAIAACAIgBAAIAAACIAACfIABAAMAAAAmrIAFDeQAAFSkYD0QkWD2mEAAQnfAAkZlSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.4,-208.3,287,416.8);


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
	this.shape.graphics.f("#000000").s().p("AgegaQAfAPAegPIgfA1g");
	this.shape.setTransform(0,-7.2,3.557,4.089,0,0,0,0,-2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.9,-7,21.9,21.9);


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

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AALAAIgVAA");
	this.shape.setTransform(-85.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AgVAAIArAA");
	this.shape_1.setTransform(-84,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AgfAAIA/AA");
	this.shape_2.setTransform(-82.9,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AgqAAIBVAA");
	this.shape_3.setTransform(-81.8,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("Ag1AAIBrAA");
	this.shape_4.setTransform(-80.8,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AhAAAICBAA");
	this.shape_5.setTransform(-79.7,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AhKAAICVAA");
	this.shape_6.setTransform(-78.6,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AhVAAICrAA");
	this.shape_7.setTransform(-77.5,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AhgAAIDBAA");
	this.shape_8.setTransform(-76.5,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AhrAAIDXAA");
	this.shape_9.setTransform(-75.4,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("Ah1AAIDrAA");
	this.shape_10.setTransform(-74.3,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AiAAAIEBAA");
	this.shape_11.setTransform(-73.2,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AiLAAIEXAA");
	this.shape_12.setTransform(-72.2,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AiWAAIEsAA");
	this.shape_13.setTransform(-71.1,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AigAAIFBAA");
	this.shape_14.setTransform(-70,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AirAAIFXAA");
	this.shape_15.setTransform(-68.9,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("Ai2AAIFtAA");
	this.shape_16.setTransform(-67.9,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AjAAAIGCAA");
	this.shape_17.setTransform(-66.8,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AjLAAIGXAA");
	this.shape_18.setTransform(-65.7,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AjWAAIGtAA");
	this.shape_19.setTransform(-64.6,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AjhAAIHDAA");
	this.shape_20.setTransform(-63.6,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AjsAAIHZAA");
	this.shape_21.setTransform(-62.5,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("Aj2AAIHtAA");
	this.shape_22.setTransform(-61.4,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AkBAAIIDAA");
	this.shape_23.setTransform(-60.3,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AkMAAIIZAA");
	this.shape_24.setTransform(-59.2,0);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AkXAAIIvAA");
	this.shape_25.setTransform(-58.2,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AkiAAIJFAA");
	this.shape_26.setTransform(-57.1,0);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AksAAIJZAA");
	this.shape_27.setTransform(-56,0);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("Ak3AAIJvAA");
	this.shape_28.setTransform(-54.9,0);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AlCAAIKFAA");
	this.shape_29.setTransform(-53.9,0);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AlNAAIKbAA");
	this.shape_30.setTransform(-52.8,0);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AlXAAIKvAA");
	this.shape_31.setTransform(-51.7,0);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AliAAILFAA");
	this.shape_32.setTransform(-50.6,0);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AltAAILbAA");
	this.shape_33.setTransform(-49.6,0);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("Al4AAILxAA");
	this.shape_34.setTransform(-48.5,0);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AmCAAIMFAA");
	this.shape_35.setTransform(-47.4,0);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AmNAAIMbAA");
	this.shape_36.setTransform(-46.3,0);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AmYAAIMxAA");
	this.shape_37.setTransform(-45.3,0);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AmjAAINHAA");
	this.shape_38.setTransform(-44.2,0);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AmtAAINbAA");
	this.shape_39.setTransform(-43.1,0);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("Am4AAINxAA");
	this.shape_40.setTransform(-42,0);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AnDAAIOHAA");
	this.shape_41.setTransform(-41,0);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AnOAAIOdAA");
	this.shape_42.setTransform(-39.9,0);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AnYAAIOxAA");
	this.shape_43.setTransform(-38.8,0);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AnjAAIPHAA");
	this.shape_44.setTransform(-37.7,0);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AnuAAIPdAA");
	this.shape_45.setTransform(-36.7,0);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("An5AAIPzAA");
	this.shape_46.setTransform(-35.6,0);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AoDAAIQHAA");
	this.shape_47.setTransform(-34.5,0);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AoOAAIQdAA");
	this.shape_48.setTransform(-33.4,0);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AoZAAIQzAA");
	this.shape_49.setTransform(-32.4,0);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AokAAIRJAA");
	this.shape_50.setTransform(-31.3,0);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AouAAIRdAA");
	this.shape_51.setTransform(-30.2,0);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("Ao5AAIRzAA");
	this.shape_52.setTransform(-29.1,0);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("ApEAAISJAA");
	this.shape_53.setTransform(-28.1,0);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("ApPAAISfAA");
	this.shape_54.setTransform(-27,0);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("ApZAAISzAA");
	this.shape_55.setTransform(-25.9,0);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("ApkAAITJAA");
	this.shape_56.setTransform(-24.8,0);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("ApvAAITfAA");
	this.shape_57.setTransform(-23.8,0);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("Ap6AAIT1AA");
	this.shape_58.setTransform(-22.7,0);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AqEAAIUJAA");
	this.shape_59.setTransform(-21.6,0);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(5,1,1).p("AqPAAIUfAA");
	this.shape_60.setTransform(-20.5,0);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(5,1,1).p("AqaAAIU1AA");
	this.shape_61.setTransform(-19.5,0);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(5,1,1).p("AqlAAIVLAA");
	this.shape_62.setTransform(-18.4,0);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(5,1,1).p("AqvAAIVfAA");
	this.shape_63.setTransform(-17.3,0);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(5,1,1).p("Aq6AAIV1AA");
	this.shape_64.setTransform(-16.2,0);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(5,1,1).p("ArFAAIWLAA");
	this.shape_65.setTransform(-15.2,0);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(5,1,1).p("ArQAAIWhAA");
	this.shape_66.setTransform(-14.1,0);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(5,1,1).p("ArbAAIW3AA");
	this.shape_67.setTransform(-13,0);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(5,1,1).p("ArlAAIXLAA");
	this.shape_68.setTransform(-11.9,0);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(5,1,1).p("ArwAAIXhAA");
	this.shape_69.setTransform(-10.8,0);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(5,1,1).p("Ar7AAIX3AA");
	this.shape_70.setTransform(-9.8,0);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(5,1,1).p("AsGAAIYNAA");
	this.shape_71.setTransform(-8.7,0);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(5,1,1).p("AsQAAIYhAA");
	this.shape_72.setTransform(-7.6,0);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(5,1,1).p("AsbAAIY3AA");
	this.shape_73.setTransform(-6.5,0);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(5,1,1).p("AsmAAIZNAA");
	this.shape_74.setTransform(-5.5,0);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(5,1,1).p("AsxAAIZjAA");
	this.shape_75.setTransform(-4.4,0);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(5,1,1).p("As7AAIZ3AA");
	this.shape_76.setTransform(-3.3,0);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(5,1,1).p("AtGAAIaNAA");
	this.shape_77.setTransform(-2.2,0);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(5,1,1).p("AtRAAIajAA");
	this.shape_78.setTransform(-1.2,0);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(5,1,1).p("AtcAAIa5AA");
	this.shape_79.setTransform(-0.1,0);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(5,1,1).p("AtmAAIbNAA");
	this.shape_80.setTransform(1,0);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(5,1,1).p("AtxAAIbjAA");
	this.shape_81.setTransform(2.1,0);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(5,1,1).p("At8AAIb5AA");
	this.shape_82.setTransform(3.1,0);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(5,1,1).p("AuHAAIcPAA");
	this.shape_83.setTransform(4.2,0);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(5,1,1).p("AuRAAIcjAA");
	this.shape_84.setTransform(5.3,0);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(5,1,1).p("AucAAIc5AA");
	this.shape_85.setTransform(6.4,0);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(5,1,1).p("AunAAIdPAA");
	this.shape_86.setTransform(7.4,0);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(5,1,1).p("AuyAAIdlAA");
	this.shape_87.setTransform(8.5,0);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(5,1,1).p("Au8AAId5AA");
	this.shape_88.setTransform(9.6,0);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(5,1,1).p("APIAAI+PAA");
	this.shape_89.setTransform(10.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).wait(1));

	// Layer 1
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-88.9,0,1,1,-90,0,0,0.4,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:111.1},89).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.8,-12.1,21.8,24.3);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.ar_triangle("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(10.6,-64.5,1,1,0,0,0,0,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:134},109).to({regX:-0.1,scaleX:1,scaleY:1,rotation:-107.6,guide:{path:[10.7,134,10.7,135.7,10.7,137.3,10.7,138,10.7,138.8,10.7,139.1,10.7,139.5,11,162.4,27.3,178.6,43.7,195.1,67,195.1,76.4,195.1,84.6,192.5], orient:'auto'}},60).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_110 = new cjs.Graphics().p("AqZKxQgbkUCwjWQCxjVEVgbQETgaDWCvQDWCxAaEUIADAeI00CAIgDgeg");
	var mask_graphics_111 = new cjs.Graphics().p("AqWK8QgjkTCpjcQCqjaETgkQETgjDbCpQDcCqAjETIADAeI0vCqIgEgeg");
	var mask_graphics_112 = new cjs.Graphics().p("AqSLHQgskSCjjhQCjjgESgsQERgsDgCiQDhCjAsESIAEAeI0pDTIgFgdg");
	var mask_graphics_113 = new cjs.Graphics().p("AqNLRQg0kQCbjmQCcjlEQg0QEQg1DlCbQDmCbA1ERIAFAdI0iD+IgGgeg");
	var mask_graphics_114 = new cjs.Graphics().p("AqHLcQg9kPCUjrQCVjpEPg9QENg9DqCTQDrCUA9EPIAGAdI0ZEnIgHgdg");
	var mask_graphics_115 = new cjs.Graphics().p("AqALmQhFkMCMjwQCOjuEMhFQEMhGDvCNQDvCMBGEMIAHAeI0QFPIgIgdg");
	var mask_graphics_116 = new cjs.Graphics().p("Ap3LxQhOkLCEjzQCGjzEKhNQEJhOD0CFQDzCEBOEKIAIAdI0EF4IgIgcg");
	var mask_graphics_117 = new cjs.Graphics().p("ApuL7QhXkIB9j3QB+j4EIhVQEGhWD4B9QD4B9BWEHIAJAdIz4GgIgJgcg");
	var mask_graphics_118 = new cjs.Graphics().p("AplMFQhekEB1j8QB2j7EFheQEEheD7B1QD7B1BfEFIAKAcIzqHIIgLgcg");
	var mask_graphics_119 = new cjs.Graphics().p("ApaMQQhmkCBtj/QBuj/EBhmQEBhnD/BuQD/BtBnEBIAKAcIzaHwIgMgbg");
	var mask_graphics_120 = new cjs.Graphics().p("ApOMaQhvj/BlkCQBmkCD/huQD9hvECBmQECBkBvD/IAMAbIzKIXIgNgbg");
	var mask_graphics_121 = new cjs.Graphics().p("ApBMkQh3j7BdkFQBekGD6h1QD7h3EEBdQEGBdB2D6IANAbIy5I+IgNgbg");
	var mask_graphics_122 = new cjs.Graphics().p("Ao0MuQh+j3BUkIQBWkID3h+QD2h/EHBVQEJBVB+D2IAOAbIynJjIgOgag");
	var mask_graphics_123 = new cjs.Graphics().p("AolM3QiHjyBNkLQBNkLDyiFQDziGEJBMQELBNCHDyIAOAaIySKIIgPgag");
	var mask_graphics_124 = new cjs.Graphics().p("AoWNBQiOjuBEkNQBEkNDviNQDuiOEMBEQENBECODuIAPAaIx9KtIgQgag");
	var mask_graphics_125 = new cjs.Graphics().p("AoGNLQiVjqA7kPQA8kPDqiUQDqiWENA8QEQA7CVDpIAQAaIxnLRIgRgZg");
	var mask_graphics_126 = new cjs.Graphics().p("An1NUQicjlAykRQA0kQDlicQDlidEPAzQERAzCdDkIAQAZIxPL0IgSgYg");
	var mask_graphics_127 = new cjs.Graphics().p("AnjNdQikjgAqkSQArkSDgijQDgikERArQESAqCkDfIARAZIw3MWIgSgYg");
	var mask_graphics_128 = new cjs.Graphics().p("AnQNmQirjaAhkUQAikTDbiqQDbirESAiQETAiCrDZIASAYIweM4IgSgXg");
	var mask_graphics_129 = new cjs.Graphics().p("Am9NvQiyjVAZkUQAakVDViwQDViyETAZQEUAZCyDUIATAYIwDNZIgUgXg");
	var mask_graphics_130 = new cjs.Graphics().p("AmpN4Qi4jQAQkVQARkVDPi3QDQi4ETAQQEVARC5DPIATAWIvnN5IgVgWg");
	var mask_graphics_131 = new cjs.Graphics().p("AmUOAQi+jJAHkWQAIkVDJi+QDKi+EUAHQEVAIC/DJIAUAWIvLOXIgVgVg");
	var mask_graphics_132 = new cjs.Graphics().p("Al+OIQjFjDgBkWQgBkVDDjEQDEjFEUgBQEVgBDFDDIAVAWIutO1IgWgVg");
	var mask_graphics_133 = new cjs.Graphics().p("AlnOQQjLi9gLkVQgJkVC9jKQC9jLEUgKQEVgKDLC9IAWAVIuPPSIgWgUg");
	var mask_graphics_134 = new cjs.Graphics().p("AlQOYQjRi3gTkUQgSkVC2jQQC3jRETgSQEVgTDRC3IAXAUItwPuIgXgTg");
	var mask_graphics_135 = new cjs.Graphics().p("Ak4OgQjXiwgbkUQgbkUCwjWQCvjWETgcQEVgbDWCwIAXATItQQKIgXgSg");
	var mask_graphics_136 = new cjs.Graphics().p("AkgOnQjbipglkTQgjkTCpjbQCpjcERgkQEUgkDcCpIAXATIsuQkIgZgSg");
	var mask_graphics_137 = new cjs.Graphics().p("AkGOuQjhiigtkSQgtkSCijhQCijgERgsQESgtDhCiIAYASIsNQ9IgYgRg");
	var mask_graphics_138 = new cjs.Graphics().p("AjsO1Qjnibg1kQQg1kQCbjnQCbjlEOg1QERg1DmCbIAZARIrqRVIgZgQg");
	var mask_graphics_139 = new cjs.Graphics().p("AjSO7QjriTg+kOQg+kPCUjrQCTjqEOg9QEOg+DrCTIAZAQIrGRtIgagQg");
	var mask_graphics_140 = new cjs.Graphics().p("Ai3PCQjwiMhGkNQhGkMCMjvQCMjvEMhGQELhGDwCMIAZAPIqiSCIgagOg");
	var mask_graphics_141 = new cjs.Graphics().p("AicPIQjziFhPkKQhPkKCFjzQCEjzEKhPQEJhPD0CFIAaAPIp+SWIgbgNg");
	var mask_graphics_142 = new cjs.Graphics().p("AiAPNQj4h8hXkIQhXkHB9j4QB9j2EHhXQEGhYD4B9IAbAOIpZSqIgbgNg");
	var mask_graphics_143 = new cjs.Graphics().p("AhjPTQj8h1hgkEQhfkFB1j7QB1j7EEhfQEEhgD7B1IAbANIoyS9IgbgMg");
	var mask_graphics_144 = new cjs.Graphics().p("AhHPYQj/hthokBQhnkBBtkAQBtj+EBhnQEAhoD/BtIAcAMIoMTOIgcgLg");
	var mask_graphics_145 = new cjs.Graphics().p("AgqPdQkChlhwj+Qhvj+BlkCQBkkBD+hwQD9hwECBlIAcALInkTeIgdgKg");
	var mask_graphics_146 = new cjs.Graphics().p("AgMPhQkGhch3j6Qh4j7BdkFQBckED6h4QD6h4EFBdIAcAKIm+TtIgbgKg");
	var mask_graphics_147 = new cjs.Graphics().p("AARPmQkHhViAj2Qh/j2BUkIQBUkID2h/QD2h/EIBUIAdAJImXT6IgcgIg");
	var mask_graphics_148 = new cjs.Graphics().p("AAvPqQkKhMiHjyQiHjzBMkKQBMkKDyiHQDxiHELBMIAcAIIltUGIgdgHg");
	var mask_graphics_149 = new cjs.Graphics().p("ABNPtQkMhDiPjuQiOjuBDkNQBEkMDtiOQDtiPENBDIAdAIIlFURIgdgHg");
	var mask_graphics_150 = new cjs.Graphics().p("ABsPxQkOg7iXjpQiVjqA7kPQA6kODpiWQDpiWEPA7IAdAHIkcUaIgdgFg");
	var mask_graphics_151 = new cjs.Graphics().p("ACLP0QkQgziejkQidjkAzkRQAykQDkidQDkidEQAyIAeAGIjzUiIgdgEg");
	var mask_graphics_152 = new cjs.Graphics().p("ACqP2QkSgpikjgQikjfApkSQAqkRDfikQDeilETAqIAdAEIjJUqIgdgEg");
	var mask_graphics_153 = new cjs.Graphics().p("ADJP5QkTghirjaQirjaAhkUQAhkSDZirQDaisETAhIAeAEIifUwIgegDg");
	var mask_graphics_154 = new cjs.Graphics().p("ADoP7QkTgZizjUQixjVAYkUQAYkUDUixQDUiyEUAYIAeADIh1U0IgegCg");
	var mask_graphics_155 = new cjs.Graphics().p("AEIP8QkUgPi5jPQi5jPAQkVQAPkUDPi4QDOi5EVAQIAdACIhLU2IgdgBg");
	var mask_graphics_156 = new cjs.Graphics().p("AEnP+QkVgHi/jJQi+jJAGkVQAHkVDJi+QDIjAEVAHIAeABIghU5IgIAAIgWAAg");
	var mask_graphics_157 = new cjs.Graphics().p("AiYM+QjFjDgCkVQgCkWDDjEQDBjFEWgCIAeAAIAJU5IgeAAIgFAAQkSAAjDjAg");
	var mask_graphics_158 = new cjs.Graphics().p("AiTNNQjLi9gLkVQgLkVC8jKQC8jMEVgKIAegBIA0U4IgeABIgeABQkCAAjAiyg");
	var mask_graphics_159 = new cjs.Graphics().p("AiONbQjRi2gTkUQgUkVC2jQQC2jSEUgTIAegCIBdU2IgeACQgaACgaAAQj0AAi9ikg");
	var mask_graphics_160 = new cjs.Graphics().p("AiINpQjXivgckUQgckUCvjVQCvjYETgcIAegCICIUxIgeAEQgmAEglAAQjnAAi4iXg");
	var mask_graphics_161 = new cjs.Graphics().p("AiCN3QjcipglkTQgkkSCojcQCojcESglIAegDICxUsIgdAFQgyAGgvAAQjaAAi0iJg");
	var mask_graphics_162 = new cjs.Graphics().p("Ah7OEQjhiigukRQgtkSChjgQChjiERgtIAdgFIDcUnIgeAFQg8AKg6AAQjNAAivh9g");
	var mask_graphics_163 = new cjs.Graphics().p("Ah0OQQjmiag2kQQg2kQCajlQCajnEPg2IAdgGIEFUfIgdAHQhHAOhEAAQjBAAiqhyg");
	var mask_graphics_164 = new cjs.Graphics().p("AhsOcQjriTg/kOQg+kOCSjrQCTjrENg/IAdgGIEuUWIgdAHQhQAThOAAQi2AAikhmg");
	var mask_graphics_165 = new cjs.Graphics().p("AhkOnQjwiMhHkMQhHkMCLjvQCMjvELhHIAdgHIFXUMIgdAIQhbAYhXAAQirAAiehcg");
	var mask_graphics_166 = new cjs.Graphics().p("AhcOyQjziEhQkKQhPkJCDj0QCEjzEIhQIAdgIIGAUAIgdAJQhkAehhAAQigAAiYhRg");
	var mask_graphics_167 = new cjs.Graphics().p("AhTO8Qj3h9hYkGQhYkHB8j4QB8j3EFhYIAdgJIGoTzIgdAKQhtAlhqAAQiXAAiQhIg");
	var mask_graphics_168 = new cjs.Graphics().p("AhJPFQj8h0hgkEQhgkEB0j8QB0j7EEhgIAbgKIHQTmIgcALQh2Arh1AAQiMAAiIg/g");
	var mask_graphics_169 = new cjs.Graphics().p("AhAPOQj/hshokBQhokBBsj/QBsj/EBhoIAbgLIH2TXIgbALQh/A0h+AAQiCAAiBg3g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(110).to({graphics:mask_graphics_110,x:66,y:71.9}).wait(1).to({graphics:mask_graphics_111,x:65.8,y:73}).wait(1).to({graphics:mask_graphics_112,x:65.6,y:74}).wait(1).to({graphics:mask_graphics_113,x:65.4,y:75.1}).wait(1).to({graphics:mask_graphics_114,x:65.1,y:76.1}).wait(1).to({graphics:mask_graphics_115,x:64.8,y:77.1}).wait(1).to({graphics:mask_graphics_116,x:64.5,y:78.1}).wait(1).to({graphics:mask_graphics_117,x:64.1,y:79.1}).wait(1).to({graphics:mask_graphics_118,x:63.7,y:80.1}).wait(1).to({graphics:mask_graphics_119,x:63.3,y:81.1}).wait(1).to({graphics:mask_graphics_120,x:62.8,y:82.1}).wait(1).to({graphics:mask_graphics_121,x:62.3,y:83.1}).wait(1).to({graphics:mask_graphics_122,x:61.8,y:84}).wait(1).to({graphics:mask_graphics_123,x:61.3,y:84.9}).wait(1).to({graphics:mask_graphics_124,x:60.8,y:85.9}).wait(1).to({graphics:mask_graphics_125,x:60.2,y:86.8}).wait(1).to({graphics:mask_graphics_126,x:59.6,y:87.6}).wait(1).to({graphics:mask_graphics_127,x:58.9,y:88.5}).wait(1).to({graphics:mask_graphics_128,x:58.3,y:89.3}).wait(1).to({graphics:mask_graphics_129,x:57.6,y:90.2}).wait(1).to({graphics:mask_graphics_130,x:56.9,y:91}).wait(1).to({graphics:mask_graphics_131,x:56.1,y:91.7}).wait(1).to({graphics:mask_graphics_132,x:55.4,y:92.5}).wait(1).to({graphics:mask_graphics_133,x:54.6,y:93.2}).wait(1).to({graphics:mask_graphics_134,x:53.7,y:93.9}).wait(1).to({graphics:mask_graphics_135,x:52.9,y:94.6}).wait(1).to({graphics:mask_graphics_136,x:52,y:95.3}).wait(1).to({graphics:mask_graphics_137,x:51.2,y:95.9}).wait(1).to({graphics:mask_graphics_138,x:50.3,y:96.5}).wait(1).to({graphics:mask_graphics_139,x:49.3,y:97.1}).wait(1).to({graphics:mask_graphics_140,x:48.4,y:97.6}).wait(1).to({graphics:mask_graphics_141,x:47.5,y:98.1}).wait(1).to({graphics:mask_graphics_142,x:46.5,y:98.6}).wait(1).to({graphics:mask_graphics_143,x:45.5,y:99.1}).wait(1).to({graphics:mask_graphics_144,x:44.5,y:99.5}).wait(1).to({graphics:mask_graphics_145,x:43.6,y:99.9}).wait(1).to({graphics:mask_graphics_146,x:42.6,y:100.3}).wait(1).to({graphics:mask_graphics_147,x:41.5,y:100.6}).wait(1).to({graphics:mask_graphics_148,x:40.5,y:100.9}).wait(1).to({graphics:mask_graphics_149,x:39.5,y:101.2}).wait(1).to({graphics:mask_graphics_150,x:38.5,y:101.4}).wait(1).to({graphics:mask_graphics_151,x:37.5,y:101.6}).wait(1).to({graphics:mask_graphics_152,x:36.4,y:101.8}).wait(1).to({graphics:mask_graphics_153,x:35.4,y:102}).wait(1).to({graphics:mask_graphics_154,x:34.4,y:102.1}).wait(1).to({graphics:mask_graphics_155,x:33.3,y:102.1}).wait(1).to({graphics:mask_graphics_156,x:32.3,y:102.2}).wait(1).to({graphics:mask_graphics_157,x:31.7,y:102.2}).wait(1).to({graphics:mask_graphics_158,x:32.7,y:102.3}).wait(1).to({graphics:mask_graphics_159,x:33.8,y:102.3}).wait(1).to({graphics:mask_graphics_160,x:34.8,y:102.4}).wait(1).to({graphics:mask_graphics_161,x:35.9,y:102.4}).wait(1).to({graphics:mask_graphics_162,x:36.9,y:102.5}).wait(1).to({graphics:mask_graphics_163,x:38,y:102.6}).wait(1).to({graphics:mask_graphics_164,x:39,y:102.6}).wait(1).to({graphics:mask_graphics_165,x:40,y:102.7}).wait(1).to({graphics:mask_graphics_166,x:41,y:102.7}).wait(1).to({graphics:mask_graphics_167,x:42.1,y:102.8}).wait(1).to({graphics:mask_graphics_168,x:43.1,y:102.8}).wait(1).to({graphics:mask_graphics_169,x:44,y:102.9}).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("Aozz5IAAexQAAAHAAAIQAAADAAAEQADDlCjCiQClClDoAAQDqAAClilQClilAAjp");
	this.shape.setTransform(67,67.7);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(110).to({_off:false},0).wait(60));

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AiFiSIAAjqIELAAIAADqg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AiFB/IAAj8IELAAIAAD8g");
	var mask_1_graphics_2 = new cjs.Graphics().p("AiFCIIAAkPIELAAIAAEPg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AiFCRIAAkhIELAAIAAEhg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AiFCaIAAkzIELAAIAAEzg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AiFCjIAAlFIELAAIAAFFg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AiFCtIAAlZIELAAIAAFZg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AiFC2IAAlrIELAAIAAFrg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AiFC/IAAl9IELAAIAAF9g");
	var mask_1_graphics_9 = new cjs.Graphics().p("AiFDIIAAmPIELAAIAAGPg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AiFDSIAAmjIELAAIAAGjg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AiFDbIAAm1IELAAIAAG1g");
	var mask_1_graphics_12 = new cjs.Graphics().p("AiFDkIAAnHIELAAIAAHHg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AiFDuIAAnaIELAAIAAHag");
	var mask_1_graphics_14 = new cjs.Graphics().p("AiFD3IAAntIELAAIAAHtg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AiFEAIAAn/IELAAIAAH/g");
	var mask_1_graphics_16 = new cjs.Graphics().p("AiFEJIAAoRIELAAIAAIRg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AiFETIAAokIELAAIAAIkg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AiFEcIAAo3IELAAIAAI3g");
	var mask_1_graphics_19 = new cjs.Graphics().p("AiFElIAApJIELAAIAAJJg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AiFEuIAApbIELAAIAAJbg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AiFE3IAAptIELAAIAAJtg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AiFFBIAAqBIELAAIAAKBg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AiFFKIAAqTIELAAIAAKTg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AiFFTIAAqlIELAAIAAKlg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AiFFcIAAq3IELAAIAAK3g");
	var mask_1_graphics_26 = new cjs.Graphics().p("AiFFlIAArJIELAAIAALJg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AiFFvIAArdIELAAIAALdg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AiFF4IAArvIELAAIAALvg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AiFGBIAAsBIELAAIAAMBg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AiFGKIAAsTIELAAIAAMTg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AiFGUIAAsnIELAAIAAMng");
	var mask_1_graphics_32 = new cjs.Graphics().p("AiFGdIAAs5IELAAIAAM5g");
	var mask_1_graphics_33 = new cjs.Graphics().p("AiFGmIAAtLIELAAIAANLg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AiFGwIAAteIELAAIAANeg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AiFG5IAAtxIELAAIAANxg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AiFHCIAAuDIELAAIAAODg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AiFHLIAAuVIELAAIAAOVg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AiFHVIAAuoIELAAIAAOog");
	var mask_1_graphics_39 = new cjs.Graphics().p("AiFHeIAAu7IELAAIAAO7g");
	var mask_1_graphics_40 = new cjs.Graphics().p("AiFHnIAAvNIELAAIAAPNg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AiFHwIAAvfIELAAIAAPfg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AiFH5IAAvxIELAAIAAPxg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AiFIDIAAwFIELAAIAAQFg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AiFIMIAAwXIELAAIAAQXg");
	var mask_1_graphics_45 = new cjs.Graphics().p("AiFIVIAAwpIELAAIAAQpg");
	var mask_1_graphics_46 = new cjs.Graphics().p("AiFIeIAAw7IELAAIAAQ7g");
	var mask_1_graphics_47 = new cjs.Graphics().p("AiFIoIAAxPIELAAIAARPg");
	var mask_1_graphics_48 = new cjs.Graphics().p("AiFIxIAAxhIELAAIAARhg");
	var mask_1_graphics_49 = new cjs.Graphics().p("AiFI6IAAxzIELAAIAARzg");
	var mask_1_graphics_50 = new cjs.Graphics().p("AiFJEIAAyGIELAAIAASGg");
	var mask_1_graphics_51 = new cjs.Graphics().p("AiFJNIAAyZIELAAIAASZg");
	var mask_1_graphics_52 = new cjs.Graphics().p("AiFJWIAAyrIELAAIAASrg");
	var mask_1_graphics_53 = new cjs.Graphics().p("AiFJfIAAy9IELAAIAAS9g");
	var mask_1_graphics_54 = new cjs.Graphics().p("AiFJpIAAzQIELAAIAATQg");
	var mask_1_graphics_55 = new cjs.Graphics().p("AiFJyIAAzjIELAAIAATjg");
	var mask_1_graphics_56 = new cjs.Graphics().p("AiFJ7IAAz1IELAAIAAT1g");
	var mask_1_graphics_57 = new cjs.Graphics().p("AiFKEIAA0IIELAAIAAUIg");
	var mask_1_graphics_58 = new cjs.Graphics().p("AiFKOIAA0bIELAAIAAUbg");
	var mask_1_graphics_59 = new cjs.Graphics().p("AiFKXIAA0tIELAAIAAUtg");
	var mask_1_graphics_60 = new cjs.Graphics().p("AiFKgIAA0/IELAAIAAU/g");
	var mask_1_graphics_61 = new cjs.Graphics().p("AiFKqIAA1TIELAAIAAVTg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AiFKzIAA1lIELAAIAAVlg");
	var mask_1_graphics_63 = new cjs.Graphics().p("AiFK8IAA13IELAAIAAV3g");
	var mask_1_graphics_64 = new cjs.Graphics().p("AiFLFIAA2JIELAAIAAWJg");
	var mask_1_graphics_65 = new cjs.Graphics().p("AiFLPIAA2dIELAAIAAWdg");
	var mask_1_graphics_66 = new cjs.Graphics().p("AiFLYIAA2vIELAAIAAWvg");
	var mask_1_graphics_67 = new cjs.Graphics().p("AiFLhIAA3BIELAAIAAXBg");
	var mask_1_graphics_68 = new cjs.Graphics().p("AiFLqIAA3TIELAAIAAXTg");
	var mask_1_graphics_69 = new cjs.Graphics().p("AiFLzIAA3mIELAAIAAXmg");
	var mask_1_graphics_70 = new cjs.Graphics().p("AiFL9IAA35IELAAIAAX5g");
	var mask_1_graphics_71 = new cjs.Graphics().p("AiFMGIAA4LIELAAIAAYLg");
	var mask_1_graphics_72 = new cjs.Graphics().p("AiFMPIAA4dIELAAIAAYdg");
	var mask_1_graphics_73 = new cjs.Graphics().p("AiFMYIAA4wIELAAIAAYwg");
	var mask_1_graphics_74 = new cjs.Graphics().p("AiFMiIAA5DIELAAIAAZDg");
	var mask_1_graphics_75 = new cjs.Graphics().p("AiFMrIAA5VIELAAIAAZVg");
	var mask_1_graphics_76 = new cjs.Graphics().p("AiFM0IAA5nIELAAIAAZng");
	var mask_1_graphics_77 = new cjs.Graphics().p("AiFM+IAA57IELAAIAAZ7g");
	var mask_1_graphics_78 = new cjs.Graphics().p("AiFNHIAA6NIELAAIAAaNg");
	var mask_1_graphics_79 = new cjs.Graphics().p("AiFNQIAA6fIELAAIAAafg");
	var mask_1_graphics_80 = new cjs.Graphics().p("AiFNZIAA6xIELAAIAAaxg");
	var mask_1_graphics_81 = new cjs.Graphics().p("AiFNjIAA7FIELAAIAAbFg");
	var mask_1_graphics_82 = new cjs.Graphics().p("AiFNsIAA7XIELAAIAAbXg");
	var mask_1_graphics_83 = new cjs.Graphics().p("AiFN1IAA7pIELAAIAAbpg");
	var mask_1_graphics_84 = new cjs.Graphics().p("AiFN+IAA77IELAAIAAb7g");
	var mask_1_graphics_85 = new cjs.Graphics().p("AiFOHIAA8NIELAAIAAcNg");
	var mask_1_graphics_86 = new cjs.Graphics().p("AiFOQIAA8gIELAAIAAcgg");
	var mask_1_graphics_87 = new cjs.Graphics().p("AiFOaIAA8zIELAAIAAczg");
	var mask_1_graphics_88 = new cjs.Graphics().p("AiFOjIAA9FIELAAIAAdFg");
	var mask_1_graphics_89 = new cjs.Graphics().p("AiFOsIAA9XIELAAIAAdXg");
	var mask_1_graphics_90 = new cjs.Graphics().p("AiFO1IAA9qIELAAIAAdqg");
	var mask_1_graphics_91 = new cjs.Graphics().p("AiFO/IAA99IELAAIAAd9g");
	var mask_1_graphics_92 = new cjs.Graphics().p("AiFPIIAA+PIELAAIAAePg");
	var mask_1_graphics_93 = new cjs.Graphics().p("AiFPRIAA+hIELAAIAAehg");
	var mask_1_graphics_94 = new cjs.Graphics().p("AiFPaIAA+0IELAAIAAe0g");
	var mask_1_graphics_95 = new cjs.Graphics().p("AiFPkIAA/HIELAAIAAfHg");
	var mask_1_graphics_96 = new cjs.Graphics().p("AiFPtIAA/ZIELAAIAAfZg");
	var mask_1_graphics_97 = new cjs.Graphics().p("AiFP2IAA/rIELAAIAAfrg");
	var mask_1_graphics_98 = new cjs.Graphics().p("AiFQAIAA//IELAAIAAf/g");
	var mask_1_graphics_99 = new cjs.Graphics().p("AiFQJMAAAggRIELAAMAAAAgRg");
	var mask_1_graphics_100 = new cjs.Graphics().p("AiFQSMAAAggjIELAAMAAAAgjg");
	var mask_1_graphics_101 = new cjs.Graphics().p("AiFQbMAAAgg1IELAAMAAAAg1g");
	var mask_1_graphics_102 = new cjs.Graphics().p("AiFQlMAAAghJIELAAMAAAAhJg");
	var mask_1_graphics_103 = new cjs.Graphics().p("AiFQuMAAAghbIELAAMAAAAhbg");
	var mask_1_graphics_104 = new cjs.Graphics().p("AiFQ3MAAAghtIELAAMAAAAhtg");
	var mask_1_graphics_105 = new cjs.Graphics().p("AiFRAMAAAgh/IELAAMAAAAh/g");
	var mask_1_graphics_106 = new cjs.Graphics().p("AiFRJMAAAgiSIELAAMAAAAiSg");
	var mask_1_graphics_107 = new cjs.Graphics().p("AiFRTMAAAgilIELAAMAAAAilg");
	var mask_1_graphics_108 = new cjs.Graphics().p("AiFRcMAAAgi3IELAAMAAAAi3g");
	var mask_1_graphics_109 = new cjs.Graphics().p("AiFRlMAAAgjJIELAAMAAAAjJg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:10.6,y:-38.1}).wait(1).to({graphics:mask_1_graphics_1,x:10.6,y:-63.6}).wait(1).to({graphics:mask_1_graphics_2,x:10.6,y:-62.7}).wait(1).to({graphics:mask_1_graphics_3,x:10.6,y:-61.7}).wait(1).to({graphics:mask_1_graphics_4,x:10.6,y:-60.8}).wait(1).to({graphics:mask_1_graphics_5,x:10.6,y:-59.9}).wait(1).to({graphics:mask_1_graphics_6,x:10.6,y:-59}).wait(1).to({graphics:mask_1_graphics_7,x:10.6,y:-58}).wait(1).to({graphics:mask_1_graphics_8,x:10.6,y:-57.1}).wait(1).to({graphics:mask_1_graphics_9,x:10.6,y:-56.2}).wait(1).to({graphics:mask_1_graphics_10,x:10.6,y:-55.3}).wait(1).to({graphics:mask_1_graphics_11,x:10.6,y:-54.3}).wait(1).to({graphics:mask_1_graphics_12,x:10.6,y:-53.4}).wait(1).to({graphics:mask_1_graphics_13,x:10.6,y:-52.5}).wait(1).to({graphics:mask_1_graphics_14,x:10.6,y:-51.6}).wait(1).to({graphics:mask_1_graphics_15,x:10.6,y:-50.6}).wait(1).to({graphics:mask_1_graphics_16,x:10.6,y:-49.7}).wait(1).to({graphics:mask_1_graphics_17,x:10.6,y:-48.8}).wait(1).to({graphics:mask_1_graphics_18,x:10.6,y:-47.9}).wait(1).to({graphics:mask_1_graphics_19,x:10.6,y:-46.9}).wait(1).to({graphics:mask_1_graphics_20,x:10.6,y:-46}).wait(1).to({graphics:mask_1_graphics_21,x:10.6,y:-45.1}).wait(1).to({graphics:mask_1_graphics_22,x:10.6,y:-44.2}).wait(1).to({graphics:mask_1_graphics_23,x:10.6,y:-43.2}).wait(1).to({graphics:mask_1_graphics_24,x:10.6,y:-42.3}).wait(1).to({graphics:mask_1_graphics_25,x:10.6,y:-41.4}).wait(1).to({graphics:mask_1_graphics_26,x:10.6,y:-40.5}).wait(1).to({graphics:mask_1_graphics_27,x:10.6,y:-39.5}).wait(1).to({graphics:mask_1_graphics_28,x:10.6,y:-38.6}).wait(1).to({graphics:mask_1_graphics_29,x:10.6,y:-37.7}).wait(1).to({graphics:mask_1_graphics_30,x:10.6,y:-36.8}).wait(1).to({graphics:mask_1_graphics_31,x:10.6,y:-35.9}).wait(1).to({graphics:mask_1_graphics_32,x:10.6,y:-34.9}).wait(1).to({graphics:mask_1_graphics_33,x:10.6,y:-34}).wait(1).to({graphics:mask_1_graphics_34,x:10.6,y:-33.1}).wait(1).to({graphics:mask_1_graphics_35,x:10.6,y:-32.2}).wait(1).to({graphics:mask_1_graphics_36,x:10.6,y:-31.2}).wait(1).to({graphics:mask_1_graphics_37,x:10.6,y:-30.3}).wait(1).to({graphics:mask_1_graphics_38,x:10.6,y:-29.4}).wait(1).to({graphics:mask_1_graphics_39,x:10.6,y:-28.5}).wait(1).to({graphics:mask_1_graphics_40,x:10.6,y:-27.5}).wait(1).to({graphics:mask_1_graphics_41,x:10.6,y:-26.6}).wait(1).to({graphics:mask_1_graphics_42,x:10.6,y:-25.7}).wait(1).to({graphics:mask_1_graphics_43,x:10.6,y:-24.8}).wait(1).to({graphics:mask_1_graphics_44,x:10.6,y:-23.8}).wait(1).to({graphics:mask_1_graphics_45,x:10.6,y:-22.9}).wait(1).to({graphics:mask_1_graphics_46,x:10.6,y:-22}).wait(1).to({graphics:mask_1_graphics_47,x:10.6,y:-21.1}).wait(1).to({graphics:mask_1_graphics_48,x:10.6,y:-20.1}).wait(1).to({graphics:mask_1_graphics_49,x:10.6,y:-19.2}).wait(1).to({graphics:mask_1_graphics_50,x:10.6,y:-18.3}).wait(1).to({graphics:mask_1_graphics_51,x:10.6,y:-17.4}).wait(1).to({graphics:mask_1_graphics_52,x:10.6,y:-16.4}).wait(1).to({graphics:mask_1_graphics_53,x:10.6,y:-15.5}).wait(1).to({graphics:mask_1_graphics_54,x:10.6,y:-14.6}).wait(1).to({graphics:mask_1_graphics_55,x:10.6,y:-13.7}).wait(1).to({graphics:mask_1_graphics_56,x:10.6,y:-12.8}).wait(1).to({graphics:mask_1_graphics_57,x:10.6,y:-11.8}).wait(1).to({graphics:mask_1_graphics_58,x:10.6,y:-10.9}).wait(1).to({graphics:mask_1_graphics_59,x:10.6,y:-10}).wait(1).to({graphics:mask_1_graphics_60,x:10.6,y:-9.1}).wait(1).to({graphics:mask_1_graphics_61,x:10.6,y:-8.1}).wait(1).to({graphics:mask_1_graphics_62,x:10.6,y:-7.2}).wait(1).to({graphics:mask_1_graphics_63,x:10.6,y:-6.3}).wait(1).to({graphics:mask_1_graphics_64,x:10.6,y:-5.4}).wait(1).to({graphics:mask_1_graphics_65,x:10.6,y:-4.4}).wait(1).to({graphics:mask_1_graphics_66,x:10.6,y:-3.5}).wait(1).to({graphics:mask_1_graphics_67,x:10.6,y:-2.6}).wait(1).to({graphics:mask_1_graphics_68,x:10.6,y:-1.7}).wait(1).to({graphics:mask_1_graphics_69,x:10.6,y:-0.7}).wait(1).to({graphics:mask_1_graphics_70,x:10.6,y:0.2}).wait(1).to({graphics:mask_1_graphics_71,x:10.6,y:1.1}).wait(1).to({graphics:mask_1_graphics_72,x:10.6,y:2}).wait(1).to({graphics:mask_1_graphics_73,x:10.6,y:3}).wait(1).to({graphics:mask_1_graphics_74,x:10.6,y:3.9}).wait(1).to({graphics:mask_1_graphics_75,x:10.6,y:4.8}).wait(1).to({graphics:mask_1_graphics_76,x:10.6,y:5.7}).wait(1).to({graphics:mask_1_graphics_77,x:10.6,y:6.7}).wait(1).to({graphics:mask_1_graphics_78,x:10.6,y:7.6}).wait(1).to({graphics:mask_1_graphics_79,x:10.6,y:8.5}).wait(1).to({graphics:mask_1_graphics_80,x:10.6,y:9.4}).wait(1).to({graphics:mask_1_graphics_81,x:10.6,y:10.4}).wait(1).to({graphics:mask_1_graphics_82,x:10.6,y:11.3}).wait(1).to({graphics:mask_1_graphics_83,x:10.6,y:12.2}).wait(1).to({graphics:mask_1_graphics_84,x:10.6,y:13.1}).wait(1).to({graphics:mask_1_graphics_85,x:10.6,y:14}).wait(1).to({graphics:mask_1_graphics_86,x:10.6,y:15}).wait(1).to({graphics:mask_1_graphics_87,x:10.6,y:15.9}).wait(1).to({graphics:mask_1_graphics_88,x:10.6,y:16.8}).wait(1).to({graphics:mask_1_graphics_89,x:10.6,y:17.7}).wait(1).to({graphics:mask_1_graphics_90,x:10.6,y:18.7}).wait(1).to({graphics:mask_1_graphics_91,x:10.6,y:19.6}).wait(1).to({graphics:mask_1_graphics_92,x:10.6,y:20.5}).wait(1).to({graphics:mask_1_graphics_93,x:10.6,y:21.4}).wait(1).to({graphics:mask_1_graphics_94,x:10.6,y:22.4}).wait(1).to({graphics:mask_1_graphics_95,x:10.6,y:23.3}).wait(1).to({graphics:mask_1_graphics_96,x:10.6,y:24.2}).wait(1).to({graphics:mask_1_graphics_97,x:10.6,y:25.1}).wait(1).to({graphics:mask_1_graphics_98,x:10.6,y:26.1}).wait(1).to({graphics:mask_1_graphics_99,x:10.6,y:27}).wait(1).to({graphics:mask_1_graphics_100,x:10.6,y:27.9}).wait(1).to({graphics:mask_1_graphics_101,x:10.6,y:28.8}).wait(1).to({graphics:mask_1_graphics_102,x:10.6,y:29.8}).wait(1).to({graphics:mask_1_graphics_103,x:10.6,y:30.7}).wait(1).to({graphics:mask_1_graphics_104,x:10.6,y:31.6}).wait(1).to({graphics:mask_1_graphics_105,x:10.6,y:32.5}).wait(1).to({graphics:mask_1_graphics_106,x:10.6,y:33.5}).wait(1).to({graphics:mask_1_graphics_107,x:10.6,y:34.4}).wait(1).to({graphics:mask_1_graphics_108,x:10.6,y:35.3}).wait(1).to({graphics:mask_1_graphics_109,x:10.6,y:36.2}).wait(61));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AAAv0IAAexQAAAHAAAIQAAADAAAEQAAANABAOQAAADAAAE");
	this.shape_1.setTransform(10.7,41.6);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(170));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,-64.6,21.9,21.8);


(lib.honeyflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.honeybee();
	this.instance.parent = this;
	this.instance.setTransform(38.4,-170.9,0.422,0.422,0,0,0,-0.1,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIB9IgPgCIgPgEIgOgGIgFgDIgDgBIgDgCIgCgBIgCgCIgDgBIgCgCIgCgBIgCgCIgCgCIgCgBIgCgCIgCgBIgBgCIgDgCIgBgBIgCgCIgBgCIgBgBIgCgCIgCgCIgBgBIgBgCIgCgCIAAgCIgCgBIgBgCIAAgCIgCgCIgBgBIgBgCIgBgCIgBgCIAAgBIgBgCIgBgCIgBgCIAAgBIgCgCIgBgCIAAgCIgBgCIgBgBIAAgCIgBgCIAAgCIAAgCIgBgBIAAgCIAAgCIgBgCIAAgCIAAgCIgBgCIAAgBIAAgCIAAgCIgBgCIAAgCIgBgCIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIABgCIgBgCIABgCIABgCIAAgBIAAgCIABgCIAAgCIAAgCIABgCIAAgCIAAgCIABgCIAAgCIAAgCIABgCIABgCIABgCIABgCIABgCIABgCIAAgCIABgCIACgCIABgCIAAgCIABgCIACgDIABgCIACgCIACgCIABgCIABgCIACgCIACgCIABgDIACgCIACgCIACgCIAHgHIANgJIAIgFIALgGIAIgDIAMgEIAMgCIAMgBIAIAAIAJAAIAHABIALADIAJACIADABIAEACIADABIADABIADACIAEABIACACIADABIACACIADABIACACIACACIACABIADACIABABIACACIACACIACABIACACIABABIACACIABACIACABIACACIABACIABABIABACIABACIADACIAAABIACACIABACIAAACIACABIABACIABACIAAACIACABIABACIABACIAAACIABABIABACIABACIAAACIABABIABACIAAACIABACIABACIABABIAAACIAAACIABACIAAACIABACIAAACIAAABIAAACIABACIAAACIAAACIAAACIAAACIABABIgBACIABACIAAACIgBACIABABIgBACIABACIgBACIABABIgBACIAAACIAAACIAAACIAAACIAAACIgBACIAAACIgBACIAAACIgBACIAAACIgBACIAAACIgBACIgBACIAAACIgBACIgBACIgBACIgBACIAAACIgBACIgBACIgBACIgBACIgCACIgBACIgCACIAAACIgCADIgBACIgCACIgCACIgBACIgCACIgCACIgCADIgDACIgBACIgDACIgDADIgFAEIgDADIgEACIgJAFIgMAGIgFACIgIADIgRAEIgLABIgHAAIgIAAg");
	this.shape.setTransform(23.4,-144);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-215.3,105.5,83.8);


// stage content:
(lib.writingsuccess_Fontkid_J = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_484 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(484).call(this.frame_484).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(304.6,69.6,0.999,0.999,8.5,0,0,22.4,-144);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:8.3,guide:{path:[304.5,69.6,303.3,222,302.1,374.4]}},101).to({regX:22.5,scaleX:1,scaleY:1,guide:{path:[302.1,374.4,302,382.7,302,391,297,416.7,282.5,431.5]}},25).to({regX:22.4,scaleX:1,scaleY:1,guide:{path:[282.5,431.6,277.8,436.3,272.2,440,255.2,450.8,237.8,452.7]}},29).to({regX:22.5,scaleX:1,scaleY:1,guide:{path:[237.8,452.7,231.5,453.4,225.1,452.8,204.8,451.8,192.3,446.5]}},30).to({regX:22.4,scaleX:1,scaleY:1,guide:{path:[192.4,446.5,187.1,444.2,183.2,441.2,173.4,433.5,168.5,429.1]}},30).wait(11).to({x:189.5,y:69},0).to({x:414.5},149).wait(11).to({startPosition:0},0).to({guide:{path:[414.5,69.1,282.1,42.5,279.5,-26.7]}},89).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(164.6,427.8,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},215).wait(11).to({_off:false,x:415.6,y:68.8},0).to({_off:true},160).wait(90));

	// Layer 3
	this.instance_1 = new lib.ar2("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(325.3,16.1,1,1,0,0,0,46.1,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(235).to({_off:false},0).wait(250));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AgMAAIAZAA");
	this.shape_1.setTransform(188.8,69.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("AgTAAIAnAA");
	this.shape_2.setTransform(189.5,69.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("AgbAAIA3AA");
	this.shape_3.setTransform(190.3,69.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("AgjAAIBGAA");
	this.shape_4.setTransform(191.1,69.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(25,1,1).p("AgqAAIBVAA");
	this.shape_5.setTransform(191.8,69.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(25,1,1).p("AgyAAIBkAA");
	this.shape_6.setTransform(192.6,69.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(25,1,1).p("Ag5AAIBzAA");
	this.shape_7.setTransform(193.3,69.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(25,1,1).p("AhBAAICDAA");
	this.shape_8.setTransform(194.1,69.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(25,1,1).p("AhIAAICRAA");
	this.shape_9.setTransform(194.8,69.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(25,1,1).p("AhQAAIChAA");
	this.shape_10.setTransform(195.6,69.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(25,1,1).p("AhXAAICvAA");
	this.shape_11.setTransform(196.3,69.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(25,1,1).p("AhfAAIC/AA");
	this.shape_12.setTransform(197.1,69.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(25,1,1).p("AhmAAIDNAA");
	this.shape_13.setTransform(197.9,69.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(25,1,1).p("AhuAAIDdAA");
	this.shape_14.setTransform(198.6,69.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(25,1,1).p("Ah1AAIDrAA");
	this.shape_15.setTransform(199.4,69.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(25,1,1).p("Ah9AAID7AA");
	this.shape_16.setTransform(200.1,69.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(25,1,1).p("AiFAAIELAA");
	this.shape_17.setTransform(200.9,69.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(25,1,1).p("AiMAAIEZAA");
	this.shape_18.setTransform(201.6,69.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(25,1,1).p("AiUAAIEpAA");
	this.shape_19.setTransform(202.4,69.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(25,1,1).p("AicAAIE5AA");
	this.shape_20.setTransform(203.2,69.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(25,1,1).p("AijAAIFHAA");
	this.shape_21.setTransform(203.9,69.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(25,1,1).p("AirAAIFXAA");
	this.shape_22.setTransform(204.7,69.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(25,1,1).p("AiyAAIFlAA");
	this.shape_23.setTransform(205.4,69.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(25,1,1).p("Ai6AAIF1AA");
	this.shape_24.setTransform(206.2,69.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(25,1,1).p("AjBAAIGDAA");
	this.shape_25.setTransform(206.9,69.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(25,1,1).p("AjJAAIGTAA");
	this.shape_26.setTransform(207.7,69.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(25,1,1).p("AjQAAIGhAA");
	this.shape_27.setTransform(208.4,69.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(25,1,1).p("AjYAAIGxAA");
	this.shape_28.setTransform(209.2,69.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(25,1,1).p("AjfAAIHAAA");
	this.shape_29.setTransform(210,69.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(25,1,1).p("AjnAAIHPAA");
	this.shape_30.setTransform(210.7,69.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(25,1,1).p("AjuAAIHeAA");
	this.shape_31.setTransform(211.5,69.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(25,1,1).p("Aj2AAIHtAA");
	this.shape_32.setTransform(212.2,69.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(25,1,1).p("Aj+AAIH9AA");
	this.shape_33.setTransform(213,69.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(25,1,1).p("AkFAAIILAA");
	this.shape_34.setTransform(213.7,69.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(25,1,1).p("AkNAAIIbAA");
	this.shape_35.setTransform(214.5,69.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(25,1,1).p("AkVAAIIrAA");
	this.shape_36.setTransform(215.3,69.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(25,1,1).p("AkcAAII5AA");
	this.shape_37.setTransform(216,69.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(25,1,1).p("AkkAAIJJAA");
	this.shape_38.setTransform(216.8,69.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(25,1,1).p("AkrAAIJXAA");
	this.shape_39.setTransform(217.5,69.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(25,1,1).p("AkzAAIJnAA");
	this.shape_40.setTransform(218.3,69.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(25,1,1).p("Ak6AAIJ1AA");
	this.shape_41.setTransform(219,69.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(25,1,1).p("AlCAAIKFAA");
	this.shape_42.setTransform(219.8,69.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(25,1,1).p("AlJAAIKTAA");
	this.shape_43.setTransform(220.5,69.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(25,1,1).p("AlRAAIKjAA");
	this.shape_44.setTransform(221.3,69.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(25,1,1).p("AlZAAIKzAA");
	this.shape_45.setTransform(222.1,69.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(25,1,1).p("AlgAAILBAA");
	this.shape_46.setTransform(222.8,69.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(25,1,1).p("AloAAILRAA");
	this.shape_47.setTransform(223.6,69.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(25,1,1).p("AlvAAILfAA");
	this.shape_48.setTransform(224.3,69.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(25,1,1).p("Al3AAILvAA");
	this.shape_49.setTransform(225.1,69.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(25,1,1).p("Al+AAIL9AA");
	this.shape_50.setTransform(225.8,69.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(25,1,1).p("AmGAAIMNAA");
	this.shape_51.setTransform(226.6,69.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(25,1,1).p("AmNAAIMbAA");
	this.shape_52.setTransform(227.4,69.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(25,1,1).p("AmVAAIMrAA");
	this.shape_53.setTransform(228.1,69.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(25,1,1).p("AmcAAIM5AA");
	this.shape_54.setTransform(228.9,69.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(25,1,1).p("AmkAAINJAA");
	this.shape_55.setTransform(229.6,69.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(25,1,1).p("AmsAAINZAA");
	this.shape_56.setTransform(230.4,69.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(25,1,1).p("AmzAAINnAA");
	this.shape_57.setTransform(231.1,69.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(25,1,1).p("Am7AAIN3AA");
	this.shape_58.setTransform(231.9,69.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(25,1,1).p("AnCAAIOFAA");
	this.shape_59.setTransform(232.6,69.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(25,1,1).p("AnKAAIOVAA");
	this.shape_60.setTransform(233.4,69.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(25,1,1).p("AnSAAIOlAA");
	this.shape_61.setTransform(234.2,69.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(25,1,1).p("AnZAAIOzAA");
	this.shape_62.setTransform(234.9,69.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(25,1,1).p("AnhAAIPDAA");
	this.shape_63.setTransform(235.7,69.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(25,1,1).p("AnoAAIPRAA");
	this.shape_64.setTransform(236.4,69.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(25,1,1).p("AnwAAIPhAA");
	this.shape_65.setTransform(237.2,69.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(25,1,1).p("An3AAIPvAA");
	this.shape_66.setTransform(237.9,69.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(25,1,1).p("An/AAIP/AA");
	this.shape_67.setTransform(238.7,69.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(25,1,1).p("AoGAAIQNAA");
	this.shape_68.setTransform(239.5,69.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(25,1,1).p("AoOAAIQdAA");
	this.shape_69.setTransform(240.2,69.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(25,1,1).p("AoVAAIQrAA");
	this.shape_70.setTransform(241,69.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(25,1,1).p("AodAAIQ7AA");
	this.shape_71.setTransform(241.7,69.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(25,1,1).p("AolAAIRLAA");
	this.shape_72.setTransform(242.5,69.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(25,1,1).p("AosAAIRZAA");
	this.shape_73.setTransform(243.2,69.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(25,1,1).p("Ao0AAIRpAA");
	this.shape_74.setTransform(244,69.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(25,1,1).p("Ao7AAIR3AA");
	this.shape_75.setTransform(244.7,69.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(25,1,1).p("ApDAAISHAA");
	this.shape_76.setTransform(245.5,69.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(25,1,1).p("ApLAAISXAA");
	this.shape_77.setTransform(246.3,69.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(25,1,1).p("ApSAAISlAA");
	this.shape_78.setTransform(247,69.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(25,1,1).p("ApaAAIS1AA");
	this.shape_79.setTransform(247.8,69.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(25,1,1).p("AphAAITDAA");
	this.shape_80.setTransform(248.5,69.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(25,1,1).p("AppAAITTAA");
	this.shape_81.setTransform(249.3,69.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(25,1,1).p("ApwAAIThAA");
	this.shape_82.setTransform(250,69.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(25,1,1).p("Ap4AAITxAA");
	this.shape_83.setTransform(250.8,69.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(25,1,1).p("AqAAAIUBAA");
	this.shape_84.setTransform(251.6,69.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(25,1,1).p("AqHAAIUPAA");
	this.shape_85.setTransform(252.3,69.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(25,1,1).p("AqPAAIUfAA");
	this.shape_86.setTransform(253.1,69.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(25,1,1).p("AqWAAIUtAA");
	this.shape_87.setTransform(253.8,69.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(25,1,1).p("AqeAAIU9AA");
	this.shape_88.setTransform(254.6,69.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(25,1,1).p("AqlAAIVLAA");
	this.shape_89.setTransform(255.3,69.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(25,1,1).p("AqtAAIVbAA");
	this.shape_90.setTransform(256.1,69.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(25,1,1).p("Aq0AAIVpAA");
	this.shape_91.setTransform(256.8,69.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(25,1,1).p("Aq8AAIV5AA");
	this.shape_92.setTransform(257.6,69.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(25,1,1).p("ArEAAIWIAA");
	this.shape_93.setTransform(258.4,69.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(25,1,1).p("ArLAAIWXAA");
	this.shape_94.setTransform(259.1,69.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(25,1,1).p("ArTAAIWmAA");
	this.shape_95.setTransform(259.9,69.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(25,1,1).p("AraAAIW1AA");
	this.shape_96.setTransform(260.6,69.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(25,1,1).p("AriAAIXFAA");
	this.shape_97.setTransform(261.4,69.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(25,1,1).p("ArpAAIXTAA");
	this.shape_98.setTransform(262.1,69.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(25,1,1).p("ArxAAIXjAA");
	this.shape_99.setTransform(262.9,69.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(25,1,1).p("Ar4AAIXyAA");
	this.shape_100.setTransform(263.7,69.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(25,1,1).p("AsAAAIYBAA");
	this.shape_101.setTransform(264.4,69.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(25,1,1).p("AsHAAIYQAA");
	this.shape_102.setTransform(265.2,69.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(25,1,1).p("AsPAAIYfAA");
	this.shape_103.setTransform(265.9,69.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(25,1,1).p("AsXAAIYvAA");
	this.shape_104.setTransform(266.7,69.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(25,1,1).p("AseAAIY9AA");
	this.shape_105.setTransform(267.4,69.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(25,1,1).p("AsmAAIZNAA");
	this.shape_106.setTransform(268.2,69.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(25,1,1).p("AstAAIZbAA");
	this.shape_107.setTransform(268.9,69.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(25,1,1).p("As1AAIZrAA");
	this.shape_108.setTransform(269.7,69.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(25,1,1).p("As8AAIZ5AA");
	this.shape_109.setTransform(270.5,69.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(25,1,1).p("AtEAAIaJAA");
	this.shape_110.setTransform(271.2,69.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(25,1,1).p("AtLAAIaXAA");
	this.shape_111.setTransform(272,69.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(25,1,1).p("AtTAAIanAA");
	this.shape_112.setTransform(272.7,69.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(25,1,1).p("AtbAAIa3AA");
	this.shape_113.setTransform(273.5,69.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(25,1,1).p("AtiAAIbFAA");
	this.shape_114.setTransform(274.2,69.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(25,1,1).p("AtqAAIbVAA");
	this.shape_115.setTransform(275,69.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(25,1,1).p("AtyAAIblAA");
	this.shape_116.setTransform(275.8,69.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(25,1,1).p("At5AAIbzAA");
	this.shape_117.setTransform(276.5,69.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(25,1,1).p("AuBAAIcDAA");
	this.shape_118.setTransform(277.3,69.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(25,1,1).p("AuIAAIcRAA");
	this.shape_119.setTransform(278,69.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(25,1,1).p("AuQAAIchAA");
	this.shape_120.setTransform(278.8,69.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(25,1,1).p("AuXAAIcvAA");
	this.shape_121.setTransform(279.5,69.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(25,1,1).p("AufAAIc/AA");
	this.shape_122.setTransform(280.3,69.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(25,1,1).p("AumAAIdNAA");
	this.shape_123.setTransform(281,69.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(25,1,1).p("AuuAAIddAA");
	this.shape_124.setTransform(281.8,69.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(25,1,1).p("Au2AAIdtAA");
	this.shape_125.setTransform(282.6,69.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(25,1,1).p("Au9AAId7AA");
	this.shape_126.setTransform(283.3,69.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(25,1,1).p("AvFAAIeLAA");
	this.shape_127.setTransform(284.1,69.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(25,1,1).p("AvMAAIeZAA");
	this.shape_128.setTransform(284.8,69.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(25,1,1).p("AvUAAIepAA");
	this.shape_129.setTransform(285.6,69.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(25,1,1).p("AvbAAIe3AA");
	this.shape_130.setTransform(286.3,69.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(25,1,1).p("AvjAAIfHAA");
	this.shape_131.setTransform(287.1,69.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(25,1,1).p("AvrAAIfWAA");
	this.shape_132.setTransform(287.9,69.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(25,1,1).p("AvyAAIflAA");
	this.shape_133.setTransform(288.6,69.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(25,1,1).p("Av6AAIf0AA");
	this.shape_134.setTransform(289.4,69.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(25,1,1).p("AwBAAMAgDAAA");
	this.shape_135.setTransform(290.1,69.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(25,1,1).p("AwJAAMAgTAAA");
	this.shape_136.setTransform(290.9,69.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(25,1,1).p("AwQAAMAghAAA");
	this.shape_137.setTransform(291.6,69.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(25,1,1).p("AwYAAMAgxAAA");
	this.shape_138.setTransform(292.4,69.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(25,1,1).p("AwfAAMAg/AAA");
	this.shape_139.setTransform(293.1,69.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(25,1,1).p("AwnAAMAhPAAA");
	this.shape_140.setTransform(293.9,69.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(25,1,1).p("AwuAAMAheAAA");
	this.shape_141.setTransform(294.7,69.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(25,1,1).p("Aw2AAMAhtAAA");
	this.shape_142.setTransform(295.4,69.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(25,1,1).p("Aw9AAMAh8AAA");
	this.shape_143.setTransform(296.2,69.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(25,1,1).p("AxFAAMAiLAAA");
	this.shape_144.setTransform(296.9,69.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(25,1,1).p("AxNAAMAibAAA");
	this.shape_145.setTransform(297.7,69.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(25,1,1).p("AxUAAMAipAAA");
	this.shape_146.setTransform(298.4,69.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(25,1,1).p("AxcAAMAi5AAA");
	this.shape_147.setTransform(299.2,69.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(25,1,1).p("AxjAAMAjHAAA");
	this.shape_148.setTransform(299.9,69.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(25,1,1).p("AxrAAMAjXAAA");
	this.shape_149.setTransform(300.7,69.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(25,1,1).p("AxzAAMAjnAAA");
	this.shape_150.setTransform(301.5,69.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},235).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).wait(101));

	// ar1
	this.instance_2 = new lib.ar1("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(285.5,159.1,1,1,0,0,180);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(476));

	// Layer 8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_111 = new cjs.Graphics().p("A4OXNQBcq+IymwQIymtK+BbQK+BdGvIxQGvIzhcK+g");
	var mask_graphics_112 = new cjs.Graphics().p("A4KWdQBqq9I6mlQI7miK7BoQK8BqGkI6QGlI7hqK8g");
	var mask_graphics_113 = new cjs.Graphics().p("A4FVsQB4q6JBmaQJDmYK5B4QK6B2GZJBQGaJDh3K6g");
	var mask_graphics_114 = new cjs.Graphics().p("A3/U8QCFq4JJmPQJKmMK3CEQK4CEGOJJQGOJLiEK3g");
	var mask_graphics_115 = new cjs.Graphics().p("A35UMQCSq1JRmEQJSmBK0CSQK1CRGDJQQGDJSiSK1g");
	var mask_graphics_116 = new cjs.Graphics().p("A3yTcQCfqyJZl4QJZl2KxCfQKyCeF3JYQF4JZifKyg");
	var mask_graphics_117 = new cjs.Graphics().p("A3qSsQCsqvJflsQJhlrKtCtQKvCrFsJfQFsJgisKvg");
	var mask_graphics_118 = new cjs.Graphics().p("A3iR8QC5qrJnlhQJnleKqC5QKsC5FfJmQFhJni6Krg");
	var mask_graphics_119 = new cjs.Graphics().p("A3ZRNQDGqoJtlVQJulSKmDGQKoDGFUJsQFVJujHKog");
	var mask_graphics_120 = new cjs.Graphics().p("A3QQeQDUqkJzlJQJ0lGKjDTQKkDTFIJzQFIJ0jTKkg");
	var mask_graphics_121 = new cjs.Graphics().p("A3GPvQDhqfJ5k9QJ5k7KgDhQKfDfE8J5QE9J7jgKfg");
	var mask_graphics_122 = new cjs.Graphics().p("A27PBQDtqbJ/kwQJ/kvKcDtQKbDsEwJ/QEwKAjtKcg");
	var mask_graphics_123 = new cjs.Graphics().p("A2wOTQD6qXKFkjQKFkjKWD6QKXD5EjKFQElKGj6KWg");
	var mask_graphics_124 = new cjs.Graphics().p("A2kNlQEHqSKKkWQKKkXKSEGQKSEGEXKKQEXKMkGKRg");
	var mask_graphics_125 = new cjs.Graphics().p("A2YM4QEUqNKPkKQKQkKKMETQKNESEKKPQELKRkTKMg");
	var mask_graphics_126 = new cjs.Graphics().p("A2KMLQEfqHKVj+QKUj+KHEgQKHEeD+KVQD/KVkgKHg");
	var mask_graphics_127 = new cjs.Graphics().p("A19LeQEsqBKajyQKZjwKBEsQKCEqDxKaQDyKaksKBg");
	var mask_graphics_128 = new cjs.Graphics().p("A1uKyQE4p8KejkQKdjkJ8E4QJ7E3DlKeQDlKfk4J7g");
	var mask_graphics_129 = new cjs.Graphics().p("A1gKGQFFp2KijXQKijXJ1FEQJ2FDDXKiQDYKjlEJ2g");
	var mask_graphics_130 = new cjs.Graphics().p("A1QJaQFQpuKmjLQKmjKJvFQQJvFPDLKmQDLKnlQJvg");
	var mask_graphics_131 = new cjs.Graphics().p("A1AIvQFcpnKqi/QKpi9JpFcQJpFcC9KpQC+KrlcJpg");
	var mask_graphics_132 = new cjs.Graphics().p("A0wIFQFophKuixQKtiwJiFoQJhFnCxKtQCxKuloJig");
	var mask_graphics_133 = new cjs.Graphics().p("A0eHbQFzpaKxikQKwijJbF0QJaFyCkKwQCkKyl0Jbg");
	var mask_graphics_134 = new cjs.Graphics().p("A0NGxQF/pSK0iXQKziWJUF/QJTF+CWK0QCXK0l/JUg");
	var mask_graphics_135 = new cjs.Graphics().p("Az7GIQGLpLK2iJQK2iJJMGLQJMGJCJK2QCJK3mKJMg");
	var mask_graphics_136 = new cjs.Graphics().p("AzoFgQGWpEK5h8QK4h7JEGWQJFGUB7K5QB8K5mVJFg");
	var mask_graphics_137 = new cjs.Graphics().p("AzVE4QGho8K7hvQK7htI8GgQI9GgBuK7QBuK8mgI8g");
	var mask_graphics_138 = new cjs.Graphics().p("AzBEQQGsozK9hhQK8hhI1GsQI0GqBhK9QBhK+mrI0g");
	var mask_graphics_139 = new cjs.Graphics().p("AysDqQG2orK/hUQK+hTIsG2QIsG1BTK+QBULAm2Isg");
	var mask_graphics_140 = new cjs.Graphics().p("AyYDDQHBoiLAhHQLAhFIkHBQIjG/BGLAQBGLBnAIkg");
	var mask_graphics_141 = new cjs.Graphics().p("AyDCeQHLoaLBg5QLCg4IbHLQIbHKA4LBQA5LDnLIbg");
	var mask_graphics_142 = new cjs.Graphics().p("AxtB5QHVoRLCgsQLDgqISHVQISHVArLCQArLDnWISg");
	var mask_graphics_143 = new cjs.Graphics().p("AxXBUQHfoILDgeQLDgcIJHfQIJHeAdLDQAeLEnfIJg");
	var mask_graphics_144 = new cjs.Graphics().p("AxAAxQHpn/LDgQQLDgQIAHqQIAHoAQLDQAPLEnpIAg");
	var mask_graphics_145 = new cjs.Graphics().p("AwpANQHzn1LCgDQLEgBH3HyQH2HzACLDQACLFnzH2g");
	var mask_graphics_146 = new cjs.Graphics().p("AwSgUQH8nsLDAKQLEAMHtH8QHsH8gLLDQgLLFn9Hsg");
	var mask_graphics_147 = new cjs.Graphics().p("Av6g2QIFniLDAYQLDAZHjIFQHjIGgZLDQgZLEoGHig");
	var mask_graphics_148 = new cjs.Graphics().p("AvihXQIPnZLCAmQLCAnHZIOQHZIPgnLCQgmLEoPHYg");
	var mask_graphics_149 = new cjs.Graphics().p("AvKh3QIYnPLBA0QLCA0HOIXQHPIYg0LBQg0LDoYHOg");
	var mask_graphics_150 = new cjs.Graphics().p("AuxiXQIhnELABBQLABCHEIgQHFIghCLAQhBLCohHEg");
	var mask_graphics_151 = new cjs.Graphics().p("AuYi2QIpm5K/BOQK/BPG6IpQG5IphOK/QhPLAopG5g");
	var mask_graphics_152 = new cjs.Graphics().p("At+jUQIxmvK9BcQK+BdGvIwQGvIyhcK9QhdK+oxGvg");
	var mask_graphics_153 = new cjs.Graphics().p("AtkjyQI6mkK7BqQK7BqGkI5QGkI5hpK8QhqK8o6Gkg");
	var mask_graphics_154 = new cjs.Graphics().p("AtKkOQJCmZK5B2QK5B4GZJBQGZJBh3K5Qh3K7pBGZg");
	var mask_graphics_155 = new cjs.Graphics().p("AsvkqQJJmOK3CEQK3CFGOJIQGOJKiFK2QiEK4pJGOg");
	var mask_graphics_156 = new cjs.Graphics().p("AsUlFQJRmDK0CRQK0CTGDJPQGCJRiRK0QiSK2pRGCg");
	var mask_graphics_157 = new cjs.Graphics().p("Ar4lgQJYl3KwCfQKyCfF3JXQF3JYifKxQifKzpYF3g");
	var mask_graphics_158 = new cjs.Graphics().p("Ardl5QJglsKtCsQKuCtFsJeQFsJfisKuQitKvpfFrg");
	var mask_graphics_159 = new cjs.Graphics().p("ArAmSQJllgKrC5QKrC6FfJlQFgJmi5KqQi5KspmFgg");
	var mask_graphics_160 = new cjs.Graphics().p("AqkmqQJtlUKmDGQKnDHFUJrQFUJtjGKnQjGKoptFUg");
	var mask_graphics_161 = new cjs.Graphics().p("AqHnBQJzlIKiDSQKkDUFIJyQFIJzjTKjQjUKkpzFIg");
	var mask_graphics_162 = new cjs.Graphics().p("ApqnXQJ4k8KfDfQKfDhE8J4QE8J5jgKfQjgKgp5E8g");
	var mask_graphics_163 = new cjs.Graphics().p("ApNntQJ+kwKbDtQKbDtEwJ+QEwKAjtKaQjuKbp+Ewg");
	var mask_graphics_164 = new cjs.Graphics().p("AovoCQKEkjKWD5QKWD7EjKDQEkKFj6KWQj6KWqEEkg");
	var mask_graphics_165 = new cjs.Graphics().p("AoRoVQKJkXKREFQKREIEYKJQEXKKkGKRQkHKRqKEXg");
	var mask_graphics_166 = new cjs.Graphics().p("AnzooQKOkLKNETQKMETEKKPQELKPkTKLQkTKNqPELg");
	var mask_graphics_167 = new cjs.Graphics().p("AnUo6QKTj+KHEfQKGEgD+KTQD+KUkfKHQkfKHqVD+g");
	var mask_graphics_168 = new cjs.Graphics().p("Am2pLQKYjyKCEsQKAEsDyKYQDxKZkrKBQksKBqZDyg");
	var mask_graphics_169 = new cjs.Graphics().p("AmXpcQKdjkJ7E3QJ7E5DkKcQDlKek4J6Qk4J8qdDlg");
	var mask_graphics_170 = new cjs.Graphics().p("Al6pqQKhjZJ2FDQJ1FEDYKgQDZKilDJ1QlEJ2qiDYg");
	var mask_graphics_171 = new cjs.Graphics().p("Alcp4QKkjMJwFOQJvFPDMKkQDNKmlPJvQlOJwqmDMg");
	var mask_graphics_172 = new cjs.Graphics().p("Ak/qFQKojAJqFZQJpFaDAKoQDAKplZJpQlaJqqpDAg");
	var mask_graphics_173 = new cjs.Graphics().p("AkhqRQKri0JkFkQJjFmCzKrQC0KslkJjQllJkqtCzg");
	var mask_graphics_174 = new cjs.Graphics().p("AkDqdQKuinJdFvQJdFwCnKvQCoKvlwJdQlwJdqvCng");
	var mask_graphics_175 = new cjs.Graphics().p("AjlqnQKxibJXF6QJVF7CbKxQCbKzl6JVQl7JXqyCbg");
	var mask_graphics_176 = new cjs.Graphics().p("AjHqxQK0iPJQGFQJOGGCPK0QCPK1mFJPQmGJPq1CPg");
	var mask_graphics_177 = new cjs.Graphics().p("Aioq6QK2iCJIGPQJIGRCCK2QCCK4mPJHQmQJJq4CCg");
	var mask_graphics_178 = new cjs.Graphics().p("AiKrCQK5h2JBGaQJAGbB2K5QB1K6maJAQmaJBq6B2g");
	var mask_graphics_179 = new cjs.Graphics().p("AhrrJQK6hpI6GkQI5GkBpK8QBpK8mkI4QmlI6q8Bpg");
	var mask_graphics_180 = new cjs.Graphics().p("AhNrQQK9hcIyGuQIxGuBcK+QBdK+mvIxQmvIyq9Bcg");
	var mask_graphics_181 = new cjs.Graphics().p("AgurWQK+hPIqG4QIpG4BQLAQBQK/m4IpQm6Iqq/BQg");
	var mask_graphics_182 = new cjs.Graphics().p("AgPraQK/hEIiHDQIhHCBELAQBDLBnDIhQnDIirABEg");
	var mask_graphics_183 = new cjs.Graphics().p("AAOreQLCg3IaHMQIZHMA2LCQA3LBnMIZQnNIarCA3g");
	var mask_graphics_184 = new cjs.Graphics().p("AAtriQLDgpIRHVQIRHWAqLCQApLDnVIRQnXIRrCAqg");
	var mask_graphics_185 = new cjs.Graphics().p("ABMrkQLDgdIJHfQIIHfAdLDQAdLDnfIJQngIJrDAdg");
	var mask_graphics_186 = new cjs.Graphics().p("ABrrmQLDgQIBHpQH/HoAQLDQARLEnpIAQnpIArEAQg");
	var mask_graphics_187 = new cjs.Graphics().p("ACJrmQLEgEH4HyQH2HxAELEQADLEnxH2QnzH4rDADg");
	var mask_graphics_188 = new cjs.Graphics().p("EAB8ApyMAAsg1YQLEAJHuH6QHuH7gJLEQgJLDn7HuQnyHlqzAAIgaAAg");
	var mask_graphics_189 = new cjs.Graphics().p("EABdApyMABqg1YQLDAWHmIEQHkIDgWLDQgWLEoDHkQnuHRqdAAIg9gBg");
	var mask_graphics_190 = new cjs.Graphics().p("EAA+ApwMACng1VQLDAjHcIMQHbIMgiLDQgjLDoMHbQnpG8qIAAQgvAAgwgDg");
	var mask_graphics_191 = new cjs.Graphics().p("EAAfApuMADlg1RQLCAvHTIVQHRIUgvLCQgwLDoUHRQnkGopzAAQg/AAhCgFg");
	var mask_graphics_192 = new cjs.Graphics().p("EAABApsMAEig1NQLBA8HJIdQHHIdg8LBQg8LBocHIQnfGUpfAAQhPAAhSgHg");
	var mask_graphics_193 = new cjs.Graphics().p("EgAdAppMAFeg1HQLABIG/IlQG+IlhJLAQhILAolG/QnZGApLAAQhgAAhhgKg");
	var mask_graphics_194 = new cjs.Graphics().p("EgA8AplMAGbg1AQK/BVG1ItQG0IthVK/QhWK+osG1QnTFto4AAQhvAAhygOg");
	var mask_graphics_195 = new cjs.Graphics().p("EgBbAphMAHZg04QK9BiGrI0QGqI1hiK9QhiK9o1GqQnMFbomAAQh+AAiCgSg");
	var mask_graphics_196 = new cjs.Graphics().p("EgB5ApcMAIVg0vQK7BvGhI8QGfI8huK7QhvK7o8GgQnFFKoTAAQiOAAiRgYg");
	var mask_graphics_197 = new cjs.Graphics().p("EgCYApXMAJSg0lQK5B7GWJEQGWJDh7K5Qh8K5pDGWQm+E4oCAAQicAAihgdg");
	var mask_graphics_198 = new cjs.Graphics().p("EgC2ApRMAKOg0aQK3CIGMJKQGLJMiIK2QiIK3pLGLQm1EnnxAAQiqAAixgjg");
	var mask_graphics_199 = new cjs.Graphics().p("EgDVApLMALLg0OQK0CUGBJRQGBJTiUK0QiVK1pRGAQmuEWngAAQi4AAjBgpg");
	var mask_graphics_200 = new cjs.Graphics().p("EgDzApEMAMHg0AQKxCgF3JYQF1JaigKxQihKypZF1QmlEGnQAAQjGAAjPgwg");
	var mask_graphics_201 = new cjs.Graphics().p("EgERAo9MANCgzyQKvCtFsJeQFqJgitKvQitKupfFrQmcD3nAAAQjVAAjdg4g");
	var mask_graphics_202 = new cjs.Graphics().p("EgEvAo1MAN+gzjQKrC5FhJlQFgJni6KrQi5KspmFgQmTDnmwAAQjiAAjshAg");
	var mask_graphics_203 = new cjs.Graphics().p("EgFNAosMAO6gzSQKnDGFWJrQFUJtjFKoQjGKopsFVQmJDYmhAAQjwAAj6hJg");
	var mask_graphics_204 = new cjs.Graphics().p("EgFqAojMAP0gzAQKkDSFKJxQFKJzjSKkQjSKkpyFKQl/DKmSAAQj+AAkHhSg");
	var mask_graphics_205 = new cjs.Graphics().p("EgGIAoaMAQvgyuQKgDeE/J3QE+J5jeKgQjdKhp4E+Ql2C8mCAAQkNAAkUhbg");
	var mask_graphics_206 = new cjs.Graphics().p("EgGlAoQMARpgyaQKcDqE0J9QEzJ+jqKcQjqKdp+EzQlrCul0AAQkaAAkhhlg");
	var mask_graphics_207 = new cjs.Graphics().p("EgHCAoGMASjgyGQKYD2EoKDQEnKDj2KYQj2KYqDEoQlgChllAAQkoAAkuhvg");
	var mask_graphics_208 = new cjs.Graphics().p("EgHfAn7MATdgxwQKTECEdKIQEbKJkCKTQkCKTqIEcQlUCVlYAAQk2AAk6h6g");
	var mask_graphics_209 = new cjs.Graphics().p("EgH7AnvMAUVgxYQKPENERKNQEPKOkNKOQkOKPqNEQQlJCJlJAAQlFAAlFiGg");
	var mask_graphics_210 = new cjs.Graphics().p("EgIYAnjMAVPgxBQKJEaEFKRQEEKTkZKKQkaKKqSEEQk9B9k7AAQlSAAlSiSg");
	var mask_graphics_211 = new cjs.Graphics().p("EgI0AnXMAWHgwoQKEElD5KWQD4KXklKFQklKFqWD4QkxByktAAQlhAAldieg");
	var mask_graphics_212 = new cjs.Graphics().p("EgJQAnKMAW/gwOQJ/ExDtKaQDsKckxJ/QkwJ/qbDtQklBnkeAAQlwAAloirg");
	var mask_graphics_213 = new cjs.Graphics().p("EgJrAm8MAX1gvzQJ6E9DhKeQDgKgk8J6Qk8J5qfDhQkYBdkQAAQl/AAlyi5g");
	var mask_graphics_214 = new cjs.Graphics().p("EgKHAmvMAYtgvYQJ0FIDVKiQDTKklHJ0QlHJ0qjDUQkLBUkDAAQmNAAl9jGg");
	var mask_graphics_215 = new cjs.Graphics().p("EgKiAmgMAZjgu6QJuFTDJKmQDHKnlSJuQlTJuqnDIQj9BLj0AAQmdAAmHjVg");
	var mask_graphics_216 = new cjs.Graphics().p("EgK8AmRMAaYgucQJoFeC8KqQC8KrleJnQleJoqqC8QjvBCjnAAQmsAAmQjkg");
	var mask_graphics_217 = new cjs.Graphics().p("EgLXAmCMAbOgt9QJhFoCwKtQCvKvloJhQlpJhquCwQjhA6jZAAQm7AAmajzg");
	var mask_graphics_218 = new cjs.Graphics().p("EgLxAlyMAcCgtdQJbFzCkKwQCjKyl0JbQl0JaqxCkQjSAyjLAAQnMAAmikDg");
	var mask_graphics_219 = new cjs.Graphics().p("EgMLAliMAc2gs9QJUF/CYKzQCWK0l+JUQl/JUqzCXQjFAqi8AAQncAAmrkSg");
	var mask_graphics_220 = new cjs.Graphics().p("EgMlAlRMAdqgsbQJNGJCLK2QCKK3mJJNQmJJNq2CKQi2AkiuAAQnsAAm0kjg");
	var mask_graphics_221 = new cjs.Graphics().p("EgM+AlAMAedgr4QJGGTB+K4QB+K5mUJGQmUJGq4B+QimAeigAAQn+AAm7k0g");
	var mask_graphics_222 = new cjs.Graphics().p("EgNXAkvMAfPgrWQI/GfByK6QBwK7meI/QmeI+q7BxQiWAZiRAAQoPAAnDlFg");
	var mask_graphics_223 = new cjs.Graphics().p("EgNwAkdMAgBgqxQI3GnBmK9QBkK+mpI3QmoI3q9BkQiHAUiBAAQoiAAnKlXg");
	var mask_graphics_224 = new cjs.Graphics().p("EgOJAkLMAgygqMQIvGyBZK+QBXK/myIwQmzIvq+BYQh3APhyAAQo0AAnRlpg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(111).to({graphics:mask_graphics_111,x:185.6,y:193.2}).wait(1).to({graphics:mask_graphics_112,x:185.6,y:194.8}).wait(1).to({graphics:mask_graphics_113,x:185.7,y:196.4}).wait(1).to({graphics:mask_graphics_114,x:185.7,y:198}).wait(1).to({graphics:mask_graphics_115,x:185.7,y:199.6}).wait(1).to({graphics:mask_graphics_116,x:185.7,y:201.2}).wait(1).to({graphics:mask_graphics_117,x:185.7,y:202.8}).wait(1).to({graphics:mask_graphics_118,x:185.7,y:204.4}).wait(1).to({graphics:mask_graphics_119,x:185.8,y:206}).wait(1).to({graphics:mask_graphics_120,x:185.8,y:207.6}).wait(1).to({graphics:mask_graphics_121,x:185.8,y:209.1}).wait(1).to({graphics:mask_graphics_122,x:185.8,y:210.7}).wait(1).to({graphics:mask_graphics_123,x:185.8,y:212.2}).wait(1).to({graphics:mask_graphics_124,x:185.8,y:213.7}).wait(1).to({graphics:mask_graphics_125,x:185.8,y:215.2}).wait(1).to({graphics:mask_graphics_126,x:185.8,y:216.7}).wait(1).to({graphics:mask_graphics_127,x:185.8,y:218.2}).wait(1).to({graphics:mask_graphics_128,x:185.8,y:219.7}).wait(1).to({graphics:mask_graphics_129,x:185.8,y:221.2}).wait(1).to({graphics:mask_graphics_130,x:185.7,y:222.6}).wait(1).to({graphics:mask_graphics_131,x:185.7,y:224.1}).wait(1).to({graphics:mask_graphics_132,x:185.7,y:225.5}).wait(1).to({graphics:mask_graphics_133,x:185.7,y:226.9}).wait(1).to({graphics:mask_graphics_134,x:185.7,y:228.3}).wait(1).to({graphics:mask_graphics_135,x:185.7,y:229.6}).wait(1).to({graphics:mask_graphics_136,x:185.6,y:231}).wait(1).to({graphics:mask_graphics_137,x:185.6,y:232.3}).wait(1).to({graphics:mask_graphics_138,x:185.6,y:233.6}).wait(1).to({graphics:mask_graphics_139,x:185.6,y:234.9}).wait(1).to({graphics:mask_graphics_140,x:185.6,y:236.2}).wait(1).to({graphics:mask_graphics_141,x:185.5,y:237.5}).wait(1).to({graphics:mask_graphics_142,x:185.5,y:238.7}).wait(1).to({graphics:mask_graphics_143,x:185.5,y:239.9}).wait(1).to({graphics:mask_graphics_144,x:185.5,y:241.1}).wait(1).to({graphics:mask_graphics_145,x:185.5,y:242.3}).wait(1).to({graphics:mask_graphics_146,x:185.5,y:243.4}).wait(1).to({graphics:mask_graphics_147,x:185.5,y:244.5}).wait(1).to({graphics:mask_graphics_148,x:185.5,y:245.6}).wait(1).to({graphics:mask_graphics_149,x:185.5,y:246.7}).wait(1).to({graphics:mask_graphics_150,x:185.5,y:247.8}).wait(1).to({graphics:mask_graphics_151,x:185.6,y:248.8}).wait(1).to({graphics:mask_graphics_152,x:185.6,y:249.8}).wait(1).to({graphics:mask_graphics_153,x:185.6,y:250.8}).wait(1).to({graphics:mask_graphics_154,x:185.6,y:251.8}).wait(1).to({graphics:mask_graphics_155,x:185.6,y:252.7}).wait(1).to({graphics:mask_graphics_156,x:185.7,y:253.6}).wait(1).to({graphics:mask_graphics_157,x:185.7,y:254.5}).wait(1).to({graphics:mask_graphics_158,x:185.7,y:255.3}).wait(1).to({graphics:mask_graphics_159,x:185.7,y:256.2}).wait(1).to({graphics:mask_graphics_160,x:185.7,y:257}).wait(1).to({graphics:mask_graphics_161,x:185.7,y:257.7}).wait(1).to({graphics:mask_graphics_162,x:185.7,y:258.5}).wait(1).to({graphics:mask_graphics_163,x:185.7,y:259.2}).wait(1).to({graphics:mask_graphics_164,x:185.7,y:259.9}).wait(1).to({graphics:mask_graphics_165,x:185.8,y:260.5}).wait(1).to({graphics:mask_graphics_166,x:185.8,y:261.2}).wait(1).to({graphics:mask_graphics_167,x:185.7,y:261.8}).wait(1).to({graphics:mask_graphics_168,x:185.7,y:262.4}).wait(1).to({graphics:mask_graphics_169,x:185.7,y:262.9}).wait(1).to({graphics:mask_graphics_170,x:185.7,y:263.3}).wait(1).to({graphics:mask_graphics_171,x:185.7,y:263.8}).wait(1).to({graphics:mask_graphics_172,x:185.7,y:264.2}).wait(1).to({graphics:mask_graphics_173,x:185.7,y:264.6}).wait(1).to({graphics:mask_graphics_174,x:185.7,y:265}).wait(1).to({graphics:mask_graphics_175,x:185.6,y:265.4}).wait(1).to({graphics:mask_graphics_176,x:185.6,y:265.7}).wait(1).to({graphics:mask_graphics_177,x:185.6,y:266}).wait(1).to({graphics:mask_graphics_178,x:185.6,y:266.3}).wait(1).to({graphics:mask_graphics_179,x:185.6,y:266.5}).wait(1).to({graphics:mask_graphics_180,x:185.6,y:266.7}).wait(1).to({graphics:mask_graphics_181,x:185.5,y:266.9}).wait(1).to({graphics:mask_graphics_182,x:185.5,y:267.1}).wait(1).to({graphics:mask_graphics_183,x:185.5,y:267.2}).wait(1).to({graphics:mask_graphics_184,x:185.5,y:267.3}).wait(1).to({graphics:mask_graphics_185,x:185.5,y:267.4}).wait(1).to({graphics:mask_graphics_186,x:185.5,y:267.4}).wait(1).to({graphics:mask_graphics_187,x:185.5,y:267.4}).wait(1).to({graphics:mask_graphics_188,x:185.5,y:267.4}).wait(1).to({graphics:mask_graphics_189,x:185.5,y:267.5}).wait(1).to({graphics:mask_graphics_190,x:185.5,y:267.5}).wait(1).to({graphics:mask_graphics_191,x:185.5,y:267.5}).wait(1).to({graphics:mask_graphics_192,x:185.5,y:267.5}).wait(1).to({graphics:mask_graphics_193,x:185.6,y:267.5}).wait(1).to({graphics:mask_graphics_194,x:185.6,y:267.5}).wait(1).to({graphics:mask_graphics_195,x:185.6,y:267.5}).wait(1).to({graphics:mask_graphics_196,x:185.6,y:267.6}).wait(1).to({graphics:mask_graphics_197,x:185.6,y:267.6}).wait(1).to({graphics:mask_graphics_198,x:185.7,y:267.6}).wait(1).to({graphics:mask_graphics_199,x:185.7,y:267.6}).wait(1).to({graphics:mask_graphics_200,x:185.7,y:267.6}).wait(1).to({graphics:mask_graphics_201,x:185.7,y:267.7}).wait(1).to({graphics:mask_graphics_202,x:185.7,y:267.7}).wait(1).to({graphics:mask_graphics_203,x:185.7,y:267.7}).wait(1).to({graphics:mask_graphics_204,x:185.8,y:267.7}).wait(1).to({graphics:mask_graphics_205,x:185.8,y:267.7}).wait(1).to({graphics:mask_graphics_206,x:185.8,y:267.7}).wait(1).to({graphics:mask_graphics_207,x:185.8,y:267.7}).wait(1).to({graphics:mask_graphics_208,x:185.8,y:267.7}).wait(1).to({graphics:mask_graphics_209,x:185.8,y:267.7}).wait(1).to({graphics:mask_graphics_210,x:185.8,y:267.7}).wait(1).to({graphics:mask_graphics_211,x:185.8,y:267.7}).wait(1).to({graphics:mask_graphics_212,x:185.8,y:267.7}).wait(1).to({graphics:mask_graphics_213,x:185.8,y:267.7}).wait(1).to({graphics:mask_graphics_214,x:185.8,y:267.7}).wait(1).to({graphics:mask_graphics_215,x:185.8,y:267.7}).wait(1).to({graphics:mask_graphics_216,x:185.8,y:267.7}).wait(1).to({graphics:mask_graphics_217,x:185.8,y:267.7}).wait(1).to({graphics:mask_graphics_218,x:185.7,y:267.7}).wait(1).to({graphics:mask_graphics_219,x:185.7,y:267.6}).wait(1).to({graphics:mask_graphics_220,x:185.7,y:267.6}).wait(1).to({graphics:mask_graphics_221,x:185.7,y:267.6}).wait(1).to({graphics:mask_graphics_222,x:185.7,y:267.6}).wait(1).to({graphics:mask_graphics_223,x:185.7,y:267.6}).wait(1).to({graphics:mask_graphics_224,x:185.6,y:267.6}).wait(261));

	// Layer 7
	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").ss(25,1,1).p("AKxl4QADE1jUDdQjLDVktAKQk3AHiZhsQiYhsgwgr");
	this.shape_151.setTransform(236.5,415.2);
	this.shape_151._off = true;

	var maskedShapeInstanceList = [this.shape_151];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_151).wait(111).to({_off:false},0).wait(374));

	// 1
	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(25,1,1).p("AAAgLIAAAX");
	this.shape_152.setTransform(305.4,68.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#000000").ss(25,1,1).p("AAAAbIAAg1");
	this.shape_153.setTransform(305.4,70.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(25,1,1).p("AAAAqIAAhT");
	this.shape_154.setTransform(305.4,71.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#000000").ss(25,1,1).p("AAAA5IAAhx");
	this.shape_155.setTransform(305.4,73.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(25,1,1).p("AAABIIAAiP");
	this.shape_156.setTransform(305.4,74.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#000000").ss(25,1,1).p("AAABXIAAit");
	this.shape_157.setTransform(305.4,76.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(25,1,1).p("AAABmIAAjL");
	this.shape_158.setTransform(305.4,77.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#000000").ss(25,1,1).p("AAAB1IAAjp");
	this.shape_159.setTransform(305.4,79.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(25,1,1).p("AAACEIAAkH");
	this.shape_160.setTransform(305.4,80.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#000000").ss(25,1,1).p("AAACTIAAkl");
	this.shape_161.setTransform(305.4,82.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(25,1,1).p("AAACiIAAlD");
	this.shape_162.setTransform(305.4,84);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#000000").ss(25,1,1).p("AAACxIAAlh");
	this.shape_163.setTransform(305.4,85.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(25,1,1).p("AAADAIAAl/");
	this.shape_164.setTransform(305.4,87);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").ss(25,1,1).p("AAADPIAAmd");
	this.shape_165.setTransform(305.4,88.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(25,1,1).p("AAADeIAAm7");
	this.shape_166.setTransform(305.4,90);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").ss(25,1,1).p("AAADtIAAnZ");
	this.shape_167.setTransform(305.4,91.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(25,1,1).p("AAAD8IAAn3");
	this.shape_168.setTransform(305.4,93.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").ss(25,1,1).p("AAAELIAAoV");
	this.shape_169.setTransform(305.4,94.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(25,1,1).p("AAAEaIAAoz");
	this.shape_170.setTransform(305.4,96.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").ss(25,1,1).p("AAAEpIAApR");
	this.shape_171.setTransform(305.4,97.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").ss(25,1,1).p("AAAE4IAApv");
	this.shape_172.setTransform(305.4,99.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#000000").ss(25,1,1).p("AAAFHIAAqN");
	this.shape_173.setTransform(305.4,100.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(25,1,1).p("AAAFWIAAqr");
	this.shape_174.setTransform(305.4,102.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#000000").ss(25,1,1).p("AAAFlIAArJ");
	this.shape_175.setTransform(305.4,103.7);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#000000").ss(25,1,1).p("AAAF0IAArn");
	this.shape_176.setTransform(305.4,105.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#000000").ss(25,1,1).p("AAAGDIAAsF");
	this.shape_177.setTransform(305.4,106.7);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#000000").ss(25,1,1).p("AAAGSIAAsj");
	this.shape_178.setTransform(305.4,108.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#000000").ss(25,1,1).p("AAAGhIAAtB");
	this.shape_179.setTransform(305.4,109.7);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").ss(25,1,1).p("AAAGwIAAtf");
	this.shape_180.setTransform(305.4,111.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#000000").ss(25,1,1).p("AAAG/IAAt9");
	this.shape_181.setTransform(305.4,112.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#000000").ss(25,1,1).p("AAAHOIAAub");
	this.shape_182.setTransform(305.4,114.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#000000").ss(25,1,1).p("AAAHdIAAu5");
	this.shape_183.setTransform(305.4,115.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#000000").ss(25,1,1).p("AAAHsIAAvX");
	this.shape_184.setTransform(305.4,117.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#000000").ss(25,1,1).p("AAAH7IAAv1");
	this.shape_185.setTransform(305.4,118.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#000000").ss(25,1,1).p("AAAIKIAAwT");
	this.shape_186.setTransform(305.4,120.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#000000").ss(25,1,1).p("AAAIZIAAwx");
	this.shape_187.setTransform(305.4,121.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#000000").ss(25,1,1).p("AAAIoIAAxP");
	this.shape_188.setTransform(305.4,123.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#000000").ss(25,1,1).p("AAAI3IAAxt");
	this.shape_189.setTransform(305.4,124.9);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#000000").ss(25,1,1).p("AAAJGIAAyL");
	this.shape_190.setTransform(305.4,126.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#000000").ss(25,1,1).p("AAAJVIAAyp");
	this.shape_191.setTransform(305.4,127.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#000000").ss(25,1,1).p("AAAJkIAAzH");
	this.shape_192.setTransform(305.4,129.4);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#000000").ss(25,1,1).p("AAAJzIAAzl");
	this.shape_193.setTransform(305.4,130.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#000000").ss(25,1,1).p("AAAKCIAA0D");
	this.shape_194.setTransform(305.4,132.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#000000").ss(25,1,1).p("AAAKRIAA0h");
	this.shape_195.setTransform(305.4,133.9);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#000000").ss(25,1,1).p("AAAKgIAA0/");
	this.shape_196.setTransform(305.4,135.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#000000").ss(25,1,1).p("AAAKvIAA1d");
	this.shape_197.setTransform(305.4,137);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#000000").ss(25,1,1).p("AAAK+IAA17");
	this.shape_198.setTransform(305.4,138.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#000000").ss(25,1,1).p("AAALNIAA2Z");
	this.shape_199.setTransform(305.4,140);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#000000").ss(25,1,1).p("AAALcIAA23");
	this.shape_200.setTransform(305.4,141.5);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#000000").ss(25,1,1).p("AAALrIAA3V");
	this.shape_201.setTransform(305.4,143);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#000000").ss(25,1,1).p("AAAL6IAA3z");
	this.shape_202.setTransform(305.4,144.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#000000").ss(25,1,1).p("AAAMJIAA4R");
	this.shape_203.setTransform(305.4,146.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#000000").ss(25,1,1).p("AAAMYIAA4v");
	this.shape_204.setTransform(305.4,147.6);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#000000").ss(25,1,1).p("AAAMnIAA5N");
	this.shape_205.setTransform(305.4,149.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#000000").ss(25,1,1).p("AAAM2IAA5r");
	this.shape_206.setTransform(305.4,150.6);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#000000").ss(25,1,1).p("AAANFIAA6J");
	this.shape_207.setTransform(305.4,152.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#000000").ss(25,1,1).p("AAANUIAA6n");
	this.shape_208.setTransform(305.4,153.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#000000").ss(25,1,1).p("AAANjIAA7F");
	this.shape_209.setTransform(305.4,155.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#000000").ss(25,1,1).p("AAANyIAA7j");
	this.shape_210.setTransform(305.4,156.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#000000").ss(25,1,1).p("AAAOBIAA8B");
	this.shape_211.setTransform(305.4,158.2);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#000000").ss(25,1,1).p("AAAOQIAA8f");
	this.shape_212.setTransform(305.4,159.7);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#000000").ss(25,1,1).p("AAAOfIAA89");
	this.shape_213.setTransform(305.4,161.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#000000").ss(25,1,1).p("AAAOuIAA9b");
	this.shape_214.setTransform(305.4,162.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#000000").ss(25,1,1).p("AAAO9IAA95");
	this.shape_215.setTransform(305.4,164.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#000000").ss(25,1,1).p("AAAPMIAA+X");
	this.shape_216.setTransform(305.4,165.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#000000").ss(25,1,1).p("AAAPbIAA+1");
	this.shape_217.setTransform(305.4,167.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#000000").ss(25,1,1).p("AAAPqIAA/T");
	this.shape_218.setTransform(305.4,168.8);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#000000").ss(25,1,1).p("AAAP5IAA/x");
	this.shape_219.setTransform(305.4,170.3);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#000000").ss(25,1,1).p("AAAQIMAAAggP");
	this.shape_220.setTransform(305.4,171.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#000000").ss(25,1,1).p("AAAQXMAAAggt");
	this.shape_221.setTransform(305.4,173.3);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#000000").ss(25,1,1).p("AAAQmMAAAghL");
	this.shape_222.setTransform(305.4,174.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#000000").ss(25,1,1).p("AAAQ1MAAAghp");
	this.shape_223.setTransform(305.4,176.3);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#000000").ss(25,1,1).p("AAAREMAAAgiH");
	this.shape_224.setTransform(305.4,177.8);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#000000").ss(25,1,1).p("AAARTMAAAgil");
	this.shape_225.setTransform(305.4,179.4);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#000000").ss(25,1,1).p("AAARiMAAAgjD");
	this.shape_226.setTransform(305.4,180.9);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#000000").ss(25,1,1).p("AAARxMAAAgjh");
	this.shape_227.setTransform(305.4,182.4);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#000000").ss(25,1,1).p("AAASAMAAAgj/");
	this.shape_228.setTransform(305.4,183.9);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#000000").ss(25,1,1).p("AAASPMAAAgkd");
	this.shape_229.setTransform(305.4,185.4);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#000000").ss(25,1,1).p("AAASeMAAAgk7");
	this.shape_230.setTransform(305.4,186.9);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#000000").ss(25,1,1).p("AAAStMAAAglZ");
	this.shape_231.setTransform(305.4,188.4);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#000000").ss(25,1,1).p("AAAS8MAAAgl3");
	this.shape_232.setTransform(305.4,190);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#000000").ss(25,1,1).p("AAATLMAAAgmV");
	this.shape_233.setTransform(305.4,191.5);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#000000").ss(25,1,1).p("AAATaMAAAgmz");
	this.shape_234.setTransform(305.4,193);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#000000").ss(25,1,1).p("AAATpMAAAgnR");
	this.shape_235.setTransform(305.4,194.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#000000").ss(25,1,1).p("AAAT4MAAAgnv");
	this.shape_236.setTransform(305.4,196);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#000000").ss(25,1,1).p("AAAUHMAAAgoN");
	this.shape_237.setTransform(305.4,197.5);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#000000").ss(25,1,1).p("AAAUWMAAAgor");
	this.shape_238.setTransform(305.4,199);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#000000").ss(25,1,1).p("AAAUlMAAAgpJ");
	this.shape_239.setTransform(305.4,200.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#000000").ss(25,1,1).p("AAAU0MAAAgpn");
	this.shape_240.setTransform(305.4,202.1);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#000000").ss(25,1,1).p("AAAVDMAAAgqF");
	this.shape_241.setTransform(305.4,203.6);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#000000").ss(25,1,1).p("AAAVSMAAAgqj");
	this.shape_242.setTransform(305.4,205.1);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#000000").ss(25,1,1).p("AAAVhMAAAgrB");
	this.shape_243.setTransform(305.4,206.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#000000").ss(25,1,1).p("AAAVwMAAAgrf");
	this.shape_244.setTransform(305.4,208.1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#000000").ss(25,1,1).p("AAAV/MAAAgr9");
	this.shape_245.setTransform(305.4,209.6);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#000000").ss(25,1,1).p("AAAWOMAAAgsb");
	this.shape_246.setTransform(305.4,211.2);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#000000").ss(25,1,1).p("AAAWdMAAAgs5");
	this.shape_247.setTransform(305.4,212.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#000000").ss(25,1,1).p("AAAWsMAAAgtX");
	this.shape_248.setTransform(305.4,214.2);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#000000").ss(25,1,1).p("AAAW7MAAAgt1");
	this.shape_249.setTransform(305.4,215.7);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#000000").ss(25,1,1).p("AAAXKMAAAguT");
	this.shape_250.setTransform(305.4,217.2);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#000000").ss(25,1,1).p("AAAXZMAAAgux");
	this.shape_251.setTransform(305.4,218.7);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#000000").ss(25,1,1).p("AAAXoMAAAgvP");
	this.shape_252.setTransform(305.4,220.2);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#000000").ss(25,1,1).p("AAAX3MAAAgvt");
	this.shape_253.setTransform(305.4,221.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#000000").ss(25,1,1).p("AAA4FMAAAAwL");
	this.shape_254.setTransform(305.4,223.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_152}]},9).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).wait(374));

	// Base
	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(290.6,259.4);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(485));

	// Background
	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_255.setTransform(275,275,3.373,2.543);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_256.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_256},{t:this.shape_255}]}).wait(485));

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