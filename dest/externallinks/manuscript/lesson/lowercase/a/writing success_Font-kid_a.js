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
	this.shape.graphics.f("#FFFFFF").s().p("AqDKdQj0j2gglHQgEgvAAgxQAAgyAEgxQAflJDwjwQETkRGKABQFKAAD3C+IAAgkQABijCjAAQCiAAAACjIAAYeQAACjiiAAQijAAgBijIAAgiQkCDMk2AAQmIAAkZkZgAmfm5Qi0C2gBEDQABD9C0C3QC1C2D/AAQDIAAClhzQCkh0BFi3IAAmgQhDizimhzQinh2jGAAQj/AAi1C3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.4,-95,184.8,190);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0,guide:{path:[53.1,2.9,50.4,-4.5,49.8,-6.5,48.5,-10.4,46.4,-14.3,38.1,-28.9,21.4,-34.5,4.7,-40,-10.7,-33,-26.1,-26,-31.2,-10.7,-32.6,-6.5,-33,-2.3]}},59).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ApFKwQnMjjilnkMAkngMbQClHljiHLQjkHMnlCkQjMBFjHAAQkTAAkKiDg");
	var mask_graphics_1 = new cjs.Graphics().p("AobLjQnWjOi7ndMAkAgOFQC7HdjNHVQjPHWncC6QjkBZjhAAQj4AAj1hrg");
	var mask_graphics_2 = new cjs.Graphics().p("AnxMTQngi4jQnUMAjUgPuQDRHUi3HeQi5HenUDQQj5Bvj7AAQjeAAjfhVg");
	var mask_graphics_3 = new cjs.Graphics().p("AnINAQnniijmnKMAikgRVQDmHKihHmQijHmnKDmQkNCHkWAAQjEAAjIhCg");
	var mask_graphics_4 = new cjs.Graphics().p("AmfNqQnuiMj6m/MAhugS5QD7G/iLHtQiMHtm+D7QkhChkxAAQiqAAiwgxg");
	var mask_graphics_5 = new cjs.Graphics().p("Al2OQQn0h0kPmzMAg1gUbQEPGzh0HzQh1HzmzEOQkxC+lPAAQiPAAiWgjg");
	var mask_graphics_6 = new cjs.Graphics().p("AlNO0Qn5hdkjmmIf217QEjGmhcH5QhfH3mlEiQlBDdltAAQh1AAh6gXg");
	var mask_graphics_7 = new cjs.Graphics().p("AkmPVQn8hGk2mZIe03WQE1GYhFH8QhHH7mYE1QlND9mPAAQhZAAhegMg");
	var mask_graphics_8 = new cjs.Graphics().p("Aj/PyQn/gvlImKIdt4vQFIGJguH/QgvH+mKFIQlZEfmxAAQg9AAhAgFg");
	var mask_graphics_9 = new cjs.Graphics().p("AjYQLQoBgXlal6Ici6FQFaF6gWIAQgYH/l6FaQljFEnXAAIg/gBg");
	var mask_graphics_10 = new cjs.Graphics().p("AwfK4IbT7YQFrFqABIBQAAIAlqFqQlqFrn/ABIgCAAQoAAAlqlpg");
	var mask_graphics_11 = new cjs.Graphics().p("AwLLyIaB8mQF7FZAZIAQAXIAlYF6QlZF8n/AYQghACgiAAQnWAAljlDg");
	var mask_graphics_12 = new cjs.Graphics().p("Av1MqIYr9xQGKFIAxH+QAuH+lHGKQlHGLn9AvQhBAHg/AAQmxAAlYkeg");
	var mask_graphics_13 = new cjs.Graphics().p("AvfNfIXS+3QGZE0BHH8QBGH7k0GZQk1GZn6BHQhfANhcAAQmOAAlMj6g");
	var mask_graphics_14 = new cjs.Graphics().p("AvJOQIV2/5QGnEhBfH4QBdH3khGnQkiGnn2BeQh8AXh3AAQluAAk/jag");
	var mask_graphics_15 = new cjs.Graphics().p("AuxO+MAUWgg3QG0EOB2HyQB0HzkNGzQkOG0nyB2QiXAjiSAAQlPAAkvi8g");
	var mask_graphics_16 = new cjs.Graphics().p("AuZPpMAS0ghxQHAD6CNHsQCLHtj5G/Qj6HAnsCMQixAzisAAQkxAAkfigg");
	var mask_graphics_17 = new cjs.Graphics().p("AuAQRMARQgimQHKDkCkHmQCiHmjlHKQjlHLnlCjQjKBDjFAAQkWAAkMiFg");
	var mask_graphics_18 = new cjs.Graphics().p("AtmQ1MAPpgjXQHUDQC6HeQC4HfjQHTQjPHVneC4QjgBYjgAAQj6AAj4hug");
	var mask_graphics_19 = new cjs.Graphics().p("AtMRWMAOAgkDQHdC6DQHVQDNHWi5HcQi6HenUDPQj3Btj6AAQjgAAjihYg");
	var mask_graphics_20 = new cjs.Graphics().p("AsxRzMAMWgkpQHkCjDlHLQDjHMijHkQikHnnKDjQkLCFkVAAQjGAAjLhEg");
	var mask_graphics_21 = new cjs.Graphics().p("AsWSMMAKpglKQHsCND6G/QD4HCiNHrQiNHtnAD4QkeCfkwAAQitAAiygzg");
	var mask_graphics_22 = new cjs.Graphics().p("Ar6SiMAI7glnQHyB2EOG0QEMG1h2HxQh3HzmzENQkvC7lNAAQiTAAiYgkg");
	var mask_graphics_23 = new cjs.Graphics().p("AreS0MAHMgl/QH3BfEhGnQEgGphfH2QhfH4mnEgQk+DalsAAQh4AAh9gYg");
	var mask_graphics_24 = new cjs.Graphics().p("ArBTDMAFbgmSQH7BIE0GZQE0GbhIH6QhIH8maEzQlLD6mNAAQhcAAhggNg");
	var mask_graphics_25 = new cjs.Graphics().p("AqlTNMADrgmfQH9AwFHGLQFGGMgxH9QgwH/mLFGQlXEcmwAAQhAAAhCgGg");
	var mask_graphics_26 = new cjs.Graphics().p("ApuTTMAB5gmnQH/AZFYF7QFYF9gZH+QgZIBl7FYQliFBnVAAQgiAAgigCg");
	var mask_graphics_27 = new cjs.Graphics().p("Ao1TWMAAHgmrQIBACFoFrQFpFtgBH+QgCIBlrFpQlpFpn+AAIgEAAg");
	var mask_graphics_28 = new cjs.Graphics().p("ApnzTQIAgWF5FaQF6FcAWH/QAWIAlbF5QlbF6n/AWg");
	var mask_graphics_29 = new cjs.Graphics().p("AqgzNQH/guGIFJQGJFKAuH+QAtH+lIGIQlKGKn9Aug");
	var mask_graphics_30 = new cjs.Graphics().p("Aq+zDQH8hFGYE2QGXE3BFH8QBFH7k2GXQk3GZn7BFg");
	var mask_graphics_31 = new cjs.Graphics().p("Aray1QH4hdGlEjQGmElBcH3QBcH4kjGlQkkGmn3Bdg");
	var mask_graphics_32 = new cjs.Graphics().p("Ar2ykQHzhzGyEPQGzERBzHzQBzHzkPGyQkQGznzBzg");
	var mask_graphics_33 = new cjs.Graphics().p("AsSyOQHuiLG+D7QG+D9CKHtQCKHtj7G+Qj8G/nsCKg");
	var mask_graphics_34 = new cjs.Graphics().p("Astx1QHmihHJDmQHKDoCgHmQChHmjmHJQjnHLnmCgg");
	var mask_graphics_35 = new cjs.Graphics().p("AtIxZQHei2HUDQQHTDTC3HeQC3HejRHUQjSHUnfC3g");
	var mask_graphics_36 = new cjs.Graphics().p("Atjw4QHWjNHdC7QHcC9DNHVQDNHWi8HcQi8HenWDMg");
	var mask_graphics_37 = new cjs.Graphics().p("At8wVQHMjiHkClQHlCnDiHMQDiHMilHkQimHlnMDig");
	var mask_graphics_38 = new cjs.Graphics().p("AuVvuQHBj2HrCOQHsCQD3HBQD3HCiPHqQiPHtnBD3g");
	var mask_graphics_39 = new cjs.Graphics().p("AuuvDQG2kLHyB4QHxB5ELG1QEMG2h4HwQh5Hzm1ELg");
	var mask_graphics_40 = new cjs.Graphics().p("AvFuVQGokfH4BhQH2BiEfGoQEfGphhH2QhiH4moEfg");
	var mask_graphics_41 = new cjs.Graphics().p("AvctkQGbkyH7BJQH7BLExGbQEzGbhKH6QhKH8mbEyg");
	var mask_graphics_42 = new cjs.Graphics().p("AvyswQGMlFH+AyQH+A0FEGMQFFGNgzH9QgyH+mNFFg");
	var mask_graphics_43 = new cjs.Graphics().p("AwIr5QF+lWH/AaQIAAdFWF9QFXF9gbH+QgcIBl9FWg");
	var mask_graphics_44 = new cjs.Graphics().p("Awcq+QFtloIAADQIAAFFoFtQFoFtgEH/QgEIBltFog");
	var mask_graphics_45 = new cjs.Graphics().p("AwwqBQFcl4IAgVQIAgSF4FbQF4FdAUH+QAUIBlcF5g");
	var mask_graphics_46 = new cjs.Graphics().p("AxDpBQFKmIH/gsQH+gqGIFKQGIFLArH9QArIAlKGHg");
	var mask_graphics_47 = new cjs.Graphics().p("AxVn+QE4mXH8hDQH8hCGWE4QGXE4BCH7QBDH9k4GWg");
	var mask_graphics_48 = new cjs.Graphics().p("Axmm5QElmkH4hbQH4hZGkElQGlElBaH3QBaH5klGlg");
	var mask_graphics_49 = new cjs.Graphics().p("Ax2lyQERmxH0hyQHzhwGxERQGyESBxHyQByH1kSGxg");
	var mask_graphics_50 = new cjs.Graphics().p("AyFkoQD9m+HuiIQHuiHG9D9QG+D9CIHuQCIHuj9G9g");
	var mask_graphics_51 = new cjs.Graphics().p("AyTjdQDpnJHnifQHnidHIDoQHJDpCfHnQCeHnjoHIg");
	var mask_graphics_52 = new cjs.Graphics().p("AyfiQQDTnTHfi1QHhi0HRDTQHTDUC1HfQC1HfjTHTg");
	var mask_graphics_53 = new cjs.Graphics().p("AyrhBQC+ncHXjMQHXjJHbC9QHcC+DLHWQDLHXi+Hcg");
	var mask_graphics_54 = new cjs.Graphics().p("Ay0AOQCnnkHNjgQHOjgHjCoQHkCnDgHNQDgHNinHkg");
	var mask_graphics_55 = new cjs.Graphics().p("Ay9BfQCRnrHCj2QHDj0HqCRQHsCSD1HBQD1HCiRHsg");
	var mask_graphics_56 = new cjs.Graphics().p("AzECxQB6nxG2kKQG4kJHwB7QHyB6EJG2QEKG2h6Hyg");
	var mask_graphics_57 = new cjs.Graphics().p("AzKEEQBjn2GqkeQGrkdH1BkQH3BjEdGqQEeGphkH3g");
	var mask_graphics_58 = new cjs.Graphics().p("AzPFXQBNn6GckxQGdkvH5BMQH8BMEwGcQExGchNH7g");
	var mask_graphics_59 = new cjs.Graphics().p("AzSGsQA1n9GOlEQGPlCH8A0QH+A1FDGOQFDGNg1H+g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:14.6,y:53.3}).wait(1).to({graphics:mask_graphics_1,x:15.6,y:50.6}).wait(1).to({graphics:mask_graphics_2,x:16.7,y:48}).wait(1).to({graphics:mask_graphics_3,x:17.9,y:45.4}).wait(1).to({graphics:mask_graphics_4,x:19.2,y:42.9}).wait(1).to({graphics:mask_graphics_5,x:20.7,y:40.4}).wait(1).to({graphics:mask_graphics_6,x:22.2,y:38}).wait(1).to({graphics:mask_graphics_7,x:23.8,y:35.7}).wait(1).to({graphics:mask_graphics_8,x:25.6,y:33.4}).wait(1).to({graphics:mask_graphics_9,x:27.4,y:31.2}).wait(1).to({graphics:mask_graphics_10,x:29.4,y:29.2}).wait(1).to({graphics:mask_graphics_11,x:31.4,y:27.2}).wait(1).to({graphics:mask_graphics_12,x:33.6,y:25.4}).wait(1).to({graphics:mask_graphics_13,x:35.9,y:23.7}).wait(1).to({graphics:mask_graphics_14,x:38.2,y:22}).wait(1).to({graphics:mask_graphics_15,x:40.6,y:20.5}).wait(1).to({graphics:mask_graphics_16,x:43.1,y:19.1}).wait(1).to({graphics:mask_graphics_17,x:45.6,y:17.8}).wait(1).to({graphics:mask_graphics_18,x:48.2,y:16.6}).wait(1).to({graphics:mask_graphics_19,x:50.8,y:15.5}).wait(1).to({graphics:mask_graphics_20,x:53.5,y:14.6}).wait(1).to({graphics:mask_graphics_21,x:56.2,y:13.7}).wait(1).to({graphics:mask_graphics_22,x:58.9,y:13}).wait(1).to({graphics:mask_graphics_23,x:61.7,y:12.3}).wait(1).to({graphics:mask_graphics_24,x:64.4,y:11.9}).wait(1).to({graphics:mask_graphics_25,x:67.2,y:11.5}).wait(1).to({graphics:mask_graphics_26,x:67.5,y:11.3}).wait(1).to({graphics:mask_graphics_27,x:67.5,y:11.2}).wait(1).to({graphics:mask_graphics_28,x:67.5,y:11.1}).wait(1).to({graphics:mask_graphics_29,x:67.5,y:10.9}).wait(1).to({graphics:mask_graphics_30,x:64.8,y:10.6}).wait(1).to({graphics:mask_graphics_31,x:62.1,y:10.1}).wait(1).to({graphics:mask_graphics_32,x:59.3,y:9.5}).wait(1).to({graphics:mask_graphics_33,x:56.6,y:8.8}).wait(1).to({graphics:mask_graphics_34,x:53.9,y:7.9}).wait(1).to({graphics:mask_graphics_35,x:51.2,y:7}).wait(1).to({graphics:mask_graphics_36,x:48.6,y:5.9}).wait(1).to({graphics:mask_graphics_37,x:46,y:4.7}).wait(1).to({graphics:mask_graphics_38,x:43.5,y:3.4}).wait(1).to({graphics:mask_graphics_39,x:41,y:2}).wait(1).to({graphics:mask_graphics_40,x:38.6,y:0.5}).wait(1).to({graphics:mask_graphics_41,x:36.3,y:-1.1}).wait(1).to({graphics:mask_graphics_42,x:34,y:-2.8}).wait(1).to({graphics:mask_graphics_43,x:31.8,y:-4.6}).wait(1).to({graphics:mask_graphics_44,x:29.7,y:-6.6}).wait(1).to({graphics:mask_graphics_45,x:27.8,y:-8.6}).wait(1).to({graphics:mask_graphics_46,x:25.9,y:-10.8}).wait(1).to({graphics:mask_graphics_47,x:24.2,y:-13}).wait(1).to({graphics:mask_graphics_48,x:22.5,y:-15.3}).wait(1).to({graphics:mask_graphics_49,x:21,y:-17.7}).wait(1).to({graphics:mask_graphics_50,x:19.6,y:-20.2}).wait(1).to({graphics:mask_graphics_51,x:18.2,y:-22.7}).wait(1).to({graphics:mask_graphics_52,x:17,y:-25.3}).wait(1).to({graphics:mask_graphics_53,x:15.9,y:-27.9}).wait(1).to({graphics:mask_graphics_54,x:14.9,y:-30.6}).wait(1).to({graphics:mask_graphics_55,x:14.1,y:-33.2}).wait(1).to({graphics:mask_graphics_56,x:13.3,y:-36}).wait(1).to({graphics:mask_graphics_57,x:12.7,y:-38.7}).wait(1).to({graphics:mask_graphics_58,x:12.2,y:-41.5}).wait(1).to({graphics:mask_graphics_59,x:11.8,y:-44.3}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("Al8EDQgWg7AAhEQAAihB9hzQB8hyCwAAQCwAAB9ByQAgAfAYAhQANARAKAS");
	this.shape.setTransform(10.1,-10.7,1,1,18.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.7,-28.7,101,36.4);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-10,-154.2,1,1,0,0,0,0.1,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,regY:0,y:-16.5},74,cjs.Ease.get(0.5)).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAAg7IAAB3");
	this.shape.setTransform(-10,-157.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AAABJIAAiR");
	this.shape_1.setTransform(-10,-156.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AAABVIAAip");
	this.shape_2.setTransform(-10,-154.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AAABiIAAjD");
	this.shape_3.setTransform(-10,-153.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AAABuIAAjb");
	this.shape_4.setTransform(-10,-152.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AAAB6IAAjz");
	this.shape_5.setTransform(-10,-151.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AAACGIAAkL");
	this.shape_6.setTransform(-10,-150);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AAACTIAAkk");
	this.shape_7.setTransform(-10,-148.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AAACeIAAk7");
	this.shape_8.setTransform(-10,-147.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AAACqIAAlT");
	this.shape_9.setTransform(-10,-146.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AAAC2IAAlr");
	this.shape_10.setTransform(-10,-145.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AAADBIAAmB");
	this.shape_11.setTransform(-10,-144.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AAADNIAAmZ");
	this.shape_12.setTransform(-10,-143);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AAADYIAAmv");
	this.shape_13.setTransform(-10,-141.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AAADjIAAnF");
	this.shape_14.setTransform(-10,-140.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AAADuIAAnb");
	this.shape_15.setTransform(-10,-139.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AAAD5IAAnx");
	this.shape_16.setTransform(-10,-138.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AAAEEIAAoH");
	this.shape_17.setTransform(-10,-137.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AAAEPIAAod");
	this.shape_18.setTransform(-10,-136.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AAAEaIAAoy");
	this.shape_19.setTransform(-10,-135.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AAAEkIAApH");
	this.shape_20.setTransform(-10,-134.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AAAEuIAApc");
	this.shape_21.setTransform(-10,-133.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AAAE5IAApx");
	this.shape_22.setTransform(-10,-132.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AAAFDIAAqF");
	this.shape_23.setTransform(-10,-131.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AAAFNIAAqZ");
	this.shape_24.setTransform(-10,-130.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AAAFXIAAqt");
	this.shape_25.setTransform(-10,-129.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AAAFhIAArB");
	this.shape_26.setTransform(-10,-128.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AAAFqIAArU");
	this.shape_27.setTransform(-10,-127.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AAAF0IAArn");
	this.shape_28.setTransform(-10,-126.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AAAF9IAAr5");
	this.shape_29.setTransform(-10,-125.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AAAGHIAAsN");
	this.shape_30.setTransform(-10,-124.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AAAGQIAAsf");
	this.shape_31.setTransform(-10,-123.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AAAGZIAAsx");
	this.shape_32.setTransform(-10,-122.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AAAGiIAAtD");
	this.shape_33.setTransform(-10,-121.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AAAGrIAAtV");
	this.shape_34.setTransform(-10,-120.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AAAG0IAAtn");
	this.shape_35.setTransform(-10,-119.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AAAG9IAAt5");
	this.shape_36.setTransform(-10,-119);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AAAHFIAAuJ");
	this.shape_37.setTransform(-10,-118.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AAAHOIAAub");
	this.shape_38.setTransform(-10,-117.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AAAHWIAAur");
	this.shape_39.setTransform(-10,-116.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AAAHeIAAu7");
	this.shape_40.setTransform(-10,-115.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AAAHmIAAvL");
	this.shape_41.setTransform(-10,-114.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AAAHuIAAvb");
	this.shape_42.setTransform(-10,-114);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AAAH2IAAvr");
	this.shape_43.setTransform(-10,-113.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AAAH+IAAv7");
	this.shape_44.setTransform(-10,-112.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AAAIGIAAwL");
	this.shape_45.setTransform(-10,-111.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AAAINIAAwZ");
	this.shape_46.setTransform(-10,-110.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AAAIUIAAwo");
	this.shape_47.setTransform(-10,-110.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AAAIcIAAw3");
	this.shape_48.setTransform(-10,-109.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AAAIjIAAxF");
	this.shape_49.setTransform(-10,-108.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AAAIqIAAxT");
	this.shape_50.setTransform(-10,-108);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AAAIxIAAxh");
	this.shape_51.setTransform(-10,-107.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AAAI4IAAxv");
	this.shape_52.setTransform(-10,-106.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AAAI/IAAx9");
	this.shape_53.setTransform(-10,-106);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AAAJFIAAyJ");
	this.shape_54.setTransform(-10,-105.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AAAJMIAAyX");
	this.shape_55.setTransform(-10,-104.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AAAJSIAAyj");
	this.shape_56.setTransform(-10,-104);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AAAJYIAAyv");
	this.shape_57.setTransform(-10,-103.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AAAJfIAAy8");
	this.shape_58.setTransform(-10,-102.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AAAJkIAAzI");
	this.shape_59.setTransform(-10,-102.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(5,1,1).p("AAAJrIAAzV");
	this.shape_60.setTransform(-10,-101.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(5,1,1).p("AAAJwIAAzf");
	this.shape_61.setTransform(-10,-101);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(5,1,1).p("AAAJ2IAAzr");
	this.shape_62.setTransform(-10,-100.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(5,1,1).p("AAAJ7IAAz2");
	this.shape_63.setTransform(-10,-99.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(5,1,1).p("AAAKBIAA0B");
	this.shape_64.setTransform(-10,-99.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(5,1,1).p("AAAKGIAA0L");
	this.shape_65.setTransform(-10,-98.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(5,1,1).p("AAAKMIAA0W");
	this.shape_66.setTransform(-10,-98.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(5,1,1).p("AAAKRIAA0h");
	this.shape_67.setTransform(-10,-97.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(5,1,1).p("AAAKWIAA0r");
	this.shape_68.setTransform(-10,-97.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(5,1,1).p("AAAKbIAA00");
	this.shape_69.setTransform(-10,-96.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(5,1,1).p("AAAKfIAA09");
	this.shape_70.setTransform(-10,-96.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(5,1,1).p("AAAKkIAA1H");
	this.shape_71.setTransform(-10,-95.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(5,1,1).p("AAAKoIAA1Q");
	this.shape_72.setTransform(-10,-95.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(5,1,1).p("AAAKtIAA1Z");
	this.shape_73.setTransform(-10,-94.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(5,1,1).p("AAAqwIAAVh");
	this.shape_74.setTransform(-10,-94.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.9,-167.6,24.3,21.8);


(lib.honeyflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.honeybee();
	this.instance.parent = this;
	this.instance.setTransform(38.4,-170.9,0.422,0.422,0,0,0,-0.1,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNB8IgRgDIgCAAIgFgCIgDgBIgGgCIgHgDIgFgDIgDgBIgBgBIgCgBIgBgBIgBAAIgBgBIgBgBIgCgBIgBgBIgBAAIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIAAgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIgBgBIAAgBIgBAAIgBgBIAAgBIgBgBIgBgBIAAgBIgBAAIgCgBIAAgBIgBgBIAAgBIgBgBIgBAAIAAgBIgBgBIAAgBIgBgBIAAgBIgBgBIAAgBIgBAAIAAgBIgBgBIgBgBIgBgBIAAgBIAAgBIgBAAIgBgBIAAgBIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIgBAAIAAgBIAAgBIgBgBIAAgBIgBgBIgBgBIAAgBIAAgBIgBAAIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAAAIgBgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAAAIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIAAgBIAAAAIABgCIAAAAIAAgCIABgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIABgBIABgBIABgBIAAgBIABgBIABgBIAAgBIABgBIABgCIAAgBIABgBIABgBIABgBIABgBIABgBIABgBIABgBIAAgBIAEgEIANgLIAMgIIAPgIIAQgGIAOgDIAQgBQAHAAAJABIAPACQAJACAHAEIAPAHIAFACIABABIACABIABAAIAAABIACABIABABIABAAIABABIABABIABABIABABIACAAIAAABIABABIABABIABABIABAAIABABIABABIABABIABABIABABIAAAAIABABIAAABIABABIABABIACABIAAAAIABABIAAABIABABIABABIAAABIABAAIAAABIABABIABABIAAABIABABIABABIABAAIABABIAAABIABABIAAABIABABIAAABIAAAAIABABIABABIAAABIABABIAAABIABABIAAABIABAAIABABIAAABIAAABIABABIAAABIABABIAAABIABAAIAAABIABABIAAABIAAABIAAABIABABIAAABIAAABIABAAIAAABIAAABIABABIAAABIAAABIABABIAAABIABABIAAABIAAABIABAAIAAABIAAABIAAABIAAABIABABIAAABIAAABIAAABIABABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIABACIAAACIAAACIAAABIAAAAIABABIgBABIAAABIABABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAAAIgBABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIAAACIAAACIgBACIAAABIAAABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIgBABIgBABIAAABIAAABIgBABIAAABIAAABIgBABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIgBABIgBABIAAABIgBABIAAABIgBABIgBABIAAABIgBABIAAABIgBABIgBACIgBABIgBABIgBABIAAABIgBABIgBABIgBABIAAABIgBABIgBABIgBABIgCABIgBACIgBABIgKAJQgLAJgOAHQgIAEgLADQgRAFgRAAIgOgBg");
	this.shape.setTransform(22.8,-144.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-215.3,105.5,83.3);


// stage content:
(lib.writingsuccess_Fontkid_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_374 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(374).call(this.frame_374).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(354.1,272.4,0.999,0.999,8.5,0,0,22.4,-144);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:8.3,guide:{path:[353.9,272.4,353.9,271.9,353.9,271.5,352.6,242,331.3,220.7,309.9,199.3,280.1,198.1]}},50).to({guide:{path:[280.1,198.1,278.3,198.1,276.5,198.1,244.4,198.1,221.7,220.7,199,243.5,199,275.6,199,307.7,221.7,330.4,244.4,353,276.5,353,277,353,277.5,353]}},100).to({scaleX:1,scaleY:1,rotation:8.5,guide:{path:[277.5,352.9,309,352.6,331.3,330.3,352.8,308.7,353.9,278.7]}},51).wait(10).to({scaleX:1,scaleY:1,rotation:0,skewX:-8,skewY:172,x:351.8,y:197.6},0).to({y:352.6},80).wait(10).to({startPosition:0},0).to({guide:{path:[351.8,352.6,450.2,209.7,470.5,346.2,490.8,482.2,674.1,335]}},64).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(354,273.5,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},201).wait(10).to({_off:false,x:350.6,y:352.8},0).to({_off:true},80).wait(75));

	// Layer 9
	this.instance_1 = new lib.ar1("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(424.1,388.7,1,1,0,0,0,0.3,30.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(220).to({_off:false},0).wait(155));

	// Layer 28
	this.instance_2 = new lib.ar2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(271.3,264.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(366));

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AAAgJIAAAT");
	this.shape_1.setTransform(351,199);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("AAAgIIAAAS");
	this.shape_2.setTransform(351,201);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("AAAgSIAAAm");
	this.shape_3.setTransform(351,201.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("AAAgcIAAA5");
	this.shape_4.setTransform(351,202.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(25,1,1).p("AAAgmIAABN");
	this.shape_5.setTransform(351,203.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(25,1,1).p("AAAgwIAABh");
	this.shape_6.setTransform(351,204.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(25,1,1).p("AAAg6IAAB1");
	this.shape_7.setTransform(351,205.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(25,1,1).p("AAAhEIAACJ");
	this.shape_8.setTransform(351,206.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(25,1,1).p("AAAhOIAACd");
	this.shape_9.setTransform(351,207.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(25,1,1).p("AAAhXIAACv");
	this.shape_10.setTransform(351,208.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(25,1,1).p("AAAhhIAADD");
	this.shape_11.setTransform(351,209.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(25,1,1).p("AAAhrIAADX");
	this.shape_12.setTransform(351,210.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(25,1,1).p("AAAh1IAADr");
	this.shape_13.setTransform(351,211.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(25,1,1).p("AAAh/IAAD/");
	this.shape_14.setTransform(351,212.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(25,1,1).p("AAAiJIAAET");
	this.shape_15.setTransform(351,213.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(25,1,1).p("AAAiTIAAEn");
	this.shape_16.setTransform(351,214.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(25,1,1).p("AAAidIAAE7");
	this.shape_17.setTransform(351,215.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(25,1,1).p("AAAimIABFN");
	this.shape_18.setTransform(351,216.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(25,1,1).p("AAAiwIABFh");
	this.shape_19.setTransform(351,217.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(25,1,1).p("AAAi6IABF1");
	this.shape_20.setTransform(351,218.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(25,1,1).p("AAAjEIABGJ");
	this.shape_21.setTransform(351,219.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(25,1,1).p("AAAjOIABGd");
	this.shape_22.setTransform(351,220.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(25,1,1).p("AAAjYIABGx");
	this.shape_23.setTransform(351,221.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(25,1,1).p("AAAjiIABHF");
	this.shape_24.setTransform(351,222.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(25,1,1).p("AAAjsIABHY");
	this.shape_25.setTransform(351,223.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(25,1,1).p("AAAj1IABHr");
	this.shape_26.setTransform(351,224);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(25,1,1).p("AAAj/IABH/");
	this.shape_27.setTransform(351,225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(25,1,1).p("AAAkJIABIT");
	this.shape_28.setTransform(351,226);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(25,1,1).p("AAAkTIABIn");
	this.shape_29.setTransform(351,226.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(25,1,1).p("AAAkdIABI7");
	this.shape_30.setTransform(351,227.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(25,1,1).p("AAAknIABJP");
	this.shape_31.setTransform(351,228.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(25,1,1).p("AAAkxIABJj");
	this.shape_32.setTransform(351,229.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(25,1,1).p("AAAk7IABJ3");
	this.shape_33.setTransform(351,230.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(25,1,1).p("AAAlEIABKJ");
	this.shape_34.setTransform(351,231.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(25,1,1).p("AAAlOIABKd");
	this.shape_35.setTransform(351,232.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(25,1,1).p("AAAlYIABKx");
	this.shape_36.setTransform(351,233.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(25,1,1).p("AAAliIABLF");
	this.shape_37.setTransform(351,234.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(25,1,1).p("AAAlsIABLZ");
	this.shape_38.setTransform(351,235.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(25,1,1).p("AAAl2IABLt");
	this.shape_39.setTransform(351,236.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(25,1,1).p("AAAl/IABL/");
	this.shape_40.setTransform(351.1,237.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(25,1,1).p("AAAmJIABMT");
	this.shape_41.setTransform(351.1,238.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(25,1,1).p("AAAmTIABMn");
	this.shape_42.setTransform(351.1,239.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(25,1,1).p("AAAmdIABM7");
	this.shape_43.setTransform(351.1,240.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(25,1,1).p("AAAmnIABNP");
	this.shape_44.setTransform(351.1,241.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(25,1,1).p("AAAmxIABNj");
	this.shape_45.setTransform(351.1,242.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(25,1,1).p("AAAm7IABN3");
	this.shape_46.setTransform(351.1,243.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(25,1,1).p("AAAnEIABOK");
	this.shape_47.setTransform(351.1,244.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(25,1,1).p("AAAnOIABOd");
	this.shape_48.setTransform(351.1,245.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(25,1,1).p("AAAnYIABOx");
	this.shape_49.setTransform(351.1,246.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(25,1,1).p("AAAniIABPF");
	this.shape_50.setTransform(351.1,247.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(25,1,1).p("AAAnsIABPZ");
	this.shape_51.setTransform(351.1,248.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(25,1,1).p("AAAn2IABPt");
	this.shape_52.setTransform(351.1,249);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(25,1,1).p("AAAoAIABQB");
	this.shape_53.setTransform(351.1,250);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(25,1,1).p("AAAoKIABQV");
	this.shape_54.setTransform(351.1,250.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(25,1,1).p("AAAoTIABQo");
	this.shape_55.setTransform(351.1,251.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(25,1,1).p("AAAoeIABQ9");
	this.shape_56.setTransform(351.1,252.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(25,1,1).p("AAAonIABRP");
	this.shape_57.setTransform(351.1,253.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(25,1,1).p("AAAoxIABRj");
	this.shape_58.setTransform(351.1,254.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(25,1,1).p("AAAo7IABR3");
	this.shape_59.setTransform(351.1,255.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(25,1,1).p("AAApFIABSL");
	this.shape_60.setTransform(351.1,256.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(25,1,1).p("AAApPIABSf");
	this.shape_61.setTransform(351.1,257.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(25,1,1).p("AAApZIABSz");
	this.shape_62.setTransform(351.1,258.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(25,1,1).p("AgBpjIACTG");
	this.shape_63.setTransform(351.1,259.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(25,1,1).p("AgBptIACTa");
	this.shape_64.setTransform(351.1,260.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(25,1,1).p("AgBp2IACTt");
	this.shape_65.setTransform(351.1,261.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(25,1,1).p("AgBqAIACUB");
	this.shape_66.setTransform(351.1,262.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(25,1,1).p("AgBqKIACUV");
	this.shape_67.setTransform(351.1,263.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(25,1,1).p("AgBqUIACUp");
	this.shape_68.setTransform(351.1,264.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(25,1,1).p("AgBqeIACU8");
	this.shape_69.setTransform(351.1,265.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(25,1,1).p("AgBqoIACVR");
	this.shape_70.setTransform(351.1,266.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(25,1,1).p("AgBqxIACVj");
	this.shape_71.setTransform(351.1,267.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(25,1,1).p("AgBq7IACV3");
	this.shape_72.setTransform(351.1,268.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(25,1,1).p("AgBrFIACWL");
	this.shape_73.setTransform(351.1,269.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(25,1,1).p("AgBrPIACWf");
	this.shape_74.setTransform(351.1,270.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(25,1,1).p("AgBrZIADWz");
	this.shape_75.setTransform(351.1,271.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(25,1,1).p("AgBrjIADXH");
	this.shape_76.setTransform(351.1,272.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(25,1,1).p("AgBrtIADXa");
	this.shape_77.setTransform(351.1,273.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(25,1,1).p("AgBr2IADXt");
	this.shape_78.setTransform(351.1,274);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(25,1,1).p("AgBsAIADYB");
	this.shape_79.setTransform(351.1,275);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(25,1,1).p("AgBsKIADYV");
	this.shape_80.setTransform(351.1,275.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},220).to({state:[]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).wait(75));

	// Layer 8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_199 = new cjs.Graphics().p("AGFd1Qndi6jNnUQjOnVC5ndMAj/AOCQi6HdnUDOQj3Bsj4AAQjhAAjihZg");
	var mask_graphics_200 = new cjs.Graphics().p("AGkeCQniirjdnOQjcnPCqniMAkaAM5QiqHinODeQkFB7kKAAQjQAAjShKg");
	var mask_graphics_201 = new cjs.Graphics().p("AHEeNQnoicjqnGQjrnICbnoMAkzALwQibHnnHDsQkSCNkdAAQi+AAjCg+g");
	var mask_graphics_202 = new cjs.Graphics().p("AHleXQnsiNj5m+Qj6nBCNnsMAlJAKlQiMHtm/D5QkfCfkwAAQisAAixgyg");
	var mask_graphics_203 = new cjs.Graphics().p("AIHegQnxh9kGm3QkIm4B9nxMAleAJaQh9Hxm3EIQkqCylFAAQiaAAifgog");
	var mask_graphics_204 = new cjs.Graphics().p("AIqenQn1htkUmuQkVmwBtn0MAlwAIOQhtH1mvEVQk1DGlZAAQiIAAiNgfg");
	var mask_graphics_205 = new cjs.Graphics().p("AJNeuQn4hdkhmmQkimnBdn3MAl/AHCQhdH4mmEiQlADcluAAQh1AAh7gXg");
	var mask_graphics_206 = new cjs.Graphics().p("AJyezQn7hNkumcQkwmeBNn6MAmNAF1QhNH7mcEwQlKDxmEAAQhjAAhngQg");
	var mask_graphics_207 = new cjs.Graphics().p("AKXe3Qn9g9k7mTQk9mTA+n9MAmYAEpQg+H8mTE9QlSEImbAAQhQAAhTgKg");
	var mask_graphics_208 = new cjs.Graphics().p("AK9e6Qn/gtlHmJQlJmJAtn/MAmgADcQgtH+mJFJQlaEhm0AAQg8AAg+gGg");
	var mask_graphics_209 = new cjs.Graphics().p("ALke8QoAgdlUl+QlVl/AdoAMAmmACNQgdIAl+FWQlhE5nOAAQgnAAgpgCg");
	var mask_graphics_210 = new cjs.Graphics().p("AMKe7QoBgNlflzQlil0ANoBMAmqABAQgNIBl0FhQlnFUnoAAIglgBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(199).to({graphics:mask_graphics_199,x:198.9,y:199.8}).wait(1).to({graphics:mask_graphics_200,x:199.7,y:199.6}).wait(1).to({graphics:mask_graphics_201,x:200.5,y:199.5}).wait(1).to({graphics:mask_graphics_202,x:201.2,y:199.3}).wait(1).to({graphics:mask_graphics_203,x:201.9,y:199.2}).wait(1).to({graphics:mask_graphics_204,x:202.5,y:199}).wait(1).to({graphics:mask_graphics_205,x:203,y:198.9}).wait(1).to({graphics:mask_graphics_206,x:203.5,y:198.7}).wait(1).to({graphics:mask_graphics_207,x:204,y:198.5}).wait(1).to({graphics:mask_graphics_208,x:204.3,y:198.4}).wait(1).to({graphics:mask_graphics_209,x:204.6,y:198.2}).wait(1).to({graphics:mask_graphics_210,x:204.7,y:198}).wait(165));

	// Layer 7
	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(25,1,1).p("AMHAAQAAFBjjDjQjjDjlBAAQlAAAjjjjQjjjjAAlBQAAlADjjjQDjjjFAAAQFBAADjDjQDjDjAAFAg");
	this.shape_81.setTransform(276.5,275.5);
	this.shape_81._off = true;

	var maskedShapeInstanceList = [this.shape_81];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_81).wait(199).to({_off:false},0).wait(176));

	// Layer 4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_102 = new cjs.Graphics().p("AmjPuQBmn2GqkbQGskZH2BlQH2BmEaGrQEbGrhmH2g");
	var mask_1_graphics_103 = new cjs.Graphics().p("AmqQmQBXn5GhkoQGjkmH5BVQH5BXEnGiQEoGjhXH5g");
	var mask_1_graphics_104 = new cjs.Graphics().p("AmvReQBHn7GYk1QGakzH6BGQH8BIE0GYQE1GahIH7g");
	var mask_1_graphics_105 = new cjs.Graphics().p("Am0SWQA4n9GOlBQGQlAH9A3QH+A4FAGPQFBGQg4H9g");
	var mask_1_graphics_106 = new cjs.Graphics().p("Am3TPQAon/GFlNQGFlMH+AoQH/AoFNGFQFNGGgoH+g");
	var mask_1_graphics_107 = new cjs.Graphics().p("Am6UIQAZoAF7lZQF7lYH/AYQIAAZFYF6QFZF8gZIAg");
	var mask_1_graphics_108 = new cjs.Graphics().p("Am7VAQAJoAFwlkQFwlkIAAJQIBAJFjFwQFkFxgIIAg");
	var mask_1_graphics_109 = new cjs.Graphics().p("AhdH5QFmlvH/gHQIBgHFuFlQFwFmAHIAMgmpAAhQgHoAFllvg");
	var mask_1_graphics_110 = new cjs.Graphics().p("Ah2IBQFal5H/gXQIAgWF5FZQF7FbAWH/MgmmABtQgXn/Fal7g");
	var mask_1_graphics_111 = new cjs.Graphics().p("AiOILQFOmEH+gmQH/gmGEFNQGFFPAmH/MgmiAC4Qgmn+FOmFg");
	var mask_1_graphics_112 = new cjs.Graphics().p("AilIVQFCmOH9g2QH+g1GOFBQGPFDA1H9MgmbAEEQg1n9FBmPg");
	var mask_1_graphics_113 = new cjs.Graphics().p("Ai6IgQE2mXH7hGQH8hEGXE0QGZE2BFH8MgmSAFPQhFn7E1mZg");
	var mask_1_graphics_114 = new cjs.Graphics().p("AjOIsQEqmhH4hVQH6hUGgEoQGiEqBVH5MgmGAGaQhVn5Eomig");
	var mask_1_graphics_115 = new cjs.Graphics().p("AjgI5QEdmqH1hkQH3hkGqEbQGqEcBlH3Mgl5AHkQhkn2Ebmqg");
	var mask_1_graphics_116 = new cjs.Graphics().p("AjwJGQEPmyHyh0QH0hzGyEOQGzEPB0HzMglpAIvQh0nzEPmzg");
	var mask_1_graphics_117 = new cjs.Graphics().p("Aj/JUQECm6HuiDQHwiCG6EAQG7ECCDHvMglWAJ4QiDnvEBm7g");
	var mask_1_graphics_118 = new cjs.Graphics().p("AkNJjQD1nCHqiSQHriRHCDyQHDD1CSHqMglCALCQiSnrDznDg");
	var mask_1_graphics_119 = new cjs.Graphics().p("AkYJzQDnnKHkihQHnigHJDlQHKDmChHmMgkrAMKQihnmDmnKg");
	var mask_1_graphics_120 = new cjs.Graphics().p("AkjKDQDZnRHgivQHhivHQDWQHRDZCwHhMgkSANRQiwnhDXnRg");
	var mask_1_graphics_121 = new cjs.Graphics().p("AkrKUQDKnXHai9QHci/HWDIQHYDKC+HcMgj3AOXQi+nbDJnXg");
	var mask_1_graphics_122 = new cjs.Graphics().p("AkyKlQC8ncHUjMQHVjNHdC7QHdC6DNHVMgjaAPeQjNnVC7neg");
	var mask_1_graphics_123 = new cjs.Graphics().p("Ak4K4QCunjHNjaQHPjbHiCsQHjCsDbHPMgi6AQiQjcnPCsnig");
	var mask_1_graphics_124 = new cjs.Graphics().p("Ak8LLQCfnoHGjoQHJjpHmCdQHpCdDpHIMgiZARmQjpnICcnng");
	var mask_1_graphics_125 = new cjs.Graphics().p("Ak+LeQCQnsG/j2QHBj3HrCOQHtCOD3HAMgh2ASqQj3nBCOnsg");
	var mask_1_graphics_126 = new cjs.Graphics().p("Ak+LyQCAnwG3kDQG5kFHwB/QHxB/EEG4MghPATrQkFm4B/nxg");
	var mask_1_graphics_127 = new cjs.Graphics().p("Ak9MHQBxn0GvkSQGxkRHzBwQH1BwESGwMggpAUsQkSmxBwn0g");
	var mask_1_graphics_128 = new cjs.Graphics().p("Ak7McQBin3GnkfQGokeH2BgQH4BhEfGnI//VsQkfmoBgn4g");
	var mask_1_graphics_129 = new cjs.Graphics().p("Ak2MyQBSn6GdkrQGgksH5BRQH6BSEsGeI/TWpQksmfBRn6g");
	var mask_1_graphics_130 = new cjs.Graphics().p("AkxNJQBDn9GUk4QGWk4H8BCQH8BCE5GUI+mXmQk5mVBBn8g");
	var mask_1_graphics_131 = new cjs.Graphics().p("AkpNgQAzn+GLlFQGMlEH9AyQH+AyFFGLI93YhQlEmMAxn9g");
	var mask_1_graphics_132 = new cjs.Graphics().p("AkgN3QAkn/GAlRQGClQH+AiQIAAjFRGBI9HZbQlQmCAin/g");
	var mask_1_graphics_133 = new cjs.Graphics().p("AkVOPQAUoBF2lcQF3lcH/ATQIBATFcF2I8UaUQlbl3ASoAg");
	var mask_1_graphics_134 = new cjs.Graphics().p("AkJOnQAEoBFrlnQFtlnIAADQIAADFoFrI7gbKQlmlsACoAg");
	var mask_1_graphics_135 = new cjs.Graphics().p("Aj7PAQgLoBFflyQFilyH/gNQIBgMFzFgI6qb/QlylhgNoAg");
	var mask_1_graphics_136 = new cjs.Graphics().p("AjsPZQgboAFVl9QFWl9H+gcQIAgcF+FVI5ycyQl9lWgdn/g");
	var mask_1_graphics_137 = new cjs.Graphics().p("AjbPyQgqn/FImHQFKmHH+gsQH/gsGIFKI45djQmHlKgtn+g");
	var mask_1_graphics_138 = new cjs.Graphics().p("AjIQMQg6n9E8mSQE+mRH8g7QH9g8GSE+I3+eTQmRk+g8n8g");
	var mask_1_graphics_139 = new cjs.Graphics().p("Ai0QmQhKn7EwmbQExmbH6hLQH8hLGbEyI3CfBQmakyhMn6g");
	var mask_1_graphics_140 = new cjs.Graphics().p("AifRAQhZn4EjmkQElmkH3haQH5hbGkEkI2EfuQmjklhcn4g");
	var mask_1_graphics_141 = new cjs.Graphics().p("AiIRbQhon2EWmsQEXmtH1hqQH2hqGtEYMgVGAgXQmskXhrn1g");
	var mask_1_graphics_142 = new cjs.Graphics().p("AhvR2Qh4nyEJm1QEKm1Hxh5QHyh6G2ELMgUGAg/Qm1kKh5nxg");
	var mask_1_graphics_143 = new cjs.Graphics().p("AhVSRQiInuD8m9QD9m9HtiIQHuiJG9D9MgTEAhmQm9j9iIntg");
	var mask_1_graphics_144 = new cjs.Graphics().p("Ag6SsQiWnqDtnEQDvnFHpiXQHqiXHFDvMgSCAiKQnFjviXnpg");
	var mask_1_graphics_145 = new cjs.Graphics().p("AgdTIQimnlDgnMQDhnLHkimQHlinHMDhMgQ+AitQnMjhimnkg");
	var mask_1_graphics_146 = new cjs.Graphics().p("AAATjQiznfDRnTQDTnSHei1QHgi1HTDTMgP6AjNQnSjTi2nfg");
	var mask_1_graphics_147 = new cjs.Graphics().p("AAfT/QjCnaDDnYQDFnZHZjDQHajEHZDEMgO1AjrQnZjEjEnZg");
	var mask_1_graphics_148 = new cjs.Graphics().p("ABAUbQjQnUC0neQC2neHTjSQHTjSHfC1MgNuAkHQnfi1jSnTg");
	var mask_1_graphics_149 = new cjs.Graphics().p("ABiU3QjfnNCmnkQCnnjHMjgQHNjhHkCnMgMmAkhQnkinjhnMg");
	var mask_1_graphics_150 = new cjs.Graphics().p("ACFVTQjtnGCXnpQCZnoHEjuQHGjvHpCYMgLeAk5QnpiYjvnFg");
	var mask_1_graphics_151 = new cjs.Graphics().p("ACpVvQj6m/CIntQCJntG9j7QG/j9HtCJMgKWAlOQntiJj9m9g");
	var mask_1_graphics_152 = new cjs.Graphics().p("ADPWLQkIm3B5nxQB6nxG1kJQG2kKHyB6MgJNAlhQnxh6kKm1g");
	var mask_1_graphics_153 = new cjs.Graphics().p("AD1WmQkVmuBqn0QBqn2GtkVQGvkXH0BqMgIDAlyQn0hqkYmug");
	var mask_1_graphics_154 = new cjs.Graphics().p("AEdXCQkimlBan4QBbn4GlkiQGlklH4BbMgG5AmBQn4hbkkmlg");
	var mask_1_graphics_155 = new cjs.Graphics().p("AFGXeQkwmdBLn5QBMn7GbkvQGdkxH6BLMgFuAmNQn6hMkxmbg");
	var mask_1_graphics_156 = new cjs.Graphics().p("AFwX6Qk9mTA8n8QA9n9GRk8QGTk9H8A8MgEiAmXQn9g9k9mRg");
	var mask_1_graphics_157 = new cjs.Graphics().p("AGaYVQlImJAsn+QAtn+GIlIQGJlKH+AtMgDYAmfQn+gtlKmIg");
	var mask_1_graphics_158 = new cjs.Graphics().p("AHGYwQlUl/Acn+QAdoAF+lTQF/lWH/AdMgCMAmkQn/gdlWl+g");
	var mask_1_graphics_159 = new cjs.Graphics().p("AHzZMQlgl1ANn/QANoAFzlgQF0lhIAAOMgBAAmnQoAgOlhlyg");
	var mask_1_graphics_160 = new cjs.Graphics().p("AIaZmQlrlpgCn/QgDoBFolqQFpltIAgCMAAMAmoIgHAAQn8AAlqlmg");
	var mask_1_graphics_161 = new cjs.Graphics().p("AIjaBQl2legSoAQgToAFdl1QFel3H/gSMABYAmmIgyABQngAAlllLg");
	var mask_1_graphics_162 = new cjs.Graphics().p("AIsaaQmBlTghn+Qgin/FRmAQFSmCH/ghMACjAmiQgvADgtAAQnGAAlfkyg");
	var mask_1_graphics_163 = new cjs.Graphics().p("AI2ayQmLlGgxn9Qgyn+FGmKQFGmMH9gxMADuAmcQhDAGhBAAQmtAAlYkag");
	var mask_1_graphics_164 = new cjs.Graphics().p("AJBbKQmVk7hBn7QhBn8E5mVQE6mVH8hAMAE5AmTQhXAMhUAAQmWAAlQkDg");
	var mask_1_graphics_165 = new cjs.Graphics().p("AJNbgQmfkuhQn5QhRn6EtmeQEtmeH6hQMAGEAmJQhrARhnAAQl/AAlHjtg");
	var mask_1_graphics_166 = new cjs.Graphics().p("AJZb2Qmnkhhgn3Qhfn3EemnQEhmnH3hgMAHPAl8Qh+AYh5AAQlqAAk+jXg");
	var mask_1_graphics_167 = new cjs.Graphics().p("AJmcKQmwkUhvnzQhun0ERmvQETmwH0hvMAIZAlsQiQAgiLAAQlVAAk0jDg");
	var mask_1_graphics_168 = new cjs.Graphics().p("AJ0ceQm4kHh+nvQh+nxEEm3QEGm4Hwh/MAJjAlbQiiAqicAAQlCAAkpiwg");
	var mask_1_graphics_169 = new cjs.Graphics().p("AKDcxQnAj5iOnsQiNnsD3nAQD4m/HsiOMAKsAlHQizA0itAAQkvAAkdidg");
	var mask_1_graphics_170 = new cjs.Graphics().p("AKSdCQnHjridnnQicnoDpnGQDqnIHoicMAL0AkxQjDA/i/AAQkcAAkRiMg");
	var mask_1_graphics_171 = new cjs.Graphics().p("AKidTQnOjdisniQiqnjDanOQDdnOHiirMAM8AkZQjTBLjQAAQkKAAkEh7g");
	var mask_1_graphics_172 = new cjs.Graphics().p("AKzdjQnVjPi6ncQi5neDMnUQDOnVHdi6MAODAj/QjjBYjhAAQj4AAj2hrg");
	var mask_1_graphics_173 = new cjs.Graphics().p("ALEdxQnbjAjInWQjInYC+naQC/nbHXjJMAPKAjiQjyBnjzAAQjmAAjohdg");
	var mask_1_graphics_174 = new cjs.Graphics().p("ALWd/QngiyjXnQQjWnRCwngQCwngHQjXMAQPAjDQkAB2kEAAQjVAAjZhPg");
	var mask_1_graphics_175 = new cjs.Graphics().p("ALpeMQnmijjlnKQjknKCinlQCgnmHKjlMARTAijQkNCGkWAAQjEAAjJhCg");
	var mask_1_graphics_176 = new cjs.Graphics().p("AL9eXQnriUjznCQjynDCSnqQCSnqHDjzMASWAh/QkaCYkpAAQiyAAi4g3g");
	var mask_1_graphics_177 = new cjs.Graphics().p("AMQeiQnuiFkBm7QkAm7CEnuQCCnvG7kAMATYAhaQklCqk8AAQihAAiogsg");
	var mask_1_graphics_178 = new cjs.Graphics().p("AMlerQnzh2kOmyQkNmzB0nyQB1nzGykOMAUZAg0QkxC9lPAAQiQAAiWgjg");
	var mask_1_graphics_179 = new cjs.Graphics().p("AM6ezQn2hmkbmqQkbmrBln1QBmn3GpkaMAVZAgKQk7DRlkAAQh+AAiEgag");
	var mask_1_graphics_180 = new cjs.Graphics().p("ANQe6Qn5hXkomhQkomhBWn5QBWn5GgknIWXffQlEDml5AAQhtAAhwgTg");
	var mask_1_graphics_181 = new cjs.Graphics().p("ANmfAQn7hHk1mYQk0mYBGn7QBGn8GXk0IXVezQlOD8mPAAQhaAAhdgNg");
	var mask_1_graphics_182 = new cjs.Graphics().p("AN9fFQn+g4lBmOQlAmPA2n8QA3n+GOlAIYQeEQlWETmmAAQhHAAhJgIg");
	var mask_1_graphics_183 = new cjs.Graphics().p("AOUfJQn/golNmFQlMmEAnn+QAnoAGDlMIZKdUQlcErm/AAQgzAAg1gEg");
	var mask_1_graphics_184 = new cjs.Graphics().p("AOsfLQoAgYlZl6QlYl7AXn+QAYoBF5lYIaCciQliFEnZAAIg+gCg");
	var mask_1_graphics_185 = new cjs.Graphics().p("APEfMQoBgIlklvQljlwAHn/QAIoBFulkIa6buQloFdn0AAIgTAAg");
	var mask_1_graphics_186 = new cjs.Graphics().p("ABtZvQlvlkgIoAQgIoAFjlvIbwa4QllFwoAAIIgTAAQn0AAloldg");
	var mask_1_graphics_187 = new cjs.Graphics().p("AB7aJQl5lZgYn/QgXoAFXl5IckaAQlZF7oAAYIg+ABQnZABljlEg");
	var mask_1_graphics_188 = new cjs.Graphics().p("ACLaiQmElNgnn+Qgnn/FMmEIdVZIQlNGFn+AoQg1AEgzAAQm/AAldkrg");
	var mask_1_graphics_189 = new cjs.Graphics().p("ACca6QmOlBg2n9Qg3n9FBmOIeEYOQlBGOn9A4QhJAIhHAAQmnAAlVkTg");
	var mask_1_graphics_190 = new cjs.Graphics().p("ACvbRQmYk1hGn6QhHn8E1mYIezXTQk1GYn7BHQhdANhaAAQmPAAlNj8g");
	var mask_1_graphics_191 = new cjs.Graphics().p("ADCbnQmhkohWn4QhWn5EomiIfgWWQkoGhn4BXQhxAThtAAQl5AAlEjmg");
	var mask_1_graphics_192 = new cjs.Graphics().p("ADXb9Qmqkchln1Qhmn3EbmqMAgLAVXQkbGrn2BmQiEAah+AAQlkAAk6jQg");
	var mask_1_graphics_193 = new cjs.Graphics().p("ADscRQmykOh1nyQh0nzENmzMAg0AUXQkOGznyB2QiWAiiQAAQlQAAkwi8g");
	var mask_1_graphics_194 = new cjs.Graphics().p("AEDckQm6kBiEnuQiEnvEAm7MAhbATXQkAG7nvCEQioAtihAAQk8AAkliqg");
	var mask_1_graphics_195 = new cjs.Graphics().p("AEbc2QnCjziTnpQiTnsDznCMAh/ASVQjzHCnqCUQi4A3izAAQkpAAkZiYg");
	var mask_1_graphics_196 = new cjs.Graphics().p("AE0dIQnJjliinlQiinnDlnKMAiiARSQjlHKnlCiQjJBDjEAAQkXAAkMiGg");
	var mask_1_graphics_197 = new cjs.Graphics().p("AFOdYQnQjXixngQixnhDXnRMAjDAQOQjWHQnhCyQjZBPjVAAQkEAAj/h2g");
	var mask_1_graphics_198 = new cjs.Graphics().p("AFpdnQnXjIi/nbQi/nbDInXMAjiAPIQjIHXnbDAQjoBdjnAAQjyAAjxhng");
	var mask_1_graphics_199 = new cjs.Graphics().p("AGFd1Qndi6jNnUQjOnVC5ndMAj/AOCQi6HdnUDOQj3Bsj4AAQjhAAjihZg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(102).to({graphics:mask_1_graphics_102,x:203.1,y:149.9}).wait(1).to({graphics:mask_1_graphics_103,x:203.1,y:148.1}).wait(1).to({graphics:mask_1_graphics_104,x:203.1,y:146.2}).wait(1).to({graphics:mask_1_graphics_105,x:203,y:144.3}).wait(1).to({graphics:mask_1_graphics_106,x:203,y:142.4}).wait(1).to({graphics:mask_1_graphics_107,x:203,y:140.6}).wait(1).to({graphics:mask_1_graphics_108,x:203,y:138.7}).wait(1).to({graphics:mask_1_graphics_109,x:203,y:138.4}).wait(1).to({graphics:mask_1_graphics_110,x:202.9,y:140.3}).wait(1).to({graphics:mask_1_graphics_111,x:202.8,y:142.2}).wait(1).to({graphics:mask_1_graphics_112,x:202.6,y:144.1}).wait(1).to({graphics:mask_1_graphics_113,x:202.4,y:146}).wait(1).to({graphics:mask_1_graphics_114,x:202.1,y:147.9}).wait(1).to({graphics:mask_1_graphics_115,x:201.8,y:149.7}).wait(1).to({graphics:mask_1_graphics_116,x:201.4,y:151.6}).wait(1).to({graphics:mask_1_graphics_117,x:200.9,y:153.4}).wait(1).to({graphics:mask_1_graphics_118,x:200.4,y:155.3}).wait(1).to({graphics:mask_1_graphics_119,x:199.8,y:157.1}).wait(1).to({graphics:mask_1_graphics_120,x:199.2,y:158.9}).wait(1).to({graphics:mask_1_graphics_121,x:198.5,y:160.6}).wait(1).to({graphics:mask_1_graphics_122,x:197.8,y:162.4}).wait(1).to({graphics:mask_1_graphics_123,x:197,y:164.1}).wait(1).to({graphics:mask_1_graphics_124,x:196.2,y:165.8}).wait(1).to({graphics:mask_1_graphics_125,x:195.3,y:167.5}).wait(1).to({graphics:mask_1_graphics_126,x:194.4,y:169.1}).wait(1).to({graphics:mask_1_graphics_127,x:193.4,y:170.8}).wait(1).to({graphics:mask_1_graphics_128,x:192.3,y:172.4}).wait(1).to({graphics:mask_1_graphics_129,x:191.2,y:173.9}).wait(1).to({graphics:mask_1_graphics_130,x:190.1,y:175.4}).wait(1).to({graphics:mask_1_graphics_131,x:188.9,y:176.9}).wait(1).to({graphics:mask_1_graphics_132,x:187.7,y:178.4}).wait(1).to({graphics:mask_1_graphics_133,x:186.4,y:179.8}).wait(1).to({graphics:mask_1_graphics_134,x:185.1,y:181.1}).wait(1).to({graphics:mask_1_graphics_135,x:183.8,y:182.5}).wait(1).to({graphics:mask_1_graphics_136,x:182.4,y:183.8}).wait(1).to({graphics:mask_1_graphics_137,x:181,y:185}).wait(1).to({graphics:mask_1_graphics_138,x:179.5,y:186.2}).wait(1).to({graphics:mask_1_graphics_139,x:178,y:187.4}).wait(1).to({graphics:mask_1_graphics_140,x:176.4,y:188.5}).wait(1).to({graphics:mask_1_graphics_141,x:174.9,y:189.5}).wait(1).to({graphics:mask_1_graphics_142,x:173.3,y:190.5}).wait(1).to({graphics:mask_1_graphics_143,x:171.6,y:191.5}).wait(1).to({graphics:mask_1_graphics_144,x:170,y:192.4}).wait(1).to({graphics:mask_1_graphics_145,x:168.3,y:193.3}).wait(1).to({graphics:mask_1_graphics_146,x:166.6,y:194.1}).wait(1).to({graphics:mask_1_graphics_147,x:164.9,y:194.8}).wait(1).to({graphics:mask_1_graphics_148,x:163.1,y:195.5}).wait(1).to({graphics:mask_1_graphics_149,x:161.3,y:196.2}).wait(1).to({graphics:mask_1_graphics_150,x:159.5,y:196.8}).wait(1).to({graphics:mask_1_graphics_151,x:157.7,y:197.3}).wait(1).to({graphics:mask_1_graphics_152,x:155.9,y:197.8}).wait(1).to({graphics:mask_1_graphics_153,x:154,y:198.2}).wait(1).to({graphics:mask_1_graphics_154,x:152.2,y:198.6}).wait(1).to({graphics:mask_1_graphics_155,x:150.3,y:198.9}).wait(1).to({graphics:mask_1_graphics_156,x:148.4,y:199.2}).wait(1).to({graphics:mask_1_graphics_157,x:146.6,y:199.4}).wait(1).to({graphics:mask_1_graphics_158,x:144.7,y:199.5}).wait(1).to({graphics:mask_1_graphics_159,x:142.8,y:199.6}).wait(1).to({graphics:mask_1_graphics_160,x:141.5,y:199.6}).wait(1).to({graphics:mask_1_graphics_161,x:143.4,y:199.6}).wait(1).to({graphics:mask_1_graphics_162,x:145.3,y:199.6}).wait(1).to({graphics:mask_1_graphics_163,x:147.2,y:199.6}).wait(1).to({graphics:mask_1_graphics_164,x:149,y:199.7}).wait(1).to({graphics:mask_1_graphics_165,x:150.9,y:199.7}).wait(1).to({graphics:mask_1_graphics_166,x:152.8,y:199.7}).wait(1).to({graphics:mask_1_graphics_167,x:154.6,y:199.7}).wait(1).to({graphics:mask_1_graphics_168,x:156.5,y:199.8}).wait(1).to({graphics:mask_1_graphics_169,x:158.3,y:199.8}).wait(1).to({graphics:mask_1_graphics_170,x:160.1,y:199.8}).wait(1).to({graphics:mask_1_graphics_171,x:161.9,y:199.8}).wait(1).to({graphics:mask_1_graphics_172,x:163.7,y:199.8}).wait(1).to({graphics:mask_1_graphics_173,x:165.5,y:199.8}).wait(1).to({graphics:mask_1_graphics_174,x:167.2,y:199.8}).wait(1).to({graphics:mask_1_graphics_175,x:168.9,y:199.8}).wait(1).to({graphics:mask_1_graphics_176,x:170.6,y:199.8}).wait(1).to({graphics:mask_1_graphics_177,x:172.2,y:199.8}).wait(1).to({graphics:mask_1_graphics_178,x:173.9,y:199.8}).wait(1).to({graphics:mask_1_graphics_179,x:175.5,y:199.7}).wait(1).to({graphics:mask_1_graphics_180,x:177,y:199.7}).wait(1).to({graphics:mask_1_graphics_181,x:178.6,y:199.7}).wait(1).to({graphics:mask_1_graphics_182,x:180.1,y:199.7}).wait(1).to({graphics:mask_1_graphics_183,x:181.5,y:199.7}).wait(1).to({graphics:mask_1_graphics_184,x:182.9,y:199.7}).wait(1).to({graphics:mask_1_graphics_185,x:184.3,y:199.6}).wait(1).to({graphics:mask_1_graphics_186,x:185.7,y:199.6}).wait(1).to({graphics:mask_1_graphics_187,x:187,y:199.6}).wait(1).to({graphics:mask_1_graphics_188,x:188.2,y:199.7}).wait(1).to({graphics:mask_1_graphics_189,x:189.4,y:199.7}).wait(1).to({graphics:mask_1_graphics_190,x:190.6,y:199.7}).wait(1).to({graphics:mask_1_graphics_191,x:191.7,y:199.7}).wait(1).to({graphics:mask_1_graphics_192,x:192.8,y:199.7}).wait(1).to({graphics:mask_1_graphics_193,x:193.8,y:199.7}).wait(1).to({graphics:mask_1_graphics_194,x:194.8,y:199.8}).wait(1).to({graphics:mask_1_graphics_195,x:195.7,y:199.8}).wait(1).to({graphics:mask_1_graphics_196,x:196.6,y:199.8}).wait(1).to({graphics:mask_1_graphics_197,x:197.4,y:199.8}).wait(1).to({graphics:mask_1_graphics_198,x:198.2,y:199.8}).wait(1).to({graphics:mask_1_graphics_199,x:198.9,y:199.8}).wait(176));

	// Layer 3
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(25,1,1).p("AKAG3QgMASgOARQgeAmgjAkQjjDjlBAAQlAAAjkjjQjijjAAlBQAAlADijjQDkjjFAAAQFBAADjDjQAnAoAhAqQAEAFAEAFQABABAAACQABAAABABQABADACACQABABAAABQABABABABQAEAFAEAGQAmA4AbA8QADAIAEAHAKGmvIBfDDQABADABADQASA/AIBDQAEAdABAf");
	this.shape_82.setTransform(276.5,275.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(25,1,1).p("AMHAAQAAFBjjDjQjjDjlBAAQlAAAjjjjQjjjjAAlBQAAlADjjjQDjjjFAAAQFBAADjDjQDjDjAAFAg");
	this.shape_83.setTransform(276.5,275.5);

	var maskedShapeInstanceList = [this.shape_82,this.shape_83];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_82}]},102).to({state:[{t:this.shape_83}]},28).wait(245));

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_9 = new cjs.Graphics().p("AhQZjQlrlrAAoBMAmrAAAQAAIBlqFrQlsFqoAAAQoBAAlplqg");
	var mask_2_graphics_10 = new cjs.Graphics().p("Ag0Z+Ql2lfgQoBMAmpgBOQAQIAleF3QlgF1oAAQIgtABQnkAAlklPg");
	var mask_2_graphics_11 = new cjs.Graphics().p("AgXaYQmBlTggoAMAmlgCcQAhH/lTGBQlUGBn/AgQgsADgsAAQnJAAlek1g");
	var mask_2_graphics_12 = new cjs.Graphics().p("AAGaxQmLlHgwn+MAmfgDqQAwH+lGGLQlHGLn+AxQhCAGhAAAQmwAAlXkcg");
	var mask_2_graphics_13 = new cjs.Graphics().p("AAkbJQmVk6hAn8MAmWgE5QBBH9k5GWQk7GVn8BAQhXALhUAAQmXAAlQkEg");
	var mask_2_graphics_14 = new cjs.Graphics().p("ABDbhQmekuhRn6MAmMgGGQBQH7ksGfQkuGfn6BQQhrARhnAAQmAAAlHjsg");
	var mask_2_graphics_15 = new cjs.Graphics().p("ABjb3Qmokghgn4MAl+gHSQBgH3kfGpQkhGon2BgQh/AZh6AAQlqAAk9jXg");
	var mask_2_graphics_16 = new cjs.Graphics().p("ACEcMQmxkThxnzMAlugIgQBxH0kSGyQkTGxnzBwQiSAhiMAAQlVAAkyjCg");
	var mask_2_graphics_17 = new cjs.Graphics().p("AClcgQm5kFiBnwMAlcgJrQCAHwkDG6QkGG5nvCBQilAqieAAQlAAAkniug");
	var mask_2_graphics_18 = new cjs.Graphics().p("ADHczQnBj2iQnsMAlGgK3QCQHsj1HCQj3HBnsCQQi2A1iwAAQksAAkbibg");
	var mask_2_graphics_19 = new cjs.Graphics().p("ADpdFQnJjoifnnMAkwgMCQCfHnjnHKQjpHJnnCfQjGBBjCAAQkZAAkPiJg");
	var mask_2_graphics_20 = new cjs.Graphics().p("AEMdWQnQjZiuniMAkWgNMQCvHijZHRQjaHQniCuQjXBOjTAAQkHAAkBh4g");
	var mask_2_graphics_21 = new cjs.Graphics().p("AEwdmQnWjLi+ncMAj6gOUQC+HcjKHXQjMHXnbC9QjnBcjlAAQj0AAjzhog");
	var mask_2_graphics_22 = new cjs.Graphics().p("AFUd1Qnci8jNnVMAjcgPeQDNHWi7HeQi9HdnVDMQj2Brj3AAQjiAAjkhZg");
	var mask_2_graphics_23 = new cjs.Graphics().p("AF5eDQniitjcnPMAi8gQkQDbHPirHjQiuHjnODbQkEB7kKAAQjQAAjUhLg");
	var mask_2_graphics_24 = new cjs.Graphics().p("AGeePQnnidjrnIMAiZgRqQDrHIidHoQieHonHDqQkSCMkcAAQi+AAjEg/g");
	var mask_2_graphics_25 = new cjs.Graphics().p("AHEebQntiOj4nAMAh0gSwQD5HBiNHtQiPHsnAD4QkeCfkvAAQitAAiygzg");
	var mask_2_graphics_26 = new cjs.Graphics().p("AHqelQnxh+kGm4MAhNgTzQEGG4h9HxQh/Hxm3EGQkqCylEAAQibAAiggpg");
	var mask_2_graphics_27 = new cjs.Graphics().p("AIQeuQn1hukTmwMAgkgU1QEUGvhuH1QhvH1mvEUQk1DFlYAAQiJAAiOgfg");
	var mask_2_graphics_28 = new cjs.Graphics().p("AI3e2Qn5hekhmnIf513QEiGnheH4QhfH4mmEhQlADbltAAQh2AAh7gXg");
	var mask_2_graphics_29 = new cjs.Graphics().p("AJde9Qn7hOkumeIfM23QEvGehOH6QhPH7mdEvQlJDxmDAAQhkAAhogQg");
	var mask_2_graphics_30 = new cjs.Graphics().p("AKEfCQn9g+k7mTIec31QE8GTg9H9Qg/H9mUE7QlREJmbAAQhQAAhUgLg");
	var mask_2_graphics_31 = new cjs.Graphics().p("AKsfHQoAgulHmKIdr4xQFIGJgtH+QgvH/mJFIQlZEgmzAAQg9AAg+gFg");
	var mask_2_graphics_32 = new cjs.Graphics().p("ALTfKQoBgelTl/Ic45sQFUF9gdIAQgfIAl+FVQlhE5nMAAQgoAAgpgCg");
	var mask_2_graphics_33 = new cjs.Graphics().p("AL6fLQoBgNlgl0IcD6mQFhFzgNIAQgPIBlzFgQlnFUnnAAIgmgBg");
	var mask_2_graphics_34 = new cjs.Graphics().p("AhLZmIbM7eQFsFnADIBQACIBloFsQlpFsoAADIgHAAQn9AAlolmg");
	var mask_2_graphics_35 = new cjs.Graphics().p("AgvaBIaU8UQF3FcATIAQASIAlcF3QldF4oAATIg0ABQngAAljlLg");
	var mask_2_graphics_36 = new cjs.Graphics().p("AgSabIZZ9JQGDFQAjIAQAiH/lQGCQlRGDn/AjQgwADgvAAQnFAAldkxg");
	var mask_2_graphics_37 = new cjs.Graphics().p("AALa0IYe97QGNFDA0H+QAyH/lEGMQlFGNn9AzQhGAHhDAAQmsAAlWkYg");
	var mask_2_graphics_38 = new cjs.Graphics().p("AApbMIXh+rQGXE2BEH8QBCH9k3GWQk4GXn7BDQhbAMhXAAQmTAAlPkAg");
	var mask_2_graphics_39 = new cjs.Graphics().p("ABIbjIWj/aQGgEqBUH5QBSH6kqGgQkrGhn5BTQhuAThrAAQl8AAlGjqg");
	var mask_2_graphics_40 = new cjs.Graphics().p("ABob5MAViggHQGqEdBkH2QBiH4kdGpQkdGqn3BjQiCAah9AAQlmAAk8jUg");
	var mask_2_graphics_41 = new cjs.Graphics().p("ACJcOMAUgggxQGzEQB0HyQByH0kQGyQkQGznzBzQiUAiiQAAQlRAAkxi/g");
	var mask_2_graphics_42 = new cjs.Graphics().p("ACqciMATeghaQG6ECCEHvQCCHwkCG6QkCG7nvCDQinAsihAAQk9AAkmirg");
	var mask_2_graphics_43 = new cjs.Graphics().p("ADMc1MASZgiAQHDD0CTHqQCSHsj0HCQj0HDnqCSQi5A3izAAQkpAAkaiYg");
	var mask_2_graphics_44 = new cjs.Graphics().p("ADvdHMARUgikQHKDlCiHlQChHnjlHKQjlHLnmChQjKBDjEAAQkXAAkMiGg");
	var mask_2_graphics_45 = new cjs.Graphics().p("AESdYMAQNgjGQHRDXCyHfQCxHijXHRQjXHRngCxQjaBQjXAAQkDAAj/h1g");
	var mask_2_graphics_46 = new cjs.Graphics().p("AE2doMAPFgjmQHYDIDBHaQDAHbjIHYQjIHYnbDAQjpBejpAAQjxAAjwhlg");
	var mask_2_graphics_47 = new cjs.Graphics().p("AFad2MAN9gkDQHeC5DQHUQDOHVi4HdQi6HfnUDPQj4Btj6AAQjgAAjhhXg");
	var mask_2_graphics_48 = new cjs.Graphics().p("AF/eEMAM0gkeQHjCpDfHNQDdHPiqHjQiqHknNDdQkGB+kNAAQjOAAjRhJg");
	var mask_2_graphics_49 = new cjs.Graphics().p("AGkeQMALqgk3QHoCbDtHFQDsHIiaHoQibHpnGDsQkUCPkfAAQi8AAjBg9g");
	var mask_2_graphics_50 = new cjs.Graphics().p("AHKecMAKeglOQHtCLD8G+QD6HAiLHsQiLHum+D6QkhCikzAAQiqAAivgxg");
	var mask_2_graphics_51 = new cjs.Graphics().p("AHwemMAJTgliQHxB8EJG1QEIG4h7HxQh7Hxm2EJQktC1lHAAQiYAAidgng");
	var mask_2_graphics_52 = new cjs.Graphics().p("AIWevMAIHglzQH1BrEXGtQEVGvhrH1QhrH1muEWQk3DJlcAAQiGAAiLgdg");
	var mask_2_graphics_53 = new cjs.Graphics().p("AI9e2MAG5gmCQH5BcEkGkQEjGmhbH4QhcH4mkEkQlCDelxAAQhzAAh4gWg");
	var mask_2_graphics_54 = new cjs.Graphics().p("AJje9MAFtgmPQH7BMExGaQExGdhMH6QhLH7mbExQlLD1mHAAQhhAAhlgPg");
	var mask_2_graphics_55 = new cjs.Graphics().p("AKLfCMAEfgmZQH8A8E/GRQE9GSg7H9Qg8H9mRE9QlTENmfAAQhNAAhQgKg");
	var mask_2_graphics_56 = new cjs.Graphics().p("AKyfGMADRgmgQH+ArFLGHQFKGIgrH+QgrH/mIFKQlaEkm4AAQg5AAg7gFg");
	var mask_2_graphics_57 = new cjs.Graphics().p("ALZfJMACDgmmQIAAbFXF9QFWF9gbH/QgbIAl9FWQliE+nRAAQglAAglgCg");
	var mask_2_graphics_58 = new cjs.Graphics().p("AMAfLMAA1gmpQIAALFjFxQFiFygLIAQgLIBlxFiQloFYnsAAIgfAAg");
	var mask_2_graphics_59 = new cjs.Graphics().p("AMOneQIAgGFvFmQFtFnAFIAQAGIBlmFtQloFvoAAFg");
	var mask_2_graphics_60 = new cjs.Graphics().p("ALnndQH/gVF6FaQF5FbAVH/QAWIBlbF4QlbF6oAAVg");
	var mask_2_graphics_61 = new cjs.Graphics().p("AK/naQH/glGFFOQGDFPAmH+QAmIAlPGDQlPGFn/Alg");
	var mask_2_graphics_62 = new cjs.Graphics().p("AKYnUQH+g2GPFCQGOFCA1H9QA2H+lCGOQlDGPn9A2g");
	var mask_2_graphics_63 = new cjs.Graphics().p("AJxnNQH8hGGYE1QGYE2BGH7QBGH8k1GXQk2GZn8BGg");
	var mask_2_graphics_64 = new cjs.Graphics().p("AJKnEQH5hWGjEoQGhEoBWH5QBWH5koGiQkpGin5BWg");
	var mask_2_graphics_65 = new cjs.Graphics().p("AIkm6QH2hlGrEaQGrEbBmH2QBlH3kaGqQkcGsn2Bmg");
	var mask_2_graphics_66 = new cjs.Graphics().p("AH9mtQHzh2G0ENQGzEPB2HxQB2HzkOGzQkNG1nzB1g");
	var mask_2_graphics_67 = new cjs.Graphics().p("AHXmfQHviFG8D/QG8EBCFHtQCGHvkAG7QkAG9nuCGg");
	var mask_2_graphics_68 = new cjs.Graphics().p("AGxmPQHqiUHFDwQHDDzCVHpQCVHqjxHEQjyHEnqCVg");
	var mask_2_graphics_69 = new cjs.Graphics().p("AGMl9QHlikHMDiQHLDlCkHjQCkHmjiHLQjkHMnlCkg");
	var mask_2_graphics_70 = new cjs.Graphics().p("AFnlpQHgi0HSDUQHSDWC0HeQCzHgjUHSQjUHTngC0g");
	var mask_2_graphics_71 = new cjs.Graphics().p("AFClUQHajCHZDFQHZDGDCHZQDDHajFHYQjGHanaDCg");
	var mask_2_graphics_72 = new cjs.Graphics().p("AEek8QHUjSHfC2QHfC4DRHSQDSHTi3HfQi2HfnUDSg");
	var mask_2_graphics_73 = new cjs.Graphics().p("AD7kkQHNjgHkCnQHkCoDgHLQDhHNinHkQioHlnMDgg");
	var mask_2_graphics_74 = new cjs.Graphics().p("ADYkJQHFjvHqCXQHpCZDvHEQDvHGiYHpQiYHqnFDug");
	var mask_2_graphics_75 = new cjs.Graphics().p("AC2jtQG9j9HvCIQHuCJD8G8QD9G+iIHuQiIHum+D9g");
	var mask_2_graphics_76 = new cjs.Graphics().p("ACUjPQG2kLHyB4QHyB6EKG0QEMG1h5HyQh5Hym1ELg");
	var mask_2_graphics_77 = new cjs.Graphics().p("AB0iwQGskYH2BoQH2BqEYGrQEZGthpH1QhpH2mtEZg");
	var mask_2_graphics_78 = new cjs.Graphics().p("ABTiPQGkkmH5BYQH4BaEmGjQEmGkhZH3QhZH6mjEmg");
	var mask_2_graphics_79 = new cjs.Graphics().p("AA0htQGakzH7BJQH8BKEyGYQE0GbhJH6QhJH8maEzg");
	var mask_2_graphics_80 = new cjs.Graphics().p("AAVhJQGQk/H+A4QH9A6FAGOQFAGRg5H8Qg5H+mQFAg");
	var mask_2_graphics_81 = new cjs.Graphics().p("AgIgjQGFlNH/AoQH/AqFMGFQFMGGgoH+QgpH/mGFNg");
	var mask_2_graphics_82 = new cjs.Graphics().p("AglADQF6lYIAAYQIAAZFYF6QFZF8gZH/QgYIAl7FZg");
	var mask_2_graphics_83 = new cjs.Graphics().p("AhCArQFwlkIAAIQIBAJFjFvQFlFxgIH/QgJIBlwFkg");
	var mask_2_graphics_84 = new cjs.Graphics().p("AhdBUQFjlvIBgIQIAgHFwFjQFwFlAIIAQAIIBllFwg");
	var mask_2_graphics_85 = new cjs.Graphics().p("Ah4B/QFYl6H/gZQIBgXF6FYQF7FZAYH/QAYIAlYF7g");
	var mask_2_graphics_86 = new cjs.Graphics().p("AiSCrQFMmFH+gpQH/gnGGFMQGFFNApH+QAoH/lNGGg");
	var mask_2_graphics_87 = new cjs.Graphics().p("AirDYQE/mPH9g5QH+g3GPE/QGQFAA5H9QA4H+lAGQg");
	var mask_2_graphics_88 = new cjs.Graphics().p("AjDEGQEymYH7hJQH8hIGZEyQGaE0BJH6QBIH8kzGag");
	var mask_2_graphics_89 = new cjs.Graphics().p("AjbE2QEmmiH4hZQH5hYGjElQGkEnBYH4QBZH5knGjg");
	var mask_2_graphics_90 = new cjs.Graphics().p("AjxFnQEYmsH1hpQH3hnGsEXQGsEZBoH1QBpH3kZGsg");
	var mask_2_graphics_91 = new cjs.Graphics().p("AkGGYQEKm0Hyh5QHzh3G0ELQG2EKB4HyQB4HzkLG1g");
	var mask_2_graphics_92 = new cjs.Graphics().p("AkaHLQD9m+HtiHQHuiHG9D9QG+D8CIHuQCIHuj+G+g");
	var mask_2_graphics_93 = new cjs.Graphics().p("AktH+QDvnFHoiXQHqiWHFDuQHFDvCXHoQCYHrjvHFg");
	var mask_2_graphics_94 = new cjs.Graphics().p("Ak/IyQDhnMHjimQHlimHMDgQHNDgCmHkQCnHljgHMg");
	var mask_2_graphics_95 = new cjs.Graphics().p("AlQJoQDSnUHei1QHgi1HSDRQHUDRC2HfQC2HfjSHTg");
	var mask_2_graphics_96 = new cjs.Graphics().p("AlfKdQDDnZHXjFQHajEHZDDQHaDCDFHYQDFHajDHZg");
	var mask_2_graphics_97 = new cjs.Graphics().p("AltLUQCznfHSjVQHTjSHfCzQHgC0DTHSQDVHTi0Hfg");
	var mask_2_graphics_98 = new cjs.Graphics().p("Al7MLQClnlHKjjQHNjhHkCkQHmClDiHLQDjHMilHlg");
	var mask_2_graphics_99 = new cjs.Graphics().p("AmGNDQCVnqHDjxQHFjvHpCUQHqCVDxHEQDxHEiVHqg");
	var mask_2_graphics_100 = new cjs.Graphics().p("AmRN8QCGnvG6kAQG+j9HuCFQHuCFD/G8QEAG9iGHug");
	var mask_2_graphics_101 = new cjs.Graphics().p("AmbO0QB2nyGzkOQG1kLHyB1QHzB2EMG0QEOG0h2Hyg");
	var mask_2_graphics_102 = new cjs.Graphics().p("AmjPuQBmn2GqkbQGskZH2BlQH2BmEaGrQEbGrhmH2g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_2_graphics_9,x:203.2,y:199.7}).wait(1).to({graphics:mask_2_graphics_10,x:203.2,y:199.7}).wait(1).to({graphics:mask_2_graphics_11,x:203.2,y:199.7}).wait(1).to({graphics:mask_2_graphics_12,x:203.2,y:199.7}).wait(1).to({graphics:mask_2_graphics_13,x:203.2,y:199.7}).wait(1).to({graphics:mask_2_graphics_14,x:203.3,y:199.7}).wait(1).to({graphics:mask_2_graphics_15,x:203.3,y:199.8}).wait(1).to({graphics:mask_2_graphics_16,x:203.3,y:199.8}).wait(1).to({graphics:mask_2_graphics_17,x:203.3,y:199.8}).wait(1).to({graphics:mask_2_graphics_18,x:203.4,y:199.8}).wait(1).to({graphics:mask_2_graphics_19,x:203.4,y:199.8}).wait(1).to({graphics:mask_2_graphics_20,x:203.4,y:199.8}).wait(1).to({graphics:mask_2_graphics_21,x:203.4,y:199.8}).wait(1).to({graphics:mask_2_graphics_22,x:203.4,y:199.8}).wait(1).to({graphics:mask_2_graphics_23,x:203.4,y:199.8}).wait(1).to({graphics:mask_2_graphics_24,x:203.4,y:199.8}).wait(1).to({graphics:mask_2_graphics_25,x:203.4,y:199.8}).wait(1).to({graphics:mask_2_graphics_26,x:203.4,y:199.8}).wait(1).to({graphics:mask_2_graphics_27,x:203.3,y:199.7}).wait(1).to({graphics:mask_2_graphics_28,x:203.3,y:199.7}).wait(1).to({graphics:mask_2_graphics_29,x:203.3,y:199.7}).wait(1).to({graphics:mask_2_graphics_30,x:203.3,y:199.7}).wait(1).to({graphics:mask_2_graphics_31,x:203.3,y:199.6}).wait(1).to({graphics:mask_2_graphics_32,x:203.2,y:199.6}).wait(1).to({graphics:mask_2_graphics_33,x:203.2,y:199.6}).wait(1).to({graphics:mask_2_graphics_34,x:203.2,y:199.6}).wait(1).to({graphics:mask_2_graphics_35,x:203.2,y:199.6}).wait(1).to({graphics:mask_2_graphics_36,x:203.2,y:199.6}).wait(1).to({graphics:mask_2_graphics_37,x:203.3,y:199.6}).wait(1).to({graphics:mask_2_graphics_38,x:203.3,y:199.6}).wait(1).to({graphics:mask_2_graphics_39,x:203.3,y:199.7}).wait(1).to({graphics:mask_2_graphics_40,x:203.3,y:199.7}).wait(1).to({graphics:mask_2_graphics_41,x:203.3,y:199.7}).wait(1).to({graphics:mask_2_graphics_42,x:203.3,y:199.7}).wait(1).to({graphics:mask_2_graphics_43,x:203.4,y:199.7}).wait(1).to({graphics:mask_2_graphics_44,x:203.4,y:199.7}).wait(1).to({graphics:mask_2_graphics_45,x:203.4,y:199.7}).wait(1).to({graphics:mask_2_graphics_46,x:203.4,y:199.7}).wait(1).to({graphics:mask_2_graphics_47,x:203.4,y:199.7}).wait(1).to({graphics:mask_2_graphics_48,x:203.4,y:199.7}).wait(1).to({graphics:mask_2_graphics_49,x:203.4,y:199.7}).wait(1).to({graphics:mask_2_graphics_50,x:203.3,y:199.7}).wait(1).to({graphics:mask_2_graphics_51,x:203.3,y:199.7}).wait(1).to({graphics:mask_2_graphics_52,x:203.3,y:199.6}).wait(1).to({graphics:mask_2_graphics_53,x:203.3,y:199.6}).wait(1).to({graphics:mask_2_graphics_54,x:203.2,y:199.6}).wait(1).to({graphics:mask_2_graphics_55,x:203.2,y:199.6}).wait(1).to({graphics:mask_2_graphics_56,x:203.2,y:199.5}).wait(1).to({graphics:mask_2_graphics_57,x:203.2,y:199.5}).wait(1).to({graphics:mask_2_graphics_58,x:203.2,y:199.5}).wait(1).to({graphics:mask_2_graphics_59,x:203.2,y:199.5}).wait(1).to({graphics:mask_2_graphics_60,x:203.2,y:199.4}).wait(1).to({graphics:mask_2_graphics_61,x:203.2,y:199.3}).wait(1).to({graphics:mask_2_graphics_62,x:203.2,y:199.2}).wait(1).to({graphics:mask_2_graphics_63,x:203.2,y:198.9}).wait(1).to({graphics:mask_2_graphics_64,x:203.2,y:198.6}).wait(1).to({graphics:mask_2_graphics_65,x:203.3,y:198.3}).wait(1).to({graphics:mask_2_graphics_66,x:203.3,y:197.8}).wait(1).to({graphics:mask_2_graphics_67,x:203.3,y:197.4}).wait(1).to({graphics:mask_2_graphics_68,x:203.3,y:196.8}).wait(1).to({graphics:mask_2_graphics_69,x:203.3,y:196.2}).wait(1).to({graphics:mask_2_graphics_70,x:203.3,y:195.6}).wait(1).to({graphics:mask_2_graphics_71,x:203.3,y:194.8}).wait(1).to({graphics:mask_2_graphics_72,x:203.3,y:194.1}).wait(1).to({graphics:mask_2_graphics_73,x:203.3,y:193.2}).wait(1).to({graphics:mask_2_graphics_74,x:203.3,y:192.3}).wait(1).to({graphics:mask_2_graphics_75,x:203.3,y:191.4}).wait(1).to({graphics:mask_2_graphics_76,x:203.3,y:190.4}).wait(1).to({graphics:mask_2_graphics_77,x:203.2,y:189.4}).wait(1).to({graphics:mask_2_graphics_78,x:203.2,y:188.3}).wait(1).to({graphics:mask_2_graphics_79,x:203.2,y:187.1}).wait(1).to({graphics:mask_2_graphics_80,x:203.1,y:185.9}).wait(1).to({graphics:mask_2_graphics_81,x:203.1,y:184.7}).wait(1).to({graphics:mask_2_graphics_82,x:203.1,y:183.4}).wait(1).to({graphics:mask_2_graphics_83,x:203.1,y:182}).wait(1).to({graphics:mask_2_graphics_84,x:203.1,y:180.7}).wait(1).to({graphics:mask_2_graphics_85,x:203.1,y:179.2}).wait(1).to({graphics:mask_2_graphics_86,x:203.1,y:177.8}).wait(1).to({graphics:mask_2_graphics_87,x:203.1,y:176.3}).wait(1).to({graphics:mask_2_graphics_88,x:203.1,y:174.7}).wait(1).to({graphics:mask_2_graphics_89,x:203.2,y:173.1}).wait(1).to({graphics:mask_2_graphics_90,x:203.2,y:171.5}).wait(1).to({graphics:mask_2_graphics_91,x:203.2,y:169.9}).wait(1).to({graphics:mask_2_graphics_92,x:203.2,y:168.2}).wait(1).to({graphics:mask_2_graphics_93,x:203.2,y:166.5}).wait(1).to({graphics:mask_2_graphics_94,x:203.2,y:164.7}).wait(1).to({graphics:mask_2_graphics_95,x:203.2,y:162.9}).wait(1).to({graphics:mask_2_graphics_96,x:203.2,y:161.1}).wait(1).to({graphics:mask_2_graphics_97,x:203.2,y:159.3}).wait(1).to({graphics:mask_2_graphics_98,x:203.2,y:157.5}).wait(1).to({graphics:mask_2_graphics_99,x:203.2,y:155.6}).wait(1).to({graphics:mask_2_graphics_100,x:203.2,y:153.7}).wait(1).to({graphics:mask_2_graphics_101,x:203.2,y:151.8}).wait(1).to({graphics:mask_2_graphics_102,x:203.1,y:149.9}).wait(273));

	// Layer 1
	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(25,1,1).p("Ar5DLQAzjACXiWQDjjjFBAAQFAAADjDjQAoAoAgArQAEAFAEAFQABABABABQAAABABAAQACADABACQABABAAABQABABABABQAEAGAEAFIBfDCQABADABAEQATA+AIBDQADAdACAf");
	this.shape_84.setTransform(277.7,234.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(25,1,1).p("AsFGDQAAlADijiQDkjjFAAAQFBAADjDjQAnAoAhAqQAEAFAEAFQAAABABABQABABABABQABACACADQABABAAAAQABABABABQAEAGAEAGIBfDCQABADABADQASA/AIBCQAEAeABAe");
	this.shape_85.setTransform(276.5,236.7);

	var maskedShapeInstanceList = [this.shape_84,this.shape_85];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_84}]},9).to({state:[{t:this.shape_85}]},15).wait(351));

	// Base
	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(275,275);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(375));

	// Background
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#F59E9E").ss(3,1,1).p("AMvQ5I5dAAMAAAghxIZdAAg");
	this.shape_86.setTransform(275,275,3.373,2.543);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_87.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_87},{t:this.shape_86}]}).wait(375));

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