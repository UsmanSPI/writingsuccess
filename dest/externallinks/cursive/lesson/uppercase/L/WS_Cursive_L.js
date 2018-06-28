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
	this.shape.graphics.f("#FFFFFF").s().p("AEfYXQjEgxjahfQh1gxqiliQh6BCiQAgQiHAdiVAAQijAAiBg7QinhJAAiLQAAhOA0g7QAug2BTgiQCJg9CmAAQCwAAFYCdQEUjEGQrPQk7BHjsAAQjcAAhfgqQhTgdgBhRQABh3BuAAIAmAAQB/AiCWAAQDgAAG3hzIGfsPQBcimCYhiQCehsCyAAQCYAABfBRQBnBYAACXQgBC8h6CwQhrCajBCNQimB4jWBnIlqCQQnMNakyEKIBMAsQGwDtDZBYQCyBHCkAnQC5ApCtAAQD6AAEThVQDqhKEBiIIBAgUQB0AAABCCQAAAug0AsQgrAlk2CGQjCBJjDAqQjSAsjBAAQjZAAjjg2gA6cNVQAAAsDgAAQCCAAB3gdQiXg4jGAAQh8AAAAApgAKZ0TQhVA/g/BuQhNB9jRGkQETh6DJidQCDhmBKhkQBWh1gBhxQAAhVhyAAQh1AAhlBOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-192.7,-161.2,385.5,322.6);


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


(lib.ar4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-48.7,-31.5,1,1,-17.5,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-94.4,guide:{path:[-47.9,-29.4,-30.4,37.2,47,28.6]}},119).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AlhCZICwlVIBHAkIixFVg");
	var mask_graphics_1 = new cjs.Graphics().p("Ah+CXICvlVIBOAoIivFVg");
	var mask_graphics_2 = new cjs.Graphics().p("AiDCUICwlVIBXAtIiwFVg");
	var mask_graphics_3 = new cjs.Graphics().p("AiHCSICwlVIBfAyIivFVg");
	var mask_graphics_4 = new cjs.Graphics().p("AiLCQICvlVIBoA2IivFVg");
	var mask_graphics_5 = new cjs.Graphics().p("AiPCOICvlVIBxA6IiwFVg");
	var mask_graphics_6 = new cjs.Graphics().p("AiUCMICwlVIB5A+IiwFVg");
	var mask_graphics_7 = new cjs.Graphics().p("AiYCJICwlVICBBEIivFVg");
	var mask_graphics_8 = new cjs.Graphics().p("AicCHICvlVICKBHIivFVg");
	var mask_graphics_9 = new cjs.Graphics().p("AigCFICvlVICTBMIiwFVg");
	var mask_graphics_10 = new cjs.Graphics().p("AilCDICwlVICbBQIiwFVg");
	var mask_graphics_11 = new cjs.Graphics().p("AipCBICwlVICjBUIiwFVg");
	var mask_graphics_12 = new cjs.Graphics().p("AitB/ICvlVICsBYIivFVg");
	var mask_graphics_13 = new cjs.Graphics().p("AixB8ICwlVICzBdIiwFVg");
	var mask_graphics_14 = new cjs.Graphics().p("Ai2B6ICxlVIC8BiIixFVg");
	var mask_graphics_15 = new cjs.Graphics().p("Ai6B4ICxlVIDEBmIixFVg");
	var mask_graphics_16 = new cjs.Graphics().p("Ai+B2ICwlVIDNBqIiwFVg");
	var mask_graphics_17 = new cjs.Graphics().p("AjCB0ICwlVIDVBuIiwFVg");
	var mask_graphics_18 = new cjs.Graphics().p("AjHBxICxlVIDeB0IixFVg");
	var mask_graphics_19 = new cjs.Graphics().p("AjLBvICxlVIDmB4IixFVg");
	var mask_graphics_20 = new cjs.Graphics().p("AjPBtICwlVIDvB8IiwFVg");
	var mask_graphics_21 = new cjs.Graphics().p("AjTBrICwlVID3CAIiwFVg");
	var mask_graphics_22 = new cjs.Graphics().p("AjYBpICxlVIEACEIixFVg");
	var mask_graphics_23 = new cjs.Graphics().p("AjcBmICxlVIEICJIiwFVg");
	var mask_graphics_24 = new cjs.Graphics().p("AjgBkICwlVIERCOIiwFVg");
	var mask_graphics_25 = new cjs.Graphics().p("AjkBiICwlVIEaCSIixFVg");
	var mask_graphics_26 = new cjs.Graphics().p("AjpBgICxlVIEiCWIixFVg");
	var mask_graphics_27 = new cjs.Graphics().p("AjtBeICxlVIEqCaIiwFVg");
	var mask_graphics_28 = new cjs.Graphics().p("AjxBbICwlVIEzCgIiwFVg");
	var mask_graphics_29 = new cjs.Graphics().p("Aj1BZICwlVIE8CkIixFVg");
	var mask_graphics_30 = new cjs.Graphics().p("Aj6BXICxlVIFECoIixFVg");
	var mask_graphics_31 = new cjs.Graphics().p("Aj+BVICxlVIFMCsIixFVg");
	var mask_graphics_32 = new cjs.Graphics().p("AkCBTICwlVIFVCwIiwFVg");
	var mask_graphics_33 = new cjs.Graphics().p("AkGBQICwlVIFdC1IiwFVg");
	var mask_graphics_34 = new cjs.Graphics().p("AkLBOICxlVIFmC6IixFVg");
	var mask_graphics_35 = new cjs.Graphics().p("AkPBMICxlVIFuC+IixFVg");
	var mask_graphics_36 = new cjs.Graphics().p("AkTBKICwlVIF3DCIiwFVg");
	var mask_graphics_37 = new cjs.Graphics().p("AkXBIICwlVIF/DGIiwFVg");
	var mask_graphics_38 = new cjs.Graphics().p("AkcBFICxlVIGIDMIixFVg");
	var mask_graphics_39 = new cjs.Graphics().p("AkgBDICxlVIGQDQIiwFVg");
	var mask_graphics_40 = new cjs.Graphics().p("AkkBBICwlVIGZDUIiwFVg");
	var mask_graphics_41 = new cjs.Graphics().p("AkoA/ICwlVIGiDYIixFVg");
	var mask_graphics_42 = new cjs.Graphics().p("AktA9ICxlVIGqDcIixFVg");
	var mask_graphics_43 = new cjs.Graphics().p("AkxA6ICxlVIGyDhIiwFVg");
	var mask_graphics_44 = new cjs.Graphics().p("Ak1A4ICwlVIG7DmIiwFVg");
	var mask_graphics_45 = new cjs.Graphics().p("Ak5A2ICwlVIHEDqIixFVg");
	var mask_graphics_46 = new cjs.Graphics().p("Ak+A0ICxlVIHMDuIixFVg");
	var mask_graphics_47 = new cjs.Graphics().p("AlCAyICxlVIHUDyIixFVg");
	var mask_graphics_48 = new cjs.Graphics().p("AlGAvICwlVIHdD4IiwFVg");
	var mask_graphics_49 = new cjs.Graphics().p("AlKAtICwlVIHlD8IiwFVg");
	var mask_graphics_50 = new cjs.Graphics().p("AlPArICxlVIHuEAIixFVg");
	var mask_graphics_51 = new cjs.Graphics().p("AlTApICxlVIH2EEIixFVg");
	var mask_graphics_52 = new cjs.Graphics().p("AlXAnICwlVIH/EIIiwFVg");
	var mask_graphics_53 = new cjs.Graphics().p("AlbAkICwlVIIHENIiwFWg");
	var mask_graphics_54 = new cjs.Graphics().p("AlgAiICxlVIIQESIixFVg");
	var mask_graphics_55 = new cjs.Graphics().p("AlkAgICxlVIIYEWIixFVg");
	var mask_graphics_56 = new cjs.Graphics().p("AloAeICwlVIIhEaIiwFVg");
	var mask_graphics_57 = new cjs.Graphics().p("AlsAcICwlVIIqEeIixFVg");
	var mask_graphics_58 = new cjs.Graphics().p("AlxAZICxlVIIyEjIixFVg");
	var mask_graphics_59 = new cjs.Graphics().p("Al1AXICwlVII7EoIiwFVg");
	var mask_graphics_60 = new cjs.Graphics().p("Al6AVICxlVIJDEsIiwFVg");
	var mask_graphics_61 = new cjs.Graphics().p("Al+ATICwlVIJNEwIixFVg");
	var mask_graphics_62 = new cjs.Graphics().p("AmCARICwlVIJVE1IiwFVg");
	var mask_graphics_63 = new cjs.Graphics().p("AmHAOICxlVIJdE6IiwFVg");
	var mask_graphics_64 = new cjs.Graphics().p("AmLAMICxlVIJmE+IixFVg");
	var mask_graphics_65 = new cjs.Graphics().p("AmPAKICwlVIJvFCIixFVg");
	var mask_graphics_66 = new cjs.Graphics().p("AmTAIICwlVIJ3FGIiwFVg");
	var mask_graphics_67 = new cjs.Graphics().p("AmYAGICxlVIKAFKIixFVg");
	var mask_graphics_68 = new cjs.Graphics().p("AmcADICxlVIKIFQIixFVg");
	var mask_graphics_69 = new cjs.Graphics().p("AmgABICwlVIKRFUIiwFVg");
	var mask_graphics_70 = new cjs.Graphics().p("AmkAAICwlWIKZFXIiwFWg");
	var mask_graphics_71 = new cjs.Graphics().p("AmpgCICxlWIKiFbIixFWg");
	var mask_graphics_72 = new cjs.Graphics().p("AmtgEICxlWIKqFgIixFWg");
	var mask_graphics_73 = new cjs.Graphics().p("AmxgHICwlWIKzFlIiwFWg");
	var mask_graphics_74 = new cjs.Graphics().p("Am1gJICwlWIK7FpIiwFWg");
	var mask_graphics_75 = new cjs.Graphics().p("Am6gLICxlWILEFtIixFWg");
	var mask_graphics_76 = new cjs.Graphics().p("Am+gNICxlWILMFxIixFWg");
	var mask_graphics_77 = new cjs.Graphics().p("AnCgPICwlWILVF1IixFWg");
	var mask_graphics_78 = new cjs.Graphics().p("AnGgSICwlWILdF7IiwFWg");
	var mask_graphics_79 = new cjs.Graphics().p("AnLgUICxlWILlF/IiwFWg");
	var mask_graphics_80 = new cjs.Graphics().p("AnPgWICxlWILuGDIixFWg");
	var mask_graphics_81 = new cjs.Graphics().p("AnTgYICwlWIL3GHIixFWg");
	var mask_graphics_82 = new cjs.Graphics().p("AnXgaICwlWIL/GMIiwFWg");
	var mask_graphics_83 = new cjs.Graphics().p("AncgdICxlWIMHGRIiwFWg");
	var mask_graphics_84 = new cjs.Graphics().p("AnggfICxlWIMQGVIixFWg");
	var mask_graphics_85 = new cjs.Graphics().p("AnkghICwlWIMZGZIiwFWg");
	var mask_graphics_86 = new cjs.Graphics().p("AnogjICwlWIMhGdIiwFWg");
	var mask_graphics_87 = new cjs.Graphics().p("AntglICxlWIMqGhIixFWg");
	var mask_graphics_88 = new cjs.Graphics().p("AnxgoICxlWIMyGnIixFWg");
	var mask_graphics_89 = new cjs.Graphics().p("An1gqICwlWIM7GrIiwFWg");
	var mask_graphics_90 = new cjs.Graphics().p("An5gsICwlWINDGvIiwFWg");
	var mask_graphics_91 = new cjs.Graphics().p("An+guICxlWINMGzIixFWg");
	var mask_graphics_92 = new cjs.Graphics().p("AoCgwICxlWINUG4IixFWg");
	var mask_graphics_93 = new cjs.Graphics().p("AoGgyICwlWINdG7IixFWg");
	var mask_graphics_94 = new cjs.Graphics().p("AoKg1ICwlWINlHBIiwFWg");
	var mask_graphics_95 = new cjs.Graphics().p("AoPg3ICxlWINtHFIiwFWg");
	var mask_graphics_96 = new cjs.Graphics().p("AoTg5ICxlWIN2HJIixFWg");
	var mask_graphics_97 = new cjs.Graphics().p("AoXg7ICwlWIN/HNIixFWg");
	var mask_graphics_98 = new cjs.Graphics().p("Aobg9ICwlWIOHHRIiwFWg");
	var mask_graphics_99 = new cjs.Graphics().p("AoghAICxlWIOPHXIiwFWg");
	var mask_graphics_100 = new cjs.Graphics().p("AokhCICxlWIOYHbIixFWg");
	var mask_graphics_101 = new cjs.Graphics().p("AoohEICwlWIOhHfIixFWg");
	var mask_graphics_102 = new cjs.Graphics().p("AoshGICwlWIOpHjIiwFWg");
	var mask_graphics_103 = new cjs.Graphics().p("AoxhIICxlWIOxHoIiwFWg");
	var mask_graphics_104 = new cjs.Graphics().p("Ao1hLICxlWIO6HtIixFWg");
	var mask_graphics_105 = new cjs.Graphics().p("Ao5hNICwlWIPDHxIiwFWg");
	var mask_graphics_106 = new cjs.Graphics().p("Ao9hPICwlWIPLH1IiwFWg");
	var mask_graphics_107 = new cjs.Graphics().p("ApChRICxlWIPUH6IixFWg");
	var mask_graphics_108 = new cjs.Graphics().p("ApGhTICxlWIPcH9IixFWg");
	var mask_graphics_109 = new cjs.Graphics().p("ApKhWICwlWIPlIDIiwFWg");
	var mask_graphics_110 = new cjs.Graphics().p("ApOhYICwlWIPtIHIiwFWg");
	var mask_graphics_111 = new cjs.Graphics().p("ApThaICxlWIP2ILIixFWg");
	var mask_graphics_112 = new cjs.Graphics().p("ApXhcICxlWIP+IPIixFWg");
	var mask_graphics_113 = new cjs.Graphics().p("ApbheICwlWIQHIUIixFWg");
	var mask_graphics_114 = new cjs.Graphics().p("ApfhhICwlWIQPIZIiwFWg");
	var mask_graphics_115 = new cjs.Graphics().p("ApkhjICxlWIQXIdIiwFWg");
	var mask_graphics_116 = new cjs.Graphics().p("ApohlICxlWIQgIhIixFWg");
	var mask_graphics_117 = new cjs.Graphics().p("ApshnICwlWIQpIlIixFWg");
	var mask_graphics_118 = new cjs.Graphics().p("ApwhpICwlWIQxIpIiwFWg");
	var mask_graphics_119 = new cjs.Graphics().p("Ap1hsICxlWIQ6IvIixFWg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-35.4,y:-17.5}).wait(1).to({graphics:mask_graphics_1,x:-58.1,y:-17.2}).wait(1).to({graphics:mask_graphics_2,x:-57.7,y:-17}).wait(1).to({graphics:mask_graphics_3,x:-57.2,y:-16.8}).wait(1).to({graphics:mask_graphics_4,x:-56.8,y:-16.6}).wait(1).to({graphics:mask_graphics_5,x:-56.4,y:-16.3}).wait(1).to({graphics:mask_graphics_6,x:-56,y:-16.1}).wait(1).to({graphics:mask_graphics_7,x:-55.5,y:-15.9}).wait(1).to({graphics:mask_graphics_8,x:-55.1,y:-15.7}).wait(1).to({graphics:mask_graphics_9,x:-54.7,y:-15.5}).wait(1).to({graphics:mask_graphics_10,x:-54.3,y:-15.2}).wait(1).to({graphics:mask_graphics_11,x:-53.8,y:-15}).wait(1).to({graphics:mask_graphics_12,x:-53.4,y:-14.8}).wait(1).to({graphics:mask_graphics_13,x:-53,y:-14.6}).wait(1).to({graphics:mask_graphics_14,x:-52.6,y:-14.4}).wait(1).to({graphics:mask_graphics_15,x:-52.1,y:-14.1}).wait(1).to({graphics:mask_graphics_16,x:-51.7,y:-13.9}).wait(1).to({graphics:mask_graphics_17,x:-51.3,y:-13.7}).wait(1).to({graphics:mask_graphics_18,x:-50.9,y:-13.5}).wait(1).to({graphics:mask_graphics_19,x:-50.4,y:-13.3}).wait(1).to({graphics:mask_graphics_20,x:-50,y:-13}).wait(1).to({graphics:mask_graphics_21,x:-49.6,y:-12.8}).wait(1).to({graphics:mask_graphics_22,x:-49.2,y:-12.6}).wait(1).to({graphics:mask_graphics_23,x:-48.7,y:-12.4}).wait(1).to({graphics:mask_graphics_24,x:-48.3,y:-12.2}).wait(1).to({graphics:mask_graphics_25,x:-47.9,y:-11.9}).wait(1).to({graphics:mask_graphics_26,x:-47.5,y:-11.7}).wait(1).to({graphics:mask_graphics_27,x:-47,y:-11.5}).wait(1).to({graphics:mask_graphics_28,x:-46.6,y:-11.3}).wait(1).to({graphics:mask_graphics_29,x:-46.2,y:-11.1}).wait(1).to({graphics:mask_graphics_30,x:-45.8,y:-10.8}).wait(1).to({graphics:mask_graphics_31,x:-45.3,y:-10.6}).wait(1).to({graphics:mask_graphics_32,x:-44.9,y:-10.4}).wait(1).to({graphics:mask_graphics_33,x:-44.5,y:-10.2}).wait(1).to({graphics:mask_graphics_34,x:-44.1,y:-10}).wait(1).to({graphics:mask_graphics_35,x:-43.6,y:-9.7}).wait(1).to({graphics:mask_graphics_36,x:-43.2,y:-9.5}).wait(1).to({graphics:mask_graphics_37,x:-42.8,y:-9.3}).wait(1).to({graphics:mask_graphics_38,x:-42.4,y:-9.1}).wait(1).to({graphics:mask_graphics_39,x:-41.9,y:-8.9}).wait(1).to({graphics:mask_graphics_40,x:-41.5,y:-8.6}).wait(1).to({graphics:mask_graphics_41,x:-41.1,y:-8.4}).wait(1).to({graphics:mask_graphics_42,x:-40.7,y:-8.2}).wait(1).to({graphics:mask_graphics_43,x:-40.2,y:-8}).wait(1).to({graphics:mask_graphics_44,x:-39.8,y:-7.8}).wait(1).to({graphics:mask_graphics_45,x:-39.4,y:-7.5}).wait(1).to({graphics:mask_graphics_46,x:-39,y:-7.3}).wait(1).to({graphics:mask_graphics_47,x:-38.5,y:-7.1}).wait(1).to({graphics:mask_graphics_48,x:-38.1,y:-6.9}).wait(1).to({graphics:mask_graphics_49,x:-37.7,y:-6.7}).wait(1).to({graphics:mask_graphics_50,x:-37.3,y:-6.5}).wait(1).to({graphics:mask_graphics_51,x:-36.8,y:-6.2}).wait(1).to({graphics:mask_graphics_52,x:-36.4,y:-6}).wait(1).to({graphics:mask_graphics_53,x:-36,y:-5.8}).wait(1).to({graphics:mask_graphics_54,x:-35.6,y:-5.6}).wait(1).to({graphics:mask_graphics_55,x:-35.1,y:-5.4}).wait(1).to({graphics:mask_graphics_56,x:-34.7,y:-5.1}).wait(1).to({graphics:mask_graphics_57,x:-34.3,y:-4.9}).wait(1).to({graphics:mask_graphics_58,x:-33.9,y:-4.7}).wait(1).to({graphics:mask_graphics_59,x:-33.4,y:-4.5}).wait(1).to({graphics:mask_graphics_60,x:-33,y:-4.3}).wait(1).to({graphics:mask_graphics_61,x:-32.6,y:-4.1}).wait(1).to({graphics:mask_graphics_62,x:-32.2,y:-3.8}).wait(1).to({graphics:mask_graphics_63,x:-31.7,y:-3.6}).wait(1).to({graphics:mask_graphics_64,x:-31.3,y:-3.4}).wait(1).to({graphics:mask_graphics_65,x:-30.9,y:-3.2}).wait(1).to({graphics:mask_graphics_66,x:-30.5,y:-3}).wait(1).to({graphics:mask_graphics_67,x:-30,y:-2.7}).wait(1).to({graphics:mask_graphics_68,x:-29.6,y:-2.5}).wait(1).to({graphics:mask_graphics_69,x:-29.2,y:-2.3}).wait(1).to({graphics:mask_graphics_70,x:-28.8,y:-2.1}).wait(1).to({graphics:mask_graphics_71,x:-28.3,y:-1.9}).wait(1).to({graphics:mask_graphics_72,x:-27.9,y:-1.6}).wait(1).to({graphics:mask_graphics_73,x:-27.5,y:-1.4}).wait(1).to({graphics:mask_graphics_74,x:-27.1,y:-1.2}).wait(1).to({graphics:mask_graphics_75,x:-26.6,y:-1}).wait(1).to({graphics:mask_graphics_76,x:-26.2,y:-0.8}).wait(1).to({graphics:mask_graphics_77,x:-25.8,y:-0.5}).wait(1).to({graphics:mask_graphics_78,x:-25.4,y:-0.3}).wait(1).to({graphics:mask_graphics_79,x:-24.9,y:-0.1}).wait(1).to({graphics:mask_graphics_80,x:-24.5,y:0.1}).wait(1).to({graphics:mask_graphics_81,x:-24.1,y:0.3}).wait(1).to({graphics:mask_graphics_82,x:-23.7,y:0.6}).wait(1).to({graphics:mask_graphics_83,x:-23.2,y:0.8}).wait(1).to({graphics:mask_graphics_84,x:-22.8,y:1}).wait(1).to({graphics:mask_graphics_85,x:-22.4,y:1.2}).wait(1).to({graphics:mask_graphics_86,x:-22,y:1.4}).wait(1).to({graphics:mask_graphics_87,x:-21.5,y:1.7}).wait(1).to({graphics:mask_graphics_88,x:-21.1,y:1.9}).wait(1).to({graphics:mask_graphics_89,x:-20.7,y:2.1}).wait(1).to({graphics:mask_graphics_90,x:-20.3,y:2.3}).wait(1).to({graphics:mask_graphics_91,x:-19.8,y:2.5}).wait(1).to({graphics:mask_graphics_92,x:-19.4,y:2.8}).wait(1).to({graphics:mask_graphics_93,x:-19,y:3}).wait(1).to({graphics:mask_graphics_94,x:-18.6,y:3.2}).wait(1).to({graphics:mask_graphics_95,x:-18.1,y:3.4}).wait(1).to({graphics:mask_graphics_96,x:-17.7,y:3.6}).wait(1).to({graphics:mask_graphics_97,x:-17.3,y:3.9}).wait(1).to({graphics:mask_graphics_98,x:-16.9,y:4.1}).wait(1).to({graphics:mask_graphics_99,x:-16.4,y:4.3}).wait(1).to({graphics:mask_graphics_100,x:-16,y:4.5}).wait(1).to({graphics:mask_graphics_101,x:-15.6,y:4.7}).wait(1).to({graphics:mask_graphics_102,x:-15.2,y:5}).wait(1).to({graphics:mask_graphics_103,x:-14.7,y:5.2}).wait(1).to({graphics:mask_graphics_104,x:-14.3,y:5.4}).wait(1).to({graphics:mask_graphics_105,x:-13.9,y:5.6}).wait(1).to({graphics:mask_graphics_106,x:-13.5,y:5.8}).wait(1).to({graphics:mask_graphics_107,x:-13,y:6.1}).wait(1).to({graphics:mask_graphics_108,x:-12.6,y:6.3}).wait(1).to({graphics:mask_graphics_109,x:-12.2,y:6.5}).wait(1).to({graphics:mask_graphics_110,x:-11.8,y:6.7}).wait(1).to({graphics:mask_graphics_111,x:-11.3,y:6.9}).wait(1).to({graphics:mask_graphics_112,x:-10.9,y:7.1}).wait(1).to({graphics:mask_graphics_113,x:-10.5,y:7.4}).wait(1).to({graphics:mask_graphics_114,x:-10.1,y:7.6}).wait(1).to({graphics:mask_graphics_115,x:-9.6,y:7.8}).wait(1).to({graphics:mask_graphics_116,x:-9.2,y:8}).wait(1).to({graphics:mask_graphics_117,x:-8.8,y:8.2}).wait(1).to({graphics:mask_graphics_118,x:-8.4,y:8.5}).wait(1).to({graphics:mask_graphics_119,x:-7.9,y:8.7}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AnfkmQCwKeMPhb");

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.3,-37.3,21.2,38.8);


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
	this.instance.setTransform(-10.7,9.8,1,1,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:33.2,y:-27},89).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AhggxIA+gvIBvCSIg+Avg");
	var mask_graphics_1 = new cjs.Graphics().p("AhZgvIBEgzIBuCSIhCAzg");
	var mask_graphics_2 = new cjs.Graphics().p("AhbgtIBIg3IBvCTIhIA2g");
	var mask_graphics_3 = new cjs.Graphics().p("AhdgsIBMg6IBvCTIhMA6g");
	var mask_graphics_4 = new cjs.Graphics().p("AhggqIBSg+IBvCTIhSA+g");
	var mask_graphics_5 = new cjs.Graphics().p("AhigoIBWhBIBvCSIhWBBg");
	var mask_graphics_6 = new cjs.Graphics().p("AhlgmIBchFIBvCSIhcBFg");
	var mask_graphics_7 = new cjs.Graphics().p("AhngkIBghJIBvCSIhgBJg");
	var mask_graphics_8 = new cjs.Graphics().p("AhpgiIBkhNIBwCSIhmBNg");
	var mask_graphics_9 = new cjs.Graphics().p("AhsggIBqhRIBvCTIhqBQg");
	var mask_graphics_10 = new cjs.Graphics().p("AhvgfIBvhUIBwCTIhwBUg");
	var mask_graphics_11 = new cjs.Graphics().p("AhxgdIBzhYIBwCTIhzBXg");
	var mask_graphics_12 = new cjs.Graphics().p("Ah0gbIB5hcIBvCTIh3Bcg");
	var mask_graphics_13 = new cjs.Graphics().p("Ah2gZIB9hgIBwCTIh9Bgg");
	var mask_graphics_14 = new cjs.Graphics().p("Ah4gXICBhjIBwCSIiBBkg");
	var mask_graphics_15 = new cjs.Graphics().p("Ah7gVICHhnIBwCSIiHBng");
	var mask_graphics_16 = new cjs.Graphics().p("Ah9gUICLhqIBwCTIiLBqg");
	var mask_graphics_17 = new cjs.Graphics().p("AiAgSICRhuIBwCSIiRBvg");
	var mask_graphics_18 = new cjs.Graphics().p("AiCgQICVhyIBwCTIiVByg");
	var mask_graphics_19 = new cjs.Graphics().p("AiEgOICZh1IBwCSIiaB2g");
	var mask_graphics_20 = new cjs.Graphics().p("AiHgMICfh6IBwCTIifB6g");
	var mask_graphics_21 = new cjs.Graphics().p("AiJgKICjh9IBxCSIilB9g");
	var mask_graphics_22 = new cjs.Graphics().p("AiMgIICpiBIBwCSIipCBg");
	var mask_graphics_23 = new cjs.Graphics().p("AiPgHICviEIBvCTIitCEg");
	var mask_graphics_24 = new cjs.Graphics().p("AiRgFICziIIBwCTIizCIg");
	var mask_graphics_25 = new cjs.Graphics().p("AiTgDIC3iMIBwCTIi3CMg");
	var mask_graphics_26 = new cjs.Graphics().p("AiWgBIC9iPIBwCSIi9CQg");
	var mask_graphics_27 = new cjs.Graphics().p("AiYAAIDBiTIBwCTIjBCUg");
	var mask_graphics_28 = new cjs.Graphics().p("AibACIDGiWIBxCTIjGCWg");
	var mask_graphics_29 = new cjs.Graphics().p("AidADIDLiZIBwCTIjLCag");
	var mask_graphics_30 = new cjs.Graphics().p("AigAFIDRidIBwCUIjRCdg");
	var mask_graphics_31 = new cjs.Graphics().p("AiiAHIDVihIBwCUIjVChg");
	var mask_graphics_32 = new cjs.Graphics().p("AikAJIDailIBvCUIjaClg");
	var mask_graphics_33 = new cjs.Graphics().p("AinALIDfioIBwCTIjfCpg");
	var mask_graphics_34 = new cjs.Graphics().p("AipANIDjisIBwCTIjjCtg");
	var mask_graphics_35 = new cjs.Graphics().p("AisAPIDpixIBwCUIjpCxg");
	var mask_graphics_36 = new cjs.Graphics().p("AiuARIDti0IBwCTIjtC0g");
	var mask_graphics_37 = new cjs.Graphics().p("AixATIDzi4IBwCTIjzC4g");
	var mask_graphics_38 = new cjs.Graphics().p("AizAVID3i8IBwCTIj3C8g");
	var mask_graphics_39 = new cjs.Graphics().p("Ai2AWID8i/IBxCUIj8C/g");
	var mask_graphics_40 = new cjs.Graphics().p("Ai4AYIEBjDIBwCUIkBDDg");
	var mask_graphics_41 = new cjs.Graphics().p("Ai7AaIEGjHIBxCUIkGDHg");
	var mask_graphics_42 = new cjs.Graphics().p("Ai9AcIELjKIBwCTIkLDLg");
	var mask_graphics_43 = new cjs.Graphics().p("Ai/AeIEQjOIBvCTIkQDOg");
	var mask_graphics_44 = new cjs.Graphics().p("AjCAgIEVjSIBwCUIkVDRg");
	var mask_graphics_45 = new cjs.Graphics().p("AjEAiIEZjWIBwCTIkZDWg");
	var mask_graphics_46 = new cjs.Graphics().p("AjHAjIEfjZIBwCUIkfDZg");
	var mask_graphics_47 = new cjs.Graphics().p("AjJAlIEjjcIBwCTIkjDdg");
	var mask_graphics_48 = new cjs.Graphics().p("AjMAnIEpjhIBwCUIkpDhg");
	var mask_graphics_49 = new cjs.Graphics().p("AjOApIEtjkIBwCTIktDkg");
	var mask_graphics_50 = new cjs.Graphics().p("AjRArIEzjoIBwCTIkzDog");
	var mask_graphics_51 = new cjs.Graphics().p("AjTAtIE3jsIBwCUIk3Drg");
	var mask_graphics_52 = new cjs.Graphics().p("AjWAuIE8jvIBxCUIk9Dvg");
	var mask_graphics_53 = new cjs.Graphics().p("AjYAwIFBjzIBwCUIlBDzg");
	var mask_graphics_54 = new cjs.Graphics().p("AjaAyIFFj2IBwCTIlFD3g");
	var mask_graphics_55 = new cjs.Graphics().p("AjdA0IFLj7IBwCUIlLD7g");
	var mask_graphics_56 = new cjs.Graphics().p("AjfA2IFPj/IBwCUIlPD+g");
	var mask_graphics_57 = new cjs.Graphics().p("AjiA4IFVkCIBwCTIlVECg");
	var mask_graphics_58 = new cjs.Graphics().p("AjkA6IFZkGIBwCTIlZEGg");
	var mask_graphics_59 = new cjs.Graphics().p("AjnA7IFekJIBxCTIleEKg");
	var mask_graphics_60 = new cjs.Graphics().p("AjpA9IFjkNIBwCUIljENg");
	var mask_graphics_61 = new cjs.Graphics().p("AjsA/IFpkRIBwCUIlpERg");
	var mask_graphics_62 = new cjs.Graphics().p("AjuBBIFtkUIBwCTIltEUg");
	var mask_graphics_63 = new cjs.Graphics().p("AjwBDIFxkZIBxCUIlzEYg");
	var mask_graphics_64 = new cjs.Graphics().p("AjzBFIF3kcIBwCTIl3Ecg");
	var mask_graphics_65 = new cjs.Graphics().p("Aj1BHIF7kgIBwCTIl7Egg");
	var mask_graphics_66 = new cjs.Graphics().p("Aj4BIIGBkjIBwCTImBEkg");
	var mask_graphics_67 = new cjs.Graphics().p("Aj7BKIGHknIBvCUImFEng");
	var mask_graphics_68 = new cjs.Graphics().p("Aj9BMIGLkrIBwCUImLErg");
	var mask_graphics_69 = new cjs.Graphics().p("Aj/BOIGPkvIBwCUImPEug");
	var mask_graphics_70 = new cjs.Graphics().p("AkCBQIGVkyIBwCTImVEyg");
	var mask_graphics_71 = new cjs.Graphics().p("AkEBSIGZk2IBwCTImZE2g");
	var mask_graphics_72 = new cjs.Graphics().p("AkHBTIGek5IBxCUImeE5g");
	var mask_graphics_73 = new cjs.Graphics().p("AkJBVIGjk9IBwCTImjE+g");
	var mask_graphics_74 = new cjs.Graphics().p("AkLBXIGolBIBvCUImoFBg");
	var mask_graphics_75 = new cjs.Graphics().p("AkOBZIGtlEIBwCTImtFEg");
	var mask_graphics_76 = new cjs.Graphics().p("AkQBbIGxlJIBxCUImzFIg");
	var mask_graphics_77 = new cjs.Graphics().p("AkTBdIG3lMIBwCTIm3FMg");
	var mask_graphics_78 = new cjs.Graphics().p("AkVBfIG7lQIBwCTIm7FRg");
	var mask_graphics_79 = new cjs.Graphics().p("AkXBhIHAlUIBvCTInAFUg");
	var mask_graphics_80 = new cjs.Graphics().p("AkaBjIHFlYIBwCUInFFXg");
	var mask_graphics_81 = new cjs.Graphics().p("AkdBlIHLlcIBwCTInLFcg");
	var mask_graphics_82 = new cjs.Graphics().p("AkfBmIHPlfIBwCUInPFfg");
	var mask_graphics_83 = new cjs.Graphics().p("AkiBoIHUljIBxCUInUFjg");
	var mask_graphics_84 = new cjs.Graphics().p("AkkBqIHZlnIBwCUInZFng");
	var mask_graphics_85 = new cjs.Graphics().p("AkmBsIHdlqIBwCTIndFqg");
	var mask_graphics_86 = new cjs.Graphics().p("AkpBuIHjluIBwCTInjFug");
	var mask_graphics_87 = new cjs.Graphics().p("AkrBwIHnlyIBwCTInoFyg");
	var mask_graphics_88 = new cjs.Graphics().p("AkuByIHtl2IBwCUIntF1g");
	var mask_graphics_89 = new cjs.Graphics().p("AkwBzIHxl5IBwCUInxF5g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-9.7,y:9.6}).wait(1).to({graphics:mask_graphics_1,x:-10.4,y:9.4}).wait(1).to({graphics:mask_graphics_2,x:-10.2,y:9.2}).wait(1).to({graphics:mask_graphics_3,x:-10,y:9}).wait(1).to({graphics:mask_graphics_4,x:-9.7,y:8.8}).wait(1).to({graphics:mask_graphics_5,x:-9.5,y:8.7}).wait(1).to({graphics:mask_graphics_6,x:-9.3,y:8.5}).wait(1).to({graphics:mask_graphics_7,x:-9,y:8.3}).wait(1).to({graphics:mask_graphics_8,x:-8.8,y:8.1}).wait(1).to({graphics:mask_graphics_9,x:-8.5,y:7.9}).wait(1).to({graphics:mask_graphics_10,x:-8.3,y:7.7}).wait(1).to({graphics:mask_graphics_11,x:-8.1,y:7.6}).wait(1).to({graphics:mask_graphics_12,x:-7.8,y:7.4}).wait(1).to({graphics:mask_graphics_13,x:-7.6,y:7.2}).wait(1).to({graphics:mask_graphics_14,x:-7.4,y:7}).wait(1).to({graphics:mask_graphics_15,x:-7.1,y:6.8}).wait(1).to({graphics:mask_graphics_16,x:-6.9,y:6.7}).wait(1).to({graphics:mask_graphics_17,x:-6.7,y:6.5}).wait(1).to({graphics:mask_graphics_18,x:-6.4,y:6.3}).wait(1).to({graphics:mask_graphics_19,x:-6.2,y:6.1}).wait(1).to({graphics:mask_graphics_20,x:-5.9,y:5.9}).wait(1).to({graphics:mask_graphics_21,x:-5.7,y:5.7}).wait(1).to({graphics:mask_graphics_22,x:-5.5,y:5.5}).wait(1).to({graphics:mask_graphics_23,x:-5.2,y:5.4}).wait(1).to({graphics:mask_graphics_24,x:-5,y:5.2}).wait(1).to({graphics:mask_graphics_25,x:-4.8,y:5}).wait(1).to({graphics:mask_graphics_26,x:-4.5,y:4.8}).wait(1).to({graphics:mask_graphics_27,x:-4.3,y:4.6}).wait(1).to({graphics:mask_graphics_28,x:-4,y:4.4}).wait(1).to({graphics:mask_graphics_29,x:-3.8,y:4.3}).wait(1).to({graphics:mask_graphics_30,x:-3.6,y:4.1}).wait(1).to({graphics:mask_graphics_31,x:-3.3,y:3.9}).wait(1).to({graphics:mask_graphics_32,x:-3.1,y:3.7}).wait(1).to({graphics:mask_graphics_33,x:-2.8,y:3.5}).wait(1).to({graphics:mask_graphics_34,x:-2.6,y:3.4}).wait(1).to({graphics:mask_graphics_35,x:-2.4,y:3.2}).wait(1).to({graphics:mask_graphics_36,x:-2.2,y:3}).wait(1).to({graphics:mask_graphics_37,x:-1.9,y:2.8}).wait(1).to({graphics:mask_graphics_38,x:-1.7,y:2.6}).wait(1).to({graphics:mask_graphics_39,x:-1.4,y:2.4}).wait(1).to({graphics:mask_graphics_40,x:-1.2,y:2.2}).wait(1).to({graphics:mask_graphics_41,x:-0.9,y:2.1}).wait(1).to({graphics:mask_graphics_42,x:-0.7,y:1.9}).wait(1).to({graphics:mask_graphics_43,x:-0.5,y:1.7}).wait(1).to({graphics:mask_graphics_44,x:-0.2,y:1.5}).wait(1).to({graphics:mask_graphics_45,x:0,y:1.3}).wait(1).to({graphics:mask_graphics_46,x:0.2,y:1.1}).wait(1).to({graphics:mask_graphics_47,x:0.5,y:1}).wait(1).to({graphics:mask_graphics_48,x:0.7,y:0.8}).wait(1).to({graphics:mask_graphics_49,x:0.9,y:0.6}).wait(1).to({graphics:mask_graphics_50,x:1.2,y:0.4}).wait(1).to({graphics:mask_graphics_51,x:1.4,y:0.2}).wait(1).to({graphics:mask_graphics_52,x:1.7,y:0}).wait(1).to({graphics:mask_graphics_53,x:1.9,y:-0.2}).wait(1).to({graphics:mask_graphics_54,x:2.1,y:-0.3}).wait(1).to({graphics:mask_graphics_55,x:2.4,y:-0.5}).wait(1).to({graphics:mask_graphics_56,x:2.6,y:-0.7}).wait(1).to({graphics:mask_graphics_57,x:2.8,y:-0.9}).wait(1).to({graphics:mask_graphics_58,x:3.1,y:-1.1}).wait(1).to({graphics:mask_graphics_59,x:3.3,y:-1.2}).wait(1).to({graphics:mask_graphics_60,x:3.6,y:-1.4}).wait(1).to({graphics:mask_graphics_61,x:3.8,y:-1.6}).wait(1).to({graphics:mask_graphics_62,x:4,y:-1.8}).wait(1).to({graphics:mask_graphics_63,x:4.3,y:-2}).wait(1).to({graphics:mask_graphics_64,x:4.5,y:-2.2}).wait(1).to({graphics:mask_graphics_65,x:4.7,y:-2.4}).wait(1).to({graphics:mask_graphics_66,x:5,y:-2.5}).wait(1).to({graphics:mask_graphics_67,x:5.2,y:-2.7}).wait(1).to({graphics:mask_graphics_68,x:5.4,y:-2.9}).wait(1).to({graphics:mask_graphics_69,x:5.7,y:-3.1}).wait(1).to({graphics:mask_graphics_70,x:5.9,y:-3.3}).wait(1).to({graphics:mask_graphics_71,x:6.2,y:-3.5}).wait(1).to({graphics:mask_graphics_72,x:6.4,y:-3.6}).wait(1).to({graphics:mask_graphics_73,x:6.7,y:-3.8}).wait(1).to({graphics:mask_graphics_74,x:6.9,y:-4}).wait(1).to({graphics:mask_graphics_75,x:7.1,y:-4.2}).wait(1).to({graphics:mask_graphics_76,x:7.4,y:-4.4}).wait(1).to({graphics:mask_graphics_77,x:7.6,y:-4.6}).wait(1).to({graphics:mask_graphics_78,x:7.8,y:-4.7}).wait(1).to({graphics:mask_graphics_79,x:8.1,y:-4.9}).wait(1).to({graphics:mask_graphics_80,x:8.3,y:-5.1}).wait(1).to({graphics:mask_graphics_81,x:8.5,y:-5.3}).wait(1).to({graphics:mask_graphics_82,x:8.8,y:-5.5}).wait(1).to({graphics:mask_graphics_83,x:9,y:-5.7}).wait(1).to({graphics:mask_graphics_84,x:9.3,y:-5.8}).wait(1).to({graphics:mask_graphics_85,x:9.5,y:-6}).wait(1).to({graphics:mask_graphics_86,x:9.7,y:-6.2}).wait(1).to({graphics:mask_graphics_87,x:10,y:-6.4}).wait(1).to({graphics:mask_graphics_88,x:10.2,y:-6.6}).wait(1).to({graphics:mask_graphics_89,x:10.4,y:-6.8}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("ADXizQjdDSjQCV");
	this.shape.setTransform(11.5,-9.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-0.1,18.5,19.8);


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
(lib.WS_Cursive_L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_630 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(630).call(this.frame_630).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(169.1,249.5,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[169.2,249.8,216,252.4,261.7,242.3,310.6,231.7,351.6,203.1,366.9,192.4,376.8,177.3,394.3,150.6,376.6,127.9]}},151).wait(15).to({startPosition:0},0).to({guide:{path:[377,127.6,342.2,108.2,308.6,170.2,274.5,233.1,246.1,286.1,217.7,339.1,166.1,367.9,114.3,396.8,92.5,357.2]}},179).wait(15).to({x:93.5,y:357.1},0).to({guide:{path:[93.6,357,96.3,350,110.9,345.6,125.5,341.2,138.5,343.7,151.5,346.2,161.7,351.2,171.9,356.2,181.8,361.3,186.4,363.8,191.7,366.9,211.6,378.5,212.4,379,239.8,394.2,278.8,411.4,317.9,428.6,360.8,423,403.6,417.4,420.4,410.1,437.2,402.9,441.8,400.6,446.3,398.4,448.1,397.2]}},180).wait(16).to({x:447.8,y:397.5},0).to({guide:{path:[447.8,397.4,419.9,340.7,453.9,287.2,487.8,233.9,550.9,228.7,592.5,225.6,629.1,245.2]}},65).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(377.1,127.9,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},151).wait(15).to({_off:false,x:94.1,y:359.9},0).to({_off:true},179).wait(15).to({_off:false,x:450.1,y:395.9},0).to({_off:true},180).wait(82));

	// Layer 13
	this.instance_1 = new lib.ar4("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(343.7,327,1,1,-22.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(369).to({_off:false},0).wait(262));

	// Layer 10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_369 = new cjs.Graphics().p("Ai4JdIAAy5IFxAAIAAS5g");
	var mask_graphics_370 = new cjs.Graphics().p("AjBJdIAAy5IGDAAIAAS5g");
	var mask_graphics_371 = new cjs.Graphics().p("AjLJdIAAy5IGXAAIAAS5g");
	var mask_graphics_372 = new cjs.Graphics().p("AjUJdIAAy5IGpAAIAAS5g");
	var mask_graphics_373 = new cjs.Graphics().p("AjeJdIAAy5IG9AAIAAS5g");
	var mask_graphics_374 = new cjs.Graphics().p("AjnJdIAAy5IHPAAIAAS5g");
	var mask_graphics_375 = new cjs.Graphics().p("AjxJdIAAy5IHjAAIAAS5g");
	var mask_graphics_376 = new cjs.Graphics().p("Aj6JdIAAy5IH1AAIAAS5g");
	var mask_graphics_377 = new cjs.Graphics().p("AkDJdIAAy5IIIAAIAAS5g");
	var mask_graphics_378 = new cjs.Graphics().p("AkNJdIAAy5IIbAAIAAS5g");
	var mask_graphics_379 = new cjs.Graphics().p("AkWJdIAAy5IItAAIAAS5g");
	var mask_graphics_380 = new cjs.Graphics().p("AkgJdIAAy5IJBAAIAAS5g");
	var mask_graphics_381 = new cjs.Graphics().p("AkpJdIAAy5IJTAAIAAS5g");
	var mask_graphics_382 = new cjs.Graphics().p("AkzJdIAAy5IJnAAIAAS5g");
	var mask_graphics_383 = new cjs.Graphics().p("Ak8JdIAAy5IJ5AAIAAS5g");
	var mask_graphics_384 = new cjs.Graphics().p("AlGJdIAAy5IKNAAIAAS5g");
	var mask_graphics_385 = new cjs.Graphics().p("AlPJdIAAy5IKfAAIAAS5g");
	var mask_graphics_386 = new cjs.Graphics().p("AlYJdIAAy5IKyAAIAAS5g");
	var mask_graphics_387 = new cjs.Graphics().p("AliJdIAAy5ILFAAIAAS5g");
	var mask_graphics_388 = new cjs.Graphics().p("AlrJdIAAy5ILYAAIAAS5g");
	var mask_graphics_389 = new cjs.Graphics().p("Al1JdIAAy5ILrAAIAAS5g");
	var mask_graphics_390 = new cjs.Graphics().p("Al+JdIAAy5IL9AAIAAS5g");
	var mask_graphics_391 = new cjs.Graphics().p("AmIJdIAAy5IMRAAIAAS5g");
	var mask_graphics_392 = new cjs.Graphics().p("AmRJdIAAy5IMjAAIAAS5g");
	var mask_graphics_393 = new cjs.Graphics().p("AmbJdIAAy5IM3AAIAAS5g");
	var mask_graphics_394 = new cjs.Graphics().p("AmkJdIAAy5INJAAIAAS5g");
	var mask_graphics_395 = new cjs.Graphics().p("AmtJdIAAy5INcAAIAAS5g");
	var mask_graphics_396 = new cjs.Graphics().p("Am3JdIAAy5INvAAIAAS5g");
	var mask_graphics_397 = new cjs.Graphics().p("AnAJdIAAy5IOCAAIAAS5g");
	var mask_graphics_398 = new cjs.Graphics().p("AnKJdIAAy5IOVAAIAAS5g");
	var mask_graphics_399 = new cjs.Graphics().p("AnTJdIAAy5IOnAAIAAS5g");
	var mask_graphics_400 = new cjs.Graphics().p("AndJdIAAy5IO7AAIAAS5g");
	var mask_graphics_401 = new cjs.Graphics().p("AnmJdIAAy5IPNAAIAAS5g");
	var mask_graphics_402 = new cjs.Graphics().p("AnwJdIAAy5IPhAAIAAS5g");
	var mask_graphics_403 = new cjs.Graphics().p("An5JdIAAy5IPzAAIAAS5g");
	var mask_graphics_404 = new cjs.Graphics().p("AoDJdIAAy5IQHAAIAAS5g");
	var mask_graphics_405 = new cjs.Graphics().p("AoMJdIAAy5IQZAAIAAS5g");
	var mask_graphics_406 = new cjs.Graphics().p("AoVJdIAAy5IQsAAIAAS5g");
	var mask_graphics_407 = new cjs.Graphics().p("AofJdIAAy5IQ/AAIAAS5g");
	var mask_graphics_408 = new cjs.Graphics().p("AooJdIAAy5IRSAAIAAS5g");
	var mask_graphics_409 = new cjs.Graphics().p("AoyJdIAAy5IRlAAIAAS5g");
	var mask_graphics_410 = new cjs.Graphics().p("Ao7JdIAAy5IR3AAIAAS5g");
	var mask_graphics_411 = new cjs.Graphics().p("ApFJdIAAy5ISLAAIAAS5g");
	var mask_graphics_412 = new cjs.Graphics().p("ApOJdIAAy5ISdAAIAAS5g");
	var mask_graphics_413 = new cjs.Graphics().p("ApYJdIAAy5ISxAAIAAS5g");
	var mask_graphics_414 = new cjs.Graphics().p("AphJdIAAy5ITDAAIAAS5g");
	var mask_graphics_415 = new cjs.Graphics().p("ApqJdIAAy5ITVAAIAAS5g");
	var mask_graphics_416 = new cjs.Graphics().p("Ap0JdIAAy5ITpAAIAAS5g");
	var mask_graphics_417 = new cjs.Graphics().p("Ap9JdIAAy5IT7AAIAAS5g");
	var mask_graphics_418 = new cjs.Graphics().p("AqHJdIAAy5IUPAAIAAS5g");
	var mask_graphics_419 = new cjs.Graphics().p("AqQJdIAAy5IUhAAIAAS5g");
	var mask_graphics_420 = new cjs.Graphics().p("AqaJdIAAy5IU1AAIAAS5g");
	var mask_graphics_421 = new cjs.Graphics().p("AqjJdIAAy5IVHAAIAAS5g");
	var mask_graphics_422 = new cjs.Graphics().p("AqtJdIAAy5IVbAAIAAS5g");
	var mask_graphics_423 = new cjs.Graphics().p("Aq2JdIAAy5IVtAAIAAS5g");
	var mask_graphics_424 = new cjs.Graphics().p("Aq/JdIAAy5IV/AAIAAS5g");
	var mask_graphics_425 = new cjs.Graphics().p("ArJJdIAAy5IWTAAIAAS5g");
	var mask_graphics_426 = new cjs.Graphics().p("ArSJdIAAy5IWlAAIAAS5g");
	var mask_graphics_427 = new cjs.Graphics().p("ArcJdIAAy5IW5AAIAAS5g");
	var mask_graphics_428 = new cjs.Graphics().p("ArlJdIAAy5IXLAAIAAS5g");
	var mask_graphics_429 = new cjs.Graphics().p("ArvJdIAAy5IXeAAIAAS5g");
	var mask_graphics_430 = new cjs.Graphics().p("Ar4JdIAAy5IXxAAIAAS5g");
	var mask_graphics_431 = new cjs.Graphics().p("AsCJdIAAy5IYFAAIAAS5g");
	var mask_graphics_432 = new cjs.Graphics().p("AsLJdIAAy5IYXAAIAAS5g");
	var mask_graphics_433 = new cjs.Graphics().p("AsUJdIAAy5IYpAAIAAS5g");
	var mask_graphics_434 = new cjs.Graphics().p("AseJdIAAy5IY9AAIAAS5g");
	var mask_graphics_435 = new cjs.Graphics().p("AsnJdIAAy5IZPAAIAAS5g");
	var mask_graphics_436 = new cjs.Graphics().p("AsxJdIAAy5IZjAAIAAS5g");
	var mask_graphics_437 = new cjs.Graphics().p("As6JdIAAy5IZ1AAIAAS5g");
	var mask_graphics_438 = new cjs.Graphics().p("AtEJdIAAy5IaIAAIAAS5g");
	var mask_graphics_439 = new cjs.Graphics().p("AtNJdIAAy5IabAAIAAS5g");
	var mask_graphics_440 = new cjs.Graphics().p("AtXJdIAAy5IavAAIAAS5g");
	var mask_graphics_441 = new cjs.Graphics().p("AtgJdIAAy5IbBAAIAAS5g");
	var mask_graphics_442 = new cjs.Graphics().p("AtqJdIAAy5IbVAAIAAS5g");
	var mask_graphics_443 = new cjs.Graphics().p("AtzJdIAAy5IbnAAIAAS5g");
	var mask_graphics_444 = new cjs.Graphics().p("At8JdIAAy5Ib5AAIAAS5g");
	var mask_graphics_445 = new cjs.Graphics().p("AuGJdIAAy5IcNAAIAAS5g");
	var mask_graphics_446 = new cjs.Graphics().p("AuPJdIAAy5IcfAAIAAS5g");
	var mask_graphics_447 = new cjs.Graphics().p("AuZJdIAAy5IcyAAIAAS5g");
	var mask_graphics_448 = new cjs.Graphics().p("AuiJdIAAy5IdFAAIAAS5g");
	var mask_graphics_449 = new cjs.Graphics().p("EgKOAixIAAy5IdYAAIAAS5g");
	var mask_graphics_450 = new cjs.Graphics().p("Au2JdIAAy5IdtAAIAAS5g");
	var mask_graphics_451 = new cjs.Graphics().p("AvBJdIAAy5IeCAAIAAS5g");
	var mask_graphics_452 = new cjs.Graphics().p("AvLJdIAAy5IeXAAIAAS5g");
	var mask_graphics_453 = new cjs.Graphics().p("AvWJdIAAy5IetAAIAAS5g");
	var mask_graphics_454 = new cjs.Graphics().p("AvgJdIAAy5IfBAAIAAS5g");
	var mask_graphics_455 = new cjs.Graphics().p("AvrJdIAAy5IfXAAIAAS5g");
	var mask_graphics_456 = new cjs.Graphics().p("Av2JdIAAy5IftAAIAAS5g");
	var mask_graphics_457 = new cjs.Graphics().p("AwAJdIAAy5MAgBAAAIAAS5g");
	var mask_graphics_458 = new cjs.Graphics().p("AwLJdIAAy5MAgXAAAIAAS5g");
	var mask_graphics_459 = new cjs.Graphics().p("AwVJdIAAy5MAgrAAAIAAS5g");
	var mask_graphics_460 = new cjs.Graphics().p("AwgJdIAAy5MAhBAAAIAAS5g");
	var mask_graphics_461 = new cjs.Graphics().p("AwqJdIAAy5MAhVAAAIAAS5g");
	var mask_graphics_462 = new cjs.Graphics().p("Aw1JdIAAy5MAhrAAAIAAS5g");
	var mask_graphics_463 = new cjs.Graphics().p("AxAJdIAAy5MAiAAAAIAAS5g");
	var mask_graphics_464 = new cjs.Graphics().p("AxKJdIAAy5MAiVAAAIAAS5g");
	var mask_graphics_465 = new cjs.Graphics().p("AxVJdIAAy5MAirAAAIAAS5g");
	var mask_graphics_466 = new cjs.Graphics().p("AxfJdIAAy5MAi/AAAIAAS5g");
	var mask_graphics_467 = new cjs.Graphics().p("AxqJdIAAy5MAjVAAAIAAS5g");
	var mask_graphics_468 = new cjs.Graphics().p("Ax0JdIAAy5MAjpAAAIAAS5g");
	var mask_graphics_469 = new cjs.Graphics().p("Ax/JdIAAy5MAj/AAAIAAS5g");
	var mask_graphics_470 = new cjs.Graphics().p("AyJJdIAAy5MAkTAAAIAAS5g");
	var mask_graphics_471 = new cjs.Graphics().p("AyUJdIAAy5MAkpAAAIAAS5g");
	var mask_graphics_472 = new cjs.Graphics().p("AyfJdIAAy5MAk+AAAIAAS5g");
	var mask_graphics_473 = new cjs.Graphics().p("AypJdIAAy5MAlTAAAIAAS5g");
	var mask_graphics_474 = new cjs.Graphics().p("Ay0JdIAAy5MAloAAAIAAS5g");
	var mask_graphics_475 = new cjs.Graphics().p("Ay+JdIAAy5MAl9AAAIAAS5g");
	var mask_graphics_476 = new cjs.Graphics().p("AzJJdIAAy5MAmTAAAIAAS5g");
	var mask_graphics_477 = new cjs.Graphics().p("AzTJdIAAy5MAmnAAAIAAS5g");
	var mask_graphics_478 = new cjs.Graphics().p("AzeJdIAAy5MAm9AAAIAAS5g");
	var mask_graphics_479 = new cjs.Graphics().p("AzpJdIAAy5MAnTAAAIAAS5g");
	var mask_graphics_480 = new cjs.Graphics().p("AzzJdIAAy5MAnnAAAIAAS5g");
	var mask_graphics_481 = new cjs.Graphics().p("Az+JdIAAy5MAn9AAAIAAS5g");
	var mask_graphics_482 = new cjs.Graphics().p("A0IJdIAAy5MAoRAAAIAAS5g");
	var mask_graphics_483 = new cjs.Graphics().p("A0TJdIAAy5MAonAAAIAAS5g");
	var mask_graphics_484 = new cjs.Graphics().p("A0dJdIAAy5MAo7AAAIAAS5g");
	var mask_graphics_485 = new cjs.Graphics().p("A0oJdIAAy5MApRAAAIAAS5g");
	var mask_graphics_486 = new cjs.Graphics().p("A0zJdIAAy5MApmAAAIAAS5g");
	var mask_graphics_487 = new cjs.Graphics().p("A09JdIAAy5MAp7AAAIAAS5g");
	var mask_graphics_488 = new cjs.Graphics().p("A1IJdIAAy5MAqRAAAIAAS5g");
	var mask_graphics_489 = new cjs.Graphics().p("A1SJdIAAy5MAqlAAAIAAS5g");
	var mask_graphics_490 = new cjs.Graphics().p("A1dJdIAAy5MAq7AAAIAAS5g");
	var mask_graphics_491 = new cjs.Graphics().p("A1nJdIAAy5MArPAAAIAAS5g");
	var mask_graphics_492 = new cjs.Graphics().p("A1yJdIAAy5MArlAAAIAAS5g");
	var mask_graphics_493 = new cjs.Graphics().p("A18JdIAAy5MAr5AAAIAAS5g");
	var mask_graphics_494 = new cjs.Graphics().p("A2HJdIAAy5MAsPAAAIAAS5g");
	var mask_graphics_495 = new cjs.Graphics().p("A2SJdIAAy5MAskAAAIAAS5g");
	var mask_graphics_496 = new cjs.Graphics().p("A2cJdIAAy5MAs5AAAIAAS5g");
	var mask_graphics_497 = new cjs.Graphics().p("A2nJdIAAy5MAtOAAAIAAS5g");
	var mask_graphics_498 = new cjs.Graphics().p("A2xJdIAAy5MAtjAAAIAAS5g");
	var mask_graphics_499 = new cjs.Graphics().p("A28JdIAAy5MAt5AAAIAAS5g");
	var mask_graphics_500 = new cjs.Graphics().p("A3GJdIAAy5MAuNAAAIAAS5g");
	var mask_graphics_501 = new cjs.Graphics().p("A3RJdIAAy5MAujAAAIAAS5g");
	var mask_graphics_502 = new cjs.Graphics().p("A3cJdIAAy5MAu5AAAIAAS5g");
	var mask_graphics_503 = new cjs.Graphics().p("A3mJdIAAy5MAvNAAAIAAS5g");
	var mask_graphics_504 = new cjs.Graphics().p("A3xJdIAAy5MAvjAAAIAAS5g");
	var mask_graphics_505 = new cjs.Graphics().p("A37JdIAAy5MAv3AAAIAAS5g");
	var mask_graphics_506 = new cjs.Graphics().p("A4GJdIAAy5MAwNAAAIAAS5g");
	var mask_graphics_507 = new cjs.Graphics().p("A4QJdIAAy5MAwhAAAIAAS5g");
	var mask_graphics_508 = new cjs.Graphics().p("A4bJdIAAy5MAw3AAAIAAS5g");
	var mask_graphics_509 = new cjs.Graphics().p("A4lJdIAAy5MAxLAAAIAAS5g");
	var mask_graphics_510 = new cjs.Graphics().p("A4wJdIAAy5MAxhAAAIAAS5g");
	var mask_graphics_511 = new cjs.Graphics().p("A47JdIAAy5MAx2AAAIAAS5g");
	var mask_graphics_512 = new cjs.Graphics().p("A5FJdIAAy5MAyLAAAIAAS5g");
	var mask_graphics_513 = new cjs.Graphics().p("A5QJdIAAy5MAyhAAAIAAS5g");
	var mask_graphics_514 = new cjs.Graphics().p("A5aJdIAAy5MAy1AAAIAAS5g");
	var mask_graphics_515 = new cjs.Graphics().p("A5lJdIAAy5MAzLAAAIAAS5g");
	var mask_graphics_516 = new cjs.Graphics().p("A5vJdIAAy5MAzfAAAIAAS5g");
	var mask_graphics_517 = new cjs.Graphics().p("A56JdIAAy5MAz1AAAIAAS5g");
	var mask_graphics_518 = new cjs.Graphics().p("A6FJdIAAy5MA0KAAAIAAS5g");
	var mask_graphics_519 = new cjs.Graphics().p("A6PJdIAAy5MA0fAAAIAAS5g");
	var mask_graphics_520 = new cjs.Graphics().p("A6aJdIAAy5MA00AAAIAAS5g");
	var mask_graphics_521 = new cjs.Graphics().p("A6kJdIAAy5MA1JAAAIAAS5g");
	var mask_graphics_522 = new cjs.Graphics().p("A6vJdIAAy5MA1fAAAIAAS5g");
	var mask_graphics_523 = new cjs.Graphics().p("A65JdIAAy5MA1zAAAIAAS5g");
	var mask_graphics_524 = new cjs.Graphics().p("A7EJdIAAy5MA2JAAAIAAS5g");
	var mask_graphics_525 = new cjs.Graphics().p("A7PJdIAAy5MA2fAAAIAAS5g");
	var mask_graphics_526 = new cjs.Graphics().p("A7ZJdIAAy5MA2zAAAIAAS5g");
	var mask_graphics_527 = new cjs.Graphics().p("A7kJdIAAy5MA3JAAAIAAS5g");
	var mask_graphics_528 = new cjs.Graphics().p("A7uJdIAAy5MA3dAAAIAAS5g");
	var mask_graphics_529 = new cjs.Graphics().p("A75JdIAAy5MA3zAAAIAAS5g");
	var mask_graphics_530 = new cjs.Graphics().p("A8DJdIAAy5MA4HAAAIAAS5g");
	var mask_graphics_531 = new cjs.Graphics().p("A8OJdIAAy5MA4dAAAIAAS5g");
	var mask_graphics_532 = new cjs.Graphics().p("A8YJdIAAy5MA4xAAAIAAS5g");
	var mask_graphics_533 = new cjs.Graphics().p("A8jJdIAAy5MA5HAAAIAAS5g");
	var mask_graphics_534 = new cjs.Graphics().p("A8uJdIAAy5MA5cAAAIAAS5g");
	var mask_graphics_535 = new cjs.Graphics().p("A84JdIAAy5MA5xAAAIAAS5g");
	var mask_graphics_536 = new cjs.Graphics().p("A9DJdIAAy5MA6HAAAIAAS5g");
	var mask_graphics_537 = new cjs.Graphics().p("A9NJdIAAy5MA6bAAAIAAS5g");
	var mask_graphics_538 = new cjs.Graphics().p("A9YJdIAAy5MA6xAAAIAAS5g");
	var mask_graphics_539 = new cjs.Graphics().p("A9iJdIAAy5MA7FAAAIAAS5g");
	var mask_graphics_540 = new cjs.Graphics().p("A9tJdIAAy5MA7bAAAIAAS5g");
	var mask_graphics_541 = new cjs.Graphics().p("A94JdIAAy5MA7wAAAIAAS5g");
	var mask_graphics_542 = new cjs.Graphics().p("A+CJdIAAy5MA8FAAAIAAS5g");
	var mask_graphics_543 = new cjs.Graphics().p("A+NJdIAAy5MA8aAAAIAAS5g");
	var mask_graphics_544 = new cjs.Graphics().p("A+XJdIAAy5MA8vAAAIAAS5g");
	var mask_graphics_545 = new cjs.Graphics().p("A+iJdIAAy5MA9FAAAIAAS5g");
	var mask_graphics_546 = new cjs.Graphics().p("EgaPAixIAAy5MA9aAAAIAAS5g");
	var mask_graphics_547 = new cjs.Graphics().p("A+/JdIAAy5MA9/AAAIAAS5g");
	var mask_graphics_548 = new cjs.Graphics().p("A/SJdIAAy5MA+kAAAIAAS5g");
	var mask_graphics_549 = new cjs.Graphics().p("EgbFAixIAAy5MA/JAAAIAAS5g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(369).to({graphics:mask_graphics_369,x:75.6,y:384.5}).wait(1).to({graphics:mask_graphics_370,x:76.5,y:384.5}).wait(1).to({graphics:mask_graphics_371,x:77.5,y:384.5}).wait(1).to({graphics:mask_graphics_372,x:78.4,y:384.5}).wait(1).to({graphics:mask_graphics_373,x:79.3,y:384.5}).wait(1).to({graphics:mask_graphics_374,x:80.3,y:384.5}).wait(1).to({graphics:mask_graphics_375,x:81.2,y:384.5}).wait(1).to({graphics:mask_graphics_376,x:82.2,y:384.5}).wait(1).to({graphics:mask_graphics_377,x:83.1,y:384.5}).wait(1).to({graphics:mask_graphics_378,x:84.1,y:384.5}).wait(1).to({graphics:mask_graphics_379,x:85,y:384.5}).wait(1).to({graphics:mask_graphics_380,x:86,y:384.5}).wait(1).to({graphics:mask_graphics_381,x:86.9,y:384.5}).wait(1).to({graphics:mask_graphics_382,x:87.8,y:384.5}).wait(1).to({graphics:mask_graphics_383,x:88.8,y:384.5}).wait(1).to({graphics:mask_graphics_384,x:89.7,y:384.5}).wait(1).to({graphics:mask_graphics_385,x:90.7,y:384.5}).wait(1).to({graphics:mask_graphics_386,x:91.6,y:384.5}).wait(1).to({graphics:mask_graphics_387,x:92.6,y:384.5}).wait(1).to({graphics:mask_graphics_388,x:93.5,y:384.5}).wait(1).to({graphics:mask_graphics_389,x:94.5,y:384.5}).wait(1).to({graphics:mask_graphics_390,x:95.4,y:384.5}).wait(1).to({graphics:mask_graphics_391,x:96.3,y:384.5}).wait(1).to({graphics:mask_graphics_392,x:97.3,y:384.5}).wait(1).to({graphics:mask_graphics_393,x:98.2,y:384.5}).wait(1).to({graphics:mask_graphics_394,x:99.2,y:384.5}).wait(1).to({graphics:mask_graphics_395,x:100.1,y:384.5}).wait(1).to({graphics:mask_graphics_396,x:101.1,y:384.5}).wait(1).to({graphics:mask_graphics_397,x:102,y:384.5}).wait(1).to({graphics:mask_graphics_398,x:103,y:384.5}).wait(1).to({graphics:mask_graphics_399,x:103.9,y:384.5}).wait(1).to({graphics:mask_graphics_400,x:104.8,y:384.5}).wait(1).to({graphics:mask_graphics_401,x:105.8,y:384.5}).wait(1).to({graphics:mask_graphics_402,x:106.7,y:384.5}).wait(1).to({graphics:mask_graphics_403,x:107.7,y:384.5}).wait(1).to({graphics:mask_graphics_404,x:108.6,y:384.5}).wait(1).to({graphics:mask_graphics_405,x:109.6,y:384.5}).wait(1).to({graphics:mask_graphics_406,x:110.5,y:384.5}).wait(1).to({graphics:mask_graphics_407,x:111.5,y:384.5}).wait(1).to({graphics:mask_graphics_408,x:112.4,y:384.5}).wait(1).to({graphics:mask_graphics_409,x:113.4,y:384.5}).wait(1).to({graphics:mask_graphics_410,x:114.3,y:384.5}).wait(1).to({graphics:mask_graphics_411,x:115.3,y:384.5}).wait(1).to({graphics:mask_graphics_412,x:116.2,y:384.5}).wait(1).to({graphics:mask_graphics_413,x:117.2,y:384.5}).wait(1).to({graphics:mask_graphics_414,x:118.1,y:384.5}).wait(1).to({graphics:mask_graphics_415,x:119,y:384.5}).wait(1).to({graphics:mask_graphics_416,x:120,y:384.5}).wait(1).to({graphics:mask_graphics_417,x:120.9,y:384.5}).wait(1).to({graphics:mask_graphics_418,x:121.9,y:384.5}).wait(1).to({graphics:mask_graphics_419,x:122.8,y:384.5}).wait(1).to({graphics:mask_graphics_420,x:123.8,y:384.5}).wait(1).to({graphics:mask_graphics_421,x:124.7,y:384.5}).wait(1).to({graphics:mask_graphics_422,x:125.7,y:384.5}).wait(1).to({graphics:mask_graphics_423,x:126.6,y:384.5}).wait(1).to({graphics:mask_graphics_424,x:127.5,y:384.5}).wait(1).to({graphics:mask_graphics_425,x:128.5,y:384.5}).wait(1).to({graphics:mask_graphics_426,x:129.4,y:384.5}).wait(1).to({graphics:mask_graphics_427,x:130.4,y:384.5}).wait(1).to({graphics:mask_graphics_428,x:131.3,y:384.5}).wait(1).to({graphics:mask_graphics_429,x:132.3,y:384.5}).wait(1).to({graphics:mask_graphics_430,x:133.2,y:384.5}).wait(1).to({graphics:mask_graphics_431,x:134.2,y:384.5}).wait(1).to({graphics:mask_graphics_432,x:135.1,y:384.5}).wait(1).to({graphics:mask_graphics_433,x:136,y:384.5}).wait(1).to({graphics:mask_graphics_434,x:137,y:384.5}).wait(1).to({graphics:mask_graphics_435,x:137.9,y:384.5}).wait(1).to({graphics:mask_graphics_436,x:138.9,y:384.5}).wait(1).to({graphics:mask_graphics_437,x:139.8,y:384.5}).wait(1).to({graphics:mask_graphics_438,x:140.8,y:384.5}).wait(1).to({graphics:mask_graphics_439,x:141.7,y:384.5}).wait(1).to({graphics:mask_graphics_440,x:142.7,y:384.5}).wait(1).to({graphics:mask_graphics_441,x:143.6,y:384.5}).wait(1).to({graphics:mask_graphics_442,x:144.6,y:384.5}).wait(1).to({graphics:mask_graphics_443,x:145.5,y:384.5}).wait(1).to({graphics:mask_graphics_444,x:146.4,y:384.5}).wait(1).to({graphics:mask_graphics_445,x:147.4,y:384.5}).wait(1).to({graphics:mask_graphics_446,x:148.3,y:384.5}).wait(1).to({graphics:mask_graphics_447,x:149.3,y:384.5}).wait(1).to({graphics:mask_graphics_448,x:150.2,y:384.5}).wait(1).to({graphics:mask_graphics_449,x:122.6,y:222.5}).wait(1).to({graphics:mask_graphics_450,x:152.2,y:384.5}).wait(1).to({graphics:mask_graphics_451,x:153.3,y:384.5}).wait(1).to({graphics:mask_graphics_452,x:154.3,y:384.5}).wait(1).to({graphics:mask_graphics_453,x:155.4,y:384.5}).wait(1).to({graphics:mask_graphics_454,x:156.4,y:384.5}).wait(1).to({graphics:mask_graphics_455,x:157.5,y:384.5}).wait(1).to({graphics:mask_graphics_456,x:158.6,y:384.5}).wait(1).to({graphics:mask_graphics_457,x:159.6,y:384.5}).wait(1).to({graphics:mask_graphics_458,x:160.7,y:384.5}).wait(1).to({graphics:mask_graphics_459,x:161.7,y:384.5}).wait(1).to({graphics:mask_graphics_460,x:162.8,y:384.5}).wait(1).to({graphics:mask_graphics_461,x:163.8,y:384.5}).wait(1).to({graphics:mask_graphics_462,x:164.9,y:384.5}).wait(1).to({graphics:mask_graphics_463,x:166,y:384.5}).wait(1).to({graphics:mask_graphics_464,x:167,y:384.5}).wait(1).to({graphics:mask_graphics_465,x:168.1,y:384.5}).wait(1).to({graphics:mask_graphics_466,x:169.1,y:384.5}).wait(1).to({graphics:mask_graphics_467,x:170.2,y:384.5}).wait(1).to({graphics:mask_graphics_468,x:171.2,y:384.5}).wait(1).to({graphics:mask_graphics_469,x:172.3,y:384.5}).wait(1).to({graphics:mask_graphics_470,x:173.3,y:384.5}).wait(1).to({graphics:mask_graphics_471,x:174.4,y:384.5}).wait(1).to({graphics:mask_graphics_472,x:175.5,y:384.5}).wait(1).to({graphics:mask_graphics_473,x:176.5,y:384.5}).wait(1).to({graphics:mask_graphics_474,x:177.6,y:384.5}).wait(1).to({graphics:mask_graphics_475,x:178.6,y:384.5}).wait(1).to({graphics:mask_graphics_476,x:179.7,y:384.5}).wait(1).to({graphics:mask_graphics_477,x:180.7,y:384.5}).wait(1).to({graphics:mask_graphics_478,x:181.8,y:384.5}).wait(1).to({graphics:mask_graphics_479,x:182.9,y:384.5}).wait(1).to({graphics:mask_graphics_480,x:183.9,y:384.5}).wait(1).to({graphics:mask_graphics_481,x:185,y:384.5}).wait(1).to({graphics:mask_graphics_482,x:186,y:384.5}).wait(1).to({graphics:mask_graphics_483,x:187.1,y:384.5}).wait(1).to({graphics:mask_graphics_484,x:188.1,y:384.5}).wait(1).to({graphics:mask_graphics_485,x:189.2,y:384.5}).wait(1).to({graphics:mask_graphics_486,x:190.3,y:384.5}).wait(1).to({graphics:mask_graphics_487,x:191.3,y:384.5}).wait(1).to({graphics:mask_graphics_488,x:192.4,y:384.5}).wait(1).to({graphics:mask_graphics_489,x:193.4,y:384.5}).wait(1).to({graphics:mask_graphics_490,x:194.5,y:384.5}).wait(1).to({graphics:mask_graphics_491,x:195.5,y:384.5}).wait(1).to({graphics:mask_graphics_492,x:196.6,y:384.5}).wait(1).to({graphics:mask_graphics_493,x:197.6,y:384.5}).wait(1).to({graphics:mask_graphics_494,x:198.7,y:384.5}).wait(1).to({graphics:mask_graphics_495,x:199.8,y:384.5}).wait(1).to({graphics:mask_graphics_496,x:200.8,y:384.5}).wait(1).to({graphics:mask_graphics_497,x:201.9,y:384.5}).wait(1).to({graphics:mask_graphics_498,x:202.9,y:384.5}).wait(1).to({graphics:mask_graphics_499,x:204,y:384.5}).wait(1).to({graphics:mask_graphics_500,x:205,y:384.5}).wait(1).to({graphics:mask_graphics_501,x:206.1,y:384.5}).wait(1).to({graphics:mask_graphics_502,x:207.2,y:384.5}).wait(1).to({graphics:mask_graphics_503,x:208.2,y:384.5}).wait(1).to({graphics:mask_graphics_504,x:209.3,y:384.5}).wait(1).to({graphics:mask_graphics_505,x:210.3,y:384.5}).wait(1).to({graphics:mask_graphics_506,x:211.4,y:384.5}).wait(1).to({graphics:mask_graphics_507,x:212.4,y:384.5}).wait(1).to({graphics:mask_graphics_508,x:213.5,y:384.5}).wait(1).to({graphics:mask_graphics_509,x:214.5,y:384.5}).wait(1).to({graphics:mask_graphics_510,x:215.6,y:384.5}).wait(1).to({graphics:mask_graphics_511,x:216.7,y:384.5}).wait(1).to({graphics:mask_graphics_512,x:217.7,y:384.5}).wait(1).to({graphics:mask_graphics_513,x:218.8,y:384.5}).wait(1).to({graphics:mask_graphics_514,x:219.8,y:384.5}).wait(1).to({graphics:mask_graphics_515,x:220.9,y:384.5}).wait(1).to({graphics:mask_graphics_516,x:221.9,y:384.5}).wait(1).to({graphics:mask_graphics_517,x:223,y:384.5}).wait(1).to({graphics:mask_graphics_518,x:224.1,y:384.5}).wait(1).to({graphics:mask_graphics_519,x:225.1,y:384.5}).wait(1).to({graphics:mask_graphics_520,x:226.2,y:384.5}).wait(1).to({graphics:mask_graphics_521,x:227.2,y:384.5}).wait(1).to({graphics:mask_graphics_522,x:228.3,y:384.5}).wait(1).to({graphics:mask_graphics_523,x:229.3,y:384.5}).wait(1).to({graphics:mask_graphics_524,x:230.4,y:384.5}).wait(1).to({graphics:mask_graphics_525,x:231.5,y:384.5}).wait(1).to({graphics:mask_graphics_526,x:232.5,y:384.5}).wait(1).to({graphics:mask_graphics_527,x:233.6,y:384.5}).wait(1).to({graphics:mask_graphics_528,x:234.6,y:384.5}).wait(1).to({graphics:mask_graphics_529,x:235.7,y:384.5}).wait(1).to({graphics:mask_graphics_530,x:236.7,y:384.5}).wait(1).to({graphics:mask_graphics_531,x:237.8,y:384.5}).wait(1).to({graphics:mask_graphics_532,x:238.8,y:384.5}).wait(1).to({graphics:mask_graphics_533,x:239.9,y:384.5}).wait(1).to({graphics:mask_graphics_534,x:241,y:384.5}).wait(1).to({graphics:mask_graphics_535,x:242,y:384.5}).wait(1).to({graphics:mask_graphics_536,x:243.1,y:384.5}).wait(1).to({graphics:mask_graphics_537,x:244.1,y:384.5}).wait(1).to({graphics:mask_graphics_538,x:245.2,y:384.5}).wait(1).to({graphics:mask_graphics_539,x:246.2,y:384.5}).wait(1).to({graphics:mask_graphics_540,x:247.3,y:384.5}).wait(1).to({graphics:mask_graphics_541,x:248.4,y:384.5}).wait(1).to({graphics:mask_graphics_542,x:249.4,y:384.5}).wait(1).to({graphics:mask_graphics_543,x:250.5,y:384.5}).wait(1).to({graphics:mask_graphics_544,x:251.5,y:384.5}).wait(1).to({graphics:mask_graphics_545,x:252.6,y:384.5}).wait(1).to({graphics:mask_graphics_546,x:225.1,y:222.5}).wait(1).to({graphics:mask_graphics_547,x:255.6,y:384.5}).wait(1).to({graphics:mask_graphics_548,x:257.5,y:384.5}).wait(1).to({graphics:mask_graphics_549,x:230.8,y:222.5}).wait(82));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("A74kDQAGhJB9gmQDAg5CCAZQCCAZBmAyQBmAyBjAzQAuAYA0AfQDHB0AJAFQESCYGCCuQGCCuGjgzQGjgyC9hRQC9hRBzg/");
	this.shape_1.setTransform(271.7,384.1);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(369).to({_off:false},0).wait(262));

	// Layer 12
	this.instance_2 = new lib.ar2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(267.4,108.3,1,1,0,0,0,0.8,-0.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(175).to({_off:false},0).wait(456));

	// Layer 9 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_298 = new cjs.Graphics().p("AqEOPQFUlUHfAAQHhAAFTFUQFNFMAHHUMgkPAAAQAHnUFNlMg");
	var mask_1_graphics_299 = new cjs.Graphics().p("AvWZRQAgnTFek6QFmlBHfAaQHgAaFAFmQE7FegTHTg");
	var mask_1_graphics_300 = new cjs.Graphics().p("AvRXzQA6nQFuknQF3ktHcA0QHeA0EtF2QEnFvgsHSg");
	var mask_1_graphics_301 = new cjs.Graphics().p("AvIWWQBSnNF+kSQGHkYHZBNQHaBOEYGGQESF+hFHPg");
	var mask_1_graphics_302 = new cjs.Graphics().p("Au8U5QBrnHGMj+QGVkCHUBnQHVBoEDGUQD9GNheHKg");
	var mask_1_graphics_303 = new cjs.Graphics().p("AutTeQCEnBGZjoQGhjsHPCBQHPCADsGiQDoGah3HEg");
	var mask_1_graphics_304 = new cjs.Graphics().p("AuaSDQCbm4GljRQGujWHHCaQHHCZDVGuQDRGmiOG9g");
	var mask_1_graphics_305 = new cjs.Graphics().p("AuFQrQC0mwGwi6QG4i9G+CyQG+CyC+G4QC6GxinG0g");
	var mask_1_graphics_306 = new cjs.Graphics().p("AtrPUQDKmlG5iiQHCilG0DJQG0DKClHCQCjG6i+Grg");
	var mask_1_graphics_307 = new cjs.Graphics().p("AtPOAQDhmaHBiKQHLiMGoDhQGoDhCNHKQCKHCjVGgg");
	var mask_1_graphics_308 = new cjs.Graphics().p("AsvMuQD2mNHJhyQHRhzGbD4QGcD3BzHSQByHIjrGUg");
	var mask_1_graphics_309 = new cjs.Graphics().p("AsNLfQEMl/HOhZQHWhaGOENQGNEOBaHXQBZHOkBGHg");
	var mask_1_graphics_310 = new cjs.Graphics().p("AroKSQEhlwHQg/QHchBF+EjQF/EiBAHcQBAHSkWF4g");
	var mask_1_graphics_311 = new cjs.Graphics().p("ArAJJQE0lgHUgmQHegnFuE3QFuE3AnHeQAmHVkqFog");
	var mask_1_graphics_312 = new cjs.Graphics().p("AqVICQFGlOHVgNQHggNFcFLQFdFKANHgQAMHWk8FYg");
	var mask_1_graphics_313 = new cjs.Graphics().p("AppHAQFYk8HVAMQHgANFKFdQFKFdgNHfQgNHWlOFHg");
	var mask_1_graphics_314 = new cjs.Graphics().p("Ao6GBQFpkpHTAmQHfAnE2FuQE3FugnHeQgmHVlgEzg");
	var mask_1_graphics_315 = new cjs.Graphics().p("AoJFGQF4kVHRA/QHbBBEjF+QEiF/hBHbQhAHSlvEgg");
	var mask_1_graphics_316 = new cjs.Graphics().p("AnWEPQGGkBHNBZQHXBbENGNQEOGNhbHXQhZHOl/EMg");
	var mask_1_graphics_317 = new cjs.Graphics().p("AmhDcQGTjqHHBwQHSB1D3GbQD4Gbh0HSQhyHImND3g");
	var mask_1_graphics_318 = new cjs.Graphics().p("AlrCuQGfjUHBCJQHLCNDgGoQDhGoiNHLQiKHBmZDhg");
	var mask_1_graphics_319 = new cjs.Graphics().p("AkyCEQGpi9G5ChQHDCmDJGzQDJG0ilHCQiiG5mlDKg");
	var mask_1_graphics_320 = new cjs.Graphics().p("Aj5BeQG0ilGvC4QG5C+CxG+QCyG+i+G4Qi6GwmvCzg");
	var mask_1_graphics_321 = new cjs.Graphics().p("Ai+A+QG8iOGlDQQGuDVCZHHQCZHHjVGtQjRGlm5Ccg");
	var mask_1_graphics_322 = new cjs.Graphics().p("AiBAiQHCh1GZDmQGiDsCAHOQCBHPjtGhQjnGZnACEg");
	var mask_1_graphics_323 = new cjs.Graphics().p("AhEALQHIhdGMD8QGUEDBnHUQBoHVkDGUQj9GMnGBrg");
	var mask_1_graphics_324 = new cjs.Graphics().p("AgGgGQHNhFF9ERQGGEYBNHaQBOHZkYGGQkSF9nMBTg");
	var mask_1_graphics_325 = new cjs.Graphics().p("AA3gTQHRgsFvElQF1EtA0HdQA0HdksF2QknFunPA6g");
	var mask_1_graphics_326 = new cjs.Graphics().p("AB2gbQHTgSFeE4QFlFBAaHfQAaHflBFlQk5FenSAgg");
	var mask_1_graphics_327 = new cjs.Graphics().p("AC1gdQHTAGFMFLQFTFUAAHfQAAHglSFTQlNFNnTAHg");
	var mask_1_graphics_328 = new cjs.Graphics().p("EAB3AjsMAB8gkIQHSAfE6FeQFAFlgZHfQgaHfllFAQlLEpmyAAIgzgBg");
	var mask_1_graphics_329 = new cjs.Graphics().p("EAA4AjnMAD5gj+QHQA5EnFtQEsF2g0HdQgzHdl2EtQk/EAmKAAQg6AAg8gFg");
	var mask_1_graphics_330 = new cjs.Graphics().p("EgAGAjeMAF1gjsQHMBRESF9QEYGGhNHZQhOHamFEXQkxDcllAAQhZAAhcgOg");
	var mask_1_graphics_331 = new cjs.Graphics().p("EgBDAjSMAHvgjVQHHBqD9GMQECGUhmHVQhnHUmUECQkhC5lCAAQh3AAh6gZg");
	var mask_1_graphics_332 = new cjs.Graphics().p("EgCBAjDMAJqgi3QHACDDnGYQDsGiiAHOQiAHPmhDsQkPCZkhAAQiUAAiYgog");
	var mask_1_graphics_333 = new cjs.Graphics().p("EgC9AixMALhgiTQG5CbDRGlQDVGtiZHHQiZHHmtDVQj7B8kDAAQivAAi0g5g");
	var mask_1_graphics_334 = new cjs.Graphics().p("EgD4AibMANXghnQGvCzC6GvQC+G4ixG+QiyG+m4C+QjkBijlAAQjMAAjOhPg");
	var mask_1_graphics_335 = new cjs.Graphics().p("EgExAiDMAPJgg2QGlDKCjG4QClHCjJG0QjJGznCCmQjLBLjJAAQjpAAjlhmg");
	var mask_1_graphics_336 = new cjs.Graphics().p("EgFpAhoIQ5//QGaDgCKHBQCNHLjgGnQjgGonKCNQiyA3isAAQkHAAj7iAg");
	var mask_1_graphics_337 = new cjs.Graphics().p("EgGgAhJISn/BQGND2ByHIQB0HRj3GcQj3GbnRB0QiVAliQAAQkmAAkQieg");
	var mask_1_graphics_338 = new cjs.Graphics().p("EgHUAgoIUQ99QF/ELBZHNQBbHXkNGNQkNGNnWBbQh4AXhyAAQlIAAkhi+g");
	var mask_1_graphics_339 = new cjs.Graphics().p("EgIHAgEIV280QFwEfBAHRQBBHckiF+QkiF+naBBQhYAMhUAAQlsAAkxjhg");
	var mask_1_graphics_340 = new cjs.Graphics().p("Ao4feIXY7mQFgEyAnHUQAnHek2FuQk2FuneAoQg2AEg0AAQmTAAk/kGg");
	var mask_1_graphics_341 = new cjs.Graphics().p("Apme0IY16SQFOFFAOHWQANHflJFcQlKFdnfAOIglAAQm9AAlKkvg");
	var mask_1_graphics_342 = new cjs.Graphics().p("EACIAjiQnUgMlHlOIaO46QE8FXgLHWQgNHflcFKQlPE/nJAAIgjgBg");
	var mask_1_graphics_343 = new cjs.Graphics().p("EABKAjeQnTgmk0leIbh3dQEqFnglHUQgnHeltE3QlFEVmeAAQgzAAg1gEg");
	var mask_1_graphics_344 = new cjs.Graphics().p("EAAMAjWQnQg/khluIcw18QEWF3g/HSQhAHbl+EjQk4Dul3AAQhTAAhWgMg");
	var mask_1_graphics_345 = new cjs.Graphics().p("EgAxAjLQnNhYkMl+Id50VQEBGFhXHOQhbHXmMENQkqDLlTAAQhxAAh1gXg");
	var mask_1_graphics_346 = new cjs.Graphics().p("EgBuAi9QnIhxj3mMIe+ysQDrGThwHIQh0HSmbD4QkYCpkyAAQiOAAiTglg");
	var mask_1_graphics_347 = new cjs.Graphics().p("EgCqAisQnCiJjhmaIf8w/QDVGgiJHBQiMHLmoDhQkFCLkSAAQirAAivg2g");
	var mask_1_graphics_348 = new cjs.Graphics().p("EgDlAiYQm6iijKmlMAg0gPPQC+GrihG5QilHDm0DKQjvBvj0AAQjHAAjKhKg");
	var mask_1_graphics_349 = new cjs.Graphics().p("EgEfAiAQmwi5i0mvMAhngNcQCnG0i5GwQi+G5m+CyQjYBXjXAAQjjAAjjhig");
	var mask_1_graphics_350 = new cjs.Graphics().p("EgFXAhmQmmjRicm4MAiTgLmQCPG9jRGlQjVGunHCaQi+BAi7AAQkBAAj5h7g");
	var mask_1_graphics_351 = new cjs.Graphics().p("EgGOAhIQmajniEnAMAi4gJuQB3HEjnGaQjsGinPCAQijAuieAAQkgAAkOiZg");
	var mask_1_graphics_352 = new cjs.Graphics().p("EgHDAgoQmNj9hrnHMAjXgH0QBeHKj9GNQkDGUnVBoQiGAeiBAAQlAAAkhi5g");
	var mask_1_graphics_353 = new cjs.Graphics().p("EgH2AgFQl/kShSnMMAjvgF5QBFHPkSF+QkYGGnaBOQhoARhjAAQljAAkxjbg");
	var mask_1_graphics_354 = new cjs.Graphics().p("AoofgQlvkng5nQMAkAgD8QAsHRkmFvQktF3neA0QhGAIhFAAQmJAAk/kAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(298).to({graphics:mask_1_graphics_298,x:133.5,y:171.1}).wait(1).to({graphics:mask_1_graphics_299,x:133.4,y:174.2}).wait(1).to({graphics:mask_1_graphics_300,x:133.4,y:177.4}).wait(1).to({graphics:mask_1_graphics_301,x:133.3,y:180.5}).wait(1).to({graphics:mask_1_graphics_302,x:133.3,y:183.6}).wait(1).to({graphics:mask_1_graphics_303,x:133.2,y:186.6}).wait(1).to({graphics:mask_1_graphics_304,x:133.2,y:189.6}).wait(1).to({graphics:mask_1_graphics_305,x:133.1,y:192.5}).wait(1).to({graphics:mask_1_graphics_306,x:133,y:195.4}).wait(1).to({graphics:mask_1_graphics_307,x:132.9,y:198.2}).wait(1).to({graphics:mask_1_graphics_308,x:132.8,y:200.9}).wait(1).to({graphics:mask_1_graphics_309,x:132.7,y:203.6}).wait(1).to({graphics:mask_1_graphics_310,x:132.6,y:206.1}).wait(1).to({graphics:mask_1_graphics_311,x:132.5,y:208.5}).wait(1).to({graphics:mask_1_graphics_312,x:132.4,y:210.9}).wait(1).to({graphics:mask_1_graphics_313,x:132.4,y:213.1}).wait(1).to({graphics:mask_1_graphics_314,x:132.3,y:215.1}).wait(1).to({graphics:mask_1_graphics_315,x:132.3,y:217.1}).wait(1).to({graphics:mask_1_graphics_316,x:132.3,y:218.9}).wait(1).to({graphics:mask_1_graphics_317,x:132.3,y:220.6}).wait(1).to({graphics:mask_1_graphics_318,x:132.3,y:222.1}).wait(1).to({graphics:mask_1_graphics_319,x:132.3,y:223.4}).wait(1).to({graphics:mask_1_graphics_320,x:132.2,y:224.6}).wait(1).to({graphics:mask_1_graphics_321,x:132.2,y:225.7}).wait(1).to({graphics:mask_1_graphics_322,x:132.1,y:226.6}).wait(1).to({graphics:mask_1_graphics_323,x:132.1,y:227.3}).wait(1).to({graphics:mask_1_graphics_324,x:132,y:227.9}).wait(1).to({graphics:mask_1_graphics_325,x:132,y:228.3}).wait(1).to({graphics:mask_1_graphics_326,x:132,y:228.5}).wait(1).to({graphics:mask_1_graphics_327,x:131.9,y:228.6}).wait(1).to({graphics:mask_1_graphics_328,x:132,y:228.5}).wait(1).to({graphics:mask_1_graphics_329,x:132,y:228.4}).wait(1).to({graphics:mask_1_graphics_330,x:132,y:228.4}).wait(1).to({graphics:mask_1_graphics_331,x:132.1,y:228.3}).wait(1).to({graphics:mask_1_graphics_332,x:132.1,y:228.3}).wait(1).to({graphics:mask_1_graphics_333,x:132.2,y:228.2}).wait(1).to({graphics:mask_1_graphics_334,x:132.2,y:228.2}).wait(1).to({graphics:mask_1_graphics_335,x:132.3,y:228.1}).wait(1).to({graphics:mask_1_graphics_336,x:132.3,y:228}).wait(1).to({graphics:mask_1_graphics_337,x:132.3,y:227.9}).wait(1).to({graphics:mask_1_graphics_338,x:132.3,y:227.8}).wait(1).to({graphics:mask_1_graphics_339,x:132.3,y:227.7}).wait(1).to({graphics:mask_1_graphics_340,x:132.3,y:227.6}).wait(1).to({graphics:mask_1_graphics_341,x:132.3,y:227.5}).wait(1).to({graphics:mask_1_graphics_342,x:132.4,y:227.5}).wait(1).to({graphics:mask_1_graphics_343,x:132.5,y:227.4}).wait(1).to({graphics:mask_1_graphics_344,x:132.6,y:227.4}).wait(1).to({graphics:mask_1_graphics_345,x:132.7,y:227.4}).wait(1).to({graphics:mask_1_graphics_346,x:132.8,y:227.4}).wait(1).to({graphics:mask_1_graphics_347,x:132.9,y:227.4}).wait(1).to({graphics:mask_1_graphics_348,x:133,y:227.4}).wait(1).to({graphics:mask_1_graphics_349,x:133.1,y:227.4}).wait(1).to({graphics:mask_1_graphics_350,x:133.2,y:227.3}).wait(1).to({graphics:mask_1_graphics_351,x:133.2,y:227.3}).wait(1).to({graphics:mask_1_graphics_352,x:133.3,y:227.3}).wait(1).to({graphics:mask_1_graphics_353,x:133.4,y:227.2}).wait(1).to({graphics:mask_1_graphics_354,x:133.4,y:227.2}).wait(277));

	// Layer 8
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("AWEzWQmGhejWGMQjkGkjhGlQjjGmkfGVQkgGVmqBfQmrBfhukA");
	this.shape_2.setTransform(234.4,251.8);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(298).to({_off:false},0).wait(333));

	// Layer 7 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_214 = new cjs.Graphics().p("AypNhIAApjMAvoAAAIAAJjg");
	var mask_2_graphics_215 = new cjs.Graphics().p("A30E8IAAp3MAvpAAAIAAJ3g");
	var mask_2_graphics_216 = new cjs.Graphics().p("A30FGIAAqLMAvpAAAIAAKLg");
	var mask_2_graphics_217 = new cjs.Graphics().p("A30FQIAAqfMAvpAAAIAAKfg");
	var mask_2_graphics_218 = new cjs.Graphics().p("A30FaIAAqzMAvpAAAIAAKzg");
	var mask_2_graphics_219 = new cjs.Graphics().p("A30FkIAArHMAvpAAAIAALHg");
	var mask_2_graphics_220 = new cjs.Graphics().p("A30FuIAArbMAvpAAAIAALbg");
	var mask_2_graphics_221 = new cjs.Graphics().p("A30F5IAArwMAvpAAAIAALwg");
	var mask_2_graphics_222 = new cjs.Graphics().p("A30GDIAAsEMAvpAAAIAAMEg");
	var mask_2_graphics_223 = new cjs.Graphics().p("A30GNIAAsZMAvpAAAIAAMZg");
	var mask_2_graphics_224 = new cjs.Graphics().p("A30GXIAAstMAvpAAAIAAMtg");
	var mask_2_graphics_225 = new cjs.Graphics().p("A30GhIAAtBMAvpAAAIAANBg");
	var mask_2_graphics_226 = new cjs.Graphics().p("A30GrIAAtVMAvpAAAIAANVg");
	var mask_2_graphics_227 = new cjs.Graphics().p("A30G1IAAtpMAvpAAAIAANpg");
	var mask_2_graphics_228 = new cjs.Graphics().p("A30G/IAAt9MAvpAAAIAAN9g");
	var mask_2_graphics_229 = new cjs.Graphics().p("A30HJIAAuRMAvpAAAIAAORg");
	var mask_2_graphics_230 = new cjs.Graphics().p("A30HTIAAulMAvpAAAIAAOlg");
	var mask_2_graphics_231 = new cjs.Graphics().p("A30HeIAAu7MAvpAAAIAAO7g");
	var mask_2_graphics_232 = new cjs.Graphics().p("A30HoIAAvPMAvpAAAIAAPPg");
	var mask_2_graphics_233 = new cjs.Graphics().p("A30HyIAAvjMAvpAAAIAAPjg");
	var mask_2_graphics_234 = new cjs.Graphics().p("A30H8IAAv3MAvpAAAIAAP3g");
	var mask_2_graphics_235 = new cjs.Graphics().p("A30IGIAAwLMAvpAAAIAAQLg");
	var mask_2_graphics_236 = new cjs.Graphics().p("A30IQIAAwfMAvpAAAIAAQfg");
	var mask_2_graphics_237 = new cjs.Graphics().p("A30IaIAAwzMAvpAAAIAAQzg");
	var mask_2_graphics_238 = new cjs.Graphics().p("A30IkIAAxHMAvpAAAIAARHg");
	var mask_2_graphics_239 = new cjs.Graphics().p("A30IvIAAxdMAvpAAAIAARdg");
	var mask_2_graphics_240 = new cjs.Graphics().p("A30I5IAAxxMAvpAAAIAARxg");
	var mask_2_graphics_241 = new cjs.Graphics().p("A30JDIAAyFMAvpAAAIAASFg");
	var mask_2_graphics_242 = new cjs.Graphics().p("A30JNIAAyZMAvpAAAIAASZg");
	var mask_2_graphics_243 = new cjs.Graphics().p("A30JXIAAytMAvpAAAIAAStg");
	var mask_2_graphics_244 = new cjs.Graphics().p("A30JhIAAzBMAvpAAAIAATBg");
	var mask_2_graphics_245 = new cjs.Graphics().p("A30JrIAAzVMAvpAAAIAATVg");
	var mask_2_graphics_246 = new cjs.Graphics().p("A30J1IAAzpMAvpAAAIAATpg");
	var mask_2_graphics_247 = new cjs.Graphics().p("A30KAIAAz/MAvpAAAIAAT/g");
	var mask_2_graphics_248 = new cjs.Graphics().p("A30KKIAA0TMAvpAAAIAAUTg");
	var mask_2_graphics_249 = new cjs.Graphics().p("A30KUIAA0nMAvpAAAIAAUng");
	var mask_2_graphics_250 = new cjs.Graphics().p("A30KeIAA07MAvpAAAIAAU7g");
	var mask_2_graphics_251 = new cjs.Graphics().p("A30KoIAA1PMAvpAAAIAAVPg");
	var mask_2_graphics_252 = new cjs.Graphics().p("A30KyIAA1jMAvpAAAIAAVjg");
	var mask_2_graphics_253 = new cjs.Graphics().p("A30K8IAA13MAvpAAAIAAV3g");
	var mask_2_graphics_254 = new cjs.Graphics().p("A30LGIAA2LMAvpAAAIAAWLg");
	var mask_2_graphics_255 = new cjs.Graphics().p("A30LRIAA2hMAvpAAAIAAWhg");
	var mask_2_graphics_256 = new cjs.Graphics().p("A30LaIAA20MAvpAAAIAAW0g");
	var mask_2_graphics_257 = new cjs.Graphics().p("A30LlIAA3JMAvpAAAIAAXJg");
	var mask_2_graphics_258 = new cjs.Graphics().p("A30LvIAA3dMAvpAAAIAAXdg");
	var mask_2_graphics_259 = new cjs.Graphics().p("A30L5IAA3xMAvpAAAIAAXxg");
	var mask_2_graphics_260 = new cjs.Graphics().p("A30MDIAA4FMAvpAAAIAAYFg");
	var mask_2_graphics_261 = new cjs.Graphics().p("A30MNIAA4ZMAvpAAAIAAYZg");
	var mask_2_graphics_262 = new cjs.Graphics().p("A30MXIAA4tMAvpAAAIAAYtg");
	var mask_2_graphics_263 = new cjs.Graphics().p("A30MhIAA5BMAvpAAAIAAZBg");
	var mask_2_graphics_264 = new cjs.Graphics().p("A30MrIAA5WMAvpAAAIAAZWg");
	var mask_2_graphics_265 = new cjs.Graphics().p("A30M2IAA5rMAvpAAAIAAZrg");
	var mask_2_graphics_266 = new cjs.Graphics().p("A30NAIAA5/MAvpAAAIAAZ/g");
	var mask_2_graphics_267 = new cjs.Graphics().p("A30NKIAA6TMAvpAAAIAAaTg");
	var mask_2_graphics_268 = new cjs.Graphics().p("A30NUIAA6nMAvpAAAIAAang");
	var mask_2_graphics_269 = new cjs.Graphics().p("A30NeIAA67MAvpAAAIAAa7g");
	var mask_2_graphics_270 = new cjs.Graphics().p("A30NoIAA7PMAvpAAAIAAbPg");
	var mask_2_graphics_271 = new cjs.Graphics().p("A30NyIAA7jMAvpAAAIAAbjg");
	var mask_2_graphics_272 = new cjs.Graphics().p("A30N8IAA74MAvpAAAIAAb4g");
	var mask_2_graphics_273 = new cjs.Graphics().p("A30OHIAA8NMAvpAAAIAAcNg");
	var mask_2_graphics_274 = new cjs.Graphics().p("A30ORIAA8hMAvpAAAIAAchg");
	var mask_2_graphics_275 = new cjs.Graphics().p("A30ObIAA81MAvpAAAIAAc1g");
	var mask_2_graphics_276 = new cjs.Graphics().p("A30OlIAA9JMAvpAAAIAAdJg");
	var mask_2_graphics_277 = new cjs.Graphics().p("A30OvIAA9dMAvpAAAIAAddg");
	var mask_2_graphics_278 = new cjs.Graphics().p("A30O5IAA9xMAvpAAAIAAdxg");
	var mask_2_graphics_279 = new cjs.Graphics().p("A30PDIAA+FMAvpAAAIAAeFg");
	var mask_2_graphics_280 = new cjs.Graphics().p("A30PNIAA+aMAvpAAAIAAeag");
	var mask_2_graphics_281 = new cjs.Graphics().p("A30PYIAA+vMAvpAAAIAAevg");
	var mask_2_graphics_282 = new cjs.Graphics().p("A30PiIAA/DMAvpAAAIAAfDg");
	var mask_2_graphics_283 = new cjs.Graphics().p("A30PsIAA/XMAvpAAAIAAfXg");
	var mask_2_graphics_284 = new cjs.Graphics().p("A30P2IAA/rMAvpAAAIAAfrg");
	var mask_2_graphics_285 = new cjs.Graphics().p("A30QAIAA//MAvpAAAIAAf/g");
	var mask_2_graphics_286 = new cjs.Graphics().p("A30QKMAAAggTMAvpAAAMAAAAgTg");
	var mask_2_graphics_287 = new cjs.Graphics().p("A30QUMAAAggnMAvpAAAMAAAAgng");
	var mask_2_graphics_288 = new cjs.Graphics().p("A30QeMAAAgg7MAvpAAAMAAAAg7g");
	var mask_2_graphics_289 = new cjs.Graphics().p("A30QoMAAAghPMAvpAAAMAAAAhPg");
	var mask_2_graphics_290 = new cjs.Graphics().p("A30QyMAAAghjMAvpAAAMAAAAhjg");
	var mask_2_graphics_291 = new cjs.Graphics().p("A30Q9MAAAgh4MAvpAAAMAAAAh4g");
	var mask_2_graphics_292 = new cjs.Graphics().p("A30RHMAAAgiNMAvpAAAMAAAAiNg");
	var mask_2_graphics_293 = new cjs.Graphics().p("A30RRMAAAgihMAvpAAAMAAAAihg");
	var mask_2_graphics_294 = new cjs.Graphics().p("A30RbMAAAgi1MAvpAAAMAAAAi1g");
	var mask_2_graphics_295 = new cjs.Graphics().p("A30RlMAAAgjJMAvpAAAMAAAAjJg");
	var mask_2_graphics_296 = new cjs.Graphics().p("A30RvMAAAgjdMAvpAAAMAAAAjdg");
	var mask_2_graphics_297 = new cjs.Graphics().p("A30R5MAAAgjxMAvpAAAMAAAAjxg");
	var mask_2_graphics_298 = new cjs.Graphics().p("Aypa0MAAAgkGMAvoAAAMAAAAkGg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(214).to({graphics:mask_2_graphics_214,x:185.5,y:86.5}).wait(1).to({graphics:mask_2_graphics_215,x:218.5,y:143.5}).wait(1).to({graphics:mask_2_graphics_216,x:218.5,y:144.5}).wait(1).to({graphics:mask_2_graphics_217,x:218.5,y:145.6}).wait(1).to({graphics:mask_2_graphics_218,x:218.5,y:146.6}).wait(1).to({graphics:mask_2_graphics_219,x:218.5,y:147.6}).wait(1).to({graphics:mask_2_graphics_220,x:218.5,y:148.6}).wait(1).to({graphics:mask_2_graphics_221,x:218.5,y:149.6}).wait(1).to({graphics:mask_2_graphics_222,x:218.5,y:150.6}).wait(1).to({graphics:mask_2_graphics_223,x:218.5,y:151.6}).wait(1).to({graphics:mask_2_graphics_224,x:218.5,y:152.6}).wait(1).to({graphics:mask_2_graphics_225,x:218.5,y:153.7}).wait(1).to({graphics:mask_2_graphics_226,x:218.5,y:154.7}).wait(1).to({graphics:mask_2_graphics_227,x:218.5,y:155.7}).wait(1).to({graphics:mask_2_graphics_228,x:218.5,y:156.7}).wait(1).to({graphics:mask_2_graphics_229,x:218.5,y:157.7}).wait(1).to({graphics:mask_2_graphics_230,x:218.5,y:158.7}).wait(1).to({graphics:mask_2_graphics_231,x:218.5,y:159.8}).wait(1).to({graphics:mask_2_graphics_232,x:218.5,y:160.8}).wait(1).to({graphics:mask_2_graphics_233,x:218.5,y:161.8}).wait(1).to({graphics:mask_2_graphics_234,x:218.5,y:162.8}).wait(1).to({graphics:mask_2_graphics_235,x:218.5,y:163.8}).wait(1).to({graphics:mask_2_graphics_236,x:218.5,y:164.8}).wait(1).to({graphics:mask_2_graphics_237,x:218.5,y:165.8}).wait(1).to({graphics:mask_2_graphics_238,x:218.5,y:166.8}).wait(1).to({graphics:mask_2_graphics_239,x:218.5,y:167.9}).wait(1).to({graphics:mask_2_graphics_240,x:218.5,y:168.9}).wait(1).to({graphics:mask_2_graphics_241,x:218.5,y:169.9}).wait(1).to({graphics:mask_2_graphics_242,x:218.5,y:170.9}).wait(1).to({graphics:mask_2_graphics_243,x:218.5,y:171.9}).wait(1).to({graphics:mask_2_graphics_244,x:218.5,y:172.9}).wait(1).to({graphics:mask_2_graphics_245,x:218.5,y:173.9}).wait(1).to({graphics:mask_2_graphics_246,x:218.5,y:174.9}).wait(1).to({graphics:mask_2_graphics_247,x:218.5,y:176}).wait(1).to({graphics:mask_2_graphics_248,x:218.5,y:177}).wait(1).to({graphics:mask_2_graphics_249,x:218.5,y:178}).wait(1).to({graphics:mask_2_graphics_250,x:218.5,y:179}).wait(1).to({graphics:mask_2_graphics_251,x:218.5,y:180}).wait(1).to({graphics:mask_2_graphics_252,x:218.5,y:181}).wait(1).to({graphics:mask_2_graphics_253,x:218.5,y:182}).wait(1).to({graphics:mask_2_graphics_254,x:218.5,y:183}).wait(1).to({graphics:mask_2_graphics_255,x:218.5,y:184.1}).wait(1).to({graphics:mask_2_graphics_256,x:218.5,y:185.1}).wait(1).to({graphics:mask_2_graphics_257,x:218.5,y:186.1}).wait(1).to({graphics:mask_2_graphics_258,x:218.5,y:187.1}).wait(1).to({graphics:mask_2_graphics_259,x:218.5,y:188.1}).wait(1).to({graphics:mask_2_graphics_260,x:218.5,y:189.2}).wait(1).to({graphics:mask_2_graphics_261,x:218.5,y:190.2}).wait(1).to({graphics:mask_2_graphics_262,x:218.5,y:191.2}).wait(1).to({graphics:mask_2_graphics_263,x:218.5,y:192.2}).wait(1).to({graphics:mask_2_graphics_264,x:218.5,y:193.2}).wait(1).to({graphics:mask_2_graphics_265,x:218.5,y:194.2}).wait(1).to({graphics:mask_2_graphics_266,x:218.5,y:195.2}).wait(1).to({graphics:mask_2_graphics_267,x:218.5,y:196.2}).wait(1).to({graphics:mask_2_graphics_268,x:218.5,y:197.3}).wait(1).to({graphics:mask_2_graphics_269,x:218.5,y:198.3}).wait(1).to({graphics:mask_2_graphics_270,x:218.5,y:199.3}).wait(1).to({graphics:mask_2_graphics_271,x:218.5,y:200.3}).wait(1).to({graphics:mask_2_graphics_272,x:218.5,y:201.3}).wait(1).to({graphics:mask_2_graphics_273,x:218.5,y:202.3}).wait(1).to({graphics:mask_2_graphics_274,x:218.5,y:203.3}).wait(1).to({graphics:mask_2_graphics_275,x:218.5,y:204.3}).wait(1).to({graphics:mask_2_graphics_276,x:218.5,y:205.4}).wait(1).to({graphics:mask_2_graphics_277,x:218.5,y:206.4}).wait(1).to({graphics:mask_2_graphics_278,x:218.5,y:207.4}).wait(1).to({graphics:mask_2_graphics_279,x:218.5,y:208.4}).wait(1).to({graphics:mask_2_graphics_280,x:218.5,y:209.4}).wait(1).to({graphics:mask_2_graphics_281,x:218.5,y:210.4}).wait(1).to({graphics:mask_2_graphics_282,x:218.5,y:211.4}).wait(1).to({graphics:mask_2_graphics_283,x:218.5,y:212.4}).wait(1).to({graphics:mask_2_graphics_284,x:218.5,y:213.5}).wait(1).to({graphics:mask_2_graphics_285,x:218.5,y:214.5}).wait(1).to({graphics:mask_2_graphics_286,x:218.5,y:215.5}).wait(1).to({graphics:mask_2_graphics_287,x:218.5,y:216.5}).wait(1).to({graphics:mask_2_graphics_288,x:218.5,y:217.5}).wait(1).to({graphics:mask_2_graphics_289,x:218.5,y:218.5}).wait(1).to({graphics:mask_2_graphics_290,x:218.5,y:219.6}).wait(1).to({graphics:mask_2_graphics_291,x:218.5,y:220.6}).wait(1).to({graphics:mask_2_graphics_292,x:218.5,y:221.6}).wait(1).to({graphics:mask_2_graphics_293,x:218.5,y:222.6}).wait(1).to({graphics:mask_2_graphics_294,x:218.5,y:223.6}).wait(1).to({graphics:mask_2_graphics_295,x:218.5,y:224.6}).wait(1).to({graphics:mask_2_graphics_296,x:218.5,y:225.6}).wait(1).to({graphics:mask_2_graphics_297,x:218.5,y:226.6}).wait(1).to({graphics:mask_2_graphics_298,x:185.5,y:171.6}).wait(333));

	// Layer 6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("AWEzWQmGhejWGMQjkGkjhGlQjjGmkfGVQkgGVmqBfQmrBfhukA");
	this.shape_3.setTransform(234.4,251.8);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(214).to({_off:false},0).wait(417));

	// Layer 5 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_175 = new cjs.Graphics().p("AUbtQQHUAGFNFNQFUFUAAHfQAAHhlUFTQlNFNnUAHg");
	var mask_3_graphics_176 = new cjs.Graphics().p("ATutPQHTgMFaE/QFhFHATHfQATHglGFgQlAFanSAag");
	var mask_3_graphics_177 = new cjs.Graphics().p("ATAtLQHTgeFmExQFtE4AmHeQAmHfk4FtQkxFmnSAsg");
	var mask_3_graphics_178 = new cjs.Graphics().p("ASStEQHRgxFyEjQF6EpA5HcQA4HdkoF6QkkFynPA+g");
	var mask_3_graphics_179 = new cjs.Graphics().p("ARls7QHOhDF+EUQGEEaBMHaQBMHakaGFQkUF9nNBRg");
	var mask_3_graphics_180 = new cjs.Graphics().p("AQ3suQHMhWGIEFQGQEKBeHWQBfHYkLGPQkFGInJBjg");
	var mask_3_graphics_181 = new cjs.Graphics().p("AQKsgQHIhnGSD1QGaD6BxHSQBxHTj6GaQj1GSnFB1g");
	var mask_3_graphics_182 = new cjs.Graphics().p("APesOQHDh6GbDlQGkDqCDHNQCEHPjqGjQjlGbnACHg");
	var mask_3_graphics_183 = new cjs.Graphics().p("AOyr6QG+iLGkDUQGtDZCVHJQCWHIjZGsQjVGkm6CYg");
	var mask_3_graphics_184 = new cjs.Graphics().p("AOGrjQG5idGsDDQG1DJCnHCQCoHBjIG1QjEGsm0Cpg");
	var mask_3_graphics_185 = new cjs.Graphics().p("ANcrKQGyiuGzCyQG8C3C6G7QC5G7i2G8QizGzmtC7g");
	var mask_3_graphics_186 = new cjs.Graphics().p("AMyquQGri/G6CgQHDClDLG0QDKGzikHDQiiG6mlDMg");
	var mask_3_graphics_187 = new cjs.Graphics().p("AMJqQQGjjQHACPQHJCTDcGsQDcGqiTHJQiQHAmcDcg");
	var mask_3_graphics_188 = new cjs.Graphics().p("ALgpwQGbjgHFB+QHPCADtGjQDsGhiAHPQh+HFmUDsg");
	var mask_3_graphics_189 = new cjs.Graphics().p("AK5pNQGRjwHKBrQHUBvD9GYQD9GYhuHTQhsHLmKD8g");
	var mask_3_graphics_190 = new cjs.Graphics().p("AKTonQGHkAHOBZQHYBcEMGOQENGNhbHYQhaHOl/ELg");
	var mask_3_graphics_191 = new cjs.Graphics().p("AJtoAQF9kPHRBHQHbBJEdGDQEcGChJHbQhHHRl1Ebg");
	var mask_3_graphics_192 = new cjs.Graphics().p("AJJnWQFykeHUA0QHdA2ErF4QEsF3g2HdQg1HUlpEpg");
	var mask_3_graphics_193 = new cjs.Graphics().p("AImmqQFmktHVAiQHgAjE6FsQE6FrgjHeQgiHWleE3g");
	var mask_3_graphics_194 = new cjs.Graphics().p("AIEl8QFak7HWAPQHgARFJFfQFIFdgQHgQgQHXlQFEg");
	var mask_3_graphics_195 = new cjs.Graphics().p("AHjlMQFNlIHXgEQHggCFWFRQFWFRADHgQADHXlDFRg");
	var mask_3_graphics_196 = new cjs.Graphics().p("AHDkbQFAlUHWgWQHggWFjFEQFjFDAWHfQAWHWk2Feg");
	var mask_3_graphics_197 = new cjs.Graphics().p("AGkjnQEzlhHVgpQHegoFwE1QFvE1ApHeQApHVkoFqg");
	var mask_3_graphics_198 = new cjs.Graphics().p("AGHiyQEkltHTg7QHdg7F7EmQF8EnA8HbQA7HTkaF2g");
	var mask_3_graphics_199 = new cjs.Graphics().p("AFrh6QEWl5HQhNQHahPGHEYQGHEXBOHZQBOHQkLGAg");
	var mask_3_graphics_200 = new cjs.Graphics().p("AFRhCQEGmDHNhgQHWhhGSEIQGSEIBhHVQBgHNj7GKg");
	var mask_3_graphics_201 = new cjs.Graphics().p("AE4gIQD3mNHIhyQHTh0GbD4QGcD4B0HRQByHJjrGUg");
	var mask_3_graphics_202 = new cjs.Graphics().p("AEhAzQDmmWHEiEQHNiGGmDnQGlDnCGHMQCEHEjbGeg");
	var mask_3_graphics_203 = new cjs.Graphics().p("AELBwQDXmfG+iVQHHiZGuDXQGuDWCZHGQCVG/jKGlg");
	var mask_3_graphics_204 = new cjs.Graphics().p("AD3CuQDGmnG4inQHBiqG2DFQG2DFCrHAQCnG4i6Gtg");
	var mask_3_graphics_205 = new cjs.Graphics().p("ADlDtQC1muGwi5QG7i8G9C0QG+C0C8G4QC4GyioG0g");
	var mask_3_graphics_206 = new cjs.Graphics().p("ADUEtQCkm1GpjJQGzjOHECiQHECiDOGxQDJGqiXG6g");
	var mask_3_graphics_207 = new cjs.Graphics().p("ADFFuQCTm7GgjaQGqjeHLCQQHKCPDfGpQDaGhiGHAg");
	var mask_3_graphics_208 = new cjs.Graphics().p("AC4GwQCBnAGYjrQGhjvHQB+QHPB9DvGgQDrGYh0HFg");
	var mask_3_graphics_209 = new cjs.Graphics().p("ACtHzQBvnHGOj5QGXj/HVBrQHUBrD/GWQD7GOhiHKg");
	var mask_3_graphics_210 = new cjs.Graphics().p("ACkI2QBcnKGEkJQGNkPHYBYQHZBYEPGMQEKGEhQHNg");
	var mask_3_graphics_211 = new cjs.Graphics().p("ACcJ6QBLnOF5kYQGBkfHcBGQHbBGEfGAQEZF6g9HPg");
	var mask_3_graphics_212 = new cjs.Graphics().p("ACWK+QA4nQFuknQF2kuHeAzQHeAzEtF0QEoFvgqHRg");
	var mask_3_graphics_213 = new cjs.Graphics().p("ACSMCQAmnSFik1QFpk8HgAgQHfAgE9FoQE2FigZHTg");
	var mask_3_graphics_214 = new cjs.Graphics().p("ACPNHQAUnUFVlDQFdlKHgANQHhANFKFbQFEFWgGHUg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(175).to({graphics:mask_3_graphics_175,x:244.8,y:147}).wait(1).to({graphics:mask_3_graphics_176,x:244.8,y:147}).wait(1).to({graphics:mask_3_graphics_177,x:244.8,y:146.8}).wait(1).to({graphics:mask_3_graphics_178,x:244.9,y:146.6}).wait(1).to({graphics:mask_3_graphics_179,x:244.9,y:146.3}).wait(1).to({graphics:mask_3_graphics_180,x:245,y:145.9}).wait(1).to({graphics:mask_3_graphics_181,x:245,y:145.4}).wait(1).to({graphics:mask_3_graphics_182,x:245.1,y:144.8}).wait(1).to({graphics:mask_3_graphics_183,x:245.1,y:144.1}).wait(1).to({graphics:mask_3_graphics_184,x:245.2,y:143.3}).wait(1).to({graphics:mask_3_graphics_185,x:245.2,y:142.5}).wait(1).to({graphics:mask_3_graphics_186,x:245.2,y:141.6}).wait(1).to({graphics:mask_3_graphics_187,x:245.3,y:140.5}).wait(1).to({graphics:mask_3_graphics_188,x:245.3,y:139.4}).wait(1).to({graphics:mask_3_graphics_189,x:245.3,y:138.3}).wait(1).to({graphics:mask_3_graphics_190,x:245.3,y:137}).wait(1).to({graphics:mask_3_graphics_191,x:245.3,y:135.7}).wait(1).to({graphics:mask_3_graphics_192,x:245.3,y:134.3}).wait(1).to({graphics:mask_3_graphics_193,x:245.4,y:132.8}).wait(1).to({graphics:mask_3_graphics_194,x:245.4,y:131.2}).wait(1).to({graphics:mask_3_graphics_195,x:245.4,y:129.6}).wait(1).to({graphics:mask_3_graphics_196,x:245.5,y:127.9}).wait(1).to({graphics:mask_3_graphics_197,x:245.5,y:126.2}).wait(1).to({graphics:mask_3_graphics_198,x:245.6,y:124.4}).wait(1).to({graphics:mask_3_graphics_199,x:245.7,y:122.5}).wait(1).to({graphics:mask_3_graphics_200,x:245.7,y:120.6}).wait(1).to({graphics:mask_3_graphics_201,x:245.8,y:118.7}).wait(1).to({graphics:mask_3_graphics_202,x:245.9,y:116.7}).wait(1).to({graphics:mask_3_graphics_203,x:245.9,y:114.6}).wait(1).to({graphics:mask_3_graphics_204,x:246,y:112.5}).wait(1).to({graphics:mask_3_graphics_205,x:246,y:110.4}).wait(1).to({graphics:mask_3_graphics_206,x:246.1,y:108.2}).wait(1).to({graphics:mask_3_graphics_207,x:246.1,y:106}).wait(1).to({graphics:mask_3_graphics_208,x:246.1,y:103.8}).wait(1).to({graphics:mask_3_graphics_209,x:246.2,y:101.6}).wait(1).to({graphics:mask_3_graphics_210,x:246.2,y:99.3}).wait(1).to({graphics:mask_3_graphics_211,x:246.2,y:97}).wait(1).to({graphics:mask_3_graphics_212,x:246.2,y:94.7}).wait(1).to({graphics:mask_3_graphics_213,x:246.2,y:92.4}).wait(1).to({graphics:mask_3_graphics_214,x:246.2,y:90.1}).wait(417));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("AWEzWQmGhejWGMQjkGkjhGlQjjGmkfGVQkgGVmqBfQmrBfhukA");
	this.shape_4.setTransform(234.4,251.8);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(175).to({_off:false},0).wait(456));

	// Layer 11
	this.instance_3 = new lib.ar1("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(170.3,289.5,1,1,35.4,0,0,-0.7,0.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(622));

	// Layer 3 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_9 = new cjs.Graphics().p("AJKLhIDdgPIAyMBIjcAOg");
	var mask_4_graphics_10 = new cjs.Graphics().p("AiQl0IDtgWIA0L/IjtAWg");
	var mask_4_graphics_11 = new cjs.Graphics().p("AialwID/gdIA2L+Ij/Adg");
	var mask_4_graphics_12 = new cjs.Graphics().p("AiklsIERgkIA4L9IkRAkg");
	var mask_4_graphics_13 = new cjs.Graphics().p("AitloIEhgsIA6L9IkhAsg");
	var mask_4_graphics_14 = new cjs.Graphics().p("Ai3lkIE0g0IA7L+IkzAyg");
	var mask_4_graphics_15 = new cjs.Graphics().p("AjBlgIFFg7IA+L9IlFA6g");
	var mask_4_graphics_16 = new cjs.Graphics().p("AjKldIFWhCIA/L8IlWBCg");
	var mask_4_graphics_17 = new cjs.Graphics().p("AjUlZIFohJIBBL8IlnBJg");
	var mask_4_graphics_18 = new cjs.Graphics().p("AjelVIF5hRIBEL7Il5BSg");
	var mask_4_graphics_19 = new cjs.Graphics().p("AjolRIGLhYIBGL6ImLBZg");
	var mask_4_graphics_20 = new cjs.Graphics().p("AjylNIGdhfIBIL6ImdBfg");
	var mask_4_graphics_21 = new cjs.Graphics().p("Aj8lJIGuhnIBKL6ImuBng");
	var mask_4_graphics_22 = new cjs.Graphics().p("AkFlFIG/hvIBML6InABug");
	var mask_4_graphics_23 = new cjs.Graphics().p("AkPlBIHRh2IBOL5InRB2g");
	var mask_4_graphics_24 = new cjs.Graphics().p("AkZk9IHjh9IBQL4InjB9g");
	var mask_4_graphics_25 = new cjs.Graphics().p("Akik5IH0iFIBRL4In0CFg");
	var mask_4_graphics_26 = new cjs.Graphics().p("Aksk1IIFiMIBUL4IoFCLg");
	var mask_4_graphics_27 = new cjs.Graphics().p("Ak2kxIIXiUIBWL4IoXCTg");
	var mask_4_graphics_28 = new cjs.Graphics().p("Ak/kuIIoiaIBXL3IooCag");
	var mask_4_graphics_29 = new cjs.Graphics().p("AlJkqII6ihIBZL1Io6Cig");
	var mask_4_graphics_30 = new cjs.Graphics().p("AlTkmIJMipIBbL2IpMCpg");
	var mask_4_graphics_31 = new cjs.Graphics().p("AldkiIJdixIBeL2IpdCwg");
	var mask_4_graphics_32 = new cjs.Graphics().p("AlmkeIJui4IBgL1IpvC4g");
	var mask_4_graphics_33 = new cjs.Graphics().p("AlwkaIKAjAIBhL1IqADAg");
	var mask_4_graphics_34 = new cjs.Graphics().p("Al6kWIKSjHIBjL0IqSDHg");
	var mask_4_graphics_35 = new cjs.Graphics().p("AmEkSIKkjPIBlL0IqjDOg");
	var mask_4_graphics_36 = new cjs.Graphics().p("AmOkOIK2jWIBmLzIq0DWg");
	var mask_4_graphics_37 = new cjs.Graphics().p("AmXkLILGjcIBpLzIrGDcg");
	var mask_4_graphics_38 = new cjs.Graphics().p("AmhkHILYjkIBrLzIrYDkg");
	var mask_4_graphics_39 = new cjs.Graphics().p("AmrkDILpjsIBuLzIrqDrg");
	var mask_4_graphics_40 = new cjs.Graphics().p("Am1j/IL7jzIBwLyIr7Dzg");
	var mask_4_graphics_41 = new cjs.Graphics().p("Am+j7IMMj6IBxLxIsMD6g");
	var mask_4_graphics_42 = new cjs.Graphics().p("AnIj3IMekCIBzLxIseECg");
	var mask_4_graphics_43 = new cjs.Graphics().p("AnSjzIMwkJIB1LwIswEJg");
	var mask_4_graphics_44 = new cjs.Graphics().p("AncjvINCkRIB3LwItBERg");
	var mask_4_graphics_45 = new cjs.Graphics().p("AnmjrINTkYIB6LwItTEXg");
	var mask_4_graphics_46 = new cjs.Graphics().p("AnvjoINkkfIB7LvItkEgg");
	var mask_4_graphics_47 = new cjs.Graphics().p("An5jkIN2kmIB9LuIt2Eng");
	var mask_4_graphics_48 = new cjs.Graphics().p("AoDjgIOIkuIB/LvIuIEug");
	var mask_4_graphics_49 = new cjs.Graphics().p("AoMjcIOYk1ICBLuIuZE1g");
	var mask_4_graphics_50 = new cjs.Graphics().p("AoWjYIOqk9ICDLuIurE9g");
	var mask_4_graphics_51 = new cjs.Graphics().p("AogjUIO8lEICFLtIu8FEg");
	var mask_4_graphics_52 = new cjs.Graphics().p("AoqjQIPOlLICGLsIvNFLg");
	var mask_4_graphics_53 = new cjs.Graphics().p("AozjMIPflTICILsIvfFTg");
	var mask_4_graphics_54 = new cjs.Graphics().p("Ao9jIIPxlbICKLtIvwFZg");
	var mask_4_graphics_55 = new cjs.Graphics().p("ApHjFIQClhICNLsIwCFhg");
	var mask_4_graphics_56 = new cjs.Graphics().p("ApRjBIQUlpICPLrIwUFpg");
	var mask_4_graphics_57 = new cjs.Graphics().p("Apbi9IQllwICRLrIwlFwg");
	var mask_4_graphics_58 = new cjs.Graphics().p("Apki5IQ2l3ICTLqIw3F3g");
	var mask_4_graphics_59 = new cjs.Graphics().p("Apui1IRIl/ICVLqIxJF/g");
	var mask_4_graphics_60 = new cjs.Graphics().p("Ap4ixIRamGICXLpIxaGGg");
	var mask_4_graphics_61 = new cjs.Graphics().p("AqCitIRsmOICZLpIxsGOg");
	var mask_4_graphics_62 = new cjs.Graphics().p("AqLipIR9mWICaLpIx9GVg");
	var mask_4_graphics_63 = new cjs.Graphics().p("AqVilISOmdICdLoIyOGdg");
	var mask_4_graphics_64 = new cjs.Graphics().p("AqfihISgmkICfLnIygGkg");
	var mask_4_graphics_65 = new cjs.Graphics().p("AqoieISxmrICgLnIyxGsg");
	var mask_4_graphics_66 = new cjs.Graphics().p("AqyiaITDmyICiLmIzDGzg");
	var mask_4_graphics_67 = new cjs.Graphics().p("Aq8iWITVm6ICkLnIzUG6g");
	var mask_4_graphics_68 = new cjs.Graphics().p("ArGiSITmnBICnLmIzmHBg");
	var mask_4_graphics_69 = new cjs.Graphics().p("ArPiOIT3nIICpLkIz4HJg");
	var mask_4_graphics_70 = new cjs.Graphics().p("ArZiKIUJnQICqLlI0JHQg");
	var mask_4_graphics_71 = new cjs.Graphics().p("ArjiGIUbnYICsLlI0bHXg");
	var mask_4_graphics_72 = new cjs.Graphics().p("ArsiCIUsnfICtLkI0rHfg");
	var mask_4_graphics_73 = new cjs.Graphics().p("Ar2h+IU9nmICwLjI09Hmg");
	var mask_4_graphics_74 = new cjs.Graphics().p("AsAh6IVPnuICyLjI1PHug");
	var mask_4_graphics_75 = new cjs.Graphics().p("AsKh2IVgn1IC1LiI1hH1g");
	var mask_4_graphics_76 = new cjs.Graphics().p("AsUhyIVyn9IC3LiI1zH9g");
	var mask_4_graphics_77 = new cjs.Graphics().p("AsdhvIWDoDIC4LiI2EIDg");
	var mask_4_graphics_78 = new cjs.Graphics().p("AsnhrIWVoLIC6LiI2VILg");
	var mask_4_graphics_79 = new cjs.Graphics().p("AsxhnIWnoTIC8LiI2nISg");
	var mask_4_graphics_80 = new cjs.Graphics().p("As7hjIW5oaIC+LhI25Iag");
	var mask_4_graphics_81 = new cjs.Graphics().p("AtEhfIXJohIDBLgI3KIhg");
	var mask_4_graphics_82 = new cjs.Graphics().p("AtOhbIXbopIDCLgI3bIpg");
	var mask_4_graphics_83 = new cjs.Graphics().p("AiYMUIXtowIDELhI3uIwg");
	var mask_4_graphics_84 = new cjs.Graphics().p("AthhTIX+o4IDFLfI39I4g");
	var mask_4_graphics_85 = new cjs.Graphics().p("AtrhPIYPo/IDILfI4PI+g");
	var mask_4_graphics_86 = new cjs.Graphics().p("At0hMIYgpFIDJLdI4fJHg");
	var mask_4_graphics_87 = new cjs.Graphics().p("At9hIIYwpNIDLLeI4wJNg");
	var mask_4_graphics_88 = new cjs.Graphics().p("AuHhEIZBpVIDOLeI5BJUg");
	var mask_4_graphics_89 = new cjs.Graphics().p("AuQhAIZSpcIDPLdI5RJcg");
	var mask_4_graphics_90 = new cjs.Graphics().p("AuZg8IZipkIDRLdI5iJkg");
	var mask_4_graphics_91 = new cjs.Graphics().p("Auig4IZyprIDULcI5zJrg");
	var mask_4_graphics_92 = new cjs.Graphics().p("Ausg1IaEpxIDVLbI6EJzg");
	var mask_4_graphics_93 = new cjs.Graphics().p("Au1gwIaUp6IDXLbI6VJ6g");
	var mask_4_graphics_94 = new cjs.Graphics().p("Au+gsIalqCIDYLcI6lKAg");
	var mask_4_graphics_95 = new cjs.Graphics().p("AvIgoIa2qJIDbLaI62KJg");
	var mask_4_graphics_96 = new cjs.Graphics().p("AvRgkIbHqRIDcLaI7HKQg");
	var mask_4_graphics_97 = new cjs.Graphics().p("AvbghIbYqXIDfLaI7YKXg");
	var mask_4_graphics_98 = new cjs.Graphics().p("AvkgdIbpqeIDgLZI7pKeg");
	var mask_4_graphics_99 = new cjs.Graphics().p("AvtgZIb5qmIDiLZI75Kmg");
	var mask_4_graphics_100 = new cjs.Graphics().p("Av2gVIcKqtIDjLYI8JKtg");
	var mask_4_graphics_101 = new cjs.Graphics().p("AwAgRIcbq1IDmLYI8bK1g");
	var mask_4_graphics_102 = new cjs.Graphics().p("AwJgNIcsq8IDnLXI8rK8g");
	var mask_4_graphics_103 = new cjs.Graphics().p("AwSgKIc8rCIDqLWI89LEg");
	var mask_4_graphics_104 = new cjs.Graphics().p("AwcgGIdNrKIDsLWI9OLLg");
	var mask_4_graphics_105 = new cjs.Graphics().p("AwlgCIddrSIDuLWI9eLTg");
	var mask_4_graphics_106 = new cjs.Graphics().p("AwuABIdurYIDvLWI9uLZg");
	var mask_4_graphics_107 = new cjs.Graphics().p("Aw4AFIeArgIDxLXI+ALgg");
	var mask_4_graphics_108 = new cjs.Graphics().p("AxBAJIeQrnIDzLWI+QLng");
	var mask_4_graphics_109 = new cjs.Graphics().p("AxKAMIehrtID0LUI+hLwg");
	var mask_4_graphics_110 = new cjs.Graphics().p("AxUAQIeyr1ID3LVI+yL2g");
	var mask_4_graphics_111 = new cjs.Graphics().p("AmkMnIfDr+ID4LVI/CL+g");
	var mask_4_graphics_112 = new cjs.Graphics().p("AxlAZIfRsFID6LUI/RMFg");
	var mask_4_graphics_113 = new cjs.Graphics().p("AxtAdIfgsMID7LTI/gMMg");
	var mask_4_graphics_114 = new cjs.Graphics().p("Ax2AhIfvsUID9LUI/uMTg");
	var mask_4_graphics_115 = new cjs.Graphics().p("Ax+AkIf+saID/LSI/+Mbg");
	var mask_4_graphics_116 = new cjs.Graphics().p("AyGAoMAgNgMiIEALTMggNAMig");
	var mask_4_graphics_117 = new cjs.Graphics().p("AyOAsMAgbgMpIECLSMggbAMpg");
	var mask_4_graphics_118 = new cjs.Graphics().p("AyWAwMAgqgMxIEDLSMggqAMxg");
	var mask_4_graphics_119 = new cjs.Graphics().p("AyeA0MAg4gM4IEGLRMgg5AM4g");
	var mask_4_graphics_120 = new cjs.Graphics().p("AymA4MAhHgNAIEHLRMghIANAg");
	var mask_4_graphics_121 = new cjs.Graphics().p("AyvA7MAhWgNGIEJLQMghWANHg");
	var mask_4_graphics_122 = new cjs.Graphics().p("Ay3A/MAhlgNNIEKLQMghlANNg");
	var mask_4_graphics_123 = new cjs.Graphics().p("Ay/BDMAhzgNVIEMLPMgh0ANWg");
	var mask_4_graphics_124 = new cjs.Graphics().p("AzHBHMAiCgNdIENLPMgiCANeg");
	var mask_4_graphics_125 = new cjs.Graphics().p("AzQBLMAiRgNkIEPLOMgiRANlg");
	var mask_4_graphics_126 = new cjs.Graphics().p("AzYBPMAiggNsIERLPMgigANsg");
	var mask_4_graphics_127 = new cjs.Graphics().p("AzgBTMAivgNzIESLOMgivANzg");
	var mask_4_graphics_128 = new cjs.Graphics().p("AzoBXMAi+gN7IETLOMgi9AN7g");
	var mask_4_graphics_129 = new cjs.Graphics().p("AzwBbMAjMgOCIEVLNMgjMAOCg");
	var mask_4_graphics_130 = new cjs.Graphics().p("Az5BeMAjbgOIIEXLMMgjbAOJg");
	var mask_4_graphics_131 = new cjs.Graphics().p("A0ABjMAjpgORIEZLMMgjqAORg");
	var mask_4_graphics_132 = new cjs.Graphics().p("A0JBnMAj5gOZIEaLNMgj5AOXg");
	var mask_4_graphics_133 = new cjs.Graphics().p("A0RBqMAkHgOfIEcLLMgkHAOgg");
	var mask_4_graphics_134 = new cjs.Graphics().p("A0ZBuMAkWgOmIEdLKMgkWAOng");
	var mask_4_graphics_135 = new cjs.Graphics().p("A0hByMAkkgOuIEfLLMgkkAOug");
	var mask_4_graphics_136 = new cjs.Graphics().p("Ap2M5MAk0gO2IEgLJMgk0AO3g");
	var mask_4_graphics_137 = new cjs.Graphics().p("A0xB5MAlCgO7IEhLKMglCAO7g");
	var mask_4_graphics_138 = new cjs.Graphics().p("A04B8MAlRgPBIEgLKMglRAPBg");
	var mask_4_graphics_139 = new cjs.Graphics().p("A1AB/MAlggPHIEhLKMglgAPHg");
	var mask_4_graphics_140 = new cjs.Graphics().p("A1HCCMAlvgPNIEgLKMglvAPNg");
	var mask_4_graphics_141 = new cjs.Graphics().p("A1PCFMAl+gPTIEhLKMgl+APTg");
	var mask_4_graphics_142 = new cjs.Graphics().p("A1WCIMAmMgPZIEhLKMgmMAPZg");
	var mask_4_graphics_143 = new cjs.Graphics().p("A1eCLMAmcgPfIEhLKMgmcAPfg");
	var mask_4_graphics_144 = new cjs.Graphics().p("AqxM4MAmrgPlIEgLJMgmrAPmg");
	var mask_4_graphics_145 = new cjs.Graphics().p("A1tCRMAm6gPrIEhLKMgm6APrg");
	var mask_4_graphics_146 = new cjs.Graphics().p("A10CUMAnIgPxIEhLKMgnIAPxg");
	var mask_4_graphics_147 = new cjs.Graphics().p("A17CXMAnXgP3IEgLKMgnXAP3g");
	var mask_4_graphics_148 = new cjs.Graphics().p("A2DCaMAnmgP9IEhLKMgnmAP9g");
	var mask_4_graphics_149 = new cjs.Graphics().p("A2KCdMAn1gQDIEgLKMgn1AQDg");
	var mask_4_graphics_150 = new cjs.Graphics().p("A2RCgMAoDgQJIEgLKMgoDAQJg");
	var mask_4_graphics_151 = new cjs.Graphics().p("A2ZCjMAoSgQPIEhLKMgoSAQPg");
	var mask_4_graphics_152 = new cjs.Graphics().p("A2gCmMAohgQVIEgLKMgohAQVg");
	var mask_4_graphics_153 = new cjs.Graphics().p("A2nCpMAovgQbIEhLKMgowAQbg");
	var mask_4_graphics_154 = new cjs.Graphics().p("Ar7M4MAo/gQhIEgLJMgo/AQig");
	var mask_4_graphics_155 = new cjs.Graphics().p("A22CaMAo+gQhIEvLuMgo+AQhg");
	var mask_4_graphics_156 = new cjs.Graphics().p("A2+CIMAo/gQiIE+MUMgo/AQgg");
	var mask_4_graphics_157 = new cjs.Graphics().p("A3FB1MAo/gQhIFMM4Mgo/AQhg");
	var mask_4_graphics_158 = new cjs.Graphics().p("A3MBjMAo+gQhIFbNcMgo+AQhg");
	var mask_4_graphics_159 = new cjs.Graphics().p("A3UBRMAo/gQiIFqOCMgo/AQgg");
	var mask_4_graphics_160 = new cjs.Graphics().p("AtTJcMAo+gQhIF5OlMgo+AQig");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_4_graphics_9,x:85.7,y:150.5}).wait(1).to({graphics:mask_4_graphics_10,x:158.8,y:261.6}).wait(1).to({graphics:mask_4_graphics_11,x:159.7,y:261.3}).wait(1).to({graphics:mask_4_graphics_12,x:160.7,y:261}).wait(1).to({graphics:mask_4_graphics_13,x:161.6,y:260.7}).wait(1).to({graphics:mask_4_graphics_14,x:162.5,y:260.4}).wait(1).to({graphics:mask_4_graphics_15,x:163.4,y:260.1}).wait(1).to({graphics:mask_4_graphics_16,x:164.4,y:259.8}).wait(1).to({graphics:mask_4_graphics_17,x:165.3,y:259.5}).wait(1).to({graphics:mask_4_graphics_18,x:166.2,y:259.3}).wait(1).to({graphics:mask_4_graphics_19,x:167.2,y:259}).wait(1).to({graphics:mask_4_graphics_20,x:168.1,y:258.7}).wait(1).to({graphics:mask_4_graphics_21,x:169,y:258.4}).wait(1).to({graphics:mask_4_graphics_22,x:170,y:258.1}).wait(1).to({graphics:mask_4_graphics_23,x:170.9,y:257.8}).wait(1).to({graphics:mask_4_graphics_24,x:171.8,y:257.5}).wait(1).to({graphics:mask_4_graphics_25,x:172.7,y:257.2}).wait(1).to({graphics:mask_4_graphics_26,x:173.7,y:256.9}).wait(1).to({graphics:mask_4_graphics_27,x:174.6,y:256.6}).wait(1).to({graphics:mask_4_graphics_28,x:175.5,y:256.3}).wait(1).to({graphics:mask_4_graphics_29,x:176.4,y:256}).wait(1).to({graphics:mask_4_graphics_30,x:177.4,y:255.7}).wait(1).to({graphics:mask_4_graphics_31,x:178.3,y:255.4}).wait(1).to({graphics:mask_4_graphics_32,x:179.2,y:255.1}).wait(1).to({graphics:mask_4_graphics_33,x:180.1,y:254.8}).wait(1).to({graphics:mask_4_graphics_34,x:181.1,y:254.5}).wait(1).to({graphics:mask_4_graphics_35,x:182,y:254.3}).wait(1).to({graphics:mask_4_graphics_36,x:182.9,y:254}).wait(1).to({graphics:mask_4_graphics_37,x:183.8,y:253.7}).wait(1).to({graphics:mask_4_graphics_38,x:184.8,y:253.4}).wait(1).to({graphics:mask_4_graphics_39,x:185.7,y:253.1}).wait(1).to({graphics:mask_4_graphics_40,x:186.6,y:252.8}).wait(1).to({graphics:mask_4_graphics_41,x:187.6,y:252.5}).wait(1).to({graphics:mask_4_graphics_42,x:188.5,y:252.2}).wait(1).to({graphics:mask_4_graphics_43,x:189.4,y:251.9}).wait(1).to({graphics:mask_4_graphics_44,x:190.3,y:251.6}).wait(1).to({graphics:mask_4_graphics_45,x:191.3,y:251.3}).wait(1).to({graphics:mask_4_graphics_46,x:192.2,y:251}).wait(1).to({graphics:mask_4_graphics_47,x:193.1,y:250.7}).wait(1).to({graphics:mask_4_graphics_48,x:194.1,y:250.4}).wait(1).to({graphics:mask_4_graphics_49,x:195,y:250.1}).wait(1).to({graphics:mask_4_graphics_50,x:195.9,y:249.8}).wait(1).to({graphics:mask_4_graphics_51,x:196.8,y:249.5}).wait(1).to({graphics:mask_4_graphics_52,x:197.8,y:249.3}).wait(1).to({graphics:mask_4_graphics_53,x:198.7,y:249}).wait(1).to({graphics:mask_4_graphics_54,x:199.6,y:248.7}).wait(1).to({graphics:mask_4_graphics_55,x:200.6,y:248.4}).wait(1).to({graphics:mask_4_graphics_56,x:201.5,y:248.1}).wait(1).to({graphics:mask_4_graphics_57,x:202.4,y:247.8}).wait(1).to({graphics:mask_4_graphics_58,x:203.3,y:247.5}).wait(1).to({graphics:mask_4_graphics_59,x:204.3,y:247.2}).wait(1).to({graphics:mask_4_graphics_60,x:205.2,y:246.9}).wait(1).to({graphics:mask_4_graphics_61,x:206.1,y:246.6}).wait(1).to({graphics:mask_4_graphics_62,x:207,y:246.3}).wait(1).to({graphics:mask_4_graphics_63,x:208,y:246}).wait(1).to({graphics:mask_4_graphics_64,x:208.9,y:245.7}).wait(1).to({graphics:mask_4_graphics_65,x:209.8,y:245.4}).wait(1).to({graphics:mask_4_graphics_66,x:210.7,y:245.1}).wait(1).to({graphics:mask_4_graphics_67,x:211.7,y:244.8}).wait(1).to({graphics:mask_4_graphics_68,x:212.6,y:244.5}).wait(1).to({graphics:mask_4_graphics_69,x:213.5,y:244.3}).wait(1).to({graphics:mask_4_graphics_70,x:214.4,y:244}).wait(1).to({graphics:mask_4_graphics_71,x:215.4,y:243.7}).wait(1).to({graphics:mask_4_graphics_72,x:216.3,y:243.4}).wait(1).to({graphics:mask_4_graphics_73,x:217.2,y:243.1}).wait(1).to({graphics:mask_4_graphics_74,x:218.2,y:242.8}).wait(1).to({graphics:mask_4_graphics_75,x:219.1,y:242.5}).wait(1).to({graphics:mask_4_graphics_76,x:220,y:242.2}).wait(1).to({graphics:mask_4_graphics_77,x:221,y:241.9}).wait(1).to({graphics:mask_4_graphics_78,x:221.9,y:241.6}).wait(1).to({graphics:mask_4_graphics_79,x:222.8,y:241.3}).wait(1).to({graphics:mask_4_graphics_80,x:223.7,y:241}).wait(1).to({graphics:mask_4_graphics_81,x:224.7,y:240.7}).wait(1).to({graphics:mask_4_graphics_82,x:225.6,y:240.4}).wait(1).to({graphics:mask_4_graphics_83,x:156.1,y:152.5}).wait(1).to({graphics:mask_4_graphics_84,x:227.4,y:239.8}).wait(1).to({graphics:mask_4_graphics_85,x:228.3,y:239.5}).wait(1).to({graphics:mask_4_graphics_86,x:229.2,y:239.3}).wait(1).to({graphics:mask_4_graphics_87,x:230,y:239}).wait(1).to({graphics:mask_4_graphics_88,x:230.9,y:238.7}).wait(1).to({graphics:mask_4_graphics_89,x:231.8,y:238.4}).wait(1).to({graphics:mask_4_graphics_90,x:232.7,y:238.1}).wait(1).to({graphics:mask_4_graphics_91,x:233.6,y:237.8}).wait(1).to({graphics:mask_4_graphics_92,x:234.5,y:237.5}).wait(1).to({graphics:mask_4_graphics_93,x:235.4,y:237.2}).wait(1).to({graphics:mask_4_graphics_94,x:236.3,y:236.9}).wait(1).to({graphics:mask_4_graphics_95,x:237.1,y:236.6}).wait(1).to({graphics:mask_4_graphics_96,x:238,y:236.3}).wait(1).to({graphics:mask_4_graphics_97,x:238.9,y:236}).wait(1).to({graphics:mask_4_graphics_98,x:239.8,y:235.7}).wait(1).to({graphics:mask_4_graphics_99,x:240.7,y:235.4}).wait(1).to({graphics:mask_4_graphics_100,x:241.6,y:235.1}).wait(1).to({graphics:mask_4_graphics_101,x:242.4,y:234.8}).wait(1).to({graphics:mask_4_graphics_102,x:243.3,y:234.5}).wait(1).to({graphics:mask_4_graphics_103,x:244.2,y:234.3}).wait(1).to({graphics:mask_4_graphics_104,x:245.1,y:234}).wait(1).to({graphics:mask_4_graphics_105,x:246,y:233.7}).wait(1).to({graphics:mask_4_graphics_106,x:246.9,y:233.4}).wait(1).to({graphics:mask_4_graphics_107,x:247.8,y:233.1}).wait(1).to({graphics:mask_4_graphics_108,x:248.7,y:232.8}).wait(1).to({graphics:mask_4_graphics_109,x:249.5,y:232.5}).wait(1).to({graphics:mask_4_graphics_110,x:250.4,y:232.2}).wait(1).to({graphics:mask_4_graphics_111,x:181.5,y:153.2}).wait(1).to({graphics:mask_4_graphics_112,x:252.1,y:231.6}).wait(1).to({graphics:mask_4_graphics_113,x:252.8,y:231.3}).wait(1).to({graphics:mask_4_graphics_114,x:253.6,y:231}).wait(1).to({graphics:mask_4_graphics_115,x:254.4,y:230.7}).wait(1).to({graphics:mask_4_graphics_116,x:255.2,y:230.4}).wait(1).to({graphics:mask_4_graphics_117,x:255.9,y:230.1}).wait(1).to({graphics:mask_4_graphics_118,x:256.7,y:229.8}).wait(1).to({graphics:mask_4_graphics_119,x:257.5,y:229.5}).wait(1).to({graphics:mask_4_graphics_120,x:258.2,y:229.2}).wait(1).to({graphics:mask_4_graphics_121,x:259,y:229}).wait(1).to({graphics:mask_4_graphics_122,x:259.8,y:228.7}).wait(1).to({graphics:mask_4_graphics_123,x:260.5,y:228.4}).wait(1).to({graphics:mask_4_graphics_124,x:261.3,y:228.1}).wait(1).to({graphics:mask_4_graphics_125,x:262.1,y:227.8}).wait(1).to({graphics:mask_4_graphics_126,x:262.8,y:227.5}).wait(1).to({graphics:mask_4_graphics_127,x:263.6,y:227.2}).wait(1).to({graphics:mask_4_graphics_128,x:264.4,y:226.9}).wait(1).to({graphics:mask_4_graphics_129,x:265.1,y:226.6}).wait(1).to({graphics:mask_4_graphics_130,x:265.9,y:226.3}).wait(1).to({graphics:mask_4_graphics_131,x:266.7,y:226}).wait(1).to({graphics:mask_4_graphics_132,x:267.4,y:225.7}).wait(1).to({graphics:mask_4_graphics_133,x:268.2,y:225.4}).wait(1).to({graphics:mask_4_graphics_134,x:269,y:225.1}).wait(1).to({graphics:mask_4_graphics_135,x:269.7,y:224.8}).wait(1).to({graphics:mask_4_graphics_136,x:201.4,y:153.9}).wait(1).to({graphics:mask_4_graphics_137,x:271.3,y:224.2}).wait(1).to({graphics:mask_4_graphics_138,x:272,y:223.9}).wait(1).to({graphics:mask_4_graphics_139,x:272.8,y:223.6}).wait(1).to({graphics:mask_4_graphics_140,x:273.5,y:223.3}).wait(1).to({graphics:mask_4_graphics_141,x:274.3,y:223}).wait(1).to({graphics:mask_4_graphics_142,x:275.1,y:222.7}).wait(1).to({graphics:mask_4_graphics_143,x:275.8,y:222.4}).wait(1).to({graphics:mask_4_graphics_144,x:207.4,y:153.8}).wait(1).to({graphics:mask_4_graphics_145,x:277.3,y:221.8}).wait(1).to({graphics:mask_4_graphics_146,x:278,y:221.5}).wait(1).to({graphics:mask_4_graphics_147,x:278.8,y:221.2}).wait(1).to({graphics:mask_4_graphics_148,x:279.5,y:220.9}).wait(1).to({graphics:mask_4_graphics_149,x:280.3,y:220.6}).wait(1).to({graphics:mask_4_graphics_150,x:281,y:220.3}).wait(1).to({graphics:mask_4_graphics_151,x:281.8,y:220}).wait(1).to({graphics:mask_4_graphics_152,x:282.5,y:219.7}).wait(1).to({graphics:mask_4_graphics_153,x:283.3,y:219.4}).wait(1).to({graphics:mask_4_graphics_154,x:214.8,y:153.8}).wait(1).to({graphics:mask_4_graphics_155,x:283.3,y:217.2}).wait(1).to({graphics:mask_4_graphics_156,x:282.5,y:215.4}).wait(1).to({graphics:mask_4_graphics_157,x:281.8,y:213.6}).wait(1).to({graphics:mask_4_graphics_158,x:281.1,y:211.7}).wait(1).to({graphics:mask_4_graphics_159,x:280.3,y:209.9}).wait(1).to({graphics:mask_4_graphics_160,x:214.8,y:153.8}).wait(471));

	// Layer 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("AxFJSQCzAqD9gYQD7gYFIhHQACAAADgBQLlk6DijzQDjj1gZi3QgQhthigq");
	this.shape_5.setTransform(278.2,190.4);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(9).to({_off:false},0).wait(622));

	// Letter
	this.instance_4 = new lib.Symbol1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,275);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(631));

	// Background
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_6.setTransform(275,275,3.373,2.543);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_7.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(631));

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