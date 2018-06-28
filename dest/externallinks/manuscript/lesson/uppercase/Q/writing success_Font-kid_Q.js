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
	this.shape.graphics.f("#FFFFFF").s().p("AUIctIklkfQnIEeobABQsEgBoiohQofoiAAsBQAAsGIhoiQIlogMCABQMEgBIgIgQIfIiAAMGQABMnpOIoICzCfQCCB+AABlQABA9gxAxQg1A5hLAAQhBAAg1gzgAwxxLQm+G/AAJ0QAAJ0G8G+QG/G+J0AAQGNAAFbjDIizibQiAiBAAhhQAAg9A2g2QA0g2BHAAQBEAAAyA0IEqEiQHqnEAAqZQAAp3m8m+Qm8m8p1AAQp1AAm/G+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.2,-188.8,372.5,377.7);


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

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AALAAIgVAA");
	this.shape.setTransform(-1.6,-20.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AgQAAIAhAA");
	this.shape_1.setTransform(-1,-20.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AgWAAIAtAA");
	this.shape_2.setTransform(-0.4,-20.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AgcAAIA5AA");
	this.shape_3.setTransform(0.2,-20.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AghAAIBDAA");
	this.shape_4.setTransform(0.7,-20.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AgnAAIBPAA");
	this.shape_5.setTransform(1.3,-20.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AgtAAIBbAA");
	this.shape_6.setTransform(1.9,-20.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AgzAAIBnAA");
	this.shape_7.setTransform(2.5,-20.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("Ag5AAIBzAA");
	this.shape_8.setTransform(3.1,-20.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("Ag/AAIB/AA");
	this.shape_9.setTransform(3.7,-20.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AhEAAICJAA");
	this.shape_10.setTransform(4.2,-20.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AhKAAICVAA");
	this.shape_11.setTransform(4.8,-20.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AhQAAIChAA");
	this.shape_12.setTransform(5.4,-20.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AhWAAICtAA");
	this.shape_13.setTransform(6,-20.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AhcAAIC5AA");
	this.shape_14.setTransform(6.6,-20.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AhiAAIDFAA");
	this.shape_15.setTransform(7.2,-20.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AhnAAIDPAA");
	this.shape_16.setTransform(7.7,-20.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AhtAAIDbAA");
	this.shape_17.setTransform(8.3,-20.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AhzAAIDnAA");
	this.shape_18.setTransform(8.9,-20.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("Ah5AAIDzAA");
	this.shape_19.setTransform(9.5,-20.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("Ah/AAID/AA");
	this.shape_20.setTransform(10.1,-20.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AiFAAIELAA");
	this.shape_21.setTransform(10.7,-20.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AiKAAIEVAA");
	this.shape_22.setTransform(11.2,-20.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AiQAAIEhAA");
	this.shape_23.setTransform(11.8,-20.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AiWAAIEtAA");
	this.shape_24.setTransform(12.4,-20.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AicAAIE5AA");
	this.shape_25.setTransform(13,-20.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AiiAAIFFAA");
	this.shape_26.setTransform(13.6,-20.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AioAAIFRAA");
	this.shape_27.setTransform(14.2,-20.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AitAAIFbAA");
	this.shape_28.setTransform(14.7,-20.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AizAAIFnAA");
	this.shape_29.setTransform(15.3,-20.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("Ai5AAIFzAA");
	this.shape_30.setTransform(15.9,-20.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("Ai/AAIF/AA");
	this.shape_31.setTransform(16.5,-20.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AjFAAIGLAA");
	this.shape_32.setTransform(17.1,-20.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AjKAAIGWAA");
	this.shape_33.setTransform(17.7,-20.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AjQAAIGhAA");
	this.shape_34.setTransform(18.2,-20.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AjWAAIGtAA");
	this.shape_35.setTransform(18.8,-20.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AjcAAIG5AA");
	this.shape_36.setTransform(19.4,-20.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AjiAAIHFAA");
	this.shape_37.setTransform(20,-20.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AjoAAIHRAA");
	this.shape_38.setTransform(20.6,-20.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AjtAAIHcAA");
	this.shape_39.setTransform(21.2,-20.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AjzAAIHnAA");
	this.shape_40.setTransform(21.7,-20.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("Aj5AAIHzAA");
	this.shape_41.setTransform(22.3,-20.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("Aj/AAIH/AA");
	this.shape_42.setTransform(22.9,-20.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AkFAAIILAA");
	this.shape_43.setTransform(23.5,-20.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AkLAAIIXAA");
	this.shape_44.setTransform(24.1,-20.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AkRAAIIjAA");
	this.shape_45.setTransform(24.7,-20.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AkWAAIItAA");
	this.shape_46.setTransform(25.2,-20.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AkcAAII5AA");
	this.shape_47.setTransform(25.8,-20.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AkiAAIJFAA");
	this.shape_48.setTransform(26.4,-20.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AkoAAIJRAA");
	this.shape_49.setTransform(27,-20.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AkuAAIJdAA");
	this.shape_50.setTransform(27.6,-20.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("Ak0AAIJpAA");
	this.shape_51.setTransform(28.2,-20.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("Ak5AAIJzAA");
	this.shape_52.setTransform(28.7,-20.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("Ak/AAIJ/AA");
	this.shape_53.setTransform(29.3,-20.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AlFAAIKLAA");
	this.shape_54.setTransform(29.9,-20.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AlLAAIKXAA");
	this.shape_55.setTransform(30.5,-20.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AlRAAIKjAA");
	this.shape_56.setTransform(31.1,-20.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AlXAAIKvAA");
	this.shape_57.setTransform(31.7,-20.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AlcAAIK5AA");
	this.shape_58.setTransform(32.2,-20.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AliAAILFAA");
	this.shape_59.setTransform(32.8,-20.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(5,1,1).p("AloAAILRAA");
	this.shape_60.setTransform(33.4,-20.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(5,1,1).p("AluAAILdAA");
	this.shape_61.setTransform(34,-20.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(5,1,1).p("Al0AAILpAA");
	this.shape_62.setTransform(34.6,-20.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(5,1,1).p("Al6AAIL1AA");
	this.shape_63.setTransform(35.2,-20.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(5,1,1).p("Al/AAIL/AA");
	this.shape_64.setTransform(35.7,-20.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(5,1,1).p("AmFAAIMLAA");
	this.shape_65.setTransform(36.3,-20.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(5,1,1).p("AmLAAIMXAA");
	this.shape_66.setTransform(36.9,-20.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(5,1,1).p("AmRAAIMjAA");
	this.shape_67.setTransform(37.5,-20.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(5,1,1).p("AmXAAIMvAA");
	this.shape_68.setTransform(38.1,-20.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(5,1,1).p("AmdAAIM7AA");
	this.shape_69.setTransform(38.7,-20.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(5,1,1).p("AmiAAINFAA");
	this.shape_70.setTransform(39.2,-20.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(5,1,1).p("AmoAAINRAA");
	this.shape_71.setTransform(39.8,-20.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(5,1,1).p("AmuAAINdAA");
	this.shape_72.setTransform(40.4,-20.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(5,1,1).p("Am0AAINpAA");
	this.shape_73.setTransform(41,-20.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(5,1,1).p("Am6AAIN1AA");
	this.shape_74.setTransform(41.6,-20.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(5,1,1).p("AnAAAIOBAA");
	this.shape_75.setTransform(42.2,-20.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(5,1,1).p("AnFAAIOLAA");
	this.shape_76.setTransform(42.7,-20.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(5,1,1).p("AnLAAIOXAA");
	this.shape_77.setTransform(43.3,-20.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(5,1,1).p("AnRAAIOjAA");
	this.shape_78.setTransform(43.9,-20.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(5,1,1).p("AnXAAIOvAA");
	this.shape_79.setTransform(44.5,-20.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(5,1,1).p("AndAAIO7AA");
	this.shape_80.setTransform(45.1,-20.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(5,1,1).p("AnjAAIPHAA");
	this.shape_81.setTransform(45.7,-20.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(5,1,1).p("AnoAAIPRAA");
	this.shape_82.setTransform(46.2,-20.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(5,1,1).p("AnuAAIPdAA");
	this.shape_83.setTransform(46.8,-20.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(5,1,1).p("AH1AAIvpAA");
	this.shape_84.setTransform(47.4,-20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).wait(1));

	// Layer 1
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-4,-20.8,1,1,-90,0,0,0.4,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:86.6},84).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.2,-32.9,23.1,24.3);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(93.6,-113.5,1,1,113.8,0,0,0.2,-17.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-59.1,guide:{path:[93.5,-113.5,81,-120,67,-123.9,15.4,-138.4,-30.6,-111,-76.6,-83.6,-90.2,-30.4,-103.8,22.7,-77,70.5,-57.5,105.1,-25.1,122.3]}},179).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgVdAgvMAQ+hCmQNyDhHSMPQHRMQjhNyQjhNzsPHQQoQE6o9AAQkWAAkfhJg");
	var mask_graphics_1 = new cjs.Graphics().p("EgU9Ag9MAP0hC5QN1DSHgMHQHeMHjRN2QjSN3sGHeQobFOpSAAQkDAAkOhAg");
	var mask_graphics_2 = new cjs.Graphics().p("EgUXAhKMAOohDKQN5DCHtL+QHsMAjCN5QjCN6r+HsQolFipmAAQjyAAj7g3g");
	var mask_graphics_3 = new cjs.Graphics().p("EgTxAhWMANdhDZQN8CyH6L1QH5L3iyN8QiyN+r1H5QowF2p7AAQjgAAjogug");
	var mask_graphics_4 = new cjs.Graphics().p("EgTLAhhMAMRhDoQN/CjIILsQIGLuiiN/QijOBrsIGQo6GMqQAAQjNAAjWgng");
	var mask_graphics_5 = new cjs.Graphics().p("EgSlAhrMALFhD1QOCCTIVLjQITLliTOCQiTODrjITQpDGiqmAAQi7AAjCggg");
	var mask_graphics_6 = new cjs.Graphics().p("EgR/Ah0MAJ5hEAQOFCDIhLaQIgLaiDOFQiDOFrZIgQpNG4q8AAQioAAivgZg");
	var mask_graphics_7 = new cjs.Graphics().p("EgRYAh8MAIshEKQOHBzIuLQQItLRhzOGQh0OIrPItQpVHOrTAAQiVAAibgTg");
	var mask_graphics_8 = new cjs.Graphics().p("EgQyAiDMAHghETQOJBjI6LGQI6LHhkOJQhjOJrGI5QpdHmrqAAQiCAAiHgOg");
	var mask_graphics_9 = new cjs.Graphics().p("EgQLAiJMAGThEbQOKBUJHK7QJGK9hUOKQhTOLq8JGQpkH+sDAAQhuAAhygKg");
	var mask_graphics_10 = new cjs.Graphics().p("EgPkAiNMAFGhEgQOLBDJTKyQJSKzhDOLQhEOMqxJSQpsIWsbAAQhbAAhcgHg");
	var mask_graphics_11 = new cjs.Graphics().p("EgO+AiRMAD6hElQOMAzJfKnQJeKpg0OMQgzONqnJeQpzIvs0AAQhGAAhIgEg");
	var mask_graphics_12 = new cjs.Graphics().p("EgOXAiUMACthEpQONAkJqKcQJqKdgkONQgjOOqdJqQp4JJtPAAQgxAAgygCg");
	var mask_graphics_13 = new cjs.Graphics().p("EgNwAiWMABfhErQOOATJ2KSQJ1KSgUONQgTOPqRJ1Qp/JjtqAAIg3AAg");
	var mask_graphics_14 = new cjs.Graphics().p("EgNJAiWMAAShErQONADKCKGQKBKIgEONQgEOPqGKAQqDJ+uHAAIgKAAg");
	var mask_graphics_15 = new cjs.Graphics().p("EgNdgiVQONgMKNJ6QKMJ8AMOPQAMONp7KMQp7KNuOAMg");
	var mask_graphics_16 = new cjs.Graphics().p("EgOEgiUQONgcKYJvQKXJxAcOOQAcONpvKXQpwKYuNAcg");
	var mask_graphics_17 = new cjs.Graphics().p("EgOqgiRQONgsKiJjQKhJlAsONQAsONpjKhQpkKjuNAsg");
	var mask_graphics_18 = new cjs.Graphics().p("EgPRgiOQONg7KsJXQKsJZA8OMQA8OLpXKtQpZKtuLA8g");
	var mask_graphics_19 = new cjs.Graphics().p("EgP3giJQOLhMK3JLQK2JNBMOLQBMOKpLK3QpNK4uKBMg");
	var mask_graphics_20 = new cjs.Graphics().p("EgQdgiDQOJhcLBI/QLBJABcOKQBbOIo/LBQpALCuIBcg");
	var mask_graphics_21 = new cjs.Graphics().p("EgREgh9QOIhrLLIyQLLI0BrOIQBsOHozLKQozLMuHBsg");
	var mask_graphics_22 = new cjs.Graphics().p("EgRqgh1QOGh7LUIlQLVIoB7OFQB8OFomLVQonLVuFB8g");
	var mask_graphics_23 = new cjs.Graphics().p("EgSQghsQOEiLLdIZQLeIaCMODQCLODoZLeQoaLfuDCLg");
	var mask_graphics_24 = new cjs.Graphics().p("EgS2ghjQOBibLnIMQLnIOCbOBQCbN/oMLoQoNLouACbg");
	var mask_graphics_25 = new cjs.Graphics().p("EgTcghYQN+irLxH/QLwIBCqN9QCrN9n/LxQoALxt9Crg");
	var mask_graphics_26 = new cjs.Graphics().p("EgUBghMQN6i7L5HyQL6HzC6N7QC6N5nyL5QnyL7t6C6g");
	var mask_graphics_27 = new cjs.Graphics().p("EgUnghAQN3jJMCHkQMCHlDKN3QDJN3nkMBQnlMDt2DKg");
	var mask_graphics_28 = new cjs.Graphics().p("EgVMggyQNzjZMKHWQMKHYDaN0QDZNynXMKQnXMLtzDag");
	var mask_graphics_29 = new cjs.Graphics().p("EgVlggjQNvjpMTHJQMSHKDoNvQDpNvnJMSQnKMTtuDpg");
	var mask_graphics_30 = new cjs.Graphics().p("EgV0ggXQNsj1MZG+QMYG/D1NsQD1Nsm+MYQm/MZtsD1g");
	var mask_graphics_31 = new cjs.Graphics().p("EgWCggLQNokBMfGzQMeG1EBNpQEBNnmzMfQm0MftoEBg");
	var mask_graphics_32 = new cjs.Graphics().p("A2R/+QNlkMMkGoQMlGpENNlQEMNkmoMlQmpMltkENg");
	var mask_graphics_33 = new cjs.Graphics().p("A2f/wQNhkZMqGdQMqGfEZNhQEZNhmeMpQmdMsthEYg");
	var mask_graphics_34 = new cjs.Graphics().p("A2u/hQNeklMvGSQMwGTElNdQEkNdmSMvQmSMxtdElg");
	var mask_graphics_35 = new cjs.Graphics().p("A28/TQNZkwM1GGQM1GIExNaQEwNYmGM1QmIM3tZEwg");
	var mask_graphics_36 = new cjs.Graphics().p("A3K/DQNVk8M6F7QM7F8E8NWQE8NUl8M6Ql8M8tVE8g");
	var mask_graphics_37 = new cjs.Graphics().p("A3Z+zQNRlINAFwQM/FxFINRQFINPlwNAQlxNBtQFIg");
	var mask_graphics_38 = new cjs.Graphics().p("A3n+iQNMlUNFFkQNFFmFTNMQFUNLllNFQllNGtMFTg");
	var mask_graphics_39 = new cjs.Graphics().p("A31+RQNIlfNJFYQNJFbFgNHQFfNGlZNKQlaNKtHFfg");
	var mask_graphics_40 = new cjs.Graphics().p("A4C9/QNClrNOFNQNOFPFrNCQFqNClNNNQlONQtDFqg");
	var mask_graphics_41 = new cjs.Graphics().p("A4Q9tQM9l2NSFBQNTFDF2M+QF2M8lCNSQlCNUs9F2g");
	var mask_graphics_42 = new cjs.Graphics().p("A4e9aQM4mCNXE2QNXE3GBM4QGCM4k2NWQk3NZs4GBg");
	var mask_graphics_43 = new cjs.Graphics().p("A4r9HQMymMNbEpQNbEsGNMzQGNMzkrNZQkqNdszGMg");
	var mask_graphics_44 = new cjs.Graphics().p("A458zQMtmYNfEeQNfEgGYMtQGYMukeNdQkfNhstGYg");
	var mask_graphics_45 = new cjs.Graphics().p("A5G8eQMnmjNjESQNjETGjMoQGjMokSNhQkTNlsoGjg");
	var mask_graphics_46 = new cjs.Graphics().p("A5U8JQMimuNnEGQNmEIGvMhQGuMikHNmQkHNnsiGvg");
	var mask_graphics_47 = new cjs.Graphics().p("A5h70QMcm5NqD6QNqD8G5McQG5Mcj6NpQj7NrscG5g");
	var mask_graphics_48 = new cjs.Graphics().p("A5u7eQMWnENtDvQNuDvHEMWQHEMWjvNsQjvNvsVHEg");
	var mask_graphics_49 = new cjs.Graphics().p("A577HQMQnPNwDiQNxDkHPMPQHPMQjjNvQjjNysPHPg");
	var mask_graphics_50 = new cjs.Graphics().p("A6H6wQMInZN1DWQNzDXHaMJQHZMJjWNyQjXN2sJHZg");
	var mask_graphics_51 = new cjs.Graphics().p("A6U6YQMCnkN4DJQN2DMHkMCQHkMDjLN1QjKN4sCHkg");
	var mask_graphics_52 = new cjs.Graphics().p("A6h6AQL8nvN6C+QN5C/HuL8QHvL7i+N4Qi+N7r8Hvg");
	var mask_graphics_53 = new cjs.Graphics().p("A6t5nQL1n5N8CxQN7CzH5L1QH6L0iyN7QiyN9r1H5g");
	var mask_graphics_54 = new cjs.Graphics().p("A655OQLtoDN/CkQN+CnIDLuQIELuimN9QimN/rtIEg");
	var mask_graphics_55 = new cjs.Graphics().p("A7G40QLnoOOBCZQOACaIOLnQINLmiZN/QiaOCrmIOg");
	var mask_graphics_56 = new cjs.Graphics().p("A7S4aQLgoYODCMQOCCOIXLgQIYLfiNOBQiNOErfIYg");
	var mask_graphics_57 = new cjs.Graphics().p("A7e3/QLYoiOFCAQOECBIiLYQIiLYiBODQiBOGrXIig");
	var mask_graphics_58 = new cjs.Graphics().p("A7p3kQLQosOGB0QOGB1IsLQQIsLQh1OFQh0OHrQIsg");
	var mask_graphics_59 = new cjs.Graphics().p("A713IQLIo2OIBnQOHBpI2LIQI2LJhoOGQhoOJrII2g");
	var mask_graphics_60 = new cjs.Graphics().p("A8B2sQLBo/OJBaQOJBdI/LAQJALBhcOIQhbOKrBI/g");
	var mask_graphics_61 = new cjs.Graphics().p("A8M2PQK5pJOKBOQOKBQJJK5QJJK4hPOJQhPOLq5JJg");
	var mask_graphics_62 = new cjs.Graphics().p("A8Y1yQKxpTOMBCQOKBEJTKwQJSKxhCOKQhDOMqwJSg");
	var mask_graphics_63 = new cjs.Graphics().p("A8j1UQKppcOMA1QOLA3JcKoQJcKpg2OKQg2ONqoJcg");
	var mask_graphics_64 = new cjs.Graphics().p("A8u02QKgplONAoQOMArJlKgQJmKggqOLQgpOOqgJlg");
	var mask_graphics_65 = new cjs.Graphics().p("A850YQKYpuONAcQONAeJuKYQJvKXgdOMQgdOOqYJvg");
	var mask_graphics_66 = new cjs.Graphics().p("A9Ez4QKPp4OOAQQONARJ3KPQJ4KPgROMQgQOPqPJ3g");
	var mask_graphics_67 = new cjs.Graphics().p("A9PzZQKHqAOOADQONAFKAKGQKBKHgFOMQgEOOqGKBg");
	var mask_graphics_68 = new cjs.Graphics().p("A9Zy5QJ9qJOOgJQONgIKJJ+QKKJ9AIOMQAJOPp+KJg");
	var mask_graphics_69 = new cjs.Graphics().p("A9kyYQJ1qSONgWQONgUKSJ1QKSJ0AVOMQAVOOp0KSg");
	var mask_graphics_70 = new cjs.Graphics().p("A9ux3QJrqbONgiQONggKaJrQKbJrAhOMQAiOOprKag");
	var mask_graphics_71 = new cjs.Graphics().p("A94xWQJiqjOMguQOMgtKjJiQKjJiAuOLQAuONpiKjg");
	var mask_graphics_72 = new cjs.Graphics().p("A+Dw0QJZqrOMg7QOLg6KsJZQKrJZA6OKQA7ONpZKrg");
	var mask_graphics_73 = new cjs.Graphics().p("A+NwRQJQq0OLhHQOKhGK0JPQKzJPBHOJQBHOMpPK0g");
	var mask_graphics_74 = new cjs.Graphics().p("A+WvvQJFq7OKhUQOJhTK8JGQK8JGBTOIQBTOLpFK7g");
	var mask_graphics_75 = new cjs.Graphics().p("A+gvLQI8rEOJhgQOIhfLDI8QLEI8BfOHQBgOKo8LDg");
	var mask_graphics_76 = new cjs.Graphics().p("A+quoQIyrLOIhtQOGhrLMIyQLLIyBsOGQBtOIozLLg");
	var mask_graphics_77 = new cjs.Graphics().p("A+zuEQIorTOGh5QOFh4LTIoQLTIpB5OEQB4OHooLTg");
	var mask_graphics_78 = new cjs.Graphics().p("A+8tgQIeraOEiGQODiELbIeQLaIfCFOCQCFOFoeLbg");
	var mask_graphics_79 = new cjs.Graphics().p("A/Gs7QIVriOCiSQOBiQLiIUQLiIUCROBQCSODoULig");
	var mask_graphics_80 = new cjs.Graphics().p("A/OsWQIKrpOAieQN/idLpIKQLpIKCeN+QCeOBoKLqg");
	var mask_graphics_81 = new cjs.Graphics().p("A/XrwQIArwN9irQN9ipLxH/QLwIACqN8QCqN/oALwg");
	var mask_graphics_82 = new cjs.Graphics().p("A/grLQH2r3N7i3QN7i1L3H1QL3H2C2N5QC3N9n2L3g");
	var mask_graphics_83 = new cjs.Graphics().p("A/oqkQHrr+N4jEQN5jBL+HrQL+HrDCN3QDDN5nrL+g");
	var mask_graphics_84 = new cjs.Graphics().p("A/wp+QHgsFN2jPQN1jOMFHgQMFHhDON0QDPN3ngMFg");
	var mask_graphics_85 = new cjs.Graphics().p("A/4pXQHVsLNzjcQNzjaMLHWQMLHVDbNyQDbN0nWMLg");
	var mask_graphics_86 = new cjs.Graphics().p("EggBgIuQHLsSNvjoQNwjnMRHKQMSHLDoNvQDoNwnLMSg");
	var mask_graphics_87 = new cjs.Graphics().p("EggJgIEQG/sZNsj1QNsjzMZG+QMYG/D0NsQD1Nsm/MZg");
	var mask_graphics_88 = new cjs.Graphics().p("EggRgHbQG0seNokCQNokAMfGzQMfG0EBNoQEBNomzMfg");
	var mask_graphics_89 = new cjs.Graphics().p("EggYgGwQGnslNlkPQNlkNMlGoQMlGoENNkQEONlmoMlg");
	var mask_graphics_90 = new cjs.Graphics().p("EggggGGQGcsrNhkbQNgkZMsGcQMrGcEaNgQEaNhmcMrg");
	var mask_graphics_91 = new cjs.Graphics().p("EggngFbQGQsxNdknQNckmMxGQQMxGQEnNcQEnNdmRMxg");
	var mask_graphics_92 = new cjs.Graphics().p("EggugEwQGFs3NYkzQNYkzM2GFQM3GEEzNYQEzNYmEM3g");
	var mask_graphics_93 = new cjs.Graphics().p("Egg1gEFQF5s8NTlAQNVk/M7F5QM8F4FANTQE/NUl4M8g");
	var mask_graphics_94 = new cjs.Graphics().p("Egg7gDZQFstBNPlNQNQlLNAFsQNCFtFMNOQFMNPltNCg");
	var mask_graphics_95 = new cjs.Graphics().p("EghBgCtQFgtHNKlZQNLlXNFFgQNHFhFYNJQFYNKlgNHg");
	var mask_graphics_96 = new cjs.Graphics().p("EghHgCBQFUtMNFllQNFljNLFUQNMFUFkNFQFkNFlUNLg");
	var mask_graphics_97 = new cjs.Graphics().p("EghNgBUQFItRM/lxQNBlwNPFIQNRFIFwM/QFxNAlINQg");
	var mask_graphics_98 = new cjs.Graphics().p("EghTgAoQE8tVM6l9QM7l8NUE8QNVE7F9M6QF8M6k7NVg");
	var mask_graphics_99 = new cjs.Graphics().p("EghYAAEQEvtZM1mJQM1mHNZEvQNZEvGIM0QGJM1kvNZg");
	var mask_graphics_100 = new cjs.Graphics().p("EghdAAxQEitdMvmVQMwmTNdEiQNeEjGUMuQGUMvkiNeg");
	var mask_graphics_101 = new cjs.Graphics().p("EghiABeQEWthMpmgQMpmgNiEWQNiEXGfMoQGhMpkWNig");
	var mask_graphics_102 = new cjs.Graphics().p("EghnACMQEKtlMimtQMkmqNlEJQNmEKGsMiQGsMjkKNmg");
	var mask_graphics_103 = new cjs.Graphics().p("EghrAC5QD9toMcm4QMdm3NpD9QNqD9G3McQG4Mdj9Npg");
	var mask_graphics_104 = new cjs.Graphics().p("EghvADnQDwtsMWnEQMXnBNsDwQNuDwHCMVQHDMXjwNtg");
	var mask_graphics_105 = new cjs.Graphics().p("EghzAEVQDjtwMPnOQMRnONwDkQNwDjHOMPQHPMQjkNwg");
	var mask_graphics_106 = new cjs.Graphics().p("Egh3AFDQDXtzMInaQMKnYNzDWQN0DXHZMIQHaMJjXN0g");
	var mask_graphics_107 = new cjs.Graphics().p("Egh6AFyQDJt2MCnmQMCnjN2DJQN4DKHkMBQHlMCjKN3g");
	var mask_graphics_108 = new cjs.Graphics().p("Egh+AGgQC9t5L7nwQL7nvN5C9QN6C9HvL6QHwL7i8N5g");
	var mask_graphics_109 = new cjs.Graphics().p("EgiBAHPQCwt8L0n7QL0n6N7CwQN9CwH6LzQH7LziwN9g");
	var mask_graphics_110 = new cjs.Graphics().p("EgiDAH9QCjt9LroHQLtoFN+CjQN/CjIFLsQIGLsijN/g");
	var mask_graphics_111 = new cjs.Graphics().p("EgiGAIsQCWuALkoRQLloQOBCWQOBCWIQLkQIRLliWOBg");
	var mask_graphics_112 = new cjs.Graphics().p("EgiIAJbQCJuCLcocQLeoaOCCJQODCJIbLcQIbLdiJODg");
	var mask_graphics_113 = new cjs.Graphics().p("EgiKAKKQB8uELUomQLWolOEB8QOFB8IlLUQImLVh8OFg");
	var mask_graphics_114 = new cjs.Graphics().p("EgiMAK5QBvuFLMoxQLOovOGBuQOGBvIwLNQIxLMhvOHg");
	var mask_graphics_115 = new cjs.Graphics().p("EgiOALpQBiuILEo7QLGo5OHBhQOIBiI6LEQI7LFhiOIg");
	var mask_graphics_116 = new cjs.Graphics().p("EgiPAMYQBUuJK8pFQK9pEOJBVQOKBVJEK7QJFK8hVOKg");
	var mask_graphics_117 = new cjs.Graphics().p("EgiQANHQBHuJK0pQQK0pOOKBIQOLBHJOK0QJPKzhHOLg");
	var mask_graphics_118 = new cjs.Graphics().p("EgiRAN3QA6uLKrpZQKspYOKA6QOMA7JYKqQJaKrg7OMg");
	var mask_graphics_119 = new cjs.Graphics().p("EgiSAOmQAtuMKipiQKjpiOMAtQOMAuJiKhQJjKigtONg");
	var mask_graphics_120 = new cjs.Graphics().p("EgiTAPWQAguNKZpsQKbprOMAgQONAgJrKZQJtKZggONg");
	var mask_graphics_121 = new cjs.Graphics().p("EgiTAQGQATuOKQp1QKRp1OMATQOOATJ1KPQJ2KRgSONg");
	var mask_graphics_122 = new cjs.Graphics().p("EgiTAQ1QAFuNKHp/QKIp/ONAGQONAGJ/KHQKAKGgGOOg");
	var mask_graphics_123 = new cjs.Graphics().p("A4dnDQJ+qHOOgIQONgHKIJ9QKJJ9AHOOMhEnAAkQgIuNJ+qJg");
	var mask_graphics_124 = new cjs.Graphics().p("A4zm8QJ1qRONgUQONgVKRJ0QKSJ0AVONMhEmABkQgVuNJ0qSg");
	var mask_graphics_125 = new cjs.Graphics().p("A5Im0QJrqaONgiQOMgiKaJqQKcJrAiONMhElACjQgiuNJrqag");
	var mask_graphics_126 = new cjs.Graphics().p("A5dmtQJiqjOMgvQOMgvKjJhQKkJhAvOMMhEiADjQgvuMJhqkg");
	var mask_graphics_127 = new cjs.Graphics().p("A5xmkQJYqsOLg8QOLg9KsJXQKtJYA8OKMhEeAEjQg8uMJXqrg");
	var mask_graphics_128 = new cjs.Graphics().p("A6FmcQJOq1OLhJQOKhJK0JNQK2JNBJOKMhEZAFiQhJuLJMq0g");
	var mask_graphics_129 = new cjs.Graphics().p("A6XmTQJDq9OKhXQOIhWK9JCQK+JEBXOJMhEUAGhQhWuJJDq9g");
	var mask_graphics_130 = new cjs.Graphics().p("A6qmKQI6rGOIhjQOHhkLFI5QLHI5BjOHMhENAHhQhjuII4rFg");
	var mask_graphics_131 = new cjs.Graphics().p("A67mBQIvrNOHhxQOFhxLNIuQLPIwBxOFMhEGAIgQhwuHIurNg");
	var mask_graphics_132 = new cjs.Graphics().p("A7Ml3QIkrWOFh9QOEh+LVIjQLXIlB+OEMhD9AJfQh+uFIkrVg");
	var mask_graphics_133 = new cjs.Graphics().p("A7dltQIareODiKQOCiLLdIZQLfIaCLOCMhD0AKeQiLuDIZrdg");
	var mask_graphics_134 = new cjs.Graphics().p("A7tljQIQrlOBiYQN/iYLlIPQLnIPCXOAMhDpALdQiYuBIOrlg");
	var mask_graphics_135 = new cjs.Graphics().p("A78lYQIFrtN+ilQN+ikLsIDQLuIFClN9MhDfAMcQilt/IErsg");
	var mask_graphics_136 = new cjs.Graphics().p("A8LlNQH6r0N8iyQN7iyL0H5QL1H5CyN7MhDTANaQixt8H4rzg");
	var mask_graphics_137 = new cjs.Graphics().p("A8ZlCQHvr7N5i/QN5i/L7HuQL8HvC/N4MhDGAOYQi+t5Htr7g");
	var mask_graphics_138 = new cjs.Graphics().p("A8mk3QHjsCN3jMQN1jLMDHjQMDHjDMN1MhC4APXQjMt3HjsCg");
	var mask_graphics_139 = new cjs.Graphics().p("A8zkrQHYsJN0jYQNyjZMJHYQMLHYDYNyMhCpAQVQjYt0HXsJg");
	var mask_graphics_140 = new cjs.Graphics().p("A8/kfQHNsQNwjlQNvjlMQHMQMRHNDlNvMhCZARSQjltwHMsQg");
	var mask_graphics_141 = new cjs.Graphics().p("A9LkTQHCsWNtjyQNrjyMXHBQMYHBDxNsMhCJASQQjxttHAsXg");
	var mask_graphics_142 = new cjs.Graphics().p("A9WkGQG2sdNpj+QNpj/McG1QMfG2D+NoMhB3ATNQj/tpG1sdg");
	var mask_graphics_143 = new cjs.Graphics().p("A9gj5QGqsjNmkLQNkkMMjGqQMlGqELNlMhBmAUJQkLtlGqsjg");
	var mask_graphics_144 = new cjs.Graphics().p("A9qjsQGfspNhkYQNhkYMpGeQMqGfEYNgMhBSAVHQkYtiGespg");
	var mask_graphics_145 = new cjs.Graphics().p("A9zjeQGTswNdkkQNckkMvGSQMxGTEkNcMhA+AWDQkktdGSsvg");
	var mask_graphics_146 = new cjs.Graphics().p("A98jRQGHs1NZkwQNYkxM1GGQM2GHExNZMhApAW+QkxtZGGs1g");
	var mask_graphics_147 = new cjs.Graphics().p("A+EjDQF8s6NUk9QNTk9M7F6QM8F7E8NUMhATAX6Qk9tUF6s7g");
	var mask_graphics_148 = new cjs.Graphics().p("A+Li1QFvtANQlJQNPlJM/FuQNCFvFJNQMg/9AY1QlJtQFutAg");
	var mask_graphics_149 = new cjs.Graphics().p("A+SimQFjtFNLlWQNKlWNFFjQNGFiFWNLMg/lAZxQlWtLFitFg");
	var mask_graphics_150 = new cjs.Graphics().p("A+YiXQFXtLNGliQNFlhNKFWQNLFWFiNGMg/NAarQlitFFWtKg");
	var mask_graphics_151 = new cjs.Graphics().p("A+eiIQFLtQNBluQNAltNOFJQNRFLFuNAMg+0AbmQlutBFJtOg");
	var mask_graphics_152 = new cjs.Graphics().p("A+ih5QE+tUM7l6QM7l6NTE9QNVE+F6M8Mg+aAcfQl5s7E9tTg");
	var mask_graphics_153 = new cjs.Graphics().p("A+nhqQEztYM1mGQM2mGNXExQNZEyGGM1Mg9+AdaQmGs2EwtYg");
	var mask_graphics_154 = new cjs.Graphics().p("A+qhaQEmtdMvmSQMwmRNcEkQNeElGRMwMg9jAeTQmRswEktcg");
	var mask_graphics_155 = new cjs.Graphics().p("A+thKQEZthMqmeQMqmdNgEYQNiEZGdMqMg9GAfLQmesqEYtgg");
	var mask_graphics_156 = new cjs.Graphics().p("A+wg4QELtlMjmrQMjmrNkEJQNnELGrMjMg8lAgMQmrsjEJtlg");
	var mask_graphics_157 = new cjs.Graphics().p("A+yglQD8tqMcm4QMcm4NpD7QNrD7G4McMg8CAhOQm5scD7tqg");
	var mask_graphics_158 = new cjs.Graphics().p("A+zgSQDutuMUnFQMVnGNsDtQNvDtHGMUMg7fAiNQnFsUDstug");
	var mask_graphics_159 = new cjs.Graphics().p("A+zABQDftxMMnTQMNnTNxDeQNzDfHTMMMg66AjNQnTsNDetyg");
	var mask_graphics_160 = new cjs.Graphics().p("A+zAVQDQt1MFngQMFngN1DQQN2DPHgMFMg6UAkMQngsFDPt2g");
	var mask_graphics_161 = new cjs.Graphics().p("A+xApQDBt4L9ntQL9ntN3DBQN7DBHsL8Mg5tAlKQnsr9DAt5g");
	var mask_graphics_162 = new cjs.Graphics().p("A+vA9QCyt7L1n6QL1n5N6CyQN+CyH5L0Mg5FAmHQn5r0Cxt9g");
	var mask_graphics_163 = new cjs.Graphics().p("A+sBSQCkt+LsoGQLsoGN+CiQOACjIGLsMg4cAnFQoGrtCit/g");
	var mask_graphics_164 = new cjs.Graphics().p("A+oBnQCVuBLjoTQLkoSOACUQODCUISLjMg3yAoAQoSrjCTuCg");
	var mask_graphics_165 = new cjs.Graphics().p("A+jB8QCFuDLbofQLbofOCCFQOGCFIeLaMg3HAo8QofraCFuFg");
	var mask_graphics_166 = new cjs.Graphics().p("A+eCRQB3uFLRorQLSorOFB2QOHB2IrLRMg2bAp3QorrSB1uHg");
	var mask_graphics_167 = new cjs.Graphics().p("A+XCnQBnuHLJo3QLIo3OHBnQOJBmI3LJMg1uAqwQo3rIBmuJg");
	var mask_graphics_168 = new cjs.Graphics().p("A+QC9QBZuJK+pDQK/pCOIBXQOMBYJCK/Mg1AArpQpDq+BXuLg");
	var mask_graphics_169 = new cjs.Graphics().p("A+IDUQBKuLK1pOQK1pPOKBJQOMBIJOK1Mg0RAsiQpOq1BHuLg");
	var mask_graphics_170 = new cjs.Graphics().p("A9/DqQA7uMKrpZQKrpaOLA5QOOA5JZKrMgzhAtaQpaqrA4uNg");
	var mask_graphics_171 = new cjs.Graphics().p("A91EBQAruNKiplQKhplOLAqQOPAqJlKhMgyxAuRQplqhApuOg");
	var mask_graphics_172 = new cjs.Graphics().p("A9qEYQAcuNKXpxQKXpwOMAbQOPAbJxKXMgyAAvGQpwqWAauPg");
	var mask_graphics_173 = new cjs.Graphics().p("A9eEwQANuOKMp8QKMp7ONAMQOQALJ7KNMgxNAv8Qp7qNALuOg");
	var mask_graphics_174 = new cjs.Graphics().p("A9RFHQgDuOKCqGQKBqGONgEQOQgDKGKBMgwZAwxQqGqCgEuPg");
	var mask_graphics_175 = new cjs.Graphics().p("A9EFfQgSuOJ3qRQJ3qRONgSQOQgTKRJ3MgvmAxkQqRp3gTuPg");
	var mask_graphics_176 = new cjs.Graphics().p("A82F3QghuNJsqcQJsqbONgiQOPgiKbJsMguwAyXQqbpsgjuPg");
	var mask_graphics_177 = new cjs.Graphics().p("A8nGQQgwuNJhqmQJhqmOMgxQOOgxKmJhMgt6AzIQqmpggyuOg");
	var mask_graphics_178 = new cjs.Graphics().p("A8XGpQg/uMJWqwQJVqwOLhAQOOhBKwJWMgtEAz5QqwpWhBuMg");
	var mask_graphics_179 = new cjs.Graphics().p("A8GHBQhOuKJKq6QJJq6OKhPQONhQK6JKMgsMA0pQq6pKhQuMg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:136.3,y:20.9}).wait(1).to({graphics:mask_graphics_1,x:136.8,y:20.6}).wait(1).to({graphics:mask_graphics_2,x:136.8,y:20.3}).wait(1).to({graphics:mask_graphics_3,x:136.8,y:20}).wait(1).to({graphics:mask_graphics_4,x:136.7,y:19.8}).wait(1).to({graphics:mask_graphics_5,x:136.7,y:19.6}).wait(1).to({graphics:mask_graphics_6,x:136.7,y:19.5}).wait(1).to({graphics:mask_graphics_7,x:136.6,y:19.4}).wait(1).to({graphics:mask_graphics_8,x:136.6,y:19.3}).wait(1).to({graphics:mask_graphics_9,x:136.6,y:19.3}).wait(1).to({graphics:mask_graphics_10,x:136.6,y:19.3}).wait(1).to({graphics:mask_graphics_11,x:136.5,y:19.3}).wait(1).to({graphics:mask_graphics_12,x:136.5,y:19.4}).wait(1).to({graphics:mask_graphics_13,x:136.5,y:19.5}).wait(1).to({graphics:mask_graphics_14,x:136.5,y:19.6}).wait(1).to({graphics:mask_graphics_15,x:136.5,y:19.8}).wait(1).to({graphics:mask_graphics_16,x:136.5,y:19.9}).wait(1).to({graphics:mask_graphics_17,x:136.5,y:20}).wait(1).to({graphics:mask_graphics_18,x:136.6,y:20}).wait(1).to({graphics:mask_graphics_19,x:136.6,y:20}).wait(1).to({graphics:mask_graphics_20,x:136.6,y:20}).wait(1).to({graphics:mask_graphics_21,x:136.7,y:19.9}).wait(1).to({graphics:mask_graphics_22,x:136.7,y:19.8}).wait(1).to({graphics:mask_graphics_23,x:136.7,y:19.7}).wait(1).to({graphics:mask_graphics_24,x:136.8,y:19.5}).wait(1).to({graphics:mask_graphics_25,x:136.8,y:19.3}).wait(1).to({graphics:mask_graphics_26,x:136.9,y:19.1}).wait(1).to({graphics:mask_graphics_27,x:136.9,y:18.8}).wait(1).to({graphics:mask_graphics_28,x:136.9,y:18.5}).wait(1).to({graphics:mask_graphics_29,x:135.8,y:18.2}).wait(1).to({graphics:mask_graphics_30,x:134.4,y:17.9}).wait(1).to({graphics:mask_graphics_31,x:133,y:17.6}).wait(1).to({graphics:mask_graphics_32,x:131.7,y:17.3}).wait(1).to({graphics:mask_graphics_33,x:130.3,y:16.9}).wait(1).to({graphics:mask_graphics_34,x:128.9,y:16.6}).wait(1).to({graphics:mask_graphics_35,x:127.6,y:16.2}).wait(1).to({graphics:mask_graphics_36,x:126.2,y:15.8}).wait(1).to({graphics:mask_graphics_37,x:124.9,y:15.4}).wait(1).to({graphics:mask_graphics_38,x:123.5,y:14.9}).wait(1).to({graphics:mask_graphics_39,x:122.2,y:14.5}).wait(1).to({graphics:mask_graphics_40,x:120.9,y:14}).wait(1).to({graphics:mask_graphics_41,x:119.6,y:13.5}).wait(1).to({graphics:mask_graphics_42,x:118.3,y:13}).wait(1).to({graphics:mask_graphics_43,x:117,y:12.5}).wait(1).to({graphics:mask_graphics_44,x:115.7,y:11.9}).wait(1).to({graphics:mask_graphics_45,x:114.4,y:11.4}).wait(1).to({graphics:mask_graphics_46,x:113.1,y:10.8}).wait(1).to({graphics:mask_graphics_47,x:111.9,y:10.2}).wait(1).to({graphics:mask_graphics_48,x:110.6,y:9.6}).wait(1).to({graphics:mask_graphics_49,x:109.4,y:8.9}).wait(1).to({graphics:mask_graphics_50,x:108.2,y:8.3}).wait(1).to({graphics:mask_graphics_51,x:106.9,y:7.6}).wait(1).to({graphics:mask_graphics_52,x:105.7,y:6.9}).wait(1).to({graphics:mask_graphics_53,x:104.5,y:6.2}).wait(1).to({graphics:mask_graphics_54,x:103.4,y:5.5}).wait(1).to({graphics:mask_graphics_55,x:102.2,y:4.7}).wait(1).to({graphics:mask_graphics_56,x:101,y:4}).wait(1).to({graphics:mask_graphics_57,x:99.9,y:3.2}).wait(1).to({graphics:mask_graphics_58,x:98.8,y:2.4}).wait(1).to({graphics:mask_graphics_59,x:97.7,y:1.6}).wait(1).to({graphics:mask_graphics_60,x:96.6,y:0.7}).wait(1).to({graphics:mask_graphics_61,x:95.5,y:-0.1}).wait(1).to({graphics:mask_graphics_62,x:94.4,y:-1}).wait(1).to({graphics:mask_graphics_63,x:93.4,y:-1.9}).wait(1).to({graphics:mask_graphics_64,x:92.3,y:-2.8}).wait(1).to({graphics:mask_graphics_65,x:91.3,y:-3.7}).wait(1).to({graphics:mask_graphics_66,x:90.3,y:-4.7}).wait(1).to({graphics:mask_graphics_67,x:89.4,y:-5.7}).wait(1).to({graphics:mask_graphics_68,x:88.4,y:-6.7}).wait(1).to({graphics:mask_graphics_69,x:87.5,y:-7.7}).wait(1).to({graphics:mask_graphics_70,x:86.5,y:-8.7}).wait(1).to({graphics:mask_graphics_71,x:85.6,y:-9.7}).wait(1).to({graphics:mask_graphics_72,x:84.8,y:-10.8}).wait(1).to({graphics:mask_graphics_73,x:83.9,y:-11.9}).wait(1).to({graphics:mask_graphics_74,x:83,y:-12.9}).wait(1).to({graphics:mask_graphics_75,x:82.2,y:-14.1}).wait(1).to({graphics:mask_graphics_76,x:81.4,y:-15.2}).wait(1).to({graphics:mask_graphics_77,x:80.6,y:-16.3}).wait(1).to({graphics:mask_graphics_78,x:79.8,y:-17.5}).wait(1).to({graphics:mask_graphics_79,x:79.1,y:-18.6}).wait(1).to({graphics:mask_graphics_80,x:78.4,y:-19.8}).wait(1).to({graphics:mask_graphics_81,x:77.6,y:-21}).wait(1).to({graphics:mask_graphics_82,x:76.9,y:-22.2}).wait(1).to({graphics:mask_graphics_83,x:76.2,y:-23.5}).wait(1).to({graphics:mask_graphics_84,x:75.6,y:-24.7}).wait(1).to({graphics:mask_graphics_85,x:74.9,y:-25.9}).wait(1).to({graphics:mask_graphics_86,x:74.2,y:-27.2}).wait(1).to({graphics:mask_graphics_87,x:73.6,y:-28.6}).wait(1).to({graphics:mask_graphics_88,x:72.9,y:-29.9}).wait(1).to({graphics:mask_graphics_89,x:72.3,y:-31.3}).wait(1).to({graphics:mask_graphics_90,x:71.7,y:-32.7}).wait(1).to({graphics:mask_graphics_91,x:71.2,y:-34}).wait(1).to({graphics:mask_graphics_92,x:70.6,y:-35.4}).wait(1).to({graphics:mask_graphics_93,x:70.1,y:-36.8}).wait(1).to({graphics:mask_graphics_94,x:69.6,y:-38.2}).wait(1).to({graphics:mask_graphics_95,x:69.1,y:-39.7}).wait(1).to({graphics:mask_graphics_96,x:68.6,y:-41.1}).wait(1).to({graphics:mask_graphics_97,x:68.2,y:-42.5}).wait(1).to({graphics:mask_graphics_98,x:67.7,y:-44}).wait(1).to({graphics:mask_graphics_99,x:67.3,y:-45.4}).wait(1).to({graphics:mask_graphics_100,x:66.9,y:-46.9}).wait(1).to({graphics:mask_graphics_101,x:66.6,y:-48.4}).wait(1).to({graphics:mask_graphics_102,x:66.2,y:-49.9}).wait(1).to({graphics:mask_graphics_103,x:65.9,y:-51.4}).wait(1).to({graphics:mask_graphics_104,x:65.6,y:-52.8}).wait(1).to({graphics:mask_graphics_105,x:65.3,y:-54.3}).wait(1).to({graphics:mask_graphics_106,x:65,y:-55.9}).wait(1).to({graphics:mask_graphics_107,x:64.8,y:-57.4}).wait(1).to({graphics:mask_graphics_108,x:64.6,y:-58.9}).wait(1).to({graphics:mask_graphics_109,x:64.4,y:-60.4}).wait(1).to({graphics:mask_graphics_110,x:64.2,y:-62}).wait(1).to({graphics:mask_graphics_111,x:64.1,y:-63.5}).wait(1).to({graphics:mask_graphics_112,x:63.9,y:-65}).wait(1).to({graphics:mask_graphics_113,x:63.8,y:-66.6}).wait(1).to({graphics:mask_graphics_114,x:63.8,y:-68.1}).wait(1).to({graphics:mask_graphics_115,x:63.7,y:-69.7}).wait(1).to({graphics:mask_graphics_116,x:63.7,y:-71.3}).wait(1).to({graphics:mask_graphics_117,x:63.7,y:-72.8}).wait(1).to({graphics:mask_graphics_118,x:63.7,y:-74.4}).wait(1).to({graphics:mask_graphics_119,x:63.7,y:-76}).wait(1).to({graphics:mask_graphics_120,x:63.8,y:-77.6}).wait(1).to({graphics:mask_graphics_121,x:63.9,y:-79.2}).wait(1).to({graphics:mask_graphics_122,x:64,y:-80.8}).wait(1).to({graphics:mask_graphics_123,x:64.1,y:-80.6}).wait(1).to({graphics:mask_graphics_124,x:64.2,y:-79}).wait(1).to({graphics:mask_graphics_125,x:64.3,y:-77.5}).wait(1).to({graphics:mask_graphics_126,x:64.4,y:-75.9}).wait(1).to({graphics:mask_graphics_127,x:64.4,y:-74.3}).wait(1).to({graphics:mask_graphics_128,x:64.4,y:-72.8}).wait(1).to({graphics:mask_graphics_129,x:64.4,y:-71.3}).wait(1).to({graphics:mask_graphics_130,x:64.4,y:-69.7}).wait(1).to({graphics:mask_graphics_131,x:64.3,y:-68.2}).wait(1).to({graphics:mask_graphics_132,x:64.2,y:-66.7}).wait(1).to({graphics:mask_graphics_133,x:64.1,y:-65.1}).wait(1).to({graphics:mask_graphics_134,x:64,y:-63.6}).wait(1).to({graphics:mask_graphics_135,x:63.8,y:-62.1}).wait(1).to({graphics:mask_graphics_136,x:63.6,y:-60.6}).wait(1).to({graphics:mask_graphics_137,x:63.4,y:-59.1}).wait(1).to({graphics:mask_graphics_138,x:63.2,y:-57.6}).wait(1).to({graphics:mask_graphics_139,x:62.9,y:-56.2}).wait(1).to({graphics:mask_graphics_140,x:62.7,y:-54.7}).wait(1).to({graphics:mask_graphics_141,x:62.4,y:-53.2}).wait(1).to({graphics:mask_graphics_142,x:62,y:-51.7}).wait(1).to({graphics:mask_graphics_143,x:61.7,y:-50.3}).wait(1).to({graphics:mask_graphics_144,x:61.3,y:-48.8}).wait(1).to({graphics:mask_graphics_145,x:61,y:-47.4}).wait(1).to({graphics:mask_graphics_146,x:60.6,y:-46}).wait(1).to({graphics:mask_graphics_147,x:60.1,y:-44.5}).wait(1).to({graphics:mask_graphics_148,x:59.7,y:-43.1}).wait(1).to({graphics:mask_graphics_149,x:59.2,y:-41.7}).wait(1).to({graphics:mask_graphics_150,x:58.8,y:-40.3}).wait(1).to({graphics:mask_graphics_151,x:58.3,y:-38.9}).wait(1).to({graphics:mask_graphics_152,x:57.7,y:-37.5}).wait(1).to({graphics:mask_graphics_153,x:57.2,y:-36.1}).wait(1).to({graphics:mask_graphics_154,x:56.6,y:-34.8}).wait(1).to({graphics:mask_graphics_155,x:56.1,y:-33.4}).wait(1).to({graphics:mask_graphics_156,x:55.4,y:-31.8}).wait(1).to({graphics:mask_graphics_157,x:54.6,y:-30.3}).wait(1).to({graphics:mask_graphics_158,x:53.9,y:-28.8}).wait(1).to({graphics:mask_graphics_159,x:53.1,y:-27.3}).wait(1).to({graphics:mask_graphics_160,x:52.3,y:-25.8}).wait(1).to({graphics:mask_graphics_161,x:51.5,y:-24.3}).wait(1).to({graphics:mask_graphics_162,x:50.6,y:-22.9}).wait(1).to({graphics:mask_graphics_163,x:49.7,y:-21.4}).wait(1).to({graphics:mask_graphics_164,x:48.8,y:-20}).wait(1).to({graphics:mask_graphics_165,x:47.9,y:-18.6}).wait(1).to({graphics:mask_graphics_166,x:46.9,y:-17.2}).wait(1).to({graphics:mask_graphics_167,x:45.9,y:-15.9}).wait(1).to({graphics:mask_graphics_168,x:44.9,y:-14.5}).wait(1).to({graphics:mask_graphics_169,x:43.9,y:-13.2}).wait(1).to({graphics:mask_graphics_170,x:42.8,y:-11.9}).wait(1).to({graphics:mask_graphics_171,x:41.7,y:-10.7}).wait(1).to({graphics:mask_graphics_172,x:40.5,y:-9.4}).wait(1).to({graphics:mask_graphics_173,x:39.4,y:-8.2}).wait(1).to({graphics:mask_graphics_174,x:38.2,y:-7}).wait(1).to({graphics:mask_graphics_175,x:37,y:-5.9}).wait(1).to({graphics:mask_graphics_176,x:35.7,y:-4.7}).wait(1).to({graphics:mask_graphics_177,x:34.5,y:-3.7}).wait(1).to({graphics:mask_graphics_178,x:33.2,y:-2.6}).wait(1).to({graphics:mask_graphics_179,x:31.8,y:-1.6}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AheUGQmdimjmmaQkMneCIoTQCIoUHMkSQHMkSIECRQBwAfBlAw");
	this.shape.setTransform(-3.3,-0.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(180));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-131.5,99.6,262.1);


(lib.honeyflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.honeybee();
	this.instance.parent = this;
	this.instance.setTransform(22.8,-143.8,0.422,0.422,0,0,0,-37.1,64.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNB8IgRgDIgCAAIgDgBIgCgBIgCAAIgDgCIgEgBIgDgBIgCgBIgCgBIgBAAIgCgBIgBgBIgBgBIgCAAIgBgBIgBgBIgCgBIgBAAIgBgBIgBgBIgBgBIgBgBIgCAAIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIgBgBIAAgBIgBAAIgBgBIgBgBIgBgBIgBgBIgBAAIAAgBIgBgBIgBgBIgBgBIAAgBIgBgBIgBAAIAAgBIgBgBIAAgBIgCgBIAAgBIgBAAIgBgBIAAgBIgBgBIgBgBIAAgBIAAgBIgBAAIAAgBIgBgBIAAgBIgBgBIgBgBIgBgBIAAgBIgBAAIAAgBIgBgBIAAgBIgBgBIAAgBIAAgBIgBgBIAAAAIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIgBgBIAAgBIAAAAIgBgBIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIgBgBIAAAAIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAAAIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIgBAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIgBgBIABgBIgBgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIABgBIgBgBIABgBIgBgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAAAIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIABgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIAAgBIABgCIABgBIAAgBIABgBIAAgBIABgBIAAgBIACgBIAAgBIABgBIABgBIAAgBIABgBIAAgBIABgBIABgBIABgBIAAgBIABgBIABgCIABgBIABgBIABgBIABgBIABgBIAAgBIAEgDIANgMIAMgIIAPgIIAQgFIAOgDIAPgCQAIAAAJABIAPADIAQAFIAQAHIAEACIABABIACABIAAABIABAAIACABIABABIABABIABAAIABABIABABIABABIABABIABAAIABABIABABIABABIABABIABAAIABABIABABIAAABIABABIABABIABAAIAAABIABABIACABIAAABIABABIABAAIAAABIABABIAAABIABABIABABIAAAAIABABIABABIAAABIACABIAAABIABABIABAAIAAABIABABIAAABIABABIAAABIAAABIABAAIABABIAAABIABABIAAABIABABIABABIAAABIABAAIAAABIAAABIABABIAAABIABABIAAABIABABIAAABIAAAAIAAABIABABIAAABIABABIAAABIAAABIABABIAAABIAAABIABAAIAAABIABABIAAABIAAABIABABIAAABIAAABIAAABIABABIAAAAIAAABIAAABIABABIAAABIAAABIAAABIAAABIAAABIAAABIABABIAAABIAAAAIAAABIAAABIAAABIABACIAAACIAAACIAAABIAAABIABABIgBABIAAABIABAAIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIgBABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIAAACIgBACIAAACIAAABIAAABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIAAABIgBABIAAABIgBABIAAABIAAABIgBABIAAABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIgBABIgBABIAAABIgBABIAAABIgBABIgBABIAAACIgBABIAAABIgBABIgBABIgBABIAAABIgCABIAAABIgBABIgBABIgBABIgBABIAAABIgBABIgBACIgBABIgCABIgBABIgKAJQgLAKgOAGIgTAHQgQAFgRAAIgPgBg");
	this.shape.setTransform(22.9,-143.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-215.3,105.5,84.1);


// stage content:
(lib.writingsuccess_Fontkid_Q = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_674 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(674).call(this.frame_674).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(267.9,104.9,0.999,0.999,8.5,0,0,22.4,-144);
	this.instance._off = true;

	this.instance_1 = new lib.honeybee();
	this.instance_1.parent = this;
	this.instance_1.setTransform(412.8,449.4,0.421,0.421,0,-8.5,171.5,-37.1,64.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:8.3,guide:{path:[267.9,104.8,199.9,106.2,151.6,154.6,101.7,204.5,101.7,275,101.7,345.5,151.6,395.4,201.4,445.3,271.9,445.3,330.3,445.3,374.5,411.2]}},300).to({guide:{path:[374.4,411.2,383.7,404.1,392.3,395.4,431.6,356.1,439.9,304.1]}},58).to({scaleX:1,scaleY:1,rotation:8.5,guide:{path:[440,304.1,442.3,290,442.3,275,442.3,204.4,392.4,154.6,343.6,105.9,275,104.8]}},132).wait(11).to({rotation:0,skewX:-8.5,skewY:171.5,x:332.6,y:369.7},0).to({x:413.1,y:449.2},89).to({_off:true},11).wait(65));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(610).to({_off:false},0).to({guide:{path:[413.1,449.1,536.7,378,506.4,500.4,476.1,622.4,664.7,560.5]}},64).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(273.6,104.6,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},490).wait(11).to({_off:false,x:414.6,y:450.4},0).to({_off:true},89).wait(76));

	// Layer 5
	this.instance_2 = new lib.ar2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(381.8,348.3,1,1,45,0,0,14.5,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(510).to({_off:false},0).wait(165));

	// ar
	this.instance_3 = new lib.ar1("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(250.4,282.8,1,1,-15);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(666));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AgJgJIATAT");
	this.shape_1.setTransform(336,372.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("AgNgNIAbAb");
	this.shape_2.setTransform(336.4,372.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("AgSgSIAkAk");
	this.shape_3.setTransform(336.9,373.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("AgWgWIAtAt");
	this.shape_4.setTransform(337.3,373.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(25,1,1).p("AgagaIA1A1");
	this.shape_5.setTransform(337.7,374.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(25,1,1).p("AgegeIA9A9");
	this.shape_6.setTransform(338.1,374.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(25,1,1).p("AgjgiIBHBF");
	this.shape_7.setTransform(338.6,375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(25,1,1).p("AgngmIBPBN");
	this.shape_8.setTransform(339,375.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(25,1,1).p("AgrgrIBXBX");
	this.shape_9.setTransform(339.4,375.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(25,1,1).p("AgwgvIBgBf");
	this.shape_10.setTransform(339.9,376.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(25,1,1).p("Ag0gzIBpBn");
	this.shape_11.setTransform(340.3,376.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(25,1,1).p("Ag4g3IBxBv");
	this.shape_12.setTransform(340.7,377.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(25,1,1).p("Ag8g8IB5B5");
	this.shape_13.setTransform(341.1,377.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(25,1,1).p("AhBhAICDCB");
	this.shape_14.setTransform(341.6,378);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(25,1,1).p("AhFhEICLCJ");
	this.shape_15.setTransform(342,378.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(25,1,1).p("AhJhIICTCR");
	this.shape_16.setTransform(342.4,378.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(25,1,1).p("AhNhNICbCb");
	this.shape_17.setTransform(342.8,379.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(25,1,1).p("AhShRIClCj");
	this.shape_18.setTransform(343.3,379.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(25,1,1).p("AhWhVICtCr");
	this.shape_19.setTransform(343.7,380.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(25,1,1).p("AhahZIC1Cz");
	this.shape_20.setTransform(344.1,380.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(25,1,1).p("AhfhdIC/C7");
	this.shape_21.setTransform(344.6,380.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(25,1,1).p("AhjhiIDHDE");
	this.shape_22.setTransform(345,381.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(25,1,1).p("AhnhmIDPDN");
	this.shape_23.setTransform(345.4,381.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(25,1,1).p("AhrhqIDXDV");
	this.shape_24.setTransform(345.8,382.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(25,1,1).p("AhwhuIDhDd");
	this.shape_25.setTransform(346.3,382.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(25,1,1).p("Ah0hyIDpDl");
	this.shape_26.setTransform(346.7,383);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(25,1,1).p("Ah4h2IDxDt");
	this.shape_27.setTransform(347.1,383.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(25,1,1).p("Ah8h7ID5D3");
	this.shape_28.setTransform(347.5,383.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(25,1,1).p("AiAh/IEBD/");
	this.shape_29.setTransform(348,384.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(25,1,1).p("AiFiDIELEH");
	this.shape_30.setTransform(348.4,384.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(25,1,1).p("AiJiHIETEQ");
	this.shape_31.setTransform(348.8,385.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(25,1,1).p("AiNiMIEbEZ");
	this.shape_32.setTransform(349.2,385.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(25,1,1).p("AiSiQIElEh");
	this.shape_33.setTransform(349.7,386);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(25,1,1).p("AiWiUIEtEp");
	this.shape_34.setTransform(350.1,386.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(25,1,1).p("AiaiYIE1Ex");
	this.shape_35.setTransform(350.5,386.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(25,1,1).p("AieidIE9E7");
	this.shape_36.setTransform(351,387.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(25,1,1).p("AijihIFHFD");
	this.shape_37.setTransform(351.4,387.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(25,1,1).p("AinilIFPFL");
	this.shape_38.setTransform(351.8,388.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(25,1,1).p("AiripIFXFT");
	this.shape_39.setTransform(352.2,388.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(25,1,1).p("AivitIFgFb");
	this.shape_40.setTransform(352.7,388.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(25,1,1).p("Ai0iyIFpFk");
	this.shape_41.setTransform(353.1,389.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(25,1,1).p("Ai4i2IFxFt");
	this.shape_42.setTransform(353.5,389.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(25,1,1).p("Ai8i6IF5F1");
	this.shape_43.setTransform(353.9,390.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(25,1,1).p("AjBi+IGCF9");
	this.shape_44.setTransform(354.4,390.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(25,1,1).p("AjFjDIGLGH");
	this.shape_45.setTransform(354.8,391.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(25,1,1).p("AjJjGIGTGN");
	this.shape_46.setTransform(355.2,391.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(25,1,1).p("AjNjLIGcGX");
	this.shape_47.setTransform(355.7,391.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(25,1,1).p("AjSjPIGlGf");
	this.shape_48.setTransform(356.1,392.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(25,1,1).p("AjWjTIGtGn");
	this.shape_49.setTransform(356.5,392.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(25,1,1).p("AjajXIG1Gw");
	this.shape_50.setTransform(356.9,393.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(25,1,1).p("AjfjcIG+G5");
	this.shape_51.setTransform(357.4,393.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(25,1,1).p("AjjjgIHHHB");
	this.shape_52.setTransform(357.8,394);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(25,1,1).p("AjnjkIHPHJ");
	this.shape_53.setTransform(358.2,394.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(25,1,1).p("AjrjoIHXHR");
	this.shape_54.setTransform(358.6,394.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(25,1,1).p("AjwjtIHhHb");
	this.shape_55.setTransform(359.1,395.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(25,1,1).p("Aj0jxIHpHj");
	this.shape_56.setTransform(359.5,395.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(25,1,1).p("Aj4j1IHxHr");
	this.shape_57.setTransform(359.9,396.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(25,1,1).p("Aj8j5IH5Hz");
	this.shape_58.setTransform(360.3,396.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(25,1,1).p("AkBj9IIDH7");
	this.shape_59.setTransform(360.8,397);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(25,1,1).p("AkFkCIILIE");
	this.shape_60.setTransform(361.2,397.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(25,1,1).p("AkJkGIITIN");
	this.shape_61.setTransform(361.6,397.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(25,1,1).p("AkOkKIIdIV");
	this.shape_62.setTransform(362.1,398.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(25,1,1).p("AkSkOIIlId");
	this.shape_63.setTransform(362.5,398.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(25,1,1).p("AkWkTIItIn");
	this.shape_64.setTransform(362.9,399.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(25,1,1).p("AkakXII1Iv");
	this.shape_65.setTransform(363.3,399.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(25,1,1).p("AkfkbII/I3");
	this.shape_66.setTransform(363.8,399.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(25,1,1).p("AkjkfIJHI/");
	this.shape_67.setTransform(364.2,400.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(25,1,1).p("AknkjIJPJH");
	this.shape_68.setTransform(364.6,400.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(25,1,1).p("AkrknIJXJQ");
	this.shape_69.setTransform(365,401.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(25,1,1).p("AkvksIJfJZ");
	this.shape_70.setTransform(365.5,401.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(25,1,1).p("Ak0kwIJpJh");
	this.shape_71.setTransform(365.9,402);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(25,1,1).p("Ak4k0IJxJp");
	this.shape_72.setTransform(366.3,402.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(25,1,1).p("Ak9k4IJ7Jx");
	this.shape_73.setTransform(366.8,402.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(25,1,1).p("AlBk9IKDJ7");
	this.shape_74.setTransform(367.2,403.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(25,1,1).p("AlFlBIKLKD");
	this.shape_75.setTransform(367.6,403.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(25,1,1).p("AlJlFIKTKL");
	this.shape_76.setTransform(368,404.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(25,1,1).p("AlNlJIKbKT");
	this.shape_77.setTransform(368.5,404.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(25,1,1).p("AlSlNIKlKb");
	this.shape_78.setTransform(368.9,405);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(25,1,1).p("AlWlSIKtKl");
	this.shape_79.setTransform(369.3,405.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(25,1,1).p("AlalWIK1Kt");
	this.shape_80.setTransform(369.7,405.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(25,1,1).p("AlelaIK+K1");
	this.shape_81.setTransform(370.2,406.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(25,1,1).p("AljleILHK9");
	this.shape_82.setTransform(370.6,406.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(25,1,1).p("AlnljILPLH");
	this.shape_83.setTransform(371,407.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(25,1,1).p("AlrlnILXLP");
	this.shape_84.setTransform(371.5,407.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(25,1,1).p("AlwlrILhLX");
	this.shape_85.setTransform(371.9,407.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(25,1,1).p("Al0lvILpLf");
	this.shape_86.setTransform(372.3,408.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(25,1,1).p("Al4lzILxLn");
	this.shape_87.setTransform(372.7,408.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(25,1,1).p("Al8l3IL6Lw");
	this.shape_88.setTransform(373.2,409.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(25,1,1).p("AmBl8IMDL5");
	this.shape_89.setTransform(373.6,409.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(25,1,1).p("AmFmAIMLMB");
	this.shape_90.setTransform(374,410);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},510).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).wait(76));

	// 2
	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(25,1,1).p("AaXj5QAQB6AAB/QAALCnzHzQnyHyrCAAQmxAAlki8Qjfh2jAjAQnynzAArCQAArBHynzQHznzLBAAQLCAAHyHzQGYGYBLIjg");
	this.shape_91.setTransform(275,275.1);
	this.shape_91._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_91).wait(499).to({_off:false},0).wait(176));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_259 = new cjs.Graphics().p("AjicMQp4qQAPuPQAQuOKPp5QKPp6OPAQMgBMBEvQuPgQp5qPg");
	var mask_graphics_260 = new cjs.Graphics().p("AjAchQqBqIAEuPQADuPKHqBQKHqCOPADMgASBEwQuPgEqCqGg");
	var mask_graphics_261 = new cjs.Graphics().p("Aixc1QqKqAgIuPQgIuOJ+qKQJ/qKOPgIMAAnBEvIgXAAQuBAAqBp2g");
	var mask_graphics_262 = new cjs.Graphics().p("AisdJQqSp3gUuPQgUuOJ2qSQJ2qTOQgUMABgBEuIg4ABQtsAAp+pig");
	var mask_graphics_263 = new cjs.Graphics().p("AimdcQqapugguPQgguNJuqaQJtqbOQggMACZBEsQgsACgsAAQtYAAp6pPg");
	var mask_graphics_264 = new cjs.Graphics().p("AigdwQqipmgsuOQgruNJlqiQJlqkOPgrMADSBEqQg8ADg8AAQtEAAp2o7g");
	var mask_graphics_265 = new cjs.Graphics().p("AiZeDQqrpdg3uOQg4uMJdqqQJcqrOPg4MAELBEoQhMAEhLAAQsxAApxoog");
	var mask_graphics_266 = new cjs.Graphics().p("AiSeVQqzpThDuNQhEuMJUqyQJUqzOOhDMAFEBEkQhcAGhbAAQsdAApsoWg");
	var mask_graphics_267 = new cjs.Graphics().p("AiMeoQq6pLhPuMQhPuKJLq6QJKq7OOhPMAF9BEfQhsAJhpAAQsLAApooDg");
	var mask_graphics_268 = new cjs.Graphics().p("AiEe6QrCpChbuKQhbuKJBrBQJCrCONhbMAG2BEZQh8ANh4AAQr5AAphnyg");
	var mask_graphics_269 = new cjs.Graphics().p("Ah9fMQrKo4hmuKQhnuII5rJQI4rJOMhnMAHvBETQiLAQiHAAQrnAApcngg");
	var mask_graphics_270 = new cjs.Graphics().p("Ah1fdQrRouhzuIQhyuHIvrQQIwrROKhzMAIoBEMQiaAUiVAAQrWAApWnPg");
	var mask_graphics_271 = new cjs.Graphics().p("AhtfvQrZomh+uGQh+uGImrXQImrYOJh+MAJhBEEQipAYikAAQrEAApQm9g");
	var mask_graphics_272 = new cjs.Graphics().p("EgBlAgAQrgociKuFQiJuEIcreQIerfOGiKMAKaBD8Qi4AciyAAQq0AApJmsg");
	var mask_graphics_273 = new cjs.Graphics().p("EgBcAgQQrnoSiWuDQiVuCITrlQIUrmOFiWMALSBDzQjHAijAAAQqjAApCmdg");
	var mask_graphics_274 = new cjs.Graphics().p("EgBUAghQruoJihuBQiht/IKrsQILruOCihMAMLBDpQjWAnjNAAQqTAAo8mMg");
	var mask_graphics_275 = new cjs.Graphics().p("EgBLAgxQr0n/itt+Qitt+IArzQIBr0OBitMANDBDfQjkAsjbAAQqEAAo0l8g");
	var mask_graphics_276 = new cjs.Graphics().p("EgBBAhBQr8n1i4t8Qi5t8H3r5QH3r7N/i5MAN6BDUQjyAyjoAAQp0AAoslsg");
	var mask_graphics_277 = new cjs.Graphics().p("EgA4AhQQsCnrjEt5QjEt5HssAQHusBN8jFMAOzBDIQkAA4j2AAQpkAAolldg");
	var mask_graphics_278 = new cjs.Graphics().p("EgAuAhgQsJnhjPt3QjQt3HjsGQHjsIN6jQMAPrBC7QkOBAkEAAQpVAAoclOg");
	var mask_graphics_279 = new cjs.Graphics().p("EgAkAhuQsPnWjbt1QjbtzHYsNQHasNN3jdMAQjBCuQkcBHkRAAQpGAAoUlAg");
	var mask_graphics_280 = new cjs.Graphics().p("EgAaAh9QsVnMjntyQjmtwHOsTQHQsUN1joMARZBCgQkpBOkeAAQo3AAoMkxg");
	var mask_graphics_281 = new cjs.Graphics().p("EgAQAiLQsbnCjytuQjytuHFsYQHFsaNyjzMASRBCRQk3BVkrAAQopAAoDkjg");
	var mask_graphics_282 = new cjs.Graphics().p("EgAFAiZQshm3j9tsQj+trG7sdQG7sgNuj/MATIBCCQlDBdk5AAQoaAAn6kVg");
	var mask_graphics_283 = new cjs.Graphics().p("EAAFAinQsmmtkJtoQkItoGwsjQGxsmNrkKMAT/BBxQlQBmlHAAQoLAAnykHg");
	var mask_graphics_284 = new cjs.Graphics().p("EAAQAi0QsrmikUtlQkVtkGmspQGnsrNokVMAU1BBgQldBvlTAAQn+AAnoj7g");
	var mask_graphics_285 = new cjs.Graphics().p("EAAbAjBQswmYkgtgQkfthGbsuQGcsxNlkhMAVsBBPQlqB4lgAAQnwAAnfjug");
	var mask_graphics_286 = new cjs.Graphics().p("EAAnAjOQs2mNkrtdQkqtdGQszQGSs2NhktMAWiBA8Ql2CCluAAQniAAnUjhg");
	var mask_graphics_287 = new cjs.Graphics().p("EAAzAjaQs8mCk1tZQk2tZGGs4QGHs8Ndk3MAXYBApQmCCLl7AAQnUAAnKjVg");
	var mask_graphics_288 = new cjs.Graphics().p("EAA/AjnQtBl4lBtVQlAtVF7s9QF8tBNalCMAYNBAVQmNCVmJAAQnGAAnAjIg");
	var mask_graphics_289 = new cjs.Graphics().p("EABLAjyQtFlslMtRQlMtQFxtDQFxtFNVlOMAZDBAAQmZCgmWAAQm5AAm1i9g");
	var mask_graphics_290 = new cjs.Graphics().p("EABYAj+QtLlilXtMQlXtMFntIQFmtKNRlZMAZ4A/rQmkCrmkAAQmrAAmqixg");
	var mask_graphics_291 = new cjs.Graphics().p("EABkAkJQtPlXlhtHQlitIFbtMQFctPNMlkMAatA/VQmwC3mxAAQmeAAmfing");
	var mask_graphics_292 = new cjs.Graphics().p("EABxAkUQtTlMlttDQlttDFRtQQFRtTNIlwMAbhA+/Qm7DCm+AAQmRAAmUicg");
	var mask_graphics_293 = new cjs.Graphics().p("EAB+AkeQtXlAl4s+Ql4s+FGtVQFGtYNDl6MAcWA+nQnGDOnMAAQmEAAmIiSg");
	var mask_graphics_294 = new cjs.Graphics().p("EACMAkoQtck1mDs5QmCs5E7tZQE7tcM/mFMAdJA+PQnRDanaAAQl2AAl8iIg");
	var mask_graphics_295 = new cjs.Graphics().p("EACZAkyQtgkqmNs0QmNs0EwtdQEwtgM6mQMAd9A93QnbDmnoAAQlpAAlxh+g");
	var mask_graphics_296 = new cjs.Graphics().p("EACnAk7QtkkemXsvQmYsvEkthQEltkM1mbMAewA9eQnlDzn2AAQlcAAlkh1g");
	var mask_graphics_297 = new cjs.Graphics().p("EAC1AlEQtokTmispQmispEZtlQEatoMwmmMAfjA9EQnwEAoEAAQlOAAlYhsg");
	var mask_graphics_298 = new cjs.Graphics().p("EADDAlNQtrkHmtskQmsskENtpQEPtrMrmwMAgVA8pQn5ENoSAAQlCAAlLhjg");
	var mask_graphics_299 = new cjs.Graphics().p("EADSAlWQtvj8m3sfQm3seECtsQEDtvMmm7MAhHA8OQoCEbohAAQk0AAk+hag");
	var mask_graphics_300 = new cjs.Graphics().p("EADgAleQtyjxnBsYQnCsZD4tvQD3tyMgnGMAh6A7yQoMEpowAAQknAAkxhSg");
	var mask_graphics_301 = new cjs.Graphics().p("EADvAllQt1jlnMsSQnMsTDstyQDtt2ManQMAirA7WQoVE3o/AAQkZAAkkhLg");
	var mask_graphics_302 = new cjs.Graphics().p("EAD+AltQt4janWsMQnWsNDht1QDht5MTnaMAjdA64QoeFGpNAAQkNAAkWhDg");
	var mask_graphics_303 = new cjs.Graphics().p("EAENAl0Qt7jOngsGQngsHDVt4QDWt8MOnkMAkNA6aQomFVpdAAQj/AAkJg8g");
	var mask_graphics_304 = new cjs.Graphics().p("EAEdAl7Qt+jDnqsAQnqsADJt7QDKt+MInvMAk+A58QovFkpsAAQjyAAj6g1g");
	var mask_graphics_305 = new cjs.Graphics().p("EAEsAmBQuAi3n0r5Qn0r6C+t+QC/uAMBn5MAltA5cQo2F0p9AAQjjAAjtgvg");
	var mask_graphics_306 = new cjs.Graphics().p("EAE8AmHQuDirn+rzQn+rzCzuAQCzuEL7oDMAmdA4+Qo+GDqNAAQjWAAjegpg");
	var mask_graphics_307 = new cjs.Graphics().p("EAFMAmMQuFieoIrtQoIrsCouDQCnuFL0oOMAnNA4dQpGGUqdAAQjIAAjQgkg");
	var mask_graphics_308 = new cjs.Graphics().p("EAFcAmSQuHiToSrmQoRrlCcuFQCbuILuoXMAn7A38QpNGlquAAQi6AAjBgfg");
	var mask_graphics_309 = new cjs.Graphics().p("EAFsAmWQuJiHobreQobrfCQuHQCQuKLnogMAopA3aQpUG2q+AAQisAAizgbg");
	var mask_graphics_310 = new cjs.Graphics().p("EAF9AmbQuLh7olrYQokrXCEuJQCFuMLfoqMApYA24QpcHHrPAAQieAAijgWg");
	var mask_graphics_311 = new cjs.Graphics().p("EAGNAmfQuMhvourRQourQB5uMQB5uMLYo0MAqFA2VQpiHZrhAAQiQAAiUgSg");
	var mask_graphics_312 = new cjs.Graphics().p("EAGeAmjQuOhko3rJQo3rJBtuNQBtuOLRo+MAqyA1zQppHqrzAAQiAAAiFgOg");
	var mask_graphics_313 = new cjs.Graphics().p("EAGvAmmQuPhXpBrCQpArCBhuOQBiuPLJpIMArfA1PQpvH8sFAAQhyAAh1gLg");
	var mask_graphics_314 = new cjs.Graphics().p("EAHAAmpQuQhMpKq6QpJq6BVuPQBWuRLCpRMAsKA0qQp0IPsYAAQhjAAhlgIg");
	var mask_graphics_315 = new cjs.Graphics().p("EAHSAmsQuShApTqyQpSqzBKuRQBJuRK7paMAs2A0EQp6IisrAAQhTAAhVgFg");
	var mask_graphics_316 = new cjs.Graphics().p("EAHjAmuQuSg0pcqqQpbqrA+uSQA+uTKzpjMAthAzfQp/I1s/AAQhEAAhFgDg");
	var mask_graphics_317 = new cjs.Graphics().p("EAH1AmvQuUgnpkqjQpkqiAyuTQAyuUKrpsMAuMAy5QqEJJtTAAQg0AAg0gDg");
	var mask_graphics_318 = new cjs.Graphics().p("EAIGAmxQuTgcptqaQptqbAmuTQAmuUKkp1MAu1AySQqIJctoAAIhIgBg");
	var mask_graphics_319 = new cjs.Graphics().p("EAIYAmyQuUgQp1qSQp2qTAbuUQAauUKbp+MAvgAxrQqOJwt8AAIgnAAg");
	var mask_graphics_320 = new cjs.Graphics().p("EAIqAmyQuUgDp+qKQp+qKAPuVQAOuVKTqGMAwJAxDQqSKEuSAAIgFAAg");
	var mask_graphics_321 = new cjs.Graphics().p("Avec5QqHqCADuUQADuVKLqQMAwwAwbQqKKPuVALIgZAAQuEAAp+p6g");
	var mask_graphics_322 = new cjs.Graphics().p("AvUdOQqPp6gJuUQgJuWKCqYMAxZAvyQqCKYuVAWIg6ABQtvAAp6plg");
	var mask_graphics_323 = new cjs.Graphics().p("AvKdiQqXpxgUuVQgVuVJ5qgMAyBAvIQp6KguVAjQgtABgtAAQtbAAp2pRg");
	var mask_graphics_324 = new cjs.Graphics().p("Au/d1QqfpogguUQghuVJxqpMAynAufQpxKouUAvQg+ADg9AAQtGAApyo/g");
	var mask_graphics_325 = new cjs.Graphics().p("AuzeJQqnpggtuUQgsuUJoqxMAzOAt0QpoKxuUA6QhPAFhMAAQsyAAptorg");
	var mask_graphics_326 = new cjs.Graphics().p("AuoecQqupXg5uTQg4uUJfq5MAz0AtJQpfK5uUBHQheAHhcAAQsfAApooZg");
	var mask_graphics_327 = new cjs.Graphics().p("AucevQq2pOhEuSQhEuUJWrBMA0ZAseQpWLBuTBSQhuAKhrAAQsMAApjoGg");
	var mask_graphics_328 = new cjs.Graphics().p("AuPfBQq+pEhQuSQhQuSJNrJMA0+AryQpNLJuRBeQh+ANh6AAQr6AApdn1g");
	var mask_graphics_329 = new cjs.Graphics().p("AuCfTQrGo7hbuRQhcuRJErRMA1iArGQpELRuQBqQiOAQiIAAQrnAApYnjg");
	var mask_graphics_330 = new cjs.Graphics().p("At1flQrNoyhnuPQhouRI7rYMA2FAqZQo6LYuPB3QicAUiXAAQrWAApSnSg");
	var mask_graphics_331 = new cjs.Graphics().p("Atnf3QrUophzuOQh0uPIyrgMA2oApsQoxLguNCCQisAYilAAQrFAApLnAg");
	var mask_graphics_332 = new cjs.Graphics().p("EgNZAgIQrbofh/uNQh/uNIornMA3KAo+QooLnuLCOQi7AdizAAQqzAApFmwg");
	var mask_graphics_333 = new cjs.Graphics().p("EgNKAgZQrjoViKuMQiLuLIervMA3tAoQQofLuuJCaQjKAijBAAQqiAAo+mfg");
	var mask_graphics_334 = new cjs.Graphics().p("EgM8AgqQrpoMiWuJQiXuKIVr2MA4OAnhQoVL2uICmQjXAnjPAAQqSAAo4mPg");
	var mask_graphics_335 = new cjs.Graphics().p("EgMsAg6QrwoCiiuHQijuJILr8MA4uAmyQoKL9uGCxQjmAtjcAAQqCAAowl/g");
	var mask_graphics_336 = new cjs.Graphics().p("EgMdAhLQr2n5iuuFQiuuGIBsEMA5OAmDQoBMDuDC+Qj0AzjqAAQpyAAoplvg");
	var mask_graphics_337 = new cjs.Graphics().p("EgMNAhaQr9nui5uDQi6uEH3sKMA5uAlSQn3MLuBDJQkCA6j3AAQpjAAohlhg");
	var mask_graphics_338 = new cjs.Graphics().p("EgL8AhqQsEnljFuBQjFuBHtsRMA6MAkjQntMRt+DVQkPBAkFAAQpTAAoZlRg");
	var mask_graphics_339 = new cjs.Graphics().p("EgLsAh5QsJnajRt/QjRt/HjsXMA6rAjyQnjMXt7DhQkeBIkRAAQpFAAoRlDg");
	var mask_graphics_340 = new cjs.Graphics().p("EgLbAiIQsPnQjct8Qjdt8HZseMA7IAjBQnZMet4DsQkrBPkfAAQo1AAoJk0g");
	var mask_graphics_341 = new cjs.Graphics().p("EgLJAiWQsWnGjnt4Qjot6HOskMA7lAiQQnPMkt1D4Qk3BXksAAQonAAoAkng");
	var mask_graphics_342 = new cjs.Graphics().p("EgK3AilQscm8jzt2Qjzt2HEsrMA8AAheQnDMqtyEEQlFBfk5AAQoYAAn3kYg");
	var mask_graphics_343 = new cjs.Graphics().p("EgKlAizQshmyj/tzQj/t0G6svMA8cAgsQm5MwtvEPQlRBolGAAQoKAAnukLg");
	var mask_graphics_344 = new cjs.Graphics().p("EgKTAjAQsmmnkKtvQkKtxGus1MA84Af5QmvM2trEbQleBwlTAAQn8AAnlj+g");
	var mask_graphics_345 = new cjs.Graphics().p("EgKAAjOQssmdkVtsQkWtuGls6MA9RAfGQmkM8toEmQlqB6lfAAQnvAAnbjxg");
	var mask_graphics_346 = new cjs.Graphics().p("EgJsAjbQsymSkgtpQkhtqGZtAMA9rAeTQmZNBtkEyQl2CDltAAQngAAnRjkg");
	var mask_graphics_347 = new cjs.Graphics().p("EgJZAjnQs3mHkrtlQkstmGOtGMA+EAdgQmPNGtfE+QmCCNl6AAQnTAAnHjZg");
	var mask_graphics_348 = new cjs.Graphics().p("EgJFAj0Qs8l9k3thQk3tjGEtKMA+cAcrQmENMtbFJQmOCXmGAAQnGAAm9jMg");
	var mask_graphics_349 = new cjs.Graphics().p("EgIxAkAQtAlylCtdQlDtfF5tQMA+0Ab4Ql5NRtXFUQmZChmUAAQm4ABmzjBg");
	var mask_graphics_350 = new cjs.Graphics().p("EgIcAkLQtFlnlOtYQlNtbFutVMA/KAbDQluNWtTFfQmkCtmgAAQmrAAmoi2g");
	var mask_graphics_351 = new cjs.Graphics().p("EgIHAkXQtKlclYtVQlZtWFjtaMA/gAaPQljNatOFrQmvC3mtAAQmeAAmdiqg");
	var mask_graphics_352 = new cjs.Graphics().p("EgHyAkiQtOlRljtQQlktSFXtfMA/2AZaQlXNftKF2Qm5DDm7AAQmRAAmSigg");
	var mask_graphics_353 = new cjs.Graphics().p("EgHcAksQtTlGlutLQlvtNFNtkMBAKAYlQlMNktFGAQnEDPnIAAQmDAAmHiWg");
	var mask_graphics_354 = new cjs.Graphics().p("EgHGAk3QtXk7l5tHQl6tJFBtnMBAfAXvQlBNos/GMQnPDanWAAQl2AAl7iLg");
	var mask_graphics_355 = new cjs.Graphics().p("EgGwAlBQtbkwmEtCQmEtEE1tsMBAzAW5Qk2Nts6GXQnZDnnjAAQlpAAlwiCg");
	var mask_graphics_356 = new cjs.Graphics().p("EgGaAlKQtekkmPs9QmPs/EqtwMBBFAWDQkqNxs1GhQnjD0nwAAQlcAAllh5g");
	var mask_graphics_357 = new cjs.Graphics().p("EgGDAlUQtikZmas4Qmas6Egt0MBBWAVNQkfN1svGrQnsEBn+AAQlQAAlYhvg");
	var mask_graphics_358 = new cjs.Graphics().p("EgFsAldQtmkOmkszQmks0ETt4MBBpAUWQkUN5sqG2Qn1EPoMAAQlDAAlMhng");
	var mask_graphics_359 = new cjs.Graphics().p("EgFUAllQtqkCmusuQmwsuEJt8MBB4ATfQkIN9skHBQn+EcoaAAQk2AAk/hfg");
	var mask_graphics_360 = new cjs.Graphics().p("EgE9AluQtsj3m5soQm6sqD9t/MBCIASpQj8OAsfHMQoHEpooAAQkoAAk0hWg");
	var mask_graphics_361 = new cjs.Graphics().p("EgEkAl2QtwjsnEsiQnEskDxuCMBCYARxQjxODsYHXQoQE3o2AAQkdAAklhOg");
	var mask_graphics_362 = new cjs.Graphics().p("EgEMAl9QtzjgnOscQnOseDluGMBCmAQ6QjlOHsSHgQoYFHpFAAQkQAAkYhIg");
	var mask_graphics_363 = new cjs.Graphics().p("EgD0AmEQt1jUnYsXQnZsYDZuIMBC0AQCQjZOKsMHrQogFVpUAAQkCAAkMhBg");
	var mask_graphics_364 = new cjs.Graphics().p("EgDbAmLQt4jJnisQQnjsSDNuMMBDBAPLQjOONsFH1QooFkpiAAQj2AAj+g6g");
	var mask_graphics_365 = new cjs.Graphics().p("EgDBAmSQt7i+ntsKQntsLDCuPMBDNAOTQjCOPr/IAQovFzpxAAQjpAAjwgzg");
	var mask_graphics_366 = new cjs.Graphics().p("EgCoAmYQt9iyn3sEQn3sFC2uRMBDZANbQi2OSr5IJQo3GDqAABQjbAAjjgug");
	var mask_graphics_367 = new cjs.Graphics().p("EgCOAmeQuAimoAr+QoCr/CruTMBDjAMiQiqOVrxITQo+GUqQAAQjOAAjVgog");
	var mask_graphics_368 = new cjs.Graphics().p("EgB0AmjQuCiaoKr3QoLr4CeuWMBDuALqQifOXrqIdQpFGkqgAAQjAAAjHgjg");
	var mask_graphics_369 = new cjs.Graphics().p("EgBaAmoQuEiPoUrwQoVrxCTuYMBD3AKyQiTOZrjInQpMG0qvAAQizAAi5geg");
	var mask_graphics_370 = new cjs.Graphics().p("EgBAAmtQuFiDoerpQoerrCGuaMBEAAJ5QiHObrcIxQpSHFrAAAQilAAirgZg");
	var mask_graphics_371 = new cjs.Graphics().p("EgAlAmyQuHh4onriQoprkB7ucMBEHAJBQh6OdrVI6QpYHWrQAAQiYAAicgUg");
	var mask_graphics_372 = new cjs.Graphics().p("EgAKAm2QuIhsoxrbQoyrdBuueMBEPAIIQhvOfrNJEQpdHnriABQiKAAiNgRg");
	var mask_graphics_373 = new cjs.Graphics().p("EAAQAm5QuIhgo7rUQo7rVBiuhMBEVAHRQhiOgrGJNQpjH6rzAAQh7AAiAgOg");
	var mask_graphics_374 = new cjs.Graphics().p("EAAsAm8QuKhUpErNQpFrNBXuiMBEaAGXQhWOiq+JWQpoIMsFAAQhtAAhwgLg");
	var mask_graphics_375 = new cjs.Graphics().p("EABIAm/QuLhIpNrFQpOrHBKujMBEfAFeQhKOjq2JgQptIesXAAQheAAhhgIg");
	var mask_graphics_376 = new cjs.Graphics().p("EABkAnCQuMg9pWq+QpYq+A/ulMBEjAEmQg+OkquJpQpyIwspAAQhQAAhRgFg");
	var mask_graphics_377 = new cjs.Graphics().p("EACAAnEQuNgxpfq2Qpgq3AyulMBEnADsQgyOlqmJyQp2JDs8AAQhBAAhCgDg");
	var mask_graphics_378 = new cjs.Graphics().p("EACcAnFQuNglpoquQppqvAmumMBEpACzQgmOmqeJ7Qp6JWtPAAQgyAAgygCg");
	var mask_graphics_379 = new cjs.Graphics().p("EAC5AnHQuOgapxqmQpyqnAaumMBEsAB5QgaOnqWKEQp+JqtjAAIhEgBg");
	var mask_graphics_380 = new cjs.Graphics().p("EADVAnIQuNgOp6qeQp7qfAOunMBEtABBQgOOnqNKMQqCJ+t3AAIglAAg");
	var mask_graphics_381 = new cjs.Graphics().p("EADyAnIQuNgBqDqWQqDqXABuoMBEtAAIQgBOnqFKVQqEKSuMAAIgFAAg");
	var mask_graphics_382 = new cjs.Graphics().p("A0JdFQqMqPgLunMBEtgAyQALOnp8KeQp+KcuOAKIgdAAQt7AAqBqDg");
	var mask_graphics_383 = new cjs.Graphics().p("Az0dZQqVqHgXunMBEsgBrQAXOnpzKmQp1KluOAWIg8ABQtoAAp9pwg");
	var mask_graphics_384 = new cjs.Graphics().p("AzfdsQqdp+gjunMBEqgCkQAjOnpqKuQpsKtuOAiQguACguAAQtTAAp6pdg");
	var mask_graphics_385 = new cjs.Graphics().p("AzKeAQqlp2gvumMBEngDeQAwOnpiK2QpjK1uNAuQg+ADg9AAQtAAAp2pJg");
	var mask_graphics_386 = new cjs.Graphics().p("Ay0eTQquptg7umMBEkgEWQA8OmpZK+QpZK9uNA6QhOAEhLAAQstAApyo2g");
	var mask_graphics_387 = new cjs.Graphics().p("AyfelQq1pjhHumMBEggFPQBHOlpPLGQpQLFuMBGQhdAHhbAAQsaAApuolg");
	var mask_graphics_388 = new cjs.Graphics().p("AyJe4Qq9pbhTulMBEbgGIQBUOlpGLOQpHLMuLBRQhsAKhpAAQsJAAppoSg");
	var mask_graphics_389 = new cjs.Graphics().p("AxyfKQrFpShgukMBEWgHBQBgOko9LVQo+LVuKBdQh6AMh4AAQr3AApjoAg");
	var mask_graphics_390 = new cjs.Graphics().p("AxcfcQrNpJhsuiMBEQgH6QBsOiozLdQo0LcuJBpQiKAQiFAAQrlAApfnvg");
	var mask_graphics_391 = new cjs.Graphics().p("AxFfuQrVpAh4uhMBEJgIyQB4OgopLlQorLjuHB0QiYAUiUAAQrUAApZndg");
	var mask_graphics_392 = new cjs.Graphics().p("Awuf/Qrco2iEugMBEBgJrQCEOfogLsQohLquFCBQinAXihAAQrEAApTnMg");
	var mask_graphics_393 = new cjs.Graphics().p("EgQXAgQQrjotiRueMBD5gKjQCQOdoWLzQoXLxuECMQi1AdiuAAQq0AApNm8g");
	var mask_graphics_394 = new cjs.Graphics().p("EgQAAggQrqojiducMBDwgLcQCcOcoML5QoNL5uCCYQjDAhi8AAQqkAApHmsg");
	var mask_graphics_395 = new cjs.Graphics().p("EgPpAgxQrxoaioubMBDmgMTQCoOZoCMBQoEMAuACjQjRAmjJAAQqUAApBmbg");
	var mask_graphics_396 = new cjs.Graphics().p("EgPRAhBQr4oQi0uZMBDbgNMQC0OYn4MHQn5MHt+CvQjfArjWAAQqFAAo6mLg");
	var mask_graphics_397 = new cjs.Graphics().p("EgO5AhRQr/oGjAuXMBDPgOEQDBOWnuMOQnvMNt8C6QjsAyjkAAQp1AAozl8g");
	var mask_graphics_398 = new cjs.Graphics().p("EgOhAhgQsGn8jMuUMBDEgO8QDMOTnkMUQnlMUt4DGQj6A4jxAAQpmAAosltg");
	var mask_graphics_399 = new cjs.Graphics().p("EgOIAhvQsNnyjYuSMBC3gPzQDYOQnZMbQnbMat2DSQkHA+j+AAQpYAAojleg");
	var mask_graphics_400 = new cjs.Graphics().p("EgNwAh+QsTnojkuPMBCpgQrQDkOOnOMhQnRMgtzDdQkUBFkKAAQpKAAoclPg");
	var mask_graphics_401 = new cjs.Graphics().p("EgNXAiNQsZnejwuMMBCbgRjQDwOLnFMnQnFMmtxDpQkhBMkXAAQo7AAoUlAg");
	var mask_graphics_402 = new cjs.Graphics().p("EgM+AibQsgnUj7uJMBCMgSaQD7OIm5MtQm8MtttD0QktBTkkAAQotABoMkzg");
	var mask_graphics_403 = new cjs.Graphics().p("EgMlAipQsmnKkHuGMBB8gTQQEIOFmvMyQmxMytqEAQk6BckwAAQogAAoDklg");
	var mask_graphics_404 = new cjs.Graphics().p("EgMMAi2Qsrm/kUuCMBBsgUIQEUOCmlM4QmmM4tmELQlGBkk9AAQoSAAn7kYg");
	var mask_graphics_405 = new cjs.Graphics().p("EgLyAjEQsym1kft/MBBbgU+QEfN+mZM+QmbM9tkEWQlRBtlKAAQoFAAnxkKg");
	var mask_graphics_406 = new cjs.Graphics().p("EgLZAjRQs3mrkqt7MBBJgV0QEqN6mONEQmRNCtfEiQleB1lWAAQn3AAnpj9g");
	var mask_graphics_407 = new cjs.Graphics().p("EgK/AjdQs8mfk3t4MBA3gWqQE2N2mENJQmFNItcEtQlpB+ljAAQnqAAnfjxg");
	var mask_graphics_408 = new cjs.Graphics().p("EgKlAjqQtCmVlCt0MBAjgXgQFCNyl4NOQl7NNtXE4Ql1CIlwAAQncAAnWjkg");
	var mask_graphics_409 = new cjs.Graphics().p("EgKLAj2QtHmLlNtvMBAPgYWQFNNvltNSQlvNStUFDQmACSl9AAQnPAAnMjYg");
	var mask_graphics_410 = new cjs.Graphics().p("EgJxAkBQtMl/lZtrMA/7gZMQFZNrljNXQlkNXtPFOQmLCcmKAAQnCAAnCjNg");
	var mask_graphics_411 = new cjs.Graphics().p("EgJWAkNQtRl1lktnMA/lgaAQFkNmlXNcQlZNctLFZQmWCmmWAAQm2AAm3jBg");
	var mask_graphics_412 = new cjs.Graphics().p("EgI8AkYQtVlqlwtiMA/Pga1QFwNhlMNhQlONgtGFkQmgCwmkAAQmoAAmui1g");
	var mask_graphics_413 = new cjs.Graphics().p("EgIhAkiQtalel7teMA+4gbpQF7NclANmQlDNktBFvQmrC7mxAAQmbAAmjirg");
	var mask_graphics_414 = new cjs.Graphics().p("EgIGAktQtflUmGtZMA+hgcdQGGNYk1NpQk3Nps9F5Qm1DHm9AAQmPAAmYigg");
	var mask_graphics_415 = new cjs.Graphics().p("EgHrAk3QtjlImStUMA+JgdSQGSNTkqNtQksNts3GEQm/DTnLAAQmDAAmMiWg");
	var mask_graphics_416 = new cjs.Graphics().p("EgHQAlBQtnk+mdtOMA9wgeGQGdNOkeNyQkgNwszGPQnIDfnZAAQl2AAmBiMg");
	var mask_graphics_417 = new cjs.Graphics().p("EgG0AlKQtskymotKMA9Xge4QGoNJkTN1QkVN0stGaQnSDqnmAAQlpAAl1iCg");
	var mask_graphics_418 = new cjs.Graphics().p("EgGZAlTQtwknmytEMA88gfrQGzNDkHN5QkJN4soGkQnbD3n0AAQlcAAlqh5g");
	var mask_graphics_419 = new cjs.Graphics().p("EgF+AlcQtzkcm+s+MA8iggeQG+M+j7N8Qj+N7siGvQnlEEoBAAQlQAAlehwg");
	var mask_graphics_420 = new cjs.Graphics().p("EgFiAlkQt3kQnJs5MA8HghQQHJM4jwOAQjyN/sdG5QntEQoPAAQlEAAlRhng");
	var mask_graphics_421 = new cjs.Graphics().p("EgFGAlsQt7kEnTs0MA7rgiBQHTMzjkOBQjmODsXHDQn2EeodAAQk3AAlFhfg");
	var mask_graphics_422 = new cjs.Graphics().p("EgEqAl0Qt+j5nestMA7Ogi0QHeMtjZOFQjaOFsRHOQn+EsosAAQkrAAk3hXg");
	var mask_graphics_423 = new cjs.Graphics().p("EgEOAl7QuCjtnosoMA6wgjkQHpMnjNOIQjOOIsLHXQoGE6o6AAQkfAAkqhPg");
	var mask_graphics_424 = new cjs.Graphics().p("EgDyAmCQuFjinzshMA6TgkVQHzMhjBOKQjCOLsFHiQoOFIpJAAQkSAAkdhIg");
	var mask_graphics_425 = new cjs.Graphics().p("EgDWAmJQuIjXn9saMA50glGQH+Mbi1ONQi3ONr+HsQoWFWpYAAQkFAAkQhAg");
	var mask_graphics_426 = new cjs.Graphics().p("EgC6AmPQuKjLoIsUMA5Vgl1QIIMUipOPQirOQr4H1QodFmpnAAQj4AAkDg6g");
	var mask_graphics_427 = new cjs.Graphics().p("EgCeAmVQuNi/oSsNMA41gmlQITMNidORQifOSrxIAQolF0p3AAQjrAAj1gzg");
	var mask_graphics_428 = new cjs.Graphics().p("EgCCAmaQuPizodsGMA4VgnUQIdMGiROUQiTOUrqIJQosGEqGAAQjeAAjogug");
	var mask_graphics_429 = new cjs.Graphics().p("EgBlAmfQuSinonsAMA30goCQInL/iFOWQiHOWrkITQoyGTqWAAQjRAAjZgog");
	var mask_graphics_430 = new cjs.Graphics().p("EgBJAmkQuUicowr4MA3SgoxQIwL5h4OXQh7OYrdIcQo5GkqnAAQjDAAjLgjg");
	var mask_graphics_431 = new cjs.Graphics().p("EgAtAmpQuViQo7ryMA2wgpeQI7LxhtOZQhvOZrWImQo/G0q3AAQi2AAi9gdg");
	var mask_graphics_432 = new cjs.Graphics().p("EgAQAmtQuYiEpErqMA2NgqMQJELqhgOaQhjObrOIvQpGHFrIAAQioAAiugZg");
	var mask_graphics_433 = new cjs.Graphics().p("EAALAmwQuYh4pOriMA1pgq5QJPLihVOcQhWOcrII5QpLHVrZAAQiaAAihgVg");
	var mask_graphics_434 = new cjs.Graphics().p("EAAoAm0QuahtpYrbMA1GgrlQJYLbhJOdQhKOdrAJCQpRHnrrAAQiMAAiRgRg");
	var mask_graphics_435 = new cjs.Graphics().p("EABFAm3QuchhphrTMA0hgsRQJhLTg8OeQg+Oeq5JLQpWH4r9AAQh9AAiCgNg");
	var mask_graphics_436 = new cjs.Graphics().p("EABhAm5QudhUprrMMAz8gs8QJrLLgwOeQgyOgqwJUQpcIKsPAAQhvAAhzgLg");
	var mask_graphics_437 = new cjs.Graphics().p("EAB+Am7QuehIp1rEMAzXgtnQJ0LDgkOfQgmOgqpJdQpgIcsiAAQhgAAhjgIg");
	var mask_graphics_438 = new cjs.Graphics().p("EACaAm9Qufg9p9q7MAywguSQJ9K7gYOgQgZOgqhJmQpkIus3AAQhRAAhTgFg");
	var mask_graphics_439 = new cjs.Graphics().p("EAC3Am+QuggwqHqzMAyJgu8QKHKzgMOgQgNOgqZJvQpoJBtLAAQhBAAhDgEg");
	var mask_graphics_440 = new cjs.Graphics().p("EADTAm/QuggkqQqrMAxigvmQKQKrAAOgQgBOhqRJ3QpsJUtfAAQgyAAgzgCg");
	var mask_graphics_441 = new cjs.Graphics().p("EADwAnAQuhgZqZqiMAw6gwPQKZKjAMOgQALOhqIJ/QpwJot0AAIhEgBg");
	var mask_graphics_442 = new cjs.Graphics().p("EAEMAnAQuhgNqiqZMAwSgw3QKiKZAYOgQAXOhqAKIQpzJ7uJAAIgkAAg");
	var mask_graphics_443 = new cjs.Graphics().p("EAEoAnAQuhgBqqqRMAvogxfQKrKRAlOgQAjOhp4KQQp2KPufAAIgDAAg");
	var mask_graphics_444 = new cjs.Graphics().p("A0QdCMAvAgyGQKzKIAxOfQAvOhpvKYQpvKYugALIggAAQuNAAqop9g");
	var mask_graphics_445 = new cjs.Graphics().p("Az8dWMAuVgytQK8J/A9OfQA8OfpmKhQpmKguhAXIhBABQt5AAqjppg");
	var mask_graphics_446 = new cjs.Graphics().p("AzndqMAtqgzUQLEJ3BKOdQBHOfpdKoQpdKouhAkQgxABgwAAQtlAAqepUg");
	var mask_graphics_447 = new cjs.Graphics().p("AzTd9MAtAgz5QLMJtBWOdQBTOepUKwQpVKwufAvQhCADhBAAQtQAAqapBg");
	var mask_graphics_448 = new cjs.Graphics().p("Ay+eQMAsUg0eQLUJkBiObQBgOdpLK4QpMK3ufA7QhSAGhQAAQs+AAqUoug");
	var mask_graphics_449 = new cjs.Graphics().p("AyqeiMArpg1CQLcJaBuObQBsObpCLAQpDK/ueBHQhiAHhgAAQsqAAqQobg");
	var mask_graphics_450 = new cjs.Graphics().p("AyUe1MAq7g1nQLlJRB6OZQB4Oao5LHQo5LHueBTQhyAKhvAAQsYAAqJoIg");
	var mask_graphics_451 = new cjs.Graphics().p("Ax/fHMAqPg2KQLsJHCGOYQCFOYowLOQowLOudBfQiCAOh+AAQsGAAqDn2g");
	var mask_graphics_452 = new cjs.Graphics().p("AxqfZMApig2tQL0I9CSOXQCROWonLVQonLWubBqQiRARiNAAQr1AAp9njg");
	var mask_graphics_453 = new cjs.Graphics().p("AxUfqMAo0g3PQL8I0CeOVQCcOUodLcQodLcuaB3QihAVicAAQriAAp3nSg");
	var mask_graphics_454 = new cjs.Graphics().p("Aw+f7MAoGg3xQMDIrCqOSQCoOSoTLkQoULjuYCDQiwAZirAAQrRAApwnBg");
	var mask_graphics_455 = new cjs.Graphics().p("EgQoAgMMAnXg4SQMLIgC2ORQC0OQoKLqQoJLquXCPQi/Adi6AAQrAAAppmvg");
	var mask_graphics_456 = new cjs.Graphics().p("EgQRAgdMAmog4zQMRIWDCOPQDBONoALxQoALxuVCaQjPAjjHAAQqwAAphmeg");
	var mask_graphics_457 = new cjs.Graphics().p("EgP7AgtMAl5g5SQMYIMDOOLQDNOLn2L4Qn3L3uTCmQjdApjVAAQqgAApamOg");
	var mask_graphics_458 = new cjs.Graphics().p("EgPkAg9MAlJg5yQMfICDaOJQDYOInsL+QnsL+uRCyQjsAujkAAQqPAApSl9g");
	var mask_graphics_459 = new cjs.Graphics().p("EgPNAhMMAkZg6QQMmH4DmOGQDkOFnjMFQniMEuOC+Qj7A0jyAAQqAAApJlug");
	var mask_graphics_460 = new cjs.Graphics().p("EgO2AhcMAjog6uQMtHtDyODQDwOCnZMLQnYMKuMDKQkIA7kAAAQpxAApBleg");
	var mask_graphics_461 = new cjs.Graphics().p("EgOeAhrMAi2g7MQM0HjD9OAQD8N/nOMRQnOMQuKDWQkWBBkOAAQphAAo4lOg");
	var mask_graphics_462 = new cjs.Graphics().p("EgOGAh5MAiFg7oQM5HYEKN9QEHN8nEMXQnEMWuGDhQklBJkcAAQpSAAoulAg");
	var mask_graphics_463 = new cjs.Graphics().p("EgNvAiIMAhUg8EQNAHNEVN5QETN5m6McQm5McuEDtQkyBRkqAAQpDAAomkxg");
	var mask_graphics_464 = new cjs.Graphics().p("EgNXAiWMAgig8gQNGHDEgN2QEfN1mvMiQmvMhuBD5QlABYk3AAQo1AAockig");
	var mask_graphics_465 = new cjs.Graphics().p("EgM+AikMAfug87QNMG4EtNyQEqNxmlMoQmkMnt+EEQlNBhlGAAQolAAoSkUg");
	var mask_graphics_466 = new cjs.Graphics().p("EgMmAixMAe8g9UQNSGsE3NuQE3NumbMtQmaMtt6EPQlaBplUAAQoXAAoIkGg");
	var mask_graphics_467 = new cjs.Graphics().p("EgMNAi+MAeIg9uQNYGiFDNqQFCNpmQMzQmPMyt3EaQlnBzliAAQoIAAn+j5g");
	var mask_graphics_468 = new cjs.Graphics().p("EgL0AjLMAdUg+HQNeGXFONmQFNNlmEM3QmFM3t0EnQlzB8lwAAQn6AAnzjsg");
	var mask_graphics_469 = new cjs.Graphics().p("EgLcAjXMAcig+eQNiGLFaNiQFZNgl6M9Ql7M8tvEyQmACFl+AAQnsAAnpjfg");
	var mask_graphics_470 = new cjs.Graphics().p("EgLCAjjMAbtg+2QNnGBFmNdQFkNclwNBQlvNBtrE9QmNCQmMAAQneAAndjTg");
	var mask_graphics_471 = new cjs.Graphics().p("EgKpAjvMAa4g/NQNtF2FxNYQFvNXlkNGQllNGtnFIQmZCamaAAQnQAAnSjGg");
	var mask_graphics_472 = new cjs.Graphics().p("EgKQAj6MAaEg/iQNyFqF8NTQF6NTlZNKQlaNKtjFUQmlClmoAAQnCAAnHi7g");
	var mask_graphics_473 = new cjs.Graphics().p("EgJ2AkGMAZPg/4QN2FeGINOQGFNOlONPQlPNPtfFeQmxCwm2AAQm0AAm7iug");
	var mask_graphics_474 = new cjs.Graphics().p("EgJcAkQMAYZhAMQN8FTGSNJQGRNJlENTQlDNTtbFqQm8C7nFAAQmnAAmuikg");
	var mask_graphics_475 = new cjs.Graphics().p("EgJCAkbMAXkhAhQOAFHGdNEQGcNEk5NXQk4NXtWF1QnIDInTAAQmZAAmiiZg");
	var mask_graphics_476 = new cjs.Graphics().p("EgIoAklMAWuhA0QOEE8GoM+QGnM+ktNcQktNbtRGAQnUDTniAAQmKAAmWiOg");
	var mask_graphics_477 = new cjs.Graphics().p("EgIOAkvMAV4hBHQOJEwGzM5QGxM5kiNfQkiNftMGLQneDgnxAAQl9AAmJiEg");
	var mask_graphics_478 = new cjs.Graphics().p("EgHzAk4MAVBhBYQONEkG+MzQG8MzkXNjQkXNjtGGWQnpDsoAAAQlvAAl8h6g");
	var mask_graphics_479 = new cjs.Graphics().p("EgHZAlBMAULhBpQOREYHIMuQHIMtkMNmQkLNmtCGhQn0D6oPAAQlhAAlvhxg");
	var mask_graphics_480 = new cjs.Graphics().p("EgG+AlKMATUhB6QOUENHUMnQHSMnkBNqQkANqs8GrQn+EHofAAQlTAAlhhng");
	var mask_graphics_481 = new cjs.Graphics().p("EgGjAlSMASdhCKQOYEBHeMiQHcMhj1NtQj0Nts3G2QoIEVouAAQlGAAlThfg");
	var mask_graphics_482 = new cjs.Graphics().p("EgGIAlaMARmhCZQObD1HpMbQHnMcjqNvQjpNwsxHBQoTEjo9AAQk4AAlFhWg");
	var mask_graphics_483 = new cjs.Graphics().p("EgFtAliMAQvhCnQOeDpHzMUQHxMWjeNyQjdNzssHLQocEypOAAQkpAAk3hOg");
	var mask_graphics_484 = new cjs.Graphics().p("EgFSAlpMAP3hC1QOiDdH9MPQH8MPjTN0QjSN2smHWQolFApeAAQkbAAkphGg");
	var mask_graphics_485 = new cjs.Graphics().p("EgE3AlwMAPAhDCQOkDRIIMIQIGMIjHN4QjHN4sfHgQovFQpuAAQkOAAkag/g");
	var mask_graphics_486 = new cjs.Graphics().p("EgEcAl2MAOIhDNQOoDFIRMAQIRMCi8N6Qi7N7sZHqQo4Ffp/AAQj/AAkMg4g");
	var mask_graphics_487 = new cjs.Graphics().p("EgEAAl8MANQhDYQOqC4IcL6QIaL7iwN8QiwN9sTH1QpAFvqQAAQjxAAj8gyg");
	var mask_graphics_488 = new cjs.Graphics().p("EgDlAmCMAMYhDjQOtCsIlLzQIlL0ikN+QikOAsNH/QpJF+qiAAQjjAAjsgrg");
	var mask_graphics_489 = new cjs.Graphics().p("EgDJAmHMALfhDtQOvCgIwLsQIuLtiYOAQiZOCsGIJQpRGPqzAAQjVAAjcgmg");
	var mask_graphics_490 = new cjs.Graphics().p("EgCtAmMMAKnhD2QOxCUI5LkQI4LliMODQiNODr/ITQpaGhrFAAQjGAAjMghg");
	var mask_graphics_491 = new cjs.Graphics().p("EgCSAmRMAJvhD/QOzCIJDLdQJCLdiBOFQiBOFr4IdQpiGxrYAAQi2AAi9gbg");
	var mask_graphics_492 = new cjs.Graphics().p("EgB2AmVMAI2hEGQO1B7JNLVQJMLXh2OFQh1OHryInQppHDrqAAQinAAitgXg");
	var mask_graphics_493 = new cjs.Graphics().p("EgBaAmZMAH9hENQO3BvJWLNQJVLPhpOHQhqOIrqIxQpxHUr9AAQiYAAicgSg");
	var mask_graphics_494 = new cjs.Graphics().p("EgA+AmdMAHEhEUQO5BiJfLGQJfLHheOIQheOKrjI6Qp3HnsSAAQiIAAiLgOg");
	var mask_graphics_495 = new cjs.Graphics().p("EgAiAmgMAGLhEaQO6BXJpK9QJoK/hSOKQhSOLrcJDQp+H6smAAQh3AAh7gLg");
	var mask_graphics_496 = new cjs.Graphics().p("EgAGAmiMAFShEeQO7BKJzK2QJxK3hGOKQhHOMrUJNQqFIMs6AAQhoAAhpgIg");
	var mask_graphics_497 = new cjs.Graphics().p("EAAVAmlMAEbhEjQO8A+J7KtQJ6Kvg6OLQg7ONrNJWQqLIgtPAAQhXAAhZgFg");
	var mask_graphics_498 = new cjs.Graphics().p("EAAxAmmMADihElQO9AxKEKlQKDKngvOMQguONrFJgQqSIztkAAQhGAAhIgEg");
	var mask_graphics_499 = new cjs.Graphics().p("EABNAmnMACohEoQO9AlKOKdQKMKegjOMQgjOOq9JpQqXJHt7AAQg1AAg1gCg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(259).to({graphics:mask_graphics_259,x:139.4,y:247.5}).wait(1).to({graphics:mask_graphics_260,x:137.9,y:247.5}).wait(1).to({graphics:mask_graphics_261,x:138.4,y:247.5}).wait(1).to({graphics:mask_graphics_262,x:139.8,y:247.5}).wait(1).to({graphics:mask_graphics_263,x:141.2,y:247.5}).wait(1).to({graphics:mask_graphics_264,x:142.6,y:247.5}).wait(1).to({graphics:mask_graphics_265,x:144,y:247.5}).wait(1).to({graphics:mask_graphics_266,x:145.4,y:247.5}).wait(1).to({graphics:mask_graphics_267,x:146.8,y:247.5}).wait(1).to({graphics:mask_graphics_268,x:148.2,y:247.6}).wait(1).to({graphics:mask_graphics_269,x:149.6,y:247.6}).wait(1).to({graphics:mask_graphics_270,x:151,y:247.6}).wait(1).to({graphics:mask_graphics_271,x:152.4,y:247.6}).wait(1).to({graphics:mask_graphics_272,x:153.8,y:247.6}).wait(1).to({graphics:mask_graphics_273,x:155.2,y:247.7}).wait(1).to({graphics:mask_graphics_274,x:156.6,y:247.7}).wait(1).to({graphics:mask_graphics_275,x:158,y:247.7}).wait(1).to({graphics:mask_graphics_276,x:159.3,y:247.7}).wait(1).to({graphics:mask_graphics_277,x:160.7,y:247.7}).wait(1).to({graphics:mask_graphics_278,x:162.1,y:247.8}).wait(1).to({graphics:mask_graphics_279,x:163.5,y:247.8}).wait(1).to({graphics:mask_graphics_280,x:164.8,y:247.8}).wait(1).to({graphics:mask_graphics_281,x:166.2,y:247.8}).wait(1).to({graphics:mask_graphics_282,x:167.5,y:247.8}).wait(1).to({graphics:mask_graphics_283,x:168.9,y:247.8}).wait(1).to({graphics:mask_graphics_284,x:170.2,y:247.9}).wait(1).to({graphics:mask_graphics_285,x:171.6,y:247.9}).wait(1).to({graphics:mask_graphics_286,x:172.9,y:247.9}).wait(1).to({graphics:mask_graphics_287,x:174.2,y:247.9}).wait(1).to({graphics:mask_graphics_288,x:175.5,y:247.9}).wait(1).to({graphics:mask_graphics_289,x:176.8,y:247.9}).wait(1).to({graphics:mask_graphics_290,x:178.1,y:247.9}).wait(1).to({graphics:mask_graphics_291,x:179.4,y:248}).wait(1).to({graphics:mask_graphics_292,x:180.7,y:248}).wait(1).to({graphics:mask_graphics_293,x:182,y:248}).wait(1).to({graphics:mask_graphics_294,x:183.3,y:248}).wait(1).to({graphics:mask_graphics_295,x:184.6,y:248}).wait(1).to({graphics:mask_graphics_296,x:185.8,y:248}).wait(1).to({graphics:mask_graphics_297,x:187.1,y:248}).wait(1).to({graphics:mask_graphics_298,x:188.3,y:248}).wait(1).to({graphics:mask_graphics_299,x:189.5,y:248}).wait(1).to({graphics:mask_graphics_300,x:190.8,y:248}).wait(1).to({graphics:mask_graphics_301,x:192,y:248}).wait(1).to({graphics:mask_graphics_302,x:193.2,y:248}).wait(1).to({graphics:mask_graphics_303,x:194.4,y:248}).wait(1).to({graphics:mask_graphics_304,x:195.6,y:248}).wait(1).to({graphics:mask_graphics_305,x:196.7,y:248}).wait(1).to({graphics:mask_graphics_306,x:197.9,y:248}).wait(1).to({graphics:mask_graphics_307,x:199.1,y:248}).wait(1).to({graphics:mask_graphics_308,x:200.2,y:248.1}).wait(1).to({graphics:mask_graphics_309,x:201.3,y:248.1}).wait(1).to({graphics:mask_graphics_310,x:202.5,y:248.1}).wait(1).to({graphics:mask_graphics_311,x:203.6,y:248.1}).wait(1).to({graphics:mask_graphics_312,x:204.7,y:248.1}).wait(1).to({graphics:mask_graphics_313,x:205.8,y:248.1}).wait(1).to({graphics:mask_graphics_314,x:206.8,y:248.1}).wait(1).to({graphics:mask_graphics_315,x:207.9,y:248.1}).wait(1).to({graphics:mask_graphics_316,x:209,y:248.1}).wait(1).to({graphics:mask_graphics_317,x:210,y:248.2}).wait(1).to({graphics:mask_graphics_318,x:211,y:248.2}).wait(1).to({graphics:mask_graphics_319,x:212.1,y:248.2}).wait(1).to({graphics:mask_graphics_320,x:213.1,y:248.2}).wait(1).to({graphics:mask_graphics_321,x:214,y:248.3}).wait(1).to({graphics:mask_graphics_322,x:215,y:248.3}).wait(1).to({graphics:mask_graphics_323,x:216,y:248.3}).wait(1).to({graphics:mask_graphics_324,x:216.9,y:248.4}).wait(1).to({graphics:mask_graphics_325,x:217.9,y:248.4}).wait(1).to({graphics:mask_graphics_326,x:218.8,y:248.5}).wait(1).to({graphics:mask_graphics_327,x:219.7,y:248.5}).wait(1).to({graphics:mask_graphics_328,x:220.6,y:248.6}).wait(1).to({graphics:mask_graphics_329,x:221.5,y:248.6}).wait(1).to({graphics:mask_graphics_330,x:222.3,y:248.7}).wait(1).to({graphics:mask_graphics_331,x:223.2,y:248.7}).wait(1).to({graphics:mask_graphics_332,x:224,y:248.8}).wait(1).to({graphics:mask_graphics_333,x:224.9,y:248.8}).wait(1).to({graphics:mask_graphics_334,x:225.7,y:248.9}).wait(1).to({graphics:mask_graphics_335,x:226.4,y:248.9}).wait(1).to({graphics:mask_graphics_336,x:227.2,y:249}).wait(1).to({graphics:mask_graphics_337,x:228,y:249.1}).wait(1).to({graphics:mask_graphics_338,x:228.7,y:249.1}).wait(1).to({graphics:mask_graphics_339,x:229.5,y:249.2}).wait(1).to({graphics:mask_graphics_340,x:230.2,y:249.2}).wait(1).to({graphics:mask_graphics_341,x:230.9,y:249.3}).wait(1).to({graphics:mask_graphics_342,x:231.5,y:249.3}).wait(1).to({graphics:mask_graphics_343,x:232.2,y:249.4}).wait(1).to({graphics:mask_graphics_344,x:232.9,y:249.4}).wait(1).to({graphics:mask_graphics_345,x:233.5,y:249.5}).wait(1).to({graphics:mask_graphics_346,x:234.1,y:249.5}).wait(1).to({graphics:mask_graphics_347,x:234.7,y:249.6}).wait(1).to({graphics:mask_graphics_348,x:235.3,y:249.6}).wait(1).to({graphics:mask_graphics_349,x:235.9,y:249.6}).wait(1).to({graphics:mask_graphics_350,x:236.4,y:249.7}).wait(1).to({graphics:mask_graphics_351,x:236.9,y:249.7}).wait(1).to({graphics:mask_graphics_352,x:237.4,y:249.8}).wait(1).to({graphics:mask_graphics_353,x:237.9,y:249.8}).wait(1).to({graphics:mask_graphics_354,x:238.4,y:249.8}).wait(1).to({graphics:mask_graphics_355,x:238.9,y:249.9}).wait(1).to({graphics:mask_graphics_356,x:239.3,y:249.9}).wait(1).to({graphics:mask_graphics_357,x:239.7,y:249.9}).wait(1).to({graphics:mask_graphics_358,x:240.2,y:250}).wait(1).to({graphics:mask_graphics_359,x:240.5,y:250}).wait(1).to({graphics:mask_graphics_360,x:240.9,y:250}).wait(1).to({graphics:mask_graphics_361,x:241.3,y:250}).wait(1).to({graphics:mask_graphics_362,x:241.6,y:250.1}).wait(1).to({graphics:mask_graphics_363,x:241.9,y:250.1}).wait(1).to({graphics:mask_graphics_364,x:242.2,y:250.1}).wait(1).to({graphics:mask_graphics_365,x:242.5,y:250.1}).wait(1).to({graphics:mask_graphics_366,x:242.8,y:250.2}).wait(1).to({graphics:mask_graphics_367,x:243,y:250.2}).wait(1).to({graphics:mask_graphics_368,x:243.3,y:250.2}).wait(1).to({graphics:mask_graphics_369,x:243.5,y:250.2}).wait(1).to({graphics:mask_graphics_370,x:243.7,y:250.2}).wait(1).to({graphics:mask_graphics_371,x:243.8,y:250.2}).wait(1).to({graphics:mask_graphics_372,x:244,y:250.3}).wait(1).to({graphics:mask_graphics_373,x:244.1,y:250.3}).wait(1).to({graphics:mask_graphics_374,x:244.2,y:250.3}).wait(1).to({graphics:mask_graphics_375,x:244.3,y:250.3}).wait(1).to({graphics:mask_graphics_376,x:244.4,y:250.3}).wait(1).to({graphics:mask_graphics_377,x:244.5,y:250.3}).wait(1).to({graphics:mask_graphics_378,x:244.5,y:250.3}).wait(1).to({graphics:mask_graphics_379,x:244.6,y:250.4}).wait(1).to({graphics:mask_graphics_380,x:244.6,y:250.4}).wait(1).to({graphics:mask_graphics_381,x:244.5,y:250.4}).wait(1).to({graphics:mask_graphics_382,x:244.5,y:250.4}).wait(1).to({graphics:mask_graphics_383,x:244.5,y:250.5}).wait(1).to({graphics:mask_graphics_384,x:244.5,y:250.5}).wait(1).to({graphics:mask_graphics_385,x:244.5,y:250.5}).wait(1).to({graphics:mask_graphics_386,x:244.5,y:250.5}).wait(1).to({graphics:mask_graphics_387,x:244.5,y:250.6}).wait(1).to({graphics:mask_graphics_388,x:244.5,y:250.6}).wait(1).to({graphics:mask_graphics_389,x:244.5,y:250.6}).wait(1).to({graphics:mask_graphics_390,x:244.5,y:250.7}).wait(1).to({graphics:mask_graphics_391,x:244.5,y:250.7}).wait(1).to({graphics:mask_graphics_392,x:244.5,y:250.7}).wait(1).to({graphics:mask_graphics_393,x:244.5,y:250.8}).wait(1).to({graphics:mask_graphics_394,x:244.5,y:250.8}).wait(1).to({graphics:mask_graphics_395,x:244.5,y:250.8}).wait(1).to({graphics:mask_graphics_396,x:244.5,y:250.8}).wait(1).to({graphics:mask_graphics_397,x:244.5,y:250.9}).wait(1).to({graphics:mask_graphics_398,x:244.5,y:250.9}).wait(1).to({graphics:mask_graphics_399,x:244.6,y:250.9}).wait(1).to({graphics:mask_graphics_400,x:244.6,y:250.9}).wait(1).to({graphics:mask_graphics_401,x:244.6,y:250.9}).wait(1).to({graphics:mask_graphics_402,x:244.6,y:250.9}).wait(1).to({graphics:mask_graphics_403,x:244.6,y:251}).wait(1).to({graphics:mask_graphics_404,x:244.6,y:251}).wait(1).to({graphics:mask_graphics_405,x:244.6,y:251}).wait(1).to({graphics:mask_graphics_406,x:244.7,y:251}).wait(1).to({graphics:mask_graphics_407,x:244.7,y:251}).wait(1).to({graphics:mask_graphics_408,x:244.7,y:251}).wait(1).to({graphics:mask_graphics_409,x:244.7,y:251}).wait(1).to({graphics:mask_graphics_410,x:244.7,y:251}).wait(1).to({graphics:mask_graphics_411,x:244.7,y:251}).wait(1).to({graphics:mask_graphics_412,x:244.7,y:250.9}).wait(1).to({graphics:mask_graphics_413,x:244.8,y:250.9}).wait(1).to({graphics:mask_graphics_414,x:244.8,y:250.9}).wait(1).to({graphics:mask_graphics_415,x:244.8,y:250.9}).wait(1).to({graphics:mask_graphics_416,x:244.8,y:250.9}).wait(1).to({graphics:mask_graphics_417,x:244.8,y:250.8}).wait(1).to({graphics:mask_graphics_418,x:244.8,y:250.8}).wait(1).to({graphics:mask_graphics_419,x:244.8,y:250.8}).wait(1).to({graphics:mask_graphics_420,x:244.8,y:250.7}).wait(1).to({graphics:mask_graphics_421,x:244.9,y:250.7}).wait(1).to({graphics:mask_graphics_422,x:244.9,y:250.7}).wait(1).to({graphics:mask_graphics_423,x:244.9,y:250.6}).wait(1).to({graphics:mask_graphics_424,x:244.9,y:250.6}).wait(1).to({graphics:mask_graphics_425,x:244.9,y:250.5}).wait(1).to({graphics:mask_graphics_426,x:244.9,y:250.5}).wait(1).to({graphics:mask_graphics_427,x:244.9,y:250.4}).wait(1).to({graphics:mask_graphics_428,x:245,y:250.4}).wait(1).to({graphics:mask_graphics_429,x:245,y:250.3}).wait(1).to({graphics:mask_graphics_430,x:245,y:250.3}).wait(1).to({graphics:mask_graphics_431,x:245,y:250.2}).wait(1).to({graphics:mask_graphics_432,x:245,y:250.2}).wait(1).to({graphics:mask_graphics_433,x:245.1,y:250.1}).wait(1).to({graphics:mask_graphics_434,x:245.1,y:250.1}).wait(1).to({graphics:mask_graphics_435,x:245.1,y:250}).wait(1).to({graphics:mask_graphics_436,x:245.2,y:250}).wait(1).to({graphics:mask_graphics_437,x:245.2,y:249.9}).wait(1).to({graphics:mask_graphics_438,x:245.2,y:249.8}).wait(1).to({graphics:mask_graphics_439,x:245.3,y:249.8}).wait(1).to({graphics:mask_graphics_440,x:245.3,y:249.7}).wait(1).to({graphics:mask_graphics_441,x:245.4,y:249.7}).wait(1).to({graphics:mask_graphics_442,x:245.4,y:249.6}).wait(1).to({graphics:mask_graphics_443,x:245.5,y:249.6}).wait(1).to({graphics:mask_graphics_444,x:245.5,y:249.5}).wait(1).to({graphics:mask_graphics_445,x:245.6,y:249.5}).wait(1).to({graphics:mask_graphics_446,x:245.6,y:249.4}).wait(1).to({graphics:mask_graphics_447,x:245.7,y:249.4}).wait(1).to({graphics:mask_graphics_448,x:245.8,y:249.4}).wait(1).to({graphics:mask_graphics_449,x:245.8,y:249.3}).wait(1).to({graphics:mask_graphics_450,x:245.9,y:249.3}).wait(1).to({graphics:mask_graphics_451,x:246,y:249.3}).wait(1).to({graphics:mask_graphics_452,x:246,y:249.2}).wait(1).to({graphics:mask_graphics_453,x:246.1,y:249.2}).wait(1).to({graphics:mask_graphics_454,x:246.2,y:249.2}).wait(1).to({graphics:mask_graphics_455,x:246.2,y:249.1}).wait(1).to({graphics:mask_graphics_456,x:246.3,y:249.1}).wait(1).to({graphics:mask_graphics_457,x:246.4,y:249.1}).wait(1).to({graphics:mask_graphics_458,x:246.4,y:249}).wait(1).to({graphics:mask_graphics_459,x:246.5,y:249}).wait(1).to({graphics:mask_graphics_460,x:246.5,y:249}).wait(1).to({graphics:mask_graphics_461,x:246.6,y:248.9}).wait(1).to({graphics:mask_graphics_462,x:246.7,y:248.9}).wait(1).to({graphics:mask_graphics_463,x:246.7,y:248.9}).wait(1).to({graphics:mask_graphics_464,x:246.8,y:248.8}).wait(1).to({graphics:mask_graphics_465,x:246.8,y:248.8}).wait(1).to({graphics:mask_graphics_466,x:246.9,y:248.7}).wait(1).to({graphics:mask_graphics_467,x:247,y:248.7}).wait(1).to({graphics:mask_graphics_468,x:247,y:248.7}).wait(1).to({graphics:mask_graphics_469,x:247.1,y:248.6}).wait(1).to({graphics:mask_graphics_470,x:247.1,y:248.6}).wait(1).to({graphics:mask_graphics_471,x:247.1,y:248.5}).wait(1).to({graphics:mask_graphics_472,x:247.2,y:248.5}).wait(1).to({graphics:mask_graphics_473,x:247.2,y:248.4}).wait(1).to({graphics:mask_graphics_474,x:247.3,y:248.4}).wait(1).to({graphics:mask_graphics_475,x:247.3,y:248.4}).wait(1).to({graphics:mask_graphics_476,x:247.3,y:248.3}).wait(1).to({graphics:mask_graphics_477,x:247.4,y:248.3}).wait(1).to({graphics:mask_graphics_478,x:247.4,y:248.2}).wait(1).to({graphics:mask_graphics_479,x:247.4,y:248.2}).wait(1).to({graphics:mask_graphics_480,x:247.4,y:248.1}).wait(1).to({graphics:mask_graphics_481,x:247.5,y:248.1}).wait(1).to({graphics:mask_graphics_482,x:247.5,y:248}).wait(1).to({graphics:mask_graphics_483,x:247.5,y:248}).wait(1).to({graphics:mask_graphics_484,x:247.5,y:247.9}).wait(1).to({graphics:mask_graphics_485,x:247.5,y:247.9}).wait(1).to({graphics:mask_graphics_486,x:247.5,y:247.8}).wait(1).to({graphics:mask_graphics_487,x:247.5,y:247.8}).wait(1).to({graphics:mask_graphics_488,x:247.6,y:247.7}).wait(1).to({graphics:mask_graphics_489,x:247.6,y:247.7}).wait(1).to({graphics:mask_graphics_490,x:247.6,y:247.7}).wait(1).to({graphics:mask_graphics_491,x:247.6,y:247.6}).wait(1).to({graphics:mask_graphics_492,x:247.6,y:247.6}).wait(1).to({graphics:mask_graphics_493,x:247.6,y:247.5}).wait(1).to({graphics:mask_graphics_494,x:247.6,y:247.5}).wait(1).to({graphics:mask_graphics_495,x:247.6,y:247.5}).wait(1).to({graphics:mask_graphics_496,x:247.6,y:247.4}).wait(1).to({graphics:mask_graphics_497,x:247.6,y:247.4}).wait(1).to({graphics:mask_graphics_498,x:247.6,y:247.4}).wait(1).to({graphics:mask_graphics_499,x:247.5,y:247.3}).wait(176));

	// 2
	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(25,1,1).p("AaXj6QAQB6AACAQAALBnzHzQnyHzrCAAQhGAAhFgFQgCgBgCAAQk+gPk/ijQgEgDgFgCQjfh2jAjAQnynzAArBQAArCHynyQHVnVKLgd");
	this.shape_92.setTransform(275,275.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(25,1,1).p("AaXj5QAQB6AAB/QAALCnzHzQnyHyrCAAQmxAAlki8Qjfh2jAjAQnynzAArCQAArBHynzQHznzLBAAQLCAAHyHzQGYGYBLIjg");
	this.shape_93.setTransform(275,275.1);

	var maskedShapeInstanceList = [this.shape_92,this.shape_93];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_92}]},259).to({state:[{t:this.shape_93}]},32).wait(384));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_9 = new cjs.Graphics().p("ADG+BQN7gqKVJlQKTJnAsONQArOOpXKhQpXKjt6Aqg");
	var mask_1_graphics_10 = new cjs.Graphics().p("ACr9+QN6g2KcJdQKcJfA2OMQA3OOpPKoQpPKqt6A1g");
	var mask_1_graphics_11 = new cjs.Graphics().p("ACQ98QN5hAKkJVQKjJWBBOMQBCONpGKvQpHKxt5BBg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AB194QN4hMKrJNQKqJNBNOLQBNONo9K2Qo/K4t4BLg");
	var mask_1_graphics_13 = new cjs.Graphics().p("ABZ91QN4hWKyJEQKyJFBYOKQBYOLo1K+Qo2K/t4BWg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AA+9xQN2hhK6I8QK5I8BjOJQBjOKosLFQouLGt2Bhg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AAj9sQN1hsLBIzQK/I0BvOIQBuOIokLMQokLMt1Bsg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AAI9nQN0h3LHIqQLHIsB5OHQB5OGoaLSQocLUt0B3g");
	var mask_1_graphics_17 = new cjs.Graphics().p("AgT9hQNyiCLOIhQLOIjCEOGQCFOEoSLZQoTLatyCCg");
	var mask_1_graphics_18 = new cjs.Graphics().p("Agu9bQNwiNLVIZQLUIZCQOEQCQODoJLgQoKLgtxCNg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AhJ9UQNuiYLcIQQLbIQCaOCQCbOCoALlQoBLntvCXg");
	var mask_1_graphics_20 = new cjs.Graphics().p("Ahk9NQNsiiLjIGQLhIICmOAQClN/n2LsQn4LtttCig");
	var mask_1_graphics_21 = new cjs.Graphics().p("Ah/9FQNriuLoH+QLoH+CwN+QCxN9ntLyQnvLztrCug");
	var mask_1_graphics_22 = new cjs.Graphics().p("Aia89QNoi4LvH0QLuH1C8N8QC8N7nlL4QnlL5tpC4g");
	var mask_1_graphics_23 = new cjs.Graphics().p("Ai181QNmjCL1HqQL0HsDHN6QDHN4nbL+QncL/tnDDg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AjP8sQNjjNL7HhQL6HjDSN3QDSN2nSMEQnSMFtlDNg");
	var mask_1_graphics_25 = new cjs.Graphics().p("Ajq8iQNhjYMBHYQMAHZDdN0QDcN0nIMJQnJMLtiDYg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AkF8YQNfjjMGHPQMGHQDoNxQDnNwm+MPQnAMRtfDig");
	var mask_1_graphics_27 = new cjs.Graphics().p("Akf8NQNbjuMNHFQMLHGDzNvQDyNtm1MVQm2MWtcDtg");
	var mask_1_graphics_28 = new cjs.Graphics().p("Ak68CQNZj4MSG7QMRG8D9NsQD9NqmrMaQmsMbtaD4g");
	var mask_1_graphics_29 = new cjs.Graphics().p("AlU73QNWkCMXGxQMXGzEINoQEHNomhMfQmiMgtXECg");
	var mask_1_graphics_30 = new cjs.Graphics().p("Alu7rQNSkNMdGoQMcGpETNlQESNkmYMkQmYMltTENg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AmI7eQNPkYMiGeQMhGfEdNiQEdNgmNMpQmPMrtQEXg");
	var mask_1_graphics_32 = new cjs.Graphics().p("Ami7RQNMkiMnGUQMmGVEoNeQEnNdmDMuQmFMvtNEig");
	var mask_1_graphics_33 = new cjs.Graphics().p("Am87EQNIksMsGKQMrGLEzNaQEyNZl6MzQl6M0tJEsg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AnW62QNFk3MwGAQMxGBE9NXQE8NVlvM3QlxM5tFE3g");
	var mask_1_graphics_35 = new cjs.Graphics().p("Anv6oQNAlBM2F2QM1F3FHNTQFHNRllM8QlnM9tBFBg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AoJ6ZQM9lLM6FrQM5FuFSNOQFSNNlbNAQldNCs9FLg");
	var mask_1_graphics_37 = new cjs.Graphics().p("Aoi6KQM4lVM/FhQM+FjFcNKQFcNJlRNFQlSNGs6FVg");
	var mask_1_graphics_38 = new cjs.Graphics().p("Ao856QM1lfNDFXQNCFYFnNGQFmNFlHNIQlHNKs2Fgg");
	var mask_1_graphics_39 = new cjs.Graphics().p("ApV5qQMxlpNHFMQNGFPFxNBQFxNAk9NNQk9NOsxFpg");
	var mask_1_graphics_40 = new cjs.Graphics().p("Apu5ZQMsl0NLFDQNLFEF7M8QF7M8kyNQQkzNSstF0g");
	var mask_1_graphics_41 = new cjs.Graphics().p("AqG5IQMnl+NPE4QNPE6GFM4QGFM3koNUQkoNVspF+g");
	var mask_1_graphics_42 = new cjs.Graphics().p("Aqf42QMimINTEuQNTEvGPMzQGQMykeNXQkeNasjGHg");
	var mask_1_graphics_43 = new cjs.Graphics().p("Aq44kQMemSNXEjQNWElGZMuQGaMtkTNbQkUNdseGRg");
	var mask_1_graphics_44 = new cjs.Graphics().p("ArQ4SQMZmbNaEYQNaEaGjMpQGkMokJNfQkJNgsZGbg");
	var mask_1_graphics_45 = new cjs.Graphics().p("Aro3/QMUmlNdEOQNeEPGtMkQGtMjj+NhQj+NksVGlg");
	var mask_1_graphics_46 = new cjs.Graphics().p("AsA3rQMOmvNhEDQNhEEG3MfQG3MdjzNlQj0NmsPGvg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AsY3YQMKm4NkD4QNjD6HBMZQHBMYjoNoQjpNpsLG5g");
	var mask_1_graphics_48 = new cjs.Graphics().p("Asw3DQMFnDNmDuQNnDvHLMUQHLMSjeNrQjfNssEHCg");
	var mask_1_graphics_49 = new cjs.Graphics().p("AtH2vQL/nLNpDjQNqDkHUMOQHVMMjTNuQjUNur/HMg");
	var mask_1_graphics_50 = new cjs.Graphics().p("Ate2aQL5nVNsDYQNtDaHeMIQHeMHjJNwQjJNxr5HVg");
	var mask_1_graphics_51 = new cjs.Graphics().p("At12EQLznfNvDOQNvDPHoMBQHnMBi+NzQi+NzrzHfg");
	var mask_1_graphics_52 = new cjs.Graphics().p("AuM1uQLunoNxDCQNxDEHxL8QHxL7izN1QizN2ruHog");
	var mask_1_graphics_53 = new cjs.Graphics().p("Auj1YQLonxNzC4QN0C5H7L1QH6L1ioN3QioN4roHxg");
	var mask_1_graphics_54 = new cjs.Graphics().p("Au61BQLin6N2CsQN2CvIELvQIDLvidN4QidN6riH7g");
	var mask_1_graphics_55 = new cjs.Graphics().p("AvQ0qQLcoDN3ChQN5CkINLpQIMLpiSN5QiSN9rcIDg");
	var mask_1_graphics_56 = new cjs.Graphics().p("Avm0SQLVoNN6CXQN6CYIWLjQIWLiiHN8QiIN+rVIMg");
	var mask_1_graphics_57 = new cjs.Graphics().p("Av8z6QLPoVN7CLQN8CNIfLcQIfLch8N9Qh8OArPIVg");
	var mask_1_graphics_58 = new cjs.Graphics().p("AwSziQLIoeN+CBQN+CCInLVQIoLVhxN/QhxOBrJIeg");
	var mask_1_graphics_59 = new cjs.Graphics().p("AwozJQLConN/B2QN/B3IxLOQIxLOhmOAQhnODrBIng");
	var mask_1_graphics_60 = new cjs.Graphics().p("Aw9ywQK7ovOABqQOBBsI6LIQI5LHhbOBQhcOEq6Ivg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AxSyWQK0o4OBBfQODBhJCLAQJCLBhQOCQhROFq0I4g");
	var mask_1_graphics_62 = new cjs.Graphics().p("Axnx8QKtpBOCBUQOEBWJLK5QJLK5hFOEQhGOFqtJBg");
	var mask_1_graphics_63 = new cjs.Graphics().p("Ax8xiQKmpJOEBJQOEBLJUKyQJTKyg6OEQg6OGqmJJg");
	var mask_1_graphics_64 = new cjs.Graphics().p("AyRxHQKfpSOFA+QOFBAJcKrQJcKqgvOFQgvOHqfJRg");
	var mask_1_graphics_65 = new cjs.Graphics().p("AylwsQKXpaOGAzQOGA1JkKjQJlKjglOFQgkOIqXJZg");
	var mask_1_graphics_66 = new cjs.Graphics().p("Ay5wQQKQpiOGAnQOHAqJsKbQJtKbgZOGQgaOIqQJig");
	var mask_1_graphics_67 = new cjs.Graphics().p("AzNv1QKIpqOHAdQOHAeJ1KUQJ1KUgOOFQgPOJqIJqg");
	var mask_1_graphics_68 = new cjs.Graphics().p("AzhvYQKBpyOHARQOHATJ9KMQJ9KMgDOGQgDOIqBJzg");
	var mask_1_graphics_69 = new cjs.Graphics().p("Az0u8QJ5p6OHAGQOIAIKEKEQKFKEAIOGQAIOJp5J6g");
	var mask_1_graphics_70 = new cjs.Graphics().p("A0IufQJyqCOHgFQOIgDKMJ8QKNJ8ATOGQATOJpxKBg");
	var mask_1_graphics_71 = new cjs.Graphics().p("A0buCQJqqJOHgQQOHgPKVJ0QKUJ0AeOGQAfOIpqKKg");
	var mask_1_graphics_72 = new cjs.Graphics().p("A0utkQJiqROGgbQOIgaKcJsQKcJsAqOFQApOIpiKRg");
	var mask_1_graphics_73 = new cjs.Graphics().p("A1AtGQJZqZOGgmQOIglKjJkQKkJjA0OFQA1OHpaKZg");
	var mask_1_graphics_74 = new cjs.Graphics().p("A1TsoQJSqgOFgxQOHgwKrJbQKrJbBAOEQA/OHpRKgg");
	var mask_1_graphics_75 = new cjs.Graphics().p("A1lsJQJJqnOFg9QOGg7KzJSQKyJTBLODQBLOGpKKog");
	var mask_1_graphics_76 = new cjs.Graphics().p("A13rqQJBqvOEhIQOFhGK6JKQK6JLBWOCQBVOFpAKug");
	var mask_1_graphics_77 = new cjs.Graphics().p("A2JrLQI5q2ODhTQOFhRLAJCQLBJBBhOBQBhOEo5K2g");
	var mask_1_graphics_78 = new cjs.Graphics().p("A2aqrQIwq9OCheQODhdLII5QLII5BsOAQBsODowK8g");
	var mask_1_graphics_79 = new cjs.Graphics().p("A2rqLQInrEOChpQOBhoLPIwQLPIwB3N/QB3OBooLEg");
	var mask_1_graphics_80 = new cjs.Graphics().p("A28prQIerLOBh0QOAhzLWIoQLWInCBN9QCCOAoeLKg");
	var mask_1_graphics_81 = new cjs.Graphics().p("A3NpLQIWrRN/h/QN/h+LcIeQLdIeCMN8QCNN+oWLRg");
	var mask_1_graphics_82 = new cjs.Graphics().p("A3doqQINrYN9iKQN9iJLjIVQLjIVCYN6QCYN9oNLXg");
	var mask_1_graphics_83 = new cjs.Graphics().p("A3toJQIDreN8iVQN8iULpIMQLqIMCiN4QCjN6oELeg");
	var mask_1_graphics_84 = new cjs.Graphics().p("A39nnQH7rlN6igQN5ifLwIDQLwICCtN2QCuN5n7Lkg");
	var mask_1_graphics_85 = new cjs.Graphics().p("A4NnGQHyrqN4isQN3iqL3H6QL2H5C4N0QC5N2nyLrg");
	var mask_1_graphics_86 = new cjs.Graphics().p("A4cmkQHprxN1i2QN2i1L8HwQL9HwDDNyQDDN0noLxg");
	var mask_1_graphics_87 = new cjs.Graphics().p("A4rmCQHfr2N0jCQNzjAMCHnQMDHnDONvQDONxnfL3g");
	var mask_1_graphics_88 = new cjs.Graphics().p("A46lfQHWr9NyjMQNwjLMJHdQMIHdDZNtQDZNvnWL9g");
	var mask_1_graphics_89 = new cjs.Graphics().p("A5Ik8QHMsDNvjXQNujWMPHUQMOHTDjNqQDkNsnNMDg");
	var mask_1_graphics_90 = new cjs.Graphics().p("A5WkZQHDsJNsjiQNrjgMUHKQMUHKDuNnQDvNpnDMIg");
	var mask_1_graphics_91 = new cjs.Graphics().p("A5kj2QG6sONpjtQNojrMaHAQMZHAD5NkQD5Nnm5MOg");
	var mask_1_graphics_92 = new cjs.Graphics().p("A5xjTQGvsTNnj3QNlj2MfG2QMfG2EENhQEENkmwMTg");
	var mask_1_graphics_93 = new cjs.Graphics().p("A5/ivQGnsYNjkDQNikBMlGtQMkGsEONeQEPNgmnMZg");
	var mask_1_graphics_94 = new cjs.Graphics().p("A6LiLQGcseNgkNQNfkLMqGiQMpGjEZNaQEZNdmcMeg");
	var mask_1_graphics_95 = new cjs.Graphics().p("A6YhnQGTsjNckXQNckWMvGYQMvGZEjNXQEjNZmSMjg");
	var mask_1_graphics_96 = new cjs.Graphics().p("A6khCQGJsoNZkiQNYkhM0GOQMzGPEuNTQEuNWmJMog");
	var mask_1_graphics_97 = new cjs.Graphics().p("A6wgeQF/ssNVktQNVksM5GFQM4GEE4NQQE5NSl/Msg");
	var mask_1_graphics_98 = new cjs.Graphics().p("A68AGQF1swNSk4QNRk1M9F6QM9F6FDNMQFDNOl1Mxg");
	var mask_1_graphics_99 = new cjs.Graphics().p("A7HArQFrs1NOlCQNNlANCFwQNCFwFMNIQFONKlrM2g");
	var mask_1_graphics_100 = new cjs.Graphics().p("A7SBQQFhs5NKlMQNJlLNGFmQNGFlFXNEQFYNGlgM6g");
	var mask_1_graphics_101 = new cjs.Graphics().p("A7dB2QFXs+NGlXQNFlVNKFcQNLFbFhM/QFiNClWM/g");
	var mask_1_graphics_102 = new cjs.Graphics().p("A7nCcQFMtCNClhQNBlgNPFRQNOFRFsM7QFsM9lMNDg");
	var mask_1_graphics_103 = new cjs.Graphics().p("A7xDBQFCtGM9lrQM9lqNTFHQNTFGF1M3QF3M5lCNHg");
	var mask_1_graphics_104 = new cjs.Graphics().p("A77DnQE4tKM5l1QM4l0NXE8QNWE8GAMyQGBM0k4NLg");
	var mask_1_graphics_105 = new cjs.Graphics().p("A8EEOQEttOM0mAQM0l+NbExQNaExGKMuQGKMvktNPg");
	var mask_1_graphics_106 = new cjs.Graphics().p("A8NE0QEjtSMvmKQMvmINeEnQNfEnGTMoQGVMrkjNTg");
	var mask_1_graphics_107 = new cjs.Graphics().p("A8WFbQEZtWMqmUQMqmSNiEcQNiEcGeMkQGeMmkYNWg");
	var mask_1_graphics_108 = new cjs.Graphics().p("A8eGBQEOtZMlmdQMlmdNmESQNlERGnMeQGpMhkONag");
	var mask_1_graphics_109 = new cjs.Graphics().p("A8mGoQEDtcMhmoQMfmmNpEHQNpEGGxMZQGyMckDNdg");
	var mask_1_graphics_110 = new cjs.Graphics().p("A8uHPQD5tfMbmyQMbmwNrD8QNsD8G7MUQG8MWj5Ngg");
	var mask_1_graphics_111 = new cjs.Graphics().p("A81H2QDutiMWm8QMWm6NuDxQNvDyHEMOQHGMRjuNjg");
	var mask_1_graphics_112 = new cjs.Graphics().p("A88IdQDktlMQnFQMQnENxDmQNyDnHOMIQHPMMjjNmg");
	var mask_1_graphics_113 = new cjs.Graphics().p("A9CJFQDYtoMLnPQMLnONzDcQN1DbHYMEQHYMFjYNpg");
	var mask_1_graphics_114 = new cjs.Graphics().p("A9JJsQDOtrMFnYQMFnXN2DQQN3DRHiL+QHiL/jONsg");
	var mask_1_graphics_115 = new cjs.Graphics().p("A9PKUQDDtuL/niQMAngN4DFQN6DGHrL4QHrL5jDNug");
	var mask_1_graphics_116 = new cjs.Graphics().p("A9UK7QC4tvL5nsQL5nqN7C7QN8C7H0LyQH1Lyi4Nxg");
	var mask_1_graphics_117 = new cjs.Graphics().p("A9aLjQCutyLyn1QL0nzN9CwQN+CvH+LsQH+LtiuNzg");
	var mask_1_graphics_118 = new cjs.Graphics().p("A9fMLQCjt0Lsn+QLun9N/ClQOACkIHLmQIHLmijN2g");
	var mask_1_graphics_119 = new cjs.Graphics().p("A9jMzQCXt2LnoHQLnoGOBCZQOCCaIQLfQIQLgiYN3g");
	var mask_1_graphics_120 = new cjs.Graphics().p("A9oNbQCNt4LgoQQLhoQODCPQOECPIYLZQIaLZiNN5g");
	var mask_1_graphics_121 = new cjs.Graphics().p("A9sODQCCt6LZoZQLboYOECDQOGCEIhLSQIjLTiCN6g");
	var mask_1_graphics_122 = new cjs.Graphics().p("A9vOsQB3t9LSohQLUoiOGB5QOHB4IqLMQIsLMh3N8g");
	var mask_1_graphics_123 = new cjs.Graphics().p("A9zPUQBst+LMoqQLNorOIBuQOIBtIzLFQI0LFhsN+g");
	var mask_1_graphics_124 = new cjs.Graphics().p("A92P8QBht/LFozQLGozOJBiQOKBiI8K+QI8K+hhN/g");
	var mask_1_graphics_125 = new cjs.Graphics().p("A94QlQBWuBK+o8QK+o8OLBXQOLBXJEK3QJFK3hWOBg");
	var mask_1_graphics_126 = new cjs.Graphics().p("A97RNQBLuBK3pFQK4pFOLBMQOMBMJNKwQJOKwhLOBg");
	var mask_1_graphics_127 = new cjs.Graphics().p("A99R2QBAuDKwpNQKwpNOMBBQONBAJWKpQJWKohAODg");
	var mask_1_graphics_128 = new cjs.Graphics().p("A9+SeQA1uDKopWQKppVONA1QOOA2JdKhQJfKhg1ODg");
	var mask_1_graphics_129 = new cjs.Graphics().p("A+ATHQAquEKhpeQKipeONAqQOOAqJmKaQJnKagqOEg");
	var mask_1_graphics_130 = new cjs.Graphics().p("A+BTvQAfuEKZpmQKbpnONAfQOPAfJuKSQJvKTgfOEg");
	var mask_1_graphics_131 = new cjs.Graphics().p("A+BUYQATuFKSpuQKTpvOOAUQOPAUJ2KKQJ3KLgUOFg");
	var mask_1_graphics_132 = new cjs.Graphics().p("A+CVBQAJuFKKp3QKLp3OOAJQOPAIJ+KDQJ/KDgIOFg");
	var mask_1_graphics_133 = new cjs.Graphics().p("A0CihQKDp/OOgCQOQgDKFJ7QKHJ7ADOFMhEwAANQgCuFKCp/g");
	var mask_1_graphics_134 = new cjs.Graphics().p("A0VibQJ7qHOPgOQOPgOKNJzQKPJzAOOGMhEvABCQgOuFJ6qGg");
	var mask_1_graphics_135 = new cjs.Graphics().p("A0niWQJzqOOOgZQOPgZKVJrQKXJrAYOFMhEuAB5QgYuFJyqPg");
	var mask_1_graphics_136 = new cjs.Graphics().p("A05iPQJrqWOOglQOOgkKdJjQKeJjAkOEMhEsACvQgkuEJqqWg");
	var mask_1_graphics_137 = new cjs.Graphics().p("A1LiJQJkqeONgvQOOgwKkJbQKlJbAvOEMhEpADlQgvuEJhqeg");
	var mask_1_graphics_138 = new cjs.Graphics().p("A1ciCQJbqmONg6QONg7KsJSQKsJTA6ODMhEmAEcQg6uEJZqlg");
	var mask_1_graphics_139 = new cjs.Graphics().p("A1sh8QJSqsOMhGQOMhGKzJKQK0JKBFODMhEiAFRQhFuDJRqtg");
	var mask_1_graphics_140 = new cjs.Graphics().p("A18h1QJJq0OLhRQOMhRK6JCQK7JBBQOCMhEeAGIQhQuDJJq0g");
	var mask_1_graphics_141 = new cjs.Graphics().p("A2MhtQJBq8OKhcQOKhcLBI5QLDI5BbOBMhEZAG9QhbuBJAq7g");
	var mask_1_graphics_142 = new cjs.Graphics().p("A2chmQI5rCOJhoQOJhnLIIwQLJIwBnOAMhEUAHzQhmuAI3rCg");
	var mask_1_graphics_143 = new cjs.Graphics().p("A2qheQIvrJOIhzQOIhyLOInQLRInBxN/MhENAIpQhxt/IvrJg");
	var mask_1_graphics_144 = new cjs.Graphics().p("A25hWQInrQOHh+QOFh+LWIfQLXIeB8N+MhEFAJeQh9t9ImrQg");
	var mask_1_graphics_145 = new cjs.Graphics().p("A3HhOQIerXOFiJQOEiILcIVQLeIXCHN7MhD+AKUQiHt8IdrXg");
	var mask_1_graphics_146 = new cjs.Graphics().p("A3VhGQIVrdOEiUQOCiULjINQLkINCSN6MhD1ALJQiTt6IUreg");
	var mask_1_graphics_147 = new cjs.Graphics().p("A3ig9QIMrkOBifQOBifLpIEQLrIECdN3MhDsAL/Qiet4ILrkg");
	var mask_1_graphics_148 = new cjs.Graphics().p("A3vg0QIDrrN/iqQN/iqLvH7QLxH7CoN2MhDiAM0Qiot3IBrqg");
	var mask_1_graphics_149 = new cjs.Graphics().p("A37grQH6rxN9i1QN8i1L2HxQL3HyCzN0MhDYANpQizt0H4rxg");
	var mask_1_graphics_150 = new cjs.Graphics().p("A4HgiQHwr3N7jAQN6jAL8HoQL9HpC+NxMhDNAOeQi+tyHvr3g");
	var mask_1_graphics_151 = new cjs.Graphics().p("A4TgZQHnr9N5jLQN3jLMCHfQMDHfDJNvMhDBAPUQjJtwHlr+g");
	var mask_1_graphics_152 = new cjs.Graphics().p("A4egPQHesDN2jWQN1jWMHHVQMJHWDUNtMhC1AQIQjUtuHcsDg");
	var mask_1_graphics_153 = new cjs.Graphics().p("A4ogFQHUsJNzjhQNyjgMNHLQMPHMDfNqMhCoAQ9QjftrHTsJg");
	var mask_1_graphics_154 = new cjs.Graphics().p("A4yAEQHKsONwjrQNwjsMTHCQMUHDDpNnMhCaARxQjptoHJsQg");
	var mask_1_graphics_155 = new cjs.Graphics().p("A48AOQHBsTNtj3QNsj2MZG4QMaG5D0NlMhCMASlQj0tlG/sWg");
	var mask_1_graphics_156 = new cjs.Graphics().p("A5FAZQG3sZNqkBQNpkBMeGuQMfGvD/NiMhB9ATZQj/tiG2sbg");
	var mask_1_graphics_157 = new cjs.Graphics().p("A5OAkQGtsfNnkMQNmkMMjGlQMlGmEJNeMhBtAUNQkKtfGssgg");
	var mask_1_graphics_158 = new cjs.Graphics().p("A5WAuQGjsjNjkXQNjkWMoGbQMqGbEUNbMhBdAVBQkUtcGismg");
	var mask_1_graphics_159 = new cjs.Graphics().p("A5eA6QGZspNgkiQNfkhMtGRQMvGSEfNXMhBNAV1QketZGYsqg");
	var mask_1_graphics_160 = new cjs.Graphics().p("A5mBFQGPsuNdksQNcksMyGHQMzGIEpNUMhA6AWoQkqtVGOswg");
	var mask_1_graphics_161 = new cjs.Graphics().p("A5tBQQGFsyNZk3QNYk2M3F9QM4F9E0NRMhApAXaQkztRGDs1g");
	var mask_1_graphics_162 = new cjs.Graphics().p("A5zBcQF7s4NVlAQNTlBM8FzQM9FzE+NNMhAWAYNQk+tOF6s5g");
	var mask_1_graphics_163 = new cjs.Graphics().p("A56BoQFxs8NRlMQNQlLNAFpQNCFpFINJMhACAZAQlJtKFvs+g");
	var mask_1_graphics_164 = new cjs.Graphics().p("A5/B0QFmtBNNlVQNMlWNEFeQNGFfFTNFMg/uAZyQlTtFFltDg");
	var mask_1_graphics_165 = new cjs.Graphics().p("A6ECAQFctFNIlgQNIlgNJFUQNKFVFdNAMg/aAalQldtCFbtHg");
	var mask_1_graphics_166 = new cjs.Graphics().p("A6JCNQFStKNElqQNDlqNNFJQNOFLFoM8Mg/FAbWQlns9FQtLg");
	var mask_1_graphics_167 = new cjs.Graphics().p("A6NCaQFHtONAl1QM+l0NRE/QNSFAFyM4Mg+vAcIQlxs5FGtPg");
	var mask_1_graphics_168 = new cjs.Graphics().p("A6RCmQE9tRM7l/QM6l/NUE1QNXE2F8M0Mg+ZAc4Ql8s0E8tUg");
	var mask_1_graphics_169 = new cjs.Graphics().p("A6UCzQEytVM2mJQM1mJNZEqQNaEsGGMvMg+BAdpQmGsvExtYg");
	var mask_1_graphics_170 = new cjs.Graphics().p("A6XDBQEotaMxmTQMwmTNcEgQNeEhGQMrMg9qAeZQmQsqEntbg");
	var mask_1_graphics_171 = new cjs.Graphics().p("A6aDOQEetdMsmdQMrmdNgEVQNhEWGaMmMg9SAfKQmZslEbtfg");
	var mask_1_graphics_172 = new cjs.Graphics().p("A6cDcQETthMnmnQMmmnNjELQNlELGkMhMg85Af6QmksgERtig");
	var mask_1_graphics_173 = new cjs.Graphics().p("A6dDpQEItjMimxQMgmxNnEAQNnEBGuMbMg8fAgqQmusbEHtmg");
	var mask_1_graphics_174 = new cjs.Graphics().p("A6eD3QD9tnMcm6QMcm7NpD1QNrD2G4MXMg8FAhZQm4sWD8tpg");
	var mask_1_graphics_175 = new cjs.Graphics().p("A6fEFQDztqMXnEQMVnFNtDrQNuDrHBMRMg7qAiJQnCsRDxtsg");
	var mask_1_graphics_176 = new cjs.Graphics().p("A6fEUQDottMRnPQMQnONvDgQNxDhHLMLMg7PAi4QnLsMDmtug");
	var mask_1_graphics_177 = new cjs.Graphics().p("A6fEiQDdtwMMnYQMKnYNyDWQN0DVHUMGMg6zAjmQnVsFDbtyg");
	var mask_1_graphics_178 = new cjs.Graphics().p("A6eExQDStzMGnhQMEniN1DLQN2DLHeMAMg6XAkUQnesADQt0g");
	var mask_1_graphics_179 = new cjs.Graphics().p("A6cFAQDGt2MAnrQL/nrN3DAQN4DAHoL6Mg56AlCQnor6DGt2g");
	var mask_1_graphics_180 = new cjs.Graphics().p("A6bFPQC8t4L6n0QL4n1N6C1QN7C1HwL0Mg5cAlwQnxr1C6t4g");
	var mask_1_graphics_181 = new cjs.Graphics().p("A6ZFeQCxt6L0n+QLzn+N7CqQN9CqH6LuMg4/AmdQn6ruCvt7g");
	var mask_1_graphics_182 = new cjs.Graphics().p("A6WFtQCmt8LtoHQLtoHN9CfQN/CfIDLoMg4gAnJQoDroCkt9g");
	var mask_1_graphics_183 = new cjs.Graphics().p("A6TF8QCbt+LnoQQLmoQN/CUQOBCUINLiMg4BAn1QoNrhCZuAg");
	var mask_1_graphics_184 = new cjs.Graphics().p("A6PGMQCQuALgoZQLgoaOACJQODCKIWLbMg3iAohQoVrbCOuBg");
	var mask_1_graphics_185 = new cjs.Graphics().p("A6LGcQCFuCLZoiQLZojOCB+QOFB+IfLVMg3CApNQoerUCDuDg");
	var mask_1_graphics_186 = new cjs.Graphics().p("A6HGrQB6uDLTorQLSorOEBzQOGBzInLOMg2gAp4QoorOB4uFg");
	var mask_1_graphics_187 = new cjs.Graphics().p("A6CG7QBvuELMo0QLLo1OFBoQOIBoIwLIMg1/AqjQoxrIBtuGg");
	var mask_1_graphics_188 = new cjs.Graphics().p("A58HMQBjuHLFo8QLFo9OGBdQOIBdI6LAMg1eArNQo5rABiuHg");
	var mask_1_graphics_189 = new cjs.Graphics().p("A52HcQBYuHK+pGQK9pGOHBSQOKBSJCK5Mg07Ar4QpCq6BXuIg");
	var mask_1_graphics_190 = new cjs.Graphics().p("A5wHsQBNuIK3pOQK2pOOIBGQOLBHJKKyMg0YAshQpKqyBLuKg");
	var mask_1_graphics_191 = new cjs.Graphics().p("A5pH9QBCuJKvpXQKvpXOJA8QOLA8JTKqMgz0AtKQpTqrBAuKg");
	var mask_1_graphics_192 = new cjs.Graphics().p("A5iIOQA3uKKnpgQKopfOKAxQOMAwJbKkMgzRAtyQpbqjA1uLg");
	var mask_1_graphics_193 = new cjs.Graphics().p("A5aIeQAruKKgpoQKhpnOKAlQONAmJjKcMgysAuaQpkqcAquMg");
	var mask_1_graphics_194 = new cjs.Graphics().p("A5SIvQAguLKZpvQKYpwOLAaQONAaJsKVMgyIAvCQpsqUAfuNg");
	var mask_1_graphics_195 = new cjs.Graphics().p("A5JJAQAVuLKQp4QKRp4OLAPQOOAQJ0KNMgxjAvpQp0qNAUuNg");
	var mask_1_graphics_196 = new cjs.Graphics().p("A5AJSQAJuMKJqAQKJqAOLAEQOOAEJ8KGMgw8AwQQp9qFAJuNg");
	var mask_1_graphics_197 = new cjs.Graphics().p("A43JjQgBuMKBqIQKBqHOLgIQOOgHKEJ+MgwXAw2QqEp9gDuNg");
	var mask_1_graphics_198 = new cjs.Graphics().p("A4tJ0QgNuLJ5qQQJ5qQOLgSQOOgSKMJ1MgvwAxdQqMp2gOuNg");
	var mask_1_graphics_199 = new cjs.Graphics().p("A4jKGQgXuMJxqXQJwqXOLgeQONgdKUJtMgvIAyCQqUptgauNg");
	var mask_1_graphics_200 = new cjs.Graphics().p("A4YKYQgjuMJpqfQJpqfOKgoQONgpKbJmMguhAymQqbplgluMg");
	var mask_1_graphics_201 = new cjs.Graphics().p("A4MKpQgvuKJhqnQJgqmOKg0QOMg0KjJdMgt5AzMQqjpegvuMg");
	var mask_1_graphics_202 = new cjs.Graphics().p("A4BK7Qg5uKJYquQJYquOJg/QOMg/KqJVMgtQAzwQqrpVg7uMg");
	var mask_1_graphics_203 = new cjs.Graphics().p("A31LNQhEuJJPq1QJQq2OIhKQOLhKKyJNMgsnA0SQqypMhHuLg");
	var mask_1_graphics_204 = new cjs.Graphics().p("A3oLfQhQuIJHq9QJHq8OHhVQOKhVK5JEMgr9A01Qq5pEhSuKg");
	var mask_1_graphics_205 = new cjs.Graphics().p("A3bLyQhbuII+rEQI/rDOGhgQOJhhLAI8MgrUA1YQrAo8hduIg");
	var mask_1_graphics_206 = new cjs.Graphics().p("A3NMEQhnuHI2rKQI1rLOFhrQOIhrLHIyMgqpA16QrIozhnuHg");
	var mask_1_graphics_207 = new cjs.Graphics().p("A3AMWQhxuFItrRQIsrSOEh2QOHh3LOIqMgp/A2bQrPoqhzuGg");
	var mask_1_graphics_208 = new cjs.Graphics().p("A2xMpQh9uEIkrYQIkrZOCiBQOFiBLVIhMgpUA28QrVoih+uEg");
	var mask_1_graphics_209 = new cjs.Graphics().p("A2iM7QiIuCIbrfQIarfOBiMQODiNLcIZMgooA3cQrcoZiJuDg");
	var mask_1_graphics_210 = new cjs.Graphics().p("A2TNOQiTuAISrmQIRrmN/iXQOCiYLiIQMgn9A38QrioQiUuBg");
	var mask_1_graphics_211 = new cjs.Graphics().p("A2ENhQidt/IIrsQIIrsN+iiQN/ijLpIGMgnQA4bQrpoGigt/g");
	var mask_1_graphics_212 = new cjs.Graphics().p("A10N0Qipt9IAryQH/rzN7itQN+iuLvH9MgmkA46Qrvn9irt9g");
	var mask_1_graphics_213 = new cjs.Graphics().p("A1jOHQi0t8H2r4QH2r4N5i5QN7i4L2H0Mgl3A5YQr2n0i1t7g");
	var mask_1_graphics_214 = new cjs.Graphics().p("A1SOZQi/t5Hsr+QHtr+N2jDQN6jEL7HrMglJA51Qr8nrjAt5g");
	var mask_1_graphics_215 = new cjs.Graphics().p("A1BOtQjKt3HjsEQHjsFN0jOQN3jOMCHhMgkcA6SQsCnhjLt2g");
	var mask_1_graphics_216 = new cjs.Graphics().p("A0vPAQjVt1HZsJQHasLNxjZQN1jZMHHYMgjtA6uQsInXjWt0g");
	var mask_1_graphics_217 = new cjs.Graphics().p("A0dPTQjgtyHQsPQHQsRNvjjQNxjlMOHPMgi/A7KQsOnOjhtxg");
	var mask_1_graphics_218 = new cjs.Graphics().p("A0LPmQjqtvHGsVQHGsWNsjuQNvjvMTHEMgiQA7mQsUnEjstvg");
	var mask_1_graphics_219 = new cjs.Graphics().p("Az4P5Qj1tsG8saQG8scNqj5QNrj6MZG7MghhA8BQsZm7j3tsg");
	var mask_1_graphics_220 = new cjs.Graphics().p("AzlQNQkAtpGzsgQGyshNmkEQNpkFMeGyMggyA8aQsemxkCtog");
	var mask_1_graphics_221 = new cjs.Graphics().p("AzRQgQkLtmGpslQGosmNjkPQNmkPMjGnMggCA81QsjmokNtlg");
	var mask_1_graphics_222 = new cjs.Graphics().p("Ay9Q0QkWtjGfsqQGfssNfkZQNikaMpGeMgfSA9NQsomdkYtig");
	var mask_1_graphics_223 = new cjs.Graphics().p("AyoRHQkhtfGVsvQGVsxNckkQNekkMuGTMgehA9mQsumTkitfg");
	var mask_1_graphics_224 = new cjs.Graphics().p("AyTRbQkstcGLs0QGLs2NYkuQNbkvMzGKMgdxA99QszmJkstbg");
	var mask_1_graphics_225 = new cjs.Graphics().p("Ax+RuQk2tXGBs6QGAs6NVk5QNXk5M4F/MgdAA+VQs4mAk3tXg");
	var mask_1_graphics_226 = new cjs.Graphics().p("AxpSCQlAtUF2s+QF3s/NRlDQNTlEM8F1MgcPA+rQs8l1lCtTg");
	var mask_1_graphics_227 = new cjs.Graphics().p("AxTSWQlKtQFstDQFstDNNlOQNPlONBFrMgbeA/BQtAlrlNtPg");
	var mask_1_graphics_228 = new cjs.Graphics().p("Aw8SpQlVtLFhtHQFitINJlYQNLlZNFFhMgasA/WQtElhlXtLg");
	var mask_1_graphics_229 = new cjs.Graphics().p("AwlS9QlgtIFXtLQFYtMNEliQNHljNKFWMgZ6A/rQtJlWlhtHg");
	var mask_1_graphics_230 = new cjs.Graphics().p("AwOTRQlqtDFNtQQFNtQNAltQNCltNOFMMgZIA//QtNlMlrtCg");
	var mask_1_graphics_231 = new cjs.Graphics().p("Av3TlQl0s/FCtTQFDtVM7l3QM/l3NSFCMgYWBASQtRlBl2s+g");
	var mask_1_graphics_232 = new cjs.Graphics().p("AvfT4Ql/s6E4tXQE4tYM3mBQM6mCNWE3MgXjBAmQtVk3mAs6g");
	var mask_1_graphics_233 = new cjs.Graphics().p("AvHUMQmJs1EutbQEttcMzmLQM0mMNaEtMgWvBA3QtZksmLs1g");
	var mask_1_graphics_234 = new cjs.Graphics().p("AuuUgQmTswEjtfQEjtgMtmVQMwmWNdEiMgV8BBKQtdkimUswg");
	var mask_1_graphics_235 = new cjs.Graphics().p("AuVU0QmdsrEYtjQEYtjMomfQMrmgNiEYMgVKBBaQtgkXmesrg");
	var mask_1_graphics_236 = new cjs.Graphics().p("At8VIQmnsmEOtmQENtmMjmqQMmmpNlENMgUWBBqQtjkNmpslg");
	var mask_1_graphics_237 = new cjs.Graphics().p("AtiVcQmxshECtpQEDtqMemzQMhm0NoEDMgTiBB6QtnkCmysgg");
	var mask_1_graphics_238 = new cjs.Graphics().p("AtIVwQm7scD4tsQD4ttMYm9QMbm9NsD3MgSuBCKQtqj4m8sag");
	var mask_1_graphics_239 = new cjs.Graphics().p("AsuWDQnFsWDttvQDutvMUnHQMUnHNvDtMgR6BCXQttjsnGsWg");
	var mask_1_graphics_240 = new cjs.Graphics().p("AsUWXQnOsQDityQDjtzMOnQQMPnRNxDiMgRFBCmQtwjinQsQg");
	var mask_1_graphics_241 = new cjs.Graphics().p("Ar5WrQnYsLDYt0QDXt1MJnaQMJnbN0DXMgQQBCzQtzjXnasKg");
	var mask_1_graphics_242 = new cjs.Graphics().p("ArdW/QnisFDNt3QDMt4MDnjQMDnkN3DMMgPcBC/Qt1jMnjsEg");
	var mask_1_graphics_243 = new cjs.Graphics().p("ArCXTQnrr/DCt6QDBt6L9ntQL+ntN5DBMgOnBDLQt4jBntr+g");
	var mask_1_graphics_244 = new cjs.Graphics().p("AqmXnQn1r5C3t8QC3t9L3n2QL3n3N8C3MgNyBDWQt7i2n2r4g");
	var mask_1_graphics_245 = new cjs.Graphics().p("AqKX7Qn+rzCst+QCst/Lwn/QLxoBN+CsMgM8BDhQt9isoArxg");
	var mask_1_graphics_246 = new cjs.Graphics().p("AptYOQoIrsChuAQChuBLqoIQLroKOACgMgMIBDrQt+igoJrsg");
	var mask_1_graphics_247 = new cjs.Graphics().p("ApQYiQoRrmCWuCQCVuDLkoRQLloTOCCWMgLTBDzQuAiVoSrlg");
	var mask_1_graphics_248 = new cjs.Graphics().p("AozY2QoarfCKuEQCLuFLeobQLdobOECKMgKcBD9QuDiLobreg");
	var mask_1_graphics_249 = new cjs.Graphics().p("AoWZKQojrZCAuFQB/uHLXojQLXolOGB/MgJnBEEQuGh/ojrXg");
	var mask_1_graphics_250 = new cjs.Graphics().p("An4ZdQosrSB0uHQB1uHLQotQLQotOHB0MgIxBELQuHh0osrRg");
	var mask_1_graphics_251 = new cjs.Graphics().p("AnaZxQo1rLBpuJQBpuILKo2QLJo2OJBpMgH8BESQuIhpo1rKg");
	var mask_1_graphics_252 = new cjs.Graphics().p("Am8aFQo9rEBeuLQBeuJLCo+QLDpAOJBeMgHFBEYQuKheo+rCg");
	var mask_1_graphics_253 = new cjs.Graphics().p("AmdaYQpHq9BTuLQBTuLK7pHQK8pHOLBSMgGQBEeQuLhTpGq8g");
	var mask_1_graphics_254 = new cjs.Graphics().p("Al/asQpOq2BHuMQBIuMK0pPQK0pROMBIMgFaBEiQuLhIpQq0g");
	var mask_1_graphics_255 = new cjs.Graphics().p("Alga/QpXquA9uNQA8uNKtpYQKtpYONA8MgEkBEmQuNg9pYqtg");
	var mask_1_graphics_256 = new cjs.Graphics().p("AlAbTQpgqnAxuOQAxuNKmpgQKmpiONAyMgDtBEpQuOgypgqlg");
	var mask_1_graphics_257 = new cjs.Graphics().p("AkhbmQpoqfAmuPQAmuNKeppQKfppOOAmMgC4BErQuOgmppqeg");
	var mask_1_graphics_258 = new cjs.Graphics().p("AkBb5QpwqXAbuPQAauOKXpxQKXpyOOAbMgCBBEuQuPgbpxqXg");
	var mask_1_graphics_259 = new cjs.Graphics().p("AjicMQp4qQAPuPQAQuOKPp5QKPp6OPAQMgBMBEvQuPgQp5qPg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_1_graphics_9,x:245.5,y:247.4}).wait(1).to({graphics:mask_1_graphics_10,x:245.6,y:247.3}).wait(1).to({graphics:mask_1_graphics_11,x:245.6,y:247.3}).wait(1).to({graphics:mask_1_graphics_12,x:245.6,y:247.1}).wait(1).to({graphics:mask_1_graphics_13,x:245.6,y:247}).wait(1).to({graphics:mask_1_graphics_14,x:245.7,y:246.9}).wait(1).to({graphics:mask_1_graphics_15,x:245.7,y:246.7}).wait(1).to({graphics:mask_1_graphics_16,x:245.7,y:246.6}).wait(1).to({graphics:mask_1_graphics_17,x:245.8,y:246.4}).wait(1).to({graphics:mask_1_graphics_18,x:245.8,y:246.2}).wait(1).to({graphics:mask_1_graphics_19,x:245.8,y:245.9}).wait(1).to({graphics:mask_1_graphics_20,x:245.9,y:245.7}).wait(1).to({graphics:mask_1_graphics_21,x:245.9,y:245.5}).wait(1).to({graphics:mask_1_graphics_22,x:245.9,y:245.2}).wait(1).to({graphics:mask_1_graphics_23,x:246,y:244.9}).wait(1).to({graphics:mask_1_graphics_24,x:246,y:244.6}).wait(1).to({graphics:mask_1_graphics_25,x:246,y:244.3}).wait(1).to({graphics:mask_1_graphics_26,x:246.1,y:243.9}).wait(1).to({graphics:mask_1_graphics_27,x:246.1,y:243.6}).wait(1).to({graphics:mask_1_graphics_28,x:246.1,y:243.2}).wait(1).to({graphics:mask_1_graphics_29,x:246.2,y:242.8}).wait(1).to({graphics:mask_1_graphics_30,x:246.2,y:242.4}).wait(1).to({graphics:mask_1_graphics_31,x:246.2,y:242}).wait(1).to({graphics:mask_1_graphics_32,x:246.3,y:241.6}).wait(1).to({graphics:mask_1_graphics_33,x:246.3,y:241.1}).wait(1).to({graphics:mask_1_graphics_34,x:246.3,y:240.7}).wait(1).to({graphics:mask_1_graphics_35,x:246.4,y:240.2}).wait(1).to({graphics:mask_1_graphics_36,x:246.4,y:239.7}).wait(1).to({graphics:mask_1_graphics_37,x:246.4,y:239.2}).wait(1).to({graphics:mask_1_graphics_38,x:246.4,y:238.7}).wait(1).to({graphics:mask_1_graphics_39,x:246.5,y:238.1}).wait(1).to({graphics:mask_1_graphics_40,x:246.5,y:237.6}).wait(1).to({graphics:mask_1_graphics_41,x:246.5,y:237}).wait(1).to({graphics:mask_1_graphics_42,x:246.5,y:236.4}).wait(1).to({graphics:mask_1_graphics_43,x:246.5,y:235.8}).wait(1).to({graphics:mask_1_graphics_44,x:246.6,y:235.2}).wait(1).to({graphics:mask_1_graphics_45,x:246.6,y:234.6}).wait(1).to({graphics:mask_1_graphics_46,x:246.6,y:233.9}).wait(1).to({graphics:mask_1_graphics_47,x:246.6,y:233.3}).wait(1).to({graphics:mask_1_graphics_48,x:246.6,y:232.6}).wait(1).to({graphics:mask_1_graphics_49,x:246.6,y:231.9}).wait(1).to({graphics:mask_1_graphics_50,x:246.6,y:231.2}).wait(1).to({graphics:mask_1_graphics_51,x:246.7,y:230.5}).wait(1).to({graphics:mask_1_graphics_52,x:246.7,y:229.8}).wait(1).to({graphics:mask_1_graphics_53,x:246.7,y:229}).wait(1).to({graphics:mask_1_graphics_54,x:246.7,y:228.3}).wait(1).to({graphics:mask_1_graphics_55,x:246.7,y:227.5}).wait(1).to({graphics:mask_1_graphics_56,x:246.7,y:226.7}).wait(1).to({graphics:mask_1_graphics_57,x:246.7,y:225.9}).wait(1).to({graphics:mask_1_graphics_58,x:246.7,y:225.1}).wait(1).to({graphics:mask_1_graphics_59,x:246.8,y:224.3}).wait(1).to({graphics:mask_1_graphics_60,x:246.8,y:223.4}).wait(1).to({graphics:mask_1_graphics_61,x:246.8,y:222.6}).wait(1).to({graphics:mask_1_graphics_62,x:246.8,y:221.7}).wait(1).to({graphics:mask_1_graphics_63,x:246.8,y:220.8}).wait(1).to({graphics:mask_1_graphics_64,x:246.8,y:219.9}).wait(1).to({graphics:mask_1_graphics_65,x:246.8,y:219}).wait(1).to({graphics:mask_1_graphics_66,x:246.9,y:218.1}).wait(1).to({graphics:mask_1_graphics_67,x:246.9,y:217.2}).wait(1).to({graphics:mask_1_graphics_68,x:246.9,y:216.3}).wait(1).to({graphics:mask_1_graphics_69,x:246.9,y:215.3}).wait(1).to({graphics:mask_1_graphics_70,x:247,y:214.3}).wait(1).to({graphics:mask_1_graphics_71,x:247,y:213.4}).wait(1).to({graphics:mask_1_graphics_72,x:247,y:212.4}).wait(1).to({graphics:mask_1_graphics_73,x:247.1,y:211.4}).wait(1).to({graphics:mask_1_graphics_74,x:247.1,y:210.4}).wait(1).to({graphics:mask_1_graphics_75,x:247.1,y:209.4}).wait(1).to({graphics:mask_1_graphics_76,x:247.2,y:208.3}).wait(1).to({graphics:mask_1_graphics_77,x:247.2,y:207.3}).wait(1).to({graphics:mask_1_graphics_78,x:247.2,y:206.2}).wait(1).to({graphics:mask_1_graphics_79,x:247.3,y:205.2}).wait(1).to({graphics:mask_1_graphics_80,x:247.3,y:204.1}).wait(1).to({graphics:mask_1_graphics_81,x:247.4,y:203}).wait(1).to({graphics:mask_1_graphics_82,x:247.4,y:201.9}).wait(1).to({graphics:mask_1_graphics_83,x:247.4,y:200.8}).wait(1).to({graphics:mask_1_graphics_84,x:247.5,y:199.7}).wait(1).to({graphics:mask_1_graphics_85,x:247.5,y:198.6}).wait(1).to({graphics:mask_1_graphics_86,x:247.5,y:197.5}).wait(1).to({graphics:mask_1_graphics_87,x:247.6,y:196.3}).wait(1).to({graphics:mask_1_graphics_88,x:247.6,y:195.2}).wait(1).to({graphics:mask_1_graphics_89,x:247.7,y:194}).wait(1).to({graphics:mask_1_graphics_90,x:247.7,y:192.8}).wait(1).to({graphics:mask_1_graphics_91,x:247.7,y:191.7}).wait(1).to({graphics:mask_1_graphics_92,x:247.7,y:190.5}).wait(1).to({graphics:mask_1_graphics_93,x:247.8,y:189.3}).wait(1).to({graphics:mask_1_graphics_94,x:247.8,y:188.1}).wait(1).to({graphics:mask_1_graphics_95,x:247.8,y:186.9}).wait(1).to({graphics:mask_1_graphics_96,x:247.8,y:185.7}).wait(1).to({graphics:mask_1_graphics_97,x:247.9,y:184.4}).wait(1).to({graphics:mask_1_graphics_98,x:247.9,y:183.2}).wait(1).to({graphics:mask_1_graphics_99,x:247.9,y:182}).wait(1).to({graphics:mask_1_graphics_100,x:247.9,y:180.7}).wait(1).to({graphics:mask_1_graphics_101,x:247.9,y:179.5}).wait(1).to({graphics:mask_1_graphics_102,x:247.9,y:178.2}).wait(1).to({graphics:mask_1_graphics_103,x:248,y:177}).wait(1).to({graphics:mask_1_graphics_104,x:248,y:175.7}).wait(1).to({graphics:mask_1_graphics_105,x:248,y:174.4}).wait(1).to({graphics:mask_1_graphics_106,x:248,y:173.2}).wait(1).to({graphics:mask_1_graphics_107,x:248,y:171.9}).wait(1).to({graphics:mask_1_graphics_108,x:248,y:170.6}).wait(1).to({graphics:mask_1_graphics_109,x:248,y:169.3}).wait(1).to({graphics:mask_1_graphics_110,x:248,y:168}).wait(1).to({graphics:mask_1_graphics_111,x:248,y:166.7}).wait(1).to({graphics:mask_1_graphics_112,x:248,y:165.4}).wait(1).to({graphics:mask_1_graphics_113,x:248,y:164.1}).wait(1).to({graphics:mask_1_graphics_114,x:248,y:162.8}).wait(1).to({graphics:mask_1_graphics_115,x:247.9,y:161.4}).wait(1).to({graphics:mask_1_graphics_116,x:247.9,y:160.1}).wait(1).to({graphics:mask_1_graphics_117,x:247.9,y:158.8}).wait(1).to({graphics:mask_1_graphics_118,x:247.9,y:157.5}).wait(1).to({graphics:mask_1_graphics_119,x:247.9,y:156.1}).wait(1).to({graphics:mask_1_graphics_120,x:247.9,y:154.8}).wait(1).to({graphics:mask_1_graphics_121,x:247.9,y:153.4}).wait(1).to({graphics:mask_1_graphics_122,x:247.9,y:152.1}).wait(1).to({graphics:mask_1_graphics_123,x:247.9,y:150.8}).wait(1).to({graphics:mask_1_graphics_124,x:247.8,y:149.4}).wait(1).to({graphics:mask_1_graphics_125,x:247.8,y:148.1}).wait(1).to({graphics:mask_1_graphics_126,x:247.8,y:146.7}).wait(1).to({graphics:mask_1_graphics_127,x:247.8,y:145.4}).wait(1).to({graphics:mask_1_graphics_128,x:247.8,y:144}).wait(1).to({graphics:mask_1_graphics_129,x:247.8,y:142.7}).wait(1).to({graphics:mask_1_graphics_130,x:247.8,y:141.3}).wait(1).to({graphics:mask_1_graphics_131,x:247.8,y:140}).wait(1).to({graphics:mask_1_graphics_132,x:247.8,y:138.6}).wait(1).to({graphics:mask_1_graphics_133,x:247.8,y:137.9}).wait(1).to({graphics:mask_1_graphics_134,x:247.8,y:139.2}).wait(1).to({graphics:mask_1_graphics_135,x:247.7,y:140.6}).wait(1).to({graphics:mask_1_graphics_136,x:247.7,y:141.9}).wait(1).to({graphics:mask_1_graphics_137,x:247.6,y:143.3}).wait(1).to({graphics:mask_1_graphics_138,x:247.5,y:144.7}).wait(1).to({graphics:mask_1_graphics_139,x:247.4,y:146}).wait(1).to({graphics:mask_1_graphics_140,x:247.3,y:147.4}).wait(1).to({graphics:mask_1_graphics_141,x:247.2,y:148.7}).wait(1).to({graphics:mask_1_graphics_142,x:247.1,y:150}).wait(1).to({graphics:mask_1_graphics_143,x:246.9,y:151.4}).wait(1).to({graphics:mask_1_graphics_144,x:246.7,y:152.7}).wait(1).to({graphics:mask_1_graphics_145,x:246.5,y:154.1}).wait(1).to({graphics:mask_1_graphics_146,x:246.3,y:155.4}).wait(1).to({graphics:mask_1_graphics_147,x:246.1,y:156.7}).wait(1).to({graphics:mask_1_graphics_148,x:245.8,y:158.1}).wait(1).to({graphics:mask_1_graphics_149,x:245.6,y:159.4}).wait(1).to({graphics:mask_1_graphics_150,x:245.3,y:160.7}).wait(1).to({graphics:mask_1_graphics_151,x:245,y:162.1}).wait(1).to({graphics:mask_1_graphics_152,x:244.7,y:163.4}).wait(1).to({graphics:mask_1_graphics_153,x:244.4,y:164.7}).wait(1).to({graphics:mask_1_graphics_154,x:244,y:166}).wait(1).to({graphics:mask_1_graphics_155,x:243.7,y:167.3}).wait(1).to({graphics:mask_1_graphics_156,x:243.3,y:168.6}).wait(1).to({graphics:mask_1_graphics_157,x:242.9,y:169.9}).wait(1).to({graphics:mask_1_graphics_158,x:242.5,y:171.2}).wait(1).to({graphics:mask_1_graphics_159,x:242.1,y:172.5}).wait(1).to({graphics:mask_1_graphics_160,x:241.6,y:173.8}).wait(1).to({graphics:mask_1_graphics_161,x:241.2,y:175}).wait(1).to({graphics:mask_1_graphics_162,x:240.7,y:176.3}).wait(1).to({graphics:mask_1_graphics_163,x:240.2,y:177.6}).wait(1).to({graphics:mask_1_graphics_164,x:239.7,y:178.8}).wait(1).to({graphics:mask_1_graphics_165,x:239.2,y:180.1}).wait(1).to({graphics:mask_1_graphics_166,x:238.7,y:181.3}).wait(1).to({graphics:mask_1_graphics_167,x:238.1,y:182.6}).wait(1).to({graphics:mask_1_graphics_168,x:237.6,y:183.8}).wait(1).to({graphics:mask_1_graphics_169,x:237,y:185}).wait(1).to({graphics:mask_1_graphics_170,x:236.4,y:186.2}).wait(1).to({graphics:mask_1_graphics_171,x:235.8,y:187.4}).wait(1).to({graphics:mask_1_graphics_172,x:235.2,y:188.6}).wait(1).to({graphics:mask_1_graphics_173,x:234.5,y:189.8}).wait(1).to({graphics:mask_1_graphics_174,x:233.9,y:191}).wait(1).to({graphics:mask_1_graphics_175,x:233.2,y:192.2}).wait(1).to({graphics:mask_1_graphics_176,x:232.5,y:193.4}).wait(1).to({graphics:mask_1_graphics_177,x:231.8,y:194.5}).wait(1).to({graphics:mask_1_graphics_178,x:231.1,y:195.7}).wait(1).to({graphics:mask_1_graphics_179,x:230.4,y:196.8}).wait(1).to({graphics:mask_1_graphics_180,x:229.6,y:198}).wait(1).to({graphics:mask_1_graphics_181,x:228.9,y:199.1}).wait(1).to({graphics:mask_1_graphics_182,x:228.1,y:200.2}).wait(1).to({graphics:mask_1_graphics_183,x:227.4,y:201.3}).wait(1).to({graphics:mask_1_graphics_184,x:226.6,y:202.4}).wait(1).to({graphics:mask_1_graphics_185,x:225.8,y:203.5}).wait(1).to({graphics:mask_1_graphics_186,x:224.9,y:204.6}).wait(1).to({graphics:mask_1_graphics_187,x:224.1,y:205.7}).wait(1).to({graphics:mask_1_graphics_188,x:223.3,y:206.7}).wait(1).to({graphics:mask_1_graphics_189,x:222.4,y:207.8}).wait(1).to({graphics:mask_1_graphics_190,x:221.5,y:208.8}).wait(1).to({graphics:mask_1_graphics_191,x:220.6,y:209.8}).wait(1).to({graphics:mask_1_graphics_192,x:219.7,y:210.8}).wait(1).to({graphics:mask_1_graphics_193,x:218.8,y:211.8}).wait(1).to({graphics:mask_1_graphics_194,x:217.9,y:212.8}).wait(1).to({graphics:mask_1_graphics_195,x:217,y:213.8}).wait(1).to({graphics:mask_1_graphics_196,x:216,y:214.8}).wait(1).to({graphics:mask_1_graphics_197,x:215.1,y:215.7}).wait(1).to({graphics:mask_1_graphics_198,x:214.1,y:216.7}).wait(1).to({graphics:mask_1_graphics_199,x:213.1,y:217.6}).wait(1).to({graphics:mask_1_graphics_200,x:212.1,y:218.5}).wait(1).to({graphics:mask_1_graphics_201,x:211.1,y:219.5}).wait(1).to({graphics:mask_1_graphics_202,x:210.1,y:220.4}).wait(1).to({graphics:mask_1_graphics_203,x:209.1,y:221.2}).wait(1).to({graphics:mask_1_graphics_204,x:208,y:222.1}).wait(1).to({graphics:mask_1_graphics_205,x:207,y:223}).wait(1).to({graphics:mask_1_graphics_206,x:205.9,y:223.8}).wait(1).to({graphics:mask_1_graphics_207,x:204.9,y:224.6}).wait(1).to({graphics:mask_1_graphics_208,x:203.8,y:225.5}).wait(1).to({graphics:mask_1_graphics_209,x:202.7,y:226.3}).wait(1).to({graphics:mask_1_graphics_210,x:201.6,y:227.1}).wait(1).to({graphics:mask_1_graphics_211,x:200.5,y:227.8}).wait(1).to({graphics:mask_1_graphics_212,x:199.4,y:228.6}).wait(1).to({graphics:mask_1_graphics_213,x:198.3,y:229.4}).wait(1).to({graphics:mask_1_graphics_214,x:197.1,y:230.1}).wait(1).to({graphics:mask_1_graphics_215,x:196,y:230.8}).wait(1).to({graphics:mask_1_graphics_216,x:194.8,y:231.5}).wait(1).to({graphics:mask_1_graphics_217,x:193.7,y:232.2}).wait(1).to({graphics:mask_1_graphics_218,x:192.5,y:232.9}).wait(1).to({graphics:mask_1_graphics_219,x:191.3,y:233.6}).wait(1).to({graphics:mask_1_graphics_220,x:190.1,y:234.2}).wait(1).to({graphics:mask_1_graphics_221,x:188.9,y:234.9}).wait(1).to({graphics:mask_1_graphics_222,x:187.7,y:235.5}).wait(1).to({graphics:mask_1_graphics_223,x:186.5,y:236.1}).wait(1).to({graphics:mask_1_graphics_224,x:185.3,y:236.7}).wait(1).to({graphics:mask_1_graphics_225,x:184.1,y:237.3}).wait(1).to({graphics:mask_1_graphics_226,x:182.8,y:237.8}).wait(1).to({graphics:mask_1_graphics_227,x:181.6,y:238.4}).wait(1).to({graphics:mask_1_graphics_228,x:180.3,y:238.9}).wait(1).to({graphics:mask_1_graphics_229,x:179.1,y:239.4}).wait(1).to({graphics:mask_1_graphics_230,x:177.8,y:239.9}).wait(1).to({graphics:mask_1_graphics_231,x:176.6,y:240.4}).wait(1).to({graphics:mask_1_graphics_232,x:175.3,y:240.9}).wait(1).to({graphics:mask_1_graphics_233,x:174,y:241.3}).wait(1).to({graphics:mask_1_graphics_234,x:172.7,y:241.8}).wait(1).to({graphics:mask_1_graphics_235,x:171.5,y:242.2}).wait(1).to({graphics:mask_1_graphics_236,x:170.2,y:242.6}).wait(1).to({graphics:mask_1_graphics_237,x:168.9,y:243}).wait(1).to({graphics:mask_1_graphics_238,x:167.6,y:243.4}).wait(1).to({graphics:mask_1_graphics_239,x:166.3,y:243.7}).wait(1).to({graphics:mask_1_graphics_240,x:164.9,y:244.1}).wait(1).to({graphics:mask_1_graphics_241,x:163.6,y:244.4}).wait(1).to({graphics:mask_1_graphics_242,x:162.3,y:244.7}).wait(1).to({graphics:mask_1_graphics_243,x:161,y:245}).wait(1).to({graphics:mask_1_graphics_244,x:159.7,y:245.3}).wait(1).to({graphics:mask_1_graphics_245,x:158.3,y:245.6}).wait(1).to({graphics:mask_1_graphics_246,x:157,y:245.8}).wait(1).to({graphics:mask_1_graphics_247,x:155.7,y:246}).wait(1).to({graphics:mask_1_graphics_248,x:154.3,y:246.3}).wait(1).to({graphics:mask_1_graphics_249,x:153,y:246.4}).wait(1).to({graphics:mask_1_graphics_250,x:151.6,y:246.6}).wait(1).to({graphics:mask_1_graphics_251,x:150.3,y:246.8}).wait(1).to({graphics:mask_1_graphics_252,x:148.9,y:246.9}).wait(1).to({graphics:mask_1_graphics_253,x:147.6,y:247.1}).wait(1).to({graphics:mask_1_graphics_254,x:146.2,y:247.2}).wait(1).to({graphics:mask_1_graphics_255,x:144.9,y:247.3}).wait(1).to({graphics:mask_1_graphics_256,x:143.5,y:247.4}).wait(1).to({graphics:mask_1_graphics_257,x:142.2,y:247.4}).wait(1).to({graphics:mask_1_graphics_258,x:140.8,y:247.5}).wait(1).to({graphics:mask_1_graphics_259,x:139.4,y:247.5}).wait(416));

	// 1
	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(25,1,1).p("ALyakQpogtnAnBQnynzAArBQAArBHynzQHUnVKLgc");
	this.shape_94.setTransform(185.6,274.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(25,0,1).p("AMuakQpogtnAnBQnynzAArBQAArBHynzQHUnVKLgc");
	this.shape_95.setTransform(179.6,274.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(25,1,1).p("ATOvQQARB6AACAQAALCnzHyQnzHzrBAAQmyAAlji9");
	this.shape_96.setTransform(320.7,347.7);

	var maskedShapeInstanceList = [this.shape_94,this.shape_95,this.shape_96];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_94}]},9).to({state:[{t:this.shape_96},{t:this.shape_95},{t:this.shape_94}]},233).wait(433));

	// Base
	this.instance_4 = new lib.Symbol1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(274,278.5);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(675));

	// Background
	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_97.setTransform(275,275,3.373,2.543);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_98.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_98},{t:this.shape_97}]}).wait(675));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(273.5,234.3,553,726.5);
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