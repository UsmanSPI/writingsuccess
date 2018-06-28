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


(lib.I = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AKhX9QiGiRhnmEQkEC9juBpQlwCEi7AAQiQgBiHgiQiAggh3g+Qjdh3imjYQidjKhakKQhXj/gKkQQAAh3CEABQBUgBAaBCIAYCCQCQCfCsBRQCvBUDLAAQBrAADIgvQDIgyBZAAQCJAAAACDQAABxj5BCQjDA0jaABQizAAimgtQijgsiVhUQA5CaBPB8QBUCEBpBbQByBiCFA0QCPA1CoAAQCrAAFjiQQDhhxDti/QgvkJgBkOQEl7sNrAAQCzAABpB0QBkBuAACwIAAA4QgiD8h5EcQhxEHi1ESQimD7jRDsQjCDgjHCuQAXBeB2D/QBqDlgBA6QABCBiBAAQgyAAg1g6gATEzLQh5BZh3CjIi9E3Ih2ERQhcEcAAEhIAYFSIFil0QC7jZCRjhQCejyBXjXQBhjtAAi1QAAijiOAAQiEAAiLBpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187.5,-159.1,375,318.2);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-94.4,guide:{path:[-47.9,-29.4,-30.4,37.2,47,28.6]}},104).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AlhCZICwlVIBHAkIixFVg");
	var mask_graphics_1 = new cjs.Graphics().p("Ah/CWICwlVIBPAqIiwFVg");
	var mask_graphics_2 = new cjs.Graphics().p("AiECUICwlVIBZAuIiwFVg");
	var mask_graphics_3 = new cjs.Graphics().p("AiJCRICwlVIBjA0IiwFVg");
	var mask_graphics_4 = new cjs.Graphics().p("AiOCPICwlVIBtA4IiwFVg");
	var mask_graphics_5 = new cjs.Graphics().p("AiSCMICvlVIB3A+IiwFVg");
	var mask_graphics_6 = new cjs.Graphics().p("AiXCKICvlVICBBCIiwFVg");
	var mask_graphics_7 = new cjs.Graphics().p("AicCHICvlVICKBHIivFVg");
	var mask_graphics_8 = new cjs.Graphics().p("AihCFICvlVICUBMIivFVg");
	var mask_graphics_9 = new cjs.Graphics().p("AimCCICwlVICdBSIivFVg");
	var mask_graphics_10 = new cjs.Graphics().p("AirCAICwlVICnBWIivFVg");
	var mask_graphics_11 = new cjs.Graphics().p("AiwB9ICwlVICxBcIixFVg");
	var mask_graphics_12 = new cjs.Graphics().p("Ai1B7ICxlVIC6BgIixFVg");
	var mask_graphics_13 = new cjs.Graphics().p("Ai5B4ICwlVIDDBmIiwFVg");
	var mask_graphics_14 = new cjs.Graphics().p("Ai+B2ICwlVIDNBqIiwFVg");
	var mask_graphics_15 = new cjs.Graphics().p("AjDBzICwlVIDXBwIiwFVg");
	var mask_graphics_16 = new cjs.Graphics().p("AjIBxICxlVIDgB0IixFVg");
	var mask_graphics_17 = new cjs.Graphics().p("AjNBuICxlVIDqB6IixFVg");
	var mask_graphics_18 = new cjs.Graphics().p("AjSBsICxlVID0B+IixFVg");
	var mask_graphics_19 = new cjs.Graphics().p("AjXBpICxlVID+CEIixFVg");
	var mask_graphics_20 = new cjs.Graphics().p("AjbBnICwlVIEICIIixFVg");
	var mask_graphics_21 = new cjs.Graphics().p("AjgBkICwlVIESCOIixFVg");
	var mask_graphics_22 = new cjs.Graphics().p("AjlBiICwlVIEbCSIiwFVg");
	var mask_graphics_23 = new cjs.Graphics().p("AjqBfICwlVIElCYIiwFVg");
	var mask_graphics_24 = new cjs.Graphics().p("AjvBdICxlVIEuCcIixFVg");
	var mask_graphics_25 = new cjs.Graphics().p("Aj0BaICxlVIE4CiIixFVg");
	var mask_graphics_26 = new cjs.Graphics().p("Aj5BXICxlVIFCCoIixFVg");
	var mask_graphics_27 = new cjs.Graphics().p("Aj9BVICwlVIFLCsIiwFVg");
	var mask_graphics_28 = new cjs.Graphics().p("AkCBSICwlVIFVCyIiwFVg");
	var mask_graphics_29 = new cjs.Graphics().p("AkHBQICwlVIFfC2IiwFVg");
	var mask_graphics_30 = new cjs.Graphics().p("AkMBNICwlVIFpC8IiwFVg");
	var mask_graphics_31 = new cjs.Graphics().p("AkRBLICxlVIFyDAIiwFVg");
	var mask_graphics_32 = new cjs.Graphics().p("AkWBIICxlVIF8DFIiwFVg");
	var mask_graphics_33 = new cjs.Graphics().p("AkbBGICxlVIGGDKIixFVg");
	var mask_graphics_34 = new cjs.Graphics().p("AkgBDICxlVIGQDPIixFVg");
	var mask_graphics_35 = new cjs.Graphics().p("AkkBBICwlVIGZDUIiwFVg");
	var mask_graphics_36 = new cjs.Graphics().p("AkpA+ICwlVIGjDZIiwFVg");
	var mask_graphics_37 = new cjs.Graphics().p("AkuA8ICwlVIGtDeIiwFVg");
	var mask_graphics_38 = new cjs.Graphics().p("AkzA5ICwlVIG3DjIiwFVg");
	var mask_graphics_39 = new cjs.Graphics().p("Ak4A3ICxlVIHADoIixFVg");
	var mask_graphics_40 = new cjs.Graphics().p("Ak9A0ICxlVIHKDtIixFVg");
	var mask_graphics_41 = new cjs.Graphics().p("AlCAyICxlVIHUDyIixFVg");
	var mask_graphics_42 = new cjs.Graphics().p("AlGAvICwlVIHeD4IixFVg");
	var mask_graphics_43 = new cjs.Graphics().p("AlLAtICwlVIHoD8IixFVg");
	var mask_graphics_44 = new cjs.Graphics().p("AlQAqICwlVIHxECIiwFVg");
	var mask_graphics_45 = new cjs.Graphics().p("AlVAoICwlVIH7EGIiwFVg");
	var mask_graphics_46 = new cjs.Graphics().p("AlaAlICxlVIIEEMIiwFVg");
	var mask_graphics_47 = new cjs.Graphics().p("AlfAjICxlVIIOEQIiwFVg");
	var mask_graphics_48 = new cjs.Graphics().p("AlkAgICxlVIIYEWIixFVg");
	var mask_graphics_49 = new cjs.Graphics().p("AlpAeICxlVIIiEaIixFVg");
	var mask_graphics_50 = new cjs.Graphics().p("AltAbICwlVIIrEgIiwFVg");
	var mask_graphics_51 = new cjs.Graphics().p("AlyAZICwlVII1EkIiwFVg");
	var mask_graphics_52 = new cjs.Graphics().p("Al3AWICwlVII/EqIiwFVg");
	var mask_graphics_53 = new cjs.Graphics().p("Al8AUICwlVIJJEuIiwFVg");
	var mask_graphics_54 = new cjs.Graphics().p("AmBARICwlVIJTE0IiwFVg");
	var mask_graphics_55 = new cjs.Graphics().p("AmGAPICwlVIJdE4IixFVg");
	var mask_graphics_56 = new cjs.Graphics().p("AmLAMICwlVIJnE+IixFVg");
	var mask_graphics_57 = new cjs.Graphics().p("AmQAKICxlVIJwFCIixFVg");
	var mask_graphics_58 = new cjs.Graphics().p("AmVAHICxlVIJ6FIIixFVg");
	var mask_graphics_59 = new cjs.Graphics().p("AmaAFICxlVIKDFNIiwFVg");
	var mask_graphics_60 = new cjs.Graphics().p("AmfACICxlVIKOFSIixFVg");
	var mask_graphics_61 = new cjs.Graphics().p("AmjAAICwlWIKXFXIiwFWg");
	var mask_graphics_62 = new cjs.Graphics().p("AmogCICwlWIKhFbIiwFWg");
	var mask_graphics_63 = new cjs.Graphics().p("AmtgFICwlWIKrFhIiwFWg");
	var mask_graphics_64 = new cjs.Graphics().p("AmygHICwlWIK1FlIiwFWg");
	var mask_graphics_65 = new cjs.Graphics().p("Am3gKICxlWIK+FrIixFWg");
	var mask_graphics_66 = new cjs.Graphics().p("Am8gMICxlWILIFvIixFWg");
	var mask_graphics_67 = new cjs.Graphics().p("AnBgPICxlWILRF1IiwFWg");
	var mask_graphics_68 = new cjs.Graphics().p("AnFgRICwlWILbF5IiwFWg");
	var mask_graphics_69 = new cjs.Graphics().p("AnKgUICwlWILlF/IiwFWg");
	var mask_graphics_70 = new cjs.Graphics().p("AnPgWICwlWILvGDIixFWg");
	var mask_graphics_71 = new cjs.Graphics().p("AnUgZICwlWIL5GJIixFWg");
	var mask_graphics_72 = new cjs.Graphics().p("AnZgbICxlWIMCGNIixFWg");
	var mask_graphics_73 = new cjs.Graphics().p("AnegeICxlWIMMGTIixFWg");
	var mask_graphics_74 = new cjs.Graphics().p("AnjggICxlWIMWGXIixFWg");
	var mask_graphics_75 = new cjs.Graphics().p("AnogjICxlWIMgGdIixFWg");
	var mask_graphics_76 = new cjs.Graphics().p("AnsglICwlWIMpGhIiwFWg");
	var mask_graphics_77 = new cjs.Graphics().p("AnxgoICwlWIMzGnIiwFWg");
	var mask_graphics_78 = new cjs.Graphics().p("An2gqICwlWIM9GrIiwFWg");
	var mask_graphics_79 = new cjs.Graphics().p("An7gtICxlWINGGxIixFWg");
	var mask_graphics_80 = new cjs.Graphics().p("AoAgvICxlWINQG1IixFWg");
	var mask_graphics_81 = new cjs.Graphics().p("AoFgyICxlWINZG7IiwFWg");
	var mask_graphics_82 = new cjs.Graphics().p("AoKg0ICxlWINjG/IiwFWg");
	var mask_graphics_83 = new cjs.Graphics().p("AoOg3ICwlWINtHFIiwFWg");
	var mask_graphics_84 = new cjs.Graphics().p("AoTg5ICwlWIN3HKIiwFWg");
	var mask_graphics_85 = new cjs.Graphics().p("AoYg8ICwlWIOBHPIixFWg");
	var mask_graphics_86 = new cjs.Graphics().p("Aodg+ICwlWIOLHUIiwFWg");
	var mask_graphics_87 = new cjs.Graphics().p("AoihBICxlWIOUHZIixFWg");
	var mask_graphics_88 = new cjs.Graphics().p("AonhDICxlWIOeHeIixFWg");
	var mask_graphics_89 = new cjs.Graphics().p("AoshGICxlWIOoHjIixFWg");
	var mask_graphics_90 = new cjs.Graphics().p("AoxhIICxlWIOxHoIiwFWg");
	var mask_graphics_91 = new cjs.Graphics().p("Ao1hLICwlWIO7HtIiwFWg");
	var mask_graphics_92 = new cjs.Graphics().p("Ao6hNICwlWIPFHxIixFXg");
	var mask_graphics_93 = new cjs.Graphics().p("Ao/hQICwlWIPPH3IixFWg");
	var mask_graphics_94 = new cjs.Graphics().p("ApEhSICxlWIPYH7IixFWg");
	var mask_graphics_95 = new cjs.Graphics().p("ApJhVICxlWIPiIBIixFWg");
	var mask_graphics_96 = new cjs.Graphics().p("ApOhYICxlWIPrIHIiwFWg");
	var mask_graphics_97 = new cjs.Graphics().p("ApThaICxlWIP2ILIixFWg");
	var mask_graphics_98 = new cjs.Graphics().p("ApXhdICwlWIP/IRIiwFWg");
	var mask_graphics_99 = new cjs.Graphics().p("ApchfICwlWIQJIVIiwFWg");
	var mask_graphics_100 = new cjs.Graphics().p("AphhiICwlWIQTIbIiwFWg");
	var mask_graphics_101 = new cjs.Graphics().p("ApmhkICwlWIQdIfIiwFWg");
	var mask_graphics_102 = new cjs.Graphics().p("AprhnICxlWIQmIlIixFWg");
	var mask_graphics_103 = new cjs.Graphics().p("ApwhpICxlWIQwIpIixFWg");
	var mask_graphics_104 = new cjs.Graphics().p("Ap1hsICxlWIQ6IvIixFWg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-35.4,y:-17.5}).wait(1).to({graphics:mask_graphics_1,x:-58,y:-17.2}).wait(1).to({graphics:mask_graphics_2,x:-57.5,y:-16.9}).wait(1).to({graphics:mask_graphics_3,x:-57.1,y:-16.7}).wait(1).to({graphics:mask_graphics_4,x:-56.6,y:-16.4}).wait(1).to({graphics:mask_graphics_5,x:-56.1,y:-16.2}).wait(1).to({graphics:mask_graphics_6,x:-55.6,y:-15.9}).wait(1).to({graphics:mask_graphics_7,x:-55.1,y:-15.7}).wait(1).to({graphics:mask_graphics_8,x:-54.6,y:-15.4}).wait(1).to({graphics:mask_graphics_9,x:-54.1,y:-15.2}).wait(1).to({graphics:mask_graphics_10,x:-53.6,y:-14.9}).wait(1).to({graphics:mask_graphics_11,x:-53.2,y:-14.7}).wait(1).to({graphics:mask_graphics_12,x:-52.7,y:-14.4}).wait(1).to({graphics:mask_graphics_13,x:-52.2,y:-14.2}).wait(1).to({graphics:mask_graphics_14,x:-51.7,y:-13.9}).wait(1).to({graphics:mask_graphics_15,x:-51.2,y:-13.7}).wait(1).to({graphics:mask_graphics_16,x:-50.7,y:-13.4}).wait(1).to({graphics:mask_graphics_17,x:-50.2,y:-13.2}).wait(1).to({graphics:mask_graphics_18,x:-49.8,y:-12.9}).wait(1).to({graphics:mask_graphics_19,x:-49.3,y:-12.7}).wait(1).to({graphics:mask_graphics_20,x:-48.8,y:-12.4}).wait(1).to({graphics:mask_graphics_21,x:-48.3,y:-12.2}).wait(1).to({graphics:mask_graphics_22,x:-47.8,y:-11.9}).wait(1).to({graphics:mask_graphics_23,x:-47.3,y:-11.7}).wait(1).to({graphics:mask_graphics_24,x:-46.8,y:-11.4}).wait(1).to({graphics:mask_graphics_25,x:-46.3,y:-11.2}).wait(1).to({graphics:mask_graphics_26,x:-45.9,y:-10.9}).wait(1).to({graphics:mask_graphics_27,x:-45.4,y:-10.6}).wait(1).to({graphics:mask_graphics_28,x:-44.9,y:-10.4}).wait(1).to({graphics:mask_graphics_29,x:-44.4,y:-10.1}).wait(1).to({graphics:mask_graphics_30,x:-43.9,y:-9.9}).wait(1).to({graphics:mask_graphics_31,x:-43.4,y:-9.6}).wait(1).to({graphics:mask_graphics_32,x:-42.9,y:-9.4}).wait(1).to({graphics:mask_graphics_33,x:-42.5,y:-9.1}).wait(1).to({graphics:mask_graphics_34,x:-42,y:-8.9}).wait(1).to({graphics:mask_graphics_35,x:-41.5,y:-8.6}).wait(1).to({graphics:mask_graphics_36,x:-41,y:-8.4}).wait(1).to({graphics:mask_graphics_37,x:-40.5,y:-8.1}).wait(1).to({graphics:mask_graphics_38,x:-40,y:-7.9}).wait(1).to({graphics:mask_graphics_39,x:-39.5,y:-7.6}).wait(1).to({graphics:mask_graphics_40,x:-39.1,y:-7.4}).wait(1).to({graphics:mask_graphics_41,x:-38.6,y:-7.1}).wait(1).to({graphics:mask_graphics_42,x:-38.1,y:-6.9}).wait(1).to({graphics:mask_graphics_43,x:-37.6,y:-6.6}).wait(1).to({graphics:mask_graphics_44,x:-37.1,y:-6.4}).wait(1).to({graphics:mask_graphics_45,x:-36.6,y:-6.1}).wait(1).to({graphics:mask_graphics_46,x:-36.1,y:-5.9}).wait(1).to({graphics:mask_graphics_47,x:-35.6,y:-5.6}).wait(1).to({graphics:mask_graphics_48,x:-35.2,y:-5.4}).wait(1).to({graphics:mask_graphics_49,x:-34.7,y:-5.1}).wait(1).to({graphics:mask_graphics_50,x:-34.2,y:-4.9}).wait(1).to({graphics:mask_graphics_51,x:-33.7,y:-4.6}).wait(1).to({graphics:mask_graphics_52,x:-33.2,y:-4.4}).wait(1).to({graphics:mask_graphics_53,x:-32.8,y:-4.1}).wait(1).to({graphics:mask_graphics_54,x:-32.3,y:-3.9}).wait(1).to({graphics:mask_graphics_55,x:-31.8,y:-3.6}).wait(1).to({graphics:mask_graphics_56,x:-31.3,y:-3.4}).wait(1).to({graphics:mask_graphics_57,x:-30.8,y:-3.1}).wait(1).to({graphics:mask_graphics_58,x:-30.3,y:-2.9}).wait(1).to({graphics:mask_graphics_59,x:-29.8,y:-2.6}).wait(1).to({graphics:mask_graphics_60,x:-29.3,y:-2.4}).wait(1).to({graphics:mask_graphics_61,x:-28.9,y:-2.1}).wait(1).to({graphics:mask_graphics_62,x:-28.4,y:-1.9}).wait(1).to({graphics:mask_graphics_63,x:-27.9,y:-1.6}).wait(1).to({graphics:mask_graphics_64,x:-27.4,y:-1.4}).wait(1).to({graphics:mask_graphics_65,x:-26.9,y:-1.1}).wait(1).to({graphics:mask_graphics_66,x:-26.4,y:-0.9}).wait(1).to({graphics:mask_graphics_67,x:-25.9,y:-0.6}).wait(1).to({graphics:mask_graphics_68,x:-25.5,y:-0.4}).wait(1).to({graphics:mask_graphics_69,x:-25,y:-0.1}).wait(1).to({graphics:mask_graphics_70,x:-24.5,y:0.1}).wait(1).to({graphics:mask_graphics_71,x:-24,y:0.4}).wait(1).to({graphics:mask_graphics_72,x:-23.5,y:0.6}).wait(1).to({graphics:mask_graphics_73,x:-23,y:0.9}).wait(1).to({graphics:mask_graphics_74,x:-22.5,y:1.1}).wait(1).to({graphics:mask_graphics_75,x:-22,y:1.4}).wait(1).to({graphics:mask_graphics_76,x:-21.6,y:1.6}).wait(1).to({graphics:mask_graphics_77,x:-21.1,y:1.9}).wait(1).to({graphics:mask_graphics_78,x:-20.6,y:2.2}).wait(1).to({graphics:mask_graphics_79,x:-20.1,y:2.4}).wait(1).to({graphics:mask_graphics_80,x:-19.6,y:2.7}).wait(1).to({graphics:mask_graphics_81,x:-19.1,y:2.9}).wait(1).to({graphics:mask_graphics_82,x:-18.6,y:3.2}).wait(1).to({graphics:mask_graphics_83,x:-18.2,y:3.4}).wait(1).to({graphics:mask_graphics_84,x:-17.7,y:3.7}).wait(1).to({graphics:mask_graphics_85,x:-17.2,y:3.9}).wait(1).to({graphics:mask_graphics_86,x:-16.7,y:4.2}).wait(1).to({graphics:mask_graphics_87,x:-16.2,y:4.4}).wait(1).to({graphics:mask_graphics_88,x:-15.7,y:4.7}).wait(1).to({graphics:mask_graphics_89,x:-15.2,y:4.9}).wait(1).to({graphics:mask_graphics_90,x:-14.7,y:5.2}).wait(1).to({graphics:mask_graphics_91,x:-14.3,y:5.4}).wait(1).to({graphics:mask_graphics_92,x:-13.8,y:5.7}).wait(1).to({graphics:mask_graphics_93,x:-13.3,y:5.9}).wait(1).to({graphics:mask_graphics_94,x:-12.8,y:6.2}).wait(1).to({graphics:mask_graphics_95,x:-12.3,y:6.4}).wait(1).to({graphics:mask_graphics_96,x:-11.8,y:6.7}).wait(1).to({graphics:mask_graphics_97,x:-11.3,y:6.9}).wait(1).to({graphics:mask_graphics_98,x:-10.9,y:7.2}).wait(1).to({graphics:mask_graphics_99,x:-10.4,y:7.4}).wait(1).to({graphics:mask_graphics_100,x:-9.9,y:7.7}).wait(1).to({graphics:mask_graphics_101,x:-9.4,y:7.9}).wait(1).to({graphics:mask_graphics_102,x:-8.9,y:8.2}).wait(1).to({graphics:mask_graphics_103,x:-8.4,y:8.4}).wait(1).to({graphics:mask_graphics_104,x:-7.9,y:8.7}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AnfkmQCwKeMPhb");

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(105));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.3,-37.3,21.2,38.8);


(lib.ar3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(58.8,-90.6,1,1,19.7,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.3,regY:0.2,rotation:43.4,guide:{path:[58.8,-90.4,25.2,6.7,-58.9,91]}},104).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ABZmiIBBhiIDyCfIhBBjg");
	var mask_graphics_1 = new cjs.Graphics().p("AifgVIBNh0IDyCfIhNB0g");
	var mask_graphics_2 = new cjs.Graphics().p("AikgMIBYiGIDxCfIhYCGg");
	var mask_graphics_3 = new cjs.Graphics().p("AiqgDIBjiYIDyCgIhkCXg");
	var mask_graphics_4 = new cjs.Graphics().p("AiwAEIBvinIDyCgIhvCng");
	var mask_graphics_5 = new cjs.Graphics().p("Ai2ANIB7i5IDyCgIh7C5g");
	var mask_graphics_6 = new cjs.Graphics().p("Ai7AWICGjLIDxCgIiGDLg");
	var mask_graphics_7 = new cjs.Graphics().p("AjBAfICRjdIDyChIiRDbg");
	var mask_graphics_8 = new cjs.Graphics().p("AjHAnICdjtIDyCgIidDtg");
	var mask_graphics_9 = new cjs.Graphics().p("AjMAwICoj/IDyCgIipD/g");
	var mask_graphics_10 = new cjs.Graphics().p("AjSA4IC0kQIDxChIi0EPg");
	var mask_graphics_11 = new cjs.Graphics().p("AjYBBIDAkhIDxCgIjAEhg");
	var mask_graphics_12 = new cjs.Graphics().p("AjeBKIDLkzIDyCgIjMEzg");
	var mask_graphics_13 = new cjs.Graphics().p("AjkBTIDXlFIDyCgIjXFFg");
	var mask_graphics_14 = new cjs.Graphics().p("AjqBcIDjlXIDyCgIjjFXg");
	var mask_graphics_15 = new cjs.Graphics().p("AjvBlIDulpIDxCgIjuFog");
	var mask_graphics_16 = new cjs.Graphics().p("Aj1BtID4l5IDzCgIj5F5g");
	var mask_graphics_17 = new cjs.Graphics().p("Aj7B2IEEmLIDzCgIkEGLg");
	var mask_graphics_18 = new cjs.Graphics().p("AkBB/IEQmdIDzCgIkQGdg");
	var mask_graphics_19 = new cjs.Graphics().p("AkGCHIEbmuIDyCgIkbGug");
	var mask_graphics_20 = new cjs.Graphics().p("AkMCQIEmm/IDzCgIknG/g");
	var mask_graphics_21 = new cjs.Graphics().p("AkSCZIEynRIDzCgIkyHRg");
	var mask_graphics_22 = new cjs.Graphics().p("AkYCiIE+njIDzCgIk+Hjg");
	var mask_graphics_23 = new cjs.Graphics().p("AkdCqIFJn0IDyCgIlJH1g");
	var mask_graphics_24 = new cjs.Graphics().p("AkjCzIFUoFIDzCgIlVIFg");
	var mask_graphics_25 = new cjs.Graphics().p("AkpC8IFgoXIDzCgIlgIXg");
	var mask_graphics_26 = new cjs.Graphics().p("AkvDFIFsopIDzCgIlsIpg");
	var mask_graphics_27 = new cjs.Graphics().p("Ak1DNIF4o5IDyCgIl3I5g");
	var mask_graphics_28 = new cjs.Graphics().p("Ak6DWIGDpLIDyCgImDJLg");
	var mask_graphics_29 = new cjs.Graphics().p("AlADfIGPpdIDyCgImPJdg");
	var mask_graphics_30 = new cjs.Graphics().p("AlGDoIGapvIDzCgImaJug");
	var mask_graphics_31 = new cjs.Graphics().p("AlMDwIGmp/IDyCgImlJ/g");
	var mask_graphics_32 = new cjs.Graphics().p("AlRD5IGxqRIDyCgImxKRg");
	var mask_graphics_33 = new cjs.Graphics().p("AlXECIG9qjIDyCgIm9Kjg");
	var mask_graphics_34 = new cjs.Graphics().p("AldEKIHJq0IDyCgInIK0g");
	var mask_graphics_35 = new cjs.Graphics().p("AljETIHUrFIDzCgInULFg");
	var mask_graphics_36 = new cjs.Graphics().p("AloEcIHfrXIDyCgInfLXg");
	var mask_graphics_37 = new cjs.Graphics().p("AluElIHrrpIDyCgInrLpg");
	var mask_graphics_38 = new cjs.Graphics().p("Al0EtIH3r6IDyCgIn2L6g");
	var mask_graphics_39 = new cjs.Graphics().p("Al6E2IICsLIDzCgIoCMLg");
	var mask_graphics_40 = new cjs.Graphics().p("Al/E/IINsdIDyCgIoNMdg");
	var mask_graphics_41 = new cjs.Graphics().p("AmFFIIIZsvIDyCgIoZMvg");
	var mask_graphics_42 = new cjs.Graphics().p("AmLFRIIltBIDyCgIokNBg");
	var mask_graphics_43 = new cjs.Graphics().p("AmRFZIIwtRIDzCgIowNRg");
	var mask_graphics_44 = new cjs.Graphics().p("AmWFiII7tjIDyCgIo7Njg");
	var mask_graphics_45 = new cjs.Graphics().p("AmcFrIJHt1IDyCgIpHN1g");
	var mask_graphics_46 = new cjs.Graphics().p("AmiFzIJTuFIDyCgIpTOGg");
	var mask_graphics_47 = new cjs.Graphics().p("AmoF8IJeuXIDzCgIpeOXg");
	var mask_graphics_48 = new cjs.Graphics().p("AmuGFIJqupIDyCgIppOpg");
	var mask_graphics_49 = new cjs.Graphics().p("AmzGOIJ1u7IDyCgIp1O7g");
	var mask_graphics_50 = new cjs.Graphics().p("Am5GWIKBvLIDyCgIqBPMg");
	var mask_graphics_51 = new cjs.Graphics().p("Am/GfIKMvdIDzCgIqMPdg");
	var mask_graphics_52 = new cjs.Graphics().p("AnFGoIKYvvIDyCgIqXPvg");
	var mask_graphics_53 = new cjs.Graphics().p("AnLGxIKkwBIDyCgIqjQBg");
	var mask_graphics_54 = new cjs.Graphics().p("AnQG6IKvwSIDyCgIqvQSg");
	var mask_graphics_55 = new cjs.Graphics().p("AnWHCIK7wjIDyCgIq6Qjg");
	var mask_graphics_56 = new cjs.Graphics().p("AncHLILGw1IDzCgIrGQ1g");
	var mask_graphics_57 = new cjs.Graphics().p("AnhHUILRxHIDyCgIrRRHg");
	var mask_graphics_58 = new cjs.Graphics().p("AnnHdILdxYIDyCgIrdRXg");
	var mask_graphics_59 = new cjs.Graphics().p("AntHlILpxpIDyCgIroRpg");
	var mask_graphics_60 = new cjs.Graphics().p("AnzHuIL0x7IDzCgIr0R7g");
	var mask_graphics_61 = new cjs.Graphics().p("An4H2IL/yLIDyCgIr/SLg");
	var mask_graphics_62 = new cjs.Graphics().p("An+H/IMLydIDyCgIsLSdg");
	var mask_graphics_63 = new cjs.Graphics().p("AoEIIIMXyvIDyCgIsWSvg");
	var mask_graphics_64 = new cjs.Graphics().p("AoKIRIMizBIDzCgIsiTBg");
	var mask_graphics_65 = new cjs.Graphics().p("AoPIZIMtzRIDyCgIstTSg");
	var mask_graphics_66 = new cjs.Graphics().p("AoVIjIM5zlIDyCgIs5Tkg");
	var mask_graphics_67 = new cjs.Graphics().p("AobIrINFz1IDyCgItET1g");
	var mask_graphics_68 = new cjs.Graphics().p("AohI0INQ0HIDzCgItQUHg");
	var mask_graphics_69 = new cjs.Graphics().p("AomI9INb0ZIDyCgItbUZg");
	var mask_graphics_70 = new cjs.Graphics().p("AosJFINn0qIDyCgItnUqg");
	var mask_graphics_71 = new cjs.Graphics().p("AoyJOINz07IDyCgItzU7g");
	var mask_graphics_72 = new cjs.Graphics().p("Ao4JXIN+1NIDzCgIt+VNg");
	var mask_graphics_73 = new cjs.Graphics().p("Ao+JgIOK1fIDzCgIuKVfg");
	var mask_graphics_74 = new cjs.Graphics().p("ApEJoIOW1wIDyCgIuVVxg");
	var mask_graphics_75 = new cjs.Graphics().p("ApJJxIOh2BIDyCgIuhWBg");
	var mask_graphics_76 = new cjs.Graphics().p("ApPJ6IOt2TIDyCgIutWTg");
	var mask_graphics_77 = new cjs.Graphics().p("ApVKDIO42lIDzCgIu4Wlg");
	var mask_graphics_78 = new cjs.Graphics().p("ApbKMIPE23IDzCgIvEW3g");
	var mask_graphics_79 = new cjs.Graphics().p("AphKUIPQ3HIDzCgIvQXHg");
	var mask_graphics_80 = new cjs.Graphics().p("ApmKdIPb3ZIDyCgIvbXZg");
	var mask_graphics_81 = new cjs.Graphics().p("ApsKmIPm3rIDzCgIvnXqg");
	var mask_graphics_82 = new cjs.Graphics().p("ApyKuIPy37IDzCgIvyX7g");
	var mask_graphics_83 = new cjs.Graphics().p("Ap4K3IP+4NIDzCgIv+YNg");
	var mask_graphics_84 = new cjs.Graphics().p("Ap9LAIQJ4fIDyCgIwJYfg");
	var mask_graphics_85 = new cjs.Graphics().p("AqDLIIQU4wIDzCgIwVYwg");
	var mask_graphics_86 = new cjs.Graphics().p("AqJLRIQg5BIDzCgIwgZBg");
	var mask_graphics_87 = new cjs.Graphics().p("AqPLaIQs5TIDzCgIwsZTg");
	var mask_graphics_88 = new cjs.Graphics().p("AqULjIQ35lIDyCgIw3Zlg");
	var mask_graphics_89 = new cjs.Graphics().p("AqaLrIRC52IDzCgIxCZ2g");
	var mask_graphics_90 = new cjs.Graphics().p("AqgL0IRO6HIDzCgIxOaHg");
	var mask_graphics_91 = new cjs.Graphics().p("AqlL9IRZ6ZIDzCgIxaaZg");
	var mask_graphics_92 = new cjs.Graphics().p("AqrMGIRl6rIDyCgIxlarg");
	var mask_graphics_93 = new cjs.Graphics().p("AqxMPIRw69IDzCgIxwa9g");
	var mask_graphics_94 = new cjs.Graphics().p("Aq3MXIR87NIDzCgIx9bNg");
	var mask_graphics_95 = new cjs.Graphics().p("Aq9MgISI7fIDzCgIyIbfg");
	var mask_graphics_96 = new cjs.Graphics().p("ArDMpISU7xIDzCgIyUbxg");
	var mask_graphics_97 = new cjs.Graphics().p("ArIMxISf8BIDyCgIyfcBg");
	var mask_graphics_98 = new cjs.Graphics().p("ArOM6ISq8TIDzCgIyrcTg");
	var mask_graphics_99 = new cjs.Graphics().p("ArUNDIS28lIDzCgIy2clg");
	var mask_graphics_100 = new cjs.Graphics().p("AraNMITC83IDzCgIzCc3g");
	var mask_graphics_101 = new cjs.Graphics().p("ArfNUITN9HIDyCgIzNdIg");
	var mask_graphics_102 = new cjs.Graphics().p("ArlNdITY9ZIDzCgIzZdZg");
	var mask_graphics_103 = new cjs.Graphics().p("ArrNmITk9rIDzCgIzkdrg");
	var mask_graphics_104 = new cjs.Graphics().p("ArwNvITv99IDyCgIzvd9g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:39.6,y:-51.7}).wait(1).to({graphics:mask_graphics_1,x:63.3,y:-89.7}).wait(1).to({graphics:mask_graphics_2,x:62.7,y:-88.8}).wait(1).to({graphics:mask_graphics_3,x:62.2,y:-87.9}).wait(1).to({graphics:mask_graphics_4,x:61.6,y:-87.1}).wait(1).to({graphics:mask_graphics_5,x:61,y:-86.2}).wait(1).to({graphics:mask_graphics_6,x:60.4,y:-85.3}).wait(1).to({graphics:mask_graphics_7,x:59.9,y:-84.4}).wait(1).to({graphics:mask_graphics_8,x:59.3,y:-83.6}).wait(1).to({graphics:mask_graphics_9,x:58.7,y:-82.7}).wait(1).to({graphics:mask_graphics_10,x:58.1,y:-81.8}).wait(1).to({graphics:mask_graphics_11,x:57.5,y:-81}).wait(1).to({graphics:mask_graphics_12,x:57,y:-80.1}).wait(1).to({graphics:mask_graphics_13,x:56.4,y:-79.2}).wait(1).to({graphics:mask_graphics_14,x:55.8,y:-78.4}).wait(1).to({graphics:mask_graphics_15,x:55.2,y:-77.5}).wait(1).to({graphics:mask_graphics_16,x:54.7,y:-76.6}).wait(1).to({graphics:mask_graphics_17,x:54.1,y:-75.7}).wait(1).to({graphics:mask_graphics_18,x:53.5,y:-74.9}).wait(1).to({graphics:mask_graphics_19,x:52.9,y:-74}).wait(1).to({graphics:mask_graphics_20,x:52.4,y:-73.1}).wait(1).to({graphics:mask_graphics_21,x:51.8,y:-72.2}).wait(1).to({graphics:mask_graphics_22,x:51.2,y:-71.4}).wait(1).to({graphics:mask_graphics_23,x:50.6,y:-70.5}).wait(1).to({graphics:mask_graphics_24,x:50.1,y:-69.6}).wait(1).to({graphics:mask_graphics_25,x:49.5,y:-68.7}).wait(1).to({graphics:mask_graphics_26,x:48.9,y:-67.9}).wait(1).to({graphics:mask_graphics_27,x:48.4,y:-67}).wait(1).to({graphics:mask_graphics_28,x:47.8,y:-66.1}).wait(1).to({graphics:mask_graphics_29,x:47.2,y:-65.3}).wait(1).to({graphics:mask_graphics_30,x:46.6,y:-64.4}).wait(1).to({graphics:mask_graphics_31,x:46.1,y:-63.5}).wait(1).to({graphics:mask_graphics_32,x:45.5,y:-62.6}).wait(1).to({graphics:mask_graphics_33,x:44.9,y:-61.8}).wait(1).to({graphics:mask_graphics_34,x:44.3,y:-60.9}).wait(1).to({graphics:mask_graphics_35,x:43.7,y:-60}).wait(1).to({graphics:mask_graphics_36,x:43.2,y:-59.1}).wait(1).to({graphics:mask_graphics_37,x:42.6,y:-58.3}).wait(1).to({graphics:mask_graphics_38,x:42,y:-57.4}).wait(1).to({graphics:mask_graphics_39,x:41.4,y:-56.5}).wait(1).to({graphics:mask_graphics_40,x:40.9,y:-55.7}).wait(1).to({graphics:mask_graphics_41,x:40.3,y:-54.8}).wait(1).to({graphics:mask_graphics_42,x:39.7,y:-53.9}).wait(1).to({graphics:mask_graphics_43,x:39.1,y:-53}).wait(1).to({graphics:mask_graphics_44,x:38.6,y:-52.2}).wait(1).to({graphics:mask_graphics_45,x:38,y:-51.3}).wait(1).to({graphics:mask_graphics_46,x:37.4,y:-50.4}).wait(1).to({graphics:mask_graphics_47,x:36.8,y:-49.6}).wait(1).to({graphics:mask_graphics_48,x:36.3,y:-48.7}).wait(1).to({graphics:mask_graphics_49,x:35.7,y:-47.8}).wait(1).to({graphics:mask_graphics_50,x:35.1,y:-46.9}).wait(1).to({graphics:mask_graphics_51,x:34.5,y:-46.1}).wait(1).to({graphics:mask_graphics_52,x:34,y:-45.2}).wait(1).to({graphics:mask_graphics_53,x:33.4,y:-44.3}).wait(1).to({graphics:mask_graphics_54,x:32.8,y:-43.4}).wait(1).to({graphics:mask_graphics_55,x:32.2,y:-42.6}).wait(1).to({graphics:mask_graphics_56,x:31.6,y:-41.7}).wait(1).to({graphics:mask_graphics_57,x:31.1,y:-40.8}).wait(1).to({graphics:mask_graphics_58,x:30.5,y:-39.9}).wait(1).to({graphics:mask_graphics_59,x:29.9,y:-39.1}).wait(1).to({graphics:mask_graphics_60,x:29.3,y:-38.2}).wait(1).to({graphics:mask_graphics_61,x:28.8,y:-37.3}).wait(1).to({graphics:mask_graphics_62,x:28.2,y:-36.5}).wait(1).to({graphics:mask_graphics_63,x:27.6,y:-35.6}).wait(1).to({graphics:mask_graphics_64,x:27,y:-34.7}).wait(1).to({graphics:mask_graphics_65,x:26.5,y:-33.8}).wait(1).to({graphics:mask_graphics_66,x:25.9,y:-33}).wait(1).to({graphics:mask_graphics_67,x:25.3,y:-32.1}).wait(1).to({graphics:mask_graphics_68,x:24.7,y:-31.2}).wait(1).to({graphics:mask_graphics_69,x:24.2,y:-30.4}).wait(1).to({graphics:mask_graphics_70,x:23.6,y:-29.5}).wait(1).to({graphics:mask_graphics_71,x:23,y:-28.6}).wait(1).to({graphics:mask_graphics_72,x:22.4,y:-27.7}).wait(1).to({graphics:mask_graphics_73,x:21.8,y:-26.9}).wait(1).to({graphics:mask_graphics_74,x:21.3,y:-26}).wait(1).to({graphics:mask_graphics_75,x:20.7,y:-25.1}).wait(1).to({graphics:mask_graphics_76,x:20.1,y:-24.2}).wait(1).to({graphics:mask_graphics_77,x:19.5,y:-23.4}).wait(1).to({graphics:mask_graphics_78,x:19,y:-22.5}).wait(1).to({graphics:mask_graphics_79,x:18.4,y:-21.6}).wait(1).to({graphics:mask_graphics_80,x:17.8,y:-20.8}).wait(1).to({graphics:mask_graphics_81,x:17.3,y:-19.9}).wait(1).to({graphics:mask_graphics_82,x:16.7,y:-19}).wait(1).to({graphics:mask_graphics_83,x:16.1,y:-18.1}).wait(1).to({graphics:mask_graphics_84,x:15.5,y:-17.3}).wait(1).to({graphics:mask_graphics_85,x:15,y:-16.4}).wait(1).to({graphics:mask_graphics_86,x:14.4,y:-15.5}).wait(1).to({graphics:mask_graphics_87,x:13.8,y:-14.6}).wait(1).to({graphics:mask_graphics_88,x:13.2,y:-13.8}).wait(1).to({graphics:mask_graphics_89,x:12.7,y:-12.9}).wait(1).to({graphics:mask_graphics_90,x:12.1,y:-12}).wait(1).to({graphics:mask_graphics_91,x:11.5,y:-11.1}).wait(1).to({graphics:mask_graphics_92,x:10.9,y:-10.3}).wait(1).to({graphics:mask_graphics_93,x:10.4,y:-9.4}).wait(1).to({graphics:mask_graphics_94,x:9.8,y:-8.5}).wait(1).to({graphics:mask_graphics_95,x:9.2,y:-7.7}).wait(1).to({graphics:mask_graphics_96,x:8.6,y:-6.8}).wait(1).to({graphics:mask_graphics_97,x:8,y:-5.9}).wait(1).to({graphics:mask_graphics_98,x:7.5,y:-5.1}).wait(1).to({graphics:mask_graphics_99,x:6.9,y:-4.2}).wait(1).to({graphics:mask_graphics_100,x:6.3,y:-3.3}).wait(1).to({graphics:mask_graphics_101,x:5.7,y:-2.4}).wait(1).to({graphics:mask_graphics_102,x:5.2,y:-1.6}).wait(1).to({graphics:mask_graphics_103,x:4.6,y:-0.7}).wait(1).to({graphics:mask_graphics_104,x:4,y:0.2}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AJOuNQlRPPtKNM");

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(105));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(48.5,-97,21.5,19.3);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-3.2,3.4,1,1,-123.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-137.7,x:37.4,y:-29.1},44).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AhWgxIA+gvIBvCSIg+Avg");
	var mask_graphics_1 = new cjs.Graphics().p("AhbguIBIg2IBvCSIhIA3g");
	var mask_graphics_2 = new cjs.Graphics().p("AhfgqIBRg9IBuCSIhRA+g");
	var mask_graphics_3 = new cjs.Graphics().p("AhkgmIBbhFIBuCSIhbBFg");
	var mask_graphics_4 = new cjs.Graphics().p("AhpgjIBkhMIBvCTIhkBMg");
	var mask_graphics_5 = new cjs.Graphics().p("AhugfIBuhTIBvCSIhuBTg");
	var mask_graphics_6 = new cjs.Graphics().p("AhzgcIB3haIBwCTIh3Bag");
	var mask_graphics_7 = new cjs.Graphics().p("Ah3gYICAhiIBvCTIiABig");
	var mask_graphics_8 = new cjs.Graphics().p("Ah9gUICLhqIBwCTIiLBpg");
	var mask_graphics_9 = new cjs.Graphics().p("AiCgQICVhxIBvCSIiTBxg");
	var mask_graphics_10 = new cjs.Graphics().p("AiGgNICdh4IBwCTIidB4g");
	var mask_graphics_11 = new cjs.Graphics().p("AiLgJICnh/IBwCSIinB/g");
	var mask_graphics_12 = new cjs.Graphics().p("AiQgFICxiHIBwCSIixCHg");
	var mask_graphics_13 = new cjs.Graphics().p("AiVgCIC7iNIBwCSIi7COg");
	var mask_graphics_14 = new cjs.Graphics().p("AiaABIDEiUIBwCTIjDCUg");
	var mask_graphics_15 = new cjs.Graphics().p("AieAFIDNicIBwCUIjNCbg");
	var mask_graphics_16 = new cjs.Graphics().p("AijAIIDXijIBwCUIjXCjg");
	var mask_graphics_17 = new cjs.Graphics().p("AioAMIDhiqIBwCTIjhCqg");
	var mask_graphics_18 = new cjs.Graphics().p("AitAQIDriyIBwCTIjrCyg");
	var mask_graphics_19 = new cjs.Graphics().p("AiyATID0i5IBxCUIj0C4g");
	var mask_graphics_20 = new cjs.Graphics().p("Ai2AXID9jAIBwCTIj9DAg");
	var mask_graphics_21 = new cjs.Graphics().p("Ai7AaIEHjHIBwCUIkHDHg");
	var mask_graphics_22 = new cjs.Graphics().p("AjAAeIERjOIBwCTIkRDOg");
	var mask_graphics_23 = new cjs.Graphics().p("AjFAiIEbjWIBwCTIkbDWg");
	var mask_graphics_24 = new cjs.Graphics().p("AjKAlIEljdIBwCUIklDdg");
	var mask_graphics_25 = new cjs.Graphics().p("AjOApIEtjlIBxCUIkvDkg");
	var mask_graphics_26 = new cjs.Graphics().p("AjTAtIE3jsIBwCUIk3Drg");
	var mask_graphics_27 = new cjs.Graphics().p("AjYAwIFBjzIBwCUIlBDzg");
	var mask_graphics_28 = new cjs.Graphics().p("AjdA0IFLj6IBwCTIlLD6g");
	var mask_graphics_29 = new cjs.Graphics().p("AjiA4IFVkCIBwCTIlVECg");
	var mask_graphics_30 = new cjs.Graphics().p("AjmA7IFekJIBvCUIleEJg");
	var mask_graphics_31 = new cjs.Graphics().p("AjrA/IFnkQIBwCTIlnERg");
	var mask_graphics_32 = new cjs.Graphics().p("AjwBDIFxkYIBwCTIlxEYg");
	var mask_graphics_33 = new cjs.Graphics().p("Aj1BGIF7kfIBwCUIl7Efg");
	var mask_graphics_34 = new cjs.Graphics().p("Aj6BKIGFkmIBwCTImFEmg");
	var mask_graphics_35 = new cjs.Graphics().p("Aj+BNIGOktIBvCUImOEtg");
	var mask_graphics_36 = new cjs.Graphics().p("AkDBRIGXk1IBwCUImXE0g");
	var mask_graphics_37 = new cjs.Graphics().p("AkJBVIGjk8IBvCTImiE8g");
	var mask_graphics_38 = new cjs.Graphics().p("AkNBYIGrlDIBwCUImrFDg");
	var mask_graphics_39 = new cjs.Graphics().p("AkSBcIG1lKIBwCTIm1FKg");
	var mask_graphics_40 = new cjs.Graphics().p("AkXBgIG/lSIBwCTIm/FSg");
	var mask_graphics_41 = new cjs.Graphics().p("AkcBjIHJlZIBvCUInIFZg");
	var mask_graphics_42 = new cjs.Graphics().p("AkhBnIHTlgIBvCTInSFhg");
	var mask_graphics_43 = new cjs.Graphics().p("AklBrIHbloIBwCTInbFog");
	var mask_graphics_44 = new cjs.Graphics().p("AkqBuIHllvIBwCUInlFvg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-2.8,y:2.3}).wait(1).to({graphics:mask_graphics_1,x:-2.4,y:2}).wait(1).to({graphics:mask_graphics_2,x:-1.9,y:1.6}).wait(1).to({graphics:mask_graphics_3,x:-1.4,y:1.2}).wait(1).to({graphics:mask_graphics_4,x:-0.9,y:0.8}).wait(1).to({graphics:mask_graphics_5,x:-0.4,y:0.5}).wait(1).to({graphics:mask_graphics_6,x:0,y:0.1}).wait(1).to({graphics:mask_graphics_7,x:0.5,y:-0.3}).wait(1).to({graphics:mask_graphics_8,x:1,y:-0.6}).wait(1).to({graphics:mask_graphics_9,x:1.5,y:-1}).wait(1).to({graphics:mask_graphics_10,x:1.9,y:-1.4}).wait(1).to({graphics:mask_graphics_11,x:2.4,y:-1.7}).wait(1).to({graphics:mask_graphics_12,x:2.9,y:-2.1}).wait(1).to({graphics:mask_graphics_13,x:3.4,y:-2.5}).wait(1).to({graphics:mask_graphics_14,x:3.9,y:-2.9}).wait(1).to({graphics:mask_graphics_15,x:4.3,y:-3.2}).wait(1).to({graphics:mask_graphics_16,x:4.8,y:-3.6}).wait(1).to({graphics:mask_graphics_17,x:5.3,y:-4}).wait(1).to({graphics:mask_graphics_18,x:5.8,y:-4.3}).wait(1).to({graphics:mask_graphics_19,x:6.3,y:-4.7}).wait(1).to({graphics:mask_graphics_20,x:6.7,y:-5.1}).wait(1).to({graphics:mask_graphics_21,x:7.2,y:-5.5}).wait(1).to({graphics:mask_graphics_22,x:7.7,y:-5.8}).wait(1).to({graphics:mask_graphics_23,x:8.2,y:-6.2}).wait(1).to({graphics:mask_graphics_24,x:8.6,y:-6.6}).wait(1).to({graphics:mask_graphics_25,x:9.1,y:-6.9}).wait(1).to({graphics:mask_graphics_26,x:9.6,y:-7.3}).wait(1).to({graphics:mask_graphics_27,x:10.1,y:-7.7}).wait(1).to({graphics:mask_graphics_28,x:10.6,y:-8.1}).wait(1).to({graphics:mask_graphics_29,x:11,y:-8.4}).wait(1).to({graphics:mask_graphics_30,x:11.5,y:-8.8}).wait(1).to({graphics:mask_graphics_31,x:12,y:-9.2}).wait(1).to({graphics:mask_graphics_32,x:12.5,y:-9.5}).wait(1).to({graphics:mask_graphics_33,x:13,y:-9.9}).wait(1).to({graphics:mask_graphics_34,x:13.4,y:-10.3}).wait(1).to({graphics:mask_graphics_35,x:13.9,y:-10.7}).wait(1).to({graphics:mask_graphics_36,x:14.4,y:-11}).wait(1).to({graphics:mask_graphics_37,x:14.9,y:-11.4}).wait(1).to({graphics:mask_graphics_38,x:15.3,y:-11.8}).wait(1).to({graphics:mask_graphics_39,x:15.8,y:-12.1}).wait(1).to({graphics:mask_graphics_40,x:16.3,y:-12.5}).wait(1).to({graphics:mask_graphics_41,x:16.8,y:-12.9}).wait(1).to({graphics:mask_graphics_42,x:17.3,y:-13.3}).wait(1).to({graphics:mask_graphics_43,x:17.7,y:-13.6}).wait(1).to({graphics:mask_graphics_44,x:18.2,y:-14}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AioDMQAYg0AfgxQAggwAlgvQAmgvAlgpQAngoAbgbQAcgaAsge");
	this.shape.setTransform(17.5,-13.7,1,1,-167.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-7.4,17.5,21.6);


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
(lib.WS_Cursive_I = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_589 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(589).call(this.frame_589).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(351.9,419,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[351.9,419,338.6,394.8,329,362.2,315.1,315,322.4,270,329.8,225,352,183.8,374.2,142.6,415.3,130.2]}},150).wait(16).to({startPosition:0},0).to({guide:{path:[415.3,130.2,427.9,128.7,435.8,132.2,443.8,135.8,447.6,158.9,451.4,182,429,224.7,406.6,267.5,374.6,305.1,342.7,342.7,303.5,371.1,264.2,399.4,219.8,405.6,164.8,407.6,135.1,365.5,105.5,323.7,98.2,277]}},199).wait(15).to({startPosition:0},0).to({guide:{path:[97.9,277.1,148.1,347.2,240.9,315.3]}},119).wait(16).to({startPosition:0},0).to({guide:{path:[241.2,315.3,261.5,279.4,275,266,291,250,312.1,250,345.2,250,377.4,267.8,397.6,279,431,307,449.1,322.3,456.4,328,470.7,339,482.6,346.2,512.6,364,542,364,573.2,364,603.4,342.3,633.4,320.5,637.9,314.5]}},65).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(418.2,129.9,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},150).wait(16).to({_off:false,x:99.2,y:274.9},0).to({_off:true},199).wait(15).to({_off:false,x:242.2,y:314.9},0).to({_off:true},119).wait(82));

	// Layer 11
	this.instance_1 = new lib.ar4("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(177.4,210.4,1,1,-14);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(389).to({_off:false},0).wait(201));

	// Layer 8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_389 = new cjs.Graphics().p("AhNWPIHXtmIDyCEInYNlg");
	var mask_graphics_390 = new cjs.Graphics().p("AlrFtIHXtkIEACLInXNkg");
	var mask_graphics_391 = new cjs.Graphics().p("AlyFqIHXtlIEOCTInYNkg");
	var mask_graphics_392 = new cjs.Graphics().p("Al5FmIHYtkIEbCZInYNkg");
	var mask_graphics_393 = new cjs.Graphics().p("AmAFiIHYtkIEpChInZNkg");
	var mask_graphics_394 = new cjs.Graphics().p("AmGFeIHXtkIE3CpInZNkg");
	var mask_graphics_395 = new cjs.Graphics().p("AmNFbIHXtkIFECvInYNlg");
	var mask_graphics_396 = new cjs.Graphics().p("AmUFXIHYtkIFRC3InYNkg");
	var mask_graphics_397 = new cjs.Graphics().p("AmbFTIHYtkIFfC/InYNkg");
	var mask_graphics_398 = new cjs.Graphics().p("AmiFQIHYtkIFtDGInZNjg");
	var mask_graphics_399 = new cjs.Graphics().p("AmpFMIHYtkIF7DNInZNkg");
	var mask_graphics_400 = new cjs.Graphics().p("AmvFIIHXtkIGJDVInaNkg");
	var mask_graphics_401 = new cjs.Graphics().p("Am2FFIHXtlIGWDdInYNkg");
	var mask_graphics_402 = new cjs.Graphics().p("Am9FBIHYtkIGjDkInYNjg");
	var mask_graphics_403 = new cjs.Graphics().p("AnEE9IHXtkIGyDsInZNjg");
	var mask_graphics_404 = new cjs.Graphics().p("AnLE5IHYtkIG/DzInZNkg");
	var mask_graphics_405 = new cjs.Graphics().p("AnSE2IHYtlIHND7InaNkg");
	var mask_graphics_406 = new cjs.Graphics().p("AnYEyIHYtkIHaECInaNjg");
	var mask_graphics_407 = new cjs.Graphics().p("AnfEuIHYtkIHnEJInaNkg");
	var mask_graphics_408 = new cjs.Graphics().p("AnmErIHYtlIH1ERInaNkg");
	var mask_graphics_409 = new cjs.Graphics().p("AntEnIHYtkIIDEYInaNjg");
	var mask_graphics_410 = new cjs.Graphics().p("An0EjIHZtkIIQEgInbNjg");
	var mask_graphics_411 = new cjs.Graphics().p("An7EgIHZtlIIeEnInbNkg");
	var mask_graphics_412 = new cjs.Graphics().p("AoCEcIHZtkIIsEuIncNkg");
	var mask_graphics_413 = new cjs.Graphics().p("AoJEYIHZtkII5E2InbNjg");
	var mask_graphics_414 = new cjs.Graphics().p("AoPEVIHYtlIJHE+InbNjg");
	var mask_graphics_415 = new cjs.Graphics().p("AoWERIHYtkIJVFFInbNig");
	var mask_graphics_416 = new cjs.Graphics().p("AodENIHZtkIJiFMInbNjg");
	var mask_graphics_417 = new cjs.Graphics().p("AokEKIHZtlIJwFUIncNjg");
	var mask_graphics_418 = new cjs.Graphics().p("AoqEGIHYtkIJ9FaInbNkg");
	var mask_graphics_419 = new cjs.Graphics().p("AoxECIHYtkIKLFiInbNjg");
	var mask_graphics_420 = new cjs.Graphics().p("Ao4D/IHYtlIKZFqInbNjg");
	var mask_graphics_421 = new cjs.Graphics().p("Ao/D7IHZtkIKmFxIncNig");
	var mask_graphics_422 = new cjs.Graphics().p("ApGD3IHYtkIK1F4IncNjg");
	var mask_graphics_423 = new cjs.Graphics().p("ApND0IHZtlILCGAIncNjg");
	var mask_graphics_424 = new cjs.Graphics().p("ApUDwIHZtkILQGHIncNjg");
	var mask_graphics_425 = new cjs.Graphics().p("ApaDsIHYtkILeGPIndNig");
	var mask_graphics_426 = new cjs.Graphics().p("AphDpIHYtlILrGWIncNjg");
	var mask_graphics_427 = new cjs.Graphics().p("ApoDlIHZtkIL4GeIncNhg");
	var mask_graphics_428 = new cjs.Graphics().p("ApvDhIHZtkIMGGlIncNig");
	var mask_graphics_429 = new cjs.Graphics().p("Ap2DeIHZtlIMUGtIndNig");
	var mask_graphics_430 = new cjs.Graphics().p("Ap9DaIHZtlIMiG0IndNjg");
	var mask_graphics_431 = new cjs.Graphics().p("AqDDWIHYtkIMwG8IndNhg");
	var mask_graphics_432 = new cjs.Graphics().p("AqKDSIHYtkIM9HDIncNig");
	var mask_graphics_433 = new cjs.Graphics().p("AqRDOIHYtkINLHLIndNig");
	var mask_graphics_434 = new cjs.Graphics().p("AqYDLIHYtkINZHRIndNjg");
	var mask_graphics_435 = new cjs.Graphics().p("AqfDHIHZtkINmHZIndNig");
	var mask_graphics_436 = new cjs.Graphics().p("AqmDDIHZtkIN0HhIndNig");
	var mask_graphics_437 = new cjs.Graphics().p("AqsDAIHYtlIOCHpIneNig");
	var mask_graphics_438 = new cjs.Graphics().p("AqzC8IHYtkIOPHwIndNhg");
	var mask_graphics_439 = new cjs.Graphics().p("Aq6C4IHYtkIOdH3IndNig");
	var mask_graphics_440 = new cjs.Graphics().p("ArBC1IHZtlIOqH/IneNig");
	var mask_graphics_441 = new cjs.Graphics().p("ArICxIHZtkIO4IGIneNhg");
	var mask_graphics_442 = new cjs.Graphics().p("ArPCtIHZtkIPGINIneNig");
	var mask_graphics_443 = new cjs.Graphics().p("ArWCqIHZtlIPUIVIneNig");
	var mask_graphics_444 = new cjs.Graphics().p("ArdCmIHZtkIPhIcIndNhg");
	var mask_graphics_445 = new cjs.Graphics().p("ArjCiIHYtkIPvIkIneNhg");
	var mask_graphics_446 = new cjs.Graphics().p("ArqCfIHZtlIP8IrIneNig");
	var mask_graphics_447 = new cjs.Graphics().p("ArxCbIHZtkIQKIyIneNig");
	var mask_graphics_448 = new cjs.Graphics().p("Ar4CXIHZtkIQYI6IneNhg");
	var mask_graphics_449 = new cjs.Graphics().p("Ar/CUIHZtlIQlJCIndNhg");
	var mask_graphics_450 = new cjs.Graphics().p("AsFCQIHYtkIQzJJIneNgg");
	var mask_graphics_451 = new cjs.Graphics().p("AsMCMIHYtkIRBJQIneNhg");
	var mask_graphics_452 = new cjs.Graphics().p("AsTCJIHZtlIROJYIneNhg");
	var mask_graphics_453 = new cjs.Graphics().p("AsaCFIHYtkIRdJeInfNig");
	var mask_graphics_454 = new cjs.Graphics().p("AshCBIHZtkIRqJmInfNhg");
	var mask_graphics_455 = new cjs.Graphics().p("AsoB+IHZtlIR4JuInfNhg");
	var mask_graphics_456 = new cjs.Graphics().p("AsuB6IHYtkISGJ1InfNhg");
	var mask_graphics_457 = new cjs.Graphics().p("As1B2IHYtkISTJ8InfNhg");
	var mask_graphics_458 = new cjs.Graphics().p("As8BzIHZtlISgKEInfNhg");
	var mask_graphics_459 = new cjs.Graphics().p("AtDBvIHZtlISuKMInfNhg");
	var mask_graphics_460 = new cjs.Graphics().p("AtKBrIHZtkIS8KTInfNgg");
	var mask_graphics_461 = new cjs.Graphics().p("AtRBnIHZtkITKKbIngNgg");
	var mask_graphics_462 = new cjs.Graphics().p("AtYBjIHZtkITYKiIngNhg");
	var mask_graphics_463 = new cjs.Graphics().p("AteBgIHYtkITlKpInfNhg");
	var mask_graphics_464 = new cjs.Graphics().p("AtlBcIHYtkITzKxInfNgg");
	var mask_graphics_465 = new cjs.Graphics().p("AtsBYIHZtkIUAK4IngNhg");
	var mask_graphics_466 = new cjs.Graphics().p("AtzBVIHZtkIUOLAIngNfg");
	var mask_graphics_467 = new cjs.Graphics().p("At5BRIHYtkIUcLHIngNgg");
	var mask_graphics_468 = new cjs.Graphics().p("AuABNIHYtkIUqLPIngNgg");
	var mask_graphics_469 = new cjs.Graphics().p("AuHBKIHYtlIU3LWIngNhg");
	var mask_graphics_470 = new cjs.Graphics().p("AuOBGIHYtkIVFLdIngNgg");
	var mask_graphics_471 = new cjs.Graphics().p("AuVBCIHZtkIVSLlIngNgg");
	var mask_graphics_472 = new cjs.Graphics().p("AucA/IHZtlIVgLtIngNgg");
	var mask_graphics_473 = new cjs.Graphics().p("AuiA7IHYtlIVuL1InhNfg");
	var mask_graphics_474 = new cjs.Graphics().p("AuqA3IHZtkIV8L7InhNgg");
	var mask_graphics_475 = new cjs.Graphics().p("AuwA0IHYtlIWJMDIngNgg");
	var mask_graphics_476 = new cjs.Graphics().p("Au3AwIHYtkIWXMJIngNhg");
	var mask_graphics_477 = new cjs.Graphics().p("Au+AsIHZtkIWkMRIngNgg");
	var mask_graphics_478 = new cjs.Graphics().p("AvFApIHZtlIWyMZInhNgg");
	var mask_graphics_479 = new cjs.Graphics().p("AvMAlIHZtlIXAMhInhNgg");
	var mask_graphics_480 = new cjs.Graphics().p("AvSAhIHYtkIXOMnIniNgg");
	var mask_graphics_481 = new cjs.Graphics().p("AvZAeIHYtlIXbMvInhNgg");
	var mask_graphics_482 = new cjs.Graphics().p("AvgAaIHYtlIXpM3InhNfg");
	var mask_graphics_483 = new cjs.Graphics().p("AvnAWIHYtkIX3M+InhNfg");
	var mask_graphics_484 = new cjs.Graphics().p("AvuATIHYtlIYFNGInhNfg");
	var mask_graphics_485 = new cjs.Graphics().p("Av1APIHZtlIYSNOIniNfg");
	var mask_graphics_486 = new cjs.Graphics().p("Av8ALIHZtkIYgNUIniNfg");
	var mask_graphics_487 = new cjs.Graphics().p("AwCAHIHYtkIYuNcInjNfg");
	var mask_graphics_488 = new cjs.Graphics().p("AwJAEIHYtlIY7NjIniNgg");
	var mask_graphics_489 = new cjs.Graphics().p("AwQAAIHZtkIZINpInhNgg");
	var mask_graphics_490 = new cjs.Graphics().p("AwXgDIHZtlIZWNxIniNgg");
	var mask_graphics_491 = new cjs.Graphics().p("AwegGIHZtmIZkN5IniNgg");
	var mask_graphics_492 = new cjs.Graphics().p("AwkgKIHYtlIZyN/InjNgg");
	var mask_graphics_493 = new cjs.Graphics().p("AwsgOIHZtlIaAOHInjNgg");
	var mask_graphics_494 = new cjs.Graphics().p("AwygRIHYtmIaNOPIniNgg");
	var mask_graphics_495 = new cjs.Graphics().p("Aw5gVIHYtlIabOWIniNgg");
	var mask_graphics_496 = new cjs.Graphics().p("AxAgZIHZtlIaoOeIniNfg");
	var mask_graphics_497 = new cjs.Graphics().p("AxHgcIHZtmIa2OmInjNfg");
	var mask_graphics_498 = new cjs.Graphics().p("AxNggIHYtmIbEOtInjNgg");
	var mask_graphics_499 = new cjs.Graphics().p("AxUgkIHYtlIbRO0InjNfg");
	var mask_graphics_500 = new cjs.Graphics().p("AxbgnIHYtmIbfO7InjNgg");
	var mask_graphics_501 = new cjs.Graphics().p("AxoguIHZtmIb4PJIniNgg");
	var mask_graphics_502 = new cjs.Graphics().p("Ax0g2IHZtlIcQPWInhNhg");
	var mask_graphics_503 = new cjs.Graphics().p("AyBg9IHZtlIcqPkIngNhg");
	var mask_graphics_504 = new cjs.Graphics().p("AyNhEIHZtlIdCPxIneNig");
	var mask_graphics_505 = new cjs.Graphics().p("AyZhLIHYtmIdbP/IncNjg");
	var mask_graphics_506 = new cjs.Graphics().p("AymhSIHZtmId0QNInbNjg");
	var mask_graphics_507 = new cjs.Graphics().p("AyyhZIHYtmIeNQaInaNlg");
	var mask_graphics_508 = new cjs.Graphics().p("AxNNiIHYtkIemQnInYNlg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(389).to({graphics:mask_graphics_389,x:63.6,y:155.4}).wait(1).to({graphics:mask_graphics_390,x:92,y:261}).wait(1).to({graphics:mask_graphics_391,x:92.4,y:261.2}).wait(1).to({graphics:mask_graphics_392,x:92.8,y:261.5}).wait(1).to({graphics:mask_graphics_393,x:93.2,y:261.7}).wait(1).to({graphics:mask_graphics_394,x:93.6,y:261.9}).wait(1).to({graphics:mask_graphics_395,x:94,y:262.1}).wait(1).to({graphics:mask_graphics_396,x:94.4,y:262.3}).wait(1).to({graphics:mask_graphics_397,x:94.8,y:262.6}).wait(1).to({graphics:mask_graphics_398,x:95.2,y:262.8}).wait(1).to({graphics:mask_graphics_399,x:95.6,y:263}).wait(1).to({graphics:mask_graphics_400,x:96.1,y:263.2}).wait(1).to({graphics:mask_graphics_401,x:96.4,y:263.4}).wait(1).to({graphics:mask_graphics_402,x:96.9,y:263.6}).wait(1).to({graphics:mask_graphics_403,x:97.3,y:263.8}).wait(1).to({graphics:mask_graphics_404,x:97.7,y:264.1}).wait(1).to({graphics:mask_graphics_405,x:98.1,y:264.3}).wait(1).to({graphics:mask_graphics_406,x:98.5,y:264.5}).wait(1).to({graphics:mask_graphics_407,x:98.9,y:264.7}).wait(1).to({graphics:mask_graphics_408,x:99.3,y:264.9}).wait(1).to({graphics:mask_graphics_409,x:99.7,y:265.1}).wait(1).to({graphics:mask_graphics_410,x:100.1,y:265.4}).wait(1).to({graphics:mask_graphics_411,x:100.5,y:265.6}).wait(1).to({graphics:mask_graphics_412,x:100.9,y:265.8}).wait(1).to({graphics:mask_graphics_413,x:101.3,y:266}).wait(1).to({graphics:mask_graphics_414,x:101.7,y:266.2}).wait(1).to({graphics:mask_graphics_415,x:102.1,y:266.5}).wait(1).to({graphics:mask_graphics_416,x:102.5,y:266.7}).wait(1).to({graphics:mask_graphics_417,x:102.9,y:266.9}).wait(1).to({graphics:mask_graphics_418,x:103.3,y:267.1}).wait(1).to({graphics:mask_graphics_419,x:103.7,y:267.3}).wait(1).to({graphics:mask_graphics_420,x:104.1,y:267.5}).wait(1).to({graphics:mask_graphics_421,x:104.6,y:267.8}).wait(1).to({graphics:mask_graphics_422,x:105,y:268}).wait(1).to({graphics:mask_graphics_423,x:105.3,y:268.2}).wait(1).to({graphics:mask_graphics_424,x:105.8,y:268.4}).wait(1).to({graphics:mask_graphics_425,x:106.2,y:268.6}).wait(1).to({graphics:mask_graphics_426,x:106.6,y:268.9}).wait(1).to({graphics:mask_graphics_427,x:107,y:269.1}).wait(1).to({graphics:mask_graphics_428,x:107.4,y:269.3}).wait(1).to({graphics:mask_graphics_429,x:107.8,y:269.5}).wait(1).to({graphics:mask_graphics_430,x:108.2,y:269.7}).wait(1).to({graphics:mask_graphics_431,x:108.6,y:269.9}).wait(1).to({graphics:mask_graphics_432,x:109,y:270.1}).wait(1).to({graphics:mask_graphics_433,x:109.4,y:270.4}).wait(1).to({graphics:mask_graphics_434,x:109.8,y:270.6}).wait(1).to({graphics:mask_graphics_435,x:110.2,y:270.8}).wait(1).to({graphics:mask_graphics_436,x:110.6,y:271}).wait(1).to({graphics:mask_graphics_437,x:111,y:271.2}).wait(1).to({graphics:mask_graphics_438,x:111.4,y:271.4}).wait(1).to({graphics:mask_graphics_439,x:111.8,y:271.7}).wait(1).to({graphics:mask_graphics_440,x:112.3,y:271.9}).wait(1).to({graphics:mask_graphics_441,x:112.6,y:272.1}).wait(1).to({graphics:mask_graphics_442,x:113,y:272.3}).wait(1).to({graphics:mask_graphics_443,x:113.5,y:272.5}).wait(1).to({graphics:mask_graphics_444,x:113.9,y:272.8}).wait(1).to({graphics:mask_graphics_445,x:114.3,y:273}).wait(1).to({graphics:mask_graphics_446,x:114.7,y:273.2}).wait(1).to({graphics:mask_graphics_447,x:115.1,y:273.4}).wait(1).to({graphics:mask_graphics_448,x:115.5,y:273.6}).wait(1).to({graphics:mask_graphics_449,x:115.9,y:273.8}).wait(1).to({graphics:mask_graphics_450,x:116.3,y:274.1}).wait(1).to({graphics:mask_graphics_451,x:116.7,y:274.3}).wait(1).to({graphics:mask_graphics_452,x:117.1,y:274.5}).wait(1).to({graphics:mask_graphics_453,x:117.5,y:274.7}).wait(1).to({graphics:mask_graphics_454,x:117.9,y:274.9}).wait(1).to({graphics:mask_graphics_455,x:118.3,y:275.2}).wait(1).to({graphics:mask_graphics_456,x:118.7,y:275.4}).wait(1).to({graphics:mask_graphics_457,x:119.1,y:275.6}).wait(1).to({graphics:mask_graphics_458,x:119.5,y:275.8}).wait(1).to({graphics:mask_graphics_459,x:119.9,y:276}).wait(1).to({graphics:mask_graphics_460,x:120.3,y:276.2}).wait(1).to({graphics:mask_graphics_461,x:120.7,y:276.4}).wait(1).to({graphics:mask_graphics_462,x:121.2,y:276.7}).wait(1).to({graphics:mask_graphics_463,x:121.5,y:276.9}).wait(1).to({graphics:mask_graphics_464,x:122,y:277.1}).wait(1).to({graphics:mask_graphics_465,x:122.4,y:277.3}).wait(1).to({graphics:mask_graphics_466,x:122.8,y:277.5}).wait(1).to({graphics:mask_graphics_467,x:123.2,y:277.7}).wait(1).to({graphics:mask_graphics_468,x:123.6,y:278}).wait(1).to({graphics:mask_graphics_469,x:124,y:278.2}).wait(1).to({graphics:mask_graphics_470,x:124.4,y:278.4}).wait(1).to({graphics:mask_graphics_471,x:124.8,y:278.6}).wait(1).to({graphics:mask_graphics_472,x:125.2,y:278.8}).wait(1).to({graphics:mask_graphics_473,x:125.6,y:279.1}).wait(1).to({graphics:mask_graphics_474,x:126,y:279.3}).wait(1).to({graphics:mask_graphics_475,x:126.4,y:279.5}).wait(1).to({graphics:mask_graphics_476,x:126.8,y:279.7}).wait(1).to({graphics:mask_graphics_477,x:127.2,y:279.9}).wait(1).to({graphics:mask_graphics_478,x:127.6,y:280.1}).wait(1).to({graphics:mask_graphics_479,x:128,y:280.4}).wait(1).to({graphics:mask_graphics_480,x:128.5,y:280.6}).wait(1).to({graphics:mask_graphics_481,x:128.8,y:280.8}).wait(1).to({graphics:mask_graphics_482,x:129.2,y:281}).wait(1).to({graphics:mask_graphics_483,x:129.7,y:281.2}).wait(1).to({graphics:mask_graphics_484,x:130.1,y:281.4}).wait(1).to({graphics:mask_graphics_485,x:130.5,y:281.7}).wait(1).to({graphics:mask_graphics_486,x:130.9,y:281.9}).wait(1).to({graphics:mask_graphics_487,x:131.3,y:282.1}).wait(1).to({graphics:mask_graphics_488,x:131.7,y:282.3}).wait(1).to({graphics:mask_graphics_489,x:132.1,y:282.5}).wait(1).to({graphics:mask_graphics_490,x:132.5,y:282.7}).wait(1).to({graphics:mask_graphics_491,x:132.9,y:283}).wait(1).to({graphics:mask_graphics_492,x:133.3,y:283.2}).wait(1).to({graphics:mask_graphics_493,x:133.7,y:283.4}).wait(1).to({graphics:mask_graphics_494,x:134.1,y:283.6}).wait(1).to({graphics:mask_graphics_495,x:134.5,y:283.8}).wait(1).to({graphics:mask_graphics_496,x:134.9,y:284}).wait(1).to({graphics:mask_graphics_497,x:135.3,y:284.3}).wait(1).to({graphics:mask_graphics_498,x:135.7,y:284.5}).wait(1).to({graphics:mask_graphics_499,x:136.1,y:284.7}).wait(1).to({graphics:mask_graphics_500,x:136.5,y:284.9}).wait(1).to({graphics:mask_graphics_501,x:137.5,y:285.5}).wait(1).to({graphics:mask_graphics_502,x:138.5,y:286}).wait(1).to({graphics:mask_graphics_503,x:139.4,y:286.6}).wait(1).to({graphics:mask_graphics_504,x:140.4,y:287.2}).wait(1).to({graphics:mask_graphics_505,x:141.3,y:287.7}).wait(1).to({graphics:mask_graphics_506,x:142.3,y:288.3}).wait(1).to({graphics:mask_graphics_507,x:143.3,y:288.8}).wait(1).to({graphics:mask_graphics_508,x:132.9,y:193}).wait(82));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("ArOj0QHcLGPBlB");
	this.shape_1.setTransform(169.9,300.5);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(389).to({_off:false},0).wait(201));

	// Layer 10
	this.instance_2 = new lib.ar3("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(450.8,248.9,1,1,-4.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(175).to({_off:false},0).wait(415));

	// Layer 7 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_268 = new cjs.Graphics().p("A6UGpQEqrNLNkoQLNkoLOEqQLNEqEoLNQEpLNkqLNg");
	var mask_1_graphics_269 = new cjs.Graphics().p("A6DFsQE7rFLUkXQLUkYLGE7QLHE6EWLUQEYLUk6LGg");
	var mask_1_graphics_270 = new cjs.Graphics().p("A5wEwQFLq+LakGQLbkHK+FMQK/FLEFLaQEILblMK/g");
	var mask_1_graphics_271 = new cjs.Graphics().p("A5dD0QFcq2Lgj0QLgj2K3FcQK3FcD0LgQD2LhlcK2g");
	var mask_1_graphics_272 = new cjs.Graphics().p("A5JC5QFtqtLljjQLmjkKuFsQKvFsDiLmQDlLmlsKug");
	var mask_1_graphics_273 = new cjs.Graphics().p("A4zB/QF8qlLqjRQLsjTKlF9QKmF8DRLrQDTLrl8Klg");
	var mask_1_graphics_274 = new cjs.Graphics().p("A4dBGQGMqcLvjAQLwjBKdGMQKcGNDALvQDBLwmMKcg");
	var mask_1_graphics_275 = new cjs.Graphics().p("A4GANQGcqSLziuQL1ivKTGcQKTGbCtL0QCwL0mcKTg");
	var mask_1_graphics_276 = new cjs.Graphics().p("A3ugqQGrqJL4icQL4idKJGrQKJGrCcL3QCeL5msKJg");
	var mask_1_graphics_277 = new cjs.Graphics().p("A3VhhQG6p/L7iKQL8iLJ/G6QJ/G6CJL7QCML8m6J/g");
	var mask_1_graphics_278 = new cjs.Graphics().p("A27iXQHJp0L+h5QL/h5J0HKQJ0HJB4L+QB6L/nJJ0g");
	var mask_1_graphics_279 = new cjs.Graphics().p("A2gjMQHXppMBhnQMBhnJqHYQJpHYBmMBQBnMBnYJpg");
	var mask_1_graphics_280 = new cjs.Graphics().p("A2FkAQHmpeMDhVQMEhUJeHmQJeHmBTMDQBWMEnnJeg");
	var mask_1_graphics_281 = new cjs.Graphics().p("A1pkzQH1pTMEhCQMGhCJSH0QJSH0BCMFQBDMFn0JTg");
	var mask_1_graphics_282 = new cjs.Graphics().p("A1MlmQICpGMGgwQMHgwJGICQJHICAvMGQAxMHoCJGg");
	var mask_1_graphics_283 = new cjs.Graphics().p("A0umXQIQo6MGgeQMIgeI6IQQI6IPAdMIQAfMHoPI7g");
	var mask_1_graphics_284 = new cjs.Graphics().p("A0QnHQIdotMHgMQMJgMItIdQIuIdALMIQAMMIodIug");
	var mask_1_graphics_285 = new cjs.Graphics().p("Azxn2QIrogMGAGQMJAHIhIqQIgIpgHMIQgGMIoqIhg");
	var mask_1_graphics_286 = new cjs.Graphics().p("AzRokQI3oTMGAZQMJAZITI2QIUI2gaMIQgYMIo3ITg");
	var mask_1_graphics_287 = new cjs.Graphics().p("AywpRQJDoFMFArQMIArIGJDQIGJCgtMHQgqMHpDIGg");
	var mask_1_graphics_288 = new cjs.Graphics().p("AyPp8QJPn4MDA9QMHA9H5JQQH4JOg/MFQg8MGpPH5g");
	var mask_1_graphics_289 = new cjs.Graphics().p("AxuqnQJbnqMCBQQMFBQHqJaQHrJahRMEQhPMFpaHqg");
	var mask_1_graphics_290 = new cjs.Graphics().p("AxMrQQJnncMABiQMDBiHcJmQHbJlhiMCQhhMDpmHbg");
	var mask_1_graphics_291 = new cjs.Graphics().p("Awpr4QJxnNL+B0QMBB0HNJxQHNJwh1MAQhzL/pxHOg");
	var mask_1_graphics_292 = new cjs.Graphics().p("AwFsfQJ8m+L6CGQL+CGG+J8QG/J7iHL8QiFL9p8G+g");
	var mask_1_graphics_293 = new cjs.Graphics().p("AvhtEQKGmvL3CXQL7CYGvKHQGvKFiZL5QiXL5qGGwg");
	var mask_1_graphics_294 = new cjs.Graphics().p("Au8toQKQmgLzCpQL3CqGgKRQGgKPirL1QipL2qQGgg");
	var mask_1_graphics_295 = new cjs.Graphics().p("AuXuLQKamQLvC7QLyC8GRKZQGQKZi9LxQi6LyqaGQg");
	var mask_1_graphics_296 = new cjs.Graphics().p("AtxutQKjmALqDNQLuDNGBKjQGAKijOLtQjMLtqjGAg");
	var mask_1_graphics_297 = new cjs.Graphics().p("AtLvNQKslwLmDeQLoDfFxKsQFwKrjfLnQjeLoqsFxg");
	var mask_1_graphics_298 = new cjs.Graphics().p("AskvrQK0lhLhDwQLjDxFgK0QFhKzjyLiQjvLjq0Fgg");
	var mask_1_graphics_299 = new cjs.Graphics().p("Ar9wJQK9lQLaEBQLeECFQK9QFQK7kDLcQkBLdq8FQg");
	var mask_1_graphics_300 = new cjs.Graphics().p("ArVwlQLFk/LUESQLXETE/LEQE/LEkTLVQkSLXrEE/g");
	var mask_1_graphics_301 = new cjs.Graphics().p("Aqsw/QLKkvLPEjQLQEkEvLMQEuLKkkLPQkjLQrMEvg");
	var mask_1_graphics_302 = new cjs.Graphics().p("AqDxZQLRkdLHE0QLKE1EdLSQEeLSk1LIQk0LIrTEeg");
	var mask_1_graphics_303 = new cjs.Graphics().p("ApaxwQLYkNLAFFQLCFGEMLZQENLYlGLAQlFLBrZENg");
	var mask_1_graphics_304 = new cjs.Graphics().p("AowyGQLej8K4FVQK6FXD7LeQD7LflWK4QlVK6rfD7g");
	var mask_1_graphics_305 = new cjs.Graphics().p("AoGybQLjjqKwFlQKyFnDqLkQDqLklnKxQllKxrlDqg");
	var mask_1_graphics_306 = new cjs.Graphics().p("AncyuQLpjZKnF2QKpF2DZLpQDYLrl3KnQl1KprqDYg");
	var mask_1_graphics_307 = new cjs.Graphics().p("AmxzAQLujHKeGFQKgGHDHLuQDHLvmHKfQmGKfruDHg");
	var mask_1_graphics_308 = new cjs.Graphics().p("AmGzRQLyi1KVGWQKXGWC1LyQC1L0mXKVQmVKWrzC1g");
	var mask_1_graphics_309 = new cjs.Graphics().p("AlbzfQL2ikKMGlQKNGmCjL2QCjL4mmKLQmkKNr4Cjg");
	var mask_1_graphics_310 = new cjs.Graphics().p("AkvzsQL6iSKBG0QKCG1CSL6QCRL7m1KCQm0KCr7CSg");
	var mask_1_graphics_311 = new cjs.Graphics().p("AkEz4QL9iAJ3HDQJ4HECAL+QB/L+nEJ3QnDJ4r+B/g");
	var mask_1_graphics_312 = new cjs.Graphics().p("AjN0FQMBhoJpHVQJrHWBoMBQBpMCnXJpQnVJqsCBpg");
	var mask_1_graphics_313 = new cjs.Graphics().p("AiV0PQMDhSJbHoQJcHoBSMEQBSMEnpJbQnnJcsEBSg");
	var mask_1_graphics_314 = new cjs.Graphics().p("Ahe0WQMGg7JMH5QJNH6A7MFQA7MHn6JMQn5JOsGA7g");
	var mask_1_graphics_315 = new cjs.Graphics().p("Agm0bQMHgkI9IKQI+ILAkMHQAkMIoLI9QoKI+sIAkg");
	var mask_1_graphics_316 = new cjs.Graphics().p("AAQ0eQMJgNItIbQIvIcANMHQANMJocItQobIvsIANg");
	var mask_1_graphics_317 = new cjs.Graphics().p("EAAZAmFMAAvg6jQMIAKIdIqQIfItgKMHQgKMJosIdQohIVr3AAIgbAAg");
	var mask_1_graphics_318 = new cjs.Graphics().p("EgAeAmDMACdg6gQMIAhIMI7QIOI8ggMHQghMHo8INQoZHvrQAAQgsAAgtgCg");
	var mask_1_graphics_319 = new cjs.Graphics().p("EgBVAl/MAELg6ZQMHA4H7JKQH9JLg4MGQg3MGpMH7QoQHLqpAAQhKAAhMgGg");
	var mask_1_graphics_320 = new cjs.Graphics().p("EgCMAl6MAF5g6PQMFBOHqJZQHrJahPMDQhOMFpaHpQoGGoqGAAQhmAAhqgLg");
	var mask_1_graphics_321 = new cjs.Graphics().p("EgDEAlzMAHog6CQMCBlHYJnQHZJnhmMCQhlMCpoHXQn6GGpkAAQiCAAiIgSg");
	var mask_1_graphics_322 = new cjs.Graphics().p("EgD7AlrMAJWg5yQL+B8HGJ0QHGJ1h8L+Qh8L/p2HFQnuFlpDAAQicAAilgag");
	var mask_1_graphics_323 = new cjs.Graphics().p("EgExAlhMALCg5fQL6CTGzKBQG0KCiTL6QiSL7qDGyQngFHokAAQi4AAi/glg");
	var mask_1_graphics_324 = new cjs.Graphics().p("EgFoAlVMAMvg5IQL2CpGfKOQGhKPipL1QipL2qQGfQnREpoGAAQjRAAjbgxg");
	var mask_1_graphics_325 = new cjs.Graphics().p("EgGeAlIMAObg4uQLwC/GMKaQGNKai/LxQjALwqbGMQnCEMnpAAQjqAAj1g+g");
	var mask_1_graphics_326 = new cjs.Graphics().p("EgHTAk5MAQFg4RQLqDVF4KlQF5KnjVLqQjWLqqmF4QmxDxnNAAQkEAAkNhNg");
	var mask_1_graphics_327 = new cjs.Graphics().p("EgIIAkpMARvg3xQLkDrFjKwQFlKxjrLkQjsLjqxFkQmfDXmyAAQkcAAkmhdg");
	var mask_1_graphics_328 = new cjs.Graphics().p("EgI9AkXMATYg3OQLdEBFPK6QFQK8kBLcQkBLcq8FPQmMC/mXAAQk2AAk9hvg");
	var mask_1_graphics_329 = new cjs.Graphics().p("EgJxAkDMAVAg2nQLVEXE6LEQE8LEkXLVQkXLUrFE6Ql4Col9AAQlPAAlUiDg");
	var mask_1_graphics_330 = new cjs.Graphics().p("EgKkAjvMAWng1+QLMEsElLMQEmLOksLMQksLMrOElQljCSljAAQlpAAlpiXg");
	var mask_1_graphics_331 = new cjs.Graphics().p("EgLWAjYMAYMg1RQLCFBEQLVQERLWlBLDQlBLCrWEQQlOB+lKAAQmCAAl9iug");
	var mask_1_graphics_332 = new cjs.Graphics().p("EgMIAjBMAZwg0iQK5FVD6LdQD8LelWK5QlWK5reD6Qk3BqkxABQmcAAmRjFg");
	var mask_1_graphics_333 = new cjs.Graphics().p("EgM5AioMAbSgzwQKvFqDlLjQDlLmlqKuQlqKvrlDkQkgBZkYAAQm2AAmkjdg");
	var mask_1_graphics_334 = new cjs.Graphics().p("EgNpAiNMAczgy6QKkF+DPLpQDPLtl+KjQl+KjrsDOQkHBKj/AAQnSAAm1j4g");
	var mask_1_graphics_335 = new cjs.Graphics().p("EgOYAhyMAeSgyDQKYGSC5LvQC5LymSKYQmSKYrxC4QjuA6jlAAQnvAAnFkSg");
	var mask_1_graphics_336 = new cjs.Graphics().p("EgPHAhVMAfxgxIQKLGlCjL0QCjL4mmKLQmlKMr2ChQjUAujMAAQoMAAnVkvg");
	var mask_1_graphics_337 = new cjs.Graphics().p("EgP0Ag2MAhMgwKQJ/G5CML4QCML8m4J+Qm5J/r6CLQi5AjiyAAQoqAAnjlOg");
	var mask_1_graphics_338 = new cjs.Graphics().p("EgQhAgWMAingvJQJxHLB2L8QB1L/nLJyQnLJxr+B1QieAYiXAAQpJAAnxltg");
	var mask_1_graphics_339 = new cjs.Graphics().p("AxMf1MAj+guHQJkHeBfL/QBfMDneJjQndJksCBeQiAAQh9AAQppAAn9mOg");
	var mask_1_graphics_340 = new cjs.Graphics().p("Ax3fTMAlVgtBQJVHvBIMBQBIMFnvJWQnvJVsEBHQhjAJhhAAQqMAAoImvg");
	var mask_1_graphics_341 = new cjs.Graphics().p("AyhevMAmpgr5QJGIAAyMEQAxMHoBJGQoAJGsGAwQhFAFhEAAQqvAAoTnTg");
	var mask_1_graphics_342 = new cjs.Graphics().p("AzJeKMAn6gqvQI3ISAbMEQAaMIoRI3QoSI3sHAZIhLABQrWAAobn3g");
	var mask_1_graphics_343 = new cjs.Graphics().p("AzxdkMApKgpiQInIiAEMFQADMIoiInQoiInsHACIgNAAQr9AAojodg");
	var mask_1_graphics_344 = new cjs.Graphics().p("EAAFAmAQsGgSoXoyMAqYgoTQIWIygTMFQgUMIoyIWQodIDrjAAIg4gBg");
	var mask_1_graphics_345 = new cjs.Graphics().p("EgBDAl9QsGgxoApGMAr6gmoQIAJHgxMDQgyMHpGIAQoSHSqxAAQhEAAhEgEg");
	var mask_1_graphics_346 = new cjs.Graphics().p("EgCMAl2QsDhOnppaMAtXgk5QHqJahQMBQhPMEpaHpQoFGlqBAAQhpAAhtgMg");
	var mask_1_graphics_347 = new cjs.Graphics().p("EgDUAltQsAhsnRptMAuxgjGQHSJrhuL+QhtMBpsHSQn2F4pWAAQiMAAiTgVg");
	var mask_1_graphics_348 = new cjs.Graphics().p("EgEcAlhQr7iKm5p+MAwGghRQG5J9iKL6QiML7p+G6QnkFPosAAQivAAi4gig");
	var mask_1_graphics_349 = new cjs.Graphics().p("EgFjAlSQr1inmhqPMAxXgfYQGgKOioLzQipL2qOGgQnSEooEAAQjSAAjagxg");
	var mask_1_graphics_350 = new cjs.Graphics().p("EgGqAlAQrujEmHqfMAyigdcQGHKejFLsQjGLvqfGHQm8ECnfAAQjzAAj8hDg");
	var mask_1_graphics_351 = new cjs.Graphics().p("EgHwAksQrmjhlsqtMAzpgbeQFsKsjiLlQjjLmqtFtQmmDgm7AAQkTAAkdhYg");
	var mask_1_graphics_352 = new cjs.Graphics().p("EgI1AkVQrdj+lRq6MA0rgZcQFRK5j/LcQj/Ldq7FRQmNDAmYAAQk1AAk7hvg");
	var mask_1_graphics_353 = new cjs.Graphics().p("EgJ6Aj8QrSkak2rIMA1ogXXQE2LGkbLRQkcLSrHE2QlzCil2AAQlVAAlaiIg");
	var mask_1_graphics_354 = new cjs.Graphics().p("EgK8AjgQrHk2karTMA2fgVRQEaLRk2LGQk4LHrTEaQlXCGlUAAQl4AAl0ikg");
	var mask_1_graphics_355 = new cjs.Graphics().p("EgL+AjCQq6lSj+rdMA3RgTJQD+LclSK5QlTK6rdD+Qk6BtkzAAQmZAAmPjCg");
	var mask_1_graphics_356 = new cjs.Graphics().p("EgM/AihQqslsjirnMA3/gRAQDiLnltKrQluKtrmDhQkbBWkTAAQm8AAmojjg");
	var mask_1_graphics_357 = new cjs.Graphics().p("EgN+Ah+QqdmHjFruMA4ngO1QDELvmHKcQmIKfrvDEQj6BCjyAAQnhAAm+kGg");
	var mask_1_graphics_358 = new cjs.Graphics().p("EgO7AhZQqOmhior2MA5JgMnQCnL2mgKNQmiKOr2CoQjZAvjQAAQoGAAnTkqg");
	var mask_1_graphics_359 = new cjs.Graphics().p("EgP3AgxQp+m6iJr7MA5lgKZQCKL8m6J8Qm7J+r8CJQi1AhiuAAQouAAnmlSg");
	var mask_1_graphics_360 = new cjs.Graphics().p("EgQxAgHQpsnShssBMA58gIJQBsMBnSJqQnTJssBBsQiQAViLAAQpZAAn2l8g");
	var mask_1_graphics_361 = new cjs.Graphics().p("AxqfbQpZnqhPsEMA6PgF6QBOMFnqJYQnrJZsEBPQhqAKhnAAQqFAAoGmng");
	var mask_1_graphics_362 = new cjs.Graphics().p("AyhesQpGoBgwsGMA6agDpQAwMHoAJFQoDJGsGAwQhDAEhBAAQq0AAoTnWg");
	var mask_1_graphics_363 = new cjs.Graphics().p("AzWd7QoyoXgSsIMA6hgBXQASMIoXIwQoZIysIASIgyABQrnAAoeoHg");
	var mask_1_graphics_364 = new cjs.Graphics().p("EAAZAmCQsHgMobouQodosAMsIMA6hAA6QgMMIosIbQoiIRryAAIgiAAg");
	var mask_1_graphics_365 = new cjs.Graphics().p("EgAtAl/QsHgqoGpCQoGpBAqsHMA6cADLQgqMHpBIFQoXHgq/AAQg5AAg5gDg");
	var mask_1_graphics_366 = new cjs.Graphics().p("EgBkAl7QsGhCnzpSQn1pQBCsGMA6UAE+QhBMFpRH0QoNG6qZAAQhWAAhagHg");
	var mask_1_graphics_367 = new cjs.Graphics().p("EgCaAl1QsDhanhpgQnjpgBZsDMA6KAGvQhaMDpfHiQoCGXp1AAQh0AAh4gOg");
	var mask_1_graphics_368 = new cjs.Graphics().p("EgDPAltQsAhxnPpvQnQpuBxsAMA57AIgQhwMBpuHOQn2F1pTAAQiQAAiWgWg");
	var mask_1_graphics_369 = new cjs.Graphics().p("EgEDAlkQr8iIm7p+Qm9p7CIr9MA5pAKRQiIL9p8G7QnoFVoyAAQirAAi0ggg");
	var mask_1_graphics_370 = new cjs.Graphics().p("EgE1AlZQr4igmoqKQmpqJCfr5MA5UAMCQigL4qJGoQnZE1oTAAQjGAAjPgrg");
	var mask_1_graphics_371 = new cjs.Graphics().p("EgFnAlMQrzi3mTqXQmWqWC3rzMA47ANyQi3LzqVGTQnKEYn0AAQjhAAjrg5g");
	var mask_1_graphics_372 = new cjs.Graphics().p("EgGXAk9QrtjNl/qjQmBqiDNrtMA4fAPgQjOLtqhF/Qm5D7nXAAQj7AAkFhIg");
	var mask_1_graphics_373 = new cjs.Graphics().p("EgHGAktQrmjklrqvQlsqtDkrnMA3/AROQjkLnqtFrQmmDfm7AAQkWAAkehYg");
	var mask_1_graphics_374 = new cjs.Graphics().p("EgH0AkcQrfj7lVq5QlYq5D7reMA3cAS6Qj7Lfq4FWQmTDGmfAAQkvAAk3hqg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(268).to({graphics:mask_1_graphics_268,x:192.7,y:186.3}).wait(1).to({graphics:mask_1_graphics_269,x:192.7,y:188.3}).wait(1).to({graphics:mask_1_graphics_270,x:192.7,y:190.3}).wait(1).to({graphics:mask_1_graphics_271,x:192.7,y:192.3}).wait(1).to({graphics:mask_1_graphics_272,x:192.7,y:194.3}).wait(1).to({graphics:mask_1_graphics_273,x:192.6,y:196.2}).wait(1).to({graphics:mask_1_graphics_274,x:192.6,y:198.1}).wait(1).to({graphics:mask_1_graphics_275,x:192.6,y:200}).wait(1).to({graphics:mask_1_graphics_276,x:192.5,y:201.9}).wait(1).to({graphics:mask_1_graphics_277,x:192.5,y:203.7}).wait(1).to({graphics:mask_1_graphics_278,x:192.5,y:205.5}).wait(1).to({graphics:mask_1_graphics_279,x:192.4,y:207.2}).wait(1).to({graphics:mask_1_graphics_280,x:192.4,y:209}).wait(1).to({graphics:mask_1_graphics_281,x:192.4,y:210.7}).wait(1).to({graphics:mask_1_graphics_282,x:192.3,y:212.3}).wait(1).to({graphics:mask_1_graphics_283,x:192.3,y:214}).wait(1).to({graphics:mask_1_graphics_284,x:192.3,y:215.6}).wait(1).to({graphics:mask_1_graphics_285,x:192.3,y:217.1}).wait(1).to({graphics:mask_1_graphics_286,x:192.3,y:218.6}).wait(1).to({graphics:mask_1_graphics_287,x:192.3,y:220.1}).wait(1).to({graphics:mask_1_graphics_288,x:192.3,y:221.6}).wait(1).to({graphics:mask_1_graphics_289,x:192.3,y:223}).wait(1).to({graphics:mask_1_graphics_290,x:192.4,y:224.3}).wait(1).to({graphics:mask_1_graphics_291,x:192.4,y:225.7}).wait(1).to({graphics:mask_1_graphics_292,x:192.4,y:226.9}).wait(1).to({graphics:mask_1_graphics_293,x:192.4,y:228.2}).wait(1).to({graphics:mask_1_graphics_294,x:192.5,y:229.4}).wait(1).to({graphics:mask_1_graphics_295,x:192.5,y:230.5}).wait(1).to({graphics:mask_1_graphics_296,x:192.5,y:231.6}).wait(1).to({graphics:mask_1_graphics_297,x:192.5,y:232.7}).wait(1).to({graphics:mask_1_graphics_298,x:192.5,y:233.7}).wait(1).to({graphics:mask_1_graphics_299,x:192.5,y:234.7}).wait(1).to({graphics:mask_1_graphics_300,x:192.5,y:235.6}).wait(1).to({graphics:mask_1_graphics_301,x:192.5,y:236.5}).wait(1).to({graphics:mask_1_graphics_302,x:192.5,y:237.3}).wait(1).to({graphics:mask_1_graphics_303,x:192.5,y:238.1}).wait(1).to({graphics:mask_1_graphics_304,x:192.5,y:238.8}).wait(1).to({graphics:mask_1_graphics_305,x:192.5,y:239.5}).wait(1).to({graphics:mask_1_graphics_306,x:192.5,y:240.1}).wait(1).to({graphics:mask_1_graphics_307,x:192.5,y:240.7}).wait(1).to({graphics:mask_1_graphics_308,x:192.5,y:241.2}).wait(1).to({graphics:mask_1_graphics_309,x:192.4,y:241.7}).wait(1).to({graphics:mask_1_graphics_310,x:192.4,y:242.2}).wait(1).to({graphics:mask_1_graphics_311,x:192.4,y:242.5}).wait(1).to({graphics:mask_1_graphics_312,x:192.3,y:242.9}).wait(1).to({graphics:mask_1_graphics_313,x:192.3,y:243.2}).wait(1).to({graphics:mask_1_graphics_314,x:192.3,y:243.5}).wait(1).to({graphics:mask_1_graphics_315,x:192.2,y:243.6}).wait(1).to({graphics:mask_1_graphics_316,x:192.2,y:243.7}).wait(1).to({graphics:mask_1_graphics_317,x:192.2,y:243.7}).wait(1).to({graphics:mask_1_graphics_318,x:192.2,y:243.7}).wait(1).to({graphics:mask_1_graphics_319,x:192.3,y:243.7}).wait(1).to({graphics:mask_1_graphics_320,x:192.3,y:243.7}).wait(1).to({graphics:mask_1_graphics_321,x:192.3,y:243.7}).wait(1).to({graphics:mask_1_graphics_322,x:192.4,y:243.7}).wait(1).to({graphics:mask_1_graphics_323,x:192.4,y:243.8}).wait(1).to({graphics:mask_1_graphics_324,x:192.4,y:243.8}).wait(1).to({graphics:mask_1_graphics_325,x:192.5,y:243.8}).wait(1).to({graphics:mask_1_graphics_326,x:192.5,y:243.8}).wait(1).to({graphics:mask_1_graphics_327,x:192.5,y:243.8}).wait(1).to({graphics:mask_1_graphics_328,x:192.6,y:243.8}).wait(1).to({graphics:mask_1_graphics_329,x:192.6,y:243.8}).wait(1).to({graphics:mask_1_graphics_330,x:192.6,y:243.8}).wait(1).to({graphics:mask_1_graphics_331,x:192.6,y:243.8}).wait(1).to({graphics:mask_1_graphics_332,x:192.6,y:243.8}).wait(1).to({graphics:mask_1_graphics_333,x:192.6,y:243.7}).wait(1).to({graphics:mask_1_graphics_334,x:192.6,y:243.7}).wait(1).to({graphics:mask_1_graphics_335,x:192.5,y:243.6}).wait(1).to({graphics:mask_1_graphics_336,x:192.5,y:243.6}).wait(1).to({graphics:mask_1_graphics_337,x:192.5,y:243.6}).wait(1).to({graphics:mask_1_graphics_338,x:192.5,y:243.5}).wait(1).to({graphics:mask_1_graphics_339,x:192.4,y:243.5}).wait(1).to({graphics:mask_1_graphics_340,x:192.4,y:243.4}).wait(1).to({graphics:mask_1_graphics_341,x:192.4,y:243.4}).wait(1).to({graphics:mask_1_graphics_342,x:192.4,y:243.3}).wait(1).to({graphics:mask_1_graphics_343,x:192.4,y:243.3}).wait(1).to({graphics:mask_1_graphics_344,x:192.4,y:243.3}).wait(1).to({graphics:mask_1_graphics_345,x:192.4,y:243.3}).wait(1).to({graphics:mask_1_graphics_346,x:192.5,y:243.4}).wait(1).to({graphics:mask_1_graphics_347,x:192.5,y:243.4}).wait(1).to({graphics:mask_1_graphics_348,x:192.6,y:243.5}).wait(1).to({graphics:mask_1_graphics_349,x:192.6,y:243.5}).wait(1).to({graphics:mask_1_graphics_350,x:192.7,y:243.5}).wait(1).to({graphics:mask_1_graphics_351,x:192.7,y:243.6}).wait(1).to({graphics:mask_1_graphics_352,x:192.8,y:243.6}).wait(1).to({graphics:mask_1_graphics_353,x:192.8,y:243.6}).wait(1).to({graphics:mask_1_graphics_354,x:192.8,y:243.6}).wait(1).to({graphics:mask_1_graphics_355,x:192.8,y:243.6}).wait(1).to({graphics:mask_1_graphics_356,x:192.8,y:243.6}).wait(1).to({graphics:mask_1_graphics_357,x:192.8,y:243.6}).wait(1).to({graphics:mask_1_graphics_358,x:192.8,y:243.5}).wait(1).to({graphics:mask_1_graphics_359,x:192.8,y:243.5}).wait(1).to({graphics:mask_1_graphics_360,x:192.8,y:243.5}).wait(1).to({graphics:mask_1_graphics_361,x:192.7,y:243.4}).wait(1).to({graphics:mask_1_graphics_362,x:192.7,y:243.4}).wait(1).to({graphics:mask_1_graphics_363,x:192.7,y:243.4}).wait(1).to({graphics:mask_1_graphics_364,x:192.7,y:243.4}).wait(1).to({graphics:mask_1_graphics_365,x:192.6,y:243.4}).wait(1).to({graphics:mask_1_graphics_366,x:192.4,y:243.4}).wait(1).to({graphics:mask_1_graphics_367,x:192.2,y:243.5}).wait(1).to({graphics:mask_1_graphics_368,x:191.8,y:243.5}).wait(1).to({graphics:mask_1_graphics_369,x:191.4,y:243.6}).wait(1).to({graphics:mask_1_graphics_370,x:190.9,y:243.6}).wait(1).to({graphics:mask_1_graphics_371,x:190.3,y:243.7}).wait(1).to({graphics:mask_1_graphics_372,x:189.6,y:243.7}).wait(1).to({graphics:mask_1_graphics_373,x:188.8,y:243.7}).wait(1).to({graphics:mask_1_graphics_374,x:187.9,y:243.8}).wait(216));

	// Layer 6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("A7eBcQA5HLEpGlQEqGlI+gUQGng2GSkjQGTkjFAl0QE/lzDemsQDfmsgXjYQgXjZhTgnQhUgoh4AC");
	this.shape_2.setTransform(274,266.8);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(268).to({_off:false},0).wait(322));

	// Layer 5 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_175 = new cjs.Graphics().p("ASULWIAAkZIOUAAIAAEZg");
	var mask_2_graphics_176 = new cjs.Graphics().p("AnUCMIAAkXIOpAAIAAEXg");
	var mask_2_graphics_177 = new cjs.Graphics().p("AnfCMIAAkXIO/AAIAAEXg");
	var mask_2_graphics_178 = new cjs.Graphics().p("AnqCMIAAkXIPUAAIAAEXg");
	var mask_2_graphics_179 = new cjs.Graphics().p("An0CMIAAkXIPpAAIAAEXg");
	var mask_2_graphics_180 = new cjs.Graphics().p("An/CMIAAkXIP/AAIAAEXg");
	var mask_2_graphics_181 = new cjs.Graphics().p("AoKCMIAAkXIQVAAIAAEXg");
	var mask_2_graphics_182 = new cjs.Graphics().p("AoUCMIAAkXIQpAAIAAEXg");
	var mask_2_graphics_183 = new cjs.Graphics().p("AopCPIAAkdIRTAAIAAEdg");
	var mask_2_graphics_184 = new cjs.Graphics().p("Ao+CSIAAkjIR9AAIAAEjg");
	var mask_2_graphics_185 = new cjs.Graphics().p("ApTCVIAAkpISnAAIAAEpg");
	var mask_2_graphics_186 = new cjs.Graphics().p("ApoCYIAAkvITRAAIAAEvg");
	var mask_2_graphics_187 = new cjs.Graphics().p("Ap9CbIAAk1IT7AAIAAE1g");
	var mask_2_graphics_188 = new cjs.Graphics().p("AqSCfIAAk8IUlAAIAAE8g");
	var mask_2_graphics_189 = new cjs.Graphics().p("AO2LrIAAlDIVQAAIAAFDg");
	var mask_2_graphics_190 = new cjs.Graphics().p("AqnCwIAAleIVPAAIAAFeg");
	var mask_2_graphics_191 = new cjs.Graphics().p("AqnC+IAAl6IVPAAIAAF6g");
	var mask_2_graphics_192 = new cjs.Graphics().p("AqnDMIAAmWIVPAAIAAGWg");
	var mask_2_graphics_193 = new cjs.Graphics().p("AqnDaIAAmyIVPAAIAAGyg");
	var mask_2_graphics_194 = new cjs.Graphics().p("AqnDnIAAnNIVPAAIAAHNg");
	var mask_2_graphics_195 = new cjs.Graphics().p("AqnD1IAAnpIVPAAIAAHpg");
	var mask_2_graphics_196 = new cjs.Graphics().p("AqnEDIAAoFIVPAAIAAIFg");
	var mask_2_graphics_197 = new cjs.Graphics().p("AqnERIAAohIVPAAIAAIhg");
	var mask_2_graphics_198 = new cjs.Graphics().p("AqnEfIAAo9IVPAAIAAI9g");
	var mask_2_graphics_199 = new cjs.Graphics().p("AqnEtIAApZIVPAAIAAJZg");
	var mask_2_graphics_200 = new cjs.Graphics().p("AqnE7IAAp1IVPAAIAAJ1g");
	var mask_2_graphics_201 = new cjs.Graphics().p("AqnFJIAAqRIVPAAIAAKRg");
	var mask_2_graphics_202 = new cjs.Graphics().p("AqnFXIAAqtIVPAAIAAKtg");
	var mask_2_graphics_203 = new cjs.Graphics().p("AqnFlIAArJIVPAAIAALJg");
	var mask_2_graphics_204 = new cjs.Graphics().p("AqnFzIAArlIVPAAIAALlg");
	var mask_2_graphics_205 = new cjs.Graphics().p("AqnGBIAAsBIVPAAIAAMBg");
	var mask_2_graphics_206 = new cjs.Graphics().p("AqnGPIAAsdIVPAAIAAMdg");
	var mask_2_graphics_207 = new cjs.Graphics().p("AqnGdIAAs5IVPAAIAAM5g");
	var mask_2_graphics_208 = new cjs.Graphics().p("AqnGrIAAtVIVPAAIAANVg");
	var mask_2_graphics_209 = new cjs.Graphics().p("AqnG5IAAtxIVPAAIAANxg");
	var mask_2_graphics_210 = new cjs.Graphics().p("AqnHHIAAuNIVPAAIAAONg");
	var mask_2_graphics_211 = new cjs.Graphics().p("AqnHVIAAupIVPAAIAAOpg");
	var mask_2_graphics_212 = new cjs.Graphics().p("AqnHjIAAvFIVPAAIAAPFg");
	var mask_2_graphics_213 = new cjs.Graphics().p("AqnHxIAAvhIVPAAIAAPhg");
	var mask_2_graphics_214 = new cjs.Graphics().p("AqnH/IAAv9IVPAAIAAP9g");
	var mask_2_graphics_215 = new cjs.Graphics().p("AqnINIAAwZIVPAAIAAQZg");
	var mask_2_graphics_216 = new cjs.Graphics().p("AqnIbIAAw1IVPAAIAAQ1g");
	var mask_2_graphics_217 = new cjs.Graphics().p("AqnIpIAAxRIVPAAIAARRg");
	var mask_2_graphics_218 = new cjs.Graphics().p("AqnI3IAAxtIVPAAIAARtg");
	var mask_2_graphics_219 = new cjs.Graphics().p("AqnJFIAAyJIVPAAIAASJg");
	var mask_2_graphics_220 = new cjs.Graphics().p("AqnJTIAAylIVPAAIAASlg");
	var mask_2_graphics_221 = new cjs.Graphics().p("AqnJhIAAzBIVPAAIAATBg");
	var mask_2_graphics_222 = new cjs.Graphics().p("AqnJuIAAzcIVPAAIAATcg");
	var mask_2_graphics_223 = new cjs.Graphics().p("AqnJ9IAAz5IVPAAIAAT5g");
	var mask_2_graphics_224 = new cjs.Graphics().p("AqnKLIAA0VIVPAAIAAUVg");
	var mask_2_graphics_225 = new cjs.Graphics().p("AqnKZIAA0xIVPAAIAAUxg");
	var mask_2_graphics_226 = new cjs.Graphics().p("AqnKnIAA1NIVPAAIAAVNg");
	var mask_2_graphics_227 = new cjs.Graphics().p("AqnK1IAA1pIVPAAIAAVpg");
	var mask_2_graphics_228 = new cjs.Graphics().p("AqnLCIAA2DIVPAAIAAWDg");
	var mask_2_graphics_229 = new cjs.Graphics().p("AqnLQIAA2fIVPAAIAAWfg");
	var mask_2_graphics_230 = new cjs.Graphics().p("AqnLeIAA27IVPAAIAAW7g");
	var mask_2_graphics_231 = new cjs.Graphics().p("AqnLsIAA3XIVPAAIAAXXg");
	var mask_2_graphics_232 = new cjs.Graphics().p("AqnL6IAA3zIVPAAIAAXzg");
	var mask_2_graphics_233 = new cjs.Graphics().p("AqnMIIAA4PIVPAAIAAYPg");
	var mask_2_graphics_234 = new cjs.Graphics().p("AqnMWIAA4rIVPAAIAAYrg");
	var mask_2_graphics_235 = new cjs.Graphics().p("AqnMkIAA5HIVPAAIAAZHg");
	var mask_2_graphics_236 = new cjs.Graphics().p("AqnMyIAA5jIVPAAIAAZjg");
	var mask_2_graphics_237 = new cjs.Graphics().p("AqnNAIAA5/IVPAAIAAZ/g");
	var mask_2_graphics_238 = new cjs.Graphics().p("AqnNOIAA6bIVPAAIAAabg");
	var mask_2_graphics_239 = new cjs.Graphics().p("AqnNcIAA63IVPAAIAAa3g");
	var mask_2_graphics_240 = new cjs.Graphics().p("AqnNqIAA7TIVPAAIAAbTg");
	var mask_2_graphics_241 = new cjs.Graphics().p("AqnN4IAA7vIVPAAIAAbvg");
	var mask_2_graphics_242 = new cjs.Graphics().p("AqnOEIAA8HIVPAAIAAcHg");
	var mask_2_graphics_243 = new cjs.Graphics().p("AqnOQIAA8fIVPAAIAAcfg");
	var mask_2_graphics_244 = new cjs.Graphics().p("AqnOcIAA83IVPAAIAAc3g");
	var mask_2_graphics_245 = new cjs.Graphics().p("AqnOoIAA9PIVPAAIAAdPg");
	var mask_2_graphics_246 = new cjs.Graphics().p("AqnO0IAA9nIVPAAIAAdng");
	var mask_2_graphics_247 = new cjs.Graphics().p("AqnPAIAA9/IVPAAIAAd/g");
	var mask_2_graphics_248 = new cjs.Graphics().p("AqnPNIAA+ZIVPAAIAAeZg");
	var mask_2_graphics_249 = new cjs.Graphics().p("AqnPZIAA+xIVPAAIAAexg");
	var mask_2_graphics_250 = new cjs.Graphics().p("AqnPlIAA/JIVPAAIAAfJg");
	var mask_2_graphics_251 = new cjs.Graphics().p("AqnPxIAA/hIVPAAIAAfhg");
	var mask_2_graphics_252 = new cjs.Graphics().p("AqnP9IAA/5IVPAAIAAf5g");
	var mask_2_graphics_253 = new cjs.Graphics().p("AqnQJMAAAggRIVPAAMAAAAgRg");
	var mask_2_graphics_254 = new cjs.Graphics().p("AqnQVMAAAggpIVPAAMAAAAgpg");
	var mask_2_graphics_255 = new cjs.Graphics().p("AqnQhMAAAghCIVPAAMAAAAhCg");
	var mask_2_graphics_256 = new cjs.Graphics().p("AqnQuMAAAghbIVPAAMAAAAhbg");
	var mask_2_graphics_257 = new cjs.Graphics().p("AqnQ6MAAAghzIVPAAMAAAAhzg");
	var mask_2_graphics_258 = new cjs.Graphics().p("AqnRGMAAAgiLIVPAAMAAAAiLg");
	var mask_2_graphics_259 = new cjs.Graphics().p("AqnRSMAAAgijIVPAAMAAAAijg");
	var mask_2_graphics_260 = new cjs.Graphics().p("AqnReMAAAgi7IVPAAMAAAAi7g");
	var mask_2_graphics_261 = new cjs.Graphics().p("AqnRqMAAAgjTIVPAAMAAAAjTg");
	var mask_2_graphics_262 = new cjs.Graphics().p("AqnR2MAAAgjrIVPAAMAAAAjrg");
	var mask_2_graphics_263 = new cjs.Graphics().p("AqnSCMAAAgkDIVPAAMAAAAkDg");
	var mask_2_graphics_264 = new cjs.Graphics().p("AqnSOMAAAgkcIVPAAMAAAAkcg");
	var mask_2_graphics_265 = new cjs.Graphics().p("AqnSaMAAAgk0IVPAAMAAAAk0g");
	var mask_2_graphics_266 = new cjs.Graphics().p("AqnSnMAAAglNIVPAAMAAAAlNg");
	var mask_2_graphics_267 = new cjs.Graphics().p("AqnSzMAAAgllIVPAAMAAAAllg");
	var mask_2_graphics_268 = new cjs.Graphics().p("AO2cIMAAAgl8IVQAAMAAAAl8g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(175).to({graphics:mask_2_graphics_175,x:208.8,y:72.6}).wait(1).to({graphics:mask_2_graphics_176,x:372.9,y:131.1}).wait(1).to({graphics:mask_2_graphics_177,x:374,y:131.1}).wait(1).to({graphics:mask_2_graphics_178,x:375.1,y:131.1}).wait(1).to({graphics:mask_2_graphics_179,x:376.2,y:131.1}).wait(1).to({graphics:mask_2_graphics_180,x:377.3,y:131.1}).wait(1).to({graphics:mask_2_graphics_181,x:378.3,y:131.1}).wait(1).to({graphics:mask_2_graphics_182,x:379.4,y:131.1}).wait(1).to({graphics:mask_2_graphics_183,x:381.5,y:131.4}).wait(1).to({graphics:mask_2_graphics_184,x:383.6,y:131.7}).wait(1).to({graphics:mask_2_graphics_185,x:385.7,y:132}).wait(1).to({graphics:mask_2_graphics_186,x:387.7,y:132.3}).wait(1).to({graphics:mask_2_graphics_187,x:389.8,y:132.6}).wait(1).to({graphics:mask_2_graphics_188,x:391.9,y:132.9}).wait(1).to({graphics:mask_2_graphics_189,x:231,y:74.7}).wait(1).to({graphics:mask_2_graphics_190,x:394,y:134.6}).wait(1).to({graphics:mask_2_graphics_191,x:394,y:136}).wait(1).to({graphics:mask_2_graphics_192,x:394,y:137.4}).wait(1).to({graphics:mask_2_graphics_193,x:394,y:138.8}).wait(1).to({graphics:mask_2_graphics_194,x:394,y:140.2}).wait(1).to({graphics:mask_2_graphics_195,x:394,y:141.6}).wait(1).to({graphics:mask_2_graphics_196,x:394,y:143}).wait(1).to({graphics:mask_2_graphics_197,x:394,y:144.4}).wait(1).to({graphics:mask_2_graphics_198,x:394,y:145.8}).wait(1).to({graphics:mask_2_graphics_199,x:394,y:147.2}).wait(1).to({graphics:mask_2_graphics_200,x:394,y:148.6}).wait(1).to({graphics:mask_2_graphics_201,x:394,y:150}).wait(1).to({graphics:mask_2_graphics_202,x:394,y:151.4}).wait(1).to({graphics:mask_2_graphics_203,x:394,y:152.8}).wait(1).to({graphics:mask_2_graphics_204,x:394,y:154.2}).wait(1).to({graphics:mask_2_graphics_205,x:394,y:155.6}).wait(1).to({graphics:mask_2_graphics_206,x:394,y:157}).wait(1).to({graphics:mask_2_graphics_207,x:394,y:158.4}).wait(1).to({graphics:mask_2_graphics_208,x:394,y:159.8}).wait(1).to({graphics:mask_2_graphics_209,x:394,y:161.2}).wait(1).to({graphics:mask_2_graphics_210,x:394,y:162.6}).wait(1).to({graphics:mask_2_graphics_211,x:394,y:164}).wait(1).to({graphics:mask_2_graphics_212,x:394,y:165.4}).wait(1).to({graphics:mask_2_graphics_213,x:394,y:166.8}).wait(1).to({graphics:mask_2_graphics_214,x:394,y:168.2}).wait(1).to({graphics:mask_2_graphics_215,x:394,y:169.6}).wait(1).to({graphics:mask_2_graphics_216,x:394,y:171}).wait(1).to({graphics:mask_2_graphics_217,x:394,y:172.4}).wait(1).to({graphics:mask_2_graphics_218,x:394,y:173.8}).wait(1).to({graphics:mask_2_graphics_219,x:394,y:175.2}).wait(1).to({graphics:mask_2_graphics_220,x:394,y:176.6}).wait(1).to({graphics:mask_2_graphics_221,x:394,y:178}).wait(1).to({graphics:mask_2_graphics_222,x:394,y:179.4}).wait(1).to({graphics:mask_2_graphics_223,x:394,y:180.8}).wait(1).to({graphics:mask_2_graphics_224,x:394,y:182.2}).wait(1).to({graphics:mask_2_graphics_225,x:394,y:183.6}).wait(1).to({graphics:mask_2_graphics_226,x:394,y:185}).wait(1).to({graphics:mask_2_graphics_227,x:394,y:186.4}).wait(1).to({graphics:mask_2_graphics_228,x:394,y:187.8}).wait(1).to({graphics:mask_2_graphics_229,x:394,y:189.2}).wait(1).to({graphics:mask_2_graphics_230,x:394,y:190.6}).wait(1).to({graphics:mask_2_graphics_231,x:394,y:192}).wait(1).to({graphics:mask_2_graphics_232,x:394,y:193.4}).wait(1).to({graphics:mask_2_graphics_233,x:394,y:194.8}).wait(1).to({graphics:mask_2_graphics_234,x:394,y:196.2}).wait(1).to({graphics:mask_2_graphics_235,x:394,y:197.6}).wait(1).to({graphics:mask_2_graphics_236,x:394,y:199}).wait(1).to({graphics:mask_2_graphics_237,x:394,y:200.4}).wait(1).to({graphics:mask_2_graphics_238,x:394,y:201.8}).wait(1).to({graphics:mask_2_graphics_239,x:394,y:203.2}).wait(1).to({graphics:mask_2_graphics_240,x:394,y:204.6}).wait(1).to({graphics:mask_2_graphics_241,x:394,y:206}).wait(1).to({graphics:mask_2_graphics_242,x:394,y:207.2}).wait(1).to({graphics:mask_2_graphics_243,x:394,y:208.4}).wait(1).to({graphics:mask_2_graphics_244,x:394,y:209.6}).wait(1).to({graphics:mask_2_graphics_245,x:394,y:210.8}).wait(1).to({graphics:mask_2_graphics_246,x:394,y:212}).wait(1).to({graphics:mask_2_graphics_247,x:394,y:213.2}).wait(1).to({graphics:mask_2_graphics_248,x:394,y:214.4}).wait(1).to({graphics:mask_2_graphics_249,x:394,y:215.6}).wait(1).to({graphics:mask_2_graphics_250,x:394,y:216.8}).wait(1).to({graphics:mask_2_graphics_251,x:394,y:218.1}).wait(1).to({graphics:mask_2_graphics_252,x:394,y:219.3}).wait(1).to({graphics:mask_2_graphics_253,x:394,y:220.5}).wait(1).to({graphics:mask_2_graphics_254,x:394,y:221.7}).wait(1).to({graphics:mask_2_graphics_255,x:394,y:222.9}).wait(1).to({graphics:mask_2_graphics_256,x:394,y:224.1}).wait(1).to({graphics:mask_2_graphics_257,x:394,y:225.3}).wait(1).to({graphics:mask_2_graphics_258,x:394,y:226.5}).wait(1).to({graphics:mask_2_graphics_259,x:394,y:227.7}).wait(1).to({graphics:mask_2_graphics_260,x:394,y:228.9}).wait(1).to({graphics:mask_2_graphics_261,x:394,y:230.1}).wait(1).to({graphics:mask_2_graphics_262,x:394,y:231.3}).wait(1).to({graphics:mask_2_graphics_263,x:394,y:232.5}).wait(1).to({graphics:mask_2_graphics_264,x:394,y:233.8}).wait(1).to({graphics:mask_2_graphics_265,x:394,y:235}).wait(1).to({graphics:mask_2_graphics_266,x:394,y:236.2}).wait(1).to({graphics:mask_2_graphics_267,x:394,y:237.4}).wait(1).to({graphics:mask_2_graphics_268,x:231,y:180}).wait(322));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("A7eBcQA5HLEpGlQEqGlI+gUQGng2GSkjQGTkjFAl0QE/lzDemsQDfmsgXjYQgXjZhTgnQhUgoh4AC");
	this.shape_3.setTransform(274,266.8);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(175).to({_off:false},0).wait(415));

	// Layer 9
	this.instance_3 = new lib.ar1("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(396.9,408,1,1,0,28.2,-151.8,-0.8,0.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(581));

	// Layer 4 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_9 = new cjs.Graphics().p("EAOYAiOIAAi5ITYAAIAAC5g");
	var mask_3_graphics_10 = new cjs.Graphics().p("AprBnIAAjNITXAAIAADNg");
	var mask_3_graphics_11 = new cjs.Graphics().p("AprByIAAjjITXAAIAADjg");
	var mask_3_graphics_12 = new cjs.Graphics().p("AprB9IAAj5ITXAAIAAD5g");
	var mask_3_graphics_13 = new cjs.Graphics().p("AprCHIAAkNITXAAIAAENg");
	var mask_3_graphics_14 = new cjs.Graphics().p("AprCSIAAkjITXAAIAAEjg");
	var mask_3_graphics_15 = new cjs.Graphics().p("AprCdIAAk5ITXAAIAAE5g");
	var mask_3_graphics_16 = new cjs.Graphics().p("AprCnIAAlOITXAAIAAFOg");
	var mask_3_graphics_17 = new cjs.Graphics().p("AprCyIAAljITXAAIAAFjg");
	var mask_3_graphics_18 = new cjs.Graphics().p("AprC9IAAl5ITXAAIAAF5g");
	var mask_3_graphics_19 = new cjs.Graphics().p("AprDHIAAmNITXAAIAAGNg");
	var mask_3_graphics_20 = new cjs.Graphics().p("AprDSIAAmjITXAAIAAGjg");
	var mask_3_graphics_21 = new cjs.Graphics().p("AprDdIAAm5ITXAAIAAG5g");
	var mask_3_graphics_22 = new cjs.Graphics().p("AprDoIAAnPITXAAIAAHPg");
	var mask_3_graphics_23 = new cjs.Graphics().p("AprDyIAAnkITXAAIAAHkg");
	var mask_3_graphics_24 = new cjs.Graphics().p("AprD9IAAn5ITXAAIAAH5g");
	var mask_3_graphics_25 = new cjs.Graphics().p("AprEIIAAoPITXAAIAAIPg");
	var mask_3_graphics_26 = new cjs.Graphics().p("AprESIAAokITXAAIAAIkg");
	var mask_3_graphics_27 = new cjs.Graphics().p("AprEdIAAo5ITXAAIAAI5g");
	var mask_3_graphics_28 = new cjs.Graphics().p("AprEoIAApPITXAAIAAJPg");
	var mask_3_graphics_29 = new cjs.Graphics().p("AprEzIAAplITXAAIAAJlg");
	var mask_3_graphics_30 = new cjs.Graphics().p("AprE9IAAp5ITXAAIAAJ5g");
	var mask_3_graphics_31 = new cjs.Graphics().p("AprFIIAAqPITXAAIAAKPg");
	var mask_3_graphics_32 = new cjs.Graphics().p("AprFTIAAqlITXAAIAAKlg");
	var mask_3_graphics_33 = new cjs.Graphics().p("AprFdIAAq5ITXAAIAAK5g");
	var mask_3_graphics_34 = new cjs.Graphics().p("AprFoIAArPITXAAIAALPg");
	var mask_3_graphics_35 = new cjs.Graphics().p("AprFzIAArlITXAAIAALlg");
	var mask_3_graphics_36 = new cjs.Graphics().p("AprF+IAAr7ITXAAIAAL7g");
	var mask_3_graphics_37 = new cjs.Graphics().p("AprGIIAAsQITXAAIAAMQg");
	var mask_3_graphics_38 = new cjs.Graphics().p("AprGTIAAslITXAAIAAMlg");
	var mask_3_graphics_39 = new cjs.Graphics().p("AprGeIAAs7ITXAAIAAM7g");
	var mask_3_graphics_40 = new cjs.Graphics().p("AprGoIAAtPITXAAIAANPg");
	var mask_3_graphics_41 = new cjs.Graphics().p("AprGzIAAtlITXAAIAANlg");
	var mask_3_graphics_42 = new cjs.Graphics().p("AprG+IAAt7ITXAAIAAN7g");
	var mask_3_graphics_43 = new cjs.Graphics().p("AprHJIAAuRITXAAIAAORg");
	var mask_3_graphics_44 = new cjs.Graphics().p("AprHTIAAumITXAAIAAOmg");
	var mask_3_graphics_45 = new cjs.Graphics().p("AprHeIAAu7ITXAAIAAO7g");
	var mask_3_graphics_46 = new cjs.Graphics().p("AprHpIAAvRITXAAIAAPRg");
	var mask_3_graphics_47 = new cjs.Graphics().p("AprHzIAAvmITXAAIAAPmg");
	var mask_3_graphics_48 = new cjs.Graphics().p("AprH+IAAv7ITXAAIAAP7g");
	var mask_3_graphics_49 = new cjs.Graphics().p("AprIJIAAwRITXAAIAAQRg");
	var mask_3_graphics_50 = new cjs.Graphics().p("AprIUIAAwnITXAAIAAQng");
	var mask_3_graphics_51 = new cjs.Graphics().p("AprIeIAAw7ITXAAIAAQ7g");
	var mask_3_graphics_52 = new cjs.Graphics().p("AprIpIAAxRITXAAIAARRg");
	var mask_3_graphics_53 = new cjs.Graphics().p("AprI0IAAxnITXAAIAARng");
	var mask_3_graphics_54 = new cjs.Graphics().p("AprI+IAAx7ITXAAIAAR7g");
	var mask_3_graphics_55 = new cjs.Graphics().p("AprJJIAAyRITXAAIAASRg");
	var mask_3_graphics_56 = new cjs.Graphics().p("AprJUIAAynITXAAIAASng");
	var mask_3_graphics_57 = new cjs.Graphics().p("AprJfIAAy9ITXAAIAAS9g");
	var mask_3_graphics_58 = new cjs.Graphics().p("AprJpIAAzRITXAAIAATRg");
	var mask_3_graphics_59 = new cjs.Graphics().p("AprJ0IAAznITXAAIAATng");
	var mask_3_graphics_60 = new cjs.Graphics().p("AprJ/IAAz9ITXAAIAAT9g");
	var mask_3_graphics_61 = new cjs.Graphics().p("AprKJIAA0RITXAAIAAURg");
	var mask_3_graphics_62 = new cjs.Graphics().p("AprKUIAA0nITXAAIAAUng");
	var mask_3_graphics_63 = new cjs.Graphics().p("AprKfIAA09ITXAAIAAU9g");
	var mask_3_graphics_64 = new cjs.Graphics().p("AprKqIAA1TITXAAIAAVTg");
	var mask_3_graphics_65 = new cjs.Graphics().p("AprK0IAA1nITXAAIAAVng");
	var mask_3_graphics_66 = new cjs.Graphics().p("AprK/IAA19ITXAAIAAV9g");
	var mask_3_graphics_67 = new cjs.Graphics().p("AprLKIAA2TITXAAIAAWTg");
	var mask_3_graphics_68 = new cjs.Graphics().p("AprLUIAA2oITXAAIAAWog");
	var mask_3_graphics_69 = new cjs.Graphics().p("AprLfIAA29ITXAAIAAW9g");
	var mask_3_graphics_70 = new cjs.Graphics().p("AprLqIAA3TITXAAIAAXTg");
	var mask_3_graphics_71 = new cjs.Graphics().p("AprL0IAA3oITXAAIAAXog");
	var mask_3_graphics_72 = new cjs.Graphics().p("AprL/IAA39ITXAAIAAX9g");
	var mask_3_graphics_73 = new cjs.Graphics().p("AprMKIAA4TITXAAIAAYTg");
	var mask_3_graphics_74 = new cjs.Graphics().p("EAOYAiOIAA4pITYAAIAAYpg");
	var mask_3_graphics_75 = new cjs.Graphics().p("AprMfIAA49ITXAAIAAY9g");
	var mask_3_graphics_76 = new cjs.Graphics().p("AprMpIAA5SITXAAIAAZSg");
	var mask_3_graphics_77 = new cjs.Graphics().p("AprM0IAA5nITXAAIAAZng");
	var mask_3_graphics_78 = new cjs.Graphics().p("AprM+IAA57ITXAAIAAZ7g");
	var mask_3_graphics_79 = new cjs.Graphics().p("AprNIIAA6QITXAAIAAaQg");
	var mask_3_graphics_80 = new cjs.Graphics().p("AprNTIAA6lITXAAIAAalg");
	var mask_3_graphics_81 = new cjs.Graphics().p("AprNdIAA65ITXAAIAAa5g");
	var mask_3_graphics_82 = new cjs.Graphics().p("AprNnIAA7NITXAAIAAbNg");
	var mask_3_graphics_83 = new cjs.Graphics().p("AprNyIAA7jITXAAIAAbjg");
	var mask_3_graphics_84 = new cjs.Graphics().p("AprN8IAA73ITXAAIAAb3g");
	var mask_3_graphics_85 = new cjs.Graphics().p("AprOGIAA8LITXAAIAAcLg");
	var mask_3_graphics_86 = new cjs.Graphics().p("AprORIAA8hITXAAIAAchg");
	var mask_3_graphics_87 = new cjs.Graphics().p("AprObIAA81ITXAAIAAc1g");
	var mask_3_graphics_88 = new cjs.Graphics().p("AprOlIAA9JITXAAIAAdJg");
	var mask_3_graphics_89 = new cjs.Graphics().p("AprOwIAA9fITXAAIAAdfg");
	var mask_3_graphics_90 = new cjs.Graphics().p("AprO6IAA9zITXAAIAAdzg");
	var mask_3_graphics_91 = new cjs.Graphics().p("AprPFIAA+JITXAAIAAeJg");
	var mask_3_graphics_92 = new cjs.Graphics().p("AprPPIAA+dITXAAIAAedg");
	var mask_3_graphics_93 = new cjs.Graphics().p("AprPZIAA+xITXAAIAAexg");
	var mask_3_graphics_94 = new cjs.Graphics().p("AprPkIAA/HITXAAIAAfHg");
	var mask_3_graphics_95 = new cjs.Graphics().p("AprPuIAA/bITXAAIAAfbg");
	var mask_3_graphics_96 = new cjs.Graphics().p("AprP4IAA/wITXAAIAAfwg");
	var mask_3_graphics_97 = new cjs.Graphics().p("AprQDMAAAggFITXAAMAAAAgFg");
	var mask_3_graphics_98 = new cjs.Graphics().p("AprQNMAAAggZITXAAMAAAAgZg");
	var mask_3_graphics_99 = new cjs.Graphics().p("AprQXMAAAgguITXAAMAAAAgug");
	var mask_3_graphics_100 = new cjs.Graphics().p("AprQiMAAAghDITXAAMAAAAhDg");
	var mask_3_graphics_101 = new cjs.Graphics().p("AprQsMAAAghXITXAAMAAAAhXg");
	var mask_3_graphics_102 = new cjs.Graphics().p("AprQ2MAAAghrITXAAMAAAAhrg");
	var mask_3_graphics_103 = new cjs.Graphics().p("AprRBMAAAgiBITXAAMAAAAiBg");
	var mask_3_graphics_104 = new cjs.Graphics().p("AprRLMAAAgiVITXAAMAAAAiVg");
	var mask_3_graphics_105 = new cjs.Graphics().p("AprRVMAAAgipITXAAMAAAAipg");
	var mask_3_graphics_106 = new cjs.Graphics().p("AprRgMAAAgi/ITXAAMAAAAi/g");
	var mask_3_graphics_107 = new cjs.Graphics().p("AprRqMAAAgjTITXAAMAAAAjTg");
	var mask_3_graphics_108 = new cjs.Graphics().p("AprR0MAAAgjnITXAAMAAAAjng");
	var mask_3_graphics_109 = new cjs.Graphics().p("AprR/MAAAgj9ITXAAMAAAAj9g");
	var mask_3_graphics_110 = new cjs.Graphics().p("AprSJMAAAgkRITXAAMAAAAkRg");
	var mask_3_graphics_111 = new cjs.Graphics().p("AprSTMAAAgklITXAAMAAAAklg");
	var mask_3_graphics_112 = new cjs.Graphics().p("AprSeMAAAgk7ITXAAMAAAAk7g");
	var mask_3_graphics_113 = new cjs.Graphics().p("AprSoMAAAglPITXAAMAAAAlPg");
	var mask_3_graphics_114 = new cjs.Graphics().p("AprSzMAAAgllITXAAMAAAAllg");
	var mask_3_graphics_115 = new cjs.Graphics().p("EAOYAiOMAAAgl5ITYAAMAAAAl5g");
	var mask_3_graphics_116 = new cjs.Graphics().p("ApnTGMAAAgmLITPAAMAAAAmLg");
	var mask_3_graphics_117 = new cjs.Graphics().p("ApjTPMAAAgmdITHAAMAAAAmdg");
	var mask_3_graphics_118 = new cjs.Graphics().p("ApfTYMAAAgmvIS+AAMAAAAmvg");
	var mask_3_graphics_119 = new cjs.Graphics().p("ApaThMAAAgnBIS1AAMAAAAnBg");
	var mask_3_graphics_120 = new cjs.Graphics().p("ApWTqMAAAgnTIStAAMAAAAnTg");
	var mask_3_graphics_121 = new cjs.Graphics().p("ApSTyMAAAgnjISlAAMAAAAnjg");
	var mask_3_graphics_122 = new cjs.Graphics().p("ApOT7MAAAgn1ISdAAMAAAAn1g");
	var mask_3_graphics_123 = new cjs.Graphics().p("ApKUEMAAAgoHISVAAMAAAAoHg");
	var mask_3_graphics_124 = new cjs.Graphics().p("ApGUNMAAAgoZISNAAMAAAAoZg");
	var mask_3_graphics_125 = new cjs.Graphics().p("ApCUWMAAAgorISFAAMAAAAorg");
	var mask_3_graphics_126 = new cjs.Graphics().p("Ao9UfMAAAgo9IR7AAMAAAAo9g");
	var mask_3_graphics_127 = new cjs.Graphics().p("Ao5UoMAAAgpPIRzAAMAAAApPg");
	var mask_3_graphics_128 = new cjs.Graphics().p("Ao1UxMAAAgphIRrAAMAAAAphg");
	var mask_3_graphics_129 = new cjs.Graphics().p("AoxU6MAAAgpzIRjAAMAAAApzg");
	var mask_3_graphics_130 = new cjs.Graphics().p("AotVDMAAAgqFIRbAAMAAAAqFg");
	var mask_3_graphics_131 = new cjs.Graphics().p("AopVMMAAAgqXIRSAAMAAAAqXg");
	var mask_3_graphics_132 = new cjs.Graphics().p("AokVVMAAAgqpIRJAAMAAAAqpg");
	var mask_3_graphics_133 = new cjs.Graphics().p("AogVeMAAAgq7IRBAAMAAAAq7g");
	var mask_3_graphics_134 = new cjs.Graphics().p("AocVnMAAAgrNIQ5AAMAAAArNg");
	var mask_3_graphics_135 = new cjs.Graphics().p("AoYVwMAAAgrfIQxAAMAAAArfg");
	var mask_3_graphics_136 = new cjs.Graphics().p("AoUV5MAAAgrxIQpAAMAAAArxg");
	var mask_3_graphics_137 = new cjs.Graphics().p("AoQWBMAAAgsBIQhAAMAAAAsBg");
	var mask_3_graphics_138 = new cjs.Graphics().p("AoMWKMAAAgsTIQZAAMAAAAsTg");
	var mask_3_graphics_139 = new cjs.Graphics().p("AoHWTMAAAgslIQPAAMAAAAslg");
	var mask_3_graphics_140 = new cjs.Graphics().p("AoDWcMAAAgs3IQHAAMAAAAs3g");
	var mask_3_graphics_141 = new cjs.Graphics().p("An/WlMAAAgtJIP/AAMAAAAtJg");
	var mask_3_graphics_142 = new cjs.Graphics().p("An7WuMAAAgtbIP3AAMAAAAtbg");
	var mask_3_graphics_143 = new cjs.Graphics().p("An3W3MAAAgttIPuAAMAAAAttg");
	var mask_3_graphics_144 = new cjs.Graphics().p("AnzXAMAAAgt/IPmAAMAAAAt/g");
	var mask_3_graphics_145 = new cjs.Graphics().p("AnuXJMAAAguRIPdAAMAAAAuRg");
	var mask_3_graphics_146 = new cjs.Graphics().p("AnqXSMAAAgujIPVAAMAAAAujg");
	var mask_3_graphics_147 = new cjs.Graphics().p("AnmXbMAAAgu1IPNAAMAAAAu1g");
	var mask_3_graphics_148 = new cjs.Graphics().p("AniXkMAAAgvHIPFAAMAAAAvHg");
	var mask_3_graphics_149 = new cjs.Graphics().p("AneXtMAAAgvYIO9AAMAAAAvYg");
	var mask_3_graphics_150 = new cjs.Graphics().p("AnaX2MAAAgvqIO1AAMAAAAvqg");
	var mask_3_graphics_151 = new cjs.Graphics().p("AnVX/MAAAgv8IOrAAMAAAAv8g");
	var mask_3_graphics_152 = new cjs.Graphics().p("EAQuAiOMAAAg0AIOsAAMAAAA0Ag");
	var mask_3_graphics_153 = new cjs.Graphics().p("AnoaBMAAAg0AIPRAAMAAAA0Ag");
	var mask_3_graphics_154 = new cjs.Graphics().p("An7aBMAAAg0AIP3AAMAAAA0Ag");
	var mask_3_graphics_155 = new cjs.Graphics().p("AoNaBMAAAg0AIQbAAMAAAA0Ag");
	var mask_3_graphics_156 = new cjs.Graphics().p("AofaBMAAAg0AIRAAAMAAAA0Ag");
	var mask_3_graphics_157 = new cjs.Graphics().p("AoyaBMAAAg0AIRlAAMAAAA0Ag");
	var mask_3_graphics_158 = new cjs.Graphics().p("ApFaBMAAAg0AISLAAMAAAA0Ag");
	var mask_3_graphics_159 = new cjs.Graphics().p("ApXaBMAAAg0AISvAAMAAAA0Ag");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_3_graphics_9,x:216,y:219}).wait(1).to({graphics:mask_3_graphics_10,x:370,y:427.7}).wait(1).to({graphics:mask_3_graphics_11,x:370,y:426.7}).wait(1).to({graphics:mask_3_graphics_12,x:370,y:425.6}).wait(1).to({graphics:mask_3_graphics_13,x:370,y:424.5}).wait(1).to({graphics:mask_3_graphics_14,x:370,y:423.5}).wait(1).to({graphics:mask_3_graphics_15,x:370,y:422.4}).wait(1).to({graphics:mask_3_graphics_16,x:370,y:421.3}).wait(1).to({graphics:mask_3_graphics_17,x:370,y:420.2}).wait(1).to({graphics:mask_3_graphics_18,x:370,y:419.2}).wait(1).to({graphics:mask_3_graphics_19,x:370,y:418.1}).wait(1).to({graphics:mask_3_graphics_20,x:370,y:417}).wait(1).to({graphics:mask_3_graphics_21,x:370,y:416}).wait(1).to({graphics:mask_3_graphics_22,x:370,y:414.9}).wait(1).to({graphics:mask_3_graphics_23,x:370,y:413.8}).wait(1).to({graphics:mask_3_graphics_24,x:370,y:412.7}).wait(1).to({graphics:mask_3_graphics_25,x:370,y:411.7}).wait(1).to({graphics:mask_3_graphics_26,x:370,y:410.6}).wait(1).to({graphics:mask_3_graphics_27,x:370,y:409.5}).wait(1).to({graphics:mask_3_graphics_28,x:370,y:408.5}).wait(1).to({graphics:mask_3_graphics_29,x:370,y:407.4}).wait(1).to({graphics:mask_3_graphics_30,x:370,y:406.3}).wait(1).to({graphics:mask_3_graphics_31,x:370,y:405.2}).wait(1).to({graphics:mask_3_graphics_32,x:370,y:404.2}).wait(1).to({graphics:mask_3_graphics_33,x:370,y:403.1}).wait(1).to({graphics:mask_3_graphics_34,x:370,y:402}).wait(1).to({graphics:mask_3_graphics_35,x:370,y:401}).wait(1).to({graphics:mask_3_graphics_36,x:370,y:399.9}).wait(1).to({graphics:mask_3_graphics_37,x:370,y:398.8}).wait(1).to({graphics:mask_3_graphics_38,x:370,y:397.7}).wait(1).to({graphics:mask_3_graphics_39,x:370,y:396.7}).wait(1).to({graphics:mask_3_graphics_40,x:370,y:395.6}).wait(1).to({graphics:mask_3_graphics_41,x:370,y:394.5}).wait(1).to({graphics:mask_3_graphics_42,x:370,y:393.5}).wait(1).to({graphics:mask_3_graphics_43,x:370,y:392.4}).wait(1).to({graphics:mask_3_graphics_44,x:370,y:391.3}).wait(1).to({graphics:mask_3_graphics_45,x:370,y:390.3}).wait(1).to({graphics:mask_3_graphics_46,x:370,y:389.2}).wait(1).to({graphics:mask_3_graphics_47,x:370,y:388.1}).wait(1).to({graphics:mask_3_graphics_48,x:370,y:387}).wait(1).to({graphics:mask_3_graphics_49,x:370,y:386}).wait(1).to({graphics:mask_3_graphics_50,x:370,y:384.9}).wait(1).to({graphics:mask_3_graphics_51,x:370,y:383.8}).wait(1).to({graphics:mask_3_graphics_52,x:370,y:382.8}).wait(1).to({graphics:mask_3_graphics_53,x:370,y:381.7}).wait(1).to({graphics:mask_3_graphics_54,x:370,y:380.6}).wait(1).to({graphics:mask_3_graphics_55,x:370,y:379.5}).wait(1).to({graphics:mask_3_graphics_56,x:370,y:378.5}).wait(1).to({graphics:mask_3_graphics_57,x:370,y:377.4}).wait(1).to({graphics:mask_3_graphics_58,x:370,y:376.3}).wait(1).to({graphics:mask_3_graphics_59,x:370,y:375.3}).wait(1).to({graphics:mask_3_graphics_60,x:370,y:374.2}).wait(1).to({graphics:mask_3_graphics_61,x:370,y:373.1}).wait(1).to({graphics:mask_3_graphics_62,x:370,y:372}).wait(1).to({graphics:mask_3_graphics_63,x:370,y:371}).wait(1).to({graphics:mask_3_graphics_64,x:370,y:369.9}).wait(1).to({graphics:mask_3_graphics_65,x:370,y:368.8}).wait(1).to({graphics:mask_3_graphics_66,x:370,y:367.8}).wait(1).to({graphics:mask_3_graphics_67,x:370,y:366.7}).wait(1).to({graphics:mask_3_graphics_68,x:370,y:365.6}).wait(1).to({graphics:mask_3_graphics_69,x:370,y:364.5}).wait(1).to({graphics:mask_3_graphics_70,x:370,y:363.5}).wait(1).to({graphics:mask_3_graphics_71,x:370,y:362.4}).wait(1).to({graphics:mask_3_graphics_72,x:370,y:361.3}).wait(1).to({graphics:mask_3_graphics_73,x:370,y:360.3}).wait(1).to({graphics:mask_3_graphics_74,x:216,y:219}).wait(1).to({graphics:mask_3_graphics_75,x:370,y:358.2}).wait(1).to({graphics:mask_3_graphics_76,x:370,y:357.1}).wait(1).to({graphics:mask_3_graphics_77,x:370,y:356.1}).wait(1).to({graphics:mask_3_graphics_78,x:370,y:355}).wait(1).to({graphics:mask_3_graphics_79,x:370,y:354}).wait(1).to({graphics:mask_3_graphics_80,x:370,y:353}).wait(1).to({graphics:mask_3_graphics_81,x:370,y:351.9}).wait(1).to({graphics:mask_3_graphics_82,x:370,y:350.9}).wait(1).to({graphics:mask_3_graphics_83,x:370,y:349.9}).wait(1).to({graphics:mask_3_graphics_84,x:370,y:348.8}).wait(1).to({graphics:mask_3_graphics_85,x:370,y:347.8}).wait(1).to({graphics:mask_3_graphics_86,x:370,y:346.8}).wait(1).to({graphics:mask_3_graphics_87,x:370,y:345.7}).wait(1).to({graphics:mask_3_graphics_88,x:370,y:344.7}).wait(1).to({graphics:mask_3_graphics_89,x:370,y:343.7}).wait(1).to({graphics:mask_3_graphics_90,x:370,y:342.6}).wait(1).to({graphics:mask_3_graphics_91,x:370,y:341.6}).wait(1).to({graphics:mask_3_graphics_92,x:370,y:340.6}).wait(1).to({graphics:mask_3_graphics_93,x:370,y:339.5}).wait(1).to({graphics:mask_3_graphics_94,x:370,y:338.5}).wait(1).to({graphics:mask_3_graphics_95,x:370,y:337.5}).wait(1).to({graphics:mask_3_graphics_96,x:370,y:336.4}).wait(1).to({graphics:mask_3_graphics_97,x:370,y:335.4}).wait(1).to({graphics:mask_3_graphics_98,x:370,y:334.4}).wait(1).to({graphics:mask_3_graphics_99,x:370,y:333.3}).wait(1).to({graphics:mask_3_graphics_100,x:370,y:332.3}).wait(1).to({graphics:mask_3_graphics_101,x:370,y:331.2}).wait(1).to({graphics:mask_3_graphics_102,x:370,y:330.2}).wait(1).to({graphics:mask_3_graphics_103,x:370,y:329.2}).wait(1).to({graphics:mask_3_graphics_104,x:370,y:328.1}).wait(1).to({graphics:mask_3_graphics_105,x:370,y:327.1}).wait(1).to({graphics:mask_3_graphics_106,x:370,y:326.1}).wait(1).to({graphics:mask_3_graphics_107,x:370,y:325}).wait(1).to({graphics:mask_3_graphics_108,x:370,y:324}).wait(1).to({graphics:mask_3_graphics_109,x:370,y:323}).wait(1).to({graphics:mask_3_graphics_110,x:370,y:321.9}).wait(1).to({graphics:mask_3_graphics_111,x:370,y:320.9}).wait(1).to({graphics:mask_3_graphics_112,x:370,y:319.9}).wait(1).to({graphics:mask_3_graphics_113,x:370,y:318.8}).wait(1).to({graphics:mask_3_graphics_114,x:370,y:317.8}).wait(1).to({graphics:mask_3_graphics_115,x:216,y:219}).wait(1).to({graphics:mask_3_graphics_116,x:369.6,y:315.9}).wait(1).to({graphics:mask_3_graphics_117,x:369.2,y:315}).wait(1).to({graphics:mask_3_graphics_118,x:368.8,y:314.1}).wait(1).to({graphics:mask_3_graphics_119,x:368.3,y:313.2}).wait(1).to({graphics:mask_3_graphics_120,x:367.9,y:312.3}).wait(1).to({graphics:mask_3_graphics_121,x:367.5,y:311.4}).wait(1).to({graphics:mask_3_graphics_122,x:367.1,y:310.5}).wait(1).to({graphics:mask_3_graphics_123,x:366.7,y:309.6}).wait(1).to({graphics:mask_3_graphics_124,x:366.3,y:308.7}).wait(1).to({graphics:mask_3_graphics_125,x:365.9,y:307.8}).wait(1).to({graphics:mask_3_graphics_126,x:365.4,y:306.9}).wait(1).to({graphics:mask_3_graphics_127,x:365,y:306}).wait(1).to({graphics:mask_3_graphics_128,x:364.6,y:305.1}).wait(1).to({graphics:mask_3_graphics_129,x:364.2,y:304.2}).wait(1).to({graphics:mask_3_graphics_130,x:363.8,y:303.3}).wait(1).to({graphics:mask_3_graphics_131,x:363.4,y:302.4}).wait(1).to({graphics:mask_3_graphics_132,x:362.9,y:301.5}).wait(1).to({graphics:mask_3_graphics_133,x:362.5,y:300.7}).wait(1).to({graphics:mask_3_graphics_134,x:362.1,y:299.8}).wait(1).to({graphics:mask_3_graphics_135,x:361.7,y:298.9}).wait(1).to({graphics:mask_3_graphics_136,x:361.3,y:298}).wait(1).to({graphics:mask_3_graphics_137,x:360.9,y:297.1}).wait(1).to({graphics:mask_3_graphics_138,x:360.5,y:296.2}).wait(1).to({graphics:mask_3_graphics_139,x:360,y:295.3}).wait(1).to({graphics:mask_3_graphics_140,x:359.6,y:294.4}).wait(1).to({graphics:mask_3_graphics_141,x:359.2,y:293.5}).wait(1).to({graphics:mask_3_graphics_142,x:358.8,y:292.6}).wait(1).to({graphics:mask_3_graphics_143,x:358.4,y:291.7}).wait(1).to({graphics:mask_3_graphics_144,x:358,y:290.8}).wait(1).to({graphics:mask_3_graphics_145,x:357.5,y:289.9}).wait(1).to({graphics:mask_3_graphics_146,x:357.1,y:289}).wait(1).to({graphics:mask_3_graphics_147,x:356.7,y:288.1}).wait(1).to({graphics:mask_3_graphics_148,x:356.3,y:287.2}).wait(1).to({graphics:mask_3_graphics_149,x:355.9,y:286.4}).wait(1).to({graphics:mask_3_graphics_150,x:355.5,y:285.5}).wait(1).to({graphics:mask_3_graphics_151,x:355,y:284.6}).wait(1).to({graphics:mask_3_graphics_152,x:201,y:219}).wait(1).to({graphics:mask_3_graphics_153,x:356.9,y:271.6}).wait(1).to({graphics:mask_3_graphics_154,x:358.8,y:271.6}).wait(1).to({graphics:mask_3_graphics_155,x:360.6,y:271.6}).wait(1).to({graphics:mask_3_graphics_156,x:362.5,y:271.6}).wait(1).to({graphics:mask_3_graphics_157,x:364.4,y:271.6}).wait(1).to({graphics:mask_3_graphics_158,x:366.2,y:271.6}).wait(1).to({graphics:mask_3_graphics_159,x:368.1,y:271.6}).wait(431));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("AHn2uQmIBUjpGiQjqGhhTHUQhTHTCMHYQBhFKCED9");
	this.shape_4.setTransform(369,275);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(9).to({_off:false},0).wait(581));

	// Letter
	this.instance_4 = new lib.I("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,275);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(590));

	// Background
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_5.setTransform(275,275,3.373,2.543);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_6.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(590));

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