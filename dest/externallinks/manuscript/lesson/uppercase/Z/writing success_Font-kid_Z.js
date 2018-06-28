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


(lib.basez = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyHddQixAAAAivQAAg7Akg2MAhngw+I/pAAQinAAgBiuQABitCnAAMAkeAAAQCwAAAACvQAAA9ghAyMghoAxAIfqAAQCmAAAACsQAACvimAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134.2,-188.4,268.5,376.9);


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
	this.instance.setTransform(-57.8,-0.6,1,1,-90,0,0,0.4,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:99.7},89).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgqCMIAAkXIBVAAIAAEXg");
	var mask_graphics_1 = new cjs.Graphics().p("AgzCMIAAkXIBnAAIAAEXg");
	var mask_graphics_2 = new cjs.Graphics().p("Ag8CMIAAkXIB5AAIAAEXg");
	var mask_graphics_3 = new cjs.Graphics().p("AhFCMIAAkXICLAAIAAEXg");
	var mask_graphics_4 = new cjs.Graphics().p("AhOCMIAAkXICdAAIAAEXg");
	var mask_graphics_5 = new cjs.Graphics().p("AhXCMIAAkXICvAAIAAEXg");
	var mask_graphics_6 = new cjs.Graphics().p("AhgCMIAAkXIDBAAIAAEXg");
	var mask_graphics_7 = new cjs.Graphics().p("AhoCMIAAkXIDRAAIAAEXg");
	var mask_graphics_8 = new cjs.Graphics().p("AhxCMIAAkXIDjAAIAAEXg");
	var mask_graphics_9 = new cjs.Graphics().p("Ah6CMIAAkXID1AAIAAEXg");
	var mask_graphics_10 = new cjs.Graphics().p("AiDCMIAAkXIEHAAIAAEXg");
	var mask_graphics_11 = new cjs.Graphics().p("AiMCMIAAkXIEZAAIAAEXg");
	var mask_graphics_12 = new cjs.Graphics().p("AiVCMIAAkXIErAAIAAEXg");
	var mask_graphics_13 = new cjs.Graphics().p("AidCMIAAkXIE8AAIAAEXg");
	var mask_graphics_14 = new cjs.Graphics().p("AimCMIAAkXIFNAAIAAEXg");
	var mask_graphics_15 = new cjs.Graphics().p("AivCMIAAkXIFfAAIAAEXg");
	var mask_graphics_16 = new cjs.Graphics().p("Ai4CMIAAkXIFxAAIAAEXg");
	var mask_graphics_17 = new cjs.Graphics().p("AjBCMIAAkXIGDAAIAAEXg");
	var mask_graphics_18 = new cjs.Graphics().p("AjKCMIAAkXIGVAAIAAEXg");
	var mask_graphics_19 = new cjs.Graphics().p("AjTCMIAAkXIGnAAIAAEXg");
	var mask_graphics_20 = new cjs.Graphics().p("AjbCMIAAkXIG4AAIAAEXg");
	var mask_graphics_21 = new cjs.Graphics().p("AjkCMIAAkXIHKAAIAAEXg");
	var mask_graphics_22 = new cjs.Graphics().p("AjtCMIAAkXIHbAAIAAEXg");
	var mask_graphics_23 = new cjs.Graphics().p("Aj3CMIAAkXIHuAAIAAEXg");
	var mask_graphics_24 = new cjs.Graphics().p("Aj/CMIAAkXIH/AAIAAEXg");
	var mask_graphics_25 = new cjs.Graphics().p("AkICMIAAkXIIRAAIAAEXg");
	var mask_graphics_26 = new cjs.Graphics().p("AkRCMIAAkXIIjAAIAAEXg");
	var mask_graphics_27 = new cjs.Graphics().p("AkaCMIAAkXII1AAIAAEXg");
	var mask_graphics_28 = new cjs.Graphics().p("AkjCMIAAkXIJHAAIAAEXg");
	var mask_graphics_29 = new cjs.Graphics().p("AkrCMIAAkXIJXAAIAAEXg");
	var mask_graphics_30 = new cjs.Graphics().p("Ak0CMIAAkXIJpAAIAAEXg");
	var mask_graphics_31 = new cjs.Graphics().p("Ak9CMIAAkXIJ7AAIAAEXg");
	var mask_graphics_32 = new cjs.Graphics().p("AlGCMIAAkXIKNAAIAAEXg");
	var mask_graphics_33 = new cjs.Graphics().p("AlPCMIAAkXIKfAAIAAEXg");
	var mask_graphics_34 = new cjs.Graphics().p("AlYCMIAAkXIKxAAIAAEXg");
	var mask_graphics_35 = new cjs.Graphics().p("AlhCMIAAkXILDAAIAAEXg");
	var mask_graphics_36 = new cjs.Graphics().p("AlqCMIAAkXILVAAIAAEXg");
	var mask_graphics_37 = new cjs.Graphics().p("AlyCMIAAkXILlAAIAAEXg");
	var mask_graphics_38 = new cjs.Graphics().p("Al7CMIAAkXIL3AAIAAEXg");
	var mask_graphics_39 = new cjs.Graphics().p("AmECMIAAkXIMJAAIAAEXg");
	var mask_graphics_40 = new cjs.Graphics().p("AmNCMIAAkXIMbAAIAAEXg");
	var mask_graphics_41 = new cjs.Graphics().p("AmWCMIAAkXIMtAAIAAEXg");
	var mask_graphics_42 = new cjs.Graphics().p("AmfCMIAAkXIM/AAIAAEXg");
	var mask_graphics_43 = new cjs.Graphics().p("AmoCMIAAkXINRAAIAAEXg");
	var mask_graphics_44 = new cjs.Graphics().p("AmxCMIAAkXINiAAIAAEXg");
	var mask_graphics_45 = new cjs.Graphics().p("Am6CMIAAkXIN0AAIAAEXg");
	var mask_graphics_46 = new cjs.Graphics().p("AnCCMIAAkXIOFAAIAAEXg");
	var mask_graphics_47 = new cjs.Graphics().p("AnLCMIAAkXIOXAAIAAEXg");
	var mask_graphics_48 = new cjs.Graphics().p("AnUCMIAAkXIOpAAIAAEXg");
	var mask_graphics_49 = new cjs.Graphics().p("AndCMIAAkXIO7AAIAAEXg");
	var mask_graphics_50 = new cjs.Graphics().p("AnmCMIAAkXIPNAAIAAEXg");
	var mask_graphics_51 = new cjs.Graphics().p("AnvCMIAAkXIPeAAIAAEXg");
	var mask_graphics_52 = new cjs.Graphics().p("An4CMIAAkXIPwAAIAAEXg");
	var mask_graphics_53 = new cjs.Graphics().p("AoACMIAAkXIQBAAIAAEXg");
	var mask_graphics_54 = new cjs.Graphics().p("AoJCMIAAkXIQTAAIAAEXg");
	var mask_graphics_55 = new cjs.Graphics().p("AoSCMIAAkXIQlAAIAAEXg");
	var mask_graphics_56 = new cjs.Graphics().p("AobCMIAAkXIQ3AAIAAEXg");
	var mask_graphics_57 = new cjs.Graphics().p("AokCMIAAkXIRJAAIAAEXg");
	var mask_graphics_58 = new cjs.Graphics().p("AotCMIAAkXIRbAAIAAEXg");
	var mask_graphics_59 = new cjs.Graphics().p("Ao2CMIAAkXIRsAAIAAEXg");
	var mask_graphics_60 = new cjs.Graphics().p("Ao/CMIAAkXIR+AAIAAEXg");
	var mask_graphics_61 = new cjs.Graphics().p("ApHCMIAAkXISPAAIAAEXg");
	var mask_graphics_62 = new cjs.Graphics().p("ApQCMIAAkXIShAAIAAEXg");
	var mask_graphics_63 = new cjs.Graphics().p("ApZCMIAAkXISzAAIAAEXg");
	var mask_graphics_64 = new cjs.Graphics().p("ApiCMIAAkXITFAAIAAEXg");
	var mask_graphics_65 = new cjs.Graphics().p("AprCMIAAkXITXAAIAAEXg");
	var mask_graphics_66 = new cjs.Graphics().p("ApzCMIAAkXITnAAIAAEXg");
	var mask_graphics_67 = new cjs.Graphics().p("Ap9CMIAAkXIT7AAIAAEXg");
	var mask_graphics_68 = new cjs.Graphics().p("AqGCMIAAkXIUNAAIAAEXg");
	var mask_graphics_69 = new cjs.Graphics().p("AqPCMIAAkXIUfAAIAAEXg");
	var mask_graphics_70 = new cjs.Graphics().p("AqXCMIAAkXIUvAAIAAEXg");
	var mask_graphics_71 = new cjs.Graphics().p("AqgCMIAAkXIVBAAIAAEXg");
	var mask_graphics_72 = new cjs.Graphics().p("AqpCMIAAkXIVTAAIAAEXg");
	var mask_graphics_73 = new cjs.Graphics().p("AqyCMIAAkXIVlAAIAAEXg");
	var mask_graphics_74 = new cjs.Graphics().p("Aq7CMIAAkXIV3AAIAAEXg");
	var mask_graphics_75 = new cjs.Graphics().p("ArECMIAAkXIWJAAIAAEXg");
	var mask_graphics_76 = new cjs.Graphics().p("ArNCMIAAkXIWbAAIAAEXg");
	var mask_graphics_77 = new cjs.Graphics().p("ArVCMIAAkXIWrAAIAAEXg");
	var mask_graphics_78 = new cjs.Graphics().p("AreCMIAAkXIW9AAIAAEXg");
	var mask_graphics_79 = new cjs.Graphics().p("ArnCMIAAkXIXPAAIAAEXg");
	var mask_graphics_80 = new cjs.Graphics().p("ArwCMIAAkXIXhAAIAAEXg");
	var mask_graphics_81 = new cjs.Graphics().p("Ar5CMIAAkXIXzAAIAAEXg");
	var mask_graphics_82 = new cjs.Graphics().p("AsCCMIAAkXIYFAAIAAEXg");
	var mask_graphics_83 = new cjs.Graphics().p("AsKCMIAAkXIYWAAIAAEXg");
	var mask_graphics_84 = new cjs.Graphics().p("AsTCMIAAkXIYoAAIAAEXg");
	var mask_graphics_85 = new cjs.Graphics().p("AscCMIAAkXIY5AAIAAEXg");
	var mask_graphics_86 = new cjs.Graphics().p("AslCMIAAkXIZLAAIAAEXg");
	var mask_graphics_87 = new cjs.Graphics().p("AsuCMIAAkXIZdAAIAAEXg");
	var mask_graphics_88 = new cjs.Graphics().p("As3CMIAAkXIZvAAIAAEXg");
	var mask_graphics_89 = new cjs.Graphics().p("AtACMIAAkXIaBAAIAAEXg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-54,y:-1.7}).wait(1).to({graphics:mask_graphics_1,x:-53.1,y:-1.7}).wait(1).to({graphics:mask_graphics_2,x:-52.2,y:-1.7}).wait(1).to({graphics:mask_graphics_3,x:-51.3,y:-1.7}).wait(1).to({graphics:mask_graphics_4,x:-50.4,y:-1.7}).wait(1).to({graphics:mask_graphics_5,x:-49.4,y:-1.7}).wait(1).to({graphics:mask_graphics_6,x:-48.5,y:-1.7}).wait(1).to({graphics:mask_graphics_7,x:-47.6,y:-1.7}).wait(1).to({graphics:mask_graphics_8,x:-46.7,y:-1.7}).wait(1).to({graphics:mask_graphics_9,x:-45.8,y:-1.7}).wait(1).to({graphics:mask_graphics_10,x:-44.9,y:-1.7}).wait(1).to({graphics:mask_graphics_11,x:-44,y:-1.7}).wait(1).to({graphics:mask_graphics_12,x:-43.1,y:-1.7}).wait(1).to({graphics:mask_graphics_13,x:-42.1,y:-1.7}).wait(1).to({graphics:mask_graphics_14,x:-41.2,y:-1.7}).wait(1).to({graphics:mask_graphics_15,x:-40.3,y:-1.7}).wait(1).to({graphics:mask_graphics_16,x:-39.4,y:-1.7}).wait(1).to({graphics:mask_graphics_17,x:-38.5,y:-1.7}).wait(1).to({graphics:mask_graphics_18,x:-37.6,y:-1.7}).wait(1).to({graphics:mask_graphics_19,x:-36.7,y:-1.7}).wait(1).to({graphics:mask_graphics_20,x:-35.7,y:-1.7}).wait(1).to({graphics:mask_graphics_21,x:-34.8,y:-1.7}).wait(1).to({graphics:mask_graphics_22,x:-33.9,y:-1.7}).wait(1).to({graphics:mask_graphics_23,x:-33,y:-1.7}).wait(1).to({graphics:mask_graphics_24,x:-32.1,y:-1.7}).wait(1).to({graphics:mask_graphics_25,x:-31.2,y:-1.7}).wait(1).to({graphics:mask_graphics_26,x:-30.2,y:-1.7}).wait(1).to({graphics:mask_graphics_27,x:-29.3,y:-1.7}).wait(1).to({graphics:mask_graphics_28,x:-28.4,y:-1.7}).wait(1).to({graphics:mask_graphics_29,x:-27.5,y:-1.7}).wait(1).to({graphics:mask_graphics_30,x:-26.6,y:-1.7}).wait(1).to({graphics:mask_graphics_31,x:-25.7,y:-1.7}).wait(1).to({graphics:mask_graphics_32,x:-24.8,y:-1.7}).wait(1).to({graphics:mask_graphics_33,x:-23.8,y:-1.7}).wait(1).to({graphics:mask_graphics_34,x:-22.9,y:-1.7}).wait(1).to({graphics:mask_graphics_35,x:-22,y:-1.7}).wait(1).to({graphics:mask_graphics_36,x:-21.1,y:-1.7}).wait(1).to({graphics:mask_graphics_37,x:-20.2,y:-1.7}).wait(1).to({graphics:mask_graphics_38,x:-19.3,y:-1.7}).wait(1).to({graphics:mask_graphics_39,x:-18.4,y:-1.7}).wait(1).to({graphics:mask_graphics_40,x:-17.4,y:-1.7}).wait(1).to({graphics:mask_graphics_41,x:-16.5,y:-1.7}).wait(1).to({graphics:mask_graphics_42,x:-15.6,y:-1.7}).wait(1).to({graphics:mask_graphics_43,x:-14.7,y:-1.7}).wait(1).to({graphics:mask_graphics_44,x:-13.8,y:-1.7}).wait(1).to({graphics:mask_graphics_45,x:-12.9,y:-1.7}).wait(1).to({graphics:mask_graphics_46,x:-12,y:-1.7}).wait(1).to({graphics:mask_graphics_47,x:-11.1,y:-1.7}).wait(1).to({graphics:mask_graphics_48,x:-10.1,y:-1.7}).wait(1).to({graphics:mask_graphics_49,x:-9.2,y:-1.7}).wait(1).to({graphics:mask_graphics_50,x:-8.3,y:-1.7}).wait(1).to({graphics:mask_graphics_51,x:-7.4,y:-1.7}).wait(1).to({graphics:mask_graphics_52,x:-6.5,y:-1.7}).wait(1).to({graphics:mask_graphics_53,x:-5.6,y:-1.7}).wait(1).to({graphics:mask_graphics_54,x:-4.7,y:-1.7}).wait(1).to({graphics:mask_graphics_55,x:-3.7,y:-1.7}).wait(1).to({graphics:mask_graphics_56,x:-2.8,y:-1.7}).wait(1).to({graphics:mask_graphics_57,x:-1.9,y:-1.7}).wait(1).to({graphics:mask_graphics_58,x:-1,y:-1.7}).wait(1).to({graphics:mask_graphics_59,x:-0.1,y:-1.7}).wait(1).to({graphics:mask_graphics_60,x:0.8,y:-1.7}).wait(1).to({graphics:mask_graphics_61,x:1.7,y:-1.7}).wait(1).to({graphics:mask_graphics_62,x:2.6,y:-1.7}).wait(1).to({graphics:mask_graphics_63,x:3.6,y:-1.7}).wait(1).to({graphics:mask_graphics_64,x:4.5,y:-1.7}).wait(1).to({graphics:mask_graphics_65,x:5.4,y:-1.7}).wait(1).to({graphics:mask_graphics_66,x:6.3,y:-1.7}).wait(1).to({graphics:mask_graphics_67,x:7.2,y:-1.7}).wait(1).to({graphics:mask_graphics_68,x:8.2,y:-1.7}).wait(1).to({graphics:mask_graphics_69,x:9.1,y:-1.7}).wait(1).to({graphics:mask_graphics_70,x:10,y:-1.7}).wait(1).to({graphics:mask_graphics_71,x:10.9,y:-1.7}).wait(1).to({graphics:mask_graphics_72,x:11.8,y:-1.7}).wait(1).to({graphics:mask_graphics_73,x:12.7,y:-1.7}).wait(1).to({graphics:mask_graphics_74,x:13.6,y:-1.7}).wait(1).to({graphics:mask_graphics_75,x:14.5,y:-1.7}).wait(1).to({graphics:mask_graphics_76,x:15.5,y:-1.7}).wait(1).to({graphics:mask_graphics_77,x:16.4,y:-1.7}).wait(1).to({graphics:mask_graphics_78,x:17.3,y:-1.7}).wait(1).to({graphics:mask_graphics_79,x:18.2,y:-1.7}).wait(1).to({graphics:mask_graphics_80,x:19.1,y:-1.7}).wait(1).to({graphics:mask_graphics_81,x:20,y:-1.7}).wait(1).to({graphics:mask_graphics_82,x:20.9,y:-1.7}).wait(1).to({graphics:mask_graphics_83,x:21.9,y:-1.7}).wait(1).to({graphics:mask_graphics_84,x:22.8,y:-1.7}).wait(1).to({graphics:mask_graphics_85,x:23.7,y:-1.7}).wait(1).to({graphics:mask_graphics_86,x:24.6,y:-1.7}).wait(1).to({graphics:mask_graphics_87,x:25.5,y:-1.7}).wait(1).to({graphics:mask_graphics_88,x:26.4,y:-1.7}).wait(1).to({graphics:mask_graphics_89,x:27.3,y:-1.7}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AMPAAI4dAA");
	this.shape.setTransform(26.4,-0.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.8,-12.7,21.9,24.3);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-2.9,-218.3,1,1,0,0,0,0.4,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-2.3,y:94.2},149).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAAAKIAAgT");
	this.shape.setTransform(-2.8,-225.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AAAgUIAAAo");
	this.shape_1.setTransform(-2.8,-224.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AAAgeIAAA9");
	this.shape_2.setTransform(-2.8,-223.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AAAgpIAABT");
	this.shape_3.setTransform(-2.8,-222.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AAAg0IAABp");
	this.shape_4.setTransform(-2.8,-221);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AAAg+IAAB9");
	this.shape_5.setTransform(-2.8,-219.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AAAhJIAACT");
	this.shape_6.setTransform(-2.8,-218.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AAAhTIAACo");
	this.shape_7.setTransform(-2.8,-217.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AAAheIAAC9");
	this.shape_8.setTransform(-2.8,-216.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AAAhpIAADT");
	this.shape_9.setTransform(-2.8,-215.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AAAh0IAADp");
	this.shape_10.setTransform(-2.8,-214.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AAAh+IAAD9");
	this.shape_11.setTransform(-2.8,-213.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AAAiJIAAET");
	this.shape_12.setTransform(-2.8,-212.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AAAiUIAAEp");
	this.shape_13.setTransform(-2.8,-211.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AAAieIAAE+");
	this.shape_14.setTransform(-2.8,-210.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AAAipIAAFT");
	this.shape_15.setTransform(-2.8,-209.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AAAi0IAAFp");
	this.shape_16.setTransform(-2.8,-208.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AAAi/IAAF/");
	this.shape_17.setTransform(-2.8,-207.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AAAjJIAAGT");
	this.shape_18.setTransform(-2.8,-206);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AAAjUIAAGp");
	this.shape_19.setTransform(-2.8,-205);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AAAjeIAAG9");
	this.shape_20.setTransform(-2.8,-203.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AAAjpIAAHT");
	this.shape_21.setTransform(-2.8,-202.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AAAj0IAAHp");
	this.shape_22.setTransform(-2.8,-201.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AAAj/IAAH+");
	this.shape_23.setTransform(-2.8,-200.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AAAkJIAAIT");
	this.shape_24.setTransform(-2.8,-199.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AAAkUIAAIp");
	this.shape_25.setTransform(-2.8,-198.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AAAkfIAAI/");
	this.shape_26.setTransform(-2.8,-197.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AAAkpIAAJT");
	this.shape_27.setTransform(-2.8,-196.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AAAk0IAAJp");
	this.shape_28.setTransform(-2.8,-195.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AAAk/IAAJ/");
	this.shape_29.setTransform(-2.8,-194.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AAAlKIAAKU");
	this.shape_30.setTransform(-2.8,-193.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AAAlUIAAKp");
	this.shape_31.setTransform(-2.8,-192.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AAAlfIAAK/");
	this.shape_32.setTransform(-2.8,-191.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AAAlqIAALV");
	this.shape_33.setTransform(-2.8,-190);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AAAl0IAALp");
	this.shape_34.setTransform(-2.8,-188.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AAAl/IAAL/");
	this.shape_35.setTransform(-2.8,-187.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AAAmJIAAMU");
	this.shape_36.setTransform(-2.8,-186.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AAAmUIAAMp");
	this.shape_37.setTransform(-2.8,-185.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AAAmfIAAM/");
	this.shape_38.setTransform(-2.8,-184.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AAAmqIAANV");
	this.shape_39.setTransform(-2.8,-183.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AAAm0IAANp");
	this.shape_40.setTransform(-2.8,-182.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AAAm/IAAN/");
	this.shape_41.setTransform(-2.8,-181.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AAAnKIAAOV");
	this.shape_42.setTransform(-2.8,-180.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AAAnUIAAOp");
	this.shape_43.setTransform(-2.8,-179.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AAAnfIAAO/");
	this.shape_44.setTransform(-2.8,-178.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AAAnqIAAPV");
	this.shape_45.setTransform(-2.8,-177.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AAAn1IAAPq");
	this.shape_46.setTransform(-2.8,-176.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AAAn/IAAP/");
	this.shape_47.setTransform(-2.8,-175);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AAAoKIAAQV");
	this.shape_48.setTransform(-2.8,-174);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AAAoVIAAQr");
	this.shape_49.setTransform(-2.8,-172.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AAAofIAAQ/");
	this.shape_50.setTransform(-2.8,-171.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AAAoqIAARV");
	this.shape_51.setTransform(-2.8,-170.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AAAo1IAARq");
	this.shape_52.setTransform(-2.8,-169.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AAAo/IAAR/");
	this.shape_53.setTransform(-2.8,-168.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AAApKIAASV");
	this.shape_54.setTransform(-2.8,-167.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AAApVIAASr");
	this.shape_55.setTransform(-2.8,-166.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AAApfIAAS/");
	this.shape_56.setTransform(-2.8,-165.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AAApqIAATV");
	this.shape_57.setTransform(-2.8,-164.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AAAp1IAATr");
	this.shape_58.setTransform(-2.8,-163.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AAAp/IAAT/");
	this.shape_59.setTransform(-2.8,-162.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(5,1,1).p("AAAqKIAAUV");
	this.shape_60.setTransform(-2.8,-161.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(5,1,1).p("AAAqVIAAUr");
	this.shape_61.setTransform(-2.8,-160.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(5,1,1).p("AAAqgIAAVB");
	this.shape_62.setTransform(-2.8,-159);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(5,1,1).p("AAAqqIAAVV");
	this.shape_63.setTransform(-2.8,-157.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(5,1,1).p("AAAq1IAAVr");
	this.shape_64.setTransform(-2.8,-156.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(5,1,1).p("AAAq/IAAWA");
	this.shape_65.setTransform(-2.8,-155.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(5,1,1).p("AAArKIAAWV");
	this.shape_66.setTransform(-2.8,-154.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(5,1,1).p("AAArVIAAWr");
	this.shape_67.setTransform(-2.8,-153.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(5,1,1).p("AAArgIAAXA");
	this.shape_68.setTransform(-2.8,-152.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(5,1,1).p("AAArqIAAXV");
	this.shape_69.setTransform(-2.8,-151.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(5,1,1).p("AAAr1IAAXr");
	this.shape_70.setTransform(-2.8,-150.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(5,1,1).p("AAAsAIAAYB");
	this.shape_71.setTransform(-2.8,-149.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(5,1,1).p("AAAsKIAAYV");
	this.shape_72.setTransform(-2.8,-148.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(5,1,1).p("AAAsVIAAYr");
	this.shape_73.setTransform(-2.8,-147.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(5,1,1).p("AAAsgIAAZB");
	this.shape_74.setTransform(-2.8,-146.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(5,1,1).p("AAAsqIAAZV");
	this.shape_75.setTransform(-2.8,-145.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(5,1,1).p("AAAs1IAAZr");
	this.shape_76.setTransform(-2.8,-144);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(5,1,1).p("AAAtAIAAaB");
	this.shape_77.setTransform(-2.8,-143);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(5,1,1).p("AAAtLIAAaX");
	this.shape_78.setTransform(-2.8,-141.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(5,1,1).p("AAAtVIAAar");
	this.shape_79.setTransform(-2.8,-140.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(5,1,1).p("AAAtgIAAbB");
	this.shape_80.setTransform(-2.8,-139.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(5,1,1).p("AAAtrIAAbW");
	this.shape_81.setTransform(-2.8,-138.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(5,1,1).p("AAAt1IAAbr");
	this.shape_82.setTransform(-2.8,-137.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(5,1,1).p("AAAuAIAAcB");
	this.shape_83.setTransform(-2.8,-136.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(5,1,1).p("AAAuLIAAcX");
	this.shape_84.setTransform(-2.8,-135.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(5,1,1).p("AAAuVIAAcr");
	this.shape_85.setTransform(-2.8,-134.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(5,1,1).p("AAAugIAAdB");
	this.shape_86.setTransform(-2.8,-133.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(5,1,1).p("AAAuqIAAdW");
	this.shape_87.setTransform(-2.8,-132.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(5,1,1).p("AAAu1IAAdr");
	this.shape_88.setTransform(-2.8,-131.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(5,1,1).p("AAAvAIAAeB");
	this.shape_89.setTransform(-2.8,-130.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(5,1,1).p("AAAvLIAAeX");
	this.shape_90.setTransform(-2.8,-129.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(5,1,1).p("AAAvVIAAer");
	this.shape_91.setTransform(-2.8,-128);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(5,1,1).p("AAAvgIAAfB");
	this.shape_92.setTransform(-2.8,-126.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(5,1,1).p("AAAvrIAAfX");
	this.shape_93.setTransform(-2.8,-125.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(5,1,1).p("AAAv2IAAfs");
	this.shape_94.setTransform(-2.8,-124.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(5,1,1).p("AAAwAMAAAAgB");
	this.shape_95.setTransform(-2.8,-123.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(5,1,1).p("AAAwLMAAAAgX");
	this.shape_96.setTransform(-2.8,-122.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(5,1,1).p("AAAwWMAAAAgt");
	this.shape_97.setTransform(-2.8,-121.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(5,1,1).p("AAAwgMAAAAhB");
	this.shape_98.setTransform(-2.8,-120.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(5,1,1).p("AAAwrMAAAAhX");
	this.shape_99.setTransform(-2.8,-119.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(5,1,1).p("AAAw2MAAAAht");
	this.shape_100.setTransform(-2.8,-118.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(5,1,1).p("AAAxAMAAAAiB");
	this.shape_101.setTransform(-2.8,-117.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(5,1,1).p("AAAxLMAAAAiX");
	this.shape_102.setTransform(-2.8,-116.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(5,1,1).p("AAAxWMAAAAit");
	this.shape_103.setTransform(-2.8,-115.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(5,1,1).p("AAAxgMAAAAjB");
	this.shape_104.setTransform(-2.8,-114.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(5,1,1).p("AAAxrMAAAAjX");
	this.shape_105.setTransform(-2.8,-113);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(5,1,1).p("AAAx2MAAAAjt");
	this.shape_106.setTransform(-2.8,-112);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(5,1,1).p("AAAyAMAAAAkB");
	this.shape_107.setTransform(-2.8,-110.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(5,1,1).p("AAAyLMAAAAkX");
	this.shape_108.setTransform(-2.8,-109.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(5,1,1).p("AAAyWMAAAAkt");
	this.shape_109.setTransform(-2.8,-108.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(5,1,1).p("AAAyhMAAAAlD");
	this.shape_110.setTransform(-2.8,-107.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(5,1,1).p("AAAyrMAAAAlX");
	this.shape_111.setTransform(-2.8,-106.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(5,1,1).p("AAAy2MAAAAlt");
	this.shape_112.setTransform(-2.8,-105.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(5,1,1).p("AAAzBMAAAAmD");
	this.shape_113.setTransform(-2.8,-104.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(5,1,1).p("AAAzLMAAAAmX");
	this.shape_114.setTransform(-2.8,-103.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(5,1,1).p("AAAzWMAAAAmt");
	this.shape_115.setTransform(-2.8,-102.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(5,1,1).p("AAAzhMAAAAnD");
	this.shape_116.setTransform(-2.8,-101.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(5,1,1).p("AAAzrMAAAAnX");
	this.shape_117.setTransform(-2.8,-100.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(5,1,1).p("AAAz2MAAAAnt");
	this.shape_118.setTransform(-2.8,-99.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(5,1,1).p("AAA0BMAAAAoD");
	this.shape_119.setTransform(-2.8,-98.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(5,1,1).p("AAA0LMAAAAoX");
	this.shape_120.setTransform(-2.8,-97);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(5,1,1).p("AAA0WMAAAAot");
	this.shape_121.setTransform(-2.8,-95.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(5,1,1).p("AAA0hMAAAApD");
	this.shape_122.setTransform(-2.8,-94.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(5,1,1).p("AAA0rMAAAApX");
	this.shape_123.setTransform(-2.8,-93.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(5,1,1).p("AAA02MAAAApt");
	this.shape_124.setTransform(-2.8,-92.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(5,1,1).p("AAA1BMAAAAqD");
	this.shape_125.setTransform(-2.8,-91.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(5,1,1).p("AAA1MMAAAAqY");
	this.shape_126.setTransform(-2.8,-90.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(5,1,1).p("AAA1WMAAAAqt");
	this.shape_127.setTransform(-2.8,-89.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(5,1,1).p("AAA1hMAAAArD");
	this.shape_128.setTransform(-2.8,-88.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(5,1,1).p("AAA1sMAAAArZ");
	this.shape_129.setTransform(-2.8,-87.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(5,1,1).p("AAA12MAAAArt");
	this.shape_130.setTransform(-2.8,-86.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(5,1,1).p("AAA2BMAAAAsD");
	this.shape_131.setTransform(-2.8,-85.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(5,1,1).p("AAA2MMAAAAsZ");
	this.shape_132.setTransform(-2.8,-84.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(5,1,1).p("AAA2WMAAAAst");
	this.shape_133.setTransform(-2.8,-83.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(5,1,1).p("AAA2hMAAAAtD");
	this.shape_134.setTransform(-2.8,-82);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(5,1,1).p("AAA2sMAAAAtZ");
	this.shape_135.setTransform(-2.8,-81);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(5,1,1).p("AAA22MAAAAtt");
	this.shape_136.setTransform(-2.8,-79.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(5,1,1).p("AAA3BMAAAAuD");
	this.shape_137.setTransform(-2.8,-78.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(5,1,1).p("AAA3MMAAAAuZ");
	this.shape_138.setTransform(-2.8,-77.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(5,1,1).p("AAA3XMAAAAuv");
	this.shape_139.setTransform(-2.8,-76.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(5,1,1).p("AAA3hMAAAAvD");
	this.shape_140.setTransform(-2.8,-75.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(5,1,1).p("AAA3sMAAAAvZ");
	this.shape_141.setTransform(-2.8,-74.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(5,1,1).p("AAA33MAAAAvv");
	this.shape_142.setTransform(-2.8,-73.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(5,1,1).p("AAA4BMAAAAwD");
	this.shape_143.setTransform(-2.8,-72.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(5,1,1).p("AAA4MMAAAAwZ");
	this.shape_144.setTransform(-2.8,-71.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(5,1,1).p("AAA4XMAAAAwv");
	this.shape_145.setTransform(-2.8,-70.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(5,1,1).p("AAA4hMAAAAxD");
	this.shape_146.setTransform(-2.8,-69.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(5,1,1).p("AAA4sMAAAAxZ");
	this.shape_147.setTransform(-2.8,-68.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(5,1,1).p("AAA43MAAAAxu");
	this.shape_148.setTransform(-2.8,-67.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(5,1,1).p("AAAZCMAAAgyD");
	this.shape_149.setTransform(-2.8,-66);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-229.2,24.3,21.8);


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
(lib.writingsuccess_Fontkid_Z = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_509 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(509).call(this.frame_509).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(167.9,105.1,0.999,0.999,0,6.5,-173.5,22.4,-143.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:401.9},130).wait(11).to({startPosition:0},0).to({x:169.6,y:444},159).wait(10).to({x:173.1,y:448.8},0).to({x:405.1,y:446.8},120).wait(11).to({startPosition:0},0).to({guide:{path:[405,446.8,485.6,254.8,656,489.4]}},59).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(399.6,104.8,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},130).wait(11).to({_off:false,x:172,y:444.6},0).to({_off:true},159).wait(10).to({_off:false,x:402,y:446.6},0).to({_off:true},120).wait(71));

	// ar3
	this.instance_1 = new lib.ar2("synched",14,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(298.7,402,1,1,0,0,0,4.7,-1.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(319).to({_off:false},0).wait(191));

	// ar2
	this.instance_2 = new lib.ar1("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(335.4,260,1,1,0,34.6,-145.4,-2.4,-60.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(150).to({_off:false},0).wait(360));

	// ar1
	this.instance_3 = new lib.ar2("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(228.7,142,1,1,0,0,0,4.7,-1.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(501));

	// 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(30,1,1).p("AgYAAIAxAA");
	this.shape_1.setTransform(175.5,446.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(30,1,1).p("AghAAIBDAA");
	this.shape_2.setTransform(176.4,446.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(30,1,1).p("AgrAAIBXAA");
	this.shape_3.setTransform(177.4,446.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(30,1,1).p("Ag0AAIBpAA");
	this.shape_4.setTransform(178.3,446.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(30,1,1).p("Ag+AAIB9AA");
	this.shape_5.setTransform(179.3,446.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(30,1,1).p("AhHAAICPAA");
	this.shape_6.setTransform(180.2,446.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(30,1,1).p("AhQAAIChAA");
	this.shape_7.setTransform(181.1,446.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(30,1,1).p("AhaAAIC1AA");
	this.shape_8.setTransform(182.1,446.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(30,1,1).p("AhjAAIDHAA");
	this.shape_9.setTransform(183,446.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(30,1,1).p("AhsAAIDZAA");
	this.shape_10.setTransform(183.9,446.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(30,1,1).p("Ah2AAIDtAA");
	this.shape_11.setTransform(184.9,446.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(30,1,1).p("Ah/AAID/AA");
	this.shape_12.setTransform(185.8,446.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(30,1,1).p("AiJAAIETAA");
	this.shape_13.setTransform(186.8,446.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(30,1,1).p("AiSAAIElAA");
	this.shape_14.setTransform(187.7,446.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(30,1,1).p("AibAAIE3AA");
	this.shape_15.setTransform(188.6,446.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(30,1,1).p("AilAAIFLAA");
	this.shape_16.setTransform(189.6,446.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(30,1,1).p("AiuAAIFdAA");
	this.shape_17.setTransform(190.5,446.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(30,1,1).p("Ai3AAIFvAA");
	this.shape_18.setTransform(191.4,446.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(30,1,1).p("AjBAAIGDAA");
	this.shape_19.setTransform(192.4,446.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(30,1,1).p("AjKAAIGVAA");
	this.shape_20.setTransform(193.3,446.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(30,1,1).p("AjUAAIGpAA");
	this.shape_21.setTransform(194.3,446.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(30,1,1).p("AjdAAIG7AA");
	this.shape_22.setTransform(195.2,446.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(30,1,1).p("AjmAAIHNAA");
	this.shape_23.setTransform(196.1,446.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(30,1,1).p("AjwAAIHgAA");
	this.shape_24.setTransform(197.1,446.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(30,1,1).p("Aj5AAIHzAA");
	this.shape_25.setTransform(198,446.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(30,1,1).p("AkCAAIIFAA");
	this.shape_26.setTransform(198.9,446.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(30,1,1).p("AkMAAIIZAA");
	this.shape_27.setTransform(199.9,446.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(30,1,1).p("AkVAAIIrAA");
	this.shape_28.setTransform(200.8,446.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(30,1,1).p("AkfAAII/AA");
	this.shape_29.setTransform(201.8,446.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(30,1,1).p("AkoAAIJRAA");
	this.shape_30.setTransform(202.7,446.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(30,1,1).p("AkxAAIJjAA");
	this.shape_31.setTransform(203.6,446.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(30,1,1).p("Ak7AAIJ2AA");
	this.shape_32.setTransform(204.6,446.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(30,1,1).p("AlEAAIKJAA");
	this.shape_33.setTransform(205.5,446.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(30,1,1).p("AlNAAIKbAA");
	this.shape_34.setTransform(206.4,446.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(30,1,1).p("AlXAAIKvAA");
	this.shape_35.setTransform(207.4,446.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(30,1,1).p("AlgAAILBAA");
	this.shape_36.setTransform(208.3,446.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(30,1,1).p("AlqAAILVAA");
	this.shape_37.setTransform(209.3,446.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(30,1,1).p("AlzAAILnAA");
	this.shape_38.setTransform(210.2,446.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(30,1,1).p("Al8AAIL5AA");
	this.shape_39.setTransform(211.1,446.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(30,1,1).p("AmGAAIMMAA");
	this.shape_40.setTransform(212.1,446.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(30,1,1).p("AmPAAIMfAA");
	this.shape_41.setTransform(213,446.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(30,1,1).p("AmYAAIMxAA");
	this.shape_42.setTransform(213.9,446.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(30,1,1).p("AmiAAINFAA");
	this.shape_43.setTransform(214.9,446.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(30,1,1).p("AmrAAINXAA");
	this.shape_44.setTransform(215.8,446.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(30,1,1).p("Am1AAINrAA");
	this.shape_45.setTransform(216.8,446.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(30,1,1).p("Am+AAIN9AA");
	this.shape_46.setTransform(217.7,446.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(30,1,1).p("AnHAAIOPAA");
	this.shape_47.setTransform(218.6,446.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(30,1,1).p("AnRAAIOjAA");
	this.shape_48.setTransform(219.6,446.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(30,1,1).p("AnaAAIO1AA");
	this.shape_49.setTransform(220.5,446.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(30,1,1).p("AnjAAIPHAA");
	this.shape_50.setTransform(221.5,446.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(30,1,1).p("AntAAIPbAA");
	this.shape_51.setTransform(222.4,446.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(30,1,1).p("An2AAIPtAA");
	this.shape_52.setTransform(223.3,446.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(30,1,1).p("AoAAAIQBAA");
	this.shape_53.setTransform(224.3,446.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(30,1,1).p("AoJAAIQTAA");
	this.shape_54.setTransform(225.2,446.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(30,1,1).p("AoSAAIQlAA");
	this.shape_55.setTransform(226.1,446.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(30,1,1).p("AocAAIQ5AA");
	this.shape_56.setTransform(227.1,446.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(30,1,1).p("AolAAIRLAA");
	this.shape_57.setTransform(228,446.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(30,1,1).p("AouAAIRdAA");
	this.shape_58.setTransform(229,446.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(30,1,1).p("Ao4AAIRxAA");
	this.shape_59.setTransform(229.9,446.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(30,1,1).p("ApBAAISDAA");
	this.shape_60.setTransform(230.8,446.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(30,1,1).p("ApLAAISXAA");
	this.shape_61.setTransform(231.8,446.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(30,1,1).p("ApUAAISpAA");
	this.shape_62.setTransform(232.7,446.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(30,1,1).p("ApdAAIS7AA");
	this.shape_63.setTransform(233.6,446.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(30,1,1).p("ApnAAITPAA");
	this.shape_64.setTransform(234.6,446.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(30,1,1).p("ApwAAIThAA");
	this.shape_65.setTransform(235.5,446.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(30,1,1).p("Ap5AAITzAA");
	this.shape_66.setTransform(236.5,446.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(30,1,1).p("AqDAAIUHAA");
	this.shape_67.setTransform(237.4,446.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(30,1,1).p("AqMAAIUZAA");
	this.shape_68.setTransform(238.3,446.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(30,1,1).p("AqWAAIUtAA");
	this.shape_69.setTransform(239.3,446.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(30,1,1).p("AqfAAIU/AA");
	this.shape_70.setTransform(240.2,446.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(30,1,1).p("AqoAAIVRAA");
	this.shape_71.setTransform(241.1,446.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(30,1,1).p("AqyAAIVlAA");
	this.shape_72.setTransform(242.1,446.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(30,1,1).p("Aq7AAIV3AA");
	this.shape_73.setTransform(243,446.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(30,1,1).p("ArEAAIWJAA");
	this.shape_74.setTransform(244,446.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(30,1,1).p("ArOAAIWdAA");
	this.shape_75.setTransform(244.9,446.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(30,1,1).p("ArXAAIWvAA");
	this.shape_76.setTransform(245.8,446.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(30,1,1).p("ArhAAIXDAA");
	this.shape_77.setTransform(246.8,446.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(30,1,1).p("ArqAAIXVAA");
	this.shape_78.setTransform(247.7,446.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(30,1,1).p("ArzAAIXnAA");
	this.shape_79.setTransform(248.6,446.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(30,1,1).p("Ar9AAIX7AA");
	this.shape_80.setTransform(249.6,446.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(30,1,1).p("AsGAAIYNAA");
	this.shape_81.setTransform(250.5,446.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(30,1,1).p("AsPAAIYfAA");
	this.shape_82.setTransform(251.5,446.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(30,1,1).p("AsZAAIYzAA");
	this.shape_83.setTransform(252.4,446.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(30,1,1).p("AsiAAIZFAA");
	this.shape_84.setTransform(253.3,446.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(30,1,1).p("AssAAIZZAA");
	this.shape_85.setTransform(254.3,446.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(30,1,1).p("As1AAIZrAA");
	this.shape_86.setTransform(255.2,446.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(30,1,1).p("As+AAIZ9AA");
	this.shape_87.setTransform(256.1,446.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(30,1,1).p("AtIAAIaRAA");
	this.shape_88.setTransform(257.1,446.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(30,1,1).p("AtRAAIajAA");
	this.shape_89.setTransform(258,446.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(30,1,1).p("AtaAAIa1AA");
	this.shape_90.setTransform(259,446.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(30,1,1).p("AtkAAIbJAA");
	this.shape_91.setTransform(259.9,446.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(30,1,1).p("AttAAIbbAA");
	this.shape_92.setTransform(260.8,446.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(30,1,1).p("At3AAIbvAA");
	this.shape_93.setTransform(261.8,446.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(30,1,1).p("AuAAAIcBAA");
	this.shape_94.setTransform(262.7,446.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(30,1,1).p("AuJAAIcTAA");
	this.shape_95.setTransform(263.6,446.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(30,1,1).p("AuTAAIcnAA");
	this.shape_96.setTransform(264.6,446.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(30,1,1).p("AucAAIc5AA");
	this.shape_97.setTransform(265.5,446.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(30,1,1).p("AulAAIdLAA");
	this.shape_98.setTransform(266.5,446.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(30,1,1).p("AuvAAIdfAA");
	this.shape_99.setTransform(267.4,446.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(30,1,1).p("Au4AAIdxAA");
	this.shape_100.setTransform(268.3,446.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(30,1,1).p("AvCAAIeFAA");
	this.shape_101.setTransform(269.3,446.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(30,1,1).p("AvLAAIeXAA");
	this.shape_102.setTransform(270.2,446.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(30,1,1).p("AvUAAIepAA");
	this.shape_103.setTransform(271.1,446.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(30,1,1).p("AveAAIe9AA");
	this.shape_104.setTransform(272.1,446.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(30,1,1).p("AvnAAIfPAA");
	this.shape_105.setTransform(273,446.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(30,1,1).p("AvwAAIfhAA");
	this.shape_106.setTransform(274,446.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(30,1,1).p("Av6AAIf1AA");
	this.shape_107.setTransform(274.9,446.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(30,1,1).p("AwDAAMAgHAAA");
	this.shape_108.setTransform(275.8,446.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(30,1,1).p("AwNAAMAgbAAA");
	this.shape_109.setTransform(276.8,446.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(30,1,1).p("AwWAAMAgtAAA");
	this.shape_110.setTransform(277.7,446.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(30,1,1).p("AwfAAMAg/AAA");
	this.shape_111.setTransform(278.6,446.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(30,1,1).p("AwpAAMAhTAAA");
	this.shape_112.setTransform(279.6,446.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(30,1,1).p("AwyAAMAhlAAA");
	this.shape_113.setTransform(280.5,446.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(30,1,1).p("Aw7AAMAh3AAA");
	this.shape_114.setTransform(281.4,446.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(30,1,1).p("AxFAAMAiLAAA");
	this.shape_115.setTransform(282.4,446.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(30,1,1).p("AxOAAMAidAAA");
	this.shape_116.setTransform(283.3,446.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(30,1,1).p("AxYAAMAixAAA");
	this.shape_117.setTransform(284.3,446.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(30,1,1).p("AxhAAMAjDAAA");
	this.shape_118.setTransform(285.2,446.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(30,1,1).p("AxqAAMAjVAAA");
	this.shape_119.setTransform(286.1,446.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(30,1,1).p("Ax0AAMAjpAAA");
	this.shape_120.setTransform(287.1,446.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(30,1,1).p("Ax9AAMAj7AAA");
	this.shape_121.setTransform(288,446.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},319).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).wait(71));

	// 2
	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(25,1,1).p("AAKgMIgTAZ");
	this.shape_122.setTransform(400.5,105.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(25,1,1).p("AgQAXIAhgt");
	this.shape_123.setTransform(399.8,106.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(25,1,1).p("AgXAiIAvhD");
	this.shape_124.setTransform(399.1,107.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(25,1,1).p("AgfAsIA/hY");
	this.shape_125.setTransform(398.3,108.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(25,1,1).p("AgmA3IBNht");
	this.shape_126.setTransform(397.6,110);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(25,1,1).p("AgtBCIBbiD");
	this.shape_127.setTransform(396.9,111);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(25,1,1).p("Ag0BMIBqiX");
	this.shape_128.setTransform(396.2,112.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(25,1,1).p("Ag8BXIB5it");
	this.shape_129.setTransform(395.5,113.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(25,1,1).p("AhDBiICHjC");
	this.shape_130.setTransform(394.7,114.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(25,1,1).p("AhKBsICVjX");
	this.shape_131.setTransform(394,115.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(25,1,1).p("AhRB3ICjjt");
	this.shape_132.setTransform(393.3,116.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(25,1,1).p("AhYCBICxkB");
	this.shape_133.setTransform(392.6,117.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(25,1,1).p("AhgCMIDBkX");
	this.shape_134.setTransform(391.8,118.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(25,1,1).p("AhnCXIDPks");
	this.shape_135.setTransform(391.1,119.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(25,1,1).p("AhuChIDdlB");
	this.shape_136.setTransform(390.4,120.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(25,1,1).p("Ah1CsIDslX");
	this.shape_137.setTransform(389.7,121.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(25,1,1).p("Ah9C2ID7lr");
	this.shape_138.setTransform(388.9,122.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(25,1,1).p("AiEDBIEJmB");
	this.shape_139.setTransform(388.2,123.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(25,1,1).p("AiLDLIEXmW");
	this.shape_140.setTransform(387.5,124.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(25,1,1).p("AiTDWIEnmr");
	this.shape_141.setTransform(386.8,125.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(25,1,1).p("AiaDhIE1nB");
	this.shape_142.setTransform(386,126.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(25,1,1).p("AihDrIFDnV");
	this.shape_143.setTransform(385.3,128);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(25,1,1).p("AioD2IFRnr");
	this.shape_144.setTransform(384.6,129);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(25,1,1).p("AivEBIFfoA");
	this.shape_145.setTransform(383.9,130.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(25,1,1).p("Ai2ELIFuoV");
	this.shape_146.setTransform(383.2,131.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(25,1,1).p("Ai+EWIF9or");
	this.shape_147.setTransform(382.4,132.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(25,1,1).p("AjFEgIGLo/");
	this.shape_148.setTransform(381.7,133.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(25,1,1).p("AjMErIGZpV");
	this.shape_149.setTransform(381,134.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(25,1,1).p("AjUE1IGppq");
	this.shape_150.setTransform(380.3,135.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").ss(25,1,1).p("AjbFAIG3p/");
	this.shape_151.setTransform(379.5,136.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(25,1,1).p("AjiFLIHFqV");
	this.shape_152.setTransform(378.8,137.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#000000").ss(25,1,1).p("AjpFVIHTqp");
	this.shape_153.setTransform(378.1,138.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(25,1,1).p("AjxFgIHiq/");
	this.shape_154.setTransform(377.4,139.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#000000").ss(25,1,1).p("Aj4FrIHxrU");
	this.shape_155.setTransform(376.6,140.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(25,1,1).p("Aj/F1IH/rp");
	this.shape_156.setTransform(375.9,141.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#000000").ss(25,1,1).p("AkGF/IINr+");
	this.shape_157.setTransform(375.2,142.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(25,1,1).p("AkNGKIIbsT");
	this.shape_158.setTransform(374.5,143.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#000000").ss(25,1,1).p("AkVGVIIrsp");
	this.shape_159.setTransform(373.8,144.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(25,1,1).p("AkcGgII5s/");
	this.shape_160.setTransform(373,146);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#000000").ss(25,1,1).p("AkjGqIJHtT");
	this.shape_161.setTransform(372.3,147.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(25,1,1).p("AkqG1IJVto");
	this.shape_162.setTransform(371.6,148.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#000000").ss(25,1,1).p("AkyG/IJkt9");
	this.shape_163.setTransform(370.9,149.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(25,1,1).p("Ak5HKIJzuT");
	this.shape_164.setTransform(370.1,150.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").ss(25,1,1).p("AlAHUIKBuo");
	this.shape_165.setTransform(369.4,151.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(25,1,1).p("AlHHfIKPu9");
	this.shape_166.setTransform(368.7,152.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").ss(25,1,1).p("AlPHpIKfvS");
	this.shape_167.setTransform(368,153.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(25,1,1).p("AlWH0IKtvn");
	this.shape_168.setTransform(367.2,154.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").ss(25,1,1).p("AldH/IK7v9");
	this.shape_169.setTransform(366.5,155.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(25,1,1).p("AlkIJILJwR");
	this.shape_170.setTransform(365.8,156.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").ss(25,1,1).p("AlrIUILXwn");
	this.shape_171.setTransform(365.1,157.7);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").ss(25,1,1).p("AlzIfILmw8");
	this.shape_172.setTransform(364.4,158.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#000000").ss(25,1,1).p("Al6IpIL1xR");
	this.shape_173.setTransform(363.6,159.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(25,1,1).p("AmBI0IMDxn");
	this.shape_174.setTransform(362.9,160.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#000000").ss(25,1,1).p("AmII+IMRx7");
	this.shape_175.setTransform(362.2,161.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#000000").ss(25,1,1).p("AmQJJIMhyR");
	this.shape_176.setTransform(361.5,163);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#000000").ss(25,1,1).p("AmXJUIMvyn");
	this.shape_177.setTransform(360.7,164);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#000000").ss(25,1,1).p("AmeJeIM9y7");
	this.shape_178.setTransform(360,165.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#000000").ss(25,1,1).p("AmlJpINLzR");
	this.shape_179.setTransform(359.3,166.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").ss(25,1,1).p("AmsJzINZzl");
	this.shape_180.setTransform(358.6,167.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#000000").ss(25,1,1).p("Am0J+INpz7");
	this.shape_181.setTransform(357.8,168.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#000000").ss(25,1,1).p("Am7KJIN30R");
	this.shape_182.setTransform(357.1,169.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#000000").ss(25,1,1).p("AnCKTIOF0l");
	this.shape_183.setTransform(356.4,170.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#000000").ss(25,1,1).p("AnJKeIOT07");
	this.shape_184.setTransform(355.7,171.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#000000").ss(25,1,1).p("AnRKoIOj1P");
	this.shape_185.setTransform(355,172.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#000000").ss(25,1,1).p("AnYKzIOx1l");
	this.shape_186.setTransform(354.2,173.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#000000").ss(25,1,1).p("AnfK+IO/16");
	this.shape_187.setTransform(353.5,174.6);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#000000").ss(25,1,1).p("AnmLIIPN2P");
	this.shape_188.setTransform(352.8,175.7);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#000000").ss(25,1,1).p("AntLTIPb2l");
	this.shape_189.setTransform(352.1,176.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#000000").ss(25,1,1).p("An1LdIPr25");
	this.shape_190.setTransform(351.3,177.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#000000").ss(25,1,1).p("An8LoIP53P");
	this.shape_191.setTransform(350.6,178.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#000000").ss(25,1,1).p("AoDLyIQH3k");
	this.shape_192.setTransform(349.9,179.9);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#000000").ss(25,1,1).p("AoKL9IQW35");
	this.shape_193.setTransform(349.2,181);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#000000").ss(25,1,1).p("AoSMIIQl4P");
	this.shape_194.setTransform(348.4,182);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#000000").ss(25,1,1).p("AoZMSIQz4j");
	this.shape_195.setTransform(347.7,183.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#000000").ss(25,1,1).p("AogMdIRB45");
	this.shape_196.setTransform(347,184.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#000000").ss(25,1,1).p("AonMoIRP5O");
	this.shape_197.setTransform(346.3,185.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#000000").ss(25,1,1).p("AouMyIRd5j");
	this.shape_198.setTransform(345.6,186.3);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#000000").ss(25,1,1).p("Ao2M9IRt55");
	this.shape_199.setTransform(344.8,187.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#000000").ss(25,1,1).p("Ao9NHIR76N");
	this.shape_200.setTransform(344.1,188.4);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#000000").ss(25,1,1).p("ApENSISJ6j");
	this.shape_201.setTransform(343.4,189.4);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#000000").ss(25,1,1).p("ApLNdISY65");
	this.shape_202.setTransform(342.7,190.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#000000").ss(25,1,1).p("ApTNnISn7N");
	this.shape_203.setTransform(341.9,191.6);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#000000").ss(25,1,1).p("ApaNyIS17i");
	this.shape_204.setTransform(341.2,192.6);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#000000").ss(25,1,1).p("AphN8ITD73");
	this.shape_205.setTransform(340.5,193.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#000000").ss(25,1,1).p("AppOHITT8N");
	this.shape_206.setTransform(339.8,194.7);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#000000").ss(25,1,1).p("ApwOSITh8i");
	this.shape_207.setTransform(339,195.8);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#000000").ss(25,1,1).p("Ap3OcITv83");
	this.shape_208.setTransform(338.3,196.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#000000").ss(25,1,1).p("Ap+OnIT99N");
	this.shape_209.setTransform(337.6,197.9);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#000000").ss(25,1,1).p("AqFOxIUL9h");
	this.shape_210.setTransform(336.9,199);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#000000").ss(25,1,1).p("AqMO8IUa93");
	this.shape_211.setTransform(336.2,200);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#000000").ss(25,1,1).p("AqUPHIUp+M");
	this.shape_212.setTransform(335.4,201.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#000000").ss(25,1,1).p("AqbPRIU3+h");
	this.shape_213.setTransform(334.7,202.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#000000").ss(25,1,1).p("AqiPcIVF+2");
	this.shape_214.setTransform(334,203.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#000000").ss(25,1,1).p("AqqPmIVV/L");
	this.shape_215.setTransform(333.3,204.3);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#000000").ss(25,1,1).p("AqxPxIVj/h");
	this.shape_216.setTransform(332.5,205.3);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#000000").ss(25,1,1).p("Aq4P7IVx/1");
	this.shape_217.setTransform(331.8,206.4);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#000000").ss(25,1,1).p("Aq/QGMAV/ggL");
	this.shape_218.setTransform(331.1,207.5);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#000000").ss(25,1,1).p("ArHQRMAWOggh");
	this.shape_219.setTransform(330.4,208.5);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#000000").ss(25,1,1).p("ArOQbMAWdgg1");
	this.shape_220.setTransform(329.6,209.6);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#000000").ss(25,1,1).p("ArVQmMAWrghL");
	this.shape_221.setTransform(328.9,210.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#000000").ss(25,1,1).p("ArcQwMAW5ghf");
	this.shape_222.setTransform(328.2,211.7);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#000000").ss(25,1,1).p("ArjQ7MAXHgh1");
	this.shape_223.setTransform(327.5,212.8);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#000000").ss(25,1,1).p("ArrRGMAXXgiK");
	this.shape_224.setTransform(326.8,213.8);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#000000").ss(25,1,1).p("AryRQMAXlgif");
	this.shape_225.setTransform(326,214.9);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#000000").ss(25,1,1).p("Ar5RbMAXzgi1");
	this.shape_226.setTransform(325.3,215.9);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#000000").ss(25,1,1).p("AsARlMAYBgjJ");
	this.shape_227.setTransform(324.6,217);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#000000").ss(25,1,1).p("AsIRwMAYQgjf");
	this.shape_228.setTransform(323.9,218.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#000000").ss(25,1,1).p("AsPR7MAYfgj1");
	this.shape_229.setTransform(323.1,219.1);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#000000").ss(25,1,1).p("AsWSFMAYtgkJ");
	this.shape_230.setTransform(322.4,220.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#000000").ss(25,1,1).p("AsdSQMAY7gkf");
	this.shape_231.setTransform(321.7,221.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#000000").ss(25,1,1).p("AskSaMAZKgkz");
	this.shape_232.setTransform(321,222.3);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#000000").ss(25,1,1).p("AssSlMAZZglJ");
	this.shape_233.setTransform(320.2,223.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#000000").ss(25,1,1).p("AszSwMAZnglf");
	this.shape_234.setTransform(319.5,224.4);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#000000").ss(25,1,1).p("As6S6MAZ1glz");
	this.shape_235.setTransform(318.8,225.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#000000").ss(25,1,1).p("AtBTFMAaDgmJ");
	this.shape_236.setTransform(318.1,226.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#000000").ss(25,1,1).p("AtJTPMAaSgmd");
	this.shape_237.setTransform(317.4,227.6);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#000000").ss(25,1,1).p("AtQTaMAahgmz");
	this.shape_238.setTransform(316.6,228.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#000000").ss(25,1,1).p("AtXTlMAavgnI");
	this.shape_239.setTransform(315.9,229.7);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#000000").ss(25,1,1).p("AteTvMAa9gnd");
	this.shape_240.setTransform(315.2,230.8);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#000000").ss(25,1,1).p("AtlT6MAbMgnz");
	this.shape_241.setTransform(314.5,231.8);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#000000").ss(25,1,1).p("AttUEMAbbgoH");
	this.shape_242.setTransform(313.7,232.9);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#000000").ss(25,1,1).p("At0UPMAbpgod");
	this.shape_243.setTransform(313,233.9);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#000000").ss(25,1,1).p("At7UaMAb3goz");
	this.shape_244.setTransform(312.3,235);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#000000").ss(25,1,1).p("AuDUkMAcGgpH");
	this.shape_245.setTransform(311.6,236.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#000000").ss(25,1,1).p("AuKUvMAcVgpd");
	this.shape_246.setTransform(310.8,237.1);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#000000").ss(25,1,1).p("AuRU5MAcjgpx");
	this.shape_247.setTransform(310.1,238.2);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#000000").ss(25,1,1).p("AuYVEMAcxgqH");
	this.shape_248.setTransform(309.4,239.2);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#000000").ss(25,1,1).p("AufVPMAc/gqc");
	this.shape_249.setTransform(308.7,240.3);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#000000").ss(25,1,1).p("AumVZMAdOgqx");
	this.shape_250.setTransform(308,241.4);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#000000").ss(25,1,1).p("AuuVkMAddgrH");
	this.shape_251.setTransform(307.2,242.4);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#000000").ss(25,1,1).p("Au1VuMAdrgrb");
	this.shape_252.setTransform(306.5,243.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#000000").ss(25,1,1).p("Au8V5MAd5grx");
	this.shape_253.setTransform(305.8,244.5);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#000000").ss(25,1,1).p("AvEWEMAeIgsG");
	this.shape_254.setTransform(305.1,245.6);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#000000").ss(25,1,1).p("AvLWOMAeXgsb");
	this.shape_255.setTransform(304.3,246.7);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#000000").ss(25,1,1).p("AvSWZMAelgsx");
	this.shape_256.setTransform(303.6,247.7);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#000000").ss(25,1,1).p("AvZWjMAezgtF");
	this.shape_257.setTransform(302.9,248.8);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#000000").ss(25,1,1).p("AvgWuMAfCgtb");
	this.shape_258.setTransform(302.2,249.8);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#000000").ss(25,1,1).p("AvoW5MAfRgtx");
	this.shape_259.setTransform(301.4,250.9);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#000000").ss(25,1,1).p("AvvXDMAffguF");
	this.shape_260.setTransform(300.7,252);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#000000").ss(25,1,1).p("Av2XOMAftgub");
	this.shape_261.setTransform(300,253);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#000000").ss(25,1,1).p("Av9XYMAf7guv");
	this.shape_262.setTransform(299.3,254.1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#000000").ss(25,1,1).p("AwFXjMAgLgvF");
	this.shape_263.setTransform(298.6,255.1);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#000000").ss(25,1,1).p("AwMXtMAgZgvZ");
	this.shape_264.setTransform(297.8,256.2);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#000000").ss(25,1,1).p("AwTX4MAgngvv");
	this.shape_265.setTransform(297.1,257.3);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#000000").ss(25,1,1).p("AwaYCMAg1gwE");
	this.shape_266.setTransform(296.4,258.3);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#000000").ss(25,1,1).p("AwhYNMAhEgwZ");
	this.shape_267.setTransform(295.7,259.4);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#000000").ss(25,1,1).p("AwpYYMAhTgwv");
	this.shape_268.setTransform(294.9,260.4);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#000000").ss(25,1,1).p("AwwYiMAhhgxD");
	this.shape_269.setTransform(294.2,261.5);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#000000").ss(25,1,1).p("Aw3YtMAhvgxZ");
	this.shape_270.setTransform(293.5,262.6);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#000000").ss(25,1,1).p("Aw/Y3MAh/gxu");
	this.shape_271.setTransform(292.8,263.6);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#000000").ss(25,1,1).p("AxGZCMAiNgyD");
	this.shape_272.setTransform(292,264.7);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#000000").ss(25,1,1).p("AxNZNMAibgyZ");
	this.shape_273.setTransform(291.3,265.7);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#000000").ss(25,1,1).p("AxUZXMAipgyt");
	this.shape_274.setTransform(290.6,266.8);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#000000").ss(25,1,1).p("AxbZiMAi3gzD");
	this.shape_275.setTransform(289.9,267.9);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#000000").ss(25,1,1).p("AxiZtMAjGgzZ");
	this.shape_276.setTransform(289.2,268.9);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#000000").ss(25,1,1).p("AxqZ3MAjVgzt");
	this.shape_277.setTransform(288.4,270);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#000000").ss(25,1,1).p("AxxaCMAjjg0D");
	this.shape_278.setTransform(287.7,271);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#000000").ss(25,1,1).p("Ax4aMMAjxg0X");
	this.shape_279.setTransform(287,272.1);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#000000").ss(25,1,1).p("AyAaXMAkBg0t");
	this.shape_280.setTransform(286.3,273.2);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#000000").ss(25,1,1).p("ASI6hMgkPA1D");
	this.shape_281.setTransform(285.5,274.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_122}]},150).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).wait(201));

	// 1
	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#000000").ss(30,1,1).p("AgYAAIAxAA");
	this.shape_282.setTransform(172.5,103.1);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#000000").ss(30,1,1).p("AghAAIBDAA");
	this.shape_283.setTransform(173.4,103.1);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#000000").ss(30,1,1).p("AgpAAIBTAA");
	this.shape_284.setTransform(174.2,103.1);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#000000").ss(30,1,1).p("AgyAAIBlAA");
	this.shape_285.setTransform(175.1,103.1);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#000000").ss(30,1,1).p("Ag6AAIB2AA");
	this.shape_286.setTransform(176,103.1);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#000000").ss(30,1,1).p("AhDAAICHAA");
	this.shape_287.setTransform(176.8,103.1);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#000000").ss(30,1,1).p("AhMAAICZAA");
	this.shape_288.setTransform(177.7,103.1);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#000000").ss(30,1,1).p("AhVAAICqAA");
	this.shape_289.setTransform(178.6,103.1);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#000000").ss(30,1,1).p("AhdAAIC7AA");
	this.shape_290.setTransform(179.4,103.1);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#000000").ss(30,1,1).p("AhmAAIDNAA");
	this.shape_291.setTransform(180.3,103.1);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#000000").ss(30,1,1).p("AhvAAIDfAA");
	this.shape_292.setTransform(181.2,103.1);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#000000").ss(30,1,1).p("Ah3AAIDvAA");
	this.shape_293.setTransform(182,103.1);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#000000").ss(30,1,1).p("AiAAAIEBAA");
	this.shape_294.setTransform(182.9,103.1);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#000000").ss(30,1,1).p("AiJAAIETAA");
	this.shape_295.setTransform(183.8,103.1);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#000000").ss(30,1,1).p("AiRAAIEjAA");
	this.shape_296.setTransform(184.6,103.1);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#000000").ss(30,1,1).p("AiaAAIE1AA");
	this.shape_297.setTransform(185.5,103.1);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#000000").ss(30,1,1).p("AiiAAIFFAA");
	this.shape_298.setTransform(186.4,103.1);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#000000").ss(30,1,1).p("AirAAIFXAA");
	this.shape_299.setTransform(187.2,103.1);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#000000").ss(30,1,1).p("Ai0AAIFpAA");
	this.shape_300.setTransform(188.1,103.1);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#000000").ss(30,1,1).p("Ai8AAIF6AA");
	this.shape_301.setTransform(189,103.1);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#000000").ss(30,1,1).p("AjFAAIGLAA");
	this.shape_302.setTransform(189.8,103.1);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#000000").ss(30,1,1).p("AjOAAIGdAA");
	this.shape_303.setTransform(190.7,103.1);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#000000").ss(30,1,1).p("AjXAAIGuAA");
	this.shape_304.setTransform(191.6,103.1);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#000000").ss(30,1,1).p("AjfAAIG/AA");
	this.shape_305.setTransform(192.4,103.1);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#000000").ss(30,1,1).p("AjoAAIHRAA");
	this.shape_306.setTransform(193.3,103.1);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#000000").ss(30,1,1).p("AjwAAIHhAA");
	this.shape_307.setTransform(194.1,103.1);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#000000").ss(30,1,1).p("Aj5AAIHzAA");
	this.shape_308.setTransform(195,103.1);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#000000").ss(30,1,1).p("AkCAAIIFAA");
	this.shape_309.setTransform(195.9,103.1);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#000000").ss(30,1,1).p("AkKAAIIVAA");
	this.shape_310.setTransform(196.7,103.1);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f().s("#000000").ss(30,1,1).p("AkTAAIInAA");
	this.shape_311.setTransform(197.6,103.1);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("#000000").ss(30,1,1).p("AkbAAII4AA");
	this.shape_312.setTransform(198.5,103.1);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("#000000").ss(30,1,1).p("AkkAAIJJAA");
	this.shape_313.setTransform(199.3,103.1);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("#000000").ss(30,1,1).p("AktAAIJbAA");
	this.shape_314.setTransform(200.2,103.1);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f().s("#000000").ss(30,1,1).p("Ak2AAIJsAA");
	this.shape_315.setTransform(201.1,103.1);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#000000").ss(30,1,1).p("Ak+AAIJ9AA");
	this.shape_316.setTransform(201.9,103.1);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("#000000").ss(30,1,1).p("AlHAAIKPAA");
	this.shape_317.setTransform(202.8,103.1);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#000000").ss(30,1,1).p("AlQAAIKhAA");
	this.shape_318.setTransform(203.7,103.1);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f().s("#000000").ss(30,1,1).p("AlYAAIKxAA");
	this.shape_319.setTransform(204.5,103.1);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("#000000").ss(30,1,1).p("AlhAAILDAA");
	this.shape_320.setTransform(205.4,103.1);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("#000000").ss(30,1,1).p("AlqAAILVAA");
	this.shape_321.setTransform(206.3,103.1);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("#000000").ss(30,1,1).p("AlyAAILlAA");
	this.shape_322.setTransform(207.1,103.1);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f().s("#000000").ss(30,1,1).p("Al7AAIL3AA");
	this.shape_323.setTransform(208,103.1);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("#000000").ss(30,1,1).p("AmDAAIMHAA");
	this.shape_324.setTransform(208.9,103.1);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f().s("#000000").ss(30,1,1).p("AmMAAIMZAA");
	this.shape_325.setTransform(209.7,103.1);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#000000").ss(30,1,1).p("AmVAAIMrAA");
	this.shape_326.setTransform(210.6,103.1);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f().s("#000000").ss(30,1,1).p("AmdAAIM8AA");
	this.shape_327.setTransform(211.5,103.1);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#000000").ss(30,1,1).p("AmmAAINNAA");
	this.shape_328.setTransform(212.3,103.1);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f().s("#000000").ss(30,1,1).p("AmvAAINfAA");
	this.shape_329.setTransform(213.2,103.1);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#000000").ss(30,1,1).p("Am4AAINxAA");
	this.shape_330.setTransform(214.1,103.1);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("#000000").ss(30,1,1).p("AnAAAIOBAA");
	this.shape_331.setTransform(214.9,103.1);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#000000").ss(30,1,1).p("AnJAAIOTAA");
	this.shape_332.setTransform(215.8,103.1);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("#000000").ss(30,1,1).p("AnRAAIOjAA");
	this.shape_333.setTransform(216.6,103.1);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("#000000").ss(30,1,1).p("AnaAAIO1AA");
	this.shape_334.setTransform(217.5,103.1);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("#000000").ss(30,1,1).p("AnjAAIPHAA");
	this.shape_335.setTransform(218.4,103.1);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("#000000").ss(30,1,1).p("AnrAAIPXAA");
	this.shape_336.setTransform(219.2,103.1);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("#000000").ss(30,1,1).p("An0AAIPpAA");
	this.shape_337.setTransform(220.1,103.1);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#000000").ss(30,1,1).p("An8AAIP5AA");
	this.shape_338.setTransform(221,103.1);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f().s("#000000").ss(30,1,1).p("AoFAAIQLAA");
	this.shape_339.setTransform(221.8,103.1);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#000000").ss(30,1,1).p("AoOAAIQdAA");
	this.shape_340.setTransform(222.7,103.1);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("#000000").ss(30,1,1).p("AoXAAIQvAA");
	this.shape_341.setTransform(223.6,103.1);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#000000").ss(30,1,1).p("AofAAIQ/AA");
	this.shape_342.setTransform(224.4,103.1);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f().s("#000000").ss(30,1,1).p("AooAAIRRAA");
	this.shape_343.setTransform(225.3,103.1);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#000000").ss(30,1,1).p("AoxAAIRjAA");
	this.shape_344.setTransform(226.2,103.1);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f().s("#000000").ss(30,1,1).p("Ao5AAIRzAA");
	this.shape_345.setTransform(227,103.1);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#000000").ss(30,1,1).p("ApCAAISFAA");
	this.shape_346.setTransform(227.9,103.1);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f().s("#000000").ss(30,1,1).p("ApLAAISXAA");
	this.shape_347.setTransform(228.8,103.1);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#000000").ss(30,1,1).p("ApTAAISnAA");
	this.shape_348.setTransform(229.6,103.1);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f().s("#000000").ss(30,1,1).p("ApcAAIS5AA");
	this.shape_349.setTransform(230.5,103.1);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#000000").ss(30,1,1).p("AplAAITLAA");
	this.shape_350.setTransform(231.4,103.1);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f().s("#000000").ss(30,1,1).p("AptAAITbAA");
	this.shape_351.setTransform(232.2,103.1);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#000000").ss(30,1,1).p("Ap2AAITtAA");
	this.shape_352.setTransform(233.1,103.1);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f().s("#000000").ss(30,1,1).p("Ap+AAIT9AA");
	this.shape_353.setTransform(234,103.1);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("#000000").ss(30,1,1).p("AqHAAIUPAA");
	this.shape_354.setTransform(234.8,103.1);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f().s("#000000").ss(30,1,1).p("AqQAAIUhAA");
	this.shape_355.setTransform(235.7,103.1);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("#000000").ss(30,1,1).p("AqZAAIUzAA");
	this.shape_356.setTransform(236.6,103.1);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f().s("#000000").ss(30,1,1).p("AqhAAIVDAA");
	this.shape_357.setTransform(237.4,103.1);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("#000000").ss(30,1,1).p("AqqAAIVVAA");
	this.shape_358.setTransform(238.3,103.1);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f().s("#000000").ss(30,1,1).p("AqyAAIVlAA");
	this.shape_359.setTransform(239.1,103.1);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#000000").ss(30,1,1).p("Aq7AAIV3AA");
	this.shape_360.setTransform(240,103.1);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f().s("#000000").ss(30,1,1).p("ArEAAIWJAA");
	this.shape_361.setTransform(240.9,103.1);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("#000000").ss(30,1,1).p("ArMAAIWZAA");
	this.shape_362.setTransform(241.7,103.1);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f().s("#000000").ss(30,1,1).p("ArVAAIWrAA");
	this.shape_363.setTransform(242.6,103.1);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("#000000").ss(30,1,1).p("ArdAAIW7AA");
	this.shape_364.setTransform(243.5,103.1);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f().s("#000000").ss(30,1,1).p("ArmAAIXNAA");
	this.shape_365.setTransform(244.3,103.1);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("#000000").ss(30,1,1).p("ArvAAIXfAA");
	this.shape_366.setTransform(245.2,103.1);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f().s("#000000").ss(30,1,1).p("Ar4AAIXxAA");
	this.shape_367.setTransform(246.1,103.1);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("#000000").ss(30,1,1).p("AsAAAIYBAA");
	this.shape_368.setTransform(246.9,103.1);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f().s("#000000").ss(30,1,1).p("AsJAAIYTAA");
	this.shape_369.setTransform(247.8,103.1);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("#000000").ss(30,1,1).p("AsSAAIYlAA");
	this.shape_370.setTransform(248.7,103.1);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f().s("#000000").ss(30,1,1).p("AsaAAIY1AA");
	this.shape_371.setTransform(249.5,103.1);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f().s("#000000").ss(30,1,1).p("AsjAAIZHAA");
	this.shape_372.setTransform(250.4,103.1);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f().s("#000000").ss(30,1,1).p("AssAAIZZAA");
	this.shape_373.setTransform(251.3,103.1);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("#000000").ss(30,1,1).p("As0AAIZpAA");
	this.shape_374.setTransform(252.1,103.1);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f().s("#000000").ss(30,1,1).p("As9AAIZ7AA");
	this.shape_375.setTransform(253,103.1);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("#000000").ss(30,1,1).p("AtGAAIaNAA");
	this.shape_376.setTransform(253.9,103.1);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f().s("#000000").ss(30,1,1).p("AtOAAIadAA");
	this.shape_377.setTransform(254.7,103.1);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("#000000").ss(30,1,1).p("AtXAAIavAA");
	this.shape_378.setTransform(255.6,103.1);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f().s("#000000").ss(30,1,1).p("AtfAAIa/AA");
	this.shape_379.setTransform(256.5,103.1);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("#000000").ss(30,1,1).p("AtoAAIbRAA");
	this.shape_380.setTransform(257.3,103.1);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f().s("#000000").ss(30,1,1).p("AtxAAIbjAA");
	this.shape_381.setTransform(258.2,103.1);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("#000000").ss(30,1,1).p("At6AAIb1AA");
	this.shape_382.setTransform(259.1,103.1);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f().s("#000000").ss(30,1,1).p("AuCAAIcFAA");
	this.shape_383.setTransform(259.9,103.1);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("#000000").ss(30,1,1).p("AuLAAIcXAA");
	this.shape_384.setTransform(260.8,103.1);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f().s("#000000").ss(30,1,1).p("AuTAAIcnAA");
	this.shape_385.setTransform(261.6,103.1);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("#000000").ss(30,1,1).p("AucAAIc5AA");
	this.shape_386.setTransform(262.5,103.1);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f().s("#000000").ss(30,1,1).p("AulAAIdLAA");
	this.shape_387.setTransform(263.4,103.1);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("#000000").ss(30,1,1).p("AutAAIdbAA");
	this.shape_388.setTransform(264.2,103.1);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f().s("#000000").ss(30,1,1).p("Au2AAIdtAA");
	this.shape_389.setTransform(265.1,103.1);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("#000000").ss(30,1,1).p("Au+AAId9AA");
	this.shape_390.setTransform(266,103.1);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f().s("#000000").ss(30,1,1).p("AvHAAIePAA");
	this.shape_391.setTransform(266.8,103.1);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f().s("#000000").ss(30,1,1).p("AvQAAIehAA");
	this.shape_392.setTransform(267.7,103.1);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f().s("#000000").ss(30,1,1).p("AvZAAIezAA");
	this.shape_393.setTransform(268.6,103.1);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f().s("#000000").ss(30,1,1).p("AvhAAIfDAA");
	this.shape_394.setTransform(269.4,103.1);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f().s("#000000").ss(30,1,1).p("AvqAAIfVAA");
	this.shape_395.setTransform(270.3,103.1);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("#000000").ss(30,1,1).p("AvyAAIfmAA");
	this.shape_396.setTransform(271.2,103.1);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f().s("#000000").ss(30,1,1).p("Av7AAIf3AA");
	this.shape_397.setTransform(272,103.1);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("#000000").ss(30,1,1).p("AwEAAMAgJAAA");
	this.shape_398.setTransform(272.9,103.1);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f().s("#000000").ss(30,1,1).p("AwNAAMAgbAAA");
	this.shape_399.setTransform(273.8,103.1);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f().s("#000000").ss(30,1,1).p("AwVAAMAgrAAA");
	this.shape_400.setTransform(274.6,103.1);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f().s("#000000").ss(30,1,1).p("AweAAMAg9AAA");
	this.shape_401.setTransform(275.5,103.1);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f().s("#000000").ss(30,1,1).p("AwnAAMAhOAAA");
	this.shape_402.setTransform(276.4,103.1);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f().s("#000000").ss(30,1,1).p("AwvAAMAhfAAA");
	this.shape_403.setTransform(277.2,103.1);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f().s("#000000").ss(30,1,1).p("Aw4AAMAhxAAA");
	this.shape_404.setTransform(278.1,103.1);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f().s("#000000").ss(30,1,1).p("AxBAAMAiDAAA");
	this.shape_405.setTransform(279,103.1);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f().s("#000000").ss(30,1,1).p("AxJAAMAiTAAA");
	this.shape_406.setTransform(279.8,103.1);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f().s("#000000").ss(30,1,1).p("AxSAAMAilAAA");
	this.shape_407.setTransform(280.7,103.1);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f().s("#000000").ss(30,1,1).p("AxbAAMAi3AAA");
	this.shape_408.setTransform(281.6,103.1);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f().s("#000000").ss(30,1,1).p("AxjAAMAjHAAA");
	this.shape_409.setTransform(282.4,103.1);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f().s("#000000").ss(30,1,1).p("AxsAAMAjZAAA");
	this.shape_410.setTransform(283.3,103.1);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f().s("#000000").ss(30,1,1).p("Ax0AAMAjpAAA");
	this.shape_411.setTransform(284.1,103.1);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f().s("#000000").ss(30,1,1).p("Ax9AAMAj7AAA");
	this.shape_412.setTransform(285,103.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_282}]},9).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_408}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_412}]},1).wait(371));

	// Base
	this.instance_4 = new lib.basez("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(286.5,274.5);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(510));

	// Background
	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_413.setTransform(275,275,3.373,2.543);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_414.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_414},{t:this.shape_413}]}).wait(510));

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