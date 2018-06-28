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


(lib.M = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvXTYIAKg4IMB3wQBQi0AAiRQAAhfg4AAQhaAAh/BOQhrBCiEB4QicCQjoEHQhuCGiQEYInhPFQgxBCg4AAQh9AAAAh4QAAhMM+5FQBRivAAiuQAAiohThRQhThRipAAQhrAAiSBRQiVBOg2AAQhkAAAAhYQAAg/BCg+QA4g1BkguQC+hWCQAAQCEAABpAnQBpAlBMBLQBJBKAnBoQAnBsAACEQAAB3gOA0QCricCNhZQDNh/ChAAQCOAABQBgQBJBaAACQIgUC+QCChtBwg/QCVhRCBAAQCOAABTBfQBQBbAACQQAACFg4BvIh3DWImMM+Qg2B5AAAyQAAAnBMgBQCVABCwhKQCXg/Cuh1QDZiYFRk7QBLhECaiXQA9goAiAAQBbAAAABgQAAAdj0EtQhuCDihCJQipCQi5ByQjGB6i6BIQjNBLihAAQiLAAhWhHQhahMAAiFQAAhpBOisQCTk6FApsQBVieAAhaQAAhbhHAAQhVAAhxBEIjPCkQiBB6jND1Ih8CgIn+P8QglBChEAAQh4AAAAh4g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198.9,-136,398,272);


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


(lib.ar7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-5.4,-65.1,1,1,-173.8,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-143.7,guide:{path:[-5.3,-65.1,-0.8,-104,2.3,-128.4,5.3,-152.8,18.5,-174.2,18.5,-174.3,18.6,-174.4]}},77).to({rotation:-49.3,guide:{path:[18.6,-174.5,23.9,-183,27.9,-184.6]}},12).to({regX:0.1,regY:-0.1,scaleX:1,scaleY:1,rotation:0,guide:{path:[27.9,-184.6,30.8,-185.8,33,-183.2,35.2,-180.7,36.7,-174.3,41.7,-152.9,40.7,-147]}},30).wait(1));

	// Layer 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_89 = new cjs.Graphics().p("Ag4tsIAAhhIGXAAIAABhg");
	var mask_graphics_90 = new cjs.Graphics().p("AjLA4IAAhvIGXAAIAABvg");
	var mask_graphics_91 = new cjs.Graphics().p("AjLA/IAAh9IGXAAIAAB9g");
	var mask_graphics_92 = new cjs.Graphics().p("AjLBGIAAiLIGXAAIAACLg");
	var mask_graphics_93 = new cjs.Graphics().p("AjLBNIAAiZIGXAAIAACZg");
	var mask_graphics_94 = new cjs.Graphics().p("AjLBUIAAinIGXAAIAACng");
	var mask_graphics_95 = new cjs.Graphics().p("AjLBbIAAi1IGXAAIAAC1g");
	var mask_graphics_96 = new cjs.Graphics().p("AjLBiIAAjDIGXAAIAADDg");
	var mask_graphics_97 = new cjs.Graphics().p("AjLBpIAAjRIGXAAIAADRg");
	var mask_graphics_98 = new cjs.Graphics().p("AjLBwIAAjfIGXAAIAADfg");
	var mask_graphics_99 = new cjs.Graphics().p("AjLB3IAAjtIGXAAIAADtg");
	var mask_graphics_100 = new cjs.Graphics().p("AjLB+IAAj7IGXAAIAAD7g");
	var mask_graphics_101 = new cjs.Graphics().p("AjLCFIAAkJIGXAAIAAEJg");
	var mask_graphics_102 = new cjs.Graphics().p("AjLCMIAAkYIGXAAIAAEYg");
	var mask_graphics_103 = new cjs.Graphics().p("AjLCUIAAknIGXAAIAAEng");
	var mask_graphics_104 = new cjs.Graphics().p("AjLCbIAAk1IGXAAIAAE1g");
	var mask_graphics_105 = new cjs.Graphics().p("AjLCiIAAlDIGXAAIAAFDg");
	var mask_graphics_106 = new cjs.Graphics().p("AjLCpIAAlRIGXAAIAAFRg");
	var mask_graphics_107 = new cjs.Graphics().p("AjLCwIAAlfIGXAAIAAFfg");
	var mask_graphics_108 = new cjs.Graphics().p("AjLC3IAAltIGXAAIAAFtg");
	var mask_graphics_109 = new cjs.Graphics().p("AjLC+IAAl7IGXAAIAAF7g");
	var mask_graphics_110 = new cjs.Graphics().p("AjLDFIAAmJIGXAAIAAGJg");
	var mask_graphics_111 = new cjs.Graphics().p("AjLDMIAAmXIGXAAIAAGXg");
	var mask_graphics_112 = new cjs.Graphics().p("AjLDTIAAmlIGXAAIAAGlg");
	var mask_graphics_113 = new cjs.Graphics().p("AjLDaIAAmzIGXAAIAAGzg");
	var mask_graphics_114 = new cjs.Graphics().p("AjLDhIAAnBIGXAAIAAHBg");
	var mask_graphics_115 = new cjs.Graphics().p("AjLDoIAAnPIGXAAIAAHPg");
	var mask_graphics_116 = new cjs.Graphics().p("AjLDwIAAnfIGXAAIAAHfg");
	var mask_graphics_117 = new cjs.Graphics().p("AjLD2IAAnsIGXAAIAAHsg");
	var mask_graphics_118 = new cjs.Graphics().p("AjLD+IAAn7IGXAAIAAH7g");
	var mask_graphics_119 = new cjs.Graphics().p("Ag4l9IAApQIGXAAIAAJQg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(89).to({graphics:mask_graphics_89,x:35.1,y:-97.4}).wait(1).to({graphics:mask_graphics_90,x:49.8,y:-189.3}).wait(1).to({graphics:mask_graphics_91,x:49.8,y:-188.6}).wait(1).to({graphics:mask_graphics_92,x:49.8,y:-187.8}).wait(1).to({graphics:mask_graphics_93,x:49.8,y:-187.1}).wait(1).to({graphics:mask_graphics_94,x:49.8,y:-186.4}).wait(1).to({graphics:mask_graphics_95,x:49.8,y:-185.7}).wait(1).to({graphics:mask_graphics_96,x:49.8,y:-185}).wait(1).to({graphics:mask_graphics_97,x:49.8,y:-184.3}).wait(1).to({graphics:mask_graphics_98,x:49.8,y:-183.6}).wait(1).to({graphics:mask_graphics_99,x:49.8,y:-182.9}).wait(1).to({graphics:mask_graphics_100,x:49.8,y:-182.2}).wait(1).to({graphics:mask_graphics_101,x:49.8,y:-181.5}).wait(1).to({graphics:mask_graphics_102,x:49.8,y:-180.8}).wait(1).to({graphics:mask_graphics_103,x:49.8,y:-180.1}).wait(1).to({graphics:mask_graphics_104,x:49.8,y:-179.4}).wait(1).to({graphics:mask_graphics_105,x:49.8,y:-178.7}).wait(1).to({graphics:mask_graphics_106,x:49.8,y:-178}).wait(1).to({graphics:mask_graphics_107,x:49.8,y:-177.3}).wait(1).to({graphics:mask_graphics_108,x:49.8,y:-176.6}).wait(1).to({graphics:mask_graphics_109,x:49.8,y:-175.9}).wait(1).to({graphics:mask_graphics_110,x:49.8,y:-175.2}).wait(1).to({graphics:mask_graphics_111,x:49.8,y:-174.5}).wait(1).to({graphics:mask_graphics_112,x:49.8,y:-173.8}).wait(1).to({graphics:mask_graphics_113,x:49.8,y:-173.1}).wait(1).to({graphics:mask_graphics_114,x:49.8,y:-172.4}).wait(1).to({graphics:mask_graphics_115,x:49.8,y:-171.7}).wait(1).to({graphics:mask_graphics_116,x:49.8,y:-170.9}).wait(1).to({graphics:mask_graphics_117,x:49.8,y:-170.2}).wait(1).to({graphics:mask_graphics_118,x:49.8,y:-169.5}).wait(1).to({graphics:mask_graphics_119,x:35.1,y:-97.4}).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AjlJWQAtmGAejzQAfj0CDjVQCEjWA1DdQA1DcgWBu");
	this.shape.setTransform(17.6,-124.9);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(89).to({_off:false},0).wait(31));

	// Layer 4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AjLidIAAi4IGXAAIAAC4g");
	var mask_1_graphics_1 = new cjs.Graphics().p("AjLBjIAAjFIGXAAIAADFg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AjLBqIAAjTIGXAAIAADTg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AjLBxIAAjhIGXAAIAADhg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AjLB4IAAjvIGXAAIAADvg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AjLB/IAAj+IGXAAIAAD+g");
	var mask_1_graphics_6 = new cjs.Graphics().p("AjLCGIAAkLIGXAAIAAELg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AjLCOIAAkbIGXAAIAAEbg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AjLCVIAAkpIGXAAIAAEpg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AjLCcIAAk3IGXAAIAAE3g");
	var mask_1_graphics_10 = new cjs.Graphics().p("AjLCjIAAlFIGXAAIAAFFg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AjLCqIAAlTIGXAAIAAFTg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AjLCxIAAlhIGXAAIAAFhg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AjLC4IAAlvIGXAAIAAFvg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AjLC/IAAl9IGXAAIAAF9g");
	var mask_1_graphics_15 = new cjs.Graphics().p("AjLDGIAAmMIGXAAIAAGMg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AjLDNIAAmZIGXAAIAAGZg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AjLDVIAAmpIGXAAIAAGpg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AjLDcIAAm3IGXAAIAAG3g");
	var mask_1_graphics_19 = new cjs.Graphics().p("AjLDjIAAnFIGXAAIAAHFg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AjLDqIAAnTIGXAAIAAHTg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AjLDxIAAnhIGXAAIAAHhg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AjLD4IAAnvIGXAAIAAHvg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AjLD/IAAn9IGXAAIAAH9g");
	var mask_1_graphics_24 = new cjs.Graphics().p("AjLEGIAAoMIGXAAIAAIMg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AjLENIAAoZIGXAAIAAIZg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AjLEVIAAopIGXAAIAAIpg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AjLEcIAAo3IGXAAIAAI3g");
	var mask_1_graphics_28 = new cjs.Graphics().p("AjLEjIAApFIGXAAIAAJFg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AjLEqIAApTIGXAAIAAJTg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AjLExIAAphIGXAAIAAJhg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AjLE4IAApvIGXAAIAAJvg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AjLE/IAAp9IGXAAIAAJ9g");
	var mask_1_graphics_33 = new cjs.Graphics().p("AjLFGIAAqLIGXAAIAAKLg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AjLFNIAAqaIGXAAIAAKag");
	var mask_1_graphics_35 = new cjs.Graphics().p("AjLFUIAAqnIGXAAIAAKng");
	var mask_1_graphics_36 = new cjs.Graphics().p("AjLFcIAAq3IGXAAIAAK3g");
	var mask_1_graphics_37 = new cjs.Graphics().p("AjLFjIAArFIGXAAIAALFg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AjLFqIAArTIGXAAIAALTg");
	var mask_1_graphics_39 = new cjs.Graphics().p("AjLFxIAArhIGXAAIAALhg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AjLF4IAArvIGXAAIAALvg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AjLF/IAAr9IGXAAIAAL9g");
	var mask_1_graphics_42 = new cjs.Graphics().p("AjLGGIAAsLIGXAAIAAMLg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AjLGNIAAsZIGXAAIAAMZg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AjLGUIAAsnIGXAAIAAMng");
	var mask_1_graphics_45 = new cjs.Graphics().p("AjLGbIAAs2IGXAAIAAM2g");
	var mask_1_graphics_46 = new cjs.Graphics().p("AjLGjIAAtFIGXAAIAANFg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AjLGqIAAtTIGXAAIAANTg");
	var mask_1_graphics_48 = new cjs.Graphics().p("AjLGxIAAthIGXAAIAANhg");
	var mask_1_graphics_49 = new cjs.Graphics().p("AjLG4IAAtvIGXAAIAANvg");
	var mask_1_graphics_50 = new cjs.Graphics().p("AjLG/IAAt9IGXAAIAAN9g");
	var mask_1_graphics_51 = new cjs.Graphics().p("AjLHGIAAuLIGXAAIAAOLg");
	var mask_1_graphics_52 = new cjs.Graphics().p("AjLHNIAAuZIGXAAIAAOZg");
	var mask_1_graphics_53 = new cjs.Graphics().p("AjLHUIAAunIGXAAIAAOng");
	var mask_1_graphics_54 = new cjs.Graphics().p("AjLHbIAAu1IGXAAIAAO1g");
	var mask_1_graphics_55 = new cjs.Graphics().p("AjLHiIAAvEIGXAAIAAPEg");
	var mask_1_graphics_56 = new cjs.Graphics().p("AjLHqIAAvTIGXAAIAAPTg");
	var mask_1_graphics_57 = new cjs.Graphics().p("AjLHxIAAvhIGXAAIAAPhg");
	var mask_1_graphics_58 = new cjs.Graphics().p("AjLH4IAAvvIGXAAIAAPvg");
	var mask_1_graphics_59 = new cjs.Graphics().p("AjLH/IAAv9IGXAAIAAP9g");
	var mask_1_graphics_60 = new cjs.Graphics().p("AjLIGIAAwLIGXAAIAAQLg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AjLINIAAwZIGXAAIAAQZg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AjLIUIAAwnIGXAAIAAQng");
	var mask_1_graphics_63 = new cjs.Graphics().p("AjLIbIAAw1IGXAAIAAQ1g");
	var mask_1_graphics_64 = new cjs.Graphics().p("AjLIiIAAxEIGXAAIAAREg");
	var mask_1_graphics_65 = new cjs.Graphics().p("AjLIpIAAxSIGXAAIAARSg");
	var mask_1_graphics_66 = new cjs.Graphics().p("AjLIxIAAxhIGXAAIAARhg");
	var mask_1_graphics_67 = new cjs.Graphics().p("AjLI4IAAxvIGXAAIAARvg");
	var mask_1_graphics_68 = new cjs.Graphics().p("AjLI/IAAx9IGXAAIAAR9g");
	var mask_1_graphics_69 = new cjs.Graphics().p("AjLJGIAAyLIGXAAIAASLg");
	var mask_1_graphics_70 = new cjs.Graphics().p("AjLJNIAAyZIGXAAIAASZg");
	var mask_1_graphics_71 = new cjs.Graphics().p("AjLJUIAAynIGXAAIAASng");
	var mask_1_graphics_72 = new cjs.Graphics().p("AjLJbIAAy1IGXAAIAAS1g");
	var mask_1_graphics_73 = new cjs.Graphics().p("AjLJiIAAzDIGXAAIAATDg");
	var mask_1_graphics_74 = new cjs.Graphics().p("AjLJpIAAzSIGXAAIAATSg");
	var mask_1_graphics_75 = new cjs.Graphics().p("AjLJwIAAzfIGXAAIAATfg");
	var mask_1_graphics_76 = new cjs.Graphics().p("AjLJ4IAAzvIGXAAIAATvg");
	var mask_1_graphics_77 = new cjs.Graphics().p("AjLJ/IAAz9IGXAAIAAT9g");
	var mask_1_graphics_78 = new cjs.Graphics().p("AjLKGIAA0LIGXAAIAAULg");
	var mask_1_graphics_79 = new cjs.Graphics().p("AjLKNIAA0ZIGXAAIAAUZg");
	var mask_1_graphics_80 = new cjs.Graphics().p("AjLKUIAA0nIGXAAIAAUng");
	var mask_1_graphics_81 = new cjs.Graphics().p("AjLKbIAA01IGXAAIAAU1g");
	var mask_1_graphics_82 = new cjs.Graphics().p("AjLKiIAA1DIGXAAIAAVDg");
	var mask_1_graphics_83 = new cjs.Graphics().p("AjLKpIAA1SIGXAAIAAVSg");
	var mask_1_graphics_84 = new cjs.Graphics().p("AjLKwIAA1gIGXAAIAAVgg");
	var mask_1_graphics_85 = new cjs.Graphics().p("AjLK3IAA1tIGXAAIAAVtg");
	var mask_1_graphics_86 = new cjs.Graphics().p("AjLK/IAA19IGXAAIAAV9g");
	var mask_1_graphics_87 = new cjs.Graphics().p("AjLLGIAA2LIGXAAIAAWLg");
	var mask_1_graphics_88 = new cjs.Graphics().p("AjLLNIAA2ZIGXAAIAAWZg");
	var mask_1_graphics_89 = new cjs.Graphics().p("AjLHaIAA2nIGXAAIAAWng");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:9.8,y:-34.2}).wait(1).to({graphics:mask_1_graphics_1,x:9.8,y:-59.9}).wait(1).to({graphics:mask_1_graphics_2,x:9.8,y:-60.6}).wait(1).to({graphics:mask_1_graphics_3,x:9.8,y:-61.3}).wait(1).to({graphics:mask_1_graphics_4,x:9.8,y:-62}).wait(1).to({graphics:mask_1_graphics_5,x:9.8,y:-62.7}).wait(1).to({graphics:mask_1_graphics_6,x:9.8,y:-63.4}).wait(1).to({graphics:mask_1_graphics_7,x:9.8,y:-64.2}).wait(1).to({graphics:mask_1_graphics_8,x:9.8,y:-64.9}).wait(1).to({graphics:mask_1_graphics_9,x:9.8,y:-65.6}).wait(1).to({graphics:mask_1_graphics_10,x:9.8,y:-66.3}).wait(1).to({graphics:mask_1_graphics_11,x:9.8,y:-67}).wait(1).to({graphics:mask_1_graphics_12,x:9.8,y:-67.7}).wait(1).to({graphics:mask_1_graphics_13,x:9.8,y:-68.4}).wait(1).to({graphics:mask_1_graphics_14,x:9.8,y:-69.1}).wait(1).to({graphics:mask_1_graphics_15,x:9.8,y:-69.8}).wait(1).to({graphics:mask_1_graphics_16,x:9.8,y:-70.5}).wait(1).to({graphics:mask_1_graphics_17,x:9.8,y:-71.3}).wait(1).to({graphics:mask_1_graphics_18,x:9.8,y:-72}).wait(1).to({graphics:mask_1_graphics_19,x:9.8,y:-72.7}).wait(1).to({graphics:mask_1_graphics_20,x:9.8,y:-73.4}).wait(1).to({graphics:mask_1_graphics_21,x:9.8,y:-74.1}).wait(1).to({graphics:mask_1_graphics_22,x:9.8,y:-74.8}).wait(1).to({graphics:mask_1_graphics_23,x:9.8,y:-75.5}).wait(1).to({graphics:mask_1_graphics_24,x:9.8,y:-76.2}).wait(1).to({graphics:mask_1_graphics_25,x:9.8,y:-76.9}).wait(1).to({graphics:mask_1_graphics_26,x:9.8,y:-77.7}).wait(1).to({graphics:mask_1_graphics_27,x:9.8,y:-78.4}).wait(1).to({graphics:mask_1_graphics_28,x:9.8,y:-79.1}).wait(1).to({graphics:mask_1_graphics_29,x:9.8,y:-79.8}).wait(1).to({graphics:mask_1_graphics_30,x:9.8,y:-80.5}).wait(1).to({graphics:mask_1_graphics_31,x:9.8,y:-81.2}).wait(1).to({graphics:mask_1_graphics_32,x:9.8,y:-81.9}).wait(1).to({graphics:mask_1_graphics_33,x:9.8,y:-82.6}).wait(1).to({graphics:mask_1_graphics_34,x:9.8,y:-83.3}).wait(1).to({graphics:mask_1_graphics_35,x:9.8,y:-84}).wait(1).to({graphics:mask_1_graphics_36,x:9.8,y:-84.8}).wait(1).to({graphics:mask_1_graphics_37,x:9.8,y:-85.5}).wait(1).to({graphics:mask_1_graphics_38,x:9.8,y:-86.2}).wait(1).to({graphics:mask_1_graphics_39,x:9.8,y:-86.9}).wait(1).to({graphics:mask_1_graphics_40,x:9.8,y:-87.6}).wait(1).to({graphics:mask_1_graphics_41,x:9.8,y:-88.3}).wait(1).to({graphics:mask_1_graphics_42,x:9.8,y:-89}).wait(1).to({graphics:mask_1_graphics_43,x:9.8,y:-89.7}).wait(1).to({graphics:mask_1_graphics_44,x:9.8,y:-90.4}).wait(1).to({graphics:mask_1_graphics_45,x:9.8,y:-91.1}).wait(1).to({graphics:mask_1_graphics_46,x:9.8,y:-91.9}).wait(1).to({graphics:mask_1_graphics_47,x:9.8,y:-92.6}).wait(1).to({graphics:mask_1_graphics_48,x:9.8,y:-93.3}).wait(1).to({graphics:mask_1_graphics_49,x:9.8,y:-94}).wait(1).to({graphics:mask_1_graphics_50,x:9.8,y:-94.7}).wait(1).to({graphics:mask_1_graphics_51,x:9.8,y:-95.4}).wait(1).to({graphics:mask_1_graphics_52,x:9.8,y:-96.1}).wait(1).to({graphics:mask_1_graphics_53,x:9.8,y:-96.8}).wait(1).to({graphics:mask_1_graphics_54,x:9.8,y:-97.5}).wait(1).to({graphics:mask_1_graphics_55,x:9.8,y:-98.2}).wait(1).to({graphics:mask_1_graphics_56,x:9.8,y:-99}).wait(1).to({graphics:mask_1_graphics_57,x:9.8,y:-99.7}).wait(1).to({graphics:mask_1_graphics_58,x:9.8,y:-100.4}).wait(1).to({graphics:mask_1_graphics_59,x:9.8,y:-101.1}).wait(1).to({graphics:mask_1_graphics_60,x:9.8,y:-101.8}).wait(1).to({graphics:mask_1_graphics_61,x:9.8,y:-102.5}).wait(1).to({graphics:mask_1_graphics_62,x:9.8,y:-103.2}).wait(1).to({graphics:mask_1_graphics_63,x:9.8,y:-103.9}).wait(1).to({graphics:mask_1_graphics_64,x:9.8,y:-104.6}).wait(1).to({graphics:mask_1_graphics_65,x:9.8,y:-105.3}).wait(1).to({graphics:mask_1_graphics_66,x:9.8,y:-106.1}).wait(1).to({graphics:mask_1_graphics_67,x:9.8,y:-106.8}).wait(1).to({graphics:mask_1_graphics_68,x:9.8,y:-107.5}).wait(1).to({graphics:mask_1_graphics_69,x:9.8,y:-108.2}).wait(1).to({graphics:mask_1_graphics_70,x:9.8,y:-108.9}).wait(1).to({graphics:mask_1_graphics_71,x:9.8,y:-109.6}).wait(1).to({graphics:mask_1_graphics_72,x:9.8,y:-110.3}).wait(1).to({graphics:mask_1_graphics_73,x:9.8,y:-111}).wait(1).to({graphics:mask_1_graphics_74,x:9.8,y:-111.7}).wait(1).to({graphics:mask_1_graphics_75,x:9.8,y:-112.4}).wait(1).to({graphics:mask_1_graphics_76,x:9.8,y:-113.2}).wait(1).to({graphics:mask_1_graphics_77,x:9.8,y:-113.9}).wait(1).to({graphics:mask_1_graphics_78,x:9.8,y:-114.6}).wait(1).to({graphics:mask_1_graphics_79,x:9.8,y:-115.3}).wait(1).to({graphics:mask_1_graphics_80,x:9.8,y:-116}).wait(1).to({graphics:mask_1_graphics_81,x:9.8,y:-116.7}).wait(1).to({graphics:mask_1_graphics_82,x:9.8,y:-117.4}).wait(1).to({graphics:mask_1_graphics_83,x:9.8,y:-118.1}).wait(1).to({graphics:mask_1_graphics_84,x:9.8,y:-118.8}).wait(1).to({graphics:mask_1_graphics_85,x:9.8,y:-119.5}).wait(1).to({graphics:mask_1_graphics_86,x:9.8,y:-120.3}).wait(1).to({graphics:mask_1_graphics_87,x:9.8,y:-121}).wait(1).to({graphics:mask_1_graphics_88,x:9.8,y:-121.7}).wait(1).to({graphics:mask_1_graphics_89,x:9.8,y:-97.4}).wait(31));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AjlJWQAtmGAejzQAfj0CDjVQCEjWA1DdQA1DcgWBu");
	this.shape_1.setTransform(17.6,-124.9);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.6,-76.3,46.8,14.8);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-27,21.4,1,1,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:33.2,y:-27},74).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AiggCIA+gvIBvCTIg9Aug");
	var mask_graphics_1 = new cjs.Graphics().p("AhagvIBGg0IBvCTIhGA0g");
	var mask_graphics_2 = new cjs.Graphics().p("AhegsIBOg6IBuCSIhMA7g");
	var mask_graphics_3 = new cjs.Graphics().p("AhhgpIBUhAIBvCTIhUBAg");
	var mask_graphics_4 = new cjs.Graphics().p("AhlgmIBchGIBvCTIhcBGg");
	var mask_graphics_5 = new cjs.Graphics().p("AhogjIBjhLIBuCSIhjBLg");
	var mask_graphics_6 = new cjs.Graphics().p("AhsggIBqhRIBvCSIhqBRg");
	var mask_graphics_7 = new cjs.Graphics().p("AhwgdIBxhXIBwCSIhxBXg");
	var mask_graphics_8 = new cjs.Graphics().p("Ah0gaIB5hdIBwCTIh5Bcg");
	var mask_graphics_9 = new cjs.Graphics().p("Ah4gYICBhiIBwCTIiBBig");
	var mask_graphics_10 = new cjs.Graphics().p("Ah7gVICHhoIBwCTIiIBog");
	var mask_graphics_11 = new cjs.Graphics().p("Ah/gSICPhuIBwCTIiPBug");
	var mask_graphics_12 = new cjs.Graphics().p("AiDgPICXhzIBwCSIiXBzg");
	var mask_graphics_13 = new cjs.Graphics().p("AiHgNICfh4IBwCSIifB5g");
	var mask_graphics_14 = new cjs.Graphics().p("AiKgKIClh+IBwCSIilB/g");
	var mask_graphics_15 = new cjs.Graphics().p("AiOgHICtiEIBwCTIitCEg");
	var mask_graphics_16 = new cjs.Graphics().p("AiSgEIC1iKIBwCTIi1CKg");
	var mask_graphics_17 = new cjs.Graphics().p("AiWgBIC8iPIBxCSIi8CPg");
	var mask_graphics_18 = new cjs.Graphics().p("AiZABIDDiVIBwCUIjDCUg");
	var mask_graphics_19 = new cjs.Graphics().p("AidAEIDLiaIBwCUIjLCZg");
	var mask_graphics_20 = new cjs.Graphics().p("AihAGIDTifIBwCUIjTCfg");
	var mask_graphics_21 = new cjs.Graphics().p("AilAJIDbilIBvCUIjZClg");
	var mask_graphics_22 = new cjs.Graphics().p("AioAMIDhirIBwCUIjhCqg");
	var mask_graphics_23 = new cjs.Graphics().p("AisAPIDpixIBwCUIjpCwg");
	var mask_graphics_24 = new cjs.Graphics().p("AiwASIDxi2IBwCTIjxC2g");
	var mask_graphics_25 = new cjs.Graphics().p("AizAVID4i8IBvCTIj4C8g");
	var mask_graphics_26 = new cjs.Graphics().p("Ai3AXID/jBIBwCUIj/DBg");
	var mask_graphics_27 = new cjs.Graphics().p("Ai7AaIEHjHIBwCUIkHDHg");
	var mask_graphics_28 = new cjs.Graphics().p("Ai/AdIEPjMIBwCTIkPDNg");
	var mask_graphics_29 = new cjs.Graphics().p("AjCAgIEWjTIBvCUIkWDTg");
	var mask_graphics_30 = new cjs.Graphics().p("AjGAjIEdjYIBwCTIkdDYg");
	var mask_graphics_31 = new cjs.Graphics().p("AjKAmIEljeIBwCTIklDeg");
	var mask_graphics_32 = new cjs.Graphics().p("AjOAoIEtjjIBwCTIktDkg");
	var mask_graphics_33 = new cjs.Graphics().p("AjRArIEzjpIBwCTIkzDqg");
	var mask_graphics_34 = new cjs.Graphics().p("AjVAuIE7jvIBwCUIk7Dug");
	var mask_graphics_35 = new cjs.Graphics().p("AjZAxIFDj0IBwCTIlDD0g");
	var mask_graphics_36 = new cjs.Graphics().p("AjdA0IFKj6IBxCTIlKD6g");
	var mask_graphics_37 = new cjs.Graphics().p("AjhA2IFSj/IBxCTIlSEAg");
	var mask_graphics_38 = new cjs.Graphics().p("AjkA5IFZkFIBwCUIlZEFg");
	var mask_graphics_39 = new cjs.Graphics().p("AjoA8IFhkLIBwCUIlhELg");
	var mask_graphics_40 = new cjs.Graphics().p("AjsA/IFpkRIBwCUIlpERg");
	var mask_graphics_41 = new cjs.Graphics().p("AjwBCIFwkWIBxCTIlwEWg");
	var mask_graphics_42 = new cjs.Graphics().p("AjzBFIF3kcIBwCTIl3Ecg");
	var mask_graphics_43 = new cjs.Graphics().p("Aj3BIIF/kiIBwCTIl/Eig");
	var mask_graphics_44 = new cjs.Graphics().p("Aj7BLIGGkoIBxCTImHEog");
	var mask_graphics_45 = new cjs.Graphics().p("Aj+BNIGNktIBwCUImNEtg");
	var mask_graphics_46 = new cjs.Graphics().p("AkCBQIGVkzIBwCUImVEzg");
	var mask_graphics_47 = new cjs.Graphics().p("AkGBTIGdk4IBwCTImdE5g");
	var mask_graphics_48 = new cjs.Graphics().p("AkKBWIGlk+IBvCTImkE/g");
	var mask_graphics_49 = new cjs.Graphics().p("AkNBYIGrlDIBwCUImrFDg");
	var mask_graphics_50 = new cjs.Graphics().p("AkRBbIGzlJIBwCTImzFKg");
	var mask_graphics_51 = new cjs.Graphics().p("AkUBeIG6lPIBvCUIm6FPg");
	var mask_graphics_52 = new cjs.Graphics().p("AkYBhIHClVIBvCUInCFVg");
	var mask_graphics_53 = new cjs.Graphics().p("AkcBkIHJlbIBwCUInJFag");
	var mask_graphics_54 = new cjs.Graphics().p("AkgBnIHRlgIBwCTInRFgg");
	var mask_graphics_55 = new cjs.Graphics().p("AkkBqIHZlmIBwCTInZFmg");
	var mask_graphics_56 = new cjs.Graphics().p("AknBsIHflrIBwCUIngFrg");
	var mask_graphics_57 = new cjs.Graphics().p("AkrBvIHnlxIBwCUInnFxg");
	var mask_graphics_58 = new cjs.Graphics().p("AkvByIHvl2IBwCTInvF3g");
	var mask_graphics_59 = new cjs.Graphics().p("AkzB1IH3l8IBwCTIn3F9g");
	var mask_graphics_60 = new cjs.Graphics().p("Ak2B4IH9mCIBxCTIn/GCg");
	var mask_graphics_61 = new cjs.Graphics().p("Ak6B7IIFmIIBwCTIoFGIg");
	var mask_graphics_62 = new cjs.Graphics().p("Ak+B+IINmOIBwCUIoNGNg");
	var mask_graphics_63 = new cjs.Graphics().p("AlCCAIIUmTIBxCUIoUGTg");
	var mask_graphics_64 = new cjs.Graphics().p("AlFCDIIbmZIBwCUIobGYg");
	var mask_graphics_65 = new cjs.Graphics().p("AlJCGIIjmeIBwCTIojGeg");
	var mask_graphics_66 = new cjs.Graphics().p("AlNCJIIrmkIBwCTIorGkg");
	var mask_graphics_67 = new cjs.Graphics().p("AlRCMIIzmqIBwCTIozGqg");
	var mask_graphics_68 = new cjs.Graphics().p("AlVCOII7mvIBwCUIo6Gvg");
	var mask_graphics_69 = new cjs.Graphics().p("AlYCRIJBm1IBwCUIpBG1g");
	var mask_graphics_70 = new cjs.Graphics().p("AlcCUIJJm7IBwCUIpJG7g");
	var mask_graphics_71 = new cjs.Graphics().p("AlfCXIJQnBIBwCUIpRHBg");
	var mask_graphics_72 = new cjs.Graphics().p("AljCaIJXnGIBwCTIpXHGg");
	var mask_graphics_73 = new cjs.Graphics().p("AlnCdIJfnMIBwCTIpfHMg");
	var mask_graphics_74 = new cjs.Graphics().p("AlrCgIJnnSIBwCTIpnHSg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-16.1,y:14.4}).wait(1).to({graphics:mask_graphics_1,x:-23.1,y:18.9}).wait(1).to({graphics:mask_graphics_2,x:-22.7,y:18.6}).wait(1).to({graphics:mask_graphics_3,x:-22.4,y:18.3}).wait(1).to({graphics:mask_graphics_4,x:-22,y:18}).wait(1).to({graphics:mask_graphics_5,x:-21.6,y:17.7}).wait(1).to({graphics:mask_graphics_6,x:-21.2,y:17.4}).wait(1).to({graphics:mask_graphics_7,x:-20.8,y:17.2}).wait(1).to({graphics:mask_graphics_8,x:-20.4,y:16.9}).wait(1).to({graphics:mask_graphics_9,x:-20.1,y:16.6}).wait(1).to({graphics:mask_graphics_10,x:-19.7,y:16.3}).wait(1).to({graphics:mask_graphics_11,x:-19.3,y:16}).wait(1).to({graphics:mask_graphics_12,x:-18.9,y:15.7}).wait(1).to({graphics:mask_graphics_13,x:-18.6,y:15.4}).wait(1).to({graphics:mask_graphics_14,x:-18.2,y:15.1}).wait(1).to({graphics:mask_graphics_15,x:-17.8,y:14.8}).wait(1).to({graphics:mask_graphics_16,x:-17.4,y:14.5}).wait(1).to({graphics:mask_graphics_17,x:-17,y:14.3}).wait(1).to({graphics:mask_graphics_18,x:-16.7,y:14}).wait(1).to({graphics:mask_graphics_19,x:-16.3,y:13.7}).wait(1).to({graphics:mask_graphics_20,x:-15.9,y:13.4}).wait(1).to({graphics:mask_graphics_21,x:-15.5,y:13.1}).wait(1).to({graphics:mask_graphics_22,x:-15.2,y:12.8}).wait(1).to({graphics:mask_graphics_23,x:-14.8,y:12.5}).wait(1).to({graphics:mask_graphics_24,x:-14.4,y:12.2}).wait(1).to({graphics:mask_graphics_25,x:-14,y:11.9}).wait(1).to({graphics:mask_graphics_26,x:-13.6,y:11.6}).wait(1).to({graphics:mask_graphics_27,x:-13.2,y:11.3}).wait(1).to({graphics:mask_graphics_28,x:-12.9,y:11.1}).wait(1).to({graphics:mask_graphics_29,x:-12.5,y:10.8}).wait(1).to({graphics:mask_graphics_30,x:-12.1,y:10.5}).wait(1).to({graphics:mask_graphics_31,x:-11.7,y:10.2}).wait(1).to({graphics:mask_graphics_32,x:-11.4,y:9.9}).wait(1).to({graphics:mask_graphics_33,x:-11,y:9.6}).wait(1).to({graphics:mask_graphics_34,x:-10.6,y:9.3}).wait(1).to({graphics:mask_graphics_35,x:-10.2,y:9}).wait(1).to({graphics:mask_graphics_36,x:-9.8,y:8.7}).wait(1).to({graphics:mask_graphics_37,x:-9.4,y:8.5}).wait(1).to({graphics:mask_graphics_38,x:-9.1,y:8.2}).wait(1).to({graphics:mask_graphics_39,x:-8.7,y:7.9}).wait(1).to({graphics:mask_graphics_40,x:-8.3,y:7.6}).wait(1).to({graphics:mask_graphics_41,x:-7.9,y:7.3}).wait(1).to({graphics:mask_graphics_42,x:-7.5,y:7}).wait(1).to({graphics:mask_graphics_43,x:-7.2,y:6.7}).wait(1).to({graphics:mask_graphics_44,x:-6.8,y:6.4}).wait(1).to({graphics:mask_graphics_45,x:-6.4,y:6.1}).wait(1).to({graphics:mask_graphics_46,x:-6,y:5.8}).wait(1).to({graphics:mask_graphics_47,x:-5.7,y:5.6}).wait(1).to({graphics:mask_graphics_48,x:-5.3,y:5.3}).wait(1).to({graphics:mask_graphics_49,x:-4.9,y:5}).wait(1).to({graphics:mask_graphics_50,x:-4.5,y:4.7}).wait(1).to({graphics:mask_graphics_51,x:-4.1,y:4.4}).wait(1).to({graphics:mask_graphics_52,x:-3.7,y:4.1}).wait(1).to({graphics:mask_graphics_53,x:-3.4,y:3.8}).wait(1).to({graphics:mask_graphics_54,x:-3,y:3.5}).wait(1).to({graphics:mask_graphics_55,x:-2.6,y:3.2}).wait(1).to({graphics:mask_graphics_56,x:-2.2,y:2.9}).wait(1).to({graphics:mask_graphics_57,x:-1.9,y:2.6}).wait(1).to({graphics:mask_graphics_58,x:-1.5,y:2.4}).wait(1).to({graphics:mask_graphics_59,x:-1.1,y:2.1}).wait(1).to({graphics:mask_graphics_60,x:-0.7,y:1.8}).wait(1).to({graphics:mask_graphics_61,x:-0.3,y:1.5}).wait(1).to({graphics:mask_graphics_62,x:0,y:1.2}).wait(1).to({graphics:mask_graphics_63,x:0.4,y:0.9}).wait(1).to({graphics:mask_graphics_64,x:0.8,y:0.6}).wait(1).to({graphics:mask_graphics_65,x:1.2,y:0.3}).wait(1).to({graphics:mask_graphics_66,x:1.5,y:0}).wait(1).to({graphics:mask_graphics_67,x:1.9,y:-0.3}).wait(1).to({graphics:mask_graphics_68,x:2.3,y:-0.5}).wait(1).to({graphics:mask_graphics_69,x:2.7,y:-0.8}).wait(1).to({graphics:mask_graphics_70,x:3.1,y:-1.1}).wait(1).to({graphics:mask_graphics_71,x:3.5,y:-1.4}).wait(1).to({graphics:mask_graphics_72,x:3.8,y:-1.7}).wait(1).to({graphics:mask_graphics_73,x:4.2,y:-2}).wait(1).to({graphics:mask_graphics_74,x:4.6,y:-2.3}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AjtEeQCHkkFUkW");
	this.shape.setTransform(3.5,-4.5,1,1,-167.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(75));

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
(lib.WS_Cursive_M = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_793 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(793).call(this.frame_793).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(90.4,166.3,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[90.4,166.4,130.7,143.5,151.9,152.7,173.1,162,178,180.3,182.9,198.6,165,251.2,149.3,280.9,128.9,319,107,359.9,88.5,396.1]}},180).wait(15).to({startPosition:0},0).to({guide:{path:[88.5,396.1,107.6,358.9,129,319,149.3,280.9,165,251.2,208.9,203.5,243,193.2,277,182.9,272.8,217.7,269.9,241.8,258.1,263.6,224.4,329.4,190.7,395.3]}},240).wait(15).to({startPosition:0},0).to({guide:{path:[191.2,395.6,224.6,329.6,258,263.6,290.1,230.2,317.8,220.9,345.4,211.7,353,224.3,359.3,234.7,345.1,264.9]}},118).to({guide:{path:[345.2,264.9,342.4,270.9,338.8,277.6,317,318.5,301.3,355.3,293.4,373.7,294.2,384.1,295,394.5,304.4,396.8,323.1,401.5,350.2,391.9,377.3,382.2,408.1,355,438.7,327.8,454.8,307.1]}},137).wait(14).to({startPosition:0},0).to({guide:{path:[454.6,307.3,441.2,308.5,444,290.3,446.9,272.1,466,234.5,504.4,159.1,627.3,254.8]}},65).wait(1));

	// DOT
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(88.8,396.9,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},180).wait(15).to({_off:false,x:189.8},0).to({_off:true},240).wait(15).to({_off:false,x:454.8,y:306.9},0).to({_off:true},255).wait(80));

	// Layer 14
	this.instance_1 = new lib.ar7("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(247.9,329.5,0.88,1,22.4,0,0,-1.2,-99.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(459).to({_off:false},0).wait(335));

	// Layer 17 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_620 = new cjs.Graphics().p("AprKAQBSsDJannQJbnnMCBTQMCBQHnJbMgtcAkuQnnpaBRsBg");
	var mask_graphics_621 = new cjs.Graphics().p("ApkKQQBHsDJSnwQJUnvMDBHQMDBGHvJUMgs5AlWQnwpTBHsCg");
	var mask_graphics_622 = new cjs.Graphics().p("ApdKgQA8sDJLn4QJNn4MDA9QMEA7H4JMMgsXAl/Qn4pNA8sDg");
	var mask_graphics_623 = new cjs.Graphics().p("ApWKxQAxsEJEoAQJGoAMEAyQMEAwIAJFMgr0AmlQoApFAxsDg");
	var mask_graphics_624 = new cjs.Graphics().p("ApOLCQAmsFI9oIQI+oIMEAnQMFAlIII+MgrQAnMQoIo+AmsDg");
	var mask_graphics_625 = new cjs.Graphics().p("ApGLTQAcsGI1oPQI2oQMFAcQMFAaIQI2MgqsAnzQoQo2AbsEg");
	var mask_graphics_626 = new cjs.Graphics().p("Ao9LkQARsGItoXQIvoYMFARQMFAQIYIuMgqHAoYQoYouAQsEg");
	var mask_graphics_627 = new cjs.Graphics().p("AozL0QAFsFInofQImogMFAHQMGAEIfInMgpiAo9QogonAGsEg");
	var mask_graphics_628 = new cjs.Graphics().p("AoqMFQgGsFIgonQIeonMGgEQMFgHInIgMgo/ApiQomoggFsEg");
	var mask_graphics_629 = new cjs.Graphics().p("AohMWQgQsGIYouQIXouMFgPQMFgRIvIXMgoaAqHQouoYgQsEg");
	var mask_graphics_630 = new cjs.Graphics().p("AoXMnQgbsGIQo1QIQo2MEgaQMFgbI2IQMgn0AqqQo1oQgbsEg");
	var mask_graphics_631 = new cjs.Graphics().p("AoMM4QgmsGIIo8QIIo9MEgkQMFgnI9IIMgnPArOQo8oIglsEg");
	var mask_graphics_632 = new cjs.Graphics().p("AoBNJQgxsFIBpDQH/pFMEgvQMEgxJEIAMgmoArwQpDoAgwsDg");
	var mask_graphics_633 = new cjs.Graphics().p("An2NbQg7sFH4pKQH3pMMEg6QMDg7JMH4MgmCAsSQpKn4g7sCg");
	var mask_graphics_634 = new cjs.Graphics().p("AnqNsQhGsDHwpSQHvpSMDhFQMChHJTHwMglaAs1QpSnwhFsCg");
	var mask_graphics_635 = new cjs.Graphics().p("AneN+QhQsDHopYQHnpaMBhPQMChRJZHoMgkyAtVQpYnohRsAg");
	var mask_graphics_636 = new cjs.Graphics().p("AnROPQhbsBHgpfQHepgMAhaQMBhcJgHfMgkKAt2QpfnfhbsAg");
	var mask_graphics_637 = new cjs.Graphics().p("AnDOhQhmsAHXpmQHWpmL/hlQL/hnJnHXMgjhAuWQpmnXhlr+g");
	var mask_graphics_638 = new cjs.Graphics().p("Am2OzQhwr/HOpsQHOptL+hvQL9hyJtHPMgi3Au1QptnOhwr9g");
	var mask_graphics_639 = new cjs.Graphics().p("AmnPFQh7r9HFpzQHFpzL9h6QL7h8J0HGMgiOAvUQpznGh6r7g");
	var mask_graphics_640 = new cjs.Graphics().p("AmZPXQiFr7G9p5QG8p6L7iFQL6iGJ6G9MghlAvyQp4m9iGr5g");
	var mask_graphics_641 = new cjs.Graphics().p("AmJPpQiRr5G1qAQGzqAL5iPQL4iRKAG1Mgg6AwQQp/m0iPr4g");
	var mask_graphics_642 = new cjs.Graphics().p("Al6P7Qibr3GsqFQGqqGL3iaQL2ibKGGrMggOAwtQqGmriar2g");
	var mask_graphics_643 = new cjs.Graphics().p("AlqQOQilr2GiqLQGiqML0ikQL1imKMGjMgfkAxJQqLmiilrzg");
	var mask_graphics_644 = new cjs.Graphics().p("AlZQgQiwrzGZqRQGZqSLyiuQLyixKSGaMge4AxlQqRmZivrxg");
	var mask_graphics_645 = new cjs.Graphics().p("AlIQyQi6rwGQqXQGPqXLwi5QLvi7KYGQMgeMAyBQqWmQi6rvg");
	var mask_graphics_646 = new cjs.Graphics().p("Ak3RFQjEruGHqcQGGqdLtjDQLtjGKdGHMgdgAycQqcmHjErsg");
	var mask_graphics_647 = new cjs.Graphics().p("AklRXQjPrrF+qhQF9qjLqjNQLqjQKjF+MgczAy1Qqhl9jPrqg");
	var mask_graphics_648 = new cjs.Graphics().p("AkTRqQjZroF1qnQFzqoLojYQLnjaKnF1MgcFAzPQqnl1jZrmg");
	var mask_graphics_649 = new cjs.Graphics().p("AkAR9QjjrmFrqrQFqqtLkjjQLkjkKtFrMgbYAzoQqslrjjrjg");
	var mask_graphics_650 = new cjs.Graphics().p("AjtSQQjurjFiqwQFgqyLijtQLhjvKyFiMgaqA0AQqylhjtrgg");
	var mask_graphics_651 = new cjs.Graphics().p("AjZSiQj4reFYq2QFXq3Lej3QLdj5K3FYMgZ8A0YQq2lYj3rdg");
	var mask_graphics_652 = new cjs.Graphics().p("AjFS1QkCrbFOq7QFNq7LbkBQLakDK8FOMgZOA0vQq7lOkBrag");
	var mask_graphics_653 = new cjs.Graphics().p("AiwTIQkNrYFFq/QFDrALXkLQLXkNLAFEMgYfA1GQrAlFkKrWg");
	var mask_graphics_654 = new cjs.Graphics().p("AicTbQkWrUE7rEQE5rELUkVQLTkYLEE7MgXvA1bQrFk7kVrSg");
	var mask_graphics_655 = new cjs.Graphics().p("AiGTuQkhrQExrIQEwrJLQkfQLOkhLJExMgXAA1vQrIkxkfrOg");
	var mask_graphics_656 = new cjs.Graphics().p("AhxUBQkqrMEnrMQEmrNLMkqQLKkrLNEnMgWQA2EQrNknkprKg");
	var mask_graphics_657 = new cjs.Graphics().p("AhbUUQk0rIEdrQQEcrRLIkzQLGk2LSEeMgVhA2XQrRkdkzrGg");
	var mask_graphics_658 = new cjs.Graphics().p("AhEUnQk+rEETrUQESrVLDk9QLCk/LWETMgUwA2rQrVkTk9rCg");
	var mask_graphics_659 = new cjs.Graphics().p("AgtU6QlIq/EJrYQEIrZK/lHQK+lILYEJMgT/A29QrZkJlGq+g");
	var mask_graphics_660 = new cjs.Graphics().p("AgWVNQlSq6D/rcQD+rdK6lQQK5lTLdD/MgTOA3PQrdj/lQq5g");
	var mask_graphics_661 = new cjs.Graphics().p("AAPVsQlgqzDvrhQDtriKzlgQKyliLiDvMgSAA3pQrijvlhqxg");
	var mask_graphics_662 = new cjs.Graphics().p("AA2WKQlvqrDermQDernKqlvQKqlxLnDeMgQxA4CQrnjelwqqg");
	var mask_graphics_663 = new cjs.Graphics().p("ABfWpQl/qjDOrsQDNrqKil+QKhmALsDNMgPhA4ZQrsjOl+qhg");
	var mask_graphics_664 = new cjs.Graphics().p("ACIXIQmOqaC9rxQC9rvKZmNQKZmOLwC9MgORA4tQrwi9mNqYg");
	var mask_graphics_665 = new cjs.Graphics().p("ACyXmQmcqRCsr0QCsrzKQmcQKQmdL0CsMgNAA5BQr1itmbqPg");
	var mask_graphics_666 = new cjs.Graphics().p("ADcYFQmqqICcr4QCar3KImqQKGmrL4CbMgLwA5SQr3ibmrqGg");
	var mask_graphics_667 = new cjs.Graphics().p("AEIYjQm5p+CLr7QCKr6J+m4QJ9m6L7CLMgKeA5hQr8iKm4p9g");
	var mask_graphics_668 = new cjs.Graphics().p("AE1ZCQnHp1B6r+QB5r8J0nHQJznHL9B6MgJMA5vQr+h6nGpyg");
	var mask_graphics_669 = new cjs.Graphics().p("AFiZgQnUpqBpsBQBor/JpnUQJpnVMABpMgH7A57QsAhpnUpog");
	var mask_graphics_670 = new cjs.Graphics().p("AGQZ+QnipfBXsDQBYsBJfniQJenjMDBYMgGpA6GQsChYnipeg");
	var mask_graphics_671 = new cjs.Graphics().p("AG/acQnvpVBGsEQBHsDJUnvQJTnwMEBHMgFWA6OQsEhHnvpTg");
	var mask_graphics_672 = new cjs.Graphics().p("AHva6Qn9pJA1sGQA2sFJJn8QJIn9MGA2MgEEA6VQsFg2n8pIg");
	var mask_graphics_673 = new cjs.Graphics().p("AIfbYQoKo+AlsHQAksFI+oJQI9oKMGAkMgCxA6aQsGgloJo8g");
	var mask_graphics_674 = new cjs.Graphics().p("AJQb1QoXoyAUsHQATsGIzoWQIwoWMIATMgBfA6dQsHgUoVoxg");
	var mask_graphics_675 = new cjs.Graphics().p("AKCcTQojonACsHQADsGImoiQIlojMHACMgALA6eQsIgCoholg");
	var mask_graphics_676 = new cjs.Graphics().p("AKQcwQovoagOsIQgPsGIaotQIYovMIgPMABHA6dIgpAAQrtAAofoKg");
	var mask_graphics_677 = new cjs.Graphics().p("AKadMQo7oNggsHQggsGIOo5QIMo7MHggMACaA6aQgtACgrAAQrPAAoZnug");
	var mask_graphics_678 = new cjs.Graphics().p("AKkdoQpGoBgxsGQgwsFIApEQH/pHMGgxMADtA6WQhEAEhCAAQqzAAoSnSg");
	var mask_graphics_679 = new cjs.Graphics().p("AKveDQpRn0hCsFQhCsDHzpQQHzpSMEhCMAFAA6QQhbAHhYAAQqXAAoLm3g");
	var mask_graphics_680 = new cjs.Graphics().p("AK7edQpdnnhTsDQhSsCHmpaQHlpdMChTMAGSA6IQhxAMhtAAQp9AAoCmeg");
	var mask_graphics_681 = new cjs.Graphics().p("ALHe2QpnnZhjsBQhlsAHZplQHXpnMBhkMAHkA59QiHASiCAAQpjAAn6mFg");
	var mask_graphics_682 = new cjs.Graphics().p("ALUfPQpxnMh1r+Qh1r+HKpvQHKpxL/h1MAI2A5xQidAYiWAAQpLAAnwlsg");
	var mask_graphics_683 = new cjs.Graphics().p("ALhfmQp7m9iFr7QiHr8G9p5QG8p7L7iGMAKIA5kQixAgiqAAQozAAnnlWg");
	var mask_graphics_684 = new cjs.Graphics().p("ALvf+QqFmwiWr4QiXr4GuqDQGuqEL5iXMALZA5VQjGAni+AAQocAAnck+g");
	var mask_graphics_685 = new cjs.Graphics().p("EAL+AgUQqPmhimr1Qior0GgqMQGfqOL1ioMAMqA5EQjaAwjRAAQoGAAnQkog");
	var mask_graphics_686 = new cjs.Graphics().p("EAMNAgqQqXmTi4rxQi5rwGSqVQGRqXLxi5MAN6A4xQjtA6jkAAQnwAAnFkSg");
	var mask_graphics_687 = new cjs.Graphics().p("EAMdAg+QqgmDjJrtQjJrsGDqeQGCqfLtjKMAPKA4dQkABEj3AAQnbABm4j/g");
	var mask_graphics_688 = new cjs.Graphics().p("EAMtAhTQqol1jZroQjaroF0qmQFzqoLojaMAQbA4GQkTBRkKAAQnGAAmsjqg");
	var mask_graphics_689 = new cjs.Graphics().p("EAM+AhmQqxlljprjQjqrjFlquQFkqwLjjrMARpA3uQklBdkcAAQmyAAmejXg");
	var mask_graphics_690 = new cjs.Graphics().p("EANPAh4Qq4lWj6rdQj6reFXq2QFTq3Lej7MAS4A3UQk3BqkvAAQmeAAmQjFg");
	var mask_graphics_691 = new cjs.Graphics().p("EANoAiRQrClBkQrVQkRrWFBrAQE+rCLVkQMAUlA2sQlOB+lKAAQmCAAl8isg");
	var mask_graphics_692 = new cjs.Graphics().p("EAODAioQrMkrknrMQknrNErrKQEorLLNknMAWQA2CQllCTlkAAQlnAAlmiVg");
	var mask_graphics_693 = new cjs.Graphics().p("EAOeAi9QrVkUk8rDQk9rEEUrSQESrULDk+MAX7A1VQl7Cql/AAQlMAAlQiAg");
	var mask_graphics_694 = new cjs.Graphics().p("EAO6AjRQrdj+lSq5QlSq5D+rbQD7rcK5lTMAZjA0kQmPDCmaAAQkyAAk5hsg");
	var mask_graphics_695 = new cjs.Graphics().p("EAPYAjjQrljnlnquQloqvDnriQDmrkKtloMAbKAzwQmiDcm3AAQkYAAkfhag");
	var mask_graphics_696 = new cjs.Graphics().p("EAP2AjzQrrjPl9qjQl9qjDRrpQDOrrKil9MAcwAy4Qm1D3nTAAQj+AAkGhJg");
	var mask_graphics_697 = new cjs.Graphics().p("EAQVAkCQrxi5mRqWQmSqXC5rwQC4rwKWmSMAeTAx+QnGEUnxAAQjjAAjsg6g");
	var mask_graphics_698 = new cjs.Graphics().p("EAQ1AkPQr3ihmlqKQmmqKCir2QCgr0KJmnMAf2AxBQnXEyoPAAQjIAAjRgtg");
	var mask_graphics_699 = new cjs.Graphics().p("EARWAkbQr7iKm5p9Qm6p9CKr6QCJr5J8m6MAhVAwAQnmFRouAAQiuAAi0ggg");
	var mask_graphics_700 = new cjs.Graphics().p("EAR4AkkQr/hynNpvQnNpuBzr+QBxr+JtnNMAi0Au9Qn0FypPAAQiSAAiXgXg");
	var mask_graphics_701 = new cjs.Graphics().p("EASaAksQsChangphQngpgBbsBQBasAJfnhMAkPAt3QoAGUpyAAQh1AAh6gOg");
	var mask_graphics_702 = new cjs.Graphics().p("EAS+AkyQsFhCnypSQnzpRBDsDQBCsDJQnzMAloAstQoLG5qWAAQhYAAhagIg");
	var mask_graphics_703 = new cjs.Graphics().p("EATiAk2QsHgqoEpCQoFpBAssFQApsFJBoFMAm/AriQoVHeq8AAQg6AAg6gEg");
	var mask_graphics_704 = new cjs.Graphics().p("EAUGAk5QsHgToWoxQoWoxATsHQASsFIwoXMAoVAqUQofIErkAAIg0AAg");
	var mask_graphics_705 = new cjs.Graphics().p("AgDceQonoggFsHQgGsFIgooMApmApCQogIosFAFIgPAAQr+AAoiobg");
	var mask_graphics_706 = new cjs.Graphics().p("AASdGQo3oPgcsGQgesFIPo5MAq2AnvQoQI5sEAdQgpABgoAAQrUAAobnzg");
	var mask_graphics_707 = new cjs.Graphics().p("AAqdsQpHn9g0sFQg2sEH9pIMAsDAmZQn9JIsEA1QhJAFhHAAQqtAAoRnNg");
	var mask_graphics_708 = new cjs.Graphics().p("ABDeRQpWnrhMsDQhOsCHrpYMAtNAlBQnrJYsBBNQhpAKhlAAQqHAAoHmog");
	var mask_graphics_709 = new cjs.Graphics().p("ACPfsQp9m4iLr7QiMr6G4p9MAwHAhNQm4J+r5CLQi4AiixAAQosAAnllOg");
	var mask_graphics_710 = new cjs.Graphics().p("EADoAg9QqgmDjJrsQjKrsGCqgMAytAdKQmDKgrsDKQkBBFj4AAQnbAAm5j+g");
	var mask_graphics_711 = new cjs.Graphics().p("EAFMAiEQq9lLkGraQkIrZFLq9MA08AY6QlLK+rZEGQlDB1k+AAQmQAAmHi4g");
	var mask_graphics_712 = new cjs.Graphics().p("EAG7AjAQrWkQlBrDQlCrBEQrXMA20AUgQkQLXrBFCQl/CumFAAQlJAAlNh8g");
	var mask_graphics_713 = new cjs.Graphics().p("EAI0AjwQrqjUl5qmQl8qlDUrqMA4VAP8QjTLsqlF6QmzDznQAAQkDAAkMhMg");
	var mask_graphics_714 = new cjs.Graphics().p("EAK5AkUQr6iWmwqFQmyqECWr7MA5fALTQiWL7qEGwQnfFCohAAQi8AAjDgmg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(620).to({graphics:mask_graphics_620,x:269.5,y:201.1}).wait(1).to({graphics:mask_graphics_621,x:268.6,y:202.1}).wait(1).to({graphics:mask_graphics_622,x:267.8,y:203.2}).wait(1).to({graphics:mask_graphics_623,x:266.9,y:204.1}).wait(1).to({graphics:mask_graphics_624,x:266,y:205.1}).wait(1).to({graphics:mask_graphics_625,x:265.1,y:206.1}).wait(1).to({graphics:mask_graphics_626,x:264.2,y:207}).wait(1).to({graphics:mask_graphics_627,x:263.3,y:207.9}).wait(1).to({graphics:mask_graphics_628,x:262.4,y:208.9}).wait(1).to({graphics:mask_graphics_629,x:261.5,y:209.8}).wait(1).to({graphics:mask_graphics_630,x:260.5,y:210.7}).wait(1).to({graphics:mask_graphics_631,x:259.6,y:211.6}).wait(1).to({graphics:mask_graphics_632,x:258.6,y:212.4}).wait(1).to({graphics:mask_graphics_633,x:257.7,y:213.3}).wait(1).to({graphics:mask_graphics_634,x:256.7,y:214.2}).wait(1).to({graphics:mask_graphics_635,x:255.7,y:215}).wait(1).to({graphics:mask_graphics_636,x:254.7,y:215.8}).wait(1).to({graphics:mask_graphics_637,x:253.7,y:216.6}).wait(1).to({graphics:mask_graphics_638,x:252.6,y:217.4}).wait(1).to({graphics:mask_graphics_639,x:251.6,y:218.2}).wait(1).to({graphics:mask_graphics_640,x:250.6,y:218.9}).wait(1).to({graphics:mask_graphics_641,x:249.5,y:219.7}).wait(1).to({graphics:mask_graphics_642,x:248.4,y:220.4}).wait(1).to({graphics:mask_graphics_643,x:247.4,y:221.1}).wait(1).to({graphics:mask_graphics_644,x:246.3,y:221.8}).wait(1).to({graphics:mask_graphics_645,x:245.2,y:222.5}).wait(1).to({graphics:mask_graphics_646,x:244.1,y:223.2}).wait(1).to({graphics:mask_graphics_647,x:243,y:223.8}).wait(1).to({graphics:mask_graphics_648,x:241.8,y:224.5}).wait(1).to({graphics:mask_graphics_649,x:240.7,y:225.1}).wait(1).to({graphics:mask_graphics_650,x:239.6,y:225.7}).wait(1).to({graphics:mask_graphics_651,x:238.4,y:226.3}).wait(1).to({graphics:mask_graphics_652,x:237.3,y:226.9}).wait(1).to({graphics:mask_graphics_653,x:236.1,y:227.5}).wait(1).to({graphics:mask_graphics_654,x:234.9,y:228}).wait(1).to({graphics:mask_graphics_655,x:233.7,y:228.5}).wait(1).to({graphics:mask_graphics_656,x:232.5,y:229}).wait(1).to({graphics:mask_graphics_657,x:231.4,y:229.5}).wait(1).to({graphics:mask_graphics_658,x:230.2,y:230}).wait(1).to({graphics:mask_graphics_659,x:228.9,y:230.5}).wait(1).to({graphics:mask_graphics_660,x:227.7,y:230.9}).wait(1).to({graphics:mask_graphics_661,x:225.8,y:231.6}).wait(1).to({graphics:mask_graphics_662,x:223.8,y:232.2}).wait(1).to({graphics:mask_graphics_663,x:221.8,y:232.8}).wait(1).to({graphics:mask_graphics_664,x:219.8,y:233.3}).wait(1).to({graphics:mask_graphics_665,x:217.8,y:233.8}).wait(1).to({graphics:mask_graphics_666,x:215.8,y:234.2}).wait(1).to({graphics:mask_graphics_667,x:213.8,y:234.6}).wait(1).to({graphics:mask_graphics_668,x:211.7,y:235}).wait(1).to({graphics:mask_graphics_669,x:209.7,y:235.3}).wait(1).to({graphics:mask_graphics_670,x:207.7,y:235.6}).wait(1).to({graphics:mask_graphics_671,x:205.6,y:235.8}).wait(1).to({graphics:mask_graphics_672,x:203.6,y:236}).wait(1).to({graphics:mask_graphics_673,x:201.5,y:236.1}).wait(1).to({graphics:mask_graphics_674,x:199.5,y:236.2}).wait(1).to({graphics:mask_graphics_675,x:197.4,y:236.2}).wait(1).to({graphics:mask_graphics_676,x:198.9,y:236.2}).wait(1).to({graphics:mask_graphics_677,x:201,y:236.2}).wait(1).to({graphics:mask_graphics_678,x:203.1,y:236.2}).wait(1).to({graphics:mask_graphics_679,x:205.2,y:236.2}).wait(1).to({graphics:mask_graphics_680,x:207.2,y:236.3}).wait(1).to({graphics:mask_graphics_681,x:209.3,y:236.3}).wait(1).to({graphics:mask_graphics_682,x:211.4,y:236.3}).wait(1).to({graphics:mask_graphics_683,x:213.4,y:236.4}).wait(1).to({graphics:mask_graphics_684,x:215.5,y:236.4}).wait(1).to({graphics:mask_graphics_685,x:217.5,y:236.4}).wait(1).to({graphics:mask_graphics_686,x:219.5,y:236.4}).wait(1).to({graphics:mask_graphics_687,x:221.5,y:236.4}).wait(1).to({graphics:mask_graphics_688,x:223.6,y:236.5}).wait(1).to({graphics:mask_graphics_689,x:225.5,y:236.5}).wait(1).to({graphics:mask_graphics_690,x:227.5,y:236.5}).wait(1).to({graphics:mask_graphics_691,x:230.2,y:236.5}).wait(1).to({graphics:mask_graphics_692,x:232.9,y:236.5}).wait(1).to({graphics:mask_graphics_693,x:235.6,y:236.5}).wait(1).to({graphics:mask_graphics_694,x:238.2,y:236.5}).wait(1).to({graphics:mask_graphics_695,x:240.8,y:236.5}).wait(1).to({graphics:mask_graphics_696,x:243.4,y:236.4}).wait(1).to({graphics:mask_graphics_697,x:245.9,y:236.4}).wait(1).to({graphics:mask_graphics_698,x:248.4,y:236.4}).wait(1).to({graphics:mask_graphics_699,x:250.8,y:236.3}).wait(1).to({graphics:mask_graphics_700,x:253.2,y:236.3}).wait(1).to({graphics:mask_graphics_701,x:255.5,y:236.2}).wait(1).to({graphics:mask_graphics_702,x:257.7,y:236.2}).wait(1).to({graphics:mask_graphics_703,x:259.9,y:236.2}).wait(1).to({graphics:mask_graphics_704,x:262.1,y:236.1}).wait(1).to({graphics:mask_graphics_705,x:264.1,y:236.1}).wait(1).to({graphics:mask_graphics_706,x:266.2,y:236.1}).wait(1).to({graphics:mask_graphics_707,x:268.1,y:236.1}).wait(1).to({graphics:mask_graphics_708,x:269.9,y:236.1}).wait(1).to({graphics:mask_graphics_709,x:274.6,y:236.2}).wait(1).to({graphics:mask_graphics_710,x:278.8,y:236.3}).wait(1).to({graphics:mask_graphics_711,x:282.4,y:236.4}).wait(1).to({graphics:mask_graphics_712,x:285.4,y:236.4}).wait(1).to({graphics:mask_graphics_713,x:287.8,y:236.4}).wait(1).to({graphics:mask_graphics_714,x:289.8,y:236.2}).wait(80));

	// Layer 16
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("A0mN3IKe0hQFBlUEVhmQEThmBLCWQBKCWjdGNQjcGMiWFqQiXFoCNAwQCNAvEShQQEThQFckbQFckaCgjX");
	this.shape_1.setTransform(322.9,306.3);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(620).to({_off:false},0).wait(174));

	// Layer 15 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_560 = new cjs.Graphics().p("AWcRpIAAnxIEEAAIAAHxg");
	var mask_1_graphics_561 = new cjs.Graphics().p("AiZD9IAAn5IEzAAIAAH5g");
	var mask_1_graphics_562 = new cjs.Graphics().p("AixEBIAAoCIFjAAIAAICg");
	var mask_1_graphics_563 = new cjs.Graphics().p("AjJEGIAAoLIGTAAIAAILg");
	var mask_1_graphics_564 = new cjs.Graphics().p("AjhEKIAAoTIHDAAIAAITg");
	var mask_1_graphics_565 = new cjs.Graphics().p("Aj5EOIAAocIHzAAIAAIcg");
	var mask_1_graphics_566 = new cjs.Graphics().p("AUMSDIAAomIIjAAIAAImg");
	var mask_1_graphics_567 = new cjs.Graphics().p("AkREkIAApHIIiAAIAAJHg");
	var mask_1_graphics_568 = new cjs.Graphics().p("AkRE0IAApnIIiAAIAAJng");
	var mask_1_graphics_569 = new cjs.Graphics().p("AkRFEIAAqHIIiAAIAAKHg");
	var mask_1_graphics_570 = new cjs.Graphics().p("AkRFVIAAqpIIiAAIAAKpg");
	var mask_1_graphics_571 = new cjs.Graphics().p("AkRFlIAArJIIiAAIAALJg");
	var mask_1_graphics_572 = new cjs.Graphics().p("AkRF2IAArrIIiAAIAALrg");
	var mask_1_graphics_573 = new cjs.Graphics().p("AkRGGIAAsLIIiAAIAAMLg");
	var mask_1_graphics_574 = new cjs.Graphics().p("AkRGWIAAsrIIiAAIAAMrg");
	var mask_1_graphics_575 = new cjs.Graphics().p("AkRGnIAAtNIIiAAIAANNg");
	var mask_1_graphics_576 = new cjs.Graphics().p("AkRG3IAAttIIiAAIAANtg");
	var mask_1_graphics_577 = new cjs.Graphics().p("AkRHIIAAuPIIiAAIAAOPg");
	var mask_1_graphics_578 = new cjs.Graphics().p("AkRHYIAAuvIIiAAIAAOvg");
	var mask_1_graphics_579 = new cjs.Graphics().p("AkRHoIAAvPIIiAAIAAPPg");
	var mask_1_graphics_580 = new cjs.Graphics().p("AUMVpIAAvyIIjAAIAAPyg");
	var mask_1_graphics_581 = new cjs.Graphics().p("AkWIEIAAwHIItAAIAAQHg");
	var mask_1_graphics_582 = new cjs.Graphics().p("AkcIQIAAweII5AAIAAQeg");
	var mask_1_graphics_583 = new cjs.Graphics().p("AkhIbIAAw1IJDAAIAAQ1g");
	var mask_1_graphics_584 = new cjs.Graphics().p("AknImIAAxLIJPAAIAARLg");
	var mask_1_graphics_585 = new cjs.Graphics().p("AktIxIAAxhIJaAAIAARhg");
	var mask_1_graphics_586 = new cjs.Graphics().p("AkyI9IAAx4IJlAAIAAR4g");
	var mask_1_graphics_587 = new cjs.Graphics().p("Ak4JIIAAyPIJxAAIAASPg");
	var mask_1_graphics_588 = new cjs.Graphics().p("Ak9JTIAAylIJ8AAIAASlg");
	var mask_1_graphics_589 = new cjs.Graphics().p("AlDJeIAAy7IKHAAIAAS7g");
	var mask_1_graphics_590 = new cjs.Graphics().p("AlJJpIAAzRIKTAAIAATRg");
	var mask_1_graphics_591 = new cjs.Graphics().p("AlOJ1IAAzpIKdAAIAATpg");
	var mask_1_graphics_592 = new cjs.Graphics().p("AlUKAIAAz/IKpAAIAAT/g");
	var mask_1_graphics_593 = new cjs.Graphics().p("AlZKLIAA0VIK0AAIAAUVg");
	var mask_1_graphics_594 = new cjs.Graphics().p("AlfKWIAA0rIK/AAIAAUrg");
	var mask_1_graphics_595 = new cjs.Graphics().p("AllKiIAA1DILLAAIAAVDg");
	var mask_1_graphics_596 = new cjs.Graphics().p("AlqKtIAA1ZILVAAIAAVZg");
	var mask_1_graphics_597 = new cjs.Graphics().p("AlwK4IAA1vILhAAIAAVvg");
	var mask_1_graphics_598 = new cjs.Graphics().p("Al2LDIAA2FILtAAIAAWFg");
	var mask_1_graphics_599 = new cjs.Graphics().p("Al7LPIAA2dIL3AAIAAWdg");
	var mask_1_graphics_600 = new cjs.Graphics().p("AmBLaIAA2zIMDAAIAAWzg");
	var mask_1_graphics_601 = new cjs.Graphics().p("AmHLlIAA3JIMOAAIAAXJg");
	var mask_1_graphics_602 = new cjs.Graphics().p("AmMLwIAA3fIMZAAIAAXfg");
	var mask_1_graphics_603 = new cjs.Graphics().p("AmSL8IAA33IMlAAIAAX3g");
	var mask_1_graphics_604 = new cjs.Graphics().p("AmYMHIAA4NIMwAAIAAYNg");
	var mask_1_graphics_605 = new cjs.Graphics().p("AmdMSIAA4jIM7AAIAAYjg");
	var mask_1_graphics_606 = new cjs.Graphics().p("AmjMdIAA45INGAAIAAY5g");
	var mask_1_graphics_607 = new cjs.Graphics().p("AmoMpIAA5RINRAAIAAZRg");
	var mask_1_graphics_608 = new cjs.Graphics().p("AmuM0IAA5nINdAAIAAZng");
	var mask_1_graphics_609 = new cjs.Graphics().p("Am0M/IAA59INoAAIAAZ9g");
	var mask_1_graphics_610 = new cjs.Graphics().p("Am5NKIAA6TINzAAIAAaTg");
	var mask_1_graphics_611 = new cjs.Graphics().p("Am+NVIAA6pIN9AAIAAapg");
	var mask_1_graphics_612 = new cjs.Graphics().p("AnENhIAA7AIOJAAIAAbAg");
	var mask_1_graphics_613 = new cjs.Graphics().p("AnKNsIAA7XIOVAAIAAbXg");
	var mask_1_graphics_614 = new cjs.Graphics().p("AnQN3IAA7tIOhAAIAAbtg");
	var mask_1_graphics_615 = new cjs.Graphics().p("AnVOCIAA8DIOrAAIAAcDg");
	var mask_1_graphics_616 = new cjs.Graphics().p("AnbOOIAA8aIO3AAIAAcag");
	var mask_1_graphics_617 = new cjs.Graphics().p("AngOZIAA8xIPCAAIAAcxg");
	var mask_1_graphics_618 = new cjs.Graphics().p("AnmOkIAA9HIPNAAIAAdHg");
	var mask_1_graphics_619 = new cjs.Graphics().p("AnsOvIAA9dIPZAAIAAddg");
	var mask_1_graphics_620 = new cjs.Graphics().p("ANLcsIAA91IPkAAIAAd1g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(560).to({graphics:mask_1_graphics_560,x:169.6,y:112.9}).wait(1).to({graphics:mask_1_graphics_561,x:328.6,y:201.4}).wait(1).to({graphics:mask_1_graphics_562,x:330.9,y:201.8}).wait(1).to({graphics:mask_1_graphics_563,x:333.3,y:202.3}).wait(1).to({graphics:mask_1_graphics_564,x:335.7,y:202.7}).wait(1).to({graphics:mask_1_graphics_565,x:338,y:203.1}).wait(1).to({graphics:mask_1_graphics_566,x:183.9,y:115.5}).wait(1).to({graphics:mask_1_graphics_567,x:340.4,y:205.2}).wait(1).to({graphics:mask_1_graphics_568,x:340.4,y:206.9}).wait(1).to({graphics:mask_1_graphics_569,x:340.4,y:208.5}).wait(1).to({graphics:mask_1_graphics_570,x:340.4,y:210.1}).wait(1).to({graphics:mask_1_graphics_571,x:340.4,y:211.8}).wait(1).to({graphics:mask_1_graphics_572,x:340.4,y:213.4}).wait(1).to({graphics:mask_1_graphics_573,x:340.4,y:215.1}).wait(1).to({graphics:mask_1_graphics_574,x:340.4,y:216.7}).wait(1).to({graphics:mask_1_graphics_575,x:340.4,y:218.4}).wait(1).to({graphics:mask_1_graphics_576,x:340.4,y:220}).wait(1).to({graphics:mask_1_graphics_577,x:340.4,y:221.7}).wait(1).to({graphics:mask_1_graphics_578,x:340.4,y:223.3}).wait(1).to({graphics:mask_1_graphics_579,x:340.4,y:225}).wait(1).to({graphics:mask_1_graphics_580,x:183.9,y:138.5}).wait(1).to({graphics:mask_1_graphics_581,x:339.9,y:227.7}).wait(1).to({graphics:mask_1_graphics_582,x:339.3,y:228.9}).wait(1).to({graphics:mask_1_graphics_583,x:338.7,y:230}).wait(1).to({graphics:mask_1_graphics_584,x:338.2,y:231.1}).wait(1).to({graphics:mask_1_graphics_585,x:337.6,y:232.2}).wait(1).to({graphics:mask_1_graphics_586,x:337.1,y:233.4}).wait(1).to({graphics:mask_1_graphics_587,x:336.5,y:234.5}).wait(1).to({graphics:mask_1_graphics_588,x:336,y:235.6}).wait(1).to({graphics:mask_1_graphics_589,x:335.4,y:236.7}).wait(1).to({graphics:mask_1_graphics_590,x:334.8,y:237.9}).wait(1).to({graphics:mask_1_graphics_591,x:334.3,y:239}).wait(1).to({graphics:mask_1_graphics_592,x:333.7,y:240.1}).wait(1).to({graphics:mask_1_graphics_593,x:333.2,y:241.3}).wait(1).to({graphics:mask_1_graphics_594,x:332.6,y:242.4}).wait(1).to({graphics:mask_1_graphics_595,x:332,y:243.5}).wait(1).to({graphics:mask_1_graphics_596,x:331.5,y:244.6}).wait(1).to({graphics:mask_1_graphics_597,x:330.9,y:245.8}).wait(1).to({graphics:mask_1_graphics_598,x:330.4,y:246.9}).wait(1).to({graphics:mask_1_graphics_599,x:329.8,y:248}).wait(1).to({graphics:mask_1_graphics_600,x:329.3,y:249.1}).wait(1).to({graphics:mask_1_graphics_601,x:328.7,y:250.3}).wait(1).to({graphics:mask_1_graphics_602,x:328.1,y:251.4}).wait(1).to({graphics:mask_1_graphics_603,x:327.6,y:252.5}).wait(1).to({graphics:mask_1_graphics_604,x:327,y:253.6}).wait(1).to({graphics:mask_1_graphics_605,x:326.5,y:254.8}).wait(1).to({graphics:mask_1_graphics_606,x:325.9,y:255.9}).wait(1).to({graphics:mask_1_graphics_607,x:325.3,y:257}).wait(1).to({graphics:mask_1_graphics_608,x:324.8,y:258.1}).wait(1).to({graphics:mask_1_graphics_609,x:324.2,y:259.3}).wait(1).to({graphics:mask_1_graphics_610,x:323.7,y:260.4}).wait(1).to({graphics:mask_1_graphics_611,x:323.1,y:261.5}).wait(1).to({graphics:mask_1_graphics_612,x:322.5,y:262.7}).wait(1).to({graphics:mask_1_graphics_613,x:322,y:263.8}).wait(1).to({graphics:mask_1_graphics_614,x:321.4,y:264.9}).wait(1).to({graphics:mask_1_graphics_615,x:320.9,y:266}).wait(1).to({graphics:mask_1_graphics_616,x:320.3,y:267.2}).wait(1).to({graphics:mask_1_graphics_617,x:319.8,y:268.3}).wait(1).to({graphics:mask_1_graphics_618,x:319.2,y:269.4}).wait(1).to({graphics:mask_1_graphics_619,x:318.6,y:270.5}).wait(1).to({graphics:mask_1_graphics_620,x:183.9,y:183.6}).wait(174));

	// Layer 13
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("A0mN3IKe0hQFBlUEVhmQEThmBLCWQBKCWjdGNQjcGMiWFqQiXFoCNAwQCNAvEShQQEThQFckbQFckaCgjX");
	this.shape_2.setTransform(322.9,306.3);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(560).to({_off:false},0).wait(234));

	// Layer 10 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_520 = new cjs.Graphics().p("AFOYnQlNlMgFnUMAkOAAAQgHHUlMFMQlUFUnhAAQngAAlUlUg");
	var mask_2_graphics_521 = new cjs.Graphics().p("ARcd6QnhgQlHlfQlBlZAKnTMAkNABQQgXHTlYFBQlOE4nEAAIgtgBg");
	var mask_2_graphics_522 = new cjs.Graphics().p("AQ1d4Qnfghk7lqQk1ljAanTMAkJACfQgnHSljE1QlIEemoAAQgsAAgugDg");
	var mask_2_graphics_523 = new cjs.Graphics().p("AQQd0Qnegxkvl1QknltAonSMAkDADuQg3HRltEpQlAEEmPAAQhBAAhDgHg");
	var mask_2_graphics_524 = new cjs.Graphics().p("APsdvQnchCkil/Qkbl3A4nQMAj6AE9QhHHPl3EcQk4Dsl2AAQhVAAhYgMg");
	var mask_2_graphics_525 = new cjs.Graphics().p("APIdoQnZhSkVmIQkOmBBInOMAjuAGMQhXHMmAEPQkvDVlfAAQhoAAhtgTg");
	var mask_2_graphics_526 = new cjs.Graphics().p("AOldhQnWhjkHmSQkAmKBYnLMAjeAHbQhmHImKECQklC/lIAAQh7AAiBgag");
	var mask_2_graphics_527 = new cjs.Graphics().p("AOEdXQnThyj5mbQjzmSBonIMAjNAIoQh2HFmTD0QkZCqk0AAQiNAAiTgkg");
	var mask_2_graphics_528 = new cjs.Graphics().p("ANjdNQnPiCjqmjQjlmbB3nEMAi5AJ2QiGHAmaDmQkOCXkfAAQigAAilgvg");
	var mask_2_graphics_529 = new cjs.Graphics().p("ANDdBQnJiSjdmrQjWmiCGnAMAiiALCQiVG8miDYQkACEkMAAQiyAAi3g7g");
	var mask_2_graphics_530 = new cjs.Graphics().p("AMlc0QnFihjNmyQjImqCWm7MAiIAMOQikG2mqDJQjyBzj5AAQjEAAjHhIg");
	var mask_2_graphics_531 = new cjs.Graphics().p("AMHcmQm/ixi+m5Qi5mwClm1MAhsANYQizGwmwC6QjkBjjmAAQjWAAjYhWg");
	var mask_2_graphics_532 = new cjs.Graphics().p("ALrcXQm5jBivm/Qiqm2C0mvMAhNAOhQjCGqm2CsQjVBTjTAAQjpAAjmhlg");
	var mask_2_graphics_533 = new cjs.Graphics().p("ALPcGQmxjPignFQibm8DDmpMAgsAPqQjQGjm8CdQjFBFjBAAQj7AAj2h2g");
	var mask_2_graphics_534 = new cjs.Graphics().p("AK1b1QmqjfiQnKQiMnBDSmiMAgIAQyQjeGbnBCNQi0A5ivAAQkPAAkDiHg");
	var mask_2_graphics_535 = new cjs.Graphics().p("AKdbiQmjjtiAnPQh8nGDfmaIfiR3QjsGUnFB+QijAticAAQkjAAkPiag");
	var mask_2_graphics_536 = new cjs.Graphics().p("AKFbOQmaj7hwnTQhunKDvmSIe5S8Qj6GLnJBuQiQAiiLAAQk3AAkbitg");
	var mask_2_graphics_537 = new cjs.Graphics().p("AJva5QmRkJhgnXQhenND8mKIePT/QkIGCnNBfQh9AZh4AAQlMAAkmjCg");
	var mask_2_graphics_538 = new cjs.Graphics().p("AJaaiQmIkWhQnaQhOnQEKmBIdiVBQkVF5nQBOQhpAShlAAQljAAkwjZg");
	var mask_2_graphics_539 = new cjs.Graphics().p("AJGaLQl+kkg/ncQg+nSEWl4IczWBQkiFvnSA/QhVALhRAAQl6AAk6jwg");
	var mask_2_graphics_540 = new cjs.Graphics().p("AI0ZzQlzkxgwneQgunVEkltIcBW/QkuFlnUAvQhAAGg+AAQmSAAlCkIg");
	var mask_2_graphics_541 = new cjs.Graphics().p("AIjZZQlpk9gengQgenVEvlkIbOX8Qk6FbnWAeQgpADgpAAQmtAAlJkig");
	var mask_2_graphics_542 = new cjs.Graphics().p("AIUY+QlelJgOngQgOnXE8lYIaYY2QlGFQnWAOIgnABQnIAAlPk9g");
	var mask_2_graphics_543 = new cjs.Graphics().p("AU4d7QnggDlSlVQlSlWACngQACnXFIlNIZgZvQlPFDnTAAIgGAAg");
	var mask_2_graphics_544 = new cjs.Graphics().p("AUfd6QnggTlGlhQlGlhATngQASnWFTlBIYnamQlJEnm2AAIg0gBg");
	var mask_2_graphics_545 = new cjs.Graphics().p("AUHd4Qnfgkk6lsQk6lsAjneQAjnWFek2IXrbcQlCENmbAAQgvAAgwgDg");
	var mask_2_graphics_546 = new cjs.Graphics().p("ATvd0Qndg0kul2Qktl3A0ndQAznUFokqIWucPQk6D1mCAAQhDAAhGgIg");
	var mask_2_graphics_547 = new cjs.Graphics().p("ATYdvQnchEkgmBQkgmABEncQBDnSFykdIVvc/QkxDelpAAQhXAAhbgNg");
	var mask_2_graphics_548 = new cjs.Graphics().p("ATBdpQnZhVkSmKQkTmKBUnZQBTnQF8kQIUuduQknDHlSAAQhrAAhvgTg");
	var mask_2_graphics_549 = new cjs.Graphics().p("ASrdhQnVhlkGmTQkFmUBlnVQBinNGFkCITteaQkcCyk9AAQh9AAiDgcg");
	var mask_2_graphics_550 = new cjs.Graphics().p("ASWdYQnSh1j3mcQj3mcB0nSQBznJGNj1ISpfEQkQCekoAAQiQAAiVglg");
	var mask_2_graphics_551 = new cjs.Graphics().p("ASBdOQnOiFjomlQjpmkCEnNQCCnEGWjoIRkfsQkECLkUAAQiiAAingwg");
	var mask_2_graphics_552 = new cjs.Graphics().p("ARtdCQnJiVjamsQjamsCUnIQCRm/GejbMAQdAgSQj2B5kAAAQi0AAi5g8g");
	var mask_2_graphics_553 = new cjs.Graphics().p("ARac1QnEikjLmzQjMm0CknDQChm5GljNMAPWAg1QjpBojtAAQjGAAjJhJg");
	var mask_2_graphics_554 = new cjs.Graphics().p("ARHcnQm9izi9m7Qi8m6Czm9QCwm0Gsi9MAONAhVQjaBZjaAAQjZAAjZhYg");
	var mask_2_graphics_555 = new cjs.Graphics().p("AQ1cYQm3jDitnAQitnADDm3QC+muGyivMANDAhzQjJBLjIAAQjrAAjphng");
	var mask_2_graphics_556 = new cjs.Graphics().p("AQkcIQmwjSidnGQienGDRmwQDOmnG3igMAL5AiPQi6A9i1AAQj+AAj3h3g");
	var mask_2_graphics_557 = new cjs.Graphics().p("AQUb2QmpjhiOnLQiNnLDgmoQDcmgG8iQMAKtAinQioAxikAAQkRAAkEiJg");
	var mask_2_graphics_558 = new cjs.Graphics().p("AQFbjQmhjvh+nQQh+nPDumhQDqmXHCiCMAJgAi+QiWAmiSAAQklAAkQicg");
	var mask_2_graphics_559 = new cjs.Graphics().p("AP2bPQmYj9hunUQhunTD8mZQD4mPHGhyMAITAjRQiEAdh/AAQk5AAkdiwg");
	var mask_2_graphics_560 = new cjs.Graphics().p("APoa6QmPkLhenXQhenXELmQQEFmGHJhiMAHFAjiQhwAUhtAAQlPAAknjFg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(520).to({graphics:mask_2_graphics_520,x:231.4,y:191.5}).wait(1).to({graphics:mask_2_graphics_521,x:231.4,y:191.5}).wait(1).to({graphics:mask_2_graphics_522,x:231.3,y:191.5}).wait(1).to({graphics:mask_2_graphics_523,x:231.1,y:191.5}).wait(1).to({graphics:mask_2_graphics_524,x:230.9,y:191.5}).wait(1).to({graphics:mask_2_graphics_525,x:230.6,y:191.5}).wait(1).to({graphics:mask_2_graphics_526,x:230.2,y:191.5}).wait(1).to({graphics:mask_2_graphics_527,x:229.8,y:191.5}).wait(1).to({graphics:mask_2_graphics_528,x:229.3,y:191.6}).wait(1).to({graphics:mask_2_graphics_529,x:228.7,y:191.6}).wait(1).to({graphics:mask_2_graphics_530,x:228.1,y:191.6}).wait(1).to({graphics:mask_2_graphics_531,x:227.4,y:191.6}).wait(1).to({graphics:mask_2_graphics_532,x:226.6,y:191.6}).wait(1).to({graphics:mask_2_graphics_533,x:225.8,y:191.6}).wait(1).to({graphics:mask_2_graphics_534,x:224.9,y:191.6}).wait(1).to({graphics:mask_2_graphics_535,x:223.9,y:191.6}).wait(1).to({graphics:mask_2_graphics_536,x:222.9,y:191.5}).wait(1).to({graphics:mask_2_graphics_537,x:221.9,y:191.5}).wait(1).to({graphics:mask_2_graphics_538,x:220.8,y:191.5}).wait(1).to({graphics:mask_2_graphics_539,x:219.6,y:191.5}).wait(1).to({graphics:mask_2_graphics_540,x:218.4,y:191.5}).wait(1).to({graphics:mask_2_graphics_541,x:217.1,y:191.5}).wait(1).to({graphics:mask_2_graphics_542,x:215.8,y:191.5}).wait(1).to({graphics:mask_2_graphics_543,x:214.4,y:191.5}).wait(1).to({graphics:mask_2_graphics_544,x:213,y:191.5}).wait(1).to({graphics:mask_2_graphics_545,x:211.5,y:191.5}).wait(1).to({graphics:mask_2_graphics_546,x:210,y:191.6}).wait(1).to({graphics:mask_2_graphics_547,x:208.4,y:191.6}).wait(1).to({graphics:mask_2_graphics_548,x:206.8,y:191.6}).wait(1).to({graphics:mask_2_graphics_549,x:205.2,y:191.7}).wait(1).to({graphics:mask_2_graphics_550,x:203.5,y:191.7}).wait(1).to({graphics:mask_2_graphics_551,x:201.8,y:191.8}).wait(1).to({graphics:mask_2_graphics_552,x:200,y:191.8}).wait(1).to({graphics:mask_2_graphics_553,x:198.3,y:191.8}).wait(1).to({graphics:mask_2_graphics_554,x:196.5,y:191.9}).wait(1).to({graphics:mask_2_graphics_555,x:194.6,y:191.9}).wait(1).to({graphics:mask_2_graphics_556,x:192.8,y:191.9}).wait(1).to({graphics:mask_2_graphics_557,x:190.9,y:191.9}).wait(1).to({graphics:mask_2_graphics_558,x:189,y:191.9}).wait(1).to({graphics:mask_2_graphics_559,x:187.1,y:191.9}).wait(1).to({graphics:mask_2_graphics_560,x:185.1,y:191.9}).wait(234));

	// Layer 6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("AswOCIKe0hQFAlUEVhlQEVhmBKCVQALAWAEAa");
	this.shape_3.setTransform(272.7,305.2);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(520).to({_off:false},0).wait(274));

	// Layer 19
	this.instance_2 = new lib.ar7("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(165,304.5,1,1,22.4,0,0,-1.2,-99.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(204).to({_off:false},0).wait(590));

	// Layer 9 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_355 = new cjs.Graphics().p("AgsRuIAAjPIZxAAIAADPg");
	var mask_3_graphics_356 = new cjs.Graphics().p("As4BxIAAjhIZxAAIAADhg");
	var mask_3_graphics_357 = new cjs.Graphics().p("As4B7IAAj1IZxAAIAAD1g");
	var mask_3_graphics_358 = new cjs.Graphics().p("As4CEIAAkHIZxAAIAAEHg");
	var mask_3_graphics_359 = new cjs.Graphics().p("As4COIAAkbIZxAAIAAEbg");
	var mask_3_graphics_360 = new cjs.Graphics().p("As4CYIAAkvIZxAAIAAEvg");
	var mask_3_graphics_361 = new cjs.Graphics().p("As4ChIAAlBIZxAAIAAFBg");
	var mask_3_graphics_362 = new cjs.Graphics().p("As4CrIAAlVIZxAAIAAFVg");
	var mask_3_graphics_363 = new cjs.Graphics().p("As4C1IAAlpIZxAAIAAFpg");
	var mask_3_graphics_364 = new cjs.Graphics().p("As4C/IAAl8IZxAAIAAF8g");
	var mask_3_graphics_365 = new cjs.Graphics().p("As4DIIAAmPIZxAAIAAGPg");
	var mask_3_graphics_366 = new cjs.Graphics().p("As4DSIAAmjIZxAAIAAGjg");
	var mask_3_graphics_367 = new cjs.Graphics().p("As4DbIAAm1IZxAAIAAG1g");
	var mask_3_graphics_368 = new cjs.Graphics().p("As4DlIAAnJIZxAAIAAHJg");
	var mask_3_graphics_369 = new cjs.Graphics().p("As4DvIAAndIZxAAIAAHdg");
	var mask_3_graphics_370 = new cjs.Graphics().p("As4D5IAAnxIZxAAIAAHxg");
	var mask_3_graphics_371 = new cjs.Graphics().p("As4ECIAAoEIZxAAIAAIEg");
	var mask_3_graphics_372 = new cjs.Graphics().p("As4EMIAAoXIZxAAIAAIXg");
	var mask_3_graphics_373 = new cjs.Graphics().p("As4EWIAAorIZxAAIAAIrg");
	var mask_3_graphics_374 = new cjs.Graphics().p("As4EgIAAo/IZxAAIAAI/g");
	var mask_3_graphics_375 = new cjs.Graphics().p("As4EpIAApRIZxAAIAAJRg");
	var mask_3_graphics_376 = new cjs.Graphics().p("As4EzIAAplIZxAAIAAJlg");
	var mask_3_graphics_377 = new cjs.Graphics().p("As4E8IAAp4IZxAAIAAJ4g");
	var mask_3_graphics_378 = new cjs.Graphics().p("As4FGIAAqLIZxAAIAAKLg");
	var mask_3_graphics_379 = new cjs.Graphics().p("As4FQIAAqfIZxAAIAAKfg");
	var mask_3_graphics_380 = new cjs.Graphics().p("As4FaIAAqzIZxAAIAAKzg");
	var mask_3_graphics_381 = new cjs.Graphics().p("As4FjIAArFIZxAAIAALFg");
	var mask_3_graphics_382 = new cjs.Graphics().p("As4FtIAArZIZxAAIAALZg");
	var mask_3_graphics_383 = new cjs.Graphics().p("As4F2IAArsIZxAAIAALsg");
	var mask_3_graphics_384 = new cjs.Graphics().p("As4GAIAAr/IZxAAIAAL/g");
	var mask_3_graphics_385 = new cjs.Graphics().p("As4GKIAAsTIZxAAIAAMTg");
	var mask_3_graphics_386 = new cjs.Graphics().p("As4GUIAAsnIZxAAIAAMng");
	var mask_3_graphics_387 = new cjs.Graphics().p("As4GdIAAs5IZxAAIAAM5g");
	var mask_3_graphics_388 = new cjs.Graphics().p("As4GnIAAtNIZxAAIAANNg");
	var mask_3_graphics_389 = new cjs.Graphics().p("As4GwIAAtgIZxAAIAANgg");
	var mask_3_graphics_390 = new cjs.Graphics().p("As4G6IAAtzIZxAAIAANzg");
	var mask_3_graphics_391 = new cjs.Graphics().p("As4HEIAAuHIZxAAIAAOHg");
	var mask_3_graphics_392 = new cjs.Graphics().p("As4HOIAAubIZxAAIAAObg");
	var mask_3_graphics_393 = new cjs.Graphics().p("As4HXIAAutIZxAAIAAOtg");
	var mask_3_graphics_394 = new cjs.Graphics().p("As4HhIAAvBIZxAAIAAPBg");
	var mask_3_graphics_395 = new cjs.Graphics().p("As4HrIAAvVIZxAAIAAPVg");
	var mask_3_graphics_396 = new cjs.Graphics().p("As4H0IAAvnIZxAAIAAPng");
	var mask_3_graphics_397 = new cjs.Graphics().p("As4H+IAAv7IZxAAIAAP7g");
	var mask_3_graphics_398 = new cjs.Graphics().p("As4IIIAAwPIZxAAIAAQPg");
	var mask_3_graphics_399 = new cjs.Graphics().p("As4IRIAAwiIZxAAIAAQig");
	var mask_3_graphics_400 = new cjs.Graphics().p("As4IbIAAw1IZxAAIAAQ1g");
	var mask_3_graphics_401 = new cjs.Graphics().p("As4IlIAAxJIZxAAIAARJg");
	var mask_3_graphics_402 = new cjs.Graphics().p("As4IvIAAxdIZxAAIAARdg");
	var mask_3_graphics_403 = new cjs.Graphics().p("As4I4IAAxvIZxAAIAARvg");
	var mask_3_graphics_404 = new cjs.Graphics().p("As4JCIAAyDIZxAAIAASDg");
	var mask_3_graphics_405 = new cjs.Graphics().p("As4JLIAAyWIZxAAIAASWg");
	var mask_3_graphics_406 = new cjs.Graphics().p("As4JVIAAypIZxAAIAASpg");
	var mask_3_graphics_407 = new cjs.Graphics().p("As4JfIAAy9IZxAAIAAS9g");
	var mask_3_graphics_408 = new cjs.Graphics().p("As4JpIAAzRIZxAAIAATRg");
	var mask_3_graphics_409 = new cjs.Graphics().p("As4JyIAAzjIZxAAIAATjg");
	var mask_3_graphics_410 = new cjs.Graphics().p("As4J8IAAz3IZxAAIAAT3g");
	var mask_3_graphics_411 = new cjs.Graphics().p("As4KGIAA0LIZxAAIAAULg");
	var mask_3_graphics_412 = new cjs.Graphics().p("As4KPIAA0dIZxAAIAAUdg");
	var mask_3_graphics_413 = new cjs.Graphics().p("As4KZIAA0xIZxAAIAAUxg");
	var mask_3_graphics_414 = new cjs.Graphics().p("As4KjIAA1FIZxAAIAAVFg");
	var mask_3_graphics_415 = new cjs.Graphics().p("As4KsIAA1XIZxAAIAAVXg");
	var mask_3_graphics_416 = new cjs.Graphics().p("As4K2IAA1rIZxAAIAAVrg");
	var mask_3_graphics_417 = new cjs.Graphics().p("As4LAIAA1/IZxAAIAAV/g");
	var mask_3_graphics_418 = new cjs.Graphics().p("As4LJIAA2RIZxAAIAAWRg");
	var mask_3_graphics_419 = new cjs.Graphics().p("As4LTIAA2lIZxAAIAAWlg");
	var mask_3_graphics_420 = new cjs.Graphics().p("As4LdIAA25IZxAAIAAW5g");
	var mask_3_graphics_421 = new cjs.Graphics().p("As4LmIAA3MIZxAAIAAXMg");
	var mask_3_graphics_422 = new cjs.Graphics().p("As4LwIAA3fIZxAAIAAXfg");
	var mask_3_graphics_423 = new cjs.Graphics().p("As4L6IAA3zIZxAAIAAXzg");
	var mask_3_graphics_424 = new cjs.Graphics().p("As4MEIAA4HIZxAAIAAYHg");
	var mask_3_graphics_425 = new cjs.Graphics().p("As4MNIAA4ZIZxAAIAAYZg");
	var mask_3_graphics_426 = new cjs.Graphics().p("As4MXIAA4tIZxAAIAAYtg");
	var mask_3_graphics_427 = new cjs.Graphics().p("As4MgIAA5AIZxAAIAAZAg");
	var mask_3_graphics_428 = new cjs.Graphics().p("As4MqIAA5TIZxAAIAAZTg");
	var mask_3_graphics_429 = new cjs.Graphics().p("As4M0IAA5nIZxAAIAAZng");
	var mask_3_graphics_430 = new cjs.Graphics().p("As4M+IAA57IZxAAIAAZ7g");
	var mask_3_graphics_431 = new cjs.Graphics().p("As4NHIAA6NIZxAAIAAaNg");
	var mask_3_graphics_432 = new cjs.Graphics().p("As4NRIAA6hIZxAAIAAahg");
	var mask_3_graphics_433 = new cjs.Graphics().p("As4NbIAA61IZxAAIAAa1g");
	var mask_3_graphics_434 = new cjs.Graphics().p("As4NkIAA7HIZxAAIAAbHg");
	var mask_3_graphics_435 = new cjs.Graphics().p("As4NuIAA7bIZxAAIAAbbg");
	var mask_3_graphics_436 = new cjs.Graphics().p("As4N4IAA7vIZxAAIAAbvg");
	var mask_3_graphics_437 = new cjs.Graphics().p("As4OBIAA8BIZxAAIAAcBg");
	var mask_3_graphics_438 = new cjs.Graphics().p("As4OLIAA8VIZxAAIAAcVg");
	var mask_3_graphics_439 = new cjs.Graphics().p("As4OVIAA8pIZxAAIAAcpg");
	var mask_3_graphics_440 = new cjs.Graphics().p("As4OfIAA88IZxAAIAAc8g");
	var mask_3_graphics_441 = new cjs.Graphics().p("As4OoIAA9PIZxAAIAAdPg");
	var mask_3_graphics_442 = new cjs.Graphics().p("Agse4IAA9kIZxAAIAAdkg");
	var mask_3_graphics_443 = new cjs.Graphics().p("As4PRIAA+hIZxAAIAAehg");
	var mask_3_graphics_444 = new cjs.Graphics().p("Agsf3IAA/hIZxAAIAAfhg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(355).to({graphics:mask_3_graphics_355,x:160.5,y:113.4}).wait(1).to({graphics:mask_3_graphics_356,x:238.5,y:217.5}).wait(1).to({graphics:mask_3_graphics_357,x:238.5,y:218.4}).wait(1).to({graphics:mask_3_graphics_358,x:238.5,y:219.4}).wait(1).to({graphics:mask_3_graphics_359,x:238.5,y:220.4}).wait(1).to({graphics:mask_3_graphics_360,x:238.5,y:221.3}).wait(1).to({graphics:mask_3_graphics_361,x:238.5,y:222.3}).wait(1).to({graphics:mask_3_graphics_362,x:238.5,y:223.3}).wait(1).to({graphics:mask_3_graphics_363,x:238.5,y:224.3}).wait(1).to({graphics:mask_3_graphics_364,x:238.5,y:225.2}).wait(1).to({graphics:mask_3_graphics_365,x:238.5,y:226.2}).wait(1).to({graphics:mask_3_graphics_366,x:238.5,y:227.2}).wait(1).to({graphics:mask_3_graphics_367,x:238.5,y:228.1}).wait(1).to({graphics:mask_3_graphics_368,x:238.5,y:229.1}).wait(1).to({graphics:mask_3_graphics_369,x:238.5,y:230.1}).wait(1).to({graphics:mask_3_graphics_370,x:238.5,y:231}).wait(1).to({graphics:mask_3_graphics_371,x:238.5,y:232}).wait(1).to({graphics:mask_3_graphics_372,x:238.5,y:232.9}).wait(1).to({graphics:mask_3_graphics_373,x:238.5,y:233.9}).wait(1).to({graphics:mask_3_graphics_374,x:238.5,y:234.9}).wait(1).to({graphics:mask_3_graphics_375,x:238.5,y:235.8}).wait(1).to({graphics:mask_3_graphics_376,x:238.5,y:236.8}).wait(1).to({graphics:mask_3_graphics_377,x:238.5,y:237.8}).wait(1).to({graphics:mask_3_graphics_378,x:238.5,y:238.7}).wait(1).to({graphics:mask_3_graphics_379,x:238.5,y:239.7}).wait(1).to({graphics:mask_3_graphics_380,x:238.5,y:240.7}).wait(1).to({graphics:mask_3_graphics_381,x:238.5,y:241.6}).wait(1).to({graphics:mask_3_graphics_382,x:238.5,y:242.6}).wait(1).to({graphics:mask_3_graphics_383,x:238.5,y:243.6}).wait(1).to({graphics:mask_3_graphics_384,x:238.5,y:244.5}).wait(1).to({graphics:mask_3_graphics_385,x:238.5,y:245.5}).wait(1).to({graphics:mask_3_graphics_386,x:238.5,y:246.5}).wait(1).to({graphics:mask_3_graphics_387,x:238.5,y:247.4}).wait(1).to({graphics:mask_3_graphics_388,x:238.5,y:248.4}).wait(1).to({graphics:mask_3_graphics_389,x:238.5,y:249.4}).wait(1).to({graphics:mask_3_graphics_390,x:238.5,y:250.3}).wait(1).to({graphics:mask_3_graphics_391,x:238.5,y:251.3}).wait(1).to({graphics:mask_3_graphics_392,x:238.5,y:252.3}).wait(1).to({graphics:mask_3_graphics_393,x:238.5,y:253.2}).wait(1).to({graphics:mask_3_graphics_394,x:238.5,y:254.2}).wait(1).to({graphics:mask_3_graphics_395,x:238.5,y:255.2}).wait(1).to({graphics:mask_3_graphics_396,x:238.5,y:256.1}).wait(1).to({graphics:mask_3_graphics_397,x:238.5,y:257.1}).wait(1).to({graphics:mask_3_graphics_398,x:238.5,y:258.1}).wait(1).to({graphics:mask_3_graphics_399,x:238.5,y:259}).wait(1).to({graphics:mask_3_graphics_400,x:238.5,y:260}).wait(1).to({graphics:mask_3_graphics_401,x:238.5,y:261}).wait(1).to({graphics:mask_3_graphics_402,x:238.5,y:261.9}).wait(1).to({graphics:mask_3_graphics_403,x:238.5,y:262.9}).wait(1).to({graphics:mask_3_graphics_404,x:238.5,y:263.9}).wait(1).to({graphics:mask_3_graphics_405,x:238.5,y:264.8}).wait(1).to({graphics:mask_3_graphics_406,x:238.5,y:265.8}).wait(1).to({graphics:mask_3_graphics_407,x:238.5,y:266.8}).wait(1).to({graphics:mask_3_graphics_408,x:238.5,y:267.7}).wait(1).to({graphics:mask_3_graphics_409,x:238.5,y:268.7}).wait(1).to({graphics:mask_3_graphics_410,x:238.5,y:269.7}).wait(1).to({graphics:mask_3_graphics_411,x:238.5,y:270.6}).wait(1).to({graphics:mask_3_graphics_412,x:238.5,y:271.6}).wait(1).to({graphics:mask_3_graphics_413,x:238.5,y:272.6}).wait(1).to({graphics:mask_3_graphics_414,x:238.5,y:273.5}).wait(1).to({graphics:mask_3_graphics_415,x:238.5,y:274.5}).wait(1).to({graphics:mask_3_graphics_416,x:238.5,y:275.5}).wait(1).to({graphics:mask_3_graphics_417,x:238.5,y:276.4}).wait(1).to({graphics:mask_3_graphics_418,x:238.5,y:277.4}).wait(1).to({graphics:mask_3_graphics_419,x:238.5,y:278.4}).wait(1).to({graphics:mask_3_graphics_420,x:238.5,y:279.3}).wait(1).to({graphics:mask_3_graphics_421,x:238.5,y:280.3}).wait(1).to({graphics:mask_3_graphics_422,x:238.5,y:281.3}).wait(1).to({graphics:mask_3_graphics_423,x:238.5,y:282.2}).wait(1).to({graphics:mask_3_graphics_424,x:238.5,y:283.2}).wait(1).to({graphics:mask_3_graphics_425,x:238.5,y:284.2}).wait(1).to({graphics:mask_3_graphics_426,x:238.5,y:285.1}).wait(1).to({graphics:mask_3_graphics_427,x:238.5,y:286.1}).wait(1).to({graphics:mask_3_graphics_428,x:238.5,y:287}).wait(1).to({graphics:mask_3_graphics_429,x:238.5,y:288}).wait(1).to({graphics:mask_3_graphics_430,x:238.5,y:289}).wait(1).to({graphics:mask_3_graphics_431,x:238.5,y:289.9}).wait(1).to({graphics:mask_3_graphics_432,x:238.5,y:290.9}).wait(1).to({graphics:mask_3_graphics_433,x:238.5,y:291.9}).wait(1).to({graphics:mask_3_graphics_434,x:238.5,y:292.8}).wait(1).to({graphics:mask_3_graphics_435,x:238.5,y:293.8}).wait(1).to({graphics:mask_3_graphics_436,x:238.5,y:294.8}).wait(1).to({graphics:mask_3_graphics_437,x:238.5,y:295.8}).wait(1).to({graphics:mask_3_graphics_438,x:238.5,y:296.7}).wait(1).to({graphics:mask_3_graphics_439,x:238.5,y:297.7}).wait(1).to({graphics:mask_3_graphics_440,x:238.5,y:298.7}).wait(1).to({graphics:mask_3_graphics_441,x:238.5,y:299.6}).wait(1).to({graphics:mask_3_graphics_442,x:160.5,y:197.6}).wait(1).to({graphics:mask_3_graphics_443,x:238.5,y:303.8}).wait(1).to({graphics:mask_3_graphics_444,x:160.5,y:203.9}).wait(350));

	// Layer 8
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("AodmTQGvnVFSh9QFTh9gbE3QgbE3h9DcIqdUi");
	this.shape_4.setTransform(219.2,291.6);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(355).to({_off:false},0).wait(439));

	// Layer 7 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_285 = new cjs.Graphics().p("AiEYWQl9kUhRnNMAjygFtQBCHPkTF9QkbGFnaBLQhlAQhgAAQloAAkxjeg");
	var mask_4_graphics_286 = new cjs.Graphics().p("AiyXzQlvkng5nQMAkBgD5QAsHRknFvQkuF2ndA0QhGAHhEAAQmLAAk+kBg");
	var mask_4_graphics_287 = new cjs.Graphics().p("AjeXOQlfk6ginSMAkLgCEQAUHTk5FfQlBFnnfAbQgmACglAAQmxAAlJkmg");
	var mask_4_graphics_288 = new cjs.Graphics().p("AkIWmQlPlLgKnUMAkOgAOQgEHUlKFPQlSFVngADIgJAAQnbAAlRlOg");
	var mask_4_graphics_289 = new cjs.Graphics().p("AH0bzQnggVlDliQk+lcAOnTMAkMABnQgcHTlbE+QlMEwm7AAIg7gCg");
	var mask_4_graphics_290 = new cjs.Graphics().p("AG8bvQndgukylyQkslrAmnSMAkEADdQg0HQlqEsQlDEKmTAAQg9AAg+gGg");
	var mask_4_graphics_291 = new cjs.Graphics().p("AGGboQnahGkfmBQkZl6A+nPMAj1AFRQhLHNl5EZQk2DnlwAAQhaAAhdgOg");
	var mask_4_graphics_292 = new cjs.Graphics().p("AFSbeQnWhekLmPQkFmIBVnMMAjhAHGQhiHJmHEFQknDFlPAAQh2AAh7gYg");
	var mask_4_graphics_293 = new cjs.Graphics().p("AEgbRQnRh2j2mcQjxmUBsnHMAjIAI4Qh5HDmUDyQkXCmkwAAQiRAAiXgmg");
	var mask_4_graphics_294 = new cjs.Graphics().p("ADwbBQnKiNjhmoQjcmgCDnBMAioAKpQiQG9mgDdQkECKkSAAQisAAiyg3g");
	var mask_4_graphics_295 = new cjs.Graphics().p("ADDavQnCikjMmzQjHmrCam6MAiCAMZQimG1mqDHQjxBwj1AAQjHAAjKhJg");
	var mask_4_graphics_296 = new cjs.Graphics().p("ACYaaQm6i7i0m9Qiym0CwmxMAhYAOGQi9GsmzCxQjbBZjaAAQjiAAjhhfg");
	var mask_4_graphics_297 = new cjs.Graphics().p("ABvaCQmvjRienFQibm9DFmoMAgnAPxQjRGim8CbQjDBEjAAAQj9AAj3h3g");
	var mask_4_graphics_298 = new cjs.Graphics().p("ABJZoQmkjniHnNQiEnEDbmdIfxRaQjnGWnDCFQiqAxikAAQkaAAkLiRg");
	var mask_4_graphics_299 = new cjs.Graphics().p("AAmZLQmYj8hvnTQhtnKDvmSIe2TAQj7GKnJBuQiPAiiKAAQk4AAkcivg");
	var mask_4_graphics_300 = new cjs.Graphics().p("AAGYsQmLkRhYnYQhVnOEDmFId2UhQkPF+nOBWQhzAVhuAAQlYAAkrjOg");
	var mask_4_graphics_301 = new cjs.Graphics().p("AgXYKQl+kkg/ncQg+nSEWl3IcxWAQkhFvnSA/QhVALhSAAQl5AAk5jwg");
	var mask_4_graphics_302 = new cjs.Graphics().p("AgyXmQluk3gnneQgnnWEqlnIbnXbQk0FgnVAnQg1AEg0AAQmeAAlFkUg");
	var mask_4_graphics_303 = new cjs.Graphics().p("AhJW/QlelJgPnfQgPnXE7lYIaZYzQlFFQnWAPIgpAAQnGAAlOk7g");
	var mask_4_graphics_304 = new cjs.Graphics().p("ALOb7QnggKlMlaQlNlbAKngQAJnWFMlIIZGaGQlME3nGAAIgaAAg");
	var mask_4_graphics_305 = new cjs.Graphics().p("AKqb4Qnfgik6lqQk7lrAinfQAhnVFck3IXvbWQlCEQmdAAQgtAAgugEg");
	var mask_4_graphics_306 = new cjs.Graphics().p("AKGbzQncg6knl7Qkpl6A6ncQA5nTFrklIWWchQk3Drl4AAQhLAAhOgJg");
	var mask_4_graphics_307 = new cjs.Graphics().p("AJkbrQnZhTkUmIQkUmJBSnZQBQnPF6kTIU3dnQkoDKlWAAQhoAAhsgSg");
	var mask_4_graphics_308 = new cjs.Graphics().p("AJEbfQnVhqj/mWQkBmWBqnVQBonKGHj/ITVeoQkYCrk1AAQiEAAiIgfg");
	var mask_4_graphics_309 = new cjs.Graphics().p("AIkbRQnOiCjrmiQjrmjCBnOQB/nEGTjrIRxfkQkGCOkYAAQieAAikgug");
	var mask_4_graphics_310 = new cjs.Graphics().p("AIGbAQnHiZjVmuQjWmuCZnHQCWm9GejWMAQJAgbQjzB0j6AAQi5AAi+hAg");
	var mask_4_graphics_311 = new cjs.Graphics().p("AHqatQm/iwi/m5QjAm4Cwm/QCrm1GqjBMAOeAhNQjdBcjfABQjUAAjVhUg");
	var mask_4_graphics_312 = new cjs.Graphics().p("AHPaWQm1jGipnCQipnBDGm1QDBmsGzirMAMxAh5QjFBHjEAAQjvAAjshrg");
	var mask_4_graphics_313 = new cjs.Graphics().p("AG2Z+QmrjdiRnJQiSnKDcmqQDWmiG7iVMALCAigQitA0ioAAQkMAAkAiDg");
	var mask_4_graphics_314 = new cjs.Graphics().p("AGfZiQmfjyh6nQQh7nQDxmfQDsmWHCh+MAJRAjAQiTAliOAAQkoAAkTigg");
	var mask_4_graphics_315 = new cjs.Graphics().p("AGJZEQmRkGhjnWQhjnWEFmSQEAmKHIhnMAHfAjcQh3AXhyAAQlIAAkki+g");
	var mask_4_graphics_316 = new cjs.Graphics().p("AF2YkQmEkbhLnaQhLnaEZmEQEUl9HNhQMAFrAjxQhaANhWAAQloAAkzjeg");
	var mask_4_graphics_317 = new cjs.Graphics().p("AFkYBQl0kug0ndQgzneEtl1QEnluHQg4MAD3AkAQg7AFg6AAQmLAAlAkBg");
	var mask_4_graphics_318 = new cjs.Graphics().p("AFVXcQlllBgbnfQgbngE/lkQE5lfHTghMACBAkKIg2ABQmxAAlKkng");
	var mask_4_graphics_319 = new cjs.Graphics().p("AFHW0QlUlSgDngQgCnhFQlUQFLlOHUgKMAAMAkOQnUgFlOlKg");
	var mask_4_graphics_320 = new cjs.Graphics().p("AEdWYQlJleAPngQAOngFclIQFWlDHUAHMgBEAkNQnTgVlDlWg");
	var mask_4_graphics_321 = new cjs.Graphics().p("ADtV8Qk8lpAfnfQAfnfFnk8QFik3HTAXMgCVAkJQnSglk3lhg");
	var mask_4_graphics_322 = new cjs.Graphics().p("AC/VgQkvl0AvneQAwneFykvQFskrHRAoMgDkAkCQnQg1krlrg");
	var mask_4_graphics_323 = new cjs.Graphics().p("ACSVDQkil+BAncQBAncF8kiQF2keHQA4MgE0Aj5QnOhFkel2g");
	var mask_4_graphics_324 = new cjs.Graphics().p("ABmUnQkVmIBRnaQBQnYGGkWQGAkRHOBHMgGDAjuQnMhVkRl/g");
	var mask_4_graphics_325 = new cjs.Graphics().p("AA8UKQkImRBhnXQBhnVGPkJQGJkDHLBXMgHSAjfQnIhlkDmIg");
	var mask_4_graphics_326 = new cjs.Graphics().p("AASTtQj5maBxnTQBxnSGYj6QGSj2HIBnMgIhAjOQnEh1j2mRg");
	var mask_4_graphics_327 = new cjs.Graphics().p("AgVTQQjsmiCBnPQCAnOGijsQGajnHEB3MgJuAi4QnAiEjnmZg");
	var mask_4_graphics_328 = new cjs.Graphics().p("Ag8SzQjdmqCRnKQCQnJGqjeQGijZG/CHMgK7AiiQm7iUjZmhg");
	var mask_4_graphics_329 = new cjs.Graphics().p("AhhSWQjOmyCgnFQCgnDGxjPQGpjKG7CWMgMHAiIQm2iijKmpg");
	var mask_4_graphics_330 = new cjs.Graphics().p("AiFR5Qi/m5Cwm/QCvm9G5jAQGvi7G2ClMgNSAhsQmxiyi7mvg");
	var mask_4_graphics_331 = new cjs.Graphics().p("AinRcQiwm/DAm4QC+m4G/iwQG2itGvC1MgOcAhNQmqjAism2g");
	var mask_4_graphics_332 = new cjs.Graphics().p("AjIRAQignFDPmyQDNmxHFigQG7ieGpDDMgPlAgtQmijPiem7g");
	var mask_4_graphics_333 = new cjs.Graphics().p("AjnQjQiQnKDdmrQDdmpHJiRQHBiNGiDRMgQtAgJQmbjeiOnAg");
	var mask_4_graphics_334 = new cjs.Graphics().p("AkFQHQiAnPDsmjQDrmhHOiBQHGh+GaDgIx0fjQmSjsh/nFg");
	var mask_4_graphics_335 = new cjs.Graphics().p("AkgPrQhxnTD6maQD6mZHShxQHKhvGSDuIy4e7QmKj6hvnJg");
	var mask_4_graphics_336 = new cjs.Graphics().p("Ak6PQQhhnXEImRQEHmRHXhhQHNhfGKD7Iz7eRQmCkHhfnMg");
	var mask_4_graphics_337 = new cjs.Graphics().p("AlSO0QhRnZEWmIQEUmIHahRQHQhPGBEJI08dkQl5kUhPnQg");
	var mask_4_graphics_338 = new cjs.Graphics().p("AlpOZQhAncEjl+QEhl+HchAQHThAF4EWI18c1QlvkghAnTg");
	var mask_4_graphics_339 = new cjs.Graphics().p("Al9N/QgxneEwl1QEvlzHdgwQHVgwFuEiI25cFQllktgwnUg");
	var mask_4_graphics_340 = new cjs.Graphics().p("AmQNlQggngE8lqQE7loHfghQHWgfFkEuI31bSQlbk5ggnVg");
	var mask_4_graphics_341 = new cjs.Graphics().p("AmiNLQgPngFIlfQFHleHggQQHXgQFaE7I4wacQlRlEgQnWg");
	var mask_4_graphics_342 = new cjs.Graphics().p("AmxMyQABnhFUlSQFTlUHgABQHXAAFPFGI5oZmQlGlQAAnWg");
	var mask_4_graphics_343 = new cjs.Graphics().p("Am+MZQARnhFflGQFelIHgARQHXAQFEFQI6gYuQk6laARnWg");
	var mask_4_graphics_344 = new cjs.Graphics().p("AnKMAQAhnfFrk7QFpk7HfAhQHVAgE5FbI7UX0QkullAgnWg");
	var mask_4_graphics_345 = new cjs.Graphics().p("AnULoQAyneF0kuQF0kvHeAyQHUAwEsFmI8HW2QkhlvAwnUg");
	var mask_4_graphics_346 = new cjs.Graphics().p("AncLRQBCncF/khQF+kiHbBBQHTBBEfFvI83V5QkVl5BAnSg");
	var mask_4_graphics_347 = new cjs.Graphics().p("AniK6QBSnZGIkUQGIkVHZBSQHQBQETF5I9mU5QkImCBQnQg");
	var mask_4_graphics_348 = new cjs.Graphics().p("AnnKkQBinWGRkHQGSkHHWBhQHNBgEGGDI+TT3Qj6mKBfnNg");
	var mask_4_graphics_349 = new cjs.Graphics().p("AnpKOQBynSGZj5QGbj6HSByQHKBwD4GLI+8S1QjtmUBvnJg");
	var mask_4_graphics_350 = new cjs.Graphics().p("AnqJ5QCCnOGijrQGjjrHOCBQHFB/DrGUI/kRwQjgmbB/nFg");
	var mask_4_graphics_351 = new cjs.Graphics().p("AnpJlQCSnKGqjcQGqjdHKCRQHACODeGcMggLAQrQjRmiCOnBg");
	var mask_4_graphics_352 = new cjs.Graphics().p("AnmJSQCinFGwjOQGyjOHFChQG7CcDPGjMggtAPlQjDmpCdm7g");
	var mask_4_graphics_353 = new cjs.Graphics().p("AnhI/QCxm/G4i/QG4i/G/CwQG2CrDBGqMghOAOdQi1mwCsm1g");
	var mask_4_graphics_354 = new cjs.Graphics().p("AnaItQDAm5G+iwQG/iwG4C/QGwC6CyGxMghsANUQimm2C7mvg");
	var mask_4_graphics_355 = new cjs.Graphics().p("AnRIbQDPmyHDigQHFihGyDOQGpDJCjG2MgiIAMKQiWm7DJmpg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(285).to({graphics:mask_4_graphics_285,x:170.9,y:178}).wait(1).to({graphics:mask_4_graphics_286,x:170.9,y:178}).wait(1).to({graphics:mask_4_graphics_287,x:170.9,y:178}).wait(1).to({graphics:mask_4_graphics_288,x:170.9,y:178}).wait(1).to({graphics:mask_4_graphics_289,x:170.9,y:178.1}).wait(1).to({graphics:mask_4_graphics_290,x:170.7,y:178.1}).wait(1).to({graphics:mask_4_graphics_291,x:170.3,y:178.2}).wait(1).to({graphics:mask_4_graphics_292,x:169.8,y:178.2}).wait(1).to({graphics:mask_4_graphics_293,x:169.2,y:178.3}).wait(1).to({graphics:mask_4_graphics_294,x:168.4,y:178.4}).wait(1).to({graphics:mask_4_graphics_295,x:167.4,y:178.4}).wait(1).to({graphics:mask_4_graphics_296,x:166.4,y:178.5}).wait(1).to({graphics:mask_4_graphics_297,x:165.1,y:178.5}).wait(1).to({graphics:mask_4_graphics_298,x:163.8,y:178.5}).wait(1).to({graphics:mask_4_graphics_299,x:162.3,y:178.6}).wait(1).to({graphics:mask_4_graphics_300,x:160.7,y:178.6}).wait(1).to({graphics:mask_4_graphics_301,x:158.9,y:178.6}).wait(1).to({graphics:mask_4_graphics_302,x:157.1,y:178.6}).wait(1).to({graphics:mask_4_graphics_303,x:155.1,y:178.6}).wait(1).to({graphics:mask_4_graphics_304,x:153,y:178.7}).wait(1).to({graphics:mask_4_graphics_305,x:150.8,y:178.8}).wait(1).to({graphics:mask_4_graphics_306,x:148.6,y:178.8}).wait(1).to({graphics:mask_4_graphics_307,x:146.2,y:178.9}).wait(1).to({graphics:mask_4_graphics_308,x:143.7,y:179}).wait(1).to({graphics:mask_4_graphics_309,x:141.2,y:179.1}).wait(1).to({graphics:mask_4_graphics_310,x:138.6,y:179.2}).wait(1).to({graphics:mask_4_graphics_311,x:135.9,y:179.3}).wait(1).to({graphics:mask_4_graphics_312,x:133.1,y:179.3}).wait(1).to({graphics:mask_4_graphics_313,x:130.3,y:179.3}).wait(1).to({graphics:mask_4_graphics_314,x:127.5,y:179.4}).wait(1).to({graphics:mask_4_graphics_315,x:124.6,y:179.4}).wait(1).to({graphics:mask_4_graphics_316,x:121.7,y:179.4}).wait(1).to({graphics:mask_4_graphics_317,x:118.8,y:179.4}).wait(1).to({graphics:mask_4_graphics_318,x:115.8,y:179.5}).wait(1).to({graphics:mask_4_graphics_319,x:112.9,y:179.5}).wait(1).to({graphics:mask_4_graphics_320,x:114.3,y:179.5}).wait(1).to({graphics:mask_4_graphics_321,x:116.3,y:179.4}).wait(1).to({graphics:mask_4_graphics_322,x:118.2,y:179.2}).wait(1).to({graphics:mask_4_graphics_323,x:120.2,y:179}).wait(1).to({graphics:mask_4_graphics_324,x:122.2,y:178.7}).wait(1).to({graphics:mask_4_graphics_325,x:124.1,y:178.3}).wait(1).to({graphics:mask_4_graphics_326,x:126.1,y:177.9}).wait(1).to({graphics:mask_4_graphics_327,x:128,y:177.3}).wait(1).to({graphics:mask_4_graphics_328,x:129.9,y:176.8}).wait(1).to({graphics:mask_4_graphics_329,x:131.8,y:176.1}).wait(1).to({graphics:mask_4_graphics_330,x:133.7,y:175.4}).wait(1).to({graphics:mask_4_graphics_331,x:135.5,y:174.6}).wait(1).to({graphics:mask_4_graphics_332,x:137.3,y:173.8}).wait(1).to({graphics:mask_4_graphics_333,x:139.1,y:172.9}).wait(1).to({graphics:mask_4_graphics_334,x:140.8,y:172}).wait(1).to({graphics:mask_4_graphics_335,x:142.5,y:171}).wait(1).to({graphics:mask_4_graphics_336,x:144.2,y:169.9}).wait(1).to({graphics:mask_4_graphics_337,x:145.8,y:168.8}).wait(1).to({graphics:mask_4_graphics_338,x:147.4,y:167.6}).wait(1).to({graphics:mask_4_graphics_339,x:148.9,y:166.4}).wait(1).to({graphics:mask_4_graphics_340,x:150.4,y:165.1}).wait(1).to({graphics:mask_4_graphics_341,x:151.9,y:163.8}).wait(1).to({graphics:mask_4_graphics_342,x:153.3,y:162.4}).wait(1).to({graphics:mask_4_graphics_343,x:154.7,y:160.9}).wait(1).to({graphics:mask_4_graphics_344,x:156,y:159.5}).wait(1).to({graphics:mask_4_graphics_345,x:157.2,y:157.9}).wait(1).to({graphics:mask_4_graphics_346,x:158.4,y:156.4}).wait(1).to({graphics:mask_4_graphics_347,x:159.6,y:154.8}).wait(1).to({graphics:mask_4_graphics_348,x:160.7,y:153.1}).wait(1).to({graphics:mask_4_graphics_349,x:161.7,y:151.5}).wait(1).to({graphics:mask_4_graphics_350,x:162.7,y:149.7}).wait(1).to({graphics:mask_4_graphics_351,x:163.7,y:148}).wait(1).to({graphics:mask_4_graphics_352,x:164.5,y:146.2}).wait(1).to({graphics:mask_4_graphics_353,x:165.4,y:144.4}).wait(1).to({graphics:mask_4_graphics_354,x:166.1,y:142.6}).wait(1).to({graphics:mask_4_graphics_355,x:166.8,y:140.7}).wait(439));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("AodE7QGvnUFSh9QFTh9gbE3QgFA3gIAy");
	this.shape_5.setTransform(219.2,219.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("AodD9QGvnUFSh8QFTh9gbE3QgbE1h9Dc");
	this.shape_6.setTransform(219.2,225.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(20,1,1).p("AodmTQGvnVFSh9QFTh9gbE3QgbE3h9DcIqdUi");
	this.shape_7.setTransform(219.2,291.6);

	var maskedShapeInstanceList = [this.shape_5,this.shape_6,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5}]},285).to({state:[{t:this.shape_6}]},21).to({state:[{t:this.shape_7}]},20).wait(468));

	// Layer 18
	this.instance_3 = new lib.ar1("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(106.7,75.4,1,1,0,137.6,-42.4,-0.7,0.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(785));

	// Layer 5 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_107 = new cjs.Graphics().p("AoHUUIAAnWIXvAAIAAHWg");
	var mask_5_graphics_108 = new cjs.Graphics().p("Ar3D0IAAnnIXvAAIAAHng");
	var mask_5_graphics_109 = new cjs.Graphics().p("Ar3D9IAAn5IXvAAIAAH5g");
	var mask_5_graphics_110 = new cjs.Graphics().p("Ar3EGIAAoLIXvAAIAAILg");
	var mask_5_graphics_111 = new cjs.Graphics().p("Ar3EPIAAodIXvAAIAAIdg");
	var mask_5_graphics_112 = new cjs.Graphics().p("Ar3EYIAAovIXvAAIAAIvg");
	var mask_5_graphics_113 = new cjs.Graphics().p("Ar3EhIAApBIXvAAIAAJBg");
	var mask_5_graphics_114 = new cjs.Graphics().p("Ar3EqIAApTIXvAAIAAJTg");
	var mask_5_graphics_115 = new cjs.Graphics().p("Ar3EzIAAplIXvAAIAAJlg");
	var mask_5_graphics_116 = new cjs.Graphics().p("Ar3E8IAAp3IXvAAIAAJ3g");
	var mask_5_graphics_117 = new cjs.Graphics().p("Ar3FFIAAqJIXvAAIAAKJg");
	var mask_5_graphics_118 = new cjs.Graphics().p("Ar3FOIAAqbIXvAAIAAKbg");
	var mask_5_graphics_119 = new cjs.Graphics().p("Ar3FXIAAqtIXvAAIAAKtg");
	var mask_5_graphics_120 = new cjs.Graphics().p("Ar3FgIAAq/IXvAAIAAK/g");
	var mask_5_graphics_121 = new cjs.Graphics().p("Ar3FpIAArRIXvAAIAALRg");
	var mask_5_graphics_122 = new cjs.Graphics().p("Ar3FyIAArjIXvAAIAALjg");
	var mask_5_graphics_123 = new cjs.Graphics().p("Ar3F7IAAr1IXvAAIAAL1g");
	var mask_5_graphics_124 = new cjs.Graphics().p("Ar3GEIAAsHIXvAAIAAMHg");
	var mask_5_graphics_125 = new cjs.Graphics().p("Ar3GNIAAsZIXvAAIAAMZg");
	var mask_5_graphics_126 = new cjs.Graphics().p("Ar3GWIAAsrIXvAAIAAMrg");
	var mask_5_graphics_127 = new cjs.Graphics().p("Ar3GfIAAs9IXvAAIAAM9g");
	var mask_5_graphics_128 = new cjs.Graphics().p("Ar3GoIAAtPIXvAAIAANPg");
	var mask_5_graphics_129 = new cjs.Graphics().p("Ar3GxIAAthIXvAAIAANhg");
	var mask_5_graphics_130 = new cjs.Graphics().p("Ar3G6IAAtzIXvAAIAANzg");
	var mask_5_graphics_131 = new cjs.Graphics().p("Ar3HDIAAuFIXvAAIAAOFg");
	var mask_5_graphics_132 = new cjs.Graphics().p("Ar3HMIAAuXIXvAAIAAOXg");
	var mask_5_graphics_133 = new cjs.Graphics().p("Ar3HVIAAupIXvAAIAAOpg");
	var mask_5_graphics_134 = new cjs.Graphics().p("Ar3HeIAAu7IXvAAIAAO7g");
	var mask_5_graphics_135 = new cjs.Graphics().p("Ar3HnIAAvNIXvAAIAAPNg");
	var mask_5_graphics_136 = new cjs.Graphics().p("Ar3HwIAAvfIXvAAIAAPfg");
	var mask_5_graphics_137 = new cjs.Graphics().p("Ar3H5IAAvxIXvAAIAAPxg");
	var mask_5_graphics_138 = new cjs.Graphics().p("Ar3ICIAAwDIXvAAIAAQDg");
	var mask_5_graphics_139 = new cjs.Graphics().p("Ar3ILIAAwVIXvAAIAAQVg");
	var mask_5_graphics_140 = new cjs.Graphics().p("Ar3IUIAAwnIXvAAIAAQng");
	var mask_5_graphics_141 = new cjs.Graphics().p("Ar3IdIAAw5IXvAAIAAQ5g");
	var mask_5_graphics_142 = new cjs.Graphics().p("Ar3ImIAAxLIXvAAIAARLg");
	var mask_5_graphics_143 = new cjs.Graphics().p("Ar3IvIAAxdIXvAAIAARdg");
	var mask_5_graphics_144 = new cjs.Graphics().p("Ar3I4IAAxvIXvAAIAARvg");
	var mask_5_graphics_145 = new cjs.Graphics().p("Ar3JAIAAx/IXvAAIAAR/g");
	var mask_5_graphics_146 = new cjs.Graphics().p("Ar3JIIAAyPIXvAAIAASPg");
	var mask_5_graphics_147 = new cjs.Graphics().p("Ar3JPIAAydIXvAAIAASdg");
	var mask_5_graphics_148 = new cjs.Graphics().p("Ar3JWIAAysIXvAAIAASsg");
	var mask_5_graphics_149 = new cjs.Graphics().p("Ar3JeIAAy7IXvAAIAAS7g");
	var mask_5_graphics_150 = new cjs.Graphics().p("Ar3JmIAAzLIXvAAIAATLg");
	var mask_5_graphics_151 = new cjs.Graphics().p("Ar3JtIAAzZIXvAAIAATZg");
	var mask_5_graphics_152 = new cjs.Graphics().p("Ar3J1IAAzpIXvAAIAATpg");
	var mask_5_graphics_153 = new cjs.Graphics().p("Ar3J9IAAz5IXvAAIAAT5g");
	var mask_5_graphics_154 = new cjs.Graphics().p("Ar3KEIAA0HIXvAAIAAUHg");
	var mask_5_graphics_155 = new cjs.Graphics().p("Ar3KMIAA0XIXvAAIAAUXg");
	var mask_5_graphics_156 = new cjs.Graphics().p("Ar3KTIAA0lIXvAAIAAUlg");
	var mask_5_graphics_157 = new cjs.Graphics().p("Ar3KbIAA01IXvAAIAAU1g");
	var mask_5_graphics_158 = new cjs.Graphics().p("Ar3KiIAA1DIXvAAIAAVDg");
	var mask_5_graphics_159 = new cjs.Graphics().p("Ar3KqIAA1TIXvAAIAAVTg");
	var mask_5_graphics_160 = new cjs.Graphics().p("Ar3KxIAA1iIXvAAIAAVig");
	var mask_5_graphics_161 = new cjs.Graphics().p("Ar3K5IAA1xIXvAAIAAVxg");
	var mask_5_graphics_162 = new cjs.Graphics().p("Ar3LBIAA2BIXvAAIAAWBg");
	var mask_5_graphics_163 = new cjs.Graphics().p("Ar3LIIAA2PIXvAAIAAWPg");
	var mask_5_graphics_164 = new cjs.Graphics().p("Ar3LQIAA2fIXvAAIAAWfg");
	var mask_5_graphics_165 = new cjs.Graphics().p("Ar3LXIAA2tIXvAAIAAWtg");
	var mask_5_graphics_166 = new cjs.Graphics().p("Ar3LgIAA2/IXvAAIAAW/g");
	var mask_5_graphics_167 = new cjs.Graphics().p("Ar3LoIAA3PIXvAAIAAXPg");
	var mask_5_graphics_168 = new cjs.Graphics().p("Ar3LwIAA3fIXvAAIAAXfg");
	var mask_5_graphics_169 = new cjs.Graphics().p("Ar3L4IAA3vIXvAAIAAXvg");
	var mask_5_graphics_170 = new cjs.Graphics().p("Ar3MBIAA4BIXvAAIAAYBg");
	var mask_5_graphics_171 = new cjs.Graphics().p("Ar3MJIAA4RIXvAAIAAYRg");
	var mask_5_graphics_172 = new cjs.Graphics().p("Ar3MRIAA4hIXvAAIAAYhg");
	var mask_5_graphics_173 = new cjs.Graphics().p("Ar3MZIAA4xIXvAAIAAYxg");
	var mask_5_graphics_174 = new cjs.Graphics().p("Ar3MhIAA5CIXvAAIAAZCg");
	var mask_5_graphics_175 = new cjs.Graphics().p("Ar3MqIAA5TIXvAAIAAZTg");
	var mask_5_graphics_176 = new cjs.Graphics().p("Ar3MyIAA5jIXvAAIAAZjg");
	var mask_5_graphics_177 = new cjs.Graphics().p("Ar3M6IAA5zIXvAAIAAZzg");
	var mask_5_graphics_178 = new cjs.Graphics().p("Ar3NCIAA6DIXvAAIAAaDg");
	var mask_5_graphics_179 = new cjs.Graphics().p("Ar3NLIAA6VIXvAAIAAaVg");
	var mask_5_graphics_180 = new cjs.Graphics().p("Ar3NTIAA6lIXvAAIAAalg");
	var mask_5_graphics_181 = new cjs.Graphics().p("Ar3NbIAA61IXvAAIAAa1g");
	var mask_5_graphics_182 = new cjs.Graphics().p("Ar3NkIAA7GIXvAAIAAbGg");
	var mask_5_graphics_183 = new cjs.Graphics().p("Ar3NsIAA7XIXvAAIAAbXg");
	var mask_5_graphics_184 = new cjs.Graphics().p("Ar3N0IAA7nIXvAAIAAbng");
	var mask_5_graphics_185 = new cjs.Graphics().p("Ar3N8IAA73IXvAAIAAb3g");
	var mask_5_graphics_186 = new cjs.Graphics().p("Ar3ORIAA8gIXvAAIAAcgg");
	var mask_5_graphics_187 = new cjs.Graphics().p("Ar3OlIAA9JIXvAAIAAdJg");
	var mask_5_graphics_188 = new cjs.Graphics().p("Ar3O5IAA9xIXvAAIAAdxg");
	var mask_5_graphics_189 = new cjs.Graphics().p("AoHf3IAA+bIXvAAIAAebg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(107).to({graphics:mask_5_graphics_107,x:100,y:130}).wait(1).to({graphics:mask_5_graphics_108,x:124,y:237.5}).wait(1).to({graphics:mask_5_graphics_109,x:124,y:238.4}).wait(1).to({graphics:mask_5_graphics_110,x:124,y:239.3}).wait(1).to({graphics:mask_5_graphics_111,x:124,y:240.2}).wait(1).to({graphics:mask_5_graphics_112,x:124,y:241.1}).wait(1).to({graphics:mask_5_graphics_113,x:124,y:242}).wait(1).to({graphics:mask_5_graphics_114,x:124,y:242.9}).wait(1).to({graphics:mask_5_graphics_115,x:124,y:243.8}).wait(1).to({graphics:mask_5_graphics_116,x:124,y:244.7}).wait(1).to({graphics:mask_5_graphics_117,x:124,y:245.6}).wait(1).to({graphics:mask_5_graphics_118,x:124,y:246.5}).wait(1).to({graphics:mask_5_graphics_119,x:124,y:247.4}).wait(1).to({graphics:mask_5_graphics_120,x:124,y:248.3}).wait(1).to({graphics:mask_5_graphics_121,x:124,y:249.2}).wait(1).to({graphics:mask_5_graphics_122,x:124,y:250.1}).wait(1).to({graphics:mask_5_graphics_123,x:124,y:251}).wait(1).to({graphics:mask_5_graphics_124,x:124,y:251.9}).wait(1).to({graphics:mask_5_graphics_125,x:124,y:252.8}).wait(1).to({graphics:mask_5_graphics_126,x:124,y:253.7}).wait(1).to({graphics:mask_5_graphics_127,x:124,y:254.6}).wait(1).to({graphics:mask_5_graphics_128,x:124,y:255.5}).wait(1).to({graphics:mask_5_graphics_129,x:124,y:256.4}).wait(1).to({graphics:mask_5_graphics_130,x:124,y:257.3}).wait(1).to({graphics:mask_5_graphics_131,x:124,y:258.2}).wait(1).to({graphics:mask_5_graphics_132,x:124,y:259.1}).wait(1).to({graphics:mask_5_graphics_133,x:124,y:260}).wait(1).to({graphics:mask_5_graphics_134,x:124,y:260.9}).wait(1).to({graphics:mask_5_graphics_135,x:124,y:261.8}).wait(1).to({graphics:mask_5_graphics_136,x:124,y:262.7}).wait(1).to({graphics:mask_5_graphics_137,x:124,y:263.6}).wait(1).to({graphics:mask_5_graphics_138,x:124,y:264.5}).wait(1).to({graphics:mask_5_graphics_139,x:124,y:265.4}).wait(1).to({graphics:mask_5_graphics_140,x:124,y:266.3}).wait(1).to({graphics:mask_5_graphics_141,x:124,y:267.2}).wait(1).to({graphics:mask_5_graphics_142,x:124,y:268.1}).wait(1).to({graphics:mask_5_graphics_143,x:124,y:269}).wait(1).to({graphics:mask_5_graphics_144,x:124,y:269.9}).wait(1).to({graphics:mask_5_graphics_145,x:124,y:270.6}).wait(1).to({graphics:mask_5_graphics_146,x:124,y:271.4}).wait(1).to({graphics:mask_5_graphics_147,x:124,y:272.2}).wait(1).to({graphics:mask_5_graphics_148,x:124,y:272.9}).wait(1).to({graphics:mask_5_graphics_149,x:124,y:273.7}).wait(1).to({graphics:mask_5_graphics_150,x:124,y:274.4}).wait(1).to({graphics:mask_5_graphics_151,x:124,y:275.2}).wait(1).to({graphics:mask_5_graphics_152,x:124,y:275.9}).wait(1).to({graphics:mask_5_graphics_153,x:124,y:276.7}).wait(1).to({graphics:mask_5_graphics_154,x:124,y:277.5}).wait(1).to({graphics:mask_5_graphics_155,x:124,y:278.2}).wait(1).to({graphics:mask_5_graphics_156,x:124,y:279}).wait(1).to({graphics:mask_5_graphics_157,x:124,y:279.7}).wait(1).to({graphics:mask_5_graphics_158,x:124,y:280.5}).wait(1).to({graphics:mask_5_graphics_159,x:124,y:281.2}).wait(1).to({graphics:mask_5_graphics_160,x:124,y:282}).wait(1).to({graphics:mask_5_graphics_161,x:124,y:282.8}).wait(1).to({graphics:mask_5_graphics_162,x:124,y:283.5}).wait(1).to({graphics:mask_5_graphics_163,x:124,y:284.3}).wait(1).to({graphics:mask_5_graphics_164,x:124,y:285}).wait(1).to({graphics:mask_5_graphics_165,x:124,y:285.8}).wait(1).to({graphics:mask_5_graphics_166,x:124,y:286.6}).wait(1).to({graphics:mask_5_graphics_167,x:124,y:287.4}).wait(1).to({graphics:mask_5_graphics_168,x:124,y:288.3}).wait(1).to({graphics:mask_5_graphics_169,x:124,y:289.1}).wait(1).to({graphics:mask_5_graphics_170,x:124,y:289.9}).wait(1).to({graphics:mask_5_graphics_171,x:124,y:290.7}).wait(1).to({graphics:mask_5_graphics_172,x:124,y:291.6}).wait(1).to({graphics:mask_5_graphics_173,x:124,y:292.4}).wait(1).to({graphics:mask_5_graphics_174,x:124,y:293.2}).wait(1).to({graphics:mask_5_graphics_175,x:124,y:294.1}).wait(1).to({graphics:mask_5_graphics_176,x:124,y:294.9}).wait(1).to({graphics:mask_5_graphics_177,x:124,y:295.7}).wait(1).to({graphics:mask_5_graphics_178,x:124,y:296.6}).wait(1).to({graphics:mask_5_graphics_179,x:124,y:297.4}).wait(1).to({graphics:mask_5_graphics_180,x:124,y:298.2}).wait(1).to({graphics:mask_5_graphics_181,x:124,y:299}).wait(1).to({graphics:mask_5_graphics_182,x:124,y:299.9}).wait(1).to({graphics:mask_5_graphics_183,x:124,y:300.7}).wait(1).to({graphics:mask_5_graphics_184,x:124,y:301.5}).wait(1).to({graphics:mask_5_graphics_185,x:124,y:302.3}).wait(1).to({graphics:mask_5_graphics_186,x:124,y:304.4}).wait(1).to({graphics:mask_5_graphics_187,x:124,y:306.4}).wait(1).to({graphics:mask_5_graphics_188,x:124,y:308.4}).wait(1).to({graphics:mask_5_graphics_189,x:100,y:203.9}).wait(605));

	// Layer 4
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(20,1,1).p("AmvwrQGkjiDLBXQDNBXAuDkQAuDjisG2QidEojLF9QjcGai9Fy");
	this.shape_8.setTransform(133.3,273.9);
	this.shape_8._off = true;

	var maskedShapeInstanceList = [this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(107).to({_off:false},0).wait(687));

	// Layer 3 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_9 = new cjs.Graphics().p("AA/ZvQnShuj+mYQj9mYBunUQBrnJGKj8ITFeyQkVCmkxAAQiIAAiNghg");
	var mask_6_graphics_10 = new cjs.Graphics().p("AAvZoQnQh6jymfQjymfB5nQQB4nHGQjxISRfRQkMCYkhAAQiWAAibgpg");
	var mask_6_graphics_11 = new cjs.Graphics().p("AAfZgQnMiGjnmlQjommCGnNQCEnDGWjnIRcfwQkCCJkSAAQikAAipgxg");
	var mask_6_graphics_12 = new cjs.Graphics().p("AAQZXQnIiSjdmrQjcmrCSnKQCPm/GdjcMAQmAgMQj4B7kDAAQiyAAi2g6g");
	var mask_6_graphics_13 = new cjs.Graphics().p("AABZOQnEifjRmwQjRmxCenFQCbm8GijRMAPvAgnQjtBuj0AAQjAAAjDhDg");
	var mask_6_graphics_14 = new cjs.Graphics().p("AgMZDQnCiqjFm2QjGm2CqnBQCnm3GnjHMAO5AhBQjjBjjmAAQjNAAjOhPg");
	var mask_6_graphics_15 = new cjs.Graphics().p("AgaY4Qm9i2i6m7Qi6m7C2m8QCymzGsi7MAOBAhZQjXBXjYAAQjbAAjahag");
	var mask_6_graphics_16 = new cjs.Graphics().p("AgoYtQm4jCiunAQium/DBm4QC9muGyiwMANIAhwQjLBMjKAAQjpAAjmhlg");
	var mask_6_graphics_17 = new cjs.Graphics().p("Ag1YgQmyjNijnEQiinEDMmyQDJmpG1ilMAMQAiGQi/BBi7AAQj4AAjxhyg");
	var mask_6_graphics_18 = new cjs.Graphics().p("AhCYTQmtjYiWnJQiXnIDYmrQDUmlG5iZMALWAiZQixA4iuAAQkGAAj8h/g");
	var mask_6_graphics_19 = new cjs.Graphics().p("AhOYFQmnjjiKnMQiLnMDjmmQDfmfG9iNMAKcAirQikAvigAAQkVAAkGiNg");
	var mask_6_graphics_20 = new cjs.Graphics().p("AhaX3Qmgjvh/nPQh+nQDumfQDqmZHAiBMAJiAi8QiXAmiSAAQkkAAkQibg");
	var mask_6_graphics_21 = new cjs.Graphics().p("AhlXoQmaj6hynSQhynTD5mZQD0mSHDh2MAInAjLQiJAfiEAAQkzAAkZiqg");
	var mask_6_graphics_22 = new cjs.Graphics().p("AhwXYQmTkEhmnWQhmnVEEmTQD+mLHHhqMAHrAjZQh6AYh2AAQlDAAkii6g");
	var mask_6_graphics_23 = new cjs.Graphics().p("Ah6XIQmMkPhanYQhZnYEOmLQEJmFHJheMAGvAjlQhrAShnAAQlVAAkpjKg");
	var mask_6_graphics_24 = new cjs.Graphics().p("AiDW2QmGkZhNnaQhNnaEYmEQEUl+HLhSMAF0AjwQhcANhZAAQlmAAkwjcg");
	var mask_6_graphics_25 = new cjs.Graphics().p("AiNWlQl+kjhAncQhBncEjl9QEdl2HNhGMAE4Aj4QhNAJhKAAQl3AAk4jtg");
	var mask_6_graphics_26 = new cjs.Graphics().p("AiVWSQl2ktg0ndQg1ndEtl2QEnluHPg6MAD7AkAQg9AFg6AAQmKAAk+kAg");
	var mask_6_graphics_27 = new cjs.Graphics().p("AidV/Qlvk2gnnfQgnnfE2ltQEvlmHRguMAC/AkFQgsADgrAAQmdAAlEkTg");
	var mask_6_graphics_28 = new cjs.Graphics().p("AilVsQlmlBgbnfQgbnfFAllQE5lfHSghMACCAkJIg2ACQmyAAlJkng");
	var mask_6_graphics_29 = new cjs.Graphics().p("AisVXQldlJgPngQgOngFJlcQFClXHTgUMABFAkMIgUAAQnHAAlOk8g");
	var mask_6_graphics_30 = new cjs.Graphics().p("AizVDQlUlTgCngQgBngFSlUQFKlNHTgJMAAJAkNQnUgFlNlLg");
	var mask_6_graphics_31 = new cjs.Graphics().p("AjTUuQlLlcALngQALngFalKQFUlFHTAEMgA1AkMQnTgSlElTg");
	var mask_6_graphics_32 = new cjs.Graphics().p("Aj3UYQlClkAYnfQAXnfFklCQFbk8HTAQMgBxAkKQnTgek7lcg");
	var mask_6_graphics_33 = new cjs.Graphics().p("AkaUDQk5lsAlnfQAkneFrk5QFkkyHTAcMgCvAkGQnRgqkylkg");
	var mask_6_graphics_34 = new cjs.Graphics().p("Ak8TtQkwl0AxndQAxndF0kvQFrkpHSAoMgDrAkBQnPg2kpltg");
	var mask_6_graphics_35 = new cjs.Graphics().p("AleTYQkml8A+ncQA9ncF8klQFzkfHQA1MgEnAj5QnOhCkfl0g");
	var mask_6_graphics_36 = new cjs.Graphics().p("AmATCQkbmEBKnaQBKnZGDkbQF7kWHOBBMgFjAjxQnMhPkWl7g");
	var mask_6_graphics_37 = new cjs.Graphics().p("AmgSsQkRmLBWnYQBWnXGLkRQGCkLHMBNMgGfAjmQnKhakLmDg");
	var mask_6_graphics_38 = new cjs.Graphics().p("AnASXQkGmSBinWQBjnVGRkGQGJkCHKBaMgHbAjaQnHhmkBmJg");
	var mask_6_graphics_39 = new cjs.Graphics().p("AnfSBQj8mZBvnTQBvnSGYj8QGPj3HIBmMgIWAjNQnEhyj3mQg");
	var mask_6_graphics_40 = new cjs.Graphics().p("An+RrQjwmfB7nQQB7nPGejxQGWjsHFBxMgJRAi+QnBh+jtmWg");
	var mask_6_graphics_41 = new cjs.Graphics().p("AobRVQjmmlCHnNQCHnLGljmQGcjiHCB9MgKMAiuQm+iKjhmcg");
	var mask_6_graphics_42 = new cjs.Graphics().p("Ao4Q/QjamrCTnJQCTnIGrjbQGhjWG/CJMgLHAicQm5iWjXmig");
	var mask_6_graphics_43 = new cjs.Graphics().p("ApUQpQjPmxCfnEQCfnEGxjQQGmjLG7CUMgMAAiJQm1ihjMmog");
	var mask_6_graphics_44 = new cjs.Graphics().p("ApvQTQjEm2CrnAQCrnAG2jEQGsjAG3CgMgM6Ah0QmwitjBmtg");
	var mask_6_graphics_45 = new cjs.Graphics().p("AqJP+Qi4m7C2m8QC3m7G7i5QGxi0GyCrMgNxAhdQmti4i1mxg");
	var mask_6_graphics_46 = new cjs.Graphics().p("AqjPoQisnADCm3QDCm2HAisQG1iqGuC3MgOpAhFQmojDiqm2g");
	var mask_6_graphics_47 = new cjs.Graphics().p("Aq7PSQihnEDOmxQDOmxHCihQG7ieGpDCMgPgAgsQmjjOiem7g");
	var mask_6_graphics_48 = new cjs.Graphics().p("ArTO9QiUnJDZmrQDZmrHGiWQG/iSGkDNMgQXAgRQmdjZiTm+g");
	var mask_6_graphics_49 = new cjs.Graphics().p("ArpOnQiJnMDkmmQDkmlHLiJQHCiGGeDYIxMf0QmYjkiGnCg");
	var mask_6_graphics_50 = new cjs.Graphics().p("Ar/OSQh8nPDvmgQDvmfHOh9QHGh7GYDjIyCfXQmRjvh7nFg");
	var mask_6_graphics_51 = new cjs.Graphics().p("AsUN9QhwnTD6mZQD6mZHRhxQHJhuGSDtIy2e4QmLj5hvnIg");
	var mask_6_graphics_52 = new cjs.Graphics().p("AsnNoQhknWEEmSQEFmSHUhlQHLhiGMD4IzpeXQmFkDhinLg");
	var mask_6_graphics_53 = new cjs.Graphics().p("As6NTQhYnYEPmLQEPmMHXhYQHOhWGFECI0cd2Ql9kOhXnNg");
	var mask_6_graphics_54 = new cjs.Graphics().p("AtMM+QhLnaEZmDQEamFHYhLQHQhLF+ENI1NdSQl2kXhLnQg");
	var mask_6_graphics_55 = new cjs.Graphics().p("AtdMqQg+ncEjl8QEkl9Hag/QHSg+F3EWI1/cuQlukhg/nRg");
	var mask_6_graphics_56 = new cjs.Graphics().p("AtsMVQgzndEul0QEtl1HcgzQHTgyFwEgI2ucJQlnkrgynTg");
	var mask_6_graphics_57 = new cjs.Graphics().p("At7MBQgmneE3lsQE3ltHdgmQHVgmFoEqI3dbhQlfk0gmnUg");
	var mask_6_graphics_58 = new cjs.Graphics().p("AuJLtQgZnfFBlkQFAlkHegaQHVgZFgEzI4La5QlWk9ganVg");
	var mask_6_graphics_59 = new cjs.Graphics().p("AuWLaQgMnfFKlcQFJlcHfgNQHVgNFYE8I43aQQlPlFgNnWg");
	var mask_6_graphics_60 = new cjs.Graphics().p("AukLBQADnfFVlQQFWlRHeADQHWADFNFHI5vZaQlDlRADnWg");
	var mask_6_graphics_61 = new cjs.Graphics().p("AuxKpQATnfFhlEQFglGHeATQHWATFBFSI6kYiQk3lbASnWg");
	var mask_6_graphics_62 = new cjs.Graphics().p("Au8KSQAjnfFrk4QFrk6HdAjQHVAiE3FdI7YXpQkslmAinUg");
	var mask_6_graphics_63 = new cjs.Graphics().p("AvGJ7QA0ndF1ktQF1ktHcAzQHUAyEqFmI8JWuQkglvAxnTg");
	var mask_6_graphics_64 = new cjs.Graphics().p("AvNJkQBDnbF/kgQGAkgHZBCQHSBCEeFwI85VxQkTl5BBnRg");
	var mask_6_graphics_65 = new cjs.Graphics().p("AvTJOQBTnZGJkSQGIkUHYBTQHPBRESF5I9nUzQkHmCBRnPg");
	var mask_6_graphics_66 = new cjs.Graphics().p("AvXI4QBjnVGRkGQGSkGHUBiQHMBhEGGCI+STzQj6mLBgnMg");
	var mask_6_graphics_67 = new cjs.Graphics().p("AvZIjQBynSGaj3QGbj5HQByQHJBwD4GKI+7SyQjtmTBwnJg");
	var mask_6_graphics_68 = new cjs.Graphics().p("AvaIPQCCnOGjjqQGijrHNCCQHEB/DrGSI/iRvQjfmaB+nFg");
	var mask_6_graphics_69 = new cjs.Graphics().p("AvYH8QCRnKGqjcQGpjdHJCRQHACODdGbMggHAQqQjRmiCOm/g");
	var mask_6_graphics_70 = new cjs.Graphics().p("AvVHpQCgnFGxjNQGwjPHECgQG8CdDPGiMggqAPlQjDmoCdm7g");
	var mask_6_graphics_71 = new cjs.Graphics().p("AvQHWQCvm+G4i/QG3jAG+CvQG2CrDBGpMghKAOfQi1mvCsm2g");
	var mask_6_graphics_72 = new cjs.Graphics().p("AvKHFQC/m5G+iwQG9ixG4C+QGwC5CzGvMghoANYQimm1C5mvg");
	var mask_6_graphics_73 = new cjs.Graphics().p("AvBG0QDNmyHDihQHDijGyDNQGpDIClG1MgiEAMPQiXm6DImpg");
	var mask_6_graphics_74 = new cjs.Graphics().p("Au3GkQDbmqHJiTQHIiTGrDbQGiDVCWG7MgicALGQiJm/DWmig");
	var mask_6_graphics_75 = new cjs.Graphics().p("AurGVQDqmjHNiDQHNiEGjDpQGbDjCHHAMgizAJ7Qh6nDDkmag");
	var mask_6_graphics_76 = new cjs.Graphics().p("AudGGQD3maHSh1QHRh0GbD3QGTDxB4HEMgjHAIxQhrnHDymTg");
	var mask_6_graphics_77 = new cjs.Graphics().p("AuOF4QEFmRHWhlQHUhlGTEEQGKD/BpHHMgjYAHmQhcnKD/mLg");
	var mask_6_graphics_78 = new cjs.Graphics().p("At9FrQETmIHYhVQHYhVGJERQGDEMBZHLMgjoAGZQhMnNEMmCg");
	var mask_6_graphics_79 = new cjs.Graphics().p("AtqFfQEgl/HbhFQHahFGAEdQF5EaBKHNMgj0AFOQg8nQEYl5g");
	var mask_6_graphics_80 = new cjs.Graphics().p("AtVFUQEsl2Hdg1QHcg1F3ErQFvElA7HQMgj+AEAQgtnREllvg");
	var mask_6_graphics_81 = new cjs.Graphics().p("As/FKQE4lsHfglQHeglFsE3QFlExAsHSMgkGACzQgdnSExllg");
	var mask_6_graphics_82 = new cjs.Graphics().p("AsnFAQFElhHggVQHegVFiFDQFbE9AcHTMgkKABmQgOnTE9lbg");
	var mask_6_graphics_83 = new cjs.Graphics().p("AsOE4QFQlWHfgFQHggGFXFPQFQFJAMHTMgkMAAZQACnTFIlQg");
	var mask_6_graphics_84 = new cjs.Graphics().p("AxYQuQASnTFTlFQFblLHfALQHgALFMFaQFFFUgEHTg");
	var mask_6_graphics_85 = new cjs.Graphics().p("AxWP0QAhnSFek6QFmk+HfAaQHfAbFAFlQE5FfgTHTg");
	var mask_6_graphics_86 = new cjs.Graphics().p("AxTO6QAwnRFpktQFxkzHdArQHeArE0FvQEtFpgjHSg");
	var mask_6_graphics_87 = new cjs.Graphics().p("AxPOBQBAnPFykiQF7kmHcA7QHcA7EnF5QEiFzgzHRg");
	var mask_6_graphics_88 = new cjs.Graphics().p("AxKNHQBQnMF8kVQGEkaHZBLQHbBLEaGDQEVF8hCHPg");
	var mask_6_graphics_89 = new cjs.Graphics().p("AxDMOQBfnJGFkJQGNkMHXBbQHYBaENGMQEIGGhRHMg");
	var mask_6_graphics_90 = new cjs.Graphics().p("Aw7LVQBunGGOj7QGWj+HTBqQHVBqEAGVQD6GOhgHJg");
	var mask_6_graphics_91 = new cjs.Graphics().p("AwyKdQB9nCGWjtQGfjyHPB6QHRB6DyGdQDuGWhwHGg");
	var mask_6_graphics_92 = new cjs.Graphics().p("AwnJlQCMm9GdjfQGnjkHLCJQHMCJDlGlQDfGeh/HCg");
	var mask_6_graphics_93 = new cjs.Graphics().p("AwbIuQCam5GljRQGujWHHCZQHHCZDWGsQDSGliOG+g");
	var mask_6_graphics_94 = new cjs.Graphics().p("AwOH4QCpm0GsjDQG1jHHBCoQHCCmDHG1QDEGsidG4g");
	var mask_6_graphics_95 = new cjs.Graphics().p("AwAHCQC4muGyi0QG6i5G8C3QG9C1C4G7QC2GyisGzg");
	var mask_6_graphics_96 = new cjs.Graphics().p("AvxGMQDHmmG3inQHBipG2DFQG1DECqHBQCnG4i6Gtg");
	var mask_6_graphics_97 = new cjs.Graphics().p("AvgFYQDVmfG9iYQHFibGvDUQGvDTCbHGQCYG9jIGng");
	var mask_6_graphics_98 = new cjs.Graphics().p("AvOElQDimZHCiJQHLiLGoDiQGnDhCMHLQCJHDjWGfg");
	var mask_6_graphics_99 = new cjs.Graphics().p("Au7DyQDwmRHGh6QHPh8GgDxQGgDvB8HQQB6HGjkGYg");
	var mask_6_graphics_100 = new cjs.Graphics().p("AumDAQD9mIHKhrQHThsGXD+QGYD9BtHTQBqHLjxGQg");
	var mask_6_graphics_101 = new cjs.Graphics().p("AuRCPQEKl/HNhbQHXhdGPELQGPELBdHXQBbHNj/GJg");
	var mask_6_graphics_102 = new cjs.Graphics().p("At7BgQEXl3HQhMQHZhMGGEYQGGEYBNHaQBMHQkLGAg");
	var mask_6_graphics_103 = new cjs.Graphics().p("AtjAxQEjltHSg8QHcg9F8EmQF9EkA9HcQA8HTkYF2g");
	var mask_6_graphics_104 = new cjs.Graphics().p("AtLAEQEwljHUgtQHdgtFyEyQFzExAtHeQAtHVklFtg");
	var mask_6_graphics_105 = new cjs.Graphics().p("AsxgnQE7laHVgdQHfgdFoE+QFoE+AdHfQAdHWkxFjg");
	var mask_6_graphics_106 = new cjs.Graphics().p("AsXhSQFGlPHWgNQHggNFdFKQFdFJAOHgQANHXk9FYg");
	var mask_6_graphics_107 = new cjs.Graphics().p("Ar8h7QFSlEHVACQHhADFRFWQFSFUgCHhQgDHWlIFOg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_6_graphics_9,x:92.2,y:168}).wait(1).to({graphics:mask_6_graphics_10,x:90.9,y:168.1}).wait(1).to({graphics:mask_6_graphics_11,x:89.6,y:168.1}).wait(1).to({graphics:mask_6_graphics_12,x:88.3,y:168.1}).wait(1).to({graphics:mask_6_graphics_13,x:86.9,y:168.1}).wait(1).to({graphics:mask_6_graphics_14,x:85.6,y:168.2}).wait(1).to({graphics:mask_6_graphics_15,x:84.2,y:168.2}).wait(1).to({graphics:mask_6_graphics_16,x:82.8,y:168.2}).wait(1).to({graphics:mask_6_graphics_17,x:81.4,y:168.2}).wait(1).to({graphics:mask_6_graphics_18,x:79.9,y:168.2}).wait(1).to({graphics:mask_6_graphics_19,x:78.5,y:168.2}).wait(1).to({graphics:mask_6_graphics_20,x:77.1,y:168.2}).wait(1).to({graphics:mask_6_graphics_21,x:75.6,y:168.2}).wait(1).to({graphics:mask_6_graphics_22,x:74.1,y:168.2}).wait(1).to({graphics:mask_6_graphics_23,x:72.6,y:168.2}).wait(1).to({graphics:mask_6_graphics_24,x:71.2,y:168.2}).wait(1).to({graphics:mask_6_graphics_25,x:69.7,y:168.2}).wait(1).to({graphics:mask_6_graphics_26,x:68.2,y:168.2}).wait(1).to({graphics:mask_6_graphics_27,x:66.7,y:168.2}).wait(1).to({graphics:mask_6_graphics_28,x:65.2,y:168.3}).wait(1).to({graphics:mask_6_graphics_29,x:63.7,y:168.3}).wait(1).to({graphics:mask_6_graphics_30,x:62.2,y:168.3}).wait(1).to({graphics:mask_6_graphics_31,x:63.3,y:168.3}).wait(1).to({graphics:mask_6_graphics_32,x:64.8,y:168.2}).wait(1).to({graphics:mask_6_graphics_33,x:66.4,y:168.1}).wait(1).to({graphics:mask_6_graphics_34,x:67.9,y:168}).wait(1).to({graphics:mask_6_graphics_35,x:69.4,y:167.8}).wait(1).to({graphics:mask_6_graphics_36,x:70.9,y:167.6}).wait(1).to({graphics:mask_6_graphics_37,x:72.4,y:167.3}).wait(1).to({graphics:mask_6_graphics_38,x:73.9,y:167}).wait(1).to({graphics:mask_6_graphics_39,x:75.4,y:166.7}).wait(1).to({graphics:mask_6_graphics_40,x:76.9,y:166.3}).wait(1).to({graphics:mask_6_graphics_41,x:78.4,y:165.9}).wait(1).to({graphics:mask_6_graphics_42,x:79.9,y:165.5}).wait(1).to({graphics:mask_6_graphics_43,x:81.3,y:165}).wait(1).to({graphics:mask_6_graphics_44,x:82.8,y:164.5}).wait(1).to({graphics:mask_6_graphics_45,x:84.2,y:163.9}).wait(1).to({graphics:mask_6_graphics_46,x:85.6,y:163.3}).wait(1).to({graphics:mask_6_graphics_47,x:87,y:162.7}).wait(1).to({graphics:mask_6_graphics_48,x:88.4,y:162}).wait(1).to({graphics:mask_6_graphics_49,x:89.7,y:161.3}).wait(1).to({graphics:mask_6_graphics_50,x:91.1,y:160.6}).wait(1).to({graphics:mask_6_graphics_51,x:92.4,y:159.8}).wait(1).to({graphics:mask_6_graphics_52,x:93.7,y:159}).wait(1).to({graphics:mask_6_graphics_53,x:95,y:158.2}).wait(1).to({graphics:mask_6_graphics_54,x:96.2,y:157.3}).wait(1).to({graphics:mask_6_graphics_55,x:97.5,y:156.4}).wait(1).to({graphics:mask_6_graphics_56,x:98.7,y:155.5}).wait(1).to({graphics:mask_6_graphics_57,x:99.9,y:154.5}).wait(1).to({graphics:mask_6_graphics_58,x:101,y:153.5}).wait(1).to({graphics:mask_6_graphics_59,x:102.1,y:152.5}).wait(1).to({graphics:mask_6_graphics_60,x:103.5,y:151.2}).wait(1).to({graphics:mask_6_graphics_61,x:104.8,y:149.8}).wait(1).to({graphics:mask_6_graphics_62,x:106.2,y:148.4}).wait(1).to({graphics:mask_6_graphics_63,x:107.4,y:146.9}).wait(1).to({graphics:mask_6_graphics_64,x:108.6,y:145.4}).wait(1).to({graphics:mask_6_graphics_65,x:109.8,y:143.9}).wait(1).to({graphics:mask_6_graphics_66,x:110.9,y:142.3}).wait(1).to({graphics:mask_6_graphics_67,x:111.9,y:140.7}).wait(1).to({graphics:mask_6_graphics_68,x:112.9,y:139}).wait(1).to({graphics:mask_6_graphics_69,x:113.8,y:137.3}).wait(1).to({graphics:mask_6_graphics_70,x:114.7,y:135.6}).wait(1).to({graphics:mask_6_graphics_71,x:115.5,y:133.9}).wait(1).to({graphics:mask_6_graphics_72,x:116.3,y:132.1}).wait(1).to({graphics:mask_6_graphics_73,x:117,y:130.3}).wait(1).to({graphics:mask_6_graphics_74,x:117.6,y:128.5}).wait(1).to({graphics:mask_6_graphics_75,x:118.2,y:126.6}).wait(1).to({graphics:mask_6_graphics_76,x:118.7,y:124.8}).wait(1).to({graphics:mask_6_graphics_77,x:119.1,y:122.9}).wait(1).to({graphics:mask_6_graphics_78,x:119.5,y:121}).wait(1).to({graphics:mask_6_graphics_79,x:119.8,y:119.2}).wait(1).to({graphics:mask_6_graphics_80,x:120.1,y:117.2}).wait(1).to({graphics:mask_6_graphics_81,x:120.3,y:115.3}).wait(1).to({graphics:mask_6_graphics_82,x:120.4,y:113.4}).wait(1).to({graphics:mask_6_graphics_83,x:120.4,y:111.5}).wait(1).to({graphics:mask_6_graphics_84,x:120.4,y:112.2}).wait(1).to({graphics:mask_6_graphics_85,x:120.4,y:114.2}).wait(1).to({graphics:mask_6_graphics_86,x:120.4,y:116.1}).wait(1).to({graphics:mask_6_graphics_87,x:120.4,y:118.1}).wait(1).to({graphics:mask_6_graphics_88,x:120.4,y:120}).wait(1).to({graphics:mask_6_graphics_89,x:120.4,y:121.9}).wait(1).to({graphics:mask_6_graphics_90,x:120.4,y:123.8}).wait(1).to({graphics:mask_6_graphics_91,x:120.3,y:125.7}).wait(1).to({graphics:mask_6_graphics_92,x:120.3,y:127.6}).wait(1).to({graphics:mask_6_graphics_93,x:120.3,y:129.5}).wait(1).to({graphics:mask_6_graphics_94,x:120.3,y:131.3}).wait(1).to({graphics:mask_6_graphics_95,x:120.3,y:133.1}).wait(1).to({graphics:mask_6_graphics_96,x:120.2,y:134.9}).wait(1).to({graphics:mask_6_graphics_97,x:120.2,y:136.7}).wait(1).to({graphics:mask_6_graphics_98,x:120.1,y:138.4}).wait(1).to({graphics:mask_6_graphics_99,x:120.1,y:140.1}).wait(1).to({graphics:mask_6_graphics_100,x:120,y:141.8}).wait(1).to({graphics:mask_6_graphics_101,x:120,y:143.5}).wait(1).to({graphics:mask_6_graphics_102,x:119.9,y:145.1}).wait(1).to({graphics:mask_6_graphics_103,x:119.9,y:146.6}).wait(1).to({graphics:mask_6_graphics_104,x:119.8,y:148.2}).wait(1).to({graphics:mask_6_graphics_105,x:119.8,y:149.7}).wait(1).to({graphics:mask_6_graphics_106,x:119.7,y:151.1}).wait(1).to({graphics:mask_6_graphics_107,x:119.7,y:152.5}).wait(687));

	// Layer 2
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(20,1,1).p("Am5l+QGkjjDLBYQDMBXAuDjQAvDjisG2QgXArgYAu");
	this.shape_9.setTransform(134.3,205.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(20,1,1).p("AmvwrQGkjiDLBXQDNBXAuDkQAuDjisG2QidEojLF9QjcGai9Fy");
	this.shape_10.setTransform(133.3,273.9);

	var maskedShapeInstanceList = [this.shape_9,this.shape_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9}]},9).to({state:[{t:this.shape_10}]},35).wait(750));

	// Letter
	this.instance_4 = new lib.M("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,275);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(794));

	// Background
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_11.setTransform(275,275,3.373,2.543);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_12.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(794));

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