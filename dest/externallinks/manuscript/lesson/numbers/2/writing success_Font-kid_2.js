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
	this.shape.graphics.f("#FFFFFF").s().p("EgP2AgxQigAAAAisQAAhaBWhLQI/nNJBsVQKnueAAorQAAlLjnjTQjmjUl7AAQjRAAjqCVQjrCShBCiQguB0hdAAIhRgSQhygvAAhvIAThTQBrkUFJjNQFAjMEuAAQH0AAFLEuQFhE+AAH5QAAH6mwLVQmhLDreMFIXUAAQCzAAAACwQAAC1izAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.4,-209.6,235,419.4);


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

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAZAAIgxAA");
	this.shape.setTransform(-1.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AgnAAIBPAA");
	this.shape_1.setTransform(0.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("Ag1AAIBrAA");
	this.shape_2.setTransform(1.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AhDAAICHAA");
	this.shape_3.setTransform(2.9,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AhRAAICjAA");
	this.shape_4.setTransform(4.3,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AheAAIC+AA");
	this.shape_5.setTransform(5.7,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AhsAAIDZAA");
	this.shape_6.setTransform(7,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("Ah5AAIDzAA");
	this.shape_7.setTransform(8.3,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AiGAAIENAA");
	this.shape_8.setTransform(9.6,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AiTAAIEnAA");
	this.shape_9.setTransform(10.9,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AifAAIE/AA");
	this.shape_10.setTransform(12.1,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AirAAIFXAA");
	this.shape_11.setTransform(13.3,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("Ai3AAIFvAA");
	this.shape_12.setTransform(14.5,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AjDAAIGHAA");
	this.shape_13.setTransform(15.7,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AjOAAIGdAA");
	this.shape_14.setTransform(16.8,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AjZAAIGzAA");
	this.shape_15.setTransform(17.9,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AjkAAIHJAA");
	this.shape_16.setTransform(19,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AjvAAIHfAA");
	this.shape_17.setTransform(20.1,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("Aj5AAIHzAA");
	this.shape_18.setTransform(21.1,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AkDAAIIHAA");
	this.shape_19.setTransform(22.1,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AkNAAIIbAA");
	this.shape_20.setTransform(23.1,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AkXAAIIvAA");
	this.shape_21.setTransform(24.1,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AkgAAIJBAA");
	this.shape_22.setTransform(25,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AkpAAIJTAA");
	this.shape_23.setTransform(25.9,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AkyAAIJlAA");
	this.shape_24.setTransform(26.8,0);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("Ak7AAIJ3AA");
	this.shape_25.setTransform(27.7,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AlEAAIKJAA");
	this.shape_26.setTransform(28.6,0);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AlMAAIKZAA");
	this.shape_27.setTransform(29.4,0);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AlUAAIKpAA");
	this.shape_28.setTransform(30.2,0);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AlbAAIK3AA");
	this.shape_29.setTransform(30.9,0);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AljAAILHAA");
	this.shape_30.setTransform(31.7,0);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AlqAAILVAA");
	this.shape_31.setTransform(32.4,0);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AlxAAILjAA");
	this.shape_32.setTransform(33.1,0);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("Al4AAILxAA");
	this.shape_33.setTransform(33.8,0);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("Al+AAIL9AA");
	this.shape_34.setTransform(34.4,0);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AmEAAIMKAA");
	this.shape_35.setTransform(35.1,0);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AmLAAIMXAA");
	this.shape_36.setTransform(35.7,0);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AmQAAIMhAA");
	this.shape_37.setTransform(36.2,0);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AmWAAIMtAA");
	this.shape_38.setTransform(36.8,0);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AmbAAIM3AA");
	this.shape_39.setTransform(37.3,0);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AmgAAINBAA");
	this.shape_40.setTransform(37.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).wait(1));

	// Layer 1
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1.1,0,1,1,-90,0,0,0.4,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:81.6},40,cjs.Ease.get(0.5)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.8,-12.1,21.9,24.3);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(21.2,-141.8,1,1,68.5,0,0,0.4,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-17.6,scaleX:1,scaleY:1,rotation:20.5,guide:{path:[21.1,-141.7,-16,-129.3,-45.3,-88.8,-54.7,-76,-60,-61.2]}},59).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgVpgglQNxjrMUHJQMUHJDqNxQDrNvnJMUQnJMVtvDrg");
	var mask_graphics_1 = new cjs.Graphics().p("EgV3ggZQNuj2MZG9QMaHAD2NtQD2Nsm+MaQm/MbtsD2g");
	var mask_graphics_2 = new cjs.Graphics().p("EgWEggNQNpkCMgG0QMgG0EBNqQEBNpmzMgQm1MhtpEBg");
	var mask_graphics_3 = new cjs.Graphics().p("EgWSggBQNmkNMlGpQMlGrENNmQENNmmpMlQmqMmtmENg");
	var mask_graphics_4 = new cjs.Graphics().p("A2g/0QNjkYMqGfQMrGfEYNjQEYNimfMrQmfMstiEYg");
	var mask_graphics_5 = new cjs.Graphics().p("A2u/mQNgkjMvGTQMwGWEkNfQEjNemUMwQmVMxteEjg");
	var mask_graphics_6 = new cjs.Graphics().p("A27/YQNbkuM1GJQM1GKEvNcQEuNamJM1QmKM2tbEvg");
	var mask_graphics_7 = new cjs.Graphics().p("A3J/JQNYk6M6F+QM6GAE5NYQE6NWl/M6Ql/M7tXE6g");
	var mask_graphics_8 = new cjs.Graphics().p("A3W+6QNTlFM/F0QM/F1FFNTQFENSlzM/Ql1NAtTFFg");
	var mask_graphics_9 = new cjs.Graphics().p("A3j+rQNOlPNEFoQNEFrFQNOQFPNOlpNEQlpNFtPFPg");
	var mask_graphics_10 = new cjs.Graphics().p("A3x+aQNLlbNIFeQNIFfFbNKQFbNKleNIQlfNJtKFbg");
	var mask_graphics_11 = new cjs.Graphics().p("A3++KQNGllNNFSQNNFVFlNFQFmNFlTNNQlUNOtGFlg");
	var mask_graphics_12 = new cjs.Graphics().p("A4L95QNBlwNRFIQNRFJFxNBQFwNAlINRQlINStBFxg");
	var mask_graphics_13 = new cjs.Graphics().p("A4Y9nQM8l7NVE8QNWE/F7M8QF8M7k+NVQk9NWs8F8g");
	var mask_graphics_14 = new cjs.Graphics().p("A4l9VQM3mGNZEyQNaEzGGM3QGGM3kyNYQkyNbs3GGg");
	var mask_graphics_15 = new cjs.Graphics().p("A4x9CQMxmRNdEmQNeEoGRMyQGQMykmNcQkoNfsxGQg");
	var mask_graphics_16 = new cjs.Graphics().p("A4+8vQMsmbNhEbQNhEcGcMtQGbMskbNgQkcNistGcg");
	var mask_graphics_17 = new cjs.Graphics().p("A5L8bQMnmmNlEPQNkESGmMnQGmMnkQNjQkRNmsnGmg");
	var mask_graphics_18 = new cjs.Graphics().p("A5X8HQMhmxNoEFQNoEGGxMhQGwMikFNmQkFNqsiGwg");
	var mask_graphics_19 = new cjs.Graphics().p("A5k7zQMcm6NrD4QNsD7G7McQG6Mcj5NqQj6NsscG7g");
	var mask_graphics_20 = new cjs.Graphics().p("A5w7eQMWnFNuDuQNvDvHFMWQHFMWjuNtQjvNwsVHFg");
	var mask_graphics_21 = new cjs.Graphics().p("A587IQMQnPNxDiQNyDjHPMQQHPMQjiNwQjjNzsQHQg");
	var mask_graphics_22 = new cjs.Graphics().p("A6I6yQMKnaN1DXQNzDYHaMKQHZMKjXNzQjXN2sKHZg");
	var mask_graphics_23 = new cjs.Graphics().p("A6U6cQMDnjN4DLQN2DMHkMEQHjMEjLN1QjMN5sEHjg");
	var mask_graphics_24 = new cjs.Graphics().p("A6g6FQL9ntN6C/QN5DBHuL9QHtL+jAN4QjAN7r9Htg");
	var mask_graphics_25 = new cjs.Graphics().p("A6s5tQL3n4N9C0QN7C1H3L3QH4L3i1N7Qi1N9r2H3g");
	var mask_graphics_26 = new cjs.Graphics().p("A635WQLwoBN+CoQN+CqIBLwQIBLwioN9QipOArwIBg");
	var mask_graphics_27 = new cjs.Graphics().p("A7D49QLpoLOBCcQOACeILLqQILLpidN/QieOCrpILg");
	var mask_graphics_28 = new cjs.Graphics().p("A7O4lQLioUODCRQOCCSIULjQIVLiiSOBQiROErjIUg");
	var mask_graphics_29 = new cjs.Graphics().p("A7a4LQLcoeOECFQOECGIeLcQIeLbiGODQiGOGrbIeg");
	var mask_graphics_30 = new cjs.Graphics().p("A7l3yQLUonOHB5QOFB7InLUQIoLVh6OEQh6OHrVIog");
	var mask_graphics_31 = new cjs.Graphics().p("A7w3YQLNowOIBtQOGBvIxLNQIxLNhuOGQhuOJrNIxg");
	var mask_graphics_32 = new cjs.Graphics().p("A7729QLFo6OKBiQOIBjI6LGQI6LFhiOIQhjOKrGI6g");
	var mask_graphics_33 = new cjs.Graphics().p("A8G2iQK+pDOKBWQOKBXJDK+QJDK/hWOIQhXOLq+JDg");
	var mask_graphics_34 = new cjs.Graphics().p("A8R2HQK3pMOLBKQOKBMJNK3QJMK2hLOKQhLOMq2JMg");
	var mask_graphics_35 = new cjs.Graphics().p("A8b1rQKupVONA+QOLBAJVKvQJVKvg/OKQg/ONqvJWg");
	var mask_graphics_36 = new cjs.Graphics().p("A8m1OQKnpfONAzQOMA0JeKnQJeKngzOLQgzOOqnJeg");
	var mask_graphics_37 = new cjs.Graphics().p("A8w0yQKepnOOAnQOMAoJnKfQJnKfgnOMQgnOOqfJng");
	var mask_graphics_38 = new cjs.Graphics().p("A870VQKXpvOOAbQONAcJvKXQJwKXgbOMQgcOPqXJvg");
	var mask_graphics_39 = new cjs.Graphics().p("A9Fz3QKPp4OOAPQONARJ4KOQJ4KPgPOMQgQOPqPJ4g");
	var mask_graphics_40 = new cjs.Graphics().p("A9PzZQKGqBOOAEQOOAFKAKGQKBKGgEONQgEOPqGKAg");
	var mask_graphics_41 = new cjs.Graphics().p("A9Zy6QJ+qJOOgJQONgHKJJ+QKJJ+AIOMQAIOPp+KJg");
	var mask_graphics_42 = new cjs.Graphics().p("A9jycQJ1qROOgUQONgTKSJ1QKRJ2AUOMQATOPp1KRg");
	var mask_graphics_43 = new cjs.Graphics().p("A9tx8QJtqaONggQONgfKZJtQKaJtAfOMQAgOOptKag");
	var mask_graphics_44 = new cjs.Graphics().p("A93xdQJkqhONgsQONgrKhJkQKhJkAsOMQArOOpkKhg");
	var mask_graphics_45 = new cjs.Graphics().p("A+Aw9QJbqpOMg4QOMg2KpJbQKpJbA4OLQA3ONpbKpg");
	var mask_graphics_46 = new cjs.Graphics().p("A+KwcQJTqxOLhEQOLhCKxJSQKxJSBDOKQBDONpSKxg");
	var mask_graphics_47 = new cjs.Graphics().p("A+Tv7QJJq5OLhQQOJhOK5JKQK5JJBPOJQBPOLpKK5g");
	var mask_graphics_48 = new cjs.Graphics().p("A+cvaQJArAOJhcQOJhaLAJBQLAJABbOHQBbOLpALAg");
	var mask_graphics_49 = new cjs.Graphics().p("A+lu5QI2rHOJhoQOHhlLII3QLHI3BnOGQBmOJo3LIg");
	var mask_graphics_50 = new cjs.Graphics().p("A+uuXQItrPOHhzQOGhxLPIuQLPItByOFQByOIotLPg");
	var mask_graphics_51 = new cjs.Graphics().p("A+3t1QIkrWOFh+QOEh9LXIkQLWIkB+ODQB+OGolLXg");
	var mask_graphics_52 = new cjs.Graphics().p("A/AtSQIbrdODiLQODiILdIaQLdIbCKOCQCKOEobLdg");
	var mask_graphics_53 = new cjs.Graphics().p("A/IsvQIRrkOBiWQOBiVLkIRQLkIRCVOAQCWODoRLkg");
	var mask_graphics_54 = new cjs.Graphics().p("A/RsMQIIrrN/ihQN/ihLrIIQLrIHCgN+QCiOAoILrg");
	var mask_graphics_55 = new cjs.Graphics().p("A/ZroQH+ryN9itQN8isLyH+QLyH9CsN8QCtN+n+Lxg");
	var mask_graphics_56 = new cjs.Graphics().p("A/hrEQH0r4N7i5QN6i4L4H0QL4H0C4N5QC5N8n0L4g");
	var mask_graphics_57 = new cjs.Graphics().p("A/pqgQHqr/N4jEQN4jDL/HqQL+HpDEN3QDEN5nqL/g");
	var mask_graphics_58 = new cjs.Graphics().p("A/xp8QHgsFN2jQQN1jOMFHgQMFHfDPN0QDPN3nfMFg");
	var mask_graphics_59 = new cjs.Graphics().p("A/4pXQHWsLNyjcQNzjaMLHWQMLHWDaNxQDbN0nVMLg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:135.8,y:18.2}).wait(1).to({graphics:mask_graphics_1,x:134.4,y:17.9}).wait(1).to({graphics:mask_graphics_2,x:133.1,y:17.6}).wait(1).to({graphics:mask_graphics_3,x:131.8,y:17.3}).wait(1).to({graphics:mask_graphics_4,x:130.5,y:17}).wait(1).to({graphics:mask_graphics_5,x:129.2,y:16.7}).wait(1).to({graphics:mask_graphics_6,x:127.9,y:16.3}).wait(1).to({graphics:mask_graphics_7,x:126.6,y:15.9}).wait(1).to({graphics:mask_graphics_8,x:125.4,y:15.5}).wait(1).to({graphics:mask_graphics_9,x:124.1,y:15.1}).wait(1).to({graphics:mask_graphics_10,x:122.8,y:14.7}).wait(1).to({graphics:mask_graphics_11,x:121.6,y:14.2}).wait(1).to({graphics:mask_graphics_12,x:120.3,y:13.8}).wait(1).to({graphics:mask_graphics_13,x:119.1,y:13.3}).wait(1).to({graphics:mask_graphics_14,x:117.8,y:12.8}).wait(1).to({graphics:mask_graphics_15,x:116.6,y:12.3}).wait(1).to({graphics:mask_graphics_16,x:115.4,y:11.8}).wait(1).to({graphics:mask_graphics_17,x:114.2,y:11.2}).wait(1).to({graphics:mask_graphics_18,x:113,y:10.7}).wait(1).to({graphics:mask_graphics_19,x:111.8,y:10.1}).wait(1).to({graphics:mask_graphics_20,x:110.6,y:9.5}).wait(1).to({graphics:mask_graphics_21,x:109.4,y:8.9}).wait(1).to({graphics:mask_graphics_22,x:108.3,y:8.3}).wait(1).to({graphics:mask_graphics_23,x:107.1,y:7.6}).wait(1).to({graphics:mask_graphics_24,x:106,y:7}).wait(1).to({graphics:mask_graphics_25,x:104.8,y:6.3}).wait(1).to({graphics:mask_graphics_26,x:103.7,y:5.6}).wait(1).to({graphics:mask_graphics_27,x:102.6,y:4.9}).wait(1).to({graphics:mask_graphics_28,x:101.5,y:4.2}).wait(1).to({graphics:mask_graphics_29,x:100.4,y:3.5}).wait(1).to({graphics:mask_graphics_30,x:99.3,y:2.7}).wait(1).to({graphics:mask_graphics_31,x:98.3,y:1.9}).wait(1).to({graphics:mask_graphics_32,x:97.2,y:1.2}).wait(1).to({graphics:mask_graphics_33,x:96.2,y:0.4}).wait(1).to({graphics:mask_graphics_34,x:95.2,y:-0.5}).wait(1).to({graphics:mask_graphics_35,x:94.2,y:-1.3}).wait(1).to({graphics:mask_graphics_36,x:93.2,y:-2.1}).wait(1).to({graphics:mask_graphics_37,x:92.2,y:-3}).wait(1).to({graphics:mask_graphics_38,x:91.2,y:-3.9}).wait(1).to({graphics:mask_graphics_39,x:90.3,y:-4.8}).wait(1).to({graphics:mask_graphics_40,x:89.4,y:-5.7}).wait(1).to({graphics:mask_graphics_41,x:88.5,y:-6.7}).wait(1).to({graphics:mask_graphics_42,x:87.6,y:-7.6}).wait(1).to({graphics:mask_graphics_43,x:86.7,y:-8.6}).wait(1).to({graphics:mask_graphics_44,x:85.8,y:-9.6}).wait(1).to({graphics:mask_graphics_45,x:85,y:-10.6}).wait(1).to({graphics:mask_graphics_46,x:84.2,y:-11.6}).wait(1).to({graphics:mask_graphics_47,x:83.4,y:-12.6}).wait(1).to({graphics:mask_graphics_48,x:82.6,y:-13.7}).wait(1).to({graphics:mask_graphics_49,x:81.8,y:-14.7}).wait(1).to({graphics:mask_graphics_50,x:81,y:-15.8}).wait(1).to({graphics:mask_graphics_51,x:80.3,y:-16.9}).wait(1).to({graphics:mask_graphics_52,x:79.6,y:-18}).wait(1).to({graphics:mask_graphics_53,x:78.9,y:-19.1}).wait(1).to({graphics:mask_graphics_54,x:78.2,y:-20.2}).wait(1).to({graphics:mask_graphics_55,x:77.5,y:-21.3}).wait(1).to({graphics:mask_graphics_56,x:76.8,y:-22.5}).wait(1).to({graphics:mask_graphics_57,x:76.2,y:-23.7}).wait(1).to({graphics:mask_graphics_58,x:75.6,y:-24.8}).wait(1).to({graphics:mask_graphics_59,x:74.9,y:-26.1}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("ADkTZQoIlohjpeQhkpdEnmVQElmVFBhk");
	this.shape.setTransform(-25.7,-15.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.8,-153,28.3,264.3);


(lib.honeyflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.honeybee();
	this.instance.parent = this;
	this.instance.setTransform(38.4,-170.9,0.422,0.422,0,0,0,-0.1,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQB8IgNgDIgQgFIgLgGIgLgGIgJgHIgIgGIgGgGIgEgHIgGgHIgEgHIgGgHIgDgHIgBgIIgEgHIgBgHIgBgHIgBgHIgBgIIgBgHIABgIIABgHIACgIIABgHIAEgJIABgHIAEgJIAEgIIAGgJIAHgIIAJgJIALgJIAQgKIAQgIIAWgFIABABQALAAAKgDIANABIANAEIAQAFIANAFIAJAHIAIAGIAJAGIAGAHIAGAHIAGAGIAEAHIADAHIAEAIIADAHIACAHIABAHIADAHIgBAIIABAIIABAGIgBAIIABAHIgCAIIgBAIIgEAIIgBAIIgEAIIgGAJIgHAIIgGAIIgGAJIgOAJIgOALIgTAHIgWAGIgVAAIgNAAg");
	this.shape.setTransform(22.4,-143.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-215.3,105.5,84.5);


// stage content:
(lib.writingsuccess_Fontkid_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_463 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(463).call(this.frame_463).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(172.1,144.1,0.999,0.999,8.5,0,0,22.4,-144);
	this.instance._off = true;

	this.instance_1 = new lib.honeybee();
	this.instance_1.parent = this;
	this.instance_1.setTransform(378,466.1,0.421,0.421,0,-8.5,171.5,-38,64);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:8.3,guide:{path:[172.5,144.3,206.2,82.7,267.7,82.1,282,81.9,294.3,84.3]}},50).to({guide:{path:[294.3,84.2,335.2,92.2,353.3,128.3,360.9,143.4,363.5,160.1]}},46).to({scaleX:1,scaleY:1,rotation:8.5,guide:{path:[363.4,160.3,368.8,195.5,351.8,237.6,326.7,299.9,286.5,347.6,246.4,395.2,220.5,425.2,198.2,451,185.4,465.1]}},159).wait(10).to({rotation:0,skewX:-8.5,skewY:171.5,x:188.2,y:466.1},0).to({x:378},118).to({_off:true},13).wait(59));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(405).to({_off:false},0).to({regX:-39.3,regY:65.7,guide:{path:[378,466,452,414.1,469.7,474.2,487.3,534.4,473.1,556.3,458.9,578.2,491.2,590.6,523.4,603,529,648.9]}},58).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(182.3,468.6,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},255).wait(10).to({_off:false,x:377.5,y:465.9},0).to({_off:true},118).wait(72));

	// Layer 17
	this.instance_2 = new lib.ar2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(367.1,404,1,1,0,0,0,81.1,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(274).to({_off:false},0).wait(190));

	// Layer 16
	this.instance_3 = new lib.ar1("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(265,112.2,1,1,0,-90,90,16.1,-8.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(455));

	// Layer 15
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AAYAAIgvAA");
	this.shape_1.setTransform(188.1,466.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("AgfAAIA/AA");
	this.shape_2.setTransform(188.9,466.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("AgnAAIBPAA");
	this.shape_3.setTransform(189.7,466.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("AgvAAIBfAA");
	this.shape_4.setTransform(190.5,466.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(25,1,1).p("Ag3AAIBvAA");
	this.shape_5.setTransform(191.3,466.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(25,1,1).p("Ag/AAIB+AA");
	this.shape_6.setTransform(192.1,466.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(25,1,1).p("AhHAAICPAA");
	this.shape_7.setTransform(192.9,466.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(25,1,1).p("AhOAAICeAA");
	this.shape_8.setTransform(193.7,466.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(25,1,1).p("AhWAAICtAA");
	this.shape_9.setTransform(194.4,466.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(25,1,1).p("AheAAIC9AA");
	this.shape_10.setTransform(195.2,466.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(25,1,1).p("AhmAAIDNAA");
	this.shape_11.setTransform(196,466.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(25,1,1).p("AhuAAIDdAA");
	this.shape_12.setTransform(196.8,466.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(25,1,1).p("Ah2AAIDtAA");
	this.shape_13.setTransform(197.6,466.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(25,1,1).p("Ah+AAID9AA");
	this.shape_14.setTransform(198.4,466.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(25,1,1).p("AiGAAIENAA");
	this.shape_15.setTransform(199.2,466.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(25,1,1).p("AiOAAIEdAA");
	this.shape_16.setTransform(200,466.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(25,1,1).p("AiWAAIEtAA");
	this.shape_17.setTransform(200.8,466.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(25,1,1).p("AieAAIE9AA");
	this.shape_18.setTransform(201.6,466.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(25,1,1).p("AimAAIFNAA");
	this.shape_19.setTransform(202.4,466.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(25,1,1).p("AiuAAIFdAA");
	this.shape_20.setTransform(203.2,466.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(25,1,1).p("Ai2AAIFtAA");
	this.shape_21.setTransform(204,466.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(25,1,1).p("Ai+AAIF9AA");
	this.shape_22.setTransform(204.8,466.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(25,1,1).p("AjGAAIGMAA");
	this.shape_23.setTransform(205.6,466.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(25,1,1).p("AjOAAIGdAA");
	this.shape_24.setTransform(206.4,466.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(25,1,1).p("AjVAAIGsAA");
	this.shape_25.setTransform(207.2,466.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(25,1,1).p("AjeAAIG9AA");
	this.shape_26.setTransform(208,466.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(25,1,1).p("AjlAAIHLAA");
	this.shape_27.setTransform(208.7,466.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(25,1,1).p("AjtAAIHbAA");
	this.shape_28.setTransform(209.5,466.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(25,1,1).p("Aj1AAIHrAA");
	this.shape_29.setTransform(210.3,466.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(25,1,1).p("Aj9AAIH7AA");
	this.shape_30.setTransform(211.1,466.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(25,1,1).p("AkFAAIILAA");
	this.shape_31.setTransform(211.9,466.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(25,1,1).p("AkNAAIIbAA");
	this.shape_32.setTransform(212.7,466.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(25,1,1).p("AkVAAIIrAA");
	this.shape_33.setTransform(213.5,466.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(25,1,1).p("AkdAAII7AA");
	this.shape_34.setTransform(214.3,466.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(25,1,1).p("AklAAIJLAA");
	this.shape_35.setTransform(215.1,466.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(25,1,1).p("AktAAIJbAA");
	this.shape_36.setTransform(215.9,466.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(25,1,1).p("Ak1AAIJrAA");
	this.shape_37.setTransform(216.7,466.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(25,1,1).p("Ak9AAIJ7AA");
	this.shape_38.setTransform(217.5,466.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(25,1,1).p("AlFAAIKLAA");
	this.shape_39.setTransform(218.3,466.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(25,1,1).p("AlNAAIKbAA");
	this.shape_40.setTransform(219.1,466.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(25,1,1).p("AlVAAIKrAA");
	this.shape_41.setTransform(219.9,466.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(25,1,1).p("AldAAIK6AA");
	this.shape_42.setTransform(220.7,466.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(25,1,1).p("AllAAILLAA");
	this.shape_43.setTransform(221.5,466.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(25,1,1).p("AltAAILbAA");
	this.shape_44.setTransform(222.3,466.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(25,1,1).p("Al0AAILpAA");
	this.shape_45.setTransform(223.1,466.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(25,1,1).p("Al8AAIL5AA");
	this.shape_46.setTransform(223.8,466.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(25,1,1).p("AmEAAIMJAA");
	this.shape_47.setTransform(224.6,466.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(25,1,1).p("AmMAAIMZAA");
	this.shape_48.setTransform(225.4,466.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(25,1,1).p("AmUAAIMpAA");
	this.shape_49.setTransform(226.2,466.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(25,1,1).p("AmcAAIM5AA");
	this.shape_50.setTransform(227,466.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(25,1,1).p("AmkAAINJAA");
	this.shape_51.setTransform(227.8,466.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(25,1,1).p("AmsAAINZAA");
	this.shape_52.setTransform(228.6,466.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(25,1,1).p("Am0AAINpAA");
	this.shape_53.setTransform(229.4,466.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(25,1,1).p("Am8AAIN5AA");
	this.shape_54.setTransform(230.2,466.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(25,1,1).p("AnEAAIOJAA");
	this.shape_55.setTransform(231,466.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(25,1,1).p("AnMAAIOZAA");
	this.shape_56.setTransform(231.8,466.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(25,1,1).p("AnUAAIOpAA");
	this.shape_57.setTransform(232.6,466.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(25,1,1).p("AncAAIO5AA");
	this.shape_58.setTransform(233.4,466.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(25,1,1).p("AnkAAIPJAA");
	this.shape_59.setTransform(234.2,466.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(25,1,1).p("AnsAAIPZAA");
	this.shape_60.setTransform(235,466.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(25,1,1).p("An0AAIPpAA");
	this.shape_61.setTransform(235.8,466.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(25,1,1).p("An7AAIP3AA");
	this.shape_62.setTransform(236.6,466.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(25,1,1).p("AoEAAIQJAA");
	this.shape_63.setTransform(237.4,466.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(25,1,1).p("AoMAAIQZAA");
	this.shape_64.setTransform(238.2,466.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(25,1,1).p("AoTAAIQnAA");
	this.shape_65.setTransform(238.9,466.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(25,1,1).p("AobAAIQ3AA");
	this.shape_66.setTransform(239.7,466.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(25,1,1).p("AojAAIRHAA");
	this.shape_67.setTransform(240.5,466.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(25,1,1).p("AorAAIRXAA");
	this.shape_68.setTransform(241.3,466.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(25,1,1).p("AozAAIRnAA");
	this.shape_69.setTransform(242.1,466.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(25,1,1).p("Ao7AAIR3AA");
	this.shape_70.setTransform(242.9,466.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(25,1,1).p("ApDAAISHAA");
	this.shape_71.setTransform(243.7,466.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(25,1,1).p("ApLAAISXAA");
	this.shape_72.setTransform(244.5,466.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(25,1,1).p("ApTAAISnAA");
	this.shape_73.setTransform(245.3,466.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(25,1,1).p("ApbAAIS3AA");
	this.shape_74.setTransform(246.1,466.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(25,1,1).p("ApjAAITHAA");
	this.shape_75.setTransform(246.9,466.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(25,1,1).p("AprAAITXAA");
	this.shape_76.setTransform(247.7,466.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(25,1,1).p("ApzAAITnAA");
	this.shape_77.setTransform(248.5,466.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(25,1,1).p("Ap7AAIT3AA");
	this.shape_78.setTransform(249.3,466.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(25,1,1).p("AqDAAIUHAA");
	this.shape_79.setTransform(250.1,466.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(25,1,1).p("AqLAAIUXAA");
	this.shape_80.setTransform(250.9,466.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(25,1,1).p("AqTAAIUnAA");
	this.shape_81.setTransform(251.7,466.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(25,1,1).p("AqbAAIU3AA");
	this.shape_82.setTransform(252.5,466.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(25,1,1).p("AqjAAIVHAA");
	this.shape_83.setTransform(253.3,466.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(25,1,1).p("AqqAAIVVAA");
	this.shape_84.setTransform(254,466.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(25,1,1).p("AqyAAIVlAA");
	this.shape_85.setTransform(254.8,466.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(25,1,1).p("Aq6AAIV1AA");
	this.shape_86.setTransform(255.6,466.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(25,1,1).p("ArCAAIWFAA");
	this.shape_87.setTransform(256.4,466.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(25,1,1).p("ArKAAIWVAA");
	this.shape_88.setTransform(257.2,466.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(25,1,1).p("ArSAAIWlAA");
	this.shape_89.setTransform(258,466.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(25,1,1).p("AraAAIW1AA");
	this.shape_90.setTransform(258.8,466.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(25,1,1).p("AriAAIXFAA");
	this.shape_91.setTransform(259.6,466.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(25,1,1).p("ArqAAIXVAA");
	this.shape_92.setTransform(260.4,466.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(25,1,1).p("AryAAIXlAA");
	this.shape_93.setTransform(261.2,466.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(25,1,1).p("Ar6AAIX1AA");
	this.shape_94.setTransform(262,466.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(25,1,1).p("AsCAAIYFAA");
	this.shape_95.setTransform(262.8,466.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(25,1,1).p("AsKAAIYVAA");
	this.shape_96.setTransform(263.6,466.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(25,1,1).p("AsSAAIYlAA");
	this.shape_97.setTransform(264.4,466.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(25,1,1).p("AsZAAIY0AA");
	this.shape_98.setTransform(265.2,466.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(25,1,1).p("AsiAAIZFAA");
	this.shape_99.setTransform(266,466.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(25,1,1).p("AsqAAIZVAA");
	this.shape_100.setTransform(266.8,466.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(25,1,1).p("AsxAAIZkAA");
	this.shape_101.setTransform(267.6,466.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(25,1,1).p("As6AAIZ0AA");
	this.shape_102.setTransform(268.4,466.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(25,1,1).p("AtBAAIaDAA");
	this.shape_103.setTransform(269.1,466.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(25,1,1).p("AtJAAIaTAA");
	this.shape_104.setTransform(269.9,466.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(25,1,1).p("AtRAAIajAA");
	this.shape_105.setTransform(270.7,466.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(25,1,1).p("AtZAAIazAA");
	this.shape_106.setTransform(271.5,466.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(25,1,1).p("AthAAIbDAA");
	this.shape_107.setTransform(272.3,466.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(25,1,1).p("AtpAAIbTAA");
	this.shape_108.setTransform(273.1,466.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(25,1,1).p("AtxAAIbjAA");
	this.shape_109.setTransform(273.9,466.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(25,1,1).p("At5AAIbzAA");
	this.shape_110.setTransform(274.7,466.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(25,1,1).p("AuBAAIcDAA");
	this.shape_111.setTransform(275.5,466.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(25,1,1).p("AuJAAIcTAA");
	this.shape_112.setTransform(276.3,466.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(25,1,1).p("AuRAAIcjAA");
	this.shape_113.setTransform(277.1,466.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(25,1,1).p("AuZAAIczAA");
	this.shape_114.setTransform(277.9,466.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(25,1,1).p("AuhAAIdDAA");
	this.shape_115.setTransform(278.7,466.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(25,1,1).p("AupAAIdTAA");
	this.shape_116.setTransform(279.5,466.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(25,1,1).p("AuxAAIdjAA");
	this.shape_117.setTransform(280.3,466.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(25,1,1).p("Au4AAIdyAA");
	this.shape_118.setTransform(281.1,466.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(25,1,1).p("APBAAI+CAA");
	this.shape_119.setTransform(281.9,466.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},274).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).wait(72));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_181 = new cjs.Graphics().p("AIIOMIEsl2ISDOeIktF2g");
	var mask_graphics_182 = new cjs.Graphics().p("ArekKIE7mIISCOdIk8GIg");
	var mask_graphics_183 = new cjs.Graphics().p("ArlkAIFImbISDOdIlLGag");
	var mask_graphics_184 = new cjs.Graphics().p("Arsj3IFWmtISDOeIlZGrg");
	var mask_graphics_185 = new cjs.Graphics().p("ArzjuIFkm/ISDOeIloG9g");
	var mask_graphics_186 = new cjs.Graphics().p("Ar7jlIFznRISEOeIl4HPg");
	var mask_graphics_187 = new cjs.Graphics().p("AsBjcIF/nkISFOfImHHig");
	var mask_graphics_188 = new cjs.Graphics().p("AsJjSIGOn3ISFOgImVHzg");
	var mask_graphics_189 = new cjs.Graphics().p("AsQjJIGcoJISFOgImkIFg");
	var mask_graphics_190 = new cjs.Graphics().p("AsXjAIGqobISFOgImyIXg");
	var mask_graphics_191 = new cjs.Graphics().p("Asei3IG3otISGOhInBIog");
	var mask_graphics_192 = new cjs.Graphics().p("AsliuIHFo/ISHOhInRI6g");
	var mask_graphics_193 = new cjs.Graphics().p("AstilIHUpRISHOhIngJMg");
	var mask_graphics_194 = new cjs.Graphics().p("As0icIHipjISHOiInvJdg");
	var mask_graphics_195 = new cjs.Graphics().p("As7iTIHwp1ISHOiIn9Jvg");
	var mask_graphics_196 = new cjs.Graphics().p("AtCiKIH9qHISIOjIoMKAg");
	var mask_graphics_197 = new cjs.Graphics().p("AtJiAIILqaISJOjIobKSg");
	var mask_graphics_198 = new cjs.Graphics().p("AtRh3IIaqsISJOjIoqKkg");
	var mask_graphics_199 = new cjs.Graphics().p("AtYhuIInq+ISKOjIo5K2g");
	var mask_graphics_200 = new cjs.Graphics().p("AtfhlII1rQISKOkIpILHg");
	var mask_graphics_201 = new cjs.Graphics().p("AtmhcIJDriISKOkIpWLZg");
	var mask_graphics_202 = new cjs.Graphics().p("AtthSIJRr1ISLOkIpmLrg");
	var mask_graphics_203 = new cjs.Graphics().p("At0hJIJesHISMOlIp1L8g");
	var mask_graphics_204 = new cjs.Graphics().p("At8hAIJtsZISMOlIqEMOg");
	var mask_graphics_205 = new cjs.Graphics().p("AuDg3IJ7srISMOlIqTMgg");
	var mask_graphics_206 = new cjs.Graphics().p("AuKguIKJs9ISMOmIqhMxg");
	var mask_graphics_207 = new cjs.Graphics().p("AuRglIKXtPISMOmIqwNDg");
	var mask_graphics_208 = new cjs.Graphics().p("AuZgbIKltiISOOmIq/NVg");
	var mask_graphics_209 = new cjs.Graphics().p("AuggSIKzt0ISOOnIrONmg");
	var mask_graphics_210 = new cjs.Graphics().p("AungJILBuGISOOnIrdN4g");
	var mask_graphics_211 = new cjs.Graphics().p("AuuAAILPuYISOOnIrsOKg");
	var mask_graphics_212 = new cjs.Graphics().p("Au1AIILcupISPOoIr7Obg");
	var mask_graphics_213 = new cjs.Graphics().p("Au9ASILru8ISQOpIsKOsg");
	var mask_graphics_214 = new cjs.Graphics().p("AvEAbIL5vOISQOpIsZO+g");
	var mask_graphics_215 = new cjs.Graphics().p("AvLAkIMHvgISQOqIsnPPg");
	var mask_graphics_216 = new cjs.Graphics().p("AvSAtIMUvyISROqIs2Phg");
	var mask_graphics_217 = new cjs.Graphics().p("AvZA2IMiwEISROqItFPzg");
	var mask_graphics_218 = new cjs.Graphics().p("AvhA/IMxwWISSOrItVQEg");
	var mask_graphics_219 = new cjs.Graphics().p("AvoBJIM/wpISSOrItjQWg");
	var mask_graphics_220 = new cjs.Graphics().p("AvvBRINMw6ISTOrItyQog");
	var mask_graphics_221 = new cjs.Graphics().p("Av2BbINaxNISTOrIuBQ6g");
	var mask_graphics_222 = new cjs.Graphics().p("Av9BkINpxfISSOsIuQRLg");
	var mask_graphics_223 = new cjs.Graphics().p("AwEBtIN2xxISTOsIueRdg");
	var mask_graphics_224 = new cjs.Graphics().p("AwLB2IOEyDISTOsIutRvg");
	var mask_graphics_225 = new cjs.Graphics().p("AwTB/IOTyVISTOtIu7SAg");
	var mask_graphics_226 = new cjs.Graphics().p("AwaCIIOgynISVOtIvLSSg");
	var mask_graphics_227 = new cjs.Graphics().p("AwhCSIOuy6ISVOtIvaSkg");
	var mask_graphics_228 = new cjs.Graphics().p("AwoCbIO7zMISWOuIvpS1g");
	var mask_graphics_229 = new cjs.Graphics().p("AwvCkIPKzeISVOuIv4THg");
	var mask_graphics_230 = new cjs.Graphics().p("Aw3CtIPZzwISVOuIwGTZg");
	var mask_graphics_231 = new cjs.Graphics().p("Aw9C2IPl0CISWOvIwVTqg");
	var mask_graphics_232 = new cjs.Graphics().p("AxFC/IP00UISXOvIwlT8g");
	var mask_graphics_233 = new cjs.Graphics().p("AxMDIIQB0mISYOvIw0UOg");
	var mask_graphics_234 = new cjs.Graphics().p("AxTDRIQP04ISYOvIxCUgg");
	var mask_graphics_235 = new cjs.Graphics().p("AxbDbIQe1LISYOvIxRUyg");
	var mask_graphics_236 = new cjs.Graphics().p("AxhDkIQr1dISYOwIxfVDg");
	var mask_graphics_237 = new cjs.Graphics().p("AxpDtIQ61vISZOwIxuVVg");
	var mask_graphics_238 = new cjs.Graphics().p("AxwD2IRI2BISZOwIx9Vng");
	var mask_graphics_239 = new cjs.Graphics().p("Ax3D/IRV2TISaOxIyMV4g");
	var mask_graphics_240 = new cjs.Graphics().p("Ax+EIIRj2lISaOxIybWKg");
	var mask_graphics_241 = new cjs.Graphics().p("AyFESIRw24ISbOyIypWbg");
	var mask_graphics_242 = new cjs.Graphics().p("AyNEbIR/3KIScOyIy5Wtg");
	var mask_graphics_243 = new cjs.Graphics().p("AyUEkISN3cIScOyIzIW/g");
	var mask_graphics_244 = new cjs.Graphics().p("AybEtISb3uIScOzIzXXQg");
	var mask_graphics_245 = new cjs.Graphics().p("AyiE2ISo4AISdOzIzlXig");
	var mask_graphics_246 = new cjs.Graphics().p("AypFAIS24TISdOzIz0X0g");
	var mask_graphics_247 = new cjs.Graphics().p("AyxFJITE4lISeOzI0CYGg");
	var mask_graphics_248 = new cjs.Graphics().p("Ay4FSITS43ISfOzI0SYYg");
	var mask_graphics_249 = new cjs.Graphics().p("Ay/FbITf5JISgO0I0hYpg");
	var mask_graphics_250 = new cjs.Graphics().p("AzGFkITt5bISgO0I0wY7g");
	var mask_graphics_251 = new cjs.Graphics().p("AzNFtIT75tISgO0I0/ZNg");
	var mask_graphics_252 = new cjs.Graphics().p("AzVF3IUK6AISgO1I1OZeg");
	var mask_graphics_253 = new cjs.Graphics().p("AzcGAIUY6SIShO1I1dZwg");
	var mask_graphics_254 = new cjs.Graphics().p("AzjGJIUl6kISiO1I1saCg");
	var mask_graphics_255 = new cjs.Graphics().p("AzqGSIUz62ISiO2I16aTg");
	var mask_graphics_256 = new cjs.Graphics().p("AzxGbIVB7JISiO3I2Jamg");
	var mask_graphics_257 = new cjs.Graphics().p("Az5GkIVP7bISjO3I2Ya4g");
	var mask_graphics_258 = new cjs.Graphics().p("A0AGtIVe7tISjO4I2obJg");
	var mask_graphics_259 = new cjs.Graphics().p("A0HG2IVs7/ISjO4I22bbg");
	var mask_graphics_260 = new cjs.Graphics().p("A0OHAIV58SISkO4I3Fbtg");
	var mask_graphics_261 = new cjs.Graphics().p("A0VHJIWH8kISkO5I3Ub+g");
	var mask_graphics_262 = new cjs.Graphics().p("A0pHbIW69MISZOvI3tc1g");
	var mask_graphics_263 = new cjs.Graphics().p("A09HvIXt93ISNOnI4Fdqg");
	var mask_graphics_264 = new cjs.Graphics().p("ArraiIYf+hISCOdI4feig");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(181).to({graphics:mask_graphics_181,x:197.5,y:183.4}).wait(1).to({graphics:mask_graphics_182,x:321.4,y:302.7}).wait(1).to({graphics:mask_graphics_183,x:320.7,y:303.6}).wait(1).to({graphics:mask_graphics_184,x:320,y:304.5}).wait(1).to({graphics:mask_graphics_185,x:319.3,y:305.4}).wait(1).to({graphics:mask_graphics_186,x:318.6,y:306.3}).wait(1).to({graphics:mask_graphics_187,x:317.9,y:307.3}).wait(1).to({graphics:mask_graphics_188,x:317.1,y:308.2}).wait(1).to({graphics:mask_graphics_189,x:316.4,y:309.1}).wait(1).to({graphics:mask_graphics_190,x:315.7,y:310}).wait(1).to({graphics:mask_graphics_191,x:315,y:310.9}).wait(1).to({graphics:mask_graphics_192,x:314.3,y:311.8}).wait(1).to({graphics:mask_graphics_193,x:313.5,y:312.7}).wait(1).to({graphics:mask_graphics_194,x:312.8,y:313.6}).wait(1).to({graphics:mask_graphics_195,x:312.1,y:314.5}).wait(1).to({graphics:mask_graphics_196,x:311.4,y:315.4}).wait(1).to({graphics:mask_graphics_197,x:310.7,y:316.3}).wait(1).to({graphics:mask_graphics_198,x:309.9,y:317.2}).wait(1).to({graphics:mask_graphics_199,x:309.2,y:318.1}).wait(1).to({graphics:mask_graphics_200,x:308.5,y:319}).wait(1).to({graphics:mask_graphics_201,x:307.8,y:319.9}).wait(1).to({graphics:mask_graphics_202,x:307.1,y:320.8}).wait(1).to({graphics:mask_graphics_203,x:306.4,y:321.7}).wait(1).to({graphics:mask_graphics_204,x:305.6,y:322.6}).wait(1).to({graphics:mask_graphics_205,x:304.9,y:323.5}).wait(1).to({graphics:mask_graphics_206,x:304.2,y:324.4}).wait(1).to({graphics:mask_graphics_207,x:303.5,y:325.3}).wait(1).to({graphics:mask_graphics_208,x:302.8,y:326.2}).wait(1).to({graphics:mask_graphics_209,x:302,y:327.1}).wait(1).to({graphics:mask_graphics_210,x:301.3,y:328}).wait(1).to({graphics:mask_graphics_211,x:300.6,y:328.9}).wait(1).to({graphics:mask_graphics_212,x:299.9,y:329.8}).wait(1).to({graphics:mask_graphics_213,x:299.2,y:330.7}).wait(1).to({graphics:mask_graphics_214,x:298.4,y:331.6}).wait(1).to({graphics:mask_graphics_215,x:297.7,y:332.5}).wait(1).to({graphics:mask_graphics_216,x:297,y:333.4}).wait(1).to({graphics:mask_graphics_217,x:296.3,y:334.3}).wait(1).to({graphics:mask_graphics_218,x:295.6,y:335.2}).wait(1).to({graphics:mask_graphics_219,x:294.8,y:336.1}).wait(1).to({graphics:mask_graphics_220,x:294.1,y:337}).wait(1).to({graphics:mask_graphics_221,x:293.4,y:338}).wait(1).to({graphics:mask_graphics_222,x:292.7,y:338.9}).wait(1).to({graphics:mask_graphics_223,x:292,y:339.8}).wait(1).to({graphics:mask_graphics_224,x:291.2,y:340.7}).wait(1).to({graphics:mask_graphics_225,x:290.5,y:341.6}).wait(1).to({graphics:mask_graphics_226,x:289.8,y:342.5}).wait(1).to({graphics:mask_graphics_227,x:289.1,y:343.4}).wait(1).to({graphics:mask_graphics_228,x:288.4,y:344.3}).wait(1).to({graphics:mask_graphics_229,x:287.6,y:345.2}).wait(1).to({graphics:mask_graphics_230,x:286.9,y:346.1}).wait(1).to({graphics:mask_graphics_231,x:286.2,y:347}).wait(1).to({graphics:mask_graphics_232,x:285.5,y:347.9}).wait(1).to({graphics:mask_graphics_233,x:284.8,y:348.8}).wait(1).to({graphics:mask_graphics_234,x:284,y:349.7}).wait(1).to({graphics:mask_graphics_235,x:283.3,y:350.6}).wait(1).to({graphics:mask_graphics_236,x:282.6,y:351.5}).wait(1).to({graphics:mask_graphics_237,x:281.9,y:352.4}).wait(1).to({graphics:mask_graphics_238,x:281.2,y:353.3}).wait(1).to({graphics:mask_graphics_239,x:280.4,y:354.2}).wait(1).to({graphics:mask_graphics_240,x:279.7,y:355.1}).wait(1).to({graphics:mask_graphics_241,x:279,y:356}).wait(1).to({graphics:mask_graphics_242,x:278.3,y:356.9}).wait(1).to({graphics:mask_graphics_243,x:277.6,y:357.8}).wait(1).to({graphics:mask_graphics_244,x:276.9,y:358.7}).wait(1).to({graphics:mask_graphics_245,x:276.1,y:359.6}).wait(1).to({graphics:mask_graphics_246,x:275.4,y:360.5}).wait(1).to({graphics:mask_graphics_247,x:274.7,y:361.4}).wait(1).to({graphics:mask_graphics_248,x:274,y:362.3}).wait(1).to({graphics:mask_graphics_249,x:273.3,y:363.2}).wait(1).to({graphics:mask_graphics_250,x:272.5,y:364.1}).wait(1).to({graphics:mask_graphics_251,x:271.8,y:365}).wait(1).to({graphics:mask_graphics_252,x:271.1,y:365.9}).wait(1).to({graphics:mask_graphics_253,x:270.4,y:366.8}).wait(1).to({graphics:mask_graphics_254,x:269.7,y:367.7}).wait(1).to({graphics:mask_graphics_255,x:268.9,y:368.6}).wait(1).to({graphics:mask_graphics_256,x:268.2,y:369.5}).wait(1).to({graphics:mask_graphics_257,x:267.5,y:370.4}).wait(1).to({graphics:mask_graphics_258,x:266.8,y:371.3}).wait(1).to({graphics:mask_graphics_259,x:266.1,y:372.2}).wait(1).to({graphics:mask_graphics_260,x:265.4,y:373.1}).wait(1).to({graphics:mask_graphics_261,x:264.6,y:374}).wait(1).to({graphics:mask_graphics_262,x:262.7,y:376.3}).wait(1).to({graphics:mask_graphics_263,x:260.7,y:378.6}).wait(1).to({graphics:mask_graphics_264,x:197.4,y:262.4}).wait(200));

	// Layer 3
	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(25,1,1).p("AvD0EQFRpyJsgHQJsgGDrHVQDsHWj7JvQj6JumDHQQmCHQmLG+QiOCghoB7");
	this.shape_120.setTransform(268.4,273.8);
	this.shape_120._off = true;

	var maskedShapeInstanceList = [this.shape_120];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_120).wait(181).to({_off:false},0).wait(283));

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_105 = new cjs.Graphics().p("Eg1pAYFQAx2NQRvLQQOvKWNAwQWOAxPMQPQPKQPgxWOg");
	var mask_1_graphics_106 = new cjs.Graphics().p("Eg1oAWoQBL2NQiu4QQhu3WLBLQWNBKO5QhQO3QhhLWMg");
	var mask_1_graphics_107 = new cjs.Graphics().p("Eg1mAVKQBl2KQzulQQyukWKBlQWLBkOlQyQOkQyhlWLg");
	var mask_1_graphics_108 = new cjs.Graphics().p("Eg1kATsQB/2HREuSQRDuQWHB/QWJB+OSRDQOQRDh/WJg");
	var mask_1_graphics_109 = new cjs.Graphics().p("Eg1hASPQCY2FRVt9QRTt8WFCYQWHCYN9RTQN8RUiYWGg");
	var mask_1_graphics_110 = new cjs.Graphics().p("Eg1eAQyQCy2CRltpQRjtnWDCyQWDCyNpRjQNnRjiyWEg");
	var mask_1_graphics_111 = new cjs.Graphics().p("Eg1aAPVQDM1+R1tVQRytSV/DLQWADMNVRzQNSRzjMWAg");
	var mask_1_graphics_112 = new cjs.Graphics().p("Eg1VAN5QDl17SEs/QSCs+V7DlQV8DmM/SCQM+SDjlV7g");
	var mask_1_graphics_113 = new cjs.Graphics().p("Eg1QAMcQD/12STsqQSRsoV2D/QV3D/MrSRQMoSRj/V4g");
	var mask_1_graphics_114 = new cjs.Graphics().p("Eg1LALAQEZ1xShsUQSgsTVxEYQVzEYMVSgQMSSgkYVzg");
	var mask_1_graphics_115 = new cjs.Graphics().p("Eg1FAJlQEy1sSwr/QSur9VsEyQVtEyL/StQL9SvkyVtg");
	var mask_1_graphics_116 = new cjs.Graphics().p("Eg0+AIJQFL1mS+roQS7roVnFLQVnFMLpS7QLnS9lLVng");
	var mask_1_graphics_117 = new cjs.Graphics().p("Eg03AGuQFl1fTLrTQTIrRVgFlQVhFkLTTJQLRTKlkVgg");
	var mask_1_graphics_118 = new cjs.Graphics().p("Eg0vAFUQF+1ZTYq8QTVq7VaF+QVaF9K8TWQK6TXl9Vag");
	var mask_1_graphics_119 = new cjs.Graphics().p("Eg0mAD6QGW1STlqlQTiqkVSGWQVTGXKmTiQKjTjmWVTg");
	var mask_1_graphics_120 = new cjs.Graphics().p("Eg0dACgQGv1KTxqOQTuqNVKGvQVMGvKOTvQKNTvmvVLg");
	var mask_1_graphics_121 = new cjs.Graphics().p("Eg0UABHQHI1CT9p3QT6p2VCHIQVDHIJ4T7QJ1T6nIVDg");
	var mask_1_graphics_122 = new cjs.Graphics().p("Eg0JgARQHg06UIpgQUFpeU6HgQU6HhJgUGQJeUGngU6g");
	var mask_1_graphics_123 = new cjs.Graphics().p("Egz/gBpQH50xUTpIQUQpHUwH5QUyH4JJURQJGURn5Uyg");
	var mask_1_graphics_124 = new cjs.Graphics().p("EgzzgDAQIR0pUdowQUaovUnIRQUpIRIwUcQIvUboRUog");
	var mask_1_graphics_125 = new cjs.Graphics().p("EgzngEXQIp0fUnoYQUkoXUdIpQUfIpIZUlQIWUmopUeg");
	var mask_1_graphics_126 = new cjs.Graphics().p("EgzbgFuQJB0UUwn/QUun/UTJAQUUJBIBUvQH+UvpAUTg");
	var mask_1_graphics_127 = new cjs.Graphics().p("EgzOgHDQJZ0KU5nnQU3nnUJJZQUJJYHoU4QHmU4pYUJg");
	var mask_1_graphics_128 = new cjs.Graphics().p("EgzAgIYQJwz+VCnPQU/nOT+JvQT+JwHQVBQHNVApwT+g");
	var mask_1_graphics_129 = new cjs.Graphics().p("EgyygJtQKHzyVLm2QVHm2TyKHQTyKHG4VJQG1VJqHTyg");
	var mask_1_graphics_130 = new cjs.Graphics().p("EgyjgLAQKeznVSmdQVPmdTmKeQTnKeGeVRQGcVQqeTmg");
	var mask_1_graphics_131 = new cjs.Graphics().p("EgyUgMTQK1zaVamEQVWmETZK1QTaK0GGVYQGDVYq1Tag");
	var mask_1_graphics_132 = new cjs.Graphics().p("EgyEgNlQLLzNVhlrQVdlrTNLLQTNLLFsVfQFqVfrLTNg");
	var mask_1_graphics_133 = new cjs.Graphics().p("Egx0gO2QLizAVnlSQVjlSTALiQTALiFTVkQFRVmriS/g");
	var mask_1_graphics_134 = new cjs.Graphics().p("EgxjgQGQL4yyVtk5QVpk5SyL4QSyL4E6VqQE4Vrr4Syg");
	var mask_1_graphics_135 = new cjs.Graphics().p("EgxKgRWQMOykVykfQVukfSkMNQSkMOEhVvQEeVysNSjg");
	var mask_1_graphics_136 = new cjs.Graphics().p("EgwngSkQMjyWV4kGQVzkFSWMjQSVMjEIV1QEEV2sjSVg");
	var mask_1_graphics_137 = new cjs.Graphics().p("EgwCgTyQM4yGV8jtQV4jsSHM5QSGM4DuV5QDrV7s4SGg");
	var mask_1_graphics_138 = new cjs.Graphics().p("EgvdgU+QNNx3WAjTQV8jTR4NOQR3NNDUV9QDSV/tOR3g");
	var mask_1_graphics_139 = new cjs.Graphics().p("Egu3gWKQNixnWEi5QV/i5RoNiQRoNiC6WBQC4WCtiRog");
	var mask_1_graphics_140 = new cjs.Graphics().p("EguQgXUQN3xYWGifQWDifRYN3QRYN2CgWEQCeWGt2RXg");
	var mask_1_graphics_141 = new cjs.Graphics().p("EgtogYdQOLxIWJiFQWFiFRIOKQRHOLCHWHQCEWIuKRHg");
	var mask_1_graphics_142 = new cjs.Graphics().p("Egs/gZmQOew2WMhsQWHhrQ3OfQQ3OeBtWJQBqWKufQ3g");
	var mask_1_graphics_143 = new cjs.Graphics().p("EgsWgatQOywlWOhSQWJhRQlOyQQmOyBTWLQBQWMuyQlg");
	var mask_1_graphics_144 = new cjs.Graphics().p("EgrrgbyQPFwUWOg4QWLg3QUPFQQUPFA5WMQA3WNvGQUg");
	var mask_1_graphics_145 = new cjs.Graphics().p("EgrAgc3QPYwCWPgeQWMgdQCPYQQCPYAfWNQAdWNvYQDg");
	var mask_1_graphics_146 = new cjs.Graphics().p("EgqUgd6QPrvwWPgEQWMgEPwPrQPwPrAFWNQACWOvqPwg");
	var mask_1_graphics_147 = new cjs.Graphics().p("Egpnge8QP8veWQAXQWLAWPeP9QPdP9gVWNQgXWNv9Peg");
	var mask_1_graphics_148 = new cjs.Graphics().p("Ego6gf9QQPvLWOAxQWLAwPLQPQPLQPgvWMQgyWNwOPLg");
	var mask_1_graphics_149 = new cjs.Graphics().p("EgoMgg8QQgu4WOBKQWJBLO4QgQO4QghJWLQhLWMwhO4g");
	var mask_1_graphics_150 = new cjs.Graphics().p("Egndgh6QQxukWMBkQWIBkOkQxQOlQyhjWJQhlWLwyOkg");
	var mask_1_graphics_151 = new cjs.Graphics().p("Egmugi3QRDuQWIB+QWHB+ORRCQOQRCh8WIQh/WIxDOQg");
	var mask_1_graphics_152 = new cjs.Graphics().p("Egl9gjyQRSt8WGCXQWFCYN8RTQN9RTiXWFQiZWFxSN9g");
	var mask_1_graphics_153 = new cjs.Graphics().p("EglNgksQRjtoWDCyQWCCxNoRjQNoRjiwWCQizWDxjNng");
	var mask_1_graphics_154 = new cjs.Graphics().p("EgkbgllQRztTV/DLQV+DMNTRyQNURzjKV+QjNWAxyNTg");
	var mask_1_graphics_155 = new cjs.Graphics().p("EgjpgmcQSCs+V8DlQV6DlM+SCQM+SCjjV6QjmV7yCM/g");
	var mask_1_graphics_156 = new cjs.Graphics().p("Egi2gnSQSRspV3D/QV2D+MpSRQMpSRj9V2QkAV3yRMpg");
	var mask_1_graphics_157 = new cjs.Graphics().p("EgiCgoGQSfsUVyEZQVxEXMUSgQMTSfkWVyQkZVxygMUg");
	var mask_1_graphics_158 = new cjs.Graphics().p("EghOgo5QStr+VtEyQVsExL+SuQL+StkwVsQkzVtyuL9g");
	var mask_1_graphics_159 = new cjs.Graphics().p("EggZgprQS7rnVnFLQVmFKLoS7QLoS8lKVmQlMVny7Lng");
	var mask_1_graphics_160 = new cjs.Graphics().p("EgfkgqbQTJrRVhFkQVfFjLSTJQLRTJliVgQllVgzJLSg");
	var mask_1_graphics_161 = new cjs.Graphics().p("EgeugrJQTWq8VaF+QVYF8K8TWQK7TWl8VZQl+VazWK7g");
	var mask_1_graphics_162 = new cjs.Graphics().p("Egd3gr3QTiqkVTGWQVRGWKlTiQKkTimUVSQmXVTzjKkg");
	var mask_1_graphics_163 = new cjs.Graphics().p("EgdAgsiQTuqOVMGvQVJGvKOTuQKNTvmtVKQmwVLzuKNg");
	var mask_1_graphics_164 = new cjs.Graphics().p("EgcIgtNQT6p2VDHIQVCHHJ2T6QJ2T6nGVDQnIVCz6J2g");
	var mask_1_graphics_165 = new cjs.Graphics().p("EgbQgt1QUFpfU7HgQU5HgJfUFQJfUFneU6QnhU60GJfg");
	var mask_1_graphics_166 = new cjs.Graphics().p("EgaXgucQUQpIUyH5QUwH4JHUQQJIUPn3UyQn6Ux0QJHg");
	var mask_1_graphics_167 = new cjs.Graphics().p("EgZegvCQUbowUoIRQUnIQIvUbQIwUZoPUpQoSUn0aIwg");
	var mask_1_graphics_168 = new cjs.Graphics().p("EgYkgvmQUloYUeIpQUdIoIXUlQIYUjonUfQopUd0lIYg");
	var mask_1_graphics_169 = new cjs.Graphics().p("EgXpgwJQUun/UUJAQUSJAIAUuQH/Uto/UVQpBUT0uH/g");
	var mask_1_graphics_170 = new cjs.Graphics().p("EgWvgwqQU4nnUJJYQUHJXHoU4QHnU2pXUKQpZUI03Hng");
	var mask_1_graphics_171 = new cjs.Graphics().p("EgVzgxKQVAnOT9JwQT9JuHPVAQHOU/ptT/QpxT91AHPg");
	var mask_1_graphics_172 = new cjs.Graphics().p("EgU4gxnQVHm3T0KIQTxKFG2VJQG2VHqFTzQqITx1IG2g");
	var mask_1_graphics_173 = new cjs.Graphics().p("EgT8gyEQVPmdTnKeQTlKdGeVQQGdVPqcTnQqfTl1PGdg");
	var mask_1_graphics_174 = new cjs.Graphics().p("EgS/gyeQVWmFTbK1QTYK0GFVXQGEVWqzTaQq1Ta1XGEg");
	var mask_1_graphics_175 = new cjs.Graphics().p("EgSDgy4QVdlrTOLLQTMLLFrVeQFsVdrKTNQrLTN1eFrg");
	var mask_1_graphics_176 = new cjs.Graphics().p("EgRFgzPQVjlSTBLhQS+LhFSVkQFSVkrfTAQriS/1lFSg");
	var mask_1_graphics_177 = new cjs.Graphics().p("EgQIgzlQVpk5SzL4QSxL2E5VrQE5Vpr2SzQr4Sx1qE5g");
	var mask_1_graphics_178 = new cjs.Graphics().p("EgPKgz5QVukgSlMOQSjMMEfVwQEgVvsMSlQsOSj1vEfg");
	var mask_1_graphics_179 = new cjs.Graphics().p("EgONg0MQV0kGSXMkQSUMhEGV1QEGV0shSWQskSV10EGg");
	var mask_1_graphics_180 = new cjs.Graphics().p("EgNPg0cQV5jtSHM5QSGM3DsV5QDtV4s3SIQs4SF16Dtg");
	var mask_1_graphics_181 = new cjs.Graphics().p("EgMQg0rQV8jTR4NNQR2NMDTV+QDTV8tLR4QtOR319DTg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(105).to({graphics:mask_1_graphics_105,x:288.2,y:-2.9}).wait(1).to({graphics:mask_1_graphics_106,x:288.4,y:0.2}).wait(1).to({graphics:mask_1_graphics_107,x:288.6,y:3.3}).wait(1).to({graphics:mask_1_graphics_108,x:288.9,y:6.4}).wait(1).to({graphics:mask_1_graphics_109,x:289.3,y:9.5}).wait(1).to({graphics:mask_1_graphics_110,x:289.7,y:12.6}).wait(1).to({graphics:mask_1_graphics_111,x:290.1,y:15.7}).wait(1).to({graphics:mask_1_graphics_112,x:290.7,y:18.7}).wait(1).to({graphics:mask_1_graphics_113,x:291.2,y:21.8}).wait(1).to({graphics:mask_1_graphics_114,x:291.9,y:24.8}).wait(1).to({graphics:mask_1_graphics_115,x:292.6,y:27.9}).wait(1).to({graphics:mask_1_graphics_116,x:293.3,y:30.9}).wait(1).to({graphics:mask_1_graphics_117,x:294.1,y:33.9}).wait(1).to({graphics:mask_1_graphics_118,x:295,y:36.9}).wait(1).to({graphics:mask_1_graphics_119,x:295.9,y:39.9}).wait(1).to({graphics:mask_1_graphics_120,x:296.8,y:42.9}).wait(1).to({graphics:mask_1_graphics_121,x:297.8,y:45.8}).wait(1).to({graphics:mask_1_graphics_122,x:298.9,y:48.8}).wait(1).to({graphics:mask_1_graphics_123,x:300,y:51.7}).wait(1).to({graphics:mask_1_graphics_124,x:301.1,y:54.7}).wait(1).to({graphics:mask_1_graphics_125,x:302.3,y:57.6}).wait(1).to({graphics:mask_1_graphics_126,x:303.6,y:60.4}).wait(1).to({graphics:mask_1_graphics_127,x:304.9,y:63.3}).wait(1).to({graphics:mask_1_graphics_128,x:306.2,y:66.2}).wait(1).to({graphics:mask_1_graphics_129,x:307.6,y:69}).wait(1).to({graphics:mask_1_graphics_130,x:309,y:71.8}).wait(1).to({graphics:mask_1_graphics_131,x:310.5,y:74.6}).wait(1).to({graphics:mask_1_graphics_132,x:312.1,y:77.3}).wait(1).to({graphics:mask_1_graphics_133,x:313.6,y:80.1}).wait(1).to({graphics:mask_1_graphics_134,x:315.3,y:82.8}).wait(1).to({graphics:mask_1_graphics_135,x:316.2,y:85.5}).wait(1).to({graphics:mask_1_graphics_136,x:316.1,y:88.1}).wait(1).to({graphics:mask_1_graphics_137,x:316.1,y:90.7}).wait(1).to({graphics:mask_1_graphics_138,x:316.1,y:93.3}).wait(1).to({graphics:mask_1_graphics_139,x:316,y:95.9}).wait(1).to({graphics:mask_1_graphics_140,x:316,y:98.4}).wait(1).to({graphics:mask_1_graphics_141,x:316,y:100.8}).wait(1).to({graphics:mask_1_graphics_142,x:315.9,y:103.3}).wait(1).to({graphics:mask_1_graphics_143,x:315.9,y:105.7}).wait(1).to({graphics:mask_1_graphics_144,x:315.9,y:108}).wait(1).to({graphics:mask_1_graphics_145,x:315.9,y:110.3}).wait(1).to({graphics:mask_1_graphics_146,x:315.9,y:112.6}).wait(1).to({graphics:mask_1_graphics_147,x:315.9,y:114.8}).wait(1).to({graphics:mask_1_graphics_148,x:315.9,y:117}).wait(1).to({graphics:mask_1_graphics_149,x:315.9,y:119.1}).wait(1).to({graphics:mask_1_graphics_150,x:315.9,y:121.1}).wait(1).to({graphics:mask_1_graphics_151,x:316,y:123.1}).wait(1).to({graphics:mask_1_graphics_152,x:316,y:125.1}).wait(1).to({graphics:mask_1_graphics_153,x:316,y:127}).wait(1).to({graphics:mask_1_graphics_154,x:316.1,y:128.9}).wait(1).to({graphics:mask_1_graphics_155,x:316.1,y:130.7}).wait(1).to({graphics:mask_1_graphics_156,x:316.1,y:132.5}).wait(1).to({graphics:mask_1_graphics_157,x:316.2,y:134.2}).wait(1).to({graphics:mask_1_graphics_158,x:316.2,y:135.9}).wait(1).to({graphics:mask_1_graphics_159,x:316.2,y:137.6}).wait(1).to({graphics:mask_1_graphics_160,x:316.3,y:139.1}).wait(1).to({graphics:mask_1_graphics_161,x:316.3,y:140.7}).wait(1).to({graphics:mask_1_graphics_162,x:316.3,y:142.2}).wait(1).to({graphics:mask_1_graphics_163,x:316.3,y:143.6}).wait(1).to({graphics:mask_1_graphics_164,x:316.3,y:145}).wait(1).to({graphics:mask_1_graphics_165,x:316.3,y:146.4}).wait(1).to({graphics:mask_1_graphics_166,x:316.4,y:147.7}).wait(1).to({graphics:mask_1_graphics_167,x:316.4,y:149}).wait(1).to({graphics:mask_1_graphics_168,x:316.3,y:150.2}).wait(1).to({graphics:mask_1_graphics_169,x:316.3,y:151.4}).wait(1).to({graphics:mask_1_graphics_170,x:316.3,y:152.5}).wait(1).to({graphics:mask_1_graphics_171,x:316.3,y:153.6}).wait(1).to({graphics:mask_1_graphics_172,x:316.3,y:154.6}).wait(1).to({graphics:mask_1_graphics_173,x:316.3,y:155.5}).wait(1).to({graphics:mask_1_graphics_174,x:316.2,y:156.5}).wait(1).to({graphics:mask_1_graphics_175,x:316.2,y:157.3}).wait(1).to({graphics:mask_1_graphics_176,x:316.2,y:158.1}).wait(1).to({graphics:mask_1_graphics_177,x:316.1,y:158.9}).wait(1).to({graphics:mask_1_graphics_178,x:316.1,y:159.6}).wait(1).to({graphics:mask_1_graphics_179,x:316.1,y:160.3}).wait(1).to({graphics:mask_1_graphics_180,x:316,y:160.9}).wait(1).to({graphics:mask_1_graphics_181,x:316,y:161.3}).wait(283));

	// Layer 1
	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(25,1,1).p("AvD0EQFRpyJsgHQJsgGDrHVQDsHWj7JvQj6JumDHQQmCHQmLG+QiOCghoB7");
	this.shape_121.setTransform(268.4,273.8);
	this.shape_121._off = true;

	var maskedShapeInstanceList = [this.shape_121];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_121).wait(105).to({_off:false},0).wait(359));

	// Layer 12 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_23 = new cjs.Graphics().p("EgXTAg+QzNrMlr1fQlq1gLNzMMBctA2CQrMTN1hFrQnNB5m+AAQtvAAsxncg");
	var mask_2_graphics_24 = new cjs.Graphics().p("EgYVAg1Qy2r0k/1pQk81rLzy1MBa7A5AQrzS11tE+QmZBemLAAQupAAtQoUg");
	var mask_2_graphics_25 = new cjs.Graphics().p("EgZVAgoQycsakS10QkQ10MaycMBZCA76QsaSc11ESQllBFlWAAQvlAAtvpPg");
	var mask_2_graphics_26 = new cjs.Graphics().p("EgaRAgXQyCtAjl18Qji18NAyCMBXDA+xQtASB1+DkQktAxkhAAQwjAAuLqNg");
	var mask_2_graphics_27 = new cjs.Graphics().p("EgbJAgBQxmtki42CQi12DNlxnMBU+BBjQtkRm2FC2Qj0AgjsAAQxkAAujrPg");
	var mask_2_graphics_28 = new cjs.Graphics().p("A7+foQxKuIiJ2HQiI2JOJxJMBS0BEPQuJRK2JCJQi5ARi0AAQypAAu6sSg");
	var mask_2_graphics_29 = new cjs.Graphics().p("A8vfLQwsushc2KQhZ2MOrwsMBQlBG4QusQs2NBbQh9AIh6AAQzxAAvOtZg");
	var mask_2_graphics_30 = new cjs.Graphics().p("A9ceqQwNvOgu2NQgs2OPOwNMBOPBJdQvOQN2PAtQg+ACg+AAQ09AAvgujg");
	var mask_2_graphics_31 = new cjs.Graphics().p("EAH1At0Q2NgBvtvuQvtvvAA2OQAC2OPuvtMBL1BL8QvtPs2OgBIgDAAg");
	var mask_2_graphics_32 = new cjs.Graphics().p("EAGuAuZQ2MgvvMwPQvMwOAt2NQAx2OQOvMMBJWBOWQvfOf08AAQhBAAhCgCg");
	var mask_2_graphics_33 = new cjs.Graphics().p("EAFoAu4Q2JhcuqwuQuqwtBb2LQBe2MQuuqMBGxBQrQvNNWzwAAQh9AAiBgJg");
	var mask_2_graphics_34 = new cjs.Graphics().p("EAElAvTQ2GiLuHxLQuHxLCJ2HQCM2IRLuHMBEIBS7Qu5MOynAAQi3AAi9gSg");
	var mask_2_graphics_35 = new cjs.Graphics().p("EADiAvoQ2Ai4tjxoQtjxoC32CQC52CRotjMBBaBVEQuiLLxjAAQjvAAj4ggg");
	var mask_2_graphics_36 = new cjs.Graphics().p("EACiAv4Q16jls+yEQs+yDDk17QDn18SDs+MA+oBXJQuIKKwiAAQklAAkxgyg");
	var mask_2_graphics_37 = new cjs.Graphics().p("EABjAwDQ1ykSsYyeQsZydES1zQEU10SdsYMA7yBZHQtsJMvkAAQlaAAlohHg");
	var mask_2_graphics_38 = new cjs.Graphics().p("EAAmAwKQ1olAryy2Qryy3E+1pQFB1qS3ryMA43BbAQtOIRuoAAQmOAAmdhfg");
	var mask_2_graphics_39 = new cjs.Graphics().p("EgAVAwLQ1elsrLzOQrKzOFr1fQFu1fTOrKMA15BcyQsuHZtuAAQnBAAnQh7g");
	var mask_2_graphics_40 = new cjs.Graphics().p("EgBPAwHQ1RmYqjzkQqizlGX1SQGa1STkqjMAy4BefQsLGks3AAQnzAAoCibg");
	var mask_2_graphics_41 = new cjs.Graphics().p("EgCHAv/Q1EnEp5z6Qp6z5HD1FQHG1ET5p6MAv0BgFQrnFysBAAQolAAoyi9g");
	var mask_2_graphics_42 = new cjs.Graphics().p("EgC9AvyQ01nwpQ0NQpQ0NHu02QHx01UOpQMAsrBhlQrAFCrMAAQpYAApfjig");
	var mask_2_graphics_43 = new cjs.Graphics().p("EgDyAvfQ0joaon0gQom0eIZ0mQIc0kUgomMApgBi9QqWEWqZAAQqKAAqMkLg");
	var mask_2_graphics_44 = new cjs.Graphics().p("EgEkAvIQ0SpEn70xQn80wJE0TQJG0SUwn8MAmSBkQQprDtplAAQq+AAq1k3g");
	var mask_2_graphics_45 = new cjs.Graphics().p("EgFVAutQz+punQ1BQnR1AJt0AQJwz+U/nRMAjDBlcQo+DHoyAAQrzAArdllg");
	var mask_2_graphics_46 = new cjs.Graphics().p("EgGDAuMQzqqXml1PQmk1OKWzrQKYzqVOmlMAfwBmhQoPCkoAAAQsoAAsCmXg");
	var mask_2_graphics_47 = new cjs.Graphics().p("EgGwAtnQzTq/l51cQl51bK/zVQLBzUVal5MAcbBngQndCDnOAAQtfAAsmnLg");
	var mask_2_graphics_48 = new cjs.Graphics().p("EgHaAs9Qy8rnlM1nQlN1nLny9QLoy9VmlMMAZEBoXQmrBmmbAAQuYAAtGoCg");
	var mask_2_graphics_49 = new cjs.Graphics().p("EgICAsOQyksOkf1xQkf1wMNylQMPykVwkfMAVrBpGQl2BOlngBQvTAAtlo8g");
	var mask_2_graphics_50 = new cjs.Graphics().p("EgIoAraQyKszjy16Qjy15MzyLQM1yKV4jyMASSBpwQk/A3kzAAQwRAAuBp6g");
	var mask_2_graphics_51 = new cjs.Graphics().p("EgJMAqiQxutYjF2BQjF2ANYxwQNaxvWAjFMAO3BqSQkHAlj+AAQxQAAucq6g");
	var mask_2_graphics_52 = new cjs.Graphics().p("EgJtAplQxSt8iX2HQiX2FN8xUQN+xTWGiXMALaBqtQjNAWjGAAQyUAAuzr9g");
	var mask_2_graphics_53 = new cjs.Graphics().p("EgKLAokQw1ughp2LQhq2JOgw3QOhw1WKhqMAH9BrCQiQALiNAAQzbAAvItDg");
	var mask_2_graphics_54 = new cjs.Graphics().p("EgKnAneQwWvCg82OQg82MPCwYQPDwXWNg7MAEgBrOQhSADhSAAQ0mAAvauLg");
	var mask_2_graphics_55 = new cjs.Graphics().p("EgLAAmTQv3vjgO2PQgN2NPjv5QPkv3WPgOMABCBrUIgnABQ11AAvqvYg");
	var mask_2_graphics_56 = new cjs.Graphics().p("EgMkAlFQvWwEAg2NQAg2OQEvYQQEvXWOAhMgCbBrSQ2OggvXwFg");
	var mask_2_graphics_57 = new cjs.Graphics().p("EgOnAj2Qu0wjBO2MQBO2MQju2QQku1WMBOMgF5BrLQ2NhPu1wkg");
	var mask_2_graphics_58 = new cjs.Graphics().p("EgQmAimQuSxBB82IQB82JRBuUQRCuRWJB8MgJXBq6Q2Ih8uTxDg");
	var mask_2_graphics_59 = new cjs.Graphics().p("EgSjAhWQtuxdCq2EQCq2ERetwQRetuWECqMgMzBqjQ2Diqtwxgg");
	var mask_2_graphics_60 = new cjs.Graphics().p("EgUcAgGQtJx5DX19QDX1/R6tLQR6tJV+DXMgQPBqFQ19jXtLx8g");
	var mask_2_graphics_61 = new cjs.Graphics().p("A2Se2QskyUEE12QEF12SUsmQSVskV2EEMgTpBphQ12kFslyWg");
	var mask_2_graphics_62 = new cjs.Graphics().p("A4FdlQr+ytEy1tQEx1tSusAQSur9VtExMgXDBo0Q1skxr/ywg");
	var mask_2_graphics_63 = new cjs.Graphics().p("A51cUQrWzGFe1hQFe1jTGrZQTGrWVjFeMgabBoBQ1hlerZzIg");
	var mask_2_graphics_64 = new cjs.Graphics().p("A7hbDQqvzdGL1VQGK1XTdqxQTdquVXGKMgdxBnHQ1WmKqwzfg");
	var mask_2_graphics_65 = new cjs.Graphics().p("A9JZxQqHzxG31JQG21JTzqIQTyqGVJG2MghFBmGQ1Im2qHz1g");
	var mask_2_graphics_66 = new cjs.Graphics().p("A+uYgQpd0GHh05QHi07UHpfQUHpdU6HiMgkWBk+Q06nhpe0Jg");
	var mask_2_graphics_67 = new cjs.Graphics().p("EggQAXPQoz0ZIN0pQIN0rUZo1QUaozUqINMgnlBjwQ0qoNo10bg");
	var mask_2_graphics_68 = new cjs.Graphics().p("EghtAV+QoJ0rI30YQI40YUroLQUroIUYI3MgqyBibQ0Yo3oK0tg");
	var mask_2_graphics_69 = new cjs.Graphics().p("EgjHAUtQne06Ji0GQJh0FU7ngQU7ndUGJhMgt8Bg/Q0Gphnf09g");
	var mask_2_graphics_70 = new cjs.Graphics().p("EgkcATcQmz1JKLzxQKKzxVKm0QVKmyTxKKMgxDBfdQzxqKmz1Mg");
	var mask_2_graphics_71 = new cjs.Graphics().p("EgluASLQmG1VKzzcQKyzbVYmJQVXmGTcKzMg0HBd0QzbqymI1ag");
	var mask_2_graphics_72 = new cjs.Graphics().p("Egm7AQ7Qla1hLazFQLbzEVjlcQVklaTELbMg3HBcFQzEralb1mg");
	var mask_2_graphics_73 = new cjs.Graphics().p("EgoEAPsQkt1sMBysQMCytVtkvQVuktStMCMg6EBaQQyssBku1wg");
	var mask_2_graphics_74 = new cjs.Graphics().p("EgpIAOeQkB12MoySQMoyTV2kDQV3j/STMoMg88BYVQySsokB14g");
	var mask_2_graphics_75 = new cjs.Graphics().p("EgqIANQQjU19NOx4QNNx4V9jVQWAjSR4NNMg/xBWUQx4tNjT2Ag");
	var mask_2_graphics_76 = new cjs.Graphics().p("EgrEAMDQim2DNyxcQNyxdWEinQWFilRcNyMhChBUOQxctyim2Gg");
	var mask_2_graphics_77 = new cjs.Graphics().p("Egr7AK3Qh42HOWxAQOVw/WIh6QWKh3Q/OWMhFMBSBQw/uVh52Lg");
	var mask_2_graphics_78 = new cjs.Graphics().p("EgssAJsQhL2KO4whQO4whWMhMQWNhJQhO4MhH0BPvQwhu3hK2Pg");
	var mask_2_graphics_79 = new cjs.Graphics().p("EgtZAIjQgd2MPawCQPZwCWOgeQWOgbQCPaMhKWBNYQwCvZgc2Qg");
	var mask_2_graphics_80 = new cjs.Graphics().p("EguBAHbQAR2MP7viQP6vhWNAQQWPATPhP6MhMzBK8Qviv6AS2Qg");
	var mask_2_graphics_81 = new cjs.Graphics().p("EgukAGVQBA2LQZvAQQavAWMA+QWOBAPAQaMhPMBIbQvAwZA/2Pg");
	var mask_2_graphics_82 = new cjs.Graphics().p("EgvBAFQQBt2IQ4ueQQ4ueWKBsQWKBvOeQ4MhRfBF1Quew4Bu2Mg");
	var mask_2_graphics_83 = new cjs.Graphics().p("EgvaAENQCb2ERWt6QRVt7WFCaQWHCcN6RVMhTtBDLQt6xWCb2Hg");
	var mask_2_graphics_84 = new cjs.Graphics().p("EgvtADLQDI1+RytWQRxtWWADHQWBDKNVRxMhV0BAcQtWxyDJ2Cg");
	var mask_2_graphics_85 = new cjs.Graphics().p("Egv8ACLQD213SNsxQSMsxV5D1QV5D3MxSNMhX3A9nQsxyMD217g");
	var mask_2_graphics_86 = new cjs.Graphics().p("EgwFABNQEj1uSmsLQSmsLVwEhQVxElMLSmMhZ0A6wQsLymEk1yg");
	var mask_2_graphics_87 = new cjs.Graphics().p("EgwKAAQQFQ1kS/rkQS/rkVmFOQVmFRLkS/MhbqA31Qrky/FQ1og");
	var mask_2_graphics_88 = new cjs.Graphics().p("EgwJgAqQF81aTWq8QTWq8VaF7QVbF9K8TWMhdaA01Qq8zWF91bg");
	var mask_2_graphics_89 = new cjs.Graphics().p("EgwEgBjQGo1NTsqUQTsqUVOGnQVNGqKUTsMhfEAxyQqUzsGp1Og");
	var mask_2_graphics_90 = new cjs.Graphics().p("Egv6gCbQHU0+UBprQUAprU/HTQVAHVJrUBMhgoAusQpr0BHU1Ag");
	var mask_2_graphics_91 = new cjs.Graphics().p("EgvrgDQQH/0vUUpBQUTpBUxH9QUvIBJBUUMhiFArjQpB0UH/0wg");
	var mask_2_graphics_92 = new cjs.Graphics().p("EgvXgEEQIq0dUmoXQUloXUfIoQUeIrIXUmMhjcAoXQoX0mIq0fg");
	var mask_2_graphics_93 = new cjs.Graphics().p("Egu+gE2QJT0LU3nsQU2nsUMJSQUMJVHsU3MhksAlIQns03JU0Mg");
	var mask_2_graphics_94 = new cjs.Graphics().p("EguhgFmQJ9z3VGnAQVFnBT5J8QT3J+HBVFMhl1Ah3QnB1FJ9z5g");
	var mask_2_graphics_95 = new cjs.Graphics().p("Egt+gGUQKlzhVUmVQVSmVTkKkQTiKnGVVTMhm4AekQmV1UKnzjg");
	var mask_2_graphics_96 = new cjs.Graphics().p("EgtXgG/QLNzLVglpQVflpTNLNQTMLPFpVfMhn0AbOQlp1gLPzMg");
	var mask_2_graphics_97 = new cjs.Graphics().p("EgsrgHpQL0yzVrk8QVqk9S1L0QS0L3E8VqMhooAX3Qk81rL2y1g");
	var mask_2_graphics_98 = new cjs.Graphics().p("Egr7gIQQMbyaV1kQQVzkPScMbQSbMcEPV0MhpWAUeQkP11Mcybg");
	var mask_2_graphics_99 = new cjs.Graphics().p("EgrGgI1QNByAV8jiQV8jiSCNAQSANCDiV8Mhp9ARDQji18NCyBg");
	var mask_2_graphics_100 = new cjs.Graphics().p("EgqMgJYQNmxkWDi1QWCi0RmNlQRlNnC0WCMhqcANoQi12DNnxmg");
	var mask_2_graphics_101 = new cjs.Graphics().p("EgpNgJ4QOJxIWIiHQWHiGRKOIQRIOLCHWHMhq1AKMQiH2IOLxJg");
	var mask_2_graphics_102 = new cjs.Graphics().p("EgoKgKVQOswqWMhaQWKhZQsOsQQrOuBZWLMhrHAGuQhZ2LOuwrg");
	var mask_2_graphics_103 = new cjs.Graphics().p("EgnCgKwQPOwLWNgsQWNgrQNPOQQMPPArWOMhrRADRQgr2OPQwMg");
	var mask_2_graphics_104 = new cjs.Graphics().p("Eg1qAarQAD2OPxvsQPvvrWNADQWPACPtPvQPrPwgCWOg");
	var mask_2_graphics_105 = new cjs.Graphics().p("Eg1pAYFQAx2NQRvLQQOvKWNAwQWOAxPMQPQPKQPgxWOg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(23).to({graphics:mask_2_graphics_23,x:263.7,y:249.3}).wait(1).to({graphics:mask_2_graphics_24,x:260.9,y:244.5}).wait(1).to({graphics:mask_2_graphics_25,x:257.9,y:239.8}).wait(1).to({graphics:mask_2_graphics_26,x:254.8,y:235.2}).wait(1).to({graphics:mask_2_graphics_27,x:251.5,y:230.6}).wait(1).to({graphics:mask_2_graphics_28,x:248.1,y:226.2}).wait(1).to({graphics:mask_2_graphics_29,x:244.6,y:221.9}).wait(1).to({graphics:mask_2_graphics_30,x:240.9,y:217.8}).wait(1).to({graphics:mask_2_graphics_31,x:237,y:213.8}).wait(1).to({graphics:mask_2_graphics_32,x:233,y:209.9}).wait(1).to({graphics:mask_2_graphics_33,x:228.9,y:206.2}).wait(1).to({graphics:mask_2_graphics_34,x:224.6,y:202.7}).wait(1).to({graphics:mask_2_graphics_35,x:220.2,y:199.3}).wait(1).to({graphics:mask_2_graphics_36,x:215.6,y:196}).wait(1).to({graphics:mask_2_graphics_37,x:211,y:192.9}).wait(1).to({graphics:mask_2_graphics_38,x:206.3,y:189.9}).wait(1).to({graphics:mask_2_graphics_39,x:201.5,y:187.1}).wait(1).to({graphics:mask_2_graphics_40,x:196.6,y:184.4}).wait(1).to({graphics:mask_2_graphics_41,x:191.7,y:181.9}).wait(1).to({graphics:mask_2_graphics_42,x:186.6,y:179.5}).wait(1).to({graphics:mask_2_graphics_43,x:181.5,y:177.3}).wait(1).to({graphics:mask_2_graphics_44,x:176.4,y:175.2}).wait(1).to({graphics:mask_2_graphics_45,x:171.2,y:173.3}).wait(1).to({graphics:mask_2_graphics_46,x:166,y:171.5}).wait(1).to({graphics:mask_2_graphics_47,x:160.7,y:169.9}).wait(1).to({graphics:mask_2_graphics_48,x:155.4,y:168.5}).wait(1).to({graphics:mask_2_graphics_49,x:150,y:167.2}).wait(1).to({graphics:mask_2_graphics_50,x:144.7,y:166.1}).wait(1).to({graphics:mask_2_graphics_51,x:139.3,y:165.1}).wait(1).to({graphics:mask_2_graphics_52,x:133.8,y:164.4}).wait(1).to({graphics:mask_2_graphics_53,x:128.4,y:163.8}).wait(1).to({graphics:mask_2_graphics_54,x:122.9,y:163.4}).wait(1).to({graphics:mask_2_graphics_55,x:117.3,y:163.2}).wait(1).to({graphics:mask_2_graphics_56,x:119.6,y:163.2}).wait(1).to({graphics:mask_2_graphics_57,x:125.1,y:162.9}).wait(1).to({graphics:mask_2_graphics_58,x:130.6,y:162.4}).wait(1).to({graphics:mask_2_graphics_59,x:136,y:161.8}).wait(1).to({graphics:mask_2_graphics_60,x:141.5,y:161}).wait(1).to({graphics:mask_2_graphics_61,x:146.9,y:159.9}).wait(1).to({graphics:mask_2_graphics_62,x:152.3,y:158.8}).wait(1).to({graphics:mask_2_graphics_63,x:157.6,y:157.4}).wait(1).to({graphics:mask_2_graphics_64,x:162.9,y:155.9}).wait(1).to({graphics:mask_2_graphics_65,x:168.2,y:154.2}).wait(1).to({graphics:mask_2_graphics_66,x:173.4,y:152.4}).wait(1).to({graphics:mask_2_graphics_67,x:178.6,y:150.4}).wait(1).to({graphics:mask_2_graphics_68,x:183.7,y:148.3}).wait(1).to({graphics:mask_2_graphics_69,x:188.8,y:146}).wait(1).to({graphics:mask_2_graphics_70,x:193.8,y:143.5}).wait(1).to({graphics:mask_2_graphics_71,x:198.8,y:140.9}).wait(1).to({graphics:mask_2_graphics_72,x:203.6,y:138.2}).wait(1).to({graphics:mask_2_graphics_73,x:208.4,y:135.3}).wait(1).to({graphics:mask_2_graphics_74,x:213.1,y:132.3}).wait(1).to({graphics:mask_2_graphics_75,x:217.7,y:129.1}).wait(1).to({graphics:mask_2_graphics_76,x:222.2,y:125.8}).wait(1).to({graphics:mask_2_graphics_77,x:226.6,y:122.4}).wait(1).to({graphics:mask_2_graphics_78,x:230.8,y:118.8}).wait(1).to({graphics:mask_2_graphics_79,x:234.9,y:115}).wait(1).to({graphics:mask_2_graphics_80,x:238.9,y:111.1}).wait(1).to({graphics:mask_2_graphics_81,x:242.7,y:107}).wait(1).to({graphics:mask_2_graphics_82,x:246.3,y:102.8}).wait(1).to({graphics:mask_2_graphics_83,x:249.8,y:98.5}).wait(1).to({graphics:mask_2_graphics_84,x:253.2,y:94.1}).wait(1).to({graphics:mask_2_graphics_85,x:256.4,y:89.5}).wait(1).to({graphics:mask_2_graphics_86,x:259.5,y:84.9}).wait(1).to({graphics:mask_2_graphics_87,x:262.4,y:80.1}).wait(1).to({graphics:mask_2_graphics_88,x:265.1,y:75.3}).wait(1).to({graphics:mask_2_graphics_89,x:267.8,y:70.4}).wait(1).to({graphics:mask_2_graphics_90,x:270.2,y:65.4}).wait(1).to({graphics:mask_2_graphics_91,x:272.6,y:60.3}).wait(1).to({graphics:mask_2_graphics_92,x:274.8,y:55.2}).wait(1).to({graphics:mask_2_graphics_93,x:276.8,y:50.1}).wait(1).to({graphics:mask_2_graphics_94,x:278.7,y:44.9}).wait(1).to({graphics:mask_2_graphics_95,x:280.4,y:39.6}).wait(1).to({graphics:mask_2_graphics_96,x:281.9,y:34.3}).wait(1).to({graphics:mask_2_graphics_97,x:283.3,y:29}).wait(1).to({graphics:mask_2_graphics_98,x:284.6,y:23.6}).wait(1).to({graphics:mask_2_graphics_99,x:285.6,y:18.3}).wait(1).to({graphics:mask_2_graphics_100,x:286.5,y:12.8}).wait(1).to({graphics:mask_2_graphics_101,x:287.2,y:7.4}).wait(1).to({graphics:mask_2_graphics_102,x:287.7,y:1.9}).wait(1).to({graphics:mask_2_graphics_103,x:288,y:-3.6}).wait(1).to({graphics:mask_2_graphics_104,x:288.1,y:-8.5}).wait(1).to({graphics:mask_2_graphics_105,x:288.2,y:-2.9}).wait(359));

	// Layer 11
	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(25,0,1).p("AvKBfQFRpxJsgHQJrgHDsHWQCiFBhEGL");
	this.shape_122.setTransform(269.1,135.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(25,1,1).p("AvD0EQFRpyJsgHQJsgGDrHVQDsHWj7JvQj6JumDHQQmCHQmLG+QiOCghoB7");
	this.shape_123.setTransform(268.4,273.8);

	var maskedShapeInstanceList = [this.shape_122,this.shape_123];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_122}]},23).to({state:[{t:this.shape_123}]},52).wait(389));

	// Layer 14 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_9 = new cjs.Graphics().p("AoUHHIF8qRIVXMVIl8KSg");
	var mask_3_graphics_10 = new cjs.Graphics().p("At0gtIGSq5IVXMUImTK5g");
	var mask_3_graphics_11 = new cjs.Graphics().p("At/gaIGorfIVXMVImoLeg");
	var mask_3_graphics_12 = new cjs.Graphics().p("AuKgHIG/sFIVWMUIm/MFg");
	var mask_3_graphics_13 = new cjs.Graphics().p("AuVALIHVsrIVWMWInVMqg");
	var mask_3_graphics_14 = new cjs.Graphics().p("AugAeIHqtRIVXMWInqNRg");
	var mask_3_graphics_15 = new cjs.Graphics().p("AurAxIIBt3IVWMWIoBN3g");
	var mask_3_graphics_16 = new cjs.Graphics().p("Au2BFIIXueIVWMWIoXOdg");
	var mask_3_graphics_17 = new cjs.Graphics().p("AvBBYIItvEIVWMVIotPEg");
	var mask_3_graphics_18 = new cjs.Graphics().p("AvNBrIJEvqIVXMVIpEPqg");
	var mask_3_graphics_19 = new cjs.Graphics().p("AvXB+IJZwRIVWMWIpZQRg");
	var mask_3_graphics_20 = new cjs.Graphics().p("AvjCRIJww3IVWMWIpvQ3g");
	var mask_3_graphics_21 = new cjs.Graphics().p("AvuCkIKGxdIVXMVIqGReg");
	var mask_3_graphics_22 = new cjs.Graphics().p("Av5C4IKcyEIVWMVIqbSEg");
	var mask_3_graphics_23 = new cjs.Graphics().p("ArmIhIKyyqIVXMVIqySrg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_3_graphics_9,x:121.5,y:124.5}).wait(1).to({graphics:mask_3_graphics_10,x:155.9,y:176}).wait(1).to({graphics:mask_3_graphics_11,x:156.2,y:175.4}).wait(1).to({graphics:mask_3_graphics_12,x:156.6,y:174.7}).wait(1).to({graphics:mask_3_graphics_13,x:156.9,y:174.1}).wait(1).to({graphics:mask_3_graphics_14,x:157.2,y:173.4}).wait(1).to({graphics:mask_3_graphics_15,x:157.5,y:172.8}).wait(1).to({graphics:mask_3_graphics_16,x:157.9,y:172.2}).wait(1).to({graphics:mask_3_graphics_17,x:158.2,y:171.5}).wait(1).to({graphics:mask_3_graphics_18,x:158.5,y:170.9}).wait(1).to({graphics:mask_3_graphics_19,x:158.8,y:170.3}).wait(1).to({graphics:mask_3_graphics_20,x:159.2,y:169.6}).wait(1).to({graphics:mask_3_graphics_21,x:159.5,y:169}).wait(1).to({graphics:mask_3_graphics_22,x:159.8,y:168.3}).wait(1).to({graphics:mask_3_graphics_23,x:131.5,y:133.5}).wait(441));

	// Layer 13
	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(25,1,1).p("AvD0XQFRpyJsgHQJsgHDrHWQDsHWj7JvQj6JumDHQQmCHPmLG+QiOChiOCh");
	this.shape_124.setTransform(268.4,275.7);
	this.shape_124._off = true;

	var maskedShapeInstanceList = [this.shape_124];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_124).wait(9).to({_off:false},0).wait(455));

	// Base
	this.instance_4 = new lib.Symbol1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,275);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(464));

	// Background
	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_125.setTransform(275,275,3.373,2.543);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_126.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_126},{t:this.shape_125}]}).wait(464));

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