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


(lib.w = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApVVcQhYg1glhfQhsBihuAyQhyAyiAAAQi0AAhhhpQhihpAAi3QAAhrB2kfIFbrmICjmPQBFjKAAhnQAAigh4hmQhyhiigAAQhfAAhVAtIieBSQhfBEhPAAQhsAAAAhXQAAhJBmhQQAGgFAKgFQBkhNCLg1QCUg2BzAAQB/AAB2AqQBwAtBXBQQBaBQAyBrQAyBzAACCQAACPhNDqIi7HGQkvJzhSDaQgwCLAAAZQAACUCHAAQCMAAB2haQBphOBjigQB7jCDZoQQDmoOGAu4QAghGBQAAIAtALQBNAYAABTIgJAyQmkPCi9H1QjXIUiFDNIgUBSQAACUCFAAQBuAABfg0QBYgzBPhhQB6iWCWlPIHYwOICvlIQBpikByhuQCAiACThBQCjhFC+AAQB6AAAAB1QAAB6h6AAQiRAAh9A6QhzA3hmBpQhaBfhVCLIiREdInEPpQjSG6iMCeQhuB6h6BBQiJBEigAAQh9AAhXgyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187.4,-142.1,375,284.4);


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


(lib.ar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(48.5,-50.6,1,1,65.5,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0.1,rotation:31.8,guide:{path:[48.5,-50.4,-9.2,-28.3,-42.7,42.1]}},74).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AA1kPIBIhMICkCaIhIBMg");
	var mask_graphics_1 = new cjs.Graphics().p("Ah7ggIBUhZICjCaIhUBYg");
	var mask_graphics_2 = new cjs.Graphics().p("AiBgZIBghmICjCaIhgBlg");
	var mask_graphics_3 = new cjs.Graphics().p("AiHgTIBshyICjCZIhsByg");
	var mask_graphics_4 = new cjs.Graphics().p("AiNgNIB4h/ICjCaIh4B/g");
	var mask_graphics_5 = new cjs.Graphics().p("AiTgHICEiLICjCaIiECLg");
	var mask_graphics_6 = new cjs.Graphics().p("AiZAAICQiZICjCaIiQCYg");
	var mask_graphics_7 = new cjs.Graphics().p("AifAFICcikICjCbIicCkg");
	var mask_graphics_8 = new cjs.Graphics().p("AilAMICnixICkCaIinCxg");
	var mask_graphics_9 = new cjs.Graphics().p("AirASICzi+ICkCbIizC9g");
	var mask_graphics_10 = new cjs.Graphics().p("AixAZIC/jLICkCbIi/DKg");
	var mask_graphics_11 = new cjs.Graphics().p("Ai3AfIDLjXICkCbIjLDXg");
	var mask_graphics_12 = new cjs.Graphics().p("Ai9AmIDXjlICkCbIjXDkg");
	var mask_graphics_13 = new cjs.Graphics().p("AjDAsIDjjxICkCaIjjDxg");
	var mask_graphics_14 = new cjs.Graphics().p("AjJAyIDvj+ICkCbIjvD+g");
	var mask_graphics_15 = new cjs.Graphics().p("AjPA5ID7kLICkCaIj7ELg");
	var mask_graphics_16 = new cjs.Graphics().p("AjVA/IEHkXICkCaIkHEYg");
	var mask_graphics_17 = new cjs.Graphics().p("AjbBFIETkkICkCbIkTEkg");
	var mask_graphics_18 = new cjs.Graphics().p("AjhBMIEfkxICkCaIkfExg");
	var mask_graphics_19 = new cjs.Graphics().p("AjnBSIErk9ICkCaIkrE9g");
	var mask_graphics_20 = new cjs.Graphics().p("AjtBYIE3lKICkCaIk3FLg");
	var mask_graphics_21 = new cjs.Graphics().p("AjzBfIFDlXICkCaIlDFXg");
	var mask_graphics_22 = new cjs.Graphics().p("Aj5BlIFPlkICkCbIlPFkg");
	var mask_graphics_23 = new cjs.Graphics().p("Aj/BrIFblwICkCaIlbFxg");
	var mask_graphics_24 = new cjs.Graphics().p("AkFBxIFnl8ICkCaIlnF9g");
	var mask_graphics_25 = new cjs.Graphics().p("AkLB4IFzmKICkCbIlzGKg");
	var mask_graphics_26 = new cjs.Graphics().p("AkRB+IF/mWICkCaIl/GXg");
	var mask_graphics_27 = new cjs.Graphics().p("AkXCFIGLmjICkCaImLGjg");
	var mask_graphics_28 = new cjs.Graphics().p("AkdCLIGXmwICkCbImXGwg");
	var mask_graphics_29 = new cjs.Graphics().p("AkjCSIGjm+ICkCbImjG+g");
	var mask_graphics_30 = new cjs.Graphics().p("AkpCYIGvnKICkCbImvHKg");
	var mask_graphics_31 = new cjs.Graphics().p("AkvCfIG7nXICkCbIm7HWg");
	var mask_graphics_32 = new cjs.Graphics().p("Ak1ClIHHnkICkCbInHHkg");
	var mask_graphics_33 = new cjs.Graphics().p("Ak7CsIHTnxICkCbInTHwg");
	var mask_graphics_34 = new cjs.Graphics().p("AlBCyIHfn+ICkCbInfH+g");
	var mask_graphics_35 = new cjs.Graphics().p("AlHC4IHroKICkCbInrIKg");
	var mask_graphics_36 = new cjs.Graphics().p("AlNC+IH3oWICkCbIn3IWg");
	var mask_graphics_37 = new cjs.Graphics().p("AlTDFIIDokICkCbIoDIjg");
	var mask_graphics_38 = new cjs.Graphics().p("AlaDLIIQowIClCbIoQIwg");
	var mask_graphics_39 = new cjs.Graphics().p("AlgDRIIco8IClCaIocI9g");
	var mask_graphics_40 = new cjs.Graphics().p("AlmDYIIopKIClCbIooJJg");
	var mask_graphics_41 = new cjs.Graphics().p("AlsDeII0pWIClCbIo0JWg");
	var mask_graphics_42 = new cjs.Graphics().p("AlyDlIJApjIClCaIpAJjg");
	var mask_graphics_43 = new cjs.Graphics().p("Al4DrIJMpwIClCbIpMJwg");
	var mask_graphics_44 = new cjs.Graphics().p("Al+DxIJYp8IClCbIpYJ8g");
	var mask_graphics_45 = new cjs.Graphics().p("AmED3IJkqJIClCbIpkKJg");
	var mask_graphics_46 = new cjs.Graphics().p("AmKD+IJwqWIClCbIpwKWg");
	var mask_graphics_47 = new cjs.Graphics().p("AmQEFIJ8qkIClCcIp8Kjg");
	var mask_graphics_48 = new cjs.Graphics().p("AmWELIKIqwIClCbIqIKwg");
	var mask_graphics_49 = new cjs.Graphics().p("AmcERIKUq8IClCbIqUK8g");
	var mask_graphics_50 = new cjs.Graphics().p("AmiEYIKgrKIClCcIqgLJg");
	var mask_graphics_51 = new cjs.Graphics().p("AmoEeIKsrWIClCbIqsLWg");
	var mask_graphics_52 = new cjs.Graphics().p("AmuElIK4rjIClCbIq4Lig");
	var mask_graphics_53 = new cjs.Graphics().p("Am0ErILErwIClCbIrELwg");
	var mask_graphics_54 = new cjs.Graphics().p("Am6EyILQr9IClCbIrQL8g");
	var mask_graphics_55 = new cjs.Graphics().p("AnAE4ILcsKIClCcIrcMIg");
	var mask_graphics_56 = new cjs.Graphics().p("AnGE+ILosWIClCbIrpMWg");
	var mask_graphics_57 = new cjs.Graphics().p("AnMFEIL0siIClCbIr1Mig");
	var mask_graphics_58 = new cjs.Graphics().p("AnSFKIMAsvIClCcIsBMug");
	var mask_graphics_59 = new cjs.Graphics().p("AnYFRIMMs8IClCbIsNM8g");
	var mask_graphics_60 = new cjs.Graphics().p("AneFXIMYtIIClCbIsZNIg");
	var mask_graphics_61 = new cjs.Graphics().p("AnkFeIMktWIClCbIslNWg");
	var mask_graphics_62 = new cjs.Graphics().p("AnqFkIMwtiIClCaIswNjg");
	var mask_graphics_63 = new cjs.Graphics().p("AnwFqIM8tvIClCbIs8Nvg");
	var mask_graphics_64 = new cjs.Graphics().p("An2FxINIt8IClCbItJN8g");
	var mask_graphics_65 = new cjs.Graphics().p("An8F4INUuJIClCaItUOKg");
	var mask_graphics_66 = new cjs.Graphics().p("AoCF+INguWIClCbItgOWg");
	var mask_graphics_67 = new cjs.Graphics().p("AoIGEINsuiIClCbIttOig");
	var mask_graphics_68 = new cjs.Graphics().p("AoOGLIN4uvIClCaIt4Ovg");
	var mask_graphics_69 = new cjs.Graphics().p("AoUGRIOEu8IClCbIuEO8g");
	var mask_graphics_70 = new cjs.Graphics().p("AoaGXIOQvIIClCbIuRPIg");
	var mask_graphics_71 = new cjs.Graphics().p("AogGeIOcvWIClCbIucPWg");
	var mask_graphics_72 = new cjs.Graphics().p("AomGkIOoviIClCbIuoPig");
	var mask_graphics_73 = new cjs.Graphics().p("AosGrIO0vvIClCaIu1Pvg");
	var mask_graphics_74 = new cjs.Graphics().p("AoyGxIPAv8IClCbIvAP8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:28.9,y:-34.8}).wait(1).to({graphics:mask_graphics_1,x:45.4,y:-57.5}).wait(1).to({graphics:mask_graphics_2,x:44.8,y:-56.8}).wait(1).to({graphics:mask_graphics_3,x:44.2,y:-56.2}).wait(1).to({graphics:mask_graphics_4,x:43.6,y:-55.6}).wait(1).to({graphics:mask_graphics_5,x:43,y:-54.9}).wait(1).to({graphics:mask_graphics_6,x:42.4,y:-54.3}).wait(1).to({graphics:mask_graphics_7,x:41.8,y:-53.7}).wait(1).to({graphics:mask_graphics_8,x:41.2,y:-53}).wait(1).to({graphics:mask_graphics_9,x:40.6,y:-52.4}).wait(1).to({graphics:mask_graphics_10,x:40,y:-51.8}).wait(1).to({graphics:mask_graphics_11,x:39.4,y:-51.1}).wait(1).to({graphics:mask_graphics_12,x:38.8,y:-50.5}).wait(1).to({graphics:mask_graphics_13,x:38.1,y:-49.9}).wait(1).to({graphics:mask_graphics_14,x:37.5,y:-49.2}).wait(1).to({graphics:mask_graphics_15,x:36.9,y:-48.6}).wait(1).to({graphics:mask_graphics_16,x:36.3,y:-47.9}).wait(1).to({graphics:mask_graphics_17,x:35.7,y:-47.3}).wait(1).to({graphics:mask_graphics_18,x:35.1,y:-46.7}).wait(1).to({graphics:mask_graphics_19,x:34.5,y:-46}).wait(1).to({graphics:mask_graphics_20,x:33.9,y:-45.4}).wait(1).to({graphics:mask_graphics_21,x:33.3,y:-44.8}).wait(1).to({graphics:mask_graphics_22,x:32.7,y:-44.1}).wait(1).to({graphics:mask_graphics_23,x:32.1,y:-43.5}).wait(1).to({graphics:mask_graphics_24,x:31.5,y:-42.8}).wait(1).to({graphics:mask_graphics_25,x:30.9,y:-42.2}).wait(1).to({graphics:mask_graphics_26,x:30.3,y:-41.6}).wait(1).to({graphics:mask_graphics_27,x:29.7,y:-40.9}).wait(1).to({graphics:mask_graphics_28,x:29.1,y:-40.3}).wait(1).to({graphics:mask_graphics_29,x:28.5,y:-39.7}).wait(1).to({graphics:mask_graphics_30,x:27.9,y:-39}).wait(1).to({graphics:mask_graphics_31,x:27.3,y:-38.4}).wait(1).to({graphics:mask_graphics_32,x:26.7,y:-37.8}).wait(1).to({graphics:mask_graphics_33,x:26.1,y:-37.1}).wait(1).to({graphics:mask_graphics_34,x:25.5,y:-36.5}).wait(1).to({graphics:mask_graphics_35,x:24.9,y:-35.9}).wait(1).to({graphics:mask_graphics_36,x:24.3,y:-35.2}).wait(1).to({graphics:mask_graphics_37,x:23.8,y:-34.6}).wait(1).to({graphics:mask_graphics_38,x:23.1,y:-34}).wait(1).to({graphics:mask_graphics_39,x:22.5,y:-33.3}).wait(1).to({graphics:mask_graphics_40,x:21.9,y:-32.7}).wait(1).to({graphics:mask_graphics_41,x:21.3,y:-32}).wait(1).to({graphics:mask_graphics_42,x:20.7,y:-31.4}).wait(1).to({graphics:mask_graphics_43,x:20.1,y:-30.8}).wait(1).to({graphics:mask_graphics_44,x:19.5,y:-30.1}).wait(1).to({graphics:mask_graphics_45,x:18.9,y:-29.5}).wait(1).to({graphics:mask_graphics_46,x:18.3,y:-28.9}).wait(1).to({graphics:mask_graphics_47,x:17.7,y:-28.2}).wait(1).to({graphics:mask_graphics_48,x:17.1,y:-27.6}).wait(1).to({graphics:mask_graphics_49,x:16.5,y:-27}).wait(1).to({graphics:mask_graphics_50,x:15.9,y:-26.3}).wait(1).to({graphics:mask_graphics_51,x:15.3,y:-25.7}).wait(1).to({graphics:mask_graphics_52,x:14.7,y:-25.1}).wait(1).to({graphics:mask_graphics_53,x:14.1,y:-24.4}).wait(1).to({graphics:mask_graphics_54,x:13.5,y:-23.8}).wait(1).to({graphics:mask_graphics_55,x:12.9,y:-23.1}).wait(1).to({graphics:mask_graphics_56,x:12.3,y:-22.5}).wait(1).to({graphics:mask_graphics_57,x:11.7,y:-21.9}).wait(1).to({graphics:mask_graphics_58,x:11.1,y:-21.2}).wait(1).to({graphics:mask_graphics_59,x:10.5,y:-20.6}).wait(1).to({graphics:mask_graphics_60,x:9.9,y:-20}).wait(1).to({graphics:mask_graphics_61,x:9.3,y:-19.3}).wait(1).to({graphics:mask_graphics_62,x:8.7,y:-18.7}).wait(1).to({graphics:mask_graphics_63,x:8.1,y:-18}).wait(1).to({graphics:mask_graphics_64,x:7.5,y:-17.4}).wait(1).to({graphics:mask_graphics_65,x:6.9,y:-16.8}).wait(1).to({graphics:mask_graphics_66,x:6.3,y:-16.2}).wait(1).to({graphics:mask_graphics_67,x:5.7,y:-15.5}).wait(1).to({graphics:mask_graphics_68,x:5.1,y:-14.9}).wait(1).to({graphics:mask_graphics_69,x:4.5,y:-14.2}).wait(1).to({graphics:mask_graphics_70,x:3.9,y:-13.6}).wait(1).to({graphics:mask_graphics_71,x:3.3,y:-13}).wait(1).to({graphics:mask_graphics_72,x:2.7,y:-12.3}).wait(1).to({graphics:mask_graphics_73,x:2.1,y:-11.7}).wait(1).to({graphics:mask_graphics_74,x:1.5,y:-11.1}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AnIHQQFQrCJBjd");
	this.shape.setTransform(2.8,-4.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.2,-61.9,21.2,20.3);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-27.1,18.6,1,1,-117.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-151.7,guide:{path:[-27,18.5,15.9,0.2,33.1,-27]}},44).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AiggCIA+gvIBvCTIg9Aug");
	var mask_graphics_1 = new cjs.Graphics().p("AhcgtIBKg4IBvCSIhLA5g");
	var mask_graphics_2 = new cjs.Graphics().p("AhjgnIBYhDIBvCSIhYBDg");
	var mask_graphics_3 = new cjs.Graphics().p("AhqgiIBlhNIBwCTIhlBMg");
	var mask_graphics_4 = new cjs.Graphics().p("AhwgeIBxhWIBwCTIhxBWg");
	var mask_graphics_5 = new cjs.Graphics().p("Ah2gZIB+hgIBvCTIh+Bgg");
	var mask_graphics_6 = new cjs.Graphics().p("Ah9gUICLhqIBwCTIiLBqg");
	var mask_graphics_7 = new cjs.Graphics().p("AiDgPICXhzIBwCSIiXBzg");
	var mask_graphics_8 = new cjs.Graphics().p("AiKgKIClh+IBwCTIilB+g");
	var mask_graphics_9 = new cjs.Graphics().p("AiQgFICxiIIBwCTIixCIg");
	var mask_graphics_10 = new cjs.Graphics().p("AiXAAIC/iRIBwCSIi/CRg");
	var mask_graphics_11 = new cjs.Graphics().p("AidAEIDLiaIBwCTIjLCag");
	var mask_graphics_12 = new cjs.Graphics().p("AikAJIDZikIBwCTIjZCkg");
	var mask_graphics_13 = new cjs.Graphics().p("AiqANIDlitIBwCTIjlCug");
	var mask_graphics_14 = new cjs.Graphics().p("AiwASIDyi3IBvCUIjyC3g");
	var mask_graphics_15 = new cjs.Graphics().p("Ai3AXID/jBIBwCUIj/DBg");
	var mask_graphics_16 = new cjs.Graphics().p("Ai+AcIEMjLIBxCUIkMDLg");
	var mask_graphics_17 = new cjs.Graphics().p("AjEAhIEZjVIBwCUIkZDVg");
	var mask_graphics_18 = new cjs.Graphics().p("AjLAmIEnjfIBwCUIknDfg");
	var mask_graphics_19 = new cjs.Graphics().p("AjRArIEzjpIBwCUIkzDog");
	var mask_graphics_20 = new cjs.Graphics().p("AjXAwIE/jyIBxCTIlBDzg");
	var mask_graphics_21 = new cjs.Graphics().p("AjeA1IFNj9IBwCUIlND9g");
	var mask_graphics_22 = new cjs.Graphics().p("AjlA6IFbkGIBwCTIlbEHg");
	var mask_graphics_23 = new cjs.Graphics().p("AjrA/IFnkQIBwCTIlnEQg");
	var mask_graphics_24 = new cjs.Graphics().p("AjyBEIF1kaIBvCTIlzEag");
	var mask_graphics_25 = new cjs.Graphics().p("Aj4BJIGBkkIBwCTImBEkg");
	var mask_graphics_26 = new cjs.Graphics().p("Aj+BNIGNktIBwCTImNEug");
	var mask_graphics_27 = new cjs.Graphics().p("AkFBSIGbk3IBwCUImbE3g");
	var mask_graphics_28 = new cjs.Graphics().p("AkLBYIGnlCIBwCTImoFCg");
	var mask_graphics_29 = new cjs.Graphics().p("AkSBcIG1lLIBwCUIm1FLg");
	var mask_graphics_30 = new cjs.Graphics().p("AkZBhIHClVIBxCUInCFVg");
	var mask_graphics_31 = new cjs.Graphics().p("AkfBmIHPlfIBwCUInPFfg");
	var mask_graphics_32 = new cjs.Graphics().p("AklBrIHbloIBwCTInbFog");
	var mask_graphics_33 = new cjs.Graphics().p("AksBwIHplyIBwCTInpFyg");
	var mask_graphics_34 = new cjs.Graphics().p("AkyB1IH1l9IBwCUIn1F9g");
	var mask_graphics_35 = new cjs.Graphics().p("Ak5B6IIDmGIBwCTIoDGGg");
	var mask_graphics_36 = new cjs.Graphics().p("Ak/B/IIPmQIBwCUIoPGPg");
	var mask_graphics_37 = new cjs.Graphics().p("AlGCEIIdmaIBwCTIodGag");
	var mask_graphics_38 = new cjs.Graphics().p("AlMCIIIpmjIBwCTIopGkg");
	var mask_graphics_39 = new cjs.Graphics().p("AlTCNII2mtIBxCUIo2Gtg");
	var mask_graphics_40 = new cjs.Graphics().p("AlZCSIJDm3IBwCTIpDG4g");
	var mask_graphics_41 = new cjs.Graphics().p("AlfCXIJQnBIBvCUIpQHBg");
	var mask_graphics_42 = new cjs.Graphics().p("AlmCcIJdnLIBwCUIpdHLg");
	var mask_graphics_43 = new cjs.Graphics().p("AltChIJqnVIBxCUIpqHVg");
	var mask_graphics_44 = new cjs.Graphics().p("AlzCmIJ3neIBwCTIp3Heg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-16.1,y:14.4}).wait(1).to({graphics:mask_graphics_1,x:-22.9,y:18.7}).wait(1).to({graphics:mask_graphics_2,x:-22.2,y:18.2}).wait(1).to({graphics:mask_graphics_3,x:-21.6,y:17.8}).wait(1).to({graphics:mask_graphics_4,x:-21,y:17.3}).wait(1).to({graphics:mask_graphics_5,x:-20.4,y:16.8}).wait(1).to({graphics:mask_graphics_6,x:-19.8,y:16.3}).wait(1).to({graphics:mask_graphics_7,x:-19.2,y:15.9}).wait(1).to({graphics:mask_graphics_8,x:-18.5,y:15.4}).wait(1).to({graphics:mask_graphics_9,x:-17.9,y:14.9}).wait(1).to({graphics:mask_graphics_10,x:-17.3,y:14.4}).wait(1).to({graphics:mask_graphics_11,x:-16.7,y:14}).wait(1).to({graphics:mask_graphics_12,x:-16.1,y:13.5}).wait(1).to({graphics:mask_graphics_13,x:-15.5,y:13}).wait(1).to({graphics:mask_graphics_14,x:-14.8,y:12.6}).wait(1).to({graphics:mask_graphics_15,x:-14.2,y:12.1}).wait(1).to({graphics:mask_graphics_16,x:-13.6,y:11.6}).wait(1).to({graphics:mask_graphics_17,x:-13,y:11.1}).wait(1).to({graphics:mask_graphics_18,x:-12.4,y:10.6}).wait(1).to({graphics:mask_graphics_19,x:-11.7,y:10.2}).wait(1).to({graphics:mask_graphics_20,x:-11.1,y:9.7}).wait(1).to({graphics:mask_graphics_21,x:-10.5,y:9.2}).wait(1).to({graphics:mask_graphics_22,x:-9.9,y:8.8}).wait(1).to({graphics:mask_graphics_23,x:-9.3,y:8.3}).wait(1).to({graphics:mask_graphics_24,x:-8.6,y:7.8}).wait(1).to({graphics:mask_graphics_25,x:-8,y:7.3}).wait(1).to({graphics:mask_graphics_26,x:-7.4,y:6.9}).wait(1).to({graphics:mask_graphics_27,x:-6.8,y:6.4}).wait(1).to({graphics:mask_graphics_28,x:-6.2,y:5.9}).wait(1).to({graphics:mask_graphics_29,x:-5.6,y:5.4}).wait(1).to({graphics:mask_graphics_30,x:-4.9,y:4.9}).wait(1).to({graphics:mask_graphics_31,x:-4.3,y:4.5}).wait(1).to({graphics:mask_graphics_32,x:-3.7,y:4}).wait(1).to({graphics:mask_graphics_33,x:-3.1,y:3.5}).wait(1).to({graphics:mask_graphics_34,x:-2.5,y:3.1}).wait(1).to({graphics:mask_graphics_35,x:-1.9,y:2.6}).wait(1).to({graphics:mask_graphics_36,x:-1.2,y:2.1}).wait(1).to({graphics:mask_graphics_37,x:-0.6,y:1.6}).wait(1).to({graphics:mask_graphics_38,x:0,y:1.2}).wait(1).to({graphics:mask_graphics_39,x:0.6,y:0.7}).wait(1).to({graphics:mask_graphics_40,x:1.2,y:0.2}).wait(1).to({graphics:mask_graphics_41,x:1.9,y:-0.3}).wait(1).to({graphics:mask_graphics_42,x:2.5,y:-0.7}).wait(1).to({graphics:mask_graphics_43,x:3.1,y:-1.2}).wait(1).to({graphics:mask_graphics_44,x:3.7,y:-1.7}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AjtEeQBrkwFwkK");
	this.shape.setTransform(3.5,-4.5,1,1,-167.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.5,9.5,19.7,20.2);


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
(lib.WS_Cursive_W = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_813 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(813).call(this.frame_813).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(103.9,163.1,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[103.9,163.3,161.3,133.9,183.9,157.6,206.5,181.3,199.7,211.2,192.9,241.3,156.8,310.1,120.7,378.9,134.7,395.6,143.4,406,151,405.5]}},265).wait(15).to({startPosition:0},0).to({guide:{path:[151,405.9,160,408.3,177.9,403,198.7,396.8,209.5,378,220.4,359.3,240.5,312.2,260.7,265.1,261.5,263.8,262.4,262.4,277.5,225.1,292.5,188,307.9,148.7]}},135).wait(15).to({startPosition:0},0).to({x:210,y:382.5},91).to({guide:{path:[209.9,382.6,226.8,420.9,263.9,397.2,301.1,373.4,332.1,288.6,363.1,203.8,385.7,175.9,408.2,148.2,440.9,146.5]}},208).wait(16).to({startPosition:0},0).to({guide:{path:[441.3,146.7,477.9,86.8,540,119.9,574.2,138.1,588.1,140.9,614.4,145.9,630.9,135.9]}},59).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(151.8,404.9,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},265).wait(15).to({_off:false,x:308.1,y:149.6},0).to({_off:true},135).wait(15).to({_off:false,x:443.1,y:146.6},0).to({_off:true},299).wait(76));

	// Layer 19
	this.instance_1 = new lib.ar2("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(282.4,295.5,1,1,167,0,0,0.7,-0.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(439).to({_off:false},0).wait(375));

	// Layer 16 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_689 = new cjs.Graphics().p("AAgVoQokokAAsJMA6lAAAQAAMJolIkQolImsJAAQsJAAolomg");
	var mask_graphics_690 = new cjs.Graphics().p("AUeeNQsJgUoVo0QoXoyAUsJMA6jABhQgUMJoyIWQofIErmAAIg3gBg");
	var mask_graphics_691 = new cjs.Graphics().p("ATueLQsIgooGpBQoJpAApsHMA6gADAQgpMIo/IHQoYHkrEAAQg2AAg4gDg");
	var mask_graphics_692 = new cjs.Graphics().p("ATAeIQsHg8n3pPQn6pNA8sGMA6aAEhQg8MHpNH4QoQHEqjAAQhQAAhSgGg");
	var mask_graphics_693 = new cjs.Graphics().p("ASSeDQsFhQnopbQnqpaBQsEMA6RAGBQhQMFpaHpQoHGlqEAAQhpAAhsgLg");
	var mask_graphics_694 = new cjs.Graphics().p("ARld9QsDhknYpoQnapmBjsBMA6GAHhQhkMDpmHZQn9GIpmAAQiBAAiGgSg");
	var mask_graphics_695 = new cjs.Graphics().p("AQ4d2Qr/h4nIpzQnLpzB4r/MA54AJCQh4L/pyHJQnyFspKAAQiZAAifgZg");
	var mask_graphics_696 = new cjs.Graphics().p("AQNduQr9iMm3p/Qm7p+CMr8MA5oAKhQiML8p9G5QnmFQovAAQiwAAi3ghg");
	var mask_graphics_697 = new cjs.Graphics().p("APidkQr5ifmmqLQmqqJCfr3MA5VAL/QifL5qJGoQnZE1oUABQjHAAjPgsg");
	var mask_graphics_698 = new cjs.Graphics().p("AO4dZQr0iymWqWQmZqUCzrzMA5AANeQizL0qTGYQnMEcn6AAQjeAAjmg3g");
	var mask_graphics_699 = new cjs.Graphics().p("AOPdNQrvjGmFqfQmIqfDHruMA4pAO8QjHLvqeGGQm+EEngAAQj0AAj9hDg");
	var mask_graphics_700 = new cjs.Graphics().p("ANndAQrqjZlzqqQl2qoDZrpMA4PAQZQjZLqqoF1QmvDsnJAAQkJAAkThQg");
	var mask_graphics_701 = new cjs.Graphics().p("ANAcyQrkjtliqyQlkqyDtrjMA3yAR2QjtLkqxFjQmfDWmxAAQkfAAkohfg");
	var mask_graphics_702 = new cjs.Graphics().p("AMacjQrekAlQq8QlSq7EArcMA3UATRQkALeq6FRQmPDBmZAAQk2AAk8hug");
	var mask_graphics_703 = new cjs.Graphics().p("AL1cSQrXkTk+rEQlArDETrWMA2yAUtQkSLXrDE/Ql9CsmDAAQlMAAlPh/g");
	var mask_graphics_704 = new cjs.Graphics().p("ALRcAQrQklkrrMQkurLElrPMA2QAWHQkmLPrKEtQlsCZlsAAQliAAliiRg");
	var mask_graphics_705 = new cjs.Graphics().p("AKubuQrHk4karUQkbrTE4rGMA1pAXfQk3LIrTEaQlYCHlWAAQl4AAl1ijg");
	var mask_graphics_706 = new cjs.Graphics().p("AKMbaQq/lKkHrbQkIrZFKq/MA1BAY4QlKK/rZEHQlFB2k/AAQmQAAmGi3g");
	var mask_graphics_707 = new cjs.Graphics().p("AJrbFQq2lcj0riQj2rfFcq3MA0YAaPQlcK3rgD1QkxBlkpAAQmnAAmXjMg");
	var mask_graphics_708 = new cjs.Graphics().p("AJLavQqtlujgrnQjjrmFuqtMAzrAbkQluKurmDhQkcBXkTAAQm+AAmojig");
	var mask_graphics_709 = new cjs.Graphics().p("AIsaYQqimAjOrtQjQrrGAqkMAy8Ac6Ql/KkrrDOQkHBJj+AAQnWAAm3j5g");
	var mask_graphics_710 = new cjs.Graphics().p("AIPZ/QqZmQi6ryQi8rwGRqaMAyLAeNQmRKarwC7QjwA7joAAQnvAAnFkRg");
	var mask_graphics_711 = new cjs.Graphics().p("AHzZmQqPmiimr2Qipr1GiqPMAxZAfgQmiKPr1CnQjaAwjRAAQoIAAnTkqg");
	var mask_graphics_712 = new cjs.Graphics().p("AHXZMQqDmziTr6QiVr5GzqEMAwjAgwQmyKEr5CUQjCAmi7AAQoiAAnhlEg");
	var mask_graphics_713 = new cjs.Graphics().p("AG+YxQp4nDh/r+QiCr9HCp4MAvuAh/QnDJ5r9CAQiqAdikAAQo9AAnslfg");
	var mask_graphics_714 = new cjs.Graphics().p("AGlYVQpsnUhrsBQhur/HSptMAu0AjOQnTJtr/BsQiSAViMAAQpZAAn4l7g");
	var mask_graphics_715 = new cjs.Graphics().p("AGNX3QpfnjhYsDQhZsCHiphMAt5AkaQnjJhsDBZQh4ANhzAAQp3AAoDmYg");
	var mask_graphics_716 = new cjs.Graphics().p("AF3XZQpTnzhDsFQhGsEHypUMAs8AllQnzJUsEBFQheAIhcAAQqVAAoMm2g");
	var mask_graphics_717 = new cjs.Graphics().p("AFiW6QpFoCgwsHQgysGIBpHMAr9AmvQoCJHsGAxQhDAEhCAAQq1AAoVnVg");
	var mask_graphics_718 = new cjs.Graphics().p("AFPWaQo5oRgbsIQgesHIQo5MAq8An2QoRI6sHAcIhQACQrWAAocn1g");
	var mask_graphics_719 = new cjs.Graphics().p("AE9V4QorofgIsIQgJsIIeorMAp5Ao9QofIrsHAJIgZAAQr6AAoioXg");
	var mask_graphics_720 = new cjs.Graphics().p("AZSePQsJgModotQodotANsJQAKsHIsodMAo1AqBQoiISrzAAIggAAg");
	var mask_graphics_721 = new cjs.Graphics().p("AY0eNQsJgfoPo7QoOo7AhsHQAesII6oPMAnuArEQobHxrQAAQgrAAgrgCg");
	var mask_graphics_722 = new cjs.Graphics().p("AYVeLQsHg0oApIQn/pJA0sFQAzsHJHoAMAmnAsEQoUHRqvAAQhFAAhHgEg");
	var mask_graphics_723 = new cjs.Graphics().p("AX4eHQsHhInwpVQnwpWBJsEQBGsFJUnxMAldAtDQoKGzqQAAQhfAAhggJg");
	var mask_graphics_724 = new cjs.Graphics().p("AXaeCQsEhcnhpiQngpiBcsCQBbsDJhnhMAkRAuAQoBGUpxAAQh3AAh7gOg");
	var mask_graphics_725 = new cjs.Graphics().p("AW+d7QsChvnRpvQnQpuBwr/QBusBJtnRMAjFAu7Qn2F4pVAAQiPAAiTgWg");
	var mask_graphics_726 = new cjs.Graphics().p("AWhdzQr+iDnBp6QnAp6CEr8QCBr+J6nBMAh3Av0QnrFco6AAQilAAitgeg");
	var mask_graphics_727 = new cjs.Graphics().p("AWGdqQr7iWmwqGQmwqFCYr5QCUr6KGmwMAgnAwqQnfFBoeAAQi9AAjEgng");
	var mask_graphics_728 = new cjs.Graphics().p("AVrdgQr3iqmfqRQmfqQCrr0QCor2KRmgMAfWAxgQnSEnoFAAQjTAAjbgyg");
	var mask_graphics_729 = new cjs.Graphics().p("AVQdVQryi+mOqbQmOqbC+rwQC9rxKbmOMAeDAySQnEEOnrAAQjpAAjzg9g");
	var mask_graphics_730 = new cjs.Graphics().p("AU3dIQrtjRl9qlQl9qlDSrqQDQrtKll9MAcvAzDQm1D2nTAAQj/AAkIhKg");
	var mask_graphics_731 = new cjs.Graphics().p("AUdc7QrnjllrqvQlrquDkrlQDkrmKulsMAbbAzxQmmDgm7AAQkVAAkehYg");
	var mask_graphics_732 = new cjs.Graphics().p("AUFcsQrhj4laq4QlZq3D4rfQD2rgK4laMAaFA0dQmWDKmjAAQksAAkyhng");
	var mask_graphics_733 = new cjs.Graphics().p("ATtccQrakLlIrAQlHrBELrYQEJrZLAlIMAYuA1HQmFC1mMAAQlCAAlGh3g");
	var mask_graphics_734 = new cjs.Graphics().p("ATWcLQrTkek2rIQk0rJEdrRQEcrSLJk2MAXVA1vQlzChl2AAQlYAAlZiIg");
	var mask_graphics_735 = new cjs.Graphics().p("AS/b5QrLkwkjrRQkirQEwrKQEurLLRkiMAV8A2UQlhCOlfAAQluAAltiag");
	var mask_graphics_736 = new cjs.Graphics().p("ASqblQrElCkQrYQkPrXFCrCQFBrDLXkQMAUiA23QlOB9lJAAQmEAAl+iug");
	var mask_graphics_737 = new cjs.Graphics().p("ASVbRQq7lVj+reQj8reFUq5QFTq7Lfj9MATGA3YQk6BskzAAQmbAAmPjCg");
	var mask_graphics_738 = new cjs.Graphics().p("AQAX2QpenmhWsEQhVsDHmpeQHkpfMEhVMAGdA6OQh0ANhwAAQp7AAoDmcg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(689).to({graphics:mask_graphics_689,x:323.3,y:193.4}).wait(1).to({graphics:mask_graphics_690,x:323.2,y:193.4}).wait(1).to({graphics:mask_graphics_691,x:323.2,y:193.4}).wait(1).to({graphics:mask_graphics_692,x:323,y:193.4}).wait(1).to({graphics:mask_graphics_693,x:322.8,y:193.4}).wait(1).to({graphics:mask_graphics_694,x:322.5,y:193.5}).wait(1).to({graphics:mask_graphics_695,x:322.2,y:193.5}).wait(1).to({graphics:mask_graphics_696,x:321.8,y:193.5}).wait(1).to({graphics:mask_graphics_697,x:321.3,y:193.6}).wait(1).to({graphics:mask_graphics_698,x:320.8,y:193.6}).wait(1).to({graphics:mask_graphics_699,x:320.3,y:193.6}).wait(1).to({graphics:mask_graphics_700,x:319.6,y:193.6}).wait(1).to({graphics:mask_graphics_701,x:318.9,y:193.7}).wait(1).to({graphics:mask_graphics_702,x:318.2,y:193.7}).wait(1).to({graphics:mask_graphics_703,x:317.3,y:193.7}).wait(1).to({graphics:mask_graphics_704,x:316.5,y:193.7}).wait(1).to({graphics:mask_graphics_705,x:315.5,y:193.7}).wait(1).to({graphics:mask_graphics_706,x:314.5,y:193.7}).wait(1).to({graphics:mask_graphics_707,x:313.5,y:193.7}).wait(1).to({graphics:mask_graphics_708,x:312.4,y:193.7}).wait(1).to({graphics:mask_graphics_709,x:311.2,y:193.7}).wait(1).to({graphics:mask_graphics_710,x:310,y:193.6}).wait(1).to({graphics:mask_graphics_711,x:308.8,y:193.6}).wait(1).to({graphics:mask_graphics_712,x:307.4,y:193.6}).wait(1).to({graphics:mask_graphics_713,x:306.1,y:193.6}).wait(1).to({graphics:mask_graphics_714,x:304.6,y:193.6}).wait(1).to({graphics:mask_graphics_715,x:303.2,y:193.5}).wait(1).to({graphics:mask_graphics_716,x:301.7,y:193.5}).wait(1).to({graphics:mask_graphics_717,x:300.1,y:193.5}).wait(1).to({graphics:mask_graphics_718,x:298.5,y:193.5}).wait(1).to({graphics:mask_graphics_719,x:296.8,y:193.5}).wait(1).to({graphics:mask_graphics_720,x:295.1,y:193.5}).wait(1).to({graphics:mask_graphics_721,x:293.3,y:193.5}).wait(1).to({graphics:mask_graphics_722,x:291.6,y:193.5}).wait(1).to({graphics:mask_graphics_723,x:289.7,y:193.6}).wait(1).to({graphics:mask_graphics_724,x:287.8,y:193.6}).wait(1).to({graphics:mask_graphics_725,x:285.9,y:193.7}).wait(1).to({graphics:mask_graphics_726,x:284,y:193.7}).wait(1).to({graphics:mask_graphics_727,x:282,y:193.7}).wait(1).to({graphics:mask_graphics_728,x:280,y:193.8}).wait(1).to({graphics:mask_graphics_729,x:277.9,y:193.8}).wait(1).to({graphics:mask_graphics_730,x:275.8,y:193.8}).wait(1).to({graphics:mask_graphics_731,x:273.7,y:193.9}).wait(1).to({graphics:mask_graphics_732,x:271.6,y:193.9}).wait(1).to({graphics:mask_graphics_733,x:269.4,y:193.9}).wait(1).to({graphics:mask_graphics_734,x:267.2,y:193.9}).wait(1).to({graphics:mask_graphics_735,x:265,y:193.9}).wait(1).to({graphics:mask_graphics_736,x:262.7,y:193.9}).wait(1).to({graphics:mask_graphics_737,x:260.4,y:193.9}).wait(1).to({graphics:mask_graphics_738,x:240.2,y:193.8}).wait(76));

	// Layer 15
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("AyKP3QC4GyFzjuQF0jtE1tQQE3tPD+k0QDOj5E+gR");
	this.shape_1.setTransform(324.6,276);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(689).to({_off:false},0).wait(125));

	// Layer 14 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_583 = new cjs.Graphics().p("AvEGaIAAszIeJAAIAAMzg");
	var mask_1_graphics_584 = new cjs.Graphics().p("AvEGiIAAtDIeJAAIAANDg");
	var mask_1_graphics_585 = new cjs.Graphics().p("AvEGqIAAtTIeJAAIAANTg");
	var mask_1_graphics_586 = new cjs.Graphics().p("AvEGyIAAtjIeJAAIAANjg");
	var mask_1_graphics_587 = new cjs.Graphics().p("AvEG7IAAt1IeJAAIAAN1g");
	var mask_1_graphics_588 = new cjs.Graphics().p("AvEHDIAAuFIeJAAIAAOFg");
	var mask_1_graphics_589 = new cjs.Graphics().p("AvEHLIAAuVIeJAAIAAOVg");
	var mask_1_graphics_590 = new cjs.Graphics().p("AvEHTIAAumIeJAAIAAOmg");
	var mask_1_graphics_591 = new cjs.Graphics().p("AvEHcIAAu3IeJAAIAAO3g");
	var mask_1_graphics_592 = new cjs.Graphics().p("AvEHkIAAvHIeJAAIAAPHg");
	var mask_1_graphics_593 = new cjs.Graphics().p("AvEHsIAAvXIeJAAIAAPXg");
	var mask_1_graphics_594 = new cjs.Graphics().p("AvEH0IAAvnIeJAAIAAPng");
	var mask_1_graphics_595 = new cjs.Graphics().p("AvEH8IAAv4IeJAAIAAP4g");
	var mask_1_graphics_596 = new cjs.Graphics().p("AvEIFIAAwJIeJAAIAAQJg");
	var mask_1_graphics_597 = new cjs.Graphics().p("AvEINIAAwZIeJAAIAAQZg");
	var mask_1_graphics_598 = new cjs.Graphics().p("AvEIVIAAwpIeJAAIAAQpg");
	var mask_1_graphics_599 = new cjs.Graphics().p("AvEIdIAAw5IeJAAIAAQ5g");
	var mask_1_graphics_600 = new cjs.Graphics().p("AvEIlIAAxKIeJAAIAARKg");
	var mask_1_graphics_601 = new cjs.Graphics().p("AvEIuIAAxbIeJAAIAARbg");
	var mask_1_graphics_602 = new cjs.Graphics().p("AvEI2IAAxrIeJAAIAARrg");
	var mask_1_graphics_603 = new cjs.Graphics().p("AvEI+IAAx7IeJAAIAAR7g");
	var mask_1_graphics_604 = new cjs.Graphics().p("AvEJGIAAyLIeJAAIAASLg");
	var mask_1_graphics_605 = new cjs.Graphics().p("AvEJOIAAycIeJAAIAAScg");
	var mask_1_graphics_606 = new cjs.Graphics().p("AvEJXIAAytIeJAAIAAStg");
	var mask_1_graphics_607 = new cjs.Graphics().p("AvEJfIAAy9IeJAAIAAS9g");
	var mask_1_graphics_608 = new cjs.Graphics().p("AvEJnIAAzNIeJAAIAATNg");
	var mask_1_graphics_609 = new cjs.Graphics().p("AvEJvIAAzdIeJAAIAATdg");
	var mask_1_graphics_610 = new cjs.Graphics().p("AvEJ3IAAzuIeJAAIAATug");
	var mask_1_graphics_611 = new cjs.Graphics().p("AvEKAIAAz/IeJAAIAAT/g");
	var mask_1_graphics_612 = new cjs.Graphics().p("AvEKIIAA0PIeJAAIAAUPg");
	var mask_1_graphics_613 = new cjs.Graphics().p("AvEKQIAA0fIeJAAIAAUfg");
	var mask_1_graphics_614 = new cjs.Graphics().p("AvEKYIAA0vIeJAAIAAUvg");
	var mask_1_graphics_615 = new cjs.Graphics().p("AvEKgIAA0/IeJAAIAAU/g");
	var mask_1_graphics_616 = new cjs.Graphics().p("AvEKpIAA1RIeJAAIAAVRg");
	var mask_1_graphics_617 = new cjs.Graphics().p("AvEKxIAA1hIeJAAIAAVhg");
	var mask_1_graphics_618 = new cjs.Graphics().p("AvEK5IAA1xIeJAAIAAVxg");
	var mask_1_graphics_619 = new cjs.Graphics().p("AvELBIAA2BIeJAAIAAWBg");
	var mask_1_graphics_620 = new cjs.Graphics().p("AvELJIAA2RIeJAAIAAWRg");
	var mask_1_graphics_621 = new cjs.Graphics().p("AvELSIAA2jIeJAAIAAWjg");
	var mask_1_graphics_622 = new cjs.Graphics().p("AvELaIAA2zIeJAAIAAWzg");
	var mask_1_graphics_623 = new cjs.Graphics().p("AvELiIAA3DIeJAAIAAXDg");
	var mask_1_graphics_624 = new cjs.Graphics().p("AvELqIAA3UIeJAAIAAXUg");
	var mask_1_graphics_625 = new cjs.Graphics().p("AvELyIAA3jIeJAAIAAXjg");
	var mask_1_graphics_626 = new cjs.Graphics().p("AvEL7IAA31IeJAAIAAX1g");
	var mask_1_graphics_627 = new cjs.Graphics().p("AvEMDIAA4FIeJAAIAAYFg");
	var mask_1_graphics_628 = new cjs.Graphics().p("AvEMLIAA4VIeJAAIAAYVg");
	var mask_1_graphics_629 = new cjs.Graphics().p("AvEMTIAA4mIeJAAIAAYmg");
	var mask_1_graphics_630 = new cjs.Graphics().p("AvEMcIAA43IeJAAIAAY3g");
	var mask_1_graphics_631 = new cjs.Graphics().p("AvEMkIAA5HIeJAAIAAZHg");
	var mask_1_graphics_632 = new cjs.Graphics().p("AvEMsIAA5XIeJAAIAAZXg");
	var mask_1_graphics_633 = new cjs.Graphics().p("AvEM0IAA5nIeJAAIAAZng");
	var mask_1_graphics_634 = new cjs.Graphics().p("AvEM8IAA54IeJAAIAAZ4g");
	var mask_1_graphics_635 = new cjs.Graphics().p("AvENFIAA6JIeJAAIAAaJg");
	var mask_1_graphics_636 = new cjs.Graphics().p("AvENNIAA6ZIeJAAIAAaZg");
	var mask_1_graphics_637 = new cjs.Graphics().p("AvENVIAA6pIeJAAIAAapg");
	var mask_1_graphics_638 = new cjs.Graphics().p("AvENeIAA67IeJAAIAAa7g");
	var mask_1_graphics_639 = new cjs.Graphics().p("AvENmIAA7LIeJAAIAAbLg");
	var mask_1_graphics_640 = new cjs.Graphics().p("AvENuIAA7bIeJAAIAAbbg");
	var mask_1_graphics_641 = new cjs.Graphics().p("AvEN2IAA7rIeJAAIAAbrg");
	var mask_1_graphics_642 = new cjs.Graphics().p("AvEN+IAA77IeJAAIAAb7g");
	var mask_1_graphics_643 = new cjs.Graphics().p("AvEOHIAA8NIeJAAIAAcNg");
	var mask_1_graphics_644 = new cjs.Graphics().p("AvEOPIAA8dIeJAAIAAcdg");
	var mask_1_graphics_645 = new cjs.Graphics().p("AvEOXIAA8tIeJAAIAActg");
	var mask_1_graphics_646 = new cjs.Graphics().p("AvEOfIAA89IeJAAIAAc9g");
	var mask_1_graphics_647 = new cjs.Graphics().p("AvEOoIAA9PIeJAAIAAdPg");
	var mask_1_graphics_648 = new cjs.Graphics().p("AvEOwIAA9fIeJAAIAAdfg");
	var mask_1_graphics_649 = new cjs.Graphics().p("AvEO4IAA9vIeJAAIAAdvg");
	var mask_1_graphics_650 = new cjs.Graphics().p("AvEPAIAA9/IeJAAIAAd/g");
	var mask_1_graphics_651 = new cjs.Graphics().p("AvEPIIAA+PIeJAAIAAePg");
	var mask_1_graphics_652 = new cjs.Graphics().p("AvEPRIAA+gIeJAAIAAegg");
	var mask_1_graphics_653 = new cjs.Graphics().p("AvEPZIAA+xIeJAAIAAexg");
	var mask_1_graphics_654 = new cjs.Graphics().p("AvEPhIAA/BIeJAAIAAfBg");
	var mask_1_graphics_655 = new cjs.Graphics().p("AvEPpIAA/RIeJAAIAAfRg");
	var mask_1_graphics_656 = new cjs.Graphics().p("AvEPxIAA/hIeJAAIAAfhg");
	var mask_1_graphics_657 = new cjs.Graphics().p("AvEP6IAA/yIeJAAIAAfyg");
	var mask_1_graphics_658 = new cjs.Graphics().p("AvEQCMAAAggDIeJAAMAAAAgDg");
	var mask_1_graphics_659 = new cjs.Graphics().p("AvEQKMAAAggTIeJAAMAAAAgTg");
	var mask_1_graphics_660 = new cjs.Graphics().p("AvEQSMAAAggjIeJAAMAAAAgjg");
	var mask_1_graphics_661 = new cjs.Graphics().p("AvEQaMAAAggzIeJAAMAAAAgzg");
	var mask_1_graphics_662 = new cjs.Graphics().p("AvEQjMAAAghEIeJAAMAAAAhEg");
	var mask_1_graphics_663 = new cjs.Graphics().p("AvEQrMAAAghVIeJAAMAAAAhVg");
	var mask_1_graphics_664 = new cjs.Graphics().p("AvEQzMAAAghlIeJAAMAAAAhlg");
	var mask_1_graphics_665 = new cjs.Graphics().p("AvEQ7MAAAgh1IeJAAMAAAAh1g");
	var mask_1_graphics_666 = new cjs.Graphics().p("AvERDMAAAgiFIeJAAMAAAAiFg");
	var mask_1_graphics_667 = new cjs.Graphics().p("AvERMMAAAgiWIeJAAMAAAAiWg");
	var mask_1_graphics_668 = new cjs.Graphics().p("AvERUMAAAginIeJAAMAAAAing");
	var mask_1_graphics_669 = new cjs.Graphics().p("AvERcMAAAgi3IeJAAMAAAAi3g");
	var mask_1_graphics_670 = new cjs.Graphics().p("AvERkMAAAgjHIeJAAMAAAAjHg");
	var mask_1_graphics_671 = new cjs.Graphics().p("AvERsMAAAgjXIeJAAMAAAAjXg");
	var mask_1_graphics_672 = new cjs.Graphics().p("AvER1MAAAgjpIeJAAMAAAAjpg");
	var mask_1_graphics_673 = new cjs.Graphics().p("AvER9MAAAgj5IeJAAMAAAAj5g");
	var mask_1_graphics_674 = new cjs.Graphics().p("AvESFMAAAgkJIeJAAMAAAAkJg");
	var mask_1_graphics_675 = new cjs.Graphics().p("AvESNMAAAgkZIeJAAMAAAAkZg");
	var mask_1_graphics_676 = new cjs.Graphics().p("AvESVMAAAgkpIeJAAMAAAAkpg");
	var mask_1_graphics_677 = new cjs.Graphics().p("AvESeMAAAgk7IeJAAMAAAAk7g");
	var mask_1_graphics_678 = new cjs.Graphics().p("AvESmMAAAglLIeJAAMAAAAlLg");
	var mask_1_graphics_679 = new cjs.Graphics().p("AvESuMAAAglbIeJAAMAAAAlbg");
	var mask_1_graphics_680 = new cjs.Graphics().p("AvES2MAAAglrIeJAAMAAAAlrg");
	var mask_1_graphics_681 = new cjs.Graphics().p("AvES+MAAAgl7IeJAAMAAAAl7g");
	var mask_1_graphics_682 = new cjs.Graphics().p("AvETHMAAAgmNIeJAAMAAAAmNg");
	var mask_1_graphics_683 = new cjs.Graphics().p("AvETPMAAAgmdIeJAAMAAAAmdg");
	var mask_1_graphics_684 = new cjs.Graphics().p("AvETXMAAAgmtIeJAAMAAAAmtg");
	var mask_1_graphics_685 = new cjs.Graphics().p("AvETfMAAAgm9IeJAAMAAAAm9g");
	var mask_1_graphics_686 = new cjs.Graphics().p("AvEToMAAAgnOIeJAAMAAAAnOg");
	var mask_1_graphics_687 = new cjs.Graphics().p("AvETwMAAAgnfIeJAAMAAAAnfg");
	var mask_1_graphics_688 = new cjs.Graphics().p("AvET4MAAAgnvIeJAAMAAAAnvg");
	var mask_1_graphics_689 = new cjs.Graphics().p("EAClAjZMAAAgn/IeKAAMAAAAn/g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(583).to({graphics:mask_1_graphics_583,x:322.5,y:412}).wait(1).to({graphics:mask_1_graphics_584,x:322.5,y:411.2}).wait(1).to({graphics:mask_1_graphics_585,x:322.5,y:410.4}).wait(1).to({graphics:mask_1_graphics_586,x:322.5,y:409.6}).wait(1).to({graphics:mask_1_graphics_587,x:322.5,y:408.7}).wait(1).to({graphics:mask_1_graphics_588,x:322.5,y:407.9}).wait(1).to({graphics:mask_1_graphics_589,x:322.5,y:407.1}).wait(1).to({graphics:mask_1_graphics_590,x:322.5,y:406.3}).wait(1).to({graphics:mask_1_graphics_591,x:322.5,y:405.4}).wait(1).to({graphics:mask_1_graphics_592,x:322.5,y:404.6}).wait(1).to({graphics:mask_1_graphics_593,x:322.5,y:403.8}).wait(1).to({graphics:mask_1_graphics_594,x:322.5,y:403}).wait(1).to({graphics:mask_1_graphics_595,x:322.5,y:402.2}).wait(1).to({graphics:mask_1_graphics_596,x:322.5,y:401.3}).wait(1).to({graphics:mask_1_graphics_597,x:322.5,y:400.5}).wait(1).to({graphics:mask_1_graphics_598,x:322.5,y:399.7}).wait(1).to({graphics:mask_1_graphics_599,x:322.5,y:398.9}).wait(1).to({graphics:mask_1_graphics_600,x:322.5,y:398.1}).wait(1).to({graphics:mask_1_graphics_601,x:322.5,y:397.2}).wait(1).to({graphics:mask_1_graphics_602,x:322.5,y:396.4}).wait(1).to({graphics:mask_1_graphics_603,x:322.5,y:395.6}).wait(1).to({graphics:mask_1_graphics_604,x:322.5,y:394.8}).wait(1).to({graphics:mask_1_graphics_605,x:322.5,y:394}).wait(1).to({graphics:mask_1_graphics_606,x:322.5,y:393.1}).wait(1).to({graphics:mask_1_graphics_607,x:322.5,y:392.3}).wait(1).to({graphics:mask_1_graphics_608,x:322.5,y:391.5}).wait(1).to({graphics:mask_1_graphics_609,x:322.5,y:390.7}).wait(1).to({graphics:mask_1_graphics_610,x:322.5,y:389.9}).wait(1).to({graphics:mask_1_graphics_611,x:322.5,y:389}).wait(1).to({graphics:mask_1_graphics_612,x:322.5,y:388.2}).wait(1).to({graphics:mask_1_graphics_613,x:322.5,y:387.4}).wait(1).to({graphics:mask_1_graphics_614,x:322.5,y:386.6}).wait(1).to({graphics:mask_1_graphics_615,x:322.5,y:385.8}).wait(1).to({graphics:mask_1_graphics_616,x:322.5,y:384.9}).wait(1).to({graphics:mask_1_graphics_617,x:322.5,y:384.1}).wait(1).to({graphics:mask_1_graphics_618,x:322.5,y:383.3}).wait(1).to({graphics:mask_1_graphics_619,x:322.5,y:382.5}).wait(1).to({graphics:mask_1_graphics_620,x:322.5,y:381.7}).wait(1).to({graphics:mask_1_graphics_621,x:322.5,y:380.8}).wait(1).to({graphics:mask_1_graphics_622,x:322.5,y:380}).wait(1).to({graphics:mask_1_graphics_623,x:322.5,y:379.2}).wait(1).to({graphics:mask_1_graphics_624,x:322.5,y:378.4}).wait(1).to({graphics:mask_1_graphics_625,x:322.5,y:377.6}).wait(1).to({graphics:mask_1_graphics_626,x:322.5,y:376.7}).wait(1).to({graphics:mask_1_graphics_627,x:322.5,y:375.9}).wait(1).to({graphics:mask_1_graphics_628,x:322.5,y:375.1}).wait(1).to({graphics:mask_1_graphics_629,x:322.5,y:374.3}).wait(1).to({graphics:mask_1_graphics_630,x:322.5,y:373.4}).wait(1).to({graphics:mask_1_graphics_631,x:322.5,y:372.6}).wait(1).to({graphics:mask_1_graphics_632,x:322.5,y:371.8}).wait(1).to({graphics:mask_1_graphics_633,x:322.5,y:371}).wait(1).to({graphics:mask_1_graphics_634,x:322.5,y:370.2}).wait(1).to({graphics:mask_1_graphics_635,x:322.5,y:369.3}).wait(1).to({graphics:mask_1_graphics_636,x:322.5,y:368.6}).wait(1).to({graphics:mask_1_graphics_637,x:322.5,y:367.7}).wait(1).to({graphics:mask_1_graphics_638,x:322.5,y:366.9}).wait(1).to({graphics:mask_1_graphics_639,x:322.5,y:366.1}).wait(1).to({graphics:mask_1_graphics_640,x:322.5,y:365.3}).wait(1).to({graphics:mask_1_graphics_641,x:322.5,y:364.4}).wait(1).to({graphics:mask_1_graphics_642,x:322.5,y:363.6}).wait(1).to({graphics:mask_1_graphics_643,x:322.5,y:362.8}).wait(1).to({graphics:mask_1_graphics_644,x:322.5,y:362}).wait(1).to({graphics:mask_1_graphics_645,x:322.5,y:361.2}).wait(1).to({graphics:mask_1_graphics_646,x:322.5,y:360.3}).wait(1).to({graphics:mask_1_graphics_647,x:322.5,y:359.5}).wait(1).to({graphics:mask_1_graphics_648,x:322.5,y:358.7}).wait(1).to({graphics:mask_1_graphics_649,x:322.5,y:357.9}).wait(1).to({graphics:mask_1_graphics_650,x:322.5,y:357.1}).wait(1).to({graphics:mask_1_graphics_651,x:322.5,y:356.2}).wait(1).to({graphics:mask_1_graphics_652,x:322.5,y:355.4}).wait(1).to({graphics:mask_1_graphics_653,x:322.5,y:354.6}).wait(1).to({graphics:mask_1_graphics_654,x:322.5,y:353.8}).wait(1).to({graphics:mask_1_graphics_655,x:322.5,y:353}).wait(1).to({graphics:mask_1_graphics_656,x:322.5,y:352.1}).wait(1).to({graphics:mask_1_graphics_657,x:322.5,y:351.3}).wait(1).to({graphics:mask_1_graphics_658,x:322.5,y:350.5}).wait(1).to({graphics:mask_1_graphics_659,x:322.5,y:349.7}).wait(1).to({graphics:mask_1_graphics_660,x:322.5,y:348.9}).wait(1).to({graphics:mask_1_graphics_661,x:322.5,y:348}).wait(1).to({graphics:mask_1_graphics_662,x:322.5,y:347.2}).wait(1).to({graphics:mask_1_graphics_663,x:322.5,y:346.4}).wait(1).to({graphics:mask_1_graphics_664,x:322.5,y:345.6}).wait(1).to({graphics:mask_1_graphics_665,x:322.5,y:344.8}).wait(1).to({graphics:mask_1_graphics_666,x:322.5,y:343.9}).wait(1).to({graphics:mask_1_graphics_667,x:322.5,y:343.1}).wait(1).to({graphics:mask_1_graphics_668,x:322.5,y:342.3}).wait(1).to({graphics:mask_1_graphics_669,x:322.5,y:341.5}).wait(1).to({graphics:mask_1_graphics_670,x:322.5,y:340.7}).wait(1).to({graphics:mask_1_graphics_671,x:322.5,y:339.8}).wait(1).to({graphics:mask_1_graphics_672,x:322.5,y:339}).wait(1).to({graphics:mask_1_graphics_673,x:322.5,y:338.2}).wait(1).to({graphics:mask_1_graphics_674,x:322.5,y:337.4}).wait(1).to({graphics:mask_1_graphics_675,x:322.5,y:336.6}).wait(1).to({graphics:mask_1_graphics_676,x:322.5,y:335.7}).wait(1).to({graphics:mask_1_graphics_677,x:322.5,y:334.9}).wait(1).to({graphics:mask_1_graphics_678,x:322.5,y:334.1}).wait(1).to({graphics:mask_1_graphics_679,x:322.5,y:333.3}).wait(1).to({graphics:mask_1_graphics_680,x:322.5,y:332.4}).wait(1).to({graphics:mask_1_graphics_681,x:322.5,y:331.6}).wait(1).to({graphics:mask_1_graphics_682,x:322.5,y:330.8}).wait(1).to({graphics:mask_1_graphics_683,x:322.5,y:330}).wait(1).to({graphics:mask_1_graphics_684,x:322.5,y:329.2}).wait(1).to({graphics:mask_1_graphics_685,x:322.5,y:328.3}).wait(1).to({graphics:mask_1_graphics_686,x:322.5,y:327.5}).wait(1).to({graphics:mask_1_graphics_687,x:322.5,y:326.7}).wait(1).to({graphics:mask_1_graphics_688,x:322.5,y:325.9}).wait(1).to({graphics:mask_1_graphics_689,x:209.5,y:226.5}).wait(125));

	// Layer 13
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("AyKP3QC4GyFzjuQF0jtE1tQQE3tPD+k0QDOj5E+gR");
	this.shape_2.setTransform(324.6,276);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(583).to({_off:false},0).wait(231));

	// Layer 12 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_530 = new cjs.Graphics().p("Au0OaQiOr9G5p/QG4qAL7iMQL7iPKAG5MghMAwRQqAm5iNr6g");
	var mask_2_graphics_531 = new cjs.Graphics().p("AumOrQiXr7GwqFQGwqGL5iVQL5iYKGGwMggkAwrQqGmwiXr4g");
	var mask_2_graphics_532 = new cjs.Graphics().p("AuXO7Qihr4GoqKQGoqML3ifQL3iiKLGoMgf8AxGQqMmoigr3g");
	var mask_2_graphics_533 = new cjs.Graphics().p("AuIPMQiqr2GfqQQGgqQL0iqQL2irKQGfMgfUAxgQqRmfiqr1g");
	var mask_2_graphics_534 = new cjs.Graphics().p("At4PdQi0r0GXqVQGXqWLyizQLzi1KWGXMgesAx5QqVmXi0ryg");
	var mask_2_graphics_535 = new cjs.Graphics().p("AtoPuQi+ryGPqaQGOqbLwi8QLxi/KbGPMgeDAySQqbmPi9rwg");
	var mask_2_graphics_536 = new cjs.Graphics().p("AtYP/QjHrvGGqfQGGqgLujGQLujIKgGGMgdbAyqQqfmGjHrug");
	var mask_2_graphics_537 = new cjs.Graphics().p("AtHQQQjRrtF9qjQF+qlLrjQQLrjSKlF+MgcxAzCQqkl+jQrrg");
	var mask_2_graphics_538 = new cjs.Graphics().p("As2QhQjbrqF1qoQF1qqLojZQLpjbKqF0MgcIAzZQqol1jarog");
	var mask_2_graphics_539 = new cjs.Graphics().p("AslQzQjkroFsqtQFtquLljjQLmjlKuFsMgbdAzwQqtlsjkrlg");
	var mask_2_graphics_540 = new cjs.Graphics().p("AsTREQjtrlFjqxQFjqzLjjtQLjjuKzFkMgazA0FQqyljjtrig");
	var mask_2_graphics_541 = new cjs.Graphics().p("AsBRVQj3rhFbq3QFaq3Lgj2QLgj3K3FbMgaIA0bQq3lbj2rfg");
	var mask_2_graphics_542 = new cjs.Graphics().p("AruRmQkBreFSq6QFSq8Lcj/QLdkBK8FSMgZeA0wQq7lSj/rcg");
	var mask_2_graphics_543 = new cjs.Graphics().p("ArcR4QkJrbFJq/QFIrALZkIQLakKLAFIMgYzA1FQq/lJkJrYg");
	var mask_2_graphics_544 = new cjs.Graphics().p("ArISJQkTrXFArDQE/rELWkSQLWkTLEE/MgYHA1ZQrDlAkSrVg");
	var mask_2_graphics_545 = new cjs.Graphics().p("Aq1SaQkcrTE3rHQE2rJLTkaQLSkdLIE3MgXbA1sQrIk3kbrSg");
	var mask_2_graphics_546 = new cjs.Graphics().p("AqhSsQklrQEtrLQEurMLOkkQLPkmLMEuMgWvA1/QrLkuklrOg");
	var mask_2_graphics_547 = new cjs.Graphics().p("AqNS9QkurMEkrPQElrQLKktQLLkvLQElMgWDA2RQrPkkkurLg");
	var mask_2_graphics_548 = new cjs.Graphics().p("Ap4TPQk4rIEcrTQEbrTLHk3QLGk4LUEcMgVXA2iQrSkbk3rGg");
	var mask_2_graphics_549 = new cjs.Graphics().p("ApjTgQlBrEESrWQESrXLDk/QLDlBLXESMgUqA20QrXkSk/rDg");
	var mask_2_graphics_550 = new cjs.Graphics().p("ApOTyQlKrAEJraQEJraK+lIQK/lLLbEJMgT+A3FQrZkJlJq+g");
	var mask_2_graphics_551 = new cjs.Graphics().p("Ao4UDQlTq7D/rdQEAreK6lRQK7lTLdD/MgTQA3VQrdkAlRq6g");
	var mask_2_graphics_552 = new cjs.Graphics().p("AojUVQlbq4D2rgQD2rhK2laQK2lbLhD2MgSjA3kQrgj2lbq2g");
	var mask_2_graphics_553 = new cjs.Graphics().p("AoMUnQllq0DtrjQDtrkKxliQKyllLkDsMgR2A3zQrjjsljqxg");
	var mask_2_graphics_554 = new cjs.Graphics().p("An2U4QltquDjrmQDjrnKtlsQKtltLnDjMgRIA4BQrmjjlsqtg");
	var mask_2_graphics_555 = new cjs.Graphics().p("AnfVKQl2qqDarpQDarqKol0QKol2LqDZMgQaA4PQrpjZl1qog");
	var mask_2_graphics_556 = new cjs.Graphics().p("AnIVbQl+qlDQrrQDQrtKjl9QKkl/LtDRMgPtA4bQrsjQl9qjg");
	var mask_2_graphics_557 = new cjs.Graphics().p("AmwVtQmHqgDGruQDHrwKemFQKfmHLvDGMgO+A4oQrvjGmFqeg");
	var mask_2_graphics_558 = new cjs.Graphics().p("AmZV+QmPqbC9rwQC9ryKZmOQKamQLxC9MgOQA40Qrwi9mPqZg");
	var mask_2_graphics_559 = new cjs.Graphics().p("AmBWQQmYqWC0r0QCzrzKVmWQKUmZL0C0MgNiA4/Qr0izmWqUg");
	var mask_2_graphics_560 = new cjs.Graphics().p("AloWhQmhqQCqr2QCqr2KPmfQKPmgL2CqMgMzA5KQr2iqmeqPg");
	var mask_2_graphics_561 = new cjs.Graphics().p("AlQWzQmoqLCgr5QCgr3KKmnQKJmpL5CgMgMFA5UQr4igmnqJg");
	var mask_2_graphics_562 = new cjs.Graphics().p("Ak3XEQmxqFCXr7QCWr5KEmvQKFmyL6CXMgLWA5eQr6iXmvqEg");
	var mask_2_graphics_563 = new cjs.Graphics().p("AkeXWQm5qACNr8QCMr8J/m3QJ/m6L8CNMgKnA5nQr8iNm3p+g");
	var mask_2_graphics_564 = new cjs.Graphics().p("AkEXnQnBp6CCr+QCDr9J6nAQJ5nBL9CDMgJ3A5vQr+iDm/p5g");
	var mask_2_graphics_565 = new cjs.Graphics().p("AjqX5QnKp1B5r/QB5r/J0nIQJznJMAB5MgJJA53Qr/h5nHpzg");
	var mask_2_graphics_566 = new cjs.Graphics().p("AjQYKQnSpvBwsBQBvsAJunPQJtnSMBBvMgIZA5/QsBhwnPptg");
	var mask_2_graphics_567 = new cjs.Graphics().p("Ai2YbQnZpoBlsDQBmsBJnnYQJonZMCBlMgHqA6FQsChlnXpog");
	var mask_2_graphics_568 = new cjs.Graphics().p("AicYtQnhpjBcsEQBcsCJhngQJinhMDBcMgG6A6LQsEhcnfphg");
	var mask_2_graphics_569 = new cjs.Graphics().p("AiBY+QnppdBSsEQBSsEJcnnQJbnpMEBSMgGLA6QQsEhSnnpbg");
	var mask_2_graphics_570 = new cjs.Graphics().p("AhmZPQnwpWBIsGQBIsEJVnvQJVnxMFBIMgFbA6VQsGhInupVg");
	var mask_2_graphics_571 = new cjs.Graphics().p("AhLZhQn4pQA/sHQA+sFJPn3QJOn4MHA+MgEsA6ZQsHg+n2pOg");
	var mask_2_graphics_572 = new cjs.Graphics().p("AgvZyQoApKA1sHQA0sGJIn+QJIoAMIA0MgD9A6dQsHg0n9pIg");
	var mask_2_graphics_573 = new cjs.Graphics().p("AgTaDQoHpDAqsIQArsHJCoFQJBoHMIAqMgDNA6gQsIgroEpBg");
	var mask_2_graphics_574 = new cjs.Graphics().p("AAIaUQoNo8AgsJQAhsHI7oNQI7oOMIAgMgCdA6iQsIggoNo7g");
	var mask_2_graphics_575 = new cjs.Graphics().p("AAkalQoUo2AWsIQAXsII0oUQI0oVMJAWMgBtA6kQsJgXoUo0g");
	var mask_2_graphics_576 = new cjs.Graphics().p("ABAa2QobovANsJQAMsIIuobQItocMJAMMgA9A6lQsJgNocotg");
	var mask_2_graphics_577 = new cjs.Graphics().p("ABdbHQojooADsJQADsIInoiQImokMJADMgAOA6lQsJgDoiomg");
	var mask_2_graphics_578 = new cjs.Graphics().p("ABpbYQoqohgHsJQgHsIIgopQIforMJgHMAAiA6lIgUAAQr8AAoioYg");
	var mask_2_graphics_579 = new cjs.Graphics().p("ABuboQowoagRsIQgRsIIYowQIYoyMJgRMABSA6kIgvABQrrAAofoIg");
	var mask_2_graphics_580 = new cjs.Graphics().p("AB0b4Qo4oSgbsJQgasHIRo3QIRo4MIgbMACCA6iIhLACQrZAAobn4g");
	var mask_2_graphics_581 = new cjs.Graphics().p("AB5cIQo+oLglsIQgksHILo+QIJo/MIgkMACxA6gQgzADgyAAQrJAAoYnog");
	var mask_2_graphics_582 = new cjs.Graphics().p("AB/cYQpFoDgusIQgvsHIEpEQIBpGMIguMADhA6eQhBAEg/AAQq4AAoUnYg");
	var mask_2_graphics_583 = new cjs.Graphics().p("ACFcoQpLn9g5sHQg4sGH8pKQH6pMMHg5MAERA6bQhOAGhMAAQqoAAoQnIg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(530).to({graphics:mask_2_graphics_530,x:195.7,y:212.5}).wait(1).to({graphics:mask_2_graphics_531,x:194.7,y:213.1}).wait(1).to({graphics:mask_2_graphics_532,x:193.7,y:213.8}).wait(1).to({graphics:mask_2_graphics_533,x:192.7,y:214.4}).wait(1).to({graphics:mask_2_graphics_534,x:191.7,y:215}).wait(1).to({graphics:mask_2_graphics_535,x:190.7,y:215.7}).wait(1).to({graphics:mask_2_graphics_536,x:189.7,y:216.3}).wait(1).to({graphics:mask_2_graphics_537,x:188.6,y:216.9}).wait(1).to({graphics:mask_2_graphics_538,x:187.6,y:217.4}).wait(1).to({graphics:mask_2_graphics_539,x:186.5,y:218}).wait(1).to({graphics:mask_2_graphics_540,x:185.5,y:218.5}).wait(1).to({graphics:mask_2_graphics_541,x:184.4,y:219.1}).wait(1).to({graphics:mask_2_graphics_542,x:183.4,y:219.6}).wait(1).to({graphics:mask_2_graphics_543,x:182.3,y:220.1}).wait(1).to({graphics:mask_2_graphics_544,x:181.2,y:220.6}).wait(1).to({graphics:mask_2_graphics_545,x:180.1,y:221.1}).wait(1).to({graphics:mask_2_graphics_546,x:179,y:221.6}).wait(1).to({graphics:mask_2_graphics_547,x:177.9,y:222}).wait(1).to({graphics:mask_2_graphics_548,x:176.8,y:222.4}).wait(1).to({graphics:mask_2_graphics_549,x:175.7,y:222.9}).wait(1).to({graphics:mask_2_graphics_550,x:174.6,y:223.3}).wait(1).to({graphics:mask_2_graphics_551,x:173.4,y:223.7}).wait(1).to({graphics:mask_2_graphics_552,x:172.3,y:224.1}).wait(1).to({graphics:mask_2_graphics_553,x:171.2,y:224.4}).wait(1).to({graphics:mask_2_graphics_554,x:170,y:224.8}).wait(1).to({graphics:mask_2_graphics_555,x:168.9,y:225.1}).wait(1).to({graphics:mask_2_graphics_556,x:167.8,y:225.4}).wait(1).to({graphics:mask_2_graphics_557,x:166.6,y:225.7}).wait(1).to({graphics:mask_2_graphics_558,x:165.4,y:226}).wait(1).to({graphics:mask_2_graphics_559,x:164.3,y:226.3}).wait(1).to({graphics:mask_2_graphics_560,x:163.1,y:226.6}).wait(1).to({graphics:mask_2_graphics_561,x:162,y:226.8}).wait(1).to({graphics:mask_2_graphics_562,x:160.8,y:227.1}).wait(1).to({graphics:mask_2_graphics_563,x:159.6,y:227.3}).wait(1).to({graphics:mask_2_graphics_564,x:158.4,y:227.5}).wait(1).to({graphics:mask_2_graphics_565,x:157.3,y:227.7}).wait(1).to({graphics:mask_2_graphics_566,x:156.1,y:227.9}).wait(1).to({graphics:mask_2_graphics_567,x:154.9,y:228}).wait(1).to({graphics:mask_2_graphics_568,x:153.7,y:228.2}).wait(1).to({graphics:mask_2_graphics_569,x:152.5,y:228.3}).wait(1).to({graphics:mask_2_graphics_570,x:151.3,y:228.4}).wait(1).to({graphics:mask_2_graphics_571,x:150.2,y:228.5}).wait(1).to({graphics:mask_2_graphics_572,x:149,y:228.6}).wait(1).to({graphics:mask_2_graphics_573,x:147.8,y:228.7}).wait(1).to({graphics:mask_2_graphics_574,x:146.6,y:228.7}).wait(1).to({graphics:mask_2_graphics_575,x:145.4,y:228.8}).wait(1).to({graphics:mask_2_graphics_576,x:144.2,y:228.8}).wait(1).to({graphics:mask_2_graphics_577,x:143,y:228.8}).wait(1).to({graphics:mask_2_graphics_578,x:143.5,y:228.8}).wait(1).to({graphics:mask_2_graphics_579,x:144.7,y:228.8}).wait(1).to({graphics:mask_2_graphics_580,x:145.9,y:228.8}).wait(1).to({graphics:mask_2_graphics_581,x:147.1,y:228.8}).wait(1).to({graphics:mask_2_graphics_582,x:148.3,y:228.8}).wait(1).to({graphics:mask_2_graphics_583,x:149.5,y:228.8}).wait(231));

	// Layer 8
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("AyKP3QC4GyFzjuQF0jtE1tQQE3tPD+k0QDOj5E+gR");
	this.shape_3.setTransform(324.6,276);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(530).to({_off:false},0).wait(284));

	// Layer 18
	this.instance_2 = new lib.ar2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(206.4,288.5,1,1,167,0,0,0.7,-0.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(289).to({_off:false},0).wait(525));

	// Layer 11 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_319 = new cjs.Graphics().p("AD2Y2IBnjBIOxH2IhnDBg");
	var mask_3_graphics_320 = new cjs.Graphics().p("AiIA+ImHjMIgBgBIBojFIJ0E4IFECrIABABIhoDFg");
	var mask_3_graphics_321 = new cjs.Graphics().p("AjBAvIlUizIgBgBIBqjIIJ3EjIFLCvIABABIhrDIg");
	var mask_3_graphics_322 = new cjs.Graphics().p("AiGBWIgJgEIgxgVIlai3IgBgBIAbgzIABgCIBQiWIJ6EOIFQCzIABABIhsDLg");
	var mask_3_graphics_323 = new cjs.Graphics().p("AiFBiIgIgEIgzgUIlgi5IgBgBIAcg1IABgCIBRiYIJ+D5IFWC2IAAACIhtDPg");
	var mask_3_graphics_324 = new cjs.Graphics().p("AiEBuIgJgFIgygRIlmi9IgBgBIAdg2IAAgCIBSibIKCDmIFbC5IABABIhvDTg");
	var mask_3_graphics_325 = new cjs.Graphics().p("AiDB5IgJgEIgygQIltjAIgBgBIAdg3IABgBIBUieIKFDRIFhC9IABABIhyDWg");
	var mask_3_graphics_326 = new cjs.Graphics().p("AiCCGIgKgFIgygPIlyjDIgBgBIAeg3IAAgCIBVigIKJC8IFmDAIABABIhzDag");
	var mask_3_graphics_327 = new cjs.Graphics().p("AiBCRIgJgEIg0gNIl4jHIgBgBIAeg4IABgCIBWiiIKNCnIFrDEIABABIh1Ddg");
	var mask_3_graphics_328 = new cjs.Graphics().p("AiACdIgKgEIgzgMIl+jJIgBgBIAfg6IAAgCIBYikIKQCSIFxDHIABABIh3Dhg");
	var mask_3_graphics_329 = new cjs.Graphics().p("AiACpIgJgFIg0gKImEjMIgBgBIAgg6IAAgCIBaioIKTB+IF3DLIABABIh6Dlg");
	var mask_3_graphics_330 = new cjs.Graphics().p("Ah/C1IgKgFIgzgIImKjQIgBgBIAfg7IAAgCIBbiqIKXBpIF9DOIABACIh6Dog");
	var mask_3_graphics_331 = new cjs.Graphics().p("Ah+DBIgJgFIg0gHImQjTIgBgBIAgg8IAAgCIBcisIKaBVIGDDRIAAACIh8Drg");
	var mask_3_graphics_332 = new cjs.Graphics().p("Ah9DNIgKgGIg0gEImWjWIgBgBIAgg9IABgCIBeiwIKdBBIGIDVIABABIh+Dwg");
	var mask_3_graphics_333 = new cjs.Graphics().p("Ah8DYIgKgFIg1gDImbjZIgBgBIAgg+IAAgCIBgiyIKhAsIGODZIAAABIiADzg");
	var mask_3_graphics_334 = new cjs.Graphics().p("Ah7DkIgKgFIg1gBImijeIgBAAIAhg/IAAgCIBhi0IKlAYIGTDcIABABIiCD2g");
	var mask_3_graphics_335 = new cjs.Graphics().p("AiEDqIg2ABImnjhIgBgBIAhg/IAAgCIBji3IKoADIGZDhIAAABIiDD5IpaABg");
	var mask_3_graphics_336 = new cjs.Graphics().p("AiED2Ig1ACImujkIgBgBIAihAIAAgCIBki5IKrgSIGfDkIABABIiGD9IpcATg");
	var mask_3_graphics_337 = new cjs.Graphics().p("AiDEDIg2ADImzjnIgBgBIAihAIAAgCIBli8IKvgnIGkDnIABACIiHEAIpfAmg");
	var mask_3_graphics_338 = new cjs.Graphics().p("AiCEPIg2AGIm6jrIgBgBIAjhBIAAgCIBni/IKyg7IGqDrIABACIiKEDIphA5g");
	var mask_3_graphics_339 = new cjs.Graphics().p("Ap3A1IgBgBIAkhCIgBgDIBojBIK2hPIGvDuIABACIiKEHIplBLIgLgGIg3AHg");
	var mask_3_graphics_340 = new cjs.Graphics().p("Ap9A/IgBgBIAkhDIAAgCIBqjEIK5hkIG1DyIAAACIiMEKIpnBeIgLgGIg3AJg");
	var mask_3_graphics_341 = new cjs.Graphics().p("AqCBKIgBgBIAlhFIgBgCIBrjGIK9h5IG7D2IAAABIiOEPIprBwIgKgGIg3ALg");
	var mask_3_graphics_342 = new cjs.Graphics().p("AqIBUIgBgBIAlhGIAAgCIBsjHILBiOIHAD5IAAABIiQESIptCDIgLgGIg3AMg");
	var mask_3_graphics_343 = new cjs.Graphics().p("AqNBfIgBgBIAmhHIgBgCIBujLILEiiIHFD8IABACIiSEVIpvCXIgMgHIg4AOg");
	var mask_3_graphics_344 = new cjs.Graphics().p("AqTBpIgBgBIAmhIIgBgCIBwjNILIi2IHLD/IABACIiVEZIpxCoIgNgGIg3APg");
	var mask_3_graphics_345 = new cjs.Graphics().p("AqYBzIgBgBIAnhIIgBgCIBwjQILLjLIHSEDIAAACIiWEcIp1C7IgLgGIg5ARg");
	var mask_3_graphics_346 = new cjs.Graphics().p("AqeB9IgBAAIAnhJIgBgDIByjSILPjfIHXEGIAAACIiYEgIp3DNIgMgGIg4ASg");
	var mask_3_graphics_347 = new cjs.Graphics().p("AqjCHIgBAAIAohKIgBgCIBzjVILSj0IHdEKIAAACIiZEjIp7DgIgMgGIg4AUg");
	var mask_3_graphics_348 = new cjs.Graphics().p("AqpCSIAAAAIAohLIgBgDIB1jXILVkJIHiEOIAAACIibEnIp9DzIgMgHIg5AWg");
	var mask_3_graphics_349 = new cjs.Graphics().p("AquCdIgBgBIAphMIgCgCIB3jaILZkdIHnERIABACIidEqIqAEGIgMgHIg5AXg");
	var mask_3_graphics_350 = new cjs.Graphics().p("Aq0CnIAAAAIAphOIgCgCIB4jcILckyIHuEUIAAACIifEvIqCEXIgNgGIg5AZg");
	var mask_3_graphics_351 = new cjs.Graphics().p("Aq5CxIgBAAIAqhNIgCgDIB6jfILflHIHzEYIABACIihEyIqFErIgNgHIg5Abg");
	var mask_3_graphics_352 = new cjs.Graphics().p("Aq/C8IAAgBIAqhOIgCgDIB7jhILjlbIH5EbIAAACIiiE1IqIE+IgNgHIg6Acg");
	var mask_3_graphics_353 = new cjs.Graphics().p("ArEDGIgBAAIArhQIgCgCIB8jkILnlwIH+EfIABACIilE5IqKFQIgNgHIg6Aeg");
	var mask_3_graphics_354 = new cjs.Graphics().p("ArKDRIAAgBIArhQIgCgDIB+jmILqmEIIEEiIAAACIimE8IqNFjIgOgHIg6Afg");
	var mask_3_graphics_355 = new cjs.Graphics().p("ArPDbIgBAAIAshSIgCgDIB/jpILumYIIJEmIAAACIinE/IqQF2IgOgIIg6Aig");
	var mask_3_graphics_356 = new cjs.Graphics().p("ArUDlIgBAAIAshSIgCgDICBjrILwmtIIQEpIAAACIiqFDIqSGIIgOgHIg6Ajg");
	var mask_3_graphics_357 = new cjs.Graphics().p("AraDwIgBAAIAthUIgCgCICCjuIL0nCIIWEtIAAABIisFIIqWGaIgOgHIg6Akg");
	var mask_3_graphics_358 = new cjs.Graphics().p("ArfD6IgBAAIAthUIgCgDICDjwIL5nXIIaEwIAAACIiuFLIqYGtIgNgHIg8Amg");
	var mask_3_graphics_359 = new cjs.Graphics().p("ArlEFIgBAAIAthWIgBgCICFjzIL7nsIIgE0IAAACIivFPIqbG/IgOgHIg8Ang");
	var mask_3_graphics_360 = new cjs.Graphics().p("ArqEPIgBAAIAuhWIgDgDICHj1IL/oAIImE4IAAABIixFSIqeHSIgOgHIg8Apg");
	var mask_3_graphics_361 = new cjs.Graphics().p("ArwEaIgBgBIAuhWIgCgDICIj4IMDoVIIrE7IABACIizFVIqhHlIgPgHIg7Arg");
	var mask_3_graphics_362 = new cjs.Graphics().p("Ar1EkIgBAAIAvhYIgCgCICJj7IMGopIIwE+IABACIi1FZIqjH3IgPgHIg8Asg");
	var mask_3_graphics_363 = new cjs.Graphics().p("Ar7EvIAAgBIAvhYIgCgDICKj9IMKo+II2FCIAAACIi2FcIqmIKIgPgHIg8Aug");
	var mask_3_graphics_364 = new cjs.Graphics().p("AsAE5IgBAAIAwhaIgCgDICMj/IMNpSII8FEIAAACIi5FgIqoIdIgPgHIg9Avg");
	var mask_3_graphics_365 = new cjs.Graphics().p("AsGFDIAAAAIAwhbIgCgCICNkDIMQpmIJCFIIAAACIi6FkIqrIvIgPgIIg9Ayg");
	var mask_3_graphics_366 = new cjs.Graphics().p("AsLFOIgBAAIAxhbIgDgEICPkFIMUp6IJIFLIAAADIi8FnIquJCIgPgJIg+A0g");
	var mask_3_graphics_367 = new cjs.Graphics().p("AsRFYIAAAAIAxhcIgDgDICRkIIMXqPIJNFPIAAACIi+FrIqwJUIgQgIIg9A1g");
	var mask_3_graphics_368 = new cjs.Graphics().p("AsWFjIgBgBIAyhdIgDgCICSkLIMbqkIJTFTIAAACIjAFuIqzJnIgQgIIg+A3g");
	var mask_3_graphics_369 = new cjs.Graphics().p("AscFtIAAAAIAyheIgDgDICTkNIMfq4IJYFWIAAACIjBFxIq3J7IgPgJIg+A4g");
	var mask_3_graphics_370 = new cjs.Graphics().p("AshF3IgBAAIAzhfIgDgDICVkQIMirMIJeFaIAAABIjEF2Iq5KMIgPgIIg/A6g");
	var mask_3_graphics_371 = new cjs.Graphics().p("AsmGCIgBAAIAzhgIgDgDICWkSIMlriIJkFeIAAACIjFF5Iq8KfIgPgIIg/A7g");
	var mask_3_graphics_372 = new cjs.Graphics().p("AssGMIgBAAIA0hhIgDgDICXkVIMpr2IJqFhIAAACIjHF+Iq+KwIgQgHIg/A8g");
	var mask_3_graphics_373 = new cjs.Graphics().p("AsxGXIgBAAIA0hiIgDgDICZkYIMssKIJvFkIAAADIjJGAIrBLEIgQgJIg/A/g");
	var mask_3_graphics_374 = new cjs.Graphics().p("As3GhIgBAAIA1hjIgDgCICakaIMwsfIJ0FnIAAADIjKGDIrELXIgQgIIhAA/g");
	var mask_3_graphics_375 = new cjs.Graphics().p("As8GsIgBgBIA1hjIgDgDICbkdIM0szIJ6FrIAAACIjNGIIrGLpIgRgJIg/BCg");
	var mask_3_graphics_376 = new cjs.Graphics().p("AtCG2IgBAAIA2hkIgDgDICdkgIM3tIIKAFvIAAACIjPGLIrJL8IgQgJIhABEg");
	var mask_3_graphics_377 = new cjs.Graphics().p("AtHHBIgBgBIA2hlIgEgDICfkiIM7tcIKFFyIAAACIjQGPIrMMOIgRgJIhABFg");
	var mask_3_graphics_378 = new cjs.Graphics().p("AtNHLIgBAAIA3hnIgDgCICgklIM+txIKKF1IAAACIjRGTIrPMhIgRgJIhABHg");
	var mask_3_graphics_379 = new cjs.Graphics().p("AtSHVIgBAAIA3hnIgEgDICiknINCuGIKQF5IAAACIjUGXIrSMzIgRgJIhABJg");
	var mask_3_graphics_380 = new cjs.Graphics().p("AtYHgIgBAAIA4hpIgDgCICikqINFuaIKXF8IgBADIjVGZIrVNGIgRgJIhBBKg");
	var mask_3_graphics_381 = new cjs.Graphics().p("AtdHqIgBAAIA4hpIgEgDIClksINIuvIKcGAIgBACIjXGdIrWNZIgSgJIhBBMg");
	var mask_3_graphics_382 = new cjs.Graphics().p("AtjH1IAAgBIA4hpIgEgDICmkvINMvDIKhGDIAAACIjZGhIrZNrIgSgJIhBBNg");
	var mask_3_graphics_383 = new cjs.Graphics().p("AtoH/IgBAAIA5hrIgEgDICnkxINQvYIKnGHIAAACIjbGlIrdN9IgRgJIhCBPg");
	var mask_3_graphics_384 = new cjs.Graphics().p("AtuIKIAAgBIA5hrIgEgDICpk0INTvtIKsGLIAAACIjdGoIrfOQIgRgJIhDBRg");
	var mask_3_graphics_385 = new cjs.Graphics().p("AtzIUIgBAAIA6htIgEgCICqk3INXwBIKyGOIAAACIjfGrIriOjIgSgJIhCBSg");
	var mask_3_graphics_386 = new cjs.Graphics().p("At5IfIAAgBIA6htIgEgDICsk5INZwWIK4GSIAAACIjgGvIrlO2IgSgKIhDBUg");
	var mask_3_graphics_387 = new cjs.Graphics().p("At+IpIgBAAIA7hvIgEgDICtk7INdwrIK+GVIgBADIjiGyIrnPJIgSgKIhDBVg");
	var mask_3_graphics_388 = new cjs.Graphics().p("AuEIzIAAAAIA7hvIgEgDICuk+INhw/ILDGYIAAADIjkG2IrqPaIgTgJIhDBXg");
	var mask_3_graphics_389 = new cjs.Graphics().p("AuJI+IgBAAIA8hxIgEgCICwlBINkxUILJGcIgBACIjmG6IrsPtIgTgJIhDBZg");
	var mask_3_graphics_390 = new cjs.Graphics().p("AuPJIIAAAAIA8hxIgEgDICxlDINoxoILOGfIAAACIjoG9IrvQBIgTgKIhEBag");
	var mask_3_graphics_391 = new cjs.Graphics().p("AuUJTIgBgBIA9hxIgEgDICylGINsx9ILUGjIgBACIjpHBIryQTIgTgKIhEBcg");
	var mask_3_graphics_392 = new cjs.Graphics().p("AuaJdIAAAAIA9hzIgEgDIC0lJINuyRILaGmIAAACIjsHFIr1QmIgTgLIhEBfg");
	var mask_3_graphics_393 = new cjs.Graphics().p("AufJnIgBAAIA+h0IgFgDIC2lLINyylILgGpIgBACIjtHIIr4Q4IgTgKIhEBgg");
	var mask_3_graphics_394 = new cjs.Graphics().p("AukJyIgBAAIA+h1IgFgDIC3lNIN3y7ILkGtIAAADIjvHLIr6RLIgUgKIhFBhg");
	var mask_3_graphics_395 = new cjs.Graphics().p("AuqJ8IgBAAIA/h2IgEgCIC4lRIN5zOILrGwIgBADIjxHOIr9ReIgTgLIhFBjg");
	var mask_3_graphics_396 = new cjs.Graphics().p("AuvKHIgBAAIA/h2IgFgEIC6lSIN9zkILwG0IAAACIjzHTIsARwIgUgLIhFBlg");
	var mask_3_graphics_397 = new cjs.Graphics().p("Au2KRIBAh3IgEgDIC6lVIOAz5IL2G4IAAACIj1HXIsCSCIgUgKIhFBlg");
	var mask_3_graphics_398 = new cjs.Graphics().p("Au7KbIBAh4IgFgDIC9lYIOD0MIL8G7IgBACIj2HaIsFSVIgUgLIhFBog");
	var mask_3_graphics_399 = new cjs.Graphics().p("AvBKmIBBh5IgFgDIC+lbIOH0hIMCG/IgBACIj4HdIsISoIgUgLIhGBqg");
	var mask_3_graphics_400 = new cjs.Graphics().p("AvGKwIBBh5IgFgEIDAlcIOK02IMHHBIgBADIj5HhIsLS6IgUgKIhHBqg");
	var mask_3_graphics_401 = new cjs.Graphics().p("AvMK7IBCh7IgFgDIDBlfIOO1LIMMHFIAAADIj8HkIsOTNIgUgLIhGBtg");
	var mask_3_graphics_402 = new cjs.Graphics().p("AvRLFIBCh8IgFgDIDClhIOS1fIMSHIIAAADIj+HnIsRTgIgUgKIhHBug");
	var mask_3_graphics_403 = new cjs.Graphics().p("AvXLQIBDh9IgFgDIDElkIOV10IMYHMIgBACIkAHsIsSTzIgVgMIhHBwg");
	var mask_3_graphics_404 = new cjs.Graphics().p("AvcLaIBDh+IgGgDIDGlnIOZ2IIMdHQIgBACIkBHvIsVUFIgVgLIhHByg");
	var mask_3_graphics_405 = new cjs.Graphics().p("AvhLkIBDh+IgFgDIDGlqIOd2cIMiHTIAAACIkDHzIsYUXIgVgLIhIBzg");
	var mask_3_graphics_406 = new cjs.Graphics().p("AvnLvIBEh/IgFgDIDIltIOf2xIMpHWIgBAEIkFH2IsbUqIgVgMIhHB1g");
	var mask_3_graphics_407 = new cjs.Graphics().p("AvsL5IBEiAIgFgDIDJlvIOj3GIMuHaIAAADIkHH6IseU9IgVgMIhIB3g");
	var mask_3_graphics_408 = new cjs.Graphics().p("AvyMEIBFiBIgFgDIDKlyIOn3aIM0HdIgBADIkIH9IshVQIgVgMIhIB4g");
	var mask_3_graphics_409 = new cjs.Graphics().p("Av3MOIBFiCIgGgDIDNl0IOq3vIM5HhIAAADIkLIBIsjViIgVgMIhJB6g");
	var mask_3_graphics_410 = new cjs.Graphics().p("Av9MZIBGiDIgGgDIDOl3IOu4EIM/HlIgBACIkMIFIsmV1IgWgMIhJB7g");
	var mask_3_graphics_411 = new cjs.Graphics().p("AwCMjIBGiDIgGgEIDQl5IOx4YINEHoIgBACIkOIIIsoWHIgWgLIhJB9g");
	var mask_3_graphics_412 = new cjs.Graphics().p("AwIMtIBHiEIgGgEIDRl7IO04tINLHsIgBACIkQIMIsrWaIgWgMIhKB/g");
	var mask_3_graphics_413 = new cjs.Graphics().p("AwNM4IBHiGIgGgDIDSl+IO45BINQHuIgBADIkRIPIsuWtIgWgMIhKCAg");
	var mask_3_graphics_414 = new cjs.Graphics().p("AwTNCIBIiGIgGgDIDUmBIO75WINWHyIgBADIkUITIswW/IgXgMIhKCCg");
	var mask_3_graphics_415 = new cjs.Graphics().p("AwYNNIBIiHIgGgEIDVmDIO/5qINbH1IgBADIkVIWIs0XSIgWgMIhKCEg");
	var mask_3_graphics_416 = new cjs.Graphics().p("AweNXIBJiIIgGgDIDWmGIPD5/INhH5IgBADIkXIaIs3XkIgWgMIhLCFg");
	var mask_3_graphics_417 = new cjs.Graphics().p("AwjNiIBJiJIgGgEIDYmIIPG6UINmH9IgBADIkYIdIs6X3IgWgMIhLCHg");
	var mask_3_graphics_418 = new cjs.Graphics().p("AwpNsIBKiKIgGgEIDZmKIPK6pINsIBIgBACIkbIiIs8YJIgWgMIhMCJg");
	var mask_3_graphics_419 = new cjs.Graphics().p("AwuN3IBKiMIgGgDIDamNIPO69INxIDIgBAEIkcIkIs+YcIgYgMIhLCKg");
	var mask_3_graphics_420 = new cjs.Graphics().p("Aw0OBIBLiLIgGgEMAStghhIN2IGIgBAEIkeInItBYvIgXgMIhLCLg");
	var mask_3_graphics_421 = new cjs.Graphics().p("Aw5OLIBLiMIgHgEMASygh4IN9IKIgBADMgRkAhtIgXgMIhMCNg");
	var mask_3_graphics_422 = new cjs.Graphics().p("Aw+OWIBLiOIgGgDMAS2giQIOCIOMgRpAiGIgXgMIhMCPg");
	var mask_3_graphics_423 = new cjs.Graphics().p("AxTO2IBJiHIgEgCMATIgjYIOaICMgSRAi0IgLgHIhaCog");
	var mask_3_graphics_424 = new cjs.Graphics().p("AxnPXIBGiDIgBAAMATZgkgIOxH2MgS4AjhIABABIhnDBg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(319).to({graphics:mask_3_graphics_319,x:129.4,y:209.2}).wait(1).to({graphics:mask_3_graphics_320,x:206.9,y:382.7}).wait(1).to({graphics:mask_3_graphics_321,x:207.5,y:381.7}).wait(1).to({graphics:mask_3_graphics_322,x:208,y:380.6}).wait(1).to({graphics:mask_3_graphics_323,x:208.6,y:379.6}).wait(1).to({graphics:mask_3_graphics_324,x:209.1,y:378.6}).wait(1).to({graphics:mask_3_graphics_325,x:209.7,y:377.6}).wait(1).to({graphics:mask_3_graphics_326,x:210.2,y:376.5}).wait(1).to({graphics:mask_3_graphics_327,x:210.8,y:375.5}).wait(1).to({graphics:mask_3_graphics_328,x:211.3,y:374.5}).wait(1).to({graphics:mask_3_graphics_329,x:211.9,y:373.5}).wait(1).to({graphics:mask_3_graphics_330,x:212.4,y:372.5}).wait(1).to({graphics:mask_3_graphics_331,x:212.9,y:371.4}).wait(1).to({graphics:mask_3_graphics_332,x:213.5,y:370.4}).wait(1).to({graphics:mask_3_graphics_333,x:214,y:369.4}).wait(1).to({graphics:mask_3_graphics_334,x:214.6,y:368.4}).wait(1).to({graphics:mask_3_graphics_335,x:215.1,y:367.4}).wait(1).to({graphics:mask_3_graphics_336,x:215.7,y:366.4}).wait(1).to({graphics:mask_3_graphics_337,x:216.2,y:365.3}).wait(1).to({graphics:mask_3_graphics_338,x:216.8,y:364.1}).wait(1).to({graphics:mask_3_graphics_339,x:217.3,y:363.1}).wait(1).to({graphics:mask_3_graphics_340,x:217.9,y:362}).wait(1).to({graphics:mask_3_graphics_341,x:218.4,y:361}).wait(1).to({graphics:mask_3_graphics_342,x:219,y:360}).wait(1).to({graphics:mask_3_graphics_343,x:219.5,y:358.9}).wait(1).to({graphics:mask_3_graphics_344,x:220.1,y:357.9}).wait(1).to({graphics:mask_3_graphics_345,x:220.6,y:356.8}).wait(1).to({graphics:mask_3_graphics_346,x:221.2,y:355.8}).wait(1).to({graphics:mask_3_graphics_347,x:221.7,y:354.8}).wait(1).to({graphics:mask_3_graphics_348,x:222.2,y:353.7}).wait(1).to({graphics:mask_3_graphics_349,x:222.8,y:352.6}).wait(1).to({graphics:mask_3_graphics_350,x:223.3,y:351.6}).wait(1).to({graphics:mask_3_graphics_351,x:223.9,y:350.6}).wait(1).to({graphics:mask_3_graphics_352,x:224.4,y:349.5}).wait(1).to({graphics:mask_3_graphics_353,x:225,y:348.5}).wait(1).to({graphics:mask_3_graphics_354,x:225.5,y:347.4}).wait(1).to({graphics:mask_3_graphics_355,x:226.1,y:346.4}).wait(1).to({graphics:mask_3_graphics_356,x:226.6,y:345.4}).wait(1).to({graphics:mask_3_graphics_357,x:227.2,y:344.3}).wait(1).to({graphics:mask_3_graphics_358,x:227.7,y:343.3}).wait(1).to({graphics:mask_3_graphics_359,x:228.3,y:342.2}).wait(1).to({graphics:mask_3_graphics_360,x:228.8,y:341.2}).wait(1).to({graphics:mask_3_graphics_361,x:229.4,y:340.1}).wait(1).to({graphics:mask_3_graphics_362,x:229.9,y:339.1}).wait(1).to({graphics:mask_3_graphics_363,x:230.4,y:338}).wait(1).to({graphics:mask_3_graphics_364,x:231,y:337}).wait(1).to({graphics:mask_3_graphics_365,x:231.5,y:336}).wait(1).to({graphics:mask_3_graphics_366,x:232.1,y:334.9}).wait(1).to({graphics:mask_3_graphics_367,x:232.6,y:333.9}).wait(1).to({graphics:mask_3_graphics_368,x:233.2,y:332.8}).wait(1).to({graphics:mask_3_graphics_369,x:233.7,y:331.8}).wait(1).to({graphics:mask_3_graphics_370,x:234.3,y:330.8}).wait(1).to({graphics:mask_3_graphics_371,x:234.8,y:329.7}).wait(1).to({graphics:mask_3_graphics_372,x:235.4,y:328.7}).wait(1).to({graphics:mask_3_graphics_373,x:235.9,y:327.6}).wait(1).to({graphics:mask_3_graphics_374,x:236.5,y:326.6}).wait(1).to({graphics:mask_3_graphics_375,x:237,y:325.5}).wait(1).to({graphics:mask_3_graphics_376,x:237.6,y:324.5}).wait(1).to({graphics:mask_3_graphics_377,x:238.1,y:323.4}).wait(1).to({graphics:mask_3_graphics_378,x:238.7,y:322.4}).wait(1).to({graphics:mask_3_graphics_379,x:239.2,y:321.4}).wait(1).to({graphics:mask_3_graphics_380,x:239.8,y:320.3}).wait(1).to({graphics:mask_3_graphics_381,x:240.3,y:319.3}).wait(1).to({graphics:mask_3_graphics_382,x:240.8,y:318.2}).wait(1).to({graphics:mask_3_graphics_383,x:241.4,y:317.2}).wait(1).to({graphics:mask_3_graphics_384,x:241.9,y:316.1}).wait(1).to({graphics:mask_3_graphics_385,x:242.5,y:315.1}).wait(1).to({graphics:mask_3_graphics_386,x:243,y:314}).wait(1).to({graphics:mask_3_graphics_387,x:243.6,y:313}).wait(1).to({graphics:mask_3_graphics_388,x:244.1,y:312}).wait(1).to({graphics:mask_3_graphics_389,x:244.7,y:310.9}).wait(1).to({graphics:mask_3_graphics_390,x:245.2,y:309.9}).wait(1).to({graphics:mask_3_graphics_391,x:245.8,y:308.8}).wait(1).to({graphics:mask_3_graphics_392,x:246.3,y:307.8}).wait(1).to({graphics:mask_3_graphics_393,x:246.9,y:306.8}).wait(1).to({graphics:mask_3_graphics_394,x:247.4,y:305.7}).wait(1).to({graphics:mask_3_graphics_395,x:248,y:304.7}).wait(1).to({graphics:mask_3_graphics_396,x:248.5,y:303.6}).wait(1).to({graphics:mask_3_graphics_397,x:249.1,y:302.6}).wait(1).to({graphics:mask_3_graphics_398,x:249.6,y:301.5}).wait(1).to({graphics:mask_3_graphics_399,x:250.2,y:300.5}).wait(1).to({graphics:mask_3_graphics_400,x:250.7,y:299.4}).wait(1).to({graphics:mask_3_graphics_401,x:251.3,y:298.4}).wait(1).to({graphics:mask_3_graphics_402,x:251.8,y:297.4}).wait(1).to({graphics:mask_3_graphics_403,x:252.4,y:296.3}).wait(1).to({graphics:mask_3_graphics_404,x:252.9,y:295.3}).wait(1).to({graphics:mask_3_graphics_405,x:253.4,y:294.2}).wait(1).to({graphics:mask_3_graphics_406,x:254,y:293.2}).wait(1).to({graphics:mask_3_graphics_407,x:254.5,y:292.1}).wait(1).to({graphics:mask_3_graphics_408,x:255.1,y:291.1}).wait(1).to({graphics:mask_3_graphics_409,x:255.6,y:290}).wait(1).to({graphics:mask_3_graphics_410,x:256.2,y:289}).wait(1).to({graphics:mask_3_graphics_411,x:256.7,y:288}).wait(1).to({graphics:mask_3_graphics_412,x:257.3,y:286.9}).wait(1).to({graphics:mask_3_graphics_413,x:257.8,y:285.9}).wait(1).to({graphics:mask_3_graphics_414,x:258.4,y:284.8}).wait(1).to({graphics:mask_3_graphics_415,x:258.9,y:283.8}).wait(1).to({graphics:mask_3_graphics_416,x:259.5,y:282.8}).wait(1).to({graphics:mask_3_graphics_417,x:260,y:281.7}).wait(1).to({graphics:mask_3_graphics_418,x:260.6,y:280.7}).wait(1).to({graphics:mask_3_graphics_419,x:261.1,y:279.6}).wait(1).to({graphics:mask_3_graphics_420,x:261.7,y:278.6}).wait(1).to({graphics:mask_3_graphics_421,x:262.2,y:277.5}).wait(1).to({graphics:mask_3_graphics_422,x:262.7,y:276.5}).wait(1).to({graphics:mask_3_graphics_423,x:264.8,y:273.2}).wait(1).to({graphics:mask_3_graphics_424,x:266.8,y:270}).wait(390));

	// Layer 10
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("AsQUBQBoAUCIgyQB/gvDOjMQBKiGDfn6QDhn6AJgWQAJgXCWlgQCWlhCcmG");
	this.shape_4.setTransform(229.5,277.5);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(319).to({_off:false},0).wait(495));

	// Layer 9 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_289 = new cjs.Graphics().p("AxGW1QlCrEERrYQEQrWLDlBQLClCLXEQMgUiA23QrYkRlBrBg");
	var mask_4_graphics_290 = new cjs.Graphics().p("AwcXXQlUq8D/reQD+rdK7lSQK5lULeD/MgTMA3WQrdj/lSq5g");
	var mask_4_graphics_291 = new cjs.Graphics().p("AvyX5QlkqzDsrkQDsrjKzlkQKwllLkDtMgR0A3zQrjjslkqxg");
	var mask_4_graphics_292 = new cjs.Graphics().p("AvGYbQl2qqDarqQDarpKql0QKnl2LqDaMgQcA4PQrpjal0qog");
	var mask_4_graphics_293 = new cjs.Graphics().p("AuZY9QmGqhDHruQDHruKgmFQKemHLvDIMgPCA4nQrujImFqeg");
	var mask_4_graphics_294 = new cjs.Graphics().p("AtrZfQmXqXC1rzQC1rzKWmVQKUmXL0C1MgNpA4+Qrzi1mVqVg");
	var mask_4_graphics_295 = new cjs.Graphics().p("As8aBQmnqMCir4QCir3KMmmQKKmnL4CiMgMOA5TQr3iimmqLg");
	var mask_4_graphics_296 = new cjs.Graphics().p("AsMajQm3qCCPr7QCQr7KBm1QJ/m4L8CQMgKzA5kQr7iPm2qAg");
	var mask_4_graphics_297 = new cjs.Graphics().p("ArbbFQnGp3B8r/QB8r+J3nFQJ0nHL/B8MgJYA51Qr+h8nGp1g");
	var mask_4_graphics_298 = new cjs.Graphics().p("AqobnQnXpsBqsBQBpsBJrnVQJpnWMCBpMgH9A6CQsBhpnUppg");
	var mask_4_graphics_299 = new cjs.Graphics().p("Ap1cIQnmpfBXsEQBWsEJfnjQJdnmMEBXMgGgA6NQsDhWnkpeg");
	var mask_4_graphics_300 = new cjs.Graphics().p("ApBcqQn0pUBDsGQBDsFJTnyQJRn1MGBEMgFEA6WQsFhDnzpRg");
	var mask_4_graphics_301 = new cjs.Graphics().p("AoMdLQoDpHAwsHQAwsHJHoBQJEoDMIAwMgDoA6eQsHgwoBpFg");
	var mask_4_graphics_302 = new cjs.Graphics().p("AnWdsQoRo6AdsIQAdsII6oPQI3oRMIAdMgCLA6iQsIgdoPo4g");
	var mask_4_graphics_303 = new cjs.Graphics().p("AmfeNQofotAKsIQAKsIIsoeQIqofMJAKMgAuA6lQsJgKodorg");
	var mask_4_graphics_304 = new cjs.Graphics().p("Al+euQosofgKsJQgJsIIforQIcotMJgJMAAuA6kIgbABQr4AAogoUg");
	var mask_4_graphics_305 = new cjs.Graphics().p("AlzfNQo6oRgdsIQgdsIISo4QIOo5MIgdMACLA6iIhPACQrXAAoZn1g");
	var mask_4_graphics_306 = new cjs.Graphics().p("AlofsQpHoDgvsHQgwsHICpFQICpGMGgwMADoA6eQhDAEhBAAQq2AAoSnWg");
	var mask_4_graphics_307 = new cjs.Graphics().p("EgFcAgKQpTn0hDsGQhDsGH0pRQHzpTMFhDMAFEA6XQhcAIhZAAQqYAAoKm4g");
	var mask_4_graphics_308 = new cjs.Graphics().p("EgFPAgnQpfnlhWsEQhWsFHlpcQHkpgMDhWMAGgA6OQh1ANhwAAQp7AAoBmbg");
	var mask_4_graphics_309 = new cjs.Graphics().p("EgFBAhDQprnWhpsCQhpsCHWpoQHVprMAhpMAH8A6CQiNATiIAAQpeAAn3l/g");
	var mask_4_graphics_310 = new cjs.Graphics().p("EgEyAheQp3nGh8r/Qh8r/HHp0QHFp3L+h8MAJYA51QilAaifAAQpDAAnslkg");
	var mask_4_graphics_311 = new cjs.Graphics().p("EgEjAh5QqBm3iQr8QiPr8G4p/QG1qBL7iPMAKzA5kQi8Aki1AAQopAAnhlKg");
	var mask_4_graphics_312 = new cjs.Graphics().p("EgETAiSQqMmniir4Qiir4GnqKQGmqML3iiMAMOA5TQjTAtjLAAQoPAAnVkxg");
	var mask_4_graphics_313 = new cjs.Graphics().p("EgECAiqQqWmXi1rzQi1r0GXqUQGWqWLyi1MANpA4+QjpA4jgAAQn3AAnIkZg");
	var mask_4_graphics_314 = new cjs.Graphics().p("EgDwAjCQqhmHjHrvQjHrvGGqdQGFqgLujIMAPCA4nQj+BEj1AAQnfAAm6kBg");
	var mask_4_graphics_315 = new cjs.Graphics().p("EgDeAjYQqql1jarqQjZrqF2qnQF0qqLojaMAQcA4PQkTBQkLAAQnHAAmsjrg");
	var mask_4_graphics_316 = new cjs.Graphics().p("EgDLAjtQqzlkjsrkQjsrkFlqxQFjqyLjjsMAR0A3zQknBekgAAQmwAAmdjWg");
	var mask_4_graphics_317 = new cjs.Graphics().p("EgC3AkCQq8lTj+rfQj/reFUq5QFSq7Ldj+MATMA3WQk7Btk0AAQmaAAmNjBg");
	var mask_4_graphics_318 = new cjs.Graphics().p("EgCjAkVQrElCkQrXQkRrYFDrBQFArDLYkRMAUiA23QlOB9lJAAQmEAAl9iug");
	var mask_4_graphics_319 = new cjs.Graphics().p("EgCOAkoQrMkxkirQQkirREwrJQEwrLLQkiMAV5A2VQlhCOleAAQlvAAlribg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(289).to({graphics:mask_4_graphics_289,x:123.2,y:243.9}).wait(1).to({graphics:mask_4_graphics_290,x:121.1,y:244.7}).wait(1).to({graphics:mask_4_graphics_291,x:118.9,y:245.4}).wait(1).to({graphics:mask_4_graphics_292,x:116.8,y:246.1}).wait(1).to({graphics:mask_4_graphics_293,x:114.6,y:246.7}).wait(1).to({graphics:mask_4_graphics_294,x:112.4,y:247.3}).wait(1).to({graphics:mask_4_graphics_295,x:110.2,y:247.8}).wait(1).to({graphics:mask_4_graphics_296,x:108,y:248.2}).wait(1).to({graphics:mask_4_graphics_297,x:105.8,y:248.6}).wait(1).to({graphics:mask_4_graphics_298,x:103.5,y:248.9}).wait(1).to({graphics:mask_4_graphics_299,x:101.3,y:249.2}).wait(1).to({graphics:mask_4_graphics_300,x:99,y:249.4}).wait(1).to({graphics:mask_4_graphics_301,x:96.8,y:249.6}).wait(1).to({graphics:mask_4_graphics_302,x:94.5,y:249.7}).wait(1).to({graphics:mask_4_graphics_303,x:92.2,y:249.8}).wait(1).to({graphics:mask_4_graphics_304,x:92.2,y:249.8}).wait(1).to({graphics:mask_4_graphics_305,x:94.6,y:249.8}).wait(1).to({graphics:mask_4_graphics_306,x:96.9,y:249.8}).wait(1).to({graphics:mask_4_graphics_307,x:99.2,y:249.8}).wait(1).to({graphics:mask_4_graphics_308,x:101.5,y:249.8}).wait(1).to({graphics:mask_4_graphics_309,x:103.8,y:249.8}).wait(1).to({graphics:mask_4_graphics_310,x:106.1,y:249.8}).wait(1).to({graphics:mask_4_graphics_311,x:108.4,y:249.9}).wait(1).to({graphics:mask_4_graphics_312,x:110.6,y:249.9}).wait(1).to({graphics:mask_4_graphics_313,x:112.9,y:249.9}).wait(1).to({graphics:mask_4_graphics_314,x:115.2,y:249.9}).wait(1).to({graphics:mask_4_graphics_315,x:117.4,y:249.9}).wait(1).to({graphics:mask_4_graphics_316,x:119.6,y:249.9}).wait(1).to({graphics:mask_4_graphics_317,x:121.8,y:249.9}).wait(1).to({graphics:mask_4_graphics_318,x:124,y:249.9}).wait(1).to({graphics:mask_4_graphics_319,x:126.1,y:249.9}).wait(495));

	// Layer 3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("AsQUBQBoAUCIgyQB/gvDOjMQBKiGDfn6QDhn6AJgWQAJgXCWlgQCWlhCcmG");
	this.shape_5.setTransform(229.5,277.5);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(289).to({_off:false},0).wait(525));

	// Layer 17
	this.instance_3 = new lib.ar1("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(112.2,209.1,1,1,0,125.8,-54.2,-0.8,0.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(805));

	// Layer 7 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_209 = new cjs.Graphics().p("A6aIIQFWq5Ldj7QLej9K6FWQK6FUD7LfQD9LelVK6g");
	var mask_5_graphics_210 = new cjs.Graphics().p("A6rJAQFGrBLYkLQLYkMLCFGQLBFGELLYQENLYlHLBg");
	var mask_5_graphics_211 = new cjs.Graphics().p("A68J4QE3rHLRkcQLTkcLIE3QLIE2EbLSQEdLTk3LIg");
	var mask_5_graphics_212 = new cjs.Graphics().p("A7MKwQEnrOLMkqQLNksLOEnQLOEnErLMQEsLMknLOg");
	var mask_5_graphics_213 = new cjs.Graphics().p("A7bLpQEYrVLEk5QLHk8LUEYQLVEXE6LFQE8LFkYLVg");
	var mask_5_graphics_214 = new cjs.Graphics().p("A7pMjQEHrbK+lJQLAlLLaEIQLbEHFJK+QFLK/kHLbg");
	var mask_5_graphics_215 = new cjs.Graphics().p("A72NdQD3rhK3lYQK4laLfD4QLhD3FYK3QFbK3j4Lgg");
	var mask_5_graphics_216 = new cjs.Graphics().p("A8DOXQDormKulnQKxlpLlDoQLlDnFoKvQFpKvjnLmg");
	var mask_5_graphics_217 = new cjs.Graphics().p("A8OPSQDXrrKnl1QKol4LqDXQLqDXF3KnQF4KnjXLrg");
	var mask_5_graphics_218 = new cjs.Graphics().p("A8ZQNQDHrvKemFQKgmGLvDHQLvDHGFKeQGHKfjHLvg");
	var mask_5_graphics_219 = new cjs.Graphics().p("A8jRJQC3r0KWmTQKXmVLyC3QLzC2GUKWQGWKWi3L0g");
	var mask_5_graphics_220 = new cjs.Graphics().p("A8sSEQCnr3KMmhQKPmjL2CmQL3CmGiKNQGkKNimL3g");
	var mask_5_graphics_221 = new cjs.Graphics().p("A80TBQCWr7KDmwQKGmxL5CVQL7CWGwKEQGyKEiWL6g");
	var mask_5_graphics_222 = new cjs.Graphics().p("A87T9QCFr+J6m+QJ8m/L8CFQL+CFG+J6QHAJ7iFL9g");
	var mask_5_graphics_223 = new cjs.Graphics().p("A9BU6QB0sBJwnMQJynML/B0QMBB0HLJxQHOJwh0MAg");
	var mask_5_graphics_224 = new cjs.Graphics().p("A9GV2QBjsCJmnaQJonaMBBkQMDBjHZJmQHbJnhjMCg");
	var mask_5_graphics_225 = new cjs.Graphics().p("A9LWzQBTsEJbnnQJdnnMEBSQMFBTHmJcQHoJbhSMFg");
	var mask_5_graphics_226 = new cjs.Graphics().p("A9OXwQBBsGJRn0QJSn0MGBCQMGBCHzJRQH2JRhCMGg");
	var mask_5_graphics_227 = new cjs.Graphics().p("A9QYuQAxsIJFoAQJHoCMHAxQMHAxIBJGQICJGgxMIg");
	var mask_5_graphics_228 = new cjs.Graphics().p("A9RZrQAgsII6oOQI8oNMHAgQMJAgINI7QIOI6ggMIg");
	var mask_5_graphics_229 = new cjs.Graphics().p("A9SaoQAPsJIvoZQIwoaMIAPQMJAPIZIvQIbIvgPMJg");
	var mask_5_graphics_230 = new cjs.Graphics().p("A0xGzQIlomMJgCQMIgCIlIkQInIjACMIMg6lAAJQgCsJIjolg");
	var mask_5_graphics_231 = new cjs.Graphics().p("A1NG8QIYoyMJgTQMIgSIxIXQIzIXATMIMg6kABbQgTsJIXoxg");
	var mask_5_graphics_232 = new cjs.Graphics().p("A1oHFQIMo9MIgkQMHgjI9ILQI+IKAkMIMg6hACsQgjsIIKo9g");
	var mask_5_graphics_233 = new cjs.Graphics().p("A2CHQQIApJMHg1QMGg0JIH+QJKH+A0MHMg6cAD+Qg1sHH+pIg");
	var mask_5_graphics_234 = new cjs.Graphics().p("A2aHaQHypTMGhGQMFhFJTHyQJUHxBGMFMg6WAFPQhGsGHypTg");
	var mask_5_graphics_235 = new cjs.Graphics().p("A2yHmQHlpeMEhXQMEhWJdHlQJgHkBWMEMg6OAGgQhWsEHkpeg");
	var mask_5_graphics_236 = new cjs.Graphics().p("A3IHyQHYppMChnQMBhnJoHXQJqHXBnMCMg6EAHxQhnsCHXpog");
	var mask_5_graphics_237 = new cjs.Graphics().p("A3eH/QHLpzL/h4QL/h4JzHKQJzHJB4MAMg54AJBQh4r/HJpyg");
	var mask_5_graphics_238 = new cjs.Graphics().p("A3yIMQG9p9L9iIQL8iJJ8G8QJ9G7CJL9Mg5rAKTQiIr9G7p8g");
	var mask_5_graphics_239 = new cjs.Graphics().p("A4FIaQGvqHL6iZQL5iZKFGuQKHGuCZL5Mg5bALjQiZr6GtqFg");
	var mask_5_graphics_240 = new cjs.Graphics().p("A4WIoQGgqPL2iqQL2iqKPGhQKQGeCpL3Mg5KAMyQiqr2GgqPg");
	var mask_5_graphics_241 = new cjs.Graphics().p("A4nI3QGSqYLzi6QLxi6KYGSQKZGQC6LyMg44AOCQi6ryGRqYg");
	var mask_5_graphics_242 = new cjs.Graphics().p("A42JHQGDqhLujLQLtjKKhGEQKiGBDKLuMg4jAPRQjLruGDqgg");
	var mask_5_graphics_243 = new cjs.Graphics().p("A5FJXQF1qqLqjaQLojbKpF1QKqFzDbLpMg4OAQgQjarqFzqog");
	var mask_5_graphics_244 = new cjs.Graphics().p("A5SJnQFmqxLljrQLjjrKxFnQKyFjDrLlMg32ARtQjqrkFkqxg");
	var mask_5_graphics_245 = new cjs.Graphics().p("A5dJ4QFWq4Lgj7QLej7K4FXQK6FUD7LgMg3cAS7Qj7rgFWq4g");
	var mask_5_graphics_246 = new cjs.Graphics().p("A5oKKQFHrALakLQLZkLK/FIQLBFFELLaMg3BAUIQkLraFHq/g");
	var mask_5_graphics_247 = new cjs.Graphics().p("A5yKcQE4rHLUkaQLTkbLGE4QLIE2EbLUMg2kAVUQkbrTE3rHg");
	var mask_5_graphics_248 = new cjs.Graphics().p("A56KvQEprOLNkqQLMkqLOEpQLOEnEqLMMg2FAWgQkrrNEorNg");
	var mask_5_graphics_249 = new cjs.Graphics().p("A6BLCQEZrULGk5QLGk6LUEZQLUEXE6LGMg1lAXrQk6rHEYrTg");
	var mask_5_graphics_250 = new cjs.Graphics().p("A6HLWQEJraLAlJQK+lJLaEJQLaEIFJK+Mg1DAY2QlJrAEIrZg");
	var mask_5_graphics_251 = new cjs.Graphics().p("A6MLqQD5rgK5lYQK4lYLeD5QLgD4FZK3Mg0gAZ/QlZq4D4rfg");
	var mask_5_graphics_252 = new cjs.Graphics().p("A6PL/QDprmKwlmQKxloLjDqQLmDnFnKwMgz7AbIQlnqxDorkg");
	var mask_5_graphics_253 = new cjs.Graphics().p("A6RMUQDYrqKpl2QKpl2LoDZQLqDXF2KoMgzUAcQQl2qpDYrpg");
	var mask_5_graphics_254 = new cjs.Graphics().p("A6SMqQDIrvKgmEQKhmGLsDJQLvDHGFKgMgysAdWQmFqgDIrtg");
	var mask_5_graphics_255 = new cjs.Graphics().p("A6SNAQC4rzKXmTQKYmULxC5QLzC2GUKXMgyDAedQmUqYC4rxg");
	var mask_5_graphics_256 = new cjs.Graphics().p("A6RNXQCnr4KPmhQKPmiL1CoQL2CmGjKOMgxYAfjQmiqPCnr1g");
	var mask_5_graphics_257 = new cjs.Graphics().p("A6ONuQCXr7KFmvQKGmxL4CYQL6CWGwKEMgwqAgnQmxqGCXr4g");
	var mask_5_graphics_258 = new cjs.Graphics().p("A6KOFQCGr+J8m9QJ8m+L7CHQL9CFG+J7Mgv8AhqQm+p8CGr8g");
	var mask_5_graphics_259 = new cjs.Graphics().p("A6FOdQB1sBJynLQJynML/B3QL/B0HMJxMgvNAisQnMpyB2r+g");
	var mask_5_graphics_260 = new cjs.Graphics().p("A5/O1QBlsDJonYQJonaMBBmQMBBjHaJnMgucAjuQnZpoBksBg");
	var mask_5_graphics_261 = new cjs.Graphics().p("A53PNQBUsEJenmQJdnnMDBVQMEBTHnJcMgtqAkuQnnpeBUsDg");
	var mask_5_graphics_262 = new cjs.Graphics().p("A5uPmQBDsGJTnzQJTn0MEBEQMGBCH0JTMgs2AlsQn0pTBDsFg");
	var mask_5_graphics_263 = new cjs.Graphics().p("A5jQAQAysIJIoAQJHoBMGA0QMHAxIBJHMgsBAmqQoApIAysFg");
	var mask_5_graphics_264 = new cjs.Graphics().p("A5YQZQAisII8oNQI9oNMGAiQMIAhINI8MgrKAnmQoNo8AhsHg");
	var mask_5_graphics_265 = new cjs.Graphics().p("A5LQzQARsJIwoZQIxoZMHARQMJAPIZIxMgqSAoiQoZoxAQsHg");
	var mask_5_graphics_266 = new cjs.Graphics().p("A49ROQAAsKIlolQIlolMHAAQMIgBImIlMgpZApcQololgBsHg");
	var mask_5_graphics_267 = new cjs.Graphics().p("A4uRoQgRsJIZoxQIZoxMHgRQMIgSIyIZMgofAqVQoxoZgSsHg");
	var mask_5_graphics_268 = new cjs.Graphics().p("A4dSDQgisJIMo8QINo9MGghQMIgjI9IMMgnjArNQo9oMgisHg");
	var mask_5_graphics_269 = new cjs.Graphics().p("A4LSeQg0sHIApIQIApIMGgyQMHg1JIIAMgmmAsEQpIoAgzsGg");
	var mask_5_graphics_270 = new cjs.Graphics().p("A35S6QhEsHHzpSQHzpUMFhCQMFhGJUH0MgloAs4QpUnzhEsEg");
	var mask_5_graphics_271 = new cjs.Graphics().p("A3lTVQhVsEHmpdQHmpfMDhTQMEhWJeHmMgkpAtsQpenmhVsDg");
	var mask_5_graphics_272 = new cjs.Graphics().p("A3QTxQhlsCHYpoQHZpoMBhlQMChnJoHZMgjoAufQppnZhmsBg");
	var mask_5_graphics_273 = new cjs.Graphics().p("A25UOQh3sBHLpxQHMpzL+h1QL/h4JzHLMginAvQQpznLh2r+g");
	var mask_5_graphics_274 = new cjs.Graphics().p("A2iUqQiHr+G9p8QG+p8L7iGQL9iIJ8G9MghlAv/Qp8m9iHr7g");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(209).to({graphics:mask_5_graphics_209,x:187.4,y:216.8}).wait(1).to({graphics:mask_5_graphics_210,x:187.4,y:214.9}).wait(1).to({graphics:mask_5_graphics_211,x:187.4,y:213.1}).wait(1).to({graphics:mask_5_graphics_212,x:187.4,y:211.2}).wait(1).to({graphics:mask_5_graphics_213,x:187.4,y:209.3}).wait(1).to({graphics:mask_5_graphics_214,x:187.4,y:207.5}).wait(1).to({graphics:mask_5_graphics_215,x:187.4,y:205.5}).wait(1).to({graphics:mask_5_graphics_216,x:187.4,y:203.6}).wait(1).to({graphics:mask_5_graphics_217,x:187.4,y:201.7}).wait(1).to({graphics:mask_5_graphics_218,x:187.4,y:199.7}).wait(1).to({graphics:mask_5_graphics_219,x:187.4,y:197.8}).wait(1).to({graphics:mask_5_graphics_220,x:187.4,y:195.8}).wait(1).to({graphics:mask_5_graphics_221,x:187.4,y:193.8}).wait(1).to({graphics:mask_5_graphics_222,x:187.3,y:191.8}).wait(1).to({graphics:mask_5_graphics_223,x:187.3,y:189.8}).wait(1).to({graphics:mask_5_graphics_224,x:187.3,y:187.8}).wait(1).to({graphics:mask_5_graphics_225,x:187.3,y:185.8}).wait(1).to({graphics:mask_5_graphics_226,x:187.3,y:183.8}).wait(1).to({graphics:mask_5_graphics_227,x:187.2,y:181.8}).wait(1).to({graphics:mask_5_graphics_228,x:187.1,y:179.7}).wait(1).to({graphics:mask_5_graphics_229,x:187,y:177.7}).wait(1).to({graphics:mask_5_graphics_230,x:187,y:176.1}).wait(1).to({graphics:mask_5_graphics_231,x:187,y:178.2}).wait(1).to({graphics:mask_5_graphics_232,x:186.9,y:180.2}).wait(1).to({graphics:mask_5_graphics_233,x:186.8,y:182.3}).wait(1).to({graphics:mask_5_graphics_234,x:186.7,y:184.3}).wait(1).to({graphics:mask_5_graphics_235,x:186.5,y:186.4}).wait(1).to({graphics:mask_5_graphics_236,x:186.2,y:188.4}).wait(1).to({graphics:mask_5_graphics_237,x:185.9,y:190.4}).wait(1).to({graphics:mask_5_graphics_238,x:185.6,y:192.5}).wait(1).to({graphics:mask_5_graphics_239,x:185.2,y:194.5}).wait(1).to({graphics:mask_5_graphics_240,x:184.8,y:196.5}).wait(1).to({graphics:mask_5_graphics_241,x:184.3,y:198.5}).wait(1).to({graphics:mask_5_graphics_242,x:183.8,y:200.5}).wait(1).to({graphics:mask_5_graphics_243,x:183.2,y:202.5}).wait(1).to({graphics:mask_5_graphics_244,x:182.7,y:204.4}).wait(1).to({graphics:mask_5_graphics_245,x:182,y:206.4}).wait(1).to({graphics:mask_5_graphics_246,x:181.4,y:208.3}).wait(1).to({graphics:mask_5_graphics_247,x:180.7,y:210.2}).wait(1).to({graphics:mask_5_graphics_248,x:179.9,y:212.1}).wait(1).to({graphics:mask_5_graphics_249,x:179.2,y:214}).wait(1).to({graphics:mask_5_graphics_250,x:178.3,y:215.9}).wait(1).to({graphics:mask_5_graphics_251,x:177.5,y:217.7}).wait(1).to({graphics:mask_5_graphics_252,x:176.6,y:219.6}).wait(1).to({graphics:mask_5_graphics_253,x:175.7,y:221.4}).wait(1).to({graphics:mask_5_graphics_254,x:174.7,y:223.1}).wait(1).to({graphics:mask_5_graphics_255,x:173.7,y:224.9}).wait(1).to({graphics:mask_5_graphics_256,x:172.7,y:226.7}).wait(1).to({graphics:mask_5_graphics_257,x:171.6,y:228.4}).wait(1).to({graphics:mask_5_graphics_258,x:170.5,y:230.1}).wait(1).to({graphics:mask_5_graphics_259,x:169.4,y:231.7}).wait(1).to({graphics:mask_5_graphics_260,x:168.2,y:233.4}).wait(1).to({graphics:mask_5_graphics_261,x:167,y:235}).wait(1).to({graphics:mask_5_graphics_262,x:165.7,y:236.6}).wait(1).to({graphics:mask_5_graphics_263,x:164.4,y:238.1}).wait(1).to({graphics:mask_5_graphics_264,x:163,y:239.6}).wait(1).to({graphics:mask_5_graphics_265,x:161.6,y:241.1}).wait(1).to({graphics:mask_5_graphics_266,x:160.2,y:242.6}).wait(1).to({graphics:mask_5_graphics_267,x:158.8,y:244}).wait(1).to({graphics:mask_5_graphics_268,x:157.3,y:245.4}).wait(1).to({graphics:mask_5_graphics_269,x:155.8,y:246.8}).wait(1).to({graphics:mask_5_graphics_270,x:154.3,y:248.1}).wait(1).to({graphics:mask_5_graphics_271,x:152.7,y:249.4}).wait(1).to({graphics:mask_5_graphics_272,x:151.1,y:250.7}).wait(1).to({graphics:mask_5_graphics_273,x:149.5,y:251.9}).wait(1).to({graphics:mask_5_graphics_274,x:147.8,y:253}).wait(540));

	// Layer 6
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("AnkxuQIGkkD9DtQD8DthEEtQhEEslpKvQloKwCMCnQBRBhB6AI");
	this.shape_6.setTransform(152.6,276.5);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(209).to({_off:false},0).wait(605));

	// Layer 5 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_134 = new cjs.Graphics().p("AGgQFIEuqZIH0DkIktKYg");
	var mask_6_graphics_135 = new cjs.Graphics().p("AmTDhIEzqkIH0DjIkzKkg");
	var mask_6_graphics_136 = new cjs.Graphics().p("AmWDnIE5qwIH0DjIk5Kwg");
	var mask_6_graphics_137 = new cjs.Graphics().p("AmZDtIE/q9IH0DkIk/K9g");
	var mask_6_graphics_138 = new cjs.Graphics().p("AmcDzIFFrJIH0DjIlFLKg");
	var mask_6_graphics_139 = new cjs.Graphics().p("AmfD6IFLrWIH0DjIlLLWg");
	var mask_6_graphics_140 = new cjs.Graphics().p("AmhEAIFPriIH1DjIlRLig");
	var mask_6_graphics_141 = new cjs.Graphics().p("AmkEGIFVruIH0DjIlVLug");
	var mask_6_graphics_142 = new cjs.Graphics().p("AmnEMIFbr7IH0DkIlbL7g");
	var mask_6_graphics_143 = new cjs.Graphics().p("AmqESIFhsHIH0DjIlhMIg");
	var mask_6_graphics_144 = new cjs.Graphics().p("AmtEZIFnsUIH0DjIlnMUg");
	var mask_6_graphics_145 = new cjs.Graphics().p("AmvEfIFrsgIH1DjIltMhg");
	var mask_6_graphics_146 = new cjs.Graphics().p("AmzElIFystIH1DkIlyMtg");
	var mask_6_graphics_147 = new cjs.Graphics().p("Am1ErIF3s5IH0DkIl3M5g");
	var mask_6_graphics_148 = new cjs.Graphics().p("Am4ExIF9tFIH0DjIl9NGg");
	var mask_6_graphics_149 = new cjs.Graphics().p("Am7E4IGDtSIH0DjImDNSg");
	var mask_6_graphics_150 = new cjs.Graphics().p("Am+E+IGJteIH0DjImJNfg");
	var mask_6_graphics_151 = new cjs.Graphics().p("AnAFEIGNtrIH1DkImONrg");
	var mask_6_graphics_152 = new cjs.Graphics().p("AnEFLIGUt4IH1DjImUN4g");
	var mask_6_graphics_153 = new cjs.Graphics().p("AnGFRIGZuEIH0DjImZOEg");
	var mask_6_graphics_154 = new cjs.Graphics().p("AnJFXIGfuQIH0DjImfOQg");
	var mask_6_graphics_155 = new cjs.Graphics().p("AnMFdIGlucIH0DjImlOdg");
	var mask_6_graphics_156 = new cjs.Graphics().p("AnPFjIGrupIH0DkImrOpg");
	var mask_6_graphics_157 = new cjs.Graphics().p("AnSFqIGwu2IH1DjImwO2g");
	var mask_6_graphics_158 = new cjs.Graphics().p("AnUFwIG1vCIH0DjIm1PCg");
	var mask_6_graphics_159 = new cjs.Graphics().p("AnXF2IG7vOIH0DjIm7POg");
	var mask_6_graphics_160 = new cjs.Graphics().p("AnaF8IHBvbIH0DkInBPbg");
	var mask_6_graphics_161 = new cjs.Graphics().p("AndGCIHHvnIH0DjInHPog");
	var mask_6_graphics_162 = new cjs.Graphics().p("AngGJIHNv0IH0DjInNP0g");
	var mask_6_graphics_163 = new cjs.Graphics().p("AnjGPIHSwAIH1DjInTQBg");
	var mask_6_graphics_164 = new cjs.Graphics().p("AnlGVIHXwMIH0DjInXQMg");
	var mask_6_graphics_165 = new cjs.Graphics().p("AnoGbIHdwZIH0DkIndQZg");
	var mask_6_graphics_166 = new cjs.Graphics().p("AnrGhIHjwlIH0DjInjQmg");
	var mask_6_graphics_167 = new cjs.Graphics().p("AnuGoIHpwyIH0DjInpQyg");
	var mask_6_graphics_168 = new cjs.Graphics().p("AnxGuIHuw+IH1DjInuQ/g");
	var mask_6_graphics_169 = new cjs.Graphics().p("AnzG0IHzxLIH1DkIn1RLg");
	var mask_6_graphics_170 = new cjs.Graphics().p("An2G7IH4xYIH1DjIn4RYg");
	var mask_6_graphics_171 = new cjs.Graphics().p("An5HBIH+xkIH1DjIn+Rkg");
	var mask_6_graphics_172 = new cjs.Graphics().p("An8HHIIExwIH1DkIoERvg");
	var mask_6_graphics_173 = new cjs.Graphics().p("An+HNIIJx8IH0DjIoJR8g");
	var mask_6_graphics_174 = new cjs.Graphics().p("AoBHTIIOyJIH1DkIoOSIg");
	var mask_6_graphics_175 = new cjs.Graphics().p("AoEHZIIUyVIH1DkIoUSVg");
	var mask_6_graphics_176 = new cjs.Graphics().p("AoHHfIIayhIH1DkIoaShg");
	var mask_6_graphics_177 = new cjs.Graphics().p("AoKHmIIgyuIH1DjIogSug");
	var mask_6_graphics_178 = new cjs.Graphics().p("AoNHsIImy7IH0DkIolS6g");
	var mask_6_graphics_179 = new cjs.Graphics().p("AoPHyIIrzHIH0DkIorTHg");
	var mask_6_graphics_180 = new cjs.Graphics().p("AoSH4IIwzTIH1DkIowTTg");
	var mask_6_graphics_181 = new cjs.Graphics().p("AoVH+II2zfIH1DkIo2Tfg");
	var mask_6_graphics_182 = new cjs.Graphics().p("AoYIFII8zsIH1DjIo8Tsg");
	var mask_6_graphics_183 = new cjs.Graphics().p("AobILIJCz5IH1DkIpCT5g");
	var mask_6_graphics_184 = new cjs.Graphics().p("AodIRIJH0FIH0DkIpHUFg");
	var mask_6_graphics_185 = new cjs.Graphics().p("AogIYIJN0SIH0DkIpMURg");
	var mask_6_graphics_186 = new cjs.Graphics().p("AojIeIJS0eIH1DjIpSUeg");
	var mask_6_graphics_187 = new cjs.Graphics().p("AomIkIJY0rIH1DkIpYUqg");
	var mask_6_graphics_188 = new cjs.Graphics().p("AopIqIJe03IH1DkIpeU3g");
	var mask_6_graphics_189 = new cjs.Graphics().p("AosIwIJk1DIH1DkIpkVDg");
	var mask_6_graphics_190 = new cjs.Graphics().p("AouI3IJp1QIH0DkIpoVPg");
	var mask_6_graphics_191 = new cjs.Graphics().p("AoxI9IJu1cIH1DjIpuVcg");
	var mask_6_graphics_192 = new cjs.Graphics().p("Ao0JDIJ01pIH1DkIp0Vog");
	var mask_6_graphics_193 = new cjs.Graphics().p("Ao3JJIJ611IH1DkIp6V1g");
	var mask_6_graphics_194 = new cjs.Graphics().p("Ao6JPIKA2BIH1DkIqAWBg");
	var mask_6_graphics_195 = new cjs.Graphics().p("Ao9JWIKG2OIH1DjIqGWOg");
	var mask_6_graphics_196 = new cjs.Graphics().p("ApAJcIKM2bIH0DkIqKWbg");
	var mask_6_graphics_197 = new cjs.Graphics().p("ApCJiIKQ2nIH1DkIqQWmg");
	var mask_6_graphics_198 = new cjs.Graphics().p("ApFJoIKW2zIH1DkIqWWzg");
	var mask_6_graphics_199 = new cjs.Graphics().p("ApIJuIKc2/IH1DkIqcW/g");
	var mask_6_graphics_200 = new cjs.Graphics().p("ApLJ1IKi3MIH1DjIqiXMg");
	var mask_6_graphics_201 = new cjs.Graphics().p("ApOJ7IKo3ZIH1DkIqoXZg");
	var mask_6_graphics_202 = new cjs.Graphics().p("ApRKBIKu3lIH0DkIqsXlg");
	var mask_6_graphics_203 = new cjs.Graphics().p("ApTKIIKy3yIH1DkIqyXxg");
	var mask_6_graphics_204 = new cjs.Graphics().p("ApWKOIK43+IH1DjIq4X+g");
	var mask_6_graphics_205 = new cjs.Graphics().p("ApZKUIK+4KIH1DjIq+YKg");
	var mask_6_graphics_206 = new cjs.Graphics().p("ApcKaILE4XIH1DkIrEYXg");
	var mask_6_graphics_207 = new cjs.Graphics().p("ApfKgILK4jIH0DkIrIYjg");
	var mask_6_graphics_208 = new cjs.Graphics().p("AphKnILP4wIH0DkIrPYvg");
	var mask_6_graphics_209 = new cjs.Graphics().p("AgHXXILU48IH1DjIrVY9g");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(134).to({graphics:mask_6_graphics_134,x:121.8,y:125.6}).wait(1).to({graphics:mask_6_graphics_135,x:203.3,y:207.3}).wait(1).to({graphics:mask_6_graphics_136,x:203,y:207.9}).wait(1).to({graphics:mask_6_graphics_137,x:202.7,y:208.5}).wait(1).to({graphics:mask_6_graphics_138,x:202.4,y:209.2}).wait(1).to({graphics:mask_6_graphics_139,x:202.1,y:209.8}).wait(1).to({graphics:mask_6_graphics_140,x:201.9,y:210.4}).wait(1).to({graphics:mask_6_graphics_141,x:201.6,y:211}).wait(1).to({graphics:mask_6_graphics_142,x:201.3,y:211.6}).wait(1).to({graphics:mask_6_graphics_143,x:201,y:212.3}).wait(1).to({graphics:mask_6_graphics_144,x:200.7,y:212.9}).wait(1).to({graphics:mask_6_graphics_145,x:200.5,y:213.5}).wait(1).to({graphics:mask_6_graphics_146,x:200.2,y:214.1}).wait(1).to({graphics:mask_6_graphics_147,x:199.9,y:214.7}).wait(1).to({graphics:mask_6_graphics_148,x:199.6,y:215.4}).wait(1).to({graphics:mask_6_graphics_149,x:199.3,y:216}).wait(1).to({graphics:mask_6_graphics_150,x:199,y:216.6}).wait(1).to({graphics:mask_6_graphics_151,x:198.8,y:217.2}).wait(1).to({graphics:mask_6_graphics_152,x:198.5,y:217.9}).wait(1).to({graphics:mask_6_graphics_153,x:198.2,y:218.5}).wait(1).to({graphics:mask_6_graphics_154,x:197.9,y:219.1}).wait(1).to({graphics:mask_6_graphics_155,x:197.6,y:219.7}).wait(1).to({graphics:mask_6_graphics_156,x:197.3,y:220.3}).wait(1).to({graphics:mask_6_graphics_157,x:197.1,y:221}).wait(1).to({graphics:mask_6_graphics_158,x:196.8,y:221.6}).wait(1).to({graphics:mask_6_graphics_159,x:196.5,y:222.2}).wait(1).to({graphics:mask_6_graphics_160,x:196.2,y:222.8}).wait(1).to({graphics:mask_6_graphics_161,x:195.9,y:223.5}).wait(1).to({graphics:mask_6_graphics_162,x:195.6,y:224.1}).wait(1).to({graphics:mask_6_graphics_163,x:195.4,y:224.7}).wait(1).to({graphics:mask_6_graphics_164,x:195.1,y:225.3}).wait(1).to({graphics:mask_6_graphics_165,x:194.8,y:225.9}).wait(1).to({graphics:mask_6_graphics_166,x:194.5,y:226.6}).wait(1).to({graphics:mask_6_graphics_167,x:194.2,y:227.2}).wait(1).to({graphics:mask_6_graphics_168,x:194,y:227.8}).wait(1).to({graphics:mask_6_graphics_169,x:193.7,y:228.4}).wait(1).to({graphics:mask_6_graphics_170,x:193.4,y:229.1}).wait(1).to({graphics:mask_6_graphics_171,x:193.1,y:229.7}).wait(1).to({graphics:mask_6_graphics_172,x:192.8,y:230.3}).wait(1).to({graphics:mask_6_graphics_173,x:192.5,y:230.9}).wait(1).to({graphics:mask_6_graphics_174,x:192.2,y:231.6}).wait(1).to({graphics:mask_6_graphics_175,x:191.9,y:232.2}).wait(1).to({graphics:mask_6_graphics_176,x:191.7,y:232.8}).wait(1).to({graphics:mask_6_graphics_177,x:191.4,y:233.4}).wait(1).to({graphics:mask_6_graphics_178,x:191.1,y:234.1}).wait(1).to({graphics:mask_6_graphics_179,x:190.8,y:234.7}).wait(1).to({graphics:mask_6_graphics_180,x:190.5,y:235.3}).wait(1).to({graphics:mask_6_graphics_181,x:190.3,y:235.9}).wait(1).to({graphics:mask_6_graphics_182,x:190,y:236.5}).wait(1).to({graphics:mask_6_graphics_183,x:189.7,y:237.2}).wait(1).to({graphics:mask_6_graphics_184,x:189.4,y:237.8}).wait(1).to({graphics:mask_6_graphics_185,x:189.1,y:238.4}).wait(1).to({graphics:mask_6_graphics_186,x:188.8,y:239}).wait(1).to({graphics:mask_6_graphics_187,x:188.6,y:239.7}).wait(1).to({graphics:mask_6_graphics_188,x:188.3,y:240.3}).wait(1).to({graphics:mask_6_graphics_189,x:188,y:240.9}).wait(1).to({graphics:mask_6_graphics_190,x:187.7,y:241.5}).wait(1).to({graphics:mask_6_graphics_191,x:187.4,y:242.1}).wait(1).to({graphics:mask_6_graphics_192,x:187.1,y:242.8}).wait(1).to({graphics:mask_6_graphics_193,x:186.9,y:243.4}).wait(1).to({graphics:mask_6_graphics_194,x:186.6,y:244}).wait(1).to({graphics:mask_6_graphics_195,x:186.3,y:244.6}).wait(1).to({graphics:mask_6_graphics_196,x:186,y:245.3}).wait(1).to({graphics:mask_6_graphics_197,x:185.7,y:245.9}).wait(1).to({graphics:mask_6_graphics_198,x:185.4,y:246.5}).wait(1).to({graphics:mask_6_graphics_199,x:185.2,y:247.1}).wait(1).to({graphics:mask_6_graphics_200,x:184.9,y:247.7}).wait(1).to({graphics:mask_6_graphics_201,x:184.6,y:248.4}).wait(1).to({graphics:mask_6_graphics_202,x:184.3,y:249}).wait(1).to({graphics:mask_6_graphics_203,x:184,y:249.6}).wait(1).to({graphics:mask_6_graphics_204,x:183.8,y:250.2}).wait(1).to({graphics:mask_6_graphics_205,x:183.5,y:250.8}).wait(1).to({graphics:mask_6_graphics_206,x:183.2,y:251.5}).wait(1).to({graphics:mask_6_graphics_207,x:182.9,y:252.1}).wait(1).to({graphics:mask_6_graphics_208,x:182.6,y:252.7}).wait(1).to({graphics:mask_6_graphics_209,x:121.8,y:172.3}).wait(605));

	// Layer 4
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(20,1,1).p("AoIxvQIHkkD8DtQD8DthEEtQhEEtlpKvQloKvCMCoQCMCnEGhhQCAgvDNjM");
	this.shape_7.setTransform(156.2,276.5);
	this.shape_7._off = true;

	var maskedShapeInstanceList = [this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(134).to({_off:false},0).wait(680));

	// Layer 1 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_9 = new cjs.Graphics().p("ADgeiQsIgioNo9QoNo8AisHQAhsHI8oOMAnmArLQoaHurNAAQguAAgugCg");
	var mask_7_graphics_10 = new cjs.Graphics().p("ADFefQsHgzoApJQoApJA1sFQAysHJJoAMAmlAsFQoTHRqwAAQhFAAhGgFg");
	var mask_7_graphics_11 = new cjs.Graphics().p("ACqecQsFhGnypUQnypVBGsEQBFsFJUnyMAljAs9QoMG1qTAAQhcAAhegIg");
	var mask_7_graphics_12 = new cjs.Graphics().p("ACQeXQsEhYnkpfQnkpgBZsCQBWsEJgnkMAkfAt0QoDGap4AAQhxAAh2gNg");
	var mask_7_graphics_13 = new cjs.Graphics().p("AB2eRQsBhpnWprQnWprBrsAQBosBJrnWMAjaAuqQn6GApdAAQiHAAiNgUg");
	var mask_7_graphics_14 = new cjs.Graphics().p("ABdeLQr/h7nHp2QnHp2B8r9QB6r/J2nHMAiUAveQnwFmpEAAQicAAijgag");
	var mask_7_graphics_15 = new cjs.Graphics().p("ABEeDQr8iNm4qAQm5qACOr6QCMr8KAm4MAhNAwQQnlFNorAAQiyAAi4gig");
	var mask_7_graphics_16 = new cjs.Graphics().p("AArd7Qr4ifmpqKQmqqKCgr3QCer4KKmqMAgEAxBQnZE2oUAAQjGAAjOgrg");
	var mask_7_graphics_17 = new cjs.Graphics().p("AATdxQr0iwmaqUQmaqUCxrzQCvr0KUmaMAe7AxvQnNEfn9AAQjaAAjjg1g");
	var mask_7_graphics_18 = new cjs.Graphics().p("AgDdnQrxjCmLqeQmKqdDCruQDBrwKdmLMAdxAycQnBEJnmAAQjuAAj2g/g");
	var mask_7_graphics_19 = new cjs.Graphics().p("AgadbQrsjTl7qnQl7qmDUrpQDSrsKml7MAclAzIQmzD0nQAAQkCAAkKhMg");
	var mask_7_graphics_20 = new cjs.Graphics().p("AgwdPQrnjllsqvQlrqvDmrkQDjrnKvlrMAbYAzyQmlDfm7AAQkWAAkchYg");
	var mask_7_graphics_21 = new cjs.Graphics().p("AhGdBQrij2lbq3Qlbq3D2rfQD1rhK3lbMAaLA0aQmXDLmlAAQkqAAkvhmg");
	var mask_7_graphics_22 = new cjs.Graphics().p("AhcczQrbkHlLq/QlLq/EHrZQEGrbK/lLMAY9A1AQmIC4mRAAQk9AAlCh0g");
	var mask_7_graphics_23 = new cjs.Graphics().p("AhxckQrVkYk7rHQk6rGEZrTQEWrULHk7MAXtA1kQl4Cml8AAQlSAAlTiDg");
	var mask_7_graphics_24 = new cjs.Graphics().p("AiFcUQrPkpkqrOQkqrNEqrMQEnrOLOkqMAWdA2GQloCWloAAQllAAlkiUg");
	var mask_7_graphics_25 = new cjs.Graphics().p("AiZcDQrIk6kZrUQkZrUE6rFQE4rHLVkZMAVMA2nQlXCFlUAAQl6AAl0ilg");
	var mask_7_graphics_26 = new cjs.Graphics().p("AitbxQq/lKkJrbQkIrZFLq/QFIq/LbkIMAT6A3FQlFB2lAAAQmOAAmFi3g");
	var mask_7_graphics_27 = new cjs.Graphics().p("Ai/beQq4laj4rgQj3rgFbq3QFZq3Lfj3MASpA3iQkzBnksAAQmjAAmTjKg");
	var mask_7_graphics_28 = new cjs.Graphics().p("AjSbLQqvlrjmrmQjmrlFqquQFpqwLmjmMARWA39QkhBakYAAQm4AAmjjdg");
	var mask_7_graphics_29 = new cjs.Graphics().p("Ajja2Qqnl6jVrrQjVrrF7qlQF5qnLqjVMAQDA4WQkOBNkEAAQnOAAmwjyg");
	var mask_7_graphics_30 = new cjs.Graphics().p("Aj0ahQqemKjErwQjDrvGKqdQGJqeLvjDMAOuA4tQj5BAjxAAQnkAAm9kGg");
	var mask_7_graphics_31 = new cjs.Graphics().p("AkFaLQqUmaiyr0QiyrzGaqUQGYqULziyMANaA5BQjlA2jdAAQn6AAnLkcg");
	var mask_7_graphics_32 = new cjs.Graphics().p("AkUZ0QqMmpigr4Qigr3GpqKQGoqLL3igMAMEA5UQjQAsjIAAQoSAAnWkzg");
	var mask_7_graphics_33 = new cjs.Graphics().p("AkjZcQqCm4iOr8QiOr6G4qAQG2qBL7iOMAKvA5lQi7Aji0AAQoqAAnhlLg");
	var mask_7_graphics_34 = new cjs.Graphics().p("AkyZDQp3nGh8r/Qh9r+HHp1QHFp3L+h8MAJZA50QilAbifAAQpDAAnslkg");
	var mask_7_graphics_35 = new cjs.Graphics().p("AlAYqQpsnVhqsCQhrsBHVpqQHUpsMAhrMAIDA6CQiPAUiJAAQpcAAn3l9g");
	var mask_7_graphics_36 = new cjs.Graphics().p("AlNYPQphnjhZsEQhYsDHjpfQHiphMDhZMAGsA6NQh4ANh0AAQp2AAoAmXg");
	var mask_7_graphics_37 = new cjs.Graphics().p("AlZX0QpWnxhHsGQhGsFHxpUQHwpVMFhHMAFVA6VQhgAJheAAQqSAAoImyg");
	var mask_7_graphics_38 = new cjs.Graphics().p("AllXYQpKn/g1sHQg0sGH/pIQH9pKMHg1MAD+A6cQhIAFhHAAQqvAAoQnOg");
	var mask_7_graphics_39 = new cjs.Graphics().p("AlwW8Qo+oNgisIQgjsHIMo9QILo9MIgjMACoA6hQgxACgvAAQrMAAoYnqg");
	var mask_7_graphics_40 = new cjs.Graphics().p("Al6WeQoxoagRsJQgRsHIaowQIXoyMJgQMABRA6kIgvAAQrrAAoeoIg");
	var mask_7_graphics_41 = new cjs.Graphics().p("AmHWAQokonABsJQABsIInojQIkolMJABMgAGA6lQsJgBojolg");
	var mask_7_graphics_42 = new cjs.Graphics().p("Am7VhQoYo0AUsIQATsIIzoWQIxoYMJATMgBeA6kQsJgToVoyg");
	var mask_7_graphics_43 = new cjs.Graphics().p("AnuVCQoLpAAmsHQAlsIJAoJQI9oLMIAmMgC1A6gQsIgloIo+g");
	var mask_7_graphics_44 = new cjs.Graphics().p("AohUjQn9pMA4sGQA3sHJMn8QJJn9MHA4MgEMA6bQsGg3n8pKg");
	var mask_7_graphics_45 = new cjs.Graphics().p("ApSUDQnwpXBKsFQBJsFJXnuQJVnvMGBJMgFjA6UQsFhJntpWg");
	var mask_7_graphics_46 = new cjs.Graphics().p("AqDTkQnhpjBbsCQBbsEJjngQJgnhMEBbMgG6A6LQsChbngphg");
	var mask_7_graphics_47 = new cjs.Graphics().p("AqzTEQnTpuBtsAQBusBJtnRQJrnTMBBtMgIPA5/QsBhtnRpsg");
	var mask_7_graphics_48 = new cjs.Graphics().p("AriSkQnFp4CAr9QB/r/J4nDQJ2nEL+B/MgJmA5yQr9h/nDp3g");
	var mask_7_graphics_49 = new cjs.Graphics().p("AsQSFQm2qDCRr6QCRr8KDm0QKAm2L7CSMgK8A5iQr6iRm0qAg");
	var mask_7_graphics_50 = new cjs.Graphics().p("As+RlQmmqNCjr3QCir4KNmkQKKmnL4CjMgMSA5RQr2iimmqLg");
	var mask_7_graphics_51 = new cjs.Graphics().p("AtqRFQmXqXC0ryQC1r0KWmWQKTmXL0C0MgNmA4/Qrzi1mWqUg");
	var mask_7_graphics_52 = new cjs.Graphics().p("AuVQlQmIqgDGruQDGrwKfmGQKdmILwDGMgO7A4pQrvjGmGqdg");
	var mask_7_graphics_53 = new cjs.Graphics().p("AvAQFQl4qpDYrpQDXrrKol2QKml5LrDYMgQPA4SQrqjYl3qmg");
	var mask_7_graphics_54 = new cjs.Graphics().p("AvpPlQloqxDprlQDorlKxlnQKuloLmDpMgRjA34Qrkjolnqvg");
	var mask_7_graphics_55 = new cjs.Graphics().p("AwRPFQlYq6D5reQD6rgK5lXQK3lYLgD6MgS2A3eQrfj6lWq3g");
	var mask_7_graphics_56 = new cjs.Graphics().p("Aw5OlQlHrBELrZQEKraLBlGQK/lILZELMgUGA3BQrakLlHq/g");
	var mask_7_graphics_57 = new cjs.Graphics().p("AxfOFQk3rJEcrSQEbrTLIk2QLGk4LUEcMgVYA2iQrUkck2rGg");
	var mask_7_graphics_58 = new cjs.Graphics().p("AyENlQknrQEtrLQEsrNLPklQLNknLNEtMgWpA2BQrNktklrNg");
	var mask_7_graphics_59 = new cjs.Graphics().p("AyoNFQkWrWE9rEQE9rGLWkUQLUkWLFE9MgX5A1eQrFk9kVrUg");
	var mask_7_graphics_60 = new cjs.Graphics().p("AzLMlQkFrcFOq9QFNq+LckDQLakFK+FNMgZJA06Qq9lNkErbg");
	var mask_7_graphics_61 = new cjs.Graphics().p("AztMGQj0riFeq1QFeq2LhjyQLgj1K2FeMgaWA0UQq2lejzrgg");
	var mask_7_graphics_62 = new cjs.Graphics().p("A0OLmQjirmFuquQFtqtLnjhQLmjjKtFtMgbkAzsQqtlujirmg");
	var mask_7_graphics_63 = new cjs.Graphics().p("A0tLHQjRrsF9qlQF+qkLsjQQLqjSKlF+MgcwAzBQqll9jQrrg");
	var mask_7_graphics_64 = new cjs.Graphics().p("A1MKoQi/rwGNqcQGNqcLxi+QLvjBKcGOMgd8AyWQqcmOi/rvg");
	var mask_7_graphics_65 = new cjs.Graphics().p("A1pKJQiur1GdqSQGdqSLzitQL1ivKSGdMgfGAxoQqSmciur0g");
	var mask_7_graphics_66 = new cjs.Graphics().p("A2FJqQicr4GsqJQGsqIL3ibQL5ieKIGsMggPAw6QqJmsicr4g");
	var mask_7_graphics_67 = new cjs.Graphics().p("A2fJMQiLr8G7p/QG7p+L7iJQL8iMJ+G7MghYAwIQp+m6iKr7g");
	var mask_7_graphics_68 = new cjs.Graphics().p("A24IuQh5r/HJp0QHKp0L+h4QL/h6J0HKMgifAvWQp0nKh4r9g");
	var mask_7_graphics_69 = new cjs.Graphics().p("A3RIQQhmsCHYppQHYpqMAhlQMChoJpHYMgjlAuiQppnYhnsAg");
	var mask_7_graphics_70 = new cjs.Graphics().p("A3nHyQhVsEHmpeQHmpeMDhUQMEhWJeHnMgkpAtsQpfnnhUsCg");
	var mask_7_graphics_71 = new cjs.Graphics().p("A39HUQhCsFH0pTQH0pSMEhCQMGhEJSH0MglsAs1QpTn0hDsFg");
	var mask_7_graphics_72 = new cjs.Graphics().p("A4RG3QgwsHIBpHQICpGMGgwQMHgyJHICMgmvAr8QpHoCgxsGg");
	var mask_7_graphics_73 = new cjs.Graphics().p("A4jGaQgfsIIPo6QIQo7MGgeQMIggI7IQMgnwArBQo6oPgfsHg");
	var mask_7_graphics_74 = new cjs.Graphics().p("A40F+QgNsJIcouQIdouMHgMQMIgOIvIdMgovAqFQovocgMsHg");
	var mask_7_graphics_75 = new cjs.Graphics().p("A5EFiQAFsJIqohQIpoiMHAGQMIAFIiIpMgptApIQohopAFsHg");
	var mask_7_graphics_76 = new cjs.Graphics().p("A5SFGQAXsII2oVQI2oVMHAZQMIAWIUI2MgqpAoJQoVo1AYsHg");
	var mask_7_graphics_77 = new cjs.Graphics().p("A5fEqQApsHJCoHQJCoIMHArQMHAoIHJCMgrkAnJQoHpCApsGg");
	var mask_7_graphics_78 = new cjs.Graphics().p("A5qEPQA7sGJOn6QJOn5MFA8QMGA7H6JNMgseAmIQn6pOA8sFg");
	var mask_7_graphics_79 = new cjs.Graphics().p("A50D1QBNsFJansQJZnsMDBPQMFBMHsJaMgtWAlEQnspZBOsDg");
	var mask_7_graphics_80 = new cjs.Graphics().p("A59DaQBgsCJkneQJlneMBBhQMDBeHeJlMguMAkAQnepkBfsCg");
	var mask_7_graphics_81 = new cjs.Graphics().p("A6EDAQBxsAJwnPQJwnPL/ByQMABwHPJwMgvBAi7QnPpwBxr/g");
	var mask_7_graphics_82 = new cjs.Graphics().p("A6KCnQCEr9J6nBQJ6nBL8CEQL+CDHAJ6Mgv0Ah1QnBp7CDr8g");
	var mask_7_graphics_83 = new cjs.Graphics().p("A6OCOQCVr6KFmyQKEmyL5CWQL6CUGyKFMgwmAgtQmyqFCVr5g");
	var mask_7_graphics_84 = new cjs.Graphics().p("A6RB2QCnr3KOmiQKPmjL1CnQL2CmGjKOMgxVAflQmjqPCmr1g");
	var mask_7_graphics_85 = new cjs.Graphics().p("A6SBeQC4ryKYmUQKYmTLxC5QLyC3GUKYMgyEAeaQmTqYC4rxg");
	var mask_7_graphics_86 = new cjs.Graphics().p("A6SBGQDJrtKimEQKhmELsDKQLuDJGEKhMgywAdPQmEqhDKrtg");
	var mask_7_graphics_87 = new cjs.Graphics().p("A6RAwQDbrpKql0QKql1LoDcQLpDaF0KqMgzbAcDQl0qqDbrng");
	var mask_7_graphics_88 = new cjs.Graphics().p("A6OAZQDsrjKzllQKylkLiDtQLkDsFkKyMg0DAa2QlkqyDsrjg");
	var mask_7_graphics_89 = new cjs.Graphics().p("A6KADQD9reK7lUQK7lULcD/QLeD8FUK7Mg0qAZoQlUq7D9rdg");
	var mask_7_graphics_90 = new cjs.Graphics().p("A6FgRQEPrZLClEQLBlDLYEPQLYENFELDMg1QAYZQlErCEOrWg");
	var mask_7_graphics_91 = new cjs.Graphics().p("A5+gmQEfrSLKkzQLJkzLREgQLREeE0LKMg10AXJQkzrJEfrQg");
	var mask_7_graphics_92 = new cjs.Graphics().p("A52g6QEwrLLRkjQLQkiLKEwQLKEvEjLRMg2VAV5QkirQEvrJg");
	var mask_7_graphics_93 = new cjs.Graphics().p("A5shOQFArELYkRQLWkSLDFBQLDFAESLWMg21AUpQkRrXFArCg");
	var mask_7_graphics_94 = new cjs.Graphics().p("A5hhhQFRq8LdkBQLckAK7FRQK8FQEBLcMg3SATXQkBrdFRq6g");
	var mask_7_graphics_95 = new cjs.Graphics().p("A5VhzQFhq0LjjwQLijwKzFiQK0FgDwLiMg3uASFQjwrjFhqyg");
	var mask_7_graphics_96 = new cjs.Graphics().p("A5IiFQFyqsLojeQLojeKqFxQKsFwDeLoMg4IAQxQjeroFwqqg");
	var mask_7_graphics_97 = new cjs.Graphics().p("A45iWQGCqjLtjNQLsjNKiGCQKjF/DNLtMg4gAPdQjNrtGAqhg");
	var mask_7_graphics_98 = new cjs.Graphics().p("A4oimQGQqaLyi8QLxi7KZGRQKaGPC7LxMg42AOJQi7ryGQqXg");
	var mask_7_graphics_99 = new cjs.Graphics().p("A4Xi2QGhqRL2iqQL1iqKPGhQKQGfCqL1Mg5KAM0Qiqr2GfqOg");
	var mask_7_graphics_100 = new cjs.Graphics().p("A4EjFQGwqHL6iYQL4iZKGGwQKGGuCYL5Mg5cALeQiYr5GuqEg");
	var mask_7_graphics_101 = new cjs.Graphics().p("A3vjUQG+p9L9iGQL8iHJ7G/QJ9G9CGL8Mg5sAKJQiGr9G9p6g");
	var mask_7_graphics_102 = new cjs.Graphics().p("A3ajiQHNpyMAh1QL/h0JxHNQJyHLB0MAMg56AIzQh1sBHMpvg");
	var mask_7_graphics_103 = new cjs.Graphics().p("A3DjvQHcpnMChjQMChjJlHcQJnHaBjMBMg6GAHdQhjsDHapkg");
	var mask_7_graphics_104 = new cjs.Graphics().p("A2rj8QHqpcMFhQQMDhRJbHpQJcHpBQMDMg6QAGGQhRsEHopag");
	var mask_7_graphics_105 = new cjs.Graphics().p("A2RkHQH3pRMHg/QMFg/JPH4QJQH1A/MGMg6YAEwQg/sHH2pNg");
	var mask_7_graphics_106 = new cjs.Graphics().p("A12kTQIFpEMIgtQMGgtJDIFQJFIDAtMIMg6fADYQgtsIIEpCg");
	var mask_7_graphics_107 = new cjs.Graphics().p("A1akdQITo4MIgbQMIgbI2ITQI5IPAaMJMg6iACBQgbsIIRo2g");
	var mask_7_graphics_108 = new cjs.Graphics().p("A08knQIfosMJgIQMIgJIqIfQIsIdAJMJMg6lAAqQgIsJIeopg");
	var mask_7_graphics_109 = new cjs.Graphics().p("A9SPfQAKsJIqocQItogMIAKQMIAJIeIsQIfIqgJMJg");
	var mask_7_graphics_110 = new cjs.Graphics().p("A9ROeQAbsJI3oPQI5oSMHAbQMJAbIQI5QISI2gbMJg");
	var mask_7_graphics_111 = new cjs.Graphics().p("A9RNcQAusHJDoDQJFoEMHAtQMIAuIDJFQIEJCgtMIg");
	var mask_7_graphics_112 = new cjs.Graphics().p("A9PMbQA/sGJPn1QJRn3MGBAQMGA/H1JRQH4JOhAMGg");
	var mask_7_graphics_113 = new cjs.Graphics().p("A9NLaQBRsEJbnnQJcnpMEBRQMEBRHoJdQHpJZhRMFg");
	var mask_7_graphics_114 = new cjs.Graphics().p("A9LKZQBjsCJmnZQJonbMBBjQMDBkHZJnQHbJlhjMDg");
	var mask_7_graphics_115 = new cjs.Graphics().p("A9IJYQB1r/JxnLQJynML/B1QMAB1HLJyQHNJwh1MAg");
	var mask_7_graphics_116 = new cjs.Graphics().p("A9FIYQCHr8J7m9QJ9m+L8CHQL9CIG9J8QG+J7iHL9g");
	var mask_7_graphics_117 = new cjs.Graphics().p("A9BHXQCZr4KFmuQKHmvL5CZQL6CZGtKHQGvKEiZL6g");
	var mask_7_graphics_118 = new cjs.Graphics().p("A89GXQCrr1KPmeQKRmgL1CrQL2CqGeKRQGgKPirL2g");
	var mask_7_graphics_119 = new cjs.Graphics().p("A84FYQC8rxKZmPQKamQLxC8QLyC8GPKaQGQKYi8Lyg");
	var mask_7_graphics_120 = new cjs.Graphics().p("A8zEZQDOrtKhl/QKkmBLsDOQLuDNF/KjQGBKijOLtg");
	var mask_7_graphics_121 = new cjs.Graphics().p("A8tDaQDfroKqlvQKtlxLnDfQLoDfFwKsQFxKpjfLpg");
	var mask_7_graphics_122 = new cjs.Graphics().p("A8nCbQDxriKylgQK1lgLiDwQLjDwFfK0QFiKzjxLig");
	var mask_7_graphics_123 = new cjs.Graphics().p("A8gBdQECrcK6lQQK9lQLcEBQLdEBFQK9QFRK6kCLdg");
	var mask_7_graphics_124 = new cjs.Graphics().p("A8YAgQESrWLClAQLFlALWESQLXETE+LEQFBLCkSLXg");
	var mask_7_graphics_125 = new cjs.Graphics().p("A8QgcQEjrRLJkuQLMkwLPEjQLREjEuLLQEwLJkjLRg");
	var mask_7_graphics_126 = new cjs.Graphics().p("A8IhZQE0rJLQkeQLTkfLIE0QLKEzEdLSQEgLRk0LJg");
	var mask_7_graphics_127 = new cjs.Graphics().p("A7/iUQFErCLXkOQLZkOLBFEQLCFFENLYQEPLXlFLCg");
	var mask_7_graphics_128 = new cjs.Graphics().p("A72jPQFVq7Ldj8QLej9K6FUQK7FVD7LdQD+LelUK6g");
	var mask_7_graphics_129 = new cjs.Graphics().p("A7skKQFlqyLjjrQLjjsKzFkQKyFlDqLjQDtLkllKyg");
	var mask_7_graphics_130 = new cjs.Graphics().p("A7hlEQF0qpLojbQLpjaKqF1QKqF0DZLpQDbLol0Kqg");
	var mask_7_graphics_131 = new cjs.Graphics().p("A7Xl9QGFqhLtjIQLujKKhGFQKhGEDHLuQDKLtmEKhg");
	var mask_7_graphics_132 = new cjs.Graphics().p("A7Lm1QGUqYLxi3QLzi4KXGUQKYGUC2LyQC5LymUKYg");
	var mask_7_graphics_133 = new cjs.Graphics().p("A6/ntQGjqOL1ilQL3imKOGjQKOGjClL2QCnL2mkKOg");
	var mask_7_graphics_134 = new cjs.Graphics().p("A6zojQGyqFL5iUQL6iUKFGyQKEGzCTL5QCVL6myKEg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_7_graphics_9,x:108.3,y:195.6}).wait(1).to({graphics:mask_7_graphics_10,x:106.6,y:195.6}).wait(1).to({graphics:mask_7_graphics_11,x:105,y:195.6}).wait(1).to({graphics:mask_7_graphics_12,x:103.2,y:195.6}).wait(1).to({graphics:mask_7_graphics_13,x:101.5,y:195.7}).wait(1).to({graphics:mask_7_graphics_14,x:99.7,y:195.7}).wait(1).to({graphics:mask_7_graphics_15,x:97.9,y:195.7}).wait(1).to({graphics:mask_7_graphics_16,x:96.1,y:195.8}).wait(1).to({graphics:mask_7_graphics_17,x:94.3,y:195.8}).wait(1).to({graphics:mask_7_graphics_18,x:92.4,y:195.8}).wait(1).to({graphics:mask_7_graphics_19,x:90.5,y:195.9}).wait(1).to({graphics:mask_7_graphics_20,x:88.6,y:195.9}).wait(1).to({graphics:mask_7_graphics_21,x:86.6,y:195.9}).wait(1).to({graphics:mask_7_graphics_22,x:84.6,y:195.9}).wait(1).to({graphics:mask_7_graphics_23,x:82.7,y:195.9}).wait(1).to({graphics:mask_7_graphics_24,x:80.7,y:196}).wait(1).to({graphics:mask_7_graphics_25,x:78.7,y:196}).wait(1).to({graphics:mask_7_graphics_26,x:76.6,y:196}).wait(1).to({graphics:mask_7_graphics_27,x:74.6,y:196}).wait(1).to({graphics:mask_7_graphics_28,x:72.5,y:196}).wait(1).to({graphics:mask_7_graphics_29,x:70.5,y:196}).wait(1).to({graphics:mask_7_graphics_30,x:68.4,y:195.9}).wait(1).to({graphics:mask_7_graphics_31,x:66.3,y:195.9}).wait(1).to({graphics:mask_7_graphics_32,x:64.2,y:195.9}).wait(1).to({graphics:mask_7_graphics_33,x:62.1,y:195.9}).wait(1).to({graphics:mask_7_graphics_34,x:60,y:195.9}).wait(1).to({graphics:mask_7_graphics_35,x:57.8,y:195.9}).wait(1).to({graphics:mask_7_graphics_36,x:55.7,y:195.8}).wait(1).to({graphics:mask_7_graphics_37,x:53.6,y:195.8}).wait(1).to({graphics:mask_7_graphics_38,x:51.4,y:195.8}).wait(1).to({graphics:mask_7_graphics_39,x:49.2,y:195.8}).wait(1).to({graphics:mask_7_graphics_40,x:47.1,y:195.8}).wait(1).to({graphics:mask_7_graphics_41,x:45.2,y:195.8}).wait(1).to({graphics:mask_7_graphics_42,x:47.4,y:195.8}).wait(1).to({graphics:mask_7_graphics_43,x:49.6,y:195.7}).wait(1).to({graphics:mask_7_graphics_44,x:51.7,y:195.6}).wait(1).to({graphics:mask_7_graphics_45,x:53.9,y:195.4}).wait(1).to({graphics:mask_7_graphics_46,x:56,y:195.2}).wait(1).to({graphics:mask_7_graphics_47,x:58.1,y:194.9}).wait(1).to({graphics:mask_7_graphics_48,x:60.3,y:194.6}).wait(1).to({graphics:mask_7_graphics_49,x:62.4,y:194.2}).wait(1).to({graphics:mask_7_graphics_50,x:64.5,y:193.8}).wait(1).to({graphics:mask_7_graphics_51,x:66.6,y:193.4}).wait(1).to({graphics:mask_7_graphics_52,x:68.7,y:192.8}).wait(1).to({graphics:mask_7_graphics_53,x:70.8,y:192.3}).wait(1).to({graphics:mask_7_graphics_54,x:72.8,y:191.6}).wait(1).to({graphics:mask_7_graphics_55,x:74.9,y:191}).wait(1).to({graphics:mask_7_graphics_56,x:76.9,y:190.3}).wait(1).to({graphics:mask_7_graphics_57,x:78.9,y:189.5}).wait(1).to({graphics:mask_7_graphics_58,x:81,y:188.7}).wait(1).to({graphics:mask_7_graphics_59,x:82.9,y:187.8}).wait(1).to({graphics:mask_7_graphics_60,x:84.9,y:186.9}).wait(1).to({graphics:mask_7_graphics_61,x:86.9,y:186}).wait(1).to({graphics:mask_7_graphics_62,x:88.8,y:185}).wait(1).to({graphics:mask_7_graphics_63,x:90.7,y:183.9}).wait(1).to({graphics:mask_7_graphics_64,x:92.6,y:182.9}).wait(1).to({graphics:mask_7_graphics_65,x:94.5,y:181.7}).wait(1).to({graphics:mask_7_graphics_66,x:96.4,y:180.6}).wait(1).to({graphics:mask_7_graphics_67,x:98.2,y:179.3}).wait(1).to({graphics:mask_7_graphics_68,x:100,y:178.1}).wait(1).to({graphics:mask_7_graphics_69,x:101.7,y:176.8}).wait(1).to({graphics:mask_7_graphics_70,x:103.5,y:175.5}).wait(1).to({graphics:mask_7_graphics_71,x:105.2,y:174.1}).wait(1).to({graphics:mask_7_graphics_72,x:106.8,y:172.7}).wait(1).to({graphics:mask_7_graphics_73,x:108.4,y:171.2}).wait(1).to({graphics:mask_7_graphics_74,x:110,y:169.7}).wait(1).to({graphics:mask_7_graphics_75,x:111.5,y:168.2}).wait(1).to({graphics:mask_7_graphics_76,x:113,y:166.6}).wait(1).to({graphics:mask_7_graphics_77,x:114.5,y:165}).wait(1).to({graphics:mask_7_graphics_78,x:115.9,y:163.4}).wait(1).to({graphics:mask_7_graphics_79,x:117.2,y:161.7}).wait(1).to({graphics:mask_7_graphics_80,x:118.6,y:160}).wait(1).to({graphics:mask_7_graphics_81,x:119.8,y:158.3}).wait(1).to({graphics:mask_7_graphics_82,x:121.1,y:156.6}).wait(1).to({graphics:mask_7_graphics_83,x:122.3,y:154.8}).wait(1).to({graphics:mask_7_graphics_84,x:123.4,y:153}).wait(1).to({graphics:mask_7_graphics_85,x:124.5,y:151.1}).wait(1).to({graphics:mask_7_graphics_86,x:125.6,y:149.2}).wait(1).to({graphics:mask_7_graphics_87,x:126.7,y:147.3}).wait(1).to({graphics:mask_7_graphics_88,x:127.6,y:145.4}).wait(1).to({graphics:mask_7_graphics_89,x:128.6,y:143.5}).wait(1).to({graphics:mask_7_graphics_90,x:129.5,y:141.5}).wait(1).to({graphics:mask_7_graphics_91,x:130.4,y:139.5}).wait(1).to({graphics:mask_7_graphics_92,x:131.2,y:137.5}).wait(1).to({graphics:mask_7_graphics_93,x:132,y:135.5}).wait(1).to({graphics:mask_7_graphics_94,x:132.7,y:133.4}).wait(1).to({graphics:mask_7_graphics_95,x:133.4,y:131.4}).wait(1).to({graphics:mask_7_graphics_96,x:134,y:129.3}).wait(1).to({graphics:mask_7_graphics_97,x:134.6,y:127.2}).wait(1).to({graphics:mask_7_graphics_98,x:135.2,y:125.1}).wait(1).to({graphics:mask_7_graphics_99,x:135.7,y:123}).wait(1).to({graphics:mask_7_graphics_100,x:136.1,y:120.8}).wait(1).to({graphics:mask_7_graphics_101,x:136.6,y:118.7}).wait(1).to({graphics:mask_7_graphics_102,x:136.9,y:116.6}).wait(1).to({graphics:mask_7_graphics_103,x:137.2,y:114.4}).wait(1).to({graphics:mask_7_graphics_104,x:137.5,y:112.2}).wait(1).to({graphics:mask_7_graphics_105,x:137.7,y:110.1}).wait(1).to({graphics:mask_7_graphics_106,x:137.8,y:107.9}).wait(1).to({graphics:mask_7_graphics_107,x:137.9,y:105.7}).wait(1).to({graphics:mask_7_graphics_108,x:138,y:103.5}).wait(1).to({graphics:mask_7_graphics_109,x:138,y:103.6}).wait(1).to({graphics:mask_7_graphics_110,x:138,y:105.8}).wait(1).to({graphics:mask_7_graphics_111,x:138.1,y:108}).wait(1).to({graphics:mask_7_graphics_112,x:138.3,y:110.1}).wait(1).to({graphics:mask_7_graphics_113,x:138.5,y:112.3}).wait(1).to({graphics:mask_7_graphics_114,x:138.7,y:114.5}).wait(1).to({graphics:mask_7_graphics_115,x:139,y:116.6}).wait(1).to({graphics:mask_7_graphics_116,x:139.4,y:118.8}).wait(1).to({graphics:mask_7_graphics_117,x:139.8,y:120.9}).wait(1).to({graphics:mask_7_graphics_118,x:140.3,y:123.1}).wait(1).to({graphics:mask_7_graphics_119,x:140.8,y:125.2}).wait(1).to({graphics:mask_7_graphics_120,x:141.3,y:127.3}).wait(1).to({graphics:mask_7_graphics_121,x:141.9,y:129.4}).wait(1).to({graphics:mask_7_graphics_122,x:142.6,y:131.4}).wait(1).to({graphics:mask_7_graphics_123,x:143.3,y:133.5}).wait(1).to({graphics:mask_7_graphics_124,x:144,y:135.6}).wait(1).to({graphics:mask_7_graphics_125,x:144.8,y:137.6}).wait(1).to({graphics:mask_7_graphics_126,x:145.6,y:139.6}).wait(1).to({graphics:mask_7_graphics_127,x:146.5,y:141.6}).wait(1).to({graphics:mask_7_graphics_128,x:147.4,y:143.5}).wait(1).to({graphics:mask_7_graphics_129,x:148.3,y:145.5}).wait(1).to({graphics:mask_7_graphics_130,x:149.3,y:147.4}).wait(1).to({graphics:mask_7_graphics_131,x:150.4,y:149.3}).wait(1).to({graphics:mask_7_graphics_132,x:151.4,y:151.2}).wait(1).to({graphics:mask_7_graphics_133,x:152.5,y:153}).wait(1).to({graphics:mask_7_graphics_134,x:153.7,y:154.8}).wait(680));

	// Layer 2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(20,1,1).p("AnkkmQIGkkD9DtQD8DthEEsQgZBtg+Cf");
	this.shape_8.setTransform(152.6,192.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(20,1,1).p("AoIxvQIHkkD8DtQD8DthEEtQhEEtlpKvQloKvCMCoQCMCnEGhhQCAgvDNjM");
	this.shape_9.setTransform(156.2,276.5);

	var maskedShapeInstanceList = [this.shape_8,this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8}]},9).to({state:[{t:this.shape_9}]},37).wait(768));

	// Letter
	this.instance_4 = new lib.w("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,275);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(814));

	// Background
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_10.setTransform(275,275,3.373,2.543);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_11.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).wait(814));

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