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


(lib.S = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApSaiQj7hWjNioInXDBIkQBkIisAuQhGAAgngwQgrgugBhBQABhcBkgtIEmhiIDihTIDXhZQjSkGh+ktQgkhVgdhZIhAi9Igei1QAAhAAqgoQAugnBDAAQBTAAAbAzIAoB7QAbAZAcAXIAsAjQBKA5BMArQBuA9BwAfQD1BGEsAAQBGAAAoAlQAnAlAABGQAABDgqAuQFljKFQjoQFRjpE7kJIA6mgIBrnRQBDjlB3i+QBZiPB+hNQAsgbAvgTIBQgVIBQgGQBDAAA0AYQAOAHANAIIBcBfIA0CEIAQCVIAAAWQgGCkhQCwQhTC9h9CyIkOFNIkQEKIgbFQIgoFTQg3GLjsD+QjrD+lmCPIjDBBIjTAkQkNAAj7hVgACFMhQmrEKnCDdQCWBlCoAuQCrAuC1AAICegcICZg6QEchrCvjEQCujBA1krIAkl5QmRE4mpEKgAyRNcICvDiIE0iZIEyilIhTAMIhJAAQjKAAjDgoQiVghhugmQhegggQgSgAa22vIhZBGIhKBZIguBJQhJCcgiCyIgwFjQAAADgDAGQgEADAAAMICpjEICZjfIBuj1QAfhUAKhXQAFgrAAgrIgGgkIgcgTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-211.8,-178.3,423.7,356.7);


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
	this.instance.setTransform(-75,-0.5,1,1,-47.5,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0,rotation:-94.4,guide:{path:[-74.9,-0.4,-30.5,37.4,47,28.6]}},74).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Am0CZICxlVIBGAkIiwFVg");
	var mask_graphics_1 = new cjs.Graphics().p("AiDCXICwlVIBXAoIiwFVg");
	var mask_graphics_2 = new cjs.Graphics().p("AiLCUICwlUIBnAsIivFVg");
	var mask_graphics_3 = new cjs.Graphics().p("AiTCSICwlUIB4AwIiwFVg");
	var mask_graphics_4 = new cjs.Graphics().p("AicCPICxlTICIA0IiwFVg");
	var mask_graphics_5 = new cjs.Graphics().p("AilCNICxlUICZA6IivFVg");
	var mask_graphics_6 = new cjs.Graphics().p("AitCLICxlTICqA9IivFVg");
	var mask_graphics_7 = new cjs.Graphics().p("Ai2CIICzlTIC6BCIixFVg");
	var mask_graphics_8 = new cjs.Graphics().p("Ai+CGICzlTIDKBGIiwFVg");
	var mask_graphics_9 = new cjs.Graphics().p("AjHCDIC0lSIDbBKIixFVg");
	var mask_graphics_10 = new cjs.Graphics().p("AjPCBIC0lSIDrBOIixFVg");
	var mask_graphics_11 = new cjs.Graphics().p("AjYB/IC0lSID8BSIiwFVg");
	var mask_graphics_12 = new cjs.Graphics().p("AjgB8IC1lRIEMBWIixFVg");
	var mask_graphics_13 = new cjs.Graphics().p("AjoB6IC0lRIEdBaIiwFVg");
	var mask_graphics_14 = new cjs.Graphics().p("AjxB4IC1lRIEuBeIixFVg");
	var mask_graphics_15 = new cjs.Graphics().p("Aj5B1IC1lQIE+BjIiwFVg");
	var mask_graphics_16 = new cjs.Graphics().p("AkCBzIC2lRIFPBoIixFVg");
	var mask_graphics_17 = new cjs.Graphics().p("AkKBwIC1lQIFgBsIiwFVg");
	var mask_graphics_18 = new cjs.Graphics().p("AkTBuIC3lQIFwBwIixFVg");
	var mask_graphics_19 = new cjs.Graphics().p("AkbBsIC3lQIGAB0IiwFVg");
	var mask_graphics_20 = new cjs.Graphics().p("AkkBpIC3lPIGSB4IixFVg");
	var mask_graphics_21 = new cjs.Graphics().p("AksBnIC3lPIGiB8IiwFVg");
	var mask_graphics_22 = new cjs.Graphics().p("Ak1BkIC4lOIGzCAIixFVg");
	var mask_graphics_23 = new cjs.Graphics().p("Ak9BiIC4lOIHDCEIiwFVg");
	var mask_graphics_24 = new cjs.Graphics().p("AlGBgIC5lOIHUCIIixFVg");
	var mask_graphics_25 = new cjs.Graphics().p("AlOBdIC4lNIHlCMIixFVg");
	var mask_graphics_26 = new cjs.Graphics().p("AlXBbIC5lOIH1CRIiwFVg");
	var mask_graphics_27 = new cjs.Graphics().p("AlfBZIC5lNIIGCUIixFVg");
	var mask_graphics_28 = new cjs.Graphics().p("AlnBWIC5lNIIWCaIiwFVg");
	var mask_graphics_29 = new cjs.Graphics().p("AlwBUIC6lNIInCeIixFVg");
	var mask_graphics_30 = new cjs.Graphics().p("Al4BRIC6lMII3CiIiwFVg");
	var mask_graphics_31 = new cjs.Graphics().p("AmBBPIC6lMIJJCmIiwFVg");
	var mask_graphics_32 = new cjs.Graphics().p("AmJBMIC7lLIJYCqIiwFVg");
	var mask_graphics_33 = new cjs.Graphics().p("AmSBKIC7lLIJqCuIixFVg");
	var mask_graphics_34 = new cjs.Graphics().p("AmaBIIC7lLIJ6CyIiwFVg");
	var mask_graphics_35 = new cjs.Graphics().p("AmjBFIC8lKIKLC2IixFVg");
	var mask_graphics_36 = new cjs.Graphics().p("AmrBDIC8lKIKbC6IiwFVg");
	var mask_graphics_37 = new cjs.Graphics().p("Am0BBIC9lLIKsDAIixFVg");
	var mask_graphics_38 = new cjs.Graphics().p("Am8A+IC9lKIK8DEIiwFVg");
	var mask_graphics_39 = new cjs.Graphics().p("AnFA8IC9lKILODIIixFVg");
	var mask_graphics_40 = new cjs.Graphics().p("AnNA5IC9lJILeDMIixFVg");
	var mask_graphics_41 = new cjs.Graphics().p("AnVA3IC9lJILuDQIiwFVg");
	var mask_graphics_42 = new cjs.Graphics().p("AneA1IC+lJIL/DUIixFVg");
	var mask_graphics_43 = new cjs.Graphics().p("AnmAyIC+lIIMPDYIiwFVg");
	var mask_graphics_44 = new cjs.Graphics().p("AnvAwIC/lIIMgDcIixFVg");
	var mask_graphics_45 = new cjs.Graphics().p("An3AtIC+lHIMyDgIixFVg");
	var mask_graphics_46 = new cjs.Graphics().p("AoAArIC/lHINCDkIiwFVg");
	var mask_graphics_47 = new cjs.Graphics().p("AoIApIC/lIINSDqIiwFVg");
	var mask_graphics_48 = new cjs.Graphics().p("AoRAmIDAlGINjDtIixFVg");
	var mask_graphics_49 = new cjs.Graphics().p("AoZAkIDAlHINzDyIiwFVg");
	var mask_graphics_50 = new cjs.Graphics().p("AoiAiIDBlHIOED2IixFVg");
	var mask_graphics_51 = new cjs.Graphics().p("AoqAfIDAlGIOVD6IiwFVg");
	var mask_graphics_52 = new cjs.Graphics().p("AozAdIDBlGIOlD+IiwFVg");
	var mask_graphics_53 = new cjs.Graphics().p("Ao7AbIDBlGIO2ECIiwFVg");
	var mask_graphics_54 = new cjs.Graphics().p("ApDAYIDBlFIPHEGIixFVg");
	var mask_graphics_55 = new cjs.Graphics().p("ApMAWIDClFIPXEKIixFVg");
	var mask_graphics_56 = new cjs.Graphics().p("ApVATIDDlEIPoEOIixFVg");
	var mask_graphics_57 = new cjs.Graphics().p("ApdARIDDlEIP4ESIixFVg");
	var mask_graphics_58 = new cjs.Graphics().p("AplAOIDClEIQJEXIiwFVg");
	var mask_graphics_59 = new cjs.Graphics().p("ApuANIDElEIQZEaIiwFVg");
	var mask_graphics_60 = new cjs.Graphics().p("Ap2AKIDDlEIQrEgIixFVg");
	var mask_graphics_61 = new cjs.Graphics().p("Ap/AHIDElDIQ7EkIiwFVg");
	var mask_graphics_62 = new cjs.Graphics().p("AqHAFIDElDIRLEoIiwFVg");
	var mask_graphics_63 = new cjs.Graphics().p("AqQACIDFlCIRcEsIixFVg");
	var mask_graphics_64 = new cjs.Graphics().p("AqYABIDElDIRtEwIiwFVg");
	var mask_graphics_65 = new cjs.Graphics().p("AqhgBIDFlDIR+E0IixFVg");
	var mask_graphics_66 = new cjs.Graphics().p("AqpgDIDFlDISOE4IiwFVg");
	var mask_graphics_67 = new cjs.Graphics().p("AqxgGIDFlCISeE8IiwFVg");
	var mask_graphics_68 = new cjs.Graphics().p("Aq6gIIDGlCISvFBIiwFVg");
	var mask_graphics_69 = new cjs.Graphics().p("ArDgLIDHlCITAFGIixFVg");
	var mask_graphics_70 = new cjs.Graphics().p("ArLgNIDHlCITQFKIiwFVg");
	var mask_graphics_71 = new cjs.Graphics().p("ArUgPIDHlCITiFOIixFVg");
	var mask_graphics_72 = new cjs.Graphics().p("ArcgSIDHlBITyFSIixFVg");
	var mask_graphics_73 = new cjs.Graphics().p("ArkgUIDHlBIUCFVIiwFWg");
	var mask_graphics_74 = new cjs.Graphics().p("ArtgWIDIlBIUTFZIiwFWg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-43.7,y:-0.6}).wait(1).to({graphics:mask_graphics_1,x:-74.2,y:-0.3}).wait(1).to({graphics:mask_graphics_2,x:-73.5,y:0}).wait(1).to({graphics:mask_graphics_3,x:-72.7,y:0.3}).wait(1).to({graphics:mask_graphics_4,x:-72,y:0.5}).wait(1).to({graphics:mask_graphics_5,x:-71.2,y:0.8}).wait(1).to({graphics:mask_graphics_6,x:-70.5,y:1.1}).wait(1).to({graphics:mask_graphics_7,x:-69.8,y:1.3}).wait(1).to({graphics:mask_graphics_8,x:-69,y:1.6}).wait(1).to({graphics:mask_graphics_9,x:-68.3,y:1.9}).wait(1).to({graphics:mask_graphics_10,x:-67.5,y:2.2}).wait(1).to({graphics:mask_graphics_11,x:-66.8,y:2.4}).wait(1).to({graphics:mask_graphics_12,x:-66,y:2.7}).wait(1).to({graphics:mask_graphics_13,x:-65.3,y:2.9}).wait(1).to({graphics:mask_graphics_14,x:-64.6,y:3.2}).wait(1).to({graphics:mask_graphics_15,x:-63.8,y:3.5}).wait(1).to({graphics:mask_graphics_16,x:-63.1,y:3.8}).wait(1).to({graphics:mask_graphics_17,x:-62.3,y:4}).wait(1).to({graphics:mask_graphics_18,x:-61.6,y:4.3}).wait(1).to({graphics:mask_graphics_19,x:-60.9,y:4.6}).wait(1).to({graphics:mask_graphics_20,x:-60.1,y:4.8}).wait(1).to({graphics:mask_graphics_21,x:-59.4,y:5.1}).wait(1).to({graphics:mask_graphics_22,x:-58.6,y:5.4}).wait(1).to({graphics:mask_graphics_23,x:-57.9,y:5.6}).wait(1).to({graphics:mask_graphics_24,x:-57.1,y:5.9}).wait(1).to({graphics:mask_graphics_25,x:-56.4,y:6.2}).wait(1).to({graphics:mask_graphics_26,x:-55.6,y:6.5}).wait(1).to({graphics:mask_graphics_27,x:-54.9,y:6.7}).wait(1).to({graphics:mask_graphics_28,x:-54.2,y:7}).wait(1).to({graphics:mask_graphics_29,x:-53.4,y:7.2}).wait(1).to({graphics:mask_graphics_30,x:-52.7,y:7.5}).wait(1).to({graphics:mask_graphics_31,x:-51.9,y:7.8}).wait(1).to({graphics:mask_graphics_32,x:-51.2,y:8.1}).wait(1).to({graphics:mask_graphics_33,x:-50.5,y:8.3}).wait(1).to({graphics:mask_graphics_34,x:-49.7,y:8.6}).wait(1).to({graphics:mask_graphics_35,x:-49,y:8.9}).wait(1).to({graphics:mask_graphics_36,x:-48.2,y:9.1}).wait(1).to({graphics:mask_graphics_37,x:-47.5,y:9.4}).wait(1).to({graphics:mask_graphics_38,x:-46.7,y:9.7}).wait(1).to({graphics:mask_graphics_39,x:-46,y:9.9}).wait(1).to({graphics:mask_graphics_40,x:-45.2,y:10.2}).wait(1).to({graphics:mask_graphics_41,x:-44.5,y:10.5}).wait(1).to({graphics:mask_graphics_42,x:-43.8,y:10.8}).wait(1).to({graphics:mask_graphics_43,x:-43,y:11}).wait(1).to({graphics:mask_graphics_44,x:-42.3,y:11.3}).wait(1).to({graphics:mask_graphics_45,x:-41.5,y:11.6}).wait(1).to({graphics:mask_graphics_46,x:-40.8,y:11.8}).wait(1).to({graphics:mask_graphics_47,x:-40.1,y:12.1}).wait(1).to({graphics:mask_graphics_48,x:-39.3,y:12.4}).wait(1).to({graphics:mask_graphics_49,x:-38.6,y:12.6}).wait(1).to({graphics:mask_graphics_50,x:-37.8,y:12.9}).wait(1).to({graphics:mask_graphics_51,x:-37.1,y:13.2}).wait(1).to({graphics:mask_graphics_52,x:-36.3,y:13.5}).wait(1).to({graphics:mask_graphics_53,x:-35.6,y:13.7}).wait(1).to({graphics:mask_graphics_54,x:-34.8,y:14}).wait(1).to({graphics:mask_graphics_55,x:-34.1,y:14.2}).wait(1).to({graphics:mask_graphics_56,x:-33.4,y:14.5}).wait(1).to({graphics:mask_graphics_57,x:-32.6,y:14.8}).wait(1).to({graphics:mask_graphics_58,x:-31.9,y:15.1}).wait(1).to({graphics:mask_graphics_59,x:-31.1,y:15.3}).wait(1).to({graphics:mask_graphics_60,x:-30.4,y:15.6}).wait(1).to({graphics:mask_graphics_61,x:-29.6,y:15.9}).wait(1).to({graphics:mask_graphics_62,x:-28.9,y:16.1}).wait(1).to({graphics:mask_graphics_63,x:-28.2,y:16.4}).wait(1).to({graphics:mask_graphics_64,x:-27.4,y:16.7}).wait(1).to({graphics:mask_graphics_65,x:-26.7,y:16.9}).wait(1).to({graphics:mask_graphics_66,x:-25.9,y:17.2}).wait(1).to({graphics:mask_graphics_67,x:-25.2,y:17.5}).wait(1).to({graphics:mask_graphics_68,x:-24.5,y:17.8}).wait(1).to({graphics:mask_graphics_69,x:-23.7,y:18}).wait(1).to({graphics:mask_graphics_70,x:-23,y:18.3}).wait(1).to({graphics:mask_graphics_71,x:-22.2,y:18.5}).wait(1).to({graphics:mask_graphics_72,x:-21.5,y:18.8}).wait(1).to({graphics:mask_graphics_73,x:-20.7,y:19.1}).wait(1).to({graphics:mask_graphics_74,x:-20,y:19.4}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("ApdiPQGsFoMPhc");
	this.shape.setTransform(-12.6,15.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.6,-10.4,22,28.8);


(lib.ar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(48.5,-50.6,1,1,65.5,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0.1,rotation:31.8,guide:{path:[48.5,-50.4,-9.2,-28.3,-42.7,42.1]}},59).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AA1kPIBIhMICkCaIhIBMg");
	var mask_graphics_1 = new cjs.Graphics().p("Ah8geIBWhcICkCZIhYBcg");
	var mask_graphics_2 = new cjs.Graphics().p("AiEgWIBmhsICjCZIhmBsg");
	var mask_graphics_3 = new cjs.Graphics().p("AiMgOIB1h8ICkCZIh1B8g");
	var mask_graphics_4 = new cjs.Graphics().p("AiTgGICEiMICjCZIiECMg");
	var mask_graphics_5 = new cjs.Graphics().p("AibABICUibICjCaIiUCbg");
	var mask_graphics_6 = new cjs.Graphics().p("AiiAJICiirICjCaIiiCrg");
	var mask_graphics_7 = new cjs.Graphics().p("AiqARICxi7ICkCaIixC7g");
	var mask_graphics_8 = new cjs.Graphics().p("AixAZIC/jLICkCbIi/DKg");
	var mask_graphics_9 = new cjs.Graphics().p("Ai5AhIDPjbICkCbIjPDag");
	var mask_graphics_10 = new cjs.Graphics().p("AjAApIDdjrIClCaIjeDrg");
	var mask_graphics_11 = new cjs.Graphics().p("AjIAxIDtj7ICkCaIjtD8g");
	var mask_graphics_12 = new cjs.Graphics().p("AjQA4ID8kKIClCaIj8EMg");
	var mask_graphics_13 = new cjs.Graphics().p("AjXBAIELkaICkCaIkLEbg");
	var mask_graphics_14 = new cjs.Graphics().p("AjeBJIEZkrIClCaIkbErg");
	var mask_graphics_15 = new cjs.Graphics().p("AjmBRIEpk7ICkCaIkpE8g");
	var mask_graphics_16 = new cjs.Graphics().p("AjtBZIE3lLIClCaIk4FLg");
	var mask_graphics_17 = new cjs.Graphics().p("Aj1BhIFHlbICkCaIlHFbg");
	var mask_graphics_18 = new cjs.Graphics().p("Aj9BpIFXlrICkCaIlWFrg");
	var mask_graphics_19 = new cjs.Graphics().p("AkEBxIFll7ICkCaIllF7g");
	var mask_graphics_20 = new cjs.Graphics().p("AkMB5IF1mLICkCaIl1GLg");
	var mask_graphics_21 = new cjs.Graphics().p("AkTCBIGDmbICkCaImDGbg");
	var mask_graphics_22 = new cjs.Graphics().p("AkbCJIGTmrICkCaImTGrg");
	var mask_graphics_23 = new cjs.Graphics().p("AkiCRIGhm8IClCbImiG8g");
	var mask_graphics_24 = new cjs.Graphics().p("AkqCZIGxnMICkCbImxHLg");
	var mask_graphics_25 = new cjs.Graphics().p("AkxChIG/ncIClCbInAHbg");
	var mask_graphics_26 = new cjs.Graphics().p("Ak5CpIHPnsICkCbInPHsg");
	var mask_graphics_27 = new cjs.Graphics().p("AlBCxIHen8IClCbInfH8g");
	var mask_graphics_28 = new cjs.Graphics().p("AlIC5IHtoMICkCbIntILg");
	var mask_graphics_29 = new cjs.Graphics().p("AlPDBIH7ocIClCbIn9Ibg");
	var mask_graphics_30 = new cjs.Graphics().p("AlXDJIILosICkCbIoLIsg");
	var mask_graphics_31 = new cjs.Graphics().p("AlfDRIIao8IClCbIoaI8g");
	var mask_graphics_32 = new cjs.Graphics().p("AlnDYIIqpLICkCbIopJMg");
	var mask_graphics_33 = new cjs.Graphics().p("AluDgII4pbIClCbIo5Jbg");
	var mask_graphics_34 = new cjs.Graphics().p("Al2DpIJIpsICkCbIpIJrg");
	var mask_graphics_35 = new cjs.Graphics().p("Al9DxIJWp8IClCbIpXJ8g");
	var mask_graphics_36 = new cjs.Graphics().p("AmED4IJlqLICkCbIplKMg");
	var mask_graphics_37 = new cjs.Graphics().p("AmMEBIJ1qcICkCbIp1Kcg");
	var mask_graphics_38 = new cjs.Graphics().p("AmUEJIKEqsIClCbIqEKsg");
	var mask_graphics_39 = new cjs.Graphics().p("AmbERIKTq8ICkCbIqTK8g");
	var mask_graphics_40 = new cjs.Graphics().p("AmjEZIKirMIClCbIqiLMg");
	var mask_graphics_41 = new cjs.Graphics().p("AmqEhIKxrcICkCbIqxLcg");
	var mask_graphics_42 = new cjs.Graphics().p("AmyEpILArsIClCbIrBLsg");
	var mask_graphics_43 = new cjs.Graphics().p("Am5ExILPr8ICkCbIrPL8g");
	var mask_graphics_44 = new cjs.Graphics().p("AnBE5ILesMIClCcIrfMKg");
	var mask_graphics_45 = new cjs.Graphics().p("AnIFBILtscICkCcIrtMag");
	var mask_graphics_46 = new cjs.Graphics().p("AnQFJIL8ssIClCcIr8Mrg");
	var mask_graphics_47 = new cjs.Graphics().p("AnYFRIMMs8ICkCcIsLM7g");
	var mask_graphics_48 = new cjs.Graphics().p("AnfFZIMatMIClCcIsbNKg");
	var mask_graphics_49 = new cjs.Graphics().p("AnmFhIMptcICkCcIsqNag");
	var mask_graphics_50 = new cjs.Graphics().p("AnuFpIM5tsICkCbIs5Nrg");
	var mask_graphics_51 = new cjs.Graphics().p("An2FxINIt8IClCbItIN8g");
	var mask_graphics_52 = new cjs.Graphics().p("An9F5INXuMICkCbItXOMg");
	var mask_graphics_53 = new cjs.Graphics().p("AoFGBINmucIClCbItmOcg");
	var mask_graphics_54 = new cjs.Graphics().p("AoMGJIN1usICkCbIt1Osg");
	var mask_graphics_55 = new cjs.Graphics().p("AoUGRIOEu8IClCbIuEO8g");
	var mask_graphics_56 = new cjs.Graphics().p("AocGZIOUvMICkCbIuTPMg");
	var mask_graphics_57 = new cjs.Graphics().p("AojGhIOivcIClCbIujPcg");
	var mask_graphics_58 = new cjs.Graphics().p("AoqGpIOxvsICkCbIuxPsg");
	var mask_graphics_59 = new cjs.Graphics().p("AoyGxIPAv8IClCbIvAP8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:28.9,y:-34.8}).wait(1).to({graphics:mask_graphics_1,x:45.2,y:-57.3}).wait(1).to({graphics:mask_graphics_2,x:44.5,y:-56.5}).wait(1).to({graphics:mask_graphics_3,x:43.7,y:-55.7}).wait(1).to({graphics:mask_graphics_4,x:42.9,y:-54.9}).wait(1).to({graphics:mask_graphics_5,x:42.2,y:-54.1}).wait(1).to({graphics:mask_graphics_6,x:41.4,y:-53.3}).wait(1).to({graphics:mask_graphics_7,x:40.7,y:-52.5}).wait(1).to({graphics:mask_graphics_8,x:39.9,y:-51.7}).wait(1).to({graphics:mask_graphics_9,x:39.2,y:-50.9}).wait(1).to({graphics:mask_graphics_10,x:38.4,y:-50.1}).wait(1).to({graphics:mask_graphics_11,x:37.7,y:-49.3}).wait(1).to({graphics:mask_graphics_12,x:36.9,y:-48.5}).wait(1).to({graphics:mask_graphics_13,x:36.2,y:-47.7}).wait(1).to({graphics:mask_graphics_14,x:35.4,y:-46.9}).wait(1).to({graphics:mask_graphics_15,x:34.7,y:-46.1}).wait(1).to({graphics:mask_graphics_16,x:33.9,y:-45.4}).wait(1).to({graphics:mask_graphics_17,x:33.1,y:-44.6}).wait(1).to({graphics:mask_graphics_18,x:32.4,y:-43.8}).wait(1).to({graphics:mask_graphics_19,x:31.6,y:-43}).wait(1).to({graphics:mask_graphics_20,x:30.9,y:-42.2}).wait(1).to({graphics:mask_graphics_21,x:30.1,y:-41.4}).wait(1).to({graphics:mask_graphics_22,x:29.4,y:-40.6}).wait(1).to({graphics:mask_graphics_23,x:28.6,y:-39.8}).wait(1).to({graphics:mask_graphics_24,x:27.9,y:-39}).wait(1).to({graphics:mask_graphics_25,x:27.1,y:-38.2}).wait(1).to({graphics:mask_graphics_26,x:26.4,y:-37.4}).wait(1).to({graphics:mask_graphics_27,x:25.6,y:-36.6}).wait(1).to({graphics:mask_graphics_28,x:24.9,y:-35.8}).wait(1).to({graphics:mask_graphics_29,x:24.1,y:-35}).wait(1).to({graphics:mask_graphics_30,x:23.4,y:-34.2}).wait(1).to({graphics:mask_graphics_31,x:22.6,y:-33.4}).wait(1).to({graphics:mask_graphics_32,x:21.9,y:-32.6}).wait(1).to({graphics:mask_graphics_33,x:21.1,y:-31.8}).wait(1).to({graphics:mask_graphics_34,x:20.4,y:-31}).wait(1).to({graphics:mask_graphics_35,x:19.6,y:-30.2}).wait(1).to({graphics:mask_graphics_36,x:18.9,y:-29.4}).wait(1).to({graphics:mask_graphics_37,x:18.1,y:-28.6}).wait(1).to({graphics:mask_graphics_38,x:17.3,y:-27.8}).wait(1).to({graphics:mask_graphics_39,x:16.6,y:-27}).wait(1).to({graphics:mask_graphics_40,x:15.8,y:-26.2}).wait(1).to({graphics:mask_graphics_41,x:15.1,y:-25.4}).wait(1).to({graphics:mask_graphics_42,x:14.3,y:-24.6}).wait(1).to({graphics:mask_graphics_43,x:13.6,y:-23.8}).wait(1).to({graphics:mask_graphics_44,x:12.8,y:-23}).wait(1).to({graphics:mask_graphics_45,x:12.1,y:-22.2}).wait(1).to({graphics:mask_graphics_46,x:11.3,y:-21.4}).wait(1).to({graphics:mask_graphics_47,x:10.6,y:-20.6}).wait(1).to({graphics:mask_graphics_48,x:9.8,y:-19.8}).wait(1).to({graphics:mask_graphics_49,x:9.1,y:-19}).wait(1).to({graphics:mask_graphics_50,x:8.3,y:-18.2}).wait(1).to({graphics:mask_graphics_51,x:7.5,y:-17.4}).wait(1).to({graphics:mask_graphics_52,x:6.8,y:-16.7}).wait(1).to({graphics:mask_graphics_53,x:6,y:-15.9}).wait(1).to({graphics:mask_graphics_54,x:5.3,y:-15.1}).wait(1).to({graphics:mask_graphics_55,x:4.5,y:-14.3}).wait(1).to({graphics:mask_graphics_56,x:3.8,y:-13.5}).wait(1).to({graphics:mask_graphics_57,x:3,y:-12.7}).wait(1).to({graphics:mask_graphics_58,x:2.3,y:-11.9}).wait(1).to({graphics:mask_graphics_59,x:1.5,y:-11.1}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AnIHQQFQrCJBjd");
	this.shape.setTransform(2.8,-4.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.2,-61.9,21.2,20.3);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-27,21.4,1,1,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:23,y:-18.8},74).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AisABIA+guIBvCTIg9Avg");
	var mask_graphics_1 = new cjs.Graphics().p("AhZgvIBEg0IBvCTIhEA0g");
	var mask_graphics_2 = new cjs.Graphics().p("AhcgsIBKg5IBvCSIhKA5g");
	var mask_graphics_3 = new cjs.Graphics().p("AhfgqIBRg+IBuCTIhRA+g");
	var mask_graphics_4 = new cjs.Graphics().p("AhjgoIBYhCIBvCTIhYBCg");
	var mask_graphics_5 = new cjs.Graphics().p("AhmgmIBehHIBvCTIheBIg");
	var mask_graphics_6 = new cjs.Graphics().p("AhpgjIBkhMIBvCTIhkBMg");
	var mask_graphics_7 = new cjs.Graphics().p("AhtghIBshQIBvCSIhrBRg");
	var mask_graphics_8 = new cjs.Graphics().p("AhwgeIBxhWIBwCSIhxBXg");
	var mask_graphics_9 = new cjs.Graphics().p("AhzgcIB3haIBwCSIh3Bbg");
	var mask_graphics_10 = new cjs.Graphics().p("Ah2gZIB9hgIBwCSIh9Bhg");
	var mask_graphics_11 = new cjs.Graphics().p("Ah5gXICEhkIBvCSIiEBlg");
	var mask_graphics_12 = new cjs.Graphics().p("Ah9gVICLhpIBwCTIiLBqg");
	var mask_graphics_13 = new cjs.Graphics().p("AiAgSICRhuIBwCSIiRBvg");
	var mask_graphics_14 = new cjs.Graphics().p("AiDgQICYhzIBvCTIiXB0g");
	var mask_graphics_15 = new cjs.Graphics().p("AiGgNICeh4IBvCSIidB5g");
	var mask_graphics_16 = new cjs.Graphics().p("AiKgLIClh8IBwCRIikB+g");
	var mask_graphics_17 = new cjs.Graphics().p("AiNgJICriBIBwCSIirCDg");
	var mask_graphics_18 = new cjs.Graphics().p("AiQgGICxiGIBwCRIixCIg");
	var mask_graphics_19 = new cjs.Graphics().p("AiTgEIC4iLIBvCSIi3CNg");
	var mask_graphics_20 = new cjs.Graphics().p("AiWgCIC+iPIBwCSIi+CRg");
	var mask_graphics_21 = new cjs.Graphics().p("AiaAAIDFiTIBwCSIjECWg");
	var mask_graphics_22 = new cjs.Graphics().p("AidACIDMiYIBvCTIjLCag");
	var mask_graphics_23 = new cjs.Graphics().p("AigAEIDSidIBvCTIjRCgg");
	var mask_graphics_24 = new cjs.Graphics().p("AikAHIDaiiIBuCSIjXClg");
	var mask_graphics_25 = new cjs.Graphics().p("AinAJIDgimIBuCSIjeCpg");
	var mask_graphics_26 = new cjs.Graphics().p("AiqALIDmirIBvCTIjlCug");
	var mask_graphics_27 = new cjs.Graphics().p("AitAOIDsiwIBvCSIjrCzg");
	var mask_graphics_28 = new cjs.Graphics().p("AiwAQIDyi1IBvCTIjxC4g");
	var mask_graphics_29 = new cjs.Graphics().p("AizASID4i5IBwCSIj5C9g");
	var mask_graphics_30 = new cjs.Graphics().p("Ai3AVIEAi+IBvCSIj+DCg");
	var mask_graphics_31 = new cjs.Graphics().p("Ai6AXIEGjDIBvCSIkEDHg");
	var mask_graphics_32 = new cjs.Graphics().p("Ai9AaIEMjIIBvCSIkLDMg");
	var mask_graphics_33 = new cjs.Graphics().p("AjAAcIETjNIBuCSIkRDRg");
	var mask_graphics_34 = new cjs.Graphics().p("AjEAeIEajRIBvCSIkYDVg");
	var mask_graphics_35 = new cjs.Graphics().p("AjHAhIEgjXIBvCSIkfDbg");
	var mask_graphics_36 = new cjs.Graphics().p("AjKAjIEmjbIBvCSIklDfg");
	var mask_graphics_37 = new cjs.Graphics().p("AjNAlIEtjgIBuCSIkrDlg");
	var mask_graphics_38 = new cjs.Graphics().p("AjQAoIEzjlIBuCRIkxDqg");
	var mask_graphics_39 = new cjs.Graphics().p("AjUAqIE6jqIBuCSIk3Dvg");
	var mask_graphics_40 = new cjs.Graphics().p("AjXAtIFAjvIBvCRIk/D0g");
	var mask_graphics_41 = new cjs.Graphics().p("AjaAvIFGj0IBvCSIlFD5g");
	var mask_graphics_42 = new cjs.Graphics().p("AjeAxIFOj4IBvCRIlMD+g");
	var mask_graphics_43 = new cjs.Graphics().p("AjgAzIFTj9IBvCSIlTECg");
	var mask_graphics_44 = new cjs.Graphics().p("AjkA2IFakCIBvCRIlZEIg");
	var mask_graphics_45 = new cjs.Graphics().p("AjnA4IFhkHIBuCSIleEMg");
	var mask_graphics_46 = new cjs.Graphics().p("AjqA7IFnkMIBuCRIllESg");
	var mask_graphics_47 = new cjs.Graphics().p("AjuA9IFukQIBuCRIlrEWg");
	var mask_graphics_48 = new cjs.Graphics().p("AjxBAIF0kWIBvCRIlyEcg");
	var mask_graphics_49 = new cjs.Graphics().p("Aj0BCIF6kaIBvCRIl5Egg");
	var mask_graphics_50 = new cjs.Graphics().p("Aj3BEIGAkfIBvCSIl/Elg");
	var mask_graphics_51 = new cjs.Graphics().p("Aj6BHIGHkkIBuCRImFEqg");
	var mask_graphics_52 = new cjs.Graphics().p("Aj9BJIGNkpIBuCRImLEvg");
	var mask_graphics_53 = new cjs.Graphics().p("AkBBMIGUkuIBvCRImSE0g");
	var mask_graphics_54 = new cjs.Graphics().p("AkEBOIGbkzIBuCRImZE5g");
	var mask_graphics_55 = new cjs.Graphics().p("AkHBQIGhk3IBuCRImfE+g");
	var mask_graphics_56 = new cjs.Graphics().p("AkLBSIGpk7IBuCRImmFCg");
	var mask_graphics_57 = new cjs.Graphics().p("AkOBVIGvlBIBuCRImsFIg");
	var mask_graphics_58 = new cjs.Graphics().p("AkRBXIG1lFIBuCRImzFMg");
	var mask_graphics_59 = new cjs.Graphics().p("AkUBZIG7lKIBuCRIm5FRg");
	var mask_graphics_60 = new cjs.Graphics().p("AkYBcIHClPIBuCQIm/FXg");
	var mask_graphics_61 = new cjs.Graphics().p("AkbBeIHJlUIBuCRInGFbg");
	var mask_graphics_62 = new cjs.Graphics().p("AkeBhIHPlZIBuCQInMFhg");
	var mask_graphics_63 = new cjs.Graphics().p("AkhBjIHVleIBuCRInSFlg");
	var mask_graphics_64 = new cjs.Graphics().p("AkkBlIHcliIBtCRInZFqg");
	var mask_graphics_65 = new cjs.Graphics().p("AkoBoIHjlnIBtCQInfFvg");
	var mask_graphics_66 = new cjs.Graphics().p("AkrBqIHplsIBuCRInmF0g");
	var mask_graphics_67 = new cjs.Graphics().p("AkuBtIHvlxIBuCQIntF5g");
	var mask_graphics_68 = new cjs.Graphics().p("AkxBvIH2l1IBtCQInzF9g");
	var mask_graphics_69 = new cjs.Graphics().p("Ak0ByIH8l7IBtCQIn5GDg");
	var mask_graphics_70 = new cjs.Graphics().p("Ak3B0IICmAIBtCQIn/GIg");
	var mask_graphics_71 = new cjs.Graphics().p("Ak7B2IIJmEIBuCQIoGGNg");
	var mask_graphics_72 = new cjs.Graphics().p("Ak+B4IIQmIIBtCQIoNGRg");
	var mask_graphics_73 = new cjs.Graphics().p("AlBB7IIWmOIBtCQIoTGXg");
	var mask_graphics_74 = new cjs.Graphics().p("AlFB9IIdmSIBuCQIoaGbg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-17.3,y:14.9}).wait(1).to({graphics:mask_graphics_1,x:-25.5,y:19.8}).wait(1).to({graphics:mask_graphics_2,x:-25.2,y:19.5}).wait(1).to({graphics:mask_graphics_3,x:-24.8,y:19.3}).wait(1).to({graphics:mask_graphics_4,x:-24.5,y:19.1}).wait(1).to({graphics:mask_graphics_5,x:-24.2,y:18.8}).wait(1).to({graphics:mask_graphics_6,x:-23.8,y:18.6}).wait(1).to({graphics:mask_graphics_7,x:-23.5,y:18.3}).wait(1).to({graphics:mask_graphics_8,x:-23.2,y:18.1}).wait(1).to({graphics:mask_graphics_9,x:-22.8,y:17.8}).wait(1).to({graphics:mask_graphics_10,x:-22.5,y:17.6}).wait(1).to({graphics:mask_graphics_11,x:-22.1,y:17.4}).wait(1).to({graphics:mask_graphics_12,x:-21.8,y:17.1}).wait(1).to({graphics:mask_graphics_13,x:-21.5,y:16.9}).wait(1).to({graphics:mask_graphics_14,x:-21.1,y:16.6}).wait(1).to({graphics:mask_graphics_15,x:-20.8,y:16.4}).wait(1).to({graphics:mask_graphics_16,x:-20.5,y:16.1}).wait(1).to({graphics:mask_graphics_17,x:-20.1,y:15.9}).wait(1).to({graphics:mask_graphics_18,x:-19.8,y:15.6}).wait(1).to({graphics:mask_graphics_19,x:-19.5,y:15.4}).wait(1).to({graphics:mask_graphics_20,x:-19.1,y:15.2}).wait(1).to({graphics:mask_graphics_21,x:-18.8,y:14.9}).wait(1).to({graphics:mask_graphics_22,x:-18.4,y:14.7}).wait(1).to({graphics:mask_graphics_23,x:-18.1,y:14.4}).wait(1).to({graphics:mask_graphics_24,x:-17.8,y:14.2}).wait(1).to({graphics:mask_graphics_25,x:-17.4,y:13.9}).wait(1).to({graphics:mask_graphics_26,x:-17.1,y:13.7}).wait(1).to({graphics:mask_graphics_27,x:-16.8,y:13.4}).wait(1).to({graphics:mask_graphics_28,x:-16.4,y:13.2}).wait(1).to({graphics:mask_graphics_29,x:-16.1,y:13}).wait(1).to({graphics:mask_graphics_30,x:-15.8,y:12.7}).wait(1).to({graphics:mask_graphics_31,x:-15.4,y:12.5}).wait(1).to({graphics:mask_graphics_32,x:-15.1,y:12.2}).wait(1).to({graphics:mask_graphics_33,x:-14.8,y:12}).wait(1).to({graphics:mask_graphics_34,x:-14.4,y:11.7}).wait(1).to({graphics:mask_graphics_35,x:-14.1,y:11.5}).wait(1).to({graphics:mask_graphics_36,x:-13.7,y:11.2}).wait(1).to({graphics:mask_graphics_37,x:-13.4,y:11}).wait(1).to({graphics:mask_graphics_38,x:-13.1,y:10.8}).wait(1).to({graphics:mask_graphics_39,x:-12.7,y:10.5}).wait(1).to({graphics:mask_graphics_40,x:-12.4,y:10.3}).wait(1).to({graphics:mask_graphics_41,x:-12.1,y:10}).wait(1).to({graphics:mask_graphics_42,x:-11.7,y:9.8}).wait(1).to({graphics:mask_graphics_43,x:-11.4,y:9.6}).wait(1).to({graphics:mask_graphics_44,x:-11.1,y:9.3}).wait(1).to({graphics:mask_graphics_45,x:-10.7,y:9.1}).wait(1).to({graphics:mask_graphics_46,x:-10.4,y:8.8}).wait(1).to({graphics:mask_graphics_47,x:-10,y:8.6}).wait(1).to({graphics:mask_graphics_48,x:-9.7,y:8.3}).wait(1).to({graphics:mask_graphics_49,x:-9.4,y:8.1}).wait(1).to({graphics:mask_graphics_50,x:-9,y:7.8}).wait(1).to({graphics:mask_graphics_51,x:-8.7,y:7.6}).wait(1).to({graphics:mask_graphics_52,x:-8.4,y:7.4}).wait(1).to({graphics:mask_graphics_53,x:-8,y:7.1}).wait(1).to({graphics:mask_graphics_54,x:-7.7,y:6.9}).wait(1).to({graphics:mask_graphics_55,x:-7.4,y:6.6}).wait(1).to({graphics:mask_graphics_56,x:-7,y:6.4}).wait(1).to({graphics:mask_graphics_57,x:-6.7,y:6.1}).wait(1).to({graphics:mask_graphics_58,x:-6.4,y:5.9}).wait(1).to({graphics:mask_graphics_59,x:-6,y:5.7}).wait(1).to({graphics:mask_graphics_60,x:-5.7,y:5.4}).wait(1).to({graphics:mask_graphics_61,x:-5.4,y:5.2}).wait(1).to({graphics:mask_graphics_62,x:-5,y:4.9}).wait(1).to({graphics:mask_graphics_63,x:-4.7,y:4.7}).wait(1).to({graphics:mask_graphics_64,x:-4.4,y:4.4}).wait(1).to({graphics:mask_graphics_65,x:-4,y:4.2}).wait(1).to({graphics:mask_graphics_66,x:-3.7,y:3.9}).wait(1).to({graphics:mask_graphics_67,x:-3.3,y:3.7}).wait(1).to({graphics:mask_graphics_68,x:-3,y:3.5}).wait(1).to({graphics:mask_graphics_69,x:-2.7,y:3.2}).wait(1).to({graphics:mask_graphics_70,x:-2.3,y:3}).wait(1).to({graphics:mask_graphics_71,x:-2,y:2.7}).wait(1).to({graphics:mask_graphics_72,x:-1.7,y:2.5}).wait(1).to({graphics:mask_graphics_73,x:-1.3,y:2.2}).wait(1).to({graphics:mask_graphics_74,x:-1,y:2}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AEnjhQjnDblmDo");
	this.shape.setTransform(3.5,-4.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.7,10.3,19.6,20.8);


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
(lib.WS_Cursive_S = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_574 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(574).call(this.frame_574).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(71.2,429.1,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[71.4,429.1,120.7,417.7,175.8,389.4,230.1,361.5,280.9,327.9,330.3,295.3,375.4,262,420.5,228.8,452,162,483.5,95.2,431.5,107.6]}},200).wait(15).to({x:431.5,y:107.4},0).to({guide:{path:[431.5,107.5,427.6,108.9,416.6,117.6,405.2,126.7,393.2,166.8,381.3,206.9,381.7,254.8,382.2,302.7,367.9,347,351.8,397,304.5,417.5,258.1,437.7,209.7,423.3,161.8,409,134.7,366.7,108.9,326.3,94.4,278.6]}},180).wait(16).to({x:98.3,y:283.9},0).to({guide:{path:[98.4,283.9,150.2,338.1,222.3,330.3]}},74).wait(15).to({startPosition:0},0).to({guide:{path:[222.8,330.6,248.3,278.5,294.4,243.6,342.5,207.2,402.5,210.2,460.2,213.2,505,250.8,556.1,293.8,617,272.7,628.7,268.6,635.4,258.2]}},65).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(434.8,103.9,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},200).wait(15).to({_off:false,x:97.6,y:283.7},0).to({_off:true},180).wait(16).to({_off:false,x:222.6,y:330.7},0).to({_off:true},74).wait(81));

	// Layer 4
	this.instance_1 = new lib.ar4("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(211.2,220);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(420).to({_off:false},0).wait(155));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_420 = new cjs.Graphics().p("AD2UyQgzgzAAhJQAAhIAzg0QA0gzBIAAQBJAAAzAzQAzA0AABIQAABJgzAzQgzAzhJAAQhIAAg0gzg");
	var mask_graphics_421 = new cjs.Graphics().p("AiACCQg1g1AAhNQAAhMA1g2QA2g2BKAAQBLAAA2A2QA1A2AABMQAABNg1A1Qg2A3hLAAQhKAAg2g3g");
	var mask_graphics_422 = new cjs.Graphics().p("AiGCKQg3g5gBhRQABhQA3g5QA4g5BOAAQBPAAA3A5QA4A5ABBQQgBBRg4A5Qg3A5hPAAQhOAAg4g5g");
	var mask_graphics_423 = new cjs.Graphics().p("AiMCRQg5g8AAhVQAAhUA5g8QA7g8BRAAQBSAAA5A8QA7A8AABUQAABVg7A8Qg5A8hSAAQhRAAg7g8g");
	var mask_graphics_424 = new cjs.Graphics().p("AiRCYQg8g/AAhZQAAhYA8g/QA9g/BUAAQBVAAA8A/QA9A/AABYQAABZg9A/Qg8A/hVAAQhUAAg9g/g");
	var mask_graphics_425 = new cjs.Graphics().p("AiWCfQg+hCAAhdQAAhcA+hCQA+hCBYAAQBZAAA9BCQBABCgBBcQABBdhABCQg9BChZAAQhYAAg+hCg");
	var mask_graphics_426 = new cjs.Graphics().p("AicCmQhAhFAAhhQAAhgBAhFQBBhFBbAAQBcAABABFQBBBFAABgQAABhhBBFQhABFhcAAQhbAAhBhFg");
	var mask_graphics_427 = new cjs.Graphics().p("AihCtQhDhIAAhlQAAhkBDhIQBDhIBeAAQBfAABDBIQBDBIAABkQAABlhDBIQhDBIhfAAQheAAhDhIg");
	var mask_graphics_428 = new cjs.Graphics().p("AinC0QhFhKAAhqQAAhoBFhLQBGhKBhAAQBiAABFBKQBGBLAABoQAABqhGBKQhFBLhigBQhhABhGhLg");
	var mask_graphics_429 = new cjs.Graphics().p("AisC7QhHhNAAhuQAAhtBHhOQBIhNBkABQBlgBBHBNQBIBOAABtQAABuhIBNQhHBNhlAAQhkAAhIhNg");
	var mask_graphics_430 = new cjs.Graphics().p("AiyDBQhJhPAAhyQAAhxBJhRQBLhQBnAAQBoAABKBQQBKBRAABxQAAByhKBPQhKBRhoAAQhnAAhLhRg");
	var mask_graphics_431 = new cjs.Graphics().p("Ai3DIQhMhSAAh2QAAh1BMhTQBMhUBrAAQBsAABLBUQBNBTAAB1QAAB2hNBSQhLBUhsABQhrgBhMhUg");
	var mask_graphics_432 = new cjs.Graphics().p("Ai8DQQhOhWAAh6QAAh5BOhWQBOhXBuAAQBvAABOBXQBOBWAAB5QAAB6hOBWQhOBWhvABQhugBhOhWg");
	var mask_graphics_433 = new cjs.Graphics().p("AjCDXQhQhZAAh+QAAh9BQhZQBRhZBxAAQByAABQBZQBRBZAAB9QAAB+hRBZQhQBZhyAAQhxAAhRhZg");
	var mask_graphics_434 = new cjs.Graphics().p("AjHDeQhThcAAiCQAAiBBThdQBThbB0AAQB1AABSBbQBUBdAACBQAACChUBcQhSBch1AAQh0AAhThcg");
	var mask_graphics_435 = new cjs.Graphics().p("AjNDlQhUhfAAiGQAAiFBUhgQBVheB4AAQB4AABVBeQBVBgAACFQAACGhVBfQhVBfh4AAQh4AAhVhfg");
	var mask_graphics_436 = new cjs.Graphics().p("AjSDsQhXhiAAiKQAAiJBXhjQBXhhB7AAQB7AABYBhQBXBjAACJQAACKhXBiQhYBih7AAQh7AAhXhig");
	var mask_graphics_437 = new cjs.Graphics().p("AjYDzQhZhkAAiPQAAiOBZhlQBahkB+AAQB/AABZBkQBaBlAACOQAACPhaBkQhZBlh/AAQh+AAhahlg");
	var mask_graphics_438 = new cjs.Graphics().p("AjdD6QhchnAAiTQAAiSBchoQBchnCBAAQCCAABcBnQBcBogBCSQABCThcBnQhcBoiCAAQiBAAhchog");
	var mask_graphics_439 = new cjs.Graphics().p("AjjEBQhdhqAAiXQAAiWBdhrQBfhqCEAAQCFAABeBqQBeBrAACWQAACXheBqQheBriFAAQiEAAhfhrg");
	var mask_graphics_440 = new cjs.Graphics().p("AjoEIQhghtAAibQAAiaBghuQBghtCIAAQCIAABgBtQBhBuAACaQAACbhhBtQhgBuiIAAQiIAAhghug");
	var mask_graphics_441 = new cjs.Graphics().p("AjtEPQhjhwABifQgBieBjhxQBihwCLAAQCLAABjBwQBjBxAACeQAACfhjBwQhjBxiLAAQiLAAhihxg");
	var mask_graphics_442 = new cjs.Graphics().p("AjzEWQhkhzAAijQAAiiBkh0QBlhzCOAAQCPAABkBzQBlB0AACiQAACjhlBzQhkB0iPAAQiOAAhlh0g");
	var mask_graphics_443 = new cjs.Graphics().p("Aj5EdQhmh2AAinQAAimBmh3QBoh2CRABQCSgBBmB2QBoB3AACmQAACnhoB2QhmB2iSAAQiRAAhoh2g");
	var mask_graphics_444 = new cjs.Graphics().p("Aj+EkQhoh4gBisQABirBoh5QBqh5CUAAQCVAABpB5QBqB5gBCrQABCshqB4QhpB5iVAAQiUAAhqh5g");
	var mask_graphics_445 = new cjs.Graphics().p("AkDErQhrh7AAiwQAAivBrh8QBsh8CXAAQCYAABrB8QBsB8AACvQAACwhsB7QhrB8iYAAQiXAAhsh8g");
	var mask_graphics_446 = new cjs.Graphics().p("AkJEyQhth+AAi0QAAiyBtiBQBvh9CagBQCbABBtB9QBvCBAACyQAAC0hvB+QhtB/ibABQiagBhvh/g");
	var mask_graphics_447 = new cjs.Graphics().p("AkPE4QhuiAAAi4QAAi3BuiDQBxiACegBQCeABBwCAQBxCDAAC3QAAC4hxCAQhwCEieAAQieAAhxiEg");
	var mask_graphics_448 = new cjs.Graphics().p("AkUFAQhxiEAAi8QAAi7BxiFQBziEChAAQCiAAByCEQByCFAAC7QAAC8hyCEQhyCFiiAAQihAAhziFg");
	var mask_graphics_449 = new cjs.Graphics().p("AkaFHQhziHAAjAQAAi/BziIQB2iHCkAAQClAAB0CHQB1CIAAC/QAADAh1CHQh0CIilAAQikAAh2iIg");
	var mask_graphics_450 = new cjs.Graphics().p("AkfFOQh2iKAAjEQAAjDB2iLQB4iKCnAAQCoAAB2CKQB4CLAADDQAADEh4CKQh2CLioAAQinAAh4iLg");
	var mask_graphics_451 = new cjs.Graphics().p("AkkFVQh4iNAAjIQAAjHB4iPQB5iMCrAAQCrAAB5CMQB5CPAADHQAADIh5CNQh5COirAAQirAAh5iOg");
	var mask_graphics_452 = new cjs.Graphics().p("AkqFcQh6iQAAjMQAAjLB6iSQB8iPCuAAQCuAAB7CPQB8CSAADLQAADMh8CQQh7CRiuAAQiuAAh8iRg");
	var mask_graphics_453 = new cjs.Graphics().p("AkvFjQh9iSAAjRQAAjPB9iVQB+iSCxAAQCyAAB9CSQB+CVAADPQAADRh+CSQh9CUiyAAQixAAh+iUg");
	var mask_graphics_454 = new cjs.Graphics().p("Ak1FqQh+iWAAjUQAAjTB+iYQCBiVC0AAQC1AAB/CVQCACYAADTQAADUiACWQh/CXi1AAQi0AAiBiXg");
	var mask_graphics_455 = new cjs.Graphics().p("Ak6FxQiBiZAAjYQAAjYCBiZQCDiZC3AAQC4AACCCZQCCCZAADYQAADYiCCZQiCCai4AAQi3AAiDiag");
	var mask_graphics_456 = new cjs.Graphics().p("Ak/F4QiEibAAjdQAAjcCEidQCEibC7AAQC7AACECbQCFCdAADcQAADdiFCbQiECdi7AAQi7AAiEidg");
	var mask_graphics_457 = new cjs.Graphics().p("AlFF/QiGieAAjhQAAjgCGigQCHieC+AAQC+AACGCeQCICgAADgQAADhiICeQiGCgi+AAQi+AAiHigg");
	var mask_graphics_458 = new cjs.Graphics().p("AlKGGQiIihAAjlQAAjkCIijQCJihDBAAQDBAACJChQCJCjAADkQAADliJChQiJCjjBAAQjBAAiJijg");
	var mask_graphics_459 = new cjs.Graphics().p("AlQGNQiKikAAjpQAAjoCKimQCMikDEAAQDFAACKCkQCMCmAADoQAADpiMCkQiKCmjFAAQjEAAiMimg");
	var mask_graphics_460 = new cjs.Graphics().p("AlVGUQiNinAAjtQAAjsCNipQCOinDHAAQDIAACNCnQCOCpAADsQAADtiOCnQiNCpjIAAQjHAAiOipg");
	var mask_graphics_461 = new cjs.Graphics().p("AlbGbQiOiqAAjxQAAjwCOisQCQiqDLAAQDLAACPCqQCQCsAADwQAADxiQCqQiPCsjLAAQjLAAiQisg");
	var mask_graphics_462 = new cjs.Graphics().p("AlgGiQiRisAAj2QAAj1CRiuQCTitDNAAQDOAACSCtQCSCuAAD1QAAD2iSCsQiSCvjOAAQjNAAiTivg");
	var mask_graphics_463 = new cjs.Graphics().p("AlmGpQiTivAAj6QAAj5CTixQCViwDRAAQDRAACUCwQCVCxAAD5QAAD6iVCvQiUCyjRAAQjRAAiViyg");
	var mask_graphics_464 = new cjs.Graphics().p("AlrGwQiWiyAAj+QAAj9CWi0QCXizDUAAQDUAACXCzQCWC0AAD9QAAD+iWCyQiXC1jUgBQjUABiXi1g");
	var mask_graphics_465 = new cjs.Graphics().p("AlwG3QiYi1AAkCQAAkBCYi3QCYi2DYAAQDYAACYC2QCZC3AAEBQAAECiZC1QiYC3jYAAQjYAAiYi3g");
	var mask_graphics_466 = new cjs.Graphics().p("Al2G+Qiai4AAkGQAAkFCai6QCbi5DbAAQDbAACaC5QCcC6AAEFQAAEGicC4QiaC7jbAAQjbAAibi7g");
	var mask_graphics_467 = new cjs.Graphics().p("Al7HFQidi7ABkKQgBkJCdi9QCdi7DeAAQDeAACcC7QCfC9AAEJQAAEKifC7QicC+jeAAQjeAAidi+g");
	var mask_graphics_468 = new cjs.Graphics().p("AmBHMQiei+AAkOQAAkOCei/QCgi+DhAAQDiAACeC+QCgC/AAEOQAAEOigC+QieDAjiABQjhgBigjAg");
	var mask_graphics_469 = new cjs.Graphics().p("AmHHTQigjAAAkTQAAkRCgjDQCjjBDkAAQDkAAChDBQCjDDAAERQAAETijDAQihDDjkAAQjkAAijjDg");
	var mask_graphics_470 = new cjs.Graphics().p("AmMHaQiijDgBkXQABkVCijGQCljEDnAAQDoAACjDEQCkDGAAEVQAAEXikDDQijDGjoAAQjnAAiljGg");
	var mask_graphics_471 = new cjs.Graphics().p("AmRHhQiljGAAkbQAAkaCljIQCnjHDqAAQDrAACmDHQCmDIAAEaQAAEbimDGQimDJjrAAQjqAAinjJg");
	var mask_graphics_472 = new cjs.Graphics().p("AmXHoQinjJAAkfQAAkeCnjMQCpjJDuAAQDuAACoDJQCpDMAAEeQAAEfipDJQioDMjuAAQjuAAipjMg");
	var mask_graphics_473 = new cjs.Graphics().p("AmdHvQiojMAAkjQAAkiCojPQCsjMDxAAQDxAACqDMQCsDPgBEiQABEjisDMQiqDPjxAAQjxAAisjPg");
	var mask_graphics_474 = new cjs.Graphics().p("AmiH2QirjPAAknQAAkmCrjSQCujPD0AAQD0AACtDPQCtDSAAEmQAAEnitDPQitDSj0AAQj0AAiujSg");
	var mask_graphics_475 = new cjs.Graphics().p("AmnH9QiujSAAkrQAAkqCujVQCwjSD3AAQD4AACuDSQCwDVAAEqQAAEriwDSQiuDVj4AAQj3AAiwjVg");
	var mask_graphics_476 = new cjs.Graphics().p("AmtIEQiwjVAAkvQAAkuCwjYQCzjVD6AAQD7AACxDVQCyDYAAEuQAAEviyDVQixDYj7AAQj6AAizjYg");
	var mask_graphics_477 = new cjs.Graphics().p("AmyILQiyjYAAkzQAAkyCyjbQC0jYD+AAQD+AACzDYQC0DbAAEyQAAEzi0DYQizDbj+AAQj+AAi0jbg");
	var mask_graphics_478 = new cjs.Graphics().p("Am4ISQi0jbAAk3QAAk3C0jdQC3jbEBAAQEBAAC1DbQC3DdAAE3QAAE3i3DbQi1DekBAAQkBAAi3jeg");
	var mask_graphics_479 = new cjs.Graphics().p("Am9IZQi3jeAAk7QAAk7C3jgQC5jdEEgBQEEABC4DdQC5DgAAE7QAAE7i5DeQi4DgkEAAQkEAAi5jgg");
	var mask_graphics_480 = new cjs.Graphics().p("AnCIgQi5jgAAlAQAAk/C5jjQC7jgEHgBQEHABC6DgQC7DjAAE/QAAFAi7DgQi6DjkHAAQkHAAi7jjg");
	var mask_graphics_481 = new cjs.Graphics().p("AnIInQi7jjAAlEQAAlDC7jmQC9jjELAAQELAAC8DjQC9DmAAFDQAAFEi9DjQi8DnkLAAQkLAAi9jng");
	var mask_graphics_482 = new cjs.Graphics().p("AnNIvQi+jnAAlIQAAlHC+jpQC/jmEOAAQEOAAC+DmQDADpAAFHQAAFIjADnQi+DpkOAAQkOAAi/jpg");
	var mask_graphics_483 = new cjs.Graphics().p("AnTI1Qi/jpAAlMQAAlLC/jsQDCjqERABQERgBDBDqQDBDsAAFLQAAFMjBDpQjBDtkRAAQkRAAjCjtg");
	var mask_graphics_484 = new cjs.Graphics().p("AnYI8QjCjsAAlQQAAlPDCjvQDEjsEUAAQEUAADDDsQDEDvAAFPQAAFQjEDsQjDDvkUAAQkUAAjEjvg");
	var mask_graphics_485 = new cjs.Graphics().p("AneJDQjEjvAAlUQAAlTDEjyQDHjvEXAAQEXAADFDvQDHDyAAFTQAAFUjHDvQjFDykXAAQkXAAjHjyg");
	var mask_graphics_486 = new cjs.Graphics().p("AnjJKQjHjyAAlYQAAlXDHj1QDJjyEaAAQEaAADIDyQDJD1AAFXQAAFYjJDyQjID1kaAAQkaAAjJj1g");
	var mask_graphics_487 = new cjs.Graphics().p("AnpJRQjIj1AAlcQAAlcDIj3QDLj1EeAAQEeAADJD1QDLD3AAFcQAAFcjLD1QjJD4keAAQkeAAjLj4g");
	var mask_graphics_488 = new cjs.Graphics().p("AnuJYQjLj3AAlhQAAlgDLj6QDNj4EhAAQEhAADMD4QDND6AAFgQAAFhjND3QjMD7khAAQkhAAjNj7g");
	var mask_graphics_489 = new cjs.Graphics().p("An0JgQjMj7AAllQAAljDMj/QDQj6EkAAQEkAADOD6QDPD/AAFjQAAFljPD7QjOD9kkAAQkkAAjQj9g");
	var mask_graphics_490 = new cjs.Graphics().p("An5JmQjQj9AAlpQAAloDQkAQDRj+EoAAQEoAADPD+QDTEAAAFoQAAFpjTD9QjPEBkoAAQkoAAjRkBg");
	var mask_graphics_491 = new cjs.Graphics().p("AiTcBQjSkBAAltQAAltDSkDQDTkBErAAQEqAADTEBQDUEDAAFtQAAFtjUEBQjTEDkqAAQkrAAjTkDg");
	var mask_graphics_492 = new cjs.Graphics().p("AorJ1QjkkEAAlxQAAlwDkkGQDnkEFEAAQFFAADlEEQDmEGAAFwQAAFxjmEEQjlEGlFAAQlEAAjnkGg");
	var mask_graphics_493 = new cjs.Graphics().p("ApYJ8Qj2kHAAl1QAAl0D2kKQD5kGFfAAQFfAAD3EGQD5EKABF0QgBF1j5EHQj3EJlfAAQlfAAj5kJg");
	var mask_graphics_494 = new cjs.Graphics().p("AkacUQkKkJAAl5QAAl6EKkMQEMkJF4AAQF5AAEKEJQEMEMAAF6QAAF5kMEJQkKEMl5AAQl4AAkMkMg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(420).to({graphics:mask_graphics_420,x:54.5,y:138.1}).wait(1).to({graphics:mask_graphics_421,x:92.3,y:259.7}).wait(1).to({graphics:mask_graphics_422,x:93.1,y:260.6}).wait(1).to({graphics:mask_graphics_423,x:93.8,y:261.4}).wait(1).to({graphics:mask_graphics_424,x:94.5,y:262.3}).wait(1).to({graphics:mask_graphics_425,x:95.3,y:263.2}).wait(1).to({graphics:mask_graphics_426,x:96,y:264.1}).wait(1).to({graphics:mask_graphics_427,x:96.8,y:265}).wait(1).to({graphics:mask_graphics_428,x:97.6,y:265.9}).wait(1).to({graphics:mask_graphics_429,x:98.3,y:266.8}).wait(1).to({graphics:mask_graphics_430,x:99,y:267.7}).wait(1).to({graphics:mask_graphics_431,x:99.8,y:268.6}).wait(1).to({graphics:mask_graphics_432,x:100.5,y:269.5}).wait(1).to({graphics:mask_graphics_433,x:101.3,y:270.4}).wait(1).to({graphics:mask_graphics_434,x:102,y:271.3}).wait(1).to({graphics:mask_graphics_435,x:102.8,y:272.2}).wait(1).to({graphics:mask_graphics_436,x:103.5,y:273.1}).wait(1).to({graphics:mask_graphics_437,x:104.3,y:274}).wait(1).to({graphics:mask_graphics_438,x:105,y:274.9}).wait(1).to({graphics:mask_graphics_439,x:105.8,y:275.8}).wait(1).to({graphics:mask_graphics_440,x:106.5,y:276.7}).wait(1).to({graphics:mask_graphics_441,x:107.3,y:277.6}).wait(1).to({graphics:mask_graphics_442,x:108,y:278.5}).wait(1).to({graphics:mask_graphics_443,x:108.8,y:279.4}).wait(1).to({graphics:mask_graphics_444,x:109.5,y:280.3}).wait(1).to({graphics:mask_graphics_445,x:110.2,y:281.2}).wait(1).to({graphics:mask_graphics_446,x:111,y:282.1}).wait(1).to({graphics:mask_graphics_447,x:111.8,y:283}).wait(1).to({graphics:mask_graphics_448,x:112.5,y:283.8}).wait(1).to({graphics:mask_graphics_449,x:113.3,y:284.7}).wait(1).to({graphics:mask_graphics_450,x:114,y:285.6}).wait(1).to({graphics:mask_graphics_451,x:114.7,y:286.5}).wait(1).to({graphics:mask_graphics_452,x:115.5,y:287.4}).wait(1).to({graphics:mask_graphics_453,x:116.2,y:288.3}).wait(1).to({graphics:mask_graphics_454,x:117,y:289.2}).wait(1).to({graphics:mask_graphics_455,x:117.7,y:290.1}).wait(1).to({graphics:mask_graphics_456,x:118.5,y:291}).wait(1).to({graphics:mask_graphics_457,x:119.2,y:291.9}).wait(1).to({graphics:mask_graphics_458,x:120,y:292.8}).wait(1).to({graphics:mask_graphics_459,x:120.7,y:293.7}).wait(1).to({graphics:mask_graphics_460,x:121.5,y:294.6}).wait(1).to({graphics:mask_graphics_461,x:122.2,y:295.5}).wait(1).to({graphics:mask_graphics_462,x:123,y:296.4}).wait(1).to({graphics:mask_graphics_463,x:123.7,y:297.3}).wait(1).to({graphics:mask_graphics_464,x:124.5,y:298.2}).wait(1).to({graphics:mask_graphics_465,x:125.2,y:299.1}).wait(1).to({graphics:mask_graphics_466,x:126,y:300}).wait(1).to({graphics:mask_graphics_467,x:126.7,y:300.9}).wait(1).to({graphics:mask_graphics_468,x:127.5,y:301.8}).wait(1).to({graphics:mask_graphics_469,x:128.2,y:302.6}).wait(1).to({graphics:mask_graphics_470,x:129,y:303.5}).wait(1).to({graphics:mask_graphics_471,x:129.7,y:304.4}).wait(1).to({graphics:mask_graphics_472,x:130.5,y:305.3}).wait(1).to({graphics:mask_graphics_473,x:131.2,y:306.2}).wait(1).to({graphics:mask_graphics_474,x:131.9,y:307.1}).wait(1).to({graphics:mask_graphics_475,x:132.7,y:308}).wait(1).to({graphics:mask_graphics_476,x:133.4,y:308.9}).wait(1).to({graphics:mask_graphics_477,x:134.2,y:309.8}).wait(1).to({graphics:mask_graphics_478,x:134.9,y:310.7}).wait(1).to({graphics:mask_graphics_479,x:135.7,y:311.6}).wait(1).to({graphics:mask_graphics_480,x:136.4,y:312.5}).wait(1).to({graphics:mask_graphics_481,x:137.2,y:313.4}).wait(1).to({graphics:mask_graphics_482,x:137.9,y:314.3}).wait(1).to({graphics:mask_graphics_483,x:138.7,y:315.2}).wait(1).to({graphics:mask_graphics_484,x:139.4,y:316.1}).wait(1).to({graphics:mask_graphics_485,x:140.2,y:317}).wait(1).to({graphics:mask_graphics_486,x:140.9,y:317.9}).wait(1).to({graphics:mask_graphics_487,x:141.7,y:318.8}).wait(1).to({graphics:mask_graphics_488,x:142.4,y:319.7}).wait(1).to({graphics:mask_graphics_489,x:143.2,y:320.6}).wait(1).to({graphics:mask_graphics_490,x:143.9,y:321.5}).wait(1).to({graphics:mask_graphics_491,x:108.4,y:205.2}).wait(1).to({graphics:mask_graphics_492,x:150.9,y:323.3}).wait(1).to({graphics:mask_graphics_493,x:157.3,y:324.1}).wait(1).to({graphics:mask_graphics_494,x:127.3,y:208}).wait(81));

	// 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20.6,1,1).p("Apwj0QIBI2LghZ");
	this.shape_1.setTransform(159.8,307.1);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(420).to({_off:false},0).wait(155));

	// Layer 6
	this.instance_2 = new lib.ar2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(398,89.3,1,1,0,0,0,-1.4,-4.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(224).to({_off:false},0).wait(351));

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_224 = new cjs.Graphics().p("EAhCAL1IAA0BIEXAAIAAUBg");
	var mask_1_graphics_225 = new cjs.Graphics().p("AhtJrQAAgUgDgVQgIiPgQiVQgPjagMjiQgMjqAAjuIEZgKIAFA4IADAmQAIB8ANCBQAODBALDGQANDtADDzIgDAyIkYANIgCgWg");
	var mask_1_graphics_226 = new cjs.Graphics().p("AhOJuQgDgTgFgUQgQiGgfiUQgfjUgYjlQgYjrAAj1IEdgVIAKA0IAGAkQAOB0AbCBQAbC7AYDHQAYDuAID5IgGAyIkZAbIgEgUg");
	var mask_1_graphics_227 = new cjs.Graphics().p("AgwJxQgEgTgHgSQgZh+guiTQgujOgljoQgjjtAAj6QCKgQCWgPIAOAtQAEARAGASQAWBuAoB/QAoC0AjDLQAlDtALEAIgJAxIkaAqIgGgSg");
	var mask_1_graphics_228 = new cjs.Graphics().p("AgTJ0QgEgSgJgRQgih2g+iSQg9jIgxjqQgvjvAAj/QCLgXCYgUIAUAoQAFAQAIAQQAdBoA1B+QA1CvAwDNQAwDtAQEGIgMAxQiGAbiXAcIgIgPg");
	var mask_1_graphics_229 = new cjs.Graphics().p("AALJ4QgHgRgKgRQgphuhNiQQhOjCg8jtQg7jxgBkFQCLgcCdgZIAZAhQAFAQAKAQQAkBhBDB8QBDCqA7DOQA9DtATENIgPAxQiGAiiZAiIgKgLg");
	var mask_1_graphics_230 = new cjs.Graphics().p("AApJ7QgIgQgNgQQgxhmhciOQhdi8hJjxQhHjyAAkLQCKghChgfIAdAcQAIAPAMAPQAqBaBQB7QBRClBGDQQBKDtAWETIgSAwQiEApicApIgMgIg");
	var mask_1_graphics_231 = new cjs.Graphics().p("ABHJ+QgKgPgPgOQg5hfhsiNQhsi2hVjzQhSjzgBkRQCKgnClgkIAiAWQAIAOAOAOQAxBTBeB6QBeCgBTDTQBWDrAaEaIgVAwQiDAwifAwIgOgGg");
	var mask_1_graphics_232 = new cjs.Graphics().p("ABlKBQgLgOgRgOQhChWh7iMQh7iwhij2Qhej1AAkVIAAgBQCJgtCpgpIAmAQQAKAOARANQA5BNBqB4QBrCbBfDVQBiDrAeEfQgMAZgNAXQiBA3ihA4IgRgEg");
	var mask_1_graphics_233 = new cjs.Graphics().p("ACDKEQgLgNgVgNQhKhOiKiKQiLirhuj4Qhpj3gBkbIAAgBQCJgyCtguIArAKQALAMATANQBABGB4B3QB4CVBqDXQBuDsAiElQgNAYgOAYQiAA9ilA/IgSgBg");
	var mask_1_graphics_234 = new cjs.Graphics().p("AB9JuQhShFiZiKQibikh5j8Qh2j4gBkhIAAgBQCJg3Cwg0IAxAFQAMALAUAMIDNC1QCGCQB2DZQB6DrAmEsIgeAwQh/BDioBGIgUACQgNgMgXgMg");
	var mask_1_graphics_235 = new cjs.Graphics().p("ACYJzQhag+iqiIQipieiGkAQiBj5gBkmIAAgBQCJg+Czg3IA1gCQANAKAXALQBPA5CTB1QCSCKCCDbQCHDrApEzQgPAXgSAYQh9BKirBNIgWAFQgOgMgZgKg");
	var mask_1_graphics_236 = new cjs.Graphics().p("ACyJ5Qhig2i5iGQi5iYiSkDQiNj6gBksIAAgBQCIhDC4g9IA6gHQAOAJAZAKQBVAyChBzQCgCFCODdQCTDrAtE5QgRAYgTAXQh8BRitBTIgZAIQgPgKgcgKg");
	var mask_1_graphics_237 = new cjs.Graphics().p("ADNKAQhrgujIiFQjJiTiekEQiYj8gCkyIAAgBQCJhJC6hCIBAgNQAPAJAbAJQBdArCuByQCtB/CaDfQCfDrAxFAQgTAXgUAXQh8BYivBbIgbAKQgRgKgdgIg");
	var mask_1_graphics_238 = new cjs.Graphics().p("ADoKGQhzgljYiEQjYiMiqkJQilj9gBk4IAAgBQCIhOC+hHIBEgTQARAIAdAIQBkAlC7BxQC7B5ClDhQCrDsA1FFQgTAXgXAYQh6BeiyBiIgcANQgTgJgfgIg");
	var mask_1_graphics_239 = new cjs.Graphics().p("AECKNQh7gdjoiDQjniGi3kLQiwj/gBk+IAAgBQCIhUDBhMIBKgZQASAHAfAIQBrAeDIBvQDJB1CxDiQC3DsA5FMIgtAuQh5Bmi1BoIgeAQQgVgIghgHg");
	var mask_1_graphics_240 = new cjs.Graphics().p("AEcKTQiDgUj3iCQj2iAjDkOQi8kBgClDIABgBQCihrD5heQATAFAgAIQBzAXDWBuQDWBvC8DkQDEDsA9FSQiKCMj3CQQgUgGglgHg");
	var mask_1_graphics_241 = new cjs.Graphics().p("AFVKjIgogHIgNgCQhagMiNg8QgygVg3gbIgmgTIgYgMQgvgZgtgdQhwhKhlhpQgsgvgqg1IgGgIIgjgtQigjXgekJQgGg3gBg4IAAgBQBDgwBTgtQA/gjBIghIAxgWIArgSIAigOIAUAFIAhAGQBOANB8A0IASAIIA6AaIAdAOIAcANIAZAMIAHAEQAtAYAuAeQBvBLBpBsQAnAoAmAtIANAPIADAEQCwDbBAEvIAIArQgVAYgZAYQgyAwg+AwQhDA1hSA2IgsAcIgfATIgRgEg");
	var mask_1_graphics_242 = new cjs.Graphics().p("AFlKqIgpgFIgMgBQhdgJiPg6Qg0gTg4gaIgngSIgZgMQgwgYgvgdQhzhJhohqQgugvgrg2IgHgIIgjguQimjaggkOQgGg4AAg5IAAgBQBBgzBTgwQA/glBIgkIAygXIAqgUIAjgOIAUAEIAhAFQBRAKB+AyIATAHQAdALAeAOIAeANIAdANIAYAMIAIADQAvAYAuAeQBzBJBtBuQAoAoAnAuIANAOIADAFQC3DdBBE2IAIAsQgUAZgYAZQgxAyg+AyQhDA4hSA4IgtAdIgfATIgRgDg");
	var mask_1_graphics_243 = new cjs.Graphics().p("AF1KxIgpgDIgMgBQhfgFiSg3Qg1gTg6gYIgogSIgZgLQgygYgwgdQh3hHhrhsQgvgvgtg2IgHgJIgkgtQiqjdgjkVQgGg4gBg6IAAgBQBBg2BSg0QA/gnBIgmIAygZIArgVIAjgOIAUADIAiADQBTAHCAAwIATAHIA+AYIAeAMIAeANIAZALIAHADQAxAXAwAeQB2BIBwBuQApApApAuIANAQIADAEQC9DgBCE8IAJAtQgUAagXAaQgwA0g9A1QhDA6hTA6IguAeIgfAUIgRgCg");
	var mask_1_graphics_244 = new cjs.Graphics().p("AGGK4IgqgCIgNgBQhgAAiWg0Qg1gSg8gXIgogRIgagMQgzgXgygcQh6hHhuhrQgxgwgvg3IgHgJQgTgWgSgYQiujfglkbQgHg6gBg7IAAgBQA/g5BSg2QA+gqBKgoIAygaIAsgWIAjgQIAUADIAjACQBUAECDAuIATAGIA/AWIAfAMIAfAMIAZALIAIAEQAyAWAxAdQB7BIByBvQArApApAvIAOAPIAEAEQDCDlBDFBQAFAWAEAXQgSAcgWAbQgvA2g9A2QhDA9hUA9IguAfIgfAVIgRgCg");
	var mask_1_graphics_245 = new cjs.Graphics().p("AGWK/IgrAAIgMAAQhjADiYgyQg3gQg9gXIgpgQIgbgLQg1gWgygcQh+hGhyhsQgygxgwg4IgHgJIgnguQizjignkgQgGg8gBg7IAAgCQA+g7BRg6QA+gsBKgqIAygcIAsgXIAkgQIAUACIAjABQBXAACFAsIAUAFIBAAWIAgAMIAfALIAaALIAIAEQA0AVAyAcQB+BHB2BwQAsAqArAuIANAQIAFAFQDIDnBFFHIAIAvQgRAcgVAcQgvA4g9A5QhCA/hUA/IguAhIggAVIgRgBg");
	var mask_1_graphics_246 = new cjs.Graphics().p("ABvKfQg4gPg/gWIgqgQIgcgKQg1gWg1gcQiBhEh1huQgzgwgyg5IgHgJQgUgWgUgZQi3jkgqknQgHg8gBg9IAAgBQA9g/BRg8QA+guBKgtIAzgdIAsgZIAkgRIAVACIAjAAQBZgDCHApIAUAGIBCATIAiAMIAfALIAbAKIAIAEQA1AVA0AcQCBBFB5BxQAtAqAsAvIAOAQIAFAFQDODqBGFOIAJAvQgRAdgUAdQguA7g8A7QhDBBhUBCIgvAiIgfAVIgSAAIgrABIgMAAIgdACQheAAiFgpg");
	var mask_1_graphics_247 = new cjs.Graphics().p("AB6KtQg6gOhAgVIgrgPIgcgKQg3gVg2gbQiEhEh5huQg1gxgzg5IgHgJIgpgwQi8jogskrQgHg+gBg+IAAgBQA8hCBQg/QA+gwBKgvIAzgfIAtgaIAkgRIAVAAIAkgBQBbgGCJAnIAVAFIBDATIAjALIAfAKIAcAKIAIAEQA3AUA1AcQCFBEB8ByQAvAqAtAwIAOAQIAFAFQDUDtBIFUIAIAwQgPAegTAfQguA9g8A8QhCBEhVBEIgvAjIggAWIgRABQgUACgYAAIgNABQgWACgYAAQhaAAh8gjg");
	var mask_1_graphics_248 = new cjs.Graphics().p("ACFK8Qg7gMhDgVIgrgOIgcgKQg5gUg3gbQiIhDh8hvQg2gxg0g6IgIgJQgWgXgUgZQjAjrgukyQgIg+gBg/IAAAAIAAgBQA7hFBQhCQA9gzBKgxQAZgRAbgPQAVgOAYgNIAkgSIAWgBIAkgCQBdgJCLAlIAVAEIBFASIAkAKIAgALIAcAJIAJADQA4AUA2AcQCIBDCAByQAwArAuAwIAPAQIAFAFQDaDxBJFaIAJAxQgPAfgSAfQgtBAg7A+QhDBHhWBGIgvAkIggAXIgRABIgsAEIgNABQgdAFggAAQhXAAh1gfg");
	var mask_1_graphics_249 = new cjs.Graphics().p("ACQLLQg9gLhEgUIgsgOIgdgJQg7gUg4gaQiLhCh/hwQg4gyg2g6IgIgJQgVgYgVgZQjFjtgxk4QgHg/gChAIAAgCQA6hHBQhFQA9g2BLgzQAYgRAbgRQAWgOAXgOQASgKAUgIIAVgBIAlgEQBegMCOAiIAWAEIBGARIAlAKIAgAKIAeAJIAIADQA6ATA3AbQCMBDCDBzQAxAqAvAyIAQAQIAEAFQDhDzBKFgIAJAyQgOAggRAhQgrBBg9BBQhBBJhXBIQgXATgZATIgfAXIgSADIgsAFIgOABQgjAHgrAAQhTAAhsgag");
	var mask_1_graphics_250 = new cjs.Graphics().p("ACbLaQg+gKhFgTIgugNIgegJQg7gTg6gaQiPhBiChxQg6gyg3g7IgIgJIgrgxQjKjwgzk+QgIhBgChBIAAgBQA6hLBOhHQA+g4BLg2QAYgSAbgRQAWgPAYgOQASgLAUgJIAWgBQAQgDAVgCQBhgPCPAgIAWAEQAkAGAkAJIAmAJIAhAKIAeAIIAJADQA6ATA5AbQCQBBCGB0QAyArAxAyIAQAQIAFAFQDlD3BNFmIAJAzQgNAhgRAhQgqBEg8BDQhCBMhXBKQgXAUgZATIggAYIgSADQgTAEgaADIgNABQgrAKg0AAQhPAAhkgWg");
	var mask_1_graphics_251 = new cjs.Graphics().p("ACmLoQg/gIhHgSIgugMIgfgJQg9gTg7gaQiSg/iGhyQg6gyg5g8IgJgJQgWgYgWgaQjOjyg1lEQgJhCgBhCIAAAAIAAgBQA3hOBPhKQA9g7BLg4QAZgSAbgSQAWgQAYgPIAmgUIAXgCQARgEAUgCQBigSCSAeIAXADIBKAOIAmAIIAjAKIAdAIIAJADQA8ASA7AaQCTBBCKB1QAzArAyAyIAQAQIAFAGQDsD5BNFtQAFAZAEAaQgMAjgPAiQgqBGg7BFQhCBOhYBNQgXAUgZAUIggAYIgSAEQgUAFgZAEIgOACQgyAMg9AAQhLAAhdgTg");
	var mask_1_graphics_252 = new cjs.Graphics().p("ACxL3QhBgHhJgRIgugMIgfgIQg/gSg8gaQiWg+iJhzQg8gzg6g8IgJgJIgtgyQjTj1g4lKQgIhDgChDIAAgBQA3hRBOhOQA8g8BMg6QAZgUAbgTQAXgQAXgPQATgLAUgKIAXgDQARgEAVgDQBkgWCVAcIAXADIBLANIAnAIIAjAJIAeAIIAJADQA+ARA8AaQCXA/CNB2QA0ArAzAzIAQARIAGAFQDyD9BPFyQAEAaAEAbQgKAjgPAkQgqBIg6BHQhCBQhYBPQgXAVgaAVIggAZIgSAEQgUAGgaAEIgOADQg4AQhIAAQhGAAhVgQg");
	var mask_1_graphics_253 = new cjs.Graphics().p("AC7MGQhBgGhKgQIgwgLIgggJQg/gRg+gZQiag+iMhzQg+gzg7g9IgJgJQgYgZgWgaQjYj4g6lPQgIhEgDhEIAAgBIAAgBQA2hUBOhQQA9g/BLg8QAZgUAcgUQAWgRAYgQQATgLAUgKIAYgEQARgFAVgEQBmgYCWAaIAZACIBLAMIApAHIAkAJIAeAHIAKADQA/ARA9AZQCbA/CQB2QA1AsA0AzIARARIAGAGQD3D/BRF5IAJA1QgKAlgOAkQgpBLg6BJQhCBThYBRQgXAWgaAVIghAZIgSAGQgVAHgZAEIgOADQhAAUhSAAQhCAAhNgNg");
	var mask_1_graphics_254 = new cjs.Graphics().p("ADGMUQhDgFhMgOIgxgLIgggIQhBgRg/gYQicg9iQh0Qg/g0g9g9IgJgKQgZgZgWgaQjdj6g8lWQgJhFgChFIAAgBIAAgBQA0hWBOhTQA8hCBMg/QAZgUAcgVQAXgRAYgRQATgMAUgKIAYgEQASgGAVgEQBogbCYAXIAZACIBNAKIAqAHIAkAIIAgAIIAJACQBBAQA+AZQCeA+CUB3QA2AsA2A0IARARIAGAGQD9ECBSF/IAJA2QgJAmgMAlQgpBNg6BLQhBBWhZBTQgYAWgaAWIghAaIgRAHQgWAHgZAGIgPADQhFAYhcAAQg9AAhHgLg");
	var mask_1_graphics_255 = new cjs.Graphics().p("ADRMjQhEgEhNgOIgygKIghgHQhDgQhAgYQigg8iTh1QhBg0g+g+IgKgKQgYgZgYgbQjhj8g+lcQgJhGgChGIAAgBIAAgBQAzhaBNhWQA8hDBMhBQAagWAbgVQAXgSAZgSIAogWIAXgFQASgGAWgFQBqgfCbAVIAZACIBPAJIApAHIAmAHIAgAHIAKADQBCAPBAAZQChA8CXB5QA4AsA2A0IARARIAHAHQEDEFBUGFIAIA3QgIAmgLAnQgnBPg7BNQhBBYhZBWQgYAXgaAWIghAbIgSAHQgWAIgaAGIgOAEQhNAchnAAQg3AAg/gIg");
	var mask_1_graphics_256 = new cjs.Graphics().p("ADcMxQhGgChOgNIgzgKIgigHQhEgPhBgYQijg7iXh2QhCg0g/g/IgLgKQgZgZgYgbQjlj/hBlhQgKhIgBhHIAAgBIAAgBQAxhcBOhZQA7hGBNhEQAZgWAcgWQAXgTAZgSQATgMAVgKIAYgGQASgHAWgGQBsghCdASIAZABIBRAIIAqAHIAnAHIAhAHIAKACQBDAOBBAZQCkA7CbB6QA5AsA4A1IARARIAHAHQEJEIBVGLIAJA4QgHAngKAoQgnBRg6BQQhBBahaBYQgYAXgbAXIghAcIgSAIQgWAJgaAHIgOAEQhTAhhxAAQgyAAg5gHg");
	var mask_1_graphics_257 = new cjs.Graphics().p("ADnNAQhHgBhQgMIg0gJIgigHQhFgOhEgYQimg6iah3QhEg0hAhAIgLgKQgagZgYgbQjqkChDloQgKhIgChIIAAgBIAAgBQAxhgBNhbQA7hJBNhGQAZgWAcgXQAYgUAZgSQATgNAVgLIAYgGQATgIAWgGQBugkCfAQIAaABIBSAGIArAGIAnAHIAjAGIAJACQBFAOBCAYQCoA7CeB6QA6AtA5A1IASARIAHAHQEPELBXGSIAIA4QgGApgJApQgmBTg6BSQhBBdhaBaQgYAYgbAXIgiAdIgRAIQgXAKgaAIIgPAEQhaAmh8AAQgsAAgxgFg");
	var mask_1_graphics_258 = new cjs.Graphics().p("ADyNPQhJAAhRgLIg1gJIgjgGQhHgOhEgXQiqg5ieh4QhEg0hDhBIgKgKQgbgZgYgcQjvkEhFluQgKhKgChJIAAgBIAAAAQAvhjBMhfQA8hKBMhIIA2gvQAYgVAZgTQAUgNAVgLIAYgHQAUgIAWgHQBwgoChAOIAaABIBTAFIAtAGIAoAGIAiAGIAMACQBFANBDAYQCsA5CiB7QA6AtA6A2IATASIAHAHQEUEOBZGYIAIA5QgEApgJAqQglBWg6BUQhABfhcBdQgYAYgbAYIghAdIgSAJQgXALgbAIIgOAFQhiAsiIAAQglAAgpgEg");
	var mask_1_graphics_259 = new cjs.Graphics().p("AD9NdQhKABhTgKIg1gHIglgHQhHgNhGgXQitg4ihh4QhGg1hEhBIgLgKQgbgagZgcQjzkHhIlzQgKhLgChKIAAgBIAAgBQAuhmBMhhQA7hNBNhLQAagYAcgYQAYgVAZgUQAUgNAWgLIAYgIQAUgJAWgIQBxgqCkAMIAbgBIBVAFIAtAEIApAGIAjAGIALACQBGANBGAXQCvA4ClB8QA8AuA7A2IATASIAHAHQEbERBZGeQAFAdAEAdQgEArgHArQglBXg5BWQhBBihbBfQgZAZgbAZIgiAdIgSAKQgXAMgaAJIgPAFQhnAxiSAAQghAAgjgDg");
	var mask_1_graphics_260 = new cjs.Graphics().p("AEINsQhMAChUgJIg2gHIgmgGQhIgMhHgXQixg3ikh5QhIg1hFhCIgLgKQgbgagagcQj4kKhKl5QgLhNgChLIAAgBIAAAAQAthpBMhlQA7hPBNhMQAagZAdgZQAYgWAZgUQAUgOAWgMIAZgIQATgKAXgIQBzguCmAKIAcAAIBWADIAuAEIApAFIAkAGIAMACQBHAMBHAWQCzA4CoB9QA9AtA9A3IATASIAHAHQEhEUBbGlIAIA6QgCAsgHAsQgkBag5BYQhABkhcBiQgZAZgcAaIghAeIgSAKQgYANgaAJIgQAGQhuA3ieAAIg1gCg");
	var mask_1_graphics_261 = new cjs.Graphics().p("AESN7QhMADhWgIQgcgDgbgEIgmgFQhKgMhJgWQi0g2inh6QhKg2hGhCIgMgLQgbgagagcQj9kNhMl/QgLhOgDhMIAAgBQAthsBLhnQA7hSBOhPQAZgZAdgaQAYgWAZgVQAVgOAWgMIAZgJQAUgLAXgIQB1gxCoAHIAdgBIBXACIAvAEIAqAFIAkAFIAMACQBJALBIAWQC3A3CrB+QA/AtA9A4IATASIAIAHQEmEXBdGrIAJA7QgCAtgGAtQgjBcg5BaQhABnhdBkQgYAagdAaIghAfIgSALQgYAOgbAKIgPAFQh0A+iqAAIgpgBg");
	var mask_1_graphics_262 = new cjs.Graphics().p("AB4OGIg4gFQgUgCgTgEQhLgLhKgWQi4g1irh6QhKg3hIhDIgMgKQgcgagagdQkCkPhOmFQgMhPgChNIAAgBIAAgBQArhvBLhqQA6hUBOhRQAagbAdgZQAYgYAagVQAVgPAWgLIAagKQAUgLAWgKQB4g0CqAFIAdgBIBZABIAwADIAqAFIAmAFIALABQBLAKBJAXQC6A1CvB/QA/AuA/A4IAUASIAIAIQEsEaBeGwQAFAfAEAeQgBAugFAtQgiBfg5BcQhABphdBnQgZAagcAbIgiAfIgSANQgYAOgbALIgQAFQiEBJjHgGQgfACghAAQgxAAg0gFg");
	var mask_1_graphics_263 = new cjs.Graphics().p("ACAOXIg5gFIgngFQhNgLhLgVQi7g0ivh8QhMg2hJhEIgMgKQgdgbgagdQkGkRhRmMQgMhQgChOIAAgBIAAAAQAqhyBKhtQA6hXBPhTQAZgbAegbQAYgYAagWQAVgOAWgNIAagLQAUgLAXgKQB6g3CsADIAdgCIBbAAIAxACIArAFIAmAEIAMABQBMAKBKAWQC+A1CyB/QBBAuBAA5IAUASIAIAIQEyEdBgG3QAFAeADAfQAAAvgDAvQgiBhg4BeQhABsheBoQgZAbgdAbIgiAgIgSANQgYAPgbAMIgQAGQiGBNjKgDQgmADgoAAQgsAAgugEg");
	var mask_1_graphics_264 = new cjs.Graphics().p("ACIOoIg6gFQgUgBgUgDQhOgKhNgVQi+gziyh9QhNg2hLhFIgMgKQgdgbgbgdQkLkVhTmRQgMhRgDhPIAAgBIAAgBQAph0BKhwQA6hZBPhWQAagcAdgbQAZgZAagWQAVgPAWgNIAbgMQAUgMAXgKQB8g6CuAAIAegCQAugBAuAAQAYAAAaACIArAEIAnADIAMACQBOAJBMAWQDBAzC1CAQBCAvBBA5IAVASIAIAIQE4EgBhG+QAFAfAEAfQABAvgDAxQghBjg4BgQhABuheBrQgZAcgdAbIgiAhIgSAOQgZAQgbAMIgRAGQiHBRjNAAQgtADgwAAQgmAAgogCg");
	var mask_1_graphics_265 = new cjs.Graphics().p("ACPO5QgcgBgegDIgpgEQhPgJhOgVQjCgyi1h+QhPg3hMhFIgMgLQgegbgcgdQkPkXhVmXQgNhSgChQIAAgBIAAgBQAnh4BKhyQA6hcBOhYQAbgcAdgdQAZgZAagXQAWgPAWgNIAbgMQAVgNAXgLQB9g9CxgCIAegDIBegDIAyACIAtAEIAnADIAMABQBPAJBOAVQDEAzC5CBQBDAvBCA5IAVATIAIAIQE+EjBjHDIAJA/QACAxgCAxQghBlg3BjQhABxhfBsQgZAdgdAcIgiAhIgTAPQgYARgcANIgQAHQiKBUjPACQg0AGg4AAQghAAgigCg");
	var mask_1_graphics_266 = new cjs.Graphics().p("ACXPKIg7gDIgqgEQhRgJhPgUQjFgxi5h+QhQg4hNhFIgNgMQgegbgdgdQkTkahYmdQgNhTgChRIAAgCIAAAAQAmh7BKh2QA5hdBPhaQAageAegdQAZgZAbgYQAVgQAXgNIAbgNQAVgOAXgLQB/hBC0gDIAegEIBfgEIA0ABIAtAEIAoADQAGAAAGABQBQAIBPAVQDIAxC8CCQBFAvBDA7IAVASIAJAIQFEEmBkHKQAFAgADAgQAEAygBAyQggBng3BkQhAB0hfBvQgaAdgdAdIgiAiIgTAPQgZASgcANIgQAIQiMBYjSAFQg7AHhAAAIg2gBg");
	var mask_1_graphics_267 = new cjs.Graphics().p("ACePbQgegBgegCIgqgEQhTgIhQgTQjJgxi8h/QhRg3hPhHIgNgLQgfgbgdgeQkYkchamjQgNhVgDhSIAAgBIAAgBQAmh9BJh5QA5hgBPhcQAbgfAegdQAYgaAcgZQAVgQAXgOIAbgOQAWgOAXgMQCBhDC2gGIAfgEIBhgFIA0AAIAtAEIApACIANABQBRAHBRAVQDLAwC/CDQBGAwBFA7IAVASIAJAIQFKEpBlHRQAFAgAEAgQAEAzAAAzQgfBqg3BmQg/B2hgBxQgaAegdAeIgjAiIgSAQQgaATgcAOIgRAIQiNBcjVAIQhCAIhIAAIgqAAg");
	var mask_1_graphics_268 = new cjs.Graphics().p("AClPrIg9gCQgVgBgWgCQhTgHhTgUQjMgvi/iAQhTg4hQhHIgNgLQgggcgdgeQkdkfhcmpQgNhVgDhTIAAgCIAAAAQAkiBBJh8QA5hiBQheQAagfAegfQAZgbAbgZQAWgQAXgOIAcgOQAVgPAYgNQCDhHC4gIIAggEIBigGIA1AAIAuACIApADIANABQBTAGBSAUQDPAwDDCDQBGAwBGA8IAWASIAJAJQFQEsBnHWQAFAhADAgQAFA0ABA1QgeBrg3BpQg/B4hgB0QgaAegeAeIgjAjIgSARQgaAUgcAOIgRAJQiPBgjYAKQhKALhRAAIgcgBg");
	var mask_1_graphics_269 = new cjs.Graphics().p("ACsP8Qg0AAg1gFQhVgGhUgTQjPgujDiBQhUg5hShHIgNgMQlWkvhonbQgNhXgDhUIAAgCIAAAAQAjiDBIh/QA5hkBQhiQAagfAfgfQAZgcAbgZQAjgcAmgSQCShlDbgMIAggFIBjgIIA3AAIBZAEIANABQBUAGBTATQDTAvDGCEQBTA4BRBHIAKAJQFWEvBoHcQAOBXADBWQgeBug3BqQg+B7hhB3QgaAegeAfQgaAbgcAbQghAagmASQiSBkjaANQhRAMhaAAIgPAAg");
	var mask_1_graphics_270 = new cjs.Graphics().p("ABLQJIgsgEQhAgHg/gNIgxgMQi5gwiwhyIgqgdQhBgug+g2IgOgLIgggdQlCkshlnMIgBgIIAAgCQgNhTgDhQIAAgCIAAgBQAiiGBIiAQA5hnBPhiIABgBQAZgeAdgfIADgEQAXgZAZgYIAFgFQAjgcAngTQCThoDdgQIAfgFIABAAIBlgJQAbgBAcAAIBaADIANABIAqADQBBAGBAAPIAuALQC+AwC0B3IAmAaQBCAuBAA3IAKAJIAhAeQFBErBmHNIABAHQAMBUADBUQgcBwg3BsQg+B9hhB4IgBABQgYAfgdAdIgDADQgXAZgaAZIgFAFQgiAbgmATQiTBojcAQIggAFQhKAJhSAAIgMAAQgvAAgwgDg");
	var mask_1_graphics_271 = new cjs.Graphics().p("ABTQaQgWgBgWgDQhBgGhAgNQgagFgYgGQi9gviyhyIgsgdQhCgug/g2IgOgMIghgdQlJkvhonTIgBgIIAAgCQgNhVgDhRIAAgCIAAAAQAiiJBHiDQA5hoBPhlIABgBQAZgfAegfIADgEQAXgaAZgYIAGgFQAigdAngVQCVhrDfgTIAfgFIABAAIBngKIA3gCIBcACIANABIAqACQBCAGBBAOIAvAKQDCAwC3B2IAnAbQBDAuBCA4IAJAIIAiAeQFIEvBoHTIABAIQANBVADBVQgcByg2BvQg+B/hhB7IgBABQgZAfgdAeIgDADQgXAagaAZIgFAFQgiAcgmATQiVBsjeATIggAFQhLALhTABIggAAQgmAAgngCg");
	var mask_1_graphics_272 = new cjs.Graphics().p("ABcQrIgugDQhBgGhCgMIgzgLQi/gui2hyIgtgdQhDguhBg3IgOgMIgigdQlQkyhpnaIgBgIIgBgCQgNhWgChTIAAgBIAAgBQAgiLBHiGQA4hqBQhnIABgBQAaggAegfIADgEQAXgbAagYIAFgGQAjgdAngWQCWhvDggWIAggFIACAAQAzgHA0gFQAcgCAcAAIBdABIAOAAIArADQBCAFBCANIAwAKQDGAuC6B3IAoAbQBEAuBDA5IAKAIIAiAeQFQExBqHbIABAIQANBWADBXQgcB0g1BwQg+CDhhB8IgBACQgZAfgdAfIgDADIgyA0IgFAFQgiAdgnAUQiWBvjfAWIghAGQhMAMhUACIgsAAQghAAghgBg");
	var mask_1_graphics_273 = new cjs.Graphics().p("ABkQ8IgugDQhCgFhDgMIg0gKQjDgti5hyIgtgdQhFgvhCg3IgOgMIgjgdQlXk1hsnhIgBgJIAAgCQgNhXgDhUIAAgBIAAgBQAfiNBIiIQA3htBRhpIABgBQAZggAeggIADgFQAYgbAagZIAFgFQAjgeAngXQCYhzDigZIAggFIACAAIBogOQAcgCAdgBIBeAAQAHAAAHABIAsABQBDAFBDANIAyAKQDIAtC+B3IApAaQBFAvBEA5IAKAJIAjAeQFXE0BsHiIABAHQAOBYACBZQgaB1g1ByQg+CFhhCAIgBABQgZAggeAfIgDAEQgYAagaAbIgGAFQgiAdgmAWQiYBzjhAYIghAGQhOAOhUADIg3ABIg5gBg");
	var mask_1_graphics_274 = new cjs.Graphics().p("ABtRNIgvgCQhEgFhDgLIg1gKQjGgsi9hyIgugeQhGgthDg4IgPgMIgjgeQlek3hunpIgCgJIAAgCQgNhYgDhVIAAgBIAAgCQAfiPBHiLQA3hvBRhqIABgBQAZgiAfghIADgEQAXgcAbgZIAFgGQAjgfAngXQCah2DkgcIAggHIACAAIBqgNQAcgDAdgCIBggBIAOABIAsACQBFADBEANIAyAJQDMAsDBB3IApAaQBHAvBGA6IAKAIIAkAfQFdE3BuHpIACAHQANBaADBZQgaB5g1BzQg8CIhjCCIgBABQgZAhgeAgIgDAEQgYAbgbAbIgFAFQgiAegnAWQiZB2jjAcIghAHQhPAOhWAEQglACglAAIgmgBg");
	var mask_1_graphics_275 = new cjs.Graphics().p("AB1ReIgwgCQhFgDhDgLIg2gKQjKgqi/hzQgYgOgYgPQhHgvhFg4IgOgMIgkgeQlmk6hwnwIgBgIIAAgCQgOhagChXIAAgBIAAgBQAdiSBHiNQA3hxBRhtIABgBQAagiAfghIADgFQAXgcAbgaIAFgGQAkgfAngZQCbh6DmgeIAggHIACAAQA1gJA2gHQAdgDAegBIBggCIAPAAIAtABQBGADBEAMIAzAJQDPArDFB3IAqAbQBIAvBHA6IAKAIIAlAfQFlE6BwHwIABAIQAOBaACBbQgZB6g0B2Qg8CKhjCFIgBABQgZAhgeAhIgEAEQgYAbgbAcIgFAGQgiAegnAXQibB6jlAfIghAHQhQAPhXAFQgrACgtAAIgaAAg");
	var mask_1_graphics_276 = new cjs.Graphics().p("AB9RvIgwgBQhGgDhFgKQgbgEgbgGQjNgojDhzIgwgeQhJgvhGg4IgPgMIglgfQlsk9hyn2IgCgJIAAgCQgOhbgChYIAAgBIAAgBQAdiVBGiPQA3hzBRhvIABgBQAagjAfgiIADgFQAYgcAbgbIAFgGQAkggAngZQCch+DogiIAhgHIACAAQA2gJA3gIQAdgDAegCIBigDIAOAAIAuABQBHADBFALIA0AJQDTApDIB4IArAaQBKAwBIA6IAKAIIAlAgQFsE8ByH3IACAIQAOBcACBcQgYB8g0B5Qg8CMhjCHIgBABQgaAigeAiIgDADQgZAdgbAbIgFAGQgjAggnAYQicB9jmAiIgiAHQhRARhYAFQgtADgvAAIgYAAg");
	var mask_1_graphics_277 = new cjs.Graphics().p("ABVSAQhIgDhFgKIg3gJQjRgnjGhzIgxgeQhKgvhHg5IgQgMIglgfQl0lAh0n9IgBgJIAAgCQgOhdgDhZIAAgBIAAgBQAciXBGiSQA3h1BShxIABgBQAagkAfgiIADgFQAYgdAbgbIAFgGQAkghAogaQCdiCDqgkIAigIIABAAQA2gKA4gIQAdgEAfgCIBjgEIAPAAIAuAAQBJACBFALQAbAEAaAFQDWAnDMB4IAsAbQBLAwBJA6IAKAJIAmAfQFzFAB1H+IABAIQAOBeADBdQgYB+g0B6Qg7CPhkCJIgBACQgZAigfAjIgDADQgZAdgbAcIgFAHQgjAggnAYQieCBjoAlIgjAIQhRAShZAGQg6AFg7gBIgQAAIghAAg");
	var mask_1_graphics_278 = new cjs.Graphics().p("ABdSRQhJgChGgJIg4gJQjUgmjJhzIgzgeQhKgvhJg6IgQgMIgmgfQl6lDh3oEIgCgJIAAgDQgOhdgDhaIAAgCIAAgBQAciaBFiUQA3h3BShzIABgBQAagkAggkIADgEQAYgeAcgcIAFgGQAkgiAogaQCfiFDrgoIAigIIACAAQA2gLA5gJQAegEAegCIBlgFIAPAAIAvAAQBJABBHAKIA1AIQDbAnDOB4IAsAbQBNAwBLA7IAKAIIAmAgQF7FDB3IFIABAIQAOBfADBeQgXCAg0B9Qg7CRhjCMIgBABQgaAkgfAiIgDAEQgZAegcAdIgGAGQgiAhgoAZQifCFjpAoIgjAIQhSAShbAIQg6AFg9AAIgZABIgYgBg");
	var mask_1_graphics_279 = new cjs.Graphics().p("ABlSjQhKgBhHgJQgdgEgcgFQjYgljMhzQgagOgZgQQhMgvhKg6IgQgMIgnggQmClFh4oMIgCgJIAAgCQgOhfgDhcIAAgBIAAgBQAaicBGiXQA2h5BTh2IABgBQAagkAggkIADgFQAYgeAcgcIAFgGQAkgjAogcQChiJDtgqIAigJIACAAQA3gMA5gJIA+gHQAygEAzgCIAQAAIAvgBQBLABBHAKIA2AIQDeAlDSB5QAXAMAXAPQBNAwBMA7IALAJIAnAgQGBFFB5IMIACAIQAOBhACBfQgWCDgzB+Qg7CUhkCOIgBABQgZAkggAkIgDAEQgZAegcAdIgFAHQgjAhgoAbQigCIjsArIgjAIQhUAUhbAIQg7AGg9ABIgZAAIgZAAg");
	var mask_1_graphics_280 = new cjs.Graphics().p("ABsS0QhKAAhJgJIg5gIQjcgjjPh0Ig0geQhOgwhKg6IgRgMIgnggQmJlIh7oTIgCgJIAAgCQgOhggDhdIAAgCIAAgBQAaifBFiZQA2h7BSh3IABgBQAbgmAgglIADgEQAZgfAcgdIAFgGQAkgkApgcQCiiMDuguIAjgJIACAAQA4gNA5gKQAfgEAfgDIBngHIAQAAIAxgBQBLAABIAJQAcADAbAFQDhAkDWB4QAXANAXAPQBPAwBNA8IALAIIAoAgQGJFJB6ITIACAIQAPBiACBhQgWCEgyCAQg7CXhkCRIgBABQgaAlggAkIgDAEQgZAegcAeIgGAHQgjAignAbQiiCMjuAuIgjAJQhVAVhcAJQg8AHg+ABIgiAAIgRAAg");
	var mask_1_graphics_281 = new cjs.Graphics().p("AggS+Ig7gHQjfgjjTh0Ig0geQhPgvhNg7IgQgMIgoggQmQlMh9obIgCgIIAAgCQgPhhgChfIAAgBIAAgBQAYihBFicQA2h9BTh6IABgBQAagmAhglIADgFQAZggAcgdIAFgGQAlgkAogeQCkiQDxgwIAigKIACAAQA5gNA6gLQAfgFAggDQA0gFA0gDIAQAAIAxgCQBMAABKAJIA4AHQDkAjDZB5IAvAbQBRAwBOA9IALAIIAoAhQGQFLB9IcIACAHQAPBjACBiQgVCGgyCCQg7CZhkCUIgBABQgaAlggAlIgDAEQgaAfgcAfIgGAHQgjAjgoAcQijCPjwAxIgjAJQhWAWhdAKQg9AHg+ACIg0ABQhLAAhJgIg");
	var mask_1_graphics_282 = new cjs.Graphics().p("AgbTRQgegDgdgFQjighjWh0QgbgOgbgQQhQgwhOg7IgRgMIgpghQmXlOh/oiIgCgJIAAgCQgPhigChfIAAgCIAAgBQAXikBFidQA2iABTh8IABgBQAbgnAggmIAEgFQAZgfAcgeIAGgGQAkgmApgeQCliTDyg0IAkgKIABAAQA6gOA7gLIA/gJQA0gFA2gEIAQgBIAxgBQBNgBBLAIIA5AHQDoAhDcB6IAwAbQBSAxBQA8IAKAJIAqAhQGWFOCAIiIABAJQAPBjACBkQgTCIgyCEQg7CchlCVIgBACQgaAmggAlIgDAEQgaAggcAfIgGAHQgjAkgoAdQilCSjxA0IglAKQhWAXheALQg9AIhAACIg0ACIgKAAQhIAAhFgHg");
	var mask_1_graphics_283 = new cjs.Graphics().p("AgVTjIg8gHQjmggjZh0Ig3geQhRgwhPg8IgRgMIgqghQmelRiBopIgCgJIgBgDQgPhigChhIAAgBIAAgBIAAgBQAXimBEigQA2iCBTh+IABgBQAbgnAhgnIADgFQAaggAcgeIAGgHQAkgmApgfQCniXD0g3IAkgKIABAAQA6gPA8gMQAggFAggEQA1gGA2gEIAQgBIAzgCQBOgCBLAIQAdADAdAEQDsAgDfB5IAxAcQBTAxBRA9IALAIIAqAhQGeFSCBIpIACAJQAPBkACBlQgTCKgyCGQg6CfhlCYIgBABQgaAnggAmIgEAEQgaAggcAgIgGAHQgkAlgoAdQimCXjzA3IglAKQhXAYhfAMQg+AIhBADQgaACgbAAIgbAAQg/AAg+gGg");
	var mask_1_graphics_284 = new cjs.Graphics().p("AgPT2Ig9gGQjpgfjdh0QgcgPgbgQQhTgwhRg8IgRgMIgqghQmllUiEowIgCgKIAAgCQgPhkgChiIAAgCIAAgBQAVipBEiiQA2iEBUiAIABgBQAagoAigoIADgFQAZghAdgeIAGgHQAlgnAoggQCpiaD2g6IAkgLIABAAQA7gPA9gNQAfgGAhgEQA2gGA3gFIAQgBIAzgCQBPgDBNAIIA6AGQDvAfDjB6QAZANAYAOQBVAxBTA+IAKAIIArAiQGlFUCDIxIACAIQAQBmABBmQgSCMgxCIQg5ChhmCbIgBABQgbAoggAmIgEAFQgaAggdAhIgGAHQgjAlgoAfQioCaj1A6IglAKQhYAZhhANQg+AJhBAEIg2ACIgkAAQg8AAg6gFg");
	var mask_1_graphics_285 = new cjs.Graphics().p("AgKUJIg9gGQjtgejgh0Ig4gfQhUgwhSg9IgRgMIgrghQmtlXiFo3IgCgKIgBgDQgPhlgChjIAAgBIAAgBIAAgBQAVirBDilQA2iGBUiCIABgBQAbgpAhgoIAEgFQAZghAdggIAGgGQAlgoApghQCqieD4g9IAkgLIACAAQA7gQA9gNIBBgLQA3gHA3gFIARgBIAzgDQBQgDBOAHQAdACAeAEQDzAdDmB7IAyAbQBWAyBUA+IALAIIArAiQGsFXCGI3IACAJQAPBnACBoQgRCOgxCKQg5CjhmCdIgBACQgbAoghAnIgDAFQgbAhgdAhIgGAHQgjAmgpAgQipCdj3A9IglALQhZAahiAOQg/AKhCAEIg2ACIgvABQg3AAg3gEg");
	var mask_1_graphics_286 = new cjs.Graphics().p("AgEUbIg+gGQjwgcjkh1Ig5geQhVgxhTg8IgSgNIgsgiQmzlZiIo+IgCgLIAAgCQgQhmgChlIAAgBIAAgCQAUitBDioQA2iIBUiEIABgBQAbgpAigpIADgFQAagiAdggIAGgHQAlgoApgiQCsiiD5hAIAlgLIACAAQA7gRA+gOQAhgGAhgFQA3gIA4gFIARgBIA0gEQBSgDBOAGQAeACAeAEQD2AcDqB6IAzAcQBXAyBVA+IALAJIAsAhQG0FaCHI/IACAJQAQBpACBoQgRCRgxCLQg4CmhnCgIgBABQgaApgiAoIgDAFQgaAhgeAiIgGAHQgkAngoAgQirChj4BBIgmALQhaAbhjAPQhAAKhDAFIg2ADIg5ABQg0AAgygEg");
	var mask_1_graphics_287 = new cjs.Graphics().p("AABUuIg+gFQj0gbjmh1Ig6gfQhXgwhVg+IgRgMIgtgiQm6ldiKpFIgCgKIgBgCQgQhogBhmIAAgBIAAgBIAAgBQASiwBDiqQA2iKBUiGIABgBQAbgrAjgpIADgFQAagjAdggIAGgHQAmgpApgjQCtilD7hDIAlgMIACAAQA8gSA/gOQAhgHAigFQA3gIA5gGIARgBIA1gEQBSgEBQAGQAeACAeADQD6AbDtB7QAaANAaAPQBYAxBXA/IALAJIAsAiQG7FdCKJGIACAIQAQBqABBqQgQCTgwCNQg4CphnCiIgBACQgbApghApIgEAEQgaAigeAiIgGAIQgkAogpAhQisCkj6BDIgmAMQhbAdhkAPQhBALhDAFIg4ADQgkACgkAAQgtAAgsgDg");
	var mask_1_graphics_288 = new cjs.Graphics().p("AAHVBIg/gFQj3gajqh1QgegPgdgQQhYgxhWg9IgSgNIgtgiQnBlgiNpMIgCgKIAAgDQgQhpgChnIAAgBIAAgCQASiyBDisQA1iNBViIIABgBQAbgrAjgqIADgGQAagjAdggIAGgHQAmgqAqgkQCuipD9hGIAmgMIABAAQA9gTBAgOQAggIAjgFQA4gJA6gGIARgBIA2gEQBSgFBSAFQAeACAeADQD9AaDxB7QAaANAaAPQBbAxBXBAIALAIQAXARAXASQHBFfCNJNIABAJQAQBsACBrQgPCUgwCQQg4CrhnClIgBABQgbAqghAqIgEAEQgbAjgeAiIgGAIQglApgoAiQiuCoj8BGIgmAMQhcAehlAQQhCAMhDAFIg5AEQgpACgpAAQgoAAgpgCg");
	var mask_1_graphics_289 = new cjs.Graphics().p("AAMVTQgfgCghgDQj6gYjth1Ig8gfQhZgxhXg+IgTgNQgXgRgWgSQnJliiPpTIgCgKIAAgDQgQhqgChoIAAgBIAAgBIAAgCQARi1BCiuQA1iOBWiKIABgBQAbgtAjgqIADgGQAbgjAeghIAGgIQAlgqAqglQCvisEAhJIAlgMIACgBQA+gTBAgPQAhgIAjgGQA5gKA6gGIARgCIA2gEQBUgGBTAGIA9AEQEBAYD0B8IA1AcQBcAyBZBAIAKAIIAvAiQHJFjCOJVIACAJQAQBsACBtQgPCWgvCSQg4CthoCoIgBABQgbArgiApIgDAFQgbAkgeAjIgHAIQgkApgoAiQiwCsj+BJIgmANQhdAehmASQhCAMhGAGQgcADgcABQgsADgsAAQgnAAgngCg");
	var mask_1_graphics_290 = new cjs.Graphics().p("AASVlQgggBgggDQj+gXjwh1QgfgPgegRQhbgxhYg+IgTgNQgXgRgXgSQnRlliQpaIgCgLIgBgCQgPhsgChpIAAgCIAAgBQAQi4BBixQA1iRBXiMIABgBQAbgsAjgsIADgFQAbgkAegiIAGgHQAmgsAqglQCxiwEAhMIAmgNIACgBQA/gTBBgQQAhgIAjgHQA6gJA6gHIASgCIA3gFQBVgGBUAFIA+AEQEEAXD3B7IA2AcQBdAzBbBAIAKAIIAvAjQHQFmCRJbIACAJQAQBuACBuQgOCYgwCUQg3CwhoCqIgBABQgbAsgiAqIgEAFQgbAkgeAkIgGAIQglAqgpAjQixCvj/BNIgnAMQheAghnATQhDAMhGAHIg5AFQgyADgxAAIhFgCg");
	var mask_1_graphics_291 = new cjs.Graphics().p("AAYV4QghgBgggCQkBgWj0h2QgfgPgfgQQhcgxhag/IgTgNIgugjQnYlpiTphIgBgKIgBgDQgQhtgChrIAAgBIAAgBIAAgBQAPi6BCizQA1iTBViOIABgBQAcguAjgrIAEgGQAaglAfgiIAGgHQAmgtAqgmQCyizEDhQIAngNIACAAQA+gVBCgQQAigJAkgGQA6gLA7gHIASgCIA3gFQBWgHBVAEIA+AEQEJAWD6B8QAcANAbAPQBeAyBcBBIAKAIQAZARAXATQHXFoCTJiIACAKQARBvABBvQgNCaguCWQg4CzhoCsIgBACQgcArgiAsIgDAEQgcAlgfAkIgGAJQglAqgoAlQiyCykCBPQgUAIgUAGQheAhhoATQhEANhGAHIg7AFQg5AEg4AAIg4gBg");
	var mask_1_graphics_292 = new cjs.Graphics().p("AAeWLQghgBghgDQkFgUj3h2QgfgPgfgQQhegyhbg/IgTgNIgwgkQnelriVpoIgCgLIAAgCQgRhugBhsIAAgCIAAgCQAOi8BBi2QA1iVBWiQIABgBQAcguAjgtIAEgFQAbgmAegiIAGgIQAngtAqgnQC0i3EEhSIAngOIACAAQA/gWBCgRQAjgJAkgGQA6gLA8gIIASgCIA5gGQBXgHBVADIBAAEQELAVD+B7QAcAOAcAPQBfAyBdBCIALAIIAxAjQHeFsCVJpIACAJQARBxABBxQgMCcgvCYQg3C1hoCvIgBABQgbAtgjAsIgEAEQgbAmgfAkIgHAJQglArgoAlQi0C3kDBSIgoAOQhgAihpAUQhFAOhHAHQgdAEgeACQg+AFg+AAIgvgBg");
	var mask_1_graphics_293 = new cjs.Graphics().p("AAkWdQgjAAghgDQkIgTj6h2Ig/ggQhfgxhchAIgUgNQgYgRgYgTQnmluiXpvIgBgLIgBgCQgRhwgBhtIAAgBIAAgBIAAgBQANi/BBi4QA1iYBWiSIABgBQAcgvAjgtIAEgGQAbglAfgkIAHgHQAlguArgoQC2i7EGhVIAngOIACgBQBAgWBDgRQAjgJAkgIQA7gLA8gIIATgCIA5gGQBYgIBWADIBAADQEPATECB8IA4AdQBhAzBeBBIAMAJQAYARAZASQHlFvCXJwIACAJQARBzABBxQgLCfguCZQg3C4hpCxIAAACQgcAtgjAtIgDAEQgdAmgeAlIgHAJQglAsgpAmQi1C6kGBVIgnAOQhhAkhrAVQhEAOhJAIIg8AGQhDAGhDAAIgmgBg");
	var mask_1_graphics_294 = new cjs.Graphics().p("AAqWwQgjAAghgCQkMgSj9h3QghgPgfgQQhhgyhdhAIgUgNIgxgkQnslxiap2IgCgMIAAgCQgRhxgChuIAAgCIAAgCQANjBBAi6QA1iaBXiUIABgBQAbgwAkguIAEgGQAbgmAfgkIAHgHQAmgvAqgoQC4i/EIhYIAngPIACAAQBBgXBDgSQAjgKAlgHQA8gMA9gJIATgCIA5gHQBZgIBYACIBBADQESASEFB9IA5AcQBjAzBfBCIALAJIAyAkQHtFxCYJ3IADAKQARBzABBzQgKChguCbQg2C7hqCzIgBACQgbAugkAtIgDAFQgcAmggAmIgGAJQglAtgpAnQi3C9kHBYIgoAPQhiAkhsAWQhFAPhJAJIg8AGQhKAGhIAAIgdAAg");
	var mask_1_graphics_295 = new cjs.Graphics().p("AAvXDIhFgCQkOgRkBh3IhBgfQhigyhehBIgUgNIgygkQn0l0ibp9IgCgMIgBgCQgRhzgChvIAAgBIAAgBIAAgBQAMjEBAi9QA0icBYiWIABgBQAcgwAkgvIAEgGQAbgnAggkIAGgIQAmgvArgqQC5jCEKhbIAngPIACAAQBBgYBFgTQAjgKAlgHQA9gNA+gJIASgCIA7gHQBagKBYACIBCADQEWAREIB8QAdAOAdAPQBkAzBhBDIALAIIAyAkQH0F1CbJ+IACAKQASB2ABBzQgKCiguCeQg1C9hqC2IgBABQgcAvgjAuIgEAFQgcAnggAmIgGAJQgmAugpAnQi4DBkJBcIgoAOQhjAmhtAXQhGAQhKAJQgeAEgfACQhPAIhPAAIgTAAg");
	var mask_1_graphics_296 = new cjs.Graphics().p("AA1XVQgkAAgigCQkSgPkEh3QghgPghgRQhjgyhghBIgUgNIgzglQn6l2ieqEIgCgMIgBgCQgRh1gBhwIAAgBIAAgBIAAgBQAKjHBAi/QA0ieBYiYIABgBQAcgxAlgvIADgGQAcgnAgglIAGgIQAngxAqgqQC7jFELhfIApgPIABgBQBCgYBFgTQAkgKAlgJQA9gNA/gJIATgDIA7gHQBbgKBZACIBDACQEaAPELB9QAdAOAeAPQBlA0BiBDIALAIQAaARAaATQH6F3CdKGIADAKQARB3ABB0QgJClgtCfQg1DAhqC4IgBACQgcAvgkAvIgEAFQgcAnggAnIgHAJQglAvgpAoQi6DFkKBeQgVAIgVAHQhjAnhuAYQhHAQhLAKIg9AHQhWAIhUAAIgJAAg");
	var mask_1_graphics_297 = new cjs.Graphics().p("AgMXnQkVgPkIh2QghgPghgRQhlgyhhhCIgUgNIg0glQoBl6igqLIgDgMIAAgCQgSh2gBhxIAAgBIAAgBIAAgCQAKjIA/jCQA0igBYibIABgBQAcgxAlgwIAEgGQAcgoAgglIAGgIQAngxArgrQC8jKENhhIApgQIABAAQBDgZBGgUQAkgLAlgIQA+gOBAgKIATgDIA7gHQBcgLBaABIBEACQEdAOEPB+IA8AcQBmA0BkBEIALAIIA0AlQICF6CfKMIACAKQASB5ABB2QgICmgtChQg1DDhrC6IgBACQgcAwgkAvIgDAFQgdAoggAoIgHAJQglAvgqAqQi7DIkMBhQgVAIgVAHQhkAohvAZQhIARhLAKIg+AIQhcAJhZAAQgkAAgjgBg");
	var mask_1_graphics_298 = new cjs.Graphics().p("AgHX6QkZgNkKh3IhEggQhmgzhihCIgVgNIg0glQoJl9iiqSIgCgMIgBgCQgSh3gBhzIAAgBIAAgBIAAgBQAJjMA/jEQA0iiBYicIABgBQAdgzAlgwIAEgGQAcgpAggmIAGgIQAngyArgrQC+jNEPhlIApgQIACAAQBDgaBGgVQAlgLAlgIQA/gPBAgKIATgDIA9gIQBcgLBcAAIBEACQEhANESB9IA8AdQBoA0BlBEIALAIIA1AlQIJF9ChKUIADAKQASB6ABB3QgICogsCkQg1DFhrC9IgBACQgcAwgkAwIgEAFQgdApggAoIgHAJQgmAwgpAqQi9DMkOBkIgqAQQhlAphwAaQhJARhMALIg/AIQhcAKhbABIhHgBg");
	var mask_1_graphics_299 = new cjs.Graphics().p("AgCYNQkdgMkNh4QgjgPgigRQhngyhkhCIgUgOIg1glQoQmAikqZIgDgMIAAgCQgSh4gBh1IAAgBIAAgBIAAgBQAIjOA/jGQAzikBZifIABgBQAcgzAmgxIADgHQAdgpAggmIAGgIQAogzArgtQC/jQERhoIApgQIACgBQBDgaBHgWQAlgLAngJQA/gPBAgKIAUgDIA9gJQBegLBcAAQAjAAAiABQEkAMEWB9QAfAOAeAPQBpA0BmBFIAMAIIA1AlQIQGACkKbIACAKQATB7AAB5QgHCqgsClQg0DIhrDAIgBABQgcAxglAxIgEAFQgdApggApIgHAKQgmAwgqArQi+DPkQBoIgqAQQhnAqhwAbQhKAShMALIhAAIQhdALhcABIgYAAIgwAAg");
	var mask_1_graphics_300 = new cjs.Graphics().p("AACYfQkfgKkQh4QgkgPgigRQhogyhmhDIgVgOIg2gmQoWmCinqgIgCgMIgBgDQgSh5gBh1IAAgBIAAgBIAAgCQAHjQA/jJQAzimBZihIABgBQAdg0AmgyIADgGQAcgpAignIAGgIQAng0AsguQDAjUEThrIApgQIACgBQBEgbBIgWQAlgLAngKQBAgPBBgLIAUgDIA+gJQBegNBeAAIBHABQEmAKEZB+QAfAOAfAPQBrA1BnBFIALAIQAcASAaATQIYGDClKiIADAKQASB8ABB6QgGCtgrCnQg1DKhrDCIgBACQgdAygkAxIgFAFQgcAqgiApIgGAKQgmAxgqAsQjADTkRBqIgrARQhnArhzAcQhJAShOAMIhAAJQheALhdACIgZAAIgxgBg");
	var mask_1_graphics_301 = new cjs.Graphics().p("AAHYzQkjgKkUh3QgjgPgjgRQhpgzhnhDIgVgOIg3gmQoemFioqoIgCgMIgBgCQgTh7AAh3IAAgBIAAgBIAAgBQAFjTA/jLQAzipBaijIAAgBQAdg0AmgyIAEgHQAcgqAignIAGgIQAog1ArguQDCjYEVhuIAqgRIABAAQBFgdBIgWQAmgMAngJQBBgRBBgLIAVgDIA+gJQBggOBegBIBIABQEqAJEcB+IA/AeQBrA0BpBGIAMAIQAbASAbATQIfGGCoKpIADAKQASB+ABB7QgGCvgrCpQg0DNhrDEIgBACQgdAyglAyIgEAGQgeAqggAqIgIAKQgmAygqAsQjBDXkTBtQgVAJgWAIQhoAsh0AdQhKAThOANIhBAJQhfAMheACIglAAIgmAAg");
	var mask_1_graphics_302 = new cjs.Graphics().p("AAMZGQkmgJkXh3IhIghQhqgzhohDIgWgPIg3gmQolmHirqvIgCgMIgBgDQgSh8gBh4IAAgBIAAgBIAAgBQAFjWA+jNQAzirBailIABgBQAcg1AmgzIAFgGQAcgrAigoIAGgIQAng2AtguQDCjcEXhxIArgRIABgBQBFgdBKgXQAmgMAngKQBBgQBDgNIAUgCIA/gKQBhgOBfgCQAkAAAlABQEuAHEfB/QAgAOAfAPQBuA1BqBGIAMAIIA3AmQIlGJCrKvIACALQATB/AAB8QgECxgrCrQg0DPhsDHIgBACQgcAzgmAzIgEAFQgdAsgiAqIgGAKQgnAzgqAtQjCDZkWBxQgVAKgWAHQhqAuhzAeQhMAThPANIhCAKQhgANhfACIgyABIgZAAg");
	var mask_1_graphics_303 = new cjs.Graphics().p("AARZYQkqgGkah4QgkgQgkgRQhtgzhohEIgXgOQgbgTgcgUQotmKisq2IgCgMIgBgDQgTh9gBh5IAAgBIAAgBIAAgCQAEjXA+jQQAzitBainIABgBQAdg2Amg0IAEgHQAdgqAhgpIAHgIQAog2AsgxQDFjfEYhzIAqgSIACgBQBHgeBJgXQAmgMAogLQBCgRBEgMIAUgEIA/gKQBigOBggCIBKAAQExAGEjB/QAgAOAgAQQBvA1BsBGIALAIQAdASAbAUQItGMCsK3IACAKQAUCBAAB9QgECzgrCtQgzDShsDJIgBACQgdA0gmAzIgDAGQgeArghArIgIAKQgmA0grAuQjEDdkXB0IgrASQhrAuh0AfQhMAUhRANIhCAKQhhAOhgADIgyAAIgaAAg");
	var mask_1_graphics_304 = new cjs.Graphics().p("AAWZrQktgFkeh4QgkgQglgRQhugzhqhFIgWgOIg5gnQozmNiuq9IgDgMIgBgDQgTh+gBh7IAAgBIAAgBIAAgCQAEjaA9jSQAzivBaipIABgBQAdg3Ang0IAEgHQAdgrAhgpIAHgJQApg3ArgxQDHjiEah3IArgSIACgBQBGgfBLgYQAngMAogLQBCgSBEgNIAVgDIBAgKQBjgPBhgDIBJAAQE2AFEmB/QAgAOAhAQQBwA1BtBGIALAIIA6AnQIzGOCuK+IADALQATCCAAB/QgCC0grCwQgyDUhuDMIgBACQgcA0gmA0IgEAGQgeAsgiArIgHAKQgnA1gqAvQjFDhkZB2IgsATQhrAvh3AgQhNAUhQAOQgiAGgiAFQhiAOhgADIg6ABIgTAAg");
	var mask_1_graphics_305 = new cjs.Graphics().p("Ao2YBQgmgPgkgRQhvg0hshEIgWgPIg5gnQo7mQixrEIgDgNIAAgCQgTiAgBh8IAAgBIAAgBIAAgBQADjdA9jVQAyixBbirIABgBQAdg3Ang1IAEgHQAdgsAigqIAHgIQAog4AsgyQDIjmEch6IArgSIACgBQBHgfBLgZQAngNApgLQBDgTBEgNIAVgDIBBgLQBkgQBigDIBLAAQE4AEEqB/IBCAdQBxA2BuBHIAMAIQAdATAdAUQI7GRCwLFIADALQATCDAACBQgCC2gqCxQgyDXhtDPIgBABQgdA1gnA1IgEAGQgeAsgiAsIgHALQgnA1gqAwQjHDkkbB6IgsASQhtAxh3AhQhNAVhSAOIhDALQhjAPhiAEIhOABQkwgEkhh5g");
	var mask_1_graphics_306 = new cjs.Graphics().p("Ao4YVQgmgPglgRQhwg0hthFIgXgPIg6gnQpBmTizrLIgDgNIgCgCQgSiBgBh9IAAgBIAAgBIAAgCQACjfA8jXQAyi0BcitIAAgBQAeg4Ang2IAEgHQAegsAigqIAHgJQAog4AsgzQDKjqEdh9IAsgSIACgBQBHggBNgaQAngNApgLQBDgTBFgOIAVgEIBDgLQBkgQBjgEQAmgBAmABQE8ACEtCAQAiAOAgAPQB0A2BuBIIANAIQAdASAcAVQJDGUCyLMIADALQAUCFAACBQgCC5gqCzQgyDZhtDRIgBACQgdA2gmA1IgFAGQgeAtgiAsIgIALQgnA2gqAxQjJDnkcB9QgVAKgYAJQhtAyh4AiQhOAVhTAPIhEAMQhkAPhjAEIhOACQk0gDkkh5g");
	var mask_1_graphics_307 = new cjs.Graphics().p("Ao6YqQgmgQgmgRQhxg0huhFIgXgPIg7goQpImWi2rSIgDgNIgBgCQgTiCgBh/IAAgBIAAgBIAAgBQABjiA9jaQAyi1BbivIABgBQAdg5Aog2IAEgHQAegtAigrIAHgJQAog5Atg0QDLjtEfiAIAsgTIACgBQBJghBMgaQAogNApgMQBEgUBGgOIAWgDIBCgMQBlgRBkgEQAngBAmAAQFAABEwCAQAiAOAiAQQB0A2BwBIIAMAIIA7AnQJJGXC1LTIADALQAUCGAACDQgBC7gpC1QgyDchuDTIgBACQgdA2gnA2IgEAGQgfAugiAtIgIALQgmA2grAyQjKDrkeCAQgWAKgXAJQhvAzh5AjQhPAWhTAQQgiAGgjAFQhlAQhjAFQgpACgnAAQk3gBkoh5g");
	var mask_1_graphics_308 = new cjs.Graphics().p("AqIYdQiehIiXhpQpVmci1rjIgBgCQgUiGAAiBQAAmiDJmHQAeg6Apg4QAfgxAlguQDzleGDihQDVhjD5gnQCOgYCLABQFnAAFUCeQCbBHCUBnQJVGdC1LiQAUCIAACEQAAGijIGGQgeA4goA3QggAxglAxQjxFamBCgQjWBkj9AnQiQAXiLABQljAAlPiag");
	var mask_1_graphics_309 = new cjs.Graphics().p("AAFbKQlTgIlCiUQhXgnhVgyQhGgqhFgvQoDlljPpWQgjhlgahsIgBgCQgUiHAAiDQAAmmDMmLQAOgeATgcQARgdAUgbQAggyAlgvQD1liGGijQCdhJCxgpQBBgPBEgLQCPgYCMAAIApABQFVAIFECXQBWAnBUAxQBEApBEAvQICFkDPJVQAjBmAbBtQAUCIAACEIAAACQAAGmjKGKQgQAcgRAcQgSAdgTAcQghAxgmAxQjzFemECjQicBJixApQhEAQhGAKQiRAYiMABIglAAg");
	var mask_1_graphics_310 = new cjs.Graphics().p("AAEbcQlWgHlFiVQhXgohXgyQhGgqhGgxQoHlojPpeQgkhmgahsIAAgDQgViIAAiEQAAmqDNmPQAQgdASgdQASgdAUgdQAggyAlgvQD3llGJimQCfhKCygqQBCgPBEgLQCRgZCNAAIAqABQFYAIFICYQBWAoBVAxQBFApBEAwQIGFoDQJcQAjBnAaBuQAVCJAACFIAAACQgBGrjLGNQgQAdgSAdQgRAcgUAcQghAygmAyQj1FimHCkQieBLizApQhEAQhGALQiSAYiPACIglgBg");
	var mask_1_graphics_311 = new cjs.Graphics().p("AADbvQlZgIlHiWQhZgphXgyQhIgrhGgwQoMlsjPplQgjhngahuIgBgCQgViKABiFQAAmuDPmTQAPgeATgdQARgdAVgdQAggzAmgvQD5lpGMipQCghKCzgrQBDgPBEgLQCTgaCOABIAqAAQFcAIFKCZQBYApBWAyQBFApBFAwQILFsDPJjQAkBoAaBvQAVCKgBCHIAAACQABGujPGSQgPAdgSAdQgRAdgVAcQghAzglAyQj5FlmJCnQifBMi1AqQhEAQhIALQiTAZiQABIgmAAg");
	var mask_1_graphics_312 = new cjs.Graphics().p("AADcCQldgHlLiZQhZgohYg0QhIgqhHgyQoQlvjQpsQgjhogahvIgBgCQgUiLAAiGQAAmzDRmWQAPgeATgeQASgeAUgcQAhg0AlgwQD8lsGPisQChhLC2grQBDgQBFgLQCTgaCRAAIApAAQFgAIFOCbQBYApBWAzQBHApBFAxQIPFvDQJqQAkBqAaBwQAUCLAACIIAAACQAAGzjQGVQgPAdgSAdQgSAegUAcQgiA0gmAyQj6FpmMCqQihBMi3ArQhFAQhIAMQiVAZiQABIgmAAg");
	var mask_1_graphics_313 = new cjs.Graphics().p("AACcUQlhgHlNiaQhagphZgzQhJgshHgxQoUl0jRpyQgjhqgahvIgBgDQgUiMAAiHQAAm3DTmaQAPgeATgfQATgeATgdQAigzAlgxQD+lwGSiuQCjhMC3gsQBEgQBGgMQCUgaCSAAIAqABQFiAHFRCdQBZApBYAzQBHAqBGAxQITFzDRJxQAjBrAaBxQAVCMAACKIAAACQAAG2jSGZQgPAegTAdQgSAegUAdQgiA0glAzQj9FsmQCtQiiBNi4ArQhGARhIAMQiWAZiSACIgngBg");
	var mask_1_graphics_314 = new cjs.Graphics().p("AABcnQljgHlRibQhbgqhZg0QhKgshIgyQoZl3jQp6QgkhrgZhvIgBgDQgViNAAiJQAAm7DVmeQAQgfATgeQASgeAUgdQAhg1AngxQD/lzGVixQCkhOC5gsQBFgQBGgMQCWgaCTgBIAqABQFnAHFUCfQBaApBYA0QBIAqBGAxQIYF3DQJ4QAkBsAaByQAVCOAACLIAAABQAAG7jUGdQgQAegSAeQgSAegUAdQgjA1glAzQj/FwmTCuQijBPi6AsQhHARhJAMQiYAZiTACIgnAAg");
	var mask_1_graphics_315 = new cjs.Graphics().p("AAAc6QlmgHlUidQhcgqhag1QhLgshIgyQocl7jSqBQgjhsgZhwIgBgDQgWiPAAiKQAAm/DXmhQAQgfATgfQASgfAVgdQAhg1AmgyQEDl3GYizQCkhOC8gtQBFgRBGgMQCYgbCUAAIAqAAQFrAHFXCgQBaAqBZA0QBJArBHAyQIcF6DRJ/QAkBuAaByQAUCQABCLIAAADQgBG+jVGhQgQAegTAeQgSAegUAeQgiA1gmA0QkBF0mWCxQilBPi8AtQhHARhKAMQiYAaiVACIgUAAIgUAAg");
	var mask_1_graphics_316 = new cjs.Graphics().p("AAAdNQlqgHlXieQhdgrhbg1QhLgthJgzQohl+jSqIQgjhtgZhxIgBgDQgViQAAiLQAAnDDYmmQAQgfATgfQATgfAVgeQAhg1AmgyQEFl8Gbi1QCmhPC9guQBFgRBIgMQCZgbCVgBIArABQFuAGFaCiQBbAqBaA1QBJAsBIAyQIgF+DSKGQAkBuAZB0QAVCQAACNIAAADQAAHCjXGlQgQAegTAfQgSAegVAeQgiA2gnA0QkDF3mYC0QinBQi9AuQhIARhKAMQiaAbiWACIgUAAIgUAAg");
	var mask_1_graphics_317 = new cjs.Graphics().p("AAAdfQlugGlbigQhdgrhbg2QhMgthKgzQolmCjSqPQgkhugZhzIgBgDQgViRAAiMQAAnHDamqQAQgfAUggQASgfAVgeQAhg2AngyQEIl/Gdi4QCnhQC/gvQBGgRBIgMQCagcCXAAIArAAQFxAGFeCjQBcArBaA1QBLAtBIAyQIkGCDSKNQAkBvAZB1QAWCSAACOIAAACQAAHHjaGpQgQAegTAfQgRAfgWAeQgiA2gnA1QkFF7mcC2QioBRi/AuQhIAShLAMQibAciYABIgUABIgTgBg");
	var mask_1_graphics_318 = new cjs.Graphics().p("AgBdyQlxgGleiiQhegrhcg3QhNgthJg0QoqmFjTqWQgjhwgZhzIgBgDQgWiSAAiOQAAnLDcmuQARgfATggQATggAVgeQAig2AngzQEJmDGgi6QCphSDBguQBGgSBJgNQCbgbCZgBIArAAQF1AGFgClQBdArBbA2QBLAtBIAzQIqGFDSKUQAkBxAZB1QAWCTAACQIAAACQgBHLjaGsQgRAggSAfQgTAegVAgQgjA2gnA1QkIF/meC4QipBSjBAvQhJAShMAMQicAciZACIgUAAIgUAAg");
	var mask_1_graphics_319 = new cjs.Graphics().p("AgBeFQl1gGlhijQhfgshdg3QhNguhLg0QoumKjTqcQgjhxgZh0IgBgDQgWiUAAiPQAAnPDfmxQAQghAUggQASgfAVgfQAig3AngzQEMmGGki9QCqhSDBgwQBIgSBJgNQCdgcCZgBIAsAAQF4AGFkCnQBeArBcA3QBLAtBJAzQIuGJDTKbQAkByAZB2QAWCVAACRIAAACQgBHPjdGwQgQAfgTAgQgTAfgVAfQgjA3gnA2QkLGCmgC7QirBTjCAwQhKAShMANQieAciaACIgoAAg");
	var mask_1_graphics_320 = new cjs.Graphics().p("AgCeYQl4gGlkilQhggsheg3QhOgvhKg0QozmOjTqjQgkhygYh1IgBgDQgWiVAAiRQAAnTDgm0QARghATghQATggAVgfQAig3Ang0QEOmKGni/QCshTDDgxQBIgSBKgMQCegdCagBIAtAAQF7AGFnCoQBfArBcA3QBNAuBJA0QIyGNDTKiQAkBzAZB3QAWCWAACSIAAACQAAHTjfG0IgjA/QgTAggVAgQgkA3gnA3QkNGFmjC+QitBTjEAxQhKAShNANQifAdicACIgoAAg");
	var mask_1_graphics_321 = new cjs.Graphics().p("AgCeqQl8gFlninQhggshfg4QhPgvhLg1Qo3mRjUqrQgkhygYh3IgBgDQgWiWAAiSQAAnXDim4QARgiAUggQATghAVgfQAig4Aog0QEQmNGpjCQCuhUDEgxQBJgTBKgNQCggdCcgBIAtAAQF+AGFqCpQBgAsBdA4QBNAuBKA0QI3GQDTKqQAkB0AZB4QAWCXAACTIAAADQAAHXjhG4QgRAggTAgQgSAggWAfQgjA5goA2QkPGJmnDAQitBVjGAxQhLAThNANQihAdidACIgoAAg");
	var mask_1_graphics_322 = new cjs.Graphics().p("AgDe9Ql/gGlqinQhhgthgg5QhPgvhMg1Qo8mVjTqyQgkh0gYh3IgBgDQgXiYAAiTQAAnaDkm9QARgiAUggQATghAVggQAjg4Ang0QETmSGtjFQCuhVDGgxQBKgTBKgNQChgdCegCIAtAAQGCAFFtCsQBhAsBeA4QBNAvBLA0QI7GVDTKwQAlB2AYB5QAXCXAACVIAAADQAAHbjjG8QgRAfgTAhQgTAhgWAfQgkA5gnA4QkSGMmpDCQivBWjIAyQhMAThNAOQiiAdieACIgpAAg");
	var mask_1_graphics_323 = new cjs.Graphics().p("AgEfQQmCgFltiqQhjgthgg5QhQgwhMg2QpAmYjUq5Qgkh1gYh4IgBgDQgXiZAAiUQAAnfDmnBQARghAUgiQAUghAVggQAjg4Ang2QEVmVGwjGQCwhWDHgzQBKgTBMgNQCigeCfgBIAtAAQGGAFFwCsQBhAtBfA5QBPAvBLA1QI/GYDUK3QAlB3AYB6QAXCZAACWIAAACQgBHgjkG/QgRAhgUAgQgTAhgVAgQgkA6goA3QkUGRmsDFQixBWjJAzQhMAThPAOQijAdifADIgqAAg");
	var mask_1_graphics_324 = new cjs.Graphics().p("AgEfiQmGgFlwirQhjguhig5QhQgwhNg3QpEmcjVq/Qgkh3gYh5IgBgDQgWiaAAiVQAAnkDnnEQASgiAUghQATgiAVggQAkg5Ang2QEYmYGyjKQCxhXDKgzQBKgTBMgNQCkgfCggBIAuAAQGJAFFzCuQBiAtBgA5QBPAwBMA1QJDGcDVK+QAkB4AZB7QAWCbAACXIAAACQAAHjjmHEQgSAhgTAgQgTAigWAgQgkA6goA4QkWGUmvDIQiyBXjLAzQhNAUhPAOQilAeihACIgpAAg");
	var mask_1_graphics_325 = new cjs.Graphics().p("AgFf1QmJgFlzisQhkguhig7QhSgwhNg3QpImgjVrGQgkh4gYh6IgBgDQgXibAAiXQAAnnDpnIQASgiAUgjQAUghAVghQAkg5Aog2QEZmdG1jMQCzhXDLg0QBLgUBNgNQClgfChgCIAvAAQGMAFF3CwQBiAuBhA5QBQAwBMA2QJIGfDVLFQAkB5AYB8QAXCcAACZIAAACQAAHojoHHQgSAhgTAhQgUAigVAgQglA7goA5QkYGXmzDKQizBYjMA0QhOAUhQAOQimAeiiADIgqAAg");
	var mask_1_graphics_326 = new cjs.Graphics().p("EgAFAgIQmNgFl3iuQhkgvhjg7QhSgwhOg4QpNmjjVrOQgkh4gYh7IgBgDQgXidAAiYQAAnrDrnMQASgjAUgiQAUgiAWghQAjg6Aog3QEcmfG5jPQCzhZDNg0QBMgUBNgOQCngfCigCIAvAAQGPAFF7CxQBjAuBiA7QBQAwBNA2QJMGjDVLMQAlB6AYB9QAXCeAACZIAAADQAAHrjrHLQgRAigUAhQgTAigWAhQglA7gpA5QkaGbm1DNQi1BZjOA1QhPAUhQAOQinAfijADIgqAAg");
	var mask_1_graphics_327 = new cjs.Graphics().p("EgAGAgbQmQgFl6ivQhlgvhkg8QhTgxhOg4QpRmnjWrVQgkh5gYh8IgBgDQgXieAAiZQAAnwDtnQQASgiAVgjQAUgiAVghQAkg7Aog3QEemkG8jRQC1hZDOg2QBNgUBOgOQCngfCkgCIAwAAQGSAEF+CzQBkAvBiA6QBRAxBOA3QJQGnDWLTQAkB7AYB+QAYCfAACaIAAADQgBHwjsHOQgSAigTAiQgUAigWAhQglA8gpA6QkcGem4DPQi3BajPA2QhQAUhQAPQipAfilADIgqAAg");
	var mask_1_graphics_328 = new cjs.Graphics().p("EgAHAgtQmTgEl9ixQhngwhkg8QhTgxhPg5QpVmqjXrcQgkh7gXh8IgCgEQgWifAAiaQAAn0DunTQATgkAUgjQAUgiAVghQAlg8Apg3QEfmnG/jUQC2haDRg2QBNgVBOgOQCpggClgCIAwAAQGWAEGBC0QBkAwBkA7QBSAxBOA4QJVGqDWLaQAkB8AYB/QAYCgAACcIAAADQgBHzjuHTIgmBEQgTAjgWAhQgmA9gpA6QkfGim6DRQi4BbjSA2QhQAVhRAPQiqAfimADIgrAAg");
	var mask_1_graphics_329 = new cjs.Graphics().p("EgAIAhAQmWgEmAizQhngwhlg8QhUgyhQg5QpZmujXrjQgkh8gYh9IgBgEQgXigAAicQAAn4DxnXQASgkAVgjQAUgjAVghQAlg8Apg4QEimrHBjWQC5hbDRg3QBOgUBPgPQCqggCmgCIAxgBQGaAEGDC2QBmAwBkA8QBTAxBOA4QJZGuDXLhQAkB+AYCAQAXChAACdIAAADQAAH3jwHXQgSAigUAjIgpBFQgmA8gqA7QkhGmm+DTQi5BcjTA3QhQAVhSAPQisAginADIgWAAIgWAAg");
	var mask_1_graphics_330 = new cjs.Graphics().p("EgAIAhSQmbgDmDi0Qhngxhng9QhUgzhPg5QpfmyjXrpQgkh9gYh/IgBgDQgXiiAAidQAAn8DznbQATgkAUgjIAqhFQAlg9Aog4QElmvHFjYQC5hcDTg4QBPgVBPgOQCsghCngCIAygBQGcAEGHC4QBnAwBkA8QBUAyBPA5QJdGxDXLoQAkB/AYCBQAYCiAACfIAAACQAAH8jzHbQgSAigTAjQgVAjgVAiQgmA+gqA7QkkGpnADWQi6BdjVA3QhSAWhRAPQiuAgioADIgXABIgVgBg");
	var mask_1_graphics_331 = new cjs.Graphics().p("EgAJAhlQmdgDmHi2Qhogxhng9QhVgzhRg6Qpim1jYrxQgkh+gXiAIgBgDQgYijAAieQAAoAD1nfQASglAVgjQAVgkAVgiQAlg9Apg5QEomyHHjbQC7hdDUg4QBQgVBPgPQCtghCpgDIAyAAQGgAEGKC4QBnAxBmA9QBUAyBPA5QJiG1DYLwQAkCAAYCBQAYCkAACgIAAACQgBIAj0HfQgSAjgUAiQgUAkgWAjQgmA+gqA7QkmGtnDDZQi8BdjXA4QhSAWhSAPQivAhiqADIgXAAIgVAAg");
	var mask_1_graphics_332 = new cjs.Graphics().p("EgAKAh4QmggDmKi4Qhpgxhog+QhWg0hQg6Qpnm5jYr4Qglh/gXiAIgBgEQgYikAAifQAAoED3njQATglAVgkQAUgkAWgiQAlg9Aqg6QEpm2HKjdQC8heDXg5QBQgWBQgPQCughCrgDIAxAAQGkADGNC7QBoAxBmA9QBWAzBPA6QJnG4DXL3QAlCBAXCCQAZClAAChIAAADQgBIEj2HiQgSAjgUAkQgUAjgWAjQgnA/gqA8QkoGwnHDbQi9BfjYA5QhTAWhTAPQiwAhirAEIgXAAIgWAAg");
	var mask_1_graphics_333 = new cjs.Graphics().p("EgAKAiLQmkgEmNi4Qhqgyhog/QhXg0hRg6Qprm9jZr/QgkiAgXiBIgBgEQgYilAAihQAAoID5nnQASgkAVglIArhHQAlg+Aqg5QErm6HNjgQC+hfDYg6QBRgVBRgPQCvgjCsgCIAyAAQGnACGQC8QBpAyBnA+QBWA0BRA5QJqG9DYL9QAlCCAXCDQAYCnAACiIAAADQAAIIj4HmQgSAjgUAkQgVAkgWAkQgnA+gqA9QkqG0nKDdQi/BgjZA5QhUAXhTAQQixAhitAEIgXAAIgWAAg");
	var mask_1_graphics_334 = new cjs.Graphics().p("EgALAidQmngCmQi7Qhrgyhpg/QhXg1hSg7QpvnAjasGQgkiCgXiCIgBgDQgYinAAiiQAAoMD7nrQATglAUglQAVgkAWgjQAmg+Aqg7QEum9HQjiQC+hgDag7QBRgVBSgQQCwgiCugDQAagBAYABQGrADGTC9QBqAyBoA+QBWA0BRA7QJvHADZMEQAlCDAWCFQAZCoAACjIAAADQAAIMj6HqQgSAkgVAjQgVAlgVAjQgoBAgqA9QktG4nMDgQjABgjbA6QhUAXhVAQQiyAiiuADIgYAAIgWAAg");
	var mask_1_graphics_335 = new cjs.Graphics().p("EgAMAiwQmqgDmTi8QhsgyhqhAQhYg1hSg7Qp0nFjZsMQgliDgXiDIgBgEQgYioAAijQAAoQD8nvIAphKIArhIQAmg/Apg7QExnBHTjlQDAhhDbg7QBSgWBSgPQCygjCvgDQAagBAZABQGuACGWDAQBrAyBoA/QBYA0BRA7QJzHEDZMLQAlCFAXCFQAZCpAAClIAAACQgBIRj7HtQgTAkgUAkIgrBJQgoBAgqA+QkvG7nPDjQjCBhjdA7QhVAXhVAQQi0AiivAEIgXAAIgXAAg");
	var mask_1_graphics_336 = new cjs.Graphics().p("EgAMAjDQmugDmWi9QhtgzhrhBQhYg1hTg8Qp4nHjasUQgliEgWiEIgBgEQgZipAAikQAAoVD/nyQATgmAVglQAVglAXgkQAmg/Aqg7QEynFHWjnQDChiDdg8QBSgWBTgQQCzgjCwgDIA0gBQGxADGZDAQBsAzBpBAQBYA1BSA7QJ4HHDZMSQAlCGAXCGQAZCrAACmIAAACQgBIVj9HxQgTAlgVAkQgUAlgXAkQgnBBgrA+QkyG/nSDlQjDBijeA8QhWAXhVAQQi1AjixAEIgYAAIgWAAg");
	var mask_1_graphics_337 = new cjs.Graphics().p("EgANAjVQmxgCmZi/QhugzhrhBQhag2hTg8Qp8nMjasbQgliFgXiFIgBgDQgYirAAilQAAoZEAn2QATgmAWgmIArhJQAnhAAqg7QE1nJHYjqQDDhjDfg8QBTgXBTgPQC1gkCxgDIA0gBQG1ADGdDCQBsAzBqBAQBZA1BSA8QJ8HLDaMZQAlCHAWCIQAZCrAACnIAAADQAAIZj/H1QgTAlgVAkQgVAmgWAkQgoBCgrA+Qk0HCnVDoQjEBjjhA8QhWAYhWAQQi2AjiyAEIgYABIgXgBg");
	var mask_1_graphics_338 = new cjs.Graphics().p("EgAOAjoQm0gCmdjAQhug0hshCQhag2hUg8QqAnQjbsiQgliGgWiGIgBgDQgZisAAinQAAodECn5QATgnAXgmQAUglAXglQAmhAArg8QE3nMHcjtQDEhjDhg9QBTgXBUgQQC2gkCygEIA1AAQG4ACGfDEQBuAzBqBBQBaA2BTA8QKBHODZMhQAlCIAXCIQAZCtAACoIAAADQAAIdkBH5QgUAlgVAlQgUAmgXAlQgoBBgsA/Qk2HGnXDqQjGBkjiA9QhXAYhXARQi3AjizAEIgYAAIgYAAg");
	var mask_1_graphics_339 = new cjs.Graphics().p("EgAOAj7Qm4gBmgjDQhvg1hthCQhbg2hUg9QqFnTjbspQgliHgViHIgBgEQgaitAAioQAAohEFn9QATgnAWgnQAVglAWglQAohAAqg9QE5nQHejvQDHhkDhg+QBVgXBVgQQC3gkCzgFIA1AAQG7ACGjDFQBuA0BsBBQBbA2BTA9QKFHSDbMoQAkCJAWCJQAaCuAACqIAAADQgBIhkDH9QgTAlgUAlIgsBMQgpBCgsA/Qk4HKnbDsQjHBljjA+QhYAYhXARQi5Aji0AFIgwAAg");
	var mask_1_graphics_340 = new cjs.Graphics().p("EgAPAkOQm7gCmjjEQhwg0huhDQhbg3hVg9QqJnXjbswQgliIgWiIIgBgEQgaiuAAiqQAAokEGoCQAUgnAWgnIAshKQAnhCArg9QE7nTHijyQDHhlDkg/QBVgXBVgRQC4gkC1gEIA2gBQG+ACGnDHQBuA0BtBCQBbA3BUA9QKJHWDbMuQAlCLAWCKQAaCvAACrIAAADQgBIlkFIAQgTAmgVAmIgsBMQgpBDgsA/Qk6HOneDuQjJBmjlA/QhYAYhYARQi6Aki2AFIgwAAg");
	var mask_1_graphics_341 = new cjs.Graphics().p("EgAQAkgQm+gBmmjFQhxg1hvhDQhcg4hVg+QqOnajbs3QgliJgWiJIgBgEQgaivABirQAAopEHoGQAUgnAXgnQAVgmAXglQAnhCArg9QE+nXHkj1QDJhmDlg/QBWgYBVgRQC6glC3gDIA2gBQHBABGpDIQBwA2BuBBQBbA4BUA9QKOHaDbM1QAmCMAWCLQAaCxAACsIAAACQgCIpkGIFIgoBMQgWAngXAlQgpBEgsBBQk9HQngDxQjLBnjmBAQhZAYhZARQi7Ali3AEIgxAAg");
	var mask_1_graphics_342 = new cjs.Graphics().p("EgN7AhrQhyg1hvhEQhdg4hWg+QqSnejcs+QgliLgWiJIAAgEQgaixAAisQAAotEKoJQATgoAXgnIAshMQAohCAqg+QFBnbHnj3QDLhnDmhAQBWgYBWgRQC8glC4gEIA2gBQHFABGtDKQBwA1BuBDQBdA4BUA+QKTHdDbM9QAlCNAWCLQAaCyAACuIAAADQgBItkIIIQgTAmgWAmQgVAngYAnQgpBEgsBAQk/HVnjD0QjMBojpA/QhZAZhZARQi9Ami4AEIgyAAQnBgBmpjHg");
	var mask_1_graphics_343 = new cjs.Graphics().p("EgOCAh8Qhyg2hxhEQhdg4hWg/QqXnijctFQgmiLgViLIgBgEQgaiyAAitQAAoxEMoNQAUgoAXgoIAshMQAnhDAsg/QFCneHqj5QDMhpDphAQBWgYBXgRQC9gmC5gEIA3gBQHJABGvDMQBxA1BvBEQBdA4BWA+QKWHhDcNEQAlCOAWCMQAaC0AACuIAAADQgBIxkKINQgUAmgVAnIgtBNQgqBFgrBBQlCHYnnD2QjNBpjqBBQhaAZhaARQi+Ami5AEIgyABQnFgBmsjJg");
	var mask_1_graphics_344 = new cjs.Graphics().p("EgOJAiNQhzg2hyhEQheg5hXhAQqanljdtMQgliNgWiLIgBgEQgai0AAiuQAAo1EOoRQAUgoAXgoIAshNQAohDAshAQFFnhHtj8QDNhqDqhAQBXgZBXgSQC/gmC6gEIA3gBQHMABGzDNQByA2BwBEQBdA5BXA/QKaHkDdNKQAlCQAVCNQAbC1AACwIAAADQgBI1kMIRIgqBNIgtBPQgpBFgtBBQlEHcnpD4QjOBrjsBAQhbAahaARQjAAni7AEIgyABQnIgCmvjKg");
	var mask_1_graphics_345 = new cjs.Graphics().p("EgOQAifQh0g3hzhFQheg5hYhAQqenpjetTQgliOgWiMIgBgEQgai1AAiwQAAo5EPoUIAshSQAWgnAXgmQAohEAsg/QFHnmHwj+QDOhrDshBQBYgZBYgSQC/gmC8gFIA3AAQHQAAG2DPQByA2BxBFQBeA5BYA/QKeHoDdNSQAlCQAWCPQAbC2gBCxIAAADQgBI5kOIUIgpBOIguBPQgpBGgtBCQlGHgnsD7QjRBqjtBCQhcAahaASQjBAmi8AFIgzAAQnMAAmxjMg");
	var mask_1_graphics_346 = new cjs.Graphics().p("EgOXAiwQh2g3hyhGQhgg6hXg/QqjntjftaQgliQgViMIgBgFQgai1AAiyQAAo9ERoYQAVgpAXgpQAVgoAYgmQAohEArhAQFKnqHzkAQDQhrDuhDQBYgZBYgRQDBgnC9gFIA4gBQHTABG5DQQBzA3ByBFQBfA5BYA/QKiHtDeNYQAmCSAVCPQAaC4AACyIAAADQAAI9kRIYQgUAngVAoQgXAogXAoQgqBGgtBDQlJHinuD+QjSBsjvBCQhcAahcASQjCAni9AFIgzAAQnPAAm1jOg");
	var mask_1_graphics_347 = new cjs.Graphics().p("EgOfAjCQh1g4h0hGQhgg6hYhBQqonwjethQgmiRgUiOIgBgEQgbi3AAiyQAApCETocQAVgpAXgpIAthPQAphFAshAQFMntH1kDQDRhtDvhDQBagZBZgSQDCgnC/gFIA4gBQHWAAG9DSQBzA3ByBGQBgA6BZBAQKnHwDeNfQAlCTAVCRQAbC4AAC0IAAADQgBJBkRIcIgrBPIguBQQgqBHgtBDQlLHnnyEAQjSBsjxBEQhdAahcASQjDAnjAAFIgyABQnTAAm5jPg");
	var mask_1_graphics_348 = new cjs.Graphics().p("EgSRAhUQtIn+j8vaQhWlOAAlCQAApyFBpGQHlt0OokKQE9hYEygBQJVAAIsFSQNJH+D6PXQBWFQAAFDQAAJylAJGQnlN0upEHQk/BZk0ABQpTAAoplQg");
	var mask_1_graphics_349 = new cjs.Graphics().p("A1ZePMAAAg8dMAqzAAAMAAAA8dg");
	var mask_1_graphics_350 = new cjs.Graphics().p("A1mePMAAAg8dMArNAAAMAAAA8dg");
	var mask_1_graphics_351 = new cjs.Graphics().p("A1yePMAAAg8dMArmAAAMAAAA8dg");
	var mask_1_graphics_352 = new cjs.Graphics().p("A1/ePMAAAg8dMAr/AAAMAAAA8dg");
	var mask_1_graphics_353 = new cjs.Graphics().p("A2MePMAAAg8dMAsZAAAMAAAA8dg");
	var mask_1_graphics_354 = new cjs.Graphics().p("A2ZePMAAAg8dMAszAAAMAAAA8dg");
	var mask_1_graphics_355 = new cjs.Graphics().p("A2mePMAAAg8dMAtNAAAMAAAA8dg");
	var mask_1_graphics_356 = new cjs.Graphics().p("A2zePMAAAg8dMAtnAAAMAAAA8dg");
	var mask_1_graphics_357 = new cjs.Graphics().p("A2/ePMAAAg8dMAt/AAAMAAAA8dg");
	var mask_1_graphics_358 = new cjs.Graphics().p("A3MePMAAAg8dMAuZAAAMAAAA8dg");
	var mask_1_graphics_359 = new cjs.Graphics().p("A3ZePMAAAg8dMAuzAAAMAAAA8dg");
	var mask_1_graphics_360 = new cjs.Graphics().p("A3mePMAAAg8dMAvNAAAMAAAA8dg");
	var mask_1_graphics_361 = new cjs.Graphics().p("A3yePMAAAg8dMAvlAAAMAAAA8dg");
	var mask_1_graphics_362 = new cjs.Graphics().p("A3/ePMAAAg8dMAv/AAAMAAAA8dg");
	var mask_1_graphics_363 = new cjs.Graphics().p("A4MePMAAAg8dMAwZAAAMAAAA8dg");
	var mask_1_graphics_364 = new cjs.Graphics().p("A4YePMAAAg8dMAwyAAAMAAAA8dg");
	var mask_1_graphics_365 = new cjs.Graphics().p("A4lePMAAAg8dMAxLAAAMAAAA8dg");
	var mask_1_graphics_366 = new cjs.Graphics().p("A4yePMAAAg8dMAxlAAAMAAAA8dg");
	var mask_1_graphics_367 = new cjs.Graphics().p("A4/ePMAAAg8dMAx/AAAMAAAA8dg");
	var mask_1_graphics_368 = new cjs.Graphics().p("A5MePMAAAg8dMAyZAAAMAAAA8dg");
	var mask_1_graphics_369 = new cjs.Graphics().p("A5YePMAAAg8dMAyyAAAMAAAA8dg");
	var mask_1_graphics_370 = new cjs.Graphics().p("A5lePMAAAg8dMAzLAAAMAAAA8dg");
	var mask_1_graphics_371 = new cjs.Graphics().p("A5yePMAAAg8dMAzlAAAMAAAA8dg");
	var mask_1_graphics_372 = new cjs.Graphics().p("A5/ePMAAAg8dMAz/AAAMAAAA8dg");
	var mask_1_graphics_373 = new cjs.Graphics().p("A6MePMAAAg8dMA0ZAAAMAAAA8dg");
	var mask_1_graphics_374 = new cjs.Graphics().p("A6YePMAAAg8dMA0xAAAMAAAA8dg");
	var mask_1_graphics_375 = new cjs.Graphics().p("A6lePMAAAg8dMA1LAAAMAAAA8dg");
	var mask_1_graphics_376 = new cjs.Graphics().p("A6uePMAAAg8dMA1dAAAMAAAA8dg");
	var mask_1_graphics_377 = new cjs.Graphics().p("A62ePMAAAg8dMA1uAAAMAAAA8dg");
	var mask_1_graphics_378 = new cjs.Graphics().p("A6/ePMAAAg8dMA1/AAAMAAAA8dg");
	var mask_1_graphics_379 = new cjs.Graphics().p("A7IePMAAAg8dMA2RAAAMAAAA8dg");
	var mask_1_graphics_380 = new cjs.Graphics().p("A7QePMAAAg8dMA2iAAAMAAAA8dg");
	var mask_1_graphics_381 = new cjs.Graphics().p("A7ZePMAAAg8dMA2zAAAMAAAA8dg");
	var mask_1_graphics_382 = new cjs.Graphics().p("A7iePMAAAg8dMA3FAAAMAAAA8dg");
	var mask_1_graphics_383 = new cjs.Graphics().p("A7rePMAAAg8dMA3XAAAMAAAA8dg");
	var mask_1_graphics_384 = new cjs.Graphics().p("A70ePMAAAg8dMA3pAAAMAAAA8dg");
	var mask_1_graphics_385 = new cjs.Graphics().p("A78ePMAAAg8dMA35AAAMAAAA8dg");
	var mask_1_graphics_386 = new cjs.Graphics().p("A8FePMAAAg8dMA4LAAAMAAAA8dg");
	var mask_1_graphics_387 = new cjs.Graphics().p("A8OePMAAAg8dMA4dAAAMAAAA8dg");
	var mask_1_graphics_388 = new cjs.Graphics().p("A8WePMAAAg8dMA4tAAAMAAAA8dg");
	var mask_1_graphics_389 = new cjs.Graphics().p("A8fePMAAAg8dMA4/AAAMAAAA8dg");
	var mask_1_graphics_390 = new cjs.Graphics().p("A8oePMAAAg8dMA5RAAAMAAAA8dg");
	var mask_1_graphics_391 = new cjs.Graphics().p("A8wePMAAAg8dMA5iAAAMAAAA8dg");
	var mask_1_graphics_392 = new cjs.Graphics().p("A85ePMAAAg8dMA5zAAAMAAAA8dg");
	var mask_1_graphics_393 = new cjs.Graphics().p("A9CePMAAAg8dMA6FAAAMAAAA8dg");
	var mask_1_graphics_394 = new cjs.Graphics().p("A9KePMAAAg8dMA6WAAAMAAAA8dg");
	var mask_1_graphics_395 = new cjs.Graphics().p("A9TePMAAAg8dMA6nAAAMAAAA8dg");
	var mask_1_graphics_396 = new cjs.Graphics().p("A9cePMAAAg8dMA65AAAMAAAA8dg");
	var mask_1_graphics_397 = new cjs.Graphics().p("A9lePMAAAg8dMA7LAAAMAAAA8dg");
	var mask_1_graphics_398 = new cjs.Graphics().p("A9uePMAAAg8dMA7dAAAMAAAA8dg");
	var mask_1_graphics_399 = new cjs.Graphics().p("A92ePMAAAg8dMA7tAAAMAAAA8dg");
	var mask_1_graphics_400 = new cjs.Graphics().p("A9/ePMAAAg8dMA7/AAAMAAAA8dg");
	var mask_1_graphics_401 = new cjs.Graphics().p("A+IePMAAAg8dMA8RAAAMAAAA8dg");
	var mask_1_graphics_402 = new cjs.Graphics().p("A+QePMAAAg8dMA8hAAAMAAAA8dg");
	var mask_1_graphics_403 = new cjs.Graphics().p("A+ZePMAAAg8dMA8zAAAMAAAA8dg");
	var mask_1_graphics_404 = new cjs.Graphics().p("EgX+AjAMAAAg8dMA9FAAAMAAAA8dg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(224).to({graphics:mask_1_graphics_224,x:239.3,y:75.8}).wait(1).to({graphics:mask_1_graphics_225,x:462.5,y:89.5}).wait(1).to({graphics:mask_1_graphics_226,x:460.3,y:91.6}).wait(1).to({graphics:mask_1_graphics_227,x:458.1,y:93.8}).wait(1).to({graphics:mask_1_graphics_228,x:456,y:95.9}).wait(1).to({graphics:mask_1_graphics_229,x:453.7,y:98}).wait(1).to({graphics:mask_1_graphics_230,x:451.5,y:100.1}).wait(1).to({graphics:mask_1_graphics_231,x:449.4,y:102.2}).wait(1).to({graphics:mask_1_graphics_232,x:447.2,y:104.4}).wait(1).to({graphics:mask_1_graphics_233,x:445,y:106.5}).wait(1).to({graphics:mask_1_graphics_234,x:442.8,y:108.7}).wait(1).to({graphics:mask_1_graphics_235,x:440.6,y:110.9}).wait(1).to({graphics:mask_1_graphics_236,x:438.4,y:112.9}).wait(1).to({graphics:mask_1_graphics_237,x:436.2,y:114.8}).wait(1).to({graphics:mask_1_graphics_238,x:434,y:116.8}).wait(1).to({graphics:mask_1_graphics_239,x:431.8,y:118.7}).wait(1).to({graphics:mask_1_graphics_240,x:429.6,y:120.7}).wait(1).to({graphics:mask_1_graphics_241,x:429.2,y:122.3}).wait(1).to({graphics:mask_1_graphics_242,x:428.8,y:123.9}).wait(1).to({graphics:mask_1_graphics_243,x:428.4,y:125.6}).wait(1).to({graphics:mask_1_graphics_244,x:428,y:127.2}).wait(1).to({graphics:mask_1_graphics_245,x:427.6,y:128.8}).wait(1).to({graphics:mask_1_graphics_246,x:427.2,y:130.5}).wait(1).to({graphics:mask_1_graphics_247,x:426.8,y:132.3}).wait(1).to({graphics:mask_1_graphics_248,x:426.4,y:134}).wait(1).to({graphics:mask_1_graphics_249,x:426.1,y:135.7}).wait(1).to({graphics:mask_1_graphics_250,x:425.7,y:137.4}).wait(1).to({graphics:mask_1_graphics_251,x:425.2,y:139.1}).wait(1).to({graphics:mask_1_graphics_252,x:424.9,y:140.8}).wait(1).to({graphics:mask_1_graphics_253,x:424.5,y:142.5}).wait(1).to({graphics:mask_1_graphics_254,x:424.1,y:144.2}).wait(1).to({graphics:mask_1_graphics_255,x:423.7,y:145.9}).wait(1).to({graphics:mask_1_graphics_256,x:423.3,y:147.7}).wait(1).to({graphics:mask_1_graphics_257,x:422.9,y:149.4}).wait(1).to({graphics:mask_1_graphics_258,x:422.5,y:151.1}).wait(1).to({graphics:mask_1_graphics_259,x:422.1,y:152.8}).wait(1).to({graphics:mask_1_graphics_260,x:421.7,y:154.5}).wait(1).to({graphics:mask_1_graphics_261,x:421.3,y:156.3}).wait(1).to({graphics:mask_1_graphics_262,x:420.9,y:158}).wait(1).to({graphics:mask_1_graphics_263,x:420.5,y:159.7}).wait(1).to({graphics:mask_1_graphics_264,x:420.1,y:161.4}).wait(1).to({graphics:mask_1_graphics_265,x:419.8,y:163.1}).wait(1).to({graphics:mask_1_graphics_266,x:419.4,y:164.8}).wait(1).to({graphics:mask_1_graphics_267,x:419.1,y:166.6}).wait(1).to({graphics:mask_1_graphics_268,x:418.8,y:168.3}).wait(1).to({graphics:mask_1_graphics_269,x:418.5,y:170}).wait(1).to({graphics:mask_1_graphics_270,x:418.2,y:171.6}).wait(1).to({graphics:mask_1_graphics_271,x:417.9,y:173.2}).wait(1).to({graphics:mask_1_graphics_272,x:417.6,y:174.8}).wait(1).to({graphics:mask_1_graphics_273,x:417.3,y:176.4}).wait(1).to({graphics:mask_1_graphics_274,x:417,y:178}).wait(1).to({graphics:mask_1_graphics_275,x:416.7,y:179.5}).wait(1).to({graphics:mask_1_graphics_276,x:416.4,y:181.1}).wait(1).to({graphics:mask_1_graphics_277,x:416.1,y:182.7}).wait(1).to({graphics:mask_1_graphics_278,x:415.8,y:184.3}).wait(1).to({graphics:mask_1_graphics_279,x:415.5,y:185.8}).wait(1).to({graphics:mask_1_graphics_280,x:415.2,y:187.4}).wait(1).to({graphics:mask_1_graphics_281,x:414.9,y:189}).wait(1).to({graphics:mask_1_graphics_282,x:414.6,y:190.6}).wait(1).to({graphics:mask_1_graphics_283,x:414.3,y:192.2}).wait(1).to({graphics:mask_1_graphics_284,x:414,y:193.7}).wait(1).to({graphics:mask_1_graphics_285,x:413.7,y:195.3}).wait(1).to({graphics:mask_1_graphics_286,x:413.4,y:196.9}).wait(1).to({graphics:mask_1_graphics_287,x:413.1,y:198.5}).wait(1).to({graphics:mask_1_graphics_288,x:412.8,y:200.1}).wait(1).to({graphics:mask_1_graphics_289,x:412.5,y:201.7}).wait(1).to({graphics:mask_1_graphics_290,x:412.2,y:203.3}).wait(1).to({graphics:mask_1_graphics_291,x:411.9,y:204.8}).wait(1).to({graphics:mask_1_graphics_292,x:411.5,y:206.4}).wait(1).to({graphics:mask_1_graphics_293,x:411.3,y:208}).wait(1).to({graphics:mask_1_graphics_294,x:410.9,y:209.6}).wait(1).to({graphics:mask_1_graphics_295,x:410.6,y:211.2}).wait(1).to({graphics:mask_1_graphics_296,x:410.3,y:212.8}).wait(1).to({graphics:mask_1_graphics_297,x:410,y:214.3}).wait(1).to({graphics:mask_1_graphics_298,x:409.7,y:215.9}).wait(1).to({graphics:mask_1_graphics_299,x:409.4,y:217.5}).wait(1).to({graphics:mask_1_graphics_300,x:409.1,y:219.1}).wait(1).to({graphics:mask_1_graphics_301,x:408.8,y:220.7}).wait(1).to({graphics:mask_1_graphics_302,x:408.5,y:222.3}).wait(1).to({graphics:mask_1_graphics_303,x:408.2,y:223.9}).wait(1).to({graphics:mask_1_graphics_304,x:407.9,y:225.5}).wait(1).to({graphics:mask_1_graphics_305,x:407.6,y:227.1}).wait(1).to({graphics:mask_1_graphics_306,x:407.3,y:228.7}).wait(1).to({graphics:mask_1_graphics_307,x:407,y:230.2}).wait(1).to({graphics:mask_1_graphics_308,x:406.7,y:231.8}).wait(1).to({graphics:mask_1_graphics_309,x:406.6,y:233.2}).wait(1).to({graphics:mask_1_graphics_310,x:406.5,y:234.7}).wait(1).to({graphics:mask_1_graphics_311,x:406.4,y:236.1}).wait(1).to({graphics:mask_1_graphics_312,x:406.3,y:237.5}).wait(1).to({graphics:mask_1_graphics_313,x:406.3,y:239}).wait(1).to({graphics:mask_1_graphics_314,x:406.2,y:240.4}).wait(1).to({graphics:mask_1_graphics_315,x:406.1,y:241.8}).wait(1).to({graphics:mask_1_graphics_316,x:406,y:243.2}).wait(1).to({graphics:mask_1_graphics_317,x:405.9,y:244.7}).wait(1).to({graphics:mask_1_graphics_318,x:405.8,y:246.1}).wait(1).to({graphics:mask_1_graphics_319,x:405.7,y:247.5}).wait(1).to({graphics:mask_1_graphics_320,x:405.6,y:248.9}).wait(1).to({graphics:mask_1_graphics_321,x:405.5,y:250.4}).wait(1).to({graphics:mask_1_graphics_322,x:405.5,y:251.8}).wait(1).to({graphics:mask_1_graphics_323,x:405.4,y:253.2}).wait(1).to({graphics:mask_1_graphics_324,x:405.3,y:254.7}).wait(1).to({graphics:mask_1_graphics_325,x:405.2,y:256.1}).wait(1).to({graphics:mask_1_graphics_326,x:405.1,y:257.5}).wait(1).to({graphics:mask_1_graphics_327,x:405,y:258.9}).wait(1).to({graphics:mask_1_graphics_328,x:405,y:260.4}).wait(1).to({graphics:mask_1_graphics_329,x:404.8,y:261.8}).wait(1).to({graphics:mask_1_graphics_330,x:404.8,y:263.2}).wait(1).to({graphics:mask_1_graphics_331,x:404.7,y:264.6}).wait(1).to({graphics:mask_1_graphics_332,x:404.6,y:266.1}).wait(1).to({graphics:mask_1_graphics_333,x:404.5,y:267.5}).wait(1).to({graphics:mask_1_graphics_334,x:404.4,y:268.9}).wait(1).to({graphics:mask_1_graphics_335,x:404.3,y:270.4}).wait(1).to({graphics:mask_1_graphics_336,x:404.2,y:271.8}).wait(1).to({graphics:mask_1_graphics_337,x:404.1,y:273.2}).wait(1).to({graphics:mask_1_graphics_338,x:404.1,y:274.6}).wait(1).to({graphics:mask_1_graphics_339,x:404,y:276.1}).wait(1).to({graphics:mask_1_graphics_340,x:403.9,y:277.5}).wait(1).to({graphics:mask_1_graphics_341,x:403.8,y:278.9}).wait(1).to({graphics:mask_1_graphics_342,x:403.7,y:280.3}).wait(1).to({graphics:mask_1_graphics_343,x:403.6,y:281.8}).wait(1).to({graphics:mask_1_graphics_344,x:403.5,y:283.2}).wait(1).to({graphics:mask_1_graphics_345,x:403.5,y:284.6}).wait(1).to({graphics:mask_1_graphics_346,x:403.4,y:286.1}).wait(1).to({graphics:mask_1_graphics_347,x:403.3,y:287.5}).wait(1).to({graphics:mask_1_graphics_348,x:403.2,y:288.9}).wait(1).to({graphics:mask_1_graphics_349,x:338,y:254.5}).wait(1).to({graphics:mask_1_graphics_350,x:336.7,y:254.5}).wait(1).to({graphics:mask_1_graphics_351,x:335.5,y:254.5}).wait(1).to({graphics:mask_1_graphics_352,x:334.2,y:254.5}).wait(1).to({graphics:mask_1_graphics_353,x:332.9,y:254.5}).wait(1).to({graphics:mask_1_graphics_354,x:331.6,y:254.5}).wait(1).to({graphics:mask_1_graphics_355,x:330.4,y:254.5}).wait(1).to({graphics:mask_1_graphics_356,x:329.1,y:254.5}).wait(1).to({graphics:mask_1_graphics_357,x:327.8,y:254.5}).wait(1).to({graphics:mask_1_graphics_358,x:326.5,y:254.5}).wait(1).to({graphics:mask_1_graphics_359,x:325.2,y:254.5}).wait(1).to({graphics:mask_1_graphics_360,x:324,y:254.5}).wait(1).to({graphics:mask_1_graphics_361,x:322.7,y:254.5}).wait(1).to({graphics:mask_1_graphics_362,x:321.4,y:254.5}).wait(1).to({graphics:mask_1_graphics_363,x:320.1,y:254.5}).wait(1).to({graphics:mask_1_graphics_364,x:318.9,y:254.5}).wait(1).to({graphics:mask_1_graphics_365,x:317.6,y:254.5}).wait(1).to({graphics:mask_1_graphics_366,x:316.3,y:254.5}).wait(1).to({graphics:mask_1_graphics_367,x:315,y:254.5}).wait(1).to({graphics:mask_1_graphics_368,x:313.8,y:254.5}).wait(1).to({graphics:mask_1_graphics_369,x:312.5,y:254.5}).wait(1).to({graphics:mask_1_graphics_370,x:311.2,y:254.5}).wait(1).to({graphics:mask_1_graphics_371,x:309.9,y:254.5}).wait(1).to({graphics:mask_1_graphics_372,x:308.6,y:254.5}).wait(1).to({graphics:mask_1_graphics_373,x:307.4,y:254.5}).wait(1).to({graphics:mask_1_graphics_374,x:306.1,y:254.5}).wait(1).to({graphics:mask_1_graphics_375,x:304.8,y:254.5}).wait(1).to({graphics:mask_1_graphics_376,x:303.9,y:254.5}).wait(1).to({graphics:mask_1_graphics_377,x:303.1,y:254.5}).wait(1).to({graphics:mask_1_graphics_378,x:302.2,y:254.5}).wait(1).to({graphics:mask_1_graphics_379,x:301.3,y:254.5}).wait(1).to({graphics:mask_1_graphics_380,x:300.5,y:254.5}).wait(1).to({graphics:mask_1_graphics_381,x:299.6,y:254.5}).wait(1).to({graphics:mask_1_graphics_382,x:298.7,y:254.5}).wait(1).to({graphics:mask_1_graphics_383,x:297.8,y:254.5}).wait(1).to({graphics:mask_1_graphics_384,x:297,y:254.5}).wait(1).to({graphics:mask_1_graphics_385,x:296.1,y:254.5}).wait(1).to({graphics:mask_1_graphics_386,x:295.2,y:254.5}).wait(1).to({graphics:mask_1_graphics_387,x:294.4,y:254.5}).wait(1).to({graphics:mask_1_graphics_388,x:293.5,y:254.5}).wait(1).to({graphics:mask_1_graphics_389,x:292.6,y:254.5}).wait(1).to({graphics:mask_1_graphics_390,x:291.7,y:254.5}).wait(1).to({graphics:mask_1_graphics_391,x:290.9,y:254.5}).wait(1).to({graphics:mask_1_graphics_392,x:290,y:254.5}).wait(1).to({graphics:mask_1_graphics_393,x:289.1,y:254.5}).wait(1).to({graphics:mask_1_graphics_394,x:288.3,y:254.5}).wait(1).to({graphics:mask_1_graphics_395,x:287.4,y:254.5}).wait(1).to({graphics:mask_1_graphics_396,x:286.5,y:254.5}).wait(1).to({graphics:mask_1_graphics_397,x:285.6,y:254.5}).wait(1).to({graphics:mask_1_graphics_398,x:284.8,y:254.5}).wait(1).to({graphics:mask_1_graphics_399,x:283.9,y:254.5}).wait(1).to({graphics:mask_1_graphics_400,x:283,y:254.5}).wait(1).to({graphics:mask_1_graphics_401,x:282.2,y:254.5}).wait(1).to({graphics:mask_1_graphics_402,x:281.3,y:254.5}).wait(1).to({graphics:mask_1_graphics_403,x:280.4,y:254.5}).wait(1).to({graphics:mask_1_graphics_404,x:237.5,y:224}).wait(171));

	// 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("A79CSQCGHMECGTQEPGoHfCOQHlCQHQjGQHQjGB4mwQB4mwAooNQAnoOBomeQBnmeC8iGQC8iGB6BY");
	this.shape_2.setTransform(275,265.6);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(224).to({_off:false},0).wait(351));

	// Layer 7 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_197 = new cjs.Graphics().p("Ag7D7IAAn2IB3AAIAAH2g");
	var mask_2_graphics_198 = new cjs.Graphics().p("AhND7IAAn2ICaAAIAAH2g");
	var mask_2_graphics_199 = new cjs.Graphics().p("AheD7IAAn2IC9AAIAAH2g");
	var mask_2_graphics_200 = new cjs.Graphics().p("AhwD7IAAn2IDhAAIAAH2g");
	var mask_2_graphics_201 = new cjs.Graphics().p("AiCD7IAAn2IEFAAIAAH2g");
	var mask_2_graphics_202 = new cjs.Graphics().p("AiUD7IAAn2IEoAAIAAH2g");
	var mask_2_graphics_203 = new cjs.Graphics().p("AilD7IAAn2IFLAAIAAH2g");
	var mask_2_graphics_204 = new cjs.Graphics().p("Ai3D7IAAn2IFvAAIAAH2g");
	var mask_2_graphics_205 = new cjs.Graphics().p("AjID7IAAn2IGRAAIAAH2g");
	var mask_2_graphics_206 = new cjs.Graphics().p("AjaD7IAAn2IG1AAIAAH2g");
	var mask_2_graphics_207 = new cjs.Graphics().p("AjsD7IAAn2IHZAAIAAH2g");
	var mask_2_graphics_208 = new cjs.Graphics().p("Aj+D7IAAn2IH9AAIAAH2g");
	var mask_2_graphics_209 = new cjs.Graphics().p("AcwKMIAAn3IIhAAIAAH3g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(197).to({graphics:mask_2_graphics_197,x:471,y:105.2}).wait(1).to({graphics:mask_2_graphics_198,x:469.2,y:105.2}).wait(1).to({graphics:mask_2_graphics_199,x:467.4,y:105.2}).wait(1).to({graphics:mask_2_graphics_200,x:465.7,y:105.2}).wait(1).to({graphics:mask_2_graphics_201,x:463.9,y:105.2}).wait(1).to({graphics:mask_2_graphics_202,x:462.1,y:105.2}).wait(1).to({graphics:mask_2_graphics_203,x:460.4,y:105.2}).wait(1).to({graphics:mask_2_graphics_204,x:458.6,y:105.2}).wait(1).to({graphics:mask_2_graphics_205,x:456.8,y:105.2}).wait(1).to({graphics:mask_2_graphics_206,x:455,y:105.2}).wait(1).to({graphics:mask_2_graphics_207,x:453.3,y:105.2}).wait(1).to({graphics:mask_2_graphics_208,x:451.5,y:105.2}).wait(1).to({graphics:mask_2_graphics_209,x:238.5,y:65.2}).wait(366));

	// 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("AiPh8QCtgrA+BgQA/BfgNBy");
	this.shape_3.setTransform(447.6,116.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20.1,1,1).p("Aek3YUgEIAYag4/AWX");
	this.shape_4.setTransform(266.2,279.9);

	var maskedShapeInstanceList = [this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},197).wait(378));

	// arrow
	this.instance_3 = new lib.ar1("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(114.6,452.4,1,1,18.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(566));

	// Layer 1 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_9 = new cjs.Graphics().p("EgBBAjIQhMhMAAhrQAAhsBMhNQBMhLBrAAQBsAABMBLQBMBNAABsQAABrhMBMQhMBMhsABQhrgBhMhMg");
	var mask_3_graphics_10 = new cjs.Graphics().p("AhQECQhAgVgzg2QhLhSAAhvQAHhpBRhMQBShLBvABQAlgBAhAJQBAAVAzA2QBLBRAABvQgHBqhRBLQhRBMhwAAQgkAAgigJg");
	var mask_3_graphics_11 = new cjs.Graphics().p("AheEJQg/gZgxg6QhLhWAAh1QAOhnBWhLQBWhJB0AAQAnAAAjAIQA/AZAyA5QBJBYAABzQgMBohXBKQhWBKh0AAQgmAAgkgIg");
	var mask_3_graphics_12 = new cjs.Graphics().p("AhsEQQg+gdgxg+QhIhbAAh5QAThmBbhJQBchIB5AAQAoAAAlAIQA+AcAxA+QBIBcAAB4QgTBmhcBJQhcBIh4AAQgoAAglgHg");
	var mask_3_graphics_13 = new cjs.Graphics().p("Ah6EWQg8ghgxhBQhHhgAAh+QAahkBghIQBhhHB+AAQAqAAAlAIQA9AhAwBAQBIBhAAB+IgBAAQgZBkhhBHQhhBIh9AAQgpAAgngIg");
	var mask_3_graphics_14 = new cjs.Graphics().p("AiHEdQg8glgwhFQhGhlAAiCQAghjBmhGQBmhGCCAAQAsAAAoAIQA7AkAvBEQBHBmAACCIgBAAQgfBjhnBGQhmBGiBAAQgrAAgogHg");
	var mask_3_graphics_15 = new cjs.Graphics().p("AiVEjQg7gogvhIQhFhrAAiHQAnhhBrhFQBshFCGAAQAtAAApAIQA7AoAvBIQBEBrAACHIAAAAQgmBhhsBFQhrBFiGAAQgtAAgpgIg");
	var mask_3_graphics_16 = new cjs.Graphics().p("AijEqQg6gtguhLQhDhxAAiLQAthfBvhEQBxhDCLAAQAvAAArAHQA6AtAtBLQBEBwAACLQgtBghwBDQhwBEiMAAQguAAgrgHg");
	var mask_3_graphics_17 = new cjs.Graphics().p("AixEwQg5gwgthPQhCh2AAiPQAzhdB1hEQB2hCCQABQAwAAAtAHQA5AwAsBPQBDB2AACPQgzBeh2BCQh2BCiQAAQgvABgtgIg");
	var mask_3_graphics_18 = new cjs.Graphics().p("Ai/E3Qg4g0gshTQhBh6ABiVQA5hbB6hCQB7hBCVAAQAxAAAvAHQA3A0AtBTQBBB7gBCUQg5Bch7BBQh7BBiUAAQgxAAgvgHg");
	var mask_3_graphics_19 = new cjs.Graphics().p("AjME+Qg3g5grhWQhAiAAAiYQBAhbB/hAQCBg/CZAAQAzAAAwAGQA3A5AqBVQBACAAACaQhABZiABBQh/A/iaABQgyAAgwgHg");
	var mask_3_graphics_20 = new cjs.Graphics().p("AjbFFQg1g+gqhZQg/iFAAidQBGhYCEhAQCGg+CfAAQA0AAAxAHQA2A8AqBZQA/CFAACeIAAAAQhHBYiFA/QiFA/ieAAQg0AAgygGg");
	var mask_3_graphics_21 = new cjs.Graphics().p("AjoFLQg1hBgqhcQg9iKAAijQBNhWCJg+QCLg9CjAAQA2AAAzAHQA1BAApBcQA+CKAACjIgBAAQhMBXiLA9QiKA9iiAAQg2AAgzgGg");
	var mask_3_graphics_22 = new cjs.Graphics().p("Aj2FSQg0hFgphgQg7iPAAinQBShVCQg9QCQg8CnAAQA3AAA2AHQAyBEApBgQA9CPAACnIgBAAQhTBViQA8QiOA9ioAAQg3AAg1gGg");
	var mask_3_graphics_23 = new cjs.Graphics().p("AkEFYQgyhJgohjQg7iUAAisQBZhTCUg8QCVg6CtAAQA5AAA2AGQAzBIAnBjQA7CVAACsIAAAAQhZBTiVA7QiVA7isAAQg4AAg3gGg");
	var mask_3_graphics_24 = new cjs.Graphics().p("AkSFfQgxhNgnhnQg6iZAAixQBghRCZg6QCag6CxAAQA7AAA4AHQAxBMAnBmQA6CaAACxIgBAAQhfBRiaA6QiaA6iwAAQg7AAg4gGg");
	var mask_3_graphics_25 = new cjs.Graphics().p("AkgFlQgwhQgmhrQg5ieAAi1QBnhQCdg5QCgg4C2AAQA8AAA6AGQAwBQAmBqQA5CfgBC1IAAAAQhmBQifA4QifA5i1AAQg8AAg6gGg");
	var mask_3_graphics_26 = new cjs.Graphics().p("AktFsQgwhUglhuQg3ikAAi6QBshOCkg3QCkg3C7AAQA9gBA8AHQAvBUAlBtQA3ClAAC5IAAAAQhtBOijA3QilA3i6AAQg9AAg7gFg");
	var mask_3_graphics_27 = new cjs.Graphics().p("Ak7FyQgvhYgkhxQg2ipAAi+QBzhNCog2QCpg2DAAAQBAAAA8AGQAvBYAkBxQA2CoAAC/IgBAAQhyBNipA2QipA2i/AAQg/AAg9gGg");
	var mask_3_graphics_28 = new cjs.Graphics().p("AlJF5Qguhcgjh1Qg1iuAAjDQB5hLCug1QCug0DFAAQBBgBA+AGQAtBdAkBzQA1CuAADEIgBAAQh5BLiuA1QiuA1jEAAQhBAAg+gGg");
	var mask_3_graphics_29 = new cjs.Graphics().p("AlXGAQgshhgjh4QgziygBjJQCAhJCygzQC0g0DKAAQBCAABAAGQAsBgAjB4QA0CyAADJIgBAAQiABIizA0QizA0jJAAQhCAAhAgFg");
	var mask_3_graphics_30 = new cjs.Graphics().p("AllGGQgrhlgih7Qgyi3AAjNQCGhIC4gzQC4gyDOAAQBEAABCAGQArBkAiB7QAyC4AADNIAAAAQiGBHi5AzQi4AyjOAAQhDABhCgGg");
	var mask_3_graphics_31 = new cjs.Graphics().p("AlzGNQgphpgih+Qgxi9AAjSQCMhGC+gxQC+gxDSAAQBFAABEAGQAqBoAgB+QAyC9AADSIAAAAQiNBGi9AxQi+AxjSAAQhFAAhEgFg");
	var mask_3_graphics_32 = new cjs.Graphics().p("AmBGTQgphsggiCQgwjCABjXQCShEDCgwQDDgvDXAAQBIAABFAFQApBsAfCCQAxDCgBDXIAAAAQiTBDjDAwQjCAwjXAAQhHAAhFgFg");
	var mask_3_graphics_33 = new cjs.Graphics().p("AmOGaQgohxggiFQgujHAAjcQCZhBDHgvQDIgvDcAAQBJAABHAFQAnBwAgCGQAuDHAADbIAAAAQiZBCjIAvQjIAvjcAAQhIAAhGgFg");
	var mask_3_graphics_34 = new cjs.Graphics().p("AmcGgQgnh0gfiJQgtjMAAjgQCfhADNguQDNgtDhAAQBKAABIAFQAnB0AeCIQAuDNAADgIgBAAQifBAjNAtQjNAujgAAQhKAAhIgFg");
	var mask_3_graphics_35 = new cjs.Graphics().p("AmqGnQgmh4geiNQgsjRAAjlQCmg+DRgtQDTgsDmAAQBMAABJAFQAmB4AdCMQAtDSAADlIgBAAQimA+jSAsQjSAtjlAAQhLAAhKgFg");
	var mask_3_graphics_36 = new cjs.Graphics().p("Am4GtQglh7gdiRQgqjWAAjpQCrg9DXgrQDYgrDqAAQBOAABLAFQAlB7AcCQQArDXABDpIgBAAQitA9jXArQjXArjqAAQhNAAhLgFg");
	var mask_3_graphics_37 = new cjs.Graphics().p("AnGG0QgjiAgdiUQgpjbAAjuQCyg7DcgqQDdgpDvAAQBPgBBNAFQAjCAAcCTQAqDcAADuIgBAAQiyA7jdAqQjcAqjuAAQhPAAhNgFg");
	var mask_3_graphics_38 = new cjs.Graphics().p("AnUG7QgiiEgciYQgojgAAjzQC5g5DhgpQDigoD0AAQBQAABOAFQAjCDAbCXQApDhAADyIgBAAQi5A6jiAoQjhApjzAAQhQAAhPgEg");
	var mask_3_graphics_39 = new cjs.Graphics().p("AnhHBQgiiIgaiaQgojmAAj4QDAg3DmgnQDngoD4AAQBSABBRAEQAhCIAaCZQAoDnAAD3IgBAAQi/A3jnAoQjnAnj4AAQhRABhQgFg");
	var mask_3_graphics_40 = new cjs.Graphics().p("AnvHIQghiMgZieQgmjrAAj8QDFg2DsgmQDsgmD9AAQBUAABRAEQAhCMAZCdQAmDsAAD8IgBAAQjGA1jrAnQjsAmj8AAQhUAAhRgEg");
	var mask_3_graphics_41 = new cjs.Graphics().p("An9HPQggiQgZihQgkjxAAkAQDLg0DxglQDyglECAAQBVgBBTAFQAfCQAZChQAlDwAAEBIgBAAQjMA0jxAkQjxAlkBAAQhVABhTgEg");
	var mask_3_graphics_42 = new cjs.Graphics().p("AoKHWQggiVgXikQgkj2AAkFQDSgzD2gjQD3gkEGAAQBXAABVAEQAeCUAYCkQAkD2AAEGIgBAAQjTAyj2AjQj2AkkGAAQhWAAhUgDg");
	var mask_3_graphics_43 = new cjs.Graphics().p("AoYHcQgeiYgXioQgjj7AAkKQDZgxD7giQD8gjELAAQBYABBXAEQAdCXAXCoQAjD7AAEKIgBAAQjZAwj8AjQj7AikLAAQhXAAhWgDg");
	var mask_3_graphics_44 = new cjs.Graphics().p("AomHiQgcicgXirQghkAAAkPQDeguEBghQEBgiEQAAQBZAABZAEQAcCcAWCrQAhEAAAEOIAAAAQjgAwkAAgQkBAikPAAQhaAAhXgEg");
	var mask_3_graphics_45 = new cjs.Graphics().p("Ao0HpQgciggVivQggkFAAkTQDlgtEGggQEGggEVAAQBbAABaAEQAaCfAWCvQAgEFAAETIgBAAQjlAukHAfQkFAgkUAAQhbAAhZgDg");
	var mask_3_graphics_46 = new cjs.Graphics().p("ApCHwQgaikgViyQgfkLAAkYQDsgrEKgfQEMgfEZAAQBdAABbAEQAbCkAUCyQAfEKAAEYIgBAAQjsArkLAfQkLAfkZAAQhcAAhbgDg");
	var mask_3_graphics_47 = new cjs.Graphics().p("ApQH2QgZiogUi1QgekQAAkcQDygqEQgeQERgdEeAAQBeAABdADQAZCoAUC1QAeEQAAEdIgCAAQjyApkQAeQkQAdkdAAQheAAhdgDg");
	var mask_3_graphics_48 = new cjs.Graphics().p("ApdH9QgZisgTi5QgdkVABkhQD4goEVgcQEWgdEiAAQBhAABeAEQAYCrATC5QAdEVAAEhIgCAAQj5AokVAcQkVAdkiAAQhfAAhegDg");
	var mask_3_graphics_49 = new cjs.Graphics().p("AprIDQgYiwgSi8QgbkaAAkmQD/gmEagbQEbgbEnAAQBiAABgADQAWCwATC8QAbEaAAEmIgCAAQj/AmkaAbQkbAbkmAAQhhAAhfgDg");
	var mask_3_graphics_50 = new cjs.Graphics().p("Ap5IKQgXi0gRi/QgakfAAksQEFgkEfgZQEhgaEsAAQBjAABiACQAWC0ARDAQAaEfAAEqIgCAAQkFAlkgAaQkfAakrgBQhjABhhgDg");
	var mask_3_graphics_51 = new cjs.Graphics().p("AqHIRQgWi5gQjCQgZklAAkvQEMgjElgYQElgZEwAAQBlAABjADQAWC3AQDDQAZElgBEvIgBAAQkMAjkkAYQklAZkwAAQhkAAhjgCg");
	var mask_3_graphics_52 = new cjs.Graphics().p("AqVIXQgUi8gQjGQgXkpAAk1QESghEpgXQErgYE1AAQBmABBlADQAUC7AQDHQAXEpAAE0IgBAAQkSAhkqAXQkqAYk1AAQhlgBhlgCg");
	var mask_3_graphics_53 = new cjs.Graphics().p("AqjIdQgTi/gPjKQgWkvAAk5QEYgfEvgWQEwgWE6AAQBnAABnACQATDAAPDKQAWEvAAE4IgBAAQkZAgkvAVQkvAXk6AAQhnAAhmgDg");
	var mask_3_graphics_54 = new cjs.Graphics().p("AqxIkQgSjEgOjNQgVk0AAk9QEfgeEzgUQE2gWE+AAQBqABBoACQASDDAODOQAVEzAAE+IgCAAQkfAek0AUQk0AWk+AAQhpAAhogDg");
	var mask_3_graphics_55 = new cjs.Graphics().p("Aq+IrQgRjIgOjRQgUk5AAlCQElgbE6gUQE5gUFEAAQBrAABpADQARDHANDRQAVE5AAFCIgCAAQkmAck5ATQk6AUlCAAQhqAAhpgCg");
	var mask_3_graphics_56 = new cjs.Graphics().p("ArMIxQgQjLgNjVQgSk+AAlGQErgaE+gTQFAgSFIAAQBsAABsACQAPDMANDUQASE+AAFGIgBAAQksAak+ATQk/ASlIAAQhrAAhrgCg");
	var mask_3_graphics_57 = new cjs.Graphics().p("AraI4QgPjQgMjYQgRlDAAlLQEygYFDgRQFFgSFMAAQBuAABtACQAPDQALDYQASFDAAFLIgCAAQkyAYlDARQlEASlMAAQhuAAhsgCg");
	var mask_3_graphics_58 = new cjs.Graphics().p("AroI+QgOjTgKjbQgRlJABlQQE4gWFIgQQFJgQFSAAQBvAABvACQAODTALDbQAPFJAAFQIgBAAQk4AWlJAQQlJAQlRAAQhvAAhugCg");
	var mask_3_graphics_59 = new cjs.Graphics().p("Ar2JFQgNjYgJjeQgPlOAAlUQE+gVFOgPQFPgPFWAAQBxAABwACQANDYAKDeQAOFOAAFUIgBAAQk/AVlOAPQlOAPlWAAQhwAAhwgCg");
	var mask_3_graphics_60 = new cjs.Graphics().p("AsDJMQgMjcgKjiQgNlTAAlZQFFgTFTgNQFUgOFaAAQBzAAByABQALDdAKDhQANFTAAFZIgCAAQlFATlTANQlTAOlaAAQhyAAhxgBg");
	var mask_3_graphics_61 = new cjs.Graphics().p("AsSJTQgKjhgJjlQgMlYAAleQFLgRFYgMQFZgNFgAAQB0AABzACQALDgAIDlQANFYAAFdIgCAAQlMASlYAMQlZANleAAIjngBg");
	var mask_3_graphics_62 = new cjs.Graphics().p("AsfJZQgKjkgHjpQgLldAAliQFRgQFdgLQFegLFlAAQB2AAB1ABQAJDkAHDoQAMFeAAFiIgCAAQlSAQleALQldALlkAAIjpgBg");
	var mask_3_graphics_63 = new cjs.Graphics().p("AstJfQgJjngGjtQgKlhAAloQFYgOFigKQFkgJFpgBIDtABQAJDpAGDrQAKFjAAFnIgCAAQlYAOliAJQljAKloAAIjtgBg");
	var mask_3_graphics_64 = new cjs.Graphics().p("As7JmQgIjsgFjvQgJlnAAlsQFegMFogJQFogJFvAAIDwABIAOHbQAIFoAAFsIgCAAQleAMloAIQlpAJlsAAIjwgBg");
	var mask_3_graphics_65 = new cjs.Graphics().p("AtJJtQgHjwgFjzQgHltAAlwQFlgKFsgIQFugHFzAAID0ABIALHiQAIFtgBFwIgBAAQlmALlsAHQluAHlxAAIjzAAg");
	var mask_3_graphics_66 = new cjs.Graphics().p("AtXJzQgFjzgEj3QgGlyAAl1QFrgIFxgHQF0gGF3AAID3ABQAFD0AED2QAGFyAAF1IgBAAQlsAIlyAHQlyAGl3AAIj2gBg");
	var mask_3_graphics_67 = new cjs.Graphics().p("AtkJ6QgFj4gDj6QgFl3AAl5QFxgHF3gFQF5gFF7AAID7AAIAIHyQAEF3AAF5IgCAAQlxAHl4AFQl3AFl7AAIj5AAg");
	var mask_3_graphics_68 = new cjs.Graphics().p("AtyKAIgGn5QgEl8AAl+IL0gJQF+gEGAAAID9ABIAGH4QAEF8AAF/IgCAAQl4AFl8AEQl9AEmAAAIj8gBg");
	var mask_3_graphics_69 = new cjs.Graphics().p("AuAKHIgFoAQgCmBAAmEIL/gGQGEgCGFAAIEAAAIAEIBQACGBABGDIgCAAQmAADmBADQmCACmEAAIj/AAg");
	var mask_3_graphics_70 = new cjs.Graphics().p("AuOKOIgCoIIgBsOIMKgDIMSgCIEEAAIACIIQABGHAAGHIgCAAIsLAEIsQABIkDAAg");
	var mask_3_graphics_71 = new cjs.Graphics().p("AucKUIAA0nIc5AAIAAUng");
	var mask_3_graphics_72 = new cjs.Graphics().p("AuoKeIAA07IdRAAIAAU7g");
	var mask_3_graphics_73 = new cjs.Graphics().p("Au1KoIAA1PIdrAAIAAVPg");
	var mask_3_graphics_74 = new cjs.Graphics().p("AvBKyIAA1jIeDAAIAAVjg");
	var mask_3_graphics_75 = new cjs.Graphics().p("AvNK8IAA13IebAAIAAV3g");
	var mask_3_graphics_76 = new cjs.Graphics().p("AvaLHIAA2NIe1AAIAAWNg");
	var mask_3_graphics_77 = new cjs.Graphics().p("AvmLRIAA2hIfNAAIAAWhg");
	var mask_3_graphics_78 = new cjs.Graphics().p("AvzLbIAA21IfnAAIAAW1g");
	var mask_3_graphics_79 = new cjs.Graphics().p("Av/LlIAA3JIf/AAIAAXJg");
	var mask_3_graphics_80 = new cjs.Graphics().p("AwLLvIAA3dMAgXAAAIAAXdg");
	var mask_3_graphics_81 = new cjs.Graphics().p("AwXL5IAA3xMAgwAAAIAAXxg");
	var mask_3_graphics_82 = new cjs.Graphics().p("AwkMDIAA4FMAhJAAAIAAYFg");
	var mask_3_graphics_83 = new cjs.Graphics().p("AwwMNIAA4ZMAhhAAAIAAYZg");
	var mask_3_graphics_84 = new cjs.Graphics().p("Aw8MXIAA4tMAh5AAAIAAYtg");
	var mask_3_graphics_85 = new cjs.Graphics().p("AxJMhIAA5BMAiTAAAIAAZBg");
	var mask_3_graphics_86 = new cjs.Graphics().p("AxVMrIAA5VMAirAAAIAAZVg");
	var mask_3_graphics_87 = new cjs.Graphics().p("AxhM2IAA5rMAjDAAAIAAZrg");
	var mask_3_graphics_88 = new cjs.Graphics().p("AxuNAIAA5+MAjdAAAIAAZ+g");
	var mask_3_graphics_89 = new cjs.Graphics().p("Ax6NKIAA6TMAj1AAAIAAaTg");
	var mask_3_graphics_90 = new cjs.Graphics().p("AyHNUIAA6nMAkPAAAIAAang");
	var mask_3_graphics_91 = new cjs.Graphics().p("AyTNeIAA67MAknAAAIAAa7g");
	var mask_3_graphics_92 = new cjs.Graphics().p("AyfNoIAA7PMAk/AAAIAAbPg");
	var mask_3_graphics_93 = new cjs.Graphics().p("AyrNyIAA7jMAlYAAAIAAbjg");
	var mask_3_graphics_94 = new cjs.Graphics().p("Ay4N8IAA73MAlxAAAIAAb3g");
	var mask_3_graphics_95 = new cjs.Graphics().p("AzEOGIAA8LMAmJAAAIAAcLg");
	var mask_3_graphics_96 = new cjs.Graphics().p("AzROQIAA8fMAmiAAAIAAcfg");
	var mask_3_graphics_97 = new cjs.Graphics().p("AzdObIAA80MAm7AAAIAAc0g");
	var mask_3_graphics_98 = new cjs.Graphics().p("AzpOkIAA9IMAnTAAAIAAdIg");
	var mask_3_graphics_99 = new cjs.Graphics().p("Az2OuIAA9bMAntAAAIAAdbg");
	var mask_3_graphics_100 = new cjs.Graphics().p("A0CO5IAA9wMAoFAAAIAAdwg");
	var mask_3_graphics_101 = new cjs.Graphics().p("A0OPDIAA+FMAodAAAIAAeFg");
	var mask_3_graphics_102 = new cjs.Graphics().p("A0aPNIAA+ZMAo1AAAIAAeZg");
	var mask_3_graphics_103 = new cjs.Graphics().p("A0nPXIAA+tMApPAAAIAAetg");
	var mask_3_graphics_104 = new cjs.Graphics().p("A0zPhIAA/BMApnAAAIAAfBg");
	var mask_3_graphics_105 = new cjs.Graphics().p("A1APrIAA/VMAqBAAAIAAfVg");
	var mask_3_graphics_106 = new cjs.Graphics().p("A1MP1IAA/pMAqZAAAIAAfpg");
	var mask_3_graphics_107 = new cjs.Graphics().p("A1YP/IAA/9MAqxAAAIAAf9g");
	var mask_3_graphics_108 = new cjs.Graphics().p("A1lQJMAAAggRMArKAAAMAAAAgRg");
	var mask_3_graphics_109 = new cjs.Graphics().p("A1xQUMAAAggmMArjAAAMAAAAgmg");
	var mask_3_graphics_110 = new cjs.Graphics().p("A19QeMAAAgg7MAr7AAAMAAAAg7g");
	var mask_3_graphics_111 = new cjs.Graphics().p("A2KQoMAAAghPMAsVAAAMAAAAhPg");
	var mask_3_graphics_112 = new cjs.Graphics().p("A2WQyMAAAghjMAstAAAMAAAAhjg");
	var mask_3_graphics_113 = new cjs.Graphics().p("A2hQ8MAAAgh3MAtDAAAMAAAAh3g");
	var mask_3_graphics_114 = new cjs.Graphics().p("A2tRGMAAAgiLMAtbAAAMAAAAiLg");
	var mask_3_graphics_115 = new cjs.Graphics().p("A24RQMAAAgifMAtxAAAMAAAAifg");
	var mask_3_graphics_116 = new cjs.Graphics().p("A3ERaMAAAgizMAuJAAAMAAAAizg");
	var mask_3_graphics_117 = new cjs.Graphics().p("A3QRkMAAAgjHMAuhAAAMAAAAjHg");
	var mask_3_graphics_118 = new cjs.Graphics().p("A3bRuMAAAgjbMAu3AAAMAAAAjbg");
	var mask_3_graphics_119 = new cjs.Graphics().p("A3mR4MAAAgjvMAvOAAAMAAAAjvg");
	var mask_3_graphics_120 = new cjs.Graphics().p("A3ySDMAAAgkFMAvlAAAMAAAAkFg");
	var mask_3_graphics_121 = new cjs.Graphics().p("A3+SNMAAAgkZMAv8AAAMAAAAkZg");
	var mask_3_graphics_122 = new cjs.Graphics().p("A4JSXMAAAgktMAwTAAAMAAAAktg");
	var mask_3_graphics_123 = new cjs.Graphics().p("A4UShMAAAglBMAwpAAAMAAAAlBg");
	var mask_3_graphics_124 = new cjs.Graphics().p("A4gSrMAAAglVMAxBAAAMAAAAlVg");
	var mask_3_graphics_125 = new cjs.Graphics().p("A4rS1MAAAglpMAxXAAAMAAAAlpg");
	var mask_3_graphics_126 = new cjs.Graphics().p("A42S/MAAAgl9MAxtAAAMAAAAl9g");
	var mask_3_graphics_127 = new cjs.Graphics().p("A5CTJMAAAgmRMAyFAAAMAAAAmRg");
	var mask_3_graphics_128 = new cjs.Graphics().p("A5OTTMAAAgmlMAydAAAMAAAAmlg");
	var mask_3_graphics_129 = new cjs.Graphics().p("A5ZTeMAAAgm7MAyzAAAMAAAAm7g");
	var mask_3_graphics_130 = new cjs.Graphics().p("A5lToMAAAgnOMAzKAAAMAAAAnOg");
	var mask_3_graphics_131 = new cjs.Graphics().p("A5wTxMAAAgniMAzhAAAMAAAAnig");
	var mask_3_graphics_132 = new cjs.Graphics().p("A57T8MAAAgn3MAz4AAAMAAAAn3g");
	var mask_3_graphics_133 = new cjs.Graphics().p("A6HUGMAAAgoLMA0PAAAMAAAAoLg");
	var mask_3_graphics_134 = new cjs.Graphics().p("A6TUQMAAAgofMA0mAAAMAAAAofg");
	var mask_3_graphics_135 = new cjs.Graphics().p("A6eUaMAAAgozMA09AAAMAAAAozg");
	var mask_3_graphics_136 = new cjs.Graphics().p("A6pUkMAAAgpHMA1TAAAMAAAApHg");
	var mask_3_graphics_137 = new cjs.Graphics().p("A61UuMAAAgpbMA1rAAAMAAAApbg");
	var mask_3_graphics_138 = new cjs.Graphics().p("A7AU4MAAAgpvMA2BAAAMAAAApvg");
	var mask_3_graphics_139 = new cjs.Graphics().p("A7MVDMAAAgqFMA2ZAAAMAAAAqFg");
	var mask_3_graphics_140 = new cjs.Graphics().p("A7XVMMAAAgqXMA2vAAAMAAAAqXg");
	var mask_3_graphics_141 = new cjs.Graphics().p("A7jVWMAAAgqsMA3HAAAMAAAAqsg");
	var mask_3_graphics_142 = new cjs.Graphics().p("A7uVhMAAAgrBMA3dAAAMAAAArBg");
	var mask_3_graphics_143 = new cjs.Graphics().p("A76VrMAAAgrVMA31AAAMAAAArVg");
	var mask_3_graphics_144 = new cjs.Graphics().p("A8FV1MAAAgrpMA4LAAAMAAAArpg");
	var mask_3_graphics_145 = new cjs.Graphics().p("A8RV/MAAAgr9MA4jAAAMAAAAr9g");
	var mask_3_graphics_146 = new cjs.Graphics().p("A8cWJMAAAgsRMA45AAAMAAAAsRg");
	var mask_3_graphics_147 = new cjs.Graphics().p("A8oWTMAAAgslMA5RAAAMAAAAslg");
	var mask_3_graphics_148 = new cjs.Graphics().p("A8zWdMAAAgs5MA5nAAAMAAAAs5g");
	var mask_3_graphics_149 = new cjs.Graphics().p("A8+WnMAAAgtNMA5+AAAMAAAAtNg");
	var mask_3_graphics_150 = new cjs.Graphics().p("A9KWxMAAAgthMA6VAAAMAAAAthg");
	var mask_3_graphics_151 = new cjs.Graphics().p("A9WW8MAAAgt3MA6sAAAMAAAAt3g");
	var mask_3_graphics_152 = new cjs.Graphics().p("A9hXGMAAAguLMA7DAAAMAAAAuLg");
	var mask_3_graphics_153 = new cjs.Graphics().p("EgaeAklMAAAgufMA7aAAAMAAAAufg");
	var mask_3_graphics_154 = new cjs.Graphics().p("EgfbAkmMAAAgmKMBFTAAAMAAAAmKg");
	var mask_3_graphics_155 = new cjs.Graphics().p("EgipATSMAAAgmjMBFTAAAMAAAAmjg");
	var mask_3_graphics_156 = new cjs.Graphics().p("EgipATfMAAAgm8MBFTAAAMAAAAm8g");
	var mask_3_graphics_157 = new cjs.Graphics().p("EgipATrMAAAgnVMBFTAAAMAAAAnVg");
	var mask_3_graphics_158 = new cjs.Graphics().p("EgipAT3MAAAgntMBFTAAAMAAAAntg");
	var mask_3_graphics_159 = new cjs.Graphics().p("EgipAUEMAAAgoHMBFTAAAMAAAAoHg");
	var mask_3_graphics_160 = new cjs.Graphics().p("EgipAUQMAAAgofMBFTAAAMAAAAofg");
	var mask_3_graphics_161 = new cjs.Graphics().p("EgipAUdMAAAgo5MBFTAAAMAAAAo5g");
	var mask_3_graphics_162 = new cjs.Graphics().p("EgipAUpMAAAgpRMBFTAAAMAAAApRg");
	var mask_3_graphics_163 = new cjs.Graphics().p("EgipAU2MAAAgprMBFTAAAMAAAAprg");
	var mask_3_graphics_164 = new cjs.Graphics().p("EgipAVCMAAAgqDMBFTAAAMAAAAqDg");
	var mask_3_graphics_165 = new cjs.Graphics().p("EgipAVPMAAAgqcMBFTAAAMAAAAqcg");
	var mask_3_graphics_166 = new cjs.Graphics().p("EgipAVbMAAAgq1MBFTAAAMAAAAq1g");
	var mask_3_graphics_167 = new cjs.Graphics().p("EgipAVoMAAAgrPMBFTAAAMAAAArPg");
	var mask_3_graphics_168 = new cjs.Graphics().p("EgipAV0MAAAgrnMBFTAAAMAAAArng");
	var mask_3_graphics_169 = new cjs.Graphics().p("EgipAWBMAAAgsAMBFTAAAMAAAAsAg");
	var mask_3_graphics_170 = new cjs.Graphics().p("EgipAWNMAAAgsZMBFTAAAMAAAAsZg");
	var mask_3_graphics_171 = new cjs.Graphics().p("EgipAWaMAAAgsyMBFTAAAMAAAAsyg");
	var mask_3_graphics_172 = new cjs.Graphics().p("EgipAWmMAAAgtLMBFTAAAMAAAAtLg");
	var mask_3_graphics_173 = new cjs.Graphics().p("EgipAWyMAAAgtjMBFTAAAMAAAAtjg");
	var mask_3_graphics_174 = new cjs.Graphics().p("EgipAW/MAAAgt9MBFTAAAMAAAAt9g");
	var mask_3_graphics_175 = new cjs.Graphics().p("EgipAXLMAAAguVMBFTAAAMAAAAuVg");
	var mask_3_graphics_176 = new cjs.Graphics().p("EgipAXYMAAAguvMBFTAAAMAAAAuvg");
	var mask_3_graphics_177 = new cjs.Graphics().p("EgipAXkMAAAgvHMBFTAAAMAAAAvHg");
	var mask_3_graphics_178 = new cjs.Graphics().p("EgipAXxMAAAgvhMBFTAAAMAAAAvhg");
	var mask_3_graphics_179 = new cjs.Graphics().p("EgipAX9MAAAgv5MBFTAAAMAAAAv5g");
	var mask_3_graphics_180 = new cjs.Graphics().p("EgipAYKMAAAgwTMBFTAAAMAAAAwTg");
	var mask_3_graphics_181 = new cjs.Graphics().p("EgipAYWMAAAgwrMBFTAAAMAAAAwrg");
	var mask_3_graphics_182 = new cjs.Graphics().p("EgipAYjMAAAgxEMBFTAAAMAAAAxEg");
	var mask_3_graphics_183 = new cjs.Graphics().p("EgipAYvMAAAgxdMBFTAAAMAAAAxdg");
	var mask_3_graphics_184 = new cjs.Graphics().p("EgipAY8MAAAgx3MBFTAAAMAAAAx3g");
	var mask_3_graphics_185 = new cjs.Graphics().p("EgipAZIMAAAgyPMBFTAAAMAAAAyPg");
	var mask_3_graphics_186 = new cjs.Graphics().p("EgipAZUMAAAgynMBFTAAAMAAAAyng");
	var mask_3_graphics_187 = new cjs.Graphics().p("EgipAZhMAAAgzBMBFTAAAMAAAAzBg");
	var mask_3_graphics_188 = new cjs.Graphics().p("EgipAZtMAAAgzZMBFTAAAMAAAAzZg");
	var mask_3_graphics_189 = new cjs.Graphics().p("EgipAZ6MAAAgzzMBFTAAAMAAAAzzg");
	var mask_3_graphics_190 = new cjs.Graphics().p("EgipAaHMAAAg0NMBFTAAAMAAAA0Ng");
	var mask_3_graphics_191 = new cjs.Graphics().p("EgipAaVMAAAg0pMBFTAAAMAAAA0pg");
	var mask_3_graphics_192 = new cjs.Graphics().p("EgipAajMAAAg1FMBFTAAAMAAAA1Fg");
	var mask_3_graphics_193 = new cjs.Graphics().p("EgipAawMAAAg1fMBFTAAAMAAAA1fg");
	var mask_3_graphics_194 = new cjs.Graphics().p("EgipAa9MAAAg15MBFTAAAMAAAA15g");
	var mask_3_graphics_195 = new cjs.Graphics().p("EgipAbLMAAAg2VMBFTAAAMAAAA2Vg");
	var mask_3_graphics_196 = new cjs.Graphics().p("EgipAbZMAAAg2xMBFTAAAMAAAA2xg");
	var mask_3_graphics_197 = new cjs.Graphics().p("EgipAbmMAAAg3LMBFTAAAMAAAA3Lg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_3_graphics_9,x:37.8,y:232.5}).wait(1).to({graphics:mask_3_graphics_10,x:51,y:438.1}).wait(1).to({graphics:mask_3_graphics_11,x:52.4,y:437.3}).wait(1).to({graphics:mask_3_graphics_12,x:53.8,y:436.5}).wait(1).to({graphics:mask_3_graphics_13,x:55.2,y:435.7}).wait(1).to({graphics:mask_3_graphics_14,x:56.6,y:434.9}).wait(1).to({graphics:mask_3_graphics_15,x:58,y:434.1}).wait(1).to({graphics:mask_3_graphics_16,x:59.4,y:433.3}).wait(1).to({graphics:mask_3_graphics_17,x:60.7,y:432.5}).wait(1).to({graphics:mask_3_graphics_18,x:62.1,y:431.7}).wait(1).to({graphics:mask_3_graphics_19,x:63.5,y:430.9}).wait(1).to({graphics:mask_3_graphics_20,x:64.9,y:430.1}).wait(1).to({graphics:mask_3_graphics_21,x:66.3,y:429.2}).wait(1).to({graphics:mask_3_graphics_22,x:67.7,y:428.4}).wait(1).to({graphics:mask_3_graphics_23,x:69,y:427.6}).wait(1).to({graphics:mask_3_graphics_24,x:70.4,y:426.8}).wait(1).to({graphics:mask_3_graphics_25,x:71.8,y:426}).wait(1).to({graphics:mask_3_graphics_26,x:73.2,y:425.2}).wait(1).to({graphics:mask_3_graphics_27,x:74.6,y:424.4}).wait(1).to({graphics:mask_3_graphics_28,x:76,y:423.6}).wait(1).to({graphics:mask_3_graphics_29,x:77.4,y:422.8}).wait(1).to({graphics:mask_3_graphics_30,x:78.7,y:422}).wait(1).to({graphics:mask_3_graphics_31,x:80.1,y:421.2}).wait(1).to({graphics:mask_3_graphics_32,x:81.5,y:420.4}).wait(1).to({graphics:mask_3_graphics_33,x:82.9,y:419.6}).wait(1).to({graphics:mask_3_graphics_34,x:84.3,y:418.8}).wait(1).to({graphics:mask_3_graphics_35,x:85.7,y:418}).wait(1).to({graphics:mask_3_graphics_36,x:87.1,y:417.2}).wait(1).to({graphics:mask_3_graphics_37,x:88.4,y:416.4}).wait(1).to({graphics:mask_3_graphics_38,x:89.8,y:415.6}).wait(1).to({graphics:mask_3_graphics_39,x:91.2,y:414.8}).wait(1).to({graphics:mask_3_graphics_40,x:92.6,y:414}).wait(1).to({graphics:mask_3_graphics_41,x:94,y:413.1}).wait(1).to({graphics:mask_3_graphics_42,x:95.4,y:412.3}).wait(1).to({graphics:mask_3_graphics_43,x:96.7,y:411.5}).wait(1).to({graphics:mask_3_graphics_44,x:98.1,y:410.7}).wait(1).to({graphics:mask_3_graphics_45,x:99.5,y:409.9}).wait(1).to({graphics:mask_3_graphics_46,x:100.9,y:409.1}).wait(1).to({graphics:mask_3_graphics_47,x:102.3,y:408.3}).wait(1).to({graphics:mask_3_graphics_48,x:103.7,y:407.5}).wait(1).to({graphics:mask_3_graphics_49,x:105.1,y:406.7}).wait(1).to({graphics:mask_3_graphics_50,x:106.4,y:405.9}).wait(1).to({graphics:mask_3_graphics_51,x:107.8,y:405.1}).wait(1).to({graphics:mask_3_graphics_52,x:109.2,y:404.3}).wait(1).to({graphics:mask_3_graphics_53,x:110.6,y:403.5}).wait(1).to({graphics:mask_3_graphics_54,x:112,y:402.7}).wait(1).to({graphics:mask_3_graphics_55,x:113.4,y:401.8}).wait(1).to({graphics:mask_3_graphics_56,x:114.7,y:401}).wait(1).to({graphics:mask_3_graphics_57,x:116.1,y:400.2}).wait(1).to({graphics:mask_3_graphics_58,x:117.5,y:399.4}).wait(1).to({graphics:mask_3_graphics_59,x:118.9,y:398.6}).wait(1).to({graphics:mask_3_graphics_60,x:120.3,y:397.8}).wait(1).to({graphics:mask_3_graphics_61,x:121.7,y:397}).wait(1).to({graphics:mask_3_graphics_62,x:123.1,y:396.2}).wait(1).to({graphics:mask_3_graphics_63,x:124.4,y:395.4}).wait(1).to({graphics:mask_3_graphics_64,x:125.8,y:394.6}).wait(1).to({graphics:mask_3_graphics_65,x:127.2,y:393.8}).wait(1).to({graphics:mask_3_graphics_66,x:128.6,y:393}).wait(1).to({graphics:mask_3_graphics_67,x:130,y:392.2}).wait(1).to({graphics:mask_3_graphics_68,x:131.4,y:391.4}).wait(1).to({graphics:mask_3_graphics_69,x:132.8,y:390.6}).wait(1).to({graphics:mask_3_graphics_70,x:134.1,y:389.8}).wait(1).to({graphics:mask_3_graphics_71,x:135.5,y:389}).wait(1).to({graphics:mask_3_graphics_72,x:136.7,y:388.1}).wait(1).to({graphics:mask_3_graphics_73,x:137.9,y:387.3}).wait(1).to({graphics:mask_3_graphics_74,x:139.2,y:386.4}).wait(1).to({graphics:mask_3_graphics_75,x:140.4,y:385.6}).wait(1).to({graphics:mask_3_graphics_76,x:141.6,y:384.7}).wait(1).to({graphics:mask_3_graphics_77,x:142.8,y:383.9}).wait(1).to({graphics:mask_3_graphics_78,x:144,y:383}).wait(1).to({graphics:mask_3_graphics_79,x:145.2,y:382.2}).wait(1).to({graphics:mask_3_graphics_80,x:146.4,y:381.3}).wait(1).to({graphics:mask_3_graphics_81,x:147.7,y:380.5}).wait(1).to({graphics:mask_3_graphics_82,x:148.8,y:379.6}).wait(1).to({graphics:mask_3_graphics_83,x:150.1,y:378.8}).wait(1).to({graphics:mask_3_graphics_84,x:151.3,y:377.9}).wait(1).to({graphics:mask_3_graphics_85,x:152.5,y:377.1}).wait(1).to({graphics:mask_3_graphics_86,x:153.7,y:376.2}).wait(1).to({graphics:mask_3_graphics_87,x:154.9,y:375.4}).wait(1).to({graphics:mask_3_graphics_88,x:156.1,y:374.6}).wait(1).to({graphics:mask_3_graphics_89,x:157.4,y:373.7}).wait(1).to({graphics:mask_3_graphics_90,x:158.6,y:372.8}).wait(1).to({graphics:mask_3_graphics_91,x:159.8,y:372}).wait(1).to({graphics:mask_3_graphics_92,x:161,y:371.2}).wait(1).to({graphics:mask_3_graphics_93,x:162.2,y:370.3}).wait(1).to({graphics:mask_3_graphics_94,x:163.4,y:369.5}).wait(1).to({graphics:mask_3_graphics_95,x:164.6,y:368.6}).wait(1).to({graphics:mask_3_graphics_96,x:165.9,y:367.7}).wait(1).to({graphics:mask_3_graphics_97,x:167.1,y:366.9}).wait(1).to({graphics:mask_3_graphics_98,x:168.3,y:366.1}).wait(1).to({graphics:mask_3_graphics_99,x:169.5,y:365.2}).wait(1).to({graphics:mask_3_graphics_100,x:170.7,y:364.4}).wait(1).to({graphics:mask_3_graphics_101,x:171.9,y:363.5}).wait(1).to({graphics:mask_3_graphics_102,x:173.1,y:362.7}).wait(1).to({graphics:mask_3_graphics_103,x:174.3,y:361.8}).wait(1).to({graphics:mask_3_graphics_104,x:175.5,y:361}).wait(1).to({graphics:mask_3_graphics_105,x:176.8,y:360.1}).wait(1).to({graphics:mask_3_graphics_106,x:178,y:359.3}).wait(1).to({graphics:mask_3_graphics_107,x:179.2,y:358.4}).wait(1).to({graphics:mask_3_graphics_108,x:180.4,y:357.6}).wait(1).to({graphics:mask_3_graphics_109,x:181.6,y:356.7}).wait(1).to({graphics:mask_3_graphics_110,x:182.8,y:355.9}).wait(1).to({graphics:mask_3_graphics_111,x:184,y:355}).wait(1).to({graphics:mask_3_graphics_112,x:185.3,y:354.2}).wait(1).to({graphics:mask_3_graphics_113,x:186.4,y:353.3}).wait(1).to({graphics:mask_3_graphics_114,x:187.5,y:352.5}).wait(1).to({graphics:mask_3_graphics_115,x:188.7,y:351.6}).wait(1).to({graphics:mask_3_graphics_116,x:189.8,y:350.8}).wait(1).to({graphics:mask_3_graphics_117,x:190.9,y:349.9}).wait(1).to({graphics:mask_3_graphics_118,x:192,y:349.1}).wait(1).to({graphics:mask_3_graphics_119,x:193.2,y:348.3}).wait(1).to({graphics:mask_3_graphics_120,x:194.3,y:347.4}).wait(1).to({graphics:mask_3_graphics_121,x:195.4,y:346.5}).wait(1).to({graphics:mask_3_graphics_122,x:196.5,y:345.7}).wait(1).to({graphics:mask_3_graphics_123,x:197.7,y:344.8}).wait(1).to({graphics:mask_3_graphics_124,x:198.8,y:344}).wait(1).to({graphics:mask_3_graphics_125,x:199.9,y:343.2}).wait(1).to({graphics:mask_3_graphics_126,x:201.1,y:342.3}).wait(1).to({graphics:mask_3_graphics_127,x:202.2,y:341.4}).wait(1).to({graphics:mask_3_graphics_128,x:203.3,y:340.6}).wait(1).to({graphics:mask_3_graphics_129,x:204.4,y:339.8}).wait(1).to({graphics:mask_3_graphics_130,x:205.6,y:338.9}).wait(1).to({graphics:mask_3_graphics_131,x:206.7,y:338.1}).wait(1).to({graphics:mask_3_graphics_132,x:207.8,y:337.2}).wait(1).to({graphics:mask_3_graphics_133,x:209,y:336.4}).wait(1).to({graphics:mask_3_graphics_134,x:210.1,y:335.5}).wait(1).to({graphics:mask_3_graphics_135,x:211.2,y:334.7}).wait(1).to({graphics:mask_3_graphics_136,x:212.3,y:333.8}).wait(1).to({graphics:mask_3_graphics_137,x:213.5,y:333}).wait(1).to({graphics:mask_3_graphics_138,x:214.6,y:332.1}).wait(1).to({graphics:mask_3_graphics_139,x:215.7,y:331.3}).wait(1).to({graphics:mask_3_graphics_140,x:216.8,y:330.4}).wait(1).to({graphics:mask_3_graphics_141,x:218,y:329.6}).wait(1).to({graphics:mask_3_graphics_142,x:219.1,y:328.7}).wait(1).to({graphics:mask_3_graphics_143,x:220.2,y:327.9}).wait(1).to({graphics:mask_3_graphics_144,x:221.4,y:327}).wait(1).to({graphics:mask_3_graphics_145,x:222.5,y:326.2}).wait(1).to({graphics:mask_3_graphics_146,x:223.6,y:325.3}).wait(1).to({graphics:mask_3_graphics_147,x:224.7,y:324.5}).wait(1).to({graphics:mask_3_graphics_148,x:225.9,y:323.6}).wait(1).to({graphics:mask_3_graphics_149,x:227,y:322.8}).wait(1).to({graphics:mask_3_graphics_150,x:228.1,y:321.9}).wait(1).to({graphics:mask_3_graphics_151,x:229.3,y:321.1}).wait(1).to({graphics:mask_3_graphics_152,x:230.4,y:320.2}).wait(1).to({graphics:mask_3_graphics_153,x:210.8,y:234.1}).wait(1).to({graphics:mask_3_graphics_154,x:242.4,y:234.2}).wait(1).to({graphics:mask_3_graphics_155,x:263,y:345.1}).wait(1).to({graphics:mask_3_graphics_156,x:263,y:343.9}).wait(1).to({graphics:mask_3_graphics_157,x:263,y:342.6}).wait(1).to({graphics:mask_3_graphics_158,x:263,y:341.4}).wait(1).to({graphics:mask_3_graphics_159,x:263,y:340.1}).wait(1).to({graphics:mask_3_graphics_160,x:263,y:338.9}).wait(1).to({graphics:mask_3_graphics_161,x:263,y:337.6}).wait(1).to({graphics:mask_3_graphics_162,x:263,y:336.4}).wait(1).to({graphics:mask_3_graphics_163,x:263,y:335.1}).wait(1).to({graphics:mask_3_graphics_164,x:263,y:333.9}).wait(1).to({graphics:mask_3_graphics_165,x:263,y:332.7}).wait(1).to({graphics:mask_3_graphics_166,x:263,y:331.4}).wait(1).to({graphics:mask_3_graphics_167,x:263,y:330.2}).wait(1).to({graphics:mask_3_graphics_168,x:263,y:328.9}).wait(1).to({graphics:mask_3_graphics_169,x:263,y:327.7}).wait(1).to({graphics:mask_3_graphics_170,x:263,y:326.4}).wait(1).to({graphics:mask_3_graphics_171,x:263,y:325.2}).wait(1).to({graphics:mask_3_graphics_172,x:263,y:323.9}).wait(1).to({graphics:mask_3_graphics_173,x:263,y:322.7}).wait(1).to({graphics:mask_3_graphics_174,x:263,y:321.4}).wait(1).to({graphics:mask_3_graphics_175,x:263,y:320.2}).wait(1).to({graphics:mask_3_graphics_176,x:263,y:318.9}).wait(1).to({graphics:mask_3_graphics_177,x:263,y:317.7}).wait(1).to({graphics:mask_3_graphics_178,x:263,y:316.4}).wait(1).to({graphics:mask_3_graphics_179,x:263,y:315.2}).wait(1).to({graphics:mask_3_graphics_180,x:263,y:314}).wait(1).to({graphics:mask_3_graphics_181,x:263,y:312.7}).wait(1).to({graphics:mask_3_graphics_182,x:263,y:311.5}).wait(1).to({graphics:mask_3_graphics_183,x:263,y:310.2}).wait(1).to({graphics:mask_3_graphics_184,x:263,y:309}).wait(1).to({graphics:mask_3_graphics_185,x:263,y:307.7}).wait(1).to({graphics:mask_3_graphics_186,x:263,y:306.5}).wait(1).to({graphics:mask_3_graphics_187,x:263,y:305.2}).wait(1).to({graphics:mask_3_graphics_188,x:263,y:304}).wait(1).to({graphics:mask_3_graphics_189,x:263,y:302.7}).wait(1).to({graphics:mask_3_graphics_190,x:263,y:301.4}).wait(1).to({graphics:mask_3_graphics_191,x:263,y:300}).wait(1).to({graphics:mask_3_graphics_192,x:263,y:298.7}).wait(1).to({graphics:mask_3_graphics_193,x:263,y:297.3}).wait(1).to({graphics:mask_3_graphics_194,x:263,y:295.9}).wait(1).to({graphics:mask_3_graphics_195,x:263,y:294.6}).wait(1).to({graphics:mask_3_graphics_196,x:263,y:293.2}).wait(1).to({graphics:mask_3_graphics_197,x:263,y:291.8}).wait(378));

	// 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("AiQh9QCwgqA+BpQA/BngQBh");
	this.shape_5.setTransform(447.7,116.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20.1,1,1).p("Aek3YUgEIAYag4/AWX");
	this.shape_6.setTransform(266.2,279.9);

	var maskedShapeInstanceList = [this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6},{t:this.shape_5}]},9).wait(566));

	// letter
	this.instance_4 = new lib.S("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(264.9,267.1);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(575));

	// Background
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F59E9E").ss(3,1,1).p("AMvQ5I5dAAMAAAghxIZdAAg");
	this.shape_7.setTransform(275,275,3.373,2.543);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_8.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(575));

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