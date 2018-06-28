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


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Au1XdQmum1gBrYMAACggPQABioCdAAQCjAAgBCoMAABAgPQABJEFHFQQEkEwGxAAQGzAAErkuQFLlQAApCMAAAggPQAAisCeAAQCiAAAACsMAAAAgPQAALWm2G2QmGGIotAAQovAAmCmLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138,-189.6,276.1,379.2);


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
	this.shape.graphics.f("#000000").s().p("AjXjAIAJAFIA0AbQAaAPAcAMQAbAMAaAFQAbAGAaAAQAcACAcgHQAZgHAagOIA1gcQAagOAYgPIjaGDg");
	this.shape.setTransform(0,-1,0.563,0.563);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.1,-11.9,24.3,21.9);


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
	this.instance = new lib.ar_triangle("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(0.1,-91.8,1,1,0.7,0,0,-0.1,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,scaleX:1,scaleY:1,rotation:-50.7,guide:{path:[0.2,-91.7,0.2,6.7,0.2,105.2,0.1,107.9,0.1,110.7,0.1,113.3,0.2,115.9,2,142.7,21.7,162.1,24.3,164.7,27,166.9], orient:'auto'}},114).to({regX:-0.1,scaleX:1,scaleY:1,rotation:-145.6,guide:{path:[27,166.9,28.3,168,29.6,169,48.9,183.5,74.1,183.5,88.9,183.5,101.6,178.6,115.4,173.1,126.7,162.1,131.9,157,135.9,151.2], orient:'auto'}},60).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_89 = new cjs.Graphics().p("AwjJeQAAm3E2k2QE3k2G2AAQG3AAE2E2QE3E2AAG3g");
	var mask_graphics_90 = new cjs.Graphics().p("AsEiHQEslAG3gOQG2gPFAEsQFBEsAOG3MghGABEQgOm2EslAg");
	var mask_graphics_91 = new cjs.Graphics().p("Asbh/QEilJG3gdQG1gcFJEhQFLEhAcG2MghCACJQgdm2EhlJg");
	var mask_graphics_92 = new cjs.Graphics().p("Asvh2QEXlTG1gqQG0grFTEXQFTEWArG1Mgg9ADOQgrm1EXlTg");
	var mask_graphics_93 = new cjs.Graphics().p("AtChsQEMlcGzg4QGyg5FcELQFcEMA5GyMgg1AETQg5m0EMlbg");
	var mask_graphics_94 = new cjs.Graphics().p("AtUhhQEAllGyhGQGwhHFkEAQFlEABHGwMggrAFXQhHmyEAljg");
	var mask_graphics_95 = new cjs.Graphics().p("AtlhWQD1lsGvhVQGuhVFsD0QFtD1BVGuMggfAGaQhVmvD0lsg");
	var mask_graphics_96 = new cjs.Graphics().p("AtzhKQDol0GshjQGrhjF0DpQF1DpBiGqMggQAHdQhjmrDpl0g");
	var mask_graphics_97 = new cjs.Graphics().p("AuBg9QDdl8GohwQGnhxF8DcQF8DdBwGnI//IgQhxmoDcl7g");
	var mask_graphics_98 = new cjs.Graphics().p("AuNgwQDRmCGkh+QGjh/GDDQQGDDQB+GkI/tJiQh+mlDPmCg");
	var mask_graphics_99 = new cjs.Graphics().p("AuXghQDDmJGgiMQGgiMGIDDQGKDDCMGfI/YKkQiMmgDDmIg");
	var mask_graphics_100 = new cjs.Graphics().p("AuggTQC3mPGbiZQGaiZGPC2QGQC3CZGaI/BLkQiZmbC2mPg");
	var mask_graphics_101 = new cjs.Graphics().p("AuogDQCqmVGWimQGVinGVCpQGVCqCnGVI+oMkQinmWCpmUg");
	var mask_graphics_102 = new cjs.Graphics().p("AuuAMQCdmZGQi0QGQizGaCcQGaCcC0GRI+NNiQi0mQCcmbg");
	var mask_graphics_103 = new cjs.Graphics().p("AuyAdQCPmeGLjBQGKjAGeCPQGfCODBGLI9wOhQjBmLCPmfg");
	var mask_graphics_104 = new cjs.Graphics().p("Au1AuQCCmiGEjNQGEjOGiCCQGkCBDNGEI9RPeQjNmECBmkg");
	var mask_graphics_105 = new cjs.Graphics().p("Au3BAQB0mmF+jaQF9jZGmBzQGoB0DZF9I8vQaQjal9Bzmog");
	var mask_graphics_106 = new cjs.Graphics().p("Au2BTQBmmqF2jmQF2jmGpBmQGsBmDlF1I8MRWQjml2Bmmrg");
	var mask_graphics_107 = new cjs.Graphics().p("Au1BmQBZmtFujyQFujyGtBYQGuBYDyFuI7nSPQjyluBXmug");
	var mask_graphics_108 = new cjs.Graphics().p("AuyB6QBLmwFmj+QFmj9GvBJQGxBKD+FmI7ATIQj+lmBJmwg");
	var mask_graphics_109 = new cjs.Graphics().p("AutCOQA8myFekJQFekJGxA7QG0A8EJFeI6YT/QkJldA7mzg");
	var mask_graphics_110 = new cjs.Graphics().p("AunCiQAvmzFVkVQFUkUG0AuQG1AtEUFVI5uU2QkUlVAtm1g");
	var mask_graphics_111 = new cjs.Graphics().p("AufC3QAgm0FMkgQFMkfG0AgQG3AfEfFMI5CVqQkflMAfm2g");
	var mask_graphics_112 = new cjs.Graphics().p("AuVDNQARm2FDkqQFCkpG1ARQG3AREqFCI4TWeQkqlCARm3g");
	var mask_graphics_113 = new cjs.Graphics().p("AuKDjQADm2E5k0QE4k0G2ADQG3ADE0E4I3kXPQk0k4ADm3g");
	var mask_graphics_114 = new cjs.Graphics().p("At+D5QgKm2Euk+QEuk+G2gLQG3gLE+EuI2zX/Qk+kugMm3g");
	var mask_graphics_115 = new cjs.Graphics().p("AtvEQQgZm1EjlIQEklIG1gZQG3gaFHEkI2AYuQlIkkgZm2g");
	var mask_graphics_116 = new cjs.Graphics().p("AtgEnQgnm0EZlRQEZlRG0goQG1gnFREZI1MZaQlRkZgom1g");
	var mask_graphics_117 = new cjs.Graphics().p("AtOE+Qg2myEOlaQEOlaGyg2QG0g2FaEOI0WaGQlakOg2m0g");
	var mask_graphics_118 = new cjs.Graphics().p("As8FWQhDmxECliQEDljGwhDQGyhEFjECIzgavQljkChEmyg");
	var mask_graphics_119 = new cjs.Graphics().p("AsoFuQhRmuD3lrQD3lrGuhRQGvhSFrD3IyobWQlqj3hTmvg");
	var mask_graphics_120 = new cjs.Graphics().p("AsSGGQhgmrDslzQDrlyGrhgQGshgFzDrIxvb9Qlyjrhgmtg");
	var mask_graphics_121 = new cjs.Graphics().p("Ar7GfQhumoDfl6QDfl6GphuQGohtF6DeIwzchQl6jfhumpg");
	var mask_graphics_122 = new cjs.Graphics().p("ArjG4Qh7mmDTmAQDSmBGlh7QGkh7GBDSIv3dCQmBjSh8mlg");
	var mask_graphics_123 = new cjs.Graphics().p("ArKHQQiImhDGmGQDGmIGgiJQGhiJGHDGIu7diQmHjGiKmhg");
	var mask_graphics_124 = new cjs.Graphics().p("AqvHpQiWmcC5mNQC6mOGbiWQGciXGOC6It9eAQmOi5iXmdg");
	var mask_graphics_125 = new cjs.Graphics().p("AqTICQijmXCsmSQCsmUGXikQGXijGTCsIs+ecQmUisikmYg");
	var mask_graphics_126 = new cjs.Graphics().p("Ap1IcQixmSCfmYQCfmZGRixQGRixGZCfIr+e2QmZifixmRg");
	var mask_graphics_127 = new cjs.Graphics().p("ApXI1Qi9mMCRmdQCSmeGLi9QGLi+GeCRIq/fOQmdiSi+mLg");
	var mask_graphics_128 = new cjs.Graphics().p("Ao4JOQjKmFCFmiQCEmiGFjKQGEjLGjCEIp+fkQmiiFjLmFg");
	var mask_graphics_129 = new cjs.Graphics().p("AoXJoQjWl/B2mmQB3mmF+jXQF+jXGmB2Io8f3Qmmh2jXl+g");
	var mask_graphics_130 = new cjs.Graphics().p("An1KBQjjl4BpmpQBpmqF3jjQF2jjGqBoMgH5AgJQmphpjkl3g");
	var mask_graphics_131 = new cjs.Graphics().p("AnSKaQjvlwBbmsQBbmtFvjvQFvjwGtBbMgG2AgYQmthbjvlwg");
	var mask_graphics_132 = new cjs.Graphics().p("AmuKzQj7loBNmvQBNmwFnj6QFnj8GwBNMgFzAglQmvhNj7log");
	var mask_graphics_133 = new cjs.Graphics().p("AmJLNQkHlgA/mxQA/mzFfkGQFfkHGyA/MgEvAgwQmyg/kGlfg");
	var mask_graphics_134 = new cjs.Graphics().p("AlkLmQkRlXAxmzQAwm0FXkSQFWkSG0AwMgDrAg5QmzgxkTlWg");
	var mask_graphics_135 = new cjs.Graphics().p("Ak9L+QkclOAim0QAjm1FNkdQFNkdG2AjMgCnAg/Qm1gjkdlOg");
	var mask_graphics_136 = new cjs.Graphics().p("AkVMXQknlEAUm3QAUm1FEknQFEkoG2AUMgBiAhEQm2gVknlEg");
	var mask_graphics_137 = new cjs.Graphics().p("AjsMwQkyk7AGm3QAGm1E7kyQE5kyG3AGMgAeAhFQm2gGkxk6g");
	var mask_graphics_138 = new cjs.Graphics().p("AjWNIQk8kxgIm3QgIm1Ewk8QEwk8G2gIMAAnAhFIgWAAQmoAAkzkog");
	var mask_graphics_139 = new cjs.Graphics().p("AjONfQlGkmgWm2QgWm1EllGQEmlGG2gWMABsAhDQgfABgfAAQmPAAkukRg");
	var mask_graphics_140 = new cjs.Graphics().p("AjFN2QlPkcglm1Qgkm0EblPQEblPG1glMACwAg+QgyAEgxAAQl5AAknj6g");
	var mask_graphics_141 = new cjs.Graphics().p("Ai8OLQlYkQgym0QgzmzEQlYQERlYGygyMAD1Ag3QhEAIhCAAQlkAAkhjmg");
	var mask_graphics_142 = new cjs.Graphics().p("AixOgQlhkFhAmyQhBmxEFlgQEFlhGxhBMAE4AguQhWANhTAAQlPAAkZjRg");
	var mask_graphics_143 = new cjs.Graphics().p("AimO0Qlpj6hPmwQhOmuD5lpQD6lpGuhPMAF8AgjQhnAThkAAQk7AAkRi9g");
	var mask_graphics_144 = new cjs.Graphics().p("AiaPHQlxjuhcmtQhdmsDtlwQDulxGshdMAHAAgVQh5Aah0AAQkoAAkIiqg");
	var mask_graphics_145 = new cjs.Graphics().p("AiOPZQl4jihqmqQhrmoDhl4QDil5GphrMAICAgGQiIAiiEAAQkWAAj/iYg");
	var mask_graphics_146 = new cjs.Graphics().p("AiAPqQl/jWh5mmQh4mlDVl/QDVl/Glh5IJFf0QiYAsiTAAQkFAAj0iIg");
	var mask_graphics_147 = new cjs.Graphics().p("AhyP6QmGjJiGmiQiGmhDImFQDJmHGhiGIKHfgQioA2ijAAQjzAAjph4g");
	var mask_graphics_148 = new cjs.Graphics().p("AhkQJQmMi8iTmeQiUmdC8mLQC8mNGdiTILHfKQi2BBiyAAQjkAAjdhpg");
	var mask_graphics_149 = new cjs.Graphics().p("AhUQXQmSivihmYQihmZCvmQQCvmTGYihIMHeyQjDBNjDAAQjTAAjQhbg");
	var mask_graphics_150 = new cjs.Graphics().p("AhEQkQmYiiiumTQiumSCimXQCimYGSiuINHeYQjRBajSAAQjDAAjDhOg");
	var mask_graphics_151 = new cjs.Graphics().p("Ag0QwQmdiUi7mNQi6mNCUmcQCVmdGMi7IOGd8QjeBojiAAQizAAi2hCg");
	var mask_graphics_152 = new cjs.Graphics().p("AgjQ8QmhiIjImGQjHmHCGmgQCImiGGjHIPDddQjpB3jzAAQikAAing2g");
	var mask_graphics_153 = new cjs.Graphics().p("AgRRGQmmh6jUmAQjUmAB5mkQB6mmF/jUIQAc9Qj0CHkEAAQiUAAiYgsg");
	var mask_graphics_154 = new cjs.Graphics().p("AAARPQmohsjhl5Qjgl5BrmoQBsmpF5jhIQ7cbQj/CYkVAAQiFAAiJgjg");
	var mask_graphics_155 = new cjs.Graphics().p("AASRXQmrhejtlyQjslxBdmrQBemtFyjsIR1b2QkJCpknAAQh0AAh6gag");
	var mask_graphics_156 = new cjs.Graphics().p("AAlReQmuhQj4lqQj5lpBQmuQBQmwFpj4ISvbQQkSC8k5AAQhlAAhpgTg");
	var mask_graphics_157 = new cjs.Graphics().p("AA5RkQmwhCkEliQkFlhBCmwQBCmyFhkEITnaoQkaDQlOAAQhUAAhXgNg");
	var mask_graphics_158 = new cjs.Graphics().p("ABNRpQmyg1kQlYQkPlZA0myQA0m0FYkPIUdZ/QkhDkliAAQhDAAhGgIg");
	var mask_graphics_159 = new cjs.Graphics().p("ABiRsQm0gmkalPQkblQAmmzQAlm2FQkaIVTZTQkpD6l4AAQgxAAgzgFg");
	var mask_graphics_160 = new cjs.Graphics().p("AB3RvQm1gYkllGQkllGAXm2QAYm1FGkmIWGYnQkuEQmPAAQgfAAgggCg");
	var mask_graphics_161 = new cjs.Graphics().p("ACNRwQm2gJkvk9Qkwk9AJm2QAKm2E8kvIW5X4Qk0EmmnAAIgYAAg");
	var mask_graphics_162 = new cjs.Graphics().p("ApMNCQk6kygFm2QgFm2Ezk6IXpXHQkyE6m3AFIgNAAQmtAAk1kug");
	var mask_graphics_163 = new cjs.Graphics().p("Ao/NaQlDkogUm2QgTm2EolDIYZWVQkoFEm2ATIg0ABQmVAAkwkWg");
	var mask_graphics_164 = new cjs.Graphics().p("AoxNxQlMkegim1Qghm1EdlMIZGViQkdFMm1AiQguAEgsAAQl9AAkrkAg");
	var mask_graphics_165 = new cjs.Graphics().p("AohOGQlWkSgvm0QgwmzESlWIZzUtQkTFWm0AwQhAAHg+AAQlnAAkkjrg");
	var mask_graphics_166 = new cjs.Graphics().p("AoQObQlfkHg9myQg+mxEHlfIacT3QkHFemyA+QhSAMhPAAQlTAAkcjWg");
	var mask_graphics_167 = new cjs.Graphics().p("An+OvQlnj8hMmvQhMmwD8lmIbFS/Qj8FnmwBMQhkARhfAAQk/AAkUjCg");
	var mask_graphics_168 = new cjs.Graphics().p("AnrPCQlvjwhamtQhamsDwlvIbrSGQjwFvmtBaQh0AYhwAAQksAAkLivg");
	var mask_graphics_169 = new cjs.Graphics().p("AnXPUQl3jkhnmpQhomqDkl2IcQRMQjkF2mqBoQiFAhiAAAQkZAAkCieg");
	var mask_graphics_170 = new cjs.Graphics().p("AnCPmQl+jYh1mmQh2mmDYl+IczQRQjYF+mnB2QiUApiQAAQkIAAj3iMg");
	var mask_graphics_171 = new cjs.Graphics().p("AmsP2QmFjLiCmiQiEmiDMmFIdTPVQjLGEmjCEQikAzifAAQj2AAjth8g");
	var mask_graphics_172 = new cjs.Graphics().p("AmVQFQmLi+iQmeQiRmeC/mKIdyOXQi/GLmeCRQiyA+ivAAQjmAAjhhtg");
	var mask_graphics_173 = new cjs.Graphics().p("Al9QUQmRiyiemZQiemZCymQIePNZQiyGRmZCeQjABKi+AAQjWAAjVheg");
	var mask_graphics_174 = new cjs.Graphics().p("AlkQhQmWilirmTQirmUCkmWIeqMaQilGWmUCsQjNBXjPAAQjFAAjIhRg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(89).to({graphics:mask_graphics_89,x:73.5,y:60.6}).wait(1).to({graphics:mask_graphics_90,x:73.5,y:62.3}).wait(1).to({graphics:mask_graphics_91,x:73.4,y:64}).wait(1).to({graphics:mask_graphics_92,x:73.2,y:65.8}).wait(1).to({graphics:mask_graphics_93,x:73,y:67.5}).wait(1).to({graphics:mask_graphics_94,x:72.8,y:69.2}).wait(1).to({graphics:mask_graphics_95,x:72.4,y:70.9}).wait(1).to({graphics:mask_graphics_96,x:72,y:72.5}).wait(1).to({graphics:mask_graphics_97,x:71.6,y:74.2}).wait(1).to({graphics:mask_graphics_98,x:71.1,y:75.9}).wait(1).to({graphics:mask_graphics_99,x:70.6,y:77.5}).wait(1).to({graphics:mask_graphics_100,x:70,y:79.1}).wait(1).to({graphics:mask_graphics_101,x:69.4,y:80.7}).wait(1).to({graphics:mask_graphics_102,x:68.7,y:82.3}).wait(1).to({graphics:mask_graphics_103,x:68,y:83.9}).wait(1).to({graphics:mask_graphics_104,x:67.2,y:85.4}).wait(1).to({graphics:mask_graphics_105,x:66.4,y:86.9}).wait(1).to({graphics:mask_graphics_106,x:65.5,y:88.4}).wait(1).to({graphics:mask_graphics_107,x:64.6,y:89.8}).wait(1).to({graphics:mask_graphics_108,x:63.6,y:91.2}).wait(1).to({graphics:mask_graphics_109,x:62.6,y:92.6}).wait(1).to({graphics:mask_graphics_110,x:61.6,y:94}).wait(1).to({graphics:mask_graphics_111,x:60.5,y:95.3}).wait(1).to({graphics:mask_graphics_112,x:59.4,y:96.6}).wait(1).to({graphics:mask_graphics_113,x:58.2,y:97.8}).wait(1).to({graphics:mask_graphics_114,x:57,y:99}).wait(1).to({graphics:mask_graphics_115,x:55.7,y:100.2}).wait(1).to({graphics:mask_graphics_116,x:54.4,y:101.3}).wait(1).to({graphics:mask_graphics_117,x:53,y:102.4}).wait(1).to({graphics:mask_graphics_118,x:51.6,y:103.4}).wait(1).to({graphics:mask_graphics_119,x:50.2,y:104.4}).wait(1).to({graphics:mask_graphics_120,x:48.7,y:105.4}).wait(1).to({graphics:mask_graphics_121,x:47.3,y:106.3}).wait(1).to({graphics:mask_graphics_122,x:45.7,y:107.1}).wait(1).to({graphics:mask_graphics_123,x:44.2,y:107.9}).wait(1).to({graphics:mask_graphics_124,x:42.7,y:108.7}).wait(1).to({graphics:mask_graphics_125,x:41.1,y:109.4}).wait(1).to({graphics:mask_graphics_126,x:39.5,y:110}).wait(1).to({graphics:mask_graphics_127,x:37.9,y:110.6}).wait(1).to({graphics:mask_graphics_128,x:36.3,y:111.2}).wait(1).to({graphics:mask_graphics_129,x:34.6,y:111.6}).wait(1).to({graphics:mask_graphics_130,x:33,y:112.1}).wait(1).to({graphics:mask_graphics_131,x:31.3,y:112.5}).wait(1).to({graphics:mask_graphics_132,x:29.7,y:112.8}).wait(1).to({graphics:mask_graphics_133,x:28,y:113.1}).wait(1).to({graphics:mask_graphics_134,x:26.3,y:113.3}).wait(1).to({graphics:mask_graphics_135,x:24.6,y:113.5}).wait(1).to({graphics:mask_graphics_136,x:22.9,y:113.6}).wait(1).to({graphics:mask_graphics_137,x:21.2,y:113.6}).wait(1).to({graphics:mask_graphics_138,x:21.5,y:113.6}).wait(1).to({graphics:mask_graphics_139,x:23.2,y:113.6}).wait(1).to({graphics:mask_graphics_140,x:24.9,y:113.6}).wait(1).to({graphics:mask_graphics_141,x:26.6,y:113.7}).wait(1).to({graphics:mask_graphics_142,x:28.2,y:113.7}).wait(1).to({graphics:mask_graphics_143,x:29.9,y:113.7}).wait(1).to({graphics:mask_graphics_144,x:31.6,y:113.7}).wait(1).to({graphics:mask_graphics_145,x:33.2,y:113.7}).wait(1).to({graphics:mask_graphics_146,x:34.9,y:113.8}).wait(1).to({graphics:mask_graphics_147,x:36.5,y:113.8}).wait(1).to({graphics:mask_graphics_148,x:38.1,y:113.8}).wait(1).to({graphics:mask_graphics_149,x:39.7,y:113.8}).wait(1).to({graphics:mask_graphics_150,x:41.3,y:113.8}).wait(1).to({graphics:mask_graphics_151,x:42.9,y:113.8}).wait(1).to({graphics:mask_graphics_152,x:44.4,y:113.8}).wait(1).to({graphics:mask_graphics_153,x:46,y:113.8}).wait(1).to({graphics:mask_graphics_154,x:47.5,y:113.8}).wait(1).to({graphics:mask_graphics_155,x:49,y:113.7}).wait(1).to({graphics:mask_graphics_156,x:50.4,y:113.7}).wait(1).to({graphics:mask_graphics_157,x:51.8,y:113.7}).wait(1).to({graphics:mask_graphics_158,x:53.2,y:113.7}).wait(1).to({graphics:mask_graphics_159,x:54.6,y:113.7}).wait(1).to({graphics:mask_graphics_160,x:55.9,y:113.7}).wait(1).to({graphics:mask_graphics_161,x:57.2,y:113.6}).wait(1).to({graphics:mask_graphics_162,x:58.4,y:113.6}).wait(1).to({graphics:mask_graphics_163,x:59.6,y:113.6}).wait(1).to({graphics:mask_graphics_164,x:60.7,y:113.7}).wait(1).to({graphics:mask_graphics_165,x:61.8,y:113.7}).wait(1).to({graphics:mask_graphics_166,x:62.8,y:113.7}).wait(1).to({graphics:mask_graphics_167,x:63.8,y:113.7}).wait(1).to({graphics:mask_graphics_168,x:64.7,y:113.7}).wait(1).to({graphics:mask_graphics_169,x:65.6,y:113.8}).wait(1).to({graphics:mask_graphics_170,x:66.5,y:113.8}).wait(1).to({graphics:mask_graphics_171,x:67.3,y:113.8}).wait(1).to({graphics:mask_graphics_172,x:68.1,y:113.8}).wait(1).to({graphics:mask_graphics_173,x:68.8,y:113.8}).wait(1).to({graphics:mask_graphics_174,x:69.4,y:113.8}).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AKpQeQgpA5g1A1QhxBuiJA2Qh/AxiUAAQj9AAjBiRQgogfgmglQjHjDgRkLQgCgaAAgbQAAgbACgbIAA+z");
	this.shape.setTransform(68,45.8);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(89).to({_off:false},0).wait(86));

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("Ah0AeIAAg7IDpAAIAAA7g");
	var mask_1_graphics_1 = new cjs.Graphics().p("Ah0AqIAAhTIDpAAIAABTg");
	var mask_1_graphics_2 = new cjs.Graphics().p("Ah0A2IAAhrIDpAAIAABrg");
	var mask_1_graphics_3 = new cjs.Graphics().p("Ah0BCIAAiDIDpAAIAACDg");
	var mask_1_graphics_4 = new cjs.Graphics().p("Ah0BOIAAibIDpAAIAACbg");
	var mask_1_graphics_5 = new cjs.Graphics().p("Ah0BaIAAizIDpAAIAACzg");
	var mask_1_graphics_6 = new cjs.Graphics().p("Ah0BmIAAjLIDpAAIAADLg");
	var mask_1_graphics_7 = new cjs.Graphics().p("Ah0BxIAAjhIDpAAIAADhg");
	var mask_1_graphics_8 = new cjs.Graphics().p("Ah0B9IAAj5IDpAAIAAD5g");
	var mask_1_graphics_9 = new cjs.Graphics().p("Ah0CJIAAkRIDpAAIAAERg");
	var mask_1_graphics_10 = new cjs.Graphics().p("Ah0CVIAAkpIDpAAIAAEpg");
	var mask_1_graphics_11 = new cjs.Graphics().p("Ah0ChIAAlBIDpAAIAAFBg");
	var mask_1_graphics_12 = new cjs.Graphics().p("Ah0CtIAAlZIDpAAIAAFZg");
	var mask_1_graphics_13 = new cjs.Graphics().p("Ah0C4IAAlwIDpAAIAAFwg");
	var mask_1_graphics_14 = new cjs.Graphics().p("Ah0DEIAAmHIDpAAIAAGHg");
	var mask_1_graphics_15 = new cjs.Graphics().p("Ah0DQIAAmfIDpAAIAAGfg");
	var mask_1_graphics_16 = new cjs.Graphics().p("Ah0DcIAAm3IDpAAIAAG3g");
	var mask_1_graphics_17 = new cjs.Graphics().p("Ah0DoIAAnPIDpAAIAAHPg");
	var mask_1_graphics_18 = new cjs.Graphics().p("Ah0D0IAAnnIDpAAIAAHng");
	var mask_1_graphics_19 = new cjs.Graphics().p("Ah0EAIAAn/IDpAAIAAH/g");
	var mask_1_graphics_20 = new cjs.Graphics().p("Ah0ELIAAoWIDpAAIAAIWg");
	var mask_1_graphics_21 = new cjs.Graphics().p("Ah0EXIAAouIDpAAIAAIug");
	var mask_1_graphics_22 = new cjs.Graphics().p("Ah0EjIAApFIDpAAIAAJFg");
	var mask_1_graphics_23 = new cjs.Graphics().p("Ah0EvIgBpdIDpAAIABJdg");
	var mask_1_graphics_24 = new cjs.Graphics().p("Ah0E7IgBp1IDpAAIABJ1g");
	var mask_1_graphics_25 = new cjs.Graphics().p("Ah0FHIgBqNIDpAAIABKNg");
	var mask_1_graphics_26 = new cjs.Graphics().p("Ah0FTIgBqlIDpAAIABKlg");
	var mask_1_graphics_27 = new cjs.Graphics().p("Ah0FfIgBq9IDpAAIABK9g");
	var mask_1_graphics_28 = new cjs.Graphics().p("Ah0FrIgBrVIDpAAIABLVg");
	var mask_1_graphics_29 = new cjs.Graphics().p("Ah0F2IgBrrIDpAAIABLrg");
	var mask_1_graphics_30 = new cjs.Graphics().p("Ah0GCIgBsDIDpAAIABMDg");
	var mask_1_graphics_31 = new cjs.Graphics().p("Ah0GOIgBsbIDpAAIABMbg");
	var mask_1_graphics_32 = new cjs.Graphics().p("Ah0GaIgBszIDpAAIABMzg");
	var mask_1_graphics_33 = new cjs.Graphics().p("Ah0GmIgBtLIDpAAIABNLg");
	var mask_1_graphics_34 = new cjs.Graphics().p("Ah0GyIgBtjIDpAAIABNjg");
	var mask_1_graphics_35 = new cjs.Graphics().p("Ah0G9IgBt6IDpAAIABN6g");
	var mask_1_graphics_36 = new cjs.Graphics().p("Ah0HKIgBuTIDpAAIABOTg");
	var mask_1_graphics_37 = new cjs.Graphics().p("Ah0HVIgBupIDpAAIABOpg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AhzHhIgCvBIDpAAIACPBg");
	var mask_1_graphics_39 = new cjs.Graphics().p("AhzHtIgCvZIDpAAIACPZg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AhzH5IgCvxIDpAAIACPxg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AhzIFIgCwJIDpAAIACQJg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AhzIQIgCwgIDpAAIACQgg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AhzIcIgCw4IDpAAIACQ4g");
	var mask_1_graphics_44 = new cjs.Graphics().p("AhzIoIgCxPIDpAAIACRPg");
	var mask_1_graphics_45 = new cjs.Graphics().p("AhzI0IgCxnIDpAAIACRng");
	var mask_1_graphics_46 = new cjs.Graphics().p("AhzJAIgCx/IDpAAIACR/g");
	var mask_1_graphics_47 = new cjs.Graphics().p("AhzJMIgCyXIDpAAIACSXg");
	var mask_1_graphics_48 = new cjs.Graphics().p("AhzJYIgCyvIDpAAIACSvg");
	var mask_1_graphics_49 = new cjs.Graphics().p("AhzJkIgCzHIDpAAIACTHg");
	var mask_1_graphics_50 = new cjs.Graphics().p("AhzJwIgCzfIDpAAIACTfg");
	var mask_1_graphics_51 = new cjs.Graphics().p("AhzJ7IgCz1IDpAAIACT1g");
	var mask_1_graphics_52 = new cjs.Graphics().p("AhzKHIgC0NIDpAAIACUNg");
	var mask_1_graphics_53 = new cjs.Graphics().p("AhzKTIgC0lIDpAAIACUlg");
	var mask_1_graphics_54 = new cjs.Graphics().p("AhzKfIgC09IDpAAIACU9g");
	var mask_1_graphics_55 = new cjs.Graphics().p("AhzKrIgC1VIDpAAIACVVg");
	var mask_1_graphics_56 = new cjs.Graphics().p("AhzK3IgC1tIDpAAIACVtg");
	var mask_1_graphics_57 = new cjs.Graphics().p("AhzLDIgC2FIDpAAIACWFg");
	var mask_1_graphics_58 = new cjs.Graphics().p("AhzLPIgC2dIDpAAIACWdg");
	var mask_1_graphics_59 = new cjs.Graphics().p("AhzLaIgC2zIDpAAIACWzg");
	var mask_1_graphics_60 = new cjs.Graphics().p("AhzLmIgC3LIDpAAIACXLg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AhzLyIgC3jIDpAAIACXjg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AhzL+IgC37IDpAAIACX7g");
	var mask_1_graphics_63 = new cjs.Graphics().p("AhzMKIgC4TIDpAAIACYTg");
	var mask_1_graphics_64 = new cjs.Graphics().p("AhzMVIgC4qIDpAAIACYqg");
	var mask_1_graphics_65 = new cjs.Graphics().p("AhzMhIgC5CIDpAAIACZCg");
	var mask_1_graphics_66 = new cjs.Graphics().p("AhzMtIgC5ZIDpAAIACZZg");
	var mask_1_graphics_67 = new cjs.Graphics().p("AhzM5IgC5xIDpAAIACZxg");
	var mask_1_graphics_68 = new cjs.Graphics().p("AhzNFIgC6JIDpAAIACaJg");
	var mask_1_graphics_69 = new cjs.Graphics().p("AhzNRIgC6hIDpAAIACahg");
	var mask_1_graphics_70 = new cjs.Graphics().p("AhzNdIgC65IDpAAIACa5g");
	var mask_1_graphics_71 = new cjs.Graphics().p("AhzNpIgC7RIDpAAIACbRg");
	var mask_1_graphics_72 = new cjs.Graphics().p("AhzN1IgC7pIDpAAIACbpg");
	var mask_1_graphics_73 = new cjs.Graphics().p("AhzOAIgC8AIDpAAIACcAg");
	var mask_1_graphics_74 = new cjs.Graphics().p("AhzOMIgC8XIDpAAIACcXg");
	var mask_1_graphics_75 = new cjs.Graphics().p("AhzOYIgC8vIDpAAIACcvg");
	var mask_1_graphics_76 = new cjs.Graphics().p("AhzOkIgC9HIDpAAIACdHg");
	var mask_1_graphics_77 = new cjs.Graphics().p("AhzOwIgC9fIDpAAIACdfg");
	var mask_1_graphics_78 = new cjs.Graphics().p("AhzO8IgC93IDpAAIACd3g");
	var mask_1_graphics_79 = new cjs.Graphics().p("AhzPHIgC+OIDpAAIACeOg");
	var mask_1_graphics_80 = new cjs.Graphics().p("AhzPUIgC+nIDpAAIACeng");
	var mask_1_graphics_81 = new cjs.Graphics().p("AhzPfIgC+9IDpAAIACe9g");
	var mask_1_graphics_82 = new cjs.Graphics().p("AhyPrIgE/VIDpAAIAEfVg");
	var mask_1_graphics_83 = new cjs.Graphics().p("AhyP3IgE/tIDpAAIAEftg");
	var mask_1_graphics_84 = new cjs.Graphics().p("AhyQDMgAEggFIDpAAMAAEAgFg");
	var mask_1_graphics_85 = new cjs.Graphics().p("AhyQPMgAEggdIDpAAMAAEAgdg");
	var mask_1_graphics_86 = new cjs.Graphics().p("AhyQbMgAEgg1IDpAAMAAEAg1g");
	var mask_1_graphics_87 = new cjs.Graphics().p("AhyQmMgAEghMIDpAAMAAEAhMg");
	var mask_1_graphics_88 = new cjs.Graphics().p("AhyQzMgAEghlIDpAAMAAEAhlg");
	var mask_1_graphics_89 = new cjs.Graphics().p("AhyQ+MgAEgh7IDpAAMAAEAh7g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:0.3,y:-93.3}).wait(1).to({graphics:mask_1_graphics_1,x:0.3,y:-92.1}).wait(1).to({graphics:mask_1_graphics_2,x:0.3,y:-90.9}).wait(1).to({graphics:mask_1_graphics_3,x:0.3,y:-89.7}).wait(1).to({graphics:mask_1_graphics_4,x:0.3,y:-88.5}).wait(1).to({graphics:mask_1_graphics_5,x:0.3,y:-87.3}).wait(1).to({graphics:mask_1_graphics_6,x:0.3,y:-86.1}).wait(1).to({graphics:mask_1_graphics_7,x:0.3,y:-85}).wait(1).to({graphics:mask_1_graphics_8,x:0.3,y:-83.8}).wait(1).to({graphics:mask_1_graphics_9,x:0.3,y:-82.6}).wait(1).to({graphics:mask_1_graphics_10,x:0.3,y:-81.4}).wait(1).to({graphics:mask_1_graphics_11,x:0.3,y:-80.2}).wait(1).to({graphics:mask_1_graphics_12,x:0.3,y:-79}).wait(1).to({graphics:mask_1_graphics_13,x:0.3,y:-77.8}).wait(1).to({graphics:mask_1_graphics_14,x:0.3,y:-76.7}).wait(1).to({graphics:mask_1_graphics_15,x:0.3,y:-75.5}).wait(1).to({graphics:mask_1_graphics_16,x:0.3,y:-74.3}).wait(1).to({graphics:mask_1_graphics_17,x:0.3,y:-73.1}).wait(1).to({graphics:mask_1_graphics_18,x:0.3,y:-71.9}).wait(1).to({graphics:mask_1_graphics_19,x:0.3,y:-70.7}).wait(1).to({graphics:mask_1_graphics_20,x:0.3,y:-69.5}).wait(1).to({graphics:mask_1_graphics_21,x:0.3,y:-68.3}).wait(1).to({graphics:mask_1_graphics_22,x:0.3,y:-67.2}).wait(1).to({graphics:mask_1_graphics_23,x:0.4,y:-66}).wait(1).to({graphics:mask_1_graphics_24,x:0.4,y:-64.8}).wait(1).to({graphics:mask_1_graphics_25,x:0.4,y:-63.6}).wait(1).to({graphics:mask_1_graphics_26,x:0.4,y:-62.4}).wait(1).to({graphics:mask_1_graphics_27,x:0.4,y:-61.2}).wait(1).to({graphics:mask_1_graphics_28,x:0.4,y:-60}).wait(1).to({graphics:mask_1_graphics_29,x:0.4,y:-58.9}).wait(1).to({graphics:mask_1_graphics_30,x:0.4,y:-57.7}).wait(1).to({graphics:mask_1_graphics_31,x:0.4,y:-56.5}).wait(1).to({graphics:mask_1_graphics_32,x:0.4,y:-55.3}).wait(1).to({graphics:mask_1_graphics_33,x:0.4,y:-54.1}).wait(1).to({graphics:mask_1_graphics_34,x:0.4,y:-52.9}).wait(1).to({graphics:mask_1_graphics_35,x:0.4,y:-51.7}).wait(1).to({graphics:mask_1_graphics_36,x:0.4,y:-50.5}).wait(1).to({graphics:mask_1_graphics_37,x:0.4,y:-49.4}).wait(1).to({graphics:mask_1_graphics_38,x:0.4,y:-48.2}).wait(1).to({graphics:mask_1_graphics_39,x:0.4,y:-47}).wait(1).to({graphics:mask_1_graphics_40,x:0.4,y:-45.8}).wait(1).to({graphics:mask_1_graphics_41,x:0.4,y:-44.6}).wait(1).to({graphics:mask_1_graphics_42,x:0.4,y:-43.4}).wait(1).to({graphics:mask_1_graphics_43,x:0.4,y:-42.2}).wait(1).to({graphics:mask_1_graphics_44,x:0.4,y:-41.1}).wait(1).to({graphics:mask_1_graphics_45,x:0.4,y:-39.9}).wait(1).to({graphics:mask_1_graphics_46,x:0.4,y:-38.7}).wait(1).to({graphics:mask_1_graphics_47,x:0.4,y:-37.5}).wait(1).to({graphics:mask_1_graphics_48,x:0.4,y:-36.3}).wait(1).to({graphics:mask_1_graphics_49,x:0.4,y:-35.1}).wait(1).to({graphics:mask_1_graphics_50,x:0.4,y:-33.9}).wait(1).to({graphics:mask_1_graphics_51,x:0.4,y:-32.8}).wait(1).to({graphics:mask_1_graphics_52,x:0.4,y:-31.6}).wait(1).to({graphics:mask_1_graphics_53,x:0.4,y:-30.4}).wait(1).to({graphics:mask_1_graphics_54,x:0.4,y:-29.2}).wait(1).to({graphics:mask_1_graphics_55,x:0.4,y:-28}).wait(1).to({graphics:mask_1_graphics_56,x:0.4,y:-26.8}).wait(1).to({graphics:mask_1_graphics_57,x:0.4,y:-25.6}).wait(1).to({graphics:mask_1_graphics_58,x:0.4,y:-24.4}).wait(1).to({graphics:mask_1_graphics_59,x:0.4,y:-23.3}).wait(1).to({graphics:mask_1_graphics_60,x:0.4,y:-22.1}).wait(1).to({graphics:mask_1_graphics_61,x:0.4,y:-20.9}).wait(1).to({graphics:mask_1_graphics_62,x:0.4,y:-19.7}).wait(1).to({graphics:mask_1_graphics_63,x:0.4,y:-18.5}).wait(1).to({graphics:mask_1_graphics_64,x:0.4,y:-17.3}).wait(1).to({graphics:mask_1_graphics_65,x:0.4,y:-16.1}).wait(1).to({graphics:mask_1_graphics_66,x:0.4,y:-15}).wait(1).to({graphics:mask_1_graphics_67,x:0.4,y:-13.8}).wait(1).to({graphics:mask_1_graphics_68,x:0.4,y:-12.6}).wait(1).to({graphics:mask_1_graphics_69,x:0.4,y:-11.4}).wait(1).to({graphics:mask_1_graphics_70,x:0.4,y:-10.2}).wait(1).to({graphics:mask_1_graphics_71,x:0.4,y:-9}).wait(1).to({graphics:mask_1_graphics_72,x:0.4,y:-7.8}).wait(1).to({graphics:mask_1_graphics_73,x:0.4,y:-6.6}).wait(1).to({graphics:mask_1_graphics_74,x:0.4,y:-5.5}).wait(1).to({graphics:mask_1_graphics_75,x:0.4,y:-4.3}).wait(1).to({graphics:mask_1_graphics_76,x:0.4,y:-3.1}).wait(1).to({graphics:mask_1_graphics_77,x:0.4,y:-1.9}).wait(1).to({graphics:mask_1_graphics_78,x:0.4,y:-0.7}).wait(1).to({graphics:mask_1_graphics_79,x:0.4,y:0.5}).wait(1).to({graphics:mask_1_graphics_80,x:0.4,y:1.7}).wait(1).to({graphics:mask_1_graphics_81,x:0.4,y:2.8}).wait(1).to({graphics:mask_1_graphics_82,x:0.5,y:4}).wait(1).to({graphics:mask_1_graphics_83,x:0.5,y:5.2}).wait(1).to({graphics:mask_1_graphics_84,x:0.5,y:6.4}).wait(1).to({graphics:mask_1_graphics_85,x:0.5,y:7.6}).wait(1).to({graphics:mask_1_graphics_86,x:0.5,y:8.8}).wait(1).to({graphics:mask_1_graphics_87,x:0.5,y:10}).wait(1).to({graphics:mask_1_graphics_88,x:0.5,y:11.2}).wait(1).to({graphics:mask_1_graphics_89,x:0.5,y:12.3}).wait(86));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AKpQeQgpA5g1A1QhxBuiJA2Qh/AxiUAAQj9AAjBiRQgogfgmglQjHjDgRkLQgCgaAAgbQAAgbACgbIAA+z");
	this.shape_1.setTransform(68,45.8);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(175));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.8,-96.9,24.3,22);


(lib.honeyflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.honeybee();
	this.instance.parent = this;
	this.instance.setTransform(38.4,-170.9,0.422,0.422,0,0,0,-0.1,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIB9IgQgCIgNgEIgOgGIgHgCIgCgCIgCgBIgDgCIgDgCIgBgBIgCgCIgCgBIgDgCIgCgBIgCgCIgBgCIgDgBIgBgCIgDgCIgBgBIgBgCIgCgCIgCgBIgBgCIgCgCIAAgBIgCgCIgBgCIgCgBIgBgCIgBgCIgBgCIgBgBIgBgCIgBgCIgBgCIAAgBIgCgCIgBgCIgBgCIgBgBIAAgCIAAgCIgBgCIAAgCIgBgBIgBgCIAAgCIgBgCIgBgCIAAgCIgBgBIgBgCIAAgCIAAgCIAAgCIgBgCIAAgBIgBgCIABgCIgBgCIAAgCIAAgCIgBgCIAAgBIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIABgCIgBgBIABgCIAAgCIABgCIAAgCIAAgCIABgCIAAgCIAAgCIABgCIAAgCIABgCIABgCIAAgCIABgCIABgCIAAgCIABgCIABgCIABgCIAAgCIABgCIACgCIABgCIABgCIABgCIABgCIABgCIACgDIABgCIACgCIACgCIABgCIABgCIACgCIADgDIABgCIACgCIAIgHIAMgJIAIgFIALgGIAIgDIAMgDIAMgDIAMgBIAIAAIAJABIAHABIAKACIAKACIAEABIADACIADABIAEACIACABIADABIAEACIACABIACACIADABIACACIACACIACABIACACIADABIABACIACACIABABIADACIACACIABABIABACIACACIABABIACACIACACIABABIABACIABACIABABIACACIAAACIACACIABABIABACIABACIABACIAAABIABACIABACIABACIACABIAAACIABACIABACIAAACIABABIABACIAAACIAAACIABACIABABIAAACIABACIAAACIAAACIABACIAAACIABABIAAACIAAACIAAACIABACIAAACIAAACIAAABIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIgBABIAAACIAAACIAAACIgBACIAAACIgBACIgBACIAAACIAAACIgBACIgBACIAAACIAAACIgBACIgBACIgBACIAAACIgBACIgCACIAAACIgBACIgBACIgBACIgBACIgBACIgCADIgBACIgCACIgCACIgBACIgBACIgCACIgDACIgBADIgCACIgCACIgDACIgCACIgCADIgGAEIgDADIgEACIgIAFIgNAHIgFACIgHACIgRAEIgMABIgHAAIgIAAg");
	this.shape.setTransform(22.4,-144);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-215.3,105.5,83.8);


// stage content:
(lib.writingsuccess_Fontkid_U = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_476 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(476).call(this.frame_476).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(153.4,101.6,0.999,0.999,8.5,0,0,22.4,-144);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[153.3,101.7,153.8,214.9,154.2,328,156.7,374.8,189.3,408.7,224.5,445.3,274.5,445.3,324.5,445.3,359.8,408.7,392.4,374.8,394.9,328,395,326,395,324,395.8,213.8,396.5,103.5]}},390).wait(16).to({startPosition:0},0).to({guide:{path:[396.9,103.1,398.8,99,399.9,94.7,401.9,86.3,401.9,72.5,401.9,57.1,396.7,47.2,391.7,37.7,380.7,31.4,370.9,25.8,353.5,21.4,341.4,18.3,314.6,13.3,276.1,6.1,251.4,-14.1,226.6,-34.4,226.6,-58.6,226.6,-76.1,230.7,-84.4,232,-87,234.3,-89.8,236.6,-92.6,237.3,-93.8]}},61).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(396.6,103.4,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},390).wait(78));

	// Layer 5
	this.instance_1 = new lib.ar1("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(203,245,1,1,0,0,0,0,33);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(468));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_119 = new cjs.Graphics().p("A+GaaQAAuPKEqFQKFqDOOAAQOPAAKEKDQKFKFAAOPg");
	var mask_graphics_120 = new cjs.Graphics().p("A0fCOQJ5qOOOgRQOQgRKPJ3QKRJ4AROPMhEvABSQgRuPJ4qRg");
	var mask_graphics_121 = new cjs.Graphics().p("A06CYQJsqbOOgiQOPghKbJqQKdJtAiOOMhEtACkQgiuPJsqcg");
	var mask_graphics_122 = new cjs.Graphics().p("A1VChQJgqlONgzQOOgzKnJfQKoJfAzOOMhEpAD1QgzuOJfqog");
	var mask_graphics_123 = new cjs.Graphics().p("A1vCsQJUqxOMhEQONhEKyJTQKzJSBDONMhEjAFHQhEuNJSqzg");
	var mask_graphics_124 = new cjs.Graphics().p("A2HC3QJGq8OLhVQOLhUK9JFQK+JFBVOMMhEdAGYQhUuLJFq+g");
	var mask_graphics_125 = new cjs.Graphics().p("A2fDCQI5rHOJhlQOKhlLHI4QLJI4BmOJMhEVAHqQhluJI4rJg");
	var mask_graphics_126 = new cjs.Graphics().p("A22DOQIsrROIh2QOHh3LSIrQLTIrB2OIMhEKAI7Qh2uIIqrTg");
	var mask_graphics_127 = new cjs.Graphics().p("A3LDaQIerbOFiHQOFiHLcIdQLdIeCHOFMhD/AKMQiHuFIereg");
	var mask_graphics_128 = new cjs.Graphics().p("A3gDnQIRrlOCiYQOCiXLmIPQLnIQCYOCMhDyALdQiYuCIQrog");
	var mask_graphics_129 = new cjs.Graphics().p("A30D1QIDrvN/ipQN/ioLwICQLxIBCpOAMhDkAMtQipt/ICrxg");
	var mask_graphics_130 = new cjs.Graphics().p("A4HEDQH1r5N8i5QN8i5L5H0QL7HzC5N9MhDUAN9Qi5t8Hzr6g");
	var mask_graphics_131 = new cjs.Graphics().p("A4ZERQHnsCN5jJQN3jKMDHmQMEHlDJN5MhDCAPNQjKt4HlsEg");
	var mask_graphics_132 = new cjs.Graphics().p("A4pEgQHYsLN1jaQNzjaMMHXQMMHXDbN1MhCwAQdQjat1HXsMg");
	var mask_graphics_133 = new cjs.Graphics().p("A45EvQHJsTNxjqQNwjrMUHJQMVHJDqNwMhCbARsQjqtxHIsVg");
	var mask_graphics_134 = new cjs.Graphics().p("A5IE/QG7sbNsj7QNrj7McG6QMeG6D7NrMhCGAS8Qj6tsG5seg");
	var mask_graphics_135 = new cjs.Graphics().p("A5WFQQGsskNokLQNmkLMkGrQMmGrELNnMhBuAUJQkLtnGqslg");
	var mask_graphics_136 = new cjs.Graphics().p("A5iFgQGdsrNikbQNhkbMsGbQMuGdEbNhMhBWAVYQkbtiGcsug");
	var mask_graphics_137 = new cjs.Graphics().p("A5uFyQGOszNdksQNbkrM0GNQM1GNErNcMhA7AWlQkrtdGMs0g");
	var mask_graphics_138 = new cjs.Graphics().p("A55GDQF/s6NXk7QNWk7M7F9QM8F+E8NWMhAgAXyQk8tXF9s8g");
	var mask_graphics_139 = new cjs.Graphics().p("A6CGWQFvtCNRlLQNQlLNCFuQNDFvFLNQMhADAY+QlLtQFutDg");
	var mask_graphics_140 = new cjs.Graphics().p("A6LGoQFgtINLlaQNJlbNJFeQNKFfFbNKMg/lAaKQlbtKFetKg");
	var mask_graphics_141 = new cjs.Graphics().p("A6SG7QFQtONElqQNDlrNPFPQNQFPFrNDMg/FAbWQlqtEFOtQg");
	var mask_graphics_142 = new cjs.Graphics().p("A6YHPQFAtVM9l5QM8l6NVE/QNXE/F5M8Mg+jAchQl6s9E/tWg");
	var mask_graphics_143 = new cjs.Graphics().p("A6eHjQEwtaM3mKQM1mJNaEvQNdEwGJM1Mg+BAdrQmJs3Eutbg");
	var mask_graphics_144 = new cjs.Graphics().p("A6iH3QEgtgMvmYQMtmYNhEfQNhEfGZMuMg9dAe0QmYsvEethg");
	var mask_graphics_145 = new cjs.Graphics().p("A6lIMQEQtlMnmoQMmmnNlEPQNnEPGnMmMg83Af9QmosnEPtmg");
	var mask_graphics_146 = new cjs.Graphics().p("A6nIhQEAtqMem2QMem3NrD/QNrD/G3MeMg8RAhFQm2sfD+trg");
	var mask_graphics_147 = new cjs.Graphics().p("A6oI3QDvtvMXnFQMVnFNvDuQNxDvHFMVMg7pAiNQnFsXDutvg");
	var mask_graphics_148 = new cjs.Graphics().p("A6oJMQDftyMOnUQMNnUNzDeQN1DfHTMNMg6/AjTQnUsODet1g");
	var mask_graphics_149 = new cjs.Graphics().p("A6nJjQDOt3MGniQMEniN3DNQN5DOHiMFMg6VAkYQnisFDNt4g");
	var mask_graphics_150 = new cjs.Graphics().p("A6lJ5QC+t6L8nwQL7nxN7C9QN8C9HxL8Mg5pAldQnxr8C9t8g");
	var mask_graphics_151 = new cjs.Graphics().p("A6iKRQCut+Lyn/QLzn/N9CtQOACtH/LyMg48AmhQn/ryCst/g");
	var mask_graphics_152 = new cjs.Graphics().p("A6eKoQCduBLpoMQLpoNOBCcQOCCcINLpMg4NAnkQoNrpCbuCg");
	var mask_graphics_153 = new cjs.Graphics().p("A6YLAQCMuELfoaQLfobODCLQOGCMIaLfMg3eAonQoarfCLuFg");
	var mask_graphics_154 = new cjs.Graphics().p("A6SLYQB7uGLVooQLWooOFB6QOIB7IoLVMg2tApoQoorVB6uHg");
	var mask_graphics_155 = new cjs.Graphics().p("A6LLwQBruILLo1QLKo2OIBqQOKBqI1LKMg16AqpQo2rKBpuKg");
	var mask_graphics_156 = new cjs.Graphics().p("A6CMJQBauKLApDQLApCOJBZQOMBYJCLBMg1HAroQpCrABYuLg");
	var mask_graphics_157 = new cjs.Graphics().p("A55MiQBJuLK1pQQK2pPOKBHQOOBIJPK1Mg0SAsoQpQq1BHuNg");
	var mask_graphics_158 = new cjs.Graphics().p("A5uM7QA4uMKqpdQKqpcOMA3QOPA3JcKqMgzdAtlQpcqqA2uOg");
	var mask_graphics_159 = new cjs.Graphics().p("A5iNVQAnuNKeppQKfppONAmQOPAmJpKfMgymAuiQppqfAmuPg");
	var mask_graphics_160 = new cjs.Graphics().p("A5WNvQAWuOKTp1QKUp2ONAWQOQAVJ1KTMgxuAvdQp1qTAUuPg");
	var mask_graphics_161 = new cjs.Graphics().p("A5IOJQAFuOKHqBQKIqCONAEQORAFKBKHMgw1AwYQqCqHAEuQg");
	var mask_graphics_162 = new cjs.Graphics().p("A45OkQgMuPJ7qNQJ7qNOOgNQOQgNKNJ8Mgv7AxRQqNp7gNuPg");
	var mask_graphics_163 = new cjs.Graphics().p("A4qO/QgcuPJvqYQJvqZONgeQOQgeKZJvMgvAAyLQqZpvgfuPg");
	var mask_graphics_164 = new cjs.Graphics().p("A4ZPaQguuPJjqjQJjqlOMguQOPgvKlJjMguEAzBQqlpigvuOg");
	var mask_graphics_165 = new cjs.Graphics().p("A4HP1Qg/uNJWqvQJWqwOMg/QOOhAKvJWMgtGAz4QqwpWhAuNg");
	var mask_graphics_166 = new cjs.Graphics().p("A30QQQhQuLJJq6QJJq7OKhQQONhRK7JJMgsJA0tQq6pJhRuMg");
	var mask_graphics_167 = new cjs.Graphics().p("A3hQsQhguKI8rFQI8rFOIhhQOLhiLGI8MgrJA1hQrGo8hiuKg");
	var mask_graphics_168 = new cjs.Graphics().p("A3MRIQhxuIIvrPQIurQOHhyQOJhyLQIuMgqJA2UQrQovhzuIg");
	var mask_graphics_169 = new cjs.Graphics().p("A22RkQiCuGIhrZQIhraOFiDQOGiDLbIhMgpIA3FQraohiEuGg");
	var mask_graphics_170 = new cjs.Graphics().p("A2fSBQiTuEIUrjQITrkOCiUQOEiULkIUMgoGA31QrkoTiUuDg");
	var mask_graphics_171 = new cjs.Graphics().p("A2ISdQijuAIGrtQIFruN/ilQOBikLuIGMgnDA4kQrtoFimuBg");
	var mask_graphics_172 = new cjs.Graphics().p("A1vS6Qi0t+H4r2QH3r4N8i0QN+i1L3H3Mgl/A5TQr3n4i2t9g");
	var mask_graphics_173 = new cjs.Graphics().p("A1VTXQjFt6HqsAQHpsBN4jFQN7jGMAHqMgk6A5/QsBnqjGt5g");
	var mask_graphics_174 = new cjs.Graphics().p("A07T0QjVt2HbsJQHbsKN1jWQN2jWMKHbMgj1A6rQsKnbjXt2g");
	var mask_graphics_175 = new cjs.Graphics().p("A0fURQjmtyHNsRQHMsTNwjmQNzjnMSHNMgivA7UQsSnMjntyg");
	var mask_graphics_176 = new cjs.Graphics().p("A0DUuQj2ttG+saQG+sbNsj3QNuj3MbG+MghoA79Qsbm+j4ttg");
	var mask_graphics_177 = new cjs.Graphics().p("AzlVMQkGtpGvsiQGvsjNmkHQNqkHMjGvMgghA8kQsimvkItog");
	var mask_graphics_178 = new cjs.Graphics().p("AzHVpQkWtkGgspQGgsrNhkXQNlkYMrGgMgfYA9LQsrmgkYtkg");
	var mask_graphics_179 = new cjs.Graphics().p("AyoWHQkmtfGRsxQGQsyNdknQNfkoMyGRMgeOA9vQszmRkoteg");
	var mask_graphics_180 = new cjs.Graphics().p("AyIWlQk2tZGBs5QGCs6NXk3QNZk3M6GBMgdFA+TQs6mCk4tYg");
	var mask_graphics_181 = new cjs.Graphics().p("AxnXDQlGtTFytAQFytBNRlHQNUlHNAFyMgb7A+0QtAlylItSg");
	var mask_graphics_182 = new cjs.Graphics().p("AxFXgQlWtMFjtHQFitHNLlXQNNlXNHFiMgawA/VQtGlilYtNg");
	var mask_graphics_183 = new cjs.Graphics().p("AwiX+QlmtGFTtNQFTtONElmQNHlnNOFTMgZlA/0QtNlTlntGg");
	var mask_graphics_184 = new cjs.Graphics().p("Av/YcQl1s/FDtTQFDtUM+l2QM/l2NUFDMgYYBARQtTlDl3s/g");
	var mask_graphics_185 = new cjs.Graphics().p("AvaY7QmFs5EztZQEztaM3mFQM4mGNaE0MgXLBAtQtZkzmGs3g");
	var mask_graphics_186 = new cjs.Graphics().p("Au1ZZQmUsxEjtfQEjtfMvmVQMymVNfEjMgV+BBJQtfkjmVswg");
	var mask_graphics_187 = new cjs.Graphics().p("AuPZ3QmjsqETtjQETtlMnmkQMqmkNlETMgUxBBjQtkkUmksog");
	var mask_graphics_188 = new cjs.Graphics().p("AtpaVQmysiEDtpQEDtpMgmyQMhm0NqEDMgTjBB7QtokDm0shg");
	var mask_graphics_189 = new cjs.Graphics().p("AtBazQnBsZDztvQDyttMYnBQMZnCNuDyMgSUBCRQttjznCsYg");
	var mask_graphics_190 = new cjs.Graphics().p("AsZbRQnPsRDityQDityMQnQQMQnRNzDjMgRFBClQtyjinRsQg");
	var mask_graphics_191 = new cjs.Graphics().p("ArwbvQnesIDSt3QDSt1MHnfQMHnfN3DSMgP2BC5Qt1jSngsHg");
	var mask_graphics_192 = new cjs.Graphics().p("ArGcNQnsr/DBt6QDBt6L+nsQL+nuN7DBMgOmBDMQt5jBnur/g");
	var mask_graphics_193 = new cjs.Graphics().p("AqccrQn6r1Cxt+QCwt9L1n7QL1n8N+CxMgNWBDcQt9ixn8r1g");
	var mask_graphics_194 = new cjs.Graphics().p("ApwdJQoJrsCguBQCguALroJQLsoKOBChMgMFBDrQuBigoJrsg");
	var mask_graphics_195 = new cjs.Graphics().p("ApFdnQoWriCQuEQCPuDLhoWQLioYODCPMgK0BD5QuDiPoYrig");
	var mask_graphics_196 = new cjs.Graphics().p("AoYeFQokrYB/uHQB+uFLXokQLYolOGB+MgJjBEFQuHh+okrYg");
	var mask_graphics_197 = new cjs.Graphics().p("AnrejQoxrOBuuJQBuuHLMoyQLNozOJBuMgISBEQQuJhuoyrNg");
	var mask_graphics_198 = new cjs.Graphics().p("Am9fBQo/rEBduKQBduKLDo/QLCpAOLBdMgHCBEZQuKhdo/rCg");
	var mask_graphics_199 = new cjs.Graphics().p("AmOfeQpMq4BMuMQBMuMK4pLQK3pNOMBMMgFvBEgQuMhMpMq4g");
	var mask_graphics_200 = new cjs.Graphics().p("Alff8QpZquA7uNQA8uNKspYQKtpaONA7MgEeBEnQuOg8pYqsg");
	var mask_graphics_201 = new cjs.Graphics().p("EgEwAgZQplqiAruOQAquOKhplQKhpnOOArMgDMBErQuOgrpmqhg");
	var mask_graphics_202 = new cjs.Graphics().p("EgD/Ag2QpyqWAZuPQAauOKVpyQKWpzOPAZMgB7BEuQuPgZpxqWg");
	var mask_graphics_203 = new cjs.Graphics().p("EgDPAhTQp9qLAIuPQAJuOKJp+QKKp/OQAIMgApBEwQuQgJp+qKg");
	var mask_graphics_204 = new cjs.Graphics().p("EgCyAhwQqJp/gJuPQgIuOJ9qKQJ+qLOQgJMAApBEwIgYAAQuAAAqCp2g");
	var mask_graphics_205 = new cjs.Graphics().p("EgCpAiNQqVpzgauPQgZuOJyqWQJxqXOPgZMAB7BEuIhHABQtiAAp8pZg");
	var mask_graphics_206 = new cjs.Graphics().p("EgCfAioQqhpmgquOQgruOJlqhQJmqiOOgrMADMBErQg6ADg6AAQtFAAp2o+g");
	var mask_graphics_207 = new cjs.Graphics().p("EgCVAjDQqspZg8uOQg7uMJZqtQJYqtOOg7MAEeBEmQhSAFhQAAQspAApvojg");
	var mask_graphics_208 = new cjs.Graphics().p("EgCKAjeQq4pNhMuMQhMuLJMq4QJMq4OMhNMAFvBEhQhoAIhlAAQsPAApnoIg");
	var mask_graphics_209 = new cjs.Graphics().p("EgB/Aj4QrDpAhduLQhduJI/rCQI/rEOKhdMAHCBEZQh/ANh6AAQr0AApgnvg");
	var mask_graphics_210 = new cjs.Graphics().p("EgB0AkRQrMozhuuIQhuuIIxrNQIyrOOJhuMAISBEQQiUASiPAAQrbAApYnWg");
	var mask_graphics_211 = new cjs.Graphics().p("EgBnAkqQrYolh+uHQh/uFIkrYQIkrYOHh/MAJjBEFQipAYijAAQrDAApOm9g");
	var mask_graphics_212 = new cjs.Graphics().p("EgBbAlCQrhoYiPuEQiQuEIXrgQIXriODiQMAK0BD5Qi+Aei3AAQqrAApFmlg");
	var mask_graphics_213 = new cjs.Graphics().p("EgBOAlZQrroKiguBQiguBIJrqQIJrsOBigMAMFBDrQjTAmjLAAQqTAAo8mPg");
	var mask_graphics_214 = new cjs.Graphics().p("EgBAAlwQr1n8iwt+Qixt+H7rzQH7r2N9ixMANWBDcQjnAujfAAQp8AAoxl4g");
	var mask_graphics_215 = new cjs.Graphics().p("EgAyAmGQr+ntjBt7QjBt6Hsr9QHusAN5jBMAOmBDMQj7A2jyAAQpmAAomlig");
	var mask_graphics_216 = new cjs.Graphics().p("EgAjAmcQsHnfjSt3QjSt3HesGQHgsIN1jSMAP2BC5QkPBAkEAAQpRAAoalMg");
	var mask_graphics_217 = new cjs.Graphics().p("EgAUAmxQsQnRjitzQjitzHPsOQHRsRNyjjMARFBCmQkiBKkXAAQo8AAoOk3g");
	var mask_graphics_218 = new cjs.Graphics().p("EgAEAnFQsZnCjytuQjztvHBsXQHCsaNtjyMASUBCRQk0BVkqAAQomAAoCkkg");
	var mask_graphics_219 = new cjs.Graphics().p("EAALAnZQsgm0kDtpQkDtqGzsfQGzsiNokDMATjBB6QlGBhk9AAQoSAAn2kQg");
	var mask_graphics_220 = new cjs.Graphics().p("EAAbAnsQsnmlkTtkQkTtlGjsnQGksqNkkTMAUwBBiQlYBtlPAAQn+AAnpj9g");
	var mask_graphics_221 = new cjs.Graphics().p("EAAtAn+QswmVkjtgQkjtfGUsvQGVsxNekkMAV/BBJQlqB6lhAAQnrAAnajrg");
	var mask_graphics_222 = new cjs.Graphics().p("EAA+AoQQs3mGkztaQkztaGFs2QGGs5NZkzMAXLBAuQl6CHl1AAQnXAAnMjZg");
	var mask_graphics_223 = new cjs.Graphics().p("EABQAohQs+l3lDtUQlDtUF2s9QF2tANTlDMAYYBARQmLCWmHAAQnDAAm+jIg");
	var mask_graphics_224 = new cjs.Graphics().p("EABiAoyQtElolTtOQlTtOFmtEQFntHNNlSMAZkA/zQmbClmaAAQmwAAmvi3g");
	var mask_graphics_225 = new cjs.Graphics().p("EAB1ApBQtLlXlitIQljtHFWtLQFYtNNGljMAawA/VQmrC0msAAQmeAAmfiog");
	var mask_graphics_226 = new cjs.Graphics().p("EACJApQQtSlIlytAQlytBFHtRQFHtUNAlyMAb7A+1Qm6DEnAAAQmLAAmOiZg");
	var mask_graphics_227 = new cjs.Graphics().p("EACcApfQtXk4mCs6QmBs6E3tXQE3tZM6mCMAdFA+TQnKDVnSAAQl4AAl/iKg");
	var mask_graphics_228 = new cjs.Graphics().p("EACwApsQtdkomQsyQmRszEntcQEntfMzmRMAeOA9vQnXDnnnAAQllAAluh9g");
	var mask_graphics_229 = new cjs.Graphics().p("EADFAp5QtikYmgsqQmgsrEXtiQEXtlMrmfMAfYA9KQnmD5n6AAQlTAAlchwg");
	var mask_graphics_230 = new cjs.Graphics().p("EADaAqGQtokImusjQmvsjEGtnQEItpMimvMAghA8kQnzEMoPAAQlAAAlKhjg");
	var mask_graphics_231 = new cjs.Graphics().p("EADvAqRQtsj3m+sbQm+sbD3tsQD3tuMbm+MAhoA7+QoBEfoiAAQkuAAk4hYg");
	var mask_graphics_232 = new cjs.Graphics().p("EAEFAqcQtxjnnMsSQnNsTDmtxQDntyMSnMMAivA7UQoME0o4AAQkbAAklhNg");
	var mask_graphics_233 = new cjs.Graphics().p("EAEbAqmQt1jXnbsJQnbsKDWt1QDWt2MKnbMAj1A6rQoZFHpMAAQkIAAkThCg");
	var mask_graphics_234 = new cjs.Graphics().p("EAEyAqwQt5jHnpsAQnqsBDFt5QDGt6MBnpMAk6A5/QokFdpiAAQj1AAj/g4g");
	var mask_graphics_235 = new cjs.Graphics().p("EAFIAq5Qt8i2n3r4Qn4r3C1t9QC1t9L3n3MAl/A5SQovFzp4AAQjiAAjsgvg");
	var mask_graphics_236 = new cjs.Graphics().p("EAFgArAQuAiloFruQoGruCkt/QCkuBLuoFMAnDA4kQo6GKqOAAQjPAAjXgog");
	var mask_graphics_237 = new cjs.Graphics().p("EAF3ArIQuCiVoTrkQoUrkCTuDQCUuDLkoTMAoGA31QpEGgqmABQi7AAjDggg");
	var mask_graphics_238 = new cjs.Graphics().p("EAGPArOQuFiEohraQohraCDuFQCDuGLaohMApHA3FQpNG4q+AAQinAAiugZg");
	var mask_graphics_239 = new cjs.Graphics().p("EAGnArUQuHhzourQQovrQByuHQByuILQovMAqJA2UQpXHQrWAAQiTAAiZgTg");
	var mask_graphics_240 = new cjs.Graphics().p("EAHAArZQuJhio8rGQo8rFBhuKQBhuKLGo7MArJA1gQpfHqrvAAQh/AAiDgOg");
	var mask_graphics_241 = new cjs.Graphics().p("EAHZArdQuLhRpJq7QpJq7BQuLQBRuLK6pJMAsJA0tQpnIDsKAAQhpAAhtgKg");
	var mask_graphics_242 = new cjs.Graphics().p("EAHyArgQuMhApWqwQpWqvBAuNQA/uNKwpWMAtGAz4QpuIdskAAQhUAAhXgGg");
	var mask_graphics_243 = new cjs.Graphics().p("EAIMArjQuNgvpjqlQpjqkAvuOQAuuOKlpiMAuDAzBQp1I4s/AAQg/AAg/gDg");
	var mask_graphics_244 = new cjs.Graphics().p("EAImArlQuOgfpvqZQpvqZAduOQAeuPKZpvMAu/AyLQp7JTtcAAIhQgBg");
	var mask_graphics_245 = new cjs.Graphics().p("EAJAArmQuPgOp7qNQp7qNAMuPQANuPKNp7MAv7AxSQqBJvt6AAIghAAg");
	var mask_graphics_246 = new cjs.Graphics().p("EgO8AhoQqHqBgEuPQgFuPKCqHMAw1AwYQqCKHuPAFIgJAAQuJAAqEp+g");
	var mask_graphics_247 = new cjs.Graphics().p("EgOtAiFQqTp2gVuOQgVuPJ1qTMAxuAvdQp1KUuPAWIg5AAQtqAAp/phg");
	var mask_graphics_248 = new cjs.Graphics().p("EgOdAigQqfpogmuOQgmuPJpqeMAymAuhQppKfuOAnQg0ACgzAAQtNAAp5pGg");
	var mask_graphics_249 = new cjs.Graphics().p("EgOMAi8Qqqpdg3uMQg3uOJcqqMAzdAtlQpcKquOA4QhLAEhJAAQsxAApyoqg");
	var mask_graphics_250 = new cjs.Graphics().p("EgN7AjWQq1pPhIuMQhIuMJQq1MA0SAsnQpPK1uNBJQhhAHhfAAQsWABproRg");
	var mask_graphics_251 = new cjs.Graphics().p("EgNoAjwQrBpChYuKQhZuLJCrAMA1HAroQpCLAuLBaQh4AMh0AAQr7AApjn3g");
	var mask_graphics_252 = new cjs.Graphics().p("EgNVAkKQrLo1hquJQhquJI2rLMA16AqpQo1LLuJBrQiOAQiJAAQrhAApbndg");
	var mask_graphics_253 = new cjs.Graphics().p("EgNCAkjQrVooh6uGQh7uHIorWMA2tAppQooLVuHB7QijAWieAAQrIAApTnEg");
	var mask_graphics_254 = new cjs.Graphics().p("EgMtAk7QrfoaiMuEQiLuGIareMA3eAonQoaLfuFCMQi4AcixAAQqxAApJmsg");
	var mask_graphics_255 = new cjs.Graphics().p("EgMYAlTQrpoNicuBQicuDINroMA4NAnkQoNLpuCCdQjNAkjEAAQqaAAo/mVg");
	var mask_graphics_256 = new cjs.Graphics().p("EgMCAlqQrzn/ist+QituAH/ryMA47AmhQn+Lzt/CuQjhArjZAAQqCAAo1l+g");
	var mask_graphics_257 = new cjs.Graphics().p("EgLrAmAQr8nxi9t6Qi+t9Hxr7MA5pAldQnxL8t7C+Qj1A0jsAAQpsAAoqlog");
	var mask_graphics_258 = new cjs.Graphics().p("EgLUAmWQsFnjjNt3QjOt4HisEMA6VAkXQnjMGt3DOQkJA9j/AAQpWAAoflSg");
	var mask_graphics_259 = new cjs.Graphics().p("EgK7AmrQsOnUjetzQjft1HUsNMA6/AjSQnTMOt0DfQkcBHkSAAQpAAAoTk9g");
	var mask_graphics_260 = new cjs.Graphics().p("EgKiAm/QsXnFjutvQjvtwHFsWMA7pAiMQnFMWtwDwQkvBSkkAAQosAAoGkqg");
	var mask_graphics_261 = new cjs.Graphics().p("EgKJAnTQsfm2j+tqQkAtsG3seMA8RAhEQm3MftqEAQlCBdk2AAQoYAAn6kWg");
	var mask_graphics_262 = new cjs.Graphics().p("EgJuAnmQsnmnkPtlQkQtnGosmMA83Af8QmnMntmEQQlTBplKAAQoDAAnskDg");
	var mask_graphics_263 = new cjs.Graphics().p("EgJTAn5QsvmYkfthQkgthGZsuMA9dAezQmZMvtgEgQllB2lcAAQnvAAnfjwg");
	var mask_graphics_264 = new cjs.Graphics().p("EgI4AoLQs2mJkvtbQkvtcGJs1MA+BAdqQmJM2tcEwQl1CDlvAAQncAAnRjeg");
	var mask_graphics_265 = new cjs.Graphics().p("EgIbAocQs9l6k/tVQlAtWF6s8MA+jAcfQl5M+tWFAQmGCRmCAAQnIAAnCjNg");
	var mask_graphics_266 = new cjs.Graphics().p("EgH+AotQtElrlPtOQlPtRFqtDMA/FAbVQlrNEtPFQQmXCgmUAAQm1AAmzi8g");
	var mask_graphics_267 = new cjs.Graphics().p("EgHgAo9QtLlblftJQlftKFbtJMA/lAaJQlbNLtJFfQmnCwmnAAQmiAAmjisg");
	var mask_graphics_268 = new cjs.Graphics().p("EgHCApMQtRlLlutCQlvtDFLtQMBADAY9QlLNRtCFvQm2DAm6AAQmPAAmUidg");
	var mask_graphics_269 = new cjs.Graphics().p("EgGjApaQtXk7l+s7Ql+s8E7tWMBAgAXxQk7NXs7F/QnFDQnNAAQl9AAmDiPg");
	var mask_graphics_270 = new cjs.Graphics().p("EgGDApoQtdkrmNs0QmNs1ErtbMBA7AWkQkrNcs0GOQnUDingAAQlqAAlyiBg");
	var mask_graphics_271 = new cjs.Graphics().p("EgFjAp1QtikbmcssQmdstEbthMBBWAVWQkbNistGdQnhD0n1AAQlXAAlhh0g");
	var mask_graphics_272 = new cjs.Graphics().p("EgFCAqCQtokLmrskQmrsmELtmMBBuAUIQkLNoslGsQnvEGoIAAQlGAAlOhng");
	var mask_graphics_273 = new cjs.Graphics().p("EgEhAqOQtsj7m6scQm7seD7trMBCGAS6Qj7NsscG7Qn9EaocAAQk0AAk8hbg");
	var mask_graphics_274 = new cjs.Graphics().p("EgD/AqZQtxjrnIsUQnKsVDrtwMBCbARsQjqNxsUHJQoKEtoxAAQkgAAkqhPg");
	var mask_graphics_275 = new cjs.Graphics().p("EgDcAqjQt1janXsLQnYsNDat1MBCvAQeQjaN0sLHZQoWFBpGAAQkNAAkXhFg");
	var mask_graphics_276 = new cjs.Graphics().p("EgC5AqtQt5jKnmsCQnmsEDKt5MBDCAPOQjJN5sDHmQohFXpcAAQj7AAkDg7g");
	var mask_graphics_277 = new cjs.Graphics().p("EgCWAq2Qt8i5n0r5Qn1r7C5t8MBDUAN9Qi5N9r5H0QosFtpyAAQjoAAjwgyg");
	var mask_graphics_278 = new cjs.Graphics().p("EgByAq+Qt/iooCrwQoDrxCpuAMBDjAMtQioOArwIDQo3GDqIAAQjUAAjdgqg");
	var mask_graphics_279 = new cjs.Graphics().p("EgBNArFQuDiXoPrmQoRroCYuCMBDyALcQiYODrmIRQpBGZqfAAQjBAAjIgig");
	var mask_graphics_280 = new cjs.Graphics().p("EgAoArMQuFiHodrcQofreCHuFMBD/AKMQiHOFrcIfQpLGxq3AAQitAAizgbg");
	var mask_graphics_281 = new cjs.Graphics().p("EgACArSQuIh2orrSQosrTB3uIMBEKAI7Qh2OIrSIsQpUHJrPAAQiZAAiegVg");
	var mask_graphics_282 = new cjs.Graphics().p("EAAjArXQuJhlo4rIQo5rJBluJMBEVAHqQhmOJrII6QpcHiroAAQiFAAiJgQg");
	var mask_graphics_283 = new cjs.Graphics().p("EABKArcQuLhVpFq9QpHq+BVuLMBEdAGYQhVOLq9JHQplH7sBAAQhwAAhzgKg");
	var mask_graphics_284 = new cjs.Graphics().p("EABxArfQuMhEpSqxQpUq0BEuMMBEjAFHQhDOMqyJUQptIVscAAQhaAAhdgHg");
	var mask_graphics_285 = new cjs.Graphics().p("EACYAriQuNgzpfqnQpgqnAzuOMBEpAD1QgzOOqnJgQpzIws4AAQhFAAhGgEg");
	var mask_graphics_286 = new cjs.Graphics().p("EADAArkQuOgiprqbQptqdAiuOMBEtACjQgiOPqcJtQp6JLtTAAQgvAAgvgCg");
	var mask_graphics_287 = new cjs.Graphics().p("EADoArlQuOgRp4qPQp5qRARuPMBEvABRQgROQqQJ4Qp/JotxAAIgwgBg");
	var mask_graphics_288 = new cjs.Graphics().p("EgUBAhiQqFqFAAuPMBEvAAAQAAOPqEKFQqFKEuPAAQuOAAqEqEg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(119).to({graphics:mask_graphics_119,x:247.3,y:169}).wait(1).to({graphics:mask_graphics_120,x:247.3,y:171}).wait(1).to({graphics:mask_graphics_121,x:247.3,y:173.1}).wait(1).to({graphics:mask_graphics_122,x:247.2,y:175.1}).wait(1).to({graphics:mask_graphics_123,x:247,y:177.2}).wait(1).to({graphics:mask_graphics_124,x:246.9,y:179.2}).wait(1).to({graphics:mask_graphics_125,x:246.7,y:181.2}).wait(1).to({graphics:mask_graphics_126,x:246.4,y:183.3}).wait(1).to({graphics:mask_graphics_127,x:246.1,y:185.3}).wait(1).to({graphics:mask_graphics_128,x:245.8,y:187.3}).wait(1).to({graphics:mask_graphics_129,x:245.5,y:189.3}).wait(1).to({graphics:mask_graphics_130,x:245.1,y:191.3}).wait(1).to({graphics:mask_graphics_131,x:244.6,y:193.3}).wait(1).to({graphics:mask_graphics_132,x:244.2,y:195.3}).wait(1).to({graphics:mask_graphics_133,x:243.6,y:197.3}).wait(1).to({graphics:mask_graphics_134,x:243.1,y:199.3}).wait(1).to({graphics:mask_graphics_135,x:242.5,y:201.2}).wait(1).to({graphics:mask_graphics_136,x:241.9,y:203.2}).wait(1).to({graphics:mask_graphics_137,x:241.2,y:205.1}).wait(1).to({graphics:mask_graphics_138,x:240.6,y:207}).wait(1).to({graphics:mask_graphics_139,x:239.8,y:208.9}).wait(1).to({graphics:mask_graphics_140,x:239.1,y:210.8}).wait(1).to({graphics:mask_graphics_141,x:238.3,y:212.7}).wait(1).to({graphics:mask_graphics_142,x:237.4,y:214.6}).wait(1).to({graphics:mask_graphics_143,x:236.6,y:216.5}).wait(1).to({graphics:mask_graphics_144,x:235.7,y:218.3}).wait(1).to({graphics:mask_graphics_145,x:234.7,y:220.1}).wait(1).to({graphics:mask_graphics_146,x:233.8,y:221.9}).wait(1).to({graphics:mask_graphics_147,x:232.8,y:223.7}).wait(1).to({graphics:mask_graphics_148,x:231.7,y:225.5}).wait(1).to({graphics:mask_graphics_149,x:230.7,y:227.2}).wait(1).to({graphics:mask_graphics_150,x:229.6,y:228.9}).wait(1).to({graphics:mask_graphics_151,x:228.5,y:230.6}).wait(1).to({graphics:mask_graphics_152,x:227.3,y:232.3}).wait(1).to({graphics:mask_graphics_153,x:226.1,y:234}).wait(1).to({graphics:mask_graphics_154,x:224.9,y:235.6}).wait(1).to({graphics:mask_graphics_155,x:223.6,y:237.2}).wait(1).to({graphics:mask_graphics_156,x:222.3,y:238.8}).wait(1).to({graphics:mask_graphics_157,x:221,y:240.4}).wait(1).to({graphics:mask_graphics_158,x:219.7,y:241.9}).wait(1).to({graphics:mask_graphics_159,x:218.3,y:243.4}).wait(1).to({graphics:mask_graphics_160,x:216.9,y:244.9}).wait(1).to({graphics:mask_graphics_161,x:215.5,y:246.4}).wait(1).to({graphics:mask_graphics_162,x:214,y:247.8}).wait(1).to({graphics:mask_graphics_163,x:212.6,y:249.3}).wait(1).to({graphics:mask_graphics_164,x:211.1,y:250.6}).wait(1).to({graphics:mask_graphics_165,x:209.5,y:252}).wait(1).to({graphics:mask_graphics_166,x:208,y:253.3}).wait(1).to({graphics:mask_graphics_167,x:206.4,y:254.6}).wait(1).to({graphics:mask_graphics_168,x:204.8,y:255.9}).wait(1).to({graphics:mask_graphics_169,x:203.2,y:257.1}).wait(1).to({graphics:mask_graphics_170,x:201.5,y:258.3}).wait(1).to({graphics:mask_graphics_171,x:199.8,y:259.5}).wait(1).to({graphics:mask_graphics_172,x:198.1,y:260.7}).wait(1).to({graphics:mask_graphics_173,x:196.4,y:261.8}).wait(1).to({graphics:mask_graphics_174,x:194.7,y:262.9}).wait(1).to({graphics:mask_graphics_175,x:192.9,y:263.9}).wait(1).to({graphics:mask_graphics_176,x:191.2,y:264.9}).wait(1).to({graphics:mask_graphics_177,x:189.4,y:265.9}).wait(1).to({graphics:mask_graphics_178,x:187.6,y:266.9}).wait(1).to({graphics:mask_graphics_179,x:185.7,y:267.8}).wait(1).to({graphics:mask_graphics_180,x:183.9,y:268.7}).wait(1).to({graphics:mask_graphics_181,x:182,y:269.5}).wait(1).to({graphics:mask_graphics_182,x:180.1,y:270.3}).wait(1).to({graphics:mask_graphics_183,x:178.3,y:271.1}).wait(1).to({graphics:mask_graphics_184,x:176.3,y:271.8}).wait(1).to({graphics:mask_graphics_185,x:174.4,y:272.5}).wait(1).to({graphics:mask_graphics_186,x:172.5,y:273.2}).wait(1).to({graphics:mask_graphics_187,x:170.6,y:273.9}).wait(1).to({graphics:mask_graphics_188,x:168.6,y:274.5}).wait(1).to({graphics:mask_graphics_189,x:166.6,y:275}).wait(1).to({graphics:mask_graphics_190,x:164.7,y:275.5}).wait(1).to({graphics:mask_graphics_191,x:162.7,y:276}).wait(1).to({graphics:mask_graphics_192,x:160.7,y:276.5}).wait(1).to({graphics:mask_graphics_193,x:158.7,y:276.9}).wait(1).to({graphics:mask_graphics_194,x:156.7,y:277.3}).wait(1).to({graphics:mask_graphics_195,x:154.6,y:277.6}).wait(1).to({graphics:mask_graphics_196,x:152.6,y:277.9}).wait(1).to({graphics:mask_graphics_197,x:150.6,y:278.2}).wait(1).to({graphics:mask_graphics_198,x:148.6,y:278.4}).wait(1).to({graphics:mask_graphics_199,x:146.5,y:278.6}).wait(1).to({graphics:mask_graphics_200,x:144.5,y:278.8}).wait(1).to({graphics:mask_graphics_201,x:142.4,y:278.9}).wait(1).to({graphics:mask_graphics_202,x:140.4,y:278.9}).wait(1).to({graphics:mask_graphics_203,x:138.4,y:279}).wait(1).to({graphics:mask_graphics_204,x:138.4,y:279}).wait(1).to({graphics:mask_graphics_205,x:140.4,y:279}).wait(1).to({graphics:mask_graphics_206,x:142.4,y:279}).wait(1).to({graphics:mask_graphics_207,x:144.5,y:279}).wait(1).to({graphics:mask_graphics_208,x:146.5,y:279}).wait(1).to({graphics:mask_graphics_209,x:148.6,y:279.1}).wait(1).to({graphics:mask_graphics_210,x:150.6,y:279.1}).wait(1).to({graphics:mask_graphics_211,x:152.6,y:279.1}).wait(1).to({graphics:mask_graphics_212,x:154.6,y:279.1}).wait(1).to({graphics:mask_graphics_213,x:156.7,y:279.2}).wait(1).to({graphics:mask_graphics_214,x:158.7,y:279.2}).wait(1).to({graphics:mask_graphics_215,x:160.7,y:279.2}).wait(1).to({graphics:mask_graphics_216,x:162.7,y:279.2}).wait(1).to({graphics:mask_graphics_217,x:164.7,y:279.2}).wait(1).to({graphics:mask_graphics_218,x:166.6,y:279.3}).wait(1).to({graphics:mask_graphics_219,x:168.6,y:279.3}).wait(1).to({graphics:mask_graphics_220,x:170.6,y:279.3}).wait(1).to({graphics:mask_graphics_221,x:172.5,y:279.3}).wait(1).to({graphics:mask_graphics_222,x:174.4,y:279.3}).wait(1).to({graphics:mask_graphics_223,x:176.3,y:279.3}).wait(1).to({graphics:mask_graphics_224,x:178.2,y:279.3}).wait(1).to({graphics:mask_graphics_225,x:180.1,y:279.3}).wait(1).to({graphics:mask_graphics_226,x:182,y:279.3}).wait(1).to({graphics:mask_graphics_227,x:183.9,y:279.3}).wait(1).to({graphics:mask_graphics_228,x:185.7,y:279.3}).wait(1).to({graphics:mask_graphics_229,x:187.5,y:279.3}).wait(1).to({graphics:mask_graphics_230,x:189.4,y:279.3}).wait(1).to({graphics:mask_graphics_231,x:191.2,y:279.3}).wait(1).to({graphics:mask_graphics_232,x:192.9,y:279.3}).wait(1).to({graphics:mask_graphics_233,x:194.7,y:279.2}).wait(1).to({graphics:mask_graphics_234,x:196.4,y:279.2}).wait(1).to({graphics:mask_graphics_235,x:198.1,y:279.2}).wait(1).to({graphics:mask_graphics_236,x:199.8,y:279.2}).wait(1).to({graphics:mask_graphics_237,x:201.5,y:279.2}).wait(1).to({graphics:mask_graphics_238,x:203.1,y:279.1}).wait(1).to({graphics:mask_graphics_239,x:204.8,y:279.1}).wait(1).to({graphics:mask_graphics_240,x:206.4,y:279.1}).wait(1).to({graphics:mask_graphics_241,x:208,y:279.1}).wait(1).to({graphics:mask_graphics_242,x:209.5,y:279}).wait(1).to({graphics:mask_graphics_243,x:211,y:279}).wait(1).to({graphics:mask_graphics_244,x:212.5,y:279}).wait(1).to({graphics:mask_graphics_245,x:214,y:279}).wait(1).to({graphics:mask_graphics_246,x:215.5,y:279}).wait(1).to({graphics:mask_graphics_247,x:216.9,y:279}).wait(1).to({graphics:mask_graphics_248,x:218.3,y:279}).wait(1).to({graphics:mask_graphics_249,x:219.7,y:279}).wait(1).to({graphics:mask_graphics_250,x:221,y:279}).wait(1).to({graphics:mask_graphics_251,x:222.3,y:279.1}).wait(1).to({graphics:mask_graphics_252,x:223.6,y:279.1}).wait(1).to({graphics:mask_graphics_253,x:224.9,y:279.1}).wait(1).to({graphics:mask_graphics_254,x:226.1,y:279.1}).wait(1).to({graphics:mask_graphics_255,x:227.3,y:279.2}).wait(1).to({graphics:mask_graphics_256,x:228.4,y:279.2}).wait(1).to({graphics:mask_graphics_257,x:229.6,y:279.2}).wait(1).to({graphics:mask_graphics_258,x:230.7,y:279.2}).wait(1).to({graphics:mask_graphics_259,x:231.7,y:279.2}).wait(1).to({graphics:mask_graphics_260,x:232.8,y:279.3}).wait(1).to({graphics:mask_graphics_261,x:233.8,y:279.3}).wait(1).to({graphics:mask_graphics_262,x:234.7,y:279.3}).wait(1).to({graphics:mask_graphics_263,x:235.7,y:279.3}).wait(1).to({graphics:mask_graphics_264,x:236.6,y:279.3}).wait(1).to({graphics:mask_graphics_265,x:237.4,y:279.3}).wait(1).to({graphics:mask_graphics_266,x:238.3,y:279.3}).wait(1).to({graphics:mask_graphics_267,x:239.1,y:279.3}).wait(1).to({graphics:mask_graphics_268,x:239.8,y:279.3}).wait(1).to({graphics:mask_graphics_269,x:240.5,y:279.3}).wait(1).to({graphics:mask_graphics_270,x:241.2,y:279.3}).wait(1).to({graphics:mask_graphics_271,x:241.9,y:279.3}).wait(1).to({graphics:mask_graphics_272,x:242.5,y:279.3}).wait(1).to({graphics:mask_graphics_273,x:243.1,y:279.3}).wait(1).to({graphics:mask_graphics_274,x:243.6,y:279.2}).wait(1).to({graphics:mask_graphics_275,x:244.1,y:279.2}).wait(1).to({graphics:mask_graphics_276,x:244.6,y:279.2}).wait(1).to({graphics:mask_graphics_277,x:245,y:279.2}).wait(1).to({graphics:mask_graphics_278,x:245.4,y:279.2}).wait(1).to({graphics:mask_graphics_279,x:245.8,y:279.1}).wait(1).to({graphics:mask_graphics_280,x:246.1,y:279.1}).wait(1).to({graphics:mask_graphics_281,x:246.4,y:279.1}).wait(1).to({graphics:mask_graphics_282,x:246.7,y:279.1}).wait(1).to({graphics:mask_graphics_283,x:246.9,y:279}).wait(1).to({graphics:mask_graphics_284,x:247,y:279}).wait(1).to({graphics:mask_graphics_285,x:247.2,y:279}).wait(1).to({graphics:mask_graphics_286,x:247.3,y:279}).wait(1).to({graphics:mask_graphics_287,x:247.3,y:279}).wait(1).to({graphics:mask_graphics_288,x:247.3,y:279}).wait(189));

	// 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("ARlADQhIByhkBnQllFvn3AAQn4AAlklvQlJlRgcnV");
	this.shape_1.setTransform(266.6,386.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("ATFH/QgBASgBARQgZHVlJFSQlkFvn4AAQn3AAlklvQlKlSgbnVMgAJgjZ");
	this.shape_2.setTransform(275.3,273.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("ATD63MAACAi2QgBASgBARQgZHVlJFSQlkFvn4AAQn3AAlklvQlKlSgbnVMgAJgjZ");
	this.shape_3.setTransform(275.3,273.4);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},119).to({state:[{t:this.shape_2}]},52).to({state:[{t:this.shape_3}]},117).wait(189));

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_9 = new cjs.Graphics().p("AlkB1IAAjoILJAAIAADog");
	var mask_1_graphics_10 = new cjs.Graphics().p("AlkCAIAAj/ILJAAIAAD/g");
	var mask_1_graphics_11 = new cjs.Graphics().p("AlkCLIAAkVILJAAIAAEVg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AlkCXIAAktILJAAIAAEtg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AlkCiIAAlDILJAAIAAFDg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AlkCtIAAlZILJAAIAAFZg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AlkC5IAAlxILJAAIAAFxg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AlkDEIAAmHILJAAIAAGHg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AlkDQIAAmfILJAAIAAGfg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AlkDbIAAm1ILJAAIAAG1g");
	var mask_1_graphics_19 = new cjs.Graphics().p("AlkDmIAAnLILJAAIAAHLg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AlkDyIAAnjILJAAIAAHjg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AlkD9IAAn5ILJAAIAAH5g");
	var mask_1_graphics_22 = new cjs.Graphics().p("AlkEJIAAoRILJAAIAAIRg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AlkEUIAAonILJAAIAAIng");
	var mask_1_graphics_24 = new cjs.Graphics().p("AlkEgIAAo+ILJAAIAAI+g");
	var mask_1_graphics_25 = new cjs.Graphics().p("AlkErIAApVILJAAIAAJVg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AlkE2IAAprILJAAIAAJrg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AlkFCIAAqDILJAAIAAKDg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AlkFNIAAqZILJAAIAAKZg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AlkFYIAAqvILJAAIAAKvg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AlkFkIAArHILJAAIAALHg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AlkFvIAArdILJAAIAALdg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AlkF7IAAr1ILJAAIAAL1g");
	var mask_1_graphics_33 = new cjs.Graphics().p("AlkGGIAAsLILJAAIAAMLg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AlkGRIAAshILJAAIAAMhg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AlkGdIAAs5ILJAAIAAM5g");
	var mask_1_graphics_36 = new cjs.Graphics().p("AlkGoIAAtPILJAAIAANPg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AlkG0IAAtnILJAAIAANng");
	var mask_1_graphics_38 = new cjs.Graphics().p("AlkG/IAAt9ILJAAIAAN9g");
	var mask_1_graphics_39 = new cjs.Graphics().p("AlkHLIAAuUILJAAIAAOUg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AlkHWIAAurILJAAIAAOrg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AlkHhIAAvBILJAAIAAPBg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AlkHtIAAvZILJAAIAAPZg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AlkH4IAAvvILJAAIAAPvg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AlkIDIAAwFILJAAIAAQFg");
	var mask_1_graphics_45 = new cjs.Graphics().p("AlkIPIAAwdILJAAIAAQdg");
	var mask_1_graphics_46 = new cjs.Graphics().p("AlkIaIAAwzILJAAIAAQzg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AlkImIAAxLILJAAIAARLg");
	var mask_1_graphics_48 = new cjs.Graphics().p("AlkIxIAAxhILJAAIAARhg");
	var mask_1_graphics_49 = new cjs.Graphics().p("AlkI8IAAx3ILJAAIAAR3g");
	var mask_1_graphics_50 = new cjs.Graphics().p("AlkJIIAAyPILJAAIAASPg");
	var mask_1_graphics_51 = new cjs.Graphics().p("AlkJTIAAylILJAAIAASlg");
	var mask_1_graphics_52 = new cjs.Graphics().p("AlkJfIAAy9ILJAAIAAS9g");
	var mask_1_graphics_53 = new cjs.Graphics().p("AlkJqIAAzTILJAAIAATTg");
	var mask_1_graphics_54 = new cjs.Graphics().p("AlkJ2IAAzqILJAAIAATqg");
	var mask_1_graphics_55 = new cjs.Graphics().p("AlkKBIAA0BILJAAIAAUBg");
	var mask_1_graphics_56 = new cjs.Graphics().p("AlkKMIAA0XILJAAIAAUXg");
	var mask_1_graphics_57 = new cjs.Graphics().p("AlkKYIAA0vILJAAIAAUvg");
	var mask_1_graphics_58 = new cjs.Graphics().p("AlkKjIAA1FILJAAIAAVFg");
	var mask_1_graphics_59 = new cjs.Graphics().p("AlkKuIAA1bILJAAIAAVbg");
	var mask_1_graphics_60 = new cjs.Graphics().p("AlkK6IAA1zILJAAIAAVzg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AlkLFIAA2JILJAAIAAWJg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AlkLRIAA2hILJAAIAAWhg");
	var mask_1_graphics_63 = new cjs.Graphics().p("AlkLcIAA23ILJAAIAAW3g");
	var mask_1_graphics_64 = new cjs.Graphics().p("AlkLnIAA3NILJAAIAAXNg");
	var mask_1_graphics_65 = new cjs.Graphics().p("AlkLzIAA3lILJAAIAAXlg");
	var mask_1_graphics_66 = new cjs.Graphics().p("AlkL+IAA37ILJAAIAAX7g");
	var mask_1_graphics_67 = new cjs.Graphics().p("AlkMJIAA4SILJAAIAAYSg");
	var mask_1_graphics_68 = new cjs.Graphics().p("AlkMVIAA4pILJAAIAAYpg");
	var mask_1_graphics_69 = new cjs.Graphics().p("AlkMgIAA4/ILJAAIAAY/g");
	var mask_1_graphics_70 = new cjs.Graphics().p("AlkMsIAA5XILJAAIAAZXg");
	var mask_1_graphics_71 = new cjs.Graphics().p("AlkM3IAA5tILJAAIAAZtg");
	var mask_1_graphics_72 = new cjs.Graphics().p("AlkNDIAA6FILJAAIAAaFg");
	var mask_1_graphics_73 = new cjs.Graphics().p("AlkNOIAA6bILJAAIAAabg");
	var mask_1_graphics_74 = new cjs.Graphics().p("AlkNZIAA6xILJAAIAAaxg");
	var mask_1_graphics_75 = new cjs.Graphics().p("AlkNlIAA7JILJAAIAAbJg");
	var mask_1_graphics_76 = new cjs.Graphics().p("AlkNwIAA7fILJAAIAAbfg");
	var mask_1_graphics_77 = new cjs.Graphics().p("AlkN8IAA73ILJAAIAAb3g");
	var mask_1_graphics_78 = new cjs.Graphics().p("AlkOHIAA8NILJAAIAAcNg");
	var mask_1_graphics_79 = new cjs.Graphics().p("AlkOSIAA8jILJAAIAAcjg");
	var mask_1_graphics_80 = new cjs.Graphics().p("AlkOeIAA87ILJAAIAAc7g");
	var mask_1_graphics_81 = new cjs.Graphics().p("AlkOpIAA9RILJAAIAAdRg");
	var mask_1_graphics_82 = new cjs.Graphics().p("AlkO0IAA9oILJAAIAAdog");
	var mask_1_graphics_83 = new cjs.Graphics().p("AlkPAIAA9/ILJAAIAAd/g");
	var mask_1_graphics_84 = new cjs.Graphics().p("AlkPLIAA+VILJAAIAAeVg");
	var mask_1_graphics_85 = new cjs.Graphics().p("AlkPXIAA+tILJAAIAAetg");
	var mask_1_graphics_86 = new cjs.Graphics().p("AlkPiIAA/DILJAAIAAfDg");
	var mask_1_graphics_87 = new cjs.Graphics().p("AlkPuIAA/bILJAAIAAfbg");
	var mask_1_graphics_88 = new cjs.Graphics().p("AlkP5IAA/xILJAAIAAfxg");
	var mask_1_graphics_89 = new cjs.Graphics().p("AlkQEMAAAggHILJAAMAAAAgHg");
	var mask_1_graphics_90 = new cjs.Graphics().p("AlkQQMAAAggfILJAAMAAAAgfg");
	var mask_1_graphics_91 = new cjs.Graphics().p("AlkQbMAAAgg1ILJAAMAAAAg1g");
	var mask_1_graphics_92 = new cjs.Graphics().p("AlkQnMAAAghNILJAAMAAAAhNg");
	var mask_1_graphics_93 = new cjs.Graphics().p("AlkQyMAAAghjILJAAMAAAAhjg");
	var mask_1_graphics_94 = new cjs.Graphics().p("AlkQ9MAAAgh5ILJAAMAAAAh5g");
	var mask_1_graphics_95 = new cjs.Graphics().p("AlkRJMAAAgiRILJAAMAAAAiRg");
	var mask_1_graphics_96 = new cjs.Graphics().p("AlkRUMAAAginILJAAMAAAAing");
	var mask_1_graphics_97 = new cjs.Graphics().p("AlkRfMAAAgi+ILJAAMAAAAi+g");
	var mask_1_graphics_98 = new cjs.Graphics().p("AlkRrMAAAgjVILJAAMAAAAjVg");
	var mask_1_graphics_99 = new cjs.Graphics().p("AlkR2MAAAgjrILJAAMAAAAjrg");
	var mask_1_graphics_100 = new cjs.Graphics().p("AlkSCMAAAgkDILJAAMAAAAkDg");
	var mask_1_graphics_101 = new cjs.Graphics().p("AlkSNMAAAgkZILJAAMAAAAkZg");
	var mask_1_graphics_102 = new cjs.Graphics().p("AlkSZMAAAgkxILJAAMAAAAkxg");
	var mask_1_graphics_103 = new cjs.Graphics().p("AlkSkMAAAglHILJAAMAAAAlHg");
	var mask_1_graphics_104 = new cjs.Graphics().p("AlkSvMAAAgldILJAAMAAAAldg");
	var mask_1_graphics_105 = new cjs.Graphics().p("AlkS7MAAAgl1ILJAAMAAAAl1g");
	var mask_1_graphics_106 = new cjs.Graphics().p("AlkTGMAAAgmLILJAAMAAAAmLg");
	var mask_1_graphics_107 = new cjs.Graphics().p("AlkTSMAAAgmjILJAAMAAAAmjg");
	var mask_1_graphics_108 = new cjs.Graphics().p("AlkTdMAAAgm5ILJAAMAAAAm5g");
	var mask_1_graphics_109 = new cjs.Graphics().p("AlkToMAAAgnPILJAAMAAAAnPg");
	var mask_1_graphics_110 = new cjs.Graphics().p("AlkT0MAAAgnnILJAAMAAAAnng");
	var mask_1_graphics_111 = new cjs.Graphics().p("AlkT/MAAAgn9ILJAAMAAAAn9g");
	var mask_1_graphics_112 = new cjs.Graphics().p("AlkUKMAAAgoUILJAAMAAAAoUg");
	var mask_1_graphics_113 = new cjs.Graphics().p("AlkUWMAAAgorILJAAMAAAAorg");
	var mask_1_graphics_114 = new cjs.Graphics().p("AlkUhMAAAgpBILJAAMAAAApBg");
	var mask_1_graphics_115 = new cjs.Graphics().p("AlkUtMAAAgpZILJAAMAAAApZg");
	var mask_1_graphics_116 = new cjs.Graphics().p("AlkU4MAAAgpvILJAAMAAAApvg");
	var mask_1_graphics_117 = new cjs.Graphics().p("AlkVEMAAAgqHILJAAMAAAAqHg");
	var mask_1_graphics_118 = new cjs.Graphics().p("AlkVPMAAAgqdILJAAMAAAAqdg");
	var mask_1_graphics_119 = new cjs.Graphics().p("AlkVaMAAAgqzILJAAMAAAAqzg");
	var mask_1_graphics_288 = new cjs.Graphics().p("ANvWEIAAhVILIAAIAABVgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_289 = new cjs.Graphics().p("ANvWEIAAhsILIAAIAABsgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_290 = new cjs.Graphics().p("ANvWEIAAiDILIAAIAACDgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_291 = new cjs.Graphics().p("ANvWEIAAiaILIAAIAACagA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_292 = new cjs.Graphics().p("ANvWEIAAiwILIAAIAACwgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_293 = new cjs.Graphics().p("ANvWEIAAjHILIAAIAADHgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_294 = new cjs.Graphics().p("ANvWEIAAjdILIAAIAADdgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_295 = new cjs.Graphics().p("ANvWEIAAj0ILIAAIAAD0gA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_296 = new cjs.Graphics().p("ANvWEIAAkKILIAAIAAEKgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_297 = new cjs.Graphics().p("ANvWEIAAkiILIAAIAAEigA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_298 = new cjs.Graphics().p("ANvWEIAAk4ILIAAIAAE4gA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_299 = new cjs.Graphics().p("ANvWEIAAlPILIAAIAAFPgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_300 = new cjs.Graphics().p("ANvWEIAAllILIAAIAAFlgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_301 = new cjs.Graphics().p("ANvWEIAAl8ILIAAIAAF8gA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_302 = new cjs.Graphics().p("ANvWEIAAmSILIAAIAAGSgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_303 = new cjs.Graphics().p("ANvWEIAAmqILIAAIAAGqgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_304 = new cjs.Graphics().p("ANvWEIAAnAILIAAIAAHAgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_305 = new cjs.Graphics().p("ANvWEIAAnXILIAAIAAHXgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_306 = new cjs.Graphics().p("ANvWEIAAntILIAAIAAHtgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_307 = new cjs.Graphics().p("ANvWEIAAoEILIAAIAAIEgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_308 = new cjs.Graphics().p("ANvWEIAAobILIAAIAAIbgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_309 = new cjs.Graphics().p("ANvWEIAAoxILIAAIAAIxgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_310 = new cjs.Graphics().p("ANvWEIAApIILIAAIAAJIgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_311 = new cjs.Graphics().p("ANvWEIAApeILIAAIAAJegA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_312 = new cjs.Graphics().p("ANvWEIAAp1ILIAAIAAJ1gA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_313 = new cjs.Graphics().p("ANvWEIAAqMILIAAIAAKMgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_314 = new cjs.Graphics().p("ANvWEIAAqjILIAAIAAKjgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_315 = new cjs.Graphics().p("ANvWEIAAq5ILIAAIAAK5gA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_316 = new cjs.Graphics().p("ANvWEIAArQILIAAIAALQgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_317 = new cjs.Graphics().p("ANvWEIAArmILIAAIAALmgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_318 = new cjs.Graphics().p("ANvWEIAAr9ILIAAIAAL9gA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_319 = new cjs.Graphics().p("ANvWEIAAsUILIAAIAAMUgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_320 = new cjs.Graphics().p("ANvWEIAAsrILIAAIAAMrgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_321 = new cjs.Graphics().p("ANvWEIAAtBILIAAIAANBgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_322 = new cjs.Graphics().p("ANvWEIAAtYILIAAIAANYgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_323 = new cjs.Graphics().p("ANvWEIAAtuILIAAIAANugA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_324 = new cjs.Graphics().p("ANvWEIAAuFILIAAIAAOFgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_325 = new cjs.Graphics().p("ANvWEIAAubILIAAIAAObgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_326 = new cjs.Graphics().p("ANvWEIAAuzILIAAIAAOzgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_327 = new cjs.Graphics().p("ANvWEIAAvJILIAAIAAPJgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_328 = new cjs.Graphics().p("ANvWEIAAvgILIAAIAAPggA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_329 = new cjs.Graphics().p("ANvWEIAAv2ILIAAIAAP2gA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_330 = new cjs.Graphics().p("ANvWEIAAwNILIAAIAAQNgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_331 = new cjs.Graphics().p("ANvWEIAAwjILIAAIAAQjgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_332 = new cjs.Graphics().p("ANvWEIAAw6ILIAAIAAQ6gA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_333 = new cjs.Graphics().p("ANvWEIAAxRILIAAIAARRgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_334 = new cjs.Graphics().p("ANvWEIAAxoILIAAIAARogA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_335 = new cjs.Graphics().p("ANvWEIAAx+ILIAAIAAR+gA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_336 = new cjs.Graphics().p("ANvWEIAAyVILIAAIAASVgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_337 = new cjs.Graphics().p("ANvWEIAAysILIAAIAASsgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_338 = new cjs.Graphics().p("ANvWEIAAzCILIAAIAATCgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_339 = new cjs.Graphics().p("ANvWEIAAzZILIAAIAATZgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_340 = new cjs.Graphics().p("ANvWEIAAzvILIAAIAATvgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_341 = new cjs.Graphics().p("ANvWEIAA0GILIAAIAAUGgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_342 = new cjs.Graphics().p("ANvWEIAA0dILIAAIAAUdgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_343 = new cjs.Graphics().p("ANvWEIAA00ILIAAIAAU0gA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_344 = new cjs.Graphics().p("ANvWEIAA1KILIAAIAAVKgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_345 = new cjs.Graphics().p("ANvWEIAA1hILIAAIAAVhgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_346 = new cjs.Graphics().p("ANvWEIAA13ILIAAIAAV3gA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_347 = new cjs.Graphics().p("ANvWEIAA2NILIAAIAAWNgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_348 = new cjs.Graphics().p("ANvWEIAA2jILIAAIAAWjgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_349 = new cjs.Graphics().p("ANvWEIAA27ILIAAIAAW7gA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_350 = new cjs.Graphics().p("ANvWEIAA3RILIAAIAAXRgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_351 = new cjs.Graphics().p("ANvWEIAA3oILIAAIAAXogA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_352 = new cjs.Graphics().p("ANvWEIAA3+ILIAAIAAX+gA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_353 = new cjs.Graphics().p("ANvWEIAA4VILIAAIAAYVgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_354 = new cjs.Graphics().p("ANvWEIAA4rILIAAIAAYrgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_355 = new cjs.Graphics().p("ANvWEIAA5DILIAAIAAZDgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_356 = new cjs.Graphics().p("ANvWEIAA5ZILIAAIAAZZgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_357 = new cjs.Graphics().p("ANvWEIAA5wILIAAIAAZwgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_358 = new cjs.Graphics().p("ANvWEIAA6GILIAAIAAaGgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_359 = new cjs.Graphics().p("ANvWEIAA6dILIAAIAAadgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_360 = new cjs.Graphics().p("ANvWEIAA6zILIAAIAAazgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_361 = new cjs.Graphics().p("ANvWEIAA7KILIAAIAAbKgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_362 = new cjs.Graphics().p("ANvWEIAA7hILIAAIAAbhgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_363 = new cjs.Graphics().p("ANvWEIAA74ILIAAIAAb4gA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_364 = new cjs.Graphics().p("ANvWEIAA8OILIAAIAAcOgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_365 = new cjs.Graphics().p("ANvWEIAA8lILIAAIAAclgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_366 = new cjs.Graphics().p("ANvWEIAA88ILIAAIAAc8gA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_367 = new cjs.Graphics().p("ANvWEIAA9SILIAAIAAdSgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_368 = new cjs.Graphics().p("ANvWEIAA9pILIAAIAAdpgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_369 = new cjs.Graphics().p("ANvWEIAA9/ILIAAIAAd/gA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_370 = new cjs.Graphics().p("ANvWEIAA+WILIAAIAAeWgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_371 = new cjs.Graphics().p("ANvWEIAA+sILIAAIAAesgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_372 = new cjs.Graphics().p("ANvWEIAA/EILIAAIAAfEgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_373 = new cjs.Graphics().p("ANvWEIAA/aILIAAIAAfagA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_374 = new cjs.Graphics().p("ANvWEIAA/xILIAAIAAfxgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_375 = new cjs.Graphics().p("ANvWEMAAAggHILIAAMAAAAgHgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_376 = new cjs.Graphics().p("ANvWEMAAAggeILIAAMAAAAgegA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_377 = new cjs.Graphics().p("ANvWEMAAAgg0ILIAAMAAAAg0gA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_378 = new cjs.Graphics().p("ANvWEMAAAghMILIAAMAAAAhMgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_379 = new cjs.Graphics().p("ANvWEMAAAghiILIAAMAAAAhigA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_380 = new cjs.Graphics().p("ANvWEMAAAgh5ILIAAMAAAAh5gA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_381 = new cjs.Graphics().p("ANvWEMAAAgiPILIAAMAAAAiPgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_382 = new cjs.Graphics().p("ANvWEMAAAgimILIAAMAAAAimgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_383 = new cjs.Graphics().p("ANvWEMAAAgi8ILIAAMAAAAi8gA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_384 = new cjs.Graphics().p("ANvWEMAAAgjTILIAAMAAAAjTgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_385 = new cjs.Graphics().p("ANvWEMAAAgjqILIAAMAAAAjqgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_386 = new cjs.Graphics().p("ANvWEMAAAgkBILIAAMAAAAkBgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_387 = new cjs.Graphics().p("ANvWEMAAAgkXILIAAMAAAAkXgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_388 = new cjs.Graphics().p("ANvWEMAAAgkuILIAAMAAAAkugA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_389 = new cjs.Graphics().p("ANvWEMAAAglEILIAAMAAAAlEgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_390 = new cjs.Graphics().p("ANvWEMAAAglbILIAAMAAAAlbgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_391 = new cjs.Graphics().p("ANvWEMAAAglyILIAAMAAAAlygA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_392 = new cjs.Graphics().p("ANvWEMAAAgmJILIAAMAAAAmJgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_393 = new cjs.Graphics().p("ANvWEMAAAgmfILIAAMAAAAmfgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_394 = new cjs.Graphics().p("ANvWEMAAAgm2ILIAAMAAAAm2gA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_395 = new cjs.Graphics().p("ANvWEMAAAgnNILIAAMAAAAnNgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_396 = new cjs.Graphics().p("ANvWEMAAAgnjILIAAMAAAAnjgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_397 = new cjs.Graphics().p("ANvWEMAAAgn6ILIAAMAAAAn6gA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_398 = new cjs.Graphics().p("ANvWEMAAAgoQILIAAMAAAAoQgA43UwMAAAgq0ILKAAMAAAAq0g");
	var mask_1_graphics_399 = new cjs.Graphics().p("ANvWEMAAAgonILIAAMAAAAongA43UwMAAAgq0ILKAAMAAAAq0g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_1_graphics_9,x:147.7,y:76.4}).wait(1).to({graphics:mask_1_graphics_10,x:147.7,y:77.5}).wait(1).to({graphics:mask_1_graphics_11,x:147.7,y:78.6}).wait(1).to({graphics:mask_1_graphics_12,x:147.7,y:79.8}).wait(1).to({graphics:mask_1_graphics_13,x:147.7,y:80.9}).wait(1).to({graphics:mask_1_graphics_14,x:147.7,y:82.1}).wait(1).to({graphics:mask_1_graphics_15,x:147.7,y:83.2}).wait(1).to({graphics:mask_1_graphics_16,x:147.7,y:84.3}).wait(1).to({graphics:mask_1_graphics_17,x:147.7,y:85.5}).wait(1).to({graphics:mask_1_graphics_18,x:147.7,y:86.6}).wait(1).to({graphics:mask_1_graphics_19,x:147.7,y:87.8}).wait(1).to({graphics:mask_1_graphics_20,x:147.7,y:88.9}).wait(1).to({graphics:mask_1_graphics_21,x:147.7,y:90}).wait(1).to({graphics:mask_1_graphics_22,x:147.7,y:91.2}).wait(1).to({graphics:mask_1_graphics_23,x:147.7,y:92.3}).wait(1).to({graphics:mask_1_graphics_24,x:147.7,y:93.5}).wait(1).to({graphics:mask_1_graphics_25,x:147.7,y:94.6}).wait(1).to({graphics:mask_1_graphics_26,x:147.7,y:95.7}).wait(1).to({graphics:mask_1_graphics_27,x:147.7,y:96.9}).wait(1).to({graphics:mask_1_graphics_28,x:147.7,y:98}).wait(1).to({graphics:mask_1_graphics_29,x:147.7,y:99.2}).wait(1).to({graphics:mask_1_graphics_30,x:147.7,y:100.3}).wait(1).to({graphics:mask_1_graphics_31,x:147.7,y:101.4}).wait(1).to({graphics:mask_1_graphics_32,x:147.7,y:102.6}).wait(1).to({graphics:mask_1_graphics_33,x:147.7,y:103.7}).wait(1).to({graphics:mask_1_graphics_34,x:147.7,y:104.9}).wait(1).to({graphics:mask_1_graphics_35,x:147.7,y:106}).wait(1).to({graphics:mask_1_graphics_36,x:147.7,y:107.1}).wait(1).to({graphics:mask_1_graphics_37,x:147.7,y:108.3}).wait(1).to({graphics:mask_1_graphics_38,x:147.7,y:109.4}).wait(1).to({graphics:mask_1_graphics_39,x:147.7,y:110.6}).wait(1).to({graphics:mask_1_graphics_40,x:147.7,y:111.7}).wait(1).to({graphics:mask_1_graphics_41,x:147.7,y:112.8}).wait(1).to({graphics:mask_1_graphics_42,x:147.7,y:114}).wait(1).to({graphics:mask_1_graphics_43,x:147.7,y:115.1}).wait(1).to({graphics:mask_1_graphics_44,x:147.7,y:116.3}).wait(1).to({graphics:mask_1_graphics_45,x:147.7,y:117.4}).wait(1).to({graphics:mask_1_graphics_46,x:147.7,y:118.5}).wait(1).to({graphics:mask_1_graphics_47,x:147.7,y:119.7}).wait(1).to({graphics:mask_1_graphics_48,x:147.7,y:120.8}).wait(1).to({graphics:mask_1_graphics_49,x:147.7,y:122}).wait(1).to({graphics:mask_1_graphics_50,x:147.7,y:123.1}).wait(1).to({graphics:mask_1_graphics_51,x:147.7,y:124.2}).wait(1).to({graphics:mask_1_graphics_52,x:147.7,y:125.4}).wait(1).to({graphics:mask_1_graphics_53,x:147.7,y:126.5}).wait(1).to({graphics:mask_1_graphics_54,x:147.7,y:127.7}).wait(1).to({graphics:mask_1_graphics_55,x:147.7,y:128.8}).wait(1).to({graphics:mask_1_graphics_56,x:147.7,y:129.9}).wait(1).to({graphics:mask_1_graphics_57,x:147.7,y:131.1}).wait(1).to({graphics:mask_1_graphics_58,x:147.7,y:132.2}).wait(1).to({graphics:mask_1_graphics_59,x:147.7,y:133.4}).wait(1).to({graphics:mask_1_graphics_60,x:147.7,y:134.5}).wait(1).to({graphics:mask_1_graphics_61,x:147.7,y:135.6}).wait(1).to({graphics:mask_1_graphics_62,x:147.7,y:136.8}).wait(1).to({graphics:mask_1_graphics_63,x:147.7,y:137.9}).wait(1).to({graphics:mask_1_graphics_64,x:147.7,y:139.1}).wait(1).to({graphics:mask_1_graphics_65,x:147.7,y:140.2}).wait(1).to({graphics:mask_1_graphics_66,x:147.7,y:141.4}).wait(1).to({graphics:mask_1_graphics_67,x:147.7,y:142.5}).wait(1).to({graphics:mask_1_graphics_68,x:147.7,y:143.6}).wait(1).to({graphics:mask_1_graphics_69,x:147.7,y:144.8}).wait(1).to({graphics:mask_1_graphics_70,x:147.7,y:145.9}).wait(1).to({graphics:mask_1_graphics_71,x:147.7,y:147.1}).wait(1).to({graphics:mask_1_graphics_72,x:147.7,y:148.2}).wait(1).to({graphics:mask_1_graphics_73,x:147.7,y:149.3}).wait(1).to({graphics:mask_1_graphics_74,x:147.7,y:150.5}).wait(1).to({graphics:mask_1_graphics_75,x:147.7,y:151.6}).wait(1).to({graphics:mask_1_graphics_76,x:147.7,y:152.8}).wait(1).to({graphics:mask_1_graphics_77,x:147.7,y:153.9}).wait(1).to({graphics:mask_1_graphics_78,x:147.7,y:155}).wait(1).to({graphics:mask_1_graphics_79,x:147.7,y:156.2}).wait(1).to({graphics:mask_1_graphics_80,x:147.7,y:157.3}).wait(1).to({graphics:mask_1_graphics_81,x:147.7,y:158.5}).wait(1).to({graphics:mask_1_graphics_82,x:147.7,y:159.6}).wait(1).to({graphics:mask_1_graphics_83,x:147.7,y:160.7}).wait(1).to({graphics:mask_1_graphics_84,x:147.7,y:161.9}).wait(1).to({graphics:mask_1_graphics_85,x:147.7,y:163}).wait(1).to({graphics:mask_1_graphics_86,x:147.7,y:164.2}).wait(1).to({graphics:mask_1_graphics_87,x:147.7,y:165.3}).wait(1).to({graphics:mask_1_graphics_88,x:147.7,y:166.4}).wait(1).to({graphics:mask_1_graphics_89,x:147.7,y:167.6}).wait(1).to({graphics:mask_1_graphics_90,x:147.7,y:168.7}).wait(1).to({graphics:mask_1_graphics_91,x:147.7,y:169.9}).wait(1).to({graphics:mask_1_graphics_92,x:147.7,y:171}).wait(1).to({graphics:mask_1_graphics_93,x:147.7,y:172.1}).wait(1).to({graphics:mask_1_graphics_94,x:147.7,y:173.3}).wait(1).to({graphics:mask_1_graphics_95,x:147.7,y:174.4}).wait(1).to({graphics:mask_1_graphics_96,x:147.7,y:175.6}).wait(1).to({graphics:mask_1_graphics_97,x:147.7,y:176.7}).wait(1).to({graphics:mask_1_graphics_98,x:147.7,y:177.8}).wait(1).to({graphics:mask_1_graphics_99,x:147.7,y:179}).wait(1).to({graphics:mask_1_graphics_100,x:147.7,y:180.1}).wait(1).to({graphics:mask_1_graphics_101,x:147.7,y:181.3}).wait(1).to({graphics:mask_1_graphics_102,x:147.7,y:182.4}).wait(1).to({graphics:mask_1_graphics_103,x:147.7,y:183.5}).wait(1).to({graphics:mask_1_graphics_104,x:147.7,y:184.7}).wait(1).to({graphics:mask_1_graphics_105,x:147.7,y:185.8}).wait(1).to({graphics:mask_1_graphics_106,x:147.7,y:187}).wait(1).to({graphics:mask_1_graphics_107,x:147.7,y:188.1}).wait(1).to({graphics:mask_1_graphics_108,x:147.7,y:189.2}).wait(1).to({graphics:mask_1_graphics_109,x:147.7,y:190.4}).wait(1).to({graphics:mask_1_graphics_110,x:147.7,y:191.5}).wait(1).to({graphics:mask_1_graphics_111,x:147.7,y:192.7}).wait(1).to({graphics:mask_1_graphics_112,x:147.7,y:193.8}).wait(1).to({graphics:mask_1_graphics_113,x:147.7,y:194.9}).wait(1).to({graphics:mask_1_graphics_114,x:147.7,y:196.1}).wait(1).to({graphics:mask_1_graphics_115,x:147.7,y:197.2}).wait(1).to({graphics:mask_1_graphics_116,x:147.7,y:198.4}).wait(1).to({graphics:mask_1_graphics_117,x:147.7,y:199.5}).wait(1).to({graphics:mask_1_graphics_118,x:147.7,y:200.6}).wait(1).to({graphics:mask_1_graphics_119,x:147.7,y:201.8}).wait(169).to({graphics:mask_1_graphics_288,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_289,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_290,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_291,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_292,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_293,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_294,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_295,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_296,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_297,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_298,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_299,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_300,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_301,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_302,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_303,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_304,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_305,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_306,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_307,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_308,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_309,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_310,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_311,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_312,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_313,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_314,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_315,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_316,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_317,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_318,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_319,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_320,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_321,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_322,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_323,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_324,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_325,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_326,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_327,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_328,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_329,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_330,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_331,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_332,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_333,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_334,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_335,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_336,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_337,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_338,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_339,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_340,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_341,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_342,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_343,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_344,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_345,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_346,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_347,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_348,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_349,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_350,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_351,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_352,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_353,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_354,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_355,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_356,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_357,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_358,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_359,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_360,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_361,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_362,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_363,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_364,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_365,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_366,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_367,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_368,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_369,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_370,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_371,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_372,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_373,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_374,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_375,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_376,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_377,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_378,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_379,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_380,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_381,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_382,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_383,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_384,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_385,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_386,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_387,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_388,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_389,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_390,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_391,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_392,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_393,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_394,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_395,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_396,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_397,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_398,x:271.2,y:206}).wait(1).to({graphics:mask_1_graphics_399,x:271.2,y:206}).wait(78));

	// 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("ATD63MAACAi2QgBASgBARQgZHVlJFSQlkFvn4AAQn3AAlklvQlKlSgbnVMgAJgjZ");
	this.shape_4.setTransform(275.3,273.4);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(9).to({_off:false},0).wait(468));

	// Base
	this.instance_2 = new lib.Symbol1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(275.1,273.3);
	this.instance_2.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(477));

	// Background
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_5.setTransform(275,275,3.373,2.543);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_6.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(477));

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