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
	this.shape.graphics.f("#FFFFFF").s().p("AywddQiwAAAAisMAAAg1mQAAinCwAAQCsAAAACnMAAAAyxMAivAAAQC2AAAACyQAACvi0AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.7,-188.4,275.5,376.9);


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
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AgiAAIBFAA");
	this.shape_1.setTransform(7.5,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AgrAAIBYAA");
	this.shape_2.setTransform(8.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("Ag1AAIBrAA");
	this.shape_3.setTransform(9.4,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("Ag/AAIB/AA");
	this.shape_4.setTransform(10.3,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AhJAAICTAA");
	this.shape_5.setTransform(11.2,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AhSAAIClAA");
	this.shape_6.setTransform(12.1,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AhbAAIC3AA");
	this.shape_7.setTransform(13,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AhlAAIDLAA");
	this.shape_8.setTransform(13.9,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AhuAAIDdAA");
	this.shape_9.setTransform(14.8,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("Ah3AAIDvAA");
	this.shape_10.setTransform(15.6,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AiAAAIEBAA");
	this.shape_11.setTransform(16.5,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AiKAAIEUAA");
	this.shape_12.setTransform(17.4,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AiSAAIElAA");
	this.shape_13.setTransform(18.2,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AibAAIE3AA");
	this.shape_14.setTransform(19.1,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AikAAIFJAA");
	this.shape_15.setTransform(19.9,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AitAAIFbAA");
	this.shape_16.setTransform(20.8,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("Ai2AAIFtAA");
	this.shape_17.setTransform(21.6,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("Ai+AAIF9AA");
	this.shape_18.setTransform(22.4,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AjHAAIGPAA");
	this.shape_19.setTransform(23.2,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AjQAAIGhAA");
	this.shape_20.setTransform(24,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AjYAAIGxAA");
	this.shape_21.setTransform(24.8,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AjgAAIHBAA");
	this.shape_22.setTransform(25.6,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AjpAAIHTAA");
	this.shape_23.setTransform(26.4,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AjxAAIHjAA");
	this.shape_24.setTransform(27.2,0);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("Aj5AAIHzAA");
	this.shape_25.setTransform(28,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AkCAAIIFAA");
	this.shape_26.setTransform(28.8,0);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AkKAAIIVAA");
	this.shape_27.setTransform(29.5,0);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AkSAAIIlAA");
	this.shape_28.setTransform(30.3,0);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AkZAAII0AA");
	this.shape_29.setTransform(31.1,0);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AkhAAIJDAA");
	this.shape_30.setTransform(31.8,0);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AkpAAIJTAA");
	this.shape_31.setTransform(32.5,0);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AkxAAIJjAA");
	this.shape_32.setTransform(33.3,0);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("Ak5AAIJyAA");
	this.shape_33.setTransform(34,0);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AlAAAIKBAA");
	this.shape_34.setTransform(34.7,0);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AlIAAIKRAA");
	this.shape_35.setTransform(35.4,0);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AlPAAIKfAA");
	this.shape_36.setTransform(36.1,0);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AlXAAIKvAA");
	this.shape_37.setTransform(36.9,0);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AleAAIK9AA");
	this.shape_38.setTransform(37.6,0);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AllAAILLAA");
	this.shape_39.setTransform(38.2,0);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AltAAILbAA");
	this.shape_40.setTransform(38.9,0);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AlzAAILoAA");
	this.shape_41.setTransform(39.6,0);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("Al7AAIL3AA");
	this.shape_42.setTransform(40.3,0);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AmCAAIMFAA");
	this.shape_43.setTransform(40.9,0);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AmJAAIMTAA");
	this.shape_44.setTransform(41.6,0);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AmQAAIMhAA");
	this.shape_45.setTransform(42.3,0);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AmXAAIMvAA");
	this.shape_46.setTransform(42.9,0);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AmdAAIM7AA");
	this.shape_47.setTransform(43.5,0);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AmkAAINJAA");
	this.shape_48.setTransform(44.2,0);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AmrAAINXAA");
	this.shape_49.setTransform(44.8,0);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AmxAAINjAA");
	this.shape_50.setTransform(45.4,0);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("Am4AAINxAA");
	this.shape_51.setTransform(46.1,0);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("Am+AAIN9AA");
	this.shape_52.setTransform(46.7,0);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AnFAAIOKAA");
	this.shape_53.setTransform(47.3,0);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AnLAAIOWAA");
	this.shape_54.setTransform(47.9,0);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AnRAAIOjAA");
	this.shape_55.setTransform(48.5,0);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AnXAAIOvAA");
	this.shape_56.setTransform(49.1,0);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AndAAIO7AA");
	this.shape_57.setTransform(49.6,0);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AnjAAIPHAA");
	this.shape_58.setTransform(50.2,0);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AnpAAIPTAA");
	this.shape_59.setTransform(50.8,0);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(5,1,1).p("AnvAAIPfAA");
	this.shape_60.setTransform(51.3,0);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(5,1,1).p("An1AAIPrAA");
	this.shape_61.setTransform(51.9,0);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(5,1,1).p("An7AAIP3AA");
	this.shape_62.setTransform(52.4,0);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(5,1,1).p("AoBAAIQDAA");
	this.shape_63.setTransform(53,0);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(5,1,1).p("AoGAAIQNAA");
	this.shape_64.setTransform(53.5,0);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(5,1,1).p("AoMAAIQZAA");
	this.shape_65.setTransform(54,0);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(5,1,1).p("AoRAAIQjAA");
	this.shape_66.setTransform(54.6,0);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(5,1,1).p("AoXAAIQvAA");
	this.shape_67.setTransform(55.1,0);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(5,1,1).p("AocAAIQ5AA");
	this.shape_68.setTransform(55.6,0);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(5,1,1).p("AohAAIRDAA");
	this.shape_69.setTransform(56.1,0);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(5,1,1).p("AonAAIRPAA");
	this.shape_70.setTransform(56.6,0);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(5,1,1).p("AosAAIRZAA");
	this.shape_71.setTransform(57.1,0);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(5,1,1).p("AoxAAIRjAA");
	this.shape_72.setTransform(57.5,0);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(5,1,1).p("Ao2AAIRtAA");
	this.shape_73.setTransform(58,0);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(5,1,1).p("Ao7AAIR3AA");
	this.shape_74.setTransform(58.5,0);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(5,1,1).p("ApAAAISBAA");
	this.shape_75.setTransform(59,0);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(5,1,1).p("ApFAAISLAA");
	this.shape_76.setTransform(59.4,0);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(5,1,1).p("ApJAAISTAA");
	this.shape_77.setTransform(59.9,0);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(5,1,1).p("ApOAAISdAA");
	this.shape_78.setTransform(60.3,0);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(5,1,1).p("ApTAAISnAA");
	this.shape_79.setTransform(60.8,0);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(5,1,1).p("ApXAAISvAA");
	this.shape_80.setTransform(61.2,0);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(5,1,1).p("ApcAAIS5AA");
	this.shape_81.setTransform(61.6,0);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(5,1,1).p("ApgAAITBAA");
	this.shape_82.setTransform(62,0);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(5,1,1).p("ApkAAITJAA");
	this.shape_83.setTransform(62.4,0);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(5,1,1).p("ApoAAITSAA");
	this.shape_84.setTransform(62.9,0);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(5,1,1).p("AptAAITbAA");
	this.shape_85.setTransform(63.3,0);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(5,1,1).p("ApxAAITjAA");
	this.shape_86.setTransform(63.7,0);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(5,1,1).p("Ap1AAITrAA");
	this.shape_87.setTransform(64,0);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(5,1,1).p("Ap5AAITzAA");
	this.shape_88.setTransform(64.4,0);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(5,1,1).p("Ap9AAIT7AA");
	this.shape_89.setTransform(64.8,0);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(5,1,1).p("AqBAAIUDAA");
	this.shape_90.setTransform(65.2,0);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(5,1,1).p("AqFAAIULAA");
	this.shape_91.setTransform(65.5,0);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(5,1,1).p("AqJAAIUTAA");
	this.shape_92.setTransform(65.9,0);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(5,1,1).p("AqNAAIUbAA");
	this.shape_93.setTransform(66.3,0);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(5,1,1).p("AqQAAIUhAA");
	this.shape_94.setTransform(66.6,0);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(5,1,1).p("AqUAAIUpAA");
	this.shape_95.setTransform(66.9,0);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(5,1,1).p("AqXAAIUvAA");
	this.shape_96.setTransform(67.3,0);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(5,1,1).p("AqbAAIU3AA");
	this.shape_97.setTransform(67.6,0);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(5,1,1).p("AqeAAIU9AA");
	this.shape_98.setTransform(67.9,0);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(5,1,1).p("AKiAAI1DAA");
	this.shape_99.setTransform(68.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).wait(1));

	// Layer 1
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(9.1,0,1,1,-90,0,0,0.4,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:135.7},99,cjs.Ease.get(0.5)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.8,-12.1,21.9,24.3);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-96.7,1,1,0,0,0,0.1,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,regY:0,y:213.5},140,cjs.Ease.get(0.5)).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAAgVIAAAr");
	this.shape.setTransform(-0.2,-101.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AAAAnIAAhN");
	this.shape_1.setTransform(-0.2,-100);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AAAA3IAAht");
	this.shape_2.setTransform(-0.2,-98.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AAABHIAAiN");
	this.shape_3.setTransform(-0.2,-96.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AAABYIAAiv");
	this.shape_4.setTransform(-0.2,-95.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AAABnIAAjO");
	this.shape_5.setTransform(-0.2,-93.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AAAB4IAAjv");
	this.shape_6.setTransform(-0.2,-92);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AAACHIAAkN");
	this.shape_7.setTransform(-0.2,-90.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AAACXIAAkt");
	this.shape_8.setTransform(-0.2,-88.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AAACnIAAlN");
	this.shape_9.setTransform(-0.2,-87.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AAAC3IAAlt");
	this.shape_10.setTransform(-0.2,-85.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AAADGIAAmL");
	this.shape_11.setTransform(-0.2,-84.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AAADWIAAmr");
	this.shape_12.setTransform(-0.2,-82.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AAADlIAAnK");
	this.shape_13.setTransform(-0.1,-81.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AAAD1IAAnp");
	this.shape_14.setTransform(-0.1,-79.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AAAEEIAAoH");
	this.shape_15.setTransform(-0.1,-78.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AAAEUIAAon");
	this.shape_16.setTransform(-0.1,-76.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AAAEjIAApF");
	this.shape_17.setTransform(-0.1,-75.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AAAEyIAApj");
	this.shape_18.setTransform(-0.1,-73.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AAAFBIAAqB");
	this.shape_19.setTransform(-0.1,-72.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AAAFQIAAqf");
	this.shape_20.setTransform(-0.1,-70.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AAAFfIAAq9");
	this.shape_21.setTransform(-0.1,-69.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AAAFtIAArZ");
	this.shape_22.setTransform(-0.1,-68);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AAAF8IAAr3");
	this.shape_23.setTransform(-0.1,-66.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AAAGKIAAsU");
	this.shape_24.setTransform(-0.1,-65.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AAAGZIAAsx");
	this.shape_25.setTransform(-0.1,-63.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AAAGoIAAtP");
	this.shape_26.setTransform(-0.1,-62.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AAAG2IAAtr");
	this.shape_27.setTransform(-0.1,-60.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AAAHEIAAuH");
	this.shape_28.setTransform(-0.1,-59.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AAAHSIAAuj");
	this.shape_29.setTransform(-0.1,-58.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AAAHgIAAu/");
	this.shape_30.setTransform(-0.1,-56.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AAAHvIAAvc");
	this.shape_31.setTransform(-0.1,-55.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AAAH8IAAv3");
	this.shape_32.setTransform(-0.1,-54);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AAAIKIAAwT");
	this.shape_33.setTransform(-0.1,-52.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AAAIYIAAwv");
	this.shape_34.setTransform(-0.1,-51.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AAAImIAAxL");
	this.shape_35.setTransform(-0.1,-49.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AAAI0IAAxn");
	this.shape_36.setTransform(-0.1,-48.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AAAJBIAAyB");
	this.shape_37.setTransform(-0.1,-47.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AAAJPIAAyd");
	this.shape_38.setTransform(-0.1,-45.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AAAJcIAAy3");
	this.shape_39.setTransform(-0.1,-44.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AAAJqIAAzT");
	this.shape_40.setTransform(-0.1,-43.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AAAJ3IAAzt");
	this.shape_41.setTransform(-0.1,-42);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AAAKEIAA0H");
	this.shape_42.setTransform(-0.1,-40.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AAAKRIAA0h");
	this.shape_43.setTransform(-0.1,-39.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AAAKeIAA07");
	this.shape_44.setTransform(-0.1,-38.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AAAKrIAA1V");
	this.shape_45.setTransform(-0.1,-36.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AAAK4IAA1v");
	this.shape_46.setTransform(-0.1,-35.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AAALFIAA2J");
	this.shape_47.setTransform(-0.1,-34.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AAALRIAA2h");
	this.shape_48.setTransform(-0.1,-33.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AAALeIAA27");
	this.shape_49.setTransform(-0.1,-31.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AAALrIAA3V");
	this.shape_50.setTransform(-0.1,-30.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AAAL3IAA3t");
	this.shape_51.setTransform(-0.1,-29.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AAAMEIAA4H");
	this.shape_52.setTransform(-0.1,-28.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AAAMQIAA4f");
	this.shape_53.setTransform(-0.1,-27);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AAAMcIAA43");
	this.shape_54.setTransform(-0.1,-25.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AAAMoIAA5P");
	this.shape_55.setTransform(-0.1,-24.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AAAM0IAA5n");
	this.shape_56.setTransform(-0.1,-23.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AAANBIAA6B");
	this.shape_57.setTransform(-0.1,-22.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AAANMIAA6X");
	this.shape_58.setTransform(-0.1,-21.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AAANYIAA6v");
	this.shape_59.setTransform(-0.1,-19.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(5,1,1).p("AAANkIAA7H");
	this.shape_60.setTransform(-0.1,-18.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(5,1,1).p("AAANwIAA7f");
	this.shape_61.setTransform(-0.1,-17.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(5,1,1).p("AAAN7IAA71");
	this.shape_62.setTransform(-0.1,-16.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(5,1,1).p("AAAOHIAA8N");
	this.shape_63.setTransform(-0.1,-15.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(5,1,1).p("AAAOSIAA8j");
	this.shape_64.setTransform(-0.1,-14.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(5,1,1).p("AAAOeIAA87");
	this.shape_65.setTransform(-0.1,-13.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(5,1,1).p("AAAOpIAA9R");
	this.shape_66.setTransform(-0.1,-12);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(5,1,1).p("AAAO0IAA9n");
	this.shape_67.setTransform(-0.1,-10.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(5,1,1).p("AAAPAIAA9/");
	this.shape_68.setTransform(-0.1,-9.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(5,1,1).p("AAAPLIAA+V");
	this.shape_69.setTransform(-0.1,-8.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(5,1,1).p("AAAPWIAA+r");
	this.shape_70.setTransform(0,-7.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(5,1,1).p("AAAPgIAA+/");
	this.shape_71.setTransform(0,-6.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(5,1,1).p("AAAPrIAA/V");
	this.shape_72.setTransform(0,-5.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(5,1,1).p("AAAP2IAA/r");
	this.shape_73.setTransform(0,-4.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(5,1,1).p("AAAQBMAAAggB");
	this.shape_74.setTransform(0,-3.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(5,1,1).p("AAAQLMAAAggV");
	this.shape_75.setTransform(0,-2.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(5,1,1).p("AAAQWMAAAggr");
	this.shape_76.setTransform(0,-1.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(5,1,1).p("AAAQgMAAAgg/");
	this.shape_77.setTransform(0,-0.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(5,1,1).p("AAAQrMAAAghV");
	this.shape_78.setTransform(0,0.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(5,1,1).p("AAAQ1MAAAghp");
	this.shape_79.setTransform(0,1.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(5,1,1).p("AAAQ/MAAAgh9");
	this.shape_80.setTransform(0,2.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(5,1,1).p("AAARJMAAAgiR");
	this.shape_81.setTransform(0,3.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(5,1,1).p("AAARTMAAAgil");
	this.shape_82.setTransform(0,4.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(5,1,1).p("AAAReMAAAgi7");
	this.shape_83.setTransform(0,5.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(5,1,1).p("AAARnMAAAgjN");
	this.shape_84.setTransform(0,6.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(5,1,1).p("AAARxMAAAgjh");
	this.shape_85.setTransform(0,7.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(5,1,1).p("AAAR7MAAAgj1");
	this.shape_86.setTransform(0,8.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(5,1,1).p("AAASFMAAAgkJ");
	this.shape_87.setTransform(0,9.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(5,1,1).p("AAASOMAAAgkb");
	this.shape_88.setTransform(0,10.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(5,1,1).p("AAASYMAAAgkv");
	this.shape_89.setTransform(0,11.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(5,1,1).p("AAAShMAAAglB");
	this.shape_90.setTransform(0,12.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(5,1,1).p("AAASrMAAAglV");
	this.shape_91.setTransform(0,13.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(5,1,1).p("AAAS0MAAAgln");
	this.shape_92.setTransform(0,14.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(5,1,1).p("AAAS9MAAAgl5");
	this.shape_93.setTransform(0,15);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(5,1,1).p("AAATGMAAAgmL");
	this.shape_94.setTransform(0,15.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(5,1,1).p("AAATPMAAAgmd");
	this.shape_95.setTransform(0,16.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(5,1,1).p("AAATYMAAAgmv");
	this.shape_96.setTransform(0,17.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(5,1,1).p("AAAThMAAAgnB");
	this.shape_97.setTransform(0,18.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(5,1,1).p("AAATqMAAAgnT");
	this.shape_98.setTransform(0,19.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(5,1,1).p("AAATzMAAAgnl");
	this.shape_99.setTransform(0,20.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(5,1,1).p("AAAT7MAAAgn1");
	this.shape_100.setTransform(0,21.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(5,1,1).p("AAAUEMAAAgoH");
	this.shape_101.setTransform(0,21.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(5,1,1).p("AAAUMMAAAgoX");
	this.shape_102.setTransform(0,22.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(5,1,1).p("AAAUVMAAAgop");
	this.shape_103.setTransform(0,23.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(5,1,1).p("AAAUdMAAAgo5");
	this.shape_104.setTransform(0,24.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(5,1,1).p("AAAUlMAAAgpJ");
	this.shape_105.setTransform(0,25.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(5,1,1).p("AAAUtMAAAgpZ");
	this.shape_106.setTransform(0,26);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(5,1,1).p("AAAU2MAAAgpr");
	this.shape_107.setTransform(0,26.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(5,1,1).p("AAAU+MAAAgp7");
	this.shape_108.setTransform(0,27.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(5,1,1).p("AAAVGMAAAgqL");
	this.shape_109.setTransform(0,28.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(5,1,1).p("AAAVOMAAAgqb");
	this.shape_110.setTransform(0,29.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(5,1,1).p("AAAVVMAAAgqp");
	this.shape_111.setTransform(0,29.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(5,1,1).p("AAAVdMAAAgq5");
	this.shape_112.setTransform(0,30.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(5,1,1).p("AAAVlMAAAgrJ");
	this.shape_113.setTransform(0,31.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(5,1,1).p("AAAVsMAAAgrX");
	this.shape_114.setTransform(0,32.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(5,1,1).p("AAAV0MAAAgrn");
	this.shape_115.setTransform(0,32.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(5,1,1).p("AAAV7MAAAgr1");
	this.shape_116.setTransform(0,33.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(5,1,1).p("AAAWCMAAAgsD");
	this.shape_117.setTransform(0,34.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(5,1,1).p("AAAWKMAAAgsT");
	this.shape_118.setTransform(0,35.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(5,1,1).p("AAAWRMAAAgsh");
	this.shape_119.setTransform(0,35.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(5,1,1).p("AAAWYMAAAgsv");
	this.shape_120.setTransform(0,36.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(5,1,1).p("AAAWfMAAAgs9");
	this.shape_121.setTransform(0,37.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(5,1,1).p("AAAWmMAAAgtL");
	this.shape_122.setTransform(0,37.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(5,1,1).p("AAAWtMAAAgtZ");
	this.shape_123.setTransform(0,38.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(5,1,1).p("AAAWzMAAAgtl");
	this.shape_124.setTransform(0,39.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(5,1,1).p("AAAW6MAAAgtz");
	this.shape_125.setTransform(0,39.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(5,1,1).p("AAAXBMAAAguB");
	this.shape_126.setTransform(0,40.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(5,1,1).p("AAAXHMAAAguN");
	this.shape_127.setTransform(0,41.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(5,1,1).p("AAAXOMAAAgub");
	this.shape_128.setTransform(0,41.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(5,1,1).p("AAAXUMAAAgun");
	this.shape_129.setTransform(0,42.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(5,1,1).p("AAAXbMAAAgu1");
	this.shape_130.setTransform(0,43);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(5,1,1).p("AAAXhMAAAgvB");
	this.shape_131.setTransform(0,43.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(5,1,1).p("AAAXnMAAAgvN");
	this.shape_132.setTransform(0,44.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(5,1,1).p("AAAXtMAAAgvZ");
	this.shape_133.setTransform(0,44.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(5,1,1).p("AAAXzMAAAgvl");
	this.shape_134.setTransform(0,45.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(5,1,1).p("AAAX5MAAAgvx");
	this.shape_135.setTransform(0,45.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(5,1,1).p("AAAX/MAAAgv9");
	this.shape_136.setTransform(0,46.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(5,1,1).p("AAAYEMAAAgwH");
	this.shape_137.setTransform(0,47.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(5,1,1).p("AAAYKMAAAgwT");
	this.shape_138.setTransform(0,47.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(5,1,1).p("AAAYQMAAAgwf");
	this.shape_139.setTransform(0,48.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(5,1,1).p("AAA4UMAAAAwp");
	this.shape_140.setTransform(0,48.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,-110.1,24.3,21.8);


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
(lib.writingsuccess_Fontkid_L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_329 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(329).call(this.frame_329).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(153.5,102.6,0.999,0.999,0,-8.5,171.5,22.4,-144);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({y:442.6},140).wait(10).to({regY:-143.9,rotation:-6.5,skewX:0,skewY:0,x:160,y:444.5},0).to({x:393},100).wait(10).to({startPosition:0},0).to({regY:-144,rotation:8.5,guide:{path:[393,444.4,401.6,363,481.2,440.3,560.9,517.5,440.2,511.6,319.6,505.8,263.1,516.7,206.6,527.7,176.6,534.3,124.9,545.8,86.7,598.8,52.7,646,15.1,690.3]}},60).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(153.6,445.8,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},140).wait(10).to({_off:false,x:396.6,y:446.8},0).to({_off:true},100).wait(71));

	// ar2
	this.instance_1 = new lib.ar2("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.7,501,1,1,0,0,0,72.4,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(159).to({_off:false},0).wait(171));

	// ar1
	this.instance_2 = new lib.ar1("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(49.9,217.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(321));

	// 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AgqAAIBVAA");
	this.shape_1.setTransform(158.7,446.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("Ag2AAIBtAA");
	this.shape_2.setTransform(159.8,446.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("AhBAAICDAA");
	this.shape_3.setTransform(161,446.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("AhNAAICbAA");
	this.shape_4.setTransform(162.2,446.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(25,1,1).p("AhZAAICyAA");
	this.shape_5.setTransform(163.3,446.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(25,1,1).p("AhkAAIDJAA");
	this.shape_6.setTransform(164.5,446.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(25,1,1).p("AhwAAIDhAA");
	this.shape_7.setTransform(165.6,446.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(25,1,1).p("Ah7AAID3AA");
	this.shape_8.setTransform(166.8,446.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(25,1,1).p("AiHAAIEPAA");
	this.shape_9.setTransform(167.9,446.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(25,1,1).p("AiSAAIElAA");
	this.shape_10.setTransform(169.1,446.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(25,1,1).p("AieAAIE9AA");
	this.shape_11.setTransform(170.2,446.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(25,1,1).p("AipAAIFTAA");
	this.shape_12.setTransform(171.4,446.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(25,1,1).p("Ai1AAIFrAA");
	this.shape_13.setTransform(172.5,446.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(25,1,1).p("AjAAAIGCAA");
	this.shape_14.setTransform(173.7,446.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(25,1,1).p("AjMAAIGZAA");
	this.shape_15.setTransform(174.9,446.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(25,1,1).p("AjYAAIGxAA");
	this.shape_16.setTransform(176,446.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(25,1,1).p("AjjAAIHHAA");
	this.shape_17.setTransform(177.2,446.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(25,1,1).p("AjvAAIHeAA");
	this.shape_18.setTransform(178.3,446.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(25,1,1).p("Aj6AAIH1AA");
	this.shape_19.setTransform(179.5,446.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(25,1,1).p("AkGAAIINAA");
	this.shape_20.setTransform(180.6,446.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(25,1,1).p("AkRAAIIjAA");
	this.shape_21.setTransform(181.8,446.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(25,1,1).p("AkdAAII7AA");
	this.shape_22.setTransform(182.9,446.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(25,1,1).p("AkoAAIJRAA");
	this.shape_23.setTransform(184.1,446.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(25,1,1).p("Ak0AAIJpAA");
	this.shape_24.setTransform(185.3,446.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(25,1,1).p("Ak/AAIKAAA");
	this.shape_25.setTransform(186.4,446.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(25,1,1).p("AlLAAIKXAA");
	this.shape_26.setTransform(187.6,446.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(25,1,1).p("AlWAAIKuAA");
	this.shape_27.setTransform(188.7,446.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(25,1,1).p("AliAAILFAA");
	this.shape_28.setTransform(189.9,446.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(25,1,1).p("AluAAILdAA");
	this.shape_29.setTransform(191,446.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(25,1,1).p("Al5AAILzAA");
	this.shape_30.setTransform(192.2,446.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(25,1,1).p("AmFAAIMLAA");
	this.shape_31.setTransform(193.3,446.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(25,1,1).p("AmQAAIMhAA");
	this.shape_32.setTransform(194.5,446.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(25,1,1).p("AmcAAIM5AA");
	this.shape_33.setTransform(195.6,446.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(25,1,1).p("AmoAAINQAA");
	this.shape_34.setTransform(196.8,446.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(25,1,1).p("AmzAAINnAA");
	this.shape_35.setTransform(198,446.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(25,1,1).p("Am/AAIN+AA");
	this.shape_36.setTransform(199.1,446.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(25,1,1).p("AnKAAIOVAA");
	this.shape_37.setTransform(200.3,446.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(25,1,1).p("AnVAAIOsAA");
	this.shape_38.setTransform(201.4,446.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(25,1,1).p("AnhAAIPDAA");
	this.shape_39.setTransform(202.6,446.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(25,1,1).p("AntAAIPbAA");
	this.shape_40.setTransform(203.7,446.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(25,1,1).p("An4AAIPxAA");
	this.shape_41.setTransform(204.9,446.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(25,1,1).p("AoEAAIQJAA");
	this.shape_42.setTransform(206,446.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(25,1,1).p("AoPAAIQfAA");
	this.shape_43.setTransform(207.2,446.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(25,1,1).p("AobAAIQ3AA");
	this.shape_44.setTransform(208.4,446.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(25,1,1).p("AonAAIROAA");
	this.shape_45.setTransform(209.5,446.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(25,1,1).p("AoyAAIRlAA");
	this.shape_46.setTransform(210.7,446.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(25,1,1).p("Ao+AAIR8AA");
	this.shape_47.setTransform(211.8,446.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(25,1,1).p("ApJAAISTAA");
	this.shape_48.setTransform(213,446.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(25,1,1).p("ApVAAISrAA");
	this.shape_49.setTransform(214.1,446.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(25,1,1).p("ApgAAITBAA");
	this.shape_50.setTransform(215.3,446.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(25,1,1).p("ApsAAITZAA");
	this.shape_51.setTransform(216.4,446.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(25,1,1).p("Ap3AAITvAA");
	this.shape_52.setTransform(217.6,446.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(25,1,1).p("AqDAAIUHAA");
	this.shape_53.setTransform(218.7,446.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(25,1,1).p("AqOAAIUeAA");
	this.shape_54.setTransform(219.9,446.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(25,1,1).p("AqaAAIU1AA");
	this.shape_55.setTransform(221.1,446.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(25,1,1).p("AqmAAIVNAA");
	this.shape_56.setTransform(222.2,446.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(25,1,1).p("AqxAAIVjAA");
	this.shape_57.setTransform(223.4,446.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(25,1,1).p("Aq9AAIV6AA");
	this.shape_58.setTransform(224.5,446.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(25,1,1).p("ArIAAIWRAA");
	this.shape_59.setTransform(225.7,446.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(25,1,1).p("ArUAAIWpAA");
	this.shape_60.setTransform(226.8,446.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(25,1,1).p("ArfAAIW/AA");
	this.shape_61.setTransform(228,446.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(25,1,1).p("ArrAAIXXAA");
	this.shape_62.setTransform(229.1,446.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(25,1,1).p("Ar2AAIXtAA");
	this.shape_63.setTransform(230.3,446.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(25,1,1).p("AsCAAIYFAA");
	this.shape_64.setTransform(231.5,446.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(25,1,1).p("AsOAAIYdAA");
	this.shape_65.setTransform(232.6,446.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(25,1,1).p("AsZAAIYzAA");
	this.shape_66.setTransform(233.8,446.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(25,1,1).p("AskAAIZKAA");
	this.shape_67.setTransform(234.9,446.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(25,1,1).p("AswAAIZhAA");
	this.shape_68.setTransform(236.1,446.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(25,1,1).p("As8AAIZ5AA");
	this.shape_69.setTransform(237.2,446.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(25,1,1).p("AtHAAIaPAA");
	this.shape_70.setTransform(238.4,446.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(25,1,1).p("AtTAAIanAA");
	this.shape_71.setTransform(239.5,446.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(25,1,1).p("AteAAIa9AA");
	this.shape_72.setTransform(240.7,446.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(25,1,1).p("AtqAAIbVAA");
	this.shape_73.setTransform(241.8,446.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(25,1,1).p("At2AAIbsAA");
	this.shape_74.setTransform(243,446.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(25,1,1).p("AuBAAIcDAA");
	this.shape_75.setTransform(244.2,446.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(25,1,1).p("AuNAAIcaAA");
	this.shape_76.setTransform(245.3,446.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(25,1,1).p("AuYAAIcxAA");
	this.shape_77.setTransform(246.5,446.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(25,1,1).p("AukAAIdJAA");
	this.shape_78.setTransform(247.6,446.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(25,1,1).p("AuvAAIdfAA");
	this.shape_79.setTransform(248.8,446.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(25,1,1).p("Au7AAId3AA");
	this.shape_80.setTransform(249.9,446.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(25,1,1).p("AvGAAIeNAA");
	this.shape_81.setTransform(251.1,446.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(25,1,1).p("AvSAAIelAA");
	this.shape_82.setTransform(252.2,446.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(25,1,1).p("AvdAAIe7AA");
	this.shape_83.setTransform(253.4,446.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(25,1,1).p("AvpAAIfTAA");
	this.shape_84.setTransform(254.6,446.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(25,1,1).p("Av1AAIfrAA");
	this.shape_85.setTransform(255.7,446.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(25,1,1).p("AwAAAMAgBAAA");
	this.shape_86.setTransform(256.9,446.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(25,1,1).p("AwMAAMAgYAAA");
	this.shape_87.setTransform(258,446.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(25,1,1).p("AwXAAMAgvAAA");
	this.shape_88.setTransform(259.2,446.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(25,1,1).p("AwjAAMAhHAAA");
	this.shape_89.setTransform(260.3,446.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(25,1,1).p("AwuAAMAhdAAA");
	this.shape_90.setTransform(261.5,446.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(25,1,1).p("Aw6AAMAh1AAA");
	this.shape_91.setTransform(262.6,446.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(25,1,1).p("AxFAAMAiLAAA");
	this.shape_92.setTransform(263.8,446.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(25,1,1).p("AxRAAMAijAAA");
	this.shape_93.setTransform(264.9,446.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(25,1,1).p("AxdAAMAi7AAA");
	this.shape_94.setTransform(266.1,446.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(25,1,1).p("AxoAAMAjRAAA");
	this.shape_95.setTransform(267.3,446.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(25,1,1).p("AxzAAMAjoAAA");
	this.shape_96.setTransform(268.4,446.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(25,1,1).p("Ax/AAMAj/AAA");
	this.shape_97.setTransform(269.6,446.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(25,1,1).p("AyLAAMAkXAAA");
	this.shape_98.setTransform(270.7,446.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(25,1,1).p("AyWAAMAktAAA");
	this.shape_99.setTransform(271.9,446.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(25,1,1).p("AyiAAMAlFAAA");
	this.shape_100.setTransform(273,446.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(25,1,1).p("AytAAMAlbAAA");
	this.shape_101.setTransform(274.2,446.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},159).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).wait(71));

	// 1
	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(25,1,1).p("AAAgNIAAAb");
	this.shape_102.setTransform(154.4,103.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(25,1,1).p("AAAAaIAAg0");
	this.shape_103.setTransform(154.4,105.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(25,1,1).p("AAAAmIAAhL");
	this.shape_104.setTransform(154.4,106.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(25,1,1).p("AAAAyIAAhj");
	this.shape_105.setTransform(154.4,107.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(25,1,1).p("AAAA/IAAh9");
	this.shape_106.setTransform(154.4,108.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(25,1,1).p("AAABLIAAiV");
	this.shape_107.setTransform(154.4,110);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(25,1,1).p("AAABXIAAit");
	this.shape_108.setTransform(154.4,111.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(25,1,1).p("AAABjIAAjF");
	this.shape_109.setTransform(154.4,112.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(25,1,1).p("AAABvIAAjd");
	this.shape_110.setTransform(154.4,113.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(25,1,1).p("AAAB7IAAj1");
	this.shape_111.setTransform(154.4,114.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(25,1,1).p("AAACHIAAkN");
	this.shape_112.setTransform(154.4,116.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(25,1,1).p("AAACUIAAkn");
	this.shape_113.setTransform(154.4,117.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(25,1,1).p("AAACgIAAk/");
	this.shape_114.setTransform(154.4,118.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(25,1,1).p("AAACsIAAlX");
	this.shape_115.setTransform(154.4,119.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(25,1,1).p("AAAC4IAAlv");
	this.shape_116.setTransform(154.4,121);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(25,1,1).p("AAADEIAAmH");
	this.shape_117.setTransform(154.4,122.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(25,1,1).p("AAADQIAAmf");
	this.shape_118.setTransform(154.4,123.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(25,1,1).p("AAADcIAAm3");
	this.shape_119.setTransform(154.4,124.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(25,1,1).p("AAADoIAAnP");
	this.shape_120.setTransform(154.4,125.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(25,1,1).p("AAAD0IAAnn");
	this.shape_121.setTransform(154.4,127.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(25,1,1).p("AAAEBIAAoA");
	this.shape_122.setTransform(154.4,128.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(25,1,1).p("AAAEMIAAoX");
	this.shape_123.setTransform(154.4,129.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(25,1,1).p("AAAEYIAAow");
	this.shape_124.setTransform(154.4,130.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(25,1,1).p("AAAElIAApJ");
	this.shape_125.setTransform(154.4,132);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(25,1,1).p("AAAExIAAph");
	this.shape_126.setTransform(154.4,133.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(25,1,1).p("AAAE9IAAp5");
	this.shape_127.setTransform(154.4,134.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(25,1,1).p("AAAFJIAAqR");
	this.shape_128.setTransform(154.4,135.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(25,1,1).p("AAAFVIAAqp");
	this.shape_129.setTransform(154.4,136.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(25,1,1).p("AAAFhIAArB");
	this.shape_130.setTransform(154.4,138.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(25,1,1).p("AAAFuIAAra");
	this.shape_131.setTransform(154.4,139.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(25,1,1).p("AAAF6IAArz");
	this.shape_132.setTransform(154.4,140.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(25,1,1).p("AAAGFIAAsK");
	this.shape_133.setTransform(154.4,141.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(25,1,1).p("AAAGSIAAsj");
	this.shape_134.setTransform(154.4,143.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(25,1,1).p("AAAGeIAAs7");
	this.shape_135.setTransform(154.4,144.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(25,1,1).p("AAAGqIAAtT");
	this.shape_136.setTransform(154.4,145.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(25,1,1).p("AAAG2IAAtr");
	this.shape_137.setTransform(154.4,146.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(25,1,1).p("AAAHCIAAuD");
	this.shape_138.setTransform(154.4,148);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(25,1,1).p("AAAHOIAAub");
	this.shape_139.setTransform(154.4,149.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(25,1,1).p("AAAHaIAAuz");
	this.shape_140.setTransform(154.4,150.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(25,1,1).p("AAAHnIAAvN");
	this.shape_141.setTransform(154.4,151.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(25,1,1).p("AAAHyIAAvk");
	this.shape_142.setTransform(154.4,152.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(25,1,1).p("AAAH/IAAv9");
	this.shape_143.setTransform(154.4,154.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(25,1,1).p("AAAILIAAwV");
	this.shape_144.setTransform(154.4,155.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(25,1,1).p("AAAIXIAAwt");
	this.shape_145.setTransform(154.4,156.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(25,1,1).p("AAAIjIAAxF");
	this.shape_146.setTransform(154.4,157.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(25,1,1).p("AAAIvIAAxd");
	this.shape_147.setTransform(154.4,159);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(25,1,1).p("AAAI7IAAx1");
	this.shape_148.setTransform(154.4,160.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(25,1,1).p("AAAJHIAAyN");
	this.shape_149.setTransform(154.4,161.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(25,1,1).p("AAAJUIAAym");
	this.shape_150.setTransform(154.4,162.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").ss(25,1,1).p("AAAJgIAAy/");
	this.shape_151.setTransform(154.4,163.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(25,1,1).p("AAAJrIAAzW");
	this.shape_152.setTransform(154.4,165.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#000000").ss(25,1,1).p("AAAJ4IAAzv");
	this.shape_153.setTransform(154.4,166.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(25,1,1).p("AAAKEIAA0H");
	this.shape_154.setTransform(154.4,167.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#000000").ss(25,1,1).p("AAAKQIAA0f");
	this.shape_155.setTransform(154.4,168.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(25,1,1).p("AAAKcIAA03");
	this.shape_156.setTransform(154.4,170.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#000000").ss(25,1,1).p("AAAKoIAA1P");
	this.shape_157.setTransform(154.4,171.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(25,1,1).p("AAAK0IAA1n");
	this.shape_158.setTransform(154.4,172.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#000000").ss(25,1,1).p("AAALAIAA1/");
	this.shape_159.setTransform(154.4,173.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(25,1,1).p("AAALMIAA2Y");
	this.shape_160.setTransform(154.4,175);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#000000").ss(25,1,1).p("AAALZIAA2x");
	this.shape_161.setTransform(154.4,176.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(25,1,1).p("AAALlIAA3J");
	this.shape_162.setTransform(154.4,177.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#000000").ss(25,1,1).p("AAALxIAA3h");
	this.shape_163.setTransform(154.4,178.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(25,1,1).p("AAAL9IAA35");
	this.shape_164.setTransform(154.4,179.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").ss(25,1,1).p("AAAMJIAA4R");
	this.shape_165.setTransform(154.4,181.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(25,1,1).p("AAAMVIAA4p");
	this.shape_166.setTransform(154.4,182.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").ss(25,1,1).p("AAAMhIAA5B");
	this.shape_167.setTransform(154.4,183.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(25,1,1).p("AAAMtIAA5Z");
	this.shape_168.setTransform(154.4,184.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").ss(25,1,1).p("AAAM6IAA5z");
	this.shape_169.setTransform(154.4,186);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(25,1,1).p("AAANGIAA6L");
	this.shape_170.setTransform(154.4,187.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").ss(25,1,1).p("AAANRIAA6h");
	this.shape_171.setTransform(154.4,188.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").ss(25,1,1).p("AAANeIAA67");
	this.shape_172.setTransform(154.4,189.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#000000").ss(25,1,1).p("AAANqIAA7T");
	this.shape_173.setTransform(154.4,190.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(25,1,1).p("AAAN2IAA7r");
	this.shape_174.setTransform(154.4,192.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#000000").ss(25,1,1).p("AAAOCIAA8D");
	this.shape_175.setTransform(154.4,193.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#000000").ss(25,1,1).p("AAAOOIAA8b");
	this.shape_176.setTransform(154.4,194.6);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#000000").ss(25,1,1).p("AAAOaIAA8z");
	this.shape_177.setTransform(154.4,195.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#000000").ss(25,1,1).p("AAAOmIAA9L");
	this.shape_178.setTransform(154.4,197);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#000000").ss(25,1,1).p("AAAOyIAA9k");
	this.shape_179.setTransform(154.4,198.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").ss(25,1,1).p("AAAO/IAA99");
	this.shape_180.setTransform(154.4,199.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#000000").ss(25,1,1).p("AAAPLIAA+V");
	this.shape_181.setTransform(154.4,200.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#000000").ss(25,1,1).p("AAAPXIAA+t");
	this.shape_182.setTransform(154.4,201.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#000000").ss(25,1,1).p("AAAPjIAA/F");
	this.shape_183.setTransform(154.4,203.2);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#000000").ss(25,1,1).p("AAAPvIAA/d");
	this.shape_184.setTransform(154.4,204.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#000000").ss(25,1,1).p("AAAP7IAA/1");
	this.shape_185.setTransform(154.4,205.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#000000").ss(25,1,1).p("AAAQHMAAAggN");
	this.shape_186.setTransform(154.4,206.8);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#000000").ss(25,1,1).p("AAAQTMAAAggl");
	this.shape_187.setTransform(154.4,208.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#000000").ss(25,1,1).p("AAAQgMAAAgg/");
	this.shape_188.setTransform(154.4,209.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#000000").ss(25,1,1).p("AAAQsMAAAghX");
	this.shape_189.setTransform(154.4,210.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#000000").ss(25,1,1).p("AAAQ4MAAAghv");
	this.shape_190.setTransform(154.4,211.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#000000").ss(25,1,1).p("AAAREMAAAgiH");
	this.shape_191.setTransform(154.4,213);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#000000").ss(25,1,1).p("AAARQMAAAgif");
	this.shape_192.setTransform(154.4,214.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#000000").ss(25,1,1).p("AAARcMAAAgi3");
	this.shape_193.setTransform(154.4,215.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#000000").ss(25,1,1).p("AAARoMAAAgjP");
	this.shape_194.setTransform(154.4,216.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#000000").ss(25,1,1).p("AAAR0MAAAgjn");
	this.shape_195.setTransform(154.4,217.9);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#000000").ss(25,1,1).p("AAASAMAAAgj/");
	this.shape_196.setTransform(154.4,219.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#000000").ss(25,1,1).p("AAASNMAAAgkZ");
	this.shape_197.setTransform(154.4,220.4);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#000000").ss(25,1,1).p("AAASYMAAAgkw");
	this.shape_198.setTransform(154.4,221.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#000000").ss(25,1,1).p("AAASlMAAAglJ");
	this.shape_199.setTransform(154.4,222.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#000000").ss(25,1,1).p("AAASxMAAAglh");
	this.shape_200.setTransform(154.4,224);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#000000").ss(25,1,1).p("AAAS9MAAAgl5");
	this.shape_201.setTransform(154.4,225.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#000000").ss(25,1,1).p("AAATJMAAAgmR");
	this.shape_202.setTransform(154.4,226.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#000000").ss(25,1,1).p("AAATVMAAAgmp");
	this.shape_203.setTransform(154.4,227.7);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#000000").ss(25,1,1).p("AAAThMAAAgnB");
	this.shape_204.setTransform(154.4,228.9);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#000000").ss(25,1,1).p("AAATuMAAAgnb");
	this.shape_205.setTransform(154.4,230.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#000000").ss(25,1,1).p("AAAT5MAAAgnx");
	this.shape_206.setTransform(154.4,231.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#000000").ss(25,1,1).p("AAAUFMAAAgoK");
	this.shape_207.setTransform(154.4,232.6);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#000000").ss(25,1,1).p("AAAUSMAAAgoj");
	this.shape_208.setTransform(154.4,233.8);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#000000").ss(25,1,1).p("AAAUeMAAAgo7");
	this.shape_209.setTransform(154.4,235.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#000000").ss(25,1,1).p("AAAUqMAAAgpT");
	this.shape_210.setTransform(154.4,236.3);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#000000").ss(25,1,1).p("AAAU2MAAAgpr");
	this.shape_211.setTransform(154.4,237.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#000000").ss(25,1,1).p("AAAVCMAAAgqD");
	this.shape_212.setTransform(154.4,238.8);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#000000").ss(25,1,1).p("AAAVOMAAAgqb");
	this.shape_213.setTransform(154.4,240);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#000000").ss(25,1,1).p("AAAVaMAAAgqz");
	this.shape_214.setTransform(154.4,241.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#000000").ss(25,1,1).p("AAAVmMAAAgrL");
	this.shape_215.setTransform(154.4,242.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#000000").ss(25,1,1).p("AAAVzMAAAgrl");
	this.shape_216.setTransform(154.4,243.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#000000").ss(25,1,1).p("AAAV/MAAAgr8");
	this.shape_217.setTransform(154.4,244.9);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#000000").ss(25,1,1).p("AAAWLMAAAgsV");
	this.shape_218.setTransform(154.4,246.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#000000").ss(25,1,1).p("AAAWXMAAAgst");
	this.shape_219.setTransform(154.4,247.3);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#000000").ss(25,1,1).p("AAAWjMAAAgtF");
	this.shape_220.setTransform(154.4,248.6);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#000000").ss(25,1,1).p("AAAWvMAAAgtd");
	this.shape_221.setTransform(154.4,249.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#000000").ss(25,1,1).p("AAAW7MAAAgt1");
	this.shape_222.setTransform(154.4,251);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#000000").ss(25,1,1).p("AAAXHMAAAguN");
	this.shape_223.setTransform(154.4,252.2);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#000000").ss(25,1,1).p("AAAXUMAAAgun");
	this.shape_224.setTransform(154.4,253.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#000000").ss(25,1,1).p("AAAXfMAAAgu9");
	this.shape_225.setTransform(154.4,254.7);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#000000").ss(25,1,1).p("AAAXsMAAAgvW");
	this.shape_226.setTransform(154.4,255.9);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#000000").ss(25,1,1).p("AAAX4MAAAgvv");
	this.shape_227.setTransform(154.4,257.1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#000000").ss(25,1,1).p("AAAYEMAAAgwH");
	this.shape_228.setTransform(154.4,258.4);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#000000").ss(25,1,1).p("AAAYQMAAAgwf");
	this.shape_229.setTransform(154.4,259.6);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#000000").ss(25,1,1).p("AAAYcMAAAgw3");
	this.shape_230.setTransform(154.4,260.8);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#000000").ss(25,1,1).p("AAAYoMAAAgxP");
	this.shape_231.setTransform(154.4,262.1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#000000").ss(25,1,1).p("AAAY0MAAAgxn");
	this.shape_232.setTransform(154.4,263.3);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#000000").ss(25,1,1).p("AAAZAMAAAgx/");
	this.shape_233.setTransform(154.4,264.5);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#000000").ss(25,1,1).p("AAAZNMAAAgyZ");
	this.shape_234.setTransform(154.4,265.7);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#000000").ss(25,1,1).p("AAAZZMAAAgyx");
	this.shape_235.setTransform(154.4,267);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#000000").ss(25,1,1).p("AAAZlMAAAgzJ");
	this.shape_236.setTransform(154.4,268.2);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#000000").ss(25,1,1).p("AAAZxMAAAgzh");
	this.shape_237.setTransform(154.4,269.4);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#000000").ss(25,1,1).p("AAAZ9MAAAgz5");
	this.shape_238.setTransform(154.4,270.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#000000").ss(25,1,1).p("AAAaJMAAAg0R");
	this.shape_239.setTransform(154.4,271.9);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#000000").ss(25,1,1).p("AAAaVMAAAg0p");
	this.shape_240.setTransform(154.4,273.1);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#000000").ss(25,1,1).p("AAAahMAAAg1B");
	this.shape_241.setTransform(154.4,274.3);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#000000").ss(25,1,1).p("AAA6sMAAAA1Z");
	this.shape_242.setTransform(154.4,275.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_102}]},9).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).wait(181));

	// Base
	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(275,275);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(330));

	// Background
	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_243.setTransform(275,275,3.373,2.543);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_244.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_244},{t:this.shape_243}]}).wait(330));

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