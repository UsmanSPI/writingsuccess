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


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AH9MnQkACJk2AAQlHAAjSigQjui7AAleIAAwPQAAiXCxAAQCfAAAACXIAAQNQAAF4G+AAQDTAACshlQCuhnAAiVIAAwdQAAieCoAAQCeAAAACXIAAYsQAACcieAAQibAAgLiJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.2,-94.3,166.5,188.8);


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
	this.instance.setTransform(95.2,7.3,1,1,122,0,0,0.3,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:300,guide:{path:[95.2,7.2,54.1,-16.4,12.9,-40,0.7,-45.8,-12.8,-42.3,-27.9,-38.2,-35.7,-24.7,-43.5,-11.2,-39.5,3.8,-35.9,17.3,-24.7,25,-23.4,25.7,-22.2,26.4], orient:'auto'}},119).wait(1));

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_59 = new cjs.Graphics().p("ApqzVQIBAAFqFqQFqFsAAH/QAAIBlqFqQlqFroBAAg");
	var mask_graphics_60 = new cjs.Graphics().p("AqGzTQIAgXF6FaQF6FaAXIAQAXH/lZF6QlZF7oAAXg");
	var mask_graphics_61 = new cjs.Graphics().p("AqizNQH/guGJFIQGJFKAuH+QAuH9lIGJQlJGLn9Aug");
	var mask_graphics_62 = new cjs.Graphics().p("Aq+zDQH8hFGYE2QGXE3BFH8QBFH7k2GXQk3GZn7BFg");
	var mask_graphics_63 = new cjs.Graphics().p("ArZy2QH4hbGlEjQGlElBbH3QBcH4kjGlQklGmn3Bcg");
	var mask_graphics_64 = new cjs.Graphics().p("Ar1ylQH0hyGxEQQGyESByHzQByHzkQGyQkRGynyBzg");
	var mask_graphics_65 = new cjs.Graphics().p("AsQyQQHuiJG9D9QG+D+CIHtQCJHuj9G9Qj9G+ntCJg");
	var mask_graphics_66 = new cjs.Graphics().p("Asrx4QHnieHJDoQHIDpCfHnQCeHnjoHIQjpHKnmCeg");
	var mask_graphics_67 = new cjs.Graphics().p("AtFxcQHfi0HSDTQHTDVC0HfQC1HfjUHSQjUHUngC0g");
	var mask_graphics_68 = new cjs.Graphics().p("Atfw9QHXjKHbC+QHcDADJHXQDKHWi+HcQi/HcnXDKg");
	var mask_graphics_69 = new cjs.Graphics().p("At4wbQHNjeHjCoQHkCqDfHOQDfHOipHiQiqHlnNDeg");
	var mask_graphics_70 = new cjs.Graphics().p("AuRv1QHDjzHqCTQHrCUDzHDQD0HDiTHqQiUHrnDDzg");
	var mask_graphics_71 = new cjs.Graphics().p("AupvMQG4kHHxB8QHwB+EHG4QEIG4h9HvQh9Hym4EHg");
	var mask_graphics_72 = new cjs.Graphics().p("AvAugQGrkaH3BmQH1BnEaGrQEbGshmH1QhnH3mrEag");
	var mask_graphics_73 = new cjs.Graphics().p("AvXtwQGfkuH6BPQH6BREtGeQEuGfhQH5QhQH7meEtg");
	var mask_graphics_74 = new cjs.Graphics().p("Avts+QGRlAH9A4QH9A6FAGQQFAGRg5H8Qg5H+mRFAg");
	var mask_graphics_75 = new cjs.Graphics().p("AwCsJQGClRIAAhQH+AjFSGBQFRGCgiH+QgiIAmBFSg");
	var mask_graphics_76 = new cjs.Graphics().p("AwWrRQFyliIBAKQIAAMFiFyQFjFzgLH+QgLIClzFig");
	var mask_graphics_77 = new cjs.Graphics().p("AwqqWQFilyIBgNQIAgLFyFhQFzFjAMH+QAMICliFyg");
	var mask_graphics_78 = new cjs.Graphics().p("Aw8pYQFQmCIAgkQH/giGCFRQGCFRAjH+QAjIAlRGCg");
	var mask_graphics_79 = new cjs.Graphics().p("AxPoYQFAmRH9g6QH9g5GQE/QGSE/A6H8QA6H+k/GRg");
	var mask_graphics_80 = new cjs.Graphics().p("AxgnVQEtmfH6hRQH6hQGfEsQGfEuBRH4QBQH7ksGfg");
	var mask_graphics_81 = new cjs.Graphics().p("AxwmQQEamsH2hoQH2hnGrEaQGtEaBnH1QBoH2kaGsg");
	var mask_graphics_82 = new cjs.Graphics().p("Ax/lJQEGm4Hxh/QHxh9G4EGQG4EHB+HwQB+HxkGG4g");
	var mask_graphics_83 = new cjs.Graphics().p("AyNkAQDynEHriUQHqiUHEDyQHEDzCUHqQCUHqjyHEg");
	var mask_graphics_84 = new cjs.Graphics().p("Ayai2QDenOHkiqQHjipHNDdQHPDeCqHjQCqHjjeHOg");
	var mask_graphics_85 = new cjs.Graphics().p("AylhqQDJnXHbjAQHci/HWDJQHYDJC/HaQDAHcjJHXg");
	var mask_graphics_86 = new cjs.Graphics().p("AyvgcQCzngHSjWQHTjTHfCzQHgCzDVHSQDVHSi0Hgg");
	var mask_graphics_87 = new cjs.Graphics().p("Ay4AyQCdnnHIjqQHJjpHnCeQHoCdDpHIQDqHIieHog");
	var mask_graphics_88 = new cjs.Graphics().p("AzACBQCHntG9j+QG/j9HsCHQHvCID+G9QD+G9iIHug");
	var mask_graphics_89 = new cjs.Graphics().p("AzHDSQBynzGxkSQGykRHzBxQH0ByERGxQESGxhxH0g");
	var mask_graphics_90 = new cjs.Graphics().p("AzMEjQBbn3GkklQGmkkH3BaQH5BbEkGkQElGlhaH4g");
	var mask_graphics_91 = new cjs.Graphics().p("AzQF1QBEn7GXk3QGYk3H7BEQH8BEE3GXQE4GWhEH8g");
	var mask_graphics_92 = new cjs.Graphics().p("AzTHIQAtn+GJlJQGKlJH9AtQH/AtFJGIQFJGJgtH+g");
	var mask_graphics_93 = new cjs.Graphics().p("AzUIbQAWoAF5laQF7laH+AWQIBAWFaF5QFbF5gWIAg");
	var mask_graphics_94 = new cjs.Graphics().p("Atsj/QFqlrIAgBQIAgBFrFpQFsFqABIAMgmrAAFQgBoBFqlqg");
	var mask_graphics_95 = new cjs.Graphics().p("AuSjzQFal6IAgYQH/gYF7FYQF7FZAYIAMgmoAB0QgYoAFZl7g");
	var mask_graphics_96 = new cjs.Graphics().p("Au0jkQFImKH+gvQH+gvGKFHQGLFJAuH9MgmgADjQgvn/FImJg");
	var mask_graphics_97 = new cjs.Graphics().p("AvTjUQE2mYH8hGQH7hGGYE2QGZE2BGH6MgmUAFSQhGn8E2mYg");
	var mask_graphics_98 = new cjs.Graphics().p("AvvjCQEkmmH3hcQH4hdGlEjQGnEjBdH3MgmCAHAQhdn5Ejmlg");
	var mask_graphics_99 = new cjs.Graphics().p("AwIiuQERmzHzhzQHzhzGyEPQGzERBzHyMglrAIsQhznzEPmyg");
	var mask_graphics_100 = new cjs.Graphics().p("AwdiZQD9m+HtiKQHtiJG+D7QG/D9CKHsMglQAKYQiKntD8m+g");
	var mask_graphics_101 = new cjs.Graphics().p("AwviDQDpnJHmifQHnigHIDoQHKDoCgHmMgkwAMCQifnnDnnJg");
	var mask_graphics_102 = new cjs.Graphics().p("Aw+hqQDUnUHfi1QHfi1HTDTQHUDTC1HfMgkLANrQi1ngDSnSg");
	var mask_graphics_103 = new cjs.Graphics().p("AxJhRQC/ncHWjLQHWjKHcC9QHdC+DKHXMgjhAPRQjKnWC9ncg");
	var mask_graphics_104 = new cjs.Graphics().p("AxRg2QCpnkHNjgQHOjfHiCnQHlCpDgHNMgizAQ3QjfnOCnnjg");
	var mask_graphics_105 = new cjs.Graphics().p("AxWgaQCUnsHCjzQHDj0HqCSQHsCSD0HDMgiAASZQj0nDCRnqg");
	var mask_graphics_106 = new cjs.Graphics().p("AxXACQB9nwG3kIQG4kIHwB7QHyB9EIG3MghJAT6QkIm3B7nyg");
	var mask_graphics_107 = new cjs.Graphics().p("AxUAhQBmn2GrkbQGrkcH1BlQH3BmEcGrMggOAVYQkbmrBln2g");
	var mask_graphics_108 = new cjs.Graphics().p("AxOBAQBPn5GekvQGekuH5BPQH7BOEvGeI/OW0QkvmeBPn7g");
	var mask_graphics_109 = new cjs.Graphics().p("AxFBhQA5n9GPlAQGRlBH7A4QH/A4FAGQI+KYLQlAmPA3n+g");
	var mask_graphics_110 = new cjs.Graphics().p("Aw4CDQAin/GAlSQGClTH+AhQIAAiFSGBI9CZgQlTmBAhn/g");
	var mask_graphics_111 = new cjs.Graphics().p("AwoCmQALoAFxljQFylkH/ALQIBAKFjFxI73azQljlyAJoAg");
	var mask_graphics_112 = new cjs.Graphics().p("AwUDKQgMoAFhlzQFhl0H/gNQIBgNF0FhI6pcBQlzlhgOoAg");
	var mask_graphics_113 = new cjs.Graphics().p("Av9DvQgjn/FQmCQFQmEH+gkQIAgkGDFQI5WdMQmDlQgln/g");
	var mask_graphics_114 = new cjs.Graphics().p("AviEVQg6n9E+mRQE/mSH7g7QH+g7GSE+I4BeTQmRk+g8n9g");
	var mask_graphics_115 = new cjs.Graphics().p("AvEE7QhRn5EsmfQEsmgH5hSQH6hSGgEsI2ofWQmfkshTn6g");
	var mask_graphics_116 = new cjs.Graphics().p("AujFjQhnn2EZmsQEZmtH0hoQH3hpGsEZMgVMAgVQmskYhqn2g");
	var mask_graphics_117 = new cjs.Graphics().p("At+GLQh+nxEFm4QEGm5Hwh/QHwh/G5EFMgTuAhRQm5kGh/nwg");
	var mask_graphics_118 = new cjs.Graphics().p("AtXGzQiUnqDxnEQDynFHqiUQHqiWHEDyMgSNAiGQnEjxiWnqg");
	var mask_graphics_119 = new cjs.Graphics().p("AssHbQiqnjDcnOQDdnPHjiqQHjisHODdMgQpAi5QnPjdirnjg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(59).to({graphics:mask_graphics_59,x:58.5,y:2.7}).wait(1).to({graphics:mask_graphics_60,x:55.8,y:2.7}).wait(1).to({graphics:mask_graphics_61,x:53,y:2.4}).wait(1).to({graphics:mask_graphics_62,x:50.3,y:2.1}).wait(1).to({graphics:mask_graphics_63,x:47.6,y:1.6}).wait(1).to({graphics:mask_graphics_64,x:44.9,y:1}).wait(1).to({graphics:mask_graphics_65,x:42.2,y:0.3}).wait(1).to({graphics:mask_graphics_66,x:39.6,y:-0.5}).wait(1).to({graphics:mask_graphics_67,x:37,y:-1.4}).wait(1).to({graphics:mask_graphics_68,x:34.4,y:-2.5}).wait(1).to({graphics:mask_graphics_69,x:31.8,y:-3.6}).wait(1).to({graphics:mask_graphics_70,x:29.4,y:-4.9}).wait(1).to({graphics:mask_graphics_71,x:26.9,y:-6.2}).wait(1).to({graphics:mask_graphics_72,x:24.5,y:-7.7}).wait(1).to({graphics:mask_graphics_73,x:22.2,y:-9.2}).wait(1).to({graphics:mask_graphics_74,x:20,y:-10.9}).wait(1).to({graphics:mask_graphics_75,x:17.8,y:-12.6}).wait(1).to({graphics:mask_graphics_76,x:15.7,y:-14.5}).wait(1).to({graphics:mask_graphics_77,x:13.8,y:-16.5}).wait(1).to({graphics:mask_graphics_78,x:11.9,y:-18.5}).wait(1).to({graphics:mask_graphics_79,x:10.2,y:-20.7}).wait(1).to({graphics:mask_graphics_80,x:8.5,y:-22.9}).wait(1).to({graphics:mask_graphics_81,x:7,y:-25.3}).wait(1).to({graphics:mask_graphics_82,x:5.5,y:-27.7}).wait(1).to({graphics:mask_graphics_83,x:4.2,y:-30.1}).wait(1).to({graphics:mask_graphics_84,x:2.9,y:-32.6}).wait(1).to({graphics:mask_graphics_85,x:1.8,y:-35.1}).wait(1).to({graphics:mask_graphics_86,x:0.8,y:-37.7}).wait(1).to({graphics:mask_graphics_87,x:-0.2,y:-40.3}).wait(1).to({graphics:mask_graphics_88,x:-1,y:-43}).wait(1).to({graphics:mask_graphics_89,x:-1.7,y:-45.6}).wait(1).to({graphics:mask_graphics_90,x:-2.3,y:-48.3}).wait(1).to({graphics:mask_graphics_91,x:-2.7,y:-51}).wait(1).to({graphics:mask_graphics_92,x:-3.1,y:-53.8}).wait(1).to({graphics:mask_graphics_93,x:-3.3,y:-56.5}).wait(1).to({graphics:mask_graphics_94,x:-3.3,y:-59.1}).wait(1).to({graphics:mask_graphics_95,x:-3.4,y:-56.3}).wait(1).to({graphics:mask_graphics_96,x:-3.6,y:-53.5}).wait(1).to({graphics:mask_graphics_97,x:-4,y:-50.8}).wait(1).to({graphics:mask_graphics_98,x:-4.4,y:-48.1}).wait(1).to({graphics:mask_graphics_99,x:-5,y:-45.4}).wait(1).to({graphics:mask_graphics_100,x:-5.8,y:-42.8}).wait(1).to({graphics:mask_graphics_101,x:-6.6,y:-40.1}).wait(1).to({graphics:mask_graphics_102,x:-7.5,y:-37.5}).wait(1).to({graphics:mask_graphics_103,x:-8.6,y:-34.9}).wait(1).to({graphics:mask_graphics_104,x:-9.7,y:-32.4}).wait(1).to({graphics:mask_graphics_105,x:-11,y:-29.9}).wait(1).to({graphics:mask_graphics_106,x:-12.3,y:-27.5}).wait(1).to({graphics:mask_graphics_107,x:-13.8,y:-25.1}).wait(1).to({graphics:mask_graphics_108,x:-15.3,y:-22.8}).wait(1).to({graphics:mask_graphics_109,x:-17,y:-20.5}).wait(1).to({graphics:mask_graphics_110,x:-18.8,y:-18.4}).wait(1).to({graphics:mask_graphics_111,x:-20.6,y:-16.3}).wait(1).to({graphics:mask_graphics_112,x:-22.6,y:-14.4}).wait(1).to({graphics:mask_graphics_113,x:-24.7,y:-12.5}).wait(1).to({graphics:mask_graphics_114,x:-26.8,y:-10.8}).wait(1).to({graphics:mask_graphics_115,x:-29.1,y:-9.1}).wait(1).to({graphics:mask_graphics_116,x:-31.4,y:-7.6}).wait(1).to({graphics:mask_graphics_117,x:-33.8,y:-6.1}).wait(1).to({graphics:mask_graphics_118,x:-36.2,y:-4.8}).wait(1).to({graphics:mask_graphics_119,x:-38.7,y:-3.5}).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AKFBoIrwmvQh6g6iHAjQiWAphOCHQhOCHAoCWQAkCHBvBNIBJAp");
	this.shape.setTransform(23.6,-7.3);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(59).to({_off:false},0).wait(61));

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AicBOICTj8ICmBhIiTD8g");
	var mask_1_graphics_1 = new cjs.Graphics().p("AijBKICSj8IC1BpIiSD8g");
	var mask_1_graphics_2 = new cjs.Graphics().p("AirBGICTj8IDEBxIiTD8g");
	var mask_1_graphics_3 = new cjs.Graphics().p("AiyBBICSj8IDTB7IiSD8g");
	var mask_1_graphics_4 = new cjs.Graphics().p("Ai6A9ICTj8IDiCDIiTD8g");
	var mask_1_graphics_5 = new cjs.Graphics().p("AjBA5ICSj8IDxCLIiSD8g");
	var mask_1_graphics_6 = new cjs.Graphics().p("AjJA0ICTj8IEACVIiTD8g");
	var mask_1_graphics_7 = new cjs.Graphics().p("AjQAwICSj8IEPCdIiSD8g");
	var mask_1_graphics_8 = new cjs.Graphics().p("AjYAsICTj8IEeClIiTD8g");
	var mask_1_graphics_9 = new cjs.Graphics().p("AjfAoICSj8IEtCtIiSD8g");
	var mask_1_graphics_10 = new cjs.Graphics().p("AjnAkICTj9IE8C3IiTD8g");
	var mask_1_graphics_11 = new cjs.Graphics().p("AjuAfICSj8IFLC/IiSD8g");
	var mask_1_graphics_12 = new cjs.Graphics().p("Aj2AbICTj8IFaDHIiTD8g");
	var mask_1_graphics_13 = new cjs.Graphics().p("Aj9AXICSj8IFpDPIiSD8g");
	var mask_1_graphics_14 = new cjs.Graphics().p("AkFATICTj8IF4DYIiTD8g");
	var mask_1_graphics_15 = new cjs.Graphics().p("AkMAOICSj8IGHDhIiSD8g");
	var mask_1_graphics_16 = new cjs.Graphics().p("AkUAKICTj8IGWDpIiTD8g");
	var mask_1_graphics_17 = new cjs.Graphics().p("AkbAGICSj8IGlDyIiSD8g");
	var mask_1_graphics_18 = new cjs.Graphics().p("AkjABICTj8IG0D7IiTD8g");
	var mask_1_graphics_19 = new cjs.Graphics().p("AkqgCICSj9IHDECIiSD9g");
	var mask_1_graphics_20 = new cjs.Graphics().p("AkygGICTj9IHSEKIiTD9g");
	var mask_1_graphics_21 = new cjs.Graphics().p("Ak5gLICSj9IHhEUIiSD9g");
	var mask_1_graphics_22 = new cjs.Graphics().p("AlBgPICTj9IHwEcIiTD9g");
	var mask_1_graphics_23 = new cjs.Graphics().p("AlIgTICSj9IH/EkIiSD9g");
	var mask_1_graphics_24 = new cjs.Graphics().p("AlQgXICTj9IIOEsIiTD9g");
	var mask_1_graphics_25 = new cjs.Graphics().p("AlXgcICSj9IIdE2IiSD9g");
	var mask_1_graphics_26 = new cjs.Graphics().p("AlfggICTj9IIsE+IiTD9g");
	var mask_1_graphics_27 = new cjs.Graphics().p("AlmgkICSj9II7FGIiSD9g");
	var mask_1_graphics_28 = new cjs.Graphics().p("AlugpICTj9IJKFQIiTD9g");
	var mask_1_graphics_29 = new cjs.Graphics().p("Al1gtICSj9IJaFYIiTD9g");
	var mask_1_graphics_30 = new cjs.Graphics().p("Al9gxICTj9IJoFgIiTD9g");
	var mask_1_graphics_31 = new cjs.Graphics().p("AmFg1ICTj9IJ4FoIiTD9g");
	var mask_1_graphics_32 = new cjs.Graphics().p("AmMg5ICSj9IKHFxIiTD9g");
	var mask_1_graphics_33 = new cjs.Graphics().p("AmTg+ICSj9IKWF6IiTD9g");
	var mask_1_graphics_34 = new cjs.Graphics().p("AmbhCICSj9IKlGCIiTD9g");
	var mask_1_graphics_35 = new cjs.Graphics().p("AmihGICSj9IK0GLIiTD9g");
	var mask_1_graphics_36 = new cjs.Graphics().p("AmqhLICTj9ILCGUIiTD9g");
	var mask_1_graphics_37 = new cjs.Graphics().p("AmyhPICTj9ILSGcIiTD9g");
	var mask_1_graphics_38 = new cjs.Graphics().p("Am5hTICSj9ILhGkIiTD9g");
	var mask_1_graphics_39 = new cjs.Graphics().p("AnAhYICSj8ILwGtIiTD9g");
	var mask_1_graphics_40 = new cjs.Graphics().p("AnIhcICSj9IL/G2IiTD9g");
	var mask_1_graphics_41 = new cjs.Graphics().p("AnPhgICSj9IMOG+IiTD9g");
	var mask_1_graphics_42 = new cjs.Graphics().p("AnXhkICTj9IMcHGIiTD9g");
	var mask_1_graphics_43 = new cjs.Graphics().p("AnfhpICTj9IMsHQIiTD9g");
	var mask_1_graphics_44 = new cjs.Graphics().p("AnmhtICSj9IM7HYIiTD9g");
	var mask_1_graphics_45 = new cjs.Graphics().p("AnthxICSj9INKHgIiTD9g");
	var mask_1_graphics_46 = new cjs.Graphics().p("An1h2ICTj9INYHqIiTD9g");
	var mask_1_graphics_47 = new cjs.Graphics().p("An8h6ICSj9INoHyIiTD9g");
	var mask_1_graphics_48 = new cjs.Graphics().p("AoEh+ICTj9IN2H6IiTD9g");
	var mask_1_graphics_49 = new cjs.Graphics().p("AoMiCICTj9IOGICIiTD9g");
	var mask_1_graphics_50 = new cjs.Graphics().p("AoTiGICSj+IOVIMIiTD9g");
	var mask_1_graphics_51 = new cjs.Graphics().p("AoaiLICSj9IOkIUIiTD9g");
	var mask_1_graphics_52 = new cjs.Graphics().p("AoiiPICSj9IOzIcIiTD9g");
	var mask_1_graphics_53 = new cjs.Graphics().p("AopiTICSj9IPCIkIiTD9g");
	var mask_1_graphics_54 = new cjs.Graphics().p("AoxiXICTj9IPQItIiTD9g");
	var mask_1_graphics_55 = new cjs.Graphics().p("Ao5icICTj9IPgI2IiTD9g");
	var mask_1_graphics_56 = new cjs.Graphics().p("ApAigICSj9IPvI+IiTD9g");
	var mask_1_graphics_57 = new cjs.Graphics().p("ApHikICSj9IP+JHIiTD9g");
	var mask_1_graphics_58 = new cjs.Graphics().p("ApPipICSj9IQNJQIiTD9g");
	var mask_1_graphics_59 = new cjs.Graphics().p("ApWitICSj9IQcJYIiTD9g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:93.9,y:8.4}).wait(1).to({graphics:mask_1_graphics_1,x:93.2,y:8}).wait(1).to({graphics:mask_1_graphics_2,x:92.4,y:7.6}).wait(1).to({graphics:mask_1_graphics_3,x:91.7,y:7.2}).wait(1).to({graphics:mask_1_graphics_4,x:90.9,y:6.7}).wait(1).to({graphics:mask_1_graphics_5,x:90.2,y:6.3}).wait(1).to({graphics:mask_1_graphics_6,x:89.4,y:5.9}).wait(1).to({graphics:mask_1_graphics_7,x:88.7,y:5.4}).wait(1).to({graphics:mask_1_graphics_8,x:87.9,y:5}).wait(1).to({graphics:mask_1_graphics_9,x:87.2,y:4.6}).wait(1).to({graphics:mask_1_graphics_10,x:86.4,y:4.2}).wait(1).to({graphics:mask_1_graphics_11,x:85.7,y:3.7}).wait(1).to({graphics:mask_1_graphics_12,x:84.9,y:3.3}).wait(1).to({graphics:mask_1_graphics_13,x:84.2,y:2.9}).wait(1).to({graphics:mask_1_graphics_14,x:83.4,y:2.5}).wait(1).to({graphics:mask_1_graphics_15,x:82.7,y:2}).wait(1).to({graphics:mask_1_graphics_16,x:81.9,y:1.6}).wait(1).to({graphics:mask_1_graphics_17,x:81.2,y:1.2}).wait(1).to({graphics:mask_1_graphics_18,x:80.4,y:0.7}).wait(1).to({graphics:mask_1_graphics_19,x:79.7,y:0.3}).wait(1).to({graphics:mask_1_graphics_20,x:78.9,y:-0.1}).wait(1).to({graphics:mask_1_graphics_21,x:78.2,y:-0.5}).wait(1).to({graphics:mask_1_graphics_22,x:77.4,y:-1}).wait(1).to({graphics:mask_1_graphics_23,x:76.7,y:-1.4}).wait(1).to({graphics:mask_1_graphics_24,x:75.9,y:-1.8}).wait(1).to({graphics:mask_1_graphics_25,x:75.2,y:-2.3}).wait(1).to({graphics:mask_1_graphics_26,x:74.4,y:-2.7}).wait(1).to({graphics:mask_1_graphics_27,x:73.7,y:-3.1}).wait(1).to({graphics:mask_1_graphics_28,x:72.9,y:-3.5}).wait(1).to({graphics:mask_1_graphics_29,x:72.2,y:-4}).wait(1).to({graphics:mask_1_graphics_30,x:71.4,y:-4.4}).wait(1).to({graphics:mask_1_graphics_31,x:70.7,y:-4.8}).wait(1).to({graphics:mask_1_graphics_32,x:69.9,y:-5.2}).wait(1).to({graphics:mask_1_graphics_33,x:69.2,y:-5.7}).wait(1).to({graphics:mask_1_graphics_34,x:68.4,y:-6.1}).wait(1).to({graphics:mask_1_graphics_35,x:67.7,y:-6.5}).wait(1).to({graphics:mask_1_graphics_36,x:66.9,y:-7}).wait(1).to({graphics:mask_1_graphics_37,x:66.2,y:-7.4}).wait(1).to({graphics:mask_1_graphics_38,x:65.4,y:-7.8}).wait(1).to({graphics:mask_1_graphics_39,x:64.7,y:-8.2}).wait(1).to({graphics:mask_1_graphics_40,x:63.9,y:-8.7}).wait(1).to({graphics:mask_1_graphics_41,x:63.2,y:-9.1}).wait(1).to({graphics:mask_1_graphics_42,x:62.4,y:-9.5}).wait(1).to({graphics:mask_1_graphics_43,x:61.7,y:-9.9}).wait(1).to({graphics:mask_1_graphics_44,x:60.9,y:-10.4}).wait(1).to({graphics:mask_1_graphics_45,x:60.2,y:-10.8}).wait(1).to({graphics:mask_1_graphics_46,x:59.4,y:-11.2}).wait(1).to({graphics:mask_1_graphics_47,x:58.7,y:-11.7}).wait(1).to({graphics:mask_1_graphics_48,x:57.9,y:-12.1}).wait(1).to({graphics:mask_1_graphics_49,x:57.2,y:-12.5}).wait(1).to({graphics:mask_1_graphics_50,x:56.4,y:-12.9}).wait(1).to({graphics:mask_1_graphics_51,x:55.7,y:-13.4}).wait(1).to({graphics:mask_1_graphics_52,x:54.9,y:-13.8}).wait(1).to({graphics:mask_1_graphics_53,x:54.2,y:-14.2}).wait(1).to({graphics:mask_1_graphics_54,x:53.4,y:-14.6}).wait(1).to({graphics:mask_1_graphics_55,x:52.7,y:-15.1}).wait(1).to({graphics:mask_1_graphics_56,x:51.9,y:-15.5}).wait(1).to({graphics:mask_1_graphics_57,x:51.2,y:-15.9}).wait(1).to({graphics:mask_1_graphics_58,x:50.4,y:-16.4}).wait(1).to({graphics:mask_1_graphics_59,x:49.7,y:-16.8}).wait(61));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AKFB2IrwmvQh6g7iHAkQiWAphOCHQhOCHAoCWQAkCHBvBMIAZAO");
	this.shape_1.setTransform(23.6,-8.7);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(76.6,-9,24.9,35);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-10,-226.7,1,1,0,0,0,0.1,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-126.7},54).wait(6));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAAAWIAAgr");
	this.shape.setTransform(-10,-232.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AAAgeIAAA9");
	this.shape_1.setTransform(-10,-231.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AAAgnIAABP");
	this.shape_2.setTransform(-10,-230.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AAAgwIAABh");
	this.shape_3.setTransform(-10,-229.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AAAg5IAABz");
	this.shape_4.setTransform(-10,-229);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AAAhCIAACF");
	this.shape_5.setTransform(-10,-228.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AAAhLIAACX");
	this.shape_6.setTransform(-10,-227.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AAAhUIAACp");
	this.shape_7.setTransform(-10,-226.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AAAhdIAAC7");
	this.shape_8.setTransform(-10,-225.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AAAhmIAADN");
	this.shape_9.setTransform(-10,-224.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AAAhvIAADf");
	this.shape_10.setTransform(-10,-223.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AAAh4IAADx");
	this.shape_11.setTransform(-10,-222.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AAAiBIAAED");
	this.shape_12.setTransform(-10,-221.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AAAiKIAAEU");
	this.shape_13.setTransform(-10,-220.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AAAiTIAAEn");
	this.shape_14.setTransform(-10,-220);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AAAicIAAE5");
	this.shape_15.setTransform(-10,-219.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AAAilIAAFL");
	this.shape_16.setTransform(-10,-218.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AAAitIAAFc");
	this.shape_17.setTransform(-10,-217.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AAAi2IAAFt");
	this.shape_18.setTransform(-10,-216.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AAAi/IAAF/");
	this.shape_19.setTransform(-10,-215.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AAAjIIAAGR");
	this.shape_20.setTransform(-10,-214.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AAAjRIAAGj");
	this.shape_21.setTransform(-10,-213.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AAAjaIAAG1");
	this.shape_22.setTransform(-10,-212.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AAAjjIAAHH");
	this.shape_23.setTransform(-10,-212);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AAAjsIAAHZ");
	this.shape_24.setTransform(-10,-211.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AAAj1IAAHr");
	this.shape_25.setTransform(-10,-210.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AAAj+IAAH9");
	this.shape_26.setTransform(-10,-209.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AAAkHIAAIP");
	this.shape_27.setTransform(-10,-208.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AAAkQIAAIh");
	this.shape_28.setTransform(-10,-207.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AAAkZIAAIz");
	this.shape_29.setTransform(-10,-206.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AAAkiIAAJF");
	this.shape_30.setTransform(-10,-205.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AAAkrIAAJX");
	this.shape_31.setTransform(-10,-204.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AAAk0IAAJo");
	this.shape_32.setTransform(-10,-203.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AAAk9IAAJ7");
	this.shape_33.setTransform(-10,-203);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AAAlGIAAKN");
	this.shape_34.setTransform(-10,-202.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AAAlPIAAKf");
	this.shape_35.setTransform(-10,-201.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AAAlXIAAKw");
	this.shape_36.setTransform(-10,-200.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AAAlgIAALB");
	this.shape_37.setTransform(-10,-199.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AAAlpIAALT");
	this.shape_38.setTransform(-10,-198.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AAAlyIAALl");
	this.shape_39.setTransform(-10,-197.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AAAl7IAAL3");
	this.shape_40.setTransform(-10,-196.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AAAmEIAAMJ");
	this.shape_41.setTransform(-10,-195.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AAAmNIAAMb");
	this.shape_42.setTransform(-10,-195);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AAAmWIAAMt");
	this.shape_43.setTransform(-10,-194.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AAAmfIAAM/");
	this.shape_44.setTransform(-10,-193.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AAAmoIAANR");
	this.shape_45.setTransform(-10,-192.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AAAmxIAANj");
	this.shape_46.setTransform(-10,-191.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AAAm6IAAN1");
	this.shape_47.setTransform(-10,-190.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AAAnDIAAOH");
	this.shape_48.setTransform(-10,-189.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AAAnMIAAOZ");
	this.shape_49.setTransform(-10,-188.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AAAnVIAAOr");
	this.shape_50.setTransform(-10,-187.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AAAneIAAO9");
	this.shape_51.setTransform(-10,-186.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AAAnnIAAPP");
	this.shape_52.setTransform(-10,-186);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AAAnwIAAPh");
	this.shape_53.setTransform(-10,-185.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AAAH6IAAvz");
	this.shape_54.setTransform(-10,-184.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.9,-240.1,24.3,21.8);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 27
	this.instance = new lib.ar2("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(273.1,279.2,1,1,60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(161));

	// Layer 26 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_116 = new cjs.Graphics().p("AM0S5IAAiuIEkAAIAACug");
	var mask_graphics_117 = new cjs.Graphics().p("AiRBlIAAjJIEjAAIAADJg");
	var mask_graphics_118 = new cjs.Graphics().p("AiRByIAAjjIEjAAIAADjg");
	var mask_graphics_119 = new cjs.Graphics().p("AiRCAIAAj/IEjAAIAAD/g");
	var mask_graphics_120 = new cjs.Graphics().p("AiRCOIAAkbIEjAAIAAEbg");
	var mask_graphics_121 = new cjs.Graphics().p("AiRCcIAAk3IEjAAIAAE3g");
	var mask_graphics_122 = new cjs.Graphics().p("AiRCpIAAlRIEjAAIAAFRg");
	var mask_graphics_123 = new cjs.Graphics().p("AiRC3IAAltIEjAAIAAFtg");
	var mask_graphics_124 = new cjs.Graphics().p("AiRDEIAAmHIEjAAIAAGHg");
	var mask_graphics_125 = new cjs.Graphics().p("AiRDSIAAmjIEjAAIAAGjg");
	var mask_graphics_126 = new cjs.Graphics().p("AiRDgIAAm/IEjAAIAAG/g");
	var mask_graphics_127 = new cjs.Graphics().p("AiRDuIAAnaIEjAAIAAHag");
	var mask_graphics_128 = new cjs.Graphics().p("AiRD7IAAn1IEjAAIAAH1g");
	var mask_graphics_129 = new cjs.Graphics().p("AiREJIAAoRIEjAAIAAIRg");
	var mask_graphics_130 = new cjs.Graphics().p("AiREXIAAotIEjAAIAAItg");
	var mask_graphics_131 = new cjs.Graphics().p("AiRElIAApIIEjAAIAAJIg");
	var mask_graphics_132 = new cjs.Graphics().p("AiREyIAApjIEjAAIAAJjg");
	var mask_graphics_133 = new cjs.Graphics().p("AiRFAIAAp/IEjAAIAAJ/g");
	var mask_graphics_134 = new cjs.Graphics().p("AiRFOIAAqbIEjAAIAAKbg");
	var mask_graphics_135 = new cjs.Graphics().p("AiRFbIAAq1IEjAAIAAK1g");
	var mask_graphics_136 = new cjs.Graphics().p("AiRFpIAArRIEjAAIAALRg");
	var mask_graphics_137 = new cjs.Graphics().p("AiRF3IAArtIEjAAIAALtg");
	var mask_graphics_138 = new cjs.Graphics().p("AiRGFIAAsJIEjAAIAAMJg");
	var mask_graphics_139 = new cjs.Graphics().p("AiRGSIAAsjIEjAAIAAMjg");
	var mask_graphics_140 = new cjs.Graphics().p("AiRGgIAAs/IEjAAIAAM/g");
	var mask_graphics_141 = new cjs.Graphics().p("AiRGuIAAtbIEjAAIAANbg");
	var mask_graphics_142 = new cjs.Graphics().p("AiRG7IAAt1IEjAAIAAN1g");
	var mask_graphics_143 = new cjs.Graphics().p("AiRHJIAAuRIEjAAIAAORg");
	var mask_graphics_144 = new cjs.Graphics().p("AiRHXIAAusIEjAAIAAOsg");
	var mask_graphics_145 = new cjs.Graphics().p("AiRHkIAAvHIEjAAIAAPHg");
	var mask_graphics_146 = new cjs.Graphics().p("AiRHyIAAvjIEjAAIAAPjg");
	var mask_graphics_147 = new cjs.Graphics().p("AiRIAIAAv/IEjAAIAAP/g");
	var mask_graphics_148 = new cjs.Graphics().p("AiRIOIAAwaIEjAAIAAQag");
	var mask_graphics_149 = new cjs.Graphics().p("AiRIbIAAw1IEjAAIAAQ1g");
	var mask_graphics_150 = new cjs.Graphics().p("AiRIpIAAxRIEjAAIAARRg");
	var mask_graphics_151 = new cjs.Graphics().p("AiRI3IAAxtIEjAAIAARtg");
	var mask_graphics_152 = new cjs.Graphics().p("AiRJEIAAyHIEjAAIAASHg");
	var mask_graphics_153 = new cjs.Graphics().p("AiRJSIAAyjIEjAAIAASjg");
	var mask_graphics_154 = new cjs.Graphics().p("AiRJgIAAy/IEjAAIAAS/g");
	var mask_graphics_155 = new cjs.Graphics().p("AiRJtIAAzZIEjAAIAATZg");
	var mask_graphics_156 = new cjs.Graphics().p("AiRJ7IAAz1IEjAAIAAT1g");
	var mask_graphics_157 = new cjs.Graphics().p("AiRKJIAA0RIEjAAIAAURg");
	var mask_graphics_158 = new cjs.Graphics().p("AiRKXIAA0sIEjAAIAAUsg");
	var mask_graphics_159 = new cjs.Graphics().p("AiRKkIAA1HIEjAAIAAVHg");
	var mask_graphics_160 = new cjs.Graphics().p("AM0cVIAA1kIEkAAIAAVkg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(116).to({graphics:mask_graphics_116,x:111.2,y:120.9}).wait(1).to({graphics:mask_graphics_117,x:207.8,y:234.5}).wait(1).to({graphics:mask_graphics_118,x:207.8,y:235.8}).wait(1).to({graphics:mask_graphics_119,x:207.8,y:237.2}).wait(1).to({graphics:mask_graphics_120,x:207.8,y:238.6}).wait(1).to({graphics:mask_graphics_121,x:207.8,y:240}).wait(1).to({graphics:mask_graphics_122,x:207.8,y:241.4}).wait(1).to({graphics:mask_graphics_123,x:207.8,y:242.7}).wait(1).to({graphics:mask_graphics_124,x:207.8,y:244.1}).wait(1).to({graphics:mask_graphics_125,x:207.8,y:245.5}).wait(1).to({graphics:mask_graphics_126,x:207.8,y:246.8}).wait(1).to({graphics:mask_graphics_127,x:207.8,y:248.2}).wait(1).to({graphics:mask_graphics_128,x:207.8,y:249.6}).wait(1).to({graphics:mask_graphics_129,x:207.8,y:251}).wait(1).to({graphics:mask_graphics_130,x:207.8,y:252.3}).wait(1).to({graphics:mask_graphics_131,x:207.8,y:253.7}).wait(1).to({graphics:mask_graphics_132,x:207.8,y:255.1}).wait(1).to({graphics:mask_graphics_133,x:207.8,y:256.5}).wait(1).to({graphics:mask_graphics_134,x:207.8,y:257.9}).wait(1).to({graphics:mask_graphics_135,x:207.8,y:259.2}).wait(1).to({graphics:mask_graphics_136,x:207.8,y:260.6}).wait(1).to({graphics:mask_graphics_137,x:207.8,y:262}).wait(1).to({graphics:mask_graphics_138,x:207.8,y:263.4}).wait(1).to({graphics:mask_graphics_139,x:207.8,y:264.7}).wait(1).to({graphics:mask_graphics_140,x:207.8,y:266.1}).wait(1).to({graphics:mask_graphics_141,x:207.8,y:267.5}).wait(1).to({graphics:mask_graphics_142,x:207.8,y:268.8}).wait(1).to({graphics:mask_graphics_143,x:207.8,y:270.2}).wait(1).to({graphics:mask_graphics_144,x:207.8,y:271.6}).wait(1).to({graphics:mask_graphics_145,x:207.8,y:273}).wait(1).to({graphics:mask_graphics_146,x:207.8,y:274.4}).wait(1).to({graphics:mask_graphics_147,x:207.8,y:275.7}).wait(1).to({graphics:mask_graphics_148,x:207.8,y:277.1}).wait(1).to({graphics:mask_graphics_149,x:207.8,y:278.5}).wait(1).to({graphics:mask_graphics_150,x:207.8,y:279.9}).wait(1).to({graphics:mask_graphics_151,x:207.8,y:281.2}).wait(1).to({graphics:mask_graphics_152,x:207.8,y:282.6}).wait(1).to({graphics:mask_graphics_153,x:207.8,y:284}).wait(1).to({graphics:mask_graphics_154,x:207.8,y:285.3}).wait(1).to({graphics:mask_graphics_155,x:207.8,y:286.7}).wait(1).to({graphics:mask_graphics_156,x:207.8,y:288.1}).wait(1).to({graphics:mask_graphics_157,x:207.8,y:289.5}).wait(1).to({graphics:mask_graphics_158,x:207.8,y:290.9}).wait(1).to({graphics:mask_graphics_159,x:207.8,y:292.2}).wait(1).to({graphics:mask_graphics_160,x:111.2,y:181.3}).wait(1));

	// Layer 25
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(25,1,1).p("AqjL7IAAw8QBXlWGqhLQGphLDQCfQDECUAJEHIAAPk");
	this.shape.setTransform(275.4,272.7);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(116).to({_off:false},0).wait(45));

	// Layer 24 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_39 = new cjs.Graphics().p("AhXW7QlrlrAAoBMAmrAAAQAAIBlqFrQlsFqoAAAQoBAAlplqg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AgyXeQl6lcgVoAMAmpgBlQAVIAlbF5QldF5n/AVIg6ABQncAAlilHg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AgNX/QmHlMgqn/MAmigDKQAqH/lLGHQlNGHn+ApQg5AFg4AAQm6AAlakmg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AAZYeQmTk7g/n9MAmYgEuQA/H8k7GVQk9GTn8A/QhVAKhRAAQmaAAlRkHg");
	var mask_1_graphics_43 = new cjs.Graphics().p("ABBY8QmgkrhTn5MAmJgGTQBUH6krGhQkrGgn6BTQhuAThqAAQl9AAlFjqg");
	var mask_1_graphics_44 = new cjs.Graphics().p("ABrZZQmskahon2MAl3gH2QBoH2kZGtQkbGsn1BoQiIAciCAAQlgAAk4jNg");
	var mask_1_graphics_45 = new cjs.Graphics().p("ACVZzQm3kIh8nxMAlggJYQB9HxkIG4QkJG3nwB8QigAoiZAAQlGAAkqizg");
	var mask_1_graphics_46 = new cjs.Graphics().p("ADBaMQnCj2iQnsMAlGgK5QCQHsj1HCQj3HCnrCQQi2A1ixAAQksAAkaiag");
	var mask_1_graphics_47 = new cjs.Graphics().p("ADtajQnLjjiknmMAkogMZQCkHljjHMQjkHLnlClQjMBFjIAAQkTAAkKiEg");
	var mask_1_graphics_48 = new cjs.Graphics().p("AEba5QnUjRi4neMAkFgN5QC4HejPHVQjSHUndC4QjhBXjfAAQj7AAj4hug");
	var mask_1_graphics_49 = new cjs.Graphics().p("AFJbMQnci9jLnXMAjfgPWQDMHXi9HcQi+HdnWDLQj0Bqj2AAQjkAAjlhbg");
	var mask_1_graphics_50 = new cjs.Graphics().p("AF5beQnkiqjenOMAi1gQyQDfHOipHkQiqHknODeQkGB/kOAAQjNAAjQhJg");
	var mask_1_graphics_51 = new cjs.Graphics().p("AGpbuQnqiWjxnEMAiIgSNQDxHFiVHqQiXHrnEDxQkXCVkmAAQi2AAi7g5g");
	var mask_1_graphics_52 = new cjs.Graphics().p("AHab7QnwiBkDm6MAhWgTjQEDG5iAHwQiDHwm5EDQkoCtk/AAQifAAikgrg");
	var mask_1_graphics_53 = new cjs.Graphics().p("AILcHQn2htkUmvMAgigU5QEVGuhsH1QhuH1mvEVQk2DHlZAAQiIAAiNgfg");
	var mask_1_graphics_54 = new cjs.Graphics().p("AI9cRQn6hYklmkIfp2NQEmGjhXH5QhaH5mjEmQlDDjl1AAQhwAAh0gVg");
	var mask_1_graphics_55 = new cjs.Graphics().p("AJvcZQn9hDk2mYIet3eQE4GWhDH8QhFH9mXE3QlPEAmSAAQhXAAhbgNg");
	var mask_1_graphics_56 = new cjs.Graphics().p("AKicfQoAgvlGmKIdu4tQFIGJguH+QgwH/mKFHQlZEfmyAAQg+AAg/gGg");
	var mask_1_graphics_57 = new cjs.Graphics().p("ALUcjQoBgalWl8Ics56QFYF7gaIAQgbIAl8FXQliFAnSAAQgkAAgkgCg");
	var mask_1_graphics_58 = new cjs.Graphics().p("AMHclQoCgFllluIbn7EQFnFtgFIBQgGIBluFmQlpFin3AAIgOAAg");
	var mask_1_graphics_59 = new cjs.Graphics().p("Ag8XVIaf8KQF1FeAQIAQAPIBlfF1QlfF2oAAPIgsABQnlAAlklQg");
	var mask_1_graphics_60 = new cjs.Graphics().p("AgXX3IZU9OQGEFPAlH/QAjH/lPGDQlQGEn/AlQgyADgxAAQnDAAlckug");
	var mask_1_graphics_61 = new cjs.Graphics().p("AAPYXIYH+PQGRFAA6H8QA4H+k/GQQlAGRn8A6QhOAIhLAAQmjAAlTkOg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AA3Y1IW3/MQGdEvBPH6QBNH7kuGdQkwGen6BOQhoAQhkAAQmEAAlIjxg");
	var mask_1_graphics_63 = new cjs.Graphics().p("ABgZSMAVkggGQGqEeBjH2QBiH3keGpQkeGqn2BjQiCAZh8AAQlnAAk8jUg");
	var mask_1_graphics_64 = new cjs.Graphics().p("ACKZtMAUPgg9QG1EMB4HyQB2HzkMG0QkMG2nyB3QiaAkiUAAQlMAAkui5g");
	var mask_1_graphics_65 = new cjs.Graphics().p("AC1aGMAS5ghwQG/D7CMHsQCLHuj6G/Qj7G/nsCMQixAyirAAQkzAAkfihg");
	var mask_1_graphics_66 = new cjs.Graphics().p("ADiadMARfgieQHJDnCgHmQCfHojoHJQjoHJnmCgQjHBBjCAAQkaAAkOiKg");
	var mask_1_graphics_67 = new cjs.Graphics().p("AEPazMAQEgjLQHTDVCzHfQCzHijVHRQjVHTngCzQjcBSjZAAQkBAAj9h0g");
	var mask_1_graphics_68 = new cjs.Graphics().p("AE9bHMAOogjzQHbDCDHHXQDGHajCHaQjCHbnYDGQjwBljwAAQjqAAjqhgg");
	var mask_1_graphics_69 = new cjs.Graphics().p("AFtbZMANJgkXQHiCvDaHOQDZHRiuHiQiuHinQDaQkCB5kIAAQjSAAjWhOg");
	var mask_1_graphics_70 = new cjs.Graphics().p("AGdbqMALpgk4QHpCbDtHFQDsHIiaHoQibHpnGDsQkUCQkgAAQi8AAjAg9g");
	var mask_1_graphics_71 = new cjs.Graphics().p("AHNb4MAKJglUQHvCHD/G8QD+G9iGHuQiHHvm8D+QkkCok5AAQikAAirgvg");
	var mask_1_graphics_72 = new cjs.Graphics().p("AH+cFMAIngltQH0ByERGyQEQGyhyHzQhyH0mxERQkzDAlTAAQiNAAiUghg");
	var mask_1_graphics_73 = new cjs.Graphics().p("AIwcPMAHEgmBQH4BeEjGmQEhGnhdH3QheH4mmEiQlADcluAAQh2AAh7gXg");
	var mask_1_graphics_74 = new cjs.Graphics().p("AJicYMAFhgmSQH7BJE0GaQEyGbhJH6QhJH8mZEzQlND5mLAAQhdAAhigOg");
	var mask_1_graphics_75 = new cjs.Graphics().p("AKVceMAD8gmdQH+A0FEGNQFDGNg0H+Qg0H+mNFDQlXEXmqAAQhFAAhGgHg");
	var mask_1_graphics_76 = new cjs.Graphics().p("ALHcjMACYgmmQH/AfFUGAQFUF/ggIAQgfIAmAFTQlgE3nKAAQgqAAgsgCg");
	var mask_1_graphics_77 = new cjs.Graphics().p("AL6clMAAygmqQIBAKFjFyQFjFxgLIAQgKIBlxFjQloFZnuAAIgdAAg");
	var mask_1_graphics_78 = new cjs.Graphics().p("AL6qFQIAgLFzFjQFxFjAKIAQALIBljFxQljFyoBALg");
	var mask_1_graphics_79 = new cjs.Graphics().p("ALHqCQIAgfGAFTQGAFTAfH/QAgIBlUF/QlUGAn/Agg");
	var mask_1_graphics_80 = new cjs.Graphics().p("AKVp8QH+g0GOFDQGNFFA0H8QA0H/lDGNQlEGOn+A0g");
	var mask_1_graphics_81 = new cjs.Graphics().p("AJipzQH8hJGbEzQGaE0BIH6QBJH8kyGaQk0Gbn7BJg");
	var mask_1_graphics_82 = new cjs.Graphics().p("AIwpmQH4heGnEiQGmEjBeH2QBeH5kiGmQkjGnn4Beg");
	var mask_1_graphics_83 = new cjs.Graphics().p("AH/pXQHzhyGzEQQGxESByHyQBzH0kRGyQkRGyn0Byg");
	var mask_1_graphics_84 = new cjs.Graphics().p("AHNpFQHviGG9D+QG9EACGHtQCGHvj+G9Qj/G9nvCGg");
	var mask_1_graphics_85 = new cjs.Graphics().p("AGdovQHoibHIDsQHGDuCaHnQCbHpjsHGQjtHInpCag");
	var mask_1_graphics_86 = new cjs.Graphics().p("AFtoXQHiiuHQDZQHQDbCuHgQCuHjjZHPQjaHRniCug");
	var mask_1_graphics_87 = new cjs.Graphics().p("AE9n8QHbjBHZDFQHYDIDCHZQDCHbjHHYQjGHZnbDCg");
	var mask_1_graphics_88 = new cjs.Graphics().p("AEPneQHSjVHhCzQHgC0DVHRQDVHTizHfQizHhnSDVg");
	var mask_1_graphics_89 = new cjs.Graphics().p("ADim9QHJjoHnCfQHoChDnHHQDoHKifHmQigHonJDog");
	var mask_1_graphics_90 = new cjs.Graphics().p("AC1mZQHAj6HtCKQHuCND6G+QD6G/iLHtQiMHum/D6g");
	var mask_1_graphics_91 = new cjs.Graphics().p("ACKlzQG1kMHzB2QHyB5EMGzQENG1h3HyQh4Hzm0EMg");
	var mask_1_graphics_92 = new cjs.Graphics().p("ABglKQGpkeH3BiQH4BkEdGoQEeGqhiH2QhjH4mqEeg");
	var mask_1_graphics_93 = new cjs.Graphics().p("AA3keQGdkvH7BNQH7BPEvGdQEvGdhOH6QhPH7mdEvg");
	var mask_1_graphics_94 = new cjs.Graphics().p("AAPjwQGRlAH9A5QH+A6E/GQQFAGRg5H8Qg6H+mQFAg");
	var mask_1_graphics_95 = new cjs.Graphics().p("AgXjAQGDlQH/AkQIAAmFPGDQFQGDgkH+QglIAmDFQg");
	var mask_1_graphics_96 = new cjs.Graphics().p("Ag8iNQF1lfIAAPQIBAQFeF1QFgF1gQIAQgPIBl2Ffg");
	var mask_1_graphics_97 = new cjs.Graphics().p("AhghYQFmluIAgGQIBgEFuFmQFvFmAFIAQAFIBlnFug");
	var mask_1_graphics_98 = new cjs.Graphics().p("AiDghQFXl9IAgaQIAgZF8FXQF9FWAaIAQAaIAlXF9g");
	var mask_1_graphics_99 = new cjs.Graphics().p("AikAXQFHmJH+gwQH/guGKFIQGKFHAvH9QAvIAlHGKg");
	var mask_1_graphics_100 = new cjs.Graphics().p("AjEBSQE3mWH8hEQH8hDGXE3QGYE3BDH7QBEH9k3GXg");
	var mask_1_graphics_101 = new cjs.Graphics().p("AjiCPQEmmiH5hZQH5hYGjEmQGkEmBYH4QBZH6knGkg");
	var mask_1_graphics_102 = new cjs.Graphics().p("Aj+DOQEUmuH1huQH1hsGvEVQGvEVBtH0QBtH2kVGvg");
	var mask_1_graphics_103 = new cjs.Graphics().p("AkZEPQEDm5HviCQHxiBG6EDQG6EDCBHvQCCHxkDG6g");
	var mask_1_graphics_104 = new cjs.Graphics().p("AkyFRQDxnDHpiWQHriVHEDxQHFDwCVHqQCWHrjxHEg");
	var mask_1_graphics_105 = new cjs.Graphics().p("AlJGUQDfnMHiiqQHlipHNDeQHODeCpHjQCqHljeHOg");
	var mask_1_graphics_106 = new cjs.Graphics().p("AleHZQDMnWHbi9QHdi8HWDLQHXDLC9HcQC9HdjLHXg");
	var mask_1_graphics_107 = new cjs.Graphics().p("AlxIgQC4nfHTjQQHWjPHdC4QHfC3DQHUQDRHVi4Heg");
	var mask_1_graphics_108 = new cjs.Graphics().p("AmCJnQCknmHLjiQHMjjHlCkQHmCkDjHLQDjHMikHlg");
	var mask_1_graphics_109 = new cjs.Graphics().p("AmRKvQCQnsHBj1QHDj1HrCQQHsCRD2HAQD2HDiRHrg");
	var mask_1_graphics_110 = new cjs.Graphics().p("AmeL4QB8nxG2kIQG5kHHxB8QHxB9EIG2QEIG4h8Hxg");
	var mask_1_graphics_111 = new cjs.Graphics().p("AmpNCQBon2GrkaQGtkYH2BoQH2BoEZGrQEaGthoH1g");
	var mask_1_graphics_112 = new cjs.Graphics().p("AmyOMQBTn5GgksQGhkpH5BTQH6BUErGfQErGhhTH6g");
	var mask_1_graphics_113 = new cjs.Graphics().p("Am5PXQA/n8GSk8QGVk6H9A+QH9A/E7GSQE8GVg/H9g");
	var mask_1_graphics_114 = new cjs.Graphics().p("Am+QjQAqn/GGlMQGHlLH/AqQH/AqFLGFQFMGIgpH+g");
	var mask_1_graphics_115 = new cjs.Graphics().p("AnBRuQAVoAF5lcQF5laH/AVQIBAVFbF4QFcF5gVIAg");
	var mask_1_graphics_116 = new cjs.Graphics().p("AnCS6QAAoAFrlsQFqlpIAABQIBgBFqFpQFrFsAAIAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(39).to({graphics:mask_1_graphics_39,x:202.5,y:182.9}).wait(1).to({graphics:mask_1_graphics_40,x:202.5,y:182.9}).wait(1).to({graphics:mask_1_graphics_41,x:202.5,y:182.9}).wait(1).to({graphics:mask_1_graphics_42,x:202.5,y:182.9}).wait(1).to({graphics:mask_1_graphics_43,x:202.6,y:183}).wait(1).to({graphics:mask_1_graphics_44,x:202.6,y:183}).wait(1).to({graphics:mask_1_graphics_45,x:202.6,y:183}).wait(1).to({graphics:mask_1_graphics_46,x:202.6,y:183}).wait(1).to({graphics:mask_1_graphics_47,x:202.7,y:183.1}).wait(1).to({graphics:mask_1_graphics_48,x:202.7,y:183.1}).wait(1).to({graphics:mask_1_graphics_49,x:202.7,y:183.1}).wait(1).to({graphics:mask_1_graphics_50,x:202.7,y:183.1}).wait(1).to({graphics:mask_1_graphics_51,x:202.7,y:183.1}).wait(1).to({graphics:mask_1_graphics_52,x:202.6,y:183}).wait(1).to({graphics:mask_1_graphics_53,x:202.6,y:183}).wait(1).to({graphics:mask_1_graphics_54,x:202.6,y:183}).wait(1).to({graphics:mask_1_graphics_55,x:202.6,y:183}).wait(1).to({graphics:mask_1_graphics_56,x:202.5,y:182.9}).wait(1).to({graphics:mask_1_graphics_57,x:202.5,y:182.9}).wait(1).to({graphics:mask_1_graphics_58,x:202.5,y:182.9}).wait(1).to({graphics:mask_1_graphics_59,x:202.5,y:182.9}).wait(1).to({graphics:mask_1_graphics_60,x:202.5,y:182.9}).wait(1).to({graphics:mask_1_graphics_61,x:202.5,y:182.9}).wait(1).to({graphics:mask_1_graphics_62,x:202.6,y:183}).wait(1).to({graphics:mask_1_graphics_63,x:202.6,y:183}).wait(1).to({graphics:mask_1_graphics_64,x:202.6,y:183}).wait(1).to({graphics:mask_1_graphics_65,x:202.6,y:183.1}).wait(1).to({graphics:mask_1_graphics_66,x:202.7,y:183.1}).wait(1).to({graphics:mask_1_graphics_67,x:202.7,y:183.1}).wait(1).to({graphics:mask_1_graphics_68,x:202.7,y:183.1}).wait(1).to({graphics:mask_1_graphics_69,x:202.7,y:183.1}).wait(1).to({graphics:mask_1_graphics_70,x:202.7,y:183.1}).wait(1).to({graphics:mask_1_graphics_71,x:202.6,y:183.1}).wait(1).to({graphics:mask_1_graphics_72,x:202.6,y:183}).wait(1).to({graphics:mask_1_graphics_73,x:202.6,y:183}).wait(1).to({graphics:mask_1_graphics_74,x:202.5,y:183}).wait(1).to({graphics:mask_1_graphics_75,x:202.5,y:182.9}).wait(1).to({graphics:mask_1_graphics_76,x:202.5,y:182.9}).wait(1).to({graphics:mask_1_graphics_77,x:202.5,y:182.9}).wait(1).to({graphics:mask_1_graphics_78,x:202.5,y:182.9}).wait(1).to({graphics:mask_1_graphics_79,x:202.5,y:182.8}).wait(1).to({graphics:mask_1_graphics_80,x:202.5,y:182.6}).wait(1).to({graphics:mask_1_graphics_81,x:202.5,y:182.3}).wait(1).to({graphics:mask_1_graphics_82,x:202.6,y:181.9}).wait(1).to({graphics:mask_1_graphics_83,x:202.6,y:181.3}).wait(1).to({graphics:mask_1_graphics_84,x:202.6,y:180.7}).wait(1).to({graphics:mask_1_graphics_85,x:202.7,y:180}).wait(1).to({graphics:mask_1_graphics_86,x:202.7,y:179.2}).wait(1).to({graphics:mask_1_graphics_87,x:202.7,y:178.3}).wait(1).to({graphics:mask_1_graphics_88,x:202.7,y:177.3}).wait(1).to({graphics:mask_1_graphics_89,x:202.7,y:176.2}).wait(1).to({graphics:mask_1_graphics_90,x:202.6,y:175}).wait(1).to({graphics:mask_1_graphics_91,x:202.6,y:173.7}).wait(1).to({graphics:mask_1_graphics_92,x:202.6,y:172.4}).wait(1).to({graphics:mask_1_graphics_93,x:202.6,y:170.9}).wait(1).to({graphics:mask_1_graphics_94,x:202.5,y:169.4}).wait(1).to({graphics:mask_1_graphics_95,x:202.5,y:167.8}).wait(1).to({graphics:mask_1_graphics_96,x:202.5,y:166.1}).wait(1).to({graphics:mask_1_graphics_97,x:202.5,y:164.3}).wait(1).to({graphics:mask_1_graphics_98,x:202.5,y:162.5}).wait(1).to({graphics:mask_1_graphics_99,x:202.5,y:160.6}).wait(1).to({graphics:mask_1_graphics_100,x:202.6,y:158.6}).wait(1).to({graphics:mask_1_graphics_101,x:202.6,y:156.6}).wait(1).to({graphics:mask_1_graphics_102,x:202.6,y:154.5}).wait(1).to({graphics:mask_1_graphics_103,x:202.6,y:152.3}).wait(1).to({graphics:mask_1_graphics_104,x:202.7,y:150.1}).wait(1).to({graphics:mask_1_graphics_105,x:202.7,y:147.9}).wait(1).to({graphics:mask_1_graphics_106,x:202.7,y:145.6}).wait(1).to({graphics:mask_1_graphics_107,x:202.7,y:143.2}).wait(1).to({graphics:mask_1_graphics_108,x:202.7,y:140.8}).wait(1).to({graphics:mask_1_graphics_109,x:202.7,y:138.4}).wait(1).to({graphics:mask_1_graphics_110,x:202.6,y:136}).wait(1).to({graphics:mask_1_graphics_111,x:202.6,y:133.5}).wait(1).to({graphics:mask_1_graphics_112,x:202.6,y:131.1}).wait(1).to({graphics:mask_1_graphics_113,x:202.6,y:128.6}).wait(1).to({graphics:mask_1_graphics_114,x:202.5,y:126}).wait(1).to({graphics:mask_1_graphics_115,x:202.5,y:123.5}).wait(1).to({graphics:mask_1_graphics_116,x:202.5,y:121}).wait(45));

	// Layer 23
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AooqBQBvhACdgcQGohLDQCfQDECVAJEGIAAPk");
	this.shape_1.setTransform(287.6,272.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("Aqjk8QBXlWGqhLQGphLDQCfQDECVAJEGIAAPk");
	this.shape_2.setTransform(275.4,272.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("AqjL7IAAw8QBXlWGqhLQGphLDQCfQDECUAJEHIAAPk");
	this.shape_3.setTransform(275.4,272.7);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},39).to({state:[{t:this.shape_2}]},23).to({state:[{t:this.shape_3}]},42).wait(57));

	// Layer 22 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("AXUcYIAAiuIEkAAIAACug");
	var mask_2_graphics_1 = new cjs.Graphics().p("AiRBlIAAjJIEjAAIAADJg");
	var mask_2_graphics_2 = new cjs.Graphics().p("AiQB0IAAjnIEiAAIAADng");
	var mask_2_graphics_3 = new cjs.Graphics().p("AiQCCIAAkEIEhAAIAAEEg");
	var mask_2_graphics_4 = new cjs.Graphics().p("AiQCRIAAkhIEhAAIAAEhg");
	var mask_2_graphics_5 = new cjs.Graphics().p("AiQCgIAAk/IEhAAIAAE/g");
	var mask_2_graphics_6 = new cjs.Graphics().p("AiPCuIAAlbIEgAAIAAFbg");
	var mask_2_graphics_7 = new cjs.Graphics().p("AiPC9IAAl5IEfAAIAAF5g");
	var mask_2_graphics_8 = new cjs.Graphics().p("AiPDLIAAmVIEfAAIAAGVg");
	var mask_2_graphics_9 = new cjs.Graphics().p("AiPDaIAAmzIEfAAIAAGzg");
	var mask_2_graphics_10 = new cjs.Graphics().p("AiPDoIAAnPIEeAAIAAHPg");
	var mask_2_graphics_11 = new cjs.Graphics().p("AiOD3IAAntIEdAAIAAHtg");
	var mask_2_graphics_12 = new cjs.Graphics().p("AiOEGIAAoKIEdAAIAAIKg");
	var mask_2_graphics_13 = new cjs.Graphics().p("AiOEUIAAonIEdAAIAAIng");
	var mask_2_graphics_14 = new cjs.Graphics().p("AiNEjIAApFIEbAAIAAJFg");
	var mask_2_graphics_15 = new cjs.Graphics().p("AiNExIAAphIEbAAIAAJhg");
	var mask_2_graphics_16 = new cjs.Graphics().p("AiNFAIAAp/IEbAAIAAJ/g");
	var mask_2_graphics_17 = new cjs.Graphics().p("AiNFOIAAqbIEbAAIAAKbg");
	var mask_2_graphics_18 = new cjs.Graphics().p("AiMFdIAAq5IEZAAIAAK5g");
	var mask_2_graphics_19 = new cjs.Graphics().p("AiMFrIAArVIEZAAIAALVg");
	var mask_2_graphics_20 = new cjs.Graphics().p("AiMF6IAArzIEZAAIAALzg");
	var mask_2_graphics_21 = new cjs.Graphics().p("AiMGJIAAsRIEZAAIAAMRg");
	var mask_2_graphics_22 = new cjs.Graphics().p("AiLGXIAAstIEYAAIAAMtg");
	var mask_2_graphics_23 = new cjs.Graphics().p("AiLGmIAAtLIEXAAIAANLg");
	var mask_2_graphics_24 = new cjs.Graphics().p("AiLG0IAAtnIEXAAIAANng");
	var mask_2_graphics_25 = new cjs.Graphics().p("AiLHDIAAuFIEXAAIAAOFg");
	var mask_2_graphics_26 = new cjs.Graphics().p("AiKHSIAAujIEWAAIAAOjg");
	var mask_2_graphics_27 = new cjs.Graphics().p("AiKHgIAAu/IEVAAIAAO/g");
	var mask_2_graphics_28 = new cjs.Graphics().p("AiKHuIAAvcIEVAAIAAPcg");
	var mask_2_graphics_29 = new cjs.Graphics().p("AiKH9IAAv5IEVAAIAAP5g");
	var mask_2_graphics_30 = new cjs.Graphics().p("AiKILIAAwWIEVAAIAAQWg");
	var mask_2_graphics_31 = new cjs.Graphics().p("AiJIaIAAwzIETAAIAAQzg");
	var mask_2_graphics_32 = new cjs.Graphics().p("AiJIpIAAxRIETAAIAARRg");
	var mask_2_graphics_33 = new cjs.Graphics().p("AiJI4IAAxuIETAAIAARug");
	var mask_2_graphics_34 = new cjs.Graphics().p("AiIJGIAAyLIERAAIAASLg");
	var mask_2_graphics_35 = new cjs.Graphics().p("AiIJUIAAynIERAAIAASng");
	var mask_2_graphics_36 = new cjs.Graphics().p("AiIJjIAAzFIERAAIAATFg");
	var mask_2_graphics_37 = new cjs.Graphics().p("AiIJyIAAzjIERAAIAATjg");
	var mask_2_graphics_38 = new cjs.Graphics().p("AiHKAIAAz/IEPAAIAAT/g");
	var mask_2_graphics_39 = new cjs.Graphics().p("AXmdBIAA0eIERAAIAAUeg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:178.4,y:181.6}).wait(1).to({graphics:mask_2_graphics_1,x:342.2,y:353.2}).wait(1).to({graphics:mask_2_graphics_2,x:342.2,y:352}).wait(1).to({graphics:mask_2_graphics_3,x:342.2,y:350.8}).wait(1).to({graphics:mask_2_graphics_4,x:342.3,y:349.5}).wait(1).to({graphics:mask_2_graphics_5,x:342.3,y:348.3}).wait(1).to({graphics:mask_2_graphics_6,x:342.3,y:347}).wait(1).to({graphics:mask_2_graphics_7,x:342.3,y:345.7}).wait(1).to({graphics:mask_2_graphics_8,x:342.3,y:344.5}).wait(1).to({graphics:mask_2_graphics_9,x:342.3,y:343.3}).wait(1).to({graphics:mask_2_graphics_10,x:342.4,y:342}).wait(1).to({graphics:mask_2_graphics_11,x:342.4,y:340.8}).wait(1).to({graphics:mask_2_graphics_12,x:342.4,y:339.5}).wait(1).to({graphics:mask_2_graphics_13,x:342.4,y:338.3}).wait(1).to({graphics:mask_2_graphics_14,x:342.5,y:337}).wait(1).to({graphics:mask_2_graphics_15,x:342.5,y:335.8}).wait(1).to({graphics:mask_2_graphics_16,x:342.5,y:334.5}).wait(1).to({graphics:mask_2_graphics_17,x:342.5,y:333.3}).wait(1).to({graphics:mask_2_graphics_18,x:342.6,y:332}).wait(1).to({graphics:mask_2_graphics_19,x:342.6,y:330.8}).wait(1).to({graphics:mask_2_graphics_20,x:342.6,y:329.5}).wait(1).to({graphics:mask_2_graphics_21,x:342.6,y:328.3}).wait(1).to({graphics:mask_2_graphics_22,x:342.6,y:327}).wait(1).to({graphics:mask_2_graphics_23,x:342.6,y:325.8}).wait(1).to({graphics:mask_2_graphics_24,x:342.7,y:324.5}).wait(1).to({graphics:mask_2_graphics_25,x:342.7,y:323.3}).wait(1).to({graphics:mask_2_graphics_26,x:342.7,y:322.1}).wait(1).to({graphics:mask_2_graphics_27,x:342.7,y:320.8}).wait(1).to({graphics:mask_2_graphics_28,x:342.8,y:319.6}).wait(1).to({graphics:mask_2_graphics_29,x:342.8,y:318.3}).wait(1).to({graphics:mask_2_graphics_30,x:342.8,y:317.1}).wait(1).to({graphics:mask_2_graphics_31,x:342.8,y:315.8}).wait(1).to({graphics:mask_2_graphics_32,x:342.9,y:314.6}).wait(1).to({graphics:mask_2_graphics_33,x:342.8,y:313.3}).wait(1).to({graphics:mask_2_graphics_34,x:342.9,y:312.1}).wait(1).to({graphics:mask_2_graphics_35,x:342.9,y:310.8}).wait(1).to({graphics:mask_2_graphics_36,x:342.9,y:309.6}).wait(1).to({graphics:mask_2_graphics_37,x:342.9,y:308.3}).wait(1).to({graphics:mask_2_graphics_38,x:343,y:307.1}).wait(1).to({graphics:mask_2_graphics_39,x:178.3,y:185.7}).wait(122));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("AqjL7IAAw8QBXlWGqhLQGphLDQCfQDECUAJEHIAAPk");
	this.shape_4.setTransform(275.4,272.7);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(161));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(298.2,343.3,57.3,22.1);


(lib.honeyflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.honeybee();
	this.instance.parent = this;
	this.instance.setTransform(38.4,-170.9,0.422,0.422,0,0,0,-0.1,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYB7IgPgGIgQgFIgJgGIgIgHIgJgGIgJgGIgGgHIgDgHIgGgHIgDgHIgFgHIgBgHIgDgHIgBgIIgBgHIgEgHIABgIIgBgHIgBgHIACgIIABgHIACgIIABgIIADgIIAFgIIADgIIAHgJIAGgJIAGgIIAMgJIANgKIAMgHIAMgEIAWgFIAAgBIAWgBIASADIASAEIANAGIALAGIAJAGIAIAHIAHAGIAGAHIADAHIAHAHIADAHIADAHIAEAHIAEAHIABAHIABAIIABAHIABAIIACAHIgCAHIABAHIgBAIIgEAIIgCAIIgDAIIgCAIIgEAIIgGAJIgGAIIgJAJIgJAJIgOAKIgLAHIgMAEIgWAGIgWABIgVgCg");
	this.shape.setTransform(23,-144.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-215.3,105.5,83.4);


// stage content:
(lib.writingsuccess_Fontkid_u = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_316 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(316).call(this.frame_316).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(206.2,200.9,0.999,0.999,8.5,0,0,22.4,-144);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:8.3,guide:{path:[206,201,205.6,250.8,205.2,300.6,205.4,304.8,206.1,308.7]}},40).to({guide:{path:[206,308.6,209.5,328.4,227.2,340.6,248.3,355.3,275.7,353.7,276.2,353.7,276.7,353.7]}},40).to({scaleX:1,scaleY:1,guide:{path:[276.7,353.7,294.5,352.5,307.7,346.1]}},16).to({regX:22.6,regY:-143.9,guide:{path:[307.7,346.1,314.4,342.9,319.9,338.3,336.6,324.5,338.9,318,340,314.7,340.3,313.5,340.6,312.2,340.2,313]}},19).to({regX:22.4,regY:-144,scaleX:1,scaleY:1,x:342.6,y:198.8},45).wait(10).to({startPosition:0},0).to({y:348.8},52).wait(10).to({startPosition:0},0).to({scaleX:1,scaleY:1,rotation:8.5,guide:{path:[342.6,348.8,315,439.5,234.4,476.6,153.8,513.8,162.8,424,171.9,334.2,138.8,292.4,105.7,250.5,30.1,273.1,-45.6,295.8,-126.7,335,-130.6,336.9,-133.7,338.2]}},75).wait(1));

	// Layer 1
	this.instance_1 = new lib.ar1("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(431.9,267,1,1,0,0,0,-9.8,-171.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(179).to({_off:false},0).wait(138));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(25,1,1).p("AAAgOIAAAd");
	this.shape.setTransform(342.6,200.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AAAAeIAAg6");
	this.shape_1.setTransform(342.6,201.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("AAAAsIAAhX");
	this.shape_2.setTransform(342.6,203.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("AAAA6IAAhz");
	this.shape_3.setTransform(342.6,204.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("AAABJIAAiR");
	this.shape_4.setTransform(342.6,206.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(25,1,1).p("AAABXIAAit");
	this.shape_5.setTransform(342.6,207.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(25,1,1).p("AAABmIAAjL");
	this.shape_6.setTransform(342.6,208.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(25,1,1).p("AAAB0IAAjn");
	this.shape_7.setTransform(342.6,210.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(25,1,1).p("AAACDIAAkF");
	this.shape_8.setTransform(342.6,211.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(25,1,1).p("AAACRIAAkh");
	this.shape_9.setTransform(342.6,213.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(25,1,1).p("AAACgIAAk/");
	this.shape_10.setTransform(342.6,214.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(25,1,1).p("AAACuIAAlb");
	this.shape_11.setTransform(342.6,216.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(25,1,1).p("AAAC9IAAl5");
	this.shape_12.setTransform(342.6,217.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(25,1,1).p("AAADLIAAmV");
	this.shape_13.setTransform(342.6,219.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(25,1,1).p("AAADaIAAmz");
	this.shape_14.setTransform(342.6,220.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(25,1,1).p("AAADoIAAnP");
	this.shape_15.setTransform(342.6,222);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(25,1,1).p("AAAD3IAAnt");
	this.shape_16.setTransform(342.6,223.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(25,1,1).p("AAAEFIAAoJ");
	this.shape_17.setTransform(342.6,224.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(25,1,1).p("AAAETIAAom");
	this.shape_18.setTransform(342.6,226.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(25,1,1).p("AAAEiIAApD");
	this.shape_19.setTransform(342.6,227.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(25,1,1).p("AAAEwIAApf");
	this.shape_20.setTransform(342.6,229.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(25,1,1).p("AAAE/IAAp9");
	this.shape_21.setTransform(342.6,230.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(25,1,1).p("AAAFNIAAqZ");
	this.shape_22.setTransform(342.6,232.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(25,1,1).p("AAAFcIAAq3");
	this.shape_23.setTransform(342.6,233.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(25,1,1).p("AAAFqIAArT");
	this.shape_24.setTransform(342.6,235);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(25,1,1).p("AAAF5IAArx");
	this.shape_25.setTransform(342.6,236.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(25,1,1).p("AAAGHIAAsN");
	this.shape_26.setTransform(342.6,237.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(25,1,1).p("AAAGWIAAsr");
	this.shape_27.setTransform(342.6,239.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(25,1,1).p("AAAGkIAAtH");
	this.shape_28.setTransform(342.6,240.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(25,1,1).p("AAAGzIAAtl");
	this.shape_29.setTransform(342.6,242.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(25,1,1).p("AAAHBIAAuB");
	this.shape_30.setTransform(342.6,243.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(25,1,1).p("AAAHPIAAud");
	this.shape_31.setTransform(342.6,245.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(25,1,1).p("AAAHeIAAu7");
	this.shape_32.setTransform(342.6,246.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(25,1,1).p("AAAHtIAAvZ");
	this.shape_33.setTransform(342.6,248);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(25,1,1).p("AAAH7IAAv1");
	this.shape_34.setTransform(342.6,249.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(25,1,1).p("AAAIKIAAwT");
	this.shape_35.setTransform(342.6,250.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(25,1,1).p("AAAIYIAAwv");
	this.shape_36.setTransform(342.6,252.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(25,1,1).p("AAAInIAAxN");
	this.shape_37.setTransform(342.6,253.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(25,1,1).p("AAAI1IAAxp");
	this.shape_38.setTransform(342.6,255.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(25,1,1).p("AAAJDIAAyF");
	this.shape_39.setTransform(342.6,256.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(25,1,1).p("AAAJSIAAyj");
	this.shape_40.setTransform(342.6,258.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(25,1,1).p("AAAJgIAAy/");
	this.shape_41.setTransform(342.6,259.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(25,1,1).p("AAAJvIAAzd");
	this.shape_42.setTransform(342.6,261);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(25,1,1).p("AAAJ9IAAz5");
	this.shape_43.setTransform(342.6,262.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(25,1,1).p("AAAKMIAA0X");
	this.shape_44.setTransform(342.6,263.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(25,1,1).p("AAAKaIAA0z");
	this.shape_45.setTransform(342.6,265.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(25,1,1).p("AAAKpIAA1R");
	this.shape_46.setTransform(342.6,266.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(25,1,1).p("AAAK3IAA1t");
	this.shape_47.setTransform(342.6,268.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(25,1,1).p("AAALFIAA2J");
	this.shape_48.setTransform(342.6,269.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(25,1,1).p("AAALUIAA2n");
	this.shape_49.setTransform(342.6,271.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(25,1,1).p("AAALiIAA3E");
	this.shape_50.setTransform(342.6,272.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(25,1,1).p("AAALxIAA3h");
	this.shape_51.setTransform(342.6,274.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(25,1,1).p("AAAr/IAAX/");
	this.shape_52.setTransform(342.6,275.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},179).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).wait(86));

	// dot
	this.instance_2 = new lib.Symbol1("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(330.3,264,1,1,180,0,0,219.8,284.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(308));

	// Base
	this.instance_3 = new lib.Symbol2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(275,275);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(317));

	// Background
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_53.setTransform(275,275,3.373,2.543);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_54.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53}]}).wait(317));

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