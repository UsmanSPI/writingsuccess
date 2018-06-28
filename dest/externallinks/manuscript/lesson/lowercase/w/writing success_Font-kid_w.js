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
	this.shape.graphics.f("#FFFFFF").s().p("AHAM/Im2xXIm0RVQgqByiRAAQiNAAguh0Ip64wIgJgwQAAiJDGAAQCHAAAqBjIHJRxIGgwyQAuiiCVAAQB7AABBCgIG7QyIG3xxQAohhCKAAQDEAAAACHIgIAwIpoYyQgsB0iFAAQiIAAg7hwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-144.3,-94.2,288.7,188.6);


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
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AghAAIBDAA");
	this.shape_1.setTransform(7.4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AgqAAIBVAA");
	this.shape_2.setTransform(8.3,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AgyAAIBmAA");
	this.shape_3.setTransform(9.1,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("Ag7AAIB3AA");
	this.shape_4.setTransform(9.9,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AhDAAICHAA");
	this.shape_5.setTransform(10.6,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AhMAAICZAA");
	this.shape_6.setTransform(11.4,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AhUAAICpAA");
	this.shape_7.setTransform(12.2,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AhcAAIC5AA");
	this.shape_8.setTransform(13,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AhkAAIDJAA");
	this.shape_9.setTransform(13.7,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AhsAAIDZAA");
	this.shape_10.setTransform(14.5,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("Ah0AAIDpAA");
	this.shape_11.setTransform(15.2,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("Ah8AAID5AA");
	this.shape_12.setTransform(15.9,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AiDAAIEHAA");
	this.shape_13.setTransform(16.6,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AiLAAIEXAA");
	this.shape_14.setTransform(17.3,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AiSAAIElAA");
	this.shape_15.setTransform(18,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AiaAAIE1AA");
	this.shape_16.setTransform(18.7,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AihAAIFDAA");
	this.shape_17.setTransform(19.4,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AioAAIFRAA");
	this.shape_18.setTransform(20.1,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AivAAIFfAA");
	this.shape_19.setTransform(20.7,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("Ai2AAIFtAA");
	this.shape_20.setTransform(21.4,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("Ai9AAIF7AA");
	this.shape_21.setTransform(22,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AjEAAIGJAA");
	this.shape_22.setTransform(22.6,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AjKAAIGVAA");
	this.shape_23.setTransform(23.2,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AjRAAIGjAA");
	this.shape_24.setTransform(23.8,0);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AjXAAIGvAA");
	this.shape_25.setTransform(24.4,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AjeAAIG9AA");
	this.shape_26.setTransform(25,0);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AjkAAIHJAA");
	this.shape_27.setTransform(25.6,0);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AjqAAIHVAA");
	this.shape_28.setTransform(26.2,0);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AjwAAIHhAA");
	this.shape_29.setTransform(26.8,0);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("Aj2AAIHtAA");
	this.shape_30.setTransform(27.3,0);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("Aj8AAIH5AA");
	this.shape_31.setTransform(27.8,0);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AkBAAIIDAA");
	this.shape_32.setTransform(28.4,0);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AkHAAIIPAA");
	this.shape_33.setTransform(28.9,0);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AkNAAIIbAA");
	this.shape_34.setTransform(29.4,0);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AkSAAIIlAA");
	this.shape_35.setTransform(29.9,0);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AkXAAIIvAA");
	this.shape_36.setTransform(30.4,0);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AkdAAII7AA");
	this.shape_37.setTransform(30.9,0);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AkiAAIJFAA");
	this.shape_38.setTransform(31.4,0);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AknAAIJPAA");
	this.shape_39.setTransform(31.9,0);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AksAAIJZAA");
	this.shape_40.setTransform(32.3,0);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AkxAAIJjAA");
	this.shape_41.setTransform(32.8,0);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("Ak1AAIJrAA");
	this.shape_42.setTransform(33.2,0);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("Ak6AAIJ1AA");
	this.shape_43.setTransform(33.7,0);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("Ak+AAIJ+AA");
	this.shape_44.setTransform(34.1,0);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AlDAAIKHAA");
	this.shape_45.setTransform(34.5,0);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AlHAAIKPAA");
	this.shape_46.setTransform(34.9,0);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AlLAAIKXAA");
	this.shape_47.setTransform(35.3,0);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AlQAAIKhAA");
	this.shape_48.setTransform(35.7,0);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AlUAAIKpAA");
	this.shape_49.setTransform(36.1,0);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AlXAAIKvAA");
	this.shape_50.setTransform(36.4,0);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AlbAAIK3AA");
	this.shape_51.setTransform(36.8,0);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AlfAAIK/AA");
	this.shape_52.setTransform(37.1,0);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AljAAILHAA");
	this.shape_53.setTransform(37.5,0);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AlmAAILNAA");
	this.shape_54.setTransform(37.8,0);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AlpAAILUAA");
	this.shape_55.setTransform(38.1,0);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AltAAILbAA");
	this.shape_56.setTransform(38.4,0);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AlwAAILhAA");
	this.shape_57.setTransform(38.7,0);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AlzAAILnAA");
	this.shape_58.setTransform(39,0);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("Al2AAILtAA");
	this.shape_59.setTransform(39.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).wait(1));

	// Layer 1
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(9.1,0,0.81,0.81,-90,0,0,0.4,-6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.3,scaleX:1,scaleY:1,rotation:-90.2,x:76.7,y:0.1},59,cjs.Ease.get(0.5)).wait(1));

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
(lib.writingsuccess_Fontkid_w = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_624 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(624).call(this.frame_624).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(148.4,195.1,0.999,0.999,0,6.5,-173.5,22.4,-143.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:212.4,y:348.1},111).wait(11).to({regX:22.5,rotation:23.5,skewX:0,skewY:0,x:214.1,y:350.3},0).to({x:271.6,y:196.4},118).wait(10).to({rotation:0,skewX:-23.5,skewY:156.5,x:273.6,y:198.6},0).to({x:341.2,y:352.1},130).wait(10).to({rotation:23.5,skewX:0,skewY:0,x:337.3,y:352.4},0).to({x:397.6,y:195.2},150).wait(11).to({startPosition:0},0).to({guide:{path:[396.4,196.5,249.7,54.3,180.1,30.5,110.5,6.6,118,101.1,133.2,290.3,-180.9,133.9]}},64).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(212.1,349.4,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},111).wait(11).to({_off:false,x:272.1,y:196.4},0).to({_off:true},118).wait(10).to({_off:false,x:338.4,y:352.5},0).to({_off:true},130).wait(10).to({_off:false,x:396.4,y:195.5},0).to({_off:true},150).wait(76));

	// ar4
	this.instance_1 = new lib.ar2("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(403,288.6,1,1,-69.3,0,0,0.9,-0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(399).to({_off:false},0).wait(226));

	// ar3
	this.instance_2 = new lib.ar2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(301.9,162.7,1,1,69.7,0,0,0.8,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(259).to({_off:false},0).wait(366));

	// ar2
	this.instance_3 = new lib.ar2("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(221.5,243.1,1,1,-69.3,0,0,0.9,-0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(131).to({_off:false},0).wait(494));

	// ar1
	this.instance_4 = new lib.ar2("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(114.2,208.1,1,1,69.7,0,0,0.8,0.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(616));

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AAGgOIgLAd");
	this.shape_1.setTransform(339.8,348.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("AgHAUIAPgn");
	this.shape_2.setTransform(340,348);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("AgIAZIASgx");
	this.shape_3.setTransform(340.2,347.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("AgLAeIAWg7");
	this.shape_4.setTransform(340.4,347);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(25,1,1).p("AgMAjIAahF");
	this.shape_5.setTransform(340.6,346.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(25,1,1).p("AgOAoIAdhP");
	this.shape_6.setTransform(340.7,346);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(25,1,1).p("AgQAtIAhhZ");
	this.shape_7.setTransform(340.9,345.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(25,1,1).p("AgSAxIAlhh");
	this.shape_8.setTransform(341.1,345);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(25,1,1).p("AgUA2IAphr");
	this.shape_9.setTransform(341.3,344.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(25,1,1).p("AgWA7IAth1");
	this.shape_10.setTransform(341.5,344);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(25,1,1).p("AgYBAIAxh/");
	this.shape_11.setTransform(341.7,343.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(25,1,1).p("AgaBFIA1iJ");
	this.shape_12.setTransform(341.9,343);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(25,1,1).p("AgcBKIA5iT");
	this.shape_13.setTransform(342.1,342.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(25,1,1).p("AgeBPIA9id");
	this.shape_14.setTransform(342.3,342);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(25,1,1).p("AggBUIBBin");
	this.shape_15.setTransform(342.5,341.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(25,1,1).p("AghBZIBDix");
	this.shape_16.setTransform(342.6,341);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(25,1,1).p("AgjBeIBHi7");
	this.shape_17.setTransform(342.8,340.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(25,1,1).p("AglBjIBLjF");
	this.shape_18.setTransform(343,340);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(25,1,1).p("AgnBoIBPjP");
	this.shape_19.setTransform(343.2,339.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(25,1,1).p("AgpBtIBTjZ");
	this.shape_20.setTransform(343.4,339);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(25,1,1).p("AgrByIBXjj");
	this.shape_21.setTransform(343.6,338.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(25,1,1).p("AgtB3IBbjt");
	this.shape_22.setTransform(343.8,338);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(25,1,1).p("AgvB8IBfj3");
	this.shape_23.setTransform(344,337.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(25,1,1).p("AgwCBIBikB");
	this.shape_24.setTransform(344.2,337);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(25,1,1).p("AgzCGIBmkL");
	this.shape_25.setTransform(344.4,336.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(25,1,1).p("Ag0CLIBqkV");
	this.shape_26.setTransform(344.6,336);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(25,1,1).p("Ag2CQIBtkf");
	this.shape_27.setTransform(344.7,335.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(25,1,1).p("Ag4CVIBxkp");
	this.shape_28.setTransform(344.9,335);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(25,1,1).p("Ag6CaIB1kz");
	this.shape_29.setTransform(345.1,334.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(25,1,1).p("Ag8CfIB5k9");
	this.shape_30.setTransform(345.3,334);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(25,1,1).p("Ag+CkIB9lH");
	this.shape_31.setTransform(345.5,333.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(25,1,1).p("AhACpICBlR");
	this.shape_32.setTransform(345.7,333);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(25,1,1).p("AhCCuICFlb");
	this.shape_33.setTransform(345.9,332.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(25,1,1).p("AhECzICJll");
	this.shape_34.setTransform(346.1,332);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(25,1,1).p("AhGC4ICNlv");
	this.shape_35.setTransform(346.3,331.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(25,1,1).p("AhIC9ICRl5");
	this.shape_36.setTransform(346.5,331.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(25,1,1).p("AhJDCICUmD");
	this.shape_37.setTransform(346.7,330.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(25,1,1).p("AhLDHICXmN");
	this.shape_38.setTransform(346.8,330.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(25,1,1).p("AhNDMICbmX");
	this.shape_39.setTransform(347,329.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(25,1,1).p("AhPDRICfmh");
	this.shape_40.setTransform(347.2,329.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(25,1,1).p("AhRDWICjmr");
	this.shape_41.setTransform(347.4,328.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(25,1,1).p("AhTDbICnm1");
	this.shape_42.setTransform(347.6,328.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(25,1,1).p("AhVDgICrm/");
	this.shape_43.setTransform(347.8,327.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(25,1,1).p("AhXDlICvnJ");
	this.shape_44.setTransform(348,327.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(25,1,1).p("AhZDqICznT");
	this.shape_45.setTransform(348.2,326.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(25,1,1).p("AhbDvIC2nd");
	this.shape_46.setTransform(348.4,326.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(25,1,1).p("AhcD0IC6nn");
	this.shape_47.setTransform(348.6,325.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(25,1,1).p("AheD5IC9nx");
	this.shape_48.setTransform(348.7,325.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(25,1,1).p("AhgD+IDBn7");
	this.shape_49.setTransform(348.9,324.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(25,1,1).p("AhiEDIDFoF");
	this.shape_50.setTransform(349.1,324.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(25,1,1).p("AhkEIIDJoP");
	this.shape_51.setTransform(349.3,323.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(25,1,1).p("AhmENIDNoZ");
	this.shape_52.setTransform(349.5,323.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(25,1,1).p("AhoESIDRoj");
	this.shape_53.setTransform(349.7,322.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(25,1,1).p("AhqEXIDVot");
	this.shape_54.setTransform(349.9,322.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(25,1,1).p("AhsEcIDZo3");
	this.shape_55.setTransform(350.1,321.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(25,1,1).p("AhuEhIDdpB");
	this.shape_56.setTransform(350.3,321.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(25,1,1).p("AhwEmIDhpL");
	this.shape_57.setTransform(350.5,320.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(25,1,1).p("AhxErIDkpV");
	this.shape_58.setTransform(350.7,320.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(25,1,1).p("AhzEwIDnpf");
	this.shape_59.setTransform(350.8,319.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(25,1,1).p("Ah1E1IDrpp");
	this.shape_60.setTransform(351,319.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(25,1,1).p("Ah3E6IDvpz");
	this.shape_61.setTransform(351.2,318.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(25,1,1).p("Ah5E/IDzp9");
	this.shape_62.setTransform(351.4,318.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(25,1,1).p("Ah7FDID3qG");
	this.shape_63.setTransform(351.6,317.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(25,1,1).p("Ah9FIID7qQ");
	this.shape_64.setTransform(351.8,317.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(25,1,1).p("Ah/FNID/qa");
	this.shape_65.setTransform(352,316.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(25,1,1).p("AiBFSIEDqk");
	this.shape_66.setTransform(352.2,316.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(25,1,1).p("AiDFXIEGqu");
	this.shape_67.setTransform(352.4,315.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(25,1,1).p("AiEFcIEKq4");
	this.shape_68.setTransform(352.6,315.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(25,1,1).p("AiHFhIEPrC");
	this.shape_69.setTransform(352.8,314.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(25,1,1).p("AiIFmIERrM");
	this.shape_70.setTransform(352.9,314.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(25,1,1).p("AiKFrIEVrW");
	this.shape_71.setTransform(353.1,313.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(25,1,1).p("AiMFwIEZrg");
	this.shape_72.setTransform(353.3,313.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(25,1,1).p("AiOF1IEdrq");
	this.shape_73.setTransform(353.5,312.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(25,1,1).p("AiQF6IEhr0");
	this.shape_74.setTransform(353.7,312.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(25,1,1).p("AiSF/IElr+");
	this.shape_75.setTransform(353.9,311.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(25,1,1).p("AiUGEIEpsH");
	this.shape_76.setTransform(354.1,311.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(25,1,1).p("AiWGJIEtsR");
	this.shape_77.setTransform(354.3,310.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(25,1,1).p("AiYGOIExsb");
	this.shape_78.setTransform(354.5,310.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(25,1,1).p("AiZGTIE0sl");
	this.shape_79.setTransform(354.7,309.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(25,1,1).p("AicGYIE4sv");
	this.shape_80.setTransform(354.9,309.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(25,1,1).p("AidGdIE7s5");
	this.shape_81.setTransform(355,308.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(25,1,1).p("AifGiIE/tD");
	this.shape_82.setTransform(355.2,308.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(25,1,1).p("AihGnIFDtN");
	this.shape_83.setTransform(355.4,307.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(25,1,1).p("AijGsIFHtX");
	this.shape_84.setTransform(355.6,307.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(25,1,1).p("AilGxIFLth");
	this.shape_85.setTransform(355.8,306.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(25,1,1).p("AinG2IFPtr");
	this.shape_86.setTransform(356,306.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(25,1,1).p("AipG7IFTt1");
	this.shape_87.setTransform(356.2,305.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(25,1,1).p("AirHAIFXt/");
	this.shape_88.setTransform(356.4,305.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(25,1,1).p("AisHFIFauJ");
	this.shape_89.setTransform(356.6,304.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(25,1,1).p("AivHKIFfuT");
	this.shape_90.setTransform(356.8,304.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(25,1,1).p("AiwHPIFhud");
	this.shape_91.setTransform(356.9,303.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(25,1,1).p("AiyHUIFlun");
	this.shape_92.setTransform(357.1,303.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(25,1,1).p("Ai0HZIFpux");
	this.shape_93.setTransform(357.3,302.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(25,1,1).p("Ai2HeIFtu7");
	this.shape_94.setTransform(357.5,302.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(25,1,1).p("Ai4HjIFxvF");
	this.shape_95.setTransform(357.7,301.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(25,1,1).p("Ai6HoIF1vP");
	this.shape_96.setTransform(357.9,301.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(25,1,1).p("Ai8HtIF5vZ");
	this.shape_97.setTransform(358.1,300.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(25,1,1).p("Ai+HyIF9vj");
	this.shape_98.setTransform(358.3,300.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(25,1,1).p("AjAH3IGBvt");
	this.shape_99.setTransform(358.5,299.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(25,1,1).p("AjBH8IGEv3");
	this.shape_100.setTransform(358.7,299.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(25,1,1).p("AjEIBIGIwB");
	this.shape_101.setTransform(358.9,298.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(25,1,1).p("AjFIGIGLwL");
	this.shape_102.setTransform(359,298.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(25,1,1).p("AjHILIGPwV");
	this.shape_103.setTransform(359.2,297.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(25,1,1).p("AjJIQIGTwf");
	this.shape_104.setTransform(359.4,297.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(25,1,1).p("AjLIVIGXwp");
	this.shape_105.setTransform(359.6,296.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(25,1,1).p("AjNIaIGbwz");
	this.shape_106.setTransform(359.8,296.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(25,1,1).p("AjPIfIGfw9");
	this.shape_107.setTransform(360,295.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(25,1,1).p("AjRIkIGjxH");
	this.shape_108.setTransform(360.2,295.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(25,1,1).p("AjTIpIGnxR");
	this.shape_109.setTransform(360.4,294.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(25,1,1).p("AjUIuIGqxb");
	this.shape_110.setTransform(360.6,294.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(25,1,1).p("AjXIzIGvxl");
	this.shape_111.setTransform(360.8,293.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(25,1,1).p("AjZI4IGzxv");
	this.shape_112.setTransform(361,293.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(25,1,1).p("AjaI9IG1x5");
	this.shape_113.setTransform(361.1,292.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(25,1,1).p("AjcJCIG5yD");
	this.shape_114.setTransform(361.3,292.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(25,1,1).p("AjeJHIG9yN");
	this.shape_115.setTransform(361.5,291.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(25,1,1).p("AjgJMIHByX");
	this.shape_116.setTransform(361.7,291.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(25,1,1).p("AjiJRIHFyh");
	this.shape_117.setTransform(361.9,290.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(25,1,1).p("AjkJWIHJyr");
	this.shape_118.setTransform(362.1,290.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(25,1,1).p("AjmJbIHNy1");
	this.shape_119.setTransform(362.3,289.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(25,1,1).p("AjoJgIHRy/");
	this.shape_120.setTransform(362.5,289.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(25,1,1).p("AjpJlIHUzJ");
	this.shape_121.setTransform(362.7,288.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(25,1,1).p("AjsJqIHYzT");
	this.shape_122.setTransform(362.9,288.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(25,1,1).p("AjtJvIHbzd");
	this.shape_123.setTransform(363,287.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(25,1,1).p("AjvJ0IHfzn");
	this.shape_124.setTransform(363.2,287.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(25,1,1).p("AjxJ5IHjzx");
	this.shape_125.setTransform(363.4,286.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(25,1,1).p("AjzJ+IHnz7");
	this.shape_126.setTransform(363.6,286.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(25,1,1).p("Aj1KDIHr0F");
	this.shape_127.setTransform(363.8,285.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(25,1,1).p("Aj3KIIHv0P");
	this.shape_128.setTransform(364,285.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(25,1,1).p("Aj5KNIHz0Z");
	this.shape_129.setTransform(364.2,284.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(25,1,1).p("Aj7KSIH30j");
	this.shape_130.setTransform(364.4,284.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(25,1,1).p("Aj8KWIH60r");
	this.shape_131.setTransform(364.6,283.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(25,1,1).p("Aj/KbIH/01");
	this.shape_132.setTransform(364.8,283.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(25,1,1).p("AkBKgIID0/");
	this.shape_133.setTransform(365,282.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(25,1,1).p("AkCKlIIF1J");
	this.shape_134.setTransform(365.1,282.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(25,1,1).p("AkEKqIIJ1T");
	this.shape_135.setTransform(365.3,281.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(25,1,1).p("AkGKvIIN1d");
	this.shape_136.setTransform(365.5,281.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(25,1,1).p("AkIK0IIR1n");
	this.shape_137.setTransform(365.7,280.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(25,1,1).p("AkKK5IIV1x");
	this.shape_138.setTransform(365.9,280.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(25,1,1).p("AkMK+IIZ17");
	this.shape_139.setTransform(366.1,279.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(25,1,1).p("AkOLDIId2F");
	this.shape_140.setTransform(366.3,279.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(25,1,1).p("AkQLIIIh2P");
	this.shape_141.setTransform(366.5,278.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(25,1,1).p("AkRLNIIk2Z");
	this.shape_142.setTransform(366.7,278.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(25,1,1).p("AkULSIIo2j");
	this.shape_143.setTransform(366.9,277.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(25,1,1).p("AkVLXIIs2t");
	this.shape_144.setTransform(367.1,277.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(25,1,1).p("AkXLcIIv23");
	this.shape_145.setTransform(367.2,276.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(25,1,1).p("AkZLhIIz3B");
	this.shape_146.setTransform(367.4,276.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(25,1,1).p("AkbLmII33L");
	this.shape_147.setTransform(367.6,275.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(25,1,1).p("AkdLrII73V");
	this.shape_148.setTransform(367.8,275.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(25,1,1).p("AkfLwII/3f");
	this.shape_149.setTransform(368,274.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(25,1,1).p("AkhL1IJD3p");
	this.shape_150.setTransform(368.2,274.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").ss(25,1,1).p("AEkr5IpHXz");
	this.shape_151.setTransform(368.4,273.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},399).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).wait(76));

	// Layer 4
	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(25,1,1).p("AgGgPIANAf");
	this.shape_152.setTransform(275.5,199.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#000000").ss(25,1,1).p("AgIgUIARAq");
	this.shape_153.setTransform(275.8,200.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(25,1,1).p("AgKgaIAVA1");
	this.shape_154.setTransform(276,200.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#000000").ss(25,1,1).p("AgNggIAbBB");
	this.shape_155.setTransform(276.3,201.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(25,1,1).p("AgPgmIAfBN");
	this.shape_156.setTransform(276.5,201.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#000000").ss(25,1,1).p("AgSgsIAlBZ");
	this.shape_157.setTransform(276.7,202.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(25,1,1).p("AgUgyIApBk");
	this.shape_158.setTransform(277,203.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#000000").ss(25,1,1).p("AgXg3IAuBv");
	this.shape_159.setTransform(277.2,203.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(25,1,1).p("AgZg9IAzB7");
	this.shape_160.setTransform(277.5,204.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#000000").ss(25,1,1).p("AgchDIA4CH");
	this.shape_161.setTransform(277.7,204.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(25,1,1).p("AgehIIA9CR");
	this.shape_162.setTransform(277.9,205.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#000000").ss(25,1,1).p("AgghOIBBCd");
	this.shape_163.setTransform(278.2,206);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(25,1,1).p("AgihUIBGCp");
	this.shape_164.setTransform(278.4,206.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").ss(25,1,1).p("AglhaIBLC1");
	this.shape_165.setTransform(278.7,207.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(25,1,1).p("AgnhgIBQDB");
	this.shape_166.setTransform(278.9,207.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").ss(25,1,1).p("AgqhmIBVDN");
	this.shape_167.setTransform(279.1,208.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(25,1,1).p("AgshrIBZDX");
	this.shape_168.setTransform(279.4,208.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").ss(25,1,1).p("AgvhxIBfDj");
	this.shape_169.setTransform(279.6,209.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(25,1,1).p("Agxh3IBjDv");
	this.shape_170.setTransform(279.9,210);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").ss(25,1,1).p("Ag0h9IBpD6");
	this.shape_171.setTransform(280.1,210.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").ss(25,1,1).p("Ag2iCIBtEF");
	this.shape_172.setTransform(280.3,211.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#000000").ss(25,1,1).p("Ag4iIIBxER");
	this.shape_173.setTransform(280.6,211.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(25,1,1).p("Ag7iOIB3Ed");
	this.shape_174.setTransform(280.8,212.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#000000").ss(25,1,1).p("Ag9iUIB7Ep");
	this.shape_175.setTransform(281.1,212.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#000000").ss(25,1,1).p("Ag/iZIB/Ez");
	this.shape_176.setTransform(281.3,213.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#000000").ss(25,1,1).p("AhCifICFE/");
	this.shape_177.setTransform(281.5,214.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#000000").ss(25,1,1).p("AhEilICJFL");
	this.shape_178.setTransform(281.8,214.7);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#000000").ss(25,1,1).p("AhHirICPFX");
	this.shape_179.setTransform(282,215.2);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").ss(25,1,1).p("AhJixICTFj");
	this.shape_180.setTransform(282.3,215.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#000000").ss(25,1,1).p("AhLi2ICXFt");
	this.shape_181.setTransform(282.5,216.4);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#000000").ss(25,1,1).p("AhOi8ICdF5");
	this.shape_182.setTransform(282.7,217);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#000000").ss(25,1,1).p("AhQjCIChGF");
	this.shape_183.setTransform(283,217.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#000000").ss(25,1,1).p("AhTjIICnGR");
	this.shape_184.setTransform(283.2,218.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#000000").ss(25,1,1).p("AhVjNICrGc");
	this.shape_185.setTransform(283.5,218.7);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#000000").ss(25,1,1).p("AhYjTICwGn");
	this.shape_186.setTransform(283.7,219.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#000000").ss(25,1,1).p("AhajZIC1Gz");
	this.shape_187.setTransform(284,219.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#000000").ss(25,1,1).p("AhcjfIC5G/");
	this.shape_188.setTransform(284.2,220.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#000000").ss(25,1,1).p("AhfjkIC/HJ");
	this.shape_189.setTransform(284.4,221);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#000000").ss(25,1,1).p("AhhjqIDDHV");
	this.shape_190.setTransform(284.7,221.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#000000").ss(25,1,1).p("AhjjwIDIHh");
	this.shape_191.setTransform(284.9,222.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#000000").ss(25,1,1).p("Ahmj2IDNHt");
	this.shape_192.setTransform(285.2,222.8);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#000000").ss(25,1,1).p("Ahoj8IDRH5");
	this.shape_193.setTransform(285.4,223.3);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#000000").ss(25,1,1).p("AhrkBIDXID");
	this.shape_194.setTransform(285.6,223.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#000000").ss(25,1,1).p("AhtkHIDbIP");
	this.shape_195.setTransform(285.9,224.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#000000").ss(25,1,1).p("AhwkNIDhIb");
	this.shape_196.setTransform(286.1,225.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#000000").ss(25,1,1).p("AhykTIDlIn");
	this.shape_197.setTransform(286.4,225.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#000000").ss(25,1,1).p("Ah0kZIDpIy");
	this.shape_198.setTransform(286.6,226.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#000000").ss(25,1,1).p("Ah3keIDvI9");
	this.shape_199.setTransform(286.8,226.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#000000").ss(25,1,1).p("Ah5kkIDzJJ");
	this.shape_200.setTransform(287.1,227.4);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#000000").ss(25,1,1).p("Ah7kqID3JV");
	this.shape_201.setTransform(287.3,228);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#000000").ss(25,1,1).p("Ah+kwID9Jh");
	this.shape_202.setTransform(287.6,228.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#000000").ss(25,1,1).p("AiAk1IEBJr");
	this.shape_203.setTransform(287.8,229.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#000000").ss(25,1,1).p("AiDk7IEHJ3");
	this.shape_204.setTransform(288,229.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#000000").ss(25,1,1).p("AiFlBIELKD");
	this.shape_205.setTransform(288.3,230.3);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#000000").ss(25,1,1).p("AiHlHIEPKP");
	this.shape_206.setTransform(288.5,230.8);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#000000").ss(25,1,1).p("AiKlMIEVKZ");
	this.shape_207.setTransform(288.8,231.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#000000").ss(25,1,1).p("AiMlSIEZKl");
	this.shape_208.setTransform(289,232);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#000000").ss(25,1,1).p("AiPlYIEfKx");
	this.shape_209.setTransform(289.2,232.6);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#000000").ss(25,1,1).p("AiRleIEjK9");
	this.shape_210.setTransform(289.5,233.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#000000").ss(25,1,1).p("AiUlkIEoLJ");
	this.shape_211.setTransform(289.7,233.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#000000").ss(25,1,1).p("AiWlqIEtLV");
	this.shape_212.setTransform(290,234.3);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#000000").ss(25,1,1).p("AiZlvIEyLf");
	this.shape_213.setTransform(290.2,234.9);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#000000").ss(25,1,1).p("Aibl1IE3Lr");
	this.shape_214.setTransform(290.4,235.5);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#000000").ss(25,1,1).p("Aidl7IE7L3");
	this.shape_215.setTransform(290.7,236);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#000000").ss(25,1,1).p("AifmAIFAMB");
	this.shape_216.setTransform(290.9,236.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#000000").ss(25,1,1).p("AiimHIFFMP");
	this.shape_217.setTransform(291.2,237.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#000000").ss(25,1,1).p("AikmMIFKMZ");
	this.shape_218.setTransform(291.4,237.8);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#000000").ss(25,1,1).p("AinmSIFPMl");
	this.shape_219.setTransform(291.6,238.4);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#000000").ss(25,1,1).p("AipmYIFTMx");
	this.shape_220.setTransform(291.9,238.9);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#000000").ss(25,1,1).p("AismdIFZM7");
	this.shape_221.setTransform(292.1,239.5);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#000000").ss(25,1,1).p("AiumjIFdNH");
	this.shape_222.setTransform(292.4,240.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#000000").ss(25,1,1).p("AixmpIFjNT");
	this.shape_223.setTransform(292.6,240.7);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#000000").ss(25,1,1).p("AizmvIFnNf");
	this.shape_224.setTransform(292.8,241.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#000000").ss(25,1,1).p("Ai1m1IFrNr");
	this.shape_225.setTransform(293.1,241.8);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#000000").ss(25,1,1).p("Ai4m6IFxN1");
	this.shape_226.setTransform(293.3,242.4);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#000000").ss(25,1,1).p("Ai6nAIF1OB");
	this.shape_227.setTransform(293.6,243);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#000000").ss(25,1,1).p("Ai8nGIF5ON");
	this.shape_228.setTransform(293.8,243.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#000000").ss(25,1,1).p("Ai/nMIF/OZ");
	this.shape_229.setTransform(294,244.1);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#000000").ss(25,1,1).p("AjBnSIGDOl");
	this.shape_230.setTransform(294.3,244.7);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#000000").ss(25,1,1).p("AjEnXIGJOv");
	this.shape_231.setTransform(294.5,245.3);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#000000").ss(25,1,1).p("AjGndIGNO7");
	this.shape_232.setTransform(294.8,245.9);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#000000").ss(25,1,1).p("AjInjIGRPH");
	this.shape_233.setTransform(295,246.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#000000").ss(25,1,1).p("AjLnoIGXPR");
	this.shape_234.setTransform(295.2,247);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#000000").ss(25,1,1).p("AjNnuIGbPd");
	this.shape_235.setTransform(295.5,247.6);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#000000").ss(25,1,1).p("AjQn0IGhPp");
	this.shape_236.setTransform(295.7,248.2);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#000000").ss(25,1,1).p("AjSn6IGlP1");
	this.shape_237.setTransform(296,248.8);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#000000").ss(25,1,1).p("AjVoAIGqQB");
	this.shape_238.setTransform(296.2,249.3);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#000000").ss(25,1,1).p("AjXoGIGvQN");
	this.shape_239.setTransform(296.5,249.9);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#000000").ss(25,1,1).p("AjZoLIGzQX");
	this.shape_240.setTransform(296.7,250.5);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#000000").ss(25,1,1).p("AjcoRIG5Qj");
	this.shape_241.setTransform(296.9,251.1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#000000").ss(25,1,1).p("AjeoXIG9Qv");
	this.shape_242.setTransform(297.2,251.6);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#000000").ss(25,1,1).p("AjgodIHCQ7");
	this.shape_243.setTransform(297.4,252.2);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#000000").ss(25,1,1).p("AjjojIHHRH");
	this.shape_244.setTransform(297.7,252.8);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#000000").ss(25,1,1).p("AjlooIHLRR");
	this.shape_245.setTransform(297.9,253.4);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#000000").ss(25,1,1).p("AjoouIHRRd");
	this.shape_246.setTransform(298.1,254);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#000000").ss(25,1,1).p("Ajqo0IHVRp");
	this.shape_247.setTransform(298.4,254.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#000000").ss(25,1,1).p("Ajto5IHbRz");
	this.shape_248.setTransform(298.6,255.1);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#000000").ss(25,1,1).p("Ajvo/IHfR/");
	this.shape_249.setTransform(298.9,255.7);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#000000").ss(25,1,1).p("AjxpFIHjSL");
	this.shape_250.setTransform(299.1,256.3);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#000000").ss(25,1,1).p("Aj0pLIHpSX");
	this.shape_251.setTransform(299.3,256.8);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#000000").ss(25,1,1).p("Aj2pRIHtSj");
	this.shape_252.setTransform(299.6,257.4);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#000000").ss(25,1,1).p("Aj4pWIHxSt");
	this.shape_253.setTransform(299.8,258);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#000000").ss(25,1,1).p("Aj7pcIH3S5");
	this.shape_254.setTransform(300.1,258.6);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#000000").ss(25,1,1).p("Aj9piIH7TF");
	this.shape_255.setTransform(300.3,259.2);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#000000").ss(25,1,1).p("AkApoIIBTR");
	this.shape_256.setTransform(300.5,259.7);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#000000").ss(25,1,1).p("AkCpuIIFTd");
	this.shape_257.setTransform(300.8,260.3);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#000000").ss(25,1,1).p("AkEpzIIJTn");
	this.shape_258.setTransform(301,260.9);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#000000").ss(25,1,1).p("AkHp5IIPTz");
	this.shape_259.setTransform(301.3,261.5);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#000000").ss(25,1,1).p("AkJp/IITT/");
	this.shape_260.setTransform(301.5,262);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#000000").ss(25,1,1).p("AkMqFIIZUL");
	this.shape_261.setTransform(301.7,262.6);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#000000").ss(25,1,1).p("AkOqLIIdUW");
	this.shape_262.setTransform(302,263.2);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#000000").ss(25,1,1).p("AkRqQIIiUh");
	this.shape_263.setTransform(302.2,263.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#000000").ss(25,1,1).p("AkTqWIInUt");
	this.shape_264.setTransform(302.5,264.4);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#000000").ss(25,1,1).p("AkWqcIIsU5");
	this.shape_265.setTransform(302.7,264.9);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#000000").ss(25,1,1).p("AkYqhIIxVD");
	this.shape_266.setTransform(302.9,265.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#000000").ss(25,1,1).p("AkaqnII1VP");
	this.shape_267.setTransform(303.2,266.1);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#000000").ss(25,1,1).p("AkcqtII6Vb");
	this.shape_268.setTransform(303.4,266.7);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#000000").ss(25,1,1).p("AkfqzII/Vn");
	this.shape_269.setTransform(303.7,267.2);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#000000").ss(25,1,1).p("Akhq5IJEVz");
	this.shape_270.setTransform(303.9,267.8);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#000000").ss(25,1,1).p("Akkq+IJJV+");
	this.shape_271.setTransform(304.1,268.4);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#000000").ss(25,1,1).p("AkmrEIJNWJ");
	this.shape_272.setTransform(304.4,269);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#000000").ss(25,1,1).p("AkprKIJTWV");
	this.shape_273.setTransform(304.6,269.6);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#000000").ss(25,1,1).p("AkrrQIJXWh");
	this.shape_274.setTransform(304.9,270.1);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#000000").ss(25,1,1).p("AkurWIJdWs");
	this.shape_275.setTransform(305.1,270.7);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#000000").ss(25,1,1).p("AkwrbIJhW3");
	this.shape_276.setTransform(305.3,271.3);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#000000").ss(25,1,1).p("AkyrhIJlXD");
	this.shape_277.setTransform(305.6,271.9);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#000000").ss(25,1,1).p("Ak1rnIJrXP");
	this.shape_278.setTransform(305.8,272.5);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#000000").ss(25,1,1).p("Ak3rtIJvXb");
	this.shape_279.setTransform(306.1,273);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#000000").ss(25,1,1).p("Ak5rzIJzXm");
	this.shape_280.setTransform(306.3,273.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#000000").ss(25,1,1).p("Ak8r4IJ5Xx");
	this.shape_281.setTransform(306.5,274.2);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#000000").ss(25,1,1).p("Ak+r+IJ9X9");
	this.shape_282.setTransform(306.8,274.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_152}]},259).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).wait(236));

	// Layer 3
	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#000000").ss(25,1,1).p("AALgbIgVA3");
	this.shape_283.setTransform(215.3,347.2);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#000000").ss(25,1,1).p("AgMAiIAZhD");
	this.shape_284.setTransform(215.5,346.6);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#000000").ss(25,1,1).p("AgOAoIAdhP");
	this.shape_285.setTransform(215.7,346);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#000000").ss(25,1,1).p("AgRAuIAjhb");
	this.shape_286.setTransform(216,345.3);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#000000").ss(25,1,1).p("AgTA1IAnhp");
	this.shape_287.setTransform(216.2,344.7);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#000000").ss(25,1,1).p("AgWA6IAth0");
	this.shape_288.setTransform(216.5,344.1);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#000000").ss(25,1,1).p("AgYBBIAxiB");
	this.shape_289.setTransform(216.7,343.5);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#000000").ss(25,1,1).p("AgaBHIA1iN");
	this.shape_290.setTransform(216.9,342.9);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#000000").ss(25,1,1).p("AgcBNIA6iZ");
	this.shape_291.setTransform(217.2,342.2);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#000000").ss(25,1,1).p("AgfBTIA/im");
	this.shape_292.setTransform(217.4,341.6);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#000000").ss(25,1,1).p("AghBaIBDiz");
	this.shape_293.setTransform(217.6,341);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#000000").ss(25,1,1).p("AgkBgIBJi/");
	this.shape_294.setTransform(217.9,340.4);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#000000").ss(25,1,1).p("AgmBmIBNjL");
	this.shape_295.setTransform(218.1,339.7);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#000000").ss(25,1,1).p("AgpBsIBTjY");
	this.shape_296.setTransform(218.4,339.1);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#000000").ss(25,1,1).p("AgrBzIBXjl");
	this.shape_297.setTransform(218.6,338.5);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#000000").ss(25,1,1).p("AgtB5IBbjx");
	this.shape_298.setTransform(218.8,337.9);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#000000").ss(25,1,1).p("AgwB/IBhj9");
	this.shape_299.setTransform(219.1,337.3);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#000000").ss(25,1,1).p("AgyCFIBlkJ");
	this.shape_300.setTransform(219.3,336.6);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#000000").ss(25,1,1).p("Ag1CLIBqkV");
	this.shape_301.setTransform(219.6,336);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#000000").ss(25,1,1).p("Ag3CSIBvkj");
	this.shape_302.setTransform(219.8,335.4);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#000000").ss(25,1,1).p("Ag5CYIBzkv");
	this.shape_303.setTransform(220,334.8);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#000000").ss(25,1,1).p("Ag8CeIB5k7");
	this.shape_304.setTransform(220.3,334.1);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#000000").ss(25,1,1).p("Ag+CkIB9lH");
	this.shape_305.setTransform(220.5,333.5);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#000000").ss(25,1,1).p("AhACrICBlV");
	this.shape_306.setTransform(220.7,332.9);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#000000").ss(25,1,1).p("AhDCxICHlh");
	this.shape_307.setTransform(221,332.3);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#000000").ss(25,1,1).p("AhFC3ICLlt");
	this.shape_308.setTransform(221.2,331.7);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#000000").ss(25,1,1).p("AhIC9ICRl5");
	this.shape_309.setTransform(221.5,331);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#000000").ss(25,1,1).p("AhKDEICVmG");
	this.shape_310.setTransform(221.7,330.4);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f().s("#000000").ss(25,1,1).p("AhMDKICZmT");
	this.shape_311.setTransform(221.9,329.8);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("#000000").ss(25,1,1).p("AhODQICemf");
	this.shape_312.setTransform(222.2,329.2);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("#000000").ss(25,1,1).p("AhRDWICjmr");
	this.shape_313.setTransform(222.4,328.5);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("#000000").ss(25,1,1).p("AhTDdICom4");
	this.shape_314.setTransform(222.7,327.9);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f().s("#000000").ss(25,1,1).p("AhWDjICtnF");
	this.shape_315.setTransform(222.9,327.3);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#000000").ss(25,1,1).p("AhYDpICxnR");
	this.shape_316.setTransform(223.1,326.7);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("#000000").ss(25,1,1).p("AhbDvIC3nd");
	this.shape_317.setTransform(223.4,326);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#000000").ss(25,1,1).p("AhdD1IC7np");
	this.shape_318.setTransform(223.6,325.4);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f().s("#000000").ss(25,1,1).p("AhfD8IC/n2");
	this.shape_319.setTransform(223.8,324.8);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("#000000").ss(25,1,1).p("AhiECIDFoD");
	this.shape_320.setTransform(224.1,324.2);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("#000000").ss(25,1,1).p("AhkEIIDJoP");
	this.shape_321.setTransform(224.3,323.6);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("#000000").ss(25,1,1).p("AhnEOIDOob");
	this.shape_322.setTransform(224.6,322.9);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f().s("#000000").ss(25,1,1).p("AhpEVIDToo");
	this.shape_323.setTransform(224.8,322.3);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("#000000").ss(25,1,1).p("AhrEbIDXo1");
	this.shape_324.setTransform(225,321.7);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f().s("#000000").ss(25,1,1).p("AhuEhIDdpB");
	this.shape_325.setTransform(225.3,321.1);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#000000").ss(25,1,1).p("AhwEnIDhpN");
	this.shape_326.setTransform(225.5,320.4);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f().s("#000000").ss(25,1,1).p("AhyEuIDlpa");
	this.shape_327.setTransform(225.7,319.8);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#000000").ss(25,1,1).p("Ah1E0IDrpn");
	this.shape_328.setTransform(226,319.2);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f().s("#000000").ss(25,1,1).p("Ah3E6IDvpz");
	this.shape_329.setTransform(226.2,318.6);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#000000").ss(25,1,1).p("Ah6FAID1p/");
	this.shape_330.setTransform(226.5,318);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("#000000").ss(25,1,1).p("Ah8FGID5qL");
	this.shape_331.setTransform(226.7,317.3);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#000000").ss(25,1,1).p("Ah+FNID9qZ");
	this.shape_332.setTransform(226.9,316.7);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("#000000").ss(25,1,1).p("AiBFTIEDql");
	this.shape_333.setTransform(227.2,316.1);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("#000000").ss(25,1,1).p("AiDFZIEHqx");
	this.shape_334.setTransform(227.4,315.5);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("#000000").ss(25,1,1).p("AiFFfIEMq9");
	this.shape_335.setTransform(227.7,314.8);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("#000000").ss(25,1,1).p("AiIFmIERrL");
	this.shape_336.setTransform(227.9,314.2);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("#000000").ss(25,1,1).p("AiKFsIEVrX");
	this.shape_337.setTransform(228.1,313.6);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#000000").ss(25,1,1).p("AiNFyIEbrj");
	this.shape_338.setTransform(228.4,313);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f().s("#000000").ss(25,1,1).p("AiPF4IEfrv");
	this.shape_339.setTransform(228.6,312.4);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#000000").ss(25,1,1).p("AiRF+IEjr7");
	this.shape_340.setTransform(228.8,311.7);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("#000000").ss(25,1,1).p("AiUGEIEpsI");
	this.shape_341.setTransform(229.1,311.1);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#000000").ss(25,1,1).p("AiWGLIEtsV");
	this.shape_342.setTransform(229.3,310.5);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f().s("#000000").ss(25,1,1).p("AiYGRIEysh");
	this.shape_343.setTransform(229.6,309.9);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#000000").ss(25,1,1).p("AibGXIE3st");
	this.shape_344.setTransform(229.8,309.2);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f().s("#000000").ss(25,1,1).p("AidGdIE7s6");
	this.shape_345.setTransform(230,308.6);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#000000").ss(25,1,1).p("AigGkIFBtH");
	this.shape_346.setTransform(230.3,308);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f().s("#000000").ss(25,1,1).p("AiiGqIFFtT");
	this.shape_347.setTransform(230.5,307.4);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#000000").ss(25,1,1).p("AilGwIFLtf");
	this.shape_348.setTransform(230.8,306.8);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f().s("#000000").ss(25,1,1).p("AinG2IFPtr");
	this.shape_349.setTransform(231,306.1);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#000000").ss(25,1,1).p("AipG8IFTt3");
	this.shape_350.setTransform(231.2,305.5);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f().s("#000000").ss(25,1,1).p("AisHDIFZuF");
	this.shape_351.setTransform(231.5,304.9);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#000000").ss(25,1,1).p("AiuHJIFduR");
	this.shape_352.setTransform(231.7,304.3);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f().s("#000000").ss(25,1,1).p("AiwHPIFhud");
	this.shape_353.setTransform(231.9,303.6);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("#000000").ss(25,1,1).p("AizHVIFnup");
	this.shape_354.setTransform(232.2,303);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f().s("#000000").ss(25,1,1).p("Ai1HcIFru3");
	this.shape_355.setTransform(232.4,302.4);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("#000000").ss(25,1,1).p("Ai4HiIFwvD");
	this.shape_356.setTransform(232.7,301.8);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f().s("#000000").ss(25,1,1).p("Ai6HoIF1vP");
	this.shape_357.setTransform(232.9,301.2);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("#000000").ss(25,1,1).p("Ai8HuIF5vb");
	this.shape_358.setTransform(233.1,300.5);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f().s("#000000").ss(25,1,1).p("Ai/H1IF/vo");
	this.shape_359.setTransform(233.4,299.9);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#000000").ss(25,1,1).p("AjBH7IGDv1");
	this.shape_360.setTransform(233.6,299.3);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f().s("#000000").ss(25,1,1).p("AjEIBIGJwB");
	this.shape_361.setTransform(233.9,298.7);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("#000000").ss(25,1,1).p("AjGIHIGNwN");
	this.shape_362.setTransform(234.1,298);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f().s("#000000").ss(25,1,1).p("AjIIOIGRwa");
	this.shape_363.setTransform(234.3,297.4);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("#000000").ss(25,1,1).p("AjKIUIGWwn");
	this.shape_364.setTransform(234.6,296.8);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f().s("#000000").ss(25,1,1).p("AjNIaIGbwz");
	this.shape_365.setTransform(234.8,296.2);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("#000000").ss(25,1,1).p("AjPIgIGfw/");
	this.shape_366.setTransform(235,295.5);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f().s("#000000").ss(25,1,1).p("AjSImIGlxL");
	this.shape_367.setTransform(235.3,294.9);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("#000000").ss(25,1,1).p("AjUIsIGpxY");
	this.shape_368.setTransform(235.5,294.3);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f().s("#000000").ss(25,1,1).p("AjXIzIGvxl");
	this.shape_369.setTransform(235.8,293.7);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("#000000").ss(25,1,1).p("AjZI5IGzxx");
	this.shape_370.setTransform(236,293.1);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f().s("#000000").ss(25,1,1).p("AjbI/IG3x9");
	this.shape_371.setTransform(236.2,292.4);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f().s("#000000").ss(25,1,1).p("AjeJFIG9yK");
	this.shape_372.setTransform(236.5,291.8);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f().s("#000000").ss(25,1,1).p("AjgJMIHByX");
	this.shape_373.setTransform(236.7,291.2);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("#000000").ss(25,1,1).p("AjjJSIHHyj");
	this.shape_374.setTransform(237,290.6);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f().s("#000000").ss(25,1,1).p("AjlJYIHLyv");
	this.shape_375.setTransform(237.2,289.9);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("#000000").ss(25,1,1).p("AjnJeIHPy8");
	this.shape_376.setTransform(237.4,289.3);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f().s("#000000").ss(25,1,1).p("AjqJlIHVzJ");
	this.shape_377.setTransform(237.7,288.7);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("#000000").ss(25,1,1).p("AjsJrIHZzV");
	this.shape_378.setTransform(237.9,288.1);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f().s("#000000").ss(25,1,1).p("AjuJxIHdzh");
	this.shape_379.setTransform(238.1,287.5);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("#000000").ss(25,1,1).p("AjxJ3IHjzt");
	this.shape_380.setTransform(238.4,286.8);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f().s("#000000").ss(25,1,1).p("AjzJ+IHnz7");
	this.shape_381.setTransform(238.6,286.2);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("#000000").ss(25,1,1).p("Aj2KEIHt0H");
	this.shape_382.setTransform(238.9,285.6);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f().s("#000000").ss(25,1,1).p("Aj4KKIHx0T");
	this.shape_383.setTransform(239.1,285);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("#000000").ss(25,1,1).p("Aj6KQIH10f");
	this.shape_384.setTransform(239.3,284.3);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f().s("#000000").ss(25,1,1).p("Aj8KXIH50t");
	this.shape_385.setTransform(239.6,283.7);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("#000000").ss(25,1,1).p("Aj/KdIH/05");
	this.shape_386.setTransform(239.8,283.1);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f().s("#000000").ss(25,1,1).p("AkBKjIID1F");
	this.shape_387.setTransform(240.1,282.5);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("#000000").ss(25,1,1).p("AkEKpIIJ1R");
	this.shape_388.setTransform(240.3,281.9);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f().s("#000000").ss(25,1,1).p("AkGKvIIN1d");
	this.shape_389.setTransform(240.5,281.2);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("#000000").ss(25,1,1).p("AkJK1IIT1q");
	this.shape_390.setTransform(240.8,280.6);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f().s("#000000").ss(25,1,1).p("AkLK8IIX13");
	this.shape_391.setTransform(241,280);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f().s("#000000").ss(25,1,1).p("AkNLCIIb2D");
	this.shape_392.setTransform(241.2,279.4);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f().s("#000000").ss(25,1,1).p("AkQLIIIh2P");
	this.shape_393.setTransform(241.5,278.7);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f().s("#000000").ss(25,1,1).p("AkSLOIIl2c");
	this.shape_394.setTransform(241.7,278.1);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f().s("#000000").ss(25,1,1).p("AkVLVIIr2p");
	this.shape_395.setTransform(242,277.5);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("#000000").ss(25,1,1).p("AkXLbIIv21");
	this.shape_396.setTransform(242.2,276.9);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f().s("#000000").ss(25,1,1).p("AkZLhIIz3B");
	this.shape_397.setTransform(242.4,276.3);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("#000000").ss(25,1,1).p("AkcLnII53N");
	this.shape_398.setTransform(242.7,275.6);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f().s("#000000").ss(25,1,1).p("AkeLtII93Z");
	this.shape_399.setTransform(242.9,275);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f().s("#000000").ss(25,1,1).p("AkgL0IJB3n");
	this.shape_400.setTransform(243.1,274.4);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f().s("#000000").ss(25,1,1).p("AEkr5IpHXz");
	this.shape_401.setTransform(243.4,273.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_283}]},131).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).wait(376));

	// Layer 1
	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f().s("#000000").ss(25,1,1).p("AgBgFIADAL");
	this.shape_402.setTransform(148.6,195.6);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f().s("#000000").ss(25,1,1).p("AgEgMIAKAZ");
	this.shape_403.setTransform(148.9,196.3);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f().s("#000000").ss(25,1,1).p("AgHgSIAQAl");
	this.shape_404.setTransform(149.2,197);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f().s("#000000").ss(25,1,1).p("AgKgZIAVA0");
	this.shape_405.setTransform(149.5,197.7);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f().s("#000000").ss(25,1,1).p("AgNggIAbBB");
	this.shape_406.setTransform(149.8,198.4);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f().s("#000000").ss(25,1,1).p("AgQgoIAhBQ");
	this.shape_407.setTransform(150.1,199.1);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f().s("#000000").ss(25,1,1).p("AgTguIAnBd");
	this.shape_408.setTransform(150.4,199.8);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f().s("#000000").ss(25,1,1).p("AgWg1IAtBr");
	this.shape_409.setTransform(150.7,200.5);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f().s("#000000").ss(25,1,1).p("AgZg8IAzB5");
	this.shape_410.setTransform(151,201.2);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f().s("#000000").ss(25,1,1).p("AgchDIA5CH");
	this.shape_411.setTransform(151.3,201.9);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f().s("#000000").ss(25,1,1).p("AgfhKIA/CV");
	this.shape_412.setTransform(151.6,202.6);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f().s("#000000").ss(25,1,1).p("AgihRIBFCj");
	this.shape_413.setTransform(151.9,203.3);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f().s("#000000").ss(25,1,1).p("AglhYIBLCx");
	this.shape_414.setTransform(152.1,203.9);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f().s("#000000").ss(25,1,1).p("AgohfIBRC/");
	this.shape_415.setTransform(152.4,204.6);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("#000000").ss(25,1,1).p("AgrhmIBXDN");
	this.shape_416.setTransform(152.7,205.3);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f().s("#000000").ss(25,1,1).p("AguhtIBdDb");
	this.shape_417.setTransform(153,206);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f().s("#000000").ss(25,1,1).p("AgxhzIBiDo");
	this.shape_418.setTransform(153.3,206.7);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f().s("#000000").ss(25,1,1).p("Ag0h6IBpD1");
	this.shape_419.setTransform(153.6,207.4);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f().s("#000000").ss(25,1,1).p("Ag2iCIBuEE");
	this.shape_420.setTransform(153.9,208.1);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f().s("#000000").ss(25,1,1).p("Ag5iIIB0ER");
	this.shape_421.setTransform(154.2,208.8);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f().s("#000000").ss(25,1,1).p("Ag8iPIB5Ef");
	this.shape_422.setTransform(154.5,209.5);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f().s("#000000").ss(25,1,1).p("Ag/iWIB/Et");
	this.shape_423.setTransform(154.8,210.2);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f().s("#000000").ss(25,1,1).p("AhCidICFE7");
	this.shape_424.setTransform(155.1,210.9);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f().s("#000000").ss(25,1,1).p("AhFikICLFJ");
	this.shape_425.setTransform(155.4,211.6);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f().s("#000000").ss(25,1,1).p("AhIirICRFX");
	this.shape_426.setTransform(155.7,212.3);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f().s("#000000").ss(25,1,1).p("AhLiyICXFl");
	this.shape_427.setTransform(156,213);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f().s("#000000").ss(25,1,1).p("AhOi5ICdFz");
	this.shape_428.setTransform(156.3,213.6);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f().s("#000000").ss(25,1,1).p("AhRjAICjGB");
	this.shape_429.setTransform(156.6,214.3);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f().s("#000000").ss(25,1,1).p("AhUjHICpGP");
	this.shape_430.setTransform(156.9,215);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f().s("#000000").ss(25,1,1).p("AhXjNICvGc");
	this.shape_431.setTransform(157.1,215.7);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f().s("#000000").ss(25,1,1).p("AhajUIC1Gp");
	this.shape_432.setTransform(157.4,216.4);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f().s("#000000").ss(25,1,1).p("AhdjcIC7G4");
	this.shape_433.setTransform(157.7,217.1);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f().s("#000000").ss(25,1,1).p("AhgjiIDBHF");
	this.shape_434.setTransform(158,217.8);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f().s("#000000").ss(25,1,1).p("AhjjpIDHHT");
	this.shape_435.setTransform(158.3,218.5);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f().s("#000000").ss(25,1,1).p("AhmjwIDNHh");
	this.shape_436.setTransform(158.6,219.2);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f().s("#000000").ss(25,1,1).p("Ahoj3IDSHv");
	this.shape_437.setTransform(158.9,219.9);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f().s("#000000").ss(25,1,1).p("Ahrj+IDYH9");
	this.shape_438.setTransform(159.2,220.6);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f().s("#000000").ss(25,1,1).p("AhvkFIDfIL");
	this.shape_439.setTransform(159.5,221.3);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f().s("#000000").ss(25,1,1).p("AhxkMIDjIZ");
	this.shape_440.setTransform(159.8,222);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f().s("#000000").ss(25,1,1).p("Ah0kTIDpIn");
	this.shape_441.setTransform(160.1,222.6);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f().s("#000000").ss(25,1,1).p("Ah3kaIDvI1");
	this.shape_442.setTransform(160.4,223.3);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f().s("#000000").ss(25,1,1).p("Ah6khID1JD");
	this.shape_443.setTransform(160.7,224);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f().s("#000000").ss(25,1,1).p("Ah9koID7JQ");
	this.shape_444.setTransform(161,224.7);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f().s("#000000").ss(25,1,1).p("AiAkuIEBJd");
	this.shape_445.setTransform(161.3,225.4);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f().s("#000000").ss(25,1,1).p("AiDk1IEHJr");
	this.shape_446.setTransform(161.6,226.1);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f().s("#000000").ss(25,1,1).p("AiGk9IENJ7");
	this.shape_447.setTransform(161.9,226.8);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f().s("#000000").ss(25,1,1).p("AiJlDIETKH");
	this.shape_448.setTransform(162.2,227.5);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f().s("#000000").ss(25,1,1).p("AiMlKIEZKV");
	this.shape_449.setTransform(162.4,228.2);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f().s("#000000").ss(25,1,1).p("AiPlRIEfKj");
	this.shape_450.setTransform(162.7,228.9);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f().s("#000000").ss(25,1,1).p("AiSlYIElKx");
	this.shape_451.setTransform(163,229.6);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f().s("#000000").ss(25,1,1).p("AiVlfIErK/");
	this.shape_452.setTransform(163.3,230.3);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f().s("#000000").ss(25,1,1).p("AiYlmIExLN");
	this.shape_453.setTransform(163.6,231);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f().s("#000000").ss(25,1,1).p("AialtIE2Lb");
	this.shape_454.setTransform(163.9,231.7);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f().s("#000000").ss(25,1,1).p("Aidl0IE8Lp");
	this.shape_455.setTransform(164.2,232.3);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f().s("#000000").ss(25,1,1).p("Aihl7IFDL3");
	this.shape_456.setTransform(164.5,233);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f().s("#000000").ss(25,1,1).p("AikmCIFIMF");
	this.shape_457.setTransform(164.8,233.7);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f().s("#000000").ss(25,1,1).p("AimmIIFNMR");
	this.shape_458.setTransform(165.1,234.4);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f().s("#000000").ss(25,1,1).p("AipmPIFTMf");
	this.shape_459.setTransform(165.4,235.1);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f().s("#000000").ss(25,1,1).p("AismXIFZMv");
	this.shape_460.setTransform(165.7,235.8);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f().s("#000000").ss(25,1,1).p("AivmdIFfM7");
	this.shape_461.setTransform(166,236.5);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f().s("#000000").ss(25,1,1).p("AiymkIFlNJ");
	this.shape_462.setTransform(166.3,237.2);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f().s("#000000").ss(25,1,1).p("Ai1mrIFrNX");
	this.shape_463.setTransform(166.6,237.9);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f().s("#000000").ss(25,1,1).p("Ai4myIFxNl");
	this.shape_464.setTransform(166.9,238.6);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f().s("#000000").ss(25,1,1).p("Ai7m5IF3Nz");
	this.shape_465.setTransform(167.2,239.3);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f().s("#000000").ss(25,1,1).p("Ai+nAIF9OB");
	this.shape_466.setTransform(167.5,240);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f().s("#000000").ss(25,1,1).p("AjBnHIGDOP");
	this.shape_467.setTransform(167.7,240.7);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f().s("#000000").ss(25,1,1).p("AjEnOIGJOd");
	this.shape_468.setTransform(168,241.3);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f().s("#000000").ss(25,1,1).p("AjHnVIGPOr");
	this.shape_469.setTransform(168.3,242);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f().s("#000000").ss(25,1,1).p("AjKncIGVO5");
	this.shape_470.setTransform(168.6,242.7);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f().s("#000000").ss(25,1,1).p("AjMnjIGaPH");
	this.shape_471.setTransform(168.9,243.4);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f().s("#000000").ss(25,1,1).p("AjPnpIGgPT");
	this.shape_472.setTransform(169.2,244.1);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f().s("#000000").ss(25,1,1).p("AjTnxIGnPj");
	this.shape_473.setTransform(169.5,244.8);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f().s("#000000").ss(25,1,1).p("AjWn3IGsPv");
	this.shape_474.setTransform(169.8,245.5);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f().s("#000000").ss(25,1,1).p("AjZn+IGzP9");
	this.shape_475.setTransform(170.1,246.2);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f().s("#000000").ss(25,1,1).p("AjboFIG3QL");
	this.shape_476.setTransform(170.4,246.9);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f().s("#000000").ss(25,1,1).p("AjeoMIG9QZ");
	this.shape_477.setTransform(170.7,247.6);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f().s("#000000").ss(25,1,1).p("AjhoTIHDQn");
	this.shape_478.setTransform(171,248.3);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f().s("#000000").ss(25,1,1).p("AjkoaIHJQ1");
	this.shape_479.setTransform(171.3,249);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f().s("#000000").ss(25,1,1).p("AjnohIHPRD");
	this.shape_480.setTransform(171.6,249.7);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f().s("#000000").ss(25,1,1).p("AjqooIHVRR");
	this.shape_481.setTransform(171.9,250.4);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f().s("#000000").ss(25,1,1).p("AjtovIHbRf");
	this.shape_482.setTransform(172.2,251);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f().s("#000000").ss(25,1,1).p("Ajwo2IHhRt");
	this.shape_483.setTransform(172.5,251.7);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f().s("#000000").ss(25,1,1).p("Ajzo9IHnR7");
	this.shape_484.setTransform(172.8,252.4);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f().s("#000000").ss(25,1,1).p("Aj2pDIHtSH");
	this.shape_485.setTransform(173,253.1);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f().s("#000000").ss(25,1,1).p("Aj5pLIHzSX");
	this.shape_486.setTransform(173.3,253.8);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f().s("#000000").ss(25,1,1).p("Aj8pRIH5Sj");
	this.shape_487.setTransform(173.6,254.5);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f().s("#000000").ss(25,1,1).p("Aj/pYIH/Sx");
	this.shape_488.setTransform(173.9,255.2);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f().s("#000000").ss(25,1,1).p("AkBpfIIES/");
	this.shape_489.setTransform(174.2,255.9);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f().s("#000000").ss(25,1,1).p("AkFpmIILTN");
	this.shape_490.setTransform(174.5,256.6);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f().s("#000000").ss(25,1,1).p("AkIptIIQTb");
	this.shape_491.setTransform(174.8,257.3);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f().s("#000000").ss(25,1,1).p("AkLp0IIXTp");
	this.shape_492.setTransform(175.1,258);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f().s("#000000").ss(25,1,1).p("AkNp7IIcT3");
	this.shape_493.setTransform(175.4,258.7);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f().s("#000000").ss(25,1,1).p("AkQqCIIhUF");
	this.shape_494.setTransform(175.7,259.4);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f().s("#000000").ss(25,1,1).p("AkTqJIInUT");
	this.shape_495.setTransform(176,260);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f().s("#000000").ss(25,1,1).p("AkWqQIItUh");
	this.shape_496.setTransform(176.3,260.7);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f().s("#000000").ss(25,1,1).p("AkZqXIIzUv");
	this.shape_497.setTransform(176.6,261.4);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f().s("#000000").ss(25,1,1).p("AkcqeII5U8");
	this.shape_498.setTransform(176.9,262.1);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f().s("#000000").ss(25,1,1).p("AkfqlII/VL");
	this.shape_499.setTransform(177.2,262.8);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f().s("#000000").ss(25,1,1).p("AkiqrIJFVX");
	this.shape_500.setTransform(177.5,263.5);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f().s("#000000").ss(25,1,1).p("AklqzIJLVm");
	this.shape_501.setTransform(177.8,264.2);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f().s("#000000").ss(25,1,1).p("Akoq5IJRVz");
	this.shape_502.setTransform(178,264.9);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f().s("#000000").ss(25,1,1).p("AkrrAIJXWB");
	this.shape_503.setTransform(178.3,265.6);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f().s("#000000").ss(25,1,1).p("AkurHIJdWP");
	this.shape_504.setTransform(178.6,266.3);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f().s("#000000").ss(25,1,1).p("AkxrOIJjWd");
	this.shape_505.setTransform(178.9,267);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f().s("#000000").ss(25,1,1).p("Ak0rVIJpWr");
	this.shape_506.setTransform(179.2,267.7);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f().s("#000000").ss(25,1,1).p("Ak3rcIJvW5");
	this.shape_507.setTransform(179.5,268.4);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f().s("#000000").ss(25,1,1).p("Ak6rjIJ0XH");
	this.shape_508.setTransform(179.8,269);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f().s("#000000").ss(25,1,1).p("Ak9rqIJ7XV");
	this.shape_509.setTransform(180.1,269.7);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f().s("#000000").ss(25,1,1).p("Ak/rxIKAXj");
	this.shape_510.setTransform(180.4,270.4);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f().s("#000000").ss(25,1,1).p("AlCr4IKFXx");
	this.shape_511.setTransform(180.7,271.1);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f().s("#000000").ss(25,1,1).p("AlFr/IKLX/");
	this.shape_512.setTransform(181,271.8);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f().s("#000000").ss(25,1,1).p("AlIsFIKRYL");
	this.shape_513.setTransform(181.3,272.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_402}]},9).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_408}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_412}]},1).to({state:[{t:this.shape_413}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_415}]},1).to({state:[{t:this.shape_416}]},1).to({state:[{t:this.shape_417}]},1).to({state:[{t:this.shape_418}]},1).to({state:[{t:this.shape_419}]},1).to({state:[{t:this.shape_420}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_422}]},1).to({state:[{t:this.shape_423}]},1).to({state:[{t:this.shape_424}]},1).to({state:[{t:this.shape_425}]},1).to({state:[{t:this.shape_426}]},1).to({state:[{t:this.shape_427}]},1).to({state:[{t:this.shape_428}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_430}]},1).to({state:[{t:this.shape_431}]},1).to({state:[{t:this.shape_432}]},1).to({state:[{t:this.shape_433}]},1).to({state:[{t:this.shape_434}]},1).to({state:[{t:this.shape_435}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_437}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_439}]},1).to({state:[{t:this.shape_440}]},1).to({state:[{t:this.shape_441}]},1).to({state:[{t:this.shape_442}]},1).to({state:[{t:this.shape_443}]},1).to({state:[{t:this.shape_444}]},1).to({state:[{t:this.shape_445}]},1).to({state:[{t:this.shape_446}]},1).to({state:[{t:this.shape_447}]},1).to({state:[{t:this.shape_448}]},1).to({state:[{t:this.shape_449}]},1).to({state:[{t:this.shape_450}]},1).to({state:[{t:this.shape_451}]},1).to({state:[{t:this.shape_452}]},1).to({state:[{t:this.shape_453}]},1).to({state:[{t:this.shape_454}]},1).to({state:[{t:this.shape_455}]},1).to({state:[{t:this.shape_456}]},1).to({state:[{t:this.shape_457}]},1).to({state:[{t:this.shape_458}]},1).to({state:[{t:this.shape_459}]},1).to({state:[{t:this.shape_460}]},1).to({state:[{t:this.shape_461}]},1).to({state:[{t:this.shape_462}]},1).to({state:[{t:this.shape_463}]},1).to({state:[{t:this.shape_464}]},1).to({state:[{t:this.shape_465}]},1).to({state:[{t:this.shape_466}]},1).to({state:[{t:this.shape_467}]},1).to({state:[{t:this.shape_468}]},1).to({state:[{t:this.shape_469}]},1).to({state:[{t:this.shape_470}]},1).to({state:[{t:this.shape_471}]},1).to({state:[{t:this.shape_472}]},1).to({state:[{t:this.shape_473}]},1).to({state:[{t:this.shape_474}]},1).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_476}]},1).to({state:[{t:this.shape_477}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_479}]},1).to({state:[{t:this.shape_480}]},1).to({state:[{t:this.shape_481}]},1).to({state:[{t:this.shape_482}]},1).to({state:[{t:this.shape_483}]},1).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_485}]},1).to({state:[{t:this.shape_486}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_488}]},1).to({state:[{t:this.shape_489}]},1).to({state:[{t:this.shape_490}]},1).to({state:[{t:this.shape_491}]},1).to({state:[{t:this.shape_492}]},1).to({state:[{t:this.shape_493}]},1).to({state:[{t:this.shape_494}]},1).to({state:[{t:this.shape_495}]},1).to({state:[{t:this.shape_496}]},1).to({state:[{t:this.shape_497}]},1).to({state:[{t:this.shape_498}]},1).to({state:[{t:this.shape_499}]},1).to({state:[{t:this.shape_500}]},1).to({state:[{t:this.shape_501}]},1).to({state:[{t:this.shape_502}]},1).to({state:[{t:this.shape_503}]},1).to({state:[{t:this.shape_504}]},1).to({state:[{t:this.shape_505}]},1).to({state:[{t:this.shape_506}]},1).to({state:[{t:this.shape_507}]},1).to({state:[{t:this.shape_508}]},1).to({state:[{t:this.shape_509}]},1).to({state:[{t:this.shape_510}]},1).to({state:[{t:this.shape_511}]},1).to({state:[{t:this.shape_512}]},1).to({state:[{t:this.shape_513}]},1).wait(505));

	// Base
	this.instance_5 = new lib.Symbol1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(275,275);
	this.instance_5.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(625));

	// Background
	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_514.setTransform(275,275,3.373,2.543);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_515.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_515},{t:this.shape_514}]}).wait(625));

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