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


(lib.basev = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGdiQhjAAguiLMgR2g1mIgJg2QAAhtCNgkIBBgLQBnADAhBrMAPBAtKMAPIgs8QAoh8CKAAQCcAAAACTIgNBOMgSAA1XIgoBdQggAng7AHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.2,-188.9,260.6,378);


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
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAeAAIg7AA");
	this.shape.setTransform(3.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AgkAAIBJAA");
	this.shape_1.setTransform(4.5,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AgsAAIBZAA");
	this.shape_2.setTransform(5.3,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AgzAAIBnAA");
	this.shape_3.setTransform(6,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("Ag6AAIB1AA");
	this.shape_4.setTransform(6.7,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AhCAAICFAA");
	this.shape_5.setTransform(7.5,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AhJAAICTAA");
	this.shape_6.setTransform(8.2,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AhRAAICjAA");
	this.shape_7.setTransform(9,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AhYAAICxAA");
	this.shape_8.setTransform(9.7,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AhfAAIC/AA");
	this.shape_9.setTransform(10.4,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AhnAAIDPAA");
	this.shape_10.setTransform(11.2,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AhuAAIDdAA");
	this.shape_11.setTransform(11.9,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("Ah1AAIDrAA");
	this.shape_12.setTransform(12.6,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("Ah8AAID5AA");
	this.shape_13.setTransform(13.4,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AiEAAIEJAA");
	this.shape_14.setTransform(14.1,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AiLAAIEXAA");
	this.shape_15.setTransform(14.8,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AiSAAIEmAA");
	this.shape_16.setTransform(15.6,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AiaAAIE1AA");
	this.shape_17.setTransform(16.3,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AihAAIFDAA");
	this.shape_18.setTransform(17,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AipAAIFTAA");
	this.shape_19.setTransform(17.8,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AiwAAIFhAA");
	this.shape_20.setTransform(18.5,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("Ai3AAIFvAA");
	this.shape_21.setTransform(19.2,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("Ai/AAIF/AA");
	this.shape_22.setTransform(20,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AjGAAIGNAA");
	this.shape_23.setTransform(20.7,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AjNAAIGbAA");
	this.shape_24.setTransform(21.4,0);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AjUAAIGqAA");
	this.shape_25.setTransform(22.2,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AjcAAIG5AA");
	this.shape_26.setTransform(22.9,0);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AjjAAIHHAA");
	this.shape_27.setTransform(23.6,0);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AjqAAIHWAA");
	this.shape_28.setTransform(24.4,0);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AjyAAIHlAA");
	this.shape_29.setTransform(25.1,0);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("Aj5AAIHzAA");
	this.shape_30.setTransform(25.8,0);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AkBAAIIDAA");
	this.shape_31.setTransform(26.6,0);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AkIAAIIRAA");
	this.shape_32.setTransform(27.3,0);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AkPAAIIfAA");
	this.shape_33.setTransform(28,0);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AkXAAIIvAA");
	this.shape_34.setTransform(28.8,0);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AkeAAII9AA");
	this.shape_35.setTransform(29.5,0);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AkmAAIJNAA");
	this.shape_36.setTransform(30.3,0);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AktAAIJbAA");
	this.shape_37.setTransform(31,0);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("Ak0AAIJpAA");
	this.shape_38.setTransform(31.7,0);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("Ak7AAIJ4AA");
	this.shape_39.setTransform(32.5,0);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AlDAAIKHAA");
	this.shape_40.setTransform(33.2,0);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AlKAAIKVAA");
	this.shape_41.setTransform(33.9,0);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AlSAAIKlAA");
	this.shape_42.setTransform(34.7,0);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AlZAAIKzAA");
	this.shape_43.setTransform(35.4,0);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AlgAAILBAA");
	this.shape_44.setTransform(36.1,0);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AloAAILRAA");
	this.shape_45.setTransform(36.9,0);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AlvAAILfAA");
	this.shape_46.setTransform(37.6,0);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("Al2AAILtAA");
	this.shape_47.setTransform(38.3,0);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("Al+AAIL9AA");
	this.shape_48.setTransform(39.1,0);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AmFAAIMLAA");
	this.shape_49.setTransform(39.8,0);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AmMAAIMZAA");
	this.shape_50.setTransform(40.5,0);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AmUAAIMpAA");
	this.shape_51.setTransform(41.3,0);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AmbAAIM3AA");
	this.shape_52.setTransform(42,0);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AmiAAINFAA");
	this.shape_53.setTransform(42.7,0);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AmqAAINVAA");
	this.shape_54.setTransform(43.5,0);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AmxAAINjAA");
	this.shape_55.setTransform(44.2,0);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("Am4AAINxAA");
	this.shape_56.setTransform(44.9,0);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AnAAAIOBAA");
	this.shape_57.setTransform(45.7,0);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AnHAAIOPAA");
	this.shape_58.setTransform(46.4,0);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AnOAAIOdAA");
	this.shape_59.setTransform(47.1,0);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(5,1,1).p("AnWAAIOtAA");
	this.shape_60.setTransform(47.9,0);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(5,1,1).p("AndAAIO7AA");
	this.shape_61.setTransform(48.6,0);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(5,1,1).p("AnkAAIPJAA");
	this.shape_62.setTransform(49.3,0);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(5,1,1).p("AnsAAIPZAA");
	this.shape_63.setTransform(50.1,0);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(5,1,1).p("AnzAAIPnAA");
	this.shape_64.setTransform(50.8,0);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(5,1,1).p("An6AAIP1AA");
	this.shape_65.setTransform(51.5,0);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(5,1,1).p("AoCAAIQFAA");
	this.shape_66.setTransform(52.3,0);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(5,1,1).p("AoJAAIQTAA");
	this.shape_67.setTransform(53,0);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(5,1,1).p("AoRAAIQjAA");
	this.shape_68.setTransform(53.8,0);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(5,1,1).p("AoYAAIQxAA");
	this.shape_69.setTransform(54.5,0);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(5,1,1).p("AofAAIQ/AA");
	this.shape_70.setTransform(55.2,0);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(5,1,1).p("AonAAIRPAA");
	this.shape_71.setTransform(56,0);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(5,1,1).p("AouAAIRdAA");
	this.shape_72.setTransform(56.7,0);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(5,1,1).p("Ao1AAIRrAA");
	this.shape_73.setTransform(57.4,0);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(5,1,1).p("Ao9AAIR7AA");
	this.shape_74.setTransform(58.2,0);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(5,1,1).p("ApEAAISJAA");
	this.shape_75.setTransform(58.9,0);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(5,1,1).p("ApLAAISXAA");
	this.shape_76.setTransform(59.6,0);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(5,1,1).p("ApTAAISnAA");
	this.shape_77.setTransform(60.4,0);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(5,1,1).p("ApaAAIS1AA");
	this.shape_78.setTransform(61.1,0);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(5,1,1).p("AphAAITDAA");
	this.shape_79.setTransform(61.8,0);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(5,1,1).p("AppAAITTAA");
	this.shape_80.setTransform(62.6,0);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(5,1,1).p("ApwAAIThAA");
	this.shape_81.setTransform(63.3,0);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(5,1,1).p("Ap3AAITvAA");
	this.shape_82.setTransform(64,0);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(5,1,1).p("Ap/AAIT+AA");
	this.shape_83.setTransform(64.8,0);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(5,1,1).p("AqGAAIUNAA");
	this.shape_84.setTransform(65.5,0);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(5,1,1).p("AqNAAIUbAA");
	this.shape_85.setTransform(66.2,0);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(5,1,1).p("AqVAAIUqAA");
	this.shape_86.setTransform(67,0);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(5,1,1).p("AqcAAIU5AA");
	this.shape_87.setTransform(67.7,0);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(5,1,1).p("AqjAAIVHAA");
	this.shape_88.setTransform(68.4,0);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(5,1,1).p("AqrAAIVXAA");
	this.shape_89.setTransform(69.2,0);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(5,1,1).p("AqyAAIVlAA");
	this.shape_90.setTransform(69.9,0);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(5,1,1).p("Aq5AAIVzAA");
	this.shape_91.setTransform(70.6,0);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(5,1,1).p("ArBAAIWDAA");
	this.shape_92.setTransform(71.4,0);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(5,1,1).p("ArIAAIWRAA");
	this.shape_93.setTransform(72.1,0);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(5,1,1).p("ArPAAIWfAA");
	this.shape_94.setTransform(72.8,0);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(5,1,1).p("ArXAAIWvAA");
	this.shape_95.setTransform(73.6,0);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(5,1,1).p("AreAAIW9AA");
	this.shape_96.setTransform(74.3,0);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(5,1,1).p("ArlAAIXLAA");
	this.shape_97.setTransform(75,0);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(5,1,1).p("ArtAAIXbAA");
	this.shape_98.setTransform(75.8,0);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(5,1,1).p("Ar0AAIXpAA");
	this.shape_99.setTransform(76.5,0);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(5,1,1).p("Ar8AAIX4AA");
	this.shape_100.setTransform(77.3,0);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(5,1,1).p("AsDAAIYHAA");
	this.shape_101.setTransform(78,0);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(5,1,1).p("AsKAAIYVAA");
	this.shape_102.setTransform(78.7,0);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(5,1,1).p("AsSAAIYkAA");
	this.shape_103.setTransform(79.5,0);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(5,1,1).p("AsZAAIYzAA");
	this.shape_104.setTransform(80.2,0);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(5,1,1).p("AsgAAIZBAA");
	this.shape_105.setTransform(80.9,0);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(5,1,1).p("AsoAAIZRAA");
	this.shape_106.setTransform(81.7,0);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(5,1,1).p("AsvAAIZfAA");
	this.shape_107.setTransform(82.4,0);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(5,1,1).p("As2AAIZtAA");
	this.shape_108.setTransform(83.1,0);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(5,1,1).p("As+AAIZ9AA");
	this.shape_109.setTransform(83.9,0);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(5,1,1).p("AtFAAIaLAA");
	this.shape_110.setTransform(84.6,0);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(5,1,1).p("AtMAAIaZAA");
	this.shape_111.setTransform(85.3,0);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(5,1,1).p("AtUAAIapAA");
	this.shape_112.setTransform(86.1,0);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(5,1,1).p("AtbAAIa3AA");
	this.shape_113.setTransform(86.8,0);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(5,1,1).p("AtiAAIbFAA");
	this.shape_114.setTransform(87.5,0);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(5,1,1).p("AtqAAIbUAA");
	this.shape_115.setTransform(88.3,0);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(5,1,1).p("AtxAAIbjAA");
	this.shape_116.setTransform(89,0);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(5,1,1).p("At4AAIbxAA");
	this.shape_117.setTransform(89.7,0);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(5,1,1).p("AuAAAIcAAA");
	this.shape_118.setTransform(90.5,0);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(5,1,1).p("AuHAAIcPAA");
	this.shape_119.setTransform(91.2,0);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(5,1,1).p("AuOAAIcdAA");
	this.shape_120.setTransform(91.9,0);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(5,1,1).p("AuWAAIctAA");
	this.shape_121.setTransform(92.7,0);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(5,1,1).p("AudAAIc7AA");
	this.shape_122.setTransform(93.4,0);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(5,1,1).p("AukAAIdJAA");
	this.shape_123.setTransform(94.1,0);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(5,1,1).p("AusAAIdZAA");
	this.shape_124.setTransform(94.9,0);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(5,1,1).p("AuzAAIdnAA");
	this.shape_125.setTransform(95.6,0);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(5,1,1).p("Au6AAId1AA");
	this.shape_126.setTransform(96.3,0);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(5,1,1).p("AvCAAIeFAA");
	this.shape_127.setTransform(97.1,0);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(5,1,1).p("AvJAAIeTAA");
	this.shape_128.setTransform(97.8,0);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(5,1,1).p("AvQAAIehAA");
	this.shape_129.setTransform(98.5,0);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(5,1,1).p("AvYAAIexAA");
	this.shape_130.setTransform(99.3,0);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(5,1,1).p("AvfAAIe/AA");
	this.shape_131.setTransform(100,0);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(5,1,1).p("AvnAAIfOAA");
	this.shape_132.setTransform(100.8,0);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(5,1,1).p("AvuAAIfdAA");
	this.shape_133.setTransform(101.5,0);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(5,1,1).p("Av1AAIfrAA");
	this.shape_134.setTransform(102.2,0);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(5,1,1).p("Av9AAIf6AA");
	this.shape_135.setTransform(103,0);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(5,1,1).p("AwEAAMAgJAAA");
	this.shape_136.setTransform(103.7,0);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(5,1,1).p("AwLAAMAgXAAA");
	this.shape_137.setTransform(104.4,0);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(5,1,1).p("AwTAAMAgnAAA");
	this.shape_138.setTransform(105.2,0);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(5,1,1).p("AwaAAMAg1AAA");
	this.shape_139.setTransform(105.9,0);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(5,1,1).p("AwhAAMAhDAAA");
	this.shape_140.setTransform(106.6,0);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(5,1,1).p("AwpAAMAhTAAA");
	this.shape_141.setTransform(107.4,0);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(5,1,1).p("AwwAAMAhhAAA");
	this.shape_142.setTransform(108.1,0);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(5,1,1).p("Aw3AAMAhvAAA");
	this.shape_143.setTransform(108.8,0);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(5,1,1).p("Aw/AAMAh/AAA");
	this.shape_144.setTransform(109.6,0);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(5,1,1).p("AxGAAMAiNAAA");
	this.shape_145.setTransform(110.3,0);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(5,1,1).p("AxNAAMAibAAA");
	this.shape_146.setTransform(111,0);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(5,1,1).p("AxVAAMAirAAA");
	this.shape_147.setTransform(111.8,0);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(5,1,1).p("AxcAAMAi5AAA");
	this.shape_148.setTransform(112.5,0);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(5,1,1).p("ARkAAMgjHAAA");
	this.shape_149.setTransform(113.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).wait(1));

	// Layer 1
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-5.1,-1.5,0.81,0.81,-83.3,0,0,0.4,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-6.4,rotation:-90,x:222.9,y:-0.1},149).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.2,-11.3,18.7,19.6);


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
(lib.writingsuccess_Fontkid_V = function(mode,startPosition,loop) {
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
	this.instance.setTransform(165.3,108.1,0.999,0.999,0,-8.5,171.5,22.4,-144);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:272.6,y:438.5},200).wait(10).to({scaleX:1,scaleY:1,rotation:8,skewX:0,skewY:0,x:271.9,y:439.5},0).to({x:387.4,y:106.5},200).wait(11).to({startPosition:0},0).to({guide:{path:[387.6,105.9,196,-0.9,138.6,109.3,109.9,164.5,31.9,158.5,-46.1,152.6,-173.5,85.6]}},79).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(274.6,440.8,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},200).wait(10).to({_off:false,x:384.6,y:113.1},0).to({_off:true},200).wait(91));

	// ar4
	this.instance_1 = new lib.ar2("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(283,314.4,1,1,-70.7,0,0,0.8,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(219).to({_off:false},0).wait(291));

	// ar3
	this.instance_2 = new lib.ar2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(188.9,94.5,1,1,69.7,0,0,0.8,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(501));

	// 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AADgJIgFAT");
	this.shape_1.setTransform(273.5,437.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("AgFASIALgj");
	this.shape_2.setTransform(273.8,436.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("AgIAbIARg0");
	this.shape_3.setTransform(274.1,435.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("AgLAjIAXhF");
	this.shape_4.setTransform(274.4,434.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(25,1,1).p("AgOArIAdhV");
	this.shape_5.setTransform(274.7,433.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(25,1,1).p("AgRAzIAjhl");
	this.shape_6.setTransform(274.9,432.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(25,1,1).p("AgUA7IAph1");
	this.shape_7.setTransform(275.2,432.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(25,1,1).p("AgXBEIAviH");
	this.shape_8.setTransform(275.5,431.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(25,1,1).p("AgZBMIAziX");
	this.shape_9.setTransform(275.8,430.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(25,1,1).p("AgcBUIA5in");
	this.shape_10.setTransform(276.1,429.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(25,1,1).p("AgfBcIA/i3");
	this.shape_11.setTransform(276.4,428.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(25,1,1).p("AgiBlIBFjJ");
	this.shape_12.setTransform(276.6,428);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(25,1,1).p("AglBsIBLjY");
	this.shape_13.setTransform(276.9,427.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(25,1,1).p("AgnB1IBPjp");
	this.shape_14.setTransform(277.2,426.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(25,1,1).p("AgqB9IBVj5");
	this.shape_15.setTransform(277.5,425.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(25,1,1).p("AgtCFIBbkJ");
	this.shape_16.setTransform(277.8,424.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(25,1,1).p("AgwCOIBhka");
	this.shape_17.setTransform(278.1,423.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(25,1,1).p("AgzCWIBnkr");
	this.shape_18.setTransform(278.4,423);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(25,1,1).p("Ag1CeIBsk7");
	this.shape_19.setTransform(278.7,422.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(25,1,1).p("Ag5CmIBzlL");
	this.shape_20.setTransform(279,421.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(25,1,1).p("Ag7CuIB3lb");
	this.shape_21.setTransform(279.2,420.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(25,1,1).p("Ag+C3IB9lt");
	this.shape_22.setTransform(279.5,419.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(25,1,1).p("AhBC/ICDl9");
	this.shape_23.setTransform(279.8,418.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(25,1,1).p("AhEDHICJmN");
	this.shape_24.setTransform(280.1,418);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(25,1,1).p("AhHDPICPmd");
	this.shape_25.setTransform(280.4,417.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(25,1,1).p("AhJDXICUmu");
	this.shape_26.setTransform(280.7,416.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(25,1,1).p("AhMDgICZm/");
	this.shape_27.setTransform(280.9,415.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(25,1,1).p("AhPDoICfnP");
	this.shape_28.setTransform(281.2,414.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(25,1,1).p("AhSDwIClnf");
	this.shape_29.setTransform(281.5,413.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(25,1,1).p("AhVD4ICrnv");
	this.shape_30.setTransform(281.8,413);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(25,1,1).p("AhYEAICxoA");
	this.shape_31.setTransform(282.1,412.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(25,1,1).p("AhbEJIC2oR");
	this.shape_32.setTransform(282.4,411.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(25,1,1).p("AhdERIC8oh");
	this.shape_33.setTransform(282.7,410.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(25,1,1).p("AhgEZIDBox");
	this.shape_34.setTransform(282.9,409.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(25,1,1).p("AhjEhIDHpB");
	this.shape_35.setTransform(283.2,408.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(25,1,1).p("AhmEqIDNpT");
	this.shape_36.setTransform(283.5,408.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(25,1,1).p("AhpEyIDTpj");
	this.shape_37.setTransform(283.8,407.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(25,1,1).p("AhsE6IDZpz");
	this.shape_38.setTransform(284.1,406.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(25,1,1).p("AhuFCIDdqD");
	this.shape_39.setTransform(284.4,405.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(25,1,1).p("AhxFLIDjqV");
	this.shape_40.setTransform(284.7,404.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(25,1,1).p("Ah0FTIDpql");
	this.shape_41.setTransform(285,403.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(25,1,1).p("Ah3FbIDvq1");
	this.shape_42.setTransform(285.2,403.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(25,1,1).p("Ah6FjID1rF");
	this.shape_43.setTransform(285.5,402.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(25,1,1).p("Ah9FrID7rV");
	this.shape_44.setTransform(285.8,401.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(25,1,1).p("AiAFzIEArm");
	this.shape_45.setTransform(286.1,400.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(25,1,1).p("AiCF8IEFr3");
	this.shape_46.setTransform(286.4,399.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(25,1,1).p("AiFGEIELsH");
	this.shape_47.setTransform(286.7,399);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(25,1,1).p("AiIGMIERsX");
	this.shape_48.setTransform(287,398.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(25,1,1).p("AiLGUIEXsn");
	this.shape_49.setTransform(287.2,397.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(25,1,1).p("AiOGdIEds5");
	this.shape_50.setTransform(287.5,396.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(25,1,1).p("AiRGlIEjtJ");
	this.shape_51.setTransform(287.8,395.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(25,1,1).p("AiTGtIEntZ");
	this.shape_52.setTransform(288.1,394.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(25,1,1).p("AiWG1IEttp");
	this.shape_53.setTransform(288.4,394);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(25,1,1).p("AiZG+IEzt6");
	this.shape_54.setTransform(288.7,393.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(25,1,1).p("AicHGIE5uL");
	this.shape_55.setTransform(289,392.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(25,1,1).p("AifHOIE/ub");
	this.shape_56.setTransform(289.2,391.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(25,1,1).p("AiiHWIFFur");
	this.shape_57.setTransform(289.5,390.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(25,1,1).p("AilHeIFLu7");
	this.shape_58.setTransform(289.8,389.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(25,1,1).p("AinHmIFPvL");
	this.shape_59.setTransform(290.1,389);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(25,1,1).p("AiqHvIFVvd");
	this.shape_60.setTransform(290.4,388.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(25,1,1).p("AitH3IFbvt");
	this.shape_61.setTransform(290.7,387.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(25,1,1).p("AiwH/IFhv9");
	this.shape_62.setTransform(290.9,386.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(25,1,1).p("AizIHIFnwN");
	this.shape_63.setTransform(291.2,385.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(25,1,1).p("Ai1IQIFrwf");
	this.shape_64.setTransform(291.5,384.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(25,1,1).p("Ai4IYIFxwv");
	this.shape_65.setTransform(291.8,384);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(25,1,1).p("Ai7IgIF3w/");
	this.shape_66.setTransform(292.1,383.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(25,1,1).p("Ai+IoIF9xP");
	this.shape_67.setTransform(292.4,382.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(25,1,1).p("AjBIxIGDxh");
	this.shape_68.setTransform(292.7,381.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(25,1,1).p("AjEI5IGIxx");
	this.shape_69.setTransform(293,380.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(25,1,1).p("AjGJBIGNyB");
	this.shape_70.setTransform(293.3,379.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(25,1,1).p("AjJJJIGTyR");
	this.shape_71.setTransform(293.5,379.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(25,1,1).p("AjMJRIGZyh");
	this.shape_72.setTransform(293.8,378.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(25,1,1).p("AjPJaIGfyy");
	this.shape_73.setTransform(294.1,377.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(25,1,1).p("AjSJiIGlzD");
	this.shape_74.setTransform(294.4,376.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(25,1,1).p("AjVJqIGrzT");
	this.shape_75.setTransform(294.7,375.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(25,1,1).p("AjYJyIGwzj");
	this.shape_76.setTransform(295,374.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(25,1,1).p("AjaJ6IG1z0");
	this.shape_77.setTransform(295.2,374.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(25,1,1).p("AjdKDIG70F");
	this.shape_78.setTransform(295.5,373.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(25,1,1).p("AjgKLIHB0V");
	this.shape_79.setTransform(295.8,372.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(25,1,1).p("AjjKTIHH0l");
	this.shape_80.setTransform(296.1,371.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(25,1,1).p("AjmKbIHN01");
	this.shape_81.setTransform(296.4,370.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(25,1,1).p("AjoKkIHS1H");
	this.shape_82.setTransform(296.7,370);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(25,1,1).p("AjsKsIHY1X");
	this.shape_83.setTransform(297,369.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(25,1,1).p("AjuK0IHd1n");
	this.shape_84.setTransform(297.2,368.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(25,1,1).p("AjxK8IHj13");
	this.shape_85.setTransform(297.5,367.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(25,1,1).p("Aj0LFIHp2I");
	this.shape_86.setTransform(297.8,366.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(25,1,1).p("Aj3LNIHv2Y");
	this.shape_87.setTransform(298.1,365.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(25,1,1).p("Aj6LVIH12p");
	this.shape_88.setTransform(298.4,365);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(25,1,1).p("Aj8LdIH525");
	this.shape_89.setTransform(298.7,364.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(25,1,1).p("Aj/LlIH/3J");
	this.shape_90.setTransform(299,363.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(25,1,1).p("AkCLtIIF3Z");
	this.shape_91.setTransform(299.3,362.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(25,1,1).p("AkFL2IIL3r");
	this.shape_92.setTransform(299.5,361.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(25,1,1).p("AkIL+IIR37");
	this.shape_93.setTransform(299.8,360.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(25,1,1).p("AkLMGIIX4L");
	this.shape_94.setTransform(300.1,360);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(25,1,1).p("AkNMOIIc4b");
	this.shape_95.setTransform(300.4,359.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(25,1,1).p("AkQMXIIh4t");
	this.shape_96.setTransform(300.7,358.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(25,1,1).p("AkTMfIIn49");
	this.shape_97.setTransform(301,357.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(25,1,1).p("AkWMnIIt5N");
	this.shape_98.setTransform(301.3,356.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(25,1,1).p("AkZMvIIz5e");
	this.shape_99.setTransform(301.5,355.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(25,1,1).p("AkcM4II55u");
	this.shape_100.setTransform(301.8,355.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(25,1,1).p("AkfNAII/5/");
	this.shape_101.setTransform(302.1,354.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(25,1,1).p("AkhNIIJD6P");
	this.shape_102.setTransform(302.4,353.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(25,1,1).p("AkkNQIJJ6f");
	this.shape_103.setTransform(302.7,352.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(25,1,1).p("AknNYIJP6w");
	this.shape_104.setTransform(303,351.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(25,1,1).p("AkqNhIJV7B");
	this.shape_105.setTransform(303.3,350.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(25,1,1).p("AktNpIJb7R");
	this.shape_106.setTransform(303.5,350.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(25,1,1).p("AkvNxIJf7h");
	this.shape_107.setTransform(303.8,349.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(25,1,1).p("AkzN6IJn7y");
	this.shape_108.setTransform(304.1,348.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(25,1,1).p("Ak1OBIJr8B");
	this.shape_109.setTransform(304.4,347.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(25,1,1).p("Ak4OKIJx8T");
	this.shape_110.setTransform(304.7,346.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(25,1,1).p("Ak7OSIJ38j");
	this.shape_111.setTransform(305,345.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(25,1,1).p("Ak+OaIJ98z");
	this.shape_112.setTransform(305.2,345.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(25,1,1).p("AlBOjIKD9F");
	this.shape_113.setTransform(305.5,344.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(25,1,1).p("AlDOrIKH9V");
	this.shape_114.setTransform(305.8,343.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(25,1,1).p("AlGOzIKN9l");
	this.shape_115.setTransform(306.1,342.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(25,1,1).p("AlJO7IKT91");
	this.shape_116.setTransform(306.4,341.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(25,1,1).p("AlMPDIKZ+F");
	this.shape_117.setTransform(306.7,340.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(25,1,1).p("AlPPLIKf+W");
	this.shape_118.setTransform(307,340.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(25,1,1).p("AlSPUIKl+n");
	this.shape_119.setTransform(307.3,339.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(25,1,1).p("AlUPcIKq+3");
	this.shape_120.setTransform(307.6,338.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(25,1,1).p("AlXPkIKv/H");
	this.shape_121.setTransform(307.8,337.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(25,1,1).p("AlaPsIK1/Y");
	this.shape_122.setTransform(308.1,336.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(25,1,1).p("AldP1IK7/p");
	this.shape_123.setTransform(308.4,336);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(25,1,1).p("AlgP9ILB/5");
	this.shape_124.setTransform(308.7,335.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(25,1,1).p("AljQFMALHggJ");
	this.shape_125.setTransform(309,334.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(25,1,1).p("AlmQNMALNggZ");
	this.shape_126.setTransform(309.3,333.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(25,1,1).p("AloQWMALRggq");
	this.shape_127.setTransform(309.5,332.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(25,1,1).p("AlrQeMALXgg7");
	this.shape_128.setTransform(309.8,331.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(25,1,1).p("AluQmMALdghL");
	this.shape_129.setTransform(310.1,331);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(25,1,1).p("AlxQuMALjghb");
	this.shape_130.setTransform(310.4,330.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(25,1,1).p("Al0Q2MALpghr");
	this.shape_131.setTransform(310.7,329.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(25,1,1).p("Al3Q+MALvgh8");
	this.shape_132.setTransform(311,328.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(25,1,1).p("Al6RHMAL1giN");
	this.shape_133.setTransform(311.3,327.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(25,1,1).p("Al8RPMAL5gid");
	this.shape_134.setTransform(311.5,326.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(25,1,1).p("Al/RXMAL/git");
	this.shape_135.setTransform(311.8,326);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(25,1,1).p("AmCRgMAMFgi/");
	this.shape_136.setTransform(312.1,325.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(25,1,1).p("AmFRoMAMLgjP");
	this.shape_137.setTransform(312.4,324.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(25,1,1).p("AmIRwMAMRgjf");
	this.shape_138.setTransform(312.7,323.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(25,1,1).p("AmKR4MAMVgjv");
	this.shape_139.setTransform(313,322.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(25,1,1).p("AmNSAMAMbgj/");
	this.shape_140.setTransform(313.3,321.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(25,1,1).p("AmQSJMAMhgkR");
	this.shape_141.setTransform(313.6,321.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(25,1,1).p("AmTSRMAMngkh");
	this.shape_142.setTransform(313.8,320.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(25,1,1).p("AmWSZMAMtgkx");
	this.shape_143.setTransform(314.1,319.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(25,1,1).p("AmYShMAMyglB");
	this.shape_144.setTransform(314.4,318.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(25,1,1).p("AmcSqMAM5glT");
	this.shape_145.setTransform(314.7,317.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(25,1,1).p("AmeSyMAM9gli");
	this.shape_146.setTransform(315,316.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(25,1,1).p("AmhS6MANDglz");
	this.shape_147.setTransform(315.3,316.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(25,1,1).p("AmkTCMANJgmD");
	this.shape_148.setTransform(315.6,315.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(25,1,1).p("AmnTKMANPgmT");
	this.shape_149.setTransform(315.8,314.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(25,1,1).p("AmqTTMANVgml");
	this.shape_150.setTransform(316.1,313.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").ss(25,1,1).p("AmsTbMANagm1");
	this.shape_151.setTransform(316.4,312.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(25,1,1).p("AmvTjMANfgnF");
	this.shape_152.setTransform(316.7,312);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#000000").ss(25,1,1).p("AmyTrMANlgnV");
	this.shape_153.setTransform(317,311.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(25,1,1).p("Am1TzMANrgnl");
	this.shape_154.setTransform(317.3,310.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#000000").ss(25,1,1).p("Am4T8MANxgn2");
	this.shape_155.setTransform(317.6,309.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(25,1,1).p("Am7UEMAN3goH");
	this.shape_156.setTransform(317.8,308.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#000000").ss(25,1,1).p("Am+UMMAN8goX");
	this.shape_157.setTransform(318.1,307.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(25,1,1).p("AnAUUMAOCgon");
	this.shape_158.setTransform(318.4,307);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#000000").ss(25,1,1).p("AnDUdMAOHgo4");
	this.shape_159.setTransform(318.7,306.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(25,1,1).p("AnGUlMAONgpJ");
	this.shape_160.setTransform(319,305.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#000000").ss(25,1,1).p("AnJUtMAOTgpZ");
	this.shape_161.setTransform(319.3,304.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(25,1,1).p("AnMU1MAOZgpp");
	this.shape_162.setTransform(319.5,303.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#000000").ss(25,1,1).p("AnPU9MAOfgp5");
	this.shape_163.setTransform(319.8,302.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(25,1,1).p("AnRVGMAOjgqL");
	this.shape_164.setTransform(320.1,302);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").ss(25,1,1).p("AnUVOMAOpgqb");
	this.shape_165.setTransform(320.4,301.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(25,1,1).p("AnXVWMAOvgqr");
	this.shape_166.setTransform(320.7,300.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").ss(25,1,1).p("AnaVeMAO1gq7");
	this.shape_167.setTransform(321,299.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(25,1,1).p("AndVmMAO7grL");
	this.shape_168.setTransform(321.3,298.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").ss(25,1,1).p("AngVuMAPBgrc");
	this.shape_169.setTransform(321.6,297.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(25,1,1).p("AnjV3MAPGgrt");
	this.shape_170.setTransform(321.9,297);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").ss(25,1,1).p("AnlV/MAPLgr9");
	this.shape_171.setTransform(322.1,296.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").ss(25,1,1).p("AnoWHMAPRgsN");
	this.shape_172.setTransform(322.4,295.4);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#000000").ss(25,1,1).p("AnrWQMAPXgse");
	this.shape_173.setTransform(322.7,294.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(25,1,1).p("AnuWYMAPdgsv");
	this.shape_174.setTransform(323,293.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#000000").ss(25,1,1).p("AnxWgMAPjgs/");
	this.shape_175.setTransform(323.3,292.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#000000").ss(25,1,1).p("An0WoMAPpgtP");
	this.shape_176.setTransform(323.6,292.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#000000").ss(25,1,1).p("An2WwMAPtgtf");
	this.shape_177.setTransform(323.8,291.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#000000").ss(25,1,1).p("An5W5MAPzgtx");
	this.shape_178.setTransform(324.1,290.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#000000").ss(25,1,1).p("An8XBMAP5guB");
	this.shape_179.setTransform(324.4,289.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").ss(25,1,1).p("An/XJMAP/guR");
	this.shape_180.setTransform(324.7,288.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#000000").ss(25,1,1).p("AoCXRMAQFguh");
	this.shape_181.setTransform(325,287.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#000000").ss(25,1,1).p("AoFXaMAQLguz");
	this.shape_182.setTransform(325.3,287.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#000000").ss(25,1,1).p("AoIXiMAQRgvD");
	this.shape_183.setTransform(325.6,286.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#000000").ss(25,1,1).p("AoKXqMAQVgvT");
	this.shape_184.setTransform(325.8,285.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#000000").ss(25,1,1).p("AoNXyMAQbgvj");
	this.shape_185.setTransform(326.1,284.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#000000").ss(25,1,1).p("AoQX6MAQhgvz");
	this.shape_186.setTransform(326.4,283.8);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#000000").ss(25,1,1).p("AoTYDMAQngwF");
	this.shape_187.setTransform(326.7,283);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#000000").ss(25,1,1).p("AoWYLMAQtgwV");
	this.shape_188.setTransform(327,282.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#000000").ss(25,1,1).p("AoYYTMAQxgwl");
	this.shape_189.setTransform(327.3,281.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#000000").ss(25,1,1).p("AobYbMAQ3gw1");
	this.shape_190.setTransform(327.6,280.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#000000").ss(25,1,1).p("AoeYjMAQ9gxF");
	this.shape_191.setTransform(327.9,279.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#000000").ss(25,1,1).p("AohYsMARDgxX");
	this.shape_192.setTransform(328.1,278.8);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#000000").ss(25,1,1).p("AokY0MARJgxn");
	this.shape_193.setTransform(328.4,278);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#000000").ss(25,1,1).p("AonY8MAROgx3");
	this.shape_194.setTransform(328.7,277.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#000000").ss(25,1,1).p("AopZEMARTgyH");
	this.shape_195.setTransform(329,276.3);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#000000").ss(25,1,1).p("AosZNMARZgyZ");
	this.shape_196.setTransform(329.3,275.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#000000").ss(25,1,1).p("AovZVMARfgyp");
	this.shape_197.setTransform(329.6,274.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#000000").ss(25,1,1).p("AoyZdMARlgy5");
	this.shape_198.setTransform(329.9,273.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#000000").ss(25,1,1).p("Ao1ZlMARrgzJ");
	this.shape_199.setTransform(330.1,273);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#000000").ss(25,1,1).p("Ao4ZtMARxgzZ");
	this.shape_200.setTransform(330.4,272.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#000000").ss(25,1,1).p("AI751MgR1Azr");
	this.shape_201.setTransform(330.7,271.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},219).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).wait(91));

	// 4
	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#000000").ss(25,1,1).p("AgNgbIAbA3");
	this.shape_202.setTransform(164.7,107.4);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#000000").ss(25,1,1).p("AgQgjIAhBH");
	this.shape_203.setTransform(165,108.2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#000000").ss(25,1,1).p("AgSgrIAlBX");
	this.shape_204.setTransform(165.3,109);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#000000").ss(25,1,1).p("AgVgzIArBn");
	this.shape_205.setTransform(165.6,109.8);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#000000").ss(25,1,1).p("AgYg7IAxB4");
	this.shape_206.setTransform(165.8,110.7);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#000000").ss(25,1,1).p("AgahEIA1CI");
	this.shape_207.setTransform(166.1,111.5);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#000000").ss(25,1,1).p("AgdhMIA7CZ");
	this.shape_208.setTransform(166.4,112.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#000000").ss(25,1,1).p("AgghUIBBCp");
	this.shape_209.setTransform(166.6,113.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#000000").ss(25,1,1).p("AgihcIBFC5");
	this.shape_210.setTransform(166.9,113.9);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#000000").ss(25,1,1).p("AglhlIBLDL");
	this.shape_211.setTransform(167.2,114.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#000000").ss(25,1,1).p("AgohtIBRDb");
	this.shape_212.setTransform(167.4,115.6);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#000000").ss(25,1,1).p("Agqh1IBVDr");
	this.shape_213.setTransform(167.7,116.4);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#000000").ss(25,1,1).p("Agth9IBbD7");
	this.shape_214.setTransform(168,117.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#000000").ss(25,1,1).p("AgwiGIBhEN");
	this.shape_215.setTransform(168.2,118.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#000000").ss(25,1,1).p("AgyiOIBlEd");
	this.shape_216.setTransform(168.5,118.9);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#000000").ss(25,1,1).p("Ag1iWIBrEt");
	this.shape_217.setTransform(168.8,119.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#000000").ss(25,1,1).p("Ag4ieIBxE9");
	this.shape_218.setTransform(169,120.5);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#000000").ss(25,1,1).p("Ag6imIB1FN");
	this.shape_219.setTransform(169.3,121.3);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#000000").ss(25,1,1).p("Ag9iuIB7Fd");
	this.shape_220.setTransform(169.6,122.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#000000").ss(25,1,1).p("AhAi3ICBFv");
	this.shape_221.setTransform(169.8,123);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#000000").ss(25,1,1).p("AhCi/ICFF/");
	this.shape_222.setTransform(170.1,123.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#000000").ss(25,1,1).p("AhFjHICLGP");
	this.shape_223.setTransform(170.4,124.6);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#000000").ss(25,1,1).p("AhIjQICRGh");
	this.shape_224.setTransform(170.6,125.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#000000").ss(25,1,1).p("AhKjYICVGx");
	this.shape_225.setTransform(170.9,126.3);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#000000").ss(25,1,1).p("AhNjgICbHB");
	this.shape_226.setTransform(171.2,127.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#000000").ss(25,1,1).p("AhQjoIChHR");
	this.shape_227.setTransform(171.4,127.9);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#000000").ss(25,1,1).p("AhSjwIClHh");
	this.shape_228.setTransform(171.7,128.7);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#000000").ss(25,1,1).p("AhVj5ICrHy");
	this.shape_229.setTransform(172,129.6);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#000000").ss(25,1,1).p("AhYkBICxID");
	this.shape_230.setTransform(172.2,130.4);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#000000").ss(25,1,1).p("AhakJIC1IT");
	this.shape_231.setTransform(172.5,131.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#000000").ss(25,1,1).p("AhdkRIC7Ij");
	this.shape_232.setTransform(172.8,132);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#000000").ss(25,1,1).p("AhgkaIDBI1");
	this.shape_233.setTransform(173,132.9);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#000000").ss(25,1,1).p("AhikiIDFJF");
	this.shape_234.setTransform(173.3,133.7);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#000000").ss(25,1,1).p("AhlkqIDLJV");
	this.shape_235.setTransform(173.6,134.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#000000").ss(25,1,1).p("AhokyIDRJl");
	this.shape_236.setTransform(173.8,135.3);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#000000").ss(25,1,1).p("Ahqk6IDVJ1");
	this.shape_237.setTransform(174.1,136.1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#000000").ss(25,1,1).p("AhtlCIDbKG");
	this.shape_238.setTransform(174.4,137);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#000000").ss(25,1,1).p("AhwlLIDhKX");
	this.shape_239.setTransform(174.6,137.8);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#000000").ss(25,1,1).p("AhylTIDlKn");
	this.shape_240.setTransform(174.9,138.6);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#000000").ss(25,1,1).p("Ah1lbIDrK3");
	this.shape_241.setTransform(175.2,139.4);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#000000").ss(25,1,1).p("Ah4lkIDxLJ");
	this.shape_242.setTransform(175.4,140.3);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#000000").ss(25,1,1).p("Ah6lsID1LZ");
	this.shape_243.setTransform(175.7,141.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#000000").ss(25,1,1).p("Ah9l0ID7Lp");
	this.shape_244.setTransform(176,141.9);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#000000").ss(25,1,1).p("AiAl8IEBL5");
	this.shape_245.setTransform(176.2,142.7);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#000000").ss(25,1,1).p("AiCmEIEFMJ");
	this.shape_246.setTransform(176.5,143.5);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#000000").ss(25,1,1).p("AiFmNIELMb");
	this.shape_247.setTransform(176.8,144.4);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#000000").ss(25,1,1).p("AiImVIERMr");
	this.shape_248.setTransform(177,145.2);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#000000").ss(25,1,1).p("AiKmdIEVM7");
	this.shape_249.setTransform(177.3,146);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#000000").ss(25,1,1).p("AiNmlIEbNL");
	this.shape_250.setTransform(177.6,146.8);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#000000").ss(25,1,1).p("AiQmtIEhNc");
	this.shape_251.setTransform(177.8,147.7);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#000000").ss(25,1,1).p("AiTm2IEnNt");
	this.shape_252.setTransform(178.1,148.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#000000").ss(25,1,1).p("AiVm+IErN9");
	this.shape_253.setTransform(178.4,149.3);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#000000").ss(25,1,1).p("AiYnGIExON");
	this.shape_254.setTransform(178.6,150.1);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#000000").ss(25,1,1).p("AianOIE2Od");
	this.shape_255.setTransform(178.9,150.9);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#000000").ss(25,1,1).p("AidnXIE7Ov");
	this.shape_256.setTransform(179.2,151.8);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#000000").ss(25,1,1).p("AignfIFBO/");
	this.shape_257.setTransform(179.4,152.6);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#000000").ss(25,1,1).p("AiinnIFGPP");
	this.shape_258.setTransform(179.7,153.4);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#000000").ss(25,1,1).p("AilnvIFLPf");
	this.shape_259.setTransform(180,154.2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#000000").ss(25,1,1).p("Aion4IFRPw");
	this.shape_260.setTransform(180.2,155.1);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#000000").ss(25,1,1).p("AiroAIFXQB");
	this.shape_261.setTransform(180.5,155.9);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#000000").ss(25,1,1).p("AitoIIFbQR");
	this.shape_262.setTransform(180.8,156.7);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#000000").ss(25,1,1).p("AiwoQIFhQh");
	this.shape_263.setTransform(181,157.5);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#000000").ss(25,1,1).p("AizoYIFmQx");
	this.shape_264.setTransform(181.3,158.3);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#000000").ss(25,1,1).p("Ai1ogIFrRC");
	this.shape_265.setTransform(181.6,159.2);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#000000").ss(25,1,1).p("Ai4opIFxRT");
	this.shape_266.setTransform(181.8,160);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#000000").ss(25,1,1).p("Ai7oxIF3Rj");
	this.shape_267.setTransform(182.1,160.8);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#000000").ss(25,1,1).p("Ai9o5IF7Rz");
	this.shape_268.setTransform(182.4,161.6);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#000000").ss(25,1,1).p("AjApCIGBSF");
	this.shape_269.setTransform(182.6,162.5);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#000000").ss(25,1,1).p("AjCpKIGGSV");
	this.shape_270.setTransform(182.9,163.3);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#000000").ss(25,1,1).p("AjFpSIGLSl");
	this.shape_271.setTransform(183.2,164.1);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#000000").ss(25,1,1).p("AjIpaIGRS1");
	this.shape_272.setTransform(183.4,164.9);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#000000").ss(25,1,1).p("AjKpiIGWTF");
	this.shape_273.setTransform(183.7,165.7);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#000000").ss(25,1,1).p("AjNprIGbTW");
	this.shape_274.setTransform(184,166.6);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#000000").ss(25,1,1).p("AjQpzIGhTn");
	this.shape_275.setTransform(184.2,167.4);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#000000").ss(25,1,1).p("AjTp7IGnT3");
	this.shape_276.setTransform(184.5,168.2);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#000000").ss(25,1,1).p("AjVqDIGrUH");
	this.shape_277.setTransform(184.8,169);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#000000").ss(25,1,1).p("AjYqMIGxUZ");
	this.shape_278.setTransform(185,169.9);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#000000").ss(25,1,1).p("AjbqTIG2Uo");
	this.shape_279.setTransform(185.3,170.7);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#000000").ss(25,1,1).p("AjdqcIG7U5");
	this.shape_280.setTransform(185.6,171.5);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#000000").ss(25,1,1).p("AjgqkIHBVJ");
	this.shape_281.setTransform(185.8,172.3);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#000000").ss(25,1,1).p("AjjqsIHHVZ");
	this.shape_282.setTransform(186.1,173.1);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#000000").ss(25,1,1).p("Ajlq1IHLVr");
	this.shape_283.setTransform(186.4,174);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#000000").ss(25,1,1).p("Ajoq9IHRV7");
	this.shape_284.setTransform(186.6,174.8);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#000000").ss(25,1,1).p("AjqrFIHWWL");
	this.shape_285.setTransform(186.9,175.6);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#000000").ss(25,1,1).p("AjtrNIHbWb");
	this.shape_286.setTransform(187.2,176.4);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#000000").ss(25,1,1).p("AjwrWIHhWt");
	this.shape_287.setTransform(187.4,177.3);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#000000").ss(25,1,1).p("AjyreIHmW8");
	this.shape_288.setTransform(187.7,178.1);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#000000").ss(25,1,1).p("Aj1rmIHrXN");
	this.shape_289.setTransform(188,178.9);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#000000").ss(25,1,1).p("Aj4ruIHxXd");
	this.shape_290.setTransform(188.2,179.7);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#000000").ss(25,1,1).p("Aj7r2IH3Xt");
	this.shape_291.setTransform(188.5,180.5);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#000000").ss(25,1,1).p("Aj9r/IH7X/");
	this.shape_292.setTransform(188.8,181.4);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#000000").ss(25,1,1).p("AkAsHIIBYP");
	this.shape_293.setTransform(189,182.2);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#000000").ss(25,1,1).p("AkDsPIIGYf");
	this.shape_294.setTransform(189.3,183);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#000000").ss(25,1,1).p("AkFsXIILYv");
	this.shape_295.setTransform(189.6,183.8);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#000000").ss(25,1,1).p("AkIsfIIRZA");
	this.shape_296.setTransform(189.8,184.7);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#000000").ss(25,1,1).p("AkLsoIIXZR");
	this.shape_297.setTransform(190.1,185.5);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#000000").ss(25,1,1).p("AkNswIIbZh");
	this.shape_298.setTransform(190.4,186.3);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#000000").ss(25,1,1).p("AkQs4IIhZx");
	this.shape_299.setTransform(190.6,187.1);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#000000").ss(25,1,1).p("AkStAIImaB");
	this.shape_300.setTransform(190.9,187.9);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#000000").ss(25,1,1).p("AkVtJIIraS");
	this.shape_301.setTransform(191.2,188.8);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#000000").ss(25,1,1).p("AkYtRIIxaj");
	this.shape_302.setTransform(191.4,189.6);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#000000").ss(25,1,1).p("AkatZII2az");
	this.shape_303.setTransform(191.7,190.4);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#000000").ss(25,1,1).p("AkdthII7bD");
	this.shape_304.setTransform(192,191.2);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#000000").ss(25,1,1).p("AkgtqIJBbU");
	this.shape_305.setTransform(192.2,192.1);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#000000").ss(25,1,1).p("AkjtyIJHbl");
	this.shape_306.setTransform(192.5,192.9);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#000000").ss(25,1,1).p("Aklt6IJLb1");
	this.shape_307.setTransform(192.8,193.7);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#000000").ss(25,1,1).p("AkouCIJRcF");
	this.shape_308.setTransform(193,194.5);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#000000").ss(25,1,1).p("AkruKIJWcV");
	this.shape_309.setTransform(193.3,195.3);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#000000").ss(25,1,1).p("AktuSIJbcm");
	this.shape_310.setTransform(193.6,196.2);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f().s("#000000").ss(25,1,1).p("AkwubIJhc3");
	this.shape_311.setTransform(193.8,197);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("#000000").ss(25,1,1).p("AkzujIJndH");
	this.shape_312.setTransform(194.1,197.8);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("#000000").ss(25,1,1).p("Ak1urIJrdX");
	this.shape_313.setTransform(194.4,198.6);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("#000000").ss(25,1,1).p("Ak4u0IJxdp");
	this.shape_314.setTransform(194.6,199.5);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f().s("#000000").ss(25,1,1).p("Ak6u8IJ2d5");
	this.shape_315.setTransform(194.9,200.3);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#000000").ss(25,1,1).p("Ak9vEIJ7eJ");
	this.shape_316.setTransform(195.2,201.1);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("#000000").ss(25,1,1).p("AlAvMIKBeZ");
	this.shape_317.setTransform(195.4,201.9);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#000000").ss(25,1,1).p("AlCvUIKGep");
	this.shape_318.setTransform(195.7,202.7);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f().s("#000000").ss(25,1,1).p("AlFvdIKLe6");
	this.shape_319.setTransform(196,203.6);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("#000000").ss(25,1,1).p("AlIvlIKRfL");
	this.shape_320.setTransform(196.2,204.4);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("#000000").ss(25,1,1).p("AlLvtIKXfb");
	this.shape_321.setTransform(196.5,205.2);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("#000000").ss(25,1,1).p("AlNv1IKbfr");
	this.shape_322.setTransform(196.8,206);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f().s("#000000").ss(25,1,1).p("AlQv+IKhf9");
	this.shape_323.setTransform(197,206.9);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("#000000").ss(25,1,1).p("AlTwGMAKmAgN");
	this.shape_324.setTransform(197.3,207.7);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f().s("#000000").ss(25,1,1).p("AlVwOMAKrAgd");
	this.shape_325.setTransform(197.6,208.5);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#000000").ss(25,1,1).p("AlYwWMAKxAgt");
	this.shape_326.setTransform(197.8,209.3);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f().s("#000000").ss(25,1,1).p("AlbweMAK3Ag9");
	this.shape_327.setTransform(198.1,210.1);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#000000").ss(25,1,1).p("AldwnMAK7AhP");
	this.shape_328.setTransform(198.4,211);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f().s("#000000").ss(25,1,1).p("AlgwvMALBAhf");
	this.shape_329.setTransform(198.6,211.8);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#000000").ss(25,1,1).p("Aliw3MALGAhv");
	this.shape_330.setTransform(198.9,212.6);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("#000000").ss(25,1,1).p("Allw/MALLAh/");
	this.shape_331.setTransform(199.2,213.4);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#000000").ss(25,1,1).p("AloxIMALRAiQ");
	this.shape_332.setTransform(199.4,214.3);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("#000000").ss(25,1,1).p("AlqxQMALWAih");
	this.shape_333.setTransform(199.7,215.1);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("#000000").ss(25,1,1).p("AltxYMALbAix");
	this.shape_334.setTransform(200,215.9);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("#000000").ss(25,1,1).p("AlwxgMALhAjB");
	this.shape_335.setTransform(200.2,216.7);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("#000000").ss(25,1,1).p("AlzxoMALnAjR");
	this.shape_336.setTransform(200.5,217.5);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("#000000").ss(25,1,1).p("Al1xxMALrAjj");
	this.shape_337.setTransform(200.8,218.4);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#000000").ss(25,1,1).p("Al4x5MALxAjz");
	this.shape_338.setTransform(201,219.2);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f().s("#000000").ss(25,1,1).p("Al7yBMAL2AkD");
	this.shape_339.setTransform(201.3,220);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#000000").ss(25,1,1).p("Al9yJMAL7AkT");
	this.shape_340.setTransform(201.6,220.8);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("#000000").ss(25,1,1).p("AmAyRMAMBAkk");
	this.shape_341.setTransform(201.8,221.7);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#000000").ss(25,1,1).p("AmDyaMAMHAk1");
	this.shape_342.setTransform(202.1,222.5);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f().s("#000000").ss(25,1,1).p("AmFyiMAMLAlF");
	this.shape_343.setTransform(202.4,223.3);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#000000").ss(25,1,1).p("AmIyqMAMRAlV");
	this.shape_344.setTransform(202.6,224.1);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f().s("#000000").ss(25,1,1).p("AmKyyMAMWAll");
	this.shape_345.setTransform(202.9,224.9);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#000000").ss(25,1,1).p("AmNy7MAMbAl2");
	this.shape_346.setTransform(203.2,225.8);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f().s("#000000").ss(25,1,1).p("AmQzDMAMhAmH");
	this.shape_347.setTransform(203.4,226.6);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#000000").ss(25,1,1).p("AmSzLMAMmAmX");
	this.shape_348.setTransform(203.7,227.4);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f().s("#000000").ss(25,1,1).p("AmVzTMAMrAmn");
	this.shape_349.setTransform(204,228.2);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#000000").ss(25,1,1).p("AmYzcMAMxAm5");
	this.shape_350.setTransform(204.2,229.1);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f().s("#000000").ss(25,1,1).p("AmbzkMAM3AnJ");
	this.shape_351.setTransform(204.5,229.9);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#000000").ss(25,1,1).p("AmdzsMAM7AnZ");
	this.shape_352.setTransform(204.8,230.7);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f().s("#000000").ss(25,1,1).p("Amgz0MANBAnp");
	this.shape_353.setTransform(205,231.5);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("#000000").ss(25,1,1).p("Amjz8MANGAn5");
	this.shape_354.setTransform(205.3,232.3);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f().s("#000000").ss(25,1,1).p("Aml0EMANLAoK");
	this.shape_355.setTransform(205.6,233.2);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("#000000").ss(25,1,1).p("Amo0NMANRAob");
	this.shape_356.setTransform(205.8,234);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f().s("#000000").ss(25,1,1).p("Amr0VMANWAor");
	this.shape_357.setTransform(206.1,234.8);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("#000000").ss(25,1,1).p("Amt0dMANbAo7");
	this.shape_358.setTransform(206.4,235.6);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f().s("#000000").ss(25,1,1).p("Amw0mMANhApN");
	this.shape_359.setTransform(206.6,236.5);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#000000").ss(25,1,1).p("Amy0uMANmApd");
	this.shape_360.setTransform(206.9,237.3);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f().s("#000000").ss(25,1,1).p("Am102MANrApt");
	this.shape_361.setTransform(207.2,238.1);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("#000000").ss(25,1,1).p("Am40+MANxAp9");
	this.shape_362.setTransform(207.4,238.9);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f().s("#000000").ss(25,1,1).p("Am61GMAN2AqN");
	this.shape_363.setTransform(207.7,239.7);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("#000000").ss(25,1,1).p("Am91PMAN7Aqf");
	this.shape_364.setTransform(208,240.6);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f().s("#000000").ss(25,1,1).p("AnA1XMAOBAqv");
	this.shape_365.setTransform(208.2,241.4);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("#000000").ss(25,1,1).p("AnD1fMAOHAq/");
	this.shape_366.setTransform(208.5,242.2);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f().s("#000000").ss(25,1,1).p("AnF1nMAOLArP");
	this.shape_367.setTransform(208.8,243);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("#000000").ss(25,1,1).p("AnI1wMAORArh");
	this.shape_368.setTransform(209,243.9);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f().s("#000000").ss(25,1,1).p("AnL14MAOWArx");
	this.shape_369.setTransform(209.3,244.7);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("#000000").ss(25,1,1).p("AnN2AMAObAsB");
	this.shape_370.setTransform(209.6,245.5);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f().s("#000000").ss(25,1,1).p("AnQ2IMAOhAsR");
	this.shape_371.setTransform(209.8,246.3);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f().s("#000000").ss(25,1,1).p("AnT2QMAOnAsh");
	this.shape_372.setTransform(210.1,247.1);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f().s("#000000").ss(25,1,1).p("AnV2ZMAOrAsz");
	this.shape_373.setTransform(210.4,248);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("#000000").ss(25,1,1).p("AnY2hMAOxAtD");
	this.shape_374.setTransform(210.6,248.8);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f().s("#000000").ss(25,1,1).p("Ana2pMAO2AtT");
	this.shape_375.setTransform(210.9,249.6);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("#000000").ss(25,1,1).p("And2xMAO7Atj");
	this.shape_376.setTransform(211.2,250.4);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f().s("#000000").ss(25,1,1).p("Ang26MAPBAt0");
	this.shape_377.setTransform(211.4,251.3);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("#000000").ss(25,1,1).p("Ani3CMAPGAuF");
	this.shape_378.setTransform(211.7,252.1);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f().s("#000000").ss(25,1,1).p("Anl3KMAPLAuV");
	this.shape_379.setTransform(212,252.9);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("#000000").ss(25,1,1).p("Ano3SMAPRAul");
	this.shape_380.setTransform(212.2,253.7);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f().s("#000000").ss(25,1,1).p("Anr3aMAPWAu1");
	this.shape_381.setTransform(212.5,254.5);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("#000000").ss(25,1,1).p("Ant3jMAPbAvH");
	this.shape_382.setTransform(212.8,255.4);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f().s("#000000").ss(25,1,1).p("Anw3rMAPhAvX");
	this.shape_383.setTransform(213,256.2);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("#000000").ss(25,1,1).p("Anz3zMAPmAvn");
	this.shape_384.setTransform(213.3,257);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f().s("#000000").ss(25,1,1).p("An137MAPrAv3");
	this.shape_385.setTransform(213.6,257.8);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("#000000").ss(25,1,1).p("An44DMAPxAwI");
	this.shape_386.setTransform(213.8,258.7);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f().s("#000000").ss(25,1,1).p("An74MMAP3AwZ");
	this.shape_387.setTransform(214.1,259.5);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("#000000").ss(25,1,1).p("An94UMAP7Awp");
	this.shape_388.setTransform(214.4,260.3);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f().s("#000000").ss(25,1,1).p("AoA4cMAQBAw5");
	this.shape_389.setTransform(214.6,261.1);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("#000000").ss(25,1,1).p("AoC4kMAQGAxJ");
	this.shape_390.setTransform(214.9,261.9);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f().s("#000000").ss(25,1,1).p("AoF4tMAQLAxa");
	this.shape_391.setTransform(215.2,262.8);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f().s("#000000").ss(25,1,1).p("AoI41MAQRAxr");
	this.shape_392.setTransform(215.4,263.6);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f().s("#000000").ss(25,1,1).p("AoL49MAQXAx7");
	this.shape_393.setTransform(215.7,264.4);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f().s("#000000").ss(25,1,1).p("AoN5FMAQbAyL");
	this.shape_394.setTransform(216,265.2);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f().s("#000000").ss(25,1,1).p("AoQ5OMAQhAyd");
	this.shape_395.setTransform(216.2,266.1);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("#000000").ss(25,1,1).p("AoT5WMAQmAyt");
	this.shape_396.setTransform(216.5,266.9);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f().s("#000000").ss(25,1,1).p("AoV5eMAQrAy9");
	this.shape_397.setTransform(216.8,267.7);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("#000000").ss(25,1,1).p("AoY5mMAQxAzN");
	this.shape_398.setTransform(217,268.5);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f().s("#000000").ss(25,1,1).p("Aob5uMAQ2Azd");
	this.shape_399.setTransform(217.3,269.3);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f().s("#000000").ss(25,1,1).p("Aod52MAQ7Azu");
	this.shape_400.setTransform(217.6,270.2);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f().s("#000000").ss(25,1,1).p("Aog5/MARBAz/");
	this.shape_401.setTransform(217.8,271);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f().s("#000000").ss(25,1,1).p("Aoj6HMARHA0P");
	this.shape_402.setTransform(218.1,271.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_202}]},9).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).wait(301));

	// Base
	this.instance_3 = new lib.basev("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(275.6,273.9);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(510));

	// Background
	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_403.setTransform(275,275,3.373,2.543);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_404.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_404},{t:this.shape_403}]}).wait(510));

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