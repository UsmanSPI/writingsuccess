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


(lib.z = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AzVe2Qh6g7AAh8QAAikB1jUQBpjBC1jBQCwi5DAiEQDHiJCbgiQhoifAAgkQgBg0BCg/QAFgHAPgFIE/kuQDBjGCNi5QCrjhBdjGQBsjlgBi/QABi0h6iOQh9iVitAAIjNAZQhWAzg4AAQhkA9hEAAQhaAAAAhWQAAjbJdhHQCIAAB9A7QB1A4BbBmQBZBkAxB/QA0CCAACIQAADShrD5QhdDciuDyQiVDSjFDRIlYFJIA1BbQFuhuI5odICkihQBzhsA8AAQBWAAAABfQAAAgjwElQjZD7kRC+QkUDBk5B4QgHC5hlDZQhRCuiIC3QiPDDiyCaIjNCSQhtA9hZAAQiLAAhagugAnNOQIjZC8Qi6C6imD0QhjCGAABpQAAAWApAAIBQgMQBxgMCEh2QBzhmB0ipQCRjPCemCQhwAqh4BVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-202,272,404.1);


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
	this.instance.setTransform(7.5,5,1,1,-117.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-169.2,guide:{path:[7.5,4.8,28.5,-8,33.1,-27]}},44).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AhWgxIA+gvIBvCSIg+Avg");
	var mask_graphics_1 = new cjs.Graphics().p("AhZguIBEg2IBvCSIhDA3g");
	var mask_graphics_2 = new cjs.Graphics().p("AhcgpIBJg+IBwCRIhJA+g");
	var mask_graphics_3 = new cjs.Graphics().p("AhfgmIBOhEIBxCRIhOBEg");
	var mask_graphics_4 = new cjs.Graphics().p("AhighIBThNIBzCRIhVBLg");
	var mask_graphics_5 = new cjs.Graphics().p("AhmgeIBahTIByCPIhZBUg");
	var mask_graphics_6 = new cjs.Graphics().p("AhogZIBehbIBzCPIheBag");
	var mask_graphics_7 = new cjs.Graphics().p("AhsgVIBkhiIB0COIhkBhg");
	var mask_graphics_8 = new cjs.Graphics().p("AhvgRIBqhqIB1COIhqBog");
	var mask_graphics_9 = new cjs.Graphics().p("AhygOIBwhwIB1CMIhvBxg");
	var mask_graphics_10 = new cjs.Graphics().p("Ah1gJIB1h4IB2CLIh1B4g");
	var mask_graphics_11 = new cjs.Graphics().p("Ah4gGIB5h/IB4CMIh5B/g");
	var mask_graphics_12 = new cjs.Graphics().p("Ah7gCIB+iGIB5CLIh/CGg");
	var mask_graphics_13 = new cjs.Graphics().p("Ah+ABICEiMIB5CLIiECMg");
	var mask_graphics_14 = new cjs.Graphics().p("AiBAFICKiUIB5CKIiJCVg");
	var mask_graphics_15 = new cjs.Graphics().p("AiEAJICPiaIB6CIIiPCbg");
	var mask_graphics_16 = new cjs.Graphics().p("AiIANICViiIB8CJIiVCig");
	var mask_graphics_17 = new cjs.Graphics().p("AiKARICZipIB9CIIibCpg");
	var mask_graphics_18 = new cjs.Graphics().p("AiOAVICgixIB9CIIigCxg");
	var mask_graphics_19 = new cjs.Graphics().p("AiRAZICmi4IB9CHIimC4g");
	var mask_graphics_20 = new cjs.Graphics().p("AiUAdICri/IB+CGIirC/g");
	var mask_graphics_21 = new cjs.Graphics().p("AiXAhICwjGIB/CFIiwDHg");
	var mask_graphics_22 = new cjs.Graphics().p("AiaAlIC2jOIB/CFIi2DOg");
	var mask_graphics_23 = new cjs.Graphics().p("AidApIC7jVICACEIi7DVg");
	var mask_graphics_24 = new cjs.Graphics().p("AigAtIDBjcICACDIjBDcg");
	var mask_graphics_25 = new cjs.Graphics().p("AijAxIDGjkICBCDIjGDkg");
	var mask_graphics_26 = new cjs.Graphics().p("AimA1IDLjrICCCCIjLDrg");
	var mask_graphics_27 = new cjs.Graphics().p("AipA5IDRjyICDCBIjSDyg");
	var mask_graphics_28 = new cjs.Graphics().p("AitA9IDXj5ICECAIjXD6g");
	var mask_graphics_29 = new cjs.Graphics().p("AiwBBIDckBICFCBIjdEAg");
	var mask_graphics_30 = new cjs.Graphics().p("AizBFIDikIICFB/IjiEIg");
	var mask_graphics_31 = new cjs.Graphics().p("Ai2BJIDnkPICGB+IjnEPg");
	var mask_graphics_32 = new cjs.Graphics().p("Ai5BNIDtkXICGB+IjtEXg");
	var mask_graphics_33 = new cjs.Graphics().p("Ai8BRIDzkeICGB+IjyEdg");
	var mask_graphics_34 = new cjs.Graphics().p("Ai/BUID3kkICIB8Ij3Elg");
	var mask_graphics_35 = new cjs.Graphics().p("AjCBZID9ktICIB8Ij9Etg");
	var mask_graphics_36 = new cjs.Graphics().p("AjFBcIECkzICJB8IkCEzg");
	var mask_graphics_37 = new cjs.Graphics().p("AjJBgIEJk6ICKB6IkJE7g");
	var mask_graphics_38 = new cjs.Graphics().p("AjLBkIENlCICKB7IkNFCg");
	var mask_graphics_39 = new cjs.Graphics().p("AjPBpIEUlKICKB6IkSFJg");
	var mask_graphics_40 = new cjs.Graphics().p("AjRBsIEYlQICMB4IkZFRg");
	var mask_graphics_41 = new cjs.Graphics().p("AjVBxIEelZICNB5IkfFXg");
	var mask_graphics_42 = new cjs.Graphics().p("AjYB0IEjlfICOB4IkjFfg");
	var mask_graphics_43 = new cjs.Graphics().p("AjbB5IEplnICOB3IkpFmg");
	var mask_graphics_44 = new cjs.Graphics().p("AjeB8IEultICPB2IkuFtg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:6.9,y:5.2}).wait(1).to({graphics:mask_graphics_1,x:7.3,y:4.9}).wait(1).to({graphics:mask_graphics_2,x:7.6,y:4.5}).wait(1).to({graphics:mask_graphics_3,x:7.9,y:4.2}).wait(1).to({graphics:mask_graphics_4,x:8.3,y:3.8}).wait(1).to({graphics:mask_graphics_5,x:8.7,y:3.5}).wait(1).to({graphics:mask_graphics_6,x:9,y:3.1}).wait(1).to({graphics:mask_graphics_7,x:9.4,y:2.8}).wait(1).to({graphics:mask_graphics_8,x:9.7,y:2.5}).wait(1).to({graphics:mask_graphics_9,x:10,y:2.1}).wait(1).to({graphics:mask_graphics_10,x:10.4,y:1.8}).wait(1).to({graphics:mask_graphics_11,x:10.8,y:1.4}).wait(1).to({graphics:mask_graphics_12,x:11.1,y:1.1}).wait(1).to({graphics:mask_graphics_13,x:11.4,y:0.7}).wait(1).to({graphics:mask_graphics_14,x:11.8,y:0.4}).wait(1).to({graphics:mask_graphics_15,x:12.1,y:0.1}).wait(1).to({graphics:mask_graphics_16,x:12.5,y:-0.3}).wait(1).to({graphics:mask_graphics_17,x:12.9,y:-0.6}).wait(1).to({graphics:mask_graphics_18,x:13.2,y:-1}).wait(1).to({graphics:mask_graphics_19,x:13.5,y:-1.3}).wait(1).to({graphics:mask_graphics_20,x:13.9,y:-1.7}).wait(1).to({graphics:mask_graphics_21,x:14.2,y:-2}).wait(1).to({graphics:mask_graphics_22,x:14.6,y:-2.3}).wait(1).to({graphics:mask_graphics_23,x:14.9,y:-2.7}).wait(1).to({graphics:mask_graphics_24,x:15.3,y:-3}).wait(1).to({graphics:mask_graphics_25,x:15.6,y:-3.4}).wait(1).to({graphics:mask_graphics_26,x:16,y:-3.7}).wait(1).to({graphics:mask_graphics_27,x:16.3,y:-4.1}).wait(1).to({graphics:mask_graphics_28,x:16.7,y:-4.4}).wait(1).to({graphics:mask_graphics_29,x:17,y:-4.7}).wait(1).to({graphics:mask_graphics_30,x:17.4,y:-5.1}).wait(1).to({graphics:mask_graphics_31,x:17.7,y:-5.4}).wait(1).to({graphics:mask_graphics_32,x:18.1,y:-5.8}).wait(1).to({graphics:mask_graphics_33,x:18.4,y:-6.1}).wait(1).to({graphics:mask_graphics_34,x:18.8,y:-6.4}).wait(1).to({graphics:mask_graphics_35,x:19.1,y:-6.8}).wait(1).to({graphics:mask_graphics_36,x:19.5,y:-7.1}).wait(1).to({graphics:mask_graphics_37,x:19.8,y:-7.5}).wait(1).to({graphics:mask_graphics_38,x:20.2,y:-7.8}).wait(1).to({graphics:mask_graphics_39,x:20.5,y:-8.2}).wait(1).to({graphics:mask_graphics_40,x:20.9,y:-8.5}).wait(1).to({graphics:mask_graphics_41,x:21.2,y:-8.8}).wait(1).to({graphics:mask_graphics_42,x:21.6,y:-9.2}).wait(1).to({graphics:mask_graphics_43,x:21.9,y:-9.5}).wait(1).to({graphics:mask_graphics_44,x:22.2,y:-9.9}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AB4iaQgdC2jSB/");
	this.shape.setTransform(21.1,-11.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-4.5,17.3,20.7);


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
(lib.WS_Cursive_Z = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_700 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(700).call(this.frame_700).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(266.1,95.8,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[266.2,96.1,326.6,71.7,349,101.9,371.4,132.1,363.1,166.4,354.8,200.8,323.8,238.5,294.1,274.6,254.4,304.4]}},265).wait(15).to({startPosition:0},0).to({guide:{path:[253.8,306.3,272.8,330.7,263.9,360.2,254.9,389.8,239,414.3,223.1,438.9,195.5,457.1,174.1,471.2,159.9,465.1]}},135).wait(15).to({x:159,y:464},0).to({guide:{path:[159.2,463.8,154.2,458.5,160.4,430.3,166.8,401.2,201.5,373.9,236.3,346.7,278.8,334,321.4,321.4,364.2,278.4,384.2,258.3,400.5,237]}},180).wait(16).to({startPosition:0},0).to({guide:{path:[401.5,237.4,414.2,211,439.3,196.3,468.4,179.2,494.7,201.3,517.4,220.3,542.6,235.5,569.5,251.5,598.5,238.7,615.1,231.3,630,223.9]}},65).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(252,307,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},265).wait(15).to({_off:false,x:153.8,y:461.9},0).to({_off:true},135).wait(15).to({_off:false,x:393,y:245.7},0).to({_off:true},180).wait(82));

	// Layer 13
	this.instance_1 = new lib.ar2("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(127.2,383.1,1,1,0,-97.6,82.4,0.8,-0.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(439).to({_off:false},0).wait(262));

	// Layer 8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_463 = new cjs.Graphics().p("AD4ayIC5iWIH7JyIi4CVg");
	var mask_graphics_464 = new cjs.Graphics().p("AlhjlIDIilIH7J0IjKChg");
	var mask_graphics_465 = new cjs.Graphics().p("AlpjcIDXi1IH8J2IjcCtg");
	var mask_graphics_466 = new cjs.Graphics().p("AlxjUIDnjEIH8J4IjtC5g");
	var mask_graphics_467 = new cjs.Graphics().p("Al5jLID2jUIH+J6IkADFg");
	var mask_graphics_468 = new cjs.Graphics().p("AmCjCIEGjkIH/J9IkRDQg");
	var mask_graphics_469 = new cjs.Graphics().p("AmKi6IEVjzIIAJ/IkjDcg");
	var mask_graphics_470 = new cjs.Graphics().p("AmSixIElkDIIAKCIk0Dng");
	var mask_graphics_471 = new cjs.Graphics().p("AmaioIE0kTIIBKEIlGDzg");
	var mask_graphics_472 = new cjs.Graphics().p("AmiigIFEkjIIBKHIlXD/g");
	var mask_graphics_473 = new cjs.Graphics().p("AmqiXIFTkzIICKKIlpEKg");
	var mask_graphics_474 = new cjs.Graphics().p("AmyiOIFilCIIDKLIl6EWg");
	var mask_graphics_475 = new cjs.Graphics().p("Am6iFIFylTIIDKOImMEig");
	var mask_graphics_476 = new cjs.Graphics().p("AnDh9IGCliIIFKQImeEug");
	var mask_graphics_477 = new cjs.Graphics().p("AnLh1IGRlxIIGKTImwE6g");
	var mask_graphics_478 = new cjs.Graphics().p("AnThsIGhmBIIGKVInBFGg");
	var mask_graphics_479 = new cjs.Graphics().p("AnbhjIGwmRIIHKXInTFSg");
	var mask_graphics_480 = new cjs.Graphics().p("AniheIG+mcIIHKXInhFeg");
	var mask_graphics_481 = new cjs.Graphics().p("AnqhYIHNmnIIHKWInuFpg");
	var mask_graphics_482 = new cjs.Graphics().p("AnwhSIHamzIIHKWIn8F1g");
	var mask_graphics_483 = new cjs.Graphics().p("An4hNIHqm+IIHKWIoLGBg");
	var mask_graphics_484 = new cjs.Graphics().p("An/hHIH4nKIIHKWIoZGNg");
	var mask_graphics_485 = new cjs.Graphics().p("AoGhCIIGnVIIHKWIonGYg");
	var mask_graphics_486 = new cjs.Graphics().p("AoNg8IIUngIIHKVIo1Gkg");
	var mask_graphics_487 = new cjs.Graphics().p("AoUg3IIjnrIIGKUIpDGxg");
	var mask_graphics_488 = new cjs.Graphics().p("AocgxIIxn3IIIKVIpSG8g");
	var mask_graphics_489 = new cjs.Graphics().p("AojgsIJAoBIIHKTIpgHIg");
	var mask_graphics_490 = new cjs.Graphics().p("AoqgmIJOoNIIHKTIpvHUg");
	var mask_graphics_491 = new cjs.Graphics().p("AoxggIJcoZIIIKUIp+Hfg");
	var mask_graphics_492 = new cjs.Graphics().p("Ao5gaIJrolIIHKTIqKHsg");
	var mask_graphics_493 = new cjs.Graphics().p("ApAgVIJ6ovIIHKSIqZH4g");
	var mask_graphics_494 = new cjs.Graphics().p("ApHgPIKIo8IIHKUIqnIDg");
	var mask_graphics_495 = new cjs.Graphics().p("ApOgKIKXpGIIGKSIq1IPg");
	var mask_graphics_496 = new cjs.Graphics().p("ApVgEIKlpSIIGKSIrDIbg");
	var mask_graphics_497 = new cjs.Graphics().p("ApdAAIK0pcIIHKSIrTIng");
	var mask_graphics_498 = new cjs.Graphics().p("ApkAGILCpoIIHKSIrhIzg");
	var mask_graphics_499 = new cjs.Graphics().p("AprAMILRpzIIGKRIrvI+g");
	var mask_graphics_500 = new cjs.Graphics().p("ApyARILfp+IIGKRIr9JKg");
	var mask_graphics_501 = new cjs.Graphics().p("Ap5AXILtqKIIGKRIsLJWg");
	var mask_graphics_502 = new cjs.Graphics().p("AqBAcIL8qVIIHKRIsZJig");
	var mask_graphics_503 = new cjs.Graphics().p("AqHAiIMKqgIIGKQIsoJtg");
	var mask_graphics_504 = new cjs.Graphics().p("AqPAoIMZqsIIGKQIs1J5g");
	var mask_graphics_505 = new cjs.Graphics().p("AqWAtIMoq3IIFKQItEKFg");
	var mask_graphics_506 = new cjs.Graphics().p("AqdAzIM2rDIIFKQItSKRg");
	var mask_graphics_507 = new cjs.Graphics().p("AqkA4INErNIIFKQItgKbg");
	var mask_graphics_508 = new cjs.Graphics().p("AqsA+INTrZIIGKQItvKng");
	var mask_graphics_509 = new cjs.Graphics().p("AqzBEINirlIIFKPIt9K0g");
	var mask_graphics_510 = new cjs.Graphics().p("Aq6BJINwrwIIFKQIuLK/g");
	var mask_graphics_511 = new cjs.Graphics().p("ArBBPIN+r7IIFKOIuZLMg");
	var mask_graphics_512 = new cjs.Graphics().p("ArJBVIONsIIIGKPIuoLXg");
	var mask_graphics_513 = new cjs.Graphics().p("ArQBaIOcsSIIFKPIu2Lig");
	var mask_graphics_514 = new cjs.Graphics().p("ArXBfIOqsdIIFKOIvELvg");
	var mask_graphics_515 = new cjs.Graphics().p("AreBlIO5spIIEKOIvSL7g");
	var mask_graphics_516 = new cjs.Graphics().p("ArlBqIPHs0IIEKOIvgMHg");
	var mask_graphics_517 = new cjs.Graphics().p("ArsBwIPVs/IIEKNIvuMTg");
	var mask_graphics_518 = new cjs.Graphics().p("Ar0B2IPktLIIEKNIv8Meg");
	var mask_graphics_519 = new cjs.Graphics().p("Ar7B7IPztWIIEKNIwLMqg");
	var mask_graphics_520 = new cjs.Graphics().p("AsCCBIQAthIIFKMIwZM2g");
	var mask_graphics_521 = new cjs.Graphics().p("AsJCHIQPttIIEKMIwnNCg");
	var mask_graphics_522 = new cjs.Graphics().p("AsQCMIQdt4IIEKMIw1NNg");
	var mask_graphics_523 = new cjs.Graphics().p("AsYCSIQtuEIIEKMIxENZg");
	var mask_graphics_524 = new cjs.Graphics().p("AsfCXIQ7uPIIEKMIxSNlg");
	var mask_graphics_525 = new cjs.Graphics().p("AsmCdIRJubIIEKMIxgNxg");
	var mask_graphics_526 = new cjs.Graphics().p("AstCjIRYumIIDKLIxuN8g");
	var mask_graphics_527 = new cjs.Graphics().p("As1CoIRnuxIIDKKIx9OJg");
	var mask_graphics_528 = new cjs.Graphics().p("As8CuIR1u9IIDKKIyKOVg");
	var mask_graphics_529 = new cjs.Graphics().p("AtDCzISEvIIIDKKIyZOhg");
	var mask_graphics_530 = new cjs.Graphics().p("AtKC5ISRvTIIEKJIynOsg");
	var mask_graphics_531 = new cjs.Graphics().p("AtRC/ISgvfIIDKJIy2O4g");
	var mask_graphics_532 = new cjs.Graphics().p("AtYDEISuvqIIDKJIzDPEg");
	var mask_graphics_533 = new cjs.Graphics().p("AtfDKIS9v2IIDKJIzTPQg");
	var mask_graphics_534 = new cjs.Graphics().p("AtnDPITMwBIIDKJIzhPbg");
	var mask_graphics_535 = new cjs.Graphics().p("AtuDVITawMIIDKIIzvPng");
	var mask_graphics_536 = new cjs.Graphics().p("At1DbITowYIIDKIIz9Pzg");
	var mask_graphics_537 = new cjs.Graphics().p("At8DgIT3wjIICKII0LP/g");
	var mask_graphics_538 = new cjs.Graphics().p("AuDDmIUFwuIIDKHI0ZQLg");
	var mask_graphics_539 = new cjs.Graphics().p("AuLDsIUUw6IIDKHI0oQXg");
	var mask_graphics_540 = new cjs.Graphics().p("AuSDxIUjxFIICKHI02Qig");
	var mask_graphics_541 = new cjs.Graphics().p("AuZD3IUxxRIICKHI1EQug");
	var mask_graphics_542 = new cjs.Graphics().p("AugD8IU/xcIICKGI1SQ7g");
	var mask_graphics_543 = new cjs.Graphics().p("AuoECIVOxoIIDKGI1hRHg");
	var mask_graphics_544 = new cjs.Graphics().p("AuvEHIVdxyIICKFI1vRSg");
	var mask_graphics_545 = new cjs.Graphics().p("Au2ENIVrx+IICKFI19Reg");
	var mask_graphics_546 = new cjs.Graphics().p("Au9ESIV5yJIICKFI2LRqg");
	var mask_graphics_547 = new cjs.Graphics().p("AvEEYIWIyVIIBKFI2ZR2g");
	var mask_graphics_548 = new cjs.Graphics().p("AvLEeIWWygIIBKEI2nSCg");
	var mask_graphics_549 = new cjs.Graphics().p("AvTEjIWlyrIICKEI22SNg");
	var mask_graphics_550 = new cjs.Graphics().p("AvaEpIWzy3IICKFI3ESYg");
	var mask_graphics_551 = new cjs.Graphics().p("AvhEuIXBzCIICKEI3SSlg");
	var mask_graphics_552 = new cjs.Graphics().p("AvoE0IXQzNIIBKDI3gSxg");
	var mask_graphics_553 = new cjs.Graphics().p("AvwE6IXfzZIIBKDI3uS8g");
	var mask_graphics_554 = new cjs.Graphics().p("Av2E/IXszkIIBKDI38TIg");
	var mask_graphics_555 = new cjs.Graphics().p("Av+FFIX8zwIIBKDI4LTUg");
	var mask_graphics_556 = new cjs.Graphics().p("AwFFLIYKz8IIBKDI4aTgg");
	var mask_graphics_557 = new cjs.Graphics().p("AwMFQIYY0GIIBKCI4nTrg");
	var mask_graphics_558 = new cjs.Graphics().p("AwTFWIYn0SIIAKCI41T3g");
	var mask_graphics_559 = new cjs.Graphics().p("AwbFbIY20dIIBKBI5EUEg");
	var mask_graphics_560 = new cjs.Graphics().p("AwiFhIZE0pIIBKCI5SUPg");
	var mask_graphics_561 = new cjs.Graphics().p("AwpFmIZT00IIAKCI5gUbg");
	var mask_graphics_562 = new cjs.Graphics().p("AwwFsIZh0/IIAKBI5vUmg");
	var mask_graphics_563 = new cjs.Graphics().p("Aw4FxIZw1KIIAKBI59Uyg");
	var mask_graphics_564 = new cjs.Graphics().p("Aw+F3IZ91WIIAKBI6KU+g");
	var mask_graphics_565 = new cjs.Graphics().p("AxGF9IaM1iIIBKAI6aVLg");
	var mask_graphics_566 = new cjs.Graphics().p("AxNGCIab1sIIAKAI6oVWg");
	var mask_graphics_567 = new cjs.Graphics().p("AxUGIIap14IIAKAI61Vhg");
	var mask_graphics_568 = new cjs.Graphics().p("AxbGNIa42DIIAJ/I7FVug");
	var mask_graphics_569 = new cjs.Graphics().p("AxjGTIbG2PIIBJ/I7TV6g");
	var mask_graphics_570 = new cjs.Graphics().p("AxqGZIbV2aIIAJ+I7hWGg");
	var mask_graphics_571 = new cjs.Graphics().p("AxxGeIbj2lIIAJ+I7vWRg");
	var mask_graphics_572 = new cjs.Graphics().p("Ax4GkIby2xIH/J+I79Wdg");
	var mask_graphics_573 = new cjs.Graphics().p("Ax/GpIcA28IH/J+I8LWpg");
	var mask_graphics_574 = new cjs.Graphics().p("AyHGvIcP3IIH/J+I8ZW1g");
	var mask_graphics_575 = new cjs.Graphics().p("AyOG1Icd3TIIAJ9I8oXAg");
	var mask_graphics_576 = new cjs.Graphics().p("AyVG6Ics3eIH/J9I82XMg");
	var mask_graphics_577 = new cjs.Graphics().p("AycHAIc63qIH/J9I9EXYg");
	var mask_graphics_578 = new cjs.Graphics().p("AykHGIdK32IH/J9I9TXkg");
	var mask_graphics_579 = new cjs.Graphics().p("AyrHLIdY4BIH/J8I9hXwg");
	var mask_graphics_580 = new cjs.Graphics().p("AyyHRIdm4MIH/J8I9vX7g");
	var mask_graphics_581 = new cjs.Graphics().p("Ay5HWId04XIH/J7I99YIg");
	var mask_graphics_582 = new cjs.Graphics().p("AzAHcIeC4jIH/J7I+LYUg");
	var mask_graphics_583 = new cjs.Graphics().p("AzHHiIeR4vIH+J7I+ZYgg");
	var mask_graphics_584 = new cjs.Graphics().p("AzOHnIef45IH+J6I+nYsg");
	var mask_graphics_585 = new cjs.Graphics().p("AzWHtIeu5FIH/J6I+2Y3g");
	var mask_graphics_586 = new cjs.Graphics().p("AzdHyIe95QIH+J6I/EZDg");
	var mask_graphics_587 = new cjs.Graphics().p("AzkH4IfL5cIH+J6I/SZPg");
	var mask_graphics_588 = new cjs.Graphics().p("AzrH+IfZ5nIH+J5I/gZbg");
	var mask_graphics_589 = new cjs.Graphics().p("AzyIDIfo5zIH9J6I/uZng");
	var mask_graphics_590 = new cjs.Graphics().p("Az6IJIf35+IH+J5I/+Zyg");
	var mask_graphics_591 = new cjs.Graphics().p("A0BIPMAgFgaKIH+J5MggLAZ+g");
	var mask_graphics_592 = new cjs.Graphics().p("A0IIUMAgTgaVIH+J5MggaAaKg");
	var mask_graphics_593 = new cjs.Graphics().p("A0PIaMAgigahIH9J5MggnAaWg");
	var mask_graphics_594 = new cjs.Graphics().p("A0WIfMAgwgarIH9J4Mgg1Aahg");
	var mask_graphics_595 = new cjs.Graphics().p("A0eIkMAg/ga2IH+J4MghEAatg");
	var mask_graphics_596 = new cjs.Graphics().p("A0lIqMAhOgbCIH9J3MghSAa6g");
	var mask_graphics_597 = new cjs.Graphics().p("A0sIwMAhcgbNIH9J3MghgAbFg");
	var mask_graphics_598 = new cjs.Graphics().p("A0zI1MAhqgbYIH9J2MghvAbRg");
	var mask_graphics_599 = new cjs.Graphics().p("A06I7MAh4gbkIH9J2Mgh9Abdg");
	var mask_graphics_600 = new cjs.Graphics().p("A1CJBMAiIgbwIH8J2MgiLAbpg");
	var mask_graphics_601 = new cjs.Graphics().p("A1JJGMAiWgb7IH9J2MgiaAb1g");
	var mask_graphics_602 = new cjs.Graphics().p("A1QJMMAikgcGIH9J1MgioAcAg");
	var mask_graphics_603 = new cjs.Graphics().p("A1XJRMAiygcRIH9J1Mgi1AcMg");
	var mask_graphics_604 = new cjs.Graphics().p("A1fJXMAjCgcdIH9J1MgjFAcYg");
	var mask_graphics_605 = new cjs.Graphics().p("A1lJdMAjPgcpIH9J1MgjTAckg");
	var mask_graphics_606 = new cjs.Graphics().p("A1tJiMAjfgczIH8J0MgjhAcwg");
	var mask_graphics_607 = new cjs.Graphics().p("A10JoMAjtgc/IH8J0MgjvAc7g");
	var mask_graphics_608 = new cjs.Graphics().p("A17JtMAj7gdKIH8J0Mgj9AdHg");
	var mask_graphics_609 = new cjs.Graphics().p("A2CJzMAkJgdWIH8J0MgkLAdTg");
	var mask_graphics_610 = new cjs.Graphics().p("A2JJ4MAkYgdhIH7JzMgkZAdgg");
	var mask_graphics_611 = new cjs.Graphics().p("A2RJ+MAkngdsIH8JzMgkoAdrg");
	var mask_graphics_612 = new cjs.Graphics().p("A2YKDMAk2gd3IH7JyMgk2Ad3g");
	var mask_graphics_613 = new cjs.Graphics().p("A2fKJMAlDgeDIH8JzMglEAeCg");
	var mask_graphics_614 = new cjs.Graphics().p("A2nKPMAlTgePIH8JzMglTAeOg");
	var mask_graphics_615 = new cjs.Graphics().p("AtAacMAlggeaIH8JxMglhAebg");
	var mask_graphics_616 = new cjs.Graphics().p("A3PKvMAmjgfPIH8JxMgmjAfRg");
	var mask_graphics_617 = new cjs.Graphics().p("A3wLLMAnmggGIH7JxMgnmAgGg");
	var mask_graphics_618 = new cjs.Graphics().p("A4RLlMAoogg7IH7JxMgooAg9g");
	var mask_graphics_619 = new cjs.Graphics().p("Avpa6MApqghyIH8JxMgprAhyg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(463).to({graphics:mask_graphics_463,x:94,y:233.9}).wait(1).to({graphics:mask_graphics_464,x:154.4,y:428.3}).wait(1).to({graphics:mask_graphics_465,x:155.3,y:427.5}).wait(1).to({graphics:mask_graphics_466,x:156.2,y:426.7}).wait(1).to({graphics:mask_graphics_467,x:157.2,y:425.9}).wait(1).to({graphics:mask_graphics_468,x:158.1,y:425.1}).wait(1).to({graphics:mask_graphics_469,x:159,y:424.3}).wait(1).to({graphics:mask_graphics_470,x:159.9,y:423.5}).wait(1).to({graphics:mask_graphics_471,x:160.9,y:422.7}).wait(1).to({graphics:mask_graphics_472,x:161.8,y:421.9}).wait(1).to({graphics:mask_graphics_473,x:162.7,y:421.1}).wait(1).to({graphics:mask_graphics_474,x:163.6,y:420.3}).wait(1).to({graphics:mask_graphics_475,x:164.6,y:419.5}).wait(1).to({graphics:mask_graphics_476,x:165.5,y:418.7}).wait(1).to({graphics:mask_graphics_477,x:166.4,y:417.9}).wait(1).to({graphics:mask_graphics_478,x:167.3,y:417.1}).wait(1).to({graphics:mask_graphics_479,x:168.2,y:416.3}).wait(1).to({graphics:mask_graphics_480,x:169,y:415.7}).wait(1).to({graphics:mask_graphics_481,x:169.8,y:415.1}).wait(1).to({graphics:mask_graphics_482,x:170.5,y:414.5}).wait(1).to({graphics:mask_graphics_483,x:171.2,y:413.9}).wait(1).to({graphics:mask_graphics_484,x:172,y:413.3}).wait(1).to({graphics:mask_graphics_485,x:172.7,y:412.8}).wait(1).to({graphics:mask_graphics_486,x:173.5,y:412.1}).wait(1).to({graphics:mask_graphics_487,x:174.2,y:411.6}).wait(1).to({graphics:mask_graphics_488,x:175,y:410.9}).wait(1).to({graphics:mask_graphics_489,x:175.7,y:410.4}).wait(1).to({graphics:mask_graphics_490,x:176.5,y:409.8}).wait(1).to({graphics:mask_graphics_491,x:177.2,y:409.2}).wait(1).to({graphics:mask_graphics_492,x:178,y:408.6}).wait(1).to({graphics:mask_graphics_493,x:178.7,y:408}).wait(1).to({graphics:mask_graphics_494,x:179.5,y:407.4}).wait(1).to({graphics:mask_graphics_495,x:180.2,y:406.8}).wait(1).to({graphics:mask_graphics_496,x:180.9,y:406.2}).wait(1).to({graphics:mask_graphics_497,x:181.7,y:405.6}).wait(1).to({graphics:mask_graphics_498,x:182.4,y:405}).wait(1).to({graphics:mask_graphics_499,x:183.2,y:404.4}).wait(1).to({graphics:mask_graphics_500,x:183.9,y:403.8}).wait(1).to({graphics:mask_graphics_501,x:184.7,y:403.2}).wait(1).to({graphics:mask_graphics_502,x:185.4,y:402.6}).wait(1).to({graphics:mask_graphics_503,x:186.2,y:402}).wait(1).to({graphics:mask_graphics_504,x:186.9,y:401.4}).wait(1).to({graphics:mask_graphics_505,x:187.7,y:400.8}).wait(1).to({graphics:mask_graphics_506,x:188.4,y:400.2}).wait(1).to({graphics:mask_graphics_507,x:189.2,y:399.6}).wait(1).to({graphics:mask_graphics_508,x:189.9,y:399}).wait(1).to({graphics:mask_graphics_509,x:190.6,y:398.4}).wait(1).to({graphics:mask_graphics_510,x:191.4,y:397.8}).wait(1).to({graphics:mask_graphics_511,x:192.1,y:397.2}).wait(1).to({graphics:mask_graphics_512,x:192.9,y:396.6}).wait(1).to({graphics:mask_graphics_513,x:193.6,y:396}).wait(1).to({graphics:mask_graphics_514,x:194.4,y:395.4}).wait(1).to({graphics:mask_graphics_515,x:195.1,y:394.8}).wait(1).to({graphics:mask_graphics_516,x:195.9,y:394.2}).wait(1).to({graphics:mask_graphics_517,x:196.6,y:393.6}).wait(1).to({graphics:mask_graphics_518,x:197.4,y:393}).wait(1).to({graphics:mask_graphics_519,x:198.1,y:392.4}).wait(1).to({graphics:mask_graphics_520,x:198.9,y:391.8}).wait(1).to({graphics:mask_graphics_521,x:199.6,y:391.2}).wait(1).to({graphics:mask_graphics_522,x:200.3,y:390.6}).wait(1).to({graphics:mask_graphics_523,x:201.1,y:390}).wait(1).to({graphics:mask_graphics_524,x:201.8,y:389.4}).wait(1).to({graphics:mask_graphics_525,x:202.6,y:388.8}).wait(1).to({graphics:mask_graphics_526,x:203.3,y:388.2}).wait(1).to({graphics:mask_graphics_527,x:204.1,y:387.6}).wait(1).to({graphics:mask_graphics_528,x:204.8,y:387}).wait(1).to({graphics:mask_graphics_529,x:205.5,y:386.4}).wait(1).to({graphics:mask_graphics_530,x:206.3,y:385.8}).wait(1).to({graphics:mask_graphics_531,x:207.1,y:385.2}).wait(1).to({graphics:mask_graphics_532,x:207.8,y:384.7}).wait(1).to({graphics:mask_graphics_533,x:208.6,y:384}).wait(1).to({graphics:mask_graphics_534,x:209.3,y:383.5}).wait(1).to({graphics:mask_graphics_535,x:210,y:382.8}).wait(1).to({graphics:mask_graphics_536,x:210.8,y:382.3}).wait(1).to({graphics:mask_graphics_537,x:211.5,y:381.7}).wait(1).to({graphics:mask_graphics_538,x:212.3,y:381.1}).wait(1).to({graphics:mask_graphics_539,x:213,y:380.5}).wait(1).to({graphics:mask_graphics_540,x:213.8,y:379.9}).wait(1).to({graphics:mask_graphics_541,x:214.5,y:379.3}).wait(1).to({graphics:mask_graphics_542,x:215.2,y:378.7}).wait(1).to({graphics:mask_graphics_543,x:216,y:378.1}).wait(1).to({graphics:mask_graphics_544,x:216.7,y:377.5}).wait(1).to({graphics:mask_graphics_545,x:217.5,y:376.9}).wait(1).to({graphics:mask_graphics_546,x:218.2,y:376.3}).wait(1).to({graphics:mask_graphics_547,x:219,y:375.7}).wait(1).to({graphics:mask_graphics_548,x:219.7,y:375.1}).wait(1).to({graphics:mask_graphics_549,x:220.5,y:374.5}).wait(1).to({graphics:mask_graphics_550,x:221.2,y:373.9}).wait(1).to({graphics:mask_graphics_551,x:222,y:373.3}).wait(1).to({graphics:mask_graphics_552,x:222.7,y:372.7}).wait(1).to({graphics:mask_graphics_553,x:223.5,y:372.1}).wait(1).to({graphics:mask_graphics_554,x:224.2,y:371.5}).wait(1).to({graphics:mask_graphics_555,x:224.9,y:370.9}).wait(1).to({graphics:mask_graphics_556,x:225.7,y:370.3}).wait(1).to({graphics:mask_graphics_557,x:226.4,y:369.7}).wait(1).to({graphics:mask_graphics_558,x:227.2,y:369.1}).wait(1).to({graphics:mask_graphics_559,x:227.9,y:368.5}).wait(1).to({graphics:mask_graphics_560,x:228.7,y:367.9}).wait(1).to({graphics:mask_graphics_561,x:229.4,y:367.3}).wait(1).to({graphics:mask_graphics_562,x:230.2,y:366.7}).wait(1).to({graphics:mask_graphics_563,x:230.9,y:366.1}).wait(1).to({graphics:mask_graphics_564,x:231.7,y:365.5}).wait(1).to({graphics:mask_graphics_565,x:232.4,y:364.9}).wait(1).to({graphics:mask_graphics_566,x:233.2,y:364.3}).wait(1).to({graphics:mask_graphics_567,x:233.9,y:363.7}).wait(1).to({graphics:mask_graphics_568,x:234.7,y:363.1}).wait(1).to({graphics:mask_graphics_569,x:235.4,y:362.5}).wait(1).to({graphics:mask_graphics_570,x:236.1,y:361.9}).wait(1).to({graphics:mask_graphics_571,x:236.9,y:361.3}).wait(1).to({graphics:mask_graphics_572,x:237.6,y:360.7}).wait(1).to({graphics:mask_graphics_573,x:238.4,y:360.1}).wait(1).to({graphics:mask_graphics_574,x:239.1,y:359.5}).wait(1).to({graphics:mask_graphics_575,x:239.9,y:358.9}).wait(1).to({graphics:mask_graphics_576,x:240.6,y:358.3}).wait(1).to({graphics:mask_graphics_577,x:241.4,y:357.7}).wait(1).to({graphics:mask_graphics_578,x:242.1,y:357.1}).wait(1).to({graphics:mask_graphics_579,x:242.9,y:356.6}).wait(1).to({graphics:mask_graphics_580,x:243.6,y:355.9}).wait(1).to({graphics:mask_graphics_581,x:244.4,y:355.4}).wait(1).to({graphics:mask_graphics_582,x:245.1,y:354.7}).wait(1).to({graphics:mask_graphics_583,x:245.8,y:354.1}).wait(1).to({graphics:mask_graphics_584,x:246.6,y:353.6}).wait(1).to({graphics:mask_graphics_585,x:247.3,y:352.9}).wait(1).to({graphics:mask_graphics_586,x:248.1,y:352.4}).wait(1).to({graphics:mask_graphics_587,x:248.8,y:351.7}).wait(1).to({graphics:mask_graphics_588,x:249.6,y:351.2}).wait(1).to({graphics:mask_graphics_589,x:250.3,y:350.6}).wait(1).to({graphics:mask_graphics_590,x:251.1,y:350}).wait(1).to({graphics:mask_graphics_591,x:251.8,y:349.4}).wait(1).to({graphics:mask_graphics_592,x:252.6,y:348.8}).wait(1).to({graphics:mask_graphics_593,x:253.3,y:348.2}).wait(1).to({graphics:mask_graphics_594,x:254,y:347.6}).wait(1).to({graphics:mask_graphics_595,x:254.8,y:347}).wait(1).to({graphics:mask_graphics_596,x:255.5,y:346.4}).wait(1).to({graphics:mask_graphics_597,x:256.3,y:345.8}).wait(1).to({graphics:mask_graphics_598,x:257,y:345.2}).wait(1).to({graphics:mask_graphics_599,x:257.8,y:344.6}).wait(1).to({graphics:mask_graphics_600,x:258.5,y:344}).wait(1).to({graphics:mask_graphics_601,x:259.3,y:343.4}).wait(1).to({graphics:mask_graphics_602,x:260,y:342.8}).wait(1).to({graphics:mask_graphics_603,x:260.8,y:342.2}).wait(1).to({graphics:mask_graphics_604,x:261.5,y:341.6}).wait(1).to({graphics:mask_graphics_605,x:262.3,y:341}).wait(1).to({graphics:mask_graphics_606,x:263,y:340.4}).wait(1).to({graphics:mask_graphics_607,x:263.8,y:339.8}).wait(1).to({graphics:mask_graphics_608,x:264.5,y:339.2}).wait(1).to({graphics:mask_graphics_609,x:265.2,y:338.6}).wait(1).to({graphics:mask_graphics_610,x:266,y:338}).wait(1).to({graphics:mask_graphics_611,x:266.7,y:337.4}).wait(1).to({graphics:mask_graphics_612,x:267.5,y:336.8}).wait(1).to({graphics:mask_graphics_613,x:268.2,y:336.2}).wait(1).to({graphics:mask_graphics_614,x:269,y:335.6}).wait(1).to({graphics:mask_graphics_615,x:207.6,y:231.8}).wait(1).to({graphics:mask_graphics_616,x:271.2,y:333.8}).wait(1).to({graphics:mask_graphics_617,x:272.8,y:332.6}).wait(1).to({graphics:mask_graphics_618,x:274.2,y:331.3}).wait(1).to({graphics:mask_graphics_619,x:217.3,y:234.7}).wait(82));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("AwIRNQjeAJA9kTQA+kSF1lbQF1laFNhHQIfiNGtmuQDIjJBXh9");
	this.shape_1.setTransform(272.3,355.9);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(463).to({_off:false},0).wait(238));

	// Layer 10 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_439 = new cjs.Graphics().p("EAH7AlpIAAipIFIAAIAACpg");
	var mask_1_graphics_440 = new cjs.Graphics().p("AijBeIAAi7IFHAAIAAC7g");
	var mask_1_graphics_441 = new cjs.Graphics().p("AijBoIAAjQIFHAAIAADQg");
	var mask_1_graphics_442 = new cjs.Graphics().p("AijBzIAAjlIFHAAIAADlg");
	var mask_1_graphics_443 = new cjs.Graphics().p("AijB9IAAj5IFHAAIAAD5g");
	var mask_1_graphics_444 = new cjs.Graphics().p("AijCHIAAkOIFHAAIAAEOg");
	var mask_1_graphics_445 = new cjs.Graphics().p("AijCSIAAkjIFHAAIAAEjg");
	var mask_1_graphics_446 = new cjs.Graphics().p("AijCcIAAk3IFHAAIAAE3g");
	var mask_1_graphics_447 = new cjs.Graphics().p("AijCmIAAlLIFHAAIAAFLg");
	var mask_1_graphics_448 = new cjs.Graphics().p("AijCwIAAlgIFHAAIAAFgg");
	var mask_1_graphics_449 = new cjs.Graphics().p("AijC7IAAl1IFHAAIAAF1g");
	var mask_1_graphics_450 = new cjs.Graphics().p("AijDFIAAmJIFHAAIAAGJg");
	var mask_1_graphics_451 = new cjs.Graphics().p("AijDQIAAmfIFHAAIAAGfg");
	var mask_1_graphics_452 = new cjs.Graphics().p("AijDaIAAmzIFHAAIAAGzg");
	var mask_1_graphics_453 = new cjs.Graphics().p("AijDkIAAnHIFHAAIAAHHg");
	var mask_1_graphics_454 = new cjs.Graphics().p("AijDvIAAncIFHAAIAAHcg");
	var mask_1_graphics_455 = new cjs.Graphics().p("AijD5IAAnxIFHAAIAAHxg");
	var mask_1_graphics_456 = new cjs.Graphics().p("AijEDIAAoFIFHAAIAAIFg");
	var mask_1_graphics_457 = new cjs.Graphics().p("AijENIAAoZIFHAAIAAIZg");
	var mask_1_graphics_458 = new cjs.Graphics().p("AijEYIAAovIFHAAIAAIvg");
	var mask_1_graphics_459 = new cjs.Graphics().p("AijEiIAApDIFHAAIAAJDg");
	var mask_1_graphics_460 = new cjs.Graphics().p("AijEsIAApXIFHAAIAAJXg");
	var mask_1_graphics_461 = new cjs.Graphics().p("EAIeAlpIAAptIFIAAIAAJtg");
	var mask_1_graphics_462 = new cjs.Graphics().p("Ai7E6IAApzIF3AAIAAJzg");
	var mask_1_graphics_463 = new cjs.Graphics().p("EAHLAlpIAAp6IGpAAIAAJ6g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(439).to({graphics:mask_1_graphics_439,x:83.5,y:240.8}).wait(1).to({graphics:mask_1_graphics_440,x:150.9,y:472.3}).wait(1).to({graphics:mask_1_graphics_441,x:151.2,y:471.3}).wait(1).to({graphics:mask_1_graphics_442,x:151.5,y:470.2}).wait(1).to({graphics:mask_1_graphics_443,x:151.8,y:469.2}).wait(1).to({graphics:mask_1_graphics_444,x:152.2,y:468.2}).wait(1).to({graphics:mask_1_graphics_445,x:152.5,y:467.1}).wait(1).to({graphics:mask_1_graphics_446,x:152.8,y:466.1}).wait(1).to({graphics:mask_1_graphics_447,x:153.1,y:465.1}).wait(1).to({graphics:mask_1_graphics_448,x:153.4,y:464.1}).wait(1).to({graphics:mask_1_graphics_449,x:153.8,y:463}).wait(1).to({graphics:mask_1_graphics_450,x:154.1,y:462}).wait(1).to({graphics:mask_1_graphics_451,x:154.4,y:461}).wait(1).to({graphics:mask_1_graphics_452,x:154.7,y:460}).wait(1).to({graphics:mask_1_graphics_453,x:155,y:458.9}).wait(1).to({graphics:mask_1_graphics_454,x:155.3,y:457.9}).wait(1).to({graphics:mask_1_graphics_455,x:155.7,y:456.9}).wait(1).to({graphics:mask_1_graphics_456,x:156,y:455.9}).wait(1).to({graphics:mask_1_graphics_457,x:156.3,y:454.8}).wait(1).to({graphics:mask_1_graphics_458,x:156.6,y:453.8}).wait(1).to({graphics:mask_1_graphics_459,x:156.9,y:452.8}).wait(1).to({graphics:mask_1_graphics_460,x:157.3,y:451.7}).wait(1).to({graphics:mask_1_graphics_461,x:87,y:240.9}).wait(1).to({graphics:mask_1_graphics_462,x:156.5,y:450.4}).wait(1).to({graphics:mask_1_graphics_463,x:88.4,y:240.9}).wait(238));

	// Layer 9
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("Aw1R+QjeAJA9kTQA+kSF1lbQF1laFNhHQIfiNGtmuQDIjJCxjf");
	this.shape_2.setTransform(276.8,351);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(439).to({_off:false},0).wait(262));

	// Layer 12
	this.instance_2 = new lib.ar2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(255.5,433,1,1,0,77.6,-102.4,0.7,-0.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(289).to({_off:false},0).wait(412));

	// Layer 7 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_289 = new cjs.Graphics().p("A3UTCQgrsIIGpCQIGpEMGgqQMHgsJDIGMgnCArqQpDoGgssGg");
	var mask_2_graphics_290 = new cjs.Graphics().p("A3mSkQgZsJIUo1QITo3MHgYQMIgZI3ITMgoFAquQo3oUgYsHg");
	var mask_2_graphics_291 = new cjs.Graphics().p("A33SHQgHsJIhopQIhoqMIgFQMIgHIqIhMgpFApvQoqohgGsHg");
	var mask_2_graphics_292 = new cjs.Graphics().p("A4HRqQAMsJIuocQIuocMIANQMIALIcIvMgqEAovQocouAMsHg");
	var mask_2_graphics_293 = new cjs.Graphics().p("A4VROQAfsJI6oOQI7oPMHAgQMHAeIQI6MgrCAnvQoPo7AfsGg");
	var mask_2_graphics_294 = new cjs.Graphics().p("A4iQyQAxsIJHoAQJIoCMFAzQMHAwIBJHMgr9AmsQoCpHAysFg");
	var mask_2_graphics_295 = new cjs.Graphics().p("A4uQWQBEsGJUnzQJTnzMEBFQMGBDHzJSMgs4AlpQnzpTBDsEg");
	var mask_2_graphics_296 = new cjs.Graphics().p("A43P7QBWsFJfnkQJfnkMCBXQMEBVHlJeMgtxAkkQnlpfBXsCg");
	var mask_2_graphics_297 = new cjs.Graphics().p("A5APgQBpsCJrnVQJqnXMABqQMBBoHWJpMgunAjdQnWpqBosAg");
	var mask_2_graphics_298 = new cjs.Graphics().p("A5HPGQB8sAJ1nGQJ2nHL9B8QL+B6HIJ0MgvdAiVQnIp1B7r9g");
	var mask_2_graphics_299 = new cjs.Graphics().p("A5MOsQCOr9KAm3QKAm4L6CPQL7CMG4J/MgwQAhMQm4qACNr6g");
	var mask_2_graphics_300 = new cjs.Graphics().p("A5QOSQCgr4KKmoQKLmpL2ChQL4CfGpKJMgxDAgBQmoqKCfr3g");
	var mask_2_graphics_301 = new cjs.Graphics().p("A5SN5QCyr0KUmYQKUmZLzCzQL0CwGZKUMgxzAe1QmZqUCyrzg");
	var mask_2_graphics_302 = new cjs.Graphics().p("A5TNhQDErwKemIQKemJLuDFQLvDCGJKdMgygAdpQmKqeDErug");
	var mask_2_graphics_303 = new cjs.Graphics().p("A5TNJQDWrrKnl4QKol5LpDXQLqDUF5KnMgzNAcbQl5qoDVrpg");
	var mask_2_graphics_304 = new cjs.Graphics().p("A5QMyQDnrmKwlnQKwlpLkDoQLlDnFoKvMgz3AbMQloqwDnrkg");
	var mask_2_graphics_305 = new cjs.Graphics().p("A5NMbQD5rgK5lXQK3lYLfD6QLfD4FYK3Mg0fAZ9QlYq4D4rfg");
	var mask_2_graphics_306 = new cjs.Graphics().p("A5IMFQELraLAlGQLAlHLYELQLaEKFHK/Mg1GAYsQlIrBEKrYg");
	var mask_2_graphics_307 = new cjs.Graphics().p("A5BLwQEcrULIk1QLHk2LSEdQLTEaE2LHMg1rAXaQk3rIEcrRg");
	var mask_2_graphics_308 = new cjs.Graphics().p("A45LbQEtrMLPklQLPklLLEuQLLErEmLPMg2OAWHQkmrPEtrKg");
	var mask_2_graphics_309 = new cjs.Graphics().p("A4vLHQE+rFLWkTQLVkULDE/QLFE8EULWMg2vAU0QkUrWE+rDg");
	var mask_2_graphics_310 = new cjs.Graphics().p("A4kKzQFPq8LckDQLbkCK8FQQK9FMECLdMg3NATfQkDrcFPq7g");
	var mask_2_graphics_311 = new cjs.Graphics().p("A4YKgQFgq0LijxQLhjxK0FgQK0FeDxLiMg3qASLQjxriFfqzg");
	var mask_2_graphics_312 = new cjs.Graphics().p("A4KKOQFwqsLojfQLnjfKrFxQKsFtDfLoMg4FAQ2QjfroFvqqg");
	var mask_2_graphics_313 = new cjs.Graphics().p("A37J8QGBqiLtjOQLsjNKiGBQKiF+DOLtMg4eAPfQjNrtF/qhg");
	var mask_2_graphics_314 = new cjs.Graphics().p("A3qJrQGRqZLxi7QLxi8KYGRQKaGOC7LyMg40AOIQi7rxGPqYg");
	var mask_2_graphics_315 = new cjs.Graphics().p("A3XJaQGgqPL2ipQL1ipKOGfQKQGfCpL2Mg5IAMxQiqr1GgqPg");
	var mask_2_graphics_316 = new cjs.Graphics().p("A3EJLQGwqFL6iXQL5iYKEGwQKGGuCXL6Mg5bALZQiXr5GuqEg");
	var mask_2_graphics_317 = new cjs.Graphics().p("A2uI8QG/p7L9iFQL8iFJ6G/QJ7G9CFL+Mg5rAKBQiFr9G+p5g");
	var mask_2_graphics_318 = new cjs.Graphics().p("A2YItQHOpvMAhzQL/hyJvHNQJxHNByMAMg55AIpQhzsAHNpvg");
	var mask_2_graphics_319 = new cjs.Graphics().p("A2AIgQHdpkMDhhQMBhgJkHcQJlHcBgMCMg6FAHRQhhsDHcpjg");
	var mask_2_graphics_320 = new cjs.Graphics().p("A1nITQHspZMEhNQMEhOJYHqQJaHqBOMFMg6QAF4QhOsFHqpYg");
	var mask_2_graphics_321 = new cjs.Graphics().p("A1MIHQH6pNMGg7QMFg8JMH5QJOH4A7MHMg6XAEeQg7sGH4pMg");
	var mask_2_graphics_322 = new cjs.Graphics().p("A0wH8QIIpBMHgpQMGgpJAIHQJCIGApMIMg6dADFQgpsIIGo/g");
	var mask_2_graphics_323 = new cjs.Graphics().p("A0SHxQIVo0MHgWQMIgXIzIVQI1ITAXMJMg6hABrQgWsIIUozg");
	var mask_2_graphics_324 = new cjs.Graphics().p("Az0HnQIjonMHgEQMJgEImIiQIoIhAEMJMg6iAASQgEsJIhomg");
	var mask_2_graphics_325 = new cjs.Graphics().p("A8RbcQAPsJIuoZQIwoaMHAPQMIAPIZIvQIbIugPMIg");
	var mask_2_graphics_326 = new cjs.Graphics().p("A8QaYQAisHI6oMQI9oMMGAhQMIAiIMI7QINI7ghMHg");
	var mask_2_graphics_327 = new cjs.Graphics().p("A8NZVQA0sGJHn+QJIn/MGA0QMHA0H9JIQIAJHg0MGg");
	var mask_2_graphics_328 = new cjs.Graphics().p("A8KYSQBGsFJTnwQJVnwMEBGQMFBHHwJTQHyJUhHMFg");
	var mask_2_graphics_329 = new cjs.Graphics().p("A8GXPQBZsDJfnhQJgniMDBZQMDBYHhJgQHjJfhZMDg");
	var mask_2_graphics_330 = new cjs.Graphics().p("A8AWNQBrsBJqnTQJsnTMABrQMABrHTJrQHUJqhrMBg");
	var mask_2_graphics_331 = new cjs.Graphics().p("A76VKQB+r+J1nEQJ2nEL+B+QL+B9HDJ2QHGJ1h+L+g");
	var mask_2_graphics_332 = new cjs.Graphics().p("A7yUIQCPr7KAm1QKBm1L6CQQL7CQG1KAQG2KAiQL7g");
	var mask_2_graphics_333 = new cjs.Graphics().p("A7qTGQCir3KKmlQKMmmL2CiQL3CiGlKKQGnKLiiL3g");
	var mask_2_graphics_334 = new cjs.Graphics().p("A7gSEQC0rzKUmUQKVmXLyC0QLzC0GWKUQGXKUi0Lzg");
	var mask_2_graphics_335 = new cjs.Graphics().p("A7WRDQDGruKemFQKfmHLtDGQLvDGGFKeQGIKdjGLvg");
	var mask_2_graphics_336 = new cjs.Graphics().p("A7KQCQDYrpKml1QKpl3LoDYQLqDYF1KnQF3KnjYLpg");
	var mask_2_graphics_337 = new cjs.Graphics().p("A69PCQDqrkKvlkQKxlnLjDqQLkDpFlKwQFnKwjqLkg");
	var mask_2_graphics_338 = new cjs.Graphics().p("A6vOCQD7reK4lUQK5lWLdD7QLfD8FUK4QFWK4j7Leg");
	var mask_2_graphics_339 = new cjs.Graphics().p("A6gNCQEMrYLAlDQLBlFLXENQLYEMFELAQFFLAkMLYg");
	var mask_2_graphics_340 = new cjs.Graphics().p("A6QMCQEfrSLHkxQLIk0LREfQLREdEyLJQE0LHkeLSg");
	var mask_2_graphics_341 = new cjs.Graphics().p("A5+LCQEwrJLOkiQLQkhLKEwQLKEvEgLQQEjLPkxLKg");
	var mask_2_graphics_342 = new cjs.Graphics().p("A5sKCQFCrBLVkPQLXkQLCFBQLCFBEPLXQEQLVlBLDg");
	var mask_2_graphics_343 = new cjs.Graphics().p("A5YJDQFTq5Lcj9QLdj+K6FTQK6FSD8LdQD/LclTK6g");
	var mask_2_graphics_344 = new cjs.Graphics().p("A5DIGQFkqxLijrQLjjsKxFkQKxFjDrLjQDtLilkKyg");
	var mask_2_graphics_345 = new cjs.Graphics().p("A4tHIQF1qnLnjZQLojaKpF1QKoF0DZLpQDaLnl1Kpg");
	var mask_2_graphics_346 = new cjs.Graphics().p("A4WGMQGGqeLsjHQLtjHKfGGQKfGEDGLuQDILtmFKfg");
	var mask_2_graphics_347 = new cjs.Graphics().p("A3+FRQGWqVLxi0QLyi0KVGWQKVGUC0LzQC1LxmWKVg");
	var mask_2_graphics_348 = new cjs.Graphics().p("A3lEWQGmqKL1ihQL2iiKLGmQKLGlChL2QCjL2mmKLg");
	var mask_2_graphics_349 = new cjs.Graphics().p("A3LDdQG2qAL5iPQL6iPKAG2QKAG1COL6QCQL5m1KBg");
	var mask_2_graphics_350 = new cjs.Graphics().p("A2wCkQHFp0L9h9QL9h8J1HFQJ1HFB8L9QB9L9nGJ2g");
	var mask_2_graphics_351 = new cjs.Graphics().p("A2UBsQHVppL+hpQMAhqJqHVQJqHUBpMAQBqMAnVJqg");
	var mask_2_graphics_352 = new cjs.Graphics().p("A13A2QHjpeMChWQMChXJeHkQJeHjBWMDQBXMCnkJeg");
	var mask_2_graphics_353 = new cjs.Graphics().p("A1aAAQHzpRMDhDQMEhEJSHzQJSHxBDMEQBEMEnzJTg");
	var mask_2_graphics_354 = new cjs.Graphics().p("A07gzQIBpGMEgwQMGgxJFIBQJGIAAvMGQAyMFoBJGg");
	var mask_2_graphics_355 = new cjs.Graphics().p("A0chnQIPo4MFgeQMHgdI5IPQI4IOAdMHQAeMGoPI5g");
	var mask_2_graphics_356 = new cjs.Graphics().p("Az8iZQIdorMFgLQMIgKIrIdQIsIcAJMHQALMHodIrg");
	var mask_2_graphics_357 = new cjs.Graphics().p("AzcjKQIroeMFAJQMIAJIeIqQIeIqgKMGQgIMHoqIeg");
	var mask_2_graphics_358 = new cjs.Graphics().p("Ay6j6QI4oQMEAcQMHAcIQI4QIRI2gdMHQgbMGo4IQg");
	var mask_2_graphics_359 = new cjs.Graphics().p("AyYkoQJEoCMEAvQMGAvICJEQICJEgwMFQgtMFpFICg");
	var mask_2_graphics_360 = new cjs.Graphics().p("Ax1lVQJRn0MCBCQMFBCHzJRQH0JQhDMEQhBMEpRHzg");
	var mask_2_graphics_361 = new cjs.Graphics().p("AxSmBQJdnlMABVQMDBVHlJdQHlJchWMCQhUMCpdHlg");
	var mask_2_graphics_362 = new cjs.Graphics().p("AwumsQJpnWL+BoQMABoHWJpQHWJohpL/QhnMApoHWg");
	var mask_2_graphics_363 = new cjs.Graphics().p("AwJnVQJ0nGL7B6QL+B7HGJ0QHHJzh8L9Qh5L9p1HGg");
	var mask_2_graphics_364 = new cjs.Graphics().p("Avjn9QJ/m3L3COQL7CNG3J/QG3J+iPL6QiML6p/G3g");
	var mask_2_graphics_365 = new cjs.Graphics().p("Au9ojQKJmnL0CgQL3CgGnKKQGnKIihL2QifL2qKGng");
	var mask_2_graphics_366 = new cjs.Graphics().p("AuWpIQKTmXLwCzQLzCzGWKSQGXKUi0LyQixLyqUGWg");
	var mask_2_graphics_367 = new cjs.Graphics().p("AtvpsQKemGLrDFQLuDFGGKdQGGKejGLsQjELuqeGGg");
	var mask_2_graphics_368 = new cjs.Graphics().p("AtHqOQKnl2LmDYQLpDYF1KmQF2KnjYLnQjXLoqnF2g");
	var mask_2_graphics_369 = new cjs.Graphics().p("AsequQKwllLgDpQLjDqFlKvQFlKwjrLiQjpLjqwFlg");
	var mask_2_graphics_370 = new cjs.Graphics().p("Ar1rNQK4lULaD7QLeD9FUK3QFUK5j9LcQj7Lcq5FUg");
	var mask_2_graphics_371 = new cjs.Graphics().p("ArMrrQLBlDLUEOQLXEOFCLAQFDLAkPLWQkNLWrBFDg");
	var mask_2_graphics_372 = new cjs.Graphics().p("AqhsHQLHkxLOEfQLQEgExLIQExLIkhLOQkeLQrJExg");
	var mask_2_graphics_373 = new cjs.Graphics().p("Ap3shQLPkgLGExQLJEyEgLOQEfLQkyLHQkwLIrQEgg");
	var mask_2_graphics_374 = new cjs.Graphics().p("ApMs6QLVkOK/FCQLBFDEOLWQENLWlDK/QlCLBrWENg");
	var mask_2_graphics_375 = new cjs.Graphics().p("AoxtJQLZkDK6FNQK8FOECLZQEDLblOK6QlNK8raECg");
	var mask_2_graphics_376 = new cjs.Graphics().p("AoXtXQLej4K0FYQK3FYD4LdQD3LflYK1QlXK2rfD4g");
	var mask_2_graphics_377 = new cjs.Graphics().p("An8tkQLhjtKwFiQKxFjDtLhQDsLiljKwQlhKxriDsg");
	var mask_2_graphics_378 = new cjs.Graphics().p("AngtxQLkjhKqFsQKsFtDhLlQDiLlluKrQlsKrrlDhg");
	var mask_2_graphics_379 = new cjs.Graphics().p("AnFt9QLojWKkF2QKnF4DWLoQDWLol4KlQl3KmroDWg");
	var mask_2_graphics_380 = new cjs.Graphics().p("AmquJQLrjLKfGBQKhGCDKLrQDLLsmCKfQmAKgrsDLg");
	var mask_2_graphics_381 = new cjs.Graphics().p("AmOuUQLui/KZGLQKbGMC/LuQC/LvmMKZQmLKarvDAg");
	var mask_2_graphics_382 = new cjs.Graphics().p("AlyueQLwi0KTGVQKVGWC0LxQC0LymXKTQmUKUryC0g");
	var mask_2_graphics_383 = new cjs.Graphics().p("AlWuoQLzioKNGfQKOGgCpLzQCoL1mgKMQmfKPr0Cog");
	var mask_2_graphics_384 = new cjs.Graphics().p("Ak7uxQL2idKHGpQKIGqCdL2QCdL3mqKGQmpKIr3Cdg");
	var mask_2_graphics_385 = new cjs.Graphics().p("Akfu5QL5iSJ/GzQKCGzCRL5QCSL5m0KAQmyKBr5CSg");
	var mask_2_graphics_386 = new cjs.Graphics().p("AkCvBQL6iGJ5G8QJ7G+CGL6QCGL7m+J6Qm8J6r7CGg");
	var mask_2_graphics_387 = new cjs.Graphics().p("AjmvIQL8h6JyHFQJ0HHB7L8QB6L+nHJyQnFJ0r+B7g");
	var mask_2_graphics_388 = new cjs.Graphics().p("AjKvPQL+huJrHPQJuHQBuL+QBvL/nRJsQnOJtsABvg");
	var mask_2_graphics_389 = new cjs.Graphics().p("AiuvUQMAhkJkHZQJmHaBjL/QBkMBnaJlQnZJlsABkg");
	var mask_2_graphics_390 = new cjs.Graphics().p("AiRvaQMBhXJdHiQJfHjBXMBQBYMCnkJdQnhJfsCBXg");
	var mask_2_graphics_391 = new cjs.Graphics().p("Ah1veQMChMJWHrQJYHsBLMCQBMMEnsJWQnrJXsDBMg");
	var mask_2_graphics_392 = new cjs.Graphics().p("AhZviQMEhAJOH0QJQH1BAMDQBAMFn1JOQn0JQsEBAg");
	var mask_2_graphics_393 = new cjs.Graphics().p("Ag8vlQMEg1JHH9QJIH+A1MEQA0MGn+JGQn9JJsFA0g");
	var mask_2_graphics_394 = new cjs.Graphics().p("AggvoQMFgpI/IGQJBIHAoMFQApMGoHI/QoFJAsGApg");
	var mask_2_graphics_395 = new cjs.Graphics().p("AgDvqQMGgdI2IOQI5IPAdMGQAdMHoQI3QoOI4sHAdg");
	var mask_2_graphics_396 = new cjs.Graphics().p("AAYvrQMHgSIvIXQIxIXARMHQARMHoYIvQoXIxsHARg");
	var mask_2_graphics_397 = new cjs.Graphics().p("AA1vsQMHgGInIfQIoIgAFMHQAGMHohInQofIosHAGg");
	var mask_2_graphics_398 = new cjs.Graphics().p("EAAzAqwMAAeg6cQMHAGIfInQIgIogGMHQgHMIopIeQohIar8AAIgRAAg");
	var mask_2_graphics_399 = new cjs.Graphics().p("EAAWAqvMABYg6bQMHASIWIwQIXIwgSMHQgSMHoxIWQodIGrnAAIgzgBg");
	var mask_2_graphics_400 = new cjs.Graphics().p("EgAFAquMACPg6ZQMHAeINI3QIPI4geMHQgdMHo6INQoZHzrTAAQgoAAgpgCg");
	var mask_2_graphics_401 = new cjs.Graphics().p("EgAhAqtMADHg6XQMGApIFJAQIHJAgqMGQgpMGpBIFQoVHgq/AAQg5AAg4gDg");
	var mask_2_graphics_402 = new cjs.Graphics().p("EgA+AqrMAEAg6UQMGA2H8JHQH+JIg2MFQg1MGpJH8QoQHNqsAAQhHAAhJgFg");
	var mask_2_graphics_403 = new cjs.Graphics().p("EgBaAqpMAE5g6QQMEBBHzJPQH1JQhBMEQhBMFpQHzQoLG7qaAAQhVAAhZgHg");
	var mask_2_graphics_404 = new cjs.Graphics().p("EgB2AqmMAFxg6KQMDBMHrJXQHrJXhMMDQhNMEpYHqQoGGpqHAAQhkAAhogKg");
	var mask_2_graphics_405 = new cjs.Graphics().p("EgCSAqjMAGpg6FQMCBZHhJeQHjJehZMCQhYMDpfHhQoAGXp2AAQhyAAh3gNg");
	var mask_2_graphics_406 = new cjs.Graphics().p("EgCvAqfMAHig59QMBBkHYJlQHZJlhkMBQhkMBpnHYQn6GHpkAAQiBAAiGgSg");
	var mask_2_graphics_407 = new cjs.Graphics().p("EgDLAqbMAIag52QL/BwHPJsQHQJthwL/QhwL/ptHPQn0F2pUAAQiOAAiVgWg");
	var mask_2_graphics_408 = new cjs.Graphics().p("EgDnAqXMAJSg5uQL9B8HGJzQHGJzh7L+Qh8L9p0HFQnuFmpDAAQicAAijgag");
	var mask_2_graphics_409 = new cjs.Graphics().p("EgEDAqRMAKKg5kQL7CHG8J6QG9J7iHL7QiHL8p7G7QnnFWozAAQipAAiyggg");
	var mask_2_graphics_410 = new cjs.Graphics().p("EgEYAqNMAK0g5cQL6CPG0J/QG2KAiQL6QiPL6qBG0QnhFKonAAQi0AAi8gkg");
	var mask_2_graphics_411 = new cjs.Graphics().p("EgEtAqJMALdg5VQL4CYGuKEQGuKFiYL4QiYL4qFGtQncE/ocAAQi9AAjHgog");
	var mask_2_graphics_412 = new cjs.Graphics().p("EgFCAqFMAMHg5NQL2ChGmKIQGnKKigL2QihL3qKGmQnWEzoRAAQjHAAjRgsg");
	var mask_2_graphics_413 = new cjs.Graphics().p("EgFWAqAMAMvg5EQL1CpGfKOQGfKOipL1QipL1qPGeQnREooEAAQjSAAjagxg");
	var mask_2_graphics_414 = new cjs.Graphics().p("EgFrAp7MANYg47QLzCyGYKSQGYKTixLzQiyLzqUGXQnLEdn5AAQjbAAjlg2g");
	var mask_2_graphics_415 = new cjs.Graphics().p("EgGAAp2MAOCg4xQLxC6GQKXQGRKXi6LxQi7LxqYGQQnFESnvAAQjkAAjvg7g");
	var mask_2_graphics_416 = new cjs.Graphics().p("EgGUApxMAOqg4nQLvDCGJKcQGJKcjDLvQjCLuqdGJQm/EHnkAAQjuAAj4hAg");
	var mask_2_graphics_417 = new cjs.Graphics().p("EgGpAprMAPTg4cQLtDLGBKfQGCKhjLLtQjLLsqhGBQm5D9nZAAQj4AAkChGg");
	var mask_2_graphics_418 = new cjs.Graphics().p("EgG9ApmMAP8g4SQLqDUF6KjQF6KljULrQjTLqqmF5QmyDznOAAQkCAAkLhLg");
	var mask_2_graphics_419 = new cjs.Graphics().p("EgHSApgMAQlg4HQLoDcFyKpQFzKpjcLoQjcLoqqFxQmrDpnFAAQkLAAkVhRg");
	var mask_2_graphics_420 = new cjs.Graphics().p("EgHnApaMARNg36QLmDkFqKtQFrKtjkLmQjlLlqtFqQmlDfm6AAQkVAAkehYg");
	var mask_2_graphics_421 = new cjs.Graphics().p("EgJIAo6MAUPg27QLYENFEK+QFGLBkMLZQkNLYrAFEQmCCzmKAAQlDAAlJh5g");
	var mask_2_graphics_422 = new cjs.Graphics().p("EgKmAoUMAXLg1wQLJE0EeLPQEfLSk0LJQkzLJrSEdQlcCLlaAAQlyAAlwifg");
	var mask_2_graphics_423 = new cjs.Graphics().p("EgMDAnqMAaFg0cQK4FaD2LeQD3LhlaK3QlaK4rgD2QkzBnksAAQmhAAmWjJg");
	var mask_2_graphics_424 = new cjs.Graphics().p("EgNcAm7MAc5gy9QKkF/DOLrQDPLtl/KkQl/KkrtDNQkHBJj+AAQnUAAm2j4g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(289).to({graphics:mask_2_graphics_289,x:162.9,y:251}).wait(1).to({graphics:mask_2_graphics_290,x:164.6,y:249.5}).wait(1).to({graphics:mask_2_graphics_291,x:166.2,y:247.9}).wait(1).to({graphics:mask_2_graphics_292,x:167.7,y:246.3}).wait(1).to({graphics:mask_2_graphics_293,x:169.3,y:244.7}).wait(1).to({graphics:mask_2_graphics_294,x:170.7,y:243}).wait(1).to({graphics:mask_2_graphics_295,x:172.2,y:241.3}).wait(1).to({graphics:mask_2_graphics_296,x:173.6,y:239.6}).wait(1).to({graphics:mask_2_graphics_297,x:174.9,y:237.8}).wait(1).to({graphics:mask_2_graphics_298,x:176.3,y:236}).wait(1).to({graphics:mask_2_graphics_299,x:177.5,y:234.2}).wait(1).to({graphics:mask_2_graphics_300,x:178.8,y:232.3}).wait(1).to({graphics:mask_2_graphics_301,x:180,y:230.4}).wait(1).to({graphics:mask_2_graphics_302,x:181.1,y:228.5}).wait(1).to({graphics:mask_2_graphics_303,x:182.2,y:226.6}).wait(1).to({graphics:mask_2_graphics_304,x:183.2,y:224.6}).wait(1).to({graphics:mask_2_graphics_305,x:184.2,y:222.6}).wait(1).to({graphics:mask_2_graphics_306,x:185.2,y:220.6}).wait(1).to({graphics:mask_2_graphics_307,x:186.1,y:218.5}).wait(1).to({graphics:mask_2_graphics_308,x:187,y:216.4}).wait(1).to({graphics:mask_2_graphics_309,x:187.8,y:214.4}).wait(1).to({graphics:mask_2_graphics_310,x:188.5,y:212.2}).wait(1).to({graphics:mask_2_graphics_311,x:189.2,y:210.1}).wait(1).to({graphics:mask_2_graphics_312,x:189.9,y:208}).wait(1).to({graphics:mask_2_graphics_313,x:190.5,y:205.8}).wait(1).to({graphics:mask_2_graphics_314,x:191,y:203.6}).wait(1).to({graphics:mask_2_graphics_315,x:191.5,y:201.4}).wait(1).to({graphics:mask_2_graphics_316,x:192,y:199.2}).wait(1).to({graphics:mask_2_graphics_317,x:192.4,y:197}).wait(1).to({graphics:mask_2_graphics_318,x:192.7,y:194.8}).wait(1).to({graphics:mask_2_graphics_319,x:193,y:192.6}).wait(1).to({graphics:mask_2_graphics_320,x:193.3,y:190.4}).wait(1).to({graphics:mask_2_graphics_321,x:193.4,y:188.1}).wait(1).to({graphics:mask_2_graphics_322,x:193.6,y:185.9}).wait(1).to({graphics:mask_2_graphics_323,x:193.7,y:183.6}).wait(1).to({graphics:mask_2_graphics_324,x:193.7,y:181.4}).wait(1).to({graphics:mask_2_graphics_325,x:193.7,y:182.7}).wait(1).to({graphics:mask_2_graphics_326,x:193.7,y:184.9}).wait(1).to({graphics:mask_2_graphics_327,x:193.7,y:187.1}).wait(1).to({graphics:mask_2_graphics_328,x:193.7,y:189.4}).wait(1).to({graphics:mask_2_graphics_329,x:193.7,y:191.6}).wait(1).to({graphics:mask_2_graphics_330,x:193.7,y:193.8}).wait(1).to({graphics:mask_2_graphics_331,x:193.7,y:196}).wait(1).to({graphics:mask_2_graphics_332,x:193.8,y:198.2}).wait(1).to({graphics:mask_2_graphics_333,x:193.8,y:200.4}).wait(1).to({graphics:mask_2_graphics_334,x:193.8,y:202.5}).wait(1).to({graphics:mask_2_graphics_335,x:193.8,y:204.7}).wait(1).to({graphics:mask_2_graphics_336,x:193.8,y:206.8}).wait(1).to({graphics:mask_2_graphics_337,x:193.8,y:209}).wait(1).to({graphics:mask_2_graphics_338,x:193.8,y:211.1}).wait(1).to({graphics:mask_2_graphics_339,x:193.8,y:213.1}).wait(1).to({graphics:mask_2_graphics_340,x:193.8,y:215.3}).wait(1).to({graphics:mask_2_graphics_341,x:193.8,y:217.4}).wait(1).to({graphics:mask_2_graphics_342,x:193.8,y:219.5}).wait(1).to({graphics:mask_2_graphics_343,x:193.8,y:221.5}).wait(1).to({graphics:mask_2_graphics_344,x:193.7,y:223.6}).wait(1).to({graphics:mask_2_graphics_345,x:193.7,y:225.6}).wait(1).to({graphics:mask_2_graphics_346,x:193.7,y:227.6}).wait(1).to({graphics:mask_2_graphics_347,x:193.7,y:229.5}).wait(1).to({graphics:mask_2_graphics_348,x:193.6,y:231.5}).wait(1).to({graphics:mask_2_graphics_349,x:193.6,y:233.4}).wait(1).to({graphics:mask_2_graphics_350,x:193.6,y:235.3}).wait(1).to({graphics:mask_2_graphics_351,x:193.5,y:237.1}).wait(1).to({graphics:mask_2_graphics_352,x:193.5,y:238.9}).wait(1).to({graphics:mask_2_graphics_353,x:193.5,y:240.7}).wait(1).to({graphics:mask_2_graphics_354,x:193.5,y:242.4}).wait(1).to({graphics:mask_2_graphics_355,x:193.4,y:244.1}).wait(1).to({graphics:mask_2_graphics_356,x:193.4,y:245.7}).wait(1).to({graphics:mask_2_graphics_357,x:193.4,y:247.3}).wait(1).to({graphics:mask_2_graphics_358,x:193.4,y:248.9}).wait(1).to({graphics:mask_2_graphics_359,x:193.4,y:250.4}).wait(1).to({graphics:mask_2_graphics_360,x:193.5,y:251.9}).wait(1).to({graphics:mask_2_graphics_361,x:193.5,y:253.4}).wait(1).to({graphics:mask_2_graphics_362,x:193.5,y:254.8}).wait(1).to({graphics:mask_2_graphics_363,x:193.6,y:256.1}).wait(1).to({graphics:mask_2_graphics_364,x:193.6,y:257.5}).wait(1).to({graphics:mask_2_graphics_365,x:193.6,y:258.7}).wait(1).to({graphics:mask_2_graphics_366,x:193.7,y:259.9}).wait(1).to({graphics:mask_2_graphics_367,x:193.7,y:261.1}).wait(1).to({graphics:mask_2_graphics_368,x:193.7,y:262.2}).wait(1).to({graphics:mask_2_graphics_369,x:193.7,y:263.3}).wait(1).to({graphics:mask_2_graphics_370,x:193.8,y:264.3}).wait(1).to({graphics:mask_2_graphics_371,x:193.8,y:265.3}).wait(1).to({graphics:mask_2_graphics_372,x:193.8,y:266.2}).wait(1).to({graphics:mask_2_graphics_373,x:193.8,y:267.1}).wait(1).to({graphics:mask_2_graphics_374,x:193.7,y:267.8}).wait(1).to({graphics:mask_2_graphics_375,x:193.7,y:268.3}).wait(1).to({graphics:mask_2_graphics_376,x:193.7,y:268.8}).wait(1).to({graphics:mask_2_graphics_377,x:193.7,y:269.2}).wait(1).to({graphics:mask_2_graphics_378,x:193.7,y:269.6}).wait(1).to({graphics:mask_2_graphics_379,x:193.7,y:270}).wait(1).to({graphics:mask_2_graphics_380,x:193.7,y:270.4}).wait(1).to({graphics:mask_2_graphics_381,x:193.7,y:270.8}).wait(1).to({graphics:mask_2_graphics_382,x:193.7,y:271.1}).wait(1).to({graphics:mask_2_graphics_383,x:193.7,y:271.4}).wait(1).to({graphics:mask_2_graphics_384,x:193.7,y:271.7}).wait(1).to({graphics:mask_2_graphics_385,x:193.7,y:272}).wait(1).to({graphics:mask_2_graphics_386,x:193.7,y:272.2}).wait(1).to({graphics:mask_2_graphics_387,x:193.7,y:272.5}).wait(1).to({graphics:mask_2_graphics_388,x:193.7,y:272.7}).wait(1).to({graphics:mask_2_graphics_389,x:193.7,y:272.9}).wait(1).to({graphics:mask_2_graphics_390,x:193.7,y:273}).wait(1).to({graphics:mask_2_graphics_391,x:193.6,y:273.2}).wait(1).to({graphics:mask_2_graphics_392,x:193.6,y:273.3}).wait(1).to({graphics:mask_2_graphics_393,x:193.6,y:273.4}).wait(1).to({graphics:mask_2_graphics_394,x:193.6,y:273.5}).wait(1).to({graphics:mask_2_graphics_395,x:193.6,y:273.5}).wait(1).to({graphics:mask_2_graphics_396,x:193.6,y:273.6}).wait(1).to({graphics:mask_2_graphics_397,x:193.7,y:273.6}).wait(1).to({graphics:mask_2_graphics_398,x:193.7,y:273.6}).wait(1).to({graphics:mask_2_graphics_399,x:193.7,y:273.6}).wait(1).to({graphics:mask_2_graphics_400,x:193.7,y:273.6}).wait(1).to({graphics:mask_2_graphics_401,x:193.7,y:273.6}).wait(1).to({graphics:mask_2_graphics_402,x:193.7,y:273.6}).wait(1).to({graphics:mask_2_graphics_403,x:193.8,y:273.6}).wait(1).to({graphics:mask_2_graphics_404,x:193.8,y:273.6}).wait(1).to({graphics:mask_2_graphics_405,x:193.8,y:273.6}).wait(1).to({graphics:mask_2_graphics_406,x:193.8,y:273.7}).wait(1).to({graphics:mask_2_graphics_407,x:193.9,y:273.7}).wait(1).to({graphics:mask_2_graphics_408,x:193.9,y:273.7}).wait(1).to({graphics:mask_2_graphics_409,x:193.9,y:273.7}).wait(1).to({graphics:mask_2_graphics_410,x:194,y:273.7}).wait(1).to({graphics:mask_2_graphics_411,x:194,y:273.7}).wait(1).to({graphics:mask_2_graphics_412,x:194,y:273.7}).wait(1).to({graphics:mask_2_graphics_413,x:194,y:273.7}).wait(1).to({graphics:mask_2_graphics_414,x:194,y:273.7}).wait(1).to({graphics:mask_2_graphics_415,x:194.1,y:273.7}).wait(1).to({graphics:mask_2_graphics_416,x:194.1,y:273.7}).wait(1).to({graphics:mask_2_graphics_417,x:194.1,y:273.7}).wait(1).to({graphics:mask_2_graphics_418,x:194.1,y:273.7}).wait(1).to({graphics:mask_2_graphics_419,x:194.2,y:273.7}).wait(1).to({graphics:mask_2_graphics_420,x:194.1,y:273.8}).wait(1).to({graphics:mask_2_graphics_421,x:194.2,y:273.9}).wait(1).to({graphics:mask_2_graphics_422,x:194.3,y:273.9}).wait(1).to({graphics:mask_2_graphics_423,x:194.3,y:273.9}).wait(1).to({graphics:mask_2_graphics_424,x:194.4,y:273.9}).wait(277));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("AGxsZQC8DwhgEgQhdEZiiD5QilD9kICrQkJCriFhs");
	this.shape_3.setTransform(211.7,386.9);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(289).to({_off:false},0).wait(412));

	// Layer 11
	this.instance_3 = new lib.ar1("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(265.3,151.2,1,1,0,119.1,-60.9,-0.7,0.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(692));

	// Layer 6 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_164 = new cjs.Graphics().p("ATCH9IBthqIJeJyIhuBpg");
	var mask_3_graphics_165 = new cjs.Graphics().p("Aloj9IB2hzIJbJuIh2Bzg");
	var mask_3_graphics_166 = new cjs.Graphics().p("Alsj5ICAh7IJZJtIiAB8g");
	var mask_3_graphics_167 = new cjs.Graphics().p("AlwjzICJiEIJXJrIiICEg");
	var mask_3_graphics_168 = new cjs.Graphics().p("AlzjuICSiNIJVJqIiSCNg");
	var mask_3_graphics_169 = new cjs.Graphics().p("Al3joICbiWIJUJnIibCXg");
	var mask_3_graphics_170 = new cjs.Graphics().p("Al7jjICkifIJTJmIilCfg");
	var mask_3_graphics_171 = new cjs.Graphics().p("Al/jeICuioIJRJlIiuCog");
	var mask_3_graphics_172 = new cjs.Graphics().p("AmDjYIC3ixIJPJjIi2Cwg");
	var mask_3_graphics_173 = new cjs.Graphics().p("AmGjUIDAi5IJNJhIjAC6g");
	var mask_3_graphics_174 = new cjs.Graphics().p("AmKjOIDJjDIJMJgIjJDCg");
	var mask_3_graphics_175 = new cjs.Graphics().p("AmOjIIDSjMIJLJeIjTDLg");
	var mask_3_graphics_176 = new cjs.Graphics().p("AmSjDIDcjVIJJJcIjcDVg");
	var mask_3_graphics_177 = new cjs.Graphics().p("AmWi+IDmjeIJHJbIjmDdg");
	var mask_3_graphics_178 = new cjs.Graphics().p("AmZi5IDujmIJFJYIjuDng");
	var mask_3_graphics_179 = new cjs.Graphics().p("AmdizID3jvIJEJWIj3Dvg");
	var mask_3_graphics_180 = new cjs.Graphics().p("AmhiuIEBj4IJCJVIkBD4g");
	var mask_3_graphics_181 = new cjs.Graphics().p("AmkipIEJkBIJAJUIkJEBg");
	var mask_3_graphics_182 = new cjs.Graphics().p("AmoijIETkKII+JRIkTEKg");
	var mask_3_graphics_183 = new cjs.Graphics().p("AmsieIEckTII9JQIkcETg");
	var mask_3_graphics_184 = new cjs.Graphics().p("AmwiZIElkcII8JPIklEcg");
	var mask_3_graphics_185 = new cjs.Graphics().p("Am0iTIEvklII6JMIkvElg");
	var mask_3_graphics_186 = new cjs.Graphics().p("Am3iOIE4kuII4JLIk4Eug");
	var mask_3_graphics_187 = new cjs.Graphics().p("Am7iJIFBk2II2JJIlBE2g");
	var mask_3_graphics_188 = new cjs.Graphics().p("Am/iEIFKk/II1JIIlKE/g");
	var mask_3_graphics_189 = new cjs.Graphics().p("AnDh+IFUlIIIzJFIlTFIg");
	var mask_3_graphics_190 = new cjs.Graphics().p("AnHh5IFdlRIIyJEIldFRg");
	var mask_3_graphics_191 = new cjs.Graphics().p("AnKhzIFmlbIIvJDIllFag");
	var mask_3_graphics_192 = new cjs.Graphics().p("AnOhuIFvlkIIuJBIlvFkg");
	var mask_3_graphics_193 = new cjs.Graphics().p("AnShpIF4lsIItI/Il4Fsg");
	var mask_3_graphics_194 = new cjs.Graphics().p("AnWhkIGCl1IIrI9ImCF2g");
	var mask_3_graphics_195 = new cjs.Graphics().p("AnZheIGKl+IIpI7ImKF+g");
	var mask_3_graphics_196 = new cjs.Graphics().p("AndhZIGTmHIIoI6ImUGHg");
	var mask_3_graphics_197 = new cjs.Graphics().p("AnhhTIGdmRIImI5ImdGQg");
	var mask_3_graphics_198 = new cjs.Graphics().p("AnlhOIGnmZIIkI2ImmGZg");
	var mask_3_graphics_199 = new cjs.Graphics().p("AnphJIGwmiIIjI1ImwGig");
	var mask_3_graphics_200 = new cjs.Graphics().p("AnshEIG4mqIIhIzIm4Gqg");
	var mask_3_graphics_201 = new cjs.Graphics().p("Anwg+IHCm0IIfIxInCG0g");
	var mask_3_graphics_202 = new cjs.Graphics().p("An0g5IHLm9IIeIwInLG8g");
	var mask_3_graphics_203 = new cjs.Graphics().p("An4g0IHVnFIIcIuInVHFg");
	var mask_3_graphics_204 = new cjs.Graphics().p("An8guIHenPIIaItIndHOg");
	var mask_3_graphics_205 = new cjs.Graphics().p("An/gpIHmnXIIZIqInnHYg");
	var mask_3_graphics_206 = new cjs.Graphics().p("AoDgkIHwngIIXIpInwHgg");
	var mask_3_graphics_207 = new cjs.Graphics().p("AoHgeIH6nqIIVIoIn6Hpg");
	var mask_3_graphics_208 = new cjs.Graphics().p("AoKgZIICnyIITIlIoCHyg");
	var mask_3_graphics_209 = new cjs.Graphics().p("AoOgUIILn7IISIkIoLH7g");
	var mask_3_graphics_210 = new cjs.Graphics().p("AoSgPIIUoDIIRIhIoUIEg");
	var mask_3_graphics_211 = new cjs.Graphics().p("AoWgJIIdoNIIQIgIodINg");
	var mask_3_graphics_212 = new cjs.Graphics().p("AoagEIImoWIIPIfIonIWg");
	var mask_3_graphics_213 = new cjs.Graphics().p("AodAAIIvodIIMIdIovIeg");
	var mask_3_graphics_214 = new cjs.Graphics().p("AohAGII4onIILIcIo5Ing");
	var mask_3_graphics_215 = new cjs.Graphics().p("AolALIJCowIIJIbIpCIvg");
	var mask_3_graphics_216 = new cjs.Graphics().p("AopAQIJLo4IIIIZIpMI4g");
	var mask_3_graphics_217 = new cjs.Graphics().p("AotAWIJVpCIIFIYIpUJAg");
	var mask_3_graphics_218 = new cjs.Graphics().p("AowAbIJdpKIIEIVIpdJKg");
	var mask_3_graphics_219 = new cjs.Graphics().p("Ao0AhIJnpUIICIUIpmJTg");
	var mask_3_graphics_220 = new cjs.Graphics().p("Ao4AmIJwpcIIBISIpwJcg");
	var mask_3_graphics_221 = new cjs.Graphics().p("Ao8ArIJ5plIIAIQIp5Jlg");
	var mask_3_graphics_222 = new cjs.Graphics().p("Ao/AwIKCpuIH+IPIqDJug");
	var mask_3_graphics_223 = new cjs.Graphics().p("ApDA2IKLp3IH8IMIqLJ3g");
	var mask_3_graphics_224 = new cjs.Graphics().p("ApHA7IKVqAIH6ILIqVKAg");
	var mask_3_graphics_225 = new cjs.Graphics().p("ApLBAIKeqJIH5IJIqeKJg");
	var mask_3_graphics_226 = new cjs.Graphics().p("ApPBGIKoqSIH3IIIqoKRg");
	var mask_3_graphics_227 = new cjs.Graphics().p("ApTBLIKxqbIH2IGIqxKbg");
	var mask_3_graphics_228 = new cjs.Graphics().p("ApWBQIK6qjIHzIEIq5Kjg");
	var mask_3_graphics_229 = new cjs.Graphics().p("ApaBWILDqtIHyIDIrDKsg");
	var mask_3_graphics_230 = new cjs.Graphics().p("ApeBaILMq0IHxIAIrMK1g");
	var mask_3_graphics_231 = new cjs.Graphics().p("ApiBgILWq+IHvH/IrWK+g");
	var mask_3_graphics_232 = new cjs.Graphics().p("AplBlILerHIHtH9IreLIg");
	var mask_3_graphics_233 = new cjs.Graphics().p("AppBrILnrRIHsH9IroLQg");
	var mask_3_graphics_234 = new cjs.Graphics().p("AptBwILxrZIHqH6IrxLZg");
	var mask_3_graphics_235 = new cjs.Graphics().p("ApwB2IL6riIHoH4Ir7Lig");
	var mask_3_graphics_236 = new cjs.Graphics().p("Ap0B7IMDrrIHnH2IsELrg");
	var mask_3_graphics_237 = new cjs.Graphics().p("Ap4CAIMMr0IHlH1IsML0g");
	var mask_3_graphics_238 = new cjs.Graphics().p("Ap8CFIMVr8IHkHzIsWL8g");
	var mask_3_graphics_239 = new cjs.Graphics().p("AqACLIMfsGIHiHxIsfMGg");
	var mask_3_graphics_240 = new cjs.Graphics().p("AqDCQIMosPIHfHwIsoMPg");
	var mask_3_graphics_241 = new cjs.Graphics().p("AqHCVIMxsXIHeHuIsxMXg");
	var mask_3_graphics_242 = new cjs.Graphics().p("AqLCbIM6shIHdHtIs7Mgg");
	var mask_3_graphics_243 = new cjs.Graphics().p("AqPCgINEsqIHbHrItEMpg");
	var mask_3_graphics_244 = new cjs.Graphics().p("AqTClINNsyIHZHpItNMyg");
	var mask_3_graphics_245 = new cjs.Graphics().p("AqWCrINWs7IHXHnItWM7g");
	var mask_3_graphics_246 = new cjs.Graphics().p("AqaCwINftEIHWHlItfNEg");
	var mask_3_graphics_247 = new cjs.Graphics().p("AqeC1INptNIHUHkItpNNg");
	var mask_3_graphics_248 = new cjs.Graphics().p("AqiC6INytWIHTHjItyNWg");
	var mask_3_graphics_249 = new cjs.Graphics().p("AqmDAIN8tfIHRHhIt8Neg");
	var mask_3_graphics_250 = new cjs.Graphics().p("AqpDFIOEtoIHPHfIuENog");
	var mask_3_graphics_251 = new cjs.Graphics().p("AqtDKIONtwIHOHdIuONwg");
	var mask_3_graphics_252 = new cjs.Graphics().p("AqxDQIOXt6IHMHbIuXN6g");
	var mask_3_graphics_253 = new cjs.Graphics().p("Aq1DVIOguCIHKHZIugOCg");
	var mask_3_graphics_254 = new cjs.Graphics().p("Aq5DaIOpuLIHJHYIupOLg");
	var mask_3_graphics_255 = new cjs.Graphics().p("Aq8DgIOyuVIHHHWIuyOVg");
	var mask_3_graphics_256 = new cjs.Graphics().p("ArADlIO8udIHFHUIu7Odg");
	var mask_3_graphics_257 = new cjs.Graphics().p("ArEDqIPFumIHEHTIvFOmg");
	var mask_3_graphics_258 = new cjs.Graphics().p("ArIDvIPOuvIHDHSIvOOvg");
	var mask_3_graphics_259 = new cjs.Graphics().p("ArLD1IPXu4IHAHPIvXO4g");
	var mask_3_graphics_260 = new cjs.Graphics().p("ArPD6IPgvBIG/HOIvgPBg");
	var mask_3_graphics_261 = new cjs.Graphics().p("ArTD/IPqvJIG9HLIvqPKg");
	var mask_3_graphics_262 = new cjs.Graphics().p("ArWEFIPyvTIG7HLIvyPSg");
	var mask_3_graphics_263 = new cjs.Graphics().p("AraELIP7vdIG6HJIv8Pcg");
	var mask_3_graphics_264 = new cjs.Graphics().p("AreEPIQFvkIG4HGIwFPlg");
	var mask_3_graphics_265 = new cjs.Graphics().p("AriEVIQPvuIG2HFIwOPug");
	var mask_3_graphics_266 = new cjs.Graphics().p("ArmEaIQYv2IG1HDIwYP2g");
	var mask_3_graphics_267 = new cjs.Graphics().p("ArqEfIQhv/IG0HBIwhQAg");
	var mask_3_graphics_268 = new cjs.Graphics().p("ArtEkIQqwIIGxHAIwqQIg");
	var mask_3_graphics_269 = new cjs.Graphics().p("ArxEqIQzwRIGwG+IwzQRg");
	var mask_3_graphics_270 = new cjs.Graphics().p("Ar1EwIQ9wbIGuG9Iw9Qag");
	var mask_3_graphics_271 = new cjs.Graphics().p("Ar5E1IRGwjIGtG6IxGQkg");
	var mask_3_graphics_272 = new cjs.Graphics().p("AGDSIIRQwtIGrG5IxRQtg");
	var mask_3_graphics_273 = new cjs.Graphics().p("AsJFlISHxhIGMGXIyIRjg");
	var mask_3_graphics_274 = new cjs.Graphics().p("AFHTyITAyYIFrF4Iy/SYg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(164).to({graphics:mask_3_graphics_164,x:193.3,y:113.4}).wait(1).to({graphics:mask_3_graphics_165,x:350.4,y:190.9}).wait(1).to({graphics:mask_3_graphics_166,x:350,y:191.4}).wait(1).to({graphics:mask_3_graphics_167,x:349.6,y:191.9}).wait(1).to({graphics:mask_3_graphics_168,x:349.2,y:192.4}).wait(1).to({graphics:mask_3_graphics_169,x:348.8,y:192.9}).wait(1).to({graphics:mask_3_graphics_170,x:348.4,y:193.4}).wait(1).to({graphics:mask_3_graphics_171,x:347.9,y:193.9}).wait(1).to({graphics:mask_3_graphics_172,x:347.6,y:194.4}).wait(1).to({graphics:mask_3_graphics_173,x:347.1,y:194.9}).wait(1).to({graphics:mask_3_graphics_174,x:346.7,y:195.4}).wait(1).to({graphics:mask_3_graphics_175,x:346.3,y:195.9}).wait(1).to({graphics:mask_3_graphics_176,x:345.9,y:196.4}).wait(1).to({graphics:mask_3_graphics_177,x:345.5,y:196.9}).wait(1).to({graphics:mask_3_graphics_178,x:345.1,y:197.4}).wait(1).to({graphics:mask_3_graphics_179,x:344.7,y:197.9}).wait(1).to({graphics:mask_3_graphics_180,x:344.3,y:198.4}).wait(1).to({graphics:mask_3_graphics_181,x:343.9,y:198.9}).wait(1).to({graphics:mask_3_graphics_182,x:343.5,y:199.4}).wait(1).to({graphics:mask_3_graphics_183,x:343.1,y:199.9}).wait(1).to({graphics:mask_3_graphics_184,x:342.7,y:200.4}).wait(1).to({graphics:mask_3_graphics_185,x:342.3,y:200.9}).wait(1).to({graphics:mask_3_graphics_186,x:341.9,y:201.4}).wait(1).to({graphics:mask_3_graphics_187,x:341.5,y:202}).wait(1).to({graphics:mask_3_graphics_188,x:341.1,y:202.5}).wait(1).to({graphics:mask_3_graphics_189,x:340.6,y:203}).wait(1).to({graphics:mask_3_graphics_190,x:340.3,y:203.4}).wait(1).to({graphics:mask_3_graphics_191,x:339.8,y:204}).wait(1).to({graphics:mask_3_graphics_192,x:339.4,y:204.5}).wait(1).to({graphics:mask_3_graphics_193,x:339,y:205}).wait(1).to({graphics:mask_3_graphics_194,x:338.6,y:205.5}).wait(1).to({graphics:mask_3_graphics_195,x:338.2,y:206}).wait(1).to({graphics:mask_3_graphics_196,x:337.8,y:206.5}).wait(1).to({graphics:mask_3_graphics_197,x:337.4,y:207}).wait(1).to({graphics:mask_3_graphics_198,x:337,y:207.5}).wait(1).to({graphics:mask_3_graphics_199,x:336.6,y:208}).wait(1).to({graphics:mask_3_graphics_200,x:336.2,y:208.5}).wait(1).to({graphics:mask_3_graphics_201,x:335.8,y:209}).wait(1).to({graphics:mask_3_graphics_202,x:335.4,y:209.5}).wait(1).to({graphics:mask_3_graphics_203,x:335,y:210}).wait(1).to({graphics:mask_3_graphics_204,x:334.6,y:210.5}).wait(1).to({graphics:mask_3_graphics_205,x:334.2,y:211}).wait(1).to({graphics:mask_3_graphics_206,x:333.8,y:211.5}).wait(1).to({graphics:mask_3_graphics_207,x:333.4,y:212}).wait(1).to({graphics:mask_3_graphics_208,x:333,y:212.5}).wait(1).to({graphics:mask_3_graphics_209,x:332.5,y:213}).wait(1).to({graphics:mask_3_graphics_210,x:332.1,y:213.5}).wait(1).to({graphics:mask_3_graphics_211,x:331.7,y:214}).wait(1).to({graphics:mask_3_graphics_212,x:331.3,y:214.5}).wait(1).to({graphics:mask_3_graphics_213,x:330.9,y:215}).wait(1).to({graphics:mask_3_graphics_214,x:330.5,y:215.5}).wait(1).to({graphics:mask_3_graphics_215,x:330.1,y:216.1}).wait(1).to({graphics:mask_3_graphics_216,x:329.7,y:216.6}).wait(1).to({graphics:mask_3_graphics_217,x:329.3,y:217.1}).wait(1).to({graphics:mask_3_graphics_218,x:328.9,y:217.6}).wait(1).to({graphics:mask_3_graphics_219,x:328.5,y:218.1}).wait(1).to({graphics:mask_3_graphics_220,x:328.1,y:218.6}).wait(1).to({graphics:mask_3_graphics_221,x:327.7,y:219.1}).wait(1).to({graphics:mask_3_graphics_222,x:327.3,y:219.6}).wait(1).to({graphics:mask_3_graphics_223,x:326.9,y:220.1}).wait(1).to({graphics:mask_3_graphics_224,x:326.5,y:220.6}).wait(1).to({graphics:mask_3_graphics_225,x:326.1,y:221.1}).wait(1).to({graphics:mask_3_graphics_226,x:325.7,y:221.6}).wait(1).to({graphics:mask_3_graphics_227,x:325.3,y:222.1}).wait(1).to({graphics:mask_3_graphics_228,x:324.8,y:222.6}).wait(1).to({graphics:mask_3_graphics_229,x:324.4,y:223.1}).wait(1).to({graphics:mask_3_graphics_230,x:324,y:223.6}).wait(1).to({graphics:mask_3_graphics_231,x:323.6,y:224.1}).wait(1).to({graphics:mask_3_graphics_232,x:323.2,y:224.6}).wait(1).to({graphics:mask_3_graphics_233,x:322.8,y:225.1}).wait(1).to({graphics:mask_3_graphics_234,x:322.4,y:225.6}).wait(1).to({graphics:mask_3_graphics_235,x:322,y:226.1}).wait(1).to({graphics:mask_3_graphics_236,x:321.6,y:226.6}).wait(1).to({graphics:mask_3_graphics_237,x:321.2,y:227.1}).wait(1).to({graphics:mask_3_graphics_238,x:320.8,y:227.6}).wait(1).to({graphics:mask_3_graphics_239,x:320.4,y:228.2}).wait(1).to({graphics:mask_3_graphics_240,x:320,y:228.6}).wait(1).to({graphics:mask_3_graphics_241,x:319.6,y:229.1}).wait(1).to({graphics:mask_3_graphics_242,x:319.2,y:229.6}).wait(1).to({graphics:mask_3_graphics_243,x:318.8,y:230.2}).wait(1).to({graphics:mask_3_graphics_244,x:318.4,y:230.7}).wait(1).to({graphics:mask_3_graphics_245,x:318,y:231.2}).wait(1).to({graphics:mask_3_graphics_246,x:317.5,y:231.7}).wait(1).to({graphics:mask_3_graphics_247,x:317.2,y:232.2}).wait(1).to({graphics:mask_3_graphics_248,x:316.7,y:232.7}).wait(1).to({graphics:mask_3_graphics_249,x:316.3,y:233.2}).wait(1).to({graphics:mask_3_graphics_250,x:315.9,y:233.7}).wait(1).to({graphics:mask_3_graphics_251,x:315.5,y:234.2}).wait(1).to({graphics:mask_3_graphics_252,x:315.1,y:234.7}).wait(1).to({graphics:mask_3_graphics_253,x:314.7,y:235.2}).wait(1).to({graphics:mask_3_graphics_254,x:314.3,y:235.7}).wait(1).to({graphics:mask_3_graphics_255,x:313.9,y:236.2}).wait(1).to({graphics:mask_3_graphics_256,x:313.5,y:236.7}).wait(1).to({graphics:mask_3_graphics_257,x:313.1,y:237.2}).wait(1).to({graphics:mask_3_graphics_258,x:312.7,y:237.7}).wait(1).to({graphics:mask_3_graphics_259,x:312.3,y:238.2}).wait(1).to({graphics:mask_3_graphics_260,x:311.9,y:238.7}).wait(1).to({graphics:mask_3_graphics_261,x:311.5,y:239.2}).wait(1).to({graphics:mask_3_graphics_262,x:311.1,y:239.7}).wait(1).to({graphics:mask_3_graphics_263,x:310.7,y:240.2}).wait(1).to({graphics:mask_3_graphics_264,x:310.2,y:240.7}).wait(1).to({graphics:mask_3_graphics_265,x:309.9,y:241.2}).wait(1).to({graphics:mask_3_graphics_266,x:309.4,y:241.7}).wait(1).to({graphics:mask_3_graphics_267,x:309,y:242.3}).wait(1).to({graphics:mask_3_graphics_268,x:308.6,y:242.8}).wait(1).to({graphics:mask_3_graphics_269,x:308.2,y:243.2}).wait(1).to({graphics:mask_3_graphics_270,x:307.8,y:243.7}).wait(1).to({graphics:mask_3_graphics_271,x:307.4,y:244.3}).wait(1).to({graphics:mask_3_graphics_272,x:191.8,y:160.1}).wait(1).to({graphics:mask_3_graphics_273,x:304.7,y:247.8}).wait(1).to({graphics:mask_3_graphics_274,x:190.6,y:164.2}).wait(427));

	// Layer 5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("AnCvWQI8kAD0EsQD0EthQFXQhPFXk2F5Qk1F4l9Er");
	this.shape_4.setTransform(309.7,195.9);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(164).to({_off:false},0).wait(537));

	// Layer 4 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_9 = new cjs.Graphics().p("ALebNQr/h5nIp1QnJp1B6r9QB5r/J0nJMAicAvZQnxFppGAAQibAAihgag");
	var mask_4_graphics_10 = new cjs.Graphics().p("ALObIQr9iFm/p8Qm/p7CGr8QCEr9J8m/MAhsAv7QnqFYo2AAQioAAivgfg");
	var mask_4_graphics_11 = new cjs.Graphics().p("AK9bDQr7iRm1qCQm1qDCSr5QCQr7KCm1MAg9AwbQniFIomAAQi2AAi+gkg");
	var mask_4_graphics_12 = new cjs.Graphics().p("AKta9Qr5icmrqJQmrqJCer4QCbr4KImrMAgOAw7QnbE4oWAAQjEAAjLgqg");
	var mask_4_graphics_13 = new cjs.Graphics().p("AKda3Qr2iomhqQQmhqPCpr1QCnr2KPmhMAfdAxaQnTEqoHAAQjRAAjZgxg");
	var mask_4_graphics_14 = new cjs.Graphics().p("AKNaxQrzi0mXqWQmXqWC1ryQCzrzKUmXMAetAx4QnLEbn4AAQjeAAjng3g");
	var mask_4_graphics_15 = new cjs.Graphics().p("AJ9aqQrwjAmNqcQmNqcDBrvQC/rwKbmNMAd7AyWQnDEMnpAAQjrAAj1g+g");
	var mask_4_graphics_16 = new cjs.Graphics().p("AJuaiQrtjLmDqiQmCqiDMrsQDKrtKhmDMAdJAy0Qm6D9naAAQj4AAkChGg");
	var mask_4_graphics_17 = new cjs.Graphics().p("AJfaaQrqjWl4qoQl4qoDXrpQDWrqKnl4MAcXAzQQmxDvnMAAQkGAAkOhOg");
	var mask_4_graphics_18 = new cjs.Graphics().p("AJQaSQrnjiltquQluqtDjrlQDhrnKtluMAbkAzrQmoDim9AAQkTAAkbhWg");
	var mask_4_graphics_19 = new cjs.Graphics().p("AJBaPQrjjuljqzQljqzDvrhQDsrkKyljMAaxA0GQmeDVmvAAQkgAAkohfg");
	var mask_4_graphics_20 = new cjs.Graphics().p("AIzaMQrfj5lZq4QlYq4D6reQD3rgK4lYMAZ9A0fQmUDImhAAQktAAk0hog");
	var mask_4_graphics_21 = new cjs.Graphics().p("AIlaJQrckElNq+QlOq9EFraQEDrcK9lOMAZJA05QmKC8mUAAQk6AAk/hyg");
	var mask_4_graphics_22 = new cjs.Graphics().p("AIXaFQrYkPlCrDQlDrCEQrWQEOrYLClDMAYVA1RQmACwmGAAQlHAAlLh8g");
	var mask_4_graphics_23 = new cjs.Graphics().p("AIJaBQrTkbk4rHQk4rHEcrSQEZrULGk4MAXhA1pQl1Ckl5AAQlUAAlXiGg");
	var mask_4_graphics_24 = new cjs.Graphics().p("AH7Z8QrOkmktrMQktrLEnrOQEkrPLLktMAWsA1/QlrCYlrAAQlhAAljiQg");
	var mask_4_graphics_25 = new cjs.Graphics().p("AHuZ2QrKkxkhrQQkirQExrKQEwrKLPkiMAV3A2VQlgCOleAAQlvAAlticg");
	var mask_4_graphics_26 = new cjs.Graphics().p("AHhZwQrFk8kXrVQkWrUE8rFQE7rFLUkXMAVAA2qQlUCDlRAAQl8AAl4ing");
	var mask_4_graphics_27 = new cjs.Graphics().p("AHVZpQrBlHkLrZQkMrYFIrAQFFrALYkMMAULA2+QlJB5lDAAQmKAAmCizg");
	var mask_4_graphics_28 = new cjs.Graphics().p("AHIZiQq7lSkArdQkArcFSq7QFQq7LckBMATUA3SQk8Bvk3AAQmYAAmMi/g");
	var mask_4_graphics_29 = new cjs.Graphics().p("AG8ZaQq2ldj1rhQj1rgFdq1QFbq2Lgj1MASeA3kQkxBlkpAAQmmAAmWjLg");
	var mask_4_graphics_30 = new cjs.Graphics().p("AGwZRQqwlnjqrlQjprjFnqwQFlqxLkjpMARnA31QkkBckdAAQmzABmgjZg");
	var mask_4_graphics_31 = new cjs.Graphics().p("AGkZIQqqlyjeroQjfrnFyqqQFvqrLojfMAQwA4HQkYBUkPAAQnBAAmqjmg");
	var mask_4_graphics_32 = new cjs.Graphics().p("AGZY+Qqll8jTrrQjSrrF8qkQF5qmLsjSMAP5A4WQkMBLkCAAQnQAAmyjzg");
	var mask_4_graphics_33 = new cjs.Graphics().p("AGOY0QqfmHjHruQjHruGGqeQGEqgLvjHMAPBA4mQj+BDj1AAQnfAAm7kBg");
	var mask_4_graphics_34 = new cjs.Graphics().p("AGDYpQqZmRi7rxQi8rxGRqYQGOqaLxi7MAOKA4zQjxA8joAAQntAAnEkPg");
	var mask_4_graphics_35 = new cjs.Graphics().p("AF5YdQqTmaiwr1QiwrzGbqSQGYqUL0iwMANSA5CQjkA1jaAAQn8AAnMkfg");
	var mask_4_graphics_36 = new cjs.Graphics().p("AFuYRQqMmlikr3Qilr2GlqLQGjqNL3ilMAMZA5OQjWAvjNAAQoMAAnUkug");
	var mask_4_graphics_37 = new cjs.Graphics().p("AFkYEQqFmuiZr6QiZr4GvqFQGtqHL5iYMALhA5ZQjIAojAAAQobAAnck9g");
	var mask_4_graphics_38 = new cjs.Graphics().p("AFbX3Qp/m4iNr8QiNr7G5p+QG2qAL7iNMAKpA5lQi6AiiyAAQorAAnjlNg");
	var mask_4_graphics_39 = new cjs.Graphics().p("AFRXpQp4nCiBr+QiBr8HDp4QG/p5L+iBMAJvA5uQirAdikAAQo7AAnrldg");
	var mask_4_graphics_40 = new cjs.Graphics().p("AFIXbQpxnMh1sAQh2r+HNpxQHJpyMAh1MAI2A53QicAYiXAAQpMAAnxltg");
	var mask_4_graphics_41 = new cjs.Graphics().p("AE/XMQppnWhqsBQhqsAHWpqQHTpqMChqMAH9A6AQiOATiIAAQpdAAn4l+g");
	var mask_4_graphics_42 = new cjs.Graphics().p("AE3W8QpjnfhdsDQhesBHfpiQHdpkMCheMAHFA6HQh/AQh6AAQpuAAn+mQg");
	var mask_4_graphics_43 = new cjs.Graphics().p("AEvWsQpbnohSsEQhSsDHnpbQHnpcMEhSMAGLA6NQhvAMhrAAQqAAAoEmhg");
	var mask_4_graphics_44 = new cjs.Graphics().p("AEnWbQpUnxhGsFQhGsFHxpTQHwpUMFhGMAFSA6TQhfAIhdAAQqTAAoJmzg");
	var mask_4_graphics_45 = new cjs.Graphics().p("AEfWKQpMn7g6sGQg6sFH6pLQH5pNMGg6MAEZA6XQhQAGhOAAQqlAAoPnFg");
	var mask_4_graphics_46 = new cjs.Graphics().p("AEYV4QpEoEgusHQgusGICpDQIDpFMHguMADeA6bQg/AEg/AAQq4AAoUnYg");
	var mask_4_graphics_47 = new cjs.Graphics().p("AERVmQo8oNgisHQgisHILo8QILo8MIgjMAClA6fQgwACgvAAQrMAAoYnrg");
	var mask_4_graphics_48 = new cjs.Graphics().p("AEKVTQo0oWgWsIQgWsHIUozQIUo1MIgWMABsA6gIg+ABQrhAAodn+g");
	var mask_4_graphics_49 = new cjs.Graphics().p("AEEU/QosoegKsIQgKsHIdorQIcotMIgKMAAyA6hIgdAAQr1AAohoSg");
	var mask_4_graphics_50 = new cjs.Graphics().p("AD6UrQojomACsIQABsIIlojQIlokMJACMgAIA6hQsIgBojolg");
	var mask_4_graphics_51 = new cjs.Graphics().p("ADYUWQobouANsHQAOsJIuoaQItobMIANMgBBA6hQsIgNoaoug");
	var mask_4_graphics_52 = new cjs.Graphics().p("AC1UCQoSo3AasHQAZsII2oRQI2oTMHAZMgB6A6gQsIgaoSo1g");
	var mask_4_graphics_53 = new cjs.Graphics().p("ACUTtQoKo/AmsGQAlsHI+oJQI9oKMIAlMgC0A6dQsIgloIo+g");
	var mask_4_graphics_54 = new cjs.Graphics().p("AByTZQoApHAxsGQAxsGJGoAQJGoBMGAxMgDuA6aQsGgyoApFg");
	var mask_4_graphics_55 = new cjs.Graphics().p("ABRTEQn3pOA9sFQA9sGJOn3QJNn4MGA9MgEoA6WQsFg+n3pNg");
	var mask_4_graphics_56 = new cjs.Graphics().p("AAwSwQnupXBJsEQBJsEJVnuQJVnvMFBJMgFhA6QQsEhJnupUg");
	var mask_4_graphics_57 = new cjs.Graphics().p("AAPSbQnkpeBVsDQBUsDJdnkQJdnmMDBVMgGaA6KQsDhVnlpcg");
	var mask_4_graphics_58 = new cjs.Graphics().p("AgQSGQncplBhsBQBgsCJlnbQJjndMDBhMgHTA6EQsDhhnapkg");
	var mask_4_graphics_59 = new cjs.Graphics().p("AgwRxQnTpsBtsAQBssAJsnSQJrnTMABtMgIMA58QsAhtnRprg");
	var mask_4_graphics_60 = new cjs.Graphics().p("AhQRcQnJp0B5r9QB4r/JznIQJynJL/B4MgJGA50Qr/h5nHpyg");
	var mask_4_graphics_61 = new cjs.Graphics().p("AhvRHQm/p7CEr8QCFr8J5m+QJ6nAL8CFMgJ/A5pQr9iEm9p5g");
	var mask_4_graphics_62 = new cjs.Graphics().p("AiOQxQm1qBCQr6QCRr6KAm0QKAm1L7CQMgK6A5fQr6iRmzqAg");
	var mask_4_graphics_63 = new cjs.Graphics().p("AitQcQmrqICdr3QCcr4KHmqQKHmsL4CdMgLzA5TQr4icmpqHg");
	var mask_4_graphics_64 = new cjs.Graphics().p("AjLQHQmhqPCor1QCpr1KNmgQKOmhL1CoMgMsA5HQr1iomfqNg");
	var mask_4_graphics_65 = new cjs.Graphics().p("AjpPxQmWqVC0ryQC0rzKUmVQKUmXLzC0MgNlA46Qrzi0mVqUg");
	var mask_4_graphics_66 = new cjs.Graphics().p("AkGPcQmMqcDArvQDArvKamLQKamNLwDAMgOeA4rQrwi/mKqag");
	var mask_4_graphics_67 = new cjs.Graphics().p("AkjPGQmBqhDLrsQDMrtKgmAQKgmCLtDLMgPWA4dQrtjMmAqgg");
	var mask_4_graphics_68 = new cjs.Graphics().p("Ak/OxQl3qoDXroQDXrpKml2QKnl4LpDYMgQPA4MQrpjXl1qmg");
	var mask_4_graphics_69 = new cjs.Graphics().p("AlbObQlsqtDirlQDjrmKslrQKsltLmDjMgRHA38Qrmjjlqqsg");
	var mask_4_graphics_70 = new cjs.Graphics().p("Al2OGQliqzDurhQDvrjKxlgQKyliLiDvMgR+A3pQrijulgqxg");
	var mask_4_graphics_71 = new cjs.Graphics().p("AmRNwQlXq4D6rdQD6rfK3lVQK3lXLeD6MgS2A3XQrdj6lWq3g");
	var mask_4_graphics_72 = new cjs.Graphics().p("AmsNbQlMq+EGrZQEFraK8lLQK8lMLbEFMgTuA3EQrZkFlLq8g");
	var mask_4_graphics_73 = new cjs.Graphics().p("AnGNFQlBrCERrVQERrXLBk/QLBlBLWEQMgUkA2wQrVkRlArBg");
	var mask_4_graphics_74 = new cjs.Graphics().p("AnfMwQk2rIEcrQQEcrSLGk1QLGk2LSEcMgVbA2bQrQkck1rGg");
	var mask_4_graphics_75 = new cjs.Graphics().p("An4MaQkrrMEnrMQEorNLKkpQLLksLOEoMgWRA2EQrMknkqrLg");
	var mask_4_graphics_76 = new cjs.Graphics().p("AoRMFQkfrREyrHQEzrJLPkeQLQkgLIEzMgXHA1tQrHkykfrPg");
	var mask_4_graphics_77 = new cjs.Graphics().p("AopLvQkUrVE+rCQE9rELUkSQLUkVLDE9MgX8A1WQrCk9kUrUg");
	var mask_4_graphics_78 = new cjs.Graphics().p("ApALaQkJrZFJq+QFIq+LYkHQLYkKK/FJMgYyA09Qq9lIkIrYg");
	var mask_4_graphics_79 = new cjs.Graphics().p("ApXLFQj9rdFTq5QFUq5Lcj8QLcj+K5FUMgZmA0kQq4lUj9rbg");
	var mask_4_graphics_80 = new cjs.Graphics().p("AptKvQjyrgFeq0QFfqzLfjxQLgjyK0FeMgaaA0KQqzlejxrgg");
	var mask_4_graphics_81 = new cjs.Graphics().p("AqDKaQjmrkFpquQFpquLjjlQLkjnKuFpMgbOAzvQqulpjlrjg");
	var mask_4_graphics_82 = new cjs.Graphics().p("AqYKFQjbroF0qoQF0qoLmjaQLnjbKpF0MgcCAzTQqnl0jarmg");
	var mask_4_graphics_83 = new cjs.Graphics().p("AqtJwQjPrrF+qjQF/qiLqjOQLqjPKiF+Mgc0Ay3Qqil/jOrpg");
	var mask_4_graphics_84 = new cjs.Graphics().p("ArBJbQjDruGIqdQGJqcLtjCQLujEKcGJMgdnAyZQqcmJjCrsg");
	var mask_4_graphics_85 = new cjs.Graphics().p("ArVJFQi3rwGTqWQGTqXLwi2QLwi4KXGTMgeaAx7QqVmTi3rwg");
	var mask_4_graphics_86 = new cjs.Graphics().p("AroIxQirr0GdqQQGdqPLzirQLzisKQGdMgfLAxcQqPmdirryg");
	var mask_4_graphics_87 = new cjs.Graphics().p("Ar6IcQigr2GoqKQGnqJL1ieQL2ihKJGoMgf8Aw8QqImnifr1g");
	var mask_4_graphics_88 = new cjs.Graphics().p("AsMIHQiUr5GyqCQGxqCL4iTQL4iUKCGxMggsAwcQqCmyiTr3g");
	var mask_4_graphics_89 = new cjs.Graphics().p("AseHyQiIr6G8p8QG8p7L5iHQL7iJJ7G8MghcAv6Qp7m7iIr6g");
	var mask_4_graphics_90 = new cjs.Graphics().p("As3HTQh2r9HLpxQHKpxL9h1QL9h2JxHKMgikAvHQpxnKh1r9g");
	var mask_4_graphics_91 = new cjs.Graphics().p("AtPG1QhksBHZpmQHapmL/hiQMAhlJmHZMgjrAuTQpmnZhjr/g");
	var mask_4_graphics_92 = new cjs.Graphics().p("AtmGWQhRsCHnpbQHnpbMChQQMChSJbHnMgkwAtcQpanohSsBg");
	var mask_4_graphics_93 = new cjs.Graphics().p("At7F4Qg/sEH1pPQH1pPMEg+QMEhBJPH2Mgl0AskQpPn2g/sDg");
	var mask_4_graphics_94 = new cjs.Graphics().p("AuPFaQgtsFIEpDQICpDMFgsQMGguJDIDMgm3ArqQpDoDgtsFg");
	var mask_4_graphics_95 = new cjs.Graphics().p("AuhE9QgbsGIRo3QIQo3MGgaQMGgbI3IRMgn4AquQo2oRgbsFg");
	var mask_4_graphics_96 = new cjs.Graphics().p("AuyEgQgJsHIeoqQIdoqMHgHQMHgKIqIeMgo4ApyQoqoegIsGg");
	var mask_4_graphics_97 = new cjs.Graphics().p("AvCEDQAKsGIrodQIqoeMGALQMHAJIdIrMgp1AozQoeorAKsGg");
	var mask_4_graphics_98 = new cjs.Graphics().p("AvQDnQAcsGI3oQQI3oQMGAdQMHAbIQI4MgqzAnzQoQo3AcsGg");
	var mask_4_graphics_99 = new cjs.Graphics().p("AvdDMQAusFJEoDQJDoDMFAwQMGAtICJEMgruAmyQoCpEAusEg");
	var mask_4_graphics_100 = new cjs.Graphics().p("AvpCxQBBsEJQn1QJPn1MEBCQMEA/H1JQMgsoAlwQn1pQBAsDg");
	var mask_4_graphics_101 = new cjs.Graphics().p("AvzCWQBTsCJcnnQJannMDBUQMCBSHnJbMgthAksQnmpcBSsBg");
	var mask_4_graphics_102 = new cjs.Graphics().p("Av7B8QBlsAJnnZQJmnYMABmQMABkHYJnMguXAjmQnYpnBlr/g");
	var mask_4_graphics_103 = new cjs.Graphics().p("AwCBiQB3r9JynKQJxnKL9B4QL+B2HKJyMgvMAigQnKpyB3r9g");
	var mask_4_graphics_104 = new cjs.Graphics().p("AwIBJQCJr7J9m7QJ7m6L7CKQL7CHG6J9Mgv/AhYQm7p8CJr6g");
	var mask_4_graphics_105 = new cjs.Graphics().p("AwMAwQCbr3KHmsQKGmsL3CcQL3CaGsKHMgwxAgPQmsqHCbr2g");
	var mask_4_graphics_106 = new cjs.Graphics().p("AwPAYQCtr0KRmcQKPmcL0CtQLzCsGdKRMgxhAfFQmdqRCtryg");
	var mask_4_graphics_107 = new cjs.Graphics().p("AwQAAQC+rvKbmNQKZmNLvDAQLvC9GNKbMgyPAd6QmNqbC/rug");
	var mask_4_graphics_108 = new cjs.Graphics().p("AwQgWQDQrsKkl9QKil9LqDRQLrDQF9KjMgy7AcuQl9qkDQrog");
	var mask_4_graphics_109 = new cjs.Graphics().p("AwPgtQDirnKtlsQKrltLlDiQLmDhFtKsMgzmAbhQltqtDhrjg");
	var mask_4_graphics_110 = new cjs.Graphics().p("AwMhDQD0rhK1ldQKzldLgD0QLgDyFdK1Mg0PAaSQlcq1Dyrdg");
	var mask_4_graphics_111 = new cjs.Graphics().p("AwHhZQEFrbK8lNQK8lMLaEGQLaEDFMK9Mg01AZDQlMq9EErYg");
	var mask_4_graphics_112 = new cjs.Graphics().p("AwBhvQEWrULEk8QLEk8LTEXQLUEVE8LEMg1bAXzQk7rFEVrSg");
	var mask_4_graphics_113 = new cjs.Graphics().p("Av6iDQEnrOLMkrQLLkrLMEnQLNEmErLMMg19AWhQkrrLEmrLg");
	var mask_4_graphics_114 = new cjs.Graphics().p("AvxiXQE4rHLRkaQLTkaLFE4QLHE3EaLSMg2fAVQQkarTE3rDg");
	var mask_4_graphics_115 = new cjs.Graphics().p("AvnirQFJq/LYkJQLZkJK+FJQK+FHEJLZMg2+AT9QkIrZFHq8g");
	var mask_4_graphics_116 = new cjs.Graphics().p("Avbi+QFZq4Lej3QLfj4K2FaQK3FXD4LeMg3cASrQj3rfFYq0g");
	var mask_4_graphics_117 = new cjs.Graphics().p("AvOjRQFpqvLkjmQLljmKuFqQKuFnDmLkMg32ARXQjmrkFoqtg");
	var mask_4_graphics_118 = new cjs.Graphics().p("AvAjiQF6qnLpjVQLqjUKlF6QKmF4DVLpMg4QAQCQjVrqF4qjg");
	var mask_4_graphics_119 = new cjs.Graphics().p("Auwj0QGKqdLujDQLvjDKbGKQKdGHDDLuMg4nAOuQjDrvGIqbg");
	var mask_4_graphics_120 = new cjs.Graphics().p("AuekEQGZqULyixQLziyKTGaQKTGXCyLyMg49ANYQixrzGYqRg");
	var mask_4_graphics_121 = new cjs.Graphics().p("AuMkUQGpqKL2igQL4ifKIGoQKKGnCfL3Mg5PAMBQigr3GnqHg");
	var mask_4_graphics_122 = new cjs.Graphics().p("At3kkQG3p/L6iOQL7iOJ+G4QKAG3COL5Mg5hAKrQiOr6G3p+g");
	var mask_4_graphics_123 = new cjs.Graphics().p("AtikyQHHp2L9h7QL+h8J0HHQJ1HFB7L9Mg5wAJUQh7r+HFpyg");
	var mask_4_graphics_124 = new cjs.Graphics().p("AtLlAQHVprMAhpQMBhpJpHVQJqHUBqMAMg5+AH8QhpsAHUpog");
	var mask_4_graphics_125 = new cjs.Graphics().p("AszlNQHkpgMChXQMDhXJeHkQJfHiBXMCMg6IAGlQhXsDHipcg");
	var mask_4_graphics_126 = new cjs.Graphics().p("AsZlaQHypUMEhFQMFhFJSHyQJTHxBFMEMg6RAFNQhFsFHxpRg");
	var mask_4_graphics_127 = new cjs.Graphics().p("Ar+lmQH/pIMGgyQMGgzJHIAQJHH+AzMGMg6YAD1QgzsGH/pGg");
	var mask_4_graphics_128 = new cjs.Graphics().p("ArilxQINo7MHghQMHggI6INQI8ILAgMIMg6dACdQggsIIMo5g");
	var mask_4_graphics_129 = new cjs.Graphics().p("ArFl7QIbovMHgOQMIgPIuIbQIvIZAOMIMg6gABFQgOsIIZotg");
	var mask_4_graphics_130 = new cjs.Graphics().p("AzROaQAEsIInogQIooiMHAEQMIAEIhIoQIiIlgEMIg");
	var mask_4_graphics_131 = new cjs.Graphics().p("AzQNYQAWsIIzoTQI1oVMHAWQMIAXITI0QIVIzgWMHg");
	var mask_4_graphics_132 = new cjs.Graphics().p("AzPMWQApsHI/oGQJCoHMGAoQMHApIGJBQIII/gpMHg");
	var mask_4_graphics_133 = new cjs.Graphics().p("AzMLUQA7sFJLn5QJNn6MGA7QMFA7H5JNQH6JLg7MGg");
	var mask_4_graphics_134 = new cjs.Graphics().p("AzJKSQBNsDJYnrQJYnsMEBNQMFBNHqJZQHsJXhNMEg");
	var mask_4_graphics_135 = new cjs.Graphics().p("AzEJQQBfsBJjncQJjneMDBfQMCBgHcJkQHeJihfMCg");
	var mask_4_graphics_136 = new cjs.Graphics().p("Ay/IPQByr/JunOQJunPMAByQMABxHOJwQHPJthxMAg");
	var mask_4_graphics_137 = new cjs.Graphics().p("Ay4HOQCDr8J5m/QJ5nAL9CDQL9CEG/J6QHBJ4iEL9g");
	var mask_4_graphics_138 = new cjs.Graphics().p("AyxGNQCWr5KDmwQKEmxL5CWQL6CVGwKFQGxKCiVL6g");
	var mask_4_graphics_139 = new cjs.Graphics().p("AyoFNQCnr2KNmgQKOmiL2CnQL2CoGhKOQGiKNinL2g");
	var mask_4_graphics_140 = new cjs.Graphics().p("AyeEMQC5rxKXmRQKXmSLyC5QLyC5GRKYQGTKWi6Lyg");
	var mask_4_graphics_141 = new cjs.Graphics().p("AyUDMQDLrsKgmCQKhmCLtDLQLuDLGBKhQGDKgjLLtg");
	var mask_4_graphics_142 = new cjs.Graphics().p("AyICNQDdroKplxQKplzLpDdQLoDcFxKrQFzKojcLpg");
	var mask_4_graphics_143 = new cjs.Graphics().p("Ax7BOQDuriKxliQKzliLjDuQLjDuFhKzQFjKxjvLjg");
	var mask_4_graphics_144 = new cjs.Graphics().p("AxuAPQEArcK6lRQK6lSLdD/QLeEAFQK7QFTK5kALdg");
	var mask_4_graphics_145 = new cjs.Graphics().p("AxfguQERrXLBlBQLDlBLXEQQLXERFALDQFCLBkRLXg");
	var mask_4_graphics_146 = new cjs.Graphics().p("AxPhsQEirQLJkwQLJkxLREiQLQEiEwLKQExLIkiLQg");
	var mask_4_graphics_147 = new cjs.Graphics().p("Aw+ipQEzrKLPkfQLRkfLKEyQLJEzEeLRQEhLQkzLJg");
	var mask_4_graphics_148 = new cjs.Graphics().p("AwsjmQFDrCLXkOQLXkOLCFDQLCFDENLYQEQLWlELCg");
	var mask_4_graphics_149 = new cjs.Graphics().p("AwZkiQFUq6Lbj9QLfj9K6FUQK6FUD8LeQD+LclUK6g");
	var mask_4_graphics_150 = new cjs.Graphics().p("AwGldQFlqyLhjsQLkjsKyFlQKyFkDrLkQDtLilkKyg");
	var mask_4_graphics_151 = new cjs.Graphics().p("AvxmYQF1qpLmjaQLqjbKqF1QKpF0DZLpQDcLol1Kpg");
	var mask_4_graphics_152 = new cjs.Graphics().p("AvbnSQGEqgLsjJQLvjJKgGFQKhGEDHLuQDKLtmFKgg");
	var mask_4_graphics_153 = new cjs.Graphics().p("AvFoLQGVqXLwi3QLzi3KXGUQKYGUC1LyQC4LymUKXg");
	var mask_4_graphics_154 = new cjs.Graphics().p("AutpEQGkqNL0ilQL4ilKNGkQKOGjCkL2QCmL2mkKOg");
	var mask_4_graphics_155 = new cjs.Graphics().p("AuVp7QG0qEL4iTQL7iTKDGzQKEGzCSL6QCUL5mzKEg");
	var mask_4_graphics_156 = new cjs.Graphics().p("At7qyQHCp5L7iBQL/iBJ5HCQJ5HCCAL9QCCL9nCJ5g");
	var mask_4_graphics_157 = new cjs.Graphics().p("AthroQHRpuL+hvQMBhvJvHRQJuHRBuL/QBwMAnRJug");
	var mask_4_graphics_158 = new cjs.Graphics().p("AtGsdQHfpjMBhdQMEhdJjHgQJjHfBcMCQBeMDngJjg");
	var mask_4_graphics_159 = new cjs.Graphics().p("AsqtRQHupXMChLQMGhLJYHuQJXHuBKMEQBMMEnuJYg");
	var mask_4_graphics_160 = new cjs.Graphics().p("AsOuDQH8pMMEg5QMIg5JMH8QJLH8A4MGQA6MGn8JMg");
	var mask_4_graphics_161 = new cjs.Graphics().p("Arwu1QIJpAMGgmQMIgnJAIKQJAIJAlMHQAnMHoJJAg");
	var mask_4_graphics_162 = new cjs.Graphics().p("ArSvmQIXozMGgUQMJgUIzIXQI0IXATMHQAVMIoXIzg");
	var mask_4_graphics_163 = new cjs.Graphics().p("AqzwWQIkomMGgCQMJgCInIlQInIkAAMHQADMIokIng");
	var mask_4_graphics_164 = new cjs.Graphics().p("AqVxEQIxoaMGARQMJARIaIxQIaIxgSMHQgQMIoxIag");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_4_graphics_9,x:212.9,y:176.7}).wait(1).to({graphics:mask_4_graphics_10,x:211.7,y:176.7}).wait(1).to({graphics:mask_4_graphics_11,x:210.5,y:176.7}).wait(1).to({graphics:mask_4_graphics_12,x:209.3,y:176.7}).wait(1).to({graphics:mask_4_graphics_13,x:208.1,y:176.8}).wait(1).to({graphics:mask_4_graphics_14,x:206.9,y:176.8}).wait(1).to({graphics:mask_4_graphics_15,x:205.7,y:176.8}).wait(1).to({graphics:mask_4_graphics_16,x:204.4,y:176.8}).wait(1).to({graphics:mask_4_graphics_17,x:203.2,y:176.8}).wait(1).to({graphics:mask_4_graphics_18,x:201.9,y:176.8}).wait(1).to({graphics:mask_4_graphics_19,x:200.6,y:176.3}).wait(1).to({graphics:mask_4_graphics_20,x:199.3,y:175.7}).wait(1).to({graphics:mask_4_graphics_21,x:198,y:175.1}).wait(1).to({graphics:mask_4_graphics_22,x:196.7,y:174.5}).wait(1).to({graphics:mask_4_graphics_23,x:195.4,y:173.9}).wait(1).to({graphics:mask_4_graphics_24,x:194.1,y:173.4}).wait(1).to({graphics:mask_4_graphics_25,x:192.8,y:172.8}).wait(1).to({graphics:mask_4_graphics_26,x:191.4,y:172.3}).wait(1).to({graphics:mask_4_graphics_27,x:190.1,y:171.8}).wait(1).to({graphics:mask_4_graphics_28,x:188.7,y:171.3}).wait(1).to({graphics:mask_4_graphics_29,x:187.4,y:170.9}).wait(1).to({graphics:mask_4_graphics_30,x:186,y:170.4}).wait(1).to({graphics:mask_4_graphics_31,x:184.6,y:170}).wait(1).to({graphics:mask_4_graphics_32,x:183.3,y:169.6}).wait(1).to({graphics:mask_4_graphics_33,x:181.9,y:169.2}).wait(1).to({graphics:mask_4_graphics_34,x:180.5,y:168.9}).wait(1).to({graphics:mask_4_graphics_35,x:179.1,y:168.5}).wait(1).to({graphics:mask_4_graphics_36,x:177.7,y:168.2}).wait(1).to({graphics:mask_4_graphics_37,x:176.3,y:167.9}).wait(1).to({graphics:mask_4_graphics_38,x:174.9,y:167.6}).wait(1).to({graphics:mask_4_graphics_39,x:173.4,y:167.4}).wait(1).to({graphics:mask_4_graphics_40,x:172,y:167.1}).wait(1).to({graphics:mask_4_graphics_41,x:170.6,y:166.9}).wait(1).to({graphics:mask_4_graphics_42,x:169.2,y:166.7}).wait(1).to({graphics:mask_4_graphics_43,x:167.7,y:166.6}).wait(1).to({graphics:mask_4_graphics_44,x:166.3,y:166.4}).wait(1).to({graphics:mask_4_graphics_45,x:164.9,y:166.3}).wait(1).to({graphics:mask_4_graphics_46,x:163.4,y:166.2}).wait(1).to({graphics:mask_4_graphics_47,x:162,y:166.1}).wait(1).to({graphics:mask_4_graphics_48,x:160.6,y:166.1}).wait(1).to({graphics:mask_4_graphics_49,x:159.1,y:166.1}).wait(1).to({graphics:mask_4_graphics_50,x:158.1,y:166.1}).wait(1).to({graphics:mask_4_graphics_51,x:159.5,y:166.1}).wait(1).to({graphics:mask_4_graphics_52,x:160.9,y:166}).wait(1).to({graphics:mask_4_graphics_53,x:162.4,y:166}).wait(1).to({graphics:mask_4_graphics_54,x:163.8,y:165.9}).wait(1).to({graphics:mask_4_graphics_55,x:165.3,y:165.8}).wait(1).to({graphics:mask_4_graphics_56,x:166.7,y:165.7}).wait(1).to({graphics:mask_4_graphics_57,x:168.1,y:165.5}).wait(1).to({graphics:mask_4_graphics_58,x:169.6,y:165.4}).wait(1).to({graphics:mask_4_graphics_59,x:170.9,y:165.1}).wait(1).to({graphics:mask_4_graphics_60,x:172.4,y:164.9}).wait(1).to({graphics:mask_4_graphics_61,x:173.8,y:164.6}).wait(1).to({graphics:mask_4_graphics_62,x:175.3,y:164.4}).wait(1).to({graphics:mask_4_graphics_63,x:176.7,y:164.1}).wait(1).to({graphics:mask_4_graphics_64,x:178.1,y:163.8}).wait(1).to({graphics:mask_4_graphics_65,x:179.6,y:163.4}).wait(1).to({graphics:mask_4_graphics_66,x:181,y:163.1}).wait(1).to({graphics:mask_4_graphics_67,x:182.4,y:162.7}).wait(1).to({graphics:mask_4_graphics_68,x:183.8,y:162.3}).wait(1).to({graphics:mask_4_graphics_69,x:185.2,y:161.9}).wait(1).to({graphics:mask_4_graphics_70,x:186.6,y:161.5}).wait(1).to({graphics:mask_4_graphics_71,x:188,y:161}).wait(1).to({graphics:mask_4_graphics_72,x:189.4,y:160.5}).wait(1).to({graphics:mask_4_graphics_73,x:190.7,y:160}).wait(1).to({graphics:mask_4_graphics_74,x:192.1,y:159.5}).wait(1).to({graphics:mask_4_graphics_75,x:193.5,y:159}).wait(1).to({graphics:mask_4_graphics_76,x:194.8,y:158.4}).wait(1).to({graphics:mask_4_graphics_77,x:196.1,y:157.8}).wait(1).to({graphics:mask_4_graphics_78,x:197.5,y:157.3}).wait(1).to({graphics:mask_4_graphics_79,x:198.8,y:156.6}).wait(1).to({graphics:mask_4_graphics_80,x:200.1,y:156}).wait(1).to({graphics:mask_4_graphics_81,x:201.4,y:155.4}).wait(1).to({graphics:mask_4_graphics_82,x:202.7,y:154.7}).wait(1).to({graphics:mask_4_graphics_83,x:203.9,y:154}).wait(1).to({graphics:mask_4_graphics_84,x:205.2,y:153.3}).wait(1).to({graphics:mask_4_graphics_85,x:206.5,y:152.6}).wait(1).to({graphics:mask_4_graphics_86,x:207.7,y:151.8}).wait(1).to({graphics:mask_4_graphics_87,x:208.9,y:151.1}).wait(1).to({graphics:mask_4_graphics_88,x:210.1,y:150.3}).wait(1).to({graphics:mask_4_graphics_89,x:211.3,y:149.5}).wait(1).to({graphics:mask_4_graphics_90,x:213.1,y:148.2}).wait(1).to({graphics:mask_4_graphics_91,x:214.9,y:146.9}).wait(1).to({graphics:mask_4_graphics_92,x:216.6,y:145.6}).wait(1).to({graphics:mask_4_graphics_93,x:218.3,y:144.2}).wait(1).to({graphics:mask_4_graphics_94,x:220,y:142.8}).wait(1).to({graphics:mask_4_graphics_95,x:221.6,y:141.4}).wait(1).to({graphics:mask_4_graphics_96,x:223.2,y:139.9}).wait(1).to({graphics:mask_4_graphics_97,x:224.7,y:138.3}).wait(1).to({graphics:mask_4_graphics_98,x:226.3,y:136.7}).wait(1).to({graphics:mask_4_graphics_99,x:227.7,y:135.1}).wait(1).to({graphics:mask_4_graphics_100,x:229.2,y:133.4}).wait(1).to({graphics:mask_4_graphics_101,x:230.6,y:131.7}).wait(1).to({graphics:mask_4_graphics_102,x:231.9,y:129.9}).wait(1).to({graphics:mask_4_graphics_103,x:233.3,y:128.1}).wait(1).to({graphics:mask_4_graphics_104,x:234.5,y:126.3}).wait(1).to({graphics:mask_4_graphics_105,x:235.8,y:124.4}).wait(1).to({graphics:mask_4_graphics_106,x:237,y:122.6}).wait(1).to({graphics:mask_4_graphics_107,x:238.1,y:120.7}).wait(1).to({graphics:mask_4_graphics_108,x:239.2,y:118.7}).wait(1).to({graphics:mask_4_graphics_109,x:240.3,y:116.8}).wait(1).to({graphics:mask_4_graphics_110,x:241.3,y:114.8}).wait(1).to({graphics:mask_4_graphics_111,x:242.2,y:112.8}).wait(1).to({graphics:mask_4_graphics_112,x:243.2,y:110.8}).wait(1).to({graphics:mask_4_graphics_113,x:244,y:108.8}).wait(1).to({graphics:mask_4_graphics_114,x:244.9,y:106.8}).wait(1).to({graphics:mask_4_graphics_115,x:245.6,y:104.7}).wait(1).to({graphics:mask_4_graphics_116,x:246.4,y:102.6}).wait(1).to({graphics:mask_4_graphics_117,x:247,y:100.5}).wait(1).to({graphics:mask_4_graphics_118,x:247.7,y:98.4}).wait(1).to({graphics:mask_4_graphics_119,x:248.2,y:96.3}).wait(1).to({graphics:mask_4_graphics_120,x:248.8,y:94.2}).wait(1).to({graphics:mask_4_graphics_121,x:249.2,y:92.1}).wait(1).to({graphics:mask_4_graphics_122,x:249.7,y:90}).wait(1).to({graphics:mask_4_graphics_123,x:250,y:87.8}).wait(1).to({graphics:mask_4_graphics_124,x:250.4,y:85.6}).wait(1).to({graphics:mask_4_graphics_125,x:250.6,y:83.5}).wait(1).to({graphics:mask_4_graphics_126,x:250.8,y:81.3}).wait(1).to({graphics:mask_4_graphics_127,x:251,y:79.1}).wait(1).to({graphics:mask_4_graphics_128,x:251.1,y:76.9}).wait(1).to({graphics:mask_4_graphics_129,x:251.2,y:74.7}).wait(1).to({graphics:mask_4_graphics_130,x:251.2,y:73.5}).wait(1).to({graphics:mask_4_graphics_131,x:251.2,y:75.7}).wait(1).to({graphics:mask_4_graphics_132,x:251.2,y:77.9}).wait(1).to({graphics:mask_4_graphics_133,x:251.2,y:80.1}).wait(1).to({graphics:mask_4_graphics_134,x:251.2,y:82.2}).wait(1).to({graphics:mask_4_graphics_135,x:251.3,y:84.4}).wait(1).to({graphics:mask_4_graphics_136,x:251.3,y:86.6}).wait(1).to({graphics:mask_4_graphics_137,x:251.3,y:88.7}).wait(1).to({graphics:mask_4_graphics_138,x:251.3,y:90.9}).wait(1).to({graphics:mask_4_graphics_139,x:251.3,y:93}).wait(1).to({graphics:mask_4_graphics_140,x:251.4,y:95.1}).wait(1).to({graphics:mask_4_graphics_141,x:251.4,y:97.2}).wait(1).to({graphics:mask_4_graphics_142,x:251.4,y:99.3}).wait(1).to({graphics:mask_4_graphics_143,x:251.4,y:101.4}).wait(1).to({graphics:mask_4_graphics_144,x:251.4,y:103.5}).wait(1).to({graphics:mask_4_graphics_145,x:251.4,y:105.5}).wait(1).to({graphics:mask_4_graphics_146,x:251.4,y:107.6}).wait(1).to({graphics:mask_4_graphics_147,x:251.4,y:109.6}).wait(1).to({graphics:mask_4_graphics_148,x:251.4,y:111.6}).wait(1).to({graphics:mask_4_graphics_149,x:251.4,y:113.6}).wait(1).to({graphics:mask_4_graphics_150,x:251.4,y:115.6}).wait(1).to({graphics:mask_4_graphics_151,x:251.4,y:117.6}).wait(1).to({graphics:mask_4_graphics_152,x:251.3,y:119.5}).wait(1).to({graphics:mask_4_graphics_153,x:251.3,y:121.4}).wait(1).to({graphics:mask_4_graphics_154,x:251.3,y:123.3}).wait(1).to({graphics:mask_4_graphics_155,x:251.2,y:125.2}).wait(1).to({graphics:mask_4_graphics_156,x:251.2,y:127}).wait(1).to({graphics:mask_4_graphics_157,x:251.2,y:128.8}).wait(1).to({graphics:mask_4_graphics_158,x:251.1,y:130.6}).wait(1).to({graphics:mask_4_graphics_159,x:251.1,y:132.3}).wait(1).to({graphics:mask_4_graphics_160,x:251.1,y:134}).wait(1).to({graphics:mask_4_graphics_161,x:251.1,y:135.7}).wait(1).to({graphics:mask_4_graphics_162,x:251,y:137.3}).wait(1).to({graphics:mask_4_graphics_163,x:251,y:138.9}).wait(1).to({graphics:mask_4_graphics_164,x:250.9,y:140.4}).wait(537));

	// Layer 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("An0mNQI9kAD0EsQDzEthPFWQgaBvgyBz");
	this.shape_5.setTransform(314.7,137.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("AnCvWQI8kAD0EsQD0EthQFXQhPFXk2F5Qk1F4l9Er");
	this.shape_6.setTransform(309.7,195.9);

	var maskedShapeInstanceList = [this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5}]},9).to({state:[{t:this.shape_6}]},75).wait(617));

	// Letter
	this.instance_4 = new lib.z("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,275);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(701));

	// Background
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_7.setTransform(275,275,3.373,2.543);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_8.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(701));

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