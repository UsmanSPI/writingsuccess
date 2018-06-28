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
	this.shape.graphics.f("#FFFFFF").s().p("AlpddQiuAAAAiQQgBhLA1g/QA1hBBDAAIDJAAMAAAgwDIjHAAQiuAAAAiuQAAitCuAAILXAAQCrAAgBCtQABCuipAAIjCAAMAAAAwDIC/AAQBEAAA1BBQAzBDgBBKQABCMisABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.6,-188.4,107.3,376.9);


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
	this.shape.setTransform(6.6,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AgoAAIBRAA");
	this.shape_1.setTransform(8,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("Ag3AAIBvAA");
	this.shape_2.setTransform(9.3,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AhGAAICNAA");
	this.shape_3.setTransform(10.6,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AhVAAICqAA");
	this.shape_4.setTransform(11.9,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AhjAAIDHAA");
	this.shape_5.setTransform(13.1,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AhwAAIDhAA");
	this.shape_6.setTransform(14.3,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("Ah9AAID7AA");
	this.shape_7.setTransform(15.4,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AiKAAIEVAA");
	this.shape_8.setTransform(16.5,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AiWAAIEtAA");
	this.shape_9.setTransform(17.6,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AiiAAIFFAA");
	this.shape_10.setTransform(18.6,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AitAAIFbAA");
	this.shape_11.setTransform(19.6,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("Ai4AAIFxAA");
	this.shape_12.setTransform(20.6,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AjDAAIGHAA");
	this.shape_13.setTransform(21.5,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AjNAAIGbAA");
	this.shape_14.setTransform(22.3,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AjWAAIGtAA");
	this.shape_15.setTransform(23.2,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AjfAAIG/AA");
	this.shape_16.setTransform(24,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AjoAAIHRAA");
	this.shape_17.setTransform(24.7,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AjwAAIHhAA");
	this.shape_18.setTransform(25.4,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("Aj4AAIHxAA");
	this.shape_19.setTransform(26.1,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("Aj/AAIH/AA");
	this.shape_20.setTransform(26.7,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AkGAAIINAA");
	this.shape_21.setTransform(27.4,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AkNAAIIbAA");
	this.shape_22.setTransform(27.9,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AkTAAIInAA");
	this.shape_23.setTransform(28.4,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AEZAAIoxAA");
	this.shape_24.setTransform(28.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).wait(1));

	// Layer 1
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(9.1,0,1,1,-90,0,0,0.4,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:61.1},24,cjs.Ease.get(0.5)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.8,-12.1,21.9,24.3);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-40.7,1,1,0,0,0,0.1,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,regY:0,y:213.5},149,cjs.Ease.get(0.5)).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAAgVIAAAr");
	this.shape.setTransform(-0.2,-45.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AAAAkIAAhG");
	this.shape_1.setTransform(-0.2,-44.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AAAAxIAAhh");
	this.shape_2.setTransform(-0.2,-43.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AAAA+IAAh7");
	this.shape_3.setTransform(-0.2,-42.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AAABLIAAiV");
	this.shape_4.setTransform(-0.2,-40.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AAABYIAAiv");
	this.shape_5.setTransform(-0.2,-39.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AAABlIAAjI");
	this.shape_6.setTransform(-0.2,-38.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AAAByIAAjj");
	this.shape_7.setTransform(-0.2,-37.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AAAB+IAAj7");
	this.shape_8.setTransform(-0.2,-36.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AAACLIAAkV");
	this.shape_9.setTransform(-0.2,-35.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AAACYIAAkv");
	this.shape_10.setTransform(-0.2,-34.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AAACkIAAlH");
	this.shape_11.setTransform(-0.2,-33);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AAACxIAAlh");
	this.shape_12.setTransform(-0.2,-31.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AAAC+IAAl7");
	this.shape_13.setTransform(-0.1,-30.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AAADKIAAmT");
	this.shape_14.setTransform(-0.1,-29.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AAADWIAAmr");
	this.shape_15.setTransform(-0.1,-28.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AAADjIAAnF");
	this.shape_16.setTransform(-0.1,-27.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AAADvIAAnd");
	this.shape_17.setTransform(-0.1,-26.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AAAD7IAAn1");
	this.shape_18.setTransform(-0.1,-25.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AAAEHIAAoN");
	this.shape_19.setTransform(-0.1,-24.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AAAETIAAol");
	this.shape_20.setTransform(-0.1,-23.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AAAEfIAAo9");
	this.shape_21.setTransform(-0.1,-22.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AAAErIAApV");
	this.shape_22.setTransform(-0.1,-21.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AAAE3IAApt");
	this.shape_23.setTransform(-0.1,-20);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AAAFDIAAqF");
	this.shape_24.setTransform(-0.1,-19);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AAAFPIAAqd");
	this.shape_25.setTransform(-0.1,-17.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AAAFbIAAq1");
	this.shape_26.setTransform(-0.1,-16.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AAAFmIAArL");
	this.shape_27.setTransform(-0.1,-15.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AAAFyIAArj");
	this.shape_28.setTransform(-0.1,-14.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AAAF9IAAr5");
	this.shape_29.setTransform(-0.1,-13.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AAAGJIAAsR");
	this.shape_30.setTransform(-0.1,-12.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AAAGUIAAsn");
	this.shape_31.setTransform(-0.1,-11.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AAAGgIAAs/");
	this.shape_32.setTransform(-0.1,-10.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AAAGrIAAtV");
	this.shape_33.setTransform(-0.1,-9.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AAAG2IAAtr");
	this.shape_34.setTransform(-0.1,-8.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AAAHBIAAuB");
	this.shape_35.setTransform(-0.1,-7.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AAAHMIAAuX");
	this.shape_36.setTransform(-0.1,-6.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AAAHYIAAuv");
	this.shape_37.setTransform(-0.1,-5.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AAAHiIAAvD");
	this.shape_38.setTransform(-0.1,-4.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AAAHuIAAvb");
	this.shape_39.setTransform(-0.1,-3.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AAAH4IAAvv");
	this.shape_40.setTransform(-0.1,-2.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AAAIDIAAwF");
	this.shape_41.setTransform(-0.1,-2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AAAIOIAAwb");
	this.shape_42.setTransform(-0.1,-1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AAAIZIAAwx");
	this.shape_43.setTransform(-0.1,-0.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AAAIjIAAxF");
	this.shape_44.setTransform(-0.1,0.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AAAIuIAAxb");
	this.shape_45.setTransform(-0.1,1.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AAAI5IAAxx");
	this.shape_46.setTransform(-0.1,2.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AAAJDIAAyF");
	this.shape_47.setTransform(-0.1,3.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AAAJNIAAyZ");
	this.shape_48.setTransform(-0.1,4.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AAAJYIAAyv");
	this.shape_49.setTransform(-0.1,5.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AAAJiIAAzD");
	this.shape_50.setTransform(-0.1,6.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AAAJsIAAzX");
	this.shape_51.setTransform(-0.1,7.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AAAJ3IAAzt");
	this.shape_52.setTransform(-0.1,8.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AAAKBIAA0B");
	this.shape_53.setTransform(-0.1,9.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AAAKLIAA0V");
	this.shape_54.setTransform(-0.1,10);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AAAKVIAA0p");
	this.shape_55.setTransform(-0.1,10.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AAAKfIAA09");
	this.shape_56.setTransform(-0.1,11.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AAAKpIAA1R");
	this.shape_57.setTransform(-0.1,12.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AAAKyIAA1j");
	this.shape_58.setTransform(-0.1,13.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AAAK8IAA13");
	this.shape_59.setTransform(-0.1,14.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(5,1,1).p("AAALGIAA2L");
	this.shape_60.setTransform(-0.1,15.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(5,1,1).p("AAALQIAA2f");
	this.shape_61.setTransform(-0.1,16.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(5,1,1).p("AAALZIAA2x");
	this.shape_62.setTransform(-0.1,17);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(5,1,1).p("AAALjIAA3F");
	this.shape_63.setTransform(-0.1,17.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(5,1,1).p("AAALsIAA3X");
	this.shape_64.setTransform(-0.1,18.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(5,1,1).p("AAAL2IAA3r");
	this.shape_65.setTransform(-0.1,19.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(5,1,1).p("AAAL/IAA39");
	this.shape_66.setTransform(-0.1,20.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(5,1,1).p("AAAMIIAA4P");
	this.shape_67.setTransform(-0.1,21.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(5,1,1).p("AAAMRIAA4h");
	this.shape_68.setTransform(-0.1,21.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(5,1,1).p("AAAMbIAA41");
	this.shape_69.setTransform(-0.1,22.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(5,1,1).p("AAAMkIAA5H");
	this.shape_70.setTransform(-0.1,23.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(5,1,1).p("AAAMtIAA5Z");
	this.shape_71.setTransform(-0.1,24.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(5,1,1).p("AAAM2IAA5r");
	this.shape_72.setTransform(-0.1,25.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(5,1,1).p("AAAM/IAA59");
	this.shape_73.setTransform(-0.1,25.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(5,1,1).p("AAANIIAA6P");
	this.shape_74.setTransform(-0.1,26.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(5,1,1).p("AAANRIAA6h");
	this.shape_75.setTransform(0,27.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(5,1,1).p("AAANZIAA6x");
	this.shape_76.setTransform(0,28.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(5,1,1).p("AAANiIAA7D");
	this.shape_77.setTransform(0,29);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(5,1,1).p("AAANrIAA7V");
	this.shape_78.setTransform(0,29.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(5,1,1).p("AAANzIAA7l");
	this.shape_79.setTransform(0,30.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(5,1,1).p("AAAN8IAA73");
	this.shape_80.setTransform(0,31.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(5,1,1).p("AAAOEIAA8H");
	this.shape_81.setTransform(0,32.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(5,1,1).p("AAAONIAA8Z");
	this.shape_82.setTransform(0,32.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(5,1,1).p("AAAOVIAA8p");
	this.shape_83.setTransform(0,33.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(5,1,1).p("AAAOdIAA85");
	this.shape_84.setTransform(0,34.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(5,1,1).p("AAAOmIAA9L");
	this.shape_85.setTransform(0,35);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(5,1,1).p("AAAOuIAA9b");
	this.shape_86.setTransform(0,35.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(5,1,1).p("AAAO2IAA9r");
	this.shape_87.setTransform(0,36.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(5,1,1).p("AAAO+IAA97");
	this.shape_88.setTransform(0,37.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(5,1,1).p("AAAPGIAA+L");
	this.shape_89.setTransform(0,37.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(5,1,1).p("AAAPOIAA+b");
	this.shape_90.setTransform(0,38.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(5,1,1).p("AAAPWIAA+r");
	this.shape_91.setTransform(0,39.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(5,1,1).p("AAAPeIAA+7");
	this.shape_92.setTransform(0,40);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(5,1,1).p("AAAPlIAA/J");
	this.shape_93.setTransform(0,40.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(5,1,1).p("AAAPtIAA/Z");
	this.shape_94.setTransform(0,41.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(5,1,1).p("AAAP1IAA/p");
	this.shape_95.setTransform(0,42);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(5,1,1).p("AAAP8IAA/3");
	this.shape_96.setTransform(0,42.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(5,1,1).p("AAAQEMAAAggH");
	this.shape_97.setTransform(0,43.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(5,1,1).p("AAAQLMAAAggV");
	this.shape_98.setTransform(0,44);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(5,1,1).p("AAAQTMAAAggl");
	this.shape_99.setTransform(0,44.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(5,1,1).p("AAAQaMAAAggz");
	this.shape_100.setTransform(0,45.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(5,1,1).p("AAAQhMAAAghB");
	this.shape_101.setTransform(0,46);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(5,1,1).p("AAAQoMAAAghP");
	this.shape_102.setTransform(0,46.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(5,1,1).p("AAAQwMAAAghf");
	this.shape_103.setTransform(0,47.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(5,1,1).p("AAAQ3MAAAght");
	this.shape_104.setTransform(0,47.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(5,1,1).p("AAAQ+MAAAgh7");
	this.shape_105.setTransform(0,48.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(5,1,1).p("AAARFMAAAgiJ");
	this.shape_106.setTransform(0,49.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(5,1,1).p("AAARMMAAAgiX");
	this.shape_107.setTransform(0,49.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(5,1,1).p("AAARTMAAAgil");
	this.shape_108.setTransform(0,50.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(5,1,1).p("AAARZMAAAgix");
	this.shape_109.setTransform(0,50.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(5,1,1).p("AAARgMAAAgi/");
	this.shape_110.setTransform(0,51.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(5,1,1).p("AAARnMAAAgjN");
	this.shape_111.setTransform(0,52.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(5,1,1).p("AAARtMAAAgjZ");
	this.shape_112.setTransform(0,52.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(5,1,1).p("AAAR0MAAAgjn");
	this.shape_113.setTransform(0,53.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(5,1,1).p("AAAR6MAAAgjz");
	this.shape_114.setTransform(0,53.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(5,1,1).p("AAASBMAAAgkB");
	this.shape_115.setTransform(0,54.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(5,1,1).p("AAASHMAAAgkN");
	this.shape_116.setTransform(0,55);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(5,1,1).p("AAASOMAAAgkb");
	this.shape_117.setTransform(0,55.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(5,1,1).p("AAASUMAAAgkn");
	this.shape_118.setTransform(0,56.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(5,1,1).p("AAASaMAAAgkz");
	this.shape_119.setTransform(0,56.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(5,1,1).p("AAASgMAAAgk/");
	this.shape_120.setTransform(0,57.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(5,1,1).p("AAASmMAAAglL");
	this.shape_121.setTransform(0,57.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(5,1,1).p("AAASsMAAAglX");
	this.shape_122.setTransform(0,58.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(5,1,1).p("AAASyMAAAglj");
	this.shape_123.setTransform(0,58.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(5,1,1).p("AAAS4MAAAglv");
	this.shape_124.setTransform(0,59.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(5,1,1).p("AAAS+MAAAgl7");
	this.shape_125.setTransform(0,59.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(5,1,1).p("AAATEMAAAgmH");
	this.shape_126.setTransform(0,60.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(5,1,1).p("AAATKMAAAgmT");
	this.shape_127.setTransform(0,60.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(5,1,1).p("AAATQMAAAgmf");
	this.shape_128.setTransform(0,61.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(5,1,1).p("AAATVMAAAgmp");
	this.shape_129.setTransform(0,61.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(5,1,1).p("AAATbMAAAgm1");
	this.shape_130.setTransform(0,62.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(5,1,1).p("AAATgMAAAgm/");
	this.shape_131.setTransform(0,62.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(5,1,1).p("AAATmMAAAgnL");
	this.shape_132.setTransform(0,63.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(5,1,1).p("AAATrMAAAgnV");
	this.shape_133.setTransform(0,63.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(5,1,1).p("AAATwMAAAgnf");
	this.shape_134.setTransform(0,64.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(5,1,1).p("AAAT1MAAAgnp");
	this.shape_135.setTransform(0,64.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(5,1,1).p("AAAT7MAAAgn1");
	this.shape_136.setTransform(0,65.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(5,1,1).p("AAAUAMAAAgn/");
	this.shape_137.setTransform(0,65.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(5,1,1).p("AAAUFMAAAgoJ");
	this.shape_138.setTransform(0,66.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(5,1,1).p("AAAUKMAAAgoT");
	this.shape_139.setTransform(0,66.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(5,1,1).p("AAAUPMAAAgod");
	this.shape_140.setTransform(0,67);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(5,1,1).p("AAAUUMAAAgon");
	this.shape_141.setTransform(0,67.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(5,1,1).p("AAAUZMAAAgox");
	this.shape_142.setTransform(0,67.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(5,1,1).p("AAAUeMAAAgo7");
	this.shape_143.setTransform(0,68.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(5,1,1).p("AAAUiMAAAgpD");
	this.shape_144.setTransform(0,68.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(5,1,1).p("AAAUnMAAAgpN");
	this.shape_145.setTransform(0,69.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(5,1,1).p("AAAUsMAAAgpX");
	this.shape_146.setTransform(0,69.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(5,1,1).p("AAAUwMAAAgpf");
	this.shape_147.setTransform(0,69.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(5,1,1).p("AAAU1MAAAgpp");
	this.shape_148.setTransform(0,70.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(5,1,1).p("AAA04MAAAApx");
	this.shape_149.setTransform(0,70.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,-54.1,24.3,21.9);


(lib.honeyflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.honeybee();
	this.instance.parent = this;
	this.instance.setTransform(38.4,-170.9,0.422,0.422,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-215.3,105.5,81.8);


// stage content:
(lib.writingsuccess_Fontkid_I = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_310 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(310).call(this.frame_310).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(275.4,104.6,0.999,0.999,8.5,0,0,22.4,-144);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({y:444.6},150).wait(10).to({x:235.5,y:102.6},0).to({x:308.5},30).wait(10).to({x:235.5,y:445.6},0).to({x:308.5},31).wait(9).to({startPosition:0},0).to({regY:-143.8,rotation:-43.3,guide:{path:[308.4,445.6,345.4,432.8,354.8,459.9,364.2,486.9,346.8,506,329.5,525.1,300.7,514.9,271.9,504.6,240.6,494.5,201.5,482,164.4,493.3,154,496.6,146.2,505,112.9,541.2,86.7,582.8,64.8,617.7,38.1,649]}},61).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(276.6,447.6,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},150).wait(10).to({_off:false,x:317.6,y:103.6},0).to({_off:true},30).wait(10).to({_off:false,x:316.3,y:448.5},0).to({_off:true},31).wait(71));

	// ar3
	this.instance_1 = new lib.ar2("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(286.3,498.1,1,1,0,0,0,46.1,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(209).to({_off:false},0).wait(102));

	// ar2
	this.instance_2 = new lib.ar2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(286.3,28.1,1,1,0,0,0,46.1,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(169).to({_off:false},0).wait(142));

	// ar1
	this.instance_3 = new lib.ar1("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(214.4,196.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(302));

	// 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AgRAAIAjAA");
	this.shape_1.setTransform(238.2,446.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("AgdAAIA7AA");
	this.shape_2.setTransform(239.3,446.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("AgoAAIBRAA");
	this.shape_3.setTransform(240.5,446.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("Ag0AAIBoAA");
	this.shape_4.setTransform(241.6,446.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(25,1,1).p("Ag/AAIB/AA");
	this.shape_5.setTransform(242.8,446.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(25,1,1).p("AhKAAICWAA");
	this.shape_6.setTransform(243.9,446.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(25,1,1).p("AhWAAICtAA");
	this.shape_7.setTransform(245.1,446.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(25,1,1).p("AhhAAIDEAA");
	this.shape_8.setTransform(246.2,446.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(25,1,1).p("AhtAAIDbAA");
	this.shape_9.setTransform(247.3,446.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(25,1,1).p("Ah4AAIDxAA");
	this.shape_10.setTransform(248.5,446.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(25,1,1).p("AiEAAIEJAA");
	this.shape_11.setTransform(249.6,446.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(25,1,1).p("AiPAAIEfAA");
	this.shape_12.setTransform(250.8,446.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(25,1,1).p("AibAAIE3AA");
	this.shape_13.setTransform(251.9,446.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(25,1,1).p("AimAAIFNAA");
	this.shape_14.setTransform(253.1,446.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(25,1,1).p("AixAAIFkAA");
	this.shape_15.setTransform(254.2,446.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(25,1,1).p("Ai9AAIF7AA");
	this.shape_16.setTransform(255.4,446.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(25,1,1).p("AjJAAIGSAA");
	this.shape_17.setTransform(256.5,446.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(25,1,1).p("AjUAAIGpAA");
	this.shape_18.setTransform(257.7,446.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(25,1,1).p("AjgAAIHAAA");
	this.shape_19.setTransform(258.8,446.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(25,1,1).p("AjrAAIHXAA");
	this.shape_20.setTransform(259.9,446.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(25,1,1).p("Aj2AAIHtAA");
	this.shape_21.setTransform(261.1,446.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(25,1,1).p("AkCAAIIFAA");
	this.shape_22.setTransform(262.2,446.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(25,1,1).p("AkNAAIIbAA");
	this.shape_23.setTransform(263.4,446.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(25,1,1).p("AkZAAIIzAA");
	this.shape_24.setTransform(264.5,446.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(25,1,1).p("AkkAAIJJAA");
	this.shape_25.setTransform(265.7,446.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(25,1,1).p("AkwAAIJgAA");
	this.shape_26.setTransform(266.8,446.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(25,1,1).p("Ak7AAIJ3AA");
	this.shape_27.setTransform(268,446.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(25,1,1).p("AlHAAIKPAA");
	this.shape_28.setTransform(269.1,446.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(25,1,1).p("AlSAAIKlAA");
	this.shape_29.setTransform(270.3,446.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(25,1,1).p("AldAAIK7AA");
	this.shape_30.setTransform(271.4,446.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(25,1,1).p("AlpAAILTAA");
	this.shape_31.setTransform(272.5,446.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(25,1,1).p("Al0AAILpAA");
	this.shape_32.setTransform(273.7,446.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},209).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).wait(71));

	// 2
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(25,1,1).p("AgRAAIAjAA");
	this.shape_33.setTransform(238.2,103.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(25,1,1).p("AgdAAIA7AA");
	this.shape_34.setTransform(239.3,103.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(25,1,1).p("AgoAAIBRAA");
	this.shape_35.setTransform(240.5,103.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(25,1,1).p("Ag0AAIBoAA");
	this.shape_36.setTransform(241.6,103.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(25,1,1).p("Ag/AAIB/AA");
	this.shape_37.setTransform(242.8,103.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(25,1,1).p("AhKAAICWAA");
	this.shape_38.setTransform(243.9,103.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(25,1,1).p("AhWAAICtAA");
	this.shape_39.setTransform(245.1,103.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(25,1,1).p("AhhAAIDEAA");
	this.shape_40.setTransform(246.2,103.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(25,1,1).p("AhtAAIDbAA");
	this.shape_41.setTransform(247.3,103.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(25,1,1).p("Ah4AAIDxAA");
	this.shape_42.setTransform(248.5,103.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(25,1,1).p("AiEAAIEJAA");
	this.shape_43.setTransform(249.6,103.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(25,1,1).p("AiPAAIEfAA");
	this.shape_44.setTransform(250.8,103.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(25,1,1).p("AibAAIE3AA");
	this.shape_45.setTransform(251.9,103.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(25,1,1).p("AimAAIFNAA");
	this.shape_46.setTransform(253.1,103.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(25,1,1).p("AixAAIFkAA");
	this.shape_47.setTransform(254.2,103.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(25,1,1).p("Ai9AAIF7AA");
	this.shape_48.setTransform(255.4,103.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(25,1,1).p("AjJAAIGSAA");
	this.shape_49.setTransform(256.5,103.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(25,1,1).p("AjUAAIGpAA");
	this.shape_50.setTransform(257.7,103.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(25,1,1).p("AjgAAIHAAA");
	this.shape_51.setTransform(258.8,103.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(25,1,1).p("AjrAAIHXAA");
	this.shape_52.setTransform(259.9,103.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(25,1,1).p("Aj2AAIHtAA");
	this.shape_53.setTransform(261.1,103.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(25,1,1).p("AkCAAIIFAA");
	this.shape_54.setTransform(262.2,103.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(25,1,1).p("AkNAAIIbAA");
	this.shape_55.setTransform(263.4,103.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(25,1,1).p("AkZAAIIzAA");
	this.shape_56.setTransform(264.5,103.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(25,1,1).p("AkkAAIJJAA");
	this.shape_57.setTransform(265.7,103.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(25,1,1).p("AkwAAIJgAA");
	this.shape_58.setTransform(266.8,103.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(25,1,1).p("Ak7AAIJ3AA");
	this.shape_59.setTransform(268,103.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(25,1,1).p("AlHAAIKPAA");
	this.shape_60.setTransform(269.1,103.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(25,1,1).p("AlSAAIKlAA");
	this.shape_61.setTransform(270.3,103.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(25,1,1).p("AldAAIK7AA");
	this.shape_62.setTransform(271.4,103.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(25,1,1).p("AlpAAILTAA");
	this.shape_63.setTransform(272.5,103.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(25,1,1).p("Al0AAILpAA");
	this.shape_64.setTransform(273.7,103.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_33}]},169).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).wait(111));

	// 1
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(25,1,1).p("AAAgRIAAAk");
	this.shape_65.setTransform(275.4,104.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(25,1,1).p("AAAAeIAAg7");
	this.shape_66.setTransform(275.4,105.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(25,1,1).p("AAAApIAAhR");
	this.shape_67.setTransform(275.4,106.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(25,1,1).p("AAAA0IAAhn");
	this.shape_68.setTransform(275.4,107.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(25,1,1).p("AAAA/IAAh+");
	this.shape_69.setTransform(275.4,108.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(25,1,1).p("AAABLIAAiV");
	this.shape_70.setTransform(275.4,110.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(25,1,1).p("AAABWIAAir");
	this.shape_71.setTransform(275.4,111.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(25,1,1).p("AAABhIAAjB");
	this.shape_72.setTransform(275.4,112.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(25,1,1).p("AAABsIAAjY");
	this.shape_73.setTransform(275.4,113.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(25,1,1).p("AAAB4IAAjv");
	this.shape_74.setTransform(275.4,114.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(25,1,1).p("AAACDIAAkF");
	this.shape_75.setTransform(275.4,115.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(25,1,1).p("AAACOIAAkb");
	this.shape_76.setTransform(275.4,116.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(25,1,1).p("AAACaIAAkz");
	this.shape_77.setTransform(275.4,118);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(25,1,1).p("AAAClIAAlJ");
	this.shape_78.setTransform(275.4,119.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(25,1,1).p("AAACwIAAlf");
	this.shape_79.setTransform(275.4,120.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(25,1,1).p("AAAC8IAAl2");
	this.shape_80.setTransform(275.4,121.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(25,1,1).p("AAADHIAAmN");
	this.shape_81.setTransform(275.4,122.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(25,1,1).p("AAADSIAAmj");
	this.shape_82.setTransform(275.4,123.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(25,1,1).p("AAADdIAAm5");
	this.shape_83.setTransform(275.4,124.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(25,1,1).p("AAADpIAAnR");
	this.shape_84.setTransform(275.4,126);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(25,1,1).p("AAADzIAAnm");
	this.shape_85.setTransform(275.4,127.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(25,1,1).p("AAAD/IAAn9");
	this.shape_86.setTransform(275.4,128.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(25,1,1).p("AAAEKIAAoT");
	this.shape_87.setTransform(275.4,129.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(25,1,1).p("AAAEWIAAor");
	this.shape_88.setTransform(275.4,130.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(25,1,1).p("AAAEhIAApA");
	this.shape_89.setTransform(275.4,131.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(25,1,1).p("AAAEsIAApX");
	this.shape_90.setTransform(275.4,132.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(25,1,1).p("AAAE3IAApt");
	this.shape_91.setTransform(275.4,134);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(25,1,1).p("AAAFCIAAqD");
	this.shape_92.setTransform(275.4,135.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(25,1,1).p("AAAFOIAAqb");
	this.shape_93.setTransform(275.4,136.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(25,1,1).p("AAAFZIAAqx");
	this.shape_94.setTransform(275.4,137.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(25,1,1).p("AAAFkIAArH");
	this.shape_95.setTransform(275.4,138.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(25,1,1).p("AAAFvIAArd");
	this.shape_96.setTransform(275.4,139.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(25,1,1).p("AAAF7IAAr1");
	this.shape_97.setTransform(275.4,140.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(25,1,1).p("AAAGGIAAsL");
	this.shape_98.setTransform(275.4,142);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(25,1,1).p("AAAGRIAAsh");
	this.shape_99.setTransform(275.4,143.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(25,1,1).p("AAAGdIAAs5");
	this.shape_100.setTransform(275.4,144.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(25,1,1).p("AAAGoIAAtP");
	this.shape_101.setTransform(275.4,145.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(25,1,1).p("AAAGzIAAtl");
	this.shape_102.setTransform(275.4,146.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(25,1,1).p("AAAG+IAAt7");
	this.shape_103.setTransform(275.4,147.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(25,1,1).p("AAAHKIAAuT");
	this.shape_104.setTransform(275.4,148.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(25,1,1).p("AAAHVIAAup");
	this.shape_105.setTransform(275.4,149.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(25,1,1).p("AAAHgIAAu/");
	this.shape_106.setTransform(275.4,151.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(25,1,1).p("AAAHrIAAvV");
	this.shape_107.setTransform(275.4,152.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(25,1,1).p("AAAH3IAAvt");
	this.shape_108.setTransform(275.4,153.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(25,1,1).p("AAAICIAAwD");
	this.shape_109.setTransform(275.4,154.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(25,1,1).p("AAAINIAAwZ");
	this.shape_110.setTransform(275.4,155.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(25,1,1).p("AAAIYIAAwv");
	this.shape_111.setTransform(275.4,156.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(25,1,1).p("AAAIkIAAxH");
	this.shape_112.setTransform(275.4,157.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(25,1,1).p("AAAIvIAAxd");
	this.shape_113.setTransform(275.4,159.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(25,1,1).p("AAAI6IAAxz");
	this.shape_114.setTransform(275.4,160.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(25,1,1).p("AAAJFIAAyJ");
	this.shape_115.setTransform(275.4,161.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(25,1,1).p("AAAJRIAAyh");
	this.shape_116.setTransform(275.4,162.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(25,1,1).p("AAAJcIAAy3");
	this.shape_117.setTransform(275.4,163.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(25,1,1).p("AAAJnIAAzN");
	this.shape_118.setTransform(275.4,164.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(25,1,1).p("AAAJzIAAzl");
	this.shape_119.setTransform(275.4,165.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(25,1,1).p("AAAJ+IAAz7");
	this.shape_120.setTransform(275.4,167);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(25,1,1).p("AAAKJIAA0R");
	this.shape_121.setTransform(275.4,168.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(25,1,1).p("AAAKUIAA0n");
	this.shape_122.setTransform(275.4,169.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(25,1,1).p("AAAKgIAA0+");
	this.shape_123.setTransform(275.4,170.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(25,1,1).p("AAAKrIAA1V");
	this.shape_124.setTransform(275.4,171.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(25,1,1).p("AAAK2IAA1r");
	this.shape_125.setTransform(275.4,172.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(25,1,1).p("AAALBIAA2B");
	this.shape_126.setTransform(275.4,173.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(25,1,1).p("AAALNIAA2Z");
	this.shape_127.setTransform(275.4,175);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(25,1,1).p("AAALYIAA2u");
	this.shape_128.setTransform(275.4,176.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(25,1,1).p("AAALjIAA3F");
	this.shape_129.setTransform(275.4,177.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(25,1,1).p("AAALuIAA3b");
	this.shape_130.setTransform(275.4,178.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(25,1,1).p("AAAL5IAA3y");
	this.shape_131.setTransform(275.4,179.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(25,1,1).p("AAAMFIAA4J");
	this.shape_132.setTransform(275.4,180.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(25,1,1).p("AAAMQIAA4f");
	this.shape_133.setTransform(275.4,181.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(25,1,1).p("AAAMbIAA41");
	this.shape_134.setTransform(275.4,183);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(25,1,1).p("AAAMmIAA5L");
	this.shape_135.setTransform(275.4,184.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(25,1,1).p("AAAMyIAA5j");
	this.shape_136.setTransform(275.4,185.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(25,1,1).p("AAAM9IAA55");
	this.shape_137.setTransform(275.4,186.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(25,1,1).p("AAANIIAA6P");
	this.shape_138.setTransform(275.4,187.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(25,1,1).p("AAANUIAA6n");
	this.shape_139.setTransform(275.4,188.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(25,1,1).p("AAANfIAA69");
	this.shape_140.setTransform(275.4,189.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(25,1,1).p("AAANqIAA7T");
	this.shape_141.setTransform(275.4,191);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(25,1,1).p("AAAN1IAA7p");
	this.shape_142.setTransform(275.4,192.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(25,1,1).p("AAAOAIAA8A");
	this.shape_143.setTransform(275.4,193.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(25,1,1).p("AAAOMIAA8X");
	this.shape_144.setTransform(275.4,194.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(25,1,1).p("AAAOXIAA8t");
	this.shape_145.setTransform(275.4,195.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(25,1,1).p("AAAOiIAA9D");
	this.shape_146.setTransform(275.4,196.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(25,1,1).p("AAAOtIAA9a");
	this.shape_147.setTransform(275.4,197.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(25,1,1).p("AAAO5IAA9x");
	this.shape_148.setTransform(275.4,198.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(25,1,1).p("AAAPEIAA+H");
	this.shape_149.setTransform(275.4,200.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(25,1,1).p("AAAPPIAA+d");
	this.shape_150.setTransform(275.4,201.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").ss(25,1,1).p("AAAPbIAA+0");
	this.shape_151.setTransform(275.4,202.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(25,1,1).p("AAAPmIAA/L");
	this.shape_152.setTransform(275.4,203.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#000000").ss(25,1,1).p("AAAPxIAA/h");
	this.shape_153.setTransform(275.4,204.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(25,1,1).p("AAAP8IAA/3");
	this.shape_154.setTransform(275.4,205.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#000000").ss(25,1,1).p("AAAQIMAAAggP");
	this.shape_155.setTransform(275.4,206.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(25,1,1).p("AAAQTMAAAggl");
	this.shape_156.setTransform(275.4,208.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#000000").ss(25,1,1).p("AAAQeMAAAgg7");
	this.shape_157.setTransform(275.4,209.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(25,1,1).p("AAAQpMAAAghR");
	this.shape_158.setTransform(275.4,210.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#000000").ss(25,1,1).p("AAAQ1MAAAghp");
	this.shape_159.setTransform(275.4,211.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(25,1,1).p("AAARAMAAAgh/");
	this.shape_160.setTransform(275.4,212.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#000000").ss(25,1,1).p("AAARLMAAAgiV");
	this.shape_161.setTransform(275.4,213.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(25,1,1).p("AAARXMAAAgis");
	this.shape_162.setTransform(275.4,214.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#000000").ss(25,1,1).p("AAARiMAAAgjD");
	this.shape_163.setTransform(275.4,216);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(25,1,1).p("AAARtMAAAgjZ");
	this.shape_164.setTransform(275.4,217.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").ss(25,1,1).p("AAAR4MAAAgjv");
	this.shape_165.setTransform(275.4,218.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(25,1,1).p("AAASEMAAAgkG");
	this.shape_166.setTransform(275.4,219.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").ss(25,1,1).p("AAASPMAAAgkd");
	this.shape_167.setTransform(275.4,220.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(25,1,1).p("AAASaMAAAgkz");
	this.shape_168.setTransform(275.4,221.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").ss(25,1,1).p("AAASlMAAAglJ");
	this.shape_169.setTransform(275.4,222.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(25,1,1).p("AAASxMAAAglh");
	this.shape_170.setTransform(275.4,224);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").ss(25,1,1).p("AAAS8MAAAgl3");
	this.shape_171.setTransform(275.4,225.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").ss(25,1,1).p("AAATHMAAAgmN");
	this.shape_172.setTransform(275.4,226.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#000000").ss(25,1,1).p("AAATSMAAAgmj");
	this.shape_173.setTransform(275.4,227.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(25,1,1).p("AAATdMAAAgm5");
	this.shape_174.setTransform(275.4,228.6);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#000000").ss(25,1,1).p("AAATpMAAAgnR");
	this.shape_175.setTransform(275.4,229.7);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#000000").ss(25,1,1).p("AAAT0MAAAgnn");
	this.shape_176.setTransform(275.4,230.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#000000").ss(25,1,1).p("AAAT/MAAAgn9");
	this.shape_177.setTransform(275.4,232);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#000000").ss(25,1,1).p("AAAULMAAAgoU");
	this.shape_178.setTransform(275.4,233.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#000000").ss(25,1,1).p("AAAUWMAAAgor");
	this.shape_179.setTransform(275.4,234.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").ss(25,1,1).p("AAAUhMAAAgpB");
	this.shape_180.setTransform(275.4,235.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#000000").ss(25,1,1).p("AAAUtMAAAgpZ");
	this.shape_181.setTransform(275.4,236.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#000000").ss(25,1,1).p("AAAU4MAAAgpu");
	this.shape_182.setTransform(275.4,237.7);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#000000").ss(25,1,1).p("AAAVDMAAAgqF");
	this.shape_183.setTransform(275.4,238.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#000000").ss(25,1,1).p("AAAVOMAAAgqb");
	this.shape_184.setTransform(275.4,240);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#000000").ss(25,1,1).p("AAAVZMAAAgqx");
	this.shape_185.setTransform(275.4,241.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#000000").ss(25,1,1).p("AAAVlMAAAgrJ");
	this.shape_186.setTransform(275.4,242.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#000000").ss(25,1,1).p("AAAVwMAAAgrf");
	this.shape_187.setTransform(275.4,243.4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#000000").ss(25,1,1).p("AAAV7MAAAgr1");
	this.shape_188.setTransform(275.4,244.5);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#000000").ss(25,1,1).p("AAAWGMAAAgsL");
	this.shape_189.setTransform(275.4,245.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#000000").ss(25,1,1).p("AAAWSMAAAgsj");
	this.shape_190.setTransform(275.4,246.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#000000").ss(25,1,1).p("AAAWdMAAAgs5");
	this.shape_191.setTransform(275.4,248);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#000000").ss(25,1,1).p("AAAWoMAAAgtP");
	this.shape_192.setTransform(275.4,249.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#000000").ss(25,1,1).p("AAAWzMAAAgtl");
	this.shape_193.setTransform(275.4,250.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#000000").ss(25,1,1).p("AAAW/MAAAgt9");
	this.shape_194.setTransform(275.4,251.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#000000").ss(25,1,1).p("AAAXKMAAAguT");
	this.shape_195.setTransform(275.4,252.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#000000").ss(25,1,1).p("AAAXVMAAAgup");
	this.shape_196.setTransform(275.4,253.7);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#000000").ss(25,1,1).p("AAAXhMAAAgvB");
	this.shape_197.setTransform(275.4,254.8);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#000000").ss(25,1,1).p("AAAXsMAAAgvX");
	this.shape_198.setTransform(275.4,255.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#000000").ss(25,1,1).p("AAAX3MAAAgvt");
	this.shape_199.setTransform(275.4,257.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#000000").ss(25,1,1).p("AAAYCMAAAgwD");
	this.shape_200.setTransform(275.4,258.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#000000").ss(25,1,1).p("AAAYOMAAAgwb");
	this.shape_201.setTransform(275.4,259.4);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#000000").ss(25,1,1).p("AAAYZMAAAgwx");
	this.shape_202.setTransform(275.4,260.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#000000").ss(25,1,1).p("AAAYkMAAAgxH");
	this.shape_203.setTransform(275.4,261.6);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#000000").ss(25,1,1).p("AAAYvMAAAgxd");
	this.shape_204.setTransform(275.4,262.8);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#000000").ss(25,1,1).p("AAAY7MAAAgx1");
	this.shape_205.setTransform(275.4,263.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#000000").ss(25,1,1).p("AAAZGMAAAgyL");
	this.shape_206.setTransform(275.4,265);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#000000").ss(25,1,1).p("AAAZRMAAAgyh");
	this.shape_207.setTransform(275.4,266.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#000000").ss(25,1,1).p("AAAZcMAAAgy3");
	this.shape_208.setTransform(275.4,267.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#000000").ss(25,1,1).p("AAAZoMAAAgzP");
	this.shape_209.setTransform(275.4,268.5);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#000000").ss(25,1,1).p("AAAZzMAAAgzk");
	this.shape_210.setTransform(275.4,269.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#000000").ss(25,1,1).p("AAAZ+MAAAgz7");
	this.shape_211.setTransform(275.4,270.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#000000").ss(25,1,1).p("AAAaJMAAAg0R");
	this.shape_212.setTransform(275.4,271.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#000000").ss(25,1,1).p("AAAaVMAAAg0p");
	this.shape_213.setTransform(275.4,273);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#000000").ss(25,1,1).p("AAAagMAAAg0/");
	this.shape_214.setTransform(275.4,274.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#000000").ss(25,1,1).p("AAA6qMAAAA1V");
	this.shape_215.setTransform(275.4,275.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_65}]},9).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).wait(152));

	// Base
	this.instance_4 = new lib.Symbol1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,274.5);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(311));

	// Background
	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_216.setTransform(275,275,3.373,2.543);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_217.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_217},{t:this.shape_216}]}).wait(311));

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