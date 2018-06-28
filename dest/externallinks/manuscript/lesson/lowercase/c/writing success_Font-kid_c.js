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
	this.shape.graphics.f("#FFFFFF").s().p("Ao6KVQkIkXAAmMQAAmLEGkKQEJkLF6AAQHMAAELFwQAlAyAAA5QAABJg2A1Qg2A0hGAAQhQAAg0hHQisjpkVAAQjtAAikCoQihClAAD2QAAD5CmCwQCmCxDnAAQEUAACqjuQA2hJBQAAQBGAAA2A3QA2A0AABHQAAA5glA1QkTF6nGAAQl5AAkGkag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.5,-94.2,167.1,188.6);


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


(lib.honeyflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.honeybee();
	this.instance.parent = this;
	this.instance.setTransform(22.9,-144.3,0.422,0.422,0,0,0,-36.8,63.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOB8IgRgDIgCgBIgFgBIgEgCIgFgCIgGgCIgGgDIgDgCIgBgBIgBgBIgBAAIgCgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIgCgBIgBAAIgBgBIgBgBIgBgBIgBgBIgBAAIgBgBIAAgBIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIAAgBIgBgBIgBAAIgBgBIAAgBIgBgBIgBgBIgBgBIAAAAIgBgBIgBgBIAAgBIgBgBIgBgBIAAgBIgBAAIgBgBIAAgBIgBgBIAAgBIgBgBIgBgBIAAgBIgBAAIAAgBIgBgBIAAgBIgBgBIAAgBIgBgBIAAgBIgBAAIAAgBIgBgBIAAgBIgBgBIAAgBIgBgBIAAgBIAAAAIgBgBIAAgBIAAgBIgBgBIAAgBIgBgBIAAgBIAAgBIgBgBIAAAAIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIAAAAIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIgBAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIgBAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIABgBIAAgBIABgBIABgBIAAgBIABgBIAAgBIABgBIABgBIABgBIABgBIAAgCIABgBIABgBIABgBIABgBIABgBIABgBIAAgBIABgBIABgBIABgBIABgBIACgBIABgCIABgBIABgBIABgBIADgCIAKgIQAJgGAJgEIAGgDIAKgEIAUgEIAPgBIAQABIAPACIAQAGIAQAHIAEACIABABIABABIABABIABAAIACABIABABIABABIABABIABAAIABABIABABIABABIABABIABAAIABABIABABIABABIABABIABAAIAAABIABABIABABIABABIABABIAAAAIABABIABABIABABIABABIAAABIABABIABAAIAAABIABABIABABIAAABIABABIABAAIAAABIABABIABABIAAABIABABIAAABIABAAIABABIAAABIABABIAAABIABABIAAABIABABIAAAAIABABIABABIAAABIAAABIABABIAAABIABABIAAABIABAAIAAABIABABIAAABIAAABIABABIAAABIAAABIABABIAAAAIABABIAAABIAAABIABABIAAABIAAABIAAABIABABIAAABIAAAAIABABIAAABIAAABIABABIAAABIAAABIAAABIAAABIABABIAAABIAAABIAAAAIABABIAAABIAAABIAAABIAAABIAAABIABABIAAABIAAABIAAACIAAABIABACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIgBABIABABIgBABIAAABIAAABIAAABIAAABIgBABIAAABIAAABIAAACIgBACIAAACIAAABIAAAAIgBACIAAAAIAAABIAAABIgBABIAAABIAAABIgBABIAAABIAAABIgBABIAAABIAAABIgBABIAAABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIAAABIgBABIAAABIgBABIAAACIgBABIAAABIgBABIAAABIgBABIgBABIAAABIgBABIAAABIgBABIgBABIgBABIAAABIgBABIgBABIAAABIgBABIgBABIgBABIgBABIAAABIgBABIgBACIgBABIgBABIgBABIgBABIgBABIgBABIgBABIgKAJQgMAKgOAGIgSAHQgRAFgSAAIgOgBg");
	this.shape.setTransform(23,-143.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-215.3,105.5,84);


// stage content:
(lib.writingsuccess_Fontkid_c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_286 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(286).call(this.frame_286).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(341.7,230,0.998,0.998,8,0,0,22.4,-144);
	this.instance._off = true;

	this.instance_1 = new lib.honeybee();
	this.instance_1.parent = this;
	this.instance_1.setTransform(342.3,323.2,0.421,0.421,8,0,0,-36.6,63.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[341.7,230.1,339.3,227.3,336.7,224.6,315.1,203.1,284.6,203.1,254.1,203.1,232.6,224.6,211,246.2,211,276.7,211,307.2,232.6,328.7,254.1,350.3,284.6,350.3,315.1,350.3,336.7,328.7,337.5,327.9,341.7,323.5]}},200).to({_off:true},13).wait(65));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(222).to({_off:false},0).to({regX:-36.7,rotation:8.5,guide:{path:[341.7,323.7,306.8,477.5,165.9,468.3,25.4,459.3,20.9,675.8]}},64).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(340,321.1,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},200).wait(78));

	// Layer 1
	this.instance_2 = new lib.ar2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(277.2,274.7,1,1,-45);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(278));

	// Layer 17 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_173 = new cjs.Graphics().p("AIZZbQlnlvAEn/QAFoBFtlmQFuloIBAEMgAWAmrQoAgFloltg");
	var mask_graphics_174 = new cjs.Graphics().p("AIsZ2QlylkgMn/QgLoBFilxQFjlzIAgLMAA3AmpIggABQnsAAlnlXg");
	var mask_graphics_175 = new cjs.Graphics().p("AI1aQQl9lYgbn/QgboBFWl7QFXl+IAgbMACDAmnQgmACgkAAQnSAAlhk9g");
	var mask_graphics_176 = new cjs.Graphics().p("AI+apQmHlMgrn/Qgqn/FKmGQFLmIH/grMADPAmiQg7AFg5AAQm4AAlbkkg");
	var mask_graphics_177 = new cjs.Graphics().p("AJJbBQmRlAg7n9Qg6n+E+mQQE/mSH9g6MAEbAmaQhPAJhNAAQmgAAlTkMg");
	var mask_graphics_178 = new cjs.Graphics().p("AJUbYQmbk0hKn6QhKn8EymbQEzmaH7hKMAFmAmQQhjAPhgAAQmJAAlLj2g");
	var mask_graphics_179 = new cjs.Graphics().p("AJgbuQmkknhZn4Qhan5ElmkQEmmkH4hZMAGyAmEQh3AVhxAAQl0AAlCjgg");
	var mask_graphics_180 = new cjs.Graphics().p("AJtcDQmtkahpn1Qhon2EXmsQEZmtH1hpMAH8Al1QiJAdiDAAQlfAAk4jLg");
	var mask_graphics_181 = new cjs.Graphics().p("AJ7cXQm2kMh4nyQh4nyEKm1QELm2Hyh4MAJHAllQibAliWAAQlKAAkti3g");
	var mask_graphics_182 = new cjs.Graphics().p("AKJcqQm9j+iInuQiHnvD8m9QD+m9HuiIMAKQAlSQisAwinAAQk3AAkiilg");
	var mask_graphics_183 = new cjs.Graphics().p("AKYc8QnFjwiXnqQiWnqDvnFQDwnEHpiXMALaAk8Qi+A7i4AAQkkAAkWiTg");
	var mask_graphics_184 = new cjs.Graphics().p("AKodNQnMjiimnlQilnlDgnMQDinMHlimMAMiAklQjOBHjKAAQkRAAkJiCg");
	var mask_graphics_185 = new cjs.Graphics().p("AK5deQnTjVi1nfQi0ngDSnSQDUnTHfi1MANqAkLQjeBUjbAAQj/AAj7hxg");
	var mask_graphics_186 = new cjs.Graphics().p("ALKdtQnZjGjEnZQjCnbDDnYQDFnZHajEMAOwAjvQjsBijtAAQjtAAjthig");
	var mask_graphics_187 = new cjs.Graphics().p("ALcd7Qnfi3jSnTQjRnUC1nfQC2nfHUjSMAP2AjRQj7Bxj+AAQjcAAjehUg");
	var mask_graphics_188 = new cjs.Graphics().p("ALueIQnkiojgnNQjgnNCnnkQCnnkHNjgMAQ7AiwQkICBkRAAQjKAAjPhHg");
	var mask_graphics_189 = new cjs.Graphics().p("AMCeUQnqiajunFQjunGCZnpQCXnpHGjuMAR/AiOQkVCSkjAAQi5AAi+g7g");
	var mask_graphics_190 = new cjs.Graphics().p("AMWefQnuiKj8m+Qj8m/CJntQCJnuG+j8MATCAhqQkiCkk1AAQioAAitgwg");
	var mask_graphics_191 = new cjs.Graphics().p("AMqepQnyh7kKm2QkJm3B6nxQB5nyG2kJMAUEAhDQktC3lJAAQiWAAicgmg");
	var mask_graphics_192 = new cjs.Graphics().p("AM/exQn2hrkWmuQkXmuBrn1QBqn1GtkXMAVEAgbQk3DKleAAQiEAAiKgdg");
	var mask_graphics_193 = new cjs.Graphics().p("ANVe5Qn5hckkmlQkkmlBbn4QBcn5GkkjIWDfwQlBDflzAAQhyAAh3gVg");
	var mask_graphics_194 = new cjs.Graphics().p("ANre/Qn8hMkwmcQkxmcBMn6QBLn8GbkwIXCfEQlLD1mIAAQhgAAhkgPg");
	var mask_graphics_195 = new cjs.Graphics().p("AOBfFQn9g9k9mSQk9mTA8n8QA8n+GRk9IX+eWQlTEMmfAAQhOAAhQgJg");
	var mask_graphics_196 = new cjs.Graphics().p("AOZfJQn/gulKmHQlJmJAsn+QAsn/GHlJIY6dlQlbEkm3AAQg6AAg7gFg");
	var mask_graphics_197 = new cjs.Graphics().p("AOwfMQoAgelVl9QlVl/Acn/QAcoAF9lVIZzc0QlhE8nRAAQglAAgngCg");
	var mask_graphics_198 = new cjs.Graphics().p("APIfNQoBgOlhlyQlgl0AMoAQANoBFylgIarcAQlnFWnrAAIgigBg");
	var mask_graphics_199 = new cjs.Graphics().p("AB0ZoQlslpgDoAQgEoBFolsIbhbLQlpFtoAAEIgGAAQn9AAlqlmg");
	var mask_graphics_200 = new cjs.Graphics().p("ACCaCQl3ldgToAQgToBFcl2IcWaUQldF3oAAUIgyABQnhAAlllMg");
	var mask_graphics_201 = new cjs.Graphics().p("ACRacQmBlSgjn/QgioAFQmBIdIZbQlRGCn/AkQguADguAAQnHAAlfkyg");
	var mask_graphics_202 = new cjs.Graphics().p("ACia0QmLlFgzn+Qgyn/FFmLId5YhQlFGMn+AzQhEAHhBAAQmuAAlYkag");
	var mask_graphics_203 = new cjs.Graphics().p("AC0bMQmVk5hCn8QhCn9E4mWIepXmQk5GWn8BDQhYALhVAAQmWAAlQkCg");
	var mask_graphics_204 = new cjs.Graphics().p("ADHbiQmekshSn6QhSn6EsmgIfWWpQksGgn6BSQhrARhoAAQmAAAlHjsg");
	var mask_graphics_205 = new cjs.Graphics().p("ADcb4Qmokghhn2Qhin4EgmpMAgBAVrQkfGon3BiQh/AZh5AAQlrAAk9jXg");
	var mask_graphics_206 = new cjs.Graphics().p("ADxcMQmwkShxnzQhxn1ESmxMAgrAUrQkRGxn0BxQiSAhiLAAQlWAAkzjDg");
	var mask_graphics_207 = new cjs.Graphics().p("AEIcgQm5kFiAnvQiAnxEFm6MAhSATqQkEG6nwCAQijAqidAAQlCAAkoivg");
	var mask_graphics_208 = new cjs.Graphics().p("AEfczQnAj3iPnsQiPntD2nBMAh5ASoQj3HBnsCQQi0A0ivAAQkuAAkdicg");
	var mask_graphics_209 = new cjs.Graphics().p("AE4dEQnIjpiennQienoDonJMAidARlQjpHInoCfQjFBAi/AAQkcAAkQiLg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(173).to({graphics:mask_graphics_173,x:143.1,y:199.7}).wait(1).to({graphics:mask_graphics_174,x:143.9,y:199.7}).wait(1).to({graphics:mask_graphics_175,x:145.8,y:199.7}).wait(1).to({graphics:mask_graphics_176,x:147.7,y:199.7}).wait(1).to({graphics:mask_graphics_177,x:149.6,y:199.7}).wait(1).to({graphics:mask_graphics_178,x:151.5,y:199.8}).wait(1).to({graphics:mask_graphics_179,x:153.4,y:199.8}).wait(1).to({graphics:mask_graphics_180,x:155.2,y:199.8}).wait(1).to({graphics:mask_graphics_181,x:157.1,y:199.8}).wait(1).to({graphics:mask_graphics_182,x:158.9,y:199.9}).wait(1).to({graphics:mask_graphics_183,x:160.8,y:199.9}).wait(1).to({graphics:mask_graphics_184,x:162.6,y:199.9}).wait(1).to({graphics:mask_graphics_185,x:164.4,y:199.9}).wait(1).to({graphics:mask_graphics_186,x:166.1,y:199.9}).wait(1).to({graphics:mask_graphics_187,x:167.9,y:199.9}).wait(1).to({graphics:mask_graphics_188,x:169.6,y:199.9}).wait(1).to({graphics:mask_graphics_189,x:171.3,y:199.9}).wait(1).to({graphics:mask_graphics_190,x:173,y:199.9}).wait(1).to({graphics:mask_graphics_191,x:174.6,y:199.9}).wait(1).to({graphics:mask_graphics_192,x:176.2,y:199.8}).wait(1).to({graphics:mask_graphics_193,x:177.8,y:199.8}).wait(1).to({graphics:mask_graphics_194,x:179.4,y:199.8}).wait(1).to({graphics:mask_graphics_195,x:180.9,y:199.8}).wait(1).to({graphics:mask_graphics_196,x:182.4,y:199.8}).wait(1).to({graphics:mask_graphics_197,x:183.8,y:199.8}).wait(1).to({graphics:mask_graphics_198,x:185.2,y:199.8}).wait(1).to({graphics:mask_graphics_199,x:186.6,y:199.8}).wait(1).to({graphics:mask_graphics_200,x:187.9,y:199.8}).wait(1).to({graphics:mask_graphics_201,x:189.1,y:199.8}).wait(1).to({graphics:mask_graphics_202,x:190.4,y:199.8}).wait(1).to({graphics:mask_graphics_203,x:191.6,y:199.8}).wait(1).to({graphics:mask_graphics_204,x:192.7,y:199.8}).wait(1).to({graphics:mask_graphics_205,x:193.8,y:199.9}).wait(1).to({graphics:mask_graphics_206,x:194.8,y:199.9}).wait(1).to({graphics:mask_graphics_207,x:195.8,y:199.9}).wait(1).to({graphics:mask_graphics_208,x:196.8,y:199.9}).wait(1).to({graphics:mask_graphics_209,x:197.7,y:199.9}).wait(78));

	// Layer 16
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AKUHBQg3A/gJAJQjXDXkxAAQkwAAjYjXQjXjYAAkxQAAkwDXjYQDYjXEwAAQExAADXDXQAbAbAXAc");
	this.shape_1.setTransform(277,275);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(173).to({_off:false},0).wait(114));

	// Layer 15 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_44 = new cjs.Graphics().p("AMnngQIAAAFrFqQFqFqAAIAQAAIBlqFqQlrFroAAAg");
	var mask_1_graphics_45 = new cjs.Graphics().p("AMJngQIAgMF0FhQFzFhAMIAQANIBliFzQliFzoAANg");
	var mask_1_graphics_46 = new cjs.Graphics().p("ALrneQIAgZF8FYQF7FYAZIAQAZIAlYF7QlZF8oAAZg");
	var mask_1_graphics_47 = new cjs.Graphics().p("ALNncQH/glGEFPQGEFPAlH/QAlH/lOGEQlQGEn/Alg");
	var mask_1_graphics_48 = new cjs.Graphics().p("AKvnYQH+gxGMFFQGMFFAxH+QAyH/lFGLQlGGMn+Ayg");
	var mask_1_graphics_49 = new cjs.Graphics().p("AKRnTQH8g+GUE8QGUE8A+H8QA+H9k8GTQk8GUn9A/g");
	var mask_1_graphics_50 = new cjs.Graphics().p("AJznNQH7hKGbExQGbEyBLH7QBKH8kxGaQkzGcn7BLg");
	var mask_1_graphics_51 = new cjs.Graphics().p("AJVnGQH5hWGjEnQGiEoBXH5QBXH5koGiQkoGkn5BWg");
	var mask_1_graphics_52 = new cjs.Graphics().p("AI3m9QH3hjGqEdQGpEeBjH2QBjH3kdGpQkeGrn3Bjg");
	var mask_1_graphics_53 = new cjs.Graphics().p("AIZm0QH1hvGxESQGwEUBvH0QBvH0kTGwQkUGxn0Bvg");
	var mask_1_graphics_54 = new cjs.Graphics().p("AH8mqQHxh7G4EIQG3EKB7HwQB7HykIG2QkJG4nyB7g");
	var mask_1_graphics_55 = new cjs.Graphics().p("AHfmeQHuiIG+D+QG9D/CHHtQCHHuj9G9Qj/G+nuCHg");
	var mask_1_graphics_56 = new cjs.Graphics().p("AHCmSQHriTHDDyQHDD0CUHqQCTHrjzHDQjzHEnrCTg");
	var mask_1_graphics_57 = new cjs.Graphics().p("AGlmEQHnigHKDoQHJDpCeHmQCgHnjoHJQjoHKnnCfg");
	var mask_1_graphics_58 = new cjs.Graphics().p("AGIl2QHkirHODcQHPDeCrHiQCrHkjdHOQjdHPnjCrg");
	var mask_1_graphics_59 = new cjs.Graphics().p("AFslmQHfi3HUDRQHUDTC2HdQC3HfjRHUQjSHUnfC3g");
	var mask_1_graphics_60 = new cjs.Graphics().p("AFQlWQHajCHaDGQHYDHDCHZQDDHajGHZQjHHZnaDCg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AE0lEQHWjOHeC6QHdC8DOHUQDNHWi6HdQi7HenVDNg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AEZkxQHQjZHjCuQHhCwDZHPQDZHRiuHhQiwHinQDZg");
	var mask_1_graphics_63 = new cjs.Graphics().p("AD+keQHLjkHmCiQHmClDkHJQDlHMijHlQikHnnLDkg");
	var mask_1_graphics_64 = new cjs.Graphics().p("ADjkJQHGjwHqCXQHqCZDvHDQDvHGiXHpQiYHrnFDvg");
	var mask_1_graphics_65 = new cjs.Graphics().p("ADJj0QG/j6HuCLQHtCMD6G+QD7HAiLHtQiMHum/D6g");
	var mask_1_graphics_66 = new cjs.Graphics().p("ACvjdQG5kFHxB/QHxCAEEG4QEGG5iAHwQh/Hxm5EFg");
	var mask_1_graphics_67 = new cjs.Graphics().p("ACWjGQGykPH0ByQH0B1EPGxQEQGzhzHzQh0H0myEQg");
	var mask_1_graphics_68 = new cjs.Graphics().p("AB9itQGrkaH3BmQH2BoEaGrQEaGshnH1QhnH3msEag");
	var mask_1_graphics_69 = new cjs.Graphics().p("ABkiUQGlkkH4BaQH5BcEkGjQElGmhbH3QhbH6mlEkg");
	var mask_1_graphics_70 = new cjs.Graphics().p("ABMh6QGdkuH7BOQH7BPEuGdQEvGehPH5QhOH8meEug");
	var mask_1_graphics_71 = new cjs.Graphics().p("AA0hfQGWk4H8BBQH9BEE4GVQE5GWhCH8QhDH9mWE4g");
	var mask_1_graphics_72 = new cjs.Graphics().p("AAchDQGPlCH+A1QH+A3FCGNQFCGPg2H9Qg2H/mOFCg");
	var mask_1_graphics_73 = new cjs.Graphics().p("AAFgmQGHlMH/ApQH/ArFMGFQFMGHgqH+QgpIAmHFLg");
	var mask_1_graphics_74 = new cjs.Graphics().p("AgQgIQF9lWIAAdQIAAeFVF9QFWF/gdH/QgeIAl+FWg");
	var mask_1_graphics_75 = new cjs.Graphics().p("AgmAVQF1ldIAAQQIBARFeF1QFfF2gRIAQgRIBl2Feg");
	var mask_1_graphics_76 = new cjs.Graphics().p("Ag8A0QFslmIBADQIBAGFnFsQFoFtgEIAQgFICltFng");
	var mask_1_graphics_77 = new cjs.Graphics().p("AhRBUQFjlvIBgJQIBgHFwFjQFwFlAIIAQAJIBllFwg");
	var mask_1_graphics_78 = new cjs.Graphics().p("AhmB1QFbl4IAgVQIBgUF4FbQF5FbAVIAQAUIBlbF5g");
	var mask_1_graphics_79 = new cjs.Graphics().p("Ah6CXQFRmAIAgiQIAggGAFRQGCFSAhH/QAhIAlSGBg");
	var mask_1_graphics_80 = new cjs.Graphics().p("AiOC5QFImIH/guQH/gtGIFIQGKFJAtH+QAuH/lJGJg");
	var mask_1_graphics_81 = new cjs.Graphics().p("AihDcQE+mQH+g7QH9g5GRE+QGRFAA6H8QA6H+k/GRg");
	var mask_1_graphics_82 = new cjs.Graphics().p("AizD/QE0mXH8hHQH8hFGYE0QGZE1BGH7QBHH9k2GZg");
	var mask_1_graphics_83 = new cjs.Graphics().p("AjGEkQErmfH6hTQH6hSGgEqQGgEsBTH5QBSH6krGgg");
	var mask_1_graphics_84 = new cjs.Graphics().p("AjXFJQEgmmH4hgQH4heGnEgQGoEhBeH4QBfH4khGng");
	var mask_1_graphics_85 = new cjs.Graphics().p("AjoFuQEWmtH1hrQH2hrGuEWQGuEXBrH1QBrH2kWGug");
	var mask_1_graphics_86 = new cjs.Graphics().p("Aj4GUQELmzHzh4QHzh2G0EMQG1ELB3HyQB4HzkNG1g");
	var mask_1_graphics_87 = new cjs.Graphics().p("AkIG7QECm7HuiDQHxiCG6EBQG8EBCDHvQCDHwkBG7g");
	var mask_1_graphics_88 = new cjs.Graphics().p("AkXHiQD3nBHriPQHtiOHBD2QHCD2CPHsQCPHtj3HBg");
	var mask_1_graphics_89 = new cjs.Graphics().p("AklIKQDsnHHnibQHqiaHGDsQHIDrCbHnQCbHqjsHHg");
	var mask_1_graphics_90 = new cjs.Graphics().p("AkyIzQDgnNHkinQHlimHMDhQHNDfCnHkQCnHmjgHMg");
	var mask_1_graphics_91 = new cjs.Graphics().p("Ak/JbQDVnSHfiyQHiiyHRDVQHTDVCyHgQCzHhjVHSg");
	var mask_1_graphics_92 = new cjs.Graphics().p("AlLKFQDKnXHai+QHdi+HXDKQHXDJC+HbQC/HdjKHXg");
	var mask_1_graphics_93 = new cjs.Graphics().p("AlXKuQC+ncHWjKQHYjIHcC+QHcC+DKHXQDKHYi/Hbg");
	var mask_1_graphics_94 = new cjs.Graphics().p("AliLYQCzngHRjWQHTjTHgCyQHhCzDUHRQDWHTizHgg");
	var mask_1_graphics_95 = new cjs.Graphics().p("AlsMDQCnnlHMjhQHOjeHkCmQHlCnDgHMQDgHOinHkg");
	var mask_1_graphics_96 = new cjs.Graphics().p("Al1MuQCbnpHGjsQHIjqHoCaQHpCcDrHHQDsHIibHog");
	var mask_1_graphics_97 = new cjs.Graphics().p("Al+NZQCQnsHAj3QHCj1HrCOQHtCQD2HAQD3HDiPHsg");
	var mask_1_graphics_98 = new cjs.Graphics().p("AmGOEQCEnvG6kCQG8kAHvCDQHvCDECG7QEBG8iDHvg");
	var mask_1_graphics_99 = new cjs.Graphics().p("AmNOwQB3nyG0kNQG2kKHyB2QHzB3ELG1QENG1h4Hzg");
	var mask_1_graphics_100 = new cjs.Graphics().p("AmUPcQBsn1GtkXQGvkVH0BqQH2BrEWGuQEXGvhrH1g");
	var mask_1_graphics_101 = new cjs.Graphics().p("AmZQIQBfn3GmkiQGokfH3BeQH4BfEhGnQEhGohfH3g");
	var mask_1_graphics_102 = new cjs.Graphics().p("AmeQ1QBSn6GfksQGikpH5BRQH6BTErGgQErGhhSH5g");
	var mask_1_graphics_103 = new cjs.Graphics().p("AmjRhQBHn7GXk2QGak0H7BGQH8BGE1GZQE2GZhHH8g");
	var mask_1_graphics_104 = new cjs.Graphics().p("AmmSOQA6n9GQlAQGSk+H9A6QH9A6E/GRQE/GSg6H9g");
	var mask_1_graphics_105 = new cjs.Graphics().p("AmpS7QAun/GIlJQGKlIH+AuQH/AuFIGIQFJGKguH/g");
	var mask_1_graphics_106 = new cjs.Graphics().p("AmrToQAhoAGBlSQGBlSH/AhQIAAiFSGBQFSGBghIAg");
	var mask_1_graphics_107 = new cjs.Graphics().p("AmtUVQAVoAF5lcQF5lbH/AVQIBAVFbF4QFcF6gVIAg");
	var mask_1_graphics_108 = new cjs.Graphics().p("AmuVCQAJoAFwllQFwlkIAAIQIBAJFkFvQFlFxgIIBg");
	var mask_1_graphics_109 = new cjs.Graphics().p("AhLH3QFoltIAgEQIBgEFtFoQFuFoAEIAMgmrAATQgEoAFnlug");
	var mask_1_graphics_110 = new cjs.Graphics().p("AhfH+QFfl2H/gQQIBgQF2FeQF2FfAQIAMgmpABQQgQoBFel2g");
	var mask_1_graphics_111 = new cjs.Graphics().p("AhzIFQFWl+H/gdQIAgdF+FVQF/FWAdIAMgmnACMQgdoAFVl/g");
	var mask_1_graphics_112 = new cjs.Graphics().p("AiFINQFMmGH+gqQH/gpGGFMQGHFMAqH/MgmjADIQgpn/FMmHg");
	var mask_1_graphics_113 = new cjs.Graphics().p("AiXIVQFCmOH+g2QH+g1GOFCQGPFDA1H9MgmdAEEQg1n+FCmPg");
	var mask_1_graphics_114 = new cjs.Graphics().p("AioIeQE5mWH7hCQH9hCGWE4QGXE5BCH9MgmWAE/QhCn9E4mWg");
	var mask_1_graphics_115 = new cjs.Graphics().p("Ai4InQEvmdH6hPQH7hNGdEtQGeEvBOH7MgmNAF6QhOn6Eumeg");
	var mask_1_graphics_116 = new cjs.Graphics().p("AjHIxQElmlH4hbQH5hZGkEjQGlElBbH4MgmDAG2Qhbn4Ekmlg");
	var mask_1_graphics_117 = new cjs.Graphics().p("AjVI7QEamsH2hnQH3hmGrEZQGsEbBnH2Mgl4AHxQhnn2Eamsg");
	var mask_1_graphics_118 = new cjs.Graphics().p("AjiJFQEQmyHzhzQH0hyGyEOQGzERBzHzMglrAIsQhzn0EPmzg");
	var mask_1_graphics_119 = new cjs.Graphics().p("AjuJQQEFm4Hwh/QHxh/G5EEQG5EGB/HwMgldAJmQh/nwEFm6g");
	var mask_1_graphics_120 = new cjs.Graphics().p("Aj5JcQD6m/HtiLQHuiKG+D5QHAD7CMHtMglOAKgQiLntD6nAg");
	var mask_1_graphics_121 = new cjs.Graphics().p("AkDJoQDwnFHoiXQHriWHEDuQHGDwCXHqMgk8ALZQiXnpDvnGg");
	var mask_1_graphics_122 = new cjs.Graphics().p("AkNJ1QDmnLHkijQHniiHKDjQHMDlCjHmMgkqAMTQijnmDjnLg");
	var mask_1_graphics_123 = new cjs.Graphics().p("AkVKBQDbnQHgiuQHiiuHQDYQHRDZCvHiMgkXANMQiuniDYnRg");
	var mask_1_graphics_124 = new cjs.Graphics().p("AkcKPQDPnWHci5QHei6HVDMQHWDPC6HdMgkBAOEQi6ndDNnWg");
	var mask_1_graphics_125 = new cjs.Graphics().p("AkiKdQDEnbHXjEQHZjGHaDCQHbDBDGHZMgjrAO8QjGnZDCnag");
	var mask_1_graphics_126 = new cjs.Graphics().p("AknKrQC4nfHSjQQHVjSHeC3QHgC2DRHUMgjTAPzQjRnUC2nfg");
	var mask_1_graphics_127 = new cjs.Graphics().p("AkrK5QCsnjHNjbQHPjdHjCrQHkCqDcHPMgi5AQpQjdnOCrnkg");
	var mask_1_graphics_128 = new cjs.Graphics().p("AkuLIQCgnnHIjmQHKjoHmCfQHoCeDoHKMgifARfQjonJCfnog");
	var mask_1_graphics_129 = new cjs.Graphics().p("AkwLYQCUnrHCjyQHEjzHqCUQHsCSDzHEMgiDASUQjznDCTnrg");
	var mask_1_graphics_130 = new cjs.Graphics().p("AkxLoQCInvG8j8QG+j+HuCHQHvCHD+G9MghmATJQj+m9CHnug");
	var mask_1_graphics_131 = new cjs.Graphics().p("AkxL4QB8nyG2kHQG4kJHwB8QHzB7EIG2MghIAT9QkIm3B7nxg");
	var mask_1_graphics_132 = new cjs.Graphics().p("AkwMIQBwn0GvkTQGxkSH0BvQH1BwETGvMggoAUwQkTmwBvn1g");
	var mask_1_graphics_133 = new cjs.Graphics().p("AkuMZQBkn3GokdQGrkdH2BjQH3BkEeGoMggHAVjQkemqBjn3g");
	var mask_1_graphics_134 = new cjs.Graphics().p("AkrMqQBYn5GhknQGjknH5BWQH6BYEnGhI/lWUQknmiBWn6g");
	var mask_1_graphics_135 = new cjs.Graphics().p("AknM8QBMn8GakxQGbkxH7BLQH8BKEyGbI/CXEQkymbBKn7g");
	var mask_1_graphics_136 = new cjs.Graphics().p("AkiNOQBAn9GSk8QGUk7H8A/QH+A+E7GTI+dX0Qk8mTA+n9g");
	var mask_1_graphics_137 = new cjs.Graphics().p("AkcNgQAzn/GLlFQGMlEH+AyQH/AyFFGLI94YjQlFmMAxn+g");
	var mask_1_graphics_138 = new cjs.Graphics().p("AkVNyQAnn/GDlPQGElOH/AmQH/AlFPGDI9SZSQlOmEAloAg");
	var mask_1_graphics_139 = new cjs.Graphics().p("AkNOFQAboAF6lYQF8lYH/AaQIBAZFYF6I8qZ/QlXl8AYoAg");
	var mask_1_graphics_140 = new cjs.Graphics().p("AkDOYQANoBFylhQF0lgIAAMQIBANFhFyI8BarQlglzAMoBg");
	var mask_1_graphics_141 = new cjs.Graphics().p("Aj5OsQABoBFplqQFrlqIAAAQIBABFrFpI7YbWQlplrAAoAg");
	var mask_1_graphics_142 = new cjs.Graphics().p("AjuO/QgLoBFglyQFilzIAgMQIBgMFzFhI6sb/QlylhgNoBg");
	var mask_1_graphics_143 = new cjs.Graphics().p("AjiPTQgYoAFXl8QFZl6IAgZQIBgZF7FYI6AcpQl7lZgZoAg");
	var mask_1_graphics_144 = new cjs.Graphics().p("AjVPnQgkoAFOmDQFPmDH/glQIAglGEFPI5UdQQmClQgmn/g");
	var mask_1_graphics_145 = new cjs.Graphics().p("AjHP7Qgwn+FEmMQFGmLH+gxQH+gyGMFGI4ld2QmLlFgyn/g");
	var mask_1_graphics_146 = new cjs.Graphics().p("Ai4QQQg9n+E7mTQE8mSH8g+QH+g+GTE8I32ecQmSk8g/n9g");
	var mask_1_graphics_147 = new cjs.Graphics().p("AioQlQhJn8ExmbQEymaH7hKQH7hLGcEyI3HfBQmakyhLn7g");
	var mask_1_graphics_148 = new cjs.Graphics().p("AiXQ5QhWn5EnmiQEomiH5hWQH6hXGiEoI2WfkQmhkohXn6g");
	var mask_1_graphics_149 = new cjs.Graphics().p("AiFRPQhin4EcmpQEempH3hiQH4hjGpEdMgVlAgGQmokehjn2g");
	var mask_1_graphics_150 = new cjs.Graphics().p("AhzRkQhun1ESmwQEUmwH0hvQH1hvGwEUMgUyAgnQmvkUhwn0g");
	var mask_1_graphics_151 = new cjs.Graphics().p("AhfR5Qh6nyEHm2QEJm3Hxh7QHzh7G3EJMgUAAhGQm2kIh7nyg");
	var mask_1_graphics_152 = new cjs.Graphics().p("AhLSPQiGnvD9m9QD+m9HuiHQHwiHG9D+MgTMAhlQm9j+iHnug");
	var mask_1_graphics_153 = new cjs.Graphics().p("Ag1SkQiSnrDynDQDznDHriTQHriTHEDzMgSXAiCQnDjziTnrg");
	var mask_1_graphics_154 = new cjs.Graphics().p("AgfS6QienoDnnIQDpnJHmifQHoifHJDpMgRhAidQnJjoifnng");
	var mask_1_graphics_155 = new cjs.Graphics().p("AgITQQiqnkDcnOQDenOHiiqQHkirHPDdMgQsAi4QnOjdirnjg");
	var mask_1_graphics_156 = new cjs.Graphics().p("AAPTmQi0ngDQnTQDSnTHfi2QHfi3HUDSMgP1AjRQnUjRi3nfg");
	var mask_1_graphics_157 = new cjs.Graphics().p("AAoT8QjAnbDFnZQDHnYHajBQHbjDHYDHMgO+AjpQnYjGjDnag");
	var mask_1_graphics_158 = new cjs.Graphics().p("ABCUSQjMnWC6ndQC7ndHVjNQHWjOHdC7MgOGAkAQndi7jOnVg");
	var mask_1_graphics_159 = new cjs.Graphics().p("ABcUoQjXnRCunhQCwniHPjYQHSjZHhCvMgNOAkVQnhivjanQg");
	var mask_1_graphics_160 = new cjs.Graphics().p("AB4U+QjjnMCinlQCknlHLjkQHLjkHmCjMgMVAkpQnmijjknLg");
	var mask_1_graphics_161 = new cjs.Graphics().p("ACUVUQjunGCXnpQCXnpHFjvQHGjvHqCXMgLcAk8QnqiXjvnGg");
	var mask_1_graphics_162 = new cjs.Graphics().p("ACwVrQj4nBCKnsQCMntG/j6QHAj6HtCLMgKiAlNQntiLj7m/g");
	var mask_1_graphics_163 = new cjs.Graphics().p("ADOWBQkDm6B+nwQCAnwG5kFQG5kFHxCAMgJoAlcQnxh/kFm5g");
	var mask_1_graphics_164 = new cjs.Graphics().p("ADsWXQkOm0BznzQBznyGykQQG0kPHzBzMgIuAlrQnzh0kQmyg");
	var mask_1_graphics_165 = new cjs.Graphics().p("AELWtQkYmtBmn1QBnn3GskZQGtkaH2BnMgH0Al4Qn2hnkamsg");
	var mask_1_graphics_166 = new cjs.Graphics().p("AErXDQkkmmBbn4QBbn5GlkjQGlkkH5BbMgG4AmDQn5hbkkmlg");
	var mask_1_graphics_167 = new cjs.Graphics().p("AFLXZQkumfBPn6QBPn7GdktQGfkuH6BOMgF9AmOQn6hPkvmeg");
	var mask_1_graphics_168 = new cjs.Graphics().p("AFsXvQk4mXBCn8QBDn9GWk3QGXk4H8BCMgFBAmWQn8hDk5mWg");
	var mask_1_graphics_169 = new cjs.Graphics().p("AGNYFQlBmQA2n9QA2n+GOlBQGQlCH9A2MgEFAmcQn+g2lDmOg");
	var mask_1_graphics_170 = new cjs.Graphics().p("AGvYbQlLmIAqn+QAqoAGGlKQGHlMH/AqMgDKAmiQn+gqlNmGg");
	var mask_1_graphics_171 = new cjs.Graphics().p("AHSYwQlUl/Adn/QAdoBF+lTQGAlWH/AeMgCOAmmQn/gdlWl/g");
	var mask_1_graphics_172 = new cjs.Graphics().p("AH1ZGQldl3AQoAQARoBF2ldQF3leIAARMgBSAmpQoAgRlfl2g");
	var mask_1_graphics_173 = new cjs.Graphics().p("AIZZbQlnlvAEn/QAFoBFtlmQFuloIBAEMgAWAmrQoAgFloltg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_1_graphics_44,x:204.5,y:199.4}).wait(1).to({graphics:mask_1_graphics_45,x:204.5,y:199.4}).wait(1).to({graphics:mask_1_graphics_46,x:204.5,y:199.3}).wait(1).to({graphics:mask_1_graphics_47,x:204.5,y:199.2}).wait(1).to({graphics:mask_1_graphics_48,x:204.5,y:199.1}).wait(1).to({graphics:mask_1_graphics_49,x:204.5,y:199}).wait(1).to({graphics:mask_1_graphics_50,x:204.5,y:198.8}).wait(1).to({graphics:mask_1_graphics_51,x:204.5,y:198.5}).wait(1).to({graphics:mask_1_graphics_52,x:204.6,y:198.3}).wait(1).to({graphics:mask_1_graphics_53,x:204.6,y:198}).wait(1).to({graphics:mask_1_graphics_54,x:204.6,y:197.6}).wait(1).to({graphics:mask_1_graphics_55,x:204.6,y:197.2}).wait(1).to({graphics:mask_1_graphics_56,x:204.6,y:196.8}).wait(1).to({graphics:mask_1_graphics_57,x:204.6,y:196.4}).wait(1).to({graphics:mask_1_graphics_58,x:204.6,y:195.9}).wait(1).to({graphics:mask_1_graphics_59,x:204.7,y:195.4}).wait(1).to({graphics:mask_1_graphics_60,x:204.7,y:194.8}).wait(1).to({graphics:mask_1_graphics_61,x:204.7,y:194.2}).wait(1).to({graphics:mask_1_graphics_62,x:204.6,y:193.6}).wait(1).to({graphics:mask_1_graphics_63,x:204.6,y:193}).wait(1).to({graphics:mask_1_graphics_64,x:204.6,y:192.3}).wait(1).to({graphics:mask_1_graphics_65,x:204.6,y:191.6}).wait(1).to({graphics:mask_1_graphics_66,x:204.6,y:190.8}).wait(1).to({graphics:mask_1_graphics_67,x:204.6,y:190.1}).wait(1).to({graphics:mask_1_graphics_68,x:204.6,y:189.2}).wait(1).to({graphics:mask_1_graphics_69,x:204.6,y:188.4}).wait(1).to({graphics:mask_1_graphics_70,x:204.5,y:187.5}).wait(1).to({graphics:mask_1_graphics_71,x:204.5,y:186.6}).wait(1).to({graphics:mask_1_graphics_72,x:204.5,y:185.7}).wait(1).to({graphics:mask_1_graphics_73,x:204.5,y:184.7}).wait(1).to({graphics:mask_1_graphics_74,x:204.5,y:183.8}).wait(1).to({graphics:mask_1_graphics_75,x:204.5,y:182.7}).wait(1).to({graphics:mask_1_graphics_76,x:204.5,y:181.7}).wait(1).to({graphics:mask_1_graphics_77,x:204.5,y:180.6}).wait(1).to({graphics:mask_1_graphics_78,x:204.5,y:179.6}).wait(1).to({graphics:mask_1_graphics_79,x:204.5,y:178.4}).wait(1).to({graphics:mask_1_graphics_80,x:204.5,y:177.3}).wait(1).to({graphics:mask_1_graphics_81,x:204.5,y:176.1}).wait(1).to({graphics:mask_1_graphics_82,x:204.5,y:175}).wait(1).to({graphics:mask_1_graphics_83,x:204.5,y:173.7}).wait(1).to({graphics:mask_1_graphics_84,x:204.6,y:172.5}).wait(1).to({graphics:mask_1_graphics_85,x:204.6,y:171.3}).wait(1).to({graphics:mask_1_graphics_86,x:204.6,y:170}).wait(1).to({graphics:mask_1_graphics_87,x:204.6,y:168.7}).wait(1).to({graphics:mask_1_graphics_88,x:204.6,y:167.4}).wait(1).to({graphics:mask_1_graphics_89,x:204.6,y:166.1}).wait(1).to({graphics:mask_1_graphics_90,x:204.7,y:164.7}).wait(1).to({graphics:mask_1_graphics_91,x:204.7,y:163.4}).wait(1).to({graphics:mask_1_graphics_92,x:204.7,y:162}).wait(1).to({graphics:mask_1_graphics_93,x:204.7,y:160.6}).wait(1).to({graphics:mask_1_graphics_94,x:204.7,y:159.2}).wait(1).to({graphics:mask_1_graphics_95,x:204.7,y:157.8}).wait(1).to({graphics:mask_1_graphics_96,x:204.6,y:156.4}).wait(1).to({graphics:mask_1_graphics_97,x:204.6,y:155}).wait(1).to({graphics:mask_1_graphics_98,x:204.6,y:153.5}).wait(1).to({graphics:mask_1_graphics_99,x:204.6,y:152.1}).wait(1).to({graphics:mask_1_graphics_100,x:204.6,y:150.6}).wait(1).to({graphics:mask_1_graphics_101,x:204.6,y:149.1}).wait(1).to({graphics:mask_1_graphics_102,x:204.6,y:147.6}).wait(1).to({graphics:mask_1_graphics_103,x:204.5,y:146.2}).wait(1).to({graphics:mask_1_graphics_104,x:204.5,y:144.7}).wait(1).to({graphics:mask_1_graphics_105,x:204.5,y:143.2}).wait(1).to({graphics:mask_1_graphics_106,x:204.5,y:141.7}).wait(1).to({graphics:mask_1_graphics_107,x:204.5,y:140.2}).wait(1).to({graphics:mask_1_graphics_108,x:204.5,y:138.7}).wait(1).to({graphics:mask_1_graphics_109,x:204.5,y:138.1}).wait(1).to({graphics:mask_1_graphics_110,x:204.4,y:139.7}).wait(1).to({graphics:mask_1_graphics_111,x:204.4,y:141.2}).wait(1).to({graphics:mask_1_graphics_112,x:204.3,y:142.7}).wait(1).to({graphics:mask_1_graphics_113,x:204.1,y:144.2}).wait(1).to({graphics:mask_1_graphics_114,x:204,y:145.7}).wait(1).to({graphics:mask_1_graphics_115,x:203.7,y:147.1}).wait(1).to({graphics:mask_1_graphics_116,x:203.5,y:148.6}).wait(1).to({graphics:mask_1_graphics_117,x:203.2,y:150.1}).wait(1).to({graphics:mask_1_graphics_118,x:202.9,y:151.6}).wait(1).to({graphics:mask_1_graphics_119,x:202.5,y:153}).wait(1).to({graphics:mask_1_graphics_120,x:202.2,y:154.5}).wait(1).to({graphics:mask_1_graphics_121,x:201.7,y:155.9}).wait(1).to({graphics:mask_1_graphics_122,x:201.3,y:157.4}).wait(1).to({graphics:mask_1_graphics_123,x:200.8,y:158.8}).wait(1).to({graphics:mask_1_graphics_124,x:200.2,y:160.2}).wait(1).to({graphics:mask_1_graphics_125,x:199.7,y:161.6}).wait(1).to({graphics:mask_1_graphics_126,x:199.1,y:163}).wait(1).to({graphics:mask_1_graphics_127,x:198.4,y:164.3}).wait(1).to({graphics:mask_1_graphics_128,x:197.8,y:165.7}).wait(1).to({graphics:mask_1_graphics_129,x:197.1,y:167}).wait(1).to({graphics:mask_1_graphics_130,x:196.4,y:168.3}).wait(1).to({graphics:mask_1_graphics_131,x:195.6,y:169.6}).wait(1).to({graphics:mask_1_graphics_132,x:194.8,y:170.9}).wait(1).to({graphics:mask_1_graphics_133,x:194,y:172.2}).wait(1).to({graphics:mask_1_graphics_134,x:193.1,y:173.4}).wait(1).to({graphics:mask_1_graphics_135,x:192.3,y:174.6}).wait(1).to({graphics:mask_1_graphics_136,x:191.3,y:175.8}).wait(1).to({graphics:mask_1_graphics_137,x:190.4,y:177}).wait(1).to({graphics:mask_1_graphics_138,x:189.4,y:178.2}).wait(1).to({graphics:mask_1_graphics_139,x:188.4,y:179.3}).wait(1).to({graphics:mask_1_graphics_140,x:187.4,y:180.4}).wait(1).to({graphics:mask_1_graphics_141,x:186.4,y:181.5}).wait(1).to({graphics:mask_1_graphics_142,x:185.3,y:182.5}).wait(1).to({graphics:mask_1_graphics_143,x:184.2,y:183.6}).wait(1).to({graphics:mask_1_graphics_144,x:183.1,y:184.6}).wait(1).to({graphics:mask_1_graphics_145,x:181.9,y:185.5}).wait(1).to({graphics:mask_1_graphics_146,x:180.7,y:186.5}).wait(1).to({graphics:mask_1_graphics_147,x:179.5,y:187.4}).wait(1).to({graphics:mask_1_graphics_148,x:178.3,y:188.3}).wait(1).to({graphics:mask_1_graphics_149,x:177.1,y:189.1}).wait(1).to({graphics:mask_1_graphics_150,x:175.8,y:190}).wait(1).to({graphics:mask_1_graphics_151,x:174.6,y:190.7}).wait(1).to({graphics:mask_1_graphics_152,x:173.3,y:191.5}).wait(1).to({graphics:mask_1_graphics_153,x:171.9,y:192.2}).wait(1).to({graphics:mask_1_graphics_154,x:170.6,y:192.9}).wait(1).to({graphics:mask_1_graphics_155,x:169.3,y:193.6}).wait(1).to({graphics:mask_1_graphics_156,x:167.9,y:194.2}).wait(1).to({graphics:mask_1_graphics_157,x:166.5,y:194.8}).wait(1).to({graphics:mask_1_graphics_158,x:165.1,y:195.4}).wait(1).to({graphics:mask_1_graphics_159,x:163.7,y:195.9}).wait(1).to({graphics:mask_1_graphics_160,x:162.3,y:196.4}).wait(1).to({graphics:mask_1_graphics_161,x:160.9,y:196.9}).wait(1).to({graphics:mask_1_graphics_162,x:159.4,y:197.3}).wait(1).to({graphics:mask_1_graphics_163,x:158,y:197.7}).wait(1).to({graphics:mask_1_graphics_164,x:156.5,y:198.1}).wait(1).to({graphics:mask_1_graphics_165,x:155.1,y:198.4}).wait(1).to({graphics:mask_1_graphics_166,x:153.6,y:198.7}).wait(1).to({graphics:mask_1_graphics_167,x:152.1,y:199}).wait(1).to({graphics:mask_1_graphics_168,x:150.6,y:199.2}).wait(1).to({graphics:mask_1_graphics_169,x:149.1,y:199.3}).wait(1).to({graphics:mask_1_graphics_170,x:147.6,y:199.5}).wait(1).to({graphics:mask_1_graphics_171,x:146.1,y:199.6}).wait(1).to({graphics:mask_1_graphics_172,x:144.6,y:199.7}).wait(1).to({graphics:mask_1_graphics_173,x:143.1,y:199.7}).wait(114));

	// Layer 14
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,0,1).p("ABRLgQgbAAgbgCQkMgSjEjDQjXjYAAkxQAAkwDXjYQDYjXEwAAQExAADXDXQAbAbAXAc");
	this.shape_2.setTransform(276.3,275);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(44).to({_off:false},0).wait(243));

	// Layer 13 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_9 = new cjs.Graphics().p("AJmewQn7hPktmfIfQ2xQEuGehPH7QhRH6meEuQlIDvmBAAQhmAAhpgRg");
	var mask_2_graphics_10 = new cjs.Graphics().p("AKGe1Qn9hCk3mXIep3kQE4GWhCH8QhDH9mWE4QlPECmVAAQhVAAhZgMg");
	var mask_2_graphics_11 = new cjs.Graphics().p("AKme5Qn+g1lCmOIeB4XQFDGNg1H+Qg2H+mNFDQlXEWmoAAQhFAAhIgIg");
	var mask_2_graphics_12 = new cjs.Graphics().p("ALGe8Qn/golNmFIdY5IQFNGEgnH/QgoIAmGFMQlcEqm8AAQg1AAg3gEg");
	var mask_2_graphics_13 = new cjs.Graphics().p("ALne+QoBgalWl9Ict54QFXF7gZIAQgcIAl8FXQliE/nSAAQgkAAgkgCg");
	var mask_2_graphics_14 = new cjs.Graphics().p("AMHfAQoBgNlgl0IcB6oQFhFzgMIAQgOIBl0FhQlmFUnpAAIgkAAg");
	var mask_2_graphics_15 = new cjs.Graphics().p("AhEZWIbV7WQFqFpABIBQgBIBlpFqQlrFroAAAIAAAAQoBAAlqlqg");
	var mask_2_graphics_16 = new cjs.Graphics().p("AgtZtIan8DQF0FfAOIBQAMIBlgFzQlhF0oAAOIgmAAQnpAAlllTg");
	var mask_2_graphics_17 = new cjs.Graphics().p("AgVaCIZ38uQF9FWAbH/QAaIBlWF8QlXF+oAAaQglACglAAQnSAAlgk+g");
	var mask_2_graphics_18 = new cjs.Graphics().p("AACaYIZI9aQGFFMApH/QAnIAlMGFQlNGGn/AoQg3AEg2AAQm8ABlckpg");
	var mask_2_graphics_19 = new cjs.Graphics().p("AAbasIYW+CQGOFBA2H+QA1H+lDGOQlCGPn+A1QhIAIhHAAQmoAAlVkVg");
	var mask_2_graphics_20 = new cjs.Graphics().p("AA0bAIXj+rQGXE4BDH8QBCH8k4GXQk4GWn8BDQhaAMhWAAQmUAAlPkBg");
	var mask_2_graphics_21 = new cjs.Graphics().p("ABNbTIWw/RQGfEsBQH7QBPH7ktGeQktGen6BQQhqARhnAAQmBAAlIjug");
	var mask_2_graphics_22 = new cjs.Graphics().p("ABoblIV7/2QGmEiBeH4QBcH4kiGmQkjGnn3BdQh7AWh2AAQlvAAk/jcg");
	var mask_2_graphics_23 = new cjs.Graphics().p("ACCb3MAVGggaQGtEYBrH0QBqH2kYGtQkXGun1BqQiKAeiFAAQleAAk3jLg");
	var mask_2_graphics_24 = new cjs.Graphics().p("ACdcIMAUPgg8QG1EMB4HxQB2HzkMG1QkMG1nyB3QiaAliTAAQlNAAkui6g");
	var mask_2_graphics_25 = new cjs.Graphics().p("AC5cZMATYgheQG7EBCFHuQCDHwkAG7QkBG8nvCEQioAtijAAQk8AAkkipg");
	var mask_2_graphics_26 = new cjs.Graphics().p("ADVcoMASfgh9QHCD1CSHrQCQHsj1HCQj1HCnrCRQi3A2ixAAQksAAkaiag");
	var mask_2_graphics_27 = new cjs.Graphics().p("ADxc3MARngibQHIDpCfHnQCcHojpHIQjpHJnnCdQjFBAjAAAQkcAAkQiLg");
	var mask_2_graphics_28 = new cjs.Graphics().p("AEOdFMAQtgi3QHODdCrHiQCqHkjdHOQjeHPnjCqQjSBKjPAAQkMAAkFh9g");
	var mask_2_graphics_29 = new cjs.Graphics().p("AErdTMAPzgjTQHTDRC4HeQC2HfjRHUQjRHUneC3QjgBVjeAAQj8AAj6hvg");
	var mask_2_graphics_30 = new cjs.Graphics().p("AFJdgMAO3gjtQHZDFDEHZQDDHbjFHYQjFHanaDDQjsBhjsAAQjuAAjthig");
	var mask_2_graphics_31 = new cjs.Graphics().p("AFndsMAN7gkFQHeC5DQHTQDPHWi4HdQi5HfnUDPQj5Buj7AAQjeABjhhXg");
	var mask_2_graphics_32 = new cjs.Graphics().p("AGFd3MAM/gkbQHjCsDcHOQDbHQisHiQisHjnPDcQkEB7kKAAQjQAAjUhLg");
	var mask_2_graphics_33 = new cjs.Graphics().p("AGkeCMAMBgkwQHnCfDpHIQDnHKifHnQigHnnJDoQkPCJkaAAQjBAAjGhAg");
	var mask_2_graphics_34 = new cjs.Graphics().p("AHCeLMALFglDQHrCTD0HCQDzHEiTHqQiSHsnDDzQkaCYkpAAQizAAi5g3g");
	var mask_2_graphics_35 = new cjs.Graphics().p("AHieUMAKGglUQHvCGEAG7QD+G9iGHuQiGHwm8D+QkkCok5AAQikAAiqgug");
	var mask_2_graphics_36 = new cjs.Graphics().p("AIBecMAJIglkQHyB5ELG0QEKG3h5HxQh5Hzm1EKQktC4lKAAQiWAAibgmg");
	var mask_2_graphics_37 = new cjs.Graphics().p("AIhekMAIJglzQH1BsEWGtQEWGwhsH0QhsH2muEVQk3DJlbAAQiHAAiLgeg");
	var mask_2_graphics_38 = new cjs.Graphics().p("AJAeqMAHKgl/QH4BfEiGlQEgGphfH3QheH4mnEhQk/DaltAAQh3AAh9gYg");
	var mask_2_graphics_39 = new cjs.Graphics().p("AJgewMAGLgmLQH6BSEsGeQEsGhhSH5QhSH7mfErQlHDtl/AAQhoAAhsgSg");
	var mask_2_graphics_40 = new cjs.Graphics().p("AKAe1MAFLgmUQH8BEE3GYQE2GXhEH8QhEH8mYE2QlOD/mSAAQhYAAhcgMg");
	var mask_2_graphics_41 = new cjs.Graphics().p("AKhe5MAEKgmcQH+A3FCGPQFAGQg3H9Qg3H+mPFBQlVESmmAAQhIAAhKgIg");
	var mask_2_graphics_42 = new cjs.Graphics().p("ALBe8MADKgmiQH/AqFMGHQFLGHgqH+QgqH/mGFLQlcEnm5AAQg4AAg5gFg");
	var mask_2_graphics_43 = new cjs.Graphics().p("ALhe/MACKgmnQIAAdFWF+QFVF+gcH/QgdIAl+FVQlhE8nPAAQgmAAgogCg");
	var mask_2_graphics_44 = new cjs.Graphics().p("AMCfAMABKgmpQIAAPFgF1QFfF1gQIAQgPIAl0FfQlnFSnlAAIgqgBg");
	var mask_2_graphics_45 = new cjs.Graphics().p("ALAnAQH+grGIFLQGHFLArH+QAqH/lKGHQlMGIn/Aqg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_2_graphics_9,x:204.5,y:198.5}).wait(1).to({graphics:mask_2_graphics_10,x:204.5,y:198.5}).wait(1).to({graphics:mask_2_graphics_11,x:204.5,y:198.5}).wait(1).to({graphics:mask_2_graphics_12,x:204.5,y:198.4}).wait(1).to({graphics:mask_2_graphics_13,x:204.4,y:198.4}).wait(1).to({graphics:mask_2_graphics_14,x:204.4,y:198.4}).wait(1).to({graphics:mask_2_graphics_15,x:204.4,y:198.4}).wait(1).to({graphics:mask_2_graphics_16,x:204.4,y:198.4}).wait(1).to({graphics:mask_2_graphics_17,x:204.4,y:198.4}).wait(1).to({graphics:mask_2_graphics_18,x:204.4,y:198.4}).wait(1).to({graphics:mask_2_graphics_19,x:204.5,y:198.5}).wait(1).to({graphics:mask_2_graphics_20,x:204.5,y:198.5}).wait(1).to({graphics:mask_2_graphics_21,x:204.5,y:198.5}).wait(1).to({graphics:mask_2_graphics_22,x:204.5,y:198.5}).wait(1).to({graphics:mask_2_graphics_23,x:204.5,y:198.6}).wait(1).to({graphics:mask_2_graphics_24,x:204.5,y:198.6}).wait(1).to({graphics:mask_2_graphics_25,x:204.5,y:198.6}).wait(1).to({graphics:mask_2_graphics_26,x:204.6,y:198.6}).wait(1).to({graphics:mask_2_graphics_27,x:204.6,y:198.6}).wait(1).to({graphics:mask_2_graphics_28,x:204.6,y:198.6}).wait(1).to({graphics:mask_2_graphics_29,x:204.6,y:198.6}).wait(1).to({graphics:mask_2_graphics_30,x:204.6,y:198.6}).wait(1).to({graphics:mask_2_graphics_31,x:204.6,y:198.6}).wait(1).to({graphics:mask_2_graphics_32,x:204.6,y:198.6}).wait(1).to({graphics:mask_2_graphics_33,x:204.6,y:198.6}).wait(1).to({graphics:mask_2_graphics_34,x:204.5,y:198.6}).wait(1).to({graphics:mask_2_graphics_35,x:204.5,y:198.6}).wait(1).to({graphics:mask_2_graphics_36,x:204.5,y:198.6}).wait(1).to({graphics:mask_2_graphics_37,x:204.5,y:198.6}).wait(1).to({graphics:mask_2_graphics_38,x:204.5,y:198.6}).wait(1).to({graphics:mask_2_graphics_39,x:204.5,y:198.6}).wait(1).to({graphics:mask_2_graphics_40,x:204.4,y:198.5}).wait(1).to({graphics:mask_2_graphics_41,x:204.4,y:198.5}).wait(1).to({graphics:mask_2_graphics_42,x:204.4,y:198.5}).wait(1).to({graphics:mask_2_graphics_43,x:204.4,y:198.5}).wait(1).to({graphics:mask_2_graphics_44,x:204.4,y:198.5}).wait(1).to({graphics:mask_2_graphics_45,x:204.5,y:201.7}).wait(242));

	// Layer 12
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("ApbH3Qgxh9AAiRQAAkwDXjYQDYjXEwAAQExAADXDXQAbAbAXAc");
	this.shape_3.setTransform(276.3,251.7);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(9).to({_off:false},0).wait(278));

	// Base
	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(275,275);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(287));

	// Background
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F59E9E").ss(3,1,1).p("AMvQ5I5dAAMAAAghxIZdAAg");
	this.shape_4.setTransform(275,275,3.373,2.543);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_5.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(287));

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