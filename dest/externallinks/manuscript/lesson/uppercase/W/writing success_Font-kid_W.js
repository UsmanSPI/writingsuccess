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


(lib.basew = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AO5bNMgO+grVMgO4ArdQgMAyg7AvQg7Awg8AAQhnAAgXiVMgSJg1VIgJg3QAAhHA9gwQA9gzBJAAQB+AAAsB8MAO/AtMMAPBgrpIAjiLQAbhUA7AAQB0ACBKDWMAO+ArqMAPUgtCQAsiAB+AAQC3ADAACjIgKA9MgSGA1TQgbCVidAAQh4AAgTiZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-244.4,-189.4,488.8,378.8);


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
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AghAAIBDAA");
	this.shape_1.setTransform(7.4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AgpAAIBTAA");
	this.shape_2.setTransform(8.2,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AgxAAIBjAA");
	this.shape_3.setTransform(9,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("Ag6AAIB1AA");
	this.shape_4.setTransform(9.8,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AhCAAICFAA");
	this.shape_5.setTransform(10.6,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AhKAAICVAA");
	this.shape_6.setTransform(11.4,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AhTAAICnAA");
	this.shape_7.setTransform(12.2,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AhbAAIC2AA");
	this.shape_8.setTransform(13,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AhjAAIDHAA");
	this.shape_9.setTransform(13.8,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AhrAAIDXAA");
	this.shape_10.setTransform(14.6,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AhzAAIDnAA");
	this.shape_11.setTransform(15.4,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("Ah7AAID3AA");
	this.shape_12.setTransform(16.1,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AiDAAIEHAA");
	this.shape_13.setTransform(16.9,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AiLAAIEXAA");
	this.shape_14.setTransform(17.7,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AiTAAIEnAA");
	this.shape_15.setTransform(18.4,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AibAAIE3AA");
	this.shape_16.setTransform(19.2,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AiiAAIFGAA");
	this.shape_17.setTransform(19.9,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AiqAAIFVAA");
	this.shape_18.setTransform(20.7,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AiyAAIFlAA");
	this.shape_19.setTransform(21.4,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("Ai6AAIF1AA");
	this.shape_20.setTransform(22.2,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AjCAAIGFAA");
	this.shape_21.setTransform(22.9,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AjJAAIGTAA");
	this.shape_22.setTransform(23.6,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AjRAAIGjAA");
	this.shape_23.setTransform(24.4,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AjZAAIGzAA");
	this.shape_24.setTransform(25.1,0);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AjgAAIHBAA");
	this.shape_25.setTransform(25.8,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AjnAAIHQAA");
	this.shape_26.setTransform(26.6,0);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AjvAAIHfAA");
	this.shape_27.setTransform(27.3,0);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("Aj2AAIHtAA");
	this.shape_28.setTransform(28,0);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("Aj+AAIH9AA");
	this.shape_29.setTransform(28.7,0);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AkFAAIILAA");
	this.shape_30.setTransform(29.4,0);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AkNAAIIbAA");
	this.shape_31.setTransform(30.1,0);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AkUAAIIpAA");
	this.shape_32.setTransform(30.8,0);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AkbAAII3AA");
	this.shape_33.setTransform(31.5,0);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AkiAAIJFAA");
	this.shape_34.setTransform(32.2,0);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AkpAAIJTAA");
	this.shape_35.setTransform(32.9,0);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AkxAAIJjAA");
	this.shape_36.setTransform(33.6,0);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("Ak4AAIJxAA");
	this.shape_37.setTransform(34.2,0);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("Ak/AAIJ+AA");
	this.shape_38.setTransform(34.9,0);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AlGAAIKNAA");
	this.shape_39.setTransform(35.6,0);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AlNAAIKaAA");
	this.shape_40.setTransform(36.3,0);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AlUAAIKpAA");
	this.shape_41.setTransform(36.9,0);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AlaAAIK2AA");
	this.shape_42.setTransform(37.6,0);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AliAAILFAA");
	this.shape_43.setTransform(38.3,0);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AloAAILRAA");
	this.shape_44.setTransform(38.9,0);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AlvAAILfAA");
	this.shape_45.setTransform(39.6,0);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("Al2AAILtAA");
	this.shape_46.setTransform(40.2,0);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("Al9AAIL7AA");
	this.shape_47.setTransform(40.9,0);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AmDAAIMHAA");
	this.shape_48.setTransform(41.5,0);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AmKAAIMVAA");
	this.shape_49.setTransform(42.1,0);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AmRAAIMjAA");
	this.shape_50.setTransform(42.8,0);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AmXAAIMvAA");
	this.shape_51.setTransform(43.4,0);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AmeAAIM9AA");
	this.shape_52.setTransform(44,0);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AmkAAINJAA");
	this.shape_53.setTransform(44.6,0);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AmrAAINXAA");
	this.shape_54.setTransform(45.3,0);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AmxAAINjAA");
	this.shape_55.setTransform(45.9,0);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("Am3AAINvAA");
	this.shape_56.setTransform(46.5,0);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("Am+AAIN9AA");
	this.shape_57.setTransform(47.1,0);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AnEAAIOJAA");
	this.shape_58.setTransform(47.7,0);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AnKAAIOVAA");
	this.shape_59.setTransform(48.3,0);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(5,1,1).p("AnQAAIOhAA");
	this.shape_60.setTransform(48.9,0);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(5,1,1).p("AnWAAIOtAA");
	this.shape_61.setTransform(49.5,0);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(5,1,1).p("AncAAIO6AA");
	this.shape_62.setTransform(50.1,0);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(5,1,1).p("AnjAAIPHAA");
	this.shape_63.setTransform(50.7,0);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(5,1,1).p("AnpAAIPTAA");
	this.shape_64.setTransform(51.3,0);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(5,1,1).p("AnvAAIPfAA");
	this.shape_65.setTransform(51.8,0);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(5,1,1).p("An1AAIPrAA");
	this.shape_66.setTransform(52.4,0);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(5,1,1).p("An7AAIP3AA");
	this.shape_67.setTransform(53,0);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(5,1,1).p("AoBAAIQDAA");
	this.shape_68.setTransform(53.6,0);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(5,1,1).p("AoHAAIQPAA");
	this.shape_69.setTransform(54.1,0);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(5,1,1).p("AoMAAIQZAA");
	this.shape_70.setTransform(54.7,0);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(5,1,1).p("AoSAAIQlAA");
	this.shape_71.setTransform(55.2,0);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(5,1,1).p("AoYAAIQxAA");
	this.shape_72.setTransform(55.8,0);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(5,1,1).p("AoeAAIQ9AA");
	this.shape_73.setTransform(56.3,0);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(5,1,1).p("AojAAIRHAA");
	this.shape_74.setTransform(56.9,0);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(5,1,1).p("AopAAIRTAA");
	this.shape_75.setTransform(57.4,0);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(5,1,1).p("AovAAIRfAA");
	this.shape_76.setTransform(58,0);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(5,1,1).p("Ao0AAIRpAA");
	this.shape_77.setTransform(58.5,0);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(5,1,1).p("Ao6AAIR1AA");
	this.shape_78.setTransform(59,0);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(5,1,1).p("Ao/AAIR/AA");
	this.shape_79.setTransform(59.6,0);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(5,1,1).p("ApFAAISLAA");
	this.shape_80.setTransform(60.1,0);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(5,1,1).p("ApKAAISVAA");
	this.shape_81.setTransform(60.6,0);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(5,1,1).p("ApPAAISfAA");
	this.shape_82.setTransform(61.1,0);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(5,1,1).p("ApVAAISrAA");
	this.shape_83.setTransform(61.6,0);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(5,1,1).p("ApaAAIS1AA");
	this.shape_84.setTransform(62.2,0);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(5,1,1).p("ApgAAITBAA");
	this.shape_85.setTransform(62.7,0);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(5,1,1).p("AplAAITLAA");
	this.shape_86.setTransform(63.2,0);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(5,1,1).p("ApqAAITVAA");
	this.shape_87.setTransform(63.6,0);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(5,1,1).p("ApvAAITfAA");
	this.shape_88.setTransform(64.2,0);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(5,1,1).p("Ap0AAITpAA");
	this.shape_89.setTransform(64.7,0);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(5,1,1).p("Ap5AAITzAA");
	this.shape_90.setTransform(65.1,0);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(5,1,1).p("Ap+AAIT9AA");
	this.shape_91.setTransform(65.6,0);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(5,1,1).p("AqDAAIUHAA");
	this.shape_92.setTransform(66.1,0);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(5,1,1).p("AqIAAIURAA");
	this.shape_93.setTransform(66.6,0);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(5,1,1).p("AqNAAIUbAA");
	this.shape_94.setTransform(67.1,0);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(5,1,1).p("AqSAAIUlAA");
	this.shape_95.setTransform(67.5,0);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(5,1,1).p("AqXAAIUvAA");
	this.shape_96.setTransform(68,0);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(5,1,1).p("AqcAAIU5AA");
	this.shape_97.setTransform(68.5,0);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(5,1,1).p("AqhAAIVDAA");
	this.shape_98.setTransform(68.9,0);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(5,1,1).p("AqlAAIVLAA");
	this.shape_99.setTransform(69.4,0);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(5,1,1).p("AqqAAIVVAA");
	this.shape_100.setTransform(69.8,0);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(5,1,1).p("AqvAAIVfAA");
	this.shape_101.setTransform(70.3,0);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(5,1,1).p("AqzAAIVnAA");
	this.shape_102.setTransform(70.7,0);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(5,1,1).p("Aq4AAIVxAA");
	this.shape_103.setTransform(71.1,0);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(5,1,1).p("Aq8AAIV5AA");
	this.shape_104.setTransform(71.6,0);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(5,1,1).p("ArBAAIWDAA");
	this.shape_105.setTransform(72,0);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(5,1,1).p("ArFAAIWLAA");
	this.shape_106.setTransform(72.4,0);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(5,1,1).p("ArKAAIWVAA");
	this.shape_107.setTransform(72.9,0);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(5,1,1).p("ArOAAIWdAA");
	this.shape_108.setTransform(73.3,0);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(5,1,1).p("ArTAAIWnAA");
	this.shape_109.setTransform(73.7,0);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(5,1,1).p("ArXAAIWvAA");
	this.shape_110.setTransform(74.1,0);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(5,1,1).p("ArbAAIW3AA");
	this.shape_111.setTransform(74.6,0);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(5,1,1).p("ArfAAIW/AA");
	this.shape_112.setTransform(74.9,0);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(5,1,1).p("ArkAAIXJAA");
	this.shape_113.setTransform(75.4,0);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(5,1,1).p("AroAAIXQAA");
	this.shape_114.setTransform(75.8,0);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(5,1,1).p("ArsAAIXZAA");
	this.shape_115.setTransform(76.1,0);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(5,1,1).p("ArwAAIXhAA");
	this.shape_116.setTransform(76.6,0);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(5,1,1).p("Ar0AAIXpAA");
	this.shape_117.setTransform(76.9,0);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(5,1,1).p("Ar4AAIXxAA");
	this.shape_118.setTransform(77.3,0);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(5,1,1).p("Ar8AAIX5AA");
	this.shape_119.setTransform(77.7,0);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(5,1,1).p("AsAAAIYBAA");
	this.shape_120.setTransform(78.1,0);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(5,1,1).p("AsEAAIYJAA");
	this.shape_121.setTransform(78.5,0);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(5,1,1).p("AsIAAIYRAA");
	this.shape_122.setTransform(78.8,0);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(5,1,1).p("AsMAAIYZAA");
	this.shape_123.setTransform(79.2,0);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(5,1,1).p("AsQAAIYhAA");
	this.shape_124.setTransform(79.6,0);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(5,1,1).p("AsTAAIYnAA");
	this.shape_125.setTransform(79.9,0);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(5,1,1).p("AsXAAIYvAA");
	this.shape_126.setTransform(80.3,0);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(5,1,1).p("AsaAAIY1AA");
	this.shape_127.setTransform(80.6,0);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(5,1,1).p("AseAAIY9AA");
	this.shape_128.setTransform(81,0);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(5,1,1).p("AsiAAIZFAA");
	this.shape_129.setTransform(81.3,0);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(5,1,1).p("AslAAIZLAA");
	this.shape_130.setTransform(81.7,0);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(5,1,1).p("AspAAIZTAA");
	this.shape_131.setTransform(82,0);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(5,1,1).p("AssAAIZZAA");
	this.shape_132.setTransform(82.3,0);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(5,1,1).p("AswAAIZhAA");
	this.shape_133.setTransform(82.7,0);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(5,1,1).p("AszAAIZnAA");
	this.shape_134.setTransform(83,0);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(5,1,1).p("As3AAIZvAA");
	this.shape_135.setTransform(83.3,0);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(5,1,1).p("As6AAIZ1AA");
	this.shape_136.setTransform(83.6,0);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(5,1,1).p("As9AAIZ7AA");
	this.shape_137.setTransform(84,0);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(5,1,1).p("AtAAAIaBAA");
	this.shape_138.setTransform(84.3,0);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(5,1,1).p("AtEAAIaJAA");
	this.shape_139.setTransform(84.6,0);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(5,1,1).p("AtHAAIaPAA");
	this.shape_140.setTransform(84.9,0);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(5,1,1).p("AtKAAIaVAA");
	this.shape_141.setTransform(85.2,0);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(5,1,1).p("AtNAAIabAA");
	this.shape_142.setTransform(85.5,0);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(5,1,1).p("AtQAAIahAA");
	this.shape_143.setTransform(85.8,0);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(5,1,1).p("AtTAAIanAA");
	this.shape_144.setTransform(86.1,0);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(5,1,1).p("AtWAAIatAA");
	this.shape_145.setTransform(86.4,0);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(5,1,1).p("AtZAAIazAA");
	this.shape_146.setTransform(86.7,0);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(5,1,1).p("AtcAAIa5AA");
	this.shape_147.setTransform(86.9,0);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(5,1,1).p("AtfAAIa/AA");
	this.shape_148.setTransform(87.2,0);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(5,1,1).p("ANjAAI7FAA");
	this.shape_149.setTransform(87.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).wait(1));

	// Layer 1
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(9.1,0,0.81,0.81,-90,0,0,0.4,-6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:180.7,y:0.1},149,cjs.Ease.get(0.5)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.2,-9.8,17.7,19.7);


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
(lib.writingsuccess_Fontkid_W = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_704 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(704).call(this.frame_704).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(50.3,106.1,0.999,0.999,-6.5,0,0,22.4,-143.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:162.3,y:448.1},140).to({regX:22.5,rotation:23.5,x:161.8,y:447},11).to({x:274.4,y:112.6},149).wait(10).to({rotation:0,skewX:-23.5,skewY:156.5,x:273.6,y:113.6},0).to({x:385.3,y:448},150).wait(10).to({regX:22.4,regY:-144,skewX:28.2,skewY:208.2,x:387.9,y:447},0).to({skewX:28.2,x:501.4,y:103},150).wait(11).to({startPosition:0},0).to({guide:{path:[501.2,103.2,467.7,255.5,548,209,628.4,162.5,738.9,94]}},64).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(162.1,446.8,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},140).wait(11).to({_off:false,x:272.6,y:104.8},0).to({_off:true},149).wait(10).to({_off:false,x:385.6,y:446.8},0).to({_off:true},150).wait(10).to({_off:false,x:498.5,y:110.1},0).to({_off:true},150).wait(76));

	// ar4
	this.instance_1 = new lib.ar2("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(395,268.3,1,1,-69.3,0,0,0.9,-0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(479).to({_off:false},0).wait(226));

	// ar3
	this.instance_2 = new lib.ar2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(303.9,92.5,1,1,69.7,0,0,0.8,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(319).to({_off:false},0).wait(386));

	// ar1
	this.instance_3 = new lib.ar2("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(182.7,275.3,1,1,-69.3,0,0,0.9,-0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(160).to({_off:false},0).wait(545));

	// ar1
	this.instance_4 = new lib.ar2("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(80.9,98.5,1,1,69.7,0,0,0.8,0.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(696));

	// 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AAJgaIgRA1");
	this.shape_1.setTransform(387.3,443.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("AgMAmIAZhM");
	this.shape_2.setTransform(387.7,442.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("AgQAxIAhhh");
	this.shape_3.setTransform(388,441.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("AgUA9IAph5");
	this.shape_4.setTransform(388.4,439.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(25,1,1).p("AgXBIIAviP");
	this.shape_5.setTransform(388.8,438.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(25,1,1).p("AgbBUIA3im");
	this.shape_6.setTransform(389.2,437.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(25,1,1).p("AgfBeIA/i7");
	this.shape_7.setTransform(389.6,436.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(25,1,1).p("AgjBqIBHjT");
	this.shape_8.setTransform(390,435.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(25,1,1).p("AgnB1IBPjp");
	this.shape_9.setTransform(390.3,434.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(25,1,1).p("AgrCAIBWkA");
	this.shape_10.setTransform(390.7,433.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(25,1,1).p("AgvCLIBfkV");
	this.shape_11.setTransform(391.1,432);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(25,1,1).p("AgzCXIBmkt");
	this.shape_12.setTransform(391.5,430.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(25,1,1).p("Ag2CiIBtlD");
	this.shape_13.setTransform(391.8,429.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(25,1,1).p("Ag6CtIB1lZ");
	this.shape_14.setTransform(392.2,428.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(25,1,1).p("Ag+C5IB9lw");
	this.shape_15.setTransform(392.6,427.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(25,1,1).p("AhCDEICFmH");
	this.shape_16.setTransform(393,426.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(25,1,1).p("AhGDPICMmd");
	this.shape_17.setTransform(393.4,425.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(25,1,1).p("AhJDaICTmz");
	this.shape_18.setTransform(393.7,424);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(25,1,1).p("AhNDlICbnK");
	this.shape_19.setTransform(394.1,422.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(25,1,1).p("AhRDxICjnh");
	this.shape_20.setTransform(394.5,421.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(25,1,1).p("AhVD8ICrn3");
	this.shape_21.setTransform(394.9,420.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(25,1,1).p("AhYEHICxoN");
	this.shape_22.setTransform(395.3,419.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(25,1,1).p("AhcESIC5oj");
	this.shape_23.setTransform(395.6,418.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(25,1,1).p("AhgEeIDBo7");
	this.shape_24.setTransform(396,417.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(25,1,1).p("AhkEpIDJpR");
	this.shape_25.setTransform(396.4,416);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(25,1,1).p("AhoE0IDRpn");
	this.shape_26.setTransform(396.8,414.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(25,1,1).p("AhrE/IDYp9");
	this.shape_27.setTransform(397.2,413.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(25,1,1).p("AhvFLIDfqU");
	this.shape_28.setTransform(397.5,412.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(25,1,1).p("AhzFWIDnqr");
	this.shape_29.setTransform(397.9,411.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(25,1,1).p("Ah3FhIDvrB");
	this.shape_30.setTransform(398.3,410.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(25,1,1).p("Ah7FsID3rX");
	this.shape_31.setTransform(398.7,409.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(25,1,1).p("Ah/F3ID/ru");
	this.shape_32.setTransform(399,408.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(25,1,1).p("AiDGCIEHsE");
	this.shape_33.setTransform(399.4,407);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(25,1,1).p("AiHGOIEPsb");
	this.shape_34.setTransform(399.8,405.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(25,1,1).p("AiKGZIEVsx");
	this.shape_35.setTransform(400.2,404.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(25,1,1).p("AiOGkIEdtH");
	this.shape_36.setTransform(400.6,403.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(25,1,1).p("AiSGwIElte");
	this.shape_37.setTransform(401,402.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(25,1,1).p("AiWG7IEtt1");
	this.shape_38.setTransform(401.3,401.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(25,1,1).p("AiZHGIEzuL");
	this.shape_39.setTransform(401.7,400.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(25,1,1).p("AidHRIE7uh");
	this.shape_40.setTransform(402.1,399);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(25,1,1).p("AihHcIFDu4");
	this.shape_41.setTransform(402.5,397.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(25,1,1).p("AilHoIFLvP");
	this.shape_42.setTransform(402.9,396.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(25,1,1).p("AipHzIFTvl");
	this.shape_43.setTransform(403.2,395.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(25,1,1).p("AitH+IFav7");
	this.shape_44.setTransform(403.6,394.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(25,1,1).p("AixIKIFjwS");
	this.shape_45.setTransform(404,393.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(25,1,1).p("Ai0IVIFpwp");
	this.shape_46.setTransform(404.4,392.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(25,1,1).p("Ai4IgIFxw/");
	this.shape_47.setTransform(404.8,391);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(25,1,1).p("Ai8IrIF5xV");
	this.shape_48.setTransform(405.1,389.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(25,1,1).p("AjAI2IGBxr");
	this.shape_49.setTransform(405.5,388.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(25,1,1).p("AjEJCIGJyD");
	this.shape_50.setTransform(405.9,387.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(25,1,1).p("AjIJNIGRyZ");
	this.shape_51.setTransform(406.3,386.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(25,1,1).p("AjLJYIGXyv");
	this.shape_52.setTransform(406.6,385.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(25,1,1).p("AjPJjIGfzF");
	this.shape_53.setTransform(407,384.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(25,1,1).p("AjTJvIGnzd");
	this.shape_54.setTransform(407.4,383.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(25,1,1).p("AjXJ6IGvzz");
	this.shape_55.setTransform(407.8,381.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(25,1,1).p("AjaKFIG20J");
	this.shape_56.setTransform(408.2,380.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(25,1,1).p("AjeKQIG90f");
	this.shape_57.setTransform(408.5,379.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(25,1,1).p("AjiKbIHF01");
	this.shape_58.setTransform(408.9,378.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(25,1,1).p("AjmKnIHN1N");
	this.shape_59.setTransform(409.3,377.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(25,1,1).p("AjqKyIHV1j");
	this.shape_60.setTransform(409.7,376.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(25,1,1).p("AjtK9IHc15");
	this.shape_61.setTransform(410.1,375.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(25,1,1).p("AjyLIIHl2P");
	this.shape_62.setTransform(410.5,374);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(25,1,1).p("Aj1LTIHr2m");
	this.shape_63.setTransform(410.8,372.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(25,1,1).p("Aj5LfIHz29");
	this.shape_64.setTransform(411.2,371.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(25,1,1).p("Aj9LqIH73T");
	this.shape_65.setTransform(411.6,370.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(25,1,1).p("AkBL1IID3p");
	this.shape_66.setTransform(412,369.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(25,1,1).p("AkFMBIIL4A");
	this.shape_67.setTransform(412.3,368.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(25,1,1).p("AkJMMIIT4X");
	this.shape_68.setTransform(412.7,367.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(25,1,1).p("AkMMXIIZ4t");
	this.shape_69.setTransform(413.1,366);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(25,1,1).p("AkQMiIIh5D");
	this.shape_70.setTransform(413.5,364.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(25,1,1).p("AkUMuIIp5b");
	this.shape_71.setTransform(413.9,363.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(25,1,1).p("AkYM5IIx5x");
	this.shape_72.setTransform(414.2,362.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(25,1,1).p("AkcNEII46H");
	this.shape_73.setTransform(414.6,361.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(25,1,1).p("AkgNPIJB6d");
	this.shape_74.setTransform(415,360.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(25,1,1).p("AkjNaIJH60");
	this.shape_75.setTransform(415.4,359.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(25,1,1).p("AknNmIJP7L");
	this.shape_76.setTransform(415.8,358.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(25,1,1).p("AkrNxIJX7h");
	this.shape_77.setTransform(416.1,356.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(25,1,1).p("AkvN8IJf73");
	this.shape_78.setTransform(416.5,355.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(25,1,1).p("AkzOIIJn8O");
	this.shape_79.setTransform(416.9,354.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(25,1,1).p("Ak2OSIJt8j");
	this.shape_80.setTransform(417.3,353.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(25,1,1).p("Ak6OeIJ187");
	this.shape_81.setTransform(417.7,352.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(25,1,1).p("Ak+OpIJ99R");
	this.shape_82.setTransform(418,351.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(25,1,1).p("AlCO0IKF9n");
	this.shape_83.setTransform(418.4,350.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(25,1,1).p("AlFO/IKM99");
	this.shape_84.setTransform(418.8,349);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(25,1,1).p("AlJPLIKT+V");
	this.shape_85.setTransform(419.2,347.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(25,1,1).p("AlNPWIKb+r");
	this.shape_86.setTransform(419.5,346.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(25,1,1).p("AlRPhIKj/B");
	this.shape_87.setTransform(419.9,345.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(25,1,1).p("AlVPsIKr/X");
	this.shape_88.setTransform(420.3,344.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(25,1,1).p("AlZP4IKz/v");
	this.shape_89.setTransform(420.7,343.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(25,1,1).p("AlcQDMAK5ggF");
	this.shape_90.setTransform(421.1,342.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(25,1,1).p("AlhQOMALCggb");
	this.shape_91.setTransform(421.5,341);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(25,1,1).p("AlkQZMALJggx");
	this.shape_92.setTransform(421.8,339.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(25,1,1).p("AloQlMALRghJ");
	this.shape_93.setTransform(422.2,338.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(25,1,1).p("AlsQwMALZghf");
	this.shape_94.setTransform(422.6,337.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(25,1,1).p("AlwQ7MALhgh1");
	this.shape_95.setTransform(423,336.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(25,1,1).p("Al0RGMALpgiL");
	this.shape_96.setTransform(423.4,335.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(25,1,1).p("Al3RSMALvgii");
	this.shape_97.setTransform(423.7,334.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(25,1,1).p("Al7RcMAL3gi4");
	this.shape_98.setTransform(424.1,333.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(25,1,1).p("Al/RoMAL/gjP");
	this.shape_99.setTransform(424.5,331.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(25,1,1).p("AmDRzMAMHgjl");
	this.shape_100.setTransform(424.9,330.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(25,1,1).p("AmGR/MAMNgj8");
	this.shape_101.setTransform(425.3,329.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(25,1,1).p("AmKSJMAMVgkS");
	this.shape_102.setTransform(425.6,328.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(25,1,1).p("AmOSVMAMdgkp");
	this.shape_103.setTransform(426,327.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(25,1,1).p("AmSSgMAMlgk/");
	this.shape_104.setTransform(426.4,326.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(25,1,1).p("AmWSrMAMtglW");
	this.shape_105.setTransform(426.8,325.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(25,1,1).p("AmaS2MAM1gls");
	this.shape_106.setTransform(427.1,324);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(25,1,1).p("AmdTCMAM7gmD");
	this.shape_107.setTransform(427.5,322.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(25,1,1).p("AmhTNMANEgmZ");
	this.shape_108.setTransform(427.9,321.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(25,1,1).p("AmlTYMANLgmv");
	this.shape_109.setTransform(428.3,320.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(25,1,1).p("AmpTkMANTgnG");
	this.shape_110.setTransform(428.7,319.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(25,1,1).p("AmtTvMANbgnd");
	this.shape_111.setTransform(429,318.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(25,1,1).p("AmxT6MANjgnz");
	this.shape_112.setTransform(429.4,317.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(25,1,1).p("Am1UFMANrgoJ");
	this.shape_113.setTransform(429.8,316);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(25,1,1).p("Am4UQMANxgog");
	this.shape_114.setTransform(430.2,314.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(25,1,1).p("Am8UcMAN5go3");
	this.shape_115.setTransform(430.6,313.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(25,1,1).p("AnAUnMAOBgpN");
	this.shape_116.setTransform(431,312.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(25,1,1).p("AnEUyMAOJgpj");
	this.shape_117.setTransform(431.3,311.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(25,1,1).p("AnIU9MAOQgp5");
	this.shape_118.setTransform(431.7,310.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(25,1,1).p("AnLVJMAOXgqR");
	this.shape_119.setTransform(432.1,309.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(25,1,1).p("AnPVUMAOfgqn");
	this.shape_120.setTransform(432.5,308);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(25,1,1).p("AnTVfMAOngq9");
	this.shape_121.setTransform(432.9,306.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(25,1,1).p("AnXVqMAOvgrT");
	this.shape_122.setTransform(433.2,305.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(25,1,1).p("AnbV2MAO3grq");
	this.shape_123.setTransform(433.6,304.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(25,1,1).p("AnfWBMAO/gsB");
	this.shape_124.setTransform(434,303.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(25,1,1).p("AnjWMMAPGgsX");
	this.shape_125.setTransform(434.4,302.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(25,1,1).p("AnmWXMAPNgst");
	this.shape_126.setTransform(434.7,301.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(25,1,1).p("AnqWjMAPVgtF");
	this.shape_127.setTransform(435.1,300.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(25,1,1).p("AnuWuMAPdgtb");
	this.shape_128.setTransform(435.5,299);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(25,1,1).p("AnyW5MAPlgtx");
	this.shape_129.setTransform(435.9,297.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(25,1,1).p("An2XEMAPtguH");
	this.shape_130.setTransform(436.3,296.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(25,1,1).p("An5XPMAPzgud");
	this.shape_131.setTransform(436.6,295.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(25,1,1).p("An9XbMAP7gu0");
	this.shape_132.setTransform(437,294.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(25,1,1).p("AoBXmMAQDgvL");
	this.shape_133.setTransform(437.4,293.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(25,1,1).p("AoFXxMAQLgvh");
	this.shape_134.setTransform(437.8,292.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(25,1,1).p("AoIX8MAQSgv3");
	this.shape_135.setTransform(438.2,291);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(25,1,1).p("AoMYHMAQZgwO");
	this.shape_136.setTransform(438.5,289.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(25,1,1).p("AoQYTMAQhgwl");
	this.shape_137.setTransform(438.9,288.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(25,1,1).p("AoUYeMAQpgw7");
	this.shape_138.setTransform(439.3,287.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(25,1,1).p("AoYYpMAQxgxR");
	this.shape_139.setTransform(439.7,286.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(25,1,1).p("AocY0MAQ5gxo");
	this.shape_140.setTransform(440.1,285.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(25,1,1).p("AofZAMAQ/gx/");
	this.shape_141.setTransform(440.5,284.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(25,1,1).p("AojZLMARIgyV");
	this.shape_142.setTransform(440.8,283);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(25,1,1).p("AonZWMARPgyr");
	this.shape_143.setTransform(441.2,281.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(25,1,1).p("AorZiMARXgzD");
	this.shape_144.setTransform(441.6,280.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(25,1,1).p("AovZtMARfgzZ");
	this.shape_145.setTransform(442,279.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(25,1,1).p("AozZ4MARngzv");
	this.shape_146.setTransform(442.3,278.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(25,1,1).p("Ao3aDMARvg0F");
	this.shape_147.setTransform(442.7,277.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(25,1,1).p("Ao6aOMAR1g0b");
	this.shape_148.setTransform(443.1,276.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(25,1,1).p("Ao+aaMAR9g0z");
	this.shape_149.setTransform(443.5,275.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(25,1,1).p("ApCalMASFg1J");
	this.shape_150.setTransform(443.9,273.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").ss(25,1,1).p("AJH6vMgSNA1f");
	this.shape_151.setTransform(444.2,272.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},479).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).wait(76));

	// 1
	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(25,1,1).p("AgIgaIARA1");
	this.shape_152.setTransform(275.3,116.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#000000").ss(25,1,1).p("AgMglIAZBL");
	this.shape_153.setTransform(275.6,117.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(25,1,1).p("AgPgwIAfBh");
	this.shape_154.setTransform(276,118.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#000000").ss(25,1,1).p("AgTg7IAnB3");
	this.shape_155.setTransform(276.4,119.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(25,1,1).p("AgXhGIAuCN");
	this.shape_156.setTransform(276.7,120.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#000000").ss(25,1,1).p("AgahRIA1Cj");
	this.shape_157.setTransform(277.1,121.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(25,1,1).p("AgehcIA9C5");
	this.shape_158.setTransform(277.4,122.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#000000").ss(25,1,1).p("AghhnIBDDP");
	this.shape_159.setTransform(277.8,124);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(25,1,1).p("AglhyIBLDl");
	this.shape_160.setTransform(278.2,125.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#000000").ss(25,1,1).p("Agph9IBTD7");
	this.shape_161.setTransform(278.5,126.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(25,1,1).p("AgsiIIBaER");
	this.shape_162.setTransform(278.9,127.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#000000").ss(25,1,1).p("AgwiTIBhEn");
	this.shape_163.setTransform(279.3,128.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(25,1,1).p("Ag0ieIBpE9");
	this.shape_164.setTransform(279.6,129.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").ss(25,1,1).p("Ag3ipIBvFT");
	this.shape_165.setTransform(280,130.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(25,1,1).p("Ag7i0IB3Fp");
	this.shape_166.setTransform(280.4,131.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").ss(25,1,1).p("Ag/i/IB+F/");
	this.shape_167.setTransform(280.7,132.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(25,1,1).p("AhCjKICFGV");
	this.shape_168.setTransform(281.1,133.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").ss(25,1,1).p("AhGjVICNGr");
	this.shape_169.setTransform(281.4,135);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(25,1,1).p("AhJjgICTHA");
	this.shape_170.setTransform(281.8,136.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").ss(25,1,1).p("AhNjqICbHW");
	this.shape_171.setTransform(282.2,137.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").ss(25,1,1).p("AhRj2ICjHt");
	this.shape_172.setTransform(282.5,138.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#000000").ss(25,1,1).p("AhUkBICqID");
	this.shape_173.setTransform(282.9,139.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(25,1,1).p("AhYkLICxIY");
	this.shape_174.setTransform(283.3,140.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#000000").ss(25,1,1).p("AhckXIC5Iu");
	this.shape_175.setTransform(283.6,141.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#000000").ss(25,1,1).p("AhfkhIC/JE");
	this.shape_176.setTransform(284,142.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#000000").ss(25,1,1).p("AhjktIDHJb");
	this.shape_177.setTransform(284.4,143.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#000000").ss(25,1,1).p("Ahnk3IDOJv");
	this.shape_178.setTransform(284.7,144.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#000000").ss(25,1,1).p("AhqlCIDVKF");
	this.shape_179.setTransform(285.1,145.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").ss(25,1,1).p("AhulNIDdKb");
	this.shape_180.setTransform(285.4,147);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#000000").ss(25,1,1).p("AhxlYIDjKx");
	this.shape_181.setTransform(285.8,148.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#000000").ss(25,1,1).p("Ah1ljIDrLH");
	this.shape_182.setTransform(286.2,149.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#000000").ss(25,1,1).p("Ah5luIDzLd");
	this.shape_183.setTransform(286.5,150.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#000000").ss(25,1,1).p("Ah8l5ID6Lz");
	this.shape_184.setTransform(286.9,151.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#000000").ss(25,1,1).p("AiAmEIEBMJ");
	this.shape_185.setTransform(287.3,152.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#000000").ss(25,1,1).p("AiEmPIEJMf");
	this.shape_186.setTransform(287.6,153.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#000000").ss(25,1,1).p("AiHmaIEPM1");
	this.shape_187.setTransform(288,154.7);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#000000").ss(25,1,1).p("AiLmlIEXNL");
	this.shape_188.setTransform(288.4,155.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#000000").ss(25,1,1).p("AiPmwIEeNh");
	this.shape_189.setTransform(288.7,156.9);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#000000").ss(25,1,1).p("AiSm7IElN3");
	this.shape_190.setTransform(289.1,158);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#000000").ss(25,1,1).p("AiWnGIEtON");
	this.shape_191.setTransform(289.5,159.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#000000").ss(25,1,1).p("AiZnRIEzOj");
	this.shape_192.setTransform(289.8,160.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#000000").ss(25,1,1).p("AidncIE7O5");
	this.shape_193.setTransform(290.2,161.3);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#000000").ss(25,1,1).p("AihnnIFDPP");
	this.shape_194.setTransform(290.5,162.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#000000").ss(25,1,1).p("AiknyIFKPl");
	this.shape_195.setTransform(290.9,163.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#000000").ss(25,1,1).p("Aion9IFRP7");
	this.shape_196.setTransform(291.3,164.6);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#000000").ss(25,1,1).p("AisoIIFZQR");
	this.shape_197.setTransform(291.6,165.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#000000").ss(25,1,1).p("AivoTIFfQn");
	this.shape_198.setTransform(292,166.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#000000").ss(25,1,1).p("AizoeIFnQ9");
	this.shape_199.setTransform(292.4,167.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#000000").ss(25,1,1).p("Ai3opIFvRT");
	this.shape_200.setTransform(292.7,169);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#000000").ss(25,1,1).p("Ai6o0IF1Ro");
	this.shape_201.setTransform(293.1,170.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#000000").ss(25,1,1).p("Ai+o+IF9R+");
	this.shape_202.setTransform(293.5,171.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#000000").ss(25,1,1).p("AjBpKIGDSV");
	this.shape_203.setTransform(293.8,172.3);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#000000").ss(25,1,1).p("AjFpVIGLSr");
	this.shape_204.setTransform(294.2,173.4);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#000000").ss(25,1,1).p("AjJpgIGTTB");
	this.shape_205.setTransform(294.5,174.5);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#000000").ss(25,1,1).p("AjMpqIGaTV");
	this.shape_206.setTransform(294.9,175.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#000000").ss(25,1,1).p("AjQp1IGhTr");
	this.shape_207.setTransform(295.3,176.6);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#000000").ss(25,1,1).p("AjUqAIGpUB");
	this.shape_208.setTransform(295.6,177.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#000000").ss(25,1,1).p("AjXqLIGvUX");
	this.shape_209.setTransform(296,178.8);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#000000").ss(25,1,1).p("AjbqWIG3Ut");
	this.shape_210.setTransform(296.4,179.9);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#000000").ss(25,1,1).p("AjfqhIG/VD");
	this.shape_211.setTransform(296.7,181);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#000000").ss(25,1,1).p("AjiqsIHFVZ");
	this.shape_212.setTransform(297.1,182.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#000000").ss(25,1,1).p("Ajmq3IHNVv");
	this.shape_213.setTransform(297.5,183.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#000000").ss(25,1,1).p("AjprCIHTWF");
	this.shape_214.setTransform(297.8,184.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#000000").ss(25,1,1).p("AjtrNIHbWb");
	this.shape_215.setTransform(298.2,185.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#000000").ss(25,1,1).p("AjxrYIHjWx");
	this.shape_216.setTransform(298.5,186.5);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#000000").ss(25,1,1).p("Aj0rjIHqXH");
	this.shape_217.setTransform(298.9,187.6);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#000000").ss(25,1,1).p("Aj4ruIHxXd");
	this.shape_218.setTransform(299.3,188.7);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#000000").ss(25,1,1).p("Aj8r5IH5Xz");
	this.shape_219.setTransform(299.6,189.8);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#000000").ss(25,1,1).p("Aj/sEIH/YJ");
	this.shape_220.setTransform(300,190.9);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#000000").ss(25,1,1).p("AkDsPIIHYf");
	this.shape_221.setTransform(300.4,192);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#000000").ss(25,1,1).p("AkHsaIIPY1");
	this.shape_222.setTransform(300.7,193.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#000000").ss(25,1,1).p("AkKslIIVZL");
	this.shape_223.setTransform(301.1,194.2);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#000000").ss(25,1,1).p("AkOswIIdZh");
	this.shape_224.setTransform(301.5,195.3);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#000000").ss(25,1,1).p("AkRs7IIjZ3");
	this.shape_225.setTransform(301.8,196.4);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#000000").ss(25,1,1).p("AkVtGIIraN");
	this.shape_226.setTransform(302.2,197.5);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#000000").ss(25,1,1).p("AkZtRIIzaj");
	this.shape_227.setTransform(302.6,198.6);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#000000").ss(25,1,1).p("AkctbII6a4");
	this.shape_228.setTransform(302.9,199.7);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#000000").ss(25,1,1).p("AkgtnIJBbO");
	this.shape_229.setTransform(303.3,200.8);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#000000").ss(25,1,1).p("AkktyIJJbl");
	this.shape_230.setTransform(303.6,201.9);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#000000").ss(25,1,1).p("Aknt9IJPb7");
	this.shape_231.setTransform(304,203);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#000000").ss(25,1,1).p("AkruIIJXcQ");
	this.shape_232.setTransform(304.4,204.1);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#000000").ss(25,1,1).p("AkvuSIJfcm");
	this.shape_233.setTransform(304.7,205.2);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#000000").ss(25,1,1).p("AkyudIJlc7");
	this.shape_234.setTransform(305.1,206.2);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#000000").ss(25,1,1).p("Ak2uoIJtdR");
	this.shape_235.setTransform(305.5,207.3);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#000000").ss(25,1,1).p("Ak5uzIJzdn");
	this.shape_236.setTransform(305.8,208.4);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#000000").ss(25,1,1).p("Ak9u+IJ7d9");
	this.shape_237.setTransform(306.2,209.5);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#000000").ss(25,1,1).p("AlBvJIKDeT");
	this.shape_238.setTransform(306.6,210.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#000000").ss(25,1,1).p("AlEvUIKKep");
	this.shape_239.setTransform(306.9,211.7);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#000000").ss(25,1,1).p("AlIvfIKRe/");
	this.shape_240.setTransform(307.3,212.8);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#000000").ss(25,1,1).p("AlMvqIKZfV");
	this.shape_241.setTransform(307.6,213.9);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#000000").ss(25,1,1).p("AlPv1IKffr");
	this.shape_242.setTransform(308,215);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#000000").ss(25,1,1).p("AlTwAMAKnAgB");
	this.shape_243.setTransform(308.4,216.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#000000").ss(25,1,1).p("AlXwLMAKvAgX");
	this.shape_244.setTransform(308.7,217.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#000000").ss(25,1,1).p("AlawWMAK1Agt");
	this.shape_245.setTransform(309.1,218.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#000000").ss(25,1,1).p("AlewhMAK9AhD");
	this.shape_246.setTransform(309.5,219.4);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#000000").ss(25,1,1).p("AliwsMALFAhZ");
	this.shape_247.setTransform(309.8,220.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#000000").ss(25,1,1).p("Allw3MALLAhv");
	this.shape_248.setTransform(310.2,221.6);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#000000").ss(25,1,1).p("AlpxCMALTAiF");
	this.shape_249.setTransform(310.6,222.7);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#000000").ss(25,1,1).p("AlsxNMALaAib");
	this.shape_250.setTransform(310.9,223.8);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#000000").ss(25,1,1).p("AlwxYMALhAix");
	this.shape_251.setTransform(311.3,224.9);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#000000").ss(25,1,1).p("Al0xjMALpAjH");
	this.shape_252.setTransform(311.6,226);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#000000").ss(25,1,1).p("Al3xuMALvAjd");
	this.shape_253.setTransform(312,227.1);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#000000").ss(25,1,1).p("Al7x5MAL3Ajz");
	this.shape_254.setTransform(312.4,228.2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#000000").ss(25,1,1).p("Al/yEMAL/AkJ");
	this.shape_255.setTransform(312.7,229.3);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#000000").ss(25,1,1).p("AmDyPMAMHAkf");
	this.shape_256.setTransform(313.1,230.4);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#000000").ss(25,1,1).p("AmGyaMAMNAk1");
	this.shape_257.setTransform(313.5,231.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#000000").ss(25,1,1).p("AmKylMAMVAlL");
	this.shape_258.setTransform(313.8,232.6);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#000000").ss(25,1,1).p("AmNyvMAMbAlg");
	this.shape_259.setTransform(314.2,233.7);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#000000").ss(25,1,1).p("AmRy7MAMjAl2");
	this.shape_260.setTransform(314.6,234.8);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#000000").ss(25,1,1).p("AmUzGMAMqAmN");
	this.shape_261.setTransform(314.9,235.9);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#000000").ss(25,1,1).p("AmYzRMAMxAmj");
	this.shape_262.setTransform(315.3,237);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#000000").ss(25,1,1).p("AmczbMAM5Am3");
	this.shape_263.setTransform(315.6,238);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#000000").ss(25,1,1).p("AmfzmMAM/AnN");
	this.shape_264.setTransform(316,239.1);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#000000").ss(25,1,1).p("AmjzxMANHAnj");
	this.shape_265.setTransform(316.4,240.2);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#000000").ss(25,1,1).p("Amnz8MANPAn5");
	this.shape_266.setTransform(316.7,241.3);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#000000").ss(25,1,1).p("Amr0HMANXAoP");
	this.shape_267.setTransform(317.1,242.4);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#000000").ss(25,1,1).p("Amu0SMANdAol");
	this.shape_268.setTransform(317.5,243.5);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#000000").ss(25,1,1).p("Amy0dMANlAo7");
	this.shape_269.setTransform(317.8,244.6);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#000000").ss(25,1,1).p("Am10oMANrApR");
	this.shape_270.setTransform(318.2,245.7);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#000000").ss(25,1,1).p("Am50zMANzApn");
	this.shape_271.setTransform(318.6,246.8);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#000000").ss(25,1,1).p("Am80+MAN6Ap9");
	this.shape_272.setTransform(318.9,247.9);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#000000").ss(25,1,1).p("AnA1JMAOBAqT");
	this.shape_273.setTransform(319.3,249);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#000000").ss(25,1,1).p("AnE1UMAOJAqp");
	this.shape_274.setTransform(319.7,250.1);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#000000").ss(25,1,1).p("AnH1fMAOPAq/");
	this.shape_275.setTransform(320,251.2);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#000000").ss(25,1,1).p("AnL1qMAOXArV");
	this.shape_276.setTransform(320.4,252.3);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#000000").ss(25,1,1).p("AnP11MAOfArr");
	this.shape_277.setTransform(320.7,253.4);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#000000").ss(25,1,1).p("AnT2AMAOnAsB");
	this.shape_278.setTransform(321.1,254.5);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#000000").ss(25,1,1).p("AnW2LMAOtAsX");
	this.shape_279.setTransform(321.5,255.6);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#000000").ss(25,1,1).p("Ana2WMAO1Ast");
	this.shape_280.setTransform(321.8,256.7);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#000000").ss(25,1,1).p("And2hMAO7AtD");
	this.shape_281.setTransform(322.2,257.8);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#000000").ss(25,1,1).p("Anh2sMAPDAtZ");
	this.shape_282.setTransform(322.6,258.9);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#000000").ss(25,1,1).p("Ank23MAPKAtv");
	this.shape_283.setTransform(322.9,260);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#000000").ss(25,1,1).p("Ano3CMAPRAuF");
	this.shape_284.setTransform(323.3,261.1);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#000000").ss(25,1,1).p("Ans3MMAPZAua");
	this.shape_285.setTransform(323.7,262.2);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#000000").ss(25,1,1).p("Anv3YMAPfAuw");
	this.shape_286.setTransform(324,263.3);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#000000").ss(25,1,1).p("Anz3jMAPnAvH");
	this.shape_287.setTransform(324.4,264.4);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#000000").ss(25,1,1).p("An33uMAPvAvd");
	this.shape_288.setTransform(324.7,265.5);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#000000").ss(25,1,1).p("An735MAP3Avz");
	this.shape_289.setTransform(325.1,266.6);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#000000").ss(25,1,1).p("An+4DMAP9AwI");
	this.shape_290.setTransform(325.5,267.7);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#000000").ss(25,1,1).p("AoC4PMAQFAwe");
	this.shape_291.setTransform(325.8,268.8);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#000000").ss(25,1,1).p("AoF4ZMAQLAwz");
	this.shape_292.setTransform(326.2,269.8);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#000000").ss(25,1,1).p("AoJ4kMAQTAxJ");
	this.shape_293.setTransform(326.6,270.9);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#000000").ss(25,1,1).p("AoN4vMAQbAxf");
	this.shape_294.setTransform(326.9,272);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#000000").ss(25,1,1).p("AoQ46MAQhAx1");
	this.shape_295.setTransform(327.3,273.1);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#000000").ss(25,1,1).p("AoU5FMAQpAyL");
	this.shape_296.setTransform(327.7,274.2);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#000000").ss(25,1,1).p("AoX5QMAQvAyh");
	this.shape_297.setTransform(328,275.3);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#000000").ss(25,1,1).p("Aob5bMAQ3Ay3");
	this.shape_298.setTransform(328.4,276.4);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#000000").ss(25,1,1).p("Aof5mMAQ/AzN");
	this.shape_299.setTransform(328.7,277.5);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#000000").ss(25,1,1).p("Aoj5xMARHAzj");
	this.shape_300.setTransform(329.1,278.6);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#000000").ss(25,1,1).p("Aom58MARNAz5");
	this.shape_301.setTransform(329.5,279.7);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#000000").ss(25,1,1).p("Aoq6HMARVA0P");
	this.shape_302.setTransform(329.8,280.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_152}]},319).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).wait(236));

	// 1
	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#000000").ss(25,1,1).p("AADgJIgFAT");
	this.shape_303.setTransform(163.8,446);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#000000").ss(25,1,1).p("AgGAVIANgp");
	this.shape_304.setTransform(164.2,444.9);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#000000").ss(25,1,1).p("AgKAhIAVhB");
	this.shape_305.setTransform(164.6,443.8);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#000000").ss(25,1,1).p("AgNAsIAchW");
	this.shape_306.setTransform(165,442.7);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#000000").ss(25,1,1).p("AgRA3IAjht");
	this.shape_307.setTransform(165.3,441.5);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#000000").ss(25,1,1).p("AgVBCIAriD");
	this.shape_308.setTransform(165.7,440.4);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#000000").ss(25,1,1).p("AgZBNIAyiZ");
	this.shape_309.setTransform(166.1,439.3);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#000000").ss(25,1,1).p("AgcBYIA5iv");
	this.shape_310.setTransform(166.4,438.2);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f().s("#000000").ss(25,1,1).p("AggBjIBBjF");
	this.shape_311.setTransform(166.8,437.1);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("#000000").ss(25,1,1).p("AgkBuIBJjb");
	this.shape_312.setTransform(167.2,436);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("#000000").ss(25,1,1).p("AgnB5IBPjy");
	this.shape_313.setTransform(167.5,434.9);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("#000000").ss(25,1,1).p("AgrCFIBXkJ");
	this.shape_314.setTransform(167.9,433.8);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f().s("#000000").ss(25,1,1).p("AgvCQIBfkf");
	this.shape_315.setTransform(168.3,432.6);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#000000").ss(25,1,1).p("AgyCbIBlk1");
	this.shape_316.setTransform(168.6,431.5);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("#000000").ss(25,1,1).p("Ag2CmIBtlL");
	this.shape_317.setTransform(169,430.4);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#000000").ss(25,1,1).p("Ag5CxIBzlh");
	this.shape_318.setTransform(169.4,429.3);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f().s("#000000").ss(25,1,1).p("Ag9C8IB7l3");
	this.shape_319.setTransform(169.7,428.2);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("#000000").ss(25,1,1).p("AhBDHICDmN");
	this.shape_320.setTransform(170.1,427.1);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("#000000").ss(25,1,1).p("AhEDTICKml");
	this.shape_321.setTransform(170.5,426);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("#000000").ss(25,1,1).p("AhIDdICRm6");
	this.shape_322.setTransform(170.8,424.9);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f().s("#000000").ss(25,1,1).p("AhMDpICZnR");
	this.shape_323.setTransform(171.2,423.7);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("#000000").ss(25,1,1).p("AhQD0ICgnn");
	this.shape_324.setTransform(171.6,422.6);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f().s("#000000").ss(25,1,1).p("AhTD/ICnn9");
	this.shape_325.setTransform(171.9,421.5);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#000000").ss(25,1,1).p("AhXEKICvoT");
	this.shape_326.setTransform(172.3,420.4);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f().s("#000000").ss(25,1,1).p("AhbEVIC3op");
	this.shape_327.setTransform(172.7,419.3);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#000000").ss(25,1,1).p("AheEgIC9o/");
	this.shape_328.setTransform(173,418.2);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f().s("#000000").ss(25,1,1).p("AhiErIDFpV");
	this.shape_329.setTransform(173.4,417.1);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#000000").ss(25,1,1).p("AhmE3IDNpt");
	this.shape_330.setTransform(173.8,416);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("#000000").ss(25,1,1).p("AhpFBIDTqC");
	this.shape_331.setTransform(174.1,414.9);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#000000").ss(25,1,1).p("AhtFNIDbqZ");
	this.shape_332.setTransform(174.5,413.7);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("#000000").ss(25,1,1).p("AhwFYIDhqv");
	this.shape_333.setTransform(174.9,412.6);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("#000000").ss(25,1,1).p("Ah0FjIDprF");
	this.shape_334.setTransform(175.2,411.5);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("#000000").ss(25,1,1).p("Ah4FuIDxrb");
	this.shape_335.setTransform(175.6,410.4);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("#000000").ss(25,1,1).p("Ah7F5ID4rx");
	this.shape_336.setTransform(176,409.3);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("#000000").ss(25,1,1).p("Ah/GEID/sH");
	this.shape_337.setTransform(176.3,408.2);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#000000").ss(25,1,1).p("AiDGPIEHsd");
	this.shape_338.setTransform(176.7,407.1);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f().s("#000000").ss(25,1,1).p("AiHGbIEOs1");
	this.shape_339.setTransform(177.1,406);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#000000").ss(25,1,1).p("AiKGmIEVtL");
	this.shape_340.setTransform(177.4,404.8);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("#000000").ss(25,1,1).p("AiOGxIEdth");
	this.shape_341.setTransform(177.8,403.7);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#000000").ss(25,1,1).p("AiSG8IElt3");
	this.shape_342.setTransform(178.2,402.6);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f().s("#000000").ss(25,1,1).p("AiVHHIEruN");
	this.shape_343.setTransform(178.5,401.5);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#000000").ss(25,1,1).p("AiZHSIEzuj");
	this.shape_344.setTransform(178.9,400.4);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f().s("#000000").ss(25,1,1).p("AidHdIE7u5");
	this.shape_345.setTransform(179.3,399.3);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#000000").ss(25,1,1).p("AigHoIFBvP");
	this.shape_346.setTransform(179.6,398.2);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f().s("#000000").ss(25,1,1).p("AikHzIFJvl");
	this.shape_347.setTransform(180,397.1);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#000000").ss(25,1,1).p("AioH/IFRv9");
	this.shape_348.setTransform(180.4,396);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f().s("#000000").ss(25,1,1).p("AirIKIFXwT");
	this.shape_349.setTransform(180.7,394.8);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#000000").ss(25,1,1).p("AivIVIFfwp");
	this.shape_350.setTransform(181.1,393.7);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f().s("#000000").ss(25,1,1).p("AizIgIFnw/");
	this.shape_351.setTransform(181.5,392.6);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#000000").ss(25,1,1).p("Ai2IrIFtxV");
	this.shape_352.setTransform(181.8,391.5);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f().s("#000000").ss(25,1,1).p("Ai6I2IF1xr");
	this.shape_353.setTransform(182.2,390.4);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("#000000").ss(25,1,1).p("Ai+JBIF9yB");
	this.shape_354.setTransform(182.6,389.3);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f().s("#000000").ss(25,1,1).p("AjBJNIGDyY");
	this.shape_355.setTransform(182.9,388.2);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("#000000").ss(25,1,1).p("AjFJXIGLyt");
	this.shape_356.setTransform(183.3,387.1);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f().s("#000000").ss(25,1,1).p("AjJJjIGTzF");
	this.shape_357.setTransform(183.7,385.9);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("#000000").ss(25,1,1).p("AjMJuIGZzb");
	this.shape_358.setTransform(184,384.8);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f().s("#000000").ss(25,1,1).p("AjQJ5IGhzx");
	this.shape_359.setTransform(184.4,383.7);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#000000").ss(25,1,1).p("AjUKEIGp0H");
	this.shape_360.setTransform(184.8,382.6);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f().s("#000000").ss(25,1,1).p("AjXKPIGv0d");
	this.shape_361.setTransform(185.1,381.5);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("#000000").ss(25,1,1).p("AjbKaIG30z");
	this.shape_362.setTransform(185.5,380.4);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f().s("#000000").ss(25,1,1).p("AjfKmIG/1L");
	this.shape_363.setTransform(185.9,379.3);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("#000000").ss(25,1,1).p("AjiKxIHF1g");
	this.shape_364.setTransform(186.2,378.2);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f().s("#000000").ss(25,1,1).p("AjmK8IHN13");
	this.shape_365.setTransform(186.6,377);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("#000000").ss(25,1,1).p("AjqLHIHV2N");
	this.shape_366.setTransform(187,375.9);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f().s("#000000").ss(25,1,1).p("AjtLSIHb2j");
	this.shape_367.setTransform(187.3,374.8);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("#000000").ss(25,1,1).p("AjxLdIHj25");
	this.shape_368.setTransform(187.7,373.7);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f().s("#000000").ss(25,1,1).p("Aj1LoIHr3P");
	this.shape_369.setTransform(188.1,372.6);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("#000000").ss(25,1,1).p("Aj4LzIHx3l");
	this.shape_370.setTransform(188.4,371.5);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f().s("#000000").ss(25,1,1).p("Aj8L+IH537");
	this.shape_371.setTransform(188.8,370.4);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f().s("#000000").ss(25,1,1).p("AkAMKIIB4T");
	this.shape_372.setTransform(189.2,369.3);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f().s("#000000").ss(25,1,1).p("AkDMVIIH4o");
	this.shape_373.setTransform(189.5,368.2);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("#000000").ss(25,1,1).p("AkHMgIIP4/");
	this.shape_374.setTransform(189.9,367);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f().s("#000000").ss(25,1,1).p("AkLMrIIX5V");
	this.shape_375.setTransform(190.3,365.9);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("#000000").ss(25,1,1).p("AkOM2IId5r");
	this.shape_376.setTransform(190.6,364.8);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f().s("#000000").ss(25,1,1).p("AkSNBIIl6B");
	this.shape_377.setTransform(191,363.7);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("#000000").ss(25,1,1).p("AkWNMIIt6X");
	this.shape_378.setTransform(191.4,362.6);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f().s("#000000").ss(25,1,1).p("AkaNXII16t");
	this.shape_379.setTransform(191.8,361.5);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("#000000").ss(25,1,1).p("AkdNiII77E");
	this.shape_380.setTransform(192.1,360.4);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f().s("#000000").ss(25,1,1).p("AkhNuIJD7b");
	this.shape_381.setTransform(192.5,359.3);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("#000000").ss(25,1,1).p("AkkN5IJJ7x");
	this.shape_382.setTransform(192.9,358.1);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f().s("#000000").ss(25,1,1).p("AkoOEIJR8H");
	this.shape_383.setTransform(193.2,357);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("#000000").ss(25,1,1).p("AksOPIJZ8d");
	this.shape_384.setTransform(193.6,355.9);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f().s("#000000").ss(25,1,1).p("AkvOaIJg8z");
	this.shape_385.setTransform(194,354.8);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("#000000").ss(25,1,1).p("AkzOlIJn9J");
	this.shape_386.setTransform(194.3,353.7);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f().s("#000000").ss(25,1,1).p("Ak3OwIJv9f");
	this.shape_387.setTransform(194.7,352.6);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("#000000").ss(25,1,1).p("Ak7O7IJ291");
	this.shape_388.setTransform(195.1,351.5);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f().s("#000000").ss(25,1,1).p("Ak+PGIJ9+M");
	this.shape_389.setTransform(195.4,350.4);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("#000000").ss(25,1,1).p("AlCPSIKF+j");
	this.shape_390.setTransform(195.8,349.3);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f().s("#000000").ss(25,1,1).p("AlGPdIKN+5");
	this.shape_391.setTransform(196.2,348.1);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f().s("#000000").ss(25,1,1).p("AlJPoIKT/P");
	this.shape_392.setTransform(196.5,347);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f().s("#000000").ss(25,1,1).p("AlNPzIKb/l");
	this.shape_393.setTransform(196.9,345.9);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f().s("#000000").ss(25,1,1).p("AlRP+IKj/7");
	this.shape_394.setTransform(197.3,344.8);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f().s("#000000").ss(25,1,1).p("AlUQJMAKpggR");
	this.shape_395.setTransform(197.6,343.7);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("#000000").ss(25,1,1).p("AlYQUMAKxggn");
	this.shape_396.setTransform(198,342.6);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f().s("#000000").ss(25,1,1).p("AlbQgMAK3gg+");
	this.shape_397.setTransform(198.4,341.5);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("#000000").ss(25,1,1).p("AlfQqMAK/ghU");
	this.shape_398.setTransform(198.7,340.4);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f().s("#000000").ss(25,1,1).p("AljQ2MALHghr");
	this.shape_399.setTransform(199.1,339.2);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f().s("#000000").ss(25,1,1).p("AlmRBMALOgiB");
	this.shape_400.setTransform(199.5,338.1);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f().s("#000000").ss(25,1,1).p("AlqRMMALVgiX");
	this.shape_401.setTransform(199.8,337);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f().s("#000000").ss(25,1,1).p("AluRXMALdgit");
	this.shape_402.setTransform(200.2,335.9);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f().s("#000000").ss(25,1,1).p("AlyRiMALkgjD");
	this.shape_403.setTransform(200.6,334.8);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f().s("#000000").ss(25,1,1).p("Al1RtMALrgjZ");
	this.shape_404.setTransform(200.9,333.7);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f().s("#000000").ss(25,1,1).p("Al5R5MALzgjx");
	this.shape_405.setTransform(201.3,332.6);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f().s("#000000").ss(25,1,1).p("Al9SEMAL7gkG");
	this.shape_406.setTransform(201.7,331.5);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f().s("#000000").ss(25,1,1).p("AmASPMAMBgkd");
	this.shape_407.setTransform(202,330.3);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f().s("#000000").ss(25,1,1).p("AmESaMAMJgkz");
	this.shape_408.setTransform(202.4,329.2);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f().s("#000000").ss(25,1,1).p("AmISlMAMRglJ");
	this.shape_409.setTransform(202.8,328.1);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f().s("#000000").ss(25,1,1).p("AmLSwMAMXglf");
	this.shape_410.setTransform(203.1,327);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f().s("#000000").ss(25,1,1).p("AmPS7MAMfgl1");
	this.shape_411.setTransform(203.5,325.9);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f().s("#000000").ss(25,1,1).p("AmSTGMAMlgmL");
	this.shape_412.setTransform(203.9,324.8);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f().s("#000000").ss(25,1,1).p("AmWTRMAMtgmh");
	this.shape_413.setTransform(204.2,323.7);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f().s("#000000").ss(25,1,1).p("AmaTdMAM1gm5");
	this.shape_414.setTransform(204.6,322.6);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f().s("#000000").ss(25,1,1).p("AmdToMAM8gnO");
	this.shape_415.setTransform(205,321.5);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("#000000").ss(25,1,1).p("AmhTzMANDgnl");
	this.shape_416.setTransform(205.3,320.3);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f().s("#000000").ss(25,1,1).p("AmlT+MANLgn7");
	this.shape_417.setTransform(205.7,319.2);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f().s("#000000").ss(25,1,1).p("AmpUJMANSgoR");
	this.shape_418.setTransform(206.1,318.1);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f().s("#000000").ss(25,1,1).p("AmsUUMANZgon");
	this.shape_419.setTransform(206.4,317);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f().s("#000000").ss(25,1,1).p("AmwUfMANhgo9");
	this.shape_420.setTransform(206.8,315.9);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f().s("#000000").ss(25,1,1).p("Am0UqMANpgpT");
	this.shape_421.setTransform(207.2,314.8);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f().s("#000000").ss(25,1,1).p("Am3U2MANvgpq");
	this.shape_422.setTransform(207.5,313.7);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f().s("#000000").ss(25,1,1).p("Am7VBMAN3gqB");
	this.shape_423.setTransform(207.9,312.6);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f().s("#000000").ss(25,1,1).p("Am/VMMAN/gqX");
	this.shape_424.setTransform(208.3,311.4);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f().s("#000000").ss(25,1,1).p("AnCVXMAOFgqt");
	this.shape_425.setTransform(208.6,310.3);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f().s("#000000").ss(25,1,1).p("AnGViMAONgrD");
	this.shape_426.setTransform(209,309.2);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f().s("#000000").ss(25,1,1).p("AnJVtMAOTgrZ");
	this.shape_427.setTransform(209.4,308.1);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f().s("#000000").ss(25,1,1).p("AnNV4MAObgrv");
	this.shape_428.setTransform(209.7,307);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f().s("#000000").ss(25,1,1).p("AnRWDMAOjgsF");
	this.shape_429.setTransform(210.1,305.9);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f().s("#000000").ss(25,1,1).p("AnUWPMAOpgsd");
	this.shape_430.setTransform(210.5,304.8);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f().s("#000000").ss(25,1,1).p("AnYWaMAOxgsy");
	this.shape_431.setTransform(210.8,303.7);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f().s("#000000").ss(25,1,1).p("AncWlMAO5gtJ");
	this.shape_432.setTransform(211.2,302.6);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f().s("#000000").ss(25,1,1).p("AngWwMAPBgtf");
	this.shape_433.setTransform(211.6,301.4);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f().s("#000000").ss(25,1,1).p("AnjW7MAPHgt1");
	this.shape_434.setTransform(211.9,300.3);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f().s("#000000").ss(25,1,1).p("AnnXGMAPPguL");
	this.shape_435.setTransform(212.3,299.2);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f().s("#000000").ss(25,1,1).p("AnrXRMAPXguh");
	this.shape_436.setTransform(212.7,298.1);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f().s("#000000").ss(25,1,1).p("AnuXcMAPdgu3");
	this.shape_437.setTransform(213,297);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f().s("#000000").ss(25,1,1).p("AnyXnMAPlgvN");
	this.shape_438.setTransform(213.4,295.9);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f().s("#000000").ss(25,1,1).p("An2XzMAPtgvl");
	this.shape_439.setTransform(213.8,294.8);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f().s("#000000").ss(25,1,1).p("An5X+MAPzgv6");
	this.shape_440.setTransform(214.1,293.7);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f().s("#000000").ss(25,1,1).p("An9YJMAP7gwR");
	this.shape_441.setTransform(214.5,292.5);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f().s("#000000").ss(25,1,1).p("AoBYUMAQDgwn");
	this.shape_442.setTransform(214.9,291.4);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f().s("#000000").ss(25,1,1).p("AoEYfMAQJgw9");
	this.shape_443.setTransform(215.2,290.3);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f().s("#000000").ss(25,1,1).p("AoIYqMAQRgxT");
	this.shape_444.setTransform(215.6,289.2);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f().s("#000000").ss(25,1,1).p("AoLY1MAQXgxp");
	this.shape_445.setTransform(216,288.1);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f().s("#000000").ss(25,1,1).p("AoPZAMAQfgx/");
	this.shape_446.setTransform(216.3,287);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f().s("#000000").ss(25,1,1).p("AoTZLMAQngyW");
	this.shape_447.setTransform(216.7,285.9);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f().s("#000000").ss(25,1,1).p("AoXZXMAQvgyt");
	this.shape_448.setTransform(217.1,284.8);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f().s("#000000").ss(25,1,1).p("AoaZiMAQ1gzD");
	this.shape_449.setTransform(217.4,283.6);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f().s("#000000").ss(25,1,1).p("AoeZtMAQ9gzZ");
	this.shape_450.setTransform(217.8,282.5);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f().s("#000000").ss(25,1,1).p("AoiZ4MARFgzv");
	this.shape_451.setTransform(218.2,281.4);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f().s("#000000").ss(25,1,1).p("AIm6CMgRLA0F");
	this.shape_452.setTransform(218.5,280.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_303}]},160).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_408}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_412}]},1).to({state:[{t:this.shape_413}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_415}]},1).to({state:[{t:this.shape_416}]},1).to({state:[{t:this.shape_417}]},1).to({state:[{t:this.shape_418}]},1).to({state:[{t:this.shape_419}]},1).to({state:[{t:this.shape_420}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_422}]},1).to({state:[{t:this.shape_423}]},1).to({state:[{t:this.shape_424}]},1).to({state:[{t:this.shape_425}]},1).to({state:[{t:this.shape_426}]},1).to({state:[{t:this.shape_427}]},1).to({state:[{t:this.shape_428}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_430}]},1).to({state:[{t:this.shape_431}]},1).to({state:[{t:this.shape_432}]},1).to({state:[{t:this.shape_433}]},1).to({state:[{t:this.shape_434}]},1).to({state:[{t:this.shape_435}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_437}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_439}]},1).to({state:[{t:this.shape_440}]},1).to({state:[{t:this.shape_441}]},1).to({state:[{t:this.shape_442}]},1).to({state:[{t:this.shape_443}]},1).to({state:[{t:this.shape_444}]},1).to({state:[{t:this.shape_445}]},1).to({state:[{t:this.shape_446}]},1).to({state:[{t:this.shape_447}]},1).to({state:[{t:this.shape_448}]},1).to({state:[{t:this.shape_449}]},1).to({state:[{t:this.shape_450}]},1).to({state:[{t:this.shape_451}]},1).to({state:[{t:this.shape_452}]},1).wait(396));

	// 1
	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f().s("#000000").ss(25,1,1).p("AgDgLIAHAX");
	this.shape_453.setTransform(50.8,105.8);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f().s("#000000").ss(25,1,1).p("AgHgYIAPAx");
	this.shape_454.setTransform(51.2,107.1);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f().s("#000000").ss(25,1,1).p("AgLgkIAXBJ");
	this.shape_455.setTransform(51.6,108.3);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f().s("#000000").ss(25,1,1).p("AgPgwIAfBh");
	this.shape_456.setTransform(52,109.5);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f().s("#000000").ss(25,1,1).p("AgTg8IAnB5");
	this.shape_457.setTransform(52.4,110.7);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f().s("#000000").ss(25,1,1).p("AgXhIIAvCR");
	this.shape_458.setTransform(52.8,111.9);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f().s("#000000").ss(25,1,1).p("AgbhUIA3Cp");
	this.shape_459.setTransform(53.2,113.1);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f().s("#000000").ss(25,1,1).p("AgfhgIA/DB");
	this.shape_460.setTransform(53.6,114.3);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f().s("#000000").ss(25,1,1).p("AgjhtIBHDb");
	this.shape_461.setTransform(54,115.6);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f().s("#000000").ss(25,1,1).p("Agnh5IBPDz");
	this.shape_462.setTransform(54.4,116.8);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f().s("#000000").ss(25,1,1).p("AgriFIBXEL");
	this.shape_463.setTransform(54.8,118);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f().s("#000000").ss(25,1,1).p("AgviRIBfEj");
	this.shape_464.setTransform(55.2,119.2);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f().s("#000000").ss(25,1,1).p("AgzidIBnE7");
	this.shape_465.setTransform(55.6,120.4);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f().s("#000000").ss(25,1,1).p("Ag3ipIBvFT");
	this.shape_466.setTransform(56,121.6);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f().s("#000000").ss(25,1,1).p("Ag7i2IB3Ft");
	this.shape_467.setTransform(56.4,122.9);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f().s("#000000").ss(25,1,1).p("Ag/jCIB/GF");
	this.shape_468.setTransform(56.8,124.1);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f().s("#000000").ss(25,1,1).p("AhDjOICHGd");
	this.shape_469.setTransform(57.2,125.3);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f().s("#000000").ss(25,1,1).p("AhHjaICPG1");
	this.shape_470.setTransform(57.6,126.5);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f().s("#000000").ss(25,1,1).p("AhLjmICXHN");
	this.shape_471.setTransform(58,127.7);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f().s("#000000").ss(25,1,1).p("AhPjyICfHl");
	this.shape_472.setTransform(58.4,128.9);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f().s("#000000").ss(25,1,1).p("AhTj+ICnH9");
	this.shape_473.setTransform(58.8,130.1);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f().s("#000000").ss(25,1,1).p("AhXkLICvIX");
	this.shape_474.setTransform(59.2,131.4);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f().s("#000000").ss(25,1,1).p("AhbkXIC3Iv");
	this.shape_475.setTransform(59.6,132.6);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f().s("#000000").ss(25,1,1).p("AhfkjIC/JH");
	this.shape_476.setTransform(60,133.8);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f().s("#000000").ss(25,1,1).p("AhjkvIDHJf");
	this.shape_477.setTransform(60.4,135);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f().s("#000000").ss(25,1,1).p("Ahnk7IDPJ3");
	this.shape_478.setTransform(60.8,136.2);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f().s("#000000").ss(25,1,1).p("AhrlHIDXKP");
	this.shape_479.setTransform(61.2,137.4);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f().s("#000000").ss(25,1,1).p("AhvlTIDgKo");
	this.shape_480.setTransform(61.6,138.7);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f().s("#000000").ss(25,1,1).p("AhzlgIDoLB");
	this.shape_481.setTransform(62,139.9);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f().s("#000000").ss(25,1,1).p("Ah4lsIDwLZ");
	this.shape_482.setTransform(62.4,141.1);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f().s("#000000").ss(25,1,1).p("Ah7l4ID4Lx");
	this.shape_483.setTransform(62.8,142.3);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f().s("#000000").ss(25,1,1).p("AiAmEIEAMJ");
	this.shape_484.setTransform(63.2,143.5);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f().s("#000000").ss(25,1,1).p("AiDmQIEIMh");
	this.shape_485.setTransform(63.6,144.7);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f().s("#000000").ss(25,1,1).p("AiImcIERM6");
	this.shape_486.setTransform(64,146);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f().s("#000000").ss(25,1,1).p("AiMmoIEYNS");
	this.shape_487.setTransform(64.4,147.2);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f().s("#000000").ss(25,1,1).p("AiPm1IEgNr");
	this.shape_488.setTransform(64.8,148.4);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f().s("#000000").ss(25,1,1).p("AiUnBIEoOD");
	this.shape_489.setTransform(65.2,149.6);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f().s("#000000").ss(25,1,1).p("AiXnNIEwOb");
	this.shape_490.setTransform(65.6,150.8);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f().s("#000000").ss(25,1,1).p("AicnZIE5Oz");
	this.shape_491.setTransform(66,152);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f().s("#000000").ss(25,1,1).p("AignlIFAPL");
	this.shape_492.setTransform(66.4,153.2);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f().s("#000000").ss(25,1,1).p("AijnxIFIPk");
	this.shape_493.setTransform(66.8,154.5);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f().s("#000000").ss(25,1,1).p("Aion+IFQP9");
	this.shape_494.setTransform(67.2,155.7);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f().s("#000000").ss(25,1,1).p("AiroKIFYQV");
	this.shape_495.setTransform(67.6,156.9);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f().s("#000000").ss(25,1,1).p("AiwoWIFhQt");
	this.shape_496.setTransform(68,158.1);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f().s("#000000").ss(25,1,1).p("Ai0oiIFpRF");
	this.shape_497.setTransform(68.4,159.3);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f().s("#000000").ss(25,1,1).p("Ai4ouIFxRd");
	this.shape_498.setTransform(68.8,160.5);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f().s("#000000").ss(25,1,1).p("Ai8o7IF5R3");
	this.shape_499.setTransform(69.2,161.8);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f().s("#000000").ss(25,1,1).p("AjApHIGBSP");
	this.shape_500.setTransform(69.6,163);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f().s("#000000").ss(25,1,1).p("AjEpTIGJSn");
	this.shape_501.setTransform(70,164.2);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f().s("#000000").ss(25,1,1).p("AjIpfIGRS/");
	this.shape_502.setTransform(70.4,165.4);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f().s("#000000").ss(25,1,1).p("AjMprIGZTX");
	this.shape_503.setTransform(70.8,166.6);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f().s("#000000").ss(25,1,1).p("AjQp3IGhTv");
	this.shape_504.setTransform(71.2,167.8);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f().s("#000000").ss(25,1,1).p("AjUqDIGpUH");
	this.shape_505.setTransform(71.6,169);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f().s("#000000").ss(25,1,1).p("AjYqQIGxUh");
	this.shape_506.setTransform(72,170.3);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f().s("#000000").ss(25,1,1).p("AjcqcIG5U5");
	this.shape_507.setTransform(72.4,171.5);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f().s("#000000").ss(25,1,1).p("AjgqoIHBVR");
	this.shape_508.setTransform(72.8,172.7);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f().s("#000000").ss(25,1,1).p("Ajkq0IHJVp");
	this.shape_509.setTransform(73.2,173.9);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f().s("#000000").ss(25,1,1).p("AjorAIHRWB");
	this.shape_510.setTransform(73.6,175.1);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f().s("#000000").ss(25,1,1).p("AjsrMIHZWZ");
	this.shape_511.setTransform(74,176.3);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f().s("#000000").ss(25,1,1).p("AjwrZIHhWy");
	this.shape_512.setTransform(74.4,177.6);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f().s("#000000").ss(25,1,1).p("Aj0rlIHpXL");
	this.shape_513.setTransform(74.8,178.8);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f().s("#000000").ss(25,1,1).p("Aj4rxIHxXj");
	this.shape_514.setTransform(75.2,180);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f().s("#000000").ss(25,1,1).p("Aj8r9IH5X7");
	this.shape_515.setTransform(75.7,181.2);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f().s("#000000").ss(25,1,1).p("AkAsJIIBYT");
	this.shape_516.setTransform(76.1,182.4);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f().s("#000000").ss(25,1,1).p("AkEsVIIJYr");
	this.shape_517.setTransform(76.5,183.6);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f().s("#000000").ss(25,1,1).p("AkIshIIRZD");
	this.shape_518.setTransform(76.9,184.8);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f().s("#000000").ss(25,1,1).p("AkMsuIIZZc");
	this.shape_519.setTransform(77.3,186.1);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f().s("#000000").ss(25,1,1).p("AkQs6IIhZ1");
	this.shape_520.setTransform(77.7,187.3);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f().s("#000000").ss(25,1,1).p("AkUtGIIpaN");
	this.shape_521.setTransform(78.1,188.5);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f().s("#000000").ss(25,1,1).p("AkYtSIIxal");
	this.shape_522.setTransform(78.5,189.7);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f().s("#000000").ss(25,1,1).p("AkcteII5a9");
	this.shape_523.setTransform(78.9,190.9);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f().s("#000000").ss(25,1,1).p("AkgtqIJBbV");
	this.shape_524.setTransform(79.3,192.1);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f().s("#000000").ss(25,1,1).p("Akkt3IJJbv");
	this.shape_525.setTransform(79.7,193.4);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f().s("#000000").ss(25,1,1).p("AkouDIJRcG");
	this.shape_526.setTransform(80.1,194.6);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f().s("#000000").ss(25,1,1).p("AksuPIJZcf");
	this.shape_527.setTransform(80.5,195.8);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f().s("#000000").ss(25,1,1).p("AkwubIJhc3");
	this.shape_528.setTransform(80.9,197);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f().s("#000000").ss(25,1,1).p("Ak0unIJpdP");
	this.shape_529.setTransform(81.3,198.2);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f().s("#000000").ss(25,1,1).p("Ak4uzIJxdn");
	this.shape_530.setTransform(81.7,199.4);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f().s("#000000").ss(25,1,1).p("Ak8u/IJ5d/");
	this.shape_531.setTransform(82.1,200.6);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f().s("#000000").ss(25,1,1).p("AlAvMIKBeZ");
	this.shape_532.setTransform(82.5,201.9);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f().s("#000000").ss(25,1,1).p("AlEvYIKJex");
	this.shape_533.setTransform(82.9,203.1);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f().s("#000000").ss(25,1,1).p("AlIvkIKRfJ");
	this.shape_534.setTransform(83.3,204.3);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f().s("#000000").ss(25,1,1).p("AlMvwIKZfh");
	this.shape_535.setTransform(83.7,205.5);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f().s("#000000").ss(25,1,1).p("AlQv8IKhf5");
	this.shape_536.setTransform(84.1,206.7);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f().s("#000000").ss(25,1,1).p("AlUwIMAKpAgR");
	this.shape_537.setTransform(84.5,207.9);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f().s("#000000").ss(25,1,1).p("AlYwUMAKxAgq");
	this.shape_538.setTransform(84.9,209.2);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f().s("#000000").ss(25,1,1).p("AlcwhMAK5AhD");
	this.shape_539.setTransform(85.3,210.4);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f().s("#000000").ss(25,1,1).p("AlgwtMALBAhb");
	this.shape_540.setTransform(85.7,211.6);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f().s("#000000").ss(25,1,1).p("Alkw5MALJAhz");
	this.shape_541.setTransform(86.1,212.8);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f().s("#000000").ss(25,1,1).p("AloxFMALRAiL");
	this.shape_542.setTransform(86.5,214);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f().s("#000000").ss(25,1,1).p("AlsxRMALZAij");
	this.shape_543.setTransform(86.9,215.2);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f().s("#000000").ss(25,1,1).p("AlwxeMALhAi9");
	this.shape_544.setTransform(87.3,216.5);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f().s("#000000").ss(25,1,1).p("Al0xpMALpAjU");
	this.shape_545.setTransform(87.7,217.7);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f().s("#000000").ss(25,1,1).p("Al4x2MALxAjt");
	this.shape_546.setTransform(88.1,218.9);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f().s("#000000").ss(25,1,1).p("Al8yCMAL5AkF");
	this.shape_547.setTransform(88.5,220.1);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f().s("#000000").ss(25,1,1).p("AmAyOMAMBAkd");
	this.shape_548.setTransform(88.9,221.3);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f().s("#000000").ss(25,1,1).p("AmEyaMAMJAk1");
	this.shape_549.setTransform(89.3,222.5);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f().s("#000000").ss(25,1,1).p("AmJymMAMTAlN");
	this.shape_550.setTransform(89.7,223.7);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f().s("#000000").ss(25,1,1).p("AmMyzMAMaAln");
	this.shape_551.setTransform(90.1,225);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f().s("#000000").ss(25,1,1).p("AmRy+MAMjAl+");
	this.shape_552.setTransform(90.5,226.2);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f().s("#000000").ss(25,1,1).p("AmUzLMAMqAmX");
	this.shape_553.setTransform(90.9,227.4);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f().s("#000000").ss(25,1,1).p("AmYzXMAMyAmv");
	this.shape_554.setTransform(91.3,228.6);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f().s("#000000").ss(25,1,1).p("AmdzjMAM7AnH");
	this.shape_555.setTransform(91.7,229.8);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f().s("#000000").ss(25,1,1).p("AmgzvMANCAnf");
	this.shape_556.setTransform(92.1,231);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f().s("#000000").ss(25,1,1).p("Amlz8MANLAn4");
	this.shape_557.setTransform(92.5,232.3);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f().s("#000000").ss(25,1,1).p("Amo0IMANSAoR");
	this.shape_558.setTransform(92.9,233.5);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f().s("#000000").ss(25,1,1).p("Ams0UMANaAop");
	this.shape_559.setTransform(93.3,234.7);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f().s("#000000").ss(25,1,1).p("Amx0gMANjApB");
	this.shape_560.setTransform(93.7,235.9);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f().s("#000000").ss(25,1,1).p("Am00sMANqApZ");
	this.shape_561.setTransform(94.1,237.1);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f().s("#000000").ss(25,1,1).p("Am504MANzApx");
	this.shape_562.setTransform(94.5,238.3);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f().s("#000000").ss(25,1,1).p("Am81EMAN6AqJ");
	this.shape_563.setTransform(94.9,239.5);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f().s("#000000").ss(25,1,1).p("AnA1RMAOCAqi");
	this.shape_564.setTransform(95.3,240.8);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f().s("#000000").ss(25,1,1).p("AnF1dMAOLAq7");
	this.shape_565.setTransform(95.7,242);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f().s("#000000").ss(25,1,1).p("AnI1pMAOSArT");
	this.shape_566.setTransform(96.1,243.2);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f().s("#000000").ss(25,1,1).p("AnN11MAObArr");
	this.shape_567.setTransform(96.5,244.4);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f().s("#000000").ss(25,1,1).p("AnR2BMAOjAsD");
	this.shape_568.setTransform(96.9,245.6);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f().s("#000000").ss(25,1,1).p("AnV2NMAOrAsb");
	this.shape_569.setTransform(97.3,246.8);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f().s("#000000").ss(25,1,1).p("AnZ2aMAOzAs1");
	this.shape_570.setTransform(97.7,248.1);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f().s("#000000").ss(25,1,1).p("And2mMAO7AtM");
	this.shape_571.setTransform(98.1,249.3);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f().s("#000000").ss(25,1,1).p("Anh2yMAPDAtl");
	this.shape_572.setTransform(98.5,250.5);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f().s("#000000").ss(25,1,1).p("Anl2+MAPLAt9");
	this.shape_573.setTransform(98.9,251.7);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f().s("#000000").ss(25,1,1).p("Anp3KMAPTAuV");
	this.shape_574.setTransform(99.3,252.9);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f().s("#000000").ss(25,1,1).p("Ant3WMAPbAut");
	this.shape_575.setTransform(99.7,254.1);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f().s("#000000").ss(25,1,1).p("Anx3iMAPjAvF");
	this.shape_576.setTransform(100.1,255.3);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f().s("#000000").ss(25,1,1).p("An13vMAPrAvf");
	this.shape_577.setTransform(100.5,256.6);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f().s("#000000").ss(25,1,1).p("An537MAPzAv3");
	this.shape_578.setTransform(100.9,257.8);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f().s("#000000").ss(25,1,1).p("An94HMAP7AwP");
	this.shape_579.setTransform(101.3,259);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f().s("#000000").ss(25,1,1).p("AoB4TMAQDAwn");
	this.shape_580.setTransform(101.7,260.2);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f().s("#000000").ss(25,1,1).p("AoF4fMAQLAw/");
	this.shape_581.setTransform(102.1,261.4);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f().s("#000000").ss(25,1,1).p("AoJ4rMAQTAxX");
	this.shape_582.setTransform(102.5,262.6);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f().s("#000000").ss(25,1,1).p("AoN44MAQbAxx");
	this.shape_583.setTransform(102.9,263.9);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f().s("#000000").ss(25,1,1).p("AoR5EMAQjAyJ");
	this.shape_584.setTransform(103.3,265.1);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f().s("#000000").ss(25,1,1).p("AoV5QMAQrAyh");
	this.shape_585.setTransform(103.8,266.3);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f().s("#000000").ss(25,1,1).p("AoZ5cMAQzAy5");
	this.shape_586.setTransform(104.2,267.5);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f().s("#000000").ss(25,1,1).p("Aod5oMAQ7AzR");
	this.shape_587.setTransform(104.6,268.7);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f().s("#000000").ss(25,1,1).p("Aoh50MARDAzp");
	this.shape_588.setTransform(105,269.9);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f().s("#000000").ss(25,1,1).p("Aol6AMARLA0C");
	this.shape_589.setTransform(105.4,271.2);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f().s("#000000").ss(25,1,1).p("Aop6NMARTA0b");
	this.shape_590.setTransform(105.8,272.4);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f().s("#000000").ss(25,1,1).p("Aot6ZMARbA0z");
	this.shape_591.setTransform(106.2,273.6);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f().s("#000000").ss(25,1,1).p("Aox6lMARjA1L");
	this.shape_592.setTransform(106.6,274.8);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f().s("#000000").ss(25,1,1).p("Ao16xMARrA1j");
	this.shape_593.setTransform(107,276);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_453}]},9).to({state:[{t:this.shape_454}]},1).to({state:[{t:this.shape_455}]},1).to({state:[{t:this.shape_456}]},1).to({state:[{t:this.shape_457}]},1).to({state:[{t:this.shape_458}]},1).to({state:[{t:this.shape_459}]},1).to({state:[{t:this.shape_460}]},1).to({state:[{t:this.shape_461}]},1).to({state:[{t:this.shape_462}]},1).to({state:[{t:this.shape_463}]},1).to({state:[{t:this.shape_464}]},1).to({state:[{t:this.shape_465}]},1).to({state:[{t:this.shape_466}]},1).to({state:[{t:this.shape_467}]},1).to({state:[{t:this.shape_468}]},1).to({state:[{t:this.shape_469}]},1).to({state:[{t:this.shape_470}]},1).to({state:[{t:this.shape_471}]},1).to({state:[{t:this.shape_472}]},1).to({state:[{t:this.shape_473}]},1).to({state:[{t:this.shape_474}]},1).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_476}]},1).to({state:[{t:this.shape_477}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_479}]},1).to({state:[{t:this.shape_480}]},1).to({state:[{t:this.shape_481}]},1).to({state:[{t:this.shape_482}]},1).to({state:[{t:this.shape_483}]},1).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_485}]},1).to({state:[{t:this.shape_486}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_488}]},1).to({state:[{t:this.shape_489}]},1).to({state:[{t:this.shape_490}]},1).to({state:[{t:this.shape_491}]},1).to({state:[{t:this.shape_492}]},1).to({state:[{t:this.shape_493}]},1).to({state:[{t:this.shape_494}]},1).to({state:[{t:this.shape_495}]},1).to({state:[{t:this.shape_496}]},1).to({state:[{t:this.shape_497}]},1).to({state:[{t:this.shape_498}]},1).to({state:[{t:this.shape_499}]},1).to({state:[{t:this.shape_500}]},1).to({state:[{t:this.shape_501}]},1).to({state:[{t:this.shape_502}]},1).to({state:[{t:this.shape_503}]},1).to({state:[{t:this.shape_504}]},1).to({state:[{t:this.shape_505}]},1).to({state:[{t:this.shape_506}]},1).to({state:[{t:this.shape_507}]},1).to({state:[{t:this.shape_508}]},1).to({state:[{t:this.shape_509}]},1).to({state:[{t:this.shape_510}]},1).to({state:[{t:this.shape_511}]},1).to({state:[{t:this.shape_512}]},1).to({state:[{t:this.shape_513}]},1).to({state:[{t:this.shape_514}]},1).to({state:[{t:this.shape_515}]},1).to({state:[{t:this.shape_516}]},1).to({state:[{t:this.shape_517}]},1).to({state:[{t:this.shape_518}]},1).to({state:[{t:this.shape_519}]},1).to({state:[{t:this.shape_520}]},1).to({state:[{t:this.shape_521}]},1).to({state:[{t:this.shape_522}]},1).to({state:[{t:this.shape_523}]},1).to({state:[{t:this.shape_524}]},1).to({state:[{t:this.shape_525}]},1).to({state:[{t:this.shape_526}]},1).to({state:[{t:this.shape_527}]},1).to({state:[{t:this.shape_528}]},1).to({state:[{t:this.shape_529}]},1).to({state:[{t:this.shape_530}]},1).to({state:[{t:this.shape_531}]},1).to({state:[{t:this.shape_532}]},1).to({state:[{t:this.shape_533}]},1).to({state:[{t:this.shape_534}]},1).to({state:[{t:this.shape_535}]},1).to({state:[{t:this.shape_536}]},1).to({state:[{t:this.shape_537}]},1).to({state:[{t:this.shape_538}]},1).to({state:[{t:this.shape_539}]},1).to({state:[{t:this.shape_540}]},1).to({state:[{t:this.shape_541}]},1).to({state:[{t:this.shape_542}]},1).to({state:[{t:this.shape_543}]},1).to({state:[{t:this.shape_544}]},1).to({state:[{t:this.shape_545}]},1).to({state:[{t:this.shape_546}]},1).to({state:[{t:this.shape_547}]},1).to({state:[{t:this.shape_548}]},1).to({state:[{t:this.shape_549}]},1).to({state:[{t:this.shape_550}]},1).to({state:[{t:this.shape_551}]},1).to({state:[{t:this.shape_552}]},1).to({state:[{t:this.shape_553}]},1).to({state:[{t:this.shape_554}]},1).to({state:[{t:this.shape_555}]},1).to({state:[{t:this.shape_556}]},1).to({state:[{t:this.shape_557}]},1).to({state:[{t:this.shape_558}]},1).to({state:[{t:this.shape_559}]},1).to({state:[{t:this.shape_560}]},1).to({state:[{t:this.shape_561}]},1).to({state:[{t:this.shape_562}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_565}]},1).to({state:[{t:this.shape_566}]},1).to({state:[{t:this.shape_567}]},1).to({state:[{t:this.shape_568}]},1).to({state:[{t:this.shape_569}]},1).to({state:[{t:this.shape_570}]},1).to({state:[{t:this.shape_571}]},1).to({state:[{t:this.shape_572}]},1).to({state:[{t:this.shape_573}]},1).to({state:[{t:this.shape_574}]},1).to({state:[{t:this.shape_575}]},1).to({state:[{t:this.shape_576}]},1).to({state:[{t:this.shape_577}]},1).to({state:[{t:this.shape_578}]},1).to({state:[{t:this.shape_579}]},1).to({state:[{t:this.shape_580}]},1).to({state:[{t:this.shape_581}]},1).to({state:[{t:this.shape_582}]},1).to({state:[{t:this.shape_583}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_586}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_588}]},1).to({state:[{t:this.shape_589}]},1).to({state:[{t:this.shape_590}]},1).to({state:[{t:this.shape_591}]},1).to({state:[{t:this.shape_592}]},1).to({state:[{t:this.shape_593}]},1).wait(556));

	// Base
	this.instance_5 = new lib.basew("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(275,275);
	this.instance_5.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(705));

	// Background
	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_594.setTransform(275,275,3.373,2.543);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_595.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_595},{t:this.shape_594}]}).wait(705));

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