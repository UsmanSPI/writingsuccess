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
	this.shape.graphics.f("#FFFFFF").s().p("A94RSQi8jcAAllQAAklCOlNQCKlFDpkXQDzkhEfikQE4izEzAAQETAAEIDAQCuCAEEEqQEmFFByBkQDqDBDSAAQCAAACcipQCgiqBcAAQCyAAAADFQAACXkcC/QkJC4ilAAQkgAAlBjuQjuiujuklQgXEliSE3QiSEyjpEFQjyEKkYCXQkzCkkuAAQlSAAjFjkgAuJsnQjcCKjEDuQi8DlhuD/QhzEFAADXQAAC3BXB8QBhCFCtAAQDlAADziYQDhiJDEjuQC8jlBukEQBykJAAjXQAAi4hch2QhkiBiuAAQjhAAjyCXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210.1,-133.4,420.2,266.9);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-94.4,guide:{path:[-47.9,-29.4,-30.4,37.2,47,28.6]}},89).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AlhCZICwlVIBHAkIixFVg");
	var mask_graphics_1 = new cjs.Graphics().p("AiACWICwlVIBRAqIiwFVg");
	var mask_graphics_2 = new cjs.Graphics().p("AiFCTICvlVIBdAwIiwFVg");
	var mask_graphics_3 = new cjs.Graphics().p("AiLCQICvlVIBoA2IivFVg");
	var mask_graphics_4 = new cjs.Graphics().p("AiRCNICwlVIBzA8IiwFVg");
	var mask_graphics_5 = new cjs.Graphics().p("AiXCKICwlVIB/BCIiwFVg");
	var mask_graphics_6 = new cjs.Graphics().p("AicCHICvlVICKBIIivFVg");
	var mask_graphics_7 = new cjs.Graphics().p("AiiCEICwlVICVBOIivFVg");
	var mask_graphics_8 = new cjs.Graphics().p("AioCBICwlVIChBTIiwFVg");
	var mask_graphics_9 = new cjs.Graphics().p("AitB+ICvlVICtBZIiwFWg");
	var mask_graphics_10 = new cjs.Graphics().p("AizB7ICxlVIC2BgIiwFVg");
	var mask_graphics_11 = new cjs.Graphics().p("Ai5B5ICxlVIDCBkIixFVg");
	var mask_graphics_12 = new cjs.Graphics().p("Ai+B2ICwlVIDNBqIiwFVg");
	var mask_graphics_13 = new cjs.Graphics().p("AjEBzICwlVIDZBwIiwFVg");
	var mask_graphics_14 = new cjs.Graphics().p("AjKBwICxlVIDkB2IixFVg");
	var mask_graphics_15 = new cjs.Graphics().p("AjPBtICwlVIDvB8IiwFVg");
	var mask_graphics_16 = new cjs.Graphics().p("AjVBqICwlVID7CCIiwFVg");
	var mask_graphics_17 = new cjs.Graphics().p("AjbBnICxlVIEGCIIiwFVg");
	var mask_graphics_18 = new cjs.Graphics().p("AjgBkICwlVIESCOIixFVg");
	var mask_graphics_19 = new cjs.Graphics().p("AjmBhICwlVIEdCUIiwFVg");
	var mask_graphics_20 = new cjs.Graphics().p("AjsBeICxlVIEoCaIixFVg");
	var mask_graphics_21 = new cjs.Graphics().p("AjyBbICxlVIE0CgIixFVg");
	var mask_graphics_22 = new cjs.Graphics().p("Aj3BYICwlVIE/CmIiwFVg");
	var mask_graphics_23 = new cjs.Graphics().p("Aj9BVICxlVIFKCrIixFVg");
	var mask_graphics_24 = new cjs.Graphics().p("AkDBSICxlVIFWCyIixFVg");
	var mask_graphics_25 = new cjs.Graphics().p("AkIBPICwlVIFiC3IixFVg");
	var mask_graphics_26 = new cjs.Graphics().p("AkOBMICxlVIFsC9IiwFVg");
	var mask_graphics_27 = new cjs.Graphics().p("AkUBKICxlVIF4DCIixFVg");
	var mask_graphics_28 = new cjs.Graphics().p("AkZBHICwlVIGEDIIixFVg");
	var mask_graphics_29 = new cjs.Graphics().p("AkfBEICxlVIGODOIiwFVg");
	var mask_graphics_30 = new cjs.Graphics().p("AklBBICxlVIGaDUIixFVg");
	var mask_graphics_31 = new cjs.Graphics().p("AkqA+ICwlVIGlDaIiwFVg");
	var mask_graphics_32 = new cjs.Graphics().p("AkwA7ICwlVIGxDgIiwFVg");
	var mask_graphics_33 = new cjs.Graphics().p("Ak2A4ICxlVIG8DmIixFVg");
	var mask_graphics_34 = new cjs.Graphics().p("Ak7A1ICwlVIHHDsIiwFVg");
	var mask_graphics_35 = new cjs.Graphics().p("AlBAyICwlVIHTDyIiwFVg");
	var mask_graphics_36 = new cjs.Graphics().p("AlHAvICxlVIHeD4IiwFVg");
	var mask_graphics_37 = new cjs.Graphics().p("AlMAsICwlVIHqD+IixFVg");
	var mask_graphics_38 = new cjs.Graphics().p("AlSApICwlVIH1EEIiwFVg");
	var mask_graphics_39 = new cjs.Graphics().p("AlYAmICxlVIIAEKIixFVg");
	var mask_graphics_40 = new cjs.Graphics().p("AleAjICxlVIIMEPIixFVg");
	var mask_graphics_41 = new cjs.Graphics().p("AljAgICwlVIIXEWIiwFVg");
	var mask_graphics_42 = new cjs.Graphics().p("AlpAdICxlVIIiEcIixFVg");
	var mask_graphics_43 = new cjs.Graphics().p("AlvAbICxlVIIuEgIixFVg");
	var mask_graphics_44 = new cjs.Graphics().p("Al0AYICwlVII6EmIixFVg");
	var mask_graphics_45 = new cjs.Graphics().p("Al6AVICwlVIJFEsIiwFVg");
	var mask_graphics_46 = new cjs.Graphics().p("AmAASICwlVIJREzIiwFVg");
	var mask_graphics_47 = new cjs.Graphics().p("AmGAPICxlVIJcE4IixFVg");
	var mask_graphics_48 = new cjs.Graphics().p("AmMAMICxlVIJnE+IiwFVg");
	var mask_graphics_49 = new cjs.Graphics().p("AmRAJICwlVIJzFEIixFVg");
	var mask_graphics_50 = new cjs.Graphics().p("AmXAGICxlVIJ+FKIixFVg");
	var mask_graphics_51 = new cjs.Graphics().p("AmdADICxlVIKJFQIiwFVg");
	var mask_graphics_52 = new cjs.Graphics().p("AmiAAICwlVIKVFVIiwFWg");
	var mask_graphics_53 = new cjs.Graphics().p("AmogCICxlWIKgFbIixFWg");
	var mask_graphics_54 = new cjs.Graphics().p("AmugFICxlWIKsFhIixFWg");
	var mask_graphics_55 = new cjs.Graphics().p("AmzgIICwlWIK3FnIiwFWg");
	var mask_graphics_56 = new cjs.Graphics().p("Am5gLICwlWILDFtIixFWg");
	var mask_graphics_57 = new cjs.Graphics().p("Am/gOICxlWILOFzIixFWg");
	var mask_graphics_58 = new cjs.Graphics().p("AnEgRICwlWILZF5IiwFWg");
	var mask_graphics_59 = new cjs.Graphics().p("AnKgTICwlWILlF9IixFWg");
	var mask_graphics_60 = new cjs.Graphics().p("AnQgWICxlWILwGEIixFWg");
	var mask_graphics_61 = new cjs.Graphics().p("AnVgZICwlWIL7GJIiwFWg");
	var mask_graphics_62 = new cjs.Graphics().p("AnbgcICwlWIMHGPIiwFWg");
	var mask_graphics_63 = new cjs.Graphics().p("AnhgfICxlWIMSGVIixFWg");
	var mask_graphics_64 = new cjs.Graphics().p("AnmgiICwlWIMdGbIiwFWg");
	var mask_graphics_65 = new cjs.Graphics().p("AnsglICwlWIMpGhIiwFWg");
	var mask_graphics_66 = new cjs.Graphics().p("AnygoICxlWIM0GnIixFWg");
	var mask_graphics_67 = new cjs.Graphics().p("An4grICxlWIM/GtIiwFWg");
	var mask_graphics_68 = new cjs.Graphics().p("An9guICwlWINLGzIixFWg");
	var mask_graphics_69 = new cjs.Graphics().p("AoDgxICxlWINWG5IixFWg");
	var mask_graphics_70 = new cjs.Graphics().p("AoJg0ICxlWINhG/IiwFWg");
	var mask_graphics_71 = new cjs.Graphics().p("AoOg3ICwlWINtHFIiwFWg");
	var mask_graphics_72 = new cjs.Graphics().p("AoUg6ICxlWIN4HLIixFWg");
	var mask_graphics_73 = new cjs.Graphics().p("Aoag9ICxlWIOEHRIixFWg");
	var mask_graphics_74 = new cjs.Graphics().p("AofhAICwlWIOPHXIiwFWg");
	var mask_graphics_75 = new cjs.Graphics().p("AolhCICwlWIObHcIixFWg");
	var mask_graphics_76 = new cjs.Graphics().p("AorhFICxlWIOmHhIixFWg");
	var mask_graphics_77 = new cjs.Graphics().p("AowhIICwlWIOxHoIiwFWg");
	var mask_graphics_78 = new cjs.Graphics().p("Ao2hLICwlWIO9HuIixFWg");
	var mask_graphics_79 = new cjs.Graphics().p("Ao8hOICxlWIPIHzIixFWg");
	var mask_graphics_80 = new cjs.Graphics().p("ApBhRICwlWIPTH5IiwFWg");
	var mask_graphics_81 = new cjs.Graphics().p("ApHhUICwlWIPfH/IiwFWg");
	var mask_graphics_82 = new cjs.Graphics().p("ApNhXICxlWIPqIFIixFWg");
	var mask_graphics_83 = new cjs.Graphics().p("ApThaICxlWIP2ILIixFWg");
	var mask_graphics_84 = new cjs.Graphics().p("ApYhdICwlWIQBIRIiwFWg");
	var mask_graphics_85 = new cjs.Graphics().p("ApehgICxlWIQMIXIixFWg");
	var mask_graphics_86 = new cjs.Graphics().p("ApkhjICxlWIQXIdIiwFWg");
	var mask_graphics_87 = new cjs.Graphics().p("ApphmICwlWIQjIjIiwFWg");
	var mask_graphics_88 = new cjs.Graphics().p("ApvhpICxlWIQuIpIixFWg");
	var mask_graphics_89 = new cjs.Graphics().p("Ap1hsICxlWIQ6IvIixFWg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-35.4,y:-17.5}).wait(1).to({graphics:mask_graphics_1,x:-57.9,y:-17.1}).wait(1).to({graphics:mask_graphics_2,x:-57.4,y:-16.8}).wait(1).to({graphics:mask_graphics_3,x:-56.8,y:-16.6}).wait(1).to({graphics:mask_graphics_4,x:-56.2,y:-16.3}).wait(1).to({graphics:mask_graphics_5,x:-55.7,y:-16}).wait(1).to({graphics:mask_graphics_6,x:-55.1,y:-15.7}).wait(1).to({graphics:mask_graphics_7,x:-54.5,y:-15.4}).wait(1).to({graphics:mask_graphics_8,x:-54,y:-15.1}).wait(1).to({graphics:mask_graphics_9,x:-53.4,y:-14.8}).wait(1).to({graphics:mask_graphics_10,x:-52.8,y:-14.5}).wait(1).to({graphics:mask_graphics_11,x:-52.3,y:-14.2}).wait(1).to({graphics:mask_graphics_12,x:-51.7,y:-13.9}).wait(1).to({graphics:mask_graphics_13,x:-51.1,y:-13.6}).wait(1).to({graphics:mask_graphics_14,x:-50.6,y:-13.3}).wait(1).to({graphics:mask_graphics_15,x:-50,y:-13}).wait(1).to({graphics:mask_graphics_16,x:-49.4,y:-12.7}).wait(1).to({graphics:mask_graphics_17,x:-48.8,y:-12.4}).wait(1).to({graphics:mask_graphics_18,x:-48.3,y:-12.1}).wait(1).to({graphics:mask_graphics_19,x:-47.7,y:-11.9}).wait(1).to({graphics:mask_graphics_20,x:-47.1,y:-11.6}).wait(1).to({graphics:mask_graphics_21,x:-46.6,y:-11.3}).wait(1).to({graphics:mask_graphics_22,x:-46,y:-11}).wait(1).to({graphics:mask_graphics_23,x:-45.4,y:-10.7}).wait(1).to({graphics:mask_graphics_24,x:-44.9,y:-10.4}).wait(1).to({graphics:mask_graphics_25,x:-44.3,y:-10.1}).wait(1).to({graphics:mask_graphics_26,x:-43.7,y:-9.8}).wait(1).to({graphics:mask_graphics_27,x:-43.2,y:-9.5}).wait(1).to({graphics:mask_graphics_28,x:-42.6,y:-9.2}).wait(1).to({graphics:mask_graphics_29,x:-42,y:-8.9}).wait(1).to({graphics:mask_graphics_30,x:-41.5,y:-8.6}).wait(1).to({graphics:mask_graphics_31,x:-40.9,y:-8.3}).wait(1).to({graphics:mask_graphics_32,x:-40.3,y:-8}).wait(1).to({graphics:mask_graphics_33,x:-39.8,y:-7.7}).wait(1).to({graphics:mask_graphics_34,x:-39.2,y:-7.4}).wait(1).to({graphics:mask_graphics_35,x:-38.6,y:-7.2}).wait(1).to({graphics:mask_graphics_36,x:-38,y:-6.9}).wait(1).to({graphics:mask_graphics_37,x:-37.5,y:-6.6}).wait(1).to({graphics:mask_graphics_38,x:-36.9,y:-6.3}).wait(1).to({graphics:mask_graphics_39,x:-36.3,y:-6}).wait(1).to({graphics:mask_graphics_40,x:-35.8,y:-5.7}).wait(1).to({graphics:mask_graphics_41,x:-35.2,y:-5.4}).wait(1).to({graphics:mask_graphics_42,x:-34.6,y:-5.1}).wait(1).to({graphics:mask_graphics_43,x:-34.1,y:-4.8}).wait(1).to({graphics:mask_graphics_44,x:-33.5,y:-4.5}).wait(1).to({graphics:mask_graphics_45,x:-33,y:-4.2}).wait(1).to({graphics:mask_graphics_46,x:-32.4,y:-3.9}).wait(1).to({graphics:mask_graphics_47,x:-31.8,y:-3.7}).wait(1).to({graphics:mask_graphics_48,x:-31.2,y:-3.4}).wait(1).to({graphics:mask_graphics_49,x:-30.7,y:-3.1}).wait(1).to({graphics:mask_graphics_50,x:-30.1,y:-2.8}).wait(1).to({graphics:mask_graphics_51,x:-29.5,y:-2.5}).wait(1).to({graphics:mask_graphics_52,x:-29,y:-2.2}).wait(1).to({graphics:mask_graphics_53,x:-28.4,y:-1.9}).wait(1).to({graphics:mask_graphics_54,x:-27.8,y:-1.6}).wait(1).to({graphics:mask_graphics_55,x:-27.3,y:-1.3}).wait(1).to({graphics:mask_graphics_56,x:-26.7,y:-1}).wait(1).to({graphics:mask_graphics_57,x:-26.1,y:-0.7}).wait(1).to({graphics:mask_graphics_58,x:-25.6,y:-0.4}).wait(1).to({graphics:mask_graphics_59,x:-25,y:-0.1}).wait(1).to({graphics:mask_graphics_60,x:-24.4,y:0.2}).wait(1).to({graphics:mask_graphics_61,x:-23.9,y:0.5}).wait(1).to({graphics:mask_graphics_62,x:-23.3,y:0.8}).wait(1).to({graphics:mask_graphics_63,x:-22.7,y:1}).wait(1).to({graphics:mask_graphics_64,x:-22.2,y:1.3}).wait(1).to({graphics:mask_graphics_65,x:-21.6,y:1.6}).wait(1).to({graphics:mask_graphics_66,x:-21,y:1.9}).wait(1).to({graphics:mask_graphics_67,x:-20.4,y:2.2}).wait(1).to({graphics:mask_graphics_68,x:-19.9,y:2.5}).wait(1).to({graphics:mask_graphics_69,x:-19.3,y:2.8}).wait(1).to({graphics:mask_graphics_70,x:-18.7,y:3.1}).wait(1).to({graphics:mask_graphics_71,x:-18.2,y:3.4}).wait(1).to({graphics:mask_graphics_72,x:-17.6,y:3.7}).wait(1).to({graphics:mask_graphics_73,x:-17,y:4}).wait(1).to({graphics:mask_graphics_74,x:-16.5,y:4.3}).wait(1).to({graphics:mask_graphics_75,x:-15.9,y:4.6}).wait(1).to({graphics:mask_graphics_76,x:-15.3,y:4.9}).wait(1).to({graphics:mask_graphics_77,x:-14.8,y:5.2}).wait(1).to({graphics:mask_graphics_78,x:-14.2,y:5.5}).wait(1).to({graphics:mask_graphics_79,x:-13.6,y:5.7}).wait(1).to({graphics:mask_graphics_80,x:-13.1,y:6}).wait(1).to({graphics:mask_graphics_81,x:-12.5,y:6.3}).wait(1).to({graphics:mask_graphics_82,x:-11.9,y:6.6}).wait(1).to({graphics:mask_graphics_83,x:-11.3,y:6.9}).wait(1).to({graphics:mask_graphics_84,x:-10.8,y:7.2}).wait(1).to({graphics:mask_graphics_85,x:-10.2,y:7.5}).wait(1).to({graphics:mask_graphics_86,x:-9.6,y:7.8}).wait(1).to({graphics:mask_graphics_87,x:-9.1,y:8.1}).wait(1).to({graphics:mask_graphics_88,x:-8.5,y:8.4}).wait(1).to({graphics:mask_graphics_89,x:-7.9,y:8.7}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AnfkmQCwKeMPhb");

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.3,-37.3,21.2,38.8);


(lib.ar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(48.5,-50.6,1,1,65.5,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0.1,rotation:31.8,guide:{path:[48.5,-50.4,-9.2,-28.3,-42.7,42.1]}},119).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AA1kPIBIhMICkCaIhIBMg");
	var mask_graphics_1 = new cjs.Graphics().p("Ah5giIBQhUICjCZIhQBUg");
	var mask_graphics_2 = new cjs.Graphics().p("Ah8geIBWhcICkCZIhYBcg");
	var mask_graphics_3 = new cjs.Graphics().p("AiAgaIBehkICjCZIheBkg");
	var mask_graphics_4 = new cjs.Graphics().p("AiEgWIBmhsICjCaIhmBrg");
	var mask_graphics_5 = new cjs.Graphics().p("AiIgTIBuhzICjCaIhuBzg");
	var mask_graphics_6 = new cjs.Graphics().p("AiMgPIB1h7ICkCaIh1B7g");
	var mask_graphics_7 = new cjs.Graphics().p("AiPgLIB8iDICjCaIh8CDg");
	var mask_graphics_8 = new cjs.Graphics().p("AiTgHICEiLICjCaIiECLg");
	var mask_graphics_9 = new cjs.Graphics().p("AiXgDICMiTICjCaIiLCTg");
	var mask_graphics_10 = new cjs.Graphics().p("AiaAAICSiaICjCaIiSCbg");
	var mask_graphics_11 = new cjs.Graphics().p("AieAEICaiiICjCbIiaCig");
	var mask_graphics_12 = new cjs.Graphics().p("AiiAIICiiqICjCbIiiCqg");
	var mask_graphics_13 = new cjs.Graphics().p("AilAMICniyIClCbIioCyg");
	var mask_graphics_14 = new cjs.Graphics().p("AipAQICvi6ICkCbIivC6g");
	var mask_graphics_15 = new cjs.Graphics().p("AitAVIC3jDICkCbIi3DCg");
	var mask_graphics_16 = new cjs.Graphics().p("AixAYIC/jKICkCbIi/DKg");
	var mask_graphics_17 = new cjs.Graphics().p("Ai1AcIDGjSIClCbIjGDSg");
	var mask_graphics_18 = new cjs.Graphics().p("Ai4AgIDNjaICkCbIjNDag");
	var mask_graphics_19 = new cjs.Graphics().p("Ai8AkIDVjiICkCbIjVDig");
	var mask_graphics_20 = new cjs.Graphics().p("AjAAoIDdjqICkCbIjdDqg");
	var mask_graphics_21 = new cjs.Graphics().p("AjEAsIDkjyIClCbIjlDyg");
	var mask_graphics_22 = new cjs.Graphics().p("AjHAwIDrj6ICkCbIjrD6g");
	var mask_graphics_23 = new cjs.Graphics().p("AjLA0IDzkCICkCbIjzECg");
	var mask_graphics_24 = new cjs.Graphics().p("AjPA4ID7kJICkCaIj7EJg");
	var mask_graphics_25 = new cjs.Graphics().p("AjSA8IEBkRIClCaIkCERg");
	var mask_graphics_26 = new cjs.Graphics().p("AjWBAIEJkZICkCaIkJEZg");
	var mask_graphics_27 = new cjs.Graphics().p("AjaBEIERkhICkCaIkQEhg");
	var mask_graphics_28 = new cjs.Graphics().p("AjeBIIEZkpICkCaIkYEqg");
	var mask_graphics_29 = new cjs.Graphics().p("AjiBMIEgkxIClCaIkgEyg");
	var mask_graphics_30 = new cjs.Graphics().p("AjlBQIEnk5ICkCaIknE5g");
	var mask_graphics_31 = new cjs.Graphics().p("AjpBUIEvlBICkCaIkvFBg");
	var mask_graphics_32 = new cjs.Graphics().p("AjsBYIE1lJIClCaIk3FJg");
	var mask_graphics_33 = new cjs.Graphics().p("AjwBcIE9lRICkCaIk9FRg");
	var mask_graphics_34 = new cjs.Graphics().p("Aj0BgIFFlZICkCaIlFFZg");
	var mask_graphics_35 = new cjs.Graphics().p("Aj4BjIFNlgICkCaIlNFhg");
	var mask_graphics_36 = new cjs.Graphics().p("Aj7BnIFTloIClCaIlUFpg");
	var mask_graphics_37 = new cjs.Graphics().p("Aj/BrIFblwICkCaIlbFxg");
	var mask_graphics_38 = new cjs.Graphics().p("AkDBvIFjl4ICkCaIljF5g");
	var mask_graphics_39 = new cjs.Graphics().p("AkHB0IFrmBICkCaIlrGBg");
	var mask_graphics_40 = new cjs.Graphics().p("AkLB4IFymJIClCaIlzGJg");
	var mask_graphics_41 = new cjs.Graphics().p("AkOB7IF5mQICkCaIl5GRg");
	var mask_graphics_42 = new cjs.Graphics().p("AkSB/IGBmYICkCaImBGZg");
	var mask_graphics_43 = new cjs.Graphics().p("AkWCDIGJmgICkCbImIGgg");
	var mask_graphics_44 = new cjs.Graphics().p("AkZCHIGPmoIClCbImQGog");
	var mask_graphics_45 = new cjs.Graphics().p("AkdCMIGXmxICkCbImXGwg");
	var mask_graphics_46 = new cjs.Graphics().p("AkhCQIGfm5ICkCbImfG4g");
	var mask_graphics_47 = new cjs.Graphics().p("AklCTIGnnAICkCbImmHAg");
	var mask_graphics_48 = new cjs.Graphics().p("AkoCXIGtnIIClCbImuHIg");
	var mask_graphics_49 = new cjs.Graphics().p("AksCbIG1nQICkCbIm1HQg");
	var mask_graphics_50 = new cjs.Graphics().p("AkwCfIG9nYICkCbIm9HYg");
	var mask_graphics_51 = new cjs.Graphics().p("Ak0CjIHEngIClCbInFHgg");
	var mask_graphics_52 = new cjs.Graphics().p("Ak3CnIHLnoICkCbInLHog");
	var mask_graphics_53 = new cjs.Graphics().p("Ak7CrIHTnwICkCbInTHwg");
	var mask_graphics_54 = new cjs.Graphics().p("Ak/CvIHbn4ICkCbInbH4g");
	var mask_graphics_55 = new cjs.Graphics().p("AlCCzIHhoAIClCbInjIAg");
	var mask_graphics_56 = new cjs.Graphics().p("AlGC3IHpoIICkCbInpIIg");
	var mask_graphics_57 = new cjs.Graphics().p("AlKC7IHxoQICkCbInxIQg");
	var mask_graphics_58 = new cjs.Graphics().p("AlOC/IH5oYICkCbIn5IYg");
	var mask_graphics_59 = new cjs.Graphics().p("AlSDDIIAogIClCbIoAIgg");
	var mask_graphics_60 = new cjs.Graphics().p("AlWDGIIIonICkCbIoHIog");
	var mask_graphics_61 = new cjs.Graphics().p("AlZDKIIPovICkCbIoPIvg");
	var mask_graphics_62 = new cjs.Graphics().p("AldDOIIWo3IClCbIoXI3g");
	var mask_graphics_63 = new cjs.Graphics().p("AlhDTIIeo/IClCaIoeI/g");
	var mask_graphics_64 = new cjs.Graphics().p("AlkDXIIlpHICkCaIolJHg");
	var mask_graphics_65 = new cjs.Graphics().p("AloDbIItpPICkCaIotJPg");
	var mask_graphics_66 = new cjs.Graphics().p("AlsDeII0pWIClCaIo0JXg");
	var mask_graphics_67 = new cjs.Graphics().p("AlwDiII8peIClCaIo8Jfg");
	var mask_graphics_68 = new cjs.Graphics().p("Al0DmIJEpmICkCaIpDJng");
	var mask_graphics_69 = new cjs.Graphics().p("Al3DqIJLpuICkCaIpLJvg");
	var mask_graphics_70 = new cjs.Graphics().p("Al7DvIJSp3IClCbIpTJ2g");
	var mask_graphics_71 = new cjs.Graphics().p("Al/DzIJap/ICkCbIpaJ+g");
	var mask_graphics_72 = new cjs.Graphics().p("AmCD2IJhqGICkCbIphKGg");
	var mask_graphics_73 = new cjs.Graphics().p("AmGD6IJoqOIClCbIppKOg");
	var mask_graphics_74 = new cjs.Graphics().p("AmKD+IJwqWIClCbIpxKWg");
	var mask_graphics_75 = new cjs.Graphics().p("AmNECIJ3qeICkCbIp3Keg");
	var mask_graphics_76 = new cjs.Graphics().p("AmREGIJ/qmICkCbIp/Kmg");
	var mask_graphics_77 = new cjs.Graphics().p("AmVEKIKGquIClCbIqGKug");
	var mask_graphics_78 = new cjs.Graphics().p("AmZEOIKOq2IClCbIqOK2g");
	var mask_graphics_79 = new cjs.Graphics().p("AmdESIKWq+ICkCbIqVK+g");
	var mask_graphics_80 = new cjs.Graphics().p("AmgEWIKdrGICkCbIqdLGg");
	var mask_graphics_81 = new cjs.Graphics().p("AmkEaIKkrOIClCbIqlLOg");
	var mask_graphics_82 = new cjs.Graphics().p("AmoEeIKsrWIClCbIqsLWg");
	var mask_graphics_83 = new cjs.Graphics().p("AmsEiIK0reICkCbIqzLeg");
	var mask_graphics_84 = new cjs.Graphics().p("AmvEmIK7rmICkCbIq7Lmg");
	var mask_graphics_85 = new cjs.Graphics().p("AmzEqILCruIClCbIrDLug");
	var mask_graphics_86 = new cjs.Graphics().p("Am3EuILKr2IClCbIrKL2g");
	var mask_graphics_87 = new cjs.Graphics().p("Am6EyILRr+ICkCbIrRL+g");
	var mask_graphics_88 = new cjs.Graphics().p("Am+E2ILZsGICkCbIrZMGg");
	var mask_graphics_89 = new cjs.Graphics().p("AnCE6ILgsOIClCbIrgMOg");
	var mask_graphics_90 = new cjs.Graphics().p("AnGE+ILosWICkCcIroMUg");
	var mask_graphics_91 = new cjs.Graphics().p("AnJFBILvsdICkCcIrvMcg");
	var mask_graphics_92 = new cjs.Graphics().p("AnNFGIL2smIClCcIr3Mkg");
	var mask_graphics_93 = new cjs.Graphics().p("AnRFKIL+suIClCcIr/Msg");
	var mask_graphics_94 = new cjs.Graphics().p("AnUFOIMFs2ICkCcIsFM0g");
	var mask_graphics_95 = new cjs.Graphics().p("AnYFSIMNs+ICkCcIsNM9g");
	var mask_graphics_96 = new cjs.Graphics().p("AncFWIMUtFIClCbIsVNEg");
	var mask_graphics_97 = new cjs.Graphics().p("AngFaIMctNIClCbIscNMg");
	var mask_graphics_98 = new cjs.Graphics().p("AnjFdIMjtUICkCbIsjNUg");
	var mask_graphics_99 = new cjs.Graphics().p("AnnFhIMrtcICkCbIsrNcg");
	var mask_graphics_100 = new cjs.Graphics().p("AnrFlIMytkIClCaIsyNlg");
	var mask_graphics_101 = new cjs.Graphics().p("AnvFpIM6tsIClCaIs6Ntg");
	var mask_graphics_102 = new cjs.Graphics().p("AnzFtINCt0ICkCaItBN1g");
	var mask_graphics_103 = new cjs.Graphics().p("An2FxINJt8ICkCaItJN9g");
	var mask_graphics_104 = new cjs.Graphics().p("An6F1INQuEIClCaItROFg");
	var mask_graphics_105 = new cjs.Graphics().p("An+F5INYuMIClCbItYOMg");
	var mask_graphics_106 = new cjs.Graphics().p("AoBF9INfuUICkCbItfOUg");
	var mask_graphics_107 = new cjs.Graphics().p("AoFGBINnucICkCbItnOcg");
	var mask_graphics_108 = new cjs.Graphics().p("AoJGFINuukIClCbItvOkg");
	var mask_graphics_109 = new cjs.Graphics().p("AoNGJIN2usIClCbIt2Osg");
	var mask_graphics_110 = new cjs.Graphics().p("AoQGNIN9u0ICkCbIt9O0g");
	var mask_graphics_111 = new cjs.Graphics().p("AoUGRIOEu8IClCbIuEO8g");
	var mask_graphics_112 = new cjs.Graphics().p("AoYGVIOMvEIClCbIuMPEg");
	var mask_graphics_113 = new cjs.Graphics().p("AocGZIOUvMICkCbIuTPMg");
	var mask_graphics_114 = new cjs.Graphics().p("AofGdIObvUICkCbIubPUg");
	var mask_graphics_115 = new cjs.Graphics().p("AojGhIOivcIClCbIujPcg");
	var mask_graphics_116 = new cjs.Graphics().p("AonGlIOqvkIClCbIuqPkg");
	var mask_graphics_117 = new cjs.Graphics().p("AoqGpIOxvsICkCbIuxPsg");
	var mask_graphics_118 = new cjs.Graphics().p("AouGtIO5v0ICkCbIu5P0g");
	var mask_graphics_119 = new cjs.Graphics().p("AoyGxIPAv8IClCbIvAP8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:28.9,y:-34.8}).wait(1).to({graphics:mask_graphics_1,x:45.6,y:-57.7}).wait(1).to({graphics:mask_graphics_2,x:45.2,y:-57.3}).wait(1).to({graphics:mask_graphics_3,x:44.8,y:-56.9}).wait(1).to({graphics:mask_graphics_4,x:44.5,y:-56.5}).wait(1).to({graphics:mask_graphics_5,x:44.1,y:-56.1}).wait(1).to({graphics:mask_graphics_6,x:43.7,y:-55.7}).wait(1).to({graphics:mask_graphics_7,x:43.3,y:-55.3}).wait(1).to({graphics:mask_graphics_8,x:43,y:-54.9}).wait(1).to({graphics:mask_graphics_9,x:42.6,y:-54.5}).wait(1).to({graphics:mask_graphics_10,x:42.2,y:-54.2}).wait(1).to({graphics:mask_graphics_11,x:41.9,y:-53.8}).wait(1).to({graphics:mask_graphics_12,x:41.5,y:-53.4}).wait(1).to({graphics:mask_graphics_13,x:41.1,y:-53}).wait(1).to({graphics:mask_graphics_14,x:40.7,y:-52.6}).wait(1).to({graphics:mask_graphics_15,x:40.4,y:-52.2}).wait(1).to({graphics:mask_graphics_16,x:40,y:-51.8}).wait(1).to({graphics:mask_graphics_17,x:39.6,y:-51.4}).wait(1).to({graphics:mask_graphics_18,x:39.2,y:-51}).wait(1).to({graphics:mask_graphics_19,x:38.9,y:-50.6}).wait(1).to({graphics:mask_graphics_20,x:38.5,y:-50.2}).wait(1).to({graphics:mask_graphics_21,x:38.1,y:-49.8}).wait(1).to({graphics:mask_graphics_22,x:37.7,y:-49.4}).wait(1).to({graphics:mask_graphics_23,x:37.4,y:-49}).wait(1).to({graphics:mask_graphics_24,x:37,y:-48.6}).wait(1).to({graphics:mask_graphics_25,x:36.6,y:-48.2}).wait(1).to({graphics:mask_graphics_26,x:36.2,y:-47.8}).wait(1).to({graphics:mask_graphics_27,x:35.9,y:-47.4}).wait(1).to({graphics:mask_graphics_28,x:35.5,y:-47}).wait(1).to({graphics:mask_graphics_29,x:35.1,y:-46.6}).wait(1).to({graphics:mask_graphics_30,x:34.8,y:-46.3}).wait(1).to({graphics:mask_graphics_31,x:34.4,y:-45.9}).wait(1).to({graphics:mask_graphics_32,x:34,y:-45.5}).wait(1).to({graphics:mask_graphics_33,x:33.6,y:-45.1}).wait(1).to({graphics:mask_graphics_34,x:33.3,y:-44.7}).wait(1).to({graphics:mask_graphics_35,x:32.9,y:-44.3}).wait(1).to({graphics:mask_graphics_36,x:32.5,y:-43.9}).wait(1).to({graphics:mask_graphics_37,x:32.1,y:-43.5}).wait(1).to({graphics:mask_graphics_38,x:31.8,y:-43.1}).wait(1).to({graphics:mask_graphics_39,x:31.4,y:-42.7}).wait(1).to({graphics:mask_graphics_40,x:31,y:-42.3}).wait(1).to({graphics:mask_graphics_41,x:30.6,y:-41.9}).wait(1).to({graphics:mask_graphics_42,x:30.3,y:-41.5}).wait(1).to({graphics:mask_graphics_43,x:29.9,y:-41.1}).wait(1).to({graphics:mask_graphics_44,x:29.5,y:-40.7}).wait(1).to({graphics:mask_graphics_45,x:29.1,y:-40.3}).wait(1).to({graphics:mask_graphics_46,x:28.8,y:-39.9}).wait(1).to({graphics:mask_graphics_47,x:28.4,y:-39.5}).wait(1).to({graphics:mask_graphics_48,x:28,y:-39.1}).wait(1).to({graphics:mask_graphics_49,x:27.6,y:-38.7}).wait(1).to({graphics:mask_graphics_50,x:27.3,y:-38.4}).wait(1).to({graphics:mask_graphics_51,x:26.9,y:-38}).wait(1).to({graphics:mask_graphics_52,x:26.5,y:-37.6}).wait(1).to({graphics:mask_graphics_53,x:26.2,y:-37.2}).wait(1).to({graphics:mask_graphics_54,x:25.8,y:-36.8}).wait(1).to({graphics:mask_graphics_55,x:25.4,y:-36.4}).wait(1).to({graphics:mask_graphics_56,x:25,y:-36}).wait(1).to({graphics:mask_graphics_57,x:24.7,y:-35.6}).wait(1).to({graphics:mask_graphics_58,x:24.3,y:-35.2}).wait(1).to({graphics:mask_graphics_59,x:23.9,y:-34.8}).wait(1).to({graphics:mask_graphics_60,x:23.6,y:-34.4}).wait(1).to({graphics:mask_graphics_61,x:23.2,y:-34}).wait(1).to({graphics:mask_graphics_62,x:22.8,y:-33.6}).wait(1).to({graphics:mask_graphics_63,x:22.4,y:-33.2}).wait(1).to({graphics:mask_graphics_64,x:22.1,y:-32.8}).wait(1).to({graphics:mask_graphics_65,x:21.7,y:-32.4}).wait(1).to({graphics:mask_graphics_66,x:21.3,y:-32}).wait(1).to({graphics:mask_graphics_67,x:20.9,y:-31.6}).wait(1).to({graphics:mask_graphics_68,x:20.6,y:-31.2}).wait(1).to({graphics:mask_graphics_69,x:20.2,y:-30.8}).wait(1).to({graphics:mask_graphics_70,x:19.8,y:-30.4}).wait(1).to({graphics:mask_graphics_71,x:19.5,y:-30}).wait(1).to({graphics:mask_graphics_72,x:19.1,y:-29.6}).wait(1).to({graphics:mask_graphics_73,x:18.7,y:-29.2}).wait(1).to({graphics:mask_graphics_74,x:18.3,y:-28.8}).wait(1).to({graphics:mask_graphics_75,x:18,y:-28.5}).wait(1).to({graphics:mask_graphics_76,x:17.6,y:-28.1}).wait(1).to({graphics:mask_graphics_77,x:17.2,y:-27.7}).wait(1).to({graphics:mask_graphics_78,x:16.8,y:-27.3}).wait(1).to({graphics:mask_graphics_79,x:16.5,y:-26.9}).wait(1).to({graphics:mask_graphics_80,x:16.1,y:-26.5}).wait(1).to({graphics:mask_graphics_81,x:15.7,y:-26.1}).wait(1).to({graphics:mask_graphics_82,x:15.3,y:-25.7}).wait(1).to({graphics:mask_graphics_83,x:15,y:-25.3}).wait(1).to({graphics:mask_graphics_84,x:14.6,y:-24.9}).wait(1).to({graphics:mask_graphics_85,x:14.2,y:-24.5}).wait(1).to({graphics:mask_graphics_86,x:13.8,y:-24.1}).wait(1).to({graphics:mask_graphics_87,x:13.5,y:-23.7}).wait(1).to({graphics:mask_graphics_88,x:13.1,y:-23.3}).wait(1).to({graphics:mask_graphics_89,x:12.7,y:-22.9}).wait(1).to({graphics:mask_graphics_90,x:12.4,y:-22.5}).wait(1).to({graphics:mask_graphics_91,x:12,y:-22.1}).wait(1).to({graphics:mask_graphics_92,x:11.6,y:-21.7}).wait(1).to({graphics:mask_graphics_93,x:11.2,y:-21.3}).wait(1).to({graphics:mask_graphics_94,x:10.9,y:-20.9}).wait(1).to({graphics:mask_graphics_95,x:10.5,y:-20.5}).wait(1).to({graphics:mask_graphics_96,x:10.1,y:-20.2}).wait(1).to({graphics:mask_graphics_97,x:9.7,y:-19.8}).wait(1).to({graphics:mask_graphics_98,x:9.4,y:-19.4}).wait(1).to({graphics:mask_graphics_99,x:9,y:-19}).wait(1).to({graphics:mask_graphics_100,x:8.6,y:-18.6}).wait(1).to({graphics:mask_graphics_101,x:8.2,y:-18.2}).wait(1).to({graphics:mask_graphics_102,x:7.9,y:-17.8}).wait(1).to({graphics:mask_graphics_103,x:7.5,y:-17.4}).wait(1).to({graphics:mask_graphics_104,x:7.1,y:-17}).wait(1).to({graphics:mask_graphics_105,x:6.7,y:-16.6}).wait(1).to({graphics:mask_graphics_106,x:6.4,y:-16.2}).wait(1).to({graphics:mask_graphics_107,x:6,y:-15.8}).wait(1).to({graphics:mask_graphics_108,x:5.6,y:-15.4}).wait(1).to({graphics:mask_graphics_109,x:5.2,y:-15}).wait(1).to({graphics:mask_graphics_110,x:4.9,y:-14.6}).wait(1).to({graphics:mask_graphics_111,x:4.5,y:-14.2}).wait(1).to({graphics:mask_graphics_112,x:4.1,y:-13.8}).wait(1).to({graphics:mask_graphics_113,x:3.8,y:-13.4}).wait(1).to({graphics:mask_graphics_114,x:3.4,y:-13}).wait(1).to({graphics:mask_graphics_115,x:3,y:-12.6}).wait(1).to({graphics:mask_graphics_116,x:2.6,y:-12.3}).wait(1).to({graphics:mask_graphics_117,x:2.3,y:-11.9}).wait(1).to({graphics:mask_graphics_118,x:1.9,y:-11.5}).wait(1).to({graphics:mask_graphics_119,x:1.5,y:-11.1}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AnIHQQFQrCJBjd");
	this.shape.setTransform(2.8,-4.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.2,-61.9,21.2,20.3);


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
(lib.WS_Cursive_O = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_554 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(554).call(this.frame_554).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(241.9,145.5,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[241.9,145.6,200.3,149.3,161.5,181,122.7,212.7,102.7,279.5,82.6,346.3,131,367.5,179.4,388.7,234.8,339.3,290.2,289.9,300.3,217.8,310.5,145.8,244.2,145.6]}},311).wait(14).to({y:144},0).to({guide:{path:[244.3,144.2,282.1,135.7,352.2,222.2,422.4,308.6,482.8,235]}},140).wait(15).to({startPosition:0},0).to({guide:{path:[482.2,234.9,487.7,185.6,526.1,154.4,528.8,152.2,531.6,150.1,580.4,152,623.6,129.6,626.5,128.1,628.3,125.6]}},65).wait(1));

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(239,144.5,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},311).wait(14).to({_off:false,x:482,y:237.5},0).to({_off:true},140).wait(81));

	// Layer 11
	this.instance_1 = new lib.ar2("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(380.5,305.8,1,1,-114.3,0,0,0.6,-0.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(334).to({_off:false},0).wait(221));

	// Layer 13 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_409 = new cjs.Graphics().p("AjWGfQhWsEHkpfQHlpfMDhVQMEhXJfHlMgklAtwQpenlhWsCg");
	var mask_graphics_410 = new cjs.Graphics().p("AjHGzQhisCHapnQHbpmMDhhQMChkJmHcMgj2AuVQpmnchisBg");
	var mask_graphics_411 = new cjs.Graphics().p("Ai3HIQhvsBHRpuQHRpuMBhtQMAhwJuHSMgjHAu5QptnShur/g");
	var mask_graphics_412 = new cjs.Graphics().p("AinHdQh7r/HHp1QHIp2L/h5QL+h8J1HIMgiXAvcQp0nIh7r9g");
	var mask_graphics_413 = new cjs.Graphics().p("AiWHxQiHr8G9p9QG+p8L8iGQL9iIJ8G+MghnAv/Qp7m+iHr8g");
	var mask_graphics_414 = new cjs.Graphics().p("AiEIGQiTr6GyqDQG0qEL7iSQL6iUKDG0Mgg2AwgQqDmziSr6g");
	var mask_graphics_415 = new cjs.Graphics().p("AhyIbQifr4GoqKQGqqKL4ieQL4igKKGpMggFAxCQqKmqier3g");
	var mask_graphics_416 = new cjs.Graphics().p("AhfIxQirr2GeqRQGfqRL1ipQL1isKRGfMgfTAxhQqQmfiqr0g");
	var mask_graphics_417 = new cjs.Graphics().p("AhMJGQi3rzGUqXQGUqXLzi2QLyi4KYGUMgehAyBQqXmVi2rxg");
	var mask_graphics_418 = new cjs.Graphics().p("Ag4JbQjDrvGJqeQGKqeLwjCQLvjDKeGKMgduAyfQqdmKjCrvg");
	var mask_graphics_419 = new cjs.Graphics().p("AgjJwQjPrsF+qkQGAqkLsjNQLsjQKkF/Mgc6Ay9Qqkl/jNrsg");
	var mask_graphics_420 = new cjs.Graphics().p("AgOKGQjbrpF0qqQF0qqLqjZQLojcKqF1MgcGAzaQqql1jZrog");
	var mask_graphics_421 = new cjs.Graphics().p("AAHKbQjmrlFpqwQFqqvLljlQLljoKwFqMgbSAz2Qqwlqjlrlg");
	var mask_graphics_422 = new cjs.Graphics().p("AAdKxQjxriFdq1QFfq1LijxQLijzK1FfMgadA0RQq2lfjxrhg");
	var mask_graphics_423 = new cjs.Graphics().p("AA0LHQj9reFSq7QFUq7Lej8QLej/K7FUMgZpA0rQq6lUj9rcg");
	var mask_graphics_424 = new cjs.Graphics().p("ABLLcQkJraFIq/QFJrALakJQLZkKLAFJMgYyA1FQrAlJkJrZg");
	var mask_graphics_425 = new cjs.Graphics().p("ABjLyQkUrWE8rFQE+rFLWkTQLVkWLFE+MgX9A1dQrFk+kUrUg");
	var mask_graphics_426 = new cjs.Graphics().p("AB7MIQkfrSExrJQEyrKLSkgQLQkhLKEzMgXGA11QrKkykgrQg");
	var mask_graphics_427 = new cjs.Graphics().p("ACUMdQkrrNEmrOQEnrPLNkqQLMksLOEmMgWPA2NQrPknkrrMg");
	var mask_graphics_428 = new cjs.Graphics().p("ACtMzQk2rIEbrTQEbrTLIk2QLHk4LUEcMgVZA2iQrTkbk3rHg");
	var mask_graphics_429 = new cjs.Graphics().p("ADHNJQlBrEEPrWQEQrYLDlBQLClDLYEQMgUhA23QrYkQlCrBg");
	var mask_graphics_430 = new cjs.Graphics().p("ADiNfQlNq/EErbQEErcK+lMQK9lOLcEFMgTpA3LQrckElNq8g");
	var mask_graphics_431 = new cjs.Graphics().p("AD9N0QlYq4D4rfQD5rhK4lXQK4lZLgD5MgSxA3fQrgj5lYq3g");
	var mask_graphics_432 = new cjs.Graphics().p("AEYOKQliqzDsrjQDtrkKzliQKylkLkDtMgR5A3yQrkjtljqyg");
	var mask_graphics_433 = new cjs.Graphics().p("AE0OgQltquDgrmQDiroKtltQKslvLoDiMgRBA4DQrnjhluqsg");
	var mask_graphics_434 = new cjs.Graphics().p("AFRO2Ql5qoDVrqQDWrrKnl4QKml6LrDWMgQHA4UQrrjVl4qmg");
	var mask_graphics_435 = new cjs.Graphics().p("AFuPLQmDqhDIruQDKruKimCQKgmFLuDKMgPOA4kQrujKmDqgg");
	var mask_graphics_436 = new cjs.Graphics().p("AGLPhQmOqbC9rxQC+rxKbmNQKamPLyC+MgOVA4zQrxi+mOqag");
	var mask_graphics_437 = new cjs.Graphics().p("AGpP3QmZqVCyr0QCyr0KUmYQKUmZL0CyMgNbA5BQr0iymYqTg");
	var mask_graphics_438 = new cjs.Graphics().p("AHHQMQmjqOCmr2QCmr3KOmiQKNmkL3CmMgMhA5OQr3immjqNg");
	var mask_graphics_439 = new cjs.Graphics().p("AHmQiQmuqICar4QCar6KImsQKGmuL5CaMgLnA5aQr5iamtqGg");
	var mask_graphics_440 = new cjs.Graphics().p("AIFQ4Qm4qBCOr7QCOr8KBm3QJ/m4L8COMgKtA5mQr8iOm3p/g");
	var mask_graphics_441 = new cjs.Graphics().p("AIlRNQnCp6CBr9QCCr+J6nAQJ4nDL+CCMgJyA5wQr+iCnBp4g");
	var mask_graphics_442 = new cjs.Graphics().p("AJFRjQnMpzB1r/QB2sAJynLQJynMMAB2MgI4A55QsAh1nLpxg");
	var mask_graphics_443 = new cjs.Graphics().p("AJlR4QnWprBqsBQBpsCJrnUQJqnWMCBpMgH9A6CQsChpnVpqg");
	var mask_graphics_444 = new cjs.Graphics().p("AKGSOQngpkBesDQBdsDJkneQJingMDBdMgHCA6KQsEhdnepig");
	var mask_graphics_445 = new cjs.Graphics().p("AKnSjQnppcBRsEQBRsFJcnoQJbnpMEBRMgGHA6QQsFhRnopag");
	var mask_graphics_446 = new cjs.Graphics().p("ALJS4QnzpUBFsFQBFsGJUnxQJTnzMGBFMgFNA6WQsGhFnxpTg");
	var mask_graphics_447 = new cjs.Graphics().p("ALrTNQn8pMA4sGQA5sHJMn6QJLn9MHA5MgERA6bQsHg5n7pLg");
	var mask_graphics_448 = new cjs.Graphics().p("AMNTjQoFpFAssGQAtsIJEoEQJCoFMIAsMgDWA6fQsIgtoEpCg");
	var mask_graphics_449 = new cjs.Graphics().p("AMwT4QoOo8AgsHQAgsJI8oNQI6oOMIAgMgCaA6hQsJggoNo6g");
	var mask_graphics_450 = new cjs.Graphics().p("ANTUNQoXo0AUsHQATsJI0oWQIyoYMJAUMgBgA6kQsJgUoWoyg");
	var mask_graphics_451 = new cjs.Graphics().p("AN3UiQohorAIsIQAHsJIrofQIqogMJAHMgAkA6lQsJgIofopg");
	var mask_graphics_452 = new cjs.Graphics().p("AOPU3QopoigFsJQgFsIIjooQIgopMJgFMAAXA6lIgNAAQsAAAojocg");
	var mask_graphics_453 = new cjs.Graphics().p("AOVVLQoxoZgRsJQgRsIIZowQIYoyMJgRMABSA6kIgvABQrrAAofoIg");
	var mask_graphics_454 = new cjs.Graphics().p("AOcVfQo6oQgdsJQgesHIRo5QIPo6MIgdMACOA6iQgpABgoAAQrVAAobnzg");
	var mask_graphics_455 = new cjs.Graphics().p("AOjVyQpCoHgqsIQgpsHIHpBQIGpCMIgqMADJA6gQg6ADg4AAQrBAAoWngg");
	var mask_graphics_456 = new cjs.Graphics().p("AOrWFQpLn+g2sHQg2sHH/pJQH8pKMHg2MAEFA6cQhKAFhJAAQqsAAoRnMg");
	var mask_graphics_457 = new cjs.Graphics().p("AOzWXQpTn1hCsGQhCsFH1pRQHzpTMGhCMAFAA6XQhbAIhYAAQqZAAoLm5g");
	var mask_graphics_458 = new cjs.Graphics().p("AO7WoQpbnrhOsFQhPsEHspZQHqpaMFhPMAF6A6SQhqALhoAAQqFAAoGmng");
	var mask_graphics_459 = new cjs.Graphics().p("APDW5QpinihbsDQhasDHiphQHgpiMEhaMAG1A6LQh6AOh3AAQpzAAoAmUg");
	var mask_graphics_460 = new cjs.Graphics().p("APMXJQpqnYhnsCQhnsBHZpoQHWpqMChnMAHxA6EQiKATiFAAQpiAAn5mDg");
	var mask_graphics_461 = new cjs.Graphics().p("APVXZQpxnPhzsAQhzr/HOpwQHNpxMAhzMAIsA58QiaAXiTAAQpQAAnzlxg");
	var mask_graphics_462 = new cjs.Graphics().p("APeXoQp4nFh/r+Qh/r+HEp2QHDp4L/iAMAJlA5zQioAciiAAQo/AAnslgg");
	var mask_graphics_463 = new cjs.Graphics().p("APoX2Qp/m6iMr9QiLr7G7p+QG4p/L9iLMAKgA5oQi4AhiwAAQouAAnklPg");
	var mask_graphics_464 = new cjs.Graphics().p("APyYEQqGmwiYr6QiXr6GwqEQGvqGL6iYMALaA5dQjGAoi+AAQodAAndk/g");
	var mask_graphics_465 = new cjs.Graphics().p("AP8YRQqNmmijr4Qikr2GmqMQGlqML3ikMAMVA5RQjUAujNAAQoNAAnVkvg");
	var mask_graphics_466 = new cjs.Graphics().p("AQHYdQqUmbivr1Qiwr0GcqSQGaqTL1iwMANPA5EQjjA1jaAAQn9AAnNkgg");
	var mask_graphics_467 = new cjs.Graphics().p("AQSYpQqamRi8ryQi7rxGRqYQGQqaLyi7MAOIA42QjxA7jnAAQnuAAnEkQg");
	var mask_graphics_468 = new cjs.Graphics().p("AQdY0QqgmGjIrvQjGruGGqfQGFqgLvjHMAPBA4nQj+BEj1AAQnfAAm7kCg");
	var mask_graphics_469 = new cjs.Graphics().p("AQoY/Qqml8jTrrQjSrrF7qlQF6qmLsjTMAP7A4YQkMBLkDAAQnPAAmzjzg");
	var mask_graphics_470 = new cjs.Graphics().p("AQ0ZJQqslxjfroQjernFwqrQFwqsLojfMAQ0A4HQkZBUkQAAQnBAAmpjlg");
	var mask_graphics_471 = new cjs.Graphics().p("ARAZSQqylmjrrkQjprkFlqxQFlqxLkjrMARtA32QkmBdkdAAQmzAAmfjYg");
	var mask_graphics_472 = new cjs.Graphics().p("ARrZuQrElBkTrXQkRrWFArDQE/rDLXkTMAUrA20QlPB/lMAAQmCAAl8isg");
	var mask_graphics_473 = new cjs.Graphics().p("ASZaCQrUkak5rIQk4rGEarTQEYrULHk5MAXmA1oQl3Cll5AAQlUAAlWiFg");
	var mask_graphics_474 = new cjs.Graphics().p("ATLaOQrjjylfq2Qldq1DyrgQDxriK2lfMAacA0RQmbDQmpAAQkmAAkshjg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(409).to({graphics:mask_graphics_409,x:281.9,y:117.3}).wait(1).to({graphics:mask_graphics_410,x:280.7,y:118.2}).wait(1).to({graphics:mask_graphics_411,x:279.5,y:119}).wait(1).to({graphics:mask_graphics_412,x:278.3,y:119.9}).wait(1).to({graphics:mask_graphics_413,x:277.1,y:120.7}).wait(1).to({graphics:mask_graphics_414,x:275.9,y:121.6}).wait(1).to({graphics:mask_graphics_415,x:274.7,y:122.4}).wait(1).to({graphics:mask_graphics_416,x:273.4,y:123.2}).wait(1).to({graphics:mask_graphics_417,x:272.2,y:123.9}).wait(1).to({graphics:mask_graphics_418,x:270.9,y:124.7}).wait(1).to({graphics:mask_graphics_419,x:269.6,y:125.4}).wait(1).to({graphics:mask_graphics_420,x:268.3,y:126.1}).wait(1).to({graphics:mask_graphics_421,x:267,y:126.8}).wait(1).to({graphics:mask_graphics_422,x:265.7,y:127.5}).wait(1).to({graphics:mask_graphics_423,x:264.4,y:128.2}).wait(1).to({graphics:mask_graphics_424,x:263,y:128.8}).wait(1).to({graphics:mask_graphics_425,x:261.7,y:129.4}).wait(1).to({graphics:mask_graphics_426,x:260.3,y:130}).wait(1).to({graphics:mask_graphics_427,x:258.9,y:130.6}).wait(1).to({graphics:mask_graphics_428,x:257.6,y:131.1}).wait(1).to({graphics:mask_graphics_429,x:256.2,y:131.7}).wait(1).to({graphics:mask_graphics_430,x:254.8,y:132.2}).wait(1).to({graphics:mask_graphics_431,x:253.4,y:132.7}).wait(1).to({graphics:mask_graphics_432,x:252,y:133.2}).wait(1).to({graphics:mask_graphics_433,x:250.6,y:133.6}).wait(1).to({graphics:mask_graphics_434,x:249.1,y:134.1}).wait(1).to({graphics:mask_graphics_435,x:247.7,y:134.5}).wait(1).to({graphics:mask_graphics_436,x:246.3,y:134.9}).wait(1).to({graphics:mask_graphics_437,x:244.8,y:135.2}).wait(1).to({graphics:mask_graphics_438,x:243.4,y:135.6}).wait(1).to({graphics:mask_graphics_439,x:241.9,y:135.9}).wait(1).to({graphics:mask_graphics_440,x:240.5,y:136.2}).wait(1).to({graphics:mask_graphics_441,x:239,y:136.5}).wait(1).to({graphics:mask_graphics_442,x:237.6,y:136.8}).wait(1).to({graphics:mask_graphics_443,x:236.1,y:137}).wait(1).to({graphics:mask_graphics_444,x:234.6,y:137.2}).wait(1).to({graphics:mask_graphics_445,x:233.1,y:137.4}).wait(1).to({graphics:mask_graphics_446,x:231.7,y:137.5}).wait(1).to({graphics:mask_graphics_447,x:230.2,y:137.7}).wait(1).to({graphics:mask_graphics_448,x:228.7,y:137.8}).wait(1).to({graphics:mask_graphics_449,x:227.2,y:137.9}).wait(1).to({graphics:mask_graphics_450,x:225.8,y:137.9}).wait(1).to({graphics:mask_graphics_451,x:224.3,y:138}).wait(1).to({graphics:mask_graphics_452,x:223.9,y:138}).wait(1).to({graphics:mask_graphics_453,x:225.4,y:138}).wait(1).to({graphics:mask_graphics_454,x:226.9,y:138.1}).wait(1).to({graphics:mask_graphics_455,x:228.4,y:138.2}).wait(1).to({graphics:mask_graphics_456,x:229.9,y:138.3}).wait(1).to({graphics:mask_graphics_457,x:231.4,y:138.4}).wait(1).to({graphics:mask_graphics_458,x:232.8,y:138.6}).wait(1).to({graphics:mask_graphics_459,x:234.3,y:138.7}).wait(1).to({graphics:mask_graphics_460,x:235.8,y:139}).wait(1).to({graphics:mask_graphics_461,x:237.3,y:139.2}).wait(1).to({graphics:mask_graphics_462,x:238.7,y:139.4}).wait(1).to({graphics:mask_graphics_463,x:240.2,y:139.7}).wait(1).to({graphics:mask_graphics_464,x:241.6,y:140}).wait(1).to({graphics:mask_graphics_465,x:243.1,y:140.3}).wait(1).to({graphics:mask_graphics_466,x:244.6,y:140.7}).wait(1).to({graphics:mask_graphics_467,x:246,y:141}).wait(1).to({graphics:mask_graphics_468,x:247.4,y:141.4}).wait(1).to({graphics:mask_graphics_469,x:248.9,y:141.8}).wait(1).to({graphics:mask_graphics_470,x:250.3,y:142.3}).wait(1).to({graphics:mask_graphics_471,x:251.7,y:142.7}).wait(1).to({graphics:mask_graphics_472,x:256.4,y:144.4}).wait(1).to({graphics:mask_graphics_473,x:261.1,y:146.3}).wait(1).to({graphics:mask_graphics_474,x:265.7,y:148.4}).wait(81));

	// Layer 12
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("AS1E1QrSKtpUs+QpVs+nuAz");
	this.shape_1.setTransform(362.5,206);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(409).to({_off:false},0).wait(146));

	// Layer 9 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_334 = new cjs.Graphics().p("AMBNmIIwrNIA1ApIowLNg");
	var mask_1_graphics_335 = new cjs.Graphics().p("Ak5FMIIvrMIBEA1IovLMg");
	var mask_1_graphics_336 = new cjs.Graphics().p("AlBFGIIvrMIBUBBIovLMg");
	var mask_1_graphics_337 = new cjs.Graphics().p("AlJE/IIvrLIBkBNIovLMg");
	var mask_1_graphics_338 = new cjs.Graphics().p("AlRE5IIvrMIB0BbIovLMg");
	var mask_1_graphics_339 = new cjs.Graphics().p("AlZEzIIvrMICEBnIovLMg");
	var mask_1_graphics_340 = new cjs.Graphics().p("AlhEtIIvrMICUBzIovLMg");
	var mask_1_graphics_341 = new cjs.Graphics().p("AlpEnIIvrMICkB/IovLMg");
	var mask_1_graphics_342 = new cjs.Graphics().p("AlxEgIIvrLIC0CLIovLMg");
	var mask_1_graphics_343 = new cjs.Graphics().p("Al5EaIIvrLIDECYIovLLg");
	var mask_1_graphics_344 = new cjs.Graphics().p("AmAEUIIvrMIDSClIouLMg");
	var mask_1_graphics_345 = new cjs.Graphics().p("AmIEOIIvrMIDjCxIovLMg");
	var mask_1_graphics_346 = new cjs.Graphics().p("AmQEIIIvrMIDyC9IovLMg");
	var mask_1_graphics_347 = new cjs.Graphics().p("AmYECIIvrMIECDJIovLMg");
	var mask_1_graphics_348 = new cjs.Graphics().p("AmgD7IIvrLIESDWIovLLg");
	var mask_1_graphics_349 = new cjs.Graphics().p("AmoD1IIvrMIEiDjIovLMg");
	var mask_1_graphics_350 = new cjs.Graphics().p("AmwDvIIvrMIEyDvIovLMg");
	var mask_1_graphics_351 = new cjs.Graphics().p("Am4DpIIvrMIFCD7IovLMg");
	var mask_1_graphics_352 = new cjs.Graphics().p("AnADjIIvrMIFSEHIovLMg");
	var mask_1_graphics_353 = new cjs.Graphics().p("AnIDdIIvrMIFiETIovLMg");
	var mask_1_graphics_354 = new cjs.Graphics().p("AnPDWIIvrLIFxEgIovLLg");
	var mask_1_graphics_355 = new cjs.Graphics().p("AnXDQIIvrMIGBEtIowLMg");
	var mask_1_graphics_356 = new cjs.Graphics().p("AnfDKIIvrMIGQE5IovLMg");
	var mask_1_graphics_357 = new cjs.Graphics().p("AnnDEIIvrMIGgFFIovLMg");
	var mask_1_graphics_358 = new cjs.Graphics().p("AnvC+IIvrMIGwFRIovLMg");
	var mask_1_graphics_359 = new cjs.Graphics().p("An3C3IIvrLIHAFeIovLLg");
	var mask_1_graphics_360 = new cjs.Graphics().p("An/CxIIvrLIHQFpIovLNg");
	var mask_1_graphics_361 = new cjs.Graphics().p("AoHCrIIvrMIHgF3IovLMg");
	var mask_1_graphics_362 = new cjs.Graphics().p("AoPClIIvrMIHwGDIovLMg");
	var mask_1_graphics_363 = new cjs.Graphics().p("AoXCfIIvrMIIAGPIovLMg");
	var mask_1_graphics_364 = new cjs.Graphics().p("AoeCZIIvrMIIOGbIovLMg");
	var mask_1_graphics_365 = new cjs.Graphics().p("AomCSIIvrLIIeGoIouLMg");
	var mask_1_graphics_366 = new cjs.Graphics().p("AouCMIIvrMIIvG1IowLMg");
	var mask_1_graphics_367 = new cjs.Graphics().p("Ao2CGIIwrMII9HBIowLMg");
	var mask_1_graphics_368 = new cjs.Graphics().p("Ao+CAIIwrMIJNHNIowLMg");
	var mask_1_graphics_369 = new cjs.Graphics().p("ApGB6IIwrMIJdHZIowLMg");
	var mask_1_graphics_370 = new cjs.Graphics().p("ApOB0IIwrMIJtHlIowLMg");
	var mask_1_graphics_371 = new cjs.Graphics().p("ApWBtIIwrLIJ9HxIowLNg");
	var mask_1_graphics_372 = new cjs.Graphics().p("ApeBnIIwrMIKNH/IowLMg");
	var mask_1_graphics_373 = new cjs.Graphics().p("ApmBhIIwrMIKdILIowLMg");
	var mask_1_graphics_374 = new cjs.Graphics().p("ApuBbIIwrMIKtIXIowLMg");
	var mask_1_graphics_375 = new cjs.Graphics().p("Ap1BVIIwrMIK8IjIoxLMg");
	var mask_1_graphics_376 = new cjs.Graphics().p("Ap9BOIIwrLILLIvIowLNg");
	var mask_1_graphics_377 = new cjs.Graphics().p("AqFBIIIwrLILbI7IowLMg");
	var mask_1_graphics_378 = new cjs.Graphics().p("AqNBCIIwrMILrJJIowLMg");
	var mask_1_graphics_379 = new cjs.Graphics().p("AqVA8IIwrMIL7JVIowLMg");
	var mask_1_graphics_380 = new cjs.Graphics().p("AqdA2IIwrMIMLJhIowLMg");
	var mask_1_graphics_381 = new cjs.Graphics().p("AqlAwIIwrMIMbJtIowLMg");
	var mask_1_graphics_382 = new cjs.Graphics().p("AqtApIIwrLIMrJ5IowLNg");
	var mask_1_graphics_383 = new cjs.Graphics().p("Aq1AjIIwrMIM7KHIowLMg");
	var mask_1_graphics_384 = new cjs.Graphics().p("Aq9AdIIwrMINLKTIowLMg");
	var mask_1_graphics_385 = new cjs.Graphics().p("ArEAXIIwrMINZKfIowLMg");
	var mask_1_graphics_386 = new cjs.Graphics().p("ArMARIIwrMINpKrIovLMg");
	var mask_1_graphics_387 = new cjs.Graphics().p("ArUALIIwrMIN6K3IowLMg");
	var mask_1_graphics_388 = new cjs.Graphics().p("ArcAEIIwrLIOJLDIowLMg");
	var mask_1_graphics_389 = new cjs.Graphics().p("ArkgBIIwrNIOZLQIowLNg");
	var mask_1_graphics_390 = new cjs.Graphics().p("ArsgHIIwrNIOpLcIowLNg");
	var mask_1_graphics_391 = new cjs.Graphics().p("Ar0gNIIwrNIO5LoIowLNg");
	var mask_1_graphics_392 = new cjs.Graphics().p("Ar8gTIIwrNIPJL0IowLNg");
	var mask_1_graphics_393 = new cjs.Graphics().p("AsEgaIIwrMIPZMAIowLNg");
	var mask_1_graphics_394 = new cjs.Graphics().p("AsMggIIwrMIPpMNIowLMg");
	var mask_1_graphics_395 = new cjs.Graphics().p("AsTgmIIwrNIP4MaIowLNg");
	var mask_1_graphics_396 = new cjs.Graphics().p("AsbgsIIwrNIQIMmIoxLNg");
	var mask_1_graphics_397 = new cjs.Graphics().p("AsjgyIIwrNIQXMyIowLNg");
	var mask_1_graphics_398 = new cjs.Graphics().p("Asrg4IIwrNIQnM+IowLNg");
	var mask_1_graphics_399 = new cjs.Graphics().p("Aszg/IIwrMIQ3NLIowLMg");
	var mask_1_graphics_400 = new cjs.Graphics().p("As7hFIIwrNIRHNYIowLNg");
	var mask_1_graphics_401 = new cjs.Graphics().p("AtDhLIIwrNIRXNkIowLNg");
	var mask_1_graphics_402 = new cjs.Graphics().p("AtLhRIIwrNIRnNwIowLNg");
	var mask_1_graphics_403 = new cjs.Graphics().p("AtThXIIwrNIR3N8IowLNg");
	var mask_1_graphics_404 = new cjs.Graphics().p("AtbhdIIwrNISHOIIowLNg");
	var mask_1_graphics_405 = new cjs.Graphics().p("AtjhkIIwrMISXOVIowLMg");
	var mask_1_graphics_406 = new cjs.Graphics().p("AtqhqIIwrNISlOiIovLNg");
	var mask_1_graphics_407 = new cjs.Graphics().p("AtyhwIIwrNIS2OuIowLNg");
	var mask_1_graphics_408 = new cjs.Graphics().p("At6h2IIwrNITFO6IowLNg");
	var mask_1_graphics_409 = new cjs.Graphics().p("ACwGXIIxrMITWPGIowLNg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(334).to({graphics:mask_1_graphics_334,x:138.2,y:91.1}).wait(1).to({graphics:mask_1_graphics_335,x:246.6,y:145}).wait(1).to({graphics:mask_1_graphics_336,x:247.4,y:145.6}).wait(1).to({graphics:mask_1_graphics_337,x:248.2,y:146.2}).wait(1).to({graphics:mask_1_graphics_338,x:249,y:146.8}).wait(1).to({graphics:mask_1_graphics_339,x:249.8,y:147.5}).wait(1).to({graphics:mask_1_graphics_340,x:250.6,y:148.1}).wait(1).to({graphics:mask_1_graphics_341,x:251.3,y:148.7}).wait(1).to({graphics:mask_1_graphics_342,x:252.1,y:149.3}).wait(1).to({graphics:mask_1_graphics_343,x:252.9,y:149.9}).wait(1).to({graphics:mask_1_graphics_344,x:253.7,y:150.5}).wait(1).to({graphics:mask_1_graphics_345,x:254.5,y:151.2}).wait(1).to({graphics:mask_1_graphics_346,x:255.3,y:151.8}).wait(1).to({graphics:mask_1_graphics_347,x:256.1,y:152.4}).wait(1).to({graphics:mask_1_graphics_348,x:256.9,y:153}).wait(1).to({graphics:mask_1_graphics_349,x:257.7,y:153.6}).wait(1).to({graphics:mask_1_graphics_350,x:258.5,y:154.2}).wait(1).to({graphics:mask_1_graphics_351,x:259.2,y:154.9}).wait(1).to({graphics:mask_1_graphics_352,x:260,y:155.5}).wait(1).to({graphics:mask_1_graphics_353,x:260.8,y:156.1}).wait(1).to({graphics:mask_1_graphics_354,x:261.6,y:156.7}).wait(1).to({graphics:mask_1_graphics_355,x:262.4,y:157.3}).wait(1).to({graphics:mask_1_graphics_356,x:263.2,y:158}).wait(1).to({graphics:mask_1_graphics_357,x:264,y:158.6}).wait(1).to({graphics:mask_1_graphics_358,x:264.8,y:159.2}).wait(1).to({graphics:mask_1_graphics_359,x:265.6,y:159.8}).wait(1).to({graphics:mask_1_graphics_360,x:266.4,y:160.4}).wait(1).to({graphics:mask_1_graphics_361,x:267.2,y:161}).wait(1).to({graphics:mask_1_graphics_362,x:267.9,y:161.7}).wait(1).to({graphics:mask_1_graphics_363,x:268.7,y:162.3}).wait(1).to({graphics:mask_1_graphics_364,x:269.5,y:162.9}).wait(1).to({graphics:mask_1_graphics_365,x:270.3,y:163.5}).wait(1).to({graphics:mask_1_graphics_366,x:271.1,y:164.1}).wait(1).to({graphics:mask_1_graphics_367,x:271.9,y:164.7}).wait(1).to({graphics:mask_1_graphics_368,x:272.7,y:165.4}).wait(1).to({graphics:mask_1_graphics_369,x:273.5,y:166}).wait(1).to({graphics:mask_1_graphics_370,x:274.3,y:166.6}).wait(1).to({graphics:mask_1_graphics_371,x:275.1,y:167.2}).wait(1).to({graphics:mask_1_graphics_372,x:275.8,y:167.8}).wait(1).to({graphics:mask_1_graphics_373,x:276.6,y:168.5}).wait(1).to({graphics:mask_1_graphics_374,x:277.4,y:169.1}).wait(1).to({graphics:mask_1_graphics_375,x:278.2,y:169.7}).wait(1).to({graphics:mask_1_graphics_376,x:279,y:170.3}).wait(1).to({graphics:mask_1_graphics_377,x:279.8,y:170.9}).wait(1).to({graphics:mask_1_graphics_378,x:280.6,y:171.5}).wait(1).to({graphics:mask_1_graphics_379,x:281.4,y:172.2}).wait(1).to({graphics:mask_1_graphics_380,x:282.2,y:172.8}).wait(1).to({graphics:mask_1_graphics_381,x:283,y:173.4}).wait(1).to({graphics:mask_1_graphics_382,x:283.7,y:174}).wait(1).to({graphics:mask_1_graphics_383,x:284.5,y:174.6}).wait(1).to({graphics:mask_1_graphics_384,x:285.3,y:175.2}).wait(1).to({graphics:mask_1_graphics_385,x:286.1,y:175.9}).wait(1).to({graphics:mask_1_graphics_386,x:286.9,y:176.5}).wait(1).to({graphics:mask_1_graphics_387,x:287.7,y:177.1}).wait(1).to({graphics:mask_1_graphics_388,x:288.5,y:177.7}).wait(1).to({graphics:mask_1_graphics_389,x:289.3,y:178.3}).wait(1).to({graphics:mask_1_graphics_390,x:290.1,y:179}).wait(1).to({graphics:mask_1_graphics_391,x:290.9,y:179.6}).wait(1).to({graphics:mask_1_graphics_392,x:291.7,y:180.2}).wait(1).to({graphics:mask_1_graphics_393,x:292.4,y:180.8}).wait(1).to({graphics:mask_1_graphics_394,x:293.2,y:181.4}).wait(1).to({graphics:mask_1_graphics_395,x:294,y:182}).wait(1).to({graphics:mask_1_graphics_396,x:294.8,y:182.7}).wait(1).to({graphics:mask_1_graphics_397,x:295.6,y:183.3}).wait(1).to({graphics:mask_1_graphics_398,x:296.4,y:183.9}).wait(1).to({graphics:mask_1_graphics_399,x:297.2,y:184.5}).wait(1).to({graphics:mask_1_graphics_400,x:298,y:185.1}).wait(1).to({graphics:mask_1_graphics_401,x:298.8,y:185.7}).wait(1).to({graphics:mask_1_graphics_402,x:299.6,y:186.4}).wait(1).to({graphics:mask_1_graphics_403,x:300.3,y:187}).wait(1).to({graphics:mask_1_graphics_404,x:301.1,y:187.6}).wait(1).to({graphics:mask_1_graphics_405,x:301.9,y:188.2}).wait(1).to({graphics:mask_1_graphics_406,x:302.7,y:188.8}).wait(1).to({graphics:mask_1_graphics_407,x:303.5,y:189.5}).wait(1).to({graphics:mask_1_graphics_408,x:304.3,y:190.1}).wait(1).to({graphics:mask_1_graphics_409,x:197.5,y:137.4}).wait(146));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("AS1E1QrSKtpUs+QpVs+nuAz");
	this.shape_2.setTransform(362.5,206);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(334).to({_off:false},0).wait(221));

	// Layer 10
	this.instance_2 = new lib.ar4("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(156,104,1,1,129.8,0,0,-0.1,-0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(546));

	// Layer 5 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_159 = new cjs.Graphics().p("AokWCQn8pMA4sHQA5sGJMn7QJKn8MHA5MgESA6bQsGg5n6pLg");
	var mask_2_graphics_160 = new cjs.Graphics().p("AoFWVQoFpFAusHQAusHJFoDQJCoFMIAuMgDcA6eQsHgtoDpEg");
	var mask_2_graphics_161 = new cjs.Graphics().p("AnlWpQoNo+AisIQAisHI+oMQI7oMMIAiMgCmA6hQsIgioKo8g");
	var mask_2_graphics_162 = new cjs.Graphics().p("AnFW8QoWo2AYsIQAXsII1oUQI0oVMIAXMgBvA6kQsJgYoSo0g");
	var mask_2_graphics_163 = new cjs.Graphics().p("AmlXPQoeouAMsJQAMsIIuobQIsoeMJAMMgA6A6lQsJgMoaotg");
	var mask_2_graphics_164 = new cjs.Graphics().p("AmFXiQolomABsJQAAsIInojQIjomMJABMgADA6lQsJgBojolg");
	var mask_2_graphics_165 = new cjs.Graphics().p("Al9X1QotoegLsJQgLsIIforQIbotMJgLMAAzA6lIgdAAQr2AAogoTg");
	var mask_2_graphics_166 = new cjs.Graphics().p("Al3YIQo1oWgWsJQgWsHIWo0QIUo1MJgVMABpA6jIg9ABQriAAocoAg");
	var mask_2_graphics_167 = new cjs.Graphics().p("AlxYaQo8oNghsJQghsHIOo7QILo9MIghMACfA6iQguACgtAAQrPAAoYnug");
	var mask_2_graphics_168 = new cjs.Graphics().p("AlqYsQpEoFgtsIQgssHIGpCQIDpEMIgsMADVA6eQg9AEg8AAQq8AAoUncg");
	var mask_2_graphics_169 = new cjs.Graphics().p("AljY+QpMn9g3sHQg4sGH+pKQH7pLMGg4MAEMA6cQhNAFhKAAQqqAAoPnKg");
	var mask_2_graphics_170 = new cjs.Graphics().p("AlcZQQpTn1hCsGQhDsFH1pSQHzpSMFhDMAFBA6XQhbAIhYAAQqZAAoKm4g");
	var mask_2_graphics_171 = new cjs.Graphics().p("AlVZhQpanshNsFQhOsEHspZQHrpaMEhOMAF3A6TQhqAKhmAAQqHAAoGmng");
	var mask_2_graphics_172 = new cjs.Graphics().p("AlNZxQphnjhZsEQhZsDHkpfQHiphMChZMAGtA6MQh4AOh0AAQp2AAoAmXg");
	var mask_2_graphics_173 = new cjs.Graphics().p("AlFaCQponahksDQhksBHbpnQHZpoMBhkMAHjA6GQiGARiCAAQpmAAn6mGg");
	var mask_2_graphics_174 = new cjs.Graphics().p("Ak8aSQpvnRhvsBQhvsAHRpuQHQpuMAhvMAIZA5+QiVAViPAAQpVABn0l3g");
	var mask_2_graphics_175 = new cjs.Graphics().p("Ak0aiQp1nIh6sAQh7r+HJp0QHHp1L+h6MAJOA52QiiAaicAAQpGAAnulng");
	var mask_2_graphics_176 = new cjs.Graphics().p("AkraxQp8m/iFr9QiFr9G/p6QG+p8L8iFMAKEA5tQiwAfiqAAQo2AAnnlYg");
	var mask_2_graphics_177 = new cjs.Graphics().p("AkibBQqCm2iQr8QiRr6G2qBQG1qCL6iRMAK5A5kQi9Aki3AAQomAAnhlIg");
	var mask_2_graphics_178 = new cjs.Graphics().p("AkYbPQqJmsibr6Qicr4GtqHQGrqIL5icMALuA5aQjLApjDAAQoYAAnZk6g");
	var mask_2_graphics_179 = new cjs.Graphics().p("AkPbeQqOmjinr3Qimr2GjqNQGiqPL2imMAMjA5OQjYAvjPAAQoKAAnSkrg");
	var mask_2_graphics_180 = new cjs.Graphics().p("AkFbsQqVmaixr0QixrzGaqUQGYqUL0ixMANXA5CQjkA1jcAAQn7AAnLkdg");
	var mask_2_graphics_181 = new cjs.Graphics().p("Aj7b6QqamQi9ryQi8rxGRqZQGOqaLxi8MAONA41QjyA8joAAQntAAnDkPg");
	var mask_2_graphics_182 = new cjs.Graphics().p("AjwcIQqhmHjHrvQjHruGHqfQGFqfLujIMAPBA4oQj+BDj1AAQnfAAm6kBg");
	var mask_2_graphics_183 = new cjs.Graphics().p("AjmcVQqml9jSrsQjSrrF+qkQF7qmLrjSMAP1A4aQkKBKkBAAQnSAAmyj0g");
	var mask_2_graphics_184 = new cjs.Graphics().p("AjbciQqrlzjdrpQjdroF0qqQFxqrLojcMAQpA4KQkWBTkOAAQnDAAmqjog");
	var mask_2_graphics_185 = new cjs.Graphics().p("AjQcuQqxlpjnrlQjnrlFpqvQFoqwLkjoMARdA37QkiBbkaAAQm2AAmhjcg");
	var mask_2_graphics_186 = new cjs.Graphics().p("AjFc7Qq1lfjzrjQjyriFgqzQFdq1LijyMASQA3qQkuBjkmAAQmpAAmYjPg");
	var mask_2_graphics_187 = new cjs.Graphics().p("Ai5dHQq7lVj9rfQj8rfFVq4QFUq6Ldj9MATEA3ZQk5BskyAAQmdAAmOjDg");
	var mask_2_graphics_188 = new cjs.Graphics().p("AiudSQq/lLkHrbQkIrbFMq9QFJq/LbkHMAT2A3HQlEB1k/AAQmPAAmGi4g");
	var mask_2_graphics_189 = new cjs.Graphics().p("AiiddQrElAkSrXQkSrXFCrCQE/rELXkSMAUpA20QlQB/lLAAQmCAAl8itg");
	var mask_2_graphics_190 = new cjs.Graphics().p("AiVdoQrJk2kdrTQkcrTE3rHQE1rILTkcMAVbA2hQlaCIlXAAQl2AAlxiig");
	var mask_2_graphics_191 = new cjs.Graphics().p("AiJdzQrNksknrPQknrPEtrLQEqrMLPknMAWOA2MQllCTlkAAQlpAAlniXg");
	var mask_2_graphics_192 = new cjs.Graphics().p("Ah9d9QrRkikxrKQkxrLEirPQEgrRLLkxMAW/A14QlvCdlwAAQldAAldiNg");
	var mask_2_graphics_193 = new cjs.Graphics().p("AhweHQrVkXk8rGQk7rGEYrUQEVrULHk8MAXxA1iQl5Col9AAQlQAAlTiDg");
	var mask_2_graphics_194 = new cjs.Graphics().p("AhjeRQrZkNlGrCQlGrBEOrXQELrZLBlGMAYjA1MQmDCymJAAQlEAAlIh4g");
	var mask_2_graphics_195 = new cjs.Graphics().p("AhWeaQrdkClQq9QlQq9EDrbQEBrcK9lQMAZTA00QmMC+mXAAQk3AAk9hvg");
	var mask_2_graphics_196 = new cjs.Graphics().p("AhIeiQrhj3laq4Qlaq3D4rfQD2rgK4laMAaEA0cQmWDKmjAAQkrAAkxhng");
	var mask_2_graphics_197 = new cjs.Graphics().p("Ag7erQrkjtlkqzQlkqyDuriQDrrkKzlkMAa0A0EQmfDWmwAAQkfAAkmheg");
	var mask_2_graphics_198 = new cjs.Graphics().p("AgtezQrojiluquQltqtDirlQDhroKultMAbkAzrQmoDim9AAQkTAAkahWg");
	var mask_2_graphics_199 = new cjs.Graphics().p("Agfe7QrrjYl4qoQl3qoDYroQDWrrKol3MAcUAzRQmxDvnLAAQkGAAkOhOg");
	var mask_2_graphics_200 = new cjs.Graphics().p("AgRfCQrujMmBqjQmCqjDOrrQDLruKimBMAdEAy3Qm5D8nZAAQj6AAkChHg");
	var mask_2_graphics_201 = new cjs.Graphics().p("AgCfJQrxjCmMqcQmLqdDDrvQDArwKdmLMAdyAybQnBEKnmAAQjuAAj1hAg");
	var mask_2_graphics_202 = new cjs.Graphics().p("AALfQQrzi3mUqXQmVqXC3ryQC2ryKXmVMAehAx/QnJEXn1AAQjhAAjqg4g");
	var mask_2_graphics_203 = new cjs.Graphics().p("AAafWQr1ismfqRQmeqRCtr0QCqr2KRmeMAfPAxjQnREloCAAQjVAAjdgyg");
	var mask_2_graphics_204 = new cjs.Graphics().p("AApfcQr4ihmoqLQmnqLChr3QCgr3KLmoMAf8AxGQnYEzoRAAQjIAAjQgsg");
	var mask_2_graphics_205 = new cjs.Graphics().p("AA5fiQr6iVmyqEQmyqFCWr4QCTr7KFmyMAguAwlQnhFEohAAQi6AAjCgmg");
	var mask_2_graphics_206 = new cjs.Graphics().p("ABKfoQr8iJm9p+Qm8p9CKr7QCHr9J+m8MAhfAwEQnoFUoxAAQitAAizggg");
	var mask_2_graphics_207 = new cjs.Graphics().p("ABbftQr+h9nHp2QnGp3B+r9QB7r+J2nHMAiQAviQnvFkpDAAQieAAikgag");
	var mask_2_graphics_208 = new cjs.Graphics().p("ABsfxQsAhwnQpvQnQpvBxr/QBvsBJvnQMAi/Au+Qn1F2pUAAQiQAAiVgWg");
	var mask_2_graphics_209 = new cjs.Graphics().p("AB+f1QsChknapnQnapoBlsBQBjsCJonaMAjuAubQn8GHplAAQiCAAiFgSg");
	var mask_2_graphics_210 = new cjs.Graphics().p("ACPf5QsDhYnkpgQnkpgBZsCQBXsEJgnjMAkdAt1QoCGap3AAQhzAAh2gOg");
	var mask_2_graphics_211 = new cjs.Graphics().p("AChf8QsFhLntpZQntpYBNsEQBKsEJYnuMAlMAtRQoJGsqJAAQhkAAhmgLg");
	var mask_2_graphics_212 = new cjs.Graphics().p("ACzf/QsGg/n3pRQn2pQBAsGQA/sFJQn2MAl5AsqQoOG+qcAAQhVAAhWgHg");
	var mask_2_graphics_213 = new cjs.Graphics().p("EADFAgCQsHg0oApIQoApJA1sGQAysGJIoAMAmmAsEQoTHRqwAAQhFAAhGgEg");
	var mask_2_graphics_214 = new cjs.Graphics().p("EADXAgDQsHgnoJpAQoJpAAosHQAmsHJAoJMAnSArcQoYHlrEAAQg1AAg2gDg");
	var mask_2_graphics_215 = new cjs.Graphics().p("EADqAgFQsIgboSo4QoSo4AbsIQAasHI4oSMAn+Aq0QodH5rYAAIhKgBg");
	var mask_2_graphics_216 = new cjs.Graphics().p("EAD9AgFQsIgOobovQocowAQsIQANsHIwobMAopAqLQohINruAAIgogBg");
	var mask_2_graphics_217 = new cjs.Graphics().p("EAEQAgGQsIgCokonQokonADsIQABsIInokMApTApiQolIisDAAIgGAAg");
	var mask_2_graphics_218 = new cjs.Graphics().p("AwSXyQosoegJsJQgMsHIfotMAp9Ao4QofIssHALIgcAAQr2AAojoUg");
	var mask_2_graphics_219 = new cjs.Graphics().p("AwGYGQo2oVgVsIQgXsHIVo1MAqmAoMQoVI1sHAXIg/ABQrgAAoeoAg");
	var mask_2_graphics_220 = new cjs.Graphics().p("Av7YaQo9oMgisIQgksGINo+MArOAniQoMI9sHAjQgwACgwAAQrLAAoansg");
	var mask_2_graphics_221 = new cjs.Graphics().p("AvuYuQpGoDgusHQgwsGIDpGMAr2Am1QoDJGsGAvQhBAEg/AAQq4AAoUnYg");
	var mask_2_graphics_222 = new cjs.Graphics().p("AviZBQpNn6g7sGQg8sFH6pNMAsdAmIQn6JOsFA7QhRAGhQAAQqjAAoQnFg");
	var mask_2_graphics_223 = new cjs.Graphics().p("AvUZUQpWnwhHsFQhIsEHwpWMAtEAlbQnxJWsEBHQhhAJhfAAQqQAAoKmyg");
	var mask_2_graphics_224 = new cjs.Graphics().p("AvHZnQpdnnhTsEQhVsDHnpdMAtpAktQnnJdsCBUQhyAMhuAAQp9AAoFmfg");
	var mask_2_graphics_225 = new cjs.Graphics().p("Au4Z5QplndhfsDQhhsBHdplMAuOAj+QneJmsBBfQiBAQh9AAQprAAn+mNg");
	var mask_2_graphics_226 = new cjs.Graphics().p("AuqaLQpsnUhrsAQhtsAHTptMAuyAjQQnUJsr/BsQiRAViMAAQpZAAn4l8g");
	var mask_2_graphics_227 = new cjs.Graphics().p("AuaacQp0nJh4r/Qh5r+HKp0MAvVAigQnKJ0r+B4QigAZiaAAQpHAAnxlrg");
	var mask_2_graphics_228 = new cjs.Graphics().p("AuLauQp7nAiDr9QiGr8HAp7MAv4AhvQnAJ7r8CFQivAeioAAQo3AAnqlZg");
	var mask_2_graphics_229 = new cjs.Graphics().p("At7a+QqCm1iPr7QiSr6G2qCMAwZAg/Qm1KCr6CQQi+Aki2AAQomAAnjlJg");
	var mask_2_graphics_230 = new cjs.Graphics().p("AtqbPQqJmsibr4Qier4GrqIMAw7AgNQmrKJr4CcQjMAqjEAAQoWAAnbk4g");
	var mask_2_graphics_231 = new cjs.Graphics().p("AtZbfQqQmhinr2Qiqr1GhqQMAxbAfcQmhKPr1CpQjaAwjSAAQoGAAnTkog");
	var mask_2_graphics_232 = new cjs.Graphics().p("AtIbuQqWmWizr0Qi2ryGXqWMAx6AeqQmWKWryC0QjpA4jgAAQn2AAnLkag");
	var mask_2_graphics_233 = new cjs.Graphics().p("As2b9QqcmMjArwQjBrvGMqcMAyZAd2QmMKcrvDBQj3A/jtAAQnnAAnCkLg");
	var mask_2_graphics_234 = new cjs.Graphics().p("AsjcMQqjmBjLruQjOrrGCqjMAy3AdDQmCKjrsDMQkEBHj7AAQnYAAm4j8g");
	var mask_2_graphics_235 = new cjs.Graphics().p("AsRcaQqol2jXrqQjarpF3qoMAzUAcPQl3KproDYQkSBPkIAAQnJAAmwjug");
	var mask_2_graphics_236 = new cjs.Graphics().p("Ar9coQqvlrjjrnQjlrlFsquMAzwAbbQlsKurlDkQkeBYkWAAQm7AAmljgg");
	var mask_2_graphics_237 = new cjs.Graphics().p("Arqc2Qq0lhjvrjQjwriFhqzMA0LAanQlhK0rhDvQkrBhkkAAQmsAAmcjSg");
	var mask_2_graphics_238 = new cjs.Graphics().p("ArWdDQq5lWj7rfQj8reFWq4MA0mAZxQlWK6reD7Qk3BqkxAAQmeAAmSjFg");
	var mask_2_graphics_239 = new cjs.Graphics().p("ArBdQQq/lLkGrbQkIraFLq+MA0/AY8QlKK/raEHQlEB0k/AAQmPAAmHi4g");
	var mask_2_graphics_240 = new cjs.Graphics().p("AqtdcQrEk/kRrXQkUrWFArDMA1ZAYGQlALErVESQlQB/lNAAQmBAAl9isg");
	var mask_2_graphics_241 = new cjs.Graphics().p("AqXdoQrKk0kcrSQkfrSE0rIMA1xAXQQk1LJrREeQlcCJlZAAQl0AAlxigg");
	var mask_2_graphics_242 = new cjs.Graphics().p("AqCd0QrOkqkorNQkqrNEprNMA2HAWZQkpLOrMEpQlnCVloAAQllAAlniUg");
	var mask_2_graphics_243 = new cjs.Graphics().p("Apsd/QrSkek0rJQk2rIEerRMA2eAViQkeLSrHE0QlzChl1AAQlYAAlbiJg");
	var mask_2_graphics_244 = new cjs.Graphics().p("ApWeJQrXkSk+rEQlBrDESrWMA2zAUrQkSLXrCE/Ql+CtmDAAQlKAAlQh/g");
	var mask_2_graphics_245 = new cjs.Graphics().p("Ao/eUQrbkHlKq/QlMq9EHrbMA3HATzQkGLbq+FLQmIC5mRAAQk9AAlDh0g");
	var mask_2_graphics_246 = new cjs.Graphics().p("AooeeQrfj7lVq6QlXq4D7rfMA3bAS7Qj7Lgq4FVQmSDGmgAAQkvAAk3hqg");
	var mask_2_graphics_247 = new cjs.Graphics().p("AoRenQrjjvlgq0QliqzDwriMA3uASCQjwLjqyFhQmdDTmtAAQkiAAkrhhg");
	var mask_2_graphics_248 = new cjs.Graphics().p("An5ewQrnjklrquQlsqtDjrmMA4AARKQjjLnqtFrQmnDhm8AAQkUAAkehYg");
	var mask_2_graphics_249 = new cjs.Graphics().p("Anhe5QrqjYl2qpQl4qnDYrpMA4RAQRQjYLqqnF2QmwDvnKAAQkHAAkRhPg");
	var mask_2_graphics_250 = new cjs.Graphics().p("AnIfBQrujMmAqjQmDqhDMrtMA4hAPYQjMLuqhGBQm5D8naAAQj5AAkDhGg");
	var mask_2_graphics_251 = new cjs.Graphics().p("AmvfJQrxjBmLqcQmNqbDArwMA4wAOfQjALxqbGLQnCELnpAAQjsAAj1g+g");
	var mask_2_graphics_252 = new cjs.Graphics().p("AmWfQQr0i0mWqWQmXqVC0rzMA4+ANlQi0L0qUGWQnLEan4AAQjeAAjog3g");
	var mask_2_graphics_253 = new cjs.Graphics().p("Al9fXQr2ipmhqPQmhqOCor2MA5LAMrQioL3qOGgQnTEqoIAAQjQAAjagwg");
	var mask_2_graphics_254 = new cjs.Graphics().p("AljfdQr5icmrqJQmsqHCcr5MA5YALxQicL6qHGqQnbE6oYAAQjDAAjLgqg");
	var mask_2_graphics_255 = new cjs.Graphics().p("AlJfjQr7iQm1qCQm3qBCRr6MA5jAK3QiQL7qAG1QnkFKonAAQi1AAi9gkg");
	var mask_2_graphics_256 = new cjs.Graphics().p("AkvfoQr9iEm/p7QnBp5CEr9MA5vAJ8QiFL+p5G/QnrFao4AAQimAAivgeg");
	var mask_2_graphics_257 = new cjs.Graphics().p("AkWftQr/h5nIp0QnKpzB5r+MA53AJFQh5MApzHIQnxFqpIAAQiZAAihgZg");
	var mask_2_graphics_258 = new cjs.Graphics().p("Aj8fxQsChtnRpuQnTpsBtsAMA6AAIPQhuMBpsHSQn3F6pZAAQiLAAiSgVg");
	var mask_2_graphics_259 = new cjs.Graphics().p("Ajjf1QsDhinapmQncplBhsCMA6HAHXQhiMDplHbQn9GLpqAAQh9AAiEgRg");
	var mask_2_graphics_260 = new cjs.Graphics().p("AjJf4QsEhWnkpfQnlpeBWsDMA6OAGgQhXMEpeHkQoDGbp6ABQhwAAh1gOg");
	var mask_2_graphics_261 = new cjs.Graphics().p("Aivf7QsFhKntpZQnupWBLsFMA6TAFpQhLMGpXHsQoJGtqLAAQhiAAhmgKg");
	var mask_2_graphics_262 = new cjs.Graphics().p("AiVf+QsGg/n1pRQn3pPA/sHMA6YAEzQg/MGpQH2QoOG+qdAAQhUAAhXgHg");
	var mask_2_graphics_263 = new cjs.Graphics().p("EgB6AgAQsHg0n+pJQoApIA0sHMA6cAD7Qg0MHpIH/QoTHQqwAAQhFAAhHgFg");
	var mask_2_graphics_264 = new cjs.Graphics().p("EgBfAgCQsIgooHpCQoIpAAosIMA6gADEQgpMHpAIHQoYHjrCAAQg2AAg4gDg");
	var mask_2_graphics_265 = new cjs.Graphics().p("EgBEAgDQsJgdoPo5QoRo5AdsIMA6iACMQgdMIo4IQQocH1rWAAIhPgCg");
	var mask_2_graphics_266 = new cjs.Graphics().p("EgApAgEQsJgRoXoyQoaowASsJMA6kABUQgSMJowIYQogIIrqAAIgwgBg");
	var mask_2_graphics_267 = new cjs.Graphics().p("EgANAgFQsJgGogoqQoiooAGsJMA6lAAcQgGMJopIgQojIcr/AAIgPAAg");
	var mask_2_graphics_268 = new cjs.Graphics().p("A0jXpQopohgGsJMA6lgAbQAFMJogIpQoiIpsJAGIgOAAQr/AAojocg");
	var mask_2_graphics_269 = new cjs.Graphics().p("A0PX8QoyoYgRsJMA6kgBSQARMIoYIxQoZIxsJARIgvABQrqAAofoJg");
	var mask_2_graphics_270 = new cjs.Graphics().p("Az7YPQo6oQgcsIMA6igCKQAcMIoPI4QoRI6sJAcIhOACQrWAAobn2g");
	var mask_2_graphics_271 = new cjs.Graphics().p("AznYiQpCoHgosIMA6ggDCQAoMIoHJAQoJJBsIAoQg3ADg2AAQrDAAoWnjg");
	var mask_2_graphics_272 = new cjs.Graphics().p("AzTY0QpJn+g0sIMA6cgD5QA0MHn/JIQoAJJsHAzQhHAFhEAAQqwAAoSnRg");
	var mask_2_graphics_273 = new cjs.Graphics().p("AzAZGQpQn2g/sGMA6YgExQA/MHn2JPQn3JQsGA/QhWAHhUAAQqdAAoOm/g");
	var mask_2_graphics_274 = new cjs.Graphics().p("AysZYQpXnthLsFMA6TgFoQBLMFntJWQnvJYsFBLQhlAJhiAAQqMAAoImtg");
	var mask_2_graphics_275 = new cjs.Graphics().p("AyYZpQpfnkhWsEMA6OgGeQBWMDnkJdQnmJfsEBXQh0ANhwAAQp6AAoDmdg");
	var mask_2_graphics_276 = new cjs.Graphics().p("AyEZ6QpmnbhhsDMA6HgHVQBhMCnbJkQncJnsDBhQiDARh9AAQpqAAn9mMg");
	var mask_2_graphics_277 = new cjs.Graphics().p("AxwaLQptnShtsBMA6AgINQBtMAnSJsQnTJtsBBtQiSAViLAAQpZAAn3l7g");
	var mask_2_graphics_278 = new cjs.Graphics().p("AxbabQp0nIh5sAMA54gJEQB4L/nJJyQnKJ1r/B4QigAZiYAAQpJAAnwlrg");
	var mask_2_graphics_279 = new cjs.Graphics().p("AxIarQp6nAiEr9MA5vgJ5QCDL8m/J5QnBJ7r+CEQitAdimAAQo5AAnqlbg");
	var mask_2_graphics_280 = new cjs.Graphics().p("Aw0a6QqBm2iOr8MA5lgKuQCOL7m3J/Qm3KBr8CPQi7AiiyAAQoqAAnjlMg");
	var mask_2_graphics_281 = new cjs.Graphics().p("AwhbJQqHmtiZr6MA5bgLiQCZL4mtKGQmvKHr5CZQjIApi/AAQobAAndk+g");
	var mask_2_graphics_282 = new cjs.Graphics().p("AwNbYQqNmkilr3MA5QgMYQClL2mkKMQmlKOr4CkQjVAujLAAQoNAAnVkvg");
	var mask_2_graphics_283 = new cjs.Graphics().p("Av5bmQqUmaivr1MA5EgNMQCvL0maKRQmcKUr1CvQjhA0jYAAQn/AAnNkhg");
	var mask_2_graphics_284 = new cjs.Graphics().p("Avmb0QqZmRi6ryMA44gOBQC6LymRKXQmSKZrzC6QjuA7jkAAQnxAAnGkTg");
	var mask_2_graphics_285 = new cjs.Graphics().p("AvScCQqfmIjFrvMA4rgO1QDFLvmIKdQmIKfrwDFQj7BBjxAAQniAAm+kFg");
	var mask_2_graphics_286 = new cjs.Graphics().p("Au+cPQqll+jPrsMA4cgPpQDQLsl+KiQl/KlrtDQQkHBIj9AAQnVAAm1j4g");
	var mask_2_graphics_287 = new cjs.Graphics().p("AurccQqpl0jbrpMA4OgQdQDaLpl0KoQl1KqrqDaQkTBRkJAAQnHAAmujsg");
	var mask_2_graphics_288 = new cjs.Graphics().p("AuXcpQqvlqjlrnMA3+gRQQDlLmlqKtQlrKvrnDlQkfBZkVAAQm6AAmljfg");
	var mask_2_graphics_289 = new cjs.Graphics().p("AuDc1Qq0lgjwrjMA3ugSEQDwLilhKzQlhK0rjDwQkrBhkhAAQmtAAmcjTg");
	var mask_2_graphics_290 = new cjs.Graphics().p("AtwdBQq4lWj7rfMA3dgS3QD6LelWK4QlXK5rgD7Qk2BpkuAAQmgAAmTjHg");
	var mask_2_graphics_291 = new cjs.Graphics().p("AtcdMQq+lLkErcMA3LgTqQEELblMK8QlNK/rcEEQlBBzk6AAQmTAAmKi8g");
	var mask_2_graphics_292 = new cjs.Graphics().p("AtKdXQrClDkOrYMA26gUYQEOLXlDLBQlELDrYEOQlLB7lFAAQmIAAmBixg");
	var mask_2_graphics_293 = new cjs.Graphics().p("As4dhQrGk6kYrUMA2pgVGQEYLUk6LFQk7LHrVEXQlUCElRAAQl8AAl4ing");
	var mask_2_graphics_294 = new cjs.Graphics().p("AsmdrQrKkwkhrRMA2XgV0QEhLQkxLJQkxLLrREhQlfCNlbAAQlxAAlvidg");
	var mask_2_graphics_295 = new cjs.Graphics().p("AsUd0QrOkmkrrOMA2FgWgQEqLMknLNQkoLPrNEqQloCWlnAAQllAAlmiUg");
	var mask_2_graphics_296 = new cjs.Graphics().p("AsCd9QrSkdk0rJMA1xgXOQE0LIkeLRQkeLTrJE0QlyCflyAAQlaAAlciLg");
	var mask_2_graphics_297 = new cjs.Graphics().p("ArweGQrWkTk9rGMA1dgX6QE+LEkVLUQkVLWrFE+Ql6Cpl+AAQlPAAlSiCg");
	var mask_2_graphics_298 = new cjs.Graphics().p("AreePQrZkKlHrBMA1JgYnQFHK/kLLYQkMLarBFHQmDCzmJAAQlEAAlIh5g");
	var mask_2_graphics_299 = new cjs.Graphics().p("ArMeXQrdkAlQq9MA01gZUQFPK8kBLbQkCLeq9FPQmLC+mVAAQk5AAk+hxg");
	var mask_2_graphics_300 = new cjs.Graphics().p("Aq6egQrgj4lZq4MA0egZ/QFZK3j3LeQj5Lhq4FZQmUDImhAAQktAAk0hog");
	var mask_2_graphics_301 = new cjs.Graphics().p("AqpenQrjjtliq0MA0JgarQFiKyjuLiQjvLkq0FiQmcDTmsAAQkjAAkqhhg");
	var mask_2_graphics_302 = new cjs.Graphics().p("AqXevQrmjklrqvMAzygbXQFrKvjkLkQjlLnqvFrQmlDem4AAQkXAAkghZg");
	var mask_2_graphics_303 = new cjs.Graphics().p("AqFe2Qrpjal0qqMAzbgcCQF0KqjbLmQjbLqqqF0QmtDqnEAAQkMAAkVhSg");
	var mask_2_graphics_304 = new cjs.Graphics().p("Apze9QrsjQl9qlMAzDgcuQF9KljRLqQjSLtqlF8Qm0D2nQAAQkBAAkKhLg");
	var mask_2_graphics_305 = new cjs.Graphics().p("ApifEQrujHmGqgMAyrgdYQGGKgjILsQjHLwqhGFQm7ECndAAQj2AAj/hEg");
	var mask_2_graphics_306 = new cjs.Graphics().p("ApQfKQrxi9mOqbMAyRgeCQGPKbi+LvQi+LyqaGOQnEEOnpAAQjqAAj0g+g");
	var mask_2_graphics_307 = new cjs.Graphics().p("Ao+fQQr0izmXqVMAx4getQGYKWi0LxQi0L0qWGYQnKEan2AAQjfAAjog4g");
	var mask_2_graphics_308 = new cjs.Graphics().p("AotfWQr2ipmfqQMAxegfWQGgKQiqL0QiqL2qQGgQnREmoDAAQjUAAjdgxg");
	var mask_2_graphics_309 = new cjs.Graphics().p("AobfbQr4ifmpqLMAxEgf/QGpKLigL2QigL4qLGpQnYEzoQAAQjIAAjRgsg");
	var mask_2_graphics_310 = new cjs.Graphics().p("AoKfgQr6iVmxqFMAwpggoQGxKFiWL4QiWL7qFGwQnfFBodAAQi9AAjFgng");
	var mask_2_graphics_311 = new cjs.Graphics().p("An1flQr7iLm6qAMAwOghQQG5KAiML5QiML9qAG5QnkFOorAAQiyAAi5gig");
	var mask_2_graphics_312 = new cjs.Graphics().p("AncfpQr+iBnBp5MAvxgh5QHBJ6iCL7QiCL+p6HCQnqFco5AAQimAAisgeg");
	var mask_2_graphics_313 = new cjs.Graphics().p("AnEfuQr/h3nKp0MAvUgihQHKJ0h4L9Qh4MAp0HKQnwFqpGAAQibAAiggZg");
	var mask_2_graphics_314 = new cjs.Graphics().p("AmsfxQsAhtnSptMAu3gjIQHSJuhuL+QhuMCpuHSQn2F4pUAAQiPAAiUgWg");
	var mask_2_graphics_315 = new cjs.Graphics().p("AmTf1QsChjnapnMAuZgjvQHaJnhjMAQhlMDpnHaQn7GHpkAAQiCAAiHgSg");
	var mask_2_graphics_316 = new cjs.Graphics().p("Al7f4QsDhZniphMAt7gkVQHiJhhZMBQhaMEpiHiQoAGWpyAAQh2AAh7gPg");
	var mask_2_graphics_317 = new cjs.Graphics().p("Alif7QsFhPnqpbMAtdgk7QHqJahQMDQhPMFpbHqQoGGkqBAAQhqAAhtgLg");
	var mask_2_graphics_318 = new cjs.Graphics().p("AlKf9QsFhEnypVMAs9glhQHyJUhFMDQhGMGpUHyQoLG0qQAAQheAAhggJg");
	var mask_2_graphics_319 = new cjs.Graphics().p("EgDUAgFQsIgUoWo0MAqhgoRQIWIzgVMGQgVMJo0IXQoeIBrgAAIg9gBg");
	var mask_2_graphics_320 = new cjs.Graphics().p("A2fYQMAn5gq3QI5IRAcMGQAcMJoRI4QoSI5sGAbIhQABQrWAAobn2g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(159).to({graphics:mask_2_graphics_159,x:69.3,y:205.4}).wait(1).to({graphics:mask_2_graphics_160,x:68,y:205.4}).wait(1).to({graphics:mask_2_graphics_161,x:66.6,y:205.5}).wait(1).to({graphics:mask_2_graphics_162,x:65.3,y:205.6}).wait(1).to({graphics:mask_2_graphics_163,x:63.9,y:205.6}).wait(1).to({graphics:mask_2_graphics_164,x:62.6,y:205.6}).wait(1).to({graphics:mask_2_graphics_165,x:63.8,y:205.6}).wait(1).to({graphics:mask_2_graphics_166,x:65.1,y:205.6}).wait(1).to({graphics:mask_2_graphics_167,x:66.5,y:205.6}).wait(1).to({graphics:mask_2_graphics_168,x:67.8,y:205.6}).wait(1).to({graphics:mask_2_graphics_169,x:69.1,y:205.6}).wait(1).to({graphics:mask_2_graphics_170,x:70.5,y:205.6}).wait(1).to({graphics:mask_2_graphics_171,x:71.8,y:205.6}).wait(1).to({graphics:mask_2_graphics_172,x:73.1,y:205.6}).wait(1).to({graphics:mask_2_graphics_173,x:74.5,y:205.6}).wait(1).to({graphics:mask_2_graphics_174,x:75.8,y:205.6}).wait(1).to({graphics:mask_2_graphics_175,x:77.1,y:205.7}).wait(1).to({graphics:mask_2_graphics_176,x:78.4,y:205.7}).wait(1).to({graphics:mask_2_graphics_177,x:79.8,y:205.7}).wait(1).to({graphics:mask_2_graphics_178,x:81.1,y:205.7}).wait(1).to({graphics:mask_2_graphics_179,x:82.4,y:205.7}).wait(1).to({graphics:mask_2_graphics_180,x:83.7,y:205.7}).wait(1).to({graphics:mask_2_graphics_181,x:85,y:205.7}).wait(1).to({graphics:mask_2_graphics_182,x:86.3,y:205.7}).wait(1).to({graphics:mask_2_graphics_183,x:87.6,y:205.7}).wait(1).to({graphics:mask_2_graphics_184,x:88.9,y:205.8}).wait(1).to({graphics:mask_2_graphics_185,x:90.1,y:205.8}).wait(1).to({graphics:mask_2_graphics_186,x:91.4,y:205.8}).wait(1).to({graphics:mask_2_graphics_187,x:92.7,y:205.8}).wait(1).to({graphics:mask_2_graphics_188,x:94,y:205.8}).wait(1).to({graphics:mask_2_graphics_189,x:95.2,y:205.8}).wait(1).to({graphics:mask_2_graphics_190,x:96.5,y:205.8}).wait(1).to({graphics:mask_2_graphics_191,x:97.7,y:205.8}).wait(1).to({graphics:mask_2_graphics_192,x:99,y:205.8}).wait(1).to({graphics:mask_2_graphics_193,x:100.2,y:205.8}).wait(1).to({graphics:mask_2_graphics_194,x:101.5,y:205.7}).wait(1).to({graphics:mask_2_graphics_195,x:102.7,y:205.7}).wait(1).to({graphics:mask_2_graphics_196,x:103.9,y:205.7}).wait(1).to({graphics:mask_2_graphics_197,x:105.1,y:205.7}).wait(1).to({graphics:mask_2_graphics_198,x:106.3,y:205.7}).wait(1).to({graphics:mask_2_graphics_199,x:107.5,y:205.7}).wait(1).to({graphics:mask_2_graphics_200,x:108.7,y:205.7}).wait(1).to({graphics:mask_2_graphics_201,x:109.9,y:205.7}).wait(1).to({graphics:mask_2_graphics_202,x:111.1,y:205.6}).wait(1).to({graphics:mask_2_graphics_203,x:112.2,y:205.6}).wait(1).to({graphics:mask_2_graphics_204,x:113.3,y:205.6}).wait(1).to({graphics:mask_2_graphics_205,x:114.6,y:205.6}).wait(1).to({graphics:mask_2_graphics_206,x:115.8,y:205.6}).wait(1).to({graphics:mask_2_graphics_207,x:117,y:205.5}).wait(1).to({graphics:mask_2_graphics_208,x:118.2,y:205.5}).wait(1).to({graphics:mask_2_graphics_209,x:119.4,y:205.5}).wait(1).to({graphics:mask_2_graphics_210,x:120.6,y:205.5}).wait(1).to({graphics:mask_2_graphics_211,x:121.8,y:205.5}).wait(1).to({graphics:mask_2_graphics_212,x:122.9,y:205.4}).wait(1).to({graphics:mask_2_graphics_213,x:124.1,y:205.4}).wait(1).to({graphics:mask_2_graphics_214,x:125.2,y:205.4}).wait(1).to({graphics:mask_2_graphics_215,x:126.3,y:205.4}).wait(1).to({graphics:mask_2_graphics_216,x:127.3,y:205.4}).wait(1).to({graphics:mask_2_graphics_217,x:128.4,y:205.4}).wait(1).to({graphics:mask_2_graphics_218,x:129.4,y:205.4}).wait(1).to({graphics:mask_2_graphics_219,x:130.5,y:205.4}).wait(1).to({graphics:mask_2_graphics_220,x:131.4,y:205.4}).wait(1).to({graphics:mask_2_graphics_221,x:132.4,y:205.4}).wait(1).to({graphics:mask_2_graphics_222,x:133.4,y:205.4}).wait(1).to({graphics:mask_2_graphics_223,x:134.3,y:205.4}).wait(1).to({graphics:mask_2_graphics_224,x:135.2,y:205.4}).wait(1).to({graphics:mask_2_graphics_225,x:136.1,y:205.4}).wait(1).to({graphics:mask_2_graphics_226,x:137,y:205.5}).wait(1).to({graphics:mask_2_graphics_227,x:137.8,y:205.5}).wait(1).to({graphics:mask_2_graphics_228,x:138.7,y:205.5}).wait(1).to({graphics:mask_2_graphics_229,x:139.5,y:205.5}).wait(1).to({graphics:mask_2_graphics_230,x:140.3,y:205.5}).wait(1).to({graphics:mask_2_graphics_231,x:141.1,y:205.5}).wait(1).to({graphics:mask_2_graphics_232,x:141.8,y:205.6}).wait(1).to({graphics:mask_2_graphics_233,x:142.6,y:205.6}).wait(1).to({graphics:mask_2_graphics_234,x:143.3,y:205.6}).wait(1).to({graphics:mask_2_graphics_235,x:144,y:205.6}).wait(1).to({graphics:mask_2_graphics_236,x:144.7,y:205.6}).wait(1).to({graphics:mask_2_graphics_237,x:145.4,y:205.6}).wait(1).to({graphics:mask_2_graphics_238,x:146,y:205.6}).wait(1).to({graphics:mask_2_graphics_239,x:146.6,y:205.6}).wait(1).to({graphics:mask_2_graphics_240,x:147.2,y:205.6}).wait(1).to({graphics:mask_2_graphics_241,x:147.8,y:205.6}).wait(1).to({graphics:mask_2_graphics_242,x:148.4,y:205.6}).wait(1).to({graphics:mask_2_graphics_243,x:148.9,y:205.6}).wait(1).to({graphics:mask_2_graphics_244,x:149.4,y:205.6}).wait(1).to({graphics:mask_2_graphics_245,x:149.9,y:205.6}).wait(1).to({graphics:mask_2_graphics_246,x:150.4,y:205.6}).wait(1).to({graphics:mask_2_graphics_247,x:150.9,y:205.6}).wait(1).to({graphics:mask_2_graphics_248,x:151.3,y:205.6}).wait(1).to({graphics:mask_2_graphics_249,x:151.7,y:205.6}).wait(1).to({graphics:mask_2_graphics_250,x:152.1,y:205.5}).wait(1).to({graphics:mask_2_graphics_251,x:152.5,y:205.5}).wait(1).to({graphics:mask_2_graphics_252,x:152.9,y:205.5}).wait(1).to({graphics:mask_2_graphics_253,x:153.2,y:205.5}).wait(1).to({graphics:mask_2_graphics_254,x:153.5,y:205.5}).wait(1).to({graphics:mask_2_graphics_255,x:153.8,y:205.5}).wait(1).to({graphics:mask_2_graphics_256,x:154.1,y:205.4}).wait(1).to({graphics:mask_2_graphics_257,x:154.3,y:205.4}).wait(1).to({graphics:mask_2_graphics_258,x:154.6,y:205.4}).wait(1).to({graphics:mask_2_graphics_259,x:154.7,y:205.4}).wait(1).to({graphics:mask_2_graphics_260,x:154.9,y:205.4}).wait(1).to({graphics:mask_2_graphics_261,x:155.1,y:205.3}).wait(1).to({graphics:mask_2_graphics_262,x:155.2,y:205.3}).wait(1).to({graphics:mask_2_graphics_263,x:155.3,y:205.3}).wait(1).to({graphics:mask_2_graphics_264,x:155.4,y:205.3}).wait(1).to({graphics:mask_2_graphics_265,x:155.4,y:205.3}).wait(1).to({graphics:mask_2_graphics_266,x:155.5,y:205.3}).wait(1).to({graphics:mask_2_graphics_267,x:155.5,y:205.3}).wait(1).to({graphics:mask_2_graphics_268,x:155.5,y:205.3}).wait(1).to({graphics:mask_2_graphics_269,x:155.5,y:205.3}).wait(1).to({graphics:mask_2_graphics_270,x:155.6,y:205.3}).wait(1).to({graphics:mask_2_graphics_271,x:155.6,y:205.3}).wait(1).to({graphics:mask_2_graphics_272,x:155.7,y:205.3}).wait(1).to({graphics:mask_2_graphics_273,x:155.8,y:205.3}).wait(1).to({graphics:mask_2_graphics_274,x:155.9,y:205.3}).wait(1).to({graphics:mask_2_graphics_275,x:156.1,y:205.4}).wait(1).to({graphics:mask_2_graphics_276,x:156.3,y:205.4}).wait(1).to({graphics:mask_2_graphics_277,x:156.4,y:205.4}).wait(1).to({graphics:mask_2_graphics_278,x:156.7,y:205.4}).wait(1).to({graphics:mask_2_graphics_279,x:156.9,y:205.4}).wait(1).to({graphics:mask_2_graphics_280,x:157.1,y:205.4}).wait(1).to({graphics:mask_2_graphics_281,x:157.4,y:205.5}).wait(1).to({graphics:mask_2_graphics_282,x:157.7,y:205.5}).wait(1).to({graphics:mask_2_graphics_283,x:158,y:205.5}).wait(1).to({graphics:mask_2_graphics_284,x:158.3,y:205.5}).wait(1).to({graphics:mask_2_graphics_285,x:158.6,y:205.5}).wait(1).to({graphics:mask_2_graphics_286,x:159,y:205.5}).wait(1).to({graphics:mask_2_graphics_287,x:159.4,y:205.6}).wait(1).to({graphics:mask_2_graphics_288,x:159.7,y:205.6}).wait(1).to({graphics:mask_2_graphics_289,x:160.2,y:205.6}).wait(1).to({graphics:mask_2_graphics_290,x:160.6,y:205.6}).wait(1).to({graphics:mask_2_graphics_291,x:161,y:205.6}).wait(1).to({graphics:mask_2_graphics_292,x:161.4,y:205.6}).wait(1).to({graphics:mask_2_graphics_293,x:161.8,y:205.6}).wait(1).to({graphics:mask_2_graphics_294,x:162.3,y:205.6}).wait(1).to({graphics:mask_2_graphics_295,x:162.7,y:205.6}).wait(1).to({graphics:mask_2_graphics_296,x:163.2,y:205.6}).wait(1).to({graphics:mask_2_graphics_297,x:163.7,y:205.6}).wait(1).to({graphics:mask_2_graphics_298,x:164.2,y:205.6}).wait(1).to({graphics:mask_2_graphics_299,x:164.7,y:205.6}).wait(1).to({graphics:mask_2_graphics_300,x:165.2,y:205.6}).wait(1).to({graphics:mask_2_graphics_301,x:165.8,y:205.6}).wait(1).to({graphics:mask_2_graphics_302,x:166.3,y:205.6}).wait(1).to({graphics:mask_2_graphics_303,x:166.9,y:205.6}).wait(1).to({graphics:mask_2_graphics_304,x:167.5,y:205.6}).wait(1).to({graphics:mask_2_graphics_305,x:168,y:205.6}).wait(1).to({graphics:mask_2_graphics_306,x:168.7,y:205.6}).wait(1).to({graphics:mask_2_graphics_307,x:169.3,y:205.6}).wait(1).to({graphics:mask_2_graphics_308,x:169.9,y:205.5}).wait(1).to({graphics:mask_2_graphics_309,x:170.5,y:205.5}).wait(1).to({graphics:mask_2_graphics_310,x:171.2,y:205.5}).wait(1).to({graphics:mask_2_graphics_311,x:171.5,y:205.5}).wait(1).to({graphics:mask_2_graphics_312,x:171.4,y:205.5}).wait(1).to({graphics:mask_2_graphics_313,x:171.4,y:205.5}).wait(1).to({graphics:mask_2_graphics_314,x:171.4,y:205.5}).wait(1).to({graphics:mask_2_graphics_315,x:171.4,y:205.5}).wait(1).to({graphics:mask_2_graphics_316,x:171.4,y:205.5}).wait(1).to({graphics:mask_2_graphics_317,x:171.4,y:205.4}).wait(1).to({graphics:mask_2_graphics_318,x:171.3,y:205.4}).wait(1).to({graphics:mask_2_graphics_319,x:171.3,y:205.4}).wait(1).to({graphics:mask_2_graphics_320,x:171.2,y:205.4}).wait(235));

	// Layer 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("AHMOrQheBAhnAyQiEBBiRAYQiQAWiPglQiNgihshhQhshigfiQQgfiPARiSQARiNAiiKQAiiMA7iDQA6iCBRh2QBRh3BfhrQBRhdBXhWQBjhiBwhYQBzhZCGg6QCGg5COgQQABAAABgBQAYgDAYgB");
	this.shape_3.setTransform(169.1,259.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("APHjZQgYCGgwCBQgwCChGB3QhIB7hcBuQhYBphmBeQhnBfhyBVQhzBViAA/QiEBBiSAXQiQAWiPgkQiNgihshiQhshhgfiQQgfiPARiSQARiNAiiKQAiiNA7iCQA6iCBRh3QBRh2BfhsQBRhdBXhWQBkhhBwhYQBzhaCFg6QCHg5CPgQQCSgTCOAgQCRAjBcB1QBZBwAWCOQAXCLgOCPQgLBzgcBug");
	this.shape_4.setTransform(199.2,259.2);

	var maskedShapeInstanceList = [this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3}]},159).to({state:[{t:this.shape_4}]},26).wait(370));

	// Layer 3 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_9 = new cjs.Graphics().p("AES1hQMJAAIkIlQImIlAAMIQAAMJomIlQokIlsJAAg");
	var mask_3_graphics_10 = new cjs.Graphics().p("AD01gQMJgNItIcQIuIdANMIQAMMIodItQobIvsJAMg");
	var mask_3_graphics_11 = new cjs.Graphics().p("ADW1fQMIgZI2ITQI3ITAZMIQAZMJoUI1QoTI3sIAZg");
	var mask_3_graphics_12 = new cjs.Graphics().p("AC41dQMIglI+IJQI/ILAmMHQAlMIoLI+QoJI/sIAlg");
	var mask_3_graphics_13 = new cjs.Graphics().p("ACa1bQMHgxJGIAQJIIBAyMHQAxMHoBJGQoAJIsHAyg");
	var mask_3_graphics_14 = new cjs.Graphics().p("AB81XQMGg+JOH2QJQH4A+MGQA/MGn5JPQn2JQsHA+g");
	var mask_3_graphics_15 = new cjs.Graphics().p("ABe1TQMFhLJWHtQJYHvBLMEQBKMGnuJWQntJYsGBKg");
	var mask_3_graphics_16 = new cjs.Graphics().p("ABA1OQMEhXJeHjQJfHlBXMDQBXMEnlJeQnjJgsEBXg");
	var mask_3_graphics_17 = new cjs.Graphics().p("AAi1JQMChjJmHaQJnHbBkMBQBjMDnbJmQnaJnsCBjg");
	var mask_3_graphics_18 = new cjs.Graphics().p("AAE1DQMBhvJtHPQJvHSBvL/QBwMBnRJuQnQJvsBBvg");
	var mask_3_graphics_19 = new cjs.Graphics().p("AgZ08QL+h8J0HGQJ3HHB8L+QB7L/nHJ1QnFJ2r/B8g");
	var mask_3_graphics_20 = new cjs.Graphics().p("Ag300QL8iIJ8G7QJ9G9CIL8QCJL9m+J8Qm7J9r9CIg");
	var mask_3_graphics_21 = new cjs.Graphics().p("AhV0sQL6iUKDGxQKEGzCVL5QCUL7mzKDQmxKEr7CVg");
	var mask_3_graphics_22 = new cjs.Graphics().p("Ahy0jQL3igKKGnQKLGoChL3QCgL4moKKQmnKLr4Chg");
	var mask_3_graphics_23 = new cjs.Graphics().p("AiQ0ZQL1itKQGdQKSGeCtL0QCtL2meKQQmdKSr1Ctg");
	var mask_3_graphics_24 = new cjs.Graphics().p("Ait0PQLyi5KXGTQKYGTC5LxQC5LzmUKXQmSKZryC4g");
	var mask_3_graphics_25 = new cjs.Graphics().p("AjK0EQLujEKeGHQKfGIDELvQDFLwmJKdQmHKfrvDFg");
	var mask_3_graphics_26 = new cjs.Graphics().p("Ajnz4QLrjRKkF9QKlF+DRLrQDQLsl+KkQl8KlrsDRg");
	var mask_3_graphics_27 = new cjs.Graphics().p("AkEzrQLojdKpFyQKrFzDdLnQDdLplzKqQlyKrrpDdg");
	var mask_3_graphics_28 = new cjs.Graphics().p("AkhzeQLkjpKwFnQKxFoDoLlQDpLkloKwQlnKxrlDog");
	var mask_3_graphics_29 = new cjs.Graphics().p("Ak9zQQLgj1K1FcQK2FdD1LhQD0LhldK1QlbK2rhD1g");
	var mask_3_graphics_30 = new cjs.Graphics().p("AlazCQLckAK7FRQK8FREALeQEBLclTK7QlQK8rdEAg");
	var mask_3_graphics_31 = new cjs.Graphics().p("Al2yyQLYkMLAFFQLBFGEMLaQEMLYlHLAQlFLBrZEMg");
	var mask_3_graphics_32 = new cjs.Graphics().p("AmSyiQLUkYLEE6QLHE7EYLVQEXLUk7LFQk6LGrVEYg");
	var mask_3_graphics_33 = new cjs.Graphics().p("AmuySQLPkjLKEvQLLEvEjLRQEkLPkwLKQkvLLrQEjg");
	var mask_3_graphics_34 = new cjs.Graphics().p("AnKyBQLLkuLOEjQLQEkEvLMQEvLKklLPQkjLQrLEvg");
	var mask_3_graphics_35 = new cjs.Graphics().p("AnlxvQLFk6LTEYQLVEZE6LGQE6LGkZLTQkXLVrHE6g");
	var mask_3_graphics_36 = new cjs.Graphics().p("AoBxcQLBlFLXEMQLZENFGLBQFFLAkNLYQkMLZrBFGg");
	var mask_3_graphics_37 = new cjs.Graphics().p("AocxJQK7lQLcEAQLeEBFQK8QFRK7kCLdQkALdq8FQg");
	var mask_3_graphics_38 = new cjs.Graphics().p("Ao2w1QK1lcLgD1QLhD1FcK3QFcK2j2LgQj0Lhq3Fcg");
	var mask_3_graphics_39 = new cjs.Graphics().p("ApRwgQKwlnLjDpQLmDpFnKxQFmKwjqLkQjoLlqxFng");
	var mask_3_graphics_40 = new cjs.Graphics().p("AprwLQKqlyLnDdQLpDeFyKrQFxKqjeLoQjcLoqrFyg");
	var mask_3_graphics_41 = new cjs.Graphics().p("AqFv1QKkl9LqDRQLtDSF8KlQF9KkjSLrQjRLsqlF9g");
	var mask_3_graphics_42 = new cjs.Graphics().p("AqfvfQKfmHLsDFQLwDFGIKfQGHKejGLvQjFLvqfGHg");
	var mask_3_graphics_43 = new cjs.Graphics().p("Aq5vIQKZmSLvC5QLzC6GSKYQGTKYi7LxQi4LyqZGTg");
	var mask_3_graphics_44 = new cjs.Graphics().p("ArSuwQKSmdLyCtQL2CuGdKSQGdKRivL0QisL1qSGdg");
	var mask_3_graphics_45 = new cjs.Graphics().p("ArruYQKLmnL1ChQL5ChGnKMQGnKKiiL3QigL4qLGng");
	var mask_3_graphics_46 = new cjs.Graphics().p("AsEt/QKEmyL4CVQL7CVGyKFQGxKDiWL6QiUL6qEGyg");
	var mask_3_graphics_47 = new cjs.Graphics().p("AsdtlQJ+m8L6CIQL9CJG8J+QG8J8iKL8QiIL8p9G8g");
	var mask_3_graphics_48 = new cjs.Graphics().p("As1tLQJ2nGL9B8QL/B9HGJ2QHGJ1h+L+Qh7L+p2HGg");
	var mask_3_graphics_49 = new cjs.Graphics().p("AtNsxQJvnQL+BwQMBBxHQJvQHQJuhxL/QhvMBpvHQg");
	var mask_3_graphics_50 = new cjs.Graphics().p("AtksVQJnnaMABjQMCBkHaJoQHaJmhlMCQhiMCpoHag");
	var mask_3_graphics_51 = new cjs.Graphics().p("At8r6QJgnjMBBXQMEBYHkJgQHkJehZMDQhWMEpgHjg");
	var mask_3_graphics_52 = new cjs.Graphics().p("AuTrdQJYnuMCBLQMGBMHtJYQHuJXhMMEQhLMFpXHtg");
	var mask_3_graphics_53 = new cjs.Graphics().p("AuqrAQJQn3MEA+QMGA/H3JQQH3JPhAMGQg9MGpQH2g");
	var mask_3_graphics_54 = new cjs.Graphics().p("AvAqjQJIoAMEAyQMIAzIAJHQIAJHgzMHQgyMGpHIBg");
	var mask_3_graphics_55 = new cjs.Graphics().p("AvWqFQI/oJMFAmQMJAmIJI/QIKI/gnMHQglMHpAIKg");
	var mask_3_graphics_56 = new cjs.Graphics().p("AvspmQI3oTMFAaQMJAZITI3QITI2gbMIQgYMIo4ITg");
	var mask_3_graphics_57 = new cjs.Graphics().p("AwCpHQIvocMGANQMJANIbIvQIcItgOMIQgMMJovIbg");
	var mask_3_graphics_58 = new cjs.Graphics().p("AwXooQImokMGABQMJAAIlImQIkIlgCMIQABMIomIlg");
	var mask_3_graphics_59 = new cjs.Graphics().p("AwsoIQIdotMGgMQMJgLItIdQIuIdAKMHQANMIodItg");
	var mask_3_graphics_60 = new cjs.Graphics().p("AxBnnQIUo2MGgYQMIgYI2IUQI2IUAXMHQAZMHoTI2g");
	var mask_3_graphics_61 = new cjs.Graphics().p("AxVnGQIKo+MGglQMIgkI+ILQI/IKAjMHQAmMHoLI+g");
	var mask_3_graphics_62 = new cjs.Graphics().p("AxqmkQICpHMFgxQMHgxJHICQJHIBAvMGQAyMHoBJGg");
	var mask_3_graphics_63 = new cjs.Graphics().p("Ax9mCQH4pPMEg9QMGg+JPH5QJPH4A8MFQA+MFn4JPg");
	var mask_3_graphics_64 = new cjs.Graphics().p("AyRlgQHvpXMDhJQMFhKJXHvQJXHuBIMEQBLMFnvJXg");
	var mask_3_graphics_65 = new cjs.Graphics().p("Aykk9QHlpeMChWQMEhWJfHlQJeHlBVMCQBXMDnlJfg");
	var mask_3_graphics_66 = new cjs.Graphics().p("Ay2kZQHbpnMAhiQMDhiJmHbQJmHbBiMBQBjMCnbJmg");
	var mask_3_graphics_67 = new cjs.Graphics().p("AzJj1QHSpuL+hvQMBhvJuHSQJuHRBtL/QBwMAnRJug");
	var mask_3_graphics_68 = new cjs.Graphics().p("AzbjRQHIp1L9h7QL+h7J2HHQJ1HHB6L+QB8L+nIJ1g");
	var mask_3_graphics_69 = new cjs.Graphics().p("AzsisQG9p9L7iHQL9iHJ8G9QJ8G9CHL8QCIL8m9J8g");
	var mask_3_graphics_70 = new cjs.Graphics().p("Az9iHQGzqEL5iTQL6iUKDGzQKEGzCSL5QCUL6mzKEg");
	var mask_3_graphics_71 = new cjs.Graphics().p("A0OhiQGpqKL2ifQL4igKKGoQKKGpCfL3QCgL3moKKg");
	var mask_3_graphics_72 = new cjs.Graphics().p("A0eg8QGeqRL0irQL1isKRGeQKRGeCqL0QCtL1meKRg");
	var mask_3_graphics_73 = new cjs.Graphics().p("A0ugWQGTqXLxi4QLyi4KYGUQKYGTC2LyQC5LxmTKYg");
	var mask_3_graphics_74 = new cjs.Graphics().p("A0+AQQGJqdLujDQLvjEKeGIQKeGJDDLuQDFLvmJKeg");
	var mask_3_graphics_75 = new cjs.Graphics().p("A1NA3QF+qjLrjQQLsjQKkF+QKkF+DPLrQDRLsl+Kkg");
	var mask_3_graphics_76 = new cjs.Graphics().p("A1bBfQFzqqLnjbQLojcKrFzQKqFzDbLoQDcLolzKqg");
	var mask_3_graphics_77 = new cjs.Graphics().p("A1pCGQFoqvLjjnQLljoKwFoQKwFoDnLkQDoLlloKwg");
	var mask_3_graphics_78 = new cjs.Graphics().p("A13CuQFdq0LgjzQLhj0K1FdQK2FdDzLgQD0LhldK1g");
	var mask_3_graphics_79 = new cjs.Graphics().p("A2EDXQFSq6Lbj/QLdkAK7FSQK8FSD+LcQEALdlSK7g");
	var mask_3_graphics_80 = new cjs.Graphics().p("A2RD/QFGq/LYkLQLZkLLAFHQLBFHEKLYQEMLYlHLAg");
	var mask_3_graphics_81 = new cjs.Graphics().p("A2eEoQE8rELTkWQLUkXLGE7QLGE8EVLTQEYLUk8LGg");
	var mask_3_graphics_82 = new cjs.Graphics().p("A2qFSQEwrKLPkiQLQkiLLEwQLKEwEhLPQEjLPkwLLg");
	var mask_3_graphics_83 = new cjs.Graphics().p("A21F7QElrOLKktQLLkuLPEkQLPElEtLKQEvLLklLPg");
	var mask_3_graphics_84 = new cjs.Graphics().p("A3AGlQEZrTLFk4QLGk6LUEZQLUEZE4LGQE6LFkZLUg");
	var mask_3_graphics_85 = new cjs.Graphics().p("A3LHPQENrXLAlEQLBlFLZEOQLYENFDLAQFGLBkOLYg");
	var mask_3_graphics_86 = new cjs.Graphics().p("A3UH1QEDrbK7lOQK8lPLcEDQLcEDFOK8QFPK7kCLcg");
	var mask_3_graphics_87 = new cjs.Graphics().p("A3dIcQD4rfK3lYQK3lZLgD4QLgD4FXK3QFaK3j4Lgg");
	var mask_3_graphics_88 = new cjs.Graphics().p("A3lJDQDtrjKxliQKzljLjDtQLjDuFiKyQFkKxjuLkg");
	var mask_3_graphics_89 = new cjs.Graphics().p("A3tJpQDirlKtlsQKtltLmDiQLnDjFsKtQFtKsjjLng");
	var mask_3_graphics_90 = new cjs.Graphics().p("A31KRQDYrpKnl2QKnl3LqDYQLqDYF2KnQF3KnjYLqg");
	var mask_3_graphics_91 = new cjs.Graphics().p("A38K4QDNrsKhmAQKimBLtDNQLuDNF/KiQGBKijNLtg");
	var mask_3_graphics_92 = new cjs.Graphics().p("A4DLfQDCrvKcmJQKdmLLvDCQLwDDGJKcQGLKcjCLwg");
	var mask_3_graphics_93 = new cjs.Graphics().p("A4JMHQC3rzKWmSQKYmULxC3QLzC3GTKXQGUKWi3Lzg");
	var mask_3_graphics_94 = new cjs.Graphics().p("A4PMuQCsr1KQmcQKSmdL0CsQL1CsGdKRQGeKQitL1g");
	var mask_3_graphics_95 = new cjs.Graphics().p("A4VNWQChr4KKmlQKMmnL3ChQL3CiGmKKQGoKLiiL3g");
	var mask_3_graphics_96 = new cjs.Graphics().p("A4aN+QCWr6KEmuQKFmxL5CWQL6CXGvKEQGxKEiWL6g");
	var mask_3_graphics_97 = new cjs.Graphics().p("A4fOmQCLr8J+m4QJ/m6L7CMQL8CLG4J+QG7J+iML8g");
	var mask_3_graphics_98 = new cjs.Graphics().p("A4kPOQCBr+J3nBQJ4nDL9CAQL+CBHCJ3QHDJ3iAL+g");
	var mask_3_graphics_99 = new cjs.Graphics().p("A4oP2QB1sAJxnKQJynML/B1QMAB2HKJxQHNJwh1MAg");
	var mask_3_graphics_100 = new cjs.Graphics().p("A4rQfQBqsCJpnTQJsnVMABqQMCBqHTJqQHWJqhqMCg");
	var mask_3_graphics_101 = new cjs.Graphics().p("A4vRHQBfsDJjncQJlneMBBfQMDBfHdJjQHeJjheMDg");
	var mask_3_graphics_102 = new cjs.Graphics().p("A4yRvQBUsEJcnkQJenoMDBUQMEBUHlJcQHoJdhUMEg");
	var mask_3_graphics_103 = new cjs.Graphics().p("A40SYQBIsFJVnuQJXnwMEBJQMFBJHuJVQHwJVhIMFg");
	var mask_3_graphics_104 = new cjs.Graphics().p("A42TAQA9sGJOn2QJPn4MFA9QMGA+H3JOQH5JNg+MHg");
	var mask_3_graphics_105 = new cjs.Graphics().p("A44TpQAysHJGn+QJIoBMGAyQMHAyIAJHQIBJGgzMHg");
	var mask_3_graphics_106 = new cjs.Graphics().p("A46USQAnsII/oIQJAoIMHAnQMIAnIII/QIJI/gnMIg");
	var mask_3_graphics_107 = new cjs.Graphics().p("A47U6QAcsII3oQQI5oRMHAcQMIAcIQI4QISI3gcMIg");
	var mask_3_graphics_108 = new cjs.Graphics().p("A47VjQAQsIIwoZQIxoYMHAQQMJAQIYIwQIaIwgRMJg");
	var mask_3_graphics_109 = new cjs.Graphics().p("A48WMQAFsJIoogQIpohMIAFQMJAFIgIpQIiIngFMJg");
	var mask_3_graphics_110 = new cjs.Graphics().p("AwiB1QIhopMIgGQMJgGIoIgQIqIgAGMJMg6kAAdQgGsJIgoog");
	var mask_3_graphics_111 = new cjs.Graphics().p("Aw1B7QIaoxMHgRQMJgRIwIYQIxIYASMIMg6jABUQgRsJIXowg");
	var mask_3_graphics_112 = new cjs.Graphics().p("AxHCBQIRo4MHgdQMJgcI4IQQI5IPAcMIMg6hACKQgcsIIPo4g");
	var mask_3_graphics_113 = new cjs.Graphics().p("AxYCIQIIpAMHgoQMIgoI/IIQJBIHAoMIMg6fADAQgosIIIo/g");
	var mask_3_graphics_114 = new cjs.Graphics().p("AxqCOQIBpHMGgzQMHgzJHIAQJIH+AzMHMg6cAD2QgzsHH/pHg");
	var mask_3_graphics_115 = new cjs.Graphics().p("Ax6CVQH3pOMGg/QMGg+JOH4QJQH1A+MHMg6YAEsQg+sGH3pPg");
	var mask_3_graphics_116 = new cjs.Graphics().p("AyLCdQHwpWMEhKQMFhJJWHvQJXHtBJMFMg6TAFiQhJsFHtpVg");
	var mask_3_graphics_117 = new cjs.Graphics().p("AyaCkQHmpdMDhVQMEhUJdHmQJeHkBVMFMg6OAGYQhUsEHlpdg");
	var mask_3_graphics_118 = new cjs.Graphics().p("AypCsQHdpkMChgQMDhgJjHeQJlHbBgMDMg6HAHOQhgsCHdpkg");
	var mask_3_graphics_119 = new cjs.Graphics().p("Ay4C0QHUprMBhrQMBhrJrHVQJsHSBrMCMg6BAIEQhrsCHUpqg");
	var mask_3_graphics_120 = new cjs.Graphics().p("AzGC8QHLpxL/h2QMAh2JxHMQJzHJB2L/Mg55AI6Qh2r/HLpyg");
	var mask_3_graphics_121 = new cjs.Graphics().p("AzUDFQHCp4L+iBQL9iCJ4HDQJ5HACBL+Mg5vAJwQiBr+HBp4g");
	var mask_3_graphics_122 = new cjs.Graphics().p("AzhDOQG5p/L8iMQL7iMJ+G5QKAG3CML8Mg5mAKlQiMr8G4p+g");
	var mask_3_graphics_123 = new cjs.Graphics().p("AzuDXQGwqFL6iXQL5iYKFGxQKFGtCYL6Mg5cALaQiYr6GvqEg");
	var mask_3_graphics_124 = new cjs.Graphics().p("Az6DgQGnqLL3iiQL3iiKLGmQKMGlCiL3Mg5RAMQQijr4GmqLg");
	var mask_3_graphics_125 = new cjs.Graphics().p("A0GDqQGdqRL2iuQL0itKRGeQKSGaCtL2Mg5FANEQiur1GcqRg");
	var mask_3_graphics_126 = new cjs.Graphics().p("A0RD0QGUqXLyi5QLyi4KXGUQKYGRC4LzMg45AN5Qi4rzGSqWg");
	var mask_3_graphics_127 = new cjs.Graphics().p("A0bD+QGKqdLvjDQLvjDKdGKQKeGJDDLuMg4sAOuQjDrwGJqcg");
	var mask_3_graphics_128 = new cjs.Graphics().p("A0lEJQGAqjLtjOQLsjOKiGAQKjF/DOLsMg4dAPiQjOrtF/qhg");
	var mask_3_graphics_129 = new cjs.Graphics().p("A0vETQF2qoLqjZQLpjZKoF3QKpF1DZLpMg4PAQWQjZrpF1qog");
	var mask_3_graphics_130 = new cjs.Graphics().p("A04EeQFtquLmjjQLmjkKtFtQKuFrDkLmMg4AARKQjjrmFrqtg");
	var mask_3_graphics_131 = new cjs.Graphics().p("A1AEpQFiqzLkjuQLijuKyFjQK0FhDuLiMg3vAR+QjvrjFiqyg");
	var mask_3_graphics_132 = new cjs.Graphics().p("A1IE1QFYq4Lgj5QLfj5K3FZQK5FWD5LfMg3fASyQj5rgFYq2g");
	var mask_3_graphics_133 = new cjs.Graphics().p("A1QFAQFPq9LckDQLbkEK8FPQK+FNEDLbMg3MATlQkErcFNq8g");
	var mask_3_graphics_134 = new cjs.Graphics().p("A1WFMQFErCLYkOQLXkOLBFFQLCFCEPLYMg26AUYQkPrYFErBg");
	var mask_3_graphics_135 = new cjs.Graphics().p("A1dFYQE6rGLVkZQLTkZLGE7QLGE4EZLTMg2nAVMQkZrVE5rFg");
	var mask_3_graphics_136 = new cjs.Graphics().p("A1iFkQEvrKLQkkQLQkjLKEwQLLEuEjLQMg2TAV9QkjrQEvrKg");
	var mask_3_graphics_137 = new cjs.Graphics().p("A1oFxQEmrPLLkuQLLktLPElQLPEkEuLLMg1+AWwQkurMEkrOg");
	var mask_3_graphics_138 = new cjs.Graphics().p("A1sF+QEarULIk4QLGk4LTEcQLUEZE4LHMg1pAXhQk4rHEarSg");
	var mask_3_graphics_139 = new cjs.Graphics().p("A1wGLQEQrYLDlCQLClCLWERQLYEOFCLCMg1SAYUQlDrDEQrWg");
	var mask_3_graphics_140 = new cjs.Graphics().p("A10GYQEGrbK+lNQK9lMLbEGQLbEEFMK9Mg07AZFQlNq+EFrag");
	var mask_3_graphics_141 = new cjs.Graphics().p("A13GlQD7rfK5lWQK5lXLeD8QLfD5FXK5Mg0lAZ1QlWq5D6reg");
	var mask_3_graphics_142 = new cjs.Graphics().p("A15GzQDwrjK0lgQKzlhLiDxQLjDvFhKzMg0MAamQlhq0Dwrhg");
	var mask_3_graphics_143 = new cjs.Graphics().p("A17HAQDlrlKvlrQKulqLmDmQLmDkFqKuMgzzAbWQlqqvDlrlg");
	var mask_3_graphics_144 = new cjs.Graphics().p("A19HPQDbrpKql1QKpl1LoDcQLqDZF0KpMgzZAcGQl1qqDarng");
	var mask_3_graphics_145 = new cjs.Graphics().p("A19HdQDQrsKkl/QKjl+LsDRQLsDOF/KkMgy/Ac1Ql/qkDQrrg");
	var mask_3_graphics_146 = new cjs.Graphics().p("A1+HrQDFrvKfmIQKemILuDGQLwDEGIKdMgykAdlQmIqfDErug");
	var mask_3_graphics_147 = new cjs.Graphics().p("A19H6QC6ryKZmSQKYmSLxC7QLyC5GSKZMgyIAeSQmSqZC6rwg");
	var mask_3_graphics_148 = new cjs.Graphics().p("A19IJQCwr1KTmbQKSmcL0CwQL0CuGcKTMgxsAfBQmbqTCurzg");
	var mask_3_graphics_149 = new cjs.Graphics().p("A17IYQCkr3KNmlQKMmlL3ClQL3CjGlKNMgxPAfuQmlqNCkr1g");
	var mask_3_graphics_150 = new cjs.Graphics().p("A15InQCZr5KHmvQKGmuL5CaQL5CYGuKHMgwxAgcQmuqHCZr4g");
	var mask_3_graphics_151 = new cjs.Graphics().p("A13I2QCOr7KBm4QKAm3L7CPQL7CNG4KAMgwTAhJQm4qBCOr6g");
	var mask_3_graphics_152 = new cjs.Graphics().p("A10JGQCDr9J7nBQJ5nBL9CEQL9CCHBJ6Mgv0Ah1QnAp6CCr8g");
	var mask_3_graphics_153 = new cjs.Graphics().p("A1wJWQB4sAJznKQJ0nKL+B5QL/B3HKJ0MgvUAihQnKpzB4r+g");
	var mask_3_graphics_154 = new cjs.Graphics().p("A1sJlQBtsAJtnTQJtnTL/BtQMBBsHTJtMguzAjNQnUptBtsAg");
	var mask_3_graphics_155 = new cjs.Graphics().p("A1nJ2QBhsDJmncQJnncMBBjQMCBgHcJmMguTAj5QncpmBisBg");
	var mask_3_graphics_156 = new cjs.Graphics().p("A1iKGQBWsEJgnlQJfnkMCBXQMEBVHlJfMgtyAkjQnkpfBWsCg");
	var mask_3_graphics_157 = new cjs.Graphics().p("A1cKWQBLsFJYntQJYnuMEBNQMEBKHuJYMgtPAlNQntpYBLsEg");
	var mask_3_graphics_158 = new cjs.Graphics().p("A1WKnQBAsGJRn2QJRn2MEBBQMGA/H2JQMgssAl3Qn2pQBAsFg");
	var mask_3_graphics_159 = new cjs.Graphics().p("A1PK3QA1sHJJn+QJKn/MFA2QMHA0H/JJMgsJAmgQn/pJA1sGg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_3_graphics_9,x:214.9,y:237.2}).wait(1).to({graphics:mask_3_graphics_10,x:214.9,y:237.2}).wait(1).to({graphics:mask_3_graphics_11,x:214.9,y:237.2}).wait(1).to({graphics:mask_3_graphics_12,x:214.9,y:237.1}).wait(1).to({graphics:mask_3_graphics_13,x:214.9,y:237.1}).wait(1).to({graphics:mask_3_graphics_14,x:214.9,y:237}).wait(1).to({graphics:mask_3_graphics_15,x:214.9,y:236.8}).wait(1).to({graphics:mask_3_graphics_16,x:215,y:236.7}).wait(1).to({graphics:mask_3_graphics_17,x:215,y:236.5}).wait(1).to({graphics:mask_3_graphics_18,x:215,y:236.3}).wait(1).to({graphics:mask_3_graphics_19,x:215,y:236.1}).wait(1).to({graphics:mask_3_graphics_20,x:215,y:235.8}).wait(1).to({graphics:mask_3_graphics_21,x:215,y:235.6}).wait(1).to({graphics:mask_3_graphics_22,x:215.1,y:235.3}).wait(1).to({graphics:mask_3_graphics_23,x:215.1,y:235}).wait(1).to({graphics:mask_3_graphics_24,x:215.1,y:234.6}).wait(1).to({graphics:mask_3_graphics_25,x:215.1,y:234.3}).wait(1).to({graphics:mask_3_graphics_26,x:215.1,y:233.9}).wait(1).to({graphics:mask_3_graphics_27,x:215.1,y:233.5}).wait(1).to({graphics:mask_3_graphics_28,x:215.2,y:233}).wait(1).to({graphics:mask_3_graphics_29,x:215.2,y:232.6}).wait(1).to({graphics:mask_3_graphics_30,x:215.2,y:232.1}).wait(1).to({graphics:mask_3_graphics_31,x:215.2,y:231.6}).wait(1).to({graphics:mask_3_graphics_32,x:215.2,y:231.1}).wait(1).to({graphics:mask_3_graphics_33,x:215.2,y:230.5}).wait(1).to({graphics:mask_3_graphics_34,x:215.2,y:230}).wait(1).to({graphics:mask_3_graphics_35,x:215.2,y:229.4}).wait(1).to({graphics:mask_3_graphics_36,x:215.2,y:228.8}).wait(1).to({graphics:mask_3_graphics_37,x:215.2,y:228.1}).wait(1).to({graphics:mask_3_graphics_38,x:215.2,y:227.5}).wait(1).to({graphics:mask_3_graphics_39,x:215.2,y:226.8}).wait(1).to({graphics:mask_3_graphics_40,x:215.2,y:226.1}).wait(1).to({graphics:mask_3_graphics_41,x:215.1,y:225.4}).wait(1).to({graphics:mask_3_graphics_42,x:215.1,y:224.6}).wait(1).to({graphics:mask_3_graphics_43,x:215.1,y:223.9}).wait(1).to({graphics:mask_3_graphics_44,x:215.1,y:223.1}).wait(1).to({graphics:mask_3_graphics_45,x:215.1,y:222.3}).wait(1).to({graphics:mask_3_graphics_46,x:215.1,y:221.5}).wait(1).to({graphics:mask_3_graphics_47,x:215.1,y:220.6}).wait(1).to({graphics:mask_3_graphics_48,x:215,y:219.8}).wait(1).to({graphics:mask_3_graphics_49,x:215,y:218.9}).wait(1).to({graphics:mask_3_graphics_50,x:215,y:218}).wait(1).to({graphics:mask_3_graphics_51,x:215,y:217}).wait(1).to({graphics:mask_3_graphics_52,x:215,y:216.1}).wait(1).to({graphics:mask_3_graphics_53,x:215,y:215.1}).wait(1).to({graphics:mask_3_graphics_54,x:215,y:214.2}).wait(1).to({graphics:mask_3_graphics_55,x:214.9,y:213.2}).wait(1).to({graphics:mask_3_graphics_56,x:214.9,y:212.2}).wait(1).to({graphics:mask_3_graphics_57,x:214.9,y:211.1}).wait(1).to({graphics:mask_3_graphics_58,x:214.9,y:210.1}).wait(1).to({graphics:mask_3_graphics_59,x:214.9,y:209}).wait(1).to({graphics:mask_3_graphics_60,x:215,y:207.9}).wait(1).to({graphics:mask_3_graphics_61,x:215,y:206.8}).wait(1).to({graphics:mask_3_graphics_62,x:215,y:205.7}).wait(1).to({graphics:mask_3_graphics_63,x:215,y:204.6}).wait(1).to({graphics:mask_3_graphics_64,x:215,y:203.5}).wait(1).to({graphics:mask_3_graphics_65,x:215,y:202.3}).wait(1).to({graphics:mask_3_graphics_66,x:215.1,y:201.1}).wait(1).to({graphics:mask_3_graphics_67,x:215.1,y:199.9}).wait(1).to({graphics:mask_3_graphics_68,x:215.1,y:198.7}).wait(1).to({graphics:mask_3_graphics_69,x:215.1,y:197.5}).wait(1).to({graphics:mask_3_graphics_70,x:215.2,y:196.3}).wait(1).to({graphics:mask_3_graphics_71,x:215.2,y:195}).wait(1).to({graphics:mask_3_graphics_72,x:215.2,y:193.8}).wait(1).to({graphics:mask_3_graphics_73,x:215.2,y:192.5}).wait(1).to({graphics:mask_3_graphics_74,x:215.3,y:191.2}).wait(1).to({graphics:mask_3_graphics_75,x:215.3,y:189.9}).wait(1).to({graphics:mask_3_graphics_76,x:215.3,y:188.6}).wait(1).to({graphics:mask_3_graphics_77,x:215.3,y:187.3}).wait(1).to({graphics:mask_3_graphics_78,x:215.3,y:185.9}).wait(1).to({graphics:mask_3_graphics_79,x:215.3,y:184.6}).wait(1).to({graphics:mask_3_graphics_80,x:215.4,y:183.2}).wait(1).to({graphics:mask_3_graphics_81,x:215.4,y:181.9}).wait(1).to({graphics:mask_3_graphics_82,x:215.4,y:180.5}).wait(1).to({graphics:mask_3_graphics_83,x:215.4,y:179.1}).wait(1).to({graphics:mask_3_graphics_84,x:215.4,y:177.7}).wait(1).to({graphics:mask_3_graphics_85,x:215.3,y:176.3}).wait(1).to({graphics:mask_3_graphics_86,x:215.3,y:175}).wait(1).to({graphics:mask_3_graphics_87,x:215.3,y:173.8}).wait(1).to({graphics:mask_3_graphics_88,x:215.3,y:172.5}).wait(1).to({graphics:mask_3_graphics_89,x:215.3,y:171.2}).wait(1).to({graphics:mask_3_graphics_90,x:215.3,y:169.9}).wait(1).to({graphics:mask_3_graphics_91,x:215.3,y:168.6}).wait(1).to({graphics:mask_3_graphics_92,x:215.3,y:167.3}).wait(1).to({graphics:mask_3_graphics_93,x:215.3,y:166}).wait(1).to({graphics:mask_3_graphics_94,x:215.3,y:164.6}).wait(1).to({graphics:mask_3_graphics_95,x:215.3,y:163.3}).wait(1).to({graphics:mask_3_graphics_96,x:215.3,y:162}).wait(1).to({graphics:mask_3_graphics_97,x:215.3,y:160.7}).wait(1).to({graphics:mask_3_graphics_98,x:215.3,y:159.3}).wait(1).to({graphics:mask_3_graphics_99,x:215.2,y:158}).wait(1).to({graphics:mask_3_graphics_100,x:215.2,y:156.7}).wait(1).to({graphics:mask_3_graphics_101,x:215.2,y:155.3}).wait(1).to({graphics:mask_3_graphics_102,x:215.2,y:154}).wait(1).to({graphics:mask_3_graphics_103,x:215.2,y:152.6}).wait(1).to({graphics:mask_3_graphics_104,x:215.2,y:151.3}).wait(1).to({graphics:mask_3_graphics_105,x:215.2,y:149.9}).wait(1).to({graphics:mask_3_graphics_106,x:215.2,y:148.6}).wait(1).to({graphics:mask_3_graphics_107,x:215.2,y:147.2}).wait(1).to({graphics:mask_3_graphics_108,x:215.2,y:145.9}).wait(1).to({graphics:mask_3_graphics_109,x:215.2,y:144.5}).wait(1).to({graphics:mask_3_graphics_110,x:215.2,y:144.6}).wait(1).to({graphics:mask_3_graphics_111,x:215.2,y:146}).wait(1).to({graphics:mask_3_graphics_112,x:215.1,y:147.3}).wait(1).to({graphics:mask_3_graphics_113,x:215.1,y:148.7}).wait(1).to({graphics:mask_3_graphics_114,x:215,y:150}).wait(1).to({graphics:mask_3_graphics_115,x:214.9,y:151.4}).wait(1).to({graphics:mask_3_graphics_116,x:214.8,y:152.7}).wait(1).to({graphics:mask_3_graphics_117,x:214.7,y:154.1}).wait(1).to({graphics:mask_3_graphics_118,x:214.5,y:155.4}).wait(1).to({graphics:mask_3_graphics_119,x:214.4,y:156.8}).wait(1).to({graphics:mask_3_graphics_120,x:214.2,y:158.1}).wait(1).to({graphics:mask_3_graphics_121,x:213.9,y:159.5}).wait(1).to({graphics:mask_3_graphics_122,x:213.7,y:160.8}).wait(1).to({graphics:mask_3_graphics_123,x:213.5,y:162.1}).wait(1).to({graphics:mask_3_graphics_124,x:213.2,y:163.5}).wait(1).to({graphics:mask_3_graphics_125,x:212.9,y:164.8}).wait(1).to({graphics:mask_3_graphics_126,x:212.6,y:166.1}).wait(1).to({graphics:mask_3_graphics_127,x:212.3,y:167.4}).wait(1).to({graphics:mask_3_graphics_128,x:211.9,y:168.7}).wait(1).to({graphics:mask_3_graphics_129,x:211.6,y:170}).wait(1).to({graphics:mask_3_graphics_130,x:211.2,y:171.3}).wait(1).to({graphics:mask_3_graphics_131,x:210.8,y:172.6}).wait(1).to({graphics:mask_3_graphics_132,x:210.4,y:173.9}).wait(1).to({graphics:mask_3_graphics_133,x:209.9,y:175.2}).wait(1).to({graphics:mask_3_graphics_134,x:209.5,y:176.5}).wait(1).to({graphics:mask_3_graphics_135,x:209,y:177.8}).wait(1).to({graphics:mask_3_graphics_136,x:208.5,y:179}).wait(1).to({graphics:mask_3_graphics_137,x:208,y:180.3}).wait(1).to({graphics:mask_3_graphics_138,x:207.5,y:181.5}).wait(1).to({graphics:mask_3_graphics_139,x:206.9,y:182.8}).wait(1).to({graphics:mask_3_graphics_140,x:206.3,y:184}).wait(1).to({graphics:mask_3_graphics_141,x:205.8,y:185.2}).wait(1).to({graphics:mask_3_graphics_142,x:205.2,y:186.4}).wait(1).to({graphics:mask_3_graphics_143,x:204.5,y:187.6}).wait(1).to({graphics:mask_3_graphics_144,x:203.9,y:188.8}).wait(1).to({graphics:mask_3_graphics_145,x:203.3,y:190}).wait(1).to({graphics:mask_3_graphics_146,x:202.6,y:191.2}).wait(1).to({graphics:mask_3_graphics_147,x:201.9,y:192.3}).wait(1).to({graphics:mask_3_graphics_148,x:201.2,y:193.5}).wait(1).to({graphics:mask_3_graphics_149,x:200.5,y:194.6}).wait(1).to({graphics:mask_3_graphics_150,x:199.7,y:195.8}).wait(1).to({graphics:mask_3_graphics_151,x:199,y:196.9}).wait(1).to({graphics:mask_3_graphics_152,x:198.2,y:198}).wait(1).to({graphics:mask_3_graphics_153,x:197.4,y:199.1}).wait(1).to({graphics:mask_3_graphics_154,x:196.6,y:200.2}).wait(1).to({graphics:mask_3_graphics_155,x:195.8,y:201.3}).wait(1).to({graphics:mask_3_graphics_156,x:195,y:202.3}).wait(1).to({graphics:mask_3_graphics_157,x:194.1,y:203.4}).wait(1).to({graphics:mask_3_graphics_158,x:193.2,y:204.4}).wait(1).to({graphics:mask_3_graphics_159,x:192.4,y:205.4}).wait(396));

	// Layer 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("AHMOrQheBAhnAyQiEBBiRAYQiQAWiPglQiNgihshhQhshigfiQQgfiPARiSQARiNAiiKQAiiMA7iDQA6iCBRh2QBRh3BfhrQBRhdBXhWQBjhiBwhYQBzhZCGg6QCGg5COgQQABAAABgBQAYgDAYgB");
	this.shape_5.setTransform(169.1,259.3);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(9).to({_off:false},0).wait(546));

	// Letter
	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(290.4,259.1);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(555));

	// Background
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_6.setTransform(275,275,3.373,2.543);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_7.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(555));

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