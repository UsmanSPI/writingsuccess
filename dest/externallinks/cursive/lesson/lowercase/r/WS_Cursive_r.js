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


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtCOFQh7hGAAiWQAAg1A4ihIFCrnIhhikQkhGDiIB0Qg6Ayg9AAQiWAAAAh9QAAg4A7g7IDkkNQF6nhAYgXQBRg3AbgBQCVAAAACWQAAAmg6BYQDNFTAAA7QAAB5i/FeQi7FdAAB9IASASQJ7AANftUIDFjDQCMiFBMAAQBhABAAByQAAApkTFRQiECjjECnQjHCvjiCKQjxCVjjBSQj5BZjNAAQibgBhkg3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.1,-95.6,274.2,191.3);


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


(lib.ar_triangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhuhDIABAAQAtAYBAAAQA/AAAtgYIACgBIABAAIhuCJg");
	this.shape.setTransform(0,4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.1,-2.6,22.3,13.8);


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


(lib.ar5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAAgYIAAAx");
	this.shape.setTransform(0,-101.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AAAAdIAAg6");
	this.shape_1.setTransform(0,-101.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AAAAiIAAhD");
	this.shape_2.setTransform(0,-100.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AAAAmIAAhL");
	this.shape_3.setTransform(0,-100.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AAAArIAAhV");
	this.shape_4.setTransform(0,-99.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AAAAvIAAhd");
	this.shape_5.setTransform(0,-99.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AAAA0IAAhm");
	this.shape_6.setTransform(0,-98.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AAAA4IAAhv");
	this.shape_7.setTransform(0,-98.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AAAA8IAAh3");
	this.shape_8.setTransform(0,-98);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AAABBIAAiB");
	this.shape_9.setTransform(0,-97.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AAABFIAAiJ");
	this.shape_10.setTransform(0,-97.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AAABKIAAiT");
	this.shape_11.setTransform(0,-96.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AAABOIAAib");
	this.shape_12.setTransform(0,-96.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AAABTIAAil");
	this.shape_13.setTransform(0,-95.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AAABXIAAit");
	this.shape_14.setTransform(0,-95.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AAABbIABi1");
	this.shape_15.setTransform(0,-94.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AAABgIABi/");
	this.shape_16.setTransform(0,-94.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AAABkIABjH");
	this.shape_17.setTransform(0,-94);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AAABpIABjR");
	this.shape_18.setTransform(0,-93.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AAABtIABjZ");
	this.shape_19.setTransform(0,-93.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AAABxIABji");
	this.shape_20.setTransform(0,-92.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AAAB2IABjr");
	this.shape_21.setTransform(0,-92.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AAAB6IABjz");
	this.shape_22.setTransform(0,-91.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AAAB/IABj9");
	this.shape_23.setTransform(0,-91.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AAACDIABkF");
	this.shape_24.setTransform(0,-90.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AAACHIABkN");
	this.shape_25.setTransform(-0.1,-90.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AAACMIABkX");
	this.shape_26.setTransform(-0.1,-90);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AAACQIABkg");
	this.shape_27.setTransform(-0.1,-89.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AAACVIABkp");
	this.shape_28.setTransform(-0.1,-89.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AAACZIABkx");
	this.shape_29.setTransform(-0.1,-88.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AAACeIABk7");
	this.shape_30.setTransform(-0.1,-88.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AAACiIABlD");
	this.shape_31.setTransform(-0.1,-87.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AAACnIABlM");
	this.shape_32.setTransform(-0.1,-87.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AAACrIABlV");
	this.shape_33.setTransform(-0.1,-86.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AAACvIABld");
	this.shape_34.setTransform(-0.1,-86.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AAAC0IABln");
	this.shape_35.setTransform(-0.1,-86.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AAAC4IABlv");
	this.shape_36.setTransform(-0.1,-85.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AAAC9IABl5");
	this.shape_37.setTransform(-0.1,-85.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AAADBIABmB");
	this.shape_38.setTransform(-0.1,-84.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AAADGIABmL");
	this.shape_39.setTransform(-0.1,-84.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AAADKIABmT");
	this.shape_40.setTransform(-0.1,-83.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AAADOIABmb");
	this.shape_41.setTransform(-0.1,-83.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AAADTIABml");
	this.shape_42.setTransform(-0.1,-83);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AAADXIABmt");
	this.shape_43.setTransform(-0.1,-82.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AAADcIABm3");
	this.shape_44.setTransform(-0.1,-82.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AAADgIABm/");
	this.shape_45.setTransform(-0.1,-81.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AAADlIABnI");
	this.shape_46.setTransform(-0.1,-81.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AAADpIABnR");
	this.shape_47.setTransform(-0.1,-80.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AAADtIABnZ");
	this.shape_48.setTransform(-0.1,-80.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AAADyIABnj");
	this.shape_49.setTransform(-0.1,-79.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AAAD2IABnr");
	this.shape_50.setTransform(-0.1,-79.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AAAD6IABnz");
	this.shape_51.setTransform(-0.1,-79);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AAAD/IABn9");
	this.shape_52.setTransform(-0.1,-78.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AAAEDIABoG");
	this.shape_53.setTransform(-0.1,-78.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AAAEIIABoP");
	this.shape_54.setTransform(-0.1,-77.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AgBEMIACoX");
	this.shape_55.setTransform(-0.1,-77.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AgBERIACoh");
	this.shape_56.setTransform(-0.1,-76.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AgBEVIACop");
	this.shape_57.setTransform(-0.1,-76.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AgBEaIACoy");
	this.shape_58.setTransform(-0.1,-75.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AABkdIgCI7");
	this.shape_59.setTransform(-0.1,-75.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).wait(1));

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.3,-103.8,1,1,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-50.6},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.1,-106.6,22.3,13.8);


(lib.ar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(48.5,-50.6,1,1,65.5,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0.1,rotation:31.8,guide:{path:[48.5,-50.4,-9.2,-28.3,-42.7,42.1]}},89).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AA1kPIBIhMICkCaIhIBMg");
	var mask_graphics_1 = new cjs.Graphics().p("Ah6ghIBShXICjCaIhSBXg");
	var mask_graphics_2 = new cjs.Graphics().p("Ah/gcIBchhICjCaIhcBhg");
	var mask_graphics_3 = new cjs.Graphics().p("AiEgWIBmhsICjCZIhmBsg");
	var mask_graphics_4 = new cjs.Graphics().p("AiJgRIBwh3ICjCaIhwB2g");
	var mask_graphics_5 = new cjs.Graphics().p("AiOgMIB6iBICjCaIh6CBg");
	var mask_graphics_6 = new cjs.Graphics().p("AiTgHICEiLICjCaIiECLg");
	var mask_graphics_7 = new cjs.Graphics().p("AiYgBICOiWICjCZIiOCWg");
	var mask_graphics_8 = new cjs.Graphics().p("AidADICYigICjCbIiYCgg");
	var mask_graphics_9 = new cjs.Graphics().p("AiiAJICiirICjCbIiiCqg");
	var mask_graphics_10 = new cjs.Graphics().p("AinAOICri1ICkCaIirC1g");
	var mask_graphics_11 = new cjs.Graphics().p("AisATIC1jAICkCbIi1DAg");
	var mask_graphics_12 = new cjs.Graphics().p("AixAZIC/jLICkCbIi/DKg");
	var mask_graphics_13 = new cjs.Graphics().p("Ai2AeIDJjVICkCbIjJDUg");
	var mask_graphics_14 = new cjs.Graphics().p("Ai7AjIDTjgICkCbIjTDgg");
	var mask_graphics_15 = new cjs.Graphics().p("AjAAoIDdjqICkCaIjdDrg");
	var mask_graphics_16 = new cjs.Graphics().p("AjFAuIDnj1ICkCaIjnD1g");
	var mask_graphics_17 = new cjs.Graphics().p("AjKAzIDxj/ICkCaIjxD/g");
	var mask_graphics_18 = new cjs.Graphics().p("AjPA4ID7kKICkCbIj7EKg");
	var mask_graphics_19 = new cjs.Graphics().p("AjUA9IEFkUICkCaIkFEVg");
	var mask_graphics_20 = new cjs.Graphics().p("AjZBDIEPkfICkCaIkPEgg");
	var mask_graphics_21 = new cjs.Graphics().p("AjeBIIEZkqICkCbIkZEqg");
	var mask_graphics_22 = new cjs.Graphics().p("AjjBNIEjk0ICkCaIkjE1g");
	var mask_graphics_23 = new cjs.Graphics().p("AjoBTIEtk/ICkCaIksE/g");
	var mask_graphics_24 = new cjs.Graphics().p("AjtBYIE3lKICkCbIk2FKg");
	var mask_graphics_25 = new cjs.Graphics().p("AjyBdIFBlUICkCaIlBFVg");
	var mask_graphics_26 = new cjs.Graphics().p("Aj3BjIFLlfICkCaIlLFfg");
	var mask_graphics_27 = new cjs.Graphics().p("Aj8BoIFVlpICkCaIlVFpg");
	var mask_graphics_28 = new cjs.Graphics().p("AkBBtIFfl0ICkCbIlfF0g");
	var mask_graphics_29 = new cjs.Graphics().p("AkGByIFpl+ICkCaIloF/g");
	var mask_graphics_30 = new cjs.Graphics().p("AkLB3IFzmIICkCaIlyGKg");
	var mask_graphics_31 = new cjs.Graphics().p("AkQB9IF9mUICkCbIl8GUg");
	var mask_graphics_32 = new cjs.Graphics().p("AkVCCIGHmeICkCaImGGfg");
	var mask_graphics_33 = new cjs.Graphics().p("AkaCIIGRmpICkCaImQGpg");
	var mask_graphics_34 = new cjs.Graphics().p("AkfCNIGbm0ICkCbImbG0g");
	var mask_graphics_35 = new cjs.Graphics().p("AkkCSIGlm+ICkCbImlG+g");
	var mask_graphics_36 = new cjs.Graphics().p("AkpCYIGvnKICkCbImvHJg");
	var mask_graphics_37 = new cjs.Graphics().p("AkuCdIG5nUICkCbIm5HUg");
	var mask_graphics_38 = new cjs.Graphics().p("AkzCjIHDnfICkCbInDHeg");
	var mask_graphics_39 = new cjs.Graphics().p("Ak4CoIHNnpICkCbInMHog");
	var mask_graphics_40 = new cjs.Graphics().p("Ak9CtIHXn0ICkCbInWH0g");
	var mask_graphics_41 = new cjs.Graphics().p("AlCCyIHhn+ICkCbIngH+g");
	var mask_graphics_42 = new cjs.Graphics().p("AlHC4IHroJICkCbInqIIg");
	var mask_graphics_43 = new cjs.Graphics().p("AlMC9IH1oUICkCbIn1ITg");
	var mask_graphics_44 = new cjs.Graphics().p("AlRDCIH/oeICkCbIn/Ieg");
	var mask_graphics_45 = new cjs.Graphics().p("AlWDHIIIooIClCaIoJIpg");
	var mask_graphics_46 = new cjs.Graphics().p("AlbDNIISo0IClCbIoTI0g");
	var mask_graphics_47 = new cjs.Graphics().p("AlgDSIIco+IClCbIodI+g");
	var mask_graphics_48 = new cjs.Graphics().p("AllDYIImpJIClCbIonJIg");
	var mask_graphics_49 = new cjs.Graphics().p("AlqDdIIwpTIClCaIoxJTg");
	var mask_graphics_50 = new cjs.Graphics().p("AlvDiII6peIClCbIo7Jeg");
	var mask_graphics_51 = new cjs.Graphics().p("Al0DnIJEpoIClCbIpFJog");
	var mask_graphics_52 = new cjs.Graphics().p("Al5DsIJOpyIClCaIpPJzg");
	var mask_graphics_53 = new cjs.Graphics().p("Al+DyIJYp+IClCbIpZJ9g");
	var mask_graphics_54 = new cjs.Graphics().p("AmDD3IJiqIIClCbIpjKIg");
	var mask_graphics_55 = new cjs.Graphics().p("AmID8IJsqSIClCaIptKTg");
	var mask_graphics_56 = new cjs.Graphics().p("AmNECIJ2qeIClCbIp3Keg");
	var mask_graphics_57 = new cjs.Graphics().p("AmSEHIKAqoIClCbIqBKog");
	var mask_graphics_58 = new cjs.Graphics().p("AmXEMIKKqyIClCbIqLKyg");
	var mask_graphics_59 = new cjs.Graphics().p("AmcESIKUq+IClCcIqVK9g");
	var mask_graphics_60 = new cjs.Graphics().p("AmhEXIKerIIClCbIqfLIg");
	var mask_graphics_61 = new cjs.Graphics().p("AmmEcIKorSIClCbIqpLSg");
	var mask_graphics_62 = new cjs.Graphics().p("AmrEhIKyrdIClCcIqzLcg");
	var mask_graphics_63 = new cjs.Graphics().p("AmwEnIK8roIClCbIq9Log");
	var mask_graphics_64 = new cjs.Graphics().p("Am1EtILGrzIClCbIrHLyg");
	var mask_graphics_65 = new cjs.Graphics().p("Am6EyILQr9IClCbIrRL8g");
	var mask_graphics_66 = new cjs.Graphics().p("Am/E3ILasIIClCbIrbMIg");
	var mask_graphics_67 = new cjs.Graphics().p("AnEE8ILksSIClCbIrlMSg");
	var mask_graphics_68 = new cjs.Graphics().p("AnJFBILuscIClCbIrvMcg");
	var mask_graphics_69 = new cjs.Graphics().p("AnOFGIL4snIClCcIr5Mmg");
	var mask_graphics_70 = new cjs.Graphics().p("AnTFMIMCsyIClCbIsDMyg");
	var mask_graphics_71 = new cjs.Graphics().p("AnYFRIMMs8IClCbIsMM8g");
	var mask_graphics_72 = new cjs.Graphics().p("AndFXIMWtIIClCcIsWNGg");
	var mask_graphics_73 = new cjs.Graphics().p("AniFcIMgtSIClCbIsgNSg");
	var mask_graphics_74 = new cjs.Graphics().p("AnnFhIMqtcIClCbIsqNcg");
	var mask_graphics_75 = new cjs.Graphics().p("AnsFmIM0tmIClCaIs1Nng");
	var mask_graphics_76 = new cjs.Graphics().p("AnxFsIM+tyIClCbIs/Nyg");
	var mask_graphics_77 = new cjs.Graphics().p("An2FxINIt8IClCaItJN9g");
	var mask_graphics_78 = new cjs.Graphics().p("An7F2INSuGIClCaItTOIg");
	var mask_graphics_79 = new cjs.Graphics().p("AoAF8INcuSIClCbItdOSg");
	var mask_graphics_80 = new cjs.Graphics().p("AoFGBINmucIClCbItmOcg");
	var mask_graphics_81 = new cjs.Graphics().p("AoKGHINwunIClCbItwOmg");
	var mask_graphics_82 = new cjs.Graphics().p("AoPGMIN6uyIClCbIt6Oyg");
	var mask_graphics_83 = new cjs.Graphics().p("AoUGRIOEu8IClCbIuEO8g");
	var mask_graphics_84 = new cjs.Graphics().p("AoZGWIOOvGIClCbIuPPGg");
	var mask_graphics_85 = new cjs.Graphics().p("AoeGcIOYvRIClCaIuZPSg");
	var mask_graphics_86 = new cjs.Graphics().p("AojGhIOivcIClCbIujPcg");
	var mask_graphics_87 = new cjs.Graphics().p("AooGmIOsvmIClCbIutPmg");
	var mask_graphics_88 = new cjs.Graphics().p("AotGrIO2vwIClCaIu3Pxg");
	var mask_graphics_89 = new cjs.Graphics().p("AoyGxIPAv8IClCbIvAP8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:28.9,y:-34.8}).wait(1).to({graphics:mask_graphics_1,x:45.5,y:-57.6}).wait(1).to({graphics:mask_graphics_2,x:45,y:-57.1}).wait(1).to({graphics:mask_graphics_3,x:44.5,y:-56.5}).wait(1).to({graphics:mask_graphics_4,x:44,y:-56}).wait(1).to({graphics:mask_graphics_5,x:43.5,y:-55.5}).wait(1).to({graphics:mask_graphics_6,x:43,y:-54.9}).wait(1).to({graphics:mask_graphics_7,x:42.5,y:-54.4}).wait(1).to({graphics:mask_graphics_8,x:42,y:-53.9}).wait(1).to({graphics:mask_graphics_9,x:41.5,y:-53.3}).wait(1).to({graphics:mask_graphics_10,x:41,y:-52.8}).wait(1).to({graphics:mask_graphics_11,x:40.5,y:-52.3}).wait(1).to({graphics:mask_graphics_12,x:40,y:-51.8}).wait(1).to({graphics:mask_graphics_13,x:39.5,y:-51.3}).wait(1).to({graphics:mask_graphics_14,x:39,y:-50.7}).wait(1).to({graphics:mask_graphics_15,x:38.5,y:-50.2}).wait(1).to({graphics:mask_graphics_16,x:38,y:-49.7}).wait(1).to({graphics:mask_graphics_17,x:37.5,y:-49.1}).wait(1).to({graphics:mask_graphics_18,x:37,y:-48.6}).wait(1).to({graphics:mask_graphics_19,x:36.5,y:-48.1}).wait(1).to({graphics:mask_graphics_20,x:36,y:-47.5}).wait(1).to({graphics:mask_graphics_21,x:35.5,y:-47}).wait(1).to({graphics:mask_graphics_22,x:35,y:-46.5}).wait(1).to({graphics:mask_graphics_23,x:34.5,y:-46}).wait(1).to({graphics:mask_graphics_24,x:34,y:-45.4}).wait(1).to({graphics:mask_graphics_25,x:33.5,y:-44.9}).wait(1).to({graphics:mask_graphics_26,x:33,y:-44.4}).wait(1).to({graphics:mask_graphics_27,x:32.5,y:-43.8}).wait(1).to({graphics:mask_graphics_28,x:32,y:-43.3}).wait(1).to({graphics:mask_graphics_29,x:31.5,y:-42.8}).wait(1).to({graphics:mask_graphics_30,x:31,y:-42.2}).wait(1).to({graphics:mask_graphics_31,x:30.5,y:-41.7}).wait(1).to({graphics:mask_graphics_32,x:30,y:-41.2}).wait(1).to({graphics:mask_graphics_33,x:29.5,y:-40.7}).wait(1).to({graphics:mask_graphics_34,x:29,y:-40.2}).wait(1).to({graphics:mask_graphics_35,x:28.5,y:-39.6}).wait(1).to({graphics:mask_graphics_36,x:28,y:-39.1}).wait(1).to({graphics:mask_graphics_37,x:27.5,y:-38.6}).wait(1).to({graphics:mask_graphics_38,x:27,y:-38}).wait(1).to({graphics:mask_graphics_39,x:26.5,y:-37.5}).wait(1).to({graphics:mask_graphics_40,x:26,y:-37}).wait(1).to({graphics:mask_graphics_41,x:25.5,y:-36.4}).wait(1).to({graphics:mask_graphics_42,x:25,y:-35.9}).wait(1).to({graphics:mask_graphics_43,x:24.5,y:-35.4}).wait(1).to({graphics:mask_graphics_44,x:24,y:-34.9}).wait(1).to({graphics:mask_graphics_45,x:23.5,y:-34.3}).wait(1).to({graphics:mask_graphics_46,x:23,y:-33.8}).wait(1).to({graphics:mask_graphics_47,x:22.5,y:-33.3}).wait(1).to({graphics:mask_graphics_48,x:22,y:-32.7}).wait(1).to({graphics:mask_graphics_49,x:21.5,y:-32.2}).wait(1).to({graphics:mask_graphics_50,x:21,y:-31.7}).wait(1).to({graphics:mask_graphics_51,x:20.5,y:-31.1}).wait(1).to({graphics:mask_graphics_52,x:20,y:-30.6}).wait(1).to({graphics:mask_graphics_53,x:19.5,y:-30.1}).wait(1).to({graphics:mask_graphics_54,x:19,y:-29.6}).wait(1).to({graphics:mask_graphics_55,x:18.5,y:-29}).wait(1).to({graphics:mask_graphics_56,x:18,y:-28.5}).wait(1).to({graphics:mask_graphics_57,x:17.5,y:-28}).wait(1).to({graphics:mask_graphics_58,x:17,y:-27.5}).wait(1).to({graphics:mask_graphics_59,x:16.5,y:-26.9}).wait(1).to({graphics:mask_graphics_60,x:16,y:-26.4}).wait(1).to({graphics:mask_graphics_61,x:15.5,y:-25.9}).wait(1).to({graphics:mask_graphics_62,x:15,y:-25.3}).wait(1).to({graphics:mask_graphics_63,x:14.5,y:-24.8}).wait(1).to({graphics:mask_graphics_64,x:14,y:-24.3}).wait(1).to({graphics:mask_graphics_65,x:13.5,y:-23.8}).wait(1).to({graphics:mask_graphics_66,x:13,y:-23.2}).wait(1).to({graphics:mask_graphics_67,x:12.5,y:-22.7}).wait(1).to({graphics:mask_graphics_68,x:12,y:-22.2}).wait(1).to({graphics:mask_graphics_69,x:11.5,y:-21.6}).wait(1).to({graphics:mask_graphics_70,x:11,y:-21.1}).wait(1).to({graphics:mask_graphics_71,x:10.5,y:-20.6}).wait(1).to({graphics:mask_graphics_72,x:10,y:-20}).wait(1).to({graphics:mask_graphics_73,x:9.5,y:-19.5}).wait(1).to({graphics:mask_graphics_74,x:9,y:-19}).wait(1).to({graphics:mask_graphics_75,x:8.5,y:-18.5}).wait(1).to({graphics:mask_graphics_76,x:8,y:-17.9}).wait(1).to({graphics:mask_graphics_77,x:7.5,y:-17.4}).wait(1).to({graphics:mask_graphics_78,x:7,y:-16.9}).wait(1).to({graphics:mask_graphics_79,x:6.5,y:-16.4}).wait(1).to({graphics:mask_graphics_80,x:6,y:-15.8}).wait(1).to({graphics:mask_graphics_81,x:5.5,y:-15.3}).wait(1).to({graphics:mask_graphics_82,x:5,y:-14.8}).wait(1).to({graphics:mask_graphics_83,x:4.5,y:-14.2}).wait(1).to({graphics:mask_graphics_84,x:4,y:-13.7}).wait(1).to({graphics:mask_graphics_85,x:3.5,y:-13.2}).wait(1).to({graphics:mask_graphics_86,x:3,y:-12.7}).wait(1).to({graphics:mask_graphics_87,x:2.5,y:-12.1}).wait(1).to({graphics:mask_graphics_88,x:2,y:-11.6}).wait(1).to({graphics:mask_graphics_89,x:1.5,y:-11.1}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AnIHQQFQrCJBjd");
	this.shape.setTransform(2.8,-4.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.2,-61.9,21.2,20.3);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-27,21.4,1,1,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:33.2,y:-27},64).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AiggCIA+gvIBvCTIg9Aug");
	var mask_graphics_1 = new cjs.Graphics().p("AhaguIBGg1IBvCSIhGA1g");
	var mask_graphics_2 = new cjs.Graphics().p("AhfgrIBQg8IBvCTIhQA8g");
	var mask_graphics_3 = new cjs.Graphics().p("AhjgnIBYhDIBvCSIhYBDg");
	var mask_graphics_4 = new cjs.Graphics().p("AhngkIBghJIBvCSIhgBJg");
	var mask_graphics_5 = new cjs.Graphics().p("AhrghIBohQIBwCTIhqBQg");
	var mask_graphics_6 = new cjs.Graphics().p("AhwgdIBxhXIBwCSIhxBXg");
	var mask_graphics_7 = new cjs.Graphics().p("Ah0gaIB5hdIBwCSIh5Bdg");
	var mask_graphics_8 = new cjs.Graphics().p("Ah4gXICBhkIBxCTIiDBkg");
	var mask_graphics_9 = new cjs.Graphics().p("Ah9gUICLhqIBwCTIiLBqg");
	var mask_graphics_10 = new cjs.Graphics().p("AiBgRICThwIBwCSIiTBxg");
	var mask_graphics_11 = new cjs.Graphics().p("AiGgNICdh3IBwCSIidB3g");
	var mask_graphics_12 = new cjs.Graphics().p("AiKgKIClh9IBwCSIilB9g");
	var mask_graphics_13 = new cjs.Graphics().p("AiOgHICtiEIBwCTIitCEg");
	var mask_graphics_14 = new cjs.Graphics().p("AiTgDIC3iLIBvCSIi1CLg");
	var mask_graphics_15 = new cjs.Graphics().p("AiXAAIC/iSIBwCTIi/CRg");
	var mask_graphics_16 = new cjs.Graphics().p("AibACIDHiXIBwCUIjHCXg");
	var mask_graphics_17 = new cjs.Graphics().p("AigAGIDRieIBwCTIjQCeg");
	var mask_graphics_18 = new cjs.Graphics().p("AikAJIDZikIBwCTIjZCkg");
	var mask_graphics_19 = new cjs.Graphics().p("AioAMIDhirIBwCUIjhCqg");
	var mask_graphics_20 = new cjs.Graphics().p("AisAPIDpixIBwCUIjpCxg");
	var mask_graphics_21 = new cjs.Graphics().p("AixATIDzi4IBwCTIjzC4g");
	var mask_graphics_22 = new cjs.Graphics().p("Ai1AWID7i+IBwCTIj7C+g");
	var mask_graphics_23 = new cjs.Graphics().p("Ai5AZIEEjEIBvCTIkEDFg");
	var mask_graphics_24 = new cjs.Graphics().p("Ai+AcIENjLIBwCUIkNDLg");
	var mask_graphics_25 = new cjs.Graphics().p("AjCAgIEVjSIBwCTIkVDSg");
	var mask_graphics_26 = new cjs.Graphics().p("AjGAjIEejZIBvCUIkeDZg");
	var mask_graphics_27 = new cjs.Graphics().p("AjLAmIEnjfIBwCUIknDfg");
	var mask_graphics_28 = new cjs.Graphics().p("AjPApIEvjlIBwCUIkvDlg");
	var mask_graphics_29 = new cjs.Graphics().p("AjTAtIE3jsIBwCTIk3Dsg");
	var mask_graphics_30 = new cjs.Graphics().p("AjYAwIFBjyIBwCTIlBDyg");
	var mask_graphics_31 = new cjs.Graphics().p("AjcAzIFJj5IBwCUIlJD5g");
	var mask_graphics_32 = new cjs.Graphics().p("AjhA2IFSj/IBxCTIlSEAg");
	var mask_graphics_33 = new cjs.Graphics().p("AjlA6IFbkGIBwCTIlbEGg");
	var mask_graphics_34 = new cjs.Graphics().p("AjpA9IFjkNIBwCUIljENg");
	var mask_graphics_35 = new cjs.Graphics().p("AjuBAIFtkTIBvCTIlrEUg");
	var mask_graphics_36 = new cjs.Graphics().p("AjyBEIF0kaIBxCTIl1Eag");
	var mask_graphics_37 = new cjs.Graphics().p("Aj2BHIF9khIBwCUIl9Ehg");
	var mask_graphics_38 = new cjs.Graphics().p("Aj6BKIGFknIBwCUImFEng");
	var mask_graphics_39 = new cjs.Graphics().p("Aj/BOIGOkuIBxCUImPEtg");
	var mask_graphics_40 = new cjs.Graphics().p("AkDBRIGXk1IBwCUImXE1g");
	var mask_graphics_41 = new cjs.Graphics().p("AkHBUIGfk7IBwCUImfE7g");
	var mask_graphics_42 = new cjs.Graphics().p("AkMBXIGplBIBwCUImpFBg");
	var mask_graphics_43 = new cjs.Graphics().p("AkQBaIGxlHIBwCTImxFIg");
	var mask_graphics_44 = new cjs.Graphics().p("AkUBeIG5lOIBwCTIm5FOg");
	var mask_graphics_45 = new cjs.Graphics().p("AkYBhIHClVIBvCUInCFVg");
	var mask_graphics_46 = new cjs.Graphics().p("AkdBkIHLlbIBwCTInLFcg");
	var mask_graphics_47 = new cjs.Graphics().p("AkhBoIHTliIBwCTInTFig");
	var mask_graphics_48 = new cjs.Graphics().p("AklBrIHclpIBwCUIndFpg");
	var mask_graphics_49 = new cjs.Graphics().p("AkqBuIHllvIBwCUInlFvg");
	var mask_graphics_50 = new cjs.Graphics().p("AkuByIHtl2IBwCUIntF1g");
	var mask_graphics_51 = new cjs.Graphics().p("AkzB1IH3l8IBwCTIn3F9g");
	var mask_graphics_52 = new cjs.Graphics().p("Ak3B4IH/mDIBwCUIn/GDg");
	var mask_graphics_53 = new cjs.Graphics().p("Ak7B8IIHmKIBwCTIoHGKg");
	var mask_graphics_54 = new cjs.Graphics().p("AlAB/IIRmQIBvCTIoPGQg");
	var mask_graphics_55 = new cjs.Graphics().p("AlECCIIZmXIBwCUIoZGWg");
	var mask_graphics_56 = new cjs.Graphics().p("AlICFIIhmdIBwCUIohGdg");
	var mask_graphics_57 = new cjs.Graphics().p("AlNCIIIrmjIBvCUIopGjg");
	var mask_graphics_58 = new cjs.Graphics().p("AlRCMIIzmqIBwCTIozGqg");
	var mask_graphics_59 = new cjs.Graphics().p("AlVCPII7mxIBwCUIo7Gxg");
	var mask_graphics_60 = new cjs.Graphics().p("AlZCSIJDm3IBwCUIpDG3g");
	var mask_graphics_61 = new cjs.Graphics().p("AleCWIJNm+IBwCTIpNG+g");
	var mask_graphics_62 = new cjs.Graphics().p("AliCZIJVnEIBwCTIpVHEg");
	var mask_graphics_63 = new cjs.Graphics().p("AlmCcIJdnLIBxCUIpfHLg");
	var mask_graphics_64 = new cjs.Graphics().p("AlrCgIJnnSIBwCTIpnHSg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-16.1,y:14.4}).wait(1).to({graphics:mask_graphics_1,x:-23.1,y:18.9}).wait(1).to({graphics:mask_graphics_2,x:-22.6,y:18.5}).wait(1).to({graphics:mask_graphics_3,x:-22.2,y:18.2}).wait(1).to({graphics:mask_graphics_4,x:-21.7,y:17.8}).wait(1).to({graphics:mask_graphics_5,x:-21.3,y:17.5}).wait(1).to({graphics:mask_graphics_6,x:-20.8,y:17.2}).wait(1).to({graphics:mask_graphics_7,x:-20.4,y:16.8}).wait(1).to({graphics:mask_graphics_8,x:-20,y:16.5}).wait(1).to({graphics:mask_graphics_9,x:-19.5,y:16.2}).wait(1).to({graphics:mask_graphics_10,x:-19.1,y:15.8}).wait(1).to({graphics:mask_graphics_11,x:-18.7,y:15.5}).wait(1).to({graphics:mask_graphics_12,x:-18.2,y:15.2}).wait(1).to({graphics:mask_graphics_13,x:-17.8,y:14.8}).wait(1).to({graphics:mask_graphics_14,x:-17.3,y:14.5}).wait(1).to({graphics:mask_graphics_15,x:-16.9,y:14.2}).wait(1).to({graphics:mask_graphics_16,x:-16.5,y:13.8}).wait(1).to({graphics:mask_graphics_17,x:-16,y:13.5}).wait(1).to({graphics:mask_graphics_18,x:-15.6,y:13.1}).wait(1).to({graphics:mask_graphics_19,x:-15.2,y:12.8}).wait(1).to({graphics:mask_graphics_20,x:-14.7,y:12.5}).wait(1).to({graphics:mask_graphics_21,x:-14.3,y:12.1}).wait(1).to({graphics:mask_graphics_22,x:-13.8,y:11.8}).wait(1).to({graphics:mask_graphics_23,x:-13.4,y:11.5}).wait(1).to({graphics:mask_graphics_24,x:-13,y:11.1}).wait(1).to({graphics:mask_graphics_25,x:-12.5,y:10.8}).wait(1).to({graphics:mask_graphics_26,x:-12.1,y:10.5}).wait(1).to({graphics:mask_graphics_27,x:-11.7,y:10.1}).wait(1).to({graphics:mask_graphics_28,x:-11.2,y:9.8}).wait(1).to({graphics:mask_graphics_29,x:-10.8,y:9.4}).wait(1).to({graphics:mask_graphics_30,x:-10.3,y:9.1}).wait(1).to({graphics:mask_graphics_31,x:-9.9,y:8.8}).wait(1).to({graphics:mask_graphics_32,x:-9.4,y:8.5}).wait(1).to({graphics:mask_graphics_33,x:-9,y:8.1}).wait(1).to({graphics:mask_graphics_34,x:-8.6,y:7.8}).wait(1).to({graphics:mask_graphics_35,x:-8.1,y:7.5}).wait(1).to({graphics:mask_graphics_36,x:-7.7,y:7.1}).wait(1).to({graphics:mask_graphics_37,x:-7.2,y:6.8}).wait(1).to({graphics:mask_graphics_38,x:-6.8,y:6.4}).wait(1).to({graphics:mask_graphics_39,x:-6.4,y:6.1}).wait(1).to({graphics:mask_graphics_40,x:-5.9,y:5.8}).wait(1).to({graphics:mask_graphics_41,x:-5.5,y:5.4}).wait(1).to({graphics:mask_graphics_42,x:-5.1,y:5.1}).wait(1).to({graphics:mask_graphics_43,x:-4.6,y:4.8}).wait(1).to({graphics:mask_graphics_44,x:-4.2,y:4.4}).wait(1).to({graphics:mask_graphics_45,x:-3.7,y:4.1}).wait(1).to({graphics:mask_graphics_46,x:-3.3,y:3.8}).wait(1).to({graphics:mask_graphics_47,x:-2.9,y:3.4}).wait(1).to({graphics:mask_graphics_48,x:-2.4,y:3.1}).wait(1).to({graphics:mask_graphics_49,x:-2,y:2.7}).wait(1).to({graphics:mask_graphics_50,x:-1.6,y:2.4}).wait(1).to({graphics:mask_graphics_51,x:-1.1,y:2.1}).wait(1).to({graphics:mask_graphics_52,x:-0.7,y:1.7}).wait(1).to({graphics:mask_graphics_53,x:-0.2,y:1.4}).wait(1).to({graphics:mask_graphics_54,x:0.2,y:1.1}).wait(1).to({graphics:mask_graphics_55,x:0.6,y:0.7}).wait(1).to({graphics:mask_graphics_56,x:1.1,y:0.4}).wait(1).to({graphics:mask_graphics_57,x:1.5,y:0.1}).wait(1).to({graphics:mask_graphics_58,x:1.9,y:-0.3}).wait(1).to({graphics:mask_graphics_59,x:2.4,y:-0.6}).wait(1).to({graphics:mask_graphics_60,x:2.8,y:-0.9}).wait(1).to({graphics:mask_graphics_61,x:3.3,y:-1.3}).wait(1).to({graphics:mask_graphics_62,x:3.7,y:-1.6}).wait(1).to({graphics:mask_graphics_63,x:4.2,y:-2}).wait(1).to({graphics:mask_graphics_64,x:4.6,y:-2.3}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AjtEeQCxkJEqkx");
	this.shape.setTransform(3.5,-4.5,1,1,-167.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.7,9.5,22,21.7);


(lib.honeyflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.honeybee();
	this.instance.parent = this;
	this.instance.setTransform(15.5,-26.9,0.422,0.422,0,0,0,-0.1,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNB8IgRgDIgCAAIgFgCIgDgBIgGgCIgHgDIgFgDIgDgBIgBgBIgCgBIgBgBIgBAAIgBgBIgBgBIgCgBIgBgBIgBAAIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIAAgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIgBgBIAAgBIgBAAIgBgBIAAgBIgBgBIgBgBIAAgBIgBAAIgCgBIAAgBIgBgBIAAgBIgBgBIgBAAIAAgBIgBgBIAAgBIgBgBIAAgBIgBgBIAAgBIgBAAIAAgBIgBgBIgBgBIgBgBIAAgBIAAgBIgBAAIgBgBIAAgBIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIgBAAIAAgBIAAgBIgBgBIAAgBIgBgBIgBgBIAAgBIAAgBIgBAAIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAAAIgBgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAAAIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIAAgBIAAAAIABgCIAAAAIAAgCIABgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIABgBIABgBIABgBIAAgBIABgBIABgBIAAgBIABgBIABgCIAAgBIABgBIABgBIABgBIABgBIABgBIABgBIABgBIAAgBIAEgEIANgLIAMgIIAPgIIAQgGIAOgDIAQgBQAHAAAJABIAPACQAJACAHAEIAPAHIAFACIABABIACABIABAAIAAABIACABIABABIABAAIABABIABABIABABIABABIACAAIAAABIABABIABABIABABIABAAIABABIABABIABABIABABIABABIAAAAIABABIAAABIABABIABABIACABIAAAAIABABIAAABIABABIABABIAAABIABAAIAAABIABABIABABIAAABIABABIABABIABAAIABABIAAABIABABIAAABIABABIAAABIAAAAIABABIABABIAAABIABABIAAABIABABIAAABIABAAIABABIAAABIAAABIABABIAAABIABABIAAABIABAAIAAABIABABIAAABIAAABIAAABIABABIAAABIAAABIABAAIAAABIAAABIABABIAAABIAAABIABABIAAABIABABIAAABIAAABIABAAIAAABIAAABIAAABIAAABIABABIAAABIAAABIAAABIABABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIABACIAAACIAAACIAAABIAAAAIABABIgBABIAAABIABABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAAAIgBABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIAAACIAAACIgBACIAAABIAAABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIgBABIgBABIAAABIAAABIgBABIAAABIAAABIgBABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIgBABIgBABIAAABIgBABIAAABIgBABIgBABIAAABIgBABIAAABIgBABIgBACIgBABIgBABIgBABIAAABIgBABIgBABIgBABIAAABIgBABIgBABIgBABIgCABIgBACIgBABIgKAJQgLAJgOAHQgIAEgLADQgRAFgRAAIgOgBg");
	this.shape.setTransform(0,0,0.8,0.802);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.8,-71.2,105.5,81.8);


// stage content:
(lib.WS_Cursive_r = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_439 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(439).call(this.frame_439).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(153.8,272.4,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[153.9,272.4,186.9,239.3,217.6,194.6]}},95).wait(16).to({startPosition:0},0).to({x:208.3,y:208.8},14).to({guide:{path:[208.4,208.9,220.8,227.3,233.2,245.6]}},45).wait(15).to({startPosition:0},0).to({guide:{path:[233.1,245.8,213.1,288.3,197.3,327.1,181.4,366.2,231.9,355.3,282.5,344.5,320.9,313.4,359.1,282.2,397,239.9]}},165).wait(15).to({startPosition:0},0).to({guide:{path:[396.7,239.7,389.7,184.1,444.5,171.2,458.9,167.9,469.8,177.4,498.2,202.1,532.2,216.7,583.9,238.8,616.3,199.1,622.3,191.8,627.8,183.6]}},65).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(218,194.6,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},95).wait(16).to({_off:false,x:232,y:244.6},0).to({_off:true},59).wait(15).to({_off:false,x:396,y:240.6},0).to({_off:true},165).wait(81));

	// Layer 13
	this.instance_1 = new lib.ar2("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(296.7,366.6,1,1,-158.1,0,0,0.7,-0.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(194).to({_off:false},0).wait(246));

	// Layer 10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_264 = new cjs.Graphics().p("AMxScIB6gqIEFL9Ih5Apg");
	var mask_graphics_265 = new cjs.Graphics().p("AjIliICMg0IEFL3IiMA2g");
	var mask_graphics_266 = new cjs.Graphics().p("AjRlaICehAIEFLzIieBCg");
	var mask_graphics_267 = new cjs.Graphics().p("AjalTICxhLIEFLvIixBOg");
	var mask_graphics_268 = new cjs.Graphics().p("AjklLIDEhXIEFLrIjEBag");
	var mask_graphics_269 = new cjs.Graphics().p("AjulEIDWhiIEGLnIjVBmg");
	var mask_graphics_270 = new cjs.Graphics().p("Aj3k8IDphuIEGLjIjoBzg");
	var mask_graphics_271 = new cjs.Graphics().p("AkAk1ID7h6IEGLgIj6B+g");
	var mask_graphics_272 = new cjs.Graphics().p("AkKkuIENiEIEHLaIkLCMg");
	var mask_graphics_273 = new cjs.Graphics().p("AkTknIEfiQIEILXIkeCYg");
	var mask_graphics_274 = new cjs.Graphics().p("AkckfIExicIEILTIkwCkg");
	var mask_graphics_275 = new cjs.Graphics().p("AkmkYIFEinIEJLPIlDCwg");
	var mask_graphics_276 = new cjs.Graphics().p("AkvkRIFWiyIEJLLIlWC8g");
	var mask_graphics_277 = new cjs.Graphics().p("Ak4kKIFpi9IEILHIlnDIg");
	var mask_graphics_278 = new cjs.Graphics().p("AlCkCIF8jJIEJLCIl6DVg");
	var mask_graphics_279 = new cjs.Graphics().p("AlLj7IGOjUIEJK+ImMDhg");
	var mask_graphics_280 = new cjs.Graphics().p("AlVj0IGhjfIEKK6ImfDtg");
	var mask_graphics_281 = new cjs.Graphics().p("AlejsIGzjrIEKK2ImxD5g");
	var mask_graphics_282 = new cjs.Graphics().p("AlnjlIHFj2IEKKxInDEGg");
	var mask_graphics_283 = new cjs.Graphics().p("AlxjeIHYkBIELKtInWESg");
	var mask_graphics_284 = new cjs.Graphics().p("Al6jXIHqkNIELKqInoEfg");
	var mask_graphics_285 = new cjs.Graphics().p("AmDjPIH8kYIELKlIn6Eqg");
	var mask_graphics_286 = new cjs.Graphics().p("AmNjIIIQkkIELKiIoNE3g");
	var mask_graphics_287 = new cjs.Graphics().p("AmWjBIIikvIELKeIofFDg");
	var mask_graphics_288 = new cjs.Graphics().p("Amgi5II1k7IEMKaIoyFPg");
	var mask_graphics_289 = new cjs.Graphics().p("AmpiyIJHlGIEMKVIpFFcg");
	var mask_graphics_290 = new cjs.Graphics().p("AmzirIJalRIENKRIpYFog");
	var mask_graphics_291 = new cjs.Graphics().p("Am8ikIJslcIENKNIppF0g");
	var mask_graphics_292 = new cjs.Graphics().p("AnFicIJ/loIEMKJIp7GAg");
	var mask_graphics_293 = new cjs.Graphics().p("AnOiVIKRlzIENKFIqOGMg");
	var mask_graphics_294 = new cjs.Graphics().p("AnYiNIKkl/IENKBIqhGYg");
	var mask_graphics_295 = new cjs.Graphics().p("AniiGIK2mKIEOJ8IqyGlg");
	var mask_graphics_296 = new cjs.Graphics().p("Anrh/ILJmVIEOJ4IrFGxg");
	var mask_graphics_297 = new cjs.Graphics().p("An0h3ILbmiIEOJ1IrYG+g");
	var mask_graphics_298 = new cjs.Graphics().p("An9hxILtmrIEOJwIrqHJg");
	var mask_graphics_299 = new cjs.Graphics().p("AoHhpIMAm4IEPJsIr9HXg");
	var mask_graphics_300 = new cjs.Graphics().p("AoQhiIMSnDIEPJpIsPHig");
	var mask_graphics_301 = new cjs.Graphics().p("AoZhaIMknPIEPJkIshHvg");
	var mask_graphics_302 = new cjs.Graphics().p("AojhTIM3naIEQJgIs0H7g");
	var mask_graphics_303 = new cjs.Graphics().p("AoshLINKnmIEPJcItGIHg");
	var mask_graphics_304 = new cjs.Graphics().p("Ao2hEINdnxIEQJYItYITg");
	var mask_graphics_305 = new cjs.Graphics().p("Ao/g9INvn8IEQJTItrIgg");
	var mask_graphics_306 = new cjs.Graphics().p("ApIg2IOBoHIERJPIt9Isg");
	var mask_graphics_307 = new cjs.Graphics().p("ApSguIOUoTIERJLIuQI4g");
	var mask_graphics_308 = new cjs.Graphics().p("ApbgnIOmoeIERJHIuiJEg");
	var mask_graphics_309 = new cjs.Graphics().p("ApkggIO4opIERJFIuzJOg");
	var mask_graphics_310 = new cjs.Graphics().p("AptgaIPJozIESJBIvFJag");
	var mask_graphics_311 = new cjs.Graphics().p("Ap2gTIPbo+IESI9IvWJmg");
	var mask_graphics_312 = new cjs.Graphics().p("Ap/gLIPtpKIESI6IvoJxg");
	var mask_graphics_313 = new cjs.Graphics().p("AqIgFIP+pUIETI2Iv5J9g");
	var mask_graphics_314 = new cjs.Graphics().p("AqQABIQPpdIETIxIwLKIg");
	var mask_graphics_315 = new cjs.Graphics().p("AqZAIIQhpoIESItIwbKUg");
	var mask_graphics_316 = new cjs.Graphics().p("AqiAPIQypzIETIqIwtKfg");
	var mask_graphics_317 = new cjs.Graphics().p("AqrAWIREp+IETImIw/Krg");
	var mask_graphics_318 = new cjs.Graphics().p("Aq0AdIRVqJIEUIiIxQK3g");
	var mask_graphics_319 = new cjs.Graphics().p("Aq9AkIRnqTIEUIeIxhLBg");
	var mask_graphics_320 = new cjs.Graphics().p("ArGArIR5qfIEUIbIxzLOg");
	var mask_graphics_321 = new cjs.Graphics().p("ArPAyISKqpIEVIWIyFLZg");
	var mask_graphics_322 = new cjs.Graphics().p("ArXA5ISbq0IEUITIyVLkg");
	var mask_graphics_323 = new cjs.Graphics().p("ArgBAIStq/IEUIPIynLwg");
	var mask_graphics_324 = new cjs.Graphics().p("ArqBGIS/rJIEVILIy4L8g");
	var mask_graphics_325 = new cjs.Graphics().p("AryBOITQrVIEVIHIzKMIg");
	var mask_graphics_326 = new cjs.Graphics().p("Ar7BUITirfIEVIDIzbMUg");
	var mask_graphics_327 = new cjs.Graphics().p("AsEBbITzrpIEWH/IztMfg");
	var mask_graphics_328 = new cjs.Graphics().p("AsNBiIUFr1IEWH8Iz+Mqg");
	var mask_graphics_329 = new cjs.Graphics().p("AsVBpIUWr/IEWH3I0PM2g");
	var mask_graphics_330 = new cjs.Graphics().p("AsfBwIUosKIEXH0I0hNBg");
	var mask_graphics_331 = new cjs.Graphics().p("AsoB3IU5sVIEXHwI0yNNg");
	var mask_graphics_332 = new cjs.Graphics().p("AsxB+IVLsgIEYHsI1ENZg");
	var mask_graphics_333 = new cjs.Graphics().p("As5CFIVcsrIEXHpI1VNkg");
	var mask_graphics_334 = new cjs.Graphics().p("AtCCLIVts1IEYHlI1nNwg");
	var mask_graphics_335 = new cjs.Graphics().p("AtLCSIV/s/IEYHgI14N7g");
	var mask_graphics_336 = new cjs.Graphics().p("AtUCaIWRtLIEYHcI2KOHg");
	var mask_graphics_337 = new cjs.Graphics().p("AtdCgIWitVIEZHZI2bOSg");
	var mask_graphics_338 = new cjs.Graphics().p("AtmCoIW0thIEZHVI2tOeg");
	var mask_graphics_339 = new cjs.Graphics().p("AtvCuIXFtrIEaHRI2+Oqg");
	var mask_graphics_340 = new cjs.Graphics().p("At6C6IXdt9IEYHPI3WO4g");
	var mask_graphics_341 = new cjs.Graphics().p("AuGDFIX1uPIEYHPI3uPGg");
	var mask_graphics_342 = new cjs.Graphics().p("AuSDQIYNugIEYHMI4HPVg");
	var mask_graphics_343 = new cjs.Graphics().p("AufDcIYmuzIEYHLI4fPkg");
	var mask_graphics_344 = new cjs.Graphics().p("AuqDnIY9vEIEYHKI45Pxg");
	var mask_graphics_345 = new cjs.Graphics().p("Au2DzIZWvXIEXHJI5RQAg");
	var mask_graphics_346 = new cjs.Graphics().p("AvCD+IZuvpIEXHII5qQPg");
	var mask_graphics_347 = new cjs.Graphics().p("AvOEJIaGv6IEXHGI6CQdg");
	var mask_graphics_348 = new cjs.Graphics().p("AvaEVIafwNIEWHFI6bQsg");
	var mask_graphics_349 = new cjs.Graphics().p("AvmEgIa3weIEWHDI60Q6g");
	var mask_graphics_350 = new cjs.Graphics().p("AvyEsIbPwxIEWHCI7MRJg");
	var mask_graphics_351 = new cjs.Graphics().p("Av+E3IbnxCIEWHBI7lRWg");
	var mask_graphics_352 = new cjs.Graphics().p("AwKFCIcAxUIEVHAI79Rlg");
	var mask_graphics_353 = new cjs.Graphics().p("AwWFOIcYxnIEVG/I8XR0g");
	var mask_graphics_354 = new cjs.Graphics().p("AwiFZIcwx4IEVG9I8vSCg");
	var mask_graphics_355 = new cjs.Graphics().p("AwuFkIdIyKIEVG8I9ISRg");
	var mask_graphics_356 = new cjs.Graphics().p("Aw6FwIdhycIEUG6I9gSfg");
	var mask_graphics_357 = new cjs.Graphics().p("AhBXIId5yvIEUG5I96Svg");
	var mask_graphics_358 = new cjs.Graphics().p("AxGF7Id5yuIEUG5I95Sug");
	var mask_graphics_359 = new cjs.Graphics().p("AhBXIId5yvIEUG5I96Svg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(264).to({graphics:mask_graphics_264,x:120,y:194.4}).wait(1).to({graphics:mask_graphics_265,x:221.9,y:348.1}).wait(1).to({graphics:mask_graphics_266,x:222.9,y:347.6}).wait(1).to({graphics:mask_graphics_267,x:223.9,y:347.1}).wait(1).to({graphics:mask_graphics_268,x:224.9,y:346.7}).wait(1).to({graphics:mask_graphics_269,x:225.9,y:346.2}).wait(1).to({graphics:mask_graphics_270,x:226.8,y:345.8}).wait(1).to({graphics:mask_graphics_271,x:227.8,y:345.3}).wait(1).to({graphics:mask_graphics_272,x:228.8,y:344.9}).wait(1).to({graphics:mask_graphics_273,x:229.8,y:344.4}).wait(1).to({graphics:mask_graphics_274,x:230.8,y:343.9}).wait(1).to({graphics:mask_graphics_275,x:231.8,y:343.5}).wait(1).to({graphics:mask_graphics_276,x:232.8,y:343}).wait(1).to({graphics:mask_graphics_277,x:233.7,y:342.6}).wait(1).to({graphics:mask_graphics_278,x:234.7,y:342.1}).wait(1).to({graphics:mask_graphics_279,x:235.7,y:341.7}).wait(1).to({graphics:mask_graphics_280,x:236.7,y:341.2}).wait(1).to({graphics:mask_graphics_281,x:237.7,y:340.7}).wait(1).to({graphics:mask_graphics_282,x:238.6,y:340.3}).wait(1).to({graphics:mask_graphics_283,x:239.6,y:339.8}).wait(1).to({graphics:mask_graphics_284,x:240.6,y:339.4}).wait(1).to({graphics:mask_graphics_285,x:241.6,y:338.9}).wait(1).to({graphics:mask_graphics_286,x:242.6,y:338.5}).wait(1).to({graphics:mask_graphics_287,x:243.5,y:338}).wait(1).to({graphics:mask_graphics_288,x:244.5,y:337.5}).wait(1).to({graphics:mask_graphics_289,x:245.5,y:337.1}).wait(1).to({graphics:mask_graphics_290,x:246.5,y:336.6}).wait(1).to({graphics:mask_graphics_291,x:247.5,y:336.2}).wait(1).to({graphics:mask_graphics_292,x:248.5,y:335.7}).wait(1).to({graphics:mask_graphics_293,x:249.5,y:335.2}).wait(1).to({graphics:mask_graphics_294,x:250.4,y:334.8}).wait(1).to({graphics:mask_graphics_295,x:251.4,y:334.3}).wait(1).to({graphics:mask_graphics_296,x:252.4,y:333.9}).wait(1).to({graphics:mask_graphics_297,x:253.4,y:333.4}).wait(1).to({graphics:mask_graphics_298,x:254.4,y:333}).wait(1).to({graphics:mask_graphics_299,x:255.3,y:332.5}).wait(1).to({graphics:mask_graphics_300,x:256.3,y:332}).wait(1).to({graphics:mask_graphics_301,x:257.3,y:331.6}).wait(1).to({graphics:mask_graphics_302,x:258.3,y:331.1}).wait(1).to({graphics:mask_graphics_303,x:259.3,y:330.7}).wait(1).to({graphics:mask_graphics_304,x:260.2,y:330.2}).wait(1).to({graphics:mask_graphics_305,x:261.2,y:329.8}).wait(1).to({graphics:mask_graphics_306,x:262.2,y:329.3}).wait(1).to({graphics:mask_graphics_307,x:263.2,y:328.8}).wait(1).to({graphics:mask_graphics_308,x:264.2,y:328.4}).wait(1).to({graphics:mask_graphics_309,x:265.1,y:328}).wait(1).to({graphics:mask_graphics_310,x:266.1,y:327.5}).wait(1).to({graphics:mask_graphics_311,x:267,y:327.1}).wait(1).to({graphics:mask_graphics_312,x:267.9,y:326.6}).wait(1).to({graphics:mask_graphics_313,x:268.8,y:326.2}).wait(1).to({graphics:mask_graphics_314,x:269.8,y:325.8}).wait(1).to({graphics:mask_graphics_315,x:270.7,y:325.3}).wait(1).to({graphics:mask_graphics_316,x:271.6,y:324.9}).wait(1).to({graphics:mask_graphics_317,x:272.6,y:324.5}).wait(1).to({graphics:mask_graphics_318,x:273.5,y:324}).wait(1).to({graphics:mask_graphics_319,x:274.4,y:323.6}).wait(1).to({graphics:mask_graphics_320,x:275.3,y:323.2}).wait(1).to({graphics:mask_graphics_321,x:276.3,y:322.7}).wait(1).to({graphics:mask_graphics_322,x:277.2,y:322.3}).wait(1).to({graphics:mask_graphics_323,x:278.1,y:321.9}).wait(1).to({graphics:mask_graphics_324,x:279.1,y:321.5}).wait(1).to({graphics:mask_graphics_325,x:280,y:321}).wait(1).to({graphics:mask_graphics_326,x:280.9,y:320.6}).wait(1).to({graphics:mask_graphics_327,x:281.9,y:320.2}).wait(1).to({graphics:mask_graphics_328,x:282.8,y:319.7}).wait(1).to({graphics:mask_graphics_329,x:283.7,y:319.3}).wait(1).to({graphics:mask_graphics_330,x:284.6,y:318.8}).wait(1).to({graphics:mask_graphics_331,x:285.6,y:318.4}).wait(1).to({graphics:mask_graphics_332,x:286.5,y:318}).wait(1).to({graphics:mask_graphics_333,x:287.4,y:317.5}).wait(1).to({graphics:mask_graphics_334,x:288.4,y:317.1}).wait(1).to({graphics:mask_graphics_335,x:289.3,y:316.7}).wait(1).to({graphics:mask_graphics_336,x:290.2,y:316.2}).wait(1).to({graphics:mask_graphics_337,x:291.1,y:315.8}).wait(1).to({graphics:mask_graphics_338,x:292.1,y:315.4}).wait(1).to({graphics:mask_graphics_339,x:293,y:314.9}).wait(1).to({graphics:mask_graphics_340,x:294.3,y:314.2}).wait(1).to({graphics:mask_graphics_341,x:295.5,y:313.5}).wait(1).to({graphics:mask_graphics_342,x:296.7,y:312.8}).wait(1).to({graphics:mask_graphics_343,x:298,y:312.1}).wait(1).to({graphics:mask_graphics_344,x:299.2,y:311.4}).wait(1).to({graphics:mask_graphics_345,x:300.4,y:310.7}).wait(1).to({graphics:mask_graphics_346,x:301.7,y:310}).wait(1).to({graphics:mask_graphics_347,x:302.9,y:309.3}).wait(1).to({graphics:mask_graphics_348,x:304.2,y:308.6}).wait(1).to({graphics:mask_graphics_349,x:305.4,y:307.9}).wait(1).to({graphics:mask_graphics_350,x:306.6,y:307.2}).wait(1).to({graphics:mask_graphics_351,x:307.9,y:306.5}).wait(1).to({graphics:mask_graphics_352,x:309.1,y:305.7}).wait(1).to({graphics:mask_graphics_353,x:310.4,y:305}).wait(1).to({graphics:mask_graphics_354,x:311.6,y:304.3}).wait(1).to({graphics:mask_graphics_355,x:312.8,y:303.6}).wait(1).to({graphics:mask_graphics_356,x:314.1,y:302.9}).wait(1).to({graphics:mask_graphics_357,x:212.4,y:192.1}).wait(1).to({graphics:mask_graphics_358,x:315.3,y:302.2}).wait(1).to({graphics:mask_graphics_359,x:212.4,y:192.1}).wait(81));

	// Layer 9
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("Apzn9QjDGlibF2QibF3H3hjQH2hiF/k8QGAk6F2mg");
	this.shape_1.setTransform(295.1,298.6);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(264).to({_off:false},0).wait(176));

	// Layer 8 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_239 = new cjs.Graphics().p("ACKaPQAEkHC7i7QC/i/EOAAQEPAAC/C/QC7C7AEEHg");
	var mask_1_graphics_240 = new cjs.Graphics().p("AEpTZQCwjNENgVQEOgVDNCwQDJCsAYEGI0VBlQgQkHCsjJg");
	var mask_1_graphics_241 = new cjs.Graphics().p("AENTnQCgjaELgpQELgqDaCgQDWCcAsEDI0JDJQglkFCcjWg");
	var mask_1_graphics_242 = new cjs.Graphics().p("AD3T4QCOjlEHg+QEHg+DmCOQDhCLBAD/Iz2ErQg4kBCLjhg");
	var mask_1_graphics_243 = new cjs.Graphics().p("ADlUMQB9jwEBhSQEChTDwB8QDrB6BTD5IzbGNQhMj8B5jrg");
	var mask_1_graphics_244 = new cjs.Graphics().p("ADZUhQBqj5D6hlQD7hmD4BpQD0BnBnDzIy5HqQhfj1Bmj0g");
	var mask_1_graphics_245 = new cjs.Graphics().p("ADTU5QBWkADxh5QDyh4EABVQD8BUB4DqIyPJGQhyjtBUj7g");
	var mask_1_graphics_246 = new cjs.Graphics().p("ADRVTQBCkGDoiLQDoiLEGBCQEBBACKDgIxfKeQiEjjBAkBg");
	var mask_1_graphics_247 = new cjs.Graphics().p("ADWVvQAtkLDdicQDcicEKAtQEFAsCcDVIwpLyQiVjYAtkFg");
	var mask_1_graphics_248 = new cjs.Graphics().p("ADfWMQAZkNDQitQDPitENAZQEIAYCrDIIvrNCQiljMAYkIg");
	var mask_1_graphics_249 = new cjs.Graphics().p("ADuWrQAEkODCi9QDCi8EOAEQEIAEC6C6IunONQi1i/AEkJg");
	var mask_1_graphics_250 = new cjs.Graphics().p("AECXLQgRkNCzjLQCzjLENgRQEIgQDICrItfPSQjCiwgRkJg");
	var mask_1_graphics_251 = new cjs.Graphics().p("AEbXtQglkMCijYQCjjYELglQEGglDVCbIsRQSQjQihglkGg");
	var mask_1_graphics_252 = new cjs.Graphics().p("AE5YPQg6kICSjjQCRjkEIg6QECg5DgCKIq+RMQjciRg5kDg");
	var mask_1_graphics_253 = new cjs.Graphics().p("AFcYzQhOkDB/juQCAjvEChOQD+hNDpB5IpnR+Qjmh/hNj9g");
	var mask_1_graphics_254 = new cjs.Graphics().p("AGDZWQhhj7Bsj4QBtj3D8hiQD3hgDyBmIoNSqQjvhthhj3g");
	var mask_1_graphics_255 = new cjs.Graphics().p("AGvZ7Qh1j0Baj/QBZj/Dzh1QDvhzD5BTImvTQQj3hbhzjug");
	var mask_1_graphics_256 = new cjs.Graphics().p("AHfafQiHjqBFkFQBGkFDpiIQDliFD/BAIlPTtQj9hHiFjlg");
	var mask_1_graphics_257 = new cjs.Graphics().p("AITbDQiZjfAxkKQAxkJDeiZQDbiWEDAsIjtUDQkCg0iWjag");
	var mask_1_graphics_258 = new cjs.Graphics().p("AJKbnQiqjSAdkNQAckNDSiqQDOimEGAYIiKURQkFgfimjOg");
	var mask_1_graphics_259 = new cjs.Graphics().p("AKEcKQi5jEAHkPQAIkODEi5QDBi2EHAEIglUYQkHgMi2jAg");
	var mask_1_graphics_260 = new cjs.Graphics().p("AKictQjIi2gOkOQgNkOC2jIQCyjEEGgRIBAUXIgZABQj4AAi6ipg");
	var mask_1_graphics_261 = new cjs.Graphics().p("AKvdMQjVilgikNQgikMCljVQCjjREEglICkUOQgoAFgnAAQjXAAixiKg");
	var mask_1_graphics_262 = new cjs.Graphics().p("AK/dpQjiiVg2kJQg2kICUjiQCSjdEBg5IEGT+QhBANg/AAQi6AAilhtg");
	var mask_1_graphics_263 = new cjs.Graphics().p("ALReCQjsiDhLkEQhKkDCDjtQCAjnD8hNIFoTmQhZAYhWAAQigAAiXhTg");
	var mask_1_graphics_264 = new cjs.Graphics().p("ALmeYQj1hwhfj9Qhej+Bwj1QBujxD1hgIHITHQhvAnhtAAQiHAAiGg9g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(239).to({graphics:mask_1_graphics_239,x:144.3,y:167.9}).wait(1).to({graphics:mask_1_graphics_240,x:144.2,y:170.5}).wait(1).to({graphics:mask_1_graphics_241,x:143.9,y:173}).wait(1).to({graphics:mask_1_graphics_242,x:143.4,y:175.4}).wait(1).to({graphics:mask_1_graphics_243,x:142.7,y:177.9}).wait(1).to({graphics:mask_1_graphics_244,x:141.9,y:180.2}).wait(1).to({graphics:mask_1_graphics_245,x:140.8,y:182.5}).wait(1).to({graphics:mask_1_graphics_246,x:139.6,y:184.7}).wait(1).to({graphics:mask_1_graphics_247,x:138.3,y:186.8}).wait(1).to({graphics:mask_1_graphics_248,x:136.7,y:188.8}).wait(1).to({graphics:mask_1_graphics_249,x:135,y:190.7}).wait(1).to({graphics:mask_1_graphics_250,x:133.2,y:192.4}).wait(1).to({graphics:mask_1_graphics_251,x:131.3,y:194}).wait(1).to({graphics:mask_1_graphics_252,x:129.2,y:195.5}).wait(1).to({graphics:mask_1_graphics_253,x:127,y:196.7}).wait(1).to({graphics:mask_1_graphics_254,x:124.8,y:197.8}).wait(1).to({graphics:mask_1_graphics_255,x:122.4,y:198.8}).wait(1).to({graphics:mask_1_graphics_256,x:120,y:199.5}).wait(1).to({graphics:mask_1_graphics_257,x:117.6,y:200.1}).wait(1).to({graphics:mask_1_graphics_258,x:115.1,y:200.4}).wait(1).to({graphics:mask_1_graphics_259,x:112.6,y:200.6}).wait(1).to({graphics:mask_1_graphics_260,x:113.3,y:200.6}).wait(1).to({graphics:mask_1_graphics_261,x:115.8,y:200.6}).wait(1).to({graphics:mask_1_graphics_262,x:118.2,y:200.6}).wait(1).to({graphics:mask_1_graphics_263,x:120.7,y:200.5}).wait(1).to({graphics:mask_1_graphics_264,x:123.1,y:200.5}).wait(176));

	// Layer 7
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("ABKoiQjCGlibF3QibF3H2hjQB8gYB0gm");
	this.shape_2.setTransform(224.8,302.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("Apzn9QjDGlibF2QibF3H3hjQH2hiF/k8QGAk6F2mg");
	this.shape_3.setTransform(295.1,298.6);

	var maskedShapeInstanceList = [this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},239).to({state:[{t:this.shape_3}]},7).wait(194));

	// Layer 6 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_194 = new cjs.Graphics().p("ANZR1IA9i5IFyB6Ig9C5g");
	var mask_2_graphics_195 = new cjs.Graphics().p("AjbApIBHjMIFwB7IhHDMg");
	var mask_2_graphics_196 = new cjs.Graphics().p("AjgAyIBSjeIFvB7IhSDeg");
	var mask_2_graphics_197 = new cjs.Graphics().p("AjkA8IBcjyIFtB7IhdDyg");
	var mask_2_graphics_198 = new cjs.Graphics().p("AjoBFIBmkFIFrB8IhmEFg");
	var mask_2_graphics_199 = new cjs.Graphics().p("AjtBOIBxkYIFqB9IhxEYg");
	var mask_2_graphics_200 = new cjs.Graphics().p("AjxBXIB7krIFpB+Ih8Erg");
	var mask_2_graphics_201 = new cjs.Graphics().p("Aj2BhICGk/IFnB/IiHE+g");
	var mask_2_graphics_202 = new cjs.Graphics().p("Aj6BqICQlSIFlB/IiQFSg");
	var mask_2_graphics_203 = new cjs.Graphics().p("Aj/BzICbllIFkCAIibFlg");
	var mask_2_graphics_204 = new cjs.Graphics().p("AkDB8ICll3IFiCAIilF4g");
	var mask_2_graphics_205 = new cjs.Graphics().p("AkHCGICvmLIFgCBIivGKg");
	var mask_2_graphics_206 = new cjs.Graphics().p("AkMCOIC7meIFeCDIi6Geg");
	var mask_2_graphics_207 = new cjs.Graphics().p("AkQCYIDFmyIFcCDIjEGxg");
	var mask_2_graphics_208 = new cjs.Graphics().p("AkVChIDQnEIFbCDIjPHEg");
	var mask_2_graphics_209 = new cjs.Graphics().p("AkZCqIDZnXIFaCEIjaHXg");
	var mask_2_graphics_210 = new cjs.Graphics().p("AkdC0IDjnrIFZCFIjlHqg");
	var mask_2_graphics_211 = new cjs.Graphics().p("AkiC9IDun+IFXCGIjvH9g");
	var mask_2_graphics_212 = new cjs.Graphics().p("AknDGID6oRIFVCGIj5IRg");
	var mask_2_graphics_213 = new cjs.Graphics().p("AkrDPIEEokIFTCHIkEIkg");
	var mask_2_graphics_214 = new cjs.Graphics().p("AkvDZIEOo3IFRCHIkOI3g");
	var mask_2_graphics_215 = new cjs.Graphics().p("Ak0DiIEZpKIFQCIIkZJKg");
	var mask_2_graphics_216 = new cjs.Graphics().p("Ak4DrIEjpdIFOCIIkjJdg");
	var mask_2_graphics_217 = new cjs.Graphics().p("Ak8D0IEspwIFNCJIktJwg");
	var mask_2_graphics_218 = new cjs.Graphics().p("AlBD+IE4qEIFLCJIk3KEg");
	var mask_2_graphics_219 = new cjs.Graphics().p("AlGEHIFDqXIFKCLIlCKWg");
	var mask_2_graphics_220 = new cjs.Graphics().p("AlKEQIFLqqIFKCLIlLKqg");
	var mask_2_graphics_221 = new cjs.Graphics().p("AlOEZIFWq9IFHCMIlWK9g");
	var mask_2_graphics_222 = new cjs.Graphics().p("AlTEjIFhrQIFGCLIlhLQg");
	var mask_2_graphics_223 = new cjs.Graphics().p("AlXErIFrriIFECMIlrLkg");
	var mask_2_graphics_224 = new cjs.Graphics().p("AlcE1IF2r2IFDCNIl2L2g");
	var mask_2_graphics_225 = new cjs.Graphics().p("AlgE+IGAsJIFBCOImAMJg");
	var mask_2_graphics_226 = new cjs.Graphics().p("AllFHIGLscIE/CPImKMcg");
	var mask_2_graphics_227 = new cjs.Graphics().p("AlpFQIGUsvIE/CPImVMwg");
	var mask_2_graphics_228 = new cjs.Graphics().p("AltFaIGftDIE8CQImfNDg");
	var mask_2_graphics_229 = new cjs.Graphics().p("AlyFjIGqtWIE7CRImqNWg");
	var mask_2_graphics_230 = new cjs.Graphics().p("Al2FsIG0tpIE5CSIm0Npg");
	var mask_2_graphics_231 = new cjs.Graphics().p("Al7F1IG/t8IE4CTIm/N8g");
	var mask_2_graphics_232 = new cjs.Graphics().p("Al/F/IHJuPIE2CSInIOPg");
	var mask_2_graphics_233 = new cjs.Graphics().p("AmDGIIHTuiIE0CTInTOig");
	var mask_2_graphics_234 = new cjs.Graphics().p("AmIGRIHeu1IEzCUIneO1g");
	var mask_2_graphics_235 = new cjs.Graphics().p("AmMGaIHovIIExCVInoPIg");
	var mask_2_graphics_236 = new cjs.Graphics().p("AmRGjIHzvbIEwCWInzPbg");
	var mask_2_graphics_237 = new cjs.Graphics().p("AmVGtIH9vvIEuCWIn9Pvg");
	var mask_2_graphics_238 = new cjs.Graphics().p("AmaG2IIIwCIEtCXIoIQCg");
	var mask_2_graphics_239 = new cjs.Graphics().p("AHVYaIITwWIErCYIoTQWg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(194).to({graphics:mask_2_graphics_194,x:128.8,y:126.3}).wait(1).to({graphics:mask_2_graphics_195,x:235.6,y:238.2}).wait(1).to({graphics:mask_2_graphics_196,x:235.2,y:239.3}).wait(1).to({graphics:mask_2_graphics_197,x:234.9,y:240.3}).wait(1).to({graphics:mask_2_graphics_198,x:234.5,y:241.3}).wait(1).to({graphics:mask_2_graphics_199,x:234.1,y:242.3}).wait(1).to({graphics:mask_2_graphics_200,x:233.7,y:243.3}).wait(1).to({graphics:mask_2_graphics_201,x:233.3,y:244.3}).wait(1).to({graphics:mask_2_graphics_202,x:232.9,y:245.3}).wait(1).to({graphics:mask_2_graphics_203,x:232.5,y:246.3}).wait(1).to({graphics:mask_2_graphics_204,x:232.1,y:247.4}).wait(1).to({graphics:mask_2_graphics_205,x:231.7,y:248.4}).wait(1).to({graphics:mask_2_graphics_206,x:231.3,y:249.4}).wait(1).to({graphics:mask_2_graphics_207,x:230.9,y:250.4}).wait(1).to({graphics:mask_2_graphics_208,x:230.5,y:251.4}).wait(1).to({graphics:mask_2_graphics_209,x:230.1,y:252.4}).wait(1).to({graphics:mask_2_graphics_210,x:229.7,y:253.5}).wait(1).to({graphics:mask_2_graphics_211,x:229.3,y:254.5}).wait(1).to({graphics:mask_2_graphics_212,x:228.9,y:255.5}).wait(1).to({graphics:mask_2_graphics_213,x:228.5,y:256.5}).wait(1).to({graphics:mask_2_graphics_214,x:228.1,y:257.5}).wait(1).to({graphics:mask_2_graphics_215,x:227.7,y:258.5}).wait(1).to({graphics:mask_2_graphics_216,x:227.3,y:259.5}).wait(1).to({graphics:mask_2_graphics_217,x:227,y:260.5}).wait(1).to({graphics:mask_2_graphics_218,x:226.6,y:261.6}).wait(1).to({graphics:mask_2_graphics_219,x:226.2,y:262.6}).wait(1).to({graphics:mask_2_graphics_220,x:225.8,y:263.6}).wait(1).to({graphics:mask_2_graphics_221,x:225.4,y:264.6}).wait(1).to({graphics:mask_2_graphics_222,x:225,y:265.6}).wait(1).to({graphics:mask_2_graphics_223,x:224.6,y:266.6}).wait(1).to({graphics:mask_2_graphics_224,x:224.2,y:267.6}).wait(1).to({graphics:mask_2_graphics_225,x:223.8,y:268.6}).wait(1).to({graphics:mask_2_graphics_226,x:223.4,y:269.7}).wait(1).to({graphics:mask_2_graphics_227,x:223,y:270.7}).wait(1).to({graphics:mask_2_graphics_228,x:222.6,y:271.7}).wait(1).to({graphics:mask_2_graphics_229,x:222.2,y:272.7}).wait(1).to({graphics:mask_2_graphics_230,x:221.8,y:273.7}).wait(1).to({graphics:mask_2_graphics_231,x:221.4,y:274.7}).wait(1).to({graphics:mask_2_graphics_232,x:221,y:275.8}).wait(1).to({graphics:mask_2_graphics_233,x:220.6,y:276.8}).wait(1).to({graphics:mask_2_graphics_234,x:220.2,y:277.8}).wait(1).to({graphics:mask_2_graphics_235,x:219.8,y:278.8}).wait(1).to({graphics:mask_2_graphics_236,x:219.4,y:279.8}).wait(1).to({graphics:mask_2_graphics_237,x:219.1,y:280.8}).wait(1).to({graphics:mask_2_graphics_238,x:218.7,y:281.8}).wait(1).to({graphics:mask_2_graphics_239,x:129.9,y:171.4}).wait(201));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("Apzn9QjDGlibF2QibF3H3hjQH2hiF/k8QGAk6F2mg");
	this.shape_4.setTransform(295.1,298.6);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(194).to({_off:false},0).wait(246));

	// Layer 12
	this.instance_2 = new lib.ar5("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(262.6,184.3,1,1,-29.2,0,0,-0.1,-76.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120).to({_off:false},0).wait(320));

	// Layer 5 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_134 = new cjs.Graphics().p("AM0PFIDYiFIBJB1IjZCGg");
	var mask_3_graphics_135 = new cjs.Graphics().p("AiSAEIDYiFIBNB+IjXCFg");
	var mask_3_graphics_136 = new cjs.Graphics().p("AiVAAIDZiFIBRCFIjVCGg");
	var mask_3_graphics_137 = new cjs.Graphics().p("AiXgDIDZiHIBWCPIjVCFg");
	var mask_3_graphics_138 = new cjs.Graphics().p("AiZgGIDaiIIBZCXIjUCGg");
	var mask_3_graphics_139 = new cjs.Graphics().p("AicgKIDbiIIBeCfIjUCGg");
	var mask_3_graphics_140 = new cjs.Graphics().p("AiegPIDbiIIBiCoIjSCHg");
	var mask_3_graphics_141 = new cjs.Graphics().p("AihgSIDciJIBnCxIjSCGg");
	var mask_3_graphics_142 = new cjs.Graphics().p("AijgWIDciJIBrC5IjRCGg");
	var mask_3_graphics_143 = new cjs.Graphics().p("AimgaIDdiKIBwDCIjRCHg");
	var mask_3_graphics_144 = new cjs.Graphics().p("AiogeIDdiKIB0DKIjPCHg");
	var mask_3_graphics_145 = new cjs.Graphics().p("AiqgiIDeiKIB3DTIjOCGg");
	var mask_3_graphics_146 = new cjs.Graphics().p("AitgmIDfiLIB8DcIjOCHg");
	var mask_3_graphics_147 = new cjs.Graphics().p("AivgqIDfiLICADkIjNCHg");
	var mask_3_graphics_148 = new cjs.Graphics().p("AiygtIDgiNICFDuIjNCHg");
	var mask_3_graphics_149 = new cjs.Graphics().p("Ai0gxIDgiNICJD2IjLCHg");
	var mask_3_graphics_150 = new cjs.Graphics().p("Ai3g2IDhiMICOD+IjLCHg");
	var mask_3_graphics_151 = new cjs.Graphics().p("Ai5g5IDhiOICSEIIjKCHg");
	var mask_3_graphics_152 = new cjs.Graphics().p("Ai7g9IDiiOICWEQIjKCHg");
	var mask_3_graphics_153 = new cjs.Graphics().p("Ai+hBIDjiOICaEYIjICHg");
	var mask_3_graphics_154 = new cjs.Graphics().p("AjAhFIDjiPICfEhIjICHg");
	var mask_3_graphics_155 = new cjs.Graphics().p("AjDhJIDkiPICjEqIjGCHg");
	var mask_3_graphics_156 = new cjs.Graphics().p("AjFhNIDkiPICoEyIjHCHg");
	var mask_3_graphics_157 = new cjs.Graphics().p("AjIhRIDliQICsE7IjGCHg");
	var mask_3_graphics_158 = new cjs.Graphics().p("AjKhUIDliRICxFEIjGCHg");
	var mask_3_graphics_159 = new cjs.Graphics().p("AjNhYIDniRIC0FMIjFCHg");
	var mask_3_graphics_160 = new cjs.Graphics().p("AjPhcIDniSIC4FVIjDCIg");
	var mask_3_graphics_161 = new cjs.Graphics().p("AjShgIDoiSIC9FdIjDCIg");
	var mask_3_graphics_162 = new cjs.Graphics().p("AjUhkIDoiSIDBFmIjCCHg");
	var mask_3_graphics_163 = new cjs.Graphics().p("AjXhoIDpiTIDGFvIjCCIg");
	var mask_3_graphics_164 = new cjs.Graphics().p("AjZhsIDpiTIDKF3IjACIg");
	var mask_3_graphics_165 = new cjs.Graphics().p("AjchwIDqiUIDPGAIjACIg");
	var mask_3_graphics_166 = new cjs.Graphics().p("Ajeh0IDriUIDSGJIi/CIg");
	var mask_3_graphics_167 = new cjs.Graphics().p("Ajgh4IDriUIDWGRIi+CIg");
	var mask_3_graphics_168 = new cjs.Graphics().p("Ajjh7IDsiWIDbGaIi+CIg");
	var mask_3_graphics_169 = new cjs.Graphics().p("Ajlh/IDsiWIDfGiIi8CJg");
	var mask_3_graphics_170 = new cjs.Graphics().p("AjoiDIDtiWIDkGrIi8CIg");
	var mask_3_graphics_171 = new cjs.Graphics().p("AjqiHIDtiXIDoG0Ii7CJg");
	var mask_3_graphics_172 = new cjs.Graphics().p("AjtiLIDuiXIDtG8Ii7CJg");
	var mask_3_graphics_173 = new cjs.Graphics().p("AjviPIDviXIDwHEIi5CJg");
	var mask_3_graphics_174 = new cjs.Graphics().p("AjyiTIDxiYIDzHOIi4CJg");
	var mask_3_graphics_175 = new cjs.Graphics().p("Aj0iXIDxiYID4HWIi3CJg");
	var mask_3_graphics_176 = new cjs.Graphics().p("Aj2ibIDxiYID8HeIi3CJg");
	var mask_3_graphics_177 = new cjs.Graphics().p("AkDiwIDpiSIEeH9IjDCIg");
	var mask_3_graphics_178 = new cjs.Graphics().p("AkPjEIDhiMIE+IaIjOCHg");
	var mask_3_graphics_179 = new cjs.Graphics().p("AKpLkIDYiGIFfI5IjYCFg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(134).to({graphics:mask_3_graphics_134,x:110.9,y:108.3}).wait(1).to({graphics:mask_3_graphics_135,x:207.5,y:204.4}).wait(1).to({graphics:mask_3_graphics_136,x:207.8,y:204.9}).wait(1).to({graphics:mask_3_graphics_137,x:208,y:205.3}).wait(1).to({graphics:mask_3_graphics_138,x:208.2,y:205.8}).wait(1).to({graphics:mask_3_graphics_139,x:208.5,y:206.2}).wait(1).to({graphics:mask_3_graphics_140,x:208.7,y:206.6}).wait(1).to({graphics:mask_3_graphics_141,x:209,y:207.1}).wait(1).to({graphics:mask_3_graphics_142,x:209.2,y:207.5}).wait(1).to({graphics:mask_3_graphics_143,x:209.5,y:207.9}).wait(1).to({graphics:mask_3_graphics_144,x:209.7,y:208.4}).wait(1).to({graphics:mask_3_graphics_145,x:210,y:208.8}).wait(1).to({graphics:mask_3_graphics_146,x:210.2,y:209.2}).wait(1).to({graphics:mask_3_graphics_147,x:210.5,y:209.7}).wait(1).to({graphics:mask_3_graphics_148,x:210.7,y:210.1}).wait(1).to({graphics:mask_3_graphics_149,x:211,y:210.5}).wait(1).to({graphics:mask_3_graphics_150,x:211.2,y:211}).wait(1).to({graphics:mask_3_graphics_151,x:211.5,y:211.4}).wait(1).to({graphics:mask_3_graphics_152,x:211.7,y:211.8}).wait(1).to({graphics:mask_3_graphics_153,x:212,y:212.3}).wait(1).to({graphics:mask_3_graphics_154,x:212.2,y:212.7}).wait(1).to({graphics:mask_3_graphics_155,x:212.5,y:213.2}).wait(1).to({graphics:mask_3_graphics_156,x:212.7,y:213.6}).wait(1).to({graphics:mask_3_graphics_157,x:213,y:214}).wait(1).to({graphics:mask_3_graphics_158,x:213.2,y:214.5}).wait(1).to({graphics:mask_3_graphics_159,x:213.4,y:214.9}).wait(1).to({graphics:mask_3_graphics_160,x:213.7,y:215.3}).wait(1).to({graphics:mask_3_graphics_161,x:213.9,y:215.8}).wait(1).to({graphics:mask_3_graphics_162,x:214.2,y:216.2}).wait(1).to({graphics:mask_3_graphics_163,x:214.4,y:216.6}).wait(1).to({graphics:mask_3_graphics_164,x:214.7,y:217.1}).wait(1).to({graphics:mask_3_graphics_165,x:214.9,y:217.5}).wait(1).to({graphics:mask_3_graphics_166,x:215.2,y:217.9}).wait(1).to({graphics:mask_3_graphics_167,x:215.4,y:218.4}).wait(1).to({graphics:mask_3_graphics_168,x:215.7,y:218.8}).wait(1).to({graphics:mask_3_graphics_169,x:215.9,y:219.2}).wait(1).to({graphics:mask_3_graphics_170,x:216.2,y:219.7}).wait(1).to({graphics:mask_3_graphics_171,x:216.4,y:220.1}).wait(1).to({graphics:mask_3_graphics_172,x:216.7,y:220.5}).wait(1).to({graphics:mask_3_graphics_173,x:216.9,y:221}).wait(1).to({graphics:mask_3_graphics_174,x:217.2,y:221.4}).wait(1).to({graphics:mask_3_graphics_175,x:217.4,y:221.9}).wait(1).to({graphics:mask_3_graphics_176,x:217.6,y:222.3}).wait(1).to({graphics:mask_3_graphics_177,x:218.9,y:223.7}).wait(1).to({graphics:mask_3_graphics_178,x:220.1,y:225.1}).wait(1).to({graphics:mask_3_graphics_179,x:124.8,y:130.8}).wait(261));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("AhpifIDTE/");
	this.shape_5.setTransform(222.3,230);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(134).to({_off:false},0).wait(306));

	// Layer 11
	this.instance_3 = new lib.ar1("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(115.9,173.5,1,1,-8.1,0,0,-0.7,0.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(431));

	// Layer 4 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_9 = new cjs.Graphics().p("AGKSmIBuh9IFaEvIhuB9g");
	var mask_4_graphics_10 = new cjs.Graphics().p("AjmhUIB1iFIFYEuIh1CFg");
	var mask_4_graphics_11 = new cjs.Graphics().p("AjqhQIB8iNIFZEuIh8CNg");
	var mask_4_graphics_12 = new cjs.Graphics().p("AjthMICCiVIFaEuIiECVg");
	var mask_4_graphics_13 = new cjs.Graphics().p("AjxhIICKidIFZEuIiKCdg");
	var mask_4_graphics_14 = new cjs.Graphics().p("Aj0hEICRilIFYEuIiRClg");
	var mask_4_graphics_15 = new cjs.Graphics().p("Aj4hAICYitIFZEtIiYCug");
	var mask_4_graphics_16 = new cjs.Graphics().p("Aj7g8ICei1IFaEtIigC2g");
	var mask_4_graphics_17 = new cjs.Graphics().p("Aj/g4ICmi9IFZEtIimC+g");
	var mask_4_graphics_18 = new cjs.Graphics().p("AkCg0ICsjFIFZEtIitDGg");
	var mask_4_graphics_19 = new cjs.Graphics().p("AkGgwICzjNIFaEtIi0DOg");
	var mask_4_graphics_20 = new cjs.Graphics().p("AkJgsIC6jVIFaEuIi8DVg");
	var mask_4_graphics_21 = new cjs.Graphics().p("AkNgoIDCjdIFZEuIjCDdg");
	var mask_4_graphics_22 = new cjs.Graphics().p("AkQgkIDIjlIFaEuIjKDlg");
	var mask_4_graphics_23 = new cjs.Graphics().p("AkUggIDPjtIFaEuIjQDtg");
	var mask_4_graphics_24 = new cjs.Graphics().p("AkXgcIDWj1IFZEtIjXD2g");
	var mask_4_graphics_25 = new cjs.Graphics().p("AkbgYIDej9IFZEuIjeD9g");
	var mask_4_graphics_26 = new cjs.Graphics().p("AkegUIDkkFIFaEuIjmEFg");
	var mask_4_graphics_27 = new cjs.Graphics().p("AkigQIDrkNIFaEuIjsENg");
	var mask_4_graphics_28 = new cjs.Graphics().p("AklgMIDykVIFZEuIjzEVg");
	var mask_4_graphics_29 = new cjs.Graphics().p("AkpgIID5kdIFaEuIj6Edg");
	var mask_4_graphics_30 = new cjs.Graphics().p("AksgEID/klIFbEuIkCElg");
	var mask_4_graphics_31 = new cjs.Graphics().p("AkwAAIEHktIFaEuIkIEtg");
	var mask_4_graphics_32 = new cjs.Graphics().p("AkzADIEOk0IFZEvIkPE0g");
	var mask_4_graphics_33 = new cjs.Graphics().p("Ak3AHIEVk8IFaEvIkWE8g");
	var mask_4_graphics_34 = new cjs.Graphics().p("Ak6ALIEblEIFbEvIkeFEg");
	var mask_4_graphics_35 = new cjs.Graphics().p("Ak+AOIEjlLIFaEvIkkFMg");
	var mask_4_graphics_36 = new cjs.Graphics().p("AlBASIEqlTIFZEvIkrFUg");
	var mask_4_graphics_37 = new cjs.Graphics().p("AlFAWIExlbIFaEuIkyFdg");
	var mask_4_graphics_38 = new cjs.Graphics().p("AlIAaIE3liIFaEtIk5Flg");
	var mask_4_graphics_39 = new cjs.Graphics().p("AlMAeIE/lqIFaEtIlAFtg");
	var mask_4_graphics_40 = new cjs.Graphics().p("AlPAiIFGlyIFaEtIlIF1g");
	var mask_4_graphics_41 = new cjs.Graphics().p("AlTAmIFNl6IFaEtIlOF9g");
	var mask_4_graphics_42 = new cjs.Graphics().p("AlWAqIFUmDIFZEvIlVGEg");
	var mask_4_graphics_43 = new cjs.Graphics().p("AlaAuIFamLIFbEvIlbGMg");
	var mask_4_graphics_44 = new cjs.Graphics().p("AldAyIFgmTIFcEvIljGUg");
	var mask_4_graphics_45 = new cjs.Graphics().p("AlhA2IFnmbIFcEvIlpGcg");
	var mask_4_graphics_46 = new cjs.Graphics().p("AlkA6IFumiIFbEtIlwGkg");
	var mask_4_graphics_47 = new cjs.Graphics().p("AloA+IF2mqIFbEtIl3Gsg");
	var mask_4_graphics_48 = new cjs.Graphics().p("AlrBCIF8myIFcEtIl/G0g");
	var mask_4_graphics_49 = new cjs.Graphics().p("AlvBGIGDm6IFcEtImFG8g");
	var mask_4_graphics_50 = new cjs.Graphics().p("AlyBKIGKnCIFbEtImMHEg");
	var mask_4_graphics_51 = new cjs.Graphics().p("Al2BOIGRnKIFcEtImTHMg");
	var mask_4_graphics_52 = new cjs.Graphics().p("Al5BSIGYnSIFcEtImbHUg");
	var mask_4_graphics_53 = new cjs.Graphics().p("Al9BWIGgnaIFbEtImhHcg");
	var mask_4_graphics_54 = new cjs.Graphics().p("AmABaIGmniIFbEtImoHkg");
	var mask_4_graphics_55 = new cjs.Graphics().p("AmEBeIGtnqIFcEtImvHsg");
	var mask_4_graphics_56 = new cjs.Graphics().p("AmHBiIG0nyIFbEuIm1Hzg");
	var mask_4_graphics_57 = new cjs.Graphics().p("AmLBmIG7n6IFcEuIm9H7g");
	var mask_4_graphics_58 = new cjs.Graphics().p("AmOBqIHCoCIFbEuInDIDg");
	var mask_4_graphics_59 = new cjs.Graphics().p("AmSBuIHJoKIFcEtInLIMg");
	var mask_4_graphics_60 = new cjs.Graphics().p("AmVByIHQoSIFbEtInRIUg");
	var mask_4_graphics_61 = new cjs.Graphics().p("AmZB2IHXoaIFcEtInZIcg");
	var mask_4_graphics_62 = new cjs.Graphics().p("AmcB6IHeoiIFbEtInfIkg");
	var mask_4_graphics_63 = new cjs.Graphics().p("AmgB+IHloqIFcEtInnIsg");
	var mask_4_graphics_64 = new cjs.Graphics().p("AmjCCIHsoyIFbEuIntIzg");
	var mask_4_graphics_65 = new cjs.Graphics().p("AmnCGIHzo6IFcEuIn1I7g");
	var mask_4_graphics_66 = new cjs.Graphics().p("AmqCKIH6pCIFbEtIn7JEg");
	var mask_4_graphics_67 = new cjs.Graphics().p("AmuCOIIBpKIFcEtIoDJMg");
	var mask_4_graphics_68 = new cjs.Graphics().p("AmxCSIIIpSIFbEtIoJJUg");
	var mask_4_graphics_69 = new cjs.Graphics().p("Am1CWIIPpaIFcEtIoRJcg");
	var mask_4_graphics_70 = new cjs.Graphics().p("Am4CaIIVpiIFcEtIoXJkg");
	var mask_4_graphics_71 = new cjs.Graphics().p("Am8CeIIdpqIFcEtIofJsg");
	var mask_4_graphics_72 = new cjs.Graphics().p("Am/CiIIjpyIFcEtIolJ0g");
	var mask_4_graphics_73 = new cjs.Graphics().p("AnDCmIIrp6IFcEtIotJ8g");
	var mask_4_graphics_74 = new cjs.Graphics().p("AnGCqIIxqCIFcEtIozKEg");
	var mask_4_graphics_75 = new cjs.Graphics().p("AnKCuII5qKIFcEtIo7KMg");
	var mask_4_graphics_76 = new cjs.Graphics().p("AnNCyII/qSIFcEtIpBKUg");
	var mask_4_graphics_77 = new cjs.Graphics().p("AnRC1IJHqZIFcEtIpJKcg");
	var mask_4_graphics_78 = new cjs.Graphics().p("AnUC5IJNqhIFcEtIpPKkg");
	var mask_4_graphics_79 = new cjs.Graphics().p("AnYC9IJVqpIFcEtIpXKsg");
	var mask_4_graphics_80 = new cjs.Graphics().p("AnbDBIJbqxIFcEtIpdK0g");
	var mask_4_graphics_81 = new cjs.Graphics().p("AnfDFIJjq4IFcEsIplK8g");
	var mask_4_graphics_82 = new cjs.Graphics().p("AniDJIJprAIFcEsIprLEg");
	var mask_4_graphics_83 = new cjs.Graphics().p("AnmDNIJwrIIFdEsIpzLMg");
	var mask_4_graphics_84 = new cjs.Graphics().p("AnpDRIJ3rQIFcEsIp5LUg");
	var mask_4_graphics_85 = new cjs.Graphics().p("AntDVIJ+rYIFdEsIqBLcg");
	var mask_4_graphics_86 = new cjs.Graphics().p("AnwDZIKFrhIFcEtIqHLkg");
	var mask_4_graphics_87 = new cjs.Graphics().p("An0DdIKMroIFdEsIqPLrg");
	var mask_4_graphics_88 = new cjs.Graphics().p("An3DhIKTrwIFcEsIqVLzg");
	var mask_4_graphics_89 = new cjs.Graphics().p("An7DlIKar4IFdEsIqdL7g");
	var mask_4_graphics_90 = new cjs.Graphics().p("An+DpIKhsAIFcEsIqjMDg");
	var mask_4_graphics_91 = new cjs.Graphics().p("AoCDtIKosIIFdEsIqrMLg");
	var mask_4_graphics_92 = new cjs.Graphics().p("AoFDxIKvsQIFcEsIqxMTg");
	var mask_4_graphics_93 = new cjs.Graphics().p("AoJD1IK2sYIFdEsIq5Mbg");
	var mask_4_graphics_94 = new cjs.Graphics().p("AoMD5IK9sgIFcEsIq/Mjg");
	var mask_4_graphics_95 = new cjs.Graphics().p("AoQD9ILEsoIFdEsIrHMrg");
	var mask_4_graphics_96 = new cjs.Graphics().p("AoTEBILKswIFdEsIrNMzg");
	var mask_4_graphics_97 = new cjs.Graphics().p("AoXEFILSs4IFdEsIrVM7g");
	var mask_4_graphics_98 = new cjs.Graphics().p("AoaEJILYtAIFdEsIrbNDg");
	var mask_4_graphics_99 = new cjs.Graphics().p("AoeENILgtIIFdEsIrjNLg");
	var mask_4_graphics_100 = new cjs.Graphics().p("AohERILmtQIFdEsIrpNTg");
	var mask_4_graphics_101 = new cjs.Graphics().p("AolEVILutYIFdEsIrxNbg");
	var mask_4_graphics_102 = new cjs.Graphics().p("AooEZIL0tgIFdEsIr3Njg");
	var mask_4_graphics_103 = new cjs.Graphics().p("ApFE6IMvuiIFcEtIsxOlg");
	var mask_4_graphics_104 = new cjs.Graphics().p("AAMSmINrvnIFaEvItrPng");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_4_graphics_9,x:85,y:149.3}).wait(1).to({graphics:mask_4_graphics_10,x:147.6,y:276.8}).wait(1).to({graphics:mask_4_graphics_11,x:148,y:276.4}).wait(1).to({graphics:mask_4_graphics_12,x:148.3,y:276}).wait(1).to({graphics:mask_4_graphics_13,x:148.7,y:275.6}).wait(1).to({graphics:mask_4_graphics_14,x:149,y:275.2}).wait(1).to({graphics:mask_4_graphics_15,x:149.4,y:274.8}).wait(1).to({graphics:mask_4_graphics_16,x:149.7,y:274.4}).wait(1).to({graphics:mask_4_graphics_17,x:150.1,y:274}).wait(1).to({graphics:mask_4_graphics_18,x:150.4,y:273.6}).wait(1).to({graphics:mask_4_graphics_19,x:150.8,y:273.2}).wait(1).to({graphics:mask_4_graphics_20,x:151.1,y:272.8}).wait(1).to({graphics:mask_4_graphics_21,x:151.5,y:272.4}).wait(1).to({graphics:mask_4_graphics_22,x:151.8,y:272}).wait(1).to({graphics:mask_4_graphics_23,x:152.2,y:271.6}).wait(1).to({graphics:mask_4_graphics_24,x:152.5,y:271.2}).wait(1).to({graphics:mask_4_graphics_25,x:152.9,y:270.8}).wait(1).to({graphics:mask_4_graphics_26,x:153.2,y:270.4}).wait(1).to({graphics:mask_4_graphics_27,x:153.6,y:270}).wait(1).to({graphics:mask_4_graphics_28,x:153.9,y:269.6}).wait(1).to({graphics:mask_4_graphics_29,x:154.3,y:269.2}).wait(1).to({graphics:mask_4_graphics_30,x:154.6,y:268.8}).wait(1).to({graphics:mask_4_graphics_31,x:155,y:268.4}).wait(1).to({graphics:mask_4_graphics_32,x:155.3,y:268}).wait(1).to({graphics:mask_4_graphics_33,x:155.7,y:267.6}).wait(1).to({graphics:mask_4_graphics_34,x:156,y:267.2}).wait(1).to({graphics:mask_4_graphics_35,x:156.4,y:266.9}).wait(1).to({graphics:mask_4_graphics_36,x:156.7,y:266.5}).wait(1).to({graphics:mask_4_graphics_37,x:157.1,y:266.1}).wait(1).to({graphics:mask_4_graphics_38,x:157.4,y:265.7}).wait(1).to({graphics:mask_4_graphics_39,x:157.8,y:265.3}).wait(1).to({graphics:mask_4_graphics_40,x:158.1,y:264.9}).wait(1).to({graphics:mask_4_graphics_41,x:158.5,y:264.5}).wait(1).to({graphics:mask_4_graphics_42,x:158.8,y:264.1}).wait(1).to({graphics:mask_4_graphics_43,x:159.2,y:263.7}).wait(1).to({graphics:mask_4_graphics_44,x:159.5,y:263.3}).wait(1).to({graphics:mask_4_graphics_45,x:159.9,y:262.9}).wait(1).to({graphics:mask_4_graphics_46,x:160.2,y:262.5}).wait(1).to({graphics:mask_4_graphics_47,x:160.6,y:262.1}).wait(1).to({graphics:mask_4_graphics_48,x:160.9,y:261.7}).wait(1).to({graphics:mask_4_graphics_49,x:161.3,y:261.3}).wait(1).to({graphics:mask_4_graphics_50,x:161.6,y:260.9}).wait(1).to({graphics:mask_4_graphics_51,x:162,y:260.5}).wait(1).to({graphics:mask_4_graphics_52,x:162.3,y:260.1}).wait(1).to({graphics:mask_4_graphics_53,x:162.7,y:259.7}).wait(1).to({graphics:mask_4_graphics_54,x:163,y:259.3}).wait(1).to({graphics:mask_4_graphics_55,x:163.4,y:258.9}).wait(1).to({graphics:mask_4_graphics_56,x:163.7,y:258.5}).wait(1).to({graphics:mask_4_graphics_57,x:164,y:258.1}).wait(1).to({graphics:mask_4_graphics_58,x:164.4,y:257.7}).wait(1).to({graphics:mask_4_graphics_59,x:164.7,y:257.3}).wait(1).to({graphics:mask_4_graphics_60,x:165.1,y:256.9}).wait(1).to({graphics:mask_4_graphics_61,x:165.4,y:256.5}).wait(1).to({graphics:mask_4_graphics_62,x:165.8,y:256.1}).wait(1).to({graphics:mask_4_graphics_63,x:166.1,y:255.7}).wait(1).to({graphics:mask_4_graphics_64,x:166.5,y:255.3}).wait(1).to({graphics:mask_4_graphics_65,x:166.8,y:254.9}).wait(1).to({graphics:mask_4_graphics_66,x:167.2,y:254.5}).wait(1).to({graphics:mask_4_graphics_67,x:167.5,y:254.1}).wait(1).to({graphics:mask_4_graphics_68,x:167.9,y:253.7}).wait(1).to({graphics:mask_4_graphics_69,x:168.2,y:253.3}).wait(1).to({graphics:mask_4_graphics_70,x:168.6,y:252.9}).wait(1).to({graphics:mask_4_graphics_71,x:168.9,y:252.5}).wait(1).to({graphics:mask_4_graphics_72,x:169.3,y:252.1}).wait(1).to({graphics:mask_4_graphics_73,x:169.6,y:251.7}).wait(1).to({graphics:mask_4_graphics_74,x:170,y:251.3}).wait(1).to({graphics:mask_4_graphics_75,x:170.3,y:250.9}).wait(1).to({graphics:mask_4_graphics_76,x:170.7,y:250.5}).wait(1).to({graphics:mask_4_graphics_77,x:171,y:250.2}).wait(1).to({graphics:mask_4_graphics_78,x:171.4,y:249.8}).wait(1).to({graphics:mask_4_graphics_79,x:171.7,y:249.4}).wait(1).to({graphics:mask_4_graphics_80,x:172.1,y:249}).wait(1).to({graphics:mask_4_graphics_81,x:172.4,y:248.6}).wait(1).to({graphics:mask_4_graphics_82,x:172.8,y:248.2}).wait(1).to({graphics:mask_4_graphics_83,x:173.1,y:247.8}).wait(1).to({graphics:mask_4_graphics_84,x:173.5,y:247.4}).wait(1).to({graphics:mask_4_graphics_85,x:173.8,y:247}).wait(1).to({graphics:mask_4_graphics_86,x:174.2,y:246.6}).wait(1).to({graphics:mask_4_graphics_87,x:174.5,y:246.2}).wait(1).to({graphics:mask_4_graphics_88,x:174.9,y:245.8}).wait(1).to({graphics:mask_4_graphics_89,x:175.2,y:245.4}).wait(1).to({graphics:mask_4_graphics_90,x:175.6,y:245}).wait(1).to({graphics:mask_4_graphics_91,x:175.9,y:244.6}).wait(1).to({graphics:mask_4_graphics_92,x:176.3,y:244.2}).wait(1).to({graphics:mask_4_graphics_93,x:176.6,y:243.8}).wait(1).to({graphics:mask_4_graphics_94,x:177,y:243.4}).wait(1).to({graphics:mask_4_graphics_95,x:177.3,y:243}).wait(1).to({graphics:mask_4_graphics_96,x:177.7,y:242.6}).wait(1).to({graphics:mask_4_graphics_97,x:178,y:242.2}).wait(1).to({graphics:mask_4_graphics_98,x:178.4,y:241.8}).wait(1).to({graphics:mask_4_graphics_99,x:178.7,y:241.4}).wait(1).to({graphics:mask_4_graphics_100,x:179.1,y:241}).wait(1).to({graphics:mask_4_graphics_101,x:179.4,y:240.6}).wait(1).to({graphics:mask_4_graphics_102,x:179.8,y:240.2}).wait(1).to({graphics:mask_4_graphics_103,x:182.7,y:236.9}).wait(1).to({graphics:mask_4_graphics_104,x:123.3,y:149.3}).wait(336));

	// Layer 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("AlEGLQFSlRE3nE");
	this.shape_6.setTransform(185.5,233.6);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(9).to({_off:false},0).wait(431));

	// Letter
	this.instance_4 = new lib.Symbol1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,275);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(440));

	// Background
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_7.setTransform(275,275,3.373,2.543);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_8.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(440));

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