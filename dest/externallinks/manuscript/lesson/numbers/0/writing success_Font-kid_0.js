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
	this.shape.graphics.f("#FFFFFF").s().p("AwOW1QmIpiAAtMQAAtJGWprQGhqDJoAAQJnAAGaKDQGNJmAANOQAANImYJmQmmJ8poAAQpnAAmYp8gArezfQlTIBAALlQAALpFHH3QE1HeGmAAQGnAAFDneQFXn8AArkQAArnlKn6Qk5npmmAAQmnAAlAHkg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.1,-209.6,286.3,419.4);


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


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(21.2,-141.8,1,1,68.5,0,0,0.4,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0,guide:{path:[21.1,-141.7,-15.9,-129.3,-45.3,-88.8,-68.6,-56.8,-67.2,-12.1]}},84).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgVSgg0QN1jbMMHWQMMHXDbN1QDbNznWMMQnXMNtzDbg");
	var mask_graphics_1 = new cjs.Graphics().p("EgVkggpQNyjmMRHLQMSHNDnNyQDmNwnLMSQnNMTtxDng");
	var mask_graphics_2 = new cjs.Graphics().p("EgVyggeQNvjyMXHCQMYHDDyNuQDyNunCMXQnCMZttDyg");
	var mask_graphics_3 = new cjs.Graphics().p("EgWAggSQNsj9MdG3QMeG5D9NrQD9Nqm3MdQm4MftqD9g");
	var mask_graphics_4 = new cjs.Graphics().p("EgWNggGQNnkIMjGtQMkGuEINoQEJNmmtMjQmuMltmEJg");
	var mask_graphics_5 = new cjs.Graphics().p("A2b/5QNkkUMpGjQMpGjETNlQEUNjmiMpQmjMptkEUg");
	var mask_graphics_6 = new cjs.Graphics().p("A2p/rQNhkgMuGYQMuGZEfNhQEfNgmYMuQmZMvtfEfg");
	var mask_graphics_7 = new cjs.Graphics().p("A22/eQNdkqMzGNQMzGPEqNdQErNcmOMzQmOM0tcErg");
	var mask_graphics_8 = new cjs.Graphics().p("A3E/PQNZk2M4GDQM5GEE1NZQE2NYmDM4QmEM5tYE2g");
	var mask_graphics_9 = new cjs.Graphics().p("A3R/AQNVlBM9F4QM9F5FBNVQFANUl4M9Ql5M+tUFBg");
	var mask_graphics_10 = new cjs.Graphics().p("A3e+xQNQlMNCFtQNCFvFMNRQFLNPltNCQluNDtRFMg");
	var mask_graphics_11 = new cjs.Graphics().p("A3s+hQNMlXNHFiQNHFkFWNMQFXNMljNGQljNItMFXg");
	var mask_graphics_12 = new cjs.Graphics().p("A35+RQNIlhNLFXQNLFZFiNHQFhNHlXNLQlZNNtHFhg");
	var mask_graphics_13 = new cjs.Graphics().p("A4G+AQNDlsNPFMQNQFOFtNDQFsNClNNPQlNNRtDFsg");
	var mask_graphics_14 = new cjs.Graphics().p("A4T9vQM+l3NUFCQNUFCF3M/QF3M9lCNTQlCNWs+F3g");
	var mask_graphics_15 = new cjs.Graphics().p("A4g9dQM5mBNYE2QNYE3GCM6QGCM4k3NYQk3NZs5GCg");
	var mask_graphics_16 = new cjs.Graphics().p("A4t9KQM1mNNbErQNcEtGNM0QGMM0krNbQksNds0GMg");
	var mask_graphics_17 = new cjs.Graphics().p("A4584QMvmXNfEgQNgEiGXMvQGXMvkgNeQkhNhsvGXg");
	var mask_graphics_18 = new cjs.Graphics().p("A5G8kQMqmiNjEVQNjEWGiMqQGhMpkVNiQkVNlsqGhg");
	var mask_graphics_19 = new cjs.Graphics().p("A5S8RQMkmsNmEKQNnELGsMkQGsMkkJNmQkLNoskGsg");
	var mask_graphics_20 = new cjs.Graphics().p("A5f78QMfm3NqD+QNqEAG2MeQG3Mfj/NpQj/NsseG2g");
	var mask_graphics_21 = new cjs.Graphics().p("A5r7oQMZnANtDyQNtD1HBMYQHBMZjzNsQj0NvsZHBg");
	var mask_graphics_22 = new cjs.Graphics().p("A537SQMSnLNxDnQNxDpHKMTQHLMTjnNvQjpNysSHLg");
	var mask_graphics_23 = new cjs.Graphics().p("A6D69QMMnVN1DcQNyDdHVMNQHVMNjcNyQjdN1sMHVg");
	var mask_graphics_24 = new cjs.Graphics().p("A6P6nQMGnfN3DRQN2DSHfMGQHfMHjRN1QjRN3sHHgg");
	var mask_graphics_25 = new cjs.Graphics().p("A6b6QQMAnpN6DFQN4DGHpMBQHpMAjFN4QjGN6sAHpg");
	var mask_graphics_26 = new cjs.Graphics().p("A6n55QL6nzN8C5QN6C7HzL6QH0L6i6N6Qi6N9r6Hzg");
	var mask_graphics_27 = new cjs.Graphics().p("A6z5hQL0n9N+CtQN9CwH9LzQH9L0ivN8QiuN/r0H9g");
	var mask_graphics_28 = new cjs.Graphics().p("A6+5KQLsoGOBCiQN/CkIHLtQIGLsiiN/QijOBrtIHg");
	var mask_graphics_29 = new cjs.Graphics().p("A7K4xQLmoQODCWQOBCYIQLmQIQLmiXOBQiXODrmIQg");
	var mask_graphics_30 = new cjs.Graphics().p("A7V4YQLfoaOECLQODCMIaLfQIaLfiLODQiMOFrfIag");
	var mask_graphics_31 = new cjs.Graphics().p("A7g3/QLYojOGB/QOECBIkLYQIjLYiAOEQiAOHrYIjg");
	var mask_graphics_32 = new cjs.Graphics().p("A7s3lQLRotOIB0QOGB1ItLRQItLRh0OFQh1OJrQIsg");
	var mask_graphics_33 = new cjs.Graphics().p("A733LQLKo2OJBoQOIBpI2LKQI2LJhpOIQhoOJrKI2g");
	var mask_graphics_34 = new cjs.Graphics().p("A8C2wQLDo/OKBcQOJBdI/LCQI/LDhcOIQhdOLrCI/g");
	var mask_graphics_35 = new cjs.Graphics().p("A8M2VQK6pIOMBQQOKBSJIK6QJIK7hQOKQhROMq7JIg");
	var mask_graphics_36 = new cjs.Graphics().p("A8X16QKzpROMBEQOLBHJSKzQJRKzhFOKQhFONqzJSg");
	var mask_graphics_37 = new cjs.Graphics().p("A8i1eQKspaONA5QOMA6JaKrQJaKsg5OLQg6OOqrJag");
	var mask_graphics_38 = new cjs.Graphics().p("A8s1BQKjpjOOAtQONAuJjKkQJjKjguOMQguOPqjJig");
	var mask_graphics_39 = new cjs.Graphics().p("A830lQKcprOOAhQONAjJsKbQJsKcgiOMQgiOPqbJsg");
	var mask_graphics_40 = new cjs.Graphics().p("A9B0HQKTp0OPAVQOOAXJ0KTQJ0KUgWOMQgWOQqTJ0g");
	var mask_graphics_41 = new cjs.Graphics().p("A9LzqQKLp8OPAJQOOALJ8KMQJ9KLgKONQgKOPqLJ9g");
	var mask_graphics_42 = new cjs.Graphics().p("A9VzMQKDqFOPgCQONgBKFKDQKGKDABONQACOQqDKFg");
	var mask_graphics_43 = new cjs.Graphics().p("A9fytQJ6qNOPgPQOOgMKNJ6QKNJ7AOONQANOPp6KOg");
	var mask_graphics_44 = new cjs.Graphics().p("A9pyOQJyqWOOgaQOOgYKVJyQKWJyAZONQAZOPpyKVg");
	var mask_graphics_45 = new cjs.Graphics().p("A9zxvQJpqdOOgmQOOgkKdJpQKeJpAlONQAlOPpqKdg");
	var mask_graphics_46 = new cjs.Graphics().p("A98xPQJgqmOOgxQOMgwKmJhQKlJgAxOMQAxOOphKmg");
	var mask_graphics_47 = new cjs.Graphics().p("A+GwvQJYqtOMg+QOMg7KuJXQKtJYA8OLQA9OOpYKtg");
	var mask_graphics_48 = new cjs.Graphics().p("A+PwPQJOq1OMhJQOLhHK1JPQK1JPBJOKQBIOMpPK1g");
	var mask_graphics_49 = new cjs.Graphics().p("A+ZvuQJGq8OLhVQOKhTK8JFQK9JGBUOJQBUOMpFK9g");
	var mask_graphics_50 = new cjs.Graphics().p("A+ivNQI9rEOJhgQOJhfLEI9QLEI8BgOIQBgOLo9LEg");
	var mask_graphics_51 = new cjs.Graphics().p("A+rurQIzrLOJhtQOHhqLMIzQLLI0BsOGQBrOJozLMg");
	var mask_graphics_52 = new cjs.Graphics().p("A+0uJQIqrTOHh4QOGh2LTIqQLSIqB4OFQB3OIoqLTg");
	var mask_graphics_53 = new cjs.Graphics().p("A+9tnQIhraOFiDQOFiCLZIgQLaIhCDODQCDOHogLZg");
	var mask_graphics_54 = new cjs.Graphics().p("A/FtEQIXrhODiPQODiOLhIXQLhIXCOOCQCPOEoXLhg");
	var mask_graphics_55 = new cjs.Graphics().p("A/OshQIOroOBibQOBiZLoINQLnIOCbOAQCaOCoOLog");
	var mask_graphics_56 = new cjs.Graphics().p("A/Wr+QIEruN/inQN/ilLuIEQLvIEClN9QCmOBoDLug");
	var mask_graphics_57 = new cjs.Graphics().p("A/erbQH6r1N9iyQN9iwL1H6QL1H6CxN7QCyN+n7L1g");
	var mask_graphics_58 = new cjs.Graphics().p("A/mq3QHwr7N7i+QN6i8L7HwQL8HwC9N6QC9N7nwL8g");
	var mask_graphics_59 = new cjs.Graphics().p("A/uqTQHmsBN5jKQN3jHMCHmQMCHmDIN3QDJN5nmMCg");
	var mask_graphics_60 = new cjs.Graphics().p("A/2puQHdsIN1jVQN1jTMIHcQMIHdDUNzQDUN3ncMIg");
	var mask_graphics_61 = new cjs.Graphics().p("A/9pJQHSsPNzjgQNyjeMOHSQMOHSDfNyQDgNznSMOg");
	var mask_graphics_62 = new cjs.Graphics().p("EggEgIlQHIsUNvjrQNvjqMVHIQMUHIDqNvQDrNwnHMUg");
	var mask_graphics_63 = new cjs.Graphics().p("EggLgH/QG9saNtj3QNsj2MaG+QMaG+D2NsQD2Nsm9Mag");
	var mask_graphics_64 = new cjs.Graphics().p("EggSgHaQGzsfNpkDQNpkAMgGzQMfGzECNpQEBNpmzMgg");
	var mask_graphics_65 = new cjs.Graphics().p("EggZgG0QGpslNlkOQNmkMMlGpQMlGpENNlQENNmmpMlg");
	var mask_graphics_66 = new cjs.Graphics().p("EggggGOQGfsrNikYQNikYMqGfQMrGeEYNiQEYNimeMrg");
	var mask_graphics_67 = new cjs.Graphics().p("EggmgFoQGUswNekkQNekiMwGUQMwGUEjNeQEkNemUMwg");
	var mask_graphics_68 = new cjs.Graphics().p("EggtgFBQGKs1NakwQNbktM1GJQM1GKEuNaQEvNamKM1g");
	var mask_graphics_69 = new cjs.Graphics().p("EggzgEbQF/s6NXk6QNXk5M5F/QM6F/E5NWQE6NXl+M6g");
	var mask_graphics_70 = new cjs.Graphics().p("Egg5gD0QF0s/NTlFQNTlEM+F0QM/F0FENSQFFNTl0M/g");
	var mask_graphics_71 = new cjs.Graphics().p("Egg+gDNQFptDNOlRQNPlONCFpQNEFpFQNOQFQNOlqNEg");
	var mask_graphics_72 = new cjs.Graphics().p("EghEgClQFetINKlcQNKlZNIFeQNIFeFaNJQFbNKleNIg");
	var mask_graphics_73 = new cjs.Graphics().p("EghJgB+QFTtMNFlnQNGlkNMFTQNNFUFlNEQFmNGlUNMg");
	var mask_graphics_74 = new cjs.Graphics().p("EghPgBWQFJtRNAlxQNBlvNRFIQNRFIFwNAQFwNBlINRg");
	var mask_graphics_75 = new cjs.Graphics().p("EghUgAuQE+tVM7l8QM9l6NUE9QNVE+F7M7QF7M7k9NWg");
	var mask_graphics_76 = new cjs.Graphics().p("EghYgAGQEytZM2mHQM4mENYEyQNZEyGGM2QGGM3kyNZg");
	var mask_graphics_77 = new cjs.Graphics().p("EghdAAhQEntcMymRQMymPNcEnQNdEnGQMxQGRMxknNeg");
	var mask_graphics_78 = new cjs.Graphics().p("EghhABKQEctgMsmcQMtmaNgEcQNhEcGaMsQGbMskcNhg");
	var mask_graphics_79 = new cjs.Graphics().p("EghmAByQERtjMnmmQMnmlNkERQNkERGlMmQGmMnkQNkg");
	var mask_graphics_80 = new cjs.Graphics().p("EghqACbQEGtnMhmwQMimvNnEFQNoEGGvMgQGxMikGNog");
	var mask_graphics_81 = new cjs.Graphics().p("EghuADEQD7tqMbm7QMcm5NrD6QNrD6G6MbQG6Mcj6Nrg");
	var mask_graphics_82 = new cjs.Graphics().p("EghxADtQDuttMWnGQMXnDNtDvQNvDuHEMWQHFMWjvNug");
	var mask_graphics_83 = new cjs.Graphics().p("Egh1AEWQDktwMPnQQMRnNNwDjQNyDjHOMQQHPMQjjNxg");
	var mask_graphics_84 = new cjs.Graphics().p("Egh4AE/QDYtzMKnZQMKnYNzDYQN1DYHYMJQHZMKjYN0g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:137.1,y:18.6}).wait(1).to({graphics:mask_graphics_1,x:136.2,y:18.3}).wait(1).to({graphics:mask_graphics_2,x:134.9,y:18}).wait(1).to({graphics:mask_graphics_3,x:133.6,y:17.8}).wait(1).to({graphics:mask_graphics_4,x:132.3,y:17.5}).wait(1).to({graphics:mask_graphics_5,x:131,y:17.1}).wait(1).to({graphics:mask_graphics_6,x:129.7,y:16.8}).wait(1).to({graphics:mask_graphics_7,x:128.4,y:16.4}).wait(1).to({graphics:mask_graphics_8,x:127.1,y:16.1}).wait(1).to({graphics:mask_graphics_9,x:125.9,y:15.7}).wait(1).to({graphics:mask_graphics_10,x:124.6,y:15.3}).wait(1).to({graphics:mask_graphics_11,x:123.3,y:14.9}).wait(1).to({graphics:mask_graphics_12,x:122.1,y:14.4}).wait(1).to({graphics:mask_graphics_13,x:120.8,y:14}).wait(1).to({graphics:mask_graphics_14,x:119.6,y:13.5}).wait(1).to({graphics:mask_graphics_15,x:118.4,y:13}).wait(1).to({graphics:mask_graphics_16,x:117.1,y:12.5}).wait(1).to({graphics:mask_graphics_17,x:115.9,y:12}).wait(1).to({graphics:mask_graphics_18,x:114.7,y:11.5}).wait(1).to({graphics:mask_graphics_19,x:113.5,y:10.9}).wait(1).to({graphics:mask_graphics_20,x:112.3,y:10.4}).wait(1).to({graphics:mask_graphics_21,x:111.1,y:9.8}).wait(1).to({graphics:mask_graphics_22,x:110,y:9.2}).wait(1).to({graphics:mask_graphics_23,x:108.8,y:8.6}).wait(1).to({graphics:mask_graphics_24,x:107.7,y:7.9}).wait(1).to({graphics:mask_graphics_25,x:106.5,y:7.3}).wait(1).to({graphics:mask_graphics_26,x:105.4,y:6.6}).wait(1).to({graphics:mask_graphics_27,x:104.3,y:5.9}).wait(1).to({graphics:mask_graphics_28,x:103.1,y:5.3}).wait(1).to({graphics:mask_graphics_29,x:102,y:4.5}).wait(1).to({graphics:mask_graphics_30,x:101,y:3.8}).wait(1).to({graphics:mask_graphics_31,x:99.9,y:3.1}).wait(1).to({graphics:mask_graphics_32,x:98.8,y:2.3}).wait(1).to({graphics:mask_graphics_33,x:97.8,y:1.5}).wait(1).to({graphics:mask_graphics_34,x:96.7,y:0.8}).wait(1).to({graphics:mask_graphics_35,x:95.7,y:0}).wait(1).to({graphics:mask_graphics_36,x:94.7,y:-0.9}).wait(1).to({graphics:mask_graphics_37,x:93.7,y:-1.7}).wait(1).to({graphics:mask_graphics_38,x:92.7,y:-2.6}).wait(1).to({graphics:mask_graphics_39,x:91.8,y:-3.4}).wait(1).to({graphics:mask_graphics_40,x:90.8,y:-4.3}).wait(1).to({graphics:mask_graphics_41,x:89.9,y:-5.2}).wait(1).to({graphics:mask_graphics_42,x:89,y:-6.2}).wait(1).to({graphics:mask_graphics_43,x:88.1,y:-7.1}).wait(1).to({graphics:mask_graphics_44,x:87.2,y:-8.1}).wait(1).to({graphics:mask_graphics_45,x:86.3,y:-9}).wait(1).to({graphics:mask_graphics_46,x:85.5,y:-10}).wait(1).to({graphics:mask_graphics_47,x:84.7,y:-11}).wait(1).to({graphics:mask_graphics_48,x:83.9,y:-12}).wait(1).to({graphics:mask_graphics_49,x:83.1,y:-13.1}).wait(1).to({graphics:mask_graphics_50,x:82.3,y:-14.1}).wait(1).to({graphics:mask_graphics_51,x:81.5,y:-15.2}).wait(1).to({graphics:mask_graphics_52,x:80.8,y:-16.3}).wait(1).to({graphics:mask_graphics_53,x:80,y:-17.4}).wait(1).to({graphics:mask_graphics_54,x:79.3,y:-18.5}).wait(1).to({graphics:mask_graphics_55,x:78.6,y:-19.6}).wait(1).to({graphics:mask_graphics_56,x:77.9,y:-20.7}).wait(1).to({graphics:mask_graphics_57,x:77.3,y:-21.8}).wait(1).to({graphics:mask_graphics_58,x:76.6,y:-23}).wait(1).to({graphics:mask_graphics_59,x:76,y:-24.1}).wait(1).to({graphics:mask_graphics_60,x:75.3,y:-25.3}).wait(1).to({graphics:mask_graphics_61,x:74.7,y:-26.5}).wait(1).to({graphics:mask_graphics_62,x:74.1,y:-27.7}).wait(1).to({graphics:mask_graphics_63,x:73.6,y:-28.9}).wait(1).to({graphics:mask_graphics_64,x:73,y:-30.1}).wait(1).to({graphics:mask_graphics_65,x:72.5,y:-31.3}).wait(1).to({graphics:mask_graphics_66,x:71.9,y:-32.5}).wait(1).to({graphics:mask_graphics_67,x:71.4,y:-33.8}).wait(1).to({graphics:mask_graphics_68,x:70.9,y:-35}).wait(1).to({graphics:mask_graphics_69,x:70.5,y:-36.3}).wait(1).to({graphics:mask_graphics_70,x:70,y:-37.5}).wait(1).to({graphics:mask_graphics_71,x:69.5,y:-38.8}).wait(1).to({graphics:mask_graphics_72,x:69.1,y:-40.1}).wait(1).to({graphics:mask_graphics_73,x:68.7,y:-41.4}).wait(1).to({graphics:mask_graphics_74,x:68.3,y:-42.7}).wait(1).to({graphics:mask_graphics_75,x:67.9,y:-44}).wait(1).to({graphics:mask_graphics_76,x:67.5,y:-45.3}).wait(1).to({graphics:mask_graphics_77,x:67.2,y:-46.6}).wait(1).to({graphics:mask_graphics_78,x:66.9,y:-47.9}).wait(1).to({graphics:mask_graphics_79,x:66.5,y:-49.2}).wait(1).to({graphics:mask_graphics_80,x:66.2,y:-50.5}).wait(1).to({graphics:mask_graphics_81,x:66,y:-51.9}).wait(1).to({graphics:mask_graphics_82,x:65.7,y:-53.2}).wait(1).to({graphics:mask_graphics_83,x:65.4,y:-54.6}).wait(1).to({graphics:mask_graphics_84,x:65.1,y:-55.9}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("ADkTZQoIlohjpeQhkpdEnmVQElmVFBhk");
	this.shape.setTransform(-25.7,-15.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(85));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.6,-153,24.9,264.3);


(lib.honeyflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.honeybee();
	this.instance.parent = this;
	this.instance.setTransform(38.4,-170.9,0.422,0.422,0,0,0,-0.1,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSB8QgPgDgNgGIgNgFIgBgBIgCgBIgBgBIgBAAIgBgBIgBgBIgBgBIgCAAIgBgBIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIgCgBIgBgBIgBAAIgBgBIAAgBIgBgBIgBgBIgBAAIgBgBIAAgBIgCgBIgBgBIAAgBIgBAAIgBgBIAAgBIgBgBIgBgBIAAgBIgBAAIgBgBIgBgBIgBgBIAAgBIgBgBIgBAAIAAgBIgBgBIgBgBIAAgBIgBgBIAAgBIgBAAIAAgBIgBgBIAAgBIgBgBIgBgBIgBgBIAAgBIgBAAIAAgBIgBgBIAAgBIgBgCIAAgCIgBgBIgBgBIAAgBIgBgBIAAgBIgBgBIgBgBIAAAAIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIAAAAIAAgBIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIAAAAIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgCIgBgBIAAgCIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIABgBIABgBIAAgBIAAgBIABgBIABgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIABgBIABgCIAAgBIABgBIAAgBIACgBIABgBIAAgBIABgBIABgBIAAgBIABgBIAAgBIABgBIABgBIABgBIABgBIABgBIABgCIABgBIADgDIANgLIAOgKIAOgHQAHgEAJgCIAOgDIAQgBIAQABIAQACIAOAFQAJADAHAEIAEACIABABIACABIABABIABAAIABABIABABIABABIABABIABAAIACABIABABIABABIABAAIABABIAAABIABABIABABIABABIABAAIABABIABABIABABIABABIABAAIAAABIABABIABABIAAABIABABIABAAIABABIABABIABABIAAABIABABIAAAAIABABIABABIAAABIABABIABABIAAABIABAAIABABIABABIAAABIABABIAAABIABABIAAAAIAAABIABABIAAABIABABIAAABIABABIAAABIABAAIAAABIABABIABABIAAABIABABIAAABIAAABIABABIAAAAIAAABIABABIAAABIABABIAAABIAAABIAAABIABABIAAABIAAAAIABABIAAABIAAABIABABIAAABIAAABIAAABIABABIAAABIABAAIAAABIAAABIABABIAAABIAAABIAAABIAAABIABABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIABABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIABAAIgBABIAAABIABABIgBABIABABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIgBABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIAAABIgBABIAAABIAAABIgBABIAAABIgBABIAAABIAAABIgBABIAAABIAAABIgBABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIAAABIgBABIgBABIgBABIAAABIgBABIAAABIgBABIgBABIAAABIgBABIAAABIgBABIgBACIAAABIgCABIAAABIgBABIgBABIgBABIgBABIAAABIgBABIgBABIgBABIgBABIgBACIgBABIgCACIgEAEIgGAFIgFADIgDADIgEACIgCACIgPAIQgYAKgZAAIgTgBg");
	this.shape.setTransform(22.7,-144.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-215.3,105.5,83.7);


// stage content:
(lib.writingsuccess_Fontkid_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_438 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(438).call(this.frame_438).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(271.8,92.6,0.999,0.999,0,-8.5,171.5,22.4,-144);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({scaleX:1,scaleY:1,skewX:-8.3,skewY:171.7,guide:{path:[271.8,92.6,222.2,93.2,185.9,149.2,178.1,161.2,172,174.2]}},45).to({guide:{path:[172,174.1,150.9,219,149.3,276.4]}},45).to({regX:22.3,guide:{path:[149.3,276.3,149.1,281.1,149.1,286,149.1,366.2,185.8,422.9,222.3,479,273.6,479.5]}},90).to({regY:-143.9,guide:{path:[273.6,479.6,274.1,479.7,274.6,479.7,326.5,479.7,363.3,422.9,373.7,406.9,381.2,389]}},45).to({regX:22.4,guide:{path:[381.2,388.9,400.1,343.5,400.1,286,400.1,280.6,399.9,275.3]}},45).to({regX:22.3,regY:-143.8,guide:{path:[399.9,275.4,398.1,217.2,376.1,171.8]}},45).to({regX:22.4,regY:-144,scaleX:1,scaleY:1,skewX:-8.5,skewY:171.5,guide:{path:[376.1,171.8,370.4,160.1,363.3,149.2,328.5,95.4,279.9,92.6,279.3,92.6,277.6,92.6]}},45).wait(11).to({startPosition:0},0).to({guide:{path:[277.7,92.6,320.9,81.5,369.7,97.6,419.4,114,421.1,139.5,422.8,165,445.8,152.3,468.9,139.6,491.7,114.1,514.5,88.6,560.8,71.5,591.6,60,618.6,72.6,632.3,78.8,638.5,92.5]}},58).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(277.3,91,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},360).wait(70));

	// Layer 10
	this.instance_1 = new lib.ar1("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(106.9,211.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(430));

	// 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("ATdAAQAANNltJWQlsJVoEAAQoDAAltpVQlspWAAtNQAAtMFspWQFtpVIDAAQIEAAFsJVQFtJWAANMg");
	this.shape_1.setTransform(274.6,286.1,1.008,0.949);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(369).to({_off:false},0).wait(70));

	// Layer 8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_279 = new cjs.Graphics().p("EADvAmsQuOgPp6qOQp5qQAPuPMBEuABIQgOOPqQJ7Qp/Jqt1AAIgqAAg");
	var mask_graphics_280 = new cjs.Graphics().p("Az+cqQqFqEgBuPMBEwgAGQABOPqEKGQqDKFuQABIgDAAQuMAAqFqCg");
	var mask_graphics_281 = new cjs.Graphics().p("AzidGQqQp5gRuPMBEugBUQASOPp5KRQp3KQuQASIgwAAQtvAAqApmg");
	var mask_graphics_282 = new cjs.Graphics().p("AzGdgQqbpsghuPMBEsgCiQAiOOptKdQpsKbuPAhQguACgvAAQtTAAp6pMg");
	var mask_graphics_283 = new cjs.Graphics().p("Aypd7QqmphgyuOMBEpgDwQAyOOphKnQpgKmuOAyQhFADhDAAQs4AAp0oxg");
	var mask_graphics_284 = new cjs.Graphics().p("AyMeUQqwpUhCuNMBEkgE+QBBOMpUKyQpUKxuNBCQhaAGhZAAQsdAApuoYg");
	var mask_graphics_285 = new cjs.Graphics().p("AxuetQq7pIhSuLMBEdgGNQBSOMpIK8QpIK8uLBSQhwAKhtAAQsEAApmoAg");
	var mask_graphics_286 = new cjs.Graphics().p("AxQfGQrGo8hiuKMBEWgHaQBiOKo8LHQo6LFuKBiQiFAPiBAAQrsAApenng");
	var mask_graphics_287 = new cjs.Graphics().p("AwyfeQrPovhyuIMBEMgInQBzOHowLRQouLQuIByQiZATiVAAQrTAApXnPg");
	var mask_graphics_288 = new cjs.Graphics().p("AwTf1QrZoiiCuGMBECgJ0QCCOFoiLbQohLZuGCCQiuAZioAAQq8AApOm4g");
	var mask_graphics_289 = new cjs.Graphics().p("EgPzAgMQrjoViTuDMBD3gLBQCSOCoVLkQoULjuECSQjCAgi6AAQqmAApEmig");
	var mask_graphics_290 = new cjs.Graphics().p("EgPUAgjQrsoJiiuAMBDpgMOQCiN/oILuQoHLsuBCiQjVAnjNAAQqQAAo7mLg");
	var mask_graphics_291 = new cjs.Graphics().p("EgO0Ag4Qr1n6iyt+MBDagNbQCyN9n6L2Qn6L2t+CyQjoAujgAAQp6AAoxl2g");
	var mask_graphics_292 = new cjs.Graphics().p("EgOTAhOQr/nujBt6MBDKgOnQDCN5ntMAQnsL+t6DBQj8A3jyAAQplAAomlgg");
	var mask_graphics_293 = new cjs.Graphics().p("EgNyAhiQsHnfjSt3MBC5gP0QDSN2nfMIQnfMHt3DSQkOBAkEgBQpQAAoblMg");
	var mask_graphics_294 = new cjs.Graphics().p("EgNRAh2QsPnSjityMBCngRAQDhNynRMRQnRMPtzDhQkgBKkWAAQo8AAoQk5g");
	var mask_graphics_295 = new cjs.Graphics().p("EgMvAiKQsYnEjxtvMBCTgSLQDxNunEMZQnCMXtvDxQkzBUkoAAQonAAoEklg");
	var mask_graphics_296 = new cjs.Graphics().p("EgMNAicQsgm1kAtqMBB9gTWQEANpm1MgQm0MftrEBQlEBfk5AAQoVAAn3kTg");
	var mask_graphics_297 = new cjs.Graphics().p("EgLrAivQsnmokQtlMBBmgUhQERNlmoMoQmmMmtmERQlVBqlLAAQoBAAnrkAg");
	var mask_graphics_298 = new cjs.Graphics().p("EgLIAjAQsvmZkftgMBBOgVrQEgNfmZMwQmYMuthEfQllB3ldAAQnuAAnejvg");
	var mask_graphics_299 = new cjs.Graphics().p("EgKlAjSQs2mLkvtbMBA2gW1QEuNamKM3QmJM1tcEvQl2CDlvAAQnbAAnQjdg");
	var mask_graphics_300 = new cjs.Graphics().p("EgKCAjiQs9l8k+tWMBAbgX+QE+NVl7M9Ql7M8tWE+QmGCSmBgBQnJAAnCjNg");
	var mask_graphics_301 = new cjs.Graphics().p("EgJeAjyQtEltlNtQMA//gZIQFNNPlsNFQlsNCtQFNQmWCgmTAAQm2AAm0i+g");
	var mask_graphics_302 = new cjs.Graphics().p("EgI7AkBQtJlelctKMA/igaQQFcNJleNLQldNJtKFcQmlCumlAAQmkAAmmivg");
	var mask_graphics_303 = new cjs.Graphics().p("EgIWAkQQtQlPlrtEMA/DgbYQFrNDlONQQlONPtEFrQm0C+m3AAQmSAAmWigg");
	var mask_graphics_304 = new cjs.Graphics().p("EgHyAkeQtVlAl6s9MA+kgcgQF5M9k/NWQk/NVs+F6QnBDNnKAAQmAAAmHiSg");
	var mask_graphics_305 = new cjs.Graphics().p("EgHNAkrQtbkxmIs2MA+CgdmQGJM1kxNcQkwNbs2GIQnQDdncAAQluAAl3iEg");
	var mask_graphics_306 = new cjs.Graphics().p("EgGoAk4QtgkhmXswMA9ggesQGXMukhNhQkhNgsvGXQndDunvAAQldAAlmh3g");
	var mask_graphics_307 = new cjs.Graphics().p("EgGDAlEQtlkSmlsoMA89gfyQGlMnkSNmQkRNlsoGlQnrEAoBAAQlLAAlWhrg");
	var mask_graphics_308 = new cjs.Graphics().p("EgFdAlQQtqkDm0sgMA8Ygg3QG0MfkCNrQkCNpsgG0Qn4ESoUAAQk6AAlEhfg");
	var mask_graphics_309 = new cjs.Graphics().p("EgE3AlbQtvj0nBsYMA7ygh7QHBMYjyNvQjyNtsZHCQoEElooAAQknAAkzhUg");
	var mask_graphics_310 = new cjs.Graphics().p("EgERAllQtzjknQsQMA7Lgi/QHQMRjjNyQjjNysQHQQoPE4o9AAQkWAAkghKg");
	var mask_graphics_311 = new cjs.Graphics().p("EgDrAluQt3jTndsIMA6igkCQHeMIjTN2QjTN2sIHeQobFMpRAAQkEAAkOhBg");
	var mask_graphics_312 = new cjs.Graphics().p("EgDFAl3Qt6jEnrr/MA55glEQHrMAjDN6QjEN5r/HrQomFgplAAQjyAAj8g3g");
	var mask_graphics_313 = new cjs.Graphics().p("EgCeAmAQt+i1n5r2MA5PgmFQH4L2izN+QizN8r3H5QowF1p7AAQjgAAjogug");
	var mask_graphics_314 = new cjs.Graphics().p("EgB4AmHQuAikoGruMA4ignFQIGLtikOAQijOArtIGQo7GLqQAAQjOAAjVgng");
	var mask_graphics_315 = new cjs.Graphics().p("EgBRAmOQuDiUoUrkMA32goGQITLkiUODQiTODrkITQpEGhqmAAQi7AAjCggg");
	var mask_graphics_316 = new cjs.Graphics().p("EgAqAmUQuGiEogrbMA3HgpEQIgLaiDOGQiEOFrbIgQpNG4q8gBQipAAitgZg");
	var mask_graphics_317 = new cjs.Graphics().p("EgADAmaQuIh1ourQMA2YgqDQIuLQh0OIQhzOHrRIuQpWHOrUAAQiVAAiZgTg");
	var mask_graphics_318 = new cjs.Graphics().p("EAAjAmfQuJhlo6rHMA1ogrAQI6LHhkOKQhjOJrHI6QpeHmrsAAQiCAAiFgOg");
	var mask_graphics_319 = new cjs.Graphics().p("EABKAmjQuLhVpGq8MA02gr9QJHK9hUOLQhTOLq9JGQpmH/sEAAQhtAAhxgKg");
	var mask_graphics_320 = new cjs.Graphics().p("EABxAmmQuMhEpTqyMA0Egs5QJTKyhDONQhEOMqyJTQptIYseAAQhZAAhbgHg");
	var mask_graphics_321 = new cjs.Graphics().p("EACYAmpQuNg0pfqoMAzQgtzQJgKog0ONQgzONqnJgQp0Ixs4AAQhEAAhGgEg");
	var mask_graphics_322 = new cjs.Graphics().p("EAC/AmrQuNgkprqdMAybgutQJrKdgjOOQgjOOqcJsQp6JKtTAAQgvAAgwgBg");
	var mask_graphics_323 = new cjs.Graphics().p("EADnAmsQuPgUp2qRMAxmgvmQJ2KRgSOPQgTOPqSJ3Qp/JltvAAIgyAAg");
	var mask_graphics_324 = new cjs.Graphics().p("EAEOAmsQuPgDqCqGMAwvgweQKDKGgDOPQgDOPqGKCQqEKBuNAAIgEAAg");
	var mask_graphics_325 = new cjs.Graphics().p("Aznc+MAv3gxUQKOJ6AOOPQANOPp6KOQp7KOuPAOIgkAAQt3AAqBpug");
	var mask_graphics_326 = new cjs.Graphics().p("AzLdZMAu/gyKQKZJvAeOOQAeOOpvKZQpvKZuPAfIhRABQtbAAp7pTg");
	var mask_graphics_327 = new cjs.Graphics().p("Ayvd0MAuGgzAQKkJjAuOOQAuONpjKlQpjKkuOAuQg/ADg9AAQtAAAp2o4g");
	var mask_graphics_328 = new cjs.Graphics().p("AyReNMAtLgzzQKvJXA+ONQA+OMpXKvQpXKvuNA/QhVAGhSAAQsmAApuogg");
	var mask_graphics_329 = new cjs.Graphics().p("Ax0enMAsQg0nQK5JLBPOMQBOOLpLK5QpLK6uMBPQhqAJhnAAQsLAApooGg");
	var mask_graphics_330 = new cjs.Graphics().p("AxWe/MArUg1YQLDI+BfOLQBeOJo+LEQo/LEuKBfQh/ANh7AAQrzAApgnug");
	var mask_graphics_331 = new cjs.Graphics().p("Aw4fXMAqXg2IQLOIxBuOJQBuOIoxLNQoyLOuIBvQiUASiPAAQraAApZnWg");
	var mask_graphics_332 = new cjs.Graphics().p("AwZfvMApZg24QLXIkB/OIQB+OFolLXQokLYuHB/QioAXiiAAQrDAApQm+g");
	var mask_graphics_333 = new cjs.Graphics().p("EgP6AgGMAoag3nQLhIYCPOFQCOOCoYLhQoXLiuECPQi9Aei1AAQqsAApHmog");
	var mask_graphics_334 = new cjs.Graphics().p("EgPaAgcMAnag4UQLrILCeOCQCeOAoKLqQoLLruBCfQjQAljIAAQqWAAo9mSg");
	var mask_graphics_335 = new cjs.Graphics().p("EgO6AgyMAmag5AQLzH9CvOAQCuN8n9L0Qn+L0t+CvQjjAsjbAAQqAAAozl8g");
	var mask_graphics_336 = new cjs.Graphics().p("EgOaAhIMAlZg5sQL8HwC/N8QC+N6nwL8QnwL9t7C/Qj2A0jtAAQprAAoplmg");
	var mask_graphics_337 = new cjs.Graphics().p("EgN5AhcMAkXg6VQMFHiDON5QDON2niMFQniMFt4DPQkJA9j/AAQpWAAoelSg");
	var mask_graphics_338 = new cjs.Graphics().p("EgNYAhxMAjUg6/QMOHVDeN1QDdNynUMNQnUMOt0DfQkcBHkRAAQpBAAoTk+g");
	var mask_graphics_339 = new cjs.Graphics().p("EgM2AiEMAiQg7lQMWHGDuNxQDtNunGMWQnHMWtvDuQkuBRkjAAQotAAoHkrg");
	var mask_graphics_340 = new cjs.Graphics().p("EgMVAiXMAhNg8MQMeG4D9NtQD9Nqm4MdQm5MetrD+Qk/Bck1AAQoZAAn8kYg");
	var mask_graphics_341 = new cjs.Graphics().p("EgLyAiqMAgIg8yQMlGqENNoQEMNlmqMmQmqMltnEOQlQBnlGAAQoHAAnukFg");
	var mask_graphics_342 = new cjs.Graphics().p("EgLQAi7MAfDg9VQMtGcEcNjQEbNgmbMtQmcMttiEdQlhBzlYAAQnzAAnij0g");
	var mask_graphics_343 = new cjs.Graphics().p("EgKtAjNMAd9g94QM0GNErNeQErNbmNM0QmNM0tdEsQlxCAlqAAQnhAAnUjig");
	var mask_graphics_344 = new cjs.Graphics().p("EgKKAjdMAc2g+ZQM7F/E7NYQE6NVl+M8Ql/M7tXE7QmCCNl7AAQnOAAnHjSg");
	var mask_graphics_345 = new cjs.Graphics().p("EgJmAjtMAbvg+5QNBFwFKNSQFJNQlvNCQlwNCtRFKQmSCbmNAAQm8AAm4jCg");
	var mask_graphics_346 = new cjs.Graphics().p("EgJCAj9MAang/YQNIFgFZNNQFYNKlhNIQlhNItLFaQmhCpmfAAQmqAAmpiyg");
	var mask_graphics_347 = new cjs.Graphics().p("EgIeAkLMAZfg/1QNOFSFoNGQFnNElSNOQlSNOtFFpQmwC4mxAAQmYAAmaikg");
	var mask_graphics_348 = new cjs.Graphics().p("EgH6AkaMAYWhASQNUFCF3NAQF2M9lDNVQlDNUs+F3Qm+DInEAAQmGAAmLiVg");
	var mask_graphics_349 = new cjs.Graphics().p("EgHVAknMAXNhAtQNZE0GGM5QGEM2kzNaQk0Nas4GGQnMDYnWAAQl0AAl7iIg");
	var mask_graphics_350 = new cjs.Graphics().p("EgGwAk0MAWDhBHQNfElGUMyQGTMvkkNfQklNfswGVQnaDpnpAAQliAAlrh7g");
	var mask_graphics_351 = new cjs.Graphics().p("EgGLAlBMAU5hBgQNkEVGiMrQGiMokVNkQkVNkspGjQnnD7n8AAQlQAAlbhug");
	var mask_graphics_352 = new cjs.Graphics().p("EgFlAlMMATuhB2QNpEFGwMjQGwMhkFNpQkGNpsiGxQn0ENoPAAQk+AAlJhjg");
	var mask_graphics_353 = new cjs.Graphics().p("EgFAAlXMASjhCMQNuD2G/MbQG+Maj2NtQj2NtsaG/QoBEgoiAAQktAAk4hYg");
	var mask_graphics_354 = new cjs.Graphics().p("EgEaAliMARYhChQNxDmHNMUQHNMRjnNxQjmNysSHNQoMEzo3gBQkbAAkmhMg");
	var mask_graphics_355 = new cjs.Graphics().p("EgD0AlrMAQMhCzQN2DWHbMLQHaMKjXN0QjXN2sJHbQoYFGpLAAQkJAAkUhDg");
	var mask_graphics_356 = new cjs.Graphics().p("EgDNAl0MAO/hDFQN6DHHoMCQHoMBjHN5QjHN5sBHpQojFapfAAQj4AAkAg6g");
	var mask_graphics_357 = new cjs.Graphics().p("EgCnAl9MANzhDWQN9C3H2L6QH2L4i4N8Qi3N8r4H3QouFvp0AAQjlAAjugxg");
	var mask_graphics_358 = new cjs.Graphics().p("EgCAAmFMAMmhDlQOACnIELxQICLvinN+QinOArvIEQo4GFqKAAQjTAAjagpg");
	var mask_graphics_359 = new cjs.Graphics().p("EgBaAmMMALahDzQODCYIRLnQIQLmiYOBQiXODrmIRQpCGaqfAAQjAAAjIghg");
	var mask_graphics_360 = new cjs.Graphics().p("EgAzAmSMAKNhD/QOFCIIeLdQIdLdiHOEQiIOFrcIeQpLGxq2AAQitAAi0gbg");
	var mask_graphics_361 = new cjs.Graphics().p("EgAMAmYMAI/hEKQOIB3IrLUQIqLTh4OGQh3OIrTIrQpTHIrNAAQibAAifgVg");
	var mask_graphics_362 = new cjs.Graphics().p("EAAaAmdMAHzhETQOJBnI4LKQI3LJhoOIQhnOJrJI4QpbHgrlAAQiHAAiMgQg");
	var mask_graphics_363 = new cjs.Graphics().p("EABBAmhMAGlhEbQOLBXJFLAQJDK+hXOKQhYOLq+JFQpkH3r9AAQhzAAh3gLg");
	var mask_graphics_364 = new cjs.Graphics().p("EABoAmlMAFXhEiQONBHJRK1QJPK0hHOMQhHOMq0JRQprIQsWAAQhfAAhigHg");
	var mask_graphics_365 = new cjs.Graphics().p("EACQAmnMAEJhEnQONA3JdKrQJcKpg3ONQg3ONqpJdQpyIqswAAQhLAAhLgFg");
	var mask_graphics_366 = new cjs.Graphics().p("EAC3AmqMAC7hEsQOOAnJpKgQJoKegnOOQgmOOqfJpQp4JEtLAAQg1AAg2gCg");
	var mask_graphics_367 = new cjs.Graphics().p("EADeAmrMABthEuQOPAWJ1KVQJzKUgWOOQgXOPqUJ1Qp9JetnAAIg/gBg");
	var mask_graphics_368 = new cjs.Graphics().p("EAEFAmsMAAfhEwQOPAHKAKJQKAKJgHOOQgGOPqIKBQqDJ5uEAAIgSAAg");
	var mask_graphics_369 = new cjs.Graphics().p("AD9+EQOPgKKMJ/QKKJ8AKOPQAKOPp9KMQp+KLuPAJg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(279).to({graphics:mask_graphics_279,x:247.5,y:247.6}).wait(1).to({graphics:mask_graphics_280,x:247.6,y:247.6}).wait(1).to({graphics:mask_graphics_281,x:247.6,y:247.6}).wait(1).to({graphics:mask_graphics_282,x:247.6,y:247.6}).wait(1).to({graphics:mask_graphics_283,x:247.6,y:247.6}).wait(1).to({graphics:mask_graphics_284,x:247.6,y:247.6}).wait(1).to({graphics:mask_graphics_285,x:247.6,y:247.7}).wait(1).to({graphics:mask_graphics_286,x:247.7,y:247.7}).wait(1).to({graphics:mask_graphics_287,x:247.7,y:247.7}).wait(1).to({graphics:mask_graphics_288,x:247.7,y:247.7}).wait(1).to({graphics:mask_graphics_289,x:247.7,y:247.8}).wait(1).to({graphics:mask_graphics_290,x:247.7,y:247.8}).wait(1).to({graphics:mask_graphics_291,x:247.8,y:247.8}).wait(1).to({graphics:mask_graphics_292,x:247.8,y:247.8}).wait(1).to({graphics:mask_graphics_293,x:247.8,y:247.8}).wait(1).to({graphics:mask_graphics_294,x:247.8,y:247.9}).wait(1).to({graphics:mask_graphics_295,x:247.9,y:247.9}).wait(1).to({graphics:mask_graphics_296,x:247.9,y:247.9}).wait(1).to({graphics:mask_graphics_297,x:247.9,y:247.9}).wait(1).to({graphics:mask_graphics_298,x:247.9,y:247.9}).wait(1).to({graphics:mask_graphics_299,x:247.9,y:247.9}).wait(1).to({graphics:mask_graphics_300,x:247.9,y:247.9}).wait(1).to({graphics:mask_graphics_301,x:247.9,y:248}).wait(1).to({graphics:mask_graphics_302,x:247.9,y:248}).wait(1).to({graphics:mask_graphics_303,x:247.9,y:248}).wait(1).to({graphics:mask_graphics_304,x:247.9,y:248}).wait(1).to({graphics:mask_graphics_305,x:247.9,y:247.9}).wait(1).to({graphics:mask_graphics_306,x:247.9,y:247.9}).wait(1).to({graphics:mask_graphics_307,x:247.9,y:247.9}).wait(1).to({graphics:mask_graphics_308,x:247.9,y:247.9}).wait(1).to({graphics:mask_graphics_309,x:247.9,y:247.9}).wait(1).to({graphics:mask_graphics_310,x:247.9,y:247.9}).wait(1).to({graphics:mask_graphics_311,x:247.8,y:247.9}).wait(1).to({graphics:mask_graphics_312,x:247.8,y:247.8}).wait(1).to({graphics:mask_graphics_313,x:247.8,y:247.8}).wait(1).to({graphics:mask_graphics_314,x:247.8,y:247.8}).wait(1).to({graphics:mask_graphics_315,x:247.7,y:247.8}).wait(1).to({graphics:mask_graphics_316,x:247.7,y:247.7}).wait(1).to({graphics:mask_graphics_317,x:247.7,y:247.7}).wait(1).to({graphics:mask_graphics_318,x:247.7,y:247.7}).wait(1).to({graphics:mask_graphics_319,x:247.7,y:247.7}).wait(1).to({graphics:mask_graphics_320,x:247.6,y:247.7}).wait(1).to({graphics:mask_graphics_321,x:247.6,y:247.7}).wait(1).to({graphics:mask_graphics_322,x:247.6,y:247.6}).wait(1).to({graphics:mask_graphics_323,x:247.6,y:247.6}).wait(1).to({graphics:mask_graphics_324,x:247.6,y:247.6}).wait(1).to({graphics:mask_graphics_325,x:247.6,y:247.6}).wait(1).to({graphics:mask_graphics_326,x:247.6,y:247.6}).wait(1).to({graphics:mask_graphics_327,x:247.6,y:247.6}).wait(1).to({graphics:mask_graphics_328,x:247.7,y:247.7}).wait(1).to({graphics:mask_graphics_329,x:247.7,y:247.7}).wait(1).to({graphics:mask_graphics_330,x:247.7,y:247.7}).wait(1).to({graphics:mask_graphics_331,x:247.7,y:247.7}).wait(1).to({graphics:mask_graphics_332,x:247.7,y:247.7}).wait(1).to({graphics:mask_graphics_333,x:247.8,y:247.8}).wait(1).to({graphics:mask_graphics_334,x:247.8,y:247.8}).wait(1).to({graphics:mask_graphics_335,x:247.8,y:247.8}).wait(1).to({graphics:mask_graphics_336,x:247.8,y:247.8}).wait(1).to({graphics:mask_graphics_337,x:247.9,y:247.8}).wait(1).to({graphics:mask_graphics_338,x:247.9,y:247.9}).wait(1).to({graphics:mask_graphics_339,x:247.9,y:247.9}).wait(1).to({graphics:mask_graphics_340,x:247.9,y:247.9}).wait(1).to({graphics:mask_graphics_341,x:247.9,y:247.9}).wait(1).to({graphics:mask_graphics_342,x:247.9,y:247.9}).wait(1).to({graphics:mask_graphics_343,x:248,y:247.9}).wait(1).to({graphics:mask_graphics_344,x:248,y:247.9}).wait(1).to({graphics:mask_graphics_345,x:248,y:247.9}).wait(1).to({graphics:mask_graphics_346,x:248,y:247.9}).wait(1).to({graphics:mask_graphics_347,x:248,y:247.9}).wait(1).to({graphics:mask_graphics_348,x:248,y:247.9}).wait(1).to({graphics:mask_graphics_349,x:248,y:247.9}).wait(1).to({graphics:mask_graphics_350,x:248,y:247.9}).wait(1).to({graphics:mask_graphics_351,x:247.9,y:247.9}).wait(1).to({graphics:mask_graphics_352,x:247.9,y:247.9}).wait(1).to({graphics:mask_graphics_353,x:247.9,y:247.9}).wait(1).to({graphics:mask_graphics_354,x:247.9,y:247.8}).wait(1).to({graphics:mask_graphics_355,x:247.9,y:247.8}).wait(1).to({graphics:mask_graphics_356,x:247.9,y:247.8}).wait(1).to({graphics:mask_graphics_357,x:247.8,y:247.8}).wait(1).to({graphics:mask_graphics_358,x:247.8,y:247.8}).wait(1).to({graphics:mask_graphics_359,x:247.8,y:247.7}).wait(1).to({graphics:mask_graphics_360,x:247.8,y:247.7}).wait(1).to({graphics:mask_graphics_361,x:247.7,y:247.7}).wait(1).to({graphics:mask_graphics_362,x:247.7,y:247.7}).wait(1).to({graphics:mask_graphics_363,x:247.7,y:247.6}).wait(1).to({graphics:mask_graphics_364,x:247.7,y:247.6}).wait(1).to({graphics:mask_graphics_365,x:247.7,y:247.6}).wait(1).to({graphics:mask_graphics_366,x:247.7,y:247.6}).wait(1).to({graphics:mask_graphics_367,x:247.6,y:247.6}).wait(1).to({graphics:mask_graphics_368,x:247.6,y:247.6}).wait(1).to({graphics:mask_graphics_369,x:247.6,y:247.5}).wait(70));

	// 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("ADc90QF8BiEfG6QFwI3AAMhQAAMilwI2QlwI3oHAAQoHAAlwo3Qlvo2AAsiQAAshFvo3QFlolHygR");
	this.shape_2.setTransform(274.6,286.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("ATdAAQAANNltJWQlsJVoEAAQoDAAltpVQlspWAAtNQAAtMFspWQFtpVIDAAQIEAAFsJVQFtJWAANMg");
	this.shape_3.setTransform(274.6,286.1,1.008,0.949);

	var maskedShapeInstanceList = [this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},279).to({state:[{t:this.shape_3}]},90).wait(70));

	// Layer 6 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_189 = new cjs.Graphics().p("AjQcXQp9qKAKuPQAJuPKKp+QKLp9OPAJMgAtBEvQuPgJp+qMg");
	var mask_1_graphics_190 = new cjs.Graphics().p("AixcyQqJp/gGuPQgHuPKAqJQJ/qJOPgGMAAgBEvIgTAAQuDAAqCp6g");
	var mask_1_graphics_191 = new cjs.Graphics().p("AipdNQqTp0gXuPQgWuOJ0qVQJ0qTOPgXMABsBEvIg+AAQtoAAp9pfg");
	var mask_1_graphics_192 = new cjs.Graphics().p("AigdnQqepogmuPQgnuNJpqgQJoqeOPgmMAC4BErQg1ACg0AAQtNAAp3pFg");
	var mask_1_graphics_193 = new cjs.Graphics().p("AiXeAQqppcg2uOQg2uNJdqqQJdqpONg2MAEFBEoQhKAFhJAAQsyAApyotg");
	var mask_1_graphics_194 = new cjs.Graphics().p("AiNeZQqzpQhGuNQhGuLJRq1QJQqzONhGMAFRBEiQhgAIhdAAQsYAAproUg");
	var mask_1_graphics_195 = new cjs.Graphics().p("AiDeyQq9pFhWuLQhVuKJEq/QJFq+OLhVMAGdBEcQh0ALhxAAQsAAApkn7g");
	var mask_1_graphics_196 = new cjs.Graphics().p("Ah4fKQrIo4hluKQhluJI4rIQI4rIOKhlMAHpBEUQiJAPiEAAQroAApcnjg");
	var mask_1_graphics_197 = new cjs.Graphics().p("AhtfhQrRosh1uHQh1uHIrrTQIsrROIh1MAI1BELQidAUiXAAQrRAApUnMg");
	var mask_1_graphics_198 = new cjs.Graphics().p("Ahif4QraofiFuGQiFuEIfrcQIgrbOFiFMAKBBEBQixAaiqAAQq6AApMm2g");
	var mask_1_graphics_199 = new cjs.Graphics().p("EgBWAgOQrkoSiUuDQiUuCISrmQITrkOCiUMALNBD0QjEAhi9AAQqkAApDmgg");
	var mask_1_graphics_200 = new cjs.Graphics().p("EgBJAgkQrtoFikuBQikt/IFrvQIGrtOAikMAMYBDoQjYAnjPAAQqOAAo5mKg");
	var mask_1_graphics_201 = new cjs.Graphics().p("EgA8Ag5Qr2n4i0t9Qizt9H4r3QH5r2N8i0MANkBDZQjrAvjhAAQp5AAovl1g");
	var mask_1_graphics_202 = new cjs.Graphics().p("EgAvAhOQr/nrjDt6QjDt5HrsAQHsr/N5jDMAOuBDJQj8A4jzAAQplgBollgg");
	var mask_1_graphics_203 = new cjs.Graphics().p("EgAhAhiQsHndjTt3QjSt2HdsIQHfsIN1jSMAP5BC4QkPBBkEAAQpRAAoalNg");
	var mask_1_graphics_204 = new cjs.Graphics().p("EgATAh2QsPnQjitzQjityHQsRQHRsPNyjiMARDBCmQkhBKkWAAQo9AAoPk5g");
	var mask_1_graphics_205 = new cjs.Graphics().p("EgAEAiJQsYnDjxtuQjxtuHCsZQHDsXNujxMASNBCSQkyBUkoAAQopAAoDkmg");
	var mask_1_graphics_206 = new cjs.Graphics().p("EAAKAibQsem0kBtrQkAtqG0sfQG2sgNpkAMATWBB9QlDBfk5AAQoWAAn4kUg");
	var mask_1_graphics_207 = new cjs.Graphics().p("EAAZAitQslmmkQtmQkQtmGnsnQGnsnNlkPMAUgBBnQlUBqlLAAQoDAAnskCg");
	var mask_1_graphics_208 = new cjs.Graphics().p("EAApAi/QstmZkfthQkethGYsuQGasuNfkfMAVpBBQQlkB3lcAAQnxAAnfjxg");
	var mask_1_graphics_209 = new cjs.Graphics().p("EAA5AjQQs0mLkttcQkutcGKs1QGLs1NbktMAWxBA3Ql0CDltAAQnfAAnSjgg");
	var mask_1_graphics_210 = new cjs.Graphics().p("EABKAjgQs7l8k8tXQk9tWF8s8QF9s8NVk8MAX5BAdQmECQl+AAQnNAAnEjQg");
	var mask_1_graphics_211 = new cjs.Graphics().p("EABbAjvQtBltlMtRQlLtRFttCQFvtCNQlMMAZABACQmTCemQAAQm7AAm2jBg");
	var mask_1_graphics_212 = new cjs.Graphics().p("EABsAj+QtHlflatLQlatLFetIQFgtJNKlaMAaIA/mQmiCsmiAAQmpAAmoiyg");
	var mask_1_graphics_213 = new cjs.Graphics().p("EAB+AkNQtNlRlptEQlptFFQtPQFStONDlpMAbOA/IQmwC7m0AAQmXAAmZijg");
	var mask_1_graphics_214 = new cjs.Graphics().p("EACQAkbQtTlCl3s+Ql3s/FBtUQFDtUM9l3MAcUA+pQm/DKnFAAQmGAAmKiVg");
	var mask_1_graphics_215 = new cjs.Graphics().p("EACjAkoQtZkzmFs4QmGs3EytaQE0taM4mFMAdYA+JQnMDanYAAQl0AAl6iIg");
	var mask_1_graphics_216 = new cjs.Graphics().p("EAC2Ak1QtekkmUsxQmUsxEktfQEktfMxmTMAedA9nQnZDrnqAAQljAAlqh7g");
	var mask_1_graphics_217 = new cjs.Graphics().p("EADJAlBQtjkVmisqQmisqEVtjQEVtkMqmiMAfiA9FQnnD7n8AAQlSAAlahug");
	var mask_1_graphics_218 = new cjs.Graphics().p("EADcAlMQtnkFmwsjQmwsiEFtoQEHtpMimwMAglA8hQnzENoPAAQlAAAlKhjg");
	var mask_1_graphics_219 = new cjs.Graphics().p("EADwAlXQtrj2m+sbQm+sbD2ttQD3ttMbm+MAhoA79Qn/EfoiAAQkvAAk5hYg");
	var mask_1_graphics_220 = new cjs.Graphics().p("EAEFAlhQtwjnnMsTQnLsTDmtwQDotyMTnLMAirA7WQoLEyo2AAQkdAAknhOg");
	var mask_1_graphics_221 = new cjs.Graphics().p("EAEZAlrQtzjYnZsLQnasLDXt0QDZt1MLnaMAjsA6wQoWFFpJAAQkMAAkWhEg");
	var mask_1_graphics_222 = new cjs.Graphics().p("EAEuAl0Qt3jJnnsCQnmsCDHt5QDKt5MCnmMAkuA6HQoiFZpdAAQj6AAkEg7g");
	var mask_1_graphics_223 = new cjs.Graphics().p("EAFEAl8Qt7i5n0r6Qn0r5C4t8QC6t8L6n0MAluA5eQosFspyAAQjoAAjxgyg");
	var mask_1_graphics_224 = new cjs.Graphics().p("EAFZAmEQt9iqoCrxQoBrxCpt+QCquALxoBMAmuA40Qo2GBqHAAQjWAAjfgqg");
	var mask_1_graphics_225 = new cjs.Graphics().p("EAFvAmLQuAiaoOroQoProCZuBQCbuDLooOMAnsA4IQo/GXqcAAQjEAAjMgjg");
	var mask_1_graphics_226 = new cjs.Graphics().p("EAGFAmRQuDiKobrfQobreCKuEQCLuFLfobMAoqA3bQpJGtqyAAQixAAi5gdg");
	var mask_1_graphics_227 = new cjs.Graphics().p("EAGcAmXQuFh7oorVQoorVB6uGQB8uHLVooMApnA2tQpRHDrJAAQieAAilgWg");
	var mask_1_graphics_228 = new cjs.Graphics().p("EAGzAmcQuHhro1rLQo0rMBquJQBsuILLo0MAqkA1+QpZHargAAQiMAAiQgRg");
	var mask_1_graphics_229 = new cjs.Graphics().p("EAHKAmgQuJhbpBrBQpArCBauLQBcuKLCpAMArfA1OQphHyr4AAQh4AAh8gNg");
	var mask_1_graphics_230 = new cjs.Graphics().p("EAHhAmkQuKhLpNq4QpNq3BLuNQBMuLK3pNMAsbA0eQpoIKsRAAQhkAAhogJg");
	var mask_1_graphics_231 = new cjs.Graphics().p("EAH5AmnQuMg7pYquQpZqtA7uNQA8uNKtpYMAtUAzrQpvIjspAAQhRAAhSgGg");
	var mask_1_graphics_232 = new cjs.Graphics().p("EAIRAmqQuNgspkqjQplqjAruOQAtuNKiplMAuOAy5Qp2I7tDAAQg8AAg9gCg");
	var mask_1_graphics_233 = new cjs.Graphics().p("EAIpAmrQuNgcpwqYQpxqYAcuPQAcuOKYpwMAvGAyFQp8JVteAAIhOgBg");
	var mask_1_graphics_234 = new cjs.Graphics().p("EAJCAmsQuOgMp8qNQp7qNALuPQANuPKNp7MAv9AxQQqBJvt6AAIgiAAg");
	var mask_1_graphics_235 = new cjs.Graphics().p("Au6cuQqHqCgFuPQgDuOKCqHMAwzAwaQqCKHuQADIgKAAQuHAAqDp+g");
	var mask_1_graphics_236 = new cjs.Graphics().p("AusdJQqSp3gVuPQgSuOJ2qSMAxoAvjQp2KSuQAUIg2AAQtrAAp+pjg");
	var mask_1_graphics_237 = new cjs.Graphics().p("AuedjQqcprgluPQgiuNJrqdMAydAurQprKduQAjQgxACgwAAQtQAAp5pJg");
	var mask_1_graphics_238 = new cjs.Graphics().p("AuOd9Qqopgg0uOQgyuNJfqnMAzQAtzQpfKnuOA0QhHAEhFAAQs1gBpzovg");
	var mask_1_graphics_239 = new cjs.Graphics().p("At+eWQqypUhEuNQhCuMJTqxMA0DAs5QpTKyuOBDQhcAHhZAAQscAApsoXg");
	var mask_1_graphics_240 = new cjs.Graphics().p("AtteuQq8pHhUuMQhSuKJHq8MA00Ar/QpHK8uMBTQhxAKhtAAQsDAApln/g");
	var mask_1_graphics_241 = new cjs.Graphics().p("AtcfGQrGo7hjuKQhiuJI7rGMA1lArEQo7LGuLBjQiFAOiBAAQrrAApenng");
	var mask_1_graphics_242 = new cjs.Graphics().p("AtJfeQrRovhzuIQhxuHIurQMA2UAqIQouLQuJByQiZATiUAAQrUAApVnPg");
	var mask_1_graphics_243 = new cjs.Graphics().p("As3f1QrZoiiDuGQiBuFIhraMA3DApLQoiLZuHCDQitAZinAAQq8AApOm5g");
	var mask_1_graphics_244 = new cjs.Graphics().p("EgMjAgLQrjoViTuEQiRuCIVrjMA3wAoNQoVLjuECSQjBAfi5AAQqmAApFmjg");
	var mask_1_graphics_245 = new cjs.Graphics().p("EgMPAghQrsoIiiuBQihuAIIrsMA4cAnOQoILtuBChQjUAmjMAAQqRAAo7mNg");
	var mask_1_graphics_246 = new cjs.Graphics().p("EgL6Ag2Qr1n7iyt+Qiwt9H7r1MA5HAmQQn7L1t/CxQjmAtjeAAQp8AAoxl4g");
	var mask_1_graphics_247 = new cjs.Graphics().p("EgLlAhLQr9nujCt7Qi/t6Htr9MA5yAlPQnuL+t8DBQj5A1jwAAQpmAAooljg");
	var mask_1_graphics_248 = new cjs.Graphics().p("EgLPAhfQsGngjRt3QjPt3HhsGMA6aAkPQngMGt5DQQkLA/kBAAQpTAAodlQg");
	var mask_1_graphics_249 = new cjs.Graphics().p("EgK4AhzQsOnTjgtzQjftzHTsPMA7CAjOQnTMOt0DgQkeBIkTAAQo+AAoSk8g");
	var mask_1_graphics_250 = new cjs.Graphics().p("EgKgAiGQsXnFjvtwQjutuHFsXMA7pAiMQnGMWtwDvQkvBSkkAAQorAAoGkpg");
	var mask_1_graphics_251 = new cjs.Graphics().p("EgKIAiZQsfm4j+trQj9tsG3sdMA8OAhJQm3MettD+QlABdk1AAQoYAAn6kWg");
	var mask_1_graphics_252 = new cjs.Graphics().p("EgJwAirQsmmqkNtmQkNtnGqslMA8yAgFQmpMmtoENQlRBolHAAQoFAAnukEg");
	var mask_1_graphics_253 = new cjs.Graphics().p("EgJXAi8QstmbkdtiQkbtiGbssMA9WAfBQmbMttjEdQlhBzlZAAQnyAAnijzg");
	var mask_1_graphics_254 = new cjs.Graphics().p("EgI9AjNQs0mNkstdQkqtdGNszMA93Ad9QmNM0teErQlxCBlqAAQngAAnUjjg");
	var mask_1_graphics_255 = new cjs.Graphics().p("EgIiAjdQs7l/k7tXQk5tYF+s6MA+ZAc4Ql/M7tZE6QmBCOl7AAQnOAAnGjTg");
	var mask_1_graphics_256 = new cjs.Graphics().p("EgIHAjtQtClxlKtRQlItTFxtAMA+3AbyQlwNCtTFJQmQCbmNAAQm8AAm4jDg");
	var mask_1_graphics_257 = new cjs.Graphics().p("EgHsAj8QtIlilYtMQlXtMFitHMA/WAasQliNItNFYQmfCpmeAAQmrAAmqi0g");
	var mask_1_graphics_258 = new cjs.Graphics().p("EgHQAkLQtOlUlntFQlltHFTtMMA/zAZlQlTNOtHFmQmuC4mwAAQmYAAmcilg");
	var mask_1_graphics_259 = new cjs.Graphics().p("EgGzAkZQtUlFl1s/Ql0tAFEtTMBAPAYeQlENUtBF1Qm8DHnBAAQmIAAmMiXg");
	var mask_1_graphics_260 = new cjs.Graphics().p("EgGWAkmQtZk2mEs4QmCs6E1tYMBAqAXWQk2NZs6GEQnJDXnUAAQl2AAl9iKg");
	var mask_1_graphics_261 = new cjs.Graphics().p("EgF4AkzQteknmTsyQmQszEmtdMBBDAWOQkmNfszGRQnYDonmgBQlkAAlth8g");
	var mask_1_graphics_262 = new cjs.Graphics().p("EgFaAk/QtjkYmhsrQmesrEXtiMBBbAVFQkXNjssGgQnkD4n5AAQlUAAlchwg");
	var mask_1_graphics_263 = new cjs.Graphics().p("EgE7AlKQtokImuskQmtskEItnMBByAT9QkINoslGuQnxEJoLAAQlDAAlLhlg");
	var mask_1_graphics_264 = new cjs.Graphics().p("EgEcAlVQtsj5m9scQm6scD5tsMBCHASzQj5NtsdG8Qn9EboeAAQkxAAk7hag");
	var mask_1_graphics_265 = new cjs.Graphics().p("EgD8AlgQtxjqnKsUQnIsVDqtwMBCcARqQjqNwsWHKQoIEuoyAAQkgAAkphPg");
	var mask_1_graphics_266 = new cjs.Graphics().p("EgDcAlpQt0janYsMQnWsNDbt0MBCuAQgQjaN0sNHYQoVFBpFAAQkOAAkYhGg");
	var mask_1_graphics_267 = new cjs.Graphics().p("EgC7AlyQt4jLnlsEQnksEDLt3MBDBAPVQjMN4sEHlQofFVpZAAQj9gBkGg8g");
	var mask_1_graphics_268 = new cjs.Graphics().p("EgCaAl7Qt7i8nzr7Qnxr8C8t7MBDRAOLQi8N7r8HyQoqFpptAAQjrAAj0gzg");
	var mask_1_graphics_269 = new cjs.Graphics().p("EgB4AmDQt/itn/ryQn/rzCtt+MBDgAM/QitN/rzH/Qo0F+qCAAQjZAAjhgrg");
	var mask_1_graphics_270 = new cjs.Graphics().p("EgBWAmKQuBidoNrpQoLrqCcuBMBDuAL0QidOCrqIMQo9GTqYAAQjHAAjOgkg");
	var mask_1_graphics_271 = new cjs.Graphics().p("EgAzAmQQuEiNoargQoYrhCNuDMBD6AKoQiNOFrhIZQpHGpqtAAQi1AAi6geg");
	var mask_1_graphics_272 = new cjs.Graphics().p("EgAQAmWQuHh9omrXQolrXB+uGMBEFAJdQh9OGrYImQpPG/rEAAQiiAAingXg");
	var mask_1_graphics_273 = new cjs.Graphics().p("EAASAmbQuHhuozrMQoyrOBuuJMBEQAISQhuOJrOIyQpYHWrbAAQiPAAiUgSg");
	var mask_1_graphics_274 = new cjs.Graphics().p("EAA2AmgQuJheo/rDQo+rEBeuLMBEYAHGQheOLrEI/QpgHtrzAAQh7AAiAgNg");
	var mask_1_graphics_275 = new cjs.Graphics().p("EABbAmjQuLhOpMq5QpKq5BOuMMBEgAF5QhPOMq6JMQpmIFsMAAQhoAAhqgKg");
	var mask_1_graphics_276 = new cjs.Graphics().p("EAB/AmnQuMg/pXquQpWqwA+uNMBElAEtQg+OOqwJXQpuIdskAAQhUAAhWgFg");
	var mask_1_graphics_277 = new cjs.Graphics().p("EACkAmpQuNgvpjqkQpiqlAvuOMBEpADhQguOOqmJkQp0I2s+AAQg/AAhBgDg");
	var mask_1_graphics_278 = new cjs.Graphics().p("EADKAmrQuOgfpvqZQpuqbAfuOMBEtACUQgfOPqaJvQp6JQtZAAIhVgBg");
	var mask_1_graphics_279 = new cjs.Graphics().p("EADvAmsQuOgPp6qOQp5qQAPuPMBEuABIQgOOPqQJ7Qp/Jqt1AAIgqAAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(189).to({graphics:mask_1_graphics_189,x:138.6,y:247.6}).wait(1).to({graphics:mask_1_graphics_190,x:138.3,y:247.6}).wait(1).to({graphics:mask_1_graphics_191,x:140.2,y:247.6}).wait(1).to({graphics:mask_1_graphics_192,x:142.1,y:247.6}).wait(1).to({graphics:mask_1_graphics_193,x:144,y:247.7}).wait(1).to({graphics:mask_1_graphics_194,x:145.9,y:247.7}).wait(1).to({graphics:mask_1_graphics_195,x:147.8,y:247.7}).wait(1).to({graphics:mask_1_graphics_196,x:149.7,y:247.7}).wait(1).to({graphics:mask_1_graphics_197,x:151.6,y:247.7}).wait(1).to({graphics:mask_1_graphics_198,x:153.5,y:247.8}).wait(1).to({graphics:mask_1_graphics_199,x:155.4,y:247.8}).wait(1).to({graphics:mask_1_graphics_200,x:157.3,y:247.8}).wait(1).to({graphics:mask_1_graphics_201,x:159.2,y:247.8}).wait(1).to({graphics:mask_1_graphics_202,x:161,y:247.9}).wait(1).to({graphics:mask_1_graphics_203,x:162.9,y:247.9}).wait(1).to({graphics:mask_1_graphics_204,x:164.8,y:247.9}).wait(1).to({graphics:mask_1_graphics_205,x:166.6,y:247.9}).wait(1).to({graphics:mask_1_graphics_206,x:168.4,y:247.9}).wait(1).to({graphics:mask_1_graphics_207,x:170.3,y:247.9}).wait(1).to({graphics:mask_1_graphics_208,x:172.1,y:248}).wait(1).to({graphics:mask_1_graphics_209,x:173.9,y:248}).wait(1).to({graphics:mask_1_graphics_210,x:175.7,y:248}).wait(1).to({graphics:mask_1_graphics_211,x:177.5,y:248}).wait(1).to({graphics:mask_1_graphics_212,x:179.3,y:248}).wait(1).to({graphics:mask_1_graphics_213,x:181,y:248}).wait(1).to({graphics:mask_1_graphics_214,x:182.8,y:248}).wait(1).to({graphics:mask_1_graphics_215,x:184.5,y:248}).wait(1).to({graphics:mask_1_graphics_216,x:186.2,y:248}).wait(1).to({graphics:mask_1_graphics_217,x:188,y:247.9}).wait(1).to({graphics:mask_1_graphics_218,x:189.6,y:247.9}).wait(1).to({graphics:mask_1_graphics_219,x:191.3,y:247.9}).wait(1).to({graphics:mask_1_graphics_220,x:193,y:247.9}).wait(1).to({graphics:mask_1_graphics_221,x:194.6,y:247.9}).wait(1).to({graphics:mask_1_graphics_222,x:196.3,y:247.9}).wait(1).to({graphics:mask_1_graphics_223,x:197.9,y:247.8}).wait(1).to({graphics:mask_1_graphics_224,x:199.5,y:247.8}).wait(1).to({graphics:mask_1_graphics_225,x:201,y:247.8}).wait(1).to({graphics:mask_1_graphics_226,x:202.6,y:247.8}).wait(1).to({graphics:mask_1_graphics_227,x:204.1,y:247.7}).wait(1).to({graphics:mask_1_graphics_228,x:205.6,y:247.7}).wait(1).to({graphics:mask_1_graphics_229,x:207.1,y:247.7}).wait(1).to({graphics:mask_1_graphics_230,x:208.6,y:247.7}).wait(1).to({graphics:mask_1_graphics_231,x:210,y:247.7}).wait(1).to({graphics:mask_1_graphics_232,x:211.5,y:247.6}).wait(1).to({graphics:mask_1_graphics_233,x:212.9,y:247.6}).wait(1).to({graphics:mask_1_graphics_234,x:214.3,y:247.6}).wait(1).to({graphics:mask_1_graphics_235,x:215.6,y:247.6}).wait(1).to({graphics:mask_1_graphics_236,x:216.9,y:247.6}).wait(1).to({graphics:mask_1_graphics_237,x:218.3,y:247.6}).wait(1).to({graphics:mask_1_graphics_238,x:219.5,y:247.7}).wait(1).to({graphics:mask_1_graphics_239,x:220.8,y:247.7}).wait(1).to({graphics:mask_1_graphics_240,x:222,y:247.7}).wait(1).to({graphics:mask_1_graphics_241,x:223.3,y:247.7}).wait(1).to({graphics:mask_1_graphics_242,x:224.4,y:247.7}).wait(1).to({graphics:mask_1_graphics_243,x:225.6,y:247.8}).wait(1).to({graphics:mask_1_graphics_244,x:226.7,y:247.8}).wait(1).to({graphics:mask_1_graphics_245,x:227.8,y:247.8}).wait(1).to({graphics:mask_1_graphics_246,x:228.9,y:247.8}).wait(1).to({graphics:mask_1_graphics_247,x:230,y:247.8}).wait(1).to({graphics:mask_1_graphics_248,x:231,y:247.9}).wait(1).to({graphics:mask_1_graphics_249,x:232,y:247.9}).wait(1).to({graphics:mask_1_graphics_250,x:233,y:247.9}).wait(1).to({graphics:mask_1_graphics_251,x:233.9,y:247.9}).wait(1).to({graphics:mask_1_graphics_252,x:234.8,y:247.9}).wait(1).to({graphics:mask_1_graphics_253,x:235.7,y:247.9}).wait(1).to({graphics:mask_1_graphics_254,x:236.5,y:248}).wait(1).to({graphics:mask_1_graphics_255,x:237.4,y:248}).wait(1).to({graphics:mask_1_graphics_256,x:238.1,y:248}).wait(1).to({graphics:mask_1_graphics_257,x:238.9,y:248}).wait(1).to({graphics:mask_1_graphics_258,x:239.6,y:248}).wait(1).to({graphics:mask_1_graphics_259,x:240.3,y:248}).wait(1).to({graphics:mask_1_graphics_260,x:241,y:248}).wait(1).to({graphics:mask_1_graphics_261,x:241.6,y:247.9}).wait(1).to({graphics:mask_1_graphics_262,x:242.2,y:247.9}).wait(1).to({graphics:mask_1_graphics_263,x:242.8,y:247.9}).wait(1).to({graphics:mask_1_graphics_264,x:243.3,y:247.9}).wait(1).to({graphics:mask_1_graphics_265,x:243.9,y:247.9}).wait(1).to({graphics:mask_1_graphics_266,x:244.3,y:247.9}).wait(1).to({graphics:mask_1_graphics_267,x:244.8,y:247.8}).wait(1).to({graphics:mask_1_graphics_268,x:245.2,y:247.8}).wait(1).to({graphics:mask_1_graphics_269,x:245.6,y:247.8}).wait(1).to({graphics:mask_1_graphics_270,x:245.9,y:247.8}).wait(1).to({graphics:mask_1_graphics_271,x:246.2,y:247.8}).wait(1).to({graphics:mask_1_graphics_272,x:246.5,y:247.7}).wait(1).to({graphics:mask_1_graphics_273,x:246.8,y:247.7}).wait(1).to({graphics:mask_1_graphics_274,x:247,y:247.7}).wait(1).to({graphics:mask_1_graphics_275,x:247.2,y:247.7}).wait(1).to({graphics:mask_1_graphics_276,x:247.3,y:247.6}).wait(1).to({graphics:mask_1_graphics_277,x:247.4,y:247.6}).wait(1).to({graphics:mask_1_graphics_278,x:247.5,y:247.6}).wait(1).to({graphics:mask_1_graphics_279,x:247.5,y:247.6}).wait(160));

	// 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("ANV2KQARAZARAZQFwI3AAMhQAAMilwI2QlwI3oHAAQoHAAlwo3Qlvo2AAsiQAAshFvo3QFlolHygR");
	this.shape_4.setTransform(274.6,286.1);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(189).to({_off:false},0).wait(250));

	// Layer 4 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_99 = new cjs.Graphics().p("A0ailQJwqXOOgcQOOgcKZJwQKXJxAbOOMhEtACGQgcuPJyqXg");
	var mask_2_graphics_100 = new cjs.Graphics().p("A0zidQJkqhOOgrQOOgrKjJkQKhJlArOOMhEqADQQgruOJmqig");
	var mask_2_graphics_101 = new cjs.Graphics().p("A1LiTQJZqsOMg7QOOg6KtJZQKsJZA6ONMhEmAEbQg7uNJbqsg");
	var mask_2_graphics_102 = new cjs.Graphics().p("A1jiKQJOq2OLhKQOMhKK4JOQK2JNBKOMMhEhAFmQhKuNJOq2g");
	var mask_2_graphics_103 = new cjs.Graphics().p("A15iAQJBrAOKhZQOLhZLBJBQLAJCBaOLMhEbAGvQhZuLJDrAg");
	var mask_2_graphics_104 = new cjs.Graphics().p("A2Ph1QI2rKOIhpQOJhoLLI1QLKI2BoOJMhESAH6QhpuJI3rKg");
	var mask_2_graphics_105 = new cjs.Graphics().p("A2khqQIprTOHh5QOHh4LUIpQLUIqB4OHMhEJAJEQh4uHIqrTg");
	var mask_2_graphics_106 = new cjs.Graphics().p("A24hfQIdrcOFiIQOEiHLeIcQLdIfCHOEMhD+AKOQiIuFIerdg");
	var mask_2_graphics_107 = new cjs.Graphics().p("A3LhTQIQrmODiWQOCiXLmIQQLmISCXOBMhDzALYQiXuCISrmg");
	var mask_2_graphics_108 = new cjs.Graphics().p("A3ehHQIEruOAimQN/imLwIDQLuIFCmN/MhDlAMiQimuAIErvg");
	var mask_2_graphics_109 = new cjs.Graphics().p("A3vg6QH3r3N9i1QN8i2L4H3QL3H4C2N8MhDYANrQi1t9H4r3g");
	var mask_2_graphics_110 = new cjs.Graphics().p("A4AgtQHqsAN6jEQN5jEMAHpQMAHrDFN5MhDIAO1QjFt6HrsAg");
	var mask_2_graphics_111 = new cjs.Graphics().p("A4QggQHdsHN2jUQN2jTMJHcQMIHeDTN1MhC3AP+QjUt2HesJg");
	var mask_2_graphics_112 = new cjs.Graphics().p("A4fgSQHQsPNyjjQNyjjMRHQQMQHQDjNyMhCmARGQjitzHQsQg");
	var mask_2_graphics_113 = new cjs.Graphics().p("A4tgDQHCsYNvjxQNtjyMZHCQMYHDDxNuMhCSASOQjxtuHDsYg");
	var mask_2_graphics_114 = new cjs.Graphics().p("A46AKQG0seNrkAQNpkBMgG1QMgG1EANqMhB9ATWQkBtqG2shg");
	var mask_2_graphics_115 = new cjs.Graphics().p("A5HAZQGnslNmkPQNlkQMoGnQMmGoEQNlMhBoAUeQkQtmGosog");
	var mask_2_graphics_116 = new cjs.Graphics().p("A5SApQGZstNhkeQNgkeMvGZQMuGaEeNhMhBRAVlQkethGasvg");
	var mask_2_graphics_117 = new cjs.Graphics().p("A5dA5QGLs0NcksQNcktM1GLQM1GMEsNbMhA5AWtQkstdGMs1g");
	var mask_2_graphics_118 = new cjs.Graphics().p("A5nBJQF9s6NXk7QNWk7M8F8QM8F/E7NWMhAgAXyQk7tXF+s8g");
	var mask_2_graphics_119 = new cjs.Graphics().p("A5wBaQFvtBNSlJQNQlKNDFvQNBFwFKNQMhAFAY5QlKtSFwtCg");
	var mask_2_graphics_120 = new cjs.Graphics().p("A54BrQFhtHNMlYQNKlYNJFgQNIFiFYNLMg/qAZ+QlYtMFitIg");
	var mask_2_graphics_121 = new cjs.Graphics().p("A5/B8QFStMNGlnQNFlmNOFSQNOFUFmNEMg/MAbDQlntFFUtPg");
	var mask_2_graphics_122 = new cjs.Graphics().p("A6GCOQFFtSM/l1QM/l1NUFEQNTFFF1M/Mg+vAcIQl1tAFFtUg");
	var mask_2_graphics_123 = new cjs.Graphics().p("A6LCgQE2tYM5mCQM4mDNZE1QNZE3GDM5Mg+QAdLQmCs5E2tag");
	var mask_2_graphics_124 = new cjs.Graphics().p("A6QCyQEntcMzmRQMxmRNfEnQNeEoGQMyMg9vAeOQmQsyEntfg");
	var mask_2_graphics_125 = new cjs.Graphics().p("A6TDFQEYthMsmfQMqmfNjEYQNjEaGfMrMg9OAfRQmesrEZtkg");
	var mask_2_graphics_126 = new cjs.Graphics().p("A6WDYQEKtmMkmsQMjmtNoEKQNoEKGsMkMg8rAgUQmsskEKtpg");
	var mask_2_graphics_127 = new cjs.Graphics().p("A6YDsQD7trMdm6QMcm6NsD6QNsD8G6MdMg8HAhVQm6sdD7tsg");
	var mask_2_graphics_128 = new cjs.Graphics().p("A6ZD/QDstuMVnIQMUnHNxDrQNwDtHHMVMg7iAiXQnHsWDstxg");
	var mask_2_graphics_129 = new cjs.Graphics().p("A6ZETQDdtyMNnVQMNnVN0DdQN0DeHVMNMg69AjXQnVsODet1g");
	var mask_2_graphics_130 = new cjs.Graphics().p("A6YEoQDNt2MGniQMEniN4DNQN4DPHiMFMg6WAkXQnisGDPt4g");
	var mask_2_graphics_131 = new cjs.Graphics().p("A6XE9QC/t6L9nvQL8nvN7C+QN7DAHwL9Mg5uAlWQnvr9C/t8g");
	var mask_2_graphics_132 = new cjs.Graphics().p("A6UFSQCvt9L1n8QLzn8N/CvQN+CwH8L1Mg5EAmUQn8r0Cwt/g");
	var mask_2_graphics_133 = new cjs.Graphics().p("A6RFnQCht/LroJQLsoJOACgQOBChIJLsMg4aAnSQoIrsCguCg");
	var mask_2_graphics_134 = new cjs.Graphics().p("A6MF9QCRuCLjoWQLioVODCQQOECSIVLjMg3uAoPQoWrjCSuEg");
	var mask_2_graphics_135 = new cjs.Graphics().p("A6HGSQCCuELZoiQLaoiOFCBQOGCDIiLaMg3CApLQoiraCCuHg");
	var mask_2_graphics_136 = new cjs.Graphics().p("A6BGpQByuHLRouQLQouOHByQOIBzIuLQMg2VAqHQourQBzuJg");
	var mask_2_graphics_137 = new cjs.Graphics().p("A56G/QBjuILHo6QLGo7OJBiQOKBkI7LHMg1nArCQo6rHBjuLg");
	var mask_2_graphics_138 = new cjs.Graphics().p("A5yHWQBTuKK9pGQK9pHOLBTQOLBVJHK9Mg04Ar7QpGq9BUuMg");
	var mask_2_graphics_139 = new cjs.Graphics().p("A5qHtQBFuLKzpSQKypTOMBEQONBFJSKzMg0HAs0QpSqyBEuOg");
	var mask_2_graphics_140 = new cjs.Graphics().p("A5gIEQA1uMKppeQKopeONA0QOOA2JeKpMgzWAtsQpeqoA1uPg");
	var mask_2_graphics_141 = new cjs.Graphics().p("A5VIcQAluNKeppQKepqOOAlQOPAmJpKeMgykAukQppqeAmuPg");
	var mask_2_graphics_142 = new cjs.Graphics().p("A5KIzQAWuNKTp1QKUp0OOAVQOPAWJ1KUMgxwAvbQp1qUAWuQg");
	var mask_2_graphics_143 = new cjs.Graphics().p("A4+JLQAHuNKIqAQKJqAOPAGQOPAHKAKJMgw9AwQQp/qIAGuRg");
	var mask_2_graphics_144 = new cjs.Graphics().p("A4xJkQgJuOJ+qLQJ+qKOOgKQOQgJKKJ+MgwHAxGQqLp+gJuQg");
	var mask_2_graphics_145 = new cjs.Graphics().p("A4jJ8QgYuNJyqWQJzqVOOgaQOPgXKWJyMgvSAx6QqVpzgZuQg");
	var mask_2_graphics_146 = new cjs.Graphics().p("A4UKVQgouNJnqgQJoqgONgpQOPgnKgJnMgubAysQqgpngouPg");
	var mask_2_graphics_147 = new cjs.Graphics().p("A4EKuQg4uMJcqrQJcqqOMg5QOOg2KrJbMgtjAzfQqrpcg3uOg");
	var mask_2_graphics_148 = new cjs.Graphics().p("A30LHQhHuLJQq1QJRq0OLhIQONhHK0JRMgsqA0PQq1pQhHuNg");
	var mask_2_graphics_149 = new cjs.Graphics().p("A3jLgQhWuKJEq+QJFq/OKhXQOLhWK/JFMgryA0/Qq+pEhXuMg");
	var mask_2_graphics_150 = new cjs.Graphics().p("A3QL5QhmuHI4rJQI4rIOJhnQOKhlLII4Mgq3A1vQrJo4hluLg");
	var mask_2_graphics_151 = new cjs.Graphics().p("A29MTQh2uGItrSQIsrSOGh2QOIh0LSIsMgp8A2dQrSosh1uJg");
	var mask_2_graphics_152 = new cjs.Graphics().p("A2qMtQiEuEIgrbQIfrcOFiFQOGiELbIgMgpBA3KQrbogiFuGg");
	var mask_2_graphics_153 = new cjs.Graphics().p("A2VNHQiUuCIUrkQITrlOCiUQODiULlIUMgoFA32QrkoTiUuEg");
	var mask_2_graphics_154 = new cjs.Graphics().p("A2ANhQijt/IHrtQIHruN/ikQOBiiLtIGMgnHA4iQrtoHikuBg");
	var mask_2_graphics_155 = new cjs.Graphics().p("A1pN7Qiyt8H5r2QH6r2N9izQN+iyL2H6MgmKA5LQr2n5iyt/g");
	var mask_2_graphics_156 = new cjs.Graphics().p("A1SOVQjCt5Htr+QHtr+N5jDQN7jBL/HtMglLA51Qr+ntjCt8g");
	var mask_2_graphics_157 = new cjs.Graphics().p("A06OwQjRt2HgsGQHgsHN2jSQN3jQMHHgMgkMA6dQsHngjQt4g");
	var mask_2_graphics_158 = new cjs.Graphics().p("A0iPLQjftzHSsOQHTsPNyjgQN0jfMOHSMgjLA7DQsPnSjgt0g");
	var mask_2_graphics_159 = new cjs.Graphics().p("A0IPlQjvtuHFsWQHFsXNvjvQNwjuMWHFMgiLA7pQsWnFjvtxg");
	var mask_2_graphics_160 = new cjs.Graphics().p("AzuQAQj9tqG3seQG4seNqj+QNrj9MfG3MghKA8OQsem4j+tsg");
	var mask_2_graphics_161 = new cjs.Graphics().p("AzTQbQkMtmGqslQGqslNlkOQNnkLMmGqMggIA8xQslmqkNtog");
	var mask_2_graphics_162 = new cjs.Graphics().p("Ay3Q2QkbthGcssQGcstNhkcQNikaMtGcMgfFA9TQstmckbtjg");
	var mask_2_graphics_163 = new cjs.Graphics().p("AybRRQkqtcGPszQGOszNckrQNekpMzGOMgeCA91Qs0mOkqtfg");
	var mask_2_graphics_164 = new cjs.Graphics().p("Ax+RtQk4tYGAs5QGBs6NWk6QNZk3M6GAMgc/A+VQs6mAk5tZg");
	var mask_2_graphics_165 = new cjs.Graphics().p("AxgSIQlHtSFztAQFytANRlIQNTlHNBFzMgb8A+0Qs/lzlItTg");
	var mask_2_graphics_166 = new cjs.Graphics().p("AxBSjQlVtMFktGQFktHNLlWQNOlVNGFkMga3A/SQtFlklWtOg");
	var mask_2_graphics_167 = new cjs.Graphics().p("AwiS/QljtHFVtLQFWtNNGllQNHljNNFWMgZyA/uQtMlVlktIg");
	var mask_2_graphics_168 = new cjs.Graphics().p("AwCTaQlxtAFHtRQFHtTNAlzQNBlxNSFHMgYsBAKQtRlHlztCg");
	var mask_2_graphics_169 = new cjs.Graphics().p("AvhT2QmAs6E5tXQE5tYM5mBQM7l/NYE4MgXnBAlQtWk5mBs7g");
	var mask_2_graphics_170 = new cjs.Graphics().p("Au/URQmOszEqtcQEqtdMzmPQM0mNNdEqMgWgBA9QtckqmOs1g");
	var mask_2_graphics_171 = new cjs.Graphics().p("AudUtQmcssEcthQEbtjMsmcQMtmcNiEcMgVZBBVQthkbmcsug");
	var mask_2_graphics_172 = new cjs.Graphics().p("At7VIQmpslENtlQENtnMkmrQMmmpNnENMgUSBBsQtlkNmrsng");
	var mask_2_graphics_173 = new cjs.Graphics().p("AtXVkQm3seD+tqQD+trMdm4QMfm3NrD+MgTKBCBQtqj+m4sfg");
	var mask_2_graphics_174 = new cjs.Graphics().p("AszWAQnEsXDvtuQDutvMXnGQMWnENvDvMgSBBCVQtvjvnFsXg");
	var mask_2_graphics_175 = new cjs.Graphics().p("AsOWbQnSsODgtzQDgtzMOnTQMPnSNzDgMgQ5BCpQtzjgnSsQg");
	var mask_2_graphics_176 = new cjs.Graphics().p("ArpW3QnfsHDRt2QDRt3MGngQMHnfN3DRMgPxBC6Qt2jRngsHg");
	var mask_2_graphics_177 = new cjs.Graphics().p("ArDXSQnsr+DCt5QDCt7L+ntQL+nsN6DCMgOnBDLQt6jCntsAg");
	var mask_2_graphics_178 = new cjs.Graphics().p("AqcXuQn5r2Cyt8QCzt+L2n6QL1n5N+CyMgNfBDaQt8iyn6r3g");
	var mask_2_graphics_179 = new cjs.Graphics().p("Ap1YJQoGrtCjt/QCkuBLtoHQLtoGOACkMgMVBDoQt/ikoHrug");
	var mask_2_graphics_180 = new cjs.Graphics().p("ApNYlQoTrkCUuDQCUuDLkoUQLloSODCUMgLMBD1QuCiUoTrlg");
	var mask_2_graphics_181 = new cjs.Graphics().p("AolZAQofrbCFuEQCFuGLbogQLbofOFCEMgKBBEBQuFiFogrcg");
	var mask_2_graphics_182 = new cjs.Graphics().p("An8ZbQosrRB2uIQB1uHLSosQLSosOHB2MgI3BELQuIh2orrTg");
	var mask_2_graphics_183 = new cjs.Graphics().p("AnTZ2Qo3rIBmuJQBmuJLIo5QLIo3OJBmMgHtBEUQuJhmo4rKg");
	var mask_2_graphics_184 = new cjs.Graphics().p("AmpaSQpDq/BWuLQBXuKK+pFQK/pEOLBXMgGjBEcQuLhXpEq/g");
	var mask_2_graphics_185 = new cjs.Graphics().p("Al+atQpQq1BHuMQBIuMK0pQQK0pQONBHMgFYBEiQuNhHpPq1g");
	var mask_2_graphics_186 = new cjs.Graphics().p("AlTbIQpbqrA3uNQA4uNKqpcQKqpbOOA3MgENBEoQuOg4pbqrg");
	var mask_2_graphics_187 = new cjs.Graphics().p("AkobiQpnqfApuPQAouNKgpoQKgpnOOAoMgDDBEsQuOgppnqhg");
	var mask_2_graphics_188 = new cjs.Graphics().p("Aj8b9QpyqVAZuPQAZuOKVpzQKVpyOPAYMgB4BEuQuPgYpyqXg");
	var mask_2_graphics_189 = new cjs.Graphics().p("AjQcXQp9qKAKuPQAJuPKKp+QKLp9OPAJMgAtBEvQuPgJp+qMg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(99).to({graphics:mask_2_graphics_99,x:249.3,y:140.9}).wait(1).to({graphics:mask_2_graphics_100,x:249.2,y:142.7}).wait(1).to({graphics:mask_2_graphics_101,x:249.1,y:144.6}).wait(1).to({graphics:mask_2_graphics_102,x:249,y:146.5}).wait(1).to({graphics:mask_2_graphics_103,x:248.8,y:148.3}).wait(1).to({graphics:mask_2_graphics_104,x:248.5,y:150.2}).wait(1).to({graphics:mask_2_graphics_105,x:248.3,y:152}).wait(1).to({graphics:mask_2_graphics_106,x:248,y:153.9}).wait(1).to({graphics:mask_2_graphics_107,x:247.7,y:155.7}).wait(1).to({graphics:mask_2_graphics_108,x:247.3,y:157.6}).wait(1).to({graphics:mask_2_graphics_109,x:247,y:159.4}).wait(1).to({graphics:mask_2_graphics_110,x:246.6,y:161.3}).wait(1).to({graphics:mask_2_graphics_111,x:246.1,y:163.1}).wait(1).to({graphics:mask_2_graphics_112,x:245.7,y:164.9}).wait(1).to({graphics:mask_2_graphics_113,x:245.1,y:166.7}).wait(1).to({graphics:mask_2_graphics_114,x:244.6,y:168.5}).wait(1).to({graphics:mask_2_graphics_115,x:244.1,y:170.3}).wait(1).to({graphics:mask_2_graphics_116,x:243.5,y:172.1}).wait(1).to({graphics:mask_2_graphics_117,x:242.8,y:173.9}).wait(1).to({graphics:mask_2_graphics_118,x:242.2,y:175.6}).wait(1).to({graphics:mask_2_graphics_119,x:241.5,y:177.4}).wait(1).to({graphics:mask_2_graphics_120,x:240.8,y:179.1}).wait(1).to({graphics:mask_2_graphics_121,x:240,y:180.8}).wait(1).to({graphics:mask_2_graphics_122,x:239.3,y:182.6}).wait(1).to({graphics:mask_2_graphics_123,x:238.5,y:184.3}).wait(1).to({graphics:mask_2_graphics_124,x:237.6,y:185.9}).wait(1).to({graphics:mask_2_graphics_125,x:236.8,y:187.6}).wait(1).to({graphics:mask_2_graphics_126,x:235.9,y:189.3}).wait(1).to({graphics:mask_2_graphics_127,x:235,y:190.9}).wait(1).to({graphics:mask_2_graphics_128,x:234,y:192.6}).wait(1).to({graphics:mask_2_graphics_129,x:233.1,y:194.2}).wait(1).to({graphics:mask_2_graphics_130,x:232.1,y:195.8}).wait(1).to({graphics:mask_2_graphics_131,x:231.1,y:197.4}).wait(1).to({graphics:mask_2_graphics_132,x:230,y:198.9}).wait(1).to({graphics:mask_2_graphics_133,x:228.9,y:200.5}).wait(1).to({graphics:mask_2_graphics_134,x:227.8,y:202}).wait(1).to({graphics:mask_2_graphics_135,x:226.7,y:203.5}).wait(1).to({graphics:mask_2_graphics_136,x:225.5,y:205}).wait(1).to({graphics:mask_2_graphics_137,x:224.4,y:206.5}).wait(1).to({graphics:mask_2_graphics_138,x:223.2,y:207.9}).wait(1).to({graphics:mask_2_graphics_139,x:221.9,y:209.3}).wait(1).to({graphics:mask_2_graphics_140,x:220.7,y:210.7}).wait(1).to({graphics:mask_2_graphics_141,x:219.4,y:212.1}).wait(1).to({graphics:mask_2_graphics_142,x:218.1,y:213.5}).wait(1).to({graphics:mask_2_graphics_143,x:216.8,y:214.8}).wait(1).to({graphics:mask_2_graphics_144,x:215.4,y:216.2}).wait(1).to({graphics:mask_2_graphics_145,x:214.1,y:217.5}).wait(1).to({graphics:mask_2_graphics_146,x:212.7,y:218.7}).wait(1).to({graphics:mask_2_graphics_147,x:211.3,y:220}).wait(1).to({graphics:mask_2_graphics_148,x:209.8,y:221.2}).wait(1).to({graphics:mask_2_graphics_149,x:208.4,y:222.4}).wait(1).to({graphics:mask_2_graphics_150,x:206.9,y:223.6}).wait(1).to({graphics:mask_2_graphics_151,x:205.4,y:224.8}).wait(1).to({graphics:mask_2_graphics_152,x:203.9,y:225.9}).wait(1).to({graphics:mask_2_graphics_153,x:202.4,y:227}).wait(1).to({graphics:mask_2_graphics_154,x:200.8,y:228.1}).wait(1).to({graphics:mask_2_graphics_155,x:199.3,y:229.1}).wait(1).to({graphics:mask_2_graphics_156,x:197.7,y:230.2}).wait(1).to({graphics:mask_2_graphics_157,x:196.1,y:231.2}).wait(1).to({graphics:mask_2_graphics_158,x:194.4,y:232.1}).wait(1).to({graphics:mask_2_graphics_159,x:192.8,y:233.1}).wait(1).to({graphics:mask_2_graphics_160,x:191.2,y:234}).wait(1).to({graphics:mask_2_graphics_161,x:189.5,y:234.9}).wait(1).to({graphics:mask_2_graphics_162,x:187.8,y:235.7}).wait(1).to({graphics:mask_2_graphics_163,x:186.1,y:236.6}).wait(1).to({graphics:mask_2_graphics_164,x:184.4,y:237.4}).wait(1).to({graphics:mask_2_graphics_165,x:182.7,y:238.2}).wait(1).to({graphics:mask_2_graphics_166,x:180.9,y:238.9}).wait(1).to({graphics:mask_2_graphics_167,x:179.2,y:239.6}).wait(1).to({graphics:mask_2_graphics_168,x:177.4,y:240.3}).wait(1).to({graphics:mask_2_graphics_169,x:175.7,y:241}).wait(1).to({graphics:mask_2_graphics_170,x:173.9,y:241.6}).wait(1).to({graphics:mask_2_graphics_171,x:172.1,y:242.2}).wait(1).to({graphics:mask_2_graphics_172,x:170.3,y:242.8}).wait(1).to({graphics:mask_2_graphics_173,x:168.5,y:243.3}).wait(1).to({graphics:mask_2_graphics_174,x:166.6,y:243.8}).wait(1).to({graphics:mask_2_graphics_175,x:164.8,y:244.3}).wait(1).to({graphics:mask_2_graphics_176,x:163,y:244.7}).wait(1).to({graphics:mask_2_graphics_177,x:161.1,y:245.2}).wait(1).to({graphics:mask_2_graphics_178,x:159.3,y:245.5}).wait(1).to({graphics:mask_2_graphics_179,x:157.4,y:245.9}).wait(1).to({graphics:mask_2_graphics_180,x:155.6,y:246.2}).wait(1).to({graphics:mask_2_graphics_181,x:153.7,y:246.5}).wait(1).to({graphics:mask_2_graphics_182,x:151.8,y:246.8}).wait(1).to({graphics:mask_2_graphics_183,x:149.9,y:247}).wait(1).to({graphics:mask_2_graphics_184,x:148.1,y:247.2}).wait(1).to({graphics:mask_2_graphics_185,x:146.2,y:247.3}).wait(1).to({graphics:mask_2_graphics_186,x:144.3,y:247.5}).wait(1).to({graphics:mask_2_graphics_187,x:142.4,y:247.6}).wait(1).to({graphics:mask_2_graphics_188,x:140.5,y:247.6}).wait(1).to({graphics:mask_2_graphics_189,x:138.6,y:247.6}).wait(250));

	// 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(25,1,1).p("AJ6ePQgHAAgGAAQoIAAlvo3Qlvo2AAsiQAAshFvo3QFjolHzgR");
	this.shape_5.setTransform(212.6,286.1);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(99).to({_off:false},0).wait(340));

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_9 = new cjs.Graphics().p("EAEKAmrMAAThEwQOPAEKCKIQKBKHgEOOQgDOPqHKDQqEJ9uIAAIgLAAg");
	var mask_3_graphics_10 = new cjs.Graphics().p("AD2+EQOPgNKOJ9QKMJ7AMOOQANOPp7KOQp8KNuQAMg");
	var mask_3_graphics_11 = new cjs.Graphics().p("ADP+DQOOgdKZJxQKYJvAdOOQAcOPpvKZQpwKYuPAdg");
	var mask_3_graphics_12 = new cjs.Graphics().p("ACn+BQOPgtKkJlQKiJjAtOOQAtOOpjKkQplKjuOAtg");
	var mask_3_graphics_13 = new cjs.Graphics().p("ACA99QONg9KvJYQKuJXA9ONQA9ONpXKvQpYKtuOA+g");
	var mask_3_graphics_14 = new cjs.Graphics().p("ABZ95QOMhNK6JMQK4JLBNOLQBNOMpKK5QpMK5uMBNg");
	var mask_3_graphics_15 = new cjs.Graphics().p("AAy9zQOLheLDJAQLDI+BdOKQBeOKo+LEQpALDuKBdg");
	var mask_3_graphics_16 = new cjs.Graphics().p("AAL9tQOJhtLOIzQLMIxBuOIQBuOJoyLOQozLMuIBug");
	var mask_3_graphics_17 = new cjs.Graphics().p("Agb9lQOGh+LYImQLWIlB+OHQB+OFolLYQomLXuGB+g");
	var mask_3_graphics_18 = new cjs.Graphics().p("AhC9cQODiOLiIZQLgIXCOOFQCOODoYLhQoZLhuECOg");
	var mask_3_graphics_19 = new cjs.Graphics().p("Aho9TQOAieLrIMQLqILCeOBQCeOBoLLrQoMLquBCdg");
	var mask_3_graphics_20 = new cjs.Graphics().p("AiP9IQN9iuL1H+QLzH+CtN+QCuN+n9L0Qn+Lzt+Cug");
	var mask_3_graphics_21 = new cjs.Graphics().p("Ai288QN7i+L9HxQL8HvC+N8QC9N6nvL9QnxL8t7C+g");
	var mask_3_graphics_22 = new cjs.Graphics().p("Ajc8vQN3jOMGHjQMEHiDON4QDON2niMGQnjMFt4DOg");
	var mask_3_graphics_23 = new cjs.Graphics().p("AkC8iQNzjdMOHVQMNHUDeN0QDdNznTMOQnWMOt0Ddg");
	var mask_3_graphics_24 = new cjs.Graphics().p("Ako8TQNvjtMXHHQMVHGDtNwQDtNvnGMWQnHMWtwDtg");
	var mask_3_graphics_25 = new cjs.Graphics().p("AlO8DQNrj9MeG5QMeG4D8NsQD9Nqm3MeQm5MetsD9g");
	var mask_3_graphics_26 = new cjs.Graphics().p("Alz7yQNmkNMmGrQMlGqEMNnQENNlmqMnQmqMltnEMg");
	var mask_3_graphics_27 = new cjs.Graphics().p("AmZ7gQNhkcMuGcQMtGbEcNiQEbNhmaMuQmdMstiEcg");
	var mask_3_graphics_28 = new cjs.Graphics().p("Am+7NQNcksM1GOQM0GMErNdQErNcmMM1QmOM0tcErg");
	var mask_3_graphics_29 = new cjs.Graphics().p("Ani66QNWk6M8F/QM6F+E7NXQE7NWl+M8Ql/M7tXE6g");
	var mask_3_graphics_30 = new cjs.Graphics().p("AoH6lQNQlKNDFwQNBFwFKNRQFKNRlvNCQlwNCtRFJg");
	var mask_3_graphics_31 = new cjs.Graphics().p("Aor6PQNKlZNJFhQNIFgFZNMQFZNKlgNJQlhNItMFZg");
	var mask_3_graphics_32 = new cjs.Graphics().p("ApP54QNEloNPFSQNOFRFoNFQFoNFlRNOQlSNPtFFog");
	var mask_3_graphics_33 = new cjs.Graphics().p("Apz5hQM+l2NVFCQNUFDF2M+QF3M+lBNVQlENUs+F3g");
	var mask_3_graphics_34 = new cjs.Graphics().p("AqW5IQM2mFNbEzQNaEzGFM4QGGM3kzNaQk0Nas3GGg");
	var mask_3_graphics_35 = new cjs.Graphics().p("Aq54uQMvmUNhEkQNeEjGUMxQGUMwkiNgQklNfsxGUg");
	var mask_3_graphics_36 = new cjs.Graphics().p("Arc4UQMomiNmEUQNjEVGjMpQGjMokUNlQkVNkspGjg");
	var mask_3_graphics_37 = new cjs.Graphics().p("Ar+34QMgmxNqEFQNpEFGxMhQGxMhkENqQkGNpshGxg");
	var mask_3_graphics_38 = new cjs.Graphics().p("Asg3cQMZm/NuD2QNtD1G/MaQHAMZj1NuQj2NtsaG/g");
	var mask_3_graphics_39 = new cjs.Graphics().p("AtC2+QMSnONyDmQNxDlHNMSQHNMRjkNzQjmNxsSHOg");
	var mask_3_graphics_40 = new cjs.Graphics().p("Atj2gQMJnbN2DWQN1DVHbMKQHcMIjVN3QjXN1sJHcg");
	var mask_3_graphics_41 = new cjs.Graphics().p("AuE2BQMBnpN5DGQN5DGHpMBQHpMAjFN6QjHN5sAHpg");
	var mask_3_graphics_42 = new cjs.Graphics().p("Aul1hQL4n3N9C3QN8C2H3L4QH3L3i1N9Qi3N9r4H3g");
	var mask_3_graphics_43 = new cjs.Graphics().p("AvF1AQLvoEOACmQN/CmIFLvQIELvilN/QinOArvIFg");
	var mask_3_graphics_44 = new cjs.Graphics().p("Avl0eQLmoSODCXQOCCWIRLlQISLmiVOCQiXODrmIRg");
	var mask_3_graphics_45 = new cjs.Graphics().p("AwEz7QLcofOFCGQOFCGIfLcQIeLciFOFQiGOFrcIfg");
	var mask_3_graphics_46 = new cjs.Graphics().p("AwjzYQLSosOIB2QOHB2IsLTQIrLSh1OHQh2OHrTIsg");
	var mask_3_graphics_47 = new cjs.Graphics().p("AxBy0QLIo4OKBmQOIBlI5LJQI4LIhlOJQhmOJrII5g");
	var mask_3_graphics_48 = new cjs.Graphics().p("AxfyPQK+pFOLBWQOKBWJFK+QJFK+hUOKQhXOMq9JEg");
	var mask_3_graphics_49 = new cjs.Graphics().p("Ax9xpQK0pROMBFQOMBGJSKzQJRK0hEOMQhHOMqzJSg");
	var mask_3_graphics_50 = new cjs.Graphics().p("AyaxCQKppeONA2QONA1JeKpQJeKpg0OMQg2OOqpJeg");
	var mask_3_graphics_51 = new cjs.Graphics().p("Ay3waQKepqOOAlQOOAlJqKeQJqKegkONQgmOPqeJqg");
	var mask_3_graphics_52 = new cjs.Graphics().p("AzTvyQKTp2OPAVQOOAVJ1KTQJ2KSgUOPQgVOPqTJ1g");
	var mask_3_graphics_53 = new cjs.Graphics().p("AzvvJQKHqBOQAEQOOAFKBKHQKCKIgEOOQgFOPqIKCg");
	var mask_3_graphics_54 = new cjs.Graphics().p("A0LufQJ8qNOQgMQOOgLKNJ7QKMJ8ANOPQALOPp8KNg");
	var mask_3_graphics_55 = new cjs.Graphics().p("A0mt1QJxqYOOgcQOPgcKYJxQKXJwAdOOQAcOPpwKYg");
	var mask_3_graphics_56 = new cjs.Graphics().p("A1AtJQJkqjOOgtQOOgsKjJkQKjJlAtONQAsOOplKjg");
	var mask_3_graphics_57 = new cjs.Graphics().p("A1asdQJYquONg9QONg8KuJYQKtJYA+OMQA8OOpYKug");
	var mask_3_graphics_58 = new cjs.Graphics().p("A10rxQJMq4OMhNQOLhNK5JMQK4JMBOOLQBMOMpMK5g");
	var mask_3_graphics_59 = new cjs.Graphics().p("A2NrDQJArDOKhdQOKhdLDI/QLCJABeOJQBcOLo/LDg");
	var mask_3_graphics_60 = new cjs.Graphics().p("A2lqVQIyrNOJhuQOIhsLNIyQLNIzBuOHQBsOJoyLNg");
	var mask_3_graphics_61 = new cjs.Graphics().p("A29pnQImrXOHh9QOFh9LXImQLXIlB+OGQB8OHolLXg");
	var mask_3_graphics_62 = new cjs.Graphics().p("A3Uo4QIYrgOFiNQODiOLgIZQLhIZCOODQCNOEoZLhg");
	var mask_3_graphics_63 = new cjs.Graphics().p("A3roIQILrqODidQN/idLqILQLqIMCfOAQCcOCoLLqg");
	var mask_3_graphics_64 = new cjs.Graphics().p("A4CnXQH+rzOAiuQN9itLzH+QLzH+CvN+QCsN/n+Lzg");
	var mask_3_graphics_65 = new cjs.Graphics().p("A4XmmQHwr8N9i+QN5i9L8HxQL9HwC+N7QC8N7nwL8g");
	var mask_3_graphics_66 = new cjs.Graphics().p("A4sl0QHisFN5jOQN2jMMFHiQMFHjDON3QDNN4njMFg");
	var mask_3_graphics_67 = new cjs.Graphics().p("A5BlCQHVsON1jdQNyjcMOHVQMNHUDeNzQDcN1nVMNg");
	var mask_3_graphics_68 = new cjs.Graphics().p("A5VkQQHHsVNxjtQNujsMWHHQMWHGDtNvQDsNxnHMVg");
	var mask_3_graphics_69 = new cjs.Graphics().p("A5ojcQG5seNsj8QNqj8MeG4QMeG5D9NrQD7Nsm4Mdg");
	var mask_3_graphics_70 = new cjs.Graphics().p("A57ioQGrsmNokMQNlkLMlGqQMmGqENNmQELNomrMlg");
	var mask_3_graphics_71 = new cjs.Graphics().p("A6Nh0QGcstNjkcQNhkbMtGcQMtGcEcNhQEaNjmcMsg");
	var mask_3_graphics_72 = new cjs.Graphics().p("A6eg/QGOs0NdkrQNckrM0GOQM0GNErNcQEqNdmNM0g");
	var mask_3_graphics_73 = new cjs.Graphics().p("A6ugKQF+s7NZk7QNVk5M7F+QM7F/E7NWQE6NYl/M7g");
	var mask_3_graphics_74 = new cjs.Graphics().p("A6+AqQFvtANTlKQNQlJNCFwQNBFwFLNRQFINSlwNBg");
	var mask_3_graphics_75 = new cjs.Graphics().p("A7OBgQFhtHNNlYQNKlYNIFhQNIFhFZNKQFYNMlhNIg");
	var mask_3_graphics_76 = new cjs.Graphics().p("A7cCXQFRtNNHloQNElnNOFSQNOFSFoNEQFnNGlSNOg");
	var mask_3_graphics_77 = new cjs.Graphics().p("A7qDOQFCtTNAl3QM9l2NVFDQNUFDF3M9QF1NAlCNUg");
	var mask_3_graphics_78 = new cjs.Graphics().p("A74EFQE0tZM5mFQM2mFNaE0QNaEzGGM3QGEM5k0NZg");
	var mask_3_graphics_79 = new cjs.Graphics().p("A8EE9QEkteMymUQMvmUNfEkQNfElGVMvQGTMykkNfg");
	var mask_3_graphics_80 = new cjs.Graphics().p("A8QF1QEUtkMrmiQMomiNkEVQNkEVGjMoQGiMqkVNkg");
	var mask_3_graphics_81 = new cjs.Graphics().p("A8cGtQEGtoMjmxQMgmwNpEFQNpEFGyMhQGvMjkFNpg");
	var mask_3_graphics_82 = new cjs.Graphics().p("A8mHlQD2tsMbm/QMYm/NuD2QNtD2HAMZQG+Maj2Nug");
	var mask_3_graphics_83 = new cjs.Graphics().p("A8wIeQDmtwMTnOQMSnMNwDmQNyDmHOMRQHMMSjmNyg");
	var mask_3_graphics_84 = new cjs.Graphics().p("A85JXQDWt0MLncQMJnaN1DWQN1DWHcMKQHaMJjWN2g");
	var mask_3_graphics_85 = new cjs.Graphics().p("A9CKRQDHt5MCnpQMAnoN5DGQN5DHHqMBQHoMAjHN6g");
	var mask_3_graphics_86 = new cjs.Graphics().p("A9JLKQC2t8L5n2QL4n2N8C2QN9C3H3L4QH1L4i2N8g");
	var mask_3_graphics_87 = new cjs.Graphics().p("A9QMEQCmt/LwoEQLvoDN/CmQOACnIELvQIELuinOAg");
	var mask_3_graphics_88 = new cjs.Graphics().p("A9XM+QCXuCLnoRQLloROCCXQOCCWISLmQIRLliXODg");
	var mask_3_graphics_89 = new cjs.Graphics().p("A9cN4QCGuELdofQLcoeOECHQOGCGIfLcQIdLciGOGg");
	var mask_3_graphics_90 = new cjs.Graphics().p("A9hOyQB2uHLTorQLSoqOHB2QOIB2IrLSQIrLTh2OHg");
	var mask_3_graphics_91 = new cjs.Graphics().p("A9mPtQBnuKLJo3QLIo4OIBnQOKBmI5LIQI3LIhmOKg");
	var mask_3_graphics_92 = new cjs.Graphics().p("A9pQnQBWuLK/pEQK+pEOKBWQOLBWJFK+QJEK+hWOLg");
	var mask_3_graphics_93 = new cjs.Graphics().p("A9sRiQBGuMK0pRQK0pROLBGQONBGJSK0QJQKzhGONg");
	var mask_3_graphics_94 = new cjs.Graphics().p("A9vSdQA2uOKqpdQKppcOMA1QOOA2JeKpQJdKog2OOg");
	var mask_3_graphics_95 = new cjs.Graphics().p("A9wTYQAluPKfppQKeppOOAmQOOAlJqKeQJpKeglOOg");
	var mask_3_graphics_96 = new cjs.Graphics().p("A9xUSQAVuOKUp1QKTp1OOAVQOPAVJ2KTQJ0KTgVOPg");
	var mask_3_graphics_97 = new cjs.Graphics().p("A9xVNQAEuPKJqAQKHqBOPAFQOPAFKBKIQKBKHgFOPg");
	var mask_3_graphics_98 = new cjs.Graphics().p("Az/iuQJ8qMOOgLQOPgMKNJ8QKMJ8ALOPMhEvAA3QgLuPJ9qMg");
	var mask_3_graphics_99 = new cjs.Graphics().p("A0ailQJwqXOOgcQOOgcKZJwQKXJxAbOOMhEtACGQgcuPJyqXg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_3_graphics_9,x:247.5,y:247.5}).wait(1).to({graphics:mask_3_graphics_10,x:247.6,y:247.5}).wait(1).to({graphics:mask_3_graphics_11,x:247.6,y:247.4}).wait(1).to({graphics:mask_3_graphics_12,x:247.6,y:247.4}).wait(1).to({graphics:mask_3_graphics_13,x:247.7,y:247.3}).wait(1).to({graphics:mask_3_graphics_14,x:247.7,y:247.1}).wait(1).to({graphics:mask_3_graphics_15,x:247.7,y:246.9}).wait(1).to({graphics:mask_3_graphics_16,x:247.8,y:246.7}).wait(1).to({graphics:mask_3_graphics_17,x:247.8,y:246.5}).wait(1).to({graphics:mask_3_graphics_18,x:247.9,y:246.2}).wait(1).to({graphics:mask_3_graphics_19,x:247.9,y:245.8}).wait(1).to({graphics:mask_3_graphics_20,x:248,y:245.5}).wait(1).to({graphics:mask_3_graphics_21,x:248,y:245.1}).wait(1).to({graphics:mask_3_graphics_22,x:248.1,y:244.7}).wait(1).to({graphics:mask_3_graphics_23,x:248.1,y:244.2}).wait(1).to({graphics:mask_3_graphics_24,x:248.1,y:243.7}).wait(1).to({graphics:mask_3_graphics_25,x:248.2,y:243.2}).wait(1).to({graphics:mask_3_graphics_26,x:248.2,y:242.6}).wait(1).to({graphics:mask_3_graphics_27,x:248.3,y:242}).wait(1).to({graphics:mask_3_graphics_28,x:248.3,y:241.4}).wait(1).to({graphics:mask_3_graphics_29,x:248.3,y:240.7}).wait(1).to({graphics:mask_3_graphics_30,x:248.3,y:240}).wait(1).to({graphics:mask_3_graphics_31,x:248.4,y:239.3}).wait(1).to({graphics:mask_3_graphics_32,x:248.4,y:238.6}).wait(1).to({graphics:mask_3_graphics_33,x:248.4,y:237.8}).wait(1).to({graphics:mask_3_graphics_34,x:248.4,y:237}).wait(1).to({graphics:mask_3_graphics_35,x:248.4,y:236.1}).wait(1).to({graphics:mask_3_graphics_36,x:248.4,y:235.2}).wait(1).to({graphics:mask_3_graphics_37,x:248.5,y:234.3}).wait(1).to({graphics:mask_3_graphics_38,x:248.5,y:233.3}).wait(1).to({graphics:mask_3_graphics_39,x:248.5,y:232.4}).wait(1).to({graphics:mask_3_graphics_40,x:248.5,y:231.4}).wait(1).to({graphics:mask_3_graphics_41,x:248.5,y:230.3}).wait(1).to({graphics:mask_3_graphics_42,x:248.5,y:229.3}).wait(1).to({graphics:mask_3_graphics_43,x:248.5,y:228.2}).wait(1).to({graphics:mask_3_graphics_44,x:248.5,y:227}).wait(1).to({graphics:mask_3_graphics_45,x:248.5,y:225.9}).wait(1).to({graphics:mask_3_graphics_46,x:248.5,y:224.7}).wait(1).to({graphics:mask_3_graphics_47,x:248.5,y:223.5}).wait(1).to({graphics:mask_3_graphics_48,x:248.5,y:222.2}).wait(1).to({graphics:mask_3_graphics_49,x:248.5,y:221}).wait(1).to({graphics:mask_3_graphics_50,x:248.5,y:219.7}).wait(1).to({graphics:mask_3_graphics_51,x:248.5,y:218.4}).wait(1).to({graphics:mask_3_graphics_52,x:248.5,y:217}).wait(1).to({graphics:mask_3_graphics_53,x:248.5,y:215.7}).wait(1).to({graphics:mask_3_graphics_54,x:248.5,y:214.3}).wait(1).to({graphics:mask_3_graphics_55,x:248.6,y:212.9}).wait(1).to({graphics:mask_3_graphics_56,x:248.6,y:211.4}).wait(1).to({graphics:mask_3_graphics_57,x:248.6,y:210}).wait(1).to({graphics:mask_3_graphics_58,x:248.7,y:208.5}).wait(1).to({graphics:mask_3_graphics_59,x:248.7,y:207}).wait(1).to({graphics:mask_3_graphics_60,x:248.7,y:205.4}).wait(1).to({graphics:mask_3_graphics_61,x:248.8,y:203.9}).wait(1).to({graphics:mask_3_graphics_62,x:248.8,y:202.3}).wait(1).to({graphics:mask_3_graphics_63,x:248.9,y:200.7}).wait(1).to({graphics:mask_3_graphics_64,x:248.9,y:199.1}).wait(1).to({graphics:mask_3_graphics_65,x:249,y:197.4}).wait(1).to({graphics:mask_3_graphics_66,x:249,y:195.8}).wait(1).to({graphics:mask_3_graphics_67,x:249,y:194.1}).wait(1).to({graphics:mask_3_graphics_68,x:249.1,y:192.4}).wait(1).to({graphics:mask_3_graphics_69,x:249.1,y:190.7}).wait(1).to({graphics:mask_3_graphics_70,x:249.1,y:189}).wait(1).to({graphics:mask_3_graphics_71,x:249.2,y:187.2}).wait(1).to({graphics:mask_3_graphics_72,x:249.2,y:185.5}).wait(1).to({graphics:mask_3_graphics_73,x:249.2,y:183.7}).wait(1).to({graphics:mask_3_graphics_74,x:249.3,y:181.9}).wait(1).to({graphics:mask_3_graphics_75,x:249.3,y:180.1}).wait(1).to({graphics:mask_3_graphics_76,x:249.3,y:178.3}).wait(1).to({graphics:mask_3_graphics_77,x:249.3,y:176.5}).wait(1).to({graphics:mask_3_graphics_78,x:249.3,y:174.6}).wait(1).to({graphics:mask_3_graphics_79,x:249.3,y:172.8}).wait(1).to({graphics:mask_3_graphics_80,x:249.4,y:170.9}).wait(1).to({graphics:mask_3_graphics_81,x:249.4,y:169.1}).wait(1).to({graphics:mask_3_graphics_82,x:249.4,y:167.2}).wait(1).to({graphics:mask_3_graphics_83,x:249.4,y:165.3}).wait(1).to({graphics:mask_3_graphics_84,x:249.4,y:163.4}).wait(1).to({graphics:mask_3_graphics_85,x:249.4,y:161.5}).wait(1).to({graphics:mask_3_graphics_86,x:249.4,y:159.5}).wait(1).to({graphics:mask_3_graphics_87,x:249.4,y:157.6}).wait(1).to({graphics:mask_3_graphics_88,x:249.4,y:155.7}).wait(1).to({graphics:mask_3_graphics_89,x:249.4,y:153.8}).wait(1).to({graphics:mask_3_graphics_90,x:249.4,y:151.8}).wait(1).to({graphics:mask_3_graphics_91,x:249.4,y:149.9}).wait(1).to({graphics:mask_3_graphics_92,x:249.4,y:147.9}).wait(1).to({graphics:mask_3_graphics_93,x:249.4,y:146}).wait(1).to({graphics:mask_3_graphics_94,x:249.4,y:144}).wait(1).to({graphics:mask_3_graphics_95,x:249.4,y:142}).wait(1).to({graphics:mask_3_graphics_96,x:249.4,y:140.1}).wait(1).to({graphics:mask_3_graphics_97,x:249.4,y:138.1}).wait(1).to({graphics:mask_3_graphics_98,x:249.4,y:138.9}).wait(1).to({graphics:mask_3_graphics_99,x:249.3,y:140.9}).wait(340));

	// 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(25,1,1).p("AG2eDQmFhckknDQlvo2AAsiQAAshFvo3QFkolHygR");
	this.shape_6.setTransform(210.2,284.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(25,1,1).p("AJ6ePQgHAAgGAAQoIAAlvo3Qlvo2AAsiQAAshFvo3QFjolHzgR");
	this.shape_7.setTransform(212.6,286.1);

	var maskedShapeInstanceList = [this.shape_6,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6}]},9).to({state:[{t:this.shape_7}]},50).wait(380));

	// Base
	this.instance_2 = new lib.Symbol1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(274.7,285.7);
	this.instance_2.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(439));

	// Background
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_8.setTransform(275,275,3.373,2.543);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_9.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(439));

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